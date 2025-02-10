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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4A5UBO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeGz4bE1CJ4XFghIckFoQyYxEaVSDGLq7ieMhrXT70vAIhAIgHLQZllePwifdvBwG8dDO9FfXUagdtbjzM7inB3zfoKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweRTAnFGfErRUSqnMq3AOgdspAqZwA8vKH1EZKYIw6fk7lOk3nQO5As720vUPBGj4iuO%2BO%2FkivK5hKCg040BTfeXpOnbx5ipRdCtrCcqAQHbfybPKRAuTsukrxnxkv1QmbDDGBAgrKpPEqFXtvHB9xfBhAYusf%2BcCdB4uyskKDZHL%2Fz3Ydw%2F2zWRI8lLajPI71ax%2Bec99%2FlXhJLMKKro2HPWtSslTEgcAuiIiesFOqXFCcQ2pxpu%2Be9lsUCrzz3KMmbEZE6RWAZdUkEov%2FG2N%2ByOHLki9etmd3eXqM4MY7ImGAcE6fxfL%2BIQ5nE9Uc3pRmSw4Jk7b1C6XC4Vzsq%2FDai%2BsYR%2FxqHzZnfWtaBi55tyzdDL603jX2E7tal7s08TeeIPyfzn8cPBKE6cvzaGsGWJ17sWia0dZ6YATYFF903sKRJyADcyeAnnYNj%2BcMl8TrLg9AnQJIh4I3qD2w%2Bmo9NKycwEWQPBuQKaG1Uvl3TR7oz2LFsqZ%2FhwGsdu4o7y9ygyKbNyasDvIKod6LZNEtQ55RofCPow8XKGHb9JJOvCNMH5w7vS6EoahHp3Op7HFqUYq5eCWpGgc4fMqs5%2BmkKE5kfSiLGLscFOuhwiQcT3u9DI2r876Rc1IO%2FcU18eUOcHmGMBRAP6FoijD1kae9BjqkAfPGj2lw9bWZdv%2B%2FoSJRhbRxfawR0TYXZ0SWTbzMKrhTXtElA%2BRvlavVMGL2TYZ7g7udQhvnCfVYbeJE9ncx2BVd4BbETNZMtHpESFVAjZoJ8TBgf5yIPgTIAA2cmnAJ5S5l%2FYvJok9Y0X0MPXoeNzlW4RJYToeu1bjB4y0VyixauiZmk%2FHcIDQxnS9ZHOIRhD0KljrZdG8qzc6AB%2FEtfcQBJWdT&X-Amz-Signature=afc1dc96112351bb221160033244c1fcbfa28f2ac9c51806b593d49044604711&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
