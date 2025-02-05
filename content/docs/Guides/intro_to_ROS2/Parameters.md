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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LTG62PX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD7Hk9F7qxGOqDZgIcxbqsgwZUt3nSaGG5pP%2BdpO2BETQIgd1x4smugYg0uPJOP7rHLreRKJSS%2BmojihdJJpQSjKMYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOjA62bnuq9gXa%2B%2F5SrcA%2FTlG61PEshlxdLI60P1kAa8xo8HUQqyQhXWnDUHGIcxMq6LbNAjEr5OTiPN%2BRIAUSNV6Fs2uDnwNTHHdheXPT%2FhZPEvNejNU%2FJIhuh%2BlMMyml5iwkCPwovp8wORGpdvG9fkYqKYyBmuP1PwZOvGjscybsqqokzjI3tYGa9qR8nSsZfmTaw%2B58%2BJXNrcCp8xJdTQCyGguUpfcYIObdwBuiCIGpKzb5JLYorgqtBm6CgpTAmigXukmjH2oPrDe7h02U09rqGOx3flFGs6FAxMuObUTbfJ9a7hNYkJ4lFZJuUPbYk1qyoOfmS%2FYS3uoi69VZ7bOWH%2BW%2Fn%2FrO149bNMadw3UhCGPd8yCvKZCr76O7A6qQDtBEAAW1GZlOKzjUREsJ8bGBDulLxr%2Bhltt2JF9knWaWrCwl8QKiQ5COwOmvaekMce58lB6hTrKNYo%2B2KQunqbk%2BzG7UTHCyoR8czf59Q05fQzpu6fN%2FRdvR24V2Y%2BfXltK7pPXsAzj4K0emjC8o10ay55N3sbQz4Ay2PUI89w%2B4DQ4C35PfpeZuNw8QePQavWG7Jgxcrrh5zbDgOJ%2BXjoAKq7k4rHSQFjYiMojVTQqADaBZorYC0J2PF9LfQbNF%2Bdyycl0KeJSHTqMLK8jr0GOqUBY1zAUT4%2Bsi3AaN8nZb1Um3TqaSHHOYRRf3I%2BNHl%2BBZQcJppLU2a%2Bs4buQfCl9PBeFdahCXOV%2FGhjxdNUicpKa0zf1hglZAFRW2mX7yMQBkDoMGnI%2B786hn8xu53SlpEUxHq5agaEOUSDqzMkYKF%2BqU6UVeu9tZciu6RdSJ6EjNHw9OZvhRluWEierAX%2FsD3Av9uXnpY3f%2FmQCtORYyuFW6vwTFlX&X-Amz-Signature=249a9b4c5447560b3c0b76390d5e0efb93083009348b6820517e146bb64ca250&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
