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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=74b309ff4bf8855a2d2b656ef740fc171aa99af5e0064afb69c13a72ff0a4cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=3f9756d03a80ae858850f2cf8891011b9a185d94fac2001a366c9e81ac0766eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=ba4bf6ed29da4ffee75acaf24670fb3caecd2feadbb6198902c09fe422cc78d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=e752d2e8f16e6e2ee0247372d22d85e7badaac96dd4db00a42a3562e242b480b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=7d689cbcf986524558a5c277914f86913070f140306260466acf24901c698d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=1127ec6bae825fbda3f04f43a849609dcded4dc69a61bec78ce3dfa0d0144145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=c1370ed9e51bb76669cbe5ff7b5a832acbcacfaf14163b982cbb5d3feac4fc21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=f1019f91a3fec5acafbc0de82fc5021ed493acfac2f3a9aab7cc3a29638aa552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=7d6f36e28ff1e64e6a6390ec49ed8dd7b5743742903f0c15b656ae43ecb6f9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=d92c326c74f5a6ed555f1796a68c74128bd8f6f355a3854e5ef9dc6e4f49fbf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=2a1fa6e75e405b529a2e70002097c362fce9a50db124f27ecdfe4a15b336d805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=db3a78bd967054ee9c38fc21868dd08fbc28815ff6ea579058f567036a2604bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=7eedf35ee3468ebe553ea75f4a0dd4bc17d710a79643fc451a2130d340fad112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6DLQQI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmbCVqdaKJ%2BBGQjkrHeBaPrE4IG%2BjUSbojN%2FqUAhGcawIgbwtOrEn%2BpBYLeA%2B51NlHVsCdR3%2BE7SQaMLP6sdmVcxEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9gOo7e0O9lb%2BUfeCrcA%2FFXXsymKGuPpcAaxgzO%2F%2BZlePMAFvInIbYMMCNhqkBIILHboTVbD%2Fi0hcwK29UL6dGMfOKBykms96KNxnJ1pMBOo8fxmduy%2BVSjGKUIJ%2FNQ8c0fhzQJmBAdPD056U%2BeGl%2Bi7YY2M64aWkfMg7k5QkM54grn%2BzAgska34%2BSQkFKH660e0toqHnPkfuaIm96iXBGUUuzm1d6FhxkqjiUoZe%2FCC1eFryyAWnblxWU0MTdlk5sD5nLYW0aIHogYN%2BNZvvP2swj9hrijBdm2vZbh4t8kxCM4jiGWVVjzuJUj%2Bxuk1vy0vBo77BnEt4Yqw%2F6IyIE4nWcvLQ83%2F19EGkEihWHx6uBZtO05TEFUhOM7%2BIOsShqbwSXq2%2FDnRkPCazv%2F146aFgxYub27SqLE1I8H8iJw5baWt8ldqMHqy7OW%2B%2FtFMaoV9kRoEtSNMKoL0u0%2BUhd%2FXh3%2BPbfY0jr8sT01OSM27Z7kp65AZeHuaN%2B8trnQVm31RiV1tgQoR6jUZdmYPRdzD1h%2BCXiBiozVbIBe9MszYXLJWxtjdebyKvAuKToUnv0U5GeiKPXuk5hHYl7Dq%2BYIvZLsPeAbqaKdMCJfu78tZequWPy%2FyaPRHfR8NlwR%2BZ5hUU2E8zd%2B82pvMKbLsMQGOqUBTXOPpx%2FE8ealtpOCMppXpwK70t%2BdWjrxHNN6uQb2y25NKsXN0QynrNCYV8DB2Ef%2Bn%2FjC%2F1KhM4gGs9fdMJ63m50g%2BdysGyuCdl3cYGgbq830IcDcWviOO3kPPTeXik6yPANt%2Fvh3CnCEeT%2F2hBlQyg%2FyHjw3dyPPunJtjxzieV2a9pD%2F3n2MOGuZaYm0KXcrtJgXK2H%2BSikflJ4GJAEGRVYYQmWo&X-Amz-Signature=563aae27c25be79114695dacb8754aaa4452a10bc408640466041b67631bd302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
