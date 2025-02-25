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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LF7KPIA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCa0l0Azzw0CMFBaEDNyax6Saq2vmy%2F2wSyxlebh4ZWbwIgWsiVOdS1k%2BlgQwlOwWwajrKAkeir%2BriHu5mQVlBEFcMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDBI%2Fom929KNNehwsQSrcA%2B%2B3s7GYaHKxKFGv9FS4V%2BtSU71ONMRkHO860J9STgUvTr6CcFCIpKZf9NY%2Fh2FZsfkOW8HQLEj8dvhJI8mEH9tZbW8y5ZWuEa%2B1yb6zkWb4Kc8ZM%2F%2Fs0F%2BAUnx%2FCEkueQy5OoLv8NckVR7yMlzLCAjfYeV0q2vdCPb5Q%2FydfRpBmitpbtvBwSTjx0w1y4qZ%2FgaSARqxHmUkuOkrOS1Q%2FThpwW6tHOTCU%2BTFn9oUFzvp7Yn4KoMJ1OCAHpnm0NjTGl4UDCWenduatFLJ274v6%2B2khgi3DKROGnSaNbYPkeNk1oD%2FTmlPlgwW0fkUe9zNRnmEc0CebDu8m8K9pLwM%2Fl%2B9rlHxLTl6o3bqea4AAKpOTGTj7yFRBxjAgeZ279zWvO%2FJarnj22sv52B%2BxbD6UXdUH%2FDjy6Dq1Z%2B0cUBxyyQE48he58WbxZ5rO82oNd0InbEXsonXP16z5cFD4sbivXTsre0m45UKyLIzdKb2KPUNDXKC4CnRJjOPGGY3Ds4HURKou4GrhWvpG%2FdFEb2M8ubrEYRQrhotSj1UaG2krXUwFRRP5qHhrCD4SxbDcg9iJUMTTYS0FKfdr2Buav5vI%2FCRlO8rZ2TcbPjdGFgOZcuM20NhOG1LTI9gdRl%2FMODQ970GOqUBgk3OJncXwpX0liXiycJXAw0BY%2BuLK3sFKJciv%2BIs6pNXYvuKb560udFLzMsfGgPsbi8tzGKZ2qk82pS2hSLv4LGUPOoWxD58zMmiaz6mSCgluoV6IoX7ACjoXt9iz3J9AhHluYuUmhji9U9ioivTB9%2FHJgHuliTbW3LY5XUK26CL%2BcI8%2B3Li80ZlsTyofQVfd8vpW%2FCFsRHBCaA8olaD6CE4m0ow&X-Amz-Signature=8eca0382fc6ecedf7420120fae2d9e96874b358db7bbe1af24f16b59e751e2da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
