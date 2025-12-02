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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKR3FMJX%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIEdkZZi%2FaqbwTBjUXv4I9XjCKmOLMrPrH4UUA31nu%2BYKAiEAlYTsIaMZtbEaA7VQW2RdoLKdwM5ODqhMH6LmOqLq9asq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDIADma4cJo5hwdj%2BtCrcAynVK27ZEE806uAYB7hsDNcI0776sxkAVtMNtj%2BTzSv2tLtba1kXRvoK1IPLgjwQjuqaEGqL6VmUUW%2F6tyHFvTeS6D7bNrtXq7mVm6953%2BW0NQzDwKKoYkOlLdBH%2FKJLf835WcRcmmLzM4WYFK6wlMy9w9FC0J7S5qpCpF24uivKS84uFZFvq15VuI53EHUIcOBIIG6FZownTqePZ7dIXwA%2FPiThXM36BXZYFDoka10E0ANImQFnsKoCwHrugd%2B0viqxOkcZhdnaDOwcJK2CTVb4DvY0qtlQVzxoDGMlmXzQWwd6%2Bu0iKmMweuRxRlYfL86bx9GiQb4F26rRkzd54%2FgDAtG6JCTLQAqxmST2R9QdktEdqJqBNQQcc4MgvaYU7bb0Y4DdvXGykSz0aYX0b5p1B0uPyMVS9VrYCl5MwKAyng39NGBa5D2mFFoFjV6zt%2BfDAx3629nLvj9slBF7jNa0WE6PbhzjFMJjiB8Kc4%2BLBU%2BYtva93%2BB1mqK4m7UBIzeftSsYW4cOpfXrTfF6oJt9fLYuOE%2FSh%2BGH0qPrbut05MRr328Yr%2FVWY%2FYKpZMxBMgOsL0ax%2Fov7VyAYTp68BhfTTE7Evc6SMXfT0GR%2F5f31tTOsqnZ0fT%2FuoVBML%2FeuMkGOqUBOtia6IOHrNAG9XXoGjjDbvK2lDkK3xU8R7ZKhTr4xom7D2E9Y2BjRBYkB0cajhCPHIGInwhFsDI7LZ8he%2FGl1EMLd%2FjN6kzTQHw1O8u1xgme8g3fb0DDWILlKFj%2BTctkkheWSe9EFQvTWrCj%2BBMafImsSpY47njx24Vnm8yyQFm6sFQdH2Y%2FVisGRcEsJr4Cxvef%2FGKeaLVIc8ezfpcZno611CNL&X-Amz-Signature=e3dcfa5a82cd74f6d9e9d335f9f7d28fa9ef90f87d5e70a3baf3d119c252bd9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEMELVM7%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFtoPP64QAYJT6I00gK%2FlvghyGqEfg85%2BNJ7PvuKFCsvAiEA4zjpjGqBvVa27GiYsaWL0xm%2B0d9%2B0fz6XVBxlQ1HdkMq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDHHHiJhyapbo41rlkSrcA1jrj2DGVwJpcjTNygY5wZNDGg37TOu86BshtD9FivhTSHi2KKjn6sXC%2FuNK65ndkkkepsdAOMVd3bXX9y59roYd6svnitsOPlS6DXrykHK91ZvypjksR%2FlbiamDCMNJJlDJnNMmQV60jlgMXg4RKSW4JfHkNTlw9hIX6vYcfbtNnvZY5CJ26NmAeI3eStql10nz7PYpGobocBaC8wjnB6XWTNXyOdktvzg%2FvQs4zIK1QhazpK6qwgX%2BU7tNPUU8qma0ZPRH4eL%2FtFhiLEIE7rdjDRUy8J6%2Bu%2FK8sS3Y%2BAA6%2FacjKlvFyfL7rHEequB0U0MbbBIeWFdtRhcCwTjFfsZVjOfOzv3ga5JizXSHKgJXelsonWY%2BaauYHqznd5L5sD%2Bt89MFNVSB%2BXQ9qDA3%2FPKp1NklmdXpT7HaHHKWF%2FlJsYQzguKSdRQrLYB5K8g9L%2BlgROXBLN6dTukggACj0zXYce3Rl83yE6xmpIIBp4jdl%2FvELegCRMKcFPG5RhPHQoOOYt6JHNvn%2Fv5mem9A9E9Yv%2B14bklHOz0MfzM%2BKTQdbXRRKE3lJaBiulo69OeBV95hKmojNP6EoC6rK9ki3FcQUkV0lnRHfiwkxXIrUIrsehzctqip6zBPGwDwMKjeuMkGOqUBRU0hiwtv7eGv1W8tUo81YY6gp%2FqUB2QhK2a%2F9vZLqoEDy%2Fng9tnjegwVKOG7TlIyIsfOb4mGphblk6hWZY7BRHnq6I2qDFvCZA%2BcTKCIQyghmvKgLG1ghNIGEMFBCaqWDgsN0wXqUz5kHBtcDfpfjvo2VtxRwpkIZncQk5TR6ypUHKBwv1VeS2hQg65IM%2BJdkRcfUWyUJorDhKKrYIIMBY0gWFjR&X-Amz-Signature=e38cf7ead6f436fb6915a417296fb57a8a84136be140464ec5ed372739bce8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEMELVM7%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFtoPP64QAYJT6I00gK%2FlvghyGqEfg85%2BNJ7PvuKFCsvAiEA4zjpjGqBvVa27GiYsaWL0xm%2B0d9%2B0fz6XVBxlQ1HdkMq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDHHHiJhyapbo41rlkSrcA1jrj2DGVwJpcjTNygY5wZNDGg37TOu86BshtD9FivhTSHi2KKjn6sXC%2FuNK65ndkkkepsdAOMVd3bXX9y59roYd6svnitsOPlS6DXrykHK91ZvypjksR%2FlbiamDCMNJJlDJnNMmQV60jlgMXg4RKSW4JfHkNTlw9hIX6vYcfbtNnvZY5CJ26NmAeI3eStql10nz7PYpGobocBaC8wjnB6XWTNXyOdktvzg%2FvQs4zIK1QhazpK6qwgX%2BU7tNPUU8qma0ZPRH4eL%2FtFhiLEIE7rdjDRUy8J6%2Bu%2FK8sS3Y%2BAA6%2FacjKlvFyfL7rHEequB0U0MbbBIeWFdtRhcCwTjFfsZVjOfOzv3ga5JizXSHKgJXelsonWY%2BaauYHqznd5L5sD%2Bt89MFNVSB%2BXQ9qDA3%2FPKp1NklmdXpT7HaHHKWF%2FlJsYQzguKSdRQrLYB5K8g9L%2BlgROXBLN6dTukggACj0zXYce3Rl83yE6xmpIIBp4jdl%2FvELegCRMKcFPG5RhPHQoOOYt6JHNvn%2Fv5mem9A9E9Yv%2B14bklHOz0MfzM%2BKTQdbXRRKE3lJaBiulo69OeBV95hKmojNP6EoC6rK9ki3FcQUkV0lnRHfiwkxXIrUIrsehzctqip6zBPGwDwMKjeuMkGOqUBRU0hiwtv7eGv1W8tUo81YY6gp%2FqUB2QhK2a%2F9vZLqoEDy%2Fng9tnjegwVKOG7TlIyIsfOb4mGphblk6hWZY7BRHnq6I2qDFvCZA%2BcTKCIQyghmvKgLG1ghNIGEMFBCaqWDgsN0wXqUz5kHBtcDfpfjvo2VtxRwpkIZncQk5TR6ypUHKBwv1VeS2hQg65IM%2BJdkRcfUWyUJorDhKKrYIIMBY0gWFjR&X-Amz-Signature=51e340825a6de4a6623a83605539ac34a7f0d40834af1752f7177f7dd9956065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEMELVM7%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFtoPP64QAYJT6I00gK%2FlvghyGqEfg85%2BNJ7PvuKFCsvAiEA4zjpjGqBvVa27GiYsaWL0xm%2B0d9%2B0fz6XVBxlQ1HdkMq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDHHHiJhyapbo41rlkSrcA1jrj2DGVwJpcjTNygY5wZNDGg37TOu86BshtD9FivhTSHi2KKjn6sXC%2FuNK65ndkkkepsdAOMVd3bXX9y59roYd6svnitsOPlS6DXrykHK91ZvypjksR%2FlbiamDCMNJJlDJnNMmQV60jlgMXg4RKSW4JfHkNTlw9hIX6vYcfbtNnvZY5CJ26NmAeI3eStql10nz7PYpGobocBaC8wjnB6XWTNXyOdktvzg%2FvQs4zIK1QhazpK6qwgX%2BU7tNPUU8qma0ZPRH4eL%2FtFhiLEIE7rdjDRUy8J6%2Bu%2FK8sS3Y%2BAA6%2FacjKlvFyfL7rHEequB0U0MbbBIeWFdtRhcCwTjFfsZVjOfOzv3ga5JizXSHKgJXelsonWY%2BaauYHqznd5L5sD%2Bt89MFNVSB%2BXQ9qDA3%2FPKp1NklmdXpT7HaHHKWF%2FlJsYQzguKSdRQrLYB5K8g9L%2BlgROXBLN6dTukggACj0zXYce3Rl83yE6xmpIIBp4jdl%2FvELegCRMKcFPG5RhPHQoOOYt6JHNvn%2Fv5mem9A9E9Yv%2B14bklHOz0MfzM%2BKTQdbXRRKE3lJaBiulo69OeBV95hKmojNP6EoC6rK9ki3FcQUkV0lnRHfiwkxXIrUIrsehzctqip6zBPGwDwMKjeuMkGOqUBRU0hiwtv7eGv1W8tUo81YY6gp%2FqUB2QhK2a%2F9vZLqoEDy%2Fng9tnjegwVKOG7TlIyIsfOb4mGphblk6hWZY7BRHnq6I2qDFvCZA%2BcTKCIQyghmvKgLG1ghNIGEMFBCaqWDgsN0wXqUz5kHBtcDfpfjvo2VtxRwpkIZncQk5TR6ypUHKBwv1VeS2hQg65IM%2BJdkRcfUWyUJorDhKKrYIIMBY0gWFjR&X-Amz-Signature=4732ea830de3890d0d54fee85ce766dc907c396d3fb565ad27f144d9a8a4700f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEMELVM7%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFtoPP64QAYJT6I00gK%2FlvghyGqEfg85%2BNJ7PvuKFCsvAiEA4zjpjGqBvVa27GiYsaWL0xm%2B0d9%2B0fz6XVBxlQ1HdkMq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDHHHiJhyapbo41rlkSrcA1jrj2DGVwJpcjTNygY5wZNDGg37TOu86BshtD9FivhTSHi2KKjn6sXC%2FuNK65ndkkkepsdAOMVd3bXX9y59roYd6svnitsOPlS6DXrykHK91ZvypjksR%2FlbiamDCMNJJlDJnNMmQV60jlgMXg4RKSW4JfHkNTlw9hIX6vYcfbtNnvZY5CJ26NmAeI3eStql10nz7PYpGobocBaC8wjnB6XWTNXyOdktvzg%2FvQs4zIK1QhazpK6qwgX%2BU7tNPUU8qma0ZPRH4eL%2FtFhiLEIE7rdjDRUy8J6%2Bu%2FK8sS3Y%2BAA6%2FacjKlvFyfL7rHEequB0U0MbbBIeWFdtRhcCwTjFfsZVjOfOzv3ga5JizXSHKgJXelsonWY%2BaauYHqznd5L5sD%2Bt89MFNVSB%2BXQ9qDA3%2FPKp1NklmdXpT7HaHHKWF%2FlJsYQzguKSdRQrLYB5K8g9L%2BlgROXBLN6dTukggACj0zXYce3Rl83yE6xmpIIBp4jdl%2FvELegCRMKcFPG5RhPHQoOOYt6JHNvn%2Fv5mem9A9E9Yv%2B14bklHOz0MfzM%2BKTQdbXRRKE3lJaBiulo69OeBV95hKmojNP6EoC6rK9ki3FcQUkV0lnRHfiwkxXIrUIrsehzctqip6zBPGwDwMKjeuMkGOqUBRU0hiwtv7eGv1W8tUo81YY6gp%2FqUB2QhK2a%2F9vZLqoEDy%2Fng9tnjegwVKOG7TlIyIsfOb4mGphblk6hWZY7BRHnq6I2qDFvCZA%2BcTKCIQyghmvKgLG1ghNIGEMFBCaqWDgsN0wXqUz5kHBtcDfpfjvo2VtxRwpkIZncQk5TR6ypUHKBwv1VeS2hQg65IM%2BJdkRcfUWyUJorDhKKrYIIMBY0gWFjR&X-Amz-Signature=064e430f355a373a7d44fd93e57a55caccb0269901cddc9a13a5d55753182ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEMELVM7%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFtoPP64QAYJT6I00gK%2FlvghyGqEfg85%2BNJ7PvuKFCsvAiEA4zjpjGqBvVa27GiYsaWL0xm%2B0d9%2B0fz6XVBxlQ1HdkMq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDHHHiJhyapbo41rlkSrcA1jrj2DGVwJpcjTNygY5wZNDGg37TOu86BshtD9FivhTSHi2KKjn6sXC%2FuNK65ndkkkepsdAOMVd3bXX9y59roYd6svnitsOPlS6DXrykHK91ZvypjksR%2FlbiamDCMNJJlDJnNMmQV60jlgMXg4RKSW4JfHkNTlw9hIX6vYcfbtNnvZY5CJ26NmAeI3eStql10nz7PYpGobocBaC8wjnB6XWTNXyOdktvzg%2FvQs4zIK1QhazpK6qwgX%2BU7tNPUU8qma0ZPRH4eL%2FtFhiLEIE7rdjDRUy8J6%2Bu%2FK8sS3Y%2BAA6%2FacjKlvFyfL7rHEequB0U0MbbBIeWFdtRhcCwTjFfsZVjOfOzv3ga5JizXSHKgJXelsonWY%2BaauYHqznd5L5sD%2Bt89MFNVSB%2BXQ9qDA3%2FPKp1NklmdXpT7HaHHKWF%2FlJsYQzguKSdRQrLYB5K8g9L%2BlgROXBLN6dTukggACj0zXYce3Rl83yE6xmpIIBp4jdl%2FvELegCRMKcFPG5RhPHQoOOYt6JHNvn%2Fv5mem9A9E9Yv%2B14bklHOz0MfzM%2BKTQdbXRRKE3lJaBiulo69OeBV95hKmojNP6EoC6rK9ki3FcQUkV0lnRHfiwkxXIrUIrsehzctqip6zBPGwDwMKjeuMkGOqUBRU0hiwtv7eGv1W8tUo81YY6gp%2FqUB2QhK2a%2F9vZLqoEDy%2Fng9tnjegwVKOG7TlIyIsfOb4mGphblk6hWZY7BRHnq6I2qDFvCZA%2BcTKCIQyghmvKgLG1ghNIGEMFBCaqWDgsN0wXqUz5kHBtcDfpfjvo2VtxRwpkIZncQk5TR6ypUHKBwv1VeS2hQg65IM%2BJdkRcfUWyUJorDhKKrYIIMBY0gWFjR&X-Amz-Signature=3b2d32036131f5fb002d3dba73d2c542afd11bbcdd2b51ab7ce95a1955ef2ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEMELVM7%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFtoPP64QAYJT6I00gK%2FlvghyGqEfg85%2BNJ7PvuKFCsvAiEA4zjpjGqBvVa27GiYsaWL0xm%2B0d9%2B0fz6XVBxlQ1HdkMq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDHHHiJhyapbo41rlkSrcA1jrj2DGVwJpcjTNygY5wZNDGg37TOu86BshtD9FivhTSHi2KKjn6sXC%2FuNK65ndkkkepsdAOMVd3bXX9y59roYd6svnitsOPlS6DXrykHK91ZvypjksR%2FlbiamDCMNJJlDJnNMmQV60jlgMXg4RKSW4JfHkNTlw9hIX6vYcfbtNnvZY5CJ26NmAeI3eStql10nz7PYpGobocBaC8wjnB6XWTNXyOdktvzg%2FvQs4zIK1QhazpK6qwgX%2BU7tNPUU8qma0ZPRH4eL%2FtFhiLEIE7rdjDRUy8J6%2Bu%2FK8sS3Y%2BAA6%2FacjKlvFyfL7rHEequB0U0MbbBIeWFdtRhcCwTjFfsZVjOfOzv3ga5JizXSHKgJXelsonWY%2BaauYHqznd5L5sD%2Bt89MFNVSB%2BXQ9qDA3%2FPKp1NklmdXpT7HaHHKWF%2FlJsYQzguKSdRQrLYB5K8g9L%2BlgROXBLN6dTukggACj0zXYce3Rl83yE6xmpIIBp4jdl%2FvELegCRMKcFPG5RhPHQoOOYt6JHNvn%2Fv5mem9A9E9Yv%2B14bklHOz0MfzM%2BKTQdbXRRKE3lJaBiulo69OeBV95hKmojNP6EoC6rK9ki3FcQUkV0lnRHfiwkxXIrUIrsehzctqip6zBPGwDwMKjeuMkGOqUBRU0hiwtv7eGv1W8tUo81YY6gp%2FqUB2QhK2a%2F9vZLqoEDy%2Fng9tnjegwVKOG7TlIyIsfOb4mGphblk6hWZY7BRHnq6I2qDFvCZA%2BcTKCIQyghmvKgLG1ghNIGEMFBCaqWDgsN0wXqUz5kHBtcDfpfjvo2VtxRwpkIZncQk5TR6ypUHKBwv1VeS2hQg65IM%2BJdkRcfUWyUJorDhKKrYIIMBY0gWFjR&X-Amz-Signature=9fd8b2cef279d39334d98ea91e16878e9b120370e08b92b9175b8caabc62e80a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEMELVM7%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFtoPP64QAYJT6I00gK%2FlvghyGqEfg85%2BNJ7PvuKFCsvAiEA4zjpjGqBvVa27GiYsaWL0xm%2B0d9%2B0fz6XVBxlQ1HdkMq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDHHHiJhyapbo41rlkSrcA1jrj2DGVwJpcjTNygY5wZNDGg37TOu86BshtD9FivhTSHi2KKjn6sXC%2FuNK65ndkkkepsdAOMVd3bXX9y59roYd6svnitsOPlS6DXrykHK91ZvypjksR%2FlbiamDCMNJJlDJnNMmQV60jlgMXg4RKSW4JfHkNTlw9hIX6vYcfbtNnvZY5CJ26NmAeI3eStql10nz7PYpGobocBaC8wjnB6XWTNXyOdktvzg%2FvQs4zIK1QhazpK6qwgX%2BU7tNPUU8qma0ZPRH4eL%2FtFhiLEIE7rdjDRUy8J6%2Bu%2FK8sS3Y%2BAA6%2FacjKlvFyfL7rHEequB0U0MbbBIeWFdtRhcCwTjFfsZVjOfOzv3ga5JizXSHKgJXelsonWY%2BaauYHqznd5L5sD%2Bt89MFNVSB%2BXQ9qDA3%2FPKp1NklmdXpT7HaHHKWF%2FlJsYQzguKSdRQrLYB5K8g9L%2BlgROXBLN6dTukggACj0zXYce3Rl83yE6xmpIIBp4jdl%2FvELegCRMKcFPG5RhPHQoOOYt6JHNvn%2Fv5mem9A9E9Yv%2B14bklHOz0MfzM%2BKTQdbXRRKE3lJaBiulo69OeBV95hKmojNP6EoC6rK9ki3FcQUkV0lnRHfiwkxXIrUIrsehzctqip6zBPGwDwMKjeuMkGOqUBRU0hiwtv7eGv1W8tUo81YY6gp%2FqUB2QhK2a%2F9vZLqoEDy%2Fng9tnjegwVKOG7TlIyIsfOb4mGphblk6hWZY7BRHnq6I2qDFvCZA%2BcTKCIQyghmvKgLG1ghNIGEMFBCaqWDgsN0wXqUz5kHBtcDfpfjvo2VtxRwpkIZncQk5TR6ypUHKBwv1VeS2hQg65IM%2BJdkRcfUWyUJorDhKKrYIIMBY0gWFjR&X-Amz-Signature=6eae8619d6f74c98020c9e6485f33709afcc9817d477bd5c92a45885a1f897c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEMELVM7%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFtoPP64QAYJT6I00gK%2FlvghyGqEfg85%2BNJ7PvuKFCsvAiEA4zjpjGqBvVa27GiYsaWL0xm%2B0d9%2B0fz6XVBxlQ1HdkMq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDHHHiJhyapbo41rlkSrcA1jrj2DGVwJpcjTNygY5wZNDGg37TOu86BshtD9FivhTSHi2KKjn6sXC%2FuNK65ndkkkepsdAOMVd3bXX9y59roYd6svnitsOPlS6DXrykHK91ZvypjksR%2FlbiamDCMNJJlDJnNMmQV60jlgMXg4RKSW4JfHkNTlw9hIX6vYcfbtNnvZY5CJ26NmAeI3eStql10nz7PYpGobocBaC8wjnB6XWTNXyOdktvzg%2FvQs4zIK1QhazpK6qwgX%2BU7tNPUU8qma0ZPRH4eL%2FtFhiLEIE7rdjDRUy8J6%2Bu%2FK8sS3Y%2BAA6%2FacjKlvFyfL7rHEequB0U0MbbBIeWFdtRhcCwTjFfsZVjOfOzv3ga5JizXSHKgJXelsonWY%2BaauYHqznd5L5sD%2Bt89MFNVSB%2BXQ9qDA3%2FPKp1NklmdXpT7HaHHKWF%2FlJsYQzguKSdRQrLYB5K8g9L%2BlgROXBLN6dTukggACj0zXYce3Rl83yE6xmpIIBp4jdl%2FvELegCRMKcFPG5RhPHQoOOYt6JHNvn%2Fv5mem9A9E9Yv%2B14bklHOz0MfzM%2BKTQdbXRRKE3lJaBiulo69OeBV95hKmojNP6EoC6rK9ki3FcQUkV0lnRHfiwkxXIrUIrsehzctqip6zBPGwDwMKjeuMkGOqUBRU0hiwtv7eGv1W8tUo81YY6gp%2FqUB2QhK2a%2F9vZLqoEDy%2Fng9tnjegwVKOG7TlIyIsfOb4mGphblk6hWZY7BRHnq6I2qDFvCZA%2BcTKCIQyghmvKgLG1ghNIGEMFBCaqWDgsN0wXqUz5kHBtcDfpfjvo2VtxRwpkIZncQk5TR6ypUHKBwv1VeS2hQg65IM%2BJdkRcfUWyUJorDhKKrYIIMBY0gWFjR&X-Amz-Signature=36d5c7c7d0ad5fa72bb52bd71c6cb63adfa1921de8c63bdf7b367b37f1507663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEMELVM7%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFtoPP64QAYJT6I00gK%2FlvghyGqEfg85%2BNJ7PvuKFCsvAiEA4zjpjGqBvVa27GiYsaWL0xm%2B0d9%2B0fz6XVBxlQ1HdkMq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDHHHiJhyapbo41rlkSrcA1jrj2DGVwJpcjTNygY5wZNDGg37TOu86BshtD9FivhTSHi2KKjn6sXC%2FuNK65ndkkkepsdAOMVd3bXX9y59roYd6svnitsOPlS6DXrykHK91ZvypjksR%2FlbiamDCMNJJlDJnNMmQV60jlgMXg4RKSW4JfHkNTlw9hIX6vYcfbtNnvZY5CJ26NmAeI3eStql10nz7PYpGobocBaC8wjnB6XWTNXyOdktvzg%2FvQs4zIK1QhazpK6qwgX%2BU7tNPUU8qma0ZPRH4eL%2FtFhiLEIE7rdjDRUy8J6%2Bu%2FK8sS3Y%2BAA6%2FacjKlvFyfL7rHEequB0U0MbbBIeWFdtRhcCwTjFfsZVjOfOzv3ga5JizXSHKgJXelsonWY%2BaauYHqznd5L5sD%2Bt89MFNVSB%2BXQ9qDA3%2FPKp1NklmdXpT7HaHHKWF%2FlJsYQzguKSdRQrLYB5K8g9L%2BlgROXBLN6dTukggACj0zXYce3Rl83yE6xmpIIBp4jdl%2FvELegCRMKcFPG5RhPHQoOOYt6JHNvn%2Fv5mem9A9E9Yv%2B14bklHOz0MfzM%2BKTQdbXRRKE3lJaBiulo69OeBV95hKmojNP6EoC6rK9ki3FcQUkV0lnRHfiwkxXIrUIrsehzctqip6zBPGwDwMKjeuMkGOqUBRU0hiwtv7eGv1W8tUo81YY6gp%2FqUB2QhK2a%2F9vZLqoEDy%2Fng9tnjegwVKOG7TlIyIsfOb4mGphblk6hWZY7BRHnq6I2qDFvCZA%2BcTKCIQyghmvKgLG1ghNIGEMFBCaqWDgsN0wXqUz5kHBtcDfpfjvo2VtxRwpkIZncQk5TR6ypUHKBwv1VeS2hQg65IM%2BJdkRcfUWyUJorDhKKrYIIMBY0gWFjR&X-Amz-Signature=f12148db692d87f4d35abb582330668522af799bc26a0d1034b96246dbc18853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEMELVM7%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFtoPP64QAYJT6I00gK%2FlvghyGqEfg85%2BNJ7PvuKFCsvAiEA4zjpjGqBvVa27GiYsaWL0xm%2B0d9%2B0fz6XVBxlQ1HdkMq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDHHHiJhyapbo41rlkSrcA1jrj2DGVwJpcjTNygY5wZNDGg37TOu86BshtD9FivhTSHi2KKjn6sXC%2FuNK65ndkkkepsdAOMVd3bXX9y59roYd6svnitsOPlS6DXrykHK91ZvypjksR%2FlbiamDCMNJJlDJnNMmQV60jlgMXg4RKSW4JfHkNTlw9hIX6vYcfbtNnvZY5CJ26NmAeI3eStql10nz7PYpGobocBaC8wjnB6XWTNXyOdktvzg%2FvQs4zIK1QhazpK6qwgX%2BU7tNPUU8qma0ZPRH4eL%2FtFhiLEIE7rdjDRUy8J6%2Bu%2FK8sS3Y%2BAA6%2FacjKlvFyfL7rHEequB0U0MbbBIeWFdtRhcCwTjFfsZVjOfOzv3ga5JizXSHKgJXelsonWY%2BaauYHqznd5L5sD%2Bt89MFNVSB%2BXQ9qDA3%2FPKp1NklmdXpT7HaHHKWF%2FlJsYQzguKSdRQrLYB5K8g9L%2BlgROXBLN6dTukggACj0zXYce3Rl83yE6xmpIIBp4jdl%2FvELegCRMKcFPG5RhPHQoOOYt6JHNvn%2Fv5mem9A9E9Yv%2B14bklHOz0MfzM%2BKTQdbXRRKE3lJaBiulo69OeBV95hKmojNP6EoC6rK9ki3FcQUkV0lnRHfiwkxXIrUIrsehzctqip6zBPGwDwMKjeuMkGOqUBRU0hiwtv7eGv1W8tUo81YY6gp%2FqUB2QhK2a%2F9vZLqoEDy%2Fng9tnjegwVKOG7TlIyIsfOb4mGphblk6hWZY7BRHnq6I2qDFvCZA%2BcTKCIQyghmvKgLG1ghNIGEMFBCaqWDgsN0wXqUz5kHBtcDfpfjvo2VtxRwpkIZncQk5TR6ypUHKBwv1VeS2hQg65IM%2BJdkRcfUWyUJorDhKKrYIIMBY0gWFjR&X-Amz-Signature=064e430f355a373a7d44fd93e57a55caccb0269901cddc9a13a5d55753182ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
