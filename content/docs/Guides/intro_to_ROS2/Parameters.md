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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65OHNNA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLR7jcMa8g%2B9NDuOZovzt%2F5S%2BAxqsCrbjYrXbbYwkoTAIhAP0RTncQJR01ZNUEbtN9tSlLyQnu9ARXn4UpddCUgwGSKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSlWVSL9hHEOmTZcQq3APl%2F3Rlh986o846FdaHyhAEogS%2BqZLOd0Zzd1j4Vo%2Fs9mwYBJvtVcC0VbXM4ZNyds0GUiZiJyEkqqvSxE8aqLX04E%2FdLe%2BgywZy9Vrkv2ks0P7sxHlRmM3000s1HodEsofma9saEc91Fl8sUHQ%2FNs2pZsdgRYxW12KwMNAn4RbPpOCqFCE%2FgwbdOkK92iYWieX7%2BKq2NdZ80nQaO3e8lxvxuLoarUN5iXUHsu3xmUifAnlFCNiqW822dgKHr2ECHUEVucYPgaDzjvyFd96KhBwSXng4aCJ9mMfDSwuwTl41d4oPW7USSmZncsI%2BxVjLwC%2FdZN5iubNtQGFMVAqHxBjxBPpMrXQ6nEiAxTc4vS22UVm2DY9MVjqzrpiz%2Ffja0UeDf0r8ZN5Adl%2BOto4s%2Fu%2Fc8Eyzz5JXgzNjYn7auysJOjYvqEIMY11L6tmTUfvdlzjkWjb%2FMMvNq1%2Bss2jqAvWM7kjZKhknOJtYOMXXIAtqhqHsrZ0AHqF2BVACndIDCki9RXu4vH82cbHATy4PsgyXtbmwYehtNxZnZrFYNapJL6ZUD1pm1DFUB%2FiMeH3BIH3hVc%2FJuMr3iU5kZGHppjZq67TCMJoj3ifEHIGX5Ythov9ZotRW8lKw0ZHLPjDC%2B8vCBjqkAVL7%2BMKsGxtuDMxFZjp8Wefasuq3iZuLzkrgrqIiSMPoLSHwdNHHujLx32kD3z0LqYq9LSemzeJr%2Bjgu7GxE5VznBrTPqH9lO1jCaCgvP5%2BgUOJpDOhj7aAzU7CCxKeveEmIK3wUQJ5neZB68NQ1nNN4qslKPj4QWZtQLYol6DcX5bylM5Em%2BXUg835nuBEOl9CLOYxj6Qu1onfBb5Biqw4KY795&X-Amz-Signature=a6cf047509e355a2ae96570efca7043373d5d714e8e8b54a9d7ac03c9db9c050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
