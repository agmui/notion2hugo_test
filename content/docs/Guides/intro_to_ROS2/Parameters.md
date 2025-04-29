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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYBXT3XW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArEPdn5cch3q265Aa0pHEIBAzBBfpBYxMzCZ%2FQFRf7SAiBX%2BFNFbvg1AUFxrOBsYZYv07TKQNjBRQkGVRa6jf7ouCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtcmdHmH3nCwH6GITKtwD6CFgIaDq0uHS6grul6cQ%2Fpm6ktbHSvRcnNbTq3j43e%2FBomElO58ch98BGkx30lhi0M69Y4WZUA6ebNfOgdA%2BWVMq8yc3L89pBTyUPBAlWSBFnM35rJcpYQAuh8Bk54wrbeUVM2zBpZZ2uPcrgqkFwLLOYw6dOYo9RW7QHJ9en6L%2BEUSlLFfJ6MoMMIocexsh3wl1YUMhwAB%2FrZXFQjdk3TYZOC%2BHtomRDZxgt7VjYVRZpeM6CbzBSj85Qbu3lDHyi5xMkRgvSAVxPdeo7F79AaGCbv2ntmf8GWQHE3CiAvlnSHjwXCHfeEyo7BFo9DHroK6WZaPpI4yW6iQkIDmoZnuH%2B7xHOGN4md7%2BDJ5WTctJmbs8qPRWwxzmfYpHxMA4XKbcqgFOuc5%2F%2F%2BpQ4%2FJhPoFqt7Qwmz9WT%2FpO5CBTNUtO2AnMaRoKR07OxBMoKsBuV6gC1xN4t8RUnByNwUbmGZsyTgDi5v3dabSkzP63SsN5hP2QVhg%2Bdn617G5EEpEye7D%2Fu7NhIYATnDoO1lRAzkoGyklBuJMpG9oDvQehs2hvlDPqhv0MMB3%2B%2BnbjwGUe%2F%2Bk1stqtni7lQ%2ByKz%2FNfk2Ivsvcp0Dz7OtDvdRBFOWKmtfQmOKUQ%2B%2FRYMHgw7afCwAY6pgEZQfDDFzTXX1L7Ol3Qb9v7LfHQrk%2Fq5M1T6YlcbOb9RBym3utGI6iOX2BXW%2F0%2BjvTCK86NGpy5EbqXz3GcL%2FZSBi98apZi13lcq9hfTAQsHg9OfybolSprToZh6QEog3jV26i0juA3swNMNwHtvAx%2F1xqCQhbLC%2F4g2LGjiYhr%2FNYKqC1f%2BKRZvuN50Fe6aerO5NtT4cW8EvBewejH1sX74o%2FH5bLu&X-Amz-Signature=944179dd36a35aa5d717c17619341b8a32e5d3c5e9bb5bd6993d27ed978c5e62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
