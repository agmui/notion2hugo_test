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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4RL7K2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIA8NDEuEgKmbrLQOo8HkasiDBlcXT151s6tP58bybbeJAiBRUYBFgnZOGWHqJntAih7o1jACNXQjh3i5jTa2Lo1uZyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyyMPT0iieEAJ1Xw0KtwDE%2F4%2FmmI2Jl96FMO5Y6tGdKS5muryHliv0%2FuD%2BrKLIQTZwIG5DVDg6sWy86QYayLxcgt8Ti5%2BuMfdiQkmrcZUM5ZeV1d0PivFTbTYkGLkIT9TSKPNYrfvg2vRK2yLKC9KLutOrADxdfc0fn8JcAPjenyvDicGBDbVrMM1qx1m1UR%2B4CUpDXFELE5yzLlhV0VcFkCIjjiTI9Jg3ULfGZ4uEGHVEsDbvrtkxKTbLKiDCMROd9cbheo3YrigAYeSgZt%2B37n7TBtSclZ9h1YycjzZzRIjptv6m0FW%2BE%2BIPAuGZVp8I0kQgAdcKIah%2FDYGV7OIcX0dsru9RpwxJXUmyKfPChX6Vya7T%2FeqqVZniyMis0pyCyrL%2Fl%2FOdb2ddmJ%2Fxjv60Kd5DXTPwnbnMNqUlRWE7AFMa2aTbDI4PBUtumyp30KKliAzHSuzd9Lfl5ODaXBXxHLoG6nuF3idfPcx5aLiGZkyzY1ijlzH7buWcpDeR0NPzXxFrmQ1DAlTjmM592WOpe585y7ssPag1iarlgyXjBxidGy5IXvJj6J3IKBDlvSQ6rbJ5z1akUXffQ5UOUbT8HIgJIySGvhQzX9pPqDd43ONFbTCv1seMpgGhHZ7z0BGLxv%2BzVKnKDWUcSYwpKDbxAY6pgE8Z7HkXQpyLDCECHgXnHMwpvODRH7lDTSl2HZFEGI6%2BrZeSL0Uii%2B2aY3AJCpWjwheSrCXHKO40YI%2F37lD1cEcYLP6KY4hpgX8hsHpGYCC96dECxG3%2FD9IJieyNwVGsXV8TEiiEl1LMoJbm1jwK%2FJBsi6BLsPIBLnXiXs81tKZ1N5O0ni9U0ATMscF3QT3rVopQMzFQGikFU%2F0WWd5mdxO3yzuo5TA&X-Amz-Signature=4028bcb6efb4edf0c28969116c3b6ec561606aee6ce35f593cff5fa7dd6cfea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6Q4CYE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD7wWPrxBgHcBCecsOzp0NubQCsr6ugpx4UypqIJeNdhwIhAN%2FaNQVBw22n8TfYu8QGbbuEVSdCB1Q9DPvK70iuwQHdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMkB6d%2FOuLP3Puc0q3APrMO9LsCbxAO83u2tD2eecPCxl1wr0vG%2Fx8ewBEHtlkK4MVO5tzloorAlzNC5ZgZ2fH%2BE3lCF1%2FjiqYCRNxqEl1JOiV1LC%2B9gPIW3Z4Z4tSTkeHRNeIxGE%2BNosgZPw3z4hcWA625Z%2BmuomgzbqrVRqZmd4mR7tTkWtrvp25fmaxe7FrURcuA71pl19JXsKS37gW0lHNTAHSpc0CybWpIv1H5rtUfUD0r%2FVpXgPwsyRfiDZlKs9O8lh0q4Gqd36XiLqGEK3ppEk5XZn1%2BpuyF%2B6odZbInn8qe7k79kdEYIa8BQpC2BOQogh0siQh9i9AjtbURXUHMNATroPBsjHRy75qgMia6a4i%2Bo3TPkMr6bjuTC4rUYxKQoCnEBWHg8E1BJehCjNqpe4gyTkt%2FNEpl%2BuRrf286IqnMf0tDhhOXr2%2BRwR7TUZigSoa%2Boau8dmbStoBkrYbJPME7HIUPO4V%2FT%2FXUan2kiF7faxy%2BeDtbne5g0aT8mvhTK%2FRA53D%2FLE7Mf%2FGhF9xplMx3ACJv7jJWWOQqRaZWuJwS4CArEZF3Qskd7I2rDqE%2F39UGWWMidPFFYY3iq2TBX%2FxQOxSWLJtNt2MVdncqZITV0R6M5jR39ql2mrGXSXik5pkcJxkzDIoNvEBjqkAYbK6k93Uh2yCtwXCxbPhx9bPfmK%2BDt05J5qKF9rZ6yshNupPPjVdK7gnqcz9c%2FwMKp07gBEbe1dUgHzumjq5oFqOECEUWrYm328mazo1SCKNuwmI8w%2BTzAPTZfFBwnleIPWwW6mFB9Z1PoOCSQZrFp77HJ16m7rur9Vk%2BrhgeXu5X%2FJGdgaDCaeP6coFWA1RI1meDvPRU7t%2BgyEdFz6qemP7zkA&X-Amz-Signature=652151fd8c212d26ce276e83fc4832e6519540bc0df022397be52b3ef88060e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6Q4CYE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD7wWPrxBgHcBCecsOzp0NubQCsr6ugpx4UypqIJeNdhwIhAN%2FaNQVBw22n8TfYu8QGbbuEVSdCB1Q9DPvK70iuwQHdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMkB6d%2FOuLP3Puc0q3APrMO9LsCbxAO83u2tD2eecPCxl1wr0vG%2Fx8ewBEHtlkK4MVO5tzloorAlzNC5ZgZ2fH%2BE3lCF1%2FjiqYCRNxqEl1JOiV1LC%2B9gPIW3Z4Z4tSTkeHRNeIxGE%2BNosgZPw3z4hcWA625Z%2BmuomgzbqrVRqZmd4mR7tTkWtrvp25fmaxe7FrURcuA71pl19JXsKS37gW0lHNTAHSpc0CybWpIv1H5rtUfUD0r%2FVpXgPwsyRfiDZlKs9O8lh0q4Gqd36XiLqGEK3ppEk5XZn1%2BpuyF%2B6odZbInn8qe7k79kdEYIa8BQpC2BOQogh0siQh9i9AjtbURXUHMNATroPBsjHRy75qgMia6a4i%2Bo3TPkMr6bjuTC4rUYxKQoCnEBWHg8E1BJehCjNqpe4gyTkt%2FNEpl%2BuRrf286IqnMf0tDhhOXr2%2BRwR7TUZigSoa%2Boau8dmbStoBkrYbJPME7HIUPO4V%2FT%2FXUan2kiF7faxy%2BeDtbne5g0aT8mvhTK%2FRA53D%2FLE7Mf%2FGhF9xplMx3ACJv7jJWWOQqRaZWuJwS4CArEZF3Qskd7I2rDqE%2F39UGWWMidPFFYY3iq2TBX%2FxQOxSWLJtNt2MVdncqZITV0R6M5jR39ql2mrGXSXik5pkcJxkzDIoNvEBjqkAYbK6k93Uh2yCtwXCxbPhx9bPfmK%2BDt05J5qKF9rZ6yshNupPPjVdK7gnqcz9c%2FwMKp07gBEbe1dUgHzumjq5oFqOECEUWrYm328mazo1SCKNuwmI8w%2BTzAPTZfFBwnleIPWwW6mFB9Z1PoOCSQZrFp77HJ16m7rur9Vk%2BrhgeXu5X%2FJGdgaDCaeP6coFWA1RI1meDvPRU7t%2BgyEdFz6qemP7zkA&X-Amz-Signature=27f79727cea13b0616e33126218bbb27cb094ce6937344de218c4b1a7ad6b0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6Q4CYE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD7wWPrxBgHcBCecsOzp0NubQCsr6ugpx4UypqIJeNdhwIhAN%2FaNQVBw22n8TfYu8QGbbuEVSdCB1Q9DPvK70iuwQHdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMkB6d%2FOuLP3Puc0q3APrMO9LsCbxAO83u2tD2eecPCxl1wr0vG%2Fx8ewBEHtlkK4MVO5tzloorAlzNC5ZgZ2fH%2BE3lCF1%2FjiqYCRNxqEl1JOiV1LC%2B9gPIW3Z4Z4tSTkeHRNeIxGE%2BNosgZPw3z4hcWA625Z%2BmuomgzbqrVRqZmd4mR7tTkWtrvp25fmaxe7FrURcuA71pl19JXsKS37gW0lHNTAHSpc0CybWpIv1H5rtUfUD0r%2FVpXgPwsyRfiDZlKs9O8lh0q4Gqd36XiLqGEK3ppEk5XZn1%2BpuyF%2B6odZbInn8qe7k79kdEYIa8BQpC2BOQogh0siQh9i9AjtbURXUHMNATroPBsjHRy75qgMia6a4i%2Bo3TPkMr6bjuTC4rUYxKQoCnEBWHg8E1BJehCjNqpe4gyTkt%2FNEpl%2BuRrf286IqnMf0tDhhOXr2%2BRwR7TUZigSoa%2Boau8dmbStoBkrYbJPME7HIUPO4V%2FT%2FXUan2kiF7faxy%2BeDtbne5g0aT8mvhTK%2FRA53D%2FLE7Mf%2FGhF9xplMx3ACJv7jJWWOQqRaZWuJwS4CArEZF3Qskd7I2rDqE%2F39UGWWMidPFFYY3iq2TBX%2FxQOxSWLJtNt2MVdncqZITV0R6M5jR39ql2mrGXSXik5pkcJxkzDIoNvEBjqkAYbK6k93Uh2yCtwXCxbPhx9bPfmK%2BDt05J5qKF9rZ6yshNupPPjVdK7gnqcz9c%2FwMKp07gBEbe1dUgHzumjq5oFqOECEUWrYm328mazo1SCKNuwmI8w%2BTzAPTZfFBwnleIPWwW6mFB9Z1PoOCSQZrFp77HJ16m7rur9Vk%2BrhgeXu5X%2FJGdgaDCaeP6coFWA1RI1meDvPRU7t%2BgyEdFz6qemP7zkA&X-Amz-Signature=97da1bba11fc131631fb2e72c07c0106b1189d37cd35e21e0cb577cf5e592b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6Q4CYE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD7wWPrxBgHcBCecsOzp0NubQCsr6ugpx4UypqIJeNdhwIhAN%2FaNQVBw22n8TfYu8QGbbuEVSdCB1Q9DPvK70iuwQHdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMkB6d%2FOuLP3Puc0q3APrMO9LsCbxAO83u2tD2eecPCxl1wr0vG%2Fx8ewBEHtlkK4MVO5tzloorAlzNC5ZgZ2fH%2BE3lCF1%2FjiqYCRNxqEl1JOiV1LC%2B9gPIW3Z4Z4tSTkeHRNeIxGE%2BNosgZPw3z4hcWA625Z%2BmuomgzbqrVRqZmd4mR7tTkWtrvp25fmaxe7FrURcuA71pl19JXsKS37gW0lHNTAHSpc0CybWpIv1H5rtUfUD0r%2FVpXgPwsyRfiDZlKs9O8lh0q4Gqd36XiLqGEK3ppEk5XZn1%2BpuyF%2B6odZbInn8qe7k79kdEYIa8BQpC2BOQogh0siQh9i9AjtbURXUHMNATroPBsjHRy75qgMia6a4i%2Bo3TPkMr6bjuTC4rUYxKQoCnEBWHg8E1BJehCjNqpe4gyTkt%2FNEpl%2BuRrf286IqnMf0tDhhOXr2%2BRwR7TUZigSoa%2Boau8dmbStoBkrYbJPME7HIUPO4V%2FT%2FXUan2kiF7faxy%2BeDtbne5g0aT8mvhTK%2FRA53D%2FLE7Mf%2FGhF9xplMx3ACJv7jJWWOQqRaZWuJwS4CArEZF3Qskd7I2rDqE%2F39UGWWMidPFFYY3iq2TBX%2FxQOxSWLJtNt2MVdncqZITV0R6M5jR39ql2mrGXSXik5pkcJxkzDIoNvEBjqkAYbK6k93Uh2yCtwXCxbPhx9bPfmK%2BDt05J5qKF9rZ6yshNupPPjVdK7gnqcz9c%2FwMKp07gBEbe1dUgHzumjq5oFqOECEUWrYm328mazo1SCKNuwmI8w%2BTzAPTZfFBwnleIPWwW6mFB9Z1PoOCSQZrFp77HJ16m7rur9Vk%2BrhgeXu5X%2FJGdgaDCaeP6coFWA1RI1meDvPRU7t%2BgyEdFz6qemP7zkA&X-Amz-Signature=8c0d1e538c36324161ab547ec634d25e8015c0e3d09a721b52106e347fb8c38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6Q4CYE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD7wWPrxBgHcBCecsOzp0NubQCsr6ugpx4UypqIJeNdhwIhAN%2FaNQVBw22n8TfYu8QGbbuEVSdCB1Q9DPvK70iuwQHdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMkB6d%2FOuLP3Puc0q3APrMO9LsCbxAO83u2tD2eecPCxl1wr0vG%2Fx8ewBEHtlkK4MVO5tzloorAlzNC5ZgZ2fH%2BE3lCF1%2FjiqYCRNxqEl1JOiV1LC%2B9gPIW3Z4Z4tSTkeHRNeIxGE%2BNosgZPw3z4hcWA625Z%2BmuomgzbqrVRqZmd4mR7tTkWtrvp25fmaxe7FrURcuA71pl19JXsKS37gW0lHNTAHSpc0CybWpIv1H5rtUfUD0r%2FVpXgPwsyRfiDZlKs9O8lh0q4Gqd36XiLqGEK3ppEk5XZn1%2BpuyF%2B6odZbInn8qe7k79kdEYIa8BQpC2BOQogh0siQh9i9AjtbURXUHMNATroPBsjHRy75qgMia6a4i%2Bo3TPkMr6bjuTC4rUYxKQoCnEBWHg8E1BJehCjNqpe4gyTkt%2FNEpl%2BuRrf286IqnMf0tDhhOXr2%2BRwR7TUZigSoa%2Boau8dmbStoBkrYbJPME7HIUPO4V%2FT%2FXUan2kiF7faxy%2BeDtbne5g0aT8mvhTK%2FRA53D%2FLE7Mf%2FGhF9xplMx3ACJv7jJWWOQqRaZWuJwS4CArEZF3Qskd7I2rDqE%2F39UGWWMidPFFYY3iq2TBX%2FxQOxSWLJtNt2MVdncqZITV0R6M5jR39ql2mrGXSXik5pkcJxkzDIoNvEBjqkAYbK6k93Uh2yCtwXCxbPhx9bPfmK%2BDt05J5qKF9rZ6yshNupPPjVdK7gnqcz9c%2FwMKp07gBEbe1dUgHzumjq5oFqOECEUWrYm328mazo1SCKNuwmI8w%2BTzAPTZfFBwnleIPWwW6mFB9Z1PoOCSQZrFp77HJ16m7rur9Vk%2BrhgeXu5X%2FJGdgaDCaeP6coFWA1RI1meDvPRU7t%2BgyEdFz6qemP7zkA&X-Amz-Signature=835af92c530727e97993685960d4051df033d9522ff06d9d5e10ab3a3ba3d602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6Q4CYE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD7wWPrxBgHcBCecsOzp0NubQCsr6ugpx4UypqIJeNdhwIhAN%2FaNQVBw22n8TfYu8QGbbuEVSdCB1Q9DPvK70iuwQHdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMkB6d%2FOuLP3Puc0q3APrMO9LsCbxAO83u2tD2eecPCxl1wr0vG%2Fx8ewBEHtlkK4MVO5tzloorAlzNC5ZgZ2fH%2BE3lCF1%2FjiqYCRNxqEl1JOiV1LC%2B9gPIW3Z4Z4tSTkeHRNeIxGE%2BNosgZPw3z4hcWA625Z%2BmuomgzbqrVRqZmd4mR7tTkWtrvp25fmaxe7FrURcuA71pl19JXsKS37gW0lHNTAHSpc0CybWpIv1H5rtUfUD0r%2FVpXgPwsyRfiDZlKs9O8lh0q4Gqd36XiLqGEK3ppEk5XZn1%2BpuyF%2B6odZbInn8qe7k79kdEYIa8BQpC2BOQogh0siQh9i9AjtbURXUHMNATroPBsjHRy75qgMia6a4i%2Bo3TPkMr6bjuTC4rUYxKQoCnEBWHg8E1BJehCjNqpe4gyTkt%2FNEpl%2BuRrf286IqnMf0tDhhOXr2%2BRwR7TUZigSoa%2Boau8dmbStoBkrYbJPME7HIUPO4V%2FT%2FXUan2kiF7faxy%2BeDtbne5g0aT8mvhTK%2FRA53D%2FLE7Mf%2FGhF9xplMx3ACJv7jJWWOQqRaZWuJwS4CArEZF3Qskd7I2rDqE%2F39UGWWMidPFFYY3iq2TBX%2FxQOxSWLJtNt2MVdncqZITV0R6M5jR39ql2mrGXSXik5pkcJxkzDIoNvEBjqkAYbK6k93Uh2yCtwXCxbPhx9bPfmK%2BDt05J5qKF9rZ6yshNupPPjVdK7gnqcz9c%2FwMKp07gBEbe1dUgHzumjq5oFqOECEUWrYm328mazo1SCKNuwmI8w%2BTzAPTZfFBwnleIPWwW6mFB9Z1PoOCSQZrFp77HJ16m7rur9Vk%2BrhgeXu5X%2FJGdgaDCaeP6coFWA1RI1meDvPRU7t%2BgyEdFz6qemP7zkA&X-Amz-Signature=6222fcceb9123dce7ec66f6c5aa46a8fa51a70707f92a05d0a9af05bf33804c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6Q4CYE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD7wWPrxBgHcBCecsOzp0NubQCsr6ugpx4UypqIJeNdhwIhAN%2FaNQVBw22n8TfYu8QGbbuEVSdCB1Q9DPvK70iuwQHdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMkB6d%2FOuLP3Puc0q3APrMO9LsCbxAO83u2tD2eecPCxl1wr0vG%2Fx8ewBEHtlkK4MVO5tzloorAlzNC5ZgZ2fH%2BE3lCF1%2FjiqYCRNxqEl1JOiV1LC%2B9gPIW3Z4Z4tSTkeHRNeIxGE%2BNosgZPw3z4hcWA625Z%2BmuomgzbqrVRqZmd4mR7tTkWtrvp25fmaxe7FrURcuA71pl19JXsKS37gW0lHNTAHSpc0CybWpIv1H5rtUfUD0r%2FVpXgPwsyRfiDZlKs9O8lh0q4Gqd36XiLqGEK3ppEk5XZn1%2BpuyF%2B6odZbInn8qe7k79kdEYIa8BQpC2BOQogh0siQh9i9AjtbURXUHMNATroPBsjHRy75qgMia6a4i%2Bo3TPkMr6bjuTC4rUYxKQoCnEBWHg8E1BJehCjNqpe4gyTkt%2FNEpl%2BuRrf286IqnMf0tDhhOXr2%2BRwR7TUZigSoa%2Boau8dmbStoBkrYbJPME7HIUPO4V%2FT%2FXUan2kiF7faxy%2BeDtbne5g0aT8mvhTK%2FRA53D%2FLE7Mf%2FGhF9xplMx3ACJv7jJWWOQqRaZWuJwS4CArEZF3Qskd7I2rDqE%2F39UGWWMidPFFYY3iq2TBX%2FxQOxSWLJtNt2MVdncqZITV0R6M5jR39ql2mrGXSXik5pkcJxkzDIoNvEBjqkAYbK6k93Uh2yCtwXCxbPhx9bPfmK%2BDt05J5qKF9rZ6yshNupPPjVdK7gnqcz9c%2FwMKp07gBEbe1dUgHzumjq5oFqOECEUWrYm328mazo1SCKNuwmI8w%2BTzAPTZfFBwnleIPWwW6mFB9Z1PoOCSQZrFp77HJ16m7rur9Vk%2BrhgeXu5X%2FJGdgaDCaeP6coFWA1RI1meDvPRU7t%2BgyEdFz6qemP7zkA&X-Amz-Signature=5ff3304659bfd7bfb8dd47371977ab498cde0b6c20bb45548c182a2549c97f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6Q4CYE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD7wWPrxBgHcBCecsOzp0NubQCsr6ugpx4UypqIJeNdhwIhAN%2FaNQVBw22n8TfYu8QGbbuEVSdCB1Q9DPvK70iuwQHdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMkB6d%2FOuLP3Puc0q3APrMO9LsCbxAO83u2tD2eecPCxl1wr0vG%2Fx8ewBEHtlkK4MVO5tzloorAlzNC5ZgZ2fH%2BE3lCF1%2FjiqYCRNxqEl1JOiV1LC%2B9gPIW3Z4Z4tSTkeHRNeIxGE%2BNosgZPw3z4hcWA625Z%2BmuomgzbqrVRqZmd4mR7tTkWtrvp25fmaxe7FrURcuA71pl19JXsKS37gW0lHNTAHSpc0CybWpIv1H5rtUfUD0r%2FVpXgPwsyRfiDZlKs9O8lh0q4Gqd36XiLqGEK3ppEk5XZn1%2BpuyF%2B6odZbInn8qe7k79kdEYIa8BQpC2BOQogh0siQh9i9AjtbURXUHMNATroPBsjHRy75qgMia6a4i%2Bo3TPkMr6bjuTC4rUYxKQoCnEBWHg8E1BJehCjNqpe4gyTkt%2FNEpl%2BuRrf286IqnMf0tDhhOXr2%2BRwR7TUZigSoa%2Boau8dmbStoBkrYbJPME7HIUPO4V%2FT%2FXUan2kiF7faxy%2BeDtbne5g0aT8mvhTK%2FRA53D%2FLE7Mf%2FGhF9xplMx3ACJv7jJWWOQqRaZWuJwS4CArEZF3Qskd7I2rDqE%2F39UGWWMidPFFYY3iq2TBX%2FxQOxSWLJtNt2MVdncqZITV0R6M5jR39ql2mrGXSXik5pkcJxkzDIoNvEBjqkAYbK6k93Uh2yCtwXCxbPhx9bPfmK%2BDt05J5qKF9rZ6yshNupPPjVdK7gnqcz9c%2FwMKp07gBEbe1dUgHzumjq5oFqOECEUWrYm328mazo1SCKNuwmI8w%2BTzAPTZfFBwnleIPWwW6mFB9Z1PoOCSQZrFp77HJ16m7rur9Vk%2BrhgeXu5X%2FJGdgaDCaeP6coFWA1RI1meDvPRU7t%2BgyEdFz6qemP7zkA&X-Amz-Signature=bcbc5744484135ce3c23d9d26eb58aec844c26b758304cdaa7aed500a0dbcc93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6Q4CYE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD7wWPrxBgHcBCecsOzp0NubQCsr6ugpx4UypqIJeNdhwIhAN%2FaNQVBw22n8TfYu8QGbbuEVSdCB1Q9DPvK70iuwQHdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMkB6d%2FOuLP3Puc0q3APrMO9LsCbxAO83u2tD2eecPCxl1wr0vG%2Fx8ewBEHtlkK4MVO5tzloorAlzNC5ZgZ2fH%2BE3lCF1%2FjiqYCRNxqEl1JOiV1LC%2B9gPIW3Z4Z4tSTkeHRNeIxGE%2BNosgZPw3z4hcWA625Z%2BmuomgzbqrVRqZmd4mR7tTkWtrvp25fmaxe7FrURcuA71pl19JXsKS37gW0lHNTAHSpc0CybWpIv1H5rtUfUD0r%2FVpXgPwsyRfiDZlKs9O8lh0q4Gqd36XiLqGEK3ppEk5XZn1%2BpuyF%2B6odZbInn8qe7k79kdEYIa8BQpC2BOQogh0siQh9i9AjtbURXUHMNATroPBsjHRy75qgMia6a4i%2Bo3TPkMr6bjuTC4rUYxKQoCnEBWHg8E1BJehCjNqpe4gyTkt%2FNEpl%2BuRrf286IqnMf0tDhhOXr2%2BRwR7TUZigSoa%2Boau8dmbStoBkrYbJPME7HIUPO4V%2FT%2FXUan2kiF7faxy%2BeDtbne5g0aT8mvhTK%2FRA53D%2FLE7Mf%2FGhF9xplMx3ACJv7jJWWOQqRaZWuJwS4CArEZF3Qskd7I2rDqE%2F39UGWWMidPFFYY3iq2TBX%2FxQOxSWLJtNt2MVdncqZITV0R6M5jR39ql2mrGXSXik5pkcJxkzDIoNvEBjqkAYbK6k93Uh2yCtwXCxbPhx9bPfmK%2BDt05J5qKF9rZ6yshNupPPjVdK7gnqcz9c%2FwMKp07gBEbe1dUgHzumjq5oFqOECEUWrYm328mazo1SCKNuwmI8w%2BTzAPTZfFBwnleIPWwW6mFB9Z1PoOCSQZrFp77HJ16m7rur9Vk%2BrhgeXu5X%2FJGdgaDCaeP6coFWA1RI1meDvPRU7t%2BgyEdFz6qemP7zkA&X-Amz-Signature=ee33360336d61cff9637093612fa21a501db73c18446f617c225fe5fe3787b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6Q4CYE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD7wWPrxBgHcBCecsOzp0NubQCsr6ugpx4UypqIJeNdhwIhAN%2FaNQVBw22n8TfYu8QGbbuEVSdCB1Q9DPvK70iuwQHdKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoMkB6d%2FOuLP3Puc0q3APrMO9LsCbxAO83u2tD2eecPCxl1wr0vG%2Fx8ewBEHtlkK4MVO5tzloorAlzNC5ZgZ2fH%2BE3lCF1%2FjiqYCRNxqEl1JOiV1LC%2B9gPIW3Z4Z4tSTkeHRNeIxGE%2BNosgZPw3z4hcWA625Z%2BmuomgzbqrVRqZmd4mR7tTkWtrvp25fmaxe7FrURcuA71pl19JXsKS37gW0lHNTAHSpc0CybWpIv1H5rtUfUD0r%2FVpXgPwsyRfiDZlKs9O8lh0q4Gqd36XiLqGEK3ppEk5XZn1%2BpuyF%2B6odZbInn8qe7k79kdEYIa8BQpC2BOQogh0siQh9i9AjtbURXUHMNATroPBsjHRy75qgMia6a4i%2Bo3TPkMr6bjuTC4rUYxKQoCnEBWHg8E1BJehCjNqpe4gyTkt%2FNEpl%2BuRrf286IqnMf0tDhhOXr2%2BRwR7TUZigSoa%2Boau8dmbStoBkrYbJPME7HIUPO4V%2FT%2FXUan2kiF7faxy%2BeDtbne5g0aT8mvhTK%2FRA53D%2FLE7Mf%2FGhF9xplMx3ACJv7jJWWOQqRaZWuJwS4CArEZF3Qskd7I2rDqE%2F39UGWWMidPFFYY3iq2TBX%2FxQOxSWLJtNt2MVdncqZITV0R6M5jR39ql2mrGXSXik5pkcJxkzDIoNvEBjqkAYbK6k93Uh2yCtwXCxbPhx9bPfmK%2BDt05J5qKF9rZ6yshNupPPjVdK7gnqcz9c%2FwMKp07gBEbe1dUgHzumjq5oFqOECEUWrYm328mazo1SCKNuwmI8w%2BTzAPTZfFBwnleIPWwW6mFB9Z1PoOCSQZrFp77HJ16m7rur9Vk%2BrhgeXu5X%2FJGdgaDCaeP6coFWA1RI1meDvPRU7t%2BgyEdFz6qemP7zkA&X-Amz-Signature=a1f27a8be6dbbf13172e799e682967fd65c8339948a71c378f07de83f4a0bdb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
