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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFER5MF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSsIqWRwk%2BmB1wA7sMsV8FOIhro4QkN5ahMiaAfdFfUQIhAMPdINvDpzJ3W1kwswNNKEyknFEVVYuHvXZ1pTqtXiRTKv8DCBgQABoMNjM3NDIzMTgzODA1Igyl4BBltVp%2FHOYkPe8q3APBkgyVOcHPoBQMd0n51dozPLvtasYLid%2BWcC5FGH7kF4S1L0Lu0KitsDjEyCfrpoF2CWldDvH3A87BqXzJ7cgmsWC17XmKBctUxJvrlcvjQTSmzwrWgFtQMHwKWcxdrROUlqnQUi0D8QtGSRGXZHOycpz%2F9%2BXKrTCj7xQt%2Bl%2FxXApmshFr1KwMrxMaMO59PJJHOmraxuoQ2XDblVe9YLyinHlQk08DjCFZyLxz9H9INMRBaXw17LfYajSpCrZpm89hd1CiOjyWC0XBZUK6JyYzWeR7vl1tki6qp22L45oFyWaKer%2F61NNVFwBvXls3u71UIUmDG%2FfKVoJLpc2RAIyc%2BtQB81yAzeW2LS9w2rvopYAFRGvwZ51SCTuZdD8LZR8ZF2XxfUL4Ed%2FAHrgYZ%2FX3lHXvWBZGD%2BzQcNCmC79HPcFiNoSDd9q7Sl0B3YA9DICdXjG5G%2FZRB5uvxWr2rD54INqHtwVyZwicD0k1gVdYOGTZGkdpTRL%2BwYnoLTDzYOgf55kiWtMY4fW3ZRxrxO1%2BKFnsCPMmhCC0cfMcUmLgXK0BjdKPwglVaUrUkeqni%2BjJ5A7NH%2FFpyI23kVA4mV6m7lJI6JwqM%2BA%2BkTAxt82kNB0XhOwDJVaqy1k2nTCcls%2FDBjqkAUm6Txkdsy5V1905AmOQMQInxoWoA3nckBXWK2sL%2F4Y7UES7ZgAuPpqbaT%2FIrsqkPQ%2FvHEVkohXrDTXmy6fYJNeHUW%2BUW%2Fqd9rVNbOW9HFVYuYlHnpPVxCZIE%2Fc4LQ97d65m8rtSWPbtmuD0n3OLbOoGJ8Ye62TnyoxvKWwnOowWfdS9Z4lLGP2EnuApxbqGnZMgt5r5AJJ5HA2wUnlyXwwlOEM7&X-Amz-Signature=b930298e5440efc959989c593b11762c3c358a9e353c6c5a1be6cc10e9e96397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
