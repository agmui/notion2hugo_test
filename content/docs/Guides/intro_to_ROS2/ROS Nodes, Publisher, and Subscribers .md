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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZFFKZD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHDnCz%2FA2AOrKzPynaosmCKKeIY5bft%2B0%2B39EGM7AO1AiEAxf3BeYNL5MPn5PH74T78TAl4wqKjbMyspPL9o8euKxwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy%2FICIWB1BSMxLkaSrcAwnh3KEfJzUlSI3lEJ9UtFext55AZYsazoCMR6fycsGbiaem85EwMePIJ8HtdY4BFiyl0atjcpApEaD6yDsEeeamc%2B89NJDxnZGYeOglBahJ60iTMkC2EIOPCd2%2Fau0e1RyLMzuGO6OmLBPQ3KLs2myfRAehmRb2pDxQTec7xKokEXgNuzlKk8FuB%2BMWW2859PzfZpC2I%2BNEV%2BgJ8oSXysREJSk9HdWTJWouizfYsMpJnvr2XN%2FxjNRiEkkhICpHxLXCLkopHy1uybDdBAeBApGotmA%2FQPqzGMPj8ZfFocAP7Mrj1ZhrmEB8djEgQBDpS3uNLP0Xg5bqcZnrtSQiekaRWMX0dZulR1fPdmdEV7vLA9qKoqVljO%2BUv5vWBGpSp8jAGzEeO6MMUBCIEMLzZK4sKgAzSpLdNpgwqfK2HPsMNWFDpsY%2B%2BuGHv4XWXXCVxeIj9Uo0AbUCFA9uBb4MjnUt6drsxDfNW%2BsnkOB0tE%2FC8kgUY8F1L8EIiMwNrzvDm0V%2F2aZltfgpDqZ3W8AHKRvYej%2F%2B63NZAEIEOamUfJ7AeZdBig5WAHMXjTmp%2FCZz7DKXCmJuoDwSJQp%2FW%2FfS%2ByBCIn1XdubsksgQkqxN9Oh%2FLBqwLQpFcLpe1Iz8MNfttcEGOqUBdqVH0cpTCwyEBFLcc9VhyqYVEbNsCO%2B%2BtF2NSB90ZuUOvy3FMEViluti7sGS7DM%2BrONw5z61fJ8CFe8uTHxQNSq%2BfIduGd3%2Bag6U%2B0%2FruAoSPg2CAweqHZ77nhHhnjMdxo3s1iyd5yDJP4kSyzSb%2FHZCzUgcq702c7QmG0htSFOP1mKs%2B6loZz8m%2BW60z6wNlP7nxZbE4XvWxMPYejmp7ClsK05M&X-Amz-Signature=d3a14a93f59fd6956b82c1ed5f87f6957bf99da3f4193cb3e997f1943a838bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZFFKZD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHDnCz%2FA2AOrKzPynaosmCKKeIY5bft%2B0%2B39EGM7AO1AiEAxf3BeYNL5MPn5PH74T78TAl4wqKjbMyspPL9o8euKxwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy%2FICIWB1BSMxLkaSrcAwnh3KEfJzUlSI3lEJ9UtFext55AZYsazoCMR6fycsGbiaem85EwMePIJ8HtdY4BFiyl0atjcpApEaD6yDsEeeamc%2B89NJDxnZGYeOglBahJ60iTMkC2EIOPCd2%2Fau0e1RyLMzuGO6OmLBPQ3KLs2myfRAehmRb2pDxQTec7xKokEXgNuzlKk8FuB%2BMWW2859PzfZpC2I%2BNEV%2BgJ8oSXysREJSk9HdWTJWouizfYsMpJnvr2XN%2FxjNRiEkkhICpHxLXCLkopHy1uybDdBAeBApGotmA%2FQPqzGMPj8ZfFocAP7Mrj1ZhrmEB8djEgQBDpS3uNLP0Xg5bqcZnrtSQiekaRWMX0dZulR1fPdmdEV7vLA9qKoqVljO%2BUv5vWBGpSp8jAGzEeO6MMUBCIEMLzZK4sKgAzSpLdNpgwqfK2HPsMNWFDpsY%2B%2BuGHv4XWXXCVxeIj9Uo0AbUCFA9uBb4MjnUt6drsxDfNW%2BsnkOB0tE%2FC8kgUY8F1L8EIiMwNrzvDm0V%2F2aZltfgpDqZ3W8AHKRvYej%2F%2B63NZAEIEOamUfJ7AeZdBig5WAHMXjTmp%2FCZz7DKXCmJuoDwSJQp%2FW%2FfS%2ByBCIn1XdubsksgQkqxN9Oh%2FLBqwLQpFcLpe1Iz8MNfttcEGOqUBdqVH0cpTCwyEBFLcc9VhyqYVEbNsCO%2B%2BtF2NSB90ZuUOvy3FMEViluti7sGS7DM%2BrONw5z61fJ8CFe8uTHxQNSq%2BfIduGd3%2Bag6U%2B0%2FruAoSPg2CAweqHZ77nhHhnjMdxo3s1iyd5yDJP4kSyzSb%2FHZCzUgcq702c7QmG0htSFOP1mKs%2B6loZz8m%2BW60z6wNlP7nxZbE4XvWxMPYejmp7ClsK05M&X-Amz-Signature=6a7896aaeec0e6622d74745b564df8cdf6bc90cdb97e4ee1bccfb63711bd3943&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZFFKZD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHDnCz%2FA2AOrKzPynaosmCKKeIY5bft%2B0%2B39EGM7AO1AiEAxf3BeYNL5MPn5PH74T78TAl4wqKjbMyspPL9o8euKxwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy%2FICIWB1BSMxLkaSrcAwnh3KEfJzUlSI3lEJ9UtFext55AZYsazoCMR6fycsGbiaem85EwMePIJ8HtdY4BFiyl0atjcpApEaD6yDsEeeamc%2B89NJDxnZGYeOglBahJ60iTMkC2EIOPCd2%2Fau0e1RyLMzuGO6OmLBPQ3KLs2myfRAehmRb2pDxQTec7xKokEXgNuzlKk8FuB%2BMWW2859PzfZpC2I%2BNEV%2BgJ8oSXysREJSk9HdWTJWouizfYsMpJnvr2XN%2FxjNRiEkkhICpHxLXCLkopHy1uybDdBAeBApGotmA%2FQPqzGMPj8ZfFocAP7Mrj1ZhrmEB8djEgQBDpS3uNLP0Xg5bqcZnrtSQiekaRWMX0dZulR1fPdmdEV7vLA9qKoqVljO%2BUv5vWBGpSp8jAGzEeO6MMUBCIEMLzZK4sKgAzSpLdNpgwqfK2HPsMNWFDpsY%2B%2BuGHv4XWXXCVxeIj9Uo0AbUCFA9uBb4MjnUt6drsxDfNW%2BsnkOB0tE%2FC8kgUY8F1L8EIiMwNrzvDm0V%2F2aZltfgpDqZ3W8AHKRvYej%2F%2B63NZAEIEOamUfJ7AeZdBig5WAHMXjTmp%2FCZz7DKXCmJuoDwSJQp%2FW%2FfS%2ByBCIn1XdubsksgQkqxN9Oh%2FLBqwLQpFcLpe1Iz8MNfttcEGOqUBdqVH0cpTCwyEBFLcc9VhyqYVEbNsCO%2B%2BtF2NSB90ZuUOvy3FMEViluti7sGS7DM%2BrONw5z61fJ8CFe8uTHxQNSq%2BfIduGd3%2Bag6U%2B0%2FruAoSPg2CAweqHZ77nhHhnjMdxo3s1iyd5yDJP4kSyzSb%2FHZCzUgcq702c7QmG0htSFOP1mKs%2B6loZz8m%2BW60z6wNlP7nxZbE4XvWxMPYejmp7ClsK05M&X-Amz-Signature=917ac57f15c465b4c2d7427aefbbadfa56650a52423288754fded46397286224&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZFFKZD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHDnCz%2FA2AOrKzPynaosmCKKeIY5bft%2B0%2B39EGM7AO1AiEAxf3BeYNL5MPn5PH74T78TAl4wqKjbMyspPL9o8euKxwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy%2FICIWB1BSMxLkaSrcAwnh3KEfJzUlSI3lEJ9UtFext55AZYsazoCMR6fycsGbiaem85EwMePIJ8HtdY4BFiyl0atjcpApEaD6yDsEeeamc%2B89NJDxnZGYeOglBahJ60iTMkC2EIOPCd2%2Fau0e1RyLMzuGO6OmLBPQ3KLs2myfRAehmRb2pDxQTec7xKokEXgNuzlKk8FuB%2BMWW2859PzfZpC2I%2BNEV%2BgJ8oSXysREJSk9HdWTJWouizfYsMpJnvr2XN%2FxjNRiEkkhICpHxLXCLkopHy1uybDdBAeBApGotmA%2FQPqzGMPj8ZfFocAP7Mrj1ZhrmEB8djEgQBDpS3uNLP0Xg5bqcZnrtSQiekaRWMX0dZulR1fPdmdEV7vLA9qKoqVljO%2BUv5vWBGpSp8jAGzEeO6MMUBCIEMLzZK4sKgAzSpLdNpgwqfK2HPsMNWFDpsY%2B%2BuGHv4XWXXCVxeIj9Uo0AbUCFA9uBb4MjnUt6drsxDfNW%2BsnkOB0tE%2FC8kgUY8F1L8EIiMwNrzvDm0V%2F2aZltfgpDqZ3W8AHKRvYej%2F%2B63NZAEIEOamUfJ7AeZdBig5WAHMXjTmp%2FCZz7DKXCmJuoDwSJQp%2FW%2FfS%2ByBCIn1XdubsksgQkqxN9Oh%2FLBqwLQpFcLpe1Iz8MNfttcEGOqUBdqVH0cpTCwyEBFLcc9VhyqYVEbNsCO%2B%2BtF2NSB90ZuUOvy3FMEViluti7sGS7DM%2BrONw5z61fJ8CFe8uTHxQNSq%2BfIduGd3%2Bag6U%2B0%2FruAoSPg2CAweqHZ77nhHhnjMdxo3s1iyd5yDJP4kSyzSb%2FHZCzUgcq702c7QmG0htSFOP1mKs%2B6loZz8m%2BW60z6wNlP7nxZbE4XvWxMPYejmp7ClsK05M&X-Amz-Signature=9540f3eba48148c648ccbcadf24c1754c5677539c6e16da03b0860d792931e67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZFFKZD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHDnCz%2FA2AOrKzPynaosmCKKeIY5bft%2B0%2B39EGM7AO1AiEAxf3BeYNL5MPn5PH74T78TAl4wqKjbMyspPL9o8euKxwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy%2FICIWB1BSMxLkaSrcAwnh3KEfJzUlSI3lEJ9UtFext55AZYsazoCMR6fycsGbiaem85EwMePIJ8HtdY4BFiyl0atjcpApEaD6yDsEeeamc%2B89NJDxnZGYeOglBahJ60iTMkC2EIOPCd2%2Fau0e1RyLMzuGO6OmLBPQ3KLs2myfRAehmRb2pDxQTec7xKokEXgNuzlKk8FuB%2BMWW2859PzfZpC2I%2BNEV%2BgJ8oSXysREJSk9HdWTJWouizfYsMpJnvr2XN%2FxjNRiEkkhICpHxLXCLkopHy1uybDdBAeBApGotmA%2FQPqzGMPj8ZfFocAP7Mrj1ZhrmEB8djEgQBDpS3uNLP0Xg5bqcZnrtSQiekaRWMX0dZulR1fPdmdEV7vLA9qKoqVljO%2BUv5vWBGpSp8jAGzEeO6MMUBCIEMLzZK4sKgAzSpLdNpgwqfK2HPsMNWFDpsY%2B%2BuGHv4XWXXCVxeIj9Uo0AbUCFA9uBb4MjnUt6drsxDfNW%2BsnkOB0tE%2FC8kgUY8F1L8EIiMwNrzvDm0V%2F2aZltfgpDqZ3W8AHKRvYej%2F%2B63NZAEIEOamUfJ7AeZdBig5WAHMXjTmp%2FCZz7DKXCmJuoDwSJQp%2FW%2FfS%2ByBCIn1XdubsksgQkqxN9Oh%2FLBqwLQpFcLpe1Iz8MNfttcEGOqUBdqVH0cpTCwyEBFLcc9VhyqYVEbNsCO%2B%2BtF2NSB90ZuUOvy3FMEViluti7sGS7DM%2BrONw5z61fJ8CFe8uTHxQNSq%2BfIduGd3%2Bag6U%2B0%2FruAoSPg2CAweqHZ77nhHhnjMdxo3s1iyd5yDJP4kSyzSb%2FHZCzUgcq702c7QmG0htSFOP1mKs%2B6loZz8m%2BW60z6wNlP7nxZbE4XvWxMPYejmp7ClsK05M&X-Amz-Signature=9f29cd55896c9ecb8b688cdbf8970d778f5d44135609292c4ae9033d3ac0ca99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZFFKZD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHDnCz%2FA2AOrKzPynaosmCKKeIY5bft%2B0%2B39EGM7AO1AiEAxf3BeYNL5MPn5PH74T78TAl4wqKjbMyspPL9o8euKxwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy%2FICIWB1BSMxLkaSrcAwnh3KEfJzUlSI3lEJ9UtFext55AZYsazoCMR6fycsGbiaem85EwMePIJ8HtdY4BFiyl0atjcpApEaD6yDsEeeamc%2B89NJDxnZGYeOglBahJ60iTMkC2EIOPCd2%2Fau0e1RyLMzuGO6OmLBPQ3KLs2myfRAehmRb2pDxQTec7xKokEXgNuzlKk8FuB%2BMWW2859PzfZpC2I%2BNEV%2BgJ8oSXysREJSk9HdWTJWouizfYsMpJnvr2XN%2FxjNRiEkkhICpHxLXCLkopHy1uybDdBAeBApGotmA%2FQPqzGMPj8ZfFocAP7Mrj1ZhrmEB8djEgQBDpS3uNLP0Xg5bqcZnrtSQiekaRWMX0dZulR1fPdmdEV7vLA9qKoqVljO%2BUv5vWBGpSp8jAGzEeO6MMUBCIEMLzZK4sKgAzSpLdNpgwqfK2HPsMNWFDpsY%2B%2BuGHv4XWXXCVxeIj9Uo0AbUCFA9uBb4MjnUt6drsxDfNW%2BsnkOB0tE%2FC8kgUY8F1L8EIiMwNrzvDm0V%2F2aZltfgpDqZ3W8AHKRvYej%2F%2B63NZAEIEOamUfJ7AeZdBig5WAHMXjTmp%2FCZz7DKXCmJuoDwSJQp%2FW%2FfS%2ByBCIn1XdubsksgQkqxN9Oh%2FLBqwLQpFcLpe1Iz8MNfttcEGOqUBdqVH0cpTCwyEBFLcc9VhyqYVEbNsCO%2B%2BtF2NSB90ZuUOvy3FMEViluti7sGS7DM%2BrONw5z61fJ8CFe8uTHxQNSq%2BfIduGd3%2Bag6U%2B0%2FruAoSPg2CAweqHZ77nhHhnjMdxo3s1iyd5yDJP4kSyzSb%2FHZCzUgcq702c7QmG0htSFOP1mKs%2B6loZz8m%2BW60z6wNlP7nxZbE4XvWxMPYejmp7ClsK05M&X-Amz-Signature=b413b06f8ec14b9cb340064bdbd9752aa97d92d143d5add6a12ee3ce6e01a049&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZFFKZD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHDnCz%2FA2AOrKzPynaosmCKKeIY5bft%2B0%2B39EGM7AO1AiEAxf3BeYNL5MPn5PH74T78TAl4wqKjbMyspPL9o8euKxwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy%2FICIWB1BSMxLkaSrcAwnh3KEfJzUlSI3lEJ9UtFext55AZYsazoCMR6fycsGbiaem85EwMePIJ8HtdY4BFiyl0atjcpApEaD6yDsEeeamc%2B89NJDxnZGYeOglBahJ60iTMkC2EIOPCd2%2Fau0e1RyLMzuGO6OmLBPQ3KLs2myfRAehmRb2pDxQTec7xKokEXgNuzlKk8FuB%2BMWW2859PzfZpC2I%2BNEV%2BgJ8oSXysREJSk9HdWTJWouizfYsMpJnvr2XN%2FxjNRiEkkhICpHxLXCLkopHy1uybDdBAeBApGotmA%2FQPqzGMPj8ZfFocAP7Mrj1ZhrmEB8djEgQBDpS3uNLP0Xg5bqcZnrtSQiekaRWMX0dZulR1fPdmdEV7vLA9qKoqVljO%2BUv5vWBGpSp8jAGzEeO6MMUBCIEMLzZK4sKgAzSpLdNpgwqfK2HPsMNWFDpsY%2B%2BuGHv4XWXXCVxeIj9Uo0AbUCFA9uBb4MjnUt6drsxDfNW%2BsnkOB0tE%2FC8kgUY8F1L8EIiMwNrzvDm0V%2F2aZltfgpDqZ3W8AHKRvYej%2F%2B63NZAEIEOamUfJ7AeZdBig5WAHMXjTmp%2FCZz7DKXCmJuoDwSJQp%2FW%2FfS%2ByBCIn1XdubsksgQkqxN9Oh%2FLBqwLQpFcLpe1Iz8MNfttcEGOqUBdqVH0cpTCwyEBFLcc9VhyqYVEbNsCO%2B%2BtF2NSB90ZuUOvy3FMEViluti7sGS7DM%2BrONw5z61fJ8CFe8uTHxQNSq%2BfIduGd3%2Bag6U%2B0%2FruAoSPg2CAweqHZ77nhHhnjMdxo3s1iyd5yDJP4kSyzSb%2FHZCzUgcq702c7QmG0htSFOP1mKs%2B6loZz8m%2BW60z6wNlP7nxZbE4XvWxMPYejmp7ClsK05M&X-Amz-Signature=a9164b5476469a1d06df4717e8ca8b1013f2fb6dde27712c0a705890dfb3aa72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJZFFKZD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHDnCz%2FA2AOrKzPynaosmCKKeIY5bft%2B0%2B39EGM7AO1AiEAxf3BeYNL5MPn5PH74T78TAl4wqKjbMyspPL9o8euKxwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy%2FICIWB1BSMxLkaSrcAwnh3KEfJzUlSI3lEJ9UtFext55AZYsazoCMR6fycsGbiaem85EwMePIJ8HtdY4BFiyl0atjcpApEaD6yDsEeeamc%2B89NJDxnZGYeOglBahJ60iTMkC2EIOPCd2%2Fau0e1RyLMzuGO6OmLBPQ3KLs2myfRAehmRb2pDxQTec7xKokEXgNuzlKk8FuB%2BMWW2859PzfZpC2I%2BNEV%2BgJ8oSXysREJSk9HdWTJWouizfYsMpJnvr2XN%2FxjNRiEkkhICpHxLXCLkopHy1uybDdBAeBApGotmA%2FQPqzGMPj8ZfFocAP7Mrj1ZhrmEB8djEgQBDpS3uNLP0Xg5bqcZnrtSQiekaRWMX0dZulR1fPdmdEV7vLA9qKoqVljO%2BUv5vWBGpSp8jAGzEeO6MMUBCIEMLzZK4sKgAzSpLdNpgwqfK2HPsMNWFDpsY%2B%2BuGHv4XWXXCVxeIj9Uo0AbUCFA9uBb4MjnUt6drsxDfNW%2BsnkOB0tE%2FC8kgUY8F1L8EIiMwNrzvDm0V%2F2aZltfgpDqZ3W8AHKRvYej%2F%2B63NZAEIEOamUfJ7AeZdBig5WAHMXjTmp%2FCZz7DKXCmJuoDwSJQp%2FW%2FfS%2ByBCIn1XdubsksgQkqxN9Oh%2FLBqwLQpFcLpe1Iz8MNfttcEGOqUBdqVH0cpTCwyEBFLcc9VhyqYVEbNsCO%2B%2BtF2NSB90ZuUOvy3FMEViluti7sGS7DM%2BrONw5z61fJ8CFe8uTHxQNSq%2BfIduGd3%2Bag6U%2B0%2FruAoSPg2CAweqHZ77nhHhnjMdxo3s1iyd5yDJP4kSyzSb%2FHZCzUgcq702c7QmG0htSFOP1mKs%2B6loZz8m%2BW60z6wNlP7nxZbE4XvWxMPYejmp7ClsK05M&X-Amz-Signature=c93f0c80319edb0c55692eb936ad86d2fd84a920696551650076671eaf776623&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
