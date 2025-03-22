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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBNDPJRW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB%2BtxJRDyMlbFjMgPEZ%2Bk0PeKxII7td8oqSxHnGgCmswAiEA4F5YAaa6i38rOyn6jctpNykSKGM27Daj8Iv1oJ8iWDUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpeIQeShq1YoRcPFCrcAzhAkqiCjCtuXUheFsChtDZ%2BdDAKlCEwrLDIUphT%2F63ngBh8BiQN7QJ57ILn9Yr10G9nuJd2M2v4B%2Bw1Z9xZBQysU5Y0lxzREErrp9soJ6JwFG00zvOrsZhWRt3kug3DOrdImkNB6LoLGlz6tc%2BmMtqUbBrBGy5yEidUyiQPFUxjiuGn4pOQd%2FR9ZvFoXX0d%2BmhXMKUvn0UeQgD5lnG1OE6THBqGweIbXThWMsKLlG%2FaahJw2RP268zZQ79KfMyVCs6u6d7MOuBSyZuS%2BMTxzh%2FXBdf%2FjgdyuF8jR1pihWM05%2FNU7oeQqS5VunVV%2FXWZWooIvLSlowsRwM8GKTRvhfW%2Fqr%2BfHt2JClBGar1lBpd61F4X%2FJW05qz26BOznsfLxvs2Ji0BaK3TSaP9gnd5AHckLw7lb7FQFFD9Hi4zYS1hkhGQd7j%2F4n7VGHwX5QqB4hTN4r45ehGPOf6IyYIsPhjhe4SmHEnxDcgVTZvHgksB5cLnKMqZN50luXXy0pDYnEdyb0GD3vVNNnXypIAkAWrSppjuC3NJ84TMZwjG80l%2BKSxnNfZhO4luZ8IfRRDSHkTL7kEpDyNIqx3mANKDxkYmJzLaX8UOrrVhKH%2BgDjAznGebAzY1KIn%2BnSEkMLPr%2Bb4GOqUBJuFs%2Bbks8JuR4j6y8KLFgqp3K5cvPVBZsSe8vaFfAkU3ILKyPPqzf86wmRCpTdJ40gwK9txRydhQTl5nxFIbUgfonVu3eylWtKSGNQw3fxV9Jv0nBH3pOUafemVTUbuuMoIzWsrT62%2FfBPvYMOCm0%2F3WYrfqWzIVesLJ9Seyxj%2FIaJ91cK7mVmGAxNUmVotwkEKOiV7QHMul4%2Bp6rRZeDU7%2FgS46&X-Amz-Signature=5d123c55c908300852e3ef15b2d498da27fb11395c410bb200a25fed8f255c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
