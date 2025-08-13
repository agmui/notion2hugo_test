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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5IALCHQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICaUANBA4G0omRXuAjOSfGekwiVu%2F6f8e4BV8RJUoohjAiEA%2FQkSMfCATlFr9r2FJZK3iD2SUX5sc%2Bepj6Ed0tpi3gQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNRXFvhNthuAFpc%2BHircA%2BexD9EKz95om1Cfl7WSNsc4Ma63mdGrazRl%2Ft6kW7%2F1XQbk6WSQu9960arh2O5oJ%2Bsjl2ubnZhU56Bg2MtI36cM6ibw9qhkGNKXhKAu4MuGWVxoU3y6ByxK9O2OU3c3tgjDf5%2BV8ABgT4TqDhKDzdijxhihpzeCUHzEP8SMb%2B66yQIs96ShCHv6gU3Vq4TdUfb8kZk9H0n1bIlUh1DAUTwdBGaQOqpAbOKxK9vcW8rXoW3W7%2F4WpjhD1OShjKdY9YYpak8rwHci7%2FGBcApmVNw7FaCpcriIFkSNW8Vpm%2FHcjY0AD1zKe42xn0ZZeYGn4qPjYm%2B0pzhsvHbYZnXQkz5bPeGgr5rExWL9oLA62b4ofRyOjI8uVDfchAF9kps%2B496QDmFi6A4NTa3aHmjTwqEGcLbOerrNhSsjpreL2nj7qoYEE93bi36RZzAwvHL%2Faw7KU%2BbKPiMmR15eVrExQxWCUHbaBJRiSQdd7005qoS2BUXIiW7skpbcMtlWybnR82BuZIaXJWtr6mxUAi3%2BSpfU8rT%2FSB1QnDpL60tnQ6Qh3QV4PltNkfqBJqxaEbb8Cqk7fzPSMYqQa9mYz7nm%2Fbof0hv4RDvYTXejnB%2F6iVCvBusw%2Fcn7pUOH9VIlMJ%2FG8cQGOqUBVsQpujsXl11TyQ391NviIXxjx%2F6ailuUrMWKpRRgzRxG6X%2F2SUSGGHZCZzCsNO0JOPZd4M%2FXpe7VSQZQ3iVW82JNz%2BW7XZnEqAnOhiOEDQ9DvvFZuongjFu9U9JCIIvKwqOq1bDxfCFDSDi8PjjESdaYViccqsYNXETAClm1olQ0UWHVqWRQsUG429c45mlMbj5%2FhEP1y0HRlqwmTmoTGzpMYpvc&X-Amz-Signature=cdc2fd7f9372363904df51bc25a20e35bd95cdc1ec8fde173aa66d993a5f034f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XEDIJS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3nYWlh0rWXVxyPSGgBEkU77Q2RXrMsoBRy0Yt4vjhkAIhAIUPz054nuS%2BEEladSixwTLq7uEAFdQ%2BLJfIGPFqG9xVKv8DCCsQABoMNjM3NDIzMTgzODA1Igw3cblfDLcOOBIPUTwq3AP3VggTqY7Ci66w0b0Ww%2FPosiYzSlMSOKWhN%2BAzIgaldtmVuKEogDAUSwB7yEc7P5B0Q3tXmvBOc86Na2f%2FrdlcKe4yVqAv0aYbNAeRnO6VBb0xiMbhWRwim8ZJieCJZUwlRqVG%2B67TmTXyjCvCNq3t7GnaqdNvSCiwf%2Bwf2l%2BMPHDo%2FSOS4SpeNAab%2B9L%2FTMH4Rh2cTad0cP1Cze6PwQhljW5MicByEj1V862BlkEBYviS6imUpLIAupqPHzsBLCbhZOwDLZktJtQg1r5CLd2uuExfy92PB7HcsCr7V7O84G6Qqvk0u7F1yX%2BNx1er4HwrnHkhZDiedjRUl6A1IMwlkvMM299xwWxxEpKH9YyCU%2FX2opQM9AjnormkmNXAokPhrB1vPO00ag5yROrRHXhXaVcBhQgVXRgAhzMK5cNhaTilEumO0JYMBS05ew2XPoV0VPT3N7bkXesraf2rl9edxNSrQpo7nrML3XsmgEQ7KhEvAkpSlSRukNMfFY0%2FfU%2Bwrs21i3koC026TnsWXhMtfkZ%2F8hD6upofPuBhNXu7bO3M8xJKZCBW5WXIWoQhjmwp3dW8HCKFtlBKrIKltzSHadxC8ruIZRWWsviXRp8OVFzvoGoWetuUzPhUQTCDxvHEBjqkAbnKhOvyQZcs5iT%2FEDuaJvOycXOi3NYkhGGSl1y%2FoNrFGm9BQIThSAyWpcINFYDU7%2BxC3ULofBRFL5gvcFMRvaBeLEJxlJk21aaBO1cyDDaSBniXU2aeMhW2xv1raPZ57MJinMqlRzP19R4GoUvJf1aSBZtxWWKwKRSCpAf5uj0GdLKzkR2IrMcjIBk0H45zqIz3wuthBonY5xmVcURaGWPsSxLv&X-Amz-Signature=b6a6ae9e20b90537c3354cf636b6933e28abb5205c35ea758d0ce15648c2bb44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XEDIJS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3nYWlh0rWXVxyPSGgBEkU77Q2RXrMsoBRy0Yt4vjhkAIhAIUPz054nuS%2BEEladSixwTLq7uEAFdQ%2BLJfIGPFqG9xVKv8DCCsQABoMNjM3NDIzMTgzODA1Igw3cblfDLcOOBIPUTwq3AP3VggTqY7Ci66w0b0Ww%2FPosiYzSlMSOKWhN%2BAzIgaldtmVuKEogDAUSwB7yEc7P5B0Q3tXmvBOc86Na2f%2FrdlcKe4yVqAv0aYbNAeRnO6VBb0xiMbhWRwim8ZJieCJZUwlRqVG%2B67TmTXyjCvCNq3t7GnaqdNvSCiwf%2Bwf2l%2BMPHDo%2FSOS4SpeNAab%2B9L%2FTMH4Rh2cTad0cP1Cze6PwQhljW5MicByEj1V862BlkEBYviS6imUpLIAupqPHzsBLCbhZOwDLZktJtQg1r5CLd2uuExfy92PB7HcsCr7V7O84G6Qqvk0u7F1yX%2BNx1er4HwrnHkhZDiedjRUl6A1IMwlkvMM299xwWxxEpKH9YyCU%2FX2opQM9AjnormkmNXAokPhrB1vPO00ag5yROrRHXhXaVcBhQgVXRgAhzMK5cNhaTilEumO0JYMBS05ew2XPoV0VPT3N7bkXesraf2rl9edxNSrQpo7nrML3XsmgEQ7KhEvAkpSlSRukNMfFY0%2FfU%2Bwrs21i3koC026TnsWXhMtfkZ%2F8hD6upofPuBhNXu7bO3M8xJKZCBW5WXIWoQhjmwp3dW8HCKFtlBKrIKltzSHadxC8ruIZRWWsviXRp8OVFzvoGoWetuUzPhUQTCDxvHEBjqkAbnKhOvyQZcs5iT%2FEDuaJvOycXOi3NYkhGGSl1y%2FoNrFGm9BQIThSAyWpcINFYDU7%2BxC3ULofBRFL5gvcFMRvaBeLEJxlJk21aaBO1cyDDaSBniXU2aeMhW2xv1raPZ57MJinMqlRzP19R4GoUvJf1aSBZtxWWKwKRSCpAf5uj0GdLKzkR2IrMcjIBk0H45zqIz3wuthBonY5xmVcURaGWPsSxLv&X-Amz-Signature=57430dd76eb6aecbde1acb3546a5285582bf3495a099ac823b7b99aea504a11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XEDIJS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3nYWlh0rWXVxyPSGgBEkU77Q2RXrMsoBRy0Yt4vjhkAIhAIUPz054nuS%2BEEladSixwTLq7uEAFdQ%2BLJfIGPFqG9xVKv8DCCsQABoMNjM3NDIzMTgzODA1Igw3cblfDLcOOBIPUTwq3AP3VggTqY7Ci66w0b0Ww%2FPosiYzSlMSOKWhN%2BAzIgaldtmVuKEogDAUSwB7yEc7P5B0Q3tXmvBOc86Na2f%2FrdlcKe4yVqAv0aYbNAeRnO6VBb0xiMbhWRwim8ZJieCJZUwlRqVG%2B67TmTXyjCvCNq3t7GnaqdNvSCiwf%2Bwf2l%2BMPHDo%2FSOS4SpeNAab%2B9L%2FTMH4Rh2cTad0cP1Cze6PwQhljW5MicByEj1V862BlkEBYviS6imUpLIAupqPHzsBLCbhZOwDLZktJtQg1r5CLd2uuExfy92PB7HcsCr7V7O84G6Qqvk0u7F1yX%2BNx1er4HwrnHkhZDiedjRUl6A1IMwlkvMM299xwWxxEpKH9YyCU%2FX2opQM9AjnormkmNXAokPhrB1vPO00ag5yROrRHXhXaVcBhQgVXRgAhzMK5cNhaTilEumO0JYMBS05ew2XPoV0VPT3N7bkXesraf2rl9edxNSrQpo7nrML3XsmgEQ7KhEvAkpSlSRukNMfFY0%2FfU%2Bwrs21i3koC026TnsWXhMtfkZ%2F8hD6upofPuBhNXu7bO3M8xJKZCBW5WXIWoQhjmwp3dW8HCKFtlBKrIKltzSHadxC8ruIZRWWsviXRp8OVFzvoGoWetuUzPhUQTCDxvHEBjqkAbnKhOvyQZcs5iT%2FEDuaJvOycXOi3NYkhGGSl1y%2FoNrFGm9BQIThSAyWpcINFYDU7%2BxC3ULofBRFL5gvcFMRvaBeLEJxlJk21aaBO1cyDDaSBniXU2aeMhW2xv1raPZ57MJinMqlRzP19R4GoUvJf1aSBZtxWWKwKRSCpAf5uj0GdLKzkR2IrMcjIBk0H45zqIz3wuthBonY5xmVcURaGWPsSxLv&X-Amz-Signature=dcdb2f8dff5885863719f612223b1ca8cdb4a79c3c8ae16c0b0d778b43e253f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XEDIJS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3nYWlh0rWXVxyPSGgBEkU77Q2RXrMsoBRy0Yt4vjhkAIhAIUPz054nuS%2BEEladSixwTLq7uEAFdQ%2BLJfIGPFqG9xVKv8DCCsQABoMNjM3NDIzMTgzODA1Igw3cblfDLcOOBIPUTwq3AP3VggTqY7Ci66w0b0Ww%2FPosiYzSlMSOKWhN%2BAzIgaldtmVuKEogDAUSwB7yEc7P5B0Q3tXmvBOc86Na2f%2FrdlcKe4yVqAv0aYbNAeRnO6VBb0xiMbhWRwim8ZJieCJZUwlRqVG%2B67TmTXyjCvCNq3t7GnaqdNvSCiwf%2Bwf2l%2BMPHDo%2FSOS4SpeNAab%2B9L%2FTMH4Rh2cTad0cP1Cze6PwQhljW5MicByEj1V862BlkEBYviS6imUpLIAupqPHzsBLCbhZOwDLZktJtQg1r5CLd2uuExfy92PB7HcsCr7V7O84G6Qqvk0u7F1yX%2BNx1er4HwrnHkhZDiedjRUl6A1IMwlkvMM299xwWxxEpKH9YyCU%2FX2opQM9AjnormkmNXAokPhrB1vPO00ag5yROrRHXhXaVcBhQgVXRgAhzMK5cNhaTilEumO0JYMBS05ew2XPoV0VPT3N7bkXesraf2rl9edxNSrQpo7nrML3XsmgEQ7KhEvAkpSlSRukNMfFY0%2FfU%2Bwrs21i3koC026TnsWXhMtfkZ%2F8hD6upofPuBhNXu7bO3M8xJKZCBW5WXIWoQhjmwp3dW8HCKFtlBKrIKltzSHadxC8ruIZRWWsviXRp8OVFzvoGoWetuUzPhUQTCDxvHEBjqkAbnKhOvyQZcs5iT%2FEDuaJvOycXOi3NYkhGGSl1y%2FoNrFGm9BQIThSAyWpcINFYDU7%2BxC3ULofBRFL5gvcFMRvaBeLEJxlJk21aaBO1cyDDaSBniXU2aeMhW2xv1raPZ57MJinMqlRzP19R4GoUvJf1aSBZtxWWKwKRSCpAf5uj0GdLKzkR2IrMcjIBk0H45zqIz3wuthBonY5xmVcURaGWPsSxLv&X-Amz-Signature=d0be215dcef9a0ed95a918a90545930e15ad12501c496d29d58be18dfff32133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XEDIJS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3nYWlh0rWXVxyPSGgBEkU77Q2RXrMsoBRy0Yt4vjhkAIhAIUPz054nuS%2BEEladSixwTLq7uEAFdQ%2BLJfIGPFqG9xVKv8DCCsQABoMNjM3NDIzMTgzODA1Igw3cblfDLcOOBIPUTwq3AP3VggTqY7Ci66w0b0Ww%2FPosiYzSlMSOKWhN%2BAzIgaldtmVuKEogDAUSwB7yEc7P5B0Q3tXmvBOc86Na2f%2FrdlcKe4yVqAv0aYbNAeRnO6VBb0xiMbhWRwim8ZJieCJZUwlRqVG%2B67TmTXyjCvCNq3t7GnaqdNvSCiwf%2Bwf2l%2BMPHDo%2FSOS4SpeNAab%2B9L%2FTMH4Rh2cTad0cP1Cze6PwQhljW5MicByEj1V862BlkEBYviS6imUpLIAupqPHzsBLCbhZOwDLZktJtQg1r5CLd2uuExfy92PB7HcsCr7V7O84G6Qqvk0u7F1yX%2BNx1er4HwrnHkhZDiedjRUl6A1IMwlkvMM299xwWxxEpKH9YyCU%2FX2opQM9AjnormkmNXAokPhrB1vPO00ag5yROrRHXhXaVcBhQgVXRgAhzMK5cNhaTilEumO0JYMBS05ew2XPoV0VPT3N7bkXesraf2rl9edxNSrQpo7nrML3XsmgEQ7KhEvAkpSlSRukNMfFY0%2FfU%2Bwrs21i3koC026TnsWXhMtfkZ%2F8hD6upofPuBhNXu7bO3M8xJKZCBW5WXIWoQhjmwp3dW8HCKFtlBKrIKltzSHadxC8ruIZRWWsviXRp8OVFzvoGoWetuUzPhUQTCDxvHEBjqkAbnKhOvyQZcs5iT%2FEDuaJvOycXOi3NYkhGGSl1y%2FoNrFGm9BQIThSAyWpcINFYDU7%2BxC3ULofBRFL5gvcFMRvaBeLEJxlJk21aaBO1cyDDaSBniXU2aeMhW2xv1raPZ57MJinMqlRzP19R4GoUvJf1aSBZtxWWKwKRSCpAf5uj0GdLKzkR2IrMcjIBk0H45zqIz3wuthBonY5xmVcURaGWPsSxLv&X-Amz-Signature=cef176ffec43d48ba332a0d321650c0aad10e920ab264fae67e6cba7c6546487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XEDIJS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3nYWlh0rWXVxyPSGgBEkU77Q2RXrMsoBRy0Yt4vjhkAIhAIUPz054nuS%2BEEladSixwTLq7uEAFdQ%2BLJfIGPFqG9xVKv8DCCsQABoMNjM3NDIzMTgzODA1Igw3cblfDLcOOBIPUTwq3AP3VggTqY7Ci66w0b0Ww%2FPosiYzSlMSOKWhN%2BAzIgaldtmVuKEogDAUSwB7yEc7P5B0Q3tXmvBOc86Na2f%2FrdlcKe4yVqAv0aYbNAeRnO6VBb0xiMbhWRwim8ZJieCJZUwlRqVG%2B67TmTXyjCvCNq3t7GnaqdNvSCiwf%2Bwf2l%2BMPHDo%2FSOS4SpeNAab%2B9L%2FTMH4Rh2cTad0cP1Cze6PwQhljW5MicByEj1V862BlkEBYviS6imUpLIAupqPHzsBLCbhZOwDLZktJtQg1r5CLd2uuExfy92PB7HcsCr7V7O84G6Qqvk0u7F1yX%2BNx1er4HwrnHkhZDiedjRUl6A1IMwlkvMM299xwWxxEpKH9YyCU%2FX2opQM9AjnormkmNXAokPhrB1vPO00ag5yROrRHXhXaVcBhQgVXRgAhzMK5cNhaTilEumO0JYMBS05ew2XPoV0VPT3N7bkXesraf2rl9edxNSrQpo7nrML3XsmgEQ7KhEvAkpSlSRukNMfFY0%2FfU%2Bwrs21i3koC026TnsWXhMtfkZ%2F8hD6upofPuBhNXu7bO3M8xJKZCBW5WXIWoQhjmwp3dW8HCKFtlBKrIKltzSHadxC8ruIZRWWsviXRp8OVFzvoGoWetuUzPhUQTCDxvHEBjqkAbnKhOvyQZcs5iT%2FEDuaJvOycXOi3NYkhGGSl1y%2FoNrFGm9BQIThSAyWpcINFYDU7%2BxC3ULofBRFL5gvcFMRvaBeLEJxlJk21aaBO1cyDDaSBniXU2aeMhW2xv1raPZ57MJinMqlRzP19R4GoUvJf1aSBZtxWWKwKRSCpAf5uj0GdLKzkR2IrMcjIBk0H45zqIz3wuthBonY5xmVcURaGWPsSxLv&X-Amz-Signature=4770ff037eb3092f7e804355e86469cfa3e5c653f4798467c21e13e42ee632fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XEDIJS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3nYWlh0rWXVxyPSGgBEkU77Q2RXrMsoBRy0Yt4vjhkAIhAIUPz054nuS%2BEEladSixwTLq7uEAFdQ%2BLJfIGPFqG9xVKv8DCCsQABoMNjM3NDIzMTgzODA1Igw3cblfDLcOOBIPUTwq3AP3VggTqY7Ci66w0b0Ww%2FPosiYzSlMSOKWhN%2BAzIgaldtmVuKEogDAUSwB7yEc7P5B0Q3tXmvBOc86Na2f%2FrdlcKe4yVqAv0aYbNAeRnO6VBb0xiMbhWRwim8ZJieCJZUwlRqVG%2B67TmTXyjCvCNq3t7GnaqdNvSCiwf%2Bwf2l%2BMPHDo%2FSOS4SpeNAab%2B9L%2FTMH4Rh2cTad0cP1Cze6PwQhljW5MicByEj1V862BlkEBYviS6imUpLIAupqPHzsBLCbhZOwDLZktJtQg1r5CLd2uuExfy92PB7HcsCr7V7O84G6Qqvk0u7F1yX%2BNx1er4HwrnHkhZDiedjRUl6A1IMwlkvMM299xwWxxEpKH9YyCU%2FX2opQM9AjnormkmNXAokPhrB1vPO00ag5yROrRHXhXaVcBhQgVXRgAhzMK5cNhaTilEumO0JYMBS05ew2XPoV0VPT3N7bkXesraf2rl9edxNSrQpo7nrML3XsmgEQ7KhEvAkpSlSRukNMfFY0%2FfU%2Bwrs21i3koC026TnsWXhMtfkZ%2F8hD6upofPuBhNXu7bO3M8xJKZCBW5WXIWoQhjmwp3dW8HCKFtlBKrIKltzSHadxC8ruIZRWWsviXRp8OVFzvoGoWetuUzPhUQTCDxvHEBjqkAbnKhOvyQZcs5iT%2FEDuaJvOycXOi3NYkhGGSl1y%2FoNrFGm9BQIThSAyWpcINFYDU7%2BxC3ULofBRFL5gvcFMRvaBeLEJxlJk21aaBO1cyDDaSBniXU2aeMhW2xv1raPZ57MJinMqlRzP19R4GoUvJf1aSBZtxWWKwKRSCpAf5uj0GdLKzkR2IrMcjIBk0H45zqIz3wuthBonY5xmVcURaGWPsSxLv&X-Amz-Signature=4ed7bc68020bdad9b006ec2a18ded596536611ed3379507f4109775fd3a46172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XEDIJS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3nYWlh0rWXVxyPSGgBEkU77Q2RXrMsoBRy0Yt4vjhkAIhAIUPz054nuS%2BEEladSixwTLq7uEAFdQ%2BLJfIGPFqG9xVKv8DCCsQABoMNjM3NDIzMTgzODA1Igw3cblfDLcOOBIPUTwq3AP3VggTqY7Ci66w0b0Ww%2FPosiYzSlMSOKWhN%2BAzIgaldtmVuKEogDAUSwB7yEc7P5B0Q3tXmvBOc86Na2f%2FrdlcKe4yVqAv0aYbNAeRnO6VBb0xiMbhWRwim8ZJieCJZUwlRqVG%2B67TmTXyjCvCNq3t7GnaqdNvSCiwf%2Bwf2l%2BMPHDo%2FSOS4SpeNAab%2B9L%2FTMH4Rh2cTad0cP1Cze6PwQhljW5MicByEj1V862BlkEBYviS6imUpLIAupqPHzsBLCbhZOwDLZktJtQg1r5CLd2uuExfy92PB7HcsCr7V7O84G6Qqvk0u7F1yX%2BNx1er4HwrnHkhZDiedjRUl6A1IMwlkvMM299xwWxxEpKH9YyCU%2FX2opQM9AjnormkmNXAokPhrB1vPO00ag5yROrRHXhXaVcBhQgVXRgAhzMK5cNhaTilEumO0JYMBS05ew2XPoV0VPT3N7bkXesraf2rl9edxNSrQpo7nrML3XsmgEQ7KhEvAkpSlSRukNMfFY0%2FfU%2Bwrs21i3koC026TnsWXhMtfkZ%2F8hD6upofPuBhNXu7bO3M8xJKZCBW5WXIWoQhjmwp3dW8HCKFtlBKrIKltzSHadxC8ruIZRWWsviXRp8OVFzvoGoWetuUzPhUQTCDxvHEBjqkAbnKhOvyQZcs5iT%2FEDuaJvOycXOi3NYkhGGSl1y%2FoNrFGm9BQIThSAyWpcINFYDU7%2BxC3ULofBRFL5gvcFMRvaBeLEJxlJk21aaBO1cyDDaSBniXU2aeMhW2xv1raPZ57MJinMqlRzP19R4GoUvJf1aSBZtxWWKwKRSCpAf5uj0GdLKzkR2IrMcjIBk0H45zqIz3wuthBonY5xmVcURaGWPsSxLv&X-Amz-Signature=55cae9ae28814dec06681229154338fd6224eabbd941405ebd56ebf8f6668a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XEDIJS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3nYWlh0rWXVxyPSGgBEkU77Q2RXrMsoBRy0Yt4vjhkAIhAIUPz054nuS%2BEEladSixwTLq7uEAFdQ%2BLJfIGPFqG9xVKv8DCCsQABoMNjM3NDIzMTgzODA1Igw3cblfDLcOOBIPUTwq3AP3VggTqY7Ci66w0b0Ww%2FPosiYzSlMSOKWhN%2BAzIgaldtmVuKEogDAUSwB7yEc7P5B0Q3tXmvBOc86Na2f%2FrdlcKe4yVqAv0aYbNAeRnO6VBb0xiMbhWRwim8ZJieCJZUwlRqVG%2B67TmTXyjCvCNq3t7GnaqdNvSCiwf%2Bwf2l%2BMPHDo%2FSOS4SpeNAab%2B9L%2FTMH4Rh2cTad0cP1Cze6PwQhljW5MicByEj1V862BlkEBYviS6imUpLIAupqPHzsBLCbhZOwDLZktJtQg1r5CLd2uuExfy92PB7HcsCr7V7O84G6Qqvk0u7F1yX%2BNx1er4HwrnHkhZDiedjRUl6A1IMwlkvMM299xwWxxEpKH9YyCU%2FX2opQM9AjnormkmNXAokPhrB1vPO00ag5yROrRHXhXaVcBhQgVXRgAhzMK5cNhaTilEumO0JYMBS05ew2XPoV0VPT3N7bkXesraf2rl9edxNSrQpo7nrML3XsmgEQ7KhEvAkpSlSRukNMfFY0%2FfU%2Bwrs21i3koC026TnsWXhMtfkZ%2F8hD6upofPuBhNXu7bO3M8xJKZCBW5WXIWoQhjmwp3dW8HCKFtlBKrIKltzSHadxC8ruIZRWWsviXRp8OVFzvoGoWetuUzPhUQTCDxvHEBjqkAbnKhOvyQZcs5iT%2FEDuaJvOycXOi3NYkhGGSl1y%2FoNrFGm9BQIThSAyWpcINFYDU7%2BxC3ULofBRFL5gvcFMRvaBeLEJxlJk21aaBO1cyDDaSBniXU2aeMhW2xv1raPZ57MJinMqlRzP19R4GoUvJf1aSBZtxWWKwKRSCpAf5uj0GdLKzkR2IrMcjIBk0H45zqIz3wuthBonY5xmVcURaGWPsSxLv&X-Amz-Signature=c9c7f5a58fa877b31fa86e5de9547685668d0e05adbc9b80bcb1319424990302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XEDIJS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3nYWlh0rWXVxyPSGgBEkU77Q2RXrMsoBRy0Yt4vjhkAIhAIUPz054nuS%2BEEladSixwTLq7uEAFdQ%2BLJfIGPFqG9xVKv8DCCsQABoMNjM3NDIzMTgzODA1Igw3cblfDLcOOBIPUTwq3AP3VggTqY7Ci66w0b0Ww%2FPosiYzSlMSOKWhN%2BAzIgaldtmVuKEogDAUSwB7yEc7P5B0Q3tXmvBOc86Na2f%2FrdlcKe4yVqAv0aYbNAeRnO6VBb0xiMbhWRwim8ZJieCJZUwlRqVG%2B67TmTXyjCvCNq3t7GnaqdNvSCiwf%2Bwf2l%2BMPHDo%2FSOS4SpeNAab%2B9L%2FTMH4Rh2cTad0cP1Cze6PwQhljW5MicByEj1V862BlkEBYviS6imUpLIAupqPHzsBLCbhZOwDLZktJtQg1r5CLd2uuExfy92PB7HcsCr7V7O84G6Qqvk0u7F1yX%2BNx1er4HwrnHkhZDiedjRUl6A1IMwlkvMM299xwWxxEpKH9YyCU%2FX2opQM9AjnormkmNXAokPhrB1vPO00ag5yROrRHXhXaVcBhQgVXRgAhzMK5cNhaTilEumO0JYMBS05ew2XPoV0VPT3N7bkXesraf2rl9edxNSrQpo7nrML3XsmgEQ7KhEvAkpSlSRukNMfFY0%2FfU%2Bwrs21i3koC026TnsWXhMtfkZ%2F8hD6upofPuBhNXu7bO3M8xJKZCBW5WXIWoQhjmwp3dW8HCKFtlBKrIKltzSHadxC8ruIZRWWsviXRp8OVFzvoGoWetuUzPhUQTCDxvHEBjqkAbnKhOvyQZcs5iT%2FEDuaJvOycXOi3NYkhGGSl1y%2FoNrFGm9BQIThSAyWpcINFYDU7%2BxC3ULofBRFL5gvcFMRvaBeLEJxlJk21aaBO1cyDDaSBniXU2aeMhW2xv1raPZ57MJinMqlRzP19R4GoUvJf1aSBZtxWWKwKRSCpAf5uj0GdLKzkR2IrMcjIBk0H45zqIz3wuthBonY5xmVcURaGWPsSxLv&X-Amz-Signature=b63f3641bf08d60702f436bd64927d861334fc355ba1005a7495a0133c357f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
