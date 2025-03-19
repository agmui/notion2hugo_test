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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5J5XN5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDNBA6l25O8Z00FTL4PEumllUElcGhYLjo4PldsUhzYbAiA5j3sRgJ49517C64FsaSohPH6R8Ns93uSS6l9m1lf8Xir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM3ABMT0XUpUQjJHCaKtwDPCWNFxn29aoJMnyTILRqH5%2BVq6sdEDePqtiBae595Ozr4nQ04wM6u4DP7vkRBNReh8iLBlXAiTLGei7CFz88lsOai6bMzeoxlEbclxcpwPMJ%2BwZLl3wKk27sr6WmB7ZHQgg4qsNm41CTJcBvJ3pBWYPeq2%2Fh5%2BbLlOWED3pbU8dbEqFZCm1ewF%2B7%2Fk99HMrM0D7CvpBM3kZ3n62G2sXnRnkZOeMbJwKizi6bA%2FbJAoMkNQd%2BzuxqUKOvvL7%2BLgg9NjBwUD0HK6svW566tA5V9tBzz%2FUiZjapb3bHoiGDAtxiFPtrUb65bz6Jv8Cjx2CtD70DRSNXQjM30fK0mNtuRGn7614jSEvU7D8L%2BBEDcAoe2rnL4171fCwkhFXdUCJoGqWg8G5s1mmzTKv8T6gPtxJJOv%2Fyg0Th1Ut2bBppHJykYz1gSkoqkomjU6QmxfESsedEmU5Jq1Ku8GB3kf2dbb7TayHcw63prVqjujxA%2BCOWEaZWQGm%2BHvNwUEZ6gy1cNAiZ%2FEsCr53KVgvGF960kXIEdXn7fjpXCrrPLbYSwVZYvGtjzsF7J%2B0VFUYUr5KlXxwXwxJaiFbV5VmR3nRIVG5irLp57JOo7SFFnoQYiPDZwmVjfau4Pg6O5zkw5%2F7ovgY6pgF0T%2FlDtC0hRxNDSdnoZQTyh5xGc6s7CLupZ3LFpIf2Tl4ncw1L%2B760%2BGipbMVkZQDcB147vEcP4vn9kBnRRvL%2BT%2FsOLyeSj26H1%2BoN2Hh7%2Bsodw8mlnlvlR9o99azRE5q8SL9qrTmu95XOfm0z5YsnuGRPxPNEfcztV8J51Ni1pVDm66wg2hYHDCwRmwP0hu9xSh%2BaFW1huVFs0C71ywSLrFX5m9S%2F&X-Amz-Signature=ff2297a9c27efaa17983e0e6c7afa22913cfbb4888e9b43586812e8a170b8487&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5J5XN5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDNBA6l25O8Z00FTL4PEumllUElcGhYLjo4PldsUhzYbAiA5j3sRgJ49517C64FsaSohPH6R8Ns93uSS6l9m1lf8Xir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM3ABMT0XUpUQjJHCaKtwDPCWNFxn29aoJMnyTILRqH5%2BVq6sdEDePqtiBae595Ozr4nQ04wM6u4DP7vkRBNReh8iLBlXAiTLGei7CFz88lsOai6bMzeoxlEbclxcpwPMJ%2BwZLl3wKk27sr6WmB7ZHQgg4qsNm41CTJcBvJ3pBWYPeq2%2Fh5%2BbLlOWED3pbU8dbEqFZCm1ewF%2B7%2Fk99HMrM0D7CvpBM3kZ3n62G2sXnRnkZOeMbJwKizi6bA%2FbJAoMkNQd%2BzuxqUKOvvL7%2BLgg9NjBwUD0HK6svW566tA5V9tBzz%2FUiZjapb3bHoiGDAtxiFPtrUb65bz6Jv8Cjx2CtD70DRSNXQjM30fK0mNtuRGn7614jSEvU7D8L%2BBEDcAoe2rnL4171fCwkhFXdUCJoGqWg8G5s1mmzTKv8T6gPtxJJOv%2Fyg0Th1Ut2bBppHJykYz1gSkoqkomjU6QmxfESsedEmU5Jq1Ku8GB3kf2dbb7TayHcw63prVqjujxA%2BCOWEaZWQGm%2BHvNwUEZ6gy1cNAiZ%2FEsCr53KVgvGF960kXIEdXn7fjpXCrrPLbYSwVZYvGtjzsF7J%2B0VFUYUr5KlXxwXwxJaiFbV5VmR3nRIVG5irLp57JOo7SFFnoQYiPDZwmVjfau4Pg6O5zkw5%2F7ovgY6pgF0T%2FlDtC0hRxNDSdnoZQTyh5xGc6s7CLupZ3LFpIf2Tl4ncw1L%2B760%2BGipbMVkZQDcB147vEcP4vn9kBnRRvL%2BT%2FsOLyeSj26H1%2BoN2Hh7%2Bsodw8mlnlvlR9o99azRE5q8SL9qrTmu95XOfm0z5YsnuGRPxPNEfcztV8J51Ni1pVDm66wg2hYHDCwRmwP0hu9xSh%2BaFW1huVFs0C71ywSLrFX5m9S%2F&X-Amz-Signature=d58152d9e3b0c8248f5b3b2e6adbc48a414ef0336fd2a1083cf006562cfb6728&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5J5XN5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDNBA6l25O8Z00FTL4PEumllUElcGhYLjo4PldsUhzYbAiA5j3sRgJ49517C64FsaSohPH6R8Ns93uSS6l9m1lf8Xir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM3ABMT0XUpUQjJHCaKtwDPCWNFxn29aoJMnyTILRqH5%2BVq6sdEDePqtiBae595Ozr4nQ04wM6u4DP7vkRBNReh8iLBlXAiTLGei7CFz88lsOai6bMzeoxlEbclxcpwPMJ%2BwZLl3wKk27sr6WmB7ZHQgg4qsNm41CTJcBvJ3pBWYPeq2%2Fh5%2BbLlOWED3pbU8dbEqFZCm1ewF%2B7%2Fk99HMrM0D7CvpBM3kZ3n62G2sXnRnkZOeMbJwKizi6bA%2FbJAoMkNQd%2BzuxqUKOvvL7%2BLgg9NjBwUD0HK6svW566tA5V9tBzz%2FUiZjapb3bHoiGDAtxiFPtrUb65bz6Jv8Cjx2CtD70DRSNXQjM30fK0mNtuRGn7614jSEvU7D8L%2BBEDcAoe2rnL4171fCwkhFXdUCJoGqWg8G5s1mmzTKv8T6gPtxJJOv%2Fyg0Th1Ut2bBppHJykYz1gSkoqkomjU6QmxfESsedEmU5Jq1Ku8GB3kf2dbb7TayHcw63prVqjujxA%2BCOWEaZWQGm%2BHvNwUEZ6gy1cNAiZ%2FEsCr53KVgvGF960kXIEdXn7fjpXCrrPLbYSwVZYvGtjzsF7J%2B0VFUYUr5KlXxwXwxJaiFbV5VmR3nRIVG5irLp57JOo7SFFnoQYiPDZwmVjfau4Pg6O5zkw5%2F7ovgY6pgF0T%2FlDtC0hRxNDSdnoZQTyh5xGc6s7CLupZ3LFpIf2Tl4ncw1L%2B760%2BGipbMVkZQDcB147vEcP4vn9kBnRRvL%2BT%2FsOLyeSj26H1%2BoN2Hh7%2Bsodw8mlnlvlR9o99azRE5q8SL9qrTmu95XOfm0z5YsnuGRPxPNEfcztV8J51Ni1pVDm66wg2hYHDCwRmwP0hu9xSh%2BaFW1huVFs0C71ywSLrFX5m9S%2F&X-Amz-Signature=065621004d2f02a7f648c1e5740b5c3349fb1b7ac194c05db6926f9c8409db20&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5J5XN5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDNBA6l25O8Z00FTL4PEumllUElcGhYLjo4PldsUhzYbAiA5j3sRgJ49517C64FsaSohPH6R8Ns93uSS6l9m1lf8Xir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM3ABMT0XUpUQjJHCaKtwDPCWNFxn29aoJMnyTILRqH5%2BVq6sdEDePqtiBae595Ozr4nQ04wM6u4DP7vkRBNReh8iLBlXAiTLGei7CFz88lsOai6bMzeoxlEbclxcpwPMJ%2BwZLl3wKk27sr6WmB7ZHQgg4qsNm41CTJcBvJ3pBWYPeq2%2Fh5%2BbLlOWED3pbU8dbEqFZCm1ewF%2B7%2Fk99HMrM0D7CvpBM3kZ3n62G2sXnRnkZOeMbJwKizi6bA%2FbJAoMkNQd%2BzuxqUKOvvL7%2BLgg9NjBwUD0HK6svW566tA5V9tBzz%2FUiZjapb3bHoiGDAtxiFPtrUb65bz6Jv8Cjx2CtD70DRSNXQjM30fK0mNtuRGn7614jSEvU7D8L%2BBEDcAoe2rnL4171fCwkhFXdUCJoGqWg8G5s1mmzTKv8T6gPtxJJOv%2Fyg0Th1Ut2bBppHJykYz1gSkoqkomjU6QmxfESsedEmU5Jq1Ku8GB3kf2dbb7TayHcw63prVqjujxA%2BCOWEaZWQGm%2BHvNwUEZ6gy1cNAiZ%2FEsCr53KVgvGF960kXIEdXn7fjpXCrrPLbYSwVZYvGtjzsF7J%2B0VFUYUr5KlXxwXwxJaiFbV5VmR3nRIVG5irLp57JOo7SFFnoQYiPDZwmVjfau4Pg6O5zkw5%2F7ovgY6pgF0T%2FlDtC0hRxNDSdnoZQTyh5xGc6s7CLupZ3LFpIf2Tl4ncw1L%2B760%2BGipbMVkZQDcB147vEcP4vn9kBnRRvL%2BT%2FsOLyeSj26H1%2BoN2Hh7%2Bsodw8mlnlvlR9o99azRE5q8SL9qrTmu95XOfm0z5YsnuGRPxPNEfcztV8J51Ni1pVDm66wg2hYHDCwRmwP0hu9xSh%2BaFW1huVFs0C71ywSLrFX5m9S%2F&X-Amz-Signature=4539588ca8298f68b857533946ec3fa5a3f478e796e112a4b6e7a15f303dd996&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5J5XN5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDNBA6l25O8Z00FTL4PEumllUElcGhYLjo4PldsUhzYbAiA5j3sRgJ49517C64FsaSohPH6R8Ns93uSS6l9m1lf8Xir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM3ABMT0XUpUQjJHCaKtwDPCWNFxn29aoJMnyTILRqH5%2BVq6sdEDePqtiBae595Ozr4nQ04wM6u4DP7vkRBNReh8iLBlXAiTLGei7CFz88lsOai6bMzeoxlEbclxcpwPMJ%2BwZLl3wKk27sr6WmB7ZHQgg4qsNm41CTJcBvJ3pBWYPeq2%2Fh5%2BbLlOWED3pbU8dbEqFZCm1ewF%2B7%2Fk99HMrM0D7CvpBM3kZ3n62G2sXnRnkZOeMbJwKizi6bA%2FbJAoMkNQd%2BzuxqUKOvvL7%2BLgg9NjBwUD0HK6svW566tA5V9tBzz%2FUiZjapb3bHoiGDAtxiFPtrUb65bz6Jv8Cjx2CtD70DRSNXQjM30fK0mNtuRGn7614jSEvU7D8L%2BBEDcAoe2rnL4171fCwkhFXdUCJoGqWg8G5s1mmzTKv8T6gPtxJJOv%2Fyg0Th1Ut2bBppHJykYz1gSkoqkomjU6QmxfESsedEmU5Jq1Ku8GB3kf2dbb7TayHcw63prVqjujxA%2BCOWEaZWQGm%2BHvNwUEZ6gy1cNAiZ%2FEsCr53KVgvGF960kXIEdXn7fjpXCrrPLbYSwVZYvGtjzsF7J%2B0VFUYUr5KlXxwXwxJaiFbV5VmR3nRIVG5irLp57JOo7SFFnoQYiPDZwmVjfau4Pg6O5zkw5%2F7ovgY6pgF0T%2FlDtC0hRxNDSdnoZQTyh5xGc6s7CLupZ3LFpIf2Tl4ncw1L%2B760%2BGipbMVkZQDcB147vEcP4vn9kBnRRvL%2BT%2FsOLyeSj26H1%2BoN2Hh7%2Bsodw8mlnlvlR9o99azRE5q8SL9qrTmu95XOfm0z5YsnuGRPxPNEfcztV8J51Ni1pVDm66wg2hYHDCwRmwP0hu9xSh%2BaFW1huVFs0C71ywSLrFX5m9S%2F&X-Amz-Signature=4ef8c93cfc7788414095752242b438ec32d266fca18e156d18d0f3079bfd28c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5J5XN5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDNBA6l25O8Z00FTL4PEumllUElcGhYLjo4PldsUhzYbAiA5j3sRgJ49517C64FsaSohPH6R8Ns93uSS6l9m1lf8Xir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM3ABMT0XUpUQjJHCaKtwDPCWNFxn29aoJMnyTILRqH5%2BVq6sdEDePqtiBae595Ozr4nQ04wM6u4DP7vkRBNReh8iLBlXAiTLGei7CFz88lsOai6bMzeoxlEbclxcpwPMJ%2BwZLl3wKk27sr6WmB7ZHQgg4qsNm41CTJcBvJ3pBWYPeq2%2Fh5%2BbLlOWED3pbU8dbEqFZCm1ewF%2B7%2Fk99HMrM0D7CvpBM3kZ3n62G2sXnRnkZOeMbJwKizi6bA%2FbJAoMkNQd%2BzuxqUKOvvL7%2BLgg9NjBwUD0HK6svW566tA5V9tBzz%2FUiZjapb3bHoiGDAtxiFPtrUb65bz6Jv8Cjx2CtD70DRSNXQjM30fK0mNtuRGn7614jSEvU7D8L%2BBEDcAoe2rnL4171fCwkhFXdUCJoGqWg8G5s1mmzTKv8T6gPtxJJOv%2Fyg0Th1Ut2bBppHJykYz1gSkoqkomjU6QmxfESsedEmU5Jq1Ku8GB3kf2dbb7TayHcw63prVqjujxA%2BCOWEaZWQGm%2BHvNwUEZ6gy1cNAiZ%2FEsCr53KVgvGF960kXIEdXn7fjpXCrrPLbYSwVZYvGtjzsF7J%2B0VFUYUr5KlXxwXwxJaiFbV5VmR3nRIVG5irLp57JOo7SFFnoQYiPDZwmVjfau4Pg6O5zkw5%2F7ovgY6pgF0T%2FlDtC0hRxNDSdnoZQTyh5xGc6s7CLupZ3LFpIf2Tl4ncw1L%2B760%2BGipbMVkZQDcB147vEcP4vn9kBnRRvL%2BT%2FsOLyeSj26H1%2BoN2Hh7%2Bsodw8mlnlvlR9o99azRE5q8SL9qrTmu95XOfm0z5YsnuGRPxPNEfcztV8J51Ni1pVDm66wg2hYHDCwRmwP0hu9xSh%2BaFW1huVFs0C71ywSLrFX5m9S%2F&X-Amz-Signature=7ee6f1a3babfb81e1cc03cee263fd89c68b74bf60e5e3161b26b325b253402be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5J5XN5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDNBA6l25O8Z00FTL4PEumllUElcGhYLjo4PldsUhzYbAiA5j3sRgJ49517C64FsaSohPH6R8Ns93uSS6l9m1lf8Xir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM3ABMT0XUpUQjJHCaKtwDPCWNFxn29aoJMnyTILRqH5%2BVq6sdEDePqtiBae595Ozr4nQ04wM6u4DP7vkRBNReh8iLBlXAiTLGei7CFz88lsOai6bMzeoxlEbclxcpwPMJ%2BwZLl3wKk27sr6WmB7ZHQgg4qsNm41CTJcBvJ3pBWYPeq2%2Fh5%2BbLlOWED3pbU8dbEqFZCm1ewF%2B7%2Fk99HMrM0D7CvpBM3kZ3n62G2sXnRnkZOeMbJwKizi6bA%2FbJAoMkNQd%2BzuxqUKOvvL7%2BLgg9NjBwUD0HK6svW566tA5V9tBzz%2FUiZjapb3bHoiGDAtxiFPtrUb65bz6Jv8Cjx2CtD70DRSNXQjM30fK0mNtuRGn7614jSEvU7D8L%2BBEDcAoe2rnL4171fCwkhFXdUCJoGqWg8G5s1mmzTKv8T6gPtxJJOv%2Fyg0Th1Ut2bBppHJykYz1gSkoqkomjU6QmxfESsedEmU5Jq1Ku8GB3kf2dbb7TayHcw63prVqjujxA%2BCOWEaZWQGm%2BHvNwUEZ6gy1cNAiZ%2FEsCr53KVgvGF960kXIEdXn7fjpXCrrPLbYSwVZYvGtjzsF7J%2B0VFUYUr5KlXxwXwxJaiFbV5VmR3nRIVG5irLp57JOo7SFFnoQYiPDZwmVjfau4Pg6O5zkw5%2F7ovgY6pgF0T%2FlDtC0hRxNDSdnoZQTyh5xGc6s7CLupZ3LFpIf2Tl4ncw1L%2B760%2BGipbMVkZQDcB147vEcP4vn9kBnRRvL%2BT%2FsOLyeSj26H1%2BoN2Hh7%2Bsodw8mlnlvlR9o99azRE5q8SL9qrTmu95XOfm0z5YsnuGRPxPNEfcztV8J51Ni1pVDm66wg2hYHDCwRmwP0hu9xSh%2BaFW1huVFs0C71ywSLrFX5m9S%2F&X-Amz-Signature=4b61214306e5611b414b4c3de96e7bd67324b8fafaa15277a01b4702993d43f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5J5XN5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDNBA6l25O8Z00FTL4PEumllUElcGhYLjo4PldsUhzYbAiA5j3sRgJ49517C64FsaSohPH6R8Ns93uSS6l9m1lf8Xir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM3ABMT0XUpUQjJHCaKtwDPCWNFxn29aoJMnyTILRqH5%2BVq6sdEDePqtiBae595Ozr4nQ04wM6u4DP7vkRBNReh8iLBlXAiTLGei7CFz88lsOai6bMzeoxlEbclxcpwPMJ%2BwZLl3wKk27sr6WmB7ZHQgg4qsNm41CTJcBvJ3pBWYPeq2%2Fh5%2BbLlOWED3pbU8dbEqFZCm1ewF%2B7%2Fk99HMrM0D7CvpBM3kZ3n62G2sXnRnkZOeMbJwKizi6bA%2FbJAoMkNQd%2BzuxqUKOvvL7%2BLgg9NjBwUD0HK6svW566tA5V9tBzz%2FUiZjapb3bHoiGDAtxiFPtrUb65bz6Jv8Cjx2CtD70DRSNXQjM30fK0mNtuRGn7614jSEvU7D8L%2BBEDcAoe2rnL4171fCwkhFXdUCJoGqWg8G5s1mmzTKv8T6gPtxJJOv%2Fyg0Th1Ut2bBppHJykYz1gSkoqkomjU6QmxfESsedEmU5Jq1Ku8GB3kf2dbb7TayHcw63prVqjujxA%2BCOWEaZWQGm%2BHvNwUEZ6gy1cNAiZ%2FEsCr53KVgvGF960kXIEdXn7fjpXCrrPLbYSwVZYvGtjzsF7J%2B0VFUYUr5KlXxwXwxJaiFbV5VmR3nRIVG5irLp57JOo7SFFnoQYiPDZwmVjfau4Pg6O5zkw5%2F7ovgY6pgF0T%2FlDtC0hRxNDSdnoZQTyh5xGc6s7CLupZ3LFpIf2Tl4ncw1L%2B760%2BGipbMVkZQDcB147vEcP4vn9kBnRRvL%2BT%2FsOLyeSj26H1%2BoN2Hh7%2Bsodw8mlnlvlR9o99azRE5q8SL9qrTmu95XOfm0z5YsnuGRPxPNEfcztV8J51Ni1pVDm66wg2hYHDCwRmwP0hu9xSh%2BaFW1huVFs0C71ywSLrFX5m9S%2F&X-Amz-Signature=6d4a484790644bd599534275e4143cc7afa71eac2532fdca5442f0e37c2fe7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
