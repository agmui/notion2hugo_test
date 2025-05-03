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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMAMADLE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDaVrhE7ocmHnJAeoHCqiKU9xLVervD%2FDV7plDKZyJ4RwIhALhCD%2FKis0uwQHzu3dzStC%2FR3BaW6%2FXSsnTLeRNgTQUQKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNzErLmH6VA7%2F86RIq3AOwnunfk%2FtvvH1gkBjEox%2BuMlCN%2FXJLjqs1xwPL0HUIoA7TcoQKTBnxSctTmLD%2FHRIYYbj1HZjSnOkFc%2B8hioZ87hSm6QR6h301BNkSFZOxggKnyNEBw%2FVTXhfAPg8i4bzmKdgjVF32vi5aQUJ5uvBIFJUhxDHIh2Xne%2BE1%2BdlX%2Bey9tibzwjvAFZD22nbleRwuZSRFMsHMiN57fRXORjWVgsqEt8xgZwIjAUfgrsmILzw1acneT1cQ4KFQiDa1Itc%2BcapCyFwsO%2FG%2F%2FFh5KlnlV0QIgtd4IMCyu6qOX6tNPuUeBMZDF%2F8%2BKk8APdBJwn0BF%2F7VOPmOYFfSeXdSIucXIK701TwK4K5DEZokfyADZWgTEOahoGLl4tLb4%2BA8k51wmS1818YZT54S4U60nUw8g7MfgT5fQqyT%2FL%2Bje2MQHJBWE8xgPPDk3iBCiCziJRCOYuTGnz%2FnAziefnpNy42Arhc3tX%2FbM7P8zLiPH1fw%2FdJfUhHqZp9BZOlk745JUcv21nxiugRP0uZpzfJnh12KZJey75iO8MPwgAMB8r2mCkcJWcHhMNuDfqzJzZPB7c5NaK4xiozLSV9UG%2BeHCJZT0FcUHT9UFfIDwtbw8zire2TuZgQ26pcoT5VW0DDaoNfABjqkAY4oHJxN2DWZ%2BANnMqPVRymKS8Jdr%2BTAR9hePcpiesUATAHMvl310TfBqQipm%2FS2gtchy4xvKevjmNX7Er19fiG1Xwj2ZXuIXgwPQCALTledr%2BRJaQtzepYZOmdcNBciv0vhf0nvUAh2arLo5B7m0ILkRXOBOA86%2FakCQGen9IdaotxI06vAKenswy7n2OqfOsacSTm06TQLxNNVcAWa0YoSVP8e&X-Amz-Signature=39e6bd3452ada1350714b42fa0cd355d688f67c9f4435fb20c7afe824534c65b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
