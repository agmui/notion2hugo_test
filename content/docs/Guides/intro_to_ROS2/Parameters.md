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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZYV7MD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi%2Bfi20o6sXGrt33b9GOp4gHAAiSNYyqXiVkeuZfWnvgIgAdkaUY86aLKvmsCXvF5H%2F72ja89T06BMh17oBSPV%2FbMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZOfT%2B8r1RA9m50KyrcA6T5PoZ0yjuprTyVAsCowuFHTALY01UEDSkqLxfJcvKDY%2BNqlKeJJrHQK1Il0unL0YIV5pKkP9tOXe%2Fu63B15PomWtLl%2BkLwqkA8luMMcyMFv7F0cRqlBGld7f%2FBv9I%2F2fp5Ozd34vv5ekJEPdeUNtjUBdAGmL1rhpEKMSU39K8OXygUX9ho3fodGAu6JAZLwI5VR%2FsFmSnRbECEzpDkhuKLmiWUFmeRZV0KAg7ZrJYcj2FkoMyIdiTNyOjQPL8kwiExBq%2Bup7T%2FsmIpYQX56kgirNMZ7nmt0iAogRZydMzl2%2BB1L2PWwEAhfk4Vnp%2FvWpAo%2BmTha3Y4UnaX9PzlmIeEJ3Y3rQqbyEKzOZbdgIhiqoyIdx6XHYEv4OsE42wOkNQPORKgO1nKsAM0q1Nidsu1JFjiPtRJpIhyEGiPX6%2Bnn3InjOgva1RMWzsPiJjRr%2Bb2t%2FWq1CXRL9hc76GdrAmovkPm6x%2BWUCFuRIcVw5ylAiChCMRNExmxoUfqFtQnKt3UhbGBmkdpKJlbX18be%2Bq3lQqQjV8Qu7G26Ia%2FtBUQj0tlWq%2BQ3s%2FdLNFVO7VBQCd%2FXCeEIeC0BhS65yqkcZ5%2FHIn37GpQ%2Ff%2B6K2Wc3MzkUYdENOOeS7K7AfXDMLiz1sIGOqUBGG1mnKpIRTCdJFNyZgt4ezhOf0F1eDdrIefVyBPNogtWS1mClctxcLiJ3FA5%2BE4NDwPCyDDC%2FH6VcgnW7UaX9FkMtmf%2FcREAIVOVQnl9zMapITaUjXhIkOCaps25A4BjvBbHfw%2ByJ7A3lBrjc43JPcNaFpRcqkA97NeEVPVTxBBcn3IzxivNYXhWImMUzONpGpPpmpxPtA3mmDrtWdBTNdmS%2FSQz&X-Amz-Signature=c5fa77c403e592161c878f001a10b330c6f427b948f34155ee5cbf89247703fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
