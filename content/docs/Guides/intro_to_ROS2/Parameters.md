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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTRE5SR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFqoSJg7aVHtlvpNMvL3wv3j6HhKYzkBgisZbpx4eT%2FrAiAv04EGodFk%2FcHKqEMmUr2gvz1nvL6hrf9bpCTfDyIGDSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMbmqNod5B6LVPOw69KtwDiCPoQTxsq7pg5McV6754SWNNvNuSdlhxZRdi6fGuQfi9lGFc%2FjDYYs7zLQ9zY765DZuO9nOPcq%2Fc4ByIPAwoGxOlLpIOsv5a2agXOHScDI%2B9vAwpxjcupkzXC7zDmlEk8i45FQB2kjhiPgzLnbffq%2Byg878EFRPmEpJ%2FHxhiDIFdH6YO3zmwMnBJ25Vti%2FaCsYiU43briNrdtPduikwslOwE5NK1ehn5Wz1mvhByBABfIpdg6JNPr3ssBw29jg%2FM754OKB%2B5MPLBLWCB%2BK5LJSPtYUY36ueDLs7MJa6GngaYBKnJHoJEWdh0rZ6IeQ0APwh%2FFKhL76SDT1TUpgn2kovbFKkcX3E%2B13DN7EI8B1Y%2BDfj4Sz8Szc4XHFAW5TCC6DqcC2l6B%2Fnuqs%2FOhba6RVa3cbdTBlDHavyvstZDFQzQxsbe%2FfgSJQ9muEJYVYoTT5jj8D%2Fw4TRgb8T7Ak81oNJsFarZxLPmehpSATBgNPINlhffrXIRkQX6NQz8xdH61LS3QwxzynKWIVhiW4LANSLBlRIzRI8oemDqVyAzR0WnhGolrN3mMnIP0KgXpmw%2F3dwHXMnGF4qAY1dtcDT9pPvO2Csw14evetBmbW16KGDpSXl52Wls9NKReJsw2pO0wgY6pgFQFXqMa%2FKoYG1HDBC5ir%2BDymPoIsDRBsJsa31HNdkd%2BsJgY3f7ALTFUryH8jAt4kI9B8s%2Fxsv0l4aS0g%2F%2BFHvSLg%2FKDkAmP8U6Y%2BdU6X6SEDFxqvys0igYZdHDLLutDBakWAo5jSqsdqmly1mCZ6fctvVYTClEvlfIw9FN9NCAOJGkf66U%2BJZhRf9mTxuMyv8I%2Bx5wEFCL4rvU2RqXomGuejN%2Flr8C&X-Amz-Signature=ce341434072bef26e826bfa9d02be9087e214a0309c6d69b29e3e6830b83a4bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
