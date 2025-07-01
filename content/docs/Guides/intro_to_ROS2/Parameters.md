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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMEJJ3R%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfEqGAwYb9W9dXRjfTv0t%2FPKH70qcq2okGufkA0Y9QpAIhAKLNKCQ9rZyRf2wrJWSr1oiQu0LpL%2FANVJDRaSazDEk4KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypglqExEFsizFNY8Eq3AN3dRGzcm%2BZxb9ebCzgxcM%2Bej1qixLqtsZG6jYVD7br5%2Bk3IHwBIBlz6uzSCX0t%2FDZVsyKBNYF3EVyJE2ZbmhKLnYAI3cMRJAir4s67rJbGMlJ%2FBVyI0Sx8f5LsJe9KPZhTCwb5ybXI8htxyZw7qX%2BGb0e2inrepAj7SR0shIUljmZn6nE5a%2FVeTpx4k7EB4AgxRUzeVg8v0UTJfW0Fsm9mUUXb4vi0hNEKKUrbEsaj0fWcG%2FaGMv2Fwot148rJk4wutMTZhlXz3Ae8CU1qCyVzU8a8qzcbdzPHN%2BKWYF3Belh2BLQ1H0OXmouW6zvdyuuz8tyB47V0mIkb%2BrPmiVFk6L3XiDOeLUtKVZVYC6rboDPzl%2F1U%2FQCVwm4OUj4IQ7IiexpZTAmKsytvS0treU2uO9BlPG1CGOdqL51hzUKoovBklzdzGKmwxu03cNJyQNe2D5EuF56VY%2BEK1S9DwFHIuJkkYf%2F97J0flAApi00HTL7%2FEuzICgFhy0Cw4siyDlz7%2FCq2wragscw8ixp7ZvcTMZt%2BS89hMrMCJ5bw4bS80E0FTv6uVPOyvBEOYGpfw9TpJ7s8V0zwPUHcxS45%2F87bE%2FzMBlhjUyVes6NsOmCzLnCUSab7%2BKwocBWvzjCbxJDDBjqkAfP%2BAJdZ%2BJx7vcM8429TGe8vV3AhzaOd0sK8NMCRdNyplbh2Cjr9a7GBxcoAlkTxrTNQcWbSh4b6%2FsGahx%2Bw22jN1CEiLts6%2BN%2BPJueSAysDCuCF%2BuwpEodFh2%2Fari%2BlHFYAkf6mOe5QEbS4RLcyyXA8Tqm3pT4n5R3Vh01Xz42Q99CzCD1%2FFSbdJWD3p2K1m%2FU98%2FDcsz6BpwDG%2F33pyIlSYZwt&X-Amz-Signature=6fa556e3beb2b979de16e8058f129ffd032d758929879fd49aeaa2ca713f8f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
