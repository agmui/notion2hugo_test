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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3Q33ZC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T220901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDaatBo0zM9C3qxoNPnmFtyrF70FUa0v0cWr%2F1T39MqDAiAj7y0ZHeeox057qfkIUCiVTru%2FwjltoRnQGGpfhNpOQCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1u%2FgS1eBh8mYDabKtwDTUxPWeNBQbS8cFKnDPSTH%2BUxKtWYXgErpGiGk5WkKoDF%2FetnslH6cR4dbD0dkpY12wXwnAIneGFbLy2MAwCuB1nNeLougJd6jVyZ1e8%2BJfiyhIt0kalbG29h3mS6dcq%2FkeV%2FNsqzCRr0Vu7brF49ICdsT2zTB6zIOayFztH%2FzQA29FS4WifxMy93YhEuNabyK6jxMKLS2DTAGpygIhLD4bm14tc4cjuxII%2BTFFhNc00X54IuF5cPzZdIcya0AHt0obaExsUxudxjSxOcJD%2FgqizSF2VPdtT24j7%2BNmx3JVZctw9s4UKIZMB0ul%2FWTjPOHls0%2FO6czxf%2Fb2OdmePHtdcGjRJq6i9ljQ5F8%2BiCf85YmVF0FSQpEQAPYRLaLEcxIn6YiQdbQOTCTQcUu54W5MwMvS1r1G7Ev3TLutI%2FFDx1ZVcnft8yDX2MlIzA5GUGcEtrvyoVGg2%2FFlMmfsFTcBlVM89JQbN9w22ddEWwYCt8gUI8MxjKweexmTPK3MPYSl3PUH11iAufDEEUQ%2FJV49sQjQXgRWKSBGja%2FB6997Mkc6T0RqsIRYGJEMei9HSY6tEK9v6B5twiaMWPVWapiKbpZiREE%2BogzjYz8FyEho3AJHv%2F4BV347NaNBIw4IrrwwY6pgHEL769MDQk9kT%2FTj4%2BVHo%2B%2BuZQeQlqFl6VbWi71UiP2gauD%2FaAS7xvqmvryuPfUXbR%2B7OoMx2ZQ97icdgSaXhLq4nuP4fitZebLl9QJ8lS8sK2WSi4Xt8mCXddwdQbF2nBh8Msmnxvrw%2BnQtYa4cd1C%2B6Wwyp4WRFR3YWNDJ2IHERb7Fhn1n7YO1ioyR9s5JjGmJ0uGAwwS9hxmLv2gAhV4TsJS%2FG7&X-Amz-Signature=8aee1bef9dba7ccbcf6c3e343f1353681f175c3b06053eed009f0f65691c53d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
