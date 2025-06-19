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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZQCN7PZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjCvh9MVQsvnziniW5cgz%2BuxLoyNRs75YMmBnQoSaYlQIhAL5A3pGhhAQaL%2FU3PhbNy54EB7m8hy6QWHOTCeW9eA91KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igztq4nH6uBx7UrklTgq3AOn04Xr%2F1EzqxHdsrLppX7KijF%2BRqGT4ZC6nr04d6m%2BBJRohSL4dz0NRvzs1FM6RVBn3bXmQOmB%2BV151Q48WGxaDLEUGDDptZftIR4rNzbtfBwG6ePbfS2jKwK4%2F6YWt%2F1PoKwa6regtD9XkSL2uzp2zdezEm8cuWdOLT92clFgZlByxe1y%2BWGuVVBSUd7xaDJnXYeflONLunhmuFZDDfANgpzVDLcuJ568NBgC8tq%2F6ilHabFcBwuXpWW%2F9gr%2FgDayy4H7wc9AQRA59lFzM5KVAj%2Fwzes9fD%2FtisV9KE4CW6J8enD%2BmJv7CIKWDsY05AtLJ6HUZkgrKnpa19WSRhFFAmWXHBArs2jVs3840kAw2SdGv%2FJ2yCvw44MV24Hk1ehYWwUOoVOiCw%2BUO%2FRnFDkxomIKCm2luf%2Bjs4637QkYjM83TdszyHTvgtV84Zk9CdhgNexqg9mXL1VAZWmHAp%2FDVOubi3hMNcZyYbbDvWsSUPMCLgQdMFjdX%2BxfNGa%2BZqe9RHdGrQeq9j3Kk2DvXVIlJ4Jk2uLNjM%2Fxh34WCppTstPk7S9yt4DiFgnSX6u7F9QjP4A14%2Fa9dJonNYPYVUrAvf6LtaRpbSoRJz4feqTW1r%2BvULuWHvy2t%2BeyLTDctdHCBjqkASRWr4Yy70GZMnikKsRVXUo9FZDQqPgpAAkboLOnqITaB63vNz2iyVMBRiX%2B2S45X1huPclsVop8n2Q8OFk9LwIQfE9mFlolt1F7%2F%2F%2F22AX34AKnL%2Bk4SLfJc8b5Dxt%2F5PtgrUpW9pqmZ13huGNnP7z5H4lDqlicCJJDpg70f%2BxbH0c%2Bpmn3O0YIVw0UgVIqzWt6vkdikCvwwf1d2WBpF6tFD18E&X-Amz-Signature=697e19ae349cc5c015b762dcbd56d4f100dd3da3d93110856a6039073ccd6ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
