---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=a96f98b532d094d58ff3fd833752456ece5454cfde5820117e40b0a41e9bf915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=f53094e83d75483a51ed4c1570b2755b2e66707769a387bcf9fc34436e37eee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=9d9613f5c6afdd225628b3940581790f32029809727d8bfe972814fb007c50c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=4836c59aaaa7517a91787350618cb750f793edd0ddf4f7791bff8caded7e98ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=b28a60e0863207c0737c90b28bbff7344ab62d209ec1fcb0925b98d89687cd15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=c0c5ab8562575422fe4710c77b17103b64ec3772952939ab9572ff0b97190391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=0eb185c969a828aa8b77e92ae2857e2f23fce0989741750662afd2ebfb3141b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

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
        
        lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=12d2a18d701c8adba6e90722f3966d0a0227cc2ebea95fba7da6ea1ec880ef71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=e25b10c1bf31f1dafe3dafa27392e0961606467c4b038acdd4a7fa799fac0669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
        }.items()
    )
    
    
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=60f9601d37e814314ee2b7059996006415859b79bdd2414f4a8d53bae91e32c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=3714ad9a97ec6db84bbb9280936b415b56eab9b4373ca03592381a94770ca1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=fcbbcfaba69baf2584d2c3e325139d1d1ce9ad6adac1dd022b4e222aeb141376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=b62718e4d39014db47a128eb3e39cc4f4c43cf421a4ff9057c14d2a59a5a52be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637E7JHJ7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCWOdsnSxGUepw0BeL12Oa8ZwLQ%2B9PWCkje7e7BpbsQXQIhAOsIylPK4clf%2BTgsPqbJaFhrXvZM96rDG9YyAzkmzNEMKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBKu5CKGjn%2BYDDpbQq3AO%2FTtKidbvKiOzczOGJ9rBthC%2Bjj2Q%2Fm6J4leaBZUlFJUCdAK25PK5C9niiCyc1boF1Xpw13DrmD0pZzM8AnmGWdCkFgELSJNqRztID9bRdKWuxnJACBBxlX86LtL0AFMIABDxyHwONntssfDAuxz6kSB1iHR0tpBociTitutnsz%2BTZQZ9nG1g8Y%2FX0GHcWcKC3TUzu%2FCCAC9McWSBNZjMzEWvHXRWhI84v2T3MFZTFeN94ph3IClnEZvXJOkpeb0SJATOLPeofG6sMEWnFyxg4BT%2BKyX35AwQ%2Bq4hcDziobRbyOGktiA1Ye2WP9jFJlep0d1g06VWUXF8FYFgr04mozdv3gRHreN%2FVEXAUvFLgaGS79XmG5RpJD1MqJdpvDhjS1%2F6ALTBN75TvoMA5A3hyo4WN38gekr9erEDPWL9QkrRqX4uep8Lwldij9OlMSRS7B6UFMBaydITWcYa9KyvxklSTVjIafPm4Fx2aztADpoCvTsrasT%2Bq6gWZ9wW7cjV6s2mKZEsxrRLzqUwYr0eyCidxQfgFl94MdAgw6u43p9BMatULdmOTra4d6KQ8AGcCCvBoKqkXAZW4Kl2zUOlPklOfT%2BMgIt7BBHmQB5abC6j0EG8oG5n%2F4AqsOzDSktfEBjqkAbOK3yMJ1FNha9iVLQV5iEoFI%2Fjpt8bBwv5br4rRFUt8gAY0I0Sduron6ulW28PSDAqjTmvLfe70KKUm9anOU0le6AkOLYeiYox2kYJ29EkH%2F0ixHVZLPZ2thFJPEaZOEFwGlzn19m%2B4hxJqdrU6mKE1Kjy3vKCaQelC4j%2FJjnLnAoNa%2BY5K5Kxl%2BU909K9zjf%2B8d%2BDav8aI1ZJGrwDNcajaUVWb&X-Amz-Signature=0f00fa78a445280553cd217c114c58d8d482b90e85374d3577246e5fa466a834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
