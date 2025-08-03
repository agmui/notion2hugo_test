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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=c6ee0f354c18c59127204ce65b1149d4ab88b876559501c4f904a1a722e995fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=27230affc04156e328b3231b0deb98969f5eca9a310b57e9d980e71623abb9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=5e8faf8114f700231cdf81f0497d3805433db65e4186124526832d2c5ce25be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=43feb66ad9215ee1fe41a474e6b06c786b940e5560686d2805050ae491911d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=20345d08b6e58938d70236ca71bb0e01de236817f96283768001441b03e2ba0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=0948cf76c3c51a41ee863a3af932ced6beac9571d3303c4224878b0eccef75e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=a9999c72ba545c7b3bcff61b252b16542201c583e2e7fe0ba93c5ac9c9c7e6dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=370eb9cb41bb17697d55c1e981c4f081cd029aa518f1650b065f64e3503cecf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=ad28fa9d2045dab3be8c643f83b20515791430316e08a31de727939b15ca9705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=022414bb17ede7f8cd4682778ed99190bf43cbe647e749bbd26a1c2eb8acac92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=071beb40206482fae3cda70c274707a9746f6da6ad64ae51c7e9d7ef3586a471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=5b7f71d2c6b91aa3bd811cbe1b528f9e40ec7e18189fd97bfcfea33728191959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=9e71ed8da93f447fc167d1a742436c67c514ca6bf39faa52e44e446015b6c8de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=3187d653c0ba84f4864906ce7c60b07de06ccc9803aa3571ad2ee853910b056f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
