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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AWPCY7B%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4n%2B1i4aoLvC75ZHbrJYfyOxmlI%2Fw%2Byu9rjm80aK2FsAIgAcpYfxYvhaL3ZPRcalMRhdOWR60j27xj4GLEgVCniSUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCaJehC5P03TdKqxCrcA6x0lMExfeXPlKTSG662z0ITSSiPzEzk1h6XVNis0q2SOfAXaYpRISKHgpL%2BpvTufD49IgTTjMCuFJWB5zJ1NE%2FCxW7T3cXQwi5yN%2BpHi%2FMcFqGD6zkMajzDnEDPJbQXFW0zByLYxlEYzMf6Nmfxou0pVWsGdY3s9XMdBmua3OmvLuMmeGsjRKZRgctDA0IJ6raHGmDGY5IaOsPsZ9Yu9rY2lqnUTLGNvBQ98rzbJ3Uo8WK7aSH1V8C9EVXK1j6DQ4xnywyziKpY3gO8lryulT%2B3eab7UP9LH7XBdc4qX4rduy3yAWVLOek4GfOZEVZGU1ETi8ZH%2FFk%2FxpNVOsQERYakxCuN9KQlrY3%2FORYaofVBJKyPgV97giMy110hTm8mDfRbbZunZ8HAUhX13SxMo2fp%2Bkyak%2BJXbQxwS5Me%2F4JVhs%2FleguJI7CzSGsARXqTbDhMOv9hpEe7EIttlGeOJtOiJ38tz341cWqzTQRc7maZXZVTXDwf4K31hIJAv4oTyywhpXw2Cl%2FfNyDTwhh1mETSqItMqJPfxjaKljOmKsDvXHX0JbQjUufJ2EHca24%2Bmy13TIdxavAaRMMWJo280KNlHU9membGfd4%2BtX9JsEomoOhOHrBziZ6cBo9CMOPR8LwGOqUBHfyFrE%2FUuQoPcukKlf1dUH4J6prQ%2F6Ur1GjFi0COxb1VF0vuiMUzvzG2VDlo12%2FvBhPxinCVIg91FR5Dl4KCS%2BSyepMKygPYfnXFhf%2FhbKQA6719Hyd%2BA7alU3CQptcbrgb0veuedZ3O2jTtjg%2Fpr8pXfsIxOP13rTLpWoGvFM33fwWQshQwNvMrmKrZydfh%2Baot1SmU3iEXCMtMGcS8hVUkZm1u&X-Amz-Signature=075ebdcbcf499e7acbafca1492f0277756259bdb1f2d17b4fc0719518aeb5af7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
