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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DO4SVA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDd%2BvOQvuwxz0JlgqU%2F1d1NXyuxwP8igTuPs3PA8ZI8wIhAP7vIrbuKAIo8DK%2FXEDerkfc6wG8vKiQTCODVZ5PLt4xKv8DCDQQABoMNjM3NDIzMTgzODA1Igy1et6MkIFQrTBoDaIq3AMPuS06xYzhQm0fr03HA8uZ7MgoFolQHjIXULNGLSojPKI2Gjdg18G9cY58omXy0PPYhKbemYPJRrVyJXew8xOTyKD6iJUziEwvJcVLARaRfr5Qp%2F%2BmUFbtT5V5yaF5%2FEBuMINluAMUA8Pul0KNOpf9RluEKU39B5SQZg5k3EQd4JO0Tbn9aFUl6SeYXimePAqw%2BQqSjgPRYLyk%2BjReMvFS6obuG5mKqCeMEwhrVKdNFFVIhVYZ%2BN3zRb3uB7lG7w2C6o59%2By8SNgy%2FZ6SbvhzefwS9ZXoeadLql7tBn5RhqR5eM0XxzalgrNibvGiiqZQJ4k8QxNhh9Pn9FtNatH6vJUH%2BlGch1wmOvVrfa9YyipD0jE8wj7m51m1%2FA8osVrAlnXdtX1LQylUDW%2BZX8CUb7avoXldNeXjoaSrltfp1UUWaHTNh%2FiwTS9VhLU2NcXL6VKku6lhWhoLaQOxUY1nyinVCYNuApu49FTY02jZ3aD0%2BulOHWKCBGTKpV6bZm8s9elLF3UH4PWH2dFXEnwnW6QnGu8xYNdFHMjUzNqnuULDIzXRcUJIqk9UN4kVx%2FtKCWxR%2BVwvRMPLfkWGl5vc8XvNvxzS3Dl3gQbEQhcmJRJlc9FTi5z10YW3FiTD%2F2b7EBjqkAQ4P6%2Bmodwe8vmndqzWZC5ulglMYn%2FEswViFd8ID0AzulgqXTskndudlYfU9UtOvYHypk5wotirzfphv1xLUPxYRx5rtnXLFKbL1aF%2BTG7rXJ2ZzUYa1yUMy4C0ik4P2xJtJNuRvrS9hktvsi8Z3nUNzweAykSAlvbNFTdfOdTJWQNYB%2FaB%2FqidlxR8i4jNlaTEHIES6e7Xr%2F91H33FI86UeD1a%2B&X-Amz-Signature=9747fa7f1ef73c1da75891433199953d11d6b4417ccb13746750f1de7a7a3d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RX6MIQZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJdPYbtRrV7076pjJ%2BUSIQ7g4JFG3eCZP6xM2Dp5CrwIhAKKPQD5VSQC5sjMmWBaMYQZaZuMFkgNRi9%2B0P9HiQfucKv8DCDQQABoMNjM3NDIzMTgzODA1IgwGLzngtbgQ6u3JFCoq3AOQTXPGQpMrXY4VQJydNaxSQC1rpw5%2FebmuDxq4hhbW5g%2BoGpiTEu68bgU2hvtMX8WI8yTZQz0lBYsn9%2BIV8p9ngq%2BK5XKCpdH%2BUbuPnjIjkH6Alcg30uY9wvuvR1vVfc78TD%2B8N07q6AZKbFOgfOpqBp4rbmQfU0Dl0C%2FhSTejaI%2BAIvItigdkg%2FEA9XSqUOVhdtLGpQsV1ZO3XDvSkU0dSY03VfofVNsNLTFsCbfSBwk2BaZ6z%2BT066hxAisvm68Rsr1mtVLZI%2Bu%2F6xqtbDTfMFFpcCPtjmDnY3x8mx9G9NzxXcdTcf29C0hfyyL%2BJqMAOHKigJKYmF6WdQBPThP7QAbx4SXxaWM%2FXBTleFLWwAn%2BdDr8XT6IdWJKUzmvTe%2F3j69jijAl7hPoIn8wtb8GNQVrnA1FZZko8CKkq3rlyDpVIKn%2FZBuKxVv0lASgXQNQj2igi4DHbEX3ArRhsZBBYShJT16j4XIkQ%2B741ahsYye0UQLf%2Fu%2Fzx6nYdoVfNMZTkfIlV8fnhgzfBH7%2F7sU6q4fJ4buoSNug59GDoH9CpBzcxepqkneSbVhwj82OC%2BZEx63lSgaTtOqeMQ8DtBk4cETm6kpmloxxOzI6YnMCxWy410pyN%2F53lV3BsTC52b7EBjqkAa8ciWMKzaNN74i0sZ8eTbUIr3ES7FUhfUlQiEw6Gl2tBshdBmAwsrxD%2BgarGirxhqKLyw371PNk%2B9ni%2FirYA3NIvG13tjs6PmFMtPgxdg0c77eNbZ8OcE%2FVXpqcop8PrD1TkI68%2Fcr6kI4QvItocWmKhiPBCbxFDXfV%2FNQE3xyttIPiljBQdZIFld2Qtl7dNSVIfUMh1P%2Ft4HEk4GQ8bUdJTj2H&X-Amz-Signature=0971da1a1d27b7c8255a04572ada03bb45ddeaf31191fcd636f9eb9d8cda539f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RX6MIQZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJdPYbtRrV7076pjJ%2BUSIQ7g4JFG3eCZP6xM2Dp5CrwIhAKKPQD5VSQC5sjMmWBaMYQZaZuMFkgNRi9%2B0P9HiQfucKv8DCDQQABoMNjM3NDIzMTgzODA1IgwGLzngtbgQ6u3JFCoq3AOQTXPGQpMrXY4VQJydNaxSQC1rpw5%2FebmuDxq4hhbW5g%2BoGpiTEu68bgU2hvtMX8WI8yTZQz0lBYsn9%2BIV8p9ngq%2BK5XKCpdH%2BUbuPnjIjkH6Alcg30uY9wvuvR1vVfc78TD%2B8N07q6AZKbFOgfOpqBp4rbmQfU0Dl0C%2FhSTejaI%2BAIvItigdkg%2FEA9XSqUOVhdtLGpQsV1ZO3XDvSkU0dSY03VfofVNsNLTFsCbfSBwk2BaZ6z%2BT066hxAisvm68Rsr1mtVLZI%2Bu%2F6xqtbDTfMFFpcCPtjmDnY3x8mx9G9NzxXcdTcf29C0hfyyL%2BJqMAOHKigJKYmF6WdQBPThP7QAbx4SXxaWM%2FXBTleFLWwAn%2BdDr8XT6IdWJKUzmvTe%2F3j69jijAl7hPoIn8wtb8GNQVrnA1FZZko8CKkq3rlyDpVIKn%2FZBuKxVv0lASgXQNQj2igi4DHbEX3ArRhsZBBYShJT16j4XIkQ%2B741ahsYye0UQLf%2Fu%2Fzx6nYdoVfNMZTkfIlV8fnhgzfBH7%2F7sU6q4fJ4buoSNug59GDoH9CpBzcxepqkneSbVhwj82OC%2BZEx63lSgaTtOqeMQ8DtBk4cETm6kpmloxxOzI6YnMCxWy410pyN%2F53lV3BsTC52b7EBjqkAa8ciWMKzaNN74i0sZ8eTbUIr3ES7FUhfUlQiEw6Gl2tBshdBmAwsrxD%2BgarGirxhqKLyw371PNk%2B9ni%2FirYA3NIvG13tjs6PmFMtPgxdg0c77eNbZ8OcE%2FVXpqcop8PrD1TkI68%2Fcr6kI4QvItocWmKhiPBCbxFDXfV%2FNQE3xyttIPiljBQdZIFld2Qtl7dNSVIfUMh1P%2Ft4HEk4GQ8bUdJTj2H&X-Amz-Signature=55003053365c43d8319b0cea3d30f36fbea0d76b2bde7c64e77d122bfa29c93e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RX6MIQZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJdPYbtRrV7076pjJ%2BUSIQ7g4JFG3eCZP6xM2Dp5CrwIhAKKPQD5VSQC5sjMmWBaMYQZaZuMFkgNRi9%2B0P9HiQfucKv8DCDQQABoMNjM3NDIzMTgzODA1IgwGLzngtbgQ6u3JFCoq3AOQTXPGQpMrXY4VQJydNaxSQC1rpw5%2FebmuDxq4hhbW5g%2BoGpiTEu68bgU2hvtMX8WI8yTZQz0lBYsn9%2BIV8p9ngq%2BK5XKCpdH%2BUbuPnjIjkH6Alcg30uY9wvuvR1vVfc78TD%2B8N07q6AZKbFOgfOpqBp4rbmQfU0Dl0C%2FhSTejaI%2BAIvItigdkg%2FEA9XSqUOVhdtLGpQsV1ZO3XDvSkU0dSY03VfofVNsNLTFsCbfSBwk2BaZ6z%2BT066hxAisvm68Rsr1mtVLZI%2Bu%2F6xqtbDTfMFFpcCPtjmDnY3x8mx9G9NzxXcdTcf29C0hfyyL%2BJqMAOHKigJKYmF6WdQBPThP7QAbx4SXxaWM%2FXBTleFLWwAn%2BdDr8XT6IdWJKUzmvTe%2F3j69jijAl7hPoIn8wtb8GNQVrnA1FZZko8CKkq3rlyDpVIKn%2FZBuKxVv0lASgXQNQj2igi4DHbEX3ArRhsZBBYShJT16j4XIkQ%2B741ahsYye0UQLf%2Fu%2Fzx6nYdoVfNMZTkfIlV8fnhgzfBH7%2F7sU6q4fJ4buoSNug59GDoH9CpBzcxepqkneSbVhwj82OC%2BZEx63lSgaTtOqeMQ8DtBk4cETm6kpmloxxOzI6YnMCxWy410pyN%2F53lV3BsTC52b7EBjqkAa8ciWMKzaNN74i0sZ8eTbUIr3ES7FUhfUlQiEw6Gl2tBshdBmAwsrxD%2BgarGirxhqKLyw371PNk%2B9ni%2FirYA3NIvG13tjs6PmFMtPgxdg0c77eNbZ8OcE%2FVXpqcop8PrD1TkI68%2Fcr6kI4QvItocWmKhiPBCbxFDXfV%2FNQE3xyttIPiljBQdZIFld2Qtl7dNSVIfUMh1P%2Ft4HEk4GQ8bUdJTj2H&X-Amz-Signature=03e10501be428ba9060ce3d10ef9fb70d409f65109702d3cc0164631698f8f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RX6MIQZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJdPYbtRrV7076pjJ%2BUSIQ7g4JFG3eCZP6xM2Dp5CrwIhAKKPQD5VSQC5sjMmWBaMYQZaZuMFkgNRi9%2B0P9HiQfucKv8DCDQQABoMNjM3NDIzMTgzODA1IgwGLzngtbgQ6u3JFCoq3AOQTXPGQpMrXY4VQJydNaxSQC1rpw5%2FebmuDxq4hhbW5g%2BoGpiTEu68bgU2hvtMX8WI8yTZQz0lBYsn9%2BIV8p9ngq%2BK5XKCpdH%2BUbuPnjIjkH6Alcg30uY9wvuvR1vVfc78TD%2B8N07q6AZKbFOgfOpqBp4rbmQfU0Dl0C%2FhSTejaI%2BAIvItigdkg%2FEA9XSqUOVhdtLGpQsV1ZO3XDvSkU0dSY03VfofVNsNLTFsCbfSBwk2BaZ6z%2BT066hxAisvm68Rsr1mtVLZI%2Bu%2F6xqtbDTfMFFpcCPtjmDnY3x8mx9G9NzxXcdTcf29C0hfyyL%2BJqMAOHKigJKYmF6WdQBPThP7QAbx4SXxaWM%2FXBTleFLWwAn%2BdDr8XT6IdWJKUzmvTe%2F3j69jijAl7hPoIn8wtb8GNQVrnA1FZZko8CKkq3rlyDpVIKn%2FZBuKxVv0lASgXQNQj2igi4DHbEX3ArRhsZBBYShJT16j4XIkQ%2B741ahsYye0UQLf%2Fu%2Fzx6nYdoVfNMZTkfIlV8fnhgzfBH7%2F7sU6q4fJ4buoSNug59GDoH9CpBzcxepqkneSbVhwj82OC%2BZEx63lSgaTtOqeMQ8DtBk4cETm6kpmloxxOzI6YnMCxWy410pyN%2F53lV3BsTC52b7EBjqkAa8ciWMKzaNN74i0sZ8eTbUIr3ES7FUhfUlQiEw6Gl2tBshdBmAwsrxD%2BgarGirxhqKLyw371PNk%2B9ni%2FirYA3NIvG13tjs6PmFMtPgxdg0c77eNbZ8OcE%2FVXpqcop8PrD1TkI68%2Fcr6kI4QvItocWmKhiPBCbxFDXfV%2FNQE3xyttIPiljBQdZIFld2Qtl7dNSVIfUMh1P%2Ft4HEk4GQ8bUdJTj2H&X-Amz-Signature=3bba7e55517d4671d25f519423a1d030c92dfd624a6d68039bf8efed980f232d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RX6MIQZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJdPYbtRrV7076pjJ%2BUSIQ7g4JFG3eCZP6xM2Dp5CrwIhAKKPQD5VSQC5sjMmWBaMYQZaZuMFkgNRi9%2B0P9HiQfucKv8DCDQQABoMNjM3NDIzMTgzODA1IgwGLzngtbgQ6u3JFCoq3AOQTXPGQpMrXY4VQJydNaxSQC1rpw5%2FebmuDxq4hhbW5g%2BoGpiTEu68bgU2hvtMX8WI8yTZQz0lBYsn9%2BIV8p9ngq%2BK5XKCpdH%2BUbuPnjIjkH6Alcg30uY9wvuvR1vVfc78TD%2B8N07q6AZKbFOgfOpqBp4rbmQfU0Dl0C%2FhSTejaI%2BAIvItigdkg%2FEA9XSqUOVhdtLGpQsV1ZO3XDvSkU0dSY03VfofVNsNLTFsCbfSBwk2BaZ6z%2BT066hxAisvm68Rsr1mtVLZI%2Bu%2F6xqtbDTfMFFpcCPtjmDnY3x8mx9G9NzxXcdTcf29C0hfyyL%2BJqMAOHKigJKYmF6WdQBPThP7QAbx4SXxaWM%2FXBTleFLWwAn%2BdDr8XT6IdWJKUzmvTe%2F3j69jijAl7hPoIn8wtb8GNQVrnA1FZZko8CKkq3rlyDpVIKn%2FZBuKxVv0lASgXQNQj2igi4DHbEX3ArRhsZBBYShJT16j4XIkQ%2B741ahsYye0UQLf%2Fu%2Fzx6nYdoVfNMZTkfIlV8fnhgzfBH7%2F7sU6q4fJ4buoSNug59GDoH9CpBzcxepqkneSbVhwj82OC%2BZEx63lSgaTtOqeMQ8DtBk4cETm6kpmloxxOzI6YnMCxWy410pyN%2F53lV3BsTC52b7EBjqkAa8ciWMKzaNN74i0sZ8eTbUIr3ES7FUhfUlQiEw6Gl2tBshdBmAwsrxD%2BgarGirxhqKLyw371PNk%2B9ni%2FirYA3NIvG13tjs6PmFMtPgxdg0c77eNbZ8OcE%2FVXpqcop8PrD1TkI68%2Fcr6kI4QvItocWmKhiPBCbxFDXfV%2FNQE3xyttIPiljBQdZIFld2Qtl7dNSVIfUMh1P%2Ft4HEk4GQ8bUdJTj2H&X-Amz-Signature=ba2d79c8f0a8e179f8ba1ff498d3b52dedb4615eeb63188f12e462c5d6d13eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RX6MIQZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJdPYbtRrV7076pjJ%2BUSIQ7g4JFG3eCZP6xM2Dp5CrwIhAKKPQD5VSQC5sjMmWBaMYQZaZuMFkgNRi9%2B0P9HiQfucKv8DCDQQABoMNjM3NDIzMTgzODA1IgwGLzngtbgQ6u3JFCoq3AOQTXPGQpMrXY4VQJydNaxSQC1rpw5%2FebmuDxq4hhbW5g%2BoGpiTEu68bgU2hvtMX8WI8yTZQz0lBYsn9%2BIV8p9ngq%2BK5XKCpdH%2BUbuPnjIjkH6Alcg30uY9wvuvR1vVfc78TD%2B8N07q6AZKbFOgfOpqBp4rbmQfU0Dl0C%2FhSTejaI%2BAIvItigdkg%2FEA9XSqUOVhdtLGpQsV1ZO3XDvSkU0dSY03VfofVNsNLTFsCbfSBwk2BaZ6z%2BT066hxAisvm68Rsr1mtVLZI%2Bu%2F6xqtbDTfMFFpcCPtjmDnY3x8mx9G9NzxXcdTcf29C0hfyyL%2BJqMAOHKigJKYmF6WdQBPThP7QAbx4SXxaWM%2FXBTleFLWwAn%2BdDr8XT6IdWJKUzmvTe%2F3j69jijAl7hPoIn8wtb8GNQVrnA1FZZko8CKkq3rlyDpVIKn%2FZBuKxVv0lASgXQNQj2igi4DHbEX3ArRhsZBBYShJT16j4XIkQ%2B741ahsYye0UQLf%2Fu%2Fzx6nYdoVfNMZTkfIlV8fnhgzfBH7%2F7sU6q4fJ4buoSNug59GDoH9CpBzcxepqkneSbVhwj82OC%2BZEx63lSgaTtOqeMQ8DtBk4cETm6kpmloxxOzI6YnMCxWy410pyN%2F53lV3BsTC52b7EBjqkAa8ciWMKzaNN74i0sZ8eTbUIr3ES7FUhfUlQiEw6Gl2tBshdBmAwsrxD%2BgarGirxhqKLyw371PNk%2B9ni%2FirYA3NIvG13tjs6PmFMtPgxdg0c77eNbZ8OcE%2FVXpqcop8PrD1TkI68%2Fcr6kI4QvItocWmKhiPBCbxFDXfV%2FNQE3xyttIPiljBQdZIFld2Qtl7dNSVIfUMh1P%2Ft4HEk4GQ8bUdJTj2H&X-Amz-Signature=67d25fff0e86eeb11910d04bea4d1f60702e8d5e32a2201649d32bee434e1fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RX6MIQZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJdPYbtRrV7076pjJ%2BUSIQ7g4JFG3eCZP6xM2Dp5CrwIhAKKPQD5VSQC5sjMmWBaMYQZaZuMFkgNRi9%2B0P9HiQfucKv8DCDQQABoMNjM3NDIzMTgzODA1IgwGLzngtbgQ6u3JFCoq3AOQTXPGQpMrXY4VQJydNaxSQC1rpw5%2FebmuDxq4hhbW5g%2BoGpiTEu68bgU2hvtMX8WI8yTZQz0lBYsn9%2BIV8p9ngq%2BK5XKCpdH%2BUbuPnjIjkH6Alcg30uY9wvuvR1vVfc78TD%2B8N07q6AZKbFOgfOpqBp4rbmQfU0Dl0C%2FhSTejaI%2BAIvItigdkg%2FEA9XSqUOVhdtLGpQsV1ZO3XDvSkU0dSY03VfofVNsNLTFsCbfSBwk2BaZ6z%2BT066hxAisvm68Rsr1mtVLZI%2Bu%2F6xqtbDTfMFFpcCPtjmDnY3x8mx9G9NzxXcdTcf29C0hfyyL%2BJqMAOHKigJKYmF6WdQBPThP7QAbx4SXxaWM%2FXBTleFLWwAn%2BdDr8XT6IdWJKUzmvTe%2F3j69jijAl7hPoIn8wtb8GNQVrnA1FZZko8CKkq3rlyDpVIKn%2FZBuKxVv0lASgXQNQj2igi4DHbEX3ArRhsZBBYShJT16j4XIkQ%2B741ahsYye0UQLf%2Fu%2Fzx6nYdoVfNMZTkfIlV8fnhgzfBH7%2F7sU6q4fJ4buoSNug59GDoH9CpBzcxepqkneSbVhwj82OC%2BZEx63lSgaTtOqeMQ8DtBk4cETm6kpmloxxOzI6YnMCxWy410pyN%2F53lV3BsTC52b7EBjqkAa8ciWMKzaNN74i0sZ8eTbUIr3ES7FUhfUlQiEw6Gl2tBshdBmAwsrxD%2BgarGirxhqKLyw371PNk%2B9ni%2FirYA3NIvG13tjs6PmFMtPgxdg0c77eNbZ8OcE%2FVXpqcop8PrD1TkI68%2Fcr6kI4QvItocWmKhiPBCbxFDXfV%2FNQE3xyttIPiljBQdZIFld2Qtl7dNSVIfUMh1P%2Ft4HEk4GQ8bUdJTj2H&X-Amz-Signature=d7b53dd9e363ae2dbef907f97d1dbdf44e9067f42417c65a16c1978c5c9482e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RX6MIQZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJdPYbtRrV7076pjJ%2BUSIQ7g4JFG3eCZP6xM2Dp5CrwIhAKKPQD5VSQC5sjMmWBaMYQZaZuMFkgNRi9%2B0P9HiQfucKv8DCDQQABoMNjM3NDIzMTgzODA1IgwGLzngtbgQ6u3JFCoq3AOQTXPGQpMrXY4VQJydNaxSQC1rpw5%2FebmuDxq4hhbW5g%2BoGpiTEu68bgU2hvtMX8WI8yTZQz0lBYsn9%2BIV8p9ngq%2BK5XKCpdH%2BUbuPnjIjkH6Alcg30uY9wvuvR1vVfc78TD%2B8N07q6AZKbFOgfOpqBp4rbmQfU0Dl0C%2FhSTejaI%2BAIvItigdkg%2FEA9XSqUOVhdtLGpQsV1ZO3XDvSkU0dSY03VfofVNsNLTFsCbfSBwk2BaZ6z%2BT066hxAisvm68Rsr1mtVLZI%2Bu%2F6xqtbDTfMFFpcCPtjmDnY3x8mx9G9NzxXcdTcf29C0hfyyL%2BJqMAOHKigJKYmF6WdQBPThP7QAbx4SXxaWM%2FXBTleFLWwAn%2BdDr8XT6IdWJKUzmvTe%2F3j69jijAl7hPoIn8wtb8GNQVrnA1FZZko8CKkq3rlyDpVIKn%2FZBuKxVv0lASgXQNQj2igi4DHbEX3ArRhsZBBYShJT16j4XIkQ%2B741ahsYye0UQLf%2Fu%2Fzx6nYdoVfNMZTkfIlV8fnhgzfBH7%2F7sU6q4fJ4buoSNug59GDoH9CpBzcxepqkneSbVhwj82OC%2BZEx63lSgaTtOqeMQ8DtBk4cETm6kpmloxxOzI6YnMCxWy410pyN%2F53lV3BsTC52b7EBjqkAa8ciWMKzaNN74i0sZ8eTbUIr3ES7FUhfUlQiEw6Gl2tBshdBmAwsrxD%2BgarGirxhqKLyw371PNk%2B9ni%2FirYA3NIvG13tjs6PmFMtPgxdg0c77eNbZ8OcE%2FVXpqcop8PrD1TkI68%2Fcr6kI4QvItocWmKhiPBCbxFDXfV%2FNQE3xyttIPiljBQdZIFld2Qtl7dNSVIfUMh1P%2Ft4HEk4GQ8bUdJTj2H&X-Amz-Signature=6ea69ed0a3a64630d960a0dc6946beaf8166529f4a7bbdf4c581d6e6a58f5fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RX6MIQZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJdPYbtRrV7076pjJ%2BUSIQ7g4JFG3eCZP6xM2Dp5CrwIhAKKPQD5VSQC5sjMmWBaMYQZaZuMFkgNRi9%2B0P9HiQfucKv8DCDQQABoMNjM3NDIzMTgzODA1IgwGLzngtbgQ6u3JFCoq3AOQTXPGQpMrXY4VQJydNaxSQC1rpw5%2FebmuDxq4hhbW5g%2BoGpiTEu68bgU2hvtMX8WI8yTZQz0lBYsn9%2BIV8p9ngq%2BK5XKCpdH%2BUbuPnjIjkH6Alcg30uY9wvuvR1vVfc78TD%2B8N07q6AZKbFOgfOpqBp4rbmQfU0Dl0C%2FhSTejaI%2BAIvItigdkg%2FEA9XSqUOVhdtLGpQsV1ZO3XDvSkU0dSY03VfofVNsNLTFsCbfSBwk2BaZ6z%2BT066hxAisvm68Rsr1mtVLZI%2Bu%2F6xqtbDTfMFFpcCPtjmDnY3x8mx9G9NzxXcdTcf29C0hfyyL%2BJqMAOHKigJKYmF6WdQBPThP7QAbx4SXxaWM%2FXBTleFLWwAn%2BdDr8XT6IdWJKUzmvTe%2F3j69jijAl7hPoIn8wtb8GNQVrnA1FZZko8CKkq3rlyDpVIKn%2FZBuKxVv0lASgXQNQj2igi4DHbEX3ArRhsZBBYShJT16j4XIkQ%2B741ahsYye0UQLf%2Fu%2Fzx6nYdoVfNMZTkfIlV8fnhgzfBH7%2F7sU6q4fJ4buoSNug59GDoH9CpBzcxepqkneSbVhwj82OC%2BZEx63lSgaTtOqeMQ8DtBk4cETm6kpmloxxOzI6YnMCxWy410pyN%2F53lV3BsTC52b7EBjqkAa8ciWMKzaNN74i0sZ8eTbUIr3ES7FUhfUlQiEw6Gl2tBshdBmAwsrxD%2BgarGirxhqKLyw371PNk%2B9ni%2FirYA3NIvG13tjs6PmFMtPgxdg0c77eNbZ8OcE%2FVXpqcop8PrD1TkI68%2Fcr6kI4QvItocWmKhiPBCbxFDXfV%2FNQE3xyttIPiljBQdZIFld2Qtl7dNSVIfUMh1P%2Ft4HEk4GQ8bUdJTj2H&X-Amz-Signature=f7a65989a95c14979631a3ee1d3d7fb4c5c877b6d57faa7bbee38a2b5f0e8a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RX6MIQZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIJdPYbtRrV7076pjJ%2BUSIQ7g4JFG3eCZP6xM2Dp5CrwIhAKKPQD5VSQC5sjMmWBaMYQZaZuMFkgNRi9%2B0P9HiQfucKv8DCDQQABoMNjM3NDIzMTgzODA1IgwGLzngtbgQ6u3JFCoq3AOQTXPGQpMrXY4VQJydNaxSQC1rpw5%2FebmuDxq4hhbW5g%2BoGpiTEu68bgU2hvtMX8WI8yTZQz0lBYsn9%2BIV8p9ngq%2BK5XKCpdH%2BUbuPnjIjkH6Alcg30uY9wvuvR1vVfc78TD%2B8N07q6AZKbFOgfOpqBp4rbmQfU0Dl0C%2FhSTejaI%2BAIvItigdkg%2FEA9XSqUOVhdtLGpQsV1ZO3XDvSkU0dSY03VfofVNsNLTFsCbfSBwk2BaZ6z%2BT066hxAisvm68Rsr1mtVLZI%2Bu%2F6xqtbDTfMFFpcCPtjmDnY3x8mx9G9NzxXcdTcf29C0hfyyL%2BJqMAOHKigJKYmF6WdQBPThP7QAbx4SXxaWM%2FXBTleFLWwAn%2BdDr8XT6IdWJKUzmvTe%2F3j69jijAl7hPoIn8wtb8GNQVrnA1FZZko8CKkq3rlyDpVIKn%2FZBuKxVv0lASgXQNQj2igi4DHbEX3ArRhsZBBYShJT16j4XIkQ%2B741ahsYye0UQLf%2Fu%2Fzx6nYdoVfNMZTkfIlV8fnhgzfBH7%2F7sU6q4fJ4buoSNug59GDoH9CpBzcxepqkneSbVhwj82OC%2BZEx63lSgaTtOqeMQ8DtBk4cETm6kpmloxxOzI6YnMCxWy410pyN%2F53lV3BsTC52b7EBjqkAa8ciWMKzaNN74i0sZ8eTbUIr3ES7FUhfUlQiEw6Gl2tBshdBmAwsrxD%2BgarGirxhqKLyw371PNk%2B9ni%2FirYA3NIvG13tjs6PmFMtPgxdg0c77eNbZ8OcE%2FVXpqcop8PrD1TkI68%2Fcr6kI4QvItocWmKhiPBCbxFDXfV%2FNQE3xyttIPiljBQdZIFld2Qtl7dNSVIfUMh1P%2Ft4HEk4GQ8bUdJTj2H&X-Amz-Signature=3bba7e55517d4671d25f519423a1d030c92dfd624a6d68039bf8efed980f232d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
