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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXNKHGS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAvn96nb9Smt%2FuvhpojKwJA5jXiha03Ygw6idIuzL%2FBWAiB3CxPqWV64ycOzmOhbDlVbzTY8XCPuROvM7EWEt7KiTir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM%2F0eXnWoRDZTNfrq6KtwDjmube8lL%2FrZewmNa%2FcxC8QEfdM9NEAja9HAhiraiJE6rGee2vRNBIzwq04w%2BHO4Phq0TZJnInaZPr0%2B7wFf7YGf1K2qPNVd%2FP%2B5DNwn5cU3vhyRpB33lSr6t9diTzdi2sHxT1EREhRwOPD1z9kP%2BpAmCT%2FcCaHA9qGbV3UCxULqHthZbj%2BTsQkadD%2BDFdySdIQVn8dkaMSfKHGDTjB4IfshCeE%2FgkO9cxSl%2FcrLEd5z30X7Iqmfk6BJSfkov0aEAEOTaI74yHua3ditAA%2B0QzIQMMoqg%2BF6HdoRgGmlyWVuDocrdsredzQI4Pe%2F5mysOhNREEiq3zBIVt%2BgjIhBp%2Bce22CbV4PyW%2BYTL8oucHXe8Ui1mA8sxOhgblHV2%2FYp8erYXRnJkOHVHvSg%2BGifwfa4sZMdokS%2BQOXjsd7wdX7p54Sqeyve1P1GZpVNtoVjcah5gLRuGrtdHZJdfLX3YGHhuTJACe09i7gOBH%2BgtqRACrjAHBkJCpw0ONMjORrDOs7vTrcCCdDkuYuMlMrG%2BrMeKhnwYRL6eHU0vcgEHP%2BFAdCryNyd8CcWefQdvYbT%2BUYwt5Je3ODG0cMHcVKNpIdnXpxMQ4vUx1lHaxQ8zECo62TmNNzbc33axIFIw59CPxAY6pgEUj9a%2Fc7SB9M4QquQKdZC7JrXGlwfiYFBuVLmH8%2FKtn8lBwG5x4OBaUscyji%2F1e1maM6HnieacgK%2F2qtdG3eJZX%2BWUPoWhn5BnDAfS82H%2F2RlRwX5DRkLQ2qCO2TCBN024huE0bCoAQRo2N3XB7J2OuJR4YipfN%2FQwAtyrKXORmsgi6dPHRA9cD24OT%2F%2BZMQhUDgp9Y%2BcnSsAl5TXOUncN%2FOCRUrEq&X-Amz-Signature=face06cac6999fd12a0ed6e0287ec0d335968f3ddc3dd24f66345f5334b4c9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
