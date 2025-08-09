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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3VI747%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEaGWDBy07w98IWVTTR3K6JS8eTrimMCrrG8dTASf5L6AiEAyVe703vD5xQvKZ5tD%2Fe3dfDAltXJmUyOuF1s0Uo%2BeHUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6pkQL8LrzgLIWPCyrcA8m40PiIUwpbU7TtLQnpC25dw%2Bvr1HZY2XHHQcqfz63yC%2BjBHludQeJuX3Xcc0lttBYLEp0TQKJacbF1iJVjgBrpwZzrKoSjLFXoPPXzA1TZAizm4qokxXJcFCH7wEjynH9aHWHaX7F0NawSGZUyfEIVj%2BHuLyuvPaoH%2Bf7J60brA9FJUubXv7teHPq3j76dJnTu9Gh1Btw%2BSr2p8F67gt5h%2BL0Qr2dSHCc3BmYfgzSPVWeuxy6oEAj6ljmEoGAiulw%2BlriljHqgk%2Fhbw80PIxcPpDd%2BJBr3MDyScDV25ENTmIkwq6RQ2EtkUFOSUt4dS9XCd9sDAEPnEoyvpbsh%2BjWHeRGyb%2BwzrNQvd%2FLEu6354t0ivEqus77FsNok25YTHygeUlqjdCQWiQYsbU2lihY4NLUx%2F938PXw5lyzLnqydH1w4t%2BF0mvpMY%2Fy%2FcrSO7XNeq2dCA2zxr3v4A%2FTrjqgnTZ8NIOD22hIyCf7%2BHtqpRzENi7nSKHJm2BfNFcFtbZw7ULJlpk4htPbq0nMy%2Br%2F4eO4kqV2Blsz4U8I49AwuIhSxzBmzJrKdMfpw60U1XoVn9orquc6MHgNy2%2F%2B1mqtHB3nT8DGc53tBzQ7P5gFHpiIxLiQQJZMTFSL4MO6q2sQGOqUB9ugB8ufVVVZNUO0FrmEj55ST9aPoSg33B058SQzxyXVX1dZumZKE6cLA3NBtsxaqxZEzN3ZRrlGvrNnBuWpp2RX0gmYV6coKsG78cOhFcwMl01X4hqqt9PNw0fnRCbtI5gSXVF7iUx%2Fq5X4N11DmD5kmBxrZ2SD9pkKhaLJ8IR%2BgMq5y4BBo6wy%2Fxtzx4Gmwh8%2BC8OJPB2%2BvG8wl4yVDYdJlaMkA&X-Amz-Signature=8a76dfde00e64958d39431724de3f075cb5f0838f181c43180947cbcc53b90b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3VI747%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEaGWDBy07w98IWVTTR3K6JS8eTrimMCrrG8dTASf5L6AiEAyVe703vD5xQvKZ5tD%2Fe3dfDAltXJmUyOuF1s0Uo%2BeHUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6pkQL8LrzgLIWPCyrcA8m40PiIUwpbU7TtLQnpC25dw%2Bvr1HZY2XHHQcqfz63yC%2BjBHludQeJuX3Xcc0lttBYLEp0TQKJacbF1iJVjgBrpwZzrKoSjLFXoPPXzA1TZAizm4qokxXJcFCH7wEjynH9aHWHaX7F0NawSGZUyfEIVj%2BHuLyuvPaoH%2Bf7J60brA9FJUubXv7teHPq3j76dJnTu9Gh1Btw%2BSr2p8F67gt5h%2BL0Qr2dSHCc3BmYfgzSPVWeuxy6oEAj6ljmEoGAiulw%2BlriljHqgk%2Fhbw80PIxcPpDd%2BJBr3MDyScDV25ENTmIkwq6RQ2EtkUFOSUt4dS9XCd9sDAEPnEoyvpbsh%2BjWHeRGyb%2BwzrNQvd%2FLEu6354t0ivEqus77FsNok25YTHygeUlqjdCQWiQYsbU2lihY4NLUx%2F938PXw5lyzLnqydH1w4t%2BF0mvpMY%2Fy%2FcrSO7XNeq2dCA2zxr3v4A%2FTrjqgnTZ8NIOD22hIyCf7%2BHtqpRzENi7nSKHJm2BfNFcFtbZw7ULJlpk4htPbq0nMy%2Br%2F4eO4kqV2Blsz4U8I49AwuIhSxzBmzJrKdMfpw60U1XoVn9orquc6MHgNy2%2F%2B1mqtHB3nT8DGc53tBzQ7P5gFHpiIxLiQQJZMTFSL4MO6q2sQGOqUB9ugB8ufVVVZNUO0FrmEj55ST9aPoSg33B058SQzxyXVX1dZumZKE6cLA3NBtsxaqxZEzN3ZRrlGvrNnBuWpp2RX0gmYV6coKsG78cOhFcwMl01X4hqqt9PNw0fnRCbtI5gSXVF7iUx%2Fq5X4N11DmD5kmBxrZ2SD9pkKhaLJ8IR%2BgMq5y4BBo6wy%2Fxtzx4Gmwh8%2BC8OJPB2%2BvG8wl4yVDYdJlaMkA&X-Amz-Signature=3b43d1f5da3706e19984b87b750e68c7c843b82aaf2c93a0b298cb4366daf551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3VI747%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEaGWDBy07w98IWVTTR3K6JS8eTrimMCrrG8dTASf5L6AiEAyVe703vD5xQvKZ5tD%2Fe3dfDAltXJmUyOuF1s0Uo%2BeHUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6pkQL8LrzgLIWPCyrcA8m40PiIUwpbU7TtLQnpC25dw%2Bvr1HZY2XHHQcqfz63yC%2BjBHludQeJuX3Xcc0lttBYLEp0TQKJacbF1iJVjgBrpwZzrKoSjLFXoPPXzA1TZAizm4qokxXJcFCH7wEjynH9aHWHaX7F0NawSGZUyfEIVj%2BHuLyuvPaoH%2Bf7J60brA9FJUubXv7teHPq3j76dJnTu9Gh1Btw%2BSr2p8F67gt5h%2BL0Qr2dSHCc3BmYfgzSPVWeuxy6oEAj6ljmEoGAiulw%2BlriljHqgk%2Fhbw80PIxcPpDd%2BJBr3MDyScDV25ENTmIkwq6RQ2EtkUFOSUt4dS9XCd9sDAEPnEoyvpbsh%2BjWHeRGyb%2BwzrNQvd%2FLEu6354t0ivEqus77FsNok25YTHygeUlqjdCQWiQYsbU2lihY4NLUx%2F938PXw5lyzLnqydH1w4t%2BF0mvpMY%2Fy%2FcrSO7XNeq2dCA2zxr3v4A%2FTrjqgnTZ8NIOD22hIyCf7%2BHtqpRzENi7nSKHJm2BfNFcFtbZw7ULJlpk4htPbq0nMy%2Br%2F4eO4kqV2Blsz4U8I49AwuIhSxzBmzJrKdMfpw60U1XoVn9orquc6MHgNy2%2F%2B1mqtHB3nT8DGc53tBzQ7P5gFHpiIxLiQQJZMTFSL4MO6q2sQGOqUB9ugB8ufVVVZNUO0FrmEj55ST9aPoSg33B058SQzxyXVX1dZumZKE6cLA3NBtsxaqxZEzN3ZRrlGvrNnBuWpp2RX0gmYV6coKsG78cOhFcwMl01X4hqqt9PNw0fnRCbtI5gSXVF7iUx%2Fq5X4N11DmD5kmBxrZ2SD9pkKhaLJ8IR%2BgMq5y4BBo6wy%2Fxtzx4Gmwh8%2BC8OJPB2%2BvG8wl4yVDYdJlaMkA&X-Amz-Signature=e876f89e5d0be1ab1b1041aa692b009628793f59e22efee44091b24d1bc9d486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3VI747%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEaGWDBy07w98IWVTTR3K6JS8eTrimMCrrG8dTASf5L6AiEAyVe703vD5xQvKZ5tD%2Fe3dfDAltXJmUyOuF1s0Uo%2BeHUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6pkQL8LrzgLIWPCyrcA8m40PiIUwpbU7TtLQnpC25dw%2Bvr1HZY2XHHQcqfz63yC%2BjBHludQeJuX3Xcc0lttBYLEp0TQKJacbF1iJVjgBrpwZzrKoSjLFXoPPXzA1TZAizm4qokxXJcFCH7wEjynH9aHWHaX7F0NawSGZUyfEIVj%2BHuLyuvPaoH%2Bf7J60brA9FJUubXv7teHPq3j76dJnTu9Gh1Btw%2BSr2p8F67gt5h%2BL0Qr2dSHCc3BmYfgzSPVWeuxy6oEAj6ljmEoGAiulw%2BlriljHqgk%2Fhbw80PIxcPpDd%2BJBr3MDyScDV25ENTmIkwq6RQ2EtkUFOSUt4dS9XCd9sDAEPnEoyvpbsh%2BjWHeRGyb%2BwzrNQvd%2FLEu6354t0ivEqus77FsNok25YTHygeUlqjdCQWiQYsbU2lihY4NLUx%2F938PXw5lyzLnqydH1w4t%2BF0mvpMY%2Fy%2FcrSO7XNeq2dCA2zxr3v4A%2FTrjqgnTZ8NIOD22hIyCf7%2BHtqpRzENi7nSKHJm2BfNFcFtbZw7ULJlpk4htPbq0nMy%2Br%2F4eO4kqV2Blsz4U8I49AwuIhSxzBmzJrKdMfpw60U1XoVn9orquc6MHgNy2%2F%2B1mqtHB3nT8DGc53tBzQ7P5gFHpiIxLiQQJZMTFSL4MO6q2sQGOqUB9ugB8ufVVVZNUO0FrmEj55ST9aPoSg33B058SQzxyXVX1dZumZKE6cLA3NBtsxaqxZEzN3ZRrlGvrNnBuWpp2RX0gmYV6coKsG78cOhFcwMl01X4hqqt9PNw0fnRCbtI5gSXVF7iUx%2Fq5X4N11DmD5kmBxrZ2SD9pkKhaLJ8IR%2BgMq5y4BBo6wy%2Fxtzx4Gmwh8%2BC8OJPB2%2BvG8wl4yVDYdJlaMkA&X-Amz-Signature=969afe052a924ca3992dbab23dceb8e526f0a67d8823eb22b8e25bbc7da194ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3VI747%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEaGWDBy07w98IWVTTR3K6JS8eTrimMCrrG8dTASf5L6AiEAyVe703vD5xQvKZ5tD%2Fe3dfDAltXJmUyOuF1s0Uo%2BeHUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6pkQL8LrzgLIWPCyrcA8m40PiIUwpbU7TtLQnpC25dw%2Bvr1HZY2XHHQcqfz63yC%2BjBHludQeJuX3Xcc0lttBYLEp0TQKJacbF1iJVjgBrpwZzrKoSjLFXoPPXzA1TZAizm4qokxXJcFCH7wEjynH9aHWHaX7F0NawSGZUyfEIVj%2BHuLyuvPaoH%2Bf7J60brA9FJUubXv7teHPq3j76dJnTu9Gh1Btw%2BSr2p8F67gt5h%2BL0Qr2dSHCc3BmYfgzSPVWeuxy6oEAj6ljmEoGAiulw%2BlriljHqgk%2Fhbw80PIxcPpDd%2BJBr3MDyScDV25ENTmIkwq6RQ2EtkUFOSUt4dS9XCd9sDAEPnEoyvpbsh%2BjWHeRGyb%2BwzrNQvd%2FLEu6354t0ivEqus77FsNok25YTHygeUlqjdCQWiQYsbU2lihY4NLUx%2F938PXw5lyzLnqydH1w4t%2BF0mvpMY%2Fy%2FcrSO7XNeq2dCA2zxr3v4A%2FTrjqgnTZ8NIOD22hIyCf7%2BHtqpRzENi7nSKHJm2BfNFcFtbZw7ULJlpk4htPbq0nMy%2Br%2F4eO4kqV2Blsz4U8I49AwuIhSxzBmzJrKdMfpw60U1XoVn9orquc6MHgNy2%2F%2B1mqtHB3nT8DGc53tBzQ7P5gFHpiIxLiQQJZMTFSL4MO6q2sQGOqUB9ugB8ufVVVZNUO0FrmEj55ST9aPoSg33B058SQzxyXVX1dZumZKE6cLA3NBtsxaqxZEzN3ZRrlGvrNnBuWpp2RX0gmYV6coKsG78cOhFcwMl01X4hqqt9PNw0fnRCbtI5gSXVF7iUx%2Fq5X4N11DmD5kmBxrZ2SD9pkKhaLJ8IR%2BgMq5y4BBo6wy%2Fxtzx4Gmwh8%2BC8OJPB2%2BvG8wl4yVDYdJlaMkA&X-Amz-Signature=0cfb2c5bdce0d7a7abdf333314553964d346553c92cb93d7978d7502959e04e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3VI747%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEaGWDBy07w98IWVTTR3K6JS8eTrimMCrrG8dTASf5L6AiEAyVe703vD5xQvKZ5tD%2Fe3dfDAltXJmUyOuF1s0Uo%2BeHUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6pkQL8LrzgLIWPCyrcA8m40PiIUwpbU7TtLQnpC25dw%2Bvr1HZY2XHHQcqfz63yC%2BjBHludQeJuX3Xcc0lttBYLEp0TQKJacbF1iJVjgBrpwZzrKoSjLFXoPPXzA1TZAizm4qokxXJcFCH7wEjynH9aHWHaX7F0NawSGZUyfEIVj%2BHuLyuvPaoH%2Bf7J60brA9FJUubXv7teHPq3j76dJnTu9Gh1Btw%2BSr2p8F67gt5h%2BL0Qr2dSHCc3BmYfgzSPVWeuxy6oEAj6ljmEoGAiulw%2BlriljHqgk%2Fhbw80PIxcPpDd%2BJBr3MDyScDV25ENTmIkwq6RQ2EtkUFOSUt4dS9XCd9sDAEPnEoyvpbsh%2BjWHeRGyb%2BwzrNQvd%2FLEu6354t0ivEqus77FsNok25YTHygeUlqjdCQWiQYsbU2lihY4NLUx%2F938PXw5lyzLnqydH1w4t%2BF0mvpMY%2Fy%2FcrSO7XNeq2dCA2zxr3v4A%2FTrjqgnTZ8NIOD22hIyCf7%2BHtqpRzENi7nSKHJm2BfNFcFtbZw7ULJlpk4htPbq0nMy%2Br%2F4eO4kqV2Blsz4U8I49AwuIhSxzBmzJrKdMfpw60U1XoVn9orquc6MHgNy2%2F%2B1mqtHB3nT8DGc53tBzQ7P5gFHpiIxLiQQJZMTFSL4MO6q2sQGOqUB9ugB8ufVVVZNUO0FrmEj55ST9aPoSg33B058SQzxyXVX1dZumZKE6cLA3NBtsxaqxZEzN3ZRrlGvrNnBuWpp2RX0gmYV6coKsG78cOhFcwMl01X4hqqt9PNw0fnRCbtI5gSXVF7iUx%2Fq5X4N11DmD5kmBxrZ2SD9pkKhaLJ8IR%2BgMq5y4BBo6wy%2Fxtzx4Gmwh8%2BC8OJPB2%2BvG8wl4yVDYdJlaMkA&X-Amz-Signature=1ba3ace4a3f952020a9ad7a4be7d8e4e22e4a2c0a6f0746b7387a4a2ae1a5b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3VI747%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEaGWDBy07w98IWVTTR3K6JS8eTrimMCrrG8dTASf5L6AiEAyVe703vD5xQvKZ5tD%2Fe3dfDAltXJmUyOuF1s0Uo%2BeHUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6pkQL8LrzgLIWPCyrcA8m40PiIUwpbU7TtLQnpC25dw%2Bvr1HZY2XHHQcqfz63yC%2BjBHludQeJuX3Xcc0lttBYLEp0TQKJacbF1iJVjgBrpwZzrKoSjLFXoPPXzA1TZAizm4qokxXJcFCH7wEjynH9aHWHaX7F0NawSGZUyfEIVj%2BHuLyuvPaoH%2Bf7J60brA9FJUubXv7teHPq3j76dJnTu9Gh1Btw%2BSr2p8F67gt5h%2BL0Qr2dSHCc3BmYfgzSPVWeuxy6oEAj6ljmEoGAiulw%2BlriljHqgk%2Fhbw80PIxcPpDd%2BJBr3MDyScDV25ENTmIkwq6RQ2EtkUFOSUt4dS9XCd9sDAEPnEoyvpbsh%2BjWHeRGyb%2BwzrNQvd%2FLEu6354t0ivEqus77FsNok25YTHygeUlqjdCQWiQYsbU2lihY4NLUx%2F938PXw5lyzLnqydH1w4t%2BF0mvpMY%2Fy%2FcrSO7XNeq2dCA2zxr3v4A%2FTrjqgnTZ8NIOD22hIyCf7%2BHtqpRzENi7nSKHJm2BfNFcFtbZw7ULJlpk4htPbq0nMy%2Br%2F4eO4kqV2Blsz4U8I49AwuIhSxzBmzJrKdMfpw60U1XoVn9orquc6MHgNy2%2F%2B1mqtHB3nT8DGc53tBzQ7P5gFHpiIxLiQQJZMTFSL4MO6q2sQGOqUB9ugB8ufVVVZNUO0FrmEj55ST9aPoSg33B058SQzxyXVX1dZumZKE6cLA3NBtsxaqxZEzN3ZRrlGvrNnBuWpp2RX0gmYV6coKsG78cOhFcwMl01X4hqqt9PNw0fnRCbtI5gSXVF7iUx%2Fq5X4N11DmD5kmBxrZ2SD9pkKhaLJ8IR%2BgMq5y4BBo6wy%2Fxtzx4Gmwh8%2BC8OJPB2%2BvG8wl4yVDYdJlaMkA&X-Amz-Signature=45e0f3e1f5f786066c9d533073325175fcca7a6b5b2a610326856a68e9c1ac62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3VI747%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEaGWDBy07w98IWVTTR3K6JS8eTrimMCrrG8dTASf5L6AiEAyVe703vD5xQvKZ5tD%2Fe3dfDAltXJmUyOuF1s0Uo%2BeHUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6pkQL8LrzgLIWPCyrcA8m40PiIUwpbU7TtLQnpC25dw%2Bvr1HZY2XHHQcqfz63yC%2BjBHludQeJuX3Xcc0lttBYLEp0TQKJacbF1iJVjgBrpwZzrKoSjLFXoPPXzA1TZAizm4qokxXJcFCH7wEjynH9aHWHaX7F0NawSGZUyfEIVj%2BHuLyuvPaoH%2Bf7J60brA9FJUubXv7teHPq3j76dJnTu9Gh1Btw%2BSr2p8F67gt5h%2BL0Qr2dSHCc3BmYfgzSPVWeuxy6oEAj6ljmEoGAiulw%2BlriljHqgk%2Fhbw80PIxcPpDd%2BJBr3MDyScDV25ENTmIkwq6RQ2EtkUFOSUt4dS9XCd9sDAEPnEoyvpbsh%2BjWHeRGyb%2BwzrNQvd%2FLEu6354t0ivEqus77FsNok25YTHygeUlqjdCQWiQYsbU2lihY4NLUx%2F938PXw5lyzLnqydH1w4t%2BF0mvpMY%2Fy%2FcrSO7XNeq2dCA2zxr3v4A%2FTrjqgnTZ8NIOD22hIyCf7%2BHtqpRzENi7nSKHJm2BfNFcFtbZw7ULJlpk4htPbq0nMy%2Br%2F4eO4kqV2Blsz4U8I49AwuIhSxzBmzJrKdMfpw60U1XoVn9orquc6MHgNy2%2F%2B1mqtHB3nT8DGc53tBzQ7P5gFHpiIxLiQQJZMTFSL4MO6q2sQGOqUB9ugB8ufVVVZNUO0FrmEj55ST9aPoSg33B058SQzxyXVX1dZumZKE6cLA3NBtsxaqxZEzN3ZRrlGvrNnBuWpp2RX0gmYV6coKsG78cOhFcwMl01X4hqqt9PNw0fnRCbtI5gSXVF7iUx%2Fq5X4N11DmD5kmBxrZ2SD9pkKhaLJ8IR%2BgMq5y4BBo6wy%2Fxtzx4Gmwh8%2BC8OJPB2%2BvG8wl4yVDYdJlaMkA&X-Amz-Signature=c6d1812fcfe05340ae9041a1ee18714c03b14ff83de1119226d77455be610b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3VI747%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEaGWDBy07w98IWVTTR3K6JS8eTrimMCrrG8dTASf5L6AiEAyVe703vD5xQvKZ5tD%2Fe3dfDAltXJmUyOuF1s0Uo%2BeHUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6pkQL8LrzgLIWPCyrcA8m40PiIUwpbU7TtLQnpC25dw%2Bvr1HZY2XHHQcqfz63yC%2BjBHludQeJuX3Xcc0lttBYLEp0TQKJacbF1iJVjgBrpwZzrKoSjLFXoPPXzA1TZAizm4qokxXJcFCH7wEjynH9aHWHaX7F0NawSGZUyfEIVj%2BHuLyuvPaoH%2Bf7J60brA9FJUubXv7teHPq3j76dJnTu9Gh1Btw%2BSr2p8F67gt5h%2BL0Qr2dSHCc3BmYfgzSPVWeuxy6oEAj6ljmEoGAiulw%2BlriljHqgk%2Fhbw80PIxcPpDd%2BJBr3MDyScDV25ENTmIkwq6RQ2EtkUFOSUt4dS9XCd9sDAEPnEoyvpbsh%2BjWHeRGyb%2BwzrNQvd%2FLEu6354t0ivEqus77FsNok25YTHygeUlqjdCQWiQYsbU2lihY4NLUx%2F938PXw5lyzLnqydH1w4t%2BF0mvpMY%2Fy%2FcrSO7XNeq2dCA2zxr3v4A%2FTrjqgnTZ8NIOD22hIyCf7%2BHtqpRzENi7nSKHJm2BfNFcFtbZw7ULJlpk4htPbq0nMy%2Br%2F4eO4kqV2Blsz4U8I49AwuIhSxzBmzJrKdMfpw60U1XoVn9orquc6MHgNy2%2F%2B1mqtHB3nT8DGc53tBzQ7P5gFHpiIxLiQQJZMTFSL4MO6q2sQGOqUB9ugB8ufVVVZNUO0FrmEj55ST9aPoSg33B058SQzxyXVX1dZumZKE6cLA3NBtsxaqxZEzN3ZRrlGvrNnBuWpp2RX0gmYV6coKsG78cOhFcwMl01X4hqqt9PNw0fnRCbtI5gSXVF7iUx%2Fq5X4N11DmD5kmBxrZ2SD9pkKhaLJ8IR%2BgMq5y4BBo6wy%2Fxtzx4Gmwh8%2BC8OJPB2%2BvG8wl4yVDYdJlaMkA&X-Amz-Signature=4d08ce6f03462a0a86b2766b675c12827cc091232ca77c53a18ee6bf45dcf107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV3VI747%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEaGWDBy07w98IWVTTR3K6JS8eTrimMCrrG8dTASf5L6AiEAyVe703vD5xQvKZ5tD%2Fe3dfDAltXJmUyOuF1s0Uo%2BeHUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6pkQL8LrzgLIWPCyrcA8m40PiIUwpbU7TtLQnpC25dw%2Bvr1HZY2XHHQcqfz63yC%2BjBHludQeJuX3Xcc0lttBYLEp0TQKJacbF1iJVjgBrpwZzrKoSjLFXoPPXzA1TZAizm4qokxXJcFCH7wEjynH9aHWHaX7F0NawSGZUyfEIVj%2BHuLyuvPaoH%2Bf7J60brA9FJUubXv7teHPq3j76dJnTu9Gh1Btw%2BSr2p8F67gt5h%2BL0Qr2dSHCc3BmYfgzSPVWeuxy6oEAj6ljmEoGAiulw%2BlriljHqgk%2Fhbw80PIxcPpDd%2BJBr3MDyScDV25ENTmIkwq6RQ2EtkUFOSUt4dS9XCd9sDAEPnEoyvpbsh%2BjWHeRGyb%2BwzrNQvd%2FLEu6354t0ivEqus77FsNok25YTHygeUlqjdCQWiQYsbU2lihY4NLUx%2F938PXw5lyzLnqydH1w4t%2BF0mvpMY%2Fy%2FcrSO7XNeq2dCA2zxr3v4A%2FTrjqgnTZ8NIOD22hIyCf7%2BHtqpRzENi7nSKHJm2BfNFcFtbZw7ULJlpk4htPbq0nMy%2Br%2F4eO4kqV2Blsz4U8I49AwuIhSxzBmzJrKdMfpw60U1XoVn9orquc6MHgNy2%2F%2B1mqtHB3nT8DGc53tBzQ7P5gFHpiIxLiQQJZMTFSL4MO6q2sQGOqUB9ugB8ufVVVZNUO0FrmEj55ST9aPoSg33B058SQzxyXVX1dZumZKE6cLA3NBtsxaqxZEzN3ZRrlGvrNnBuWpp2RX0gmYV6coKsG78cOhFcwMl01X4hqqt9PNw0fnRCbtI5gSXVF7iUx%2Fq5X4N11DmD5kmBxrZ2SD9pkKhaLJ8IR%2BgMq5y4BBo6wy%2Fxtzx4Gmwh8%2BC8OJPB2%2BvG8wl4yVDYdJlaMkA&X-Amz-Signature=847a802c444d43602ab1241d5454045dc8b4a563ad0433324a56060a23a7a711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXIIIPE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCZyElhwVwXHlOwaKEf2dxN%2FQXmEkgAArqAj%2B5OmK%2B4AgIgI%2Fh0O%2FNjcMtiexKmYSNVk%2BQqvwOdFSXvNuGem%2FF3GD0qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF78poZVySaKcYs5tyrcA5aWC86wTrmzbKIDcDsUbaOhui5GRAC2dvt%2FbV8uExX58tvfOqyLyWMgc6f0RSolZowHmZg31TS8gDIKIHBrYlQ5IUVz7OHWlsVEv3mFO6tRZcfHMBfZ5Yvu11oavJ21j37qoMsEC%2BUU6wKLbVBLbZSWgXOp0AanoEN6r%2BPjPz9eBH6od%2BmvsdD3pL8wC9Ay0ols1z4PAU%2BIFAwYQ7qqGlDE1I8oZwvmbHgvG0m98%2F3TQoYyvWL7pm6DU6Fue7JiamC%2F7LkXgNeBe36lwSS0BKoCwHcBFFuCREJ%2FjWEEyPKOaURDl6CVtaJFkrz6PaC%2FZSbmvYIuvlXcYdfT98sLgW3KABpEKSvwHyUMOZfNx%2F9gE7l3fK4PtD9l2y6lJk5%2F%2FbBbvsY%2F%2BYcCzmMYAtRge6cx6IUhAT%2FbYpRTup8Q7TtlFEiUl0PUwvJBLk8hPUqas%2F3MeMOb1E37w4aI3WhvU2exV3TfUb0%2Fbn5jrHAzqRtvJCb%2B%2BG3oIA936suBEUFCsvjNch0iQiI%2BM20584kyp%2B5sfUsb7YW2BH3rZ7RL%2BPQ3icffrNlB%2F%2FgGlI421sbJ1o9bBcv%2FHJMqNDsFEB%2BJ8XCgamH8vsZaA2JdmLGXIGxnHA8vAZlqIbfad4fqMKar2sQGOqUBBJsUSJe%2FtPsnZ6R6o1oSziaQEYQrRMxHRq%2FqkilRrVz0ACcpZ0sDegI8%2FSeVX9%2F%2FAAz8DwICiy9leXHqRbv%2FTl6YjisceGM1M9NOf%2FWCsWbAhnY%2F%2FH83F7Ce7gtqiS7PXTgEpcXqi6niHvbwdrM%2FzH67q7g81%2FSt4r2vpw4Vzcg5nXiPS47G3SpPB40IkztcBZ53yLeVIKkaarecNHH1tztQqAx4&X-Amz-Signature=2b5df688741423d86b31410adfbd56051f3c3f4c7001bc97ea117ffbbf8f8151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JQWBMA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5vEW%2FqiL6c0tsNrL%2BJkwvll4iQc15L%2BiavStCXaS0QgIgd%2BJGOzOZKV0jkKRGt8vw9ja9awZecZh8g88CSsabM3wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpdoc5NVNFvOB1YyrcA%2BEEw%2F4Mbysuj4PVRLdTq%2BcU23QAGyWkpV26HwexGJ8LNQrxIlOO6%2Fl0kLZw7Fv7no2fkRW6AfiHJ%2FA8RoVwrsBtiqjcS6kBvE2BG7SeFwds8I3N9K9S5OyS%2F7maACL9gPXHaAcgDPlUj8N6mHeOQHfZdccLvse0RocK8uwkYGPKx5SwNAuAmpAaKUZyb6FGE8DUqbNt7BfPgWq9HJLNIYCsIW3CpW2OsfH1NaK%2F64mHwQlHXcSH%2FzO%2BsNIYyr3hgl8DIUP1SdaMxlq5nmADsdSvNyyoh20SWAgk8K2fBqe0Yvzlw6OaScqxe3B276iA1lkIOFq3raell1sXpm%2Boro4UQjXKurUTUSZ%2FzYZkoKDT79QpVVeo5ZLqaVloVvp2a3i6dArmOBfAgefGQKyPslIc0nlslIz8pFtJfrjFJRFlmfxi2dRJ%2FCRObeqwVqWpYgs0wP%2Fep2G%2F0xHkmx3WKz%2Fbpcb5KTnCZHASKfBKomB5hZbM1ceScf53itATdTKrEiZaWn7puQwtku24Pi9UzjJhjT%2BPMSN%2Fk%2Bme9ZBIQqai04Mm8m8KlqCslEoBN%2BVLqG2cS8%2F8BugiJGesQSijFJBxdubXYwfRvXChEMW3ZOoayetcVAcMxaaJ0KGDMK6r2sQGOqUBNDzFtjZEaLOqfWOQ2M8%2FN%2BkartyVFGgSX7Yb8ye6Y08qrXy2lpe1u9X1Do9bSIrhZdtbAnQCCR0F4RY%2BJuYWUQCgl%2FbCr4iysISPc6xXA2eufAXuMz7oaPDsJERcz2wmTr0ovVmhcbgTLasAGxsl0BD7RSpZ%2BGvraHcz8wcfbCFm05uSJ%2FFDcxPG0kGzzvh5Wh%2FjIHHI2MIXgyJhWsUdWUUxFqDb&X-Amz-Signature=f1881bef8bdf693c9dc15d25c46f57b912e6ee144f3c19e9a3cfd94da0bab40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JQWBMA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5vEW%2FqiL6c0tsNrL%2BJkwvll4iQc15L%2BiavStCXaS0QgIgd%2BJGOzOZKV0jkKRGt8vw9ja9awZecZh8g88CSsabM3wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpdoc5NVNFvOB1YyrcA%2BEEw%2F4Mbysuj4PVRLdTq%2BcU23QAGyWkpV26HwexGJ8LNQrxIlOO6%2Fl0kLZw7Fv7no2fkRW6AfiHJ%2FA8RoVwrsBtiqjcS6kBvE2BG7SeFwds8I3N9K9S5OyS%2F7maACL9gPXHaAcgDPlUj8N6mHeOQHfZdccLvse0RocK8uwkYGPKx5SwNAuAmpAaKUZyb6FGE8DUqbNt7BfPgWq9HJLNIYCsIW3CpW2OsfH1NaK%2F64mHwQlHXcSH%2FzO%2BsNIYyr3hgl8DIUP1SdaMxlq5nmADsdSvNyyoh20SWAgk8K2fBqe0Yvzlw6OaScqxe3B276iA1lkIOFq3raell1sXpm%2Boro4UQjXKurUTUSZ%2FzYZkoKDT79QpVVeo5ZLqaVloVvp2a3i6dArmOBfAgefGQKyPslIc0nlslIz8pFtJfrjFJRFlmfxi2dRJ%2FCRObeqwVqWpYgs0wP%2Fep2G%2F0xHkmx3WKz%2Fbpcb5KTnCZHASKfBKomB5hZbM1ceScf53itATdTKrEiZaWn7puQwtku24Pi9UzjJhjT%2BPMSN%2Fk%2Bme9ZBIQqai04Mm8m8KlqCslEoBN%2BVLqG2cS8%2F8BugiJGesQSijFJBxdubXYwfRvXChEMW3ZOoayetcVAcMxaaJ0KGDMK6r2sQGOqUBNDzFtjZEaLOqfWOQ2M8%2FN%2BkartyVFGgSX7Yb8ye6Y08qrXy2lpe1u9X1Do9bSIrhZdtbAnQCCR0F4RY%2BJuYWUQCgl%2FbCr4iysISPc6xXA2eufAXuMz7oaPDsJERcz2wmTr0ovVmhcbgTLasAGxsl0BD7RSpZ%2BGvraHcz8wcfbCFm05uSJ%2FFDcxPG0kGzzvh5Wh%2FjIHHI2MIXgyJhWsUdWUUxFqDb&X-Amz-Signature=12d6375bfc7bb74ca2e622553de7d4d2ea8eb3d657b9a655b6fc09e585644160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JQWBMA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5vEW%2FqiL6c0tsNrL%2BJkwvll4iQc15L%2BiavStCXaS0QgIgd%2BJGOzOZKV0jkKRGt8vw9ja9awZecZh8g88CSsabM3wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpdoc5NVNFvOB1YyrcA%2BEEw%2F4Mbysuj4PVRLdTq%2BcU23QAGyWkpV26HwexGJ8LNQrxIlOO6%2Fl0kLZw7Fv7no2fkRW6AfiHJ%2FA8RoVwrsBtiqjcS6kBvE2BG7SeFwds8I3N9K9S5OyS%2F7maACL9gPXHaAcgDPlUj8N6mHeOQHfZdccLvse0RocK8uwkYGPKx5SwNAuAmpAaKUZyb6FGE8DUqbNt7BfPgWq9HJLNIYCsIW3CpW2OsfH1NaK%2F64mHwQlHXcSH%2FzO%2BsNIYyr3hgl8DIUP1SdaMxlq5nmADsdSvNyyoh20SWAgk8K2fBqe0Yvzlw6OaScqxe3B276iA1lkIOFq3raell1sXpm%2Boro4UQjXKurUTUSZ%2FzYZkoKDT79QpVVeo5ZLqaVloVvp2a3i6dArmOBfAgefGQKyPslIc0nlslIz8pFtJfrjFJRFlmfxi2dRJ%2FCRObeqwVqWpYgs0wP%2Fep2G%2F0xHkmx3WKz%2Fbpcb5KTnCZHASKfBKomB5hZbM1ceScf53itATdTKrEiZaWn7puQwtku24Pi9UzjJhjT%2BPMSN%2Fk%2Bme9ZBIQqai04Mm8m8KlqCslEoBN%2BVLqG2cS8%2F8BugiJGesQSijFJBxdubXYwfRvXChEMW3ZOoayetcVAcMxaaJ0KGDMK6r2sQGOqUBNDzFtjZEaLOqfWOQ2M8%2FN%2BkartyVFGgSX7Yb8ye6Y08qrXy2lpe1u9X1Do9bSIrhZdtbAnQCCR0F4RY%2BJuYWUQCgl%2FbCr4iysISPc6xXA2eufAXuMz7oaPDsJERcz2wmTr0ovVmhcbgTLasAGxsl0BD7RSpZ%2BGvraHcz8wcfbCFm05uSJ%2FFDcxPG0kGzzvh5Wh%2FjIHHI2MIXgyJhWsUdWUUxFqDb&X-Amz-Signature=1dd80234ea52b535344e184d8d30ed6144d628b8fd80d1f834931d0b55cd6f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JQWBMA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5vEW%2FqiL6c0tsNrL%2BJkwvll4iQc15L%2BiavStCXaS0QgIgd%2BJGOzOZKV0jkKRGt8vw9ja9awZecZh8g88CSsabM3wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpdoc5NVNFvOB1YyrcA%2BEEw%2F4Mbysuj4PVRLdTq%2BcU23QAGyWkpV26HwexGJ8LNQrxIlOO6%2Fl0kLZw7Fv7no2fkRW6AfiHJ%2FA8RoVwrsBtiqjcS6kBvE2BG7SeFwds8I3N9K9S5OyS%2F7maACL9gPXHaAcgDPlUj8N6mHeOQHfZdccLvse0RocK8uwkYGPKx5SwNAuAmpAaKUZyb6FGE8DUqbNt7BfPgWq9HJLNIYCsIW3CpW2OsfH1NaK%2F64mHwQlHXcSH%2FzO%2BsNIYyr3hgl8DIUP1SdaMxlq5nmADsdSvNyyoh20SWAgk8K2fBqe0Yvzlw6OaScqxe3B276iA1lkIOFq3raell1sXpm%2Boro4UQjXKurUTUSZ%2FzYZkoKDT79QpVVeo5ZLqaVloVvp2a3i6dArmOBfAgefGQKyPslIc0nlslIz8pFtJfrjFJRFlmfxi2dRJ%2FCRObeqwVqWpYgs0wP%2Fep2G%2F0xHkmx3WKz%2Fbpcb5KTnCZHASKfBKomB5hZbM1ceScf53itATdTKrEiZaWn7puQwtku24Pi9UzjJhjT%2BPMSN%2Fk%2Bme9ZBIQqai04Mm8m8KlqCslEoBN%2BVLqG2cS8%2F8BugiJGesQSijFJBxdubXYwfRvXChEMW3ZOoayetcVAcMxaaJ0KGDMK6r2sQGOqUBNDzFtjZEaLOqfWOQ2M8%2FN%2BkartyVFGgSX7Yb8ye6Y08qrXy2lpe1u9X1Do9bSIrhZdtbAnQCCR0F4RY%2BJuYWUQCgl%2FbCr4iysISPc6xXA2eufAXuMz7oaPDsJERcz2wmTr0ovVmhcbgTLasAGxsl0BD7RSpZ%2BGvraHcz8wcfbCFm05uSJ%2FFDcxPG0kGzzvh5Wh%2FjIHHI2MIXgyJhWsUdWUUxFqDb&X-Amz-Signature=4b1c0adf2a32736c07200ceece8c6006171755dbfc9fc6294a69df7e50304e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JQWBMA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5vEW%2FqiL6c0tsNrL%2BJkwvll4iQc15L%2BiavStCXaS0QgIgd%2BJGOzOZKV0jkKRGt8vw9ja9awZecZh8g88CSsabM3wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpdoc5NVNFvOB1YyrcA%2BEEw%2F4Mbysuj4PVRLdTq%2BcU23QAGyWkpV26HwexGJ8LNQrxIlOO6%2Fl0kLZw7Fv7no2fkRW6AfiHJ%2FA8RoVwrsBtiqjcS6kBvE2BG7SeFwds8I3N9K9S5OyS%2F7maACL9gPXHaAcgDPlUj8N6mHeOQHfZdccLvse0RocK8uwkYGPKx5SwNAuAmpAaKUZyb6FGE8DUqbNt7BfPgWq9HJLNIYCsIW3CpW2OsfH1NaK%2F64mHwQlHXcSH%2FzO%2BsNIYyr3hgl8DIUP1SdaMxlq5nmADsdSvNyyoh20SWAgk8K2fBqe0Yvzlw6OaScqxe3B276iA1lkIOFq3raell1sXpm%2Boro4UQjXKurUTUSZ%2FzYZkoKDT79QpVVeo5ZLqaVloVvp2a3i6dArmOBfAgefGQKyPslIc0nlslIz8pFtJfrjFJRFlmfxi2dRJ%2FCRObeqwVqWpYgs0wP%2Fep2G%2F0xHkmx3WKz%2Fbpcb5KTnCZHASKfBKomB5hZbM1ceScf53itATdTKrEiZaWn7puQwtku24Pi9UzjJhjT%2BPMSN%2Fk%2Bme9ZBIQqai04Mm8m8KlqCslEoBN%2BVLqG2cS8%2F8BugiJGesQSijFJBxdubXYwfRvXChEMW3ZOoayetcVAcMxaaJ0KGDMK6r2sQGOqUBNDzFtjZEaLOqfWOQ2M8%2FN%2BkartyVFGgSX7Yb8ye6Y08qrXy2lpe1u9X1Do9bSIrhZdtbAnQCCR0F4RY%2BJuYWUQCgl%2FbCr4iysISPc6xXA2eufAXuMz7oaPDsJERcz2wmTr0ovVmhcbgTLasAGxsl0BD7RSpZ%2BGvraHcz8wcfbCFm05uSJ%2FFDcxPG0kGzzvh5Wh%2FjIHHI2MIXgyJhWsUdWUUxFqDb&X-Amz-Signature=c43cc015aa9ba68824ba5f3641e0583f7858db43d848e993fffca7c4fdfe6b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JQWBMA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5vEW%2FqiL6c0tsNrL%2BJkwvll4iQc15L%2BiavStCXaS0QgIgd%2BJGOzOZKV0jkKRGt8vw9ja9awZecZh8g88CSsabM3wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpdoc5NVNFvOB1YyrcA%2BEEw%2F4Mbysuj4PVRLdTq%2BcU23QAGyWkpV26HwexGJ8LNQrxIlOO6%2Fl0kLZw7Fv7no2fkRW6AfiHJ%2FA8RoVwrsBtiqjcS6kBvE2BG7SeFwds8I3N9K9S5OyS%2F7maACL9gPXHaAcgDPlUj8N6mHeOQHfZdccLvse0RocK8uwkYGPKx5SwNAuAmpAaKUZyb6FGE8DUqbNt7BfPgWq9HJLNIYCsIW3CpW2OsfH1NaK%2F64mHwQlHXcSH%2FzO%2BsNIYyr3hgl8DIUP1SdaMxlq5nmADsdSvNyyoh20SWAgk8K2fBqe0Yvzlw6OaScqxe3B276iA1lkIOFq3raell1sXpm%2Boro4UQjXKurUTUSZ%2FzYZkoKDT79QpVVeo5ZLqaVloVvp2a3i6dArmOBfAgefGQKyPslIc0nlslIz8pFtJfrjFJRFlmfxi2dRJ%2FCRObeqwVqWpYgs0wP%2Fep2G%2F0xHkmx3WKz%2Fbpcb5KTnCZHASKfBKomB5hZbM1ceScf53itATdTKrEiZaWn7puQwtku24Pi9UzjJhjT%2BPMSN%2Fk%2Bme9ZBIQqai04Mm8m8KlqCslEoBN%2BVLqG2cS8%2F8BugiJGesQSijFJBxdubXYwfRvXChEMW3ZOoayetcVAcMxaaJ0KGDMK6r2sQGOqUBNDzFtjZEaLOqfWOQ2M8%2FN%2BkartyVFGgSX7Yb8ye6Y08qrXy2lpe1u9X1Do9bSIrhZdtbAnQCCR0F4RY%2BJuYWUQCgl%2FbCr4iysISPc6xXA2eufAXuMz7oaPDsJERcz2wmTr0ovVmhcbgTLasAGxsl0BD7RSpZ%2BGvraHcz8wcfbCFm05uSJ%2FFDcxPG0kGzzvh5Wh%2FjIHHI2MIXgyJhWsUdWUUxFqDb&X-Amz-Signature=e56bc385705a745f320d1d1b18505edbc2956de62b9a4ca295416241be6aef3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JQWBMA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5vEW%2FqiL6c0tsNrL%2BJkwvll4iQc15L%2BiavStCXaS0QgIgd%2BJGOzOZKV0jkKRGt8vw9ja9awZecZh8g88CSsabM3wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpdoc5NVNFvOB1YyrcA%2BEEw%2F4Mbysuj4PVRLdTq%2BcU23QAGyWkpV26HwexGJ8LNQrxIlOO6%2Fl0kLZw7Fv7no2fkRW6AfiHJ%2FA8RoVwrsBtiqjcS6kBvE2BG7SeFwds8I3N9K9S5OyS%2F7maACL9gPXHaAcgDPlUj8N6mHeOQHfZdccLvse0RocK8uwkYGPKx5SwNAuAmpAaKUZyb6FGE8DUqbNt7BfPgWq9HJLNIYCsIW3CpW2OsfH1NaK%2F64mHwQlHXcSH%2FzO%2BsNIYyr3hgl8DIUP1SdaMxlq5nmADsdSvNyyoh20SWAgk8K2fBqe0Yvzlw6OaScqxe3B276iA1lkIOFq3raell1sXpm%2Boro4UQjXKurUTUSZ%2FzYZkoKDT79QpVVeo5ZLqaVloVvp2a3i6dArmOBfAgefGQKyPslIc0nlslIz8pFtJfrjFJRFlmfxi2dRJ%2FCRObeqwVqWpYgs0wP%2Fep2G%2F0xHkmx3WKz%2Fbpcb5KTnCZHASKfBKomB5hZbM1ceScf53itATdTKrEiZaWn7puQwtku24Pi9UzjJhjT%2BPMSN%2Fk%2Bme9ZBIQqai04Mm8m8KlqCslEoBN%2BVLqG2cS8%2F8BugiJGesQSijFJBxdubXYwfRvXChEMW3ZOoayetcVAcMxaaJ0KGDMK6r2sQGOqUBNDzFtjZEaLOqfWOQ2M8%2FN%2BkartyVFGgSX7Yb8ye6Y08qrXy2lpe1u9X1Do9bSIrhZdtbAnQCCR0F4RY%2BJuYWUQCgl%2FbCr4iysISPc6xXA2eufAXuMz7oaPDsJERcz2wmTr0ovVmhcbgTLasAGxsl0BD7RSpZ%2BGvraHcz8wcfbCFm05uSJ%2FFDcxPG0kGzzvh5Wh%2FjIHHI2MIXgyJhWsUdWUUxFqDb&X-Amz-Signature=05b50a38905d78cb0831f0f65820098c7a456eee6e31c6dbe77b01daab3e1a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JQWBMA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5vEW%2FqiL6c0tsNrL%2BJkwvll4iQc15L%2BiavStCXaS0QgIgd%2BJGOzOZKV0jkKRGt8vw9ja9awZecZh8g88CSsabM3wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpdoc5NVNFvOB1YyrcA%2BEEw%2F4Mbysuj4PVRLdTq%2BcU23QAGyWkpV26HwexGJ8LNQrxIlOO6%2Fl0kLZw7Fv7no2fkRW6AfiHJ%2FA8RoVwrsBtiqjcS6kBvE2BG7SeFwds8I3N9K9S5OyS%2F7maACL9gPXHaAcgDPlUj8N6mHeOQHfZdccLvse0RocK8uwkYGPKx5SwNAuAmpAaKUZyb6FGE8DUqbNt7BfPgWq9HJLNIYCsIW3CpW2OsfH1NaK%2F64mHwQlHXcSH%2FzO%2BsNIYyr3hgl8DIUP1SdaMxlq5nmADsdSvNyyoh20SWAgk8K2fBqe0Yvzlw6OaScqxe3B276iA1lkIOFq3raell1sXpm%2Boro4UQjXKurUTUSZ%2FzYZkoKDT79QpVVeo5ZLqaVloVvp2a3i6dArmOBfAgefGQKyPslIc0nlslIz8pFtJfrjFJRFlmfxi2dRJ%2FCRObeqwVqWpYgs0wP%2Fep2G%2F0xHkmx3WKz%2Fbpcb5KTnCZHASKfBKomB5hZbM1ceScf53itATdTKrEiZaWn7puQwtku24Pi9UzjJhjT%2BPMSN%2Fk%2Bme9ZBIQqai04Mm8m8KlqCslEoBN%2BVLqG2cS8%2F8BugiJGesQSijFJBxdubXYwfRvXChEMW3ZOoayetcVAcMxaaJ0KGDMK6r2sQGOqUBNDzFtjZEaLOqfWOQ2M8%2FN%2BkartyVFGgSX7Yb8ye6Y08qrXy2lpe1u9X1Do9bSIrhZdtbAnQCCR0F4RY%2BJuYWUQCgl%2FbCr4iysISPc6xXA2eufAXuMz7oaPDsJERcz2wmTr0ovVmhcbgTLasAGxsl0BD7RSpZ%2BGvraHcz8wcfbCFm05uSJ%2FFDcxPG0kGzzvh5Wh%2FjIHHI2MIXgyJhWsUdWUUxFqDb&X-Amz-Signature=f39976dd025e83217392f37109f0ffc3cb067ce0d18b3012fdf9b00bdaa93339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JQWBMA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC5vEW%2FqiL6c0tsNrL%2BJkwvll4iQc15L%2BiavStCXaS0QgIgd%2BJGOzOZKV0jkKRGt8vw9ja9awZecZh8g88CSsabM3wqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpdoc5NVNFvOB1YyrcA%2BEEw%2F4Mbysuj4PVRLdTq%2BcU23QAGyWkpV26HwexGJ8LNQrxIlOO6%2Fl0kLZw7Fv7no2fkRW6AfiHJ%2FA8RoVwrsBtiqjcS6kBvE2BG7SeFwds8I3N9K9S5OyS%2F7maACL9gPXHaAcgDPlUj8N6mHeOQHfZdccLvse0RocK8uwkYGPKx5SwNAuAmpAaKUZyb6FGE8DUqbNt7BfPgWq9HJLNIYCsIW3CpW2OsfH1NaK%2F64mHwQlHXcSH%2FzO%2BsNIYyr3hgl8DIUP1SdaMxlq5nmADsdSvNyyoh20SWAgk8K2fBqe0Yvzlw6OaScqxe3B276iA1lkIOFq3raell1sXpm%2Boro4UQjXKurUTUSZ%2FzYZkoKDT79QpVVeo5ZLqaVloVvp2a3i6dArmOBfAgefGQKyPslIc0nlslIz8pFtJfrjFJRFlmfxi2dRJ%2FCRObeqwVqWpYgs0wP%2Fep2G%2F0xHkmx3WKz%2Fbpcb5KTnCZHASKfBKomB5hZbM1ceScf53itATdTKrEiZaWn7puQwtku24Pi9UzjJhjT%2BPMSN%2Fk%2Bme9ZBIQqai04Mm8m8KlqCslEoBN%2BVLqG2cS8%2F8BugiJGesQSijFJBxdubXYwfRvXChEMW3ZOoayetcVAcMxaaJ0KGDMK6r2sQGOqUBNDzFtjZEaLOqfWOQ2M8%2FN%2BkartyVFGgSX7Yb8ye6Y08qrXy2lpe1u9X1Do9bSIrhZdtbAnQCCR0F4RY%2BJuYWUQCgl%2FbCr4iysISPc6xXA2eufAXuMz7oaPDsJERcz2wmTr0ovVmhcbgTLasAGxsl0BD7RSpZ%2BGvraHcz8wcfbCFm05uSJ%2FFDcxPG0kGzzvh5Wh%2FjIHHI2MIXgyJhWsUdWUUxFqDb&X-Amz-Signature=3da9229a18ff61797280f920e4d3d88c0a033b1b0536c7af6942d2a79e4201ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
