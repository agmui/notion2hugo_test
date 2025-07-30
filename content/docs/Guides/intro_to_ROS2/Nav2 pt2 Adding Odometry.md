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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYWJXRI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN36QXLnscwPQEFZmfaBHa0DmC9E9lc%2FH6v8m9Typ4uwIhAMhxJFd76s5Lbh9MGp2wahf9W2jdUeftlVDYZSIN1bxUKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFxdnU2AIhB38MTAIq3AP4sjH59OFYBd0RPNqSxxI1%2BYY3oQF1wB%2FzEDXNRhwzQAEdVCCFK7Th2mB7X%2BqSR%2B1CruKYIPd9lp88kfe4FlBQyXNzhCTLBtLVzJGTxqHV8aEPZ%2BHBD0FMP6693OG2yQpFh74wESg8bOo5jfFd0CrBkhJd5mhRmbESB%2FI2wZB4zBPEhf%2FseoYAvKUO3shG36fsHWP9pp7CQ4tPMx3ORfS0L5J1W%2BKRmaT%2FJlWKjuMcFEn0VaznDi5oocL8W6WAWVa%2BAG5ohVu248sjs3%2BYnAMN2OAJBmvB1RqYmF0zdJG90wCqx6jLlCNWl6Ruhbk5IIscVHWJ7jEzxd4THAjpPbUfznmE4HaWYs8k%2Ft9sWAi6PmqEzhIP38I2kQxJp9WpLvt6zVORYvL7Jr5hk%2B8pksxFTS7A4NwmEhzVOkSvSDvaI693EZ%2Bclv3GXODev6Jp3fqYT2EcNmfhp2rtrNTHEJRlsuVFkJaktGr8AvWI26yV%2BnRWYASXuDAk2MfDMfP7hjCjWLRmP%2FSpKn%2FnZQ%2BRbLk6QEKi%2Fkt%2Bo2cHR6%2B%2BDYr6Na0UublWZaCtuCg7e1H4VW2kMfr%2FzkWQk9H%2Fp2mh%2BuqgcLdf%2FsWQA%2BsGxfuMNFWWpkhKuDpvqbpW%2BRJBOTC0o6jEBjqkAdry62kCdUzR8jY4thrnc4P%2BmnUxBhZc%2Bwp46Zw8YttWTo633ddJsBxJfZLUedbwlcCri6Pzpt61%2FJ0monPDWwrzDvOjMCpWllvFZ0r2PDH9C8GDqptB1tE5FGSXqMDrbaiUo7CDLPXy9kAl0KwBTnyQPCdZ68aAj0n6BvqC5s1V9ji6o4CUtzLca3eGnv1Atyje8FY5yVPFhbaeR3vj8ARlzne6&X-Amz-Signature=becfd6fc4ea20f102bc8fca17f2a63a56b7cc54b47b93f0dde52ae3f6ae1065f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYWJXRI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN36QXLnscwPQEFZmfaBHa0DmC9E9lc%2FH6v8m9Typ4uwIhAMhxJFd76s5Lbh9MGp2wahf9W2jdUeftlVDYZSIN1bxUKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFxdnU2AIhB38MTAIq3AP4sjH59OFYBd0RPNqSxxI1%2BYY3oQF1wB%2FzEDXNRhwzQAEdVCCFK7Th2mB7X%2BqSR%2B1CruKYIPd9lp88kfe4FlBQyXNzhCTLBtLVzJGTxqHV8aEPZ%2BHBD0FMP6693OG2yQpFh74wESg8bOo5jfFd0CrBkhJd5mhRmbESB%2FI2wZB4zBPEhf%2FseoYAvKUO3shG36fsHWP9pp7CQ4tPMx3ORfS0L5J1W%2BKRmaT%2FJlWKjuMcFEn0VaznDi5oocL8W6WAWVa%2BAG5ohVu248sjs3%2BYnAMN2OAJBmvB1RqYmF0zdJG90wCqx6jLlCNWl6Ruhbk5IIscVHWJ7jEzxd4THAjpPbUfznmE4HaWYs8k%2Ft9sWAi6PmqEzhIP38I2kQxJp9WpLvt6zVORYvL7Jr5hk%2B8pksxFTS7A4NwmEhzVOkSvSDvaI693EZ%2Bclv3GXODev6Jp3fqYT2EcNmfhp2rtrNTHEJRlsuVFkJaktGr8AvWI26yV%2BnRWYASXuDAk2MfDMfP7hjCjWLRmP%2FSpKn%2FnZQ%2BRbLk6QEKi%2Fkt%2Bo2cHR6%2B%2BDYr6Na0UublWZaCtuCg7e1H4VW2kMfr%2FzkWQk9H%2Fp2mh%2BuqgcLdf%2FsWQA%2BsGxfuMNFWWpkhKuDpvqbpW%2BRJBOTC0o6jEBjqkAdry62kCdUzR8jY4thrnc4P%2BmnUxBhZc%2Bwp46Zw8YttWTo633ddJsBxJfZLUedbwlcCri6Pzpt61%2FJ0monPDWwrzDvOjMCpWllvFZ0r2PDH9C8GDqptB1tE5FGSXqMDrbaiUo7CDLPXy9kAl0KwBTnyQPCdZ68aAj0n6BvqC5s1V9ji6o4CUtzLca3eGnv1Atyje8FY5yVPFhbaeR3vj8ARlzne6&X-Amz-Signature=3617d3c83f2735ca1ceddc2edf162967f26c52cb8309621179c33b68466f5d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYWJXRI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN36QXLnscwPQEFZmfaBHa0DmC9E9lc%2FH6v8m9Typ4uwIhAMhxJFd76s5Lbh9MGp2wahf9W2jdUeftlVDYZSIN1bxUKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFxdnU2AIhB38MTAIq3AP4sjH59OFYBd0RPNqSxxI1%2BYY3oQF1wB%2FzEDXNRhwzQAEdVCCFK7Th2mB7X%2BqSR%2B1CruKYIPd9lp88kfe4FlBQyXNzhCTLBtLVzJGTxqHV8aEPZ%2BHBD0FMP6693OG2yQpFh74wESg8bOo5jfFd0CrBkhJd5mhRmbESB%2FI2wZB4zBPEhf%2FseoYAvKUO3shG36fsHWP9pp7CQ4tPMx3ORfS0L5J1W%2BKRmaT%2FJlWKjuMcFEn0VaznDi5oocL8W6WAWVa%2BAG5ohVu248sjs3%2BYnAMN2OAJBmvB1RqYmF0zdJG90wCqx6jLlCNWl6Ruhbk5IIscVHWJ7jEzxd4THAjpPbUfznmE4HaWYs8k%2Ft9sWAi6PmqEzhIP38I2kQxJp9WpLvt6zVORYvL7Jr5hk%2B8pksxFTS7A4NwmEhzVOkSvSDvaI693EZ%2Bclv3GXODev6Jp3fqYT2EcNmfhp2rtrNTHEJRlsuVFkJaktGr8AvWI26yV%2BnRWYASXuDAk2MfDMfP7hjCjWLRmP%2FSpKn%2FnZQ%2BRbLk6QEKi%2Fkt%2Bo2cHR6%2B%2BDYr6Na0UublWZaCtuCg7e1H4VW2kMfr%2FzkWQk9H%2Fp2mh%2BuqgcLdf%2FsWQA%2BsGxfuMNFWWpkhKuDpvqbpW%2BRJBOTC0o6jEBjqkAdry62kCdUzR8jY4thrnc4P%2BmnUxBhZc%2Bwp46Zw8YttWTo633ddJsBxJfZLUedbwlcCri6Pzpt61%2FJ0monPDWwrzDvOjMCpWllvFZ0r2PDH9C8GDqptB1tE5FGSXqMDrbaiUo7CDLPXy9kAl0KwBTnyQPCdZ68aAj0n6BvqC5s1V9ji6o4CUtzLca3eGnv1Atyje8FY5yVPFhbaeR3vj8ARlzne6&X-Amz-Signature=fa6438f9ebafdd7efc993be983bb0257a73e4381b50e72e478eab4bf4f0b4a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYWJXRI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN36QXLnscwPQEFZmfaBHa0DmC9E9lc%2FH6v8m9Typ4uwIhAMhxJFd76s5Lbh9MGp2wahf9W2jdUeftlVDYZSIN1bxUKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFxdnU2AIhB38MTAIq3AP4sjH59OFYBd0RPNqSxxI1%2BYY3oQF1wB%2FzEDXNRhwzQAEdVCCFK7Th2mB7X%2BqSR%2B1CruKYIPd9lp88kfe4FlBQyXNzhCTLBtLVzJGTxqHV8aEPZ%2BHBD0FMP6693OG2yQpFh74wESg8bOo5jfFd0CrBkhJd5mhRmbESB%2FI2wZB4zBPEhf%2FseoYAvKUO3shG36fsHWP9pp7CQ4tPMx3ORfS0L5J1W%2BKRmaT%2FJlWKjuMcFEn0VaznDi5oocL8W6WAWVa%2BAG5ohVu248sjs3%2BYnAMN2OAJBmvB1RqYmF0zdJG90wCqx6jLlCNWl6Ruhbk5IIscVHWJ7jEzxd4THAjpPbUfznmE4HaWYs8k%2Ft9sWAi6PmqEzhIP38I2kQxJp9WpLvt6zVORYvL7Jr5hk%2B8pksxFTS7A4NwmEhzVOkSvSDvaI693EZ%2Bclv3GXODev6Jp3fqYT2EcNmfhp2rtrNTHEJRlsuVFkJaktGr8AvWI26yV%2BnRWYASXuDAk2MfDMfP7hjCjWLRmP%2FSpKn%2FnZQ%2BRbLk6QEKi%2Fkt%2Bo2cHR6%2B%2BDYr6Na0UublWZaCtuCg7e1H4VW2kMfr%2FzkWQk9H%2Fp2mh%2BuqgcLdf%2FsWQA%2BsGxfuMNFWWpkhKuDpvqbpW%2BRJBOTC0o6jEBjqkAdry62kCdUzR8jY4thrnc4P%2BmnUxBhZc%2Bwp46Zw8YttWTo633ddJsBxJfZLUedbwlcCri6Pzpt61%2FJ0monPDWwrzDvOjMCpWllvFZ0r2PDH9C8GDqptB1tE5FGSXqMDrbaiUo7CDLPXy9kAl0KwBTnyQPCdZ68aAj0n6BvqC5s1V9ji6o4CUtzLca3eGnv1Atyje8FY5yVPFhbaeR3vj8ARlzne6&X-Amz-Signature=52096782f4fa0c0d63ac8af930d9bd1afafd7d5ff2e1d6d315f9454533e447bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYWJXRI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN36QXLnscwPQEFZmfaBHa0DmC9E9lc%2FH6v8m9Typ4uwIhAMhxJFd76s5Lbh9MGp2wahf9W2jdUeftlVDYZSIN1bxUKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFxdnU2AIhB38MTAIq3AP4sjH59OFYBd0RPNqSxxI1%2BYY3oQF1wB%2FzEDXNRhwzQAEdVCCFK7Th2mB7X%2BqSR%2B1CruKYIPd9lp88kfe4FlBQyXNzhCTLBtLVzJGTxqHV8aEPZ%2BHBD0FMP6693OG2yQpFh74wESg8bOo5jfFd0CrBkhJd5mhRmbESB%2FI2wZB4zBPEhf%2FseoYAvKUO3shG36fsHWP9pp7CQ4tPMx3ORfS0L5J1W%2BKRmaT%2FJlWKjuMcFEn0VaznDi5oocL8W6WAWVa%2BAG5ohVu248sjs3%2BYnAMN2OAJBmvB1RqYmF0zdJG90wCqx6jLlCNWl6Ruhbk5IIscVHWJ7jEzxd4THAjpPbUfznmE4HaWYs8k%2Ft9sWAi6PmqEzhIP38I2kQxJp9WpLvt6zVORYvL7Jr5hk%2B8pksxFTS7A4NwmEhzVOkSvSDvaI693EZ%2Bclv3GXODev6Jp3fqYT2EcNmfhp2rtrNTHEJRlsuVFkJaktGr8AvWI26yV%2BnRWYASXuDAk2MfDMfP7hjCjWLRmP%2FSpKn%2FnZQ%2BRbLk6QEKi%2Fkt%2Bo2cHR6%2B%2BDYr6Na0UublWZaCtuCg7e1H4VW2kMfr%2FzkWQk9H%2Fp2mh%2BuqgcLdf%2FsWQA%2BsGxfuMNFWWpkhKuDpvqbpW%2BRJBOTC0o6jEBjqkAdry62kCdUzR8jY4thrnc4P%2BmnUxBhZc%2Bwp46Zw8YttWTo633ddJsBxJfZLUedbwlcCri6Pzpt61%2FJ0monPDWwrzDvOjMCpWllvFZ0r2PDH9C8GDqptB1tE5FGSXqMDrbaiUo7CDLPXy9kAl0KwBTnyQPCdZ68aAj0n6BvqC5s1V9ji6o4CUtzLca3eGnv1Atyje8FY5yVPFhbaeR3vj8ARlzne6&X-Amz-Signature=34b2e4b5e664d9bb434a6566f68110c16cc1958fd6b991368e6d91e8b6b5f604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYWJXRI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN36QXLnscwPQEFZmfaBHa0DmC9E9lc%2FH6v8m9Typ4uwIhAMhxJFd76s5Lbh9MGp2wahf9W2jdUeftlVDYZSIN1bxUKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFxdnU2AIhB38MTAIq3AP4sjH59OFYBd0RPNqSxxI1%2BYY3oQF1wB%2FzEDXNRhwzQAEdVCCFK7Th2mB7X%2BqSR%2B1CruKYIPd9lp88kfe4FlBQyXNzhCTLBtLVzJGTxqHV8aEPZ%2BHBD0FMP6693OG2yQpFh74wESg8bOo5jfFd0CrBkhJd5mhRmbESB%2FI2wZB4zBPEhf%2FseoYAvKUO3shG36fsHWP9pp7CQ4tPMx3ORfS0L5J1W%2BKRmaT%2FJlWKjuMcFEn0VaznDi5oocL8W6WAWVa%2BAG5ohVu248sjs3%2BYnAMN2OAJBmvB1RqYmF0zdJG90wCqx6jLlCNWl6Ruhbk5IIscVHWJ7jEzxd4THAjpPbUfznmE4HaWYs8k%2Ft9sWAi6PmqEzhIP38I2kQxJp9WpLvt6zVORYvL7Jr5hk%2B8pksxFTS7A4NwmEhzVOkSvSDvaI693EZ%2Bclv3GXODev6Jp3fqYT2EcNmfhp2rtrNTHEJRlsuVFkJaktGr8AvWI26yV%2BnRWYASXuDAk2MfDMfP7hjCjWLRmP%2FSpKn%2FnZQ%2BRbLk6QEKi%2Fkt%2Bo2cHR6%2B%2BDYr6Na0UublWZaCtuCg7e1H4VW2kMfr%2FzkWQk9H%2Fp2mh%2BuqgcLdf%2FsWQA%2BsGxfuMNFWWpkhKuDpvqbpW%2BRJBOTC0o6jEBjqkAdry62kCdUzR8jY4thrnc4P%2BmnUxBhZc%2Bwp46Zw8YttWTo633ddJsBxJfZLUedbwlcCri6Pzpt61%2FJ0monPDWwrzDvOjMCpWllvFZ0r2PDH9C8GDqptB1tE5FGSXqMDrbaiUo7CDLPXy9kAl0KwBTnyQPCdZ68aAj0n6BvqC5s1V9ji6o4CUtzLca3eGnv1Atyje8FY5yVPFhbaeR3vj8ARlzne6&X-Amz-Signature=d2b83b096a3de697632073813c7d6f63b15069674f9e501da762a2a07d304589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYWJXRI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN36QXLnscwPQEFZmfaBHa0DmC9E9lc%2FH6v8m9Typ4uwIhAMhxJFd76s5Lbh9MGp2wahf9W2jdUeftlVDYZSIN1bxUKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFxdnU2AIhB38MTAIq3AP4sjH59OFYBd0RPNqSxxI1%2BYY3oQF1wB%2FzEDXNRhwzQAEdVCCFK7Th2mB7X%2BqSR%2B1CruKYIPd9lp88kfe4FlBQyXNzhCTLBtLVzJGTxqHV8aEPZ%2BHBD0FMP6693OG2yQpFh74wESg8bOo5jfFd0CrBkhJd5mhRmbESB%2FI2wZB4zBPEhf%2FseoYAvKUO3shG36fsHWP9pp7CQ4tPMx3ORfS0L5J1W%2BKRmaT%2FJlWKjuMcFEn0VaznDi5oocL8W6WAWVa%2BAG5ohVu248sjs3%2BYnAMN2OAJBmvB1RqYmF0zdJG90wCqx6jLlCNWl6Ruhbk5IIscVHWJ7jEzxd4THAjpPbUfznmE4HaWYs8k%2Ft9sWAi6PmqEzhIP38I2kQxJp9WpLvt6zVORYvL7Jr5hk%2B8pksxFTS7A4NwmEhzVOkSvSDvaI693EZ%2Bclv3GXODev6Jp3fqYT2EcNmfhp2rtrNTHEJRlsuVFkJaktGr8AvWI26yV%2BnRWYASXuDAk2MfDMfP7hjCjWLRmP%2FSpKn%2FnZQ%2BRbLk6QEKi%2Fkt%2Bo2cHR6%2B%2BDYr6Na0UublWZaCtuCg7e1H4VW2kMfr%2FzkWQk9H%2Fp2mh%2BuqgcLdf%2FsWQA%2BsGxfuMNFWWpkhKuDpvqbpW%2BRJBOTC0o6jEBjqkAdry62kCdUzR8jY4thrnc4P%2BmnUxBhZc%2Bwp46Zw8YttWTo633ddJsBxJfZLUedbwlcCri6Pzpt61%2FJ0monPDWwrzDvOjMCpWllvFZ0r2PDH9C8GDqptB1tE5FGSXqMDrbaiUo7CDLPXy9kAl0KwBTnyQPCdZ68aAj0n6BvqC5s1V9ji6o4CUtzLca3eGnv1Atyje8FY5yVPFhbaeR3vj8ARlzne6&X-Amz-Signature=2cd33d20a96122352def13e228fa24279af2556b1906ed6530791c7374b7abbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYWJXRI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN36QXLnscwPQEFZmfaBHa0DmC9E9lc%2FH6v8m9Typ4uwIhAMhxJFd76s5Lbh9MGp2wahf9W2jdUeftlVDYZSIN1bxUKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFxdnU2AIhB38MTAIq3AP4sjH59OFYBd0RPNqSxxI1%2BYY3oQF1wB%2FzEDXNRhwzQAEdVCCFK7Th2mB7X%2BqSR%2B1CruKYIPd9lp88kfe4FlBQyXNzhCTLBtLVzJGTxqHV8aEPZ%2BHBD0FMP6693OG2yQpFh74wESg8bOo5jfFd0CrBkhJd5mhRmbESB%2FI2wZB4zBPEhf%2FseoYAvKUO3shG36fsHWP9pp7CQ4tPMx3ORfS0L5J1W%2BKRmaT%2FJlWKjuMcFEn0VaznDi5oocL8W6WAWVa%2BAG5ohVu248sjs3%2BYnAMN2OAJBmvB1RqYmF0zdJG90wCqx6jLlCNWl6Ruhbk5IIscVHWJ7jEzxd4THAjpPbUfznmE4HaWYs8k%2Ft9sWAi6PmqEzhIP38I2kQxJp9WpLvt6zVORYvL7Jr5hk%2B8pksxFTS7A4NwmEhzVOkSvSDvaI693EZ%2Bclv3GXODev6Jp3fqYT2EcNmfhp2rtrNTHEJRlsuVFkJaktGr8AvWI26yV%2BnRWYASXuDAk2MfDMfP7hjCjWLRmP%2FSpKn%2FnZQ%2BRbLk6QEKi%2Fkt%2Bo2cHR6%2B%2BDYr6Na0UublWZaCtuCg7e1H4VW2kMfr%2FzkWQk9H%2Fp2mh%2BuqgcLdf%2FsWQA%2BsGxfuMNFWWpkhKuDpvqbpW%2BRJBOTC0o6jEBjqkAdry62kCdUzR8jY4thrnc4P%2BmnUxBhZc%2Bwp46Zw8YttWTo633ddJsBxJfZLUedbwlcCri6Pzpt61%2FJ0monPDWwrzDvOjMCpWllvFZ0r2PDH9C8GDqptB1tE5FGSXqMDrbaiUo7CDLPXy9kAl0KwBTnyQPCdZ68aAj0n6BvqC5s1V9ji6o4CUtzLca3eGnv1Atyje8FY5yVPFhbaeR3vj8ARlzne6&X-Amz-Signature=6b23c195af645c6f5ee0b65ab5726d569947eec689bdae328ec5fc77398dc819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYWJXRI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN36QXLnscwPQEFZmfaBHa0DmC9E9lc%2FH6v8m9Typ4uwIhAMhxJFd76s5Lbh9MGp2wahf9W2jdUeftlVDYZSIN1bxUKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFxdnU2AIhB38MTAIq3AP4sjH59OFYBd0RPNqSxxI1%2BYY3oQF1wB%2FzEDXNRhwzQAEdVCCFK7Th2mB7X%2BqSR%2B1CruKYIPd9lp88kfe4FlBQyXNzhCTLBtLVzJGTxqHV8aEPZ%2BHBD0FMP6693OG2yQpFh74wESg8bOo5jfFd0CrBkhJd5mhRmbESB%2FI2wZB4zBPEhf%2FseoYAvKUO3shG36fsHWP9pp7CQ4tPMx3ORfS0L5J1W%2BKRmaT%2FJlWKjuMcFEn0VaznDi5oocL8W6WAWVa%2BAG5ohVu248sjs3%2BYnAMN2OAJBmvB1RqYmF0zdJG90wCqx6jLlCNWl6Ruhbk5IIscVHWJ7jEzxd4THAjpPbUfznmE4HaWYs8k%2Ft9sWAi6PmqEzhIP38I2kQxJp9WpLvt6zVORYvL7Jr5hk%2B8pksxFTS7A4NwmEhzVOkSvSDvaI693EZ%2Bclv3GXODev6Jp3fqYT2EcNmfhp2rtrNTHEJRlsuVFkJaktGr8AvWI26yV%2BnRWYASXuDAk2MfDMfP7hjCjWLRmP%2FSpKn%2FnZQ%2BRbLk6QEKi%2Fkt%2Bo2cHR6%2B%2BDYr6Na0UublWZaCtuCg7e1H4VW2kMfr%2FzkWQk9H%2Fp2mh%2BuqgcLdf%2FsWQA%2BsGxfuMNFWWpkhKuDpvqbpW%2BRJBOTC0o6jEBjqkAdry62kCdUzR8jY4thrnc4P%2BmnUxBhZc%2Bwp46Zw8YttWTo633ddJsBxJfZLUedbwlcCri6Pzpt61%2FJ0monPDWwrzDvOjMCpWllvFZ0r2PDH9C8GDqptB1tE5FGSXqMDrbaiUo7CDLPXy9kAl0KwBTnyQPCdZ68aAj0n6BvqC5s1V9ji6o4CUtzLca3eGnv1Atyje8FY5yVPFhbaeR3vj8ARlzne6&X-Amz-Signature=f938a7f89c1d19cee10f3f4adf8b49660934c5182304125e6e813090391d5f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XETC6M5B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgBy080O%2FcwM4tnRyBZ%2BF1ySvQ8kuGRXrJ1L2grNtxlAiEAv6EeH8WrdGofV3bHm%2BwWHX3k%2FONRLf2DUUkoOwnmdiYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEodX5RO889lflvfoyrcA58HlpSh8IbW2%2F7lVu9M0WUolLbtRe%2BgTXg3icwm2S1UGsCVeUcKIYNBxlI9wCtwBoW%2Bmdye4xqST4Vwqth7VwW%2BE52XFdLpezMqXutZSUG6YJNusOjyc%2FAVoD%2F0RSV0wtlfHdeK0xfk8lEhPhyDkd88ZNUOWXav1GBRqpmpBkr8CKx%2BWEnr6fpcE2v56m8kWmqXHqiUrbg2t%2FqLHZW5x6Ydzjt%2FJwtxt5rl1DFGaF%2BWyRH8aKw4eQL1S70FOY48AWxHcWmY0X2gzAlb0a7J1aQ97Nc%2BtDrH98lkvge5eg5TdL1q41p1BgdtnQbNaA1B5ppmVc0lrYgpZd9tmaA9Dfozn5Ud55rwzbjjS2lrDrXq7KHpYigh5T%2F5ygEeiXCo2cc7yS17%2FEUTokqYn9fHQ4zsPeQsPE6TxS7qqMYKKLcYEtadoop1rx9RtjLmIsl8WA87Tr51Fo45BA%2BO7V9ciJxoXuWKafWlX4fzi%2Bw%2BMwF8DCKGaTuBPOcUpzq4jq1dPS7NB8pORTSFnJ2GFZYDorunOW62Qh0bkC9aFDJVuNr5ybx4s9GWJPsEy0sdYRMVCuyWW17y%2BtNHczjp3HChHKOPmTf0NemWzagHTMbg5zmd4yEnSUfM5SR1qqXvMIeiqMQGOqUB1NJ8LHCnJXf2n4ad013aUEDa%2FTleeJaXnGK0i2zQ7G%2BWjRFYjts2XUpaeSuKPO9rgkKiuJs%2B7M95OXMFQ5TXM22Dkmon9X714mT2QqAEdzLLunvNIYBaVVwPYszHmNqFe4fHQeBG2gncnKlKy1h9xVVtp9BOvEKGnf6wTQJnRpsccuLl%2BPi6TQZfgeTxInVtrT4cVM6V9VYQqNUjLiGEOB3SgE%2BJ&X-Amz-Signature=d7016fb1c8538440c9624269d450d488a42842eb1942975deeeee576b0aec72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYWJXRI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN36QXLnscwPQEFZmfaBHa0DmC9E9lc%2FH6v8m9Typ4uwIhAMhxJFd76s5Lbh9MGp2wahf9W2jdUeftlVDYZSIN1bxUKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFxdnU2AIhB38MTAIq3AP4sjH59OFYBd0RPNqSxxI1%2BYY3oQF1wB%2FzEDXNRhwzQAEdVCCFK7Th2mB7X%2BqSR%2B1CruKYIPd9lp88kfe4FlBQyXNzhCTLBtLVzJGTxqHV8aEPZ%2BHBD0FMP6693OG2yQpFh74wESg8bOo5jfFd0CrBkhJd5mhRmbESB%2FI2wZB4zBPEhf%2FseoYAvKUO3shG36fsHWP9pp7CQ4tPMx3ORfS0L5J1W%2BKRmaT%2FJlWKjuMcFEn0VaznDi5oocL8W6WAWVa%2BAG5ohVu248sjs3%2BYnAMN2OAJBmvB1RqYmF0zdJG90wCqx6jLlCNWl6Ruhbk5IIscVHWJ7jEzxd4THAjpPbUfznmE4HaWYs8k%2Ft9sWAi6PmqEzhIP38I2kQxJp9WpLvt6zVORYvL7Jr5hk%2B8pksxFTS7A4NwmEhzVOkSvSDvaI693EZ%2Bclv3GXODev6Jp3fqYT2EcNmfhp2rtrNTHEJRlsuVFkJaktGr8AvWI26yV%2BnRWYASXuDAk2MfDMfP7hjCjWLRmP%2FSpKn%2FnZQ%2BRbLk6QEKi%2Fkt%2Bo2cHR6%2B%2BDYr6Na0UublWZaCtuCg7e1H4VW2kMfr%2FzkWQk9H%2Fp2mh%2BuqgcLdf%2FsWQA%2BsGxfuMNFWWpkhKuDpvqbpW%2BRJBOTC0o6jEBjqkAdry62kCdUzR8jY4thrnc4P%2BmnUxBhZc%2Bwp46Zw8YttWTo633ddJsBxJfZLUedbwlcCri6Pzpt61%2FJ0monPDWwrzDvOjMCpWllvFZ0r2PDH9C8GDqptB1tE5FGSXqMDrbaiUo7CDLPXy9kAl0KwBTnyQPCdZ68aAj0n6BvqC5s1V9ji6o4CUtzLca3eGnv1Atyje8FY5yVPFhbaeR3vj8ARlzne6&X-Amz-Signature=91485341eed1ee1420b30dc951373f222977a8ab7dfface45ab33833f8fdb173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOT4S3WW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZrC2nllcUVQfe1E8Al9XapY9VassCuwdVEvDdr9kvzAIgbLE6fyMOxO1CHnrxjPRUTEDV4fSjUr5Lwps2v%2FnQDrwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKrN7PJ5wJyVtVIaCrcA8bQshkFSA0j6qu8XgbGwLqvbYOq8kv1Yt%2Ft2s0AWGG0VZ5iIWTOib2jeL%2BXOdORh4wesFJEeh7b%2FOBKJhl11oAe3vh77GN25UOnibWF54DHHWLBiBgiAdM4oGe2V4Hwbd9dBpU9PmRnBFsM0PDhbB4K5PbLC4HW5UPESvbZLY%2FnoRqnqrJI6y5c3oX8beyPXl2ZM0YPx9wV3b1XODaeWIMCMAO2WLuHataRXYe8Cly4ysbXh%2FrXqQDe%2FCBVTqcS2NqycSRbNX205VO6AbZYIaTxed4kzC0%2BBj4i6VJ2ExWDBdpBo%2FY%2B70s0X6dzQ%2BJUPrCxBFnbMlbQdv64OsU7mL74zqIh6xs1L5pvP4afGcU3LPeaOOvh4QEtDMDY7QbgYaHO8N0HXYB9FDFBjY9YjT1CiuXMi96d%2BucAqF14%2BF2M5C9DUpDFxkLg9miGYh%2BNJxlmUc1m3QWsxqf8JniMGPlK1kNuzWwoal2HeNPq2a4glco63V8Wqih%2B0GUwFDvk%2FK14LArNoTOizsjfa78ocaG790S5f5lcLx3oZiRZ3EMJ29aPLSqkoNiVac5tlQJj5x1loFJcIVxaDxdTpcIZrFk1%2BfPi5Rc3ExD72%2F8mDDBeRh7A3Vg9Hj9yeeu1MPahqMQGOqUB%2BDMJNUMpvZRPkz0rWTaDsQdsgf3KnAPndpIhxC%2B3h850BNDjEYgZbTeRtRHgEngIEeXqJMNMwrgAZIWml%2BL552XHB5Yc7%2B%2BWijZQnQumstgXGzvTCHZ7P7qzz6KRLJMVYBCJdfkRtbIGsWYbVe%2BjyUPF4945OmnLiYbRLknRFGVVnjxHoIf8uxRzi%2BSbr8uBn7gNmSFHS%2FEWT5BrZ%2FsPZUcfWCb%2B&X-Amz-Signature=d8e141d08c835e28dafa7f37185f7a7dccd0c13404c91bdfbc7613c1e54cf909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOT4S3WW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZrC2nllcUVQfe1E8Al9XapY9VassCuwdVEvDdr9kvzAIgbLE6fyMOxO1CHnrxjPRUTEDV4fSjUr5Lwps2v%2FnQDrwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKrN7PJ5wJyVtVIaCrcA8bQshkFSA0j6qu8XgbGwLqvbYOq8kv1Yt%2Ft2s0AWGG0VZ5iIWTOib2jeL%2BXOdORh4wesFJEeh7b%2FOBKJhl11oAe3vh77GN25UOnibWF54DHHWLBiBgiAdM4oGe2V4Hwbd9dBpU9PmRnBFsM0PDhbB4K5PbLC4HW5UPESvbZLY%2FnoRqnqrJI6y5c3oX8beyPXl2ZM0YPx9wV3b1XODaeWIMCMAO2WLuHataRXYe8Cly4ysbXh%2FrXqQDe%2FCBVTqcS2NqycSRbNX205VO6AbZYIaTxed4kzC0%2BBj4i6VJ2ExWDBdpBo%2FY%2B70s0X6dzQ%2BJUPrCxBFnbMlbQdv64OsU7mL74zqIh6xs1L5pvP4afGcU3LPeaOOvh4QEtDMDY7QbgYaHO8N0HXYB9FDFBjY9YjT1CiuXMi96d%2BucAqF14%2BF2M5C9DUpDFxkLg9miGYh%2BNJxlmUc1m3QWsxqf8JniMGPlK1kNuzWwoal2HeNPq2a4glco63V8Wqih%2B0GUwFDvk%2FK14LArNoTOizsjfa78ocaG790S5f5lcLx3oZiRZ3EMJ29aPLSqkoNiVac5tlQJj5x1loFJcIVxaDxdTpcIZrFk1%2BfPi5Rc3ExD72%2F8mDDBeRh7A3Vg9Hj9yeeu1MPahqMQGOqUB%2BDMJNUMpvZRPkz0rWTaDsQdsgf3KnAPndpIhxC%2B3h850BNDjEYgZbTeRtRHgEngIEeXqJMNMwrgAZIWml%2BL552XHB5Yc7%2B%2BWijZQnQumstgXGzvTCHZ7P7qzz6KRLJMVYBCJdfkRtbIGsWYbVe%2BjyUPF4945OmnLiYbRLknRFGVVnjxHoIf8uxRzi%2BSbr8uBn7gNmSFHS%2FEWT5BrZ%2FsPZUcfWCb%2B&X-Amz-Signature=9a66aba99046fbd60ba037c51df49c38f76f5d966a61bfcb4201bd389e7fe89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOT4S3WW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZrC2nllcUVQfe1E8Al9XapY9VassCuwdVEvDdr9kvzAIgbLE6fyMOxO1CHnrxjPRUTEDV4fSjUr5Lwps2v%2FnQDrwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKrN7PJ5wJyVtVIaCrcA8bQshkFSA0j6qu8XgbGwLqvbYOq8kv1Yt%2Ft2s0AWGG0VZ5iIWTOib2jeL%2BXOdORh4wesFJEeh7b%2FOBKJhl11oAe3vh77GN25UOnibWF54DHHWLBiBgiAdM4oGe2V4Hwbd9dBpU9PmRnBFsM0PDhbB4K5PbLC4HW5UPESvbZLY%2FnoRqnqrJI6y5c3oX8beyPXl2ZM0YPx9wV3b1XODaeWIMCMAO2WLuHataRXYe8Cly4ysbXh%2FrXqQDe%2FCBVTqcS2NqycSRbNX205VO6AbZYIaTxed4kzC0%2BBj4i6VJ2ExWDBdpBo%2FY%2B70s0X6dzQ%2BJUPrCxBFnbMlbQdv64OsU7mL74zqIh6xs1L5pvP4afGcU3LPeaOOvh4QEtDMDY7QbgYaHO8N0HXYB9FDFBjY9YjT1CiuXMi96d%2BucAqF14%2BF2M5C9DUpDFxkLg9miGYh%2BNJxlmUc1m3QWsxqf8JniMGPlK1kNuzWwoal2HeNPq2a4glco63V8Wqih%2B0GUwFDvk%2FK14LArNoTOizsjfa78ocaG790S5f5lcLx3oZiRZ3EMJ29aPLSqkoNiVac5tlQJj5x1loFJcIVxaDxdTpcIZrFk1%2BfPi5Rc3ExD72%2F8mDDBeRh7A3Vg9Hj9yeeu1MPahqMQGOqUB%2BDMJNUMpvZRPkz0rWTaDsQdsgf3KnAPndpIhxC%2B3h850BNDjEYgZbTeRtRHgEngIEeXqJMNMwrgAZIWml%2BL552XHB5Yc7%2B%2BWijZQnQumstgXGzvTCHZ7P7qzz6KRLJMVYBCJdfkRtbIGsWYbVe%2BjyUPF4945OmnLiYbRLknRFGVVnjxHoIf8uxRzi%2BSbr8uBn7gNmSFHS%2FEWT5BrZ%2FsPZUcfWCb%2B&X-Amz-Signature=84ad83d915f195ac15da339702b4958ebcf9fe3089acb5570f601e975ae847c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOT4S3WW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZrC2nllcUVQfe1E8Al9XapY9VassCuwdVEvDdr9kvzAIgbLE6fyMOxO1CHnrxjPRUTEDV4fSjUr5Lwps2v%2FnQDrwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKrN7PJ5wJyVtVIaCrcA8bQshkFSA0j6qu8XgbGwLqvbYOq8kv1Yt%2Ft2s0AWGG0VZ5iIWTOib2jeL%2BXOdORh4wesFJEeh7b%2FOBKJhl11oAe3vh77GN25UOnibWF54DHHWLBiBgiAdM4oGe2V4Hwbd9dBpU9PmRnBFsM0PDhbB4K5PbLC4HW5UPESvbZLY%2FnoRqnqrJI6y5c3oX8beyPXl2ZM0YPx9wV3b1XODaeWIMCMAO2WLuHataRXYe8Cly4ysbXh%2FrXqQDe%2FCBVTqcS2NqycSRbNX205VO6AbZYIaTxed4kzC0%2BBj4i6VJ2ExWDBdpBo%2FY%2B70s0X6dzQ%2BJUPrCxBFnbMlbQdv64OsU7mL74zqIh6xs1L5pvP4afGcU3LPeaOOvh4QEtDMDY7QbgYaHO8N0HXYB9FDFBjY9YjT1CiuXMi96d%2BucAqF14%2BF2M5C9DUpDFxkLg9miGYh%2BNJxlmUc1m3QWsxqf8JniMGPlK1kNuzWwoal2HeNPq2a4glco63V8Wqih%2B0GUwFDvk%2FK14LArNoTOizsjfa78ocaG790S5f5lcLx3oZiRZ3EMJ29aPLSqkoNiVac5tlQJj5x1loFJcIVxaDxdTpcIZrFk1%2BfPi5Rc3ExD72%2F8mDDBeRh7A3Vg9Hj9yeeu1MPahqMQGOqUB%2BDMJNUMpvZRPkz0rWTaDsQdsgf3KnAPndpIhxC%2B3h850BNDjEYgZbTeRtRHgEngIEeXqJMNMwrgAZIWml%2BL552XHB5Yc7%2B%2BWijZQnQumstgXGzvTCHZ7P7qzz6KRLJMVYBCJdfkRtbIGsWYbVe%2BjyUPF4945OmnLiYbRLknRFGVVnjxHoIf8uxRzi%2BSbr8uBn7gNmSFHS%2FEWT5BrZ%2FsPZUcfWCb%2B&X-Amz-Signature=88407db7c80da8b970ad1cf4728d4b010c2a55179b66556c4cf255feeeea40c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOT4S3WW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZrC2nllcUVQfe1E8Al9XapY9VassCuwdVEvDdr9kvzAIgbLE6fyMOxO1CHnrxjPRUTEDV4fSjUr5Lwps2v%2FnQDrwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKrN7PJ5wJyVtVIaCrcA8bQshkFSA0j6qu8XgbGwLqvbYOq8kv1Yt%2Ft2s0AWGG0VZ5iIWTOib2jeL%2BXOdORh4wesFJEeh7b%2FOBKJhl11oAe3vh77GN25UOnibWF54DHHWLBiBgiAdM4oGe2V4Hwbd9dBpU9PmRnBFsM0PDhbB4K5PbLC4HW5UPESvbZLY%2FnoRqnqrJI6y5c3oX8beyPXl2ZM0YPx9wV3b1XODaeWIMCMAO2WLuHataRXYe8Cly4ysbXh%2FrXqQDe%2FCBVTqcS2NqycSRbNX205VO6AbZYIaTxed4kzC0%2BBj4i6VJ2ExWDBdpBo%2FY%2B70s0X6dzQ%2BJUPrCxBFnbMlbQdv64OsU7mL74zqIh6xs1L5pvP4afGcU3LPeaOOvh4QEtDMDY7QbgYaHO8N0HXYB9FDFBjY9YjT1CiuXMi96d%2BucAqF14%2BF2M5C9DUpDFxkLg9miGYh%2BNJxlmUc1m3QWsxqf8JniMGPlK1kNuzWwoal2HeNPq2a4glco63V8Wqih%2B0GUwFDvk%2FK14LArNoTOizsjfa78ocaG790S5f5lcLx3oZiRZ3EMJ29aPLSqkoNiVac5tlQJj5x1loFJcIVxaDxdTpcIZrFk1%2BfPi5Rc3ExD72%2F8mDDBeRh7A3Vg9Hj9yeeu1MPahqMQGOqUB%2BDMJNUMpvZRPkz0rWTaDsQdsgf3KnAPndpIhxC%2B3h850BNDjEYgZbTeRtRHgEngIEeXqJMNMwrgAZIWml%2BL552XHB5Yc7%2B%2BWijZQnQumstgXGzvTCHZ7P7qzz6KRLJMVYBCJdfkRtbIGsWYbVe%2BjyUPF4945OmnLiYbRLknRFGVVnjxHoIf8uxRzi%2BSbr8uBn7gNmSFHS%2FEWT5BrZ%2FsPZUcfWCb%2B&X-Amz-Signature=393acb1f34df92a412eedc2efd4522a03fdc59ef2ea7d721632c591de6fd8333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOT4S3WW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZrC2nllcUVQfe1E8Al9XapY9VassCuwdVEvDdr9kvzAIgbLE6fyMOxO1CHnrxjPRUTEDV4fSjUr5Lwps2v%2FnQDrwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKrN7PJ5wJyVtVIaCrcA8bQshkFSA0j6qu8XgbGwLqvbYOq8kv1Yt%2Ft2s0AWGG0VZ5iIWTOib2jeL%2BXOdORh4wesFJEeh7b%2FOBKJhl11oAe3vh77GN25UOnibWF54DHHWLBiBgiAdM4oGe2V4Hwbd9dBpU9PmRnBFsM0PDhbB4K5PbLC4HW5UPESvbZLY%2FnoRqnqrJI6y5c3oX8beyPXl2ZM0YPx9wV3b1XODaeWIMCMAO2WLuHataRXYe8Cly4ysbXh%2FrXqQDe%2FCBVTqcS2NqycSRbNX205VO6AbZYIaTxed4kzC0%2BBj4i6VJ2ExWDBdpBo%2FY%2B70s0X6dzQ%2BJUPrCxBFnbMlbQdv64OsU7mL74zqIh6xs1L5pvP4afGcU3LPeaOOvh4QEtDMDY7QbgYaHO8N0HXYB9FDFBjY9YjT1CiuXMi96d%2BucAqF14%2BF2M5C9DUpDFxkLg9miGYh%2BNJxlmUc1m3QWsxqf8JniMGPlK1kNuzWwoal2HeNPq2a4glco63V8Wqih%2B0GUwFDvk%2FK14LArNoTOizsjfa78ocaG790S5f5lcLx3oZiRZ3EMJ29aPLSqkoNiVac5tlQJj5x1loFJcIVxaDxdTpcIZrFk1%2BfPi5Rc3ExD72%2F8mDDBeRh7A3Vg9Hj9yeeu1MPahqMQGOqUB%2BDMJNUMpvZRPkz0rWTaDsQdsgf3KnAPndpIhxC%2B3h850BNDjEYgZbTeRtRHgEngIEeXqJMNMwrgAZIWml%2BL552XHB5Yc7%2B%2BWijZQnQumstgXGzvTCHZ7P7qzz6KRLJMVYBCJdfkRtbIGsWYbVe%2BjyUPF4945OmnLiYbRLknRFGVVnjxHoIf8uxRzi%2BSbr8uBn7gNmSFHS%2FEWT5BrZ%2FsPZUcfWCb%2B&X-Amz-Signature=67b062153c47a12dc2819d3cca68488ffe0308efe9273e22b2dae705e03e617b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOT4S3WW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZrC2nllcUVQfe1E8Al9XapY9VassCuwdVEvDdr9kvzAIgbLE6fyMOxO1CHnrxjPRUTEDV4fSjUr5Lwps2v%2FnQDrwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKrN7PJ5wJyVtVIaCrcA8bQshkFSA0j6qu8XgbGwLqvbYOq8kv1Yt%2Ft2s0AWGG0VZ5iIWTOib2jeL%2BXOdORh4wesFJEeh7b%2FOBKJhl11oAe3vh77GN25UOnibWF54DHHWLBiBgiAdM4oGe2V4Hwbd9dBpU9PmRnBFsM0PDhbB4K5PbLC4HW5UPESvbZLY%2FnoRqnqrJI6y5c3oX8beyPXl2ZM0YPx9wV3b1XODaeWIMCMAO2WLuHataRXYe8Cly4ysbXh%2FrXqQDe%2FCBVTqcS2NqycSRbNX205VO6AbZYIaTxed4kzC0%2BBj4i6VJ2ExWDBdpBo%2FY%2B70s0X6dzQ%2BJUPrCxBFnbMlbQdv64OsU7mL74zqIh6xs1L5pvP4afGcU3LPeaOOvh4QEtDMDY7QbgYaHO8N0HXYB9FDFBjY9YjT1CiuXMi96d%2BucAqF14%2BF2M5C9DUpDFxkLg9miGYh%2BNJxlmUc1m3QWsxqf8JniMGPlK1kNuzWwoal2HeNPq2a4glco63V8Wqih%2B0GUwFDvk%2FK14LArNoTOizsjfa78ocaG790S5f5lcLx3oZiRZ3EMJ29aPLSqkoNiVac5tlQJj5x1loFJcIVxaDxdTpcIZrFk1%2BfPi5Rc3ExD72%2F8mDDBeRh7A3Vg9Hj9yeeu1MPahqMQGOqUB%2BDMJNUMpvZRPkz0rWTaDsQdsgf3KnAPndpIhxC%2B3h850BNDjEYgZbTeRtRHgEngIEeXqJMNMwrgAZIWml%2BL552XHB5Yc7%2B%2BWijZQnQumstgXGzvTCHZ7P7qzz6KRLJMVYBCJdfkRtbIGsWYbVe%2BjyUPF4945OmnLiYbRLknRFGVVnjxHoIf8uxRzi%2BSbr8uBn7gNmSFHS%2FEWT5BrZ%2FsPZUcfWCb%2B&X-Amz-Signature=08c0f7177df77cc09e684626be8c7e42427a36a468502bbb7395fa1fe5463db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOT4S3WW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZrC2nllcUVQfe1E8Al9XapY9VassCuwdVEvDdr9kvzAIgbLE6fyMOxO1CHnrxjPRUTEDV4fSjUr5Lwps2v%2FnQDrwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKrN7PJ5wJyVtVIaCrcA8bQshkFSA0j6qu8XgbGwLqvbYOq8kv1Yt%2Ft2s0AWGG0VZ5iIWTOib2jeL%2BXOdORh4wesFJEeh7b%2FOBKJhl11oAe3vh77GN25UOnibWF54DHHWLBiBgiAdM4oGe2V4Hwbd9dBpU9PmRnBFsM0PDhbB4K5PbLC4HW5UPESvbZLY%2FnoRqnqrJI6y5c3oX8beyPXl2ZM0YPx9wV3b1XODaeWIMCMAO2WLuHataRXYe8Cly4ysbXh%2FrXqQDe%2FCBVTqcS2NqycSRbNX205VO6AbZYIaTxed4kzC0%2BBj4i6VJ2ExWDBdpBo%2FY%2B70s0X6dzQ%2BJUPrCxBFnbMlbQdv64OsU7mL74zqIh6xs1L5pvP4afGcU3LPeaOOvh4QEtDMDY7QbgYaHO8N0HXYB9FDFBjY9YjT1CiuXMi96d%2BucAqF14%2BF2M5C9DUpDFxkLg9miGYh%2BNJxlmUc1m3QWsxqf8JniMGPlK1kNuzWwoal2HeNPq2a4glco63V8Wqih%2B0GUwFDvk%2FK14LArNoTOizsjfa78ocaG790S5f5lcLx3oZiRZ3EMJ29aPLSqkoNiVac5tlQJj5x1loFJcIVxaDxdTpcIZrFk1%2BfPi5Rc3ExD72%2F8mDDBeRh7A3Vg9Hj9yeeu1MPahqMQGOqUB%2BDMJNUMpvZRPkz0rWTaDsQdsgf3KnAPndpIhxC%2B3h850BNDjEYgZbTeRtRHgEngIEeXqJMNMwrgAZIWml%2BL552XHB5Yc7%2B%2BWijZQnQumstgXGzvTCHZ7P7qzz6KRLJMVYBCJdfkRtbIGsWYbVe%2BjyUPF4945OmnLiYbRLknRFGVVnjxHoIf8uxRzi%2BSbr8uBn7gNmSFHS%2FEWT5BrZ%2FsPZUcfWCb%2B&X-Amz-Signature=c4667e977ba764f9f614c18778416a232f6cb477fc81e6912bb0a46b00c09408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
