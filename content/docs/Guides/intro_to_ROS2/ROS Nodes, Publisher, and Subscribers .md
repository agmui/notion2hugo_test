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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CTXHA5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkUHJvawGKtF7SiT2pkIe6H9ZtWWtbKAWjEH47t4avAAiA0Vc%2FWXn78nN69%2BpFuVkNY8sMjMcr27%2B4K7XSLzM1DrCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMSmlBzGGqozdKfDiVKtwD%2Fgv7kjvx%2FeoBAdO%2BX519%2FbT3yiEEASx6VzS%2Bh28GUwjNSk%2FqIA%2BIiROB7eDJurBJILY4BQmv8VeqdJVVQNYm%2Bhnphr1TrF98l%2FrNOtZaBqfCRvHn3yE3OSD6zg%2Bb%2B5afccKY99SxCxeH9o9vB8beb0sADpnYVMLSSdUVZDOF6fcB%2BGAqx1o4hHGISLkzBQkVs2UYQseUnos06off8IHEtX8aVXq8abzmwnlTbAtgIT9EmK9SG8x%2FSTc6tqZNslJ4jg%2BKHldKtCA9JEZ9nyQLd%2FPo9lWTlt19XNAw6Nn1h1Yo5hoyTjAPe32s9ydousCNoH0UCpKllybcg3VJwVl1mIBUIgRQ%2FuKJC3x4fhqF6x%2Fgqj4Fai5QlXdEtHC1e25AtEPCmL1X6aKW%2B5jNZjo5PGetsFadHXLbYPT2ej%2BwY2Rvpacb%2BSodTfdzRQhNJLzomptoQs%2BMXL0fgQ5v1Y4fsy1C04%2BS5Si8dy4aKYnZRq3wyIkEpfvQVa%2Bx9MouWufmnZn4PP%2FPReAcnvvAR48wAnnErUi70Hki4I2Ihs8%2BqrpBL08g5J0JCWOHIUaEhyaVNFRP8Kb9IMnJPna3dH2V%2FeozHfVIGF552Hult5qr6uOGODVzDNZK4nTE%2BDAw88S8xAY6pgHu%2BxcycRLZ%2FWl%2F9rL4sPeZN%2BRIO1joIhvMIvvCzSHjXz2aimPCbCSFEaTNYtjecVG5dx5zIRi9ZATj1dEyRwEEapuE2bGt7CxKTjq38mmh4kPcvRNdIrmnm%2FrQ7iTfvOrTdqbMSuCxhGWZ9d48L5%2BnP78kdHEj0wKw8RJ2suC98JNTZVkuLn%2F5KiLiAqvsohh2zDAaK0x1b4yQiKabM04KjLWwaLIO&X-Amz-Signature=46f4e22ddc9f683783769dbe452c967218bf11b575fbc99542f38e41241ee833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CTXHA5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkUHJvawGKtF7SiT2pkIe6H9ZtWWtbKAWjEH47t4avAAiA0Vc%2FWXn78nN69%2BpFuVkNY8sMjMcr27%2B4K7XSLzM1DrCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMSmlBzGGqozdKfDiVKtwD%2Fgv7kjvx%2FeoBAdO%2BX519%2FbT3yiEEASx6VzS%2Bh28GUwjNSk%2FqIA%2BIiROB7eDJurBJILY4BQmv8VeqdJVVQNYm%2Bhnphr1TrF98l%2FrNOtZaBqfCRvHn3yE3OSD6zg%2Bb%2B5afccKY99SxCxeH9o9vB8beb0sADpnYVMLSSdUVZDOF6fcB%2BGAqx1o4hHGISLkzBQkVs2UYQseUnos06off8IHEtX8aVXq8abzmwnlTbAtgIT9EmK9SG8x%2FSTc6tqZNslJ4jg%2BKHldKtCA9JEZ9nyQLd%2FPo9lWTlt19XNAw6Nn1h1Yo5hoyTjAPe32s9ydousCNoH0UCpKllybcg3VJwVl1mIBUIgRQ%2FuKJC3x4fhqF6x%2Fgqj4Fai5QlXdEtHC1e25AtEPCmL1X6aKW%2B5jNZjo5PGetsFadHXLbYPT2ej%2BwY2Rvpacb%2BSodTfdzRQhNJLzomptoQs%2BMXL0fgQ5v1Y4fsy1C04%2BS5Si8dy4aKYnZRq3wyIkEpfvQVa%2Bx9MouWufmnZn4PP%2FPReAcnvvAR48wAnnErUi70Hki4I2Ihs8%2BqrpBL08g5J0JCWOHIUaEhyaVNFRP8Kb9IMnJPna3dH2V%2FeozHfVIGF552Hult5qr6uOGODVzDNZK4nTE%2BDAw88S8xAY6pgHu%2BxcycRLZ%2FWl%2F9rL4sPeZN%2BRIO1joIhvMIvvCzSHjXz2aimPCbCSFEaTNYtjecVG5dx5zIRi9ZATj1dEyRwEEapuE2bGt7CxKTjq38mmh4kPcvRNdIrmnm%2FrQ7iTfvOrTdqbMSuCxhGWZ9d48L5%2BnP78kdHEj0wKw8RJ2suC98JNTZVkuLn%2F5KiLiAqvsohh2zDAaK0x1b4yQiKabM04KjLWwaLIO&X-Amz-Signature=2ef6d3a38e5ecffa5fc733c5123e9be531928a058f51816eac7c4226d9edb6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CTXHA5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkUHJvawGKtF7SiT2pkIe6H9ZtWWtbKAWjEH47t4avAAiA0Vc%2FWXn78nN69%2BpFuVkNY8sMjMcr27%2B4K7XSLzM1DrCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMSmlBzGGqozdKfDiVKtwD%2Fgv7kjvx%2FeoBAdO%2BX519%2FbT3yiEEASx6VzS%2Bh28GUwjNSk%2FqIA%2BIiROB7eDJurBJILY4BQmv8VeqdJVVQNYm%2Bhnphr1TrF98l%2FrNOtZaBqfCRvHn3yE3OSD6zg%2Bb%2B5afccKY99SxCxeH9o9vB8beb0sADpnYVMLSSdUVZDOF6fcB%2BGAqx1o4hHGISLkzBQkVs2UYQseUnos06off8IHEtX8aVXq8abzmwnlTbAtgIT9EmK9SG8x%2FSTc6tqZNslJ4jg%2BKHldKtCA9JEZ9nyQLd%2FPo9lWTlt19XNAw6Nn1h1Yo5hoyTjAPe32s9ydousCNoH0UCpKllybcg3VJwVl1mIBUIgRQ%2FuKJC3x4fhqF6x%2Fgqj4Fai5QlXdEtHC1e25AtEPCmL1X6aKW%2B5jNZjo5PGetsFadHXLbYPT2ej%2BwY2Rvpacb%2BSodTfdzRQhNJLzomptoQs%2BMXL0fgQ5v1Y4fsy1C04%2BS5Si8dy4aKYnZRq3wyIkEpfvQVa%2Bx9MouWufmnZn4PP%2FPReAcnvvAR48wAnnErUi70Hki4I2Ihs8%2BqrpBL08g5J0JCWOHIUaEhyaVNFRP8Kb9IMnJPna3dH2V%2FeozHfVIGF552Hult5qr6uOGODVzDNZK4nTE%2BDAw88S8xAY6pgHu%2BxcycRLZ%2FWl%2F9rL4sPeZN%2BRIO1joIhvMIvvCzSHjXz2aimPCbCSFEaTNYtjecVG5dx5zIRi9ZATj1dEyRwEEapuE2bGt7CxKTjq38mmh4kPcvRNdIrmnm%2FrQ7iTfvOrTdqbMSuCxhGWZ9d48L5%2BnP78kdHEj0wKw8RJ2suC98JNTZVkuLn%2F5KiLiAqvsohh2zDAaK0x1b4yQiKabM04KjLWwaLIO&X-Amz-Signature=dc909f81db610ae95e908f9f9460b7616609c2ec27e2288b39e176993f545923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CTXHA5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkUHJvawGKtF7SiT2pkIe6H9ZtWWtbKAWjEH47t4avAAiA0Vc%2FWXn78nN69%2BpFuVkNY8sMjMcr27%2B4K7XSLzM1DrCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMSmlBzGGqozdKfDiVKtwD%2Fgv7kjvx%2FeoBAdO%2BX519%2FbT3yiEEASx6VzS%2Bh28GUwjNSk%2FqIA%2BIiROB7eDJurBJILY4BQmv8VeqdJVVQNYm%2Bhnphr1TrF98l%2FrNOtZaBqfCRvHn3yE3OSD6zg%2Bb%2B5afccKY99SxCxeH9o9vB8beb0sADpnYVMLSSdUVZDOF6fcB%2BGAqx1o4hHGISLkzBQkVs2UYQseUnos06off8IHEtX8aVXq8abzmwnlTbAtgIT9EmK9SG8x%2FSTc6tqZNslJ4jg%2BKHldKtCA9JEZ9nyQLd%2FPo9lWTlt19XNAw6Nn1h1Yo5hoyTjAPe32s9ydousCNoH0UCpKllybcg3VJwVl1mIBUIgRQ%2FuKJC3x4fhqF6x%2Fgqj4Fai5QlXdEtHC1e25AtEPCmL1X6aKW%2B5jNZjo5PGetsFadHXLbYPT2ej%2BwY2Rvpacb%2BSodTfdzRQhNJLzomptoQs%2BMXL0fgQ5v1Y4fsy1C04%2BS5Si8dy4aKYnZRq3wyIkEpfvQVa%2Bx9MouWufmnZn4PP%2FPReAcnvvAR48wAnnErUi70Hki4I2Ihs8%2BqrpBL08g5J0JCWOHIUaEhyaVNFRP8Kb9IMnJPna3dH2V%2FeozHfVIGF552Hult5qr6uOGODVzDNZK4nTE%2BDAw88S8xAY6pgHu%2BxcycRLZ%2FWl%2F9rL4sPeZN%2BRIO1joIhvMIvvCzSHjXz2aimPCbCSFEaTNYtjecVG5dx5zIRi9ZATj1dEyRwEEapuE2bGt7CxKTjq38mmh4kPcvRNdIrmnm%2FrQ7iTfvOrTdqbMSuCxhGWZ9d48L5%2BnP78kdHEj0wKw8RJ2suC98JNTZVkuLn%2F5KiLiAqvsohh2zDAaK0x1b4yQiKabM04KjLWwaLIO&X-Amz-Signature=48f5bc2a9bf0176b940684c8b2ed28c2bbb3f9bb21d689d4917a2f928d8f8829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CTXHA5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkUHJvawGKtF7SiT2pkIe6H9ZtWWtbKAWjEH47t4avAAiA0Vc%2FWXn78nN69%2BpFuVkNY8sMjMcr27%2B4K7XSLzM1DrCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMSmlBzGGqozdKfDiVKtwD%2Fgv7kjvx%2FeoBAdO%2BX519%2FbT3yiEEASx6VzS%2Bh28GUwjNSk%2FqIA%2BIiROB7eDJurBJILY4BQmv8VeqdJVVQNYm%2Bhnphr1TrF98l%2FrNOtZaBqfCRvHn3yE3OSD6zg%2Bb%2B5afccKY99SxCxeH9o9vB8beb0sADpnYVMLSSdUVZDOF6fcB%2BGAqx1o4hHGISLkzBQkVs2UYQseUnos06off8IHEtX8aVXq8abzmwnlTbAtgIT9EmK9SG8x%2FSTc6tqZNslJ4jg%2BKHldKtCA9JEZ9nyQLd%2FPo9lWTlt19XNAw6Nn1h1Yo5hoyTjAPe32s9ydousCNoH0UCpKllybcg3VJwVl1mIBUIgRQ%2FuKJC3x4fhqF6x%2Fgqj4Fai5QlXdEtHC1e25AtEPCmL1X6aKW%2B5jNZjo5PGetsFadHXLbYPT2ej%2BwY2Rvpacb%2BSodTfdzRQhNJLzomptoQs%2BMXL0fgQ5v1Y4fsy1C04%2BS5Si8dy4aKYnZRq3wyIkEpfvQVa%2Bx9MouWufmnZn4PP%2FPReAcnvvAR48wAnnErUi70Hki4I2Ihs8%2BqrpBL08g5J0JCWOHIUaEhyaVNFRP8Kb9IMnJPna3dH2V%2FeozHfVIGF552Hult5qr6uOGODVzDNZK4nTE%2BDAw88S8xAY6pgHu%2BxcycRLZ%2FWl%2F9rL4sPeZN%2BRIO1joIhvMIvvCzSHjXz2aimPCbCSFEaTNYtjecVG5dx5zIRi9ZATj1dEyRwEEapuE2bGt7CxKTjq38mmh4kPcvRNdIrmnm%2FrQ7iTfvOrTdqbMSuCxhGWZ9d48L5%2BnP78kdHEj0wKw8RJ2suC98JNTZVkuLn%2F5KiLiAqvsohh2zDAaK0x1b4yQiKabM04KjLWwaLIO&X-Amz-Signature=bfb752193ff0ba4066cf3145c83fe2ca9c879c39963d3d73776b237699aaa168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CTXHA5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkUHJvawGKtF7SiT2pkIe6H9ZtWWtbKAWjEH47t4avAAiA0Vc%2FWXn78nN69%2BpFuVkNY8sMjMcr27%2B4K7XSLzM1DrCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMSmlBzGGqozdKfDiVKtwD%2Fgv7kjvx%2FeoBAdO%2BX519%2FbT3yiEEASx6VzS%2Bh28GUwjNSk%2FqIA%2BIiROB7eDJurBJILY4BQmv8VeqdJVVQNYm%2Bhnphr1TrF98l%2FrNOtZaBqfCRvHn3yE3OSD6zg%2Bb%2B5afccKY99SxCxeH9o9vB8beb0sADpnYVMLSSdUVZDOF6fcB%2BGAqx1o4hHGISLkzBQkVs2UYQseUnos06off8IHEtX8aVXq8abzmwnlTbAtgIT9EmK9SG8x%2FSTc6tqZNslJ4jg%2BKHldKtCA9JEZ9nyQLd%2FPo9lWTlt19XNAw6Nn1h1Yo5hoyTjAPe32s9ydousCNoH0UCpKllybcg3VJwVl1mIBUIgRQ%2FuKJC3x4fhqF6x%2Fgqj4Fai5QlXdEtHC1e25AtEPCmL1X6aKW%2B5jNZjo5PGetsFadHXLbYPT2ej%2BwY2Rvpacb%2BSodTfdzRQhNJLzomptoQs%2BMXL0fgQ5v1Y4fsy1C04%2BS5Si8dy4aKYnZRq3wyIkEpfvQVa%2Bx9MouWufmnZn4PP%2FPReAcnvvAR48wAnnErUi70Hki4I2Ihs8%2BqrpBL08g5J0JCWOHIUaEhyaVNFRP8Kb9IMnJPna3dH2V%2FeozHfVIGF552Hult5qr6uOGODVzDNZK4nTE%2BDAw88S8xAY6pgHu%2BxcycRLZ%2FWl%2F9rL4sPeZN%2BRIO1joIhvMIvvCzSHjXz2aimPCbCSFEaTNYtjecVG5dx5zIRi9ZATj1dEyRwEEapuE2bGt7CxKTjq38mmh4kPcvRNdIrmnm%2FrQ7iTfvOrTdqbMSuCxhGWZ9d48L5%2BnP78kdHEj0wKw8RJ2suC98JNTZVkuLn%2F5KiLiAqvsohh2zDAaK0x1b4yQiKabM04KjLWwaLIO&X-Amz-Signature=c24ab286ce4e39c5131534f5c71563d5f951e1ea7ff88c49a6353d808f652b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CTXHA5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkUHJvawGKtF7SiT2pkIe6H9ZtWWtbKAWjEH47t4avAAiA0Vc%2FWXn78nN69%2BpFuVkNY8sMjMcr27%2B4K7XSLzM1DrCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMSmlBzGGqozdKfDiVKtwD%2Fgv7kjvx%2FeoBAdO%2BX519%2FbT3yiEEASx6VzS%2Bh28GUwjNSk%2FqIA%2BIiROB7eDJurBJILY4BQmv8VeqdJVVQNYm%2Bhnphr1TrF98l%2FrNOtZaBqfCRvHn3yE3OSD6zg%2Bb%2B5afccKY99SxCxeH9o9vB8beb0sADpnYVMLSSdUVZDOF6fcB%2BGAqx1o4hHGISLkzBQkVs2UYQseUnos06off8IHEtX8aVXq8abzmwnlTbAtgIT9EmK9SG8x%2FSTc6tqZNslJ4jg%2BKHldKtCA9JEZ9nyQLd%2FPo9lWTlt19XNAw6Nn1h1Yo5hoyTjAPe32s9ydousCNoH0UCpKllybcg3VJwVl1mIBUIgRQ%2FuKJC3x4fhqF6x%2Fgqj4Fai5QlXdEtHC1e25AtEPCmL1X6aKW%2B5jNZjo5PGetsFadHXLbYPT2ej%2BwY2Rvpacb%2BSodTfdzRQhNJLzomptoQs%2BMXL0fgQ5v1Y4fsy1C04%2BS5Si8dy4aKYnZRq3wyIkEpfvQVa%2Bx9MouWufmnZn4PP%2FPReAcnvvAR48wAnnErUi70Hki4I2Ihs8%2BqrpBL08g5J0JCWOHIUaEhyaVNFRP8Kb9IMnJPna3dH2V%2FeozHfVIGF552Hult5qr6uOGODVzDNZK4nTE%2BDAw88S8xAY6pgHu%2BxcycRLZ%2FWl%2F9rL4sPeZN%2BRIO1joIhvMIvvCzSHjXz2aimPCbCSFEaTNYtjecVG5dx5zIRi9ZATj1dEyRwEEapuE2bGt7CxKTjq38mmh4kPcvRNdIrmnm%2FrQ7iTfvOrTdqbMSuCxhGWZ9d48L5%2BnP78kdHEj0wKw8RJ2suC98JNTZVkuLn%2F5KiLiAqvsohh2zDAaK0x1b4yQiKabM04KjLWwaLIO&X-Amz-Signature=75c354af9dd3dfe69ac1c89e895f7687d4f19faed98d72aebb503579b57a7fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2CTXHA5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkUHJvawGKtF7SiT2pkIe6H9ZtWWtbKAWjEH47t4avAAiA0Vc%2FWXn78nN69%2BpFuVkNY8sMjMcr27%2B4K7XSLzM1DrCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMSmlBzGGqozdKfDiVKtwD%2Fgv7kjvx%2FeoBAdO%2BX519%2FbT3yiEEASx6VzS%2Bh28GUwjNSk%2FqIA%2BIiROB7eDJurBJILY4BQmv8VeqdJVVQNYm%2Bhnphr1TrF98l%2FrNOtZaBqfCRvHn3yE3OSD6zg%2Bb%2B5afccKY99SxCxeH9o9vB8beb0sADpnYVMLSSdUVZDOF6fcB%2BGAqx1o4hHGISLkzBQkVs2UYQseUnos06off8IHEtX8aVXq8abzmwnlTbAtgIT9EmK9SG8x%2FSTc6tqZNslJ4jg%2BKHldKtCA9JEZ9nyQLd%2FPo9lWTlt19XNAw6Nn1h1Yo5hoyTjAPe32s9ydousCNoH0UCpKllybcg3VJwVl1mIBUIgRQ%2FuKJC3x4fhqF6x%2Fgqj4Fai5QlXdEtHC1e25AtEPCmL1X6aKW%2B5jNZjo5PGetsFadHXLbYPT2ej%2BwY2Rvpacb%2BSodTfdzRQhNJLzomptoQs%2BMXL0fgQ5v1Y4fsy1C04%2BS5Si8dy4aKYnZRq3wyIkEpfvQVa%2Bx9MouWufmnZn4PP%2FPReAcnvvAR48wAnnErUi70Hki4I2Ihs8%2BqrpBL08g5J0JCWOHIUaEhyaVNFRP8Kb9IMnJPna3dH2V%2FeozHfVIGF552Hult5qr6uOGODVzDNZK4nTE%2BDAw88S8xAY6pgHu%2BxcycRLZ%2FWl%2F9rL4sPeZN%2BRIO1joIhvMIvvCzSHjXz2aimPCbCSFEaTNYtjecVG5dx5zIRi9ZATj1dEyRwEEapuE2bGt7CxKTjq38mmh4kPcvRNdIrmnm%2FrQ7iTfvOrTdqbMSuCxhGWZ9d48L5%2BnP78kdHEj0wKw8RJ2suC98JNTZVkuLn%2F5KiLiAqvsohh2zDAaK0x1b4yQiKabM04KjLWwaLIO&X-Amz-Signature=ae4a1b9268043a80bcba827712dce33908e3fbe5cfea9903c101f57ac63dedc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
