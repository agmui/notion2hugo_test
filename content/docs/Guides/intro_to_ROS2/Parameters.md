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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL5J42A5%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCtBOOErbMXwnWfYuwUtgO9XlhXNlZG6VGg7bBnih41VQIhAMLs%2Bo1NtLTkczIL2yt8carmd1dFe63isFlhYLPJPc3nKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6tB%2BluDc%2BQ1R9Nfsq3AOlleS5afwcLa1ezhTvo3gpVEfVxK2d6YWowum3NG%2BBhZlXBRgmZtbxpyVqeMn3RO%2FJzZgWuE6%2FlmA9O6bOXrvIxEmClVXRT9G3lzeuM9MrdkkdDryv45%2F%2FsJaE5ekL6PNKFLErobK6VJ3nOCLiQOlSKo5AlQdo%2BnTrPdz08psNgrZ18FkIFigWL9P7tFu%2BI%2B%2BAYUFT22OzYEblQbPcklmY7klue2BkrnktBk5V%2BRao%2FvQHkJlQnnD5fK6VhZ3PdhMvXkWAZ0uz99yyEjpd7XZ4L7uk0e7qMXg3e5%2FVcIlkNfaDJoZrDgyBgFaaC3EwbkfJU6homnoLecCpNAM5ljMg3LTme3QXsBH44%2B%2BPnKBgsL13xT8VRh3Aln2Im%2BTR6RDkQ%2BGU2blHoo%2Ff2C0EpYATkMe8L0%2FlzMbxzNech%2F4VfyX3MbLC01f7lo2UJiOkzO%2BhG9Dti5IfIrm0BojDesPdQj3HEUYNzuGMqYSMQeljhrXyRd8j81jhnu7%2Fz2U7rJIDYq6azFQLRzSDEtygFn3ZZHQCyecmEzCI3R2JWPpoBQQAhGjIoV8WKtMAb8nmFl8cA3vgZT7Inrf5uYVg30Mq9hZEUaeR81Yg0XdfFwubmAtb4%2FWaNZurb5698TCMtvy%2BBjqkAdYBg1uhBHlywtwjILHgRUCAJuITpRhIHyEB7HXAIU5eEadoDbaMGWdDHZqJsl%2F9IJTehHmfHSzH%2BhMR%2FwIZ4%2BpTPVAqEL%2Bw99v6wTKFlUm%2FRb%2BUyXwsKhXy1Gh%2Fc81fNKUDlV%2BjSkkkDbgxQj%2BuxbfFOcXqXswHCPtiJXTSA0PBvchEBISB7zyr5kv4G%2FHRRteLU2HsA2S%2BvzphMfe8BeYAtf%2Ft&X-Amz-Signature=cb938aa243c5094086e82cb441e845db7005b40069bd7117fda53b127cd981c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
