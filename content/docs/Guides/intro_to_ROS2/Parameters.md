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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTHNFSF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQC7cJpemFnZAkfkI1uSNGxlZQYWm6ls9SVL90P4k%2B6zAgIgcGSXNgTLtvvlDRyxzcljHOPCzxdVlnTPNqcAX09cwJEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeIn4dYs43vvPeQZSrcAyXit0W1u8vhsq27V1mY%2Fycje%2FXdTIPJN2af6PWBkfpOutKgdFTVu5xW0yjCGDUW7isCB7opU6jsg%2BmSZ%2FOeQzRficIcA0pRpSQi3ihrM6oxcSa%2B1%2B%2F2TS3ebXw7dWFVHf3hmjCW7nNwdnuul%2BHcNp5df1BBw5WeyhIKQuTzF69kNGUTHt9gHPsCcodUVvZuJOpMX%2Bzu%2FHT9QwqGTWAyOXRTFA1ViuBZFqc%2FrYpSdLTfOrEVU5raFpcCSop%2FbIw5KNHHdoGvmRxrnl%2BD4%2B7IEmI99NaNaOdGO16lAkaChOEN5wn3vNusB8RD6zcC%2FBgWT2W4TFmBAMkEKZFPde%2B8aea7%2BXTM5EPabVkYseKtUVRB4dzgBbuur6r%2FyhF023aKtXwovtzZqjgPzWHRC0uKsjy26JJZo6joL7M4w%2BCdqQuP9qai6gtwZkwOt7b%2BH%2BitzRoNRLeRvGckJxrYnPOiVgm5a71FQIs%2BsQitNXWQR%2B8Ki5%2FqU3P8MdcL7nAS5JyHVUdn3D4Zv43dlf82eP7VSn4PJM9ryCly%2B1yt7eeoVY8AUKCmbDd7EgMW7a4A6fImDuO0IAZjUY97IhPMeEbe2gzk18cd7WZBo48jFcLn8zHdGGcDso3ZwBDx8kXPMJT2g74GOqUBFHmFqCEzcMyESMxb3eOCxuhg14gNTnxqCW3yRAe%2FovGLH46lX5Rrzr98jB8SCHMjNw1n24Ducest%2FPlqmwWBCClvdA%2BJNJfbZF%2B%2BFupicDM2DN%2BlK2EhLfSSz99sx%2FbYJWs2oH37PmRkjg8yCHNDe4hPoMY%2Bn6v7HKSrNbvOLzojB0E4cXXBg8wC3wxPZMNV6YIyj1MLqnCuiB88o3IMMbonSE%2Fd&X-Amz-Signature=aaed4600e35f719cea8c1e8e50d08fca4b76b18750cfe0abf06bc78679f6f470&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
