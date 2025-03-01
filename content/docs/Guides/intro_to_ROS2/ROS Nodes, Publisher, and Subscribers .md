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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOH64IJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG9C1Pf2bCgEFrL%2BdUF42IzhiSltwzzZNgmWfdchrPNeAiEAuj3ax3LHDJvN2rlijnOrQQ1mB8MDw%2F78%2BnE1Udfrbk0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAitL5Gv13OvGyv2SrcA0zGQrM4nKTWvFJ08j0tVp2Qzvae4Rpm5Rkjh6MPmeEeOkmhLquXRgoOnnnxjg%2F50bQxdPwEFwvvOdd%2FdQTWGfSa66%2BeK5cAEN1gFmIylALa9tUh4hTNCxhOfoPOub7rtZDtNHzDL6dcfMvuDUtjXirvHj2Z0WqBBgPqB%2F275k5ZsChlM4eVifPuSwOdTCqYSK7qQdlTlcyyDWal2vfAHwLyHRPEoZEN4EKmXNn3qiZtpDMoTVz64%2BDwWagQ6GG9gPXNoMf0Imq0ZU01iVjm3EbYXCOPkYdULk615korCjkANZeu6ni92NhDStapv1Y8uSMbLeQe9d3cFNWygcyVeai1oWsK3Y3jxHn7p6c%2FLYO%2F6VtfsPaYWfjcHMwnxpTl8epscaOhtZ9umt%2BbcL5IydP5sJfI4%2Bxk9Vi4FPS29qcAPcOGvhU4FtvmxgjxkuNX0ArB7FdMFQK9%2FcHgLcoIC1GR84DmOZq%2B6Moe8kRo%2FVSH51F7cS5HbelDioyHwFX%2F4cVpaxC%2F0%2Blsaqq0DwK%2BK4muwxienX3AIpyZFeDyN7bL%2BHZG20TmFdyi7BiLE66Lk3FDLHiS86thlKzFPVtwUBoAh6Y6FkUraStmW22mdMacON%2Flgzp2MxzMyz0nMICVjL4GOqUB6fzqKTCJTw%2Bu4ls1zreHQoCc8WGLb4zgoeOMPQq0Ywetdw3ACiMSuEQmx023BBldIyC70kZ2JXRMnPk6VCf6tFMKTxny1R5gPEs%2FeHkJkB3j0cAvU4Ul3MieqFRXXM%2BWpkzSiA5DfvocNOC9taJu3fzx2b4HXYOjdufybWhh8aLgtEINbVkWujn6DnJDe4riDvDhDarcIt%2F1qftWGG3%2F2U%2B2GfgT&X-Amz-Signature=3aa4b95919833aa0e0438c1743b624bc61019243aa6487a7b70e1fffce332e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOH64IJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG9C1Pf2bCgEFrL%2BdUF42IzhiSltwzzZNgmWfdchrPNeAiEAuj3ax3LHDJvN2rlijnOrQQ1mB8MDw%2F78%2BnE1Udfrbk0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAitL5Gv13OvGyv2SrcA0zGQrM4nKTWvFJ08j0tVp2Qzvae4Rpm5Rkjh6MPmeEeOkmhLquXRgoOnnnxjg%2F50bQxdPwEFwvvOdd%2FdQTWGfSa66%2BeK5cAEN1gFmIylALa9tUh4hTNCxhOfoPOub7rtZDtNHzDL6dcfMvuDUtjXirvHj2Z0WqBBgPqB%2F275k5ZsChlM4eVifPuSwOdTCqYSK7qQdlTlcyyDWal2vfAHwLyHRPEoZEN4EKmXNn3qiZtpDMoTVz64%2BDwWagQ6GG9gPXNoMf0Imq0ZU01iVjm3EbYXCOPkYdULk615korCjkANZeu6ni92NhDStapv1Y8uSMbLeQe9d3cFNWygcyVeai1oWsK3Y3jxHn7p6c%2FLYO%2F6VtfsPaYWfjcHMwnxpTl8epscaOhtZ9umt%2BbcL5IydP5sJfI4%2Bxk9Vi4FPS29qcAPcOGvhU4FtvmxgjxkuNX0ArB7FdMFQK9%2FcHgLcoIC1GR84DmOZq%2B6Moe8kRo%2FVSH51F7cS5HbelDioyHwFX%2F4cVpaxC%2F0%2Blsaqq0DwK%2BK4muwxienX3AIpyZFeDyN7bL%2BHZG20TmFdyi7BiLE66Lk3FDLHiS86thlKzFPVtwUBoAh6Y6FkUraStmW22mdMacON%2Flgzp2MxzMyz0nMICVjL4GOqUB6fzqKTCJTw%2Bu4ls1zreHQoCc8WGLb4zgoeOMPQq0Ywetdw3ACiMSuEQmx023BBldIyC70kZ2JXRMnPk6VCf6tFMKTxny1R5gPEs%2FeHkJkB3j0cAvU4Ul3MieqFRXXM%2BWpkzSiA5DfvocNOC9taJu3fzx2b4HXYOjdufybWhh8aLgtEINbVkWujn6DnJDe4riDvDhDarcIt%2F1qftWGG3%2F2U%2B2GfgT&X-Amz-Signature=b4abf55ab22a94b8ff6ea1e30b6448b9b70b846a4338e381131f8f2870171148&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOH64IJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG9C1Pf2bCgEFrL%2BdUF42IzhiSltwzzZNgmWfdchrPNeAiEAuj3ax3LHDJvN2rlijnOrQQ1mB8MDw%2F78%2BnE1Udfrbk0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAitL5Gv13OvGyv2SrcA0zGQrM4nKTWvFJ08j0tVp2Qzvae4Rpm5Rkjh6MPmeEeOkmhLquXRgoOnnnxjg%2F50bQxdPwEFwvvOdd%2FdQTWGfSa66%2BeK5cAEN1gFmIylALa9tUh4hTNCxhOfoPOub7rtZDtNHzDL6dcfMvuDUtjXirvHj2Z0WqBBgPqB%2F275k5ZsChlM4eVifPuSwOdTCqYSK7qQdlTlcyyDWal2vfAHwLyHRPEoZEN4EKmXNn3qiZtpDMoTVz64%2BDwWagQ6GG9gPXNoMf0Imq0ZU01iVjm3EbYXCOPkYdULk615korCjkANZeu6ni92NhDStapv1Y8uSMbLeQe9d3cFNWygcyVeai1oWsK3Y3jxHn7p6c%2FLYO%2F6VtfsPaYWfjcHMwnxpTl8epscaOhtZ9umt%2BbcL5IydP5sJfI4%2Bxk9Vi4FPS29qcAPcOGvhU4FtvmxgjxkuNX0ArB7FdMFQK9%2FcHgLcoIC1GR84DmOZq%2B6Moe8kRo%2FVSH51F7cS5HbelDioyHwFX%2F4cVpaxC%2F0%2Blsaqq0DwK%2BK4muwxienX3AIpyZFeDyN7bL%2BHZG20TmFdyi7BiLE66Lk3FDLHiS86thlKzFPVtwUBoAh6Y6FkUraStmW22mdMacON%2Flgzp2MxzMyz0nMICVjL4GOqUB6fzqKTCJTw%2Bu4ls1zreHQoCc8WGLb4zgoeOMPQq0Ywetdw3ACiMSuEQmx023BBldIyC70kZ2JXRMnPk6VCf6tFMKTxny1R5gPEs%2FeHkJkB3j0cAvU4Ul3MieqFRXXM%2BWpkzSiA5DfvocNOC9taJu3fzx2b4HXYOjdufybWhh8aLgtEINbVkWujn6DnJDe4riDvDhDarcIt%2F1qftWGG3%2F2U%2B2GfgT&X-Amz-Signature=251b5020c5d44841cb33f4923f2e0ce4328a29548748ceea076dda0cec0758f2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOH64IJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG9C1Pf2bCgEFrL%2BdUF42IzhiSltwzzZNgmWfdchrPNeAiEAuj3ax3LHDJvN2rlijnOrQQ1mB8MDw%2F78%2BnE1Udfrbk0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAitL5Gv13OvGyv2SrcA0zGQrM4nKTWvFJ08j0tVp2Qzvae4Rpm5Rkjh6MPmeEeOkmhLquXRgoOnnnxjg%2F50bQxdPwEFwvvOdd%2FdQTWGfSa66%2BeK5cAEN1gFmIylALa9tUh4hTNCxhOfoPOub7rtZDtNHzDL6dcfMvuDUtjXirvHj2Z0WqBBgPqB%2F275k5ZsChlM4eVifPuSwOdTCqYSK7qQdlTlcyyDWal2vfAHwLyHRPEoZEN4EKmXNn3qiZtpDMoTVz64%2BDwWagQ6GG9gPXNoMf0Imq0ZU01iVjm3EbYXCOPkYdULk615korCjkANZeu6ni92NhDStapv1Y8uSMbLeQe9d3cFNWygcyVeai1oWsK3Y3jxHn7p6c%2FLYO%2F6VtfsPaYWfjcHMwnxpTl8epscaOhtZ9umt%2BbcL5IydP5sJfI4%2Bxk9Vi4FPS29qcAPcOGvhU4FtvmxgjxkuNX0ArB7FdMFQK9%2FcHgLcoIC1GR84DmOZq%2B6Moe8kRo%2FVSH51F7cS5HbelDioyHwFX%2F4cVpaxC%2F0%2Blsaqq0DwK%2BK4muwxienX3AIpyZFeDyN7bL%2BHZG20TmFdyi7BiLE66Lk3FDLHiS86thlKzFPVtwUBoAh6Y6FkUraStmW22mdMacON%2Flgzp2MxzMyz0nMICVjL4GOqUB6fzqKTCJTw%2Bu4ls1zreHQoCc8WGLb4zgoeOMPQq0Ywetdw3ACiMSuEQmx023BBldIyC70kZ2JXRMnPk6VCf6tFMKTxny1R5gPEs%2FeHkJkB3j0cAvU4Ul3MieqFRXXM%2BWpkzSiA5DfvocNOC9taJu3fzx2b4HXYOjdufybWhh8aLgtEINbVkWujn6DnJDe4riDvDhDarcIt%2F1qftWGG3%2F2U%2B2GfgT&X-Amz-Signature=fcf7bf269eae10f0fc2b76904db3de6c749c90a652b039ed8952565758d7c4f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOH64IJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG9C1Pf2bCgEFrL%2BdUF42IzhiSltwzzZNgmWfdchrPNeAiEAuj3ax3LHDJvN2rlijnOrQQ1mB8MDw%2F78%2BnE1Udfrbk0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAitL5Gv13OvGyv2SrcA0zGQrM4nKTWvFJ08j0tVp2Qzvae4Rpm5Rkjh6MPmeEeOkmhLquXRgoOnnnxjg%2F50bQxdPwEFwvvOdd%2FdQTWGfSa66%2BeK5cAEN1gFmIylALa9tUh4hTNCxhOfoPOub7rtZDtNHzDL6dcfMvuDUtjXirvHj2Z0WqBBgPqB%2F275k5ZsChlM4eVifPuSwOdTCqYSK7qQdlTlcyyDWal2vfAHwLyHRPEoZEN4EKmXNn3qiZtpDMoTVz64%2BDwWagQ6GG9gPXNoMf0Imq0ZU01iVjm3EbYXCOPkYdULk615korCjkANZeu6ni92NhDStapv1Y8uSMbLeQe9d3cFNWygcyVeai1oWsK3Y3jxHn7p6c%2FLYO%2F6VtfsPaYWfjcHMwnxpTl8epscaOhtZ9umt%2BbcL5IydP5sJfI4%2Bxk9Vi4FPS29qcAPcOGvhU4FtvmxgjxkuNX0ArB7FdMFQK9%2FcHgLcoIC1GR84DmOZq%2B6Moe8kRo%2FVSH51F7cS5HbelDioyHwFX%2F4cVpaxC%2F0%2Blsaqq0DwK%2BK4muwxienX3AIpyZFeDyN7bL%2BHZG20TmFdyi7BiLE66Lk3FDLHiS86thlKzFPVtwUBoAh6Y6FkUraStmW22mdMacON%2Flgzp2MxzMyz0nMICVjL4GOqUB6fzqKTCJTw%2Bu4ls1zreHQoCc8WGLb4zgoeOMPQq0Ywetdw3ACiMSuEQmx023BBldIyC70kZ2JXRMnPk6VCf6tFMKTxny1R5gPEs%2FeHkJkB3j0cAvU4Ul3MieqFRXXM%2BWpkzSiA5DfvocNOC9taJu3fzx2b4HXYOjdufybWhh8aLgtEINbVkWujn6DnJDe4riDvDhDarcIt%2F1qftWGG3%2F2U%2B2GfgT&X-Amz-Signature=09a1349a7c64a2f987c898aee2701ed1a16d1b11aa93d88705ed1798d4bed843&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOH64IJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG9C1Pf2bCgEFrL%2BdUF42IzhiSltwzzZNgmWfdchrPNeAiEAuj3ax3LHDJvN2rlijnOrQQ1mB8MDw%2F78%2BnE1Udfrbk0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAitL5Gv13OvGyv2SrcA0zGQrM4nKTWvFJ08j0tVp2Qzvae4Rpm5Rkjh6MPmeEeOkmhLquXRgoOnnnxjg%2F50bQxdPwEFwvvOdd%2FdQTWGfSa66%2BeK5cAEN1gFmIylALa9tUh4hTNCxhOfoPOub7rtZDtNHzDL6dcfMvuDUtjXirvHj2Z0WqBBgPqB%2F275k5ZsChlM4eVifPuSwOdTCqYSK7qQdlTlcyyDWal2vfAHwLyHRPEoZEN4EKmXNn3qiZtpDMoTVz64%2BDwWagQ6GG9gPXNoMf0Imq0ZU01iVjm3EbYXCOPkYdULk615korCjkANZeu6ni92NhDStapv1Y8uSMbLeQe9d3cFNWygcyVeai1oWsK3Y3jxHn7p6c%2FLYO%2F6VtfsPaYWfjcHMwnxpTl8epscaOhtZ9umt%2BbcL5IydP5sJfI4%2Bxk9Vi4FPS29qcAPcOGvhU4FtvmxgjxkuNX0ArB7FdMFQK9%2FcHgLcoIC1GR84DmOZq%2B6Moe8kRo%2FVSH51F7cS5HbelDioyHwFX%2F4cVpaxC%2F0%2Blsaqq0DwK%2BK4muwxienX3AIpyZFeDyN7bL%2BHZG20TmFdyi7BiLE66Lk3FDLHiS86thlKzFPVtwUBoAh6Y6FkUraStmW22mdMacON%2Flgzp2MxzMyz0nMICVjL4GOqUB6fzqKTCJTw%2Bu4ls1zreHQoCc8WGLb4zgoeOMPQq0Ywetdw3ACiMSuEQmx023BBldIyC70kZ2JXRMnPk6VCf6tFMKTxny1R5gPEs%2FeHkJkB3j0cAvU4Ul3MieqFRXXM%2BWpkzSiA5DfvocNOC9taJu3fzx2b4HXYOjdufybWhh8aLgtEINbVkWujn6DnJDe4riDvDhDarcIt%2F1qftWGG3%2F2U%2B2GfgT&X-Amz-Signature=149bfc2509cc95720d65fa30a41d6bf4f5d69f57adeae9b66790b194186aea1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOH64IJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG9C1Pf2bCgEFrL%2BdUF42IzhiSltwzzZNgmWfdchrPNeAiEAuj3ax3LHDJvN2rlijnOrQQ1mB8MDw%2F78%2BnE1Udfrbk0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAitL5Gv13OvGyv2SrcA0zGQrM4nKTWvFJ08j0tVp2Qzvae4Rpm5Rkjh6MPmeEeOkmhLquXRgoOnnnxjg%2F50bQxdPwEFwvvOdd%2FdQTWGfSa66%2BeK5cAEN1gFmIylALa9tUh4hTNCxhOfoPOub7rtZDtNHzDL6dcfMvuDUtjXirvHj2Z0WqBBgPqB%2F275k5ZsChlM4eVifPuSwOdTCqYSK7qQdlTlcyyDWal2vfAHwLyHRPEoZEN4EKmXNn3qiZtpDMoTVz64%2BDwWagQ6GG9gPXNoMf0Imq0ZU01iVjm3EbYXCOPkYdULk615korCjkANZeu6ni92NhDStapv1Y8uSMbLeQe9d3cFNWygcyVeai1oWsK3Y3jxHn7p6c%2FLYO%2F6VtfsPaYWfjcHMwnxpTl8epscaOhtZ9umt%2BbcL5IydP5sJfI4%2Bxk9Vi4FPS29qcAPcOGvhU4FtvmxgjxkuNX0ArB7FdMFQK9%2FcHgLcoIC1GR84DmOZq%2B6Moe8kRo%2FVSH51F7cS5HbelDioyHwFX%2F4cVpaxC%2F0%2Blsaqq0DwK%2BK4muwxienX3AIpyZFeDyN7bL%2BHZG20TmFdyi7BiLE66Lk3FDLHiS86thlKzFPVtwUBoAh6Y6FkUraStmW22mdMacON%2Flgzp2MxzMyz0nMICVjL4GOqUB6fzqKTCJTw%2Bu4ls1zreHQoCc8WGLb4zgoeOMPQq0Ywetdw3ACiMSuEQmx023BBldIyC70kZ2JXRMnPk6VCf6tFMKTxny1R5gPEs%2FeHkJkB3j0cAvU4Ul3MieqFRXXM%2BWpkzSiA5DfvocNOC9taJu3fzx2b4HXYOjdufybWhh8aLgtEINbVkWujn6DnJDe4riDvDhDarcIt%2F1qftWGG3%2F2U%2B2GfgT&X-Amz-Signature=48e2001ab83593a14b6dfbe5665d4d57fe476947182d4a71ee9e53d654639152&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKOH64IJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG9C1Pf2bCgEFrL%2BdUF42IzhiSltwzzZNgmWfdchrPNeAiEAuj3ax3LHDJvN2rlijnOrQQ1mB8MDw%2F78%2BnE1Udfrbk0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAitL5Gv13OvGyv2SrcA0zGQrM4nKTWvFJ08j0tVp2Qzvae4Rpm5Rkjh6MPmeEeOkmhLquXRgoOnnnxjg%2F50bQxdPwEFwvvOdd%2FdQTWGfSa66%2BeK5cAEN1gFmIylALa9tUh4hTNCxhOfoPOub7rtZDtNHzDL6dcfMvuDUtjXirvHj2Z0WqBBgPqB%2F275k5ZsChlM4eVifPuSwOdTCqYSK7qQdlTlcyyDWal2vfAHwLyHRPEoZEN4EKmXNn3qiZtpDMoTVz64%2BDwWagQ6GG9gPXNoMf0Imq0ZU01iVjm3EbYXCOPkYdULk615korCjkANZeu6ni92NhDStapv1Y8uSMbLeQe9d3cFNWygcyVeai1oWsK3Y3jxHn7p6c%2FLYO%2F6VtfsPaYWfjcHMwnxpTl8epscaOhtZ9umt%2BbcL5IydP5sJfI4%2Bxk9Vi4FPS29qcAPcOGvhU4FtvmxgjxkuNX0ArB7FdMFQK9%2FcHgLcoIC1GR84DmOZq%2B6Moe8kRo%2FVSH51F7cS5HbelDioyHwFX%2F4cVpaxC%2F0%2Blsaqq0DwK%2BK4muwxienX3AIpyZFeDyN7bL%2BHZG20TmFdyi7BiLE66Lk3FDLHiS86thlKzFPVtwUBoAh6Y6FkUraStmW22mdMacON%2Flgzp2MxzMyz0nMICVjL4GOqUB6fzqKTCJTw%2Bu4ls1zreHQoCc8WGLb4zgoeOMPQq0Ywetdw3ACiMSuEQmx023BBldIyC70kZ2JXRMnPk6VCf6tFMKTxny1R5gPEs%2FeHkJkB3j0cAvU4Ul3MieqFRXXM%2BWpkzSiA5DfvocNOC9taJu3fzx2b4HXYOjdufybWhh8aLgtEINbVkWujn6DnJDe4riDvDhDarcIt%2F1qftWGG3%2F2U%2B2GfgT&X-Amz-Signature=95433761556aa7edfd34a6a62f69c7cfe5b7c143faa8f344036c08b4b59d97cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
