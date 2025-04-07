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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4HAE6Z6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlRBRLW6HGRL7ltqkFvW8eGSUBgm%2F6WnpVm7j45cvzUgIhAKFDt%2BTjZsAdssbgBOGl2A7ml4EiVRQl0FfvKwbxiGHjKv8DCFwQABoMNjM3NDIzMTgzODA1Igx4m1jFX%2B4lG1kbYjwq3AOZF3hashhJsDFDZYZRpQxwavW3%2BbHgm0WcvI51lTGLtdfcHdzzUXFB55FAH1YypcAQHTJcVY4zpJCUhupXYAgAaqMkGVMTzlJXHwlchKHvGCveVv%2FqfKSgxxieFyaoCNBaDDHpbcXIgmu9O0afyo5%2Bs0GFauyxWgQHoxpCuwvMfhv2QtUeum8PkgHUveGAJ1ZpNS3fTLwH01Fk1d6voVV5nHueOQRWYZvoUfo8dlxvVSaUsL%2Fo244ncfHQqIBYZEJfJ0DxgK9xrpo%2BGRm8bhcyZUy8vIPfFybCddVjtH7AQfC32zaoJk7Pn3ilIxYXzKaHdLpeysS08g4BhGXwVLqKHIzSRI7znyPQ9mcEKRf5un0foDjgqzohaWIWzNlJ4FNf3JevUV2f6n2muAJIFG4fZB6w%2FXCLNUtenu6joPnry0sMPwyaasMWQAX8tIanJdWs22iIeUkZ%2FFzVro2C4xn%2B9qU2%2BgzvREPRllq6dbfESYaakL3bRWRgqO2%2BrKxvJ1dcnR6gwzkHUnfaUJI9q9D8V%2FTy3shSqv72ShywDBcnxGLLT4vRo3uB%2B0mCGjKdnsK48jmiBaRDIqKlwY0eTByCnImuAxPogsQ1AXyS%2F0tHHhQjYZYM4HVZiVzYHzD01M6%2FBjqkAaiDGD1GV4SKF0RA5HgPyIsYj5YvWe3cd7rt6SUx4IgmoMqTFfTLGa3KQMcvERIM8%2BQsi5pbj53ElwslNpFl%2Fg2KI%2BhQCWQ58vvVitduBkzshETWWHwCzt4cqAZp5YfAeZNQixL1oCHn1JjQVzCu%2BqT1bydrWncWXFOFl72mensVoDqAVrAWosXPUydZpM5Eg1qUQrp47XvquN0aEftLXumnUL1m&X-Amz-Signature=d143447415a2f9aa5b9dcf92b2b9d948984ee798dabacd0456af81fdd5559051&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
