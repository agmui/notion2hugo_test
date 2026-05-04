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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBERQW5%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqGbZQsuct9SmfdrUEWTJitLvmZGENf6CMUmjq2g%2FtaAiBnP8fpFBgbqeRs6dHsv4x4q6rtkxqZGjZIjPMPGNru5Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMZxS5egHOwaxSHKpIKtwDsBnrrT7%2BhPRE6BgGwX0Q8b0wba1%2BQ5WCnd0au%2BPsd8TOPwLHAiWy8P0NcoPT1HBkf6WC8%2Fu8U9kCN5O%2B0s7vjw6l47ucapdsL39EXEXwK8S1z%2Fa5z5JF2Yah62FBWV6ufR374%2BKDh2dvRI2%2B07%2FUHuUuxOE8Om0KdNvTTUhjFFUz7ZUBQ4I1h%2Frat%2BCP0jj6ibEk0YSooybL%2FJeEgj6viVB64%2BeD1hXFNbYroT32g1EnLmujYjXBK4sSJX9IVyL5FzJAXxn%2BkdRpwFOZ8Po%2BK367yp%2FBygZorBsP37OSy1droP4mXnVenQS7oui%2BU8Ymm1ZMCphVY92QXrsslh6dxDTt%2F1UeUHKCZGB4In4Xq1C%2FEh0zK4FbiZuv01U40%2FnhPn35rc3fjFUgEXbJGqFSaQvJNS87TfZPmpStoiGoFZ%2FLONkKiy47SOehFsj3WtRk4AWdHJZfvbMuHW15MzVqsW8xmjDh2SG1J5FPlTLFk3MLTyBpT5bnidsYF2qoP3BKsubTKaGzaw6Wk7ehmlnolXcbzcx6gT%2BDxzDu7fhIKQcD2knW2YIe23Iwh0m30yrHb5TIrDm15IKm8ny1qiUJDfh7Kcrk%2BGR5wV5W1qk0oZbBjQUWYdMoOK9bNYcwrPffzwY6pgEQFwiETCrXRJvTlajE38hz72r3pW4B4tKcKzj%2Bje8KGqcpgkH%2BbD9V4zv4rlu31EciPkEjwJOM8%2FMOvpZRVnzH7ryVGne5K7rqoobjBQL9ZPHeEb%2BUiNFGudCA7DPL0ilWG4mtbrtpLjVCXhsZ%2F52uz7qHFS%2FdY8yxPi7hm3ExvAd37cKt3WY8T11hfZYmmEOKC07mVc4rTtrs0AqeUMJkY3AjAsa%2B&X-Amz-Signature=f01c27f27987bb7edac30f562d77d232c1b72cc7a128fdb50840e9f7b781b634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
