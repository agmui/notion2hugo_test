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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWKANHN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQOzGbYErJZ2uAs8XM1osYaXO626JGxQKu%2B4MvKJ023AIhAOtx6e8%2B6W5jpgdJKGY6PHG5maHSVIMFDICVX3MJ%2Bsz4KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuY7gN1OlBWAqbjO0q3AN19h9WCbWo6ZNE8t6jXSedTCY7v8UqqZA6TV3cPjrF5aMI8VGEBOzigXmNLMablNS%2FPl6O5WsEun4GtHg4%2BiLkZmcRD4OtmBoRRQ0mGBbtGt0Goq7aSNByaDfLs0yht9T%2FWBfcuBKs8hiMngd1P5X5sAsidMjXJbpmDRrfrrf0FkjdeVtHhA9O2MvP313SNyIdSpVrX87vD8JDyPxWsKR%2B6MaONNM3XVGaQuhBMpYV5bLvk7AhhEEeNY3G9EyCuDpjnUWF31McDtr%2Bmt%2FCETt3ESKtldcByGXGkXPi75XtLvyy3xgg9EdK8SDnniy9bPsx5T9MMzZIgWkfQYJH45doxJZvYSFxkpt8sklYqnq9%2BVyUU6e%2Bxcm4RYGGZCAUem9ZTx8BvF9lmL%2FaWq6q5IibPwTzT0SEwc4cUkMwRummeoEzh4%2FvlxeUz%2FI5C9XnW4SuRZzTizA%2B0VNI%2BAk6BSIp0GXeyyvTmOWV7fhrOOjKDJdhnR20V8SEg8cVI4Vc0%2B1B2b30du6MCAPEOMrMcdmW5qfW8Z7zgDlt51b8Td1qbtkPr36xRozQu%2Fl2nE0CcT1PwCFivJydWHOn%2FQ6geKMSuaHkAUJM2v4fGk5QMz0pNc099uscBkIgkjUqAjCb686%2BBjqkAdettSDnzQRRTN1M3iTa%2FmBiOgqtjSjt%2Fa16Ng7mB2QIeYaOlkVCXvxi1AMf4Zq66wInDZ1COAx%2F%2FKDcqBacImWOZIkjlCXho7ogXPr4u8A5HydS53iKe7UMxrOlEyp%2F6VjUWPkBG1tjjAjZK06qdML4qIeaQMUBlE0isnIoqwpcr73tzGLxEMU3jjnoo96lRhc%2FlDXHs2Vp6hmOpoOi4kYxxU6C&X-Amz-Signature=cdad32bc662c76b90522f665ffb5aca2e001643c1079bf0b58271112b0906258&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
