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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HXEMXH%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCnNLq57og8Os885ZyVIqYF8LgUQCbs8QW%2FBxFU9Yx4BAIgdUzmUGOz3ZtPk98hBGzusIUYyv%2FBSLIFaR787zKOLCQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNevlLSRphuSJoShrSrcA0mn4cR9ImLIAuC9Qvd9ezcTc7cxnxqUlIEeYlh7yoNPRT%2BNC3fqli1VWLWIOHF2804SiF%2BKd6U%2BmINvQ597ZMNFYkMB2F5zuExje5sf%2BYRcmVLuibUyYdN2Awbjdx%2BidgFjYnEr1BR3M4rcddpnhqkm6dCOoaBgzWvdICCL2LxRmiCQaykE0RcYUHah3lCuhe4sQD9jYaNZzg8ULu0LeTe6df%2F9NF0sT5X8p6ovRagLp6Ziox2OYS%2FNsN6vjyt2pPxV52XiN2kpYyIHXwGZhqW8BhtgVXsGU%2B7%2FZkpmiKzKs64BusuCm5NW9xl3BBm78O%2BcdeB0X4Oe9VRr%2FhIy%2FkO%2FhNAMRF7P%2Bhc8bxBxfHd1vow%2FDl5mKNGjkdBBS31HSSfXyRUAWe6PAWwjkZbSuoiA1pnMOm6j%2BbP999qy35nfjW%2FDd3RRkuHBk3IfWDp1nDVOxfe89zrHRR5ckPx4E9pdzXb16g19F2yT7leJQdTr5NrUF1hxjwXLaCGw5jgwPnJtWnKyZRhKhFgQd7f7SHOUOb0zxjs6K1ij%2BoFEqfY0Rzt1he8VWUpStMnm%2FQYDHKQk%2Bz1vkutE3yelTuceRKSY1Xu%2FkiIbtsDaZ7ZjmEhmrSuvR5iIwuvUP%2F0UMNrK478GOqUBsFvetcqomK5A3h3JF3IaYolxhCVHTPgqscgQsnh3su07suJh85hYy5Dlk9OnjDCCye7RULuk30P6W%2FcJU0CLlKYD3%2F%2FiYg063mIwT912FzE2%2BVLVxRmdy%2BvaEOtLZ6qIdUnDCm%2Bxdb6Fg%2F%2BLro879NB8Ld70UriIHFm%2BpwFvy%2Fvk3s3mFh%2FjO%2F2k%2FAnxx9dFM31loZfnTiUgUjF4u4KMOnK%2BWqeN&X-Amz-Signature=20d58c3b4f1c995c14effe52b7134035205a97b8b7c114e95c77d9551bf143dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
