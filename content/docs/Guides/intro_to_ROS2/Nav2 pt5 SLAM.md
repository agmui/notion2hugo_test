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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=fdee925a80cd0a63aa7679d4c14e7118c40790850a74b06f5a2cad88f5da480c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=0771993aee4bfe0db8dea0d15bbafe0c9f5556c2fe5904e4d1b73c8d0efa2fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=9ab691f8f37ed1c243417cec63ceb765c0857d53bb1d2b0062672c2f69bf26c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=9fbeb30e60cc2cde23b4035a3192d173d3dd960f55451d2a984920380ba818e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=2fc857fdf7ce3a403e1d7f85346f512868da5bd467f5dc3bd91217207b92f6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=bc285f52a113052812a70fee4205dafd3fafe1f3da98d67cffc6dd09cdcdb78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=d9f59eaa5c72ccb662ed8bc83cf90d74197228265ba27dadd0c307a3221b9dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=ced9897688126021f27111e05d19563dfc27035d30ce5495b1803de862fe87e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=51075fc535fa1fb46546bcba45651a8c5a29fa904618d23d249cd210f7241645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=9ac704e1e386fd257e2b97d9e22f15ef655903b31b19ad4c81cfb8a512ece11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=aefa8595ad64aa808cd91624d6cdae06bfd7f274e4318db3d0770d0e7508d2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=5af37ff95ea02362f21e5da3a3afc2de6dceac860438ffd040a71a8ac6da788c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=0ef147d93c0f39685beed041e2003ed2955b1c45dea92a2cd59b91791056b8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WO6KXHJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDLL9PS4MoaOglPeIQt7A8H1pQWQM%2Bz%2BphXmgH87jLmwwIhAKhDTl6dTGqVaM5O48svbfH8nqhJphbQOf0rpBSCfVD4Kv8DCGcQABoMNjM3NDIzMTgzODA1Igw%2F0OFpEXz42otN8hwq3APqBiwVU7%2F5hNRr1NamV5cMotLBckYTSSEiVTCz8xmKzMXzwxI3%2FrM3SDBSYzP%2FAiLm2IjFXVdlI%2BOnUQWTQbsdVsOqo5OwbjiJvsx5GARAXVUReuOAI9cYUH0LYylXlY0OjxIqZatu2WEue6saTQHpMYvP6Dw9DtbI2TMXRfH%2FZZBZqLeqHu%2FjgvbUqC3IP%2FnkKpWJO5nhi3vHD%2FrAbw%2BpV1uMkp8IVdKW%2Fh0ZOgeCTYtU138VZSXOqJapxm1z3vf%2B2BhwYtwL3gP%2FZOHeBqdYM1UMqsFFJ6XLrHHG%2Bicc6%2F4Us84%2BCAhCEQNBjiWDUOYuxCw%2FHa1V96UKSZ%2BjpSkm4KVPxUclFf6ItKbmNYln7LtqDCGcvADhmDFfpinuRitnXHOql6V5b8Jyi4zk8Caln2TpOd9Q8LRioLQkX7xxibnc65OIkOmBm1jCNzWaD%2FNJytIxGgrMb4uvNZVJCG0L6uLOcd3B0bITN6YMYNst%2F%2BbXPUf2r1C4DB1dtWduVwfTAYlkOgZtuO6%2BBVYPaQi%2F0Jbx1xZxiFo%2BTbtZEDwDLbZ6DpkAxcOaNJYMmZDBqMVxb%2B5%2BYirelLm4CQ5WMkQ3wWulK6i0Spt5wZ4A7WWwaz3qViRM8gzY1YOVCDCh2P7EBjqkAfqNLwQk2oTekdZhLEHGcA8Cadww8kHmYTPNr7d9%2BYdRUKQNAWuBm3NhhPQGHgM%2FwV7kj3ijG1ie9K1%2BoIxvYzv4HHe1KWil63DJqALQkR3zIEd2phHp8wr6PWbJKQCflVGJiqyp520bTemul0N6RvxA9mnjddMoifsjLKhwL5wTo3W0iwO5OgBJ87oFl2bflry0pE%2B1ENVgVvSZWT3nLSyM0uoN&X-Amz-Signature=c09553778de4d9c4b6d1eb45b0144f8395898ebff36ae6e33ea406a64822f56e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
