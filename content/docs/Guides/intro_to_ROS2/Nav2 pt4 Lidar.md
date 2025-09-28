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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSEEIIRU%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIA1ekT7%2FDtjAaAv7ZFEys2skcADaZYq6KlAXVmi9UYNdAiBHkwUgPSE%2B%2BV6fv9N4MC7PT4lYdsVoWH3Px9DM4uYDWSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNSyJnUakN0sh21cYKtwDGmVygwYv3SKUskBhRv1KaIvXegC1wUw4c6DK2SLSBF%2Bu91LvxyiEWPezuuKsvIzsKhFCD5LR4w%2B6cMq64sI%2F6G202AO39gjFEZ0U5u0c5255qQpe01KjI6vvpjAk0DbYwfsk2eY9zcqjgAQpMQqrah0x8gUKBeWwCN6HmmYd4VHrzuANOUvtKegxZOzpBdtww%2FD1q%2Br%2BuBLMoVbaaApPaXsAfiSfp%2B4SiiNu4PqHfZzS2DPVE9apvSXMN3XohgqEqArPO3AjKZ0ErEEVatH3KX%2F9B9wqw0%2BXymdhY9a9kGST8G2eRxfeLzbBdM3BRvLuwGrwzX8BP%2FFlhUWTbF7Jqobc00qPqCU8c5D0FMMxdxdZ214F9haEbNHCfcSbxWsMV4bYjkad0IOGtW1z%2B4xU%2BkOxzG5JM%2BrFLADE02IISIA4WOEjH5jCS6IJiIYtPH9%2FHt0T97ct5Z5Eoau1rYrrs4a%2BTYRgSwibkaYLEesnY9fdX33HVWMl%2FSEh%2BcjICzQ6fEAxo0qn855g4qSunsutrmeikpfcnLsXSzBf%2BwyI2SwvBVQ2C%2FeY3IIEL%2FLEIDHlZYrtez2R0UwKDY07pJrLifA%2FdDXCAUaEBkXl0HZr%2B2AD%2Ff23aAezyuSyzRAwn7%2FhxgY6pgFy2Y9CdVSbfCHjtCx71RTtg3z8u3yByCV1jkC%2BShbhnJaIWdXPZ8pYfsK%2B2wCga8bcMXipfi1DN5naxZ%2BfwknDD6rjLPEue86H%2F0tlja8XAEJc%2Fm6J5ahMkH6NzwElGOgFSURKQEbhiff3CWOSRp9bvnJooVOgK9j2yf6Ksi87qWEWF6S3Maj9eLQX5ks9jV9eSA5U1FbkjBDrWOiH77fBbihN%2BCPB&X-Amz-Signature=d6e676097bd4956a176ddd5ecae706d2ce9dde64aa8a59a524dc4ef59eab8cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDKUUR2%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBJSwvoUl6BSAO1brheQpQSgbEMQdL8v8m2Yrt6I9kroAiEA2F%2Bw6mQeNu1BRugcDhxXr%2FQkwU5sD0N7ridzNd4EmDsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYgLsj0MsKKeOLzwircA8oridafCJtZRDaTcb9zoiSu8a2%2BuUChrHpryGGje8ZYcZ4CPjGkWC07oEvSCxkW98dd1piuOKU1lVDOw2Yjgb8FLXgsUwZqKWK6HzQmLcMHPQSgd2sbmGqNJQO3uIgcPmDbCRBKEv%2Fk38PxDT35rYEekFf7UiYe2B1ilR4JsNYd2A3%2BadY%2FLRgXmw2tWL6TNnMzVJ5nL1mLTI26rpe5yF%2FsxP6EVA%2F8VwBgJuvyX%2BXvMws%2FKTSlpRjX%2F4h2Eqil1IlM8Y0XjkPYk%2FfHoX6YCEjf05OVx0Z7Ne3BFeoS6cOwbyldxS%2FPlg98JV09ou0XlKS6y0tFPgA03ny1xT20piNdOFyJDEBBpZqvgskMAoAjcKUR4ZHuXG0Li%2BGVAsJklZ5GMvX6SG7y%2BqcXuDByrvwghp0dr7AK2m4GTGWr9IviPykzS0HkTTNZfAcE%2FglMSJO3z7xSRqFSa%2BebseODTcXztohWTtx8%2B35ysztxLUyDC0JYuHlmLpG5OFod5xw5MdzqwtgWgs55Csz2dZZvPhRVGCbgHiFnohbZD52cj2Tl9dgQq%2FxJTpo3SNqxHfKiGzXQndJr7Sr5SSbCeCrByLNsCNik7dDgTUiMdn2tZN6fJn6XfaFbdYT4lxTPMJO%2F4cYGOqUBzhplxwAZVX41JRkWB7T5Bc%2BR1Tk5ag2C51TrDeKm8tD%2B7EZzZOb0Cm0Vduvu0ThHiFweX9%2BplSSCBRZW44I6WB16XhemgK%2B2NiIhevyciwaUYwQs565YVb2UXDyod49RGwAbV62%2FUbY8SFdj3QMW5RIRPZxlu31TOMUkmOXi4ePGlikU59Wd7fl7flwK3bNji%2FrSM0w5d7fP4x6D0oq3B%2BhdVFR%2B&X-Amz-Signature=c12d293062a117257d04dce33759a0e9b2fd667c183204537403cd1518b9acc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDKUUR2%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBJSwvoUl6BSAO1brheQpQSgbEMQdL8v8m2Yrt6I9kroAiEA2F%2Bw6mQeNu1BRugcDhxXr%2FQkwU5sD0N7ridzNd4EmDsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYgLsj0MsKKeOLzwircA8oridafCJtZRDaTcb9zoiSu8a2%2BuUChrHpryGGje8ZYcZ4CPjGkWC07oEvSCxkW98dd1piuOKU1lVDOw2Yjgb8FLXgsUwZqKWK6HzQmLcMHPQSgd2sbmGqNJQO3uIgcPmDbCRBKEv%2Fk38PxDT35rYEekFf7UiYe2B1ilR4JsNYd2A3%2BadY%2FLRgXmw2tWL6TNnMzVJ5nL1mLTI26rpe5yF%2FsxP6EVA%2F8VwBgJuvyX%2BXvMws%2FKTSlpRjX%2F4h2Eqil1IlM8Y0XjkPYk%2FfHoX6YCEjf05OVx0Z7Ne3BFeoS6cOwbyldxS%2FPlg98JV09ou0XlKS6y0tFPgA03ny1xT20piNdOFyJDEBBpZqvgskMAoAjcKUR4ZHuXG0Li%2BGVAsJklZ5GMvX6SG7y%2BqcXuDByrvwghp0dr7AK2m4GTGWr9IviPykzS0HkTTNZfAcE%2FglMSJO3z7xSRqFSa%2BebseODTcXztohWTtx8%2B35ysztxLUyDC0JYuHlmLpG5OFod5xw5MdzqwtgWgs55Csz2dZZvPhRVGCbgHiFnohbZD52cj2Tl9dgQq%2FxJTpo3SNqxHfKiGzXQndJr7Sr5SSbCeCrByLNsCNik7dDgTUiMdn2tZN6fJn6XfaFbdYT4lxTPMJO%2F4cYGOqUBzhplxwAZVX41JRkWB7T5Bc%2BR1Tk5ag2C51TrDeKm8tD%2B7EZzZOb0Cm0Vduvu0ThHiFweX9%2BplSSCBRZW44I6WB16XhemgK%2B2NiIhevyciwaUYwQs565YVb2UXDyod49RGwAbV62%2FUbY8SFdj3QMW5RIRPZxlu31TOMUkmOXi4ePGlikU59Wd7fl7flwK3bNji%2FrSM0w5d7fP4x6D0oq3B%2BhdVFR%2B&X-Amz-Signature=98070869e349ae974b7955371f1956769dc13b068ec4dfda818d7777da8cfc19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDKUUR2%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBJSwvoUl6BSAO1brheQpQSgbEMQdL8v8m2Yrt6I9kroAiEA2F%2Bw6mQeNu1BRugcDhxXr%2FQkwU5sD0N7ridzNd4EmDsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYgLsj0MsKKeOLzwircA8oridafCJtZRDaTcb9zoiSu8a2%2BuUChrHpryGGje8ZYcZ4CPjGkWC07oEvSCxkW98dd1piuOKU1lVDOw2Yjgb8FLXgsUwZqKWK6HzQmLcMHPQSgd2sbmGqNJQO3uIgcPmDbCRBKEv%2Fk38PxDT35rYEekFf7UiYe2B1ilR4JsNYd2A3%2BadY%2FLRgXmw2tWL6TNnMzVJ5nL1mLTI26rpe5yF%2FsxP6EVA%2F8VwBgJuvyX%2BXvMws%2FKTSlpRjX%2F4h2Eqil1IlM8Y0XjkPYk%2FfHoX6YCEjf05OVx0Z7Ne3BFeoS6cOwbyldxS%2FPlg98JV09ou0XlKS6y0tFPgA03ny1xT20piNdOFyJDEBBpZqvgskMAoAjcKUR4ZHuXG0Li%2BGVAsJklZ5GMvX6SG7y%2BqcXuDByrvwghp0dr7AK2m4GTGWr9IviPykzS0HkTTNZfAcE%2FglMSJO3z7xSRqFSa%2BebseODTcXztohWTtx8%2B35ysztxLUyDC0JYuHlmLpG5OFod5xw5MdzqwtgWgs55Csz2dZZvPhRVGCbgHiFnohbZD52cj2Tl9dgQq%2FxJTpo3SNqxHfKiGzXQndJr7Sr5SSbCeCrByLNsCNik7dDgTUiMdn2tZN6fJn6XfaFbdYT4lxTPMJO%2F4cYGOqUBzhplxwAZVX41JRkWB7T5Bc%2BR1Tk5ag2C51TrDeKm8tD%2B7EZzZOb0Cm0Vduvu0ThHiFweX9%2BplSSCBRZW44I6WB16XhemgK%2B2NiIhevyciwaUYwQs565YVb2UXDyod49RGwAbV62%2FUbY8SFdj3QMW5RIRPZxlu31TOMUkmOXi4ePGlikU59Wd7fl7flwK3bNji%2FrSM0w5d7fP4x6D0oq3B%2BhdVFR%2B&X-Amz-Signature=e4c7b38cde08dc6a41fb89afcbb6321621c32a17d9e851ea9b29614542082673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDKUUR2%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBJSwvoUl6BSAO1brheQpQSgbEMQdL8v8m2Yrt6I9kroAiEA2F%2Bw6mQeNu1BRugcDhxXr%2FQkwU5sD0N7ridzNd4EmDsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYgLsj0MsKKeOLzwircA8oridafCJtZRDaTcb9zoiSu8a2%2BuUChrHpryGGje8ZYcZ4CPjGkWC07oEvSCxkW98dd1piuOKU1lVDOw2Yjgb8FLXgsUwZqKWK6HzQmLcMHPQSgd2sbmGqNJQO3uIgcPmDbCRBKEv%2Fk38PxDT35rYEekFf7UiYe2B1ilR4JsNYd2A3%2BadY%2FLRgXmw2tWL6TNnMzVJ5nL1mLTI26rpe5yF%2FsxP6EVA%2F8VwBgJuvyX%2BXvMws%2FKTSlpRjX%2F4h2Eqil1IlM8Y0XjkPYk%2FfHoX6YCEjf05OVx0Z7Ne3BFeoS6cOwbyldxS%2FPlg98JV09ou0XlKS6y0tFPgA03ny1xT20piNdOFyJDEBBpZqvgskMAoAjcKUR4ZHuXG0Li%2BGVAsJklZ5GMvX6SG7y%2BqcXuDByrvwghp0dr7AK2m4GTGWr9IviPykzS0HkTTNZfAcE%2FglMSJO3z7xSRqFSa%2BebseODTcXztohWTtx8%2B35ysztxLUyDC0JYuHlmLpG5OFod5xw5MdzqwtgWgs55Csz2dZZvPhRVGCbgHiFnohbZD52cj2Tl9dgQq%2FxJTpo3SNqxHfKiGzXQndJr7Sr5SSbCeCrByLNsCNik7dDgTUiMdn2tZN6fJn6XfaFbdYT4lxTPMJO%2F4cYGOqUBzhplxwAZVX41JRkWB7T5Bc%2BR1Tk5ag2C51TrDeKm8tD%2B7EZzZOb0Cm0Vduvu0ThHiFweX9%2BplSSCBRZW44I6WB16XhemgK%2B2NiIhevyciwaUYwQs565YVb2UXDyod49RGwAbV62%2FUbY8SFdj3QMW5RIRPZxlu31TOMUkmOXi4ePGlikU59Wd7fl7flwK3bNji%2FrSM0w5d7fP4x6D0oq3B%2BhdVFR%2B&X-Amz-Signature=44af64365c691df89b87a47e28d4ee42ff78738acafa179b8476b057661f5bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDKUUR2%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBJSwvoUl6BSAO1brheQpQSgbEMQdL8v8m2Yrt6I9kroAiEA2F%2Bw6mQeNu1BRugcDhxXr%2FQkwU5sD0N7ridzNd4EmDsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYgLsj0MsKKeOLzwircA8oridafCJtZRDaTcb9zoiSu8a2%2BuUChrHpryGGje8ZYcZ4CPjGkWC07oEvSCxkW98dd1piuOKU1lVDOw2Yjgb8FLXgsUwZqKWK6HzQmLcMHPQSgd2sbmGqNJQO3uIgcPmDbCRBKEv%2Fk38PxDT35rYEekFf7UiYe2B1ilR4JsNYd2A3%2BadY%2FLRgXmw2tWL6TNnMzVJ5nL1mLTI26rpe5yF%2FsxP6EVA%2F8VwBgJuvyX%2BXvMws%2FKTSlpRjX%2F4h2Eqil1IlM8Y0XjkPYk%2FfHoX6YCEjf05OVx0Z7Ne3BFeoS6cOwbyldxS%2FPlg98JV09ou0XlKS6y0tFPgA03ny1xT20piNdOFyJDEBBpZqvgskMAoAjcKUR4ZHuXG0Li%2BGVAsJklZ5GMvX6SG7y%2BqcXuDByrvwghp0dr7AK2m4GTGWr9IviPykzS0HkTTNZfAcE%2FglMSJO3z7xSRqFSa%2BebseODTcXztohWTtx8%2B35ysztxLUyDC0JYuHlmLpG5OFod5xw5MdzqwtgWgs55Csz2dZZvPhRVGCbgHiFnohbZD52cj2Tl9dgQq%2FxJTpo3SNqxHfKiGzXQndJr7Sr5SSbCeCrByLNsCNik7dDgTUiMdn2tZN6fJn6XfaFbdYT4lxTPMJO%2F4cYGOqUBzhplxwAZVX41JRkWB7T5Bc%2BR1Tk5ag2C51TrDeKm8tD%2B7EZzZOb0Cm0Vduvu0ThHiFweX9%2BplSSCBRZW44I6WB16XhemgK%2B2NiIhevyciwaUYwQs565YVb2UXDyod49RGwAbV62%2FUbY8SFdj3QMW5RIRPZxlu31TOMUkmOXi4ePGlikU59Wd7fl7flwK3bNji%2FrSM0w5d7fP4x6D0oq3B%2BhdVFR%2B&X-Amz-Signature=7f0ea4aedad84a65538b10679366b826852610ecd568c3efecb886461f13b432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDKUUR2%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBJSwvoUl6BSAO1brheQpQSgbEMQdL8v8m2Yrt6I9kroAiEA2F%2Bw6mQeNu1BRugcDhxXr%2FQkwU5sD0N7ridzNd4EmDsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYgLsj0MsKKeOLzwircA8oridafCJtZRDaTcb9zoiSu8a2%2BuUChrHpryGGje8ZYcZ4CPjGkWC07oEvSCxkW98dd1piuOKU1lVDOw2Yjgb8FLXgsUwZqKWK6HzQmLcMHPQSgd2sbmGqNJQO3uIgcPmDbCRBKEv%2Fk38PxDT35rYEekFf7UiYe2B1ilR4JsNYd2A3%2BadY%2FLRgXmw2tWL6TNnMzVJ5nL1mLTI26rpe5yF%2FsxP6EVA%2F8VwBgJuvyX%2BXvMws%2FKTSlpRjX%2F4h2Eqil1IlM8Y0XjkPYk%2FfHoX6YCEjf05OVx0Z7Ne3BFeoS6cOwbyldxS%2FPlg98JV09ou0XlKS6y0tFPgA03ny1xT20piNdOFyJDEBBpZqvgskMAoAjcKUR4ZHuXG0Li%2BGVAsJklZ5GMvX6SG7y%2BqcXuDByrvwghp0dr7AK2m4GTGWr9IviPykzS0HkTTNZfAcE%2FglMSJO3z7xSRqFSa%2BebseODTcXztohWTtx8%2B35ysztxLUyDC0JYuHlmLpG5OFod5xw5MdzqwtgWgs55Csz2dZZvPhRVGCbgHiFnohbZD52cj2Tl9dgQq%2FxJTpo3SNqxHfKiGzXQndJr7Sr5SSbCeCrByLNsCNik7dDgTUiMdn2tZN6fJn6XfaFbdYT4lxTPMJO%2F4cYGOqUBzhplxwAZVX41JRkWB7T5Bc%2BR1Tk5ag2C51TrDeKm8tD%2B7EZzZOb0Cm0Vduvu0ThHiFweX9%2BplSSCBRZW44I6WB16XhemgK%2B2NiIhevyciwaUYwQs565YVb2UXDyod49RGwAbV62%2FUbY8SFdj3QMW5RIRPZxlu31TOMUkmOXi4ePGlikU59Wd7fl7flwK3bNji%2FrSM0w5d7fP4x6D0oq3B%2BhdVFR%2B&X-Amz-Signature=9ee018858b28270ef64826a2750501d1ce2e39f22b838be325bce81dcaa8ebe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDKUUR2%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBJSwvoUl6BSAO1brheQpQSgbEMQdL8v8m2Yrt6I9kroAiEA2F%2Bw6mQeNu1BRugcDhxXr%2FQkwU5sD0N7ridzNd4EmDsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYgLsj0MsKKeOLzwircA8oridafCJtZRDaTcb9zoiSu8a2%2BuUChrHpryGGje8ZYcZ4CPjGkWC07oEvSCxkW98dd1piuOKU1lVDOw2Yjgb8FLXgsUwZqKWK6HzQmLcMHPQSgd2sbmGqNJQO3uIgcPmDbCRBKEv%2Fk38PxDT35rYEekFf7UiYe2B1ilR4JsNYd2A3%2BadY%2FLRgXmw2tWL6TNnMzVJ5nL1mLTI26rpe5yF%2FsxP6EVA%2F8VwBgJuvyX%2BXvMws%2FKTSlpRjX%2F4h2Eqil1IlM8Y0XjkPYk%2FfHoX6YCEjf05OVx0Z7Ne3BFeoS6cOwbyldxS%2FPlg98JV09ou0XlKS6y0tFPgA03ny1xT20piNdOFyJDEBBpZqvgskMAoAjcKUR4ZHuXG0Li%2BGVAsJklZ5GMvX6SG7y%2BqcXuDByrvwghp0dr7AK2m4GTGWr9IviPykzS0HkTTNZfAcE%2FglMSJO3z7xSRqFSa%2BebseODTcXztohWTtx8%2B35ysztxLUyDC0JYuHlmLpG5OFod5xw5MdzqwtgWgs55Csz2dZZvPhRVGCbgHiFnohbZD52cj2Tl9dgQq%2FxJTpo3SNqxHfKiGzXQndJr7Sr5SSbCeCrByLNsCNik7dDgTUiMdn2tZN6fJn6XfaFbdYT4lxTPMJO%2F4cYGOqUBzhplxwAZVX41JRkWB7T5Bc%2BR1Tk5ag2C51TrDeKm8tD%2B7EZzZOb0Cm0Vduvu0ThHiFweX9%2BplSSCBRZW44I6WB16XhemgK%2B2NiIhevyciwaUYwQs565YVb2UXDyod49RGwAbV62%2FUbY8SFdj3QMW5RIRPZxlu31TOMUkmOXi4ePGlikU59Wd7fl7flwK3bNji%2FrSM0w5d7fP4x6D0oq3B%2BhdVFR%2B&X-Amz-Signature=76a12a50a1853975b1178824cb202d15fdc9252bd1bc360dbd3edebd406c0da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDKUUR2%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBJSwvoUl6BSAO1brheQpQSgbEMQdL8v8m2Yrt6I9kroAiEA2F%2Bw6mQeNu1BRugcDhxXr%2FQkwU5sD0N7ridzNd4EmDsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYgLsj0MsKKeOLzwircA8oridafCJtZRDaTcb9zoiSu8a2%2BuUChrHpryGGje8ZYcZ4CPjGkWC07oEvSCxkW98dd1piuOKU1lVDOw2Yjgb8FLXgsUwZqKWK6HzQmLcMHPQSgd2sbmGqNJQO3uIgcPmDbCRBKEv%2Fk38PxDT35rYEekFf7UiYe2B1ilR4JsNYd2A3%2BadY%2FLRgXmw2tWL6TNnMzVJ5nL1mLTI26rpe5yF%2FsxP6EVA%2F8VwBgJuvyX%2BXvMws%2FKTSlpRjX%2F4h2Eqil1IlM8Y0XjkPYk%2FfHoX6YCEjf05OVx0Z7Ne3BFeoS6cOwbyldxS%2FPlg98JV09ou0XlKS6y0tFPgA03ny1xT20piNdOFyJDEBBpZqvgskMAoAjcKUR4ZHuXG0Li%2BGVAsJklZ5GMvX6SG7y%2BqcXuDByrvwghp0dr7AK2m4GTGWr9IviPykzS0HkTTNZfAcE%2FglMSJO3z7xSRqFSa%2BebseODTcXztohWTtx8%2B35ysztxLUyDC0JYuHlmLpG5OFod5xw5MdzqwtgWgs55Csz2dZZvPhRVGCbgHiFnohbZD52cj2Tl9dgQq%2FxJTpo3SNqxHfKiGzXQndJr7Sr5SSbCeCrByLNsCNik7dDgTUiMdn2tZN6fJn6XfaFbdYT4lxTPMJO%2F4cYGOqUBzhplxwAZVX41JRkWB7T5Bc%2BR1Tk5ag2C51TrDeKm8tD%2B7EZzZOb0Cm0Vduvu0ThHiFweX9%2BplSSCBRZW44I6WB16XhemgK%2B2NiIhevyciwaUYwQs565YVb2UXDyod49RGwAbV62%2FUbY8SFdj3QMW5RIRPZxlu31TOMUkmOXi4ePGlikU59Wd7fl7flwK3bNji%2FrSM0w5d7fP4x6D0oq3B%2BhdVFR%2B&X-Amz-Signature=f85a669c94c767dc18bb5a186ef362bd0ef8b3b5c29b2550f2f7585d72ead604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDKUUR2%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBJSwvoUl6BSAO1brheQpQSgbEMQdL8v8m2Yrt6I9kroAiEA2F%2Bw6mQeNu1BRugcDhxXr%2FQkwU5sD0N7ridzNd4EmDsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYgLsj0MsKKeOLzwircA8oridafCJtZRDaTcb9zoiSu8a2%2BuUChrHpryGGje8ZYcZ4CPjGkWC07oEvSCxkW98dd1piuOKU1lVDOw2Yjgb8FLXgsUwZqKWK6HzQmLcMHPQSgd2sbmGqNJQO3uIgcPmDbCRBKEv%2Fk38PxDT35rYEekFf7UiYe2B1ilR4JsNYd2A3%2BadY%2FLRgXmw2tWL6TNnMzVJ5nL1mLTI26rpe5yF%2FsxP6EVA%2F8VwBgJuvyX%2BXvMws%2FKTSlpRjX%2F4h2Eqil1IlM8Y0XjkPYk%2FfHoX6YCEjf05OVx0Z7Ne3BFeoS6cOwbyldxS%2FPlg98JV09ou0XlKS6y0tFPgA03ny1xT20piNdOFyJDEBBpZqvgskMAoAjcKUR4ZHuXG0Li%2BGVAsJklZ5GMvX6SG7y%2BqcXuDByrvwghp0dr7AK2m4GTGWr9IviPykzS0HkTTNZfAcE%2FglMSJO3z7xSRqFSa%2BebseODTcXztohWTtx8%2B35ysztxLUyDC0JYuHlmLpG5OFod5xw5MdzqwtgWgs55Csz2dZZvPhRVGCbgHiFnohbZD52cj2Tl9dgQq%2FxJTpo3SNqxHfKiGzXQndJr7Sr5SSbCeCrByLNsCNik7dDgTUiMdn2tZN6fJn6XfaFbdYT4lxTPMJO%2F4cYGOqUBzhplxwAZVX41JRkWB7T5Bc%2BR1Tk5ag2C51TrDeKm8tD%2B7EZzZOb0Cm0Vduvu0ThHiFweX9%2BplSSCBRZW44I6WB16XhemgK%2B2NiIhevyciwaUYwQs565YVb2UXDyod49RGwAbV62%2FUbY8SFdj3QMW5RIRPZxlu31TOMUkmOXi4ePGlikU59Wd7fl7flwK3bNji%2FrSM0w5d7fP4x6D0oq3B%2BhdVFR%2B&X-Amz-Signature=41e8820d274b3c5a7b5a65e9af51e61953734658e163a7b38c46a86c704e3f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDKUUR2%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIBJSwvoUl6BSAO1brheQpQSgbEMQdL8v8m2Yrt6I9kroAiEA2F%2Bw6mQeNu1BRugcDhxXr%2FQkwU5sD0N7ridzNd4EmDsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYgLsj0MsKKeOLzwircA8oridafCJtZRDaTcb9zoiSu8a2%2BuUChrHpryGGje8ZYcZ4CPjGkWC07oEvSCxkW98dd1piuOKU1lVDOw2Yjgb8FLXgsUwZqKWK6HzQmLcMHPQSgd2sbmGqNJQO3uIgcPmDbCRBKEv%2Fk38PxDT35rYEekFf7UiYe2B1ilR4JsNYd2A3%2BadY%2FLRgXmw2tWL6TNnMzVJ5nL1mLTI26rpe5yF%2FsxP6EVA%2F8VwBgJuvyX%2BXvMws%2FKTSlpRjX%2F4h2Eqil1IlM8Y0XjkPYk%2FfHoX6YCEjf05OVx0Z7Ne3BFeoS6cOwbyldxS%2FPlg98JV09ou0XlKS6y0tFPgA03ny1xT20piNdOFyJDEBBpZqvgskMAoAjcKUR4ZHuXG0Li%2BGVAsJklZ5GMvX6SG7y%2BqcXuDByrvwghp0dr7AK2m4GTGWr9IviPykzS0HkTTNZfAcE%2FglMSJO3z7xSRqFSa%2BebseODTcXztohWTtx8%2B35ysztxLUyDC0JYuHlmLpG5OFod5xw5MdzqwtgWgs55Csz2dZZvPhRVGCbgHiFnohbZD52cj2Tl9dgQq%2FxJTpo3SNqxHfKiGzXQndJr7Sr5SSbCeCrByLNsCNik7dDgTUiMdn2tZN6fJn6XfaFbdYT4lxTPMJO%2F4cYGOqUBzhplxwAZVX41JRkWB7T5Bc%2BR1Tk5ag2C51TrDeKm8tD%2B7EZzZOb0Cm0Vduvu0ThHiFweX9%2BplSSCBRZW44I6WB16XhemgK%2B2NiIhevyciwaUYwQs565YVb2UXDyod49RGwAbV62%2FUbY8SFdj3QMW5RIRPZxlu31TOMUkmOXi4ePGlikU59Wd7fl7flwK3bNji%2FrSM0w5d7fP4x6D0oq3B%2BhdVFR%2B&X-Amz-Signature=44af64365c691df89b87a47e28d4ee42ff78738acafa179b8476b057661f5bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
