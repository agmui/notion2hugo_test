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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYIPBCMF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJm46%2BEZSn1%2BKOc93O9EcxX6uQBCWHhn7M86ys7Mr2SwIhAJo%2FT%2FdBo5tjUHG6jNXwSLD2mbloFFjpwdLodiZvgSq2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igx7SUa1lb1e%2BUtTKaYq3ANreBGgTiz9%2BxNls2wo0xJNtsaqkP1wOb6IQf2z3c3wwMM65xSHTzjTcxiHR6sMegAIKQBBMHUTCiar5PbWUCBhEeLT%2F7h9HukazPA0KwudMNFvwvT%2FsCjeucxS7YGml1jONaK%2B8F10jHonJIxsEu%2B7jlPivkwvqQPO8zU0%2BmysxGdxMK0Kk6j7lk7tZP%2BuUs4KnocXOrpShROZmZN9nbQoIPqGi5gEFvhEWu%2BO%2FgFVy9oZguJ%2B9k%2BAjG%2BNLapfCi30CecIJXsBvW%2FPhNJZdQf%2BQm9MuagqS2GIkDi%2BAKnfHPbGg4GfD30FWpPCOfckKZeEz2D%2BJ8H0cL%2Bsq7lnKSE2goq%2BqPKtmv7n5y1kdYzU08BT4qV1Kd9Ks7VNBRBw3FxVnd7hgZlAsBQpF5m0JPC9unaRiF79o9bPTnLDN062X%2BL1JNGFtom7c7dr6txf9MR7fdw1nPHkr%2F1i2qCqermL%2Fk2zDl5bKqf2sRoMe56mshZmRa4uk2czItbjxPjffO87W%2FWdeKFeEPwweteiwxRWnaeC%2Be14Oy64lrX2OyqSiiu9tgyFXUEpdBzxjUOm%2Fs8WKfdpkPAZnZlWwjCmFtAJ19AsHblGLQ7VQ32os62IalFifoaHiBSh8RYiJjCwj6e%2BBjqkAcgZBZG8vntWOZWTj4wPe%2Fd%2FCAvgHKaDf4Slcl3l0Zq85mMz0UpCPvak8LKDN1ImuUiEi9QF7tVhAhLyZ26pD4cR6yRthqrx%2FHYsLScbDQqGDifUHXFfZPWk04NHJ4dtDIfarUcm3T%2BfTDR5GTxU%2Bn9XFLa%2B6tZbHEI43MF3YVNAq2vxwagb%2BYxApuZ8CelnnzvLs3nwjLkwRDTjgNlCa7kC7PJY&X-Amz-Signature=8db555754cf04d11eca60cea22be9d692588502e8347fc5d62edb377c52d601d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYIPBCMF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJm46%2BEZSn1%2BKOc93O9EcxX6uQBCWHhn7M86ys7Mr2SwIhAJo%2FT%2FdBo5tjUHG6jNXwSLD2mbloFFjpwdLodiZvgSq2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igx7SUa1lb1e%2BUtTKaYq3ANreBGgTiz9%2BxNls2wo0xJNtsaqkP1wOb6IQf2z3c3wwMM65xSHTzjTcxiHR6sMegAIKQBBMHUTCiar5PbWUCBhEeLT%2F7h9HukazPA0KwudMNFvwvT%2FsCjeucxS7YGml1jONaK%2B8F10jHonJIxsEu%2B7jlPivkwvqQPO8zU0%2BmysxGdxMK0Kk6j7lk7tZP%2BuUs4KnocXOrpShROZmZN9nbQoIPqGi5gEFvhEWu%2BO%2FgFVy9oZguJ%2B9k%2BAjG%2BNLapfCi30CecIJXsBvW%2FPhNJZdQf%2BQm9MuagqS2GIkDi%2BAKnfHPbGg4GfD30FWpPCOfckKZeEz2D%2BJ8H0cL%2Bsq7lnKSE2goq%2BqPKtmv7n5y1kdYzU08BT4qV1Kd9Ks7VNBRBw3FxVnd7hgZlAsBQpF5m0JPC9unaRiF79o9bPTnLDN062X%2BL1JNGFtom7c7dr6txf9MR7fdw1nPHkr%2F1i2qCqermL%2Fk2zDl5bKqf2sRoMe56mshZmRa4uk2czItbjxPjffO87W%2FWdeKFeEPwweteiwxRWnaeC%2Be14Oy64lrX2OyqSiiu9tgyFXUEpdBzxjUOm%2Fs8WKfdpkPAZnZlWwjCmFtAJ19AsHblGLQ7VQ32os62IalFifoaHiBSh8RYiJjCwj6e%2BBjqkAcgZBZG8vntWOZWTj4wPe%2Fd%2FCAvgHKaDf4Slcl3l0Zq85mMz0UpCPvak8LKDN1ImuUiEi9QF7tVhAhLyZ26pD4cR6yRthqrx%2FHYsLScbDQqGDifUHXFfZPWk04NHJ4dtDIfarUcm3T%2BfTDR5GTxU%2Bn9XFLa%2B6tZbHEI43MF3YVNAq2vxwagb%2BYxApuZ8CelnnzvLs3nwjLkwRDTjgNlCa7kC7PJY&X-Amz-Signature=f114606ddf84e4cd87a26d636c1116a24179b874fc8bafa5211fde9fd5340008&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYIPBCMF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJm46%2BEZSn1%2BKOc93O9EcxX6uQBCWHhn7M86ys7Mr2SwIhAJo%2FT%2FdBo5tjUHG6jNXwSLD2mbloFFjpwdLodiZvgSq2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igx7SUa1lb1e%2BUtTKaYq3ANreBGgTiz9%2BxNls2wo0xJNtsaqkP1wOb6IQf2z3c3wwMM65xSHTzjTcxiHR6sMegAIKQBBMHUTCiar5PbWUCBhEeLT%2F7h9HukazPA0KwudMNFvwvT%2FsCjeucxS7YGml1jONaK%2B8F10jHonJIxsEu%2B7jlPivkwvqQPO8zU0%2BmysxGdxMK0Kk6j7lk7tZP%2BuUs4KnocXOrpShROZmZN9nbQoIPqGi5gEFvhEWu%2BO%2FgFVy9oZguJ%2B9k%2BAjG%2BNLapfCi30CecIJXsBvW%2FPhNJZdQf%2BQm9MuagqS2GIkDi%2BAKnfHPbGg4GfD30FWpPCOfckKZeEz2D%2BJ8H0cL%2Bsq7lnKSE2goq%2BqPKtmv7n5y1kdYzU08BT4qV1Kd9Ks7VNBRBw3FxVnd7hgZlAsBQpF5m0JPC9unaRiF79o9bPTnLDN062X%2BL1JNGFtom7c7dr6txf9MR7fdw1nPHkr%2F1i2qCqermL%2Fk2zDl5bKqf2sRoMe56mshZmRa4uk2czItbjxPjffO87W%2FWdeKFeEPwweteiwxRWnaeC%2Be14Oy64lrX2OyqSiiu9tgyFXUEpdBzxjUOm%2Fs8WKfdpkPAZnZlWwjCmFtAJ19AsHblGLQ7VQ32os62IalFifoaHiBSh8RYiJjCwj6e%2BBjqkAcgZBZG8vntWOZWTj4wPe%2Fd%2FCAvgHKaDf4Slcl3l0Zq85mMz0UpCPvak8LKDN1ImuUiEi9QF7tVhAhLyZ26pD4cR6yRthqrx%2FHYsLScbDQqGDifUHXFfZPWk04NHJ4dtDIfarUcm3T%2BfTDR5GTxU%2Bn9XFLa%2B6tZbHEI43MF3YVNAq2vxwagb%2BYxApuZ8CelnnzvLs3nwjLkwRDTjgNlCa7kC7PJY&X-Amz-Signature=eac84c27ce19404c65576280416cc254cc67f8692c71565e448261ec61e442a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYIPBCMF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJm46%2BEZSn1%2BKOc93O9EcxX6uQBCWHhn7M86ys7Mr2SwIhAJo%2FT%2FdBo5tjUHG6jNXwSLD2mbloFFjpwdLodiZvgSq2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igx7SUa1lb1e%2BUtTKaYq3ANreBGgTiz9%2BxNls2wo0xJNtsaqkP1wOb6IQf2z3c3wwMM65xSHTzjTcxiHR6sMegAIKQBBMHUTCiar5PbWUCBhEeLT%2F7h9HukazPA0KwudMNFvwvT%2FsCjeucxS7YGml1jONaK%2B8F10jHonJIxsEu%2B7jlPivkwvqQPO8zU0%2BmysxGdxMK0Kk6j7lk7tZP%2BuUs4KnocXOrpShROZmZN9nbQoIPqGi5gEFvhEWu%2BO%2FgFVy9oZguJ%2B9k%2BAjG%2BNLapfCi30CecIJXsBvW%2FPhNJZdQf%2BQm9MuagqS2GIkDi%2BAKnfHPbGg4GfD30FWpPCOfckKZeEz2D%2BJ8H0cL%2Bsq7lnKSE2goq%2BqPKtmv7n5y1kdYzU08BT4qV1Kd9Ks7VNBRBw3FxVnd7hgZlAsBQpF5m0JPC9unaRiF79o9bPTnLDN062X%2BL1JNGFtom7c7dr6txf9MR7fdw1nPHkr%2F1i2qCqermL%2Fk2zDl5bKqf2sRoMe56mshZmRa4uk2czItbjxPjffO87W%2FWdeKFeEPwweteiwxRWnaeC%2Be14Oy64lrX2OyqSiiu9tgyFXUEpdBzxjUOm%2Fs8WKfdpkPAZnZlWwjCmFtAJ19AsHblGLQ7VQ32os62IalFifoaHiBSh8RYiJjCwj6e%2BBjqkAcgZBZG8vntWOZWTj4wPe%2Fd%2FCAvgHKaDf4Slcl3l0Zq85mMz0UpCPvak8LKDN1ImuUiEi9QF7tVhAhLyZ26pD4cR6yRthqrx%2FHYsLScbDQqGDifUHXFfZPWk04NHJ4dtDIfarUcm3T%2BfTDR5GTxU%2Bn9XFLa%2B6tZbHEI43MF3YVNAq2vxwagb%2BYxApuZ8CelnnzvLs3nwjLkwRDTjgNlCa7kC7PJY&X-Amz-Signature=276ac2618b034550deb1d3cc028f3c9b1d45e6d8f221dcfe3c12424bf564e646&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYIPBCMF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJm46%2BEZSn1%2BKOc93O9EcxX6uQBCWHhn7M86ys7Mr2SwIhAJo%2FT%2FdBo5tjUHG6jNXwSLD2mbloFFjpwdLodiZvgSq2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igx7SUa1lb1e%2BUtTKaYq3ANreBGgTiz9%2BxNls2wo0xJNtsaqkP1wOb6IQf2z3c3wwMM65xSHTzjTcxiHR6sMegAIKQBBMHUTCiar5PbWUCBhEeLT%2F7h9HukazPA0KwudMNFvwvT%2FsCjeucxS7YGml1jONaK%2B8F10jHonJIxsEu%2B7jlPivkwvqQPO8zU0%2BmysxGdxMK0Kk6j7lk7tZP%2BuUs4KnocXOrpShROZmZN9nbQoIPqGi5gEFvhEWu%2BO%2FgFVy9oZguJ%2B9k%2BAjG%2BNLapfCi30CecIJXsBvW%2FPhNJZdQf%2BQm9MuagqS2GIkDi%2BAKnfHPbGg4GfD30FWpPCOfckKZeEz2D%2BJ8H0cL%2Bsq7lnKSE2goq%2BqPKtmv7n5y1kdYzU08BT4qV1Kd9Ks7VNBRBw3FxVnd7hgZlAsBQpF5m0JPC9unaRiF79o9bPTnLDN062X%2BL1JNGFtom7c7dr6txf9MR7fdw1nPHkr%2F1i2qCqermL%2Fk2zDl5bKqf2sRoMe56mshZmRa4uk2czItbjxPjffO87W%2FWdeKFeEPwweteiwxRWnaeC%2Be14Oy64lrX2OyqSiiu9tgyFXUEpdBzxjUOm%2Fs8WKfdpkPAZnZlWwjCmFtAJ19AsHblGLQ7VQ32os62IalFifoaHiBSh8RYiJjCwj6e%2BBjqkAcgZBZG8vntWOZWTj4wPe%2Fd%2FCAvgHKaDf4Slcl3l0Zq85mMz0UpCPvak8LKDN1ImuUiEi9QF7tVhAhLyZ26pD4cR6yRthqrx%2FHYsLScbDQqGDifUHXFfZPWk04NHJ4dtDIfarUcm3T%2BfTDR5GTxU%2Bn9XFLa%2B6tZbHEI43MF3YVNAq2vxwagb%2BYxApuZ8CelnnzvLs3nwjLkwRDTjgNlCa7kC7PJY&X-Amz-Signature=0db729fdbeccc6d039b4b19b05a6a02b34317cab5157597b4c66272725e32a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYIPBCMF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJm46%2BEZSn1%2BKOc93O9EcxX6uQBCWHhn7M86ys7Mr2SwIhAJo%2FT%2FdBo5tjUHG6jNXwSLD2mbloFFjpwdLodiZvgSq2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igx7SUa1lb1e%2BUtTKaYq3ANreBGgTiz9%2BxNls2wo0xJNtsaqkP1wOb6IQf2z3c3wwMM65xSHTzjTcxiHR6sMegAIKQBBMHUTCiar5PbWUCBhEeLT%2F7h9HukazPA0KwudMNFvwvT%2FsCjeucxS7YGml1jONaK%2B8F10jHonJIxsEu%2B7jlPivkwvqQPO8zU0%2BmysxGdxMK0Kk6j7lk7tZP%2BuUs4KnocXOrpShROZmZN9nbQoIPqGi5gEFvhEWu%2BO%2FgFVy9oZguJ%2B9k%2BAjG%2BNLapfCi30CecIJXsBvW%2FPhNJZdQf%2BQm9MuagqS2GIkDi%2BAKnfHPbGg4GfD30FWpPCOfckKZeEz2D%2BJ8H0cL%2Bsq7lnKSE2goq%2BqPKtmv7n5y1kdYzU08BT4qV1Kd9Ks7VNBRBw3FxVnd7hgZlAsBQpF5m0JPC9unaRiF79o9bPTnLDN062X%2BL1JNGFtom7c7dr6txf9MR7fdw1nPHkr%2F1i2qCqermL%2Fk2zDl5bKqf2sRoMe56mshZmRa4uk2czItbjxPjffO87W%2FWdeKFeEPwweteiwxRWnaeC%2Be14Oy64lrX2OyqSiiu9tgyFXUEpdBzxjUOm%2Fs8WKfdpkPAZnZlWwjCmFtAJ19AsHblGLQ7VQ32os62IalFifoaHiBSh8RYiJjCwj6e%2BBjqkAcgZBZG8vntWOZWTj4wPe%2Fd%2FCAvgHKaDf4Slcl3l0Zq85mMz0UpCPvak8LKDN1ImuUiEi9QF7tVhAhLyZ26pD4cR6yRthqrx%2FHYsLScbDQqGDifUHXFfZPWk04NHJ4dtDIfarUcm3T%2BfTDR5GTxU%2Bn9XFLa%2B6tZbHEI43MF3YVNAq2vxwagb%2BYxApuZ8CelnnzvLs3nwjLkwRDTjgNlCa7kC7PJY&X-Amz-Signature=fb9775b1400ed4fe5a1660a47032b6b4e521e092c5dac01c76e0d41d307f4985&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYIPBCMF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJm46%2BEZSn1%2BKOc93O9EcxX6uQBCWHhn7M86ys7Mr2SwIhAJo%2FT%2FdBo5tjUHG6jNXwSLD2mbloFFjpwdLodiZvgSq2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igx7SUa1lb1e%2BUtTKaYq3ANreBGgTiz9%2BxNls2wo0xJNtsaqkP1wOb6IQf2z3c3wwMM65xSHTzjTcxiHR6sMegAIKQBBMHUTCiar5PbWUCBhEeLT%2F7h9HukazPA0KwudMNFvwvT%2FsCjeucxS7YGml1jONaK%2B8F10jHonJIxsEu%2B7jlPivkwvqQPO8zU0%2BmysxGdxMK0Kk6j7lk7tZP%2BuUs4KnocXOrpShROZmZN9nbQoIPqGi5gEFvhEWu%2BO%2FgFVy9oZguJ%2B9k%2BAjG%2BNLapfCi30CecIJXsBvW%2FPhNJZdQf%2BQm9MuagqS2GIkDi%2BAKnfHPbGg4GfD30FWpPCOfckKZeEz2D%2BJ8H0cL%2Bsq7lnKSE2goq%2BqPKtmv7n5y1kdYzU08BT4qV1Kd9Ks7VNBRBw3FxVnd7hgZlAsBQpF5m0JPC9unaRiF79o9bPTnLDN062X%2BL1JNGFtom7c7dr6txf9MR7fdw1nPHkr%2F1i2qCqermL%2Fk2zDl5bKqf2sRoMe56mshZmRa4uk2czItbjxPjffO87W%2FWdeKFeEPwweteiwxRWnaeC%2Be14Oy64lrX2OyqSiiu9tgyFXUEpdBzxjUOm%2Fs8WKfdpkPAZnZlWwjCmFtAJ19AsHblGLQ7VQ32os62IalFifoaHiBSh8RYiJjCwj6e%2BBjqkAcgZBZG8vntWOZWTj4wPe%2Fd%2FCAvgHKaDf4Slcl3l0Zq85mMz0UpCPvak8LKDN1ImuUiEi9QF7tVhAhLyZ26pD4cR6yRthqrx%2FHYsLScbDQqGDifUHXFfZPWk04NHJ4dtDIfarUcm3T%2BfTDR5GTxU%2Bn9XFLa%2B6tZbHEI43MF3YVNAq2vxwagb%2BYxApuZ8CelnnzvLs3nwjLkwRDTjgNlCa7kC7PJY&X-Amz-Signature=e494924728030f416e6b2040f43624ea46bf5fc8ccc2bf9dc92efb7b508930f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYIPBCMF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJm46%2BEZSn1%2BKOc93O9EcxX6uQBCWHhn7M86ys7Mr2SwIhAJo%2FT%2FdBo5tjUHG6jNXwSLD2mbloFFjpwdLodiZvgSq2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igx7SUa1lb1e%2BUtTKaYq3ANreBGgTiz9%2BxNls2wo0xJNtsaqkP1wOb6IQf2z3c3wwMM65xSHTzjTcxiHR6sMegAIKQBBMHUTCiar5PbWUCBhEeLT%2F7h9HukazPA0KwudMNFvwvT%2FsCjeucxS7YGml1jONaK%2B8F10jHonJIxsEu%2B7jlPivkwvqQPO8zU0%2BmysxGdxMK0Kk6j7lk7tZP%2BuUs4KnocXOrpShROZmZN9nbQoIPqGi5gEFvhEWu%2BO%2FgFVy9oZguJ%2B9k%2BAjG%2BNLapfCi30CecIJXsBvW%2FPhNJZdQf%2BQm9MuagqS2GIkDi%2BAKnfHPbGg4GfD30FWpPCOfckKZeEz2D%2BJ8H0cL%2Bsq7lnKSE2goq%2BqPKtmv7n5y1kdYzU08BT4qV1Kd9Ks7VNBRBw3FxVnd7hgZlAsBQpF5m0JPC9unaRiF79o9bPTnLDN062X%2BL1JNGFtom7c7dr6txf9MR7fdw1nPHkr%2F1i2qCqermL%2Fk2zDl5bKqf2sRoMe56mshZmRa4uk2czItbjxPjffO87W%2FWdeKFeEPwweteiwxRWnaeC%2Be14Oy64lrX2OyqSiiu9tgyFXUEpdBzxjUOm%2Fs8WKfdpkPAZnZlWwjCmFtAJ19AsHblGLQ7VQ32os62IalFifoaHiBSh8RYiJjCwj6e%2BBjqkAcgZBZG8vntWOZWTj4wPe%2Fd%2FCAvgHKaDf4Slcl3l0Zq85mMz0UpCPvak8LKDN1ImuUiEi9QF7tVhAhLyZ26pD4cR6yRthqrx%2FHYsLScbDQqGDifUHXFfZPWk04NHJ4dtDIfarUcm3T%2BfTDR5GTxU%2Bn9XFLa%2B6tZbHEI43MF3YVNAq2vxwagb%2BYxApuZ8CelnnzvLs3nwjLkwRDTjgNlCa7kC7PJY&X-Amz-Signature=7240928ffb85b2c05672c9544be2048f6afa9817ecd8fd4ae15392d5c2a65388&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
