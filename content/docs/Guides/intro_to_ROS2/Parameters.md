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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZYWUF25%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFLGcc8j0i82xsjl%2BHAnWAGZQZ3%2FsFZeQEKnCFdrKU8hAiEAxy8w7Zt33bHcfUYpqbesxOTJZ7vWU%2B6tTVzuGkc69Rcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMBaDVqFxUDCK75KrSrcA%2FFobuvrX6CR1nK3bQqh7Ris66r8zViBhN3Y4uzkzOb0NJc%2BKT0bCh%2B%2Bk3yvxyuEnDddwPrUTF5ntr6BpsXLDR%2F9U%2FHFNyszy204X4SdzvNf11Agzk43YxjRvDDVET16Nk65CMacb6nnJD80rWgW17H%2BFzcCRLXozdjAmbkloQVhwrDRWsFiUP7L%2BcGKTy9eSBkefo9vqLP8SjwY%2B9HLwm2isCo%2Bc5sgn%2FU%2FcyuiOF0sBdzZh8BoRLWYccd3pv37Ds3GWTNvitBGAUf65FPaAKM%2F%2FjOMRnFsAXtj%2FJ2eoPg0mwNlmfxyHcekSp%2Fs4QnVKzlPC237HHUEgfmmfM8RcczxQcR%2Bkqn8tGVYlJt9Aewv%2F8pQ66lX5DTS42a5Po6%2BbTB9swAw8LQdMsvkXkhNSadSlHYslUOzdGGdS3%2BeaFwO9%2B2MB9NI2rC4UqohZE%2FxQzoeMURONReQzQvSlVmdYyEA%2FPzEmC0wtxlal%2FepRjYVIWE%2FFnn7F0AjwKNza9MXMwRZfSoUsW2EA9gqqva9SjbVIRC0%2FHctF5e4Nl%2FxB1ciVqLG7I8QvtuR5vpLCzpis2neWvNCo5gH4u2fb7yh32i2Er8sWQnNbqsXq9yaAEAD6CIviY2Lpd1Q4bbwMLz46cIGOqUBLYhx1jChIqioxZyz2CVU13Z2OSKctv5LoVSB6jzZXunOJpiEjuFGWjTDQyMKEk1zrp595WT%2BeQrOaeebdko5IE4t%2FYOMTAqkzxztGIpgqrMSGCDvgrl%2BB45ZBLnfPn%2BNU%2FXVFZ5QAxaJ4liDRAUsMdIN%2Bnozii8fSmDtD2gwFFCjS2r6IVfp748Nvo%2BCAG8kMCNT1pZU3K1cT8Bcg59RX7s0LC9p&X-Amz-Signature=db8ddfcfa51ed78e438bc5d9e4312cab7d75d0f3af5ea4f87291d3001ded0072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
