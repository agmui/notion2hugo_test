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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RB232UI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDSemN2DD9VsprHYcA7ZhoTSAs67uqZnZxC5%2ByGnUJVCQIgKY1ZFu6hBKU04S18qmKcM2fJu5zafLBvjcD08d%2BFg48qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNac2Wb8LtYKPkPStyrcA0r%2FtVsJxW5BKCNrlwgqvPiZOrMTOcxO%2BY5xtKx%2BlEr2By%2BSrLivQN84RisZrNcXM0JP5R65rGRvQbvti8b9T9GYdtJHyiUo0HbqI8QpliwUmGa7dxUhecsDSmEc0VGx1mtBecWscOAGhoZEoB7zCoq%2FWq%2BtasRmAfYZQpsEt5XUgfLIEa%2FKHe7KwiaoiB17IiruN7GWP0zczkx7iRMNckMkOXLy%2Bgv%2FgIqTrICKlz2ZcWRyy5Cfsx47u7MniIiSrMFaVInFn1JPZMtFWDmi8ZUiF%2B%2B2Mn5mzqf6aZqpojZmOz7AZbGLc7hSdPaCZlOXp8g064dwnickFIoUl55wqul36q82R7CEayc2hJueZ52vMpVgKtr3RINzgVZGWOzI2mcOrUVT7Zdg3pSOapdvw1sNQe73MoGLHO7gSsSmYcsumC%2FcCU9dAn12WfaSeNv5FV3CbPn65YZiiNwQOTjrBteUB6fjMZ%2FOsSEb6KWYoYxHpG1eZZWiO36vPSG6lDXiKwdPbdHScFdw7LLUzp10U70HUuoWwv9mgN5k8VxYcAvQY9PnMxVTkjYyN62gf%2FOhp%2FNW95Yn5Yp6BKS4EzdGx48VprMukSTw8aabcLbH9n41VpiY37wepADN4L8lMKn8t78GOqUBtOk2RTK5fxNRK6GepgreNhf0XHgOI92pWLRyyJJ6gANU5%2B5DMXJUObCYYciGUHck%2Bo9Cb%2Fr4FmX4TuVx5EcawgdJymP%2FdfcXFhrD4ENfJBi2MZjfefyc7Uave5b2MlWzU5wgRRVCDQFroglBB%2FbrNVBxU%2BeGinccMuP76wRv%2F%2F1KvtPGSmiTVda1%2BhoTCk%2BRx4ByvPK9bD2OgkqtWyx5fqtsZMRj&X-Amz-Signature=0ef3e52edd3f9b9f7494796e6bfeac4f96d20e5dd7bd187f62037fff9c0303d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
