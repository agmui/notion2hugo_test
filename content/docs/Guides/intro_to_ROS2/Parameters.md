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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URNGPM6D%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaX%2BitORhFOi%2Fo8PYksm7TdrIhKpSpJAnkBP7yfPe%2B8AiEAikiyNHqn4ZsaiorjDDUFpM4WkOJFjVUd2QE9gOiB0QcqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhcalViCH5t2tm%2BZCrcAxrygzapFRFNLOqEccPEedSznBD5SO7lRe6W8UBWp6nIELDDi5ipZg7TxhbhReS0pG3uJFEZ1Hs3PBaZn%2B6mIKyH8FYahxeYJc3m1AcH%2FROHrGW7CZGBSfdRAB3ag7OMoSdfORoMuLDd0tBr94SSwlvyNA4hG8grDDVPFK3QhHrqpMVnIma%2F30Hij09dxAL1JrQD1mjcwGIRiJdmzLiyH8A7OOrOdlm%2FQXSFuLpkuuz5I9MoPygRFxreslds1AU4SSGMU6CAGF2ZEqt%2BTGs5F6%2FbJoAR9haziJDXfFKbZPWw9PZjY09evs1S%2FO4AtvCKFOCn%2FtgotpE4AIaHR8KTwGO%2BWi2GaoskpFdEvWpaXUCBJ22nnUSWFBCvuGGNHdQCidjdHkvGSZhEwSAJpQ%2FByvRrrRLe6n0jse3fBROGrxbEOHC6YqpXSX7cDqHfPMYTdEJCUZ1G26oVzxfZmltvlZOG2iSf9iIVM2RBZg80%2FjhBsGhePpCf%2BXV4F%2FRVxA0dmigMV6dh%2B%2FuYeIJSEse2FxRsJmREOH46%2Fpsslj5lvK%2FmE5rb6YduuRTfR1LS6r5eSZRauWy4kk2yGmSGv01%2FyPwkAYNUndBrPHN6muoy8fbpykmXhfdEriF9zIRuMPehqMQGOqUBP0ZRucOANKMOaunFgRPdQLDjBv3p6ho7WJNMw58vw8hMfttLFHW9V0qVx2hgVt3%2BMpzcwXK%2FG9KozZ7PtkS97aF8Tl4qNgBB%2Bfz0oxkockahr9IlMYy%2BERfjVQDyWhkwjv%2FvAMfN3Z7zX9pHitgCWFkJfqTKSEOWj%2BDVEhiOU6k1Io8ikr8vUzoUuy%2B2JkY1SL%2FPbXwWMw3ewEAmyL3TM7CGivOd&X-Amz-Signature=efe36a88cceacbfa16ca53b08ea8b8adfd50f7783ee863813100a63f4d20a211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
