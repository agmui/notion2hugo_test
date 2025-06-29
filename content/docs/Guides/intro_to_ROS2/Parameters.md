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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4U46DQ6%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLTNOnQecIHhouFC%2B%2F0d6O3sIrapVGZwep8tTSWocbHAiEAs6ZzBnI5gVV5IAuKp%2BJ1WSogL0%2FoCoXyEa6ZGpYuZY4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2Bt1lax9uzBJa0FPircA2SfKyCGLAmAnA3LIQL6USObQMhboXx7PJTgw%2F9S7YDwOMXd9B6NeHRrLnb448Vjgkp7%2FsjyNLulViu8CCqTUc8ZTNMQnJa9YCwRtvT1%2BpxnMGSZF3SvIDXa03fKNfUygCF55euYKuwhP1q9%2BHnI0jvXLOaF39Dp%2FNpfxQ8pc%2ByUFo82k2DfbnwBHPBUWjqRsJRW5YFCy5ipyuNBXNLMQ5jE7OGyZztwPOfTPi3GD7GrWq5H%2F5fQPiduFYG0aouXJpKMj890j7beh6XGOmtQdObnCZZcQKjns2tbyyCDVw0Z%2F6ObRcq9PLIZ%2FXiopjtfmOm3yGqrMxtwbVj2S%2BwE0PV7C%2FasVkM3SkMzxWMLNQr1VunaEkW%2FB780QaluFFzStoYoDFjxM2qYNHS1rxfzhMM8Sh4x5Puq49ffUwG44jXw82v9xEzLgyMWFH6B8szDmDVuilGdxyD%2F4FZvo55jgpNaKx22C4Qp7XM7JwBbIHzNGY%2B%2BTlwtdQpi7SvgQxEL4x9AdKx0zWqkwX37VoVdWEnpGdoDEAMowcc0p8YSK1%2FUrA4o6J53JMj%2BhV9TKF2QTuTzyqUOGUYXHMvgnCLlMYrschnGa6OsULMmo%2BScy%2Bz4Q8OaxNTFumd2ao4DMK77hcMGOqUB%2BPKrec8NKG%2FuMesKywRMJQ1CBD36Y%2BCRU55ibeojVFTayxJH2GdniojkVe6ZjJsTtMk78%2BRYdi1l6k8sn%2F76UYgCndtLAoU3oDeMKsSXKyZnUyT%2Fc4C95Y8gRVQB2asH9NnShnL6qcVMWmw1BWJYw5WNrtQlQiWDARt0mBzooMvHPLDThuQSYHlcCErlkdBKqMq4IS%2FoQT3eipOucdvj8HBUUSYw&X-Amz-Signature=e43ffb983604bae456b7540dedeaf746274d04c14a2d1eec2f62eaa6b6302aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
