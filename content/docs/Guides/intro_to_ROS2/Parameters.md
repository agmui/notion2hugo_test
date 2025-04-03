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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RKWLPC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIFgWgskADq9cco3nuzotdLG%2BF%2BCFWmUZa8Lc6uak76bXAiATFSeR4TIARr23vL%2Bv4sjSM5urPK%2FR5nk7ykB0%2FEP%2FuyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM49itMNRU3xojb4GQKtwD3yBFXeO%2B1%2FNPzvf0Sudx1TtCK%2BImdbdY4oO5BXpC1b1ob2TFyIK9WtVQ1%2BCLWcjPrJoZS76e%2FNqxrNedI1JyMgD3LeiW2UoVzMNADrkHdAItIGpYGCZ25HWIsy1S8TPW9oEM5V0ct3P0iuoMzk8D04oJJsjoowDMIwasifbd4ORi06OINGEqs5IHDO5W%2FcaxQjwFMNE7HRecbPGy6u5mKhRP1MG2d31RutTrp%2F8hYsNymy4N04oP2fTGTPyC%2F0VXyFxojmzxcbrW4vWLIrcNKAQkioWxEwZ1J%2B%2Fcj847EV2nr384jAwtOFABxv0egeEP6yxZRL0szRKB5FEjzswATRwJhpALoyG8IzR6ONUrJKb9Kg8XrhIgLL47Lm%2BrnrGezVnjw6nMR5zWlEI7AFt4h%2Bng41Y5SoWCbpgbNmuUPVIEuLzaGmNMHyDLeyokCdF8mypkKMXltSNXgt5coEgc7rZD6Am%2BQQXU0K6LAJ9JY0kqPcaoiqej7ICO00QB0VgdW1dmjPHmFmDcaZJhF5IPSO4kgFBQWoQIirW%2FzUVLI%2B6MdR0V6a3c1XJlVUw4mgSmGxOWZoBkdoZbeJlsTPmsJm1a4dEXUWPI%2B%2BLotWqw3Qd9NO6mWAIPzLY2kIgwi663vwY6pgHIqftE3902z9fV8Sj9x3EJnDQGiDJD66vDXdMnPvB%2BOF24NGCvZ5Mq3h7sUGAcxO3x9VGwzAcB3L1VSF4QC5IDiiv7i%2FrTjHKlP45o57XLeL1wQW8AIUss76zojsvPLgXLDVdskB3eB7Zw2cjyXcH4xbydZufoB6Yvfhk7v5PYMMREhHqfFo7OO1IKdP5G36p9H%2BaDhVadt5QOlx0LjXU0X%2FQpk1wa&X-Amz-Signature=174521a698cb08a5f6c5eef3704f8d2b1242d9710538f147c89954a8ebb574a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
