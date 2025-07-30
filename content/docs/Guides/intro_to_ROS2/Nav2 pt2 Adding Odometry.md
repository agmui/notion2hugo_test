---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURI46YM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsJ9aP6Fy0finNl6XYfv%2F8zMaTCmjvBezk6lYF1Fw%2FwAiEA%2BNitNhKVouEDDypVvffWbmppKOP1%2BZ9KN8Eb19VDTs8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzDXp%2BT5XcQ17ZLgSrcA0OPqW%2FeLhQdubjWug3o935I%2BeW3oIOD0IcOB4PImtKVobw%2F2LBJd0UvtoMKgi%2BLp5HJOs1DSynHA8FufTl5gD0bb1NPv1wnpK2F6XXdjF7PzlDEjnieNFEpS0A%2FtmSw2tQpDWOOvvKnOOI7bihvfXZFTNeXAh9lMk%2BYxB%2FP6CZIQYLhP4TJt8FbD9pMK8eWxj%2F5vJZwNqNIj5Ocz5w0hOy0lBbVNtv8L2kcz2GBhAUCW%2Fn3lpsAC6CH1I%2BjMeEWYAX8bJVoNuDDoTGStD6p%2FSDDaNmvqZKYXDMMN9pOpgX9ZmY0CxesIMiBKOVnjkd4Z0u8tddnEROni50CwUicFqdawZIbYgSmaSaZMVkTmHXNVFNkFu2UU7xfCLBK77dG3goR7HA2pBThDB5MVufGoz2rOzJesDoymPCMdsI1Kk5ooKhQLpUxSBJ%2Fgssza%2Fzpfq%2BeBrCuBPVEI0yzyAFjbXgzbjI1EcRuXReWYz1bqn%2FkzWlmC7AqsqJDOsNBT%2BvhlzyZiuTBDO8BoF0Sk1BE65J%2F%2BT1lWGhSVCIa3khlCcZnsb4u77ofBaclkpSDrMhG4Fs2Q5daXapO5P7KZzseiLKR98TSUFXfN%2Bjkn6zeq3NKmjR4i%2Bd70HdaxcOlMNuMp8QGOqUBnmC1gHW9A8PvZZIZnLP9J2cBZb%2FKi8Xdek4aflQSrN79aZqjV6XuAufRrFVu%2FXBsNln7usnlt70e4XQoE48mW1haNkjQwMgL0WMOSbRAwTTOPUZRKbjua1tJM39mAcQnoeQQxJ4yDM1HgshH%2FFL0AxJW9xzzwgJzw%2FSCSYpWkoidUVAWGDnVTLZxfd32CreA0kNnDlkJnIqmEJRIYrx0em7HEamK&X-Amz-Signature=4e2b10e9259f9825414c9f77962129e31139f98d28e3c9fbd93191d1c034cb06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURI46YM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsJ9aP6Fy0finNl6XYfv%2F8zMaTCmjvBezk6lYF1Fw%2FwAiEA%2BNitNhKVouEDDypVvffWbmppKOP1%2BZ9KN8Eb19VDTs8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzDXp%2BT5XcQ17ZLgSrcA0OPqW%2FeLhQdubjWug3o935I%2BeW3oIOD0IcOB4PImtKVobw%2F2LBJd0UvtoMKgi%2BLp5HJOs1DSynHA8FufTl5gD0bb1NPv1wnpK2F6XXdjF7PzlDEjnieNFEpS0A%2FtmSw2tQpDWOOvvKnOOI7bihvfXZFTNeXAh9lMk%2BYxB%2FP6CZIQYLhP4TJt8FbD9pMK8eWxj%2F5vJZwNqNIj5Ocz5w0hOy0lBbVNtv8L2kcz2GBhAUCW%2Fn3lpsAC6CH1I%2BjMeEWYAX8bJVoNuDDoTGStD6p%2FSDDaNmvqZKYXDMMN9pOpgX9ZmY0CxesIMiBKOVnjkd4Z0u8tddnEROni50CwUicFqdawZIbYgSmaSaZMVkTmHXNVFNkFu2UU7xfCLBK77dG3goR7HA2pBThDB5MVufGoz2rOzJesDoymPCMdsI1Kk5ooKhQLpUxSBJ%2Fgssza%2Fzpfq%2BeBrCuBPVEI0yzyAFjbXgzbjI1EcRuXReWYz1bqn%2FkzWlmC7AqsqJDOsNBT%2BvhlzyZiuTBDO8BoF0Sk1BE65J%2F%2BT1lWGhSVCIa3khlCcZnsb4u77ofBaclkpSDrMhG4Fs2Q5daXapO5P7KZzseiLKR98TSUFXfN%2Bjkn6zeq3NKmjR4i%2Bd70HdaxcOlMNuMp8QGOqUBnmC1gHW9A8PvZZIZnLP9J2cBZb%2FKi8Xdek4aflQSrN79aZqjV6XuAufRrFVu%2FXBsNln7usnlt70e4XQoE48mW1haNkjQwMgL0WMOSbRAwTTOPUZRKbjua1tJM39mAcQnoeQQxJ4yDM1HgshH%2FFL0AxJW9xzzwgJzw%2FSCSYpWkoidUVAWGDnVTLZxfd32CreA0kNnDlkJnIqmEJRIYrx0em7HEamK&X-Amz-Signature=bd431bb37ddcdd75d393547c4b6291bb259b999752d6a9998630524006e68822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURI46YM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsJ9aP6Fy0finNl6XYfv%2F8zMaTCmjvBezk6lYF1Fw%2FwAiEA%2BNitNhKVouEDDypVvffWbmppKOP1%2BZ9KN8Eb19VDTs8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzDXp%2BT5XcQ17ZLgSrcA0OPqW%2FeLhQdubjWug3o935I%2BeW3oIOD0IcOB4PImtKVobw%2F2LBJd0UvtoMKgi%2BLp5HJOs1DSynHA8FufTl5gD0bb1NPv1wnpK2F6XXdjF7PzlDEjnieNFEpS0A%2FtmSw2tQpDWOOvvKnOOI7bihvfXZFTNeXAh9lMk%2BYxB%2FP6CZIQYLhP4TJt8FbD9pMK8eWxj%2F5vJZwNqNIj5Ocz5w0hOy0lBbVNtv8L2kcz2GBhAUCW%2Fn3lpsAC6CH1I%2BjMeEWYAX8bJVoNuDDoTGStD6p%2FSDDaNmvqZKYXDMMN9pOpgX9ZmY0CxesIMiBKOVnjkd4Z0u8tddnEROni50CwUicFqdawZIbYgSmaSaZMVkTmHXNVFNkFu2UU7xfCLBK77dG3goR7HA2pBThDB5MVufGoz2rOzJesDoymPCMdsI1Kk5ooKhQLpUxSBJ%2Fgssza%2Fzpfq%2BeBrCuBPVEI0yzyAFjbXgzbjI1EcRuXReWYz1bqn%2FkzWlmC7AqsqJDOsNBT%2BvhlzyZiuTBDO8BoF0Sk1BE65J%2F%2BT1lWGhSVCIa3khlCcZnsb4u77ofBaclkpSDrMhG4Fs2Q5daXapO5P7KZzseiLKR98TSUFXfN%2Bjkn6zeq3NKmjR4i%2Bd70HdaxcOlMNuMp8QGOqUBnmC1gHW9A8PvZZIZnLP9J2cBZb%2FKi8Xdek4aflQSrN79aZqjV6XuAufRrFVu%2FXBsNln7usnlt70e4XQoE48mW1haNkjQwMgL0WMOSbRAwTTOPUZRKbjua1tJM39mAcQnoeQQxJ4yDM1HgshH%2FFL0AxJW9xzzwgJzw%2FSCSYpWkoidUVAWGDnVTLZxfd32CreA0kNnDlkJnIqmEJRIYrx0em7HEamK&X-Amz-Signature=e61d2cab271d2134484423a802c4b1bba6e80a03ff1e1db83c728f1492843c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURI46YM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsJ9aP6Fy0finNl6XYfv%2F8zMaTCmjvBezk6lYF1Fw%2FwAiEA%2BNitNhKVouEDDypVvffWbmppKOP1%2BZ9KN8Eb19VDTs8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzDXp%2BT5XcQ17ZLgSrcA0OPqW%2FeLhQdubjWug3o935I%2BeW3oIOD0IcOB4PImtKVobw%2F2LBJd0UvtoMKgi%2BLp5HJOs1DSynHA8FufTl5gD0bb1NPv1wnpK2F6XXdjF7PzlDEjnieNFEpS0A%2FtmSw2tQpDWOOvvKnOOI7bihvfXZFTNeXAh9lMk%2BYxB%2FP6CZIQYLhP4TJt8FbD9pMK8eWxj%2F5vJZwNqNIj5Ocz5w0hOy0lBbVNtv8L2kcz2GBhAUCW%2Fn3lpsAC6CH1I%2BjMeEWYAX8bJVoNuDDoTGStD6p%2FSDDaNmvqZKYXDMMN9pOpgX9ZmY0CxesIMiBKOVnjkd4Z0u8tddnEROni50CwUicFqdawZIbYgSmaSaZMVkTmHXNVFNkFu2UU7xfCLBK77dG3goR7HA2pBThDB5MVufGoz2rOzJesDoymPCMdsI1Kk5ooKhQLpUxSBJ%2Fgssza%2Fzpfq%2BeBrCuBPVEI0yzyAFjbXgzbjI1EcRuXReWYz1bqn%2FkzWlmC7AqsqJDOsNBT%2BvhlzyZiuTBDO8BoF0Sk1BE65J%2F%2BT1lWGhSVCIa3khlCcZnsb4u77ofBaclkpSDrMhG4Fs2Q5daXapO5P7KZzseiLKR98TSUFXfN%2Bjkn6zeq3NKmjR4i%2Bd70HdaxcOlMNuMp8QGOqUBnmC1gHW9A8PvZZIZnLP9J2cBZb%2FKi8Xdek4aflQSrN79aZqjV6XuAufRrFVu%2FXBsNln7usnlt70e4XQoE48mW1haNkjQwMgL0WMOSbRAwTTOPUZRKbjua1tJM39mAcQnoeQQxJ4yDM1HgshH%2FFL0AxJW9xzzwgJzw%2FSCSYpWkoidUVAWGDnVTLZxfd32CreA0kNnDlkJnIqmEJRIYrx0em7HEamK&X-Amz-Signature=cc44d2b69d486e4918ffaacc78e6546ee8e1584b59b0c0cd4194a54ad0d9d97b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURI46YM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsJ9aP6Fy0finNl6XYfv%2F8zMaTCmjvBezk6lYF1Fw%2FwAiEA%2BNitNhKVouEDDypVvffWbmppKOP1%2BZ9KN8Eb19VDTs8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzDXp%2BT5XcQ17ZLgSrcA0OPqW%2FeLhQdubjWug3o935I%2BeW3oIOD0IcOB4PImtKVobw%2F2LBJd0UvtoMKgi%2BLp5HJOs1DSynHA8FufTl5gD0bb1NPv1wnpK2F6XXdjF7PzlDEjnieNFEpS0A%2FtmSw2tQpDWOOvvKnOOI7bihvfXZFTNeXAh9lMk%2BYxB%2FP6CZIQYLhP4TJt8FbD9pMK8eWxj%2F5vJZwNqNIj5Ocz5w0hOy0lBbVNtv8L2kcz2GBhAUCW%2Fn3lpsAC6CH1I%2BjMeEWYAX8bJVoNuDDoTGStD6p%2FSDDaNmvqZKYXDMMN9pOpgX9ZmY0CxesIMiBKOVnjkd4Z0u8tddnEROni50CwUicFqdawZIbYgSmaSaZMVkTmHXNVFNkFu2UU7xfCLBK77dG3goR7HA2pBThDB5MVufGoz2rOzJesDoymPCMdsI1Kk5ooKhQLpUxSBJ%2Fgssza%2Fzpfq%2BeBrCuBPVEI0yzyAFjbXgzbjI1EcRuXReWYz1bqn%2FkzWlmC7AqsqJDOsNBT%2BvhlzyZiuTBDO8BoF0Sk1BE65J%2F%2BT1lWGhSVCIa3khlCcZnsb4u77ofBaclkpSDrMhG4Fs2Q5daXapO5P7KZzseiLKR98TSUFXfN%2Bjkn6zeq3NKmjR4i%2Bd70HdaxcOlMNuMp8QGOqUBnmC1gHW9A8PvZZIZnLP9J2cBZb%2FKi8Xdek4aflQSrN79aZqjV6XuAufRrFVu%2FXBsNln7usnlt70e4XQoE48mW1haNkjQwMgL0WMOSbRAwTTOPUZRKbjua1tJM39mAcQnoeQQxJ4yDM1HgshH%2FFL0AxJW9xzzwgJzw%2FSCSYpWkoidUVAWGDnVTLZxfd32CreA0kNnDlkJnIqmEJRIYrx0em7HEamK&X-Amz-Signature=80087a60f527879705ca44ab464d424d26bea2d4bb146b431764dc45e042c851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURI46YM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsJ9aP6Fy0finNl6XYfv%2F8zMaTCmjvBezk6lYF1Fw%2FwAiEA%2BNitNhKVouEDDypVvffWbmppKOP1%2BZ9KN8Eb19VDTs8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzDXp%2BT5XcQ17ZLgSrcA0OPqW%2FeLhQdubjWug3o935I%2BeW3oIOD0IcOB4PImtKVobw%2F2LBJd0UvtoMKgi%2BLp5HJOs1DSynHA8FufTl5gD0bb1NPv1wnpK2F6XXdjF7PzlDEjnieNFEpS0A%2FtmSw2tQpDWOOvvKnOOI7bihvfXZFTNeXAh9lMk%2BYxB%2FP6CZIQYLhP4TJt8FbD9pMK8eWxj%2F5vJZwNqNIj5Ocz5w0hOy0lBbVNtv8L2kcz2GBhAUCW%2Fn3lpsAC6CH1I%2BjMeEWYAX8bJVoNuDDoTGStD6p%2FSDDaNmvqZKYXDMMN9pOpgX9ZmY0CxesIMiBKOVnjkd4Z0u8tddnEROni50CwUicFqdawZIbYgSmaSaZMVkTmHXNVFNkFu2UU7xfCLBK77dG3goR7HA2pBThDB5MVufGoz2rOzJesDoymPCMdsI1Kk5ooKhQLpUxSBJ%2Fgssza%2Fzpfq%2BeBrCuBPVEI0yzyAFjbXgzbjI1EcRuXReWYz1bqn%2FkzWlmC7AqsqJDOsNBT%2BvhlzyZiuTBDO8BoF0Sk1BE65J%2F%2BT1lWGhSVCIa3khlCcZnsb4u77ofBaclkpSDrMhG4Fs2Q5daXapO5P7KZzseiLKR98TSUFXfN%2Bjkn6zeq3NKmjR4i%2Bd70HdaxcOlMNuMp8QGOqUBnmC1gHW9A8PvZZIZnLP9J2cBZb%2FKi8Xdek4aflQSrN79aZqjV6XuAufRrFVu%2FXBsNln7usnlt70e4XQoE48mW1haNkjQwMgL0WMOSbRAwTTOPUZRKbjua1tJM39mAcQnoeQQxJ4yDM1HgshH%2FFL0AxJW9xzzwgJzw%2FSCSYpWkoidUVAWGDnVTLZxfd32CreA0kNnDlkJnIqmEJRIYrx0em7HEamK&X-Amz-Signature=73d2ba6100a9c790aaf7722155b4296cd706857647b368914fdaa9df1593f5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURI46YM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsJ9aP6Fy0finNl6XYfv%2F8zMaTCmjvBezk6lYF1Fw%2FwAiEA%2BNitNhKVouEDDypVvffWbmppKOP1%2BZ9KN8Eb19VDTs8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzDXp%2BT5XcQ17ZLgSrcA0OPqW%2FeLhQdubjWug3o935I%2BeW3oIOD0IcOB4PImtKVobw%2F2LBJd0UvtoMKgi%2BLp5HJOs1DSynHA8FufTl5gD0bb1NPv1wnpK2F6XXdjF7PzlDEjnieNFEpS0A%2FtmSw2tQpDWOOvvKnOOI7bihvfXZFTNeXAh9lMk%2BYxB%2FP6CZIQYLhP4TJt8FbD9pMK8eWxj%2F5vJZwNqNIj5Ocz5w0hOy0lBbVNtv8L2kcz2GBhAUCW%2Fn3lpsAC6CH1I%2BjMeEWYAX8bJVoNuDDoTGStD6p%2FSDDaNmvqZKYXDMMN9pOpgX9ZmY0CxesIMiBKOVnjkd4Z0u8tddnEROni50CwUicFqdawZIbYgSmaSaZMVkTmHXNVFNkFu2UU7xfCLBK77dG3goR7HA2pBThDB5MVufGoz2rOzJesDoymPCMdsI1Kk5ooKhQLpUxSBJ%2Fgssza%2Fzpfq%2BeBrCuBPVEI0yzyAFjbXgzbjI1EcRuXReWYz1bqn%2FkzWlmC7AqsqJDOsNBT%2BvhlzyZiuTBDO8BoF0Sk1BE65J%2F%2BT1lWGhSVCIa3khlCcZnsb4u77ofBaclkpSDrMhG4Fs2Q5daXapO5P7KZzseiLKR98TSUFXfN%2Bjkn6zeq3NKmjR4i%2Bd70HdaxcOlMNuMp8QGOqUBnmC1gHW9A8PvZZIZnLP9J2cBZb%2FKi8Xdek4aflQSrN79aZqjV6XuAufRrFVu%2FXBsNln7usnlt70e4XQoE48mW1haNkjQwMgL0WMOSbRAwTTOPUZRKbjua1tJM39mAcQnoeQQxJ4yDM1HgshH%2FFL0AxJW9xzzwgJzw%2FSCSYpWkoidUVAWGDnVTLZxfd32CreA0kNnDlkJnIqmEJRIYrx0em7HEamK&X-Amz-Signature=b052597cb52dc9b9b1246b695c9f4b01411e803354fdadd13ca21f2197d14274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURI46YM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsJ9aP6Fy0finNl6XYfv%2F8zMaTCmjvBezk6lYF1Fw%2FwAiEA%2BNitNhKVouEDDypVvffWbmppKOP1%2BZ9KN8Eb19VDTs8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzDXp%2BT5XcQ17ZLgSrcA0OPqW%2FeLhQdubjWug3o935I%2BeW3oIOD0IcOB4PImtKVobw%2F2LBJd0UvtoMKgi%2BLp5HJOs1DSynHA8FufTl5gD0bb1NPv1wnpK2F6XXdjF7PzlDEjnieNFEpS0A%2FtmSw2tQpDWOOvvKnOOI7bihvfXZFTNeXAh9lMk%2BYxB%2FP6CZIQYLhP4TJt8FbD9pMK8eWxj%2F5vJZwNqNIj5Ocz5w0hOy0lBbVNtv8L2kcz2GBhAUCW%2Fn3lpsAC6CH1I%2BjMeEWYAX8bJVoNuDDoTGStD6p%2FSDDaNmvqZKYXDMMN9pOpgX9ZmY0CxesIMiBKOVnjkd4Z0u8tddnEROni50CwUicFqdawZIbYgSmaSaZMVkTmHXNVFNkFu2UU7xfCLBK77dG3goR7HA2pBThDB5MVufGoz2rOzJesDoymPCMdsI1Kk5ooKhQLpUxSBJ%2Fgssza%2Fzpfq%2BeBrCuBPVEI0yzyAFjbXgzbjI1EcRuXReWYz1bqn%2FkzWlmC7AqsqJDOsNBT%2BvhlzyZiuTBDO8BoF0Sk1BE65J%2F%2BT1lWGhSVCIa3khlCcZnsb4u77ofBaclkpSDrMhG4Fs2Q5daXapO5P7KZzseiLKR98TSUFXfN%2Bjkn6zeq3NKmjR4i%2Bd70HdaxcOlMNuMp8QGOqUBnmC1gHW9A8PvZZIZnLP9J2cBZb%2FKi8Xdek4aflQSrN79aZqjV6XuAufRrFVu%2FXBsNln7usnlt70e4XQoE48mW1haNkjQwMgL0WMOSbRAwTTOPUZRKbjua1tJM39mAcQnoeQQxJ4yDM1HgshH%2FFL0AxJW9xzzwgJzw%2FSCSYpWkoidUVAWGDnVTLZxfd32CreA0kNnDlkJnIqmEJRIYrx0em7HEamK&X-Amz-Signature=7de368476ab1c20cc0eaaabdabcd75d8b39996305a6a8cbb121cb5ab726b6fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURI46YM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsJ9aP6Fy0finNl6XYfv%2F8zMaTCmjvBezk6lYF1Fw%2FwAiEA%2BNitNhKVouEDDypVvffWbmppKOP1%2BZ9KN8Eb19VDTs8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzDXp%2BT5XcQ17ZLgSrcA0OPqW%2FeLhQdubjWug3o935I%2BeW3oIOD0IcOB4PImtKVobw%2F2LBJd0UvtoMKgi%2BLp5HJOs1DSynHA8FufTl5gD0bb1NPv1wnpK2F6XXdjF7PzlDEjnieNFEpS0A%2FtmSw2tQpDWOOvvKnOOI7bihvfXZFTNeXAh9lMk%2BYxB%2FP6CZIQYLhP4TJt8FbD9pMK8eWxj%2F5vJZwNqNIj5Ocz5w0hOy0lBbVNtv8L2kcz2GBhAUCW%2Fn3lpsAC6CH1I%2BjMeEWYAX8bJVoNuDDoTGStD6p%2FSDDaNmvqZKYXDMMN9pOpgX9ZmY0CxesIMiBKOVnjkd4Z0u8tddnEROni50CwUicFqdawZIbYgSmaSaZMVkTmHXNVFNkFu2UU7xfCLBK77dG3goR7HA2pBThDB5MVufGoz2rOzJesDoymPCMdsI1Kk5ooKhQLpUxSBJ%2Fgssza%2Fzpfq%2BeBrCuBPVEI0yzyAFjbXgzbjI1EcRuXReWYz1bqn%2FkzWlmC7AqsqJDOsNBT%2BvhlzyZiuTBDO8BoF0Sk1BE65J%2F%2BT1lWGhSVCIa3khlCcZnsb4u77ofBaclkpSDrMhG4Fs2Q5daXapO5P7KZzseiLKR98TSUFXfN%2Bjkn6zeq3NKmjR4i%2Bd70HdaxcOlMNuMp8QGOqUBnmC1gHW9A8PvZZIZnLP9J2cBZb%2FKi8Xdek4aflQSrN79aZqjV6XuAufRrFVu%2FXBsNln7usnlt70e4XQoE48mW1haNkjQwMgL0WMOSbRAwTTOPUZRKbjua1tJM39mAcQnoeQQxJ4yDM1HgshH%2FFL0AxJW9xzzwgJzw%2FSCSYpWkoidUVAWGDnVTLZxfd32CreA0kNnDlkJnIqmEJRIYrx0em7HEamK&X-Amz-Signature=f442126d01b4f39a7b428ae7d903796f91ae716b82ace55d5b8190ed70aab1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUPKVCMQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWb6T%2FY43FdzXVWjrdRwiHQ2zNFqXQy%2FcUNmRA7nq1UAiAmamWXT3kWzS50HiMvjVy3uIZIXEjWbM3%2Fjdowor3gPCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSLhb3hqqW4hILujPKtwD5v7l2BpxGT4mwzoDygbM5dfvfO6MEgYO5Un32kS7YMtoQRCWl9ntxMhZf%2Fp%2B6D%2F60XaQZTAk0dQSB2WtMSxcLNyeMXPGpeW0HY2tdmCUwK7HY3ljapn23Gw8AgQllVZgz%2BBcYB0aXDFTiTx0P9v07H5ju1CNcDjgSBZUBuLl%2Bl1pTVb%2FCg9dSCNzdNUi1wSf%2FFAqTBHwznoqkSCcy%2FwapqEmPcB6%2B3x5bgRzokU68RJXLJJiAjcAOeFh%2FbNp83Wouk6aNJe944ZTbhGf9Q9t6BhAsjHi%2BeOQU8ivQTJgdk8bcRInZ9YBNCQWIgouwdaHo%2FfyfLgX9GHiK%2FwxxVHJ3Gd8dB7cybXosQCs1d%2FAUvrDhEHZvHsVjw3MO8ySH4QFnmw4sRdDCwcC4sqmJipsN6We6la4z28XaltKzqmlmq3T4eCV7nopYVFPDfwj%2FvC%2BB3HA%2BVz5muJtztf1nXAuDQPABp8MVgB2xwpIpm1z7Q4qdfcL2rNOUuHq0GNgdhXkFqNUbj87B4sEDrEq2wXHcYtriDh1lDOYJkXpPiHbavBLxkcHc1ZuLbzzwzcQWi%2FMb0nDoqxmEkBPn5oAXULFdLKzavMFcVVWtVtjoKAxe4Uz%2FWyBhpC2wFh9a2Aw%2B4unxAY6pgHxqzgeDbI%2FklS7m%2BRIh%2BmfLoaJB3w6XqsGd0SILDzZqMBYTxz9xMUGjHgv%2FtN8XE0f6m%2BWOULGq5RuitPMpwWffv7tGSUTWgfgWuzEvA5s695dyyAoyhrjtgCrcqBjskpw2yrVcPqLF%2BBrNcWthXaDj7cyq7dZd2%2FeFrCvzveobIlIqBH9M5vNVWizQ5%2B6MABcYWR3Dg6%2FJCflh5ffm1ZgRsagK%2Bmw&X-Amz-Signature=f8e54a52f35acbf285f90c03a8e490b9229415bde6940d20123e3f4e994614d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURI46YM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsJ9aP6Fy0finNl6XYfv%2F8zMaTCmjvBezk6lYF1Fw%2FwAiEA%2BNitNhKVouEDDypVvffWbmppKOP1%2BZ9KN8Eb19VDTs8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzDXp%2BT5XcQ17ZLgSrcA0OPqW%2FeLhQdubjWug3o935I%2BeW3oIOD0IcOB4PImtKVobw%2F2LBJd0UvtoMKgi%2BLp5HJOs1DSynHA8FufTl5gD0bb1NPv1wnpK2F6XXdjF7PzlDEjnieNFEpS0A%2FtmSw2tQpDWOOvvKnOOI7bihvfXZFTNeXAh9lMk%2BYxB%2FP6CZIQYLhP4TJt8FbD9pMK8eWxj%2F5vJZwNqNIj5Ocz5w0hOy0lBbVNtv8L2kcz2GBhAUCW%2Fn3lpsAC6CH1I%2BjMeEWYAX8bJVoNuDDoTGStD6p%2FSDDaNmvqZKYXDMMN9pOpgX9ZmY0CxesIMiBKOVnjkd4Z0u8tddnEROni50CwUicFqdawZIbYgSmaSaZMVkTmHXNVFNkFu2UU7xfCLBK77dG3goR7HA2pBThDB5MVufGoz2rOzJesDoymPCMdsI1Kk5ooKhQLpUxSBJ%2Fgssza%2Fzpfq%2BeBrCuBPVEI0yzyAFjbXgzbjI1EcRuXReWYz1bqn%2FkzWlmC7AqsqJDOsNBT%2BvhlzyZiuTBDO8BoF0Sk1BE65J%2F%2BT1lWGhSVCIa3khlCcZnsb4u77ofBaclkpSDrMhG4Fs2Q5daXapO5P7KZzseiLKR98TSUFXfN%2Bjkn6zeq3NKmjR4i%2Bd70HdaxcOlMNuMp8QGOqUBnmC1gHW9A8PvZZIZnLP9J2cBZb%2FKi8Xdek4aflQSrN79aZqjV6XuAufRrFVu%2FXBsNln7usnlt70e4XQoE48mW1haNkjQwMgL0WMOSbRAwTTOPUZRKbjua1tJM39mAcQnoeQQxJ4yDM1HgshH%2FFL0AxJW9xzzwgJzw%2FSCSYpWkoidUVAWGDnVTLZxfd32CreA0kNnDlkJnIqmEJRIYrx0em7HEamK&X-Amz-Signature=f19e1117dff7fc92f8140a47842a703cef8b04d5d05f09dffb0896fa395d1477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOKLYQP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDelUJ%2FJbbCNfWy%2F8aEOF6RwQaZDbpO7NLIzMTdhh%2B98QIgdJTzikcv45xfsLRph4j87PVHfw4phSTkAX%2Bsj8ymg9EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnxgA3URJvFYQgbwCrcA%2FmPTGKA2UcTEavLNnMSvnqdUWKvzm0BZjf93QLCSqpYDrSLfklBOdu2CapJqWbjnUoTEbTETb0a3UHp5ej%2Bs%2FT5%2FlN8Ggghrhi4T0GBkiIaoTrZmdMl9S5kSxi63FKK7XyIQve9KU3Y%2Fdaiw2pGsE0Rc5MfCj8NAQ4FsiqHAnAnHgWk1DE7MGNQwDlOpyA8kjqr46WX3un4I0wO6QbeHOZkoQ98MxawG%2Fn1Tify%2Fj4%2B51tNtzhHdLoGZXYpftU77PiDc9RepNcRoda0Hcgl9mYs1%2Fp7cf043%2FF%2Ff%2BjWMEFUb8jGs2FFlzoQs7I2WyW3vNWPFd5%2BSarGjDScze8YzbqRb%2FJBhx%2FYLbRtMkqffXfmlxF607yO8LglZZZAJ9FkCW7gKbMP%2FtNb78HLNQpvfotzBOswbf7F7p5MVbeoWWszOkyWmT7AZo87cSK3WhHkhGdUxgfxhhHicMx5EyyoxYczDJ5gg%2BNsuCQsTKfoT8LZrbV5lmv8Jziw2bxTmkucrvJ0LElOHCLXLjFUBP9uP2Vovin%2Fmu0LA%2BexyOgfF787iwDBS58UUInUyRSbsrjpSqai2rJrw0sg3OrcCKUOmbW%2FbmW3aeHuvQp5ekt5pSdnDQjD3ytC6gc7QvkpMIWNp8QGOqUBzXUpn0ES8VuKeI1yk5xKLeZI6rrCbgpZoJh%2Fzas9jEVnH8BwN7iTBawbsoTUX%2B2imJ%2F9Jp346Guzgar91DSXjBfxlrQnwqTGvk52b2wMvOtmFiMTZcVDmPHkcsXg1ScsFm2Qr0Sm9t3uXuFiu2ukiZd%2BGAvWVjqb3Ub1K6BCGWe8yR5prYzClGzGiWw6Sro%2BkXEOFm9sfOYVfE8kalFglB%2BFvi2n&X-Amz-Signature=c52550b9509395ec03a6fb62b7862c666f7549810f61cd2bb490046b50554d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOKLYQP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDelUJ%2FJbbCNfWy%2F8aEOF6RwQaZDbpO7NLIzMTdhh%2B98QIgdJTzikcv45xfsLRph4j87PVHfw4phSTkAX%2Bsj8ymg9EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnxgA3URJvFYQgbwCrcA%2FmPTGKA2UcTEavLNnMSvnqdUWKvzm0BZjf93QLCSqpYDrSLfklBOdu2CapJqWbjnUoTEbTETb0a3UHp5ej%2Bs%2FT5%2FlN8Ggghrhi4T0GBkiIaoTrZmdMl9S5kSxi63FKK7XyIQve9KU3Y%2Fdaiw2pGsE0Rc5MfCj8NAQ4FsiqHAnAnHgWk1DE7MGNQwDlOpyA8kjqr46WX3un4I0wO6QbeHOZkoQ98MxawG%2Fn1Tify%2Fj4%2B51tNtzhHdLoGZXYpftU77PiDc9RepNcRoda0Hcgl9mYs1%2Fp7cf043%2FF%2Ff%2BjWMEFUb8jGs2FFlzoQs7I2WyW3vNWPFd5%2BSarGjDScze8YzbqRb%2FJBhx%2FYLbRtMkqffXfmlxF607yO8LglZZZAJ9FkCW7gKbMP%2FtNb78HLNQpvfotzBOswbf7F7p5MVbeoWWszOkyWmT7AZo87cSK3WhHkhGdUxgfxhhHicMx5EyyoxYczDJ5gg%2BNsuCQsTKfoT8LZrbV5lmv8Jziw2bxTmkucrvJ0LElOHCLXLjFUBP9uP2Vovin%2Fmu0LA%2BexyOgfF787iwDBS58UUInUyRSbsrjpSqai2rJrw0sg3OrcCKUOmbW%2FbmW3aeHuvQp5ekt5pSdnDQjD3ytC6gc7QvkpMIWNp8QGOqUBzXUpn0ES8VuKeI1yk5xKLeZI6rrCbgpZoJh%2Fzas9jEVnH8BwN7iTBawbsoTUX%2B2imJ%2F9Jp346Guzgar91DSXjBfxlrQnwqTGvk52b2wMvOtmFiMTZcVDmPHkcsXg1ScsFm2Qr0Sm9t3uXuFiu2ukiZd%2BGAvWVjqb3Ub1K6BCGWe8yR5prYzClGzGiWw6Sro%2BkXEOFm9sfOYVfE8kalFglB%2BFvi2n&X-Amz-Signature=7451db509bf47f396888d4a7b39215bc658aa6a26cdd4fa645001afd30dbde2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOKLYQP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDelUJ%2FJbbCNfWy%2F8aEOF6RwQaZDbpO7NLIzMTdhh%2B98QIgdJTzikcv45xfsLRph4j87PVHfw4phSTkAX%2Bsj8ymg9EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnxgA3URJvFYQgbwCrcA%2FmPTGKA2UcTEavLNnMSvnqdUWKvzm0BZjf93QLCSqpYDrSLfklBOdu2CapJqWbjnUoTEbTETb0a3UHp5ej%2Bs%2FT5%2FlN8Ggghrhi4T0GBkiIaoTrZmdMl9S5kSxi63FKK7XyIQve9KU3Y%2Fdaiw2pGsE0Rc5MfCj8NAQ4FsiqHAnAnHgWk1DE7MGNQwDlOpyA8kjqr46WX3un4I0wO6QbeHOZkoQ98MxawG%2Fn1Tify%2Fj4%2B51tNtzhHdLoGZXYpftU77PiDc9RepNcRoda0Hcgl9mYs1%2Fp7cf043%2FF%2Ff%2BjWMEFUb8jGs2FFlzoQs7I2WyW3vNWPFd5%2BSarGjDScze8YzbqRb%2FJBhx%2FYLbRtMkqffXfmlxF607yO8LglZZZAJ9FkCW7gKbMP%2FtNb78HLNQpvfotzBOswbf7F7p5MVbeoWWszOkyWmT7AZo87cSK3WhHkhGdUxgfxhhHicMx5EyyoxYczDJ5gg%2BNsuCQsTKfoT8LZrbV5lmv8Jziw2bxTmkucrvJ0LElOHCLXLjFUBP9uP2Vovin%2Fmu0LA%2BexyOgfF787iwDBS58UUInUyRSbsrjpSqai2rJrw0sg3OrcCKUOmbW%2FbmW3aeHuvQp5ekt5pSdnDQjD3ytC6gc7QvkpMIWNp8QGOqUBzXUpn0ES8VuKeI1yk5xKLeZI6rrCbgpZoJh%2Fzas9jEVnH8BwN7iTBawbsoTUX%2B2imJ%2F9Jp346Guzgar91DSXjBfxlrQnwqTGvk52b2wMvOtmFiMTZcVDmPHkcsXg1ScsFm2Qr0Sm9t3uXuFiu2ukiZd%2BGAvWVjqb3Ub1K6BCGWe8yR5prYzClGzGiWw6Sro%2BkXEOFm9sfOYVfE8kalFglB%2BFvi2n&X-Amz-Signature=6fbeada8920fe35a9117b9f046fa9e47882144a12f58c10ce6352ccaeadd4afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOKLYQP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDelUJ%2FJbbCNfWy%2F8aEOF6RwQaZDbpO7NLIzMTdhh%2B98QIgdJTzikcv45xfsLRph4j87PVHfw4phSTkAX%2Bsj8ymg9EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnxgA3URJvFYQgbwCrcA%2FmPTGKA2UcTEavLNnMSvnqdUWKvzm0BZjf93QLCSqpYDrSLfklBOdu2CapJqWbjnUoTEbTETb0a3UHp5ej%2Bs%2FT5%2FlN8Ggghrhi4T0GBkiIaoTrZmdMl9S5kSxi63FKK7XyIQve9KU3Y%2Fdaiw2pGsE0Rc5MfCj8NAQ4FsiqHAnAnHgWk1DE7MGNQwDlOpyA8kjqr46WX3un4I0wO6QbeHOZkoQ98MxawG%2Fn1Tify%2Fj4%2B51tNtzhHdLoGZXYpftU77PiDc9RepNcRoda0Hcgl9mYs1%2Fp7cf043%2FF%2Ff%2BjWMEFUb8jGs2FFlzoQs7I2WyW3vNWPFd5%2BSarGjDScze8YzbqRb%2FJBhx%2FYLbRtMkqffXfmlxF607yO8LglZZZAJ9FkCW7gKbMP%2FtNb78HLNQpvfotzBOswbf7F7p5MVbeoWWszOkyWmT7AZo87cSK3WhHkhGdUxgfxhhHicMx5EyyoxYczDJ5gg%2BNsuCQsTKfoT8LZrbV5lmv8Jziw2bxTmkucrvJ0LElOHCLXLjFUBP9uP2Vovin%2Fmu0LA%2BexyOgfF787iwDBS58UUInUyRSbsrjpSqai2rJrw0sg3OrcCKUOmbW%2FbmW3aeHuvQp5ekt5pSdnDQjD3ytC6gc7QvkpMIWNp8QGOqUBzXUpn0ES8VuKeI1yk5xKLeZI6rrCbgpZoJh%2Fzas9jEVnH8BwN7iTBawbsoTUX%2B2imJ%2F9Jp346Guzgar91DSXjBfxlrQnwqTGvk52b2wMvOtmFiMTZcVDmPHkcsXg1ScsFm2Qr0Sm9t3uXuFiu2ukiZd%2BGAvWVjqb3Ub1K6BCGWe8yR5prYzClGzGiWw6Sro%2BkXEOFm9sfOYVfE8kalFglB%2BFvi2n&X-Amz-Signature=1ba1661dbd16e2681086770f410948d0ea429205377e04b841696b97392ebef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOKLYQP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDelUJ%2FJbbCNfWy%2F8aEOF6RwQaZDbpO7NLIzMTdhh%2B98QIgdJTzikcv45xfsLRph4j87PVHfw4phSTkAX%2Bsj8ymg9EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnxgA3URJvFYQgbwCrcA%2FmPTGKA2UcTEavLNnMSvnqdUWKvzm0BZjf93QLCSqpYDrSLfklBOdu2CapJqWbjnUoTEbTETb0a3UHp5ej%2Bs%2FT5%2FlN8Ggghrhi4T0GBkiIaoTrZmdMl9S5kSxi63FKK7XyIQve9KU3Y%2Fdaiw2pGsE0Rc5MfCj8NAQ4FsiqHAnAnHgWk1DE7MGNQwDlOpyA8kjqr46WX3un4I0wO6QbeHOZkoQ98MxawG%2Fn1Tify%2Fj4%2B51tNtzhHdLoGZXYpftU77PiDc9RepNcRoda0Hcgl9mYs1%2Fp7cf043%2FF%2Ff%2BjWMEFUb8jGs2FFlzoQs7I2WyW3vNWPFd5%2BSarGjDScze8YzbqRb%2FJBhx%2FYLbRtMkqffXfmlxF607yO8LglZZZAJ9FkCW7gKbMP%2FtNb78HLNQpvfotzBOswbf7F7p5MVbeoWWszOkyWmT7AZo87cSK3WhHkhGdUxgfxhhHicMx5EyyoxYczDJ5gg%2BNsuCQsTKfoT8LZrbV5lmv8Jziw2bxTmkucrvJ0LElOHCLXLjFUBP9uP2Vovin%2Fmu0LA%2BexyOgfF787iwDBS58UUInUyRSbsrjpSqai2rJrw0sg3OrcCKUOmbW%2FbmW3aeHuvQp5ekt5pSdnDQjD3ytC6gc7QvkpMIWNp8QGOqUBzXUpn0ES8VuKeI1yk5xKLeZI6rrCbgpZoJh%2Fzas9jEVnH8BwN7iTBawbsoTUX%2B2imJ%2F9Jp346Guzgar91DSXjBfxlrQnwqTGvk52b2wMvOtmFiMTZcVDmPHkcsXg1ScsFm2Qr0Sm9t3uXuFiu2ukiZd%2BGAvWVjqb3Ub1K6BCGWe8yR5prYzClGzGiWw6Sro%2BkXEOFm9sfOYVfE8kalFglB%2BFvi2n&X-Amz-Signature=f1342c63ad979ace1bfbc1e807a334e3ec043d82a55abe3c12320530d580cdc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOKLYQP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDelUJ%2FJbbCNfWy%2F8aEOF6RwQaZDbpO7NLIzMTdhh%2B98QIgdJTzikcv45xfsLRph4j87PVHfw4phSTkAX%2Bsj8ymg9EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnxgA3URJvFYQgbwCrcA%2FmPTGKA2UcTEavLNnMSvnqdUWKvzm0BZjf93QLCSqpYDrSLfklBOdu2CapJqWbjnUoTEbTETb0a3UHp5ej%2Bs%2FT5%2FlN8Ggghrhi4T0GBkiIaoTrZmdMl9S5kSxi63FKK7XyIQve9KU3Y%2Fdaiw2pGsE0Rc5MfCj8NAQ4FsiqHAnAnHgWk1DE7MGNQwDlOpyA8kjqr46WX3un4I0wO6QbeHOZkoQ98MxawG%2Fn1Tify%2Fj4%2B51tNtzhHdLoGZXYpftU77PiDc9RepNcRoda0Hcgl9mYs1%2Fp7cf043%2FF%2Ff%2BjWMEFUb8jGs2FFlzoQs7I2WyW3vNWPFd5%2BSarGjDScze8YzbqRb%2FJBhx%2FYLbRtMkqffXfmlxF607yO8LglZZZAJ9FkCW7gKbMP%2FtNb78HLNQpvfotzBOswbf7F7p5MVbeoWWszOkyWmT7AZo87cSK3WhHkhGdUxgfxhhHicMx5EyyoxYczDJ5gg%2BNsuCQsTKfoT8LZrbV5lmv8Jziw2bxTmkucrvJ0LElOHCLXLjFUBP9uP2Vovin%2Fmu0LA%2BexyOgfF787iwDBS58UUInUyRSbsrjpSqai2rJrw0sg3OrcCKUOmbW%2FbmW3aeHuvQp5ekt5pSdnDQjD3ytC6gc7QvkpMIWNp8QGOqUBzXUpn0ES8VuKeI1yk5xKLeZI6rrCbgpZoJh%2Fzas9jEVnH8BwN7iTBawbsoTUX%2B2imJ%2F9Jp346Guzgar91DSXjBfxlrQnwqTGvk52b2wMvOtmFiMTZcVDmPHkcsXg1ScsFm2Qr0Sm9t3uXuFiu2ukiZd%2BGAvWVjqb3Ub1K6BCGWe8yR5prYzClGzGiWw6Sro%2BkXEOFm9sfOYVfE8kalFglB%2BFvi2n&X-Amz-Signature=30d21d83fa2e8f52e10334bc59738f356b84b625e66c7d359f2080e809146beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOKLYQP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDelUJ%2FJbbCNfWy%2F8aEOF6RwQaZDbpO7NLIzMTdhh%2B98QIgdJTzikcv45xfsLRph4j87PVHfw4phSTkAX%2Bsj8ymg9EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnxgA3URJvFYQgbwCrcA%2FmPTGKA2UcTEavLNnMSvnqdUWKvzm0BZjf93QLCSqpYDrSLfklBOdu2CapJqWbjnUoTEbTETb0a3UHp5ej%2Bs%2FT5%2FlN8Ggghrhi4T0GBkiIaoTrZmdMl9S5kSxi63FKK7XyIQve9KU3Y%2Fdaiw2pGsE0Rc5MfCj8NAQ4FsiqHAnAnHgWk1DE7MGNQwDlOpyA8kjqr46WX3un4I0wO6QbeHOZkoQ98MxawG%2Fn1Tify%2Fj4%2B51tNtzhHdLoGZXYpftU77PiDc9RepNcRoda0Hcgl9mYs1%2Fp7cf043%2FF%2Ff%2BjWMEFUb8jGs2FFlzoQs7I2WyW3vNWPFd5%2BSarGjDScze8YzbqRb%2FJBhx%2FYLbRtMkqffXfmlxF607yO8LglZZZAJ9FkCW7gKbMP%2FtNb78HLNQpvfotzBOswbf7F7p5MVbeoWWszOkyWmT7AZo87cSK3WhHkhGdUxgfxhhHicMx5EyyoxYczDJ5gg%2BNsuCQsTKfoT8LZrbV5lmv8Jziw2bxTmkucrvJ0LElOHCLXLjFUBP9uP2Vovin%2Fmu0LA%2BexyOgfF787iwDBS58UUInUyRSbsrjpSqai2rJrw0sg3OrcCKUOmbW%2FbmW3aeHuvQp5ekt5pSdnDQjD3ytC6gc7QvkpMIWNp8QGOqUBzXUpn0ES8VuKeI1yk5xKLeZI6rrCbgpZoJh%2Fzas9jEVnH8BwN7iTBawbsoTUX%2B2imJ%2F9Jp346Guzgar91DSXjBfxlrQnwqTGvk52b2wMvOtmFiMTZcVDmPHkcsXg1ScsFm2Qr0Sm9t3uXuFiu2ukiZd%2BGAvWVjqb3Ub1K6BCGWe8yR5prYzClGzGiWw6Sro%2BkXEOFm9sfOYVfE8kalFglB%2BFvi2n&X-Amz-Signature=a744e93b97924133152058d03faa85dfd080484495b54875ced12624034d69f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOKLYQP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDelUJ%2FJbbCNfWy%2F8aEOF6RwQaZDbpO7NLIzMTdhh%2B98QIgdJTzikcv45xfsLRph4j87PVHfw4phSTkAX%2Bsj8ymg9EqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnxgA3URJvFYQgbwCrcA%2FmPTGKA2UcTEavLNnMSvnqdUWKvzm0BZjf93QLCSqpYDrSLfklBOdu2CapJqWbjnUoTEbTETb0a3UHp5ej%2Bs%2FT5%2FlN8Ggghrhi4T0GBkiIaoTrZmdMl9S5kSxi63FKK7XyIQve9KU3Y%2Fdaiw2pGsE0Rc5MfCj8NAQ4FsiqHAnAnHgWk1DE7MGNQwDlOpyA8kjqr46WX3un4I0wO6QbeHOZkoQ98MxawG%2Fn1Tify%2Fj4%2B51tNtzhHdLoGZXYpftU77PiDc9RepNcRoda0Hcgl9mYs1%2Fp7cf043%2FF%2Ff%2BjWMEFUb8jGs2FFlzoQs7I2WyW3vNWPFd5%2BSarGjDScze8YzbqRb%2FJBhx%2FYLbRtMkqffXfmlxF607yO8LglZZZAJ9FkCW7gKbMP%2FtNb78HLNQpvfotzBOswbf7F7p5MVbeoWWszOkyWmT7AZo87cSK3WhHkhGdUxgfxhhHicMx5EyyoxYczDJ5gg%2BNsuCQsTKfoT8LZrbV5lmv8Jziw2bxTmkucrvJ0LElOHCLXLjFUBP9uP2Vovin%2Fmu0LA%2BexyOgfF787iwDBS58UUInUyRSbsrjpSqai2rJrw0sg3OrcCKUOmbW%2FbmW3aeHuvQp5ekt5pSdnDQjD3ytC6gc7QvkpMIWNp8QGOqUBzXUpn0ES8VuKeI1yk5xKLeZI6rrCbgpZoJh%2Fzas9jEVnH8BwN7iTBawbsoTUX%2B2imJ%2F9Jp346Guzgar91DSXjBfxlrQnwqTGvk52b2wMvOtmFiMTZcVDmPHkcsXg1ScsFm2Qr0Sm9t3uXuFiu2ukiZd%2BGAvWVjqb3Ub1K6BCGWe8yR5prYzClGzGiWw6Sro%2BkXEOFm9sfOYVfE8kalFglB%2BFvi2n&X-Amz-Signature=d70879e3d57fa03cfb87ed4449d9096305b1666e082e9d3e80b90a43e1466a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk mention + link Robot Localization node
