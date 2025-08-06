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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BK7O37L%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDC0f8t7DHJ4XViXL7rBjPJkTLcyHhR83Ccn9%2BxdS59ZAIgcp9GCyEhfumVWpuH9fpMQxtdzjncjWakdqmAVtg6CTQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBE%2BK1SS4usDpeKEryrcA4%2Fb0hU%2BMyAhiD2%2FMZEPRaskCOLkol5AGV%2Bi0yKrARDJOU0XCQUeE4IvRUvxRy1qZrMl38WrW%2F%2B2Da7eDHAjTTpe0%2BqNltXByR8Xrdus8WrkKit078WiX4QyqgFc2iQi1ITW9FVJF0ea8wlrHOA39ppO5wiCNFq0tCHYo85kx%2BQef3HzwGkJ%2BljO0voyhuKQIwvZ8xIe5POpWxlOhsPSSoqMpcb3JsHJA83Ne7vWLlM9lSU6qK7w7LF2ORAgPQKsQDR5URFjaRccSzpwkF%2BH1uD57hPADRdoAYIYm0qggYkNd378P8yyL0aUzMHJClpLAgY7gX0sWCn6V5M%2Bgf3Pf6j%2B0epgmB16MG7bL%2BAfURLHKy9rvpI0E4%2FCMIXpGn%2FJmxnZAyHYJgcSAIWT6kc3xjFH5zLzzjL%2FKAoAG9qrM2LAyNk6OsfTb5L4iAMuYNpYGv7Kex9zidz%2Fw0kHWm4nW65ZrRDomVNchJWAcna0kj6rGxmE55wkeYI45KRIeqVXdmGtaB%2FvEAPx8k5wsxqopSuDitqN3tVNiyRjsZjX39JleOvbuA%2FvnhVaGTMrENWUHQ9DYki5naNWt6sJw%2FyN1KD46Ql3jyny8SxuUQhjXZeL2mFacy5T0FRB0kFqMJPQzMQGOqUBuyTJ5BxVmKLMoDOqKKK3%2FwrCpgmuglsc9V0bFTUwivpxoqLMtHA0EDR3Tiz6DRW7F1e5GvzdR68mn8mz%2FJcDz0QEWFfERYUy7F6XAiOSkCNX4wDYpSEmqoqt4SCUn9aDYWwEGPCdevDZcfufhWnhy2ffvs15TEyDI%2Be6y5RZRyTIKP2kCHhrQAGTbVB%2BpFWzqL1w3q4j6ij0WoZX15Ovy8tqqIIq&X-Amz-Signature=91fa9633758a8664cd01fbb044b0e34e32f4b795ca4855b529217bce18b5e251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
