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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4AMK4P6%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCID%2BqvyaSUEo18K60jCR6EFbFdFAxspFp5J1nUACp7qX5AiEAysPdaXP25DjXbfZmiySJCERU4qAQ3iwDLZ7lzI8RXmEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInvMmZOZ2lVmReKOyrcA5mwTZ63eVMloyGidaTMDVkRV3lJxItpV3%2BsRrU7nssn4ijYbr4D78wTgl1TbaPrQthsKa7sbPmSmrIsTDlgS%2BempOwwVJoxP6z0j2VX01lOTkLt3SP%2B6v1bsl1b6mlnpfSLeL01gWU6azhQhEnqL8z%2B1mJwCItZaTHvPa%2FxJDXPnVl3lyoF7bf5JyMU7oncV9cCrAeXVCUDIXqGS3aKF7ajWZUEk5yGsrDlY%2FzN%2B60ucN%2Bqc9aiNv7DN2PqprU%2BICVkVfyMscahSYNRrKLov87M67FguvmipZTKwvrDL3zdfMJAamm%2FoUmdhq7mwbH7IUROG2O8M2qVXaVkHSBNiHNtfHrAgMXHT87tYenox5XnD5Udq3QtyyKisje2jVN6lsvzrAtvwumVH8fBTK0eDNvTvIVtD3OvSUOzZvjYcExoEtE7eikIQNB5zC3wpGjK2UwZvtIChqTVJPLqvaM13e6pQ2zAoI1IvRUMajlifaoQ7EqiAPdV%2BCAxHAwQGN892K7ioLKfFJej8IGHJ4KVUWzxAxZh96E%2FBuwYFq%2F4ZhzD1bStnC3YJmFaspO9h8AKeScNn4nJt2brTmptVWTTWJq8Gk9Np%2B2jcaVhD1pPehqg%2BZ595emZsp1wbfgaMPe06MkGOqUBhe1SpL4ZpDS%2FZ3Q%2F0ADYXyqqc6zSr%2BAy8PE1k9FhWjyT9vbOAwToKzhztzurYc8WJAgaVZg1gcvHuF7OQZX4nV8FfZf%2Bf0q1W1xHVF1%2B0LfCliF3cRTrMjTGgi5whbbUFfy3%2FV7%2FLKK%2FmebdAN5OTkRs2TRt89bPv2igvEJ2YmY8aSd4laknGA0dhnSTsh4pMqVGlfudjNACvnVYRQBtYeVcONAh&X-Amz-Signature=b8d92113369345a411b932fd449ad7ebbabd58ae1a511a25ed76834d88703725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJB2KIHG%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDMmPFnlU1xKt0FIwyjiLuzKttbPEi1gBjtqk7gZSy3yAIgCpUBfjvMOe2JH0JYld%2BN%2F%2Bns14yHTram2P67wRJhmUkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5E9v%2Fsi96YjywYByrcA2yV1buS78uLj%2FOEEps1byFX47yp84Zbir2hyRXjWjZVNFtyL9lny2C%2Bi1CnxY6rxUrWJ069tPK7J52QXnbnwajhmDVuLeW4MvzJzit76fBW9v6W7htWPR6AsKiD8QgilZjuNIxMtJcW%2BVSjBUF4Js%2BDnNVwx1ZoA1pjYZXH6u8kQsbBEBfvdMX6O7PZ66Q47sibUJ7Rez48JaF%2BQ0EX%2FgN6UOzpBSYwuEmGrldox6KVw2VsUgQ9eLjHbkdau8c8o55yZUGqFO9yZSI%2BzB1fOOs6gZtVbRyQrfGnmstNkaNIGkHDEgxCVGLJex7VZZDyK0cw9y1Y7p3FZSyIO02QX30Fs7LCvRIyEz7dHFGIpHzr%2FyFSw7%2FKb14x7T8k7nsVmB%2FIuQMBnj%2FXgVCHv2U7YVlSFFminPo9GivLOsnUiGJroEdRXW%2FxnczEtS6bAFa4AViwxCGxHrka87vBKOpoRIxL3tZ8EAd3P6BZuW%2FAHJdJv3mFCvSL7Y9B7lRb7ymFACRKd4AJbf468MbTSHv9p7ZVoVTBbTg7%2B9VZvkYzlASpxmVMOWfsVdGGqHbECtNtK7Qk7xC60jB%2FDJCALz7FCFkTL1tuCUirgA3KY7OjjUPAJqV3OR3sci455qGDMIe26MkGOqUBav9lNP8ifB3dBChPRFeKW7w9tgWTWI8dYAjzakrR%2B8oLGpADSFJ6rh2nBkEAnHhsuy%2BjQ4v4j51IDscEB6YBsDSnzQmf1YVBh9TZyZym0QBEGa6%2FJajEtZvkkntXGURlVjo2JLMiWyZ4pLAvEiM%2F6G2YDt%2BcOn0GEzOQSApPr81apFZwAMIw%2BBSIBlavgI3aZ%2FXUozE9XOqd7ZNxMWzOzouK4IM9&X-Amz-Signature=5cee96b0102efc25c283e9255e772f3c7040b936ebfe19ef0c67235a9dc81e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJB2KIHG%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDMmPFnlU1xKt0FIwyjiLuzKttbPEi1gBjtqk7gZSy3yAIgCpUBfjvMOe2JH0JYld%2BN%2F%2Bns14yHTram2P67wRJhmUkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5E9v%2Fsi96YjywYByrcA2yV1buS78uLj%2FOEEps1byFX47yp84Zbir2hyRXjWjZVNFtyL9lny2C%2Bi1CnxY6rxUrWJ069tPK7J52QXnbnwajhmDVuLeW4MvzJzit76fBW9v6W7htWPR6AsKiD8QgilZjuNIxMtJcW%2BVSjBUF4Js%2BDnNVwx1ZoA1pjYZXH6u8kQsbBEBfvdMX6O7PZ66Q47sibUJ7Rez48JaF%2BQ0EX%2FgN6UOzpBSYwuEmGrldox6KVw2VsUgQ9eLjHbkdau8c8o55yZUGqFO9yZSI%2BzB1fOOs6gZtVbRyQrfGnmstNkaNIGkHDEgxCVGLJex7VZZDyK0cw9y1Y7p3FZSyIO02QX30Fs7LCvRIyEz7dHFGIpHzr%2FyFSw7%2FKb14x7T8k7nsVmB%2FIuQMBnj%2FXgVCHv2U7YVlSFFminPo9GivLOsnUiGJroEdRXW%2FxnczEtS6bAFa4AViwxCGxHrka87vBKOpoRIxL3tZ8EAd3P6BZuW%2FAHJdJv3mFCvSL7Y9B7lRb7ymFACRKd4AJbf468MbTSHv9p7ZVoVTBbTg7%2B9VZvkYzlASpxmVMOWfsVdGGqHbECtNtK7Qk7xC60jB%2FDJCALz7FCFkTL1tuCUirgA3KY7OjjUPAJqV3OR3sci455qGDMIe26MkGOqUBav9lNP8ifB3dBChPRFeKW7w9tgWTWI8dYAjzakrR%2B8oLGpADSFJ6rh2nBkEAnHhsuy%2BjQ4v4j51IDscEB6YBsDSnzQmf1YVBh9TZyZym0QBEGa6%2FJajEtZvkkntXGURlVjo2JLMiWyZ4pLAvEiM%2F6G2YDt%2BcOn0GEzOQSApPr81apFZwAMIw%2BBSIBlavgI3aZ%2FXUozE9XOqd7ZNxMWzOzouK4IM9&X-Amz-Signature=dcf362a22f85a87d72dbe8674d5ba0b061da96c5f46ed6892eb6e7093c1fac8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJB2KIHG%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDMmPFnlU1xKt0FIwyjiLuzKttbPEi1gBjtqk7gZSy3yAIgCpUBfjvMOe2JH0JYld%2BN%2F%2Bns14yHTram2P67wRJhmUkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5E9v%2Fsi96YjywYByrcA2yV1buS78uLj%2FOEEps1byFX47yp84Zbir2hyRXjWjZVNFtyL9lny2C%2Bi1CnxY6rxUrWJ069tPK7J52QXnbnwajhmDVuLeW4MvzJzit76fBW9v6W7htWPR6AsKiD8QgilZjuNIxMtJcW%2BVSjBUF4Js%2BDnNVwx1ZoA1pjYZXH6u8kQsbBEBfvdMX6O7PZ66Q47sibUJ7Rez48JaF%2BQ0EX%2FgN6UOzpBSYwuEmGrldox6KVw2VsUgQ9eLjHbkdau8c8o55yZUGqFO9yZSI%2BzB1fOOs6gZtVbRyQrfGnmstNkaNIGkHDEgxCVGLJex7VZZDyK0cw9y1Y7p3FZSyIO02QX30Fs7LCvRIyEz7dHFGIpHzr%2FyFSw7%2FKb14x7T8k7nsVmB%2FIuQMBnj%2FXgVCHv2U7YVlSFFminPo9GivLOsnUiGJroEdRXW%2FxnczEtS6bAFa4AViwxCGxHrka87vBKOpoRIxL3tZ8EAd3P6BZuW%2FAHJdJv3mFCvSL7Y9B7lRb7ymFACRKd4AJbf468MbTSHv9p7ZVoVTBbTg7%2B9VZvkYzlASpxmVMOWfsVdGGqHbECtNtK7Qk7xC60jB%2FDJCALz7FCFkTL1tuCUirgA3KY7OjjUPAJqV3OR3sci455qGDMIe26MkGOqUBav9lNP8ifB3dBChPRFeKW7w9tgWTWI8dYAjzakrR%2B8oLGpADSFJ6rh2nBkEAnHhsuy%2BjQ4v4j51IDscEB6YBsDSnzQmf1YVBh9TZyZym0QBEGa6%2FJajEtZvkkntXGURlVjo2JLMiWyZ4pLAvEiM%2F6G2YDt%2BcOn0GEzOQSApPr81apFZwAMIw%2BBSIBlavgI3aZ%2FXUozE9XOqd7ZNxMWzOzouK4IM9&X-Amz-Signature=988235def2aec9ca51b827f9dc15f5dda580f0f217be2dace039885af96ada5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJB2KIHG%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDMmPFnlU1xKt0FIwyjiLuzKttbPEi1gBjtqk7gZSy3yAIgCpUBfjvMOe2JH0JYld%2BN%2F%2Bns14yHTram2P67wRJhmUkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5E9v%2Fsi96YjywYByrcA2yV1buS78uLj%2FOEEps1byFX47yp84Zbir2hyRXjWjZVNFtyL9lny2C%2Bi1CnxY6rxUrWJ069tPK7J52QXnbnwajhmDVuLeW4MvzJzit76fBW9v6W7htWPR6AsKiD8QgilZjuNIxMtJcW%2BVSjBUF4Js%2BDnNVwx1ZoA1pjYZXH6u8kQsbBEBfvdMX6O7PZ66Q47sibUJ7Rez48JaF%2BQ0EX%2FgN6UOzpBSYwuEmGrldox6KVw2VsUgQ9eLjHbkdau8c8o55yZUGqFO9yZSI%2BzB1fOOs6gZtVbRyQrfGnmstNkaNIGkHDEgxCVGLJex7VZZDyK0cw9y1Y7p3FZSyIO02QX30Fs7LCvRIyEz7dHFGIpHzr%2FyFSw7%2FKb14x7T8k7nsVmB%2FIuQMBnj%2FXgVCHv2U7YVlSFFminPo9GivLOsnUiGJroEdRXW%2FxnczEtS6bAFa4AViwxCGxHrka87vBKOpoRIxL3tZ8EAd3P6BZuW%2FAHJdJv3mFCvSL7Y9B7lRb7ymFACRKd4AJbf468MbTSHv9p7ZVoVTBbTg7%2B9VZvkYzlASpxmVMOWfsVdGGqHbECtNtK7Qk7xC60jB%2FDJCALz7FCFkTL1tuCUirgA3KY7OjjUPAJqV3OR3sci455qGDMIe26MkGOqUBav9lNP8ifB3dBChPRFeKW7w9tgWTWI8dYAjzakrR%2B8oLGpADSFJ6rh2nBkEAnHhsuy%2BjQ4v4j51IDscEB6YBsDSnzQmf1YVBh9TZyZym0QBEGa6%2FJajEtZvkkntXGURlVjo2JLMiWyZ4pLAvEiM%2F6G2YDt%2BcOn0GEzOQSApPr81apFZwAMIw%2BBSIBlavgI3aZ%2FXUozE9XOqd7ZNxMWzOzouK4IM9&X-Amz-Signature=7c0d7b92b200f876c3e4a3bf6c28703d57922ebd9eb7569aed1b445e351cf6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJB2KIHG%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDMmPFnlU1xKt0FIwyjiLuzKttbPEi1gBjtqk7gZSy3yAIgCpUBfjvMOe2JH0JYld%2BN%2F%2Bns14yHTram2P67wRJhmUkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5E9v%2Fsi96YjywYByrcA2yV1buS78uLj%2FOEEps1byFX47yp84Zbir2hyRXjWjZVNFtyL9lny2C%2Bi1CnxY6rxUrWJ069tPK7J52QXnbnwajhmDVuLeW4MvzJzit76fBW9v6W7htWPR6AsKiD8QgilZjuNIxMtJcW%2BVSjBUF4Js%2BDnNVwx1ZoA1pjYZXH6u8kQsbBEBfvdMX6O7PZ66Q47sibUJ7Rez48JaF%2BQ0EX%2FgN6UOzpBSYwuEmGrldox6KVw2VsUgQ9eLjHbkdau8c8o55yZUGqFO9yZSI%2BzB1fOOs6gZtVbRyQrfGnmstNkaNIGkHDEgxCVGLJex7VZZDyK0cw9y1Y7p3FZSyIO02QX30Fs7LCvRIyEz7dHFGIpHzr%2FyFSw7%2FKb14x7T8k7nsVmB%2FIuQMBnj%2FXgVCHv2U7YVlSFFminPo9GivLOsnUiGJroEdRXW%2FxnczEtS6bAFa4AViwxCGxHrka87vBKOpoRIxL3tZ8EAd3P6BZuW%2FAHJdJv3mFCvSL7Y9B7lRb7ymFACRKd4AJbf468MbTSHv9p7ZVoVTBbTg7%2B9VZvkYzlASpxmVMOWfsVdGGqHbECtNtK7Qk7xC60jB%2FDJCALz7FCFkTL1tuCUirgA3KY7OjjUPAJqV3OR3sci455qGDMIe26MkGOqUBav9lNP8ifB3dBChPRFeKW7w9tgWTWI8dYAjzakrR%2B8oLGpADSFJ6rh2nBkEAnHhsuy%2BjQ4v4j51IDscEB6YBsDSnzQmf1YVBh9TZyZym0QBEGa6%2FJajEtZvkkntXGURlVjo2JLMiWyZ4pLAvEiM%2F6G2YDt%2BcOn0GEzOQSApPr81apFZwAMIw%2BBSIBlavgI3aZ%2FXUozE9XOqd7ZNxMWzOzouK4IM9&X-Amz-Signature=bc72de00c8daf908d2ccb36b907a077e3a35654cc3f5aac42706ca886be9fa27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJB2KIHG%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDMmPFnlU1xKt0FIwyjiLuzKttbPEi1gBjtqk7gZSy3yAIgCpUBfjvMOe2JH0JYld%2BN%2F%2Bns14yHTram2P67wRJhmUkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5E9v%2Fsi96YjywYByrcA2yV1buS78uLj%2FOEEps1byFX47yp84Zbir2hyRXjWjZVNFtyL9lny2C%2Bi1CnxY6rxUrWJ069tPK7J52QXnbnwajhmDVuLeW4MvzJzit76fBW9v6W7htWPR6AsKiD8QgilZjuNIxMtJcW%2BVSjBUF4Js%2BDnNVwx1ZoA1pjYZXH6u8kQsbBEBfvdMX6O7PZ66Q47sibUJ7Rez48JaF%2BQ0EX%2FgN6UOzpBSYwuEmGrldox6KVw2VsUgQ9eLjHbkdau8c8o55yZUGqFO9yZSI%2BzB1fOOs6gZtVbRyQrfGnmstNkaNIGkHDEgxCVGLJex7VZZDyK0cw9y1Y7p3FZSyIO02QX30Fs7LCvRIyEz7dHFGIpHzr%2FyFSw7%2FKb14x7T8k7nsVmB%2FIuQMBnj%2FXgVCHv2U7YVlSFFminPo9GivLOsnUiGJroEdRXW%2FxnczEtS6bAFa4AViwxCGxHrka87vBKOpoRIxL3tZ8EAd3P6BZuW%2FAHJdJv3mFCvSL7Y9B7lRb7ymFACRKd4AJbf468MbTSHv9p7ZVoVTBbTg7%2B9VZvkYzlASpxmVMOWfsVdGGqHbECtNtK7Qk7xC60jB%2FDJCALz7FCFkTL1tuCUirgA3KY7OjjUPAJqV3OR3sci455qGDMIe26MkGOqUBav9lNP8ifB3dBChPRFeKW7w9tgWTWI8dYAjzakrR%2B8oLGpADSFJ6rh2nBkEAnHhsuy%2BjQ4v4j51IDscEB6YBsDSnzQmf1YVBh9TZyZym0QBEGa6%2FJajEtZvkkntXGURlVjo2JLMiWyZ4pLAvEiM%2F6G2YDt%2BcOn0GEzOQSApPr81apFZwAMIw%2BBSIBlavgI3aZ%2FXUozE9XOqd7ZNxMWzOzouK4IM9&X-Amz-Signature=c3256409f7b09bf05dd04b6fa1824cef8740600eb999b01330916e9aab35dd76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJB2KIHG%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDMmPFnlU1xKt0FIwyjiLuzKttbPEi1gBjtqk7gZSy3yAIgCpUBfjvMOe2JH0JYld%2BN%2F%2Bns14yHTram2P67wRJhmUkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5E9v%2Fsi96YjywYByrcA2yV1buS78uLj%2FOEEps1byFX47yp84Zbir2hyRXjWjZVNFtyL9lny2C%2Bi1CnxY6rxUrWJ069tPK7J52QXnbnwajhmDVuLeW4MvzJzit76fBW9v6W7htWPR6AsKiD8QgilZjuNIxMtJcW%2BVSjBUF4Js%2BDnNVwx1ZoA1pjYZXH6u8kQsbBEBfvdMX6O7PZ66Q47sibUJ7Rez48JaF%2BQ0EX%2FgN6UOzpBSYwuEmGrldox6KVw2VsUgQ9eLjHbkdau8c8o55yZUGqFO9yZSI%2BzB1fOOs6gZtVbRyQrfGnmstNkaNIGkHDEgxCVGLJex7VZZDyK0cw9y1Y7p3FZSyIO02QX30Fs7LCvRIyEz7dHFGIpHzr%2FyFSw7%2FKb14x7T8k7nsVmB%2FIuQMBnj%2FXgVCHv2U7YVlSFFminPo9GivLOsnUiGJroEdRXW%2FxnczEtS6bAFa4AViwxCGxHrka87vBKOpoRIxL3tZ8EAd3P6BZuW%2FAHJdJv3mFCvSL7Y9B7lRb7ymFACRKd4AJbf468MbTSHv9p7ZVoVTBbTg7%2B9VZvkYzlASpxmVMOWfsVdGGqHbECtNtK7Qk7xC60jB%2FDJCALz7FCFkTL1tuCUirgA3KY7OjjUPAJqV3OR3sci455qGDMIe26MkGOqUBav9lNP8ifB3dBChPRFeKW7w9tgWTWI8dYAjzakrR%2B8oLGpADSFJ6rh2nBkEAnHhsuy%2BjQ4v4j51IDscEB6YBsDSnzQmf1YVBh9TZyZym0QBEGa6%2FJajEtZvkkntXGURlVjo2JLMiWyZ4pLAvEiM%2F6G2YDt%2BcOn0GEzOQSApPr81apFZwAMIw%2BBSIBlavgI3aZ%2FXUozE9XOqd7ZNxMWzOzouK4IM9&X-Amz-Signature=bc230e2b34dcb1d3bd48e875bba4554eefdb20b46a60b249d4cf46893c62ba1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJB2KIHG%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDMmPFnlU1xKt0FIwyjiLuzKttbPEi1gBjtqk7gZSy3yAIgCpUBfjvMOe2JH0JYld%2BN%2F%2Bns14yHTram2P67wRJhmUkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5E9v%2Fsi96YjywYByrcA2yV1buS78uLj%2FOEEps1byFX47yp84Zbir2hyRXjWjZVNFtyL9lny2C%2Bi1CnxY6rxUrWJ069tPK7J52QXnbnwajhmDVuLeW4MvzJzit76fBW9v6W7htWPR6AsKiD8QgilZjuNIxMtJcW%2BVSjBUF4Js%2BDnNVwx1ZoA1pjYZXH6u8kQsbBEBfvdMX6O7PZ66Q47sibUJ7Rez48JaF%2BQ0EX%2FgN6UOzpBSYwuEmGrldox6KVw2VsUgQ9eLjHbkdau8c8o55yZUGqFO9yZSI%2BzB1fOOs6gZtVbRyQrfGnmstNkaNIGkHDEgxCVGLJex7VZZDyK0cw9y1Y7p3FZSyIO02QX30Fs7LCvRIyEz7dHFGIpHzr%2FyFSw7%2FKb14x7T8k7nsVmB%2FIuQMBnj%2FXgVCHv2U7YVlSFFminPo9GivLOsnUiGJroEdRXW%2FxnczEtS6bAFa4AViwxCGxHrka87vBKOpoRIxL3tZ8EAd3P6BZuW%2FAHJdJv3mFCvSL7Y9B7lRb7ymFACRKd4AJbf468MbTSHv9p7ZVoVTBbTg7%2B9VZvkYzlASpxmVMOWfsVdGGqHbECtNtK7Qk7xC60jB%2FDJCALz7FCFkTL1tuCUirgA3KY7OjjUPAJqV3OR3sci455qGDMIe26MkGOqUBav9lNP8ifB3dBChPRFeKW7w9tgWTWI8dYAjzakrR%2B8oLGpADSFJ6rh2nBkEAnHhsuy%2BjQ4v4j51IDscEB6YBsDSnzQmf1YVBh9TZyZym0QBEGa6%2FJajEtZvkkntXGURlVjo2JLMiWyZ4pLAvEiM%2F6G2YDt%2BcOn0GEzOQSApPr81apFZwAMIw%2BBSIBlavgI3aZ%2FXUozE9XOqd7ZNxMWzOzouK4IM9&X-Amz-Signature=e0efdeb18e755ab32ba86604261635c091d1c8170bf63caaa810da3324e47b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJB2KIHG%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDMmPFnlU1xKt0FIwyjiLuzKttbPEi1gBjtqk7gZSy3yAIgCpUBfjvMOe2JH0JYld%2BN%2F%2Bns14yHTram2P67wRJhmUkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5E9v%2Fsi96YjywYByrcA2yV1buS78uLj%2FOEEps1byFX47yp84Zbir2hyRXjWjZVNFtyL9lny2C%2Bi1CnxY6rxUrWJ069tPK7J52QXnbnwajhmDVuLeW4MvzJzit76fBW9v6W7htWPR6AsKiD8QgilZjuNIxMtJcW%2BVSjBUF4Js%2BDnNVwx1ZoA1pjYZXH6u8kQsbBEBfvdMX6O7PZ66Q47sibUJ7Rez48JaF%2BQ0EX%2FgN6UOzpBSYwuEmGrldox6KVw2VsUgQ9eLjHbkdau8c8o55yZUGqFO9yZSI%2BzB1fOOs6gZtVbRyQrfGnmstNkaNIGkHDEgxCVGLJex7VZZDyK0cw9y1Y7p3FZSyIO02QX30Fs7LCvRIyEz7dHFGIpHzr%2FyFSw7%2FKb14x7T8k7nsVmB%2FIuQMBnj%2FXgVCHv2U7YVlSFFminPo9GivLOsnUiGJroEdRXW%2FxnczEtS6bAFa4AViwxCGxHrka87vBKOpoRIxL3tZ8EAd3P6BZuW%2FAHJdJv3mFCvSL7Y9B7lRb7ymFACRKd4AJbf468MbTSHv9p7ZVoVTBbTg7%2B9VZvkYzlASpxmVMOWfsVdGGqHbECtNtK7Qk7xC60jB%2FDJCALz7FCFkTL1tuCUirgA3KY7OjjUPAJqV3OR3sci455qGDMIe26MkGOqUBav9lNP8ifB3dBChPRFeKW7w9tgWTWI8dYAjzakrR%2B8oLGpADSFJ6rh2nBkEAnHhsuy%2BjQ4v4j51IDscEB6YBsDSnzQmf1YVBh9TZyZym0QBEGa6%2FJajEtZvkkntXGURlVjo2JLMiWyZ4pLAvEiM%2F6G2YDt%2BcOn0GEzOQSApPr81apFZwAMIw%2BBSIBlavgI3aZ%2FXUozE9XOqd7ZNxMWzOzouK4IM9&X-Amz-Signature=03fc07a057fdd7f6cf22bee57cf55ac5e22b0c15d6a9d27b8e4e469ecb78f3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJB2KIHG%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDMmPFnlU1xKt0FIwyjiLuzKttbPEi1gBjtqk7gZSy3yAIgCpUBfjvMOe2JH0JYld%2BN%2F%2Bns14yHTram2P67wRJhmUkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5E9v%2Fsi96YjywYByrcA2yV1buS78uLj%2FOEEps1byFX47yp84Zbir2hyRXjWjZVNFtyL9lny2C%2Bi1CnxY6rxUrWJ069tPK7J52QXnbnwajhmDVuLeW4MvzJzit76fBW9v6W7htWPR6AsKiD8QgilZjuNIxMtJcW%2BVSjBUF4Js%2BDnNVwx1ZoA1pjYZXH6u8kQsbBEBfvdMX6O7PZ66Q47sibUJ7Rez48JaF%2BQ0EX%2FgN6UOzpBSYwuEmGrldox6KVw2VsUgQ9eLjHbkdau8c8o55yZUGqFO9yZSI%2BzB1fOOs6gZtVbRyQrfGnmstNkaNIGkHDEgxCVGLJex7VZZDyK0cw9y1Y7p3FZSyIO02QX30Fs7LCvRIyEz7dHFGIpHzr%2FyFSw7%2FKb14x7T8k7nsVmB%2FIuQMBnj%2FXgVCHv2U7YVlSFFminPo9GivLOsnUiGJroEdRXW%2FxnczEtS6bAFa4AViwxCGxHrka87vBKOpoRIxL3tZ8EAd3P6BZuW%2FAHJdJv3mFCvSL7Y9B7lRb7ymFACRKd4AJbf468MbTSHv9p7ZVoVTBbTg7%2B9VZvkYzlASpxmVMOWfsVdGGqHbECtNtK7Qk7xC60jB%2FDJCALz7FCFkTL1tuCUirgA3KY7OjjUPAJqV3OR3sci455qGDMIe26MkGOqUBav9lNP8ifB3dBChPRFeKW7w9tgWTWI8dYAjzakrR%2B8oLGpADSFJ6rh2nBkEAnHhsuy%2BjQ4v4j51IDscEB6YBsDSnzQmf1YVBh9TZyZym0QBEGa6%2FJajEtZvkkntXGURlVjo2JLMiWyZ4pLAvEiM%2F6G2YDt%2BcOn0GEzOQSApPr81apFZwAMIw%2BBSIBlavgI3aZ%2FXUozE9XOqd7ZNxMWzOzouK4IM9&X-Amz-Signature=7c0d7b92b200f876c3e4a3bf6c28703d57922ebd9eb7569aed1b445e351cf6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
