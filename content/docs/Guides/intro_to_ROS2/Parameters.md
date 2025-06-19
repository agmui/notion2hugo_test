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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7YRZGDJ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBOR9somQ5gq8oubsg3GgFc%2BV82Y0vzoOXqSRPJHCJ0QIgbdGSKqs753Ss4M%2B%2B%2FibCr8A3y6KBBMPrB%2BzRoZ6vtqwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZN8CGfIucNxq%2BAuCrcA2%2B%2BBNNQbUv3GG1rIM4cgYq%2FZCy3dgc6PRn1Dcjn9X5yCgEUNGi6SBtEay9fXnxF5oI3XpbnMHIxNiL1IywwcUK4xpEsIFzP%2BAJ644Rc7D0NegIgWxfMFAhbjpeEQW8P5eeTIlHeP1nAEyuK89vSzlm9F%2B0tt6cuyFdaWW%2ByygnjKeDR%2B0FTf%2FQfPHIDMBTazj%2BYcYrD6usXAImX62XJRoradm5ypAC7N99M0emTLPiAQWm1Xmuy94fZdO3MEmBVJhF%2FxOdV0pLWpBsQk%2BFPrI%2FBfM4Ti3ujVEmr9XDHnFusqN1kTIWhrc4bAszcjaY9h3kQamTJ08x0f2A6DqQ0Dai9Zxw0OWvQ%2FTrAOLjeOeNOLYBtED%2BRhQiN6tbltIo5YC7fI71caeqXr8pWP8i4btCQTD7sewya0xU62ew3cZ7jQzcI1OXuJv1b1n5D5GqPkDt33xtwLH8F6VWtQ2t8Wyjp69HjDEh43y588MLUk9ZkQtvE9LDpRcC0PvWmeIuC9XcoddFGsDjSb96dSHr5inNiprQdEbIkK%2F11vTUQzIZ2x4sO7cuTjgEgSgQRHCsAxhmD1wrh1NqURaLKoL7oCvjwBcwS2QGl%2BiLfJeKr2ykvjNYMoUBVP%2B3RQZWIMIqEzsIGOqUBDJSzkW%2BYGnaBcURiD4fChu0GCVqBo%2BA%2BQuMHiIpWQ9QtPfhR9YKxSwIHedZJyw1FtJiqwnvpau8aCTUGJ6DHjvTiry39pisd%2FyR%2BTZ0pxGR6EcHAQXstkJW14XV%2B43aVyVSAveAildxe1%2Bby1kxBMsjUHcHqjAicSzEPuUSmFnziKWeSFEl4ninMhnxqkYz2eYhrMd%2BVuQX7U8BQsJ%2B2Zk2LL9Tl&X-Amz-Signature=6fe25b11e2f9d73c0adf18254b8ca5a51f1cc3203f3d8b270da0bf95f4c5aa1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
