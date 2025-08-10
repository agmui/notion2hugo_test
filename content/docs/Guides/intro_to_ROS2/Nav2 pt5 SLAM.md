---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=5a5df6edcde07c16acda243cd0cd6a6cb98a635925241ad013fdd23a12497be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=1d01335615f966fbe34fe2f283380404b1e2dd109574b244a8358284595d00cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=68b31e67044d0cf2d610a66d29f04338ab1e1db9a27732e4f473d41b68c86129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=14cba6d0ccd06da1a168721d1057a1ffbe98edb1796dd1a42b230e45e689083c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=1e507e754292419330f4c0392aa94273ae8a880fd752e8de9a6a3c87683339cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=e1c93e020cd90150d4ccad7cd323e5a60589a31edc88bf226bf50d087ad49b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=4e4ef2e56f261d9b87e026a85b726e6453fd45c6dd1997ffde73a5efdc913da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=ad86e4950a1b68fa5ae9bc6976edd1288bf39e394830f5579e58fb562dea0b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=0c6e26abc26773b99f0c477ec8ffc2b026ad843b05f46cfbd9c393e48547e7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=95d149739b8a86faf54aa0a765e72f147effbbeb10d549403365fb8da061fca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=9855fd1c75a8cd80988b4a6aaa1916bc767f3dae42a3ee4cfa3e268591dba60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=369bd3449e95de858b0848eb92abd90035fcf4e6f52fe593a95a55eae8a5f3b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=bda2522d21313b2ac6f4972e8ace5187c24664c82ecd8dd0094f1377e07455db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGYD3E4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXdyjjkurGRyzw5BnQAlhqRCjntNE51qAdg8Ds%2FBsQlAiEA16Zbhem1drLvflCj6olrlGke8IX%2FW0%2BM9rPDzEPOJuwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL4BrQC9Zb9yF%2BWpCrcA1QQ8in0AJhcvlBQQRUHiwJpoecU%2FEVOCaWupoqxzrjhEp1AzjR9%2BaE2l7FVoXajqvOYzdZDjW4zDLEpy97dEZYIcX%2FZYrDPY06wHitMPakq%2Fk7eSPrkNHHzzwQtz2Q3IKmX4ghZwms5NT%2BSBndgk0g8liZl0nmI57MiVbLqFdTwuCakv6LbjCvS2EuuAnTF24NvfUIJ%2FarJ%2BEZSmgXk64Nvj996EBp6GtDKLsCsPIys95Z9WDGdb3tg4TZtMZJbCi6%2BnmbANyOJ2zSdj0qxA%2FuTP8zIxW8%2FKp5tY6LoHOYTBVtLnwMrWrmgE7bzkayqORxblo%2Byk1lo6wRIdBixJonUd3PW9YNNMOVcYAJDDyOnXjY%2BoasYouyt%2Bo%2FAEAyHf7J3Oi%2FhG14W%2B6BKCkLpXsXa9xR3SFInwP6QVcmJI9mm2m2Bul310LJ4Vt5Ihq8a9fbCilqTKfNBiKrV9QRefZtGEnroEz7wWZQgeZsJbrnC1G99tlbOp6UWXot4sVangsK76e5%2Bh7rnQ07njkXDi0%2BNf2vhFJiasOGafN0S7ir1qfruAetf6snizblOsa4mxg38B5fhsP7FeJBjctmNb1csX9NpDPWaOO9OBRg%2FxrM2iQeNEfkt9ToB03w8MOO648QGOqUBIzXcFC8%2BeM%2BG0I9jWM5IC%2FwhNZCq1kTaYrN6rsX70VmVRWtjjMPpz0eBIJ%2BALuxm3VTUjJBzd18aiDK2p5AMCzJP7lr0bk7vPlbczCWJdbAHpKk%2FSP0WlSBtqrxRbaOPH1wa1HAJBO9zGO4YX7KgnuI0Dib55LY2yUia77NRTSVBGJzMhmjwvHbnXDq%2B%2BR3WySEyi2b9oQl9scPLmy%2B87bM%2BPKc9&X-Amz-Signature=4e6aed2c40c5750d2e85662d7798cf8773d45d9823b3723cf227451c82136a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
