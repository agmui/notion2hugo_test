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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEAKNLXL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGQbvoPfhuN2VPLHo5uUHJuWiqBrIXb%2F8i5IbPUJ%2BGgAiEAqTftZLrus3qy%2BjcdCYVM48W0l%2FCKZEsR4ZN50iyCJQ4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8nYrzDzLgIkzxGDCrcA%2BwLa4t%2F6oEYwK7X%2Fe0qo3rsaOPx57WcqGSY9wL7wUnMDOq8pr0uTSuQsKbH%2Fd3jSCiFuuwyxon2gB2j3A4npQYSwyRyGNhnbmVbMyrgzTFQx77gi77%2FrM4987yPQMsWkucBIc2zdm5Mo%2Bd6T3dNk5BtRUckrNz9k7RowAuPCwDi1YzKzEtHdGbHXunItfGOHQQDh4iABgrELjd0TVcEB%2BngdoAnStK0GSKz7cXLhQ5rrLolMNcKru9kYAkSkcPaOM2gJqjHjYeoMQAJ7F1rW%2F7TXZ15BlehcKn9Ab5TA847yYJbXncmQEnqbEN9L7gl2%2FuAwEcJcFXrUnFo4jN4Dcp0Es5pwoNoXRasOXCqNoINk3o7kgcUMN3opy0xgSq7b%2B%2FCu3chWuCi6YVQ8LSLcXOKErMiOdmZWTjJgWASCtQtfOB7Er61tljRVuD5pYx%2F6gLU9cKlwwNj3pdFcQOttULIf48T8Lrj61c0%2B1PJYqdnTDvoLhSY0TuIMVcgW%2B%2BI%2F3OoyrGS6sVBzN%2BXyoxJMdWwjUjDJnY0SBcvVJj2vfi8Z7WhzWYRn3qWTodurfOk9iVD%2Fv4IuqjQv3H%2FgspsSSs64AsZwQmfBQu0CQhYZfJeSDeWLdYGHzIyECcqMLfQvMMGOqUBpe%2FfMEGxJY4uDyCnOsAQcI9tqe5BOM9wOPBINfEpkNcG4fyBadzBabmTe7%2FtaQqFn9ye7Xv5z%2FgwnRFDTXOin%2FrgN9Pi3DC2WhkSmsk%2Bs0NCa0jd7Y5O7hr7HbIJAA%2BQIQYoTgaL4ALMTR4j%2FrhJjGhqqLcF4Q7C%2BXaxoDb%2FCbyeAnPE4qcqOLpWm5xnNOSEsT%2FX2AW%2BIBn0f9D%2B2d09hIOPMvUw&X-Amz-Signature=416ed528f09196571cd2ee5f6ff13cdfe4af54f75394cfc1504b05b275d31315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
