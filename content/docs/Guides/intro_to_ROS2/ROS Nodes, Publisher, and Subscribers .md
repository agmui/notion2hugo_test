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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UEJUGL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8VYbiXHmjLwLToSOIloY9JQuR%2FbQBrn%2F3spDkeqX6gIhAMTymMhqD45H7gcDDEuSyf%2FBsP6QKL5L%2FzoadlY1l37WKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2uyTQkoC7VjhWlBQq3AOAViG9F0U%2B8gIaqseOTtbQz7IahPSs6MLs38NwoSVXi9UruQ%2Bw94fdgOnZREsoywg8dtKznxBXbYoQZoAqNFcrdldF15jEVz5ivkaTjvTCMjoTt92WOzZeUlsI3h1fFpWaSBOIDD9Y0%2F1Hqi7PzcZSVpMZGEiD8C2OotlDHCFSW5b%2B5mZd1bBhAXsdyvLZa6F5YtW0kGHcEAy%2FbtC4%2F2iCIsYz65fc3yCcIUIrvo%2BVUpxPTGOI07hGUPy%2FZImXsNaijsqDDk%2B37YXez%2FuBGvQ42Yb176IEp2mSXGjiQFpz40b3GZquRoEwa0xQdZGq1SgyolCJB%2BtczS21oOP9I6l%2B05EECtssa5OIkPGQLj3d%2B2PfxrfSvR6X63EZ%2FP04afdx3UA9fHr4sR54j75SIXtGGxn%2B3oWRyjgNqDIRqoy9GgpmFA7WBY1EyvlyQM9Ll%2BOsWyqgJ3VwfR0CrLqx1ESNxur2zu9Pg4yPqKxw7z5xq79hF672mGWY2vZB%2BU1HqRdjSlRbCxrJI3Yh9XT4bGMFV573Pk5RODEsK4Fr1nFg5m4Y2ZtU8vfMOmlNsxMQ2ImbDNH5hszagtOXo1%2F8mjNF9XsNKBYzrvO75Pwi8G9FWlyElt%2FLci06T7K5SDCy08TDBjqkAdQejNbrhASfQ%2BOCdB0rHyd8fYVKfnuGA0b2IG6r2UaNEWLzzeXtXxMvem1u4ol62yisF0ptYFdoqAKiuXOqsnNBI%2FqDp92YVI0dqzIIYv%2FSE%2FNci3J3wTA%2F4LAdJ%2BWSbqWsbowWD3WE9DPSRJMBUlAnV%2BxnNcCl9U934vuRTcJPDXVO8v4H3%2FZdpvj%2FVWo27swzJX5sqSPKEl8YGUOXQLq0pdNh&X-Amz-Signature=7dac4dfeced0cb36db32b5163065f48af2d3b411a32fbd481cca43b93e29bcc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UEJUGL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8VYbiXHmjLwLToSOIloY9JQuR%2FbQBrn%2F3spDkeqX6gIhAMTymMhqD45H7gcDDEuSyf%2FBsP6QKL5L%2FzoadlY1l37WKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2uyTQkoC7VjhWlBQq3AOAViG9F0U%2B8gIaqseOTtbQz7IahPSs6MLs38NwoSVXi9UruQ%2Bw94fdgOnZREsoywg8dtKznxBXbYoQZoAqNFcrdldF15jEVz5ivkaTjvTCMjoTt92WOzZeUlsI3h1fFpWaSBOIDD9Y0%2F1Hqi7PzcZSVpMZGEiD8C2OotlDHCFSW5b%2B5mZd1bBhAXsdyvLZa6F5YtW0kGHcEAy%2FbtC4%2F2iCIsYz65fc3yCcIUIrvo%2BVUpxPTGOI07hGUPy%2FZImXsNaijsqDDk%2B37YXez%2FuBGvQ42Yb176IEp2mSXGjiQFpz40b3GZquRoEwa0xQdZGq1SgyolCJB%2BtczS21oOP9I6l%2B05EECtssa5OIkPGQLj3d%2B2PfxrfSvR6X63EZ%2FP04afdx3UA9fHr4sR54j75SIXtGGxn%2B3oWRyjgNqDIRqoy9GgpmFA7WBY1EyvlyQM9Ll%2BOsWyqgJ3VwfR0CrLqx1ESNxur2zu9Pg4yPqKxw7z5xq79hF672mGWY2vZB%2BU1HqRdjSlRbCxrJI3Yh9XT4bGMFV573Pk5RODEsK4Fr1nFg5m4Y2ZtU8vfMOmlNsxMQ2ImbDNH5hszagtOXo1%2F8mjNF9XsNKBYzrvO75Pwi8G9FWlyElt%2FLci06T7K5SDCy08TDBjqkAdQejNbrhASfQ%2BOCdB0rHyd8fYVKfnuGA0b2IG6r2UaNEWLzzeXtXxMvem1u4ol62yisF0ptYFdoqAKiuXOqsnNBI%2FqDp92YVI0dqzIIYv%2FSE%2FNci3J3wTA%2F4LAdJ%2BWSbqWsbowWD3WE9DPSRJMBUlAnV%2BxnNcCl9U934vuRTcJPDXVO8v4H3%2FZdpvj%2FVWo27swzJX5sqSPKEl8YGUOXQLq0pdNh&X-Amz-Signature=5a3dc6c66f7466fa0e3377c834c49d3e779574e2b7001bf8b2836b549515c38e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UEJUGL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8VYbiXHmjLwLToSOIloY9JQuR%2FbQBrn%2F3spDkeqX6gIhAMTymMhqD45H7gcDDEuSyf%2FBsP6QKL5L%2FzoadlY1l37WKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2uyTQkoC7VjhWlBQq3AOAViG9F0U%2B8gIaqseOTtbQz7IahPSs6MLs38NwoSVXi9UruQ%2Bw94fdgOnZREsoywg8dtKznxBXbYoQZoAqNFcrdldF15jEVz5ivkaTjvTCMjoTt92WOzZeUlsI3h1fFpWaSBOIDD9Y0%2F1Hqi7PzcZSVpMZGEiD8C2OotlDHCFSW5b%2B5mZd1bBhAXsdyvLZa6F5YtW0kGHcEAy%2FbtC4%2F2iCIsYz65fc3yCcIUIrvo%2BVUpxPTGOI07hGUPy%2FZImXsNaijsqDDk%2B37YXez%2FuBGvQ42Yb176IEp2mSXGjiQFpz40b3GZquRoEwa0xQdZGq1SgyolCJB%2BtczS21oOP9I6l%2B05EECtssa5OIkPGQLj3d%2B2PfxrfSvR6X63EZ%2FP04afdx3UA9fHr4sR54j75SIXtGGxn%2B3oWRyjgNqDIRqoy9GgpmFA7WBY1EyvlyQM9Ll%2BOsWyqgJ3VwfR0CrLqx1ESNxur2zu9Pg4yPqKxw7z5xq79hF672mGWY2vZB%2BU1HqRdjSlRbCxrJI3Yh9XT4bGMFV573Pk5RODEsK4Fr1nFg5m4Y2ZtU8vfMOmlNsxMQ2ImbDNH5hszagtOXo1%2F8mjNF9XsNKBYzrvO75Pwi8G9FWlyElt%2FLci06T7K5SDCy08TDBjqkAdQejNbrhASfQ%2BOCdB0rHyd8fYVKfnuGA0b2IG6r2UaNEWLzzeXtXxMvem1u4ol62yisF0ptYFdoqAKiuXOqsnNBI%2FqDp92YVI0dqzIIYv%2FSE%2FNci3J3wTA%2F4LAdJ%2BWSbqWsbowWD3WE9DPSRJMBUlAnV%2BxnNcCl9U934vuRTcJPDXVO8v4H3%2FZdpvj%2FVWo27swzJX5sqSPKEl8YGUOXQLq0pdNh&X-Amz-Signature=d11d2a64b25813bec453ef059b8bbf62e68439d386aa8b210d3efa07c5f296a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UEJUGL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8VYbiXHmjLwLToSOIloY9JQuR%2FbQBrn%2F3spDkeqX6gIhAMTymMhqD45H7gcDDEuSyf%2FBsP6QKL5L%2FzoadlY1l37WKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2uyTQkoC7VjhWlBQq3AOAViG9F0U%2B8gIaqseOTtbQz7IahPSs6MLs38NwoSVXi9UruQ%2Bw94fdgOnZREsoywg8dtKznxBXbYoQZoAqNFcrdldF15jEVz5ivkaTjvTCMjoTt92WOzZeUlsI3h1fFpWaSBOIDD9Y0%2F1Hqi7PzcZSVpMZGEiD8C2OotlDHCFSW5b%2B5mZd1bBhAXsdyvLZa6F5YtW0kGHcEAy%2FbtC4%2F2iCIsYz65fc3yCcIUIrvo%2BVUpxPTGOI07hGUPy%2FZImXsNaijsqDDk%2B37YXez%2FuBGvQ42Yb176IEp2mSXGjiQFpz40b3GZquRoEwa0xQdZGq1SgyolCJB%2BtczS21oOP9I6l%2B05EECtssa5OIkPGQLj3d%2B2PfxrfSvR6X63EZ%2FP04afdx3UA9fHr4sR54j75SIXtGGxn%2B3oWRyjgNqDIRqoy9GgpmFA7WBY1EyvlyQM9Ll%2BOsWyqgJ3VwfR0CrLqx1ESNxur2zu9Pg4yPqKxw7z5xq79hF672mGWY2vZB%2BU1HqRdjSlRbCxrJI3Yh9XT4bGMFV573Pk5RODEsK4Fr1nFg5m4Y2ZtU8vfMOmlNsxMQ2ImbDNH5hszagtOXo1%2F8mjNF9XsNKBYzrvO75Pwi8G9FWlyElt%2FLci06T7K5SDCy08TDBjqkAdQejNbrhASfQ%2BOCdB0rHyd8fYVKfnuGA0b2IG6r2UaNEWLzzeXtXxMvem1u4ol62yisF0ptYFdoqAKiuXOqsnNBI%2FqDp92YVI0dqzIIYv%2FSE%2FNci3J3wTA%2F4LAdJ%2BWSbqWsbowWD3WE9DPSRJMBUlAnV%2BxnNcCl9U934vuRTcJPDXVO8v4H3%2FZdpvj%2FVWo27swzJX5sqSPKEl8YGUOXQLq0pdNh&X-Amz-Signature=82193f49cbdf8d8d24b86620423f65fb20dfef86706e27c9818bf9592540595f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UEJUGL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8VYbiXHmjLwLToSOIloY9JQuR%2FbQBrn%2F3spDkeqX6gIhAMTymMhqD45H7gcDDEuSyf%2FBsP6QKL5L%2FzoadlY1l37WKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2uyTQkoC7VjhWlBQq3AOAViG9F0U%2B8gIaqseOTtbQz7IahPSs6MLs38NwoSVXi9UruQ%2Bw94fdgOnZREsoywg8dtKznxBXbYoQZoAqNFcrdldF15jEVz5ivkaTjvTCMjoTt92WOzZeUlsI3h1fFpWaSBOIDD9Y0%2F1Hqi7PzcZSVpMZGEiD8C2OotlDHCFSW5b%2B5mZd1bBhAXsdyvLZa6F5YtW0kGHcEAy%2FbtC4%2F2iCIsYz65fc3yCcIUIrvo%2BVUpxPTGOI07hGUPy%2FZImXsNaijsqDDk%2B37YXez%2FuBGvQ42Yb176IEp2mSXGjiQFpz40b3GZquRoEwa0xQdZGq1SgyolCJB%2BtczS21oOP9I6l%2B05EECtssa5OIkPGQLj3d%2B2PfxrfSvR6X63EZ%2FP04afdx3UA9fHr4sR54j75SIXtGGxn%2B3oWRyjgNqDIRqoy9GgpmFA7WBY1EyvlyQM9Ll%2BOsWyqgJ3VwfR0CrLqx1ESNxur2zu9Pg4yPqKxw7z5xq79hF672mGWY2vZB%2BU1HqRdjSlRbCxrJI3Yh9XT4bGMFV573Pk5RODEsK4Fr1nFg5m4Y2ZtU8vfMOmlNsxMQ2ImbDNH5hszagtOXo1%2F8mjNF9XsNKBYzrvO75Pwi8G9FWlyElt%2FLci06T7K5SDCy08TDBjqkAdQejNbrhASfQ%2BOCdB0rHyd8fYVKfnuGA0b2IG6r2UaNEWLzzeXtXxMvem1u4ol62yisF0ptYFdoqAKiuXOqsnNBI%2FqDp92YVI0dqzIIYv%2FSE%2FNci3J3wTA%2F4LAdJ%2BWSbqWsbowWD3WE9DPSRJMBUlAnV%2BxnNcCl9U934vuRTcJPDXVO8v4H3%2FZdpvj%2FVWo27swzJX5sqSPKEl8YGUOXQLq0pdNh&X-Amz-Signature=8d4d019c207c6f40fcfe9d894d34b3186d9f9a857ec8aa5bd12a985010263f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UEJUGL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8VYbiXHmjLwLToSOIloY9JQuR%2FbQBrn%2F3spDkeqX6gIhAMTymMhqD45H7gcDDEuSyf%2FBsP6QKL5L%2FzoadlY1l37WKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2uyTQkoC7VjhWlBQq3AOAViG9F0U%2B8gIaqseOTtbQz7IahPSs6MLs38NwoSVXi9UruQ%2Bw94fdgOnZREsoywg8dtKznxBXbYoQZoAqNFcrdldF15jEVz5ivkaTjvTCMjoTt92WOzZeUlsI3h1fFpWaSBOIDD9Y0%2F1Hqi7PzcZSVpMZGEiD8C2OotlDHCFSW5b%2B5mZd1bBhAXsdyvLZa6F5YtW0kGHcEAy%2FbtC4%2F2iCIsYz65fc3yCcIUIrvo%2BVUpxPTGOI07hGUPy%2FZImXsNaijsqDDk%2B37YXez%2FuBGvQ42Yb176IEp2mSXGjiQFpz40b3GZquRoEwa0xQdZGq1SgyolCJB%2BtczS21oOP9I6l%2B05EECtssa5OIkPGQLj3d%2B2PfxrfSvR6X63EZ%2FP04afdx3UA9fHr4sR54j75SIXtGGxn%2B3oWRyjgNqDIRqoy9GgpmFA7WBY1EyvlyQM9Ll%2BOsWyqgJ3VwfR0CrLqx1ESNxur2zu9Pg4yPqKxw7z5xq79hF672mGWY2vZB%2BU1HqRdjSlRbCxrJI3Yh9XT4bGMFV573Pk5RODEsK4Fr1nFg5m4Y2ZtU8vfMOmlNsxMQ2ImbDNH5hszagtOXo1%2F8mjNF9XsNKBYzrvO75Pwi8G9FWlyElt%2FLci06T7K5SDCy08TDBjqkAdQejNbrhASfQ%2BOCdB0rHyd8fYVKfnuGA0b2IG6r2UaNEWLzzeXtXxMvem1u4ol62yisF0ptYFdoqAKiuXOqsnNBI%2FqDp92YVI0dqzIIYv%2FSE%2FNci3J3wTA%2F4LAdJ%2BWSbqWsbowWD3WE9DPSRJMBUlAnV%2BxnNcCl9U934vuRTcJPDXVO8v4H3%2FZdpvj%2FVWo27swzJX5sqSPKEl8YGUOXQLq0pdNh&X-Amz-Signature=199ee0ddde4c79151869790e44e4c6d493ba80766dbddab54f9edd46aabf4eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UEJUGL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8VYbiXHmjLwLToSOIloY9JQuR%2FbQBrn%2F3spDkeqX6gIhAMTymMhqD45H7gcDDEuSyf%2FBsP6QKL5L%2FzoadlY1l37WKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2uyTQkoC7VjhWlBQq3AOAViG9F0U%2B8gIaqseOTtbQz7IahPSs6MLs38NwoSVXi9UruQ%2Bw94fdgOnZREsoywg8dtKznxBXbYoQZoAqNFcrdldF15jEVz5ivkaTjvTCMjoTt92WOzZeUlsI3h1fFpWaSBOIDD9Y0%2F1Hqi7PzcZSVpMZGEiD8C2OotlDHCFSW5b%2B5mZd1bBhAXsdyvLZa6F5YtW0kGHcEAy%2FbtC4%2F2iCIsYz65fc3yCcIUIrvo%2BVUpxPTGOI07hGUPy%2FZImXsNaijsqDDk%2B37YXez%2FuBGvQ42Yb176IEp2mSXGjiQFpz40b3GZquRoEwa0xQdZGq1SgyolCJB%2BtczS21oOP9I6l%2B05EECtssa5OIkPGQLj3d%2B2PfxrfSvR6X63EZ%2FP04afdx3UA9fHr4sR54j75SIXtGGxn%2B3oWRyjgNqDIRqoy9GgpmFA7WBY1EyvlyQM9Ll%2BOsWyqgJ3VwfR0CrLqx1ESNxur2zu9Pg4yPqKxw7z5xq79hF672mGWY2vZB%2BU1HqRdjSlRbCxrJI3Yh9XT4bGMFV573Pk5RODEsK4Fr1nFg5m4Y2ZtU8vfMOmlNsxMQ2ImbDNH5hszagtOXo1%2F8mjNF9XsNKBYzrvO75Pwi8G9FWlyElt%2FLci06T7K5SDCy08TDBjqkAdQejNbrhASfQ%2BOCdB0rHyd8fYVKfnuGA0b2IG6r2UaNEWLzzeXtXxMvem1u4ol62yisF0ptYFdoqAKiuXOqsnNBI%2FqDp92YVI0dqzIIYv%2FSE%2FNci3J3wTA%2F4LAdJ%2BWSbqWsbowWD3WE9DPSRJMBUlAnV%2BxnNcCl9U934vuRTcJPDXVO8v4H3%2FZdpvj%2FVWo27swzJX5sqSPKEl8YGUOXQLq0pdNh&X-Amz-Signature=95505809364137b693313c1bcbb9e271d824a2b4cab1a67412968bf68f1beda8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6UEJUGL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8VYbiXHmjLwLToSOIloY9JQuR%2FbQBrn%2F3spDkeqX6gIhAMTymMhqD45H7gcDDEuSyf%2FBsP6QKL5L%2FzoadlY1l37WKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2uyTQkoC7VjhWlBQq3AOAViG9F0U%2B8gIaqseOTtbQz7IahPSs6MLs38NwoSVXi9UruQ%2Bw94fdgOnZREsoywg8dtKznxBXbYoQZoAqNFcrdldF15jEVz5ivkaTjvTCMjoTt92WOzZeUlsI3h1fFpWaSBOIDD9Y0%2F1Hqi7PzcZSVpMZGEiD8C2OotlDHCFSW5b%2B5mZd1bBhAXsdyvLZa6F5YtW0kGHcEAy%2FbtC4%2F2iCIsYz65fc3yCcIUIrvo%2BVUpxPTGOI07hGUPy%2FZImXsNaijsqDDk%2B37YXez%2FuBGvQ42Yb176IEp2mSXGjiQFpz40b3GZquRoEwa0xQdZGq1SgyolCJB%2BtczS21oOP9I6l%2B05EECtssa5OIkPGQLj3d%2B2PfxrfSvR6X63EZ%2FP04afdx3UA9fHr4sR54j75SIXtGGxn%2B3oWRyjgNqDIRqoy9GgpmFA7WBY1EyvlyQM9Ll%2BOsWyqgJ3VwfR0CrLqx1ESNxur2zu9Pg4yPqKxw7z5xq79hF672mGWY2vZB%2BU1HqRdjSlRbCxrJI3Yh9XT4bGMFV573Pk5RODEsK4Fr1nFg5m4Y2ZtU8vfMOmlNsxMQ2ImbDNH5hszagtOXo1%2F8mjNF9XsNKBYzrvO75Pwi8G9FWlyElt%2FLci06T7K5SDCy08TDBjqkAdQejNbrhASfQ%2BOCdB0rHyd8fYVKfnuGA0b2IG6r2UaNEWLzzeXtXxMvem1u4ol62yisF0ptYFdoqAKiuXOqsnNBI%2FqDp92YVI0dqzIIYv%2FSE%2FNci3J3wTA%2F4LAdJ%2BWSbqWsbowWD3WE9DPSRJMBUlAnV%2BxnNcCl9U934vuRTcJPDXVO8v4H3%2FZdpvj%2FVWo27swzJX5sqSPKEl8YGUOXQLq0pdNh&X-Amz-Signature=253c4edcf0d8edfcaaafb6c7a46bc6724a94fbf24d91eff32272f9073a68c862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
