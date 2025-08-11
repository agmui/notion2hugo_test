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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TIHKHPE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvPmVwu55fLEWgQ3ioJZuFn6Cg6RiPZh5Zwxv%2BynW0oAiEAiIlQoHejAO8DgzlQaIbprRAnsJpteZQW1pew%2FO9td6EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5rmnuzj9ATex3OKyrcAwcQruIoxDL2feJkIFAYjuiZE2ybktc8NO4k7dTPC4CWuIr%2BUs6nrZR53gEovY8GKpCdI1iWX%2B6w0BVTyU%2FUPPGfx9Nb706fSD3t1Kem1P0EpdPz2Vk0sfu4RSRlrkQI%2F2WsBJJRgJfkQaiZv1AepGeoP4Vr9HXNJ5401S6vDIzhwvXMhciS3QH7VoSx%2B3EdHbraJElXslva3%2FfvebZ9Vma90YREl4%2FYPn7lNOvnspJ4wJNBixqFgE1QA3ZIw%2Bh6t%2BUhoY59oQgSPix4fzHA6BJU3ycFdwecZ5nEpbeNaYdOruFmzk2c3J3HSEAFwcoglr1pVq%2FbUpA%2FSjcyEFGvfvi3%2FLiHny09oXHY0xLxXbj8FJ6NFqf52wfE0Fg8HWKpSxJaziKOD2t1WfadEm4%2Bt%2FTyrPA8xdhMCJq%2BKTfQxeiaOZVc8rvMheXk2Y4nekJWOlAAko0FvD9zfMYc4IQswqeTEQclOf0hrauomEn7AxlKe7kZ8k15GZlrnIXeoxwfsLMqTnE1AWagkmSv2WIjKTqLiU909hzKsu2L%2FNB1VxI%2BHVGER8rg0zBgWOfcAkiSvhiIUGRwUjLtENcoV1JKZtrokHKBWaOB1G379VFSvAX7GywiEK7S3yFegb%2BCMNHg5MQGOqUBMBB6YZDGdk9rTTlzlb%2BsNiovBOO0VbXa7iKoatx6AZ6gYrhA8XqrQMa%2B5TcXtSdX3%2BmhRdegQ%2FquOj0oG7ghTxVBuj1jFFrcZ9hhMxZihnHQpbv0EUOuXX7c6f0Wdw9tVQV6ErQ63F4F9XSd%2BIFW8HiiVoA6fr6X73gjg0caWIdwQTaGUI%2B%2Bk3FHmSLpgXWFxq%2Be%2BDnk%2BcNl2JMH2QHDEOrF8hae&X-Amz-Signature=fea2c7901f3f9482a3427fc190c02f55d39b813d1c392b52a20a9f91c1a507f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
