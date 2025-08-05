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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=5c439e2fd58fe72b561dc093ef4e428c9f3f840f9f742cb1208a941fe7863794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=13cf77024956ba5a7a1fd33c6d814e89717af87b3aaeb6994fc1fb6da71dd9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=805580429bf79cae68600527838e639bb2356dbe5a45a7e82fafb2b14a976570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=a204ed414278bb83498d87f5d16700dcc0c0937b68f13446f985dc1c6ea92c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=ddcde00e77e900e73cb25def65ad5dfcda6a0827251ddb89e68d7b8adbfdd9c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=6f4389fedcdfc3a1d3f713a741857a1ff9d74689b5341f2bfc6420a167c501ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=39aad568022e01235d625d5d59a80eb6586e1aaa42a5d5f10b21067a4732d406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=f74c6e918a60a1d367f6b9e333476651bae35280c576751b157c5df13b0b5147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=f71057d4568ac06b9b2f129170daf7f60e564e482ed97933a8a849c6628736ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=592d203f117480b97422cbbaf5b820a67a60b3c6ef258b4b873e8960d1407494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=da6294a7ff3f91b8c7524ee6b40813a4f5adfbfb9a6194e00c41738cc4983823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=a11b8d6448f7a0575124779276d6da5cc49627257401e3507347a9e4f32e8a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=599bae920b29411829d84619b5d196e5a834cc5f06d9a271f81af5dc5823239a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUU3OUAP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIG6VZ64jJFADn3L%2B1e3I8K5DdZlr7KsEmsBWl6i7KVFPAiEA%2BDj97Z%2FeMcujYteeJtncLMbGOKCKdmKh7rwqghckQl4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCD%2FNxpjD1vHDiw8BCrcAw3yqmIxIfcqt1zN3IWMvboFYjoZjC62KxlkocXpzgUO1twOrdRULTcFQREMQfag217SM25JAhVYC1SeWnlgC8rlJbNySxJTJEGAwqyKtdNXUEevxd0ZhsOQAfiM3pWyurlOj6VtjeAUtDk%2BDVdufoUCF%2BgNJ%2FCRZ2RTC%2FZ5BgKUsjKwP5cc19ynK%2BwvTgboOfXCkVy9fD3lAhLZht2tZ18ThiiwndR3X0JlS7y5wePtF2OIM%2BnQpiOpMSlToAyQRujm0Z7eIwM0FmQ9nBIj9%2BIppUGXYa%2Fy9WaNey%2B2xKP6c4FmCPIZb9jpjci7v5qUapbmYcFME56Dti13gjJhIYR6QrgSVVQSdoc%2FCYjzwHjMRSUFbFhHFXpA1Kz38nDHubyAAErY7mkGf3DNVJ47FRg2cdOIvhHblVMOKvaxI8BbLsrNtL46PArwkkU7InJZ2ssmQ61ihnyWc3oRDaUV%2F8j7JfpuN8J4thsUI3IsUf6JHZg80KJnUhCzmzT1cN%2B7C3YENeRu79pY1A%2Bqa2sVw%2B7jyftuxItFMrBg4l%2B%2B152c6QZpRhR6TytNzFkbl6HeuHeTiORBL4jTCwSGO6QYFft0No9M%2FFhMG48gcW4WfmgO4meRyPZsdtNas6%2BoMKHbxsQGOqUB1WMVcZwRJK2mAZ9gTdcu3gmmTu7mCI%2BSzN%2Bi15l3MLde7%2BzUYZ6bt5EF7Ez90CIXNDciZtxqrWAekG41F%2B%2FlzpcTDNDt27bPdjXF54mzrnmGCSlyOPHbRcoIKYztwTZY3qY9zkvZxqy8Zh5GV0RTNZ%2Bv3Dxrxr2uUs%2BobKT9KTtMvEHCayrmT8pFvzh%2F%2BBwgm5uLG%2BHzMxRtAyx9axJVhjSXQzw9&X-Amz-Signature=f216b8fa9e98d790e9a80d959be660b9933f863e402deda6ca9e3520fc6f42ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
