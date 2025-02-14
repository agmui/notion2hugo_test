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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA23KE4Y%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBmARKqiIIrvOX%2BKJds6bohCc%2B1p%2BIrnSxY7oIQzEwQAiBRa%2F9qt6cY1QkM7XKUnGTCfdjNa1YpaF1mn6FAcNR2TCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMbIQBO9IHakSRt%2FE1KtwDVxG3Z107xyanZTr3gPvw0zCeYhI0k6qHsotMydlwRmbvEi3T37TtMiqfPkqzUd2yCzaGZqNzPqN0vZgTCYXCj0vxkt6R0n89zhVewgH%2BYyJ9nJ5u8hF%2BTUOgYjOadAKeACpWb8KBZtOgiLy7Te7DN1MwAAEqEapvo26lospEsfGTpwJ6Obc3Ut7xI7gs9JfYD1qtDAyrQqLZpTD9lLp0K6nUR0zuvkM0J%2B13MX38%2F4zBauCIcWlCCeVRMsKbOj50cf0qctXnba7%2BkvXodtZE0pjzaJaUe3Yaf1QBO90VVYALC31wZRu%2F85Uw3U7mtBr1wqa%2BiDRQvaF6NM1C8Abv8fGh7MNyad4SeHWyOWkjtiRS0J0HGuh79uNWFpqh%2BJKgP6k8bNvvhQ5LdEZRlunyd7%2FX%2B%2BonyEm8E4zbO%2FpMbxzC%2FNYtqRaixWEbMTdy2hWOxRetmy5uqGNSCI2Yu1ekThVEJ238MnRXLb8nGSUqsc1iEZTB41%2F2eSzRHxi0Aa8tbo17c0DCrpPVuolNcZwha7G%2FQdxxtBVl2U1u4lqy%2BpZFo8lTy%2FQfwLcbFJGXvivkPATlw1QTN9OSTbH1twDF8TYL5VbMmIrh%2BV%2F5EXaW6it%2FCtn%2F7wYt%2FgHtJzYw%2F9C6vQY6pgGtwVc9Wntli5JUVAdbLkVQy%2BNSgloHePTvDK9VKw1wovugfe7RHTrTsRW4vNzepUYgmCJcZbRxcLhz5p6hp7xbNngBB3TTbDPGs1aXsPGb7Fzm8t%2FpZnQLwBjcboRQ1o6iJYrpTFd%2BpVYtOnUj%2BcACmw3IOXFrJwqGTcbdyasfLooGxwMAJKqkVIXlOKp6AEiJnZvcSrFmTqWna78PI%2B1iTLsj8Xjr&X-Amz-Signature=822de81d884b6dba1dd4aa1fee0c4334238260f4b9e8bc5e762b5d1276f0c4dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
