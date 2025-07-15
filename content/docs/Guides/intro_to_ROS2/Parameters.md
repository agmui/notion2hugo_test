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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBGZKYQW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T170854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDYy5nyqzQaCTGdn0MNjzWfZLtGLRE8EHE%2Fq3CHvRvJUgIgEuuopkhJEMFeAAQ2%2FE2bJDZKJfXAHU3JVXweI47wRQcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDITEI8pvClSJVMUR4ircA%2BeR8X9DaB%2Bwx3nWE53SbmBr4UFgb9so0dxa5njaEKwLVm7rue5cBhEjHHme6THCSzizJIzbm9%2BKbeaariY7bXEzD7J0Uj0tcNEP87Kxtk4gjmP2AKMeNgeq7GeoSsAb2TQz%2FNhpM0Rm0UAnHQ8L1z20nzhYRXtc9pWAa3%2BVqlNSfFm8N2f6Y51kwJ8qW48lioXr%2B6ezlAMMxBMjxTgb7fFEvH6sNslwtIZu%2F1ekXKlQlRSl%2BkG2fV4zoFhaTgUyUlWES8WBjxtoO4D8dI%2BbjwlFPPwx3cDsGJIE3UT0IwVBkaG0kI7q%2BlQ7JdyLwBJjCNw9KUIu95cMAIbUInPMn4fI9Tt0e%2Fs6HgT%2FnIwfAi%2FFZPdsAo8RI1Yw1dROnJVVacSlN6nYifjP%2FZWem7G%2FHIrlOhrdAevVEXBeL8JDFR4ITx3%2Fyr%2B3Gm0rxIqGHGCzEPYERZ%2FYQuPmgh9d5azTV5pLTjofUu7YzFkuXnrapPCpHHDxSgk8ZdgTX9rEtXkByTD47Y0BMGG1aVJeZUB6khCK4yidBDtEqPcedxrxUgu0YFmJj26G%2BWiHJzL1KFbn290ShALzMfY0FSk2rqrP7CM3rD%2BqsiSp%2ByeYewfDcpAUABpO102%2BtLkcMkGaMMOG2sMGOqUBIJ0qkidkFClWajECQ8YJLvh4mSyDgzWOc3AEZNzeCXNJ044RgDAKF52MCScHJoFvIebBTGj8csJ1fVguG9jYb0Flj6YRnxMuXCC%2BbbGusc%2Fodld0bOUYcjDTktjCQQ0ZuHUmGVm4h%2FtEcmDlw%2BCzmXYV3tGrymsFtLuruWt%2BW03Ax54dupYQfq7oxAy5Q0oLKPHXgnORN22BWeAtPB7Ejyulmdkw&X-Amz-Signature=8fa495227d848bfefd6a14c62a915702b8df339d6543038de35fe1552d324785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
