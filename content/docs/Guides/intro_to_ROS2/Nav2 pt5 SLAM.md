---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=fb3f8efbae6012db1f69b12d8be78689b1f319cbddfbfb15ed7c1ae2fae0ce5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=7d1812da225fa433b7cdcf0385677640fef8bf1ba025e1e7f1a5ef4870cbfddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=f23162715523158cd6934c1b128a27271b5579ab4d3f861f27c5dbd076072619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=ee430a02336b75651501c943ed2e20d34708677520e8bf15a5d6c489eb7fcec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=38d7a5d9511e5ae2a906ebf627584478f96a76b603ae8d324cee621531bbf2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=4ddef4f915e617a796f5862a03f99764ae786835f35cd1f721d5b779308e36d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=31397287ff191aae5688df1dd3c8b9a62a274df66c87a849abec1d2f325e1d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=f06ddde05d504479a988c58676aaa93b668603f755b4caba7ad026192604d04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=ecae998afd12bad9b8750f976e9e774b51848de89a496dad0cdcc0769d1479e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=6672e252772a947fbeda9b53955a86f18f523c2bb3a0f6bd84d94c634d4ad5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=ca5a68dd8c905703eefee6e9d23c23e08810674179e815a02660725bff24cd99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=12dd276588b0d58e4d741c66d9ab68939487c843d9241b00e6a5b06893c99bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=9c380d58acd1355d4325d38363c3f5b18da19c17557657d0348cdc27c68ad1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWB6KCC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmtRdHRViHBVbRuqPSOKtN%2B1OI%2FeExmO3DPN51pWGqQAiBs39AeANcUl4FhguGR7kmvPJ7wJJ7Z9LrMxC2PDCgcNir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM6sbPEoVihjp2S7C1KtwD%2Bz57o%2BQXqD%2B0LjT8El4TV65oMxNzGNBzrz4pFm3NMnwGFRJFZ68PMXPbE1lh4X7wrB3nho5Bp9nj4huzlaBXDTIT0DyEDs6WuOZsXHaPfnhj%2BxQicyFM28qlGQDCB4u2sMGabY0jIaygSgfMYEetRWZdZKRcDXmeKc4iHsUs2MgVV1l%2FDNNuHHr4YJqcI1tET9HS4rQJcbxw5I85CQWKtu6ckRZGfnunhViiirUfZg8PQS3l4ib9P7QwQaaTxhGMUihELG4y3CAWRD0EyWaBJiUnDilIifGMnFjZ6ruFYgTIr8Nhjbl8XqkW37TeTLxPwbavhmmSNo1L%2BvYsuAK1x9C0KeMib%2FKyNe70gxTuEkFalfw%2BojWJszvcU5UP4MvoYZr6zeFR%2BY5Wn5R2ZkHH1a0aNFdGtFGs2LdliBnJr%2B90m%2BZM79WPKwUBJrdz1X3yRJpS4YQhCec7tnS6KSm1wSnAH456Ekwd1dTSwdLJawlgolqC18XrmIpSG630b2l1WFltANw2izSwonPL3cQ97PYcTmye4ALHsTUJtNWq%2BOl2pmpN%2BKTsbl3GB7f%2Bj3bhgsHCWRq3QT3wC1OHuHhnxYvmQhzbg1K5cDRpo8SHlIDA9L84DjQxFeSxbN4w0u%2B2xAY6pgE9SO6rOhGtv6R8xAF%2BvJK5oXDSxDp1cCNmsermrw%2BVwsX2qd9VO5%2F97%2F6Sx%2BYSwmNxHgYFk%2BVHdtYupFmbuEZjYPGA2nuRqIsn%2BwdRsHRdY7eZF613%2Bj8fMATXJey5ssFehYgGiyCUvRWyV6zlF3XZVl0G3YuicgpsXAz%2FCrm6mVECCj3PUvRi5zB5zQ7vPX76%2Bb%2FMR3Q7TE6lfCn6T%2FO1Vflosi%2Bq&X-Amz-Signature=5814795e100461847b84102bdca123c2c0fc92dba113f0bc903c926bda55e706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
