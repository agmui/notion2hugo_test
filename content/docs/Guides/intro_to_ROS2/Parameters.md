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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZ5KBVG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCIBRgzqoxhs%2FGH%2FWoXTs20Gjp%2FkVS7zhtwMJFCwyANJAIhAIeTbpKF%2Bng%2FL9VvsjnEyn%2FsrL0YU2tknxLHIGFros3NKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0J%2FJ%2F1OZYmE%2F1vckq3AOrDh7%2B9L4bWIUUSTSjX5c9bzi5XsKKVA58HVPOdluPq6uHGGiB6c7910ISaKIiLeVUMSCksL%2Bjx%2FA4Vn39EkE2rp4NH9areaVMJOXhQnK2WFPZ884o2Drr9fJpaOAxbYbvqPCdgqY9Z0MBohS43FnZJ6Si5GpLBRyv54V4b1PiQynKOahkoxUs2W7m7%2B07QakOl9j7Xsxqk6KYheDnWRuywcaKcKpTIC84SLfvgrCNgc5XdJSFg9RtanxZcHX7p4OEZK02PrOWvWkH1gExYaXYuuAIImU%2BRhneUd5CLHiosGmSx583x2GBMKq9s2rIcTUDu%2Bfo291tK%2BqAMhyFG4SvxYtd7eBiPMArMkTbZ3ph6ltfU9iG7ZEEr7H95x%2FmATD3IyQgpfWc2XuQnsKlhMe1inNRRqViXMQBKJm8vPJrx8IlW470O1LZ96OSXq0r6PszcL%2BKhRu9IiYnACabsegaNBEgLtguaIq%2BPLuDFKbdSB%2FRDlt%2F84Bcp1BgfvITGnvfvpjzveUT4loXcn0Pinl5nDmcg8vxf4FGiqu3fVvkWeHqYlMlMhIE3thiLra3QNwG34HGOURO%2FG7HYYHWCanp2mQKTtx%2B1wQlP5azCb1BXCIYzIV1MqZiokDdXTDtzvPBBjqkAR016zNT2MrcSbvReac8d9SRUSk%2BRg3%2FcXefsoEchVvPGffp8K4MACjdRooWVD3r%2FL20nZ51dB29TsYtN%2B0U9knSD%2FE9uImQ1NefTCGS1rj3d8xB7PJe%2BNnCAadWyqnJocqSJ4pZau6zcaF1TJoY8gM3D9TWojILwVT%2Fv%2FSd%2BxWMu46TXm6S%2FV0uQ4sGwOdO68oIWPcWA0H%2FPRWQeZyU7rN51eww&X-Amz-Signature=7b1e9e6ba6363fd62bb226cdc7974affa81ec9c32c015a84820d510f81c5e7b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
