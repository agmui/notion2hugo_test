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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAK4G22%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGrCA%2BFbm2gSRZUyAxyuLH%2BCBXPDa5enH9b%2BeVuOPbqcAiAn19j3LtVnnczyEyTR7cGVKFEO2CB3zaJ3EcmyO%2Bf30yqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvFnG3%2FNFlnvBrdSkKtwDAJbxzktVkqmE47mV5d9kxzDBBnNrifUhvTGvSKrd9YhmBt8X0Fcs3p8UPAnaKP0kNQLFoUuXxQrH4qOwDCswfOQpFjrsNWQqUtiVNh9qfdKK5Vei80P2vkWwTiVm0JhyW8UPJroZnAtlPVer4JTmuoYLdr5iX%2FVCziJHVS1RVd0tB6cLjayAS90SAxh5H%2BavBVgzoPZMwggEB6Xe2r1x4Z0iMsJvQnjpIpzEGDo0BDG%2FsdKdihWCdlB4Rq%2FcK3cislhUlNpSZRmhmKIQHg38vwAi0zVApu3BE5qnG%2Fy5%2BPy61vWgoMz4kFJ3YLBlWoaPgX3rn51y8VtuPUiTryB2uaO1mFXhyqaCu8TiIYonn0em7btJk%2Bv1wGR5etzfA61K6bki9rfgsNdYouBypHKnCJLtf7IRGON7UjQzkaLRfGbn37fbJ8AYfshprpYv%2FZJLc%2FS8%2BRVY14mLRt7Lndlpr63qj%2FZu%2BghkSTNNWvJtUpHVaRw8j0eGsLC6ejtBZ14xKzFQy2xp5%2BX7EV8U57%2FVwuXvFzJ9COekWkN2mrt4xk9vaDDy10k2LIoGTAhn9Sdi9HNN6%2FGC0oVW%2FYrDkHWzisWLa%2FELlVDuyAxbhaxqVLp1eMm5pDQs1MmliPIw%2BI3TwAY6pgFGSQ0FWjaQmasaNl1TWheLxbkzDlWyqgAFUBZ7DlHY6jz8SrJWLSV%2F%2FejSqIqIgOOQJ7YA3dHdInRPXwM1C5OkHwC%2FvBdrWhn1d35ezR2UpBmFWtBOcsaBREHbieAX3JByQQBGCXDTMVxk1YPi0Bs3JJjD72HAdLe8WSMhS0plONH5ZN1uHl62d0vvgUis64D6kerBTI4cQElWszknloXnf9BzoUra&X-Amz-Signature=ffdaa9fc4b83460a59daefc702d179e5286d761657021a49c3d9a053fcc5c50b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
