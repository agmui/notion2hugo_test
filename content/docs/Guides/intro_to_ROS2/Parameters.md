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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ5CTP5M%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCYLLyfQS%2FsFOzlSa%2BVejsHZCmR6jtPcKkNHUf4%2BFGIjwIgU8m0kmwpCNTjhKKwmqzrwM%2FPHEJEYpcUOQGkUHhYCesq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAPxvMW4R2j%2BnukDMircA4At%2B8ggE8tEx1MOeFiDp9Vxw%2FJjkB1g4nd8kjMNK2hnGOvadgWwI5qaGkT4C7idgZD3VR7IQcBNiQdaLSmpUmnqmo03dHeaP5d8zPdCqok%2FZ1QdVa%2FCoFdZb1zY2lkVrrCnogpBYBTfBiJg55f4AF4sLheXqeBxesnZJb9moREjCpzmmwqDUK%2Bkbgo4j5VG6ojqdBXmkCc9nbVDf9E%2FiUswh7KrajKzLcCqmZ0RMTFjHw6YXMyuSSWkm7qV%2FQOtVDVyTJ1FosFzhUzqOh9lyM%2BNtnrknEA1aDa3gtYuHwNRLID9kT%2BswhqL%2Bdp4JoSLQW3j7odTOJHPtpZtR5ogZn5gBGuDhtghr07nsUmJHPhdhbSG5mGMjXSofOcG7lYRVhrCAOr0lKUQS2Ip%2BOzMRhgvbFYIt6h9biG1mVQCOxjKNvbuDtRr6osX8KzH%2B2l9hXGugSAXJio47OCej51fgV4%2BMT4mGJs96Ul1gqC44TMZz9odC0WQf8sCLzs2I0ReqiJhiXgFZRJANBo8bowA668iOyOGZsvIMjO0XjQy3JuAsd7jZ0VptvcDf%2FtOwaUDjKboPRdoQ%2BJrqEbCwWCPNmSUEeGVTlQuLvxPGhJsF0qgGmrUDbE%2Bg3fUQwG5MOPv78IGOqUBQbojw%2FY7UdlcImT%2BGyWpJtXDdgksPEZRd%2B2HNEPz6ynXvvoFoJ3ckcqkIbmZLY8NdjrOs5DGuKKoda8if%2F%2FJmTamg%2FBCQVUXrAGHZhwDYAlIXVVF%2BjEDXOgdP1rPsC2cH7BsaY26rKBLICo1yayKvodlOQnziyqyZa81CHAdj4E9yJAQ1bGjmVdSATQOK6qaQsFBfsvPI9%2BfoZyX10qxls2O59vA&X-Amz-Signature=e96ff8481301dbea689ca894c96544c6d30a49ebc788304f5120e9de60f99a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
