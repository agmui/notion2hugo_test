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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NS4BC7A%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgZn3DpaZ1nwaxIDOzX5JQN3IGP9fxetFu7MquJZBb%2BAiEAqxv1ejO5dtNC7RbFQucHBkXHrhxkooeESGSNEiyYdPkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGC7eH5gfkBkwBXKSyrcA%2F%2F1NrxME%2FPAnPUqw1pnU4pKdY51qKt0VsvtOOLp7ORNVpUotfTc%2BUBzQj4vY%2BKoybxq3dZDXnfR6D1jAhNukyQJIkoJwRVLwWCtiACiIMkcuOHw%2F1W3Hn1CIEYXP97HN34qzcan68Stxrvfi%2B7y90ezYUMpRjNK1zL3un6wHRRmkOzVivi5lXkf%2BHebSi2n80cXlcbe4hPu273cq%2BlqNuD7%2BW%2FitU94Cd5n3j%2FY9QO3zVdbWFOUh7nvmG0lDWSFI8WmfqN4sa4DGMdKEbX%2FZ990Z7TGVgVfcwC9KOUMIPuUPGigVV7lZ0Q0w5Wyx1i0oWsivfKWDrWMnBnrognchM5BjshVRXCnT1%2B32nN6o1pbHeL8OR6NLOxKJW6LcMP%2FwRY7gwd956AiJMuUTSj25JCmqvuqziQL%2F%2BpOsdDtyaMYkQF%2FJS3cC9euMpxHmg5GUlVcCTf70KPs2lNMx09aj2oRYY9cldL1A1BX63IafHsRTuv8AKaSUQ046LYNh4G6ICrSrvAdNsXEEe%2FK0qZGFIEcBy%2BxIkZ0riXfCi%2Fi6Cbm9IV97HyRiD%2BCithxEz2F5T0Wo4PDKit6V4VDqzCYXmYKqvSI9AZba%2FER%2B52KCDct6qARvo6bfJecx%2FJGMLeevcYGOqUBxN9YNmh4Pv5ZLin%2F5cbuU4GWSX7gb300NiwCHyPn6XQ%2F0IW12XpZokh5prR3AyH5MiKeQs2caifd87e2F8owgVeskM2vUnnfUnoHK98PjMnHXfmG10aoRbZ21fadkvQIL%2FR2JFX6FINPpQZmism43F4ivqT8aipePBlsvNcDHzI27dopwHRMECZx6PfxxVsxrDbjMh%2FIl41vIggJXPY9w%2BINP9oJ&X-Amz-Signature=4e4c59f5216f4aa9dd90a0cf53cd533093894f5e701f0e214acfd944e6b38c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A6B2ZQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFKocA4cKxqbejZfaicuHxt2x26Fn3tkrIpuO1trkUAIhALFRgX6jkWWqkJOHlVOHwSeV0NH0ysmZrGC%2BlgcXmtm%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsUJTO%2F2SMrRH7s7wq3AOzudZPbv%2F5wgkdVBfFfetMtykBrck8YDRIVcyNoPAwAtcD7D74m%2Fdl%2FXiblLtt%2FWVtYE322NOPWUP24I3JPYMjtFL7pVVgYf0q38bwL50mkWZo4XKUXMnWcN5C%2Fopxq%2FpqdKUh0QAW%2Bc6MCs183HHWTpCT2titLZziptQnS%2Bgj3KNbGYMk%2B5TVhHgLnzyd%2FJNEw6pXNTfh2HXg6kLasHokUhLYkFx7TosLV0caCAS2kaTK5EwEpAKIBK5fOV1IMyQbrM6RBPy7zZrn4xI17O7Hh%2BlcqoEGE%2FfTJRkiueHm9FQ0lgUzL8eR6sDQv4z%2Fj3I%2BYF1lvkPNRQBa%2FhyLqWDXPoLQ0xGnneKz6Wxi6dIbnLwjBm%2BX4j5vf5P20KH7AIgKNzOvTSuv8FXNgNgoqCxZBWYF%2FAFeSUocvYt2UvCzWzjItHktMCidBVPxh58UFx5oG9Ly%2Bfsq4Q6lbhn7YzSuC0GkuW38oIXf2TLmEXTCgpByxkWNSK8qSkvB5ORPYn3MRF3ay4FxX7dRictSuq7HViIz4nWNrVwYinsQ7v0z26088kA0c7NLRBKoGFgWn0ZNFC%2BFrH85wb%2BG2cwzUrw7Bx6bbKJRYx506DwbUR%2FR0XXI0dIs6x2Dl%2Fs%2FyDCln73GBjqkAeKn3YTJHVuMv7jKsqVYj%2Fx%2B3LTzXYr13vw%2FtJbWgsx9jZdNSeFptCW158dTuhyHfL0HzWcIPGTxT3QcNS6t1zVZyOUdMDqM1xTaV%2B1NHJdtgNGBomkEdwddeR379GD8JoDHp3nYS53d%2FB58uQPw7RpBW4XPQEkxMbYjwrIaoOFqSdeozXV6VDV2LC7jAAkOXLga4jkobCtTfpw2%2Bwc5ho4A4uu0&X-Amz-Signature=6e8bb674bc656b502f9aa9cca7c865444ba602de60e7627fcda7b3f426c636b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A6B2ZQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFKocA4cKxqbejZfaicuHxt2x26Fn3tkrIpuO1trkUAIhALFRgX6jkWWqkJOHlVOHwSeV0NH0ysmZrGC%2BlgcXmtm%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsUJTO%2F2SMrRH7s7wq3AOzudZPbv%2F5wgkdVBfFfetMtykBrck8YDRIVcyNoPAwAtcD7D74m%2Fdl%2FXiblLtt%2FWVtYE322NOPWUP24I3JPYMjtFL7pVVgYf0q38bwL50mkWZo4XKUXMnWcN5C%2Fopxq%2FpqdKUh0QAW%2Bc6MCs183HHWTpCT2titLZziptQnS%2Bgj3KNbGYMk%2B5TVhHgLnzyd%2FJNEw6pXNTfh2HXg6kLasHokUhLYkFx7TosLV0caCAS2kaTK5EwEpAKIBK5fOV1IMyQbrM6RBPy7zZrn4xI17O7Hh%2BlcqoEGE%2FfTJRkiueHm9FQ0lgUzL8eR6sDQv4z%2Fj3I%2BYF1lvkPNRQBa%2FhyLqWDXPoLQ0xGnneKz6Wxi6dIbnLwjBm%2BX4j5vf5P20KH7AIgKNzOvTSuv8FXNgNgoqCxZBWYF%2FAFeSUocvYt2UvCzWzjItHktMCidBVPxh58UFx5oG9Ly%2Bfsq4Q6lbhn7YzSuC0GkuW38oIXf2TLmEXTCgpByxkWNSK8qSkvB5ORPYn3MRF3ay4FxX7dRictSuq7HViIz4nWNrVwYinsQ7v0z26088kA0c7NLRBKoGFgWn0ZNFC%2BFrH85wb%2BG2cwzUrw7Bx6bbKJRYx506DwbUR%2FR0XXI0dIs6x2Dl%2Fs%2FyDCln73GBjqkAeKn3YTJHVuMv7jKsqVYj%2Fx%2B3LTzXYr13vw%2FtJbWgsx9jZdNSeFptCW158dTuhyHfL0HzWcIPGTxT3QcNS6t1zVZyOUdMDqM1xTaV%2B1NHJdtgNGBomkEdwddeR379GD8JoDHp3nYS53d%2FB58uQPw7RpBW4XPQEkxMbYjwrIaoOFqSdeozXV6VDV2LC7jAAkOXLga4jkobCtTfpw2%2Bwc5ho4A4uu0&X-Amz-Signature=3fa32799825fa104e908d22175527ba11ac4da3dd248a60274a9024d06ace1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A6B2ZQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFKocA4cKxqbejZfaicuHxt2x26Fn3tkrIpuO1trkUAIhALFRgX6jkWWqkJOHlVOHwSeV0NH0ysmZrGC%2BlgcXmtm%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsUJTO%2F2SMrRH7s7wq3AOzudZPbv%2F5wgkdVBfFfetMtykBrck8YDRIVcyNoPAwAtcD7D74m%2Fdl%2FXiblLtt%2FWVtYE322NOPWUP24I3JPYMjtFL7pVVgYf0q38bwL50mkWZo4XKUXMnWcN5C%2Fopxq%2FpqdKUh0QAW%2Bc6MCs183HHWTpCT2titLZziptQnS%2Bgj3KNbGYMk%2B5TVhHgLnzyd%2FJNEw6pXNTfh2HXg6kLasHokUhLYkFx7TosLV0caCAS2kaTK5EwEpAKIBK5fOV1IMyQbrM6RBPy7zZrn4xI17O7Hh%2BlcqoEGE%2FfTJRkiueHm9FQ0lgUzL8eR6sDQv4z%2Fj3I%2BYF1lvkPNRQBa%2FhyLqWDXPoLQ0xGnneKz6Wxi6dIbnLwjBm%2BX4j5vf5P20KH7AIgKNzOvTSuv8FXNgNgoqCxZBWYF%2FAFeSUocvYt2UvCzWzjItHktMCidBVPxh58UFx5oG9Ly%2Bfsq4Q6lbhn7YzSuC0GkuW38oIXf2TLmEXTCgpByxkWNSK8qSkvB5ORPYn3MRF3ay4FxX7dRictSuq7HViIz4nWNrVwYinsQ7v0z26088kA0c7NLRBKoGFgWn0ZNFC%2BFrH85wb%2BG2cwzUrw7Bx6bbKJRYx506DwbUR%2FR0XXI0dIs6x2Dl%2Fs%2FyDCln73GBjqkAeKn3YTJHVuMv7jKsqVYj%2Fx%2B3LTzXYr13vw%2FtJbWgsx9jZdNSeFptCW158dTuhyHfL0HzWcIPGTxT3QcNS6t1zVZyOUdMDqM1xTaV%2B1NHJdtgNGBomkEdwddeR379GD8JoDHp3nYS53d%2FB58uQPw7RpBW4XPQEkxMbYjwrIaoOFqSdeozXV6VDV2LC7jAAkOXLga4jkobCtTfpw2%2Bwc5ho4A4uu0&X-Amz-Signature=2d898827fdf2c76ef973f3474d092f955ff2537eee282d252ed0195751030a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A6B2ZQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFKocA4cKxqbejZfaicuHxt2x26Fn3tkrIpuO1trkUAIhALFRgX6jkWWqkJOHlVOHwSeV0NH0ysmZrGC%2BlgcXmtm%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsUJTO%2F2SMrRH7s7wq3AOzudZPbv%2F5wgkdVBfFfetMtykBrck8YDRIVcyNoPAwAtcD7D74m%2Fdl%2FXiblLtt%2FWVtYE322NOPWUP24I3JPYMjtFL7pVVgYf0q38bwL50mkWZo4XKUXMnWcN5C%2Fopxq%2FpqdKUh0QAW%2Bc6MCs183HHWTpCT2titLZziptQnS%2Bgj3KNbGYMk%2B5TVhHgLnzyd%2FJNEw6pXNTfh2HXg6kLasHokUhLYkFx7TosLV0caCAS2kaTK5EwEpAKIBK5fOV1IMyQbrM6RBPy7zZrn4xI17O7Hh%2BlcqoEGE%2FfTJRkiueHm9FQ0lgUzL8eR6sDQv4z%2Fj3I%2BYF1lvkPNRQBa%2FhyLqWDXPoLQ0xGnneKz6Wxi6dIbnLwjBm%2BX4j5vf5P20KH7AIgKNzOvTSuv8FXNgNgoqCxZBWYF%2FAFeSUocvYt2UvCzWzjItHktMCidBVPxh58UFx5oG9Ly%2Bfsq4Q6lbhn7YzSuC0GkuW38oIXf2TLmEXTCgpByxkWNSK8qSkvB5ORPYn3MRF3ay4FxX7dRictSuq7HViIz4nWNrVwYinsQ7v0z26088kA0c7NLRBKoGFgWn0ZNFC%2BFrH85wb%2BG2cwzUrw7Bx6bbKJRYx506DwbUR%2FR0XXI0dIs6x2Dl%2Fs%2FyDCln73GBjqkAeKn3YTJHVuMv7jKsqVYj%2Fx%2B3LTzXYr13vw%2FtJbWgsx9jZdNSeFptCW158dTuhyHfL0HzWcIPGTxT3QcNS6t1zVZyOUdMDqM1xTaV%2B1NHJdtgNGBomkEdwddeR379GD8JoDHp3nYS53d%2FB58uQPw7RpBW4XPQEkxMbYjwrIaoOFqSdeozXV6VDV2LC7jAAkOXLga4jkobCtTfpw2%2Bwc5ho4A4uu0&X-Amz-Signature=fa016e8a083759bc15cfa08cf3b7478091ccdea98e986b14a60c69c225aa981f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A6B2ZQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFKocA4cKxqbejZfaicuHxt2x26Fn3tkrIpuO1trkUAIhALFRgX6jkWWqkJOHlVOHwSeV0NH0ysmZrGC%2BlgcXmtm%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsUJTO%2F2SMrRH7s7wq3AOzudZPbv%2F5wgkdVBfFfetMtykBrck8YDRIVcyNoPAwAtcD7D74m%2Fdl%2FXiblLtt%2FWVtYE322NOPWUP24I3JPYMjtFL7pVVgYf0q38bwL50mkWZo4XKUXMnWcN5C%2Fopxq%2FpqdKUh0QAW%2Bc6MCs183HHWTpCT2titLZziptQnS%2Bgj3KNbGYMk%2B5TVhHgLnzyd%2FJNEw6pXNTfh2HXg6kLasHokUhLYkFx7TosLV0caCAS2kaTK5EwEpAKIBK5fOV1IMyQbrM6RBPy7zZrn4xI17O7Hh%2BlcqoEGE%2FfTJRkiueHm9FQ0lgUzL8eR6sDQv4z%2Fj3I%2BYF1lvkPNRQBa%2FhyLqWDXPoLQ0xGnneKz6Wxi6dIbnLwjBm%2BX4j5vf5P20KH7AIgKNzOvTSuv8FXNgNgoqCxZBWYF%2FAFeSUocvYt2UvCzWzjItHktMCidBVPxh58UFx5oG9Ly%2Bfsq4Q6lbhn7YzSuC0GkuW38oIXf2TLmEXTCgpByxkWNSK8qSkvB5ORPYn3MRF3ay4FxX7dRictSuq7HViIz4nWNrVwYinsQ7v0z26088kA0c7NLRBKoGFgWn0ZNFC%2BFrH85wb%2BG2cwzUrw7Bx6bbKJRYx506DwbUR%2FR0XXI0dIs6x2Dl%2Fs%2FyDCln73GBjqkAeKn3YTJHVuMv7jKsqVYj%2Fx%2B3LTzXYr13vw%2FtJbWgsx9jZdNSeFptCW158dTuhyHfL0HzWcIPGTxT3QcNS6t1zVZyOUdMDqM1xTaV%2B1NHJdtgNGBomkEdwddeR379GD8JoDHp3nYS53d%2FB58uQPw7RpBW4XPQEkxMbYjwrIaoOFqSdeozXV6VDV2LC7jAAkOXLga4jkobCtTfpw2%2Bwc5ho4A4uu0&X-Amz-Signature=5d152b860b04b88880cd7b49aaf969c260a08c1d046c0b719c95bc31a5dc2ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A6B2ZQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFKocA4cKxqbejZfaicuHxt2x26Fn3tkrIpuO1trkUAIhALFRgX6jkWWqkJOHlVOHwSeV0NH0ysmZrGC%2BlgcXmtm%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsUJTO%2F2SMrRH7s7wq3AOzudZPbv%2F5wgkdVBfFfetMtykBrck8YDRIVcyNoPAwAtcD7D74m%2Fdl%2FXiblLtt%2FWVtYE322NOPWUP24I3JPYMjtFL7pVVgYf0q38bwL50mkWZo4XKUXMnWcN5C%2Fopxq%2FpqdKUh0QAW%2Bc6MCs183HHWTpCT2titLZziptQnS%2Bgj3KNbGYMk%2B5TVhHgLnzyd%2FJNEw6pXNTfh2HXg6kLasHokUhLYkFx7TosLV0caCAS2kaTK5EwEpAKIBK5fOV1IMyQbrM6RBPy7zZrn4xI17O7Hh%2BlcqoEGE%2FfTJRkiueHm9FQ0lgUzL8eR6sDQv4z%2Fj3I%2BYF1lvkPNRQBa%2FhyLqWDXPoLQ0xGnneKz6Wxi6dIbnLwjBm%2BX4j5vf5P20KH7AIgKNzOvTSuv8FXNgNgoqCxZBWYF%2FAFeSUocvYt2UvCzWzjItHktMCidBVPxh58UFx5oG9Ly%2Bfsq4Q6lbhn7YzSuC0GkuW38oIXf2TLmEXTCgpByxkWNSK8qSkvB5ORPYn3MRF3ay4FxX7dRictSuq7HViIz4nWNrVwYinsQ7v0z26088kA0c7NLRBKoGFgWn0ZNFC%2BFrH85wb%2BG2cwzUrw7Bx6bbKJRYx506DwbUR%2FR0XXI0dIs6x2Dl%2Fs%2FyDCln73GBjqkAeKn3YTJHVuMv7jKsqVYj%2Fx%2B3LTzXYr13vw%2FtJbWgsx9jZdNSeFptCW158dTuhyHfL0HzWcIPGTxT3QcNS6t1zVZyOUdMDqM1xTaV%2B1NHJdtgNGBomkEdwddeR379GD8JoDHp3nYS53d%2FB58uQPw7RpBW4XPQEkxMbYjwrIaoOFqSdeozXV6VDV2LC7jAAkOXLga4jkobCtTfpw2%2Bwc5ho4A4uu0&X-Amz-Signature=0e5da96c051ca52ff32424bfe9e021a9cd3ee59edf4d286175dc58c3eae36101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A6B2ZQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFKocA4cKxqbejZfaicuHxt2x26Fn3tkrIpuO1trkUAIhALFRgX6jkWWqkJOHlVOHwSeV0NH0ysmZrGC%2BlgcXmtm%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsUJTO%2F2SMrRH7s7wq3AOzudZPbv%2F5wgkdVBfFfetMtykBrck8YDRIVcyNoPAwAtcD7D74m%2Fdl%2FXiblLtt%2FWVtYE322NOPWUP24I3JPYMjtFL7pVVgYf0q38bwL50mkWZo4XKUXMnWcN5C%2Fopxq%2FpqdKUh0QAW%2Bc6MCs183HHWTpCT2titLZziptQnS%2Bgj3KNbGYMk%2B5TVhHgLnzyd%2FJNEw6pXNTfh2HXg6kLasHokUhLYkFx7TosLV0caCAS2kaTK5EwEpAKIBK5fOV1IMyQbrM6RBPy7zZrn4xI17O7Hh%2BlcqoEGE%2FfTJRkiueHm9FQ0lgUzL8eR6sDQv4z%2Fj3I%2BYF1lvkPNRQBa%2FhyLqWDXPoLQ0xGnneKz6Wxi6dIbnLwjBm%2BX4j5vf5P20KH7AIgKNzOvTSuv8FXNgNgoqCxZBWYF%2FAFeSUocvYt2UvCzWzjItHktMCidBVPxh58UFx5oG9Ly%2Bfsq4Q6lbhn7YzSuC0GkuW38oIXf2TLmEXTCgpByxkWNSK8qSkvB5ORPYn3MRF3ay4FxX7dRictSuq7HViIz4nWNrVwYinsQ7v0z26088kA0c7NLRBKoGFgWn0ZNFC%2BFrH85wb%2BG2cwzUrw7Bx6bbKJRYx506DwbUR%2FR0XXI0dIs6x2Dl%2Fs%2FyDCln73GBjqkAeKn3YTJHVuMv7jKsqVYj%2Fx%2B3LTzXYr13vw%2FtJbWgsx9jZdNSeFptCW158dTuhyHfL0HzWcIPGTxT3QcNS6t1zVZyOUdMDqM1xTaV%2B1NHJdtgNGBomkEdwddeR379GD8JoDHp3nYS53d%2FB58uQPw7RpBW4XPQEkxMbYjwrIaoOFqSdeozXV6VDV2LC7jAAkOXLga4jkobCtTfpw2%2Bwc5ho4A4uu0&X-Amz-Signature=15bebf26810414e7a85dee70e7f07ac850146cd719852e33b766091a424b2de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A6B2ZQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFKocA4cKxqbejZfaicuHxt2x26Fn3tkrIpuO1trkUAIhALFRgX6jkWWqkJOHlVOHwSeV0NH0ysmZrGC%2BlgcXmtm%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsUJTO%2F2SMrRH7s7wq3AOzudZPbv%2F5wgkdVBfFfetMtykBrck8YDRIVcyNoPAwAtcD7D74m%2Fdl%2FXiblLtt%2FWVtYE322NOPWUP24I3JPYMjtFL7pVVgYf0q38bwL50mkWZo4XKUXMnWcN5C%2Fopxq%2FpqdKUh0QAW%2Bc6MCs183HHWTpCT2titLZziptQnS%2Bgj3KNbGYMk%2B5TVhHgLnzyd%2FJNEw6pXNTfh2HXg6kLasHokUhLYkFx7TosLV0caCAS2kaTK5EwEpAKIBK5fOV1IMyQbrM6RBPy7zZrn4xI17O7Hh%2BlcqoEGE%2FfTJRkiueHm9FQ0lgUzL8eR6sDQv4z%2Fj3I%2BYF1lvkPNRQBa%2FhyLqWDXPoLQ0xGnneKz6Wxi6dIbnLwjBm%2BX4j5vf5P20KH7AIgKNzOvTSuv8FXNgNgoqCxZBWYF%2FAFeSUocvYt2UvCzWzjItHktMCidBVPxh58UFx5oG9Ly%2Bfsq4Q6lbhn7YzSuC0GkuW38oIXf2TLmEXTCgpByxkWNSK8qSkvB5ORPYn3MRF3ay4FxX7dRictSuq7HViIz4nWNrVwYinsQ7v0z26088kA0c7NLRBKoGFgWn0ZNFC%2BFrH85wb%2BG2cwzUrw7Bx6bbKJRYx506DwbUR%2FR0XXI0dIs6x2Dl%2Fs%2FyDCln73GBjqkAeKn3YTJHVuMv7jKsqVYj%2Fx%2B3LTzXYr13vw%2FtJbWgsx9jZdNSeFptCW158dTuhyHfL0HzWcIPGTxT3QcNS6t1zVZyOUdMDqM1xTaV%2B1NHJdtgNGBomkEdwddeR379GD8JoDHp3nYS53d%2FB58uQPw7RpBW4XPQEkxMbYjwrIaoOFqSdeozXV6VDV2LC7jAAkOXLga4jkobCtTfpw2%2Bwc5ho4A4uu0&X-Amz-Signature=cf8109bda951840d0e45993aaaa7d42d65ed44ce694622f7640729f75f95f43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A6B2ZQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFKocA4cKxqbejZfaicuHxt2x26Fn3tkrIpuO1trkUAIhALFRgX6jkWWqkJOHlVOHwSeV0NH0ysmZrGC%2BlgcXmtm%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsUJTO%2F2SMrRH7s7wq3AOzudZPbv%2F5wgkdVBfFfetMtykBrck8YDRIVcyNoPAwAtcD7D74m%2Fdl%2FXiblLtt%2FWVtYE322NOPWUP24I3JPYMjtFL7pVVgYf0q38bwL50mkWZo4XKUXMnWcN5C%2Fopxq%2FpqdKUh0QAW%2Bc6MCs183HHWTpCT2titLZziptQnS%2Bgj3KNbGYMk%2B5TVhHgLnzyd%2FJNEw6pXNTfh2HXg6kLasHokUhLYkFx7TosLV0caCAS2kaTK5EwEpAKIBK5fOV1IMyQbrM6RBPy7zZrn4xI17O7Hh%2BlcqoEGE%2FfTJRkiueHm9FQ0lgUzL8eR6sDQv4z%2Fj3I%2BYF1lvkPNRQBa%2FhyLqWDXPoLQ0xGnneKz6Wxi6dIbnLwjBm%2BX4j5vf5P20KH7AIgKNzOvTSuv8FXNgNgoqCxZBWYF%2FAFeSUocvYt2UvCzWzjItHktMCidBVPxh58UFx5oG9Ly%2Bfsq4Q6lbhn7YzSuC0GkuW38oIXf2TLmEXTCgpByxkWNSK8qSkvB5ORPYn3MRF3ay4FxX7dRictSuq7HViIz4nWNrVwYinsQ7v0z26088kA0c7NLRBKoGFgWn0ZNFC%2BFrH85wb%2BG2cwzUrw7Bx6bbKJRYx506DwbUR%2FR0XXI0dIs6x2Dl%2Fs%2FyDCln73GBjqkAeKn3YTJHVuMv7jKsqVYj%2Fx%2B3LTzXYr13vw%2FtJbWgsx9jZdNSeFptCW158dTuhyHfL0HzWcIPGTxT3QcNS6t1zVZyOUdMDqM1xTaV%2B1NHJdtgNGBomkEdwddeR379GD8JoDHp3nYS53d%2FB58uQPw7RpBW4XPQEkxMbYjwrIaoOFqSdeozXV6VDV2LC7jAAkOXLga4jkobCtTfpw2%2Bwc5ho4A4uu0&X-Amz-Signature=b8eccd18ec3f4445790134267edf131f735bc12276ed78a3cff56432b9c074bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3A6B2ZQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFKocA4cKxqbejZfaicuHxt2x26Fn3tkrIpuO1trkUAIhALFRgX6jkWWqkJOHlVOHwSeV0NH0ysmZrGC%2BlgcXmtm%2BKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsUJTO%2F2SMrRH7s7wq3AOzudZPbv%2F5wgkdVBfFfetMtykBrck8YDRIVcyNoPAwAtcD7D74m%2Fdl%2FXiblLtt%2FWVtYE322NOPWUP24I3JPYMjtFL7pVVgYf0q38bwL50mkWZo4XKUXMnWcN5C%2Fopxq%2FpqdKUh0QAW%2Bc6MCs183HHWTpCT2titLZziptQnS%2Bgj3KNbGYMk%2B5TVhHgLnzyd%2FJNEw6pXNTfh2HXg6kLasHokUhLYkFx7TosLV0caCAS2kaTK5EwEpAKIBK5fOV1IMyQbrM6RBPy7zZrn4xI17O7Hh%2BlcqoEGE%2FfTJRkiueHm9FQ0lgUzL8eR6sDQv4z%2Fj3I%2BYF1lvkPNRQBa%2FhyLqWDXPoLQ0xGnneKz6Wxi6dIbnLwjBm%2BX4j5vf5P20KH7AIgKNzOvTSuv8FXNgNgoqCxZBWYF%2FAFeSUocvYt2UvCzWzjItHktMCidBVPxh58UFx5oG9Ly%2Bfsq4Q6lbhn7YzSuC0GkuW38oIXf2TLmEXTCgpByxkWNSK8qSkvB5ORPYn3MRF3ay4FxX7dRictSuq7HViIz4nWNrVwYinsQ7v0z26088kA0c7NLRBKoGFgWn0ZNFC%2BFrH85wb%2BG2cwzUrw7Bx6bbKJRYx506DwbUR%2FR0XXI0dIs6x2Dl%2Fs%2FyDCln73GBjqkAeKn3YTJHVuMv7jKsqVYj%2Fx%2B3LTzXYr13vw%2FtJbWgsx9jZdNSeFptCW158dTuhyHfL0HzWcIPGTxT3QcNS6t1zVZyOUdMDqM1xTaV%2B1NHJdtgNGBomkEdwddeR379GD8JoDHp3nYS53d%2FB58uQPw7RpBW4XPQEkxMbYjwrIaoOFqSdeozXV6VDV2LC7jAAkOXLga4jkobCtTfpw2%2Bwc5ho4A4uu0&X-Amz-Signature=fa016e8a083759bc15cfa08cf3b7478091ccdea98e986b14a60c69c225aa981f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
