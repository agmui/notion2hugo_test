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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=7911762974d3024b99460507645473d1cba4620826b1f721844ac1a490480594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=32136a8bf71134465f4456c852992d898ec797a9b4fae005267b687758825718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=d09d6f6e97601cd141ce97b2f236c18d7c7ab097f382df684cb8ee628a50e0e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=94bd3a425848d051ffba56f92956e4d3e34e4b034b591f1174f74c91246a1b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=4ccc52c64a099b989548973c0d7cb69c8c9229940f0adb952e38c8c89e3fd468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=42a110eecfca05425f705041d47a9c4d1a1861b16b89a738c729929b7e40fa33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=189d194d28330dbf60c9dfa4d47677c6f78e7e11604697ce6d79cb0b99b6c87c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=b8e7655d72827dbc6e6f7812c55034bdc9f92417575ab9f14e007b742135f346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=7fb352cd40e4c993467974e2331e9b6e6b134a2df8091ea991b61d6a6efa0682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=d61f45cbcdf4b0b08128c932c5de0366aa6a58a101abc8c1f524dbaaed668090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=3caa89df46892e029e305eb43a41d493161db1c98c57575a54cb7f2382e33fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=73470b145909298205da2ea145961de0c15ae67b8f898f32f6564cf527732499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=74e23ad6e3553650213f19cde1708a5da65a3c975c4c3921f631d07e987a278b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFNVCJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoStBSApPUtE1DHgSQinoiJJWKpIj%2Fn5zj2dz4mGsjBgIhAPNcVxD6LBokh2h3ltVKqVmSfDGa5fUtL2g%2F6hOVfuKyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDM4AmL36s13AZP8q3AOA1IiZOk7CXAZMUJWJIPnlkHCaDwus1YxOCftOWQnJw9MlyfcjoyqdZWdEftoQSiKvdCfyCrJMR9esmmdahlp5Bo0NJn%2FRpHV7scaT8qw4JjugeVkK7FM9YrxpCXVOZJAILwgu49pRlFtP79dMnPC6%2FO%2B1CRakXz1ihtgg%2B4pJe%2FlinT3YrlcAsOuW9aN9bKAV0RyE3kzl%2FOXbfKfPLuoj5%2BPq3lZsYP4JM6W9L7g13tYRQ3ATqoAue6xKaw%2FpyVia481WJ0jkavHCL%2FP34MYylpR5Xn7KpktQdyNnVL2%2Fa73YK%2B8GygOslABYBbOAkOZLrPYN6ujCuQg1N8HtrsBGV%2BXRS6MKM4dZ8u0%2BGBgMAuts1IDSc3jqMTRWU3%2FYYE3v0%2FHsVpntrMxpyH61ADI24bln6vF2L6%2B7lMHGSwDD76K%2FApiikH0jmkVzvDGkGsanwUnxLpBHy%2B3pUMkCbedXpcm2nDDVQG%2B%2BxJEjFGuHqxKHv%2FOGXblSsHOh9J8wkA4akN%2FnrNqHv0%2BmVz4x66DYT3F2BrA3JMAVNY4Po9Ey0ipefsrZ1fKBiAUf4s47T1Rb2zeAz9S7FYyFkhVCHJoNV%2FyJqBLp8oeGm%2BDFbp5hWvTCcSYgTdLalpFdyzCEnuXEBjqkAUkF6fDuUwybVW1TsRbrC6I2FUzCRykYougB306CVIoe0XaIrLW4c%2Bm2A%2B8SgGb8wGW8TOeoGEPo86ALTEpUaKEVf4kTl2qCd%2Fqkp8DiN7JXUTwGvYKEaGeG%2BrmA3n0SgHRGPRKJF6wYa85sVpreQdDrqlBQcqNWiF6AU60EJmljtobg7riAE4wjsxeV3GSwcah7%2Fn8P%2FMgFVH4LOdEUexWcyOtw&X-Amz-Signature=668aa25c154e96ebde7ecdc2e1829f0a0f63ce39b0e6559d1c98b58302186405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
