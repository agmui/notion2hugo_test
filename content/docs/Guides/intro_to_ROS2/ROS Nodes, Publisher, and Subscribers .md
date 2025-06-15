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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM6JCW6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFEyRdgcGCG%2BI1aCpKKtKuocmZr5sVQvxmdtXCUZ%2FlMYAiA1fIpfzhmgBSgglKX3vOW%2BZra%2F%2FqHXAfSQEoC%2BZpX8Air%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMyNWwLaeSmtbgvJ86KtwDqB2IpZXFp%2FevPV86BPdyZzS%2ByF2fKNrSsP%2FfHnuF8LbSAvi2NKQu5cjLqb8QQudwONwGmaj87sgHFUFyvikPS8W84k920qcOulHkZbUlfr0LYisUltrlC7CI9QsW%2Fv0aFiqei4jiXv3Uz89tDF5staZqdkVWwtR74mtui3AFLqqIZfNLRyllliV6WsennaLkxa1PoEXfOCkAkIjsu2I%2FQrrOvdHhvtIcDQM17vuprxpVG8rOju70W5fISvtLLfu0HB1q42ILPDkd9Nv5ejrMwb9SM0%2BI0RgQRBBCaRqoDUB13sWTMltgrIBPz2q3OBAZgLs3oU0gt0lm3OyjfAqzhbKIES7C6w45ItzMDPY0Af2xbTVkBLvfRWLa4vna%2B8UbDlbg%2FZXtWJZS8mpuccr31TEarvVgiRmODObXR4wbt%2B9MTViIE7tteuYtLgkgyw%2F9GE4n0fCVd%2FBhcbpArmp3raGcKgz%2Bd9zkvtaEoRKJhWIrbJlzDB9cudOh%2BGBLC39MdBhS4Gp8c2Si8RKUNGmenb%2BPWcx50cE4oKixhMRCVjDbreacfmU%2FmAblkdWIMLcP%2FYmJhBcTl%2FiYxnrh4XciImUy%2BuvZvc%2B9q74bDKiry2h9YhF0ALYNwUP1X9wwyKK4wgY6pgFhpF01iM2BpRhGktYiCcTwQ5moHnHeDhQxny%2F3%2B4fktuo6wiRBxs9c4d4CniQ1Ypj9OrOnl7R8eu4yDx7lIZCgaBb4184RCYH9LW0kEjRNkiGHsXp%2BLLvYicj3hU1yMnoCkZelo%2B9ZiavaK5pfLueRpngmFlLDRV06AqS56LcBy6qJrK5MisU4rF%2BaD8lTgVoK%2FVaS4rsDxnFInu%2FgLsYcRmktCirp&X-Amz-Signature=f9a19f1c74832caf30567a54a355c369dbe61b8f3d41b3a819713b807cc89783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM6JCW6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFEyRdgcGCG%2BI1aCpKKtKuocmZr5sVQvxmdtXCUZ%2FlMYAiA1fIpfzhmgBSgglKX3vOW%2BZra%2F%2FqHXAfSQEoC%2BZpX8Air%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMyNWwLaeSmtbgvJ86KtwDqB2IpZXFp%2FevPV86BPdyZzS%2ByF2fKNrSsP%2FfHnuF8LbSAvi2NKQu5cjLqb8QQudwONwGmaj87sgHFUFyvikPS8W84k920qcOulHkZbUlfr0LYisUltrlC7CI9QsW%2Fv0aFiqei4jiXv3Uz89tDF5staZqdkVWwtR74mtui3AFLqqIZfNLRyllliV6WsennaLkxa1PoEXfOCkAkIjsu2I%2FQrrOvdHhvtIcDQM17vuprxpVG8rOju70W5fISvtLLfu0HB1q42ILPDkd9Nv5ejrMwb9SM0%2BI0RgQRBBCaRqoDUB13sWTMltgrIBPz2q3OBAZgLs3oU0gt0lm3OyjfAqzhbKIES7C6w45ItzMDPY0Af2xbTVkBLvfRWLa4vna%2B8UbDlbg%2FZXtWJZS8mpuccr31TEarvVgiRmODObXR4wbt%2B9MTViIE7tteuYtLgkgyw%2F9GE4n0fCVd%2FBhcbpArmp3raGcKgz%2Bd9zkvtaEoRKJhWIrbJlzDB9cudOh%2BGBLC39MdBhS4Gp8c2Si8RKUNGmenb%2BPWcx50cE4oKixhMRCVjDbreacfmU%2FmAblkdWIMLcP%2FYmJhBcTl%2FiYxnrh4XciImUy%2BuvZvc%2B9q74bDKiry2h9YhF0ALYNwUP1X9wwyKK4wgY6pgFhpF01iM2BpRhGktYiCcTwQ5moHnHeDhQxny%2F3%2B4fktuo6wiRBxs9c4d4CniQ1Ypj9OrOnl7R8eu4yDx7lIZCgaBb4184RCYH9LW0kEjRNkiGHsXp%2BLLvYicj3hU1yMnoCkZelo%2B9ZiavaK5pfLueRpngmFlLDRV06AqS56LcBy6qJrK5MisU4rF%2BaD8lTgVoK%2FVaS4rsDxnFInu%2FgLsYcRmktCirp&X-Amz-Signature=63f5a94d13ba736a139237f2244d836fc2832cb62c78742f1e0c0ef16f859c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM6JCW6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFEyRdgcGCG%2BI1aCpKKtKuocmZr5sVQvxmdtXCUZ%2FlMYAiA1fIpfzhmgBSgglKX3vOW%2BZra%2F%2FqHXAfSQEoC%2BZpX8Air%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMyNWwLaeSmtbgvJ86KtwDqB2IpZXFp%2FevPV86BPdyZzS%2ByF2fKNrSsP%2FfHnuF8LbSAvi2NKQu5cjLqb8QQudwONwGmaj87sgHFUFyvikPS8W84k920qcOulHkZbUlfr0LYisUltrlC7CI9QsW%2Fv0aFiqei4jiXv3Uz89tDF5staZqdkVWwtR74mtui3AFLqqIZfNLRyllliV6WsennaLkxa1PoEXfOCkAkIjsu2I%2FQrrOvdHhvtIcDQM17vuprxpVG8rOju70W5fISvtLLfu0HB1q42ILPDkd9Nv5ejrMwb9SM0%2BI0RgQRBBCaRqoDUB13sWTMltgrIBPz2q3OBAZgLs3oU0gt0lm3OyjfAqzhbKIES7C6w45ItzMDPY0Af2xbTVkBLvfRWLa4vna%2B8UbDlbg%2FZXtWJZS8mpuccr31TEarvVgiRmODObXR4wbt%2B9MTViIE7tteuYtLgkgyw%2F9GE4n0fCVd%2FBhcbpArmp3raGcKgz%2Bd9zkvtaEoRKJhWIrbJlzDB9cudOh%2BGBLC39MdBhS4Gp8c2Si8RKUNGmenb%2BPWcx50cE4oKixhMRCVjDbreacfmU%2FmAblkdWIMLcP%2FYmJhBcTl%2FiYxnrh4XciImUy%2BuvZvc%2B9q74bDKiry2h9YhF0ALYNwUP1X9wwyKK4wgY6pgFhpF01iM2BpRhGktYiCcTwQ5moHnHeDhQxny%2F3%2B4fktuo6wiRBxs9c4d4CniQ1Ypj9OrOnl7R8eu4yDx7lIZCgaBb4184RCYH9LW0kEjRNkiGHsXp%2BLLvYicj3hU1yMnoCkZelo%2B9ZiavaK5pfLueRpngmFlLDRV06AqS56LcBy6qJrK5MisU4rF%2BaD8lTgVoK%2FVaS4rsDxnFInu%2FgLsYcRmktCirp&X-Amz-Signature=daa934aee7151e8ff93f68c6df1aab70d294bce61284be97b42ee91cbea8d47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM6JCW6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFEyRdgcGCG%2BI1aCpKKtKuocmZr5sVQvxmdtXCUZ%2FlMYAiA1fIpfzhmgBSgglKX3vOW%2BZra%2F%2FqHXAfSQEoC%2BZpX8Air%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMyNWwLaeSmtbgvJ86KtwDqB2IpZXFp%2FevPV86BPdyZzS%2ByF2fKNrSsP%2FfHnuF8LbSAvi2NKQu5cjLqb8QQudwONwGmaj87sgHFUFyvikPS8W84k920qcOulHkZbUlfr0LYisUltrlC7CI9QsW%2Fv0aFiqei4jiXv3Uz89tDF5staZqdkVWwtR74mtui3AFLqqIZfNLRyllliV6WsennaLkxa1PoEXfOCkAkIjsu2I%2FQrrOvdHhvtIcDQM17vuprxpVG8rOju70W5fISvtLLfu0HB1q42ILPDkd9Nv5ejrMwb9SM0%2BI0RgQRBBCaRqoDUB13sWTMltgrIBPz2q3OBAZgLs3oU0gt0lm3OyjfAqzhbKIES7C6w45ItzMDPY0Af2xbTVkBLvfRWLa4vna%2B8UbDlbg%2FZXtWJZS8mpuccr31TEarvVgiRmODObXR4wbt%2B9MTViIE7tteuYtLgkgyw%2F9GE4n0fCVd%2FBhcbpArmp3raGcKgz%2Bd9zkvtaEoRKJhWIrbJlzDB9cudOh%2BGBLC39MdBhS4Gp8c2Si8RKUNGmenb%2BPWcx50cE4oKixhMRCVjDbreacfmU%2FmAblkdWIMLcP%2FYmJhBcTl%2FiYxnrh4XciImUy%2BuvZvc%2B9q74bDKiry2h9YhF0ALYNwUP1X9wwyKK4wgY6pgFhpF01iM2BpRhGktYiCcTwQ5moHnHeDhQxny%2F3%2B4fktuo6wiRBxs9c4d4CniQ1Ypj9OrOnl7R8eu4yDx7lIZCgaBb4184RCYH9LW0kEjRNkiGHsXp%2BLLvYicj3hU1yMnoCkZelo%2B9ZiavaK5pfLueRpngmFlLDRV06AqS56LcBy6qJrK5MisU4rF%2BaD8lTgVoK%2FVaS4rsDxnFInu%2FgLsYcRmktCirp&X-Amz-Signature=f5ecb720ec6fb5a13ff3a9e75eb27a982be171f8a91216ef449e867a38b437cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM6JCW6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFEyRdgcGCG%2BI1aCpKKtKuocmZr5sVQvxmdtXCUZ%2FlMYAiA1fIpfzhmgBSgglKX3vOW%2BZra%2F%2FqHXAfSQEoC%2BZpX8Air%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMyNWwLaeSmtbgvJ86KtwDqB2IpZXFp%2FevPV86BPdyZzS%2ByF2fKNrSsP%2FfHnuF8LbSAvi2NKQu5cjLqb8QQudwONwGmaj87sgHFUFyvikPS8W84k920qcOulHkZbUlfr0LYisUltrlC7CI9QsW%2Fv0aFiqei4jiXv3Uz89tDF5staZqdkVWwtR74mtui3AFLqqIZfNLRyllliV6WsennaLkxa1PoEXfOCkAkIjsu2I%2FQrrOvdHhvtIcDQM17vuprxpVG8rOju70W5fISvtLLfu0HB1q42ILPDkd9Nv5ejrMwb9SM0%2BI0RgQRBBCaRqoDUB13sWTMltgrIBPz2q3OBAZgLs3oU0gt0lm3OyjfAqzhbKIES7C6w45ItzMDPY0Af2xbTVkBLvfRWLa4vna%2B8UbDlbg%2FZXtWJZS8mpuccr31TEarvVgiRmODObXR4wbt%2B9MTViIE7tteuYtLgkgyw%2F9GE4n0fCVd%2FBhcbpArmp3raGcKgz%2Bd9zkvtaEoRKJhWIrbJlzDB9cudOh%2BGBLC39MdBhS4Gp8c2Si8RKUNGmenb%2BPWcx50cE4oKixhMRCVjDbreacfmU%2FmAblkdWIMLcP%2FYmJhBcTl%2FiYxnrh4XciImUy%2BuvZvc%2B9q74bDKiry2h9YhF0ALYNwUP1X9wwyKK4wgY6pgFhpF01iM2BpRhGktYiCcTwQ5moHnHeDhQxny%2F3%2B4fktuo6wiRBxs9c4d4CniQ1Ypj9OrOnl7R8eu4yDx7lIZCgaBb4184RCYH9LW0kEjRNkiGHsXp%2BLLvYicj3hU1yMnoCkZelo%2B9ZiavaK5pfLueRpngmFlLDRV06AqS56LcBy6qJrK5MisU4rF%2BaD8lTgVoK%2FVaS4rsDxnFInu%2FgLsYcRmktCirp&X-Amz-Signature=5f9edb9368fa2422253dfa09660dddbc54324a8120d20e3fc2490b04e921c549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM6JCW6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFEyRdgcGCG%2BI1aCpKKtKuocmZr5sVQvxmdtXCUZ%2FlMYAiA1fIpfzhmgBSgglKX3vOW%2BZra%2F%2FqHXAfSQEoC%2BZpX8Air%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMyNWwLaeSmtbgvJ86KtwDqB2IpZXFp%2FevPV86BPdyZzS%2ByF2fKNrSsP%2FfHnuF8LbSAvi2NKQu5cjLqb8QQudwONwGmaj87sgHFUFyvikPS8W84k920qcOulHkZbUlfr0LYisUltrlC7CI9QsW%2Fv0aFiqei4jiXv3Uz89tDF5staZqdkVWwtR74mtui3AFLqqIZfNLRyllliV6WsennaLkxa1PoEXfOCkAkIjsu2I%2FQrrOvdHhvtIcDQM17vuprxpVG8rOju70W5fISvtLLfu0HB1q42ILPDkd9Nv5ejrMwb9SM0%2BI0RgQRBBCaRqoDUB13sWTMltgrIBPz2q3OBAZgLs3oU0gt0lm3OyjfAqzhbKIES7C6w45ItzMDPY0Af2xbTVkBLvfRWLa4vna%2B8UbDlbg%2FZXtWJZS8mpuccr31TEarvVgiRmODObXR4wbt%2B9MTViIE7tteuYtLgkgyw%2F9GE4n0fCVd%2FBhcbpArmp3raGcKgz%2Bd9zkvtaEoRKJhWIrbJlzDB9cudOh%2BGBLC39MdBhS4Gp8c2Si8RKUNGmenb%2BPWcx50cE4oKixhMRCVjDbreacfmU%2FmAblkdWIMLcP%2FYmJhBcTl%2FiYxnrh4XciImUy%2BuvZvc%2B9q74bDKiry2h9YhF0ALYNwUP1X9wwyKK4wgY6pgFhpF01iM2BpRhGktYiCcTwQ5moHnHeDhQxny%2F3%2B4fktuo6wiRBxs9c4d4CniQ1Ypj9OrOnl7R8eu4yDx7lIZCgaBb4184RCYH9LW0kEjRNkiGHsXp%2BLLvYicj3hU1yMnoCkZelo%2B9ZiavaK5pfLueRpngmFlLDRV06AqS56LcBy6qJrK5MisU4rF%2BaD8lTgVoK%2FVaS4rsDxnFInu%2FgLsYcRmktCirp&X-Amz-Signature=b192bdc08a1d6128fda7097ada9103031eb7b43baadcde3b687bc95bf79b0212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM6JCW6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFEyRdgcGCG%2BI1aCpKKtKuocmZr5sVQvxmdtXCUZ%2FlMYAiA1fIpfzhmgBSgglKX3vOW%2BZra%2F%2FqHXAfSQEoC%2BZpX8Air%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMyNWwLaeSmtbgvJ86KtwDqB2IpZXFp%2FevPV86BPdyZzS%2ByF2fKNrSsP%2FfHnuF8LbSAvi2NKQu5cjLqb8QQudwONwGmaj87sgHFUFyvikPS8W84k920qcOulHkZbUlfr0LYisUltrlC7CI9QsW%2Fv0aFiqei4jiXv3Uz89tDF5staZqdkVWwtR74mtui3AFLqqIZfNLRyllliV6WsennaLkxa1PoEXfOCkAkIjsu2I%2FQrrOvdHhvtIcDQM17vuprxpVG8rOju70W5fISvtLLfu0HB1q42ILPDkd9Nv5ejrMwb9SM0%2BI0RgQRBBCaRqoDUB13sWTMltgrIBPz2q3OBAZgLs3oU0gt0lm3OyjfAqzhbKIES7C6w45ItzMDPY0Af2xbTVkBLvfRWLa4vna%2B8UbDlbg%2FZXtWJZS8mpuccr31TEarvVgiRmODObXR4wbt%2B9MTViIE7tteuYtLgkgyw%2F9GE4n0fCVd%2FBhcbpArmp3raGcKgz%2Bd9zkvtaEoRKJhWIrbJlzDB9cudOh%2BGBLC39MdBhS4Gp8c2Si8RKUNGmenb%2BPWcx50cE4oKixhMRCVjDbreacfmU%2FmAblkdWIMLcP%2FYmJhBcTl%2FiYxnrh4XciImUy%2BuvZvc%2B9q74bDKiry2h9YhF0ALYNwUP1X9wwyKK4wgY6pgFhpF01iM2BpRhGktYiCcTwQ5moHnHeDhQxny%2F3%2B4fktuo6wiRBxs9c4d4CniQ1Ypj9OrOnl7R8eu4yDx7lIZCgaBb4184RCYH9LW0kEjRNkiGHsXp%2BLLvYicj3hU1yMnoCkZelo%2B9ZiavaK5pfLueRpngmFlLDRV06AqS56LcBy6qJrK5MisU4rF%2BaD8lTgVoK%2FVaS4rsDxnFInu%2FgLsYcRmktCirp&X-Amz-Signature=a846606356450ebbec195df2455b9ddeb7573baf9c20bead086e0e95da85b975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NM6JCW6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFEyRdgcGCG%2BI1aCpKKtKuocmZr5sVQvxmdtXCUZ%2FlMYAiA1fIpfzhmgBSgglKX3vOW%2BZra%2F%2FqHXAfSQEoC%2BZpX8Air%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMyNWwLaeSmtbgvJ86KtwDqB2IpZXFp%2FevPV86BPdyZzS%2ByF2fKNrSsP%2FfHnuF8LbSAvi2NKQu5cjLqb8QQudwONwGmaj87sgHFUFyvikPS8W84k920qcOulHkZbUlfr0LYisUltrlC7CI9QsW%2Fv0aFiqei4jiXv3Uz89tDF5staZqdkVWwtR74mtui3AFLqqIZfNLRyllliV6WsennaLkxa1PoEXfOCkAkIjsu2I%2FQrrOvdHhvtIcDQM17vuprxpVG8rOju70W5fISvtLLfu0HB1q42ILPDkd9Nv5ejrMwb9SM0%2BI0RgQRBBCaRqoDUB13sWTMltgrIBPz2q3OBAZgLs3oU0gt0lm3OyjfAqzhbKIES7C6w45ItzMDPY0Af2xbTVkBLvfRWLa4vna%2B8UbDlbg%2FZXtWJZS8mpuccr31TEarvVgiRmODObXR4wbt%2B9MTViIE7tteuYtLgkgyw%2F9GE4n0fCVd%2FBhcbpArmp3raGcKgz%2Bd9zkvtaEoRKJhWIrbJlzDB9cudOh%2BGBLC39MdBhS4Gp8c2Si8RKUNGmenb%2BPWcx50cE4oKixhMRCVjDbreacfmU%2FmAblkdWIMLcP%2FYmJhBcTl%2FiYxnrh4XciImUy%2BuvZvc%2B9q74bDKiry2h9YhF0ALYNwUP1X9wwyKK4wgY6pgFhpF01iM2BpRhGktYiCcTwQ5moHnHeDhQxny%2F3%2B4fktuo6wiRBxs9c4d4CniQ1Ypj9OrOnl7R8eu4yDx7lIZCgaBb4184RCYH9LW0kEjRNkiGHsXp%2BLLvYicj3hU1yMnoCkZelo%2B9ZiavaK5pfLueRpngmFlLDRV06AqS56LcBy6qJrK5MisU4rF%2BaD8lTgVoK%2FVaS4rsDxnFInu%2FgLsYcRmktCirp&X-Amz-Signature=02fcf99ce76c6fb43c6c049f5166bc9bdf006bf2eff1b7fa6b9eb72eb6631f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
