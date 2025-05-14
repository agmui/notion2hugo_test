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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663L5XQGC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCFOReA876SOYb6xk%2BA4Bedp2%2BS8iIU4Cmh1s90DUpAnwIhAPi5bJFCebZj41K%2BJsyidDgLNfKo%2FWS%2BpVuj0QggthHEKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJMhsORWLrab4NtG4q3APL63ruDmKpfoAFMiBI2RDvdrNrMLQViOTkFEbw9IgtPCdfZNDkOKQywDuFb6EOXwB%2BloRj2TiQgfVrx%2Fm9S4dlyZ2Zql9G3lF20ox18yGDfrvfV3IHcD2uIuzGTj7%2FI2znwIbzaoI50ThYqpgPVouwe26BzmVV%2FZ36UWeW3ywhaF1O42BumBgZ4oro2IyTbswtbpzWOOOtoAeKGQkHcYsg3%2Fo3Jk2%2B44JDK8tdXGgP3cymeO1hmCZazDLFj6mqgzxAyz03gDXNX1IV7I53TiOW13fwyi9ECldtbPm%2BkHX16MltEesNv4HVXJQhi%2BUUt%2BMLgA66eJnaq%2F2taElZT2qYXw1zveVRscmL7DOGBM1UtbfREunQqvmynjWrKz4FcpI4bjzihUPI4966ln8gI0unkGp95FQ1vN%2B0f6q7QhZBF2FI8bSddnxqK20yNaUxL15PvpeXZ6sYe11ktM2i182HNcB%2Bm2ZYE1y%2BY1oFmy9XhEWOz2XtWHW8%2B%2FKbORjKKPAZcj18Zcb58QE9qVEnKDaKK8Ee7P4sS28sOWoFt4iIfQkfA3QTgLFZ%2FXTKg%2BJ3tUDeVMXbO0rZCbw%2FQpxFsFPYsRQVprgSMlPLLwI8X7%2Bd%2FM7f%2F6WzmZFDTAv85jCUuJDBBjqkAd5bwcn9LDMvxJvxK0RJ6skUeZoYpCLnFpBVwp5OkKKDZSBOB4vdZvI%2BoOoH9wcYCjH7gi%2F3qzhWsX5louUudge%2F%2FZcqAr9cjJ7J817vgGoiZBNVQjGCOMSIp3uWKqzsmDTEujn54QOHSMgVyjJ%2BAUMQ5B%2BiZRxmOjZC8otC7%2Fr3lH2t3Ysq%2Beu9ftTY6POFjPEg2fT3tPYw8gMrwBirQP6NLLOJ&X-Amz-Signature=d6aef8c95f612a004cba1f4cddc5280c3dc77a751cf54a824bd48b309c1cf7c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663L5XQGC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCFOReA876SOYb6xk%2BA4Bedp2%2BS8iIU4Cmh1s90DUpAnwIhAPi5bJFCebZj41K%2BJsyidDgLNfKo%2FWS%2BpVuj0QggthHEKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJMhsORWLrab4NtG4q3APL63ruDmKpfoAFMiBI2RDvdrNrMLQViOTkFEbw9IgtPCdfZNDkOKQywDuFb6EOXwB%2BloRj2TiQgfVrx%2Fm9S4dlyZ2Zql9G3lF20ox18yGDfrvfV3IHcD2uIuzGTj7%2FI2znwIbzaoI50ThYqpgPVouwe26BzmVV%2FZ36UWeW3ywhaF1O42BumBgZ4oro2IyTbswtbpzWOOOtoAeKGQkHcYsg3%2Fo3Jk2%2B44JDK8tdXGgP3cymeO1hmCZazDLFj6mqgzxAyz03gDXNX1IV7I53TiOW13fwyi9ECldtbPm%2BkHX16MltEesNv4HVXJQhi%2BUUt%2BMLgA66eJnaq%2F2taElZT2qYXw1zveVRscmL7DOGBM1UtbfREunQqvmynjWrKz4FcpI4bjzihUPI4966ln8gI0unkGp95FQ1vN%2B0f6q7QhZBF2FI8bSddnxqK20yNaUxL15PvpeXZ6sYe11ktM2i182HNcB%2Bm2ZYE1y%2BY1oFmy9XhEWOz2XtWHW8%2B%2FKbORjKKPAZcj18Zcb58QE9qVEnKDaKK8Ee7P4sS28sOWoFt4iIfQkfA3QTgLFZ%2FXTKg%2BJ3tUDeVMXbO0rZCbw%2FQpxFsFPYsRQVprgSMlPLLwI8X7%2Bd%2FM7f%2F6WzmZFDTAv85jCUuJDBBjqkAd5bwcn9LDMvxJvxK0RJ6skUeZoYpCLnFpBVwp5OkKKDZSBOB4vdZvI%2BoOoH9wcYCjH7gi%2F3qzhWsX5louUudge%2F%2FZcqAr9cjJ7J817vgGoiZBNVQjGCOMSIp3uWKqzsmDTEujn54QOHSMgVyjJ%2BAUMQ5B%2BiZRxmOjZC8otC7%2Fr3lH2t3Ysq%2Beu9ftTY6POFjPEg2fT3tPYw8gMrwBirQP6NLLOJ&X-Amz-Signature=200a9b45e6f857a6efd5a9b0df27cd2385249c2356d380b7c7b2409d0d45fec7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663L5XQGC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCFOReA876SOYb6xk%2BA4Bedp2%2BS8iIU4Cmh1s90DUpAnwIhAPi5bJFCebZj41K%2BJsyidDgLNfKo%2FWS%2BpVuj0QggthHEKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJMhsORWLrab4NtG4q3APL63ruDmKpfoAFMiBI2RDvdrNrMLQViOTkFEbw9IgtPCdfZNDkOKQywDuFb6EOXwB%2BloRj2TiQgfVrx%2Fm9S4dlyZ2Zql9G3lF20ox18yGDfrvfV3IHcD2uIuzGTj7%2FI2znwIbzaoI50ThYqpgPVouwe26BzmVV%2FZ36UWeW3ywhaF1O42BumBgZ4oro2IyTbswtbpzWOOOtoAeKGQkHcYsg3%2Fo3Jk2%2B44JDK8tdXGgP3cymeO1hmCZazDLFj6mqgzxAyz03gDXNX1IV7I53TiOW13fwyi9ECldtbPm%2BkHX16MltEesNv4HVXJQhi%2BUUt%2BMLgA66eJnaq%2F2taElZT2qYXw1zveVRscmL7DOGBM1UtbfREunQqvmynjWrKz4FcpI4bjzihUPI4966ln8gI0unkGp95FQ1vN%2B0f6q7QhZBF2FI8bSddnxqK20yNaUxL15PvpeXZ6sYe11ktM2i182HNcB%2Bm2ZYE1y%2BY1oFmy9XhEWOz2XtWHW8%2B%2FKbORjKKPAZcj18Zcb58QE9qVEnKDaKK8Ee7P4sS28sOWoFt4iIfQkfA3QTgLFZ%2FXTKg%2BJ3tUDeVMXbO0rZCbw%2FQpxFsFPYsRQVprgSMlPLLwI8X7%2Bd%2FM7f%2F6WzmZFDTAv85jCUuJDBBjqkAd5bwcn9LDMvxJvxK0RJ6skUeZoYpCLnFpBVwp5OkKKDZSBOB4vdZvI%2BoOoH9wcYCjH7gi%2F3qzhWsX5louUudge%2F%2FZcqAr9cjJ7J817vgGoiZBNVQjGCOMSIp3uWKqzsmDTEujn54QOHSMgVyjJ%2BAUMQ5B%2BiZRxmOjZC8otC7%2Fr3lH2t3Ysq%2Beu9ftTY6POFjPEg2fT3tPYw8gMrwBirQP6NLLOJ&X-Amz-Signature=85b82ae8a79ff1a778ca31839dbfea40761e649f1f3e793f1417f91605ee3d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663L5XQGC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCFOReA876SOYb6xk%2BA4Bedp2%2BS8iIU4Cmh1s90DUpAnwIhAPi5bJFCebZj41K%2BJsyidDgLNfKo%2FWS%2BpVuj0QggthHEKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJMhsORWLrab4NtG4q3APL63ruDmKpfoAFMiBI2RDvdrNrMLQViOTkFEbw9IgtPCdfZNDkOKQywDuFb6EOXwB%2BloRj2TiQgfVrx%2Fm9S4dlyZ2Zql9G3lF20ox18yGDfrvfV3IHcD2uIuzGTj7%2FI2znwIbzaoI50ThYqpgPVouwe26BzmVV%2FZ36UWeW3ywhaF1O42BumBgZ4oro2IyTbswtbpzWOOOtoAeKGQkHcYsg3%2Fo3Jk2%2B44JDK8tdXGgP3cymeO1hmCZazDLFj6mqgzxAyz03gDXNX1IV7I53TiOW13fwyi9ECldtbPm%2BkHX16MltEesNv4HVXJQhi%2BUUt%2BMLgA66eJnaq%2F2taElZT2qYXw1zveVRscmL7DOGBM1UtbfREunQqvmynjWrKz4FcpI4bjzihUPI4966ln8gI0unkGp95FQ1vN%2B0f6q7QhZBF2FI8bSddnxqK20yNaUxL15PvpeXZ6sYe11ktM2i182HNcB%2Bm2ZYE1y%2BY1oFmy9XhEWOz2XtWHW8%2B%2FKbORjKKPAZcj18Zcb58QE9qVEnKDaKK8Ee7P4sS28sOWoFt4iIfQkfA3QTgLFZ%2FXTKg%2BJ3tUDeVMXbO0rZCbw%2FQpxFsFPYsRQVprgSMlPLLwI8X7%2Bd%2FM7f%2F6WzmZFDTAv85jCUuJDBBjqkAd5bwcn9LDMvxJvxK0RJ6skUeZoYpCLnFpBVwp5OkKKDZSBOB4vdZvI%2BoOoH9wcYCjH7gi%2F3qzhWsX5louUudge%2F%2FZcqAr9cjJ7J817vgGoiZBNVQjGCOMSIp3uWKqzsmDTEujn54QOHSMgVyjJ%2BAUMQ5B%2BiZRxmOjZC8otC7%2Fr3lH2t3Ysq%2Beu9ftTY6POFjPEg2fT3tPYw8gMrwBirQP6NLLOJ&X-Amz-Signature=5796fb7c46a757702818ad12507fbd5598ecf3694dfac75a5fd149acd8418dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663L5XQGC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCFOReA876SOYb6xk%2BA4Bedp2%2BS8iIU4Cmh1s90DUpAnwIhAPi5bJFCebZj41K%2BJsyidDgLNfKo%2FWS%2BpVuj0QggthHEKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJMhsORWLrab4NtG4q3APL63ruDmKpfoAFMiBI2RDvdrNrMLQViOTkFEbw9IgtPCdfZNDkOKQywDuFb6EOXwB%2BloRj2TiQgfVrx%2Fm9S4dlyZ2Zql9G3lF20ox18yGDfrvfV3IHcD2uIuzGTj7%2FI2znwIbzaoI50ThYqpgPVouwe26BzmVV%2FZ36UWeW3ywhaF1O42BumBgZ4oro2IyTbswtbpzWOOOtoAeKGQkHcYsg3%2Fo3Jk2%2B44JDK8tdXGgP3cymeO1hmCZazDLFj6mqgzxAyz03gDXNX1IV7I53TiOW13fwyi9ECldtbPm%2BkHX16MltEesNv4HVXJQhi%2BUUt%2BMLgA66eJnaq%2F2taElZT2qYXw1zveVRscmL7DOGBM1UtbfREunQqvmynjWrKz4FcpI4bjzihUPI4966ln8gI0unkGp95FQ1vN%2B0f6q7QhZBF2FI8bSddnxqK20yNaUxL15PvpeXZ6sYe11ktM2i182HNcB%2Bm2ZYE1y%2BY1oFmy9XhEWOz2XtWHW8%2B%2FKbORjKKPAZcj18Zcb58QE9qVEnKDaKK8Ee7P4sS28sOWoFt4iIfQkfA3QTgLFZ%2FXTKg%2BJ3tUDeVMXbO0rZCbw%2FQpxFsFPYsRQVprgSMlPLLwI8X7%2Bd%2FM7f%2F6WzmZFDTAv85jCUuJDBBjqkAd5bwcn9LDMvxJvxK0RJ6skUeZoYpCLnFpBVwp5OkKKDZSBOB4vdZvI%2BoOoH9wcYCjH7gi%2F3qzhWsX5louUudge%2F%2FZcqAr9cjJ7J817vgGoiZBNVQjGCOMSIp3uWKqzsmDTEujn54QOHSMgVyjJ%2BAUMQ5B%2BiZRxmOjZC8otC7%2Fr3lH2t3Ysq%2Beu9ftTY6POFjPEg2fT3tPYw8gMrwBirQP6NLLOJ&X-Amz-Signature=95cd997971456c15e11222f3ad900237c13d41ad2e3ced6af9a8ad57c1ef03ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663L5XQGC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCFOReA876SOYb6xk%2BA4Bedp2%2BS8iIU4Cmh1s90DUpAnwIhAPi5bJFCebZj41K%2BJsyidDgLNfKo%2FWS%2BpVuj0QggthHEKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJMhsORWLrab4NtG4q3APL63ruDmKpfoAFMiBI2RDvdrNrMLQViOTkFEbw9IgtPCdfZNDkOKQywDuFb6EOXwB%2BloRj2TiQgfVrx%2Fm9S4dlyZ2Zql9G3lF20ox18yGDfrvfV3IHcD2uIuzGTj7%2FI2znwIbzaoI50ThYqpgPVouwe26BzmVV%2FZ36UWeW3ywhaF1O42BumBgZ4oro2IyTbswtbpzWOOOtoAeKGQkHcYsg3%2Fo3Jk2%2B44JDK8tdXGgP3cymeO1hmCZazDLFj6mqgzxAyz03gDXNX1IV7I53TiOW13fwyi9ECldtbPm%2BkHX16MltEesNv4HVXJQhi%2BUUt%2BMLgA66eJnaq%2F2taElZT2qYXw1zveVRscmL7DOGBM1UtbfREunQqvmynjWrKz4FcpI4bjzihUPI4966ln8gI0unkGp95FQ1vN%2B0f6q7QhZBF2FI8bSddnxqK20yNaUxL15PvpeXZ6sYe11ktM2i182HNcB%2Bm2ZYE1y%2BY1oFmy9XhEWOz2XtWHW8%2B%2FKbORjKKPAZcj18Zcb58QE9qVEnKDaKK8Ee7P4sS28sOWoFt4iIfQkfA3QTgLFZ%2FXTKg%2BJ3tUDeVMXbO0rZCbw%2FQpxFsFPYsRQVprgSMlPLLwI8X7%2Bd%2FM7f%2F6WzmZFDTAv85jCUuJDBBjqkAd5bwcn9LDMvxJvxK0RJ6skUeZoYpCLnFpBVwp5OkKKDZSBOB4vdZvI%2BoOoH9wcYCjH7gi%2F3qzhWsX5louUudge%2F%2FZcqAr9cjJ7J817vgGoiZBNVQjGCOMSIp3uWKqzsmDTEujn54QOHSMgVyjJ%2BAUMQ5B%2BiZRxmOjZC8otC7%2Fr3lH2t3Ysq%2Beu9ftTY6POFjPEg2fT3tPYw8gMrwBirQP6NLLOJ&X-Amz-Signature=f64bfa4a1a63992ce16361b8aa131ff759e24d60de80d01712adf02b2899c339&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663L5XQGC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCFOReA876SOYb6xk%2BA4Bedp2%2BS8iIU4Cmh1s90DUpAnwIhAPi5bJFCebZj41K%2BJsyidDgLNfKo%2FWS%2BpVuj0QggthHEKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJMhsORWLrab4NtG4q3APL63ruDmKpfoAFMiBI2RDvdrNrMLQViOTkFEbw9IgtPCdfZNDkOKQywDuFb6EOXwB%2BloRj2TiQgfVrx%2Fm9S4dlyZ2Zql9G3lF20ox18yGDfrvfV3IHcD2uIuzGTj7%2FI2znwIbzaoI50ThYqpgPVouwe26BzmVV%2FZ36UWeW3ywhaF1O42BumBgZ4oro2IyTbswtbpzWOOOtoAeKGQkHcYsg3%2Fo3Jk2%2B44JDK8tdXGgP3cymeO1hmCZazDLFj6mqgzxAyz03gDXNX1IV7I53TiOW13fwyi9ECldtbPm%2BkHX16MltEesNv4HVXJQhi%2BUUt%2BMLgA66eJnaq%2F2taElZT2qYXw1zveVRscmL7DOGBM1UtbfREunQqvmynjWrKz4FcpI4bjzihUPI4966ln8gI0unkGp95FQ1vN%2B0f6q7QhZBF2FI8bSddnxqK20yNaUxL15PvpeXZ6sYe11ktM2i182HNcB%2Bm2ZYE1y%2BY1oFmy9XhEWOz2XtWHW8%2B%2FKbORjKKPAZcj18Zcb58QE9qVEnKDaKK8Ee7P4sS28sOWoFt4iIfQkfA3QTgLFZ%2FXTKg%2BJ3tUDeVMXbO0rZCbw%2FQpxFsFPYsRQVprgSMlPLLwI8X7%2Bd%2FM7f%2F6WzmZFDTAv85jCUuJDBBjqkAd5bwcn9LDMvxJvxK0RJ6skUeZoYpCLnFpBVwp5OkKKDZSBOB4vdZvI%2BoOoH9wcYCjH7gi%2F3qzhWsX5louUudge%2F%2FZcqAr9cjJ7J817vgGoiZBNVQjGCOMSIp3uWKqzsmDTEujn54QOHSMgVyjJ%2BAUMQ5B%2BiZRxmOjZC8otC7%2Fr3lH2t3Ysq%2Beu9ftTY6POFjPEg2fT3tPYw8gMrwBirQP6NLLOJ&X-Amz-Signature=b3224278490a5eb9020e0444f0b97c28899babcda5a9df3e0bd617f8f06f5124&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663L5XQGC%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCFOReA876SOYb6xk%2BA4Bedp2%2BS8iIU4Cmh1s90DUpAnwIhAPi5bJFCebZj41K%2BJsyidDgLNfKo%2FWS%2BpVuj0QggthHEKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJMhsORWLrab4NtG4q3APL63ruDmKpfoAFMiBI2RDvdrNrMLQViOTkFEbw9IgtPCdfZNDkOKQywDuFb6EOXwB%2BloRj2TiQgfVrx%2Fm9S4dlyZ2Zql9G3lF20ox18yGDfrvfV3IHcD2uIuzGTj7%2FI2znwIbzaoI50ThYqpgPVouwe26BzmVV%2FZ36UWeW3ywhaF1O42BumBgZ4oro2IyTbswtbpzWOOOtoAeKGQkHcYsg3%2Fo3Jk2%2B44JDK8tdXGgP3cymeO1hmCZazDLFj6mqgzxAyz03gDXNX1IV7I53TiOW13fwyi9ECldtbPm%2BkHX16MltEesNv4HVXJQhi%2BUUt%2BMLgA66eJnaq%2F2taElZT2qYXw1zveVRscmL7DOGBM1UtbfREunQqvmynjWrKz4FcpI4bjzihUPI4966ln8gI0unkGp95FQ1vN%2B0f6q7QhZBF2FI8bSddnxqK20yNaUxL15PvpeXZ6sYe11ktM2i182HNcB%2Bm2ZYE1y%2BY1oFmy9XhEWOz2XtWHW8%2B%2FKbORjKKPAZcj18Zcb58QE9qVEnKDaKK8Ee7P4sS28sOWoFt4iIfQkfA3QTgLFZ%2FXTKg%2BJ3tUDeVMXbO0rZCbw%2FQpxFsFPYsRQVprgSMlPLLwI8X7%2Bd%2FM7f%2F6WzmZFDTAv85jCUuJDBBjqkAd5bwcn9LDMvxJvxK0RJ6skUeZoYpCLnFpBVwp5OkKKDZSBOB4vdZvI%2BoOoH9wcYCjH7gi%2F3qzhWsX5louUudge%2F%2FZcqAr9cjJ7J817vgGoiZBNVQjGCOMSIp3uWKqzsmDTEujn54QOHSMgVyjJ%2BAUMQ5B%2BiZRxmOjZC8otC7%2Fr3lH2t3Ysq%2Beu9ftTY6POFjPEg2fT3tPYw8gMrwBirQP6NLLOJ&X-Amz-Signature=92a65da8cd179045d6396d0dd0c316ecc43407eaf66c43db7b86026afde7c86f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
