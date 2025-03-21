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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUK7KLPJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCXh1cbv47bE0TXIxoiikW6lSGPvYi5xjJ3EzTNWzv5%2FgIgD7QCiNLtKM8xvqLkj5giwRoImJSS1Lu6JGUJ4lfO4sQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHi8ijZPcX%2FkjzThdyrcA58t3sxPloB5dvFkO%2FzUOqa8Nndogs7AHIlhKP7mgEf1YKRr5YOXsDYmwEMPBslteN9rNhYVX8asNyCN2HoR7DvIQh4VqZqod1OnbGzGdsyepMEBJiikW9g3Y7OCG%2FkpEyMTvCDPsCmqNtMQvAAOsx9Z0T0yp42zzYkNtdEV1BGIBXTX2KVzjU3mlOw26Y%2FsMJjk4EVOOq0c6hi2FnFxGb%2BC9ARUhNfBh6Z8k%2BkUBIIADNtEhhr2T0GLAoT2U5BdbY1NzKPHvhrASl44%2FEvK1I4%2F2RdAlKU6D9U387hFYeKN87sPOdvVXpM8ugqrQYLE0GbnIEp8xmrnKJfkdDYlDrv%2BT8hrgvGo7udJGXXQQYnI5W9WwO8mNDOQ7ZsuBIQa9Nff7%2BJkDgNoFSw5Xm5svMax%2FJQeGsv2BWLIF87iPE0xY%2FilA7tEhBevP2I1ykqj32TPK%2FTJHuyiEZBKYwTzGBYSu%2B4iyZY1kxnIs5U8pgo17m6AAIepyhb3IEwqRMzUnVb2mX6Ivco%2FcN0eNDRCPYhMyAWyYPdssffZcwjfuc54BFkhR6ID4YtxfKWzao9%2Fuzg57kyTHZmGS8G%2BP%2FN2bK7OcxjnBBUchNB3vuhjmxLblru%2BWn8ErXbYhphoMO74874GOqUBI87lHHI1YyXKTsj0vuxNi0o%2B%2BinPXmjhtu%2B2iQ96YpNMXf77MF0tlcEcKOecxDK2Lh7pGl4JyZanYuS%2Byck9S47LdHrDtsaNprSNvwlHJu8e8DbGyuwnT5b5M%2B436vz99FGCMWDJx33oBGQ0WXJHe2Bwo0CFcjpkfUcair%2F%2B9ENlgpnAOa3yzP9vTBhGaNtF6gBlizcXlrpgaA2Tk8gwbHlxBVgq&X-Amz-Signature=fc37bed56825a580b29fd0404d3d9e5f66ec001ca61665173b734db65e426534&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
