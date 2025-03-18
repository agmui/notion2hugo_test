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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGKQZWGM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV38mI2dq%2FFx8%2BGyC3pk%2BJ4FSNDoa6xSJ1FcUuWVW%2FzAiA61JzdaG%2B5dU702d6oxH7uXCyj4gr4AOvlzh6ZyXJX2Sr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM3nzICjrWpSnhqRpzKtwDIjh%2Fbsjh91sd8wWHFexg8LuVbIXxNR%2BNtlnkrta1qjFcXI8njWYrKpWNWAoVovAHLpMUqSz53fZBA%2Be%2Fnasjk%2Bb1BhpoTWR%2FuAcC3DVkXQrrS832OVRM6QkEMfyyVjvR8EU%2F6HwobdYovOV%2FjVGyKv7if1DagpjEAKuI6fdEDwKwSqOShROPRudlOFymoniI%2BJQfp4%2Brm0MwfcYpP3RfL1ElB5O9ok5j%2BbYqlOuBocGC%2FEaxPLpAqFGTDzwYtAXYE7pytZT4t6fsI4j8zzc1mpAfQMFEmmJKbc3o3nN29r4u8YYh1vnCvoKC1YTxePfvGeyCde0fdfvzQwFFBP8lcLTt26IyR3sN8dGBg5YsKGmjDjPM%2BHL%2FHKw0IkQVWHp5xb3b2KTfrb%2B%2FZZCixvGubxi1xm7RcfICMYXtj6QcYBmNscIin7n%2FrtsM5CW6zB72K8RH%2BnpeE1Nl4%2FP324Dx3K0jbbJipjXVp3b7oy1K%2BOsW0lJNx90MA%2FMWTRmCoa7kfk5B8QuzaTi5T40ErvA9q8Cdtfm5QU3a932WX4Hi%2FuefwGH0JQgz4lgAHx3k%2Fjn5haX8wOIH4aM1huh8P4p%2FgpW8QfUNgTrilTvtDzePxfWN1EVoDJOlqTneLdMwuezivgY6pgFfwv7BshTjhoxX5dNtxQa1Z7mdnvZqJlCTAaUHCCV0D%2BU7d5Y4F0PX7FD9kroIgD5oWpz35S1L4%2FbV0xy3mx%2BOAD2QNs1bYiGVY46%2FVgdHPq1c45WQSGyAOKSUTgOs6ppIDd%2BiBhIb335%2FHqv1KjxF6HSnLEipDqZNGB70fj32p3UQHCE1V12GKn2sYKTfqBIf3%2FSw%2FzJnnolEfNEnu%2FjvJ%2BUzGe4W&X-Amz-Signature=38361fbd4205102ca101d19ccc581718e5ea17ace72a3cf92004f010d79d2599&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
