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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STH3UCXV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcielYuN8noMLDiytxaKpe4HvEZ9rtGPG1ioBSqDKWLAIhAJsrBbshiSLmk%2Bbd7AWh3%2BNHzGn1jR%2FWshKJtdL19orTKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6m3eQafcVuVxVnT4q3APJvNIKA%2FA%2BnP7hqUKJqBl353fqrzZt741f%2FVADRJQt8hfS5yEV%2BQt%2FU9g4aPyaD2oxcKZu4LjNaxGgh8GX6YCfDISJTq15eOn83fTT6AsH4BXKDEA3MtuSmAeZ93vB1jHv9ma80Otk%2BAUTw%2B3XfSSbe0aV1SA%2BC8hXoX%2FUj8wHilDB%2BUUYecwD6j7wd29r0mhMgD71dKisakiwNtBipp7vDgeGJXPkKW8rINvxeRWlHGQhNH6e9DFh%2BE%2BFNRhHOV%2B2pwbmsEh1uZ3Sj1H8wXTsazqUtxIZKORKLjhw5Du1mCphG4bcgT0SgZo6YdziTxPwgJOfWhBL%2FCngUaBgboO43Lr8BtiSObg4bRDi92Zx8xDe1%2Fn7P4IqaR5DglnNLp0jfEvBtsw1cJUj2lpYUFZ6pIg0Ei3VfVlf2xW4HBJgHhr2ZJMneEUMJlSsuHnRUV8lbytRG%2BsxxQyMo5cLiGGWTrbllUQry%2BuwVDjZ%2BXL9S13HFwRCuF1gJYIxnini1QQ5feNobVeC20ntcJvvpMve%2Bg%2BWCIWbe7QuPTzcQmwkTYKOvZo%2FRWaCVviAXn7iJH1JHcejTOhE%2FulfV7juI2%2B7hAl%2FUvLVxTEYO82xC6qFMdcunDeWI3qUADlrrzDfrPfABjqkATBAaYuEARh%2BIqHdkxN%2BM6DyvQnKVtnvM46g6%2BEJ8sQdBkpXmtKG0RRdyZQufJ6WoOyQ1nQ%2FAjcdVnMqAB8gyI2XnuG058I1KGZzvAMylOtQFIpXqpzPVOPEAs%2FICKvJZPCvE2KuUx8M1lw8WlNWOnkKIrKZrITENOp4r6Uavn5LRMl9K0jTKEDNWTSvUNcmYwdOXghFpqfd9Z2c3ZKZvTDY9Mkj&X-Amz-Signature=dfcae54cdfb65ab2ee14236cb3419b328feacae31402828e0c16e03e414d6a78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
