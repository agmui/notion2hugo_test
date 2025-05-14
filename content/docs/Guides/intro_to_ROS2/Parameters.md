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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZCZCUA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCX8nrSuAhn4rlKLW%2BBpAINjSTSxjcsi%2B1yFZ5t7irvlgIhANGJjATYqsy7L2q%2FMbl7KF%2BPs%2B%2FrQvla7K51lmyTex%2BAKv8DCBkQABoMNjM3NDIzMTgzODA1IgwdSXIXwGfEr%2FXi5jcq3AOQxehEJM9BaFNduAlfHjEROD%2BVSYVQ%2BeUEmDDsJZHICDDtYMLrR1vxX5v%2FKeX28xi7%2BX9SS%2BPBDMYLPOAAwZKhLJM%2BBkK%2FqYTBOB7pldiY0S5hDBoLmgYxXuRP7EmqT0ig%2BZwlmqghVO84qdARVsQSYwJ%2FRZskqNtiZSOsmBcbeQ3Xgvq%2BHjl50qrtrRtiag8cgIG5Nq%2B7wuKWh0Dvq8E7zsSAj7aD79aAvwZW%2BctS3YQqg%2BBHg5QcFt82OH6%2FQqTkghx%2BjuOLcAVbyACSj5jJqKwSgBP72cMWBYuHp%2BAs%2FZ9ohA0LXw%2FrzCCvGHX7lmxStIMM6sjEqCeG37hZuF7F8LfSSjGhXm91n%2FQsRxO9A1ap0XrTCguW4ywJn2z58rKSjF5yzBR5z2ATD0LaOjoIf4bzNhcJbByrA4rEntbdpuErQBDiwiUgszLFSHoEt9f%2Bw4LK7KQARojVuvN5Xen%2FFpNYa8iBst11finKnP4QfqquhvA%2BjQNd602jJZWB0Xv%2B8Q%2B2GDVst5ykpqDWEEELxt2RmrWs%2BsscqM1J2QHad7BhX6UEPVjtjTwbQuNSMvnkSsu3Xnc8UiSWmb2qVnaCWfUndT5KOqmZ%2ByqMsWQ2IKkCHbhFtIbr9hUXaTDx7pLBBjqkAdwosEvomGCyCrJHNRcifU2ybyHB0wza%2B9ZoGqstmH%2BWYZMoyrzIigpOLPyA1j4xy05Bzag3PlDJVNrJ%2FrS0Nulu2T4Bm3lQ6XGSVcju%2BpEXmq44v9TvCFHlDp9BHW%2F7dxdaXKInPRYKkXmXoA4iCzHKJ69G6bTrKwJNpMAOhjR%2Fm%2FhSpinFGDkTq2BVPhzG9WobLhc4OqkrsEyCQx8yp31exi%2FH&X-Amz-Signature=7a40b249fb9e3d88f10dbe633a18b66bc152e8cecefd3ce0e6652bdd6a0ccf9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
