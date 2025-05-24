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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U44UINR%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDjn4kXgoFQiJkLoWeKCA9Ghf57%2BRoiN3U3%2Flsg6dBjsQIgPdj7Vf7kbBaocgmj0EMmaQ9wpz%2F0AnroTmUW65O2PuAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6x7gdBI%2Fmdyn0Z3yrcAwEb1rtNziWTdHxmAVwI%2BEkNLc0xE8kZ0xWf9q1CQ%2FkhgBFO3kh1AC2IQpTX9QGyvFunMobQgoU5OwxjNhVTOFCKlefVc2zuH8malRh4NwocfKIR5aWMooCzpL8oh%2FGNsnk0AQBfogoI28FdsR9m6sInqtKTJu%2BVm0%2F%2B4zsdaG%2B%2B5Dp%2BFk4h18WuCQzBadbvSd1e9J9atbul6Cy18E6oBTbetijJ6PCYHnDVwaSCUg7E%2B8kelGMbVSJvIv8Qe8SDr0Tx125TLBk5rH%2BUuEg3Mm1Lq5s9NvOk3SX7fCO%2FkZtzP9%2BL%2BkmSwhWKxey7Nw884a254dRB%2FBGtOhdcg9CE160RxJP0c2%2Fm%2BddMhY8%2Fx6mDE5WLIJ5nBWPs7UuM5okZ%2FcAfKHE8TIUqzAPUGUq0hSaRRZ9EjnfoC3f23v6KfHyHsdHSc6fAFDN%2FWVBAsZW%2BlR3WY%2Btba3P%2BiFo7%2BMkYE3IGBIXeYaUzKu%2BVXrTk%2Fx5rHZIJ48jTT%2FA9Id%2BYTcdzIDoBsmdrtKBlDy5Aox9GuYTfl3npuQq%2BaeGthRfNsOBhCQenbO%2BPXJNIiZhMz8jW%2B6yQNh9BzBkFd%2FxRP3xc5HvcSGIg9SL53hD6H3HY08beaGcZIL9BwvaI3jv0MMX4xMEGOqUBZCSJU9OXDfu%2B4lbF4oZzhOHwaHlT1%2F84mBmzLd4J8BFV6XnEDzhDg30ftOjmkNrDw7vA4KNZZX1ktzc3ICX6TDpyQuAbE8n1I%2BSqT4FRPzDYmdxDOOa5shWGzzGEM1o28id7%2BA7Dzm6SC4r3LUldIwc3%2FLPk1WJomBFOL%2Bd7yZpMDWBsSwQGC0t8EaLHm%2B3LQA8KlrFcCbUsJFjY%2FxEtlLt8bA1a&X-Amz-Signature=9bfababf4adb9aa9fd34c8385e015b25c4b0c462ebca1a3e52d0d93b4b05db6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
