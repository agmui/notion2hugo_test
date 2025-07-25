---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J2MK4MB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAGi5S6BsOfRUFsyEfP4Xi1wFl9tEsB13I8EsC3oKlLQAiEAtBTANXVG8jqcTmDO%2BXhS%2B3AOQHvuIV%2BE%2FntPdrhLKVAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBcUKmy6IvB377V5FCrcA3n9FwZ7sxjvlukhL7JnX8YvQaqDiBnM1atqTYIritXylVo1KL5H3LIyXBa%2F8ZKZo%2B1XKW36MHVHx1quojffyOnuyjcchrRjTUlEg6MmN2wtgQbkbCcVdwf%2BDspUfS39RCQ9qdPZFLnHFpvn1mrDeZ%2Fqs7ETnWe2kKYFWFGq1QJksLPHsSEszPQbNufyuNniOsT1Z6paNFi%2Fd6r%2B%2BfiENcHJ%2FKQjtMo08B8HC9W1qduVAFpWVBhBIvBP9m8Zy%2FjgG%2BIgxZffCZszszzYHDa6eRWtJklxxryDEBqAYfiG%2F%2FGAPjD3VV4MEA0178oF4RSO%2BSK2bD32750oWOSLLlQuM10OlcmvraFFHkK3OJOBCTOz7xgk%2BX7ybC%2FpcEv%2FQl0Jt0njfOIEFywF%2F02OPyTg0FhXZaRfr2Nhy1%2Fh9ptM5pPij2Hoj3KxmeZPWzeO6%2FjyWgY7rGkW2RGdosF%2BBM9R9N18P3QYkBqNKWuu%2BUcIWJwvUX8ogXxkczU31g232w9O4BNBM8lmcIMEqkZIW%2FH35Lg8nXMYrcf7ZKWQVxhb2MbAl7VXwIBfYupek%2FyMyPvVWrNulU5T9MqdHrYYyMqZfyVPmcnUQ5tugV9wVIDIcCRucKoc4ylhoCFKPTxRMJHijcQGOqUBOHoA7t2xBDTju4rPQA1bf4vXZfuqhyui28mMU4ya1L98sw1t6XSrtMiZGU%2BdhfrRZ6%2BSwbtyOKSTqR%2FpOR8Qpxt8%2BhcDyxq%2FqZz2MdzPCmieAhtn0IMLltY8xI7Sd754fcJu1yMD2R2HZwVNZv1XkQYYi2X7RTRn%2B3HUvENZQ6SllPn9wHtGeOS2ylinm0NmtAsSbUFP%2B0NQxlKzlgWS88YOl5p1&X-Amz-Signature=d937b226380c786f4f2b4f1320c08ec170f315a3722e536d93df1a990484828f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J2MK4MB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAGi5S6BsOfRUFsyEfP4Xi1wFl9tEsB13I8EsC3oKlLQAiEAtBTANXVG8jqcTmDO%2BXhS%2B3AOQHvuIV%2BE%2FntPdrhLKVAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBcUKmy6IvB377V5FCrcA3n9FwZ7sxjvlukhL7JnX8YvQaqDiBnM1atqTYIritXylVo1KL5H3LIyXBa%2F8ZKZo%2B1XKW36MHVHx1quojffyOnuyjcchrRjTUlEg6MmN2wtgQbkbCcVdwf%2BDspUfS39RCQ9qdPZFLnHFpvn1mrDeZ%2Fqs7ETnWe2kKYFWFGq1QJksLPHsSEszPQbNufyuNniOsT1Z6paNFi%2Fd6r%2B%2BfiENcHJ%2FKQjtMo08B8HC9W1qduVAFpWVBhBIvBP9m8Zy%2FjgG%2BIgxZffCZszszzYHDa6eRWtJklxxryDEBqAYfiG%2F%2FGAPjD3VV4MEA0178oF4RSO%2BSK2bD32750oWOSLLlQuM10OlcmvraFFHkK3OJOBCTOz7xgk%2BX7ybC%2FpcEv%2FQl0Jt0njfOIEFywF%2F02OPyTg0FhXZaRfr2Nhy1%2Fh9ptM5pPij2Hoj3KxmeZPWzeO6%2FjyWgY7rGkW2RGdosF%2BBM9R9N18P3QYkBqNKWuu%2BUcIWJwvUX8ogXxkczU31g232w9O4BNBM8lmcIMEqkZIW%2FH35Lg8nXMYrcf7ZKWQVxhb2MbAl7VXwIBfYupek%2FyMyPvVWrNulU5T9MqdHrYYyMqZfyVPmcnUQ5tugV9wVIDIcCRucKoc4ylhoCFKPTxRMJHijcQGOqUBOHoA7t2xBDTju4rPQA1bf4vXZfuqhyui28mMU4ya1L98sw1t6XSrtMiZGU%2BdhfrRZ6%2BSwbtyOKSTqR%2FpOR8Qpxt8%2BhcDyxq%2FqZz2MdzPCmieAhtn0IMLltY8xI7Sd754fcJu1yMD2R2HZwVNZv1XkQYYi2X7RTRn%2B3HUvENZQ6SllPn9wHtGeOS2ylinm0NmtAsSbUFP%2B0NQxlKzlgWS88YOl5p1&X-Amz-Signature=c322c0068aa83197dff990938091dc53c7e72ab1e3cc7a15344459b3fc9079bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J2MK4MB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAGi5S6BsOfRUFsyEfP4Xi1wFl9tEsB13I8EsC3oKlLQAiEAtBTANXVG8jqcTmDO%2BXhS%2B3AOQHvuIV%2BE%2FntPdrhLKVAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBcUKmy6IvB377V5FCrcA3n9FwZ7sxjvlukhL7JnX8YvQaqDiBnM1atqTYIritXylVo1KL5H3LIyXBa%2F8ZKZo%2B1XKW36MHVHx1quojffyOnuyjcchrRjTUlEg6MmN2wtgQbkbCcVdwf%2BDspUfS39RCQ9qdPZFLnHFpvn1mrDeZ%2Fqs7ETnWe2kKYFWFGq1QJksLPHsSEszPQbNufyuNniOsT1Z6paNFi%2Fd6r%2B%2BfiENcHJ%2FKQjtMo08B8HC9W1qduVAFpWVBhBIvBP9m8Zy%2FjgG%2BIgxZffCZszszzYHDa6eRWtJklxxryDEBqAYfiG%2F%2FGAPjD3VV4MEA0178oF4RSO%2BSK2bD32750oWOSLLlQuM10OlcmvraFFHkK3OJOBCTOz7xgk%2BX7ybC%2FpcEv%2FQl0Jt0njfOIEFywF%2F02OPyTg0FhXZaRfr2Nhy1%2Fh9ptM5pPij2Hoj3KxmeZPWzeO6%2FjyWgY7rGkW2RGdosF%2BBM9R9N18P3QYkBqNKWuu%2BUcIWJwvUX8ogXxkczU31g232w9O4BNBM8lmcIMEqkZIW%2FH35Lg8nXMYrcf7ZKWQVxhb2MbAl7VXwIBfYupek%2FyMyPvVWrNulU5T9MqdHrYYyMqZfyVPmcnUQ5tugV9wVIDIcCRucKoc4ylhoCFKPTxRMJHijcQGOqUBOHoA7t2xBDTju4rPQA1bf4vXZfuqhyui28mMU4ya1L98sw1t6XSrtMiZGU%2BdhfrRZ6%2BSwbtyOKSTqR%2FpOR8Qpxt8%2BhcDyxq%2FqZz2MdzPCmieAhtn0IMLltY8xI7Sd754fcJu1yMD2R2HZwVNZv1XkQYYi2X7RTRn%2B3HUvENZQ6SllPn9wHtGeOS2ylinm0NmtAsSbUFP%2B0NQxlKzlgWS88YOl5p1&X-Amz-Signature=6f820a57d3edef118cb77f9b99dcf8a6bf2e2480eada8ac26bd10d69b8c3a86a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J2MK4MB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAGi5S6BsOfRUFsyEfP4Xi1wFl9tEsB13I8EsC3oKlLQAiEAtBTANXVG8jqcTmDO%2BXhS%2B3AOQHvuIV%2BE%2FntPdrhLKVAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBcUKmy6IvB377V5FCrcA3n9FwZ7sxjvlukhL7JnX8YvQaqDiBnM1atqTYIritXylVo1KL5H3LIyXBa%2F8ZKZo%2B1XKW36MHVHx1quojffyOnuyjcchrRjTUlEg6MmN2wtgQbkbCcVdwf%2BDspUfS39RCQ9qdPZFLnHFpvn1mrDeZ%2Fqs7ETnWe2kKYFWFGq1QJksLPHsSEszPQbNufyuNniOsT1Z6paNFi%2Fd6r%2B%2BfiENcHJ%2FKQjtMo08B8HC9W1qduVAFpWVBhBIvBP9m8Zy%2FjgG%2BIgxZffCZszszzYHDa6eRWtJklxxryDEBqAYfiG%2F%2FGAPjD3VV4MEA0178oF4RSO%2BSK2bD32750oWOSLLlQuM10OlcmvraFFHkK3OJOBCTOz7xgk%2BX7ybC%2FpcEv%2FQl0Jt0njfOIEFywF%2F02OPyTg0FhXZaRfr2Nhy1%2Fh9ptM5pPij2Hoj3KxmeZPWzeO6%2FjyWgY7rGkW2RGdosF%2BBM9R9N18P3QYkBqNKWuu%2BUcIWJwvUX8ogXxkczU31g232w9O4BNBM8lmcIMEqkZIW%2FH35Lg8nXMYrcf7ZKWQVxhb2MbAl7VXwIBfYupek%2FyMyPvVWrNulU5T9MqdHrYYyMqZfyVPmcnUQ5tugV9wVIDIcCRucKoc4ylhoCFKPTxRMJHijcQGOqUBOHoA7t2xBDTju4rPQA1bf4vXZfuqhyui28mMU4ya1L98sw1t6XSrtMiZGU%2BdhfrRZ6%2BSwbtyOKSTqR%2FpOR8Qpxt8%2BhcDyxq%2FqZz2MdzPCmieAhtn0IMLltY8xI7Sd754fcJu1yMD2R2HZwVNZv1XkQYYi2X7RTRn%2B3HUvENZQ6SllPn9wHtGeOS2ylinm0NmtAsSbUFP%2B0NQxlKzlgWS88YOl5p1&X-Amz-Signature=e593f989e0bb95c9f12f7dacf85d691a2b6f13acf52d339fbfeae36cff122556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J2MK4MB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAGi5S6BsOfRUFsyEfP4Xi1wFl9tEsB13I8EsC3oKlLQAiEAtBTANXVG8jqcTmDO%2BXhS%2B3AOQHvuIV%2BE%2FntPdrhLKVAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBcUKmy6IvB377V5FCrcA3n9FwZ7sxjvlukhL7JnX8YvQaqDiBnM1atqTYIritXylVo1KL5H3LIyXBa%2F8ZKZo%2B1XKW36MHVHx1quojffyOnuyjcchrRjTUlEg6MmN2wtgQbkbCcVdwf%2BDspUfS39RCQ9qdPZFLnHFpvn1mrDeZ%2Fqs7ETnWe2kKYFWFGq1QJksLPHsSEszPQbNufyuNniOsT1Z6paNFi%2Fd6r%2B%2BfiENcHJ%2FKQjtMo08B8HC9W1qduVAFpWVBhBIvBP9m8Zy%2FjgG%2BIgxZffCZszszzYHDa6eRWtJklxxryDEBqAYfiG%2F%2FGAPjD3VV4MEA0178oF4RSO%2BSK2bD32750oWOSLLlQuM10OlcmvraFFHkK3OJOBCTOz7xgk%2BX7ybC%2FpcEv%2FQl0Jt0njfOIEFywF%2F02OPyTg0FhXZaRfr2Nhy1%2Fh9ptM5pPij2Hoj3KxmeZPWzeO6%2FjyWgY7rGkW2RGdosF%2BBM9R9N18P3QYkBqNKWuu%2BUcIWJwvUX8ogXxkczU31g232w9O4BNBM8lmcIMEqkZIW%2FH35Lg8nXMYrcf7ZKWQVxhb2MbAl7VXwIBfYupek%2FyMyPvVWrNulU5T9MqdHrYYyMqZfyVPmcnUQ5tugV9wVIDIcCRucKoc4ylhoCFKPTxRMJHijcQGOqUBOHoA7t2xBDTju4rPQA1bf4vXZfuqhyui28mMU4ya1L98sw1t6XSrtMiZGU%2BdhfrRZ6%2BSwbtyOKSTqR%2FpOR8Qpxt8%2BhcDyxq%2FqZz2MdzPCmieAhtn0IMLltY8xI7Sd754fcJu1yMD2R2HZwVNZv1XkQYYi2X7RTRn%2B3HUvENZQ6SllPn9wHtGeOS2ylinm0NmtAsSbUFP%2B0NQxlKzlgWS88YOl5p1&X-Amz-Signature=9dbc32a05070a22cbb60697a51fe0c7a5041b98700ddd6b37607b6e17811e181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J2MK4MB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAGi5S6BsOfRUFsyEfP4Xi1wFl9tEsB13I8EsC3oKlLQAiEAtBTANXVG8jqcTmDO%2BXhS%2B3AOQHvuIV%2BE%2FntPdrhLKVAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBcUKmy6IvB377V5FCrcA3n9FwZ7sxjvlukhL7JnX8YvQaqDiBnM1atqTYIritXylVo1KL5H3LIyXBa%2F8ZKZo%2B1XKW36MHVHx1quojffyOnuyjcchrRjTUlEg6MmN2wtgQbkbCcVdwf%2BDspUfS39RCQ9qdPZFLnHFpvn1mrDeZ%2Fqs7ETnWe2kKYFWFGq1QJksLPHsSEszPQbNufyuNniOsT1Z6paNFi%2Fd6r%2B%2BfiENcHJ%2FKQjtMo08B8HC9W1qduVAFpWVBhBIvBP9m8Zy%2FjgG%2BIgxZffCZszszzYHDa6eRWtJklxxryDEBqAYfiG%2F%2FGAPjD3VV4MEA0178oF4RSO%2BSK2bD32750oWOSLLlQuM10OlcmvraFFHkK3OJOBCTOz7xgk%2BX7ybC%2FpcEv%2FQl0Jt0njfOIEFywF%2F02OPyTg0FhXZaRfr2Nhy1%2Fh9ptM5pPij2Hoj3KxmeZPWzeO6%2FjyWgY7rGkW2RGdosF%2BBM9R9N18P3QYkBqNKWuu%2BUcIWJwvUX8ogXxkczU31g232w9O4BNBM8lmcIMEqkZIW%2FH35Lg8nXMYrcf7ZKWQVxhb2MbAl7VXwIBfYupek%2FyMyPvVWrNulU5T9MqdHrYYyMqZfyVPmcnUQ5tugV9wVIDIcCRucKoc4ylhoCFKPTxRMJHijcQGOqUBOHoA7t2xBDTju4rPQA1bf4vXZfuqhyui28mMU4ya1L98sw1t6XSrtMiZGU%2BdhfrRZ6%2BSwbtyOKSTqR%2FpOR8Qpxt8%2BhcDyxq%2FqZz2MdzPCmieAhtn0IMLltY8xI7Sd754fcJu1yMD2R2HZwVNZv1XkQYYi2X7RTRn%2B3HUvENZQ6SllPn9wHtGeOS2ylinm0NmtAsSbUFP%2B0NQxlKzlgWS88YOl5p1&X-Amz-Signature=67c592b0164dfc9c3ea5707dd6f9e0d6284c75a1dcc7808a1e67411a4413127e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

# Nav2 settings

TODO: change footprint?
