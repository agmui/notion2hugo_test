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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466333NMI22%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEPKgwkSmiSg7eJUlcBuIfZftXGTvL%2F%2FukOaJtPwI4BtAiEAwj3xWln7FBE%2BmGf6vHvi87ckKAYQIENFF%2BaeFl4%2B4Rkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPokPktVmXF4yPcjrircA0wtYII8hqVzJL%2BcXbuIJnBKO%2Bvx3hHANXrCHH9ywShpzQYaj95Pv2Gc7tDl78aGimkftB%2B44PA62u6VMtEeNrbujUXqalt5BvKrMC7hca36kgKtNyfbFA%2BjQ2dDaHhRFdk3HYLjNH9jTeThUl2SPpO6%2BQ04DOrTSMSb2C7gS7bBsPNlP6JNzOKCPSEFYCo8PDId5xSsg9QaS7cy22gMmVPGj1WOeGI%2FuMotcas3Nmo%2Fns9X2elUxt1O%2FgKuhxvMVhuPM%2FSTaokcuyZlJD9984XS7l6cAopgOwbpvb9F830MdPrJbxi0mj93CSIh8%2BvvwznsyhllZ0XMCglJ4PgdNgpI0yL%2BH0M689vPMqIGY4FfUCUJewx6OW41lMpCpljhL%2BcQoqw9XEMXnGzhwCP0tSycNO%2BVg5VVeoe%2BM45p8KH5EPv2h1Tn%2B75xnfCVL8hVRVUFLofC44%2Fg0XOp%2BVvl%2Bl8l%2FrTLVNdwA38A3TDz3Q6LwVy%2BdSnxUwwFUsc0jvTjSFCNq3fuYY%2BVURNgLtFmTqm1eFaQxoFa%2BmRXUf4Cv%2F87zbrjD%2BNnHf7Sw4WCwgqPxVKpagaQdNKEdKGw8CuAau0bSL7La%2BqA4qmGiHFT4aY2yRTZ%2BA2BzzmU8%2FbBMMTo9b0GOqUBHNWHH5m%2F0jb4LtxvrORe7K6aU37AyNPpWMxC7ULC77UNrs%2B1WBjRTwH8ZIiqlhho8%2Bin8g7n4ZbYPo9jIiBq93Ih4%2FmaKFolVXKsiNe8oPnc5S4PbnlVtJqBulG7mU9SteZUQb5134qk2KVmbKkRZsXAPm7HmyPmTG378NCvVec6YqxbcfjpCjmQc5jH9ql6QlZ%2FITCB%2F68BwAHdfHMHHiGLhoxy&X-Amz-Signature=af13d4142e791ac68f0e2a4f153fec7fd76566e36aeb3fa27fe182aa4a5c4488&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
