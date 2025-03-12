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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUB5XYI3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDe5DHjWZr%2B3ww%2BF9D6aDZZYs5K28lMooLzlA3HinZb1wIhAK2r5nD%2FZ27oWmcXilND2ZrT2%2BlsG4w9rhl2rF%2BugcMgKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5Z%2B4o5wywy9vtNcQq3APlcHdXrN2DBPECyHsOTjXhlHkhZNFg7qgWuRgzmD%2Bj3MntGJgVIQQAjrumjIy6Ul6bJ1galcfEJHwRA%2BHBOBTQuqWDWrOUtkX51H4q5aKNR7W20f0idB4YjLEn08HKAG%2B7EsXaN0jSloY5i9VLUHlavl7fHoTwSR7BwdOg2XpQ7ul5cyrsoDp0bgl1ORKWOED6m3Nc2YbkYA8rxImwNZh45K8mkvtFqr592xwlWHdKgeoinY2tXcL1Qwx7i4ho5fYRjUeSwbUyxRlLEwTswCk5xlrY%2BuhfJmknhRG4NOkMEfzR2xKY9mdmZ0KYzqQ7mBdZEWq46ONKEpXwsEtWo7POPcNYE8cgTw6cWptAg53zvJIs%2FV8%2BxBtJoIayEBzvXCV8uWvNofKeVqrx3OFqzxOZtiuLRs0PGmF%2BdgI4sPrqcNDDz6uJ6%2BHOrI%2BOhG57bTF82lq26ycchr8k%2FDfkYGy1zPtDFVQNKMBrBf7YN0dBYBEJC8olnS9O1hGvM4sF3ZEvEQqrCQ2oDazLb%2FBsy0Mm7Dn3nY1FDri5Bnd2EKYvxkOr3DRhoQpoZA5h565whbd1Vv0XlfTgPv0XFKO8mBTNiOAq6GFki0my7BW7NIB4BfLk%2BcY6OdnZbYDFTTCxm8S%2BBjqkARXpeSHx7ru%2FAX7cWuCFKKxv4YprfEi2mP4QZ5f7e%2BnRlDvauyfYCKKx2m68ECoCXQNwkV69urewfthnfeFC%2BpA5zkhADWuFQK7S66A01RTs%2F5TjrpkXAvNp9PjSB2KDXrv7%2FTmgVvB1Vu9hPfZfVWEQrTXGOB1zY3V%2By5uyvQUa8u7Alobntlqqr7lCSezaanJ0G3P4w1lqDItkHaSYRE7sjHic&X-Amz-Signature=ffd884c27612c02ad55089a16b25ec0883a6c13a4d7da2b2849109b62eb50979&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
