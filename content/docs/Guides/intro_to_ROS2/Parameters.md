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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBLX6CEA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHCkwNLeLbYa66%2FIEIidWuO1WhcnL9FF%2BWC97Qf2U9KNAiEAi6%2FXFvtnX%2BW29eH4MRNQGdOx65ldceGqbFKDWh6isKgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFNHrT1k%2B8ALs%2FqoBircA%2B%2FLMW1jm3esL%2Fmton0wuPZip15izn3aJnNYkZgNcRka61B39g20riQe72e7ftxSFlpRcR9%2FWlzCoWan1l3RLJN9tOrU6lH03gS%2BlGg3BoI%2F%2Boizx%2F46cEAsp4EMFtzWskOVXUuW1o23AsuWccsBrWpk%2FAzZkh%2B9xEj7oVZ3YvLNFXZndK9n2izf1DAwT%2F0Hk3PUCA9Jln7wJZDSoO5GCJzeIn%2FnS1PeHmORlfJE2TUhKsI%2Fu4%2ByZFPHegAjPVv9%2FNs7qvxgxU0HQUnBgJqHYpEOtH5UbqgA4uHWwulH54UWn7sg4qPlWMkAM0I9Q8vCn6EDun2G3QCJra64OSXwc09LCvowRGyw0alg7IeQfSqRU67UuJQdmNHOeSIluMRzXSPoQaGbNsMRPXotrcBI%2FkZQRFYTOmn8JtQIV3J4o6taN05jN3lQZVkzUMrUudeLlB9dASHY%2FEdmL608h2%2BpTOVReI%2Fvk5tKL1l%2FnWRbB73ACY3Qv8NuvNKO08pFFrPzq%2BvlzEcklFHnwy5i6DVqmtbmVVIKMzoV97GeTlu3T0iKhmpqT6NqBca%2BHXrt%2FIB21wcIHdbdjMNUYB%2B4ASHfrcwIGZMAp2KzemWbDSZiF30uis2uOZOw3tpWbr0iMO66tsIGOqUBcqqcv%2Fglri0vGfrdmylUQTcTPiqIRwId3BvLKL3UA7fqYrPDG2FmpFeUp6UvICsmFKuiAdhuy1qwTNBceJt%2FB5%2BzLVnrnySb0GOI3Z%2FOQU9kWfWKVlQ6zxtXIIILDCIVcWtoIPyq8zi5U%2BLx6V1g415EB3stkqfTS%2BPdjIpSeXjXHJdYjANF5QRfe2BfY%2FFYgW9uxYMNtW7eN9rFcJBycKmBGpdF&X-Amz-Signature=415982fc7ccb4203d1805e8b44c126c766eb32c3a962978eff33fb2678586d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
