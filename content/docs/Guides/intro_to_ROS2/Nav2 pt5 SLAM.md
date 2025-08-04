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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=d706c9f3adf9e9eab13e5b51a3b7bc81b5945848d076598b4c59cdf9616ebd68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=7074e4984c0a6dc6536d0c7cdefae9b5e5ca9d567a4e715d12df57a35dc76c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=3e4c1be133d2f23a44ac51f2130003667ea95721daa010c8c688566b507736ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=f660a597d5ff877da25972cdfde4ffa8b3cb5aaff502a2d248bcced5a6b1005e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=5d51bb3fe1c44a7d29b69fa6d73a4a7cf63fc5df6d9f72dc2c8b9d3c387b5467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=82ad8f1bc3cf6ace8ff34ef39de4038ded56dca1a5ff219b32f0b1b202347717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=7714a4367c3e10a9d9edeceaa87c62693e37da73a5a8145c1e0198a6dd839ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=4610e968725ca0fd951373007b93221a39e6438c8a884100cc6a50e09181fab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=066a38d8043980f311efc64b61afc9e11e89d31c245a531277f8266d3fb10c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=02e261db67d09cc3566e19494764af7c7c768c203f4928936da14de9d02d35f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=9b974957ba0093bca146206d9a575b3baa5b19561725fddaa9ddfd851e5a3e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=1f46415a2192c84064d67db61d93a41fb9f2df33caca28fd8c5f29378c40c583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=456894d8d484d4ea4fd9a807466a2a69029a9cd3046dd1dccc115c457bc1ec70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HPG4XS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEdtpCJA3StLnW0Tk%2B0RJsuadPr7vIKYSTFeTMnJoPkXAiArySOQO5XoVpBI%2BxgmDjsTQUfujFnaLzyY9CJK%2BzFUiSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMAsOhlHHQ%2F%2FzEtCzZKtwD4M9x2ndzjer%2FNK5TV%2F6wUrvODUUXhIp83nkGglb3nq4l%2Fmz19GBMyoNdsvwrMRzB5PqkgmfXM9QDpeI9r8Bck3puQok6JWlY7UnXuTlRE6djj%2FwogXACsapN5xyt%2FusS8RqSYK6RjfIQOWCFXSr%2FcvqmiEie2VAGL1kV3RXCotW2TIi5odKMoH%2FiARe18LOeU%2FNLleztOFpG%2FL2S2MdkhiQep%2F6mnnOGbXm3K%2Bzaa5jM%2BJUb7uRg7Mh5JLMtWHQHnpm5iPHlsLbZszraKfpG9nJLHJ%2Fc%2BJEc2HvSk8i4RIUxz5SiTClMyyUyKlgGyAeQShyBJqPVk4ILMIxZ2iUBMO4hVL6YNpkpAQhoJc7Bxarw2NSEfExkbcPHQMN07lK7qUmGs09FNwPsllCg%2BHCjcvCZeFjH%2B7FfKBpNN5n0KAf0gPhYPZrzCmSukive6%2FPc2JH7xyDJgwMQa3HGdvMJLLFIwBlx%2FHBameoZnebG9F2Hezn1On%2BNcxlU0gYAjJK5l4ST5NI6HVDgHyvxOLvsjpyrG%2BVREQwoCjVPK%2FzVb6iCyZjnjerzt%2BLrdO7vhh%2BlLOvV3AYq0dlCcnhhq7gG7EHIrDvZJG9K8tuKYA3FjxXp3IOfuyH7E6q3P9sw87bBxAY6pgGPZyx1IveXArPSAhozVJ3OIM5X7mTfnofY0rmF6GEe4NCTU4Gsafn2nvKI2HksjlZe0DpC3Um1S86xXlJYqhmXfo1x8dQwoDumjPoXYPptdFIMNFY2xaVqt1uYvG%2FukZQDEYKam4HMyYO512ki62YCmRSQdSLVrcx0%2BhIulRua%2FbTrB0Q806KUSnLu%2Fb6S1WmN8VONy3wsCrydR2De%2FhaZW7eNo62D&X-Amz-Signature=bac8db090607f0852c0ae207f1969b3fe1f37b58c049774faaacce264a2dbebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
