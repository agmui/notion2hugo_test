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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5UKICJK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMNutirLy%2B7IyPctL2IHnA50u%2BXMRnO%2BNNLbI4fDxfiAiBhKQrw7eLfi%2F7xWKx7QYGXEnHsiRcSAKJyiaJSxz%2FZJyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMNhDFSOAWzTOgPg%2F5KtwDM0MBtjO0DPRrry8aB841YbQeM7qWbbYkzlHAC%2FKF3J46I0%2Fcy1Vmdri3ibNYrTN8p%2BR3wAHRrVH%2BHEMnQot%2Bhxh3rfdjpsA9moOe%2BteBB5%2BZ1iBsEs9c40agfRQQvdxIv8vKVBRkH8dWXf6qPtApB8Kc%2FIUJxq9bcifpYgVScU8vERVK%2BvjzuLV2wKm1utVMwmH8ALHPEzq%2FoYj9H61h1916tHThjuPs7jIpPiJW3ISmNZETbUhYoGqJ5e7vyVVjUZFpjvoMIQmN%2FWrCAwDRCpOS0kuSfTp7ji0NXSmZdgLANPpFegoZvT%2FhmBycu7r4%2BisERMRYMTbu9dRBUlGZFrnenl4Q4EOrEtRbSeuQcmmIj3FfZG23CVe4dTi6ftmk0Rl8nYwBpsLQhnKQ00l9hMZs6cOAAoT49CNeamh7yAm%2F3TvJzYyW63OWUpQtpuoTHWvAQQXNd7KfvJkdBHn0uT9hWL6uMmORefSYWYBw%2BsAOXbUcfuGchY5pgkUscnKFQn9BdTkYzzLEY2Fh%2FWBqlwRBgzNm70DU2b37bm89e%2BdiU3eQZjA87aCMO0%2FYBPOeqL1QHRU3Dyt8wTVqvY9igg2MquNvjiwKi5aQNEChCEOcU2R2WfKN17g7jvMwzr%2B1wAY6pgE0fNLYvjQhLuNjNSZ2%2Bqnil%2BcrUpPD0Y4XgMMB2XjuowNaVa1J8%2BiuMJwckK%2FCWLnqw%2F2GHsuQwoVc9xHGyN75lAkzbmXmgCoZTByim9C64ic7A8umlQa7VPMy0kwKmcstntiR65OBu5%2Fy%2FJC5Kwzuo49mz2rjHl9LRoWN%2BKc5RWZQ6fIqW%2FZcfQutzgEfCOJCrf5w%2Fb97mbHx88Y6PhiIa52p0NyB&X-Amz-Signature=991a249ef88528601aaf62b272a515dd069491d403e5ea9edf9a95a8694d44b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
