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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVOUKF7Y%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCKe05Dznz7CNjQt494Gb%2FDD03mVExmLErQuTS81Q%2BOSQIhAOTg7yfyJ5UjaHKW0qFiz1iIxvAkE9ueMB5YhrlGhbbEKv8DCBAQABoMNjM3NDIzMTgzODA1IgxTuo0%2BWCv9idJNvxgq3AO8GIWhlCfdtYBoycWEViP7uXnMTzBM%2BMn3IaEbnmZg5TSD9RD547Fxl6jAnoTUv5e5Spjd8YFa4vZ08%2FabiWZsNjMnqV%2BABcdtrTrusQPxDIEW8umwVAVPXxL%2FDTgotO9P%2FnVM9LpKSmxD00F86oI5jdu6FsNSwzIYMHEjo%2BOe0ojyn1jlb1c7T326bEDTyjU2BLRa01XLM68Jenoh91zlI3%2Bp%2FCqzOaHko%2B2dG%2BQjfbIXxXyJMD%2BifJRa7WQJ6j0MuyBRcqv0X7KZJUPlWu45lJjhWzeJtcxlGwDL%2F5BQOu%2F0kpfc42vv3pORykGSBGz6NZPPXAWy3WY416Jev62QH0kqaBcdXJsPCpPC6OBfmvnAPKMqtvvArNqYpV9pGrBKxadVjZSq0E%2Fx3szO4D%2B2Z8zwWg1dqhPBh0hTNKEHL%2FDNk%2F3d8vZyqXrEok2Xhgwg18RL5koEYUrli19nA3xuphwEzE5R%2F4zk7uk0zTJjqorXRwSElkAS3pr39pYt7kpjUcTJ3UhoP7QgAtu7MFAiYc%2F5lEJwOZbzCXnI1XSWC64qJe4quPxyxh42tNDaUG9M2xTtHg%2F5HbKyhd%2Fv1cP1J79V4MdqAz7PZM168PlwxncjpmG4eFFpUV8c9TDbna%2FCBjqkASrilXkkDvaNV1ZXsiCICA2PmvM4ly6weCRXReP0y9pRkg5UWXZ1csY0Fc%2BtUhY6UBVjJVr9DS8MVKi74mM9E78R7tzeQAW0Fljuz4R5VXpuR%2FCZUNm%2BQJZg61E59AqD9Z%2FlgmcZiSs77jcE81fyd2mYTWqO19TKly3kSbuko4VsmTx6a1ruTl%2BAmexNd9wJyLB9YsgwkbiWXqiW5GAffi9%2Bljqn&X-Amz-Signature=0c8c56651792a911dc21f17d7752dfde31d39e1f68faa648c391258741aeba74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
