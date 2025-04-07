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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZKPNSP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICT61arFiABIDussB9nmUp%2BKMlyFgcGNKOOMKhfkOb7eAiAhbLuDpwuk59gk0ZlwX4sBW7eznwvtMvFfNKxadsTBOyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMLsSuWsSvq2GMYSH4KtwDByZ0Fk8ftPtBq97k2ysH7pokAHipcWaW%2B%2Ftai4QCN95cA42BpwdJY6XzO81fHqHYEFcQz%2BmlVC3Oyds58QCPgTpYJte0yosTLe6EbVZrL6BGTrfW7yYXivBG9Um4toG0qcM35qZ9qgfYogwh3odBAPSijSSKJtv0GOXB1Wls%2FplxedBRtE9yvh%2BM9TpLGAOivu4Z56f2pASzVmzuIrbWGrBak%2BRU%2B8FiQ%2FzkTw2gLcGqdyq1%2Fv9b50HvedLvHKAmrO2WMo1XUT54s1eW%2BnGkS5da%2BZi9%2BiNr%2B3c5riA2QqkxWy9o9FluiAEpBniTc3XoMS4Ztb5nAur%2BeZTRa0EPGCkvWXpCOlAbfqz1li5w2mTwtzw9hfiCR%2B%2FxD59ksOpwREWtD024Bym3u7V%2B%2BZbobmD4xY0fGA%2BYp7zgsWeHPfE8xMZuZmGmj6H7f84PX7tLdmlh2JrTC%2FfIZA1EnVkWmkYAigvaBuZwuZ%2FCAuFvWxSxwAERuQNowesLWEqn38bjNxYuQrv01iSm9egcBQHOmX2%2BvcXVRkfKUpoZP7uEyvYDWJQqN%2BoeQF6H%2BjlOZX9tgdkR1HUfrbkynZIU%2F69RoP1nyhAjTYimV0feN5EBbHS5L435wObPG9W%2B0%2FUwiYXOvwY6pgGK6thH31HXvFMNJC0l65grTvRF%2Bd8eLULogB6Z8Wv9bL3yT7ujQEKoAWNpEAPz7YOD0EsvyYCSlxmp4vkoIlMtKLxcSh8H0NYwKSWvfs2qtkZfDc4Fay38Peeikizw4UfIoXtMeTQ8uF%2BSQR4h8bl74E3SYUeBrBQulEHPkJXNzJw1xqUq2n7VgQVll6M4kzdNhlru0Az6NwbjUfSOWwkkqXNqlaTO&X-Amz-Signature=935e12fcce56468c85b69271316200f6316b5d9855aec8bd2bdffac931b8238e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
