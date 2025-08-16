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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=81f44fbb6d5c063bdfdd957003a8a3c82f6620e58749e2652d59a895d10c2b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=e1b66a5aecec7044fc9b68b2127982a61ab8b6810403ef1c1b8efb0f29c28cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=6befbd59a1d7f300cd926b8285f73ee49f53c16c9546dfd6ca6152f197d03968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=597d86bbdc692c60167074b42df7cd33b1698980673ef62dcb8a8afede3e033b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=9b2b85c4822e638b4493d161a8493c4d0ec26b8606679d61ffb0bc8d860bd009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=7c8668c40a10e6381d9a5c6e39c3d9e7562678968c846fe63c847774125f8caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=470319edecd56e5efd27fae13c9213260444286e97476ab21757b48cdf713bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=62fda8d29c7ed5f026a223f3e4ac3143596a9f9d711844ca86c12cb470c087ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=ace5a6e06a428e426af6e1c1c23fc7218e96fe759fb1633cd0860bae0556bdc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=bfae1f051590a42a0201e1d110503605377585f9863b627106ae9a47d0962a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=26141804a8d17dc4d49a74175bdfc242974a1fcaecb4f5f4bdf84ac8253b9913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=dfe191f89a37dc3efceb3a84da12d6526c181407bd9aecc0546b65a41e03b78c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=6b97c79b709b9a227bef892ae66e69df44cb112d5b7a84af8190bf3cb0fea53b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6M6UC4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFFHGk7MSRh0p9p0151SVeAY0JawldmyfJFARdM78UoaAiAY3p6ZqS3wZiEKZxBzcL2vKzGOmuIvLH9KX11Ufrc6TCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMBUJk74xyVwhBH1HmKtwDhSLP%2BSp2GhPcG07cYlmGI1PBOgOYNCx4S%2FLs%2FRihQzxVHvCfeWwBUG3Aoy3xj%2FELAzOnFJpYSm0M14mc%2BswaG5WndSvqgZ8QdOFoNQL9gRgxitP4mex4KIR3WvY6dlB%2F%2FrAnGf71WqhNsL0xeAH1Qp5JJChaI3DK3xPOvg57t5t5D%2FwsPQ0UC%2BCZfPs%2FsZVd1Q4w8gYhKB%2Ft3dUJi90fpsw8Cn5hCHpg1QYN5PT%2FvtHNaxcMkoNnbBDYEHX1vQR%2BMQXBtiYZ9O%2BYSQy6WyyxNvY1FzVeriBp46eW2amf37tRFnz%2Byr%2BRWrTlAmLEvGWzzroOA9Bi%2FTGTY6NXTBUdHAVxmk%2Fv1GDcBOLkvRRtLs2CBDMoYEyDA6Bx3GSiXhheGBKxgA3q%2FyWvNDwF9bmG1dkSmMUx8k84PQxk7bpT1RAMrmUDVtfipZ8R6e7TxHBAtzNaLK%2BgZ2lk%2BJqvHslQHAe8nMaKolhfC3UOAC%2BUgrOhNL83h7g30w9A3WNnUwrHkir2C4YLBRaJEJKKjqW0Sy1lUVKYVQWV9o0xUca1pgA%2FZ16nDY49FvC0SxmIddPjOJI1D3gAThoX2CqNu3XIIQ89sDIYpjmYjfBwK8bKbG4DQn56zcVJnfxIHOEw3uP%2FxAY6pgHz1VOFV5IbS%2FU%2FtRTD%2FZeekmDy0IuKPZFhHqScwhnaM3Z0DFqQwaAjcQuIGHcfTcTDHqfnZFePjduolfhAoWnbS82kn37cLuGr52Z9nVmpkvGuFPACMO602b7n63dgdy5XFvCwh9rSBpWxZGJwQLoLGQetQmlPCrfJ0U19yynP2GVdnqIus4jNoAM282aG1Q7hn4y9jJ65AgyXcfnpOn1UZjJTbP1K&X-Amz-Signature=f5966221e0c65508e41befa47b9170a19772b4e2d7df5d791b6fdf464eda6aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
