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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BIOCWME%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXf4P08e%2Bq0u%2BRjsdmzNIf154XkdGGHv%2FCcZs9h4rEfAiEAhMLuWFjTzZcFoJK4IFNZJ%2BELtmtQGDtG6hjnLaH5uB4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGA7sRHpI9eOkeulkyrcA6pev6um29g%2Fsgt4AChLnaPLrznd4phzLGs56LWQmsXeVVhlTYjaQc3A%2BjbC6aS1sgg%2B7oSNm3%2FTHpO%2FXwu%2BQVdadq76MZydVcJIDym4thxA%2B97R4DJjmDoRbBJm2a9PhPUSg9mCFccaEjMb0ofXCoD4mpi%2B7NSqUzpvIjKBGgacad%2Bfm4y%2BNxMiReI5eXEIt67sEuGfRd%2FZUG%2BXkzB2foG7cSeXB%2FOnAfHIXq92D2JsVzL1ClKw4nSKwlUoNfTB2XQc1omzSLepn9geQwftKaQvmxfwQEcrLB88lypCopV0H7eDPqQ%2FiMJRYfSt2tymTHwtDIZPCz90us97lGtOeERSdutIrRIWbQjCZIEoYWx3qB%2FZZ%2F5SjtJOwLuqZWNV3ubBwAbmSwdoJVd5x%2F9gR8Jvtqw1UunNMYYMf%2F8v8gVqJN97R7KVQTrk9thsqGPNu14jGakpmc%2BLmaZtzgIv38g8Gmr4J6kb0u1L8OY5tq1q%2FrpqiUhfccjLLqkETlJ5%2FuAhbd9q4KLOWh8dJQadSk2Sdla03knWYWb9FhcLyv0M2eGJBmCWCbCUHCsY6RzOpgQMj6q%2FwWmyan5BvX0Tjyl0xmdbllS8%2FtzXfqz9MYzsrJC3basks1npTipkMLv9hb8GOqUBjV5Cn1HFuehSC2xzg81IqVunaQ5fnrkYPh%2F50plijm3tNsua%2Fycz%2FevQQiv2KNhjR%2FU2EW4S1NRJrTZg0rg3pYQj04jSnA2J1MZ788V2iAlea%2BccnhMFH2fTgzB9KAkFwk2oLg95ptFCXs9pMLHSJO%2BYZDR78zx7su7qiGkbVp4tqsUF5Lpb63HF1ODLYIy8HmqEYjSBk4jsrAf8mzJEWgdI%2BBUF&X-Amz-Signature=ebb53088749344edad8adb2093e0890f8532e795b2f96126c28de7a1e9f2b6d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
