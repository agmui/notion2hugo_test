---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=e5bd102121b3314d3e9e6a6964b6c71d4d8a26646800f6ffe7b44e1c25ab1432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}


#### Outputs:

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=5714d74624c947db8f48b264884c2d7640393362381fca688c41836dea984677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=f65f8576280860459123e028cb5fa69a3d86f3ad47b08809767fb4bae9ab3aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=4bf5a1e6427236bad249818d54cda9898d6f97a4e09fb8c6f1d62484d0d84b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=dc0790ce7efb5ed1e8d27fe83876e971fd78d4ce039dd5856c03acf372483e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=96269d8c1fc57264510e550834b7ff8dcb0882dcf4e3708f6bde24ae7cefcace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=a1d2d00989eb32a905bef9d5b977b1df7434adb25a04bb061c2d91418a9fb0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=c96491387f43f7e6988d2d1910d24084f4ef554e272917f373e45e1da15423db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=52c5e2acab7bff807a226cc29c08beaaf82148d2ea975c6608a6e3c15da74fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=4524fd60a6c55139a91c1560f5ee6b5498ab323f617bf0e711ff575abd795e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=ac1bfecedd73852624d2112789be5099595c5a2d2a01244711d5bf9edadac2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=8d4b68dfb624e35f5ce29a55fab6bbabef69aa20ac1da93da394a75d38606c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGYJOX5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIG8exhuC6eTvJ2g1Evfl0KXpNkCfVi1rekLuR3BOK8D2AiEA2yT0Qjcl58oQ9W8qb%2BbKCKn%2BX0gEnk3BoKZq90vOI2Eq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBWN5hlX1uwgntypsircA%2BP%2Faq6LQz3PsJQ1qEE156aT2NOvpzQz8ts96SE8V%2BwUe%2Bw%2B4G4ev2nNyDyY5lC9R4S7OjN229sQ%2FAq8Kgkr289ULXTAKGjNBCS7QkKxjQbbzqN%2FIT0urMapda4qrwmB%2BtRLmXAWak4d8t%2FccLYja%2BcNip9a%2B6F0OeK9hViB6D8sGVD6ow2hWaouMum9i1%2BTZ8fjxkM9FFPyXwawqyqSiajYE3zAe5YvLPZf7QHHV%2FB%2BxLf4zlovsuDoisULwVOO1k8BRg%2FYLNUJ6M3l7%2BHd06VOThOGU7HUdZ2yMIJ%2FZTYW9gtIppOPtnOclUv7VYQblLZkqT%2BoaR56OkwsnLiFoGFMLrOkON2tv8wM%2FzQiu99kAndeq9ci0vVxGWa8GXdNZ8q6dvKeqvaoIdUYyKdfPokdtAe2ob%2FWLrVGhBte8DMCEcaAu63I24eR08cIHtwcDLGnNqsL2YVtibmCnfPenanOj6iO%2FMbzhYREJt1NBbilwk89JFizDk4O3bi8Zdhjg8kP9HsgMrAdWbI%2FTFLaENP0B4l1m6qCpFBolbRXkoNAWlLStYBFUIkN5aiOAB%2B%2FrJ19xWmj61zL0BpbG8JdoBojTKTZRJ8SCCjgEubmaoP6vDdB6HD5CH5wC4fwMOWbgsUGOqUBFbntemxCBsJETGv0B%2BiK1mi3x70ad9OYijQ01yB2Xwe%2FpCMd%2BNvDm%2BxlBQVtMGBPqzuhti9QwLStI1SZvRY4PysNtAyXB%2BQXkN5yuzRQa%2Bi99kGvG8buw6zwgQPEjAmdV5N%2FJj0Ct4Lt2zLZOoVTvxgEQLT%2Bk0NCBzCnuZVXuTpz2yyFbgK%2BSS9jNB%2FeNRKj%2BjDQCcKydp7vor7oLfWsM1zcSzmE&X-Amz-Signature=ce67a21a0f0de6f0417ba50ed941739a8796b58a4d4ecebb246b71f75953e89e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
            'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

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

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
