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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRYPVJQQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkcsIdW7XL0%2FUxdepyy7yJ4TdnUpFleHSacxoJpq4TIAiBQXIqOuH0%2F3YTAtr%2FMQ4%2FfMpqdsTGGKqoAZcGYObXrZyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMCp1DETvxNf035W7CKtwDCf8%2BJy76Jd5bxwok3U6qwLGuA72C8uOxQ2wowk7Rjrf1NrpCKTdVyT%2FkwBsmWlmnWuXze74R%2Fz24lQe6ixuwFhxNm20XnkSe%2BhLxMbFqde%2BrF1mH3sW8WkjDU6byVXvBssS7d9f5SnplQhVQ32QBYFTVcz0NGuz%2FH7SZkt18upKI451dAoWlbRqvFMn8LEcL3ezxNm8hoHMLpiViyeC9I2IkrBsgb7DQoN1AAtIWoy5aXxxPZx%2BmPPmj88gWWC6RjfHP5w8aUM98LilGGTGqv7d7zHKmRgfkp4EY6lsA07xtsNMmJGQFdIUZOXn7rAJcP8zwyiuvijEeOdi%2BC1p2vXKkRF%2FarR2u5ZzCRr7AOkMf5uCNWf7kyImm%2B46JKtJJ7TSikdRNTweBmNHQdI8i2guEPJm6K13Z49eKFDv%2BwEEP1eGOy%2FPLcsORmiHw%2Bz5PwANs4OxX55BjZ4ERNpkjEVjFPHbJmATU36acbXKfjOThb5%2FGgCNKHLmOTnWJipYM8LzJXg8sbIcTGEE3yyd6ceX%2F0VDCWXt7ICGxZGbvZhmiHGiNDj%2FlXrtDL21FCdn5N2V2rhFgTDT%2Bgnb8k5VrdKznZOOjHPgI8Bsw2%2BXrNjWpFxgsOPYnNS7tycUw1r3cvgY6pgGuRChWSfY3u%2FPyS4fTWtWk1k%2BGD6tihLEYSMgCPDQNCoywsObKVQypE%2FtztqDg03oUT9PsM7FQqdz0%2FnfADmbpYSi3zg%2FCBXIPAUJ59EE1AySIeot3YDH0RwbJNwP0kuPsFnpsKBggSriAi1xkTVQ9w%2FkIYV4W2VwercD2mbG9Kcttjx4L7faRz0jf9gt4FoG6X2rDBFOe9OINz%2BQo1I6qvbEwaVdj&X-Amz-Signature=8d27afc47a345ebf062126340b1e7bfe217fbdf264ef27a04a83b8bd3c082790&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
