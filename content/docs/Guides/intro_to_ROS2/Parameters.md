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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4XDIAY%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsslZ28VcdtFVraDVuVN259kqo5XGRkstMnAlgFbPPYQIhANC0AjanazZC9kpsCyH%2FDE83eb9n%2BD9Xu7EekMdeUBP8Kv8DCCQQABoMNjM3NDIzMTgzODA1IgzPyXy1Ywd%2FPArMLJkq3AOdbmnYSIwOLQM5oiqfaV4a4fBbsfFhIbeAL0wC%2BUwI5t8M9q6eZNB85VU0Mr12upPjvkAQJV3k%2FcIQY6hXZg3ys%2F1UGNM5fINsjsgjvD0pMq7WDyZrCOUx7wmnMgO1LpLKDYdkivuvIOGquyDueEKM2q14nAcIU1PHy6Wm0Uw4tbpSSQq9IQU6zz49axrgsHzDe8ecCIu39rzfP%2FxdIW1YocLvajjGVaNipeFd98URiDIR7QIstYv0nwGzjodNsvxPA9T0aR8U8ILkkxypVgftN2WgWbtDimWJl2Yk1F7nzkX02P4pWzObxBaD9t5XxLAcVAT77zzQfN%2Fqd0HpvHoGekafhkmXdwEyj54lJ384H%2BHn8%2FTPyuRWxObKf6X8JEQMEnox%2BkMnpy%2BRSTu4zwZ5AMhBSHbKQCOBLM7oSJhQY6%2BXafHk9nVmdXPo4923Zdr3OOs3l7vRVr3TPkpsOnICEF46egf7LyUUaVXOM89rmh1vC0vvsyf5ykR0fkBNe56Apzu1UmS1i%2FyKclv8W73AObvih5IKI9Re8Gf9VxXS8ADBWWTtAfgT5QxWJIeZvyQRfNzcNyPsn%2B6HpT5udHS2w%2FTUaoA7QFhK4g2N%2FdLcZjnjrSoXiR9mrQ7rITDE6rq9BjqkAWBO8zeWjqDvKVeNTBdHsLN2iRyinL%2FN9nroEREwkiMZnu4OJvDe8TRZMeG4jMwpvyhOjyXNyzY%2BrYTGCDk7Yc7clJi0TUj%2BGIetCoumeKkuqDyXCBGr7DvMqzdcVhvK%2BrfaRlZLo73bf2xtLtk93jrWhMDMtOM50uG7KgOhunz4KKCxY3jYPHtPUFTXh%2BKLg6Yaoc8q%2FKNCStILnaPYbf4iWkKd&X-Amz-Signature=73934967f416b7b1e8ccfb40083944504a70cd0adf4b3aa7ac496f1341459717&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
