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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IYZI2LE%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIECgiWVPkGONxRMB1i74j8WAKLAdvvbroVBUa3LsVUcTAiB6H4Kjl5%2B4DIkSWCvv4ADwJGUddgezOU%2Bgyi0IoUC1riqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvUBRVG3jdd%2B3k1%2F7KtwDzC8Av2bCmPtYmxtDFPmKvI1FG0gSZIqmpJUaUlRJ82xLpBMveKbZyNaO9KYXlANmxYmv5DsaNJPphfOAccs02l%2BmmAxRDosPpMfUoEd%2F0v2mcNCbbQGzLxDtoen6jJtHGjHOzRqAIqjveHOcABK6lDi50uFkNeFvc3CkOh5uMyAWkIBQvNlhq8LaTOcuwrSkG%2BjTKcJVlr%2FivxQZBLlckBgOOT%2FN%2BTQCvdVLT2W5Cz2AUSwWi4dmX777Gaw6A4lk9wdTz1d40sfklcG1Hbga%2BmGd4NUNCU4dutqtJQK%2Fy9w3lJ5WFhuuK62ZEzTfBBKxFxkZYMy4QgfS%2F%2FnJSEINmLdN37dRjzkt1YATzO6gloWEVPKr30X5oSE58Vfzojv42Cux6%2BZxRfRRCvorj5DUWtJOr9gUOtRoFqnzMHWw7AITYHfE8shNo0gv%2FS9Eto6vC%2BYBKBg%2BEweqWOzoNwPzlJxFkdWOnuZ0XX%2BBPrQCaEyaIV9HQN5L6pkdl0Hhap9vYDiKUbJ2XpPHahxQ3ixUai3KXzITmfRJ9y5w%2BlWBddt87OXqLW5XqUmW%2F9kfIWk7Exh%2BrJd907uXkZH1DEBYT1mxBPjrOA5BqzJ7CHziCHFGFTLo7HjclA9GyvQw8YaAzAY6pgFOXiN%2BuqNXXd2JVg12SkicIBc0UZS4Sy6skMyzys2MOms3vvp7qFQCCkV2jX%2Bit2ifyx0i2xvrF%2BRiSfZuu0rviJqFW%2FoeyX4A8f1AKUQJEOvf4wSvKTdprqUkXi8UGTBqlMZUKL%2BrbMkefkGmDHEZkSF4c7vLAx3SImmW30LszidQ5oeY6%2F9TUZw%2FPWg8PWhF2nRQzyaz%2Fmo6yC36t%2F17Dx18HN9z&X-Amz-Signature=71ecc2d9ee7c0d6367ff8335fe43bddd3d2557707a64cfb4860e55c1f01c9359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGR4UKVY%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjmhkFHFj5A7UcBXvE2hY%2BM1nvkTH2evk%2BOs%2FpvZNUdAiEAvyr%2BuaLp8Si7JlxxY5TVdelAMWLbhs4m3HhbsW2DuDgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASoH0q4oV8huEFLVCrcA6lucV%2FNAEglKDq9w71lYxAi96jzJum%2BCHCSd3TA0FiWHyZLiM7MHxZknJE54i8HjBLCAJ65lEoinmLORAS4E4%2BFGfxOaM5slAkighRUSodMCl%2BC6bE3YoRvOmyiey47WtgHOlgacwdPZsXY778cB16tHQNptkhHw8WjDd4BAeXhRL8FcL1SopHBGTpGyy8DvUg%2FyXqbF5QfL3%2FwBVWtciZwtg1Ha%2FrUu%2FEqSQdoIDT%2BJk7qwZLpFgeXV6eo8qhP1QmgkRV8RUod1HEQNDozGAhxqyjfoY4MqzoJsfwC2PAjIc9Vkv%2BTifmmOqc5v7zbSrfWq3mHzEltGUzd%2FzXfbKgNAaXGjW5w7dr%2FFTMk5GC8y2q9rk9XET7qOPDFBuVPkwG6poZ2159PnvHIQQQJMRMWany2r11O8hxRWqFvTxk%2BdHLCH28PkWCyQ%2FxBn%2FB0ll7M1HKTDfJMQTddisVMA0m419EaAK0IxQVWf1pUOQHRC3n22RSag7h8em1iLjgt3Ml2U5ox9NaATXhk1Qu4mhZr3pDEx%2Fh0XxvzKCvcvkL%2FZKo8%2BC0Be%2BwZ%2BShPocgoNJsW5XZWoFLzePZ4sJKTQpmjnpkuPYous8HpHcy45n7gjKyselXJxFVb9fxuMMmHgMwGOqUBme5DUpzfj8QfyiUtZIaPEFsi6xlnQY%2BtmcyMshYGBEwuCU%2BuD9LN9933WTO71%2BLhgOoC8XSsWr52Ql0goKBwcjhikt6gGdvpXT0O1sJ0T%2BPXIx%2BYDJJIZICo63thYLqZE98yfoxsy%2BaOOu1PtNd7JlWqnjlwfVgv34ybutUuN0lLuQgZWEV0HswNBFc1q3VSlBJu%2BkJpuIC9OvB%2BFlbhPXLXQLxO&X-Amz-Signature=773eac30ada07f4447589a3ccc3afe966aaf54fa4cd7d775ffb5908e85f475e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGR4UKVY%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjmhkFHFj5A7UcBXvE2hY%2BM1nvkTH2evk%2BOs%2FpvZNUdAiEAvyr%2BuaLp8Si7JlxxY5TVdelAMWLbhs4m3HhbsW2DuDgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASoH0q4oV8huEFLVCrcA6lucV%2FNAEglKDq9w71lYxAi96jzJum%2BCHCSd3TA0FiWHyZLiM7MHxZknJE54i8HjBLCAJ65lEoinmLORAS4E4%2BFGfxOaM5slAkighRUSodMCl%2BC6bE3YoRvOmyiey47WtgHOlgacwdPZsXY778cB16tHQNptkhHw8WjDd4BAeXhRL8FcL1SopHBGTpGyy8DvUg%2FyXqbF5QfL3%2FwBVWtciZwtg1Ha%2FrUu%2FEqSQdoIDT%2BJk7qwZLpFgeXV6eo8qhP1QmgkRV8RUod1HEQNDozGAhxqyjfoY4MqzoJsfwC2PAjIc9Vkv%2BTifmmOqc5v7zbSrfWq3mHzEltGUzd%2FzXfbKgNAaXGjW5w7dr%2FFTMk5GC8y2q9rk9XET7qOPDFBuVPkwG6poZ2159PnvHIQQQJMRMWany2r11O8hxRWqFvTxk%2BdHLCH28PkWCyQ%2FxBn%2FB0ll7M1HKTDfJMQTddisVMA0m419EaAK0IxQVWf1pUOQHRC3n22RSag7h8em1iLjgt3Ml2U5ox9NaATXhk1Qu4mhZr3pDEx%2Fh0XxvzKCvcvkL%2FZKo8%2BC0Be%2BwZ%2BShPocgoNJsW5XZWoFLzePZ4sJKTQpmjnpkuPYous8HpHcy45n7gjKyselXJxFVb9fxuMMmHgMwGOqUBme5DUpzfj8QfyiUtZIaPEFsi6xlnQY%2BtmcyMshYGBEwuCU%2BuD9LN9933WTO71%2BLhgOoC8XSsWr52Ql0goKBwcjhikt6gGdvpXT0O1sJ0T%2BPXIx%2BYDJJIZICo63thYLqZE98yfoxsy%2BaOOu1PtNd7JlWqnjlwfVgv34ybutUuN0lLuQgZWEV0HswNBFc1q3VSlBJu%2BkJpuIC9OvB%2BFlbhPXLXQLxO&X-Amz-Signature=b03fe707414f87c73d43dce39635c3fb8f082cfba02e87174978dc09173c5f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGR4UKVY%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjmhkFHFj5A7UcBXvE2hY%2BM1nvkTH2evk%2BOs%2FpvZNUdAiEAvyr%2BuaLp8Si7JlxxY5TVdelAMWLbhs4m3HhbsW2DuDgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASoH0q4oV8huEFLVCrcA6lucV%2FNAEglKDq9w71lYxAi96jzJum%2BCHCSd3TA0FiWHyZLiM7MHxZknJE54i8HjBLCAJ65lEoinmLORAS4E4%2BFGfxOaM5slAkighRUSodMCl%2BC6bE3YoRvOmyiey47WtgHOlgacwdPZsXY778cB16tHQNptkhHw8WjDd4BAeXhRL8FcL1SopHBGTpGyy8DvUg%2FyXqbF5QfL3%2FwBVWtciZwtg1Ha%2FrUu%2FEqSQdoIDT%2BJk7qwZLpFgeXV6eo8qhP1QmgkRV8RUod1HEQNDozGAhxqyjfoY4MqzoJsfwC2PAjIc9Vkv%2BTifmmOqc5v7zbSrfWq3mHzEltGUzd%2FzXfbKgNAaXGjW5w7dr%2FFTMk5GC8y2q9rk9XET7qOPDFBuVPkwG6poZ2159PnvHIQQQJMRMWany2r11O8hxRWqFvTxk%2BdHLCH28PkWCyQ%2FxBn%2FB0ll7M1HKTDfJMQTddisVMA0m419EaAK0IxQVWf1pUOQHRC3n22RSag7h8em1iLjgt3Ml2U5ox9NaATXhk1Qu4mhZr3pDEx%2Fh0XxvzKCvcvkL%2FZKo8%2BC0Be%2BwZ%2BShPocgoNJsW5XZWoFLzePZ4sJKTQpmjnpkuPYous8HpHcy45n7gjKyselXJxFVb9fxuMMmHgMwGOqUBme5DUpzfj8QfyiUtZIaPEFsi6xlnQY%2BtmcyMshYGBEwuCU%2BuD9LN9933WTO71%2BLhgOoC8XSsWr52Ql0goKBwcjhikt6gGdvpXT0O1sJ0T%2BPXIx%2BYDJJIZICo63thYLqZE98yfoxsy%2BaOOu1PtNd7JlWqnjlwfVgv34ybutUuN0lLuQgZWEV0HswNBFc1q3VSlBJu%2BkJpuIC9OvB%2BFlbhPXLXQLxO&X-Amz-Signature=f074ea8e90122875a570389509c266cf1f69916853222144cd37eb22175ca9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGR4UKVY%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjmhkFHFj5A7UcBXvE2hY%2BM1nvkTH2evk%2BOs%2FpvZNUdAiEAvyr%2BuaLp8Si7JlxxY5TVdelAMWLbhs4m3HhbsW2DuDgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASoH0q4oV8huEFLVCrcA6lucV%2FNAEglKDq9w71lYxAi96jzJum%2BCHCSd3TA0FiWHyZLiM7MHxZknJE54i8HjBLCAJ65lEoinmLORAS4E4%2BFGfxOaM5slAkighRUSodMCl%2BC6bE3YoRvOmyiey47WtgHOlgacwdPZsXY778cB16tHQNptkhHw8WjDd4BAeXhRL8FcL1SopHBGTpGyy8DvUg%2FyXqbF5QfL3%2FwBVWtciZwtg1Ha%2FrUu%2FEqSQdoIDT%2BJk7qwZLpFgeXV6eo8qhP1QmgkRV8RUod1HEQNDozGAhxqyjfoY4MqzoJsfwC2PAjIc9Vkv%2BTifmmOqc5v7zbSrfWq3mHzEltGUzd%2FzXfbKgNAaXGjW5w7dr%2FFTMk5GC8y2q9rk9XET7qOPDFBuVPkwG6poZ2159PnvHIQQQJMRMWany2r11O8hxRWqFvTxk%2BdHLCH28PkWCyQ%2FxBn%2FB0ll7M1HKTDfJMQTddisVMA0m419EaAK0IxQVWf1pUOQHRC3n22RSag7h8em1iLjgt3Ml2U5ox9NaATXhk1Qu4mhZr3pDEx%2Fh0XxvzKCvcvkL%2FZKo8%2BC0Be%2BwZ%2BShPocgoNJsW5XZWoFLzePZ4sJKTQpmjnpkuPYous8HpHcy45n7gjKyselXJxFVb9fxuMMmHgMwGOqUBme5DUpzfj8QfyiUtZIaPEFsi6xlnQY%2BtmcyMshYGBEwuCU%2BuD9LN9933WTO71%2BLhgOoC8XSsWr52Ql0goKBwcjhikt6gGdvpXT0O1sJ0T%2BPXIx%2BYDJJIZICo63thYLqZE98yfoxsy%2BaOOu1PtNd7JlWqnjlwfVgv34ybutUuN0lLuQgZWEV0HswNBFc1q3VSlBJu%2BkJpuIC9OvB%2BFlbhPXLXQLxO&X-Amz-Signature=e77a7329d7ee7f46fe7aafb7a4e3732f1a91651e5733084a54005d4fe53d7d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGR4UKVY%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjmhkFHFj5A7UcBXvE2hY%2BM1nvkTH2evk%2BOs%2FpvZNUdAiEAvyr%2BuaLp8Si7JlxxY5TVdelAMWLbhs4m3HhbsW2DuDgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASoH0q4oV8huEFLVCrcA6lucV%2FNAEglKDq9w71lYxAi96jzJum%2BCHCSd3TA0FiWHyZLiM7MHxZknJE54i8HjBLCAJ65lEoinmLORAS4E4%2BFGfxOaM5slAkighRUSodMCl%2BC6bE3YoRvOmyiey47WtgHOlgacwdPZsXY778cB16tHQNptkhHw8WjDd4BAeXhRL8FcL1SopHBGTpGyy8DvUg%2FyXqbF5QfL3%2FwBVWtciZwtg1Ha%2FrUu%2FEqSQdoIDT%2BJk7qwZLpFgeXV6eo8qhP1QmgkRV8RUod1HEQNDozGAhxqyjfoY4MqzoJsfwC2PAjIc9Vkv%2BTifmmOqc5v7zbSrfWq3mHzEltGUzd%2FzXfbKgNAaXGjW5w7dr%2FFTMk5GC8y2q9rk9XET7qOPDFBuVPkwG6poZ2159PnvHIQQQJMRMWany2r11O8hxRWqFvTxk%2BdHLCH28PkWCyQ%2FxBn%2FB0ll7M1HKTDfJMQTddisVMA0m419EaAK0IxQVWf1pUOQHRC3n22RSag7h8em1iLjgt3Ml2U5ox9NaATXhk1Qu4mhZr3pDEx%2Fh0XxvzKCvcvkL%2FZKo8%2BC0Be%2BwZ%2BShPocgoNJsW5XZWoFLzePZ4sJKTQpmjnpkuPYous8HpHcy45n7gjKyselXJxFVb9fxuMMmHgMwGOqUBme5DUpzfj8QfyiUtZIaPEFsi6xlnQY%2BtmcyMshYGBEwuCU%2BuD9LN9933WTO71%2BLhgOoC8XSsWr52Ql0goKBwcjhikt6gGdvpXT0O1sJ0T%2BPXIx%2BYDJJIZICo63thYLqZE98yfoxsy%2BaOOu1PtNd7JlWqnjlwfVgv34ybutUuN0lLuQgZWEV0HswNBFc1q3VSlBJu%2BkJpuIC9OvB%2BFlbhPXLXQLxO&X-Amz-Signature=1b423f4f9d98cd0fd281a5f6609f33f93bfa4148e2c1ba5ebbc7a02e4de66431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGR4UKVY%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjmhkFHFj5A7UcBXvE2hY%2BM1nvkTH2evk%2BOs%2FpvZNUdAiEAvyr%2BuaLp8Si7JlxxY5TVdelAMWLbhs4m3HhbsW2DuDgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASoH0q4oV8huEFLVCrcA6lucV%2FNAEglKDq9w71lYxAi96jzJum%2BCHCSd3TA0FiWHyZLiM7MHxZknJE54i8HjBLCAJ65lEoinmLORAS4E4%2BFGfxOaM5slAkighRUSodMCl%2BC6bE3YoRvOmyiey47WtgHOlgacwdPZsXY778cB16tHQNptkhHw8WjDd4BAeXhRL8FcL1SopHBGTpGyy8DvUg%2FyXqbF5QfL3%2FwBVWtciZwtg1Ha%2FrUu%2FEqSQdoIDT%2BJk7qwZLpFgeXV6eo8qhP1QmgkRV8RUod1HEQNDozGAhxqyjfoY4MqzoJsfwC2PAjIc9Vkv%2BTifmmOqc5v7zbSrfWq3mHzEltGUzd%2FzXfbKgNAaXGjW5w7dr%2FFTMk5GC8y2q9rk9XET7qOPDFBuVPkwG6poZ2159PnvHIQQQJMRMWany2r11O8hxRWqFvTxk%2BdHLCH28PkWCyQ%2FxBn%2FB0ll7M1HKTDfJMQTddisVMA0m419EaAK0IxQVWf1pUOQHRC3n22RSag7h8em1iLjgt3Ml2U5ox9NaATXhk1Qu4mhZr3pDEx%2Fh0XxvzKCvcvkL%2FZKo8%2BC0Be%2BwZ%2BShPocgoNJsW5XZWoFLzePZ4sJKTQpmjnpkuPYous8HpHcy45n7gjKyselXJxFVb9fxuMMmHgMwGOqUBme5DUpzfj8QfyiUtZIaPEFsi6xlnQY%2BtmcyMshYGBEwuCU%2BuD9LN9933WTO71%2BLhgOoC8XSsWr52Ql0goKBwcjhikt6gGdvpXT0O1sJ0T%2BPXIx%2BYDJJIZICo63thYLqZE98yfoxsy%2BaOOu1PtNd7JlWqnjlwfVgv34ybutUuN0lLuQgZWEV0HswNBFc1q3VSlBJu%2BkJpuIC9OvB%2BFlbhPXLXQLxO&X-Amz-Signature=1611a5a6a86091dedd1903e86506510c25d2cbee9b966837f0f25786af8045b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGR4UKVY%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjmhkFHFj5A7UcBXvE2hY%2BM1nvkTH2evk%2BOs%2FpvZNUdAiEAvyr%2BuaLp8Si7JlxxY5TVdelAMWLbhs4m3HhbsW2DuDgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASoH0q4oV8huEFLVCrcA6lucV%2FNAEglKDq9w71lYxAi96jzJum%2BCHCSd3TA0FiWHyZLiM7MHxZknJE54i8HjBLCAJ65lEoinmLORAS4E4%2BFGfxOaM5slAkighRUSodMCl%2BC6bE3YoRvOmyiey47WtgHOlgacwdPZsXY778cB16tHQNptkhHw8WjDd4BAeXhRL8FcL1SopHBGTpGyy8DvUg%2FyXqbF5QfL3%2FwBVWtciZwtg1Ha%2FrUu%2FEqSQdoIDT%2BJk7qwZLpFgeXV6eo8qhP1QmgkRV8RUod1HEQNDozGAhxqyjfoY4MqzoJsfwC2PAjIc9Vkv%2BTifmmOqc5v7zbSrfWq3mHzEltGUzd%2FzXfbKgNAaXGjW5w7dr%2FFTMk5GC8y2q9rk9XET7qOPDFBuVPkwG6poZ2159PnvHIQQQJMRMWany2r11O8hxRWqFvTxk%2BdHLCH28PkWCyQ%2FxBn%2FB0ll7M1HKTDfJMQTddisVMA0m419EaAK0IxQVWf1pUOQHRC3n22RSag7h8em1iLjgt3Ml2U5ox9NaATXhk1Qu4mhZr3pDEx%2Fh0XxvzKCvcvkL%2FZKo8%2BC0Be%2BwZ%2BShPocgoNJsW5XZWoFLzePZ4sJKTQpmjnpkuPYous8HpHcy45n7gjKyselXJxFVb9fxuMMmHgMwGOqUBme5DUpzfj8QfyiUtZIaPEFsi6xlnQY%2BtmcyMshYGBEwuCU%2BuD9LN9933WTO71%2BLhgOoC8XSsWr52Ql0goKBwcjhikt6gGdvpXT0O1sJ0T%2BPXIx%2BYDJJIZICo63thYLqZE98yfoxsy%2BaOOu1PtNd7JlWqnjlwfVgv34ybutUuN0lLuQgZWEV0HswNBFc1q3VSlBJu%2BkJpuIC9OvB%2BFlbhPXLXQLxO&X-Amz-Signature=53c090ada37d42404c1d1921e578ae7aa6e15c055ea4b0c3d08ae71a96296a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGR4UKVY%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjmhkFHFj5A7UcBXvE2hY%2BM1nvkTH2evk%2BOs%2FpvZNUdAiEAvyr%2BuaLp8Si7JlxxY5TVdelAMWLbhs4m3HhbsW2DuDgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASoH0q4oV8huEFLVCrcA6lucV%2FNAEglKDq9w71lYxAi96jzJum%2BCHCSd3TA0FiWHyZLiM7MHxZknJE54i8HjBLCAJ65lEoinmLORAS4E4%2BFGfxOaM5slAkighRUSodMCl%2BC6bE3YoRvOmyiey47WtgHOlgacwdPZsXY778cB16tHQNptkhHw8WjDd4BAeXhRL8FcL1SopHBGTpGyy8DvUg%2FyXqbF5QfL3%2FwBVWtciZwtg1Ha%2FrUu%2FEqSQdoIDT%2BJk7qwZLpFgeXV6eo8qhP1QmgkRV8RUod1HEQNDozGAhxqyjfoY4MqzoJsfwC2PAjIc9Vkv%2BTifmmOqc5v7zbSrfWq3mHzEltGUzd%2FzXfbKgNAaXGjW5w7dr%2FFTMk5GC8y2q9rk9XET7qOPDFBuVPkwG6poZ2159PnvHIQQQJMRMWany2r11O8hxRWqFvTxk%2BdHLCH28PkWCyQ%2FxBn%2FB0ll7M1HKTDfJMQTddisVMA0m419EaAK0IxQVWf1pUOQHRC3n22RSag7h8em1iLjgt3Ml2U5ox9NaATXhk1Qu4mhZr3pDEx%2Fh0XxvzKCvcvkL%2FZKo8%2BC0Be%2BwZ%2BShPocgoNJsW5XZWoFLzePZ4sJKTQpmjnpkuPYous8HpHcy45n7gjKyselXJxFVb9fxuMMmHgMwGOqUBme5DUpzfj8QfyiUtZIaPEFsi6xlnQY%2BtmcyMshYGBEwuCU%2BuD9LN9933WTO71%2BLhgOoC8XSsWr52Ql0goKBwcjhikt6gGdvpXT0O1sJ0T%2BPXIx%2BYDJJIZICo63thYLqZE98yfoxsy%2BaOOu1PtNd7JlWqnjlwfVgv34ybutUuN0lLuQgZWEV0HswNBFc1q3VSlBJu%2BkJpuIC9OvB%2BFlbhPXLXQLxO&X-Amz-Signature=6e2a75faaed6d90514f811af7f909f0fecefffe3eaf4bc314badaa50c06769c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGR4UKVY%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjmhkFHFj5A7UcBXvE2hY%2BM1nvkTH2evk%2BOs%2FpvZNUdAiEAvyr%2BuaLp8Si7JlxxY5TVdelAMWLbhs4m3HhbsW2DuDgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASoH0q4oV8huEFLVCrcA6lucV%2FNAEglKDq9w71lYxAi96jzJum%2BCHCSd3TA0FiWHyZLiM7MHxZknJE54i8HjBLCAJ65lEoinmLORAS4E4%2BFGfxOaM5slAkighRUSodMCl%2BC6bE3YoRvOmyiey47WtgHOlgacwdPZsXY778cB16tHQNptkhHw8WjDd4BAeXhRL8FcL1SopHBGTpGyy8DvUg%2FyXqbF5QfL3%2FwBVWtciZwtg1Ha%2FrUu%2FEqSQdoIDT%2BJk7qwZLpFgeXV6eo8qhP1QmgkRV8RUod1HEQNDozGAhxqyjfoY4MqzoJsfwC2PAjIc9Vkv%2BTifmmOqc5v7zbSrfWq3mHzEltGUzd%2FzXfbKgNAaXGjW5w7dr%2FFTMk5GC8y2q9rk9XET7qOPDFBuVPkwG6poZ2159PnvHIQQQJMRMWany2r11O8hxRWqFvTxk%2BdHLCH28PkWCyQ%2FxBn%2FB0ll7M1HKTDfJMQTddisVMA0m419EaAK0IxQVWf1pUOQHRC3n22RSag7h8em1iLjgt3Ml2U5ox9NaATXhk1Qu4mhZr3pDEx%2Fh0XxvzKCvcvkL%2FZKo8%2BC0Be%2BwZ%2BShPocgoNJsW5XZWoFLzePZ4sJKTQpmjnpkuPYous8HpHcy45n7gjKyselXJxFVb9fxuMMmHgMwGOqUBme5DUpzfj8QfyiUtZIaPEFsi6xlnQY%2BtmcyMshYGBEwuCU%2BuD9LN9933WTO71%2BLhgOoC8XSsWr52Ql0goKBwcjhikt6gGdvpXT0O1sJ0T%2BPXIx%2BYDJJIZICo63thYLqZE98yfoxsy%2BaOOu1PtNd7JlWqnjlwfVgv34ybutUuN0lLuQgZWEV0HswNBFc1q3VSlBJu%2BkJpuIC9OvB%2BFlbhPXLXQLxO&X-Amz-Signature=697c7c51820c884346a68b2988d765ad4b151340eb3d668d14f2eb4cbea60e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGR4UKVY%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjmhkFHFj5A7UcBXvE2hY%2BM1nvkTH2evk%2BOs%2FpvZNUdAiEAvyr%2BuaLp8Si7JlxxY5TVdelAMWLbhs4m3HhbsW2DuDgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASoH0q4oV8huEFLVCrcA6lucV%2FNAEglKDq9w71lYxAi96jzJum%2BCHCSd3TA0FiWHyZLiM7MHxZknJE54i8HjBLCAJ65lEoinmLORAS4E4%2BFGfxOaM5slAkighRUSodMCl%2BC6bE3YoRvOmyiey47WtgHOlgacwdPZsXY778cB16tHQNptkhHw8WjDd4BAeXhRL8FcL1SopHBGTpGyy8DvUg%2FyXqbF5QfL3%2FwBVWtciZwtg1Ha%2FrUu%2FEqSQdoIDT%2BJk7qwZLpFgeXV6eo8qhP1QmgkRV8RUod1HEQNDozGAhxqyjfoY4MqzoJsfwC2PAjIc9Vkv%2BTifmmOqc5v7zbSrfWq3mHzEltGUzd%2FzXfbKgNAaXGjW5w7dr%2FFTMk5GC8y2q9rk9XET7qOPDFBuVPkwG6poZ2159PnvHIQQQJMRMWany2r11O8hxRWqFvTxk%2BdHLCH28PkWCyQ%2FxBn%2FB0ll7M1HKTDfJMQTddisVMA0m419EaAK0IxQVWf1pUOQHRC3n22RSag7h8em1iLjgt3Ml2U5ox9NaATXhk1Qu4mhZr3pDEx%2Fh0XxvzKCvcvkL%2FZKo8%2BC0Be%2BwZ%2BShPocgoNJsW5XZWoFLzePZ4sJKTQpmjnpkuPYous8HpHcy45n7gjKyselXJxFVb9fxuMMmHgMwGOqUBme5DUpzfj8QfyiUtZIaPEFsi6xlnQY%2BtmcyMshYGBEwuCU%2BuD9LN9933WTO71%2BLhgOoC8XSsWr52Ql0goKBwcjhikt6gGdvpXT0O1sJ0T%2BPXIx%2BYDJJIZICo63thYLqZE98yfoxsy%2BaOOu1PtNd7JlWqnjlwfVgv34ybutUuN0lLuQgZWEV0HswNBFc1q3VSlBJu%2BkJpuIC9OvB%2BFlbhPXLXQLxO&X-Amz-Signature=0beee72aa64e0f65732ee1f09bb46bcd9b84afbcc8c98a8b2186984fdefa77c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
