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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL7VARLH%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIE7w9iRNKgQUDm%2FV%2BmiH7VZRRACz38Q6HCTL51Wb8vUvAiA%2BO3MpU%2BHoGoFFBenzMvAGmR4fCrE9K%2BDmsDOi4jwXCCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpaagUZt0Ie1QvXNkKtwD0OUdKkkVcwi2D7fNr5nU4zFmcQva%2Bw5MKMsQqpfHBYWRtuBQeVQ%2FnFITQNDtrh7gDlXUxeLqIlkyZck0KPL2O%2F8%2BUe%2FW0Gbe25hVld976hCFUSiDmg0b3W8PwI0hL%2FRdUj40Gcr4VYuPkTl9aVZyZHKF8z19LI%2Bzx%2B9FC7P1WWeDnY%2FNvZ1F%2FQv5Bc0XqxXPS3zmV7xTnw7vlkSBfrcwIEtUPkVg5ONKdgsTcmnF3dWeotqhMOaMcDxR3lprCOGVVwgDJx691G1nJ1I7ygwoV3abpOJU%2Bm4Zy1IZDZAVPZO6fPfcLV82jmKlLD1QozaSMOYnTOto7BUCggbJ%2BU5RkY%2BelzMr5LsGURtxHmmQBtF7Pz2I5ZR7vg0YJYYWmb9QRpTXNPXXoUI6zsp4TWLSoX2ps96hA8HwLa%2FbTdhoeV4EZuYC2BXhr7x6VTYXZxoxSDN6LMI4iQ86Y9hIk3JzR3yZ%2FdTXcav44mnIEGOWRz0m5Mbh1O6%2FsKnKSmMJ6Q6t1KQXNAbFOtjst9v4gbRYQ91DXE2n%2BbB7pT3RZ%2FmNyylxyG6ZBQnNYRIaOvLc7KhN3g6Jkdfv%2Fk0tHZ8dctPnGw0n0%2BEvn929fCMBATT%2Bh4YQkL5U0204zfOQuKQw6qelvwY6pgE2Zmr1oMWNPrOxi0OtvJBLvlTUtobVuWdiK3I8MeG0pGOTAC76x6jQvEap9bnQktWGmfqR3Mqk%2BFAxBj2rQSObTzNDArqVVtByX54H00J8YdvL20%2BAlEaiQzZ10FVH8YVS2wSl6sYPseKeqr0Sbbl6QW7%2FluIXXH%2BMLhy3TtuEWM1SI4Z7PQ%2BdsZIeGx00Kv9NUyHx79D9WGlaeVOwa5VRaPgocCZ4&X-Amz-Signature=18f4ef3c932292410d22eeb64e3848d82e01afe1a575a5136cd306d668d14fac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
