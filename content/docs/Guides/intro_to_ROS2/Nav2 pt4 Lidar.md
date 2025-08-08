---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636LMKYMX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDNF%2BwI5p24iD7gXCHCrUvI2McNfPZQjls%2FZUvysIAmiQIhAKP4kElF4J2%2Bx2DG9iUggZ9g7z9aB%2BToPuBGU1vZswohKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwt6GCFqFNxww40ZgMq3AM2GTSU6GJXLqMVBCySn6OKLznjU5Qpc8WMry0kYrugp%2Bat7DWx0tFYcv8R5yEdp5S3GBLSIUrCISbl64ge2gj%2F4PdIEqZF3GouJSDxdcgZimYhR5SkonriPBeXCHpwmhujvQdsPnT4cHz2WhelwaNk8XxC2wzk8muU74OUmCvCQjjXJyfmV%2FlQ9Bqsm84wxP4kFTFECDid%2FqT0%2BzznwdyFe2ITUN%2FIEGCA%2BiQJ3fW4vXXgkIIZ7%2F42qd3bQCz4YidRBsUBnIEjB9CoU3LtcDvzspZrah7s%2FM3WdngccjZw3eXrLpm8MuLoHp5wXr45yIOlpbcPMg%2FI8AxlEXAGu7%2FTacfsPde3WGnkh27Cee4U%2F8gXs%2FRFxu5WPTX0gfrX4RaWp%2Bv5huMCEx4nPfUTEEUASlRQwpkSPe0y1TjJ6BjJqLSCntC%2BaoBQNFlV3RrnK4e75rJ74UUIB4kiKMfUuX1I3VDzTMbl%2F9FWJMHi6hf1rNBjCSAfGV9l%2FuXj1k%2B379b5aRB2%2F5kRdIMe5GtrZKHwvOSuLrv9OcEDHfe2P9gdw6r2rutUxcZRq9Y4DVOP2IgNCG9jrIIUlCEQ95WJUk8%2Fh9NtEeF8WLbJovtYFuo6Bf2OU64r9o%2F4sdY%2FETCy39nEBjqkASQ5kSI5aTnGpMPu2m5L1cSNXIKBCjFOI8RopL7jz0VuLAE4ZgGTtZt5sBqmOmB6SzxXXJWiP3IkXSbDgG4dP%2FDY8BMGCxcrqalSkUJyMV0ppgjS0WwYJdDF9AT7is%2FykKqwg5mH1cu8a2pfXMz6o0FBWaeLODil%2BDAEsdYIiq%2BlRPPOmBIqEUw9oRM9oqcuFkOpM86PGZJVdNRGSEn%2BP6byeTbg&X-Amz-Signature=72f444123473ecff7b9e91ef011450d95092f80d7b2fd538577d050982f1990a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZCDLFS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICQZohGi4HHAQSV8Vq59vsmD3sglKeOMeyNoIYA0B3YeAiEAzplC1ouqkQ8Squ0AesoQwNalSerJ5LOnQ9OPWjnAvboqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2t6w%2FZ%2BYH%2BPbDZryrcA63Km6U0Uk6vEr3igxeIuuoKEz8hkVaHmlkXJwGoodu%2BIpERBBl98w2dFrSdc%2BsUB2avDW8GKrlJlKAlwdzp9DqSgMV4fsUPW8diX6Sjvf8L07gS9eKJedAuXFNre3hNjC1DAbT63rv0c09%2FnhQZrrs12B9nZwYYhyH4c5Uw0oTlE55oNTovQiOQkXnobbJIrhMoAV5cIxLzLg0wg2xIlpda9YN7Emyp0jDWLm2RM4C%2BMxpMjG4cflj4FGCWBAVWaNW47N1SZoHiW7%2BGyejwINKvF4do07Pl9ZxY3TrZsKFNxdNYxI9Ro2Z8PU%2BZoLUlPVYq%2Fda7wKVHmZPxu%2FclrH8aObulXkrYJVAxcR9gyeqZvHC9LNzxnbws%2B%2FoLRTSaEjaBfZSQ7D701FoSieOPwRvZnQTs8fn1cpzc%2BDgUfw09RTlSW%2BIAYwHJJtLzXyrZ%2FM3f1I8PqMKNaot%2BBqM792igv1wT63FzzJXgYtcpcCKJkzo%2FmFqQdStcDsAq6uckzYWoSGLxkI9P0KWu5o%2Fqtqj2X6o9Hbdi73QEnG9hbvWZD4SKbzJ8JTBhLAG9hNwTa7R2GR1gmChYUU5cwceFrDSblCaJfVlBPBHskdz4ooTxETDuOZelmGCeqBjqMMvf2cQGOqUBjBu2sMYUghKo%2BAWGbeQLUyfc%2Ft8VfUmCluVo2PetYNG7PIJ1vEl76xgMVp7eqIwI1l7DDey520k8sIMHnvhEwj3ECOP%2FyNx2avQokR70TqDqpVbxlocpXuac7oi0m05kQFsOl8jPa4cVwSXMoox8XcUU92WHQq%2B8MaPOibItSspF5mX1q%2BZL4JHV8epUVqU92a3GKhAiBDpfQYEjKZScdPfe4qRs&X-Amz-Signature=cfdabf36315a854fbc4d309beae017dfd467da43c73f27aa136d5af76f251ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZCDLFS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICQZohGi4HHAQSV8Vq59vsmD3sglKeOMeyNoIYA0B3YeAiEAzplC1ouqkQ8Squ0AesoQwNalSerJ5LOnQ9OPWjnAvboqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2t6w%2FZ%2BYH%2BPbDZryrcA63Km6U0Uk6vEr3igxeIuuoKEz8hkVaHmlkXJwGoodu%2BIpERBBl98w2dFrSdc%2BsUB2avDW8GKrlJlKAlwdzp9DqSgMV4fsUPW8diX6Sjvf8L07gS9eKJedAuXFNre3hNjC1DAbT63rv0c09%2FnhQZrrs12B9nZwYYhyH4c5Uw0oTlE55oNTovQiOQkXnobbJIrhMoAV5cIxLzLg0wg2xIlpda9YN7Emyp0jDWLm2RM4C%2BMxpMjG4cflj4FGCWBAVWaNW47N1SZoHiW7%2BGyejwINKvF4do07Pl9ZxY3TrZsKFNxdNYxI9Ro2Z8PU%2BZoLUlPVYq%2Fda7wKVHmZPxu%2FclrH8aObulXkrYJVAxcR9gyeqZvHC9LNzxnbws%2B%2FoLRTSaEjaBfZSQ7D701FoSieOPwRvZnQTs8fn1cpzc%2BDgUfw09RTlSW%2BIAYwHJJtLzXyrZ%2FM3f1I8PqMKNaot%2BBqM792igv1wT63FzzJXgYtcpcCKJkzo%2FmFqQdStcDsAq6uckzYWoSGLxkI9P0KWu5o%2Fqtqj2X6o9Hbdi73QEnG9hbvWZD4SKbzJ8JTBhLAG9hNwTa7R2GR1gmChYUU5cwceFrDSblCaJfVlBPBHskdz4ooTxETDuOZelmGCeqBjqMMvf2cQGOqUBjBu2sMYUghKo%2BAWGbeQLUyfc%2Ft8VfUmCluVo2PetYNG7PIJ1vEl76xgMVp7eqIwI1l7DDey520k8sIMHnvhEwj3ECOP%2FyNx2avQokR70TqDqpVbxlocpXuac7oi0m05kQFsOl8jPa4cVwSXMoox8XcUU92WHQq%2B8MaPOibItSspF5mX1q%2BZL4JHV8epUVqU92a3GKhAiBDpfQYEjKZScdPfe4qRs&X-Amz-Signature=abd6512c7f2016bf29cc8242e05d5187f38638ad61144ff51bf00a4fdc3cf310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZCDLFS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICQZohGi4HHAQSV8Vq59vsmD3sglKeOMeyNoIYA0B3YeAiEAzplC1ouqkQ8Squ0AesoQwNalSerJ5LOnQ9OPWjnAvboqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2t6w%2FZ%2BYH%2BPbDZryrcA63Km6U0Uk6vEr3igxeIuuoKEz8hkVaHmlkXJwGoodu%2BIpERBBl98w2dFrSdc%2BsUB2avDW8GKrlJlKAlwdzp9DqSgMV4fsUPW8diX6Sjvf8L07gS9eKJedAuXFNre3hNjC1DAbT63rv0c09%2FnhQZrrs12B9nZwYYhyH4c5Uw0oTlE55oNTovQiOQkXnobbJIrhMoAV5cIxLzLg0wg2xIlpda9YN7Emyp0jDWLm2RM4C%2BMxpMjG4cflj4FGCWBAVWaNW47N1SZoHiW7%2BGyejwINKvF4do07Pl9ZxY3TrZsKFNxdNYxI9Ro2Z8PU%2BZoLUlPVYq%2Fda7wKVHmZPxu%2FclrH8aObulXkrYJVAxcR9gyeqZvHC9LNzxnbws%2B%2FoLRTSaEjaBfZSQ7D701FoSieOPwRvZnQTs8fn1cpzc%2BDgUfw09RTlSW%2BIAYwHJJtLzXyrZ%2FM3f1I8PqMKNaot%2BBqM792igv1wT63FzzJXgYtcpcCKJkzo%2FmFqQdStcDsAq6uckzYWoSGLxkI9P0KWu5o%2Fqtqj2X6o9Hbdi73QEnG9hbvWZD4SKbzJ8JTBhLAG9hNwTa7R2GR1gmChYUU5cwceFrDSblCaJfVlBPBHskdz4ooTxETDuOZelmGCeqBjqMMvf2cQGOqUBjBu2sMYUghKo%2BAWGbeQLUyfc%2Ft8VfUmCluVo2PetYNG7PIJ1vEl76xgMVp7eqIwI1l7DDey520k8sIMHnvhEwj3ECOP%2FyNx2avQokR70TqDqpVbxlocpXuac7oi0m05kQFsOl8jPa4cVwSXMoox8XcUU92WHQq%2B8MaPOibItSspF5mX1q%2BZL4JHV8epUVqU92a3GKhAiBDpfQYEjKZScdPfe4qRs&X-Amz-Signature=f523da100223cce57b32d8a40415c89ef81ccc97659ed3593b419ca733d3c207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZCDLFS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICQZohGi4HHAQSV8Vq59vsmD3sglKeOMeyNoIYA0B3YeAiEAzplC1ouqkQ8Squ0AesoQwNalSerJ5LOnQ9OPWjnAvboqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2t6w%2FZ%2BYH%2BPbDZryrcA63Km6U0Uk6vEr3igxeIuuoKEz8hkVaHmlkXJwGoodu%2BIpERBBl98w2dFrSdc%2BsUB2avDW8GKrlJlKAlwdzp9DqSgMV4fsUPW8diX6Sjvf8L07gS9eKJedAuXFNre3hNjC1DAbT63rv0c09%2FnhQZrrs12B9nZwYYhyH4c5Uw0oTlE55oNTovQiOQkXnobbJIrhMoAV5cIxLzLg0wg2xIlpda9YN7Emyp0jDWLm2RM4C%2BMxpMjG4cflj4FGCWBAVWaNW47N1SZoHiW7%2BGyejwINKvF4do07Pl9ZxY3TrZsKFNxdNYxI9Ro2Z8PU%2BZoLUlPVYq%2Fda7wKVHmZPxu%2FclrH8aObulXkrYJVAxcR9gyeqZvHC9LNzxnbws%2B%2FoLRTSaEjaBfZSQ7D701FoSieOPwRvZnQTs8fn1cpzc%2BDgUfw09RTlSW%2BIAYwHJJtLzXyrZ%2FM3f1I8PqMKNaot%2BBqM792igv1wT63FzzJXgYtcpcCKJkzo%2FmFqQdStcDsAq6uckzYWoSGLxkI9P0KWu5o%2Fqtqj2X6o9Hbdi73QEnG9hbvWZD4SKbzJ8JTBhLAG9hNwTa7R2GR1gmChYUU5cwceFrDSblCaJfVlBPBHskdz4ooTxETDuOZelmGCeqBjqMMvf2cQGOqUBjBu2sMYUghKo%2BAWGbeQLUyfc%2Ft8VfUmCluVo2PetYNG7PIJ1vEl76xgMVp7eqIwI1l7DDey520k8sIMHnvhEwj3ECOP%2FyNx2avQokR70TqDqpVbxlocpXuac7oi0m05kQFsOl8jPa4cVwSXMoox8XcUU92WHQq%2B8MaPOibItSspF5mX1q%2BZL4JHV8epUVqU92a3GKhAiBDpfQYEjKZScdPfe4qRs&X-Amz-Signature=e285f36ca318ac6eb6ad5751edf3d5593bcf615c34a5e2399de9958992e5095e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZCDLFS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICQZohGi4HHAQSV8Vq59vsmD3sglKeOMeyNoIYA0B3YeAiEAzplC1ouqkQ8Squ0AesoQwNalSerJ5LOnQ9OPWjnAvboqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2t6w%2FZ%2BYH%2BPbDZryrcA63Km6U0Uk6vEr3igxeIuuoKEz8hkVaHmlkXJwGoodu%2BIpERBBl98w2dFrSdc%2BsUB2avDW8GKrlJlKAlwdzp9DqSgMV4fsUPW8diX6Sjvf8L07gS9eKJedAuXFNre3hNjC1DAbT63rv0c09%2FnhQZrrs12B9nZwYYhyH4c5Uw0oTlE55oNTovQiOQkXnobbJIrhMoAV5cIxLzLg0wg2xIlpda9YN7Emyp0jDWLm2RM4C%2BMxpMjG4cflj4FGCWBAVWaNW47N1SZoHiW7%2BGyejwINKvF4do07Pl9ZxY3TrZsKFNxdNYxI9Ro2Z8PU%2BZoLUlPVYq%2Fda7wKVHmZPxu%2FclrH8aObulXkrYJVAxcR9gyeqZvHC9LNzxnbws%2B%2FoLRTSaEjaBfZSQ7D701FoSieOPwRvZnQTs8fn1cpzc%2BDgUfw09RTlSW%2BIAYwHJJtLzXyrZ%2FM3f1I8PqMKNaot%2BBqM792igv1wT63FzzJXgYtcpcCKJkzo%2FmFqQdStcDsAq6uckzYWoSGLxkI9P0KWu5o%2Fqtqj2X6o9Hbdi73QEnG9hbvWZD4SKbzJ8JTBhLAG9hNwTa7R2GR1gmChYUU5cwceFrDSblCaJfVlBPBHskdz4ooTxETDuOZelmGCeqBjqMMvf2cQGOqUBjBu2sMYUghKo%2BAWGbeQLUyfc%2Ft8VfUmCluVo2PetYNG7PIJ1vEl76xgMVp7eqIwI1l7DDey520k8sIMHnvhEwj3ECOP%2FyNx2avQokR70TqDqpVbxlocpXuac7oi0m05kQFsOl8jPa4cVwSXMoox8XcUU92WHQq%2B8MaPOibItSspF5mX1q%2BZL4JHV8epUVqU92a3GKhAiBDpfQYEjKZScdPfe4qRs&X-Amz-Signature=fd7977f59fe11bba6f64caabbae2772b7fe3331fdac09725f6df0b0aa3073d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZCDLFS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICQZohGi4HHAQSV8Vq59vsmD3sglKeOMeyNoIYA0B3YeAiEAzplC1ouqkQ8Squ0AesoQwNalSerJ5LOnQ9OPWjnAvboqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2t6w%2FZ%2BYH%2BPbDZryrcA63Km6U0Uk6vEr3igxeIuuoKEz8hkVaHmlkXJwGoodu%2BIpERBBl98w2dFrSdc%2BsUB2avDW8GKrlJlKAlwdzp9DqSgMV4fsUPW8diX6Sjvf8L07gS9eKJedAuXFNre3hNjC1DAbT63rv0c09%2FnhQZrrs12B9nZwYYhyH4c5Uw0oTlE55oNTovQiOQkXnobbJIrhMoAV5cIxLzLg0wg2xIlpda9YN7Emyp0jDWLm2RM4C%2BMxpMjG4cflj4FGCWBAVWaNW47N1SZoHiW7%2BGyejwINKvF4do07Pl9ZxY3TrZsKFNxdNYxI9Ro2Z8PU%2BZoLUlPVYq%2Fda7wKVHmZPxu%2FclrH8aObulXkrYJVAxcR9gyeqZvHC9LNzxnbws%2B%2FoLRTSaEjaBfZSQ7D701FoSieOPwRvZnQTs8fn1cpzc%2BDgUfw09RTlSW%2BIAYwHJJtLzXyrZ%2FM3f1I8PqMKNaot%2BBqM792igv1wT63FzzJXgYtcpcCKJkzo%2FmFqQdStcDsAq6uckzYWoSGLxkI9P0KWu5o%2Fqtqj2X6o9Hbdi73QEnG9hbvWZD4SKbzJ8JTBhLAG9hNwTa7R2GR1gmChYUU5cwceFrDSblCaJfVlBPBHskdz4ooTxETDuOZelmGCeqBjqMMvf2cQGOqUBjBu2sMYUghKo%2BAWGbeQLUyfc%2Ft8VfUmCluVo2PetYNG7PIJ1vEl76xgMVp7eqIwI1l7DDey520k8sIMHnvhEwj3ECOP%2FyNx2avQokR70TqDqpVbxlocpXuac7oi0m05kQFsOl8jPa4cVwSXMoox8XcUU92WHQq%2B8MaPOibItSspF5mX1q%2BZL4JHV8epUVqU92a3GKhAiBDpfQYEjKZScdPfe4qRs&X-Amz-Signature=edb653cf0776859ec050f0cfe769ceeeb76a9e11c3717d5d2a831b465f238c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZCDLFS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICQZohGi4HHAQSV8Vq59vsmD3sglKeOMeyNoIYA0B3YeAiEAzplC1ouqkQ8Squ0AesoQwNalSerJ5LOnQ9OPWjnAvboqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2t6w%2FZ%2BYH%2BPbDZryrcA63Km6U0Uk6vEr3igxeIuuoKEz8hkVaHmlkXJwGoodu%2BIpERBBl98w2dFrSdc%2BsUB2avDW8GKrlJlKAlwdzp9DqSgMV4fsUPW8diX6Sjvf8L07gS9eKJedAuXFNre3hNjC1DAbT63rv0c09%2FnhQZrrs12B9nZwYYhyH4c5Uw0oTlE55oNTovQiOQkXnobbJIrhMoAV5cIxLzLg0wg2xIlpda9YN7Emyp0jDWLm2RM4C%2BMxpMjG4cflj4FGCWBAVWaNW47N1SZoHiW7%2BGyejwINKvF4do07Pl9ZxY3TrZsKFNxdNYxI9Ro2Z8PU%2BZoLUlPVYq%2Fda7wKVHmZPxu%2FclrH8aObulXkrYJVAxcR9gyeqZvHC9LNzxnbws%2B%2FoLRTSaEjaBfZSQ7D701FoSieOPwRvZnQTs8fn1cpzc%2BDgUfw09RTlSW%2BIAYwHJJtLzXyrZ%2FM3f1I8PqMKNaot%2BBqM792igv1wT63FzzJXgYtcpcCKJkzo%2FmFqQdStcDsAq6uckzYWoSGLxkI9P0KWu5o%2Fqtqj2X6o9Hbdi73QEnG9hbvWZD4SKbzJ8JTBhLAG9hNwTa7R2GR1gmChYUU5cwceFrDSblCaJfVlBPBHskdz4ooTxETDuOZelmGCeqBjqMMvf2cQGOqUBjBu2sMYUghKo%2BAWGbeQLUyfc%2Ft8VfUmCluVo2PetYNG7PIJ1vEl76xgMVp7eqIwI1l7DDey520k8sIMHnvhEwj3ECOP%2FyNx2avQokR70TqDqpVbxlocpXuac7oi0m05kQFsOl8jPa4cVwSXMoox8XcUU92WHQq%2B8MaPOibItSspF5mX1q%2BZL4JHV8epUVqU92a3GKhAiBDpfQYEjKZScdPfe4qRs&X-Amz-Signature=fe3fd25a38d4af8f11a6d1975a36ce0214eb8b9c636d5a349b754662d1891e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZCDLFS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICQZohGi4HHAQSV8Vq59vsmD3sglKeOMeyNoIYA0B3YeAiEAzplC1ouqkQ8Squ0AesoQwNalSerJ5LOnQ9OPWjnAvboqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2t6w%2FZ%2BYH%2BPbDZryrcA63Km6U0Uk6vEr3igxeIuuoKEz8hkVaHmlkXJwGoodu%2BIpERBBl98w2dFrSdc%2BsUB2avDW8GKrlJlKAlwdzp9DqSgMV4fsUPW8diX6Sjvf8L07gS9eKJedAuXFNre3hNjC1DAbT63rv0c09%2FnhQZrrs12B9nZwYYhyH4c5Uw0oTlE55oNTovQiOQkXnobbJIrhMoAV5cIxLzLg0wg2xIlpda9YN7Emyp0jDWLm2RM4C%2BMxpMjG4cflj4FGCWBAVWaNW47N1SZoHiW7%2BGyejwINKvF4do07Pl9ZxY3TrZsKFNxdNYxI9Ro2Z8PU%2BZoLUlPVYq%2Fda7wKVHmZPxu%2FclrH8aObulXkrYJVAxcR9gyeqZvHC9LNzxnbws%2B%2FoLRTSaEjaBfZSQ7D701FoSieOPwRvZnQTs8fn1cpzc%2BDgUfw09RTlSW%2BIAYwHJJtLzXyrZ%2FM3f1I8PqMKNaot%2BBqM792igv1wT63FzzJXgYtcpcCKJkzo%2FmFqQdStcDsAq6uckzYWoSGLxkI9P0KWu5o%2Fqtqj2X6o9Hbdi73QEnG9hbvWZD4SKbzJ8JTBhLAG9hNwTa7R2GR1gmChYUU5cwceFrDSblCaJfVlBPBHskdz4ooTxETDuOZelmGCeqBjqMMvf2cQGOqUBjBu2sMYUghKo%2BAWGbeQLUyfc%2Ft8VfUmCluVo2PetYNG7PIJ1vEl76xgMVp7eqIwI1l7DDey520k8sIMHnvhEwj3ECOP%2FyNx2avQokR70TqDqpVbxlocpXuac7oi0m05kQFsOl8jPa4cVwSXMoox8XcUU92WHQq%2B8MaPOibItSspF5mX1q%2BZL4JHV8epUVqU92a3GKhAiBDpfQYEjKZScdPfe4qRs&X-Amz-Signature=97fb060c677f7eba8a253eced37e01d148a0f068bb26b70d57d888d2c8bf1d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZCDLFS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICQZohGi4HHAQSV8Vq59vsmD3sglKeOMeyNoIYA0B3YeAiEAzplC1ouqkQ8Squ0AesoQwNalSerJ5LOnQ9OPWjnAvboqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2t6w%2FZ%2BYH%2BPbDZryrcA63Km6U0Uk6vEr3igxeIuuoKEz8hkVaHmlkXJwGoodu%2BIpERBBl98w2dFrSdc%2BsUB2avDW8GKrlJlKAlwdzp9DqSgMV4fsUPW8diX6Sjvf8L07gS9eKJedAuXFNre3hNjC1DAbT63rv0c09%2FnhQZrrs12B9nZwYYhyH4c5Uw0oTlE55oNTovQiOQkXnobbJIrhMoAV5cIxLzLg0wg2xIlpda9YN7Emyp0jDWLm2RM4C%2BMxpMjG4cflj4FGCWBAVWaNW47N1SZoHiW7%2BGyejwINKvF4do07Pl9ZxY3TrZsKFNxdNYxI9Ro2Z8PU%2BZoLUlPVYq%2Fda7wKVHmZPxu%2FclrH8aObulXkrYJVAxcR9gyeqZvHC9LNzxnbws%2B%2FoLRTSaEjaBfZSQ7D701FoSieOPwRvZnQTs8fn1cpzc%2BDgUfw09RTlSW%2BIAYwHJJtLzXyrZ%2FM3f1I8PqMKNaot%2BBqM792igv1wT63FzzJXgYtcpcCKJkzo%2FmFqQdStcDsAq6uckzYWoSGLxkI9P0KWu5o%2Fqtqj2X6o9Hbdi73QEnG9hbvWZD4SKbzJ8JTBhLAG9hNwTa7R2GR1gmChYUU5cwceFrDSblCaJfVlBPBHskdz4ooTxETDuOZelmGCeqBjqMMvf2cQGOqUBjBu2sMYUghKo%2BAWGbeQLUyfc%2Ft8VfUmCluVo2PetYNG7PIJ1vEl76xgMVp7eqIwI1l7DDey520k8sIMHnvhEwj3ECOP%2FyNx2avQokR70TqDqpVbxlocpXuac7oi0m05kQFsOl8jPa4cVwSXMoox8XcUU92WHQq%2B8MaPOibItSspF5mX1q%2BZL4JHV8epUVqU92a3GKhAiBDpfQYEjKZScdPfe4qRs&X-Amz-Signature=039f5f94c18aa6304fdedf0f3601c3ac3e66388af8915a4b7ac88dd5ea156064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZCDLFS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICQZohGi4HHAQSV8Vq59vsmD3sglKeOMeyNoIYA0B3YeAiEAzplC1ouqkQ8Squ0AesoQwNalSerJ5LOnQ9OPWjnAvboqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2t6w%2FZ%2BYH%2BPbDZryrcA63Km6U0Uk6vEr3igxeIuuoKEz8hkVaHmlkXJwGoodu%2BIpERBBl98w2dFrSdc%2BsUB2avDW8GKrlJlKAlwdzp9DqSgMV4fsUPW8diX6Sjvf8L07gS9eKJedAuXFNre3hNjC1DAbT63rv0c09%2FnhQZrrs12B9nZwYYhyH4c5Uw0oTlE55oNTovQiOQkXnobbJIrhMoAV5cIxLzLg0wg2xIlpda9YN7Emyp0jDWLm2RM4C%2BMxpMjG4cflj4FGCWBAVWaNW47N1SZoHiW7%2BGyejwINKvF4do07Pl9ZxY3TrZsKFNxdNYxI9Ro2Z8PU%2BZoLUlPVYq%2Fda7wKVHmZPxu%2FclrH8aObulXkrYJVAxcR9gyeqZvHC9LNzxnbws%2B%2FoLRTSaEjaBfZSQ7D701FoSieOPwRvZnQTs8fn1cpzc%2BDgUfw09RTlSW%2BIAYwHJJtLzXyrZ%2FM3f1I8PqMKNaot%2BBqM792igv1wT63FzzJXgYtcpcCKJkzo%2FmFqQdStcDsAq6uckzYWoSGLxkI9P0KWu5o%2Fqtqj2X6o9Hbdi73QEnG9hbvWZD4SKbzJ8JTBhLAG9hNwTa7R2GR1gmChYUU5cwceFrDSblCaJfVlBPBHskdz4ooTxETDuOZelmGCeqBjqMMvf2cQGOqUBjBu2sMYUghKo%2BAWGbeQLUyfc%2Ft8VfUmCluVo2PetYNG7PIJ1vEl76xgMVp7eqIwI1l7DDey520k8sIMHnvhEwj3ECOP%2FyNx2avQokR70TqDqpVbxlocpXuac7oi0m05kQFsOl8jPa4cVwSXMoox8XcUU92WHQq%2B8MaPOibItSspF5mX1q%2BZL4JHV8epUVqU92a3GKhAiBDpfQYEjKZScdPfe4qRs&X-Amz-Signature=e285f36ca318ac6eb6ad5751edf3d5593bcf615c34a5e2399de9958992e5095e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
