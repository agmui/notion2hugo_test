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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTINNST5%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGQFwGR1K68g90GLEH9UYU6%2B1MRhMgxXXKSb3OUARJygAiEAzoTp45q5zAhl%2Fe%2BHdH61ZduklSICh1xFz4%2BGhhfWwxcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDSxvrPuPcUs%2FUmbbircA0RgL%2FABQ1QdNmNPrKLYK4zFjk1iX7wF7fJ8bhhUIcbMWSHI%2FY7aGrb3vJiZBu40CMUPIMlkA499MCHoAJ%2FLrRi6YGYTt4HQE1Rc1F1WN%2BIT%2BeQjlofoWEbyeqYq1%2F7dq0VD0ITBMaftP5mgGxhDRbUxDigvVUh%2B%2Bs%2F7KY%2BtCcntvlwjeWyVdow4fVLIAaO7LqSKbm1G7JTML319eM6My5iMuoXh96%2BI4Ou%2B4xRmfSEjA%2FRbPQ7nYwzKQUevcMRDozhTtRymSxl2SMxC3J%2BG9AFWtqr5uCsVH4Lx5w0PT6BZQ5b6U%2Bvv3kDpGwrBk5eEQnUeVNLu1CF9fyE3FGYhtyBezL%2BqoVlYtmSx8Ppby3QB7Ylh15WvnPahoTHoadIQ9ibHwUcws6wgzaI6xEhzp6rF34fSmJaGnLkZwWEp%2FjYLwyn%2F2YF9esRCDWdWW15aN8IT5kayW4u2m8Hbi2CZvXxB8GBdDXoXjfe8Z9GwKlXsCeI%2BUM5hJ3MLlWxEuP1QqoR2vozDGZ6Zc5GsWnQYf19rHhN4VOSOKr4GtktnixbLveb3D33M9stl%2BlplIsDxMNJpGUzYs%2BhW9zYH0twahDOQDsJscDGcJXqVU6IJazbLQVJNMRq91PnHWAOYMKn%2FoMsGOqUBSLOjuqkCkI7ig%2FOcLIYDL8eOep4x4ZTtyS4Nm1V0vagAr%2Bi98KI4vKcV8a1VB7lIyfgLNAB4u79QkC7p6Sodog27RJr0YaJ6KhO%2FrQq4qZzH4K%2FxZavju9zKrcPqeK3sekYHS3sXtz5Dw2Y1zBTLqyNsyS3KyLCkgDnKNNRrW1XsOG63HEBzR3A7%2F2x7m%2FdcNG2QU5EEiV6v8%2BjVCCt%2FvrwGmdX8&X-Amz-Signature=77d6c3359883f7a507e25d43340e4646fe42cfc2d34ed04d76a7765dae1ba117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4TJNCK%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDowzKKuPDRDgUvg0PnuHSfOmYO9oCcgYUMAgpuvQ1aJQIgOEpOxHV8P5qMbIfj7k2wyxSZuFPSCKfnnaeVfFRBsJ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBtfQVGa%2BvoSLqtKRircA%2Bsvxv%2BsuUuzy4jvmi%2BShNwmn86q7qCVUnDhrwvP6B6kcE7tVSYCFjJaulRufs9g4fzJNrPbsLRoXyitGCfkqx%2F16kNgTLpSOr9J0HU087N%2FUpN81Ad0xJj43Y9%2FYF%2FaZBEKcE3DhQe4J5tJiG2%2Fb0yIq4QeACeu9yEeYtvBjPNBO5z3GSq3MfIr9E%2B%2BQgr0rQ4Y7aH0DvOm%2BtRIEj3ed2oSWVhpJd0O7NkAb0nW%2FF66l9H343c9T58ZukgkP40zYs3NDO8XIlhf5rM8iYkJz0eP8NcoDAPVB%2FyK%2FlYAVv06hdwRYs0ERRhFrgrRL5J2SDSlwtNH%2BvK6vABXkd6Bekulvi3bqS7zUjFDqEntE4kmllNJjaXhECNdl0HMJFuRp0%2Bmm9L%2BrUA6JiptI6AlDL2vXxUkz8o1doW2egj4odG%2BGNOwBMFbshi6M1phXh5vwdwFEQ%2BOfH29nSOkFg5FO6WDiGFSX4QXE8quVqdxIC5l2zJ1lzE2BuUEIfs%2BDLZk0UOpU8Vfk%2BYAQx46ywDwWK6Rl6Okt1ygIDNryagRX6mNrfAhXlVrPevyuMtySe3gP5boq6X%2Bga8CldvaHLz%2BTHkUceRY%2FA8hyflruJBXXDYS7Rj0Muur%2BZqVj%2B33MIb%2FoMsGOqUBZXZbRNwiWP3btMk88CK4j%2BJLWoiSOEYhR72v1CLlPSVKEsGU5DqdGwwb7oqHfHsNV6UKHXv%2FzhIwUedIGUyNgmE%2Bl%2FT2NJJnS2cGVXyanzdyX3foWNZ8dY9HffjoYJzGEzvBTiCZ2yA6jtd560iQpzCCC5vD9sCLyItfdJjcDFMF4V%2BE%2FfKJjKMzy6miYQ%2Fwd4WfUAPHA249Qcl6dx4Nh4%2B%2B%2B3dS&X-Amz-Signature=ddd9980d05a86d399cc9690693eab306951acc624f81e6663e875419b187fdca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4TJNCK%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDowzKKuPDRDgUvg0PnuHSfOmYO9oCcgYUMAgpuvQ1aJQIgOEpOxHV8P5qMbIfj7k2wyxSZuFPSCKfnnaeVfFRBsJ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBtfQVGa%2BvoSLqtKRircA%2Bsvxv%2BsuUuzy4jvmi%2BShNwmn86q7qCVUnDhrwvP6B6kcE7tVSYCFjJaulRufs9g4fzJNrPbsLRoXyitGCfkqx%2F16kNgTLpSOr9J0HU087N%2FUpN81Ad0xJj43Y9%2FYF%2FaZBEKcE3DhQe4J5tJiG2%2Fb0yIq4QeACeu9yEeYtvBjPNBO5z3GSq3MfIr9E%2B%2BQgr0rQ4Y7aH0DvOm%2BtRIEj3ed2oSWVhpJd0O7NkAb0nW%2FF66l9H343c9T58ZukgkP40zYs3NDO8XIlhf5rM8iYkJz0eP8NcoDAPVB%2FyK%2FlYAVv06hdwRYs0ERRhFrgrRL5J2SDSlwtNH%2BvK6vABXkd6Bekulvi3bqS7zUjFDqEntE4kmllNJjaXhECNdl0HMJFuRp0%2Bmm9L%2BrUA6JiptI6AlDL2vXxUkz8o1doW2egj4odG%2BGNOwBMFbshi6M1phXh5vwdwFEQ%2BOfH29nSOkFg5FO6WDiGFSX4QXE8quVqdxIC5l2zJ1lzE2BuUEIfs%2BDLZk0UOpU8Vfk%2BYAQx46ywDwWK6Rl6Okt1ygIDNryagRX6mNrfAhXlVrPevyuMtySe3gP5boq6X%2Bga8CldvaHLz%2BTHkUceRY%2FA8hyflruJBXXDYS7Rj0Muur%2BZqVj%2B33MIb%2FoMsGOqUBZXZbRNwiWP3btMk88CK4j%2BJLWoiSOEYhR72v1CLlPSVKEsGU5DqdGwwb7oqHfHsNV6UKHXv%2FzhIwUedIGUyNgmE%2Bl%2FT2NJJnS2cGVXyanzdyX3foWNZ8dY9HffjoYJzGEzvBTiCZ2yA6jtd560iQpzCCC5vD9sCLyItfdJjcDFMF4V%2BE%2FfKJjKMzy6miYQ%2Fwd4WfUAPHA249Qcl6dx4Nh4%2B%2B%2B3dS&X-Amz-Signature=8e7619bdc3bf2631ceeaa592dabb5f6bbf4d2242dc29ab835a2961adaf32da76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4TJNCK%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDowzKKuPDRDgUvg0PnuHSfOmYO9oCcgYUMAgpuvQ1aJQIgOEpOxHV8P5qMbIfj7k2wyxSZuFPSCKfnnaeVfFRBsJ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBtfQVGa%2BvoSLqtKRircA%2Bsvxv%2BsuUuzy4jvmi%2BShNwmn86q7qCVUnDhrwvP6B6kcE7tVSYCFjJaulRufs9g4fzJNrPbsLRoXyitGCfkqx%2F16kNgTLpSOr9J0HU087N%2FUpN81Ad0xJj43Y9%2FYF%2FaZBEKcE3DhQe4J5tJiG2%2Fb0yIq4QeACeu9yEeYtvBjPNBO5z3GSq3MfIr9E%2B%2BQgr0rQ4Y7aH0DvOm%2BtRIEj3ed2oSWVhpJd0O7NkAb0nW%2FF66l9H343c9T58ZukgkP40zYs3NDO8XIlhf5rM8iYkJz0eP8NcoDAPVB%2FyK%2FlYAVv06hdwRYs0ERRhFrgrRL5J2SDSlwtNH%2BvK6vABXkd6Bekulvi3bqS7zUjFDqEntE4kmllNJjaXhECNdl0HMJFuRp0%2Bmm9L%2BrUA6JiptI6AlDL2vXxUkz8o1doW2egj4odG%2BGNOwBMFbshi6M1phXh5vwdwFEQ%2BOfH29nSOkFg5FO6WDiGFSX4QXE8quVqdxIC5l2zJ1lzE2BuUEIfs%2BDLZk0UOpU8Vfk%2BYAQx46ywDwWK6Rl6Okt1ygIDNryagRX6mNrfAhXlVrPevyuMtySe3gP5boq6X%2Bga8CldvaHLz%2BTHkUceRY%2FA8hyflruJBXXDYS7Rj0Muur%2BZqVj%2B33MIb%2FoMsGOqUBZXZbRNwiWP3btMk88CK4j%2BJLWoiSOEYhR72v1CLlPSVKEsGU5DqdGwwb7oqHfHsNV6UKHXv%2FzhIwUedIGUyNgmE%2Bl%2FT2NJJnS2cGVXyanzdyX3foWNZ8dY9HffjoYJzGEzvBTiCZ2yA6jtd560iQpzCCC5vD9sCLyItfdJjcDFMF4V%2BE%2FfKJjKMzy6miYQ%2Fwd4WfUAPHA249Qcl6dx4Nh4%2B%2B%2B3dS&X-Amz-Signature=ddfd92d1d8752bf3e31feca0d7d71d38cbcf6a782bcd5b3905836979864aa535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4TJNCK%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDowzKKuPDRDgUvg0PnuHSfOmYO9oCcgYUMAgpuvQ1aJQIgOEpOxHV8P5qMbIfj7k2wyxSZuFPSCKfnnaeVfFRBsJ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBtfQVGa%2BvoSLqtKRircA%2Bsvxv%2BsuUuzy4jvmi%2BShNwmn86q7qCVUnDhrwvP6B6kcE7tVSYCFjJaulRufs9g4fzJNrPbsLRoXyitGCfkqx%2F16kNgTLpSOr9J0HU087N%2FUpN81Ad0xJj43Y9%2FYF%2FaZBEKcE3DhQe4J5tJiG2%2Fb0yIq4QeACeu9yEeYtvBjPNBO5z3GSq3MfIr9E%2B%2BQgr0rQ4Y7aH0DvOm%2BtRIEj3ed2oSWVhpJd0O7NkAb0nW%2FF66l9H343c9T58ZukgkP40zYs3NDO8XIlhf5rM8iYkJz0eP8NcoDAPVB%2FyK%2FlYAVv06hdwRYs0ERRhFrgrRL5J2SDSlwtNH%2BvK6vABXkd6Bekulvi3bqS7zUjFDqEntE4kmllNJjaXhECNdl0HMJFuRp0%2Bmm9L%2BrUA6JiptI6AlDL2vXxUkz8o1doW2egj4odG%2BGNOwBMFbshi6M1phXh5vwdwFEQ%2BOfH29nSOkFg5FO6WDiGFSX4QXE8quVqdxIC5l2zJ1lzE2BuUEIfs%2BDLZk0UOpU8Vfk%2BYAQx46ywDwWK6Rl6Okt1ygIDNryagRX6mNrfAhXlVrPevyuMtySe3gP5boq6X%2Bga8CldvaHLz%2BTHkUceRY%2FA8hyflruJBXXDYS7Rj0Muur%2BZqVj%2B33MIb%2FoMsGOqUBZXZbRNwiWP3btMk88CK4j%2BJLWoiSOEYhR72v1CLlPSVKEsGU5DqdGwwb7oqHfHsNV6UKHXv%2FzhIwUedIGUyNgmE%2Bl%2FT2NJJnS2cGVXyanzdyX3foWNZ8dY9HffjoYJzGEzvBTiCZ2yA6jtd560iQpzCCC5vD9sCLyItfdJjcDFMF4V%2BE%2FfKJjKMzy6miYQ%2Fwd4WfUAPHA249Qcl6dx4Nh4%2B%2B%2B3dS&X-Amz-Signature=14bbc5bb432579125ec022ffd3eccdd9efc3de39fc2290b4afa4eb1581d9fc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4TJNCK%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDowzKKuPDRDgUvg0PnuHSfOmYO9oCcgYUMAgpuvQ1aJQIgOEpOxHV8P5qMbIfj7k2wyxSZuFPSCKfnnaeVfFRBsJ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBtfQVGa%2BvoSLqtKRircA%2Bsvxv%2BsuUuzy4jvmi%2BShNwmn86q7qCVUnDhrwvP6B6kcE7tVSYCFjJaulRufs9g4fzJNrPbsLRoXyitGCfkqx%2F16kNgTLpSOr9J0HU087N%2FUpN81Ad0xJj43Y9%2FYF%2FaZBEKcE3DhQe4J5tJiG2%2Fb0yIq4QeACeu9yEeYtvBjPNBO5z3GSq3MfIr9E%2B%2BQgr0rQ4Y7aH0DvOm%2BtRIEj3ed2oSWVhpJd0O7NkAb0nW%2FF66l9H343c9T58ZukgkP40zYs3NDO8XIlhf5rM8iYkJz0eP8NcoDAPVB%2FyK%2FlYAVv06hdwRYs0ERRhFrgrRL5J2SDSlwtNH%2BvK6vABXkd6Bekulvi3bqS7zUjFDqEntE4kmllNJjaXhECNdl0HMJFuRp0%2Bmm9L%2BrUA6JiptI6AlDL2vXxUkz8o1doW2egj4odG%2BGNOwBMFbshi6M1phXh5vwdwFEQ%2BOfH29nSOkFg5FO6WDiGFSX4QXE8quVqdxIC5l2zJ1lzE2BuUEIfs%2BDLZk0UOpU8Vfk%2BYAQx46ywDwWK6Rl6Okt1ygIDNryagRX6mNrfAhXlVrPevyuMtySe3gP5boq6X%2Bga8CldvaHLz%2BTHkUceRY%2FA8hyflruJBXXDYS7Rj0Muur%2BZqVj%2B33MIb%2FoMsGOqUBZXZbRNwiWP3btMk88CK4j%2BJLWoiSOEYhR72v1CLlPSVKEsGU5DqdGwwb7oqHfHsNV6UKHXv%2FzhIwUedIGUyNgmE%2Bl%2FT2NJJnS2cGVXyanzdyX3foWNZ8dY9HffjoYJzGEzvBTiCZ2yA6jtd560iQpzCCC5vD9sCLyItfdJjcDFMF4V%2BE%2FfKJjKMzy6miYQ%2Fwd4WfUAPHA249Qcl6dx4Nh4%2B%2B%2B3dS&X-Amz-Signature=661d2961ae00fbcef497977cd80a5c791e9bdfcd76b820e50df428041b47218d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4TJNCK%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDowzKKuPDRDgUvg0PnuHSfOmYO9oCcgYUMAgpuvQ1aJQIgOEpOxHV8P5qMbIfj7k2wyxSZuFPSCKfnnaeVfFRBsJ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBtfQVGa%2BvoSLqtKRircA%2Bsvxv%2BsuUuzy4jvmi%2BShNwmn86q7qCVUnDhrwvP6B6kcE7tVSYCFjJaulRufs9g4fzJNrPbsLRoXyitGCfkqx%2F16kNgTLpSOr9J0HU087N%2FUpN81Ad0xJj43Y9%2FYF%2FaZBEKcE3DhQe4J5tJiG2%2Fb0yIq4QeACeu9yEeYtvBjPNBO5z3GSq3MfIr9E%2B%2BQgr0rQ4Y7aH0DvOm%2BtRIEj3ed2oSWVhpJd0O7NkAb0nW%2FF66l9H343c9T58ZukgkP40zYs3NDO8XIlhf5rM8iYkJz0eP8NcoDAPVB%2FyK%2FlYAVv06hdwRYs0ERRhFrgrRL5J2SDSlwtNH%2BvK6vABXkd6Bekulvi3bqS7zUjFDqEntE4kmllNJjaXhECNdl0HMJFuRp0%2Bmm9L%2BrUA6JiptI6AlDL2vXxUkz8o1doW2egj4odG%2BGNOwBMFbshi6M1phXh5vwdwFEQ%2BOfH29nSOkFg5FO6WDiGFSX4QXE8quVqdxIC5l2zJ1lzE2BuUEIfs%2BDLZk0UOpU8Vfk%2BYAQx46ywDwWK6Rl6Okt1ygIDNryagRX6mNrfAhXlVrPevyuMtySe3gP5boq6X%2Bga8CldvaHLz%2BTHkUceRY%2FA8hyflruJBXXDYS7Rj0Muur%2BZqVj%2B33MIb%2FoMsGOqUBZXZbRNwiWP3btMk88CK4j%2BJLWoiSOEYhR72v1CLlPSVKEsGU5DqdGwwb7oqHfHsNV6UKHXv%2FzhIwUedIGUyNgmE%2Bl%2FT2NJJnS2cGVXyanzdyX3foWNZ8dY9HffjoYJzGEzvBTiCZ2yA6jtd560iQpzCCC5vD9sCLyItfdJjcDFMF4V%2BE%2FfKJjKMzy6miYQ%2Fwd4WfUAPHA249Qcl6dx4Nh4%2B%2B%2B3dS&X-Amz-Signature=16f2b192f5d995b2b002327b9e8ff13bbb4d909eab5bd28f0877bfc818b0d642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4TJNCK%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDowzKKuPDRDgUvg0PnuHSfOmYO9oCcgYUMAgpuvQ1aJQIgOEpOxHV8P5qMbIfj7k2wyxSZuFPSCKfnnaeVfFRBsJ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBtfQVGa%2BvoSLqtKRircA%2Bsvxv%2BsuUuzy4jvmi%2BShNwmn86q7qCVUnDhrwvP6B6kcE7tVSYCFjJaulRufs9g4fzJNrPbsLRoXyitGCfkqx%2F16kNgTLpSOr9J0HU087N%2FUpN81Ad0xJj43Y9%2FYF%2FaZBEKcE3DhQe4J5tJiG2%2Fb0yIq4QeACeu9yEeYtvBjPNBO5z3GSq3MfIr9E%2B%2BQgr0rQ4Y7aH0DvOm%2BtRIEj3ed2oSWVhpJd0O7NkAb0nW%2FF66l9H343c9T58ZukgkP40zYs3NDO8XIlhf5rM8iYkJz0eP8NcoDAPVB%2FyK%2FlYAVv06hdwRYs0ERRhFrgrRL5J2SDSlwtNH%2BvK6vABXkd6Bekulvi3bqS7zUjFDqEntE4kmllNJjaXhECNdl0HMJFuRp0%2Bmm9L%2BrUA6JiptI6AlDL2vXxUkz8o1doW2egj4odG%2BGNOwBMFbshi6M1phXh5vwdwFEQ%2BOfH29nSOkFg5FO6WDiGFSX4QXE8quVqdxIC5l2zJ1lzE2BuUEIfs%2BDLZk0UOpU8Vfk%2BYAQx46ywDwWK6Rl6Okt1ygIDNryagRX6mNrfAhXlVrPevyuMtySe3gP5boq6X%2Bga8CldvaHLz%2BTHkUceRY%2FA8hyflruJBXXDYS7Rj0Muur%2BZqVj%2B33MIb%2FoMsGOqUBZXZbRNwiWP3btMk88CK4j%2BJLWoiSOEYhR72v1CLlPSVKEsGU5DqdGwwb7oqHfHsNV6UKHXv%2FzhIwUedIGUyNgmE%2Bl%2FT2NJJnS2cGVXyanzdyX3foWNZ8dY9HffjoYJzGEzvBTiCZ2yA6jtd560iQpzCCC5vD9sCLyItfdJjcDFMF4V%2BE%2FfKJjKMzy6miYQ%2Fwd4WfUAPHA249Qcl6dx4Nh4%2B%2B%2B3dS&X-Amz-Signature=f5e3e78f8ade8ad62a58aeef9ae49f568204838e9f12106c1df8ae16c2768409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4TJNCK%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDowzKKuPDRDgUvg0PnuHSfOmYO9oCcgYUMAgpuvQ1aJQIgOEpOxHV8P5qMbIfj7k2wyxSZuFPSCKfnnaeVfFRBsJ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBtfQVGa%2BvoSLqtKRircA%2Bsvxv%2BsuUuzy4jvmi%2BShNwmn86q7qCVUnDhrwvP6B6kcE7tVSYCFjJaulRufs9g4fzJNrPbsLRoXyitGCfkqx%2F16kNgTLpSOr9J0HU087N%2FUpN81Ad0xJj43Y9%2FYF%2FaZBEKcE3DhQe4J5tJiG2%2Fb0yIq4QeACeu9yEeYtvBjPNBO5z3GSq3MfIr9E%2B%2BQgr0rQ4Y7aH0DvOm%2BtRIEj3ed2oSWVhpJd0O7NkAb0nW%2FF66l9H343c9T58ZukgkP40zYs3NDO8XIlhf5rM8iYkJz0eP8NcoDAPVB%2FyK%2FlYAVv06hdwRYs0ERRhFrgrRL5J2SDSlwtNH%2BvK6vABXkd6Bekulvi3bqS7zUjFDqEntE4kmllNJjaXhECNdl0HMJFuRp0%2Bmm9L%2BrUA6JiptI6AlDL2vXxUkz8o1doW2egj4odG%2BGNOwBMFbshi6M1phXh5vwdwFEQ%2BOfH29nSOkFg5FO6WDiGFSX4QXE8quVqdxIC5l2zJ1lzE2BuUEIfs%2BDLZk0UOpU8Vfk%2BYAQx46ywDwWK6Rl6Okt1ygIDNryagRX6mNrfAhXlVrPevyuMtySe3gP5boq6X%2Bga8CldvaHLz%2BTHkUceRY%2FA8hyflruJBXXDYS7Rj0Muur%2BZqVj%2B33MIb%2FoMsGOqUBZXZbRNwiWP3btMk88CK4j%2BJLWoiSOEYhR72v1CLlPSVKEsGU5DqdGwwb7oqHfHsNV6UKHXv%2FzhIwUedIGUyNgmE%2Bl%2FT2NJJnS2cGVXyanzdyX3foWNZ8dY9HffjoYJzGEzvBTiCZ2yA6jtd560iQpzCCC5vD9sCLyItfdJjcDFMF4V%2BE%2FfKJjKMzy6miYQ%2Fwd4WfUAPHA249Qcl6dx4Nh4%2B%2B%2B3dS&X-Amz-Signature=2e80bec3458e19988c4212a6c98832d514437b8ac8dcdbdcc888459d237f9652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4TJNCK%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDowzKKuPDRDgUvg0PnuHSfOmYO9oCcgYUMAgpuvQ1aJQIgOEpOxHV8P5qMbIfj7k2wyxSZuFPSCKfnnaeVfFRBsJ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBtfQVGa%2BvoSLqtKRircA%2Bsvxv%2BsuUuzy4jvmi%2BShNwmn86q7qCVUnDhrwvP6B6kcE7tVSYCFjJaulRufs9g4fzJNrPbsLRoXyitGCfkqx%2F16kNgTLpSOr9J0HU087N%2FUpN81Ad0xJj43Y9%2FYF%2FaZBEKcE3DhQe4J5tJiG2%2Fb0yIq4QeACeu9yEeYtvBjPNBO5z3GSq3MfIr9E%2B%2BQgr0rQ4Y7aH0DvOm%2BtRIEj3ed2oSWVhpJd0O7NkAb0nW%2FF66l9H343c9T58ZukgkP40zYs3NDO8XIlhf5rM8iYkJz0eP8NcoDAPVB%2FyK%2FlYAVv06hdwRYs0ERRhFrgrRL5J2SDSlwtNH%2BvK6vABXkd6Bekulvi3bqS7zUjFDqEntE4kmllNJjaXhECNdl0HMJFuRp0%2Bmm9L%2BrUA6JiptI6AlDL2vXxUkz8o1doW2egj4odG%2BGNOwBMFbshi6M1phXh5vwdwFEQ%2BOfH29nSOkFg5FO6WDiGFSX4QXE8quVqdxIC5l2zJ1lzE2BuUEIfs%2BDLZk0UOpU8Vfk%2BYAQx46ywDwWK6Rl6Okt1ygIDNryagRX6mNrfAhXlVrPevyuMtySe3gP5boq6X%2Bga8CldvaHLz%2BTHkUceRY%2FA8hyflruJBXXDYS7Rj0Muur%2BZqVj%2B33MIb%2FoMsGOqUBZXZbRNwiWP3btMk88CK4j%2BJLWoiSOEYhR72v1CLlPSVKEsGU5DqdGwwb7oqHfHsNV6UKHXv%2FzhIwUedIGUyNgmE%2Bl%2FT2NJJnS2cGVXyanzdyX3foWNZ8dY9HffjoYJzGEzvBTiCZ2yA6jtd560iQpzCCC5vD9sCLyItfdJjcDFMF4V%2BE%2FfKJjKMzy6miYQ%2Fwd4WfUAPHA249Qcl6dx4Nh4%2B%2B%2B3dS&X-Amz-Signature=cf59413aefd8f072bc13efb7d28776aeff511351a59ea3838e1b077f1a42232e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4TJNCK%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDowzKKuPDRDgUvg0PnuHSfOmYO9oCcgYUMAgpuvQ1aJQIgOEpOxHV8P5qMbIfj7k2wyxSZuFPSCKfnnaeVfFRBsJ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBtfQVGa%2BvoSLqtKRircA%2Bsvxv%2BsuUuzy4jvmi%2BShNwmn86q7qCVUnDhrwvP6B6kcE7tVSYCFjJaulRufs9g4fzJNrPbsLRoXyitGCfkqx%2F16kNgTLpSOr9J0HU087N%2FUpN81Ad0xJj43Y9%2FYF%2FaZBEKcE3DhQe4J5tJiG2%2Fb0yIq4QeACeu9yEeYtvBjPNBO5z3GSq3MfIr9E%2B%2BQgr0rQ4Y7aH0DvOm%2BtRIEj3ed2oSWVhpJd0O7NkAb0nW%2FF66l9H343c9T58ZukgkP40zYs3NDO8XIlhf5rM8iYkJz0eP8NcoDAPVB%2FyK%2FlYAVv06hdwRYs0ERRhFrgrRL5J2SDSlwtNH%2BvK6vABXkd6Bekulvi3bqS7zUjFDqEntE4kmllNJjaXhECNdl0HMJFuRp0%2Bmm9L%2BrUA6JiptI6AlDL2vXxUkz8o1doW2egj4odG%2BGNOwBMFbshi6M1phXh5vwdwFEQ%2BOfH29nSOkFg5FO6WDiGFSX4QXE8quVqdxIC5l2zJ1lzE2BuUEIfs%2BDLZk0UOpU8Vfk%2BYAQx46ywDwWK6Rl6Okt1ygIDNryagRX6mNrfAhXlVrPevyuMtySe3gP5boq6X%2Bga8CldvaHLz%2BTHkUceRY%2FA8hyflruJBXXDYS7Rj0Muur%2BZqVj%2B33MIb%2FoMsGOqUBZXZbRNwiWP3btMk88CK4j%2BJLWoiSOEYhR72v1CLlPSVKEsGU5DqdGwwb7oqHfHsNV6UKHXv%2FzhIwUedIGUyNgmE%2Bl%2FT2NJJnS2cGVXyanzdyX3foWNZ8dY9HffjoYJzGEzvBTiCZ2yA6jtd560iQpzCCC5vD9sCLyItfdJjcDFMF4V%2BE%2FfKJjKMzy6miYQ%2Fwd4WfUAPHA249Qcl6dx4Nh4%2B%2B%2B3dS&X-Amz-Signature=14bbc5bb432579125ec022ffd3eccdd9efc3de39fc2290b4afa4eb1581d9fc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
