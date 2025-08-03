---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXPVKXU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE9QIyCENnampFqwNhrwsnedqN4kX3Yp8d59Ln6ULWOAIhAIFtuGotReCNWpaQWVLmgs15oqZ4pf2UD4JysGkLepXEKv8DCCQQABoMNjM3NDIzMTgzODA1Igxas6ImWSpuVy%2BCpRUq3AMlB7f%2BLB7h%2BvEzgvtRAQSb6Rgbyf7qVVC6EGQhb6iTilKLzJbJxpTlEC7Fee2%2Fx1ZQuPS%2FHaAaNUHByh969H0y89DXyvmltu1yF5zeHQyBLRw9t9tVF5L0Ca5sjNSXGMYINO5GAJlgXhEmQfjKSRq4fZQ3c6W08eHMQkPHUNHVnRhTF73YZFlw5ZL02s6%2F2IvmCv77V1HzWV7Q1bRH3KSQARSI6UmRtR00XB1HcZIvID7qfN2xLSoAg5DBVct8JU6Kbs3slJiiCT0m6VXpWI3g0Wht2VLLwm3wTF5SaJi1kuOJTybOY%2FVhZB5AgTDoAnFpe16ObT2y2IzBp%2BHYdb4hd%2BulAaIbxOzeZrfB28%2FoYMeJa72ktJldsLhKsasBCaBfEEifJ8dT%2FOthvrtNQZ1thw86nayyapK3QCmRvbDVveEdqFgIwocUaxg4HVPe%2FQegNkT%2BIYSCP4UXkerR8m4gbR2Zivtp0Dh%2BUmnmTI%2BiM4ggNV3tBVF8CMQZ49sU4ZG3acm6nn3wYcm4Z6QouGmJibSrmEVwdAEFozxOoZ2yFSHUq6Tx9lNt4vx6SXu4LrmCZ7a7%2B2KAFzuCHViCvBe1Sf5raylAgxAdbiUWFJtjPIDfwKSldL8AQtdDbjCborvEBjqkASc%2BM1PXLxcdI8E1jYw7fJmK%2FcKSDQjaU4skq20gi6j15PPj86y3JzzMt7L47kO2eVOFw3BOHnpqmp0lEg640SlrhoaEvX%2BPRC543NoV1jk8kP%2F0vnxe3%2BWJikS1RbThZjQka6fuCCsMir0DTWMzcfGMTCGpccrKMhj9ALnzJCSu7LwH95jEX%2BkAzo2gX2NOTdd9X0e6Nz3MxzIG%2BFJni1MtH9Pu&X-Amz-Signature=accc4a8548cc69fae437cc2847e062f172e07c7a18ed1f73bc1c92a5e79d3bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=544109ef5666658f257e158b760679e2fb13709682e2abb868d1aed78c29fa0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=751b5cc9c05ad65f87076f46871ac3fd8221f28869fabd85190c83345c67567c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=1e94d8dfb27420065e15cadfe77da79afe802b78e8146a170bce2ffcd803c796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=aad43d1812d8415753430fee5e053d1ac048398364594aa87ce9706b8ed840e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=32b2648eb6fab6f3420af9db1cd8ab124e166f651d35eb1234f97b4c9536878c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=0df0f8558b0bddec92959c3a07cbe0d49497e7203bf7e4b16c05a9be20d38220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=ba7558c477d2c63690066ee9bad610837f514d45f44b84096624cbdee6fc8fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=cb61c1236f6c8159c2b0dc0cae93989122a5d22e344c3f3307ba714543b6b3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=15e796627d1b75c3277333141557b7099d3ab30167c38907badb79c53a29e36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=aad43d1812d8415753430fee5e053d1ac048398364594aa87ce9706b8ed840e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
