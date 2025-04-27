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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVMTUMI6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs36JyFvKv25VpJGXvQ8I30S3bRpX2OlVv4WEEFhM%2BAQIgKqxev%2B5Es4AmIrcQa3s2zs2HtlJs%2BQk%2B3h3nkPE%2Fcgoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDE0mD%2BeCRqsq9o3e5SrcA86KHpTBJWp2AiBEMJ9zpZwN%2FocHZ1%2FJBbWXzB3B8ZtgBj9nSzbGRiDZFj9tCKb6hE3XkZIMwZkma2wnDd7BCwCnerGB5%2BtdDRdaP2qw7Ef%2BQWx3p%2F3DntSpbLWsARFVgBNL1IMUHM6VX8RY9Y8yBe1MeyTbljvAEblIqA2h3fNAtJBuyKzFhjsdH2lqdXQuIx5RnawMTsPXDPgZ51CJHhXYr%2F4xXhSjbde04DpW8Z%2F7oZSALqUMcGqX7%2Fs9yU%2BcNwIDj378S72hNM9hREa8XxLXNl%2BIawmKWkgDZ%2Fy9KTqZ0NpkwhrzXHBAkFAbae7WyILyiP2ogluAir2nrCSjiKP7KSVJSWD2HU5Bh0lsLYT7zedMm95weRdIem0%2BgHrQBPw1I30sbKHxjBRYY8IwOHIjt8%2FYCXY5NafgaipRsd3zv%2F978zjXG5m54LwKNGH3waxV3z7GJS9eGdHuq%2BkFqroVmvpYvoHvehaoJFKgGRIRR4IG5Xik8ohgYIAYHyS3t%2FqkQXUoiPK4ucIUtM7aor1VJclJSbqYYoC1Yf%2Bj%2Fv9IIPGau9So5lw3vdttPhJRNQsMHAmLWZhbKMBVNIl4C56wuQMNG9e4E5P3mdTmrWpli%2BDmJNexMU8a7lmxMPLstsAGOqUByoCwbCl3EMZP3EJUfsrWObNJYKCMYWfL3R3yFizxfTrVMBYOZYbFtfKd0HmIhQLRf%2FJ7mwhVgMKS0UNwaE92Iw5DAwABvdF%2FuB7zSPhRyg8EJ%2Fyd%2B3HYFgfnqHnKolrxdG7XdPVpQ0U%2F18n69uT80oWHCHQxJkHrUmWXn6Za%2BYzLL9r9qWKM3dDJ%2Fo6POv0tqZaYFW6SeezBqfevnyEquaGz6iWN&X-Amz-Signature=715d23eb23a4a2c8e7a8aa6f6e8482f37898d8dfae235809218fa98d16e60f98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
