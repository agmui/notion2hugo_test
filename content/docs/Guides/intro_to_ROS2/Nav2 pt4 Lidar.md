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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOOOX5ZD%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS10bDoNf%2Fq%2FnviHsF0boiGmRwWHI1SLcLzo1kAu9gbAIgFE58WJ%2FtHSb2HL8DwAVu4%2FA%2BuV03GZRy8nwlgmKVIJQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPrI99gJOYOTgLEWircA%2FHFBIrFi%2FfnFHaqNgQWOaTKaIsmGE9BAhKJDIX5KsUMw71Kx0foT0%2F3tiA3RBoH8MR7%2BbQwEhhXNwv1JnnO8KialeEfXJ6zBVXe5gwzZ7R0ZelygtiiXkcoEz1suUmTVia1lqyTWsctVqVYEKbFcMYOx%2BST1bpUxJpaRDLskdu4H7MvZx13x6%2BYf6EcG%2FNqHxmZb8BKttRDO3WdAS3nfarUAcSPbalC%2BbtD2EhNcIQso3mrKlIlvAtneZRMjEuKycbEvIgpioAdRDKm9MTQq6zy2qo6MXMfpnZIhtkxW55emPAQWnpIxa%2B19eYqz%2F%2BAEdh1FlR2jWO7LCNNQQZuQ8CNLwWDk7HfpQJmBzFyIl8wfuMh%2Fv38maH7d2zgzCEj56wmWjh2kVBf9Yvrsq4BCC%2BCFQu2kiBmLVfm%2Bzj1CoTWhFY99%2FRpyY9ZAHMxZDq%2FICt9221rATfZ6z42MtGxLZPA51hSQdTx4BZoWAiEoxtCX%2F7TeiKyCLHyEeP82WkBcELx6fI2OU%2BVZ1wRwBtnU7N24EpcXlUSExH831SOaKjP4mhcrn5cc50Ba6i0HYM4eyiB8IRFYpPdvgLcntVJNcXeZY%2FrwSCdLp7F7y%2BQk7t6n0fkgY0w0TzyJu8BMLr4lcUGOqUBca64iBK8dvLTpW%2FFQCviZ7Wga6u8qs4Y%2Bpfn%2BHJK4JMd2fqHes5C%2BsErIfiCmxK%2FFl5E5YU7j2RlxTsQu7wR1uv2RPQ%2FU%2BuEiHoWDWkftNmFfGbO3k83HS2zQBuao5SNgoi%2B7JUdhueot1J2TDAT8QX9dDli9AdTKmZQWNmk02qubWVDzCJqdzzbq1zc2HLgjgFo9TPIaIvQv3qBBfAvaJlDaegO&X-Amz-Signature=f9d3df7e21c5f7175f61533b75415cdfc2880720b3cf391c00a39873ed2fd60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBOF5RR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkCJaVoAiNFny0DxRruHZGJqQ9atwEAdU6HtuxBIoH8QIgVGlPJQ80W78ODXcC3YhhuetTDackXHw2PLezqbR83RAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITfJu7mdraFlli%2BBCrcA4ZtXJZtCm2xDHjurQMTPRAs5MGTaaNVny3XT06NKJYwrk2dTFIO8uRF90gO5SEBczzL2xFR49GHRNcODvmy1u%2F%2BRP2GoHokqOTLRwkMCe%2BjMOCzV3bQL8rno38%2BPxknToYQZNuo0WKHd6STMxWQcXL8l5Z6rs6BNSKKyUlcqvhF9rYKTJmt7WebxQpizlZiy3WfuGq%2Be57G1cWoWrMPcR5876uisuJsfUhk1B%2BX%2Bz84GJyN2qSL%2BMH0H3cWSvdxmHDapa5%2FQg7vJ%2BF58T65Rj4KLYu8O5r5RdO%2FnrFCxD7HYO2bq9W9taIRdHNsnXbvx0YRA0GTrSpJJYq4mcOubwUoasGVgJgUr3Oe3MN8Tj3PMhAYMP1ZyFwsAuXyD%2BQJfztES565QkKIWJ%2BKuBGWv8QYplP97hxrTobCXSlo5bDJOOrrmi%2FCpGVmKqeTR%2Fw0TMub%2BnvfmgPzRcxuBrHp%2BFC1bb1tnLhKsIV9hOxeWj%2BI6YLv%2BbWdL%2B%2B1hPSalvv2Soa14%2B%2Fgv04Z2eUcByEiL0hizciotmG8clBe488abOXmhfLzv7a3%2BfPMBtoyyBU8YxSSomCO7vNAP1QOKki5b%2BLMOYH6QwK1GYrOGlGSJtzkUG4V3WbQz%2FN0zb1rMN%2F4lcUGOqUB6QqgLg%2F0M62qlAs1kGpYFdjhSSC8iQPrEhqcp%2BdTJNv7QLpVviF5UZ8yfSMlIIMe6r0kUR%2Bwg0OQHuvrG%2FvR18RdP51PchzJMM61sANdboeLhnvDEUfba4rNfKhbe5tr8NZ6pppjmFah9apCdGQv1a60dlwR357S%2BLR7GOpRwiXP%2FaKY3WZsevcyqoi2KjAEmV4uc4ZpBJh1GMHb2j0jmjnluVm6&X-Amz-Signature=83b8b5d3680d89f81e586456dcbbb0103962303adfc505acdb2282543506f73a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBOF5RR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkCJaVoAiNFny0DxRruHZGJqQ9atwEAdU6HtuxBIoH8QIgVGlPJQ80W78ODXcC3YhhuetTDackXHw2PLezqbR83RAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITfJu7mdraFlli%2BBCrcA4ZtXJZtCm2xDHjurQMTPRAs5MGTaaNVny3XT06NKJYwrk2dTFIO8uRF90gO5SEBczzL2xFR49GHRNcODvmy1u%2F%2BRP2GoHokqOTLRwkMCe%2BjMOCzV3bQL8rno38%2BPxknToYQZNuo0WKHd6STMxWQcXL8l5Z6rs6BNSKKyUlcqvhF9rYKTJmt7WebxQpizlZiy3WfuGq%2Be57G1cWoWrMPcR5876uisuJsfUhk1B%2BX%2Bz84GJyN2qSL%2BMH0H3cWSvdxmHDapa5%2FQg7vJ%2BF58T65Rj4KLYu8O5r5RdO%2FnrFCxD7HYO2bq9W9taIRdHNsnXbvx0YRA0GTrSpJJYq4mcOubwUoasGVgJgUr3Oe3MN8Tj3PMhAYMP1ZyFwsAuXyD%2BQJfztES565QkKIWJ%2BKuBGWv8QYplP97hxrTobCXSlo5bDJOOrrmi%2FCpGVmKqeTR%2Fw0TMub%2BnvfmgPzRcxuBrHp%2BFC1bb1tnLhKsIV9hOxeWj%2BI6YLv%2BbWdL%2B%2B1hPSalvv2Soa14%2B%2Fgv04Z2eUcByEiL0hizciotmG8clBe488abOXmhfLzv7a3%2BfPMBtoyyBU8YxSSomCO7vNAP1QOKki5b%2BLMOYH6QwK1GYrOGlGSJtzkUG4V3WbQz%2FN0zb1rMN%2F4lcUGOqUB6QqgLg%2F0M62qlAs1kGpYFdjhSSC8iQPrEhqcp%2BdTJNv7QLpVviF5UZ8yfSMlIIMe6r0kUR%2Bwg0OQHuvrG%2FvR18RdP51PchzJMM61sANdboeLhnvDEUfba4rNfKhbe5tr8NZ6pppjmFah9apCdGQv1a60dlwR357S%2BLR7GOpRwiXP%2FaKY3WZsevcyqoi2KjAEmV4uc4ZpBJh1GMHb2j0jmjnluVm6&X-Amz-Signature=9239c62415a4e66763ed3369634330736223eb75489c77b7d1755b5139bee266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBOF5RR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkCJaVoAiNFny0DxRruHZGJqQ9atwEAdU6HtuxBIoH8QIgVGlPJQ80W78ODXcC3YhhuetTDackXHw2PLezqbR83RAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITfJu7mdraFlli%2BBCrcA4ZtXJZtCm2xDHjurQMTPRAs5MGTaaNVny3XT06NKJYwrk2dTFIO8uRF90gO5SEBczzL2xFR49GHRNcODvmy1u%2F%2BRP2GoHokqOTLRwkMCe%2BjMOCzV3bQL8rno38%2BPxknToYQZNuo0WKHd6STMxWQcXL8l5Z6rs6BNSKKyUlcqvhF9rYKTJmt7WebxQpizlZiy3WfuGq%2Be57G1cWoWrMPcR5876uisuJsfUhk1B%2BX%2Bz84GJyN2qSL%2BMH0H3cWSvdxmHDapa5%2FQg7vJ%2BF58T65Rj4KLYu8O5r5RdO%2FnrFCxD7HYO2bq9W9taIRdHNsnXbvx0YRA0GTrSpJJYq4mcOubwUoasGVgJgUr3Oe3MN8Tj3PMhAYMP1ZyFwsAuXyD%2BQJfztES565QkKIWJ%2BKuBGWv8QYplP97hxrTobCXSlo5bDJOOrrmi%2FCpGVmKqeTR%2Fw0TMub%2BnvfmgPzRcxuBrHp%2BFC1bb1tnLhKsIV9hOxeWj%2BI6YLv%2BbWdL%2B%2B1hPSalvv2Soa14%2B%2Fgv04Z2eUcByEiL0hizciotmG8clBe488abOXmhfLzv7a3%2BfPMBtoyyBU8YxSSomCO7vNAP1QOKki5b%2BLMOYH6QwK1GYrOGlGSJtzkUG4V3WbQz%2FN0zb1rMN%2F4lcUGOqUB6QqgLg%2F0M62qlAs1kGpYFdjhSSC8iQPrEhqcp%2BdTJNv7QLpVviF5UZ8yfSMlIIMe6r0kUR%2Bwg0OQHuvrG%2FvR18RdP51PchzJMM61sANdboeLhnvDEUfba4rNfKhbe5tr8NZ6pppjmFah9apCdGQv1a60dlwR357S%2BLR7GOpRwiXP%2FaKY3WZsevcyqoi2KjAEmV4uc4ZpBJh1GMHb2j0jmjnluVm6&X-Amz-Signature=02072cfbcab64225441344c21a27adc9f567d510a3aeb0ff45eb8f95fc687987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBOF5RR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkCJaVoAiNFny0DxRruHZGJqQ9atwEAdU6HtuxBIoH8QIgVGlPJQ80W78ODXcC3YhhuetTDackXHw2PLezqbR83RAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITfJu7mdraFlli%2BBCrcA4ZtXJZtCm2xDHjurQMTPRAs5MGTaaNVny3XT06NKJYwrk2dTFIO8uRF90gO5SEBczzL2xFR49GHRNcODvmy1u%2F%2BRP2GoHokqOTLRwkMCe%2BjMOCzV3bQL8rno38%2BPxknToYQZNuo0WKHd6STMxWQcXL8l5Z6rs6BNSKKyUlcqvhF9rYKTJmt7WebxQpizlZiy3WfuGq%2Be57G1cWoWrMPcR5876uisuJsfUhk1B%2BX%2Bz84GJyN2qSL%2BMH0H3cWSvdxmHDapa5%2FQg7vJ%2BF58T65Rj4KLYu8O5r5RdO%2FnrFCxD7HYO2bq9W9taIRdHNsnXbvx0YRA0GTrSpJJYq4mcOubwUoasGVgJgUr3Oe3MN8Tj3PMhAYMP1ZyFwsAuXyD%2BQJfztES565QkKIWJ%2BKuBGWv8QYplP97hxrTobCXSlo5bDJOOrrmi%2FCpGVmKqeTR%2Fw0TMub%2BnvfmgPzRcxuBrHp%2BFC1bb1tnLhKsIV9hOxeWj%2BI6YLv%2BbWdL%2B%2B1hPSalvv2Soa14%2B%2Fgv04Z2eUcByEiL0hizciotmG8clBe488abOXmhfLzv7a3%2BfPMBtoyyBU8YxSSomCO7vNAP1QOKki5b%2BLMOYH6QwK1GYrOGlGSJtzkUG4V3WbQz%2FN0zb1rMN%2F4lcUGOqUB6QqgLg%2F0M62qlAs1kGpYFdjhSSC8iQPrEhqcp%2BdTJNv7QLpVviF5UZ8yfSMlIIMe6r0kUR%2Bwg0OQHuvrG%2FvR18RdP51PchzJMM61sANdboeLhnvDEUfba4rNfKhbe5tr8NZ6pppjmFah9apCdGQv1a60dlwR357S%2BLR7GOpRwiXP%2FaKY3WZsevcyqoi2KjAEmV4uc4ZpBJh1GMHb2j0jmjnluVm6&X-Amz-Signature=cc38aa9d5c49af1e13710282d57e3d21cd4b3bc89a1e98e7287b5971be560ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBOF5RR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkCJaVoAiNFny0DxRruHZGJqQ9atwEAdU6HtuxBIoH8QIgVGlPJQ80W78ODXcC3YhhuetTDackXHw2PLezqbR83RAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITfJu7mdraFlli%2BBCrcA4ZtXJZtCm2xDHjurQMTPRAs5MGTaaNVny3XT06NKJYwrk2dTFIO8uRF90gO5SEBczzL2xFR49GHRNcODvmy1u%2F%2BRP2GoHokqOTLRwkMCe%2BjMOCzV3bQL8rno38%2BPxknToYQZNuo0WKHd6STMxWQcXL8l5Z6rs6BNSKKyUlcqvhF9rYKTJmt7WebxQpizlZiy3WfuGq%2Be57G1cWoWrMPcR5876uisuJsfUhk1B%2BX%2Bz84GJyN2qSL%2BMH0H3cWSvdxmHDapa5%2FQg7vJ%2BF58T65Rj4KLYu8O5r5RdO%2FnrFCxD7HYO2bq9W9taIRdHNsnXbvx0YRA0GTrSpJJYq4mcOubwUoasGVgJgUr3Oe3MN8Tj3PMhAYMP1ZyFwsAuXyD%2BQJfztES565QkKIWJ%2BKuBGWv8QYplP97hxrTobCXSlo5bDJOOrrmi%2FCpGVmKqeTR%2Fw0TMub%2BnvfmgPzRcxuBrHp%2BFC1bb1tnLhKsIV9hOxeWj%2BI6YLv%2BbWdL%2B%2B1hPSalvv2Soa14%2B%2Fgv04Z2eUcByEiL0hizciotmG8clBe488abOXmhfLzv7a3%2BfPMBtoyyBU8YxSSomCO7vNAP1QOKki5b%2BLMOYH6QwK1GYrOGlGSJtzkUG4V3WbQz%2FN0zb1rMN%2F4lcUGOqUB6QqgLg%2F0M62qlAs1kGpYFdjhSSC8iQPrEhqcp%2BdTJNv7QLpVviF5UZ8yfSMlIIMe6r0kUR%2Bwg0OQHuvrG%2FvR18RdP51PchzJMM61sANdboeLhnvDEUfba4rNfKhbe5tr8NZ6pppjmFah9apCdGQv1a60dlwR357S%2BLR7GOpRwiXP%2FaKY3WZsevcyqoi2KjAEmV4uc4ZpBJh1GMHb2j0jmjnluVm6&X-Amz-Signature=37e419b53ef159679074622f06ba0f0c18feb58113590b95e9feadfbb8e9d689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBOF5RR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkCJaVoAiNFny0DxRruHZGJqQ9atwEAdU6HtuxBIoH8QIgVGlPJQ80W78ODXcC3YhhuetTDackXHw2PLezqbR83RAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITfJu7mdraFlli%2BBCrcA4ZtXJZtCm2xDHjurQMTPRAs5MGTaaNVny3XT06NKJYwrk2dTFIO8uRF90gO5SEBczzL2xFR49GHRNcODvmy1u%2F%2BRP2GoHokqOTLRwkMCe%2BjMOCzV3bQL8rno38%2BPxknToYQZNuo0WKHd6STMxWQcXL8l5Z6rs6BNSKKyUlcqvhF9rYKTJmt7WebxQpizlZiy3WfuGq%2Be57G1cWoWrMPcR5876uisuJsfUhk1B%2BX%2Bz84GJyN2qSL%2BMH0H3cWSvdxmHDapa5%2FQg7vJ%2BF58T65Rj4KLYu8O5r5RdO%2FnrFCxD7HYO2bq9W9taIRdHNsnXbvx0YRA0GTrSpJJYq4mcOubwUoasGVgJgUr3Oe3MN8Tj3PMhAYMP1ZyFwsAuXyD%2BQJfztES565QkKIWJ%2BKuBGWv8QYplP97hxrTobCXSlo5bDJOOrrmi%2FCpGVmKqeTR%2Fw0TMub%2BnvfmgPzRcxuBrHp%2BFC1bb1tnLhKsIV9hOxeWj%2BI6YLv%2BbWdL%2B%2B1hPSalvv2Soa14%2B%2Fgv04Z2eUcByEiL0hizciotmG8clBe488abOXmhfLzv7a3%2BfPMBtoyyBU8YxSSomCO7vNAP1QOKki5b%2BLMOYH6QwK1GYrOGlGSJtzkUG4V3WbQz%2FN0zb1rMN%2F4lcUGOqUB6QqgLg%2F0M62qlAs1kGpYFdjhSSC8iQPrEhqcp%2BdTJNv7QLpVviF5UZ8yfSMlIIMe6r0kUR%2Bwg0OQHuvrG%2FvR18RdP51PchzJMM61sANdboeLhnvDEUfba4rNfKhbe5tr8NZ6pppjmFah9apCdGQv1a60dlwR357S%2BLR7GOpRwiXP%2FaKY3WZsevcyqoi2KjAEmV4uc4ZpBJh1GMHb2j0jmjnluVm6&X-Amz-Signature=1bf9c1e1d3d72338116fbb6f34e5e1a8fbcd1aacd960579bc0baba91b5278e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBOF5RR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkCJaVoAiNFny0DxRruHZGJqQ9atwEAdU6HtuxBIoH8QIgVGlPJQ80W78ODXcC3YhhuetTDackXHw2PLezqbR83RAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITfJu7mdraFlli%2BBCrcA4ZtXJZtCm2xDHjurQMTPRAs5MGTaaNVny3XT06NKJYwrk2dTFIO8uRF90gO5SEBczzL2xFR49GHRNcODvmy1u%2F%2BRP2GoHokqOTLRwkMCe%2BjMOCzV3bQL8rno38%2BPxknToYQZNuo0WKHd6STMxWQcXL8l5Z6rs6BNSKKyUlcqvhF9rYKTJmt7WebxQpizlZiy3WfuGq%2Be57G1cWoWrMPcR5876uisuJsfUhk1B%2BX%2Bz84GJyN2qSL%2BMH0H3cWSvdxmHDapa5%2FQg7vJ%2BF58T65Rj4KLYu8O5r5RdO%2FnrFCxD7HYO2bq9W9taIRdHNsnXbvx0YRA0GTrSpJJYq4mcOubwUoasGVgJgUr3Oe3MN8Tj3PMhAYMP1ZyFwsAuXyD%2BQJfztES565QkKIWJ%2BKuBGWv8QYplP97hxrTobCXSlo5bDJOOrrmi%2FCpGVmKqeTR%2Fw0TMub%2BnvfmgPzRcxuBrHp%2BFC1bb1tnLhKsIV9hOxeWj%2BI6YLv%2BbWdL%2B%2B1hPSalvv2Soa14%2B%2Fgv04Z2eUcByEiL0hizciotmG8clBe488abOXmhfLzv7a3%2BfPMBtoyyBU8YxSSomCO7vNAP1QOKki5b%2BLMOYH6QwK1GYrOGlGSJtzkUG4V3WbQz%2FN0zb1rMN%2F4lcUGOqUB6QqgLg%2F0M62qlAs1kGpYFdjhSSC8iQPrEhqcp%2BdTJNv7QLpVviF5UZ8yfSMlIIMe6r0kUR%2Bwg0OQHuvrG%2FvR18RdP51PchzJMM61sANdboeLhnvDEUfba4rNfKhbe5tr8NZ6pppjmFah9apCdGQv1a60dlwR357S%2BLR7GOpRwiXP%2FaKY3WZsevcyqoi2KjAEmV4uc4ZpBJh1GMHb2j0jmjnluVm6&X-Amz-Signature=6e407d62576d58c8d788f166554d31e8ae20c04224ee87785599e95c8fe7aa83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBOF5RR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkCJaVoAiNFny0DxRruHZGJqQ9atwEAdU6HtuxBIoH8QIgVGlPJQ80W78ODXcC3YhhuetTDackXHw2PLezqbR83RAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITfJu7mdraFlli%2BBCrcA4ZtXJZtCm2xDHjurQMTPRAs5MGTaaNVny3XT06NKJYwrk2dTFIO8uRF90gO5SEBczzL2xFR49GHRNcODvmy1u%2F%2BRP2GoHokqOTLRwkMCe%2BjMOCzV3bQL8rno38%2BPxknToYQZNuo0WKHd6STMxWQcXL8l5Z6rs6BNSKKyUlcqvhF9rYKTJmt7WebxQpizlZiy3WfuGq%2Be57G1cWoWrMPcR5876uisuJsfUhk1B%2BX%2Bz84GJyN2qSL%2BMH0H3cWSvdxmHDapa5%2FQg7vJ%2BF58T65Rj4KLYu8O5r5RdO%2FnrFCxD7HYO2bq9W9taIRdHNsnXbvx0YRA0GTrSpJJYq4mcOubwUoasGVgJgUr3Oe3MN8Tj3PMhAYMP1ZyFwsAuXyD%2BQJfztES565QkKIWJ%2BKuBGWv8QYplP97hxrTobCXSlo5bDJOOrrmi%2FCpGVmKqeTR%2Fw0TMub%2BnvfmgPzRcxuBrHp%2BFC1bb1tnLhKsIV9hOxeWj%2BI6YLv%2BbWdL%2B%2B1hPSalvv2Soa14%2B%2Fgv04Z2eUcByEiL0hizciotmG8clBe488abOXmhfLzv7a3%2BfPMBtoyyBU8YxSSomCO7vNAP1QOKki5b%2BLMOYH6QwK1GYrOGlGSJtzkUG4V3WbQz%2FN0zb1rMN%2F4lcUGOqUB6QqgLg%2F0M62qlAs1kGpYFdjhSSC8iQPrEhqcp%2BdTJNv7QLpVviF5UZ8yfSMlIIMe6r0kUR%2Bwg0OQHuvrG%2FvR18RdP51PchzJMM61sANdboeLhnvDEUfba4rNfKhbe5tr8NZ6pppjmFah9apCdGQv1a60dlwR357S%2BLR7GOpRwiXP%2FaKY3WZsevcyqoi2KjAEmV4uc4ZpBJh1GMHb2j0jmjnluVm6&X-Amz-Signature=561576848b6d59802dc14f2346149d8b884005138063f6c79a8c9f6250b79695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBOF5RR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkCJaVoAiNFny0DxRruHZGJqQ9atwEAdU6HtuxBIoH8QIgVGlPJQ80W78ODXcC3YhhuetTDackXHw2PLezqbR83RAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITfJu7mdraFlli%2BBCrcA4ZtXJZtCm2xDHjurQMTPRAs5MGTaaNVny3XT06NKJYwrk2dTFIO8uRF90gO5SEBczzL2xFR49GHRNcODvmy1u%2F%2BRP2GoHokqOTLRwkMCe%2BjMOCzV3bQL8rno38%2BPxknToYQZNuo0WKHd6STMxWQcXL8l5Z6rs6BNSKKyUlcqvhF9rYKTJmt7WebxQpizlZiy3WfuGq%2Be57G1cWoWrMPcR5876uisuJsfUhk1B%2BX%2Bz84GJyN2qSL%2BMH0H3cWSvdxmHDapa5%2FQg7vJ%2BF58T65Rj4KLYu8O5r5RdO%2FnrFCxD7HYO2bq9W9taIRdHNsnXbvx0YRA0GTrSpJJYq4mcOubwUoasGVgJgUr3Oe3MN8Tj3PMhAYMP1ZyFwsAuXyD%2BQJfztES565QkKIWJ%2BKuBGWv8QYplP97hxrTobCXSlo5bDJOOrrmi%2FCpGVmKqeTR%2Fw0TMub%2BnvfmgPzRcxuBrHp%2BFC1bb1tnLhKsIV9hOxeWj%2BI6YLv%2BbWdL%2B%2B1hPSalvv2Soa14%2B%2Fgv04Z2eUcByEiL0hizciotmG8clBe488abOXmhfLzv7a3%2BfPMBtoyyBU8YxSSomCO7vNAP1QOKki5b%2BLMOYH6QwK1GYrOGlGSJtzkUG4V3WbQz%2FN0zb1rMN%2F4lcUGOqUB6QqgLg%2F0M62qlAs1kGpYFdjhSSC8iQPrEhqcp%2BdTJNv7QLpVviF5UZ8yfSMlIIMe6r0kUR%2Bwg0OQHuvrG%2FvR18RdP51PchzJMM61sANdboeLhnvDEUfba4rNfKhbe5tr8NZ6pppjmFah9apCdGQv1a60dlwR357S%2BLR7GOpRwiXP%2FaKY3WZsevcyqoi2KjAEmV4uc4ZpBJh1GMHb2j0jmjnluVm6&X-Amz-Signature=904f57aa2db861c6c6c7511a1b3b6293dd56f1d6369041d98bc95edd5e0951f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBOF5RR%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkCJaVoAiNFny0DxRruHZGJqQ9atwEAdU6HtuxBIoH8QIgVGlPJQ80W78ODXcC3YhhuetTDackXHw2PLezqbR83RAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITfJu7mdraFlli%2BBCrcA4ZtXJZtCm2xDHjurQMTPRAs5MGTaaNVny3XT06NKJYwrk2dTFIO8uRF90gO5SEBczzL2xFR49GHRNcODvmy1u%2F%2BRP2GoHokqOTLRwkMCe%2BjMOCzV3bQL8rno38%2BPxknToYQZNuo0WKHd6STMxWQcXL8l5Z6rs6BNSKKyUlcqvhF9rYKTJmt7WebxQpizlZiy3WfuGq%2Be57G1cWoWrMPcR5876uisuJsfUhk1B%2BX%2Bz84GJyN2qSL%2BMH0H3cWSvdxmHDapa5%2FQg7vJ%2BF58T65Rj4KLYu8O5r5RdO%2FnrFCxD7HYO2bq9W9taIRdHNsnXbvx0YRA0GTrSpJJYq4mcOubwUoasGVgJgUr3Oe3MN8Tj3PMhAYMP1ZyFwsAuXyD%2BQJfztES565QkKIWJ%2BKuBGWv8QYplP97hxrTobCXSlo5bDJOOrrmi%2FCpGVmKqeTR%2Fw0TMub%2BnvfmgPzRcxuBrHp%2BFC1bb1tnLhKsIV9hOxeWj%2BI6YLv%2BbWdL%2B%2B1hPSalvv2Soa14%2B%2Fgv04Z2eUcByEiL0hizciotmG8clBe488abOXmhfLzv7a3%2BfPMBtoyyBU8YxSSomCO7vNAP1QOKki5b%2BLMOYH6QwK1GYrOGlGSJtzkUG4V3WbQz%2FN0zb1rMN%2F4lcUGOqUB6QqgLg%2F0M62qlAs1kGpYFdjhSSC8iQPrEhqcp%2BdTJNv7QLpVviF5UZ8yfSMlIIMe6r0kUR%2Bwg0OQHuvrG%2FvR18RdP51PchzJMM61sANdboeLhnvDEUfba4rNfKhbe5tr8NZ6pppjmFah9apCdGQv1a60dlwR357S%2BLR7GOpRwiXP%2FaKY3WZsevcyqoi2KjAEmV4uc4ZpBJh1GMHb2j0jmjnluVm6&X-Amz-Signature=cc38aa9d5c49af1e13710282d57e3d21cd4b3bc89a1e98e7287b5971be560ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
