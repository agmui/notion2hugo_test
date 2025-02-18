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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676X5ETRO%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDK1D4h0NRVjCSrfnOCknMQTd4wQrmF4gPfVQZRFOcLjwIgBvnAujgUnys53XzxvYMp2APttSpX5akTJX4QRJKZPIcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu5grA2esrMSdXcMyrcAwSz%2FaMZjKeVFtN2CICWlxR5CLSIj8KWEsba6CfaUSrqIbkiXcVGdZOQ5a17o8m0DF5eKPLxWZLiV2kG93KHaoY9RIuGMCLvOkrYSqu4ObLLSOZ8b5ZvJQJTk36jlm3AeRyTTDpo9DTkS%2BAIz9tQlK1FmfsT1TTBkXEXdG4jx7SBdSKTryStZW8rQDZopmweY6QWsGKnwJCkeMrVQBpxfgHQ66N3TpBRkZcj2lfH4o%2B0ZyjaaDph%2FBRGoJpxZ8F%2FXpzC%2Bpw8RPgC04l%2FYt3PqDkxe4d%2FLjywNmi2K0Wa9SOmNsECdAytUQu9F%2B6FHJRWJUKgL8z9veWfnU5PYiNoZhxmSFyuVHBrt7jFvqMGa4tipv0st9CeisBPJiRTDLmTHaP4%2BeAzZHqBekDD1yZyMd7Bdc86egOXKOKc13aln8nn12g8UMW5GAwtRbKYAUPXj9URvgpUnOqK7M%2F5Ca0fndJAat7OtXGopN6BomW5HYi0%2BJ%2BWE5NLykwA%2F3dAPJIAgC1GEcpUQ7SnD8hRX56ebRscjA7C1leNBvS6EbqU0ulf%2BnvVjqE%2F6OLfo%2FVQBm53XWPeVBt0fCJXu2yctsrOiINB7HCZbYZmZdXbrS1SAZT0%2BfUSWEsuRoDkb6kMMN6y0r0GOqUBZwfM9UYrGzGqH3N1wBetNrD6rCCgoTrxTh9PIMle46Z%2FQ2VbvIKGWYW3sgZZPJwlqNlptbDyGRIvqL%2FXgKTFo94RnAJcN7ZODqpL%2BmxvItZr7EJdxuRNinjs0iB4DLTi0YlQwmImijWC9WAC79HGBWEw8BiwaDCwfyHH9L0sYpaB6YPEki%2BW0LhVpitkdXaT9Nk5oQHeAsb%2BseTr7T2%2BmgXUAmSc&X-Amz-Signature=3bbee9bc2f1af3bd878eb3deb118a353ae470588e1be18331de64567d9ecd0e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
