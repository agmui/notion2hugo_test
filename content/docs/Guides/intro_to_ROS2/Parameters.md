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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE6EJTND%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuyI39c5ZAAOgw3HJ7FRuYj6I%2FWqHvVSBJz2d%2F42mNCAiAPRXLboNTRnthViQYudxOGJWIn5v1EYRpNFjeWWslBOir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMxdgrlus68g50CJkAKtwDsUuq%2BKZHFYYT1RFNd%2F8Z7IE4OjzPxao4ZKoyUFTRR0Y7L%2FFWfoc4DsPXipJCiYUNcX%2BDHJBBamVAq76nHZ2vuiXyznH%2By00iClCFwg%2FqZC9dwi2ThfNGHZVozIiDaLxM8XWxLDf6PugYl3iy%2Fh%2FDVO%2FhCG5XwzmC%2B%2F59R1BGTrZh1Ogrcuxq0m34WZzaDUiX%2BP4IrM8RzQ0D5cMrQE2FVoaxDzlh4j3OC9Db5tUA2Eqi1ZV14mQPnWGHTi4JQW%2Fi6qBzUW58f9VkxzjHuKAKvE1H3YaPNHEr8H%2BvSH1iAMRETmwHDEy%2BHQ%2BC%2FgUKXC%2F7whW8n6nPv1wfvk6wTlYIPK%2FCyvvtzyYV7qqnYIpHeaKNB3oi0yH3KWORKfcGoZIBoEkT%2F57RPKax0CjajWyNFAtah8BndEnejecClJDf3N2JymDfg7WjMOJueb5wQcWnyfz5nEXSlmD4QclrUtDDboiIBkbPTK9hxROH8ewVRAvKFNdSxmk%2F2Ib6IwO1f%2F0%2Fl2o4FV6Tub3ZtJFbsssQnkGWYtgP9yTRESkDlaNfqOXWjZMxsuabezBEEeP%2FOBlgS03slnbPjKKMC5ApQ4jKbVIZ4EQe%2FyWz9XA%2FLHvAX1tT6eZ14qa1TUXzTxkwssOQwgY6pgHfLiroJmFNsDydiPBnj5NiNGFOO83xA1NTDbKQ%2FD%2Bi%2FAEbtyo5AQVWZmlNhca2m2e5UoUYsLvwzSbT%2B5hK97gsKCeZ3vAJli0m%2FsAxrowEU4mvqB0ZgMK6m4t6awlCmote4SUbl%2BZkFWBOHcnSAYxkX0mfgxu7R7mCI1WQp3YG6tF6SGpHG6yy3QdeUc5iKp6o3tdr50Y83nzhNXo2cu9KkVEJd%2F9m&X-Amz-Signature=ce50a471a8c9214340147bb74271741db24fcf09987cea0f36f9a0fe72be1c35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
