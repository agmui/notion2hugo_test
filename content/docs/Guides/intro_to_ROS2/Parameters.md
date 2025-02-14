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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RGK6PHO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHShuFQm6j96CMeyeI8ZPma8jFHMLPFHfG3P8sbRRnLQAiEA09bQF7eD3GNPuj%2B8aLM%2BNEjfzPDKzdTdrTYk0J1brTAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNy5cdqgkpH3O0RvqCrcA0rMz3t09TDX6WcPDMupXBEeUZfToCbTj00a3k3qjWgsXq6FLLbaWqRTinROnED5sEPsfNjvfo%2F1spoxrczX%2BOxncrZHTQmCPB7jPhCR50q9qsj928%2BQ2ut8CWLLzm%2FT0YG3VLRLrZ%2B0vJ2F4JNXkvRRyWm4ZthE3It9t6XjOev0vXSgX2gXI%2F%2F1e5989ixYVE8y8uWbF6EovVclgk9TYxBU1RtDCn5RlyQXJmmhofMxcCe6o4WzalxTTZPh02LT9Fufk73rDDojTjC0Omzv9H%2B9iWnORLo7h7rAL4qZ3DkWbxHNWRdw20Bxerv%2BiMcwWGurS461m%2FxPn6kbsRQq0RmsRz4FLvs951QyJE6tt%2Bo9DQLCKZcGiHNSzNQLxMqw1%2FB29vToBFUaJ%2FSH9d6Gruwbzcu9vYYM%2BlJftsxPlunPY%2FtAYYgmTU7%2F2d4W1BE8dPwa0Rj%2F5dqOvhb8yUJLvz3AhiYimma3TnU9jpd%2FvcW5x1bfT4nNGCpXWBURrWx8ANtb6RzDS0TJZBoUyO6yuQ2UUC7dODxQ1rhhit4vSp1N4exIMm6GUcZQU9hkcssX7vLhq8GMXtKVy8NPfqEA57EfAT2i9BOhk11BRU13XrYYZ1O%2F1qF4RGmtmbtAMMCEur0GOqUBQ4j7hJmCY4MXT4YOnsXfXTe6xjG9BrpGtf%2BPoAUNX7kgxk6SK7hGmievSdXpPsf6eUzjAljJEidZyAJG3ucmB4RH4QvYDLGAn88lH%2B5B3yaLSqBH60MV2rdke6JkO2D17DcR8k5TF0VW%2FdnnBlL2T44o3iyWdDwZimskB6tgrGyf5rM7pme5a8NgLHfK5pYSOfh%2F%2BXPOHhUbtUic94O1OtCxCNzH&X-Amz-Signature=630ad4c61181fe932e53d1a2a103019c5bbfc7dc45e4dafaa9245c263961fb56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
