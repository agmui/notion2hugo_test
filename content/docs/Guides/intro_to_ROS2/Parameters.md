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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62EO3ZX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDVItidiD2AQhcy8%2FN4PD%2FAoUgdeydBLQvIMi1d9ktbFAiBDqoxHaAWh3req8paG0pF3G0NCyPZ65oQ1P%2BKk1P11iyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMT%2BicPv2NxLHpoILHKtwD%2BOGRaHedCR%2BFfRXci01ApKdgV5BlhxI7JQtKo05KA8N%2Bz%2BJ96SlSKYzMrGTtVrd7edvNG370oxiMFlaIjK%2BheJD0R7SWQyFK9YVcACDhwYUYkVKFvC3eaA2SFhOnXuv5DGDJXmqO4RVUololteoej6c6L2N6IQv0d3jWPPkvzKGQklmS0oHmOS1twOuYxvuuVgc1isJkYVz2%2Fr5fle%2BvrcAe0XCzuq62nMAkuN2Y5w%2B12yOh3isAhb29SrC6ofB5o79ecLVFaYkh0S%2F1KZDU25y3u%2BzJDsAm19FbEsz2JhDzcLVX138tQ9i7Gror0LrnVW0jwsK5LLirMMNW4JTIjmlYwSm9nfVLJ%2Biix3cdTjqVsdcJwhWAmZy29Nd0PDAE1jmdZMXKSvEcSxAHzK8hN%2BwYEJ5Oe0Eqgc%2FHv4VXgOIXxh%2FMb1Wm%2FRrpDZrRJmQb8zfoaMPuXECc%2BhG7BafkOdBFfO2G1yZvTxuerKFFNAWLHNzYE3g4F2cJoh0pjmvuYzUkkOdpzOGcI%2FF6iSNl3WoIshJ72aWyBBE2Hvy6D1alUo%2BLZyFvXcLush6yCplsUudaeMYBg8Jouz0LBq9Sxn9FGgLbmXFCwKnKVAS0V5I2xj421XDX3oL7HcQwu%2Bu0vgY6pgH5o%2BP%2B04UWwdelIn8nauZ8TPYJ%2BaUWvWE4ECBBvUnZsaZ03wMtAvmewEKZTm%2Fj%2FYJUzJM4iX4TEI2dTF6g5VmLjxKTTyjSM7wk2sZctzskEkuvlcWoSeS%2B1FVxgW8H0VkPLPbedrdfC%2Fp0BoJmT60004nlC3U7f7FQivemNqkteiS5mLTyNe1NPB8ynJiZytWhDNAqW1hnY6ODiberep3fnqlSaKSd&X-Amz-Signature=72ef58ade54dba74768fa421c1efb2da380865e4effb744983b0a2a9a18d0e15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
