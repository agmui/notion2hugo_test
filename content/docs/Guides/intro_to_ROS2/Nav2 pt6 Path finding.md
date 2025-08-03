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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=6c9cc0f173a230c10d6297b503bdcac87342c4aee290d1cc3740e7db6911016f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=98f81f9d224c0d6a5e7a18a5a6a888a3e42fd510df5975d24494ec5be97813b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=9c9ceb4a0a1cfe981ef82c3bdaeac14d2aa310956a363d8aac97eb128621f92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=7c4e4b136e2a390653b5134a2528a5a172c155648e2b962cd61bcfcda8b1e9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=c47fdefb2c1bdf22df47413312987e9c3c6b36d256b19b267584ebd2b33da917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=80d691372688182e4aa8017976cea4cbbd2fbc815b5262fcded8efddcbeac2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=c9ef2d2627a45d9c3cbb37603e3b94b4f62bf01e35db7896e785d59e2850ce98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=3eca8015c495a28f7c676c12bd482d614db2fa8e61762e16decf07b72a6a3511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=01ef1319c4fa13b5198306ec2e200fc48a136e1cd4e9c3fbc29930c8dd642505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=5e82836ef0702647a9452856f96501982e9f74fdf836882c1ceb4437374d0c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=8ef77eb2a887a0546980e53dcc90713d082c658e77dbcddaf33940ba12c0b669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=6f16138a763a85ab8b3bdcbc298fe49fa700e99d7f2fe748e5838d5eb4011e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IKWXWHX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2B2stRuPSI5Ir%2BqbAuixi6JBjG%2Bt%2FtwuuL%2F0yrrFfoAiAD3gtl7cQyWnIkgvim1fcUPOuQ5%2BXreewa%2FTo8ZJaNkCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMH1QTs0hvFG3q%2BCPPKtwDQVGnM%2FsIMk3kHjNf0xunjjnwu%2Fsqg3CNP93UbvRRuEz65SjHvEAT%2FfCywDNm73Uddi67Q8s0WkOGo0Fi6xyQGvVSeLXasR65QEEvkTj%2BvAewtOT87zmAwfeO4z%2BaZ89a64tTZS7g9Zh9kkkkOJqTCeCB5qOo3Kgf8u9pyZWNzE3gEOI3ZRZBsz0MEpCwQ5K6i5uP5pmC9ob0N9moiGWaF77ywiCreoQLNbdyoI0PPO1P595Y2LxScsKWcmVFnmn38U5zNPrQLPMQX5wewrW3X0HF9O3V9%2FyMubsYagW7AugJvN7SVDDNPYHHvwEy5nmSZdK53Mhm7hdvWvroxfwc0JMqGu5qlryZzPVEtqAdtzPEhwKzp1Yrr6gbT9%2F8ZHJzTo3Eo25ziLMDj%2BQEOQsX%2BgjRIqZUZRpMgatY53uoERw9ZUudDmzu2O7b%2FxqiBolHCLuv3jbWi%2BDuIIZdxWDS%2Bu05lSWML6b%2Fp9EfSd%2BOtupE62L0GGyNawKOW1v%2FrPn9XZyrmEAzn1vdnkqBe%2F1hE9QGD84eJLUaeHLdfo7CUJrUxtA6FJTgVGLA0GxhKtlbsAVsVh1go0hYN5XDLAChk6rSlZywRSk1GDSH1MMs61kQZZCwqc0eTy5Ez5Iwwqu%2BxAY6pgH%2BbdEAEwH2CEIdBFRe42CxZ5gDnyEJh9zLIfk%2B%2F6tlifnv%2FsSBn2FspqXqgYt9zDWItCoUnHOlcEFwsMqgnxdJTyxRzlgw0En3Gs4ab1tBcN2M8CMi5p0s1SILxQv%2Bnj7QbMMxNr%2BZ3nGHlp%2BlxXeG8HJG5nyIXYw%2FrrOWmlY%2BnWz%2Bq4IDOnx%2B402eAbDVYoLnj%2BfaScAylv%2FFCTO9vcN3t2OkWAix&X-Amz-Signature=3e2c7ff7176b4345a3d438d73ae9d18ae6dbe7f5c0896bf8dde92a84725be1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
