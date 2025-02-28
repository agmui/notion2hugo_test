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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWN5E3Y%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD3sWZoZiGLByigcqCKMq1xMeO6lHEUQ9SYCfKSodu9rgIhANY0%2B4bg6x91%2Bkj94lNyypawRzUguLsXMHhyMdbngo0mKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA7nO4a9EpLPrKY48q3AM3qVEUsOba3zy00m2BZeDwDR8hV7ZGetSFnHt%2F0xft8ht8wp2wP8hufagHE2hSqWOb4AvxH%2FioQSZqXpH16tUt2GgwVxsBSbXopDpqzJrRyj3k%2B4ulb7dVI12a84lr280xHVQdueTvnqG0fcyT%2BKAEK%2FE5LFH9QLUIqvuCn8pjcFZeZHTFkUQXaFfdwCEqRDAUyOI5L615skpl1yK0Q28%2BuMc%2F4yrrPvDeHZhAqogP%2BUrgmhv4a1GWB9PD8%2BArXCPv0q3rS2UPUXVcxzmVOprdblqbgnrmG8W%2Bk9hg1LEcXixQH0vsRmtA1cfSvXXCwZ10zRJS%2F8ORASRBq9v%2FZ1Jv3T%2FnioNJwC4hqAAjEcwc8kHM7WzeZoM68Iz9URi1MJ2qDz9FacTAMKkm41ghVHehOf6DTGC%2BbDtDv3quSx7Fr%2BnYcsvSRW7ePTbS2qeWCt9ozeWCJ6QtTEcsXGgpBbpJR7FQCWwaEDMYbS0RS65Y8Ye6k78OjYU%2BYRiKehNrzm49PmPIIhu9WWIUnS%2B%2Bb9jxR2TUTq%2FWBSd9Ryf1aNYZRL6n%2FrUsWXDOB4e5PSFlrp8tcysKT6mz4RGuOvNyZ%2BnbSvIUtl0ktfsRrawxI4KsMgzDeQcoU3Dy7s13FDDni4i%2BBjqkAdHaFkfvW9xlStWFiWzPbLvsQaL6scvYwndnQOiScYkD3CS0VY09hje3DKK0x8afhds1ipSUkMDKx1sEDIi4B9YxrbEHrQrOC%2Bg9vQrNS3H0Y%2BVO5yM3%2F48vkjPIpaO%2BtCSLJqDp%2Fzqp9WsW2%2BcBvZ2%2BwE5WiZxXl2X455%2FzqdYCWdzzaqs4FnpmKGnLxcyI9CbPgnOTAjIht4aHG0MNuT2JX1aW&X-Amz-Signature=767dcb3c33a7edb7465ab2c36b28a70e063ab8d16a1fb985d9276999ae9577b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
