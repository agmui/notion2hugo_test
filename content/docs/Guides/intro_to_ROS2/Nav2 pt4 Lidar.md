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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6QD3AK%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUTPJonbHP2pCS0Hrx59nB1kGGdxeZWyz%2FGPcT8EOJkAiAstjj91liFt2WgNiFo%2Fj2ex%2BVpIgMaRdX7Ie7UVBYHDyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbzbxAdS%2F7FJ8NceBKtwDdOoWomjEzKrwalJogBHK3HAfw5yvn6T%2FFK6cz8%2BrupweL0ZKtnnwHsKfuBCUu5pOqy5J%2FaSCYZz0ZtVkcVwBG8af9PK2K97%2F2ksMKRMt%2FEenh09OV3oN1xeX3QUZiQ1WmZLjbk0lx5JcSDgkyhs48rBFHJvb5ATW7Qe17qyZQsgSvZNtKfUB4i3IJuK4%2BpUZeCPoNrIvDYMCFf1g7WG%2F1syXA27%2BsnniOAoGl4mjIAcaz12WlMCmLmhqnzGYWOTQCPxb8hHw3loXbnOP2ezIJLtD%2BNBuXyjXvtWNU4bIYqnrWI1xL5M6V4DjiB6Wj3HinQLGscJw6jbWQW%2B6884W9LP%2F0tUHxfZx%2BblR9q7TD51UWGHz2WJkA1T6DaxtJQjbuS5%2Bp8Z6WQkxJB%2FIjlFEszIVerVg4pewhRTuirRAc9WSfgMzWh2oUSAJRHaT0013XVoHizm4zLcEA6y7VxO1EgEC5IjFqaJSDutvbY%2BpC0QtfqmVcc55MpOBNeVtf%2FaDa0KoIhwmFD1HPwhd7%2BjnGbIcHmNfAGV9L3BX%2FXf6SNXF11bkut8tp4P1O96iOK%2FM12AFUbFOx4R9XMcESgQrLmiYR7qbMGNQ%2BWKUS2EHe%2FaZOZJVnG4t1KqEDLEw6bzLygY6pgGNCbJf6MiobtB%2BUXEF6OPpp8l3GvkJ8tPZvnDkHnplBHTMfrFb1RAtUB4pHwbziE9Yw%2BMhIC3f0ZolL67k3YnyyMzhh4hTrnbr%2Fh3jqU%2FplkYHCvQb%2FIcnL%2FFvXI1DdUpri01MBur7IwKgooXQL%2FyzcdHdefx0U%2Bs8%2FI%2FKCAJ9eEpAVazqQxUuNRgLVh%2B6%2B8rDht0JZCfg6FYDpUyD21fVCL1DgWlq&X-Amz-Signature=30af79efc27d3f013a98773fa244298484889cbc94300f92efe9b05e33bf3afd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPZKPP6%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSh0r8wo6MQrpxzyj86nhuoWrv53x0ltOEl%2BpbS3TXxwIgUUKQIIKHg09FHWt8bz%2F1rrneJOnmjK34XsbEy6k%2BcPgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcXTKW55IY722ZpnCrcA2eDCEHy3EbKJdrSApRCdjLDuERWf2WrjozDq%2BxYpVr%2FF%2BC211rLNQ%2BgHPLN96i3BHWmRBeEy5pCpDlxpQWVAY%2F0AaaGmK0aYqLPDLsfBcemyK8as4CDszWXi2W0BHSKCZpmGCcZ8x6Y7PdF1pZLUG8johJs2E1y7AGGRq3t2KVuEEA3bSqXf%2BFKi%2F6fgETz23LX73BSlBPhJzXDrmsDXa4MGOkSpIclHTWjILr0a7r4Uoz0lJzY3GbVcCsS%2B2eGVEiL0yIO9HW%2BYnVaa0eWKcOfjhFmLngnfU14sjF39W808k01OH5hr8tKLvGg2EqsfIqi4sT1GcRBR7LU%2FYImLMlt2xNcsoWGq8vRE2CancY7gD%2F%2BYu6BvccdyYpIZWeisvciNFl1rb3dFITjTD%2FA5QrvdBpwTdy0ER7ZGsyWXg5JIo4UxO9mBeJuuG9TcNfRuruIsNx5gqANVLCMO78bVnHRKxdXKRoMv1HmGywiRFsKmWlk8k10stdSPF9u1LjSJmbdDczA2Y%2B%2FYrp3SPB5Bn8tbHs4pOVAx56I60InHhSrK8T%2BLXqd8GZLwI8J738JFKjz1%2B5KAIIOTUN%2F8a1vxmqFzAm%2Bs2UMCiuZtj6HtajDVQn%2F570R7fZJuxvFMOm8y8oGOqUBEeqLFwfTlcl5mojrenH5jVQqI%2FqZPwM2oYIimH%2Fh6T6hNWDgjXnS8JK4KDLANC262qfd74oo%2B4UduVMrsv%2FUIaeDM5v%2B%2FkYbmygg1H2zcWXa7jU5PamVBONqC%2BH1iOR2WqFnZ4ZcR1gTwZjHIfHoERRIrE6wO7gflFtPN01TWC3flD%2F3kajOhL7UiD4vY3dLNZiipVLr3frzMWyzlUMFV0N2c%2Bqv&X-Amz-Signature=fe17f7309c4764013b2bb780f70ef249df99933f21ae66b14a00ddc7c196e0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPZKPP6%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSh0r8wo6MQrpxzyj86nhuoWrv53x0ltOEl%2BpbS3TXxwIgUUKQIIKHg09FHWt8bz%2F1rrneJOnmjK34XsbEy6k%2BcPgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcXTKW55IY722ZpnCrcA2eDCEHy3EbKJdrSApRCdjLDuERWf2WrjozDq%2BxYpVr%2FF%2BC211rLNQ%2BgHPLN96i3BHWmRBeEy5pCpDlxpQWVAY%2F0AaaGmK0aYqLPDLsfBcemyK8as4CDszWXi2W0BHSKCZpmGCcZ8x6Y7PdF1pZLUG8johJs2E1y7AGGRq3t2KVuEEA3bSqXf%2BFKi%2F6fgETz23LX73BSlBPhJzXDrmsDXa4MGOkSpIclHTWjILr0a7r4Uoz0lJzY3GbVcCsS%2B2eGVEiL0yIO9HW%2BYnVaa0eWKcOfjhFmLngnfU14sjF39W808k01OH5hr8tKLvGg2EqsfIqi4sT1GcRBR7LU%2FYImLMlt2xNcsoWGq8vRE2CancY7gD%2F%2BYu6BvccdyYpIZWeisvciNFl1rb3dFITjTD%2FA5QrvdBpwTdy0ER7ZGsyWXg5JIo4UxO9mBeJuuG9TcNfRuruIsNx5gqANVLCMO78bVnHRKxdXKRoMv1HmGywiRFsKmWlk8k10stdSPF9u1LjSJmbdDczA2Y%2B%2FYrp3SPB5Bn8tbHs4pOVAx56I60InHhSrK8T%2BLXqd8GZLwI8J738JFKjz1%2B5KAIIOTUN%2F8a1vxmqFzAm%2Bs2UMCiuZtj6HtajDVQn%2F570R7fZJuxvFMOm8y8oGOqUBEeqLFwfTlcl5mojrenH5jVQqI%2FqZPwM2oYIimH%2Fh6T6hNWDgjXnS8JK4KDLANC262qfd74oo%2B4UduVMrsv%2FUIaeDM5v%2B%2FkYbmygg1H2zcWXa7jU5PamVBONqC%2BH1iOR2WqFnZ4ZcR1gTwZjHIfHoERRIrE6wO7gflFtPN01TWC3flD%2F3kajOhL7UiD4vY3dLNZiipVLr3frzMWyzlUMFV0N2c%2Bqv&X-Amz-Signature=cb692b9a0ac835376a7af04dcf101423a87be234d87f20cd07f2f646374b12d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPZKPP6%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSh0r8wo6MQrpxzyj86nhuoWrv53x0ltOEl%2BpbS3TXxwIgUUKQIIKHg09FHWt8bz%2F1rrneJOnmjK34XsbEy6k%2BcPgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcXTKW55IY722ZpnCrcA2eDCEHy3EbKJdrSApRCdjLDuERWf2WrjozDq%2BxYpVr%2FF%2BC211rLNQ%2BgHPLN96i3BHWmRBeEy5pCpDlxpQWVAY%2F0AaaGmK0aYqLPDLsfBcemyK8as4CDszWXi2W0BHSKCZpmGCcZ8x6Y7PdF1pZLUG8johJs2E1y7AGGRq3t2KVuEEA3bSqXf%2BFKi%2F6fgETz23LX73BSlBPhJzXDrmsDXa4MGOkSpIclHTWjILr0a7r4Uoz0lJzY3GbVcCsS%2B2eGVEiL0yIO9HW%2BYnVaa0eWKcOfjhFmLngnfU14sjF39W808k01OH5hr8tKLvGg2EqsfIqi4sT1GcRBR7LU%2FYImLMlt2xNcsoWGq8vRE2CancY7gD%2F%2BYu6BvccdyYpIZWeisvciNFl1rb3dFITjTD%2FA5QrvdBpwTdy0ER7ZGsyWXg5JIo4UxO9mBeJuuG9TcNfRuruIsNx5gqANVLCMO78bVnHRKxdXKRoMv1HmGywiRFsKmWlk8k10stdSPF9u1LjSJmbdDczA2Y%2B%2FYrp3SPB5Bn8tbHs4pOVAx56I60InHhSrK8T%2BLXqd8GZLwI8J738JFKjz1%2B5KAIIOTUN%2F8a1vxmqFzAm%2Bs2UMCiuZtj6HtajDVQn%2F570R7fZJuxvFMOm8y8oGOqUBEeqLFwfTlcl5mojrenH5jVQqI%2FqZPwM2oYIimH%2Fh6T6hNWDgjXnS8JK4KDLANC262qfd74oo%2B4UduVMrsv%2FUIaeDM5v%2B%2FkYbmygg1H2zcWXa7jU5PamVBONqC%2BH1iOR2WqFnZ4ZcR1gTwZjHIfHoERRIrE6wO7gflFtPN01TWC3flD%2F3kajOhL7UiD4vY3dLNZiipVLr3frzMWyzlUMFV0N2c%2Bqv&X-Amz-Signature=a3b1bde2b7563e2cf78436f4d8c3ea073c19a70b6d6878a999ec7f13f3588e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPZKPP6%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSh0r8wo6MQrpxzyj86nhuoWrv53x0ltOEl%2BpbS3TXxwIgUUKQIIKHg09FHWt8bz%2F1rrneJOnmjK34XsbEy6k%2BcPgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcXTKW55IY722ZpnCrcA2eDCEHy3EbKJdrSApRCdjLDuERWf2WrjozDq%2BxYpVr%2FF%2BC211rLNQ%2BgHPLN96i3BHWmRBeEy5pCpDlxpQWVAY%2F0AaaGmK0aYqLPDLsfBcemyK8as4CDszWXi2W0BHSKCZpmGCcZ8x6Y7PdF1pZLUG8johJs2E1y7AGGRq3t2KVuEEA3bSqXf%2BFKi%2F6fgETz23LX73BSlBPhJzXDrmsDXa4MGOkSpIclHTWjILr0a7r4Uoz0lJzY3GbVcCsS%2B2eGVEiL0yIO9HW%2BYnVaa0eWKcOfjhFmLngnfU14sjF39W808k01OH5hr8tKLvGg2EqsfIqi4sT1GcRBR7LU%2FYImLMlt2xNcsoWGq8vRE2CancY7gD%2F%2BYu6BvccdyYpIZWeisvciNFl1rb3dFITjTD%2FA5QrvdBpwTdy0ER7ZGsyWXg5JIo4UxO9mBeJuuG9TcNfRuruIsNx5gqANVLCMO78bVnHRKxdXKRoMv1HmGywiRFsKmWlk8k10stdSPF9u1LjSJmbdDczA2Y%2B%2FYrp3SPB5Bn8tbHs4pOVAx56I60InHhSrK8T%2BLXqd8GZLwI8J738JFKjz1%2B5KAIIOTUN%2F8a1vxmqFzAm%2Bs2UMCiuZtj6HtajDVQn%2F570R7fZJuxvFMOm8y8oGOqUBEeqLFwfTlcl5mojrenH5jVQqI%2FqZPwM2oYIimH%2Fh6T6hNWDgjXnS8JK4KDLANC262qfd74oo%2B4UduVMrsv%2FUIaeDM5v%2B%2FkYbmygg1H2zcWXa7jU5PamVBONqC%2BH1iOR2WqFnZ4ZcR1gTwZjHIfHoERRIrE6wO7gflFtPN01TWC3flD%2F3kajOhL7UiD4vY3dLNZiipVLr3frzMWyzlUMFV0N2c%2Bqv&X-Amz-Signature=e77e7ea3e7b9d0bf09df1432fa0b44dd99608d64c33c3e02b28e81c9f91a602e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPZKPP6%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSh0r8wo6MQrpxzyj86nhuoWrv53x0ltOEl%2BpbS3TXxwIgUUKQIIKHg09FHWt8bz%2F1rrneJOnmjK34XsbEy6k%2BcPgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcXTKW55IY722ZpnCrcA2eDCEHy3EbKJdrSApRCdjLDuERWf2WrjozDq%2BxYpVr%2FF%2BC211rLNQ%2BgHPLN96i3BHWmRBeEy5pCpDlxpQWVAY%2F0AaaGmK0aYqLPDLsfBcemyK8as4CDszWXi2W0BHSKCZpmGCcZ8x6Y7PdF1pZLUG8johJs2E1y7AGGRq3t2KVuEEA3bSqXf%2BFKi%2F6fgETz23LX73BSlBPhJzXDrmsDXa4MGOkSpIclHTWjILr0a7r4Uoz0lJzY3GbVcCsS%2B2eGVEiL0yIO9HW%2BYnVaa0eWKcOfjhFmLngnfU14sjF39W808k01OH5hr8tKLvGg2EqsfIqi4sT1GcRBR7LU%2FYImLMlt2xNcsoWGq8vRE2CancY7gD%2F%2BYu6BvccdyYpIZWeisvciNFl1rb3dFITjTD%2FA5QrvdBpwTdy0ER7ZGsyWXg5JIo4UxO9mBeJuuG9TcNfRuruIsNx5gqANVLCMO78bVnHRKxdXKRoMv1HmGywiRFsKmWlk8k10stdSPF9u1LjSJmbdDczA2Y%2B%2FYrp3SPB5Bn8tbHs4pOVAx56I60InHhSrK8T%2BLXqd8GZLwI8J738JFKjz1%2B5KAIIOTUN%2F8a1vxmqFzAm%2Bs2UMCiuZtj6HtajDVQn%2F570R7fZJuxvFMOm8y8oGOqUBEeqLFwfTlcl5mojrenH5jVQqI%2FqZPwM2oYIimH%2Fh6T6hNWDgjXnS8JK4KDLANC262qfd74oo%2B4UduVMrsv%2FUIaeDM5v%2B%2FkYbmygg1H2zcWXa7jU5PamVBONqC%2BH1iOR2WqFnZ4ZcR1gTwZjHIfHoERRIrE6wO7gflFtPN01TWC3flD%2F3kajOhL7UiD4vY3dLNZiipVLr3frzMWyzlUMFV0N2c%2Bqv&X-Amz-Signature=7b782aed1864707ca95d32acce05afcc0c92f5edb1b0ab4102cddf9b98a522c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPZKPP6%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSh0r8wo6MQrpxzyj86nhuoWrv53x0ltOEl%2BpbS3TXxwIgUUKQIIKHg09FHWt8bz%2F1rrneJOnmjK34XsbEy6k%2BcPgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcXTKW55IY722ZpnCrcA2eDCEHy3EbKJdrSApRCdjLDuERWf2WrjozDq%2BxYpVr%2FF%2BC211rLNQ%2BgHPLN96i3BHWmRBeEy5pCpDlxpQWVAY%2F0AaaGmK0aYqLPDLsfBcemyK8as4CDszWXi2W0BHSKCZpmGCcZ8x6Y7PdF1pZLUG8johJs2E1y7AGGRq3t2KVuEEA3bSqXf%2BFKi%2F6fgETz23LX73BSlBPhJzXDrmsDXa4MGOkSpIclHTWjILr0a7r4Uoz0lJzY3GbVcCsS%2B2eGVEiL0yIO9HW%2BYnVaa0eWKcOfjhFmLngnfU14sjF39W808k01OH5hr8tKLvGg2EqsfIqi4sT1GcRBR7LU%2FYImLMlt2xNcsoWGq8vRE2CancY7gD%2F%2BYu6BvccdyYpIZWeisvciNFl1rb3dFITjTD%2FA5QrvdBpwTdy0ER7ZGsyWXg5JIo4UxO9mBeJuuG9TcNfRuruIsNx5gqANVLCMO78bVnHRKxdXKRoMv1HmGywiRFsKmWlk8k10stdSPF9u1LjSJmbdDczA2Y%2B%2FYrp3SPB5Bn8tbHs4pOVAx56I60InHhSrK8T%2BLXqd8GZLwI8J738JFKjz1%2B5KAIIOTUN%2F8a1vxmqFzAm%2Bs2UMCiuZtj6HtajDVQn%2F570R7fZJuxvFMOm8y8oGOqUBEeqLFwfTlcl5mojrenH5jVQqI%2FqZPwM2oYIimH%2Fh6T6hNWDgjXnS8JK4KDLANC262qfd74oo%2B4UduVMrsv%2FUIaeDM5v%2B%2FkYbmygg1H2zcWXa7jU5PamVBONqC%2BH1iOR2WqFnZ4ZcR1gTwZjHIfHoERRIrE6wO7gflFtPN01TWC3flD%2F3kajOhL7UiD4vY3dLNZiipVLr3frzMWyzlUMFV0N2c%2Bqv&X-Amz-Signature=9dbfb25517e045bc5d4224e8198bd5a7a7b4b3cee04b09610f589ed150763c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPZKPP6%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSh0r8wo6MQrpxzyj86nhuoWrv53x0ltOEl%2BpbS3TXxwIgUUKQIIKHg09FHWt8bz%2F1rrneJOnmjK34XsbEy6k%2BcPgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcXTKW55IY722ZpnCrcA2eDCEHy3EbKJdrSApRCdjLDuERWf2WrjozDq%2BxYpVr%2FF%2BC211rLNQ%2BgHPLN96i3BHWmRBeEy5pCpDlxpQWVAY%2F0AaaGmK0aYqLPDLsfBcemyK8as4CDszWXi2W0BHSKCZpmGCcZ8x6Y7PdF1pZLUG8johJs2E1y7AGGRq3t2KVuEEA3bSqXf%2BFKi%2F6fgETz23LX73BSlBPhJzXDrmsDXa4MGOkSpIclHTWjILr0a7r4Uoz0lJzY3GbVcCsS%2B2eGVEiL0yIO9HW%2BYnVaa0eWKcOfjhFmLngnfU14sjF39W808k01OH5hr8tKLvGg2EqsfIqi4sT1GcRBR7LU%2FYImLMlt2xNcsoWGq8vRE2CancY7gD%2F%2BYu6BvccdyYpIZWeisvciNFl1rb3dFITjTD%2FA5QrvdBpwTdy0ER7ZGsyWXg5JIo4UxO9mBeJuuG9TcNfRuruIsNx5gqANVLCMO78bVnHRKxdXKRoMv1HmGywiRFsKmWlk8k10stdSPF9u1LjSJmbdDczA2Y%2B%2FYrp3SPB5Bn8tbHs4pOVAx56I60InHhSrK8T%2BLXqd8GZLwI8J738JFKjz1%2B5KAIIOTUN%2F8a1vxmqFzAm%2Bs2UMCiuZtj6HtajDVQn%2F570R7fZJuxvFMOm8y8oGOqUBEeqLFwfTlcl5mojrenH5jVQqI%2FqZPwM2oYIimH%2Fh6T6hNWDgjXnS8JK4KDLANC262qfd74oo%2B4UduVMrsv%2FUIaeDM5v%2B%2FkYbmygg1H2zcWXa7jU5PamVBONqC%2BH1iOR2WqFnZ4ZcR1gTwZjHIfHoERRIrE6wO7gflFtPN01TWC3flD%2F3kajOhL7UiD4vY3dLNZiipVLr3frzMWyzlUMFV0N2c%2Bqv&X-Amz-Signature=651f05301d2417f90f4318456f83f7672837e353c9fdd8f133cfde12403c9f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPZKPP6%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSh0r8wo6MQrpxzyj86nhuoWrv53x0ltOEl%2BpbS3TXxwIgUUKQIIKHg09FHWt8bz%2F1rrneJOnmjK34XsbEy6k%2BcPgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcXTKW55IY722ZpnCrcA2eDCEHy3EbKJdrSApRCdjLDuERWf2WrjozDq%2BxYpVr%2FF%2BC211rLNQ%2BgHPLN96i3BHWmRBeEy5pCpDlxpQWVAY%2F0AaaGmK0aYqLPDLsfBcemyK8as4CDszWXi2W0BHSKCZpmGCcZ8x6Y7PdF1pZLUG8johJs2E1y7AGGRq3t2KVuEEA3bSqXf%2BFKi%2F6fgETz23LX73BSlBPhJzXDrmsDXa4MGOkSpIclHTWjILr0a7r4Uoz0lJzY3GbVcCsS%2B2eGVEiL0yIO9HW%2BYnVaa0eWKcOfjhFmLngnfU14sjF39W808k01OH5hr8tKLvGg2EqsfIqi4sT1GcRBR7LU%2FYImLMlt2xNcsoWGq8vRE2CancY7gD%2F%2BYu6BvccdyYpIZWeisvciNFl1rb3dFITjTD%2FA5QrvdBpwTdy0ER7ZGsyWXg5JIo4UxO9mBeJuuG9TcNfRuruIsNx5gqANVLCMO78bVnHRKxdXKRoMv1HmGywiRFsKmWlk8k10stdSPF9u1LjSJmbdDczA2Y%2B%2FYrp3SPB5Bn8tbHs4pOVAx56I60InHhSrK8T%2BLXqd8GZLwI8J738JFKjz1%2B5KAIIOTUN%2F8a1vxmqFzAm%2Bs2UMCiuZtj6HtajDVQn%2F570R7fZJuxvFMOm8y8oGOqUBEeqLFwfTlcl5mojrenH5jVQqI%2FqZPwM2oYIimH%2Fh6T6hNWDgjXnS8JK4KDLANC262qfd74oo%2B4UduVMrsv%2FUIaeDM5v%2B%2FkYbmygg1H2zcWXa7jU5PamVBONqC%2BH1iOR2WqFnZ4ZcR1gTwZjHIfHoERRIrE6wO7gflFtPN01TWC3flD%2F3kajOhL7UiD4vY3dLNZiipVLr3frzMWyzlUMFV0N2c%2Bqv&X-Amz-Signature=226a99fbfd2b1081131be0c3150de56f8fe83488a4113d43fa9db34d3810a38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPZKPP6%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSh0r8wo6MQrpxzyj86nhuoWrv53x0ltOEl%2BpbS3TXxwIgUUKQIIKHg09FHWt8bz%2F1rrneJOnmjK34XsbEy6k%2BcPgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcXTKW55IY722ZpnCrcA2eDCEHy3EbKJdrSApRCdjLDuERWf2WrjozDq%2BxYpVr%2FF%2BC211rLNQ%2BgHPLN96i3BHWmRBeEy5pCpDlxpQWVAY%2F0AaaGmK0aYqLPDLsfBcemyK8as4CDszWXi2W0BHSKCZpmGCcZ8x6Y7PdF1pZLUG8johJs2E1y7AGGRq3t2KVuEEA3bSqXf%2BFKi%2F6fgETz23LX73BSlBPhJzXDrmsDXa4MGOkSpIclHTWjILr0a7r4Uoz0lJzY3GbVcCsS%2B2eGVEiL0yIO9HW%2BYnVaa0eWKcOfjhFmLngnfU14sjF39W808k01OH5hr8tKLvGg2EqsfIqi4sT1GcRBR7LU%2FYImLMlt2xNcsoWGq8vRE2CancY7gD%2F%2BYu6BvccdyYpIZWeisvciNFl1rb3dFITjTD%2FA5QrvdBpwTdy0ER7ZGsyWXg5JIo4UxO9mBeJuuG9TcNfRuruIsNx5gqANVLCMO78bVnHRKxdXKRoMv1HmGywiRFsKmWlk8k10stdSPF9u1LjSJmbdDczA2Y%2B%2FYrp3SPB5Bn8tbHs4pOVAx56I60InHhSrK8T%2BLXqd8GZLwI8J738JFKjz1%2B5KAIIOTUN%2F8a1vxmqFzAm%2Bs2UMCiuZtj6HtajDVQn%2F570R7fZJuxvFMOm8y8oGOqUBEeqLFwfTlcl5mojrenH5jVQqI%2FqZPwM2oYIimH%2Fh6T6hNWDgjXnS8JK4KDLANC262qfd74oo%2B4UduVMrsv%2FUIaeDM5v%2B%2FkYbmygg1H2zcWXa7jU5PamVBONqC%2BH1iOR2WqFnZ4ZcR1gTwZjHIfHoERRIrE6wO7gflFtPN01TWC3flD%2F3kajOhL7UiD4vY3dLNZiipVLr3frzMWyzlUMFV0N2c%2Bqv&X-Amz-Signature=c236b8324e6fce2fb7e5f8d40a9fc0cf6408c10abddabaa92cb21fcbf5cfe55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPZKPP6%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSh0r8wo6MQrpxzyj86nhuoWrv53x0ltOEl%2BpbS3TXxwIgUUKQIIKHg09FHWt8bz%2F1rrneJOnmjK34XsbEy6k%2BcPgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcXTKW55IY722ZpnCrcA2eDCEHy3EbKJdrSApRCdjLDuERWf2WrjozDq%2BxYpVr%2FF%2BC211rLNQ%2BgHPLN96i3BHWmRBeEy5pCpDlxpQWVAY%2F0AaaGmK0aYqLPDLsfBcemyK8as4CDszWXi2W0BHSKCZpmGCcZ8x6Y7PdF1pZLUG8johJs2E1y7AGGRq3t2KVuEEA3bSqXf%2BFKi%2F6fgETz23LX73BSlBPhJzXDrmsDXa4MGOkSpIclHTWjILr0a7r4Uoz0lJzY3GbVcCsS%2B2eGVEiL0yIO9HW%2BYnVaa0eWKcOfjhFmLngnfU14sjF39W808k01OH5hr8tKLvGg2EqsfIqi4sT1GcRBR7LU%2FYImLMlt2xNcsoWGq8vRE2CancY7gD%2F%2BYu6BvccdyYpIZWeisvciNFl1rb3dFITjTD%2FA5QrvdBpwTdy0ER7ZGsyWXg5JIo4UxO9mBeJuuG9TcNfRuruIsNx5gqANVLCMO78bVnHRKxdXKRoMv1HmGywiRFsKmWlk8k10stdSPF9u1LjSJmbdDczA2Y%2B%2FYrp3SPB5Bn8tbHs4pOVAx56I60InHhSrK8T%2BLXqd8GZLwI8J738JFKjz1%2B5KAIIOTUN%2F8a1vxmqFzAm%2Bs2UMCiuZtj6HtajDVQn%2F570R7fZJuxvFMOm8y8oGOqUBEeqLFwfTlcl5mojrenH5jVQqI%2FqZPwM2oYIimH%2Fh6T6hNWDgjXnS8JK4KDLANC262qfd74oo%2B4UduVMrsv%2FUIaeDM5v%2B%2FkYbmygg1H2zcWXa7jU5PamVBONqC%2BH1iOR2WqFnZ4ZcR1gTwZjHIfHoERRIrE6wO7gflFtPN01TWC3flD%2F3kajOhL7UiD4vY3dLNZiipVLr3frzMWyzlUMFV0N2c%2Bqv&X-Amz-Signature=e77e7ea3e7b9d0bf09df1432fa0b44dd99608d64c33c3e02b28e81c9f91a602e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
