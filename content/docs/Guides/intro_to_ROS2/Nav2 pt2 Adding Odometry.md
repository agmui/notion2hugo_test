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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HA2UJOO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCr0Tv07r8ZrywPHVkfxyAZnqI%2BfKxXXDwY37126Ar0AiEA4ThgdJIGyr%2F%2Fc1TWHDCz0T%2BKIMDY3zCu%2FAe4DM7NkbEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRDuGDu1TvlFEdLaircA3hcGuBtRasyzPkgTCNWa0i3Hqsq9KHz3%2Fh58%2B%2BfHtv4ev%2FWiip9STOoe2DvAkyVXOXF%2F1u6AHPdQ9cxulBI7dN1zOwcGhNwoWrGDt1NnvriGg8Uw1aaRKXhykCWRWK7rsRlhXDCuXE2Odctqd%2BIlpoT4oIClCWn%2BTDmtyov04H4FKE4LPV8%2F%2BkgQd3NardQjRE8PMwxosSYx4edVAFPBW3n5wEHuDcLtlJ6p0%2FuXULMg9yAV97suflvTzGDlrDPH2m4cTrojtHmptgGNTn2p84o%2B7Q29mz2jTuc842llmaYzj%2FAaL1d%2FhWXElQIw7lCFCQ9mvNEqaM54N%2BDj0UnlE8DzvXVAMPt9uwUynHhvH07tG242rIPpTqWE47aTfqmHrOSQeGcOqAWDHw4j10i9%2FpPvY4IG9jSysmzD4xSQeXX9Zak52xqOkj6tb2UIirlqkurUZifhCyIcJj%2BxlZhXwtckYinLs9uHUj9wJFjNzTgQY5tSBIVwpgOFfMI1TpX5eCeW6ni48TY5yJA8AOK15o9h%2BlyZiMR%2Bj8TjIZIUuAc9hF5VxaWuW5Z0gP%2F3t2Oy6tT%2FULoouMeSjnjfXuI5mqM7DLR3J2Nz0Gsv5IKd1TRVmADmAos4XqaSzP9MJe%2F4sQGOqUBV9n5NSZdDyMLN0wUSYgqQYQc1cRO7d15%2BSaJ916eB%2FCEzb4Dj3gkID4HYSNAU8QuY4umbDwasIoDFd%2BrPsNn8O%2Bz5hRDsCxvfP%2Fvy5FQpYXIhG9RZAdieYGBFe0BU9JrPfyM%2Fo8rexapDmDPg5c%2Fl7tUNlw7hewWkuLk2u7o0OH9c%2BdkpQj5HhqdSjOIi2PMnHtvwLxxKMghvykw6eaqDarcvhaX&X-Amz-Signature=c9272b0a500aa28e86bed7d805e46b818975785e83d754244d5ab8b98bf3b9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HA2UJOO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCr0Tv07r8ZrywPHVkfxyAZnqI%2BfKxXXDwY37126Ar0AiEA4ThgdJIGyr%2F%2Fc1TWHDCz0T%2BKIMDY3zCu%2FAe4DM7NkbEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRDuGDu1TvlFEdLaircA3hcGuBtRasyzPkgTCNWa0i3Hqsq9KHz3%2Fh58%2B%2BfHtv4ev%2FWiip9STOoe2DvAkyVXOXF%2F1u6AHPdQ9cxulBI7dN1zOwcGhNwoWrGDt1NnvriGg8Uw1aaRKXhykCWRWK7rsRlhXDCuXE2Odctqd%2BIlpoT4oIClCWn%2BTDmtyov04H4FKE4LPV8%2F%2BkgQd3NardQjRE8PMwxosSYx4edVAFPBW3n5wEHuDcLtlJ6p0%2FuXULMg9yAV97suflvTzGDlrDPH2m4cTrojtHmptgGNTn2p84o%2B7Q29mz2jTuc842llmaYzj%2FAaL1d%2FhWXElQIw7lCFCQ9mvNEqaM54N%2BDj0UnlE8DzvXVAMPt9uwUynHhvH07tG242rIPpTqWE47aTfqmHrOSQeGcOqAWDHw4j10i9%2FpPvY4IG9jSysmzD4xSQeXX9Zak52xqOkj6tb2UIirlqkurUZifhCyIcJj%2BxlZhXwtckYinLs9uHUj9wJFjNzTgQY5tSBIVwpgOFfMI1TpX5eCeW6ni48TY5yJA8AOK15o9h%2BlyZiMR%2Bj8TjIZIUuAc9hF5VxaWuW5Z0gP%2F3t2Oy6tT%2FULoouMeSjnjfXuI5mqM7DLR3J2Nz0Gsv5IKd1TRVmADmAos4XqaSzP9MJe%2F4sQGOqUBV9n5NSZdDyMLN0wUSYgqQYQc1cRO7d15%2BSaJ916eB%2FCEzb4Dj3gkID4HYSNAU8QuY4umbDwasIoDFd%2BrPsNn8O%2Bz5hRDsCxvfP%2Fvy5FQpYXIhG9RZAdieYGBFe0BU9JrPfyM%2Fo8rexapDmDPg5c%2Fl7tUNlw7hewWkuLk2u7o0OH9c%2BdkpQj5HhqdSjOIi2PMnHtvwLxxKMghvykw6eaqDarcvhaX&X-Amz-Signature=83ddb72f6d299de9a3905979b25c27a7561f1b23f26c184720a5df45f5d56de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HA2UJOO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCr0Tv07r8ZrywPHVkfxyAZnqI%2BfKxXXDwY37126Ar0AiEA4ThgdJIGyr%2F%2Fc1TWHDCz0T%2BKIMDY3zCu%2FAe4DM7NkbEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRDuGDu1TvlFEdLaircA3hcGuBtRasyzPkgTCNWa0i3Hqsq9KHz3%2Fh58%2B%2BfHtv4ev%2FWiip9STOoe2DvAkyVXOXF%2F1u6AHPdQ9cxulBI7dN1zOwcGhNwoWrGDt1NnvriGg8Uw1aaRKXhykCWRWK7rsRlhXDCuXE2Odctqd%2BIlpoT4oIClCWn%2BTDmtyov04H4FKE4LPV8%2F%2BkgQd3NardQjRE8PMwxosSYx4edVAFPBW3n5wEHuDcLtlJ6p0%2FuXULMg9yAV97suflvTzGDlrDPH2m4cTrojtHmptgGNTn2p84o%2B7Q29mz2jTuc842llmaYzj%2FAaL1d%2FhWXElQIw7lCFCQ9mvNEqaM54N%2BDj0UnlE8DzvXVAMPt9uwUynHhvH07tG242rIPpTqWE47aTfqmHrOSQeGcOqAWDHw4j10i9%2FpPvY4IG9jSysmzD4xSQeXX9Zak52xqOkj6tb2UIirlqkurUZifhCyIcJj%2BxlZhXwtckYinLs9uHUj9wJFjNzTgQY5tSBIVwpgOFfMI1TpX5eCeW6ni48TY5yJA8AOK15o9h%2BlyZiMR%2Bj8TjIZIUuAc9hF5VxaWuW5Z0gP%2F3t2Oy6tT%2FULoouMeSjnjfXuI5mqM7DLR3J2Nz0Gsv5IKd1TRVmADmAos4XqaSzP9MJe%2F4sQGOqUBV9n5NSZdDyMLN0wUSYgqQYQc1cRO7d15%2BSaJ916eB%2FCEzb4Dj3gkID4HYSNAU8QuY4umbDwasIoDFd%2BrPsNn8O%2Bz5hRDsCxvfP%2Fvy5FQpYXIhG9RZAdieYGBFe0BU9JrPfyM%2Fo8rexapDmDPg5c%2Fl7tUNlw7hewWkuLk2u7o0OH9c%2BdkpQj5HhqdSjOIi2PMnHtvwLxxKMghvykw6eaqDarcvhaX&X-Amz-Signature=84744f8855baaca0f1a62255dbc450a2c52e9da94a84ca0cf0e9955ca3332da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HA2UJOO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCr0Tv07r8ZrywPHVkfxyAZnqI%2BfKxXXDwY37126Ar0AiEA4ThgdJIGyr%2F%2Fc1TWHDCz0T%2BKIMDY3zCu%2FAe4DM7NkbEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRDuGDu1TvlFEdLaircA3hcGuBtRasyzPkgTCNWa0i3Hqsq9KHz3%2Fh58%2B%2BfHtv4ev%2FWiip9STOoe2DvAkyVXOXF%2F1u6AHPdQ9cxulBI7dN1zOwcGhNwoWrGDt1NnvriGg8Uw1aaRKXhykCWRWK7rsRlhXDCuXE2Odctqd%2BIlpoT4oIClCWn%2BTDmtyov04H4FKE4LPV8%2F%2BkgQd3NardQjRE8PMwxosSYx4edVAFPBW3n5wEHuDcLtlJ6p0%2FuXULMg9yAV97suflvTzGDlrDPH2m4cTrojtHmptgGNTn2p84o%2B7Q29mz2jTuc842llmaYzj%2FAaL1d%2FhWXElQIw7lCFCQ9mvNEqaM54N%2BDj0UnlE8DzvXVAMPt9uwUynHhvH07tG242rIPpTqWE47aTfqmHrOSQeGcOqAWDHw4j10i9%2FpPvY4IG9jSysmzD4xSQeXX9Zak52xqOkj6tb2UIirlqkurUZifhCyIcJj%2BxlZhXwtckYinLs9uHUj9wJFjNzTgQY5tSBIVwpgOFfMI1TpX5eCeW6ni48TY5yJA8AOK15o9h%2BlyZiMR%2Bj8TjIZIUuAc9hF5VxaWuW5Z0gP%2F3t2Oy6tT%2FULoouMeSjnjfXuI5mqM7DLR3J2Nz0Gsv5IKd1TRVmADmAos4XqaSzP9MJe%2F4sQGOqUBV9n5NSZdDyMLN0wUSYgqQYQc1cRO7d15%2BSaJ916eB%2FCEzb4Dj3gkID4HYSNAU8QuY4umbDwasIoDFd%2BrPsNn8O%2Bz5hRDsCxvfP%2Fvy5FQpYXIhG9RZAdieYGBFe0BU9JrPfyM%2Fo8rexapDmDPg5c%2Fl7tUNlw7hewWkuLk2u7o0OH9c%2BdkpQj5HhqdSjOIi2PMnHtvwLxxKMghvykw6eaqDarcvhaX&X-Amz-Signature=3fcc5499a3c79cef3b110da65d66863126a2eb5d3dec501632337a48dc7bac3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HA2UJOO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCr0Tv07r8ZrywPHVkfxyAZnqI%2BfKxXXDwY37126Ar0AiEA4ThgdJIGyr%2F%2Fc1TWHDCz0T%2BKIMDY3zCu%2FAe4DM7NkbEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRDuGDu1TvlFEdLaircA3hcGuBtRasyzPkgTCNWa0i3Hqsq9KHz3%2Fh58%2B%2BfHtv4ev%2FWiip9STOoe2DvAkyVXOXF%2F1u6AHPdQ9cxulBI7dN1zOwcGhNwoWrGDt1NnvriGg8Uw1aaRKXhykCWRWK7rsRlhXDCuXE2Odctqd%2BIlpoT4oIClCWn%2BTDmtyov04H4FKE4LPV8%2F%2BkgQd3NardQjRE8PMwxosSYx4edVAFPBW3n5wEHuDcLtlJ6p0%2FuXULMg9yAV97suflvTzGDlrDPH2m4cTrojtHmptgGNTn2p84o%2B7Q29mz2jTuc842llmaYzj%2FAaL1d%2FhWXElQIw7lCFCQ9mvNEqaM54N%2BDj0UnlE8DzvXVAMPt9uwUynHhvH07tG242rIPpTqWE47aTfqmHrOSQeGcOqAWDHw4j10i9%2FpPvY4IG9jSysmzD4xSQeXX9Zak52xqOkj6tb2UIirlqkurUZifhCyIcJj%2BxlZhXwtckYinLs9uHUj9wJFjNzTgQY5tSBIVwpgOFfMI1TpX5eCeW6ni48TY5yJA8AOK15o9h%2BlyZiMR%2Bj8TjIZIUuAc9hF5VxaWuW5Z0gP%2F3t2Oy6tT%2FULoouMeSjnjfXuI5mqM7DLR3J2Nz0Gsv5IKd1TRVmADmAos4XqaSzP9MJe%2F4sQGOqUBV9n5NSZdDyMLN0wUSYgqQYQc1cRO7d15%2BSaJ916eB%2FCEzb4Dj3gkID4HYSNAU8QuY4umbDwasIoDFd%2BrPsNn8O%2Bz5hRDsCxvfP%2Fvy5FQpYXIhG9RZAdieYGBFe0BU9JrPfyM%2Fo8rexapDmDPg5c%2Fl7tUNlw7hewWkuLk2u7o0OH9c%2BdkpQj5HhqdSjOIi2PMnHtvwLxxKMghvykw6eaqDarcvhaX&X-Amz-Signature=508328158cd86ab8cbc8350eb2f3d720febea3448e8a635328874443b94457a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HA2UJOO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCr0Tv07r8ZrywPHVkfxyAZnqI%2BfKxXXDwY37126Ar0AiEA4ThgdJIGyr%2F%2Fc1TWHDCz0T%2BKIMDY3zCu%2FAe4DM7NkbEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRDuGDu1TvlFEdLaircA3hcGuBtRasyzPkgTCNWa0i3Hqsq9KHz3%2Fh58%2B%2BfHtv4ev%2FWiip9STOoe2DvAkyVXOXF%2F1u6AHPdQ9cxulBI7dN1zOwcGhNwoWrGDt1NnvriGg8Uw1aaRKXhykCWRWK7rsRlhXDCuXE2Odctqd%2BIlpoT4oIClCWn%2BTDmtyov04H4FKE4LPV8%2F%2BkgQd3NardQjRE8PMwxosSYx4edVAFPBW3n5wEHuDcLtlJ6p0%2FuXULMg9yAV97suflvTzGDlrDPH2m4cTrojtHmptgGNTn2p84o%2B7Q29mz2jTuc842llmaYzj%2FAaL1d%2FhWXElQIw7lCFCQ9mvNEqaM54N%2BDj0UnlE8DzvXVAMPt9uwUynHhvH07tG242rIPpTqWE47aTfqmHrOSQeGcOqAWDHw4j10i9%2FpPvY4IG9jSysmzD4xSQeXX9Zak52xqOkj6tb2UIirlqkurUZifhCyIcJj%2BxlZhXwtckYinLs9uHUj9wJFjNzTgQY5tSBIVwpgOFfMI1TpX5eCeW6ni48TY5yJA8AOK15o9h%2BlyZiMR%2Bj8TjIZIUuAc9hF5VxaWuW5Z0gP%2F3t2Oy6tT%2FULoouMeSjnjfXuI5mqM7DLR3J2Nz0Gsv5IKd1TRVmADmAos4XqaSzP9MJe%2F4sQGOqUBV9n5NSZdDyMLN0wUSYgqQYQc1cRO7d15%2BSaJ916eB%2FCEzb4Dj3gkID4HYSNAU8QuY4umbDwasIoDFd%2BrPsNn8O%2Bz5hRDsCxvfP%2Fvy5FQpYXIhG9RZAdieYGBFe0BU9JrPfyM%2Fo8rexapDmDPg5c%2Fl7tUNlw7hewWkuLk2u7o0OH9c%2BdkpQj5HhqdSjOIi2PMnHtvwLxxKMghvykw6eaqDarcvhaX&X-Amz-Signature=bf0a2dacd6139d77625fc1e3b06ad84911e6e870ba50c47599b372c62fbe927e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HA2UJOO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCr0Tv07r8ZrywPHVkfxyAZnqI%2BfKxXXDwY37126Ar0AiEA4ThgdJIGyr%2F%2Fc1TWHDCz0T%2BKIMDY3zCu%2FAe4DM7NkbEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRDuGDu1TvlFEdLaircA3hcGuBtRasyzPkgTCNWa0i3Hqsq9KHz3%2Fh58%2B%2BfHtv4ev%2FWiip9STOoe2DvAkyVXOXF%2F1u6AHPdQ9cxulBI7dN1zOwcGhNwoWrGDt1NnvriGg8Uw1aaRKXhykCWRWK7rsRlhXDCuXE2Odctqd%2BIlpoT4oIClCWn%2BTDmtyov04H4FKE4LPV8%2F%2BkgQd3NardQjRE8PMwxosSYx4edVAFPBW3n5wEHuDcLtlJ6p0%2FuXULMg9yAV97suflvTzGDlrDPH2m4cTrojtHmptgGNTn2p84o%2B7Q29mz2jTuc842llmaYzj%2FAaL1d%2FhWXElQIw7lCFCQ9mvNEqaM54N%2BDj0UnlE8DzvXVAMPt9uwUynHhvH07tG242rIPpTqWE47aTfqmHrOSQeGcOqAWDHw4j10i9%2FpPvY4IG9jSysmzD4xSQeXX9Zak52xqOkj6tb2UIirlqkurUZifhCyIcJj%2BxlZhXwtckYinLs9uHUj9wJFjNzTgQY5tSBIVwpgOFfMI1TpX5eCeW6ni48TY5yJA8AOK15o9h%2BlyZiMR%2Bj8TjIZIUuAc9hF5VxaWuW5Z0gP%2F3t2Oy6tT%2FULoouMeSjnjfXuI5mqM7DLR3J2Nz0Gsv5IKd1TRVmADmAos4XqaSzP9MJe%2F4sQGOqUBV9n5NSZdDyMLN0wUSYgqQYQc1cRO7d15%2BSaJ916eB%2FCEzb4Dj3gkID4HYSNAU8QuY4umbDwasIoDFd%2BrPsNn8O%2Bz5hRDsCxvfP%2Fvy5FQpYXIhG9RZAdieYGBFe0BU9JrPfyM%2Fo8rexapDmDPg5c%2Fl7tUNlw7hewWkuLk2u7o0OH9c%2BdkpQj5HhqdSjOIi2PMnHtvwLxxKMghvykw6eaqDarcvhaX&X-Amz-Signature=7d7247254bd2b9827bae174535603b118e106081e332a98de22077baaa0f2d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HA2UJOO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCr0Tv07r8ZrywPHVkfxyAZnqI%2BfKxXXDwY37126Ar0AiEA4ThgdJIGyr%2F%2Fc1TWHDCz0T%2BKIMDY3zCu%2FAe4DM7NkbEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRDuGDu1TvlFEdLaircA3hcGuBtRasyzPkgTCNWa0i3Hqsq9KHz3%2Fh58%2B%2BfHtv4ev%2FWiip9STOoe2DvAkyVXOXF%2F1u6AHPdQ9cxulBI7dN1zOwcGhNwoWrGDt1NnvriGg8Uw1aaRKXhykCWRWK7rsRlhXDCuXE2Odctqd%2BIlpoT4oIClCWn%2BTDmtyov04H4FKE4LPV8%2F%2BkgQd3NardQjRE8PMwxosSYx4edVAFPBW3n5wEHuDcLtlJ6p0%2FuXULMg9yAV97suflvTzGDlrDPH2m4cTrojtHmptgGNTn2p84o%2B7Q29mz2jTuc842llmaYzj%2FAaL1d%2FhWXElQIw7lCFCQ9mvNEqaM54N%2BDj0UnlE8DzvXVAMPt9uwUynHhvH07tG242rIPpTqWE47aTfqmHrOSQeGcOqAWDHw4j10i9%2FpPvY4IG9jSysmzD4xSQeXX9Zak52xqOkj6tb2UIirlqkurUZifhCyIcJj%2BxlZhXwtckYinLs9uHUj9wJFjNzTgQY5tSBIVwpgOFfMI1TpX5eCeW6ni48TY5yJA8AOK15o9h%2BlyZiMR%2Bj8TjIZIUuAc9hF5VxaWuW5Z0gP%2F3t2Oy6tT%2FULoouMeSjnjfXuI5mqM7DLR3J2Nz0Gsv5IKd1TRVmADmAos4XqaSzP9MJe%2F4sQGOqUBV9n5NSZdDyMLN0wUSYgqQYQc1cRO7d15%2BSaJ916eB%2FCEzb4Dj3gkID4HYSNAU8QuY4umbDwasIoDFd%2BrPsNn8O%2Bz5hRDsCxvfP%2Fvy5FQpYXIhG9RZAdieYGBFe0BU9JrPfyM%2Fo8rexapDmDPg5c%2Fl7tUNlw7hewWkuLk2u7o0OH9c%2BdkpQj5HhqdSjOIi2PMnHtvwLxxKMghvykw6eaqDarcvhaX&X-Amz-Signature=efd8618ca0d6bb5c3faf60e6fed2b9f65dfb5190171fba0db8f59f15a7b2ae4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HA2UJOO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCr0Tv07r8ZrywPHVkfxyAZnqI%2BfKxXXDwY37126Ar0AiEA4ThgdJIGyr%2F%2Fc1TWHDCz0T%2BKIMDY3zCu%2FAe4DM7NkbEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRDuGDu1TvlFEdLaircA3hcGuBtRasyzPkgTCNWa0i3Hqsq9KHz3%2Fh58%2B%2BfHtv4ev%2FWiip9STOoe2DvAkyVXOXF%2F1u6AHPdQ9cxulBI7dN1zOwcGhNwoWrGDt1NnvriGg8Uw1aaRKXhykCWRWK7rsRlhXDCuXE2Odctqd%2BIlpoT4oIClCWn%2BTDmtyov04H4FKE4LPV8%2F%2BkgQd3NardQjRE8PMwxosSYx4edVAFPBW3n5wEHuDcLtlJ6p0%2FuXULMg9yAV97suflvTzGDlrDPH2m4cTrojtHmptgGNTn2p84o%2B7Q29mz2jTuc842llmaYzj%2FAaL1d%2FhWXElQIw7lCFCQ9mvNEqaM54N%2BDj0UnlE8DzvXVAMPt9uwUynHhvH07tG242rIPpTqWE47aTfqmHrOSQeGcOqAWDHw4j10i9%2FpPvY4IG9jSysmzD4xSQeXX9Zak52xqOkj6tb2UIirlqkurUZifhCyIcJj%2BxlZhXwtckYinLs9uHUj9wJFjNzTgQY5tSBIVwpgOFfMI1TpX5eCeW6ni48TY5yJA8AOK15o9h%2BlyZiMR%2Bj8TjIZIUuAc9hF5VxaWuW5Z0gP%2F3t2Oy6tT%2FULoouMeSjnjfXuI5mqM7DLR3J2Nz0Gsv5IKd1TRVmADmAos4XqaSzP9MJe%2F4sQGOqUBV9n5NSZdDyMLN0wUSYgqQYQc1cRO7d15%2BSaJ916eB%2FCEzb4Dj3gkID4HYSNAU8QuY4umbDwasIoDFd%2BrPsNn8O%2Bz5hRDsCxvfP%2Fvy5FQpYXIhG9RZAdieYGBFe0BU9JrPfyM%2Fo8rexapDmDPg5c%2Fl7tUNlw7hewWkuLk2u7o0OH9c%2BdkpQj5HhqdSjOIi2PMnHtvwLxxKMghvykw6eaqDarcvhaX&X-Amz-Signature=e51ddb8cc6200e7336244b43e100530e8bc33f863bae072753769aaef99e6598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HA2UJOO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCr0Tv07r8ZrywPHVkfxyAZnqI%2BfKxXXDwY37126Ar0AiEA4ThgdJIGyr%2F%2Fc1TWHDCz0T%2BKIMDY3zCu%2FAe4DM7NkbEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRDuGDu1TvlFEdLaircA3hcGuBtRasyzPkgTCNWa0i3Hqsq9KHz3%2Fh58%2B%2BfHtv4ev%2FWiip9STOoe2DvAkyVXOXF%2F1u6AHPdQ9cxulBI7dN1zOwcGhNwoWrGDt1NnvriGg8Uw1aaRKXhykCWRWK7rsRlhXDCuXE2Odctqd%2BIlpoT4oIClCWn%2BTDmtyov04H4FKE4LPV8%2F%2BkgQd3NardQjRE8PMwxosSYx4edVAFPBW3n5wEHuDcLtlJ6p0%2FuXULMg9yAV97suflvTzGDlrDPH2m4cTrojtHmptgGNTn2p84o%2B7Q29mz2jTuc842llmaYzj%2FAaL1d%2FhWXElQIw7lCFCQ9mvNEqaM54N%2BDj0UnlE8DzvXVAMPt9uwUynHhvH07tG242rIPpTqWE47aTfqmHrOSQeGcOqAWDHw4j10i9%2FpPvY4IG9jSysmzD4xSQeXX9Zak52xqOkj6tb2UIirlqkurUZifhCyIcJj%2BxlZhXwtckYinLs9uHUj9wJFjNzTgQY5tSBIVwpgOFfMI1TpX5eCeW6ni48TY5yJA8AOK15o9h%2BlyZiMR%2Bj8TjIZIUuAc9hF5VxaWuW5Z0gP%2F3t2Oy6tT%2FULoouMeSjnjfXuI5mqM7DLR3J2Nz0Gsv5IKd1TRVmADmAos4XqaSzP9MJe%2F4sQGOqUBV9n5NSZdDyMLN0wUSYgqQYQc1cRO7d15%2BSaJ916eB%2FCEzb4Dj3gkID4HYSNAU8QuY4umbDwasIoDFd%2BrPsNn8O%2Bz5hRDsCxvfP%2Fvy5FQpYXIhG9RZAdieYGBFe0BU9JrPfyM%2Fo8rexapDmDPg5c%2Fl7tUNlw7hewWkuLk2u7o0OH9c%2BdkpQj5HhqdSjOIi2PMnHtvwLxxKMghvykw6eaqDarcvhaX&X-Amz-Signature=298494bab4e5e43dc3c3cadcd4010b4bc90dae0f3e154430c16a0e30977d243b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXJH4LK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC02X%2FvLEMQTLvxTLvvl4FHrt285xj6aDMSZrrvse77FwIgJNHpcddSLwWVqHJmKW%2BjYt5Q42TXComRnyVs59JhhXIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBO0HYbvhvev6B8ayrcA%2BfAL5KCSalSGyR%2F2gF%2Fx%2BQ5pqZO8RS21WbW4W85mX3glO8HNnLRKtjREutNv4aFuGgLTN67MzsboQsNtyE2BEtIdX4exHYOIeRk2qC%2FpNNq%2Bmp2OlEqPTsTq2Zr7vz6T61Z8w4d5x4w%2BcmULyecpRO9bm%2BpupmuDbneqNbFS73BchXbz8Jebtfb2S4EQKMbyXA4Yw%2FBLGYEYTkFJk3l73jlYaj2J0yPo2fl1%2BljKcu9gCuzsjJmIqVX9k07hXHKxAIdQJs5LmSd4gBSnM97zHgrHGHjEBxZ2vnsbMXv1zpBc%2BrP2jllUwPu%2BpgCEXVU7hgM%2FxrLclq6YzEE3xnamUDM0uMsBoVjF%2BgVOSP6J%2BJErnc%2FnKIKM83ulJg1S40vGAWT%2FohqaP2C37nrvRB5udeWSb591gbKAIuk%2BQ8%2BsSAP82dyL%2BQAdUDSlPufG2Dz8iQi9Pq%2BN8xS9NIdzSKTsa3PmrLLP2VS%2B9ja8HGUWlyCuWp1RJ8DEd%2Fzv%2F%2F7D1XHZzVnGLpla1Sg3CNbo%2F6wZF%2B%2BIJm2N5TpVN5MvEXYDV7Wwg19RaQXBuUI5071fW5fwu5DiN3KCWPvniTjtZPPv9tUqfL20NHr5IY2Pkc6LpzLEVTNi8z9i9uHw9ERMKS%2F4sQGOqUB7aalE%2FG9CdLipbNJXZUP0jD1qJ4VI2wqRbLwH9SqGSLLggCUQt1eQpeM0d0aaMzuv4SDiypJpHcy1RVE7EDgnP8EQ7JLV08XYQiGIkjbVL5uHd5SjRHq8LBXboPe8CfBmyHTkErls2dZaD7N0hqcXjsqdCFK%2BvGir3Q2UlS7RKQ6IOmZn4baHjTX5rpRzvKXS5O6QhdIObzdd%2Fzk7C77st44Py8y&X-Amz-Signature=408e7afd3b635ef369e3307178ff1e512816d25ab194e4a240c33ca5ac387e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZT27IE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq5aSeNQe1%2Bj1wM6hVkNkq2TiilFMbxkjxB8FEt5Az6AiEA3cOdwAFF2Xp4NySpbb7MvFf1aoTPzun0gPOjckDsQ3MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyUhUU43Pihglu11SrcA1TAl2MbxdOfSRxqnyPUL4vuv0ysuqwFW9FcVnOj8nE6bSrHTnrlKKKC8RPTN0rewXKT%2BoBl3QnSoNLXdJhG6yXrUoMJSYhHb2CepAtky9gOAkKZCGtp4v9YqlMu59AEzNiB%2FfvlmI3ezLWJvLFDgq4atZhFGzZnlehiWC2SZFUfVl152FFaobGmg5rHeicgIWSqO7K5YS%2FS%2BXeSMBfS6VZL3bOegshNljnNa0nRQM7ppHJQlHTfiZEwgRtY5r1PZFH22PFQGi%2FFw%2BHEZtUgpuEAuD4F%2F64GotBVtc2LzefiR7aK18RlTpsB%2BICJoaHCUXSDeTxg1PJde2pHES3Z53n3dcwOR2bPwAWe9c0cjDF8hvVRDReOu7ZnaHLZVhL3vnz2ayJeSib3pE5g7FanCHAVWQzFb2E7nUjQzQrT1AcL%2F9vCrJBOgdMHb8PKtXF8KWQEGVOuAQD2UghaAlaZHjZQV%2FOvOPoTC%2F%2Fpp6n5CrXKydVwI5osI5PqBbZh1I%2BwANy889zsnMh2IQLN2NmUPto22njStpmlj8YPYiZ0k8aYyiYbeiKER6Ey7e%2FLrlfrO1MqbcyfnfiAPmHuwuNeFnCBIjPCc%2B0ThtB3oGztun1jpbeBRl7n%2BIcZciqJMOu%2B4sQGOqUBCVLb9ae93Uw1dLGVCrExBzKFXk0j%2FVvAljxJROumOBe6xGgVg8Js96uuhn8vrdYPjOwDHvWD2%2FtRprs%2FCJjYpCInQClwys6pzrPV%2BEqKk%2BfynzWb2NBNDa5nJh7oN7w0HhzzhDyxpP43jEPdLkbOeBhVVmooDfUGI%2BUhszvCp4kPJSC%2BIVf0EccrEj%2FRbWO2iMntvYI1ryCZzdbBWRBOjB0BV6D%2B&X-Amz-Signature=7ef0116dde68408f80ac0a85fc571c4fee696abfe24ddade97c7e763d09d9632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZT27IE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq5aSeNQe1%2Bj1wM6hVkNkq2TiilFMbxkjxB8FEt5Az6AiEA3cOdwAFF2Xp4NySpbb7MvFf1aoTPzun0gPOjckDsQ3MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyUhUU43Pihglu11SrcA1TAl2MbxdOfSRxqnyPUL4vuv0ysuqwFW9FcVnOj8nE6bSrHTnrlKKKC8RPTN0rewXKT%2BoBl3QnSoNLXdJhG6yXrUoMJSYhHb2CepAtky9gOAkKZCGtp4v9YqlMu59AEzNiB%2FfvlmI3ezLWJvLFDgq4atZhFGzZnlehiWC2SZFUfVl152FFaobGmg5rHeicgIWSqO7K5YS%2FS%2BXeSMBfS6VZL3bOegshNljnNa0nRQM7ppHJQlHTfiZEwgRtY5r1PZFH22PFQGi%2FFw%2BHEZtUgpuEAuD4F%2F64GotBVtc2LzefiR7aK18RlTpsB%2BICJoaHCUXSDeTxg1PJde2pHES3Z53n3dcwOR2bPwAWe9c0cjDF8hvVRDReOu7ZnaHLZVhL3vnz2ayJeSib3pE5g7FanCHAVWQzFb2E7nUjQzQrT1AcL%2F9vCrJBOgdMHb8PKtXF8KWQEGVOuAQD2UghaAlaZHjZQV%2FOvOPoTC%2F%2Fpp6n5CrXKydVwI5osI5PqBbZh1I%2BwANy889zsnMh2IQLN2NmUPto22njStpmlj8YPYiZ0k8aYyiYbeiKER6Ey7e%2FLrlfrO1MqbcyfnfiAPmHuwuNeFnCBIjPCc%2B0ThtB3oGztun1jpbeBRl7n%2BIcZciqJMOu%2B4sQGOqUBCVLb9ae93Uw1dLGVCrExBzKFXk0j%2FVvAljxJROumOBe6xGgVg8Js96uuhn8vrdYPjOwDHvWD2%2FtRprs%2FCJjYpCInQClwys6pzrPV%2BEqKk%2BfynzWb2NBNDa5nJh7oN7w0HhzzhDyxpP43jEPdLkbOeBhVVmooDfUGI%2BUhszvCp4kPJSC%2BIVf0EccrEj%2FRbWO2iMntvYI1ryCZzdbBWRBOjB0BV6D%2B&X-Amz-Signature=fb70c709aa4ed88d2d5d6315dadd387f5675814bf85fdaa0e53edd159d07f0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZT27IE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq5aSeNQe1%2Bj1wM6hVkNkq2TiilFMbxkjxB8FEt5Az6AiEA3cOdwAFF2Xp4NySpbb7MvFf1aoTPzun0gPOjckDsQ3MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyUhUU43Pihglu11SrcA1TAl2MbxdOfSRxqnyPUL4vuv0ysuqwFW9FcVnOj8nE6bSrHTnrlKKKC8RPTN0rewXKT%2BoBl3QnSoNLXdJhG6yXrUoMJSYhHb2CepAtky9gOAkKZCGtp4v9YqlMu59AEzNiB%2FfvlmI3ezLWJvLFDgq4atZhFGzZnlehiWC2SZFUfVl152FFaobGmg5rHeicgIWSqO7K5YS%2FS%2BXeSMBfS6VZL3bOegshNljnNa0nRQM7ppHJQlHTfiZEwgRtY5r1PZFH22PFQGi%2FFw%2BHEZtUgpuEAuD4F%2F64GotBVtc2LzefiR7aK18RlTpsB%2BICJoaHCUXSDeTxg1PJde2pHES3Z53n3dcwOR2bPwAWe9c0cjDF8hvVRDReOu7ZnaHLZVhL3vnz2ayJeSib3pE5g7FanCHAVWQzFb2E7nUjQzQrT1AcL%2F9vCrJBOgdMHb8PKtXF8KWQEGVOuAQD2UghaAlaZHjZQV%2FOvOPoTC%2F%2Fpp6n5CrXKydVwI5osI5PqBbZh1I%2BwANy889zsnMh2IQLN2NmUPto22njStpmlj8YPYiZ0k8aYyiYbeiKER6Ey7e%2FLrlfrO1MqbcyfnfiAPmHuwuNeFnCBIjPCc%2B0ThtB3oGztun1jpbeBRl7n%2BIcZciqJMOu%2B4sQGOqUBCVLb9ae93Uw1dLGVCrExBzKFXk0j%2FVvAljxJROumOBe6xGgVg8Js96uuhn8vrdYPjOwDHvWD2%2FtRprs%2FCJjYpCInQClwys6pzrPV%2BEqKk%2BfynzWb2NBNDa5nJh7oN7w0HhzzhDyxpP43jEPdLkbOeBhVVmooDfUGI%2BUhszvCp4kPJSC%2BIVf0EccrEj%2FRbWO2iMntvYI1ryCZzdbBWRBOjB0BV6D%2B&X-Amz-Signature=d2129a61e163db58eaef87d1440c1e953145dc4d75b75d1879da4f65eff5f140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZT27IE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq5aSeNQe1%2Bj1wM6hVkNkq2TiilFMbxkjxB8FEt5Az6AiEA3cOdwAFF2Xp4NySpbb7MvFf1aoTPzun0gPOjckDsQ3MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyUhUU43Pihglu11SrcA1TAl2MbxdOfSRxqnyPUL4vuv0ysuqwFW9FcVnOj8nE6bSrHTnrlKKKC8RPTN0rewXKT%2BoBl3QnSoNLXdJhG6yXrUoMJSYhHb2CepAtky9gOAkKZCGtp4v9YqlMu59AEzNiB%2FfvlmI3ezLWJvLFDgq4atZhFGzZnlehiWC2SZFUfVl152FFaobGmg5rHeicgIWSqO7K5YS%2FS%2BXeSMBfS6VZL3bOegshNljnNa0nRQM7ppHJQlHTfiZEwgRtY5r1PZFH22PFQGi%2FFw%2BHEZtUgpuEAuD4F%2F64GotBVtc2LzefiR7aK18RlTpsB%2BICJoaHCUXSDeTxg1PJde2pHES3Z53n3dcwOR2bPwAWe9c0cjDF8hvVRDReOu7ZnaHLZVhL3vnz2ayJeSib3pE5g7FanCHAVWQzFb2E7nUjQzQrT1AcL%2F9vCrJBOgdMHb8PKtXF8KWQEGVOuAQD2UghaAlaZHjZQV%2FOvOPoTC%2F%2Fpp6n5CrXKydVwI5osI5PqBbZh1I%2BwANy889zsnMh2IQLN2NmUPto22njStpmlj8YPYiZ0k8aYyiYbeiKER6Ey7e%2FLrlfrO1MqbcyfnfiAPmHuwuNeFnCBIjPCc%2B0ThtB3oGztun1jpbeBRl7n%2BIcZciqJMOu%2B4sQGOqUBCVLb9ae93Uw1dLGVCrExBzKFXk0j%2FVvAljxJROumOBe6xGgVg8Js96uuhn8vrdYPjOwDHvWD2%2FtRprs%2FCJjYpCInQClwys6pzrPV%2BEqKk%2BfynzWb2NBNDa5nJh7oN7w0HhzzhDyxpP43jEPdLkbOeBhVVmooDfUGI%2BUhszvCp4kPJSC%2BIVf0EccrEj%2FRbWO2iMntvYI1ryCZzdbBWRBOjB0BV6D%2B&X-Amz-Signature=d939cc2555257ef42c753397a9ae21dc1b8ec883e96614183bf86a6d9d96026a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZT27IE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq5aSeNQe1%2Bj1wM6hVkNkq2TiilFMbxkjxB8FEt5Az6AiEA3cOdwAFF2Xp4NySpbb7MvFf1aoTPzun0gPOjckDsQ3MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyUhUU43Pihglu11SrcA1TAl2MbxdOfSRxqnyPUL4vuv0ysuqwFW9FcVnOj8nE6bSrHTnrlKKKC8RPTN0rewXKT%2BoBl3QnSoNLXdJhG6yXrUoMJSYhHb2CepAtky9gOAkKZCGtp4v9YqlMu59AEzNiB%2FfvlmI3ezLWJvLFDgq4atZhFGzZnlehiWC2SZFUfVl152FFaobGmg5rHeicgIWSqO7K5YS%2FS%2BXeSMBfS6VZL3bOegshNljnNa0nRQM7ppHJQlHTfiZEwgRtY5r1PZFH22PFQGi%2FFw%2BHEZtUgpuEAuD4F%2F64GotBVtc2LzefiR7aK18RlTpsB%2BICJoaHCUXSDeTxg1PJde2pHES3Z53n3dcwOR2bPwAWe9c0cjDF8hvVRDReOu7ZnaHLZVhL3vnz2ayJeSib3pE5g7FanCHAVWQzFb2E7nUjQzQrT1AcL%2F9vCrJBOgdMHb8PKtXF8KWQEGVOuAQD2UghaAlaZHjZQV%2FOvOPoTC%2F%2Fpp6n5CrXKydVwI5osI5PqBbZh1I%2BwANy889zsnMh2IQLN2NmUPto22njStpmlj8YPYiZ0k8aYyiYbeiKER6Ey7e%2FLrlfrO1MqbcyfnfiAPmHuwuNeFnCBIjPCc%2B0ThtB3oGztun1jpbeBRl7n%2BIcZciqJMOu%2B4sQGOqUBCVLb9ae93Uw1dLGVCrExBzKFXk0j%2FVvAljxJROumOBe6xGgVg8Js96uuhn8vrdYPjOwDHvWD2%2FtRprs%2FCJjYpCInQClwys6pzrPV%2BEqKk%2BfynzWb2NBNDa5nJh7oN7w0HhzzhDyxpP43jEPdLkbOeBhVVmooDfUGI%2BUhszvCp4kPJSC%2BIVf0EccrEj%2FRbWO2iMntvYI1ryCZzdbBWRBOjB0BV6D%2B&X-Amz-Signature=dd1ba39ac2f8b76fdbf5816eb5130d86b3f6ba15296701ec857c4eb81979e5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZT27IE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq5aSeNQe1%2Bj1wM6hVkNkq2TiilFMbxkjxB8FEt5Az6AiEA3cOdwAFF2Xp4NySpbb7MvFf1aoTPzun0gPOjckDsQ3MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyUhUU43Pihglu11SrcA1TAl2MbxdOfSRxqnyPUL4vuv0ysuqwFW9FcVnOj8nE6bSrHTnrlKKKC8RPTN0rewXKT%2BoBl3QnSoNLXdJhG6yXrUoMJSYhHb2CepAtky9gOAkKZCGtp4v9YqlMu59AEzNiB%2FfvlmI3ezLWJvLFDgq4atZhFGzZnlehiWC2SZFUfVl152FFaobGmg5rHeicgIWSqO7K5YS%2FS%2BXeSMBfS6VZL3bOegshNljnNa0nRQM7ppHJQlHTfiZEwgRtY5r1PZFH22PFQGi%2FFw%2BHEZtUgpuEAuD4F%2F64GotBVtc2LzefiR7aK18RlTpsB%2BICJoaHCUXSDeTxg1PJde2pHES3Z53n3dcwOR2bPwAWe9c0cjDF8hvVRDReOu7ZnaHLZVhL3vnz2ayJeSib3pE5g7FanCHAVWQzFb2E7nUjQzQrT1AcL%2F9vCrJBOgdMHb8PKtXF8KWQEGVOuAQD2UghaAlaZHjZQV%2FOvOPoTC%2F%2Fpp6n5CrXKydVwI5osI5PqBbZh1I%2BwANy889zsnMh2IQLN2NmUPto22njStpmlj8YPYiZ0k8aYyiYbeiKER6Ey7e%2FLrlfrO1MqbcyfnfiAPmHuwuNeFnCBIjPCc%2B0ThtB3oGztun1jpbeBRl7n%2BIcZciqJMOu%2B4sQGOqUBCVLb9ae93Uw1dLGVCrExBzKFXk0j%2FVvAljxJROumOBe6xGgVg8Js96uuhn8vrdYPjOwDHvWD2%2FtRprs%2FCJjYpCInQClwys6pzrPV%2BEqKk%2BfynzWb2NBNDa5nJh7oN7w0HhzzhDyxpP43jEPdLkbOeBhVVmooDfUGI%2BUhszvCp4kPJSC%2BIVf0EccrEj%2FRbWO2iMntvYI1ryCZzdbBWRBOjB0BV6D%2B&X-Amz-Signature=516d8785b19c6645d92eb270f0125ee105f6093f6d5eb470ac026b00c709d5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZT27IE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq5aSeNQe1%2Bj1wM6hVkNkq2TiilFMbxkjxB8FEt5Az6AiEA3cOdwAFF2Xp4NySpbb7MvFf1aoTPzun0gPOjckDsQ3MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyUhUU43Pihglu11SrcA1TAl2MbxdOfSRxqnyPUL4vuv0ysuqwFW9FcVnOj8nE6bSrHTnrlKKKC8RPTN0rewXKT%2BoBl3QnSoNLXdJhG6yXrUoMJSYhHb2CepAtky9gOAkKZCGtp4v9YqlMu59AEzNiB%2FfvlmI3ezLWJvLFDgq4atZhFGzZnlehiWC2SZFUfVl152FFaobGmg5rHeicgIWSqO7K5YS%2FS%2BXeSMBfS6VZL3bOegshNljnNa0nRQM7ppHJQlHTfiZEwgRtY5r1PZFH22PFQGi%2FFw%2BHEZtUgpuEAuD4F%2F64GotBVtc2LzefiR7aK18RlTpsB%2BICJoaHCUXSDeTxg1PJde2pHES3Z53n3dcwOR2bPwAWe9c0cjDF8hvVRDReOu7ZnaHLZVhL3vnz2ayJeSib3pE5g7FanCHAVWQzFb2E7nUjQzQrT1AcL%2F9vCrJBOgdMHb8PKtXF8KWQEGVOuAQD2UghaAlaZHjZQV%2FOvOPoTC%2F%2Fpp6n5CrXKydVwI5osI5PqBbZh1I%2BwANy889zsnMh2IQLN2NmUPto22njStpmlj8YPYiZ0k8aYyiYbeiKER6Ey7e%2FLrlfrO1MqbcyfnfiAPmHuwuNeFnCBIjPCc%2B0ThtB3oGztun1jpbeBRl7n%2BIcZciqJMOu%2B4sQGOqUBCVLb9ae93Uw1dLGVCrExBzKFXk0j%2FVvAljxJROumOBe6xGgVg8Js96uuhn8vrdYPjOwDHvWD2%2FtRprs%2FCJjYpCInQClwys6pzrPV%2BEqKk%2BfynzWb2NBNDa5nJh7oN7w0HhzzhDyxpP43jEPdLkbOeBhVVmooDfUGI%2BUhszvCp4kPJSC%2BIVf0EccrEj%2FRbWO2iMntvYI1ryCZzdbBWRBOjB0BV6D%2B&X-Amz-Signature=87dbd1f18779c0322a8642c7ae9fc05abc4711d55fe94b3361775c3776189691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZT27IE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq5aSeNQe1%2Bj1wM6hVkNkq2TiilFMbxkjxB8FEt5Az6AiEA3cOdwAFF2Xp4NySpbb7MvFf1aoTPzun0gPOjckDsQ3MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyUhUU43Pihglu11SrcA1TAl2MbxdOfSRxqnyPUL4vuv0ysuqwFW9FcVnOj8nE6bSrHTnrlKKKC8RPTN0rewXKT%2BoBl3QnSoNLXdJhG6yXrUoMJSYhHb2CepAtky9gOAkKZCGtp4v9YqlMu59AEzNiB%2FfvlmI3ezLWJvLFDgq4atZhFGzZnlehiWC2SZFUfVl152FFaobGmg5rHeicgIWSqO7K5YS%2FS%2BXeSMBfS6VZL3bOegshNljnNa0nRQM7ppHJQlHTfiZEwgRtY5r1PZFH22PFQGi%2FFw%2BHEZtUgpuEAuD4F%2F64GotBVtc2LzefiR7aK18RlTpsB%2BICJoaHCUXSDeTxg1PJde2pHES3Z53n3dcwOR2bPwAWe9c0cjDF8hvVRDReOu7ZnaHLZVhL3vnz2ayJeSib3pE5g7FanCHAVWQzFb2E7nUjQzQrT1AcL%2F9vCrJBOgdMHb8PKtXF8KWQEGVOuAQD2UghaAlaZHjZQV%2FOvOPoTC%2F%2Fpp6n5CrXKydVwI5osI5PqBbZh1I%2BwANy889zsnMh2IQLN2NmUPto22njStpmlj8YPYiZ0k8aYyiYbeiKER6Ey7e%2FLrlfrO1MqbcyfnfiAPmHuwuNeFnCBIjPCc%2B0ThtB3oGztun1jpbeBRl7n%2BIcZciqJMOu%2B4sQGOqUBCVLb9ae93Uw1dLGVCrExBzKFXk0j%2FVvAljxJROumOBe6xGgVg8Js96uuhn8vrdYPjOwDHvWD2%2FtRprs%2FCJjYpCInQClwys6pzrPV%2BEqKk%2BfynzWb2NBNDa5nJh7oN7w0HhzzhDyxpP43jEPdLkbOeBhVVmooDfUGI%2BUhszvCp4kPJSC%2BIVf0EccrEj%2FRbWO2iMntvYI1ryCZzdbBWRBOjB0BV6D%2B&X-Amz-Signature=655167305a471c6ab2d42964a7a4fbaadfce56d0fabb2fe9d89ed6ad9c4ea70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZT27IE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq5aSeNQe1%2Bj1wM6hVkNkq2TiilFMbxkjxB8FEt5Az6AiEA3cOdwAFF2Xp4NySpbb7MvFf1aoTPzun0gPOjckDsQ3MqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyUhUU43Pihglu11SrcA1TAl2MbxdOfSRxqnyPUL4vuv0ysuqwFW9FcVnOj8nE6bSrHTnrlKKKC8RPTN0rewXKT%2BoBl3QnSoNLXdJhG6yXrUoMJSYhHb2CepAtky9gOAkKZCGtp4v9YqlMu59AEzNiB%2FfvlmI3ezLWJvLFDgq4atZhFGzZnlehiWC2SZFUfVl152FFaobGmg5rHeicgIWSqO7K5YS%2FS%2BXeSMBfS6VZL3bOegshNljnNa0nRQM7ppHJQlHTfiZEwgRtY5r1PZFH22PFQGi%2FFw%2BHEZtUgpuEAuD4F%2F64GotBVtc2LzefiR7aK18RlTpsB%2BICJoaHCUXSDeTxg1PJde2pHES3Z53n3dcwOR2bPwAWe9c0cjDF8hvVRDReOu7ZnaHLZVhL3vnz2ayJeSib3pE5g7FanCHAVWQzFb2E7nUjQzQrT1AcL%2F9vCrJBOgdMHb8PKtXF8KWQEGVOuAQD2UghaAlaZHjZQV%2FOvOPoTC%2F%2Fpp6n5CrXKydVwI5osI5PqBbZh1I%2BwANy889zsnMh2IQLN2NmUPto22njStpmlj8YPYiZ0k8aYyiYbeiKER6Ey7e%2FLrlfrO1MqbcyfnfiAPmHuwuNeFnCBIjPCc%2B0ThtB3oGztun1jpbeBRl7n%2BIcZciqJMOu%2B4sQGOqUBCVLb9ae93Uw1dLGVCrExBzKFXk0j%2FVvAljxJROumOBe6xGgVg8Js96uuhn8vrdYPjOwDHvWD2%2FtRprs%2FCJjYpCInQClwys6pzrPV%2BEqKk%2BfynzWb2NBNDa5nJh7oN7w0HhzzhDyxpP43jEPdLkbOeBhVVmooDfUGI%2BUhszvCp4kPJSC%2BIVf0EccrEj%2FRbWO2iMntvYI1ryCZzdbBWRBOjB0BV6D%2B&X-Amz-Signature=bf34d1e187d03b475043db5023d306482ce5911549ef95060539c1c950507a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
