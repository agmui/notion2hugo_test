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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVLWY3QS%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYkdgGXqySHvJBppA8Nh390xzrXW2tLI%2F3Ms1YIg88bAiEA7uQ7NoELkrtaKL4ukBjBL%2BN22yz7woDis9WywgF9lW8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDG9AUop%2F3COvoXzvsircA9Jjmw2TEIQbqzr2L%2Bp1qSYmV%2Fs%2FG16sYJRrGSwdzgAAMLO7UXadK4aaPc2b519PmeQXUXqVGm8z1gCI7rLnllR%2FOP7%2BDNbrGbu8iXrfJK13PvnTjtUNH1UytaMovHdrUe4Z3%2F5Kw%2FU2CRXbTNdYiRMi0Wrt%2FfP8zDcXwKqxRHRlTju2JYqAqGPVchpm27tADHheiFNqhhMXNeWnuYAA7uXdEwJphpVXxkR%2BItjYe6t%2Byfc1A%2FCXeqVCeorUL42c245znaEeBCPHv2TPFBTwodC3c%2BSNk%2BtWJJqi0VFRa3G7HNgzRhv6f8u1JoGTrhLJD1s7j5MtjuCZ%2B%2F2dZbA%2FtbD9feyJds1UMUXDJrbPK1Kv4NZB%2Bjd3ctxgrM1CB5LIBfeqvh%2BNQ1uz7gOz8H147AdphBG1%2FrQAi3G5IoSe%2Fz21xVIE9PMLzTwjCipvJtevOM48Pv7t7yIhtawssrsVPAnXHsxJSuxkPVD69pBKaDFO5cCMYU59S2NHao01y1C1bgi8LzYtaJpwVkhi0ap8tZPHdAIW9XHvMp9R8ll7csOdjzF5XdQf7Hp7RtzEcSQMFvJqYBt7ytDnE13u6z8tgjmYyXxIZ1aiYkdotV929NLwNATyXmwRFA7AFUTOMMWJk78GOqUBV2sN7DxCZis%2F17Grbk3gQvaU97QeA%2BPSHM7BJ327aVnH5r8Recu2zf8QmGC5BBKRcws%2Bu18Ldmaaf0NW%2F6JG3Nk3XncM5zLUaF3Xg3NLhCeI%2FIPi1MeKw8P6UN%2BXCS1OIR7AKSsGLtNfU8OfDvSNxm1fOWwQmNTU4iFgx9CWQLJPKGez3sE7tGyPSt%2BChantTV%2BzNDkVlxHfWUKj7koyF5CbJkgm&X-Amz-Signature=237c8ac4be86dc01652545a214f59a1a594044c84bbe33bcb9b54c655a198689&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
