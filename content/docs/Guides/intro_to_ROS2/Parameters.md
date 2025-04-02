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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z3A6S4X%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICxJijPQPvsxm2IRmUWufuQbM%2FyR8sEloNC4akrjnvNxAiEAwJF5RRHyga0x7I01cKtwsyDfNSHS7mD6J4Q0xYlDbiIqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFV1b%2BCLgOWPuoUPSrcA6Kna71F1sW76WFTFCKnAzT7J0cMVDJP27k9APULiJtWf%2Bh%2B7CbM5%2BTAR8VObfpPKkneRcomJT1LDexz2zg3EXfQbNr5j8%2BYSjbTmx1DZtwH4mUCTbHwntchk8h81vg5Ijv3tOJ7JV58FdApWhefn94lrWnFvh1uL6UENs3deBJWcsy0Q8JPfN4lbFMVxCTv32HF83CBHfKqPxLmEYFFtW1Yz%2Bg91qNU6mMPwzM08dLuYd59kT6qotSUv0qdbKf1tk%2F21tjeswqX%2BOzTbaAuBvcZZF3Uzl3%2Bu4SxJlyOE75bB0g05gB5LshNlJ82oCkMgmjJv7O4vf9EThN9I32qtBWx6QqHVA6q1QWvGLbAr5E60uCaUyVlbXS5TAhjAtgvz%2Bx7Si7%2BpT6dmbWfI%2FcoQiQXD2TVAym7w1mIHR7EolELs6czymMS6WXEwYlLsJd85okClXq375jqWIJMbmdt%2FW9xwj4GFOV7JD%2F0cyWtHZVQBreMDGPKoi3GrqL5apvkWQKzUTQ8rFn29bg%2BzAv%2BkVPjhVAlEbQhgOM2VFa99WWDwl4qcD47xr2FcAj5BK1DVSUb5pZ%2B6NComP1Om86z4YdQGpVu0krCAt2U5cbAiZnTIKX4%2BUkvWRLbAAExMMrztr8GOqUBpoRKYwl5yZwyNPPrAmaTGAO7O%2BfjWCxiWbBEtgg%2FWDJ7F7jiY1uOZNJi6Elb58sn8cvvkmZCFqDObraj%2BJV4HCG9l0C6xClmm7hpkmqzR5jXIwZk8Jdc5EhF9Dk%2FHA93V9hAenyCV3oLwqR12CqqmxqAZr9DY0k%2Famv2TJjBupQBzaxHgOKdInZJGo4yZyhPwWJAiWKjSg6qpFgB3n70ALQBbSVK&X-Amz-Signature=3e421739585f51f4cde311952bb971c9b3da9f1b397185fd6852cf6aae2cfcaf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
