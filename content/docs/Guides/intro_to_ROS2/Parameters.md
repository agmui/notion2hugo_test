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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3GTGU6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCICLAKi67Ngk54WrdN9plGFRmdnn%2FiJm9ZOUUkM5efMWGAiBe0I7MNafJoytWo4aTM1alZCEL8gnMcGQ1q3gOfdt5Bir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWtnHKSFEhFezIL%2BMKtwDJXE9er3MTT06oA6k%2Fiks4aKsVbOFsTaZgIC5qPqVAvxp6twFQDRuQsJnzhgU%2FDsEGf2T%2FdHiv6fXlZ5PF54tnDU4tWs%2F9K0KKKEPE1Qko8Cg1wHxAoNAdR13oNvNyBpESNtxkZzVL1%2B2O0t0eQbO7rtlPw1CDrGwXC9qqxOoFqc2rUjcw5nBxWm6bV1GzAHMBL%2FognWaDfjkg6ozUBO5lfp1cEgR1iwyYkVLqq8cdhDLr1zY88R%2BdJOycrNAunoAD1KEFed3xyt6kToSAMj6cYOLCydv09AdW7a5XpfmAGK5uvq8bnojMCunKh1zOuqnBYXnyfQnMS1izKodn86aQm%2FkPMjfSmPwNrEJYoE3hPfwsFPoSkaVaOTXYQVr2G7ttiEd%2F6hP3gtzj32kGhkTGxpAv0pqgeB2KpX4MTjY7G8St8ZTyWFfNSHbVIFvGG9TaL2C3qVdFNczPt03t9hN7G4xHY9VQ5PzLi%2FuNZ4pp9l3y0yjoGTjdUzsry%2BXReGKaGezY9NMZPH5VB%2BRGlHkPxIyfUKO%2FwDHWzQlJJCPS2nH3O8d1Eulng1PlQfBZLvPxbxCr9wVMEd9hNBCfV7FGS1ITkkncUnJt7aY3BqHYAaysIOuCScQUlJpjDQw7oTNxAY6pgEmBuZCJyD%2By%2BStChjnET0xWJgMHOm3XkkSyaQhCXAdfp1qRr0YG0px3TfJylFcJ%2FsR3EB4AZIrmyIljzNUHxxNslmnkiX5QaneH9btwtcqi1udNfUmkFyeQ6UuMEwt%2BCtgMSvNhi%2Fwkvx9c4K%2BLYTFYMvhm4w2q9wlUei4HVM5rLd5wZbozgmzWRRRe%2BPBM4bmKL2ssdmqraSdMsEh3gA0H4UMcxlx&X-Amz-Signature=9592255c292f3fcb4cb996af418491f8211a1b45afe31f31b4c0663a6b824dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
