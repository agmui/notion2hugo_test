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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJFDO44V%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQD0pokyARQU31930dKlCLPPHtO0acUIjyPR6dIwambsqwIfCu8%2FXsQxWizrhN1RUbQSQeILEFFHdMnd9gb981wQnir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM3kbopJy5VfcYls0uKtwDRN8%2FZfsGjkrveYlR4CMriHzQDM32dY46S7Ye3rQBUMd5sejiZB5bMwWWBI71zyXbMg8Ppk%2Fknjix%2Bax6%2Fuugqml8q%2FU%2FcqgVuG3O7oDvtPoohdFR75QEkjBDmx9I0oZR0QeeKeqDwfuS%2F1KDWWWCzKoGMNEe9NuQQTpMeYfTxfdVg2fm9NuA2ks6YgnhValSNG7AsqOFkdRhasMGUsR0of%2FIQ1J2p9doDGWyOB0mXOIlgdAsAzRbxfCRHuMf6fURRIto6N0vUFU14ozmPfZFWzr8rfQ7f13J0qZmXCuF6zTfVFLBxutltsWqWAcAmAHaEYgu%2BDAHGt6Lpnu0PjRIbm41%2FI3lLmOvxSjBBI303HjRuOYhJL1j%2FK1VH8giCGVdu3L%2Bcsycjug5DQ%2F8EIPwr4uCuLSH4uT%2BrR5fCaH80J8%2BKE4RRkShdhceGb4T7jDN3YPgDQCWXXv%2BArNmVnJNr930Bzp0ZDz9XL1G5ny3CLMXEcK1tcPXZ3E17ZlRjDn9OSUayk83Nmx9njpoBAps28tvgjZebUjvliADvMFQtGTpVFLYhJm%2BjKoRaLWnug9n8sKXeFgjWPxZNdFlXl7bHZHZpOy3sI1lgsm85d66FhntSBcZl1seW%2FNdHtkwvtGNxgY6pgGk7SB%2Bh6C1ac2m8qi6X8%2BiM1oUb3FFqjrdTWD8Ggk7Mr1VHBWsTw07RV0SdYRxwUHK44o4yK%2FerzlSFkRwzFEkUYRXmUfZQMA296BCo67QNX8pAs67xvsZCGsZNxxheAdXkgS4X%2B4J753mFC9oHdDZUkdhun1JXw96VFmPTEnZosy9LKgznlMRBJGN6K3Fa5%2B9gLPFa45nXmYXwHTZslgge5bhEq2I&X-Amz-Signature=cc4887b023f6da63a57695a771b3ccdf809d43abb46308a7a41a3f51b8c29669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46INDLJ%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgPVIxunHteIDXs4QRpemYstB5le6aFqcLXX%2F1J1NikAiEAlWHEbyzkaEW6fk8Omz4jsDBEGtT%2B48LMusBnFtT5%2B1Aq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLDT%2BS2vvpQtxqjbWCrcA4EBLu%2FNnb6l8gTFn9lfTPz291MCrc%2FZ0TsnGWkQboo2QyEZN5Qc9D%2B%2Bz72MJHt3c27CR6dpxWWojmzjm89YVZHPi5ToQCybaki7Em9OavjPlB3pCkCNT8b0LdSrMxzMLv4dV2iL%2BNzrbAlkQ7I85Qu7ajnkVes0YlspAHXhSWce18rwxuhFhYg24fFPw85yvsXD6z8w%2Fj%2FuEyvAqNTCt9lbH78lMdSEy4uACSWJUw59Vdg4nvWwow4kW8HXaystgpmd7LMcidbmihjcDeuuloJP4%2BxaRG72N9jhkP78bTTgtXFgE0De3WRJsmCkKpFjoAAKqNYfSv3HXNuPtUhN%2BmcZD2YXwuw1%2FPh7B8wt6dtn90H0iMfXmMGyL2boeJxtdXhWhcaAtbEbTOQjL9%2BAzONvV9CrSmL3CDPU4xyIxI%2BCPdF4wvV1AsrYN7l7DkM53q7nt8KRyA9S90aHPfWcJOaleWILLtEDJj9TLUhSjtJH8jRO9pLtpTA%2FVKwiYA02zMho26RbD7T4cleUprjys0NZtNYV3T4GlfcXJv7rSk3m1JXRI64Z%2BoX3rOyG2wJFRODENSB1FXhGQiwUpk%2FFcY3CEqwhNxQyYoYfWhx49j1foQ2bIpSlI3MaH4j1MKLRjcYGOqUBe6A7dl8zPgXs36gcljEscMTAKd%2Bt7K03Ce9%2FaWq7iMe5FLVFErtU6kA14PrD3qm2fdDyOlPfrzFQKt7JE64iL3Lkww5XtmDDBNaVOiLXNhIXtVC0U7tXBSSsGNIUKVUUCE15cMUYODviS%2FI%2FmA%2BYpFbc6EFwh4APlvqRKwPAOGsRHL6UU0JM2L95qYRCtQKsYtI2qjQCv7jkGvcZxDlJVUXOGKzR&X-Amz-Signature=3c1d789c43a0d1a3bab17c8c0df40a68cc99b244411a61d4a1025c23ee0b4312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46INDLJ%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgPVIxunHteIDXs4QRpemYstB5le6aFqcLXX%2F1J1NikAiEAlWHEbyzkaEW6fk8Omz4jsDBEGtT%2B48LMusBnFtT5%2B1Aq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLDT%2BS2vvpQtxqjbWCrcA4EBLu%2FNnb6l8gTFn9lfTPz291MCrc%2FZ0TsnGWkQboo2QyEZN5Qc9D%2B%2Bz72MJHt3c27CR6dpxWWojmzjm89YVZHPi5ToQCybaki7Em9OavjPlB3pCkCNT8b0LdSrMxzMLv4dV2iL%2BNzrbAlkQ7I85Qu7ajnkVes0YlspAHXhSWce18rwxuhFhYg24fFPw85yvsXD6z8w%2Fj%2FuEyvAqNTCt9lbH78lMdSEy4uACSWJUw59Vdg4nvWwow4kW8HXaystgpmd7LMcidbmihjcDeuuloJP4%2BxaRG72N9jhkP78bTTgtXFgE0De3WRJsmCkKpFjoAAKqNYfSv3HXNuPtUhN%2BmcZD2YXwuw1%2FPh7B8wt6dtn90H0iMfXmMGyL2boeJxtdXhWhcaAtbEbTOQjL9%2BAzONvV9CrSmL3CDPU4xyIxI%2BCPdF4wvV1AsrYN7l7DkM53q7nt8KRyA9S90aHPfWcJOaleWILLtEDJj9TLUhSjtJH8jRO9pLtpTA%2FVKwiYA02zMho26RbD7T4cleUprjys0NZtNYV3T4GlfcXJv7rSk3m1JXRI64Z%2BoX3rOyG2wJFRODENSB1FXhGQiwUpk%2FFcY3CEqwhNxQyYoYfWhx49j1foQ2bIpSlI3MaH4j1MKLRjcYGOqUBe6A7dl8zPgXs36gcljEscMTAKd%2Bt7K03Ce9%2FaWq7iMe5FLVFErtU6kA14PrD3qm2fdDyOlPfrzFQKt7JE64iL3Lkww5XtmDDBNaVOiLXNhIXtVC0U7tXBSSsGNIUKVUUCE15cMUYODviS%2FI%2FmA%2BYpFbc6EFwh4APlvqRKwPAOGsRHL6UU0JM2L95qYRCtQKsYtI2qjQCv7jkGvcZxDlJVUXOGKzR&X-Amz-Signature=ba180df62060472f56d29bc8e41f38faf08d73b1513d0cd36125afcd840453fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46INDLJ%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgPVIxunHteIDXs4QRpemYstB5le6aFqcLXX%2F1J1NikAiEAlWHEbyzkaEW6fk8Omz4jsDBEGtT%2B48LMusBnFtT5%2B1Aq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLDT%2BS2vvpQtxqjbWCrcA4EBLu%2FNnb6l8gTFn9lfTPz291MCrc%2FZ0TsnGWkQboo2QyEZN5Qc9D%2B%2Bz72MJHt3c27CR6dpxWWojmzjm89YVZHPi5ToQCybaki7Em9OavjPlB3pCkCNT8b0LdSrMxzMLv4dV2iL%2BNzrbAlkQ7I85Qu7ajnkVes0YlspAHXhSWce18rwxuhFhYg24fFPw85yvsXD6z8w%2Fj%2FuEyvAqNTCt9lbH78lMdSEy4uACSWJUw59Vdg4nvWwow4kW8HXaystgpmd7LMcidbmihjcDeuuloJP4%2BxaRG72N9jhkP78bTTgtXFgE0De3WRJsmCkKpFjoAAKqNYfSv3HXNuPtUhN%2BmcZD2YXwuw1%2FPh7B8wt6dtn90H0iMfXmMGyL2boeJxtdXhWhcaAtbEbTOQjL9%2BAzONvV9CrSmL3CDPU4xyIxI%2BCPdF4wvV1AsrYN7l7DkM53q7nt8KRyA9S90aHPfWcJOaleWILLtEDJj9TLUhSjtJH8jRO9pLtpTA%2FVKwiYA02zMho26RbD7T4cleUprjys0NZtNYV3T4GlfcXJv7rSk3m1JXRI64Z%2BoX3rOyG2wJFRODENSB1FXhGQiwUpk%2FFcY3CEqwhNxQyYoYfWhx49j1foQ2bIpSlI3MaH4j1MKLRjcYGOqUBe6A7dl8zPgXs36gcljEscMTAKd%2Bt7K03Ce9%2FaWq7iMe5FLVFErtU6kA14PrD3qm2fdDyOlPfrzFQKt7JE64iL3Lkww5XtmDDBNaVOiLXNhIXtVC0U7tXBSSsGNIUKVUUCE15cMUYODviS%2FI%2FmA%2BYpFbc6EFwh4APlvqRKwPAOGsRHL6UU0JM2L95qYRCtQKsYtI2qjQCv7jkGvcZxDlJVUXOGKzR&X-Amz-Signature=941b1c63926a781407e3fa4188f28fc57c3d5b54dbfdc2d88abc8f926686a1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46INDLJ%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgPVIxunHteIDXs4QRpemYstB5le6aFqcLXX%2F1J1NikAiEAlWHEbyzkaEW6fk8Omz4jsDBEGtT%2B48LMusBnFtT5%2B1Aq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLDT%2BS2vvpQtxqjbWCrcA4EBLu%2FNnb6l8gTFn9lfTPz291MCrc%2FZ0TsnGWkQboo2QyEZN5Qc9D%2B%2Bz72MJHt3c27CR6dpxWWojmzjm89YVZHPi5ToQCybaki7Em9OavjPlB3pCkCNT8b0LdSrMxzMLv4dV2iL%2BNzrbAlkQ7I85Qu7ajnkVes0YlspAHXhSWce18rwxuhFhYg24fFPw85yvsXD6z8w%2Fj%2FuEyvAqNTCt9lbH78lMdSEy4uACSWJUw59Vdg4nvWwow4kW8HXaystgpmd7LMcidbmihjcDeuuloJP4%2BxaRG72N9jhkP78bTTgtXFgE0De3WRJsmCkKpFjoAAKqNYfSv3HXNuPtUhN%2BmcZD2YXwuw1%2FPh7B8wt6dtn90H0iMfXmMGyL2boeJxtdXhWhcaAtbEbTOQjL9%2BAzONvV9CrSmL3CDPU4xyIxI%2BCPdF4wvV1AsrYN7l7DkM53q7nt8KRyA9S90aHPfWcJOaleWILLtEDJj9TLUhSjtJH8jRO9pLtpTA%2FVKwiYA02zMho26RbD7T4cleUprjys0NZtNYV3T4GlfcXJv7rSk3m1JXRI64Z%2BoX3rOyG2wJFRODENSB1FXhGQiwUpk%2FFcY3CEqwhNxQyYoYfWhx49j1foQ2bIpSlI3MaH4j1MKLRjcYGOqUBe6A7dl8zPgXs36gcljEscMTAKd%2Bt7K03Ce9%2FaWq7iMe5FLVFErtU6kA14PrD3qm2fdDyOlPfrzFQKt7JE64iL3Lkww5XtmDDBNaVOiLXNhIXtVC0U7tXBSSsGNIUKVUUCE15cMUYODviS%2FI%2FmA%2BYpFbc6EFwh4APlvqRKwPAOGsRHL6UU0JM2L95qYRCtQKsYtI2qjQCv7jkGvcZxDlJVUXOGKzR&X-Amz-Signature=4219a8311094e6abe1523f59f33e2a494410330f8eee5cc478c138a030bb9a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46INDLJ%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgPVIxunHteIDXs4QRpemYstB5le6aFqcLXX%2F1J1NikAiEAlWHEbyzkaEW6fk8Omz4jsDBEGtT%2B48LMusBnFtT5%2B1Aq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLDT%2BS2vvpQtxqjbWCrcA4EBLu%2FNnb6l8gTFn9lfTPz291MCrc%2FZ0TsnGWkQboo2QyEZN5Qc9D%2B%2Bz72MJHt3c27CR6dpxWWojmzjm89YVZHPi5ToQCybaki7Em9OavjPlB3pCkCNT8b0LdSrMxzMLv4dV2iL%2BNzrbAlkQ7I85Qu7ajnkVes0YlspAHXhSWce18rwxuhFhYg24fFPw85yvsXD6z8w%2Fj%2FuEyvAqNTCt9lbH78lMdSEy4uACSWJUw59Vdg4nvWwow4kW8HXaystgpmd7LMcidbmihjcDeuuloJP4%2BxaRG72N9jhkP78bTTgtXFgE0De3WRJsmCkKpFjoAAKqNYfSv3HXNuPtUhN%2BmcZD2YXwuw1%2FPh7B8wt6dtn90H0iMfXmMGyL2boeJxtdXhWhcaAtbEbTOQjL9%2BAzONvV9CrSmL3CDPU4xyIxI%2BCPdF4wvV1AsrYN7l7DkM53q7nt8KRyA9S90aHPfWcJOaleWILLtEDJj9TLUhSjtJH8jRO9pLtpTA%2FVKwiYA02zMho26RbD7T4cleUprjys0NZtNYV3T4GlfcXJv7rSk3m1JXRI64Z%2BoX3rOyG2wJFRODENSB1FXhGQiwUpk%2FFcY3CEqwhNxQyYoYfWhx49j1foQ2bIpSlI3MaH4j1MKLRjcYGOqUBe6A7dl8zPgXs36gcljEscMTAKd%2Bt7K03Ce9%2FaWq7iMe5FLVFErtU6kA14PrD3qm2fdDyOlPfrzFQKt7JE64iL3Lkww5XtmDDBNaVOiLXNhIXtVC0U7tXBSSsGNIUKVUUCE15cMUYODviS%2FI%2FmA%2BYpFbc6EFwh4APlvqRKwPAOGsRHL6UU0JM2L95qYRCtQKsYtI2qjQCv7jkGvcZxDlJVUXOGKzR&X-Amz-Signature=a7a909307eef138b3b116cb050bc4f4eab493a2c163d1389bf760286ad051f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46INDLJ%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgPVIxunHteIDXs4QRpemYstB5le6aFqcLXX%2F1J1NikAiEAlWHEbyzkaEW6fk8Omz4jsDBEGtT%2B48LMusBnFtT5%2B1Aq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLDT%2BS2vvpQtxqjbWCrcA4EBLu%2FNnb6l8gTFn9lfTPz291MCrc%2FZ0TsnGWkQboo2QyEZN5Qc9D%2B%2Bz72MJHt3c27CR6dpxWWojmzjm89YVZHPi5ToQCybaki7Em9OavjPlB3pCkCNT8b0LdSrMxzMLv4dV2iL%2BNzrbAlkQ7I85Qu7ajnkVes0YlspAHXhSWce18rwxuhFhYg24fFPw85yvsXD6z8w%2Fj%2FuEyvAqNTCt9lbH78lMdSEy4uACSWJUw59Vdg4nvWwow4kW8HXaystgpmd7LMcidbmihjcDeuuloJP4%2BxaRG72N9jhkP78bTTgtXFgE0De3WRJsmCkKpFjoAAKqNYfSv3HXNuPtUhN%2BmcZD2YXwuw1%2FPh7B8wt6dtn90H0iMfXmMGyL2boeJxtdXhWhcaAtbEbTOQjL9%2BAzONvV9CrSmL3CDPU4xyIxI%2BCPdF4wvV1AsrYN7l7DkM53q7nt8KRyA9S90aHPfWcJOaleWILLtEDJj9TLUhSjtJH8jRO9pLtpTA%2FVKwiYA02zMho26RbD7T4cleUprjys0NZtNYV3T4GlfcXJv7rSk3m1JXRI64Z%2BoX3rOyG2wJFRODENSB1FXhGQiwUpk%2FFcY3CEqwhNxQyYoYfWhx49j1foQ2bIpSlI3MaH4j1MKLRjcYGOqUBe6A7dl8zPgXs36gcljEscMTAKd%2Bt7K03Ce9%2FaWq7iMe5FLVFErtU6kA14PrD3qm2fdDyOlPfrzFQKt7JE64iL3Lkww5XtmDDBNaVOiLXNhIXtVC0U7tXBSSsGNIUKVUUCE15cMUYODviS%2FI%2FmA%2BYpFbc6EFwh4APlvqRKwPAOGsRHL6UU0JM2L95qYRCtQKsYtI2qjQCv7jkGvcZxDlJVUXOGKzR&X-Amz-Signature=72f2fb28e9c807d68788895dfe6fdedc80d02e5c548eb8ef44f090e67adb036c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46INDLJ%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgPVIxunHteIDXs4QRpemYstB5le6aFqcLXX%2F1J1NikAiEAlWHEbyzkaEW6fk8Omz4jsDBEGtT%2B48LMusBnFtT5%2B1Aq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLDT%2BS2vvpQtxqjbWCrcA4EBLu%2FNnb6l8gTFn9lfTPz291MCrc%2FZ0TsnGWkQboo2QyEZN5Qc9D%2B%2Bz72MJHt3c27CR6dpxWWojmzjm89YVZHPi5ToQCybaki7Em9OavjPlB3pCkCNT8b0LdSrMxzMLv4dV2iL%2BNzrbAlkQ7I85Qu7ajnkVes0YlspAHXhSWce18rwxuhFhYg24fFPw85yvsXD6z8w%2Fj%2FuEyvAqNTCt9lbH78lMdSEy4uACSWJUw59Vdg4nvWwow4kW8HXaystgpmd7LMcidbmihjcDeuuloJP4%2BxaRG72N9jhkP78bTTgtXFgE0De3WRJsmCkKpFjoAAKqNYfSv3HXNuPtUhN%2BmcZD2YXwuw1%2FPh7B8wt6dtn90H0iMfXmMGyL2boeJxtdXhWhcaAtbEbTOQjL9%2BAzONvV9CrSmL3CDPU4xyIxI%2BCPdF4wvV1AsrYN7l7DkM53q7nt8KRyA9S90aHPfWcJOaleWILLtEDJj9TLUhSjtJH8jRO9pLtpTA%2FVKwiYA02zMho26RbD7T4cleUprjys0NZtNYV3T4GlfcXJv7rSk3m1JXRI64Z%2BoX3rOyG2wJFRODENSB1FXhGQiwUpk%2FFcY3CEqwhNxQyYoYfWhx49j1foQ2bIpSlI3MaH4j1MKLRjcYGOqUBe6A7dl8zPgXs36gcljEscMTAKd%2Bt7K03Ce9%2FaWq7iMe5FLVFErtU6kA14PrD3qm2fdDyOlPfrzFQKt7JE64iL3Lkww5XtmDDBNaVOiLXNhIXtVC0U7tXBSSsGNIUKVUUCE15cMUYODviS%2FI%2FmA%2BYpFbc6EFwh4APlvqRKwPAOGsRHL6UU0JM2L95qYRCtQKsYtI2qjQCv7jkGvcZxDlJVUXOGKzR&X-Amz-Signature=172b638a4af90904bbebc757ef55e1285c6aa76a8549253d501c833ab8511658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46INDLJ%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgPVIxunHteIDXs4QRpemYstB5le6aFqcLXX%2F1J1NikAiEAlWHEbyzkaEW6fk8Omz4jsDBEGtT%2B48LMusBnFtT5%2B1Aq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLDT%2BS2vvpQtxqjbWCrcA4EBLu%2FNnb6l8gTFn9lfTPz291MCrc%2FZ0TsnGWkQboo2QyEZN5Qc9D%2B%2Bz72MJHt3c27CR6dpxWWojmzjm89YVZHPi5ToQCybaki7Em9OavjPlB3pCkCNT8b0LdSrMxzMLv4dV2iL%2BNzrbAlkQ7I85Qu7ajnkVes0YlspAHXhSWce18rwxuhFhYg24fFPw85yvsXD6z8w%2Fj%2FuEyvAqNTCt9lbH78lMdSEy4uACSWJUw59Vdg4nvWwow4kW8HXaystgpmd7LMcidbmihjcDeuuloJP4%2BxaRG72N9jhkP78bTTgtXFgE0De3WRJsmCkKpFjoAAKqNYfSv3HXNuPtUhN%2BmcZD2YXwuw1%2FPh7B8wt6dtn90H0iMfXmMGyL2boeJxtdXhWhcaAtbEbTOQjL9%2BAzONvV9CrSmL3CDPU4xyIxI%2BCPdF4wvV1AsrYN7l7DkM53q7nt8KRyA9S90aHPfWcJOaleWILLtEDJj9TLUhSjtJH8jRO9pLtpTA%2FVKwiYA02zMho26RbD7T4cleUprjys0NZtNYV3T4GlfcXJv7rSk3m1JXRI64Z%2BoX3rOyG2wJFRODENSB1FXhGQiwUpk%2FFcY3CEqwhNxQyYoYfWhx49j1foQ2bIpSlI3MaH4j1MKLRjcYGOqUBe6A7dl8zPgXs36gcljEscMTAKd%2Bt7K03Ce9%2FaWq7iMe5FLVFErtU6kA14PrD3qm2fdDyOlPfrzFQKt7JE64iL3Lkww5XtmDDBNaVOiLXNhIXtVC0U7tXBSSsGNIUKVUUCE15cMUYODviS%2FI%2FmA%2BYpFbc6EFwh4APlvqRKwPAOGsRHL6UU0JM2L95qYRCtQKsYtI2qjQCv7jkGvcZxDlJVUXOGKzR&X-Amz-Signature=9c5396303078dd804e7e1f98a7f5cab08b6fa3fe64070c33103c16bd8009a60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46INDLJ%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgPVIxunHteIDXs4QRpemYstB5le6aFqcLXX%2F1J1NikAiEAlWHEbyzkaEW6fk8Omz4jsDBEGtT%2B48LMusBnFtT5%2B1Aq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLDT%2BS2vvpQtxqjbWCrcA4EBLu%2FNnb6l8gTFn9lfTPz291MCrc%2FZ0TsnGWkQboo2QyEZN5Qc9D%2B%2Bz72MJHt3c27CR6dpxWWojmzjm89YVZHPi5ToQCybaki7Em9OavjPlB3pCkCNT8b0LdSrMxzMLv4dV2iL%2BNzrbAlkQ7I85Qu7ajnkVes0YlspAHXhSWce18rwxuhFhYg24fFPw85yvsXD6z8w%2Fj%2FuEyvAqNTCt9lbH78lMdSEy4uACSWJUw59Vdg4nvWwow4kW8HXaystgpmd7LMcidbmihjcDeuuloJP4%2BxaRG72N9jhkP78bTTgtXFgE0De3WRJsmCkKpFjoAAKqNYfSv3HXNuPtUhN%2BmcZD2YXwuw1%2FPh7B8wt6dtn90H0iMfXmMGyL2boeJxtdXhWhcaAtbEbTOQjL9%2BAzONvV9CrSmL3CDPU4xyIxI%2BCPdF4wvV1AsrYN7l7DkM53q7nt8KRyA9S90aHPfWcJOaleWILLtEDJj9TLUhSjtJH8jRO9pLtpTA%2FVKwiYA02zMho26RbD7T4cleUprjys0NZtNYV3T4GlfcXJv7rSk3m1JXRI64Z%2BoX3rOyG2wJFRODENSB1FXhGQiwUpk%2FFcY3CEqwhNxQyYoYfWhx49j1foQ2bIpSlI3MaH4j1MKLRjcYGOqUBe6A7dl8zPgXs36gcljEscMTAKd%2Bt7K03Ce9%2FaWq7iMe5FLVFErtU6kA14PrD3qm2fdDyOlPfrzFQKt7JE64iL3Lkww5XtmDDBNaVOiLXNhIXtVC0U7tXBSSsGNIUKVUUCE15cMUYODviS%2FI%2FmA%2BYpFbc6EFwh4APlvqRKwPAOGsRHL6UU0JM2L95qYRCtQKsYtI2qjQCv7jkGvcZxDlJVUXOGKzR&X-Amz-Signature=abda8b0d9dead3c1d8f822a0a9e11d9cadbeb5cc0c347ffbaa9db75210a795b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46INDLJ%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgPVIxunHteIDXs4QRpemYstB5le6aFqcLXX%2F1J1NikAiEAlWHEbyzkaEW6fk8Omz4jsDBEGtT%2B48LMusBnFtT5%2B1Aq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLDT%2BS2vvpQtxqjbWCrcA4EBLu%2FNnb6l8gTFn9lfTPz291MCrc%2FZ0TsnGWkQboo2QyEZN5Qc9D%2B%2Bz72MJHt3c27CR6dpxWWojmzjm89YVZHPi5ToQCybaki7Em9OavjPlB3pCkCNT8b0LdSrMxzMLv4dV2iL%2BNzrbAlkQ7I85Qu7ajnkVes0YlspAHXhSWce18rwxuhFhYg24fFPw85yvsXD6z8w%2Fj%2FuEyvAqNTCt9lbH78lMdSEy4uACSWJUw59Vdg4nvWwow4kW8HXaystgpmd7LMcidbmihjcDeuuloJP4%2BxaRG72N9jhkP78bTTgtXFgE0De3WRJsmCkKpFjoAAKqNYfSv3HXNuPtUhN%2BmcZD2YXwuw1%2FPh7B8wt6dtn90H0iMfXmMGyL2boeJxtdXhWhcaAtbEbTOQjL9%2BAzONvV9CrSmL3CDPU4xyIxI%2BCPdF4wvV1AsrYN7l7DkM53q7nt8KRyA9S90aHPfWcJOaleWILLtEDJj9TLUhSjtJH8jRO9pLtpTA%2FVKwiYA02zMho26RbD7T4cleUprjys0NZtNYV3T4GlfcXJv7rSk3m1JXRI64Z%2BoX3rOyG2wJFRODENSB1FXhGQiwUpk%2FFcY3CEqwhNxQyYoYfWhx49j1foQ2bIpSlI3MaH4j1MKLRjcYGOqUBe6A7dl8zPgXs36gcljEscMTAKd%2Bt7K03Ce9%2FaWq7iMe5FLVFErtU6kA14PrD3qm2fdDyOlPfrzFQKt7JE64iL3Lkww5XtmDDBNaVOiLXNhIXtVC0U7tXBSSsGNIUKVUUCE15cMUYODviS%2FI%2FmA%2BYpFbc6EFwh4APlvqRKwPAOGsRHL6UU0JM2L95qYRCtQKsYtI2qjQCv7jkGvcZxDlJVUXOGKzR&X-Amz-Signature=4219a8311094e6abe1523f59f33e2a494410330f8eee5cc478c138a030bb9a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
