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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLH3VPYR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCIvTfYh985PPDXS8jrg5i5JKLdtQOko0z384fIFwS52AIgPiDfF5YB5lAIPW1w1R5GXdWusD1GwTqQMnQzpA93ftEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMPR8ny06KKxLHwO3SrcAyMERAeF5Z7ZR1nPHc%2BX2kJl16SvVs2vW9daai2PfgNkRsrpkrCw8mVdUgwTCgO5q%2BrwffThWG43eVzxxR2XZVhAEdjw%2BSu9dX%2F6z2n%2Bjle9Y%2Byt7x4lNpFbOdD4AybLx%2B8h8L5VQpujxYX%2Bl4bfq37551Poo%2F1LbxI%2BfDTdAGDlLhW66MG8UjU8cCrKkSj%2FIpz4sMA8v5vLd1%2Fp%2Br7qSislx2n2O95z5zbfv9OuhMAb03aSYXIAVTxD%2BtKHbJZE7SgYulbvuHUoUMZhcU81c%2BLhi9RFKFj3MOzQx9oC8%2BXW8s7KpWS050rRTZUf7Lv63GyIO8n%2FSm7w8v5JAPiNHVY8jND1ATbXY7qOBmJiyfGXZG74faSHMu0rTthgP5UUA6vw92I%2FolLjm5uO6AaWht%2Be%2B0dCSvyPvuRIXarwLSFhPiISGdP1gY48BjesKy1RnTlOFddW64dzuhz8ljzem9QLJekMDITCGIz4V56PYQDgmpkvDGDZIcc%2BHeVHYeIDQrm08c1aGqEFGrg6OGG8pzl9TbPgNBgOdLyyOJ2MbPmu41RPCW8GY9wiAdarYzKgTwEl%2BKB1VybwfOKvR8CJxe6v8ez4DVfx2LZ3HHlSXoEzw9QIoxbaPDtejrtAMNTqzsQGOqUBkqokNsj5tZthneCIu2POy%2FiiH38L4AXQMEW0I%2Fxj4x%2Fjjf3sPZSOI%2FtgjB%2F9ZO7yeBiPGD30F0nZ3gzW9f6P3tL1v%2B2kgVDImmMWzXv9bwiQkC8ulP5UCdBWZiC58fQhrIJWgf7kb0PBh43MMMdobGu3rKz0c3FHUVGf95ibumCAkVSNe8pzU51Z0l02ggdwwVdM67brStMZvHXga7s00c1okQbr&X-Amz-Signature=3388b2a7b88766c66d62be054210daa9f289739d0d2de2d51f7da2a8d02c535a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PBWHMH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFYVCnIqraZ3GuoHecuMiORJ8uuwBDBvh1V8jKQ5mF1fAiAT13cu0iTPbTMGi5ZTnSCkJ1kqpLTRA4WEIT7US8Zq2ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzrld3SPKdchvG2uFKtwDcZTDn5K%2Bw6Vi%2BZz415AdPlM6DwfRzufxhvBaI2Kjk6aB30%2Ful28OcV4py0Y6OgyZweMJMieZxl%2FWX6q2tdrdH8XD%2B0xRd%2FI3147kX2lD2zwQicLSu1XROtMLbbthTIywVSSwVBNhbQw9RCufydrdz0m7icumbpnY873aKihDKzD4%2BTt1miSN5cY8DzFJnsl6L45LZh%2F44gNIkxiSsuGquRLAnk6opzV6N1Up91S4kIVMGUbRxrmuPjEJqPHbNVjNqjep1Mna6%2BYQkzgtKVXHF2zrkZvlDXlbNu8p3q8Bh5CSojP8wn0VSwgCkj5QsF1zIl7Nk%2BTbaYLPkSWHQCBN4rafQDFE2TVXl%2FmtTv1R1PGfOnq%2F2r1PK%2BGDt6vWnWT2R%2FZ%2FVr%2BNzYRPG0Ifx07hFAyDlijpRWxWu41TOHuQHI4%2BzLv9Kp%2F53w7KwFTM4Xc6Ot2HGvUmXRcgKoe0X5yK2giR3mGJRg3JeKY4%2BB82A5xJ1ZUO8rriRWgK1Ec6vzeOxUVZ9htyF5Dfp4YldeWLyXCUj0%2F02hu0hdDoAqyfWslT3zX3XcakMi%2BRE7B25j%2FbO0FF5XpgFKCfzJAee49SGSmTkP%2FWzzN1vFZYuVHkeJhbrcarfwbkfi%2BgbZUww%2BrOxAY6pgFywC9%2F%2FeLPPhCAifDV92F8NoGNLBjNmiMBsulmOGUWY6kHkAorIlItg4gYt0qtbh2Qcc9anqwbT5W0ZypWMeU7rNC%2FxvIkQ%2F7QZOt73Ce6DTdiPO6T%2FyX29YuSa5jMHwEt0cUAwCElCadVC1Lan%2Fa8fYxZLqSomyr8WXLbN7dmeyz92YkwoZzSmZkRxJIMc4JR27i9hHRUxppkIY1aC1qVt2b5LYqS&X-Amz-Signature=9d8fa017d329224984b00b045ed92bbd169071f00c0274fbbe3f65235570134e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PBWHMH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFYVCnIqraZ3GuoHecuMiORJ8uuwBDBvh1V8jKQ5mF1fAiAT13cu0iTPbTMGi5ZTnSCkJ1kqpLTRA4WEIT7US8Zq2ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzrld3SPKdchvG2uFKtwDcZTDn5K%2Bw6Vi%2BZz415AdPlM6DwfRzufxhvBaI2Kjk6aB30%2Ful28OcV4py0Y6OgyZweMJMieZxl%2FWX6q2tdrdH8XD%2B0xRd%2FI3147kX2lD2zwQicLSu1XROtMLbbthTIywVSSwVBNhbQw9RCufydrdz0m7icumbpnY873aKihDKzD4%2BTt1miSN5cY8DzFJnsl6L45LZh%2F44gNIkxiSsuGquRLAnk6opzV6N1Up91S4kIVMGUbRxrmuPjEJqPHbNVjNqjep1Mna6%2BYQkzgtKVXHF2zrkZvlDXlbNu8p3q8Bh5CSojP8wn0VSwgCkj5QsF1zIl7Nk%2BTbaYLPkSWHQCBN4rafQDFE2TVXl%2FmtTv1R1PGfOnq%2F2r1PK%2BGDt6vWnWT2R%2FZ%2FVr%2BNzYRPG0Ifx07hFAyDlijpRWxWu41TOHuQHI4%2BzLv9Kp%2F53w7KwFTM4Xc6Ot2HGvUmXRcgKoe0X5yK2giR3mGJRg3JeKY4%2BB82A5xJ1ZUO8rriRWgK1Ec6vzeOxUVZ9htyF5Dfp4YldeWLyXCUj0%2F02hu0hdDoAqyfWslT3zX3XcakMi%2BRE7B25j%2FbO0FF5XpgFKCfzJAee49SGSmTkP%2FWzzN1vFZYuVHkeJhbrcarfwbkfi%2BgbZUww%2BrOxAY6pgFywC9%2F%2FeLPPhCAifDV92F8NoGNLBjNmiMBsulmOGUWY6kHkAorIlItg4gYt0qtbh2Qcc9anqwbT5W0ZypWMeU7rNC%2FxvIkQ%2F7QZOt73Ce6DTdiPO6T%2FyX29YuSa5jMHwEt0cUAwCElCadVC1Lan%2Fa8fYxZLqSomyr8WXLbN7dmeyz92YkwoZzSmZkRxJIMc4JR27i9hHRUxppkIY1aC1qVt2b5LYqS&X-Amz-Signature=5e32ebc942cee6442b57af75f286d630d9b8b220d015d2c5570ef0086f33483a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PBWHMH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFYVCnIqraZ3GuoHecuMiORJ8uuwBDBvh1V8jKQ5mF1fAiAT13cu0iTPbTMGi5ZTnSCkJ1kqpLTRA4WEIT7US8Zq2ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzrld3SPKdchvG2uFKtwDcZTDn5K%2Bw6Vi%2BZz415AdPlM6DwfRzufxhvBaI2Kjk6aB30%2Ful28OcV4py0Y6OgyZweMJMieZxl%2FWX6q2tdrdH8XD%2B0xRd%2FI3147kX2lD2zwQicLSu1XROtMLbbthTIywVSSwVBNhbQw9RCufydrdz0m7icumbpnY873aKihDKzD4%2BTt1miSN5cY8DzFJnsl6L45LZh%2F44gNIkxiSsuGquRLAnk6opzV6N1Up91S4kIVMGUbRxrmuPjEJqPHbNVjNqjep1Mna6%2BYQkzgtKVXHF2zrkZvlDXlbNu8p3q8Bh5CSojP8wn0VSwgCkj5QsF1zIl7Nk%2BTbaYLPkSWHQCBN4rafQDFE2TVXl%2FmtTv1R1PGfOnq%2F2r1PK%2BGDt6vWnWT2R%2FZ%2FVr%2BNzYRPG0Ifx07hFAyDlijpRWxWu41TOHuQHI4%2BzLv9Kp%2F53w7KwFTM4Xc6Ot2HGvUmXRcgKoe0X5yK2giR3mGJRg3JeKY4%2BB82A5xJ1ZUO8rriRWgK1Ec6vzeOxUVZ9htyF5Dfp4YldeWLyXCUj0%2F02hu0hdDoAqyfWslT3zX3XcakMi%2BRE7B25j%2FbO0FF5XpgFKCfzJAee49SGSmTkP%2FWzzN1vFZYuVHkeJhbrcarfwbkfi%2BgbZUww%2BrOxAY6pgFywC9%2F%2FeLPPhCAifDV92F8NoGNLBjNmiMBsulmOGUWY6kHkAorIlItg4gYt0qtbh2Qcc9anqwbT5W0ZypWMeU7rNC%2FxvIkQ%2F7QZOt73Ce6DTdiPO6T%2FyX29YuSa5jMHwEt0cUAwCElCadVC1Lan%2Fa8fYxZLqSomyr8WXLbN7dmeyz92YkwoZzSmZkRxJIMc4JR27i9hHRUxppkIY1aC1qVt2b5LYqS&X-Amz-Signature=977caf53a91d50e9073690e9290537e1d24d3d720470572359fd6a49bb239524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PBWHMH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFYVCnIqraZ3GuoHecuMiORJ8uuwBDBvh1V8jKQ5mF1fAiAT13cu0iTPbTMGi5ZTnSCkJ1kqpLTRA4WEIT7US8Zq2ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzrld3SPKdchvG2uFKtwDcZTDn5K%2Bw6Vi%2BZz415AdPlM6DwfRzufxhvBaI2Kjk6aB30%2Ful28OcV4py0Y6OgyZweMJMieZxl%2FWX6q2tdrdH8XD%2B0xRd%2FI3147kX2lD2zwQicLSu1XROtMLbbthTIywVSSwVBNhbQw9RCufydrdz0m7icumbpnY873aKihDKzD4%2BTt1miSN5cY8DzFJnsl6L45LZh%2F44gNIkxiSsuGquRLAnk6opzV6N1Up91S4kIVMGUbRxrmuPjEJqPHbNVjNqjep1Mna6%2BYQkzgtKVXHF2zrkZvlDXlbNu8p3q8Bh5CSojP8wn0VSwgCkj5QsF1zIl7Nk%2BTbaYLPkSWHQCBN4rafQDFE2TVXl%2FmtTv1R1PGfOnq%2F2r1PK%2BGDt6vWnWT2R%2FZ%2FVr%2BNzYRPG0Ifx07hFAyDlijpRWxWu41TOHuQHI4%2BzLv9Kp%2F53w7KwFTM4Xc6Ot2HGvUmXRcgKoe0X5yK2giR3mGJRg3JeKY4%2BB82A5xJ1ZUO8rriRWgK1Ec6vzeOxUVZ9htyF5Dfp4YldeWLyXCUj0%2F02hu0hdDoAqyfWslT3zX3XcakMi%2BRE7B25j%2FbO0FF5XpgFKCfzJAee49SGSmTkP%2FWzzN1vFZYuVHkeJhbrcarfwbkfi%2BgbZUww%2BrOxAY6pgFywC9%2F%2FeLPPhCAifDV92F8NoGNLBjNmiMBsulmOGUWY6kHkAorIlItg4gYt0qtbh2Qcc9anqwbT5W0ZypWMeU7rNC%2FxvIkQ%2F7QZOt73Ce6DTdiPO6T%2FyX29YuSa5jMHwEt0cUAwCElCadVC1Lan%2Fa8fYxZLqSomyr8WXLbN7dmeyz92YkwoZzSmZkRxJIMc4JR27i9hHRUxppkIY1aC1qVt2b5LYqS&X-Amz-Signature=8726a5484afcd4a8a7ab5666b245a026e2d7ad3765c0b06c4f2bdbf82d193923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PBWHMH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFYVCnIqraZ3GuoHecuMiORJ8uuwBDBvh1V8jKQ5mF1fAiAT13cu0iTPbTMGi5ZTnSCkJ1kqpLTRA4WEIT7US8Zq2ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzrld3SPKdchvG2uFKtwDcZTDn5K%2Bw6Vi%2BZz415AdPlM6DwfRzufxhvBaI2Kjk6aB30%2Ful28OcV4py0Y6OgyZweMJMieZxl%2FWX6q2tdrdH8XD%2B0xRd%2FI3147kX2lD2zwQicLSu1XROtMLbbthTIywVSSwVBNhbQw9RCufydrdz0m7icumbpnY873aKihDKzD4%2BTt1miSN5cY8DzFJnsl6L45LZh%2F44gNIkxiSsuGquRLAnk6opzV6N1Up91S4kIVMGUbRxrmuPjEJqPHbNVjNqjep1Mna6%2BYQkzgtKVXHF2zrkZvlDXlbNu8p3q8Bh5CSojP8wn0VSwgCkj5QsF1zIl7Nk%2BTbaYLPkSWHQCBN4rafQDFE2TVXl%2FmtTv1R1PGfOnq%2F2r1PK%2BGDt6vWnWT2R%2FZ%2FVr%2BNzYRPG0Ifx07hFAyDlijpRWxWu41TOHuQHI4%2BzLv9Kp%2F53w7KwFTM4Xc6Ot2HGvUmXRcgKoe0X5yK2giR3mGJRg3JeKY4%2BB82A5xJ1ZUO8rriRWgK1Ec6vzeOxUVZ9htyF5Dfp4YldeWLyXCUj0%2F02hu0hdDoAqyfWslT3zX3XcakMi%2BRE7B25j%2FbO0FF5XpgFKCfzJAee49SGSmTkP%2FWzzN1vFZYuVHkeJhbrcarfwbkfi%2BgbZUww%2BrOxAY6pgFywC9%2F%2FeLPPhCAifDV92F8NoGNLBjNmiMBsulmOGUWY6kHkAorIlItg4gYt0qtbh2Qcc9anqwbT5W0ZypWMeU7rNC%2FxvIkQ%2F7QZOt73Ce6DTdiPO6T%2FyX29YuSa5jMHwEt0cUAwCElCadVC1Lan%2Fa8fYxZLqSomyr8WXLbN7dmeyz92YkwoZzSmZkRxJIMc4JR27i9hHRUxppkIY1aC1qVt2b5LYqS&X-Amz-Signature=32c976a89eec45e91112923c2b8cabc4dcf8e66a6721ea18ead35a4d2518d9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PBWHMH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFYVCnIqraZ3GuoHecuMiORJ8uuwBDBvh1V8jKQ5mF1fAiAT13cu0iTPbTMGi5ZTnSCkJ1kqpLTRA4WEIT7US8Zq2ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzrld3SPKdchvG2uFKtwDcZTDn5K%2Bw6Vi%2BZz415AdPlM6DwfRzufxhvBaI2Kjk6aB30%2Ful28OcV4py0Y6OgyZweMJMieZxl%2FWX6q2tdrdH8XD%2B0xRd%2FI3147kX2lD2zwQicLSu1XROtMLbbthTIywVSSwVBNhbQw9RCufydrdz0m7icumbpnY873aKihDKzD4%2BTt1miSN5cY8DzFJnsl6L45LZh%2F44gNIkxiSsuGquRLAnk6opzV6N1Up91S4kIVMGUbRxrmuPjEJqPHbNVjNqjep1Mna6%2BYQkzgtKVXHF2zrkZvlDXlbNu8p3q8Bh5CSojP8wn0VSwgCkj5QsF1zIl7Nk%2BTbaYLPkSWHQCBN4rafQDFE2TVXl%2FmtTv1R1PGfOnq%2F2r1PK%2BGDt6vWnWT2R%2FZ%2FVr%2BNzYRPG0Ifx07hFAyDlijpRWxWu41TOHuQHI4%2BzLv9Kp%2F53w7KwFTM4Xc6Ot2HGvUmXRcgKoe0X5yK2giR3mGJRg3JeKY4%2BB82A5xJ1ZUO8rriRWgK1Ec6vzeOxUVZ9htyF5Dfp4YldeWLyXCUj0%2F02hu0hdDoAqyfWslT3zX3XcakMi%2BRE7B25j%2FbO0FF5XpgFKCfzJAee49SGSmTkP%2FWzzN1vFZYuVHkeJhbrcarfwbkfi%2BgbZUww%2BrOxAY6pgFywC9%2F%2FeLPPhCAifDV92F8NoGNLBjNmiMBsulmOGUWY6kHkAorIlItg4gYt0qtbh2Qcc9anqwbT5W0ZypWMeU7rNC%2FxvIkQ%2F7QZOt73Ce6DTdiPO6T%2FyX29YuSa5jMHwEt0cUAwCElCadVC1Lan%2Fa8fYxZLqSomyr8WXLbN7dmeyz92YkwoZzSmZkRxJIMc4JR27i9hHRUxppkIY1aC1qVt2b5LYqS&X-Amz-Signature=fa0432fa42046ca40189e581683731ec16ffbc1695687192baa8ef26c8457ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PBWHMH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFYVCnIqraZ3GuoHecuMiORJ8uuwBDBvh1V8jKQ5mF1fAiAT13cu0iTPbTMGi5ZTnSCkJ1kqpLTRA4WEIT7US8Zq2ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzrld3SPKdchvG2uFKtwDcZTDn5K%2Bw6Vi%2BZz415AdPlM6DwfRzufxhvBaI2Kjk6aB30%2Ful28OcV4py0Y6OgyZweMJMieZxl%2FWX6q2tdrdH8XD%2B0xRd%2FI3147kX2lD2zwQicLSu1XROtMLbbthTIywVSSwVBNhbQw9RCufydrdz0m7icumbpnY873aKihDKzD4%2BTt1miSN5cY8DzFJnsl6L45LZh%2F44gNIkxiSsuGquRLAnk6opzV6N1Up91S4kIVMGUbRxrmuPjEJqPHbNVjNqjep1Mna6%2BYQkzgtKVXHF2zrkZvlDXlbNu8p3q8Bh5CSojP8wn0VSwgCkj5QsF1zIl7Nk%2BTbaYLPkSWHQCBN4rafQDFE2TVXl%2FmtTv1R1PGfOnq%2F2r1PK%2BGDt6vWnWT2R%2FZ%2FVr%2BNzYRPG0Ifx07hFAyDlijpRWxWu41TOHuQHI4%2BzLv9Kp%2F53w7KwFTM4Xc6Ot2HGvUmXRcgKoe0X5yK2giR3mGJRg3JeKY4%2BB82A5xJ1ZUO8rriRWgK1Ec6vzeOxUVZ9htyF5Dfp4YldeWLyXCUj0%2F02hu0hdDoAqyfWslT3zX3XcakMi%2BRE7B25j%2FbO0FF5XpgFKCfzJAee49SGSmTkP%2FWzzN1vFZYuVHkeJhbrcarfwbkfi%2BgbZUww%2BrOxAY6pgFywC9%2F%2FeLPPhCAifDV92F8NoGNLBjNmiMBsulmOGUWY6kHkAorIlItg4gYt0qtbh2Qcc9anqwbT5W0ZypWMeU7rNC%2FxvIkQ%2F7QZOt73Ce6DTdiPO6T%2FyX29YuSa5jMHwEt0cUAwCElCadVC1Lan%2Fa8fYxZLqSomyr8WXLbN7dmeyz92YkwoZzSmZkRxJIMc4JR27i9hHRUxppkIY1aC1qVt2b5LYqS&X-Amz-Signature=c1e57a867275cbb2997687efc343b592ec3d8cc8e1f7d1834bd8306169d10a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PBWHMH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFYVCnIqraZ3GuoHecuMiORJ8uuwBDBvh1V8jKQ5mF1fAiAT13cu0iTPbTMGi5ZTnSCkJ1kqpLTRA4WEIT7US8Zq2ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzrld3SPKdchvG2uFKtwDcZTDn5K%2Bw6Vi%2BZz415AdPlM6DwfRzufxhvBaI2Kjk6aB30%2Ful28OcV4py0Y6OgyZweMJMieZxl%2FWX6q2tdrdH8XD%2B0xRd%2FI3147kX2lD2zwQicLSu1XROtMLbbthTIywVSSwVBNhbQw9RCufydrdz0m7icumbpnY873aKihDKzD4%2BTt1miSN5cY8DzFJnsl6L45LZh%2F44gNIkxiSsuGquRLAnk6opzV6N1Up91S4kIVMGUbRxrmuPjEJqPHbNVjNqjep1Mna6%2BYQkzgtKVXHF2zrkZvlDXlbNu8p3q8Bh5CSojP8wn0VSwgCkj5QsF1zIl7Nk%2BTbaYLPkSWHQCBN4rafQDFE2TVXl%2FmtTv1R1PGfOnq%2F2r1PK%2BGDt6vWnWT2R%2FZ%2FVr%2BNzYRPG0Ifx07hFAyDlijpRWxWu41TOHuQHI4%2BzLv9Kp%2F53w7KwFTM4Xc6Ot2HGvUmXRcgKoe0X5yK2giR3mGJRg3JeKY4%2BB82A5xJ1ZUO8rriRWgK1Ec6vzeOxUVZ9htyF5Dfp4YldeWLyXCUj0%2F02hu0hdDoAqyfWslT3zX3XcakMi%2BRE7B25j%2FbO0FF5XpgFKCfzJAee49SGSmTkP%2FWzzN1vFZYuVHkeJhbrcarfwbkfi%2BgbZUww%2BrOxAY6pgFywC9%2F%2FeLPPhCAifDV92F8NoGNLBjNmiMBsulmOGUWY6kHkAorIlItg4gYt0qtbh2Qcc9anqwbT5W0ZypWMeU7rNC%2FxvIkQ%2F7QZOt73Ce6DTdiPO6T%2FyX29YuSa5jMHwEt0cUAwCElCadVC1Lan%2Fa8fYxZLqSomyr8WXLbN7dmeyz92YkwoZzSmZkRxJIMc4JR27i9hHRUxppkIY1aC1qVt2b5LYqS&X-Amz-Signature=cd6b469c42a179cb4337f3c475d6d4d987d6ab14473cd9fcef3c407de3aeccc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PBWHMH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFYVCnIqraZ3GuoHecuMiORJ8uuwBDBvh1V8jKQ5mF1fAiAT13cu0iTPbTMGi5ZTnSCkJ1kqpLTRA4WEIT7US8Zq2ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzrld3SPKdchvG2uFKtwDcZTDn5K%2Bw6Vi%2BZz415AdPlM6DwfRzufxhvBaI2Kjk6aB30%2Ful28OcV4py0Y6OgyZweMJMieZxl%2FWX6q2tdrdH8XD%2B0xRd%2FI3147kX2lD2zwQicLSu1XROtMLbbthTIywVSSwVBNhbQw9RCufydrdz0m7icumbpnY873aKihDKzD4%2BTt1miSN5cY8DzFJnsl6L45LZh%2F44gNIkxiSsuGquRLAnk6opzV6N1Up91S4kIVMGUbRxrmuPjEJqPHbNVjNqjep1Mna6%2BYQkzgtKVXHF2zrkZvlDXlbNu8p3q8Bh5CSojP8wn0VSwgCkj5QsF1zIl7Nk%2BTbaYLPkSWHQCBN4rafQDFE2TVXl%2FmtTv1R1PGfOnq%2F2r1PK%2BGDt6vWnWT2R%2FZ%2FVr%2BNzYRPG0Ifx07hFAyDlijpRWxWu41TOHuQHI4%2BzLv9Kp%2F53w7KwFTM4Xc6Ot2HGvUmXRcgKoe0X5yK2giR3mGJRg3JeKY4%2BB82A5xJ1ZUO8rriRWgK1Ec6vzeOxUVZ9htyF5Dfp4YldeWLyXCUj0%2F02hu0hdDoAqyfWslT3zX3XcakMi%2BRE7B25j%2FbO0FF5XpgFKCfzJAee49SGSmTkP%2FWzzN1vFZYuVHkeJhbrcarfwbkfi%2BgbZUww%2BrOxAY6pgFywC9%2F%2FeLPPhCAifDV92F8NoGNLBjNmiMBsulmOGUWY6kHkAorIlItg4gYt0qtbh2Qcc9anqwbT5W0ZypWMeU7rNC%2FxvIkQ%2F7QZOt73Ce6DTdiPO6T%2FyX29YuSa5jMHwEt0cUAwCElCadVC1Lan%2Fa8fYxZLqSomyr8WXLbN7dmeyz92YkwoZzSmZkRxJIMc4JR27i9hHRUxppkIY1aC1qVt2b5LYqS&X-Amz-Signature=a194b6c4746291661315be712402595c586b62c1715ad41e6ff33c683624d416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PBWHMH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFYVCnIqraZ3GuoHecuMiORJ8uuwBDBvh1V8jKQ5mF1fAiAT13cu0iTPbTMGi5ZTnSCkJ1kqpLTRA4WEIT7US8Zq2ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzrld3SPKdchvG2uFKtwDcZTDn5K%2Bw6Vi%2BZz415AdPlM6DwfRzufxhvBaI2Kjk6aB30%2Ful28OcV4py0Y6OgyZweMJMieZxl%2FWX6q2tdrdH8XD%2B0xRd%2FI3147kX2lD2zwQicLSu1XROtMLbbthTIywVSSwVBNhbQw9RCufydrdz0m7icumbpnY873aKihDKzD4%2BTt1miSN5cY8DzFJnsl6L45LZh%2F44gNIkxiSsuGquRLAnk6opzV6N1Up91S4kIVMGUbRxrmuPjEJqPHbNVjNqjep1Mna6%2BYQkzgtKVXHF2zrkZvlDXlbNu8p3q8Bh5CSojP8wn0VSwgCkj5QsF1zIl7Nk%2BTbaYLPkSWHQCBN4rafQDFE2TVXl%2FmtTv1R1PGfOnq%2F2r1PK%2BGDt6vWnWT2R%2FZ%2FVr%2BNzYRPG0Ifx07hFAyDlijpRWxWu41TOHuQHI4%2BzLv9Kp%2F53w7KwFTM4Xc6Ot2HGvUmXRcgKoe0X5yK2giR3mGJRg3JeKY4%2BB82A5xJ1ZUO8rriRWgK1Ec6vzeOxUVZ9htyF5Dfp4YldeWLyXCUj0%2F02hu0hdDoAqyfWslT3zX3XcakMi%2BRE7B25j%2FbO0FF5XpgFKCfzJAee49SGSmTkP%2FWzzN1vFZYuVHkeJhbrcarfwbkfi%2BgbZUww%2BrOxAY6pgFywC9%2F%2FeLPPhCAifDV92F8NoGNLBjNmiMBsulmOGUWY6kHkAorIlItg4gYt0qtbh2Qcc9anqwbT5W0ZypWMeU7rNC%2FxvIkQ%2F7QZOt73Ce6DTdiPO6T%2FyX29YuSa5jMHwEt0cUAwCElCadVC1Lan%2Fa8fYxZLqSomyr8WXLbN7dmeyz92YkwoZzSmZkRxJIMc4JR27i9hHRUxppkIY1aC1qVt2b5LYqS&X-Amz-Signature=8726a5484afcd4a8a7ab5666b245a026e2d7ad3765c0b06c4f2bdbf82d193923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
