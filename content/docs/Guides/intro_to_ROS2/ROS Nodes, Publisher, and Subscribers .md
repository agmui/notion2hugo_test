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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZEOJ3TT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bjOk7iJRNVFl2g%2BpUw9ZouSszsS%2BuG%2Fv9bo1OumOFgIhALns9nHqCCQmFQ8HZq2bSs09z1EzVhMNfRwa9On6l3mfKv8DCBEQABoMNjM3NDIzMTgzODA1Igy5z1XEFC8ao686Uqoq3AMMjmzn0KqZy9ppECURLhLgAuhOw%2B0nj8sTzP60CbWyFuCuZ63dKgzAfdx5%2FRMlbDV89%2FmfoHKciK0SXJYQmHugAizF%2B7oRJxvDjp%2B1JXBbyXbuZUEngNEd7Z2keG8bynIS%2B8HdOQy7%2FSLa13qItmLio%2FWafrb5pp4EkCcNFTiiEiZMz4wuzv9DFSvqvIk%2BeKX4KBQGW7JEKnVgSG1BiL5zdcVJGq6GkWGjYsJdSOu6ml9KJJWuHwjoNwwNO4%2FGt8yBynsaY2KaiGRt%2BzOmU1pWwT3A7SwlEmzGbspES7AKr%2Bl021odmVdvbti2XBuk%2FvoH78769Uo6FnvNMhHi8xcRoeYfvsuPLL8Zat6hoo5CxfKZjsS1i8qOAs8hzOaxyBz%2B5gqUDnDAaYtJc1YBiLIwGSuYH7qmx93Z%2F%2B4FW5c9TzUgRfuGQneJyOrkocTi2FoHWnLVi7gLGme3riU1NDKtz16h5EsDh6%2FyOgl9A2Zt9pKmeRyE%2FxWps2XI%2FgWi7Qrr1IJsTOHbgGlGmPg1inJ%2BBi5chz387FW6s4%2BUOvODJGrFJo9hCpTwtpQcYjxfVPkflX6SbtmUYU0QJFxWoyRZMQLivu36lIH%2BK7rkOB8dkGpHGDbmP7HH8Ud1gDC3k76%2FBjqkAV5Ht0rQKpVokG8gh5jhUgMDCqBcXsS4BDDuW3ltewiV2gdQzCaU2OIqXtfKePfaOWJ0X%2BuN2Y%2FXeMScH7ot1dwg0MELjeLysgKEv1rna2RXt%2Fk%2FR6%2FM7t8pjekAY2CLR8oKLeZKJ4M2Lh9RFptmhRk6lASz2GQGInwiBwJ10Q35DjhS0jjUPsHovbLu%2B7fgyynIyE%2FvmEWxGfGz13FJWu29nPpK&X-Amz-Signature=140ddd3e82aeb8178d5c693d8d50c5db3d702c99cbc8da456c120bb3db52dbed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZEOJ3TT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bjOk7iJRNVFl2g%2BpUw9ZouSszsS%2BuG%2Fv9bo1OumOFgIhALns9nHqCCQmFQ8HZq2bSs09z1EzVhMNfRwa9On6l3mfKv8DCBEQABoMNjM3NDIzMTgzODA1Igy5z1XEFC8ao686Uqoq3AMMjmzn0KqZy9ppECURLhLgAuhOw%2B0nj8sTzP60CbWyFuCuZ63dKgzAfdx5%2FRMlbDV89%2FmfoHKciK0SXJYQmHugAizF%2B7oRJxvDjp%2B1JXBbyXbuZUEngNEd7Z2keG8bynIS%2B8HdOQy7%2FSLa13qItmLio%2FWafrb5pp4EkCcNFTiiEiZMz4wuzv9DFSvqvIk%2BeKX4KBQGW7JEKnVgSG1BiL5zdcVJGq6GkWGjYsJdSOu6ml9KJJWuHwjoNwwNO4%2FGt8yBynsaY2KaiGRt%2BzOmU1pWwT3A7SwlEmzGbspES7AKr%2Bl021odmVdvbti2XBuk%2FvoH78769Uo6FnvNMhHi8xcRoeYfvsuPLL8Zat6hoo5CxfKZjsS1i8qOAs8hzOaxyBz%2B5gqUDnDAaYtJc1YBiLIwGSuYH7qmx93Z%2F%2B4FW5c9TzUgRfuGQneJyOrkocTi2FoHWnLVi7gLGme3riU1NDKtz16h5EsDh6%2FyOgl9A2Zt9pKmeRyE%2FxWps2XI%2FgWi7Qrr1IJsTOHbgGlGmPg1inJ%2BBi5chz387FW6s4%2BUOvODJGrFJo9hCpTwtpQcYjxfVPkflX6SbtmUYU0QJFxWoyRZMQLivu36lIH%2BK7rkOB8dkGpHGDbmP7HH8Ud1gDC3k76%2FBjqkAV5Ht0rQKpVokG8gh5jhUgMDCqBcXsS4BDDuW3ltewiV2gdQzCaU2OIqXtfKePfaOWJ0X%2BuN2Y%2FXeMScH7ot1dwg0MELjeLysgKEv1rna2RXt%2Fk%2FR6%2FM7t8pjekAY2CLR8oKLeZKJ4M2Lh9RFptmhRk6lASz2GQGInwiBwJ10Q35DjhS0jjUPsHovbLu%2B7fgyynIyE%2FvmEWxGfGz13FJWu29nPpK&X-Amz-Signature=71f3e5d5133316ef32c23336179148965d7d820f87b4a6122fa88390b1a79ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZEOJ3TT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bjOk7iJRNVFl2g%2BpUw9ZouSszsS%2BuG%2Fv9bo1OumOFgIhALns9nHqCCQmFQ8HZq2bSs09z1EzVhMNfRwa9On6l3mfKv8DCBEQABoMNjM3NDIzMTgzODA1Igy5z1XEFC8ao686Uqoq3AMMjmzn0KqZy9ppECURLhLgAuhOw%2B0nj8sTzP60CbWyFuCuZ63dKgzAfdx5%2FRMlbDV89%2FmfoHKciK0SXJYQmHugAizF%2B7oRJxvDjp%2B1JXBbyXbuZUEngNEd7Z2keG8bynIS%2B8HdOQy7%2FSLa13qItmLio%2FWafrb5pp4EkCcNFTiiEiZMz4wuzv9DFSvqvIk%2BeKX4KBQGW7JEKnVgSG1BiL5zdcVJGq6GkWGjYsJdSOu6ml9KJJWuHwjoNwwNO4%2FGt8yBynsaY2KaiGRt%2BzOmU1pWwT3A7SwlEmzGbspES7AKr%2Bl021odmVdvbti2XBuk%2FvoH78769Uo6FnvNMhHi8xcRoeYfvsuPLL8Zat6hoo5CxfKZjsS1i8qOAs8hzOaxyBz%2B5gqUDnDAaYtJc1YBiLIwGSuYH7qmx93Z%2F%2B4FW5c9TzUgRfuGQneJyOrkocTi2FoHWnLVi7gLGme3riU1NDKtz16h5EsDh6%2FyOgl9A2Zt9pKmeRyE%2FxWps2XI%2FgWi7Qrr1IJsTOHbgGlGmPg1inJ%2BBi5chz387FW6s4%2BUOvODJGrFJo9hCpTwtpQcYjxfVPkflX6SbtmUYU0QJFxWoyRZMQLivu36lIH%2BK7rkOB8dkGpHGDbmP7HH8Ud1gDC3k76%2FBjqkAV5Ht0rQKpVokG8gh5jhUgMDCqBcXsS4BDDuW3ltewiV2gdQzCaU2OIqXtfKePfaOWJ0X%2BuN2Y%2FXeMScH7ot1dwg0MELjeLysgKEv1rna2RXt%2Fk%2FR6%2FM7t8pjekAY2CLR8oKLeZKJ4M2Lh9RFptmhRk6lASz2GQGInwiBwJ10Q35DjhS0jjUPsHovbLu%2B7fgyynIyE%2FvmEWxGfGz13FJWu29nPpK&X-Amz-Signature=b0d2d864c9316b0c1fc056f489e6330640b5a88d7656be457668e5c783fb6821&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZEOJ3TT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bjOk7iJRNVFl2g%2BpUw9ZouSszsS%2BuG%2Fv9bo1OumOFgIhALns9nHqCCQmFQ8HZq2bSs09z1EzVhMNfRwa9On6l3mfKv8DCBEQABoMNjM3NDIzMTgzODA1Igy5z1XEFC8ao686Uqoq3AMMjmzn0KqZy9ppECURLhLgAuhOw%2B0nj8sTzP60CbWyFuCuZ63dKgzAfdx5%2FRMlbDV89%2FmfoHKciK0SXJYQmHugAizF%2B7oRJxvDjp%2B1JXBbyXbuZUEngNEd7Z2keG8bynIS%2B8HdOQy7%2FSLa13qItmLio%2FWafrb5pp4EkCcNFTiiEiZMz4wuzv9DFSvqvIk%2BeKX4KBQGW7JEKnVgSG1BiL5zdcVJGq6GkWGjYsJdSOu6ml9KJJWuHwjoNwwNO4%2FGt8yBynsaY2KaiGRt%2BzOmU1pWwT3A7SwlEmzGbspES7AKr%2Bl021odmVdvbti2XBuk%2FvoH78769Uo6FnvNMhHi8xcRoeYfvsuPLL8Zat6hoo5CxfKZjsS1i8qOAs8hzOaxyBz%2B5gqUDnDAaYtJc1YBiLIwGSuYH7qmx93Z%2F%2B4FW5c9TzUgRfuGQneJyOrkocTi2FoHWnLVi7gLGme3riU1NDKtz16h5EsDh6%2FyOgl9A2Zt9pKmeRyE%2FxWps2XI%2FgWi7Qrr1IJsTOHbgGlGmPg1inJ%2BBi5chz387FW6s4%2BUOvODJGrFJo9hCpTwtpQcYjxfVPkflX6SbtmUYU0QJFxWoyRZMQLivu36lIH%2BK7rkOB8dkGpHGDbmP7HH8Ud1gDC3k76%2FBjqkAV5Ht0rQKpVokG8gh5jhUgMDCqBcXsS4BDDuW3ltewiV2gdQzCaU2OIqXtfKePfaOWJ0X%2BuN2Y%2FXeMScH7ot1dwg0MELjeLysgKEv1rna2RXt%2Fk%2FR6%2FM7t8pjekAY2CLR8oKLeZKJ4M2Lh9RFptmhRk6lASz2GQGInwiBwJ10Q35DjhS0jjUPsHovbLu%2B7fgyynIyE%2FvmEWxGfGz13FJWu29nPpK&X-Amz-Signature=3a43204d4012a3b723f593ac98147b2a417a8b758fc4c87c8be765366a652af8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZEOJ3TT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bjOk7iJRNVFl2g%2BpUw9ZouSszsS%2BuG%2Fv9bo1OumOFgIhALns9nHqCCQmFQ8HZq2bSs09z1EzVhMNfRwa9On6l3mfKv8DCBEQABoMNjM3NDIzMTgzODA1Igy5z1XEFC8ao686Uqoq3AMMjmzn0KqZy9ppECURLhLgAuhOw%2B0nj8sTzP60CbWyFuCuZ63dKgzAfdx5%2FRMlbDV89%2FmfoHKciK0SXJYQmHugAizF%2B7oRJxvDjp%2B1JXBbyXbuZUEngNEd7Z2keG8bynIS%2B8HdOQy7%2FSLa13qItmLio%2FWafrb5pp4EkCcNFTiiEiZMz4wuzv9DFSvqvIk%2BeKX4KBQGW7JEKnVgSG1BiL5zdcVJGq6GkWGjYsJdSOu6ml9KJJWuHwjoNwwNO4%2FGt8yBynsaY2KaiGRt%2BzOmU1pWwT3A7SwlEmzGbspES7AKr%2Bl021odmVdvbti2XBuk%2FvoH78769Uo6FnvNMhHi8xcRoeYfvsuPLL8Zat6hoo5CxfKZjsS1i8qOAs8hzOaxyBz%2B5gqUDnDAaYtJc1YBiLIwGSuYH7qmx93Z%2F%2B4FW5c9TzUgRfuGQneJyOrkocTi2FoHWnLVi7gLGme3riU1NDKtz16h5EsDh6%2FyOgl9A2Zt9pKmeRyE%2FxWps2XI%2FgWi7Qrr1IJsTOHbgGlGmPg1inJ%2BBi5chz387FW6s4%2BUOvODJGrFJo9hCpTwtpQcYjxfVPkflX6SbtmUYU0QJFxWoyRZMQLivu36lIH%2BK7rkOB8dkGpHGDbmP7HH8Ud1gDC3k76%2FBjqkAV5Ht0rQKpVokG8gh5jhUgMDCqBcXsS4BDDuW3ltewiV2gdQzCaU2OIqXtfKePfaOWJ0X%2BuN2Y%2FXeMScH7ot1dwg0MELjeLysgKEv1rna2RXt%2Fk%2FR6%2FM7t8pjekAY2CLR8oKLeZKJ4M2Lh9RFptmhRk6lASz2GQGInwiBwJ10Q35DjhS0jjUPsHovbLu%2B7fgyynIyE%2FvmEWxGfGz13FJWu29nPpK&X-Amz-Signature=251b2e049d8e0bc8bf77162aee6137940e38183565e63e88e415fdf23065a38b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZEOJ3TT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bjOk7iJRNVFl2g%2BpUw9ZouSszsS%2BuG%2Fv9bo1OumOFgIhALns9nHqCCQmFQ8HZq2bSs09z1EzVhMNfRwa9On6l3mfKv8DCBEQABoMNjM3NDIzMTgzODA1Igy5z1XEFC8ao686Uqoq3AMMjmzn0KqZy9ppECURLhLgAuhOw%2B0nj8sTzP60CbWyFuCuZ63dKgzAfdx5%2FRMlbDV89%2FmfoHKciK0SXJYQmHugAizF%2B7oRJxvDjp%2B1JXBbyXbuZUEngNEd7Z2keG8bynIS%2B8HdOQy7%2FSLa13qItmLio%2FWafrb5pp4EkCcNFTiiEiZMz4wuzv9DFSvqvIk%2BeKX4KBQGW7JEKnVgSG1BiL5zdcVJGq6GkWGjYsJdSOu6ml9KJJWuHwjoNwwNO4%2FGt8yBynsaY2KaiGRt%2BzOmU1pWwT3A7SwlEmzGbspES7AKr%2Bl021odmVdvbti2XBuk%2FvoH78769Uo6FnvNMhHi8xcRoeYfvsuPLL8Zat6hoo5CxfKZjsS1i8qOAs8hzOaxyBz%2B5gqUDnDAaYtJc1YBiLIwGSuYH7qmx93Z%2F%2B4FW5c9TzUgRfuGQneJyOrkocTi2FoHWnLVi7gLGme3riU1NDKtz16h5EsDh6%2FyOgl9A2Zt9pKmeRyE%2FxWps2XI%2FgWi7Qrr1IJsTOHbgGlGmPg1inJ%2BBi5chz387FW6s4%2BUOvODJGrFJo9hCpTwtpQcYjxfVPkflX6SbtmUYU0QJFxWoyRZMQLivu36lIH%2BK7rkOB8dkGpHGDbmP7HH8Ud1gDC3k76%2FBjqkAV5Ht0rQKpVokG8gh5jhUgMDCqBcXsS4BDDuW3ltewiV2gdQzCaU2OIqXtfKePfaOWJ0X%2BuN2Y%2FXeMScH7ot1dwg0MELjeLysgKEv1rna2RXt%2Fk%2FR6%2FM7t8pjekAY2CLR8oKLeZKJ4M2Lh9RFptmhRk6lASz2GQGInwiBwJ10Q35DjhS0jjUPsHovbLu%2B7fgyynIyE%2FvmEWxGfGz13FJWu29nPpK&X-Amz-Signature=1ccdf44d5fb1cd003d04be4b18a626a32745a12fc091284dcd1f6503e4caf51b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZEOJ3TT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bjOk7iJRNVFl2g%2BpUw9ZouSszsS%2BuG%2Fv9bo1OumOFgIhALns9nHqCCQmFQ8HZq2bSs09z1EzVhMNfRwa9On6l3mfKv8DCBEQABoMNjM3NDIzMTgzODA1Igy5z1XEFC8ao686Uqoq3AMMjmzn0KqZy9ppECURLhLgAuhOw%2B0nj8sTzP60CbWyFuCuZ63dKgzAfdx5%2FRMlbDV89%2FmfoHKciK0SXJYQmHugAizF%2B7oRJxvDjp%2B1JXBbyXbuZUEngNEd7Z2keG8bynIS%2B8HdOQy7%2FSLa13qItmLio%2FWafrb5pp4EkCcNFTiiEiZMz4wuzv9DFSvqvIk%2BeKX4KBQGW7JEKnVgSG1BiL5zdcVJGq6GkWGjYsJdSOu6ml9KJJWuHwjoNwwNO4%2FGt8yBynsaY2KaiGRt%2BzOmU1pWwT3A7SwlEmzGbspES7AKr%2Bl021odmVdvbti2XBuk%2FvoH78769Uo6FnvNMhHi8xcRoeYfvsuPLL8Zat6hoo5CxfKZjsS1i8qOAs8hzOaxyBz%2B5gqUDnDAaYtJc1YBiLIwGSuYH7qmx93Z%2F%2B4FW5c9TzUgRfuGQneJyOrkocTi2FoHWnLVi7gLGme3riU1NDKtz16h5EsDh6%2FyOgl9A2Zt9pKmeRyE%2FxWps2XI%2FgWi7Qrr1IJsTOHbgGlGmPg1inJ%2BBi5chz387FW6s4%2BUOvODJGrFJo9hCpTwtpQcYjxfVPkflX6SbtmUYU0QJFxWoyRZMQLivu36lIH%2BK7rkOB8dkGpHGDbmP7HH8Ud1gDC3k76%2FBjqkAV5Ht0rQKpVokG8gh5jhUgMDCqBcXsS4BDDuW3ltewiV2gdQzCaU2OIqXtfKePfaOWJ0X%2BuN2Y%2FXeMScH7ot1dwg0MELjeLysgKEv1rna2RXt%2Fk%2FR6%2FM7t8pjekAY2CLR8oKLeZKJ4M2Lh9RFptmhRk6lASz2GQGInwiBwJ10Q35DjhS0jjUPsHovbLu%2B7fgyynIyE%2FvmEWxGfGz13FJWu29nPpK&X-Amz-Signature=b7c092df58aab5e6505a3709cdd323e1ceb40fb0faabf6ad07e42a71e7f4e6da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZEOJ3TT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bjOk7iJRNVFl2g%2BpUw9ZouSszsS%2BuG%2Fv9bo1OumOFgIhALns9nHqCCQmFQ8HZq2bSs09z1EzVhMNfRwa9On6l3mfKv8DCBEQABoMNjM3NDIzMTgzODA1Igy5z1XEFC8ao686Uqoq3AMMjmzn0KqZy9ppECURLhLgAuhOw%2B0nj8sTzP60CbWyFuCuZ63dKgzAfdx5%2FRMlbDV89%2FmfoHKciK0SXJYQmHugAizF%2B7oRJxvDjp%2B1JXBbyXbuZUEngNEd7Z2keG8bynIS%2B8HdOQy7%2FSLa13qItmLio%2FWafrb5pp4EkCcNFTiiEiZMz4wuzv9DFSvqvIk%2BeKX4KBQGW7JEKnVgSG1BiL5zdcVJGq6GkWGjYsJdSOu6ml9KJJWuHwjoNwwNO4%2FGt8yBynsaY2KaiGRt%2BzOmU1pWwT3A7SwlEmzGbspES7AKr%2Bl021odmVdvbti2XBuk%2FvoH78769Uo6FnvNMhHi8xcRoeYfvsuPLL8Zat6hoo5CxfKZjsS1i8qOAs8hzOaxyBz%2B5gqUDnDAaYtJc1YBiLIwGSuYH7qmx93Z%2F%2B4FW5c9TzUgRfuGQneJyOrkocTi2FoHWnLVi7gLGme3riU1NDKtz16h5EsDh6%2FyOgl9A2Zt9pKmeRyE%2FxWps2XI%2FgWi7Qrr1IJsTOHbgGlGmPg1inJ%2BBi5chz387FW6s4%2BUOvODJGrFJo9hCpTwtpQcYjxfVPkflX6SbtmUYU0QJFxWoyRZMQLivu36lIH%2BK7rkOB8dkGpHGDbmP7HH8Ud1gDC3k76%2FBjqkAV5Ht0rQKpVokG8gh5jhUgMDCqBcXsS4BDDuW3ltewiV2gdQzCaU2OIqXtfKePfaOWJ0X%2BuN2Y%2FXeMScH7ot1dwg0MELjeLysgKEv1rna2RXt%2Fk%2FR6%2FM7t8pjekAY2CLR8oKLeZKJ4M2Lh9RFptmhRk6lASz2GQGInwiBwJ10Q35DjhS0jjUPsHovbLu%2B7fgyynIyE%2FvmEWxGfGz13FJWu29nPpK&X-Amz-Signature=c1c36355e5ea24b0027f518bd2c252c6b73255d003acd1fce4ac3464ebad40e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
