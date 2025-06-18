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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPLQH2VU%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCyB%2FLVZfMykqyLAQqVWUoGv%2FTt5IkM27xd%2FweuFg3jgIhAPmLk2N4SHbV%2FxJHawl04RlbjZim1UjIs8NAJEHlNetVKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWeNNFgkKD%2BczM5n8q3AMR31kAidMe85BaZ6SZwuBsUs%2FA29i%2Buim7FbK9026NjrGw5uigWA2kKqM4qUx%2FNXiBK6SYp4yWam1Os6iP12NlaWQkRVUKG7f3c8rnTnOMYdHrtLEEsbGT7UlFOH5xNyCBfcHg6fG%2Faqyo8jt0JvE2OvsipP1faeX5MM1EkTmCo7W%2FbordV3CgcV7usdfWNfkC%2B4G1XOVmOI0nc54FXdChS5mbLLMl10A%2BhiHVmWIhZPu5ZvkYUUAZ0lWgsbGAxfY17ZVsYRpmUX88RCE4hJEGLU%2FM0JDQE9qVwsMCkrn6dhjx1BaAulJCQphdhSoPojuRkLh76glgG5j%2FyLdllruGXbUFmexujD2lOIOGXzzittny1nR35DY0310uihK5Btw%2F3c%2FaKvJjmEiYY0yzqALi4Myuu9435O8gRsJcFlUdYhElU9FPdquPs%2BkJ92TJrQic8ZrdQF6W7n2k406LXarfL7Otr%2BzpzHdTwxerMBXMkbDNQvzJLFRANTSfF48aiQ3pB4inJkj2EqKHHN1gtLLMkMgc0Oj%2Fzy3KM6ElvnWrLk%2B879ClGmgvjd%2BCxq2TL3IyWt22HP0%2FS2fhV2cEkznNirkabbXCxcrMvqbgm%2FLa3MxHQi4oJB4CgDSbRDDStsrCBjqkAdoo5mjbYAjhfvH7Y3k6CYMxvb3CLcW%2BGDextHhO2JAoZ%2B0nBsuI1qBHSuRM3lD0mte5i2DG7ZVDfWrmjJpEcK%2FpcAUkuBjiPG6C3Crq4EsAom7WmY2LPZaCHFjlJ%2FyLn6GRXNI8F8snT1c5YkC8Ao4f59NjZsWUYVkSfce%2FlIHrKFZ3Uo8pHleRfySVVdCVWlGTNiYaBqz%2FMaBK7PnhLsQHLLKL&X-Amz-Signature=a5aab15f9211cc5efb3395fdeb25af9dbf894adbe4a93f83de63080378a80dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
