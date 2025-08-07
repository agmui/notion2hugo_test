---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=39c6fb4db2b60472acf7f881e0dd6c96d293960fcbfb34a68c30463192a16413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=921e9c0d5a88640af46e2d9480c9133bca03fccd00cb8477471ccddbee814d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=a7ffb3a3f6a560e79f136483c97c172e3f9e211764c0de7bade15fd659067c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=c34b518287998cb6e64c1892edc23b5fbbff76602943a0475e9382fb6e128450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=825c6d45fa9af9729ab1300bda7d4e8e05f70d0d1f03883e814be02169c9105b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=a7acdac4c1ecf65b7d62d9e0548643af60c832dee09c6888854dffc7335f9e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=07c3d1ff1feb39422f89781d9690c6b4f50d98c9dc10ed5344af1b936479ab05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=003bc4550d0acb800dd313deac04084d24ff749349d65c6c36a23b78a655eab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=c9bea247c480c706d15eaa9761042357f56d7b214882258023c70a0cded8e679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=9359ac012cfc03a8a034507eee66d5a5bfc6c5d2d7300688035adc3032179411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=e2ffb7750bb2d00ffe76cc4b6957735bf36c1fe58c5af6e4022bb7bcf1223141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=8cc5e9655a44627908946a68270d5adfc18514229385767ff8906894cfcdf01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V65VDMQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCvQjYMWj8L9dCXOgttbGckSpx4qzTKXz8zZJMFWGi7nQIhAMNdShUShBSWP92FsP1x1KyOdTeNPP5u2v59miuMfNkyKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTgRiQsWlci7mPUHoq3APGZHQX6D38zrBdyNrhmDkUmq6565qXS3JEWwd12mZ2Y7Gu7UCY%2By65UbWC8rzvKy1bUg3z1YdF%2FgFy2vUeOwXCMPLlDBU%2BxnusSFOg9QGEfZo%2BoxwbkjpB9NfJ6raPZeAdGEM7byxFIPSoyvF%2BwmOLUqcnzMhh806%2Fnf%2B%2BNbwmkOFM9coYw3tzzn2Wab6sMhzJYQbF5Nd5%2FE8S9IiYv0JRtdG2C75DKiAKlCkdVut%2Br9ko6eSPZX82LGS59liEpm64XdZY855M6DHpKq%2FocmSW7VMuKi4INHE5esQXXXVNCgIgnye2M1t9NutCp3dyoK5wHBF9g2M19V7xrvWZeb%2BZFSsLMxJvuk8hyyZ%2FZDZUlwCGtp%2BYnKYliJntByPloAHSs1D8KJCISy%2BlC9%2BoX4umc%2FaZT3yrt8%2Bv3yGJP94dXdKZIMH0pYFw3jTTTmNwut%2FTun63Z2b2qcNEpxR3NCNUu%2B3dVFCnvc9HduGOKZ095MF1JUHJkbJTO8BYjXJ6MIPOv3Z38ziXu4hoQhUMQibQ0by%2F1U8mpPOJUd8kwk1QJ0SNTyyQHFbKN80biWZsTkvNtRWNzEMcPh2DGcexcdV282HYTsk%2BBze3f%2Fdwf3tWk2QXfiotUFUa%2B%2FhtCTC0lNTEBjqkAcC%2By6izt7W4akjpegBtCn5kzfKBFNOp1kSX1y%2Fy8DfgYO1RKIKMAZ1mz4R9iiJbEUlLrlBJW2rKo%2FvMCaWxYn6Zz3%2BnN6Ic%2FQo5v%2B8T18pHmFdwVZgN2OA7GvCpeivBY7sm4lsFOyFVQFvNPoD4t7axZPT5BaZpk3oka%2FMjMZjwsLIGV26jHAn4gGi5nfl%2FpGpzjvqVffJ4z6b%2ByAmt9g1wbwBR&X-Amz-Signature=d600e5addb2ca70da6834641ef0360f867522fc6d58845cea0f774d38267fe31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

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
