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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYBYPNY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCJYTryzatc0IvmKIumliPso7%2BNj0CVNuJlJNdzsEHYRAIgD%2B822XBTYixuei2RyrXODzZwIq7H1h9UuI92Lxg4fQsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDO%2F51tCG9e5rj0g9yircA13GfaG1Km5tCNRS6YS6F5SrbWR8%2BkPSRwgFqsDSywARWfghPTclvKG%2FbKoenj5tRXcHkCMZvWq2ahymjhG9NnXy%2BMmrA9nUIkj2NsR%2Bk8KTlR1MlixJGTfJef3%2Ft49gjFgb1SRATcjH2qt%2F62%2FQZIwWO6qhebOSWMeXHWBC2lc86v8%2BSaUjR56MXv6wk9DGHQ%2BDMEFnulfeNTwoa9Gf8zOZTMz4KCfIPXEl0EKh9onJrFslQF05rRfqGk1H0I2mVdmeEUJA2YCLRb5Ua%2B%2Ff0wA2oViN3NyymPEGBCc4wME8JfS%2FRxXPAL92fb6MtgYiqLdnS%2BFV%2Bn4UFpqgLljQeVarWFbgg7XWHR8jNp0cGENHUcT0TcBLFN5TSJbq1b84Mpd85m%2B47dzJm1f%2BktZWx%2B5gj7ds98OkMhzXJJTGF%2FdDdhs5F97gONYYQdBCXdDpdorf0LBWaQwvM5Agjzbx1J2vT5p1wz70ABqgLSTlAnGq4DpK%2FGAr0%2BaHR%2FwZ%2Bts6rr4eC5usSB5VAmC48g8U7gKqasEU%2FksQ2eywpV1Jld6iWgyqPS9PoxSa1DxxRoNrZl%2F3tBP6KgTu3a%2FbrHPZWOqKP7lZL6Yb3QEkkF4TbzMmNc9QK2RkvivB%2BuHIMKjh8MIGOqUBdpLQWmaZmpIxzN57zsirgf%2BTFLz4mw3h%2BapMdQs27oYdIEs18w4y97TMpjh3jLcVbdgrJFM1u1PX3zgq7HVOlpj0sn%2F%2FIGs79CcSSWuKTjML2YiREobYbryxZ9Ciy%2FWQX4Z8UHpC7%2B9b0xI7HgIPH%2FJzuBv33ShgL3zHtZMIbowQxnhTsbFnKR8zX%2FKOvMhUGVoKVqe16jErOSxzg1QvAxosEPOi&X-Amz-Signature=80080587a3eca4367f6ff04842f51cd0f7d67179e08d2adbc5b2e86bc3fcaa4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
