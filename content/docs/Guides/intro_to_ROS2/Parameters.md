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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNUV6S7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdG6iPxJDk4vC%2BFEFaYtqf%2BDbYaVeERVnQx%2Ba8fbohkAiEAx%2FfMTj2pPzNdjqMJaIBilZtfzEc%2FTLlSc6zZolkQ9awqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlOG9VhpyWwGMTASCrcAw8t0zB5bVZYasx3ogrQo7bFVlSP52VPG%2FuBtD%2BXSrsRxSBvZpzIXN8yeqiolBsd9E%2BBk1c4cpODJGEDVv%2BbUNj%2FXG2DkW%2FHnXuc3Kyqv%2B9f9Veei4R4ppdfdLTvKQzJAq3odgpM%2B1T4eHPpbYPDoukeNimLTxAq5yB5ge7HeQVc4Se1jgdaZq3U9B5v0jb2IwQdFKNVoi1uDS1xZuyvmJumuMQAcctnVKbXJMtQxPlZcbvjbhLS6OV502oEosXSc%2FKWf0dapep%2FO4riJMjGoMap1bOUtA4PdhXtmX219pBJgTFkNka9l3d3G0hHpGkj7ujWojczfPHRgtGsjS9YKKho59XQhb5J7Y6qHqSOD2kytMqF4TCsp8ns7clLAcxlcJ%2F0v%2F5WPmWTQNbPbDRv3D3798biZ%2F8at46JaFfa%2FLnRqqKEkVkyF%2B3ikPPkSO1aEfBfrY0UboBGdGVqzz%2BRterH26792PMYexup1aBkEBkhObbffdVUFTksFaNSF78FTWk1ZFPANxZA%2BWmV%2BuPfW6TihpMTGMJGxcUmiAbAZhAhuCbZJL6Dqn8enZkn8g0eUUP2p6Z%2Bhy6smkwRWfyMHQytjL0anbs80ZcAdFXEs8o1YBYww4v3Ua6DnaRjMLzir8EGOqUBe5wbmYR0RubMhb06AFgRi1VmCnPhyMj0USOOhEEzjrtG%2F2JVr1dyg6RfIrCZeCFL6gEgeDrSHFRqFDyvPnuaSeNL4xgWptLHVXsMUMddwItjz4Kp3RM%2F6MsiG128VcCnMRMbQWqUpxH%2BTH0T3AwMCpDAxheYM%2BjFDRGkohnBuDE6MnfvfWOpqLrWy2M86qZjOKGKNUFpd9x00Fz4F7o3TdboRZHQ&X-Amz-Signature=91a0fc92d2f7ead1451858dc6d9a0d54b45cd3f97365dee31ac0ba11f5d9eb79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
