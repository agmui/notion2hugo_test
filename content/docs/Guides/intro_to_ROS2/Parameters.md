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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XR57VYI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5XSlnAXq2thOVa7%2FkLg6U6zRGFafeGngobBXjce%2BvwAiEA56sTUTuF7%2FnbXGDXWjW3YGezb74pfP2kpK%2Fc1Ew6SWEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERq9FZK%2FIPZeVc2XCrcAzrW9Cb5UQp4H180AVOSvDK%2FXdCCI2DdNuvIrbujJlwIgQmvGbnsSlBuM9NewqqXp40FVFckcvvHaTwY6uSH2DHFVq0y%2F7L33ppAsOT8lOORny4X8%2B%2B3O%2Fe1OsDMC%2BwGdl8v4DDi%2BEMaHYmkr%2FSeBq%2BGd2IMGbmxeCba9DNszDy4ofMGQn%2BQ75kBAPFU0Acthshp7yy7IiA9T5jmmX1ImsGNsiFgpSq%2FmM9dM%2FHhd0%2FJPS0gu1PnPmDQc%2Fph%2BVlwfHK0CeCjtU22u2xZAXufa8EX24k7LvtXJ4Z1pHTwDfbaXjnRlvd37Jyv3r6B%2FZ0czK7i7PnYGp8OJgjFWnrjrN6jF88uoUShwZzkQiOLOGiIlhl6NHiSTZEpdZUmPenpzEnfr6hXml2VnSMmClO1Z7xpdN2O3EhigPSgVp8V%2Fv5W%2BCoX0C26E0AU1901QTaKPKl%2BeOUHhKbYgW14SQtg3hsYWgwsaFes%2FANrvzT9HkFNDhEuskUNqPjnqVxcG1y35yJbwwFWBdcLQjVe7wIGPvlUvvjreIRIU5BE5L73nx8V1IV92JAgA%2B8zzHc4Lt6Dvfs4mYHrC2J8%2FVSrQzLoGb6fGLOSTZdPfEBu%2Bgzioj4pBZ6vAeYcKM3U2CkRMKWkycIGOqUBIqpiD45VghsnmauNC9VOveVvmrcO8krxTzN8C7KlXTDPLfe7WzhCMXnHGnSrsbm54El9yq4intYWUWNUeld9B6jyT17t3C13Sy%2FFYZll%2FlFYRKBLXC%2B3k5aAXDPsuVYJI51nKSjAhORJ%2FixJ%2BvG0X0yQqLZUK93aIPJOk05%2BTSbNE2ZgQwtYQBK7NPU6YiJAzQwLl4RMkZK2%2BeAxnQt41hrgykGu&X-Amz-Signature=e33411573a2be4c885ac22c75e6ece9260b40c822af3f67111df49f1f8d36fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
