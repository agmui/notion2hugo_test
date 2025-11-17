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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF6ZPKVY%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfldilmr4repJYF%2Bt7ic4pkPh0mRj3duh65FmwMK06AAiEAu0g0x8FtKvlQX04HUCaXUMDSqqnEmIOlfPDIGtwzwPkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4iQsliF0OavIbyySrcAzxLaWCIU8avnH34xUeOk6Xk1dMRA5Pm1Kean9GnMh18VqWsH%2FYJcP%2B8UPZuDCB2ayKMQ60McJqlhO3Mo4Uv0MwJDQ0htwhMUS4Ipgzyp%2FUzzLHtStu2%2BhFfwIbTVh24Acl2kSCHWsqwsBgnJofk4%2FEFxD8XpbXwFXihvqHxM408MDTR21f8hpL%2Fkojk%2BvoRNICf8eRt11qqfQ4Xmwncmad69XPQPnRwthPNlhJzM4DY3Z9E3HtmdRCuTUyL1vGuwgZg9yv6B%2FaIkFKqB7tfw8Glp%2BHr9bEt1o6eEqj1eykSDH8GHFpngkUv3%2FQTwisAr9b%2FwlBRQi3FKGLhtRZ8dc71MYAGFzOESUdHUGsNZhZFdET2X2jRiT1NssZ7cuNyN3IAc8SpOYA8a7ZlIBBEgMuB2BFU%2BvhaKCjLeuh4UnQvpzy2n7trveQ38xWRfC5d7z3fcfijte%2B%2BrmAsuNPpOwMb0cbENIVCJU1vsZ3YfDqGAwChqUNGXJULP7gEhSqymH4qOShtB7%2Ban2DBL6uo%2FOTl9qCz3T3OuPjbOOX7QrlH9w8SyErk%2FOk8m2lodXL0IYXgRrBwsZaXcRZEVg24zLAjIMRoGaRbXQKE7VI0lbtYkCEMJQEMlwa3cS1rMKng6cgGOqUBjLNCDlsbFcBtTPK2vUUsyNUYI4wmXDgqD8PYgcr5bm%2FKRk1wb0vOEwm%2B4DpFSoe3Y3ht3b2r14vLfwJ97aC7yRV%2Bo%2B6W7kj2t0fsodPV6IuK%2BpsXTQheBVDQbzGct544qlUjbqSc4snlQN36g8w4WJ93uVRnFGuPINukYoXMpIw35oRk%2BcrqqSRFnw8M%2BX2DMrH%2B9LBq39GAop8F2RF%2BtSXbpJoN&X-Amz-Signature=ba74abd18d651cda46d50a22f0179f06675137fa3e6f4d51f9f940b7f3e7b164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX744VEK%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5h1UiTHwkbAy40qWfjoKTjfdA4PG1BQBfBQxNCwuWQAiEAhFZkdKePv7wLdffs1HZIu37poKskyRQZ4vvkbs9mKHEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7lbX4ob8Fs8Lht2CrcA6EvHj%2FVINzTzPq7FmUE14ZAvMuPaGSTtbX77PtNw2V6M7RTGkbXUpHMlP2fx9RZQu1%2F6v9NI1qB05l7Y4cRYZH%2Bp4ENbzbQrmG9ja0qRbcLp%2BIeDY1LKoXSvrzl%2Fnt4wKeLMpnmDkhETjyBgnTua5YkYE8499YzxdGNrPzEjhy2xh9iuxYyNUkc4omyEPbq2gpCf9QkJn7bsFlfHEBBVS%2BzMjkWWcg1IQ%2F6Mzlg9PHnTzBv4Twco0A2qLZ5JgwztpIuQ5kAjGiO2f8VuthXkZFLppt336IHVGNcvQ9hrBSp15R08C%2FHrx3mU4CFNXfi9%2BeR1VmtU9CuOmFWejXom4%2FJfAZslUWqzC9kUPVNJo%2BXLGHope7W%2BPjrnhkp7GynnLl%2BlTpgD52LnJll16vb3qdrZH3PzfzwxBkbcs%2B5MHxIFH8h8if1lKI%2BYZBDK73%2Fmi0e2k%2FBftMrKShmvQrrRAhG%2FuBWGFf%2BW6SlduRXQolwFa4IkkvQPuHQHmPdX%2BxCWdvXYiuVSux5GDfy3Cs9XZlze27f7FcHp8TASa2m3nOi2pKEHqKp3R2AEUapowAoDjKyzOgFY5rVUXDWHvtXW0JzDh0U%2BIRHseTYtQuUi3bq%2FmMjMcAGBTxPWOp%2FMNrg6cgGOqUBmjLlcQUAu9fcU9pMhE36MXXxM%2F%2FeQJEL5sWfGscZbvWFYrC9PDHUKNkyQLsjSo188EqdiWYmZbGiZ%2F2jjMobbZt3lZpDLprgEf37xlxK8U3tGTMDmnpn7sADx%2BCzCUIGfRoRHB1FysXq%2BFXTy4Ipg0hjsvXWLEnIOVQlWyNH%2B9pIHuQrnjaPTjt3LsnMK%2Fl4HWNi2Z00bdbuUumRpamaPwkTS0LW&X-Amz-Signature=f68154ce33b2e9c7c871877c59e7983e89ab9df91f545e6c3961735487efe384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX744VEK%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5h1UiTHwkbAy40qWfjoKTjfdA4PG1BQBfBQxNCwuWQAiEAhFZkdKePv7wLdffs1HZIu37poKskyRQZ4vvkbs9mKHEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7lbX4ob8Fs8Lht2CrcA6EvHj%2FVINzTzPq7FmUE14ZAvMuPaGSTtbX77PtNw2V6M7RTGkbXUpHMlP2fx9RZQu1%2F6v9NI1qB05l7Y4cRYZH%2Bp4ENbzbQrmG9ja0qRbcLp%2BIeDY1LKoXSvrzl%2Fnt4wKeLMpnmDkhETjyBgnTua5YkYE8499YzxdGNrPzEjhy2xh9iuxYyNUkc4omyEPbq2gpCf9QkJn7bsFlfHEBBVS%2BzMjkWWcg1IQ%2F6Mzlg9PHnTzBv4Twco0A2qLZ5JgwztpIuQ5kAjGiO2f8VuthXkZFLppt336IHVGNcvQ9hrBSp15R08C%2FHrx3mU4CFNXfi9%2BeR1VmtU9CuOmFWejXom4%2FJfAZslUWqzC9kUPVNJo%2BXLGHope7W%2BPjrnhkp7GynnLl%2BlTpgD52LnJll16vb3qdrZH3PzfzwxBkbcs%2B5MHxIFH8h8if1lKI%2BYZBDK73%2Fmi0e2k%2FBftMrKShmvQrrRAhG%2FuBWGFf%2BW6SlduRXQolwFa4IkkvQPuHQHmPdX%2BxCWdvXYiuVSux5GDfy3Cs9XZlze27f7FcHp8TASa2m3nOi2pKEHqKp3R2AEUapowAoDjKyzOgFY5rVUXDWHvtXW0JzDh0U%2BIRHseTYtQuUi3bq%2FmMjMcAGBTxPWOp%2FMNrg6cgGOqUBmjLlcQUAu9fcU9pMhE36MXXxM%2F%2FeQJEL5sWfGscZbvWFYrC9PDHUKNkyQLsjSo188EqdiWYmZbGiZ%2F2jjMobbZt3lZpDLprgEf37xlxK8U3tGTMDmnpn7sADx%2BCzCUIGfRoRHB1FysXq%2BFXTy4Ipg0hjsvXWLEnIOVQlWyNH%2B9pIHuQrnjaPTjt3LsnMK%2Fl4HWNi2Z00bdbuUumRpamaPwkTS0LW&X-Amz-Signature=f7af5fc72c84c66036b2fe9454431215348523de37df7692672ee5b115f68151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX744VEK%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5h1UiTHwkbAy40qWfjoKTjfdA4PG1BQBfBQxNCwuWQAiEAhFZkdKePv7wLdffs1HZIu37poKskyRQZ4vvkbs9mKHEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7lbX4ob8Fs8Lht2CrcA6EvHj%2FVINzTzPq7FmUE14ZAvMuPaGSTtbX77PtNw2V6M7RTGkbXUpHMlP2fx9RZQu1%2F6v9NI1qB05l7Y4cRYZH%2Bp4ENbzbQrmG9ja0qRbcLp%2BIeDY1LKoXSvrzl%2Fnt4wKeLMpnmDkhETjyBgnTua5YkYE8499YzxdGNrPzEjhy2xh9iuxYyNUkc4omyEPbq2gpCf9QkJn7bsFlfHEBBVS%2BzMjkWWcg1IQ%2F6Mzlg9PHnTzBv4Twco0A2qLZ5JgwztpIuQ5kAjGiO2f8VuthXkZFLppt336IHVGNcvQ9hrBSp15R08C%2FHrx3mU4CFNXfi9%2BeR1VmtU9CuOmFWejXom4%2FJfAZslUWqzC9kUPVNJo%2BXLGHope7W%2BPjrnhkp7GynnLl%2BlTpgD52LnJll16vb3qdrZH3PzfzwxBkbcs%2B5MHxIFH8h8if1lKI%2BYZBDK73%2Fmi0e2k%2FBftMrKShmvQrrRAhG%2FuBWGFf%2BW6SlduRXQolwFa4IkkvQPuHQHmPdX%2BxCWdvXYiuVSux5GDfy3Cs9XZlze27f7FcHp8TASa2m3nOi2pKEHqKp3R2AEUapowAoDjKyzOgFY5rVUXDWHvtXW0JzDh0U%2BIRHseTYtQuUi3bq%2FmMjMcAGBTxPWOp%2FMNrg6cgGOqUBmjLlcQUAu9fcU9pMhE36MXXxM%2F%2FeQJEL5sWfGscZbvWFYrC9PDHUKNkyQLsjSo188EqdiWYmZbGiZ%2F2jjMobbZt3lZpDLprgEf37xlxK8U3tGTMDmnpn7sADx%2BCzCUIGfRoRHB1FysXq%2BFXTy4Ipg0hjsvXWLEnIOVQlWyNH%2B9pIHuQrnjaPTjt3LsnMK%2Fl4HWNi2Z00bdbuUumRpamaPwkTS0LW&X-Amz-Signature=7e3eca5f928c5027b2ca2a5ca18758589110e9b9cbea08e5b7d6128a16b2ee07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX744VEK%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5h1UiTHwkbAy40qWfjoKTjfdA4PG1BQBfBQxNCwuWQAiEAhFZkdKePv7wLdffs1HZIu37poKskyRQZ4vvkbs9mKHEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7lbX4ob8Fs8Lht2CrcA6EvHj%2FVINzTzPq7FmUE14ZAvMuPaGSTtbX77PtNw2V6M7RTGkbXUpHMlP2fx9RZQu1%2F6v9NI1qB05l7Y4cRYZH%2Bp4ENbzbQrmG9ja0qRbcLp%2BIeDY1LKoXSvrzl%2Fnt4wKeLMpnmDkhETjyBgnTua5YkYE8499YzxdGNrPzEjhy2xh9iuxYyNUkc4omyEPbq2gpCf9QkJn7bsFlfHEBBVS%2BzMjkWWcg1IQ%2F6Mzlg9PHnTzBv4Twco0A2qLZ5JgwztpIuQ5kAjGiO2f8VuthXkZFLppt336IHVGNcvQ9hrBSp15R08C%2FHrx3mU4CFNXfi9%2BeR1VmtU9CuOmFWejXom4%2FJfAZslUWqzC9kUPVNJo%2BXLGHope7W%2BPjrnhkp7GynnLl%2BlTpgD52LnJll16vb3qdrZH3PzfzwxBkbcs%2B5MHxIFH8h8if1lKI%2BYZBDK73%2Fmi0e2k%2FBftMrKShmvQrrRAhG%2FuBWGFf%2BW6SlduRXQolwFa4IkkvQPuHQHmPdX%2BxCWdvXYiuVSux5GDfy3Cs9XZlze27f7FcHp8TASa2m3nOi2pKEHqKp3R2AEUapowAoDjKyzOgFY5rVUXDWHvtXW0JzDh0U%2BIRHseTYtQuUi3bq%2FmMjMcAGBTxPWOp%2FMNrg6cgGOqUBmjLlcQUAu9fcU9pMhE36MXXxM%2F%2FeQJEL5sWfGscZbvWFYrC9PDHUKNkyQLsjSo188EqdiWYmZbGiZ%2F2jjMobbZt3lZpDLprgEf37xlxK8U3tGTMDmnpn7sADx%2BCzCUIGfRoRHB1FysXq%2BFXTy4Ipg0hjsvXWLEnIOVQlWyNH%2B9pIHuQrnjaPTjt3LsnMK%2Fl4HWNi2Z00bdbuUumRpamaPwkTS0LW&X-Amz-Signature=c687536b272214854a7a41a4282c318b4f3631e924c8287ff2d4878d37c22742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX744VEK%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5h1UiTHwkbAy40qWfjoKTjfdA4PG1BQBfBQxNCwuWQAiEAhFZkdKePv7wLdffs1HZIu37poKskyRQZ4vvkbs9mKHEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7lbX4ob8Fs8Lht2CrcA6EvHj%2FVINzTzPq7FmUE14ZAvMuPaGSTtbX77PtNw2V6M7RTGkbXUpHMlP2fx9RZQu1%2F6v9NI1qB05l7Y4cRYZH%2Bp4ENbzbQrmG9ja0qRbcLp%2BIeDY1LKoXSvrzl%2Fnt4wKeLMpnmDkhETjyBgnTua5YkYE8499YzxdGNrPzEjhy2xh9iuxYyNUkc4omyEPbq2gpCf9QkJn7bsFlfHEBBVS%2BzMjkWWcg1IQ%2F6Mzlg9PHnTzBv4Twco0A2qLZ5JgwztpIuQ5kAjGiO2f8VuthXkZFLppt336IHVGNcvQ9hrBSp15R08C%2FHrx3mU4CFNXfi9%2BeR1VmtU9CuOmFWejXom4%2FJfAZslUWqzC9kUPVNJo%2BXLGHope7W%2BPjrnhkp7GynnLl%2BlTpgD52LnJll16vb3qdrZH3PzfzwxBkbcs%2B5MHxIFH8h8if1lKI%2BYZBDK73%2Fmi0e2k%2FBftMrKShmvQrrRAhG%2FuBWGFf%2BW6SlduRXQolwFa4IkkvQPuHQHmPdX%2BxCWdvXYiuVSux5GDfy3Cs9XZlze27f7FcHp8TASa2m3nOi2pKEHqKp3R2AEUapowAoDjKyzOgFY5rVUXDWHvtXW0JzDh0U%2BIRHseTYtQuUi3bq%2FmMjMcAGBTxPWOp%2FMNrg6cgGOqUBmjLlcQUAu9fcU9pMhE36MXXxM%2F%2FeQJEL5sWfGscZbvWFYrC9PDHUKNkyQLsjSo188EqdiWYmZbGiZ%2F2jjMobbZt3lZpDLprgEf37xlxK8U3tGTMDmnpn7sADx%2BCzCUIGfRoRHB1FysXq%2BFXTy4Ipg0hjsvXWLEnIOVQlWyNH%2B9pIHuQrnjaPTjt3LsnMK%2Fl4HWNi2Z00bdbuUumRpamaPwkTS0LW&X-Amz-Signature=17cf986093a8e6d223d8f9a6d7389b2024b7ba3cdb017df515094652023fbbe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX744VEK%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5h1UiTHwkbAy40qWfjoKTjfdA4PG1BQBfBQxNCwuWQAiEAhFZkdKePv7wLdffs1HZIu37poKskyRQZ4vvkbs9mKHEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7lbX4ob8Fs8Lht2CrcA6EvHj%2FVINzTzPq7FmUE14ZAvMuPaGSTtbX77PtNw2V6M7RTGkbXUpHMlP2fx9RZQu1%2F6v9NI1qB05l7Y4cRYZH%2Bp4ENbzbQrmG9ja0qRbcLp%2BIeDY1LKoXSvrzl%2Fnt4wKeLMpnmDkhETjyBgnTua5YkYE8499YzxdGNrPzEjhy2xh9iuxYyNUkc4omyEPbq2gpCf9QkJn7bsFlfHEBBVS%2BzMjkWWcg1IQ%2F6Mzlg9PHnTzBv4Twco0A2qLZ5JgwztpIuQ5kAjGiO2f8VuthXkZFLppt336IHVGNcvQ9hrBSp15R08C%2FHrx3mU4CFNXfi9%2BeR1VmtU9CuOmFWejXom4%2FJfAZslUWqzC9kUPVNJo%2BXLGHope7W%2BPjrnhkp7GynnLl%2BlTpgD52LnJll16vb3qdrZH3PzfzwxBkbcs%2B5MHxIFH8h8if1lKI%2BYZBDK73%2Fmi0e2k%2FBftMrKShmvQrrRAhG%2FuBWGFf%2BW6SlduRXQolwFa4IkkvQPuHQHmPdX%2BxCWdvXYiuVSux5GDfy3Cs9XZlze27f7FcHp8TASa2m3nOi2pKEHqKp3R2AEUapowAoDjKyzOgFY5rVUXDWHvtXW0JzDh0U%2BIRHseTYtQuUi3bq%2FmMjMcAGBTxPWOp%2FMNrg6cgGOqUBmjLlcQUAu9fcU9pMhE36MXXxM%2F%2FeQJEL5sWfGscZbvWFYrC9PDHUKNkyQLsjSo188EqdiWYmZbGiZ%2F2jjMobbZt3lZpDLprgEf37xlxK8U3tGTMDmnpn7sADx%2BCzCUIGfRoRHB1FysXq%2BFXTy4Ipg0hjsvXWLEnIOVQlWyNH%2B9pIHuQrnjaPTjt3LsnMK%2Fl4HWNi2Z00bdbuUumRpamaPwkTS0LW&X-Amz-Signature=97c876c20bb90f41aa271c5a652ae343287c8ea48f65ff3d1ba44ac29c5b495d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX744VEK%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5h1UiTHwkbAy40qWfjoKTjfdA4PG1BQBfBQxNCwuWQAiEAhFZkdKePv7wLdffs1HZIu37poKskyRQZ4vvkbs9mKHEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7lbX4ob8Fs8Lht2CrcA6EvHj%2FVINzTzPq7FmUE14ZAvMuPaGSTtbX77PtNw2V6M7RTGkbXUpHMlP2fx9RZQu1%2F6v9NI1qB05l7Y4cRYZH%2Bp4ENbzbQrmG9ja0qRbcLp%2BIeDY1LKoXSvrzl%2Fnt4wKeLMpnmDkhETjyBgnTua5YkYE8499YzxdGNrPzEjhy2xh9iuxYyNUkc4omyEPbq2gpCf9QkJn7bsFlfHEBBVS%2BzMjkWWcg1IQ%2F6Mzlg9PHnTzBv4Twco0A2qLZ5JgwztpIuQ5kAjGiO2f8VuthXkZFLppt336IHVGNcvQ9hrBSp15R08C%2FHrx3mU4CFNXfi9%2BeR1VmtU9CuOmFWejXom4%2FJfAZslUWqzC9kUPVNJo%2BXLGHope7W%2BPjrnhkp7GynnLl%2BlTpgD52LnJll16vb3qdrZH3PzfzwxBkbcs%2B5MHxIFH8h8if1lKI%2BYZBDK73%2Fmi0e2k%2FBftMrKShmvQrrRAhG%2FuBWGFf%2BW6SlduRXQolwFa4IkkvQPuHQHmPdX%2BxCWdvXYiuVSux5GDfy3Cs9XZlze27f7FcHp8TASa2m3nOi2pKEHqKp3R2AEUapowAoDjKyzOgFY5rVUXDWHvtXW0JzDh0U%2BIRHseTYtQuUi3bq%2FmMjMcAGBTxPWOp%2FMNrg6cgGOqUBmjLlcQUAu9fcU9pMhE36MXXxM%2F%2FeQJEL5sWfGscZbvWFYrC9PDHUKNkyQLsjSo188EqdiWYmZbGiZ%2F2jjMobbZt3lZpDLprgEf37xlxK8U3tGTMDmnpn7sADx%2BCzCUIGfRoRHB1FysXq%2BFXTy4Ipg0hjsvXWLEnIOVQlWyNH%2B9pIHuQrnjaPTjt3LsnMK%2Fl4HWNi2Z00bdbuUumRpamaPwkTS0LW&X-Amz-Signature=3504bbf0e8480c0d9d54ddf25ed21cc2606fb8ac2de7b8f863d7e2bd4130ff18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX744VEK%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5h1UiTHwkbAy40qWfjoKTjfdA4PG1BQBfBQxNCwuWQAiEAhFZkdKePv7wLdffs1HZIu37poKskyRQZ4vvkbs9mKHEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7lbX4ob8Fs8Lht2CrcA6EvHj%2FVINzTzPq7FmUE14ZAvMuPaGSTtbX77PtNw2V6M7RTGkbXUpHMlP2fx9RZQu1%2F6v9NI1qB05l7Y4cRYZH%2Bp4ENbzbQrmG9ja0qRbcLp%2BIeDY1LKoXSvrzl%2Fnt4wKeLMpnmDkhETjyBgnTua5YkYE8499YzxdGNrPzEjhy2xh9iuxYyNUkc4omyEPbq2gpCf9QkJn7bsFlfHEBBVS%2BzMjkWWcg1IQ%2F6Mzlg9PHnTzBv4Twco0A2qLZ5JgwztpIuQ5kAjGiO2f8VuthXkZFLppt336IHVGNcvQ9hrBSp15R08C%2FHrx3mU4CFNXfi9%2BeR1VmtU9CuOmFWejXom4%2FJfAZslUWqzC9kUPVNJo%2BXLGHope7W%2BPjrnhkp7GynnLl%2BlTpgD52LnJll16vb3qdrZH3PzfzwxBkbcs%2B5MHxIFH8h8if1lKI%2BYZBDK73%2Fmi0e2k%2FBftMrKShmvQrrRAhG%2FuBWGFf%2BW6SlduRXQolwFa4IkkvQPuHQHmPdX%2BxCWdvXYiuVSux5GDfy3Cs9XZlze27f7FcHp8TASa2m3nOi2pKEHqKp3R2AEUapowAoDjKyzOgFY5rVUXDWHvtXW0JzDh0U%2BIRHseTYtQuUi3bq%2FmMjMcAGBTxPWOp%2FMNrg6cgGOqUBmjLlcQUAu9fcU9pMhE36MXXxM%2F%2FeQJEL5sWfGscZbvWFYrC9PDHUKNkyQLsjSo188EqdiWYmZbGiZ%2F2jjMobbZt3lZpDLprgEf37xlxK8U3tGTMDmnpn7sADx%2BCzCUIGfRoRHB1FysXq%2BFXTy4Ipg0hjsvXWLEnIOVQlWyNH%2B9pIHuQrnjaPTjt3LsnMK%2Fl4HWNi2Z00bdbuUumRpamaPwkTS0LW&X-Amz-Signature=ad3482f085c6f49fbb695857fb4f34670059b11769065a340d8c0e9d19baf49d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX744VEK%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5h1UiTHwkbAy40qWfjoKTjfdA4PG1BQBfBQxNCwuWQAiEAhFZkdKePv7wLdffs1HZIu37poKskyRQZ4vvkbs9mKHEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7lbX4ob8Fs8Lht2CrcA6EvHj%2FVINzTzPq7FmUE14ZAvMuPaGSTtbX77PtNw2V6M7RTGkbXUpHMlP2fx9RZQu1%2F6v9NI1qB05l7Y4cRYZH%2Bp4ENbzbQrmG9ja0qRbcLp%2BIeDY1LKoXSvrzl%2Fnt4wKeLMpnmDkhETjyBgnTua5YkYE8499YzxdGNrPzEjhy2xh9iuxYyNUkc4omyEPbq2gpCf9QkJn7bsFlfHEBBVS%2BzMjkWWcg1IQ%2F6Mzlg9PHnTzBv4Twco0A2qLZ5JgwztpIuQ5kAjGiO2f8VuthXkZFLppt336IHVGNcvQ9hrBSp15R08C%2FHrx3mU4CFNXfi9%2BeR1VmtU9CuOmFWejXom4%2FJfAZslUWqzC9kUPVNJo%2BXLGHope7W%2BPjrnhkp7GynnLl%2BlTpgD52LnJll16vb3qdrZH3PzfzwxBkbcs%2B5MHxIFH8h8if1lKI%2BYZBDK73%2Fmi0e2k%2FBftMrKShmvQrrRAhG%2FuBWGFf%2BW6SlduRXQolwFa4IkkvQPuHQHmPdX%2BxCWdvXYiuVSux5GDfy3Cs9XZlze27f7FcHp8TASa2m3nOi2pKEHqKp3R2AEUapowAoDjKyzOgFY5rVUXDWHvtXW0JzDh0U%2BIRHseTYtQuUi3bq%2FmMjMcAGBTxPWOp%2FMNrg6cgGOqUBmjLlcQUAu9fcU9pMhE36MXXxM%2F%2FeQJEL5sWfGscZbvWFYrC9PDHUKNkyQLsjSo188EqdiWYmZbGiZ%2F2jjMobbZt3lZpDLprgEf37xlxK8U3tGTMDmnpn7sADx%2BCzCUIGfRoRHB1FysXq%2BFXTy4Ipg0hjsvXWLEnIOVQlWyNH%2B9pIHuQrnjaPTjt3LsnMK%2Fl4HWNi2Z00bdbuUumRpamaPwkTS0LW&X-Amz-Signature=572aa22545dad796f9344d2a850b600bb44d5b83f92129757928dfec47678c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX744VEK%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5h1UiTHwkbAy40qWfjoKTjfdA4PG1BQBfBQxNCwuWQAiEAhFZkdKePv7wLdffs1HZIu37poKskyRQZ4vvkbs9mKHEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7lbX4ob8Fs8Lht2CrcA6EvHj%2FVINzTzPq7FmUE14ZAvMuPaGSTtbX77PtNw2V6M7RTGkbXUpHMlP2fx9RZQu1%2F6v9NI1qB05l7Y4cRYZH%2Bp4ENbzbQrmG9ja0qRbcLp%2BIeDY1LKoXSvrzl%2Fnt4wKeLMpnmDkhETjyBgnTua5YkYE8499YzxdGNrPzEjhy2xh9iuxYyNUkc4omyEPbq2gpCf9QkJn7bsFlfHEBBVS%2BzMjkWWcg1IQ%2F6Mzlg9PHnTzBv4Twco0A2qLZ5JgwztpIuQ5kAjGiO2f8VuthXkZFLppt336IHVGNcvQ9hrBSp15R08C%2FHrx3mU4CFNXfi9%2BeR1VmtU9CuOmFWejXom4%2FJfAZslUWqzC9kUPVNJo%2BXLGHope7W%2BPjrnhkp7GynnLl%2BlTpgD52LnJll16vb3qdrZH3PzfzwxBkbcs%2B5MHxIFH8h8if1lKI%2BYZBDK73%2Fmi0e2k%2FBftMrKShmvQrrRAhG%2FuBWGFf%2BW6SlduRXQolwFa4IkkvQPuHQHmPdX%2BxCWdvXYiuVSux5GDfy3Cs9XZlze27f7FcHp8TASa2m3nOi2pKEHqKp3R2AEUapowAoDjKyzOgFY5rVUXDWHvtXW0JzDh0U%2BIRHseTYtQuUi3bq%2FmMjMcAGBTxPWOp%2FMNrg6cgGOqUBmjLlcQUAu9fcU9pMhE36MXXxM%2F%2FeQJEL5sWfGscZbvWFYrC9PDHUKNkyQLsjSo188EqdiWYmZbGiZ%2F2jjMobbZt3lZpDLprgEf37xlxK8U3tGTMDmnpn7sADx%2BCzCUIGfRoRHB1FysXq%2BFXTy4Ipg0hjsvXWLEnIOVQlWyNH%2B9pIHuQrnjaPTjt3LsnMK%2Fl4HWNi2Z00bdbuUumRpamaPwkTS0LW&X-Amz-Signature=c687536b272214854a7a41a4282c318b4f3631e924c8287ff2d4878d37c22742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
