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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHBD546%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIC%2FM3rV5icpQQgN8SNuEaC3c3LTGMqijl%2FUGaYih3LmvAiBLti2am0PpGi7dIoZdqYyzFk%2FOcjT1DdKw74XyPTe0OCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4D%2FxRJN%2BcGIqRfu7KtwDecnfocokY9qJ6JvDV8eXLiK1hCf0POMZJgB%2BfFM4vmS2v6fbg8%2BsknzlH8k%2B9x0QOdNsHZazQ2YdJ4uJXVk3iTpaKOCYlDWu9LZZ%2F0%2B1ZCf7A5wEDst1Vef8GJGyncPwZlTA32QFKakmgfv2qaVjLwwDLKmkUKBXctWTiaGLPuckeGDAwexiCNsv%2BPJpCFJ0lW1xxritTLcjwKilEDA%2B2130Bps3r3Oakbhx8ifGd8Mvp7TvFI4JbhftK%2F10%2B%2B%2FqsvebS1UTxUP%2BKKqAWVwMixiWZX8BtL%2BMsrj%2BD%2BWSZ0dh3Fo62mn5URZIbH456TPFJ5aQPiEBUQGL0zVN7eAZcKerJmj7qwH3%2Fy4o66E4%2BDnNxcvSL2Wrdzz2a%2BpbS7Lq2DoUCD4Nzhz9o1NaIkvGWxZtWN4s3KXUy9wiEzDhxezYvPvuUgbuFGew3ENYloEztjB7UJy3jbiR%2FIOr%2FLIwAV3rCDr5bSqyAJbEpBj8HlcUL%2BACgLWMBcxdR7sQLXZ8rG1FFQr1uNuVibj5cBm0cw9dcOe4VxIcJmFi%2FfkVvnb4bf6EcGC6p3%2B%2Fw15paG6r%2FmyzCai%2FB7O%2FmFw5QlOzKRGyP61OIbRxz8Be%2BXnpOyAD0%2BFUi%2FeGK6%2FNDZowtaqPxAY6pgGOcN65%2BZZFmKsYu4XiBSeTLWmweTb%2FdGdZRNxpGPuXcmXF%2FmLH3R7YZSXXWUCWujXe0YYUG4DEA%2BlCcVWC2jdihSJIImVq9F16vsCmQleBS6XS%2BnzPKPqHCZ6ESDqwYZZ%2F2wwu21O6rh2XNX%2BAWxrbhsNFhAgVQCnZjyPjIzJykY9x6UX81SGNsZY8XL5vDTzTUxwBedrL4ssc3lVfCcC6tKn4mel3&X-Amz-Signature=86b43880938e7fc78ac174619ff5a4ec7dea4c19d900345091e92a08ce6e2a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHBD546%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIC%2FM3rV5icpQQgN8SNuEaC3c3LTGMqijl%2FUGaYih3LmvAiBLti2am0PpGi7dIoZdqYyzFk%2FOcjT1DdKw74XyPTe0OCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4D%2FxRJN%2BcGIqRfu7KtwDecnfocokY9qJ6JvDV8eXLiK1hCf0POMZJgB%2BfFM4vmS2v6fbg8%2BsknzlH8k%2B9x0QOdNsHZazQ2YdJ4uJXVk3iTpaKOCYlDWu9LZZ%2F0%2B1ZCf7A5wEDst1Vef8GJGyncPwZlTA32QFKakmgfv2qaVjLwwDLKmkUKBXctWTiaGLPuckeGDAwexiCNsv%2BPJpCFJ0lW1xxritTLcjwKilEDA%2B2130Bps3r3Oakbhx8ifGd8Mvp7TvFI4JbhftK%2F10%2B%2B%2FqsvebS1UTxUP%2BKKqAWVwMixiWZX8BtL%2BMsrj%2BD%2BWSZ0dh3Fo62mn5URZIbH456TPFJ5aQPiEBUQGL0zVN7eAZcKerJmj7qwH3%2Fy4o66E4%2BDnNxcvSL2Wrdzz2a%2BpbS7Lq2DoUCD4Nzhz9o1NaIkvGWxZtWN4s3KXUy9wiEzDhxezYvPvuUgbuFGew3ENYloEztjB7UJy3jbiR%2FIOr%2FLIwAV3rCDr5bSqyAJbEpBj8HlcUL%2BACgLWMBcxdR7sQLXZ8rG1FFQr1uNuVibj5cBm0cw9dcOe4VxIcJmFi%2FfkVvnb4bf6EcGC6p3%2B%2Fw15paG6r%2FmyzCai%2FB7O%2FmFw5QlOzKRGyP61OIbRxz8Be%2BXnpOyAD0%2BFUi%2FeGK6%2FNDZowtaqPxAY6pgGOcN65%2BZZFmKsYu4XiBSeTLWmweTb%2FdGdZRNxpGPuXcmXF%2FmLH3R7YZSXXWUCWujXe0YYUG4DEA%2BlCcVWC2jdihSJIImVq9F16vsCmQleBS6XS%2BnzPKPqHCZ6ESDqwYZZ%2F2wwu21O6rh2XNX%2BAWxrbhsNFhAgVQCnZjyPjIzJykY9x6UX81SGNsZY8XL5vDTzTUxwBedrL4ssc3lVfCcC6tKn4mel3&X-Amz-Signature=060ba86fcd4633bcd546920de1bd88e9fdfb46e790ed58c682bc779136ecd532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHBD546%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIC%2FM3rV5icpQQgN8SNuEaC3c3LTGMqijl%2FUGaYih3LmvAiBLti2am0PpGi7dIoZdqYyzFk%2FOcjT1DdKw74XyPTe0OCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4D%2FxRJN%2BcGIqRfu7KtwDecnfocokY9qJ6JvDV8eXLiK1hCf0POMZJgB%2BfFM4vmS2v6fbg8%2BsknzlH8k%2B9x0QOdNsHZazQ2YdJ4uJXVk3iTpaKOCYlDWu9LZZ%2F0%2B1ZCf7A5wEDst1Vef8GJGyncPwZlTA32QFKakmgfv2qaVjLwwDLKmkUKBXctWTiaGLPuckeGDAwexiCNsv%2BPJpCFJ0lW1xxritTLcjwKilEDA%2B2130Bps3r3Oakbhx8ifGd8Mvp7TvFI4JbhftK%2F10%2B%2B%2FqsvebS1UTxUP%2BKKqAWVwMixiWZX8BtL%2BMsrj%2BD%2BWSZ0dh3Fo62mn5URZIbH456TPFJ5aQPiEBUQGL0zVN7eAZcKerJmj7qwH3%2Fy4o66E4%2BDnNxcvSL2Wrdzz2a%2BpbS7Lq2DoUCD4Nzhz9o1NaIkvGWxZtWN4s3KXUy9wiEzDhxezYvPvuUgbuFGew3ENYloEztjB7UJy3jbiR%2FIOr%2FLIwAV3rCDr5bSqyAJbEpBj8HlcUL%2BACgLWMBcxdR7sQLXZ8rG1FFQr1uNuVibj5cBm0cw9dcOe4VxIcJmFi%2FfkVvnb4bf6EcGC6p3%2B%2Fw15paG6r%2FmyzCai%2FB7O%2FmFw5QlOzKRGyP61OIbRxz8Be%2BXnpOyAD0%2BFUi%2FeGK6%2FNDZowtaqPxAY6pgGOcN65%2BZZFmKsYu4XiBSeTLWmweTb%2FdGdZRNxpGPuXcmXF%2FmLH3R7YZSXXWUCWujXe0YYUG4DEA%2BlCcVWC2jdihSJIImVq9F16vsCmQleBS6XS%2BnzPKPqHCZ6ESDqwYZZ%2F2wwu21O6rh2XNX%2BAWxrbhsNFhAgVQCnZjyPjIzJykY9x6UX81SGNsZY8XL5vDTzTUxwBedrL4ssc3lVfCcC6tKn4mel3&X-Amz-Signature=1abe9a4ba23e218f97c41e5f52ce300be722e23a34f1dde0d5b6bcd9ecf786cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHBD546%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIC%2FM3rV5icpQQgN8SNuEaC3c3LTGMqijl%2FUGaYih3LmvAiBLti2am0PpGi7dIoZdqYyzFk%2FOcjT1DdKw74XyPTe0OCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4D%2FxRJN%2BcGIqRfu7KtwDecnfocokY9qJ6JvDV8eXLiK1hCf0POMZJgB%2BfFM4vmS2v6fbg8%2BsknzlH8k%2B9x0QOdNsHZazQ2YdJ4uJXVk3iTpaKOCYlDWu9LZZ%2F0%2B1ZCf7A5wEDst1Vef8GJGyncPwZlTA32QFKakmgfv2qaVjLwwDLKmkUKBXctWTiaGLPuckeGDAwexiCNsv%2BPJpCFJ0lW1xxritTLcjwKilEDA%2B2130Bps3r3Oakbhx8ifGd8Mvp7TvFI4JbhftK%2F10%2B%2B%2FqsvebS1UTxUP%2BKKqAWVwMixiWZX8BtL%2BMsrj%2BD%2BWSZ0dh3Fo62mn5URZIbH456TPFJ5aQPiEBUQGL0zVN7eAZcKerJmj7qwH3%2Fy4o66E4%2BDnNxcvSL2Wrdzz2a%2BpbS7Lq2DoUCD4Nzhz9o1NaIkvGWxZtWN4s3KXUy9wiEzDhxezYvPvuUgbuFGew3ENYloEztjB7UJy3jbiR%2FIOr%2FLIwAV3rCDr5bSqyAJbEpBj8HlcUL%2BACgLWMBcxdR7sQLXZ8rG1FFQr1uNuVibj5cBm0cw9dcOe4VxIcJmFi%2FfkVvnb4bf6EcGC6p3%2B%2Fw15paG6r%2FmyzCai%2FB7O%2FmFw5QlOzKRGyP61OIbRxz8Be%2BXnpOyAD0%2BFUi%2FeGK6%2FNDZowtaqPxAY6pgGOcN65%2BZZFmKsYu4XiBSeTLWmweTb%2FdGdZRNxpGPuXcmXF%2FmLH3R7YZSXXWUCWujXe0YYUG4DEA%2BlCcVWC2jdihSJIImVq9F16vsCmQleBS6XS%2BnzPKPqHCZ6ESDqwYZZ%2F2wwu21O6rh2XNX%2BAWxrbhsNFhAgVQCnZjyPjIzJykY9x6UX81SGNsZY8XL5vDTzTUxwBedrL4ssc3lVfCcC6tKn4mel3&X-Amz-Signature=8577ca054cefc302c3c81c5fe323a5c089ade58ab7c4f16747f6b42ade54b011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHBD546%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIC%2FM3rV5icpQQgN8SNuEaC3c3LTGMqijl%2FUGaYih3LmvAiBLti2am0PpGi7dIoZdqYyzFk%2FOcjT1DdKw74XyPTe0OCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4D%2FxRJN%2BcGIqRfu7KtwDecnfocokY9qJ6JvDV8eXLiK1hCf0POMZJgB%2BfFM4vmS2v6fbg8%2BsknzlH8k%2B9x0QOdNsHZazQ2YdJ4uJXVk3iTpaKOCYlDWu9LZZ%2F0%2B1ZCf7A5wEDst1Vef8GJGyncPwZlTA32QFKakmgfv2qaVjLwwDLKmkUKBXctWTiaGLPuckeGDAwexiCNsv%2BPJpCFJ0lW1xxritTLcjwKilEDA%2B2130Bps3r3Oakbhx8ifGd8Mvp7TvFI4JbhftK%2F10%2B%2B%2FqsvebS1UTxUP%2BKKqAWVwMixiWZX8BtL%2BMsrj%2BD%2BWSZ0dh3Fo62mn5URZIbH456TPFJ5aQPiEBUQGL0zVN7eAZcKerJmj7qwH3%2Fy4o66E4%2BDnNxcvSL2Wrdzz2a%2BpbS7Lq2DoUCD4Nzhz9o1NaIkvGWxZtWN4s3KXUy9wiEzDhxezYvPvuUgbuFGew3ENYloEztjB7UJy3jbiR%2FIOr%2FLIwAV3rCDr5bSqyAJbEpBj8HlcUL%2BACgLWMBcxdR7sQLXZ8rG1FFQr1uNuVibj5cBm0cw9dcOe4VxIcJmFi%2FfkVvnb4bf6EcGC6p3%2B%2Fw15paG6r%2FmyzCai%2FB7O%2FmFw5QlOzKRGyP61OIbRxz8Be%2BXnpOyAD0%2BFUi%2FeGK6%2FNDZowtaqPxAY6pgGOcN65%2BZZFmKsYu4XiBSeTLWmweTb%2FdGdZRNxpGPuXcmXF%2FmLH3R7YZSXXWUCWujXe0YYUG4DEA%2BlCcVWC2jdihSJIImVq9F16vsCmQleBS6XS%2BnzPKPqHCZ6ESDqwYZZ%2F2wwu21O6rh2XNX%2BAWxrbhsNFhAgVQCnZjyPjIzJykY9x6UX81SGNsZY8XL5vDTzTUxwBedrL4ssc3lVfCcC6tKn4mel3&X-Amz-Signature=5d5ac326a76a1021fe9e019cd5626095584c5199ed22a82902f7c3938f6ede40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHBD546%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIC%2FM3rV5icpQQgN8SNuEaC3c3LTGMqijl%2FUGaYih3LmvAiBLti2am0PpGi7dIoZdqYyzFk%2FOcjT1DdKw74XyPTe0OCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM4D%2FxRJN%2BcGIqRfu7KtwDecnfocokY9qJ6JvDV8eXLiK1hCf0POMZJgB%2BfFM4vmS2v6fbg8%2BsknzlH8k%2B9x0QOdNsHZazQ2YdJ4uJXVk3iTpaKOCYlDWu9LZZ%2F0%2B1ZCf7A5wEDst1Vef8GJGyncPwZlTA32QFKakmgfv2qaVjLwwDLKmkUKBXctWTiaGLPuckeGDAwexiCNsv%2BPJpCFJ0lW1xxritTLcjwKilEDA%2B2130Bps3r3Oakbhx8ifGd8Mvp7TvFI4JbhftK%2F10%2B%2B%2FqsvebS1UTxUP%2BKKqAWVwMixiWZX8BtL%2BMsrj%2BD%2BWSZ0dh3Fo62mn5URZIbH456TPFJ5aQPiEBUQGL0zVN7eAZcKerJmj7qwH3%2Fy4o66E4%2BDnNxcvSL2Wrdzz2a%2BpbS7Lq2DoUCD4Nzhz9o1NaIkvGWxZtWN4s3KXUy9wiEzDhxezYvPvuUgbuFGew3ENYloEztjB7UJy3jbiR%2FIOr%2FLIwAV3rCDr5bSqyAJbEpBj8HlcUL%2BACgLWMBcxdR7sQLXZ8rG1FFQr1uNuVibj5cBm0cw9dcOe4VxIcJmFi%2FfkVvnb4bf6EcGC6p3%2B%2Fw15paG6r%2FmyzCai%2FB7O%2FmFw5QlOzKRGyP61OIbRxz8Be%2BXnpOyAD0%2BFUi%2FeGK6%2FNDZowtaqPxAY6pgGOcN65%2BZZFmKsYu4XiBSeTLWmweTb%2FdGdZRNxpGPuXcmXF%2FmLH3R7YZSXXWUCWujXe0YYUG4DEA%2BlCcVWC2jdihSJIImVq9F16vsCmQleBS6XS%2BnzPKPqHCZ6ESDqwYZZ%2F2wwu21O6rh2XNX%2BAWxrbhsNFhAgVQCnZjyPjIzJykY9x6UX81SGNsZY8XL5vDTzTUxwBedrL4ssc3lVfCcC6tKn4mel3&X-Amz-Signature=df1a8ee4dd88b2d341a3be4b8f17827fb07cc382614fdd650e049dbbd27f2e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
