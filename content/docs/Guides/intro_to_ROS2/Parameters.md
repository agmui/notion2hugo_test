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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3JLFLX6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDr39O4AR5gYlBQwDKQJBGhIxJ3QIHSf0qG60IZLhGJOAIhAK%2Fj0kyoITNIuMd1tzjs2%2BnYopgPK3gVegNSRYWMng15Kv8DCEIQABoMNjM3NDIzMTgzODA1IgzFy3mdUOX4nfFt2F0q3AMagujRa4M%2BxN4ReTVXgp8OL7pdmp0Rf0d3BNt1anVRMpb2bJ7w%2FSu6E%2FvlgeihI9jbnrRMjAxI3sKtKyMGzZn%2Bhd2wJcPxaLbKdXUKqDMCWiaIwV5%2FCMv9kwFEXQZlAdIsrMOY%2FB26wQkNe1g%2B%2FfrhBinEm82jg2GPeZHIlCgk3jdH9%2Bd2lX5Exa0szNr3D3aDCi%2BBhqMt8C5BRJW86yHYvKzvxweebhhK7SUjTPDx%2B4FIVwSGtbkImn7tB4ARFemuNoWMYz0AaAv2hxOarkzmxWUlMuXR3N9S1873p5MsIUoMBPZs7QgcSTpye%2B0l4sEjuZk6duEAxUtJ1fTdh4shc6ZRsGO1zQTktBoU9jOlq7j0VFw2Wi%2BPIH2HCqk0tl%2F%2FSgnIc88iic%2F5qnaspT%2FPP9KsGFeFuH%2F%2FFd0%2BP3bbgPwrlK%2Btu%2FxaJ5FwEg%2BVPpWp5fIxJ5fWdwsAK9x2ZpJqG8lDUIdnq3%2FjCcCwSfxyHK9ouLOtXvR6hneNrQgrK%2BKpzRn8t4dORI81k2QfrzPKIWUUb9WPkie3Ne2XqgWTyM7C5IjnuGybvdutPh8nNLEMU8LuqNBohAM0768VmutizSgSpFGOsxQ8P55Y3sp1kMFufsnxvTbMrOKIjDCWr4XCBjqkAfhuifM7fxYKqXqFa9wKvDmwxNKV%2BbC%2FVhWTcPdS9JG5lzGQpCwuadJGy1QoooVfCkPNlALZ0sVihxprDqqNVRU9GzoLEpQRHTdcUpofF7wAOfZodCblCY2LZrEZxQpCpCA8gkAqBG2HPHLn9aw3PRogvTJg82PxzR07JVQCN%2BH7pu3JNhJdErngIhsvDHIUYC2UsT7CTPEFLtEHBtacYt8CmaV7&X-Amz-Signature=bdfd7c1cede0bff528502ba2a3c3d1020dd73ead7db46a696cef3e448cfec996&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
