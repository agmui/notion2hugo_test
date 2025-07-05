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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N54R2ZN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGWDVCk16oFHRXMziwZwiS8FAijkZFzGwDp6rUqF2KX7AiEA9FpyxTpD3vbh0p9D11Szjm%2F%2FLCEuqQlzApUzo5iv7zoq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLAFnqOLL3DZcu%2FlhircA87xveEFxxP6feQTKFp7juN4fI4U%2B4AG%2B3WASvbdsNqWhDxDU48zLBLmS3doerHHJbIVj7C%2B%2BSp9CeJSQj1QAz9fZEOR1KBf17RWCMWsU0EK8LV421PUkue9fRgysis74bQgk5EnYfCc2NWucn7pi4QaEVFDPm6WMw1Hw8B6vvPedl2UoWZqDZoAp84w7%2F4hU8q1vBmplCjyEDORHKncmW8CkhnkFHPAr1JBAEdOGBguGGa%2FBrswwpBazSc1OgXGupkQ%2BxInlMmLT6bmjCaJAq9Pn8wJhOsKBKuXH2GbEQXxgh2GZT%2FPiaOB5q4wjhYEY2GMUK7Ol%2B2Co2lUFQ3tRRisU32C2cDyaGMwzjdy7SUCyzHxRMJ%2FHQBC4bUX3r1X9J6vqWJukUcg62gXMWuUYKuCyYLqNiWl5VfFqlJLidrv9nOxkHQnUcWnzEVDXIOqPB5hGj4%2BUHBt%2BBIsZAlsXyTmLeR318dX7oNhiTTu9%2BpvVJiKnMIraqLvxenYapNuUixWcBs3Vwg6RRCfJhDVAQ5%2BSwY9bEzVxERdjg072kF4GBdf2Zh%2BQlOpfyiH8Hb5QqR9SH9RwNp7mz0PKp1oLla6R1aIhYBWLztRCjYrGYQk%2FVVrw7SK4iX3pjBAMKaCpMMGOqUB9E3aPnMm1FQydm0NAtMfcAf8uCf10nCCGLHkwKo%2Bt%2FUyKliPOGKsUb1QY%2FQSIjAZT7BGDz3WSiz4rxy58wllPD7CoaCFQQSrB1fHw200bLLlNNdyn1lMBKLfpfSgZ96AT1HtBIXD%2F49wD%2Fux9cJ4H0R%2BowbHS4yhQw54joeQDp54PnmalzShlywdS%2F%2B9RYYJfxXwDzqh4NX5xoIcPa8kPdxVZZ6P&X-Amz-Signature=7947e4464ba66cf1f946f5b15cba72737e338fa3f2be6e3f05beec470ce674fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
