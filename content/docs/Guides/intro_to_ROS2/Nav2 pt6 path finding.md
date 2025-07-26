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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BEPQUNI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGwGE%2BfeqlKCJDDJgpf0lqlXjbsTPZGFSeaKg4gWsychAiEAglPMO9QEkL3f7GJcayuouFIVAYHa2Yvt9rRBZf9eWjMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDEI2SyBleAtR9%2Bq%2F3CrcAxro1pmdYvLQ3BLHUIOzt0u%2BGei%2BOBtRnRApDXAwGKWXsdohAfKOAcyndSQn%2FQO95ssR7kLJMjHmrAPX24R4Vxsfe5upqrlRJZoD5KYoXzRZJi8sDXY7UcA2i%2FbASYsCmguymjftEtHrTQcZnNpGU%2Fh8K9e0Mb7ZRmXGd4rXuuaOvuvSWJ4QOAQ8KiU005Bt47L4KXRZADLn3yag7XtgkTm0IxAgUl5WJ3gGFQfOrfnTAob4M2ajzoytpZBfMtMH%2BDh5Zwcfs7qP7o8rwQJOp6GEKVPRLPGqYqQ5dSv4pBF44%2BQbq2MQjXj4xnrEpaqMHrIQqfKqiRg8puqS4%2Fx6WNxS3z23ykhhQUq%2FBYzn3sxg%2BJQFHSlCKvpH408Qg1ejTuhJ0CVuTAULIHOQBaM18ChmpU5bxCEySmmAgMA%2FbUWmjsSuOMR45OSzLPelWGVG4aztg%2BoDYhmblvi7a55miZCVGcdwRr72bqBWna9n0Ym2Gpk9tMUrWO2xdIeuCn98qBnlMT4nXkJa38dt57IXKgHrZ1REc9EfAkdvX3uAoFN6zSrlyJ6FHM4w30BogJOdNA%2FxiXMt9EdX7Bt%2BaZmMAxHZIqRXtNk6beSIedd0XJF6EThAeTUVSLenwQepMOCGksQGOqUB0fcqJSMCM17aBeH6vQu%2BU1JJt39DKLlqdQVrPxoN2UWDz5C9ilTb9zEp5AoJeNM9egrXH2ydvN0IBz2PBlwFLMMTDLJJ8qylrl6j79yaijaD%2BHzBScRYKUC81Ho1ZtHGAwZCm4piMNsqHrbu%2FZ41W%2FvfxMLezHq7Svve4QeoefPeREXHgjOREIS%2FpwXhuR65Qda7UgORNT5Y1FoqM8lvemQIsodD&X-Amz-Signature=ad9ca76eb51eecf17457fd05248134d765395837988e71b3e98f289ae488821d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BEPQUNI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGwGE%2BfeqlKCJDDJgpf0lqlXjbsTPZGFSeaKg4gWsychAiEAglPMO9QEkL3f7GJcayuouFIVAYHa2Yvt9rRBZf9eWjMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDEI2SyBleAtR9%2Bq%2F3CrcAxro1pmdYvLQ3BLHUIOzt0u%2BGei%2BOBtRnRApDXAwGKWXsdohAfKOAcyndSQn%2FQO95ssR7kLJMjHmrAPX24R4Vxsfe5upqrlRJZoD5KYoXzRZJi8sDXY7UcA2i%2FbASYsCmguymjftEtHrTQcZnNpGU%2Fh8K9e0Mb7ZRmXGd4rXuuaOvuvSWJ4QOAQ8KiU005Bt47L4KXRZADLn3yag7XtgkTm0IxAgUl5WJ3gGFQfOrfnTAob4M2ajzoytpZBfMtMH%2BDh5Zwcfs7qP7o8rwQJOp6GEKVPRLPGqYqQ5dSv4pBF44%2BQbq2MQjXj4xnrEpaqMHrIQqfKqiRg8puqS4%2Fx6WNxS3z23ykhhQUq%2FBYzn3sxg%2BJQFHSlCKvpH408Qg1ejTuhJ0CVuTAULIHOQBaM18ChmpU5bxCEySmmAgMA%2FbUWmjsSuOMR45OSzLPelWGVG4aztg%2BoDYhmblvi7a55miZCVGcdwRr72bqBWna9n0Ym2Gpk9tMUrWO2xdIeuCn98qBnlMT4nXkJa38dt57IXKgHrZ1REc9EfAkdvX3uAoFN6zSrlyJ6FHM4w30BogJOdNA%2FxiXMt9EdX7Bt%2BaZmMAxHZIqRXtNk6beSIedd0XJF6EThAeTUVSLenwQepMOCGksQGOqUB0fcqJSMCM17aBeH6vQu%2BU1JJt39DKLlqdQVrPxoN2UWDz5C9ilTb9zEp5AoJeNM9egrXH2ydvN0IBz2PBlwFLMMTDLJJ8qylrl6j79yaijaD%2BHzBScRYKUC81Ho1ZtHGAwZCm4piMNsqHrbu%2FZ41W%2FvfxMLezHq7Svve4QeoefPeREXHgjOREIS%2FpwXhuR65Qda7UgORNT5Y1FoqM8lvemQIsodD&X-Amz-Signature=86a886be3222718638ffbd028ef6d66a2f2d66640cd16e81b74c3f4886fd6dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BEPQUNI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGwGE%2BfeqlKCJDDJgpf0lqlXjbsTPZGFSeaKg4gWsychAiEAglPMO9QEkL3f7GJcayuouFIVAYHa2Yvt9rRBZf9eWjMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDEI2SyBleAtR9%2Bq%2F3CrcAxro1pmdYvLQ3BLHUIOzt0u%2BGei%2BOBtRnRApDXAwGKWXsdohAfKOAcyndSQn%2FQO95ssR7kLJMjHmrAPX24R4Vxsfe5upqrlRJZoD5KYoXzRZJi8sDXY7UcA2i%2FbASYsCmguymjftEtHrTQcZnNpGU%2Fh8K9e0Mb7ZRmXGd4rXuuaOvuvSWJ4QOAQ8KiU005Bt47L4KXRZADLn3yag7XtgkTm0IxAgUl5WJ3gGFQfOrfnTAob4M2ajzoytpZBfMtMH%2BDh5Zwcfs7qP7o8rwQJOp6GEKVPRLPGqYqQ5dSv4pBF44%2BQbq2MQjXj4xnrEpaqMHrIQqfKqiRg8puqS4%2Fx6WNxS3z23ykhhQUq%2FBYzn3sxg%2BJQFHSlCKvpH408Qg1ejTuhJ0CVuTAULIHOQBaM18ChmpU5bxCEySmmAgMA%2FbUWmjsSuOMR45OSzLPelWGVG4aztg%2BoDYhmblvi7a55miZCVGcdwRr72bqBWna9n0Ym2Gpk9tMUrWO2xdIeuCn98qBnlMT4nXkJa38dt57IXKgHrZ1REc9EfAkdvX3uAoFN6zSrlyJ6FHM4w30BogJOdNA%2FxiXMt9EdX7Bt%2BaZmMAxHZIqRXtNk6beSIedd0XJF6EThAeTUVSLenwQepMOCGksQGOqUB0fcqJSMCM17aBeH6vQu%2BU1JJt39DKLlqdQVrPxoN2UWDz5C9ilTb9zEp5AoJeNM9egrXH2ydvN0IBz2PBlwFLMMTDLJJ8qylrl6j79yaijaD%2BHzBScRYKUC81Ho1ZtHGAwZCm4piMNsqHrbu%2FZ41W%2FvfxMLezHq7Svve4QeoefPeREXHgjOREIS%2FpwXhuR65Qda7UgORNT5Y1FoqM8lvemQIsodD&X-Amz-Signature=39ed6a7e443a9fa1220761cfff5867977ab5f066b85dd07fd12a799edb03f2d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BEPQUNI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGwGE%2BfeqlKCJDDJgpf0lqlXjbsTPZGFSeaKg4gWsychAiEAglPMO9QEkL3f7GJcayuouFIVAYHa2Yvt9rRBZf9eWjMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDEI2SyBleAtR9%2Bq%2F3CrcAxro1pmdYvLQ3BLHUIOzt0u%2BGei%2BOBtRnRApDXAwGKWXsdohAfKOAcyndSQn%2FQO95ssR7kLJMjHmrAPX24R4Vxsfe5upqrlRJZoD5KYoXzRZJi8sDXY7UcA2i%2FbASYsCmguymjftEtHrTQcZnNpGU%2Fh8K9e0Mb7ZRmXGd4rXuuaOvuvSWJ4QOAQ8KiU005Bt47L4KXRZADLn3yag7XtgkTm0IxAgUl5WJ3gGFQfOrfnTAob4M2ajzoytpZBfMtMH%2BDh5Zwcfs7qP7o8rwQJOp6GEKVPRLPGqYqQ5dSv4pBF44%2BQbq2MQjXj4xnrEpaqMHrIQqfKqiRg8puqS4%2Fx6WNxS3z23ykhhQUq%2FBYzn3sxg%2BJQFHSlCKvpH408Qg1ejTuhJ0CVuTAULIHOQBaM18ChmpU5bxCEySmmAgMA%2FbUWmjsSuOMR45OSzLPelWGVG4aztg%2BoDYhmblvi7a55miZCVGcdwRr72bqBWna9n0Ym2Gpk9tMUrWO2xdIeuCn98qBnlMT4nXkJa38dt57IXKgHrZ1REc9EfAkdvX3uAoFN6zSrlyJ6FHM4w30BogJOdNA%2FxiXMt9EdX7Bt%2BaZmMAxHZIqRXtNk6beSIedd0XJF6EThAeTUVSLenwQepMOCGksQGOqUB0fcqJSMCM17aBeH6vQu%2BU1JJt39DKLlqdQVrPxoN2UWDz5C9ilTb9zEp5AoJeNM9egrXH2ydvN0IBz2PBlwFLMMTDLJJ8qylrl6j79yaijaD%2BHzBScRYKUC81Ho1ZtHGAwZCm4piMNsqHrbu%2FZ41W%2FvfxMLezHq7Svve4QeoefPeREXHgjOREIS%2FpwXhuR65Qda7UgORNT5Y1FoqM8lvemQIsodD&X-Amz-Signature=57a5b7d1658636b6e39cdac505cd8cfe131c16f34b6e536ecf10a7628b343399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BEPQUNI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGwGE%2BfeqlKCJDDJgpf0lqlXjbsTPZGFSeaKg4gWsychAiEAglPMO9QEkL3f7GJcayuouFIVAYHa2Yvt9rRBZf9eWjMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDEI2SyBleAtR9%2Bq%2F3CrcAxro1pmdYvLQ3BLHUIOzt0u%2BGei%2BOBtRnRApDXAwGKWXsdohAfKOAcyndSQn%2FQO95ssR7kLJMjHmrAPX24R4Vxsfe5upqrlRJZoD5KYoXzRZJi8sDXY7UcA2i%2FbASYsCmguymjftEtHrTQcZnNpGU%2Fh8K9e0Mb7ZRmXGd4rXuuaOvuvSWJ4QOAQ8KiU005Bt47L4KXRZADLn3yag7XtgkTm0IxAgUl5WJ3gGFQfOrfnTAob4M2ajzoytpZBfMtMH%2BDh5Zwcfs7qP7o8rwQJOp6GEKVPRLPGqYqQ5dSv4pBF44%2BQbq2MQjXj4xnrEpaqMHrIQqfKqiRg8puqS4%2Fx6WNxS3z23ykhhQUq%2FBYzn3sxg%2BJQFHSlCKvpH408Qg1ejTuhJ0CVuTAULIHOQBaM18ChmpU5bxCEySmmAgMA%2FbUWmjsSuOMR45OSzLPelWGVG4aztg%2BoDYhmblvi7a55miZCVGcdwRr72bqBWna9n0Ym2Gpk9tMUrWO2xdIeuCn98qBnlMT4nXkJa38dt57IXKgHrZ1REc9EfAkdvX3uAoFN6zSrlyJ6FHM4w30BogJOdNA%2FxiXMt9EdX7Bt%2BaZmMAxHZIqRXtNk6beSIedd0XJF6EThAeTUVSLenwQepMOCGksQGOqUB0fcqJSMCM17aBeH6vQu%2BU1JJt39DKLlqdQVrPxoN2UWDz5C9ilTb9zEp5AoJeNM9egrXH2ydvN0IBz2PBlwFLMMTDLJJ8qylrl6j79yaijaD%2BHzBScRYKUC81Ho1ZtHGAwZCm4piMNsqHrbu%2FZ41W%2FvfxMLezHq7Svve4QeoefPeREXHgjOREIS%2FpwXhuR65Qda7UgORNT5Y1FoqM8lvemQIsodD&X-Amz-Signature=e67a4d78b95909712b2fad97d63178b488369375a5da4089d4a852066872b508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BEPQUNI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGwGE%2BfeqlKCJDDJgpf0lqlXjbsTPZGFSeaKg4gWsychAiEAglPMO9QEkL3f7GJcayuouFIVAYHa2Yvt9rRBZf9eWjMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDEI2SyBleAtR9%2Bq%2F3CrcAxro1pmdYvLQ3BLHUIOzt0u%2BGei%2BOBtRnRApDXAwGKWXsdohAfKOAcyndSQn%2FQO95ssR7kLJMjHmrAPX24R4Vxsfe5upqrlRJZoD5KYoXzRZJi8sDXY7UcA2i%2FbASYsCmguymjftEtHrTQcZnNpGU%2Fh8K9e0Mb7ZRmXGd4rXuuaOvuvSWJ4QOAQ8KiU005Bt47L4KXRZADLn3yag7XtgkTm0IxAgUl5WJ3gGFQfOrfnTAob4M2ajzoytpZBfMtMH%2BDh5Zwcfs7qP7o8rwQJOp6GEKVPRLPGqYqQ5dSv4pBF44%2BQbq2MQjXj4xnrEpaqMHrIQqfKqiRg8puqS4%2Fx6WNxS3z23ykhhQUq%2FBYzn3sxg%2BJQFHSlCKvpH408Qg1ejTuhJ0CVuTAULIHOQBaM18ChmpU5bxCEySmmAgMA%2FbUWmjsSuOMR45OSzLPelWGVG4aztg%2BoDYhmblvi7a55miZCVGcdwRr72bqBWna9n0Ym2Gpk9tMUrWO2xdIeuCn98qBnlMT4nXkJa38dt57IXKgHrZ1REc9EfAkdvX3uAoFN6zSrlyJ6FHM4w30BogJOdNA%2FxiXMt9EdX7Bt%2BaZmMAxHZIqRXtNk6beSIedd0XJF6EThAeTUVSLenwQepMOCGksQGOqUB0fcqJSMCM17aBeH6vQu%2BU1JJt39DKLlqdQVrPxoN2UWDz5C9ilTb9zEp5AoJeNM9egrXH2ydvN0IBz2PBlwFLMMTDLJJ8qylrl6j79yaijaD%2BHzBScRYKUC81Ho1ZtHGAwZCm4piMNsqHrbu%2FZ41W%2FvfxMLezHq7Svve4QeoefPeREXHgjOREIS%2FpwXhuR65Qda7UgORNT5Y1FoqM8lvemQIsodD&X-Amz-Signature=b17af74bb74a8c8d96b2ecfe2dc97eac8704e02eaada1199bfb0d7f3aefe021b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
