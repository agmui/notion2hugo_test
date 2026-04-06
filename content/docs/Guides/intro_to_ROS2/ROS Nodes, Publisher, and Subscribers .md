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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXWGHW6%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICalb9eRXshDBCQGywpykvUAkwVTN9PPpOH11J%2BkhP%2FVAiBLTdLGkzQq%2FqG1DZW0PwKrybv%2FWzImoOyV%2Fxvu62pF4iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMic7pqZof9hGr1pOtKtwDkpbKx29E5tfz%2B1uPWZXli3IJHsKED%2B5c%2BWAJEIDDldkbetw9oCYOyxGxdnCPvVaqWI%2FAqhleNOYY0zpg7gafns4arN1WbvKcjz8r36%2FIuKvDOomOq9UviRTxx0kBJa7t%2FPtIYK3hojDdKuFjjqsU41RLek0e0TGvt8Jq%2FTe%2FPBhuYHRKjJx5LXrTOwkfAp1%2FUNDSLFSEv8fmc9pNW6VUSzYs7zlWxbyhwxm4wI13C6h%2FZ9kQboHfpDJAd%2FTqPG0uETWKalyc8sk1%2BtEFzfoMLhwv4Z2eWRFhN7hYSvi3nLGlp6WHUKNt3gTmZE%2Bh%2BKR8XsMOFzKR9TNVk0pulQj6YAHayLQS8XbwXtDV7SDlPtrohLpsYGaJZcdxiwjRMoYeqmgZRl%2BuTEPWkUJLlw6XFmfJ1K3pRRjw2zrtHRSJXqlFkbBE6ISvOi8s1PUs6IFziAsGJTd6inmLrFxqCHbmea53hCalhFEHowqdxtsjOSUCOyOqfobWJxpNEb4LtGxIfRZWPhqipe93hghnDp5YRMyTdRB8m4AWpYl7rPwaUxnj0jOOpvMJOOdpPTGSwyElLpfSlEUhEiRHBivufoZ3XRLCveN2viZCJKmFiq6fTVgl%2Fs%2BivlT1wYvrgBYwtrDMzgY6pgHGOi9BI3L8HdIpUCB3bDmIDNFy96FZVcjN9VQJMSd0MYIeq6jRS2WvWdgcK0OnyffcNA%2FOUQ3gmnOiT0O9ACUP6rKYevNyZyL3I%2Bfc5icQ%2BCS%2F%2FskvjqwtvUrs41h%2BHQ%2BjjYyfb9QErz10uyQDjOSHLYN8PKtlNSccAMWf8qhFCoWZIBaf9m%2FrHftTHbVNQgQIIFHIB8UG2nZx8%2BC5noemB6h0wYiY&X-Amz-Signature=f68b6eafd3af3aa7bc20f80c56155c9205bdd282e059811e4290ae8d801a9070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXWGHW6%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICalb9eRXshDBCQGywpykvUAkwVTN9PPpOH11J%2BkhP%2FVAiBLTdLGkzQq%2FqG1DZW0PwKrybv%2FWzImoOyV%2Fxvu62pF4iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMic7pqZof9hGr1pOtKtwDkpbKx29E5tfz%2B1uPWZXli3IJHsKED%2B5c%2BWAJEIDDldkbetw9oCYOyxGxdnCPvVaqWI%2FAqhleNOYY0zpg7gafns4arN1WbvKcjz8r36%2FIuKvDOomOq9UviRTxx0kBJa7t%2FPtIYK3hojDdKuFjjqsU41RLek0e0TGvt8Jq%2FTe%2FPBhuYHRKjJx5LXrTOwkfAp1%2FUNDSLFSEv8fmc9pNW6VUSzYs7zlWxbyhwxm4wI13C6h%2FZ9kQboHfpDJAd%2FTqPG0uETWKalyc8sk1%2BtEFzfoMLhwv4Z2eWRFhN7hYSvi3nLGlp6WHUKNt3gTmZE%2Bh%2BKR8XsMOFzKR9TNVk0pulQj6YAHayLQS8XbwXtDV7SDlPtrohLpsYGaJZcdxiwjRMoYeqmgZRl%2BuTEPWkUJLlw6XFmfJ1K3pRRjw2zrtHRSJXqlFkbBE6ISvOi8s1PUs6IFziAsGJTd6inmLrFxqCHbmea53hCalhFEHowqdxtsjOSUCOyOqfobWJxpNEb4LtGxIfRZWPhqipe93hghnDp5YRMyTdRB8m4AWpYl7rPwaUxnj0jOOpvMJOOdpPTGSwyElLpfSlEUhEiRHBivufoZ3XRLCveN2viZCJKmFiq6fTVgl%2Fs%2BivlT1wYvrgBYwtrDMzgY6pgHGOi9BI3L8HdIpUCB3bDmIDNFy96FZVcjN9VQJMSd0MYIeq6jRS2WvWdgcK0OnyffcNA%2FOUQ3gmnOiT0O9ACUP6rKYevNyZyL3I%2Bfc5icQ%2BCS%2F%2FskvjqwtvUrs41h%2BHQ%2BjjYyfb9QErz10uyQDjOSHLYN8PKtlNSccAMWf8qhFCoWZIBaf9m%2FrHftTHbVNQgQIIFHIB8UG2nZx8%2BC5noemB6h0wYiY&X-Amz-Signature=22747a6f2b8f48b0ece2fe20f4589d4dba9c42a7dfedd2fdec24f48b0115f524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXWGHW6%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICalb9eRXshDBCQGywpykvUAkwVTN9PPpOH11J%2BkhP%2FVAiBLTdLGkzQq%2FqG1DZW0PwKrybv%2FWzImoOyV%2Fxvu62pF4iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMic7pqZof9hGr1pOtKtwDkpbKx29E5tfz%2B1uPWZXli3IJHsKED%2B5c%2BWAJEIDDldkbetw9oCYOyxGxdnCPvVaqWI%2FAqhleNOYY0zpg7gafns4arN1WbvKcjz8r36%2FIuKvDOomOq9UviRTxx0kBJa7t%2FPtIYK3hojDdKuFjjqsU41RLek0e0TGvt8Jq%2FTe%2FPBhuYHRKjJx5LXrTOwkfAp1%2FUNDSLFSEv8fmc9pNW6VUSzYs7zlWxbyhwxm4wI13C6h%2FZ9kQboHfpDJAd%2FTqPG0uETWKalyc8sk1%2BtEFzfoMLhwv4Z2eWRFhN7hYSvi3nLGlp6WHUKNt3gTmZE%2Bh%2BKR8XsMOFzKR9TNVk0pulQj6YAHayLQS8XbwXtDV7SDlPtrohLpsYGaJZcdxiwjRMoYeqmgZRl%2BuTEPWkUJLlw6XFmfJ1K3pRRjw2zrtHRSJXqlFkbBE6ISvOi8s1PUs6IFziAsGJTd6inmLrFxqCHbmea53hCalhFEHowqdxtsjOSUCOyOqfobWJxpNEb4LtGxIfRZWPhqipe93hghnDp5YRMyTdRB8m4AWpYl7rPwaUxnj0jOOpvMJOOdpPTGSwyElLpfSlEUhEiRHBivufoZ3XRLCveN2viZCJKmFiq6fTVgl%2Fs%2BivlT1wYvrgBYwtrDMzgY6pgHGOi9BI3L8HdIpUCB3bDmIDNFy96FZVcjN9VQJMSd0MYIeq6jRS2WvWdgcK0OnyffcNA%2FOUQ3gmnOiT0O9ACUP6rKYevNyZyL3I%2Bfc5icQ%2BCS%2F%2FskvjqwtvUrs41h%2BHQ%2BjjYyfb9QErz10uyQDjOSHLYN8PKtlNSccAMWf8qhFCoWZIBaf9m%2FrHftTHbVNQgQIIFHIB8UG2nZx8%2BC5noemB6h0wYiY&X-Amz-Signature=0fb28e2cf62c2725717431384961c56873c60bc95b122086236e78e9e0d3a6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXWGHW6%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICalb9eRXshDBCQGywpykvUAkwVTN9PPpOH11J%2BkhP%2FVAiBLTdLGkzQq%2FqG1DZW0PwKrybv%2FWzImoOyV%2Fxvu62pF4iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMic7pqZof9hGr1pOtKtwDkpbKx29E5tfz%2B1uPWZXli3IJHsKED%2B5c%2BWAJEIDDldkbetw9oCYOyxGxdnCPvVaqWI%2FAqhleNOYY0zpg7gafns4arN1WbvKcjz8r36%2FIuKvDOomOq9UviRTxx0kBJa7t%2FPtIYK3hojDdKuFjjqsU41RLek0e0TGvt8Jq%2FTe%2FPBhuYHRKjJx5LXrTOwkfAp1%2FUNDSLFSEv8fmc9pNW6VUSzYs7zlWxbyhwxm4wI13C6h%2FZ9kQboHfpDJAd%2FTqPG0uETWKalyc8sk1%2BtEFzfoMLhwv4Z2eWRFhN7hYSvi3nLGlp6WHUKNt3gTmZE%2Bh%2BKR8XsMOFzKR9TNVk0pulQj6YAHayLQS8XbwXtDV7SDlPtrohLpsYGaJZcdxiwjRMoYeqmgZRl%2BuTEPWkUJLlw6XFmfJ1K3pRRjw2zrtHRSJXqlFkbBE6ISvOi8s1PUs6IFziAsGJTd6inmLrFxqCHbmea53hCalhFEHowqdxtsjOSUCOyOqfobWJxpNEb4LtGxIfRZWPhqipe93hghnDp5YRMyTdRB8m4AWpYl7rPwaUxnj0jOOpvMJOOdpPTGSwyElLpfSlEUhEiRHBivufoZ3XRLCveN2viZCJKmFiq6fTVgl%2Fs%2BivlT1wYvrgBYwtrDMzgY6pgHGOi9BI3L8HdIpUCB3bDmIDNFy96FZVcjN9VQJMSd0MYIeq6jRS2WvWdgcK0OnyffcNA%2FOUQ3gmnOiT0O9ACUP6rKYevNyZyL3I%2Bfc5icQ%2BCS%2F%2FskvjqwtvUrs41h%2BHQ%2BjjYyfb9QErz10uyQDjOSHLYN8PKtlNSccAMWf8qhFCoWZIBaf9m%2FrHftTHbVNQgQIIFHIB8UG2nZx8%2BC5noemB6h0wYiY&X-Amz-Signature=139ae60fd8b814345b2770a7f2460ec089e3cf0cef35aa055805534b20c1c286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXWGHW6%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICalb9eRXshDBCQGywpykvUAkwVTN9PPpOH11J%2BkhP%2FVAiBLTdLGkzQq%2FqG1DZW0PwKrybv%2FWzImoOyV%2Fxvu62pF4iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMic7pqZof9hGr1pOtKtwDkpbKx29E5tfz%2B1uPWZXli3IJHsKED%2B5c%2BWAJEIDDldkbetw9oCYOyxGxdnCPvVaqWI%2FAqhleNOYY0zpg7gafns4arN1WbvKcjz8r36%2FIuKvDOomOq9UviRTxx0kBJa7t%2FPtIYK3hojDdKuFjjqsU41RLek0e0TGvt8Jq%2FTe%2FPBhuYHRKjJx5LXrTOwkfAp1%2FUNDSLFSEv8fmc9pNW6VUSzYs7zlWxbyhwxm4wI13C6h%2FZ9kQboHfpDJAd%2FTqPG0uETWKalyc8sk1%2BtEFzfoMLhwv4Z2eWRFhN7hYSvi3nLGlp6WHUKNt3gTmZE%2Bh%2BKR8XsMOFzKR9TNVk0pulQj6YAHayLQS8XbwXtDV7SDlPtrohLpsYGaJZcdxiwjRMoYeqmgZRl%2BuTEPWkUJLlw6XFmfJ1K3pRRjw2zrtHRSJXqlFkbBE6ISvOi8s1PUs6IFziAsGJTd6inmLrFxqCHbmea53hCalhFEHowqdxtsjOSUCOyOqfobWJxpNEb4LtGxIfRZWPhqipe93hghnDp5YRMyTdRB8m4AWpYl7rPwaUxnj0jOOpvMJOOdpPTGSwyElLpfSlEUhEiRHBivufoZ3XRLCveN2viZCJKmFiq6fTVgl%2Fs%2BivlT1wYvrgBYwtrDMzgY6pgHGOi9BI3L8HdIpUCB3bDmIDNFy96FZVcjN9VQJMSd0MYIeq6jRS2WvWdgcK0OnyffcNA%2FOUQ3gmnOiT0O9ACUP6rKYevNyZyL3I%2Bfc5icQ%2BCS%2F%2FskvjqwtvUrs41h%2BHQ%2BjjYyfb9QErz10uyQDjOSHLYN8PKtlNSccAMWf8qhFCoWZIBaf9m%2FrHftTHbVNQgQIIFHIB8UG2nZx8%2BC5noemB6h0wYiY&X-Amz-Signature=641aa4ab7628f8cee4acbb6755c1bfbc38f296d709ce347f3a3ad23330eebd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXWGHW6%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICalb9eRXshDBCQGywpykvUAkwVTN9PPpOH11J%2BkhP%2FVAiBLTdLGkzQq%2FqG1DZW0PwKrybv%2FWzImoOyV%2Fxvu62pF4iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMic7pqZof9hGr1pOtKtwDkpbKx29E5tfz%2B1uPWZXli3IJHsKED%2B5c%2BWAJEIDDldkbetw9oCYOyxGxdnCPvVaqWI%2FAqhleNOYY0zpg7gafns4arN1WbvKcjz8r36%2FIuKvDOomOq9UviRTxx0kBJa7t%2FPtIYK3hojDdKuFjjqsU41RLek0e0TGvt8Jq%2FTe%2FPBhuYHRKjJx5LXrTOwkfAp1%2FUNDSLFSEv8fmc9pNW6VUSzYs7zlWxbyhwxm4wI13C6h%2FZ9kQboHfpDJAd%2FTqPG0uETWKalyc8sk1%2BtEFzfoMLhwv4Z2eWRFhN7hYSvi3nLGlp6WHUKNt3gTmZE%2Bh%2BKR8XsMOFzKR9TNVk0pulQj6YAHayLQS8XbwXtDV7SDlPtrohLpsYGaJZcdxiwjRMoYeqmgZRl%2BuTEPWkUJLlw6XFmfJ1K3pRRjw2zrtHRSJXqlFkbBE6ISvOi8s1PUs6IFziAsGJTd6inmLrFxqCHbmea53hCalhFEHowqdxtsjOSUCOyOqfobWJxpNEb4LtGxIfRZWPhqipe93hghnDp5YRMyTdRB8m4AWpYl7rPwaUxnj0jOOpvMJOOdpPTGSwyElLpfSlEUhEiRHBivufoZ3XRLCveN2viZCJKmFiq6fTVgl%2Fs%2BivlT1wYvrgBYwtrDMzgY6pgHGOi9BI3L8HdIpUCB3bDmIDNFy96FZVcjN9VQJMSd0MYIeq6jRS2WvWdgcK0OnyffcNA%2FOUQ3gmnOiT0O9ACUP6rKYevNyZyL3I%2Bfc5icQ%2BCS%2F%2FskvjqwtvUrs41h%2BHQ%2BjjYyfb9QErz10uyQDjOSHLYN8PKtlNSccAMWf8qhFCoWZIBaf9m%2FrHftTHbVNQgQIIFHIB8UG2nZx8%2BC5noemB6h0wYiY&X-Amz-Signature=788bb2d2ce952e54b5574010b547202b1458cf27a721a39c302757f0afd0341f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXWGHW6%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICalb9eRXshDBCQGywpykvUAkwVTN9PPpOH11J%2BkhP%2FVAiBLTdLGkzQq%2FqG1DZW0PwKrybv%2FWzImoOyV%2Fxvu62pF4iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMic7pqZof9hGr1pOtKtwDkpbKx29E5tfz%2B1uPWZXli3IJHsKED%2B5c%2BWAJEIDDldkbetw9oCYOyxGxdnCPvVaqWI%2FAqhleNOYY0zpg7gafns4arN1WbvKcjz8r36%2FIuKvDOomOq9UviRTxx0kBJa7t%2FPtIYK3hojDdKuFjjqsU41RLek0e0TGvt8Jq%2FTe%2FPBhuYHRKjJx5LXrTOwkfAp1%2FUNDSLFSEv8fmc9pNW6VUSzYs7zlWxbyhwxm4wI13C6h%2FZ9kQboHfpDJAd%2FTqPG0uETWKalyc8sk1%2BtEFzfoMLhwv4Z2eWRFhN7hYSvi3nLGlp6WHUKNt3gTmZE%2Bh%2BKR8XsMOFzKR9TNVk0pulQj6YAHayLQS8XbwXtDV7SDlPtrohLpsYGaJZcdxiwjRMoYeqmgZRl%2BuTEPWkUJLlw6XFmfJ1K3pRRjw2zrtHRSJXqlFkbBE6ISvOi8s1PUs6IFziAsGJTd6inmLrFxqCHbmea53hCalhFEHowqdxtsjOSUCOyOqfobWJxpNEb4LtGxIfRZWPhqipe93hghnDp5YRMyTdRB8m4AWpYl7rPwaUxnj0jOOpvMJOOdpPTGSwyElLpfSlEUhEiRHBivufoZ3XRLCveN2viZCJKmFiq6fTVgl%2Fs%2BivlT1wYvrgBYwtrDMzgY6pgHGOi9BI3L8HdIpUCB3bDmIDNFy96FZVcjN9VQJMSd0MYIeq6jRS2WvWdgcK0OnyffcNA%2FOUQ3gmnOiT0O9ACUP6rKYevNyZyL3I%2Bfc5icQ%2BCS%2F%2FskvjqwtvUrs41h%2BHQ%2BjjYyfb9QErz10uyQDjOSHLYN8PKtlNSccAMWf8qhFCoWZIBaf9m%2FrHftTHbVNQgQIIFHIB8UG2nZx8%2BC5noemB6h0wYiY&X-Amz-Signature=9c5fd4131028bf3f3f6c6360f6f3a1dca68ab776aa22299da1122004f794a81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXWGHW6%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICalb9eRXshDBCQGywpykvUAkwVTN9PPpOH11J%2BkhP%2FVAiBLTdLGkzQq%2FqG1DZW0PwKrybv%2FWzImoOyV%2Fxvu62pF4iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMic7pqZof9hGr1pOtKtwDkpbKx29E5tfz%2B1uPWZXli3IJHsKED%2B5c%2BWAJEIDDldkbetw9oCYOyxGxdnCPvVaqWI%2FAqhleNOYY0zpg7gafns4arN1WbvKcjz8r36%2FIuKvDOomOq9UviRTxx0kBJa7t%2FPtIYK3hojDdKuFjjqsU41RLek0e0TGvt8Jq%2FTe%2FPBhuYHRKjJx5LXrTOwkfAp1%2FUNDSLFSEv8fmc9pNW6VUSzYs7zlWxbyhwxm4wI13C6h%2FZ9kQboHfpDJAd%2FTqPG0uETWKalyc8sk1%2BtEFzfoMLhwv4Z2eWRFhN7hYSvi3nLGlp6WHUKNt3gTmZE%2Bh%2BKR8XsMOFzKR9TNVk0pulQj6YAHayLQS8XbwXtDV7SDlPtrohLpsYGaJZcdxiwjRMoYeqmgZRl%2BuTEPWkUJLlw6XFmfJ1K3pRRjw2zrtHRSJXqlFkbBE6ISvOi8s1PUs6IFziAsGJTd6inmLrFxqCHbmea53hCalhFEHowqdxtsjOSUCOyOqfobWJxpNEb4LtGxIfRZWPhqipe93hghnDp5YRMyTdRB8m4AWpYl7rPwaUxnj0jOOpvMJOOdpPTGSwyElLpfSlEUhEiRHBivufoZ3XRLCveN2viZCJKmFiq6fTVgl%2Fs%2BivlT1wYvrgBYwtrDMzgY6pgHGOi9BI3L8HdIpUCB3bDmIDNFy96FZVcjN9VQJMSd0MYIeq6jRS2WvWdgcK0OnyffcNA%2FOUQ3gmnOiT0O9ACUP6rKYevNyZyL3I%2Bfc5icQ%2BCS%2F%2FskvjqwtvUrs41h%2BHQ%2BjjYyfb9QErz10uyQDjOSHLYN8PKtlNSccAMWf8qhFCoWZIBaf9m%2FrHftTHbVNQgQIIFHIB8UG2nZx8%2BC5noemB6h0wYiY&X-Amz-Signature=f39f86e001480a4c07ec4ec9a28def992955edd08b6de12563644d36d4903406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
