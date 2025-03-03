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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT25QI4L%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUd8sXqFZz28NCVK%2BBojqy%2BcY7VuInWXgB6H2OHxa94AiEA95jVz7f826hQZ8Ku0sCzZPyhzQPH2gX0jSnBqJVtEHwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINNsu6Qv19q4Oew0SrcA1cZp275%2BX%2F0O7Mkj7oEwS%2BmJVjz8BqKlfX%2BFsKbiNwCAch48nhgJshfdKilHsKbpSQ0Sz%2FCpcV%2BsvwIJ21NhgHzLy50R8ShFECxzgJvOpipjeVjBv%2Fl08QCbbXNny%2BCMNUmGkFzkDETmP7Qt1uNywpDZeYlk6TTfpERA5lPVSnBP3tP7h43Gsco6MWGMWZbZHaSt7N64oUfW8Q7BZQI2dUL6drRQiuG9diG%2BMJI7UkJXoR44RaZhxTxypqtK%2FRoDCCa2QMNY%2Bd%2F2OM8WzjyzUsf%2FK8Gq2%2Fy0THHGcD5XtoAzcErqlHzV4m%2B%2BWVx6SazXd6hX2cDKGiddo1Flq2rv6i%2FMmk6PRYEpFLkIpBSN3BJRaQBNFR62JjuAozp4%2Bhha9XvXHQRudLVJRDZWg3FRznB8xcW%2Fpzl3MyEAL0Y33g2ud5Z9wsllYH3MUoJpWBlGiIRzgthVn0UOqU1DQlFvlrLe5tlthX6fbvQQkBDNND3H5na1cYyLKLGjf1XZuvsT6kYLUH39AlPBEUnQ5Yxc8w9Ln1JaHXKhX3kzSFdBa0j7qYBaF82MuSg10pCVDT3F00avKnUsPQ3DtR0%2BvSWT4QxwxrzeJ%2FaNuE3HU7gZMOSRAnV3udMNdCilzhHMIaZmL4GOqUBmdTjuWbI2oeqTI0vPim0b0jgqgkdW4CgL0Uq9q4BTES6laooP12Vj8nN647%2F1nshIrpocVa4KTAG2loNbMps2ixz3x50BRAWDjdml4mQiBciTiwpB7KE6MFSJIoaZUKQuXj5s6xER9U0Y8JyjpBRpGB%2BbsPT3bBH4NH1B%2B3gE4gCd1fZ6QLk1FnlDJUBRc%2Fk%2BHa7x9yUnY4oMogfnxOoDGAwjx35&X-Amz-Signature=559f1dc157f10f3b27a46b0d30b3dcc5fe184d41b26cb1f066cdf5de777b50c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
