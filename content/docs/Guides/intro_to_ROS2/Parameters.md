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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XFJB5EO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHaG90mwOGlorJcQk7RWWXnHCeS%2BF8KYtaWoxGqFkmxrAiEAjsb7rXBzN7XsKkb%2FsSMiu8EOnpg1kKNO1KsIZst5ZaYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO0oavxfh3mDvDeseircAwAGaf2hIHQKM5vbXTNmgM2sNhvUdhZ0RvUAsYbjWalB0he%2BoajW%2Bs9M9DY%2FHAPgZLlWQUMX%2F2YSf5RoFAiepG2bTWNRviE23O0SiJ3cVhegqSkpMHllmaHN87h1u5vK%2FO79CZ2vebqHKuUU%2FyFUin%2BftZZ5VN8T0cnb1Qp4zjOftaceOkDxoETXz8nDKVLtSRDNAy1LEWxN%2BNggNj7iGzmNdb3uUgtXoqMUsXV4uBAcmixZ5HMT7zvpU8LysSddTTOxvK0BDZ7Kdqqlt67So%2Bcq4p4epONzi7CpVEAMpxVxFg9rZU2gP3tZpsH8QULfK7y%2BQk8RFhtrXPwy8SZ0%2FU0H0ToCG14Ga4TW%2BsbxeHR7wdL6jKbpPl%2FCtul8YYiZj4oMaPq1xODpOqZbA8njVrFAI%2BlckS5vvacoq2YJ7e%2BVcumDl7htOlBHA%2FUOtk1lYdBxCbpPsbGuphKhPKekN6WG%2FoSQ4XyeBf56rED2%2Fw5RWtFykEptMANXXwylcLUP0%2FCExYhiEcZU850Kyh42TD9wZCYwAMLPDUXZIDgdA0ReHzJvq0aFeg%2FV3jNqTxXZbpeO38hQK3TVw0vpOWvFTCP5Em71BU6LTqNcJl0GxpH2I64mpD0QX6%2FtEKMNML7no74GOqUBtn0DCGZeRr7JUUNtzIZlu%2Firp42%2BJKpVK%2FwV3BBZ9pmgLFB7cGXjkh3DW%2B%2FxR4NQmlmKTnnryU3QJNiQm10W4TCWN9iCye%2FtLmLGYgeX9P2aRfnCflUlx6YzipRRhlPXfdCQpU4tjoumQ1PYqsnoctTLLoDgNhRWr6jOTs4LxWtGnSPxyJ4iP%2FohwxO7iRTR2t0iHMhCSt%2F91nKwwgCR9JFiatIp&X-Amz-Signature=54eb985721aab8613af8ec932c8829fb17524be258ed533c739388a3ba10d11f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
