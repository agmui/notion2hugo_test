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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZYNOQO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnKYU3WJNv%2FtmkuG2Bp76vf5cX3Fh%2BxuyOXU020oD%2BlAIhAMa92G2k5rBW8SaKbqv7BcMQ7VjEuS9ORrImDcVODTwiKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0SBkuvc9%2FK6N7VvYq3APJeRylbe%2FYmACievELU6WYIHJxnYLhsUasapkBVPQwIlPJRVnF2msg8OQrjtCxjt7UjlyCMjQ%2Fs1gLmG8oa1BJxs6hrSQkg5oE8ky43lDzcNNkBrEoQJL2IxJTm%2BkGZIaiQ%2BVolmsjg3puk9ei0YK%2FbFe2wYzkTIVRzHlem%2B%2BNT%2FnQFzn1T%2F8qBy%2FeGCKcRvBWtfrI8gI372uFKpJi9koFQZuBQogUWhHGqOXvQb%2FiW5PNvrzqDpx463KGXeym05sMpNY4573WUPgpgb5gnn2M8X%2F9lEQl4mx27NFrIRuSLBHNL7Iv%2F0GyfaTSWWL99sEMEysJbs2v8LVYD5A9fjUq5X2pnm0wu7FIKNnw6VpZzhPdHP4MfC6Fwa1ClB%2B1gB3LHnyLW13SUtJm6cFWonWHF0vNXwDpEuXgO890K4JMPdoj1wIE1enzwl6dA2d93zMeXuMwKfRL0wnc7xaTE%2FDn1m%2FIqrR3UrBvq5xoImODs6B95XEVt%2B9pJ8D8Gy51eQQzMsT0VRcuciWzz2J4RmKs2ZGKJQuy7%2BdN32CKwNagrsk%2BfUXtoepnJOrMxzn%2B6ZIFWtKylaurZpc%2B8h4GB6bA62cNxhZPLylw5whPy1yNWEpTKMiyKiK8rjSNUjCSsNjCBjqkAfzPr%2B9zZyfZ9KorJWlqpjKvumbZS1%2B7BFJNcOaKjsbt%2BEeKivnwjsBQDNrURUCla8lSNSNS%2FjOgxvIA%2BVby5UjPXJDy3rvFVzrkNZLwgX6xSkNweDxOhG3Ni0SspywSeY4nDJY9oIBmntop3pVM2VkrEJt9XTYC8jufD2uERGi%2B%2FB%2Fs0DQAZPMqpEsRqTIJOxAlCnV7s%2FNcGIL%2Fc5sr7rz3W2UU&X-Amz-Signature=0c67f7994ade5b2f998a90d3dd8ec368fad7535072d130c68900ff9b4354f30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
