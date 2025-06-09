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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7YS4DZK%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrw403ONb1D9DfEvWhBtWB8LMYpjt7KGwR6LrI%2F0m8bAiBqVPoA%2FHhJwMv%2BkZSqKV3idTXZN7PZGPm38sTNRrJMiCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYmX2dyhEAyTjAQ9WKtwDsz5Vh1qcitkyVFsEyeKrL3BSU0G%2BUFE7n%2BgOfdMeu6PjQqkG9b5xNrR1xSmH8r8wiZ1t%2Fr3%2BG%2Fu1zQceP%2BRuONtb94oDt64E4JYet53qHKphYA5YIIa8SWo2o4hfyTmAlaJExBiM2nZoFM%2BjcvnY43am6MArnYqYweB%2B4IWNlkkj1Uudu9Zhq3tfwuzO0Qib6P%2FOi8UVYAKsW0wrJxntuAcW7dmaxXqlmz2RCDpZlEdpGn1QnHDYxJI4rOqKoHYDHqf25ClB6VxJhaZZhthlEioFFIS%2BwZkvHRfBs%2BMGNTZiUBUId49n9qf0HK%2BOlwebKXreACDLuuEz7JiiJzglxKY2qRRZR9nEXw%2FVOdvhYnYgyySFmg7u1EuMXYTxL2kj1SL16SJs6HvHTgXtC1h4%2FCBDnUSiDNIhF66xrFlTrwEkPgULKwLD9j8b%2FRiUabKkHNfw4hm2%2B%2F8m8W4%2F%2BpcRuRs41QHTIcnn08H16MnxxP03AIDgwhURgCLOujnbAfE0ntMj0CIDOT8E4RqRM8I9ILc5NWPF6SX1WmgrOvht076unOWmDzJUCAO8mqc414yzGE8DwS9Eg7La45jGYC%2B4BWy02PIaTGCSV1bwdn8jPHScnb98kZ1j5AnwO4IwupqdwgY6pgGeVdd4vq8U%2B3Cc5WEYA5KQNbvmN1wkgkqea8tp33fQTFwuwshNHayNwfjV5Ktnw57Gic0FVmdupdDjf0YCUWHQaapt%2Fj2BIfjfHy7fu2U8OjEGplbvpxnLp%2FVnIbsUVQzAX9migXavFqHZWuEgeSblQutR0hn%2FUrA0uFxHeWe%2FsIUC6xUfEVeLHHAsIKSkhWSwFNF23SRWG6HY4rfbYKYHFs7xVeWH&X-Amz-Signature=78fa679c257650911a23cf66230f50c879be9437ce588dc959d2e8f96ecd6219&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
