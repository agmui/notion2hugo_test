---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BN5YGN%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHoNT9kUCINe5MoPFuZVe5Jb1pNZGzY%2Bs6WMVccr5UftAiEA6JRAPGBCSg8EQ1IgGpoVwByrAY5XoVKi3Esl%2FOJwqPsq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN9sYFZ9S6Cipuei9SrcAzCc4tJR2lw74uU0a5JPMDG5BfgMoDT%2B6VWv7BrWIfdqp3OSbSliRJbJGqp8iMoyF6T0RDoWAtMBozZCbpFY%2FZNM81%2F6S9euZQNVXjrUiqkGBIB0yx9%2BuJujV9yzNFMWU%2Bv%2BwvVXtRsXxk92LJZEZj%2FtfHeG1zBUTaENwwoJ8IsAjKvqEZI3wEdpeOAV6NCrrRvwZVWgupqwsumTHNSwPjvwWuo%2FrW0GeTaaJ3sKnWBiRgVO8HBIuuvSTj%2FPTye8pnPha4pH1N2YfG4hx2MeBOhQ2HtjD9ijP1BNCv1evKSQXZAIPztlGcRbucdKtRPFWRyog3z3WTpUU%2BuiUNrVxKmOsVUSToIZP671ppzN9lAi47TY2RjvB4FKTNPRM36jkBa3B2FV8cHI3vAhdpZ%2Bm76P6bMWBEyv%2BE%2FWSiQ8gL3ZcC7NiGkKOofhzpLqJo9%2Bpr%2FYdqsMfoQXh8sumNU5G%2FUw3f1zHyWL%2FRPzRaj6pE972%2BAfFx0pdHR2u5SW5nIx6%2BrWnJ73BPfwHot%2BNn%2Fcuo74z1W35LNHdfcDHeklQTG00q4r3vKDcbmWajVlILCQtC8uVkd4UQwUNKA%2FJhqAmmSuffjuoc%2FP3c7%2FAUXN1OVZ5NIlsR0w8vZQxvHaMLjUz9MGOqUBQrRnta5vRhLKXnzEEt5pclXC2HF9MbsDXndZLDwC882se73YUK6He%2Fa1ENq%2B8DM4aNb%2FiFgHi0WT%2BMEI%2FLoK7DWmv6MJQFzKS57y%2BhjHMVE2hSnwnEl9X7f9m5SZ2WyltFtdoMGX30bayCcA6UkeJm3iCWxpJWsFH1eU6FFySk9%2FEEAzZ1hF1fOIRZjGhsBCJrwvsEq6YTWhfIrTpRVs%2Bf1blo9J&X-Amz-Signature=244411ec81e62a360827dddc5b56b21f9f34e5402737a4e6689603a33d7ea575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BN5YGN%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHoNT9kUCINe5MoPFuZVe5Jb1pNZGzY%2Bs6WMVccr5UftAiEA6JRAPGBCSg8EQ1IgGpoVwByrAY5XoVKi3Esl%2FOJwqPsq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN9sYFZ9S6Cipuei9SrcAzCc4tJR2lw74uU0a5JPMDG5BfgMoDT%2B6VWv7BrWIfdqp3OSbSliRJbJGqp8iMoyF6T0RDoWAtMBozZCbpFY%2FZNM81%2F6S9euZQNVXjrUiqkGBIB0yx9%2BuJujV9yzNFMWU%2Bv%2BwvVXtRsXxk92LJZEZj%2FtfHeG1zBUTaENwwoJ8IsAjKvqEZI3wEdpeOAV6NCrrRvwZVWgupqwsumTHNSwPjvwWuo%2FrW0GeTaaJ3sKnWBiRgVO8HBIuuvSTj%2FPTye8pnPha4pH1N2YfG4hx2MeBOhQ2HtjD9ijP1BNCv1evKSQXZAIPztlGcRbucdKtRPFWRyog3z3WTpUU%2BuiUNrVxKmOsVUSToIZP671ppzN9lAi47TY2RjvB4FKTNPRM36jkBa3B2FV8cHI3vAhdpZ%2Bm76P6bMWBEyv%2BE%2FWSiQ8gL3ZcC7NiGkKOofhzpLqJo9%2Bpr%2FYdqsMfoQXh8sumNU5G%2FUw3f1zHyWL%2FRPzRaj6pE972%2BAfFx0pdHR2u5SW5nIx6%2BrWnJ73BPfwHot%2BNn%2Fcuo74z1W35LNHdfcDHeklQTG00q4r3vKDcbmWajVlILCQtC8uVkd4UQwUNKA%2FJhqAmmSuffjuoc%2FP3c7%2FAUXN1OVZ5NIlsR0w8vZQxvHaMLjUz9MGOqUBQrRnta5vRhLKXnzEEt5pclXC2HF9MbsDXndZLDwC882se73YUK6He%2Fa1ENq%2B8DM4aNb%2FiFgHi0WT%2BMEI%2FLoK7DWmv6MJQFzKS57y%2BhjHMVE2hSnwnEl9X7f9m5SZ2WyltFtdoMGX30bayCcA6UkeJm3iCWxpJWsFH1eU6FFySk9%2FEEAzZ1hF1fOIRZjGhsBCJrwvsEq6YTWhfIrTpRVs%2Bf1blo9J&X-Amz-Signature=d56466ba2e6d843d467bf1a222ef00c344bd0d7022e8957d2c248fbcadc7433c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BN5YGN%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHoNT9kUCINe5MoPFuZVe5Jb1pNZGzY%2Bs6WMVccr5UftAiEA6JRAPGBCSg8EQ1IgGpoVwByrAY5XoVKi3Esl%2FOJwqPsq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN9sYFZ9S6Cipuei9SrcAzCc4tJR2lw74uU0a5JPMDG5BfgMoDT%2B6VWv7BrWIfdqp3OSbSliRJbJGqp8iMoyF6T0RDoWAtMBozZCbpFY%2FZNM81%2F6S9euZQNVXjrUiqkGBIB0yx9%2BuJujV9yzNFMWU%2Bv%2BwvVXtRsXxk92LJZEZj%2FtfHeG1zBUTaENwwoJ8IsAjKvqEZI3wEdpeOAV6NCrrRvwZVWgupqwsumTHNSwPjvwWuo%2FrW0GeTaaJ3sKnWBiRgVO8HBIuuvSTj%2FPTye8pnPha4pH1N2YfG4hx2MeBOhQ2HtjD9ijP1BNCv1evKSQXZAIPztlGcRbucdKtRPFWRyog3z3WTpUU%2BuiUNrVxKmOsVUSToIZP671ppzN9lAi47TY2RjvB4FKTNPRM36jkBa3B2FV8cHI3vAhdpZ%2Bm76P6bMWBEyv%2BE%2FWSiQ8gL3ZcC7NiGkKOofhzpLqJo9%2Bpr%2FYdqsMfoQXh8sumNU5G%2FUw3f1zHyWL%2FRPzRaj6pE972%2BAfFx0pdHR2u5SW5nIx6%2BrWnJ73BPfwHot%2BNn%2Fcuo74z1W35LNHdfcDHeklQTG00q4r3vKDcbmWajVlILCQtC8uVkd4UQwUNKA%2FJhqAmmSuffjuoc%2FP3c7%2FAUXN1OVZ5NIlsR0w8vZQxvHaMLjUz9MGOqUBQrRnta5vRhLKXnzEEt5pclXC2HF9MbsDXndZLDwC882se73YUK6He%2Fa1ENq%2B8DM4aNb%2FiFgHi0WT%2BMEI%2FLoK7DWmv6MJQFzKS57y%2BhjHMVE2hSnwnEl9X7f9m5SZ2WyltFtdoMGX30bayCcA6UkeJm3iCWxpJWsFH1eU6FFySk9%2FEEAzZ1hF1fOIRZjGhsBCJrwvsEq6YTWhfIrTpRVs%2Bf1blo9J&X-Amz-Signature=9a8632764ef6492ccf5fbffc27a4497530cbb50d4fea1f5b790ddf186b33c989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BN5YGN%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHoNT9kUCINe5MoPFuZVe5Jb1pNZGzY%2Bs6WMVccr5UftAiEA6JRAPGBCSg8EQ1IgGpoVwByrAY5XoVKi3Esl%2FOJwqPsq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN9sYFZ9S6Cipuei9SrcAzCc4tJR2lw74uU0a5JPMDG5BfgMoDT%2B6VWv7BrWIfdqp3OSbSliRJbJGqp8iMoyF6T0RDoWAtMBozZCbpFY%2FZNM81%2F6S9euZQNVXjrUiqkGBIB0yx9%2BuJujV9yzNFMWU%2Bv%2BwvVXtRsXxk92LJZEZj%2FtfHeG1zBUTaENwwoJ8IsAjKvqEZI3wEdpeOAV6NCrrRvwZVWgupqwsumTHNSwPjvwWuo%2FrW0GeTaaJ3sKnWBiRgVO8HBIuuvSTj%2FPTye8pnPha4pH1N2YfG4hx2MeBOhQ2HtjD9ijP1BNCv1evKSQXZAIPztlGcRbucdKtRPFWRyog3z3WTpUU%2BuiUNrVxKmOsVUSToIZP671ppzN9lAi47TY2RjvB4FKTNPRM36jkBa3B2FV8cHI3vAhdpZ%2Bm76P6bMWBEyv%2BE%2FWSiQ8gL3ZcC7NiGkKOofhzpLqJo9%2Bpr%2FYdqsMfoQXh8sumNU5G%2FUw3f1zHyWL%2FRPzRaj6pE972%2BAfFx0pdHR2u5SW5nIx6%2BrWnJ73BPfwHot%2BNn%2Fcuo74z1W35LNHdfcDHeklQTG00q4r3vKDcbmWajVlILCQtC8uVkd4UQwUNKA%2FJhqAmmSuffjuoc%2FP3c7%2FAUXN1OVZ5NIlsR0w8vZQxvHaMLjUz9MGOqUBQrRnta5vRhLKXnzEEt5pclXC2HF9MbsDXndZLDwC882se73YUK6He%2Fa1ENq%2B8DM4aNb%2FiFgHi0WT%2BMEI%2FLoK7DWmv6MJQFzKS57y%2BhjHMVE2hSnwnEl9X7f9m5SZ2WyltFtdoMGX30bayCcA6UkeJm3iCWxpJWsFH1eU6FFySk9%2FEEAzZ1hF1fOIRZjGhsBCJrwvsEq6YTWhfIrTpRVs%2Bf1blo9J&X-Amz-Signature=ac3d3bd3c09ca4b0f98b542d51c9e54c07454077e018761f20fd90ccc699d4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BN5YGN%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHoNT9kUCINe5MoPFuZVe5Jb1pNZGzY%2Bs6WMVccr5UftAiEA6JRAPGBCSg8EQ1IgGpoVwByrAY5XoVKi3Esl%2FOJwqPsq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN9sYFZ9S6Cipuei9SrcAzCc4tJR2lw74uU0a5JPMDG5BfgMoDT%2B6VWv7BrWIfdqp3OSbSliRJbJGqp8iMoyF6T0RDoWAtMBozZCbpFY%2FZNM81%2F6S9euZQNVXjrUiqkGBIB0yx9%2BuJujV9yzNFMWU%2Bv%2BwvVXtRsXxk92LJZEZj%2FtfHeG1zBUTaENwwoJ8IsAjKvqEZI3wEdpeOAV6NCrrRvwZVWgupqwsumTHNSwPjvwWuo%2FrW0GeTaaJ3sKnWBiRgVO8HBIuuvSTj%2FPTye8pnPha4pH1N2YfG4hx2MeBOhQ2HtjD9ijP1BNCv1evKSQXZAIPztlGcRbucdKtRPFWRyog3z3WTpUU%2BuiUNrVxKmOsVUSToIZP671ppzN9lAi47TY2RjvB4FKTNPRM36jkBa3B2FV8cHI3vAhdpZ%2Bm76P6bMWBEyv%2BE%2FWSiQ8gL3ZcC7NiGkKOofhzpLqJo9%2Bpr%2FYdqsMfoQXh8sumNU5G%2FUw3f1zHyWL%2FRPzRaj6pE972%2BAfFx0pdHR2u5SW5nIx6%2BrWnJ73BPfwHot%2BNn%2Fcuo74z1W35LNHdfcDHeklQTG00q4r3vKDcbmWajVlILCQtC8uVkd4UQwUNKA%2FJhqAmmSuffjuoc%2FP3c7%2FAUXN1OVZ5NIlsR0w8vZQxvHaMLjUz9MGOqUBQrRnta5vRhLKXnzEEt5pclXC2HF9MbsDXndZLDwC882se73YUK6He%2Fa1ENq%2B8DM4aNb%2FiFgHi0WT%2BMEI%2FLoK7DWmv6MJQFzKS57y%2BhjHMVE2hSnwnEl9X7f9m5SZ2WyltFtdoMGX30bayCcA6UkeJm3iCWxpJWsFH1eU6FFySk9%2FEEAzZ1hF1fOIRZjGhsBCJrwvsEq6YTWhfIrTpRVs%2Bf1blo9J&X-Amz-Signature=31c09606f7a07f384333744a200adff9eaeba1642e4b44f9011c702fda11f784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BN5YGN%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHoNT9kUCINe5MoPFuZVe5Jb1pNZGzY%2Bs6WMVccr5UftAiEA6JRAPGBCSg8EQ1IgGpoVwByrAY5XoVKi3Esl%2FOJwqPsq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN9sYFZ9S6Cipuei9SrcAzCc4tJR2lw74uU0a5JPMDG5BfgMoDT%2B6VWv7BrWIfdqp3OSbSliRJbJGqp8iMoyF6T0RDoWAtMBozZCbpFY%2FZNM81%2F6S9euZQNVXjrUiqkGBIB0yx9%2BuJujV9yzNFMWU%2Bv%2BwvVXtRsXxk92LJZEZj%2FtfHeG1zBUTaENwwoJ8IsAjKvqEZI3wEdpeOAV6NCrrRvwZVWgupqwsumTHNSwPjvwWuo%2FrW0GeTaaJ3sKnWBiRgVO8HBIuuvSTj%2FPTye8pnPha4pH1N2YfG4hx2MeBOhQ2HtjD9ijP1BNCv1evKSQXZAIPztlGcRbucdKtRPFWRyog3z3WTpUU%2BuiUNrVxKmOsVUSToIZP671ppzN9lAi47TY2RjvB4FKTNPRM36jkBa3B2FV8cHI3vAhdpZ%2Bm76P6bMWBEyv%2BE%2FWSiQ8gL3ZcC7NiGkKOofhzpLqJo9%2Bpr%2FYdqsMfoQXh8sumNU5G%2FUw3f1zHyWL%2FRPzRaj6pE972%2BAfFx0pdHR2u5SW5nIx6%2BrWnJ73BPfwHot%2BNn%2Fcuo74z1W35LNHdfcDHeklQTG00q4r3vKDcbmWajVlILCQtC8uVkd4UQwUNKA%2FJhqAmmSuffjuoc%2FP3c7%2FAUXN1OVZ5NIlsR0w8vZQxvHaMLjUz9MGOqUBQrRnta5vRhLKXnzEEt5pclXC2HF9MbsDXndZLDwC882se73YUK6He%2Fa1ENq%2B8DM4aNb%2FiFgHi0WT%2BMEI%2FLoK7DWmv6MJQFzKS57y%2BhjHMVE2hSnwnEl9X7f9m5SZ2WyltFtdoMGX30bayCcA6UkeJm3iCWxpJWsFH1eU6FFySk9%2FEEAzZ1hF1fOIRZjGhsBCJrwvsEq6YTWhfIrTpRVs%2Bf1blo9J&X-Amz-Signature=7e84e836647faed3d4fc3191a1c15ef173bb6168dd2d674aadee7cc137df9ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BN5YGN%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHoNT9kUCINe5MoPFuZVe5Jb1pNZGzY%2Bs6WMVccr5UftAiEA6JRAPGBCSg8EQ1IgGpoVwByrAY5XoVKi3Esl%2FOJwqPsq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN9sYFZ9S6Cipuei9SrcAzCc4tJR2lw74uU0a5JPMDG5BfgMoDT%2B6VWv7BrWIfdqp3OSbSliRJbJGqp8iMoyF6T0RDoWAtMBozZCbpFY%2FZNM81%2F6S9euZQNVXjrUiqkGBIB0yx9%2BuJujV9yzNFMWU%2Bv%2BwvVXtRsXxk92LJZEZj%2FtfHeG1zBUTaENwwoJ8IsAjKvqEZI3wEdpeOAV6NCrrRvwZVWgupqwsumTHNSwPjvwWuo%2FrW0GeTaaJ3sKnWBiRgVO8HBIuuvSTj%2FPTye8pnPha4pH1N2YfG4hx2MeBOhQ2HtjD9ijP1BNCv1evKSQXZAIPztlGcRbucdKtRPFWRyog3z3WTpUU%2BuiUNrVxKmOsVUSToIZP671ppzN9lAi47TY2RjvB4FKTNPRM36jkBa3B2FV8cHI3vAhdpZ%2Bm76P6bMWBEyv%2BE%2FWSiQ8gL3ZcC7NiGkKOofhzpLqJo9%2Bpr%2FYdqsMfoQXh8sumNU5G%2FUw3f1zHyWL%2FRPzRaj6pE972%2BAfFx0pdHR2u5SW5nIx6%2BrWnJ73BPfwHot%2BNn%2Fcuo74z1W35LNHdfcDHeklQTG00q4r3vKDcbmWajVlILCQtC8uVkd4UQwUNKA%2FJhqAmmSuffjuoc%2FP3c7%2FAUXN1OVZ5NIlsR0w8vZQxvHaMLjUz9MGOqUBQrRnta5vRhLKXnzEEt5pclXC2HF9MbsDXndZLDwC882se73YUK6He%2Fa1ENq%2B8DM4aNb%2FiFgHi0WT%2BMEI%2FLoK7DWmv6MJQFzKS57y%2BhjHMVE2hSnwnEl9X7f9m5SZ2WyltFtdoMGX30bayCcA6UkeJm3iCWxpJWsFH1eU6FFySk9%2FEEAzZ1hF1fOIRZjGhsBCJrwvsEq6YTWhfIrTpRVs%2Bf1blo9J&X-Amz-Signature=db7bcea2c196e40b4b5338901589b9f457f2d9bd99d9026816fc263adca63c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BN5YGN%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHoNT9kUCINe5MoPFuZVe5Jb1pNZGzY%2Bs6WMVccr5UftAiEA6JRAPGBCSg8EQ1IgGpoVwByrAY5XoVKi3Esl%2FOJwqPsq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN9sYFZ9S6Cipuei9SrcAzCc4tJR2lw74uU0a5JPMDG5BfgMoDT%2B6VWv7BrWIfdqp3OSbSliRJbJGqp8iMoyF6T0RDoWAtMBozZCbpFY%2FZNM81%2F6S9euZQNVXjrUiqkGBIB0yx9%2BuJujV9yzNFMWU%2Bv%2BwvVXtRsXxk92LJZEZj%2FtfHeG1zBUTaENwwoJ8IsAjKvqEZI3wEdpeOAV6NCrrRvwZVWgupqwsumTHNSwPjvwWuo%2FrW0GeTaaJ3sKnWBiRgVO8HBIuuvSTj%2FPTye8pnPha4pH1N2YfG4hx2MeBOhQ2HtjD9ijP1BNCv1evKSQXZAIPztlGcRbucdKtRPFWRyog3z3WTpUU%2BuiUNrVxKmOsVUSToIZP671ppzN9lAi47TY2RjvB4FKTNPRM36jkBa3B2FV8cHI3vAhdpZ%2Bm76P6bMWBEyv%2BE%2FWSiQ8gL3ZcC7NiGkKOofhzpLqJo9%2Bpr%2FYdqsMfoQXh8sumNU5G%2FUw3f1zHyWL%2FRPzRaj6pE972%2BAfFx0pdHR2u5SW5nIx6%2BrWnJ73BPfwHot%2BNn%2Fcuo74z1W35LNHdfcDHeklQTG00q4r3vKDcbmWajVlILCQtC8uVkd4UQwUNKA%2FJhqAmmSuffjuoc%2FP3c7%2FAUXN1OVZ5NIlsR0w8vZQxvHaMLjUz9MGOqUBQrRnta5vRhLKXnzEEt5pclXC2HF9MbsDXndZLDwC882se73YUK6He%2Fa1ENq%2B8DM4aNb%2FiFgHi0WT%2BMEI%2FLoK7DWmv6MJQFzKS57y%2BhjHMVE2hSnwnEl9X7f9m5SZ2WyltFtdoMGX30bayCcA6UkeJm3iCWxpJWsFH1eU6FFySk9%2FEEAzZ1hF1fOIRZjGhsBCJrwvsEq6YTWhfIrTpRVs%2Bf1blo9J&X-Amz-Signature=6e4697e3bff6854e88c3c23a8fffcb082b3ff281cae103891e4a369e27647151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
