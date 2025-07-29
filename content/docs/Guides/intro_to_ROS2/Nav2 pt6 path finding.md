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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBOW4WL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFAR0STuZ3PCxn8BTqe%2BB3gx6eDIuNi%2Bnp0ERJqe4TDMAiAkH3tBD9x4AGFN4YoE1NZS4thv6g0I12Yxz4kMCcMbdiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FB57I26u%2FqvNUF0KtwDq32KWfnkZ8rHRhIaGF8ES9BcTh8LuWy9gWof6tTCxqbLboOuSA0YKIJI2ESTftY8gb8tcb7rHbD8LlVm95HBWWqCXK2sLvEWYYI7x87eKiz0Uj%2FOGGr1R9eaRssE9ZE6aMVM9X%2Bcrjs2trW5H1aa1nskrzOCT6xr3bVV69XEUD7O7hTIUu4woOl5Cfwy98vrex%2BZMJmd9BuiiDXIPsMSKAr9T0%2B00Hg09zzG6Lwa02w3ge1W3n%2FW8TnoXsjSdzljWwxDd7p3r4EKsMwCZD940BO4pQc2OYg49sA09Qz0p41STj2lICJcLx3hH%2FQALHyPNSzz8umSCgQksiQJV3XNPQa1x%2BazAvqPTveoe5EL2PTO4mEFR%2Bym%2BegWzNFNrQFtNP2osndE7XHiptYFCTQJBIhMMTkBiLjVL1CJGpae6VoDthTut1X9Is91Eeppe%2F%2FVGyC7jLaaPlCZ8L2sPkucv7MZ%2FyrVXkYhQfBspSXDDiUk10A3NakhvoMECMYqCH2%2B%2B0nn5%2BcdpMakptlZ%2Fz%2BWNPC%2BRDYcR6wpdSKMR5MhbHqT9mv1YCHgahMLY3s1VssihzlN9CoofjCj6CXlmRgyxNWKOi399VLFlHgKkfs%2FLWH7cN4xZMaa0deBkWow2ZijxAY6pgGakp0OiQ9PIbpVUS42h%2BDJi67fi6wktytlOeTaY0FRSr2osdKgqINIR0%2FcVBVDvnY%2Fe6aDtQ7AypkIf4mODX5YH1qygFYoygX4P1cgp2trYeAj2J5lPKc7XhPCHlUokb0T76nAdupfJN3YUJDlAhgBViY3wZ042Bv5AVZMYGyGdw9mYyaMqQmGqvllVQctDnT%2B933JCNMCoj9gXk3fIHjL0NzZ2Swb&X-Amz-Signature=8c10759c58ad1a69b19980f9ee43729024480d1d20fa4b763b827191f060274f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBOW4WL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFAR0STuZ3PCxn8BTqe%2BB3gx6eDIuNi%2Bnp0ERJqe4TDMAiAkH3tBD9x4AGFN4YoE1NZS4thv6g0I12Yxz4kMCcMbdiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FB57I26u%2FqvNUF0KtwDq32KWfnkZ8rHRhIaGF8ES9BcTh8LuWy9gWof6tTCxqbLboOuSA0YKIJI2ESTftY8gb8tcb7rHbD8LlVm95HBWWqCXK2sLvEWYYI7x87eKiz0Uj%2FOGGr1R9eaRssE9ZE6aMVM9X%2Bcrjs2trW5H1aa1nskrzOCT6xr3bVV69XEUD7O7hTIUu4woOl5Cfwy98vrex%2BZMJmd9BuiiDXIPsMSKAr9T0%2B00Hg09zzG6Lwa02w3ge1W3n%2FW8TnoXsjSdzljWwxDd7p3r4EKsMwCZD940BO4pQc2OYg49sA09Qz0p41STj2lICJcLx3hH%2FQALHyPNSzz8umSCgQksiQJV3XNPQa1x%2BazAvqPTveoe5EL2PTO4mEFR%2Bym%2BegWzNFNrQFtNP2osndE7XHiptYFCTQJBIhMMTkBiLjVL1CJGpae6VoDthTut1X9Is91Eeppe%2F%2FVGyC7jLaaPlCZ8L2sPkucv7MZ%2FyrVXkYhQfBspSXDDiUk10A3NakhvoMECMYqCH2%2B%2B0nn5%2BcdpMakptlZ%2Fz%2BWNPC%2BRDYcR6wpdSKMR5MhbHqT9mv1YCHgahMLY3s1VssihzlN9CoofjCj6CXlmRgyxNWKOi399VLFlHgKkfs%2FLWH7cN4xZMaa0deBkWow2ZijxAY6pgGakp0OiQ9PIbpVUS42h%2BDJi67fi6wktytlOeTaY0FRSr2osdKgqINIR0%2FcVBVDvnY%2Fe6aDtQ7AypkIf4mODX5YH1qygFYoygX4P1cgp2trYeAj2J5lPKc7XhPCHlUokb0T76nAdupfJN3YUJDlAhgBViY3wZ042Bv5AVZMYGyGdw9mYyaMqQmGqvllVQctDnT%2B933JCNMCoj9gXk3fIHjL0NzZ2Swb&X-Amz-Signature=d75552bd97d021a45c073390b5a21999d39cf62ed8f2fc04f3b626edfb720f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBOW4WL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFAR0STuZ3PCxn8BTqe%2BB3gx6eDIuNi%2Bnp0ERJqe4TDMAiAkH3tBD9x4AGFN4YoE1NZS4thv6g0I12Yxz4kMCcMbdiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FB57I26u%2FqvNUF0KtwDq32KWfnkZ8rHRhIaGF8ES9BcTh8LuWy9gWof6tTCxqbLboOuSA0YKIJI2ESTftY8gb8tcb7rHbD8LlVm95HBWWqCXK2sLvEWYYI7x87eKiz0Uj%2FOGGr1R9eaRssE9ZE6aMVM9X%2Bcrjs2trW5H1aa1nskrzOCT6xr3bVV69XEUD7O7hTIUu4woOl5Cfwy98vrex%2BZMJmd9BuiiDXIPsMSKAr9T0%2B00Hg09zzG6Lwa02w3ge1W3n%2FW8TnoXsjSdzljWwxDd7p3r4EKsMwCZD940BO4pQc2OYg49sA09Qz0p41STj2lICJcLx3hH%2FQALHyPNSzz8umSCgQksiQJV3XNPQa1x%2BazAvqPTveoe5EL2PTO4mEFR%2Bym%2BegWzNFNrQFtNP2osndE7XHiptYFCTQJBIhMMTkBiLjVL1CJGpae6VoDthTut1X9Is91Eeppe%2F%2FVGyC7jLaaPlCZ8L2sPkucv7MZ%2FyrVXkYhQfBspSXDDiUk10A3NakhvoMECMYqCH2%2B%2B0nn5%2BcdpMakptlZ%2Fz%2BWNPC%2BRDYcR6wpdSKMR5MhbHqT9mv1YCHgahMLY3s1VssihzlN9CoofjCj6CXlmRgyxNWKOi399VLFlHgKkfs%2FLWH7cN4xZMaa0deBkWow2ZijxAY6pgGakp0OiQ9PIbpVUS42h%2BDJi67fi6wktytlOeTaY0FRSr2osdKgqINIR0%2FcVBVDvnY%2Fe6aDtQ7AypkIf4mODX5YH1qygFYoygX4P1cgp2trYeAj2J5lPKc7XhPCHlUokb0T76nAdupfJN3YUJDlAhgBViY3wZ042Bv5AVZMYGyGdw9mYyaMqQmGqvllVQctDnT%2B933JCNMCoj9gXk3fIHjL0NzZ2Swb&X-Amz-Signature=ffa9775a09b6d4a92fa416046c2908c6054eaca7a74c73c8a1b18a6cc007dc75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBOW4WL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFAR0STuZ3PCxn8BTqe%2BB3gx6eDIuNi%2Bnp0ERJqe4TDMAiAkH3tBD9x4AGFN4YoE1NZS4thv6g0I12Yxz4kMCcMbdiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FB57I26u%2FqvNUF0KtwDq32KWfnkZ8rHRhIaGF8ES9BcTh8LuWy9gWof6tTCxqbLboOuSA0YKIJI2ESTftY8gb8tcb7rHbD8LlVm95HBWWqCXK2sLvEWYYI7x87eKiz0Uj%2FOGGr1R9eaRssE9ZE6aMVM9X%2Bcrjs2trW5H1aa1nskrzOCT6xr3bVV69XEUD7O7hTIUu4woOl5Cfwy98vrex%2BZMJmd9BuiiDXIPsMSKAr9T0%2B00Hg09zzG6Lwa02w3ge1W3n%2FW8TnoXsjSdzljWwxDd7p3r4EKsMwCZD940BO4pQc2OYg49sA09Qz0p41STj2lICJcLx3hH%2FQALHyPNSzz8umSCgQksiQJV3XNPQa1x%2BazAvqPTveoe5EL2PTO4mEFR%2Bym%2BegWzNFNrQFtNP2osndE7XHiptYFCTQJBIhMMTkBiLjVL1CJGpae6VoDthTut1X9Is91Eeppe%2F%2FVGyC7jLaaPlCZ8L2sPkucv7MZ%2FyrVXkYhQfBspSXDDiUk10A3NakhvoMECMYqCH2%2B%2B0nn5%2BcdpMakptlZ%2Fz%2BWNPC%2BRDYcR6wpdSKMR5MhbHqT9mv1YCHgahMLY3s1VssihzlN9CoofjCj6CXlmRgyxNWKOi399VLFlHgKkfs%2FLWH7cN4xZMaa0deBkWow2ZijxAY6pgGakp0OiQ9PIbpVUS42h%2BDJi67fi6wktytlOeTaY0FRSr2osdKgqINIR0%2FcVBVDvnY%2Fe6aDtQ7AypkIf4mODX5YH1qygFYoygX4P1cgp2trYeAj2J5lPKc7XhPCHlUokb0T76nAdupfJN3YUJDlAhgBViY3wZ042Bv5AVZMYGyGdw9mYyaMqQmGqvllVQctDnT%2B933JCNMCoj9gXk3fIHjL0NzZ2Swb&X-Amz-Signature=b14220b68827ec8996f23f36d93f36618f7ebe0c30428ee6285f569590f38610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBOW4WL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFAR0STuZ3PCxn8BTqe%2BB3gx6eDIuNi%2Bnp0ERJqe4TDMAiAkH3tBD9x4AGFN4YoE1NZS4thv6g0I12Yxz4kMCcMbdiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FB57I26u%2FqvNUF0KtwDq32KWfnkZ8rHRhIaGF8ES9BcTh8LuWy9gWof6tTCxqbLboOuSA0YKIJI2ESTftY8gb8tcb7rHbD8LlVm95HBWWqCXK2sLvEWYYI7x87eKiz0Uj%2FOGGr1R9eaRssE9ZE6aMVM9X%2Bcrjs2trW5H1aa1nskrzOCT6xr3bVV69XEUD7O7hTIUu4woOl5Cfwy98vrex%2BZMJmd9BuiiDXIPsMSKAr9T0%2B00Hg09zzG6Lwa02w3ge1W3n%2FW8TnoXsjSdzljWwxDd7p3r4EKsMwCZD940BO4pQc2OYg49sA09Qz0p41STj2lICJcLx3hH%2FQALHyPNSzz8umSCgQksiQJV3XNPQa1x%2BazAvqPTveoe5EL2PTO4mEFR%2Bym%2BegWzNFNrQFtNP2osndE7XHiptYFCTQJBIhMMTkBiLjVL1CJGpae6VoDthTut1X9Is91Eeppe%2F%2FVGyC7jLaaPlCZ8L2sPkucv7MZ%2FyrVXkYhQfBspSXDDiUk10A3NakhvoMECMYqCH2%2B%2B0nn5%2BcdpMakptlZ%2Fz%2BWNPC%2BRDYcR6wpdSKMR5MhbHqT9mv1YCHgahMLY3s1VssihzlN9CoofjCj6CXlmRgyxNWKOi399VLFlHgKkfs%2FLWH7cN4xZMaa0deBkWow2ZijxAY6pgGakp0OiQ9PIbpVUS42h%2BDJi67fi6wktytlOeTaY0FRSr2osdKgqINIR0%2FcVBVDvnY%2Fe6aDtQ7AypkIf4mODX5YH1qygFYoygX4P1cgp2trYeAj2J5lPKc7XhPCHlUokb0T76nAdupfJN3YUJDlAhgBViY3wZ042Bv5AVZMYGyGdw9mYyaMqQmGqvllVQctDnT%2B933JCNMCoj9gXk3fIHjL0NzZ2Swb&X-Amz-Signature=ede9ac14a4ee862861cdb4fe16af4dd746d4e80b876371b530714fca1139e2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBOW4WL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFAR0STuZ3PCxn8BTqe%2BB3gx6eDIuNi%2Bnp0ERJqe4TDMAiAkH3tBD9x4AGFN4YoE1NZS4thv6g0I12Yxz4kMCcMbdiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FB57I26u%2FqvNUF0KtwDq32KWfnkZ8rHRhIaGF8ES9BcTh8LuWy9gWof6tTCxqbLboOuSA0YKIJI2ESTftY8gb8tcb7rHbD8LlVm95HBWWqCXK2sLvEWYYI7x87eKiz0Uj%2FOGGr1R9eaRssE9ZE6aMVM9X%2Bcrjs2trW5H1aa1nskrzOCT6xr3bVV69XEUD7O7hTIUu4woOl5Cfwy98vrex%2BZMJmd9BuiiDXIPsMSKAr9T0%2B00Hg09zzG6Lwa02w3ge1W3n%2FW8TnoXsjSdzljWwxDd7p3r4EKsMwCZD940BO4pQc2OYg49sA09Qz0p41STj2lICJcLx3hH%2FQALHyPNSzz8umSCgQksiQJV3XNPQa1x%2BazAvqPTveoe5EL2PTO4mEFR%2Bym%2BegWzNFNrQFtNP2osndE7XHiptYFCTQJBIhMMTkBiLjVL1CJGpae6VoDthTut1X9Is91Eeppe%2F%2FVGyC7jLaaPlCZ8L2sPkucv7MZ%2FyrVXkYhQfBspSXDDiUk10A3NakhvoMECMYqCH2%2B%2B0nn5%2BcdpMakptlZ%2Fz%2BWNPC%2BRDYcR6wpdSKMR5MhbHqT9mv1YCHgahMLY3s1VssihzlN9CoofjCj6CXlmRgyxNWKOi399VLFlHgKkfs%2FLWH7cN4xZMaa0deBkWow2ZijxAY6pgGakp0OiQ9PIbpVUS42h%2BDJi67fi6wktytlOeTaY0FRSr2osdKgqINIR0%2FcVBVDvnY%2Fe6aDtQ7AypkIf4mODX5YH1qygFYoygX4P1cgp2trYeAj2J5lPKc7XhPCHlUokb0T76nAdupfJN3YUJDlAhgBViY3wZ042Bv5AVZMYGyGdw9mYyaMqQmGqvllVQctDnT%2B933JCNMCoj9gXk3fIHjL0NzZ2Swb&X-Amz-Signature=d8be9309d182feb3bd6c92330ae0a250259e21ecd51b7613c1550b220c3b13d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
