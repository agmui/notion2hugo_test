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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UNRF7UN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIE3eCLIpsFCX1w6eTdkC4sJENNDrk3n3rfJVoOFyODpZAiAqI30sAE0mP6QGmiSWXBwubiMQxh0oGXE8XfBgBrt2ACqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjw0zqrmBZzSge7HYKtwDyCci9KBsXQvMTnB5lB4KCi0plu4jYPOCMO4WNr2T7OJHMQkkh2COchRTlISWVVwRh7D%2Fn0k2r%2B6B7Y6m%2B63bmaXnffu7ptMJLIziJ8H%2F1ljUGKq88PWKCUKiCVK2j%2Bcy03llZ0cb8MqiN0QeJxzI8ZdQbNgJasG4%2B%2BxNH25%2BbxWLbiDPoYSV6bS6%2F9QUDWUA5a8fbEB4F0HU3HK84%2FtQpcGoyVg6X2DFuR%2BWBu6Hej8ulQtZw0cMUslCt0FXj7fM92SGALvD6PDsFm2f6AkU5nMM8j6rwmIpUWvpQXB2Jn2FK926wgdLEBPyqW7sdz37o4A5DvTceiqrdiNUtooVmbJ4B94j1mXsHBKyvFFqNRN6az8Cw%2FdgIIf53xG4vw27FC%2F7V5%2BReI9mHpzHTnJyI%2BhB4wISPETLv3AD3b7dD4ZAW%2Ff2aOk7azbecPYhehPWjPb62zJ4dCwfZNPMY1q1XwphKtyFtl6q3hNQ7KFmt4CH%2FGslmSqinW6%2BTDXXfQTyBbSo39S3WPtj1Zdxv04%2FzkEqKoVZUM0Zsy6dhBpk2BLVrKvs806A5euezHPxTad7UPAmgeewW7jnpPxheXyVNtuW5c32co%2F3V%2BoVZmJGKirCFZr5AU8%2FPQgBFuQwkuqivwY6pgEweOC1AYqCefXVPXD7PL0HX5z1kgnMHPEvrDYkciawkvDU%2F9Z7xC%2BiLHPRxRFxbm5iCPs2f5wynOjGloOnKpZo7lVGcX5Gdw5HXCAb60IBK%2FygR%2B0l7sf5%2BaAOSOCA2UrMYvA3nao%2BPd%2Fv8ai5CC6vNN%2FPXa38owy9G9BEZblyEMN4gB7Qv%2FpwqP5TEU%2F5%2B8yPnXyrffPySQblsAAZL43sajFJpX0B&X-Amz-Signature=06533a1bbaffccbf0de736c28a62c86f110fc5b6995abba6578bbde2dccc7754&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
