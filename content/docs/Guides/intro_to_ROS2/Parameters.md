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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWANJVUT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T131900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDok%2BS2HT9tUleMAOEjZCn%2BM66nVwq6NnnTaj84SNnkdAIgEY4VbzcipbE0J73r6CWFgJwMAInlNzeyduxhrzhSZdAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzjN%2Fd%2BZiaPlOWWsyrcA2sPBHk6f46Khi1%2FPUxsJX02eZtWh8Pb5eLxrFk6nbqFscDOp1JXhDUFLFOiscBDQFCA1IEa%2Fedj5fIqnpME2QORgHI4LgINqoHhYv41C5qHAPwpF7hJVxw9ApVyJfokF6GJpXVe2BPIy743OQeaHrbR879rfHvmCA9FoSZEZHyHLzvHJimHLlOmHEpjvG2cFufDnXyMmu%2BJm2vfqozpyKhXaJ%2FIv6I21DueO9nSqsJ6fC4cC0vOp%2BCoy%2FZsaCeJbE5rgER%2B%2B11SwgXTCVEWHbNsrquoRlZebKhOQT6aVrtxVOWKMrILVxrml%2FXCjcAEDVKMz3hnBpoDiQoPDhp330Sug51eZMIs0TLrkMR7AvGkyopfHBqFUQTcyw%2B73%2BKSFGEI%2F64al4cu6wMIkI3UcNsONJbpMRlJXEn9MQIqDQxpwO3VefrVFYZ9Cy2aZgt6Q0vVIIRPDLQpmGJJgG8CeUZkRuMNtHLEemO14OL%2FJF4myY3x3eRXKS97Nw1JkCAJQCQPqNrxS4bi7L6KjTFkRUz%2FXwS%2FDdIfS25ENNZ0mCFW%2Fr07DT7w1ZUsEz%2FacT56ahXPCXI2l5kM5UPVQ732JoNgdG6U7Lk5FV8slyamxxoho3cZWwKK%2BLEp2WOYMIP538IGOqUBch7O00hKjgeeYMMQWjF42pSSEdT5EU34xGkyF8PBmYpFVfcuj1HZJ5WQP8Md4oZWG%2BnP6Pn7vqziFNMiJUJk%2Fhki%2FScBl4Yufxr9P5kKSurgAcEKta8nJoXI%2BZlLyJm7Yh8AYEQ3XIDCUJuW%2BcBoOT1JTGQ3YpUivLeW4SCUBziuD1HeQK6rmApR4E24IfB6OguHvPOUNssaNxgu3Pt3gqooHCRW&X-Amz-Signature=1fff70a2fa38cc6e1fc10de53caf11e3ff091b759849a98bec6a2c4dc93cb543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
