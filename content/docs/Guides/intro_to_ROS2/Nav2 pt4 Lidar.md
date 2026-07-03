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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JXUPMQ%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCJ08wBt20%2BkChrfR%2FjGgHTfC4rZITgGTyPtpnd1IMbxgIhAKGR7kCTRDsevwEL0iWTRzPeQtJNTnjv611MRBEvuvtnKv8DCAMQABoMNjM3NDIzMTgzODA1IgyjbJJbQL1mNc1DP5oq3AM9%2BlGYSZvoqVv7QFy27lGkmtCqRsQFPktI7avHVouhzJzSuzU682D0wODFFuNkcB%2F9WYasxST4fVv3Lg92E64Fsu2pXzz8IkGSP6Ajne%2Fn%2FYamw%2BXkyhSEzxhevbvNZe0P364kcHX3dKkrjG8P4B0%2BYihqY8SmckRD3UwEGo4cSejUxUwgXfflAQ8L8QYGRu%2ByqxBXFzYudmOEUR%2FaY31WHHlorB71NrlQNWJsiTYmBpIZzY0krtpTkL64iXvJGzjFdjSl52pkSuXTNMQtnOfr6%2BXxn1o1RWNoZdc4ZOxo8Ltt16g6eThd3rmcHcTlgyIYJPAt5XsCRvHgMvd9M1zC0fEdqjz4jdhuz0a4GSVLoOeeG10XooPp8XihmSL4fL9pgA9kWj%2FiJK893UfUuZzXMHbWqOqDcfEswRM4H%2F70dl4YPPDIbdYJnfncHaPiQNssP5x%2BU9HDpjdRRuvXwuyy%2BE77gjUiG33x8622YK4o7%2BeZ7aKupmqDg2UFNjquzdth2zG93slCaaiEHCiVxoeOY%2FhV8mth32QpYUf29%2FMhgYzvI%2Bm4D8zS7xn8Ws3iU1XGqx0Bwm71P1%2B7kW6fyz6eCcpiABLNyFm%2FrbDMppKEjtyUkzKl0XSs4nkkizCOuZzSBjqkASRRU%2FmcYzwlk6sn8Fh2CY1k81SdfVTcm7G2UVNimnhRKt2yzqnP1UyeIczXArr6oE3i0iqEAc%2Fv0jh5mGH8jUyFVPBLjp5w5Lf97%2F4boF%2FLptVpidCvCxRvG8x0GinSkR5prfs0Hh%2F4PmEW0%2BGvCpOrNYFd3LxTsg4Oa5nQQ6CeY1VKSlLozrdPlo1VwyDg4ONBI3OHGxrvxgqbUS3MObM%2B7O7e&X-Amz-Signature=4eb6b8dbbeda202ad68b82a432a8f2d5d1ebb99f0967db69b3bb78a438fd3724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ46T3U%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFDGA1eFQc3M0csmCObxPcjr34mpehUE4QFWbvyeFA3WAiEA59w2PGmtJwcNpBQk2GitzTshzgAPvv7Af4W3%2F73NGOEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEqLLY61RtdZgJZDHSrcA3rgwmBpKH8fNy3qyvocU7hcYGg39HPKb3UrXvBqMZtobJlk9fs96cMufDNoky7UZGBlFm8GwgweXNg4pGIqN16hdDvUBXXfTKg3U4pdhMPoYf6c5jP5Pp2IccWNA%2Bf04nggY4sQxrrVmgEeeFFVH7j89w2ttiDwm7qLFj%2F0C7SzElqe2n%2FYbgFwFKSXwAAQ5MXe5kxJTW2p32a%2FWJI3iYqKd1Ym22hhAMPbqMMLy3cMvnxn%2BZ4pRsYIMqBYRhsRzW%2Fvr9vNST17hnBOqxrHBoWo4DCe8HcIPHzhxZh%2FL2kxd2XGOrq7GAgGOsGqDfFK%2BeRoVZb39YqDi45YjQAcWArohiaRvNWOCMX%2BgZ63WcfKZ0TDWaaoM7bpP%2BPK1xMmj0tTlrIikZUOlkw%2FktBY0IBLXKuuvZjYAzT%2F8L7LK9%2BI2LW%2BrfOMDld62vnBLwfF4YdCFVOr20JO6GuF6%2BMn6WH2Px3fvYoJF41AQHavia7RPRckzBbPETk0itvmdM%2FlFCMEEbAkhNSV26CyRKBwCUKL%2B148tDXU%2BQoInp2y0EcktQEq249URM5ysEqIY2n15JNxabdghtwzoW6bicFVTiCDN7MAyUPULddSJzGrL11OYwf1GrHQuS0xSdZ7MI65nNIGOqUBE1DgyF3t6uZqkum43TzU14loYtoXhdGGLLyfcCZNrmT3fxCzGRZWbq3Xvwhi04QhLXuSlM2nmAYbyeB2Y99BhcoIEc5jq1DtgNNjvJ06458P%2FyeqFR2tVoYS7By1LGLxqLuRO5BGE5WS6NbUx7DgMvoh454KEwmb%2BplyFB%2F25JqvWE9f1S1uTFnSi6Ec1TuVFQgbWrlzI%2FJmaQWH6gn3Mzg7a6If&X-Amz-Signature=226235c55c2aa180de25ec12263e05994e0953283db4638bce46f797fa6986c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ46T3U%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFDGA1eFQc3M0csmCObxPcjr34mpehUE4QFWbvyeFA3WAiEA59w2PGmtJwcNpBQk2GitzTshzgAPvv7Af4W3%2F73NGOEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEqLLY61RtdZgJZDHSrcA3rgwmBpKH8fNy3qyvocU7hcYGg39HPKb3UrXvBqMZtobJlk9fs96cMufDNoky7UZGBlFm8GwgweXNg4pGIqN16hdDvUBXXfTKg3U4pdhMPoYf6c5jP5Pp2IccWNA%2Bf04nggY4sQxrrVmgEeeFFVH7j89w2ttiDwm7qLFj%2F0C7SzElqe2n%2FYbgFwFKSXwAAQ5MXe5kxJTW2p32a%2FWJI3iYqKd1Ym22hhAMPbqMMLy3cMvnxn%2BZ4pRsYIMqBYRhsRzW%2Fvr9vNST17hnBOqxrHBoWo4DCe8HcIPHzhxZh%2FL2kxd2XGOrq7GAgGOsGqDfFK%2BeRoVZb39YqDi45YjQAcWArohiaRvNWOCMX%2BgZ63WcfKZ0TDWaaoM7bpP%2BPK1xMmj0tTlrIikZUOlkw%2FktBY0IBLXKuuvZjYAzT%2F8L7LK9%2BI2LW%2BrfOMDld62vnBLwfF4YdCFVOr20JO6GuF6%2BMn6WH2Px3fvYoJF41AQHavia7RPRckzBbPETk0itvmdM%2FlFCMEEbAkhNSV26CyRKBwCUKL%2B148tDXU%2BQoInp2y0EcktQEq249URM5ysEqIY2n15JNxabdghtwzoW6bicFVTiCDN7MAyUPULddSJzGrL11OYwf1GrHQuS0xSdZ7MI65nNIGOqUBE1DgyF3t6uZqkum43TzU14loYtoXhdGGLLyfcCZNrmT3fxCzGRZWbq3Xvwhi04QhLXuSlM2nmAYbyeB2Y99BhcoIEc5jq1DtgNNjvJ06458P%2FyeqFR2tVoYS7By1LGLxqLuRO5BGE5WS6NbUx7DgMvoh454KEwmb%2BplyFB%2F25JqvWE9f1S1uTFnSi6Ec1TuVFQgbWrlzI%2FJmaQWH6gn3Mzg7a6If&X-Amz-Signature=73d71727e765b163a518c171c6fca51a9df74545c675e7851bcc615963393c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ46T3U%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFDGA1eFQc3M0csmCObxPcjr34mpehUE4QFWbvyeFA3WAiEA59w2PGmtJwcNpBQk2GitzTshzgAPvv7Af4W3%2F73NGOEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEqLLY61RtdZgJZDHSrcA3rgwmBpKH8fNy3qyvocU7hcYGg39HPKb3UrXvBqMZtobJlk9fs96cMufDNoky7UZGBlFm8GwgweXNg4pGIqN16hdDvUBXXfTKg3U4pdhMPoYf6c5jP5Pp2IccWNA%2Bf04nggY4sQxrrVmgEeeFFVH7j89w2ttiDwm7qLFj%2F0C7SzElqe2n%2FYbgFwFKSXwAAQ5MXe5kxJTW2p32a%2FWJI3iYqKd1Ym22hhAMPbqMMLy3cMvnxn%2BZ4pRsYIMqBYRhsRzW%2Fvr9vNST17hnBOqxrHBoWo4DCe8HcIPHzhxZh%2FL2kxd2XGOrq7GAgGOsGqDfFK%2BeRoVZb39YqDi45YjQAcWArohiaRvNWOCMX%2BgZ63WcfKZ0TDWaaoM7bpP%2BPK1xMmj0tTlrIikZUOlkw%2FktBY0IBLXKuuvZjYAzT%2F8L7LK9%2BI2LW%2BrfOMDld62vnBLwfF4YdCFVOr20JO6GuF6%2BMn6WH2Px3fvYoJF41AQHavia7RPRckzBbPETk0itvmdM%2FlFCMEEbAkhNSV26CyRKBwCUKL%2B148tDXU%2BQoInp2y0EcktQEq249URM5ysEqIY2n15JNxabdghtwzoW6bicFVTiCDN7MAyUPULddSJzGrL11OYwf1GrHQuS0xSdZ7MI65nNIGOqUBE1DgyF3t6uZqkum43TzU14loYtoXhdGGLLyfcCZNrmT3fxCzGRZWbq3Xvwhi04QhLXuSlM2nmAYbyeB2Y99BhcoIEc5jq1DtgNNjvJ06458P%2FyeqFR2tVoYS7By1LGLxqLuRO5BGE5WS6NbUx7DgMvoh454KEwmb%2BplyFB%2F25JqvWE9f1S1uTFnSi6Ec1TuVFQgbWrlzI%2FJmaQWH6gn3Mzg7a6If&X-Amz-Signature=d356b9da31025289469bd8381ac29bfb0a0454a148a434639bd9952613794784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ46T3U%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFDGA1eFQc3M0csmCObxPcjr34mpehUE4QFWbvyeFA3WAiEA59w2PGmtJwcNpBQk2GitzTshzgAPvv7Af4W3%2F73NGOEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEqLLY61RtdZgJZDHSrcA3rgwmBpKH8fNy3qyvocU7hcYGg39HPKb3UrXvBqMZtobJlk9fs96cMufDNoky7UZGBlFm8GwgweXNg4pGIqN16hdDvUBXXfTKg3U4pdhMPoYf6c5jP5Pp2IccWNA%2Bf04nggY4sQxrrVmgEeeFFVH7j89w2ttiDwm7qLFj%2F0C7SzElqe2n%2FYbgFwFKSXwAAQ5MXe5kxJTW2p32a%2FWJI3iYqKd1Ym22hhAMPbqMMLy3cMvnxn%2BZ4pRsYIMqBYRhsRzW%2Fvr9vNST17hnBOqxrHBoWo4DCe8HcIPHzhxZh%2FL2kxd2XGOrq7GAgGOsGqDfFK%2BeRoVZb39YqDi45YjQAcWArohiaRvNWOCMX%2BgZ63WcfKZ0TDWaaoM7bpP%2BPK1xMmj0tTlrIikZUOlkw%2FktBY0IBLXKuuvZjYAzT%2F8L7LK9%2BI2LW%2BrfOMDld62vnBLwfF4YdCFVOr20JO6GuF6%2BMn6WH2Px3fvYoJF41AQHavia7RPRckzBbPETk0itvmdM%2FlFCMEEbAkhNSV26CyRKBwCUKL%2B148tDXU%2BQoInp2y0EcktQEq249URM5ysEqIY2n15JNxabdghtwzoW6bicFVTiCDN7MAyUPULddSJzGrL11OYwf1GrHQuS0xSdZ7MI65nNIGOqUBE1DgyF3t6uZqkum43TzU14loYtoXhdGGLLyfcCZNrmT3fxCzGRZWbq3Xvwhi04QhLXuSlM2nmAYbyeB2Y99BhcoIEc5jq1DtgNNjvJ06458P%2FyeqFR2tVoYS7By1LGLxqLuRO5BGE5WS6NbUx7DgMvoh454KEwmb%2BplyFB%2F25JqvWE9f1S1uTFnSi6Ec1TuVFQgbWrlzI%2FJmaQWH6gn3Mzg7a6If&X-Amz-Signature=bf866270517c659f9b6b7ba3f1a9aa0c9a18db5516aa6efcc242fb4725f11866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ46T3U%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFDGA1eFQc3M0csmCObxPcjr34mpehUE4QFWbvyeFA3WAiEA59w2PGmtJwcNpBQk2GitzTshzgAPvv7Af4W3%2F73NGOEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEqLLY61RtdZgJZDHSrcA3rgwmBpKH8fNy3qyvocU7hcYGg39HPKb3UrXvBqMZtobJlk9fs96cMufDNoky7UZGBlFm8GwgweXNg4pGIqN16hdDvUBXXfTKg3U4pdhMPoYf6c5jP5Pp2IccWNA%2Bf04nggY4sQxrrVmgEeeFFVH7j89w2ttiDwm7qLFj%2F0C7SzElqe2n%2FYbgFwFKSXwAAQ5MXe5kxJTW2p32a%2FWJI3iYqKd1Ym22hhAMPbqMMLy3cMvnxn%2BZ4pRsYIMqBYRhsRzW%2Fvr9vNST17hnBOqxrHBoWo4DCe8HcIPHzhxZh%2FL2kxd2XGOrq7GAgGOsGqDfFK%2BeRoVZb39YqDi45YjQAcWArohiaRvNWOCMX%2BgZ63WcfKZ0TDWaaoM7bpP%2BPK1xMmj0tTlrIikZUOlkw%2FktBY0IBLXKuuvZjYAzT%2F8L7LK9%2BI2LW%2BrfOMDld62vnBLwfF4YdCFVOr20JO6GuF6%2BMn6WH2Px3fvYoJF41AQHavia7RPRckzBbPETk0itvmdM%2FlFCMEEbAkhNSV26CyRKBwCUKL%2B148tDXU%2BQoInp2y0EcktQEq249URM5ysEqIY2n15JNxabdghtwzoW6bicFVTiCDN7MAyUPULddSJzGrL11OYwf1GrHQuS0xSdZ7MI65nNIGOqUBE1DgyF3t6uZqkum43TzU14loYtoXhdGGLLyfcCZNrmT3fxCzGRZWbq3Xvwhi04QhLXuSlM2nmAYbyeB2Y99BhcoIEc5jq1DtgNNjvJ06458P%2FyeqFR2tVoYS7By1LGLxqLuRO5BGE5WS6NbUx7DgMvoh454KEwmb%2BplyFB%2F25JqvWE9f1S1uTFnSi6Ec1TuVFQgbWrlzI%2FJmaQWH6gn3Mzg7a6If&X-Amz-Signature=582e8d220fe15f9b90884061d7a522259ace7dc74f62b51149c2119115f6ecbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ46T3U%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFDGA1eFQc3M0csmCObxPcjr34mpehUE4QFWbvyeFA3WAiEA59w2PGmtJwcNpBQk2GitzTshzgAPvv7Af4W3%2F73NGOEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEqLLY61RtdZgJZDHSrcA3rgwmBpKH8fNy3qyvocU7hcYGg39HPKb3UrXvBqMZtobJlk9fs96cMufDNoky7UZGBlFm8GwgweXNg4pGIqN16hdDvUBXXfTKg3U4pdhMPoYf6c5jP5Pp2IccWNA%2Bf04nggY4sQxrrVmgEeeFFVH7j89w2ttiDwm7qLFj%2F0C7SzElqe2n%2FYbgFwFKSXwAAQ5MXe5kxJTW2p32a%2FWJI3iYqKd1Ym22hhAMPbqMMLy3cMvnxn%2BZ4pRsYIMqBYRhsRzW%2Fvr9vNST17hnBOqxrHBoWo4DCe8HcIPHzhxZh%2FL2kxd2XGOrq7GAgGOsGqDfFK%2BeRoVZb39YqDi45YjQAcWArohiaRvNWOCMX%2BgZ63WcfKZ0TDWaaoM7bpP%2BPK1xMmj0tTlrIikZUOlkw%2FktBY0IBLXKuuvZjYAzT%2F8L7LK9%2BI2LW%2BrfOMDld62vnBLwfF4YdCFVOr20JO6GuF6%2BMn6WH2Px3fvYoJF41AQHavia7RPRckzBbPETk0itvmdM%2FlFCMEEbAkhNSV26CyRKBwCUKL%2B148tDXU%2BQoInp2y0EcktQEq249URM5ysEqIY2n15JNxabdghtwzoW6bicFVTiCDN7MAyUPULddSJzGrL11OYwf1GrHQuS0xSdZ7MI65nNIGOqUBE1DgyF3t6uZqkum43TzU14loYtoXhdGGLLyfcCZNrmT3fxCzGRZWbq3Xvwhi04QhLXuSlM2nmAYbyeB2Y99BhcoIEc5jq1DtgNNjvJ06458P%2FyeqFR2tVoYS7By1LGLxqLuRO5BGE5WS6NbUx7DgMvoh454KEwmb%2BplyFB%2F25JqvWE9f1S1uTFnSi6Ec1TuVFQgbWrlzI%2FJmaQWH6gn3Mzg7a6If&X-Amz-Signature=3cf6d8178ec8e8dc15d3eb94b0e3649cb52e9652fd4d919e5330260f2bbfe515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ46T3U%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFDGA1eFQc3M0csmCObxPcjr34mpehUE4QFWbvyeFA3WAiEA59w2PGmtJwcNpBQk2GitzTshzgAPvv7Af4W3%2F73NGOEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEqLLY61RtdZgJZDHSrcA3rgwmBpKH8fNy3qyvocU7hcYGg39HPKb3UrXvBqMZtobJlk9fs96cMufDNoky7UZGBlFm8GwgweXNg4pGIqN16hdDvUBXXfTKg3U4pdhMPoYf6c5jP5Pp2IccWNA%2Bf04nggY4sQxrrVmgEeeFFVH7j89w2ttiDwm7qLFj%2F0C7SzElqe2n%2FYbgFwFKSXwAAQ5MXe5kxJTW2p32a%2FWJI3iYqKd1Ym22hhAMPbqMMLy3cMvnxn%2BZ4pRsYIMqBYRhsRzW%2Fvr9vNST17hnBOqxrHBoWo4DCe8HcIPHzhxZh%2FL2kxd2XGOrq7GAgGOsGqDfFK%2BeRoVZb39YqDi45YjQAcWArohiaRvNWOCMX%2BgZ63WcfKZ0TDWaaoM7bpP%2BPK1xMmj0tTlrIikZUOlkw%2FktBY0IBLXKuuvZjYAzT%2F8L7LK9%2BI2LW%2BrfOMDld62vnBLwfF4YdCFVOr20JO6GuF6%2BMn6WH2Px3fvYoJF41AQHavia7RPRckzBbPETk0itvmdM%2FlFCMEEbAkhNSV26CyRKBwCUKL%2B148tDXU%2BQoInp2y0EcktQEq249URM5ysEqIY2n15JNxabdghtwzoW6bicFVTiCDN7MAyUPULddSJzGrL11OYwf1GrHQuS0xSdZ7MI65nNIGOqUBE1DgyF3t6uZqkum43TzU14loYtoXhdGGLLyfcCZNrmT3fxCzGRZWbq3Xvwhi04QhLXuSlM2nmAYbyeB2Y99BhcoIEc5jq1DtgNNjvJ06458P%2FyeqFR2tVoYS7By1LGLxqLuRO5BGE5WS6NbUx7DgMvoh454KEwmb%2BplyFB%2F25JqvWE9f1S1uTFnSi6Ec1TuVFQgbWrlzI%2FJmaQWH6gn3Mzg7a6If&X-Amz-Signature=e02f0d204d1ea6f300cb11bc2d7154ad6a0e58576fa7970502ffbd340fabdcbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ46T3U%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFDGA1eFQc3M0csmCObxPcjr34mpehUE4QFWbvyeFA3WAiEA59w2PGmtJwcNpBQk2GitzTshzgAPvv7Af4W3%2F73NGOEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEqLLY61RtdZgJZDHSrcA3rgwmBpKH8fNy3qyvocU7hcYGg39HPKb3UrXvBqMZtobJlk9fs96cMufDNoky7UZGBlFm8GwgweXNg4pGIqN16hdDvUBXXfTKg3U4pdhMPoYf6c5jP5Pp2IccWNA%2Bf04nggY4sQxrrVmgEeeFFVH7j89w2ttiDwm7qLFj%2F0C7SzElqe2n%2FYbgFwFKSXwAAQ5MXe5kxJTW2p32a%2FWJI3iYqKd1Ym22hhAMPbqMMLy3cMvnxn%2BZ4pRsYIMqBYRhsRzW%2Fvr9vNST17hnBOqxrHBoWo4DCe8HcIPHzhxZh%2FL2kxd2XGOrq7GAgGOsGqDfFK%2BeRoVZb39YqDi45YjQAcWArohiaRvNWOCMX%2BgZ63WcfKZ0TDWaaoM7bpP%2BPK1xMmj0tTlrIikZUOlkw%2FktBY0IBLXKuuvZjYAzT%2F8L7LK9%2BI2LW%2BrfOMDld62vnBLwfF4YdCFVOr20JO6GuF6%2BMn6WH2Px3fvYoJF41AQHavia7RPRckzBbPETk0itvmdM%2FlFCMEEbAkhNSV26CyRKBwCUKL%2B148tDXU%2BQoInp2y0EcktQEq249URM5ysEqIY2n15JNxabdghtwzoW6bicFVTiCDN7MAyUPULddSJzGrL11OYwf1GrHQuS0xSdZ7MI65nNIGOqUBE1DgyF3t6uZqkum43TzU14loYtoXhdGGLLyfcCZNrmT3fxCzGRZWbq3Xvwhi04QhLXuSlM2nmAYbyeB2Y99BhcoIEc5jq1DtgNNjvJ06458P%2FyeqFR2tVoYS7By1LGLxqLuRO5BGE5WS6NbUx7DgMvoh454KEwmb%2BplyFB%2F25JqvWE9f1S1uTFnSi6Ec1TuVFQgbWrlzI%2FJmaQWH6gn3Mzg7a6If&X-Amz-Signature=f9cbe9f19d89b048b6b806d1ce0cf9977343f887ff47c860026710e3741f8cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ46T3U%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFDGA1eFQc3M0csmCObxPcjr34mpehUE4QFWbvyeFA3WAiEA59w2PGmtJwcNpBQk2GitzTshzgAPvv7Af4W3%2F73NGOEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEqLLY61RtdZgJZDHSrcA3rgwmBpKH8fNy3qyvocU7hcYGg39HPKb3UrXvBqMZtobJlk9fs96cMufDNoky7UZGBlFm8GwgweXNg4pGIqN16hdDvUBXXfTKg3U4pdhMPoYf6c5jP5Pp2IccWNA%2Bf04nggY4sQxrrVmgEeeFFVH7j89w2ttiDwm7qLFj%2F0C7SzElqe2n%2FYbgFwFKSXwAAQ5MXe5kxJTW2p32a%2FWJI3iYqKd1Ym22hhAMPbqMMLy3cMvnxn%2BZ4pRsYIMqBYRhsRzW%2Fvr9vNST17hnBOqxrHBoWo4DCe8HcIPHzhxZh%2FL2kxd2XGOrq7GAgGOsGqDfFK%2BeRoVZb39YqDi45YjQAcWArohiaRvNWOCMX%2BgZ63WcfKZ0TDWaaoM7bpP%2BPK1xMmj0tTlrIikZUOlkw%2FktBY0IBLXKuuvZjYAzT%2F8L7LK9%2BI2LW%2BrfOMDld62vnBLwfF4YdCFVOr20JO6GuF6%2BMn6WH2Px3fvYoJF41AQHavia7RPRckzBbPETk0itvmdM%2FlFCMEEbAkhNSV26CyRKBwCUKL%2B148tDXU%2BQoInp2y0EcktQEq249URM5ysEqIY2n15JNxabdghtwzoW6bicFVTiCDN7MAyUPULddSJzGrL11OYwf1GrHQuS0xSdZ7MI65nNIGOqUBE1DgyF3t6uZqkum43TzU14loYtoXhdGGLLyfcCZNrmT3fxCzGRZWbq3Xvwhi04QhLXuSlM2nmAYbyeB2Y99BhcoIEc5jq1DtgNNjvJ06458P%2FyeqFR2tVoYS7By1LGLxqLuRO5BGE5WS6NbUx7DgMvoh454KEwmb%2BplyFB%2F25JqvWE9f1S1uTFnSi6Ec1TuVFQgbWrlzI%2FJmaQWH6gn3Mzg7a6If&X-Amz-Signature=bd8786b043147475114f13629e2431abb74f4085608408d2dbb175551928358f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJ46T3U%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFDGA1eFQc3M0csmCObxPcjr34mpehUE4QFWbvyeFA3WAiEA59w2PGmtJwcNpBQk2GitzTshzgAPvv7Af4W3%2F73NGOEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDEqLLY61RtdZgJZDHSrcA3rgwmBpKH8fNy3qyvocU7hcYGg39HPKb3UrXvBqMZtobJlk9fs96cMufDNoky7UZGBlFm8GwgweXNg4pGIqN16hdDvUBXXfTKg3U4pdhMPoYf6c5jP5Pp2IccWNA%2Bf04nggY4sQxrrVmgEeeFFVH7j89w2ttiDwm7qLFj%2F0C7SzElqe2n%2FYbgFwFKSXwAAQ5MXe5kxJTW2p32a%2FWJI3iYqKd1Ym22hhAMPbqMMLy3cMvnxn%2BZ4pRsYIMqBYRhsRzW%2Fvr9vNST17hnBOqxrHBoWo4DCe8HcIPHzhxZh%2FL2kxd2XGOrq7GAgGOsGqDfFK%2BeRoVZb39YqDi45YjQAcWArohiaRvNWOCMX%2BgZ63WcfKZ0TDWaaoM7bpP%2BPK1xMmj0tTlrIikZUOlkw%2FktBY0IBLXKuuvZjYAzT%2F8L7LK9%2BI2LW%2BrfOMDld62vnBLwfF4YdCFVOr20JO6GuF6%2BMn6WH2Px3fvYoJF41AQHavia7RPRckzBbPETk0itvmdM%2FlFCMEEbAkhNSV26CyRKBwCUKL%2B148tDXU%2BQoInp2y0EcktQEq249URM5ysEqIY2n15JNxabdghtwzoW6bicFVTiCDN7MAyUPULddSJzGrL11OYwf1GrHQuS0xSdZ7MI65nNIGOqUBE1DgyF3t6uZqkum43TzU14loYtoXhdGGLLyfcCZNrmT3fxCzGRZWbq3Xvwhi04QhLXuSlM2nmAYbyeB2Y99BhcoIEc5jq1DtgNNjvJ06458P%2FyeqFR2tVoYS7By1LGLxqLuRO5BGE5WS6NbUx7DgMvoh454KEwmb%2BplyFB%2F25JqvWE9f1S1uTFnSi6Ec1TuVFQgbWrlzI%2FJmaQWH6gn3Mzg7a6If&X-Amz-Signature=bf866270517c659f9b6b7ba3f1a9aa0c9a18db5516aa6efcc242fb4725f11866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
