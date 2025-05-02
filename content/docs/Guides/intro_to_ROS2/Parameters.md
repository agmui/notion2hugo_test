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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYJKBPIQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDqzw9UzL7b9mof6cidNv3qVA%2FVwqL1fxZzjQllaZLq3QIhAI5lSf9S%2F7rRyxInZKeYAVGfTNRZ8JEaUwZD8hfBwK1nKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweDAviQ4C0ELtcrpIq3AOqr%2Fm2xYtMUGqYnm4UNt348%2F71SAVGMDfobje8cUVR71DapIemSbhR81zt5AejfXkyv7Mhz7hu3KmNuD%2BVcNRV5%2BYIFfgOhBqDXKxadmjaHdk6IYJJNkzpQNwXasQsd8FjAVsfnYf4TJNEd2aZz6SAhKPvOBQp2D%2Fxm9stZdHp3JbNo2cS6rRU0AqiT76P0QhsdPZZYgXNyxz0HRidxLmrh%2BNt%2FrfI5SRRDpKQZyG3RTH%2F5wMcltdvbxAUZYlf1QwX8ejDpIqAJTdAuSLVnnBeUE7rrp0%2BaIH0AHyk3rQB7rdNhEJ67sGmBQBRwY%2FckbVDzaAZsfsoLghGuTMHRSBBmeVYUq7hPRaP%2FVA1gCJal48lsMXr5peU9BxB9SqIdSEI97z04UxYiBQoEtaMTJ0FsOIbhPbyMbR0gpd2pm897ySfRiBwTMCtdMXPHdpuosKqDjs8Cgy9RSFBoo8iJpPxwml5wD7R3bGyDT6mroq9BzTeAu46PhEsvWhz%2B0cGzbRuR%2BpFaUi5iVIlIOyDPmSFw24Er2kOZWngjPAKQ4Sp1kYcyFyW2M%2F0Ya7Nuhb%2FfNYhHbni8LXHf%2B0hALkX4RFn9%2Bhgv7LcmugU%2F5sds6O2arlen%2F11rGFoPd%2BP2jCc8tLABjqkAdZ9wToyt4JF9ZMGxAWZS0GN2Y1HkPWEDtmw4wsye1QWbL6Dg%2Fa84PM1mL5KCh3XngKnlMyAu39T6T9Bw3MkVK5OTqVPtCleif42QJ%2FArpbfhjYKZZpLxnzm71kYFEI%2B4Zm%2FoZg1Z5obIi%2FJ%2FgG3EbDda%2B9hKnMRdXoCXlIMt8gWWIRKdIH4wPjHDPpsp3dGjhP5DXtCnC6UjUIIqcClNZSHzFWS&X-Amz-Signature=c39a0a13473ab24d62329f685c935dfdf6b38efbd8a991bba6706773f975dda6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
