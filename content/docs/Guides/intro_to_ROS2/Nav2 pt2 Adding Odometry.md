---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWJNYNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH9m3q5MsUqlm7FAgYxyYi9vD7aKcTSefca6iqEfq%2Fk5AiBxQ52AYZwhL4%2FsB1bGktCQkwwcMGlksJH8MS%2Fk423woCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qcT%2BBKcbaB8TaHhKtwDe%2BfCjVLNGlzzlZeDnuRI%2BqvpV6U1ZkrwsCBMrqn%2F0Y2H6A0sXDNA1fxFwx5pJARN9pK3%2FnY4C7RMEHp5BRzgHrBmXZ%2FmrpaSZNRMT1V%2FYQTdkDH1p1K2JHVUxjhaf8lG%2F7tpKrwo2bNt8AaH%2F6xFlPU0GVtGV35WxzE05PiKrN9CzB6hWrRBR8OGpdElLN%2B8SeXRJP56TDNq8jBWF7C%2FKZR4LJ7pt1aW27%2B3sauFqfrffNKsTtS1uLGOtj22C4vRQm7D1DGkoy0m4dYl2HP22aY21WdIyd%2FuDku69GJUYO%2BIGTj1d%2FEo9yDH1LZtVhb0zUWyhJqSj50pyqf0Q%2BkzizK7%2BZOFhMOuO%2BXTfNvTS3kq2fNHSLQwn1RBKZxAS6fyK%2B3vcTQglo34PoOtluitP3hsP3rro%2F4QEXSynDStd6abkXDCl6gzab%2Bi9hbbmtKxkD7iiL%2FMJieTTA75Cjf%2Bxy2VLTAPBnbNyvXN5c1jthCRjZoNYtqiOEnkEn%2BBkDypkWu4Q4F9HgK4JcK9UbuezugrTiUGRwOe128MERX%2F1koe9t%2F09LplLcZK1XUOkEH1yNiJRlfJxNaaon5VRvF8aefx2AVjtjo50Fl17VXRTI2WwVXsJJdaSueFMgEw9J%2FbxAY6pgFjF4OAzKHxe9YBfrNzqKAraMecWQMVQolOhLZ7iV1ybhtrCb8d46Hjkc6KlVfZnvobTlBZw%2BkrB2lauIl93tyLXPDqnhLfm9ghYKLJhIRzpd986h%2FtHdXNQxr8dPlpdAqzfKj0DHIfVvMAX74%2F%2FDus1o60llEkiMgLNjCAzXvk%2BpdULjU0XhxTonqDGJu0cbSdFpq%2FElKithgwB%2B9GqzdHGI6fTSs1&X-Amz-Signature=8b627a1f66d6a2eb7e4e10ef5d2ee3c41d8e7df5d3a3bc4ef1da6fe8c80f546c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWJNYNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH9m3q5MsUqlm7FAgYxyYi9vD7aKcTSefca6iqEfq%2Fk5AiBxQ52AYZwhL4%2FsB1bGktCQkwwcMGlksJH8MS%2Fk423woCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qcT%2BBKcbaB8TaHhKtwDe%2BfCjVLNGlzzlZeDnuRI%2BqvpV6U1ZkrwsCBMrqn%2F0Y2H6A0sXDNA1fxFwx5pJARN9pK3%2FnY4C7RMEHp5BRzgHrBmXZ%2FmrpaSZNRMT1V%2FYQTdkDH1p1K2JHVUxjhaf8lG%2F7tpKrwo2bNt8AaH%2F6xFlPU0GVtGV35WxzE05PiKrN9CzB6hWrRBR8OGpdElLN%2B8SeXRJP56TDNq8jBWF7C%2FKZR4LJ7pt1aW27%2B3sauFqfrffNKsTtS1uLGOtj22C4vRQm7D1DGkoy0m4dYl2HP22aY21WdIyd%2FuDku69GJUYO%2BIGTj1d%2FEo9yDH1LZtVhb0zUWyhJqSj50pyqf0Q%2BkzizK7%2BZOFhMOuO%2BXTfNvTS3kq2fNHSLQwn1RBKZxAS6fyK%2B3vcTQglo34PoOtluitP3hsP3rro%2F4QEXSynDStd6abkXDCl6gzab%2Bi9hbbmtKxkD7iiL%2FMJieTTA75Cjf%2Bxy2VLTAPBnbNyvXN5c1jthCRjZoNYtqiOEnkEn%2BBkDypkWu4Q4F9HgK4JcK9UbuezugrTiUGRwOe128MERX%2F1koe9t%2F09LplLcZK1XUOkEH1yNiJRlfJxNaaon5VRvF8aefx2AVjtjo50Fl17VXRTI2WwVXsJJdaSueFMgEw9J%2FbxAY6pgFjF4OAzKHxe9YBfrNzqKAraMecWQMVQolOhLZ7iV1ybhtrCb8d46Hjkc6KlVfZnvobTlBZw%2BkrB2lauIl93tyLXPDqnhLfm9ghYKLJhIRzpd986h%2FtHdXNQxr8dPlpdAqzfKj0DHIfVvMAX74%2F%2FDus1o60llEkiMgLNjCAzXvk%2BpdULjU0XhxTonqDGJu0cbSdFpq%2FElKithgwB%2B9GqzdHGI6fTSs1&X-Amz-Signature=abc5a4355d1d63f6964b8072e0170de9f0cd67ced995dfc4b975d76b4238f97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWJNYNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH9m3q5MsUqlm7FAgYxyYi9vD7aKcTSefca6iqEfq%2Fk5AiBxQ52AYZwhL4%2FsB1bGktCQkwwcMGlksJH8MS%2Fk423woCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qcT%2BBKcbaB8TaHhKtwDe%2BfCjVLNGlzzlZeDnuRI%2BqvpV6U1ZkrwsCBMrqn%2F0Y2H6A0sXDNA1fxFwx5pJARN9pK3%2FnY4C7RMEHp5BRzgHrBmXZ%2FmrpaSZNRMT1V%2FYQTdkDH1p1K2JHVUxjhaf8lG%2F7tpKrwo2bNt8AaH%2F6xFlPU0GVtGV35WxzE05PiKrN9CzB6hWrRBR8OGpdElLN%2B8SeXRJP56TDNq8jBWF7C%2FKZR4LJ7pt1aW27%2B3sauFqfrffNKsTtS1uLGOtj22C4vRQm7D1DGkoy0m4dYl2HP22aY21WdIyd%2FuDku69GJUYO%2BIGTj1d%2FEo9yDH1LZtVhb0zUWyhJqSj50pyqf0Q%2BkzizK7%2BZOFhMOuO%2BXTfNvTS3kq2fNHSLQwn1RBKZxAS6fyK%2B3vcTQglo34PoOtluitP3hsP3rro%2F4QEXSynDStd6abkXDCl6gzab%2Bi9hbbmtKxkD7iiL%2FMJieTTA75Cjf%2Bxy2VLTAPBnbNyvXN5c1jthCRjZoNYtqiOEnkEn%2BBkDypkWu4Q4F9HgK4JcK9UbuezugrTiUGRwOe128MERX%2F1koe9t%2F09LplLcZK1XUOkEH1yNiJRlfJxNaaon5VRvF8aefx2AVjtjo50Fl17VXRTI2WwVXsJJdaSueFMgEw9J%2FbxAY6pgFjF4OAzKHxe9YBfrNzqKAraMecWQMVQolOhLZ7iV1ybhtrCb8d46Hjkc6KlVfZnvobTlBZw%2BkrB2lauIl93tyLXPDqnhLfm9ghYKLJhIRzpd986h%2FtHdXNQxr8dPlpdAqzfKj0DHIfVvMAX74%2F%2FDus1o60llEkiMgLNjCAzXvk%2BpdULjU0XhxTonqDGJu0cbSdFpq%2FElKithgwB%2B9GqzdHGI6fTSs1&X-Amz-Signature=747cd90bb0ce0ef234f52569bbdf8917750a6ce61a967d73bb0189b4eade5621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWJNYNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH9m3q5MsUqlm7FAgYxyYi9vD7aKcTSefca6iqEfq%2Fk5AiBxQ52AYZwhL4%2FsB1bGktCQkwwcMGlksJH8MS%2Fk423woCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qcT%2BBKcbaB8TaHhKtwDe%2BfCjVLNGlzzlZeDnuRI%2BqvpV6U1ZkrwsCBMrqn%2F0Y2H6A0sXDNA1fxFwx5pJARN9pK3%2FnY4C7RMEHp5BRzgHrBmXZ%2FmrpaSZNRMT1V%2FYQTdkDH1p1K2JHVUxjhaf8lG%2F7tpKrwo2bNt8AaH%2F6xFlPU0GVtGV35WxzE05PiKrN9CzB6hWrRBR8OGpdElLN%2B8SeXRJP56TDNq8jBWF7C%2FKZR4LJ7pt1aW27%2B3sauFqfrffNKsTtS1uLGOtj22C4vRQm7D1DGkoy0m4dYl2HP22aY21WdIyd%2FuDku69GJUYO%2BIGTj1d%2FEo9yDH1LZtVhb0zUWyhJqSj50pyqf0Q%2BkzizK7%2BZOFhMOuO%2BXTfNvTS3kq2fNHSLQwn1RBKZxAS6fyK%2B3vcTQglo34PoOtluitP3hsP3rro%2F4QEXSynDStd6abkXDCl6gzab%2Bi9hbbmtKxkD7iiL%2FMJieTTA75Cjf%2Bxy2VLTAPBnbNyvXN5c1jthCRjZoNYtqiOEnkEn%2BBkDypkWu4Q4F9HgK4JcK9UbuezugrTiUGRwOe128MERX%2F1koe9t%2F09LplLcZK1XUOkEH1yNiJRlfJxNaaon5VRvF8aefx2AVjtjo50Fl17VXRTI2WwVXsJJdaSueFMgEw9J%2FbxAY6pgFjF4OAzKHxe9YBfrNzqKAraMecWQMVQolOhLZ7iV1ybhtrCb8d46Hjkc6KlVfZnvobTlBZw%2BkrB2lauIl93tyLXPDqnhLfm9ghYKLJhIRzpd986h%2FtHdXNQxr8dPlpdAqzfKj0DHIfVvMAX74%2F%2FDus1o60llEkiMgLNjCAzXvk%2BpdULjU0XhxTonqDGJu0cbSdFpq%2FElKithgwB%2B9GqzdHGI6fTSs1&X-Amz-Signature=1c3e549ba325e3ef84dca36e54906042aae0c5b03b7c75059bf5905cb6338cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWJNYNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH9m3q5MsUqlm7FAgYxyYi9vD7aKcTSefca6iqEfq%2Fk5AiBxQ52AYZwhL4%2FsB1bGktCQkwwcMGlksJH8MS%2Fk423woCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qcT%2BBKcbaB8TaHhKtwDe%2BfCjVLNGlzzlZeDnuRI%2BqvpV6U1ZkrwsCBMrqn%2F0Y2H6A0sXDNA1fxFwx5pJARN9pK3%2FnY4C7RMEHp5BRzgHrBmXZ%2FmrpaSZNRMT1V%2FYQTdkDH1p1K2JHVUxjhaf8lG%2F7tpKrwo2bNt8AaH%2F6xFlPU0GVtGV35WxzE05PiKrN9CzB6hWrRBR8OGpdElLN%2B8SeXRJP56TDNq8jBWF7C%2FKZR4LJ7pt1aW27%2B3sauFqfrffNKsTtS1uLGOtj22C4vRQm7D1DGkoy0m4dYl2HP22aY21WdIyd%2FuDku69GJUYO%2BIGTj1d%2FEo9yDH1LZtVhb0zUWyhJqSj50pyqf0Q%2BkzizK7%2BZOFhMOuO%2BXTfNvTS3kq2fNHSLQwn1RBKZxAS6fyK%2B3vcTQglo34PoOtluitP3hsP3rro%2F4QEXSynDStd6abkXDCl6gzab%2Bi9hbbmtKxkD7iiL%2FMJieTTA75Cjf%2Bxy2VLTAPBnbNyvXN5c1jthCRjZoNYtqiOEnkEn%2BBkDypkWu4Q4F9HgK4JcK9UbuezugrTiUGRwOe128MERX%2F1koe9t%2F09LplLcZK1XUOkEH1yNiJRlfJxNaaon5VRvF8aefx2AVjtjo50Fl17VXRTI2WwVXsJJdaSueFMgEw9J%2FbxAY6pgFjF4OAzKHxe9YBfrNzqKAraMecWQMVQolOhLZ7iV1ybhtrCb8d46Hjkc6KlVfZnvobTlBZw%2BkrB2lauIl93tyLXPDqnhLfm9ghYKLJhIRzpd986h%2FtHdXNQxr8dPlpdAqzfKj0DHIfVvMAX74%2F%2FDus1o60llEkiMgLNjCAzXvk%2BpdULjU0XhxTonqDGJu0cbSdFpq%2FElKithgwB%2B9GqzdHGI6fTSs1&X-Amz-Signature=874fa856486bceb316dbdde33a80c0db67d9db69e4b86b2fb2690f0b795da4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWJNYNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH9m3q5MsUqlm7FAgYxyYi9vD7aKcTSefca6iqEfq%2Fk5AiBxQ52AYZwhL4%2FsB1bGktCQkwwcMGlksJH8MS%2Fk423woCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qcT%2BBKcbaB8TaHhKtwDe%2BfCjVLNGlzzlZeDnuRI%2BqvpV6U1ZkrwsCBMrqn%2F0Y2H6A0sXDNA1fxFwx5pJARN9pK3%2FnY4C7RMEHp5BRzgHrBmXZ%2FmrpaSZNRMT1V%2FYQTdkDH1p1K2JHVUxjhaf8lG%2F7tpKrwo2bNt8AaH%2F6xFlPU0GVtGV35WxzE05PiKrN9CzB6hWrRBR8OGpdElLN%2B8SeXRJP56TDNq8jBWF7C%2FKZR4LJ7pt1aW27%2B3sauFqfrffNKsTtS1uLGOtj22C4vRQm7D1DGkoy0m4dYl2HP22aY21WdIyd%2FuDku69GJUYO%2BIGTj1d%2FEo9yDH1LZtVhb0zUWyhJqSj50pyqf0Q%2BkzizK7%2BZOFhMOuO%2BXTfNvTS3kq2fNHSLQwn1RBKZxAS6fyK%2B3vcTQglo34PoOtluitP3hsP3rro%2F4QEXSynDStd6abkXDCl6gzab%2Bi9hbbmtKxkD7iiL%2FMJieTTA75Cjf%2Bxy2VLTAPBnbNyvXN5c1jthCRjZoNYtqiOEnkEn%2BBkDypkWu4Q4F9HgK4JcK9UbuezugrTiUGRwOe128MERX%2F1koe9t%2F09LplLcZK1XUOkEH1yNiJRlfJxNaaon5VRvF8aefx2AVjtjo50Fl17VXRTI2WwVXsJJdaSueFMgEw9J%2FbxAY6pgFjF4OAzKHxe9YBfrNzqKAraMecWQMVQolOhLZ7iV1ybhtrCb8d46Hjkc6KlVfZnvobTlBZw%2BkrB2lauIl93tyLXPDqnhLfm9ghYKLJhIRzpd986h%2FtHdXNQxr8dPlpdAqzfKj0DHIfVvMAX74%2F%2FDus1o60llEkiMgLNjCAzXvk%2BpdULjU0XhxTonqDGJu0cbSdFpq%2FElKithgwB%2B9GqzdHGI6fTSs1&X-Amz-Signature=a816c40f37cab353480d34a1b44639bfe139e7eafc9e458fe3c426cb454791dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWJNYNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH9m3q5MsUqlm7FAgYxyYi9vD7aKcTSefca6iqEfq%2Fk5AiBxQ52AYZwhL4%2FsB1bGktCQkwwcMGlksJH8MS%2Fk423woCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qcT%2BBKcbaB8TaHhKtwDe%2BfCjVLNGlzzlZeDnuRI%2BqvpV6U1ZkrwsCBMrqn%2F0Y2H6A0sXDNA1fxFwx5pJARN9pK3%2FnY4C7RMEHp5BRzgHrBmXZ%2FmrpaSZNRMT1V%2FYQTdkDH1p1K2JHVUxjhaf8lG%2F7tpKrwo2bNt8AaH%2F6xFlPU0GVtGV35WxzE05PiKrN9CzB6hWrRBR8OGpdElLN%2B8SeXRJP56TDNq8jBWF7C%2FKZR4LJ7pt1aW27%2B3sauFqfrffNKsTtS1uLGOtj22C4vRQm7D1DGkoy0m4dYl2HP22aY21WdIyd%2FuDku69GJUYO%2BIGTj1d%2FEo9yDH1LZtVhb0zUWyhJqSj50pyqf0Q%2BkzizK7%2BZOFhMOuO%2BXTfNvTS3kq2fNHSLQwn1RBKZxAS6fyK%2B3vcTQglo34PoOtluitP3hsP3rro%2F4QEXSynDStd6abkXDCl6gzab%2Bi9hbbmtKxkD7iiL%2FMJieTTA75Cjf%2Bxy2VLTAPBnbNyvXN5c1jthCRjZoNYtqiOEnkEn%2BBkDypkWu4Q4F9HgK4JcK9UbuezugrTiUGRwOe128MERX%2F1koe9t%2F09LplLcZK1XUOkEH1yNiJRlfJxNaaon5VRvF8aefx2AVjtjo50Fl17VXRTI2WwVXsJJdaSueFMgEw9J%2FbxAY6pgFjF4OAzKHxe9YBfrNzqKAraMecWQMVQolOhLZ7iV1ybhtrCb8d46Hjkc6KlVfZnvobTlBZw%2BkrB2lauIl93tyLXPDqnhLfm9ghYKLJhIRzpd986h%2FtHdXNQxr8dPlpdAqzfKj0DHIfVvMAX74%2F%2FDus1o60llEkiMgLNjCAzXvk%2BpdULjU0XhxTonqDGJu0cbSdFpq%2FElKithgwB%2B9GqzdHGI6fTSs1&X-Amz-Signature=bee2a67d0ce33259bea14d0ecfd52e136847f6215ed6c2e09b6f2e415d5439c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWJNYNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH9m3q5MsUqlm7FAgYxyYi9vD7aKcTSefca6iqEfq%2Fk5AiBxQ52AYZwhL4%2FsB1bGktCQkwwcMGlksJH8MS%2Fk423woCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qcT%2BBKcbaB8TaHhKtwDe%2BfCjVLNGlzzlZeDnuRI%2BqvpV6U1ZkrwsCBMrqn%2F0Y2H6A0sXDNA1fxFwx5pJARN9pK3%2FnY4C7RMEHp5BRzgHrBmXZ%2FmrpaSZNRMT1V%2FYQTdkDH1p1K2JHVUxjhaf8lG%2F7tpKrwo2bNt8AaH%2F6xFlPU0GVtGV35WxzE05PiKrN9CzB6hWrRBR8OGpdElLN%2B8SeXRJP56TDNq8jBWF7C%2FKZR4LJ7pt1aW27%2B3sauFqfrffNKsTtS1uLGOtj22C4vRQm7D1DGkoy0m4dYl2HP22aY21WdIyd%2FuDku69GJUYO%2BIGTj1d%2FEo9yDH1LZtVhb0zUWyhJqSj50pyqf0Q%2BkzizK7%2BZOFhMOuO%2BXTfNvTS3kq2fNHSLQwn1RBKZxAS6fyK%2B3vcTQglo34PoOtluitP3hsP3rro%2F4QEXSynDStd6abkXDCl6gzab%2Bi9hbbmtKxkD7iiL%2FMJieTTA75Cjf%2Bxy2VLTAPBnbNyvXN5c1jthCRjZoNYtqiOEnkEn%2BBkDypkWu4Q4F9HgK4JcK9UbuezugrTiUGRwOe128MERX%2F1koe9t%2F09LplLcZK1XUOkEH1yNiJRlfJxNaaon5VRvF8aefx2AVjtjo50Fl17VXRTI2WwVXsJJdaSueFMgEw9J%2FbxAY6pgFjF4OAzKHxe9YBfrNzqKAraMecWQMVQolOhLZ7iV1ybhtrCb8d46Hjkc6KlVfZnvobTlBZw%2BkrB2lauIl93tyLXPDqnhLfm9ghYKLJhIRzpd986h%2FtHdXNQxr8dPlpdAqzfKj0DHIfVvMAX74%2F%2FDus1o60llEkiMgLNjCAzXvk%2BpdULjU0XhxTonqDGJu0cbSdFpq%2FElKithgwB%2B9GqzdHGI6fTSs1&X-Amz-Signature=2ff6327f1645d1387936c7b23b009a809c02c90d5ee81d7f1a27c274cf15c4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWJNYNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH9m3q5MsUqlm7FAgYxyYi9vD7aKcTSefca6iqEfq%2Fk5AiBxQ52AYZwhL4%2FsB1bGktCQkwwcMGlksJH8MS%2Fk423woCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qcT%2BBKcbaB8TaHhKtwDe%2BfCjVLNGlzzlZeDnuRI%2BqvpV6U1ZkrwsCBMrqn%2F0Y2H6A0sXDNA1fxFwx5pJARN9pK3%2FnY4C7RMEHp5BRzgHrBmXZ%2FmrpaSZNRMT1V%2FYQTdkDH1p1K2JHVUxjhaf8lG%2F7tpKrwo2bNt8AaH%2F6xFlPU0GVtGV35WxzE05PiKrN9CzB6hWrRBR8OGpdElLN%2B8SeXRJP56TDNq8jBWF7C%2FKZR4LJ7pt1aW27%2B3sauFqfrffNKsTtS1uLGOtj22C4vRQm7D1DGkoy0m4dYl2HP22aY21WdIyd%2FuDku69GJUYO%2BIGTj1d%2FEo9yDH1LZtVhb0zUWyhJqSj50pyqf0Q%2BkzizK7%2BZOFhMOuO%2BXTfNvTS3kq2fNHSLQwn1RBKZxAS6fyK%2B3vcTQglo34PoOtluitP3hsP3rro%2F4QEXSynDStd6abkXDCl6gzab%2Bi9hbbmtKxkD7iiL%2FMJieTTA75Cjf%2Bxy2VLTAPBnbNyvXN5c1jthCRjZoNYtqiOEnkEn%2BBkDypkWu4Q4F9HgK4JcK9UbuezugrTiUGRwOe128MERX%2F1koe9t%2F09LplLcZK1XUOkEH1yNiJRlfJxNaaon5VRvF8aefx2AVjtjo50Fl17VXRTI2WwVXsJJdaSueFMgEw9J%2FbxAY6pgFjF4OAzKHxe9YBfrNzqKAraMecWQMVQolOhLZ7iV1ybhtrCb8d46Hjkc6KlVfZnvobTlBZw%2BkrB2lauIl93tyLXPDqnhLfm9ghYKLJhIRzpd986h%2FtHdXNQxr8dPlpdAqzfKj0DHIfVvMAX74%2F%2FDus1o60llEkiMgLNjCAzXvk%2BpdULjU0XhxTonqDGJu0cbSdFpq%2FElKithgwB%2B9GqzdHGI6fTSs1&X-Amz-Signature=b72d04da3ab96cc34fd81b8c8534978d98e4e5b718145b365cbe5867188e6dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EWJNYNC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH9m3q5MsUqlm7FAgYxyYi9vD7aKcTSefca6iqEfq%2Fk5AiBxQ52AYZwhL4%2FsB1bGktCQkwwcMGlksJH8MS%2Fk423woCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qcT%2BBKcbaB8TaHhKtwDe%2BfCjVLNGlzzlZeDnuRI%2BqvpV6U1ZkrwsCBMrqn%2F0Y2H6A0sXDNA1fxFwx5pJARN9pK3%2FnY4C7RMEHp5BRzgHrBmXZ%2FmrpaSZNRMT1V%2FYQTdkDH1p1K2JHVUxjhaf8lG%2F7tpKrwo2bNt8AaH%2F6xFlPU0GVtGV35WxzE05PiKrN9CzB6hWrRBR8OGpdElLN%2B8SeXRJP56TDNq8jBWF7C%2FKZR4LJ7pt1aW27%2B3sauFqfrffNKsTtS1uLGOtj22C4vRQm7D1DGkoy0m4dYl2HP22aY21WdIyd%2FuDku69GJUYO%2BIGTj1d%2FEo9yDH1LZtVhb0zUWyhJqSj50pyqf0Q%2BkzizK7%2BZOFhMOuO%2BXTfNvTS3kq2fNHSLQwn1RBKZxAS6fyK%2B3vcTQglo34PoOtluitP3hsP3rro%2F4QEXSynDStd6abkXDCl6gzab%2Bi9hbbmtKxkD7iiL%2FMJieTTA75Cjf%2Bxy2VLTAPBnbNyvXN5c1jthCRjZoNYtqiOEnkEn%2BBkDypkWu4Q4F9HgK4JcK9UbuezugrTiUGRwOe128MERX%2F1koe9t%2F09LplLcZK1XUOkEH1yNiJRlfJxNaaon5VRvF8aefx2AVjtjo50Fl17VXRTI2WwVXsJJdaSueFMgEw9J%2FbxAY6pgFjF4OAzKHxe9YBfrNzqKAraMecWQMVQolOhLZ7iV1ybhtrCb8d46Hjkc6KlVfZnvobTlBZw%2BkrB2lauIl93tyLXPDqnhLfm9ghYKLJhIRzpd986h%2FtHdXNQxr8dPlpdAqzfKj0DHIfVvMAX74%2F%2FDus1o60llEkiMgLNjCAzXvk%2BpdULjU0XhxTonqDGJu0cbSdFpq%2FElKithgwB%2B9GqzdHGI6fTSs1&X-Amz-Signature=3b76d4b251559aff0fd2e1bdd42d6ab268983187bcc97b0aacc2060304e1ec33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ALE7FR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC9S7%2BW%2FYd7GkhAqCbHUPgRpTD79VQggRoDJu4jYNJ41AIgJS%2ByNUxrtk7Un7JxIElpEneS7pxqX0REPefiEj6JlaAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzRmYiFirKy7egl6ircA6%2FouEG5Jkf9h%2BBF4irjyd6TvobQu8t3xz8zSCztKT0v0pzqDqCd0pkvtDwAE0i%2BdjzSyX66jWP8OTnRrc6i4K%2BgJP%2BwOLyO5UVcZQVaOlwk7DjPB5KPHaLqsgPVo57WqdW7AzSqgKxsQKayx5BJ2hXOCGz97OsvIZR800yXVVYeWOYjVN3AMkU1%2B0opTXZWjYHMfE1FNw7a01w%2BoTLiUKxxraCyuIgh6fss0p%2BE5BVJc%2BRgtm3FC4CDXTxw7PCG2dLPKNgOdEbnP4PFrfbMT6g004j8iGWGgfdxzIesiuPyyvuDjIdvXZSUO2wHGn97WeSnXds7dux55RV7ufTeCznHgI0CCTLmLq%2F5xIJQIQVkh4DxO3uxzs2gGpSZ18LTNymqTKhTssMzbZR8rl72H%2BWOAxRoaJXhd91NnB%2B1uVyT9c%2FZNVk8UckdO5gDUjq5oo557is%2FbGLB6dotIVwTsGoao8shnAZJ1vEDcawN2uiEKYL7QpVksny8CPjCeOsniXuLbmYvYP3rHSvrj6rRx7Uw9FWOQLABR37mdpr57%2BRBGnPxzUIsQDyDR%2FpetytylCztIea9bxJomaTyTHFyLrOeUNyRidsgU7bFBgDQV6iXd0DYd8OiLL6DDmQbMPSf28QGOqUBNuF5Hb9j3dQxEwIW2z7MTU209goQVJlRKvlmsI%2Byd%2FuSZH8lW5mm6vNW4YdK3pUszyGsrYH5LKzrS2K%2Bg14cZtAMV2CEhaQeyVoPPO%2FovXzpNXHOCtEUVv4DGzZjdPqNothZId8tWjH53Njhrzg9htjGFGaQzNGG3nUy7VryiwhngamiOS%2F3H6PlUZcwXIs7oejkOm0VdGy3bCRbvoKC4ijf1eH7&X-Amz-Signature=c18ab3bd702a2153847aebe7f907b2d09489a797e2272d006be7af170a232d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HO3VN3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCLjLCwbdtt9o7t91sMx6Ux49YRlruwhm5EWQeaFJWykAIgOEVgwO808jEa4hOXi%2ByeM2vyI7QMZIBxIGom5OYTBmgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZTl7aClssuiUxQUircA5BRkbS3ft6uQfcFc6sKOVSDsfqAwaDn9tLddF9RR%2FbTV0EUcs%2BDSZd4Syjy12NO5Yt3T9vWnFZ%2Fx2kEjdir56rrdeavE%2FRjSz0SUFXz45OTDeJ1iv5Q2UKgp6SOS9AKhbGEWYGVMaVqDb38p5tT%2BSpnz%2BmPQRmeUsT2QIm6cdy0EG2j1RHHzquaqQZI3N9kwf%2BSWaTfMWhXcWg1JtR07N0jpUw2mJLTH%2FO2%2BU%2BM3TcOBIitu4PlVc0K01afc2FybZ0egkUjPGoxsCRm75gAgpYcujLXVjGAdhubT%2B9ykjeyd%2FDbOcp%2FqipdT4Uw9fTeSrnCPrBUuClGhn87RPXRxKdWDmkAYsGeOzLki3vju99KvtzmPnz2skYIPdgc7W4K4ikiLmcnfdJpDyVhQPB47f6Q1FoUbsmpTgqn9mK%2BhH6ajKjhBfP8weUmC2BLvXRoyVhToWPbIi%2BfWSLnTumAiwSOAlwXuw9jTFSyhuLdi3fruRtR09J7GVtKdNfAXQVPrWkZAVyvBLtV%2B8NqrG3ftwt3DP32dQeJBxBi3Qj5Ft44iQ%2F5gg%2B8mPEpybSJi6%2FQZrrEaUksNMy9OcnxI6h8W2vOmcxXXKAh1INxeAy7Sc%2B5rIJJUc9UW8CWVaSZMMeg28QGOqUBJ2%2B24J2%2FPAvf2SVYj9yF0ZTKmdizg%2BAUq4W1lDoiFuUMINiIYJ7na1SY0tJkE%2B09zgEUIba6dA9X1Bnvs%2BoWmFBWT0X5dqdM2LiVRt8qOOWvySZ%2FL4AqBj2Ur2ZxEq9MMSx4vFfBFjDvbaMXLEa4bDjsNPskbJwFQaI0wqQ1hWCrYR3lLcbVBupXjYEvVfCeqLGsyOnuNEencfONAu0qbByZai2%2F&X-Amz-Signature=332937c44d031c300dd28e1ac5194b554db6c7152d6c84f056c20c041f22038f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HO3VN3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCLjLCwbdtt9o7t91sMx6Ux49YRlruwhm5EWQeaFJWykAIgOEVgwO808jEa4hOXi%2ByeM2vyI7QMZIBxIGom5OYTBmgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZTl7aClssuiUxQUircA5BRkbS3ft6uQfcFc6sKOVSDsfqAwaDn9tLddF9RR%2FbTV0EUcs%2BDSZd4Syjy12NO5Yt3T9vWnFZ%2Fx2kEjdir56rrdeavE%2FRjSz0SUFXz45OTDeJ1iv5Q2UKgp6SOS9AKhbGEWYGVMaVqDb38p5tT%2BSpnz%2BmPQRmeUsT2QIm6cdy0EG2j1RHHzquaqQZI3N9kwf%2BSWaTfMWhXcWg1JtR07N0jpUw2mJLTH%2FO2%2BU%2BM3TcOBIitu4PlVc0K01afc2FybZ0egkUjPGoxsCRm75gAgpYcujLXVjGAdhubT%2B9ykjeyd%2FDbOcp%2FqipdT4Uw9fTeSrnCPrBUuClGhn87RPXRxKdWDmkAYsGeOzLki3vju99KvtzmPnz2skYIPdgc7W4K4ikiLmcnfdJpDyVhQPB47f6Q1FoUbsmpTgqn9mK%2BhH6ajKjhBfP8weUmC2BLvXRoyVhToWPbIi%2BfWSLnTumAiwSOAlwXuw9jTFSyhuLdi3fruRtR09J7GVtKdNfAXQVPrWkZAVyvBLtV%2B8NqrG3ftwt3DP32dQeJBxBi3Qj5Ft44iQ%2F5gg%2B8mPEpybSJi6%2FQZrrEaUksNMy9OcnxI6h8W2vOmcxXXKAh1INxeAy7Sc%2B5rIJJUc9UW8CWVaSZMMeg28QGOqUBJ2%2B24J2%2FPAvf2SVYj9yF0ZTKmdizg%2BAUq4W1lDoiFuUMINiIYJ7na1SY0tJkE%2B09zgEUIba6dA9X1Bnvs%2BoWmFBWT0X5dqdM2LiVRt8qOOWvySZ%2FL4AqBj2Ur2ZxEq9MMSx4vFfBFjDvbaMXLEa4bDjsNPskbJwFQaI0wqQ1hWCrYR3lLcbVBupXjYEvVfCeqLGsyOnuNEencfONAu0qbByZai2%2F&X-Amz-Signature=ee736dda795d777b55d8c07c14856ebd01ecade7b560f1aefa6a0ff56f01b52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HO3VN3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCLjLCwbdtt9o7t91sMx6Ux49YRlruwhm5EWQeaFJWykAIgOEVgwO808jEa4hOXi%2ByeM2vyI7QMZIBxIGom5OYTBmgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZTl7aClssuiUxQUircA5BRkbS3ft6uQfcFc6sKOVSDsfqAwaDn9tLddF9RR%2FbTV0EUcs%2BDSZd4Syjy12NO5Yt3T9vWnFZ%2Fx2kEjdir56rrdeavE%2FRjSz0SUFXz45OTDeJ1iv5Q2UKgp6SOS9AKhbGEWYGVMaVqDb38p5tT%2BSpnz%2BmPQRmeUsT2QIm6cdy0EG2j1RHHzquaqQZI3N9kwf%2BSWaTfMWhXcWg1JtR07N0jpUw2mJLTH%2FO2%2BU%2BM3TcOBIitu4PlVc0K01afc2FybZ0egkUjPGoxsCRm75gAgpYcujLXVjGAdhubT%2B9ykjeyd%2FDbOcp%2FqipdT4Uw9fTeSrnCPrBUuClGhn87RPXRxKdWDmkAYsGeOzLki3vju99KvtzmPnz2skYIPdgc7W4K4ikiLmcnfdJpDyVhQPB47f6Q1FoUbsmpTgqn9mK%2BhH6ajKjhBfP8weUmC2BLvXRoyVhToWPbIi%2BfWSLnTumAiwSOAlwXuw9jTFSyhuLdi3fruRtR09J7GVtKdNfAXQVPrWkZAVyvBLtV%2B8NqrG3ftwt3DP32dQeJBxBi3Qj5Ft44iQ%2F5gg%2B8mPEpybSJi6%2FQZrrEaUksNMy9OcnxI6h8W2vOmcxXXKAh1INxeAy7Sc%2B5rIJJUc9UW8CWVaSZMMeg28QGOqUBJ2%2B24J2%2FPAvf2SVYj9yF0ZTKmdizg%2BAUq4W1lDoiFuUMINiIYJ7na1SY0tJkE%2B09zgEUIba6dA9X1Bnvs%2BoWmFBWT0X5dqdM2LiVRt8qOOWvySZ%2FL4AqBj2Ur2ZxEq9MMSx4vFfBFjDvbaMXLEa4bDjsNPskbJwFQaI0wqQ1hWCrYR3lLcbVBupXjYEvVfCeqLGsyOnuNEencfONAu0qbByZai2%2F&X-Amz-Signature=f04eca41a40053a27ccfa5a161eb2d1eb7d94da5d6501be2c0b78f0d9982694c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HO3VN3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCLjLCwbdtt9o7t91sMx6Ux49YRlruwhm5EWQeaFJWykAIgOEVgwO808jEa4hOXi%2ByeM2vyI7QMZIBxIGom5OYTBmgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZTl7aClssuiUxQUircA5BRkbS3ft6uQfcFc6sKOVSDsfqAwaDn9tLddF9RR%2FbTV0EUcs%2BDSZd4Syjy12NO5Yt3T9vWnFZ%2Fx2kEjdir56rrdeavE%2FRjSz0SUFXz45OTDeJ1iv5Q2UKgp6SOS9AKhbGEWYGVMaVqDb38p5tT%2BSpnz%2BmPQRmeUsT2QIm6cdy0EG2j1RHHzquaqQZI3N9kwf%2BSWaTfMWhXcWg1JtR07N0jpUw2mJLTH%2FO2%2BU%2BM3TcOBIitu4PlVc0K01afc2FybZ0egkUjPGoxsCRm75gAgpYcujLXVjGAdhubT%2B9ykjeyd%2FDbOcp%2FqipdT4Uw9fTeSrnCPrBUuClGhn87RPXRxKdWDmkAYsGeOzLki3vju99KvtzmPnz2skYIPdgc7W4K4ikiLmcnfdJpDyVhQPB47f6Q1FoUbsmpTgqn9mK%2BhH6ajKjhBfP8weUmC2BLvXRoyVhToWPbIi%2BfWSLnTumAiwSOAlwXuw9jTFSyhuLdi3fruRtR09J7GVtKdNfAXQVPrWkZAVyvBLtV%2B8NqrG3ftwt3DP32dQeJBxBi3Qj5Ft44iQ%2F5gg%2B8mPEpybSJi6%2FQZrrEaUksNMy9OcnxI6h8W2vOmcxXXKAh1INxeAy7Sc%2B5rIJJUc9UW8CWVaSZMMeg28QGOqUBJ2%2B24J2%2FPAvf2SVYj9yF0ZTKmdizg%2BAUq4W1lDoiFuUMINiIYJ7na1SY0tJkE%2B09zgEUIba6dA9X1Bnvs%2BoWmFBWT0X5dqdM2LiVRt8qOOWvySZ%2FL4AqBj2Ur2ZxEq9MMSx4vFfBFjDvbaMXLEa4bDjsNPskbJwFQaI0wqQ1hWCrYR3lLcbVBupXjYEvVfCeqLGsyOnuNEencfONAu0qbByZai2%2F&X-Amz-Signature=dc6a8030ab2519125d2d7803c39a6af8281a5f57b83c06b41baf361515f00125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HO3VN3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCLjLCwbdtt9o7t91sMx6Ux49YRlruwhm5EWQeaFJWykAIgOEVgwO808jEa4hOXi%2ByeM2vyI7QMZIBxIGom5OYTBmgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZTl7aClssuiUxQUircA5BRkbS3ft6uQfcFc6sKOVSDsfqAwaDn9tLddF9RR%2FbTV0EUcs%2BDSZd4Syjy12NO5Yt3T9vWnFZ%2Fx2kEjdir56rrdeavE%2FRjSz0SUFXz45OTDeJ1iv5Q2UKgp6SOS9AKhbGEWYGVMaVqDb38p5tT%2BSpnz%2BmPQRmeUsT2QIm6cdy0EG2j1RHHzquaqQZI3N9kwf%2BSWaTfMWhXcWg1JtR07N0jpUw2mJLTH%2FO2%2BU%2BM3TcOBIitu4PlVc0K01afc2FybZ0egkUjPGoxsCRm75gAgpYcujLXVjGAdhubT%2B9ykjeyd%2FDbOcp%2FqipdT4Uw9fTeSrnCPrBUuClGhn87RPXRxKdWDmkAYsGeOzLki3vju99KvtzmPnz2skYIPdgc7W4K4ikiLmcnfdJpDyVhQPB47f6Q1FoUbsmpTgqn9mK%2BhH6ajKjhBfP8weUmC2BLvXRoyVhToWPbIi%2BfWSLnTumAiwSOAlwXuw9jTFSyhuLdi3fruRtR09J7GVtKdNfAXQVPrWkZAVyvBLtV%2B8NqrG3ftwt3DP32dQeJBxBi3Qj5Ft44iQ%2F5gg%2B8mPEpybSJi6%2FQZrrEaUksNMy9OcnxI6h8W2vOmcxXXKAh1INxeAy7Sc%2B5rIJJUc9UW8CWVaSZMMeg28QGOqUBJ2%2B24J2%2FPAvf2SVYj9yF0ZTKmdizg%2BAUq4W1lDoiFuUMINiIYJ7na1SY0tJkE%2B09zgEUIba6dA9X1Bnvs%2BoWmFBWT0X5dqdM2LiVRt8qOOWvySZ%2FL4AqBj2Ur2ZxEq9MMSx4vFfBFjDvbaMXLEa4bDjsNPskbJwFQaI0wqQ1hWCrYR3lLcbVBupXjYEvVfCeqLGsyOnuNEencfONAu0qbByZai2%2F&X-Amz-Signature=af5db3c67cd4ffd1cff2a6c6cf82dd14228aaeef7dfb19c6065163e5d32a8557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HO3VN3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCLjLCwbdtt9o7t91sMx6Ux49YRlruwhm5EWQeaFJWykAIgOEVgwO808jEa4hOXi%2ByeM2vyI7QMZIBxIGom5OYTBmgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZTl7aClssuiUxQUircA5BRkbS3ft6uQfcFc6sKOVSDsfqAwaDn9tLddF9RR%2FbTV0EUcs%2BDSZd4Syjy12NO5Yt3T9vWnFZ%2Fx2kEjdir56rrdeavE%2FRjSz0SUFXz45OTDeJ1iv5Q2UKgp6SOS9AKhbGEWYGVMaVqDb38p5tT%2BSpnz%2BmPQRmeUsT2QIm6cdy0EG2j1RHHzquaqQZI3N9kwf%2BSWaTfMWhXcWg1JtR07N0jpUw2mJLTH%2FO2%2BU%2BM3TcOBIitu4PlVc0K01afc2FybZ0egkUjPGoxsCRm75gAgpYcujLXVjGAdhubT%2B9ykjeyd%2FDbOcp%2FqipdT4Uw9fTeSrnCPrBUuClGhn87RPXRxKdWDmkAYsGeOzLki3vju99KvtzmPnz2skYIPdgc7W4K4ikiLmcnfdJpDyVhQPB47f6Q1FoUbsmpTgqn9mK%2BhH6ajKjhBfP8weUmC2BLvXRoyVhToWPbIi%2BfWSLnTumAiwSOAlwXuw9jTFSyhuLdi3fruRtR09J7GVtKdNfAXQVPrWkZAVyvBLtV%2B8NqrG3ftwt3DP32dQeJBxBi3Qj5Ft44iQ%2F5gg%2B8mPEpybSJi6%2FQZrrEaUksNMy9OcnxI6h8W2vOmcxXXKAh1INxeAy7Sc%2B5rIJJUc9UW8CWVaSZMMeg28QGOqUBJ2%2B24J2%2FPAvf2SVYj9yF0ZTKmdizg%2BAUq4W1lDoiFuUMINiIYJ7na1SY0tJkE%2B09zgEUIba6dA9X1Bnvs%2BoWmFBWT0X5dqdM2LiVRt8qOOWvySZ%2FL4AqBj2Ur2ZxEq9MMSx4vFfBFjDvbaMXLEa4bDjsNPskbJwFQaI0wqQ1hWCrYR3lLcbVBupXjYEvVfCeqLGsyOnuNEencfONAu0qbByZai2%2F&X-Amz-Signature=0a9005643a28d2b58f25a4d804fa75da50db6c99919147840863ae6842aa251b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HO3VN3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCLjLCwbdtt9o7t91sMx6Ux49YRlruwhm5EWQeaFJWykAIgOEVgwO808jEa4hOXi%2ByeM2vyI7QMZIBxIGom5OYTBmgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZTl7aClssuiUxQUircA5BRkbS3ft6uQfcFc6sKOVSDsfqAwaDn9tLddF9RR%2FbTV0EUcs%2BDSZd4Syjy12NO5Yt3T9vWnFZ%2Fx2kEjdir56rrdeavE%2FRjSz0SUFXz45OTDeJ1iv5Q2UKgp6SOS9AKhbGEWYGVMaVqDb38p5tT%2BSpnz%2BmPQRmeUsT2QIm6cdy0EG2j1RHHzquaqQZI3N9kwf%2BSWaTfMWhXcWg1JtR07N0jpUw2mJLTH%2FO2%2BU%2BM3TcOBIitu4PlVc0K01afc2FybZ0egkUjPGoxsCRm75gAgpYcujLXVjGAdhubT%2B9ykjeyd%2FDbOcp%2FqipdT4Uw9fTeSrnCPrBUuClGhn87RPXRxKdWDmkAYsGeOzLki3vju99KvtzmPnz2skYIPdgc7W4K4ikiLmcnfdJpDyVhQPB47f6Q1FoUbsmpTgqn9mK%2BhH6ajKjhBfP8weUmC2BLvXRoyVhToWPbIi%2BfWSLnTumAiwSOAlwXuw9jTFSyhuLdi3fruRtR09J7GVtKdNfAXQVPrWkZAVyvBLtV%2B8NqrG3ftwt3DP32dQeJBxBi3Qj5Ft44iQ%2F5gg%2B8mPEpybSJi6%2FQZrrEaUksNMy9OcnxI6h8W2vOmcxXXKAh1INxeAy7Sc%2B5rIJJUc9UW8CWVaSZMMeg28QGOqUBJ2%2B24J2%2FPAvf2SVYj9yF0ZTKmdizg%2BAUq4W1lDoiFuUMINiIYJ7na1SY0tJkE%2B09zgEUIba6dA9X1Bnvs%2BoWmFBWT0X5dqdM2LiVRt8qOOWvySZ%2FL4AqBj2Ur2ZxEq9MMSx4vFfBFjDvbaMXLEa4bDjsNPskbJwFQaI0wqQ1hWCrYR3lLcbVBupXjYEvVfCeqLGsyOnuNEencfONAu0qbByZai2%2F&X-Amz-Signature=c53f2f088cf1684a29fb97f671a91a3542143f4e44a643627d6fe7ba2b7642e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HO3VN3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCLjLCwbdtt9o7t91sMx6Ux49YRlruwhm5EWQeaFJWykAIgOEVgwO808jEa4hOXi%2ByeM2vyI7QMZIBxIGom5OYTBmgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZTl7aClssuiUxQUircA5BRkbS3ft6uQfcFc6sKOVSDsfqAwaDn9tLddF9RR%2FbTV0EUcs%2BDSZd4Syjy12NO5Yt3T9vWnFZ%2Fx2kEjdir56rrdeavE%2FRjSz0SUFXz45OTDeJ1iv5Q2UKgp6SOS9AKhbGEWYGVMaVqDb38p5tT%2BSpnz%2BmPQRmeUsT2QIm6cdy0EG2j1RHHzquaqQZI3N9kwf%2BSWaTfMWhXcWg1JtR07N0jpUw2mJLTH%2FO2%2BU%2BM3TcOBIitu4PlVc0K01afc2FybZ0egkUjPGoxsCRm75gAgpYcujLXVjGAdhubT%2B9ykjeyd%2FDbOcp%2FqipdT4Uw9fTeSrnCPrBUuClGhn87RPXRxKdWDmkAYsGeOzLki3vju99KvtzmPnz2skYIPdgc7W4K4ikiLmcnfdJpDyVhQPB47f6Q1FoUbsmpTgqn9mK%2BhH6ajKjhBfP8weUmC2BLvXRoyVhToWPbIi%2BfWSLnTumAiwSOAlwXuw9jTFSyhuLdi3fruRtR09J7GVtKdNfAXQVPrWkZAVyvBLtV%2B8NqrG3ftwt3DP32dQeJBxBi3Qj5Ft44iQ%2F5gg%2B8mPEpybSJi6%2FQZrrEaUksNMy9OcnxI6h8W2vOmcxXXKAh1INxeAy7Sc%2B5rIJJUc9UW8CWVaSZMMeg28QGOqUBJ2%2B24J2%2FPAvf2SVYj9yF0ZTKmdizg%2BAUq4W1lDoiFuUMINiIYJ7na1SY0tJkE%2B09zgEUIba6dA9X1Bnvs%2BoWmFBWT0X5dqdM2LiVRt8qOOWvySZ%2FL4AqBj2Ur2ZxEq9MMSx4vFfBFjDvbaMXLEa4bDjsNPskbJwFQaI0wqQ1hWCrYR3lLcbVBupXjYEvVfCeqLGsyOnuNEencfONAu0qbByZai2%2F&X-Amz-Signature=cea2921aeb96d9b4cffc0197496484682423165ad734b9a6c343aedb183da258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HO3VN3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCLjLCwbdtt9o7t91sMx6Ux49YRlruwhm5EWQeaFJWykAIgOEVgwO808jEa4hOXi%2ByeM2vyI7QMZIBxIGom5OYTBmgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZTl7aClssuiUxQUircA5BRkbS3ft6uQfcFc6sKOVSDsfqAwaDn9tLddF9RR%2FbTV0EUcs%2BDSZd4Syjy12NO5Yt3T9vWnFZ%2Fx2kEjdir56rrdeavE%2FRjSz0SUFXz45OTDeJ1iv5Q2UKgp6SOS9AKhbGEWYGVMaVqDb38p5tT%2BSpnz%2BmPQRmeUsT2QIm6cdy0EG2j1RHHzquaqQZI3N9kwf%2BSWaTfMWhXcWg1JtR07N0jpUw2mJLTH%2FO2%2BU%2BM3TcOBIitu4PlVc0K01afc2FybZ0egkUjPGoxsCRm75gAgpYcujLXVjGAdhubT%2B9ykjeyd%2FDbOcp%2FqipdT4Uw9fTeSrnCPrBUuClGhn87RPXRxKdWDmkAYsGeOzLki3vju99KvtzmPnz2skYIPdgc7W4K4ikiLmcnfdJpDyVhQPB47f6Q1FoUbsmpTgqn9mK%2BhH6ajKjhBfP8weUmC2BLvXRoyVhToWPbIi%2BfWSLnTumAiwSOAlwXuw9jTFSyhuLdi3fruRtR09J7GVtKdNfAXQVPrWkZAVyvBLtV%2B8NqrG3ftwt3DP32dQeJBxBi3Qj5Ft44iQ%2F5gg%2B8mPEpybSJi6%2FQZrrEaUksNMy9OcnxI6h8W2vOmcxXXKAh1INxeAy7Sc%2B5rIJJUc9UW8CWVaSZMMeg28QGOqUBJ2%2B24J2%2FPAvf2SVYj9yF0ZTKmdizg%2BAUq4W1lDoiFuUMINiIYJ7na1SY0tJkE%2B09zgEUIba6dA9X1Bnvs%2BoWmFBWT0X5dqdM2LiVRt8qOOWvySZ%2FL4AqBj2Ur2ZxEq9MMSx4vFfBFjDvbaMXLEa4bDjsNPskbJwFQaI0wqQ1hWCrYR3lLcbVBupXjYEvVfCeqLGsyOnuNEencfONAu0qbByZai2%2F&X-Amz-Signature=0b6be48c9d3a13d8eaaf4f8f2be6b13991a15e497f9d45c58b0f01a4f493f664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
