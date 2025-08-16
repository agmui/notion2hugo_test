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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24OEZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDTs2qXdAJ5%2BeIoOJGNZe11UFC%2FoV8LAdeXYVO4RLIWtAIgNFoB0Wh8sf1rjItEtCJS99kM7ItixSoRfcRY2ae3jcEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDEVnILZ54iL60bEECrcA%2Bfhij26hqAVZZ3L7T01ekQ3EB1PFIrrWLmDQcoflVb6cDsnO5j5A20jYgdsYd2tQqIMLtxyJHzmGZyKV%2BnBhUJ%2F%2BfnkIWYeIs2KDKSUWYW8fBNmZkTexLirdzk7e%2FZZ0scFjxAFNPLT1b6wKvQSguow7LRXPU%2B%2FT3nbIiUZc5NTYN2NI4R0ydaK%2Fe%2FYk2ZlXbsdCT8I1Cfl6Ckh0q6UQ%2FCmHhDlnx%2Firka%2FN80gRoS9URWkIzo38rO3rbJSGTceSkRybnAAuwnY94kcQJTWssJ6XWZZJxn9EBe%2B%2BopJ4hh%2FgXnhyHNCel1kLTibfnrFmmu%2BLu00E2VN3pIWPBxL9YSJ2M8xQvBYJKEn7Q4wxzPN9y02uuOCh8pVKEQUzNbdZOIX5TVBsLkxc7o44Is7GWwoWPFWY3TlzhassjyV7Xvx6Tmvb%2BLodvbsw8gQuIlOJIqjWUXSAtNXcv4TNByZXnv4X6ozYCf7qzalbVmLLBAckgGU6hu80xR0jgZCmKcYsTEx2UPlfaDuC8fX2Y1z2QrUpA14hg6Xprybi%2BOGvs%2BCcZo7aPw2Siif6EpB385TR197tHu7UD8lKG0KbxScQcvMM0Ik8SR7uGpouLik5v2dZlxxwOvpsv8DzXBwMOGcgsUGOqUBfvoYUjsPFjjyCQjAEWhJ%2BaOKhtXd2wG9F3gZOx35OYCX71e4nNuBWlhnugSPS6UMTuyUeV32EuTm8rdY43kENxkqWvsRU7NWRwYPt1Vvz8i38LAEW3PxzLlpRTZYZGvL4NFv3%2F2RfWyzaT1ztc0fvulp71WoVvZ8f%2BjoPsDmKOSsc9k0JAbcuwS7gRJFs38J4FbRAwvEjy1WBlom5qaJl%2BR3IG77&X-Amz-Signature=341e53db88fec255a00a1eb381d22f95951fa6b09c36a7df06fda380923e8b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
