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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZW235XQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICPepOekBT9EJnVbxehGZxfkvM5Lnp4pfL7NMlLQ7xqwAiEA2U%2BPUL0m%2BqcjMI1JkxOEfug4w3z2uik%2BojGCF0FvBhYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLF6RdeHWme66kOFPSrcA0eqAmqh4O%2BwjNLgDDFMO4inGZO2mwliQVlKmtC4QnFJlkPwALvpS36ZHz0nh6P1tia%2BhZM25fH7qNFXmUj4%2Fo0ccPYFSXWWJ6lvNx7Cze%2BLq3NEL%2FhIREebZFoYBi2cPdR7n1KZO%2BzJ0vm5hJxMm1kP5png5xXepLyeozlAVbiyhJTTMbnQ%2FkTwRMG8lqsGR8s3saHgl8ioAqhP%2FVZ9JlUcEjDWBg0E67%2Fq%2FAy6zUjBsFFv9BYRZfMqu8izrdcyMTXLJepNwlweEU2XnwLEEiOUOH3pOkYmwSXVrDgSJOiw2o%2BmVRzweZJIunhzTVqDJH0fF7uX%2F4qte6DaU0xBIj%2F9uSPkRmlLJuqjCgoDLeMax2rQR9GIKhsELQdSbLiUO%2BPSjoIEkwTNGczCm4dGP1eZBujwpCGRF6Y5BZzwm%2FXRHePfcXsGZORH4HcKoPKuGHeXVEvCbhjW8i5muSYgrQ0iw3dOWkptkL2hK9rLnaBGUQItApBDUf0OgBsOxxnfDtYqTm8DK235XqknOijx%2FIIvsmnPkFYFZxriBsik9DTHYiQXzad0tHy8hx50hAUuqcKnoPDi9NPOYZl5Pk%2FCJzDs7oXLFyi%2FJQrOC3Qy1mJsqHit1VjXuAahWcsRMPue%2BMQGOqUBfBbhjLlFIOxW1KOA0eEnHFRgrZgbZUTMO1VluhHacYeLFsXHSDpvrvjaXg3e2xjZ2unmma0PRfe7zmOKRtiYAS4ESfv%2Fy8XR5WNqw3BYltjqFsdbYplRwcbKBG6xaCd4BkU1HALyt2xvHoOf8RIleB6Oe60aZ5Q7Q4FlA9ciiycxaEcdMaZSq0oJJ62QJeX9U2ukkTrp4ZaDAmAVvkCVZlPjBCcK&X-Amz-Signature=f00ad89c24ee6e2201563432d70567ec33c919a6a0bf34022f87d8d62e7c0ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHLTDDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAiZmsQ8Antv7x%2F%2BcmUv8ZmN5%2Fnlrnw6SgOOaE5IJ69eAiEAv3LnqpvdqGpm8ldQgGxtJaJ256uo1i3ggA62uk10pcQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJPycKkOs7IwjUCZ2CrcA9ItozP18Paflm4ey73OxE%2BebfhQFTuud6YCiIs3kV%2B4owZF4ks9iYI%2F%2FYP4y16MmTURdlfCa7YngeB1cqxmgK9KaWv8xoX%2B0%2BuJ7V56wqpYi%2FRVLKIHPFerVmV%2BHuslxHF7pjCM7iVgHlhvOjGsJJhvKitwW%2FIFjAUK5xQivhtqZ%2Fr%2FcEgY8xm%2FofJ9GSy11Y1LQgdehsNEUMgADRE2I8npwV4ldUdfwCYPmpayTSLdOrZUB5Otu6QCAZxgSNodExYgWORGWH%2BM9qaLaG0OraNqzHshS4JJw94DUnWPDjDy73kGZf5uZ37ZbLfMTiL%2BGJ84nntVbnJQg1iy3gjRib7fxEy7%2FqRtjaJjrs28N82VRAm%2FEOLSkC8TbQafZPlxZL5yNLx7mG9Igw8cdS1Mq6XSdnMOkCR4yxwY7Ha3gXLba6NjN4%2FBNz3CCsBRtHPVhGgQav42n6DrUBe%2FGdPiX7gLP2vOt%2FEhTu9X5yi1b%2FyWpnKyfwC%2FsxLp%2B8d9pbmshhtqoDqmY5iDfK6kA98td0XTxp5dpyoMrZ%2BQ6JEBDN5YdsoM%2FjzolL7hHOSqJQYmxMhb2iDkCrQlvvOvXyJc83SZsdijWSM4QcCutW9y7e9iZQZo5kfFohnkZZjXMPGf%2BMQGOqUBejoR19GiME2%2BwsXJ9YcHoviWmKzTsw4TpcQxyBwu2OjOLTaz2y4HSfnVw%2B7PZY9zwTaVQ%2Be9V0GBnw1dXnG3kcQ2XF2SGK8uxf56V6f7tRFNn5p83P9pGkXRGLy02f4PixEeiX5iIwy67yoQcgtmmT0rzNjJNdCJecGwZMW6bkiCArG2EDJo3o5lvcCDu36nfNzj%2BTeqNYZyrLd99byawztogafi&X-Amz-Signature=36bd66da4d703afc2344b45f839272647d1b70c3b319a4e2b9169fea2bba7e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHLTDDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAiZmsQ8Antv7x%2F%2BcmUv8ZmN5%2Fnlrnw6SgOOaE5IJ69eAiEAv3LnqpvdqGpm8ldQgGxtJaJ256uo1i3ggA62uk10pcQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJPycKkOs7IwjUCZ2CrcA9ItozP18Paflm4ey73OxE%2BebfhQFTuud6YCiIs3kV%2B4owZF4ks9iYI%2F%2FYP4y16MmTURdlfCa7YngeB1cqxmgK9KaWv8xoX%2B0%2BuJ7V56wqpYi%2FRVLKIHPFerVmV%2BHuslxHF7pjCM7iVgHlhvOjGsJJhvKitwW%2FIFjAUK5xQivhtqZ%2Fr%2FcEgY8xm%2FofJ9GSy11Y1LQgdehsNEUMgADRE2I8npwV4ldUdfwCYPmpayTSLdOrZUB5Otu6QCAZxgSNodExYgWORGWH%2BM9qaLaG0OraNqzHshS4JJw94DUnWPDjDy73kGZf5uZ37ZbLfMTiL%2BGJ84nntVbnJQg1iy3gjRib7fxEy7%2FqRtjaJjrs28N82VRAm%2FEOLSkC8TbQafZPlxZL5yNLx7mG9Igw8cdS1Mq6XSdnMOkCR4yxwY7Ha3gXLba6NjN4%2FBNz3CCsBRtHPVhGgQav42n6DrUBe%2FGdPiX7gLP2vOt%2FEhTu9X5yi1b%2FyWpnKyfwC%2FsxLp%2B8d9pbmshhtqoDqmY5iDfK6kA98td0XTxp5dpyoMrZ%2BQ6JEBDN5YdsoM%2FjzolL7hHOSqJQYmxMhb2iDkCrQlvvOvXyJc83SZsdijWSM4QcCutW9y7e9iZQZo5kfFohnkZZjXMPGf%2BMQGOqUBejoR19GiME2%2BwsXJ9YcHoviWmKzTsw4TpcQxyBwu2OjOLTaz2y4HSfnVw%2B7PZY9zwTaVQ%2Be9V0GBnw1dXnG3kcQ2XF2SGK8uxf56V6f7tRFNn5p83P9pGkXRGLy02f4PixEeiX5iIwy67yoQcgtmmT0rzNjJNdCJecGwZMW6bkiCArG2EDJo3o5lvcCDu36nfNzj%2BTeqNYZyrLd99byawztogafi&X-Amz-Signature=d043abd0ce86e67e0989cb24ae87d2a08541ea88c7ede439aff56bb6e34c8328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHLTDDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAiZmsQ8Antv7x%2F%2BcmUv8ZmN5%2Fnlrnw6SgOOaE5IJ69eAiEAv3LnqpvdqGpm8ldQgGxtJaJ256uo1i3ggA62uk10pcQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJPycKkOs7IwjUCZ2CrcA9ItozP18Paflm4ey73OxE%2BebfhQFTuud6YCiIs3kV%2B4owZF4ks9iYI%2F%2FYP4y16MmTURdlfCa7YngeB1cqxmgK9KaWv8xoX%2B0%2BuJ7V56wqpYi%2FRVLKIHPFerVmV%2BHuslxHF7pjCM7iVgHlhvOjGsJJhvKitwW%2FIFjAUK5xQivhtqZ%2Fr%2FcEgY8xm%2FofJ9GSy11Y1LQgdehsNEUMgADRE2I8npwV4ldUdfwCYPmpayTSLdOrZUB5Otu6QCAZxgSNodExYgWORGWH%2BM9qaLaG0OraNqzHshS4JJw94DUnWPDjDy73kGZf5uZ37ZbLfMTiL%2BGJ84nntVbnJQg1iy3gjRib7fxEy7%2FqRtjaJjrs28N82VRAm%2FEOLSkC8TbQafZPlxZL5yNLx7mG9Igw8cdS1Mq6XSdnMOkCR4yxwY7Ha3gXLba6NjN4%2FBNz3CCsBRtHPVhGgQav42n6DrUBe%2FGdPiX7gLP2vOt%2FEhTu9X5yi1b%2FyWpnKyfwC%2FsxLp%2B8d9pbmshhtqoDqmY5iDfK6kA98td0XTxp5dpyoMrZ%2BQ6JEBDN5YdsoM%2FjzolL7hHOSqJQYmxMhb2iDkCrQlvvOvXyJc83SZsdijWSM4QcCutW9y7e9iZQZo5kfFohnkZZjXMPGf%2BMQGOqUBejoR19GiME2%2BwsXJ9YcHoviWmKzTsw4TpcQxyBwu2OjOLTaz2y4HSfnVw%2B7PZY9zwTaVQ%2Be9V0GBnw1dXnG3kcQ2XF2SGK8uxf56V6f7tRFNn5p83P9pGkXRGLy02f4PixEeiX5iIwy67yoQcgtmmT0rzNjJNdCJecGwZMW6bkiCArG2EDJo3o5lvcCDu36nfNzj%2BTeqNYZyrLd99byawztogafi&X-Amz-Signature=b5f42771bd80bc3afe4ceb31658943c7b85ffdb8355a19cb86dc665c73408c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHLTDDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAiZmsQ8Antv7x%2F%2BcmUv8ZmN5%2Fnlrnw6SgOOaE5IJ69eAiEAv3LnqpvdqGpm8ldQgGxtJaJ256uo1i3ggA62uk10pcQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJPycKkOs7IwjUCZ2CrcA9ItozP18Paflm4ey73OxE%2BebfhQFTuud6YCiIs3kV%2B4owZF4ks9iYI%2F%2FYP4y16MmTURdlfCa7YngeB1cqxmgK9KaWv8xoX%2B0%2BuJ7V56wqpYi%2FRVLKIHPFerVmV%2BHuslxHF7pjCM7iVgHlhvOjGsJJhvKitwW%2FIFjAUK5xQivhtqZ%2Fr%2FcEgY8xm%2FofJ9GSy11Y1LQgdehsNEUMgADRE2I8npwV4ldUdfwCYPmpayTSLdOrZUB5Otu6QCAZxgSNodExYgWORGWH%2BM9qaLaG0OraNqzHshS4JJw94DUnWPDjDy73kGZf5uZ37ZbLfMTiL%2BGJ84nntVbnJQg1iy3gjRib7fxEy7%2FqRtjaJjrs28N82VRAm%2FEOLSkC8TbQafZPlxZL5yNLx7mG9Igw8cdS1Mq6XSdnMOkCR4yxwY7Ha3gXLba6NjN4%2FBNz3CCsBRtHPVhGgQav42n6DrUBe%2FGdPiX7gLP2vOt%2FEhTu9X5yi1b%2FyWpnKyfwC%2FsxLp%2B8d9pbmshhtqoDqmY5iDfK6kA98td0XTxp5dpyoMrZ%2BQ6JEBDN5YdsoM%2FjzolL7hHOSqJQYmxMhb2iDkCrQlvvOvXyJc83SZsdijWSM4QcCutW9y7e9iZQZo5kfFohnkZZjXMPGf%2BMQGOqUBejoR19GiME2%2BwsXJ9YcHoviWmKzTsw4TpcQxyBwu2OjOLTaz2y4HSfnVw%2B7PZY9zwTaVQ%2Be9V0GBnw1dXnG3kcQ2XF2SGK8uxf56V6f7tRFNn5p83P9pGkXRGLy02f4PixEeiX5iIwy67yoQcgtmmT0rzNjJNdCJecGwZMW6bkiCArG2EDJo3o5lvcCDu36nfNzj%2BTeqNYZyrLd99byawztogafi&X-Amz-Signature=9145edf803d519389fb6696919c6d8fa3cddae078f001b85993f9c5ec7d657c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHLTDDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAiZmsQ8Antv7x%2F%2BcmUv8ZmN5%2Fnlrnw6SgOOaE5IJ69eAiEAv3LnqpvdqGpm8ldQgGxtJaJ256uo1i3ggA62uk10pcQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJPycKkOs7IwjUCZ2CrcA9ItozP18Paflm4ey73OxE%2BebfhQFTuud6YCiIs3kV%2B4owZF4ks9iYI%2F%2FYP4y16MmTURdlfCa7YngeB1cqxmgK9KaWv8xoX%2B0%2BuJ7V56wqpYi%2FRVLKIHPFerVmV%2BHuslxHF7pjCM7iVgHlhvOjGsJJhvKitwW%2FIFjAUK5xQivhtqZ%2Fr%2FcEgY8xm%2FofJ9GSy11Y1LQgdehsNEUMgADRE2I8npwV4ldUdfwCYPmpayTSLdOrZUB5Otu6QCAZxgSNodExYgWORGWH%2BM9qaLaG0OraNqzHshS4JJw94DUnWPDjDy73kGZf5uZ37ZbLfMTiL%2BGJ84nntVbnJQg1iy3gjRib7fxEy7%2FqRtjaJjrs28N82VRAm%2FEOLSkC8TbQafZPlxZL5yNLx7mG9Igw8cdS1Mq6XSdnMOkCR4yxwY7Ha3gXLba6NjN4%2FBNz3CCsBRtHPVhGgQav42n6DrUBe%2FGdPiX7gLP2vOt%2FEhTu9X5yi1b%2FyWpnKyfwC%2FsxLp%2B8d9pbmshhtqoDqmY5iDfK6kA98td0XTxp5dpyoMrZ%2BQ6JEBDN5YdsoM%2FjzolL7hHOSqJQYmxMhb2iDkCrQlvvOvXyJc83SZsdijWSM4QcCutW9y7e9iZQZo5kfFohnkZZjXMPGf%2BMQGOqUBejoR19GiME2%2BwsXJ9YcHoviWmKzTsw4TpcQxyBwu2OjOLTaz2y4HSfnVw%2B7PZY9zwTaVQ%2Be9V0GBnw1dXnG3kcQ2XF2SGK8uxf56V6f7tRFNn5p83P9pGkXRGLy02f4PixEeiX5iIwy67yoQcgtmmT0rzNjJNdCJecGwZMW6bkiCArG2EDJo3o5lvcCDu36nfNzj%2BTeqNYZyrLd99byawztogafi&X-Amz-Signature=fd1fbf1a79b15391277de0922bd0f778191c4b69604f49c6df3c6d0278f16fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHLTDDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAiZmsQ8Antv7x%2F%2BcmUv8ZmN5%2Fnlrnw6SgOOaE5IJ69eAiEAv3LnqpvdqGpm8ldQgGxtJaJ256uo1i3ggA62uk10pcQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJPycKkOs7IwjUCZ2CrcA9ItozP18Paflm4ey73OxE%2BebfhQFTuud6YCiIs3kV%2B4owZF4ks9iYI%2F%2FYP4y16MmTURdlfCa7YngeB1cqxmgK9KaWv8xoX%2B0%2BuJ7V56wqpYi%2FRVLKIHPFerVmV%2BHuslxHF7pjCM7iVgHlhvOjGsJJhvKitwW%2FIFjAUK5xQivhtqZ%2Fr%2FcEgY8xm%2FofJ9GSy11Y1LQgdehsNEUMgADRE2I8npwV4ldUdfwCYPmpayTSLdOrZUB5Otu6QCAZxgSNodExYgWORGWH%2BM9qaLaG0OraNqzHshS4JJw94DUnWPDjDy73kGZf5uZ37ZbLfMTiL%2BGJ84nntVbnJQg1iy3gjRib7fxEy7%2FqRtjaJjrs28N82VRAm%2FEOLSkC8TbQafZPlxZL5yNLx7mG9Igw8cdS1Mq6XSdnMOkCR4yxwY7Ha3gXLba6NjN4%2FBNz3CCsBRtHPVhGgQav42n6DrUBe%2FGdPiX7gLP2vOt%2FEhTu9X5yi1b%2FyWpnKyfwC%2FsxLp%2B8d9pbmshhtqoDqmY5iDfK6kA98td0XTxp5dpyoMrZ%2BQ6JEBDN5YdsoM%2FjzolL7hHOSqJQYmxMhb2iDkCrQlvvOvXyJc83SZsdijWSM4QcCutW9y7e9iZQZo5kfFohnkZZjXMPGf%2BMQGOqUBejoR19GiME2%2BwsXJ9YcHoviWmKzTsw4TpcQxyBwu2OjOLTaz2y4HSfnVw%2B7PZY9zwTaVQ%2Be9V0GBnw1dXnG3kcQ2XF2SGK8uxf56V6f7tRFNn5p83P9pGkXRGLy02f4PixEeiX5iIwy67yoQcgtmmT0rzNjJNdCJecGwZMW6bkiCArG2EDJo3o5lvcCDu36nfNzj%2BTeqNYZyrLd99byawztogafi&X-Amz-Signature=43985b611d76ea84e6cdffb21bc4e615b72c613455aa8edffce8e7f589c29cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHLTDDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAiZmsQ8Antv7x%2F%2BcmUv8ZmN5%2Fnlrnw6SgOOaE5IJ69eAiEAv3LnqpvdqGpm8ldQgGxtJaJ256uo1i3ggA62uk10pcQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJPycKkOs7IwjUCZ2CrcA9ItozP18Paflm4ey73OxE%2BebfhQFTuud6YCiIs3kV%2B4owZF4ks9iYI%2F%2FYP4y16MmTURdlfCa7YngeB1cqxmgK9KaWv8xoX%2B0%2BuJ7V56wqpYi%2FRVLKIHPFerVmV%2BHuslxHF7pjCM7iVgHlhvOjGsJJhvKitwW%2FIFjAUK5xQivhtqZ%2Fr%2FcEgY8xm%2FofJ9GSy11Y1LQgdehsNEUMgADRE2I8npwV4ldUdfwCYPmpayTSLdOrZUB5Otu6QCAZxgSNodExYgWORGWH%2BM9qaLaG0OraNqzHshS4JJw94DUnWPDjDy73kGZf5uZ37ZbLfMTiL%2BGJ84nntVbnJQg1iy3gjRib7fxEy7%2FqRtjaJjrs28N82VRAm%2FEOLSkC8TbQafZPlxZL5yNLx7mG9Igw8cdS1Mq6XSdnMOkCR4yxwY7Ha3gXLba6NjN4%2FBNz3CCsBRtHPVhGgQav42n6DrUBe%2FGdPiX7gLP2vOt%2FEhTu9X5yi1b%2FyWpnKyfwC%2FsxLp%2B8d9pbmshhtqoDqmY5iDfK6kA98td0XTxp5dpyoMrZ%2BQ6JEBDN5YdsoM%2FjzolL7hHOSqJQYmxMhb2iDkCrQlvvOvXyJc83SZsdijWSM4QcCutW9y7e9iZQZo5kfFohnkZZjXMPGf%2BMQGOqUBejoR19GiME2%2BwsXJ9YcHoviWmKzTsw4TpcQxyBwu2OjOLTaz2y4HSfnVw%2B7PZY9zwTaVQ%2Be9V0GBnw1dXnG3kcQ2XF2SGK8uxf56V6f7tRFNn5p83P9pGkXRGLy02f4PixEeiX5iIwy67yoQcgtmmT0rzNjJNdCJecGwZMW6bkiCArG2EDJo3o5lvcCDu36nfNzj%2BTeqNYZyrLd99byawztogafi&X-Amz-Signature=bf3796ecae999460d48f2377e8c919b025ed382922f585ff0ae548bc0b8329f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHLTDDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAiZmsQ8Antv7x%2F%2BcmUv8ZmN5%2Fnlrnw6SgOOaE5IJ69eAiEAv3LnqpvdqGpm8ldQgGxtJaJ256uo1i3ggA62uk10pcQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJPycKkOs7IwjUCZ2CrcA9ItozP18Paflm4ey73OxE%2BebfhQFTuud6YCiIs3kV%2B4owZF4ks9iYI%2F%2FYP4y16MmTURdlfCa7YngeB1cqxmgK9KaWv8xoX%2B0%2BuJ7V56wqpYi%2FRVLKIHPFerVmV%2BHuslxHF7pjCM7iVgHlhvOjGsJJhvKitwW%2FIFjAUK5xQivhtqZ%2Fr%2FcEgY8xm%2FofJ9GSy11Y1LQgdehsNEUMgADRE2I8npwV4ldUdfwCYPmpayTSLdOrZUB5Otu6QCAZxgSNodExYgWORGWH%2BM9qaLaG0OraNqzHshS4JJw94DUnWPDjDy73kGZf5uZ37ZbLfMTiL%2BGJ84nntVbnJQg1iy3gjRib7fxEy7%2FqRtjaJjrs28N82VRAm%2FEOLSkC8TbQafZPlxZL5yNLx7mG9Igw8cdS1Mq6XSdnMOkCR4yxwY7Ha3gXLba6NjN4%2FBNz3CCsBRtHPVhGgQav42n6DrUBe%2FGdPiX7gLP2vOt%2FEhTu9X5yi1b%2FyWpnKyfwC%2FsxLp%2B8d9pbmshhtqoDqmY5iDfK6kA98td0XTxp5dpyoMrZ%2BQ6JEBDN5YdsoM%2FjzolL7hHOSqJQYmxMhb2iDkCrQlvvOvXyJc83SZsdijWSM4QcCutW9y7e9iZQZo5kfFohnkZZjXMPGf%2BMQGOqUBejoR19GiME2%2BwsXJ9YcHoviWmKzTsw4TpcQxyBwu2OjOLTaz2y4HSfnVw%2B7PZY9zwTaVQ%2Be9V0GBnw1dXnG3kcQ2XF2SGK8uxf56V6f7tRFNn5p83P9pGkXRGLy02f4PixEeiX5iIwy67yoQcgtmmT0rzNjJNdCJecGwZMW6bkiCArG2EDJo3o5lvcCDu36nfNzj%2BTeqNYZyrLd99byawztogafi&X-Amz-Signature=1bfc7bedbb63ee4df16a354d84270fc570111d25529768a65d7fa36bda17a6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHLTDDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAiZmsQ8Antv7x%2F%2BcmUv8ZmN5%2Fnlrnw6SgOOaE5IJ69eAiEAv3LnqpvdqGpm8ldQgGxtJaJ256uo1i3ggA62uk10pcQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJPycKkOs7IwjUCZ2CrcA9ItozP18Paflm4ey73OxE%2BebfhQFTuud6YCiIs3kV%2B4owZF4ks9iYI%2F%2FYP4y16MmTURdlfCa7YngeB1cqxmgK9KaWv8xoX%2B0%2BuJ7V56wqpYi%2FRVLKIHPFerVmV%2BHuslxHF7pjCM7iVgHlhvOjGsJJhvKitwW%2FIFjAUK5xQivhtqZ%2Fr%2FcEgY8xm%2FofJ9GSy11Y1LQgdehsNEUMgADRE2I8npwV4ldUdfwCYPmpayTSLdOrZUB5Otu6QCAZxgSNodExYgWORGWH%2BM9qaLaG0OraNqzHshS4JJw94DUnWPDjDy73kGZf5uZ37ZbLfMTiL%2BGJ84nntVbnJQg1iy3gjRib7fxEy7%2FqRtjaJjrs28N82VRAm%2FEOLSkC8TbQafZPlxZL5yNLx7mG9Igw8cdS1Mq6XSdnMOkCR4yxwY7Ha3gXLba6NjN4%2FBNz3CCsBRtHPVhGgQav42n6DrUBe%2FGdPiX7gLP2vOt%2FEhTu9X5yi1b%2FyWpnKyfwC%2FsxLp%2B8d9pbmshhtqoDqmY5iDfK6kA98td0XTxp5dpyoMrZ%2BQ6JEBDN5YdsoM%2FjzolL7hHOSqJQYmxMhb2iDkCrQlvvOvXyJc83SZsdijWSM4QcCutW9y7e9iZQZo5kfFohnkZZjXMPGf%2BMQGOqUBejoR19GiME2%2BwsXJ9YcHoviWmKzTsw4TpcQxyBwu2OjOLTaz2y4HSfnVw%2B7PZY9zwTaVQ%2Be9V0GBnw1dXnG3kcQ2XF2SGK8uxf56V6f7tRFNn5p83P9pGkXRGLy02f4PixEeiX5iIwy67yoQcgtmmT0rzNjJNdCJecGwZMW6bkiCArG2EDJo3o5lvcCDu36nfNzj%2BTeqNYZyrLd99byawztogafi&X-Amz-Signature=fc5467117c1d62127e024256396567582a2b8d38bc3ac4549057e6e6c750a60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHLTDDS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAiZmsQ8Antv7x%2F%2BcmUv8ZmN5%2Fnlrnw6SgOOaE5IJ69eAiEAv3LnqpvdqGpm8ldQgGxtJaJ256uo1i3ggA62uk10pcQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJPycKkOs7IwjUCZ2CrcA9ItozP18Paflm4ey73OxE%2BebfhQFTuud6YCiIs3kV%2B4owZF4ks9iYI%2F%2FYP4y16MmTURdlfCa7YngeB1cqxmgK9KaWv8xoX%2B0%2BuJ7V56wqpYi%2FRVLKIHPFerVmV%2BHuslxHF7pjCM7iVgHlhvOjGsJJhvKitwW%2FIFjAUK5xQivhtqZ%2Fr%2FcEgY8xm%2FofJ9GSy11Y1LQgdehsNEUMgADRE2I8npwV4ldUdfwCYPmpayTSLdOrZUB5Otu6QCAZxgSNodExYgWORGWH%2BM9qaLaG0OraNqzHshS4JJw94DUnWPDjDy73kGZf5uZ37ZbLfMTiL%2BGJ84nntVbnJQg1iy3gjRib7fxEy7%2FqRtjaJjrs28N82VRAm%2FEOLSkC8TbQafZPlxZL5yNLx7mG9Igw8cdS1Mq6XSdnMOkCR4yxwY7Ha3gXLba6NjN4%2FBNz3CCsBRtHPVhGgQav42n6DrUBe%2FGdPiX7gLP2vOt%2FEhTu9X5yi1b%2FyWpnKyfwC%2FsxLp%2B8d9pbmshhtqoDqmY5iDfK6kA98td0XTxp5dpyoMrZ%2BQ6JEBDN5YdsoM%2FjzolL7hHOSqJQYmxMhb2iDkCrQlvvOvXyJc83SZsdijWSM4QcCutW9y7e9iZQZo5kfFohnkZZjXMPGf%2BMQGOqUBejoR19GiME2%2BwsXJ9YcHoviWmKzTsw4TpcQxyBwu2OjOLTaz2y4HSfnVw%2B7PZY9zwTaVQ%2Be9V0GBnw1dXnG3kcQ2XF2SGK8uxf56V6f7tRFNn5p83P9pGkXRGLy02f4PixEeiX5iIwy67yoQcgtmmT0rzNjJNdCJecGwZMW6bkiCArG2EDJo3o5lvcCDu36nfNzj%2BTeqNYZyrLd99byawztogafi&X-Amz-Signature=9145edf803d519389fb6696919c6d8fa3cddae078f001b85993f9c5ec7d657c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
