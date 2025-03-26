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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LG3VMCU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUaXJ8TssckpejFF1wyaMIkV7PldtCkV2fJ2cpsNUaVQIgTZ6dFUaconMMAjcgtsJVsvmHYeSTdEIzJNlrV1KQ6pkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKjfsXnIwS5wqGv6KyrcA13veWWLtUFkIX5xjXiap5m8eWIDtJny%2BXJ3NNnRiUyRa1Tu8FXMrcipQDmiAG6FoRTAQob0cqj52EPw%2Fb4%2Fs6BmFb%2F0YooaA2VLJLw9dE9PIR329vIu98csNN2vg7ylDbeqaACrDHsGxqZIJNxhI%2BpEyV8eylCRnnGEy5BQuLuTXUrpa38P9%2F%2BpaGfbztC%2Faygr1paBt0Uy9zh%2F6NBLxWVWZPRlE5sM6MYgIrM7iilSAi5l9Y026GQGuhnyI%2FW33zc1FXq1%2BiP92UvJv%2FrCQ0M029YsoK%2BXQhwqDmr1zdRwPzTzgiDyX2bEZsVU%2FgLE17KkKyF9b%2Fp%2Bc2lbLGUzcktBDiTP88MOrxK5Rv4QBmzrGlZNbZYYcvl%2Fi5uRTZJ1hihzUDwYcc8SFxmpnJSMGpJB5oixg%2BXQ2VDtti1Ycav9A2wNJUqR%2BhvvCT1cL71t9lFu7wOfu5cik%2FUMJqPuftANqkoi1mUU4lRlIJDkRBkIKa2JjueZVD2IqZtGs0sCU1rFSrQMDKBQWM9Cywj8wWav5uA%2FdzN6OVygtmliMaPb0yeyVUw7sy4RQP3Tg%2BTctazSswTxVtWF9IJOvq43XdbwFFRKzMecZpXM4DIV%2F%2Bwrb3zbN2OE%2BTXu1W7zMIXLjb8GOqUBAzm81o1oAFMomcg75De6nMPDFNvMLy6HXRfJ8XuTRqGcxdrYY5idzRhEhmtBigp%2Bc7WhYcNz107rg3V%2B9P9n373jhnRfvyd24wGBF1HZcQCp8J3zt5An9TEo%2F0QeBo7XFyhHhD56yFBet1zEyUjEAQ8PXg%2BhfSyTUfSCVXvxketIuyLnVwzQSq6e3AgmOOtxAEFY6y4q8YHvHYyUrsbS047ipgN3&X-Amz-Signature=e84fbff5a7551a0e0143fd38609773e87ea0508f6b730e547636d91b2176c6c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
