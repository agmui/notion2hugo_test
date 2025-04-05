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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2JVIJB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5v0pGea%2B%2F1Kytj01jPVuFfU1Ejhjd51HMp6q7Yv0R4wIgWNiGvkYajbraahguDIPXlR7bPYhTUXxE1gk8ZVW1g8oq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLeSciicaT%2BY1y7HdSrcA73BNPUyD9H8TVbcFMPMdNEgYTB1yNOYT5iZYdRyfNkM7C%2Bc9GPwefCqH14UYs5Vfc5dHrVa%2BWGQra3Sqn5FbsmbZZabg5KrsahqxxiJdsUbiZ5gNZuncRff3wBttp97wBoIDqyK19DQj3KmxkAdXjXuJjhNHjbKHwM9RWPRFxn5H%2Bjl6Sm%2BWU0RHIbqOYQLOdkmaN9dTZ%2BKaFSdp0AebcLEmYcZh1i9a92U3X235h5SA6Jp6TR0vl7PKO9%2Bq0iQyiHVktfPgwD%2BNqi1JZ5QYrtGltFpkMt7dODUapdLrl7nx3EJMPjMD15fpf5z%2BGi46lhlFyPkXwoPp5KFae2gJW%2BBTw6vH0sqrYyBNIj7ARcfNIerigjnLvXrK7nEd%2BWfc0OSp%2Fm9F3HmhxpgnEUNBv5q5w%2FIQbl6IkKBoBdPaeuPFHZJ4etmeBCeCme%2FAPGnHAtaYvoDQeAZ6YIzln350MfchRsZGjFsUJx%2FEqXEDoOlQHrOpVEsm73%2BIp0ABLT%2BDfI1J%2BhitzwdS87LX8SJ6Gr7%2Bf0E4BH2HAU3Amw270xgkFxtq17GLfP7J%2Ft%2Ffw2ot8XH%2F8jrKcRkUfuE7qS%2BVZAX9QGHSg2qDMExV3Ktm11U%2Fc5PXn0H9lSVOp9dMPfvwr8GOqUBKMjW9qUOTHQc%2FSD7fyZvk1RGuX%2B6K1jM7mCqHMbxxWnGqd%2FhAtcU%2B6gy2f2%2F%2BHAAjO94IsFZPJtzaEP4JHp7Jq7%2BqCJd8SX8%2BB%2FlfoV%2FFJDVqSfoq6UvIy2W1aoN%2FnnaWGZ5thTFWdux4v%2FQkPANIKIseUkeLaCn27nIR%2BuPgZfFCgWy407Wz0QodocSW%2Fq1EsCYVkvb0BmHTAlyq0ODipbVhAWd&X-Amz-Signature=038a418be369d2bf35ca0d2fcfe811d63b4b96c9e38c16660897be4865646a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
