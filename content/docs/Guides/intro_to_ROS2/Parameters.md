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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQG5EVP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDbNpLrUgmbjPNKLjDWHavxytYsWkh2XcD97PxORB4iQQIhAMFP3n0OMDHYTXLEoQZhwf6j7aRbV0BdfDJDIO4Hq79DKv8DCEgQABoMNjM3NDIzMTgzODA1IgxHrMppxi9uNkAIqFAq3AOx84s60tQI4kU8%2Bndbiejs70brqLkqNo16AZY5xewV1JO6b3mNr8lOZuUZ2Y5SWAV7bdus3n2Xw%2BuKdbTxis5jXL19rzd39FCcDJ%2FcDY3G5pttCMIH1vL8jqD5t%2Bn%2FwW941O0NvohWCD3Mkes89te84wOynesylR2ltuTuWMj08%2B4xt2N%2FwF6aILwl259S4hscFNDHywtD8bImvf7UvSmEd9EKE7gbUluB3Pigww7lcuG7uwAU1k5ZCmozC3h4xZEOAfuE9jr6x%2BpK1dvFdmOh8%2B311pIvjuQKpc851r4R8lgr%2BUJhoa%2FLgXViPY2qslSE6dBYKeXBZnE%2Ff0y%2Br6rISOpJu0hWseMmqz5MWiJLgS3EBIo3Bz5sbzXLtDuxrobkYE%2FfcsdnH8vNJeT6ZoRS3X3%2Faq6h%2Fp6G5C6LwN8PwR9m6DIUnUAHTqAawi98ih%2BUT5R0ncodVyF1jVkKAsbGnYXoibBvwSn5ey04e%2BYbq8ZbIPoepEyVAzz8GtfqiDMI5tnpiK1Tw2HAxM%2F%2BHfX9Jhx6kid2Ei03MZixPDS%2BWaC2NOskR1Xb%2B7Hx9Xjrs5cWo6rE%2FtmyaRMtkHQT8OOVAtueme%2BhM7PJCfuYsMS8B7o4Kohr6PujTrrG0zDlvI7EBjqkAQ6%2BDjUsu7Q6%2FAqI10LXGENLYgk5glRM8anjWi5yfEpYWDhVpVeyd7QO4RubqEgZx5m5btHhC7GGfkKFdvwJrIfaA%2F13lWne5YG3lyAYAYLhDjmoWV9alwNfrZxy9eWDnc7zMo9V2wwidJRJd6owi%2FQigM%2BVK%2F6CBfrsJ9RGDv6BLJhtvi3XRMl4ovrHYGuRT5vpS3B2Kr7xb2cEvA%2FyWuCUzDpv&X-Amz-Signature=e1124e274e00231b3dc12e7758bc57d343bdc51399dedaa318370b7416390bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
