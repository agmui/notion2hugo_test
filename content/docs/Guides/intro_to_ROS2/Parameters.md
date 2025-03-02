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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QIPWYOG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0LHebEA4FM%2BxUeQgh5ZcOrjdpVlpKfTcKLHwMq%2BSplAIhALs051ezgFjb2nyfOaG%2BE765Lwa1cMZgUCj4tEnerVEZKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu%2FUJXg%2FUpj8XigQUq3ANBX%2FrTwpNQmFSGRU4KMxJl%2Fjq%2Be%2FbHXzJTADr%2BUf4SyGcYB%2Bc52YOj1BH84o4PPCJ5GkwtF%2Bh6VRAnOc6gYr%2FLq56lbCxUmq7ooWHDhviL7GZa%2FozLd9pFLHc4xse2H45qp%2BSwoaYF5NGNAtw3gJ0h%2FGuWC02Ec%2FO1XzJ7UrgoyZagWtpKKWwHFDJHZWrVn3HW8cR4gwYIWu54wRjRWVyjPqEiAKsfSofHoal%2BFHoM%2BnZrkJWJguHbkHoDmKycq6SZ0jfxvCG5pu%2F%2BcAQYfJEf4oNrJQLFpdQosXD7r7c2cKGlM5n4gmz%2Bb2%2B3s%2FXcaIkjmOefyZBNZZl2dz09lAvDmTo9ah8%2Fjjt0Oq2CHipSnPV67gBwI783eEIxp7vXAGVYHo7692c8U1VH51RdcMu70TQSKgZDtUL8ny9Tx2TFX5rL2XrLlAXNLE%2FIQrOD1ZGzZNW02mY7fsz%2BEnnUlf4B4Mvp5ko41zXk3cX68Owjh%2BgcNOCkESpASVJuHwaTwukJGMWFyK%2FsL%2F%2B8D4NTVM6OE5VVg%2BD4QeCsV0E4GjeKJYcZBYTxnQMgJ1vmrYfsj7iWzwfZEudnPHpRb0%2FggclACGGyX8fhSGBouy7ugL%2FMFDRxNBYTzHRXmpGL8TDBnZK%2BBjqkAdijKYnOlykXzcy4YsDwqXyMcKVz90dYbOP74D9c3ksdXI6tyi6r4odt7ixMr4y4ayvzPTavQrmrbSodGtMLH47jLs8sUp%2BnrhetPud%2BWOb%2FMBXqUr%2FeyeeouZB8BMcxGzTX9cT8%2BM0WpU10a8GpqEtG15FJnOY3NUjZeNQHRftH82D35%2BvWwc2aLDPrqShhCFum3TIlW%2FZe4JS%2BtgBJI%2FyhsqxU&X-Amz-Signature=7030ab769aba57bcbf7c4b8ec89954cf3fc4045df6f7251bc3be4a9c1d6d70a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
