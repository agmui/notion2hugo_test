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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=d0bef425354e4db5c2f592526976796adc56137aa719b43c6668cc3af1f67198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=a1ad595ac1b4adb4eaf03a0a820ca308fbed4818e45bac5cdbac555b4beb57db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=23e12c98f6bcbad87cd8243927b015c27f2e31e2d77879ee0978992f09db48b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=0f42c1d12e4b47c55324c48f662c5bd50e5a3f475590941513dd45d82a74fb1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=6c4d84202dd47bba98464ae4fe2516fbbf04e9f98635af668ffecb1278c9e600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=71ca9ab936d787c66ab9815efead7c1832621cc89203d51f4fcdb14aa68f4e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=cac938b3063d31d7c58ad8975d027cbee78be709e9e9f6d478ab28f7fab73697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=9c7f1af16cebc377272d610c9e9a6501a9b2b46948c9299d860493c291f7f7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=b8e3c21284fd6062cce327bb442ff32f0fa22078d1cea4f02127e0eb67377950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=07cab66203a930a1030cec627254fac958f092958daf3a5709d3fb7ce86f1f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=03608f957c05ea7103e28e146abb471b587e350a39ee749364afdeec11bd30dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=b21b88d454dd6f16f5003e2c965571c72dd0ab630555eec7eea12d705c6b5b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKFZ2WW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5yLX4hqQKPdi5D4VcESdmEdKG31SZyB0NveQzCSU%2FQIhAPen1zjqSOXZ5lVysginYa9oLmHGFFxrHTO%2BDzPnEyXTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwY%2BYrrMB8xVmkMwmgq3AO0%2FkA6uuuOxooW%2FQ5c6NarsBa3yu5F3xiiWCF%2FNVudmGEe2y7j8ALKlhpQoWSOh9LTgMnyqp%2BSA8xuQb7b2f7n27MF9%2FitjzIbokvBSgaLpAkWQo6vE4oBOjb2e%2FBU%2FfZ49e4MGCbmYezS5rvkOO7yk%2FjdRdxccfPzcdZCuqIJZU%2BWRTSeIblsndCRvpBKCDSxS0qnBIBNcLwuMSFKblq7iJ1U2cnoi%2B6u%2FHa1jeBFzvRRHq7ksD2BZAccOYov9EcDXlrnXa0Xsi81ItvzwCrUwVSMkr1DmbH%2FznTySvUmPz6vkXqRvpnJcWl79BIka3O7QTA8QudxlwzC0FWQQpCoFy67DNEfBx5Nkx48Q7CKU1R5Xy0MNQt%2FOO9y06UlHRhJPTSiMCtjBrYml%2B1yaIzQXnOIOfawjWiQtxWqPpgY0OLXbPse59uIXG6dbrq60QocNbRx4LTfDHM4KgLeEnIxJkooMSkAmfCWq4inkDt4AyVB2hrTq5WNfkfn7XAb00Du0pltA55MvjLqYdoWuDS6XDl8DTlLP%2Fe2YxSMbYP2kF6johrP8cCsg27arJQPX%2FGDmjJlz3GT7zxMhVKC0MTOtBueOvntBc82B3Gw%2BhbsNqIbsw8%2B%2B5n7hykvWTCy9t%2FPBjqkAU0u1EBzBiy0VE2ORZVPdlXGrikTTmbxS2IahGo%2F7xuV2mYigEEurfTKx9cN%2B1uWObgYvFepKYn1P6H91o4nQFYcOUAtd4pUEqcmnizHmDRYEsT1mX7TrBg26v8Zk9wBLpZPPmv57eaoB9ep2ya3vlbU96wdmA%2FM0X4cs7Cx0PCtR8nO%2BmXhc9TKtIAZ%2FsbBADx6URHtcIgutJud4Hqd0gO9fnni&X-Amz-Signature=896c02b3ac62dedf4adad1defa8380920457f39757cd64053e711a093c2bc5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
