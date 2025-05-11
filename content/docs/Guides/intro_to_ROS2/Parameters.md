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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JQV6IQT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGklfYNaUOalLiF951qcpSveSKUjBcXlJ8WmpJbZ9xt9AiB%2F8FithmjoznFErAMgpxTUaHnU8cQr483QN5fT8t7qLiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpEKGvtKKF2qPugE6KtwDQ5lpBnyS4WqAacJUNiVjxZO7SB7Tra%2FZ%2Fxv%2BxgXtk7yF0vHsFamKG4H6a5hqGXHxK6T86cyDMxMkNFxNHYm9uSPfNo%2BCanloH425SlV1BBruEL%2BF29hDCxQBxc3Pu5Pf7sCX5s4SGpC%2FyPoZ17cr7pF%2FuCeHpTTECDTOytVE6LZv%2FnbQUV9oz8F3ZWalpz1ERoofiJdao4UWtcNj3tFlvOkFjlw9%2BQl4WT3QRWyp%2BlaQ%2BkCCIx5Y7hdqQT2ssu8ATTBX9QmE05nb7cOuljpUOn8GKaQ3lUFNUVqAVLcxc6tkNGsmM9ktTB%2F0cdEwLVNZNub32CUzCIm90Pb41P70UGMANMKWgbp1VqC%2FYlcQuUL9ldpkCQi2GZ0WRjdzQQi8z5b6CzYQAu1DEr1ufExbYyH1niihWH0HEDxTh%2BPWHBNPAEJqCepo7FUwqRiOO3%2FTUbnvUZ3v9%2FtozViGb9fkvXUUCZsI%2B1rMUWZro9aMfclPek9rT%2BZCBzAdyLBwOweH8mwnzfem8s%2F5lVZ7FfoVD1kchs7xCcAQqJUWDstsZBAX0Bc9cDvPezas5zXfDgxXOBKBMFC3MfnyTC8wsmZyUeFv23dXxfLrA4YPWc7NGkQPcdTAC0kh%2BU1UIcAwtN6AwQY6pgFkkrTA%2BucbIp%2B%2FOn3xNlyQzv8YizdxdiR4B3%2BXV3hb4qbqbgIUN6AlRxYgmk2UHxWq85G2iGY%2FRD6BponfeYq%2BUPXJjvl%2FCHCMZlBNhy7o3ItDRWtW5UgWcT5QglZG4jU8byZ7e7cUzLDJTfopvcY2fVSKMH0jY2xbxV%2FSulUooLuUqUuvIugMkyuKfWHeJzvD4io2jl2Ql2G5C0k1KO4tWYf5JMZu&X-Amz-Signature=92d9d50f09a63ef64ba44d27e1d12e53438520b10cb49430d6c383b707c9c4e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
