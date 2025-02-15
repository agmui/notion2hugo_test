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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASNGEE4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCLr%2B9%2FmLnn4OdNRO4BaVYWUQ1zoXWC8ECF13LnXgPYfgIhALPErG%2Bgw7L46btVa8HSF658pIIPH0DLElMTHzic34BFKv8DCEQQABoMNjM3NDIzMTgzODA1Igx72%2F1JszTlVLvLmHEq3AOnQmzqhPzzeqlbWL8SoRTwXzaBD3XCUq9jkkjjxjoEnF8FlERrEFh8f5GpJIzhXxbBeRGXrUTUzGa6UrOYCmLWLkSN2ds1yq%2BYQKsIvfeueoSllCi4157xkm7nT%2FeyrnGRKYwDc%2BjhCU1yMDuom0Ug1FMrs643QEPFXqWYaH6EvtNJSfAhaQXryweac%2BknZudpg2MU5pq%2B3AfyxVV%2FF%2Fcv3erAzVZKWUP%2BjIjLswqRUR7l2%2BPO2nele7OWM6sj7gHRv0fLfPdxtGsmeUl%2FhXdkGNkjQ3YpxZdOMaz6wD%2BqO7bQ2Z%2FFgrQpYuRaW%2BnWufQL9OuJ8nY5lMo0xvv3kGa3cC7iWeJaeuM4y7ljDxy8H0rGTI9n78L5nGSE3FUtaXzPsH%2FKRzuI2HTpQSRUDdesSPoKSYEkEVBN4hXMLz57dAM2TkQ5qTCLRgJYNk4cCPynFz2RpCBuvfPgJIZ8%2Bo9TV6FOT9txdJoidlf6fMWrbBPD7k7S9y2cy%2BzqWJOR9o65Kb%2BcOY%2B%2B2X6X3hKoN%2BH1FJM9etTkkXAm4nJvPZ2RGlTPTcP9xEqocucxB3KTxj1%2BDaurjpFne8JeJUVuLAIb7vsaMskm0b1jaLWdPiIAnTbYAuTI7xfdO7tysDDR7cG9BjqkAaGkrVMce04MKLa0t6lvKNjdZ2ceY%2BtmAyx0%2Fc0iJ1kzqHCRs7FAb7vTSuKl%2Fd5zTJLa%2BpnxdqYIim4NHBrRkRh7cgOPh%2F2dIer1YkFG9qPfAfGnr49YfWUCyms09r5H%2FUGWS9Qoxel7Tl9DyPDPH5qdw0JUE64iDEpD4FOJAlT%2B%2F%2FBUNqIEy7Rc8VwSQpjtxCv5T%2FwhPtBHpvvdzYY01gF4RTTP&X-Amz-Signature=d7022392d5f254ed42796acc547b3ae1f3eeecb780370eef01bf1a9b978b325e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
