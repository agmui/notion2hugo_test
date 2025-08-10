---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3RR4B3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHwqrURfcKDXhTTeKmqg8Voe66V2YYBNpsd2aMOSj4jAiEA5OyVsuEHx0DieVkEvVp6BqWiBDScqZ%2Fq1eOjk9%2BqstwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaDo8Sru%2FHOsNYZUircA94aVzbyqB9Z1CYYt3xIHNBniqrnzyWGgOX2hG4UyvWH3Zh3W%2Bhh4QHNMd2u1Mpx%2ByPxOw3jnuYEh36ZP1cP90PmSOAZN4phgdTEsg8oZ8lf0Ahn%2Blqtd0T%2BKhBy%2FYNoLBWqg4VOczIvBO7q45cMajh%2Fe%2BpPAoCxHGc7qQc7lQ9x9owyAXCNAJEcyxy65j73BkcHN5VqXffRsiYtJamgxNleqlAlUGrHEDbDA1Y2eKW4vJJu6GpTV4aS5768C4ISOMz3w7%2BFZmxgtr6jDzKNwuzcRhyIlKi26ZW1EZ52S4tL4T5KfXnWhHc0ckjUWNHnxCqMjzXX8tF%2BN5sfkuhGoKROqMnB0qeEXRs%2B%2BGQbKkOR%2Bpp4WlJBukimhLtSgQfPaNeShK5RWJWK8hqwQpGcbIhxraA9LiJdb%2B1LlnPpanhengaOO8hdrfZH01D71BzTUletBQ24VhAFYUOqcEI6vtE%2FlmQI8ri3ymO%2BJaFhwr2kq74dSYo7qx8WAf8sEsFYzeQCJC03PDkuMQYwKFT3ImwVq4jComp7EMGreWDFBKMt%2FIzqs49fnOggG%2Br1M7IbTACfUe9iPQrpo773wqVTT0BYb6LDdqYG5NCirLxP1Ydgt2uEyC4TsbZaNZPwMLC%2F4sQGOqUBEvkQffJzXz%2FjhLnmPOfeSqGOswsh2eWCkYL2H5%2FznIHNSnINs2GnbJqgm%2B7vKTgdEy%2Bd%2BLsyEl4fFcaTahQ2ZBDl1VtIxjoZ3XrUaPjzWkvUawS0dx4n0OmpI%2FVfvZDBmAQ52wmcjBuW1ciCMBuXwjEhXiTAw3cv1WLo4qCtgAG5G14wb1jk2RhxCb3kjRPNY48csrSKO4CBK5uzF0cBRiM342Vc&X-Amz-Signature=94964ce13703c80593ba80cec083e234b5a1e14be410ddd3e154eec39c566565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
