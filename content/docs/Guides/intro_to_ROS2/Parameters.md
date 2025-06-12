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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7P3LUU%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCRukP3N3ncjb9qDr1zVimihWn4hPUiuPodKmNfJ2EqtQIhAOrENsP9ephSP4gdtHNjQy8NgroYxWplwLcN28ovrcKyKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3cduFtGgcwvtiadIq3ANJe63u%2FPOpneGeAQyIqd%2FZPe5kgteCZkU6EEsaOnw2vP%2FzF4QL4vNt0mvRM50r8FcqTrhS60wSAWjHmKrNkLlLue0jgh5uScqp%2FuSJpPAELq%2F0tum4EmtiehrtPzzcE0jp54vs7fA%2F0dpUo5z9fNRKwQllGxAuY0m%2F6raaywA%2FG5JhKSy6m81tNgH7fkHikF8w5CCKBs3J6cqFyez2b%2FF%2Bd4EVzZ47CcMTLOuZfFhcfWqozluETK6ygltyCbVUqa1ST9Q7LyhivlE2JxUqgSBoxhqFL9PzbbqWrDIWBt9y4PFlAscr%2FCk0CVw9Hsmr6t%2BlSjW%2Fv5t3Imyvsbw5qxoXdimeoP%2FN9haK7tEC9KNfqCbN1aOGRGjiXqq7RSZIftPAuFSIpz%2BMFssgmMeNTEHwwdoX2htnsn1%2Bw%2BDUgMzbY6kXZGHX862ib3JcQdjMT4a6ROnEGs45mnbD7c2bqBDVJm7LGfpfzmFAgyUXjgcVEV%2BEBXPIIOxrsNhNRbrebPhZIYpW%2Bzor3HAn0xhKzy09JoLFNjkru7lu8oLOc0QFbQ7wRJ5Ppkys4%2FS4kNoXZHbrYHWtzNrUT%2BRxxNOTbc6u96fUvTe7ReEjqgMZJqH%2FIjCYWFCBy9HGykRmlzDElavCBjqkAZvJRaeR75gh3kAUV%2BFLGXQ87fn3bubNCtJWK5%2BTVYB%2BMc7JdlmjcNUF74ajVYgjhN5mzsI%2FFWkwXq3K2Xy6%2BbRaNVxID8C1zWLfpJwztRiEkWyN8XrohB2XdpSvq1SR%2FxfCAzcrz9DQPLm1SR23CNZChLQIs6JxXbIFBIZdqLmx8JgpNEegpmfZVKzWoTgfdnNsOA5dk6TrRjEOxLnw79mfVf6B&X-Amz-Signature=31de6c42cc2e36397c30f2544604f5b0e784b34d9280c734c558c67c9ea52806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
