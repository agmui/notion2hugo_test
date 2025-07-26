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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64CH52B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDIQeg0SPGcqN432zQowSTGqUu4e2M1SeA9ryXOF%2BCiogIhAJpfYc6657OQk9QlpGW6uGcthMrDLp6n4EcDJ5MZQ1rtKv8DCFMQABoMNjM3NDIzMTgzODA1Igzky1ryandmDBF1OyAq3AMPYeRzAKdSl6%2FuISvkLMvbJSD%2FI%2BdOadSJPjgtQYx%2FFz05H5npRyrmYUVp7zNQmls5L4fPsJPz6A2NQXHgz8MXVAOO9B580a1Qu2VUzQXC1gUs%2Fwk1Ziza%2BShpoDqATx%2BtF1MkNSDd5Z%2Fci43zOg%2Bu0sxIs0m1Fc1miaWwb09IjcN8rJdZQDcW7yjfKIbXQfz7m8tooXVryuzj350a1K0nGBggbDKo7uFxNXDr92hECIMb6gH9pcrJ9LcjEUaoNnqVUaIaEcWsk1YzZAEneupf%2FpBYACnWsChlfRbU62BmaaMuzziWzweGtEEqtxJScx%2BaIa5P4dp6%2BkFvXjZQMllsKk1fV9Axo2vW5luxs6HCvxGb%2BC4kcOuKAdtFkjgACYcJvewY4%2FLxFvSB5MZHmunGFZ0UkWBR%2FaFaCY2cMcwov2JLFDZVlNnZmIkU1qpZRFkTXlCBR6UX1lzR0pOKTI3M461peIbtAuO5XagQEPq61I3LrcHAAT7VD1U6iH6xN2L2hGWEuPpyrYTRrIj%2FkQQ9Lug0NWtksY0dFE5z03R1ND%2Bh649Y3r2JF0tvWy59djZc06AjGY%2BOkQdWtdS0RfaIExZmDRuebtV4GKvKOR3c4X5BPW6lXc9yE1gIpjDK7ZDEBjqkAdeww4H542vicfAYgdLkYIVPujo5UoN9fe9OOFdsp2HyV2WD6yPx8iRpjRT5B0LSGzvyQYpJ%2Fy1JgTdQ8pwZ95gA4GAMlm9%2BGcMNmI1UF32PNNnHbXGNb9jCe26%2F1128ONYqAHkvq49YsXK3FKHXcv2dFBytbfigOliGjL%2BUmEMlSQJ1E5S%2Bse%2F5iNWVld5fGu0RJSOEUrBmaXv7cfyzIvb7l51C&X-Amz-Signature=0617a013e918ac98a32dca1a991911cb3bbc6830b294a4fa8e832eb7b638073d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64CH52B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDIQeg0SPGcqN432zQowSTGqUu4e2M1SeA9ryXOF%2BCiogIhAJpfYc6657OQk9QlpGW6uGcthMrDLp6n4EcDJ5MZQ1rtKv8DCFMQABoMNjM3NDIzMTgzODA1Igzky1ryandmDBF1OyAq3AMPYeRzAKdSl6%2FuISvkLMvbJSD%2FI%2BdOadSJPjgtQYx%2FFz05H5npRyrmYUVp7zNQmls5L4fPsJPz6A2NQXHgz8MXVAOO9B580a1Qu2VUzQXC1gUs%2Fwk1Ziza%2BShpoDqATx%2BtF1MkNSDd5Z%2Fci43zOg%2Bu0sxIs0m1Fc1miaWwb09IjcN8rJdZQDcW7yjfKIbXQfz7m8tooXVryuzj350a1K0nGBggbDKo7uFxNXDr92hECIMb6gH9pcrJ9LcjEUaoNnqVUaIaEcWsk1YzZAEneupf%2FpBYACnWsChlfRbU62BmaaMuzziWzweGtEEqtxJScx%2BaIa5P4dp6%2BkFvXjZQMllsKk1fV9Axo2vW5luxs6HCvxGb%2BC4kcOuKAdtFkjgACYcJvewY4%2FLxFvSB5MZHmunGFZ0UkWBR%2FaFaCY2cMcwov2JLFDZVlNnZmIkU1qpZRFkTXlCBR6UX1lzR0pOKTI3M461peIbtAuO5XagQEPq61I3LrcHAAT7VD1U6iH6xN2L2hGWEuPpyrYTRrIj%2FkQQ9Lug0NWtksY0dFE5z03R1ND%2Bh649Y3r2JF0tvWy59djZc06AjGY%2BOkQdWtdS0RfaIExZmDRuebtV4GKvKOR3c4X5BPW6lXc9yE1gIpjDK7ZDEBjqkAdeww4H542vicfAYgdLkYIVPujo5UoN9fe9OOFdsp2HyV2WD6yPx8iRpjRT5B0LSGzvyQYpJ%2Fy1JgTdQ8pwZ95gA4GAMlm9%2BGcMNmI1UF32PNNnHbXGNb9jCe26%2F1128ONYqAHkvq49YsXK3FKHXcv2dFBytbfigOliGjL%2BUmEMlSQJ1E5S%2Bse%2F5iNWVld5fGu0RJSOEUrBmaXv7cfyzIvb7l51C&X-Amz-Signature=f51a31b97fb9615618504bc00825f86798ba0e73eb7a25f1a75dc98a32535dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64CH52B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDIQeg0SPGcqN432zQowSTGqUu4e2M1SeA9ryXOF%2BCiogIhAJpfYc6657OQk9QlpGW6uGcthMrDLp6n4EcDJ5MZQ1rtKv8DCFMQABoMNjM3NDIzMTgzODA1Igzky1ryandmDBF1OyAq3AMPYeRzAKdSl6%2FuISvkLMvbJSD%2FI%2BdOadSJPjgtQYx%2FFz05H5npRyrmYUVp7zNQmls5L4fPsJPz6A2NQXHgz8MXVAOO9B580a1Qu2VUzQXC1gUs%2Fwk1Ziza%2BShpoDqATx%2BtF1MkNSDd5Z%2Fci43zOg%2Bu0sxIs0m1Fc1miaWwb09IjcN8rJdZQDcW7yjfKIbXQfz7m8tooXVryuzj350a1K0nGBggbDKo7uFxNXDr92hECIMb6gH9pcrJ9LcjEUaoNnqVUaIaEcWsk1YzZAEneupf%2FpBYACnWsChlfRbU62BmaaMuzziWzweGtEEqtxJScx%2BaIa5P4dp6%2BkFvXjZQMllsKk1fV9Axo2vW5luxs6HCvxGb%2BC4kcOuKAdtFkjgACYcJvewY4%2FLxFvSB5MZHmunGFZ0UkWBR%2FaFaCY2cMcwov2JLFDZVlNnZmIkU1qpZRFkTXlCBR6UX1lzR0pOKTI3M461peIbtAuO5XagQEPq61I3LrcHAAT7VD1U6iH6xN2L2hGWEuPpyrYTRrIj%2FkQQ9Lug0NWtksY0dFE5z03R1ND%2Bh649Y3r2JF0tvWy59djZc06AjGY%2BOkQdWtdS0RfaIExZmDRuebtV4GKvKOR3c4X5BPW6lXc9yE1gIpjDK7ZDEBjqkAdeww4H542vicfAYgdLkYIVPujo5UoN9fe9OOFdsp2HyV2WD6yPx8iRpjRT5B0LSGzvyQYpJ%2Fy1JgTdQ8pwZ95gA4GAMlm9%2BGcMNmI1UF32PNNnHbXGNb9jCe26%2F1128ONYqAHkvq49YsXK3FKHXcv2dFBytbfigOliGjL%2BUmEMlSQJ1E5S%2Bse%2F5iNWVld5fGu0RJSOEUrBmaXv7cfyzIvb7l51C&X-Amz-Signature=82372941bec7cd481dbd2b841f99549f29f288cd4882d5674b702b251d126741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64CH52B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDIQeg0SPGcqN432zQowSTGqUu4e2M1SeA9ryXOF%2BCiogIhAJpfYc6657OQk9QlpGW6uGcthMrDLp6n4EcDJ5MZQ1rtKv8DCFMQABoMNjM3NDIzMTgzODA1Igzky1ryandmDBF1OyAq3AMPYeRzAKdSl6%2FuISvkLMvbJSD%2FI%2BdOadSJPjgtQYx%2FFz05H5npRyrmYUVp7zNQmls5L4fPsJPz6A2NQXHgz8MXVAOO9B580a1Qu2VUzQXC1gUs%2Fwk1Ziza%2BShpoDqATx%2BtF1MkNSDd5Z%2Fci43zOg%2Bu0sxIs0m1Fc1miaWwb09IjcN8rJdZQDcW7yjfKIbXQfz7m8tooXVryuzj350a1K0nGBggbDKo7uFxNXDr92hECIMb6gH9pcrJ9LcjEUaoNnqVUaIaEcWsk1YzZAEneupf%2FpBYACnWsChlfRbU62BmaaMuzziWzweGtEEqtxJScx%2BaIa5P4dp6%2BkFvXjZQMllsKk1fV9Axo2vW5luxs6HCvxGb%2BC4kcOuKAdtFkjgACYcJvewY4%2FLxFvSB5MZHmunGFZ0UkWBR%2FaFaCY2cMcwov2JLFDZVlNnZmIkU1qpZRFkTXlCBR6UX1lzR0pOKTI3M461peIbtAuO5XagQEPq61I3LrcHAAT7VD1U6iH6xN2L2hGWEuPpyrYTRrIj%2FkQQ9Lug0NWtksY0dFE5z03R1ND%2Bh649Y3r2JF0tvWy59djZc06AjGY%2BOkQdWtdS0RfaIExZmDRuebtV4GKvKOR3c4X5BPW6lXc9yE1gIpjDK7ZDEBjqkAdeww4H542vicfAYgdLkYIVPujo5UoN9fe9OOFdsp2HyV2WD6yPx8iRpjRT5B0LSGzvyQYpJ%2Fy1JgTdQ8pwZ95gA4GAMlm9%2BGcMNmI1UF32PNNnHbXGNb9jCe26%2F1128ONYqAHkvq49YsXK3FKHXcv2dFBytbfigOliGjL%2BUmEMlSQJ1E5S%2Bse%2F5iNWVld5fGu0RJSOEUrBmaXv7cfyzIvb7l51C&X-Amz-Signature=09a22266654a5a796857b0585b0225e1bb5d7df29151a99a7f8e70e8522feb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64CH52B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDIQeg0SPGcqN432zQowSTGqUu4e2M1SeA9ryXOF%2BCiogIhAJpfYc6657OQk9QlpGW6uGcthMrDLp6n4EcDJ5MZQ1rtKv8DCFMQABoMNjM3NDIzMTgzODA1Igzky1ryandmDBF1OyAq3AMPYeRzAKdSl6%2FuISvkLMvbJSD%2FI%2BdOadSJPjgtQYx%2FFz05H5npRyrmYUVp7zNQmls5L4fPsJPz6A2NQXHgz8MXVAOO9B580a1Qu2VUzQXC1gUs%2Fwk1Ziza%2BShpoDqATx%2BtF1MkNSDd5Z%2Fci43zOg%2Bu0sxIs0m1Fc1miaWwb09IjcN8rJdZQDcW7yjfKIbXQfz7m8tooXVryuzj350a1K0nGBggbDKo7uFxNXDr92hECIMb6gH9pcrJ9LcjEUaoNnqVUaIaEcWsk1YzZAEneupf%2FpBYACnWsChlfRbU62BmaaMuzziWzweGtEEqtxJScx%2BaIa5P4dp6%2BkFvXjZQMllsKk1fV9Axo2vW5luxs6HCvxGb%2BC4kcOuKAdtFkjgACYcJvewY4%2FLxFvSB5MZHmunGFZ0UkWBR%2FaFaCY2cMcwov2JLFDZVlNnZmIkU1qpZRFkTXlCBR6UX1lzR0pOKTI3M461peIbtAuO5XagQEPq61I3LrcHAAT7VD1U6iH6xN2L2hGWEuPpyrYTRrIj%2FkQQ9Lug0NWtksY0dFE5z03R1ND%2Bh649Y3r2JF0tvWy59djZc06AjGY%2BOkQdWtdS0RfaIExZmDRuebtV4GKvKOR3c4X5BPW6lXc9yE1gIpjDK7ZDEBjqkAdeww4H542vicfAYgdLkYIVPujo5UoN9fe9OOFdsp2HyV2WD6yPx8iRpjRT5B0LSGzvyQYpJ%2Fy1JgTdQ8pwZ95gA4GAMlm9%2BGcMNmI1UF32PNNnHbXGNb9jCe26%2F1128ONYqAHkvq49YsXK3FKHXcv2dFBytbfigOliGjL%2BUmEMlSQJ1E5S%2Bse%2F5iNWVld5fGu0RJSOEUrBmaXv7cfyzIvb7l51C&X-Amz-Signature=f147a6d5b218c58bd7a1aa1b709ce8bd8f094d6f30859abb449d053c7610548e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W64CH52B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDIQeg0SPGcqN432zQowSTGqUu4e2M1SeA9ryXOF%2BCiogIhAJpfYc6657OQk9QlpGW6uGcthMrDLp6n4EcDJ5MZQ1rtKv8DCFMQABoMNjM3NDIzMTgzODA1Igzky1ryandmDBF1OyAq3AMPYeRzAKdSl6%2FuISvkLMvbJSD%2FI%2BdOadSJPjgtQYx%2FFz05H5npRyrmYUVp7zNQmls5L4fPsJPz6A2NQXHgz8MXVAOO9B580a1Qu2VUzQXC1gUs%2Fwk1Ziza%2BShpoDqATx%2BtF1MkNSDd5Z%2Fci43zOg%2Bu0sxIs0m1Fc1miaWwb09IjcN8rJdZQDcW7yjfKIbXQfz7m8tooXVryuzj350a1K0nGBggbDKo7uFxNXDr92hECIMb6gH9pcrJ9LcjEUaoNnqVUaIaEcWsk1YzZAEneupf%2FpBYACnWsChlfRbU62BmaaMuzziWzweGtEEqtxJScx%2BaIa5P4dp6%2BkFvXjZQMllsKk1fV9Axo2vW5luxs6HCvxGb%2BC4kcOuKAdtFkjgACYcJvewY4%2FLxFvSB5MZHmunGFZ0UkWBR%2FaFaCY2cMcwov2JLFDZVlNnZmIkU1qpZRFkTXlCBR6UX1lzR0pOKTI3M461peIbtAuO5XagQEPq61I3LrcHAAT7VD1U6iH6xN2L2hGWEuPpyrYTRrIj%2FkQQ9Lug0NWtksY0dFE5z03R1ND%2Bh649Y3r2JF0tvWy59djZc06AjGY%2BOkQdWtdS0RfaIExZmDRuebtV4GKvKOR3c4X5BPW6lXc9yE1gIpjDK7ZDEBjqkAdeww4H542vicfAYgdLkYIVPujo5UoN9fe9OOFdsp2HyV2WD6yPx8iRpjRT5B0LSGzvyQYpJ%2Fy1JgTdQ8pwZ95gA4GAMlm9%2BGcMNmI1UF32PNNnHbXGNb9jCe26%2F1128ONYqAHkvq49YsXK3FKHXcv2dFBytbfigOliGjL%2BUmEMlSQJ1E5S%2Bse%2F5iNWVld5fGu0RJSOEUrBmaXv7cfyzIvb7l51C&X-Amz-Signature=a25c6d3a6db692c500bb4416666aef435356eb728fab640cbf2de80f77a03fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
