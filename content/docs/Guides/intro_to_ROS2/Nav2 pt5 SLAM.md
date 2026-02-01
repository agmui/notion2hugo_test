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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=a9399cd121ae959f9183e2d6a4fc5e921fa606aee6a71e8186d04947e38cdf2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=4b842d16f960adfe52882b40bf77699455d8b89ccef168aea5dab10c021b2815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=c9f8a31aaa622bfed69b447c723873a0d9ad8ad29bfffb85672f16fc7f47f7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=26643f017588dcf9806ba4989a9d4987c0613a2cb261cc032d7773c1e218e27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=1855d91974b9a1912ae681b025349e4c04be2edaef98242995fdb4bfde9027d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=d9f8ebced7beb5e624316689c8f968422775ab9bdfb673a84627ee63828bc4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=1ad43a99c6b4948f235476ad5acb1bfd7a453affd326846d9a086b80686b9d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=2d288135da00885ae462c42e8c1f473b5807617f3ded53cdbd4646736156d627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=7b28f159ec29c51db99658303cacb9db766f3576fa8eab4cf97dc43c7a05ec02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=0df1cfc6499dc810ee35b9d8a33602e788d4902150709812e506bfa4b3d186f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=b95e18205a4aacb8eb13eb3160e059a9755cf0432d86bc3092b9cfd6cc1854fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=6a2974bb18e519b072656b3833aedf3c68a2361c87797edc48d614c1095d0ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=c6d2fbc51a6e7023603f1083b46fd0494d6a03488da3f0b4740928c88805793e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFF5A6Z%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Arh7WBZQw8X4vtlwx%2FIFCGLK8KxW0Tf5%2Bk7kZt30gIgdzmBQNf3T6zqiAyK2ldFZsGpZfT29aOSjIa%2FkAtkmSoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F8mbb%2FV3Kh2zbI0SrcA4UmS26Dy1GB8JxQB8QrOf9vIDhC185iUCBNtPzr9gvcJENzVszBn6xHSe%2FQQHpXdMjqYzMOKg5Yelm41XYUYYMUT7CjS1WAoIUM%2F1z6znPFfDaIkFYVRv6pNaKEQXMUz757PjUlrQwktS8roUVV0bzSQ%2F%2BN2hqRuAZtLVSYD7eiu3C2lAyG43Iu0X7JTxGgUnoIArM%2FNJ5QBwCKwKAz7FxZIcI7dHr37xhrHXZ71dJ0FeNan%2BoKlZKv2B%2FBv2Rya%2FG%2FyCWz1BGNwGYU4L5%2FVFnb7ECA3f6S%2BekpYIuhaiPHwr4vuOrEiv9fl1CSKiMJ7G47yCDqwa3q%2BiSD2N5%2BVJRqMrAh3U8jT6uyHeb7Q%2BMfeEpNAXypT8lA7GCEo3%2BEPRy8VDtMBKNk3LKtJAcU%2BdoY%2B8ZJ51FRzqq42YJhHuLQZ0rCY9gzNFIRk%2FWXZKql%2FvIUMSncXVgdO0Q7%2BO%2FiTDdkZXketHDXWpfs7QhGC7ReOghLjCoR0%2FnQyvbMGQNo3aUEGJbpY8yg3%2Fh3Mt9yH%2F0U2A4mPFvRm7Uot3BgPOBlSRlVoqBWmNi0VgW%2Fh6FiHa78RvRuclvzbNR1E5qXnPoxnHcrM%2FOPN6en6VptVv4L6QkF8nh5ND1h5omwMJ3y%2BcsGOqUBNrVi%2Ff53ylIABUhbaBZKYkTdsr47GYfUbzgU87pN3TpoeNU09iCzPapEUFg4sjA3ZAuP2Bc2V1P%2FC%2FKLlavkS29PrUclT3NA%2BTHLahU0B%2FmePJBs3v%2FcHPP%2BuEw9n4eN1LvLneGolkqsRwhWCJD4GfmrsY%2Fd09BuH0056qg2P9syQGx%2F3YkuLF6BWI%2BLljvyzfpxAn5SrOPJId8TLSZljoNrLziw&X-Amz-Signature=111b9d7a7638de9e54529e5f14de9cc2112b0896b6684b22c998e13b391ea3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
