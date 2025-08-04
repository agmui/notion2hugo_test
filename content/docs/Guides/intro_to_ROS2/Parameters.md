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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T43SQDI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T181423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD28nYehe4ljJdMDVJTFBZkOClF1kLeIXO3LLphq470uQIhANpQmHo1iiTiirY0ZAVhKjZdkwUqMEpSJT6ztua2aywiKv8DCEoQABoMNjM3NDIzMTgzODA1IgyI2ta4fKuV6YjAqYAq3AO2M6DKKtPJ40LYAwNSr5XtYDtxNeIWnrNBN3SXL9BU1kzC60A8ozhRfOSl2qLAWm0i7N0bke08m34qpQuPdmOVCr4NMCDlsZsNocDG8sYDVzzaSnrGXgIYcISktyQr1GEpBncGYpBrF%2BWiRq6QKVB4ji737%2BxQoHIRYUuIlqNPiAvfs2eUT6jkqxaADhJrcfJaIlZQ48R0edEzDKs5rFnoohEQ0zoavq%2BZU%2BpaFK0PZ3v6C0rvW6h10gfrrd7c2cIjAwoEoosmLpa0Vj3HWPZcpu7vp%2FoTd%2BCynGmHWxv5rkqcXgH6w2v53H77V2t4A47OAsVM%2Fn9Tz8XIxcaC%2BINIfuS5Lh%2FaxbDjxzF3oA9M4DCJ3BBLqppZNhT0RSfi3J9vFI9mafzJdPfQ7xwXU44jJIul7H3VntjZ6TSE8iUxuyEK54N786grNywTxT9epIpUJ3CVvHbna5rNhZYc455TicopmhcgIcI%2FLq0ZPSPYdCuqry%2Br%2BHQ7TzTrgsX0pH%2FHY9DQ13UC4MH2sPT2%2FZoVN79K88pvOyUkNm1ZcaIjmCF5FkE6Gz%2BtT6af2yVJbcjP3R4MdFbmbj7jj8YgFRdgAEot%2BteX4v4z2uoYqc1h7Pi7m%2Fx8XFpNv7cu6zCHz8PEBjqkAQSGMR%2BDbDbgZiv8AjSlZQMQbJtZro7geuSxESbj3tkdUItBFrquvUmFtIKdYkjUwaAIZo6ZIKrV%2FQOsWt%2Bs%2Fx8CIwQNIs6AU0edVxfjnsxndK9aSxhDgTK4mAB%2Bx4kTFRFDB2GeBXLemVZL2JmVN%2BV4qigdaT%2B2IgU5Q29LhLCoHG2%2BJiqPW9o0KDd7eD7z51J0Utz%2FTdxhXi7nffo9mMI4C0d2&X-Amz-Signature=9a8b7b7a36566dbfd0adc1b3afd0a203354c75c3da14ab53b518eeae0d0367f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
