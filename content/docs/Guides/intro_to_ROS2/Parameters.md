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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSJTGWR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC8SH78N3VwdU7KQnS2qQvsd%2F%2Bzz2wvIch4YDkOLyEaDwIhAKorsR9TYPo4oFV2vMXK%2FBXGkHf6hIrMGsilBXfv1mizKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye0mBYdY9o3RUi1Ukq3APQpa347Xk0wLAErJ8K2h37WUG0M9y84gB6G65ThAZP2yFw32HlW0wsHTPBEq9%2BSvooZ0xbMXlWhglMmrIM7DriURB%2F2WvVsL3kibrSCRSyTA9YCcBtt%2FiO%2Fds3UfXa8thb9bs9fSAfArGQW%2F1wlG2hKz%2FEEkzD%2ByMzQNItFe3N4C%2FPYxCbXD65pjHNtDCtZfgPAXkp2zI2yyuvmpiXP%2FcFYQ4SOUiZzEeISGmUCHO16vSRBPGNAbvScdG6793jw1kMdOyfB3KX1h0rrce6PkDxuEKsZxI1BlfR4E76hxfsRi0aIM32ts5pPcOt1Bwti%2BF9dqxcagUzGhAkXskdzlcCD%2FLD%2BsHFJX3EjOPb5EJi%2ByP1LcxhIx%2BIDv9KMN9OHJmZ%2BnD1hzisM6TRc5gzLW2FqV4WIiXT2mdZFg33AFwkplAn1zqzGKC4G03jG6iphZVqSLslfTfrqShQqwsDgIh9v41LiwsN9ckRfz7Q5u2V%2Ftnxcr7816eC9gr2%2BW4E%2BzeByIssXbmxJ%2F1tlG61XQk%2F8sty%2Bn3IrbZYnBKUI42NG%2Fq8l5mfbc%2FqFBgz3xL3w92%2BeV8MlVSb9KdWspnTg87KNcBCbU8iepyVmCRahVVTarpMvwilC23g3cTVQjD3t7bBBjqkAZCTea8SpHirP5LYKN72Lxs%2F1f5opLX7Sd9SHbtJdDeH%2Bu6sfUkuaPFsp2d060GUUaEepuj2BTEFrfSuoIld5HOfTduQmVhMCCtsBq3dpmqGgEDBFG75ka6EsrYpTp0%2BB5P%2BGRsloxhLW7T5QF0t8k4CbRLW7BjdAYFXIivo0oBtcWZZJJsMkSyrpfb5VsOX2GH9hheS6P3Vt84OP7iHLwXopIh8&X-Amz-Signature=441981eac8eefbacd75cb032b200704191d38992a8e115d5c3bfb51791b50f00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
