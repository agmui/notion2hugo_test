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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WCZIZS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ3udGVmxOpt%2F7ydQWs7X7w%2BkY6Dn1xGEAVIqDbxJc2QIhAJWmzVC5Rxk4GbokZgrUA5e%2B%2FGOSozlQb4gyNCq1W%2FifKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLBIU2eH432aJwKygq3AMeHZNStffF7WpzZ5SpOH9XQt74PsQ7epIT8ghphtdEVH%2B6v%2FnuEEjsnkTtEUFDoCLDIdUr2NGZU8F06hgpfClj38P1z9Jq5CD3clxvwk%2FDmuQdiD85ByWAH9E5ANvh6qa0Zzfaq%2Fhjjy6QL646KNZ5QK1gFjz9LSL6WJAEa7uYTxdy53AEX5yKub2tf9URITz2V4c%2BtxWtzoZLNpq33TWWLEsgVBU14wxclZPJndKX5z0IgNzbLdXYiWVfc7fnFD%2FEn6vEmoaSyrnuvXKr3Q%2BMpQ10P5sJSeAFyTSCpaj7tjnB5YRLeMjMESiDmPQ3wv9y97S5DgWo%2BC4gDJw8yP5Yoo0HVg%2Fm5wD9uYct6AbnuqIHvHV%2FgiPKz07re6iU6eoIQnNg0wXF96zu%2F02ACSR2zq%2Bt97LG67oEkdm4GmvWyUKtQkwV0MZ1iaDatEoijMxDBk3jpD86YJVfhnI8aPyo9O22DGR0ZkKEodUoidRzjNc4SNb3TzUBeTP4D316%2BDlprtNMpKkexn1QMA%2BstekPDD1%2BT02OUAFO%2Fu06KEeHEqnx40EspBjVJkM1drdQyHoreTJagbHLjsMoFjci15h4tEyATNuoNnsq9bmRKVnyRiSKSspLd3VPJOLmqjCE1fjDBjqkAdSl0ymm3mJAI0SE8uP2UxEzch%2BNSiCOp%2Fxfsf%2F4bS1m0DCZrwwTgxJerDQ5HAkbbPZ1dKL9FOafpjmD9%2BI7m7swee%2BLN0x1PJIzVVDFLo5TebsElaaJjXeGp7VDEUW%2F6Nl7ULB4fR7LPtO2V4jwAVcnNtwWaBTTbgtXWT4h%2BxNgJ8zO8cMKaJdJYa1gUJR%2BAZ1oF4%2F0qUkBn5PO20heGDxNOkb0&X-Amz-Signature=a894e7a5c155bbeb8452bb76316eba55fcb9707fd29a56c689d9393f032d2592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
