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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=dbd45d62514b3b6d449ba03766569ac90acacd871c00b48de5213fb53192682b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=ee8f3042dd15c5d754a9dd5f3455944cca0ded5cc05c4a0e421896073b376bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=e0e92b4372e8ab27048b448811378949f3b160e60683af928d35eff452da22da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=8bd6d8b80613ff8f535b1d794a8fb28a6d45ee25385da18b7d95148fdb47a502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=86dcd20a7628454fa64206e1afd504a0b36915c63691117d8e0159f790b2c133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=f733c3b94d48b80033c699578f8b0eb9ae8853db54a0d1e8c9a2411e0c375cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=02c78e0114d656c8545f8163e61dca4096daf035c816a347049135da9d7646bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=56148526a6bf9564dd1973a9b66849e9c4d93862ec86b5531c86d84178ec22af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=6a6f16006b8d65e65bcbea816b5001c5d5c2244fd5ab4c43ff5475fb76acf2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=b80467f224e6bd67e652e1533e43e5fbad3f8c34daf8bc14b74771c5f5ac7cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=54004612c06e2d009e33502c3f1feda47e1443b382f2bdd04c29ad3755bdc408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=d67766253eec0d0c311dd3565cb671c5b3ff8baac3f7b0d025a9231efec62081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=99d1320c6010448fce56e10bf784b5a1b5fc2504e11adf1ef627cf9afce7ae4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6TBERV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bi4xDvbRqgRlBuUBjS%2F6b0XniqjxILOy9H%2B5abWN30wIhAKEkgQArELpUCcMOa9OXkPJi9oNewKfWYc25I5T7sKSXKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnl42ur%2Fcw4VUBQoq3AM5iZGEiRTXbd6YR7jDsKWP1Z4iLYcQWg9WS9uz61ZPuljL9lqk75YtR1afryTTs2IXIbcrGZ094wVmgjHjByZWo1mguIYqZ%2F5vgjAL3E4cz8%2FvYQLbRD%2BjO%2FG5xp2kX9VuR0dlcTwxTFh%2BAAjr83VWkbLOnKNPHkZfQkE%2F5F74hGovnc5dt40MyxE563BgaKBl2TJh5tVD4j43coINw8voEiLHR5ZNITEBztBryU6JZ3NJg098rja0F7LQvSRXkOrdiRkhjBzRMRLEdHveA3WPLHKNRGsQ3QIiaVb%2Bzk0HrSlLZU0uIjFTKmyRy%2FK3WQne3KVIL4T5e1KZ6YUX78D2PDvWkzjuy815RGcH8hesP%2BNo00E%2B3uemZJfoqBGPHmRE6ks%2F5yAJR3rruaN82qImfbpuZbEtfCbLH4sPqD0EQ7cncqPEo9hbeyY72qFZ1sqgeW75DNQs4Vkv8KF2EiteQ2yCqiKngUsBbAdDxwu4IO8zz6DTZZ7uGRaSERn52m%2B6P206Tu%2F1aFwSnY4cXWcHE%2FX%2BH1gdJeXvcbErO7I2YLMvQAJkjZltxMMRvCTAq5mxC41lYeTRBZ4FGEpxK7u32PQuq%2BCEQZi3Op7qX78CJ8qUMQUEW7XHy2fzczDkvuLEBjqkAfaz3YRDV7ULKbU%2BRI%2BoRCvbiOeyK8XkUBa7oYCJUFryahXqMMc5CQUgADWrgGoa43D5KwUqZOkKoq%2F1%2BQiAmW1GH5BYjf0MrhAzoDVMcu%2BlNwAAGX79FWI%2B0jkxx%2BBxnry9KGoszKkGWBpHa31vVfcv8RjOe1yUr8jYz1LGTaJbIR1GfG%2FlEDL1M%2FXVN%2BO5slfJcg%2F8OUyF2ilNRuPlxWhmltlw&X-Amz-Signature=adc44ea85ce66c2e5cf7237cf126fe64c66dc9793611200c947f30cfe4f9106d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
