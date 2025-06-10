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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7WZKWW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2FIZHCWD5InAJ2EzScRMNUhB2u3wWYe7p7j6kQ7xS8AiEAj%2FARPxDjLQPNLme%2FDov1wDgZAnZx5Y%2FBiHJIwzTHOfQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BvfBwHYp4Kb%2BdubircAx1Dx0c6JGbeU5rp%2FXYdEu%2Bal%2FDn%2BgaYGIgNXB2kvFaaqPk0s25JjGVr8O5ovDGaMeY6E1vdtIAPXmaIz20GLsGgN3AI6s%2BmopUSIcQ37wYwq8p%2FvoWdJ6McMizjgg4ilRgGylfOp6dKcR8kfxfYa7oFgGmXmlKAlwb2dqVTENEsX1HWEwTppSzVWN7CmOruneBmrOhQOh1Qr%2BU0Jfh798qTuivyvxv0xkfb1cOxZHtEsXj%2BeJnwKErUJ24VUu1aXrCPRcrssIa3hWqaU5g0HFIDg2mywLuhh%2B%2BoFy2cnQiPsa8y5CgqpiVS2xAxvtHZpJBH0HwzeNtDF6wv29cbI3fjmXeKB37%2BHw53kChsVYelUgwJrdTsyn87A6TXwVB%2F00SzRRspRIflZ5S7w0VoqynSbeeIOSupt6jpbbrCB5Yy3KpH9PuLWxcvReNUpl89gIBYN2zg3LpzxSRpMQR2g1D33KcLihp5dYvAEVUbCRX2We5WBfBU8SSoKy35hunEV0C9PrVPIWOhe6Mf60HreBfo5ZeYZr%2BigkOwDYJvABoRWaMXoBCKqsg1kZrcQ%2FizJKQOB8GBTiPTD52ToGFjW0eG%2Fq0oXz61rjOxmqwcf90EqsHDFB8559tk9MkrMO7YnsIGOqUBzMru7NCLwDqqYH7STlEByQJKJQx1Q0WC%2BJi7fCJe%2BYH9AhyHY3tzermFJv9NlRynLd4ba20389g3gLTbTAC2wWOsVprCfG%2FAq%2F1KjXZCF1A5Rkq9EpytYS7cBqrGwtvuhJ6IOI7R8HPCSBAjiQ7iWOaCQKDROG8HJ%2Bu50WzJyifPwHkhglNWwpcgfgd8sfGDJwDDEUpai%2BTAFV9ic0250y6qnObU&X-Amz-Signature=116001ca6baa443a31eb55777919af401901743c752dccfcd6844aa900d96c74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7WZKWW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2FIZHCWD5InAJ2EzScRMNUhB2u3wWYe7p7j6kQ7xS8AiEAj%2FARPxDjLQPNLme%2FDov1wDgZAnZx5Y%2FBiHJIwzTHOfQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BvfBwHYp4Kb%2BdubircAx1Dx0c6JGbeU5rp%2FXYdEu%2Bal%2FDn%2BgaYGIgNXB2kvFaaqPk0s25JjGVr8O5ovDGaMeY6E1vdtIAPXmaIz20GLsGgN3AI6s%2BmopUSIcQ37wYwq8p%2FvoWdJ6McMizjgg4ilRgGylfOp6dKcR8kfxfYa7oFgGmXmlKAlwb2dqVTENEsX1HWEwTppSzVWN7CmOruneBmrOhQOh1Qr%2BU0Jfh798qTuivyvxv0xkfb1cOxZHtEsXj%2BeJnwKErUJ24VUu1aXrCPRcrssIa3hWqaU5g0HFIDg2mywLuhh%2B%2BoFy2cnQiPsa8y5CgqpiVS2xAxvtHZpJBH0HwzeNtDF6wv29cbI3fjmXeKB37%2BHw53kChsVYelUgwJrdTsyn87A6TXwVB%2F00SzRRspRIflZ5S7w0VoqynSbeeIOSupt6jpbbrCB5Yy3KpH9PuLWxcvReNUpl89gIBYN2zg3LpzxSRpMQR2g1D33KcLihp5dYvAEVUbCRX2We5WBfBU8SSoKy35hunEV0C9PrVPIWOhe6Mf60HreBfo5ZeYZr%2BigkOwDYJvABoRWaMXoBCKqsg1kZrcQ%2FizJKQOB8GBTiPTD52ToGFjW0eG%2Fq0oXz61rjOxmqwcf90EqsHDFB8559tk9MkrMO7YnsIGOqUBzMru7NCLwDqqYH7STlEByQJKJQx1Q0WC%2BJi7fCJe%2BYH9AhyHY3tzermFJv9NlRynLd4ba20389g3gLTbTAC2wWOsVprCfG%2FAq%2F1KjXZCF1A5Rkq9EpytYS7cBqrGwtvuhJ6IOI7R8HPCSBAjiQ7iWOaCQKDROG8HJ%2Bu50WzJyifPwHkhglNWwpcgfgd8sfGDJwDDEUpai%2BTAFV9ic0250y6qnObU&X-Amz-Signature=2cf0bd3c91374a2ab42c4b58acba6cde81bf5e4a3791ef5ade9519ef14f178cc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7WZKWW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2FIZHCWD5InAJ2EzScRMNUhB2u3wWYe7p7j6kQ7xS8AiEAj%2FARPxDjLQPNLme%2FDov1wDgZAnZx5Y%2FBiHJIwzTHOfQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BvfBwHYp4Kb%2BdubircAx1Dx0c6JGbeU5rp%2FXYdEu%2Bal%2FDn%2BgaYGIgNXB2kvFaaqPk0s25JjGVr8O5ovDGaMeY6E1vdtIAPXmaIz20GLsGgN3AI6s%2BmopUSIcQ37wYwq8p%2FvoWdJ6McMizjgg4ilRgGylfOp6dKcR8kfxfYa7oFgGmXmlKAlwb2dqVTENEsX1HWEwTppSzVWN7CmOruneBmrOhQOh1Qr%2BU0Jfh798qTuivyvxv0xkfb1cOxZHtEsXj%2BeJnwKErUJ24VUu1aXrCPRcrssIa3hWqaU5g0HFIDg2mywLuhh%2B%2BoFy2cnQiPsa8y5CgqpiVS2xAxvtHZpJBH0HwzeNtDF6wv29cbI3fjmXeKB37%2BHw53kChsVYelUgwJrdTsyn87A6TXwVB%2F00SzRRspRIflZ5S7w0VoqynSbeeIOSupt6jpbbrCB5Yy3KpH9PuLWxcvReNUpl89gIBYN2zg3LpzxSRpMQR2g1D33KcLihp5dYvAEVUbCRX2We5WBfBU8SSoKy35hunEV0C9PrVPIWOhe6Mf60HreBfo5ZeYZr%2BigkOwDYJvABoRWaMXoBCKqsg1kZrcQ%2FizJKQOB8GBTiPTD52ToGFjW0eG%2Fq0oXz61rjOxmqwcf90EqsHDFB8559tk9MkrMO7YnsIGOqUBzMru7NCLwDqqYH7STlEByQJKJQx1Q0WC%2BJi7fCJe%2BYH9AhyHY3tzermFJv9NlRynLd4ba20389g3gLTbTAC2wWOsVprCfG%2FAq%2F1KjXZCF1A5Rkq9EpytYS7cBqrGwtvuhJ6IOI7R8HPCSBAjiQ7iWOaCQKDROG8HJ%2Bu50WzJyifPwHkhglNWwpcgfgd8sfGDJwDDEUpai%2BTAFV9ic0250y6qnObU&X-Amz-Signature=84547a222df4bcaa9e9d2ce5f49039583d71a915f8045f6bfcaba7363441cfbc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7WZKWW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2FIZHCWD5InAJ2EzScRMNUhB2u3wWYe7p7j6kQ7xS8AiEAj%2FARPxDjLQPNLme%2FDov1wDgZAnZx5Y%2FBiHJIwzTHOfQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BvfBwHYp4Kb%2BdubircAx1Dx0c6JGbeU5rp%2FXYdEu%2Bal%2FDn%2BgaYGIgNXB2kvFaaqPk0s25JjGVr8O5ovDGaMeY6E1vdtIAPXmaIz20GLsGgN3AI6s%2BmopUSIcQ37wYwq8p%2FvoWdJ6McMizjgg4ilRgGylfOp6dKcR8kfxfYa7oFgGmXmlKAlwb2dqVTENEsX1HWEwTppSzVWN7CmOruneBmrOhQOh1Qr%2BU0Jfh798qTuivyvxv0xkfb1cOxZHtEsXj%2BeJnwKErUJ24VUu1aXrCPRcrssIa3hWqaU5g0HFIDg2mywLuhh%2B%2BoFy2cnQiPsa8y5CgqpiVS2xAxvtHZpJBH0HwzeNtDF6wv29cbI3fjmXeKB37%2BHw53kChsVYelUgwJrdTsyn87A6TXwVB%2F00SzRRspRIflZ5S7w0VoqynSbeeIOSupt6jpbbrCB5Yy3KpH9PuLWxcvReNUpl89gIBYN2zg3LpzxSRpMQR2g1D33KcLihp5dYvAEVUbCRX2We5WBfBU8SSoKy35hunEV0C9PrVPIWOhe6Mf60HreBfo5ZeYZr%2BigkOwDYJvABoRWaMXoBCKqsg1kZrcQ%2FizJKQOB8GBTiPTD52ToGFjW0eG%2Fq0oXz61rjOxmqwcf90EqsHDFB8559tk9MkrMO7YnsIGOqUBzMru7NCLwDqqYH7STlEByQJKJQx1Q0WC%2BJi7fCJe%2BYH9AhyHY3tzermFJv9NlRynLd4ba20389g3gLTbTAC2wWOsVprCfG%2FAq%2F1KjXZCF1A5Rkq9EpytYS7cBqrGwtvuhJ6IOI7R8HPCSBAjiQ7iWOaCQKDROG8HJ%2Bu50WzJyifPwHkhglNWwpcgfgd8sfGDJwDDEUpai%2BTAFV9ic0250y6qnObU&X-Amz-Signature=6e740d20874fc799a2193ef729d0fdca7bd75b2864a00aced2d2a5eb9fc238f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7WZKWW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2FIZHCWD5InAJ2EzScRMNUhB2u3wWYe7p7j6kQ7xS8AiEAj%2FARPxDjLQPNLme%2FDov1wDgZAnZx5Y%2FBiHJIwzTHOfQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BvfBwHYp4Kb%2BdubircAx1Dx0c6JGbeU5rp%2FXYdEu%2Bal%2FDn%2BgaYGIgNXB2kvFaaqPk0s25JjGVr8O5ovDGaMeY6E1vdtIAPXmaIz20GLsGgN3AI6s%2BmopUSIcQ37wYwq8p%2FvoWdJ6McMizjgg4ilRgGylfOp6dKcR8kfxfYa7oFgGmXmlKAlwb2dqVTENEsX1HWEwTppSzVWN7CmOruneBmrOhQOh1Qr%2BU0Jfh798qTuivyvxv0xkfb1cOxZHtEsXj%2BeJnwKErUJ24VUu1aXrCPRcrssIa3hWqaU5g0HFIDg2mywLuhh%2B%2BoFy2cnQiPsa8y5CgqpiVS2xAxvtHZpJBH0HwzeNtDF6wv29cbI3fjmXeKB37%2BHw53kChsVYelUgwJrdTsyn87A6TXwVB%2F00SzRRspRIflZ5S7w0VoqynSbeeIOSupt6jpbbrCB5Yy3KpH9PuLWxcvReNUpl89gIBYN2zg3LpzxSRpMQR2g1D33KcLihp5dYvAEVUbCRX2We5WBfBU8SSoKy35hunEV0C9PrVPIWOhe6Mf60HreBfo5ZeYZr%2BigkOwDYJvABoRWaMXoBCKqsg1kZrcQ%2FizJKQOB8GBTiPTD52ToGFjW0eG%2Fq0oXz61rjOxmqwcf90EqsHDFB8559tk9MkrMO7YnsIGOqUBzMru7NCLwDqqYH7STlEByQJKJQx1Q0WC%2BJi7fCJe%2BYH9AhyHY3tzermFJv9NlRynLd4ba20389g3gLTbTAC2wWOsVprCfG%2FAq%2F1KjXZCF1A5Rkq9EpytYS7cBqrGwtvuhJ6IOI7R8HPCSBAjiQ7iWOaCQKDROG8HJ%2Bu50WzJyifPwHkhglNWwpcgfgd8sfGDJwDDEUpai%2BTAFV9ic0250y6qnObU&X-Amz-Signature=e5516efd3b04fc74602f12cb9fc8544c469d5a2e2a2e6322a9b2f6b1e7321aec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7WZKWW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2FIZHCWD5InAJ2EzScRMNUhB2u3wWYe7p7j6kQ7xS8AiEAj%2FARPxDjLQPNLme%2FDov1wDgZAnZx5Y%2FBiHJIwzTHOfQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BvfBwHYp4Kb%2BdubircAx1Dx0c6JGbeU5rp%2FXYdEu%2Bal%2FDn%2BgaYGIgNXB2kvFaaqPk0s25JjGVr8O5ovDGaMeY6E1vdtIAPXmaIz20GLsGgN3AI6s%2BmopUSIcQ37wYwq8p%2FvoWdJ6McMizjgg4ilRgGylfOp6dKcR8kfxfYa7oFgGmXmlKAlwb2dqVTENEsX1HWEwTppSzVWN7CmOruneBmrOhQOh1Qr%2BU0Jfh798qTuivyvxv0xkfb1cOxZHtEsXj%2BeJnwKErUJ24VUu1aXrCPRcrssIa3hWqaU5g0HFIDg2mywLuhh%2B%2BoFy2cnQiPsa8y5CgqpiVS2xAxvtHZpJBH0HwzeNtDF6wv29cbI3fjmXeKB37%2BHw53kChsVYelUgwJrdTsyn87A6TXwVB%2F00SzRRspRIflZ5S7w0VoqynSbeeIOSupt6jpbbrCB5Yy3KpH9PuLWxcvReNUpl89gIBYN2zg3LpzxSRpMQR2g1D33KcLihp5dYvAEVUbCRX2We5WBfBU8SSoKy35hunEV0C9PrVPIWOhe6Mf60HreBfo5ZeYZr%2BigkOwDYJvABoRWaMXoBCKqsg1kZrcQ%2FizJKQOB8GBTiPTD52ToGFjW0eG%2Fq0oXz61rjOxmqwcf90EqsHDFB8559tk9MkrMO7YnsIGOqUBzMru7NCLwDqqYH7STlEByQJKJQx1Q0WC%2BJi7fCJe%2BYH9AhyHY3tzermFJv9NlRynLd4ba20389g3gLTbTAC2wWOsVprCfG%2FAq%2F1KjXZCF1A5Rkq9EpytYS7cBqrGwtvuhJ6IOI7R8HPCSBAjiQ7iWOaCQKDROG8HJ%2Bu50WzJyifPwHkhglNWwpcgfgd8sfGDJwDDEUpai%2BTAFV9ic0250y6qnObU&X-Amz-Signature=be56054f77fd969039c68e7c1b2c7a170403a02470b906f83b1b881e3d60a0a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7WZKWW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2FIZHCWD5InAJ2EzScRMNUhB2u3wWYe7p7j6kQ7xS8AiEAj%2FARPxDjLQPNLme%2FDov1wDgZAnZx5Y%2FBiHJIwzTHOfQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BvfBwHYp4Kb%2BdubircAx1Dx0c6JGbeU5rp%2FXYdEu%2Bal%2FDn%2BgaYGIgNXB2kvFaaqPk0s25JjGVr8O5ovDGaMeY6E1vdtIAPXmaIz20GLsGgN3AI6s%2BmopUSIcQ37wYwq8p%2FvoWdJ6McMizjgg4ilRgGylfOp6dKcR8kfxfYa7oFgGmXmlKAlwb2dqVTENEsX1HWEwTppSzVWN7CmOruneBmrOhQOh1Qr%2BU0Jfh798qTuivyvxv0xkfb1cOxZHtEsXj%2BeJnwKErUJ24VUu1aXrCPRcrssIa3hWqaU5g0HFIDg2mywLuhh%2B%2BoFy2cnQiPsa8y5CgqpiVS2xAxvtHZpJBH0HwzeNtDF6wv29cbI3fjmXeKB37%2BHw53kChsVYelUgwJrdTsyn87A6TXwVB%2F00SzRRspRIflZ5S7w0VoqynSbeeIOSupt6jpbbrCB5Yy3KpH9PuLWxcvReNUpl89gIBYN2zg3LpzxSRpMQR2g1D33KcLihp5dYvAEVUbCRX2We5WBfBU8SSoKy35hunEV0C9PrVPIWOhe6Mf60HreBfo5ZeYZr%2BigkOwDYJvABoRWaMXoBCKqsg1kZrcQ%2FizJKQOB8GBTiPTD52ToGFjW0eG%2Fq0oXz61rjOxmqwcf90EqsHDFB8559tk9MkrMO7YnsIGOqUBzMru7NCLwDqqYH7STlEByQJKJQx1Q0WC%2BJi7fCJe%2BYH9AhyHY3tzermFJv9NlRynLd4ba20389g3gLTbTAC2wWOsVprCfG%2FAq%2F1KjXZCF1A5Rkq9EpytYS7cBqrGwtvuhJ6IOI7R8HPCSBAjiQ7iWOaCQKDROG8HJ%2Bu50WzJyifPwHkhglNWwpcgfgd8sfGDJwDDEUpai%2BTAFV9ic0250y6qnObU&X-Amz-Signature=de951809c8ed4417dbd67b16c59f5699aaaaabc753aae90c62c8eeb7c597c1c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7WZKWW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2FIZHCWD5InAJ2EzScRMNUhB2u3wWYe7p7j6kQ7xS8AiEAj%2FARPxDjLQPNLme%2FDov1wDgZAnZx5Y%2FBiHJIwzTHOfQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BvfBwHYp4Kb%2BdubircAx1Dx0c6JGbeU5rp%2FXYdEu%2Bal%2FDn%2BgaYGIgNXB2kvFaaqPk0s25JjGVr8O5ovDGaMeY6E1vdtIAPXmaIz20GLsGgN3AI6s%2BmopUSIcQ37wYwq8p%2FvoWdJ6McMizjgg4ilRgGylfOp6dKcR8kfxfYa7oFgGmXmlKAlwb2dqVTENEsX1HWEwTppSzVWN7CmOruneBmrOhQOh1Qr%2BU0Jfh798qTuivyvxv0xkfb1cOxZHtEsXj%2BeJnwKErUJ24VUu1aXrCPRcrssIa3hWqaU5g0HFIDg2mywLuhh%2B%2BoFy2cnQiPsa8y5CgqpiVS2xAxvtHZpJBH0HwzeNtDF6wv29cbI3fjmXeKB37%2BHw53kChsVYelUgwJrdTsyn87A6TXwVB%2F00SzRRspRIflZ5S7w0VoqynSbeeIOSupt6jpbbrCB5Yy3KpH9PuLWxcvReNUpl89gIBYN2zg3LpzxSRpMQR2g1D33KcLihp5dYvAEVUbCRX2We5WBfBU8SSoKy35hunEV0C9PrVPIWOhe6Mf60HreBfo5ZeYZr%2BigkOwDYJvABoRWaMXoBCKqsg1kZrcQ%2FizJKQOB8GBTiPTD52ToGFjW0eG%2Fq0oXz61rjOxmqwcf90EqsHDFB8559tk9MkrMO7YnsIGOqUBzMru7NCLwDqqYH7STlEByQJKJQx1Q0WC%2BJi7fCJe%2BYH9AhyHY3tzermFJv9NlRynLd4ba20389g3gLTbTAC2wWOsVprCfG%2FAq%2F1KjXZCF1A5Rkq9EpytYS7cBqrGwtvuhJ6IOI7R8HPCSBAjiQ7iWOaCQKDROG8HJ%2Bu50WzJyifPwHkhglNWwpcgfgd8sfGDJwDDEUpai%2BTAFV9ic0250y6qnObU&X-Amz-Signature=0bd0559a589a4d1c24deda01982cce3d4e2bfc3122c2a7d04689c06b3de05f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
