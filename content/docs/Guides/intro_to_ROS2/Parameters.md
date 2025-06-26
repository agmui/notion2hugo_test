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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VONCOB5K%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD2i52BW8p9B2I5ZiP0no7cfL8E0JSVFTeUa5eRKhWWBwIhAOOvMeSNUHGD6qWwei6XvLUQoFogEcy5hha8sF6zeNWkKv8DCGIQABoMNjM3NDIzMTgzODA1IgwHtPXJPqFx%2BVCjWhYq3AMA972Rybex94gfo1eUFtuOrmJRjIcz%2FoYwaigW4n2pA0HMPIGTMnRjNwf5%2B5kHmQlr0NV4ZB6h0a%2BMnAj8PVdkN82vQuVSMsJUD1dYLoynkVOwixGSc9dme5u7ABSicUFwwh0lHK%2Byoi6bDsFFZ2RcYRAYJpGvkdmIJKa3E%2BhfL1iuVBsKnw8FgvKC3NjTAum5RKuS7pR7NreY8%2FFW1tmBoz9N6g3ihHHPWv1XGzXQqS1txTPDfFowc72Rll%2B5IQSUqY3BcAkVXs3tO7cVdj2w8FizirXtVTcwosgOInphYqzfCQGcXLlkgCJDo6%2Bb5OJ9tZH6kLT4WAQyHtlmGh4Dx06fS851rTBcWZml%2FKWelZdFiMuz30sDU58chJRRloQm9OkYrNSVq3oYlAx6pZ%2FwJ5UE4dxGuqnUCpGS2h%2Fd7FmF%2F5BnQv5lZ8idEE%2FP3WOknO3tp%2BEGYNmHxyulLsjkhKK0i5g8kVIeepRGHXpieZBzNJz0JUuhSEtKXoAhZeSyPPQflJKtdTiCwow40HNGJXq%2FsGR77zcDbMnTUJaAVaS8BcTdt5Sy3zivn9CtcXjQ6FC2jLWNW0JkVelV8Al6E56TmLvD7mjwg1jgle5G6eiYpappOz1P6tgn2DCmhPbCBjqkAVp7OTgNQTpqYAZCED7P7adMpkeVEqBlnfn2HM9OR6HoSsrHKtnBBCvJ7E7sKOVfw2s2DlUKPFHQqVt%2FsQ4W6W2q9Qw8UhqYk%2BH%2Bn3Vnwdxnkf6msoz3QKOTq1RfMXQFeT2T%2FwC8qzdnBLaUt9URWOrMTNyOCoHQtbRwb9LRTlCsLIu7MexMtBpPD8xScUh3qha3sN%2B%2F7YBAiAsYwcp8ucO06o%2B2&X-Amz-Signature=9668c6a15355873e97963539d04713e7c0e14619bdec56aadca1c51065d96b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
