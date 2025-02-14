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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPRNDAJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCn93ae%2F00639XgoIPpgyKxNRuV3B3ZobfltELBrUQdBgIhAP7Ka%2F3aUzD2RGzsHqhji4m6b3uiovYY8w54CxNsJx1EKv8DCDQQABoMNjM3NDIzMTgzODA1Igw7UC5Q9Ktmls91Q0Aq3ANxpppYTMkSeixUgG1xbW9W1DEuN0R%2B5EL2HIKlwc11DZLjtiZZNKIixO1BSX0cHqRXDrBN0trCNETEgqfigicnA1hAU3vvJSnuOb5c1V6ti0VId53S%2FbIY6M3xJCn4AhoTbVwY%2FyUoUKKjrCtWETZcTp2k01AvOckDKH7WhzPWSx%2F7NTC4pjsFNbwO5yLxyjAA9VqXVSjMfxK9i%2BqHCV98dwMQlUMSFhEegsQNS13AsISR66G%2BPrsQZiToKPFlaR3cZozYkihCB5CVjWMAb747vygQYUWWlQKJv7KyUTwQPo0UK7Hw%2FdW56C9dAGFIdb5BXm5fQfc9Ux6S5P%2FaaWFTPmkfWOv0K6D%2Ba9SS%2F7B0gfCN771QrAGaUNJGvoBROH2AYn4c5ZkrPiea5TK0waftspjdW3WVNEc08DUITHgm%2F5%2BaCPIaA5nZrVyjQLcVmxaofhRUAONTuFOaCOCyPq3xEw8PYAQsmIS8GTZh8z%2F4WJA4hn4nzRQyJ9uJzZXGlviYroIE0jeLTv9QUdoM9Q4%2BZWROKBRr9SLJiJmern8pSOAJD2ZSF4x0erHOQVc43wKte8qgYrdnB7bbMvQ6GC5mr4dbfb28xnFIZ%2B9Do4X4RRfB8f4QNe%2F0IhSyUzDgnL69BjqkAWbvRB2wvC38P3ZMkin%2FzEPDyT5YgqqdrdJKl5CTSw9z69R0VnRXuYSpp%2Bux%2BpDy671Sklc8lrMxTezQP0jytHjBdAbwb4spHKo44AITOnPz18flCulPrpGrXw%2FmIKqszoCgXVB3JALBpuoe5EuH0HHni2CoJX%2BaAQANucR7MEIm2elS8%2BufGPMxOJkuNuUofhhUoGIlwLVM34Xog2P%2BEsvxi5ne&X-Amz-Signature=6bbc12aab864ecdeea117ee1beb5441af2883e9072faf97bc8fe13091ff0d8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
