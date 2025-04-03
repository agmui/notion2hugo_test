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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMESEKWX%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC2v0EhdJiI8r1ft3cEHVYTfSVXMzKGyyTP2aqQq9eNuQIgAUFp6KsoSAKmSV7zx7iPs0gnrzUEWL5EFPKw5WHBkf4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2F7vAijjEv%2FmNBvaircA2LA1MiKoe7NsG6Yg2YoDZDbmyfaVqsJpzHyiuom4NLqzBcrwCDLjWAIgMNvepP1RvMuesImMZyRojo9lsxtALkC16sktjo1825KIhbu1jcfa2Z2L7wEJbqUkkVjz4j2KaoCvFDLcIWA4DugiNLpJB%2BKbOL%2FTrGff%2BNYe06UV3BgQjzrlUxEbW7hVXRJtPK7%2BCXO4VEmec05p0JMBTzTwOt2crd0cgDlwrWQk5gzr4JNHzL2xI72N7NAlo4zfAOOZ3QdRfm%2FZE9pfg0BgGzCU5DiKTkhWjiB7ZXAExF4HiKYGTYAtnHacjqfuXs6daRZYlJjAJloE%2Ffwfbv%2FBFw7hraBE5661zuVDXm5fwXeEVI%2FFsMoHOCNnPrCmYdD5t%2FS7lRTGKTp3Y8%2BVfJyqw8rAqZOcR28Gb49yC4%2FsbUH8S9eZDET3EJuWFEWqennJGFWfg3hyVoIE0a1SK2BOsSsjegHwxggpPou1OZAZKEUQZi%2FqUQ2q8sGQF98vTnkrLS%2Bwfbzp4BReM5sB6hmw58WZW0AoCKGdIQeoyA7jWxTvKPBDp63oaQaDEkfwBAXZm7lOqyAoiUG%2BgB8A2jWfwOWEPBPqSWtdt8ZM3pLMy57ROdRKcdXtzAJ8EFvzZi9MOH7t78GOqUBRoQFBwgvAkUCk4guilngVcxeaCyAlwWwEpxHMzNn4VpIFvLiBnTxPtL0DSxvoivuvrpjXoiN1b9xWzKVWcBGHJCAkCOd%2BcMc330AA1NfhjHWC4toPELiT04i%2BJR0rYZ4fDKLBeimqLCZ55bsZKbVMtxa2gjk0PzNG0AekAiH31Dh2TNlNNUtkAMGLdn9QGqqLYHuDerZD5KWp4gEFNxh%2F2t1uQvS&X-Amz-Signature=4c59f393601ddca45552378533992c135633059d1f2c836a0ba508bedcc700aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
