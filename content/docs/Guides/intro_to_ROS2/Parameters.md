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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662244W73K%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRGFpzGXrqlamo%2FkWBdDq%2FG0kwG4qba8iq8%2B8h8FCa4AiAhDRYmt89qPfcGhPBOR4yf%2F8rJ3b%2FDwAzto9qd7ob1hSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEWEwpGzYbXpkBnBxKtwDhuapyASZ%2BzCkAtrvkrzNVw3Q4fauzuXBf4QVa3iTy7a2Ry4Yec2iYjuIHwk8%2FnnbWrwF4nMBYdRTIq70tGheTBeD79mUh7K9GP%2B4SjLuUPXex1Na0BUbusjLcZKZ6rLse6%2B%2Bff64nHoSbfO4cbufFlxdxO%2BlWw3%2B1rc9DDeVhY2AjjmT%2FZQADNIvjKx4MpdMvJ8ucGlujlwjAXC2Y4Wa%2FDO6CqfyYuYTpMycbgc912oQODfji%2BbRZ0xHTWObw6o%2Fb2H9S8vYl91VrypTiikF3Hb784QMMi8WH0oorEhGsT3FeFbUKDFpPoZQw1elCCGF3g%2FpncadC%2BHVMbQmpI6jEAEHXMNGcVikjn4%2BSZYZ9xXs82tlsvYjoVf8vKCWBOXDT2E2pn3bMb5aDu%2B3Zn1GqpRIhTYPTK73OjH%2FgONZSYKytpyXSt90q%2FGvMshWOgQc%2BOejNLBkzFNojEQMf%2FrqPcIVGWBHHcXJjYbSdKWRnA6trynnNQPJr3NJW1pVtVS2nWUxn%2F5JZ1HOdLREBhaEhqXbXvZASD%2FW0E2sj8priLaUc1qv8keEyI7mMSOm16CRe5G4Vag04cGir2U8%2Fk9YKbe9yj07lVSCn2SdZIiLQb%2FS0Ig4e2hGJKvG5QkwzZySvgY6pgEljXDHtMFDjcxjnztZUtnBM9mQnrEqgwn%2BK93FjKqpc4wfFr3b%2BEJCAOoTkCUfjQbCZWxh5pG2tvUBxIsbLTE9OXbbAIKmlklYE8yjBIrSWgMYW2VWBYzZAjSeIImyE4ZpwEina8NdkG7FjGjSs9Pr1wJAFfqevkzFVR8R%2Fs%2B5%2FpoBzZyKG1iQSfYeoF%2BwGXsgjocSaZk964zcni4%2BVSR2UJLsCLFb&X-Amz-Signature=e51f2f35f8dcc554761242a23e5d92574619b947b2ff0793605db0d843d0f811&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
