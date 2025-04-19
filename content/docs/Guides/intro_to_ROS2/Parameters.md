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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634HYXGLU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAlPAvd7RCFFGZT4jFSqrDfnZ508xTTaF2Oc0KiS1TgzAiAV8Q84ByAAc1F9xUrgguWyttN6gh0ZHi6lzHgSW4pL5SqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz1rpJXhGH%2FBu4JftKtwDSurB7Emls%2FFbWw1Xz%2BbG3gGeUyUiM%2FnGco2ERzslpLWPrylyfvST%2FdhZBh4l11XY%2BtXiS8Dq4tIkMOS2qf3d1EY1WrcKalBCZj%2BCrJVJmp1in5%2FB9zsYFIpONpF93v%2FjKoMWC2Vjlc3Ot8%2F0yAkfUstx4Pt8k%2BTNA64wVnWcbCQ6lQmyr4FdpCqumHuGHyty9DWMRvy7LsYKPhzMua9OsozZh3DE%2BZSaXZpb6QYKIEMqUn%2FdPn8xnK54EA9T%2FDhYbxF6h57EBg%2BPJedByz2xNPAoNX0widHvDYyseLcuuwFDjrW9oIeIxm46UIn%2BU74BZ8QWQn%2FjWAZLm8S4UeSMpDqoI6GhNQTnrHXbPWGR9RRbRRpiN7w4RFOyAPNaw66wK9YyOIX37pzXYKMpArSOgseUjyinp3SGbIJ2sD0DDaE50rL4mwiT%2FdF6IBYjrPcfTitNG2YDsjUVvQZg0gGzsIOn0xHJa9kDQ3cA4snMg%2FzvqGOUwINHbDwH9k%2FaF2wp1bUi6G7jdSz9hWJG8y8ydKmjFbxWz7VeyTDlToPgmZ1HAeDigHluCiTmmABQtso1FN3fIOI9tjOEwKdTZR%2BFkM4JO0jaopTUXAa%2BLtM0tQw%2BnYd3G68MXRV00y4wr5%2BQwAY6pgHo89OL5CI6xfCkeskBpna7lv%2Bk5mP5G47gMcOgqS8y%2F2WKoC0vexUj3GpESax2iL17B0COVb3iaKo8KzhvHG%2B%2F8tEwIPfb1NV6u7vak2ue43MPeuL7MVv%2F0UZ2CVkISXLw9OWdCu%2FpzQBLKNYxSzO3Snl9PiQtuh%2B%2FG38808RWis2PFgp8a8kwaX7iT1MIwf64ubDEJ9ZCR%2F2t17gHQpQpeBINLypA&X-Amz-Signature=022465e60281bab8f6589310a32644a272583bcbd1d63da517d9a4e641801430&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
