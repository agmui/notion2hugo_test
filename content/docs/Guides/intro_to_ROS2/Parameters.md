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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWO5EOPB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvfzMroyKahnfo0c%2BmE6tRp2bjcf6fDb59qlZuaxTkkQIhALKjOIw1jbxS3pvUenwJBn%2FXzKz5m7uR8tn5GR3uAatjKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B06u%2BxiPI7IPIiY8q3ANi6Ms8lcURTp9Z1W0CDuaB8KFXddvnjn7rEI5XBy0gEfXX82aOLvRUDdug3yFi%2FUwsQJ%2FgKF7XIRr1LzLtqqLpjZJtnPWMoJcYn2TBYavPCz%2B7EcVx9t3GmxbRH6G6rTTCumQUMrp0iz6JcqDDRErnW2X2%2BQyQxLaAlWKvQTjcvtXP50XPPQTkCZJ4YGzPrxb0ebJpR6tXBUKCH4c5GOC7VgU2vR%2FKCGT%2BApoQHAMDWIfoZeaiNRXyRi44emw2q4tO1Njelu2zhKfjGg87V0VZw2RSehBgkqCi%2BrdAEGIP6sk82ikRzncCY2vIrAwwVjQZaKiJCUGnBX6dk19CAETnzVIIryVmY2eDYVDMUFYhj4pPSrWhbO%2FGDAE3KleG0J5nfjfIViauxqSmqmH76X6LR%2BeRyhaBuwiJ7AZNTZtQYmiXEXfnNM8%2B6Tm5e4%2BR7b7GWAZug9ggj5Ggv9nGGO2SbNlxQlbqVTK1FhIVYccs3bHEbgWkViy6pVApXTxJKkxID6un8tHOyWSczlOHpQcMyC4Qtznm%2F4kT68mLm7o1LxVQg2%2BPw7GM3T4eznP7LuWEtzFIy1byDGouo91NBsoxMn22t4ogTgyBc6eFLPmWwFDTEd9oXFWgEdJQ5TDir9%2FBBjqkAVyCCfygDgDAL0cnFe44uU%2FVvOjuNwDyPhkmB5P0UYILdQzNJAa1SD%2B8bd7HzqhVAL6qW2ppOyAqyHiB7CMhIRhT%2BUmkS3n8OL68kKYNs7oqO%2FaNjFZwB3ZL5sX1Tgbquqsr3bhkZOahQAzXzqmjCgzj1sAtPWVpLT1Y%2B5p9zSYvu%2FBuda97QMruLxSchGxUlXpbZDsAIaPr%2Ff2fAzdW2ewwW193&X-Amz-Signature=bcd3fccd817980089b505784b381f1bfe641d4905f0f1db43fb4eb45feee31ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
