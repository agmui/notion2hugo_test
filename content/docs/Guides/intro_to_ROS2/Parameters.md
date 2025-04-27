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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIGU43M%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcGk8t61j0m8%2BWOhMJp8WIAQj5CxMXooGBitEoj0aL5QIgbqYatoYskF%2Fs8tugX%2BVhgafMMHSM56BRmsfb%2FhWjRscq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLtxi6Dkb%2BtGOVWJ%2BSrcA%2BH8dqqezD6FM38ncVuoeheVtXFbE84WKw6819UrX%2Bn%2FJNHukn2iKeuOGawrif0JhyhdoOs8YQ2y01f7JhP1fkEt1Dyb9xD29RX7mgjCOsrHitD5vABryfu9NIiotOkkKDCCABmgzC1yUrtm1K2dy4vRmcoZ8FyRKdDe%2FbwspPWC5WQ9Cmqpxm4AH25tu33aMCBeDR%2FB8t%2F%2BCdfj5NBANB0FwACwL01rBI8MqQJKO%2BOYFQgKB9bb1ZxsqZUv5azDnOnZj9Ib72UkgdJCgk81N6rdcLRUrvdAog2O7C6gTDlwfuN2V3TXGPQHDJ1KRr7lS2zFR3QEdItu1rJYUIDCN1tK5eVE%2FL6TZpGoxt0bzz6mmZT4EpY0UZNF%2F5QjqIY8yYK1Rm%2B7%2BAkBDxVgsADZM3b0%2Fx66tR%2Fzl0bNUkRTu1mU6FxIyMQ0oIuQ1skYRJer7rSwIhE8QlvndjN2bTlM5oNdDz1wWkiecd0VUni1gzvmnF3K1HcIkulja5g9xTsespr%2FDUDbi7pBhmWDymk1D7z6t0XuHdejGnaZEOA961LyKuqaJKsIXdXOrxgcdrOgxngIeRa1A3BmCIQkxiZVU00Q6vvo9nnlgo0NLWK6JKBTN3v4BKp0HpCJzff7MJOMuMAGOqUBiahY77khCcCtXSXAaJDpJA296O2nHD2b%2F4Mgl1skEbrRcy8%2Fo90R54%2BibEIHAhBqJfzI2oLtA1lFof9%2FLVaalwLGhC12WQED%2FBdNKVEbGGZbiqCdaW20Ge7Gyx2mtK9dltkX1mrw4e7GimSws6awY5OPcle0t8ByViT%2Bg4lucWjxpJWX0GzcDYH7pmTOz6xhjihuQSjLkhROttbC0Mu3lyI2%2BYNq&X-Amz-Signature=05eca72f28dc6958090f3a421d21ec7f2b85c97af3473049f6d00ad728b52588&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
