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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKWVYMPS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH8fSJrI95JUJ3UR%2FBiM%2Fp7YRuhts4%2F1Fd8KFnej2Ke%2BAiBFRxg035xHMyDCyYiqZb9FcLwKjLPDVwufyTHUZY%2FiWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWgAlEw7uJ%2BnzHovKtwDhl%2BEwa64ONrXRcOSEVAP8lrreD%2FcCXPwHsalqA7ikhIoNjXZwzILFWd4A7SJynYB7ovEi3GWVVmRD4C6GrMxfb9shyzQk8OHc5jYZo%2B98ku8oXN4MrwIwaeMMyq6wwZbLcvyqrXbjjS9fIZppGIT8QlTEBNEpGmcdJ%2BUhz%2FwDnPLjJeYUlFlReDvMS1CSZGoNIZEW8YGIXbdkbJn2AlC4EUZofo%2BTexYo7B08jk8PUxiVT%2Fuoaga7Tlg1MdGdoDzpQ5kFBlFyPQkCz%2FJiBC3%2BTiNrUlhrh6L3prXHceFsG46wl8bEQRV%2F%2FK2%2FxYT3FQDUeBcdYglzrhrIJhQSsi8kjSeAKXJ5dDNP3DuwNY16ge7JT4n2r%2FUtbL5Ku19fRz95Y7i6zWXowhWGfg%2B2W4qV207GaKMHlML1zF4FIrH%2BcZPcEiiMoEY5SEc1wZD8AnMM5tXqi69k4BIFUysC1Q20dHOucyGD74WjQaEruw9tibNBxYhrRtpRuK5CriQ0BOdFJUsvHIVIhCf9F%2F8bRNwTJVxnRfb%2B2vLG08wYmzzcS9xUNYxoIP94XsayRowOoGHc%2BsJqCBS9LEGW2bxhaguej6J8gMnwa2difJdXiIG4H0VGT7rYjVUds9iOuwwib3uvwY6pgEqio0sR%2B1W5o74DglSnrzURvWPcWiRRdfnAjlTgwfNyb330xxURuCInId2uKsuUq1qg1U432xm28Ps%2F9gQaa62YE%2FJ1eyQ%2Fv4qVfVhHsOL9zJ%2FPqm8uPYhe%2FGMsZsayM0FxrLIaF2ZwncqgTyo%2Fy9t7ssowoQQBnSdpN%2F0cYerAiIh63Q33qJdVDPDwjG6625tgjH8QIXwcmEGAFhKNDyu5u4CD2DZ&X-Amz-Signature=5906217010d17c4e6b3ad75d8655e77edbebcfd42f11ff07bded2bb4bb08a777&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKWVYMPS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH8fSJrI95JUJ3UR%2FBiM%2Fp7YRuhts4%2F1Fd8KFnej2Ke%2BAiBFRxg035xHMyDCyYiqZb9FcLwKjLPDVwufyTHUZY%2FiWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWgAlEw7uJ%2BnzHovKtwDhl%2BEwa64ONrXRcOSEVAP8lrreD%2FcCXPwHsalqA7ikhIoNjXZwzILFWd4A7SJynYB7ovEi3GWVVmRD4C6GrMxfb9shyzQk8OHc5jYZo%2B98ku8oXN4MrwIwaeMMyq6wwZbLcvyqrXbjjS9fIZppGIT8QlTEBNEpGmcdJ%2BUhz%2FwDnPLjJeYUlFlReDvMS1CSZGoNIZEW8YGIXbdkbJn2AlC4EUZofo%2BTexYo7B08jk8PUxiVT%2Fuoaga7Tlg1MdGdoDzpQ5kFBlFyPQkCz%2FJiBC3%2BTiNrUlhrh6L3prXHceFsG46wl8bEQRV%2F%2FK2%2FxYT3FQDUeBcdYglzrhrIJhQSsi8kjSeAKXJ5dDNP3DuwNY16ge7JT4n2r%2FUtbL5Ku19fRz95Y7i6zWXowhWGfg%2B2W4qV207GaKMHlML1zF4FIrH%2BcZPcEiiMoEY5SEc1wZD8AnMM5tXqi69k4BIFUysC1Q20dHOucyGD74WjQaEruw9tibNBxYhrRtpRuK5CriQ0BOdFJUsvHIVIhCf9F%2F8bRNwTJVxnRfb%2B2vLG08wYmzzcS9xUNYxoIP94XsayRowOoGHc%2BsJqCBS9LEGW2bxhaguej6J8gMnwa2difJdXiIG4H0VGT7rYjVUds9iOuwwib3uvwY6pgEqio0sR%2B1W5o74DglSnrzURvWPcWiRRdfnAjlTgwfNyb330xxURuCInId2uKsuUq1qg1U432xm28Ps%2F9gQaa62YE%2FJ1eyQ%2Fv4qVfVhHsOL9zJ%2FPqm8uPYhe%2FGMsZsayM0FxrLIaF2ZwncqgTyo%2Fy9t7ssowoQQBnSdpN%2F0cYerAiIh63Q33qJdVDPDwjG6625tgjH8QIXwcmEGAFhKNDyu5u4CD2DZ&X-Amz-Signature=282f375f133673ba955ae9b5189c8b93979464b2f7c8429efcb1c20449337869&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKWVYMPS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH8fSJrI95JUJ3UR%2FBiM%2Fp7YRuhts4%2F1Fd8KFnej2Ke%2BAiBFRxg035xHMyDCyYiqZb9FcLwKjLPDVwufyTHUZY%2FiWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWgAlEw7uJ%2BnzHovKtwDhl%2BEwa64ONrXRcOSEVAP8lrreD%2FcCXPwHsalqA7ikhIoNjXZwzILFWd4A7SJynYB7ovEi3GWVVmRD4C6GrMxfb9shyzQk8OHc5jYZo%2B98ku8oXN4MrwIwaeMMyq6wwZbLcvyqrXbjjS9fIZppGIT8QlTEBNEpGmcdJ%2BUhz%2FwDnPLjJeYUlFlReDvMS1CSZGoNIZEW8YGIXbdkbJn2AlC4EUZofo%2BTexYo7B08jk8PUxiVT%2Fuoaga7Tlg1MdGdoDzpQ5kFBlFyPQkCz%2FJiBC3%2BTiNrUlhrh6L3prXHceFsG46wl8bEQRV%2F%2FK2%2FxYT3FQDUeBcdYglzrhrIJhQSsi8kjSeAKXJ5dDNP3DuwNY16ge7JT4n2r%2FUtbL5Ku19fRz95Y7i6zWXowhWGfg%2B2W4qV207GaKMHlML1zF4FIrH%2BcZPcEiiMoEY5SEc1wZD8AnMM5tXqi69k4BIFUysC1Q20dHOucyGD74WjQaEruw9tibNBxYhrRtpRuK5CriQ0BOdFJUsvHIVIhCf9F%2F8bRNwTJVxnRfb%2B2vLG08wYmzzcS9xUNYxoIP94XsayRowOoGHc%2BsJqCBS9LEGW2bxhaguej6J8gMnwa2difJdXiIG4H0VGT7rYjVUds9iOuwwib3uvwY6pgEqio0sR%2B1W5o74DglSnrzURvWPcWiRRdfnAjlTgwfNyb330xxURuCInId2uKsuUq1qg1U432xm28Ps%2F9gQaa62YE%2FJ1eyQ%2Fv4qVfVhHsOL9zJ%2FPqm8uPYhe%2FGMsZsayM0FxrLIaF2ZwncqgTyo%2Fy9t7ssowoQQBnSdpN%2F0cYerAiIh63Q33qJdVDPDwjG6625tgjH8QIXwcmEGAFhKNDyu5u4CD2DZ&X-Amz-Signature=4f7c2737cb9fbb7d8854e1474c92d560e8cbfdd3b8db8ad910757c55f974cb60&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKWVYMPS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH8fSJrI95JUJ3UR%2FBiM%2Fp7YRuhts4%2F1Fd8KFnej2Ke%2BAiBFRxg035xHMyDCyYiqZb9FcLwKjLPDVwufyTHUZY%2FiWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWgAlEw7uJ%2BnzHovKtwDhl%2BEwa64ONrXRcOSEVAP8lrreD%2FcCXPwHsalqA7ikhIoNjXZwzILFWd4A7SJynYB7ovEi3GWVVmRD4C6GrMxfb9shyzQk8OHc5jYZo%2B98ku8oXN4MrwIwaeMMyq6wwZbLcvyqrXbjjS9fIZppGIT8QlTEBNEpGmcdJ%2BUhz%2FwDnPLjJeYUlFlReDvMS1CSZGoNIZEW8YGIXbdkbJn2AlC4EUZofo%2BTexYo7B08jk8PUxiVT%2Fuoaga7Tlg1MdGdoDzpQ5kFBlFyPQkCz%2FJiBC3%2BTiNrUlhrh6L3prXHceFsG46wl8bEQRV%2F%2FK2%2FxYT3FQDUeBcdYglzrhrIJhQSsi8kjSeAKXJ5dDNP3DuwNY16ge7JT4n2r%2FUtbL5Ku19fRz95Y7i6zWXowhWGfg%2B2W4qV207GaKMHlML1zF4FIrH%2BcZPcEiiMoEY5SEc1wZD8AnMM5tXqi69k4BIFUysC1Q20dHOucyGD74WjQaEruw9tibNBxYhrRtpRuK5CriQ0BOdFJUsvHIVIhCf9F%2F8bRNwTJVxnRfb%2B2vLG08wYmzzcS9xUNYxoIP94XsayRowOoGHc%2BsJqCBS9LEGW2bxhaguej6J8gMnwa2difJdXiIG4H0VGT7rYjVUds9iOuwwib3uvwY6pgEqio0sR%2B1W5o74DglSnrzURvWPcWiRRdfnAjlTgwfNyb330xxURuCInId2uKsuUq1qg1U432xm28Ps%2F9gQaa62YE%2FJ1eyQ%2Fv4qVfVhHsOL9zJ%2FPqm8uPYhe%2FGMsZsayM0FxrLIaF2ZwncqgTyo%2Fy9t7ssowoQQBnSdpN%2F0cYerAiIh63Q33qJdVDPDwjG6625tgjH8QIXwcmEGAFhKNDyu5u4CD2DZ&X-Amz-Signature=9b4d9468c2cef678e5c11d7dd6df57d8733313f18b7037513bacf5f7f63a00a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKWVYMPS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH8fSJrI95JUJ3UR%2FBiM%2Fp7YRuhts4%2F1Fd8KFnej2Ke%2BAiBFRxg035xHMyDCyYiqZb9FcLwKjLPDVwufyTHUZY%2FiWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWgAlEw7uJ%2BnzHovKtwDhl%2BEwa64ONrXRcOSEVAP8lrreD%2FcCXPwHsalqA7ikhIoNjXZwzILFWd4A7SJynYB7ovEi3GWVVmRD4C6GrMxfb9shyzQk8OHc5jYZo%2B98ku8oXN4MrwIwaeMMyq6wwZbLcvyqrXbjjS9fIZppGIT8QlTEBNEpGmcdJ%2BUhz%2FwDnPLjJeYUlFlReDvMS1CSZGoNIZEW8YGIXbdkbJn2AlC4EUZofo%2BTexYo7B08jk8PUxiVT%2Fuoaga7Tlg1MdGdoDzpQ5kFBlFyPQkCz%2FJiBC3%2BTiNrUlhrh6L3prXHceFsG46wl8bEQRV%2F%2FK2%2FxYT3FQDUeBcdYglzrhrIJhQSsi8kjSeAKXJ5dDNP3DuwNY16ge7JT4n2r%2FUtbL5Ku19fRz95Y7i6zWXowhWGfg%2B2W4qV207GaKMHlML1zF4FIrH%2BcZPcEiiMoEY5SEc1wZD8AnMM5tXqi69k4BIFUysC1Q20dHOucyGD74WjQaEruw9tibNBxYhrRtpRuK5CriQ0BOdFJUsvHIVIhCf9F%2F8bRNwTJVxnRfb%2B2vLG08wYmzzcS9xUNYxoIP94XsayRowOoGHc%2BsJqCBS9LEGW2bxhaguej6J8gMnwa2difJdXiIG4H0VGT7rYjVUds9iOuwwib3uvwY6pgEqio0sR%2B1W5o74DglSnrzURvWPcWiRRdfnAjlTgwfNyb330xxURuCInId2uKsuUq1qg1U432xm28Ps%2F9gQaa62YE%2FJ1eyQ%2Fv4qVfVhHsOL9zJ%2FPqm8uPYhe%2FGMsZsayM0FxrLIaF2ZwncqgTyo%2Fy9t7ssowoQQBnSdpN%2F0cYerAiIh63Q33qJdVDPDwjG6625tgjH8QIXwcmEGAFhKNDyu5u4CD2DZ&X-Amz-Signature=4ad42832d37f78c9b67952d3ec5a388e0ad4028e6ec6494479a860cb0fcda458&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKWVYMPS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH8fSJrI95JUJ3UR%2FBiM%2Fp7YRuhts4%2F1Fd8KFnej2Ke%2BAiBFRxg035xHMyDCyYiqZb9FcLwKjLPDVwufyTHUZY%2FiWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWgAlEw7uJ%2BnzHovKtwDhl%2BEwa64ONrXRcOSEVAP8lrreD%2FcCXPwHsalqA7ikhIoNjXZwzILFWd4A7SJynYB7ovEi3GWVVmRD4C6GrMxfb9shyzQk8OHc5jYZo%2B98ku8oXN4MrwIwaeMMyq6wwZbLcvyqrXbjjS9fIZppGIT8QlTEBNEpGmcdJ%2BUhz%2FwDnPLjJeYUlFlReDvMS1CSZGoNIZEW8YGIXbdkbJn2AlC4EUZofo%2BTexYo7B08jk8PUxiVT%2Fuoaga7Tlg1MdGdoDzpQ5kFBlFyPQkCz%2FJiBC3%2BTiNrUlhrh6L3prXHceFsG46wl8bEQRV%2F%2FK2%2FxYT3FQDUeBcdYglzrhrIJhQSsi8kjSeAKXJ5dDNP3DuwNY16ge7JT4n2r%2FUtbL5Ku19fRz95Y7i6zWXowhWGfg%2B2W4qV207GaKMHlML1zF4FIrH%2BcZPcEiiMoEY5SEc1wZD8AnMM5tXqi69k4BIFUysC1Q20dHOucyGD74WjQaEruw9tibNBxYhrRtpRuK5CriQ0BOdFJUsvHIVIhCf9F%2F8bRNwTJVxnRfb%2B2vLG08wYmzzcS9xUNYxoIP94XsayRowOoGHc%2BsJqCBS9LEGW2bxhaguej6J8gMnwa2difJdXiIG4H0VGT7rYjVUds9iOuwwib3uvwY6pgEqio0sR%2B1W5o74DglSnrzURvWPcWiRRdfnAjlTgwfNyb330xxURuCInId2uKsuUq1qg1U432xm28Ps%2F9gQaa62YE%2FJ1eyQ%2Fv4qVfVhHsOL9zJ%2FPqm8uPYhe%2FGMsZsayM0FxrLIaF2ZwncqgTyo%2Fy9t7ssowoQQBnSdpN%2F0cYerAiIh63Q33qJdVDPDwjG6625tgjH8QIXwcmEGAFhKNDyu5u4CD2DZ&X-Amz-Signature=f49e2b9f89fa69ba1810e824d8ca30c5c3bc73f09f60f1e63133fd82f1ac7752&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKWVYMPS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH8fSJrI95JUJ3UR%2FBiM%2Fp7YRuhts4%2F1Fd8KFnej2Ke%2BAiBFRxg035xHMyDCyYiqZb9FcLwKjLPDVwufyTHUZY%2FiWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWgAlEw7uJ%2BnzHovKtwDhl%2BEwa64ONrXRcOSEVAP8lrreD%2FcCXPwHsalqA7ikhIoNjXZwzILFWd4A7SJynYB7ovEi3GWVVmRD4C6GrMxfb9shyzQk8OHc5jYZo%2B98ku8oXN4MrwIwaeMMyq6wwZbLcvyqrXbjjS9fIZppGIT8QlTEBNEpGmcdJ%2BUhz%2FwDnPLjJeYUlFlReDvMS1CSZGoNIZEW8YGIXbdkbJn2AlC4EUZofo%2BTexYo7B08jk8PUxiVT%2Fuoaga7Tlg1MdGdoDzpQ5kFBlFyPQkCz%2FJiBC3%2BTiNrUlhrh6L3prXHceFsG46wl8bEQRV%2F%2FK2%2FxYT3FQDUeBcdYglzrhrIJhQSsi8kjSeAKXJ5dDNP3DuwNY16ge7JT4n2r%2FUtbL5Ku19fRz95Y7i6zWXowhWGfg%2B2W4qV207GaKMHlML1zF4FIrH%2BcZPcEiiMoEY5SEc1wZD8AnMM5tXqi69k4BIFUysC1Q20dHOucyGD74WjQaEruw9tibNBxYhrRtpRuK5CriQ0BOdFJUsvHIVIhCf9F%2F8bRNwTJVxnRfb%2B2vLG08wYmzzcS9xUNYxoIP94XsayRowOoGHc%2BsJqCBS9LEGW2bxhaguej6J8gMnwa2difJdXiIG4H0VGT7rYjVUds9iOuwwib3uvwY6pgEqio0sR%2B1W5o74DglSnrzURvWPcWiRRdfnAjlTgwfNyb330xxURuCInId2uKsuUq1qg1U432xm28Ps%2F9gQaa62YE%2FJ1eyQ%2Fv4qVfVhHsOL9zJ%2FPqm8uPYhe%2FGMsZsayM0FxrLIaF2ZwncqgTyo%2Fy9t7ssowoQQBnSdpN%2F0cYerAiIh63Q33qJdVDPDwjG6625tgjH8QIXwcmEGAFhKNDyu5u4CD2DZ&X-Amz-Signature=c1872bca917de7c3ea7d711121def7e92ba0a803c52cfeb53c10e79bbf014e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKWVYMPS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH8fSJrI95JUJ3UR%2FBiM%2Fp7YRuhts4%2F1Fd8KFnej2Ke%2BAiBFRxg035xHMyDCyYiqZb9FcLwKjLPDVwufyTHUZY%2FiWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWgAlEw7uJ%2BnzHovKtwDhl%2BEwa64ONrXRcOSEVAP8lrreD%2FcCXPwHsalqA7ikhIoNjXZwzILFWd4A7SJynYB7ovEi3GWVVmRD4C6GrMxfb9shyzQk8OHc5jYZo%2B98ku8oXN4MrwIwaeMMyq6wwZbLcvyqrXbjjS9fIZppGIT8QlTEBNEpGmcdJ%2BUhz%2FwDnPLjJeYUlFlReDvMS1CSZGoNIZEW8YGIXbdkbJn2AlC4EUZofo%2BTexYo7B08jk8PUxiVT%2Fuoaga7Tlg1MdGdoDzpQ5kFBlFyPQkCz%2FJiBC3%2BTiNrUlhrh6L3prXHceFsG46wl8bEQRV%2F%2FK2%2FxYT3FQDUeBcdYglzrhrIJhQSsi8kjSeAKXJ5dDNP3DuwNY16ge7JT4n2r%2FUtbL5Ku19fRz95Y7i6zWXowhWGfg%2B2W4qV207GaKMHlML1zF4FIrH%2BcZPcEiiMoEY5SEc1wZD8AnMM5tXqi69k4BIFUysC1Q20dHOucyGD74WjQaEruw9tibNBxYhrRtpRuK5CriQ0BOdFJUsvHIVIhCf9F%2F8bRNwTJVxnRfb%2B2vLG08wYmzzcS9xUNYxoIP94XsayRowOoGHc%2BsJqCBS9LEGW2bxhaguej6J8gMnwa2difJdXiIG4H0VGT7rYjVUds9iOuwwib3uvwY6pgEqio0sR%2B1W5o74DglSnrzURvWPcWiRRdfnAjlTgwfNyb330xxURuCInId2uKsuUq1qg1U432xm28Ps%2F9gQaa62YE%2FJ1eyQ%2Fv4qVfVhHsOL9zJ%2FPqm8uPYhe%2FGMsZsayM0FxrLIaF2ZwncqgTyo%2Fy9t7ssowoQQBnSdpN%2F0cYerAiIh63Q33qJdVDPDwjG6625tgjH8QIXwcmEGAFhKNDyu5u4CD2DZ&X-Amz-Signature=18c2b1e24ace82b7271b6f147de9918bf961827cb61792c1385ade4dfefa21f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
