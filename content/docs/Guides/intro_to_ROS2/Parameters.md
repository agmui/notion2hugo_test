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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QTJ5N3%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAgrvsDG9wlP578r5Fx7bNongDxjHuqE5nvUeezy8zg6AiBzpluCdcCXfBE7AQeyKJuDlcUSE9ySqEH4Se2ImuEiNir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM5oC63gG8eeiYGWjPKtwDnjB7BJfYT0TJpBLnIObpAA1PWuJBu2kFeXPX1nmRNEU8JSZxgW34P9qwkQY0uuv%2BIDpG1EP1u9goSMAz8pR9kuvz5smhYBIGby3Dp3y1SZUc6oV7VcfW%2Bstm%2BELwhSchA%2FL%2BI4SCHEUDuc8MyzaWXky8Pd742tSRDL4Wp6yHobrcTfyuYGWMJSdg%2FY%2B9seoeoPWQnziXaMJX4QWO0BlmE%2Fg4lNKBsXZLr%2BW%2BQBKKbsdbmmz088fel4fkUBjtzg%2BPvg5uJmHtVgIbXK9uoU%2FsD5lybIwQ7NfDuFkpMTqwcDNbT5tziHttdCICa6STCxj%2BNeEm8d6S7%2BQ0SUMUYt%2BK6zbN3Ol8JTb7TpW1TqxW7h9w79yj7SAr30QtCl507v6B%2B1I2JVup1kack%2Bjg5P4FOf8ki46Foqh%2FXxvzutBO0xOh1wxFHW7gBpTCbTEJglkRzvaOJLdgHVS%2FDej4uEXp2T7n11TUqbQbTdiRaMYVpR1FgaceBK7bhAx1GywHilbbljrBcmRw8xoPY6aTuQAe%2FD4jAyfaXaHqWHBFStLzxnDwF8BnG4eq%2B%2FcHJmlYRO67fYKDB2UPMaP6jETOXmi%2FJblsmFwHZoqTfWdOaT6McwQ6Y6AytGPylO3QdCYwqOeV0wY6pgFdlixXd2J%2FhOEv0zkE3ZxJdlTTCD9aR0TC7OiMLnbM6%2FrbjsiTfvRdYHOarN%2BnkzIsUv148G4JQ6ZGFbw510E3LJXCqG4KBIdLijCUuVrjCx8Ca6XMQycKKnz80sGTnU1spBq1aTgipIvoLIfeo3jH8744Onb0SFmvXTKWU%2FLMTDdCVcrEqQp9ve83o0P3slyHhD4E6Jha9DwTKxrX2gOS05lw%2BekQ&X-Amz-Signature=a13a12891132f4658be3a02799749c12329d89373aceaea63825d286628e16d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
