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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=d2f684b2c82585473cc4a469c52b83e48c3d88226308258ff0d500a88662a840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=3b8e2c631cb73b0771f1a6c6963907ac7eeac0a8b3823aafcbf1ec131b9b1d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=da870613f0d3c34b4aee1a70d16af9fb4d0876c8c0089726565baefe936c17e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=0858dcf3d81b80c439973017f1730e612bd2287cbed225148ab02d9cca058689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=aece18ffa5bc3b0aaf973c01bc401e9d99d2367ed9f8394c8f1cbbbff8024fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=47d7aac978cbaab5be86a7b8eef151f212e8ca6a57c463f519d430edd43d25bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=acc572e54f40b7cd9b02fb2b18a278feeacb15c23cf33875afa7b84a90ea359a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=544f62a8e7b64e238a035114bba4f53b33a4df0d5ff03a63689d96e4d167b3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=4b79e040e3f6d326bbc7818a722232df55405cea9e02255ae836198add4abd10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=7a2466be1cd0919ea1cfc390c4b8294557179a95abedaa28fdfc76662b77372a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=ba9c768a00007142b114a1adc89b3abed692a15f095ce884b06743a227c42746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=0f7b3ef6c79ba560eeddbdfe1ef48ab7982dcce99a43ddee7e591aa888d77d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=20d72246ea289b350295eaf59b319042f925709944bf2f4c4325b633444e16bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EQOW32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH6KElbFCcKcP8dTdSOd0YYfcrvZYw7JCHc3N0%2BLY6VlAiEAtxzXPETLPPKEvibfSQDitX6vcDtr%2B8S160fsO%2FaPWDYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGWy0I0h5V03G9uMNircA%2FF8Wy47x40wT7%2FM71EG9T4nReHTQ%2BtpGDUgBkG6o5JMu90VlQnC6bvYiFmCgWwFbrNF71njVx%2By%2FjZNcsFWwSc8SfKTLYdmgocN6cmSgAmZjn8s5I%2BpE%2B66XCDrQ1h5hG7PDL5RncQ51VWchNC1G%2F%2Fkt7G%2FwyswGhD1s6ap4CV669iown7hcoGHNrvQCbZyqnISW%2FVp2KqrNSExs4lvLIE9437tcaeXB5cgg4OHY6%2BO9soaxazJS6iOUDemKLIiTyUeVfLv9AWhj%2FsMwyRUszYjSO7a68hR%2BJOzM%2FirA61NZuZmDaelBlXilaYxYIDFNxqLQYZ1CP%2BIbW8Y1yKNreavzGPld8Hm8kwXusdWVXplwD3d4scgFk4ed7SPeRpribPHcJpRbKGQCL8y4E9Rvl1xZUexqhKzX%2BXzsabaYwCp9nhwQC5WGpE%2FakC7vZITE9Eksn94%2Fog4VsjPWYH3y2MLmloriv7lBySGtZg7eShPHwLFBHT%2FHRh59EozEc5YBTtDvv38nqsSmKRf0jYmzA25jwv%2FQAPKtXexS4qzP73Tp05IkG82sz6YH7CbsdP6bNMHwKwFIOffsfm7CneaC3qa5f8vWHYe%2B9RCaFsckuFIAuWe43V8Bn2Vq3TYMKGXgsUGOqUBOhoF45iA2GOIqqUifGHp1mI86RRCaYykMQEsYFhpnGN9uF20hHe3KRzaRMGnlV7VzX0K29PI%2FmJEts384k7At7eqo%2FU6uClJzn8iH4EMozD1kH8SxKdFqLri7lrAEQmVFcFirt1qKX8%2B62KYCYjGHAgopAZdXN7IqkM2hHY3%2BEgJgAKL36BhKGCDEJmiSpPZyySVB7E4usZy0FJ%2BC%2B4H4kF4kNy1&X-Amz-Signature=b9987de58788f30f6a0410f4808e9fe83e908b3c89fb32cefaea0fafb5f72ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
