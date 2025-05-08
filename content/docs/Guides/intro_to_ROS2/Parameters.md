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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZISGJ2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDet93zco4fjjk7jg2E3eOsxH3isIV9N1oLVeimH2euWQIhAPq9VA%2BjuUY3S2kC6JRGzu5dD0Js3GsO9F8VWlhK5h5wKv8DCHAQABoMNjM3NDIzMTgzODA1IgzMF25WWntZUyEZ%2F%2Bwq3AMQi50T4NGi70OejWN4Ije2mEYvtvnAbvNIvF7NiJX8JUm%2BM%2FvGW1FUBUkM5cnqFfpqEnD27Q74zkIyD03MZnKYA91vrtafFcxO%2Bi0GJnTEL7LcSFQsr008O1aW6rwoshiIBXx5T7TTp3dFDJ5P0wmoPVvPmk0HlARtxFQORaHedf0mRDLaoNpgTiJBBIBhnzVvljGYjSl3TFq8jWRVThNVCdjrJCBcbxV4UoqU7VdEUZCT8TaLzl%2BO%2B7jIeYkrpoAXx5yMo4Sc8yUTipizsudzP9DlJ5S1LNQQHb0ase18XX0KDx8KVbKH8g9Jyu%2Bptej%2BosYx5GzStwIrBgJSv%2F9hpvXvxcodHW%2FQrcyB0XDeNrp7iNI3QuuFNwRlknuvkPOV2jDDks7KM6ContaU%2FhSrza91YJmiNsrb9UqcIrcrYwEAvHrW4EknPgyP0h4mpGzC3Rek9aNBOju%2F8lyyGOesqKHxp6QCnh9QphGhN7EBruU9HhrtYw00uBYsTwoTbAiQsw2fMf4voEPUJE3FK%2FwPY0XlCt5D6QV6yfPpeFNkhGlLujws8Ps0HK7qbA66YPyVpI6RxOlxC8eDQv50eBW0y2d0XmsY%2BEGnCrGjR3esx487SMIw2KjGdS9gUTCorPHABjqkAbMSey%2BhTjLb4QvtjSh4LRfFl6BbyIVaLTOp2shhi8mT%2BViwiXETdwl3KgtTi3%2BDEw87rrKUJkOsA%2FpQBmyMYrr2JBIK0TlZb1Z1zFxFUu%2Fbimv6LDdcmo3XKPrsTxjZ7iPPo5wAbbw%2BbZOiSuEn%2FI0BbcPPR3C2pHKrMCfXz7boKJiSdkpGmJ%2FP33YJ7wPm7sVdeHR5K%2FxjKW%2FFps2hKV3u%2Fms%2B&X-Amz-Signature=8f7239a2f3a6a1d71c773b6a9bc05bcca0ce49645e170e28ad237e2be20c2719&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
