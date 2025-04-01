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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLPO2CY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC0WbDE3yR7dsL8OXyV4JtsAy%2F3PBYNMUREZiPzNUqwmQIhAOQTUZoP3WRCFeJD41nENWEWekmTgJZcgvDOXc4kfnFHKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFMduxZ0Nhyb5%2Bppsq3ANSmxbLbQ4I1NyJs1TNraxXFd8uZNMiXCr%2B79JfJgYo5mwRAcXhLDrpZX2cVbAiWUcC5M83IGdBJJKiEWGSJLqziKhhyTQMRXVZ6UOt3vDyFRXJenLhu0f03qK5z2GUZnpvk%2FYclMQiggAFodQyJX2VMVJL3vUmbIcGXkOd%2BFFm6Zi13Dx6xL9TOIl7dZCEwQJqCfmBfG0ZjIavNfAeJMv9d6f1OnQflHYxeSHZwwwUI3%2FWzZvXDlAOdBuvhOvM33ygdQZ13%2BxU4JD83UPlXYUU1H15S2MgCuYQRBgpw%2FYN%2FULlJ5DbCxz9k9tgqkF7lWMeXQGibKhq95tAcHmzI4JOFoaUWy7mwwDXcQa6le901z3BhjwOKMAAnIaifsl9rh8fM%2BccATE0z0mPEaE1R3lAuYCTwGhzBuGs5RVOPJCUKGHBhMAyH0%2FSXPdmQsruxIa%2F5Bio9iuIUs3Atsp83tVCNkXrmcdiZAr50OUer1ilAOO6AyG6F8QlKY2YEPqKsSzTlax15lc1PWJqs3fAHBUfzSAziPfreLdZcaW8GuRPX4n3evfSglOAgGMcLCVfSnvZkd%2FQl%2Fao28qpO%2FV%2BO8O6q2EAXz5wIovV0zJX0ABbO4QyoHIqSCvNAxYoKzCmtq%2B%2FBjqkAYuj4EEhX12R5kkorx9%2FxixhLVbII8clWP4BDIEpYJcpI0YlnjXMoHFvJo4ahlolqUsOGmZZ89SAii0ilqj9Lnjsa9xNq7VA1HabqHKOvLpCeOylnzhws%2F4GzYc2NxUPOvAFlefEP%2BJTV7u5qeWi%2B3BbiAQ8S%2BNAs9JiwS%2FoSOINhUyGrUyoYhbrfO6uHPMNkxlK7TAravjykUv%2BVtHUlfjzgNgh&X-Amz-Signature=dcb131b110eb9ed48895f6c7feaccddbf143f022ca4b91bd3ee52e9766266f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
