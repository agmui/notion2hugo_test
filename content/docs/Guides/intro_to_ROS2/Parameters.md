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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGG3CLNX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIB1yQxySPjoDkkQsNtAFe%2B%2FgbsU9wlXNm36qZMGY7zuLAiEAkCnh4Ww8zXjAW9RL5rD1T%2FCZmNg2ldyH7TDMbOElmOYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFFM1Iz2KtzxhfDThSrcA2306OnZsGOzHn91eZh6964HhIe2xn1uVjyvPewIXK3GQqZMXHwjSGPbD0XkPEs1kU46K%2FVd1zU7NbZ%2B1gL%2F76YCxQ4ApRWIYTcS8xcI85huiGKVUKF%2Bkqu0oq%2Bz8rJ5i%2BfHic8Djh%2FngqvdS9RRkOY6lQ3ZF52cq7WHJY20KSrn756dhzU2kxPZIlWqlJQqz1BXn2n67rGtK%2BOYNd8ux44kyNmC2LH8yAeQkAG2PxFzmi822LKjB1Vnt6jYqV05%2BfFpLnYiaUACij7UAHaKt9FG0s19tGboIsMj%2FydAQcvSpEnXq9WeeXmCZuq7mS1ul%2FMF%2BKi41gn7RnRDavd2AWe8xBuUjl51tZ5Jkj9fbbRiESg%2BV2v7m9kszfWNihzmcej8HnjEA14g5l8UFUUuuyp9G56g0845MFfwZ4Io7i7NkPz32CDImWcO1dFhAAu4Qetwesu4zxbZIxmVOl6lVh79L%2F1mQv1OpejY1ghIDXhv65yI9qKKz7Tq8XqR0jL%2FWYioL8gtd2qsDMaPLnW1xP5SgQ%2FPY3eLlwG9ZCPnrhy08U%2BWzN20x%2F79d3jPmYrUpPKNNy9CN3Lm0ii2n0kc2B5fXOwgvarz%2FXDNuTTimxb4qqGxv%2BwTEo9Xk8z6MIHal8QGOqUBQ9gebfSWUiaMVCyMKx2Nywm2YcIBWOrVoZnyxhqx98r%2FFjdLRiXsjhb%2F9g1qVEIonzIxIlp8qnldWp82gzMEge4XpyM7BoCv3vn3JIyBaZLgSz%2FJuXIpXg%2FqBSfx%2BiW%2FSwH2p0qebycDGVT%2FEPg4ZTvv2ExtipRx4HBaVk4ijp5Y5aq0bSzVI0w60w%2Fci4XQwltGmvnlXrEk%2Bbd3dh%2FVfcvhPMlP&X-Amz-Signature=69522fa8054d1369a64cfc86fc68a9e16ebc37e37a7c57e112a0d25fd20e0057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
