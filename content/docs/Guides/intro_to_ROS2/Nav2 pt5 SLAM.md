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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=76fd1e7db0d0e578cd96599ac3439441bc9a59933daab5d548b09a6850832d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=2a91096c526022b5ada47e722eb311ae61c74bd38645d0654a4aa2dddc78be56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=f92dd2a80d83db187d0c176a145e3811983761d9d5492bcb7b65cc0158efa6e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=8f1d97bca072f204d489744cfc075526824a74282850aed477811b51253429e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=4d63eef6de72e8bb2e248ba9ecb76aa762713b74f2cce643cb343b9adc7bfed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=519433f60e56a3f19cde569ad327ebaf1133525b26e8a9ec5dae1427cab3dce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=a8b66b84b9679668e4496a98d10292e5c3ab5be36812abedd2a446f95e0fd33e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=48601a2dfcf2ce8c20f0dfdf8bb47c9b68ddc456789aff24ca310934a691b7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=75ac028af0f0c989f152e4e0f76a4a91f39de7672991b2208499eac8a23b1fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=ac0fa65cd30ccbdfbd89e8ec4d17a5f959bdc6eed582ad97ffc05e78fbd502c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=e4ac0b9f52942ded755bc6fc2e278f853a394a801fe787c09601ae4ed5aa4bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=15caa873b0a5843599e9e409d7508241e66958a829871cd65491f6963e301f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=4d8a99095fcea74df86e470469ba16f9e9dd4575dda943622c35eb38a47a3052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KX7DKKU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAukVnPhCK52RjZ2tb5uafaZ%2BgjQCv0MKoaOW6ElBGXlAiBE1VBSJaipvPf8zvbfvBmT5NfpLy4xfF3dh12pVcC7fiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu9mvIE%2FwwLQuYen8KtwDjmqyJc0e2eoiYTV1ZTripPOOC4kNH3lHB%2B4%2FyG%2BHYiQWTnYiUZOUyh2xhD1Pe%2BNwYxKv24kNmiXbmOueJzrVyboEJcCCT7Aymk26WjUH3vF%2Bos5uZxYkjR%2BjvQ%2FzUkscFrOuze9GVxjPHcEHd2XwNNj29JHKUAKgaRKpTvNkvmerLTjwzA%2BBpYK%2BiKbIYPirddrbnS2kIBnYkh9zsy7clKR7Yf2XOsHLezgUsixlltGPy3FSDJ%2FNP8agSUM3DtkN%2BcKsEYa8Ux0hom5%2BHimwTDi%2F4zOqZrdbBo8PW3cwMufarbmQtcTEKsa11VKZwqy54MkB4dRgj0Of43%2FYz%2BLY25r%2FShNRQHuv7ZLS7umPvi5ooEP5QTS5Wp2AeFezx%2FgkRpQzCUabUFHhXvbjXUSDhMri0EQ%2FfU9uPlKEWasZirpfdOWu8r91kLpE244wqusMY3nrgE%2F48NX%2FBpQEK8T2hmCUewlitamkDNfiLYiHxW%2BqQx0jtBW3VaEH%2FKi%2B6q%2F4KCLUNZ%2FvCMqBN4CvFkKXxkVuFHWwhlpHsyK7MeO9htdMZTB9HtOsiZx7EMTvoUJQ65GBGs1tsS68ndqiarvSRKtau7UT6WJMW7Ark3dG%2B5DVZoLQu16nvj5Fsq8wvoep1AY6pgFeAtfrZajKX4nVOXGRpFIh9doe2OZArKHh1UXdJEFsDs4UypSLi%2BVBNhuNWBq2V94PnZa2Sg%2Fnss42PtJn02sedyqePmzig2nSXt%2B%2FVxBb9rICdRRABoE4yT%2B2N9gE7i4X%2FPQFUopbbBzhwJtXu5d7I1wjyYcsAfcVbKJ4QtJ%2F8oaHwweZVCx8KT3%2BV%2B5e8OIbbtd04YB%2BRz%2FbxMGERwdtU79%2FyodU&X-Amz-Signature=512345830dd33824aec71cc516be8f3f3efd0d4ce4319ffa1e2baaaf93fc18cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
