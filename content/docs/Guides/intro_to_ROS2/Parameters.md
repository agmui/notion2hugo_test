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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REG7SCO4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDn7mN6jLO98aarLr8Yd%2BDNDpaDk7cHfgZ8GNPLt2EbeAiBIzfrcZ1mDvCFHSDmR%2BhzJtaH5L1%2FlO7UVSxWHcNhgnSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMOaG3uBLUdfDAdoutKtwDq87UBVTvO21XinBQQFIHU%2FXVWT%2BRWpTN2M7%2FpXbu8frPuiwMZ6XlPzqUko1xmDUMqa7zNVYzJjIqcEsuj4sFeP5oWPxloLnoEKJt4HKFv5EY4ceQyiUpTjM5GeoYrCuCmBd%2BmiOqH6KYfltov%2FttD560OB1GaOPHxCW5MTEgclqZIiSHebfwss%2Fci%2BYIwzKITX3y4KXr7%2ByQKKtQ3%2B7MsfGBFtmLHd7yT1Tbwajavrj%2FfYbS7mWruSz3U74XhaXWST9iN92bRKbVspUq5b44nTOF5xIKdsRDAbWtU5BlMvATDA1WV%2BYqo4oTW42yZzFI5nr%2BpHUxcl2PQPgZAi2iFn06qtdDFZAGxLfQcYHLCPS6dxobN95z6cW3vHJ5yctQyjOwTYT8%2BaY%2F39sozdLJrVTKsAGsnqFkrwtl5MD74yBf6nqMZKjEaQ16aPuuFMMyEB7vWhydP%2Bjf1tqmrW9LP8BUvte%2FGhQGj8%2FHqe4CfDOiZjqEnQqSpfgg6ElsWfKKd5wD2IC4CrzEyR2lW6mjohheJ0ER9YTCW4pBQbya1nWnnaeVXuZ9etGlteyhkLAu9HC4rVls3GQzftGQmubn5sEzl2KePsqHuC%2BSL%2FnYKoEACFbDzLtPqd%2B%2FRm8wyZTLvQY6pgH7%2FwSE%2B7%2BMiSQWug37O9vc1uW7rFqgs7ZSrwrfglf892Enx%2B6p%2BW2q2de4NkSsdBeluZDmJkS2ymJPbMOqWIS9xPehXY%2F8utrSdR66T7qWwQCKMaRpm5FKiAEM3V4jrtE04bhephT0sIBhgXpKih3XfLQ%2FY0xiH776Z5C44bNlpTTYLMOn6V9sDhgO7fFmSyxzuTJBFpLYCBPZaPnSqqWZRnr%2Bfb2R&X-Amz-Signature=a04b6d955cedd2079966adc1aeb7ab524978c1a7f2b287a2f12881be58ee0a77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
