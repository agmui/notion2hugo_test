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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMI35TEF%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHZvDf4ItWoeQO5yvWOnUYJ%2BZqRbwUNdC8ZlzOWH%2F%2FvJAiEAyz5SQ0ADWZT66OpYdRUNIfj7TtCGLrGMke44H7sQ9vwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJC%2FeMDnSKugTyD%2FKCrcA9sXinR1VLw97b5UqlPBprQBqhgXyNwGPK3fK%2FYUEs4QYPlJKgphrxbggbh75ndoz%2B8g1pHN6izhUXCsu5sXr%2F72Xsg7PbrgQi1hFAcvsTb%2FnoA74MgZftXOhdQjAzHARX%2BX%2BJbRPy6ocisAQbQWJOfrmLrI66%2FTEBJwPUPnypb4YXF7WR54Lx8tulZ9rdXIuiCwyYm%2FfGPy9CAjPOMn9S6Frvi043rvRRCvz7uh6xLsGl813CQyoxvlxp%2Fe%2BYo574HOsxvB6Nh4lkQSajmCtPgIS8%2Bai0b0oy%2FWAGNnEY3hYSl2Q9KADqurYxlNhZUWyPS2MzwtywVrSV%2B1vFYKZr0DgUwVZ%2FOTv8tSjaw16xCfEAu%2Fv4IRDVGkYMyVz7Vf%2FHTj397oyaK9tenwVGNXO71sbCZevcZHJhQ5HpswF08uTEw4VgfstwiaXIcm6cXaecd5eyaqx3FaxBd021vIafjBI%2FifKZ7wD1vh%2FFVNiSDFcwUZn5btyRp2KAMpqJkQCgflE%2BQOj8pP8jU%2Fvxw2sUAkJEJkdqQQy2T7ZlOXQWyLVeBVKLKpiLUVb0LbubpPXMe3y3101Ke7h1fPGTzBKvj6CDhMiYlTanmaff2ZLL%2FwHB9Bf71pZLZJ2AWRMJq%2BzL0GOqUBz7I1M0PupcS3TzsmEtCbp9HeJbSTlgjLVHVtsHc%2FAfbnEfBwSEQuja9oaruqV4CU3Hlz8C8s8Q9t74sbred3kOW6rIdlNzvESzaPYSXUWzAeL1nSeSP2aQB9gw6sVJYSf0B4AuP3u2gYySLE9NqHGISvUMdMS7qdOIoIZ988r2bSfK9RTLY1klaiZz9Bm%2FgFVDLHLCvVxw5fAJ5LH3wb2EYxFdyP&X-Amz-Signature=663e1186bbb513ec5a0e7b959bda04ec57564a3d0bff2ce89399478c6ad46565&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
