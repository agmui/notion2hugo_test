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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REYHKN5N%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC16TzonrAQHgocOi5GXZZ4DVwgxFToWn5oEkhfke7xpAIhAPmzNzkj9ZJgM9bPUqLTCf%2FV3vW3Q495%2Fc6zaaDd0YNXKv8DCHUQABoMNjM3NDIzMTgzODA1Igw9naMMnc4QGYl%2F%2F9Eq3AO13H3ynbpuKcW9f7vmoemcnXPt376UaXYogFG%2FYYQCSpbaxzKLtvM7Irxyo%2Fw4LOQEpWo4c%2B2tpp%2BRnB0lPRl%2FM%2BzJuEhDSy2QsIuUgNLw7TT2WCW%2Fa3TpL15Rupzggz4b1Ys9DPQKcv2c122lfWXlmlNGQbXseZ8qA%2BJ%2FbwsJd1yMoim5kUI3kZMS2WRl60yZT5fCNWO%2BtIlCg6lyvZtA7opYzm291eAJSQNJQkrP6j6Q9jt2YQC3P1FYHZ6aTmpZ8xL85CED%2BzJMSLoiWwXIu3NC8h5XY74Vo%2B1ijD3hSFwblk79qB1dYidu4pHxKtguMaZiQbTR6CV3T6000F7E%2FoyvTj32M62ALe7mDgjU1dnBofUr0RGDzHGdbou05qw40SmiOogmigQQxoEKNhMfxuUxTejPjzX0A%2F7xbgtPpCTQFSd17ORHQC6%2BJFrMM0DjEPyOJ65CPaTc80L%2FLyOOKrEFJ0wL5DJr%2BEJ3e9XNBZ562SpZekdr20svHxglt5ywAUcayjyaSaw7Pm8uFGRoRvwxLD%2FrqEToWpgSVuhGh0lCsTOE%2BE3xDCwkzjdtq3VdWHMFjedsFJjaesYKK1Ck7h6TzTPLvJNjSif44Po4Aprkqy8YrjS1zj6XMDCgp9TQBjqkATdDl53lsbtoBdXfO0%2B9IbCnPDgUj2ibtfa0eTKSt2t4MssGHxdaEwL6M9QH80H7bJbAnWLvqFudf01bmZtrM88GjV09CUo%2Bh8SY22CcLCOlTrhmboXWG7Y2dOAt8puoXHNb%2FBMzElHB9gIUlaJMiXrwWWLQaj74Te9o5SuSKk6eP03q85e0pcq5Qq9nPfU18WqINjM3sO0WhUlSZVD46%2F9fc0YO&X-Amz-Signature=3d8582ba5cc7e367ccead5af2bdfbf2985507abf063b320901fc90135d2e9b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
