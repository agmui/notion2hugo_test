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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624T5RHGT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAXezbCtL%2FBewx%2B8H%2FdOUAmXNoouw6q3mPOTztaavKjgIhAJPPhgoOXZlNVNZf4fGfOgJaOcqJYPc6M9uN2CQ11eklKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrcJaG12cAZ9hPRKAq3AN9atwp8HRUJ1ivla5JRQ0Gpq6xe54e0ro%2Frje92j3tkMk4dCnRr5aTYUdNgy%2BNyeh0Vf66RD%2FhPOndzN0LV8aSYS8%2BcgB1%2FlGfkrzNUrYR6qabq0gUdqtVVbbyjbyADB6IghmjLZnGTtKQe5r%2FHH0VDWiqdRSKJcTiRCP7gA7TtY%2F2T1qx8oCMN3fQ3dCJiEShBtVTJE%2FcWjblAeiqlfIjMZnEWGrfl2GMft4b3LNOGHZ9ybNo959kBgIi3BfAwDGI3h99Os%2BQ0NpnBuggz7ojoWL%2B%2BIuYZyROBRMtaeY%2BHNFPUfNyCglbAzBKD4F0J0j9jgdtLyV2kbPwscB%2B3%2B7yQa27ZG5L3OUeo2R7M6%2BjeZmCP%2BkYqTPTY7epNVJkG8FaAiS%2B7iNDXuitaAHeHvooRqpRtYoPcs%2FDkbXLv0FBVOwd3wQXZepAXWeMwE2TlysHEMXNkLzXPQAOPfBGa4z8PwivPuLnlMQ25rOvHuEVzAUNYMEVlxKxPOl7EMf6XbhAiiJ2DfxqAf3KohSrQr5ti7MMYyLLEHSV3eHKfWXSgdwdG2w0LdE6L7meQkzHOzwNbGUPaXanWmF9NK3uva%2Bq%2FdZyR78irFdLJVvQruXemWKSA6YKr5iCNZmbnjCd5NzEBjqkAQwZTthr7sm91t%2BQ4wqe98wPwQo02OHazm088f2Kd9FLRm3v9LzywH5q2L9bVEAtz8PxXzXoBiM%2B3cRFxJD9vbpJtM%2BcKRfy038IGd0c4ut4sz%2BLp%2B2rfxc7UPrg0oLRkAblH4vdHURpTO%2FuZOx5shuSpHOd0xoqIqBxqo7qTDDuyqOLAj1vuRxdrMiongw%2FdQ8DrRtPV3b11O%2BlDReuaRDsJujN&X-Amz-Signature=8c33e50c8a9caa25d94c35ecd77656023000e9a021976db865bbb6988ff9dae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
