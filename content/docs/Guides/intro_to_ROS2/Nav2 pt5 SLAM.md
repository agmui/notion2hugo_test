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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=e623c45cc1aa9db5cdc772fae252618ce5bc8ec980150d16a922a714ce5358a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=ba2818ffd8ded80f036d88467cdf07b8d2f124193dd3f9f03367d7564002e073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=dfb553a6a930531b70822e1d13d4af22235ef449f58f8c513be863b0cc9c9905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=8f3ad751ee028bbab14f499bdd4bcc19a23a99692f08fa6dee35fc25153a3c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=b977c363d7afd88229a3fd39f9c4e34930cae4e2d391a16ef806eb161aa8f443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=fedf63a37ece49d7d5b7238c0652d54086bf3ad8e6fa816971253b4c6a2c1189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=91fb21a59c9cfdd7c4aab6612e9a4116531b744876d6a44f4f9a7104c950386d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=33cee1b8dd71a47b03baef9bce28a1d1fc817d76f6692263746fccc11d318202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=8860f7fe6ec67b12ef9a198df5165d2f5eb91b7b95686d3c02f771dffff624e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=7b9ba5a4d2a123c81ff4cd0756e8c57486d26935515cf857afe3877fd8c03994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=1d42e945e2a1c9ef722d18911183ed4feebc018551b088cbb78fe20f8dd01d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=003727461d065ccd5bb0d4c5f6a41c5abda9ab856bb06c8055f22ad3cf1947ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=879eecd25696fd3b8f35408f802cd716e3608ea072b4bfae8b0af92a15e8741d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A7OVFFL%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCkAqRzGoTwdETbKfQFpQEAXntdQUxy3qTjhQxRpi2H4gIhAMj%2FUevaxuvda5XB6olZo1%2FmYlp0ZyvPBuPq9tYuBv%2FmKv8DCAIQABoMNjM3NDIzMTgzODA1Igy9KrgE1AccJerMN%2B4q3ANw9oeu%2FzqS08A9bTXKeau9U6oeUe2XYdob1OVY1xb952bxUyNdEJANm3ESONx1dlWg%2FS1LNHodNx%2Fqx8SQ5gXsIYvSuKUECeFX2XlWsZ5U79fp%2B9VwXazp6XmpddLH2aLG2tnO%2B3GAAqz2nvLfhPR1VZmM7qx%2BlP%2B0QNajrLrwSg2MPbOzGhvsQViWAU3YN5cPAFsbttTEssMkIBYzLObFx7zBJUWmZ2IweWS0LBoliJ83jCqTFv12dA2ZWvOHi7xsy86oRUILM8IjAWPiYILCKLlWUM%2FbsI9s5iorHHs%2FceEtwio2OzqstVn5YT6Tf3HmQguwSgZEKoMYmdCjWHEp1CMLNa9rs%2BqHYWLZPtpVw1jKnml5AmLeSv9GCI9k223eReku2ahCBO9juEuolCRJWIOopDw5RURHlqEJ4Jn%2FV1q15c4LUFOxI4dhKsS%2FhXVxFWjRsS4NXLNTZdtEfffK9N3354Qc886dpmyDmriK5UzZOBmDU1j%2FIdIDeVBY2iHDQayI78YQcvgEWDL2hAwodzxEEC74J05nWnwH4JcD8T95ZVeujRQAj49CrkDkMqD3fPHhJWKUoVE2ls8SnkFx0NtfV20kp7E5V%2BtEc2GkoE7Nb6N8oKmdNZ3L1TC9pfPQBjqkAU2Ndibqrc7FF1yhmOXHn3HvUqrigCZFLaHwRqOM7YfJIeLpnpWlg3oAvUbEzNpE9K%2FajTSxingey1dTwe7rYO%2FluZPq2djC0dbueRNrraSdnNt5UrB45NASld369aHKYq5QCEC%2BJU1tukxIROVbjq0gBj0FPQ%2Bnwn1v%2FRI1aSp5nehb4A955kxTDNcx%2BDNpJh9xAsfqexMczlV8oARS0lPtVW%2Fm&X-Amz-Signature=d189c67d6aff5cf70997c1ea43d7e6a6d071e6ceb93747ce33c07e801da22507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
