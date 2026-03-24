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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=b97fcdb186e13b1f477778b1da6f1fdfe4afab6ea40a2c5665e4fdb20fb9b146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=36181ec8ca8e8ce57c3bfa19822720ebd3a2d83adc5ca467efed767592473a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=0badbd0025282eaf689a84545a2f2b8681ded2945a05e3d6b21709ca0ab46b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=0a5dc947554bd63871d7fc668c399299c8311536d68bd21b310c1bf5828520da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=efa91fd6d8f723499990a04c0ba86da51300fa14b7f035fac1d63205c4f7310f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=4c4587cd7a1b40ec5058ce22438e1ea1626f477fbac2e1178ee05e17f4c5d962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=7474b342e734e6f31b5c9a4cc482aad20dfd4ed19b7b27f042326541f1abeaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=fb7127d85441e526ee3a1e0170ae0f3103cdaae1b6f0351846553326a1723ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=8d835c4e3ba32749f27f75f0f085224352bd59f7f5f93aaff35d4a6299dfba84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=daea2c61c4bb46e6b1efa75d8e1209ec5c829a623be0e02dafaf753aa42effd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=62e3bf570b3bf67f14c01333df3773bb4ad7b6b8b46e394d12e4a1335cdb1c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=b291b87c76acdff2ef684e93e621172c75bf4ef3343bb1ee9e628f0b68e56092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=02f391d5707817f0db1a35d5907e50299dc822e8c3419888dc8630521fe80311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GM63IK6%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQsUO6OmUuoao0L%2Bvb%2BguSlwZ3EYc89n6%2BKBy2xxxRAAiEA1FynBph8KimymLbZtEP%2FwNrRPPdcDRyIOR62lkhC4foqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2KxUJxQVT95WQBmyrcAxEHNNqebCF0EhC3WCXKSO3fvcfCYfr1DcUthZ%2FGms2wdj2zPVh7%2BIwcevBYmYsdwsUOHOpdoQbNEW5nZm9PMiKL14%2BAHbKALvineJOdrTcpyX9gjtL%2B1deiv6i7docc3LaKaIZmujI8HXxmEPPNVZx0lJCze%2Ftzf%2FiAkowbuqL7HxMp8Rf1gvpn6o6Mov1zdVccMNlbjcgvqHw%2BnvTYoTG7keMnGR2mhM%2FkadNbM6Satzd2WVbZnXxtmDEzAX1oO81sKs6s%2BWaOmzCk%2BBOKBsUzS0nPV0OBoFiJ2MRU0KGR80nYdUsYaE5Hg4YQ%2FR9NP1KUdgVjsRZyHhFCKImVEgv4%2FGQc0OSDYHTh7Lq68n8LzJssZsGmBkQiXK2aEt4Of%2BhZhOpeJIfo8%2F0NtGLHRdtaq%2F%2BnQmU2hTRHlRO9UBbbJ7Akr3a%2BcdseDUZMITwFW0%2Fp0vwVwoJPG2rlaMS1%2Bgp6WQXswVCEU50tDQz7r4vsEH7rTfeIDvbmuS%2B%2Fi%2BeHGkwsIbTYnOKlsSjT9A1KHbAr%2BbONrid7HbLfNfaPxJd7qNDwUXnfjY2ETECKZTJ4VbfQwLuKJ6tqNVqRQNqnSSEiu2HiFei%2BVOD8rySLSlARcH22lCkGm75k7RmMMKTIh84GOqUBJ0KjwO2Fwb6y7fEsB%2FBY1eKLo%2FR%2FVuoPCJuZ9sM2yQ%2FhhS3uO9%2BbkZxtan7tTaoGwbZlERGi1DQ4nUwZ%2FUcgAwolzM4ND67XS7TdtsHc3enEpXqYF8a2mRuD5pfWbK82RYe0fvKrv6CcNMIbYCLFpr1seNJGDK%2B1WyKprgUW%2BV3XMMwayNozV0Q%2Fc7XC2%2BuxcTB79eIvjeZmVFZXIQWhbKLmAazO&X-Amz-Signature=45eafe299079a16ece306cdef96bc5b310b28f8dea4aa5fbd30e1384a34a72a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
