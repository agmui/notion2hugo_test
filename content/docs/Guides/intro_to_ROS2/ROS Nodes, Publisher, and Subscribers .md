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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636J3VKMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCMF2pGD8PcIhpCTDKGdKPwB851JQEvn6UxRXgcabBaYwIhANy6kpOm4tH3KRW8PhHi%2BLMxKBaP1G%2Bqd%2B9Rn846QoXZKv8DCB8QABoMNjM3NDIzMTgzODA1Igz8R8XKJTLfh5TCZOwq3AONNUFyGK2dCqMa2HxAwwAGXyhzExbyw0U92dDD9LKn0flz9M7apW8BdxNBN3qjItNXtzy5p51a5WdiRe9Ip7bPOCq985xxGf6lU3vAjScfCTJ37D90SpGpZAsuLme40oPdGooDQm3fv63Nsw8cKoruRvRAjUDvjcobl%2BFDTTWyAYkZiodL1oDTUMXpm7nu0EZO2lKJ1grxW%2FtD%2FQpz6KiqmJ7FWvyL0MCtA0yRwXWW7uuCdVjvanJbcs1m%2B%2FZ9nfGfVLP7rK6SfNSy7vIylnldAuXL3GD5%2FK80yozs4c40vSPpkIjmQSIbzAAkUKElAIsIWFUPa7fJRo7eUBjybOFujsKDBMS%2FgJ0pKHspFm27kTSLnGvX3rzX0%2FONgQgMQLbH2RlrRAeJWDer7nuJ3FEcJioSQdh1OV1J5Tt1xWFNoz64%2F6pNiVhA59bJjHO4xJx4W9PSzIQD%2B85p6yH1x1Xb4bHF%2F%2FiMX3Cq6ytw0mxeFtWf0tJL3j5Y7hoWNd%2FaoWq%2BHWM1vMarLf3U2gyOHEFor35XZMBUUKpNXCtH2PEWowcEoWYrp0dGIx9wtKRiSlfw0hj0zP3NVpvASZS0mUeanemJUyW4zm427rtn8Q%2FABqiqB%2Bnr6QEcCgkUHDDRoZTBBjqkAV0Phs3MSv%2BTvCSRcnwoW7cwXGeBwtwylZnKXBDTUFZPD%2FqSNii7UsjA4PdhEhdciV8RHrSaX82EPWp86El3CPpgH4H2Wm%2Fv5YQFqv0vsoiHNokDWGw7NBbf2HszkP%2FohMHPijhMVugTGjOZcvLnDyTxxxo7iD8kMkKFWqPcrWRQg4B%2BTQpV4FIgBhWQaNoWy0zEBl9SdIp9APSnnpBNMmmokIYt&X-Amz-Signature=2cda6e22dafa63493434be1e2abd0e5e82e8a39caeefc0e8e3a31138b54ae8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636J3VKMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCMF2pGD8PcIhpCTDKGdKPwB851JQEvn6UxRXgcabBaYwIhANy6kpOm4tH3KRW8PhHi%2BLMxKBaP1G%2Bqd%2B9Rn846QoXZKv8DCB8QABoMNjM3NDIzMTgzODA1Igz8R8XKJTLfh5TCZOwq3AONNUFyGK2dCqMa2HxAwwAGXyhzExbyw0U92dDD9LKn0flz9M7apW8BdxNBN3qjItNXtzy5p51a5WdiRe9Ip7bPOCq985xxGf6lU3vAjScfCTJ37D90SpGpZAsuLme40oPdGooDQm3fv63Nsw8cKoruRvRAjUDvjcobl%2BFDTTWyAYkZiodL1oDTUMXpm7nu0EZO2lKJ1grxW%2FtD%2FQpz6KiqmJ7FWvyL0MCtA0yRwXWW7uuCdVjvanJbcs1m%2B%2FZ9nfGfVLP7rK6SfNSy7vIylnldAuXL3GD5%2FK80yozs4c40vSPpkIjmQSIbzAAkUKElAIsIWFUPa7fJRo7eUBjybOFujsKDBMS%2FgJ0pKHspFm27kTSLnGvX3rzX0%2FONgQgMQLbH2RlrRAeJWDer7nuJ3FEcJioSQdh1OV1J5Tt1xWFNoz64%2F6pNiVhA59bJjHO4xJx4W9PSzIQD%2B85p6yH1x1Xb4bHF%2F%2FiMX3Cq6ytw0mxeFtWf0tJL3j5Y7hoWNd%2FaoWq%2BHWM1vMarLf3U2gyOHEFor35XZMBUUKpNXCtH2PEWowcEoWYrp0dGIx9wtKRiSlfw0hj0zP3NVpvASZS0mUeanemJUyW4zm427rtn8Q%2FABqiqB%2Bnr6QEcCgkUHDDRoZTBBjqkAV0Phs3MSv%2BTvCSRcnwoW7cwXGeBwtwylZnKXBDTUFZPD%2FqSNii7UsjA4PdhEhdciV8RHrSaX82EPWp86El3CPpgH4H2Wm%2Fv5YQFqv0vsoiHNokDWGw7NBbf2HszkP%2FohMHPijhMVugTGjOZcvLnDyTxxxo7iD8kMkKFWqPcrWRQg4B%2BTQpV4FIgBhWQaNoWy0zEBl9SdIp9APSnnpBNMmmokIYt&X-Amz-Signature=1a271a2ba1e8aa01050e5bb414b4d048941d543ed4fe61eba3e6ee6199da9ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636J3VKMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCMF2pGD8PcIhpCTDKGdKPwB851JQEvn6UxRXgcabBaYwIhANy6kpOm4tH3KRW8PhHi%2BLMxKBaP1G%2Bqd%2B9Rn846QoXZKv8DCB8QABoMNjM3NDIzMTgzODA1Igz8R8XKJTLfh5TCZOwq3AONNUFyGK2dCqMa2HxAwwAGXyhzExbyw0U92dDD9LKn0flz9M7apW8BdxNBN3qjItNXtzy5p51a5WdiRe9Ip7bPOCq985xxGf6lU3vAjScfCTJ37D90SpGpZAsuLme40oPdGooDQm3fv63Nsw8cKoruRvRAjUDvjcobl%2BFDTTWyAYkZiodL1oDTUMXpm7nu0EZO2lKJ1grxW%2FtD%2FQpz6KiqmJ7FWvyL0MCtA0yRwXWW7uuCdVjvanJbcs1m%2B%2FZ9nfGfVLP7rK6SfNSy7vIylnldAuXL3GD5%2FK80yozs4c40vSPpkIjmQSIbzAAkUKElAIsIWFUPa7fJRo7eUBjybOFujsKDBMS%2FgJ0pKHspFm27kTSLnGvX3rzX0%2FONgQgMQLbH2RlrRAeJWDer7nuJ3FEcJioSQdh1OV1J5Tt1xWFNoz64%2F6pNiVhA59bJjHO4xJx4W9PSzIQD%2B85p6yH1x1Xb4bHF%2F%2FiMX3Cq6ytw0mxeFtWf0tJL3j5Y7hoWNd%2FaoWq%2BHWM1vMarLf3U2gyOHEFor35XZMBUUKpNXCtH2PEWowcEoWYrp0dGIx9wtKRiSlfw0hj0zP3NVpvASZS0mUeanemJUyW4zm427rtn8Q%2FABqiqB%2Bnr6QEcCgkUHDDRoZTBBjqkAV0Phs3MSv%2BTvCSRcnwoW7cwXGeBwtwylZnKXBDTUFZPD%2FqSNii7UsjA4PdhEhdciV8RHrSaX82EPWp86El3CPpgH4H2Wm%2Fv5YQFqv0vsoiHNokDWGw7NBbf2HszkP%2FohMHPijhMVugTGjOZcvLnDyTxxxo7iD8kMkKFWqPcrWRQg4B%2BTQpV4FIgBhWQaNoWy0zEBl9SdIp9APSnnpBNMmmokIYt&X-Amz-Signature=fa849b485025a2af7f5c2a632edc89f5695d1b32aab36a4e58a7ca0ccc8dfef2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636J3VKMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCMF2pGD8PcIhpCTDKGdKPwB851JQEvn6UxRXgcabBaYwIhANy6kpOm4tH3KRW8PhHi%2BLMxKBaP1G%2Bqd%2B9Rn846QoXZKv8DCB8QABoMNjM3NDIzMTgzODA1Igz8R8XKJTLfh5TCZOwq3AONNUFyGK2dCqMa2HxAwwAGXyhzExbyw0U92dDD9LKn0flz9M7apW8BdxNBN3qjItNXtzy5p51a5WdiRe9Ip7bPOCq985xxGf6lU3vAjScfCTJ37D90SpGpZAsuLme40oPdGooDQm3fv63Nsw8cKoruRvRAjUDvjcobl%2BFDTTWyAYkZiodL1oDTUMXpm7nu0EZO2lKJ1grxW%2FtD%2FQpz6KiqmJ7FWvyL0MCtA0yRwXWW7uuCdVjvanJbcs1m%2B%2FZ9nfGfVLP7rK6SfNSy7vIylnldAuXL3GD5%2FK80yozs4c40vSPpkIjmQSIbzAAkUKElAIsIWFUPa7fJRo7eUBjybOFujsKDBMS%2FgJ0pKHspFm27kTSLnGvX3rzX0%2FONgQgMQLbH2RlrRAeJWDer7nuJ3FEcJioSQdh1OV1J5Tt1xWFNoz64%2F6pNiVhA59bJjHO4xJx4W9PSzIQD%2B85p6yH1x1Xb4bHF%2F%2FiMX3Cq6ytw0mxeFtWf0tJL3j5Y7hoWNd%2FaoWq%2BHWM1vMarLf3U2gyOHEFor35XZMBUUKpNXCtH2PEWowcEoWYrp0dGIx9wtKRiSlfw0hj0zP3NVpvASZS0mUeanemJUyW4zm427rtn8Q%2FABqiqB%2Bnr6QEcCgkUHDDRoZTBBjqkAV0Phs3MSv%2BTvCSRcnwoW7cwXGeBwtwylZnKXBDTUFZPD%2FqSNii7UsjA4PdhEhdciV8RHrSaX82EPWp86El3CPpgH4H2Wm%2Fv5YQFqv0vsoiHNokDWGw7NBbf2HszkP%2FohMHPijhMVugTGjOZcvLnDyTxxxo7iD8kMkKFWqPcrWRQg4B%2BTQpV4FIgBhWQaNoWy0zEBl9SdIp9APSnnpBNMmmokIYt&X-Amz-Signature=adc90caaeb5be14f7a58d7ecffe91bbd910973bdde8a1a1e515f140700c8c5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636J3VKMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCMF2pGD8PcIhpCTDKGdKPwB851JQEvn6UxRXgcabBaYwIhANy6kpOm4tH3KRW8PhHi%2BLMxKBaP1G%2Bqd%2B9Rn846QoXZKv8DCB8QABoMNjM3NDIzMTgzODA1Igz8R8XKJTLfh5TCZOwq3AONNUFyGK2dCqMa2HxAwwAGXyhzExbyw0U92dDD9LKn0flz9M7apW8BdxNBN3qjItNXtzy5p51a5WdiRe9Ip7bPOCq985xxGf6lU3vAjScfCTJ37D90SpGpZAsuLme40oPdGooDQm3fv63Nsw8cKoruRvRAjUDvjcobl%2BFDTTWyAYkZiodL1oDTUMXpm7nu0EZO2lKJ1grxW%2FtD%2FQpz6KiqmJ7FWvyL0MCtA0yRwXWW7uuCdVjvanJbcs1m%2B%2FZ9nfGfVLP7rK6SfNSy7vIylnldAuXL3GD5%2FK80yozs4c40vSPpkIjmQSIbzAAkUKElAIsIWFUPa7fJRo7eUBjybOFujsKDBMS%2FgJ0pKHspFm27kTSLnGvX3rzX0%2FONgQgMQLbH2RlrRAeJWDer7nuJ3FEcJioSQdh1OV1J5Tt1xWFNoz64%2F6pNiVhA59bJjHO4xJx4W9PSzIQD%2B85p6yH1x1Xb4bHF%2F%2FiMX3Cq6ytw0mxeFtWf0tJL3j5Y7hoWNd%2FaoWq%2BHWM1vMarLf3U2gyOHEFor35XZMBUUKpNXCtH2PEWowcEoWYrp0dGIx9wtKRiSlfw0hj0zP3NVpvASZS0mUeanemJUyW4zm427rtn8Q%2FABqiqB%2Bnr6QEcCgkUHDDRoZTBBjqkAV0Phs3MSv%2BTvCSRcnwoW7cwXGeBwtwylZnKXBDTUFZPD%2FqSNii7UsjA4PdhEhdciV8RHrSaX82EPWp86El3CPpgH4H2Wm%2Fv5YQFqv0vsoiHNokDWGw7NBbf2HszkP%2FohMHPijhMVugTGjOZcvLnDyTxxxo7iD8kMkKFWqPcrWRQg4B%2BTQpV4FIgBhWQaNoWy0zEBl9SdIp9APSnnpBNMmmokIYt&X-Amz-Signature=effe4af1c44efa9ccf256df28558bd289e336d1dcd5b03c4fc62cf875eb458d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636J3VKMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCMF2pGD8PcIhpCTDKGdKPwB851JQEvn6UxRXgcabBaYwIhANy6kpOm4tH3KRW8PhHi%2BLMxKBaP1G%2Bqd%2B9Rn846QoXZKv8DCB8QABoMNjM3NDIzMTgzODA1Igz8R8XKJTLfh5TCZOwq3AONNUFyGK2dCqMa2HxAwwAGXyhzExbyw0U92dDD9LKn0flz9M7apW8BdxNBN3qjItNXtzy5p51a5WdiRe9Ip7bPOCq985xxGf6lU3vAjScfCTJ37D90SpGpZAsuLme40oPdGooDQm3fv63Nsw8cKoruRvRAjUDvjcobl%2BFDTTWyAYkZiodL1oDTUMXpm7nu0EZO2lKJ1grxW%2FtD%2FQpz6KiqmJ7FWvyL0MCtA0yRwXWW7uuCdVjvanJbcs1m%2B%2FZ9nfGfVLP7rK6SfNSy7vIylnldAuXL3GD5%2FK80yozs4c40vSPpkIjmQSIbzAAkUKElAIsIWFUPa7fJRo7eUBjybOFujsKDBMS%2FgJ0pKHspFm27kTSLnGvX3rzX0%2FONgQgMQLbH2RlrRAeJWDer7nuJ3FEcJioSQdh1OV1J5Tt1xWFNoz64%2F6pNiVhA59bJjHO4xJx4W9PSzIQD%2B85p6yH1x1Xb4bHF%2F%2FiMX3Cq6ytw0mxeFtWf0tJL3j5Y7hoWNd%2FaoWq%2BHWM1vMarLf3U2gyOHEFor35XZMBUUKpNXCtH2PEWowcEoWYrp0dGIx9wtKRiSlfw0hj0zP3NVpvASZS0mUeanemJUyW4zm427rtn8Q%2FABqiqB%2Bnr6QEcCgkUHDDRoZTBBjqkAV0Phs3MSv%2BTvCSRcnwoW7cwXGeBwtwylZnKXBDTUFZPD%2FqSNii7UsjA4PdhEhdciV8RHrSaX82EPWp86El3CPpgH4H2Wm%2Fv5YQFqv0vsoiHNokDWGw7NBbf2HszkP%2FohMHPijhMVugTGjOZcvLnDyTxxxo7iD8kMkKFWqPcrWRQg4B%2BTQpV4FIgBhWQaNoWy0zEBl9SdIp9APSnnpBNMmmokIYt&X-Amz-Signature=5fde1497fd59ff2e79161797224b4ab55b27deaed65d06796adc3be842abfc33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636J3VKMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCMF2pGD8PcIhpCTDKGdKPwB851JQEvn6UxRXgcabBaYwIhANy6kpOm4tH3KRW8PhHi%2BLMxKBaP1G%2Bqd%2B9Rn846QoXZKv8DCB8QABoMNjM3NDIzMTgzODA1Igz8R8XKJTLfh5TCZOwq3AONNUFyGK2dCqMa2HxAwwAGXyhzExbyw0U92dDD9LKn0flz9M7apW8BdxNBN3qjItNXtzy5p51a5WdiRe9Ip7bPOCq985xxGf6lU3vAjScfCTJ37D90SpGpZAsuLme40oPdGooDQm3fv63Nsw8cKoruRvRAjUDvjcobl%2BFDTTWyAYkZiodL1oDTUMXpm7nu0EZO2lKJ1grxW%2FtD%2FQpz6KiqmJ7FWvyL0MCtA0yRwXWW7uuCdVjvanJbcs1m%2B%2FZ9nfGfVLP7rK6SfNSy7vIylnldAuXL3GD5%2FK80yozs4c40vSPpkIjmQSIbzAAkUKElAIsIWFUPa7fJRo7eUBjybOFujsKDBMS%2FgJ0pKHspFm27kTSLnGvX3rzX0%2FONgQgMQLbH2RlrRAeJWDer7nuJ3FEcJioSQdh1OV1J5Tt1xWFNoz64%2F6pNiVhA59bJjHO4xJx4W9PSzIQD%2B85p6yH1x1Xb4bHF%2F%2FiMX3Cq6ytw0mxeFtWf0tJL3j5Y7hoWNd%2FaoWq%2BHWM1vMarLf3U2gyOHEFor35XZMBUUKpNXCtH2PEWowcEoWYrp0dGIx9wtKRiSlfw0hj0zP3NVpvASZS0mUeanemJUyW4zm427rtn8Q%2FABqiqB%2Bnr6QEcCgkUHDDRoZTBBjqkAV0Phs3MSv%2BTvCSRcnwoW7cwXGeBwtwylZnKXBDTUFZPD%2FqSNii7UsjA4PdhEhdciV8RHrSaX82EPWp86El3CPpgH4H2Wm%2Fv5YQFqv0vsoiHNokDWGw7NBbf2HszkP%2FohMHPijhMVugTGjOZcvLnDyTxxxo7iD8kMkKFWqPcrWRQg4B%2BTQpV4FIgBhWQaNoWy0zEBl9SdIp9APSnnpBNMmmokIYt&X-Amz-Signature=61596487c146c4993e48b61ed423f759ebde810a5acdadb899ea96a1bd943169&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636J3VKMQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCMF2pGD8PcIhpCTDKGdKPwB851JQEvn6UxRXgcabBaYwIhANy6kpOm4tH3KRW8PhHi%2BLMxKBaP1G%2Bqd%2B9Rn846QoXZKv8DCB8QABoMNjM3NDIzMTgzODA1Igz8R8XKJTLfh5TCZOwq3AONNUFyGK2dCqMa2HxAwwAGXyhzExbyw0U92dDD9LKn0flz9M7apW8BdxNBN3qjItNXtzy5p51a5WdiRe9Ip7bPOCq985xxGf6lU3vAjScfCTJ37D90SpGpZAsuLme40oPdGooDQm3fv63Nsw8cKoruRvRAjUDvjcobl%2BFDTTWyAYkZiodL1oDTUMXpm7nu0EZO2lKJ1grxW%2FtD%2FQpz6KiqmJ7FWvyL0MCtA0yRwXWW7uuCdVjvanJbcs1m%2B%2FZ9nfGfVLP7rK6SfNSy7vIylnldAuXL3GD5%2FK80yozs4c40vSPpkIjmQSIbzAAkUKElAIsIWFUPa7fJRo7eUBjybOFujsKDBMS%2FgJ0pKHspFm27kTSLnGvX3rzX0%2FONgQgMQLbH2RlrRAeJWDer7nuJ3FEcJioSQdh1OV1J5Tt1xWFNoz64%2F6pNiVhA59bJjHO4xJx4W9PSzIQD%2B85p6yH1x1Xb4bHF%2F%2FiMX3Cq6ytw0mxeFtWf0tJL3j5Y7hoWNd%2FaoWq%2BHWM1vMarLf3U2gyOHEFor35XZMBUUKpNXCtH2PEWowcEoWYrp0dGIx9wtKRiSlfw0hj0zP3NVpvASZS0mUeanemJUyW4zm427rtn8Q%2FABqiqB%2Bnr6QEcCgkUHDDRoZTBBjqkAV0Phs3MSv%2BTvCSRcnwoW7cwXGeBwtwylZnKXBDTUFZPD%2FqSNii7UsjA4PdhEhdciV8RHrSaX82EPWp86El3CPpgH4H2Wm%2Fv5YQFqv0vsoiHNokDWGw7NBbf2HszkP%2FohMHPijhMVugTGjOZcvLnDyTxxxo7iD8kMkKFWqPcrWRQg4B%2BTQpV4FIgBhWQaNoWy0zEBl9SdIp9APSnnpBNMmmokIYt&X-Amz-Signature=733cd3487316803c2667d7d779671f7f32c8073075e81ce01d399993a022159c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
