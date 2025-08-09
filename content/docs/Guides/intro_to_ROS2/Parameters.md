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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFPVI4B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoQgrUFm6sN%2Fet45kfx8DIvqyqwUUBxwLtDokfM1SpcAiB8kxGwDowCfnjtFoHYa51KnjhvykyL3wZzj3QvYE5c%2ByqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrLO6m0pn%2BuJG08LeKtwD5Qgd3PKhsbI8eI%2BUKQfeJEDxh%2B0Cbf1K6PHb5cO3HS95GgsqxDs4WhePAt%2FgcENDjO%2F8%2Fa5DHjOME%2FuxXy7gseuEkCeVq3gzo6lWqeVDR6Z02kSNB8IgUOSd%2BVn%2BbA1%2BYN5Py3s%2BK2phAVbU0ct%2Bm8FMc2vglt4gw6wod3MMm2UXDtLg7aLc143%2Fuh%2BjrsRRcouuVubQALCX5UBvQVXBcm%2BXUy2wFrZ4VS3QzgcdRHqOZpGoMeQ8xr7tjYu2crtffEb%2Bfg37eq8gqvT1o7ArwUO1MxjWVy3fPOsiRaWLL1ZMNyLUnXwR%2FMoed0qdDHYAzR%2BE7huYqnuW6q4qmFxtJ1N2DrjB2wizkiaMde8JjwA064LrwyOlVQOt%2BGTAxx5NC%2FjHyHh%2BhKAf%2FDI0%2FqtrlEF2pAKMBj%2FMVUyj0SbrH7d%2Be3ltQbW0sE1DdBkWSw2sCRqUFPaOY3%2BQWbENN8wSulwk5%2F8wbvQVL6t%2B8oTEKOUDOgqsCQ53VJW1rwgMb6kUei%2FVUSIzUmmVZi%2BW%2BAV7tmgjS%2FSWM9mjfK488s1VcWGv3vhcH4fzhm9vP5jwO8BhDm%2FBB1v6BQThqowBSxZi%2BD0FKJ1XzQHbnOt2uMPYYbQYdQLtjTk372YP4D0wyOXcxAY6pgEMQdxyGE%2FAaveDfX4GaqhoOAA1%2Fp5z3umnHk1mX0FOcOBPPDkrnbEc6jsZJQvkae7wsjITGH3MJ6Vod%2FjkcnZPXPkdWqHACQq%2B87CJL%2BsmLcyc3LytCBBZ%2BVvn79Sgy0TDzkT3CONhgzpcUM6k3O%2FkN3QlTtd74VMRGqppxnObcGYkirb4HehdfGzXRZPCTL09IrOzd99GQHxMDg9i0G164OdfDX0R&X-Amz-Signature=9cae81c41d7bc95b6c3ea6274a0a91e5c26980160a8a5ed74f507ffa31c9ded2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
