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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=967598c2d4b9cb0f93976553c65349421f736e889cb4c9132b5880e66d4ce0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=267464eee1106719f8afdf4b7588db07583cce5194f399d19be32fc38befab0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=e377006ead6e00fd60dd4158f9f6e0c3988412003a700b808b71a9d2df610da7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=a71ecbfba36b208cd10ac7c181a0437ff62f49ae89392f1a54c1476741feae22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=a65a2325dc910c709ab10a833b014eeceb706a63af9bd52b33f2a2bda9527cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=066df03d507d4efa1b85b586436626ff74b258e24d93b10e9e35b7184c8d784c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=6d4fcd88f9617febec3b9f1e80450788c4697dd805d4e253631639a9f2776ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=77a2612f9fe0cca889a0323b2623e71fcd8895c49c943d138f8d8ee7b66ba6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=c2e78a0bd117c81d0f0b16d3b097d5ddd9d57fc9bcc349ba115420073b7693f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=47da8a767236dd5a8c6a1cc1152d1228651eda2f1276c0cc0fbf1a70160304ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=a04e669765258f6a4c168208575dc37d5dafa1803523227d672dacb52a83a815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=c219a982f76e3370916e116b5dbf66c028f451c15fbe7db867b55bd993ec0a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=3fd43945b30026c66a6d4bba3aab93c7c3fde4b4e918fd76d548aa1740ddaf67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC632EQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn6ZPeqg6I4ZJzsl8IpmKvPvvaebjWxhHhet%2BYnI%2BcAIgBK0kBb69gFc3P6Pr9gBVhc3CXW%2FUpwZNTLjvi1iU85oq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKr10pLnQZpolbuVSircA6KDcuJAPSmeShV8zqBKSeGqtn%2F2%2BJ3nMcpkL8XZqHeDWNUtn1vuS1OmUwOTpuX51V52n6Fn8VQ%2F%2FVc0A9BCKMhvj1KzW9C6juJhx23C3z9y%2Fzv%2FFuboUsexAX%2BJIdVus6J2ZuV9pCsul6GSXyn%2BvB2GFrWa41JVJQR7nsbyjB3eKYddTZF4VUxkFDGUeNL3urqO3nKYw9L8Y2%2FlWXVvIzQ3KUlbqYfvlUxEQpXWlR79wXVGNUUqjXsJnKQyK6zMfVCThDg1Mq7lzyEeUYrjRZ3Aa4Y9Dt2mEmc2E0bgNfNI9bryqgR9xX84ronQycNylqLys5E9qp6jSdfV%2BpPvROQtajyA90gaWcbriGS9ouoq9gDzmeL6nJ7Hxx2FlV4NNXqAmEKOHMsrSHmzQ2TiE%2FF8gBIODEJzM7flC3%2FZNnFeAqRA8bGlSzvxzQpkuk8IKcOlmL9YeEvG%2BF55DHBEBO8i2TZ52FkYdC75Wkk7y9efyWJJwcX8hLrrieyFjj8WU%2FsCgqhMwfWfbepZQ7HKwBfLLMJXAfp03kMEzuZOCdthUWKZIJFUjyqr8%2BZHfyyU3c9VRhatA8E3L%2BoJ1OhGHJJ%2FKp6PTyXJALA12Iyex7aUl8Y253eegV1bpdozMKOBusQGOqUB9LCWsbAHMEa1dsKVoX56AUv4fbufcb49TcH%2F8piIMnukP6C7cDkW02a7hB4W6YonzZsUID1%2BguMWOoSOvETzbJiPzcM1Ln4ULltvM9kioH2v4DiY2nNt1%2By%2BGxTJayoBS3PeS1YVG8eVBilfuNQslu7BPhbPMOqQf7bLFA5lrR18YOXUh33g%2Fexk36zoqlDKBy55%2BX0zPEkOSCoNHR%2BWoFngroU%2B&X-Amz-Signature=e9d6808772d17a47d9e348beb256f849477ab8148587219b2ee6e0d3d28c6348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
