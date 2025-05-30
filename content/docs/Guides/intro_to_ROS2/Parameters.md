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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCOGZQW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzUx9wIye2vDo62DbQHx6UwPxXwLu2Fumd16HE2lhuHAiBj4MRtDIa9ZoS2FjoWd9DVb9gHexHDwHoA3VFsoOg0zyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Sh7WEUEjOhWd%2Bc0KtwDm0T2hkfsCwVA1xKkzNpFt6kXSwctwySHE6i0njXcQQUY0FfaYQ4z5F7AsKGp%2FTeD7JuFzQT0ziB2Bn1xbJ3%2F8wogcBzQ76ZfdhTVR7Iew8uDva3y4SufYgLDughzzf7EXjeVPdcFMA4iPxVx%2Bk%2FxFx3MbDQb9fGMbqeJCp9MkmgvK7%2Ft5%2BFZjwGXZFQ%2FJMy1%2FmwPVeSBru8JAbk%2FYL2WanPFE6VsNni11VymML5gTSQKvOLxyNNu4I73zCMZS9losi8e%2BDneevy8%2FZDj8gbX0wkvFo%2BPpyoimuriHeGurhb1VGHdDwcJmGZGrGe%2BJKs5f0ahg2CNZnquSy2cEXc%2B%2FVfdyKFJmXe42QWrO%2FU3BiheWAZB6vPoyCYwBRotDtKIE6Ay7Q1SZDNeCnOk6P%2FhRvC%2FbWJYqor3DcXrSuPIzuyuUDAyF8qNEFSI6ursmgaiGmFbBn%2FzNzrdoPeZuafwh0FINbfVhzL0haoIoiQt2Y%2Fk9Dm2LTIAWqyx3z8eyQO%2B7aRpQBuz7ppcFYCF6%2Byi4DnUNTT0cR5B23gFTr6Y%2F6Hrj9whE%2FIhyWBHu4p6C2MOtj7UhW6OjGOy2znzo5zkNuqpg98fCJJ7xyW8sSRwySR2NefrpyxI9eo174cwpt3lwQY6pgEMaGbWJ6a5isCozCJswvtxDbOPJjNqOfD%2BCCeolgENa5qXL8g4QlC45bHrkcbTLjr5rLedP5ADLLyaQazXoTwsmQkqls2oMcFCykX8KWnQcMvROUdM%2BTatBa7ITisNgIPQHJ5LqFC6gDj1vyOthNjHa79%2BtV0HOKljZBozW4QNPidlNw6MaIKn8ZYvNs%2BYPD9o8zcg7AsqS3MqV8xqjdLzrjUOdfkU&X-Amz-Signature=2c2977f565f344fb0b965842ca8285fceb6c571783b1700ac940c895b9d6044a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
