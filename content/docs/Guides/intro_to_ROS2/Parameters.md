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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4LR4AH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7WdEzM2n2ujKQAWLoOwdtvEqKUJSv9LBt0zNh4CscAIgMy2Y2vkAIyHqPhZlyYQmNQXo3H5llftZb%2FHHm0cowdMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDF%2BlKxqmENnk3bYwZyrcAwdB%2BIgpOJ9fcwcEqI%2F%2FBsavllsFCfPWmlwmMLoqVohIjZ%2BkTwdyk463lLXNs7B4RNI%2Bnti807CHnbj2Q9gkyQqwzgD86usYBNLUv%2BeqvMSUNA6IjmyJ5PAry%2Bz3o1MU06IQ3g5b7FrwN8uX%2Bkfj93YuKBsL%2FXDIMcqahHU887%2FNJkzfjpNcdfVLlsq7tFR7PRmgTB1Y1mrSQ1s8eNG4y6HR2Q3xC4fbUYg3F8l1dJy4%2Bf6u0HwT1XJBFXpLKOe13lA2oZi3C7FtkEUEEiSGOjUysHqfSL8RbgJQh8nNh7ZWlURjl0FLFD8mtnEuwOmpNUu%2BWuNmKnw1VbWgtWPaVf%2BXDUXFI9sVHlZnAnGF3JsfhHEsyFZVsd23n7rt9g%2FixdM7Fid9ZE%2FaobvTkphJUovdf%2BQW1IVdZKPWtdUkS%2By3yPX88KMXKRqYusth1PXuyGPiHAhiXeomVtBuYcSRNPWgA5C3Dk7sK3B9Pdbm5dvuSNz2apYFfFUvsHYkKql6LVt9LiAFOyjBjmykteiMBn4JfnX5MaSkhDhcV9J%2FxBmPBoJ1Wcdu2LU55ATMwGgGUzdnVBtDBfHzESIi6lWpbuZ453zZiOqZdL1CDismCsV676zyGGrEvDDkPRDwMJ%2FC8MAGOqUB2B2q2GB%2BmzBtgVQJttCniATPRt4QxGIF3s3imkHqIcayBblSbfXj8TjVXIupKuKVPx86txpbsAAUheR4Rq67vmK%2BtUHLQzan8wOsV%2FIOO7p3pUDaoZMd%2Fbsy6e8rYEARJp7eF27ZPfxpfj5KjkY6yMMJpNJHt8liugCnHB1h0ZO5JItLA5ZztHa2MaZ2Whs4kxfydA1CDM5bhv6s0xDhmtlGe2ZL&X-Amz-Signature=5b2b05bd2d0afd2a04d47f3d18a48278dfbae8521982424d8514703dee6a1855&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
