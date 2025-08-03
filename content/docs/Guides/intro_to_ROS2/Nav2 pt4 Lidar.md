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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CEU2QY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEY0e3z3TSWrWiuyAiaJjQDodU5XMmLnBtDZllVbcq6pAiEAtAiMXJs%2F%2FZGTaKTvymXiiDN0VVM5PRwVT8XoIaAtfgoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN73G%2F7BCvevygYsuyrcA8rpVmW30C5ynwPNI4YphyWJJ9iGLK9CUlT0STtEw7vE1TAjH8eMSJUjlNHZbFWl9SI4p6o69YZkmQx3FMZAGXfJkrqYZTSqBk3gmSVnTNU6bApehAz6dRD%2BfowWrwO6%2FaoGSs0KEyRFPGRKq6JgFcjlQSr7IbnaJHPkfFM2xI1k%2FXRQq3f2O1Iv6RALjmedRhLEFUQEWYQFiEFAYwAWXNFBxZ4Lqv9Ryyfie0gEDgU7dDLbf27YvJIfjOaBd2YK1Dewf%2FlRsm1CIdsbS70N7trRh9R2CIhu4S6qHNOJwgQcW6AxVJ2NXn1PGFObnVrlyr9%2B13Oi6q8isF4CB0BHVIGGn0zU0Icw7UiUgsq0PxYHnAVpY4yT1B%2B%2B7Ko468OqYAAWvBHm%2FhXnCCMHUyCy0Y4oJA4bpfMmixyrqC0B4yDHAjqKZTxErGvzJA5zekB7GVoKc75kUFa6OiSv2fjSY5lpd9GPTLcikSSdHcR3FhpUQzk6nLIHJpv4FPwUwP%2BV9sIU%2BUaXqicQrn45X1J2dG09PVJruruoVFHpXeB3Vt%2BsYQc4AOiStdT19er86KQ1jXn46fTegMWdvJ6qyqdHe4S3DfGBMBqsQ%2BOlS8f2SVzB4%2BBgbYCI7uPND9NLMO2iu8QGOqUBTqiRQ7s7tGvhVH7I7doQZzX%2F%2BRVOeFgyPlOruk7tTLw19%2FE6XgEx95rS7202anupdVzIcafVlf98Uogo%2Bhqt3MLOfBW5bc3%2Be7oWOefgtxqhhJHUl8JZNvYmzkKGPLpZQf4Q7LT5PLK3fLp0%2Bww1MSI8bUPGCUf9mx56x%2BBqL2wfliyVnNlVD4dXbQDrd%2Fe45Cdjg5k1bUiAOd%2B4jbgJe3LHz55y&X-Amz-Signature=d9aa1f1ae217744fc412dea3114096fdc93681f74680fc3c693be45fe3d716c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=e03b94583a3bdea9b2699b0c3585124bc10798377692be22643ba7bc6d74fd48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=a9b21300bfbbf0b607fe84253d3bb1cfc6cd9238669845b287b6538276b7969a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=c92f0681ba3313958798fd7fc7e7dcd865228d7de30da4bb7b914205a8b2ab98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=e99f80130ba0d9cbf96d195708ac084ac7fb2fc771c1a136a7a777ea47dfa60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=62da3f8ce15a0dc0dd5adeb81800738a50590525211e9ebcea14be983bf32dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=2ebb6356cf8369fbdb96026484dffcb9fd83547c35fae424e6818496b91d7448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=f377f8d9899d64da60023bdd08fc285cb216fa9fdb0022ede15fe2600843cc6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=a4dcbacb5ca3208ad26dd19b708e3c50d1fd274339ff80cd34e365483e0df3a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=91d8e1b689ee7534a7cf2565925906e510c393493de8245f07865aca2a81114c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HPKIUVT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVY8rwKPJ1rO%2FNNUZzaCpcOPDVZUr1swES%2Bo2qJ%2BLnEQIhAPmLPJihOFtmbFyOXWsh6AuAyMMATMDLQpiEugxcAYZ2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzaTBqAnu1Ah8EeZbgq3ANU5BzH06V8IjB1Iw%2FjM2gY%2Fwkp6GQA3U1jK3c1IIbP69%2FB6kPanlC33T9vLCek%2BvlYYJ1G1qhXBBGGYWKRyoDw4yhHPdIYGCF73dN6EyoNKqKbQ8x1GC6225bn1jkQXwSK24yn8ve8bt%2Bu0GsiKdjDd8T06XS1%2BSo1KkG0okRK4WumHqg0ulStWU19dlDTRKeD5QAbmEw0RV%2FVQKYtMexk%2BFWg%2BbIXOib%2BIg0b39RMhc6tlKIcwjXiJXw52kDj7o%2BEXZRU7TLj9axof7N7eVSRCaaDkR3aB%2FYzVLlpzJfRN5tYHe%2FOIpCpuJWQadY9qU1a1x7pBo8wIN48fPWa0soI0aoLvzpe6ybsSasLzVDPxtZZ7zmngghbxQOzwusXIzECq9%2FY1%2BfPX2k%2Fu%2FUMGj5Qmhq%2FGKBSqEv7ZtY0kIyl3TIYWeNWQJx%2F8VL%2BJq%2Fy5aR1Y1A4wXgTXiX5zCvqBdMMLennipTtgwxb2GAoNCTPicq7fTtZ5hPyPNoqT0oeHn2kC0Z15%2Brb0kHgMOGxgQb6FMVUbKNlkMxV3uX%2B%2BAkZLd%2B760j8O3QaibpbvcK%2FaxEQlhO6PFv9jSMVMeRMWYjJD6gOeqZPBV3CaBgbw8S3KcjzCqhuRvsmUlQdbjDYnbvEBjqkATkpGhT2yxoj9Xcv16cAK%2BhHQ7Hc2L%2BMQrNnUJg1sNQli0jepudfOrorJIjvyH53CznDSdJqTlKT3aJlsW69rFTImRbFayqePcZ0TLkqhUXzHbbngBihmijUYJkgGI2f6x%2Fa7oHFd4SI9gNWK25sIZ%2FNpmLDttr88Hxz%2BnuOLR0Op%2Bcslc%2BDHJAe78HoHz2%2FE9eKcjnkT47GZ5LHUJZwV1RaxG%2FF&X-Amz-Signature=e99f80130ba0d9cbf96d195708ac084ac7fb2fc771c1a136a7a777ea47dfa60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
