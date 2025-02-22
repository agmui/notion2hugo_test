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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAOLKJD7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmES4%2FsjDIld5vmYE%2BNqFIWoK4GexOwt1BKluiVJRnFAiB7BCWp62yei7sPcx9BD3GsDHTrcF3A27H119YKZzUcwyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp3li%2FXkCKrfsXgJaKtwDnEFaV5qgU4phz5Gh9qqtP%2FQlyOP9Fk%2FWQjkkbt%2Bv9u1rDJaDBsGsWD0Osv2o7FfVw6fdWcPAw3qmK%2FIpHR5N3G%2FUhphUICVOidm91SzrzC9URKLtqPYJMVDLbN1A%2BCQo6nKv%2Bhu%2BzGCOGN2V1kSg1vMQG2Z19nNSKUEu7KIwbcCmIfaWbtF%2Fs5A%2Bic%2F6g0NDNM8TKLcXFsoJo6P5e7cnJcp3yONaQPzhdSLs7%2Fmm42NOSQi8nSh9UI%2Bg%2BJlCGaWQwch3L5ydtyPe5A5tk0RlMVEM23CBGH8XXom6Ep9gxYSXZX7cbgBW%2BmK8Nf6dTPO%2FQ9SNWlIg11TPiRI65d7sQey32Ish%2BoxE9exIGS3vvbZqy9VnFyCOcXuED4El5MVe2pipHNWAjAuc%2B%2BrEEZuQQ7MHwKEsJEsP%2FfroxDe0tchHeBdw%2BQWI5hnf%2BKc5xYy0cPQCTkpr3CxNgpSdXRbo9hDbe67hca5Q%2BMrg1uxjbtjM7dfqmlOBpQrFZexMOQmGHuQVqK393RuHEmWN3s5uzmpsL5pWqrQNqKYGh%2BbLtxxseIO1ZWULhVdvEqJDoFcFl%2BnxnHOf1xUScmSO35wqsn%2B%2FahgDPXSaId7b7PCIXI%2FLYWhSgjBV18ut3q8w38%2FkvQY6pgGVSn%2BZXhYchguT1FrhVOc25W46XHBoGEL1Db87OhJCQ6CRhQR4pbLHhPknbWbOiYK%2FdTDi%2Bwax0DjUgKlfYqPMwfOogr5LDkgccCXDcCyfOHMpxQjYUrYeYwkioNO71qqLum9F07AYjsrpJg%2B98pA6mk%2BBIKAzCNt9AsSNA0u1fENEk8NzYF2RXBa5mnzV9HBvF2%2BEljUo0AfQZFIq9Xz59NsrTx6J&X-Amz-Signature=f90c2cb35e43355d3f880c91e09f9d9a4e2abfe1b639c619fa40a1c8cb78bb5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
