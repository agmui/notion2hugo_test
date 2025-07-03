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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQIZEGG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEG4ztbniTaLK08XERJaVdXnVZbj49kMtx2iteZ4Oe%2FFAiA4ie6i4CLqiqqo0LZbjQES7P3ZUfGCRn4MPqtebzEUZyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM6GFSPpi0UGZaaCMuKtwDXUnxSULGyiB4JV7pBw4BJ8m1pL8UDzqBUGFiYavoAORcaYp5MrFjhaTdBWXlQZzFWXN%2B%2B9hoOYBEo754xUkQjsCEPvQnZSahY9ZO26QzmlUMY25jP3pmH3QPY4zzvPrlPAtI4UmwDjFPnAJCcCE8yipSLVQ2ZnRo0P5%2FQWVJjsRnnK6v2Wrq%2BNL03M%2BwbyuVY3Oj%2FIPrPTSgQA15LKoEStJcCcAzThzTEAoxdb8OEzPnygYO%2Frd0JkFnbC%2FzttvmyLBLfp6qGolbVziTp5pUNNjrVtkI1nHtnupC2NBtvN%2F1b2VG%2BBvSNqXNljtwz40fFWchDZV%2FIJzwYXghAg%2FAD%2BUNfzfi46WNTWBjhDIPYYIrD1l%2B9hEx9uGC%2BCdpd9jOTvUIWlfPeCzYSqi%2B6uZriyxZHLQsqkgqz95pU2NnbZoHrz1tE3%2F6KYfcn3pzBllkXUfMFk6fNWTE92tzXa%2Bz8UlsoSJWj8b%2BlZVSSnGOXHbgfdYj5TeYXqRcyFGTgOtnuh0ywUy7slm9Q0cFAdp42UEYePJcCJ5muZ1By6y4p3NBooP9%2FvtrhFE5pQZsm4838pCDUldgUOmVwSkgCg%2FAXbs9XBhn34Xh1vR5pYgAzFoJ3EfqMKPSjA3hl9gwhLmawwY6pgFVGta24B3YHt3oKRftBQr3j0gU9wLSXEfJKWsdmumZ4bMrpzmCunl55ueIXZqTahi55BDgge%2BPY00tDC3E2f52w1GF0O%2F1lcaF9nngl9EwmJ3lfump84%2FYYcuvh%2B2tba2Y8A23H%2FJq%2FvgguKCZC0ha7ou3UP2tcE8aZBvYCbyA3oRmFI9fjNfKGEzgJ%2Bj3AbnawsiKFrY5vJonm%2BeLpfmkKs3WbDsK&X-Amz-Signature=b7f198a557515d32801795cc827c0314990955cae90772b693722d82c8e18702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
