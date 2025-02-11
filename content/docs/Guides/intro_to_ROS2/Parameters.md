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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKPPXX42%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCki5dqh%2BO3F4ZVZjP5FRzG2t8kb%2FMF6GFU3gna9f2ftAIhAPXCFMQSgkBYpUwbp7wxuEzIiNtLouKVFY5GpP2XVNhlKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiMt6nLwRHiVrHdvMq3ANFKI8UHj2LXsdlvH6uiHB9FQtMVPI6NfL2y%2BNm4PCksQ9QbYpbxglq6%2BB%2FqYpI%2BHUBoYs%2BOs0VifiWRFaZidd1xTyEMoVnyZbWxZMDdU%2FZMoxYOKz5dgi26fiyriRjMXOf8p4nLEHg8DlVMZHlxQUQkQZEkE88s2eaiy5jADlWLrLsXQnqnvFB01dwDT%2B6BFC5mFS9ufvddZS%2F4l8BJlDgnsyo%2Bw%2FGxbOYNBi41i6DL4u2bkfsHyRwIimsBX5ylI9SGWgv9LfoQdepbvgDAjaTAJDaSpDa%2BnZqv8gHBhF%2FNY%2FqGIOyrfxAGri%2F9LwvWsNOFoCaPlPMlNG2CCJtsd4dHVMWcfymCVmWqmg3nfNg%2Bo5Iv%2BZFXNIDsDT9vVqbA63Dz7JpcRMPlY6cAZijKesAoVcJlqoOGuHZ5wemz7ItSwdWCkkyfLn9hHhPxvzyP7h3Qu1rI1Yy3UCA1vDusllytmxIr37fccEhqpLC%2BJswVz58cVfcobAtzr0alLaM%2BnxfFgUQi9KTwFXfT8LQCte2vl1Pjon6gJudki26bYjkQgGtuJT8gCjjAKLckT3qeUl4Kxda%2BGXv8BzWaV0EyHyY4MDyEXCuDME79qdS2cY0byxI7OwEcdOwkdbANzDm3K29BjqkAcVDFKAIax26Z4JDP9Puy84cEodZRblxTfOTX3MR3%2BRacop%2BM1Emw22VU9WwBbR81hTlaSa%2FVyscG9nIGXQuiIZ1ldvwksRLk3BnTNIdEwcjiwL73H04jOgDFKwE6k95qIqwkV90GqGjRN8mFDGvGu%2FWp7Gdw8HhattpAOZRAxZhgtVmcoBMDTcjH2TeRHsMEj2ixSwCM%2FWdLZaMlSILuphtLReB&X-Amz-Signature=b20912ebab21793d34ec7218c871a3a6f2faaa9280d5fb132236e4158dd75f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
