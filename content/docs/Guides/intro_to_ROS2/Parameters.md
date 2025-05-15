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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5WE5OAC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIC2R97f0Q0tnm5NIECGytet8PGBYQpdQrsHDxsD96YHwAiBOf2ooqr0UeVqrd7epC%2FjmQOYyfDm9BtbhS67I454B3Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMy4YtU%2BP9qSSTvjioKtwD%2FSkenvZARKHCSV5Jb%2Bry%2BYzp0h3OEWNgY7SD7Xr2B1aYz88aTvGtnzmTKxhuJQoz1tGj%2Bi18CO6kPdSbSK7aFQiluwGL3nlXzJ6twYDJkuEtvorbCpaU1o5lerGAx5G4YbhTFQoWkl8lwhmw9Y5QPRQePJ0nKOQSNwFiQxrEvNn%2Fp7H170kIBAONHEJBZ367WxHEtLtfc%2F4Zc%2FRVIR%2BxtK2ekFGOkFAzKF%2BSNuioekhxo6a3Lrd3w8BWscA8qdFZcT3yO%2FmTLlwzQuYE4beRNB2gA004y2AomCx2CPMXnn6GxSpozDv4UkFODljx0C0W%2FB0%2FNNlVa6W%2F3hEWx9sAwx39BF4NF9qMuHCAkyGF3gkebmNma9kntk5ZZmnzAo3nGY66jSVqrUzjqloX%2BWDRY5glS7BnWoBlFTcEf6eF3Mm06Cz2sAUyM7Yc46sk9NTk0nQVvXBqc1e76xBFAORkzMVMimMsCOLbpx4yQhMpHjHP90D1izKlrkPLc3f%2BVjlGP8IFL4xvSyzlqlE6rh%2FQlTgiyCeCazOKLgkbCXqm0KUcOE%2BvBiUjYo33d60ygIypW4aqpB8%2BvtdeTCprJJkbkeQVEPFzbyN3kPY2OaImrlKqKuTkFU3w2e3se2cw9aCXwQY6pgFpqVCs0Up7t46e%2B5FBEWmT11S7PhbFDj%2FbzwtKEnmIK2fsKScZZzWj7S9NFWE%2BW9VLU2OceTRhiTwa4p%2Futh%2B%2FInmTsMWKW%2FMUgI3Wcul00l6MaLDYP5Zhm%2BM%2BF7h8ZliCVY%2BnrtjPOVRcFo15YHQySfLF%2F8v19HFEganZ064%2BX9Us%2FkXNGqxHz9aDFBEjeShzYWKSutA2yibcwkqNr8DWzO14YVna&X-Amz-Signature=46c2df852605c89f539a6b651a323ff362ec49a005d56176ed47a268a3811836&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
