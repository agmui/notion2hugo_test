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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YOZEZHU%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIED8ITnqd6soxO8%2BomKRsjrVcsBnfEXMwoGb8boeqQABAiEAjvtUYRVF6DVLtY27nuLHZhS0R4RtCsvBnaKulC8qVxsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ%2FnE%2B5X1S20RkxBCrcAzO8QwdC71Z%2BNx4n7pRN5er9RxkChX1TpimO8bF7FQBeVR7EdYb3%2FH16SDIxUqX7LTmS9ni20x2JOinYlzhZXYQj0lwrTfdH53rjL%2FE%2BFkLLM3yVqpPeCCqfD8ptws6oIleUCyJEHANrsKfLmh%2FCWe8aYJizjSee8GOoXayYNIQpAb5qh3PKLPO3K3CMISObZxF5PRqOwTHq79nwJuJUJ1k5TdiB1zweyxZx3UwP7sMBQQyxyLK1pmVWzZTM9K491XMZSCe28ROuIalJn%2BGGjih6HQv7l7hmaBUirA2srLOMR0V4srm0iBL90RtHJUc0P%2FQemfbELzKRgFnq5%2FoLOd%2Bg6iknFR5J%2BCQ8OxRxix2FiHwL7BRDLCoIEwoZVUai1XEUJwPyXaCK%2BRkHx9Weu5albIXASL5ceeMs9L7gkGyRyngE6j2s70LEj0arjTk22G83AZboNQHF4vAW07NcN%2FBKkkXl%2FTvE9Y5nRohHRViH9j7iZ3IwVvm7NZtftjQ1fK0HviAYbVFswPLTqNrUJ06iRcbrZmccNCZXLveoorTpfPjRadX0Xmw9U2mGpuSUffrWC8R5n1JLNj430ufnkNoT6iXgF6wT9x%2FCvpJi9yMPscBmox5ka1SejPpxMOetp70GOqUBz%2FrfcZmtvFj8vSkX1Wp7JYwRLVFpYpnnVXr5N2gBvZ8jlWjRTM9OZrXftd1tB3mYQjZNU3pOBoMGlgmQ89wShROEz3K0bOM1%2FzZ%2FrDgbM0tQdw%2Bg9hGY%2BGKQBe9VNmiQq%2BnFaVuXPQtkgH5EnzKGCeZJUhrwDCSGmGmHjH7tIXMRjNgQDmnm%2FdR9SEj%2BNba41VzNU46uTfJPpTWapWIcvHSzBb4l&X-Amz-Signature=0ac7d1fda6685739593b66353fd0a482674f7a84dcf4a775854d13d7f8eb8974&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
