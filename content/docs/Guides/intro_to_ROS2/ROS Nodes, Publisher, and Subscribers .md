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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3UOGZY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmMfBb0IOA1IiigJ6%2BwLrnKQD95vPG7zEtyOEVI%2FteIAiEA2dSYpMuZngkUWEbTnMB6BO94s6inM2cXn84hVaqLFXgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHrxcq%2FleQVtp1fi5yrcAxMKgNCA96xl6ObZ7mmVRv7NY8%2FU%2BOfbqvE5CQj%2FV4IyIyiYJb%2BKJINbi3iN1Usw4IX7sgsttPf%2BN3JmOTbHUSLD3wQzhK1p0JNQSXorpLqGIycCNe1D5wRo0hBMBfEpqlbiAHxPIfjzsuhysnJkzdyezjYcklINj2i0fWj19QTAnX2%2Bbri4uAgon%2BqeHXwUJAPCatY%2B%2FDWYob3Hg0aFUzS7HcxAWowYY%2FGntQlQR%2BJyyF22sY5CFG0La1v7WwwDKEqOJWXDRUf7tREw67gFJpmXb%2Bv7KGA%2FiSrp%2B6YfqC9rZQcT%2FwvO2nZSAxapxdYBjY2A%2FAf1pHSSjiiOzeSIVqsY%2F15apMKKtGTu26kHuQ%2FQZYfYaWINH6ck0lgHGuBOxf%2FnioLBZ%2B%2BedI5TI%2BAZ%2BkJgKMvYQSd8%2FckfN4XIg6k5d0kHDLRWgNcEnFssB1ahBdv3mZmru147pe%2BXyuvO%2Bauhxb9AdRKou3WI6VCO8VK09iUDmqH27%2B8Z0m605GbrwZgzOtvNpIE3XGuFjoMnJ1NUuZw4v%2F49Q9BN4L1DupBSkF3xQ5HQIBd1vu%2F7NpSycmFqrpQlLKRsVzFXzGDeIPogaJ2%2Bc2vzPmhhrUG4gJtfVvvjVft8fWzj2WYiMKy1xsIGOqUBJp9OXpsePq%2BwbP81IkBUYarAsyn2cVp5tn9eFl0Pso7VoEhj1RuzF51J7vUSz9APW%2BAF0%2Bo7ZbCEeOK4CK0HNlOj%2FqYXmLQ5SvPQmWPBXmg42hW5Tq%2BvegAwkRAY9Y7aK9btNMPsnoOO7R86Snd6a3iAlimeNo8MTuk8ZMqlK1LFNysRYvxzNyuOur7ajKtFfqxMZiOwzLXbaZOlDtTLkmG2iEnC&X-Amz-Signature=db10aba108e1722d64d87387392973d76a4f575abf0dee456cc1d7dd6d053252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3UOGZY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmMfBb0IOA1IiigJ6%2BwLrnKQD95vPG7zEtyOEVI%2FteIAiEA2dSYpMuZngkUWEbTnMB6BO94s6inM2cXn84hVaqLFXgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHrxcq%2FleQVtp1fi5yrcAxMKgNCA96xl6ObZ7mmVRv7NY8%2FU%2BOfbqvE5CQj%2FV4IyIyiYJb%2BKJINbi3iN1Usw4IX7sgsttPf%2BN3JmOTbHUSLD3wQzhK1p0JNQSXorpLqGIycCNe1D5wRo0hBMBfEpqlbiAHxPIfjzsuhysnJkzdyezjYcklINj2i0fWj19QTAnX2%2Bbri4uAgon%2BqeHXwUJAPCatY%2B%2FDWYob3Hg0aFUzS7HcxAWowYY%2FGntQlQR%2BJyyF22sY5CFG0La1v7WwwDKEqOJWXDRUf7tREw67gFJpmXb%2Bv7KGA%2FiSrp%2B6YfqC9rZQcT%2FwvO2nZSAxapxdYBjY2A%2FAf1pHSSjiiOzeSIVqsY%2F15apMKKtGTu26kHuQ%2FQZYfYaWINH6ck0lgHGuBOxf%2FnioLBZ%2B%2BedI5TI%2BAZ%2BkJgKMvYQSd8%2FckfN4XIg6k5d0kHDLRWgNcEnFssB1ahBdv3mZmru147pe%2BXyuvO%2Bauhxb9AdRKou3WI6VCO8VK09iUDmqH27%2B8Z0m605GbrwZgzOtvNpIE3XGuFjoMnJ1NUuZw4v%2F49Q9BN4L1DupBSkF3xQ5HQIBd1vu%2F7NpSycmFqrpQlLKRsVzFXzGDeIPogaJ2%2Bc2vzPmhhrUG4gJtfVvvjVft8fWzj2WYiMKy1xsIGOqUBJp9OXpsePq%2BwbP81IkBUYarAsyn2cVp5tn9eFl0Pso7VoEhj1RuzF51J7vUSz9APW%2BAF0%2Bo7ZbCEeOK4CK0HNlOj%2FqYXmLQ5SvPQmWPBXmg42hW5Tq%2BvegAwkRAY9Y7aK9btNMPsnoOO7R86Snd6a3iAlimeNo8MTuk8ZMqlK1LFNysRYvxzNyuOur7ajKtFfqxMZiOwzLXbaZOlDtTLkmG2iEnC&X-Amz-Signature=86bb71ed30195ae85a6ef6ffae14fb5c9e6b671999355350760eef358ed9c1b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3UOGZY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmMfBb0IOA1IiigJ6%2BwLrnKQD95vPG7zEtyOEVI%2FteIAiEA2dSYpMuZngkUWEbTnMB6BO94s6inM2cXn84hVaqLFXgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHrxcq%2FleQVtp1fi5yrcAxMKgNCA96xl6ObZ7mmVRv7NY8%2FU%2BOfbqvE5CQj%2FV4IyIyiYJb%2BKJINbi3iN1Usw4IX7sgsttPf%2BN3JmOTbHUSLD3wQzhK1p0JNQSXorpLqGIycCNe1D5wRo0hBMBfEpqlbiAHxPIfjzsuhysnJkzdyezjYcklINj2i0fWj19QTAnX2%2Bbri4uAgon%2BqeHXwUJAPCatY%2B%2FDWYob3Hg0aFUzS7HcxAWowYY%2FGntQlQR%2BJyyF22sY5CFG0La1v7WwwDKEqOJWXDRUf7tREw67gFJpmXb%2Bv7KGA%2FiSrp%2B6YfqC9rZQcT%2FwvO2nZSAxapxdYBjY2A%2FAf1pHSSjiiOzeSIVqsY%2F15apMKKtGTu26kHuQ%2FQZYfYaWINH6ck0lgHGuBOxf%2FnioLBZ%2B%2BedI5TI%2BAZ%2BkJgKMvYQSd8%2FckfN4XIg6k5d0kHDLRWgNcEnFssB1ahBdv3mZmru147pe%2BXyuvO%2Bauhxb9AdRKou3WI6VCO8VK09iUDmqH27%2B8Z0m605GbrwZgzOtvNpIE3XGuFjoMnJ1NUuZw4v%2F49Q9BN4L1DupBSkF3xQ5HQIBd1vu%2F7NpSycmFqrpQlLKRsVzFXzGDeIPogaJ2%2Bc2vzPmhhrUG4gJtfVvvjVft8fWzj2WYiMKy1xsIGOqUBJp9OXpsePq%2BwbP81IkBUYarAsyn2cVp5tn9eFl0Pso7VoEhj1RuzF51J7vUSz9APW%2BAF0%2Bo7ZbCEeOK4CK0HNlOj%2FqYXmLQ5SvPQmWPBXmg42hW5Tq%2BvegAwkRAY9Y7aK9btNMPsnoOO7R86Snd6a3iAlimeNo8MTuk8ZMqlK1LFNysRYvxzNyuOur7ajKtFfqxMZiOwzLXbaZOlDtTLkmG2iEnC&X-Amz-Signature=9dd9b899b99481fc0df9e7d48c0ce652dc0e766dda3db41807a96b70ed7e7962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3UOGZY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmMfBb0IOA1IiigJ6%2BwLrnKQD95vPG7zEtyOEVI%2FteIAiEA2dSYpMuZngkUWEbTnMB6BO94s6inM2cXn84hVaqLFXgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHrxcq%2FleQVtp1fi5yrcAxMKgNCA96xl6ObZ7mmVRv7NY8%2FU%2BOfbqvE5CQj%2FV4IyIyiYJb%2BKJINbi3iN1Usw4IX7sgsttPf%2BN3JmOTbHUSLD3wQzhK1p0JNQSXorpLqGIycCNe1D5wRo0hBMBfEpqlbiAHxPIfjzsuhysnJkzdyezjYcklINj2i0fWj19QTAnX2%2Bbri4uAgon%2BqeHXwUJAPCatY%2B%2FDWYob3Hg0aFUzS7HcxAWowYY%2FGntQlQR%2BJyyF22sY5CFG0La1v7WwwDKEqOJWXDRUf7tREw67gFJpmXb%2Bv7KGA%2FiSrp%2B6YfqC9rZQcT%2FwvO2nZSAxapxdYBjY2A%2FAf1pHSSjiiOzeSIVqsY%2F15apMKKtGTu26kHuQ%2FQZYfYaWINH6ck0lgHGuBOxf%2FnioLBZ%2B%2BedI5TI%2BAZ%2BkJgKMvYQSd8%2FckfN4XIg6k5d0kHDLRWgNcEnFssB1ahBdv3mZmru147pe%2BXyuvO%2Bauhxb9AdRKou3WI6VCO8VK09iUDmqH27%2B8Z0m605GbrwZgzOtvNpIE3XGuFjoMnJ1NUuZw4v%2F49Q9BN4L1DupBSkF3xQ5HQIBd1vu%2F7NpSycmFqrpQlLKRsVzFXzGDeIPogaJ2%2Bc2vzPmhhrUG4gJtfVvvjVft8fWzj2WYiMKy1xsIGOqUBJp9OXpsePq%2BwbP81IkBUYarAsyn2cVp5tn9eFl0Pso7VoEhj1RuzF51J7vUSz9APW%2BAF0%2Bo7ZbCEeOK4CK0HNlOj%2FqYXmLQ5SvPQmWPBXmg42hW5Tq%2BvegAwkRAY9Y7aK9btNMPsnoOO7R86Snd6a3iAlimeNo8MTuk8ZMqlK1LFNysRYvxzNyuOur7ajKtFfqxMZiOwzLXbaZOlDtTLkmG2iEnC&X-Amz-Signature=ba7ce3cb26af29bef3689295d35ee69f978f3846d921f1362ceb494503174fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3UOGZY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmMfBb0IOA1IiigJ6%2BwLrnKQD95vPG7zEtyOEVI%2FteIAiEA2dSYpMuZngkUWEbTnMB6BO94s6inM2cXn84hVaqLFXgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHrxcq%2FleQVtp1fi5yrcAxMKgNCA96xl6ObZ7mmVRv7NY8%2FU%2BOfbqvE5CQj%2FV4IyIyiYJb%2BKJINbi3iN1Usw4IX7sgsttPf%2BN3JmOTbHUSLD3wQzhK1p0JNQSXorpLqGIycCNe1D5wRo0hBMBfEpqlbiAHxPIfjzsuhysnJkzdyezjYcklINj2i0fWj19QTAnX2%2Bbri4uAgon%2BqeHXwUJAPCatY%2B%2FDWYob3Hg0aFUzS7HcxAWowYY%2FGntQlQR%2BJyyF22sY5CFG0La1v7WwwDKEqOJWXDRUf7tREw67gFJpmXb%2Bv7KGA%2FiSrp%2B6YfqC9rZQcT%2FwvO2nZSAxapxdYBjY2A%2FAf1pHSSjiiOzeSIVqsY%2F15apMKKtGTu26kHuQ%2FQZYfYaWINH6ck0lgHGuBOxf%2FnioLBZ%2B%2BedI5TI%2BAZ%2BkJgKMvYQSd8%2FckfN4XIg6k5d0kHDLRWgNcEnFssB1ahBdv3mZmru147pe%2BXyuvO%2Bauhxb9AdRKou3WI6VCO8VK09iUDmqH27%2B8Z0m605GbrwZgzOtvNpIE3XGuFjoMnJ1NUuZw4v%2F49Q9BN4L1DupBSkF3xQ5HQIBd1vu%2F7NpSycmFqrpQlLKRsVzFXzGDeIPogaJ2%2Bc2vzPmhhrUG4gJtfVvvjVft8fWzj2WYiMKy1xsIGOqUBJp9OXpsePq%2BwbP81IkBUYarAsyn2cVp5tn9eFl0Pso7VoEhj1RuzF51J7vUSz9APW%2BAF0%2Bo7ZbCEeOK4CK0HNlOj%2FqYXmLQ5SvPQmWPBXmg42hW5Tq%2BvegAwkRAY9Y7aK9btNMPsnoOO7R86Snd6a3iAlimeNo8MTuk8ZMqlK1LFNysRYvxzNyuOur7ajKtFfqxMZiOwzLXbaZOlDtTLkmG2iEnC&X-Amz-Signature=e33def8ea59841b4249de6bf09c97f8328e720c9adc6a1addde1107ba3f20fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3UOGZY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmMfBb0IOA1IiigJ6%2BwLrnKQD95vPG7zEtyOEVI%2FteIAiEA2dSYpMuZngkUWEbTnMB6BO94s6inM2cXn84hVaqLFXgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHrxcq%2FleQVtp1fi5yrcAxMKgNCA96xl6ObZ7mmVRv7NY8%2FU%2BOfbqvE5CQj%2FV4IyIyiYJb%2BKJINbi3iN1Usw4IX7sgsttPf%2BN3JmOTbHUSLD3wQzhK1p0JNQSXorpLqGIycCNe1D5wRo0hBMBfEpqlbiAHxPIfjzsuhysnJkzdyezjYcklINj2i0fWj19QTAnX2%2Bbri4uAgon%2BqeHXwUJAPCatY%2B%2FDWYob3Hg0aFUzS7HcxAWowYY%2FGntQlQR%2BJyyF22sY5CFG0La1v7WwwDKEqOJWXDRUf7tREw67gFJpmXb%2Bv7KGA%2FiSrp%2B6YfqC9rZQcT%2FwvO2nZSAxapxdYBjY2A%2FAf1pHSSjiiOzeSIVqsY%2F15apMKKtGTu26kHuQ%2FQZYfYaWINH6ck0lgHGuBOxf%2FnioLBZ%2B%2BedI5TI%2BAZ%2BkJgKMvYQSd8%2FckfN4XIg6k5d0kHDLRWgNcEnFssB1ahBdv3mZmru147pe%2BXyuvO%2Bauhxb9AdRKou3WI6VCO8VK09iUDmqH27%2B8Z0m605GbrwZgzOtvNpIE3XGuFjoMnJ1NUuZw4v%2F49Q9BN4L1DupBSkF3xQ5HQIBd1vu%2F7NpSycmFqrpQlLKRsVzFXzGDeIPogaJ2%2Bc2vzPmhhrUG4gJtfVvvjVft8fWzj2WYiMKy1xsIGOqUBJp9OXpsePq%2BwbP81IkBUYarAsyn2cVp5tn9eFl0Pso7VoEhj1RuzF51J7vUSz9APW%2BAF0%2Bo7ZbCEeOK4CK0HNlOj%2FqYXmLQ5SvPQmWPBXmg42hW5Tq%2BvegAwkRAY9Y7aK9btNMPsnoOO7R86Snd6a3iAlimeNo8MTuk8ZMqlK1LFNysRYvxzNyuOur7ajKtFfqxMZiOwzLXbaZOlDtTLkmG2iEnC&X-Amz-Signature=e2bba42839bbe3d2e066fa52aec0f824c483d55f4c4d00b8865edc553b390eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3UOGZY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmMfBb0IOA1IiigJ6%2BwLrnKQD95vPG7zEtyOEVI%2FteIAiEA2dSYpMuZngkUWEbTnMB6BO94s6inM2cXn84hVaqLFXgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHrxcq%2FleQVtp1fi5yrcAxMKgNCA96xl6ObZ7mmVRv7NY8%2FU%2BOfbqvE5CQj%2FV4IyIyiYJb%2BKJINbi3iN1Usw4IX7sgsttPf%2BN3JmOTbHUSLD3wQzhK1p0JNQSXorpLqGIycCNe1D5wRo0hBMBfEpqlbiAHxPIfjzsuhysnJkzdyezjYcklINj2i0fWj19QTAnX2%2Bbri4uAgon%2BqeHXwUJAPCatY%2B%2FDWYob3Hg0aFUzS7HcxAWowYY%2FGntQlQR%2BJyyF22sY5CFG0La1v7WwwDKEqOJWXDRUf7tREw67gFJpmXb%2Bv7KGA%2FiSrp%2B6YfqC9rZQcT%2FwvO2nZSAxapxdYBjY2A%2FAf1pHSSjiiOzeSIVqsY%2F15apMKKtGTu26kHuQ%2FQZYfYaWINH6ck0lgHGuBOxf%2FnioLBZ%2B%2BedI5TI%2BAZ%2BkJgKMvYQSd8%2FckfN4XIg6k5d0kHDLRWgNcEnFssB1ahBdv3mZmru147pe%2BXyuvO%2Bauhxb9AdRKou3WI6VCO8VK09iUDmqH27%2B8Z0m605GbrwZgzOtvNpIE3XGuFjoMnJ1NUuZw4v%2F49Q9BN4L1DupBSkF3xQ5HQIBd1vu%2F7NpSycmFqrpQlLKRsVzFXzGDeIPogaJ2%2Bc2vzPmhhrUG4gJtfVvvjVft8fWzj2WYiMKy1xsIGOqUBJp9OXpsePq%2BwbP81IkBUYarAsyn2cVp5tn9eFl0Pso7VoEhj1RuzF51J7vUSz9APW%2BAF0%2Bo7ZbCEeOK4CK0HNlOj%2FqYXmLQ5SvPQmWPBXmg42hW5Tq%2BvegAwkRAY9Y7aK9btNMPsnoOO7R86Snd6a3iAlimeNo8MTuk8ZMqlK1LFNysRYvxzNyuOur7ajKtFfqxMZiOwzLXbaZOlDtTLkmG2iEnC&X-Amz-Signature=0570c2e4312ae9e1c7eeff0351e4fe15f478b4f5c0a4f1d77ca6d05fdae14591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3UOGZY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmMfBb0IOA1IiigJ6%2BwLrnKQD95vPG7zEtyOEVI%2FteIAiEA2dSYpMuZngkUWEbTnMB6BO94s6inM2cXn84hVaqLFXgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHrxcq%2FleQVtp1fi5yrcAxMKgNCA96xl6ObZ7mmVRv7NY8%2FU%2BOfbqvE5CQj%2FV4IyIyiYJb%2BKJINbi3iN1Usw4IX7sgsttPf%2BN3JmOTbHUSLD3wQzhK1p0JNQSXorpLqGIycCNe1D5wRo0hBMBfEpqlbiAHxPIfjzsuhysnJkzdyezjYcklINj2i0fWj19QTAnX2%2Bbri4uAgon%2BqeHXwUJAPCatY%2B%2FDWYob3Hg0aFUzS7HcxAWowYY%2FGntQlQR%2BJyyF22sY5CFG0La1v7WwwDKEqOJWXDRUf7tREw67gFJpmXb%2Bv7KGA%2FiSrp%2B6YfqC9rZQcT%2FwvO2nZSAxapxdYBjY2A%2FAf1pHSSjiiOzeSIVqsY%2F15apMKKtGTu26kHuQ%2FQZYfYaWINH6ck0lgHGuBOxf%2FnioLBZ%2B%2BedI5TI%2BAZ%2BkJgKMvYQSd8%2FckfN4XIg6k5d0kHDLRWgNcEnFssB1ahBdv3mZmru147pe%2BXyuvO%2Bauhxb9AdRKou3WI6VCO8VK09iUDmqH27%2B8Z0m605GbrwZgzOtvNpIE3XGuFjoMnJ1NUuZw4v%2F49Q9BN4L1DupBSkF3xQ5HQIBd1vu%2F7NpSycmFqrpQlLKRsVzFXzGDeIPogaJ2%2Bc2vzPmhhrUG4gJtfVvvjVft8fWzj2WYiMKy1xsIGOqUBJp9OXpsePq%2BwbP81IkBUYarAsyn2cVp5tn9eFl0Pso7VoEhj1RuzF51J7vUSz9APW%2BAF0%2Bo7ZbCEeOK4CK0HNlOj%2FqYXmLQ5SvPQmWPBXmg42hW5Tq%2BvegAwkRAY9Y7aK9btNMPsnoOO7R86Snd6a3iAlimeNo8MTuk8ZMqlK1LFNysRYvxzNyuOur7ajKtFfqxMZiOwzLXbaZOlDtTLkmG2iEnC&X-Amz-Signature=2ff474787413a6211526ba40f54eee08310c54dfde3a26314fbb04b9dd02e44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
