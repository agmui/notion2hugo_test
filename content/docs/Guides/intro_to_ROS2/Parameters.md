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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X5AYQEK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCRyBVW66lKcMtNBAyRPhpG2XoceenkYqbFjr1WHHa5WwIhALgiUJYv64GuSv5TiPCoflSfvwT4%2BVUitbvwqca0ogC6KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6I%2BBlUg9IR9rwRx8q3ANlhoaVLvUffKMtVgWrbmzsCc2GtJcaAQECzC3oybyKyZRh2wEvq7s1ojtwGdFq7Av3d59HAtGVjKqsL5b7ruoSCP%2BBCBd%2BTL9fkCipJ8znvvfKZyrU5Cm3p4BpFpOe0pXpY%2FrJd%2FNO%2BnTaTtNEzRN9Tp6uvtz6Vfbo%2FyQDeHepst%2FnrbNQNcFydeBJxHYlgwvg2ZmVpOQxTisqEvHLEi7ocZ8RDY5cVfZKi%2Fls318q9DvN5sCALU6iE7R2AcTxP092jLBVFa2Vg51b6lfbCvX9OJWIxN7VstVXJa3UyXvDgdK5%2FFxsxCEko6g6BMsr8rtHKB0lfTUtpW7odGYJiT03rbVi9QrCmyDQUnvjSkarKdYAV5tekaqt1sfG0OXA%2BUxtKsv%2FabYDqsHZkBMuFsIPQDWJh6uksLChXR3oypMkj%2FkEz4wvGmr%2FIpt2iu7YYb8cdNhrQ41Afo0LlCM2YxlGqxgwhGo99YCTiog%2B4Mrfn26QXZp2sl1Tfgb3Y0JJ1LgedTMDc80i8OKJyqzcASPYPdW3mqoJ2fMgaiWZoiDa%2FFy131OLcljYLh2V4n7dWMlbzh2xCj0Wbw0Ox85bO7hThY6hL7TdYc3eixinFgmtJ%2BeKw1MnKwzfYbCq7DCd8KO%2FBjqkAdbvRJrs5V%2Bs%2BCSbEXi8AyF4wsGNksA%2FGTKuT9hITl%2BkpEpsgMdv0O8mEMpJWEyWkchdhTd8q5LQiccqPAPUDEQo9gvxRWfvvbP2PmPt4yysXUvrupyIAXUHkuqOlqbmSJz%2B%2FtsWX7xPMxdr8jfqxGRhAjiviy%2Fjv2NgcR3kWq1KBJpb%2BywHhbMo%2BrPp%2BZcJ6BfhInB%2F5h3N5X1JgBWWV81E%2FWm%2B&X-Amz-Signature=5460612e7dc64a0aec79ee8fe6ac6a6f5312e007b8669ddc79cfee116f38b599&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
