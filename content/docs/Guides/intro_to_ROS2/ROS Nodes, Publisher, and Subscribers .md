---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

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

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQ7QP2V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDPPEcCUqpv9NeRLRFEMqReQC2pQntfNffLWw6pkO0feAIgHkZX%2FCbcNPLmI0iz2PZSVec41W15xHlgHFrCg95no%2BsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIVyUAXalxIfupN2CrcA6V2QCagXhrY78BaDg0n9ggp9A889DW18G1i9j5wBvv%2BNCGDyU4EibkGtj4oqMGQzVxByQDqsOsx6s8aVfpBNcSdyq%2BTgx7fNFLR2yxnjHWs9Ek2blj7tQm4P9%2FrFTkofASlRxW6jcqcykLUVerJfM0hG%2Bf1Arhg7bObYzD%2BF%2FHOYA33KXOIjhMFM3PUXmI%2FQogwPqG8kNGft3Iy9y%2FotGsnpoOaX6B7piRtCVOOGIY%2Fyi8KY3wEtzy9%2BBwoiYKJO76WLrkzU7aNtFEkdXUynsIU1L9tmdMkyxThrcZMTyCsQAgsYaJX7WqiQDO9OrahQ%2BQ4Nvp5TxE0a36yGHDrKV%2FNa3Y%2BPKEFTAP50zl1aDtOmb9YD0l9Uvm8ek0N0jBRFF9oVoyd8qL3auEXtMYe5UUpjbyhxjXOkkwI6%2BOBuk9QxWUNf9zbUkxtmc737kMByMDY42twlUSap8BlFNB52A2PBpMxFxc6brqmHvhsnrqlGK85Yy7z9kKSV7ZYkYlfhgoN5ymO6FskhXEtRYAA3n3Vo4bXfx1eiEUUUlpJ%2Fp%2BzZBECAxoE3Q%2FfBX1X2vKeDqreiPOWfxaCDWcR5AnpJXMbpMN3gxgnCc3Q0iD66Tnd6B8Dqg4qZyHaglYNMNbe8MEGOqUBDVZ1LsAwrY7fr6B6s0RRwT9Xvf3aVxqOPlFlWqNlk94o0Bl2aPblPCLwopaOt2xvOv97DqyTy3eeS42pyqo5JAhU6vM1OLiPYqWF8coaMp64m%2F0%2BDsvcGF0sMJ95ZpbV2TJM0lPlAm%2FDCn9Z%2FevMUwMskGJhMVLAagV%2B5aQroK%2BOzq3nJWtxYBusixgjUZvYwRrZK8XCcD3MuNClMFQYKrbKH7bw&X-Amz-Signature=1c16e03a544a961602c2d7b20548bf6b3d76c710fb765a27b8679b24e5f5a210&X-Amz-SignedHeaders=host&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQ7QP2V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDPPEcCUqpv9NeRLRFEMqReQC2pQntfNffLWw6pkO0feAIgHkZX%2FCbcNPLmI0iz2PZSVec41W15xHlgHFrCg95no%2BsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIVyUAXalxIfupN2CrcA6V2QCagXhrY78BaDg0n9ggp9A889DW18G1i9j5wBvv%2BNCGDyU4EibkGtj4oqMGQzVxByQDqsOsx6s8aVfpBNcSdyq%2BTgx7fNFLR2yxnjHWs9Ek2blj7tQm4P9%2FrFTkofASlRxW6jcqcykLUVerJfM0hG%2Bf1Arhg7bObYzD%2BF%2FHOYA33KXOIjhMFM3PUXmI%2FQogwPqG8kNGft3Iy9y%2FotGsnpoOaX6B7piRtCVOOGIY%2Fyi8KY3wEtzy9%2BBwoiYKJO76WLrkzU7aNtFEkdXUynsIU1L9tmdMkyxThrcZMTyCsQAgsYaJX7WqiQDO9OrahQ%2BQ4Nvp5TxE0a36yGHDrKV%2FNa3Y%2BPKEFTAP50zl1aDtOmb9YD0l9Uvm8ek0N0jBRFF9oVoyd8qL3auEXtMYe5UUpjbyhxjXOkkwI6%2BOBuk9QxWUNf9zbUkxtmc737kMByMDY42twlUSap8BlFNB52A2PBpMxFxc6brqmHvhsnrqlGK85Yy7z9kKSV7ZYkYlfhgoN5ymO6FskhXEtRYAA3n3Vo4bXfx1eiEUUUlpJ%2Fp%2BzZBECAxoE3Q%2FfBX1X2vKeDqreiPOWfxaCDWcR5AnpJXMbpMN3gxgnCc3Q0iD66Tnd6B8Dqg4qZyHaglYNMNbe8MEGOqUBDVZ1LsAwrY7fr6B6s0RRwT9Xvf3aVxqOPlFlWqNlk94o0Bl2aPblPCLwopaOt2xvOv97DqyTy3eeS42pyqo5JAhU6vM1OLiPYqWF8coaMp64m%2F0%2BDsvcGF0sMJ95ZpbV2TJM0lPlAm%2FDCn9Z%2FevMUwMskGJhMVLAagV%2B5aQroK%2BOzq3nJWtxYBusixgjUZvYwRrZK8XCcD3MuNClMFQYKrbKH7bw&X-Amz-Signature=05721545371c54078070b4047e2c6814f0f7c4588581cc26b94e16db9a13ea29&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQ7QP2V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDPPEcCUqpv9NeRLRFEMqReQC2pQntfNffLWw6pkO0feAIgHkZX%2FCbcNPLmI0iz2PZSVec41W15xHlgHFrCg95no%2BsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIVyUAXalxIfupN2CrcA6V2QCagXhrY78BaDg0n9ggp9A889DW18G1i9j5wBvv%2BNCGDyU4EibkGtj4oqMGQzVxByQDqsOsx6s8aVfpBNcSdyq%2BTgx7fNFLR2yxnjHWs9Ek2blj7tQm4P9%2FrFTkofASlRxW6jcqcykLUVerJfM0hG%2Bf1Arhg7bObYzD%2BF%2FHOYA33KXOIjhMFM3PUXmI%2FQogwPqG8kNGft3Iy9y%2FotGsnpoOaX6B7piRtCVOOGIY%2Fyi8KY3wEtzy9%2BBwoiYKJO76WLrkzU7aNtFEkdXUynsIU1L9tmdMkyxThrcZMTyCsQAgsYaJX7WqiQDO9OrahQ%2BQ4Nvp5TxE0a36yGHDrKV%2FNa3Y%2BPKEFTAP50zl1aDtOmb9YD0l9Uvm8ek0N0jBRFF9oVoyd8qL3auEXtMYe5UUpjbyhxjXOkkwI6%2BOBuk9QxWUNf9zbUkxtmc737kMByMDY42twlUSap8BlFNB52A2PBpMxFxc6brqmHvhsnrqlGK85Yy7z9kKSV7ZYkYlfhgoN5ymO6FskhXEtRYAA3n3Vo4bXfx1eiEUUUlpJ%2Fp%2BzZBECAxoE3Q%2FfBX1X2vKeDqreiPOWfxaCDWcR5AnpJXMbpMN3gxgnCc3Q0iD66Tnd6B8Dqg4qZyHaglYNMNbe8MEGOqUBDVZ1LsAwrY7fr6B6s0RRwT9Xvf3aVxqOPlFlWqNlk94o0Bl2aPblPCLwopaOt2xvOv97DqyTy3eeS42pyqo5JAhU6vM1OLiPYqWF8coaMp64m%2F0%2BDsvcGF0sMJ95ZpbV2TJM0lPlAm%2FDCn9Z%2FevMUwMskGJhMVLAagV%2B5aQroK%2BOzq3nJWtxYBusixgjUZvYwRrZK8XCcD3MuNClMFQYKrbKH7bw&X-Amz-Signature=38248afff8ee7355da8e42d91bf5d27672e2dfbb1ec783e6caee12bea57e8390&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQ7QP2V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDPPEcCUqpv9NeRLRFEMqReQC2pQntfNffLWw6pkO0feAIgHkZX%2FCbcNPLmI0iz2PZSVec41W15xHlgHFrCg95no%2BsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIVyUAXalxIfupN2CrcA6V2QCagXhrY78BaDg0n9ggp9A889DW18G1i9j5wBvv%2BNCGDyU4EibkGtj4oqMGQzVxByQDqsOsx6s8aVfpBNcSdyq%2BTgx7fNFLR2yxnjHWs9Ek2blj7tQm4P9%2FrFTkofASlRxW6jcqcykLUVerJfM0hG%2Bf1Arhg7bObYzD%2BF%2FHOYA33KXOIjhMFM3PUXmI%2FQogwPqG8kNGft3Iy9y%2FotGsnpoOaX6B7piRtCVOOGIY%2Fyi8KY3wEtzy9%2BBwoiYKJO76WLrkzU7aNtFEkdXUynsIU1L9tmdMkyxThrcZMTyCsQAgsYaJX7WqiQDO9OrahQ%2BQ4Nvp5TxE0a36yGHDrKV%2FNa3Y%2BPKEFTAP50zl1aDtOmb9YD0l9Uvm8ek0N0jBRFF9oVoyd8qL3auEXtMYe5UUpjbyhxjXOkkwI6%2BOBuk9QxWUNf9zbUkxtmc737kMByMDY42twlUSap8BlFNB52A2PBpMxFxc6brqmHvhsnrqlGK85Yy7z9kKSV7ZYkYlfhgoN5ymO6FskhXEtRYAA3n3Vo4bXfx1eiEUUUlpJ%2Fp%2BzZBECAxoE3Q%2FfBX1X2vKeDqreiPOWfxaCDWcR5AnpJXMbpMN3gxgnCc3Q0iD66Tnd6B8Dqg4qZyHaglYNMNbe8MEGOqUBDVZ1LsAwrY7fr6B6s0RRwT9Xvf3aVxqOPlFlWqNlk94o0Bl2aPblPCLwopaOt2xvOv97DqyTy3eeS42pyqo5JAhU6vM1OLiPYqWF8coaMp64m%2F0%2BDsvcGF0sMJ95ZpbV2TJM0lPlAm%2FDCn9Z%2FevMUwMskGJhMVLAagV%2B5aQroK%2BOzq3nJWtxYBusixgjUZvYwRrZK8XCcD3MuNClMFQYKrbKH7bw&X-Amz-Signature=863b74d7a392fb92f0199204be94d411cda8f8fd80e3e085083ab5018130c637&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQ7QP2V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDPPEcCUqpv9NeRLRFEMqReQC2pQntfNffLWw6pkO0feAIgHkZX%2FCbcNPLmI0iz2PZSVec41W15xHlgHFrCg95no%2BsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIVyUAXalxIfupN2CrcA6V2QCagXhrY78BaDg0n9ggp9A889DW18G1i9j5wBvv%2BNCGDyU4EibkGtj4oqMGQzVxByQDqsOsx6s8aVfpBNcSdyq%2BTgx7fNFLR2yxnjHWs9Ek2blj7tQm4P9%2FrFTkofASlRxW6jcqcykLUVerJfM0hG%2Bf1Arhg7bObYzD%2BF%2FHOYA33KXOIjhMFM3PUXmI%2FQogwPqG8kNGft3Iy9y%2FotGsnpoOaX6B7piRtCVOOGIY%2Fyi8KY3wEtzy9%2BBwoiYKJO76WLrkzU7aNtFEkdXUynsIU1L9tmdMkyxThrcZMTyCsQAgsYaJX7WqiQDO9OrahQ%2BQ4Nvp5TxE0a36yGHDrKV%2FNa3Y%2BPKEFTAP50zl1aDtOmb9YD0l9Uvm8ek0N0jBRFF9oVoyd8qL3auEXtMYe5UUpjbyhxjXOkkwI6%2BOBuk9QxWUNf9zbUkxtmc737kMByMDY42twlUSap8BlFNB52A2PBpMxFxc6brqmHvhsnrqlGK85Yy7z9kKSV7ZYkYlfhgoN5ymO6FskhXEtRYAA3n3Vo4bXfx1eiEUUUlpJ%2Fp%2BzZBECAxoE3Q%2FfBX1X2vKeDqreiPOWfxaCDWcR5AnpJXMbpMN3gxgnCc3Q0iD66Tnd6B8Dqg4qZyHaglYNMNbe8MEGOqUBDVZ1LsAwrY7fr6B6s0RRwT9Xvf3aVxqOPlFlWqNlk94o0Bl2aPblPCLwopaOt2xvOv97DqyTy3eeS42pyqo5JAhU6vM1OLiPYqWF8coaMp64m%2F0%2BDsvcGF0sMJ95ZpbV2TJM0lPlAm%2FDCn9Z%2FevMUwMskGJhMVLAagV%2B5aQroK%2BOzq3nJWtxYBusixgjUZvYwRrZK8XCcD3MuNClMFQYKrbKH7bw&X-Amz-Signature=5332c4b91d0ca488825fd2a0ad2cf60d5d7f9ff65af7618e67c345a8df127d70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQ7QP2V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDPPEcCUqpv9NeRLRFEMqReQC2pQntfNffLWw6pkO0feAIgHkZX%2FCbcNPLmI0iz2PZSVec41W15xHlgHFrCg95no%2BsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIVyUAXalxIfupN2CrcA6V2QCagXhrY78BaDg0n9ggp9A889DW18G1i9j5wBvv%2BNCGDyU4EibkGtj4oqMGQzVxByQDqsOsx6s8aVfpBNcSdyq%2BTgx7fNFLR2yxnjHWs9Ek2blj7tQm4P9%2FrFTkofASlRxW6jcqcykLUVerJfM0hG%2Bf1Arhg7bObYzD%2BF%2FHOYA33KXOIjhMFM3PUXmI%2FQogwPqG8kNGft3Iy9y%2FotGsnpoOaX6B7piRtCVOOGIY%2Fyi8KY3wEtzy9%2BBwoiYKJO76WLrkzU7aNtFEkdXUynsIU1L9tmdMkyxThrcZMTyCsQAgsYaJX7WqiQDO9OrahQ%2BQ4Nvp5TxE0a36yGHDrKV%2FNa3Y%2BPKEFTAP50zl1aDtOmb9YD0l9Uvm8ek0N0jBRFF9oVoyd8qL3auEXtMYe5UUpjbyhxjXOkkwI6%2BOBuk9QxWUNf9zbUkxtmc737kMByMDY42twlUSap8BlFNB52A2PBpMxFxc6brqmHvhsnrqlGK85Yy7z9kKSV7ZYkYlfhgoN5ymO6FskhXEtRYAA3n3Vo4bXfx1eiEUUUlpJ%2Fp%2BzZBECAxoE3Q%2FfBX1X2vKeDqreiPOWfxaCDWcR5AnpJXMbpMN3gxgnCc3Q0iD66Tnd6B8Dqg4qZyHaglYNMNbe8MEGOqUBDVZ1LsAwrY7fr6B6s0RRwT9Xvf3aVxqOPlFlWqNlk94o0Bl2aPblPCLwopaOt2xvOv97DqyTy3eeS42pyqo5JAhU6vM1OLiPYqWF8coaMp64m%2F0%2BDsvcGF0sMJ95ZpbV2TJM0lPlAm%2FDCn9Z%2FevMUwMskGJhMVLAagV%2B5aQroK%2BOzq3nJWtxYBusixgjUZvYwRrZK8XCcD3MuNClMFQYKrbKH7bw&X-Amz-Signature=93cc6587b753597ac652f498e2f306b06749abac14a6245a6922cb2a06e03caa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQ7QP2V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDPPEcCUqpv9NeRLRFEMqReQC2pQntfNffLWw6pkO0feAIgHkZX%2FCbcNPLmI0iz2PZSVec41W15xHlgHFrCg95no%2BsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIVyUAXalxIfupN2CrcA6V2QCagXhrY78BaDg0n9ggp9A889DW18G1i9j5wBvv%2BNCGDyU4EibkGtj4oqMGQzVxByQDqsOsx6s8aVfpBNcSdyq%2BTgx7fNFLR2yxnjHWs9Ek2blj7tQm4P9%2FrFTkofASlRxW6jcqcykLUVerJfM0hG%2Bf1Arhg7bObYzD%2BF%2FHOYA33KXOIjhMFM3PUXmI%2FQogwPqG8kNGft3Iy9y%2FotGsnpoOaX6B7piRtCVOOGIY%2Fyi8KY3wEtzy9%2BBwoiYKJO76WLrkzU7aNtFEkdXUynsIU1L9tmdMkyxThrcZMTyCsQAgsYaJX7WqiQDO9OrahQ%2BQ4Nvp5TxE0a36yGHDrKV%2FNa3Y%2BPKEFTAP50zl1aDtOmb9YD0l9Uvm8ek0N0jBRFF9oVoyd8qL3auEXtMYe5UUpjbyhxjXOkkwI6%2BOBuk9QxWUNf9zbUkxtmc737kMByMDY42twlUSap8BlFNB52A2PBpMxFxc6brqmHvhsnrqlGK85Yy7z9kKSV7ZYkYlfhgoN5ymO6FskhXEtRYAA3n3Vo4bXfx1eiEUUUlpJ%2Fp%2BzZBECAxoE3Q%2FfBX1X2vKeDqreiPOWfxaCDWcR5AnpJXMbpMN3gxgnCc3Q0iD66Tnd6B8Dqg4qZyHaglYNMNbe8MEGOqUBDVZ1LsAwrY7fr6B6s0RRwT9Xvf3aVxqOPlFlWqNlk94o0Bl2aPblPCLwopaOt2xvOv97DqyTy3eeS42pyqo5JAhU6vM1OLiPYqWF8coaMp64m%2F0%2BDsvcGF0sMJ95ZpbV2TJM0lPlAm%2FDCn9Z%2FevMUwMskGJhMVLAagV%2B5aQroK%2BOzq3nJWtxYBusixgjUZvYwRrZK8XCcD3MuNClMFQYKrbKH7bw&X-Amz-Signature=c3f11e92e535bba7a01aad039b2a8ba774467a496088668bc8e330edcc83269e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQ7QP2V%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDPPEcCUqpv9NeRLRFEMqReQC2pQntfNffLWw6pkO0feAIgHkZX%2FCbcNPLmI0iz2PZSVec41W15xHlgHFrCg95no%2BsqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIVyUAXalxIfupN2CrcA6V2QCagXhrY78BaDg0n9ggp9A889DW18G1i9j5wBvv%2BNCGDyU4EibkGtj4oqMGQzVxByQDqsOsx6s8aVfpBNcSdyq%2BTgx7fNFLR2yxnjHWs9Ek2blj7tQm4P9%2FrFTkofASlRxW6jcqcykLUVerJfM0hG%2Bf1Arhg7bObYzD%2BF%2FHOYA33KXOIjhMFM3PUXmI%2FQogwPqG8kNGft3Iy9y%2FotGsnpoOaX6B7piRtCVOOGIY%2Fyi8KY3wEtzy9%2BBwoiYKJO76WLrkzU7aNtFEkdXUynsIU1L9tmdMkyxThrcZMTyCsQAgsYaJX7WqiQDO9OrahQ%2BQ4Nvp5TxE0a36yGHDrKV%2FNa3Y%2BPKEFTAP50zl1aDtOmb9YD0l9Uvm8ek0N0jBRFF9oVoyd8qL3auEXtMYe5UUpjbyhxjXOkkwI6%2BOBuk9QxWUNf9zbUkxtmc737kMByMDY42twlUSap8BlFNB52A2PBpMxFxc6brqmHvhsnrqlGK85Yy7z9kKSV7ZYkYlfhgoN5ymO6FskhXEtRYAA3n3Vo4bXfx1eiEUUUlpJ%2Fp%2BzZBECAxoE3Q%2FfBX1X2vKeDqreiPOWfxaCDWcR5AnpJXMbpMN3gxgnCc3Q0iD66Tnd6B8Dqg4qZyHaglYNMNbe8MEGOqUBDVZ1LsAwrY7fr6B6s0RRwT9Xvf3aVxqOPlFlWqNlk94o0Bl2aPblPCLwopaOt2xvOv97DqyTy3eeS42pyqo5JAhU6vM1OLiPYqWF8coaMp64m%2F0%2BDsvcGF0sMJ95ZpbV2TJM0lPlAm%2FDCn9Z%2FevMUwMskGJhMVLAagV%2B5aQroK%2BOzq3nJWtxYBusixgjUZvYwRrZK8XCcD3MuNClMFQYKrbKH7bw&X-Amz-Signature=fb03a2edae7c057e31c78480f2d47646ade2143f05e3fd85bf3531e32dc78f42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
