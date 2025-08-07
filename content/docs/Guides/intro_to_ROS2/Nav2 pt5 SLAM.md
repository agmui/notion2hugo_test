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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=50d03619674de859f01b9592666ac3ab0098aa7377b513924f9a2355f9a4f92d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=30bf5bc36626b3b41c91935f3a455cfef7233e55de647b96174aae18eb261ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=b3946948ab72fa8a73561b69e7e63efc7d2dd9685aead2db77120e6956e7315e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=fa12a6b5cfb81e6f35d73a0c276027758e08d62e2d5766528791ade19b33e4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=aa6cb2ad04e02dd6f1c55133c61267238ef5d670ef13614abe1c868359f57d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=99836073c8cd30f58a6afae18744e9f5f2f96ccbbcce00dd7741a7d3e4c107ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=7731aa3f5210cf5ec3da57d99305795cb3d48f3ab1162bde5f0ece3c980e5820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=40d01b555bd826e3571b841c365f10acfbfe74baa52904fa8c13c5cc1534cbab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=c9f755a9eb7c68cf93b7dd6b02622312820bc28c3a19b6b25db6adff9cf0f983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=f82a024b6a0b31d2613c9cc7e43a19971882a780519d8a817050ceb65cd57414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=ee65611b67f2a24e5091a90f58013ed6c6ebdac02ae933412f3f52c380e82538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=fd90ab2e777c68100f394dc50aff28ca9d3e0e526e7d1e65994b7b50352d798e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=a59fdcd86ad7d7436cd20b0cf6009a5734da40519db2856bd85291f3e847ea0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRXBMF3P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCS78ZB8iVKJcBx9SuEKe%2B%2Fz2fwtwsReoaCcrgad7iw7gIgCt2helDHeL6ZX%2BuPnDDFopLjW0%2FhTPN01OwOgSZ6fLcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWMKu0eV38gVGaDeSrcA9J3%2BQ6r%2F0%2B9AltZ1vTcWpQyaYflE8UOCo%2BJN%2BY1er1v7wLDnlKZj1je%2BqbMVrtGyKinXmmUI4AOBCfgZdwc5dF8uwBIrGwggc9fVt43PmdPuz2UEkfjb%2FaIVb9YnSPK9rTyNfihlP05ts4c9SY0jACC9QP9G4B54hVg2gEEbaX5LDiW3D8o%2BxEN51yZ2lF3qQkRfcrFYy7W09f3LnfxKkVwDeGOgVX8RPcYatAMPfqrRGS0dqB2s3fpozctXuIA1QeX5GM0EkNXzd31PitLURi8I6UkkVH4NGCtMQoMydcv45g1YCHkkBd8O5kGfBiBl1lTfZj5i056i83OKvCrIM%2FzW6MOBfJdV%2FDZAiV5BI8RnDqeiYyqNA3QgCviYdhxhrJvLMhTJ7Q6SSZmE%2FouuS0MXWSjjfnjI%2BDrpDbiT0N%2FIxjb38nja1rJ0jgdCqXTPNDNPYR2o8YFRY%2B4xd868ofy%2FGxKMW0GEONrET%2FwN7JNOpzRLK4gHaU4bJ%2FnprU6wwe6nzF6rLcpARMV9S%2BY6j3NMg5Ja7y8ohluqj%2B5NQ2Gvt33GCYyntUiFEygck%2BjtFDjxcrZ7L2hBK6TJv4%2Fq%2FSi3Dif0RC9i6KbZuaxpw4uJeFMaqD6oKaij5CcMMv60sQGOqUBeBFQPSaK1bNHpXPT184e6JbP8PoWIr4mqEbDNB5f%2B1%2FLG0kiR1vhIt0K0wA%2BgCo4x5TsxExJg%2Bpph%2FRHAjOpTcSCvlNvwgUGFvopuWOelwv3R6vQE5TSZykC3J9bqwoqqMzlvP%2FDwBtWcmUo9QuiBGT%2BzzNDll2mkxDiNQQeVy2P3cxjVFkbxmdY0pkbnyPa7V3RPYCdpDNLkC7XCqtartbtX%2Fme&X-Amz-Signature=6bad8744287a6949d2e0c9a1e7cacd0f9cdc4d2ee5fc5a06a5fb55336fd9df86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
