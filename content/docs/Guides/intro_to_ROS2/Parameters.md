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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNR26R2I%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8nYEuH277AE7oUI59bQb0b3xDNFwjgewxAzl7FiYyYAIhAIoQ8gJ2bTwdne%2Fet3eAx%2FqNdABW8bmHOgvPJbUlueC%2BKv8DCHYQABoMNjM3NDIzMTgzODA1IgyfRs4BUJw13yuhPpIq3APE2FjPS8VntwMy4z7o8HvnurebDmDpxzopYFp0VSwuLZfO8PSYKhzWhURI2t0guVpoB3bbcu6MO7pNzmOfM%2FHtTgMO2eBwXLByNex3JVM20ZYCuk8RFY%2B49RGPi9MFnZFvzp9%2BRnbbXQNLfdzm7vEcMHeaTvVtsjlQTkq6y%2BAz18caiuX4A00Ug%2FLFg52cTrhhjOD4Z%2FbgNWGLcy5vwOxUxXtsGwH%2FyTGbKvbtTQHWkP%2B3qT8cGnfdfIo5AsEEvztg9D6WH6EYKEVkk9TP%2BAHM%2FVY4fkCb3i5Lm04WvKIGxM3YOgwSsM5Wgw9Fy%2FzWuc15IpdaGMs8dQUQYcoULsq0BolDc%2FpKW2RvxY6xlbeStoOLvZS25II1pAXbHGFP%2F4rJGwdbphjQKiQ%2FRt7tas61h3zazOdoP9iQsDg3%2B8lMzlzk2CBOxb%2Fpr3W72WSDWGqx2kfq6%2BCTAcW%2B7SdU6DJ8oUshPsGTLZiXcueDe%2BPEJ2gmfugPSH0zZwCl3UBT2DxyGcNBVEZlWm09Gb79uo7MPVHJ4HmVbxtP305OnYDx9DJmHF7m9Y4O3Zg5gQfTYngwyOeM1lG7gqP%2F3qWZpM3noR1LkKfP1loD2vYncM0RUS%2Fldq3nc6TLTWXbnTD8yfLABjqkAeDxRde%2BV8crwGhJNbAi6K0JvlCp92zagKY7gKWvq2EYVz8YF1544dHewE4XuuScbJWpnHA77LpIKQDlXLnvjXiVsg2Cx5dNG5RZ%2FmHxD%2FLQ%2BMzl2VDJHY0lcMFOGhTS0L%2FzVvlwGNPE8C%2B3rf6QUJHKwiJSmJrdJ55jyu%2FyTsZF7MHxS2Wt50QjgVJBr4VgobxaSbsZBMoBJV%2FsQ3fKYr9ykNAx&X-Amz-Signature=4d7a80c34b5314b2f04407fbaf4c82a560e3d9c73d7be3d3a54f746450e25d59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
