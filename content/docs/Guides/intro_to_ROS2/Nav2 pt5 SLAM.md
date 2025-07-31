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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=fae81c1658f2ae942c3b4f2db0c9fb5e43bee7898ae85d64d36c121c7cc476d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=e84ecc54f534f56cba45aadd74d64d929ada5ff671f11f1b09cb914ab130db0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=3434afe9daa15a0735e53718bfe2e310bc700fba96d43ab2b58ab393c294a534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=9f8477a471ce99dbd896d70f7826ed3ce640a127a7076d79d083e5aa4dac968a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=37ba573acf3744796da3d249339ca89eeab67ff95b5d2e6c51c4d0487e2c295c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=f319cbaea8f05bfc568003b90e74d9fd68ace42f4bdd8f16434b1bca62898543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=ae2ed09c72f9ce5a69d16c347a0baeddf2a27f38a3901b6a32650d302c583678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=b467b4ef453ef7f2e946899ebe5132b8815d9b23b8cc7e4d6da0db1c8de128ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=f0d354e060c239e02450c03176bb42fab81c7259a4961815f115174650d3907f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=d7920e79658a02789da1aa632ef90af5f80ff74757bc94ff226e0da9b87375e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=06d8833f7a05e4fabe8f2b92758b64e4e5e985c0c3876e366a0f0cbc76270988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=d3f1b46c76ad2db091adb8af63c0c374eaeb613883a6bcc6870135ff04a37373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=fc466cb20c3d3d59cf05ba647ec19ac309b27d345ca3cfa8e6e7ee7ef255d4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN7MHFK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeLlMzZQXxz4jf4LSBGn4VP%2FszA9g%2B%2Fm71jAfHg35tGAiALDA0F9vfgXolc0vSm3h4lOIbBZ0XUN8LJUSDkwbRAbiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6YgGKCgWcKzvjdm9KtwD0k%2BUGHW2DER4dcct45XnShx%2B1q66JIZiscLSUO8u9u3a6J2QhAb6PdtdfQ0kSZ2INkl4EofozHDwVHITnZx4XP9NCL3k4YqqgCnpt4MuueKDC7h%2FHdH6KuLbQhfwBUeBKiC6HAiIQ%2B98A95e7IBKZI1aoBrFb9JAbVZlnU1S%2Bf1Vrc41Wekp5Wx3oih%2BSPzND7CM7qBe8gAUp64ug%2FHaZL7aXKLchfs6Ad%2BPNp1nGGlCEG68SXgvDRZVV%2BCSv%2F9Iq7eooN2SO32h81eHJ5ZG7ylSV3GxDqJhyL948IO7tcjlFrs6B3Y0UYuhLrQ13YaVbi2uMOT7g96leXnpqNIrfZSR%2B3NxR64ZXsY6RQsVt6LA%2FCdnukWfO6zAIvf7cmQP2h%2B%2BPkPbQ18XciAjf8VJNJJQeqKp1bZ3HLpu357WqK7mq9Pv%2Fy98ZzmiQt3kScJ%2FXEXZyb43Sqih04apaGQiqwb%2BLiOq%2BQSJKk%2Bxgw%2FLGjicKsbG5%2FvlEHsYGRr%2F%2BJo0Yp6DO7P39rzKm4%2Fbp6YZFEUZzeLZk%2BkJtYNqdnEG2Qcg6UDNLnoh%2BcaF6hXTl4qi630u4BTrC136Ppv%2Fcb6Ihp9UOUUtafMmCuFPVhCQNeQ268KF4LHw9mDp62ow7Z2txAY6pgG6RZ6gCDnMmFUjgS4LsznFtBz7nRzzm1FBLrIRBBtMGicV%2BX3ic3qX9Y9rrifzGxitEOEw0Z%2FWs%2B%2FRtgGqWIEgVd9CNKec32dxVrzjC97PNHFtw%2FXqkNQ989r99dira6c7X8z456bGD7hUmshUWpeneFCNkgUXOSjwBBs7nVXHWvNssESPwgLsEb5MS%2B6eOJqmhR9noEgQLZ%2FkqiN2aUgH9aWiANEU&X-Amz-Signature=fb5c318269e985f5a69e0d2f8a3766d88667b945e442ea2eabd8cba3c0a7a6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
