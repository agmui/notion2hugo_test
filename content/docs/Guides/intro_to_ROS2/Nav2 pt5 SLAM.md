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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=c7382d89b842dc42e197f79bf4168af60848d593396764cb2d2d904595a51c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=eab478d8775aea6648a4925391ca70b79dc95db087ab5bd5a1ab042b8a486e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=566b1d46bc8aace3cbd3177d5907bcd0d132721141a6def8caf1f4e94c13843c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=46a9d9ba092b775d4bc2213bab4f029efe048bc59438a8cb79f83b1e65294852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=5420356cacb0ec8aa0ee9070c1689391759282e2ac44abdd2faeb0b8ac5dcf0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=99cbc75c2036cade2b4c7ea811cb57d8eaf637d861dd05ca556c9110bddcdaef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=4f20efaec2de441bfa107324d98948c65d1e9e1859d23449f340e778f8eabd11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=8d18e4199f563b76616193f965cfd572d614cb21a6225ae554d3a0bbfee8fd87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=ad614fd37466807c243e9e76478a4fdd0256f8deebe10641e82cb45e0ca8193a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=dc7ca6bc5d9a1387084dfd7894d5813e66ceb34f7098d384ccbef6bee0e49f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=3a2d2b2a81eb6e21cc89d60c4044468487a3084b4cb9e4494b4954b2f191829f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=3deb784f20f0bab8d244669fac9892809184a9b11f3cb9e07aa9e3f0729d068d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=dcf52d7103f537abbfc939fb9bd3373f99e8980f1ab3b18c54e44139f2d8b751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466323O7TLD%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDdIOOoxN%2B100BiBhUR%2B8w%2BmGYpCF9%2FfMZxAJN57FklwwIhAIv3x1QEfHYuSCDJfr9n2dyYMrDzJVQnVrca7ueaHBwiKv8DCCsQABoMNjM3NDIzMTgzODA1IgzMQsXnHhxsnrKKmOEq3ANT8DISM1bDMObQml9%2Fv54kUm7wiSklSUYSHK15KypRHRRzXMRBvEcru%2BuEe4dLYR%2Fdf0LYt%2B8XjC8FmH%2FH0rED3fvfdEnzWiOLBM9qVbGtpo%2FbL2TDTQpefRd4mXunfj7eC4SqzyD%2BbDd7dwQTO81%2BFFO2F2ximslY7qG%2B64kJX5Nvwdzodmbu0KhXG%2BjIM1kdCrDonnEmu9CxVOCMz7LDkBdm3hz%2BMSsuCMdUis5U%2BylaxHdUOE1pkLFHQFFz%2F%2F%2FtskzIN5oTMrwJ5VnDVK2w%2FEt%2BeYQsXpIKhlO2weQjMPyljjTuuSWeOxpukJXdTAIekqsuMHEdizK3L2yXNcn2Myx4DlPOamieM6GPTfv%2FAxRIsrWqm4sjMWjJt6E0pmlsiFlKN4CBYjw2ZukkyE62RZSyeENIZdUV8jy87bT2dxzDmVzyAlzQJERiVQ9HETh%2FIVgTGqfLhMSziwFCulk1ynR1SElnU6I9kk%2BTD%2BwAAQjKEeK2Y3C4YFCEinqC7Z0f5OdyOwb8BeZTGztzfzMU4wbAUHwVkGAcRgbQXgU%2Fbgd0GDftQN%2BEe6ZWJQKzvg2LF1LvwubU51LeveGmtQUoCE8%2FLQgCQYHCWyrYuCv5WBhmIhDau69HIiJXmzDi8uzRBjqkAdsnd0O%2F2wUtl2RTYuwxmtrhZUCAz0gCRfGEn8yePs16q12AlZ4OK96LRC0SAo0JvPgpV%2Bnd1F1UvNm8EGOFUcA2mVkhqrKeP6ydWodmJNPZ5%2FQKnp6D4eeCRmpn8IABlqy7H87meaAyWmlhnXVWR5Im12gm7HQjOQoBOwquVteYY5pZ4foRW3%2B7Xp9uo08anV2P1XchqGWyFy0MRgNYZ97vUFV0&X-Amz-Signature=72b5b19f09fc62b1e82564b6f41fd99c8dbc9ed4e0b25b4b7a8c4f8391d2a3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
