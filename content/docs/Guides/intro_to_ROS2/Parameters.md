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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDNFNA5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8b5ipOca%2BFPjF82o87IJqSaVmNmfDBWS0NSx0CToK6gIhANLr9RkE9%2FWxnrprT8eQpCam0dk1wj9ii4oj0mEv2n3cKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtvdOQWGwS45VcGMQq3APv7LTtMDpZEr5WVJxuLLdHLkjlEQnjH793BpB3kMIrWSLpjNh4VsJ82CnGAenDI%2Fvy7H6q5QKapzvXyOyjdKBilh%2BU%2FD91f1DBjI7xrEdAKxN2cGDmBgfg3%2BUY3jpdfSDief8HxKt7pRne3fJ9pf4mOqxppHxY7WFzkrDJ9zX3GnxPFs5Vri2%2Bdkos%2F7AGK4Jj7maUxZobx8qA8bDzGKyIQlTL2KVOTksQyNarWL5gXHF8XAWf%2FShcs72MPZjJFj%2BJ4S0JZoOW%2BR89QmVdIutb06DFuy6GPBCD60YU0fLcCi6RV7NVgfw3ipTx%2F2YmMzPPoQk6plJnW%2FIr%2BnudC0IoldKfve4M%2BZdv8Z8rFwAHtqZJa8dRFT1jMx1ZuT%2FR0s%2FFrkD%2FVbbo16LjV5PPmwyzjvBrmQgCrg6XIyZVBi9wqE475mC2zx%2FeaUyDVOLX76PitHu53ty1qYVC9QWP09rs6KQCQJ3MW2PszWBWljUDg8GVCZgyLbjCuabKpZ6qBvBFQwPVIPiHmZ8H6ewRtr%2Fik9pWaB2kT5LiLX8wp7C7kWFtaM0ZD%2BhOYPXNNpyANB%2BEYUpojZsJFiqTS%2FnWjWPH2zlPAF%2FMd4B17TbxKt7fcFXYeyJRMBcNr6ej3DDSouzBBjqkAQPrTtuwpAe1%2B3lS7n5EA74JK%2FzDm15omtoC%2BANVeoTOnAvRj8XhF5SMEQ84Hj13zrV6t6EYhNtCbw8dpntVHTJ5P6IUs8txbPef90Rp6HC0%2Bek7FyEplGMvnVL5mVED4mtdOoBsKklyrHNYKxJQcUEuh7GC8wctqxUzF2%2BZrVq5%2FsEgMpcy8sr9n7QUC0K0NZri8jHBcw4EacHiUo6knefkRu0H&X-Amz-Signature=ae1226a9add63820b77137d17eb91f359b214fdc31a99f04c3029eeba6d2fee5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
