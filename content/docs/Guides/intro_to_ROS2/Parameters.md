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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TH3ILNY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTV40%2BeZDxiLsgH4jQhT8doMdwsMnkVRWN5EHp2aDocAiEAppM%2FxiIdxJk6VWlYKeyFcsKbIGx1ER65mUry2fEJAFUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVmJPKgB9fhDt3B9SrcA9IcfxN8SBKJAk%2BWzne1VWBLenhEGHEhRK4bXag%2BFJgdrHDZXiWrFPy32NxApzMr8I%2FX%2B7S2H7HxfpZ2yDyz5kSBmizpyJToejURo%2BokwFVdmwiXwvtxihuvbCsyCD%2BSPnENniegvmJydy2fBGT6JAuOGYHCTvuUjUWPWaKlRw43kuoRroajVamwbx5MzTmUCKk%2BOevq9pBKDJcp8T8qvnCE16J47fV1b6estqUHCj8EGkADB0hYejp45ZpjFKrERTWHzjrnBRXwhhimFsGIWKQfaSskkfVlAUD5GW87XljugyJqNiwNNP%2BGWLiF3dfpgH1p3Y7ifeL6Mu%2F5eAMsm6OnQ7CETrK9KwiLaYZ8YJ0wcZZp11qQwKR9RVaBzNr02MowvBZGq%2FjBH%2FxrqvSDYmT7lEkigNOZ0s8H507nx%2BJWMVZ62TaRV20IyR5RsFnsfWqJrbGFbfQ6js%2Fk%2FDLtF0seEWJdbtAwNeAgD%2Fq1lLqz0yf3WfRIMR%2Bt%2BKFJS9vR9gFH5JjwPUiuxMMvdqR6F9j53yN996qjcmpdV5IF2lvNoa0qo5zjaKLuEnp37LMJrNIs4R%2BXt6YF6uod9Ko3enYnMNn0v5ByIdLeCVvcRVvRxJDPrkeeHo%2FVg7fDMPu18sMGOqUB50qpulWkYKwlMYPYu0BhSgrmIcB4XlVE0TJfHJhlYM6AzjOcsV%2BTzAg8LZJVfQa4bv6ZNUqrK0UfxTBhSy3fQWMUcBU8gEE6E6V%2BzaqX040DgGcrL04AG7LR3ANf7%2FuPODULTx5H45wqL%2FPFuDmYkGkk32tNVp2HqUNVwjaafgtinVE5tfAZzMx%2FHI5wvwKo1Ovn2GSOCEMtNI9ThspPr1%2FNpUZv&X-Amz-Signature=93b4ef981d109883fd570737c067cc8c4ae9c36ed447e53e313a40d118b87ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
