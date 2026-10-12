// Offline cache for Inhee's Gym. Bump VERSION whenever any file changes.
const VERSION = 'v2';
const CACHE = 'inhee-' + VERSION;
const FONTS = 'inhee-fonts';
const ASSETS = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "img/3d_pec_stretch_0.jpg",
  "img/3d_pec_stretch_1.jpg",
  "img/Arm_Circles_0.jpg",
  "img/Arm_Circles_1.jpg",
  "img/Barbell_Hip_Thrust_0.jpg",
  "img/Barbell_Hip_Thrust_1.jpg",
  "img/Bicycling_Stationary_0.jpg",
  "img/Bicycling_Stationary_1.jpg",
  "img/Bodyweight_Squat_0.jpg",
  "img/Bodyweight_Squat_1.jpg",
  "img/Bodyweight_Walking_Lunge_0.jpg",
  "img/Bodyweight_Walking_Lunge_1.jpg",
  "img/Butt_Lift_Bridge_0.jpg",
  "img/Butt_Lift_Bridge_1.jpg",
  "img/Calf_Stretch_Hands_Against_Wall_0.jpg",
  "img/Calf_Stretch_Hands_Against_Wall_1.jpg",
  "img/Cat_Stretch_0.jpg",
  "img/Cat_Stretch_1.jpg",
  "img/Childs_Pose_0.jpg",
  "img/Childs_Pose_1.jpg",
  "img/Dead_Bug_0.jpg",
  "img/Dead_Bug_1.jpg",
  "img/Dumbbell_Rear_Lunge_0.jpg",
  "img/Dumbbell_Rear_Lunge_1.jpg",
  "img/Dumbbell_Step_Ups_0.jpg",
  "img/Dumbbell_Step_Ups_1.jpg",
  "img/Face_Pull_0.jpg",
  "img/Face_Pull_1.jpg",
  "img/Front_Leg_Raises_0.jpg",
  "img/Front_Leg_Raises_1.jpg",
  "img/Goblet_Squat_0.jpg",
  "img/Goblet_Squat_1.jpg",
  "img/Groin_and_Back_Stretch_0.jpg",
  "img/Groin_and_Back_Stretch_1.jpg",
  "img/Hamstring_Stretch_0.jpg",
  "img/Hamstring_Stretch_1.jpg",
  "img/Hug_Knees_To_Chest_0.jpg",
  "img/Hug_Knees_To_Chest_1.jpg",
  "img/Hyperextensions_Back_Extensions_0.jpg",
  "img/Hyperextensions_Back_Extensions_1.jpg",
  "img/Inchworm_0.jpg",
  "img/Inchworm_1.jpg",
  "img/Jogging_Treadmill_0.jpg",
  "img/Jogging_Treadmill_1.jpg",
  "img/Knee_Across_The_Body_0.jpg",
  "img/Knee_Across_The_Body_1.jpg",
  "img/Knee_Hip_Raise_On_Parallel_Bars_0.jpg",
  "img/Knee_Hip_Raise_On_Parallel_Bars_1.jpg",
  "img/Kneeling_Hip_Flexor_0.jpg",
  "img/Kneeling_Hip_Flexor_1.jpg",
  "img/Leg_Extensions_0.jpg",
  "img/Leg_Extensions_1.jpg",
  "img/Leg_Press_0.jpg",
  "img/Leg_Press_1.jpg",
  "img/Lying_Leg_Curls_0.jpg",
  "img/Lying_Leg_Curls_1.jpg",
  "img/Machine_Bench_Press_0.jpg",
  "img/Machine_Bench_Press_1.jpg",
  "img/Mountain_Climbers_0.jpg",
  "img/Mountain_Climbers_1.jpg",
  "img/One-Arm_Dumbbell_Row_0.jpg",
  "img/One-Arm_Dumbbell_Row_1.jpg",
  "img/One-Arm_Kettlebell_Swings_0.jpg",
  "img/One-Arm_Kettlebell_Swings_1.jpg",
  "img/One-Legged_Cable_Kickback_0.jpg",
  "img/One-Legged_Cable_Kickback_1.jpg",
  "img/Pallof_Press_0.jpg",
  "img/Pallof_Press_1.jpg",
  "img/Plank_0.jpg",
  "img/Plank_1.jpg",
  "img/Plie_Dumbbell_Squat_0.jpg",
  "img/Plie_Dumbbell_Squat_1.jpg",
  "img/Quad_Stretch_1.jpg",
  "img/Quadriceps-SMR_0.jpg",
  "img/Quadriceps-SMR_1.jpg",
  "img/Romanian_Deadlift_0.jpg",
  "img/Romanian_Deadlift_1.jpg",
  "img/Seated_Cable_Rows_0.jpg",
  "img/Seated_Cable_Rows_1.jpg",
  "img/Seated_Dumbbell_Press_0.jpg",
  "img/Seated_Dumbbell_Press_1.jpg",
  "img/Side_Bridge_0.jpg",
  "img/Side_Bridge_1.jpg",
  "img/Smith_Machine_Squat_0.jpg",
  "img/Smith_Machine_Squat_1.jpg",
  "img/Split_Squat_with_Dumbbells_0.jpg",
  "img/Split_Squat_with_Dumbbells_1.jpg",
  "img/Standing_Cable_Wood_Chop_0.jpg",
  "img/Standing_Cable_Wood_Chop_1.jpg",
  "img/Standing_Hip_Circles_0.jpg",
  "img/Standing_Hip_Circles_1.jpg",
  "img/Star_Jump_0.jpg",
  "img/Star_Jump_1.jpg",
  "img/Step_Mill_0.jpg",
  "img/Step_Mill_1.jpg",
  "img/Stiff-Legged_Dumbbell_Deadlift_0.jpg",
  "img/Stiff-Legged_Dumbbell_Deadlift_1.jpg",
  "img/Straight-Arm_Pulldown_0.jpg",
  "img/Straight-Arm_Pulldown_1.jpg",
  "img/Thigh_Abductor_0.jpg",
  "img/Thigh_Abductor_1.jpg",
  "img/Thigh_Adductor_0.jpg",
  "img/Thigh_Adductor_1.jpg",
  "img/Torso_Rotation_0.jpg",
  "img/Torso_Rotation_1.jpg",
  "img/Triceps_Pushdown_-_Rope_Attachment_0.jpg",
  "img/Triceps_Pushdown_-_Rope_Attachment_1.jpg",
  "img/Walking_Treadmill_0.jpg",
  "img/Walking_Treadmill_1.jpg",
  "img/Wide-Grip_Lat_Pulldown_0.jpg",
  "img/Wide-Grip_Lat_Pulldown_1.jpg",
  "img/Worlds_Greatest_Stretch_0.jpg",
  "img/Worlds_Greatest_Stretch_1.jpg",
  "fig/Ab_Crunch_Machine.jpg",
  "fig/Dead_Bug.jpg",
  "fig/Face_Pull.jpg",
  "fig/Hack_Squat.jpg",
  "fig/Leg_Extensions.jpg",
  "fig/Leg_Press.jpg",
  "fig/Leverage_Iso_Row.jpg",
  "fig/Lying_Leg_Curls.jpg",
  "fig/Machine_Bench_Press.jpg",
  "fig/Machine_Shoulder_Military_Press.jpg",
  "fig/One-Legged_Cable_Kickback.jpg",
  "fig/Pallof_Press.jpg",
  "fig/Plank.jpg",
  "fig/Pull_Through.jpg",
  "fig/Seated_Cable_Rows.jpg",
  "fig/Standing_Cable_Wood_Chop.jpg",
  "fig/Straight-Arm_Pulldown.jpg",
  "fig/Thigh_Abductor.jpg",
  "fig/Triceps_Pushdown_-_Rope_Attachment.jpg",
  "fig/Wide-Grip_Lat_Pulldown.jpg"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('inhee-') && k !== CACHE && k !== FONTS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// The page itself: network first (so updates show up), cached copy when the gym has no signal
async function page(req) {
  const cache = await caches.open(CACHE);
  try {
    const res = await Promise.race([fetch(req), new Promise((_, no) => setTimeout(() => no(new Error('timeout')), 3500))]);
    if (res && res.ok) cache.put('index.html', res.clone());
    return res;
  } catch (err) {
    return (await cache.match('index.html')) || (await cache.match('./')) || Response.error();
  }
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    if (req.mode === 'navigate') { e.respondWith(page(req)); return; }
    e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(c => c.match(req).then(hit => hit || fetch(req).then(res => {
      c.put(req, res.clone());
      return res;
    }))));
  }
});
