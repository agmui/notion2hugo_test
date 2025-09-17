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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMUKKMU%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIEVyig57mhOyXtm9ozHjocCvwWAtm6D5XhbN5mOWZdoPAiAO9nW0wjLj42V%2Fdcqf0h5tBhjrTI6ycNTUOmT1Ms1I6yqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxbORYPciqZNRQH%2FAKtwDfuv2FQnKTNHQzdmZw1p3Cp%2BLbMIJVk0%2FwUZDWEtPdXu9cQHOl4Vkh0vdDWXLw3JCMbb3xj40cEbaV8f%2BjJ7DFFBSHFMak3PanM4Jn115en%2BWCXXR1Wnjpa9SRAYmdAwV2UH3rCTsajaQhW%2BrVgJSwfDTML0%2B2ozPaj3HaoIvJw4VWRYU4ggq68apaCXWw1SF88kVxUqvmYtuQD1o8NIaXVA9uCuEGLcxIAnD9vT%2Fy5C%2F8ICfblGAQxGYa9EHMfhR%2BXxqiWnBAr8YoUe3rez1D4%2BvcxjHnkxBYiDKU10wgQduQBVtU8i9IQVpwk9TTMHdE6cEgq3b1PJsOd6aN7QXHgmamWgGFW%2BuS82kGepsOMtWy2mYoQcy4s%2FRJrdBsLjXIOhJYNcu%2B4GGyR%2F2AYatqK0aPSq0kzvPhwZY0p8U9lyQycf6rECpkF2bBvxMHtAzQKtfVQJXo2CGHTQzORLcKvvrnONenC6KNt0bPGUxnlHZGjIswGpgiXtX45Ball5XVqac0jD4hhVSGFpg8f2jxXNsMMe7pjEor%2BAoXePDvO8yvEbXT2TNE9%2Fu%2BarsIj%2BEB3CzyHCefhQjB%2BGVV2ZvpfI5%2Fo%2Fg8onz1wTb1%2B%2FzjTsIEg%2FryX7wwsEF1jQw9e%2BnxgY6pgFp6xTlkWuTLZigr8DeqqkVj5YiJoE4dzHvx0BfpVhGqgeYlPmMCVltToYJAJxRvZJKHkSQ3U8P1aFBsLVVEPqR9vuy1g%2Bpwb8wXXtDQbTUNduMAFnmAddP%2FUM%2BUpSnmKirpjGp9IoxILs8erCAzwGR5JvRwNyyDT32HdQJfscAlAJWaLT7aIpk1cYAkmD5%2BtWY3r8z4dGOYhD%2FOOdwtuaivUY9AK0G&X-Amz-Signature=37f67e8346c635321bd3bab25d9da9d969055927c1ca19e16bdfb15031c02f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4AOBE%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcAfrcb69Y8tPOJu1FIZfjHYfHYDwqYy8QOV8%2FllTaOwIhAMdKcViZKB%2BY63XA4Rr03AgbxT979sCzhCWNz77Idi6pKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9qAb0lorN1%2FDcDnYq3AMrM92mZo5FM5P1Qdm9uh2LdVtN2tRwq8e1zRoqpuoFehZwJjRvJQ684LO7iSL37hL7j1mwpO9i9KUnc8GEd5qKXATAi9ccbIqQcMcmGQeRvtb0MI60xBDbpA1F4xsPIDTWFXT2pQa%2FBzSvk3s%2BHnSyYXIY7WG1XVDGIniv96%2Bbhpl4a%2BuEtUAm%2FFLiLepXlCFVOkm8%2FIMnxuWxz%2FKzmsmSEMiBy91Ujw73uqB1uRDP71arSJ4YMLdDOoPDkyRvLwKlkD6pBLPEY3lPjKvdSo4jlAydqd3D1SA74dIkCFBKVox9nmTP8TPRLgG3z3jihspdGCL1brMcEJjl%2BzHuIgQcBkGNWzIAGGA02i3s26%2BojgaUTYZMMWe%2B8LMFxIStJu8dureJN7PPt6zTCpN2NQA8Rl028uAzHNAvaXQFRx4wbAMlR%2BfRsyvAZvutRkA%2F%2FW3njqAgBoDAN%2FpUDvD%2B%2FI4%2BsMQPo4RYlcUmNm%2BWkrpoW2ducIRbS0bWpUXwzEgQAQ60KQ9L7KETSJuK3ucJgI1x4ADqZcvuuPNiBWLsUklDX205Vwp%2B%2FUIdm6YggzoULJaaHeriBqKBGPCP%2BHz1L3zdlpierFo9XjKOFI1LKrwCITZ3tutkxNy3T2DBpDDB8KfGBjqkAYW3gj65jErdqXZmgcip3N2%2Fm26O9SgZrdpsTN%2FszBajOo54k7fjB%2BTxm0P6rQCYxRoUnb7VPOxW6wtQgNKIjR%2FrawWebXWE9e1SxSeb%2FCnXtlTes3FXsJcgb4dKl%2FEr%2F2kRWBuaafVfNDyBp4OAPgcibZ8NaPNbi7QvQWtClKXQITQW0ZvJDgXsMrZRQdwqMcqufO%2FBkuf7HT%2Fdth3wFApm8gYq&X-Amz-Signature=a4639d508cf6529772550fa996181c8f07fdd7bf2594216309ad344acceee6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4AOBE%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcAfrcb69Y8tPOJu1FIZfjHYfHYDwqYy8QOV8%2FllTaOwIhAMdKcViZKB%2BY63XA4Rr03AgbxT979sCzhCWNz77Idi6pKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9qAb0lorN1%2FDcDnYq3AMrM92mZo5FM5P1Qdm9uh2LdVtN2tRwq8e1zRoqpuoFehZwJjRvJQ684LO7iSL37hL7j1mwpO9i9KUnc8GEd5qKXATAi9ccbIqQcMcmGQeRvtb0MI60xBDbpA1F4xsPIDTWFXT2pQa%2FBzSvk3s%2BHnSyYXIY7WG1XVDGIniv96%2Bbhpl4a%2BuEtUAm%2FFLiLepXlCFVOkm8%2FIMnxuWxz%2FKzmsmSEMiBy91Ujw73uqB1uRDP71arSJ4YMLdDOoPDkyRvLwKlkD6pBLPEY3lPjKvdSo4jlAydqd3D1SA74dIkCFBKVox9nmTP8TPRLgG3z3jihspdGCL1brMcEJjl%2BzHuIgQcBkGNWzIAGGA02i3s26%2BojgaUTYZMMWe%2B8LMFxIStJu8dureJN7PPt6zTCpN2NQA8Rl028uAzHNAvaXQFRx4wbAMlR%2BfRsyvAZvutRkA%2F%2FW3njqAgBoDAN%2FpUDvD%2B%2FI4%2BsMQPo4RYlcUmNm%2BWkrpoW2ducIRbS0bWpUXwzEgQAQ60KQ9L7KETSJuK3ucJgI1x4ADqZcvuuPNiBWLsUklDX205Vwp%2B%2FUIdm6YggzoULJaaHeriBqKBGPCP%2BHz1L3zdlpierFo9XjKOFI1LKrwCITZ3tutkxNy3T2DBpDDB8KfGBjqkAYW3gj65jErdqXZmgcip3N2%2Fm26O9SgZrdpsTN%2FszBajOo54k7fjB%2BTxm0P6rQCYxRoUnb7VPOxW6wtQgNKIjR%2FrawWebXWE9e1SxSeb%2FCnXtlTes3FXsJcgb4dKl%2FEr%2F2kRWBuaafVfNDyBp4OAPgcibZ8NaPNbi7QvQWtClKXQITQW0ZvJDgXsMrZRQdwqMcqufO%2FBkuf7HT%2Fdth3wFApm8gYq&X-Amz-Signature=6d5712287da31c649f0dbfae28fcde070c8eb90f8fe5940ac7f12f683a7a1f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4AOBE%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcAfrcb69Y8tPOJu1FIZfjHYfHYDwqYy8QOV8%2FllTaOwIhAMdKcViZKB%2BY63XA4Rr03AgbxT979sCzhCWNz77Idi6pKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9qAb0lorN1%2FDcDnYq3AMrM92mZo5FM5P1Qdm9uh2LdVtN2tRwq8e1zRoqpuoFehZwJjRvJQ684LO7iSL37hL7j1mwpO9i9KUnc8GEd5qKXATAi9ccbIqQcMcmGQeRvtb0MI60xBDbpA1F4xsPIDTWFXT2pQa%2FBzSvk3s%2BHnSyYXIY7WG1XVDGIniv96%2Bbhpl4a%2BuEtUAm%2FFLiLepXlCFVOkm8%2FIMnxuWxz%2FKzmsmSEMiBy91Ujw73uqB1uRDP71arSJ4YMLdDOoPDkyRvLwKlkD6pBLPEY3lPjKvdSo4jlAydqd3D1SA74dIkCFBKVox9nmTP8TPRLgG3z3jihspdGCL1brMcEJjl%2BzHuIgQcBkGNWzIAGGA02i3s26%2BojgaUTYZMMWe%2B8LMFxIStJu8dureJN7PPt6zTCpN2NQA8Rl028uAzHNAvaXQFRx4wbAMlR%2BfRsyvAZvutRkA%2F%2FW3njqAgBoDAN%2FpUDvD%2B%2FI4%2BsMQPo4RYlcUmNm%2BWkrpoW2ducIRbS0bWpUXwzEgQAQ60KQ9L7KETSJuK3ucJgI1x4ADqZcvuuPNiBWLsUklDX205Vwp%2B%2FUIdm6YggzoULJaaHeriBqKBGPCP%2BHz1L3zdlpierFo9XjKOFI1LKrwCITZ3tutkxNy3T2DBpDDB8KfGBjqkAYW3gj65jErdqXZmgcip3N2%2Fm26O9SgZrdpsTN%2FszBajOo54k7fjB%2BTxm0P6rQCYxRoUnb7VPOxW6wtQgNKIjR%2FrawWebXWE9e1SxSeb%2FCnXtlTes3FXsJcgb4dKl%2FEr%2F2kRWBuaafVfNDyBp4OAPgcibZ8NaPNbi7QvQWtClKXQITQW0ZvJDgXsMrZRQdwqMcqufO%2FBkuf7HT%2Fdth3wFApm8gYq&X-Amz-Signature=5cd7413bb044a8910fecb2039227e3af660bff08d86eae411242c439e532bfe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4AOBE%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcAfrcb69Y8tPOJu1FIZfjHYfHYDwqYy8QOV8%2FllTaOwIhAMdKcViZKB%2BY63XA4Rr03AgbxT979sCzhCWNz77Idi6pKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9qAb0lorN1%2FDcDnYq3AMrM92mZo5FM5P1Qdm9uh2LdVtN2tRwq8e1zRoqpuoFehZwJjRvJQ684LO7iSL37hL7j1mwpO9i9KUnc8GEd5qKXATAi9ccbIqQcMcmGQeRvtb0MI60xBDbpA1F4xsPIDTWFXT2pQa%2FBzSvk3s%2BHnSyYXIY7WG1XVDGIniv96%2Bbhpl4a%2BuEtUAm%2FFLiLepXlCFVOkm8%2FIMnxuWxz%2FKzmsmSEMiBy91Ujw73uqB1uRDP71arSJ4YMLdDOoPDkyRvLwKlkD6pBLPEY3lPjKvdSo4jlAydqd3D1SA74dIkCFBKVox9nmTP8TPRLgG3z3jihspdGCL1brMcEJjl%2BzHuIgQcBkGNWzIAGGA02i3s26%2BojgaUTYZMMWe%2B8LMFxIStJu8dureJN7PPt6zTCpN2NQA8Rl028uAzHNAvaXQFRx4wbAMlR%2BfRsyvAZvutRkA%2F%2FW3njqAgBoDAN%2FpUDvD%2B%2FI4%2BsMQPo4RYlcUmNm%2BWkrpoW2ducIRbS0bWpUXwzEgQAQ60KQ9L7KETSJuK3ucJgI1x4ADqZcvuuPNiBWLsUklDX205Vwp%2B%2FUIdm6YggzoULJaaHeriBqKBGPCP%2BHz1L3zdlpierFo9XjKOFI1LKrwCITZ3tutkxNy3T2DBpDDB8KfGBjqkAYW3gj65jErdqXZmgcip3N2%2Fm26O9SgZrdpsTN%2FszBajOo54k7fjB%2BTxm0P6rQCYxRoUnb7VPOxW6wtQgNKIjR%2FrawWebXWE9e1SxSeb%2FCnXtlTes3FXsJcgb4dKl%2FEr%2F2kRWBuaafVfNDyBp4OAPgcibZ8NaPNbi7QvQWtClKXQITQW0ZvJDgXsMrZRQdwqMcqufO%2FBkuf7HT%2Fdth3wFApm8gYq&X-Amz-Signature=34261fca5eb0684095d7ff8edf3502ee9f9c3f23d8d2058ba2833630d21ed349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4AOBE%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcAfrcb69Y8tPOJu1FIZfjHYfHYDwqYy8QOV8%2FllTaOwIhAMdKcViZKB%2BY63XA4Rr03AgbxT979sCzhCWNz77Idi6pKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9qAb0lorN1%2FDcDnYq3AMrM92mZo5FM5P1Qdm9uh2LdVtN2tRwq8e1zRoqpuoFehZwJjRvJQ684LO7iSL37hL7j1mwpO9i9KUnc8GEd5qKXATAi9ccbIqQcMcmGQeRvtb0MI60xBDbpA1F4xsPIDTWFXT2pQa%2FBzSvk3s%2BHnSyYXIY7WG1XVDGIniv96%2Bbhpl4a%2BuEtUAm%2FFLiLepXlCFVOkm8%2FIMnxuWxz%2FKzmsmSEMiBy91Ujw73uqB1uRDP71arSJ4YMLdDOoPDkyRvLwKlkD6pBLPEY3lPjKvdSo4jlAydqd3D1SA74dIkCFBKVox9nmTP8TPRLgG3z3jihspdGCL1brMcEJjl%2BzHuIgQcBkGNWzIAGGA02i3s26%2BojgaUTYZMMWe%2B8LMFxIStJu8dureJN7PPt6zTCpN2NQA8Rl028uAzHNAvaXQFRx4wbAMlR%2BfRsyvAZvutRkA%2F%2FW3njqAgBoDAN%2FpUDvD%2B%2FI4%2BsMQPo4RYlcUmNm%2BWkrpoW2ducIRbS0bWpUXwzEgQAQ60KQ9L7KETSJuK3ucJgI1x4ADqZcvuuPNiBWLsUklDX205Vwp%2B%2FUIdm6YggzoULJaaHeriBqKBGPCP%2BHz1L3zdlpierFo9XjKOFI1LKrwCITZ3tutkxNy3T2DBpDDB8KfGBjqkAYW3gj65jErdqXZmgcip3N2%2Fm26O9SgZrdpsTN%2FszBajOo54k7fjB%2BTxm0P6rQCYxRoUnb7VPOxW6wtQgNKIjR%2FrawWebXWE9e1SxSeb%2FCnXtlTes3FXsJcgb4dKl%2FEr%2F2kRWBuaafVfNDyBp4OAPgcibZ8NaPNbi7QvQWtClKXQITQW0ZvJDgXsMrZRQdwqMcqufO%2FBkuf7HT%2Fdth3wFApm8gYq&X-Amz-Signature=068a0d0be05836a85ee510d1df65e58d181f0c515fa934ab8593a472f117169e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4AOBE%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcAfrcb69Y8tPOJu1FIZfjHYfHYDwqYy8QOV8%2FllTaOwIhAMdKcViZKB%2BY63XA4Rr03AgbxT979sCzhCWNz77Idi6pKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9qAb0lorN1%2FDcDnYq3AMrM92mZo5FM5P1Qdm9uh2LdVtN2tRwq8e1zRoqpuoFehZwJjRvJQ684LO7iSL37hL7j1mwpO9i9KUnc8GEd5qKXATAi9ccbIqQcMcmGQeRvtb0MI60xBDbpA1F4xsPIDTWFXT2pQa%2FBzSvk3s%2BHnSyYXIY7WG1XVDGIniv96%2Bbhpl4a%2BuEtUAm%2FFLiLepXlCFVOkm8%2FIMnxuWxz%2FKzmsmSEMiBy91Ujw73uqB1uRDP71arSJ4YMLdDOoPDkyRvLwKlkD6pBLPEY3lPjKvdSo4jlAydqd3D1SA74dIkCFBKVox9nmTP8TPRLgG3z3jihspdGCL1brMcEJjl%2BzHuIgQcBkGNWzIAGGA02i3s26%2BojgaUTYZMMWe%2B8LMFxIStJu8dureJN7PPt6zTCpN2NQA8Rl028uAzHNAvaXQFRx4wbAMlR%2BfRsyvAZvutRkA%2F%2FW3njqAgBoDAN%2FpUDvD%2B%2FI4%2BsMQPo4RYlcUmNm%2BWkrpoW2ducIRbS0bWpUXwzEgQAQ60KQ9L7KETSJuK3ucJgI1x4ADqZcvuuPNiBWLsUklDX205Vwp%2B%2FUIdm6YggzoULJaaHeriBqKBGPCP%2BHz1L3zdlpierFo9XjKOFI1LKrwCITZ3tutkxNy3T2DBpDDB8KfGBjqkAYW3gj65jErdqXZmgcip3N2%2Fm26O9SgZrdpsTN%2FszBajOo54k7fjB%2BTxm0P6rQCYxRoUnb7VPOxW6wtQgNKIjR%2FrawWebXWE9e1SxSeb%2FCnXtlTes3FXsJcgb4dKl%2FEr%2F2kRWBuaafVfNDyBp4OAPgcibZ8NaPNbi7QvQWtClKXQITQW0ZvJDgXsMrZRQdwqMcqufO%2FBkuf7HT%2Fdth3wFApm8gYq&X-Amz-Signature=37158ba237de326ba54c1fa83d3069f87e5abb12332f98495575d928eebecb7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4AOBE%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcAfrcb69Y8tPOJu1FIZfjHYfHYDwqYy8QOV8%2FllTaOwIhAMdKcViZKB%2BY63XA4Rr03AgbxT979sCzhCWNz77Idi6pKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9qAb0lorN1%2FDcDnYq3AMrM92mZo5FM5P1Qdm9uh2LdVtN2tRwq8e1zRoqpuoFehZwJjRvJQ684LO7iSL37hL7j1mwpO9i9KUnc8GEd5qKXATAi9ccbIqQcMcmGQeRvtb0MI60xBDbpA1F4xsPIDTWFXT2pQa%2FBzSvk3s%2BHnSyYXIY7WG1XVDGIniv96%2Bbhpl4a%2BuEtUAm%2FFLiLepXlCFVOkm8%2FIMnxuWxz%2FKzmsmSEMiBy91Ujw73uqB1uRDP71arSJ4YMLdDOoPDkyRvLwKlkD6pBLPEY3lPjKvdSo4jlAydqd3D1SA74dIkCFBKVox9nmTP8TPRLgG3z3jihspdGCL1brMcEJjl%2BzHuIgQcBkGNWzIAGGA02i3s26%2BojgaUTYZMMWe%2B8LMFxIStJu8dureJN7PPt6zTCpN2NQA8Rl028uAzHNAvaXQFRx4wbAMlR%2BfRsyvAZvutRkA%2F%2FW3njqAgBoDAN%2FpUDvD%2B%2FI4%2BsMQPo4RYlcUmNm%2BWkrpoW2ducIRbS0bWpUXwzEgQAQ60KQ9L7KETSJuK3ucJgI1x4ADqZcvuuPNiBWLsUklDX205Vwp%2B%2FUIdm6YggzoULJaaHeriBqKBGPCP%2BHz1L3zdlpierFo9XjKOFI1LKrwCITZ3tutkxNy3T2DBpDDB8KfGBjqkAYW3gj65jErdqXZmgcip3N2%2Fm26O9SgZrdpsTN%2FszBajOo54k7fjB%2BTxm0P6rQCYxRoUnb7VPOxW6wtQgNKIjR%2FrawWebXWE9e1SxSeb%2FCnXtlTes3FXsJcgb4dKl%2FEr%2F2kRWBuaafVfNDyBp4OAPgcibZ8NaPNbi7QvQWtClKXQITQW0ZvJDgXsMrZRQdwqMcqufO%2FBkuf7HT%2Fdth3wFApm8gYq&X-Amz-Signature=97a265e9ed8078913b80b2606ec20be42ce62f633a7b1b2f1b62fc75f658e427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4AOBE%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcAfrcb69Y8tPOJu1FIZfjHYfHYDwqYy8QOV8%2FllTaOwIhAMdKcViZKB%2BY63XA4Rr03AgbxT979sCzhCWNz77Idi6pKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9qAb0lorN1%2FDcDnYq3AMrM92mZo5FM5P1Qdm9uh2LdVtN2tRwq8e1zRoqpuoFehZwJjRvJQ684LO7iSL37hL7j1mwpO9i9KUnc8GEd5qKXATAi9ccbIqQcMcmGQeRvtb0MI60xBDbpA1F4xsPIDTWFXT2pQa%2FBzSvk3s%2BHnSyYXIY7WG1XVDGIniv96%2Bbhpl4a%2BuEtUAm%2FFLiLepXlCFVOkm8%2FIMnxuWxz%2FKzmsmSEMiBy91Ujw73uqB1uRDP71arSJ4YMLdDOoPDkyRvLwKlkD6pBLPEY3lPjKvdSo4jlAydqd3D1SA74dIkCFBKVox9nmTP8TPRLgG3z3jihspdGCL1brMcEJjl%2BzHuIgQcBkGNWzIAGGA02i3s26%2BojgaUTYZMMWe%2B8LMFxIStJu8dureJN7PPt6zTCpN2NQA8Rl028uAzHNAvaXQFRx4wbAMlR%2BfRsyvAZvutRkA%2F%2FW3njqAgBoDAN%2FpUDvD%2B%2FI4%2BsMQPo4RYlcUmNm%2BWkrpoW2ducIRbS0bWpUXwzEgQAQ60KQ9L7KETSJuK3ucJgI1x4ADqZcvuuPNiBWLsUklDX205Vwp%2B%2FUIdm6YggzoULJaaHeriBqKBGPCP%2BHz1L3zdlpierFo9XjKOFI1LKrwCITZ3tutkxNy3T2DBpDDB8KfGBjqkAYW3gj65jErdqXZmgcip3N2%2Fm26O9SgZrdpsTN%2FszBajOo54k7fjB%2BTxm0P6rQCYxRoUnb7VPOxW6wtQgNKIjR%2FrawWebXWE9e1SxSeb%2FCnXtlTes3FXsJcgb4dKl%2FEr%2F2kRWBuaafVfNDyBp4OAPgcibZ8NaPNbi7QvQWtClKXQITQW0ZvJDgXsMrZRQdwqMcqufO%2FBkuf7HT%2Fdth3wFApm8gYq&X-Amz-Signature=529555264cae58294d9bef32aa154fdfd741f4e7cd6230b54134aa062245b195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4AOBE%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcAfrcb69Y8tPOJu1FIZfjHYfHYDwqYy8QOV8%2FllTaOwIhAMdKcViZKB%2BY63XA4Rr03AgbxT979sCzhCWNz77Idi6pKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9qAb0lorN1%2FDcDnYq3AMrM92mZo5FM5P1Qdm9uh2LdVtN2tRwq8e1zRoqpuoFehZwJjRvJQ684LO7iSL37hL7j1mwpO9i9KUnc8GEd5qKXATAi9ccbIqQcMcmGQeRvtb0MI60xBDbpA1F4xsPIDTWFXT2pQa%2FBzSvk3s%2BHnSyYXIY7WG1XVDGIniv96%2Bbhpl4a%2BuEtUAm%2FFLiLepXlCFVOkm8%2FIMnxuWxz%2FKzmsmSEMiBy91Ujw73uqB1uRDP71arSJ4YMLdDOoPDkyRvLwKlkD6pBLPEY3lPjKvdSo4jlAydqd3D1SA74dIkCFBKVox9nmTP8TPRLgG3z3jihspdGCL1brMcEJjl%2BzHuIgQcBkGNWzIAGGA02i3s26%2BojgaUTYZMMWe%2B8LMFxIStJu8dureJN7PPt6zTCpN2NQA8Rl028uAzHNAvaXQFRx4wbAMlR%2BfRsyvAZvutRkA%2F%2FW3njqAgBoDAN%2FpUDvD%2B%2FI4%2BsMQPo4RYlcUmNm%2BWkrpoW2ducIRbS0bWpUXwzEgQAQ60KQ9L7KETSJuK3ucJgI1x4ADqZcvuuPNiBWLsUklDX205Vwp%2B%2FUIdm6YggzoULJaaHeriBqKBGPCP%2BHz1L3zdlpierFo9XjKOFI1LKrwCITZ3tutkxNy3T2DBpDDB8KfGBjqkAYW3gj65jErdqXZmgcip3N2%2Fm26O9SgZrdpsTN%2FszBajOo54k7fjB%2BTxm0P6rQCYxRoUnb7VPOxW6wtQgNKIjR%2FrawWebXWE9e1SxSeb%2FCnXtlTes3FXsJcgb4dKl%2FEr%2F2kRWBuaafVfNDyBp4OAPgcibZ8NaPNbi7QvQWtClKXQITQW0ZvJDgXsMrZRQdwqMcqufO%2FBkuf7HT%2Fdth3wFApm8gYq&X-Amz-Signature=7698692b749788349fcecd0dfc0e3c519f20a1ea2cbc9c9186fad027b27482a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHY4AOBE%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCcAfrcb69Y8tPOJu1FIZfjHYfHYDwqYy8QOV8%2FllTaOwIhAMdKcViZKB%2BY63XA4Rr03AgbxT979sCzhCWNz77Idi6pKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9qAb0lorN1%2FDcDnYq3AMrM92mZo5FM5P1Qdm9uh2LdVtN2tRwq8e1zRoqpuoFehZwJjRvJQ684LO7iSL37hL7j1mwpO9i9KUnc8GEd5qKXATAi9ccbIqQcMcmGQeRvtb0MI60xBDbpA1F4xsPIDTWFXT2pQa%2FBzSvk3s%2BHnSyYXIY7WG1XVDGIniv96%2Bbhpl4a%2BuEtUAm%2FFLiLepXlCFVOkm8%2FIMnxuWxz%2FKzmsmSEMiBy91Ujw73uqB1uRDP71arSJ4YMLdDOoPDkyRvLwKlkD6pBLPEY3lPjKvdSo4jlAydqd3D1SA74dIkCFBKVox9nmTP8TPRLgG3z3jihspdGCL1brMcEJjl%2BzHuIgQcBkGNWzIAGGA02i3s26%2BojgaUTYZMMWe%2B8LMFxIStJu8dureJN7PPt6zTCpN2NQA8Rl028uAzHNAvaXQFRx4wbAMlR%2BfRsyvAZvutRkA%2F%2FW3njqAgBoDAN%2FpUDvD%2B%2FI4%2BsMQPo4RYlcUmNm%2BWkrpoW2ducIRbS0bWpUXwzEgQAQ60KQ9L7KETSJuK3ucJgI1x4ADqZcvuuPNiBWLsUklDX205Vwp%2B%2FUIdm6YggzoULJaaHeriBqKBGPCP%2BHz1L3zdlpierFo9XjKOFI1LKrwCITZ3tutkxNy3T2DBpDDB8KfGBjqkAYW3gj65jErdqXZmgcip3N2%2Fm26O9SgZrdpsTN%2FszBajOo54k7fjB%2BTxm0P6rQCYxRoUnb7VPOxW6wtQgNKIjR%2FrawWebXWE9e1SxSeb%2FCnXtlTes3FXsJcgb4dKl%2FEr%2F2kRWBuaafVfNDyBp4OAPgcibZ8NaPNbi7QvQWtClKXQITQW0ZvJDgXsMrZRQdwqMcqufO%2FBkuf7HT%2Fdth3wFApm8gYq&X-Amz-Signature=ee8c7be63cd6babe393340dbf2b9c9f92b3e1bc4766baf078273a216dd7030b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
