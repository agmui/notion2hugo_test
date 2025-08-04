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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFNDYPRP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGndcg8ygWy4XeKFWI9zWTZXR%2Bb92wXkj9pzXNLA8ddoAiBYsAHhW02NZfgur6OtEGvGt%2BstFRXlbTVXYaKX5GFjRyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMiZPXWQz6845oqYThKtwDD37d6dA%2FrTutyr52CoBoGJhutehhsz3XeO7Qp6GDBti6afbl1dhdxG5Z74mVR9D0PG3qXc23XIMCcc2taTn%2FE0xWjR2tp%2BvgaF8LY35f3Oh%2FE20SqAmV2wUBaGpI0g6%2Bk32k%2Fu%2FCU9Vz04025zAc1ppZbLdGD0XR%2BqLOl%2F4O9CJDVz0dBOUYC%2BN0w4uIefbdZX90WrkjCb16ZyWerzvBAY42EreuajoCAZdy0epTfp4hEmzl%2BiLECK%2FIhQpxpdgd%2B5YIjmbQ1kMtjsXhbqIzZ604AiVWXUSSSDXe0%2BWVqBpb0KvXEtVgKYpwOwCX95ZnZpyz1tukgD01w%2FszMoy0pBaoyuAIvX7HoTgRkcTgFyKWiIEUExwToBxFydB5Qq2xv%2B5soJvn%2F5v%2FUqvtUDYc5g8b%2BIC8DvxiHmGdyPzbCXp9V24i9ITaSjG3FCtTixujH3p%2BfwIgLQXBim7VJGJtY4SGpjIUocGDjZgmjncps0ie170lV2rByhdJPxxFVBROP7R3Vkp6r1sfBXE%2BwJklvytDpnd8vAdmbm3fnJc00b5PsiIOBrwcDOqpP10mBAlSVJ%2BPypHZ2VdfF0hwpk%2F76MQEA4X5ExWLkAnC%2B0quc0Y%2FWfJgu2q3YAUmYpwwocDExAY6pgFHn1uk5amsbKrSeHhU2OSrhDgSulWoEi3XdQnmTm3th%2FPTjTsHszOYvHyG6dwMvu5BFfACUPKzOgN%2BOdezyvSROEx%2BDdSSJIgxMmh1bQDFuMcNVuPaQgq3WQ%2B00%2F2%2FbcmW%2FGNDWPu4QTWSu%2BjRpHHxa9oRDUoK%2FB%2FYCu9RWSpkvUrYlTfWSIRT7J2%2Bspm0C41ChFJKRAFb5YnPC6L6ZQlPCA04ephH&X-Amz-Signature=54bf6c11fda732b1d82411469444f030e792190a7e564a3b4e7ffc6bc156285e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
