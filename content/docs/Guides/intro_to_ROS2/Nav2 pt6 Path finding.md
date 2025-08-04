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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=2d6202134eeed1d4af7046a4accaadfd9dcde58fff03caeee2688dbbc8013a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=2e150a565a09557a46c1fe862505eae7535a9a667c67519c7cddf41c5a0fa53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=51767f15318071fa69f6cc7fc2fb85336b090caa4ca4c00944dc44470b28f7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=fb1556e254b2cf4a88084f0acd638d8e3966c91379ac061aa5684fbce3c945b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=b92fd6b8acbeef5b3b7e0b36b38277ca12a99ded785afde778a5e2b82164e477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=83497644812aafae6b15d20745527a29999bbb4157c26e2ab8c361be8fc6ed66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=2a8701cd780100cf2325bbe21c0866285e1e6e56cfc3b5a3108b0754ccd6842f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=2cb732341c8beac59f1173e39ddc839880439a29642405c4ebf12524f43b81c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=4c500f502dd0a9e38c8759a2879b01c481be8f633437ca487d7d5a61a1a10bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=2e42bf96ac6ee8ba72cb2d0f08ed194b0c19b2b2e6c011af6c2c343f379bcb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=c4737c8af8c6bd401663908146e9af3c61e891a282871408ae38948958643ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=1c229cce74a700cf89006f272bf0a96f7a9471575e5f337ac4514ea73bcf8c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAB5YS7V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCvW2BD4LQo9D6xUkDcaAxHp5ertOZ8GkAeS8nhgPqK%2BAIgQKnCwuK73gmLz8tqoIGbQNX%2BVdaLHhTZsdE5VPQy%2FlUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEmoOaJd1ObiENjo5ircA9C3Y%2BAzqd0tg2HVFSefio5JNg6rKW1U8LHCltfJu3KbKwGWFGK66274UoiiwY2kC813C1wZ9Opg1mqf%2BgkuN7oYef5m6p4z%2Fb3vmYR044h8lwVM8EnPTuFIp5OzbComHv0CtBhtFJdF6x9D1kdAllioWk%2BVHEKlOOxQAZKS66ssarMBQzSey1YpLRDPw7m1D%2BC5M0ppk2ukf9qMF3fnKNDvd00kb15j10mM0UeDNxEO2Ch%2FHbj19T7vlWtbuxyiwu5cDH2n3q1gknM0S9GgyiUIkgKRAw0WrMl5SHFt%2Bwt5Sq07SoE3LWS3B%2FtRerrB1ekvFKZSjoZBim07u4vQSIiZYln4Av09DC5JU7kzkFkG%2FxJDo3Cy2SEjut0USjRCIxLp9%2FE4l%2FIZ3NwKrpLI9FMkFnLaDTso8uSLj1k3bJ4iSw7L9kBdvTVd3YVEu6glY1TKcUiTNisMP2kUHiSdq0Ild1aLGjctFHCkLGTvw4ZcipTcKmXWqApBEKGQZsaw9wUOhESV4KwdoZ76%2F6BvAYLIh9CMzW6n79UTcCNOJ%2F0NHzcCqvxDH1be8DuyIbxHzcFeOC1aZ7baTFb5TXuSt6ZgO%2BPDphBW224qdyerKnKpryamrBapV3ZAlScoMP6BwsQGOqUBTMfVMYqi7saIX5k3X1cRWHdHMoxf8rRJeWXgb%2BmDH0l8r8D%2BRqnst1gpYkIWQUcuMCLkvqR31tPkwlcSclLab%2FVRZ70U%2Fj1H68TJeLabqXIMZnSJiTLcvVPD5Egv4SQucz4L%2BLMhV%2B7IvIwO767%2BrxI9SttpWIQuM4yjxGDh6JtYkiRO07AUF7OPBEPDXTzNAUV43eFMNMuWjnSC%2FqEcNEKflcT6&X-Amz-Signature=88bf5a985a6e80df8c928e3dc88461adc6ab99ab9fd6ed40b30010b6a82c503c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
