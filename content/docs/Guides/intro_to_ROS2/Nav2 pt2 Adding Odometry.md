---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZB33BI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAf%2BEFTomLGlmBX9Rj4WX8m5bc1GFR7ehQ0GZSzkWqIxAiBeMGrBY2uLy3V02MV38xD4AV7Jk2VRrN7a6q3KVVrFaSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPBXiBQ1tQX%2Fj3o1VKtwDzPhgDsXhqF8af%2Bt6EBPy1FKUu9hfPwSU63B11eXXwdIgF4zakwtZ%2FCysVV%2F2SVz8NxKke%2F2C7LCk9w5NpzwgnroGU1HFo9cYs200lwIcA7nT4RS%2FLuZokvHg2BbBaLNF3W7C5DLKaMkpQ3WszSCsvktt2hwJoyAdt4gW33AtkHeJ8iQWlB%2B5TdLpSSMZUAy4lwQMRK5Dwf4g7m%2BTyHbevZA67r4e5f00bv8eNHKMYT6TJPFVc1oS1Giv%2Fas9cnIq0c2TG7s4hwbHg1w2hqfzQ0qsp3BCvtroIHgcnkqO7t1%2BPuM0E%2FgGLeikS9hK7bOmdqosWvs3LNf7uo5VYO5EpXKNLCAUTGLWYagYwdjeo8NuHVVWCU9LfmHn%2F6F%2F8cdDJD80KYJiczQ9kupKqiDYdUzPxqdxtu%2Fh6lyAWzb4yIn6cVdudoD%2FiYaN%2BQ5sO4pd51c0IKzGpmwb1Z9zSDAs1x4xOOCPNXdelW8JQB4eRgOsvAFYBd28GSH3wzEhO9WLCiabVcr9Y0v9RLuL49zfvMpCCLrXnzWy6c5MPZAfyz%2Fn8uWFvNgGQqqoUDJbtFyXPlB8UKURubBKgaNl2mXfRQX4ceCh08SLUQkkQtt2BUQEsr71lsgfLlgbTgAw6rPGxAY6pgGl%2FsefRE4UrmmHPxEeAtVGF99%2FNnVS4J50ZWK6AATFxuzb3wThoIaB2L1VkEmxzlLYKm1BYWb4OvI7Xtcm8gJSKV%2BqGSop5AH7fTVnk%2FrDjoENTK%2BDz0yV7Gx4wzukolx18fTQgvXzG5Mffyji1svzuEHsvpTM8Uhg3%2BoBR4oK5wsnFxze%2BpNZbSum%2F81LrM1vgkkc5F4FxjWPbT6vce0ydxmcsOoT&X-Amz-Signature=fad31aa818c3effea60ee89812ca2879de4d459382775042c175a8352499bd27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZB33BI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAf%2BEFTomLGlmBX9Rj4WX8m5bc1GFR7ehQ0GZSzkWqIxAiBeMGrBY2uLy3V02MV38xD4AV7Jk2VRrN7a6q3KVVrFaSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPBXiBQ1tQX%2Fj3o1VKtwDzPhgDsXhqF8af%2Bt6EBPy1FKUu9hfPwSU63B11eXXwdIgF4zakwtZ%2FCysVV%2F2SVz8NxKke%2F2C7LCk9w5NpzwgnroGU1HFo9cYs200lwIcA7nT4RS%2FLuZokvHg2BbBaLNF3W7C5DLKaMkpQ3WszSCsvktt2hwJoyAdt4gW33AtkHeJ8iQWlB%2B5TdLpSSMZUAy4lwQMRK5Dwf4g7m%2BTyHbevZA67r4e5f00bv8eNHKMYT6TJPFVc1oS1Giv%2Fas9cnIq0c2TG7s4hwbHg1w2hqfzQ0qsp3BCvtroIHgcnkqO7t1%2BPuM0E%2FgGLeikS9hK7bOmdqosWvs3LNf7uo5VYO5EpXKNLCAUTGLWYagYwdjeo8NuHVVWCU9LfmHn%2F6F%2F8cdDJD80KYJiczQ9kupKqiDYdUzPxqdxtu%2Fh6lyAWzb4yIn6cVdudoD%2FiYaN%2BQ5sO4pd51c0IKzGpmwb1Z9zSDAs1x4xOOCPNXdelW8JQB4eRgOsvAFYBd28GSH3wzEhO9WLCiabVcr9Y0v9RLuL49zfvMpCCLrXnzWy6c5MPZAfyz%2Fn8uWFvNgGQqqoUDJbtFyXPlB8UKURubBKgaNl2mXfRQX4ceCh08SLUQkkQtt2BUQEsr71lsgfLlgbTgAw6rPGxAY6pgGl%2FsefRE4UrmmHPxEeAtVGF99%2FNnVS4J50ZWK6AATFxuzb3wThoIaB2L1VkEmxzlLYKm1BYWb4OvI7Xtcm8gJSKV%2BqGSop5AH7fTVnk%2FrDjoENTK%2BDz0yV7Gx4wzukolx18fTQgvXzG5Mffyji1svzuEHsvpTM8Uhg3%2BoBR4oK5wsnFxze%2BpNZbSum%2F81LrM1vgkkc5F4FxjWPbT6vce0ydxmcsOoT&X-Amz-Signature=19c5ef9871378a50d77761dea0d41693c5a005d57fd3c1b32cec23c9dfad883a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZB33BI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAf%2BEFTomLGlmBX9Rj4WX8m5bc1GFR7ehQ0GZSzkWqIxAiBeMGrBY2uLy3V02MV38xD4AV7Jk2VRrN7a6q3KVVrFaSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPBXiBQ1tQX%2Fj3o1VKtwDzPhgDsXhqF8af%2Bt6EBPy1FKUu9hfPwSU63B11eXXwdIgF4zakwtZ%2FCysVV%2F2SVz8NxKke%2F2C7LCk9w5NpzwgnroGU1HFo9cYs200lwIcA7nT4RS%2FLuZokvHg2BbBaLNF3W7C5DLKaMkpQ3WszSCsvktt2hwJoyAdt4gW33AtkHeJ8iQWlB%2B5TdLpSSMZUAy4lwQMRK5Dwf4g7m%2BTyHbevZA67r4e5f00bv8eNHKMYT6TJPFVc1oS1Giv%2Fas9cnIq0c2TG7s4hwbHg1w2hqfzQ0qsp3BCvtroIHgcnkqO7t1%2BPuM0E%2FgGLeikS9hK7bOmdqosWvs3LNf7uo5VYO5EpXKNLCAUTGLWYagYwdjeo8NuHVVWCU9LfmHn%2F6F%2F8cdDJD80KYJiczQ9kupKqiDYdUzPxqdxtu%2Fh6lyAWzb4yIn6cVdudoD%2FiYaN%2BQ5sO4pd51c0IKzGpmwb1Z9zSDAs1x4xOOCPNXdelW8JQB4eRgOsvAFYBd28GSH3wzEhO9WLCiabVcr9Y0v9RLuL49zfvMpCCLrXnzWy6c5MPZAfyz%2Fn8uWFvNgGQqqoUDJbtFyXPlB8UKURubBKgaNl2mXfRQX4ceCh08SLUQkkQtt2BUQEsr71lsgfLlgbTgAw6rPGxAY6pgGl%2FsefRE4UrmmHPxEeAtVGF99%2FNnVS4J50ZWK6AATFxuzb3wThoIaB2L1VkEmxzlLYKm1BYWb4OvI7Xtcm8gJSKV%2BqGSop5AH7fTVnk%2FrDjoENTK%2BDz0yV7Gx4wzukolx18fTQgvXzG5Mffyji1svzuEHsvpTM8Uhg3%2BoBR4oK5wsnFxze%2BpNZbSum%2F81LrM1vgkkc5F4FxjWPbT6vce0ydxmcsOoT&X-Amz-Signature=00e475c1f8f2b61b7dd6cd61c33a293e487d67c7e06e03bce158b08d6c975106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZB33BI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAf%2BEFTomLGlmBX9Rj4WX8m5bc1GFR7ehQ0GZSzkWqIxAiBeMGrBY2uLy3V02MV38xD4AV7Jk2VRrN7a6q3KVVrFaSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPBXiBQ1tQX%2Fj3o1VKtwDzPhgDsXhqF8af%2Bt6EBPy1FKUu9hfPwSU63B11eXXwdIgF4zakwtZ%2FCysVV%2F2SVz8NxKke%2F2C7LCk9w5NpzwgnroGU1HFo9cYs200lwIcA7nT4RS%2FLuZokvHg2BbBaLNF3W7C5DLKaMkpQ3WszSCsvktt2hwJoyAdt4gW33AtkHeJ8iQWlB%2B5TdLpSSMZUAy4lwQMRK5Dwf4g7m%2BTyHbevZA67r4e5f00bv8eNHKMYT6TJPFVc1oS1Giv%2Fas9cnIq0c2TG7s4hwbHg1w2hqfzQ0qsp3BCvtroIHgcnkqO7t1%2BPuM0E%2FgGLeikS9hK7bOmdqosWvs3LNf7uo5VYO5EpXKNLCAUTGLWYagYwdjeo8NuHVVWCU9LfmHn%2F6F%2F8cdDJD80KYJiczQ9kupKqiDYdUzPxqdxtu%2Fh6lyAWzb4yIn6cVdudoD%2FiYaN%2BQ5sO4pd51c0IKzGpmwb1Z9zSDAs1x4xOOCPNXdelW8JQB4eRgOsvAFYBd28GSH3wzEhO9WLCiabVcr9Y0v9RLuL49zfvMpCCLrXnzWy6c5MPZAfyz%2Fn8uWFvNgGQqqoUDJbtFyXPlB8UKURubBKgaNl2mXfRQX4ceCh08SLUQkkQtt2BUQEsr71lsgfLlgbTgAw6rPGxAY6pgGl%2FsefRE4UrmmHPxEeAtVGF99%2FNnVS4J50ZWK6AATFxuzb3wThoIaB2L1VkEmxzlLYKm1BYWb4OvI7Xtcm8gJSKV%2BqGSop5AH7fTVnk%2FrDjoENTK%2BDz0yV7Gx4wzukolx18fTQgvXzG5Mffyji1svzuEHsvpTM8Uhg3%2BoBR4oK5wsnFxze%2BpNZbSum%2F81LrM1vgkkc5F4FxjWPbT6vce0ydxmcsOoT&X-Amz-Signature=f4b4ccc1b9cd4bbb17cb14867320c67ca686ea9513f80a271f83bbe8a907f978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZB33BI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAf%2BEFTomLGlmBX9Rj4WX8m5bc1GFR7ehQ0GZSzkWqIxAiBeMGrBY2uLy3V02MV38xD4AV7Jk2VRrN7a6q3KVVrFaSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPBXiBQ1tQX%2Fj3o1VKtwDzPhgDsXhqF8af%2Bt6EBPy1FKUu9hfPwSU63B11eXXwdIgF4zakwtZ%2FCysVV%2F2SVz8NxKke%2F2C7LCk9w5NpzwgnroGU1HFo9cYs200lwIcA7nT4RS%2FLuZokvHg2BbBaLNF3W7C5DLKaMkpQ3WszSCsvktt2hwJoyAdt4gW33AtkHeJ8iQWlB%2B5TdLpSSMZUAy4lwQMRK5Dwf4g7m%2BTyHbevZA67r4e5f00bv8eNHKMYT6TJPFVc1oS1Giv%2Fas9cnIq0c2TG7s4hwbHg1w2hqfzQ0qsp3BCvtroIHgcnkqO7t1%2BPuM0E%2FgGLeikS9hK7bOmdqosWvs3LNf7uo5VYO5EpXKNLCAUTGLWYagYwdjeo8NuHVVWCU9LfmHn%2F6F%2F8cdDJD80KYJiczQ9kupKqiDYdUzPxqdxtu%2Fh6lyAWzb4yIn6cVdudoD%2FiYaN%2BQ5sO4pd51c0IKzGpmwb1Z9zSDAs1x4xOOCPNXdelW8JQB4eRgOsvAFYBd28GSH3wzEhO9WLCiabVcr9Y0v9RLuL49zfvMpCCLrXnzWy6c5MPZAfyz%2Fn8uWFvNgGQqqoUDJbtFyXPlB8UKURubBKgaNl2mXfRQX4ceCh08SLUQkkQtt2BUQEsr71lsgfLlgbTgAw6rPGxAY6pgGl%2FsefRE4UrmmHPxEeAtVGF99%2FNnVS4J50ZWK6AATFxuzb3wThoIaB2L1VkEmxzlLYKm1BYWb4OvI7Xtcm8gJSKV%2BqGSop5AH7fTVnk%2FrDjoENTK%2BDz0yV7Gx4wzukolx18fTQgvXzG5Mffyji1svzuEHsvpTM8Uhg3%2BoBR4oK5wsnFxze%2BpNZbSum%2F81LrM1vgkkc5F4FxjWPbT6vce0ydxmcsOoT&X-Amz-Signature=c9da813d1c72216ccb026bb1a905669fc62d08807a758a4ab2119c9f00ebec64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZB33BI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAf%2BEFTomLGlmBX9Rj4WX8m5bc1GFR7ehQ0GZSzkWqIxAiBeMGrBY2uLy3V02MV38xD4AV7Jk2VRrN7a6q3KVVrFaSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPBXiBQ1tQX%2Fj3o1VKtwDzPhgDsXhqF8af%2Bt6EBPy1FKUu9hfPwSU63B11eXXwdIgF4zakwtZ%2FCysVV%2F2SVz8NxKke%2F2C7LCk9w5NpzwgnroGU1HFo9cYs200lwIcA7nT4RS%2FLuZokvHg2BbBaLNF3W7C5DLKaMkpQ3WszSCsvktt2hwJoyAdt4gW33AtkHeJ8iQWlB%2B5TdLpSSMZUAy4lwQMRK5Dwf4g7m%2BTyHbevZA67r4e5f00bv8eNHKMYT6TJPFVc1oS1Giv%2Fas9cnIq0c2TG7s4hwbHg1w2hqfzQ0qsp3BCvtroIHgcnkqO7t1%2BPuM0E%2FgGLeikS9hK7bOmdqosWvs3LNf7uo5VYO5EpXKNLCAUTGLWYagYwdjeo8NuHVVWCU9LfmHn%2F6F%2F8cdDJD80KYJiczQ9kupKqiDYdUzPxqdxtu%2Fh6lyAWzb4yIn6cVdudoD%2FiYaN%2BQ5sO4pd51c0IKzGpmwb1Z9zSDAs1x4xOOCPNXdelW8JQB4eRgOsvAFYBd28GSH3wzEhO9WLCiabVcr9Y0v9RLuL49zfvMpCCLrXnzWy6c5MPZAfyz%2Fn8uWFvNgGQqqoUDJbtFyXPlB8UKURubBKgaNl2mXfRQX4ceCh08SLUQkkQtt2BUQEsr71lsgfLlgbTgAw6rPGxAY6pgGl%2FsefRE4UrmmHPxEeAtVGF99%2FNnVS4J50ZWK6AATFxuzb3wThoIaB2L1VkEmxzlLYKm1BYWb4OvI7Xtcm8gJSKV%2BqGSop5AH7fTVnk%2FrDjoENTK%2BDz0yV7Gx4wzukolx18fTQgvXzG5Mffyji1svzuEHsvpTM8Uhg3%2BoBR4oK5wsnFxze%2BpNZbSum%2F81LrM1vgkkc5F4FxjWPbT6vce0ydxmcsOoT&X-Amz-Signature=193aa081feb60557b3bf7901ea94de0c5074ad5197047d3205041deb8a034793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZB33BI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAf%2BEFTomLGlmBX9Rj4WX8m5bc1GFR7ehQ0GZSzkWqIxAiBeMGrBY2uLy3V02MV38xD4AV7Jk2VRrN7a6q3KVVrFaSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPBXiBQ1tQX%2Fj3o1VKtwDzPhgDsXhqF8af%2Bt6EBPy1FKUu9hfPwSU63B11eXXwdIgF4zakwtZ%2FCysVV%2F2SVz8NxKke%2F2C7LCk9w5NpzwgnroGU1HFo9cYs200lwIcA7nT4RS%2FLuZokvHg2BbBaLNF3W7C5DLKaMkpQ3WszSCsvktt2hwJoyAdt4gW33AtkHeJ8iQWlB%2B5TdLpSSMZUAy4lwQMRK5Dwf4g7m%2BTyHbevZA67r4e5f00bv8eNHKMYT6TJPFVc1oS1Giv%2Fas9cnIq0c2TG7s4hwbHg1w2hqfzQ0qsp3BCvtroIHgcnkqO7t1%2BPuM0E%2FgGLeikS9hK7bOmdqosWvs3LNf7uo5VYO5EpXKNLCAUTGLWYagYwdjeo8NuHVVWCU9LfmHn%2F6F%2F8cdDJD80KYJiczQ9kupKqiDYdUzPxqdxtu%2Fh6lyAWzb4yIn6cVdudoD%2FiYaN%2BQ5sO4pd51c0IKzGpmwb1Z9zSDAs1x4xOOCPNXdelW8JQB4eRgOsvAFYBd28GSH3wzEhO9WLCiabVcr9Y0v9RLuL49zfvMpCCLrXnzWy6c5MPZAfyz%2Fn8uWFvNgGQqqoUDJbtFyXPlB8UKURubBKgaNl2mXfRQX4ceCh08SLUQkkQtt2BUQEsr71lsgfLlgbTgAw6rPGxAY6pgGl%2FsefRE4UrmmHPxEeAtVGF99%2FNnVS4J50ZWK6AATFxuzb3wThoIaB2L1VkEmxzlLYKm1BYWb4OvI7Xtcm8gJSKV%2BqGSop5AH7fTVnk%2FrDjoENTK%2BDz0yV7Gx4wzukolx18fTQgvXzG5Mffyji1svzuEHsvpTM8Uhg3%2BoBR4oK5wsnFxze%2BpNZbSum%2F81LrM1vgkkc5F4FxjWPbT6vce0ydxmcsOoT&X-Amz-Signature=a93ca95dfe21974ba8ea0a8e2db45b98fa5b236d116fa1b3eb8b4fc01511419a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZB33BI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAf%2BEFTomLGlmBX9Rj4WX8m5bc1GFR7ehQ0GZSzkWqIxAiBeMGrBY2uLy3V02MV38xD4AV7Jk2VRrN7a6q3KVVrFaSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPBXiBQ1tQX%2Fj3o1VKtwDzPhgDsXhqF8af%2Bt6EBPy1FKUu9hfPwSU63B11eXXwdIgF4zakwtZ%2FCysVV%2F2SVz8NxKke%2F2C7LCk9w5NpzwgnroGU1HFo9cYs200lwIcA7nT4RS%2FLuZokvHg2BbBaLNF3W7C5DLKaMkpQ3WszSCsvktt2hwJoyAdt4gW33AtkHeJ8iQWlB%2B5TdLpSSMZUAy4lwQMRK5Dwf4g7m%2BTyHbevZA67r4e5f00bv8eNHKMYT6TJPFVc1oS1Giv%2Fas9cnIq0c2TG7s4hwbHg1w2hqfzQ0qsp3BCvtroIHgcnkqO7t1%2BPuM0E%2FgGLeikS9hK7bOmdqosWvs3LNf7uo5VYO5EpXKNLCAUTGLWYagYwdjeo8NuHVVWCU9LfmHn%2F6F%2F8cdDJD80KYJiczQ9kupKqiDYdUzPxqdxtu%2Fh6lyAWzb4yIn6cVdudoD%2FiYaN%2BQ5sO4pd51c0IKzGpmwb1Z9zSDAs1x4xOOCPNXdelW8JQB4eRgOsvAFYBd28GSH3wzEhO9WLCiabVcr9Y0v9RLuL49zfvMpCCLrXnzWy6c5MPZAfyz%2Fn8uWFvNgGQqqoUDJbtFyXPlB8UKURubBKgaNl2mXfRQX4ceCh08SLUQkkQtt2BUQEsr71lsgfLlgbTgAw6rPGxAY6pgGl%2FsefRE4UrmmHPxEeAtVGF99%2FNnVS4J50ZWK6AATFxuzb3wThoIaB2L1VkEmxzlLYKm1BYWb4OvI7Xtcm8gJSKV%2BqGSop5AH7fTVnk%2FrDjoENTK%2BDz0yV7Gx4wzukolx18fTQgvXzG5Mffyji1svzuEHsvpTM8Uhg3%2BoBR4oK5wsnFxze%2BpNZbSum%2F81LrM1vgkkc5F4FxjWPbT6vce0ydxmcsOoT&X-Amz-Signature=bd19fa188da70312aa3d102a8703d0fbe4cf013731b5769cad691de7dad412d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZB33BI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAf%2BEFTomLGlmBX9Rj4WX8m5bc1GFR7ehQ0GZSzkWqIxAiBeMGrBY2uLy3V02MV38xD4AV7Jk2VRrN7a6q3KVVrFaSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPBXiBQ1tQX%2Fj3o1VKtwDzPhgDsXhqF8af%2Bt6EBPy1FKUu9hfPwSU63B11eXXwdIgF4zakwtZ%2FCysVV%2F2SVz8NxKke%2F2C7LCk9w5NpzwgnroGU1HFo9cYs200lwIcA7nT4RS%2FLuZokvHg2BbBaLNF3W7C5DLKaMkpQ3WszSCsvktt2hwJoyAdt4gW33AtkHeJ8iQWlB%2B5TdLpSSMZUAy4lwQMRK5Dwf4g7m%2BTyHbevZA67r4e5f00bv8eNHKMYT6TJPFVc1oS1Giv%2Fas9cnIq0c2TG7s4hwbHg1w2hqfzQ0qsp3BCvtroIHgcnkqO7t1%2BPuM0E%2FgGLeikS9hK7bOmdqosWvs3LNf7uo5VYO5EpXKNLCAUTGLWYagYwdjeo8NuHVVWCU9LfmHn%2F6F%2F8cdDJD80KYJiczQ9kupKqiDYdUzPxqdxtu%2Fh6lyAWzb4yIn6cVdudoD%2FiYaN%2BQ5sO4pd51c0IKzGpmwb1Z9zSDAs1x4xOOCPNXdelW8JQB4eRgOsvAFYBd28GSH3wzEhO9WLCiabVcr9Y0v9RLuL49zfvMpCCLrXnzWy6c5MPZAfyz%2Fn8uWFvNgGQqqoUDJbtFyXPlB8UKURubBKgaNl2mXfRQX4ceCh08SLUQkkQtt2BUQEsr71lsgfLlgbTgAw6rPGxAY6pgGl%2FsefRE4UrmmHPxEeAtVGF99%2FNnVS4J50ZWK6AATFxuzb3wThoIaB2L1VkEmxzlLYKm1BYWb4OvI7Xtcm8gJSKV%2BqGSop5AH7fTVnk%2FrDjoENTK%2BDz0yV7Gx4wzukolx18fTQgvXzG5Mffyji1svzuEHsvpTM8Uhg3%2BoBR4oK5wsnFxze%2BpNZbSum%2F81LrM1vgkkc5F4FxjWPbT6vce0ydxmcsOoT&X-Amz-Signature=d987b7abc5b46a35e4f92f050781d3a338dddd4c1942707642e31712ce09c8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZB33BI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAf%2BEFTomLGlmBX9Rj4WX8m5bc1GFR7ehQ0GZSzkWqIxAiBeMGrBY2uLy3V02MV38xD4AV7Jk2VRrN7a6q3KVVrFaSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMPBXiBQ1tQX%2Fj3o1VKtwDzPhgDsXhqF8af%2Bt6EBPy1FKUu9hfPwSU63B11eXXwdIgF4zakwtZ%2FCysVV%2F2SVz8NxKke%2F2C7LCk9w5NpzwgnroGU1HFo9cYs200lwIcA7nT4RS%2FLuZokvHg2BbBaLNF3W7C5DLKaMkpQ3WszSCsvktt2hwJoyAdt4gW33AtkHeJ8iQWlB%2B5TdLpSSMZUAy4lwQMRK5Dwf4g7m%2BTyHbevZA67r4e5f00bv8eNHKMYT6TJPFVc1oS1Giv%2Fas9cnIq0c2TG7s4hwbHg1w2hqfzQ0qsp3BCvtroIHgcnkqO7t1%2BPuM0E%2FgGLeikS9hK7bOmdqosWvs3LNf7uo5VYO5EpXKNLCAUTGLWYagYwdjeo8NuHVVWCU9LfmHn%2F6F%2F8cdDJD80KYJiczQ9kupKqiDYdUzPxqdxtu%2Fh6lyAWzb4yIn6cVdudoD%2FiYaN%2BQ5sO4pd51c0IKzGpmwb1Z9zSDAs1x4xOOCPNXdelW8JQB4eRgOsvAFYBd28GSH3wzEhO9WLCiabVcr9Y0v9RLuL49zfvMpCCLrXnzWy6c5MPZAfyz%2Fn8uWFvNgGQqqoUDJbtFyXPlB8UKURubBKgaNl2mXfRQX4ceCh08SLUQkkQtt2BUQEsr71lsgfLlgbTgAw6rPGxAY6pgGl%2FsefRE4UrmmHPxEeAtVGF99%2FNnVS4J50ZWK6AATFxuzb3wThoIaB2L1VkEmxzlLYKm1BYWb4OvI7Xtcm8gJSKV%2BqGSop5AH7fTVnk%2FrDjoENTK%2BDz0yV7Gx4wzukolx18fTQgvXzG5Mffyji1svzuEHsvpTM8Uhg3%2BoBR4oK5wsnFxze%2BpNZbSum%2F81LrM1vgkkc5F4FxjWPbT6vce0ydxmcsOoT&X-Amz-Signature=c0ed0ba82ef71a0f5e2754cb6f00bffe4642fab2cf041a1033bfa986922f60f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UINUNWB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDcHTwum73N6zl17NgbBgabS%2BpCuDWcnNSjCDGa9Eq94gIhALRx7F1fgpedSxzWTZi1ZEL%2BsihIsyzdQ706Ukm3C9zMKv8DCFcQABoMNjM3NDIzMTgzODA1IgypmqyDf%2Fsmq2DOWaoq3AOPUVGJ3owq18eFvGGiScerEpQFt8IC945WPQSTpb4rT6I2nLZnUduBXZTFn0ZoE5OHfw1zd5H%2FiTwV1P8MZd5WzgikQ%2F8sNofk6d2StWHEohw%2FQ7iq%2BOhT6qRL%2FnMZ4kQh9mO9nEXle9D%2FAP7RHAcmQXLw0htpPpG5qfTcvPi8clXqKALXF5o8w0KLdDj14s4TApVthetqQU5XED9xD7TZT4XhJlp0lYKs1S7i8jFTgRYWS0SaFIsmxRVSeZZs1flMbGVCZs7AIyMaN%2BC0ARZlPIGslhLvC3zYuFhuHrRfHcqWrtAGFzMzehqVTsWzjG%2Fs8GOMnGEYKzBlqm3ck6En6iGmTLCvic%2FOUtZ8LYGFBqOrMqVcDH%2FKSPjVFMKk6SB2Yt9wqzZNR3o03xezZJFOB%2FMsKwisRMOzgv3zLXNLLlL3rLEAZm%2B2h980uYH9%2ByVLzu5bblP%2Bt6tDnAdEsiQfD8cq2aqO6DZW5qeCZ8SR3CuhrzhdvzGAxu%2B%2BQbHQeO7dtoNZ3gF3aidh%2BoMl5ruESPr9LS01d%2FocqdUg%2FONWbWPhigTRS5paOZwMz%2FnYI32C283uqjxW4OdLp57AK4GgmjLVyUAQgG1j4X8cXmGlZ1GInDiZl3gbI0L%2F%2BzCZtMbEBjqkAbGUJWkb6pVFZ7VzZWUQdpUUhGX1mrp7%2Fcq8nWBpOZ5T1VZxcS3RQm0qg0bBlSJSnZ9pOif9o6Jj6JKHG1%2BIOoLaDLM5Wsq2tP2c9d1BPw5S5FJBdxh6FIq4t8hQuEbk94frclmyc%2BhPFTAAk%2BtJ032FMcFJlXkUDfOKhMSTKK%2BNHviEXiaegUpp8csSDOIi1CTQ2USENAPdzA4b%2FJIyXtuAts8k&X-Amz-Signature=d75fa9aa2bea017a508341eef35c4cc8d895fb1070dd93d78f81f5168c95f924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATHKPIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA1LIvRCLS7%2FbGA0kcwpF%2BM7gnZa%2Fa6TIxjRyY96dnSAiEAtomTAgyur%2BssPq5ucB7TMMW57iPGP3vPuWCRnSVCjOgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDHeikhz8J2ai7J64CrcA8SD4pzkp8u1ZzPybx3E0ZXNOeRllyltb1PqAkwg2GUIUvMinQSW4Xw7V6CaO8Ox08oDTZ1mJ7AOqUMZCnWvaMWsO%2FeSOW00r3qNntleQ6jKrY5d%2B7k3xBbHlOMjLSDYBY6mxDkd%2B8iu1o2mHhpelwsA6MM9l5TLrQ4Eid8eBaTkSmFI%2FhX5iUizAY5mv0J%2B%2F4fiQwu3MABRgUxJviubLLRknDKcqr%2F1Zab2gG%2FUlsSyrRCcY9VmXUA2HjESdXUQ5vEsyD%2FxaoIKFE%2BYM%2B5yVO6kaBshllodM%2F0W2aWub0dXdP3GKzsrjBdOzTM2OSbU3XbM0L6wKcNqkz%2FsuogDWPJUBq0B4zl6ViwLfxmr%2BlqTxEEu1b%2B8vjiNlmDKNvhHofmbSHQmtQLFmbw8RuyRzS5jWnQQMSJjBqgv34V3I%2BN6VTP%2BPtLpPZYWoDOEj4ZSm90ddeJIrNsZZLy15JfzwfN1HbPiDmJ62gMIJ3M6f1y%2FPaj22fHgPLzv3oSrnZcOKpw5RRtjJe1sSKjRBnJJU%2FlJbAz3prTYhkXj4yKfhlYfHzJD%2FGTON0YF8SiLV1rOPjwbBy6kCJxaLfXDOcxQKWB%2BSX%2FGhSrZDF0wJMw60oEiqVtPWYGj45bM5ybJMIy0xsQGOqUBIuLyc%2FzGkLPhpV%2BKBqv02WyVqtWPe7j2%2FmftqRMhGGvnc5AqyiVqytCHk%2Bm%2Bk%2F96iXMPBrzoVViy716HwZ6f5SugNLNmbx5aoX1FyQShJ6A35WTwndopFpT3KEH7cH%2BHDGuXbG1ZRp%2FliqUMfbABmw%2BHsYc%2FvBPC7nGoGsAmsFZf%2B8rLz59v5QnA24OIiWOc1r3ZvQ5PNl5PoYB09dtkooNKIqoa&X-Amz-Signature=27942b5aa0174b2abffbfcf9da94e9f754a261453075b1bfd3a017101bf6f98a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATHKPIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA1LIvRCLS7%2FbGA0kcwpF%2BM7gnZa%2Fa6TIxjRyY96dnSAiEAtomTAgyur%2BssPq5ucB7TMMW57iPGP3vPuWCRnSVCjOgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDHeikhz8J2ai7J64CrcA8SD4pzkp8u1ZzPybx3E0ZXNOeRllyltb1PqAkwg2GUIUvMinQSW4Xw7V6CaO8Ox08oDTZ1mJ7AOqUMZCnWvaMWsO%2FeSOW00r3qNntleQ6jKrY5d%2B7k3xBbHlOMjLSDYBY6mxDkd%2B8iu1o2mHhpelwsA6MM9l5TLrQ4Eid8eBaTkSmFI%2FhX5iUizAY5mv0J%2B%2F4fiQwu3MABRgUxJviubLLRknDKcqr%2F1Zab2gG%2FUlsSyrRCcY9VmXUA2HjESdXUQ5vEsyD%2FxaoIKFE%2BYM%2B5yVO6kaBshllodM%2F0W2aWub0dXdP3GKzsrjBdOzTM2OSbU3XbM0L6wKcNqkz%2FsuogDWPJUBq0B4zl6ViwLfxmr%2BlqTxEEu1b%2B8vjiNlmDKNvhHofmbSHQmtQLFmbw8RuyRzS5jWnQQMSJjBqgv34V3I%2BN6VTP%2BPtLpPZYWoDOEj4ZSm90ddeJIrNsZZLy15JfzwfN1HbPiDmJ62gMIJ3M6f1y%2FPaj22fHgPLzv3oSrnZcOKpw5RRtjJe1sSKjRBnJJU%2FlJbAz3prTYhkXj4yKfhlYfHzJD%2FGTON0YF8SiLV1rOPjwbBy6kCJxaLfXDOcxQKWB%2BSX%2FGhSrZDF0wJMw60oEiqVtPWYGj45bM5ybJMIy0xsQGOqUBIuLyc%2FzGkLPhpV%2BKBqv02WyVqtWPe7j2%2FmftqRMhGGvnc5AqyiVqytCHk%2Bm%2Bk%2F96iXMPBrzoVViy716HwZ6f5SugNLNmbx5aoX1FyQShJ6A35WTwndopFpT3KEH7cH%2BHDGuXbG1ZRp%2FliqUMfbABmw%2BHsYc%2FvBPC7nGoGsAmsFZf%2B8rLz59v5QnA24OIiWOc1r3ZvQ5PNl5PoYB09dtkooNKIqoa&X-Amz-Signature=f7a091db2f396f61c0ce964fcc7486338b1361716de2337305c496de103e306f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATHKPIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA1LIvRCLS7%2FbGA0kcwpF%2BM7gnZa%2Fa6TIxjRyY96dnSAiEAtomTAgyur%2BssPq5ucB7TMMW57iPGP3vPuWCRnSVCjOgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDHeikhz8J2ai7J64CrcA8SD4pzkp8u1ZzPybx3E0ZXNOeRllyltb1PqAkwg2GUIUvMinQSW4Xw7V6CaO8Ox08oDTZ1mJ7AOqUMZCnWvaMWsO%2FeSOW00r3qNntleQ6jKrY5d%2B7k3xBbHlOMjLSDYBY6mxDkd%2B8iu1o2mHhpelwsA6MM9l5TLrQ4Eid8eBaTkSmFI%2FhX5iUizAY5mv0J%2B%2F4fiQwu3MABRgUxJviubLLRknDKcqr%2F1Zab2gG%2FUlsSyrRCcY9VmXUA2HjESdXUQ5vEsyD%2FxaoIKFE%2BYM%2B5yVO6kaBshllodM%2F0W2aWub0dXdP3GKzsrjBdOzTM2OSbU3XbM0L6wKcNqkz%2FsuogDWPJUBq0B4zl6ViwLfxmr%2BlqTxEEu1b%2B8vjiNlmDKNvhHofmbSHQmtQLFmbw8RuyRzS5jWnQQMSJjBqgv34V3I%2BN6VTP%2BPtLpPZYWoDOEj4ZSm90ddeJIrNsZZLy15JfzwfN1HbPiDmJ62gMIJ3M6f1y%2FPaj22fHgPLzv3oSrnZcOKpw5RRtjJe1sSKjRBnJJU%2FlJbAz3prTYhkXj4yKfhlYfHzJD%2FGTON0YF8SiLV1rOPjwbBy6kCJxaLfXDOcxQKWB%2BSX%2FGhSrZDF0wJMw60oEiqVtPWYGj45bM5ybJMIy0xsQGOqUBIuLyc%2FzGkLPhpV%2BKBqv02WyVqtWPe7j2%2FmftqRMhGGvnc5AqyiVqytCHk%2Bm%2Bk%2F96iXMPBrzoVViy716HwZ6f5SugNLNmbx5aoX1FyQShJ6A35WTwndopFpT3KEH7cH%2BHDGuXbG1ZRp%2FliqUMfbABmw%2BHsYc%2FvBPC7nGoGsAmsFZf%2B8rLz59v5QnA24OIiWOc1r3ZvQ5PNl5PoYB09dtkooNKIqoa&X-Amz-Signature=335b09d37ddbbf2926fa8540a850abe99baffaad761eed3075a8c14756f01ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATHKPIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA1LIvRCLS7%2FbGA0kcwpF%2BM7gnZa%2Fa6TIxjRyY96dnSAiEAtomTAgyur%2BssPq5ucB7TMMW57iPGP3vPuWCRnSVCjOgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDHeikhz8J2ai7J64CrcA8SD4pzkp8u1ZzPybx3E0ZXNOeRllyltb1PqAkwg2GUIUvMinQSW4Xw7V6CaO8Ox08oDTZ1mJ7AOqUMZCnWvaMWsO%2FeSOW00r3qNntleQ6jKrY5d%2B7k3xBbHlOMjLSDYBY6mxDkd%2B8iu1o2mHhpelwsA6MM9l5TLrQ4Eid8eBaTkSmFI%2FhX5iUizAY5mv0J%2B%2F4fiQwu3MABRgUxJviubLLRknDKcqr%2F1Zab2gG%2FUlsSyrRCcY9VmXUA2HjESdXUQ5vEsyD%2FxaoIKFE%2BYM%2B5yVO6kaBshllodM%2F0W2aWub0dXdP3GKzsrjBdOzTM2OSbU3XbM0L6wKcNqkz%2FsuogDWPJUBq0B4zl6ViwLfxmr%2BlqTxEEu1b%2B8vjiNlmDKNvhHofmbSHQmtQLFmbw8RuyRzS5jWnQQMSJjBqgv34V3I%2BN6VTP%2BPtLpPZYWoDOEj4ZSm90ddeJIrNsZZLy15JfzwfN1HbPiDmJ62gMIJ3M6f1y%2FPaj22fHgPLzv3oSrnZcOKpw5RRtjJe1sSKjRBnJJU%2FlJbAz3prTYhkXj4yKfhlYfHzJD%2FGTON0YF8SiLV1rOPjwbBy6kCJxaLfXDOcxQKWB%2BSX%2FGhSrZDF0wJMw60oEiqVtPWYGj45bM5ybJMIy0xsQGOqUBIuLyc%2FzGkLPhpV%2BKBqv02WyVqtWPe7j2%2FmftqRMhGGvnc5AqyiVqytCHk%2Bm%2Bk%2F96iXMPBrzoVViy716HwZ6f5SugNLNmbx5aoX1FyQShJ6A35WTwndopFpT3KEH7cH%2BHDGuXbG1ZRp%2FliqUMfbABmw%2BHsYc%2FvBPC7nGoGsAmsFZf%2B8rLz59v5QnA24OIiWOc1r3ZvQ5PNl5PoYB09dtkooNKIqoa&X-Amz-Signature=9ff34b9b15c4de5ca3a0e9b39c8deba51d4c62ba981888f31ba3d8e9e561d388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATHKPIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA1LIvRCLS7%2FbGA0kcwpF%2BM7gnZa%2Fa6TIxjRyY96dnSAiEAtomTAgyur%2BssPq5ucB7TMMW57iPGP3vPuWCRnSVCjOgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDHeikhz8J2ai7J64CrcA8SD4pzkp8u1ZzPybx3E0ZXNOeRllyltb1PqAkwg2GUIUvMinQSW4Xw7V6CaO8Ox08oDTZ1mJ7AOqUMZCnWvaMWsO%2FeSOW00r3qNntleQ6jKrY5d%2B7k3xBbHlOMjLSDYBY6mxDkd%2B8iu1o2mHhpelwsA6MM9l5TLrQ4Eid8eBaTkSmFI%2FhX5iUizAY5mv0J%2B%2F4fiQwu3MABRgUxJviubLLRknDKcqr%2F1Zab2gG%2FUlsSyrRCcY9VmXUA2HjESdXUQ5vEsyD%2FxaoIKFE%2BYM%2B5yVO6kaBshllodM%2F0W2aWub0dXdP3GKzsrjBdOzTM2OSbU3XbM0L6wKcNqkz%2FsuogDWPJUBq0B4zl6ViwLfxmr%2BlqTxEEu1b%2B8vjiNlmDKNvhHofmbSHQmtQLFmbw8RuyRzS5jWnQQMSJjBqgv34V3I%2BN6VTP%2BPtLpPZYWoDOEj4ZSm90ddeJIrNsZZLy15JfzwfN1HbPiDmJ62gMIJ3M6f1y%2FPaj22fHgPLzv3oSrnZcOKpw5RRtjJe1sSKjRBnJJU%2FlJbAz3prTYhkXj4yKfhlYfHzJD%2FGTON0YF8SiLV1rOPjwbBy6kCJxaLfXDOcxQKWB%2BSX%2FGhSrZDF0wJMw60oEiqVtPWYGj45bM5ybJMIy0xsQGOqUBIuLyc%2FzGkLPhpV%2BKBqv02WyVqtWPe7j2%2FmftqRMhGGvnc5AqyiVqytCHk%2Bm%2Bk%2F96iXMPBrzoVViy716HwZ6f5SugNLNmbx5aoX1FyQShJ6A35WTwndopFpT3KEH7cH%2BHDGuXbG1ZRp%2FliqUMfbABmw%2BHsYc%2FvBPC7nGoGsAmsFZf%2B8rLz59v5QnA24OIiWOc1r3ZvQ5PNl5PoYB09dtkooNKIqoa&X-Amz-Signature=f35976c9c27097f0a5531e27e18605fcf6e94bca0f2a34476d608e608fcd538a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATHKPIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA1LIvRCLS7%2FbGA0kcwpF%2BM7gnZa%2Fa6TIxjRyY96dnSAiEAtomTAgyur%2BssPq5ucB7TMMW57iPGP3vPuWCRnSVCjOgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDHeikhz8J2ai7J64CrcA8SD4pzkp8u1ZzPybx3E0ZXNOeRllyltb1PqAkwg2GUIUvMinQSW4Xw7V6CaO8Ox08oDTZ1mJ7AOqUMZCnWvaMWsO%2FeSOW00r3qNntleQ6jKrY5d%2B7k3xBbHlOMjLSDYBY6mxDkd%2B8iu1o2mHhpelwsA6MM9l5TLrQ4Eid8eBaTkSmFI%2FhX5iUizAY5mv0J%2B%2F4fiQwu3MABRgUxJviubLLRknDKcqr%2F1Zab2gG%2FUlsSyrRCcY9VmXUA2HjESdXUQ5vEsyD%2FxaoIKFE%2BYM%2B5yVO6kaBshllodM%2F0W2aWub0dXdP3GKzsrjBdOzTM2OSbU3XbM0L6wKcNqkz%2FsuogDWPJUBq0B4zl6ViwLfxmr%2BlqTxEEu1b%2B8vjiNlmDKNvhHofmbSHQmtQLFmbw8RuyRzS5jWnQQMSJjBqgv34V3I%2BN6VTP%2BPtLpPZYWoDOEj4ZSm90ddeJIrNsZZLy15JfzwfN1HbPiDmJ62gMIJ3M6f1y%2FPaj22fHgPLzv3oSrnZcOKpw5RRtjJe1sSKjRBnJJU%2FlJbAz3prTYhkXj4yKfhlYfHzJD%2FGTON0YF8SiLV1rOPjwbBy6kCJxaLfXDOcxQKWB%2BSX%2FGhSrZDF0wJMw60oEiqVtPWYGj45bM5ybJMIy0xsQGOqUBIuLyc%2FzGkLPhpV%2BKBqv02WyVqtWPe7j2%2FmftqRMhGGvnc5AqyiVqytCHk%2Bm%2Bk%2F96iXMPBrzoVViy716HwZ6f5SugNLNmbx5aoX1FyQShJ6A35WTwndopFpT3KEH7cH%2BHDGuXbG1ZRp%2FliqUMfbABmw%2BHsYc%2FvBPC7nGoGsAmsFZf%2B8rLz59v5QnA24OIiWOc1r3ZvQ5PNl5PoYB09dtkooNKIqoa&X-Amz-Signature=7670fd70579be7586ce6568577863ec33e98bfc1b4fc83bd874df710ed174c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATHKPIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA1LIvRCLS7%2FbGA0kcwpF%2BM7gnZa%2Fa6TIxjRyY96dnSAiEAtomTAgyur%2BssPq5ucB7TMMW57iPGP3vPuWCRnSVCjOgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDHeikhz8J2ai7J64CrcA8SD4pzkp8u1ZzPybx3E0ZXNOeRllyltb1PqAkwg2GUIUvMinQSW4Xw7V6CaO8Ox08oDTZ1mJ7AOqUMZCnWvaMWsO%2FeSOW00r3qNntleQ6jKrY5d%2B7k3xBbHlOMjLSDYBY6mxDkd%2B8iu1o2mHhpelwsA6MM9l5TLrQ4Eid8eBaTkSmFI%2FhX5iUizAY5mv0J%2B%2F4fiQwu3MABRgUxJviubLLRknDKcqr%2F1Zab2gG%2FUlsSyrRCcY9VmXUA2HjESdXUQ5vEsyD%2FxaoIKFE%2BYM%2B5yVO6kaBshllodM%2F0W2aWub0dXdP3GKzsrjBdOzTM2OSbU3XbM0L6wKcNqkz%2FsuogDWPJUBq0B4zl6ViwLfxmr%2BlqTxEEu1b%2B8vjiNlmDKNvhHofmbSHQmtQLFmbw8RuyRzS5jWnQQMSJjBqgv34V3I%2BN6VTP%2BPtLpPZYWoDOEj4ZSm90ddeJIrNsZZLy15JfzwfN1HbPiDmJ62gMIJ3M6f1y%2FPaj22fHgPLzv3oSrnZcOKpw5RRtjJe1sSKjRBnJJU%2FlJbAz3prTYhkXj4yKfhlYfHzJD%2FGTON0YF8SiLV1rOPjwbBy6kCJxaLfXDOcxQKWB%2BSX%2FGhSrZDF0wJMw60oEiqVtPWYGj45bM5ybJMIy0xsQGOqUBIuLyc%2FzGkLPhpV%2BKBqv02WyVqtWPe7j2%2FmftqRMhGGvnc5AqyiVqytCHk%2Bm%2Bk%2F96iXMPBrzoVViy716HwZ6f5SugNLNmbx5aoX1FyQShJ6A35WTwndopFpT3KEH7cH%2BHDGuXbG1ZRp%2FliqUMfbABmw%2BHsYc%2FvBPC7nGoGsAmsFZf%2B8rLz59v5QnA24OIiWOc1r3ZvQ5PNl5PoYB09dtkooNKIqoa&X-Amz-Signature=aafc1d36cda0c0531ec9567c41d0f9730f244c949f554f920782df28b5d4ce07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATHKPIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA1LIvRCLS7%2FbGA0kcwpF%2BM7gnZa%2Fa6TIxjRyY96dnSAiEAtomTAgyur%2BssPq5ucB7TMMW57iPGP3vPuWCRnSVCjOgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDHeikhz8J2ai7J64CrcA8SD4pzkp8u1ZzPybx3E0ZXNOeRllyltb1PqAkwg2GUIUvMinQSW4Xw7V6CaO8Ox08oDTZ1mJ7AOqUMZCnWvaMWsO%2FeSOW00r3qNntleQ6jKrY5d%2B7k3xBbHlOMjLSDYBY6mxDkd%2B8iu1o2mHhpelwsA6MM9l5TLrQ4Eid8eBaTkSmFI%2FhX5iUizAY5mv0J%2B%2F4fiQwu3MABRgUxJviubLLRknDKcqr%2F1Zab2gG%2FUlsSyrRCcY9VmXUA2HjESdXUQ5vEsyD%2FxaoIKFE%2BYM%2B5yVO6kaBshllodM%2F0W2aWub0dXdP3GKzsrjBdOzTM2OSbU3XbM0L6wKcNqkz%2FsuogDWPJUBq0B4zl6ViwLfxmr%2BlqTxEEu1b%2B8vjiNlmDKNvhHofmbSHQmtQLFmbw8RuyRzS5jWnQQMSJjBqgv34V3I%2BN6VTP%2BPtLpPZYWoDOEj4ZSm90ddeJIrNsZZLy15JfzwfN1HbPiDmJ62gMIJ3M6f1y%2FPaj22fHgPLzv3oSrnZcOKpw5RRtjJe1sSKjRBnJJU%2FlJbAz3prTYhkXj4yKfhlYfHzJD%2FGTON0YF8SiLV1rOPjwbBy6kCJxaLfXDOcxQKWB%2BSX%2FGhSrZDF0wJMw60oEiqVtPWYGj45bM5ybJMIy0xsQGOqUBIuLyc%2FzGkLPhpV%2BKBqv02WyVqtWPe7j2%2FmftqRMhGGvnc5AqyiVqytCHk%2Bm%2Bk%2F96iXMPBrzoVViy716HwZ6f5SugNLNmbx5aoX1FyQShJ6A35WTwndopFpT3KEH7cH%2BHDGuXbG1ZRp%2FliqUMfbABmw%2BHsYc%2FvBPC7nGoGsAmsFZf%2B8rLz59v5QnA24OIiWOc1r3ZvQ5PNl5PoYB09dtkooNKIqoa&X-Amz-Signature=f47949a166018596937d3d2f94157018be98c449414b79e36ef72ed107e9e627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATHKPIH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEA1LIvRCLS7%2FbGA0kcwpF%2BM7gnZa%2Fa6TIxjRyY96dnSAiEAtomTAgyur%2BssPq5ucB7TMMW57iPGP3vPuWCRnSVCjOgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDHeikhz8J2ai7J64CrcA8SD4pzkp8u1ZzPybx3E0ZXNOeRllyltb1PqAkwg2GUIUvMinQSW4Xw7V6CaO8Ox08oDTZ1mJ7AOqUMZCnWvaMWsO%2FeSOW00r3qNntleQ6jKrY5d%2B7k3xBbHlOMjLSDYBY6mxDkd%2B8iu1o2mHhpelwsA6MM9l5TLrQ4Eid8eBaTkSmFI%2FhX5iUizAY5mv0J%2B%2F4fiQwu3MABRgUxJviubLLRknDKcqr%2F1Zab2gG%2FUlsSyrRCcY9VmXUA2HjESdXUQ5vEsyD%2FxaoIKFE%2BYM%2B5yVO6kaBshllodM%2F0W2aWub0dXdP3GKzsrjBdOzTM2OSbU3XbM0L6wKcNqkz%2FsuogDWPJUBq0B4zl6ViwLfxmr%2BlqTxEEu1b%2B8vjiNlmDKNvhHofmbSHQmtQLFmbw8RuyRzS5jWnQQMSJjBqgv34V3I%2BN6VTP%2BPtLpPZYWoDOEj4ZSm90ddeJIrNsZZLy15JfzwfN1HbPiDmJ62gMIJ3M6f1y%2FPaj22fHgPLzv3oSrnZcOKpw5RRtjJe1sSKjRBnJJU%2FlJbAz3prTYhkXj4yKfhlYfHzJD%2FGTON0YF8SiLV1rOPjwbBy6kCJxaLfXDOcxQKWB%2BSX%2FGhSrZDF0wJMw60oEiqVtPWYGj45bM5ybJMIy0xsQGOqUBIuLyc%2FzGkLPhpV%2BKBqv02WyVqtWPe7j2%2FmftqRMhGGvnc5AqyiVqytCHk%2Bm%2Bk%2F96iXMPBrzoVViy716HwZ6f5SugNLNmbx5aoX1FyQShJ6A35WTwndopFpT3KEH7cH%2BHDGuXbG1ZRp%2FliqUMfbABmw%2BHsYc%2FvBPC7nGoGsAmsFZf%2B8rLz59v5QnA24OIiWOc1r3ZvQ5PNl5PoYB09dtkooNKIqoa&X-Amz-Signature=47f439984cae3db5008df5271ab33047f11663a3b84b922bc0abb3dc4cbfc219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
