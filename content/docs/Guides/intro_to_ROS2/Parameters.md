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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFHKTGJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDlEI8WhI5%2BVXfXjE%2BcEG%2B7SbXt1n2Eq5qVHkMya69BAAiB1IuSGm4pR0psvU0pu9MvHmgX%2Fc3S9OQ4xguo%2BoU4z1iqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHnB665%2B3agF7eG8aKtwDJPU5v3b%2BZuUx2a%2FRGR%2F7SmYtlB39id0e9t%2BMTTX%2F%2BVW3Ap3NNki87jVJxSVl4CEI7DaZgdVofzMSVe0uxMKy8lm%2Bht7qXVW4pajKtY2ShklunRui4MYTkJkxgrEarctyPpSuyuLMe1Vt1IflyjwJB4fRu4LP1wWT%2B60q73k6L7Qg27vZsaXI9ZwCKBjPjmuwUKlOzr%2BKml%2FAkmcwKDCleOgadC1Jld3FDgtWueJ%2B52bYIH7uaf4t%2BDVLcwTt5g%2ByuKjqekMSrcxGU6CkkDaZMDf04Kjyo%2BNtHrMQAo1OIMlInU7Yq7kiA9Y3sEE3Vath1HADPXQP3lQQbzUklkf3yWxx85MY5BJ0OKmZIx0TxZCm0OYS1Iu2k3NKhnOxhPJyVR6X%2FBrqFQefS1HMgHBhh4XGWpqpVJn0vkQUM6mLLEpBQtIn6srKWflvA3GM89Y0LSiyyh8wWNi1sQaBrK4X5RDu7tocurx9W%2BrgFAnNlYYvDXRbTiqIKSIHcMilqwEq6x6JT5pIvxUVnyzNEucUJlRbwUm8bZCbe2q5iPGcyImBJgQ2P7K7SJNlB362ifqqvs9a%2BQf8g8mtpqDOq%2B9EygylWaAuAdS4FnPAVPi3%2B5NmdIgMNdQ34ObpHLEwvpnqwwY6pgEzYfVhvXncEYPoSsAa4an41%2FPeMPBwzpKiyQsTcSUz56qUCCsLtkMsLQ4mPZ1wundqdpQk7mF827ovX2rnPRge9XgwKc7I7P8CzMQkXgUCjW80l3Ux7pLlh2ja8Xo%2FISnyIPhcCDMRLLm2hNrB5Y%2B548jPg9QhY80dhpE8l%2FFtd7RKNq3FT7P7T6TDt5g6IGZ669rhnvonTljUD6vF5lJfRvymAyaB&X-Amz-Signature=b5d99372b7db970cdb843f98f4e69af97ba56159669be306f0525a33f4fda994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
