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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=e16590ef7a0b7ee901d8d1cf3750fc746f0f720d31fc0b42af74eefd73b9a8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=88dd3349bc21360d8e798904daf20718e14bdc9d2c2fbce4aa51733d911c4a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=08f086111a0b5a389663b5cd3a7d283a2844d45a8cf76b33d6ff4338e0a69b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=ae245fdffa1591ac0f579466541c3c9d33e990e46bba968c21e93f8a2fabe6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=e984576becbe6bf706132bcb12dc60c72d66ac173eede9e0bfa5536cb35e553f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=bec4fcac69bae915439a6ca0096081d7719ce470ba37e8a0374c8bad187a244c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=5216af8c1c51024efbd8a088337015eb08cd23ddb22fbec586b48bd6c3aad14e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=c2be0f13f234cdc3c0421be131d51d8ef70d87335b60271b757d5c3c6d9ce192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=269447fce1c3c75b5432bc38ad0ec0efe1c812866739277ac82f7a71bfadc73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=d22d63a45f988c98bd8937e2f89667934a87204823c1f1542e9731ca12c1b238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=944d55ba53831047483db3580bdd4e34f7ceee493cbda8dd1546ba2e2ff828ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=dec7e005a6ba1363c7c7405821b6de0bd5aff21cecf98830ca95eaf1f3479085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3MRBX2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlAr0Czn5PqaJgkHyl8VslshCf3tzdDc3Bv1VuWm2%2BwIhAJ0zBTG8bzVJCJN5FePHeSKzEt3DqIKRupLKtvXhIly4Kv8DCCcQABoMNjM3NDIzMTgzODA1Igw4w%2FL5oAjdbyKgVSQq3ANCxIU50TfwZt2H8iArRMs6jt3%2FpMKJYuTUt1wca29JP6tF8b2xzhlAz64qZV6SR5BV3DhPl94Kmadz6zTmInB0O8e9u%2BBwtgB2nvnC0kohdefcZ4fnz4X5rF9w%2BzoB%2BJaHRqlPonvmsSjMz%2FfkD3r75YsLUtsD6ZaTkKr3N%2Bt%2BA3AfOBuqoljkPjAgnOOW74EbkxlZkheUVfvR2FzaqWGY%2B2zb0UOnID6N%2BKYHDsiUp%2FwOVi3fgR44Jg0wOvU2M8wfBEGhAp0civf2iAsP6pUoD%2FjdxB3MgxUTz%2FsEv593kAECyGei9sONUHB9kqQsfJxl%2BMMiutE6tsSnXyopmk7a0mSufOLyfQHU34Cu2RnwA%2Fr5T8Pnufx7cO6nvvZlD64LlIXB2fBuQywGyvMmQpRDjAAYiM348IakDtXfnTXGs6JW6LmfH5SmJIHuJzf2THtY7xc7vwSjRuQH7NpD%2B%2FOuM7Fg5EDgo%2F80c5BZHiC5nLhETQv3TjiSWlBeM%2F0bT99LydkssS7ZjG83%2BQw6v0z92I6GO4GBphX%2BNkv8PrPgpoc%2FJ7eTITTyX%2FAzhi2%2Fb0916x1XLl6IfVArOEBf4MD5EJbvnIlyLbC%2BoYYxD9ExF0hZeZbl88L%2FjIR10zCq0fDEBjqkAde1VVX55NH7DqdJDCD0%2B6h5p4PJwhMlpH%2F1Yx0SVCtt6iXAXLpNioB%2B4Tmx%2F%2F4w2mhhLQTrhPDClea9LG2qxbLUEYbL9FQz6XyYgQM5LwsZaPgobMxcJnBqZuyhgOL1F0FP74gTky6tZJ6xa2Aq3U0wJ7%2FcLmXqmbjdzynzp4hJaru1aKlw%2BGCTKZzMeQ0ICiol%2FmfKj4Rf2YV7q5AMwBUth%2FiP&X-Amz-Signature=7c6efb30c69a7fc9dcf71f2c27cf774fd8b46a12cd66b1ac22cb5eba04ba12eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
