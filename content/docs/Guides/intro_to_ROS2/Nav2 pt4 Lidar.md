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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK34R4V6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFyhw4rdcX1SvNWb6V2hcwoNAbhFLSTNii1GHYVLhzUwIhAM0DHhGJL0ESsXuypzjFywl%2F%2Fa84YiFHr86gcUtOULmeKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfzXatnd39hQg8oBQq3ANRgK40b9WIzQK7CjsKKnn1miKblP7Doegvb3XFwWu1PaQIoeCPTXFMAuJ%2B7x5lOev2D05MuNg6VrvkExPRHEOwBbrbXSadp6dqmYZwGQ7LGR3homRRLQFIKkrMHxZyxNj8NXFmwv2Pq7T70cVWE4nB95TCn5ZMy5kDD5nhOX1VYYaQE73e7Nmutwb7JgBZK4U5rx2%2BWso7wJC3vemK8qWYGxE0tOYqcb3CBb%2Fr1w84vgeuuLVmahE7wKKdrNX%2ByAUsrTFEPKpBHlaauWbYwd3keph7kWo64MxJnl%2BbW4O227cFDpY1qKSr95i0IQUxzHpPHsH%2FuyPq16d%2BDm7Lr%2F7%2B9bXv%2FIX%2FOplgkcOj35icRi1GI8djPR2gxfKtd8FTTmkwi0ahN%2BABraKN3Vi9CpCAi1vJQ%2Fv7DkGZK9qnb%2FVL%2Fd1ytwtMD4XGExANcDAwKQD1IZ2N8AXp7Gc1301G5Ch95b9%2B53Z7h6B1R7RW1nQJw9VNERQi0teQ7kQitAIRUZrWE0rkKFTCHecOAd1cGImUNVIVVXft8qtxA1VQle3yBNHmWH1GN4yLdiicT%2FtiioxLfHZNgLY9x1b8XdFkJqDeY7e%2BDxqEKekFQdsAUD2k9FmCvNnwXkT1HTyitjD3ppbFBjqkAT%2Fvm43W%2FYtLvSxQ2g6hsMnhF4gAIm43pdKIxz3QkZtabYoIyjz%2BIIXjmW3q%2FYXoJnPVs0VSeBF2jSEQqGP852buCGcbEDcBZrhKt3Hn5UCRqzRE4t2y2otMW9W3nuDd7cib9t4nLyyjXrHqXC2xJMkZzYI0ApprlhkldKcAbvVlkNU5r6NlGxPl%2BpeYHho96sc1c%2F6Ytjf3ekFzvgS1MvpmV94a&X-Amz-Signature=116da5566bdb743d793473e08679223821d24b7b32f49e963ab2d4526d2ccc0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7AEQNV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEEU5K78s4iIc1YyU7W4u9P3OYxOtvDw1l3r07V3dr%2FAIgYm1h3qpb8ZrtWOqJMhZCLXkidb%2B4wAjh6mcnwD6VU5oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo2cuSl7z8jw990eyrcA7pEnnlvO4zXdJA4%2BbciSJbxKB6nrib1WqQ183YlGj9pKFPq2SbClg7OORqtGmAdB18B40Ote9K5Vr9Wxyarr7NC9s1QkRoco6ErPhRqyFwF6pYKvBp1plpDlHIKihGHqu%2FkSIr1c8cJFX0x8J2jKJ9LTg3T1%2B2Cf3MEgf76RG7gW6s759D7%2FH9aqEjtImegUjXjtNHSy5ZRypAHMQ749UaEayX02QIGSY6UdAU7estaDw1eZcEOZnRlBEtBzS1pskpHc8Zrmjw%2BjdpFb7vqWVR%2FTsm8R%2FzOlYdLeFZGuqJKQZB1n7ivtUEqO832xsW1seewcCXVlvxEcJPcV1v431l7DV2udxItMf190cQbykGHq5%2BpP%2B4iHFL1Bf61375C33arasz5p4PZqG2yGkd%2FNwHdxd3zcl6VR%2FEU4EVscWn9XeRk4%2FNtHuItFDfp3CrKwVebUPYbURzW2XZZ9ijxDaJrpFti9IOoOlc7rpllDnS5kxwQtQ9SRjmbhp3Wf0lwED72GXBtLE78JR2FzOPVZvA7a7CmJ5kj4h2hfPYavSG5gin393mTPcQiMgzV5ZmFIivYtznDJk4gexNjt1G6Be7aXudEOgHa9XLmn029x5JM4DKJH2K%2Fin9q5mbQMJSnlsUGOqUBFW9u4NPhfrq9b4KjfOMuQDcIeWiFVoh93k7Aa2ryJxQQlHIK0aGMb396I0ZVwoZg2y1sfHWfLRyUpJyftNOG5W8vPK6jeu0QQvgwcn3FSt0suzFFKDNuylOx0N1fbStMJ%2BZoVuLlNnRI8csCFRv%2FzrYKD8GJnrv0qDgCACTGDRIS8MOCyDb%2BL52e%2B%2B387iMMs5egfwuCtmzXeoQ%2FJ%2BLt54AZqN9P&X-Amz-Signature=103a979d379f06468208064c0f30c8daa4279b1ff828b551fa64ef1689182a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7AEQNV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEEU5K78s4iIc1YyU7W4u9P3OYxOtvDw1l3r07V3dr%2FAIgYm1h3qpb8ZrtWOqJMhZCLXkidb%2B4wAjh6mcnwD6VU5oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo2cuSl7z8jw990eyrcA7pEnnlvO4zXdJA4%2BbciSJbxKB6nrib1WqQ183YlGj9pKFPq2SbClg7OORqtGmAdB18B40Ote9K5Vr9Wxyarr7NC9s1QkRoco6ErPhRqyFwF6pYKvBp1plpDlHIKihGHqu%2FkSIr1c8cJFX0x8J2jKJ9LTg3T1%2B2Cf3MEgf76RG7gW6s759D7%2FH9aqEjtImegUjXjtNHSy5ZRypAHMQ749UaEayX02QIGSY6UdAU7estaDw1eZcEOZnRlBEtBzS1pskpHc8Zrmjw%2BjdpFb7vqWVR%2FTsm8R%2FzOlYdLeFZGuqJKQZB1n7ivtUEqO832xsW1seewcCXVlvxEcJPcV1v431l7DV2udxItMf190cQbykGHq5%2BpP%2B4iHFL1Bf61375C33arasz5p4PZqG2yGkd%2FNwHdxd3zcl6VR%2FEU4EVscWn9XeRk4%2FNtHuItFDfp3CrKwVebUPYbURzW2XZZ9ijxDaJrpFti9IOoOlc7rpllDnS5kxwQtQ9SRjmbhp3Wf0lwED72GXBtLE78JR2FzOPVZvA7a7CmJ5kj4h2hfPYavSG5gin393mTPcQiMgzV5ZmFIivYtznDJk4gexNjt1G6Be7aXudEOgHa9XLmn029x5JM4DKJH2K%2Fin9q5mbQMJSnlsUGOqUBFW9u4NPhfrq9b4KjfOMuQDcIeWiFVoh93k7Aa2ryJxQQlHIK0aGMb396I0ZVwoZg2y1sfHWfLRyUpJyftNOG5W8vPK6jeu0QQvgwcn3FSt0suzFFKDNuylOx0N1fbStMJ%2BZoVuLlNnRI8csCFRv%2FzrYKD8GJnrv0qDgCACTGDRIS8MOCyDb%2BL52e%2B%2B387iMMs5egfwuCtmzXeoQ%2FJ%2BLt54AZqN9P&X-Amz-Signature=dfc39139d596b43694c8938e803e874d7f610ea54ce6d20461e28bd4cc28594a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7AEQNV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEEU5K78s4iIc1YyU7W4u9P3OYxOtvDw1l3r07V3dr%2FAIgYm1h3qpb8ZrtWOqJMhZCLXkidb%2B4wAjh6mcnwD6VU5oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo2cuSl7z8jw990eyrcA7pEnnlvO4zXdJA4%2BbciSJbxKB6nrib1WqQ183YlGj9pKFPq2SbClg7OORqtGmAdB18B40Ote9K5Vr9Wxyarr7NC9s1QkRoco6ErPhRqyFwF6pYKvBp1plpDlHIKihGHqu%2FkSIr1c8cJFX0x8J2jKJ9LTg3T1%2B2Cf3MEgf76RG7gW6s759D7%2FH9aqEjtImegUjXjtNHSy5ZRypAHMQ749UaEayX02QIGSY6UdAU7estaDw1eZcEOZnRlBEtBzS1pskpHc8Zrmjw%2BjdpFb7vqWVR%2FTsm8R%2FzOlYdLeFZGuqJKQZB1n7ivtUEqO832xsW1seewcCXVlvxEcJPcV1v431l7DV2udxItMf190cQbykGHq5%2BpP%2B4iHFL1Bf61375C33arasz5p4PZqG2yGkd%2FNwHdxd3zcl6VR%2FEU4EVscWn9XeRk4%2FNtHuItFDfp3CrKwVebUPYbURzW2XZZ9ijxDaJrpFti9IOoOlc7rpllDnS5kxwQtQ9SRjmbhp3Wf0lwED72GXBtLE78JR2FzOPVZvA7a7CmJ5kj4h2hfPYavSG5gin393mTPcQiMgzV5ZmFIivYtznDJk4gexNjt1G6Be7aXudEOgHa9XLmn029x5JM4DKJH2K%2Fin9q5mbQMJSnlsUGOqUBFW9u4NPhfrq9b4KjfOMuQDcIeWiFVoh93k7Aa2ryJxQQlHIK0aGMb396I0ZVwoZg2y1sfHWfLRyUpJyftNOG5W8vPK6jeu0QQvgwcn3FSt0suzFFKDNuylOx0N1fbStMJ%2BZoVuLlNnRI8csCFRv%2FzrYKD8GJnrv0qDgCACTGDRIS8MOCyDb%2BL52e%2B%2B387iMMs5egfwuCtmzXeoQ%2FJ%2BLt54AZqN9P&X-Amz-Signature=609da7d629ba49b997b7b05f28b83cf521798f09763eafdba12918b0c9ad045d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7AEQNV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEEU5K78s4iIc1YyU7W4u9P3OYxOtvDw1l3r07V3dr%2FAIgYm1h3qpb8ZrtWOqJMhZCLXkidb%2B4wAjh6mcnwD6VU5oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo2cuSl7z8jw990eyrcA7pEnnlvO4zXdJA4%2BbciSJbxKB6nrib1WqQ183YlGj9pKFPq2SbClg7OORqtGmAdB18B40Ote9K5Vr9Wxyarr7NC9s1QkRoco6ErPhRqyFwF6pYKvBp1plpDlHIKihGHqu%2FkSIr1c8cJFX0x8J2jKJ9LTg3T1%2B2Cf3MEgf76RG7gW6s759D7%2FH9aqEjtImegUjXjtNHSy5ZRypAHMQ749UaEayX02QIGSY6UdAU7estaDw1eZcEOZnRlBEtBzS1pskpHc8Zrmjw%2BjdpFb7vqWVR%2FTsm8R%2FzOlYdLeFZGuqJKQZB1n7ivtUEqO832xsW1seewcCXVlvxEcJPcV1v431l7DV2udxItMf190cQbykGHq5%2BpP%2B4iHFL1Bf61375C33arasz5p4PZqG2yGkd%2FNwHdxd3zcl6VR%2FEU4EVscWn9XeRk4%2FNtHuItFDfp3CrKwVebUPYbURzW2XZZ9ijxDaJrpFti9IOoOlc7rpllDnS5kxwQtQ9SRjmbhp3Wf0lwED72GXBtLE78JR2FzOPVZvA7a7CmJ5kj4h2hfPYavSG5gin393mTPcQiMgzV5ZmFIivYtznDJk4gexNjt1G6Be7aXudEOgHa9XLmn029x5JM4DKJH2K%2Fin9q5mbQMJSnlsUGOqUBFW9u4NPhfrq9b4KjfOMuQDcIeWiFVoh93k7Aa2ryJxQQlHIK0aGMb396I0ZVwoZg2y1sfHWfLRyUpJyftNOG5W8vPK6jeu0QQvgwcn3FSt0suzFFKDNuylOx0N1fbStMJ%2BZoVuLlNnRI8csCFRv%2FzrYKD8GJnrv0qDgCACTGDRIS8MOCyDb%2BL52e%2B%2B387iMMs5egfwuCtmzXeoQ%2FJ%2BLt54AZqN9P&X-Amz-Signature=6b174e7438aabf329a451442d3a77cf617bf4e3de09559fe6e9ffa2c228d71f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7AEQNV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEEU5K78s4iIc1YyU7W4u9P3OYxOtvDw1l3r07V3dr%2FAIgYm1h3qpb8ZrtWOqJMhZCLXkidb%2B4wAjh6mcnwD6VU5oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo2cuSl7z8jw990eyrcA7pEnnlvO4zXdJA4%2BbciSJbxKB6nrib1WqQ183YlGj9pKFPq2SbClg7OORqtGmAdB18B40Ote9K5Vr9Wxyarr7NC9s1QkRoco6ErPhRqyFwF6pYKvBp1plpDlHIKihGHqu%2FkSIr1c8cJFX0x8J2jKJ9LTg3T1%2B2Cf3MEgf76RG7gW6s759D7%2FH9aqEjtImegUjXjtNHSy5ZRypAHMQ749UaEayX02QIGSY6UdAU7estaDw1eZcEOZnRlBEtBzS1pskpHc8Zrmjw%2BjdpFb7vqWVR%2FTsm8R%2FzOlYdLeFZGuqJKQZB1n7ivtUEqO832xsW1seewcCXVlvxEcJPcV1v431l7DV2udxItMf190cQbykGHq5%2BpP%2B4iHFL1Bf61375C33arasz5p4PZqG2yGkd%2FNwHdxd3zcl6VR%2FEU4EVscWn9XeRk4%2FNtHuItFDfp3CrKwVebUPYbURzW2XZZ9ijxDaJrpFti9IOoOlc7rpllDnS5kxwQtQ9SRjmbhp3Wf0lwED72GXBtLE78JR2FzOPVZvA7a7CmJ5kj4h2hfPYavSG5gin393mTPcQiMgzV5ZmFIivYtznDJk4gexNjt1G6Be7aXudEOgHa9XLmn029x5JM4DKJH2K%2Fin9q5mbQMJSnlsUGOqUBFW9u4NPhfrq9b4KjfOMuQDcIeWiFVoh93k7Aa2ryJxQQlHIK0aGMb396I0ZVwoZg2y1sfHWfLRyUpJyftNOG5W8vPK6jeu0QQvgwcn3FSt0suzFFKDNuylOx0N1fbStMJ%2BZoVuLlNnRI8csCFRv%2FzrYKD8GJnrv0qDgCACTGDRIS8MOCyDb%2BL52e%2B%2B387iMMs5egfwuCtmzXeoQ%2FJ%2BLt54AZqN9P&X-Amz-Signature=9ca6d816d76fb66b9ef77738eb5eb6e4ec74ca89dcf6be40a013bcac19b2fd71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7AEQNV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEEU5K78s4iIc1YyU7W4u9P3OYxOtvDw1l3r07V3dr%2FAIgYm1h3qpb8ZrtWOqJMhZCLXkidb%2B4wAjh6mcnwD6VU5oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo2cuSl7z8jw990eyrcA7pEnnlvO4zXdJA4%2BbciSJbxKB6nrib1WqQ183YlGj9pKFPq2SbClg7OORqtGmAdB18B40Ote9K5Vr9Wxyarr7NC9s1QkRoco6ErPhRqyFwF6pYKvBp1plpDlHIKihGHqu%2FkSIr1c8cJFX0x8J2jKJ9LTg3T1%2B2Cf3MEgf76RG7gW6s759D7%2FH9aqEjtImegUjXjtNHSy5ZRypAHMQ749UaEayX02QIGSY6UdAU7estaDw1eZcEOZnRlBEtBzS1pskpHc8Zrmjw%2BjdpFb7vqWVR%2FTsm8R%2FzOlYdLeFZGuqJKQZB1n7ivtUEqO832xsW1seewcCXVlvxEcJPcV1v431l7DV2udxItMf190cQbykGHq5%2BpP%2B4iHFL1Bf61375C33arasz5p4PZqG2yGkd%2FNwHdxd3zcl6VR%2FEU4EVscWn9XeRk4%2FNtHuItFDfp3CrKwVebUPYbURzW2XZZ9ijxDaJrpFti9IOoOlc7rpllDnS5kxwQtQ9SRjmbhp3Wf0lwED72GXBtLE78JR2FzOPVZvA7a7CmJ5kj4h2hfPYavSG5gin393mTPcQiMgzV5ZmFIivYtznDJk4gexNjt1G6Be7aXudEOgHa9XLmn029x5JM4DKJH2K%2Fin9q5mbQMJSnlsUGOqUBFW9u4NPhfrq9b4KjfOMuQDcIeWiFVoh93k7Aa2ryJxQQlHIK0aGMb396I0ZVwoZg2y1sfHWfLRyUpJyftNOG5W8vPK6jeu0QQvgwcn3FSt0suzFFKDNuylOx0N1fbStMJ%2BZoVuLlNnRI8csCFRv%2FzrYKD8GJnrv0qDgCACTGDRIS8MOCyDb%2BL52e%2B%2B387iMMs5egfwuCtmzXeoQ%2FJ%2BLt54AZqN9P&X-Amz-Signature=b0f32a95e593734e35e4ee321cef8590e1bccc23f7eea8ffd9ae123c877689f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7AEQNV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEEU5K78s4iIc1YyU7W4u9P3OYxOtvDw1l3r07V3dr%2FAIgYm1h3qpb8ZrtWOqJMhZCLXkidb%2B4wAjh6mcnwD6VU5oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo2cuSl7z8jw990eyrcA7pEnnlvO4zXdJA4%2BbciSJbxKB6nrib1WqQ183YlGj9pKFPq2SbClg7OORqtGmAdB18B40Ote9K5Vr9Wxyarr7NC9s1QkRoco6ErPhRqyFwF6pYKvBp1plpDlHIKihGHqu%2FkSIr1c8cJFX0x8J2jKJ9LTg3T1%2B2Cf3MEgf76RG7gW6s759D7%2FH9aqEjtImegUjXjtNHSy5ZRypAHMQ749UaEayX02QIGSY6UdAU7estaDw1eZcEOZnRlBEtBzS1pskpHc8Zrmjw%2BjdpFb7vqWVR%2FTsm8R%2FzOlYdLeFZGuqJKQZB1n7ivtUEqO832xsW1seewcCXVlvxEcJPcV1v431l7DV2udxItMf190cQbykGHq5%2BpP%2B4iHFL1Bf61375C33arasz5p4PZqG2yGkd%2FNwHdxd3zcl6VR%2FEU4EVscWn9XeRk4%2FNtHuItFDfp3CrKwVebUPYbURzW2XZZ9ijxDaJrpFti9IOoOlc7rpllDnS5kxwQtQ9SRjmbhp3Wf0lwED72GXBtLE78JR2FzOPVZvA7a7CmJ5kj4h2hfPYavSG5gin393mTPcQiMgzV5ZmFIivYtznDJk4gexNjt1G6Be7aXudEOgHa9XLmn029x5JM4DKJH2K%2Fin9q5mbQMJSnlsUGOqUBFW9u4NPhfrq9b4KjfOMuQDcIeWiFVoh93k7Aa2ryJxQQlHIK0aGMb396I0ZVwoZg2y1sfHWfLRyUpJyftNOG5W8vPK6jeu0QQvgwcn3FSt0suzFFKDNuylOx0N1fbStMJ%2BZoVuLlNnRI8csCFRv%2FzrYKD8GJnrv0qDgCACTGDRIS8MOCyDb%2BL52e%2B%2B387iMMs5egfwuCtmzXeoQ%2FJ%2BLt54AZqN9P&X-Amz-Signature=a69e5f4b7f208f19828b8cdd909d5cb12255e99b6ad7504b5ac6443ca9447c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7AEQNV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEEU5K78s4iIc1YyU7W4u9P3OYxOtvDw1l3r07V3dr%2FAIgYm1h3qpb8ZrtWOqJMhZCLXkidb%2B4wAjh6mcnwD6VU5oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo2cuSl7z8jw990eyrcA7pEnnlvO4zXdJA4%2BbciSJbxKB6nrib1WqQ183YlGj9pKFPq2SbClg7OORqtGmAdB18B40Ote9K5Vr9Wxyarr7NC9s1QkRoco6ErPhRqyFwF6pYKvBp1plpDlHIKihGHqu%2FkSIr1c8cJFX0x8J2jKJ9LTg3T1%2B2Cf3MEgf76RG7gW6s759D7%2FH9aqEjtImegUjXjtNHSy5ZRypAHMQ749UaEayX02QIGSY6UdAU7estaDw1eZcEOZnRlBEtBzS1pskpHc8Zrmjw%2BjdpFb7vqWVR%2FTsm8R%2FzOlYdLeFZGuqJKQZB1n7ivtUEqO832xsW1seewcCXVlvxEcJPcV1v431l7DV2udxItMf190cQbykGHq5%2BpP%2B4iHFL1Bf61375C33arasz5p4PZqG2yGkd%2FNwHdxd3zcl6VR%2FEU4EVscWn9XeRk4%2FNtHuItFDfp3CrKwVebUPYbURzW2XZZ9ijxDaJrpFti9IOoOlc7rpllDnS5kxwQtQ9SRjmbhp3Wf0lwED72GXBtLE78JR2FzOPVZvA7a7CmJ5kj4h2hfPYavSG5gin393mTPcQiMgzV5ZmFIivYtznDJk4gexNjt1G6Be7aXudEOgHa9XLmn029x5JM4DKJH2K%2Fin9q5mbQMJSnlsUGOqUBFW9u4NPhfrq9b4KjfOMuQDcIeWiFVoh93k7Aa2ryJxQQlHIK0aGMb396I0ZVwoZg2y1sfHWfLRyUpJyftNOG5W8vPK6jeu0QQvgwcn3FSt0suzFFKDNuylOx0N1fbStMJ%2BZoVuLlNnRI8csCFRv%2FzrYKD8GJnrv0qDgCACTGDRIS8MOCyDb%2BL52e%2B%2B387iMMs5egfwuCtmzXeoQ%2FJ%2BLt54AZqN9P&X-Amz-Signature=fc6e1a2c7443e906a416665e63107a0ba8aa46b50a53382508e014cd97e0995f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7AEQNV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEEU5K78s4iIc1YyU7W4u9P3OYxOtvDw1l3r07V3dr%2FAIgYm1h3qpb8ZrtWOqJMhZCLXkidb%2B4wAjh6mcnwD6VU5oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo2cuSl7z8jw990eyrcA7pEnnlvO4zXdJA4%2BbciSJbxKB6nrib1WqQ183YlGj9pKFPq2SbClg7OORqtGmAdB18B40Ote9K5Vr9Wxyarr7NC9s1QkRoco6ErPhRqyFwF6pYKvBp1plpDlHIKihGHqu%2FkSIr1c8cJFX0x8J2jKJ9LTg3T1%2B2Cf3MEgf76RG7gW6s759D7%2FH9aqEjtImegUjXjtNHSy5ZRypAHMQ749UaEayX02QIGSY6UdAU7estaDw1eZcEOZnRlBEtBzS1pskpHc8Zrmjw%2BjdpFb7vqWVR%2FTsm8R%2FzOlYdLeFZGuqJKQZB1n7ivtUEqO832xsW1seewcCXVlvxEcJPcV1v431l7DV2udxItMf190cQbykGHq5%2BpP%2B4iHFL1Bf61375C33arasz5p4PZqG2yGkd%2FNwHdxd3zcl6VR%2FEU4EVscWn9XeRk4%2FNtHuItFDfp3CrKwVebUPYbURzW2XZZ9ijxDaJrpFti9IOoOlc7rpllDnS5kxwQtQ9SRjmbhp3Wf0lwED72GXBtLE78JR2FzOPVZvA7a7CmJ5kj4h2hfPYavSG5gin393mTPcQiMgzV5ZmFIivYtznDJk4gexNjt1G6Be7aXudEOgHa9XLmn029x5JM4DKJH2K%2Fin9q5mbQMJSnlsUGOqUBFW9u4NPhfrq9b4KjfOMuQDcIeWiFVoh93k7Aa2ryJxQQlHIK0aGMb396I0ZVwoZg2y1sfHWfLRyUpJyftNOG5W8vPK6jeu0QQvgwcn3FSt0suzFFKDNuylOx0N1fbStMJ%2BZoVuLlNnRI8csCFRv%2FzrYKD8GJnrv0qDgCACTGDRIS8MOCyDb%2BL52e%2B%2B387iMMs5egfwuCtmzXeoQ%2FJ%2BLt54AZqN9P&X-Amz-Signature=d8005dd2fdc3d1a8d1ce23141809c2577dc19e0d3a97fff8c83240d6fb632df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7AEQNV%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEEU5K78s4iIc1YyU7W4u9P3OYxOtvDw1l3r07V3dr%2FAIgYm1h3qpb8ZrtWOqJMhZCLXkidb%2B4wAjh6mcnwD6VU5oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo2cuSl7z8jw990eyrcA7pEnnlvO4zXdJA4%2BbciSJbxKB6nrib1WqQ183YlGj9pKFPq2SbClg7OORqtGmAdB18B40Ote9K5Vr9Wxyarr7NC9s1QkRoco6ErPhRqyFwF6pYKvBp1plpDlHIKihGHqu%2FkSIr1c8cJFX0x8J2jKJ9LTg3T1%2B2Cf3MEgf76RG7gW6s759D7%2FH9aqEjtImegUjXjtNHSy5ZRypAHMQ749UaEayX02QIGSY6UdAU7estaDw1eZcEOZnRlBEtBzS1pskpHc8Zrmjw%2BjdpFb7vqWVR%2FTsm8R%2FzOlYdLeFZGuqJKQZB1n7ivtUEqO832xsW1seewcCXVlvxEcJPcV1v431l7DV2udxItMf190cQbykGHq5%2BpP%2B4iHFL1Bf61375C33arasz5p4PZqG2yGkd%2FNwHdxd3zcl6VR%2FEU4EVscWn9XeRk4%2FNtHuItFDfp3CrKwVebUPYbURzW2XZZ9ijxDaJrpFti9IOoOlc7rpllDnS5kxwQtQ9SRjmbhp3Wf0lwED72GXBtLE78JR2FzOPVZvA7a7CmJ5kj4h2hfPYavSG5gin393mTPcQiMgzV5ZmFIivYtznDJk4gexNjt1G6Be7aXudEOgHa9XLmn029x5JM4DKJH2K%2Fin9q5mbQMJSnlsUGOqUBFW9u4NPhfrq9b4KjfOMuQDcIeWiFVoh93k7Aa2ryJxQQlHIK0aGMb396I0ZVwoZg2y1sfHWfLRyUpJyftNOG5W8vPK6jeu0QQvgwcn3FSt0suzFFKDNuylOx0N1fbStMJ%2BZoVuLlNnRI8csCFRv%2FzrYKD8GJnrv0qDgCACTGDRIS8MOCyDb%2BL52e%2B%2B387iMMs5egfwuCtmzXeoQ%2FJ%2BLt54AZqN9P&X-Amz-Signature=6b174e7438aabf329a451442d3a77cf617bf4e3de09559fe6e9ffa2c228d71f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
