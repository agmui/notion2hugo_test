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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BECH6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIChG5frsTeT9Bt8%2Fbx0A4SQmv176%2ForZAxHmiT9ksPzJAiAmTkwUiCsR9lrhgVNyat2DPQr0h1EjzwG2RZ05ypGiESqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8MCx7tuxD1jSxXvRKtwDIsZutguoUSI7PlwsOJkLVfTgz6elbjQmADrBq7j6Ugl0o8pN7RaPahHLIWp35ZSIVGR1vYvWlpFssVB20rvKkwqf438XppPnmDnHbCCBhzzCw26Lq9Ez3yHNAQ8oQtgDTcEQbRuxLK0wSSSKkUFHX6oMSYfxYvLYk0tg0z5nNmB%2FsXvvAkDxt9RgnyY%2BmOKb1yx58J4fJqMA1woL3fnVtfwuzSh6VPRhIhlpABM7BLiED3GjaePOyELuw9ZxUSmlyjCPS8abKhzV%2BIHOhVmx4HRqSlxz4elgnplLJSEKBpt%2BCmrkqWWKMZ%2F0aOwIRFP1Eect1t5fVi2tvedoSH2nx6dgonDakSlq5R4Y0J7%2Boj8z7xkG81YBc30j%2F4l6%2FH9d2MBc2eodUHUeHpp9o4vnZRmAoCaKJf3A4DKOctp11oWuXSTM%2FuNK2PSaOTvhnSQSYVNR4rCjFbor87Zjn9zajmB%2F0uwP41CdT%2B9fh%2B%2B32Bpoluv6ZTuf3lAtEapuU9snF2oQ6AHxmtPsi39ZGFxFSUY2VIrI6myZPehRPzYRTfdVnxyDdKR8R2XxCs0%2Bcuhb6wWxF9%2FZHObMAV%2Fq2q%2BYKpg5G42KG4kuUcIsSlqs%2B1USLmuqwI6Zxuw3CGkwjvrSxAY6pgEUfEgtfR%2FtDbMeIJ0o30ZL4MDa7cnny3miNzT2QR5WjmAwfY50rAI%2FYsrjh%2FMf7eSwfBNcyKQ1fsLMF2y8qZUoagC9sZNMj0dd2N%2FtE2lOOhgcZSGLFtfrgwYVzsRUbtmP4zEtiUbHIS%2Fn3M8vT0OKXucTjjY%2FRRsTHnva7ig9lHPIh1vpGsj9Rnr25lahyXRkOQAwH89fXzhthF1K0Zi9tfJ7WWGR&X-Amz-Signature=c3967aff13befb4ba32bc8d0c580fe6b0a7ad090af9ceb23f1b146fec26f1413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BECH6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIChG5frsTeT9Bt8%2Fbx0A4SQmv176%2ForZAxHmiT9ksPzJAiAmTkwUiCsR9lrhgVNyat2DPQr0h1EjzwG2RZ05ypGiESqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8MCx7tuxD1jSxXvRKtwDIsZutguoUSI7PlwsOJkLVfTgz6elbjQmADrBq7j6Ugl0o8pN7RaPahHLIWp35ZSIVGR1vYvWlpFssVB20rvKkwqf438XppPnmDnHbCCBhzzCw26Lq9Ez3yHNAQ8oQtgDTcEQbRuxLK0wSSSKkUFHX6oMSYfxYvLYk0tg0z5nNmB%2FsXvvAkDxt9RgnyY%2BmOKb1yx58J4fJqMA1woL3fnVtfwuzSh6VPRhIhlpABM7BLiED3GjaePOyELuw9ZxUSmlyjCPS8abKhzV%2BIHOhVmx4HRqSlxz4elgnplLJSEKBpt%2BCmrkqWWKMZ%2F0aOwIRFP1Eect1t5fVi2tvedoSH2nx6dgonDakSlq5R4Y0J7%2Boj8z7xkG81YBc30j%2F4l6%2FH9d2MBc2eodUHUeHpp9o4vnZRmAoCaKJf3A4DKOctp11oWuXSTM%2FuNK2PSaOTvhnSQSYVNR4rCjFbor87Zjn9zajmB%2F0uwP41CdT%2B9fh%2B%2B32Bpoluv6ZTuf3lAtEapuU9snF2oQ6AHxmtPsi39ZGFxFSUY2VIrI6myZPehRPzYRTfdVnxyDdKR8R2XxCs0%2Bcuhb6wWxF9%2FZHObMAV%2Fq2q%2BYKpg5G42KG4kuUcIsSlqs%2B1USLmuqwI6Zxuw3CGkwjvrSxAY6pgEUfEgtfR%2FtDbMeIJ0o30ZL4MDa7cnny3miNzT2QR5WjmAwfY50rAI%2FYsrjh%2FMf7eSwfBNcyKQ1fsLMF2y8qZUoagC9sZNMj0dd2N%2FtE2lOOhgcZSGLFtfrgwYVzsRUbtmP4zEtiUbHIS%2Fn3M8vT0OKXucTjjY%2FRRsTHnva7ig9lHPIh1vpGsj9Rnr25lahyXRkOQAwH89fXzhthF1K0Zi9tfJ7WWGR&X-Amz-Signature=d454b670c6c4fef617a762d4a73e496d64f9f6c5e0d6a1b79364dd84e4c918db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BECH6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIChG5frsTeT9Bt8%2Fbx0A4SQmv176%2ForZAxHmiT9ksPzJAiAmTkwUiCsR9lrhgVNyat2DPQr0h1EjzwG2RZ05ypGiESqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8MCx7tuxD1jSxXvRKtwDIsZutguoUSI7PlwsOJkLVfTgz6elbjQmADrBq7j6Ugl0o8pN7RaPahHLIWp35ZSIVGR1vYvWlpFssVB20rvKkwqf438XppPnmDnHbCCBhzzCw26Lq9Ez3yHNAQ8oQtgDTcEQbRuxLK0wSSSKkUFHX6oMSYfxYvLYk0tg0z5nNmB%2FsXvvAkDxt9RgnyY%2BmOKb1yx58J4fJqMA1woL3fnVtfwuzSh6VPRhIhlpABM7BLiED3GjaePOyELuw9ZxUSmlyjCPS8abKhzV%2BIHOhVmx4HRqSlxz4elgnplLJSEKBpt%2BCmrkqWWKMZ%2F0aOwIRFP1Eect1t5fVi2tvedoSH2nx6dgonDakSlq5R4Y0J7%2Boj8z7xkG81YBc30j%2F4l6%2FH9d2MBc2eodUHUeHpp9o4vnZRmAoCaKJf3A4DKOctp11oWuXSTM%2FuNK2PSaOTvhnSQSYVNR4rCjFbor87Zjn9zajmB%2F0uwP41CdT%2B9fh%2B%2B32Bpoluv6ZTuf3lAtEapuU9snF2oQ6AHxmtPsi39ZGFxFSUY2VIrI6myZPehRPzYRTfdVnxyDdKR8R2XxCs0%2Bcuhb6wWxF9%2FZHObMAV%2Fq2q%2BYKpg5G42KG4kuUcIsSlqs%2B1USLmuqwI6Zxuw3CGkwjvrSxAY6pgEUfEgtfR%2FtDbMeIJ0o30ZL4MDa7cnny3miNzT2QR5WjmAwfY50rAI%2FYsrjh%2FMf7eSwfBNcyKQ1fsLMF2y8qZUoagC9sZNMj0dd2N%2FtE2lOOhgcZSGLFtfrgwYVzsRUbtmP4zEtiUbHIS%2Fn3M8vT0OKXucTjjY%2FRRsTHnva7ig9lHPIh1vpGsj9Rnr25lahyXRkOQAwH89fXzhthF1K0Zi9tfJ7WWGR&X-Amz-Signature=af03f24138fbe465d8d3912793d7436fd3315dfd54e26d538b250993dde67947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BECH6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIChG5frsTeT9Bt8%2Fbx0A4SQmv176%2ForZAxHmiT9ksPzJAiAmTkwUiCsR9lrhgVNyat2DPQr0h1EjzwG2RZ05ypGiESqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8MCx7tuxD1jSxXvRKtwDIsZutguoUSI7PlwsOJkLVfTgz6elbjQmADrBq7j6Ugl0o8pN7RaPahHLIWp35ZSIVGR1vYvWlpFssVB20rvKkwqf438XppPnmDnHbCCBhzzCw26Lq9Ez3yHNAQ8oQtgDTcEQbRuxLK0wSSSKkUFHX6oMSYfxYvLYk0tg0z5nNmB%2FsXvvAkDxt9RgnyY%2BmOKb1yx58J4fJqMA1woL3fnVtfwuzSh6VPRhIhlpABM7BLiED3GjaePOyELuw9ZxUSmlyjCPS8abKhzV%2BIHOhVmx4HRqSlxz4elgnplLJSEKBpt%2BCmrkqWWKMZ%2F0aOwIRFP1Eect1t5fVi2tvedoSH2nx6dgonDakSlq5R4Y0J7%2Boj8z7xkG81YBc30j%2F4l6%2FH9d2MBc2eodUHUeHpp9o4vnZRmAoCaKJf3A4DKOctp11oWuXSTM%2FuNK2PSaOTvhnSQSYVNR4rCjFbor87Zjn9zajmB%2F0uwP41CdT%2B9fh%2B%2B32Bpoluv6ZTuf3lAtEapuU9snF2oQ6AHxmtPsi39ZGFxFSUY2VIrI6myZPehRPzYRTfdVnxyDdKR8R2XxCs0%2Bcuhb6wWxF9%2FZHObMAV%2Fq2q%2BYKpg5G42KG4kuUcIsSlqs%2B1USLmuqwI6Zxuw3CGkwjvrSxAY6pgEUfEgtfR%2FtDbMeIJ0o30ZL4MDa7cnny3miNzT2QR5WjmAwfY50rAI%2FYsrjh%2FMf7eSwfBNcyKQ1fsLMF2y8qZUoagC9sZNMj0dd2N%2FtE2lOOhgcZSGLFtfrgwYVzsRUbtmP4zEtiUbHIS%2Fn3M8vT0OKXucTjjY%2FRRsTHnva7ig9lHPIh1vpGsj9Rnr25lahyXRkOQAwH89fXzhthF1K0Zi9tfJ7WWGR&X-Amz-Signature=cc236bba9d0c59c3d702848b7f2fba755290f1ef7249b04dab5ff82f12ecf6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BECH6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIChG5frsTeT9Bt8%2Fbx0A4SQmv176%2ForZAxHmiT9ksPzJAiAmTkwUiCsR9lrhgVNyat2DPQr0h1EjzwG2RZ05ypGiESqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8MCx7tuxD1jSxXvRKtwDIsZutguoUSI7PlwsOJkLVfTgz6elbjQmADrBq7j6Ugl0o8pN7RaPahHLIWp35ZSIVGR1vYvWlpFssVB20rvKkwqf438XppPnmDnHbCCBhzzCw26Lq9Ez3yHNAQ8oQtgDTcEQbRuxLK0wSSSKkUFHX6oMSYfxYvLYk0tg0z5nNmB%2FsXvvAkDxt9RgnyY%2BmOKb1yx58J4fJqMA1woL3fnVtfwuzSh6VPRhIhlpABM7BLiED3GjaePOyELuw9ZxUSmlyjCPS8abKhzV%2BIHOhVmx4HRqSlxz4elgnplLJSEKBpt%2BCmrkqWWKMZ%2F0aOwIRFP1Eect1t5fVi2tvedoSH2nx6dgonDakSlq5R4Y0J7%2Boj8z7xkG81YBc30j%2F4l6%2FH9d2MBc2eodUHUeHpp9o4vnZRmAoCaKJf3A4DKOctp11oWuXSTM%2FuNK2PSaOTvhnSQSYVNR4rCjFbor87Zjn9zajmB%2F0uwP41CdT%2B9fh%2B%2B32Bpoluv6ZTuf3lAtEapuU9snF2oQ6AHxmtPsi39ZGFxFSUY2VIrI6myZPehRPzYRTfdVnxyDdKR8R2XxCs0%2Bcuhb6wWxF9%2FZHObMAV%2Fq2q%2BYKpg5G42KG4kuUcIsSlqs%2B1USLmuqwI6Zxuw3CGkwjvrSxAY6pgEUfEgtfR%2FtDbMeIJ0o30ZL4MDa7cnny3miNzT2QR5WjmAwfY50rAI%2FYsrjh%2FMf7eSwfBNcyKQ1fsLMF2y8qZUoagC9sZNMj0dd2N%2FtE2lOOhgcZSGLFtfrgwYVzsRUbtmP4zEtiUbHIS%2Fn3M8vT0OKXucTjjY%2FRRsTHnva7ig9lHPIh1vpGsj9Rnr25lahyXRkOQAwH89fXzhthF1K0Zi9tfJ7WWGR&X-Amz-Signature=5d2e9e18913812a4e6354b7a38cd8676c750175493c87f4cf4903abace02a987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BECH6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIChG5frsTeT9Bt8%2Fbx0A4SQmv176%2ForZAxHmiT9ksPzJAiAmTkwUiCsR9lrhgVNyat2DPQr0h1EjzwG2RZ05ypGiESqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8MCx7tuxD1jSxXvRKtwDIsZutguoUSI7PlwsOJkLVfTgz6elbjQmADrBq7j6Ugl0o8pN7RaPahHLIWp35ZSIVGR1vYvWlpFssVB20rvKkwqf438XppPnmDnHbCCBhzzCw26Lq9Ez3yHNAQ8oQtgDTcEQbRuxLK0wSSSKkUFHX6oMSYfxYvLYk0tg0z5nNmB%2FsXvvAkDxt9RgnyY%2BmOKb1yx58J4fJqMA1woL3fnVtfwuzSh6VPRhIhlpABM7BLiED3GjaePOyELuw9ZxUSmlyjCPS8abKhzV%2BIHOhVmx4HRqSlxz4elgnplLJSEKBpt%2BCmrkqWWKMZ%2F0aOwIRFP1Eect1t5fVi2tvedoSH2nx6dgonDakSlq5R4Y0J7%2Boj8z7xkG81YBc30j%2F4l6%2FH9d2MBc2eodUHUeHpp9o4vnZRmAoCaKJf3A4DKOctp11oWuXSTM%2FuNK2PSaOTvhnSQSYVNR4rCjFbor87Zjn9zajmB%2F0uwP41CdT%2B9fh%2B%2B32Bpoluv6ZTuf3lAtEapuU9snF2oQ6AHxmtPsi39ZGFxFSUY2VIrI6myZPehRPzYRTfdVnxyDdKR8R2XxCs0%2Bcuhb6wWxF9%2FZHObMAV%2Fq2q%2BYKpg5G42KG4kuUcIsSlqs%2B1USLmuqwI6Zxuw3CGkwjvrSxAY6pgEUfEgtfR%2FtDbMeIJ0o30ZL4MDa7cnny3miNzT2QR5WjmAwfY50rAI%2FYsrjh%2FMf7eSwfBNcyKQ1fsLMF2y8qZUoagC9sZNMj0dd2N%2FtE2lOOhgcZSGLFtfrgwYVzsRUbtmP4zEtiUbHIS%2Fn3M8vT0OKXucTjjY%2FRRsTHnva7ig9lHPIh1vpGsj9Rnr25lahyXRkOQAwH89fXzhthF1K0Zi9tfJ7WWGR&X-Amz-Signature=4e536ad5cffd6d929599d517bce53b32ca73188589e3380a69a12c868500cfd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BECH6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIChG5frsTeT9Bt8%2Fbx0A4SQmv176%2ForZAxHmiT9ksPzJAiAmTkwUiCsR9lrhgVNyat2DPQr0h1EjzwG2RZ05ypGiESqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8MCx7tuxD1jSxXvRKtwDIsZutguoUSI7PlwsOJkLVfTgz6elbjQmADrBq7j6Ugl0o8pN7RaPahHLIWp35ZSIVGR1vYvWlpFssVB20rvKkwqf438XppPnmDnHbCCBhzzCw26Lq9Ez3yHNAQ8oQtgDTcEQbRuxLK0wSSSKkUFHX6oMSYfxYvLYk0tg0z5nNmB%2FsXvvAkDxt9RgnyY%2BmOKb1yx58J4fJqMA1woL3fnVtfwuzSh6VPRhIhlpABM7BLiED3GjaePOyELuw9ZxUSmlyjCPS8abKhzV%2BIHOhVmx4HRqSlxz4elgnplLJSEKBpt%2BCmrkqWWKMZ%2F0aOwIRFP1Eect1t5fVi2tvedoSH2nx6dgonDakSlq5R4Y0J7%2Boj8z7xkG81YBc30j%2F4l6%2FH9d2MBc2eodUHUeHpp9o4vnZRmAoCaKJf3A4DKOctp11oWuXSTM%2FuNK2PSaOTvhnSQSYVNR4rCjFbor87Zjn9zajmB%2F0uwP41CdT%2B9fh%2B%2B32Bpoluv6ZTuf3lAtEapuU9snF2oQ6AHxmtPsi39ZGFxFSUY2VIrI6myZPehRPzYRTfdVnxyDdKR8R2XxCs0%2Bcuhb6wWxF9%2FZHObMAV%2Fq2q%2BYKpg5G42KG4kuUcIsSlqs%2B1USLmuqwI6Zxuw3CGkwjvrSxAY6pgEUfEgtfR%2FtDbMeIJ0o30ZL4MDa7cnny3miNzT2QR5WjmAwfY50rAI%2FYsrjh%2FMf7eSwfBNcyKQ1fsLMF2y8qZUoagC9sZNMj0dd2N%2FtE2lOOhgcZSGLFtfrgwYVzsRUbtmP4zEtiUbHIS%2Fn3M8vT0OKXucTjjY%2FRRsTHnva7ig9lHPIh1vpGsj9Rnr25lahyXRkOQAwH89fXzhthF1K0Zi9tfJ7WWGR&X-Amz-Signature=4dbeaac3b75de4d2e9226c6eea577c6e16c91db21daf663d84990c3c262dbcd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BECH6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIChG5frsTeT9Bt8%2Fbx0A4SQmv176%2ForZAxHmiT9ksPzJAiAmTkwUiCsR9lrhgVNyat2DPQr0h1EjzwG2RZ05ypGiESqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8MCx7tuxD1jSxXvRKtwDIsZutguoUSI7PlwsOJkLVfTgz6elbjQmADrBq7j6Ugl0o8pN7RaPahHLIWp35ZSIVGR1vYvWlpFssVB20rvKkwqf438XppPnmDnHbCCBhzzCw26Lq9Ez3yHNAQ8oQtgDTcEQbRuxLK0wSSSKkUFHX6oMSYfxYvLYk0tg0z5nNmB%2FsXvvAkDxt9RgnyY%2BmOKb1yx58J4fJqMA1woL3fnVtfwuzSh6VPRhIhlpABM7BLiED3GjaePOyELuw9ZxUSmlyjCPS8abKhzV%2BIHOhVmx4HRqSlxz4elgnplLJSEKBpt%2BCmrkqWWKMZ%2F0aOwIRFP1Eect1t5fVi2tvedoSH2nx6dgonDakSlq5R4Y0J7%2Boj8z7xkG81YBc30j%2F4l6%2FH9d2MBc2eodUHUeHpp9o4vnZRmAoCaKJf3A4DKOctp11oWuXSTM%2FuNK2PSaOTvhnSQSYVNR4rCjFbor87Zjn9zajmB%2F0uwP41CdT%2B9fh%2B%2B32Bpoluv6ZTuf3lAtEapuU9snF2oQ6AHxmtPsi39ZGFxFSUY2VIrI6myZPehRPzYRTfdVnxyDdKR8R2XxCs0%2Bcuhb6wWxF9%2FZHObMAV%2Fq2q%2BYKpg5G42KG4kuUcIsSlqs%2B1USLmuqwI6Zxuw3CGkwjvrSxAY6pgEUfEgtfR%2FtDbMeIJ0o30ZL4MDa7cnny3miNzT2QR5WjmAwfY50rAI%2FYsrjh%2FMf7eSwfBNcyKQ1fsLMF2y8qZUoagC9sZNMj0dd2N%2FtE2lOOhgcZSGLFtfrgwYVzsRUbtmP4zEtiUbHIS%2Fn3M8vT0OKXucTjjY%2FRRsTHnva7ig9lHPIh1vpGsj9Rnr25lahyXRkOQAwH89fXzhthF1K0Zi9tfJ7WWGR&X-Amz-Signature=b5aae72eea5c8ba7dad4ff24fbe1cf22e7a381258527688ebb4389dc052db895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BECH6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIChG5frsTeT9Bt8%2Fbx0A4SQmv176%2ForZAxHmiT9ksPzJAiAmTkwUiCsR9lrhgVNyat2DPQr0h1EjzwG2RZ05ypGiESqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8MCx7tuxD1jSxXvRKtwDIsZutguoUSI7PlwsOJkLVfTgz6elbjQmADrBq7j6Ugl0o8pN7RaPahHLIWp35ZSIVGR1vYvWlpFssVB20rvKkwqf438XppPnmDnHbCCBhzzCw26Lq9Ez3yHNAQ8oQtgDTcEQbRuxLK0wSSSKkUFHX6oMSYfxYvLYk0tg0z5nNmB%2FsXvvAkDxt9RgnyY%2BmOKb1yx58J4fJqMA1woL3fnVtfwuzSh6VPRhIhlpABM7BLiED3GjaePOyELuw9ZxUSmlyjCPS8abKhzV%2BIHOhVmx4HRqSlxz4elgnplLJSEKBpt%2BCmrkqWWKMZ%2F0aOwIRFP1Eect1t5fVi2tvedoSH2nx6dgonDakSlq5R4Y0J7%2Boj8z7xkG81YBc30j%2F4l6%2FH9d2MBc2eodUHUeHpp9o4vnZRmAoCaKJf3A4DKOctp11oWuXSTM%2FuNK2PSaOTvhnSQSYVNR4rCjFbor87Zjn9zajmB%2F0uwP41CdT%2B9fh%2B%2B32Bpoluv6ZTuf3lAtEapuU9snF2oQ6AHxmtPsi39ZGFxFSUY2VIrI6myZPehRPzYRTfdVnxyDdKR8R2XxCs0%2Bcuhb6wWxF9%2FZHObMAV%2Fq2q%2BYKpg5G42KG4kuUcIsSlqs%2B1USLmuqwI6Zxuw3CGkwjvrSxAY6pgEUfEgtfR%2FtDbMeIJ0o30ZL4MDa7cnny3miNzT2QR5WjmAwfY50rAI%2FYsrjh%2FMf7eSwfBNcyKQ1fsLMF2y8qZUoagC9sZNMj0dd2N%2FtE2lOOhgcZSGLFtfrgwYVzsRUbtmP4zEtiUbHIS%2Fn3M8vT0OKXucTjjY%2FRRsTHnva7ig9lHPIh1vpGsj9Rnr25lahyXRkOQAwH89fXzhthF1K0Zi9tfJ7WWGR&X-Amz-Signature=904de2c448f50895db7fff79b80635904e96dc34583f94e771bcba450c0259d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7BECH6U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIChG5frsTeT9Bt8%2Fbx0A4SQmv176%2ForZAxHmiT9ksPzJAiAmTkwUiCsR9lrhgVNyat2DPQr0h1EjzwG2RZ05ypGiESqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8MCx7tuxD1jSxXvRKtwDIsZutguoUSI7PlwsOJkLVfTgz6elbjQmADrBq7j6Ugl0o8pN7RaPahHLIWp35ZSIVGR1vYvWlpFssVB20rvKkwqf438XppPnmDnHbCCBhzzCw26Lq9Ez3yHNAQ8oQtgDTcEQbRuxLK0wSSSKkUFHX6oMSYfxYvLYk0tg0z5nNmB%2FsXvvAkDxt9RgnyY%2BmOKb1yx58J4fJqMA1woL3fnVtfwuzSh6VPRhIhlpABM7BLiED3GjaePOyELuw9ZxUSmlyjCPS8abKhzV%2BIHOhVmx4HRqSlxz4elgnplLJSEKBpt%2BCmrkqWWKMZ%2F0aOwIRFP1Eect1t5fVi2tvedoSH2nx6dgonDakSlq5R4Y0J7%2Boj8z7xkG81YBc30j%2F4l6%2FH9d2MBc2eodUHUeHpp9o4vnZRmAoCaKJf3A4DKOctp11oWuXSTM%2FuNK2PSaOTvhnSQSYVNR4rCjFbor87Zjn9zajmB%2F0uwP41CdT%2B9fh%2B%2B32Bpoluv6ZTuf3lAtEapuU9snF2oQ6AHxmtPsi39ZGFxFSUY2VIrI6myZPehRPzYRTfdVnxyDdKR8R2XxCs0%2Bcuhb6wWxF9%2FZHObMAV%2Fq2q%2BYKpg5G42KG4kuUcIsSlqs%2B1USLmuqwI6Zxuw3CGkwjvrSxAY6pgEUfEgtfR%2FtDbMeIJ0o30ZL4MDa7cnny3miNzT2QR5WjmAwfY50rAI%2FYsrjh%2FMf7eSwfBNcyKQ1fsLMF2y8qZUoagC9sZNMj0dd2N%2FtE2lOOhgcZSGLFtfrgwYVzsRUbtmP4zEtiUbHIS%2Fn3M8vT0OKXucTjjY%2FRRsTHnva7ig9lHPIh1vpGsj9Rnr25lahyXRkOQAwH89fXzhthF1K0Zi9tfJ7WWGR&X-Amz-Signature=b1a58e7f89f24cfe722386455137cab667680798280804900a3492b5a8db1a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NPFM6O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDgUIfKlUMweU9R8DhZNpFlsCfRseSsyQnKO%2B5WBZPi%2FwIhALHTI%2FIB%2FgeHCaz1f4X9HYFaPuTXhUqpWqdsrs0ctqLDKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFXpMdQApX3jDqW8Iq3APe3KjqnxiLtZ%2BerMlNS%2BuCjrfm4wt8qtjwPi2Glcx%2FXD%2Bm%2BYDBEGO0Io%2BLYUqUwQSJbXK5LB3G8Y%2Blx2h7rYeunrhSzEnPdtl8AwoIyfDMUHq5B8WGiOtUFNn6mhYud9Q82RlFWW9ri9rNP%2BzA25%2Bqy8Cd%2FTxViHPDySQq063aG0T9AouAsrIxLFrqVESIG%2BIJ5ukStpsyGB3MLWi3oRA87bfGPWupfh3uqxQwmreG8MRCu2DNAT3cvr3bOQrRYQCBoSRWiacyzVN7Zw4gaRwHX8F2yk2tBJrvuFKt0hX1D1N%2FjxjmsZ737u78Jrguh8iX%2FfbKbiZZIIHD4hzrz82HJ77EMseF0n6aGF6E5xBLjFve1rnacgynOaQ52EhEPSN4CRqqxBC4b0MQPfvZabqJ5a3eQlrDi2n7WTEYbZRPE0Ztwy4Flvy1qWqwzarODDLcCfiQI6TOohTwSTVXjIlJkxiICboCXeojByvm%2B2v3OnhjP3Z%2BF%2FcRp5yRWK7roQeztD1x8LCYZyQBRv6pc5giNKKcIqHYpwH5N9s4of6ixnxVELhWh%2F7SvouqY7h0HJcEHIHSZbiOR9o%2F3Rws2Z7GcnCq2HhDnjRW4%2FbZgZCKmav7I43HFF5pWoLfoDCS%2BdLEBjqkAcY%2Fof8mHvjKmfWP6cGudukUT%2F5AVDXyoPHi4z0CLcXikZlxHghRI7StfdPfoPNoidxzsJ4fpCZ7X5qjdepVBQgl6XKAJKCGo0Jdfi49wdtQ%2F7KV7VhJxha5OMjk0RJnT4B6EnnsxZsbsb%2FSBFgUDoxadWBgCTBbr6ECDHeOVg%2BBHUGzC3v6fbMWS2l5U%2FgJH1kQAx%2BiQE6mYFNfNFGmGe%2BYe4bx&X-Amz-Signature=4bf0151bf52c2fb4d4604421ca7c6f0468a00f491cc91e0a97ce22599cd35ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETRXR34%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD0S1r9XBVgqth38kmmq8aExXh3Tf5aeU9oKFigVReEdwIhAOzH%2FlGtVddy3Eq%2FJDNBicCo0hjrwdih1X%2B3NN8o28TuKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BwYRXRjUzDn2mZ7kq3AO3zOEbwmHldC7Tg6KabvFnsjHsKGyAAVNbOljC8fvj3sIOfG3qcEvciS5JWEBghdtiMnTt7QfV%2BWDhR6pBW6EF1jtkYFZnyOS5%2BsQrUpIFhP9%2FLwVUgQAgOwctFBP8r8Y%2FpShiE0Pdwwig7aMT5%2F4dR6CWPaXznHOxAUQYSnYB0dwe2YbVDAyk%2B3%2FSSHqXn3vu9%2Bc%2BSAUQS89Z0nCgHgxRqosWeuToIG0xclXSoMqvj14h0enH%2FfgEhklysoeAjgayogbVquMNnFrK9m4JLLppY4SDmtjixKrD1W6W7Th9EnbmWEAbqWWhybOxquH3rWWs%2FrHQtsPD6OnnsQjzNoFOQp8CAeZT43S%2FBDgL9uFH1Ny783PAfU0xVe0vDZKPBuhyw514Jkdb%2Byq8z3nY3E7OJvIpMmxyJ5RG1HgmB5MPN4481JQlJtceMksoJb%2FT17XU%2FpYQub6pV3LTGf%2BOvxtEXC6orMF49%2FYv7bqgdVaH8fXF88zmy%2B0RIHknnhXE%2FwfoW%2BIZNDk%2FWkBk1cofweyrI%2FjoEXXB554YHjBR4SFGyw4Oi4xWSAQNFgVIL17o3gbUNJXfK4SJL%2BvqqpaVJMy3gmQKug%2FNHjbqZxGEAAHQbx4PXlti08aEEW9kPjC1%2BtLEBjqkAaFNnwtu1tKb1cDywbr%2Bff7nm1EtCfGsjkIbpgkS75R%2B%2FePOf5748oSR28iakWF521%2FCvXzSmYDFzOy%2BKR9A%2FL3L0p2San3coxh2Vko6xx9EAfEToDtga8Q0m2Tmc%2FNVzQboOK%2BIhcKlPGY2R2Kq66dv1u1ZCqCtwqvsVEqR7UuODG%2BrNLqxdPjTO2iIx13yw2XyI9scKclb10graWwhMAFQXtH2&X-Amz-Signature=f5160d62e664effae259b7f5fbbbc1b9f2c2d8e3fd86b4b31d2a08b583c69bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETRXR34%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD0S1r9XBVgqth38kmmq8aExXh3Tf5aeU9oKFigVReEdwIhAOzH%2FlGtVddy3Eq%2FJDNBicCo0hjrwdih1X%2B3NN8o28TuKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BwYRXRjUzDn2mZ7kq3AO3zOEbwmHldC7Tg6KabvFnsjHsKGyAAVNbOljC8fvj3sIOfG3qcEvciS5JWEBghdtiMnTt7QfV%2BWDhR6pBW6EF1jtkYFZnyOS5%2BsQrUpIFhP9%2FLwVUgQAgOwctFBP8r8Y%2FpShiE0Pdwwig7aMT5%2F4dR6CWPaXznHOxAUQYSnYB0dwe2YbVDAyk%2B3%2FSSHqXn3vu9%2Bc%2BSAUQS89Z0nCgHgxRqosWeuToIG0xclXSoMqvj14h0enH%2FfgEhklysoeAjgayogbVquMNnFrK9m4JLLppY4SDmtjixKrD1W6W7Th9EnbmWEAbqWWhybOxquH3rWWs%2FrHQtsPD6OnnsQjzNoFOQp8CAeZT43S%2FBDgL9uFH1Ny783PAfU0xVe0vDZKPBuhyw514Jkdb%2Byq8z3nY3E7OJvIpMmxyJ5RG1HgmB5MPN4481JQlJtceMksoJb%2FT17XU%2FpYQub6pV3LTGf%2BOvxtEXC6orMF49%2FYv7bqgdVaH8fXF88zmy%2B0RIHknnhXE%2FwfoW%2BIZNDk%2FWkBk1cofweyrI%2FjoEXXB554YHjBR4SFGyw4Oi4xWSAQNFgVIL17o3gbUNJXfK4SJL%2BvqqpaVJMy3gmQKug%2FNHjbqZxGEAAHQbx4PXlti08aEEW9kPjC1%2BtLEBjqkAaFNnwtu1tKb1cDywbr%2Bff7nm1EtCfGsjkIbpgkS75R%2B%2FePOf5748oSR28iakWF521%2FCvXzSmYDFzOy%2BKR9A%2FL3L0p2San3coxh2Vko6xx9EAfEToDtga8Q0m2Tmc%2FNVzQboOK%2BIhcKlPGY2R2Kq66dv1u1ZCqCtwqvsVEqR7UuODG%2BrNLqxdPjTO2iIx13yw2XyI9scKclb10graWwhMAFQXtH2&X-Amz-Signature=988b714b93b5d399fab3f1c7d0b0e0e45d35e41a5722fb8e008e9f6e5920e0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETRXR34%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD0S1r9XBVgqth38kmmq8aExXh3Tf5aeU9oKFigVReEdwIhAOzH%2FlGtVddy3Eq%2FJDNBicCo0hjrwdih1X%2B3NN8o28TuKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BwYRXRjUzDn2mZ7kq3AO3zOEbwmHldC7Tg6KabvFnsjHsKGyAAVNbOljC8fvj3sIOfG3qcEvciS5JWEBghdtiMnTt7QfV%2BWDhR6pBW6EF1jtkYFZnyOS5%2BsQrUpIFhP9%2FLwVUgQAgOwctFBP8r8Y%2FpShiE0Pdwwig7aMT5%2F4dR6CWPaXznHOxAUQYSnYB0dwe2YbVDAyk%2B3%2FSSHqXn3vu9%2Bc%2BSAUQS89Z0nCgHgxRqosWeuToIG0xclXSoMqvj14h0enH%2FfgEhklysoeAjgayogbVquMNnFrK9m4JLLppY4SDmtjixKrD1W6W7Th9EnbmWEAbqWWhybOxquH3rWWs%2FrHQtsPD6OnnsQjzNoFOQp8CAeZT43S%2FBDgL9uFH1Ny783PAfU0xVe0vDZKPBuhyw514Jkdb%2Byq8z3nY3E7OJvIpMmxyJ5RG1HgmB5MPN4481JQlJtceMksoJb%2FT17XU%2FpYQub6pV3LTGf%2BOvxtEXC6orMF49%2FYv7bqgdVaH8fXF88zmy%2B0RIHknnhXE%2FwfoW%2BIZNDk%2FWkBk1cofweyrI%2FjoEXXB554YHjBR4SFGyw4Oi4xWSAQNFgVIL17o3gbUNJXfK4SJL%2BvqqpaVJMy3gmQKug%2FNHjbqZxGEAAHQbx4PXlti08aEEW9kPjC1%2BtLEBjqkAaFNnwtu1tKb1cDywbr%2Bff7nm1EtCfGsjkIbpgkS75R%2B%2FePOf5748oSR28iakWF521%2FCvXzSmYDFzOy%2BKR9A%2FL3L0p2San3coxh2Vko6xx9EAfEToDtga8Q0m2Tmc%2FNVzQboOK%2BIhcKlPGY2R2Kq66dv1u1ZCqCtwqvsVEqR7UuODG%2BrNLqxdPjTO2iIx13yw2XyI9scKclb10graWwhMAFQXtH2&X-Amz-Signature=8bed4c4c1c80a513d3463fcc93515e6fcda055fcbfb3b2b4f0a6c4ff48847752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETRXR34%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD0S1r9XBVgqth38kmmq8aExXh3Tf5aeU9oKFigVReEdwIhAOzH%2FlGtVddy3Eq%2FJDNBicCo0hjrwdih1X%2B3NN8o28TuKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BwYRXRjUzDn2mZ7kq3AO3zOEbwmHldC7Tg6KabvFnsjHsKGyAAVNbOljC8fvj3sIOfG3qcEvciS5JWEBghdtiMnTt7QfV%2BWDhR6pBW6EF1jtkYFZnyOS5%2BsQrUpIFhP9%2FLwVUgQAgOwctFBP8r8Y%2FpShiE0Pdwwig7aMT5%2F4dR6CWPaXznHOxAUQYSnYB0dwe2YbVDAyk%2B3%2FSSHqXn3vu9%2Bc%2BSAUQS89Z0nCgHgxRqosWeuToIG0xclXSoMqvj14h0enH%2FfgEhklysoeAjgayogbVquMNnFrK9m4JLLppY4SDmtjixKrD1W6W7Th9EnbmWEAbqWWhybOxquH3rWWs%2FrHQtsPD6OnnsQjzNoFOQp8CAeZT43S%2FBDgL9uFH1Ny783PAfU0xVe0vDZKPBuhyw514Jkdb%2Byq8z3nY3E7OJvIpMmxyJ5RG1HgmB5MPN4481JQlJtceMksoJb%2FT17XU%2FpYQub6pV3LTGf%2BOvxtEXC6orMF49%2FYv7bqgdVaH8fXF88zmy%2B0RIHknnhXE%2FwfoW%2BIZNDk%2FWkBk1cofweyrI%2FjoEXXB554YHjBR4SFGyw4Oi4xWSAQNFgVIL17o3gbUNJXfK4SJL%2BvqqpaVJMy3gmQKug%2FNHjbqZxGEAAHQbx4PXlti08aEEW9kPjC1%2BtLEBjqkAaFNnwtu1tKb1cDywbr%2Bff7nm1EtCfGsjkIbpgkS75R%2B%2FePOf5748oSR28iakWF521%2FCvXzSmYDFzOy%2BKR9A%2FL3L0p2San3coxh2Vko6xx9EAfEToDtga8Q0m2Tmc%2FNVzQboOK%2BIhcKlPGY2R2Kq66dv1u1ZCqCtwqvsVEqR7UuODG%2BrNLqxdPjTO2iIx13yw2XyI9scKclb10graWwhMAFQXtH2&X-Amz-Signature=601806d58faaaf0c23cd5fd5095c37721319e656f3276f4c768afa11d49a3d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETRXR34%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD0S1r9XBVgqth38kmmq8aExXh3Tf5aeU9oKFigVReEdwIhAOzH%2FlGtVddy3Eq%2FJDNBicCo0hjrwdih1X%2B3NN8o28TuKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BwYRXRjUzDn2mZ7kq3AO3zOEbwmHldC7Tg6KabvFnsjHsKGyAAVNbOljC8fvj3sIOfG3qcEvciS5JWEBghdtiMnTt7QfV%2BWDhR6pBW6EF1jtkYFZnyOS5%2BsQrUpIFhP9%2FLwVUgQAgOwctFBP8r8Y%2FpShiE0Pdwwig7aMT5%2F4dR6CWPaXznHOxAUQYSnYB0dwe2YbVDAyk%2B3%2FSSHqXn3vu9%2Bc%2BSAUQS89Z0nCgHgxRqosWeuToIG0xclXSoMqvj14h0enH%2FfgEhklysoeAjgayogbVquMNnFrK9m4JLLppY4SDmtjixKrD1W6W7Th9EnbmWEAbqWWhybOxquH3rWWs%2FrHQtsPD6OnnsQjzNoFOQp8CAeZT43S%2FBDgL9uFH1Ny783PAfU0xVe0vDZKPBuhyw514Jkdb%2Byq8z3nY3E7OJvIpMmxyJ5RG1HgmB5MPN4481JQlJtceMksoJb%2FT17XU%2FpYQub6pV3LTGf%2BOvxtEXC6orMF49%2FYv7bqgdVaH8fXF88zmy%2B0RIHknnhXE%2FwfoW%2BIZNDk%2FWkBk1cofweyrI%2FjoEXXB554YHjBR4SFGyw4Oi4xWSAQNFgVIL17o3gbUNJXfK4SJL%2BvqqpaVJMy3gmQKug%2FNHjbqZxGEAAHQbx4PXlti08aEEW9kPjC1%2BtLEBjqkAaFNnwtu1tKb1cDywbr%2Bff7nm1EtCfGsjkIbpgkS75R%2B%2FePOf5748oSR28iakWF521%2FCvXzSmYDFzOy%2BKR9A%2FL3L0p2San3coxh2Vko6xx9EAfEToDtga8Q0m2Tmc%2FNVzQboOK%2BIhcKlPGY2R2Kq66dv1u1ZCqCtwqvsVEqR7UuODG%2BrNLqxdPjTO2iIx13yw2XyI9scKclb10graWwhMAFQXtH2&X-Amz-Signature=434b24dc0a71bd6a0e23e5517cab959043c054357be182fa02606e205174beb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETRXR34%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD0S1r9XBVgqth38kmmq8aExXh3Tf5aeU9oKFigVReEdwIhAOzH%2FlGtVddy3Eq%2FJDNBicCo0hjrwdih1X%2B3NN8o28TuKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BwYRXRjUzDn2mZ7kq3AO3zOEbwmHldC7Tg6KabvFnsjHsKGyAAVNbOljC8fvj3sIOfG3qcEvciS5JWEBghdtiMnTt7QfV%2BWDhR6pBW6EF1jtkYFZnyOS5%2BsQrUpIFhP9%2FLwVUgQAgOwctFBP8r8Y%2FpShiE0Pdwwig7aMT5%2F4dR6CWPaXznHOxAUQYSnYB0dwe2YbVDAyk%2B3%2FSSHqXn3vu9%2Bc%2BSAUQS89Z0nCgHgxRqosWeuToIG0xclXSoMqvj14h0enH%2FfgEhklysoeAjgayogbVquMNnFrK9m4JLLppY4SDmtjixKrD1W6W7Th9EnbmWEAbqWWhybOxquH3rWWs%2FrHQtsPD6OnnsQjzNoFOQp8CAeZT43S%2FBDgL9uFH1Ny783PAfU0xVe0vDZKPBuhyw514Jkdb%2Byq8z3nY3E7OJvIpMmxyJ5RG1HgmB5MPN4481JQlJtceMksoJb%2FT17XU%2FpYQub6pV3LTGf%2BOvxtEXC6orMF49%2FYv7bqgdVaH8fXF88zmy%2B0RIHknnhXE%2FwfoW%2BIZNDk%2FWkBk1cofweyrI%2FjoEXXB554YHjBR4SFGyw4Oi4xWSAQNFgVIL17o3gbUNJXfK4SJL%2BvqqpaVJMy3gmQKug%2FNHjbqZxGEAAHQbx4PXlti08aEEW9kPjC1%2BtLEBjqkAaFNnwtu1tKb1cDywbr%2Bff7nm1EtCfGsjkIbpgkS75R%2B%2FePOf5748oSR28iakWF521%2FCvXzSmYDFzOy%2BKR9A%2FL3L0p2San3coxh2Vko6xx9EAfEToDtga8Q0m2Tmc%2FNVzQboOK%2BIhcKlPGY2R2Kq66dv1u1ZCqCtwqvsVEqR7UuODG%2BrNLqxdPjTO2iIx13yw2XyI9scKclb10graWwhMAFQXtH2&X-Amz-Signature=26b6293ba18b5f23096e86f36473deacf96fb0879eeca98f292f0854f3d5aa36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETRXR34%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD0S1r9XBVgqth38kmmq8aExXh3Tf5aeU9oKFigVReEdwIhAOzH%2FlGtVddy3Eq%2FJDNBicCo0hjrwdih1X%2B3NN8o28TuKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BwYRXRjUzDn2mZ7kq3AO3zOEbwmHldC7Tg6KabvFnsjHsKGyAAVNbOljC8fvj3sIOfG3qcEvciS5JWEBghdtiMnTt7QfV%2BWDhR6pBW6EF1jtkYFZnyOS5%2BsQrUpIFhP9%2FLwVUgQAgOwctFBP8r8Y%2FpShiE0Pdwwig7aMT5%2F4dR6CWPaXznHOxAUQYSnYB0dwe2YbVDAyk%2B3%2FSSHqXn3vu9%2Bc%2BSAUQS89Z0nCgHgxRqosWeuToIG0xclXSoMqvj14h0enH%2FfgEhklysoeAjgayogbVquMNnFrK9m4JLLppY4SDmtjixKrD1W6W7Th9EnbmWEAbqWWhybOxquH3rWWs%2FrHQtsPD6OnnsQjzNoFOQp8CAeZT43S%2FBDgL9uFH1Ny783PAfU0xVe0vDZKPBuhyw514Jkdb%2Byq8z3nY3E7OJvIpMmxyJ5RG1HgmB5MPN4481JQlJtceMksoJb%2FT17XU%2FpYQub6pV3LTGf%2BOvxtEXC6orMF49%2FYv7bqgdVaH8fXF88zmy%2B0RIHknnhXE%2FwfoW%2BIZNDk%2FWkBk1cofweyrI%2FjoEXXB554YHjBR4SFGyw4Oi4xWSAQNFgVIL17o3gbUNJXfK4SJL%2BvqqpaVJMy3gmQKug%2FNHjbqZxGEAAHQbx4PXlti08aEEW9kPjC1%2BtLEBjqkAaFNnwtu1tKb1cDywbr%2Bff7nm1EtCfGsjkIbpgkS75R%2B%2FePOf5748oSR28iakWF521%2FCvXzSmYDFzOy%2BKR9A%2FL3L0p2San3coxh2Vko6xx9EAfEToDtga8Q0m2Tmc%2FNVzQboOK%2BIhcKlPGY2R2Kq66dv1u1ZCqCtwqvsVEqR7UuODG%2BrNLqxdPjTO2iIx13yw2XyI9scKclb10graWwhMAFQXtH2&X-Amz-Signature=317b76a97627916c209778d1e259473b078fc481a952b09fc54a8ed719b8dc32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETRXR34%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD0S1r9XBVgqth38kmmq8aExXh3Tf5aeU9oKFigVReEdwIhAOzH%2FlGtVddy3Eq%2FJDNBicCo0hjrwdih1X%2B3NN8o28TuKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BwYRXRjUzDn2mZ7kq3AO3zOEbwmHldC7Tg6KabvFnsjHsKGyAAVNbOljC8fvj3sIOfG3qcEvciS5JWEBghdtiMnTt7QfV%2BWDhR6pBW6EF1jtkYFZnyOS5%2BsQrUpIFhP9%2FLwVUgQAgOwctFBP8r8Y%2FpShiE0Pdwwig7aMT5%2F4dR6CWPaXznHOxAUQYSnYB0dwe2YbVDAyk%2B3%2FSSHqXn3vu9%2Bc%2BSAUQS89Z0nCgHgxRqosWeuToIG0xclXSoMqvj14h0enH%2FfgEhklysoeAjgayogbVquMNnFrK9m4JLLppY4SDmtjixKrD1W6W7Th9EnbmWEAbqWWhybOxquH3rWWs%2FrHQtsPD6OnnsQjzNoFOQp8CAeZT43S%2FBDgL9uFH1Ny783PAfU0xVe0vDZKPBuhyw514Jkdb%2Byq8z3nY3E7OJvIpMmxyJ5RG1HgmB5MPN4481JQlJtceMksoJb%2FT17XU%2FpYQub6pV3LTGf%2BOvxtEXC6orMF49%2FYv7bqgdVaH8fXF88zmy%2B0RIHknnhXE%2FwfoW%2BIZNDk%2FWkBk1cofweyrI%2FjoEXXB554YHjBR4SFGyw4Oi4xWSAQNFgVIL17o3gbUNJXfK4SJL%2BvqqpaVJMy3gmQKug%2FNHjbqZxGEAAHQbx4PXlti08aEEW9kPjC1%2BtLEBjqkAaFNnwtu1tKb1cDywbr%2Bff7nm1EtCfGsjkIbpgkS75R%2B%2FePOf5748oSR28iakWF521%2FCvXzSmYDFzOy%2BKR9A%2FL3L0p2San3coxh2Vko6xx9EAfEToDtga8Q0m2Tmc%2FNVzQboOK%2BIhcKlPGY2R2Kq66dv1u1ZCqCtwqvsVEqR7UuODG%2BrNLqxdPjTO2iIx13yw2XyI9scKclb10graWwhMAFQXtH2&X-Amz-Signature=91b346e169f20242b45913f13b86500dc20448ae084cc1dfc96555b53ba501da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETRXR34%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD0S1r9XBVgqth38kmmq8aExXh3Tf5aeU9oKFigVReEdwIhAOzH%2FlGtVddy3Eq%2FJDNBicCo0hjrwdih1X%2B3NN8o28TuKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BwYRXRjUzDn2mZ7kq3AO3zOEbwmHldC7Tg6KabvFnsjHsKGyAAVNbOljC8fvj3sIOfG3qcEvciS5JWEBghdtiMnTt7QfV%2BWDhR6pBW6EF1jtkYFZnyOS5%2BsQrUpIFhP9%2FLwVUgQAgOwctFBP8r8Y%2FpShiE0Pdwwig7aMT5%2F4dR6CWPaXznHOxAUQYSnYB0dwe2YbVDAyk%2B3%2FSSHqXn3vu9%2Bc%2BSAUQS89Z0nCgHgxRqosWeuToIG0xclXSoMqvj14h0enH%2FfgEhklysoeAjgayogbVquMNnFrK9m4JLLppY4SDmtjixKrD1W6W7Th9EnbmWEAbqWWhybOxquH3rWWs%2FrHQtsPD6OnnsQjzNoFOQp8CAeZT43S%2FBDgL9uFH1Ny783PAfU0xVe0vDZKPBuhyw514Jkdb%2Byq8z3nY3E7OJvIpMmxyJ5RG1HgmB5MPN4481JQlJtceMksoJb%2FT17XU%2FpYQub6pV3LTGf%2BOvxtEXC6orMF49%2FYv7bqgdVaH8fXF88zmy%2B0RIHknnhXE%2FwfoW%2BIZNDk%2FWkBk1cofweyrI%2FjoEXXB554YHjBR4SFGyw4Oi4xWSAQNFgVIL17o3gbUNJXfK4SJL%2BvqqpaVJMy3gmQKug%2FNHjbqZxGEAAHQbx4PXlti08aEEW9kPjC1%2BtLEBjqkAaFNnwtu1tKb1cDywbr%2Bff7nm1EtCfGsjkIbpgkS75R%2B%2FePOf5748oSR28iakWF521%2FCvXzSmYDFzOy%2BKR9A%2FL3L0p2San3coxh2Vko6xx9EAfEToDtga8Q0m2Tmc%2FNVzQboOK%2BIhcKlPGY2R2Kq66dv1u1ZCqCtwqvsVEqR7UuODG%2BrNLqxdPjTO2iIx13yw2XyI9scKclb10graWwhMAFQXtH2&X-Amz-Signature=f1052a1f8fecf0ee24a7cec47b8797673ce5cc9373c6c6e74b4173a0f5294f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
