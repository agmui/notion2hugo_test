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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLGID2Z%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHyWPc6mdXf99wxAxbncDxtEDh5eg2gmemwy0FPFfFc2AiEAiRWO6rY2z%2FzCDTvCz8JaHIPjV6NdD%2BFpB%2B4B5qG3j9Eq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHFVnC6kOqschqOrkSrcA10w4L05QgR1FMHebBnameOA93sYCQHRVVhRUmxD8PJo6GbBkjuqhdNPVs2l5%2BPGyO4jQH8BGRKQRi6NRzMLGKmwQTYokbHrR4r5PJJnmvw3%2F8nEuYUt6mw9neqo7PpL%2FzoFbyw%2FmE0BCSB%2F4rDFH7hPQxBcMkwPXvEviDa%2Fh4T%2BYc7FPIWlWAK8VcmW0GDlk5nbO7DQG1UQAbH47p0dRXyDyxpepgZrFCZ1WedjV1r%2Bnt4Gx72puXR4agfj%2FPrvyZ1ix5lUXmL3J%2FsGckM3qfdKr3Ol1X2%2B6tTk8SqZEJksZqypZEYkt8%2FnE8RE0xMfYLtpc%2FibcSzddPFsGme6CNjg97QEYJhxG2f%2FFvxwAZcl9Skm%2B51Y1zxwbAQSEyX4Nq84NifAH9gP%2B2gwsbPmcjemPaXQoPTeJ8%2BcFZzPYwMfJE6ZzZZZ%2FtkWuDsWgEPUxR1DqGx5CdhadydnZMd4XCxi8UJM6njeweVVHa6UQ0DpbsT5bOSRCocCcgEaeRlzlTN2UDvFIkztZYpRaMZDiz0tCgZnKKwq%2BmzHgH1ggjx49ZBPxtR58JtbAvaE3LuA13rSph7OrNcN7I%2FbL08wiYpbc0kakva5KJlcZ8uyiTyfWx6pOoKlN1e1t8ioMKLOy70GOqUB2sbDilqjcuAfTCawrn9SJLL7OS57nayTHKcvB7t6USGYHNRDehoa4i65k56l18oGuc%2B69939e%2Bskqw1OiQfcTLZSqMzb6%2Fw6VlidBscNM9HWZD0b69VAstQp9zwkWuMvS28kaljZIugHeU8DmQrocx1YUPOinCbbQYKWQlWP7GND4hrJHskL7GxqB3dBMpEtE53FkyjKC0LDIYEquNTx7B3clV3y&X-Amz-Signature=12d102ccb5c6ad1e58198f346c60552fc6d2bd2d20feab1488e69348e3479172&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
