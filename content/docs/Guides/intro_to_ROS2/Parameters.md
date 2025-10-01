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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVKUBHE6%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCID5xAw2%2FH%2BJvaA4vWT%2BFVac7iqBei9BuLRT1WEtApAqyAiBymC5JTjkH5K5MZSmxBY1lrM%2Bz5m6FPTqpCVCStI5f5SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEaToTJydvozC%2FfDnKtwDExjaOb1jWFCq5WHwDAi%2FrmDzWgRrRCkqC4b8EnuyMOxQI2036%2BROv9k8SRwOK%2Fc8FXwCCx07nvl7ovTjtY3Sc4nLwo2f1SVWlEgsCow13Rs3A%2Bto3uJ0LS9TTFlS0799dH5EmKPcgrt%2BSf1LVZms5OazIO8av%2F1Ti5Xo%2Bm%2FIOiFcNMk4Y4qpQAe5zGtp89w99tWX6LtN1QpekNJCBNkpxcX9hbYgnAFIlPos4VgSf8CzQU0QRFrR40opSkdVU6ejh3qVy7mt6tiari8WZ8TzdljBA34BZqZQPgmWU1LNrwkqSRhiH5HI46H0KjtEi4yOB2lInU155kNDT%2FuvImOrMFas4f8caR047V1TltyLunmVATeraC4IZmYeVdbqUyATALt6cP4pUkOy37EQuvPmqGfS3weWlnsWbHmTejmLBUki1By48TUVIMSABCn8kETCmMeWMjrRHYUZ2qMrsTI1ThMHBbVn9ewYYI0r71muqvh%2B3jWugp9RxMkEpCUfJGtM0Pu6MIy7a307R5nBh8d%2BmoT2qB1wDJBVoDQh6guFNq6MkjpdQE5HizM2zmPFg%2F4pJ6lPhEc68NDnN6XCMf%2B67zx1QUyfi%2BLvmMM%2BieiYJH5oWfIuGSwrS%2FSDSYcw%2F4jyxgY6pgGG2JD%2FV9JGuHAY25PPOtaADkeG%2F8Lixye%2BkIRUctOKpR%2FVFq8IpXdmPQ8KqClk62Tqxv7ugGjXjiMQCCCf0Qp0jf0ht%2BNlyTiI1gQTZXkA8kx1SCteH27LwNpjBtf3lG5%2BUfhT2JAhW2bV%2FOUnZTbLB7pg%2BK%2Bn7Lmo%2FipoTbAZVIAXHCu6cZQC64lYIOCcC468J75orFuycdkaHq4CvhIwVfVzuN%2FJ&X-Amz-Signature=185c9278722a0b16abae70627382448f41ea997ad7b43f97a45f3a51affc9355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
