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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YN6BIRL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDoaOKa7fzABCfXVYEl9%2F%2FeYB%2BT4ZXBWby51bEOv%2FeS2AiEAo5BLhQZ5vvPLRAQ8M1qWGymqVnZgfKUY0rp%2ByLHjeZ4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPdtq89QWN0v4vhBVyrcA4EbBcpRfRWY1oz6spZ0jlN8nCKpg3BnAYBQp25UYbiyOEGxIN9fIHUNbrrj3l1Xntb8uYQopYcO71kISEb2YJ6ctpIioFF1mTid4dK3wAaIBIsx2b6DoznPQKX8%2BinaoaKkOF7d0jiq4VDcGcb%2FI%2FkKvKpz09EzCyLWHmDx5LU9uafu2rsK5iiu1G7%2B5NzbSSFlPjc3Byr58N3tVurFxBQCi6HcgP93vfkcudmG57sszQJZPAJnvrR9iigIxDoXY8vCFHCx9ce%2F9xVqlI%2Fdqz497GJ7Y5mga5QqOHtX2x%2Fn188ZOz2lK70L6Pr%2F2ZnaOkOvKoeiVRI4w2dRumTf7tmh%2FzJJUzZoUzYfBPorOM3hu3g26x%2B%2Beegvi4ZcBQE0rfP3zkFEFjQR918XCA2PW7%2FfjdlwKgYS0zZUX%2Fx5vxszzEjR%2BUiq813MDhEYDQCisxSZ1chzLnQgZQr%2FFA1ltTUpK1K3nUrf7BATycFRBTCudgGIZEvcr2RZqWZQp0eJc6wdBdtVIe4b%2Bb%2Bqt51WVxJXvHfLQxhb1hkra%2BD9KHP8SWEeUvjb6zeQzIr5lc8778K7z7oRUPA4x9xEBTajmZMqxOvS%2Bn%2FcRQmn7u5JESWoHdkxFE2InFkhW4mUMJe5lL0GOqUB3GKKpBFN1%2Bkx%2Fd05PRbIUpgEsHItuFEkPBQm07N4Rk69Ow4FLERQd2TzFSLtNhiBRQRs4KqyQ%2BWSiarvcwVPQ%2BHn%2Bh6UaZ3yTYlo%2B0ik7DYHa%2BDgcKHDXWx%2FmGtdJKPFc5ifaH%2BAtBahU77ERBDV%2BqDno4xhqklrKkDzti1mTWqA%2Fojpx%2B08pp4SUd4CzZqNBnSkvP8srWfT%2FqGdHuRJiDRPWXHI&X-Amz-Signature=de982a96bbb60bc01e729d2a890e6a390642f79f2568a792d259df2464b6ca94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
