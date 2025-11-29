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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYDYUUNN%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXo%2Bq6iVITX1%2BCOiVLCDfkNSZC%2FxE6UCev5US6XAlf5wIhAOnq3hRLeMDXxfKNmrCKZ92QtwfeVkC64BD%2FVPSXkpFAKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyFNYUDnb1GpYmj4Iq3AMMuM1vNkQwJY8xv7VYp92530dLqVIRTkWxA4nDBNwCvagNMbIpD3czrsrvYnLtHTAO5RrL0MB%2BXy7isk8CdEvqdrw1fQu8cXVyr%2F3MyyxwJiQqWVrNewW6Q7xp%2FXdAE18txswD0ww8sFHkCQmDWXQZjCrewP8MUAsZakgO%2FhJmut5arW%2F6hhhaTx79ZT9AOliSO8ZbfLAcXZ9vhcxN8ldw2XS4keIud9a%2FtT8P9u3DCVWgsalDCuNkkyFqq9kYERs%2F37J2aqUAkkHuOUJm8YG5RulkJrPaMuKBIlsj%2BvtzW1tP3%2FU98vl60Swd6S74YPfxkX1%2F%2FX%2BS5CwUR%2B51p9hdsj17%2BH%2F2KrRkMF1HxBtkxRluAn4xVjfWndJnNW%2B6jdQcWj%2BE7H2ZvEa8Wki34%2FSF%2BbH9OHzkQBPJSAcmIJaRkhkM%2Bp14532vNR3aiuYX4JZoX3FRHRZhNII1%2Bip942FRN%2Fr95geDsOu5zg6sFxwZ7ecG8cwqfKomlF9ofWTPRVxxroiUyP9wnqGauyzyhJd08L6su%2BttjdawG9Wc44TqGp7yPoUf4ujSwpWNVBlTNnFaq3J2tyDDxTojgwv03PlmNdlhHxPUt%2BPETTHowAduA79%2FrWWAe1be7GpEVDDu%2B6fJBjqkAcCpZiYk6E74SiE%2Fuy8gicFLTAUIiEbwgug267Nt1GAuyf09gt%2FehR%2FYKX%2FE1cV1ZYKK2qPiPJ02jMk7cVKtmyrBtaTvIsk0STNxvWTipUFBS5D2IGxKwUOiS%2FS1%2F%2Bwrg7YC1MvvsoDo4%2BLQghI7%2Bo5yXFp1oSxdxZYatHzct8nz9pLH8TKY2UUu0TWEWR5UoH7m%2BXFlW78NnjFhIJuTGwT5UrEB&X-Amz-Signature=a77c33a3f131b9bdf7ec8c9d8109df860dc8a5763c36a2d86b6dbcab63290eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDE55DM%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZMhMAP0f%2BJuCaH8yDVBISZqciYgScpsSca9hILBltowIgbGy4QtiFd3LP8Nzo%2BFDSXvAC2vLHXeWjsD2nnRrkws4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiHhXN5jFIlv4NEcyrcA%2Fk%2FvNBpqHxVPipLQ5lxa4o8KFMdtIU27l1QfqMhqcG05VBWN3RSLvaG7pBLmoO%2B3urpR6%2BhMPznIC9mTfJEr%2Fj0KuEFsFofCxzG9%2BKqOUqSsV%2FCgi%2FjkUObHYFoErHwQVqG0dIeA20r74WxR4LuhnRYzialHvjW4G%2FVrPplHs0ab3eHMPWXSJ893k7G6t9pzGCNCT3y%2FfoFuK0RyimtLaN%2B7tqMgtiXeV8QKmdukZIFJFTLAIiLjYSoSikEYb0QZcK6Ym7QpXn241E1mMJoGdqT91%2B8c5JMwvPruq5%2F%2FkEsWaWohtOn5ZVzODd56QSPgQTcIheW6dSsJb%2BJeKeJzYp9Z6G%2B%2FzP4fyE2jw6Ze7%2BUqhb2RGwHeYrCPPeD0ZS15S9mO98xkMbmSOXQhVJDHrMbipJt%2FsZzvAeSROlSedkoMoC1uwN0T0ROtvzgB%2F%2BdWlFw%2FfknJ0yjNh1vHW8n96iwVy1LJborBjp8qnY9VAoAmD%2F1WUkbFkb%2Bbbiztb68dGm7RBEuHLnMo%2F%2FLGk6LoBShpxCFljMZJThuMODfa3fyqkID%2FdEkERgIImMbtRIjsbamWfmbPl%2FFpWVA46Sgdg7JhmM4d5sOTFaJyqUw%2F80e%2Ffgcvb%2BZzX3qwRDbML74p8kGOqUBWXQHSFbwi5HsqdV%2BwLoXFpCkIeqrv7YHNUyrDRswmqQAMV2OIIenyBJYQMYzNFJVCAlY9A4zsVq8MvY5ba8Sh6RroFrWXeqidWT8cLd16JkkZlCOE4FATK%2Bl6RfH149KRhXFOP4076lZH6G2Wg3aJmk0x95fgOuzXSG1zBT2FNMJDSiu3RCdA18rHgSB%2FIf0cp%2FMAVkicsQHloWFZRmaj9wgvpMX&X-Amz-Signature=3c6d6e5efb0651c965ae6e4557798fb92a130b7358a52e0fb384ac772d724d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDE55DM%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZMhMAP0f%2BJuCaH8yDVBISZqciYgScpsSca9hILBltowIgbGy4QtiFd3LP8Nzo%2BFDSXvAC2vLHXeWjsD2nnRrkws4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiHhXN5jFIlv4NEcyrcA%2Fk%2FvNBpqHxVPipLQ5lxa4o8KFMdtIU27l1QfqMhqcG05VBWN3RSLvaG7pBLmoO%2B3urpR6%2BhMPznIC9mTfJEr%2Fj0KuEFsFofCxzG9%2BKqOUqSsV%2FCgi%2FjkUObHYFoErHwQVqG0dIeA20r74WxR4LuhnRYzialHvjW4G%2FVrPplHs0ab3eHMPWXSJ893k7G6t9pzGCNCT3y%2FfoFuK0RyimtLaN%2B7tqMgtiXeV8QKmdukZIFJFTLAIiLjYSoSikEYb0QZcK6Ym7QpXn241E1mMJoGdqT91%2B8c5JMwvPruq5%2F%2FkEsWaWohtOn5ZVzODd56QSPgQTcIheW6dSsJb%2BJeKeJzYp9Z6G%2B%2FzP4fyE2jw6Ze7%2BUqhb2RGwHeYrCPPeD0ZS15S9mO98xkMbmSOXQhVJDHrMbipJt%2FsZzvAeSROlSedkoMoC1uwN0T0ROtvzgB%2F%2BdWlFw%2FfknJ0yjNh1vHW8n96iwVy1LJborBjp8qnY9VAoAmD%2F1WUkbFkb%2Bbbiztb68dGm7RBEuHLnMo%2F%2FLGk6LoBShpxCFljMZJThuMODfa3fyqkID%2FdEkERgIImMbtRIjsbamWfmbPl%2FFpWVA46Sgdg7JhmM4d5sOTFaJyqUw%2F80e%2Ffgcvb%2BZzX3qwRDbML74p8kGOqUBWXQHSFbwi5HsqdV%2BwLoXFpCkIeqrv7YHNUyrDRswmqQAMV2OIIenyBJYQMYzNFJVCAlY9A4zsVq8MvY5ba8Sh6RroFrWXeqidWT8cLd16JkkZlCOE4FATK%2Bl6RfH149KRhXFOP4076lZH6G2Wg3aJmk0x95fgOuzXSG1zBT2FNMJDSiu3RCdA18rHgSB%2FIf0cp%2FMAVkicsQHloWFZRmaj9wgvpMX&X-Amz-Signature=af231603b18733b92da7582e99ebed02cf4c06aa58f10e981656db8ab747efb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDE55DM%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZMhMAP0f%2BJuCaH8yDVBISZqciYgScpsSca9hILBltowIgbGy4QtiFd3LP8Nzo%2BFDSXvAC2vLHXeWjsD2nnRrkws4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiHhXN5jFIlv4NEcyrcA%2Fk%2FvNBpqHxVPipLQ5lxa4o8KFMdtIU27l1QfqMhqcG05VBWN3RSLvaG7pBLmoO%2B3urpR6%2BhMPznIC9mTfJEr%2Fj0KuEFsFofCxzG9%2BKqOUqSsV%2FCgi%2FjkUObHYFoErHwQVqG0dIeA20r74WxR4LuhnRYzialHvjW4G%2FVrPplHs0ab3eHMPWXSJ893k7G6t9pzGCNCT3y%2FfoFuK0RyimtLaN%2B7tqMgtiXeV8QKmdukZIFJFTLAIiLjYSoSikEYb0QZcK6Ym7QpXn241E1mMJoGdqT91%2B8c5JMwvPruq5%2F%2FkEsWaWohtOn5ZVzODd56QSPgQTcIheW6dSsJb%2BJeKeJzYp9Z6G%2B%2FzP4fyE2jw6Ze7%2BUqhb2RGwHeYrCPPeD0ZS15S9mO98xkMbmSOXQhVJDHrMbipJt%2FsZzvAeSROlSedkoMoC1uwN0T0ROtvzgB%2F%2BdWlFw%2FfknJ0yjNh1vHW8n96iwVy1LJborBjp8qnY9VAoAmD%2F1WUkbFkb%2Bbbiztb68dGm7RBEuHLnMo%2F%2FLGk6LoBShpxCFljMZJThuMODfa3fyqkID%2FdEkERgIImMbtRIjsbamWfmbPl%2FFpWVA46Sgdg7JhmM4d5sOTFaJyqUw%2F80e%2Ffgcvb%2BZzX3qwRDbML74p8kGOqUBWXQHSFbwi5HsqdV%2BwLoXFpCkIeqrv7YHNUyrDRswmqQAMV2OIIenyBJYQMYzNFJVCAlY9A4zsVq8MvY5ba8Sh6RroFrWXeqidWT8cLd16JkkZlCOE4FATK%2Bl6RfH149KRhXFOP4076lZH6G2Wg3aJmk0x95fgOuzXSG1zBT2FNMJDSiu3RCdA18rHgSB%2FIf0cp%2FMAVkicsQHloWFZRmaj9wgvpMX&X-Amz-Signature=9288365a4e1d13a41825f6abf8c125dfeb487accb740fcb0b24d6230137264ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDE55DM%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZMhMAP0f%2BJuCaH8yDVBISZqciYgScpsSca9hILBltowIgbGy4QtiFd3LP8Nzo%2BFDSXvAC2vLHXeWjsD2nnRrkws4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiHhXN5jFIlv4NEcyrcA%2Fk%2FvNBpqHxVPipLQ5lxa4o8KFMdtIU27l1QfqMhqcG05VBWN3RSLvaG7pBLmoO%2B3urpR6%2BhMPznIC9mTfJEr%2Fj0KuEFsFofCxzG9%2BKqOUqSsV%2FCgi%2FjkUObHYFoErHwQVqG0dIeA20r74WxR4LuhnRYzialHvjW4G%2FVrPplHs0ab3eHMPWXSJ893k7G6t9pzGCNCT3y%2FfoFuK0RyimtLaN%2B7tqMgtiXeV8QKmdukZIFJFTLAIiLjYSoSikEYb0QZcK6Ym7QpXn241E1mMJoGdqT91%2B8c5JMwvPruq5%2F%2FkEsWaWohtOn5ZVzODd56QSPgQTcIheW6dSsJb%2BJeKeJzYp9Z6G%2B%2FzP4fyE2jw6Ze7%2BUqhb2RGwHeYrCPPeD0ZS15S9mO98xkMbmSOXQhVJDHrMbipJt%2FsZzvAeSROlSedkoMoC1uwN0T0ROtvzgB%2F%2BdWlFw%2FfknJ0yjNh1vHW8n96iwVy1LJborBjp8qnY9VAoAmD%2F1WUkbFkb%2Bbbiztb68dGm7RBEuHLnMo%2F%2FLGk6LoBShpxCFljMZJThuMODfa3fyqkID%2FdEkERgIImMbtRIjsbamWfmbPl%2FFpWVA46Sgdg7JhmM4d5sOTFaJyqUw%2F80e%2Ffgcvb%2BZzX3qwRDbML74p8kGOqUBWXQHSFbwi5HsqdV%2BwLoXFpCkIeqrv7YHNUyrDRswmqQAMV2OIIenyBJYQMYzNFJVCAlY9A4zsVq8MvY5ba8Sh6RroFrWXeqidWT8cLd16JkkZlCOE4FATK%2Bl6RfH149KRhXFOP4076lZH6G2Wg3aJmk0x95fgOuzXSG1zBT2FNMJDSiu3RCdA18rHgSB%2FIf0cp%2FMAVkicsQHloWFZRmaj9wgvpMX&X-Amz-Signature=a43adf5ceaf30ff787fedade58dbb484362a5119aa33d0889a9fe92ee5a693b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDE55DM%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZMhMAP0f%2BJuCaH8yDVBISZqciYgScpsSca9hILBltowIgbGy4QtiFd3LP8Nzo%2BFDSXvAC2vLHXeWjsD2nnRrkws4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiHhXN5jFIlv4NEcyrcA%2Fk%2FvNBpqHxVPipLQ5lxa4o8KFMdtIU27l1QfqMhqcG05VBWN3RSLvaG7pBLmoO%2B3urpR6%2BhMPznIC9mTfJEr%2Fj0KuEFsFofCxzG9%2BKqOUqSsV%2FCgi%2FjkUObHYFoErHwQVqG0dIeA20r74WxR4LuhnRYzialHvjW4G%2FVrPplHs0ab3eHMPWXSJ893k7G6t9pzGCNCT3y%2FfoFuK0RyimtLaN%2B7tqMgtiXeV8QKmdukZIFJFTLAIiLjYSoSikEYb0QZcK6Ym7QpXn241E1mMJoGdqT91%2B8c5JMwvPruq5%2F%2FkEsWaWohtOn5ZVzODd56QSPgQTcIheW6dSsJb%2BJeKeJzYp9Z6G%2B%2FzP4fyE2jw6Ze7%2BUqhb2RGwHeYrCPPeD0ZS15S9mO98xkMbmSOXQhVJDHrMbipJt%2FsZzvAeSROlSedkoMoC1uwN0T0ROtvzgB%2F%2BdWlFw%2FfknJ0yjNh1vHW8n96iwVy1LJborBjp8qnY9VAoAmD%2F1WUkbFkb%2Bbbiztb68dGm7RBEuHLnMo%2F%2FLGk6LoBShpxCFljMZJThuMODfa3fyqkID%2FdEkERgIImMbtRIjsbamWfmbPl%2FFpWVA46Sgdg7JhmM4d5sOTFaJyqUw%2F80e%2Ffgcvb%2BZzX3qwRDbML74p8kGOqUBWXQHSFbwi5HsqdV%2BwLoXFpCkIeqrv7YHNUyrDRswmqQAMV2OIIenyBJYQMYzNFJVCAlY9A4zsVq8MvY5ba8Sh6RroFrWXeqidWT8cLd16JkkZlCOE4FATK%2Bl6RfH149KRhXFOP4076lZH6G2Wg3aJmk0x95fgOuzXSG1zBT2FNMJDSiu3RCdA18rHgSB%2FIf0cp%2FMAVkicsQHloWFZRmaj9wgvpMX&X-Amz-Signature=a342a5e62b7f3358b0b5e899896a578829511f81e3093ca2966de4dc974458bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDE55DM%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZMhMAP0f%2BJuCaH8yDVBISZqciYgScpsSca9hILBltowIgbGy4QtiFd3LP8Nzo%2BFDSXvAC2vLHXeWjsD2nnRrkws4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiHhXN5jFIlv4NEcyrcA%2Fk%2FvNBpqHxVPipLQ5lxa4o8KFMdtIU27l1QfqMhqcG05VBWN3RSLvaG7pBLmoO%2B3urpR6%2BhMPznIC9mTfJEr%2Fj0KuEFsFofCxzG9%2BKqOUqSsV%2FCgi%2FjkUObHYFoErHwQVqG0dIeA20r74WxR4LuhnRYzialHvjW4G%2FVrPplHs0ab3eHMPWXSJ893k7G6t9pzGCNCT3y%2FfoFuK0RyimtLaN%2B7tqMgtiXeV8QKmdukZIFJFTLAIiLjYSoSikEYb0QZcK6Ym7QpXn241E1mMJoGdqT91%2B8c5JMwvPruq5%2F%2FkEsWaWohtOn5ZVzODd56QSPgQTcIheW6dSsJb%2BJeKeJzYp9Z6G%2B%2FzP4fyE2jw6Ze7%2BUqhb2RGwHeYrCPPeD0ZS15S9mO98xkMbmSOXQhVJDHrMbipJt%2FsZzvAeSROlSedkoMoC1uwN0T0ROtvzgB%2F%2BdWlFw%2FfknJ0yjNh1vHW8n96iwVy1LJborBjp8qnY9VAoAmD%2F1WUkbFkb%2Bbbiztb68dGm7RBEuHLnMo%2F%2FLGk6LoBShpxCFljMZJThuMODfa3fyqkID%2FdEkERgIImMbtRIjsbamWfmbPl%2FFpWVA46Sgdg7JhmM4d5sOTFaJyqUw%2F80e%2Ffgcvb%2BZzX3qwRDbML74p8kGOqUBWXQHSFbwi5HsqdV%2BwLoXFpCkIeqrv7YHNUyrDRswmqQAMV2OIIenyBJYQMYzNFJVCAlY9A4zsVq8MvY5ba8Sh6RroFrWXeqidWT8cLd16JkkZlCOE4FATK%2Bl6RfH149KRhXFOP4076lZH6G2Wg3aJmk0x95fgOuzXSG1zBT2FNMJDSiu3RCdA18rHgSB%2FIf0cp%2FMAVkicsQHloWFZRmaj9wgvpMX&X-Amz-Signature=3fdaae98afce2ed4a11d4144b4047280146a93c4d5762dc577520fa99e35ddbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDE55DM%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZMhMAP0f%2BJuCaH8yDVBISZqciYgScpsSca9hILBltowIgbGy4QtiFd3LP8Nzo%2BFDSXvAC2vLHXeWjsD2nnRrkws4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiHhXN5jFIlv4NEcyrcA%2Fk%2FvNBpqHxVPipLQ5lxa4o8KFMdtIU27l1QfqMhqcG05VBWN3RSLvaG7pBLmoO%2B3urpR6%2BhMPznIC9mTfJEr%2Fj0KuEFsFofCxzG9%2BKqOUqSsV%2FCgi%2FjkUObHYFoErHwQVqG0dIeA20r74WxR4LuhnRYzialHvjW4G%2FVrPplHs0ab3eHMPWXSJ893k7G6t9pzGCNCT3y%2FfoFuK0RyimtLaN%2B7tqMgtiXeV8QKmdukZIFJFTLAIiLjYSoSikEYb0QZcK6Ym7QpXn241E1mMJoGdqT91%2B8c5JMwvPruq5%2F%2FkEsWaWohtOn5ZVzODd56QSPgQTcIheW6dSsJb%2BJeKeJzYp9Z6G%2B%2FzP4fyE2jw6Ze7%2BUqhb2RGwHeYrCPPeD0ZS15S9mO98xkMbmSOXQhVJDHrMbipJt%2FsZzvAeSROlSedkoMoC1uwN0T0ROtvzgB%2F%2BdWlFw%2FfknJ0yjNh1vHW8n96iwVy1LJborBjp8qnY9VAoAmD%2F1WUkbFkb%2Bbbiztb68dGm7RBEuHLnMo%2F%2FLGk6LoBShpxCFljMZJThuMODfa3fyqkID%2FdEkERgIImMbtRIjsbamWfmbPl%2FFpWVA46Sgdg7JhmM4d5sOTFaJyqUw%2F80e%2Ffgcvb%2BZzX3qwRDbML74p8kGOqUBWXQHSFbwi5HsqdV%2BwLoXFpCkIeqrv7YHNUyrDRswmqQAMV2OIIenyBJYQMYzNFJVCAlY9A4zsVq8MvY5ba8Sh6RroFrWXeqidWT8cLd16JkkZlCOE4FATK%2Bl6RfH149KRhXFOP4076lZH6G2Wg3aJmk0x95fgOuzXSG1zBT2FNMJDSiu3RCdA18rHgSB%2FIf0cp%2FMAVkicsQHloWFZRmaj9wgvpMX&X-Amz-Signature=1bc90a23381b59717b989b7bb6f5b7b3238731a612f7bb0f1a66140a0a149f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDE55DM%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZMhMAP0f%2BJuCaH8yDVBISZqciYgScpsSca9hILBltowIgbGy4QtiFd3LP8Nzo%2BFDSXvAC2vLHXeWjsD2nnRrkws4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiHhXN5jFIlv4NEcyrcA%2Fk%2FvNBpqHxVPipLQ5lxa4o8KFMdtIU27l1QfqMhqcG05VBWN3RSLvaG7pBLmoO%2B3urpR6%2BhMPznIC9mTfJEr%2Fj0KuEFsFofCxzG9%2BKqOUqSsV%2FCgi%2FjkUObHYFoErHwQVqG0dIeA20r74WxR4LuhnRYzialHvjW4G%2FVrPplHs0ab3eHMPWXSJ893k7G6t9pzGCNCT3y%2FfoFuK0RyimtLaN%2B7tqMgtiXeV8QKmdukZIFJFTLAIiLjYSoSikEYb0QZcK6Ym7QpXn241E1mMJoGdqT91%2B8c5JMwvPruq5%2F%2FkEsWaWohtOn5ZVzODd56QSPgQTcIheW6dSsJb%2BJeKeJzYp9Z6G%2B%2FzP4fyE2jw6Ze7%2BUqhb2RGwHeYrCPPeD0ZS15S9mO98xkMbmSOXQhVJDHrMbipJt%2FsZzvAeSROlSedkoMoC1uwN0T0ROtvzgB%2F%2BdWlFw%2FfknJ0yjNh1vHW8n96iwVy1LJborBjp8qnY9VAoAmD%2F1WUkbFkb%2Bbbiztb68dGm7RBEuHLnMo%2F%2FLGk6LoBShpxCFljMZJThuMODfa3fyqkID%2FdEkERgIImMbtRIjsbamWfmbPl%2FFpWVA46Sgdg7JhmM4d5sOTFaJyqUw%2F80e%2Ffgcvb%2BZzX3qwRDbML74p8kGOqUBWXQHSFbwi5HsqdV%2BwLoXFpCkIeqrv7YHNUyrDRswmqQAMV2OIIenyBJYQMYzNFJVCAlY9A4zsVq8MvY5ba8Sh6RroFrWXeqidWT8cLd16JkkZlCOE4FATK%2Bl6RfH149KRhXFOP4076lZH6G2Wg3aJmk0x95fgOuzXSG1zBT2FNMJDSiu3RCdA18rHgSB%2FIf0cp%2FMAVkicsQHloWFZRmaj9wgvpMX&X-Amz-Signature=8072b8f5a85a42cc262babcb0c082438fc5279dfefd64e1b910d904a490f4bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDE55DM%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZMhMAP0f%2BJuCaH8yDVBISZqciYgScpsSca9hILBltowIgbGy4QtiFd3LP8Nzo%2BFDSXvAC2vLHXeWjsD2nnRrkws4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiHhXN5jFIlv4NEcyrcA%2Fk%2FvNBpqHxVPipLQ5lxa4o8KFMdtIU27l1QfqMhqcG05VBWN3RSLvaG7pBLmoO%2B3urpR6%2BhMPznIC9mTfJEr%2Fj0KuEFsFofCxzG9%2BKqOUqSsV%2FCgi%2FjkUObHYFoErHwQVqG0dIeA20r74WxR4LuhnRYzialHvjW4G%2FVrPplHs0ab3eHMPWXSJ893k7G6t9pzGCNCT3y%2FfoFuK0RyimtLaN%2B7tqMgtiXeV8QKmdukZIFJFTLAIiLjYSoSikEYb0QZcK6Ym7QpXn241E1mMJoGdqT91%2B8c5JMwvPruq5%2F%2FkEsWaWohtOn5ZVzODd56QSPgQTcIheW6dSsJb%2BJeKeJzYp9Z6G%2B%2FzP4fyE2jw6Ze7%2BUqhb2RGwHeYrCPPeD0ZS15S9mO98xkMbmSOXQhVJDHrMbipJt%2FsZzvAeSROlSedkoMoC1uwN0T0ROtvzgB%2F%2BdWlFw%2FfknJ0yjNh1vHW8n96iwVy1LJborBjp8qnY9VAoAmD%2F1WUkbFkb%2Bbbiztb68dGm7RBEuHLnMo%2F%2FLGk6LoBShpxCFljMZJThuMODfa3fyqkID%2FdEkERgIImMbtRIjsbamWfmbPl%2FFpWVA46Sgdg7JhmM4d5sOTFaJyqUw%2F80e%2Ffgcvb%2BZzX3qwRDbML74p8kGOqUBWXQHSFbwi5HsqdV%2BwLoXFpCkIeqrv7YHNUyrDRswmqQAMV2OIIenyBJYQMYzNFJVCAlY9A4zsVq8MvY5ba8Sh6RroFrWXeqidWT8cLd16JkkZlCOE4FATK%2Bl6RfH149KRhXFOP4076lZH6G2Wg3aJmk0x95fgOuzXSG1zBT2FNMJDSiu3RCdA18rHgSB%2FIf0cp%2FMAVkicsQHloWFZRmaj9wgvpMX&X-Amz-Signature=13577a2bd69891c390a861e9746a5023e5f6374e4d83793509d80d9127be0f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDE55DM%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZMhMAP0f%2BJuCaH8yDVBISZqciYgScpsSca9hILBltowIgbGy4QtiFd3LP8Nzo%2BFDSXvAC2vLHXeWjsD2nnRrkws4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiHhXN5jFIlv4NEcyrcA%2Fk%2FvNBpqHxVPipLQ5lxa4o8KFMdtIU27l1QfqMhqcG05VBWN3RSLvaG7pBLmoO%2B3urpR6%2BhMPznIC9mTfJEr%2Fj0KuEFsFofCxzG9%2BKqOUqSsV%2FCgi%2FjkUObHYFoErHwQVqG0dIeA20r74WxR4LuhnRYzialHvjW4G%2FVrPplHs0ab3eHMPWXSJ893k7G6t9pzGCNCT3y%2FfoFuK0RyimtLaN%2B7tqMgtiXeV8QKmdukZIFJFTLAIiLjYSoSikEYb0QZcK6Ym7QpXn241E1mMJoGdqT91%2B8c5JMwvPruq5%2F%2FkEsWaWohtOn5ZVzODd56QSPgQTcIheW6dSsJb%2BJeKeJzYp9Z6G%2B%2FzP4fyE2jw6Ze7%2BUqhb2RGwHeYrCPPeD0ZS15S9mO98xkMbmSOXQhVJDHrMbipJt%2FsZzvAeSROlSedkoMoC1uwN0T0ROtvzgB%2F%2BdWlFw%2FfknJ0yjNh1vHW8n96iwVy1LJborBjp8qnY9VAoAmD%2F1WUkbFkb%2Bbbiztb68dGm7RBEuHLnMo%2F%2FLGk6LoBShpxCFljMZJThuMODfa3fyqkID%2FdEkERgIImMbtRIjsbamWfmbPl%2FFpWVA46Sgdg7JhmM4d5sOTFaJyqUw%2F80e%2Ffgcvb%2BZzX3qwRDbML74p8kGOqUBWXQHSFbwi5HsqdV%2BwLoXFpCkIeqrv7YHNUyrDRswmqQAMV2OIIenyBJYQMYzNFJVCAlY9A4zsVq8MvY5ba8Sh6RroFrWXeqidWT8cLd16JkkZlCOE4FATK%2Bl6RfH149KRhXFOP4076lZH6G2Wg3aJmk0x95fgOuzXSG1zBT2FNMJDSiu3RCdA18rHgSB%2FIf0cp%2FMAVkicsQHloWFZRmaj9wgvpMX&X-Amz-Signature=a43adf5ceaf30ff787fedade58dbb484362a5119aa33d0889a9fe92ee5a693b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
