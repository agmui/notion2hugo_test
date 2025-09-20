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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW7CEIY%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDI1JmvYo3kVywakxkcQQe3DTTi10Ma1SNpqcrDkw5vlAIhALNuS%2BIKM%2BCQdq4Yxshek9V%2BqA1JP%2Fps60qZWl7aG01DKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmwonoTxh9Zg7p7C0q3ANZqx8fQemPU12AlkBNnb8PXi1hrefyu2l35kYVfn2GfSBBD6xLNkk0iipSoNbvyl1qJo1ZSyb4pFc11HY%2FJYXwO2H1VbQehSM%2Bjc2AX9LDUKiCf99n%2BjySjNW3zHeXT91E8CvxgWczHju8nPuDSR2k%2F%2FaqxZ5ltskAXmde5io22pvqfXQ1HaQlRJVdQPc88slJFSUMwSZrUWg9C3VTDR%2FrP2O6CdH9Qjv0oK60CK5iIeVuxRXw2dn8IN6vf7d0ak4RkqW9JujihpJAHa7%2F7kURb3KPdJu2nS%2FDKBkoDh99p%2BYxmjeMlxKElLaTRykfmTwmmv6tStxfuRFIQ1%2BfKnKUKvYbwOqMorxKuizJ83t5Wqefxs2K8IwcaaJ38SsU6CD0CLwhDzQhn0%2ByifXxe5erzXZcYImv4iOhjOKrasfY69QfORQTuDn91tHc9T0qEvqz3aGwDEgeybYT9HskPx5hJJLDwRkYLIVBlJhLrj4PZ161M4hqZkJln9wdgM6tchKb8Xy1nDrwv8QK5Ykfj%2FEJb0o29Vt57naFqayPuCs6AVLqwQUinfw4jQh96gGuXn1LOUHTmNe7Gctrzqqhgqz2LNztouFWrrdgjJ%2BQlUgghmQE3huyTFXjDxXrAzDV%2F7fGBjqkAcZgTMaWjqpjQjDuVkgUwa1Ty3bUZJAC82DwImoyJQ7XI9UPtwSWNAdw5od2zQVHoxW5SQl4frVSU7CTd1qjO1xOH7XsI3dy6fjJ1txo9KaYTICt1mprqU2m41LjloNxu%2BE2QQyryO013S6GyLSGFi%2BgFOngdQf2qyDLCWgk3n8izZLBwZVO8AL1FN8bnAJfJ0iivDc%2B4J3bMPX5iLNI4al0xTSW&X-Amz-Signature=1e0b09a0aa177e9ca09416563a00d6f54afa4158f6bd39588dea2614d6a0c9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW7CEIY%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDI1JmvYo3kVywakxkcQQe3DTTi10Ma1SNpqcrDkw5vlAIhALNuS%2BIKM%2BCQdq4Yxshek9V%2BqA1JP%2Fps60qZWl7aG01DKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmwonoTxh9Zg7p7C0q3ANZqx8fQemPU12AlkBNnb8PXi1hrefyu2l35kYVfn2GfSBBD6xLNkk0iipSoNbvyl1qJo1ZSyb4pFc11HY%2FJYXwO2H1VbQehSM%2Bjc2AX9LDUKiCf99n%2BjySjNW3zHeXT91E8CvxgWczHju8nPuDSR2k%2F%2FaqxZ5ltskAXmde5io22pvqfXQ1HaQlRJVdQPc88slJFSUMwSZrUWg9C3VTDR%2FrP2O6CdH9Qjv0oK60CK5iIeVuxRXw2dn8IN6vf7d0ak4RkqW9JujihpJAHa7%2F7kURb3KPdJu2nS%2FDKBkoDh99p%2BYxmjeMlxKElLaTRykfmTwmmv6tStxfuRFIQ1%2BfKnKUKvYbwOqMorxKuizJ83t5Wqefxs2K8IwcaaJ38SsU6CD0CLwhDzQhn0%2ByifXxe5erzXZcYImv4iOhjOKrasfY69QfORQTuDn91tHc9T0qEvqz3aGwDEgeybYT9HskPx5hJJLDwRkYLIVBlJhLrj4PZ161M4hqZkJln9wdgM6tchKb8Xy1nDrwv8QK5Ykfj%2FEJb0o29Vt57naFqayPuCs6AVLqwQUinfw4jQh96gGuXn1LOUHTmNe7Gctrzqqhgqz2LNztouFWrrdgjJ%2BQlUgghmQE3huyTFXjDxXrAzDV%2F7fGBjqkAcZgTMaWjqpjQjDuVkgUwa1Ty3bUZJAC82DwImoyJQ7XI9UPtwSWNAdw5od2zQVHoxW5SQl4frVSU7CTd1qjO1xOH7XsI3dy6fjJ1txo9KaYTICt1mprqU2m41LjloNxu%2BE2QQyryO013S6GyLSGFi%2BgFOngdQf2qyDLCWgk3n8izZLBwZVO8AL1FN8bnAJfJ0iivDc%2B4J3bMPX5iLNI4al0xTSW&X-Amz-Signature=f8220bb19144b32386cfcfe569d2da7ddb72ddf166f36c20198c5fb7b3dd725f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW7CEIY%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDI1JmvYo3kVywakxkcQQe3DTTi10Ma1SNpqcrDkw5vlAIhALNuS%2BIKM%2BCQdq4Yxshek9V%2BqA1JP%2Fps60qZWl7aG01DKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmwonoTxh9Zg7p7C0q3ANZqx8fQemPU12AlkBNnb8PXi1hrefyu2l35kYVfn2GfSBBD6xLNkk0iipSoNbvyl1qJo1ZSyb4pFc11HY%2FJYXwO2H1VbQehSM%2Bjc2AX9LDUKiCf99n%2BjySjNW3zHeXT91E8CvxgWczHju8nPuDSR2k%2F%2FaqxZ5ltskAXmde5io22pvqfXQ1HaQlRJVdQPc88slJFSUMwSZrUWg9C3VTDR%2FrP2O6CdH9Qjv0oK60CK5iIeVuxRXw2dn8IN6vf7d0ak4RkqW9JujihpJAHa7%2F7kURb3KPdJu2nS%2FDKBkoDh99p%2BYxmjeMlxKElLaTRykfmTwmmv6tStxfuRFIQ1%2BfKnKUKvYbwOqMorxKuizJ83t5Wqefxs2K8IwcaaJ38SsU6CD0CLwhDzQhn0%2ByifXxe5erzXZcYImv4iOhjOKrasfY69QfORQTuDn91tHc9T0qEvqz3aGwDEgeybYT9HskPx5hJJLDwRkYLIVBlJhLrj4PZ161M4hqZkJln9wdgM6tchKb8Xy1nDrwv8QK5Ykfj%2FEJb0o29Vt57naFqayPuCs6AVLqwQUinfw4jQh96gGuXn1LOUHTmNe7Gctrzqqhgqz2LNztouFWrrdgjJ%2BQlUgghmQE3huyTFXjDxXrAzDV%2F7fGBjqkAcZgTMaWjqpjQjDuVkgUwa1Ty3bUZJAC82DwImoyJQ7XI9UPtwSWNAdw5od2zQVHoxW5SQl4frVSU7CTd1qjO1xOH7XsI3dy6fjJ1txo9KaYTICt1mprqU2m41LjloNxu%2BE2QQyryO013S6GyLSGFi%2BgFOngdQf2qyDLCWgk3n8izZLBwZVO8AL1FN8bnAJfJ0iivDc%2B4J3bMPX5iLNI4al0xTSW&X-Amz-Signature=32059ad1fdbadc38fefeaa17a989a050b899520f3e0845f9ef4059832bad97b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW7CEIY%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDI1JmvYo3kVywakxkcQQe3DTTi10Ma1SNpqcrDkw5vlAIhALNuS%2BIKM%2BCQdq4Yxshek9V%2BqA1JP%2Fps60qZWl7aG01DKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmwonoTxh9Zg7p7C0q3ANZqx8fQemPU12AlkBNnb8PXi1hrefyu2l35kYVfn2GfSBBD6xLNkk0iipSoNbvyl1qJo1ZSyb4pFc11HY%2FJYXwO2H1VbQehSM%2Bjc2AX9LDUKiCf99n%2BjySjNW3zHeXT91E8CvxgWczHju8nPuDSR2k%2F%2FaqxZ5ltskAXmde5io22pvqfXQ1HaQlRJVdQPc88slJFSUMwSZrUWg9C3VTDR%2FrP2O6CdH9Qjv0oK60CK5iIeVuxRXw2dn8IN6vf7d0ak4RkqW9JujihpJAHa7%2F7kURb3KPdJu2nS%2FDKBkoDh99p%2BYxmjeMlxKElLaTRykfmTwmmv6tStxfuRFIQ1%2BfKnKUKvYbwOqMorxKuizJ83t5Wqefxs2K8IwcaaJ38SsU6CD0CLwhDzQhn0%2ByifXxe5erzXZcYImv4iOhjOKrasfY69QfORQTuDn91tHc9T0qEvqz3aGwDEgeybYT9HskPx5hJJLDwRkYLIVBlJhLrj4PZ161M4hqZkJln9wdgM6tchKb8Xy1nDrwv8QK5Ykfj%2FEJb0o29Vt57naFqayPuCs6AVLqwQUinfw4jQh96gGuXn1LOUHTmNe7Gctrzqqhgqz2LNztouFWrrdgjJ%2BQlUgghmQE3huyTFXjDxXrAzDV%2F7fGBjqkAcZgTMaWjqpjQjDuVkgUwa1Ty3bUZJAC82DwImoyJQ7XI9UPtwSWNAdw5od2zQVHoxW5SQl4frVSU7CTd1qjO1xOH7XsI3dy6fjJ1txo9KaYTICt1mprqU2m41LjloNxu%2BE2QQyryO013S6GyLSGFi%2BgFOngdQf2qyDLCWgk3n8izZLBwZVO8AL1FN8bnAJfJ0iivDc%2B4J3bMPX5iLNI4al0xTSW&X-Amz-Signature=7a87f9179816abf72433615fc7886e23951a02ac0b67fa819d4e820fedd0612f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW7CEIY%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDI1JmvYo3kVywakxkcQQe3DTTi10Ma1SNpqcrDkw5vlAIhALNuS%2BIKM%2BCQdq4Yxshek9V%2BqA1JP%2Fps60qZWl7aG01DKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmwonoTxh9Zg7p7C0q3ANZqx8fQemPU12AlkBNnb8PXi1hrefyu2l35kYVfn2GfSBBD6xLNkk0iipSoNbvyl1qJo1ZSyb4pFc11HY%2FJYXwO2H1VbQehSM%2Bjc2AX9LDUKiCf99n%2BjySjNW3zHeXT91E8CvxgWczHju8nPuDSR2k%2F%2FaqxZ5ltskAXmde5io22pvqfXQ1HaQlRJVdQPc88slJFSUMwSZrUWg9C3VTDR%2FrP2O6CdH9Qjv0oK60CK5iIeVuxRXw2dn8IN6vf7d0ak4RkqW9JujihpJAHa7%2F7kURb3KPdJu2nS%2FDKBkoDh99p%2BYxmjeMlxKElLaTRykfmTwmmv6tStxfuRFIQ1%2BfKnKUKvYbwOqMorxKuizJ83t5Wqefxs2K8IwcaaJ38SsU6CD0CLwhDzQhn0%2ByifXxe5erzXZcYImv4iOhjOKrasfY69QfORQTuDn91tHc9T0qEvqz3aGwDEgeybYT9HskPx5hJJLDwRkYLIVBlJhLrj4PZ161M4hqZkJln9wdgM6tchKb8Xy1nDrwv8QK5Ykfj%2FEJb0o29Vt57naFqayPuCs6AVLqwQUinfw4jQh96gGuXn1LOUHTmNe7Gctrzqqhgqz2LNztouFWrrdgjJ%2BQlUgghmQE3huyTFXjDxXrAzDV%2F7fGBjqkAcZgTMaWjqpjQjDuVkgUwa1Ty3bUZJAC82DwImoyJQ7XI9UPtwSWNAdw5od2zQVHoxW5SQl4frVSU7CTd1qjO1xOH7XsI3dy6fjJ1txo9KaYTICt1mprqU2m41LjloNxu%2BE2QQyryO013S6GyLSGFi%2BgFOngdQf2qyDLCWgk3n8izZLBwZVO8AL1FN8bnAJfJ0iivDc%2B4J3bMPX5iLNI4al0xTSW&X-Amz-Signature=41e37c34e85940a341c7a1389b6bedb1e13345f2e2a5f267a69f4497bf99ba7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW7CEIY%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDI1JmvYo3kVywakxkcQQe3DTTi10Ma1SNpqcrDkw5vlAIhALNuS%2BIKM%2BCQdq4Yxshek9V%2BqA1JP%2Fps60qZWl7aG01DKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmwonoTxh9Zg7p7C0q3ANZqx8fQemPU12AlkBNnb8PXi1hrefyu2l35kYVfn2GfSBBD6xLNkk0iipSoNbvyl1qJo1ZSyb4pFc11HY%2FJYXwO2H1VbQehSM%2Bjc2AX9LDUKiCf99n%2BjySjNW3zHeXT91E8CvxgWczHju8nPuDSR2k%2F%2FaqxZ5ltskAXmde5io22pvqfXQ1HaQlRJVdQPc88slJFSUMwSZrUWg9C3VTDR%2FrP2O6CdH9Qjv0oK60CK5iIeVuxRXw2dn8IN6vf7d0ak4RkqW9JujihpJAHa7%2F7kURb3KPdJu2nS%2FDKBkoDh99p%2BYxmjeMlxKElLaTRykfmTwmmv6tStxfuRFIQ1%2BfKnKUKvYbwOqMorxKuizJ83t5Wqefxs2K8IwcaaJ38SsU6CD0CLwhDzQhn0%2ByifXxe5erzXZcYImv4iOhjOKrasfY69QfORQTuDn91tHc9T0qEvqz3aGwDEgeybYT9HskPx5hJJLDwRkYLIVBlJhLrj4PZ161M4hqZkJln9wdgM6tchKb8Xy1nDrwv8QK5Ykfj%2FEJb0o29Vt57naFqayPuCs6AVLqwQUinfw4jQh96gGuXn1LOUHTmNe7Gctrzqqhgqz2LNztouFWrrdgjJ%2BQlUgghmQE3huyTFXjDxXrAzDV%2F7fGBjqkAcZgTMaWjqpjQjDuVkgUwa1Ty3bUZJAC82DwImoyJQ7XI9UPtwSWNAdw5od2zQVHoxW5SQl4frVSU7CTd1qjO1xOH7XsI3dy6fjJ1txo9KaYTICt1mprqU2m41LjloNxu%2BE2QQyryO013S6GyLSGFi%2BgFOngdQf2qyDLCWgk3n8izZLBwZVO8AL1FN8bnAJfJ0iivDc%2B4J3bMPX5iLNI4al0xTSW&X-Amz-Signature=99bedafe9f1d749e68b3dbac80d878f24cd1b61e1f3cce109a966eecfd87f607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW7CEIY%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDI1JmvYo3kVywakxkcQQe3DTTi10Ma1SNpqcrDkw5vlAIhALNuS%2BIKM%2BCQdq4Yxshek9V%2BqA1JP%2Fps60qZWl7aG01DKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmwonoTxh9Zg7p7C0q3ANZqx8fQemPU12AlkBNnb8PXi1hrefyu2l35kYVfn2GfSBBD6xLNkk0iipSoNbvyl1qJo1ZSyb4pFc11HY%2FJYXwO2H1VbQehSM%2Bjc2AX9LDUKiCf99n%2BjySjNW3zHeXT91E8CvxgWczHju8nPuDSR2k%2F%2FaqxZ5ltskAXmde5io22pvqfXQ1HaQlRJVdQPc88slJFSUMwSZrUWg9C3VTDR%2FrP2O6CdH9Qjv0oK60CK5iIeVuxRXw2dn8IN6vf7d0ak4RkqW9JujihpJAHa7%2F7kURb3KPdJu2nS%2FDKBkoDh99p%2BYxmjeMlxKElLaTRykfmTwmmv6tStxfuRFIQ1%2BfKnKUKvYbwOqMorxKuizJ83t5Wqefxs2K8IwcaaJ38SsU6CD0CLwhDzQhn0%2ByifXxe5erzXZcYImv4iOhjOKrasfY69QfORQTuDn91tHc9T0qEvqz3aGwDEgeybYT9HskPx5hJJLDwRkYLIVBlJhLrj4PZ161M4hqZkJln9wdgM6tchKb8Xy1nDrwv8QK5Ykfj%2FEJb0o29Vt57naFqayPuCs6AVLqwQUinfw4jQh96gGuXn1LOUHTmNe7Gctrzqqhgqz2LNztouFWrrdgjJ%2BQlUgghmQE3huyTFXjDxXrAzDV%2F7fGBjqkAcZgTMaWjqpjQjDuVkgUwa1Ty3bUZJAC82DwImoyJQ7XI9UPtwSWNAdw5od2zQVHoxW5SQl4frVSU7CTd1qjO1xOH7XsI3dy6fjJ1txo9KaYTICt1mprqU2m41LjloNxu%2BE2QQyryO013S6GyLSGFi%2BgFOngdQf2qyDLCWgk3n8izZLBwZVO8AL1FN8bnAJfJ0iivDc%2B4J3bMPX5iLNI4al0xTSW&X-Amz-Signature=d9b985fcfd7c273c5f6ef3e0409c778f66e09370ad43c6ddd9f6dd65cf3ecb52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW7CEIY%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDI1JmvYo3kVywakxkcQQe3DTTi10Ma1SNpqcrDkw5vlAIhALNuS%2BIKM%2BCQdq4Yxshek9V%2BqA1JP%2Fps60qZWl7aG01DKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmwonoTxh9Zg7p7C0q3ANZqx8fQemPU12AlkBNnb8PXi1hrefyu2l35kYVfn2GfSBBD6xLNkk0iipSoNbvyl1qJo1ZSyb4pFc11HY%2FJYXwO2H1VbQehSM%2Bjc2AX9LDUKiCf99n%2BjySjNW3zHeXT91E8CvxgWczHju8nPuDSR2k%2F%2FaqxZ5ltskAXmde5io22pvqfXQ1HaQlRJVdQPc88slJFSUMwSZrUWg9C3VTDR%2FrP2O6CdH9Qjv0oK60CK5iIeVuxRXw2dn8IN6vf7d0ak4RkqW9JujihpJAHa7%2F7kURb3KPdJu2nS%2FDKBkoDh99p%2BYxmjeMlxKElLaTRykfmTwmmv6tStxfuRFIQ1%2BfKnKUKvYbwOqMorxKuizJ83t5Wqefxs2K8IwcaaJ38SsU6CD0CLwhDzQhn0%2ByifXxe5erzXZcYImv4iOhjOKrasfY69QfORQTuDn91tHc9T0qEvqz3aGwDEgeybYT9HskPx5hJJLDwRkYLIVBlJhLrj4PZ161M4hqZkJln9wdgM6tchKb8Xy1nDrwv8QK5Ykfj%2FEJb0o29Vt57naFqayPuCs6AVLqwQUinfw4jQh96gGuXn1LOUHTmNe7Gctrzqqhgqz2LNztouFWrrdgjJ%2BQlUgghmQE3huyTFXjDxXrAzDV%2F7fGBjqkAcZgTMaWjqpjQjDuVkgUwa1Ty3bUZJAC82DwImoyJQ7XI9UPtwSWNAdw5od2zQVHoxW5SQl4frVSU7CTd1qjO1xOH7XsI3dy6fjJ1txo9KaYTICt1mprqU2m41LjloNxu%2BE2QQyryO013S6GyLSGFi%2BgFOngdQf2qyDLCWgk3n8izZLBwZVO8AL1FN8bnAJfJ0iivDc%2B4J3bMPX5iLNI4al0xTSW&X-Amz-Signature=8bd512d85d6458dc5e4fa019daaa7c164a65d450da6d1b7cbfbd9b5681b8777f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW7CEIY%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDI1JmvYo3kVywakxkcQQe3DTTi10Ma1SNpqcrDkw5vlAIhALNuS%2BIKM%2BCQdq4Yxshek9V%2BqA1JP%2Fps60qZWl7aG01DKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmwonoTxh9Zg7p7C0q3ANZqx8fQemPU12AlkBNnb8PXi1hrefyu2l35kYVfn2GfSBBD6xLNkk0iipSoNbvyl1qJo1ZSyb4pFc11HY%2FJYXwO2H1VbQehSM%2Bjc2AX9LDUKiCf99n%2BjySjNW3zHeXT91E8CvxgWczHju8nPuDSR2k%2F%2FaqxZ5ltskAXmde5io22pvqfXQ1HaQlRJVdQPc88slJFSUMwSZrUWg9C3VTDR%2FrP2O6CdH9Qjv0oK60CK5iIeVuxRXw2dn8IN6vf7d0ak4RkqW9JujihpJAHa7%2F7kURb3KPdJu2nS%2FDKBkoDh99p%2BYxmjeMlxKElLaTRykfmTwmmv6tStxfuRFIQ1%2BfKnKUKvYbwOqMorxKuizJ83t5Wqefxs2K8IwcaaJ38SsU6CD0CLwhDzQhn0%2ByifXxe5erzXZcYImv4iOhjOKrasfY69QfORQTuDn91tHc9T0qEvqz3aGwDEgeybYT9HskPx5hJJLDwRkYLIVBlJhLrj4PZ161M4hqZkJln9wdgM6tchKb8Xy1nDrwv8QK5Ykfj%2FEJb0o29Vt57naFqayPuCs6AVLqwQUinfw4jQh96gGuXn1LOUHTmNe7Gctrzqqhgqz2LNztouFWrrdgjJ%2BQlUgghmQE3huyTFXjDxXrAzDV%2F7fGBjqkAcZgTMaWjqpjQjDuVkgUwa1Ty3bUZJAC82DwImoyJQ7XI9UPtwSWNAdw5od2zQVHoxW5SQl4frVSU7CTd1qjO1xOH7XsI3dy6fjJ1txo9KaYTICt1mprqU2m41LjloNxu%2BE2QQyryO013S6GyLSGFi%2BgFOngdQf2qyDLCWgk3n8izZLBwZVO8AL1FN8bnAJfJ0iivDc%2B4J3bMPX5iLNI4al0xTSW&X-Amz-Signature=e7d1575c8f1dcd012304c8d2d007d75f078dea0e11c1c164de4eef1edc97f3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OW7CEIY%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDI1JmvYo3kVywakxkcQQe3DTTi10Ma1SNpqcrDkw5vlAIhALNuS%2BIKM%2BCQdq4Yxshek9V%2BqA1JP%2Fps60qZWl7aG01DKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmwonoTxh9Zg7p7C0q3ANZqx8fQemPU12AlkBNnb8PXi1hrefyu2l35kYVfn2GfSBBD6xLNkk0iipSoNbvyl1qJo1ZSyb4pFc11HY%2FJYXwO2H1VbQehSM%2Bjc2AX9LDUKiCf99n%2BjySjNW3zHeXT91E8CvxgWczHju8nPuDSR2k%2F%2FaqxZ5ltskAXmde5io22pvqfXQ1HaQlRJVdQPc88slJFSUMwSZrUWg9C3VTDR%2FrP2O6CdH9Qjv0oK60CK5iIeVuxRXw2dn8IN6vf7d0ak4RkqW9JujihpJAHa7%2F7kURb3KPdJu2nS%2FDKBkoDh99p%2BYxmjeMlxKElLaTRykfmTwmmv6tStxfuRFIQ1%2BfKnKUKvYbwOqMorxKuizJ83t5Wqefxs2K8IwcaaJ38SsU6CD0CLwhDzQhn0%2ByifXxe5erzXZcYImv4iOhjOKrasfY69QfORQTuDn91tHc9T0qEvqz3aGwDEgeybYT9HskPx5hJJLDwRkYLIVBlJhLrj4PZ161M4hqZkJln9wdgM6tchKb8Xy1nDrwv8QK5Ykfj%2FEJb0o29Vt57naFqayPuCs6AVLqwQUinfw4jQh96gGuXn1LOUHTmNe7Gctrzqqhgqz2LNztouFWrrdgjJ%2BQlUgghmQE3huyTFXjDxXrAzDV%2F7fGBjqkAcZgTMaWjqpjQjDuVkgUwa1Ty3bUZJAC82DwImoyJQ7XI9UPtwSWNAdw5od2zQVHoxW5SQl4frVSU7CTd1qjO1xOH7XsI3dy6fjJ1txo9KaYTICt1mprqU2m41LjloNxu%2BE2QQyryO013S6GyLSGFi%2BgFOngdQf2qyDLCWgk3n8izZLBwZVO8AL1FN8bnAJfJ0iivDc%2B4J3bMPX5iLNI4al0xTSW&X-Amz-Signature=bbedc8fd6bea58ec394e88944ce872249d3225c8d5b82297acc6296adf179797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NIGWZDX%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAvYk9BSHuKpcJ7J8PPW29ca25cEZXv%2FZheG5v8ZkeLyAiEAwg9aB1tpEPgdQGdOeX8AER6NAoNnvLLFXrwGrdVrzosqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7rLZVnaEChbWQoqSrcAxbEBLftl6nP01oOmgslwYOFw9vQZKATJyj3cPMBytLYAjeuDeVYcwgdxkD8wCB9dB9Qw8rFx3rmhDbcwbCARGpAthiN9ZA6m4u0P5pVMCn4MgvnVApzTOC2gWXpU0iG%2F0dJhQ2zhc1VoSPTDz%2FGtg7x7i9MVMilVx2CFKbQsjqX7BKmIgsVm%2BN9tuV0frnC%2BRDd31mnNPGm2yBW3HxxJmiMS6FaLhp4JDH2b3Noev3GyLBOv7SG5UjN4Lpuei%2Bp%2FUq9%2F%2B9CzbCfGyHaurpEVbr6An0939JiBDfsXfdJhOy3UHiEWKwNBAxCohDHQIvdN3PJ8lF9fIOVudsznzUouviTSlcFMGv2lhguRJMBbKuaTSpK9FHYWs0hgp4B1zW4gEGqmvCd2uM6WhJDCblsew4mvleniNNFmouU7FOFRsCBnMsowQo%2BiYQhBM0lyw3U5OwYtD8rbwqdThj3yfevBcu3Oaru5M1Dlayr7dVTIHfKbDbxqv8xCQoFdClPGrLR%2FpnhuPT9BAWLJywfb%2FHYp9pNTol9Tv4CdzhX0Uwr8KQXqQBWLCxOCyCPbPELuWIiHqQG%2BGtmiH05xcHQCGzj5sb1qggmQPD4bJXXXJzdtVSjOB0shChToxniLgFTMMj%2Ft8YGOqUBl23b0WBoG2VSfR%2FMwgPlh6teRwwD93ber0tw%2BU8hvuKgOuiTyKxG1VTv%2F1ihPkxRhUQ8%2F1a9Mbh0XXJxUYbu5mf68nAqR56ca6%2BN6BDnMJPEj%2B7IYnGgijK59qa2CcWwvDREF2U%2FG39QCpnN7uvtQFKglrjA0bsmQI%2Ff%2BZkPk%2F1p3ZhqC0XENUrCKRAqpx7fdfW5Gezv%2Bx32TYNbw7QrlJxBnWo9&X-Amz-Signature=94d8f0fe6e563d76d23da0bbecf4ce99dc6558ca620eef88412e505bde500de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE65BM45%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIESsXdVf8Wpx5lLPxInJ4SV%2Blgk4YN60BI7A66nDLDQ7AiEA5xBLKAAVxXxPlKtO98FEUfvGRVs339g%2FDc4O9KrknzAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNciHjCSpWmUpReGcSrcA6BjUwwu2OlrigvDTXr123%2FoO9GD7vv%2BVg%2BMT%2BoA2nKXJXYcCG1wYvT9vxWaJaNFowAQQS9qQYnTMeFTYd3HdD1tKwfwrcIjyIIGcgWgURShpk7ybGwm9Nr1zZSp6Os%2F75VcIiiLQxoulRwRkPxVrJPRnvu%2FLCc42KcER6Gbi3XhB81iGGMxqH%2BO32W9g8r75aY9nsu%2FTtpvLgBzQEX%2Bkf1YpSCgGZLp7TNwEkN8lXDrrZYOGNzw%2B4k7g2FFHSAawuu%2F2oxxObOkzIQ9qaFja0v6%2FSvB%2B4yYI4ljDbIVvhhN4OAk3Ven79dIcB%2BvSo%2FpQ18uSiNimFLS9wUv3m44iHoNtQAyrHMn7m13pGdI4HS4zP5sf8otZai19cbDKOhxI6F1UQza%2FoWCvmktvpEz2ybN7e5chyBgtwiK%2Bv1GCugQYAq4zyL8NQ8E169w4hwo3pDsZpqrwBy9B2%2B0yKt6EPbWFw8xYaEiQroQRL8VN4mSz5jJvetu%2BIAlGV3Y13csf20AQqN4M%2FA3hXEiZc9KLoYZ2voY6vcBHW0c%2FJvQHLc4q%2Fm8a7YSIDLLLODLNY85Ck6Rt%2B9gQ0IE78SbUnqR7sfHNZm2hbixaOpDAKzR18lgr3mGWoeAM6QFP8XwMO3%2Ft8YGOqUBs84KuvwwbggoriOlVZJ%2Bpt1%2FOtdDivXe3qKKAC5NrDZfgoCMQruba6ry9pxQFAT8%2B9MfJEynZGlBRi7pKsRsEWitxQpdSxlfwQFaVcEfhEvVud0r%2BYjNzUuUC49u7JeNoa%2FUVC43s%2FJYu3slfQy8Jccy76Yk6ZaBLWtJaNqjH4rXhuwgC4f0bXBxcuN4MNuCtjx8bwsOc%2F6dAziHt8NyDl4dsgvJ&X-Amz-Signature=b10a3633f91525a8e0b2c2f07f2c390a85853050f866bb4d374317cbd1b0d2b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE65BM45%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIESsXdVf8Wpx5lLPxInJ4SV%2Blgk4YN60BI7A66nDLDQ7AiEA5xBLKAAVxXxPlKtO98FEUfvGRVs339g%2FDc4O9KrknzAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNciHjCSpWmUpReGcSrcA6BjUwwu2OlrigvDTXr123%2FoO9GD7vv%2BVg%2BMT%2BoA2nKXJXYcCG1wYvT9vxWaJaNFowAQQS9qQYnTMeFTYd3HdD1tKwfwrcIjyIIGcgWgURShpk7ybGwm9Nr1zZSp6Os%2F75VcIiiLQxoulRwRkPxVrJPRnvu%2FLCc42KcER6Gbi3XhB81iGGMxqH%2BO32W9g8r75aY9nsu%2FTtpvLgBzQEX%2Bkf1YpSCgGZLp7TNwEkN8lXDrrZYOGNzw%2B4k7g2FFHSAawuu%2F2oxxObOkzIQ9qaFja0v6%2FSvB%2B4yYI4ljDbIVvhhN4OAk3Ven79dIcB%2BvSo%2FpQ18uSiNimFLS9wUv3m44iHoNtQAyrHMn7m13pGdI4HS4zP5sf8otZai19cbDKOhxI6F1UQza%2FoWCvmktvpEz2ybN7e5chyBgtwiK%2Bv1GCugQYAq4zyL8NQ8E169w4hwo3pDsZpqrwBy9B2%2B0yKt6EPbWFw8xYaEiQroQRL8VN4mSz5jJvetu%2BIAlGV3Y13csf20AQqN4M%2FA3hXEiZc9KLoYZ2voY6vcBHW0c%2FJvQHLc4q%2Fm8a7YSIDLLLODLNY85Ck6Rt%2B9gQ0IE78SbUnqR7sfHNZm2hbixaOpDAKzR18lgr3mGWoeAM6QFP8XwMO3%2Ft8YGOqUBs84KuvwwbggoriOlVZJ%2Bpt1%2FOtdDivXe3qKKAC5NrDZfgoCMQruba6ry9pxQFAT8%2B9MfJEynZGlBRi7pKsRsEWitxQpdSxlfwQFaVcEfhEvVud0r%2BYjNzUuUC49u7JeNoa%2FUVC43s%2FJYu3slfQy8Jccy76Yk6ZaBLWtJaNqjH4rXhuwgC4f0bXBxcuN4MNuCtjx8bwsOc%2F6dAziHt8NyDl4dsgvJ&X-Amz-Signature=ac9bbc26d3580131c288614297f13c2fb6f30aa4f6e4b042929e9df2b4f7a661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE65BM45%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIESsXdVf8Wpx5lLPxInJ4SV%2Blgk4YN60BI7A66nDLDQ7AiEA5xBLKAAVxXxPlKtO98FEUfvGRVs339g%2FDc4O9KrknzAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNciHjCSpWmUpReGcSrcA6BjUwwu2OlrigvDTXr123%2FoO9GD7vv%2BVg%2BMT%2BoA2nKXJXYcCG1wYvT9vxWaJaNFowAQQS9qQYnTMeFTYd3HdD1tKwfwrcIjyIIGcgWgURShpk7ybGwm9Nr1zZSp6Os%2F75VcIiiLQxoulRwRkPxVrJPRnvu%2FLCc42KcER6Gbi3XhB81iGGMxqH%2BO32W9g8r75aY9nsu%2FTtpvLgBzQEX%2Bkf1YpSCgGZLp7TNwEkN8lXDrrZYOGNzw%2B4k7g2FFHSAawuu%2F2oxxObOkzIQ9qaFja0v6%2FSvB%2B4yYI4ljDbIVvhhN4OAk3Ven79dIcB%2BvSo%2FpQ18uSiNimFLS9wUv3m44iHoNtQAyrHMn7m13pGdI4HS4zP5sf8otZai19cbDKOhxI6F1UQza%2FoWCvmktvpEz2ybN7e5chyBgtwiK%2Bv1GCugQYAq4zyL8NQ8E169w4hwo3pDsZpqrwBy9B2%2B0yKt6EPbWFw8xYaEiQroQRL8VN4mSz5jJvetu%2BIAlGV3Y13csf20AQqN4M%2FA3hXEiZc9KLoYZ2voY6vcBHW0c%2FJvQHLc4q%2Fm8a7YSIDLLLODLNY85Ck6Rt%2B9gQ0IE78SbUnqR7sfHNZm2hbixaOpDAKzR18lgr3mGWoeAM6QFP8XwMO3%2Ft8YGOqUBs84KuvwwbggoriOlVZJ%2Bpt1%2FOtdDivXe3qKKAC5NrDZfgoCMQruba6ry9pxQFAT8%2B9MfJEynZGlBRi7pKsRsEWitxQpdSxlfwQFaVcEfhEvVud0r%2BYjNzUuUC49u7JeNoa%2FUVC43s%2FJYu3slfQy8Jccy76Yk6ZaBLWtJaNqjH4rXhuwgC4f0bXBxcuN4MNuCtjx8bwsOc%2F6dAziHt8NyDl4dsgvJ&X-Amz-Signature=9f5f7a9b7ade94c8fdca4ae2c41c3985fd6f1c270809786c52d52392f06ba4b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE65BM45%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIESsXdVf8Wpx5lLPxInJ4SV%2Blgk4YN60BI7A66nDLDQ7AiEA5xBLKAAVxXxPlKtO98FEUfvGRVs339g%2FDc4O9KrknzAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNciHjCSpWmUpReGcSrcA6BjUwwu2OlrigvDTXr123%2FoO9GD7vv%2BVg%2BMT%2BoA2nKXJXYcCG1wYvT9vxWaJaNFowAQQS9qQYnTMeFTYd3HdD1tKwfwrcIjyIIGcgWgURShpk7ybGwm9Nr1zZSp6Os%2F75VcIiiLQxoulRwRkPxVrJPRnvu%2FLCc42KcER6Gbi3XhB81iGGMxqH%2BO32W9g8r75aY9nsu%2FTtpvLgBzQEX%2Bkf1YpSCgGZLp7TNwEkN8lXDrrZYOGNzw%2B4k7g2FFHSAawuu%2F2oxxObOkzIQ9qaFja0v6%2FSvB%2B4yYI4ljDbIVvhhN4OAk3Ven79dIcB%2BvSo%2FpQ18uSiNimFLS9wUv3m44iHoNtQAyrHMn7m13pGdI4HS4zP5sf8otZai19cbDKOhxI6F1UQza%2FoWCvmktvpEz2ybN7e5chyBgtwiK%2Bv1GCugQYAq4zyL8NQ8E169w4hwo3pDsZpqrwBy9B2%2B0yKt6EPbWFw8xYaEiQroQRL8VN4mSz5jJvetu%2BIAlGV3Y13csf20AQqN4M%2FA3hXEiZc9KLoYZ2voY6vcBHW0c%2FJvQHLc4q%2Fm8a7YSIDLLLODLNY85Ck6Rt%2B9gQ0IE78SbUnqR7sfHNZm2hbixaOpDAKzR18lgr3mGWoeAM6QFP8XwMO3%2Ft8YGOqUBs84KuvwwbggoriOlVZJ%2Bpt1%2FOtdDivXe3qKKAC5NrDZfgoCMQruba6ry9pxQFAT8%2B9MfJEynZGlBRi7pKsRsEWitxQpdSxlfwQFaVcEfhEvVud0r%2BYjNzUuUC49u7JeNoa%2FUVC43s%2FJYu3slfQy8Jccy76Yk6ZaBLWtJaNqjH4rXhuwgC4f0bXBxcuN4MNuCtjx8bwsOc%2F6dAziHt8NyDl4dsgvJ&X-Amz-Signature=1f2e5fbcdeef7e812211e2f1c28317d68bc8fb90f8ca3bd542e639cf68334408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE65BM45%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIESsXdVf8Wpx5lLPxInJ4SV%2Blgk4YN60BI7A66nDLDQ7AiEA5xBLKAAVxXxPlKtO98FEUfvGRVs339g%2FDc4O9KrknzAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNciHjCSpWmUpReGcSrcA6BjUwwu2OlrigvDTXr123%2FoO9GD7vv%2BVg%2BMT%2BoA2nKXJXYcCG1wYvT9vxWaJaNFowAQQS9qQYnTMeFTYd3HdD1tKwfwrcIjyIIGcgWgURShpk7ybGwm9Nr1zZSp6Os%2F75VcIiiLQxoulRwRkPxVrJPRnvu%2FLCc42KcER6Gbi3XhB81iGGMxqH%2BO32W9g8r75aY9nsu%2FTtpvLgBzQEX%2Bkf1YpSCgGZLp7TNwEkN8lXDrrZYOGNzw%2B4k7g2FFHSAawuu%2F2oxxObOkzIQ9qaFja0v6%2FSvB%2B4yYI4ljDbIVvhhN4OAk3Ven79dIcB%2BvSo%2FpQ18uSiNimFLS9wUv3m44iHoNtQAyrHMn7m13pGdI4HS4zP5sf8otZai19cbDKOhxI6F1UQza%2FoWCvmktvpEz2ybN7e5chyBgtwiK%2Bv1GCugQYAq4zyL8NQ8E169w4hwo3pDsZpqrwBy9B2%2B0yKt6EPbWFw8xYaEiQroQRL8VN4mSz5jJvetu%2BIAlGV3Y13csf20AQqN4M%2FA3hXEiZc9KLoYZ2voY6vcBHW0c%2FJvQHLc4q%2Fm8a7YSIDLLLODLNY85Ck6Rt%2B9gQ0IE78SbUnqR7sfHNZm2hbixaOpDAKzR18lgr3mGWoeAM6QFP8XwMO3%2Ft8YGOqUBs84KuvwwbggoriOlVZJ%2Bpt1%2FOtdDivXe3qKKAC5NrDZfgoCMQruba6ry9pxQFAT8%2B9MfJEynZGlBRi7pKsRsEWitxQpdSxlfwQFaVcEfhEvVud0r%2BYjNzUuUC49u7JeNoa%2FUVC43s%2FJYu3slfQy8Jccy76Yk6ZaBLWtJaNqjH4rXhuwgC4f0bXBxcuN4MNuCtjx8bwsOc%2F6dAziHt8NyDl4dsgvJ&X-Amz-Signature=58588fa9bfa9cf9f83156017862d3a16f36a6df941c224e1a422679371a5b50e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE65BM45%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIESsXdVf8Wpx5lLPxInJ4SV%2Blgk4YN60BI7A66nDLDQ7AiEA5xBLKAAVxXxPlKtO98FEUfvGRVs339g%2FDc4O9KrknzAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNciHjCSpWmUpReGcSrcA6BjUwwu2OlrigvDTXr123%2FoO9GD7vv%2BVg%2BMT%2BoA2nKXJXYcCG1wYvT9vxWaJaNFowAQQS9qQYnTMeFTYd3HdD1tKwfwrcIjyIIGcgWgURShpk7ybGwm9Nr1zZSp6Os%2F75VcIiiLQxoulRwRkPxVrJPRnvu%2FLCc42KcER6Gbi3XhB81iGGMxqH%2BO32W9g8r75aY9nsu%2FTtpvLgBzQEX%2Bkf1YpSCgGZLp7TNwEkN8lXDrrZYOGNzw%2B4k7g2FFHSAawuu%2F2oxxObOkzIQ9qaFja0v6%2FSvB%2B4yYI4ljDbIVvhhN4OAk3Ven79dIcB%2BvSo%2FpQ18uSiNimFLS9wUv3m44iHoNtQAyrHMn7m13pGdI4HS4zP5sf8otZai19cbDKOhxI6F1UQza%2FoWCvmktvpEz2ybN7e5chyBgtwiK%2Bv1GCugQYAq4zyL8NQ8E169w4hwo3pDsZpqrwBy9B2%2B0yKt6EPbWFw8xYaEiQroQRL8VN4mSz5jJvetu%2BIAlGV3Y13csf20AQqN4M%2FA3hXEiZc9KLoYZ2voY6vcBHW0c%2FJvQHLc4q%2Fm8a7YSIDLLLODLNY85Ck6Rt%2B9gQ0IE78SbUnqR7sfHNZm2hbixaOpDAKzR18lgr3mGWoeAM6QFP8XwMO3%2Ft8YGOqUBs84KuvwwbggoriOlVZJ%2Bpt1%2FOtdDivXe3qKKAC5NrDZfgoCMQruba6ry9pxQFAT8%2B9MfJEynZGlBRi7pKsRsEWitxQpdSxlfwQFaVcEfhEvVud0r%2BYjNzUuUC49u7JeNoa%2FUVC43s%2FJYu3slfQy8Jccy76Yk6ZaBLWtJaNqjH4rXhuwgC4f0bXBxcuN4MNuCtjx8bwsOc%2F6dAziHt8NyDl4dsgvJ&X-Amz-Signature=adb0796885707ec7b1b62b5e04ea76a49ef94ea8dfdbaac7f520ad128f9e70cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE65BM45%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIESsXdVf8Wpx5lLPxInJ4SV%2Blgk4YN60BI7A66nDLDQ7AiEA5xBLKAAVxXxPlKtO98FEUfvGRVs339g%2FDc4O9KrknzAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNciHjCSpWmUpReGcSrcA6BjUwwu2OlrigvDTXr123%2FoO9GD7vv%2BVg%2BMT%2BoA2nKXJXYcCG1wYvT9vxWaJaNFowAQQS9qQYnTMeFTYd3HdD1tKwfwrcIjyIIGcgWgURShpk7ybGwm9Nr1zZSp6Os%2F75VcIiiLQxoulRwRkPxVrJPRnvu%2FLCc42KcER6Gbi3XhB81iGGMxqH%2BO32W9g8r75aY9nsu%2FTtpvLgBzQEX%2Bkf1YpSCgGZLp7TNwEkN8lXDrrZYOGNzw%2B4k7g2FFHSAawuu%2F2oxxObOkzIQ9qaFja0v6%2FSvB%2B4yYI4ljDbIVvhhN4OAk3Ven79dIcB%2BvSo%2FpQ18uSiNimFLS9wUv3m44iHoNtQAyrHMn7m13pGdI4HS4zP5sf8otZai19cbDKOhxI6F1UQza%2FoWCvmktvpEz2ybN7e5chyBgtwiK%2Bv1GCugQYAq4zyL8NQ8E169w4hwo3pDsZpqrwBy9B2%2B0yKt6EPbWFw8xYaEiQroQRL8VN4mSz5jJvetu%2BIAlGV3Y13csf20AQqN4M%2FA3hXEiZc9KLoYZ2voY6vcBHW0c%2FJvQHLc4q%2Fm8a7YSIDLLLODLNY85Ck6Rt%2B9gQ0IE78SbUnqR7sfHNZm2hbixaOpDAKzR18lgr3mGWoeAM6QFP8XwMO3%2Ft8YGOqUBs84KuvwwbggoriOlVZJ%2Bpt1%2FOtdDivXe3qKKAC5NrDZfgoCMQruba6ry9pxQFAT8%2B9MfJEynZGlBRi7pKsRsEWitxQpdSxlfwQFaVcEfhEvVud0r%2BYjNzUuUC49u7JeNoa%2FUVC43s%2FJYu3slfQy8Jccy76Yk6ZaBLWtJaNqjH4rXhuwgC4f0bXBxcuN4MNuCtjx8bwsOc%2F6dAziHt8NyDl4dsgvJ&X-Amz-Signature=6253439ea2907d20e16c43e881e0873917567a1684600fd1806a88398d044f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE65BM45%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIESsXdVf8Wpx5lLPxInJ4SV%2Blgk4YN60BI7A66nDLDQ7AiEA5xBLKAAVxXxPlKtO98FEUfvGRVs339g%2FDc4O9KrknzAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNciHjCSpWmUpReGcSrcA6BjUwwu2OlrigvDTXr123%2FoO9GD7vv%2BVg%2BMT%2BoA2nKXJXYcCG1wYvT9vxWaJaNFowAQQS9qQYnTMeFTYd3HdD1tKwfwrcIjyIIGcgWgURShpk7ybGwm9Nr1zZSp6Os%2F75VcIiiLQxoulRwRkPxVrJPRnvu%2FLCc42KcER6Gbi3XhB81iGGMxqH%2BO32W9g8r75aY9nsu%2FTtpvLgBzQEX%2Bkf1YpSCgGZLp7TNwEkN8lXDrrZYOGNzw%2B4k7g2FFHSAawuu%2F2oxxObOkzIQ9qaFja0v6%2FSvB%2B4yYI4ljDbIVvhhN4OAk3Ven79dIcB%2BvSo%2FpQ18uSiNimFLS9wUv3m44iHoNtQAyrHMn7m13pGdI4HS4zP5sf8otZai19cbDKOhxI6F1UQza%2FoWCvmktvpEz2ybN7e5chyBgtwiK%2Bv1GCugQYAq4zyL8NQ8E169w4hwo3pDsZpqrwBy9B2%2B0yKt6EPbWFw8xYaEiQroQRL8VN4mSz5jJvetu%2BIAlGV3Y13csf20AQqN4M%2FA3hXEiZc9KLoYZ2voY6vcBHW0c%2FJvQHLc4q%2Fm8a7YSIDLLLODLNY85Ck6Rt%2B9gQ0IE78SbUnqR7sfHNZm2hbixaOpDAKzR18lgr3mGWoeAM6QFP8XwMO3%2Ft8YGOqUBs84KuvwwbggoriOlVZJ%2Bpt1%2FOtdDivXe3qKKAC5NrDZfgoCMQruba6ry9pxQFAT8%2B9MfJEynZGlBRi7pKsRsEWitxQpdSxlfwQFaVcEfhEvVud0r%2BYjNzUuUC49u7JeNoa%2FUVC43s%2FJYu3slfQy8Jccy76Yk6ZaBLWtJaNqjH4rXhuwgC4f0bXBxcuN4MNuCtjx8bwsOc%2F6dAziHt8NyDl4dsgvJ&X-Amz-Signature=3734252649a2ae8cce20f8722300951ba127f7634621d5e3e96074d9b3f3618b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE65BM45%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIESsXdVf8Wpx5lLPxInJ4SV%2Blgk4YN60BI7A66nDLDQ7AiEA5xBLKAAVxXxPlKtO98FEUfvGRVs339g%2FDc4O9KrknzAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNciHjCSpWmUpReGcSrcA6BjUwwu2OlrigvDTXr123%2FoO9GD7vv%2BVg%2BMT%2BoA2nKXJXYcCG1wYvT9vxWaJaNFowAQQS9qQYnTMeFTYd3HdD1tKwfwrcIjyIIGcgWgURShpk7ybGwm9Nr1zZSp6Os%2F75VcIiiLQxoulRwRkPxVrJPRnvu%2FLCc42KcER6Gbi3XhB81iGGMxqH%2BO32W9g8r75aY9nsu%2FTtpvLgBzQEX%2Bkf1YpSCgGZLp7TNwEkN8lXDrrZYOGNzw%2B4k7g2FFHSAawuu%2F2oxxObOkzIQ9qaFja0v6%2FSvB%2B4yYI4ljDbIVvhhN4OAk3Ven79dIcB%2BvSo%2FpQ18uSiNimFLS9wUv3m44iHoNtQAyrHMn7m13pGdI4HS4zP5sf8otZai19cbDKOhxI6F1UQza%2FoWCvmktvpEz2ybN7e5chyBgtwiK%2Bv1GCugQYAq4zyL8NQ8E169w4hwo3pDsZpqrwBy9B2%2B0yKt6EPbWFw8xYaEiQroQRL8VN4mSz5jJvetu%2BIAlGV3Y13csf20AQqN4M%2FA3hXEiZc9KLoYZ2voY6vcBHW0c%2FJvQHLc4q%2Fm8a7YSIDLLLODLNY85Ck6Rt%2B9gQ0IE78SbUnqR7sfHNZm2hbixaOpDAKzR18lgr3mGWoeAM6QFP8XwMO3%2Ft8YGOqUBs84KuvwwbggoriOlVZJ%2Bpt1%2FOtdDivXe3qKKAC5NrDZfgoCMQruba6ry9pxQFAT8%2B9MfJEynZGlBRi7pKsRsEWitxQpdSxlfwQFaVcEfhEvVud0r%2BYjNzUuUC49u7JeNoa%2FUVC43s%2FJYu3slfQy8Jccy76Yk6ZaBLWtJaNqjH4rXhuwgC4f0bXBxcuN4MNuCtjx8bwsOc%2F6dAziHt8NyDl4dsgvJ&X-Amz-Signature=2f036a214e390554b8a406e8bd1cca05570117239c59b3ef50de2799954cdac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
