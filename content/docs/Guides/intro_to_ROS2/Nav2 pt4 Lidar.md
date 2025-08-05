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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUVAXUML%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCGtLUIsYJU1QFhGcrSyEbBem34C81LUmHXa9rEvM%2BwPAIgEON1aaFniJ32BsRbGGNlK3KlE70IhmNjRm1TBrmIrr0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDICsMQ86fEQmujcHJSrcA6lPXhRRRr1tU%2B0MSIAJUpzyibB9BgZyWnpAafmiYUwAgx5JVL5SMWAlE%2FEIPj6Zncpyy08IGhm3vZSp3fqSr2%2BDntamubbxMm6ancDcTXTghXxVvfRcFwu6vOFwVeAj6PFwDiTeaks7qlWfmi8KCGLS%2BacPFJo8IRbhFU%2F02H6Cwgm5ryuGDgDQUE4ULGlCSbE8UH3P%2BahP5QU1yWWiUxTmQIJLjyA75pKpRN9X24j2kq81XrJXMdhjMw8DCHNfiWUiQHQW6hNKOWgEdjxmIhWQpYD8XCdRppizQ4u8D46tGNpx%2BAWopbdNdPHizPsiRbusA4lJBT1OKpr8H5QrI9%2BVKUX3LWs0RvJU0bCbYtidyY%2FRi0ixxo2NxsJRINtNxGZ5mcoDF8V%2BX5EE3V%2F1UBwbBaR5A9Khfs%2FRvd5JQEO9sElqtgYoxXlS6hwdZgLlMmxaQ7M8F6kHq1zWT%2Ft144GTvZXDeTYRs0fnhf1pnkz%2BPB%2BDH307jQpp1I5ENXFBlm0eTP5J0CZBL5TM%2Fw5hWWR%2BwDKxjMwMtgJtEiXTG0tfodRsEK8cfRgLpPxLs%2FB9CpD8aJB7VnfwyZybKNpyKjGsMJM1A%2Bn9sulWQtR7UvL9disVKHOvlC392p8aMOCHysQGOqUB0d9SeiAT0EKiVYvrcVMxiIPnbwEbw%2BlJPQUCeeI9w1V9VqkS5%2FEGUKiu3X4fbBrfJENUS4OBKRIWRyk4F0YmZ%2B4m%2B8WJd%2B1%2B2fG9Afb5%2FHi545TLr%2BYRXxcfwtMl9Oky9dG%2FNx3CPYuk974IBJeWug5O1V9oLY%2FSwdkwZIB2m29YsgbFYTmVnjla5Mg1YJzu6NC%2FJbRbU78FlNr6FL9mhdkDpuLD&X-Amz-Signature=7805ca24997e2047e811651bd2fc965014722f203670cd943814e08a3530d527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQUNLO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHDjOfMcEUa76LWV5TO0EY564IkW2EkHI9iesssutwPiAiEA96rAzaDDo%2F3AMYPdUt%2Bg19VQEnw5OQaFm8DHgP4L1b0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGpxDlGQeuDhm1lELircA%2Bw7bqf5obpEdsOp50TilF2cYwdxF2RZ08J4Z8DryusKiUUyaQpv%2BfoYxnzfpp7nihAsZKbcxhmgMvt4jgoqnYjZnXWPABlq%2Fmu1dacYBXEgfN1k8pBkMIzQKDCa2AUgy%2Fsv25Sjn8q5aq0DRsmH2scUtB%2FygsZcG7rspQd9RMlnkX%2FYirDn9o8ttmOuf1g06XJgW%2FNcP37xUfPhGYwZ2ZYT%2FqRwQiQK0%2BI68pNmW4hOw6%2BFhr3jcaYq7jELRUQhCQjCplqNOebGX712gXSaoKtzkiMebCG56PcuZ6I0eDg8GuwkDBGCDLVeu5Tr7XZijtl8wDLRf3BaeyjFJlj0Woso%2FxXZuX2ke3%2FeU8QaR7rMvpwNZnIMziWlaj9%2BY%2FCpR9DDUEEd7TC3qOUbKkqwoJk1AnTpKDEmCbBth8dNL3oiF%2BwWuaZ%2Fq%2Fqg39e8CRPQlCoEUimotxT5t0wMFNsZqzIj194xtBpjOcvqm3jd%2BSS7eBMY3TUwcM2mEbADb14UyoN%2B1JaM96Gmt86YQVshSqe2kiiNnaTrXtPlm1ijyfCw0H9qMo3r1jFyGWoQeZKgIV8zv11Iz3dhnN7LCc6lkfEyz4tzRP8HRlP8N9Gr4pAo8hChqAoywF2RoNV9MIOIysQGOqUBOXH4Ibth%2BSiTUJq54abaI5oI4nRF2iiqRgb2ncoR%2ByNXUAzUM%2BLxuPNZzlZL2UUCeov8lNPOl6VprSkcUvI5Q06VUF954LiwGK8yPHpi7k4bMf4lbds17JNmpzKKt4ZkJPEJxTijyTH6POhf3fa9QcN410TcOmlp5L6012148Y0ED1BDqS2%2FUzMBEzJZNB57nQF3cq4a4Yf4qwryAGMxsCsxIuce&X-Amz-Signature=acec494d25f4aa9987a3d8cc3815254433a4e87ffdfca91e56317507cd88326c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQUNLO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHDjOfMcEUa76LWV5TO0EY564IkW2EkHI9iesssutwPiAiEA96rAzaDDo%2F3AMYPdUt%2Bg19VQEnw5OQaFm8DHgP4L1b0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGpxDlGQeuDhm1lELircA%2Bw7bqf5obpEdsOp50TilF2cYwdxF2RZ08J4Z8DryusKiUUyaQpv%2BfoYxnzfpp7nihAsZKbcxhmgMvt4jgoqnYjZnXWPABlq%2Fmu1dacYBXEgfN1k8pBkMIzQKDCa2AUgy%2Fsv25Sjn8q5aq0DRsmH2scUtB%2FygsZcG7rspQd9RMlnkX%2FYirDn9o8ttmOuf1g06XJgW%2FNcP37xUfPhGYwZ2ZYT%2FqRwQiQK0%2BI68pNmW4hOw6%2BFhr3jcaYq7jELRUQhCQjCplqNOebGX712gXSaoKtzkiMebCG56PcuZ6I0eDg8GuwkDBGCDLVeu5Tr7XZijtl8wDLRf3BaeyjFJlj0Woso%2FxXZuX2ke3%2FeU8QaR7rMvpwNZnIMziWlaj9%2BY%2FCpR9DDUEEd7TC3qOUbKkqwoJk1AnTpKDEmCbBth8dNL3oiF%2BwWuaZ%2Fq%2Fqg39e8CRPQlCoEUimotxT5t0wMFNsZqzIj194xtBpjOcvqm3jd%2BSS7eBMY3TUwcM2mEbADb14UyoN%2B1JaM96Gmt86YQVshSqe2kiiNnaTrXtPlm1ijyfCw0H9qMo3r1jFyGWoQeZKgIV8zv11Iz3dhnN7LCc6lkfEyz4tzRP8HRlP8N9Gr4pAo8hChqAoywF2RoNV9MIOIysQGOqUBOXH4Ibth%2BSiTUJq54abaI5oI4nRF2iiqRgb2ncoR%2ByNXUAzUM%2BLxuPNZzlZL2UUCeov8lNPOl6VprSkcUvI5Q06VUF954LiwGK8yPHpi7k4bMf4lbds17JNmpzKKt4ZkJPEJxTijyTH6POhf3fa9QcN410TcOmlp5L6012148Y0ED1BDqS2%2FUzMBEzJZNB57nQF3cq4a4Yf4qwryAGMxsCsxIuce&X-Amz-Signature=3962897514d42aa0e18315357d88f87c1509dc1f051c37c74da02151ddc984ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQUNLO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHDjOfMcEUa76LWV5TO0EY564IkW2EkHI9iesssutwPiAiEA96rAzaDDo%2F3AMYPdUt%2Bg19VQEnw5OQaFm8DHgP4L1b0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGpxDlGQeuDhm1lELircA%2Bw7bqf5obpEdsOp50TilF2cYwdxF2RZ08J4Z8DryusKiUUyaQpv%2BfoYxnzfpp7nihAsZKbcxhmgMvt4jgoqnYjZnXWPABlq%2Fmu1dacYBXEgfN1k8pBkMIzQKDCa2AUgy%2Fsv25Sjn8q5aq0DRsmH2scUtB%2FygsZcG7rspQd9RMlnkX%2FYirDn9o8ttmOuf1g06XJgW%2FNcP37xUfPhGYwZ2ZYT%2FqRwQiQK0%2BI68pNmW4hOw6%2BFhr3jcaYq7jELRUQhCQjCplqNOebGX712gXSaoKtzkiMebCG56PcuZ6I0eDg8GuwkDBGCDLVeu5Tr7XZijtl8wDLRf3BaeyjFJlj0Woso%2FxXZuX2ke3%2FeU8QaR7rMvpwNZnIMziWlaj9%2BY%2FCpR9DDUEEd7TC3qOUbKkqwoJk1AnTpKDEmCbBth8dNL3oiF%2BwWuaZ%2Fq%2Fqg39e8CRPQlCoEUimotxT5t0wMFNsZqzIj194xtBpjOcvqm3jd%2BSS7eBMY3TUwcM2mEbADb14UyoN%2B1JaM96Gmt86YQVshSqe2kiiNnaTrXtPlm1ijyfCw0H9qMo3r1jFyGWoQeZKgIV8zv11Iz3dhnN7LCc6lkfEyz4tzRP8HRlP8N9Gr4pAo8hChqAoywF2RoNV9MIOIysQGOqUBOXH4Ibth%2BSiTUJq54abaI5oI4nRF2iiqRgb2ncoR%2ByNXUAzUM%2BLxuPNZzlZL2UUCeov8lNPOl6VprSkcUvI5Q06VUF954LiwGK8yPHpi7k4bMf4lbds17JNmpzKKt4ZkJPEJxTijyTH6POhf3fa9QcN410TcOmlp5L6012148Y0ED1BDqS2%2FUzMBEzJZNB57nQF3cq4a4Yf4qwryAGMxsCsxIuce&X-Amz-Signature=4d521cc48c1c1d32e1f94339e1aa67c4b60cdc2b35625cd4b79b1782e76be54d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQUNLO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHDjOfMcEUa76LWV5TO0EY564IkW2EkHI9iesssutwPiAiEA96rAzaDDo%2F3AMYPdUt%2Bg19VQEnw5OQaFm8DHgP4L1b0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGpxDlGQeuDhm1lELircA%2Bw7bqf5obpEdsOp50TilF2cYwdxF2RZ08J4Z8DryusKiUUyaQpv%2BfoYxnzfpp7nihAsZKbcxhmgMvt4jgoqnYjZnXWPABlq%2Fmu1dacYBXEgfN1k8pBkMIzQKDCa2AUgy%2Fsv25Sjn8q5aq0DRsmH2scUtB%2FygsZcG7rspQd9RMlnkX%2FYirDn9o8ttmOuf1g06XJgW%2FNcP37xUfPhGYwZ2ZYT%2FqRwQiQK0%2BI68pNmW4hOw6%2BFhr3jcaYq7jELRUQhCQjCplqNOebGX712gXSaoKtzkiMebCG56PcuZ6I0eDg8GuwkDBGCDLVeu5Tr7XZijtl8wDLRf3BaeyjFJlj0Woso%2FxXZuX2ke3%2FeU8QaR7rMvpwNZnIMziWlaj9%2BY%2FCpR9DDUEEd7TC3qOUbKkqwoJk1AnTpKDEmCbBth8dNL3oiF%2BwWuaZ%2Fq%2Fqg39e8CRPQlCoEUimotxT5t0wMFNsZqzIj194xtBpjOcvqm3jd%2BSS7eBMY3TUwcM2mEbADb14UyoN%2B1JaM96Gmt86YQVshSqe2kiiNnaTrXtPlm1ijyfCw0H9qMo3r1jFyGWoQeZKgIV8zv11Iz3dhnN7LCc6lkfEyz4tzRP8HRlP8N9Gr4pAo8hChqAoywF2RoNV9MIOIysQGOqUBOXH4Ibth%2BSiTUJq54abaI5oI4nRF2iiqRgb2ncoR%2ByNXUAzUM%2BLxuPNZzlZL2UUCeov8lNPOl6VprSkcUvI5Q06VUF954LiwGK8yPHpi7k4bMf4lbds17JNmpzKKt4ZkJPEJxTijyTH6POhf3fa9QcN410TcOmlp5L6012148Y0ED1BDqS2%2FUzMBEzJZNB57nQF3cq4a4Yf4qwryAGMxsCsxIuce&X-Amz-Signature=e16080183c5589425a550f699710fc75aa746278e81dbf78b9c5cce5201ce6d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQUNLO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHDjOfMcEUa76LWV5TO0EY564IkW2EkHI9iesssutwPiAiEA96rAzaDDo%2F3AMYPdUt%2Bg19VQEnw5OQaFm8DHgP4L1b0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGpxDlGQeuDhm1lELircA%2Bw7bqf5obpEdsOp50TilF2cYwdxF2RZ08J4Z8DryusKiUUyaQpv%2BfoYxnzfpp7nihAsZKbcxhmgMvt4jgoqnYjZnXWPABlq%2Fmu1dacYBXEgfN1k8pBkMIzQKDCa2AUgy%2Fsv25Sjn8q5aq0DRsmH2scUtB%2FygsZcG7rspQd9RMlnkX%2FYirDn9o8ttmOuf1g06XJgW%2FNcP37xUfPhGYwZ2ZYT%2FqRwQiQK0%2BI68pNmW4hOw6%2BFhr3jcaYq7jELRUQhCQjCplqNOebGX712gXSaoKtzkiMebCG56PcuZ6I0eDg8GuwkDBGCDLVeu5Tr7XZijtl8wDLRf3BaeyjFJlj0Woso%2FxXZuX2ke3%2FeU8QaR7rMvpwNZnIMziWlaj9%2BY%2FCpR9DDUEEd7TC3qOUbKkqwoJk1AnTpKDEmCbBth8dNL3oiF%2BwWuaZ%2Fq%2Fqg39e8CRPQlCoEUimotxT5t0wMFNsZqzIj194xtBpjOcvqm3jd%2BSS7eBMY3TUwcM2mEbADb14UyoN%2B1JaM96Gmt86YQVshSqe2kiiNnaTrXtPlm1ijyfCw0H9qMo3r1jFyGWoQeZKgIV8zv11Iz3dhnN7LCc6lkfEyz4tzRP8HRlP8N9Gr4pAo8hChqAoywF2RoNV9MIOIysQGOqUBOXH4Ibth%2BSiTUJq54abaI5oI4nRF2iiqRgb2ncoR%2ByNXUAzUM%2BLxuPNZzlZL2UUCeov8lNPOl6VprSkcUvI5Q06VUF954LiwGK8yPHpi7k4bMf4lbds17JNmpzKKt4ZkJPEJxTijyTH6POhf3fa9QcN410TcOmlp5L6012148Y0ED1BDqS2%2FUzMBEzJZNB57nQF3cq4a4Yf4qwryAGMxsCsxIuce&X-Amz-Signature=bf58ae539d540aa3726aa7eab7a7c0d1c8c4f1fd22096b9a5026cebd69ad1693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQUNLO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHDjOfMcEUa76LWV5TO0EY564IkW2EkHI9iesssutwPiAiEA96rAzaDDo%2F3AMYPdUt%2Bg19VQEnw5OQaFm8DHgP4L1b0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGpxDlGQeuDhm1lELircA%2Bw7bqf5obpEdsOp50TilF2cYwdxF2RZ08J4Z8DryusKiUUyaQpv%2BfoYxnzfpp7nihAsZKbcxhmgMvt4jgoqnYjZnXWPABlq%2Fmu1dacYBXEgfN1k8pBkMIzQKDCa2AUgy%2Fsv25Sjn8q5aq0DRsmH2scUtB%2FygsZcG7rspQd9RMlnkX%2FYirDn9o8ttmOuf1g06XJgW%2FNcP37xUfPhGYwZ2ZYT%2FqRwQiQK0%2BI68pNmW4hOw6%2BFhr3jcaYq7jELRUQhCQjCplqNOebGX712gXSaoKtzkiMebCG56PcuZ6I0eDg8GuwkDBGCDLVeu5Tr7XZijtl8wDLRf3BaeyjFJlj0Woso%2FxXZuX2ke3%2FeU8QaR7rMvpwNZnIMziWlaj9%2BY%2FCpR9DDUEEd7TC3qOUbKkqwoJk1AnTpKDEmCbBth8dNL3oiF%2BwWuaZ%2Fq%2Fqg39e8CRPQlCoEUimotxT5t0wMFNsZqzIj194xtBpjOcvqm3jd%2BSS7eBMY3TUwcM2mEbADb14UyoN%2B1JaM96Gmt86YQVshSqe2kiiNnaTrXtPlm1ijyfCw0H9qMo3r1jFyGWoQeZKgIV8zv11Iz3dhnN7LCc6lkfEyz4tzRP8HRlP8N9Gr4pAo8hChqAoywF2RoNV9MIOIysQGOqUBOXH4Ibth%2BSiTUJq54abaI5oI4nRF2iiqRgb2ncoR%2ByNXUAzUM%2BLxuPNZzlZL2UUCeov8lNPOl6VprSkcUvI5Q06VUF954LiwGK8yPHpi7k4bMf4lbds17JNmpzKKt4ZkJPEJxTijyTH6POhf3fa9QcN410TcOmlp5L6012148Y0ED1BDqS2%2FUzMBEzJZNB57nQF3cq4a4Yf4qwryAGMxsCsxIuce&X-Amz-Signature=8dfdfa48159c88c742e9be07ced5f5e8d5bd19ddb96cb697baed8feca7ebde7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQUNLO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHDjOfMcEUa76LWV5TO0EY564IkW2EkHI9iesssutwPiAiEA96rAzaDDo%2F3AMYPdUt%2Bg19VQEnw5OQaFm8DHgP4L1b0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGpxDlGQeuDhm1lELircA%2Bw7bqf5obpEdsOp50TilF2cYwdxF2RZ08J4Z8DryusKiUUyaQpv%2BfoYxnzfpp7nihAsZKbcxhmgMvt4jgoqnYjZnXWPABlq%2Fmu1dacYBXEgfN1k8pBkMIzQKDCa2AUgy%2Fsv25Sjn8q5aq0DRsmH2scUtB%2FygsZcG7rspQd9RMlnkX%2FYirDn9o8ttmOuf1g06XJgW%2FNcP37xUfPhGYwZ2ZYT%2FqRwQiQK0%2BI68pNmW4hOw6%2BFhr3jcaYq7jELRUQhCQjCplqNOebGX712gXSaoKtzkiMebCG56PcuZ6I0eDg8GuwkDBGCDLVeu5Tr7XZijtl8wDLRf3BaeyjFJlj0Woso%2FxXZuX2ke3%2FeU8QaR7rMvpwNZnIMziWlaj9%2BY%2FCpR9DDUEEd7TC3qOUbKkqwoJk1AnTpKDEmCbBth8dNL3oiF%2BwWuaZ%2Fq%2Fqg39e8CRPQlCoEUimotxT5t0wMFNsZqzIj194xtBpjOcvqm3jd%2BSS7eBMY3TUwcM2mEbADb14UyoN%2B1JaM96Gmt86YQVshSqe2kiiNnaTrXtPlm1ijyfCw0H9qMo3r1jFyGWoQeZKgIV8zv11Iz3dhnN7LCc6lkfEyz4tzRP8HRlP8N9Gr4pAo8hChqAoywF2RoNV9MIOIysQGOqUBOXH4Ibth%2BSiTUJq54abaI5oI4nRF2iiqRgb2ncoR%2ByNXUAzUM%2BLxuPNZzlZL2UUCeov8lNPOl6VprSkcUvI5Q06VUF954LiwGK8yPHpi7k4bMf4lbds17JNmpzKKt4ZkJPEJxTijyTH6POhf3fa9QcN410TcOmlp5L6012148Y0ED1BDqS2%2FUzMBEzJZNB57nQF3cq4a4Yf4qwryAGMxsCsxIuce&X-Amz-Signature=e28c19070a60cc559d08414d2ba6f5403979b4385f268fac00ee4e1ca78e2aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQUNLO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHDjOfMcEUa76LWV5TO0EY564IkW2EkHI9iesssutwPiAiEA96rAzaDDo%2F3AMYPdUt%2Bg19VQEnw5OQaFm8DHgP4L1b0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGpxDlGQeuDhm1lELircA%2Bw7bqf5obpEdsOp50TilF2cYwdxF2RZ08J4Z8DryusKiUUyaQpv%2BfoYxnzfpp7nihAsZKbcxhmgMvt4jgoqnYjZnXWPABlq%2Fmu1dacYBXEgfN1k8pBkMIzQKDCa2AUgy%2Fsv25Sjn8q5aq0DRsmH2scUtB%2FygsZcG7rspQd9RMlnkX%2FYirDn9o8ttmOuf1g06XJgW%2FNcP37xUfPhGYwZ2ZYT%2FqRwQiQK0%2BI68pNmW4hOw6%2BFhr3jcaYq7jELRUQhCQjCplqNOebGX712gXSaoKtzkiMebCG56PcuZ6I0eDg8GuwkDBGCDLVeu5Tr7XZijtl8wDLRf3BaeyjFJlj0Woso%2FxXZuX2ke3%2FeU8QaR7rMvpwNZnIMziWlaj9%2BY%2FCpR9DDUEEd7TC3qOUbKkqwoJk1AnTpKDEmCbBth8dNL3oiF%2BwWuaZ%2Fq%2Fqg39e8CRPQlCoEUimotxT5t0wMFNsZqzIj194xtBpjOcvqm3jd%2BSS7eBMY3TUwcM2mEbADb14UyoN%2B1JaM96Gmt86YQVshSqe2kiiNnaTrXtPlm1ijyfCw0H9qMo3r1jFyGWoQeZKgIV8zv11Iz3dhnN7LCc6lkfEyz4tzRP8HRlP8N9Gr4pAo8hChqAoywF2RoNV9MIOIysQGOqUBOXH4Ibth%2BSiTUJq54abaI5oI4nRF2iiqRgb2ncoR%2ByNXUAzUM%2BLxuPNZzlZL2UUCeov8lNPOl6VprSkcUvI5Q06VUF954LiwGK8yPHpi7k4bMf4lbds17JNmpzKKt4ZkJPEJxTijyTH6POhf3fa9QcN410TcOmlp5L6012148Y0ED1BDqS2%2FUzMBEzJZNB57nQF3cq4a4Yf4qwryAGMxsCsxIuce&X-Amz-Signature=f3ab79b0308cd1f0b067408bc121b2b9df1803837647be193a12eab45ef79e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQUNLO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHDjOfMcEUa76LWV5TO0EY564IkW2EkHI9iesssutwPiAiEA96rAzaDDo%2F3AMYPdUt%2Bg19VQEnw5OQaFm8DHgP4L1b0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGpxDlGQeuDhm1lELircA%2Bw7bqf5obpEdsOp50TilF2cYwdxF2RZ08J4Z8DryusKiUUyaQpv%2BfoYxnzfpp7nihAsZKbcxhmgMvt4jgoqnYjZnXWPABlq%2Fmu1dacYBXEgfN1k8pBkMIzQKDCa2AUgy%2Fsv25Sjn8q5aq0DRsmH2scUtB%2FygsZcG7rspQd9RMlnkX%2FYirDn9o8ttmOuf1g06XJgW%2FNcP37xUfPhGYwZ2ZYT%2FqRwQiQK0%2BI68pNmW4hOw6%2BFhr3jcaYq7jELRUQhCQjCplqNOebGX712gXSaoKtzkiMebCG56PcuZ6I0eDg8GuwkDBGCDLVeu5Tr7XZijtl8wDLRf3BaeyjFJlj0Woso%2FxXZuX2ke3%2FeU8QaR7rMvpwNZnIMziWlaj9%2BY%2FCpR9DDUEEd7TC3qOUbKkqwoJk1AnTpKDEmCbBth8dNL3oiF%2BwWuaZ%2Fq%2Fqg39e8CRPQlCoEUimotxT5t0wMFNsZqzIj194xtBpjOcvqm3jd%2BSS7eBMY3TUwcM2mEbADb14UyoN%2B1JaM96Gmt86YQVshSqe2kiiNnaTrXtPlm1ijyfCw0H9qMo3r1jFyGWoQeZKgIV8zv11Iz3dhnN7LCc6lkfEyz4tzRP8HRlP8N9Gr4pAo8hChqAoywF2RoNV9MIOIysQGOqUBOXH4Ibth%2BSiTUJq54abaI5oI4nRF2iiqRgb2ncoR%2ByNXUAzUM%2BLxuPNZzlZL2UUCeov8lNPOl6VprSkcUvI5Q06VUF954LiwGK8yPHpi7k4bMf4lbds17JNmpzKKt4ZkJPEJxTijyTH6POhf3fa9QcN410TcOmlp5L6012148Y0ED1BDqS2%2FUzMBEzJZNB57nQF3cq4a4Yf4qwryAGMxsCsxIuce&X-Amz-Signature=f7b100a82d0c048601e518537b8b48e00299b7df22746f9dd48a429e8559d6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTQUNLO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHDjOfMcEUa76LWV5TO0EY564IkW2EkHI9iesssutwPiAiEA96rAzaDDo%2F3AMYPdUt%2Bg19VQEnw5OQaFm8DHgP4L1b0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGpxDlGQeuDhm1lELircA%2Bw7bqf5obpEdsOp50TilF2cYwdxF2RZ08J4Z8DryusKiUUyaQpv%2BfoYxnzfpp7nihAsZKbcxhmgMvt4jgoqnYjZnXWPABlq%2Fmu1dacYBXEgfN1k8pBkMIzQKDCa2AUgy%2Fsv25Sjn8q5aq0DRsmH2scUtB%2FygsZcG7rspQd9RMlnkX%2FYirDn9o8ttmOuf1g06XJgW%2FNcP37xUfPhGYwZ2ZYT%2FqRwQiQK0%2BI68pNmW4hOw6%2BFhr3jcaYq7jELRUQhCQjCplqNOebGX712gXSaoKtzkiMebCG56PcuZ6I0eDg8GuwkDBGCDLVeu5Tr7XZijtl8wDLRf3BaeyjFJlj0Woso%2FxXZuX2ke3%2FeU8QaR7rMvpwNZnIMziWlaj9%2BY%2FCpR9DDUEEd7TC3qOUbKkqwoJk1AnTpKDEmCbBth8dNL3oiF%2BwWuaZ%2Fq%2Fqg39e8CRPQlCoEUimotxT5t0wMFNsZqzIj194xtBpjOcvqm3jd%2BSS7eBMY3TUwcM2mEbADb14UyoN%2B1JaM96Gmt86YQVshSqe2kiiNnaTrXtPlm1ijyfCw0H9qMo3r1jFyGWoQeZKgIV8zv11Iz3dhnN7LCc6lkfEyz4tzRP8HRlP8N9Gr4pAo8hChqAoywF2RoNV9MIOIysQGOqUBOXH4Ibth%2BSiTUJq54abaI5oI4nRF2iiqRgb2ncoR%2ByNXUAzUM%2BLxuPNZzlZL2UUCeov8lNPOl6VprSkcUvI5Q06VUF954LiwGK8yPHpi7k4bMf4lbds17JNmpzKKt4ZkJPEJxTijyTH6POhf3fa9QcN410TcOmlp5L6012148Y0ED1BDqS2%2FUzMBEzJZNB57nQF3cq4a4Yf4qwryAGMxsCsxIuce&X-Amz-Signature=e16080183c5589425a550f699710fc75aa746278e81dbf78b9c5cce5201ce6d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
