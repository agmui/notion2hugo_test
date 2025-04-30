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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FXGU6TR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHTvu8R70CUtXNOM5DD1prZPIrf2lA8KSsAvjQJ7APgvAiEAwOxy4MFZprZPiT79anqMkY8G731Dhgv9OIdRi6bycJgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeHxyTUuRcRXJnJ5CrcA1BAKjNMg2g3rIjYHK76rWyfCXfAi3KbktiBak42EESpTeba5yKtTj5Ym5BLktWB5q1MBlr0Iyb98c7JiaLSyAH43UvD8p2SMbbvCirGhSIHLuBnLIGzosI7U5TAaJDh5O0w3FuO0T2RTPZDAnqBbEISyjiqRDnIUfNwc%2BRQwFQ0C4qH2qflJJ3m9V1IW%2Fp5SdEKwTH3DS5tFMhU43Qb16lcPxuLkwVw5fAf0anFJYqXsM6ofa8CUFNDIp4AQZFiar%2BREnV5HHEWzMS1N6wGbWOq8YROa%2B1qHnq3X9nqZzXMgwKcTAWnQYi7ISqqBi%2Fux6CEbcGtw7So4s7MpG5vaDpmdKeM5C%2F01XGBrMptlDEbV54o%2BilQ84mQTql%2B9ioisKrp2h3yGDLPVbFiScVtUOthuukRNEHJQgYRLbCHRQOFO6yhWnHYyjDV%2F0kmQm8GpGSJ%2BRweH9wEaBGHvrYRooJF2m1Yn3iXEPDbvulI%2B3LZo5U4ioiJ829tStS%2FYmewdbir7eb6fVnWR4qdc0Xu0Pt54Fewhqq7Q7YhVSmgdStIADDx%2BcP5vf6QsZmqLvAtlYlYa6c07PwknAYbwGVKprjJy2eEAXUjE4dhFgLkhucqLszr%2BMBsLaIi6R0SMKSHxsAGOqUB70COGiMlMENNCZRtIeWJWKbC7MmB%2BCuKLKkur0nvPVq0LWwUb0L0Iy5e7EaRMt%2BErtDRGM%2FRt91nYclTr5tMo75w7nDyIhq6ySiwBIMe7n6Du%2FxYIHfm7vaW2CwWkU96Xf10%2FFCLXhkT3pN3EOSoBJK9L2k9aSvK5gIzQLBxO%2B02v8pVh9l%2BeNjzcGZDCS526%2BnyeZTlfbg8yUWe7RDBW41%2BqzFj&X-Amz-Signature=372d424f3db306ba1ea7d3b8607a3e405a6c7bc6e10652d1d4ff3159c21b0ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
