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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICFFZXG%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTlz3UliOYT6r%2FTYvmkF5YDR1oCwmaiW9XEXklx1zqbQIhAJywaRw8uDb1A%2BWLsonaBcB3IRgoMSLlTkzQnIUkdgZyKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeutZPefa9JeX%2Bwewq3AMbW0GpOR8mF1Hwv8Z2SKRo%2BtE%2FGH7cWvHGEEFuZCLKdp0wM2WkrDsSV89FBM6lDHIyMnTsg5qdgP8USpuRVwdPaCetq%2FDzWnhvJ4Qk5tdOeNexyeMODyuRTIbTPe9lEIR8fWB2UDkSxut5vHWomBohtYTZw3%2Fx1uo80pYC10sRYZMjqts1ibAwXuujtj5qf7%2Bl4IJrlI2E%2B3iT6ttIqzHujh0%2BI98zE%2FIJKdOjzSKueLXd4Xkb3YuBzCEdGpOY8Inx5XdvTFRiN0MNC5gKdNQdjI6tQzHt0yPH99DOmZ36MRJcodkJ62zixMkuwZLhpUb%2BS895cL8Szim3ZWShscJCVwM0Pi7Uwh0Aak1D6eSh0YA2fjncbPG415D0iCUUqR%2Fw1ksiBFk3266piDD4hCeFInOQG5Z2NscfHTVQeDMo0RrCZqlemvdnzOP5O2sv2VhyPrrVBZ8%2BtyxL9545MhKP34SEUj5JbZJDjYCKNDTSClvb49FI32Kgd8E1yIiKwHrSStex5DpGqLmbT9IITNMWI2VSns8Pw%2FDlE5X9ymJwtQUr3aKan287VCsTE2mKQP0pGaQa%2BXluHVypqdYcfkwR%2B1jp%2BEuviUA5peZpaXzvY0TlodXw95ZaEyzSgDDvwZjRBjqkAfk2%2FQgbVpYRVhKSTTLc7V27myZbLwUTLL%2BG9uCUcpDP1kortGPlM0YKbz3JFqtKjgmMTpc%2FbSiqrVePmB0qlOYNjs7fc91YwG%2FeYNt7tfpR3VFsJAwZYUcrRIptZaROxPGn7%2FjTVN9VYJfq0nb8KIYmJxNlr1eOb1yyWiPZj4l7Z%2FcetxI3gZCNekd6dMmTtmZXtwH%2F6Ys72%2B2JEi42K8EgdRyN&X-Amz-Signature=4e13daf49fbe5afb2cc0757f1b5f4ccdb16335c550c9b4b9b2b447fa77d4d04e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
