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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7Q5FTJL%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3pJMuQf%2BOzrYPQmdHfhBRMAg1%2FIUizxeZ4LhUOY9AKAiAhnqqtl5YjedL%2FZlYO6lfSxvBay5jWa020UQ00t60WUCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMycwCgmj5PzLjYAnhKtwDlMwgS7N8lnXXXqKQOSmh4%2FvIY1cBxh8kRqdz6pvTTRiuyZCDA20cVosipKgvodaQggtCq5ImJXaBYtunmtzOQu4LLS6uP4hNAsA2IhzW891dLDe%2BITXGp3598dsAfreUJNpJgnb7flvczG%2BU2uN3CaxQQQZHYKLjhsYmJFrhcJoyz8B0YzuD5ulx81eHL3TeNeFBi9amntzPiuPKScH2uRD90BazShrHhcMbTmLUBIW0%2F3vLRt4DFYLhkRvomTD%2F1vVZ4SwrJB%2BzgC8sGA5XOw21LyskFkwoAoVU%2BDyo5fmC0iem8%2FFtcs77OOs16HUe8mvG%2BkAdmQejtP7SLGRHXPEvffnyjZ81sijLjhvjnNY1FFGb1I8s%2FqXvj0mNE5skuxbZhxDDrFZ3kNiJBrVbeAEh5lcrzLyvyQylPU%2B%2FSG%2BcQWebClLaXSZcSgI1HySr9%2B%2Bb4eNhyKFA%2FE4BWJkwlXhs6JI3GhOqRV0oWuGn10MqQNKjTul7u3s9tU33S2vtf34YpFNJRHO2kGPoE1yX0Y3cQnsetpRjnJccASxyaQR%2BhdETDTN3LTAMnNm%2FeeqLM%2BxV4P9WhS91QXnyrG3ElCWlFSZhXFZbzWqfJQkLZke6TChA0Fgir6Ud%2BQIwi%2FynyQY6pgGbSQNUlcxZeRj2ZNCg2SwrKREGH4yupx%2FA%2BU8DEkHv7NcQwOC8egbolkkMcB9osJg8o1ajmBM92%2BPTdj5plASbnybijw%2BAx8acTMhpTIUqDz1lehQWcJm6zWrA1vt6KEKjfsdIbls1MCy7wqwiBKoq9Xu5PuMaqkCd38cha1UzKvmMDm6YoY1KABfySw%2Fsy0%2FwlhZ5oL4VcDCWG%2FEul5oJ%2BlB60S%2Fd&X-Amz-Signature=a6ec4dc20a3f21cbca6b9db67eb1eb81a6a942eb04a3eef7e162db4413c905fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
