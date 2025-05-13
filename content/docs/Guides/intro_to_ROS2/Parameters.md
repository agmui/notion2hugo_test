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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX45QI2A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDxEUXTww6rBEOwh48js5oWkv0vidFIFZhG0hLFy6xyywIgZkfhSEGkOxa%2FcaLWXOXGlr9cCbg2oi5uKM5FzrdIL2EqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGpZSk8Vq8I%2BuJ%2BCSrcA6Mwl327eHomviv9PZnnddhxjDIyyarsyJJOy2WphJdcm9goQ0%2FUKnFU7EhXlRvELiDRfF8a4XmlmvA%2FowX4c%2BfKu6KoL60Zkq%2BFCqUW2bH5u29bSSitPUbLu0ADU%2BE%2FaSUcpzVd5uZPMfKydZoB%2BrjVc6MPHnlLizhqqKPMovZbuLy4NoOkoxeHCZ1BNuQi8iPDF%2B5HviGwmVom6VcAwtAaL6nQQR%2FBmGOAbr1Djazpc%2B%2FQnMAPLCyRNixgxvE3XWaLMSuZVzVRY5pf2k3RmWnNGe0HlhYuK2i2Zb3grffdH62X%2BRx77mcPBOYFfD4Y9EhKaiiysXdNK7IXskl7izggp%2Bs8jUNug7v7RCQTpSmPAWpQaHCw1zO6FMhpInNz0abg71Cxj1f4%2FJukgIFrxdGp4vqXVIlf8YnuSEuP1UY0Ua%2F3aQAOe3%2BLRrVRPGMV%2BJ5sijipI%2FLZAKyvU8TftMXwjJYg9jwXpVvtocw%2F6kQRxdUNFjkdN%2F77300SB23wQs0TL0v2hhYa7HOmW6m%2B3UD2SUZ678ulHKzo7nfqBNqUgxA89qzgNEkuorXsZ0oWUyXchbTTHzJ5UG7t52OkM1Ab%2FFrwsT2IO6%2BQDGV60vqPuyH809C6%2Fk2V5NfKMLvbjcEGOqUBgQQkIANNrZ62wPSotmB3VV%2FtSg9un4koD%2F0dfoZfL3pNj70HN5gpvlDVAkBMttIG8sItGRMeP%2B8CiiE9JLSMQcTkCTTfK%2B1bi%2FvGysiRg%2B9QK6SXlyRaPoLLX6SfbRgjVImdOCfLaWFwOVMXasvPc9EITtiZ4NMK97P%2B85shrCicvpHLkIRYwEn2u%2FgiQhmezOrWMpMzYV7murt8E4%2BGV8XlHK72&X-Amz-Signature=aa62f41a2b5b2ae040f94af8e0d8e72ac1160185378b6390be2c4c7c4b0d1d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
