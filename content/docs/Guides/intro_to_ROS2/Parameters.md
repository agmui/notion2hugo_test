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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HQ2CQ5M%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuBwkOkE2lQl5nUYwSUMC4Ka9sdUxpecv1ct%2BMBpXnAIgc3rly2QdWPoCsVkKjf53Hu8%2B9lzr%2Bh233mVed76mmDgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4qVkrFFizOPz7A2yrcA1f7Sdc9vlXln0Flpa5XEs5DPT8IeMBS%2FCBEBfbdlktqBhVptg%2FiZZNrkQmex7qRCJ%2BbGA9MH%2Bc76u%2BOLSWVh396v7icHgs93ZhCfFvidmjg%2FsPnklB0ZqtxK%2Fm4g9GxZWz6J0lp%2FtztBJ%2BMi7XIli5T7iiEhmG5OhxZklXQnOsRrwdcsNE1jQZDoc%2BqpYwPbvVPqTUpl6fIrmFUxA2tUcCmxP%2FcZhA0oLf5OhFGZbAzSQrmPiBiOtLPVD%2BhoTi%2Bc4vF4Roe3OYwzqZ3eOJvUrwgK4Gv%2By2Dks%2Bvo0FDc%2FNfrF8YQOWrHdsURYS9uKL1L3jAu7pIa0e895Xb6DXbOZgVA9GFXvHTKtS%2F%2BELtrqjtfhu%2B1kCVPvanW%2BROwkIP94Jl9qM6Lxc6oJ5GyfM2JwMuMskhWty39UJwVD6bmkxZPZxLBTOS%2F%2F8JOD8dB6ZHYCl3XYU8HZTdC%2Bsn%2BXh%2FVDv5Bb1E5iCvhGthW9h9PTsp%2BWd4gpmWIkCM5sEc2aBJQqFvdtThpr5aXosp374G2Pv%2FbGrGG1ACIFl7vodp%2BPAlPmitrAyPHdxWzGeQwgrPEuHmuDBFuKbinvdyQ0niAEOIBNSCrKxq013I%2FP2eZt5JRTnaMyukjH8Sw6uVMODttcEGOqUB2gHAqHs9IOPxyIg3YddrfkPfuPE2ElRInFMllx9ig9fciaOlrySK93aaFrhTGTC6ccrVLbc8j4VLnWu0FyUeQ7V24%2FNRfn9T7AnXK48a%2FtXeKWddAGXi%2F0Qo1FBKU84y0o4A6jrbQ6jApjBuqRWenUGg%2FFDewy4v9P6mprkKM1TTeh%2BhouMTX2CAAnH4UfkoHyAOph7KKyLHgWkYaBEht17GZWMZ&X-Amz-Signature=fc1b227a797cde80f1b7f4a66ce74b6df1c479d2e84340c631faf4f70affc0c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
