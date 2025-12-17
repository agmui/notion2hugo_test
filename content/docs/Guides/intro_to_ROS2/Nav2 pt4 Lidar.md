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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISGAH37%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSu2ZCK4oUHULIkOkm6s39Oms51lrwcyaXNY6%2BXNQDvAIgWwmbV2JGspyirUtPR1xRMU936UYCiA7N%2FIWTMBWVpMAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGvzDwrCWLjoiLZlPSrcA%2BRKSOQE9Kkl8%2ForfWEfNrV6lW1kVy69s5c9pVPYz0okApeCW1Nr12QkKdpdpvjjrg6sqSZlp%2FbaxLuv12iVX9qfN6%2BZRf44cIKFZuuprcmDCmMzoN6zQ9yhlGsksmhLydAtXIZ4t4TKxExJi2VV53EOgyUk%2FKffOs1K0wSQza91e9CZqJJNWe6euaXQgDwOIiYEwjjjq3kagzoH0SdW5rIflRFk5MoDY5bSKpZyRkvsLhM7nCDabTocaKbw6QHoFbiTlpGa1LnBVkspXiLqa6Q32ESZLhaeN28eaP5AZRrCCebDLS7QcYgTiLhOFVqEc8yNiLQL0%2FWD%2FoSzBnW5P%2FKlAtQhdO86dDx3qT3hlzyCeH6P0HIC9nH6CwTDfZIETwTVKN7Wqg0%2BS4zYZZAxaUJcVkL4XnM1Vj57yF8wdSiT4M43oRl79aOEsUrJ5%2FBiL%2F%2BiBXNSvobUJ5FVCV3kuiNLHRWgwxOy991Ki8DtS7cLhvSzkxWMjWBPLjef8lSHm1hGJuWWM3EaVRwGMfTMXGNF27AiRm3RBzSiRukFjmoB38wPikQt%2FPC2Co1pWrteypgbhnxPdy6xMqrS6dDd39LQa13P9noUQSzFCvHBq390RGO2fJsFVf2H4EstMJr7h8oGOqUBW95pUihjra%2Bm69yW0GczH8k8GRrUD9X4PZfDW9TsRSBzCsKpYeSTU4rJqzMHtXR76%2FtPoe0mgU%2BDmkT8g%2FL19B%2BolsEPyaf%2BF2KrX9E7B8k%2F51WpbCwD%2BW%2FiI1ET%2Bc34p0Foo950IIH9bcMnEZkNsyvsjxP%2B6IhPOC2KZvPf9%2FBkb7u02jTWdgrzKV7qVBXKzxMHTdh9fqu08Sx87xRUYLftBfpk&X-Amz-Signature=60da113e1a9fcc20f0c9828c15684de0a08b6fc3363bb252dabc67a7642a5690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UUPNG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATHk1L0WqLDZh2XyL5Z7Ti7vU70moFgIHhitVOmJLulAiEA%2Foqpqg0HrDBNSs6Qu%2BJqCXemtY1IegkWysslDHHo37Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEVzdm%2FQvcIG0N1mCCrcA2hculeMMDuWnYwDl2t5CK9sezdb%2B%2Fr0HxwsxOTgSDJPGhuBHECP6zpWn%2BOgGqHLdKFkZp8lOxepZQox8qxVGymn3l4yKZUXHxwDcW%2BMq3uzZ6DqYPTjgsWeRtFBaABQgnmuTDbZe6%2BCrFd4erIfe9Tn5myJPvn4AuhnRm7jpPfpD55b%2BstOPBBvplAsD3clvphW3as68zVLWKexT4MsgdtLq3tksq343ySN0yawQpyurF3ZHu3IQWzIoGzMCPbM4pox%2Bhbyd9ZR5MYk0VZ3h%2F%2BLZGj1HkrQcvZZtx8TsuTfoZZrIfsOLtoyWlPzvxM9LY2p9oMHoJoeiPe%2F24T7s0fHsNk8ST%2FMGDf5CJhizXxG9BL220z0s2BcwQ%2FtxcS53sNz1RgOHKjvRaoDbme9ibpTwreVsnClGnKYbfb6OG6sIZO09aksdCLce8GMW9ciXDlmlVZ5FbkQmFFusHeBrS%2BwSGaJ9YxadCWxTJ%2BpnKAwyOeVrixFS6ywG99EOkYhDsqLiTIwmhNc0%2Bw2YRjpwOIFQfvIbOaXoellsNmwWC%2FSBHDiTE7tWm5%2BpNojCEQ4PCVe90s5Ou1qSzv3AkCUAkYABeUU3ISvp8gF4RfcONvlAtMqMAhmu1iV7QRBMJz7h8oGOqUBiAgvyZxrwTMveEoVHLDjhvtcek78zhdmwAoM9K19AbLUoDPcPopu7cHeJRKBiiCVUy0ofBLaTbkA6Lf6CQFUCfAeDhH%2BD%2FrNWs7lQsTo%2BYfRmP0PqpUBtjTOdqzwKMOYbAtkByegSVjvfmuko%2FsYxI%2F5pOY7aqD9znqNZfdkT4RozihMN8qB2bvoR6t%2FAXnHDbLJvVE844CBHIhW1ivtFzlfNtER&X-Amz-Signature=c70d23aadc8b7d436fea7e0eecc7fee7e36bfc95c8e4de5f3c10683b982191a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UUPNG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATHk1L0WqLDZh2XyL5Z7Ti7vU70moFgIHhitVOmJLulAiEA%2Foqpqg0HrDBNSs6Qu%2BJqCXemtY1IegkWysslDHHo37Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEVzdm%2FQvcIG0N1mCCrcA2hculeMMDuWnYwDl2t5CK9sezdb%2B%2Fr0HxwsxOTgSDJPGhuBHECP6zpWn%2BOgGqHLdKFkZp8lOxepZQox8qxVGymn3l4yKZUXHxwDcW%2BMq3uzZ6DqYPTjgsWeRtFBaABQgnmuTDbZe6%2BCrFd4erIfe9Tn5myJPvn4AuhnRm7jpPfpD55b%2BstOPBBvplAsD3clvphW3as68zVLWKexT4MsgdtLq3tksq343ySN0yawQpyurF3ZHu3IQWzIoGzMCPbM4pox%2Bhbyd9ZR5MYk0VZ3h%2F%2BLZGj1HkrQcvZZtx8TsuTfoZZrIfsOLtoyWlPzvxM9LY2p9oMHoJoeiPe%2F24T7s0fHsNk8ST%2FMGDf5CJhizXxG9BL220z0s2BcwQ%2FtxcS53sNz1RgOHKjvRaoDbme9ibpTwreVsnClGnKYbfb6OG6sIZO09aksdCLce8GMW9ciXDlmlVZ5FbkQmFFusHeBrS%2BwSGaJ9YxadCWxTJ%2BpnKAwyOeVrixFS6ywG99EOkYhDsqLiTIwmhNc0%2Bw2YRjpwOIFQfvIbOaXoellsNmwWC%2FSBHDiTE7tWm5%2BpNojCEQ4PCVe90s5Ou1qSzv3AkCUAkYABeUU3ISvp8gF4RfcONvlAtMqMAhmu1iV7QRBMJz7h8oGOqUBiAgvyZxrwTMveEoVHLDjhvtcek78zhdmwAoM9K19AbLUoDPcPopu7cHeJRKBiiCVUy0ofBLaTbkA6Lf6CQFUCfAeDhH%2BD%2FrNWs7lQsTo%2BYfRmP0PqpUBtjTOdqzwKMOYbAtkByegSVjvfmuko%2FsYxI%2F5pOY7aqD9znqNZfdkT4RozihMN8qB2bvoR6t%2FAXnHDbLJvVE844CBHIhW1ivtFzlfNtER&X-Amz-Signature=f3c4fe1486119c07d07bf4dfa8aa33168c500091566d7f08eeb4d42354949f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UUPNG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATHk1L0WqLDZh2XyL5Z7Ti7vU70moFgIHhitVOmJLulAiEA%2Foqpqg0HrDBNSs6Qu%2BJqCXemtY1IegkWysslDHHo37Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEVzdm%2FQvcIG0N1mCCrcA2hculeMMDuWnYwDl2t5CK9sezdb%2B%2Fr0HxwsxOTgSDJPGhuBHECP6zpWn%2BOgGqHLdKFkZp8lOxepZQox8qxVGymn3l4yKZUXHxwDcW%2BMq3uzZ6DqYPTjgsWeRtFBaABQgnmuTDbZe6%2BCrFd4erIfe9Tn5myJPvn4AuhnRm7jpPfpD55b%2BstOPBBvplAsD3clvphW3as68zVLWKexT4MsgdtLq3tksq343ySN0yawQpyurF3ZHu3IQWzIoGzMCPbM4pox%2Bhbyd9ZR5MYk0VZ3h%2F%2BLZGj1HkrQcvZZtx8TsuTfoZZrIfsOLtoyWlPzvxM9LY2p9oMHoJoeiPe%2F24T7s0fHsNk8ST%2FMGDf5CJhizXxG9BL220z0s2BcwQ%2FtxcS53sNz1RgOHKjvRaoDbme9ibpTwreVsnClGnKYbfb6OG6sIZO09aksdCLce8GMW9ciXDlmlVZ5FbkQmFFusHeBrS%2BwSGaJ9YxadCWxTJ%2BpnKAwyOeVrixFS6ywG99EOkYhDsqLiTIwmhNc0%2Bw2YRjpwOIFQfvIbOaXoellsNmwWC%2FSBHDiTE7tWm5%2BpNojCEQ4PCVe90s5Ou1qSzv3AkCUAkYABeUU3ISvp8gF4RfcONvlAtMqMAhmu1iV7QRBMJz7h8oGOqUBiAgvyZxrwTMveEoVHLDjhvtcek78zhdmwAoM9K19AbLUoDPcPopu7cHeJRKBiiCVUy0ofBLaTbkA6Lf6CQFUCfAeDhH%2BD%2FrNWs7lQsTo%2BYfRmP0PqpUBtjTOdqzwKMOYbAtkByegSVjvfmuko%2FsYxI%2F5pOY7aqD9znqNZfdkT4RozihMN8qB2bvoR6t%2FAXnHDbLJvVE844CBHIhW1ivtFzlfNtER&X-Amz-Signature=ae4221e688c8311f6ba7a9cd3b692e7b2204422e3f4a99961d4409908c42b21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UUPNG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATHk1L0WqLDZh2XyL5Z7Ti7vU70moFgIHhitVOmJLulAiEA%2Foqpqg0HrDBNSs6Qu%2BJqCXemtY1IegkWysslDHHo37Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEVzdm%2FQvcIG0N1mCCrcA2hculeMMDuWnYwDl2t5CK9sezdb%2B%2Fr0HxwsxOTgSDJPGhuBHECP6zpWn%2BOgGqHLdKFkZp8lOxepZQox8qxVGymn3l4yKZUXHxwDcW%2BMq3uzZ6DqYPTjgsWeRtFBaABQgnmuTDbZe6%2BCrFd4erIfe9Tn5myJPvn4AuhnRm7jpPfpD55b%2BstOPBBvplAsD3clvphW3as68zVLWKexT4MsgdtLq3tksq343ySN0yawQpyurF3ZHu3IQWzIoGzMCPbM4pox%2Bhbyd9ZR5MYk0VZ3h%2F%2BLZGj1HkrQcvZZtx8TsuTfoZZrIfsOLtoyWlPzvxM9LY2p9oMHoJoeiPe%2F24T7s0fHsNk8ST%2FMGDf5CJhizXxG9BL220z0s2BcwQ%2FtxcS53sNz1RgOHKjvRaoDbme9ibpTwreVsnClGnKYbfb6OG6sIZO09aksdCLce8GMW9ciXDlmlVZ5FbkQmFFusHeBrS%2BwSGaJ9YxadCWxTJ%2BpnKAwyOeVrixFS6ywG99EOkYhDsqLiTIwmhNc0%2Bw2YRjpwOIFQfvIbOaXoellsNmwWC%2FSBHDiTE7tWm5%2BpNojCEQ4PCVe90s5Ou1qSzv3AkCUAkYABeUU3ISvp8gF4RfcONvlAtMqMAhmu1iV7QRBMJz7h8oGOqUBiAgvyZxrwTMveEoVHLDjhvtcek78zhdmwAoM9K19AbLUoDPcPopu7cHeJRKBiiCVUy0ofBLaTbkA6Lf6CQFUCfAeDhH%2BD%2FrNWs7lQsTo%2BYfRmP0PqpUBtjTOdqzwKMOYbAtkByegSVjvfmuko%2FsYxI%2F5pOY7aqD9znqNZfdkT4RozihMN8qB2bvoR6t%2FAXnHDbLJvVE844CBHIhW1ivtFzlfNtER&X-Amz-Signature=a96890c9c96c7358d1bd6b94cb02cc917d54ea93ac6abcbe33c8c8f33cf3e84e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UUPNG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATHk1L0WqLDZh2XyL5Z7Ti7vU70moFgIHhitVOmJLulAiEA%2Foqpqg0HrDBNSs6Qu%2BJqCXemtY1IegkWysslDHHo37Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEVzdm%2FQvcIG0N1mCCrcA2hculeMMDuWnYwDl2t5CK9sezdb%2B%2Fr0HxwsxOTgSDJPGhuBHECP6zpWn%2BOgGqHLdKFkZp8lOxepZQox8qxVGymn3l4yKZUXHxwDcW%2BMq3uzZ6DqYPTjgsWeRtFBaABQgnmuTDbZe6%2BCrFd4erIfe9Tn5myJPvn4AuhnRm7jpPfpD55b%2BstOPBBvplAsD3clvphW3as68zVLWKexT4MsgdtLq3tksq343ySN0yawQpyurF3ZHu3IQWzIoGzMCPbM4pox%2Bhbyd9ZR5MYk0VZ3h%2F%2BLZGj1HkrQcvZZtx8TsuTfoZZrIfsOLtoyWlPzvxM9LY2p9oMHoJoeiPe%2F24T7s0fHsNk8ST%2FMGDf5CJhizXxG9BL220z0s2BcwQ%2FtxcS53sNz1RgOHKjvRaoDbme9ibpTwreVsnClGnKYbfb6OG6sIZO09aksdCLce8GMW9ciXDlmlVZ5FbkQmFFusHeBrS%2BwSGaJ9YxadCWxTJ%2BpnKAwyOeVrixFS6ywG99EOkYhDsqLiTIwmhNc0%2Bw2YRjpwOIFQfvIbOaXoellsNmwWC%2FSBHDiTE7tWm5%2BpNojCEQ4PCVe90s5Ou1qSzv3AkCUAkYABeUU3ISvp8gF4RfcONvlAtMqMAhmu1iV7QRBMJz7h8oGOqUBiAgvyZxrwTMveEoVHLDjhvtcek78zhdmwAoM9K19AbLUoDPcPopu7cHeJRKBiiCVUy0ofBLaTbkA6Lf6CQFUCfAeDhH%2BD%2FrNWs7lQsTo%2BYfRmP0PqpUBtjTOdqzwKMOYbAtkByegSVjvfmuko%2FsYxI%2F5pOY7aqD9znqNZfdkT4RozihMN8qB2bvoR6t%2FAXnHDbLJvVE844CBHIhW1ivtFzlfNtER&X-Amz-Signature=5302d24de626b5f23c22373c81d96c29761198e96d7382d0e8cac1ef6b06b8d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UUPNG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATHk1L0WqLDZh2XyL5Z7Ti7vU70moFgIHhitVOmJLulAiEA%2Foqpqg0HrDBNSs6Qu%2BJqCXemtY1IegkWysslDHHo37Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEVzdm%2FQvcIG0N1mCCrcA2hculeMMDuWnYwDl2t5CK9sezdb%2B%2Fr0HxwsxOTgSDJPGhuBHECP6zpWn%2BOgGqHLdKFkZp8lOxepZQox8qxVGymn3l4yKZUXHxwDcW%2BMq3uzZ6DqYPTjgsWeRtFBaABQgnmuTDbZe6%2BCrFd4erIfe9Tn5myJPvn4AuhnRm7jpPfpD55b%2BstOPBBvplAsD3clvphW3as68zVLWKexT4MsgdtLq3tksq343ySN0yawQpyurF3ZHu3IQWzIoGzMCPbM4pox%2Bhbyd9ZR5MYk0VZ3h%2F%2BLZGj1HkrQcvZZtx8TsuTfoZZrIfsOLtoyWlPzvxM9LY2p9oMHoJoeiPe%2F24T7s0fHsNk8ST%2FMGDf5CJhizXxG9BL220z0s2BcwQ%2FtxcS53sNz1RgOHKjvRaoDbme9ibpTwreVsnClGnKYbfb6OG6sIZO09aksdCLce8GMW9ciXDlmlVZ5FbkQmFFusHeBrS%2BwSGaJ9YxadCWxTJ%2BpnKAwyOeVrixFS6ywG99EOkYhDsqLiTIwmhNc0%2Bw2YRjpwOIFQfvIbOaXoellsNmwWC%2FSBHDiTE7tWm5%2BpNojCEQ4PCVe90s5Ou1qSzv3AkCUAkYABeUU3ISvp8gF4RfcONvlAtMqMAhmu1iV7QRBMJz7h8oGOqUBiAgvyZxrwTMveEoVHLDjhvtcek78zhdmwAoM9K19AbLUoDPcPopu7cHeJRKBiiCVUy0ofBLaTbkA6Lf6CQFUCfAeDhH%2BD%2FrNWs7lQsTo%2BYfRmP0PqpUBtjTOdqzwKMOYbAtkByegSVjvfmuko%2FsYxI%2F5pOY7aqD9znqNZfdkT4RozihMN8qB2bvoR6t%2FAXnHDbLJvVE844CBHIhW1ivtFzlfNtER&X-Amz-Signature=9d9496fd37ac4b655449fa9aaee1ef81d70856f8844eb24a6df4e586bfadbee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UUPNG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATHk1L0WqLDZh2XyL5Z7Ti7vU70moFgIHhitVOmJLulAiEA%2Foqpqg0HrDBNSs6Qu%2BJqCXemtY1IegkWysslDHHo37Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEVzdm%2FQvcIG0N1mCCrcA2hculeMMDuWnYwDl2t5CK9sezdb%2B%2Fr0HxwsxOTgSDJPGhuBHECP6zpWn%2BOgGqHLdKFkZp8lOxepZQox8qxVGymn3l4yKZUXHxwDcW%2BMq3uzZ6DqYPTjgsWeRtFBaABQgnmuTDbZe6%2BCrFd4erIfe9Tn5myJPvn4AuhnRm7jpPfpD55b%2BstOPBBvplAsD3clvphW3as68zVLWKexT4MsgdtLq3tksq343ySN0yawQpyurF3ZHu3IQWzIoGzMCPbM4pox%2Bhbyd9ZR5MYk0VZ3h%2F%2BLZGj1HkrQcvZZtx8TsuTfoZZrIfsOLtoyWlPzvxM9LY2p9oMHoJoeiPe%2F24T7s0fHsNk8ST%2FMGDf5CJhizXxG9BL220z0s2BcwQ%2FtxcS53sNz1RgOHKjvRaoDbme9ibpTwreVsnClGnKYbfb6OG6sIZO09aksdCLce8GMW9ciXDlmlVZ5FbkQmFFusHeBrS%2BwSGaJ9YxadCWxTJ%2BpnKAwyOeVrixFS6ywG99EOkYhDsqLiTIwmhNc0%2Bw2YRjpwOIFQfvIbOaXoellsNmwWC%2FSBHDiTE7tWm5%2BpNojCEQ4PCVe90s5Ou1qSzv3AkCUAkYABeUU3ISvp8gF4RfcONvlAtMqMAhmu1iV7QRBMJz7h8oGOqUBiAgvyZxrwTMveEoVHLDjhvtcek78zhdmwAoM9K19AbLUoDPcPopu7cHeJRKBiiCVUy0ofBLaTbkA6Lf6CQFUCfAeDhH%2BD%2FrNWs7lQsTo%2BYfRmP0PqpUBtjTOdqzwKMOYbAtkByegSVjvfmuko%2FsYxI%2F5pOY7aqD9znqNZfdkT4RozihMN8qB2bvoR6t%2FAXnHDbLJvVE844CBHIhW1ivtFzlfNtER&X-Amz-Signature=f97e3da4c3c39d6ff677e044cb0088187640e44c7ffc9f264173ee903f191343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UUPNG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATHk1L0WqLDZh2XyL5Z7Ti7vU70moFgIHhitVOmJLulAiEA%2Foqpqg0HrDBNSs6Qu%2BJqCXemtY1IegkWysslDHHo37Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEVzdm%2FQvcIG0N1mCCrcA2hculeMMDuWnYwDl2t5CK9sezdb%2B%2Fr0HxwsxOTgSDJPGhuBHECP6zpWn%2BOgGqHLdKFkZp8lOxepZQox8qxVGymn3l4yKZUXHxwDcW%2BMq3uzZ6DqYPTjgsWeRtFBaABQgnmuTDbZe6%2BCrFd4erIfe9Tn5myJPvn4AuhnRm7jpPfpD55b%2BstOPBBvplAsD3clvphW3as68zVLWKexT4MsgdtLq3tksq343ySN0yawQpyurF3ZHu3IQWzIoGzMCPbM4pox%2Bhbyd9ZR5MYk0VZ3h%2F%2BLZGj1HkrQcvZZtx8TsuTfoZZrIfsOLtoyWlPzvxM9LY2p9oMHoJoeiPe%2F24T7s0fHsNk8ST%2FMGDf5CJhizXxG9BL220z0s2BcwQ%2FtxcS53sNz1RgOHKjvRaoDbme9ibpTwreVsnClGnKYbfb6OG6sIZO09aksdCLce8GMW9ciXDlmlVZ5FbkQmFFusHeBrS%2BwSGaJ9YxadCWxTJ%2BpnKAwyOeVrixFS6ywG99EOkYhDsqLiTIwmhNc0%2Bw2YRjpwOIFQfvIbOaXoellsNmwWC%2FSBHDiTE7tWm5%2BpNojCEQ4PCVe90s5Ou1qSzv3AkCUAkYABeUU3ISvp8gF4RfcONvlAtMqMAhmu1iV7QRBMJz7h8oGOqUBiAgvyZxrwTMveEoVHLDjhvtcek78zhdmwAoM9K19AbLUoDPcPopu7cHeJRKBiiCVUy0ofBLaTbkA6Lf6CQFUCfAeDhH%2BD%2FrNWs7lQsTo%2BYfRmP0PqpUBtjTOdqzwKMOYbAtkByegSVjvfmuko%2FsYxI%2F5pOY7aqD9znqNZfdkT4RozihMN8qB2bvoR6t%2FAXnHDbLJvVE844CBHIhW1ivtFzlfNtER&X-Amz-Signature=b5a693e9d44a2372e9bce0de12223a24a8ee9bc3723783cfabdc82cacb852eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UUPNG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATHk1L0WqLDZh2XyL5Z7Ti7vU70moFgIHhitVOmJLulAiEA%2Foqpqg0HrDBNSs6Qu%2BJqCXemtY1IegkWysslDHHo37Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEVzdm%2FQvcIG0N1mCCrcA2hculeMMDuWnYwDl2t5CK9sezdb%2B%2Fr0HxwsxOTgSDJPGhuBHECP6zpWn%2BOgGqHLdKFkZp8lOxepZQox8qxVGymn3l4yKZUXHxwDcW%2BMq3uzZ6DqYPTjgsWeRtFBaABQgnmuTDbZe6%2BCrFd4erIfe9Tn5myJPvn4AuhnRm7jpPfpD55b%2BstOPBBvplAsD3clvphW3as68zVLWKexT4MsgdtLq3tksq343ySN0yawQpyurF3ZHu3IQWzIoGzMCPbM4pox%2Bhbyd9ZR5MYk0VZ3h%2F%2BLZGj1HkrQcvZZtx8TsuTfoZZrIfsOLtoyWlPzvxM9LY2p9oMHoJoeiPe%2F24T7s0fHsNk8ST%2FMGDf5CJhizXxG9BL220z0s2BcwQ%2FtxcS53sNz1RgOHKjvRaoDbme9ibpTwreVsnClGnKYbfb6OG6sIZO09aksdCLce8GMW9ciXDlmlVZ5FbkQmFFusHeBrS%2BwSGaJ9YxadCWxTJ%2BpnKAwyOeVrixFS6ywG99EOkYhDsqLiTIwmhNc0%2Bw2YRjpwOIFQfvIbOaXoellsNmwWC%2FSBHDiTE7tWm5%2BpNojCEQ4PCVe90s5Ou1qSzv3AkCUAkYABeUU3ISvp8gF4RfcONvlAtMqMAhmu1iV7QRBMJz7h8oGOqUBiAgvyZxrwTMveEoVHLDjhvtcek78zhdmwAoM9K19AbLUoDPcPopu7cHeJRKBiiCVUy0ofBLaTbkA6Lf6CQFUCfAeDhH%2BD%2FrNWs7lQsTo%2BYfRmP0PqpUBtjTOdqzwKMOYbAtkByegSVjvfmuko%2FsYxI%2F5pOY7aqD9znqNZfdkT4RozihMN8qB2bvoR6t%2FAXnHDbLJvVE844CBHIhW1ivtFzlfNtER&X-Amz-Signature=00436e4ed4465f80dafb48c2cf3138f1f8fd638eda2cf0afd9389c26f656c5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UUPNG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATHk1L0WqLDZh2XyL5Z7Ti7vU70moFgIHhitVOmJLulAiEA%2Foqpqg0HrDBNSs6Qu%2BJqCXemtY1IegkWysslDHHo37Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEVzdm%2FQvcIG0N1mCCrcA2hculeMMDuWnYwDl2t5CK9sezdb%2B%2Fr0HxwsxOTgSDJPGhuBHECP6zpWn%2BOgGqHLdKFkZp8lOxepZQox8qxVGymn3l4yKZUXHxwDcW%2BMq3uzZ6DqYPTjgsWeRtFBaABQgnmuTDbZe6%2BCrFd4erIfe9Tn5myJPvn4AuhnRm7jpPfpD55b%2BstOPBBvplAsD3clvphW3as68zVLWKexT4MsgdtLq3tksq343ySN0yawQpyurF3ZHu3IQWzIoGzMCPbM4pox%2Bhbyd9ZR5MYk0VZ3h%2F%2BLZGj1HkrQcvZZtx8TsuTfoZZrIfsOLtoyWlPzvxM9LY2p9oMHoJoeiPe%2F24T7s0fHsNk8ST%2FMGDf5CJhizXxG9BL220z0s2BcwQ%2FtxcS53sNz1RgOHKjvRaoDbme9ibpTwreVsnClGnKYbfb6OG6sIZO09aksdCLce8GMW9ciXDlmlVZ5FbkQmFFusHeBrS%2BwSGaJ9YxadCWxTJ%2BpnKAwyOeVrixFS6ywG99EOkYhDsqLiTIwmhNc0%2Bw2YRjpwOIFQfvIbOaXoellsNmwWC%2FSBHDiTE7tWm5%2BpNojCEQ4PCVe90s5Ou1qSzv3AkCUAkYABeUU3ISvp8gF4RfcONvlAtMqMAhmu1iV7QRBMJz7h8oGOqUBiAgvyZxrwTMveEoVHLDjhvtcek78zhdmwAoM9K19AbLUoDPcPopu7cHeJRKBiiCVUy0ofBLaTbkA6Lf6CQFUCfAeDhH%2BD%2FrNWs7lQsTo%2BYfRmP0PqpUBtjTOdqzwKMOYbAtkByegSVjvfmuko%2FsYxI%2F5pOY7aqD9znqNZfdkT4RozihMN8qB2bvoR6t%2FAXnHDbLJvVE844CBHIhW1ivtFzlfNtER&X-Amz-Signature=a96890c9c96c7358d1bd6b94cb02cc917d54ea93ac6abcbe33c8c8f33cf3e84e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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
