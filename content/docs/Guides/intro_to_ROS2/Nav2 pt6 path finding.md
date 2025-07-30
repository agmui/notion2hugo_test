---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-29T17:14:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-29T17:14:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=bace0d069dc46c2b22be8b7374986ef50c97b960e7c5fc9a2ee0374326cb1854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=58f14186547e2def07be2c48fdd6ed815eb27e8b1fcbda3ec3f1446cb31e04c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=dd1e0f0b6cc6c6edeff6ad0d955176999962a58c4ed3d18fd3dd927cf3d7072e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=fb960eb6b4dfbff7f73458c749f87d1b00cf7283227482a4bd7837b9b01af830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=219975d552850e27c14b02eb3ad200dbdaf1f8ccf6ffb519b4c4a4bc58f87ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=bdfa0b6184e486a8fc1957690cc3a056a7082ae21e2f269be48080f93296d339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=dd3fc6a71194eeb3c2d17061258d3c8e7a91c3a3c996849994cb7014faa543ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=2a506c061606f37bd3493a49aeb767c00b4300f5a7fb4a049ef44767bf0bdb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=5f5bfd43f4053aeee8fac26354537421231b22c41762cca8d8ddc2d5736a9376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=7f9a52fad7b12e6946ed9867b48d9e8acdf0be02b1b08a0c7b15709a811456ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=72c556ef67757cca2574cc86e4450c81d52e9d7119af94298071303bad25419f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=b03893fa8aae805e6383265c38c4cd1dcb45797a13fc04fe87ec24586527083b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MFB4X3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtV6kLfvOoWG%2B5Xq8D%2FVd9X4gLySsEwTfT2oG5nziZ3QIhAOl%2B9KTv%2B%2F9CbnpHigGEpoPt22zL4AU9KeDCfJ4Z4UyIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaVmrhd8PybEIIlRoq3APFm9m1O0Ft95dFW5LIryXfl775vXFwMF%2BrIu8nnX8YZkafi1h0cqoHBWB16hicUfPLLl7kG6Fin6ddg%2FUVuWmnn9DCj1QxfLBVuSwiGCWRLZOVpUx4vC%2FzQci4%2F9QV5i7AJashfA860Vd126R1Bkg74dlqh3ow3mEswulJtka2m7rFgetuUZD%2F3XqoyL7YJNRRcLC0z3b5VhurXuJoYhKu9mvY%2BlZO%2Bp4%2F5bYIOVPShxlwOs2IjqFQr82envlWU2YBDkEdYQCXbQ6hHnU%2BxK4TzkgmJom1CYI2KWw%2FPBA0APWcmnSfcbI4T0aWfCsRSlCbai7MBZvX%2F2rdggejMI0aKT890RKqvTN7ZwdHmUOmv1ZZYe5r3BzfOVGJxtmd5IT%2BEYuWZYdhWsJEvxwZRpBydkFi74Sh8Svwo8%2FibMNbbZUyNovxyKuCTNNGaqooP6hgXy3UOYhQDK1vlrQuJhDP3sxLjKP3dOSw%2Fys%2F7bd%2BTJ2Q%2B7BrQ1N1V1t9rzB%2F2FdgUfBS5h2FGu2OKm9wfnqz%2BezmmsRcEKPMTVp0JsH6IaXqXNz3RnNzoTDR4PxAFJBUycxOCuoIGZTwTruot1muBMWWCo157P2sPSi%2BHfQMkSvT1mQq58ScsVWk8jCE8qXEBjqkARmhxgxYtOOUKYnQwFl%2FKY0V4nkQePsvt%2BzVzTCOG7bVlh0PKwxLC73POGJBV6W%2FQFWlWb%2FX8pPKFmQB4w3siJXW%2FR2K%2BEGN2oVeZOPDWCujRUqBE4XZqSloQDQW51mHJJwrfnmMRoJrekN7%2FvPBIX13rTHDtiT7E%2BaqU%2BiZmyo%2B9lkI8sZTNsGuKU69%2BzRbaw05ea0CZvQRqtzPKDq1N437e%2BeD&X-Amz-Signature=a72901e0011451c80cbfdaa8371f11110212ac1c05a6153db6731781ab9e91d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
