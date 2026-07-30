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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQSJMJB%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt3fME7EHoJkN9RbfSFs2Bpt9qC8%2BwH6aEkCLs77odIgIhAIvR9%2BWHLVXf3EbZF%2B3hPptJ7KOo0lNvJXSFijIRWrs1KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJu5DbEqPdnr710NMq3AOfNU3rO97mcxJiCtgnsk6eMEC9%2F9oI5LgJ%2F%2B9u4WyT8JkqRYpr73AfM2JRt2XiDomUykogOVT%2FEA02E%2BojsAEz%2F1lMrAJoiAAwi%2BQWwh2Uzo9X9XGa3Nc5Mtqy%2Fcvzqn30CEJFShJK8qQZDZiz2MwF6Ik47%2Fml1RR8eg6r8zm0wG3xyW1Tp8ejJ3hLBqMQYhHXE7qF%2FZgL%2BrronZjxTfDSwuzkaX9Fr6cRQeeIu%2BpwzFIQISMnlytM3S4%2F1ADNKkEIxZbJbSv3pDI4VrlYsRZH84Ax9VZYG1AvF5NpGpRuo7WYlFa8d%2BpW7EHSy%2F8V%2FVRmWzD1%2Flenug2ZfS%2B6vrJ%2FO39uzN%2FX87MBg5PQfemfzHwypoXqQM%2FD0OvEhTawlqA8Y5bdXAzpllYbT4erIDWdioybSMBCChRhovqpNwzsdIcCMA1KxNZWRHOEikksWier8Wb0mAB9XNcBUHntx3o%2FUXJFq6%2BvIRwjgspEt5FCrrRk08fRaUAe1yu40ZwIQbCHaMLBmCG3D4Xbnko1xovdeha6ov8564%2BatfmP8rcJmFRC4XKDWaD%2FHX%2B8nrpE8eGRJWypiRbkK5N4tAHtSE0dPWaFDvTaXspuDyaR1yCLHCRYd08kBNhT2TFKWzD74arTBjqkAS6q%2BzmMKp6DCSAlyh1xLvFfuBOn8hkAJJY8yp%2FuZ0X3vu9FnuyDEZenTqQ8aWyGa4isHONl3wHwDfqyBgws6lhJFQPEeNQ%2FndOG1rR4oZjhT4o1NoUOeASiDWU7poFSLW%2Fd64qmK6YqeNxu41HaK4otinAcnLvoBgwDga2zIDIdh0CGClgnHytDGNBDTSdgU4XBXmX1DTNq5%2BVG4zr1AuPBTYfL&X-Amz-Signature=37cb9d31328875e39341bd87b3859a73d4e9109a9bb91572cee6a76b1d925689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA55QH2I%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbyC3bkrGWCFpAG%2BQBDZ91%2Bpx6X1kA%2FQNWCcTVhJPLtgIgK7Iad1linxsC0hPiWiq3TKgGkDIyPWwOH3wh8r9HQgIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGI0BWKKCnR949ircA6x2h%2BevcX6RVtKrURaOsZtpl3EnTxKVfskZfSKEHpRlg%2BR7KXmjGvFVovgwjbTu%2FIa%2FCGuNv7uM9fOQaCz4lCMSvGk4UVcknzYcY4WsdhqDTFPHKpSCSlEklyvBpGwM8DgmFfAmeovD6yCDnW9rY8%2B8Elv6mf9ZykrJY5EYwJBKCPiCXoIbP5LV2LJzeLqxdDdjRZS9X50swl%2FhzBj2EEkM4sjBkNCAbyPlBZTEtPmAa7b6IM13euywDPbOt%2FyjFHXHlNYSFwWjb7hRz0gG%2BUa2u1capp8WN6fvb4qSDSn%2FvphKvMHv%2BjN56nTEYsImqChBQfkRy9zUwndzEf4dFAyVl2Ld9XbCXqabT0rXBACUHlyhbnVzirGR%2F23ClaC33Geza1XZjHEAuaXQtcguPeQLmRnZzc%2BqvEI%2BCpa1WHhRFzkctrZpAVVBXD6IKb4keIcpkay2Zcy3tZ5jNDa9%2B0K0WIfgJhhcOUHZwN%2FeycAXYKqEaVideTApHkhXvnlWUjpwgceoOiG1kXEsxTtC%2FoSZM%2B1tgn53SZTCI8M7xyyWDprlu0gmgy%2BWRQYH3unm1NTWO3%2F6UW4yeFpX0uJa%2F%2B7yG6whD2wIEVcb1Q53yD6%2BnbIsiJ0RCKYfVo9QMP3fqtMGOqUBaBs96KJx%2FYiGG0jW0ZcjNgLoxc0AhOh3BfTvVqefIoQ0zisq%2FOAN92sTGb25tfB8veEayWGFWBg3QGbjCwwFBrd8Lva3XFJ6qviBqlB07zqpTqA2%2BW0bcif%2FjDeP6XXREd8HAxZHPhHOZ52W7ahlomEPaA2yFN5r8c76ymVhSU%2BgTlIDi1aQcYlemHZv5NL8O6tDI7qYxCQoQ9e2NdN0aJk7BncP&X-Amz-Signature=b6aff1a76b6be59460035a3aade7a00a2dc61bed672e3f67276156a388564383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA55QH2I%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbyC3bkrGWCFpAG%2BQBDZ91%2Bpx6X1kA%2FQNWCcTVhJPLtgIgK7Iad1linxsC0hPiWiq3TKgGkDIyPWwOH3wh8r9HQgIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGI0BWKKCnR949ircA6x2h%2BevcX6RVtKrURaOsZtpl3EnTxKVfskZfSKEHpRlg%2BR7KXmjGvFVovgwjbTu%2FIa%2FCGuNv7uM9fOQaCz4lCMSvGk4UVcknzYcY4WsdhqDTFPHKpSCSlEklyvBpGwM8DgmFfAmeovD6yCDnW9rY8%2B8Elv6mf9ZykrJY5EYwJBKCPiCXoIbP5LV2LJzeLqxdDdjRZS9X50swl%2FhzBj2EEkM4sjBkNCAbyPlBZTEtPmAa7b6IM13euywDPbOt%2FyjFHXHlNYSFwWjb7hRz0gG%2BUa2u1capp8WN6fvb4qSDSn%2FvphKvMHv%2BjN56nTEYsImqChBQfkRy9zUwndzEf4dFAyVl2Ld9XbCXqabT0rXBACUHlyhbnVzirGR%2F23ClaC33Geza1XZjHEAuaXQtcguPeQLmRnZzc%2BqvEI%2BCpa1WHhRFzkctrZpAVVBXD6IKb4keIcpkay2Zcy3tZ5jNDa9%2B0K0WIfgJhhcOUHZwN%2FeycAXYKqEaVideTApHkhXvnlWUjpwgceoOiG1kXEsxTtC%2FoSZM%2B1tgn53SZTCI8M7xyyWDprlu0gmgy%2BWRQYH3unm1NTWO3%2F6UW4yeFpX0uJa%2F%2B7yG6whD2wIEVcb1Q53yD6%2BnbIsiJ0RCKYfVo9QMP3fqtMGOqUBaBs96KJx%2FYiGG0jW0ZcjNgLoxc0AhOh3BfTvVqefIoQ0zisq%2FOAN92sTGb25tfB8veEayWGFWBg3QGbjCwwFBrd8Lva3XFJ6qviBqlB07zqpTqA2%2BW0bcif%2FjDeP6XXREd8HAxZHPhHOZ52W7ahlomEPaA2yFN5r8c76ymVhSU%2BgTlIDi1aQcYlemHZv5NL8O6tDI7qYxCQoQ9e2NdN0aJk7BncP&X-Amz-Signature=8d55af7dcaf2c35d9c733888c1fd1c0631400a0fbe97f54d22375e3d40fef632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA55QH2I%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbyC3bkrGWCFpAG%2BQBDZ91%2Bpx6X1kA%2FQNWCcTVhJPLtgIgK7Iad1linxsC0hPiWiq3TKgGkDIyPWwOH3wh8r9HQgIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGI0BWKKCnR949ircA6x2h%2BevcX6RVtKrURaOsZtpl3EnTxKVfskZfSKEHpRlg%2BR7KXmjGvFVovgwjbTu%2FIa%2FCGuNv7uM9fOQaCz4lCMSvGk4UVcknzYcY4WsdhqDTFPHKpSCSlEklyvBpGwM8DgmFfAmeovD6yCDnW9rY8%2B8Elv6mf9ZykrJY5EYwJBKCPiCXoIbP5LV2LJzeLqxdDdjRZS9X50swl%2FhzBj2EEkM4sjBkNCAbyPlBZTEtPmAa7b6IM13euywDPbOt%2FyjFHXHlNYSFwWjb7hRz0gG%2BUa2u1capp8WN6fvb4qSDSn%2FvphKvMHv%2BjN56nTEYsImqChBQfkRy9zUwndzEf4dFAyVl2Ld9XbCXqabT0rXBACUHlyhbnVzirGR%2F23ClaC33Geza1XZjHEAuaXQtcguPeQLmRnZzc%2BqvEI%2BCpa1WHhRFzkctrZpAVVBXD6IKb4keIcpkay2Zcy3tZ5jNDa9%2B0K0WIfgJhhcOUHZwN%2FeycAXYKqEaVideTApHkhXvnlWUjpwgceoOiG1kXEsxTtC%2FoSZM%2B1tgn53SZTCI8M7xyyWDprlu0gmgy%2BWRQYH3unm1NTWO3%2F6UW4yeFpX0uJa%2F%2B7yG6whD2wIEVcb1Q53yD6%2BnbIsiJ0RCKYfVo9QMP3fqtMGOqUBaBs96KJx%2FYiGG0jW0ZcjNgLoxc0AhOh3BfTvVqefIoQ0zisq%2FOAN92sTGb25tfB8veEayWGFWBg3QGbjCwwFBrd8Lva3XFJ6qviBqlB07zqpTqA2%2BW0bcif%2FjDeP6XXREd8HAxZHPhHOZ52W7ahlomEPaA2yFN5r8c76ymVhSU%2BgTlIDi1aQcYlemHZv5NL8O6tDI7qYxCQoQ9e2NdN0aJk7BncP&X-Amz-Signature=f01285a702ac3534c79918d0433362ebb9d447796d915a940f8526f2c76abab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA55QH2I%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbyC3bkrGWCFpAG%2BQBDZ91%2Bpx6X1kA%2FQNWCcTVhJPLtgIgK7Iad1linxsC0hPiWiq3TKgGkDIyPWwOH3wh8r9HQgIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGI0BWKKCnR949ircA6x2h%2BevcX6RVtKrURaOsZtpl3EnTxKVfskZfSKEHpRlg%2BR7KXmjGvFVovgwjbTu%2FIa%2FCGuNv7uM9fOQaCz4lCMSvGk4UVcknzYcY4WsdhqDTFPHKpSCSlEklyvBpGwM8DgmFfAmeovD6yCDnW9rY8%2B8Elv6mf9ZykrJY5EYwJBKCPiCXoIbP5LV2LJzeLqxdDdjRZS9X50swl%2FhzBj2EEkM4sjBkNCAbyPlBZTEtPmAa7b6IM13euywDPbOt%2FyjFHXHlNYSFwWjb7hRz0gG%2BUa2u1capp8WN6fvb4qSDSn%2FvphKvMHv%2BjN56nTEYsImqChBQfkRy9zUwndzEf4dFAyVl2Ld9XbCXqabT0rXBACUHlyhbnVzirGR%2F23ClaC33Geza1XZjHEAuaXQtcguPeQLmRnZzc%2BqvEI%2BCpa1WHhRFzkctrZpAVVBXD6IKb4keIcpkay2Zcy3tZ5jNDa9%2B0K0WIfgJhhcOUHZwN%2FeycAXYKqEaVideTApHkhXvnlWUjpwgceoOiG1kXEsxTtC%2FoSZM%2B1tgn53SZTCI8M7xyyWDprlu0gmgy%2BWRQYH3unm1NTWO3%2F6UW4yeFpX0uJa%2F%2B7yG6whD2wIEVcb1Q53yD6%2BnbIsiJ0RCKYfVo9QMP3fqtMGOqUBaBs96KJx%2FYiGG0jW0ZcjNgLoxc0AhOh3BfTvVqefIoQ0zisq%2FOAN92sTGb25tfB8veEayWGFWBg3QGbjCwwFBrd8Lva3XFJ6qviBqlB07zqpTqA2%2BW0bcif%2FjDeP6XXREd8HAxZHPhHOZ52W7ahlomEPaA2yFN5r8c76ymVhSU%2BgTlIDi1aQcYlemHZv5NL8O6tDI7qYxCQoQ9e2NdN0aJk7BncP&X-Amz-Signature=d2ad4226ea8e1eb7c6ac948978652a4a0791f5d89f387343fc72d6ef55bc1f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA55QH2I%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbyC3bkrGWCFpAG%2BQBDZ91%2Bpx6X1kA%2FQNWCcTVhJPLtgIgK7Iad1linxsC0hPiWiq3TKgGkDIyPWwOH3wh8r9HQgIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGI0BWKKCnR949ircA6x2h%2BevcX6RVtKrURaOsZtpl3EnTxKVfskZfSKEHpRlg%2BR7KXmjGvFVovgwjbTu%2FIa%2FCGuNv7uM9fOQaCz4lCMSvGk4UVcknzYcY4WsdhqDTFPHKpSCSlEklyvBpGwM8DgmFfAmeovD6yCDnW9rY8%2B8Elv6mf9ZykrJY5EYwJBKCPiCXoIbP5LV2LJzeLqxdDdjRZS9X50swl%2FhzBj2EEkM4sjBkNCAbyPlBZTEtPmAa7b6IM13euywDPbOt%2FyjFHXHlNYSFwWjb7hRz0gG%2BUa2u1capp8WN6fvb4qSDSn%2FvphKvMHv%2BjN56nTEYsImqChBQfkRy9zUwndzEf4dFAyVl2Ld9XbCXqabT0rXBACUHlyhbnVzirGR%2F23ClaC33Geza1XZjHEAuaXQtcguPeQLmRnZzc%2BqvEI%2BCpa1WHhRFzkctrZpAVVBXD6IKb4keIcpkay2Zcy3tZ5jNDa9%2B0K0WIfgJhhcOUHZwN%2FeycAXYKqEaVideTApHkhXvnlWUjpwgceoOiG1kXEsxTtC%2FoSZM%2B1tgn53SZTCI8M7xyyWDprlu0gmgy%2BWRQYH3unm1NTWO3%2F6UW4yeFpX0uJa%2F%2B7yG6whD2wIEVcb1Q53yD6%2BnbIsiJ0RCKYfVo9QMP3fqtMGOqUBaBs96KJx%2FYiGG0jW0ZcjNgLoxc0AhOh3BfTvVqefIoQ0zisq%2FOAN92sTGb25tfB8veEayWGFWBg3QGbjCwwFBrd8Lva3XFJ6qviBqlB07zqpTqA2%2BW0bcif%2FjDeP6XXREd8HAxZHPhHOZ52W7ahlomEPaA2yFN5r8c76ymVhSU%2BgTlIDi1aQcYlemHZv5NL8O6tDI7qYxCQoQ9e2NdN0aJk7BncP&X-Amz-Signature=3b50ef0ee40a4b31d5fc5a7de9a3eb8bfd13dec4142e87eb1a68c4fb2de26cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA55QH2I%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbyC3bkrGWCFpAG%2BQBDZ91%2Bpx6X1kA%2FQNWCcTVhJPLtgIgK7Iad1linxsC0hPiWiq3TKgGkDIyPWwOH3wh8r9HQgIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGI0BWKKCnR949ircA6x2h%2BevcX6RVtKrURaOsZtpl3EnTxKVfskZfSKEHpRlg%2BR7KXmjGvFVovgwjbTu%2FIa%2FCGuNv7uM9fOQaCz4lCMSvGk4UVcknzYcY4WsdhqDTFPHKpSCSlEklyvBpGwM8DgmFfAmeovD6yCDnW9rY8%2B8Elv6mf9ZykrJY5EYwJBKCPiCXoIbP5LV2LJzeLqxdDdjRZS9X50swl%2FhzBj2EEkM4sjBkNCAbyPlBZTEtPmAa7b6IM13euywDPbOt%2FyjFHXHlNYSFwWjb7hRz0gG%2BUa2u1capp8WN6fvb4qSDSn%2FvphKvMHv%2BjN56nTEYsImqChBQfkRy9zUwndzEf4dFAyVl2Ld9XbCXqabT0rXBACUHlyhbnVzirGR%2F23ClaC33Geza1XZjHEAuaXQtcguPeQLmRnZzc%2BqvEI%2BCpa1WHhRFzkctrZpAVVBXD6IKb4keIcpkay2Zcy3tZ5jNDa9%2B0K0WIfgJhhcOUHZwN%2FeycAXYKqEaVideTApHkhXvnlWUjpwgceoOiG1kXEsxTtC%2FoSZM%2B1tgn53SZTCI8M7xyyWDprlu0gmgy%2BWRQYH3unm1NTWO3%2F6UW4yeFpX0uJa%2F%2B7yG6whD2wIEVcb1Q53yD6%2BnbIsiJ0RCKYfVo9QMP3fqtMGOqUBaBs96KJx%2FYiGG0jW0ZcjNgLoxc0AhOh3BfTvVqefIoQ0zisq%2FOAN92sTGb25tfB8veEayWGFWBg3QGbjCwwFBrd8Lva3XFJ6qviBqlB07zqpTqA2%2BW0bcif%2FjDeP6XXREd8HAxZHPhHOZ52W7ahlomEPaA2yFN5r8c76ymVhSU%2BgTlIDi1aQcYlemHZv5NL8O6tDI7qYxCQoQ9e2NdN0aJk7BncP&X-Amz-Signature=a0ecbe29581eb114aa296c3ee36d9c23830a80300cd4b436d6070aabb2110783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA55QH2I%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbyC3bkrGWCFpAG%2BQBDZ91%2Bpx6X1kA%2FQNWCcTVhJPLtgIgK7Iad1linxsC0hPiWiq3TKgGkDIyPWwOH3wh8r9HQgIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGI0BWKKCnR949ircA6x2h%2BevcX6RVtKrURaOsZtpl3EnTxKVfskZfSKEHpRlg%2BR7KXmjGvFVovgwjbTu%2FIa%2FCGuNv7uM9fOQaCz4lCMSvGk4UVcknzYcY4WsdhqDTFPHKpSCSlEklyvBpGwM8DgmFfAmeovD6yCDnW9rY8%2B8Elv6mf9ZykrJY5EYwJBKCPiCXoIbP5LV2LJzeLqxdDdjRZS9X50swl%2FhzBj2EEkM4sjBkNCAbyPlBZTEtPmAa7b6IM13euywDPbOt%2FyjFHXHlNYSFwWjb7hRz0gG%2BUa2u1capp8WN6fvb4qSDSn%2FvphKvMHv%2BjN56nTEYsImqChBQfkRy9zUwndzEf4dFAyVl2Ld9XbCXqabT0rXBACUHlyhbnVzirGR%2F23ClaC33Geza1XZjHEAuaXQtcguPeQLmRnZzc%2BqvEI%2BCpa1WHhRFzkctrZpAVVBXD6IKb4keIcpkay2Zcy3tZ5jNDa9%2B0K0WIfgJhhcOUHZwN%2FeycAXYKqEaVideTApHkhXvnlWUjpwgceoOiG1kXEsxTtC%2FoSZM%2B1tgn53SZTCI8M7xyyWDprlu0gmgy%2BWRQYH3unm1NTWO3%2F6UW4yeFpX0uJa%2F%2B7yG6whD2wIEVcb1Q53yD6%2BnbIsiJ0RCKYfVo9QMP3fqtMGOqUBaBs96KJx%2FYiGG0jW0ZcjNgLoxc0AhOh3BfTvVqefIoQ0zisq%2FOAN92sTGb25tfB8veEayWGFWBg3QGbjCwwFBrd8Lva3XFJ6qviBqlB07zqpTqA2%2BW0bcif%2FjDeP6XXREd8HAxZHPhHOZ52W7ahlomEPaA2yFN5r8c76ymVhSU%2BgTlIDi1aQcYlemHZv5NL8O6tDI7qYxCQoQ9e2NdN0aJk7BncP&X-Amz-Signature=e08f3afce04ffb694afd37a64018bda76c4e9868448630356abf1edab3231888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA55QH2I%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbyC3bkrGWCFpAG%2BQBDZ91%2Bpx6X1kA%2FQNWCcTVhJPLtgIgK7Iad1linxsC0hPiWiq3TKgGkDIyPWwOH3wh8r9HQgIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGI0BWKKCnR949ircA6x2h%2BevcX6RVtKrURaOsZtpl3EnTxKVfskZfSKEHpRlg%2BR7KXmjGvFVovgwjbTu%2FIa%2FCGuNv7uM9fOQaCz4lCMSvGk4UVcknzYcY4WsdhqDTFPHKpSCSlEklyvBpGwM8DgmFfAmeovD6yCDnW9rY8%2B8Elv6mf9ZykrJY5EYwJBKCPiCXoIbP5LV2LJzeLqxdDdjRZS9X50swl%2FhzBj2EEkM4sjBkNCAbyPlBZTEtPmAa7b6IM13euywDPbOt%2FyjFHXHlNYSFwWjb7hRz0gG%2BUa2u1capp8WN6fvb4qSDSn%2FvphKvMHv%2BjN56nTEYsImqChBQfkRy9zUwndzEf4dFAyVl2Ld9XbCXqabT0rXBACUHlyhbnVzirGR%2F23ClaC33Geza1XZjHEAuaXQtcguPeQLmRnZzc%2BqvEI%2BCpa1WHhRFzkctrZpAVVBXD6IKb4keIcpkay2Zcy3tZ5jNDa9%2B0K0WIfgJhhcOUHZwN%2FeycAXYKqEaVideTApHkhXvnlWUjpwgceoOiG1kXEsxTtC%2FoSZM%2B1tgn53SZTCI8M7xyyWDprlu0gmgy%2BWRQYH3unm1NTWO3%2F6UW4yeFpX0uJa%2F%2B7yG6whD2wIEVcb1Q53yD6%2BnbIsiJ0RCKYfVo9QMP3fqtMGOqUBaBs96KJx%2FYiGG0jW0ZcjNgLoxc0AhOh3BfTvVqefIoQ0zisq%2FOAN92sTGb25tfB8veEayWGFWBg3QGbjCwwFBrd8Lva3XFJ6qviBqlB07zqpTqA2%2BW0bcif%2FjDeP6XXREd8HAxZHPhHOZ52W7ahlomEPaA2yFN5r8c76ymVhSU%2BgTlIDi1aQcYlemHZv5NL8O6tDI7qYxCQoQ9e2NdN0aJk7BncP&X-Amz-Signature=03202183349621d2b536069b925dd64cd9b15f64d94d4ee93ab76fca2ef619fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA55QH2I%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbyC3bkrGWCFpAG%2BQBDZ91%2Bpx6X1kA%2FQNWCcTVhJPLtgIgK7Iad1linxsC0hPiWiq3TKgGkDIyPWwOH3wh8r9HQgIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGI0BWKKCnR949ircA6x2h%2BevcX6RVtKrURaOsZtpl3EnTxKVfskZfSKEHpRlg%2BR7KXmjGvFVovgwjbTu%2FIa%2FCGuNv7uM9fOQaCz4lCMSvGk4UVcknzYcY4WsdhqDTFPHKpSCSlEklyvBpGwM8DgmFfAmeovD6yCDnW9rY8%2B8Elv6mf9ZykrJY5EYwJBKCPiCXoIbP5LV2LJzeLqxdDdjRZS9X50swl%2FhzBj2EEkM4sjBkNCAbyPlBZTEtPmAa7b6IM13euywDPbOt%2FyjFHXHlNYSFwWjb7hRz0gG%2BUa2u1capp8WN6fvb4qSDSn%2FvphKvMHv%2BjN56nTEYsImqChBQfkRy9zUwndzEf4dFAyVl2Ld9XbCXqabT0rXBACUHlyhbnVzirGR%2F23ClaC33Geza1XZjHEAuaXQtcguPeQLmRnZzc%2BqvEI%2BCpa1WHhRFzkctrZpAVVBXD6IKb4keIcpkay2Zcy3tZ5jNDa9%2B0K0WIfgJhhcOUHZwN%2FeycAXYKqEaVideTApHkhXvnlWUjpwgceoOiG1kXEsxTtC%2FoSZM%2B1tgn53SZTCI8M7xyyWDprlu0gmgy%2BWRQYH3unm1NTWO3%2F6UW4yeFpX0uJa%2F%2B7yG6whD2wIEVcb1Q53yD6%2BnbIsiJ0RCKYfVo9QMP3fqtMGOqUBaBs96KJx%2FYiGG0jW0ZcjNgLoxc0AhOh3BfTvVqefIoQ0zisq%2FOAN92sTGb25tfB8veEayWGFWBg3QGbjCwwFBrd8Lva3XFJ6qviBqlB07zqpTqA2%2BW0bcif%2FjDeP6XXREd8HAxZHPhHOZ52W7ahlomEPaA2yFN5r8c76ymVhSU%2BgTlIDi1aQcYlemHZv5NL8O6tDI7qYxCQoQ9e2NdN0aJk7BncP&X-Amz-Signature=c178b3d4abf5b4e8ecc31c52c06fe5b4b9d9ff1ae509108ff6e28f641ae20f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA55QH2I%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbyC3bkrGWCFpAG%2BQBDZ91%2Bpx6X1kA%2FQNWCcTVhJPLtgIgK7Iad1linxsC0hPiWiq3TKgGkDIyPWwOH3wh8r9HQgIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTeGI0BWKKCnR949ircA6x2h%2BevcX6RVtKrURaOsZtpl3EnTxKVfskZfSKEHpRlg%2BR7KXmjGvFVovgwjbTu%2FIa%2FCGuNv7uM9fOQaCz4lCMSvGk4UVcknzYcY4WsdhqDTFPHKpSCSlEklyvBpGwM8DgmFfAmeovD6yCDnW9rY8%2B8Elv6mf9ZykrJY5EYwJBKCPiCXoIbP5LV2LJzeLqxdDdjRZS9X50swl%2FhzBj2EEkM4sjBkNCAbyPlBZTEtPmAa7b6IM13euywDPbOt%2FyjFHXHlNYSFwWjb7hRz0gG%2BUa2u1capp8WN6fvb4qSDSn%2FvphKvMHv%2BjN56nTEYsImqChBQfkRy9zUwndzEf4dFAyVl2Ld9XbCXqabT0rXBACUHlyhbnVzirGR%2F23ClaC33Geza1XZjHEAuaXQtcguPeQLmRnZzc%2BqvEI%2BCpa1WHhRFzkctrZpAVVBXD6IKb4keIcpkay2Zcy3tZ5jNDa9%2B0K0WIfgJhhcOUHZwN%2FeycAXYKqEaVideTApHkhXvnlWUjpwgceoOiG1kXEsxTtC%2FoSZM%2B1tgn53SZTCI8M7xyyWDprlu0gmgy%2BWRQYH3unm1NTWO3%2F6UW4yeFpX0uJa%2F%2B7yG6whD2wIEVcb1Q53yD6%2BnbIsiJ0RCKYfVo9QMP3fqtMGOqUBaBs96KJx%2FYiGG0jW0ZcjNgLoxc0AhOh3BfTvVqefIoQ0zisq%2FOAN92sTGb25tfB8veEayWGFWBg3QGbjCwwFBrd8Lva3XFJ6qviBqlB07zqpTqA2%2BW0bcif%2FjDeP6XXREd8HAxZHPhHOZ52W7ahlomEPaA2yFN5r8c76ymVhSU%2BgTlIDi1aQcYlemHZv5NL8O6tDI7qYxCQoQ9e2NdN0aJk7BncP&X-Amz-Signature=d2ad4226ea8e1eb7c6ac948978652a4a0791f5d89f387343fc72d6ef55bc1f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
