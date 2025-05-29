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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6TJWDA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMGs%2Bv1GsjOWTlp5xfmjnbZlsXyXz1eEJmgC1hWZEdZQIgTGEiV4gHK%2B%2BuIeEqyyPkHVxigkCH2PclWYyF6Djl1mUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPMUWjOtcdWJISF4SrcAyueU60VAaQzWgBoGRXjpZscgVfJgAJTdA55rSuOLKDm5O0n3bPD9aw%2B3McTA1H9BLKPlFL5ZgaLfZtS%2F%2FM5LIGNUegCiU0LA%2FEZbXs5p%2F7jREHs2pWKqP5VTx47aV48BwdIsK3ltWa5dNpL2deA3poCzkZ%2Bsrc3%2BikJBrMuXUZrxtxR71K8ePYNskBmR38vWl5Bi%2FXBafClaQHNyZPGVmcSfy5UCaXnGUB%2BB%2FX%2FWhaoNvsXTOunVCssmz5bPvEUPigMrWw2gY2pMTMHNjAusy6fFZOkhY6ITwVGPIy5HxRJJwEnIisucc695LRSUyh%2B%2BampqxY1AL3%2FC67SDy8iGNVgOHPse5ZiUnkgSg9Ezh0g3fzAg1ZdM9jE%2Bc7nCekn3aIFYTTqS9FDWB6x72W958uRYliPEhSxlkf7%2FPkKys68CJ0a6eLTSYwqsWXpIo5aJwTMiLOvrLXtBKc2Mzc%2FnUJq7CvoBE0BwhLBfNgUjm8LcZGmwrkhlNxrXb%2F8vkKycUJaogCD3GAR4DwM%2BxBYtK0qTfkMY3K2Fge5RO%2Bf32DyzGkJkSXSWCZiN6FLY7zuZ1pp5ZW%2F4MThK78mpa9RyN8oIMXRXX2MKh3WLIjJL3pPPFRNLxYlyf1v8obAMPWt4MEGOqUBTPfHE8iWvWIbiTOa3Wn5YBB8Bhv9weQKmSObMsvGPsBFUwaK1FSw6bwEP3BiE0PCTD69NbHmeaIS0q8xG1VADUf2%2FpG7jpOwA2mwX5IC6ELM1mEGfwudZigFgZ8JfftjFkIZ4BdXafzlr98i095IPoyC7%2FVRo1yJkPWZhvcx8JcTz0jHqpfMFHSCVQw%2BO2YkUzhSnzK67alKmU%2BUSt%2FvKc%2BIYRP5&X-Amz-Signature=0270fcaba44eff868675ac5c0c3a9662a26b6ca58feafe520fe0b78c69512ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
