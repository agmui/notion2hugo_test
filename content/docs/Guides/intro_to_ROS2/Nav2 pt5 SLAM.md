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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=2864156f737f89ded6ce6a2a7bdec54bb28123ef161a1e10dfe1139561d75b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=141bf80adfd232a13d68ce6dbdbaa5930bc1ad00b734e20656f5ef86a44946fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=4831645c2a1f02f0926fbcbe8b338303dd82d566161ca684fd632349f5559291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=e5728bce123ab2aeda11f1467dc8725f3ef940ea59edc08474348e60eec2a9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=c69bb5720528b780c8dea703a3ff3cf7b5cd4a5f88d3218478b892446db7b665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=1d211f6a68adf0a83256db599a8e8143c1e81a59c13fc127e9adf25f55d0e83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=82c1662b68ead9079063a42c4f84fcc2a0b68948114f57b0da6509e660ca7a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=786a444aae03be52e3ba38ac07f0eb46c631aa0cdf84d217b09bb9dcf8c1d2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=e50bb4b5fd895ad527259343b0ecdce9cafed93ae048eae6764c906700385a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=ae3b221363dce21d488394d5ba241beef70601c697770685ec62bf5f874d39e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=01feec147a103907bb8da8e6ad14b384dfd338a24bb72498c806128d03b8f9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=84f2d86ca6c82f2767ee0677899f4079969db39355c295d4e0ac60f9551dac85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=0d550e2c580fff45a786faafb27cec52ff91f282f6f53d9a912070569b89dc33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=d2bae61d5607d03feccf80b9cc5a0f8a98983fb93a8ec908db0ed30eaf7a8d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
