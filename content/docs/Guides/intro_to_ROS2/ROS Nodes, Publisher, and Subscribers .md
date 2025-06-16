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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7OMSV3N%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCK62o%2BiaasVJ2tay00mlo7yPlbXlVQqE%2Fgh%2BZ03FKwOwIgEUUDWh8gLLAKb%2FA6%2FYzHG1I%2FSHQWEZF%2BBqIaN0xtlxAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFrfKO1goLFkRcJ%2BISrcA8FsFx4DFQdxPYc5AKEP0bHCwj1bmcJzAOL%2FcM7DdVO6rW0osAIAIGecRjht7mq1Qv8Wm%2FIsIYHlEDmTXBST0PBS8ZfVwia2bcqFcdGk62ITNinZBRqgV4uQrjmZDV%2BlqLu%2FhmT1W67xmFDyo3v6E884sjWgggg%2FU%2FIfjkOY1Qp0z22Yik0GlHW5ODxQIEXy75w4IM9Js71tGjyjJn7UxIhhYgd9ae7NynPGe4yv3YulsrnEUEvEEFsNqG6sUI%2FC7cn%2FHOY7QaH3X6GVMXQy9MeQE4%2BL14gta00G9J2Yo3MB07L6msYguxIjYFqsZtW8lm73dMebDXzUIs5Vk9WBfa4HkJ4HSFfQCOz2J%2FJ1yVd21IFSWYv7Xp3rm0USiRoqv5wtw81Et1gaHjVh0iYznhPnS39RVBUGNdj9Xd1DO%2BBIgk1iiF%2B5%2B9BXtUaxjtMUiYkrtiCmRRD8cehYu1AVJkj2rCAA7RYrJi%2F6JWabMzTGrKFHpBe2yX6d2U7Luun9b%2FrJ3J8BJei%2FdQg98r0YDlmy0PE9KRWtDA%2Bry2%2BALPqVH7lSjnY7Bk6IKFr4beNf4zn7d0C%2BTSeiG2uisai6BmLRqRNHbzByhphxgj2kKd3mXDp8RWCARuhLc6FXMOCzv8IGOqUBYedO%2BbKKBoKYdd%2FtWRHMf2qHwRdpnByy7XfWsTYX8Om8CTm8%2BigxDrNDGW2QCNPKcxzFRuo0YqXl0rFzDyczXbMoA77aJC1ERSSq1Q4O5D3RXPDDF4PDWjBwDQ4tTxlr8DIZSyeycPnMvJBnuPbQSd%2F0oegEkB5FHkJT5eRnK6S1yo0KywwswaeWH29yfGtDPwgPhBC47vFq8agHVAIBPw%2BlBsED&X-Amz-Signature=0b29f5a189064f0b929b989a5d51271e07da895400dc8289e0f9bd9e92503685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7OMSV3N%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCK62o%2BiaasVJ2tay00mlo7yPlbXlVQqE%2Fgh%2BZ03FKwOwIgEUUDWh8gLLAKb%2FA6%2FYzHG1I%2FSHQWEZF%2BBqIaN0xtlxAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFrfKO1goLFkRcJ%2BISrcA8FsFx4DFQdxPYc5AKEP0bHCwj1bmcJzAOL%2FcM7DdVO6rW0osAIAIGecRjht7mq1Qv8Wm%2FIsIYHlEDmTXBST0PBS8ZfVwia2bcqFcdGk62ITNinZBRqgV4uQrjmZDV%2BlqLu%2FhmT1W67xmFDyo3v6E884sjWgggg%2FU%2FIfjkOY1Qp0z22Yik0GlHW5ODxQIEXy75w4IM9Js71tGjyjJn7UxIhhYgd9ae7NynPGe4yv3YulsrnEUEvEEFsNqG6sUI%2FC7cn%2FHOY7QaH3X6GVMXQy9MeQE4%2BL14gta00G9J2Yo3MB07L6msYguxIjYFqsZtW8lm73dMebDXzUIs5Vk9WBfa4HkJ4HSFfQCOz2J%2FJ1yVd21IFSWYv7Xp3rm0USiRoqv5wtw81Et1gaHjVh0iYznhPnS39RVBUGNdj9Xd1DO%2BBIgk1iiF%2B5%2B9BXtUaxjtMUiYkrtiCmRRD8cehYu1AVJkj2rCAA7RYrJi%2F6JWabMzTGrKFHpBe2yX6d2U7Luun9b%2FrJ3J8BJei%2FdQg98r0YDlmy0PE9KRWtDA%2Bry2%2BALPqVH7lSjnY7Bk6IKFr4beNf4zn7d0C%2BTSeiG2uisai6BmLRqRNHbzByhphxgj2kKd3mXDp8RWCARuhLc6FXMOCzv8IGOqUBYedO%2BbKKBoKYdd%2FtWRHMf2qHwRdpnByy7XfWsTYX8Om8CTm8%2BigxDrNDGW2QCNPKcxzFRuo0YqXl0rFzDyczXbMoA77aJC1ERSSq1Q4O5D3RXPDDF4PDWjBwDQ4tTxlr8DIZSyeycPnMvJBnuPbQSd%2F0oegEkB5FHkJT5eRnK6S1yo0KywwswaeWH29yfGtDPwgPhBC47vFq8agHVAIBPw%2BlBsED&X-Amz-Signature=d2c39f849c82b68471ec91003107a7903d6415b6465c52ad7b3ce1b75a022ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7OMSV3N%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCK62o%2BiaasVJ2tay00mlo7yPlbXlVQqE%2Fgh%2BZ03FKwOwIgEUUDWh8gLLAKb%2FA6%2FYzHG1I%2FSHQWEZF%2BBqIaN0xtlxAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFrfKO1goLFkRcJ%2BISrcA8FsFx4DFQdxPYc5AKEP0bHCwj1bmcJzAOL%2FcM7DdVO6rW0osAIAIGecRjht7mq1Qv8Wm%2FIsIYHlEDmTXBST0PBS8ZfVwia2bcqFcdGk62ITNinZBRqgV4uQrjmZDV%2BlqLu%2FhmT1W67xmFDyo3v6E884sjWgggg%2FU%2FIfjkOY1Qp0z22Yik0GlHW5ODxQIEXy75w4IM9Js71tGjyjJn7UxIhhYgd9ae7NynPGe4yv3YulsrnEUEvEEFsNqG6sUI%2FC7cn%2FHOY7QaH3X6GVMXQy9MeQE4%2BL14gta00G9J2Yo3MB07L6msYguxIjYFqsZtW8lm73dMebDXzUIs5Vk9WBfa4HkJ4HSFfQCOz2J%2FJ1yVd21IFSWYv7Xp3rm0USiRoqv5wtw81Et1gaHjVh0iYznhPnS39RVBUGNdj9Xd1DO%2BBIgk1iiF%2B5%2B9BXtUaxjtMUiYkrtiCmRRD8cehYu1AVJkj2rCAA7RYrJi%2F6JWabMzTGrKFHpBe2yX6d2U7Luun9b%2FrJ3J8BJei%2FdQg98r0YDlmy0PE9KRWtDA%2Bry2%2BALPqVH7lSjnY7Bk6IKFr4beNf4zn7d0C%2BTSeiG2uisai6BmLRqRNHbzByhphxgj2kKd3mXDp8RWCARuhLc6FXMOCzv8IGOqUBYedO%2BbKKBoKYdd%2FtWRHMf2qHwRdpnByy7XfWsTYX8Om8CTm8%2BigxDrNDGW2QCNPKcxzFRuo0YqXl0rFzDyczXbMoA77aJC1ERSSq1Q4O5D3RXPDDF4PDWjBwDQ4tTxlr8DIZSyeycPnMvJBnuPbQSd%2F0oegEkB5FHkJT5eRnK6S1yo0KywwswaeWH29yfGtDPwgPhBC47vFq8agHVAIBPw%2BlBsED&X-Amz-Signature=66fca779bbd46638f2f74f34e439752904804c0673dc3b636f35d7c131979c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7OMSV3N%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCK62o%2BiaasVJ2tay00mlo7yPlbXlVQqE%2Fgh%2BZ03FKwOwIgEUUDWh8gLLAKb%2FA6%2FYzHG1I%2FSHQWEZF%2BBqIaN0xtlxAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFrfKO1goLFkRcJ%2BISrcA8FsFx4DFQdxPYc5AKEP0bHCwj1bmcJzAOL%2FcM7DdVO6rW0osAIAIGecRjht7mq1Qv8Wm%2FIsIYHlEDmTXBST0PBS8ZfVwia2bcqFcdGk62ITNinZBRqgV4uQrjmZDV%2BlqLu%2FhmT1W67xmFDyo3v6E884sjWgggg%2FU%2FIfjkOY1Qp0z22Yik0GlHW5ODxQIEXy75w4IM9Js71tGjyjJn7UxIhhYgd9ae7NynPGe4yv3YulsrnEUEvEEFsNqG6sUI%2FC7cn%2FHOY7QaH3X6GVMXQy9MeQE4%2BL14gta00G9J2Yo3MB07L6msYguxIjYFqsZtW8lm73dMebDXzUIs5Vk9WBfa4HkJ4HSFfQCOz2J%2FJ1yVd21IFSWYv7Xp3rm0USiRoqv5wtw81Et1gaHjVh0iYznhPnS39RVBUGNdj9Xd1DO%2BBIgk1iiF%2B5%2B9BXtUaxjtMUiYkrtiCmRRD8cehYu1AVJkj2rCAA7RYrJi%2F6JWabMzTGrKFHpBe2yX6d2U7Luun9b%2FrJ3J8BJei%2FdQg98r0YDlmy0PE9KRWtDA%2Bry2%2BALPqVH7lSjnY7Bk6IKFr4beNf4zn7d0C%2BTSeiG2uisai6BmLRqRNHbzByhphxgj2kKd3mXDp8RWCARuhLc6FXMOCzv8IGOqUBYedO%2BbKKBoKYdd%2FtWRHMf2qHwRdpnByy7XfWsTYX8Om8CTm8%2BigxDrNDGW2QCNPKcxzFRuo0YqXl0rFzDyczXbMoA77aJC1ERSSq1Q4O5D3RXPDDF4PDWjBwDQ4tTxlr8DIZSyeycPnMvJBnuPbQSd%2F0oegEkB5FHkJT5eRnK6S1yo0KywwswaeWH29yfGtDPwgPhBC47vFq8agHVAIBPw%2BlBsED&X-Amz-Signature=491945924a838a4cad973133758e2ed2b77d9e274829033a07dfa6010c1780ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7OMSV3N%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCK62o%2BiaasVJ2tay00mlo7yPlbXlVQqE%2Fgh%2BZ03FKwOwIgEUUDWh8gLLAKb%2FA6%2FYzHG1I%2FSHQWEZF%2BBqIaN0xtlxAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFrfKO1goLFkRcJ%2BISrcA8FsFx4DFQdxPYc5AKEP0bHCwj1bmcJzAOL%2FcM7DdVO6rW0osAIAIGecRjht7mq1Qv8Wm%2FIsIYHlEDmTXBST0PBS8ZfVwia2bcqFcdGk62ITNinZBRqgV4uQrjmZDV%2BlqLu%2FhmT1W67xmFDyo3v6E884sjWgggg%2FU%2FIfjkOY1Qp0z22Yik0GlHW5ODxQIEXy75w4IM9Js71tGjyjJn7UxIhhYgd9ae7NynPGe4yv3YulsrnEUEvEEFsNqG6sUI%2FC7cn%2FHOY7QaH3X6GVMXQy9MeQE4%2BL14gta00G9J2Yo3MB07L6msYguxIjYFqsZtW8lm73dMebDXzUIs5Vk9WBfa4HkJ4HSFfQCOz2J%2FJ1yVd21IFSWYv7Xp3rm0USiRoqv5wtw81Et1gaHjVh0iYznhPnS39RVBUGNdj9Xd1DO%2BBIgk1iiF%2B5%2B9BXtUaxjtMUiYkrtiCmRRD8cehYu1AVJkj2rCAA7RYrJi%2F6JWabMzTGrKFHpBe2yX6d2U7Luun9b%2FrJ3J8BJei%2FdQg98r0YDlmy0PE9KRWtDA%2Bry2%2BALPqVH7lSjnY7Bk6IKFr4beNf4zn7d0C%2BTSeiG2uisai6BmLRqRNHbzByhphxgj2kKd3mXDp8RWCARuhLc6FXMOCzv8IGOqUBYedO%2BbKKBoKYdd%2FtWRHMf2qHwRdpnByy7XfWsTYX8Om8CTm8%2BigxDrNDGW2QCNPKcxzFRuo0YqXl0rFzDyczXbMoA77aJC1ERSSq1Q4O5D3RXPDDF4PDWjBwDQ4tTxlr8DIZSyeycPnMvJBnuPbQSd%2F0oegEkB5FHkJT5eRnK6S1yo0KywwswaeWH29yfGtDPwgPhBC47vFq8agHVAIBPw%2BlBsED&X-Amz-Signature=5f9f9c42e923a7172c357cb86e9d1fe65953f70366669d0f6e12bfea758f6fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7OMSV3N%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCK62o%2BiaasVJ2tay00mlo7yPlbXlVQqE%2Fgh%2BZ03FKwOwIgEUUDWh8gLLAKb%2FA6%2FYzHG1I%2FSHQWEZF%2BBqIaN0xtlxAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFrfKO1goLFkRcJ%2BISrcA8FsFx4DFQdxPYc5AKEP0bHCwj1bmcJzAOL%2FcM7DdVO6rW0osAIAIGecRjht7mq1Qv8Wm%2FIsIYHlEDmTXBST0PBS8ZfVwia2bcqFcdGk62ITNinZBRqgV4uQrjmZDV%2BlqLu%2FhmT1W67xmFDyo3v6E884sjWgggg%2FU%2FIfjkOY1Qp0z22Yik0GlHW5ODxQIEXy75w4IM9Js71tGjyjJn7UxIhhYgd9ae7NynPGe4yv3YulsrnEUEvEEFsNqG6sUI%2FC7cn%2FHOY7QaH3X6GVMXQy9MeQE4%2BL14gta00G9J2Yo3MB07L6msYguxIjYFqsZtW8lm73dMebDXzUIs5Vk9WBfa4HkJ4HSFfQCOz2J%2FJ1yVd21IFSWYv7Xp3rm0USiRoqv5wtw81Et1gaHjVh0iYznhPnS39RVBUGNdj9Xd1DO%2BBIgk1iiF%2B5%2B9BXtUaxjtMUiYkrtiCmRRD8cehYu1AVJkj2rCAA7RYrJi%2F6JWabMzTGrKFHpBe2yX6d2U7Luun9b%2FrJ3J8BJei%2FdQg98r0YDlmy0PE9KRWtDA%2Bry2%2BALPqVH7lSjnY7Bk6IKFr4beNf4zn7d0C%2BTSeiG2uisai6BmLRqRNHbzByhphxgj2kKd3mXDp8RWCARuhLc6FXMOCzv8IGOqUBYedO%2BbKKBoKYdd%2FtWRHMf2qHwRdpnByy7XfWsTYX8Om8CTm8%2BigxDrNDGW2QCNPKcxzFRuo0YqXl0rFzDyczXbMoA77aJC1ERSSq1Q4O5D3RXPDDF4PDWjBwDQ4tTxlr8DIZSyeycPnMvJBnuPbQSd%2F0oegEkB5FHkJT5eRnK6S1yo0KywwswaeWH29yfGtDPwgPhBC47vFq8agHVAIBPw%2BlBsED&X-Amz-Signature=ef385d03227f2343c780819e3706a4896c297efd7e9323732c8bda14bb4ff3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7OMSV3N%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCK62o%2BiaasVJ2tay00mlo7yPlbXlVQqE%2Fgh%2BZ03FKwOwIgEUUDWh8gLLAKb%2FA6%2FYzHG1I%2FSHQWEZF%2BBqIaN0xtlxAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFrfKO1goLFkRcJ%2BISrcA8FsFx4DFQdxPYc5AKEP0bHCwj1bmcJzAOL%2FcM7DdVO6rW0osAIAIGecRjht7mq1Qv8Wm%2FIsIYHlEDmTXBST0PBS8ZfVwia2bcqFcdGk62ITNinZBRqgV4uQrjmZDV%2BlqLu%2FhmT1W67xmFDyo3v6E884sjWgggg%2FU%2FIfjkOY1Qp0z22Yik0GlHW5ODxQIEXy75w4IM9Js71tGjyjJn7UxIhhYgd9ae7NynPGe4yv3YulsrnEUEvEEFsNqG6sUI%2FC7cn%2FHOY7QaH3X6GVMXQy9MeQE4%2BL14gta00G9J2Yo3MB07L6msYguxIjYFqsZtW8lm73dMebDXzUIs5Vk9WBfa4HkJ4HSFfQCOz2J%2FJ1yVd21IFSWYv7Xp3rm0USiRoqv5wtw81Et1gaHjVh0iYznhPnS39RVBUGNdj9Xd1DO%2BBIgk1iiF%2B5%2B9BXtUaxjtMUiYkrtiCmRRD8cehYu1AVJkj2rCAA7RYrJi%2F6JWabMzTGrKFHpBe2yX6d2U7Luun9b%2FrJ3J8BJei%2FdQg98r0YDlmy0PE9KRWtDA%2Bry2%2BALPqVH7lSjnY7Bk6IKFr4beNf4zn7d0C%2BTSeiG2uisai6BmLRqRNHbzByhphxgj2kKd3mXDp8RWCARuhLc6FXMOCzv8IGOqUBYedO%2BbKKBoKYdd%2FtWRHMf2qHwRdpnByy7XfWsTYX8Om8CTm8%2BigxDrNDGW2QCNPKcxzFRuo0YqXl0rFzDyczXbMoA77aJC1ERSSq1Q4O5D3RXPDDF4PDWjBwDQ4tTxlr8DIZSyeycPnMvJBnuPbQSd%2F0oegEkB5FHkJT5eRnK6S1yo0KywwswaeWH29yfGtDPwgPhBC47vFq8agHVAIBPw%2BlBsED&X-Amz-Signature=9809fa5071b3faa314de4380692eea2518ac1102d72ff6a8bb187bbdc50f2c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7OMSV3N%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCK62o%2BiaasVJ2tay00mlo7yPlbXlVQqE%2Fgh%2BZ03FKwOwIgEUUDWh8gLLAKb%2FA6%2FYzHG1I%2FSHQWEZF%2BBqIaN0xtlxAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFrfKO1goLFkRcJ%2BISrcA8FsFx4DFQdxPYc5AKEP0bHCwj1bmcJzAOL%2FcM7DdVO6rW0osAIAIGecRjht7mq1Qv8Wm%2FIsIYHlEDmTXBST0PBS8ZfVwia2bcqFcdGk62ITNinZBRqgV4uQrjmZDV%2BlqLu%2FhmT1W67xmFDyo3v6E884sjWgggg%2FU%2FIfjkOY1Qp0z22Yik0GlHW5ODxQIEXy75w4IM9Js71tGjyjJn7UxIhhYgd9ae7NynPGe4yv3YulsrnEUEvEEFsNqG6sUI%2FC7cn%2FHOY7QaH3X6GVMXQy9MeQE4%2BL14gta00G9J2Yo3MB07L6msYguxIjYFqsZtW8lm73dMebDXzUIs5Vk9WBfa4HkJ4HSFfQCOz2J%2FJ1yVd21IFSWYv7Xp3rm0USiRoqv5wtw81Et1gaHjVh0iYznhPnS39RVBUGNdj9Xd1DO%2BBIgk1iiF%2B5%2B9BXtUaxjtMUiYkrtiCmRRD8cehYu1AVJkj2rCAA7RYrJi%2F6JWabMzTGrKFHpBe2yX6d2U7Luun9b%2FrJ3J8BJei%2FdQg98r0YDlmy0PE9KRWtDA%2Bry2%2BALPqVH7lSjnY7Bk6IKFr4beNf4zn7d0C%2BTSeiG2uisai6BmLRqRNHbzByhphxgj2kKd3mXDp8RWCARuhLc6FXMOCzv8IGOqUBYedO%2BbKKBoKYdd%2FtWRHMf2qHwRdpnByy7XfWsTYX8Om8CTm8%2BigxDrNDGW2QCNPKcxzFRuo0YqXl0rFzDyczXbMoA77aJC1ERSSq1Q4O5D3RXPDDF4PDWjBwDQ4tTxlr8DIZSyeycPnMvJBnuPbQSd%2F0oegEkB5FHkJT5eRnK6S1yo0KywwswaeWH29yfGtDPwgPhBC47vFq8agHVAIBPw%2BlBsED&X-Amz-Signature=2cf314c00bac13ac05f4176f61e5cce5ec098a338646341ec0222db9672869cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
