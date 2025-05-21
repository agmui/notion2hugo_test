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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627RWLKGW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG2AkNc31995aPHyScOAl1RCTzL93NjFsUahdp1TE%2B%2BQIhAMY3prXHTXEkrrFkeGJVFlQFfHQ59Dc6CDOwTfjIAGasKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5qWBDREclrhsnUn0q3ANJ2T1IF2Mqwmyn0bf2AghNxAY2qL9%2BfzKjQYJhPCQNkwUXAZqVlnjRftfEfxXl6AiPTU8KZzVKVNNXWxurZiXVIbyepOSdWM8Y2ofDbL2S15ygs7swynf%2FX0H9XJjE7c2W1LUdIKVAKy9uKgWcQrkQSo7mvLkPSC9qsFAPxkjieKpoHA30b0zHcYxn4b1Ii0uIFND5Z4KaQXq6U5mtnwpvSxWRcVcqY%2BotFNqXpB0%2Fk8k3SJgR9Y3O7IZMV0vP4L%2BhdII5MrsbKlmhEOZ%2B5lCFdEyblEOqnN0qyTA1iQNZ63qOt1yQtbMQ8Vrpq1Z2ZOAJDWfMbxrbhOxYT2izE5lOYQgU%2BpOBkWq67OZ64zPOrX3dCEUTEpN2Pro0LPlmsUJdMCgQjJKpzXYBEI7DGHjmW%2FjSNtxvoUzAFzW1e7%2BoJp5mEnVHYOZgtEMU1aOWk2iMsNomIisqu%2FTXSySsbZLRl0edoj1YPVKhX1HQxC17Uon9VrKBHForVni%2BYRKORKKQ4duR7B4oBujkCZcpVacK0F2ow4H3cFPivuGwCAp5Mxz0nbRIvEhPoy239RePN9bTxaG1RZ9rUp0IakDo8wZFy0mnhbfgTU88IqbYtVUa38h8zZlRsfCdmJGTYDDRrrXBBjqkAUSl81GYVyJkaXZO%2F4E3VNeuW%2Fq2BaZedeNk5Ug9%2FOiCjg0BIFcpoKCgI9OsRoZPBh5uf7LCyD3G3SaEezhRiwKFL6xJJO2Frd7MtLeIyHFPTTMdp1Nx%2BJxJlqlJf4HVJ%2Bo9sboM62CwzVOFAUGRmUi5laJVqzncJnTsmLBYh0P2Ss9K6TFCL3p0Q2lQM7cQeTssg19ln%2Ba693uNgGmefOWSCwpg&X-Amz-Signature=38efe28f825acecc9416098e24419eeb3a2c9285e948abdf7524fe267ccdda33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
