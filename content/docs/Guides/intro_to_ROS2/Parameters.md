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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JDUW2WB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCwNjW%2BYFug84rt8A6RU4gMHe9K%2BAv4emAfrFcHw8v3mAIhAM1OvY4CbnsMqoM0yIkdHLR12e%2FCfEfTjKwCBD4lfh3SKv8DCFcQABoMNjM3NDIzMTgzODA1Igz89UoAw70velwW6m4q3AP5%2BRH3IBQiWHczzXBKrv%2BNIPJfObbQSvCcTOMIYs%2B6BFbNOXd1F%2BqYuFi6B3dom%2BbPGwSg7bzzWjAymPXm6azeGCqa3IxQNOqBnl3IGgemFJC%2B%2BXqu6hFgCo1jMN75BkiRamuaxbEvzqbcuJA1cz8pZVmLE4HDBwbNqayy8prx3Vc2MlAtVW4lztiHL9s2l3Dx2zNNq3pTdCm606bLlaNUEqVzUMtkj7nKjaE7LdYe7ExcKXtNB2AJlOuA1Z%2FGNe84eBpP2C2d1KDmHCvxKr5W6cbzipEILeivg6bvcaLtk9L4grcsvtPvqcXkk8OUT7h5Esxij1HM%2Bt2LlAJhhYPFc4zJnv7VGLgAyP5zgTaryTUwyexB%2Fq6IN5Kpc1ZxTvZ1kg644bdimVHziDG5PZRhB0cQ5a0f8%2BoSKTJSGaN8zFP5rveERVU3OshpCYyr7tMASyj8VBU9hoS7nviK1qs885B3P7V89u0rujq7%2BLbQC1TrvGT%2Fhcbi9VpJ0KchhvzI1FjwVrLpZ5%2BeFOLabMfJJ%2BeelVDJnYwSHWMYBA1OYyHKRC8PfSMSmhJcGkZr38sBMZ8%2FROJ3QI3V0NjwqoCeMY0yRWg4Ik6HpqkL68l3AhUjsn0aoq8Hkc3vrDC9rajDBjqkASRtspvpmh1ITgM1m%2FInJrHQzgg4ZfHFqBCIHlFGJa1DlKCiu9%2Fvbwq6BDUT52sKwdcCoIEBG25SJapyd4IdrQwJEcvWQPFU9zooIcyd04Eufed6VrUP5RVsv%2BWBtBM3RLf%2F54bDy49xZX5xxjOQeUoWMGIO%2FABZhDF%2FzqDHE%2B7hxVW9O%2FwzFkVneBW2MfRwiewNgtbmagMPw%2FMzjf5yPaMvH2Ma&X-Amz-Signature=dcf50a48b1071674af2816afb03f6310f0dd221b4b78122f35e79a85809fb88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
