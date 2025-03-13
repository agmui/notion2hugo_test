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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZUYKZ3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzEHIPoX6Gt%2BvqnqcsMwnYRfLwaAp179kDq0hgdXZb1AiEA98386bYHW1P9CPMTsXIzJN7eWbp%2F2bUcmoe1NrXpr5kqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnqBuetfBKRnjss5SrcA3DezSIFlHIX8c6DFk7Pc9AT7fRscqlFAdZH%2FlZLu2y%2BOkEA2jp6XtF%2FPnssY1DAoUC4kteb3%2BVYtXT9GAJKgnBRHph2oEeHU%2FLiEQhTF6QlMI4A6yTfBJGTxwERDNY5IWd5FU6jG5BDiMfZlzK7Q3nB4W8J5DrSPQLPVF3Wr4y2xGRnNsiCrGEa8ueonSK2jgqqMa4SCrPjEPyYuSgGrHg405F%2FzvDz0VJYZQl5N%2FEu2%2FxBj3fCU8VLqNtH79IBSU41fHo7kdSMz2FmkHCihz2HMY3LaXDydYLZl9f%2F7oNTbqiMz8rvJCPnowrazibnFHIk4x0Z8LWgBktvTvoLly%2BFkf1BqRc8UCWCEQHnav0fhyFWOpP1cngJPhUJFcbAQgYYwrD8SVIz0yJXm%2FNEED4cKhepAHP%2FUg2RE0OtaCND82Y4ui9uxnRJ6lDdov%2BwBUwWXNgpSE0glZ4QMAzPhZ58k%2FxP2IIE%2FHMG1QzhYP63EH8vZfvdhc1zalfpmDwDKYciJlbK9hs66DnN2BrZ8KIPp3SmXH4satxcvi0uLYHFgc%2FWl2h6kECJgpA%2FK46pbNxfeTWmCJu3r06tqCFpYEsUDdrAmh4mUJGuOJobLTfv5GCCKCISQv4FOP9QMISyzb4GOqUBi3TJ6gK71h07EUIIV3ZL0Y1%2FGh%2Fu%2FF0WRCh2%2F%2F9%2BA48tuoMTR58WlDYjOnFptZL1aYQer81Xis4eSII8g4Mq7vEtAkUGao0pr78on1rI02qTXX50MvulCAa1io%2FGNdb0AO76%2BZiv0FOyhJJhJcecswfl34CxvRbpHXzzXJG3ty4%2BzOUTlePoTJIEDhBNMcN2lzSHXtSIUP6rOOqxwbf1ujql5i0S&X-Amz-Signature=1f406ddac557b89a0d26cbe995f2e11a294e41eb7846eebf4e7068bbb7cb7885&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
