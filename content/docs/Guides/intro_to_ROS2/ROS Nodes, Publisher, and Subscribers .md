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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVO6NZYE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCcXTHFQbxYPqo67c6UERdw1TAOMVaMW2QpY9ZNAckrkQIhALr%2Fxy0ccvJ155Dsq000U6EnKv%2BzJbzaz%2B1viFQZJCXjKv8DCGYQABoMNjM3NDIzMTgzODA1IgwfU1rjzk2cgvzsx%2FEq3AOeqJLirSLPSNT3TFfCLdc2Lpcx1JDhJVl4jze3juMXhqmPEkP%2BXp1wVnf8u1TOhJlkN%2FRvkRc2tstEeHbbZxxCvL4W0IBejZz7%2FRHTTidI7ak2sQUPUEjoUR2MWsrRa62yoKrIl62qLvfbJBNQh95jMgDFhfRej01Q9Wkj%2Bkjk77iXFTltUn6G5ObngDmSBZJihpdL%2FGs6%2BGlfGMkKTbDTvuCuioHGGBKIUZl5pi0BYH%2BtVkKd1CBA%2B07M%2F%2FkND1reqDkj4ereAlq0znaQEFNCkP%2BE4oCp95e6VYVnU8Z0X3qW0XcEFltYBuQxgR6KMCAZMLQrevYT1LyXBkRxghY5nl%2F9bsAjRM43eSajlPiWKtBNVptoWoe%2BPJDybuAdEwVY6kDkWx1WQ%2BksxuAb0kgSiX1AmMl13k%2BHb08ulDm24rR5fqdeTunms8IOGVSBKV05qvkXQuxw9dTeg2nZkMuFVS9OsfPFidJBQ6oSUPgHlLlORyEWqRtoSgBDV06JryX%2BC3k5kilBS9gTmFbSD4vRtI0OwTTxc4%2FEtUD4T4GkfVYb5XWDa7epqN1G1TXefM21ZhN5QtU6IMB7A9gsIaOGSWyzXCkjguhYw3SJK1AfJOU06hsq6grxHG%2FzhjDlsOe%2BBjqkAUW91qtOxv2FTc7FKaVX7PmCc2ta5hM%2Bvw5%2BLsw6DYKIt8Ml8CiGL628GXDwqtC6T7v9c0%2FKRQsQ0xzv%2Fv6N6kpcbk2N5bEuo6Fxu7FdghHih%2FR1r5sSJUZbwHyUItUEJ%2FeGfFhwnpRR1qbhwCg9fbSmUb4L3bm1QhnAjJSpU3Id29wGMTu6QlC1spVE24RBK9A2oaxJSPOAUKBHpHwJNy%2F334I3&X-Amz-Signature=3b88da09e0e2fe639d5aab4465f9b1cca76c0346ded0fbc90e1119ac89b7e12d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVO6NZYE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCcXTHFQbxYPqo67c6UERdw1TAOMVaMW2QpY9ZNAckrkQIhALr%2Fxy0ccvJ155Dsq000U6EnKv%2BzJbzaz%2B1viFQZJCXjKv8DCGYQABoMNjM3NDIzMTgzODA1IgwfU1rjzk2cgvzsx%2FEq3AOeqJLirSLPSNT3TFfCLdc2Lpcx1JDhJVl4jze3juMXhqmPEkP%2BXp1wVnf8u1TOhJlkN%2FRvkRc2tstEeHbbZxxCvL4W0IBejZz7%2FRHTTidI7ak2sQUPUEjoUR2MWsrRa62yoKrIl62qLvfbJBNQh95jMgDFhfRej01Q9Wkj%2Bkjk77iXFTltUn6G5ObngDmSBZJihpdL%2FGs6%2BGlfGMkKTbDTvuCuioHGGBKIUZl5pi0BYH%2BtVkKd1CBA%2B07M%2F%2FkND1reqDkj4ereAlq0znaQEFNCkP%2BE4oCp95e6VYVnU8Z0X3qW0XcEFltYBuQxgR6KMCAZMLQrevYT1LyXBkRxghY5nl%2F9bsAjRM43eSajlPiWKtBNVptoWoe%2BPJDybuAdEwVY6kDkWx1WQ%2BksxuAb0kgSiX1AmMl13k%2BHb08ulDm24rR5fqdeTunms8IOGVSBKV05qvkXQuxw9dTeg2nZkMuFVS9OsfPFidJBQ6oSUPgHlLlORyEWqRtoSgBDV06JryX%2BC3k5kilBS9gTmFbSD4vRtI0OwTTxc4%2FEtUD4T4GkfVYb5XWDa7epqN1G1TXefM21ZhN5QtU6IMB7A9gsIaOGSWyzXCkjguhYw3SJK1AfJOU06hsq6grxHG%2FzhjDlsOe%2BBjqkAUW91qtOxv2FTc7FKaVX7PmCc2ta5hM%2Bvw5%2BLsw6DYKIt8Ml8CiGL628GXDwqtC6T7v9c0%2FKRQsQ0xzv%2Fv6N6kpcbk2N5bEuo6Fxu7FdghHih%2FR1r5sSJUZbwHyUItUEJ%2FeGfFhwnpRR1qbhwCg9fbSmUb4L3bm1QhnAjJSpU3Id29wGMTu6QlC1spVE24RBK9A2oaxJSPOAUKBHpHwJNy%2F334I3&X-Amz-Signature=773e47ebb724edfe7efd9bf909f3825e805a717b4a47b8a98cb299715bfc798d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVO6NZYE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCcXTHFQbxYPqo67c6UERdw1TAOMVaMW2QpY9ZNAckrkQIhALr%2Fxy0ccvJ155Dsq000U6EnKv%2BzJbzaz%2B1viFQZJCXjKv8DCGYQABoMNjM3NDIzMTgzODA1IgwfU1rjzk2cgvzsx%2FEq3AOeqJLirSLPSNT3TFfCLdc2Lpcx1JDhJVl4jze3juMXhqmPEkP%2BXp1wVnf8u1TOhJlkN%2FRvkRc2tstEeHbbZxxCvL4W0IBejZz7%2FRHTTidI7ak2sQUPUEjoUR2MWsrRa62yoKrIl62qLvfbJBNQh95jMgDFhfRej01Q9Wkj%2Bkjk77iXFTltUn6G5ObngDmSBZJihpdL%2FGs6%2BGlfGMkKTbDTvuCuioHGGBKIUZl5pi0BYH%2BtVkKd1CBA%2B07M%2F%2FkND1reqDkj4ereAlq0znaQEFNCkP%2BE4oCp95e6VYVnU8Z0X3qW0XcEFltYBuQxgR6KMCAZMLQrevYT1LyXBkRxghY5nl%2F9bsAjRM43eSajlPiWKtBNVptoWoe%2BPJDybuAdEwVY6kDkWx1WQ%2BksxuAb0kgSiX1AmMl13k%2BHb08ulDm24rR5fqdeTunms8IOGVSBKV05qvkXQuxw9dTeg2nZkMuFVS9OsfPFidJBQ6oSUPgHlLlORyEWqRtoSgBDV06JryX%2BC3k5kilBS9gTmFbSD4vRtI0OwTTxc4%2FEtUD4T4GkfVYb5XWDa7epqN1G1TXefM21ZhN5QtU6IMB7A9gsIaOGSWyzXCkjguhYw3SJK1AfJOU06hsq6grxHG%2FzhjDlsOe%2BBjqkAUW91qtOxv2FTc7FKaVX7PmCc2ta5hM%2Bvw5%2BLsw6DYKIt8Ml8CiGL628GXDwqtC6T7v9c0%2FKRQsQ0xzv%2Fv6N6kpcbk2N5bEuo6Fxu7FdghHih%2FR1r5sSJUZbwHyUItUEJ%2FeGfFhwnpRR1qbhwCg9fbSmUb4L3bm1QhnAjJSpU3Id29wGMTu6QlC1spVE24RBK9A2oaxJSPOAUKBHpHwJNy%2F334I3&X-Amz-Signature=e1718a5085b94b911a19a7f82335a55788b488a23bf22905634240943c5a4acd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVO6NZYE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCcXTHFQbxYPqo67c6UERdw1TAOMVaMW2QpY9ZNAckrkQIhALr%2Fxy0ccvJ155Dsq000U6EnKv%2BzJbzaz%2B1viFQZJCXjKv8DCGYQABoMNjM3NDIzMTgzODA1IgwfU1rjzk2cgvzsx%2FEq3AOeqJLirSLPSNT3TFfCLdc2Lpcx1JDhJVl4jze3juMXhqmPEkP%2BXp1wVnf8u1TOhJlkN%2FRvkRc2tstEeHbbZxxCvL4W0IBejZz7%2FRHTTidI7ak2sQUPUEjoUR2MWsrRa62yoKrIl62qLvfbJBNQh95jMgDFhfRej01Q9Wkj%2Bkjk77iXFTltUn6G5ObngDmSBZJihpdL%2FGs6%2BGlfGMkKTbDTvuCuioHGGBKIUZl5pi0BYH%2BtVkKd1CBA%2B07M%2F%2FkND1reqDkj4ereAlq0znaQEFNCkP%2BE4oCp95e6VYVnU8Z0X3qW0XcEFltYBuQxgR6KMCAZMLQrevYT1LyXBkRxghY5nl%2F9bsAjRM43eSajlPiWKtBNVptoWoe%2BPJDybuAdEwVY6kDkWx1WQ%2BksxuAb0kgSiX1AmMl13k%2BHb08ulDm24rR5fqdeTunms8IOGVSBKV05qvkXQuxw9dTeg2nZkMuFVS9OsfPFidJBQ6oSUPgHlLlORyEWqRtoSgBDV06JryX%2BC3k5kilBS9gTmFbSD4vRtI0OwTTxc4%2FEtUD4T4GkfVYb5XWDa7epqN1G1TXefM21ZhN5QtU6IMB7A9gsIaOGSWyzXCkjguhYw3SJK1AfJOU06hsq6grxHG%2FzhjDlsOe%2BBjqkAUW91qtOxv2FTc7FKaVX7PmCc2ta5hM%2Bvw5%2BLsw6DYKIt8Ml8CiGL628GXDwqtC6T7v9c0%2FKRQsQ0xzv%2Fv6N6kpcbk2N5bEuo6Fxu7FdghHih%2FR1r5sSJUZbwHyUItUEJ%2FeGfFhwnpRR1qbhwCg9fbSmUb4L3bm1QhnAjJSpU3Id29wGMTu6QlC1spVE24RBK9A2oaxJSPOAUKBHpHwJNy%2F334I3&X-Amz-Signature=e427dc7fe0262da392a55878a8bbf328bc2a846451a109737de461f3efbd9115&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVO6NZYE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCcXTHFQbxYPqo67c6UERdw1TAOMVaMW2QpY9ZNAckrkQIhALr%2Fxy0ccvJ155Dsq000U6EnKv%2BzJbzaz%2B1viFQZJCXjKv8DCGYQABoMNjM3NDIzMTgzODA1IgwfU1rjzk2cgvzsx%2FEq3AOeqJLirSLPSNT3TFfCLdc2Lpcx1JDhJVl4jze3juMXhqmPEkP%2BXp1wVnf8u1TOhJlkN%2FRvkRc2tstEeHbbZxxCvL4W0IBejZz7%2FRHTTidI7ak2sQUPUEjoUR2MWsrRa62yoKrIl62qLvfbJBNQh95jMgDFhfRej01Q9Wkj%2Bkjk77iXFTltUn6G5ObngDmSBZJihpdL%2FGs6%2BGlfGMkKTbDTvuCuioHGGBKIUZl5pi0BYH%2BtVkKd1CBA%2B07M%2F%2FkND1reqDkj4ereAlq0znaQEFNCkP%2BE4oCp95e6VYVnU8Z0X3qW0XcEFltYBuQxgR6KMCAZMLQrevYT1LyXBkRxghY5nl%2F9bsAjRM43eSajlPiWKtBNVptoWoe%2BPJDybuAdEwVY6kDkWx1WQ%2BksxuAb0kgSiX1AmMl13k%2BHb08ulDm24rR5fqdeTunms8IOGVSBKV05qvkXQuxw9dTeg2nZkMuFVS9OsfPFidJBQ6oSUPgHlLlORyEWqRtoSgBDV06JryX%2BC3k5kilBS9gTmFbSD4vRtI0OwTTxc4%2FEtUD4T4GkfVYb5XWDa7epqN1G1TXefM21ZhN5QtU6IMB7A9gsIaOGSWyzXCkjguhYw3SJK1AfJOU06hsq6grxHG%2FzhjDlsOe%2BBjqkAUW91qtOxv2FTc7FKaVX7PmCc2ta5hM%2Bvw5%2BLsw6DYKIt8Ml8CiGL628GXDwqtC6T7v9c0%2FKRQsQ0xzv%2Fv6N6kpcbk2N5bEuo6Fxu7FdghHih%2FR1r5sSJUZbwHyUItUEJ%2FeGfFhwnpRR1qbhwCg9fbSmUb4L3bm1QhnAjJSpU3Id29wGMTu6QlC1spVE24RBK9A2oaxJSPOAUKBHpHwJNy%2F334I3&X-Amz-Signature=9999f6b509316af19afd2431e0bcb752c043e0a14848278b73741748fc9b810f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVO6NZYE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCcXTHFQbxYPqo67c6UERdw1TAOMVaMW2QpY9ZNAckrkQIhALr%2Fxy0ccvJ155Dsq000U6EnKv%2BzJbzaz%2B1viFQZJCXjKv8DCGYQABoMNjM3NDIzMTgzODA1IgwfU1rjzk2cgvzsx%2FEq3AOeqJLirSLPSNT3TFfCLdc2Lpcx1JDhJVl4jze3juMXhqmPEkP%2BXp1wVnf8u1TOhJlkN%2FRvkRc2tstEeHbbZxxCvL4W0IBejZz7%2FRHTTidI7ak2sQUPUEjoUR2MWsrRa62yoKrIl62qLvfbJBNQh95jMgDFhfRej01Q9Wkj%2Bkjk77iXFTltUn6G5ObngDmSBZJihpdL%2FGs6%2BGlfGMkKTbDTvuCuioHGGBKIUZl5pi0BYH%2BtVkKd1CBA%2B07M%2F%2FkND1reqDkj4ereAlq0znaQEFNCkP%2BE4oCp95e6VYVnU8Z0X3qW0XcEFltYBuQxgR6KMCAZMLQrevYT1LyXBkRxghY5nl%2F9bsAjRM43eSajlPiWKtBNVptoWoe%2BPJDybuAdEwVY6kDkWx1WQ%2BksxuAb0kgSiX1AmMl13k%2BHb08ulDm24rR5fqdeTunms8IOGVSBKV05qvkXQuxw9dTeg2nZkMuFVS9OsfPFidJBQ6oSUPgHlLlORyEWqRtoSgBDV06JryX%2BC3k5kilBS9gTmFbSD4vRtI0OwTTxc4%2FEtUD4T4GkfVYb5XWDa7epqN1G1TXefM21ZhN5QtU6IMB7A9gsIaOGSWyzXCkjguhYw3SJK1AfJOU06hsq6grxHG%2FzhjDlsOe%2BBjqkAUW91qtOxv2FTc7FKaVX7PmCc2ta5hM%2Bvw5%2BLsw6DYKIt8Ml8CiGL628GXDwqtC6T7v9c0%2FKRQsQ0xzv%2Fv6N6kpcbk2N5bEuo6Fxu7FdghHih%2FR1r5sSJUZbwHyUItUEJ%2FeGfFhwnpRR1qbhwCg9fbSmUb4L3bm1QhnAjJSpU3Id29wGMTu6QlC1spVE24RBK9A2oaxJSPOAUKBHpHwJNy%2F334I3&X-Amz-Signature=462fdeeed9d811996b43e6ff3ee0888198db56f7eca5f8cce717b428cac602ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVO6NZYE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCcXTHFQbxYPqo67c6UERdw1TAOMVaMW2QpY9ZNAckrkQIhALr%2Fxy0ccvJ155Dsq000U6EnKv%2BzJbzaz%2B1viFQZJCXjKv8DCGYQABoMNjM3NDIzMTgzODA1IgwfU1rjzk2cgvzsx%2FEq3AOeqJLirSLPSNT3TFfCLdc2Lpcx1JDhJVl4jze3juMXhqmPEkP%2BXp1wVnf8u1TOhJlkN%2FRvkRc2tstEeHbbZxxCvL4W0IBejZz7%2FRHTTidI7ak2sQUPUEjoUR2MWsrRa62yoKrIl62qLvfbJBNQh95jMgDFhfRej01Q9Wkj%2Bkjk77iXFTltUn6G5ObngDmSBZJihpdL%2FGs6%2BGlfGMkKTbDTvuCuioHGGBKIUZl5pi0BYH%2BtVkKd1CBA%2B07M%2F%2FkND1reqDkj4ereAlq0znaQEFNCkP%2BE4oCp95e6VYVnU8Z0X3qW0XcEFltYBuQxgR6KMCAZMLQrevYT1LyXBkRxghY5nl%2F9bsAjRM43eSajlPiWKtBNVptoWoe%2BPJDybuAdEwVY6kDkWx1WQ%2BksxuAb0kgSiX1AmMl13k%2BHb08ulDm24rR5fqdeTunms8IOGVSBKV05qvkXQuxw9dTeg2nZkMuFVS9OsfPFidJBQ6oSUPgHlLlORyEWqRtoSgBDV06JryX%2BC3k5kilBS9gTmFbSD4vRtI0OwTTxc4%2FEtUD4T4GkfVYb5XWDa7epqN1G1TXefM21ZhN5QtU6IMB7A9gsIaOGSWyzXCkjguhYw3SJK1AfJOU06hsq6grxHG%2FzhjDlsOe%2BBjqkAUW91qtOxv2FTc7FKaVX7PmCc2ta5hM%2Bvw5%2BLsw6DYKIt8Ml8CiGL628GXDwqtC6T7v9c0%2FKRQsQ0xzv%2Fv6N6kpcbk2N5bEuo6Fxu7FdghHih%2FR1r5sSJUZbwHyUItUEJ%2FeGfFhwnpRR1qbhwCg9fbSmUb4L3bm1QhnAjJSpU3Id29wGMTu6QlC1spVE24RBK9A2oaxJSPOAUKBHpHwJNy%2F334I3&X-Amz-Signature=f917f1bb196936e255c41de671a0efad1281e6606382d26c4144d5cf8ac45c85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVO6NZYE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCcXTHFQbxYPqo67c6UERdw1TAOMVaMW2QpY9ZNAckrkQIhALr%2Fxy0ccvJ155Dsq000U6EnKv%2BzJbzaz%2B1viFQZJCXjKv8DCGYQABoMNjM3NDIzMTgzODA1IgwfU1rjzk2cgvzsx%2FEq3AOeqJLirSLPSNT3TFfCLdc2Lpcx1JDhJVl4jze3juMXhqmPEkP%2BXp1wVnf8u1TOhJlkN%2FRvkRc2tstEeHbbZxxCvL4W0IBejZz7%2FRHTTidI7ak2sQUPUEjoUR2MWsrRa62yoKrIl62qLvfbJBNQh95jMgDFhfRej01Q9Wkj%2Bkjk77iXFTltUn6G5ObngDmSBZJihpdL%2FGs6%2BGlfGMkKTbDTvuCuioHGGBKIUZl5pi0BYH%2BtVkKd1CBA%2B07M%2F%2FkND1reqDkj4ereAlq0znaQEFNCkP%2BE4oCp95e6VYVnU8Z0X3qW0XcEFltYBuQxgR6KMCAZMLQrevYT1LyXBkRxghY5nl%2F9bsAjRM43eSajlPiWKtBNVptoWoe%2BPJDybuAdEwVY6kDkWx1WQ%2BksxuAb0kgSiX1AmMl13k%2BHb08ulDm24rR5fqdeTunms8IOGVSBKV05qvkXQuxw9dTeg2nZkMuFVS9OsfPFidJBQ6oSUPgHlLlORyEWqRtoSgBDV06JryX%2BC3k5kilBS9gTmFbSD4vRtI0OwTTxc4%2FEtUD4T4GkfVYb5XWDa7epqN1G1TXefM21ZhN5QtU6IMB7A9gsIaOGSWyzXCkjguhYw3SJK1AfJOU06hsq6grxHG%2FzhjDlsOe%2BBjqkAUW91qtOxv2FTc7FKaVX7PmCc2ta5hM%2Bvw5%2BLsw6DYKIt8Ml8CiGL628GXDwqtC6T7v9c0%2FKRQsQ0xzv%2Fv6N6kpcbk2N5bEuo6Fxu7FdghHih%2FR1r5sSJUZbwHyUItUEJ%2FeGfFhwnpRR1qbhwCg9fbSmUb4L3bm1QhnAjJSpU3Id29wGMTu6QlC1spVE24RBK9A2oaxJSPOAUKBHpHwJNy%2F334I3&X-Amz-Signature=0a6dd205ad268ae17b49744640cf503cb402b0bcae597866b8abe4cf445f58a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
