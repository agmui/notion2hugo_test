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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMVUFH4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDWARPUqeZlE5APzaHqAffg0gT%2FL7eOTv0Szryo831%2B%2FgIgcixPFViQOvIX97IpHBGzRf9cQvfosySJEDb%2BP00CNDMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2LY3qcicbtF%2FKjWircA5ZSRI1VL9qqcEbeVBjXj0gLCfdUG1ttR0epy6Mgr7e5g%2BY%2Bl6nkLhAY%2BkS5IYSDk85LBC4PvFVclojiMZfE45dC1JM0T4Q96AbNoxRVBc8%2FDeeXrewqYgvREG5o3pZAy%2BQCzYnxpGZdQAzaNdYRrb6bXk5z%2B%2F%2FoDfoWV2YVMDBJuwLbzvecxaKZmphU%2Bbs%2FAAYESIrh89a5MtAJryqfyfIu4RGcxKTWmDP6d2FkRUfyyP1v8Wg9kWKzUu97vOsfRETPv%2Fdi8EDshzpzHuJMWJv%2B5LD%2BQJC3PY48rRMjEoHslfJRID1FMgObtNM6s1lM51y7EpqZcgt7uKLzZP0crghv4F0%2B5UO1nWNJO0uvePozYfG%2BJmnAIXQtjH9d45lAaFzJ92EeJFI71tzy1ZgLqXo4qZ1E1oLHB1MkWLuqv6HneirpD5%2F3DMLXdARttEWwRQw2%2FeYtYJ%2BM7m%2FXxQ1BayEp3ilmyFgyWl2SZanTHiAtnkpf26rFl1omUwJ%2FDP9dpDBP2Fr0%2Byh2IElosX%2FJK11eeO6%2FX38NDg2GwGcINTtbo%2FX3sbCGtAKfWYf0qaNfdj6eON7kD3wHnwRJN%2BjHO2zTSnwOFfLvkx4urTkWPGjWBs5WLtu1j12rCaywMNC%2FxsAGOqUBigM%2F5L9YYCl1ZDSA%2FuuIYkhXMkp%2FWSpp4CphXMfEOndFq3GDfqe%2B1z1ZgUwVBEMLcC%2FkCWVZDvzM8UjIVqzkAAZ1ljH%2Fh3IGNXw4y9kneAp0eryOTq9D5j0n%2B4St9kONJJQID6bbhFejGNLB6JVf61NXc6qtwzSz4TnP3Yxbp%2FILBo6hxlvYGFQGHESfbMESr%2BZOWw3VO1tnq5vHarXp4kCKCv8m&X-Amz-Signature=7a10a8e4e44b076c1860e8e9d98e59ec890b3954b662d30388aab7c1f7eaf590&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
