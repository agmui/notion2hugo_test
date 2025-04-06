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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4RXJNPH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Nmfrvc0ZmRHyK275b6t4SMmNR2ZQ6GhePKo%2BUPKQlgIgWP04kEUOw1TeBlu7i8FAqYf75SQ0ISAkaHWoOtGYP5Eq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLAJkYAR%2BRA76vnexircA%2BC0aWRpyTvkLV1RLG%2F1Nhfg1IfnUL0vgsmrNfkxc4C9HbzJpc2Z3N2ke%2FatCcyDbOI88kir2mg00OFPvCbRd5LMoCWvUN9uN4L5Q1MjQkrBSvFfhn92pZ9sDllQxRwOd4%2BpYBzfrA6owPdhrLGTDPXP4bndFw7aSqOoC066Py02LrTTZ9fcmS5HbKGjQMntIJivyhOlSqrmSvPipQneAui7URN%2BcQBDJOn9uQT%2B3d2iBlnYQ1i4R8gKMofJ5MRK7%2BRw%2FLkwoeGFxE4YPqHBhpD3tdZ%2BYccs3TBKspiOj2fLn1Tk1xjleuC%2FZnTr9BRM6QJDehZh%2FY8h9g03jBr16EwMizutlDXYwcJGexLHy6gGIwjKKMO9c88uGjOJ0Hlmg0%2B5tog9IS3DPgjHFXIZNuny6ZcajYAA9QRFLXmwCwaBip53Mtfm2ekfBmZhSde7%2FYM9xN1Mts90cg3esciM9zuKXhB7V91u1Ot93rWDuZXgdRsfITLuYJrqV7aYrUubeOOrCf3BUlX5BTW7Mnps%2FRqUZirOrFvdN7%2FFk06QqZhFuxF6iGe5Houh3rGHOWHd6ecSzv6GD8XgGZo9mQpTxkBxIeTLu0dGd1Sp5R1%2FB%2B2gHAOT8hjCFJi0BucOMPvix78GOqUB2VLsZa4CitFVQH3XK%2FNVqBGXMG5hq1Uio1QVn8lxSZjFZ687ZKMYevr%2B1Kiilt19xonUCA779%2B42Wv2jBXbmKXBqilrROhvtqYKWj9j%2BtHsy6VWON4n0YqHw0%2Bq6TCAkYbnotd%2BABuO6gzZak%2FM7fOe3DynHSLeocM3rJgcxebtvik1S0mH3p4SYNJq9tS22FeujD79%2Fx%2FLWlY85gk9871LXqWwK&X-Amz-Signature=beaf9da26cab1cda2323aede9ae63c1935ce97d1a8235b929cad5fe43d5d3925&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
