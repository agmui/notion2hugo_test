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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ2KUPA6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLVnMBP3ji9TwABrxixaRs3Rq7erVZgtbW8niONZYX%2FgIgP6ioiOJGTkAcs5QQMHGymtXj9pj8BtmzTnFspjK%2BH7QqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOps4K0ju4E%2FTIDqNCrcA5I6ZudkL%2BVzWcB26p4BeEkHeyS8Ohf5k3aLGafBfqQXvgXsSrp12ScKTG%2BjzbR75pjgQzp3cpe%2B4HIiEy%2FOXlwdkD2WzZS5M6377X2eiMbm39UIJuwsIhwPwa2fvIT3gMbttjPFYk%2FCWqVZpiw2q9h8X1BCe%2B%2BfiZvlGf3z002TVcWMZoDprBWW3ibxQyoH9ZElQdlhvfhPNCEnT0hwOBlyOZxOnRMWf1VTxcc%2FIrt7X66etVk%2FgisH81Rgt6%2FqcDlXRYWsTX6cVV3D%2FfEUUV1fIau0RkaSiPzixD%2FCQAG%2B63ETjNZnuETdkj3T%2BUnPOb%2FymjrV2IPjwBSYmIyq9FqbfsJk9mJqAIhg8B8YfrneMErPZwqtPXeb7dPPKUNchS3RZlMBpBkM8ABZALCfCE75bBS49l1pIwc6PALr%2FyLDmvCdLT4Dvl8fDZQ3ZbNfVC3wqX71OfxGWXqOBZKHgLIUx1JJLugz7KQeYMVVFHHnM1RQQzVATT4ENYZSajQ14WVMcT96LFyIn7%2BD9AlD%2FGmVwwAdnfXXfIjpGQlIkL0vLuCWp9%2BIDcMt%2FGg%2FCMDdsUwL5nDrwI6PEYw2x7XXt2jxb2XCalPeIy3aFgZROD8M9pFkPxKSKoGdGBfqMLaY7rwGOqUBaISVVFXUFW7HyrsDQgzRWD%2BuGK56riQ4dTmkaUz6aXfKRt60VAusYEz4ddtrrIYvlDi3zvVk6e2%2B6DoZOrneUj1TPX5RkFF9xDcPR5Giy%2FNfCmCkKHrOCtjtsTswBriqugj68RiFwcB2PdmrYwv%2BzTS5gb8a8CWqrCQ7yovcZqCH%2FgTDpwQxKcQq33MIew22prlSZ86EiVNUMEdmi9YarAQht%2FS9&X-Amz-Signature=6d1f272345fb7585101cc55c22c012d49990da4c089c531804f3acaf647c9576&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
