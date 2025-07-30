---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:09:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-30T06:09:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=3766cf78453cf2f477340c3e30e29fd9d7e91f731949229c8b6cb48f02f2c20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=ab6686fd18dc1dfe513f931f670ca4b0be9386d2dc0226a64c30d14d3ded0200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=f33c9283980326216f8f2a30a7b21de6064071fd38fc2e6a6bdc2b16f8427095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=6d62a5dd35f666df3a4229ed8afd41cda4f039e85af883776966eaeae0e1d466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=d5cf36e6ea8c69a73bddbed816d11ebcaca58dbc63cde71402bd3993bc6f6ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=ae5a1dd915b3454bd5f9a9d7e8635f5ee18e7d1489ceabb883d9ee77daf976df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=c53aac9c97fcdd40071803e3865bf55744f7e033c8a3e155224e2851806281e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=a2cbce7778d21f53d4edf832c8f67273a83bb4fb9e2c912a035cf8dea04bd9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=a906bb59a20649902f02a9d9820c3b240354bf4748d3af10c00f8c40d6cd2f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=124c87e7cef31885b05cff122fbc779866c72d3286bc09817d08a9137c2fbef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=5f18ee3c408ea0d30e8a462e0008bd1960fe29e025a1457bbd51f16179315c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=b9d5921c53082fed7fe963b45743bef86ea11024649563dc3ddb26cf93aeab32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7IHDWT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeX55RkUlSXwAqDEs%2BNioBoZk05ZVd5G2XaF1vtEvswAiA61icy4VBMfeZ4w%2FEUnXjBnaXbByZ0obImxvyf986wKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuR5HL4DCQ5Waxg7wKtwD7dGi0uUglP40laNXhoSfMWAXm6L0iEKzUejraJNbVjdS5xZXu6j8ppfLBvjaRLv3orywbf25AHWTXDs8Hzhf6%2BJ0WZhmnB3cWJSePQt87YphQb9lvs4dj5SSxKJ7SPqwJYoBJIN9aYEHwuvaKjzLS9XrR9kJeW1ypkmxkTbXMjbeaSZWrWv%2BDFrr326YNsTLFkb%2FhLBLzgS3Nv6z68p9Om1ErwknfjM8bfy7y20QSAOr6P716KE95f0YpfDGoUVl0G3V7aiu%2FV91R7%2Fp4iuTcXkWZNj5av0cQKVxlLipdDYti%2FRTsbhsGUXh0%2FD%2F4lpsz%2FXGYdS%2BPOW34B4oBdxUnj%2BujiiJBz7DzCWmj44xv0AFFuDPQXAEas%2BrGwehwskbg2mS2GdPDB5WoS1I8v6gavtmRAoCUz0ZaFhNSaCuxLdCvxZbyRvHzmC02iuEYthmaGfKiZug55Zh3j9%2Bjpmm3SyuA3QJryKhVM%2FdyzzZpNlR9IIupbY3NmsppjQ2N470jxx2lB1Y644sHzfm26dcQ6fzMu3h%2B2jLrgKo4uucFYMAy%2B%2FGaUzuB%2BtmLXXDfFTInN3g6OyipfFeKHTekQPOxbSDEdOgIn63pUsQzheEjxuRWdqw7PZGRQHPktsw59qmxAY6pgH%2B7xrtBnVoWr9vv0rcRa6FKTj3Yit25TzgucNQvgJh4s2MHuPSqlnvv3Bbwdi222eOEFc8S1ZIWWguQfO7nKhcpgHmSDEgEeZaGPksL91K8XtGyl57xOUNrXHckpxAHatGZ%2FAnzAIt5znrnVnCDj4BDOnEfWkFF5DSYPQzsCmF4ZRtAJ9uGe13DQGao0kJtpJUV3McbZdocpojK20W%2BARqZ9n%2Bc%2FTB&X-Amz-Signature=c3c6371ab206333d7b3b3a660e7a6e7258abddf1ac8e42afd234a469b519c701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
