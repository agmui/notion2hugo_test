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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S75GHRL%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2CQQXug6JfHQKaWQBJEKtFN9ePaUy2m9xPo3MoFYhQAiEAt8S9tse8IoaSbPk6719g554qUdl9pq63C5CH72d2izMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLNMz0TuMML%2B59hhDircA7IqbtIvXqXPE6YheQnorqFyQeu06hMfHGe%2BALXQhvNIQDapjxoAN0AHgNd9LRPXzNuJVkn1H7RwXr5EHULPN4wS5Ieih5rwXTe96aEQepRnkUAFyRaWGf%2FtSf7Jen0IgbFlRV%2FbOGrA4AEE4lG3omLeViOmSKDTYRMPjrEgFUg1WuA8Ptuf8FJwF0DneAN9SXspiiUYKc2GXrjjiPFKp2au%2BaZHmFak934JnDaGniaNGWUMb7z4Hvdl%2BIw0GeDUfnETh2%2B6PnXawKhxaWs8cHcRjMcrKbymaTn3xSaG6DbpjWCRMV4sseEh5R98En2r2rvzajFO2Hqoqhy55JRhZBtrivG0WtZ%2FKQB2y2wP7QM20V8kdGALOPv79jprGQeiuOSad9zsTmhhm9Inro6%2FMz%2FJ%2FSusA6pyq7YtEVC%2BqGa6c6GEYBH%2BBTuFK3Ei9MBaw4dvbEM5Ak4FxM2iW1LxC5HfFJe2x%2F9aVZ6qx83IfkFOCQtthT69fxqwfTdhDHn9c4g15s6Ub2myjJAHvEqJMfDiKbZ%2BhZoLAzHiemgZUgtO4rBppUozc%2FQcmMUGa6dZBJfPAmGvSW4ksHuAobhsroAB4LIJxtXyz%2BJj%2Fh1aQROyztTaJZkLPPd9X0AeMKrLztQGOqUBeca8ILmIjDmjMAUcRllCXWpUQO3J3P67q4judz7jSVISCjfRhJSJL86Vtqvr0D4nWETpQZSVu7ud4QRBfJZ8zlPyk71l4jV2tICvJkqTKWHBoU6lsxVDpPt64EhE5%2BGHuYwXPoI52JalSMYxu6EwhTIy3sqeZQnomqPHyiaMqlCHL0JXNUjz4ulZlibxQztdE9Nsw1cZ%2BGMMlWvCzpl%2Bf%2BjyX%2Bqw&X-Amz-Signature=992fd737c1abd2dd8dc33065880f833878b211fa08abc3380f0cca1e9bdc1e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
