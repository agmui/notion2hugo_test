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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=753218e82106a9a517032812a3d0114ce1429d30d7c2fb41003076f75c8739e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=e199274a33a8103271e0baeb75155d33305417d773a664296f29c815a61460ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=c94306ac1317cfdcf7313a10335c87c041a94d5660a010048ae4dd8fdb6b9489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=d2cb476ecb906a0c45969280c4ace3f2096b9aa6d25f8de3a9f291f7bd8b734a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=54e1cdf8737ecb21e705d2aa81fc6c21aa40478e339a179cb74fb7db1e00ebf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=32829e788394e9aead00aa5c443527928488035bf15ce33857d7dcc57f036541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=89fb708b2c7dd8898d0ac5c44b2312d3e2034aec6492b70ba4e559ef3cbab3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=ed90a4707a8aa76437ac65979909e11c0ce27f6cd54af055c82fe438d69d4e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=53a3a021f231ef076db83b6967be65d84e8f11f937a07b93db1059ae5a1253f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=e1aa1584a82618df353325f68e0d360e5932c2d6daa87c6c745f62cfe6d50cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=22a58bbb3d2a6fdfbec387f297e006fe900266ecf93d80c54c28a7f1be964d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=e49bfcccbbd09ddcbe8299d3aedec197611ba9f7b6fc550ff49b114d4ae98353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=1a8cf3e74dddd9d78f99d15cd63ba3b0baadae108ed06666f97f32b4a4a450f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSP3D6%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmDEK4928U9Ap5vGG%2BqPlJhqpJsmugOC9fZSPUTiRzcwIgZKMh2%2FkNt7CTtM%2FFJa2ePQweyLaNKh1BYwedqLw%2FvQQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFSfJk7W%2Fz4pzIdpNCrcAyAJxCs4BuG7Qvwqc%2B%2Bu3ZnQrEh4VV6q59n4N6rIfn5cjl2KjJPJgl3PhmEgd8uxgv9qEFFi%2FjZ40z5NYB4HSY7mayXhCvFbibBgHxlKI1LvoCy9x53Tnpj5Jd7HZLvCFtqj1Xkec2tmufZPp2KHGkWhU77OaDF43EhvrOClfKvH8BtKojbbZDSgFhZR0a6wJPNEs051i6ucJ%2Bs6ws7EI%2F4TZhnfLaIRaaH58xeTy71XfO74cBZhlyAXmVD9RpI9FBHZlQKGbLbEVWlAht4DBaaDIi1yPMZMASDVc2f692FRnm3DkbE4Fr4ZJVdmYkYZIO7VUMo0wTXq7lkEb0uBu7vtAdHu0JVWVM%2BLka7KJpRIwOPu7ncrS0XjSDzPt2De2YVq4HB6fQpnMI2JazzqnqHjiLOEA%2Fp90mcvXTBPJ4O1qEFiYyIXPXtG%2BTBj92ekN076AYNWTSGtf9KjT0WU5HDkAXoY8zjnwHAjtH26MtsVwrYfDQ3EhuItaDS0jMFs2%2BM1iw3QBKn4k1mmbxfXZdBiOQPc%2FaFizl6ZyT7nCAaGn0%2BthF7dDUZpi4dGoK2zfnyECbD7OSabq9LK3XsajgjF0KwWXOaHwIktgn5BhR72cDQhKnwqUizGvR%2F2MJG1ztAGOqUBC7DBElCmrZ4xzo1okLsdt7AlfpS5jtCIbrpEcq0S9EShsMrqa1hrnrQWyzZCP1ItdvGeY9SwG5mDFvuzA02JSOhzS5Xn4iJdc25CMDr2qnVJAdOiPFHbWp6Z%2BR9Nw8C3Kb7xxq0SF7ZjSi%2FFU6m4U0eIgH0DzvGIi8xnfXbB43C0E6iKd7pf9xscDYobUPMPG9GGT3ZnRzqRAnH6qnur8Zo9YaI9&X-Amz-Signature=7626e434f1715331f4b90cd12ab7ad1591e5b08bb97da2f4c096d298fc4028d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
