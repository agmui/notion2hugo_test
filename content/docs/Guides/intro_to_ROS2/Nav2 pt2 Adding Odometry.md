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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHCVCMX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsLYO%2FpaE17DomhmITFDqyPt%2B2svEjK7VXhEOTLDpOyAiEAtBlro0KlQmHwBbgCpia2GaeA%2FttqXOLaCntKjhok3c8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEnK9ex409Eme5sZcCrcA0dGJJlFOnGKYecJN%2BvISgfXfuNu1YDhQw17wCUZAb8anRc4MrBhrypRYWG9qYJikmV8d%2FoF5OBA83GQNr1TBVgr0ATFSKaZG7RpQk7KQEBGR11qQkGe29Bf5gdCHRe18Eqw%2BY0LWeGXlt1AuPcucCYPe12bREKCQIPvRxBZzD7ZaLGWzYhCI1tTLN9g5Ib8E%2BnhOq8hHjNxBPXpIV5hl0SUfDdUZPuLJ0eXl9Gr9eHb9VnBKSZ%2Fx1jsxtIJANem0UtgjsZrnrU5WFnXRhNFjNJJAzyl69qONtYo8JRyp4a1F12ghk7FbHlrN9wKtsZG%2Foy6MlFOWUrlRqZ39j5bu1gApSodEQVsiTX8NLIV%2ByQNOLE1yBL2o4aV6AdlW4UXbH5g%2BBnoApf0jIeD9vCIx3lmXE8fjPCqGwbpTBP5y4E2QNiN37tKbEfLMWQn8MzzG1xZojHkpE%2FMZHr0q8X%2FIzrPpYH1Dxz7vWwPnA0YILEhOuKFIg5rAVEdiO8XddjnKWuXLnqTbyGm0FguJCWkSHhfU0Hc7Iz71DcXxOhaUWbPBj%2FI%2BWJ724gO00UgUNqez5CcqV37g7jgJ1DQT%2BNzwIvLLUbnZJdLT7WsyvxrVewWJ6T0J4c8wPQdpvUjMP7498QGOqUBRDGAHQv2GvBxAjbdPL7pyDUchGs%2FMrEQbsl%2B4P7BjjD%2FHtwgpXVRARMaoelHyKKKKxdiy1UyqX%2F0UuWH4Krl%2BSOAFrDv4X%2FGeJbIB6Hpgrx8hPkheFqSD7Ad1vD2CzPbFYvOTEdkXDbQmnogdAqhUBa%2BvXh1z53ePjvwrYDOxsx33ViIiB%2FWulQXxLP8PwOEx3G9vnbbFDey0YkMxeG4mbaIN2Mr&X-Amz-Signature=26bff8e9590918904564aa992b909efaa31b2c5f9af010ebac9c0c7cd442c128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHCVCMX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsLYO%2FpaE17DomhmITFDqyPt%2B2svEjK7VXhEOTLDpOyAiEAtBlro0KlQmHwBbgCpia2GaeA%2FttqXOLaCntKjhok3c8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEnK9ex409Eme5sZcCrcA0dGJJlFOnGKYecJN%2BvISgfXfuNu1YDhQw17wCUZAb8anRc4MrBhrypRYWG9qYJikmV8d%2FoF5OBA83GQNr1TBVgr0ATFSKaZG7RpQk7KQEBGR11qQkGe29Bf5gdCHRe18Eqw%2BY0LWeGXlt1AuPcucCYPe12bREKCQIPvRxBZzD7ZaLGWzYhCI1tTLN9g5Ib8E%2BnhOq8hHjNxBPXpIV5hl0SUfDdUZPuLJ0eXl9Gr9eHb9VnBKSZ%2Fx1jsxtIJANem0UtgjsZrnrU5WFnXRhNFjNJJAzyl69qONtYo8JRyp4a1F12ghk7FbHlrN9wKtsZG%2Foy6MlFOWUrlRqZ39j5bu1gApSodEQVsiTX8NLIV%2ByQNOLE1yBL2o4aV6AdlW4UXbH5g%2BBnoApf0jIeD9vCIx3lmXE8fjPCqGwbpTBP5y4E2QNiN37tKbEfLMWQn8MzzG1xZojHkpE%2FMZHr0q8X%2FIzrPpYH1Dxz7vWwPnA0YILEhOuKFIg5rAVEdiO8XddjnKWuXLnqTbyGm0FguJCWkSHhfU0Hc7Iz71DcXxOhaUWbPBj%2FI%2BWJ724gO00UgUNqez5CcqV37g7jgJ1DQT%2BNzwIvLLUbnZJdLT7WsyvxrVewWJ6T0J4c8wPQdpvUjMP7498QGOqUBRDGAHQv2GvBxAjbdPL7pyDUchGs%2FMrEQbsl%2B4P7BjjD%2FHtwgpXVRARMaoelHyKKKKxdiy1UyqX%2F0UuWH4Krl%2BSOAFrDv4X%2FGeJbIB6Hpgrx8hPkheFqSD7Ad1vD2CzPbFYvOTEdkXDbQmnogdAqhUBa%2BvXh1z53ePjvwrYDOxsx33ViIiB%2FWulQXxLP8PwOEx3G9vnbbFDey0YkMxeG4mbaIN2Mr&X-Amz-Signature=fdb4c2ff2ab0ae328256867114171ed66746e4d933940ec21f21a8f6c89aae4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHCVCMX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsLYO%2FpaE17DomhmITFDqyPt%2B2svEjK7VXhEOTLDpOyAiEAtBlro0KlQmHwBbgCpia2GaeA%2FttqXOLaCntKjhok3c8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEnK9ex409Eme5sZcCrcA0dGJJlFOnGKYecJN%2BvISgfXfuNu1YDhQw17wCUZAb8anRc4MrBhrypRYWG9qYJikmV8d%2FoF5OBA83GQNr1TBVgr0ATFSKaZG7RpQk7KQEBGR11qQkGe29Bf5gdCHRe18Eqw%2BY0LWeGXlt1AuPcucCYPe12bREKCQIPvRxBZzD7ZaLGWzYhCI1tTLN9g5Ib8E%2BnhOq8hHjNxBPXpIV5hl0SUfDdUZPuLJ0eXl9Gr9eHb9VnBKSZ%2Fx1jsxtIJANem0UtgjsZrnrU5WFnXRhNFjNJJAzyl69qONtYo8JRyp4a1F12ghk7FbHlrN9wKtsZG%2Foy6MlFOWUrlRqZ39j5bu1gApSodEQVsiTX8NLIV%2ByQNOLE1yBL2o4aV6AdlW4UXbH5g%2BBnoApf0jIeD9vCIx3lmXE8fjPCqGwbpTBP5y4E2QNiN37tKbEfLMWQn8MzzG1xZojHkpE%2FMZHr0q8X%2FIzrPpYH1Dxz7vWwPnA0YILEhOuKFIg5rAVEdiO8XddjnKWuXLnqTbyGm0FguJCWkSHhfU0Hc7Iz71DcXxOhaUWbPBj%2FI%2BWJ724gO00UgUNqez5CcqV37g7jgJ1DQT%2BNzwIvLLUbnZJdLT7WsyvxrVewWJ6T0J4c8wPQdpvUjMP7498QGOqUBRDGAHQv2GvBxAjbdPL7pyDUchGs%2FMrEQbsl%2B4P7BjjD%2FHtwgpXVRARMaoelHyKKKKxdiy1UyqX%2F0UuWH4Krl%2BSOAFrDv4X%2FGeJbIB6Hpgrx8hPkheFqSD7Ad1vD2CzPbFYvOTEdkXDbQmnogdAqhUBa%2BvXh1z53ePjvwrYDOxsx33ViIiB%2FWulQXxLP8PwOEx3G9vnbbFDey0YkMxeG4mbaIN2Mr&X-Amz-Signature=8189004a456dd629139f3a43744f5f9498d71697f6853e50661af4714426fff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHCVCMX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsLYO%2FpaE17DomhmITFDqyPt%2B2svEjK7VXhEOTLDpOyAiEAtBlro0KlQmHwBbgCpia2GaeA%2FttqXOLaCntKjhok3c8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEnK9ex409Eme5sZcCrcA0dGJJlFOnGKYecJN%2BvISgfXfuNu1YDhQw17wCUZAb8anRc4MrBhrypRYWG9qYJikmV8d%2FoF5OBA83GQNr1TBVgr0ATFSKaZG7RpQk7KQEBGR11qQkGe29Bf5gdCHRe18Eqw%2BY0LWeGXlt1AuPcucCYPe12bREKCQIPvRxBZzD7ZaLGWzYhCI1tTLN9g5Ib8E%2BnhOq8hHjNxBPXpIV5hl0SUfDdUZPuLJ0eXl9Gr9eHb9VnBKSZ%2Fx1jsxtIJANem0UtgjsZrnrU5WFnXRhNFjNJJAzyl69qONtYo8JRyp4a1F12ghk7FbHlrN9wKtsZG%2Foy6MlFOWUrlRqZ39j5bu1gApSodEQVsiTX8NLIV%2ByQNOLE1yBL2o4aV6AdlW4UXbH5g%2BBnoApf0jIeD9vCIx3lmXE8fjPCqGwbpTBP5y4E2QNiN37tKbEfLMWQn8MzzG1xZojHkpE%2FMZHr0q8X%2FIzrPpYH1Dxz7vWwPnA0YILEhOuKFIg5rAVEdiO8XddjnKWuXLnqTbyGm0FguJCWkSHhfU0Hc7Iz71DcXxOhaUWbPBj%2FI%2BWJ724gO00UgUNqez5CcqV37g7jgJ1DQT%2BNzwIvLLUbnZJdLT7WsyvxrVewWJ6T0J4c8wPQdpvUjMP7498QGOqUBRDGAHQv2GvBxAjbdPL7pyDUchGs%2FMrEQbsl%2B4P7BjjD%2FHtwgpXVRARMaoelHyKKKKxdiy1UyqX%2F0UuWH4Krl%2BSOAFrDv4X%2FGeJbIB6Hpgrx8hPkheFqSD7Ad1vD2CzPbFYvOTEdkXDbQmnogdAqhUBa%2BvXh1z53ePjvwrYDOxsx33ViIiB%2FWulQXxLP8PwOEx3G9vnbbFDey0YkMxeG4mbaIN2Mr&X-Amz-Signature=87398f6c26f040b44df3cd2666975d12b3a51301a69ed77e21c79758fe1853d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHCVCMX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsLYO%2FpaE17DomhmITFDqyPt%2B2svEjK7VXhEOTLDpOyAiEAtBlro0KlQmHwBbgCpia2GaeA%2FttqXOLaCntKjhok3c8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEnK9ex409Eme5sZcCrcA0dGJJlFOnGKYecJN%2BvISgfXfuNu1YDhQw17wCUZAb8anRc4MrBhrypRYWG9qYJikmV8d%2FoF5OBA83GQNr1TBVgr0ATFSKaZG7RpQk7KQEBGR11qQkGe29Bf5gdCHRe18Eqw%2BY0LWeGXlt1AuPcucCYPe12bREKCQIPvRxBZzD7ZaLGWzYhCI1tTLN9g5Ib8E%2BnhOq8hHjNxBPXpIV5hl0SUfDdUZPuLJ0eXl9Gr9eHb9VnBKSZ%2Fx1jsxtIJANem0UtgjsZrnrU5WFnXRhNFjNJJAzyl69qONtYo8JRyp4a1F12ghk7FbHlrN9wKtsZG%2Foy6MlFOWUrlRqZ39j5bu1gApSodEQVsiTX8NLIV%2ByQNOLE1yBL2o4aV6AdlW4UXbH5g%2BBnoApf0jIeD9vCIx3lmXE8fjPCqGwbpTBP5y4E2QNiN37tKbEfLMWQn8MzzG1xZojHkpE%2FMZHr0q8X%2FIzrPpYH1Dxz7vWwPnA0YILEhOuKFIg5rAVEdiO8XddjnKWuXLnqTbyGm0FguJCWkSHhfU0Hc7Iz71DcXxOhaUWbPBj%2FI%2BWJ724gO00UgUNqez5CcqV37g7jgJ1DQT%2BNzwIvLLUbnZJdLT7WsyvxrVewWJ6T0J4c8wPQdpvUjMP7498QGOqUBRDGAHQv2GvBxAjbdPL7pyDUchGs%2FMrEQbsl%2B4P7BjjD%2FHtwgpXVRARMaoelHyKKKKxdiy1UyqX%2F0UuWH4Krl%2BSOAFrDv4X%2FGeJbIB6Hpgrx8hPkheFqSD7Ad1vD2CzPbFYvOTEdkXDbQmnogdAqhUBa%2BvXh1z53ePjvwrYDOxsx33ViIiB%2FWulQXxLP8PwOEx3G9vnbbFDey0YkMxeG4mbaIN2Mr&X-Amz-Signature=b53d3dda8aea6f3e04aaadf40d4e0aae2313dd4b5ddc9529be21290d69d4f340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHCVCMX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsLYO%2FpaE17DomhmITFDqyPt%2B2svEjK7VXhEOTLDpOyAiEAtBlro0KlQmHwBbgCpia2GaeA%2FttqXOLaCntKjhok3c8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEnK9ex409Eme5sZcCrcA0dGJJlFOnGKYecJN%2BvISgfXfuNu1YDhQw17wCUZAb8anRc4MrBhrypRYWG9qYJikmV8d%2FoF5OBA83GQNr1TBVgr0ATFSKaZG7RpQk7KQEBGR11qQkGe29Bf5gdCHRe18Eqw%2BY0LWeGXlt1AuPcucCYPe12bREKCQIPvRxBZzD7ZaLGWzYhCI1tTLN9g5Ib8E%2BnhOq8hHjNxBPXpIV5hl0SUfDdUZPuLJ0eXl9Gr9eHb9VnBKSZ%2Fx1jsxtIJANem0UtgjsZrnrU5WFnXRhNFjNJJAzyl69qONtYo8JRyp4a1F12ghk7FbHlrN9wKtsZG%2Foy6MlFOWUrlRqZ39j5bu1gApSodEQVsiTX8NLIV%2ByQNOLE1yBL2o4aV6AdlW4UXbH5g%2BBnoApf0jIeD9vCIx3lmXE8fjPCqGwbpTBP5y4E2QNiN37tKbEfLMWQn8MzzG1xZojHkpE%2FMZHr0q8X%2FIzrPpYH1Dxz7vWwPnA0YILEhOuKFIg5rAVEdiO8XddjnKWuXLnqTbyGm0FguJCWkSHhfU0Hc7Iz71DcXxOhaUWbPBj%2FI%2BWJ724gO00UgUNqez5CcqV37g7jgJ1DQT%2BNzwIvLLUbnZJdLT7WsyvxrVewWJ6T0J4c8wPQdpvUjMP7498QGOqUBRDGAHQv2GvBxAjbdPL7pyDUchGs%2FMrEQbsl%2B4P7BjjD%2FHtwgpXVRARMaoelHyKKKKxdiy1UyqX%2F0UuWH4Krl%2BSOAFrDv4X%2FGeJbIB6Hpgrx8hPkheFqSD7Ad1vD2CzPbFYvOTEdkXDbQmnogdAqhUBa%2BvXh1z53ePjvwrYDOxsx33ViIiB%2FWulQXxLP8PwOEx3G9vnbbFDey0YkMxeG4mbaIN2Mr&X-Amz-Signature=7a52e19a6c5660fcd16fc46728f9a8f298a787768fc99383607ad85348435134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHCVCMX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsLYO%2FpaE17DomhmITFDqyPt%2B2svEjK7VXhEOTLDpOyAiEAtBlro0KlQmHwBbgCpia2GaeA%2FttqXOLaCntKjhok3c8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEnK9ex409Eme5sZcCrcA0dGJJlFOnGKYecJN%2BvISgfXfuNu1YDhQw17wCUZAb8anRc4MrBhrypRYWG9qYJikmV8d%2FoF5OBA83GQNr1TBVgr0ATFSKaZG7RpQk7KQEBGR11qQkGe29Bf5gdCHRe18Eqw%2BY0LWeGXlt1AuPcucCYPe12bREKCQIPvRxBZzD7ZaLGWzYhCI1tTLN9g5Ib8E%2BnhOq8hHjNxBPXpIV5hl0SUfDdUZPuLJ0eXl9Gr9eHb9VnBKSZ%2Fx1jsxtIJANem0UtgjsZrnrU5WFnXRhNFjNJJAzyl69qONtYo8JRyp4a1F12ghk7FbHlrN9wKtsZG%2Foy6MlFOWUrlRqZ39j5bu1gApSodEQVsiTX8NLIV%2ByQNOLE1yBL2o4aV6AdlW4UXbH5g%2BBnoApf0jIeD9vCIx3lmXE8fjPCqGwbpTBP5y4E2QNiN37tKbEfLMWQn8MzzG1xZojHkpE%2FMZHr0q8X%2FIzrPpYH1Dxz7vWwPnA0YILEhOuKFIg5rAVEdiO8XddjnKWuXLnqTbyGm0FguJCWkSHhfU0Hc7Iz71DcXxOhaUWbPBj%2FI%2BWJ724gO00UgUNqez5CcqV37g7jgJ1DQT%2BNzwIvLLUbnZJdLT7WsyvxrVewWJ6T0J4c8wPQdpvUjMP7498QGOqUBRDGAHQv2GvBxAjbdPL7pyDUchGs%2FMrEQbsl%2B4P7BjjD%2FHtwgpXVRARMaoelHyKKKKxdiy1UyqX%2F0UuWH4Krl%2BSOAFrDv4X%2FGeJbIB6Hpgrx8hPkheFqSD7Ad1vD2CzPbFYvOTEdkXDbQmnogdAqhUBa%2BvXh1z53ePjvwrYDOxsx33ViIiB%2FWulQXxLP8PwOEx3G9vnbbFDey0YkMxeG4mbaIN2Mr&X-Amz-Signature=250e4efcc28b3dcd1203be9819ffea55b90c9e9b093301a54ee0c1ec638d846b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHCVCMX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsLYO%2FpaE17DomhmITFDqyPt%2B2svEjK7VXhEOTLDpOyAiEAtBlro0KlQmHwBbgCpia2GaeA%2FttqXOLaCntKjhok3c8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEnK9ex409Eme5sZcCrcA0dGJJlFOnGKYecJN%2BvISgfXfuNu1YDhQw17wCUZAb8anRc4MrBhrypRYWG9qYJikmV8d%2FoF5OBA83GQNr1TBVgr0ATFSKaZG7RpQk7KQEBGR11qQkGe29Bf5gdCHRe18Eqw%2BY0LWeGXlt1AuPcucCYPe12bREKCQIPvRxBZzD7ZaLGWzYhCI1tTLN9g5Ib8E%2BnhOq8hHjNxBPXpIV5hl0SUfDdUZPuLJ0eXl9Gr9eHb9VnBKSZ%2Fx1jsxtIJANem0UtgjsZrnrU5WFnXRhNFjNJJAzyl69qONtYo8JRyp4a1F12ghk7FbHlrN9wKtsZG%2Foy6MlFOWUrlRqZ39j5bu1gApSodEQVsiTX8NLIV%2ByQNOLE1yBL2o4aV6AdlW4UXbH5g%2BBnoApf0jIeD9vCIx3lmXE8fjPCqGwbpTBP5y4E2QNiN37tKbEfLMWQn8MzzG1xZojHkpE%2FMZHr0q8X%2FIzrPpYH1Dxz7vWwPnA0YILEhOuKFIg5rAVEdiO8XddjnKWuXLnqTbyGm0FguJCWkSHhfU0Hc7Iz71DcXxOhaUWbPBj%2FI%2BWJ724gO00UgUNqez5CcqV37g7jgJ1DQT%2BNzwIvLLUbnZJdLT7WsyvxrVewWJ6T0J4c8wPQdpvUjMP7498QGOqUBRDGAHQv2GvBxAjbdPL7pyDUchGs%2FMrEQbsl%2B4P7BjjD%2FHtwgpXVRARMaoelHyKKKKxdiy1UyqX%2F0UuWH4Krl%2BSOAFrDv4X%2FGeJbIB6Hpgrx8hPkheFqSD7Ad1vD2CzPbFYvOTEdkXDbQmnogdAqhUBa%2BvXh1z53ePjvwrYDOxsx33ViIiB%2FWulQXxLP8PwOEx3G9vnbbFDey0YkMxeG4mbaIN2Mr&X-Amz-Signature=a49012df07a7d27937a7fa8c9f1526817420e056b3b31d28760ecd3e6d133492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHCVCMX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsLYO%2FpaE17DomhmITFDqyPt%2B2svEjK7VXhEOTLDpOyAiEAtBlro0KlQmHwBbgCpia2GaeA%2FttqXOLaCntKjhok3c8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEnK9ex409Eme5sZcCrcA0dGJJlFOnGKYecJN%2BvISgfXfuNu1YDhQw17wCUZAb8anRc4MrBhrypRYWG9qYJikmV8d%2FoF5OBA83GQNr1TBVgr0ATFSKaZG7RpQk7KQEBGR11qQkGe29Bf5gdCHRe18Eqw%2BY0LWeGXlt1AuPcucCYPe12bREKCQIPvRxBZzD7ZaLGWzYhCI1tTLN9g5Ib8E%2BnhOq8hHjNxBPXpIV5hl0SUfDdUZPuLJ0eXl9Gr9eHb9VnBKSZ%2Fx1jsxtIJANem0UtgjsZrnrU5WFnXRhNFjNJJAzyl69qONtYo8JRyp4a1F12ghk7FbHlrN9wKtsZG%2Foy6MlFOWUrlRqZ39j5bu1gApSodEQVsiTX8NLIV%2ByQNOLE1yBL2o4aV6AdlW4UXbH5g%2BBnoApf0jIeD9vCIx3lmXE8fjPCqGwbpTBP5y4E2QNiN37tKbEfLMWQn8MzzG1xZojHkpE%2FMZHr0q8X%2FIzrPpYH1Dxz7vWwPnA0YILEhOuKFIg5rAVEdiO8XddjnKWuXLnqTbyGm0FguJCWkSHhfU0Hc7Iz71DcXxOhaUWbPBj%2FI%2BWJ724gO00UgUNqez5CcqV37g7jgJ1DQT%2BNzwIvLLUbnZJdLT7WsyvxrVewWJ6T0J4c8wPQdpvUjMP7498QGOqUBRDGAHQv2GvBxAjbdPL7pyDUchGs%2FMrEQbsl%2B4P7BjjD%2FHtwgpXVRARMaoelHyKKKKxdiy1UyqX%2F0UuWH4Krl%2BSOAFrDv4X%2FGeJbIB6Hpgrx8hPkheFqSD7Ad1vD2CzPbFYvOTEdkXDbQmnogdAqhUBa%2BvXh1z53ePjvwrYDOxsx33ViIiB%2FWulQXxLP8PwOEx3G9vnbbFDey0YkMxeG4mbaIN2Mr&X-Amz-Signature=095f349c3eea56422dbba48c5a0b000c0528e48ad102616b0192430e0e4d743a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHCVCMX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsLYO%2FpaE17DomhmITFDqyPt%2B2svEjK7VXhEOTLDpOyAiEAtBlro0KlQmHwBbgCpia2GaeA%2FttqXOLaCntKjhok3c8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEnK9ex409Eme5sZcCrcA0dGJJlFOnGKYecJN%2BvISgfXfuNu1YDhQw17wCUZAb8anRc4MrBhrypRYWG9qYJikmV8d%2FoF5OBA83GQNr1TBVgr0ATFSKaZG7RpQk7KQEBGR11qQkGe29Bf5gdCHRe18Eqw%2BY0LWeGXlt1AuPcucCYPe12bREKCQIPvRxBZzD7ZaLGWzYhCI1tTLN9g5Ib8E%2BnhOq8hHjNxBPXpIV5hl0SUfDdUZPuLJ0eXl9Gr9eHb9VnBKSZ%2Fx1jsxtIJANem0UtgjsZrnrU5WFnXRhNFjNJJAzyl69qONtYo8JRyp4a1F12ghk7FbHlrN9wKtsZG%2Foy6MlFOWUrlRqZ39j5bu1gApSodEQVsiTX8NLIV%2ByQNOLE1yBL2o4aV6AdlW4UXbH5g%2BBnoApf0jIeD9vCIx3lmXE8fjPCqGwbpTBP5y4E2QNiN37tKbEfLMWQn8MzzG1xZojHkpE%2FMZHr0q8X%2FIzrPpYH1Dxz7vWwPnA0YILEhOuKFIg5rAVEdiO8XddjnKWuXLnqTbyGm0FguJCWkSHhfU0Hc7Iz71DcXxOhaUWbPBj%2FI%2BWJ724gO00UgUNqez5CcqV37g7jgJ1DQT%2BNzwIvLLUbnZJdLT7WsyvxrVewWJ6T0J4c8wPQdpvUjMP7498QGOqUBRDGAHQv2GvBxAjbdPL7pyDUchGs%2FMrEQbsl%2B4P7BjjD%2FHtwgpXVRARMaoelHyKKKKxdiy1UyqX%2F0UuWH4Krl%2BSOAFrDv4X%2FGeJbIB6Hpgrx8hPkheFqSD7Ad1vD2CzPbFYvOTEdkXDbQmnogdAqhUBa%2BvXh1z53ePjvwrYDOxsx33ViIiB%2FWulQXxLP8PwOEx3G9vnbbFDey0YkMxeG4mbaIN2Mr&X-Amz-Signature=3f77a0549f8851191574301383456dc693d461b30a87fb839b2359b2c1189b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKVEOVME%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCRWJEgydjF91X3em11vdhR5nGBSg%2FfTLl7dp759ZAhQIgdOoT2VYLlOk9rSQYNvznwK%2Bg4K%2BYQhkMxnY4Bqsm49Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFpBOEgJT3GgJXhfjSrcA4IuOeZgMYeH6W9MI%2FRMHAa1LX9E3vf1wZC82MvBvbyY2y4FhEAnA%2FoLiBX1UQ7DDhiU7SxEGIlO1mUxhwOAUuATzwXKT%2FQpYv151TKfNvfaE%2FRpsuU%2BBlAbFbXxbZk8E2JSFf38dv7n%2F%2Flm1JvuDl6C8CGU%2F2xQCh%2B%2BZ8CvRZDXbsbi8sZReByIACU1I8DEc0HuFiR475fz%2Fl8R8xCkT5B%2Fls1NMd3F19BjsD4BtbT2uqS%2FrWYgjhY%2Bu58de3UjhEVix9c1ZiiqGpwdbFgzuaVqqyUPJk%2Bf8yVhw3YA3VOHpiAnj%2BMIpN216RyWkHJGZFYgU3ol5OfpyguUt9xyI%2B1XP9ng1%2F0UaTmb5aU0r546R1nQkLzfIjUyzbHESfydmbAdkCrW7SSjSfW1IW6bT43fwWil3yXa7jJuMN8ujGaL1BktbRKLfvq%2FDNVt6WMzfl7LkxMZ11DaWWUFgUN0vdStxhxIcLS8HlDB1zxBLXB0HDmNTMRE8Z0iduKDqTgL2bLUEgpPZ%2FM%2F3taueEtTj2zaZ09Abga4AgPM8aUrPClMIqpm2iwLFiPfU34l4dKFm5lfIzRlBHy6qfkRiV2FySqTy46PgMxHQ%2FsDipfSNqF9QPqsCQz%2BUcq7PiatMLj598QGOqUBYgx2CoZnk3spT3XsX07PTBd6QfBkXVBF%2Brl%2BPHxcqXY2144u16%2FH50E10HwHfIaPkTEFhHzmYrMMEd2KCl5b5SQGzJEedTtT2yx6r6TY4eqeBXvObVD6IHnKNwbVw%2BySlBTeAheJ85Z6tYz0LlIzt0ACiXndymrUsZ0IF9UHEkD503hNV41aaJiEbndHuGtxGUvRvkdFR2tWRGovKNXopwo64n5u&X-Amz-Signature=f65094b652856fbc3194b3c471c1b5f09535e398bcc05a573e1d5d27a16145f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMN7OTCR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2B%2FNphiDqMsk80F0yms4fBjkDq9VEoXl9ibBCBDOUtwIgAKljfG6zzpgGBCavWEhaCHq%2F1akbBsct6QOaJPTCxCEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCqu2ESn3wwBLlqw8ircA6DzKutfSeR8%2F6TEBZw44qNKp2UB5G23ernrfyz4cph9z%2BIcoQb4MhnbnXzZOq7jH2zUSysoDJdNIDEwMH2NiU2NW%2BzzN5DJuNppjpxZYDTlqk6kbRhjS1UYLCKXjpDVtZPueyPxtXCynuSIoTxUkAqJytJtIezbgDMQIWeCWrUiTI0SYPYuy1kz9rlhJtY87xwRbkVxPFpeT8lTKs6dxqvJsFujZmeyoAZr4Jg4qh6fndRzNog%2F%2FqdfPpF%2FYF6hmDVg3qCDOE5x9ZWbVqr8nJaoyx4p36LWt9RZHgIn2GOnL39Za0ZrDPvDiwfyuZYKMFl1ZoH%2FFZrVJ9iTByTGdJlBzgovt5kHnUbXToKBT4Uz%2FK0KtxBjdaQxuP2FZNyQXeofu%2Fh9EDZvOfpt1NQ33WBWQOuiHIhYPOkdffMUpO8bu2lc%2FQi3DlEDL%2BBHS%2BBAvveFHDYDsSjD0ZQYQ93qE0%2BbTxvUjcbY3kBy34tsAr9WDTewUuitZ0a%2BBWXFvoe6MEl2KH5Do8zsSHodGPSOGMIMq4m5gZGcx1YGa4pprh4oDzjDh3n1uigqn2x2HBxKrhqcz5ONGpuR3%2BWoZFw9JYMyKcJwjJZUHkMBhkhC7OAEbOg4MzKQOTv%2F1w2gML3598QGOqUBj0B8sjynRW3r2zUmcpsfcIgWXlPgvEoGJT8gNqjwYtyW4yBv24dVgjPvTyfiEadcopjSSiyLifJmupz39aXLc06h5ksYUaSCWixVMyDKPG4vrLE0pA4l8jssqWk9M%2BZQk6hm%2BVaM%2BXks17epPVxjDJuo1FMAlC4fHU0SznHNNqmhMVnMxk4vM0hu5HrMWH7vjAyyXlUfEnXV3kzr6vIt1POJ7fN7&X-Amz-Signature=01991d3195ac306435c6dc2de6140f33a934303105edf7e565230f823bd6ff72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMN7OTCR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2B%2FNphiDqMsk80F0yms4fBjkDq9VEoXl9ibBCBDOUtwIgAKljfG6zzpgGBCavWEhaCHq%2F1akbBsct6QOaJPTCxCEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCqu2ESn3wwBLlqw8ircA6DzKutfSeR8%2F6TEBZw44qNKp2UB5G23ernrfyz4cph9z%2BIcoQb4MhnbnXzZOq7jH2zUSysoDJdNIDEwMH2NiU2NW%2BzzN5DJuNppjpxZYDTlqk6kbRhjS1UYLCKXjpDVtZPueyPxtXCynuSIoTxUkAqJytJtIezbgDMQIWeCWrUiTI0SYPYuy1kz9rlhJtY87xwRbkVxPFpeT8lTKs6dxqvJsFujZmeyoAZr4Jg4qh6fndRzNog%2F%2FqdfPpF%2FYF6hmDVg3qCDOE5x9ZWbVqr8nJaoyx4p36LWt9RZHgIn2GOnL39Za0ZrDPvDiwfyuZYKMFl1ZoH%2FFZrVJ9iTByTGdJlBzgovt5kHnUbXToKBT4Uz%2FK0KtxBjdaQxuP2FZNyQXeofu%2Fh9EDZvOfpt1NQ33WBWQOuiHIhYPOkdffMUpO8bu2lc%2FQi3DlEDL%2BBHS%2BBAvveFHDYDsSjD0ZQYQ93qE0%2BbTxvUjcbY3kBy34tsAr9WDTewUuitZ0a%2BBWXFvoe6MEl2KH5Do8zsSHodGPSOGMIMq4m5gZGcx1YGa4pprh4oDzjDh3n1uigqn2x2HBxKrhqcz5ONGpuR3%2BWoZFw9JYMyKcJwjJZUHkMBhkhC7OAEbOg4MzKQOTv%2F1w2gML3598QGOqUBj0B8sjynRW3r2zUmcpsfcIgWXlPgvEoGJT8gNqjwYtyW4yBv24dVgjPvTyfiEadcopjSSiyLifJmupz39aXLc06h5ksYUaSCWixVMyDKPG4vrLE0pA4l8jssqWk9M%2BZQk6hm%2BVaM%2BXks17epPVxjDJuo1FMAlC4fHU0SznHNNqmhMVnMxk4vM0hu5HrMWH7vjAyyXlUfEnXV3kzr6vIt1POJ7fN7&X-Amz-Signature=eacc64d54652b2a3a8f4803d4b961d88895fd55d0f6a5b8f047dfbe7b490d1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMN7OTCR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2B%2FNphiDqMsk80F0yms4fBjkDq9VEoXl9ibBCBDOUtwIgAKljfG6zzpgGBCavWEhaCHq%2F1akbBsct6QOaJPTCxCEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCqu2ESn3wwBLlqw8ircA6DzKutfSeR8%2F6TEBZw44qNKp2UB5G23ernrfyz4cph9z%2BIcoQb4MhnbnXzZOq7jH2zUSysoDJdNIDEwMH2NiU2NW%2BzzN5DJuNppjpxZYDTlqk6kbRhjS1UYLCKXjpDVtZPueyPxtXCynuSIoTxUkAqJytJtIezbgDMQIWeCWrUiTI0SYPYuy1kz9rlhJtY87xwRbkVxPFpeT8lTKs6dxqvJsFujZmeyoAZr4Jg4qh6fndRzNog%2F%2FqdfPpF%2FYF6hmDVg3qCDOE5x9ZWbVqr8nJaoyx4p36LWt9RZHgIn2GOnL39Za0ZrDPvDiwfyuZYKMFl1ZoH%2FFZrVJ9iTByTGdJlBzgovt5kHnUbXToKBT4Uz%2FK0KtxBjdaQxuP2FZNyQXeofu%2Fh9EDZvOfpt1NQ33WBWQOuiHIhYPOkdffMUpO8bu2lc%2FQi3DlEDL%2BBHS%2BBAvveFHDYDsSjD0ZQYQ93qE0%2BbTxvUjcbY3kBy34tsAr9WDTewUuitZ0a%2BBWXFvoe6MEl2KH5Do8zsSHodGPSOGMIMq4m5gZGcx1YGa4pprh4oDzjDh3n1uigqn2x2HBxKrhqcz5ONGpuR3%2BWoZFw9JYMyKcJwjJZUHkMBhkhC7OAEbOg4MzKQOTv%2F1w2gML3598QGOqUBj0B8sjynRW3r2zUmcpsfcIgWXlPgvEoGJT8gNqjwYtyW4yBv24dVgjPvTyfiEadcopjSSiyLifJmupz39aXLc06h5ksYUaSCWixVMyDKPG4vrLE0pA4l8jssqWk9M%2BZQk6hm%2BVaM%2BXks17epPVxjDJuo1FMAlC4fHU0SznHNNqmhMVnMxk4vM0hu5HrMWH7vjAyyXlUfEnXV3kzr6vIt1POJ7fN7&X-Amz-Signature=1d31409a68afdbd84422e852afee414cb726c68a048dd1d25026154e922139a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMN7OTCR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2B%2FNphiDqMsk80F0yms4fBjkDq9VEoXl9ibBCBDOUtwIgAKljfG6zzpgGBCavWEhaCHq%2F1akbBsct6QOaJPTCxCEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCqu2ESn3wwBLlqw8ircA6DzKutfSeR8%2F6TEBZw44qNKp2UB5G23ernrfyz4cph9z%2BIcoQb4MhnbnXzZOq7jH2zUSysoDJdNIDEwMH2NiU2NW%2BzzN5DJuNppjpxZYDTlqk6kbRhjS1UYLCKXjpDVtZPueyPxtXCynuSIoTxUkAqJytJtIezbgDMQIWeCWrUiTI0SYPYuy1kz9rlhJtY87xwRbkVxPFpeT8lTKs6dxqvJsFujZmeyoAZr4Jg4qh6fndRzNog%2F%2FqdfPpF%2FYF6hmDVg3qCDOE5x9ZWbVqr8nJaoyx4p36LWt9RZHgIn2GOnL39Za0ZrDPvDiwfyuZYKMFl1ZoH%2FFZrVJ9iTByTGdJlBzgovt5kHnUbXToKBT4Uz%2FK0KtxBjdaQxuP2FZNyQXeofu%2Fh9EDZvOfpt1NQ33WBWQOuiHIhYPOkdffMUpO8bu2lc%2FQi3DlEDL%2BBHS%2BBAvveFHDYDsSjD0ZQYQ93qE0%2BbTxvUjcbY3kBy34tsAr9WDTewUuitZ0a%2BBWXFvoe6MEl2KH5Do8zsSHodGPSOGMIMq4m5gZGcx1YGa4pprh4oDzjDh3n1uigqn2x2HBxKrhqcz5ONGpuR3%2BWoZFw9JYMyKcJwjJZUHkMBhkhC7OAEbOg4MzKQOTv%2F1w2gML3598QGOqUBj0B8sjynRW3r2zUmcpsfcIgWXlPgvEoGJT8gNqjwYtyW4yBv24dVgjPvTyfiEadcopjSSiyLifJmupz39aXLc06h5ksYUaSCWixVMyDKPG4vrLE0pA4l8jssqWk9M%2BZQk6hm%2BVaM%2BXks17epPVxjDJuo1FMAlC4fHU0SznHNNqmhMVnMxk4vM0hu5HrMWH7vjAyyXlUfEnXV3kzr6vIt1POJ7fN7&X-Amz-Signature=493dbec132eb339c93162a45d33f6ecde90c534efe2290b418c9c2d720a19995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMN7OTCR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2B%2FNphiDqMsk80F0yms4fBjkDq9VEoXl9ibBCBDOUtwIgAKljfG6zzpgGBCavWEhaCHq%2F1akbBsct6QOaJPTCxCEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCqu2ESn3wwBLlqw8ircA6DzKutfSeR8%2F6TEBZw44qNKp2UB5G23ernrfyz4cph9z%2BIcoQb4MhnbnXzZOq7jH2zUSysoDJdNIDEwMH2NiU2NW%2BzzN5DJuNppjpxZYDTlqk6kbRhjS1UYLCKXjpDVtZPueyPxtXCynuSIoTxUkAqJytJtIezbgDMQIWeCWrUiTI0SYPYuy1kz9rlhJtY87xwRbkVxPFpeT8lTKs6dxqvJsFujZmeyoAZr4Jg4qh6fndRzNog%2F%2FqdfPpF%2FYF6hmDVg3qCDOE5x9ZWbVqr8nJaoyx4p36LWt9RZHgIn2GOnL39Za0ZrDPvDiwfyuZYKMFl1ZoH%2FFZrVJ9iTByTGdJlBzgovt5kHnUbXToKBT4Uz%2FK0KtxBjdaQxuP2FZNyQXeofu%2Fh9EDZvOfpt1NQ33WBWQOuiHIhYPOkdffMUpO8bu2lc%2FQi3DlEDL%2BBHS%2BBAvveFHDYDsSjD0ZQYQ93qE0%2BbTxvUjcbY3kBy34tsAr9WDTewUuitZ0a%2BBWXFvoe6MEl2KH5Do8zsSHodGPSOGMIMq4m5gZGcx1YGa4pprh4oDzjDh3n1uigqn2x2HBxKrhqcz5ONGpuR3%2BWoZFw9JYMyKcJwjJZUHkMBhkhC7OAEbOg4MzKQOTv%2F1w2gML3598QGOqUBj0B8sjynRW3r2zUmcpsfcIgWXlPgvEoGJT8gNqjwYtyW4yBv24dVgjPvTyfiEadcopjSSiyLifJmupz39aXLc06h5ksYUaSCWixVMyDKPG4vrLE0pA4l8jssqWk9M%2BZQk6hm%2BVaM%2BXks17epPVxjDJuo1FMAlC4fHU0SznHNNqmhMVnMxk4vM0hu5HrMWH7vjAyyXlUfEnXV3kzr6vIt1POJ7fN7&X-Amz-Signature=c0dc00881f34a6e0e37c9f5d7c223ee5a19687d2594a82dd87cf6e6110422e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMN7OTCR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2B%2FNphiDqMsk80F0yms4fBjkDq9VEoXl9ibBCBDOUtwIgAKljfG6zzpgGBCavWEhaCHq%2F1akbBsct6QOaJPTCxCEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCqu2ESn3wwBLlqw8ircA6DzKutfSeR8%2F6TEBZw44qNKp2UB5G23ernrfyz4cph9z%2BIcoQb4MhnbnXzZOq7jH2zUSysoDJdNIDEwMH2NiU2NW%2BzzN5DJuNppjpxZYDTlqk6kbRhjS1UYLCKXjpDVtZPueyPxtXCynuSIoTxUkAqJytJtIezbgDMQIWeCWrUiTI0SYPYuy1kz9rlhJtY87xwRbkVxPFpeT8lTKs6dxqvJsFujZmeyoAZr4Jg4qh6fndRzNog%2F%2FqdfPpF%2FYF6hmDVg3qCDOE5x9ZWbVqr8nJaoyx4p36LWt9RZHgIn2GOnL39Za0ZrDPvDiwfyuZYKMFl1ZoH%2FFZrVJ9iTByTGdJlBzgovt5kHnUbXToKBT4Uz%2FK0KtxBjdaQxuP2FZNyQXeofu%2Fh9EDZvOfpt1NQ33WBWQOuiHIhYPOkdffMUpO8bu2lc%2FQi3DlEDL%2BBHS%2BBAvveFHDYDsSjD0ZQYQ93qE0%2BbTxvUjcbY3kBy34tsAr9WDTewUuitZ0a%2BBWXFvoe6MEl2KH5Do8zsSHodGPSOGMIMq4m5gZGcx1YGa4pprh4oDzjDh3n1uigqn2x2HBxKrhqcz5ONGpuR3%2BWoZFw9JYMyKcJwjJZUHkMBhkhC7OAEbOg4MzKQOTv%2F1w2gML3598QGOqUBj0B8sjynRW3r2zUmcpsfcIgWXlPgvEoGJT8gNqjwYtyW4yBv24dVgjPvTyfiEadcopjSSiyLifJmupz39aXLc06h5ksYUaSCWixVMyDKPG4vrLE0pA4l8jssqWk9M%2BZQk6hm%2BVaM%2BXks17epPVxjDJuo1FMAlC4fHU0SznHNNqmhMVnMxk4vM0hu5HrMWH7vjAyyXlUfEnXV3kzr6vIt1POJ7fN7&X-Amz-Signature=d8fff9dbb67e5a4775cfb44d2aeb3ceff89f558d559d62151410f735fe711bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMN7OTCR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2B%2FNphiDqMsk80F0yms4fBjkDq9VEoXl9ibBCBDOUtwIgAKljfG6zzpgGBCavWEhaCHq%2F1akbBsct6QOaJPTCxCEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCqu2ESn3wwBLlqw8ircA6DzKutfSeR8%2F6TEBZw44qNKp2UB5G23ernrfyz4cph9z%2BIcoQb4MhnbnXzZOq7jH2zUSysoDJdNIDEwMH2NiU2NW%2BzzN5DJuNppjpxZYDTlqk6kbRhjS1UYLCKXjpDVtZPueyPxtXCynuSIoTxUkAqJytJtIezbgDMQIWeCWrUiTI0SYPYuy1kz9rlhJtY87xwRbkVxPFpeT8lTKs6dxqvJsFujZmeyoAZr4Jg4qh6fndRzNog%2F%2FqdfPpF%2FYF6hmDVg3qCDOE5x9ZWbVqr8nJaoyx4p36LWt9RZHgIn2GOnL39Za0ZrDPvDiwfyuZYKMFl1ZoH%2FFZrVJ9iTByTGdJlBzgovt5kHnUbXToKBT4Uz%2FK0KtxBjdaQxuP2FZNyQXeofu%2Fh9EDZvOfpt1NQ33WBWQOuiHIhYPOkdffMUpO8bu2lc%2FQi3DlEDL%2BBHS%2BBAvveFHDYDsSjD0ZQYQ93qE0%2BbTxvUjcbY3kBy34tsAr9WDTewUuitZ0a%2BBWXFvoe6MEl2KH5Do8zsSHodGPSOGMIMq4m5gZGcx1YGa4pprh4oDzjDh3n1uigqn2x2HBxKrhqcz5ONGpuR3%2BWoZFw9JYMyKcJwjJZUHkMBhkhC7OAEbOg4MzKQOTv%2F1w2gML3598QGOqUBj0B8sjynRW3r2zUmcpsfcIgWXlPgvEoGJT8gNqjwYtyW4yBv24dVgjPvTyfiEadcopjSSiyLifJmupz39aXLc06h5ksYUaSCWixVMyDKPG4vrLE0pA4l8jssqWk9M%2BZQk6hm%2BVaM%2BXks17epPVxjDJuo1FMAlC4fHU0SznHNNqmhMVnMxk4vM0hu5HrMWH7vjAyyXlUfEnXV3kzr6vIt1POJ7fN7&X-Amz-Signature=0cf476c5bcd8df563c654bc16b25c89e258d220ed72cbc8d374d0a0fbfe1d8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMN7OTCR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2B%2FNphiDqMsk80F0yms4fBjkDq9VEoXl9ibBCBDOUtwIgAKljfG6zzpgGBCavWEhaCHq%2F1akbBsct6QOaJPTCxCEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCqu2ESn3wwBLlqw8ircA6DzKutfSeR8%2F6TEBZw44qNKp2UB5G23ernrfyz4cph9z%2BIcoQb4MhnbnXzZOq7jH2zUSysoDJdNIDEwMH2NiU2NW%2BzzN5DJuNppjpxZYDTlqk6kbRhjS1UYLCKXjpDVtZPueyPxtXCynuSIoTxUkAqJytJtIezbgDMQIWeCWrUiTI0SYPYuy1kz9rlhJtY87xwRbkVxPFpeT8lTKs6dxqvJsFujZmeyoAZr4Jg4qh6fndRzNog%2F%2FqdfPpF%2FYF6hmDVg3qCDOE5x9ZWbVqr8nJaoyx4p36LWt9RZHgIn2GOnL39Za0ZrDPvDiwfyuZYKMFl1ZoH%2FFZrVJ9iTByTGdJlBzgovt5kHnUbXToKBT4Uz%2FK0KtxBjdaQxuP2FZNyQXeofu%2Fh9EDZvOfpt1NQ33WBWQOuiHIhYPOkdffMUpO8bu2lc%2FQi3DlEDL%2BBHS%2BBAvveFHDYDsSjD0ZQYQ93qE0%2BbTxvUjcbY3kBy34tsAr9WDTewUuitZ0a%2BBWXFvoe6MEl2KH5Do8zsSHodGPSOGMIMq4m5gZGcx1YGa4pprh4oDzjDh3n1uigqn2x2HBxKrhqcz5ONGpuR3%2BWoZFw9JYMyKcJwjJZUHkMBhkhC7OAEbOg4MzKQOTv%2F1w2gML3598QGOqUBj0B8sjynRW3r2zUmcpsfcIgWXlPgvEoGJT8gNqjwYtyW4yBv24dVgjPvTyfiEadcopjSSiyLifJmupz39aXLc06h5ksYUaSCWixVMyDKPG4vrLE0pA4l8jssqWk9M%2BZQk6hm%2BVaM%2BXks17epPVxjDJuo1FMAlC4fHU0SznHNNqmhMVnMxk4vM0hu5HrMWH7vjAyyXlUfEnXV3kzr6vIt1POJ7fN7&X-Amz-Signature=95672db4fce77ed70293aeae9965cf058c89a90558df1e633e7a14a5ef78fd08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMN7OTCR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf%2B%2FNphiDqMsk80F0yms4fBjkDq9VEoXl9ibBCBDOUtwIgAKljfG6zzpgGBCavWEhaCHq%2F1akbBsct6QOaJPTCxCEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCqu2ESn3wwBLlqw8ircA6DzKutfSeR8%2F6TEBZw44qNKp2UB5G23ernrfyz4cph9z%2BIcoQb4MhnbnXzZOq7jH2zUSysoDJdNIDEwMH2NiU2NW%2BzzN5DJuNppjpxZYDTlqk6kbRhjS1UYLCKXjpDVtZPueyPxtXCynuSIoTxUkAqJytJtIezbgDMQIWeCWrUiTI0SYPYuy1kz9rlhJtY87xwRbkVxPFpeT8lTKs6dxqvJsFujZmeyoAZr4Jg4qh6fndRzNog%2F%2FqdfPpF%2FYF6hmDVg3qCDOE5x9ZWbVqr8nJaoyx4p36LWt9RZHgIn2GOnL39Za0ZrDPvDiwfyuZYKMFl1ZoH%2FFZrVJ9iTByTGdJlBzgovt5kHnUbXToKBT4Uz%2FK0KtxBjdaQxuP2FZNyQXeofu%2Fh9EDZvOfpt1NQ33WBWQOuiHIhYPOkdffMUpO8bu2lc%2FQi3DlEDL%2BBHS%2BBAvveFHDYDsSjD0ZQYQ93qE0%2BbTxvUjcbY3kBy34tsAr9WDTewUuitZ0a%2BBWXFvoe6MEl2KH5Do8zsSHodGPSOGMIMq4m5gZGcx1YGa4pprh4oDzjDh3n1uigqn2x2HBxKrhqcz5ONGpuR3%2BWoZFw9JYMyKcJwjJZUHkMBhkhC7OAEbOg4MzKQOTv%2F1w2gML3598QGOqUBj0B8sjynRW3r2zUmcpsfcIgWXlPgvEoGJT8gNqjwYtyW4yBv24dVgjPvTyfiEadcopjSSiyLifJmupz39aXLc06h5ksYUaSCWixVMyDKPG4vrLE0pA4l8jssqWk9M%2BZQk6hm%2BVaM%2BXks17epPVxjDJuo1FMAlC4fHU0SznHNNqmhMVnMxk4vM0hu5HrMWH7vjAyyXlUfEnXV3kzr6vIt1POJ7fN7&X-Amz-Signature=5705beadfacf1a03f6f9d5cc1ed25203675f59aad1e974df5dd530ddaa13cd47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
