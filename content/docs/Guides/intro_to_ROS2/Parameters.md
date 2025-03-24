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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXS2ACY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9Ol6N1Igq%2BdM7px1NP2ddzDhzhpN9zF8HcqmhbMxEdAiBvTC1G2vTCUteQFhFIJ%2FftAMnwxBb%2BADbX3eraWSxvYyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7vGlEt%2BiqdWQm9i5KtwDcRUi%2BPrto92Ur4mWCtrteuLHfNZ3%2B%2BJ1lZx9o3SaktwC0LgIQsK8Ne5JxPSJSy1xZfzl3Vhj2gS0SGRwMg6DU56borz4aAqlybzOFmmdwS9qhq2Ju3I5164VxJ7Jkx%2FA%2FfhoX5%2FSwBaFYb86r3%2BdU%2BOEOz2eqbCyFqqnh9f%2FFUSJmUnbkzWoqnmGEjGz%2BK%2BlMus%2FUpSBqFBcTJ%2FgJzZ6yh2HkGo66harZnBR81L8fB6dYvbML%2Bvhy4KoVNUxj2sAyESIY3ogQKgtfmDq6MOeggsH4jG8ZSqTQ9%2BGW%2FEPwDR5W5USDyHqHaODdxHhoLA8%2B%2B4sn%2BdG1gU7U5ECgE5ul4%2FZ4utNHjbeveMpszRqTIZcfwuLWp%2BHRK1IHri2Fxc86QBM0ZuB2Qfx2LH7IyhJU3xwBiXcd8Yx3vs6%2BPg%2FqqtomkiUqyxDt2qNL8iTQgHYWfDL4Rxr0k2mNOBbEqgyLFC%2Fa%2BfVspw853Ikk9V3VF09JyFSQEh2%2Fn4oGV5yaQ3exn%2FR150Xp6xmJcB4ArEvfhigLqtfVcYoBkbdUKk7cSVAtqCC%2BDI6e%2F2KhTvj4bSpI7SU2uX6K%2FoNjoz9QVEoiW37ex9chUtTGyCmg5QkSxrWc3tlFNOwXp4byQEw1N%2BFvwY6pgFlzEuCMcIsnLMfM0DLna0dVBDOP6Q8cqQTKcB78tOKN5O3WR%2BFiZ6Id1J%2Fz6ouG3ykWk89yLK34nqC7BdvqwtEfm7%2FLHhNQ8q3nXU4RCpyVqZF6qGNqDDTHdE15TaDaCuSURWHy%2B7wu85KCi%2BxQLS9xLGxcv6nSIz%2Fu7ScvKZ2ewG67qx95MC0Jm%2BPMgtZke%2Fva50CJWUA06gxufTa8f2xPZtw%2FUpD&X-Amz-Signature=9682330f462c39e03dad490d77bc098576717956d1a2d83a6ec0b711bc009f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
