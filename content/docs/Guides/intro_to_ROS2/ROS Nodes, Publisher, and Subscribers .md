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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGWAB5W%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCICjMjZDAbUCEVHhoSo5FYH81%2BQ9SqiXKaZmC%2Bo%2FkNaTNAiEAz4BUZfOLYjjWDEjsKMs6u17nZ1PXfhPNH%2FF87uQ2MkYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAkeuLvIO7Z7wl%2FGCrcA6On%2B1dUUx4yz8sJw8KjD2cog9TbYhNFAZFZXA0FKb8ZPTFzPM8lQR%2B4ad5tp5nCKCqPNH9e%2Bao2o54lkNMpHxbUM11LED9kfGp%2FgG%2Bco1kPYSkTIvxiwI4sAE%2B7EIO0tqS%2F1tNWp1phNswEdme%2FoTdhDnhrXIvbzyQ1iP%2FkFUVoW3bARAiYWbpRIgXxhnvYTpdlX8oLFgCXTP1KGVaSnAHPRjNgjwDPNks60iIEs5jV6YVsOX3gxdAgvd2UlxO82h9hxrxkfsckmwsYrG1elKzYqSLoALMq%2Fv2jEB5pm%2B95cev%2Ffg%2BUu9FdQsk75EdLRtz7wIS%2FvJ8%2Bw8FX9cFSlKjH2zlufy3KLqx23bRjkVIunwXgXU53IXsLfmEo0ksQHdAgxMxUuaTRsh8d%2BuCiSnz6rwvN8Dh6GniBjX0bz3C68tk1Bv3mlOwNQn%2B7xr%2F%2BpDF6AylgJAlFkDw2Bc%2FTFUbCO2L316eQYYyRK5w9bDc8lk%2Bjmbd3VjgUSaOXhs3fhg2PfFdGyTgk3tmOQwDBBgl2WU1ikXJTdKiXitww%2BRInHZZHw7Vw9TWOP6DPJ7LiQ7GPxWyjCZnJ28opwrcuMHVkDhGPr7rowIiyhM%2Fpe1%2FD93RBAkFq8mBpGc2yMOCX2b8GOqUBzgKw18ZjgEL7tSmRT9jpnueC57FKQJq5xu0tVSN9Wq5sQ3%2BSlbKDw8FBjWCgEA6OSFgGZ012Fq2WfQGQgO6NPAPxuRs7NNCpmjodPZcjqsunCcFfV1MxYhLliNwtJj6za2OwSRxGW%2BnpsP%2BQSEP9ycn%2BK7FegPLdv3I42zS0nSSmtzyoRbXQJngM5y2T8H6XgiuBK%2BHa98J2Ip3Ti3uYTiqkzU4p&X-Amz-Signature=5fdcd568abfeb89e2bfc3cd171a73f398f1fe8d67ad9705dae05ac23ecb2c706&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGWAB5W%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCICjMjZDAbUCEVHhoSo5FYH81%2BQ9SqiXKaZmC%2Bo%2FkNaTNAiEAz4BUZfOLYjjWDEjsKMs6u17nZ1PXfhPNH%2FF87uQ2MkYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAkeuLvIO7Z7wl%2FGCrcA6On%2B1dUUx4yz8sJw8KjD2cog9TbYhNFAZFZXA0FKb8ZPTFzPM8lQR%2B4ad5tp5nCKCqPNH9e%2Bao2o54lkNMpHxbUM11LED9kfGp%2FgG%2Bco1kPYSkTIvxiwI4sAE%2B7EIO0tqS%2F1tNWp1phNswEdme%2FoTdhDnhrXIvbzyQ1iP%2FkFUVoW3bARAiYWbpRIgXxhnvYTpdlX8oLFgCXTP1KGVaSnAHPRjNgjwDPNks60iIEs5jV6YVsOX3gxdAgvd2UlxO82h9hxrxkfsckmwsYrG1elKzYqSLoALMq%2Fv2jEB5pm%2B95cev%2Ffg%2BUu9FdQsk75EdLRtz7wIS%2FvJ8%2Bw8FX9cFSlKjH2zlufy3KLqx23bRjkVIunwXgXU53IXsLfmEo0ksQHdAgxMxUuaTRsh8d%2BuCiSnz6rwvN8Dh6GniBjX0bz3C68tk1Bv3mlOwNQn%2B7xr%2F%2BpDF6AylgJAlFkDw2Bc%2FTFUbCO2L316eQYYyRK5w9bDc8lk%2Bjmbd3VjgUSaOXhs3fhg2PfFdGyTgk3tmOQwDBBgl2WU1ikXJTdKiXitww%2BRInHZZHw7Vw9TWOP6DPJ7LiQ7GPxWyjCZnJ28opwrcuMHVkDhGPr7rowIiyhM%2Fpe1%2FD93RBAkFq8mBpGc2yMOCX2b8GOqUBzgKw18ZjgEL7tSmRT9jpnueC57FKQJq5xu0tVSN9Wq5sQ3%2BSlbKDw8FBjWCgEA6OSFgGZ012Fq2WfQGQgO6NPAPxuRs7NNCpmjodPZcjqsunCcFfV1MxYhLliNwtJj6za2OwSRxGW%2BnpsP%2BQSEP9ycn%2BK7FegPLdv3I42zS0nSSmtzyoRbXQJngM5y2T8H6XgiuBK%2BHa98J2Ip3Ti3uYTiqkzU4p&X-Amz-Signature=a5e1166ef85e87667001b626e8e6e1bcffa31b7af4b6f3b726448a50b88e8e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGWAB5W%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCICjMjZDAbUCEVHhoSo5FYH81%2BQ9SqiXKaZmC%2Bo%2FkNaTNAiEAz4BUZfOLYjjWDEjsKMs6u17nZ1PXfhPNH%2FF87uQ2MkYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAkeuLvIO7Z7wl%2FGCrcA6On%2B1dUUx4yz8sJw8KjD2cog9TbYhNFAZFZXA0FKb8ZPTFzPM8lQR%2B4ad5tp5nCKCqPNH9e%2Bao2o54lkNMpHxbUM11LED9kfGp%2FgG%2Bco1kPYSkTIvxiwI4sAE%2B7EIO0tqS%2F1tNWp1phNswEdme%2FoTdhDnhrXIvbzyQ1iP%2FkFUVoW3bARAiYWbpRIgXxhnvYTpdlX8oLFgCXTP1KGVaSnAHPRjNgjwDPNks60iIEs5jV6YVsOX3gxdAgvd2UlxO82h9hxrxkfsckmwsYrG1elKzYqSLoALMq%2Fv2jEB5pm%2B95cev%2Ffg%2BUu9FdQsk75EdLRtz7wIS%2FvJ8%2Bw8FX9cFSlKjH2zlufy3KLqx23bRjkVIunwXgXU53IXsLfmEo0ksQHdAgxMxUuaTRsh8d%2BuCiSnz6rwvN8Dh6GniBjX0bz3C68tk1Bv3mlOwNQn%2B7xr%2F%2BpDF6AylgJAlFkDw2Bc%2FTFUbCO2L316eQYYyRK5w9bDc8lk%2Bjmbd3VjgUSaOXhs3fhg2PfFdGyTgk3tmOQwDBBgl2WU1ikXJTdKiXitww%2BRInHZZHw7Vw9TWOP6DPJ7LiQ7GPxWyjCZnJ28opwrcuMHVkDhGPr7rowIiyhM%2Fpe1%2FD93RBAkFq8mBpGc2yMOCX2b8GOqUBzgKw18ZjgEL7tSmRT9jpnueC57FKQJq5xu0tVSN9Wq5sQ3%2BSlbKDw8FBjWCgEA6OSFgGZ012Fq2WfQGQgO6NPAPxuRs7NNCpmjodPZcjqsunCcFfV1MxYhLliNwtJj6za2OwSRxGW%2BnpsP%2BQSEP9ycn%2BK7FegPLdv3I42zS0nSSmtzyoRbXQJngM5y2T8H6XgiuBK%2BHa98J2Ip3Ti3uYTiqkzU4p&X-Amz-Signature=8d4e0798e96f02e2455b8d81204c395132a2d0a73f4370322b0f3b7807e3127a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGWAB5W%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCICjMjZDAbUCEVHhoSo5FYH81%2BQ9SqiXKaZmC%2Bo%2FkNaTNAiEAz4BUZfOLYjjWDEjsKMs6u17nZ1PXfhPNH%2FF87uQ2MkYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAkeuLvIO7Z7wl%2FGCrcA6On%2B1dUUx4yz8sJw8KjD2cog9TbYhNFAZFZXA0FKb8ZPTFzPM8lQR%2B4ad5tp5nCKCqPNH9e%2Bao2o54lkNMpHxbUM11LED9kfGp%2FgG%2Bco1kPYSkTIvxiwI4sAE%2B7EIO0tqS%2F1tNWp1phNswEdme%2FoTdhDnhrXIvbzyQ1iP%2FkFUVoW3bARAiYWbpRIgXxhnvYTpdlX8oLFgCXTP1KGVaSnAHPRjNgjwDPNks60iIEs5jV6YVsOX3gxdAgvd2UlxO82h9hxrxkfsckmwsYrG1elKzYqSLoALMq%2Fv2jEB5pm%2B95cev%2Ffg%2BUu9FdQsk75EdLRtz7wIS%2FvJ8%2Bw8FX9cFSlKjH2zlufy3KLqx23bRjkVIunwXgXU53IXsLfmEo0ksQHdAgxMxUuaTRsh8d%2BuCiSnz6rwvN8Dh6GniBjX0bz3C68tk1Bv3mlOwNQn%2B7xr%2F%2BpDF6AylgJAlFkDw2Bc%2FTFUbCO2L316eQYYyRK5w9bDc8lk%2Bjmbd3VjgUSaOXhs3fhg2PfFdGyTgk3tmOQwDBBgl2WU1ikXJTdKiXitww%2BRInHZZHw7Vw9TWOP6DPJ7LiQ7GPxWyjCZnJ28opwrcuMHVkDhGPr7rowIiyhM%2Fpe1%2FD93RBAkFq8mBpGc2yMOCX2b8GOqUBzgKw18ZjgEL7tSmRT9jpnueC57FKQJq5xu0tVSN9Wq5sQ3%2BSlbKDw8FBjWCgEA6OSFgGZ012Fq2WfQGQgO6NPAPxuRs7NNCpmjodPZcjqsunCcFfV1MxYhLliNwtJj6za2OwSRxGW%2BnpsP%2BQSEP9ycn%2BK7FegPLdv3I42zS0nSSmtzyoRbXQJngM5y2T8H6XgiuBK%2BHa98J2Ip3Ti3uYTiqkzU4p&X-Amz-Signature=862c067822d8514ee06699c0a4ea5c8ff82aea661f77f9f0985da2dbbcc25c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGWAB5W%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCICjMjZDAbUCEVHhoSo5FYH81%2BQ9SqiXKaZmC%2Bo%2FkNaTNAiEAz4BUZfOLYjjWDEjsKMs6u17nZ1PXfhPNH%2FF87uQ2MkYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAkeuLvIO7Z7wl%2FGCrcA6On%2B1dUUx4yz8sJw8KjD2cog9TbYhNFAZFZXA0FKb8ZPTFzPM8lQR%2B4ad5tp5nCKCqPNH9e%2Bao2o54lkNMpHxbUM11LED9kfGp%2FgG%2Bco1kPYSkTIvxiwI4sAE%2B7EIO0tqS%2F1tNWp1phNswEdme%2FoTdhDnhrXIvbzyQ1iP%2FkFUVoW3bARAiYWbpRIgXxhnvYTpdlX8oLFgCXTP1KGVaSnAHPRjNgjwDPNks60iIEs5jV6YVsOX3gxdAgvd2UlxO82h9hxrxkfsckmwsYrG1elKzYqSLoALMq%2Fv2jEB5pm%2B95cev%2Ffg%2BUu9FdQsk75EdLRtz7wIS%2FvJ8%2Bw8FX9cFSlKjH2zlufy3KLqx23bRjkVIunwXgXU53IXsLfmEo0ksQHdAgxMxUuaTRsh8d%2BuCiSnz6rwvN8Dh6GniBjX0bz3C68tk1Bv3mlOwNQn%2B7xr%2F%2BpDF6AylgJAlFkDw2Bc%2FTFUbCO2L316eQYYyRK5w9bDc8lk%2Bjmbd3VjgUSaOXhs3fhg2PfFdGyTgk3tmOQwDBBgl2WU1ikXJTdKiXitww%2BRInHZZHw7Vw9TWOP6DPJ7LiQ7GPxWyjCZnJ28opwrcuMHVkDhGPr7rowIiyhM%2Fpe1%2FD93RBAkFq8mBpGc2yMOCX2b8GOqUBzgKw18ZjgEL7tSmRT9jpnueC57FKQJq5xu0tVSN9Wq5sQ3%2BSlbKDw8FBjWCgEA6OSFgGZ012Fq2WfQGQgO6NPAPxuRs7NNCpmjodPZcjqsunCcFfV1MxYhLliNwtJj6za2OwSRxGW%2BnpsP%2BQSEP9ycn%2BK7FegPLdv3I42zS0nSSmtzyoRbXQJngM5y2T8H6XgiuBK%2BHa98J2Ip3Ti3uYTiqkzU4p&X-Amz-Signature=860c069aede346977c85c57a34e548a4dd235fedd49464aaf498d33cc3dcf98f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGWAB5W%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCICjMjZDAbUCEVHhoSo5FYH81%2BQ9SqiXKaZmC%2Bo%2FkNaTNAiEAz4BUZfOLYjjWDEjsKMs6u17nZ1PXfhPNH%2FF87uQ2MkYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAkeuLvIO7Z7wl%2FGCrcA6On%2B1dUUx4yz8sJw8KjD2cog9TbYhNFAZFZXA0FKb8ZPTFzPM8lQR%2B4ad5tp5nCKCqPNH9e%2Bao2o54lkNMpHxbUM11LED9kfGp%2FgG%2Bco1kPYSkTIvxiwI4sAE%2B7EIO0tqS%2F1tNWp1phNswEdme%2FoTdhDnhrXIvbzyQ1iP%2FkFUVoW3bARAiYWbpRIgXxhnvYTpdlX8oLFgCXTP1KGVaSnAHPRjNgjwDPNks60iIEs5jV6YVsOX3gxdAgvd2UlxO82h9hxrxkfsckmwsYrG1elKzYqSLoALMq%2Fv2jEB5pm%2B95cev%2Ffg%2BUu9FdQsk75EdLRtz7wIS%2FvJ8%2Bw8FX9cFSlKjH2zlufy3KLqx23bRjkVIunwXgXU53IXsLfmEo0ksQHdAgxMxUuaTRsh8d%2BuCiSnz6rwvN8Dh6GniBjX0bz3C68tk1Bv3mlOwNQn%2B7xr%2F%2BpDF6AylgJAlFkDw2Bc%2FTFUbCO2L316eQYYyRK5w9bDc8lk%2Bjmbd3VjgUSaOXhs3fhg2PfFdGyTgk3tmOQwDBBgl2WU1ikXJTdKiXitww%2BRInHZZHw7Vw9TWOP6DPJ7LiQ7GPxWyjCZnJ28opwrcuMHVkDhGPr7rowIiyhM%2Fpe1%2FD93RBAkFq8mBpGc2yMOCX2b8GOqUBzgKw18ZjgEL7tSmRT9jpnueC57FKQJq5xu0tVSN9Wq5sQ3%2BSlbKDw8FBjWCgEA6OSFgGZ012Fq2WfQGQgO6NPAPxuRs7NNCpmjodPZcjqsunCcFfV1MxYhLliNwtJj6za2OwSRxGW%2BnpsP%2BQSEP9ycn%2BK7FegPLdv3I42zS0nSSmtzyoRbXQJngM5y2T8H6XgiuBK%2BHa98J2Ip3Ti3uYTiqkzU4p&X-Amz-Signature=e60ec25f052241179a07656ded341eae7f9679223a07c860c7a1eeadea9b1a83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGWAB5W%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCICjMjZDAbUCEVHhoSo5FYH81%2BQ9SqiXKaZmC%2Bo%2FkNaTNAiEAz4BUZfOLYjjWDEjsKMs6u17nZ1PXfhPNH%2FF87uQ2MkYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAkeuLvIO7Z7wl%2FGCrcA6On%2B1dUUx4yz8sJw8KjD2cog9TbYhNFAZFZXA0FKb8ZPTFzPM8lQR%2B4ad5tp5nCKCqPNH9e%2Bao2o54lkNMpHxbUM11LED9kfGp%2FgG%2Bco1kPYSkTIvxiwI4sAE%2B7EIO0tqS%2F1tNWp1phNswEdme%2FoTdhDnhrXIvbzyQ1iP%2FkFUVoW3bARAiYWbpRIgXxhnvYTpdlX8oLFgCXTP1KGVaSnAHPRjNgjwDPNks60iIEs5jV6YVsOX3gxdAgvd2UlxO82h9hxrxkfsckmwsYrG1elKzYqSLoALMq%2Fv2jEB5pm%2B95cev%2Ffg%2BUu9FdQsk75EdLRtz7wIS%2FvJ8%2Bw8FX9cFSlKjH2zlufy3KLqx23bRjkVIunwXgXU53IXsLfmEo0ksQHdAgxMxUuaTRsh8d%2BuCiSnz6rwvN8Dh6GniBjX0bz3C68tk1Bv3mlOwNQn%2B7xr%2F%2BpDF6AylgJAlFkDw2Bc%2FTFUbCO2L316eQYYyRK5w9bDc8lk%2Bjmbd3VjgUSaOXhs3fhg2PfFdGyTgk3tmOQwDBBgl2WU1ikXJTdKiXitww%2BRInHZZHw7Vw9TWOP6DPJ7LiQ7GPxWyjCZnJ28opwrcuMHVkDhGPr7rowIiyhM%2Fpe1%2FD93RBAkFq8mBpGc2yMOCX2b8GOqUBzgKw18ZjgEL7tSmRT9jpnueC57FKQJq5xu0tVSN9Wq5sQ3%2BSlbKDw8FBjWCgEA6OSFgGZ012Fq2WfQGQgO6NPAPxuRs7NNCpmjodPZcjqsunCcFfV1MxYhLliNwtJj6za2OwSRxGW%2BnpsP%2BQSEP9ycn%2BK7FegPLdv3I42zS0nSSmtzyoRbXQJngM5y2T8H6XgiuBK%2BHa98J2Ip3Ti3uYTiqkzU4p&X-Amz-Signature=b60346a09777bea01a4b8f9f0b759537a67cf4a50206cdad91e77f51f93024f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGWAB5W%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCICjMjZDAbUCEVHhoSo5FYH81%2BQ9SqiXKaZmC%2Bo%2FkNaTNAiEAz4BUZfOLYjjWDEjsKMs6u17nZ1PXfhPNH%2FF87uQ2MkYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAkeuLvIO7Z7wl%2FGCrcA6On%2B1dUUx4yz8sJw8KjD2cog9TbYhNFAZFZXA0FKb8ZPTFzPM8lQR%2B4ad5tp5nCKCqPNH9e%2Bao2o54lkNMpHxbUM11LED9kfGp%2FgG%2Bco1kPYSkTIvxiwI4sAE%2B7EIO0tqS%2F1tNWp1phNswEdme%2FoTdhDnhrXIvbzyQ1iP%2FkFUVoW3bARAiYWbpRIgXxhnvYTpdlX8oLFgCXTP1KGVaSnAHPRjNgjwDPNks60iIEs5jV6YVsOX3gxdAgvd2UlxO82h9hxrxkfsckmwsYrG1elKzYqSLoALMq%2Fv2jEB5pm%2B95cev%2Ffg%2BUu9FdQsk75EdLRtz7wIS%2FvJ8%2Bw8FX9cFSlKjH2zlufy3KLqx23bRjkVIunwXgXU53IXsLfmEo0ksQHdAgxMxUuaTRsh8d%2BuCiSnz6rwvN8Dh6GniBjX0bz3C68tk1Bv3mlOwNQn%2B7xr%2F%2BpDF6AylgJAlFkDw2Bc%2FTFUbCO2L316eQYYyRK5w9bDc8lk%2Bjmbd3VjgUSaOXhs3fhg2PfFdGyTgk3tmOQwDBBgl2WU1ikXJTdKiXitww%2BRInHZZHw7Vw9TWOP6DPJ7LiQ7GPxWyjCZnJ28opwrcuMHVkDhGPr7rowIiyhM%2Fpe1%2FD93RBAkFq8mBpGc2yMOCX2b8GOqUBzgKw18ZjgEL7tSmRT9jpnueC57FKQJq5xu0tVSN9Wq5sQ3%2BSlbKDw8FBjWCgEA6OSFgGZ012Fq2WfQGQgO6NPAPxuRs7NNCpmjodPZcjqsunCcFfV1MxYhLliNwtJj6za2OwSRxGW%2BnpsP%2BQSEP9ycn%2BK7FegPLdv3I42zS0nSSmtzyoRbXQJngM5y2T8H6XgiuBK%2BHa98J2Ip3Ti3uYTiqkzU4p&X-Amz-Signature=42d45653081f6ec5c49ad94218df7bae5bba4132c21a2cef1f6d59d434b74124&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
