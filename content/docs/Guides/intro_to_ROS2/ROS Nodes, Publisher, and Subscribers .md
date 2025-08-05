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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJHQYWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBNdHK6pJqKMaDUz9XDYAfN98ltXxTTP9gIIUroTttr0AiBnaZKgkiXtHAuivfumHgsFzgKJfGxhZ51pmNaef0fJzir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnAA7lscLx2M4BbCPKtwDv1nU4wGvuHKVdQ5wzaytQAV1jrOZ84ATz9%2BaUsnLNVeqKf8Mo%2BqWKT4a5LKPkAsTZ8ShmiGjWB1dzLz5ITgvwyrvbuQBc1XKwpwLJ9SdzcDEs19d1YFq6s6HP1mo2gTkFlbO3HEtC7Hqxdx86mWq%2B1oUXTlcBJ%2BA%2Fui3DeqnHJ9xnYs7AjRAu8dgZVGjD18jOvRLaHM1CxbV8O9zr%2B4rcnR0bcZGVBy%2FW1Wf762W7%2FOC1deWTfrzaWp2v4%2FLOv1C4%2BOzG41JYWG%2FLbvi8AG13NCLner2mOhHE3gQPNus7mY2axog7DFhYZGiyWlGLIGAkmpA2TlRL4K9Px8M3QeU2lI1BR0FBr5rUcX7RtEWZu3CSLSsaEGXEPCvdoOfwqG01Z54QWm%2Fso%2FkuZS6eKXr6N6arY7U2o9rWpU%2BkkAVNg0EE9kg7GxO%2B%2F4k9xZ91aNp0og73u3o2qS8s%2BKgHIPoh%2BDESQggBxgQyGpPNam46MNYoYlbpyXLC%2FzKwJi26SXiqp4BC3bwDi9tBDFwd%2B%2B1CuoXEtBBD%2BK9VfIU5UnFU2vpTx9WYycYcZpI8eIc8K4JvH%2By45%2BnfEkCzaudr7foIkzagOOsVkw6vXG0pS7L4%2Bz6tMDWRDUg1j%2FKUQ8wxqzHxAY6pgEpGljdYtrY8rbYY1td65ib2LCQji436Nxgu%2Ftzk%2Bs3nUZUbyGa9FE8POMQiiSE8iNGzY4R%2F5S3JXIrLKD9k72Jj9k8UqeJ7IvaP5TsRv7fRNVNMU9mSfGiMn8q7VLuNeup0ofIG4OO%2Baxor2vUqyydHPW6HY5CexpcfjRqhE0AhwAylYpazVvfEmA3TLpPh7JykvsgJKHq306z9Td0zLKuQ1V5ilVj&X-Amz-Signature=e1d55f36ad74761e5f8c00db97501926325d29576e638dba4da17507ab073a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJHQYWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBNdHK6pJqKMaDUz9XDYAfN98ltXxTTP9gIIUroTttr0AiBnaZKgkiXtHAuivfumHgsFzgKJfGxhZ51pmNaef0fJzir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnAA7lscLx2M4BbCPKtwDv1nU4wGvuHKVdQ5wzaytQAV1jrOZ84ATz9%2BaUsnLNVeqKf8Mo%2BqWKT4a5LKPkAsTZ8ShmiGjWB1dzLz5ITgvwyrvbuQBc1XKwpwLJ9SdzcDEs19d1YFq6s6HP1mo2gTkFlbO3HEtC7Hqxdx86mWq%2B1oUXTlcBJ%2BA%2Fui3DeqnHJ9xnYs7AjRAu8dgZVGjD18jOvRLaHM1CxbV8O9zr%2B4rcnR0bcZGVBy%2FW1Wf762W7%2FOC1deWTfrzaWp2v4%2FLOv1C4%2BOzG41JYWG%2FLbvi8AG13NCLner2mOhHE3gQPNus7mY2axog7DFhYZGiyWlGLIGAkmpA2TlRL4K9Px8M3QeU2lI1BR0FBr5rUcX7RtEWZu3CSLSsaEGXEPCvdoOfwqG01Z54QWm%2Fso%2FkuZS6eKXr6N6arY7U2o9rWpU%2BkkAVNg0EE9kg7GxO%2B%2F4k9xZ91aNp0og73u3o2qS8s%2BKgHIPoh%2BDESQggBxgQyGpPNam46MNYoYlbpyXLC%2FzKwJi26SXiqp4BC3bwDi9tBDFwd%2B%2B1CuoXEtBBD%2BK9VfIU5UnFU2vpTx9WYycYcZpI8eIc8K4JvH%2By45%2BnfEkCzaudr7foIkzagOOsVkw6vXG0pS7L4%2Bz6tMDWRDUg1j%2FKUQ8wxqzHxAY6pgEpGljdYtrY8rbYY1td65ib2LCQji436Nxgu%2Ftzk%2Bs3nUZUbyGa9FE8POMQiiSE8iNGzY4R%2F5S3JXIrLKD9k72Jj9k8UqeJ7IvaP5TsRv7fRNVNMU9mSfGiMn8q7VLuNeup0ofIG4OO%2Baxor2vUqyydHPW6HY5CexpcfjRqhE0AhwAylYpazVvfEmA3TLpPh7JykvsgJKHq306z9Td0zLKuQ1V5ilVj&X-Amz-Signature=81f66548897f207393d836bdd6bcccfe1f165d5606dc1a19c3b8173481bef5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJHQYWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBNdHK6pJqKMaDUz9XDYAfN98ltXxTTP9gIIUroTttr0AiBnaZKgkiXtHAuivfumHgsFzgKJfGxhZ51pmNaef0fJzir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnAA7lscLx2M4BbCPKtwDv1nU4wGvuHKVdQ5wzaytQAV1jrOZ84ATz9%2BaUsnLNVeqKf8Mo%2BqWKT4a5LKPkAsTZ8ShmiGjWB1dzLz5ITgvwyrvbuQBc1XKwpwLJ9SdzcDEs19d1YFq6s6HP1mo2gTkFlbO3HEtC7Hqxdx86mWq%2B1oUXTlcBJ%2BA%2Fui3DeqnHJ9xnYs7AjRAu8dgZVGjD18jOvRLaHM1CxbV8O9zr%2B4rcnR0bcZGVBy%2FW1Wf762W7%2FOC1deWTfrzaWp2v4%2FLOv1C4%2BOzG41JYWG%2FLbvi8AG13NCLner2mOhHE3gQPNus7mY2axog7DFhYZGiyWlGLIGAkmpA2TlRL4K9Px8M3QeU2lI1BR0FBr5rUcX7RtEWZu3CSLSsaEGXEPCvdoOfwqG01Z54QWm%2Fso%2FkuZS6eKXr6N6arY7U2o9rWpU%2BkkAVNg0EE9kg7GxO%2B%2F4k9xZ91aNp0og73u3o2qS8s%2BKgHIPoh%2BDESQggBxgQyGpPNam46MNYoYlbpyXLC%2FzKwJi26SXiqp4BC3bwDi9tBDFwd%2B%2B1CuoXEtBBD%2BK9VfIU5UnFU2vpTx9WYycYcZpI8eIc8K4JvH%2By45%2BnfEkCzaudr7foIkzagOOsVkw6vXG0pS7L4%2Bz6tMDWRDUg1j%2FKUQ8wxqzHxAY6pgEpGljdYtrY8rbYY1td65ib2LCQji436Nxgu%2Ftzk%2Bs3nUZUbyGa9FE8POMQiiSE8iNGzY4R%2F5S3JXIrLKD9k72Jj9k8UqeJ7IvaP5TsRv7fRNVNMU9mSfGiMn8q7VLuNeup0ofIG4OO%2Baxor2vUqyydHPW6HY5CexpcfjRqhE0AhwAylYpazVvfEmA3TLpPh7JykvsgJKHq306z9Td0zLKuQ1V5ilVj&X-Amz-Signature=1f76ace93074a1d01b78f7926bf78a468cc5623047cf2c1680510dcaf7c714bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJHQYWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBNdHK6pJqKMaDUz9XDYAfN98ltXxTTP9gIIUroTttr0AiBnaZKgkiXtHAuivfumHgsFzgKJfGxhZ51pmNaef0fJzir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnAA7lscLx2M4BbCPKtwDv1nU4wGvuHKVdQ5wzaytQAV1jrOZ84ATz9%2BaUsnLNVeqKf8Mo%2BqWKT4a5LKPkAsTZ8ShmiGjWB1dzLz5ITgvwyrvbuQBc1XKwpwLJ9SdzcDEs19d1YFq6s6HP1mo2gTkFlbO3HEtC7Hqxdx86mWq%2B1oUXTlcBJ%2BA%2Fui3DeqnHJ9xnYs7AjRAu8dgZVGjD18jOvRLaHM1CxbV8O9zr%2B4rcnR0bcZGVBy%2FW1Wf762W7%2FOC1deWTfrzaWp2v4%2FLOv1C4%2BOzG41JYWG%2FLbvi8AG13NCLner2mOhHE3gQPNus7mY2axog7DFhYZGiyWlGLIGAkmpA2TlRL4K9Px8M3QeU2lI1BR0FBr5rUcX7RtEWZu3CSLSsaEGXEPCvdoOfwqG01Z54QWm%2Fso%2FkuZS6eKXr6N6arY7U2o9rWpU%2BkkAVNg0EE9kg7GxO%2B%2F4k9xZ91aNp0og73u3o2qS8s%2BKgHIPoh%2BDESQggBxgQyGpPNam46MNYoYlbpyXLC%2FzKwJi26SXiqp4BC3bwDi9tBDFwd%2B%2B1CuoXEtBBD%2BK9VfIU5UnFU2vpTx9WYycYcZpI8eIc8K4JvH%2By45%2BnfEkCzaudr7foIkzagOOsVkw6vXG0pS7L4%2Bz6tMDWRDUg1j%2FKUQ8wxqzHxAY6pgEpGljdYtrY8rbYY1td65ib2LCQji436Nxgu%2Ftzk%2Bs3nUZUbyGa9FE8POMQiiSE8iNGzY4R%2F5S3JXIrLKD9k72Jj9k8UqeJ7IvaP5TsRv7fRNVNMU9mSfGiMn8q7VLuNeup0ofIG4OO%2Baxor2vUqyydHPW6HY5CexpcfjRqhE0AhwAylYpazVvfEmA3TLpPh7JykvsgJKHq306z9Td0zLKuQ1V5ilVj&X-Amz-Signature=f58b2521c97d573b56cf3b662dc9d3f17bd18d69e3991fe20c060ed5ef7a8845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJHQYWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBNdHK6pJqKMaDUz9XDYAfN98ltXxTTP9gIIUroTttr0AiBnaZKgkiXtHAuivfumHgsFzgKJfGxhZ51pmNaef0fJzir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnAA7lscLx2M4BbCPKtwDv1nU4wGvuHKVdQ5wzaytQAV1jrOZ84ATz9%2BaUsnLNVeqKf8Mo%2BqWKT4a5LKPkAsTZ8ShmiGjWB1dzLz5ITgvwyrvbuQBc1XKwpwLJ9SdzcDEs19d1YFq6s6HP1mo2gTkFlbO3HEtC7Hqxdx86mWq%2B1oUXTlcBJ%2BA%2Fui3DeqnHJ9xnYs7AjRAu8dgZVGjD18jOvRLaHM1CxbV8O9zr%2B4rcnR0bcZGVBy%2FW1Wf762W7%2FOC1deWTfrzaWp2v4%2FLOv1C4%2BOzG41JYWG%2FLbvi8AG13NCLner2mOhHE3gQPNus7mY2axog7DFhYZGiyWlGLIGAkmpA2TlRL4K9Px8M3QeU2lI1BR0FBr5rUcX7RtEWZu3CSLSsaEGXEPCvdoOfwqG01Z54QWm%2Fso%2FkuZS6eKXr6N6arY7U2o9rWpU%2BkkAVNg0EE9kg7GxO%2B%2F4k9xZ91aNp0og73u3o2qS8s%2BKgHIPoh%2BDESQggBxgQyGpPNam46MNYoYlbpyXLC%2FzKwJi26SXiqp4BC3bwDi9tBDFwd%2B%2B1CuoXEtBBD%2BK9VfIU5UnFU2vpTx9WYycYcZpI8eIc8K4JvH%2By45%2BnfEkCzaudr7foIkzagOOsVkw6vXG0pS7L4%2Bz6tMDWRDUg1j%2FKUQ8wxqzHxAY6pgEpGljdYtrY8rbYY1td65ib2LCQji436Nxgu%2Ftzk%2Bs3nUZUbyGa9FE8POMQiiSE8iNGzY4R%2F5S3JXIrLKD9k72Jj9k8UqeJ7IvaP5TsRv7fRNVNMU9mSfGiMn8q7VLuNeup0ofIG4OO%2Baxor2vUqyydHPW6HY5CexpcfjRqhE0AhwAylYpazVvfEmA3TLpPh7JykvsgJKHq306z9Td0zLKuQ1V5ilVj&X-Amz-Signature=4f6eb7efb45e94185744edf3161181b6ea491df81140f91258a306618e80f94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJHQYWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBNdHK6pJqKMaDUz9XDYAfN98ltXxTTP9gIIUroTttr0AiBnaZKgkiXtHAuivfumHgsFzgKJfGxhZ51pmNaef0fJzir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnAA7lscLx2M4BbCPKtwDv1nU4wGvuHKVdQ5wzaytQAV1jrOZ84ATz9%2BaUsnLNVeqKf8Mo%2BqWKT4a5LKPkAsTZ8ShmiGjWB1dzLz5ITgvwyrvbuQBc1XKwpwLJ9SdzcDEs19d1YFq6s6HP1mo2gTkFlbO3HEtC7Hqxdx86mWq%2B1oUXTlcBJ%2BA%2Fui3DeqnHJ9xnYs7AjRAu8dgZVGjD18jOvRLaHM1CxbV8O9zr%2B4rcnR0bcZGVBy%2FW1Wf762W7%2FOC1deWTfrzaWp2v4%2FLOv1C4%2BOzG41JYWG%2FLbvi8AG13NCLner2mOhHE3gQPNus7mY2axog7DFhYZGiyWlGLIGAkmpA2TlRL4K9Px8M3QeU2lI1BR0FBr5rUcX7RtEWZu3CSLSsaEGXEPCvdoOfwqG01Z54QWm%2Fso%2FkuZS6eKXr6N6arY7U2o9rWpU%2BkkAVNg0EE9kg7GxO%2B%2F4k9xZ91aNp0og73u3o2qS8s%2BKgHIPoh%2BDESQggBxgQyGpPNam46MNYoYlbpyXLC%2FzKwJi26SXiqp4BC3bwDi9tBDFwd%2B%2B1CuoXEtBBD%2BK9VfIU5UnFU2vpTx9WYycYcZpI8eIc8K4JvH%2By45%2BnfEkCzaudr7foIkzagOOsVkw6vXG0pS7L4%2Bz6tMDWRDUg1j%2FKUQ8wxqzHxAY6pgEpGljdYtrY8rbYY1td65ib2LCQji436Nxgu%2Ftzk%2Bs3nUZUbyGa9FE8POMQiiSE8iNGzY4R%2F5S3JXIrLKD9k72Jj9k8UqeJ7IvaP5TsRv7fRNVNMU9mSfGiMn8q7VLuNeup0ofIG4OO%2Baxor2vUqyydHPW6HY5CexpcfjRqhE0AhwAylYpazVvfEmA3TLpPh7JykvsgJKHq306z9Td0zLKuQ1V5ilVj&X-Amz-Signature=f1e64d975f239c23d4c0839e4ad1c1f06eca566d81dc33bba3d70ee793237b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJHQYWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBNdHK6pJqKMaDUz9XDYAfN98ltXxTTP9gIIUroTttr0AiBnaZKgkiXtHAuivfumHgsFzgKJfGxhZ51pmNaef0fJzir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnAA7lscLx2M4BbCPKtwDv1nU4wGvuHKVdQ5wzaytQAV1jrOZ84ATz9%2BaUsnLNVeqKf8Mo%2BqWKT4a5LKPkAsTZ8ShmiGjWB1dzLz5ITgvwyrvbuQBc1XKwpwLJ9SdzcDEs19d1YFq6s6HP1mo2gTkFlbO3HEtC7Hqxdx86mWq%2B1oUXTlcBJ%2BA%2Fui3DeqnHJ9xnYs7AjRAu8dgZVGjD18jOvRLaHM1CxbV8O9zr%2B4rcnR0bcZGVBy%2FW1Wf762W7%2FOC1deWTfrzaWp2v4%2FLOv1C4%2BOzG41JYWG%2FLbvi8AG13NCLner2mOhHE3gQPNus7mY2axog7DFhYZGiyWlGLIGAkmpA2TlRL4K9Px8M3QeU2lI1BR0FBr5rUcX7RtEWZu3CSLSsaEGXEPCvdoOfwqG01Z54QWm%2Fso%2FkuZS6eKXr6N6arY7U2o9rWpU%2BkkAVNg0EE9kg7GxO%2B%2F4k9xZ91aNp0og73u3o2qS8s%2BKgHIPoh%2BDESQggBxgQyGpPNam46MNYoYlbpyXLC%2FzKwJi26SXiqp4BC3bwDi9tBDFwd%2B%2B1CuoXEtBBD%2BK9VfIU5UnFU2vpTx9WYycYcZpI8eIc8K4JvH%2By45%2BnfEkCzaudr7foIkzagOOsVkw6vXG0pS7L4%2Bz6tMDWRDUg1j%2FKUQ8wxqzHxAY6pgEpGljdYtrY8rbYY1td65ib2LCQji436Nxgu%2Ftzk%2Bs3nUZUbyGa9FE8POMQiiSE8iNGzY4R%2F5S3JXIrLKD9k72Jj9k8UqeJ7IvaP5TsRv7fRNVNMU9mSfGiMn8q7VLuNeup0ofIG4OO%2Baxor2vUqyydHPW6HY5CexpcfjRqhE0AhwAylYpazVvfEmA3TLpPh7JykvsgJKHq306z9Td0zLKuQ1V5ilVj&X-Amz-Signature=50e93be99a264cdc6a4b4017f422c41fbc5f1cad378b53f04c5f574a5f8ca6d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJHQYWC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBNdHK6pJqKMaDUz9XDYAfN98ltXxTTP9gIIUroTttr0AiBnaZKgkiXtHAuivfumHgsFzgKJfGxhZ51pmNaef0fJzir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnAA7lscLx2M4BbCPKtwDv1nU4wGvuHKVdQ5wzaytQAV1jrOZ84ATz9%2BaUsnLNVeqKf8Mo%2BqWKT4a5LKPkAsTZ8ShmiGjWB1dzLz5ITgvwyrvbuQBc1XKwpwLJ9SdzcDEs19d1YFq6s6HP1mo2gTkFlbO3HEtC7Hqxdx86mWq%2B1oUXTlcBJ%2BA%2Fui3DeqnHJ9xnYs7AjRAu8dgZVGjD18jOvRLaHM1CxbV8O9zr%2B4rcnR0bcZGVBy%2FW1Wf762W7%2FOC1deWTfrzaWp2v4%2FLOv1C4%2BOzG41JYWG%2FLbvi8AG13NCLner2mOhHE3gQPNus7mY2axog7DFhYZGiyWlGLIGAkmpA2TlRL4K9Px8M3QeU2lI1BR0FBr5rUcX7RtEWZu3CSLSsaEGXEPCvdoOfwqG01Z54QWm%2Fso%2FkuZS6eKXr6N6arY7U2o9rWpU%2BkkAVNg0EE9kg7GxO%2B%2F4k9xZ91aNp0og73u3o2qS8s%2BKgHIPoh%2BDESQggBxgQyGpPNam46MNYoYlbpyXLC%2FzKwJi26SXiqp4BC3bwDi9tBDFwd%2B%2B1CuoXEtBBD%2BK9VfIU5UnFU2vpTx9WYycYcZpI8eIc8K4JvH%2By45%2BnfEkCzaudr7foIkzagOOsVkw6vXG0pS7L4%2Bz6tMDWRDUg1j%2FKUQ8wxqzHxAY6pgEpGljdYtrY8rbYY1td65ib2LCQji436Nxgu%2Ftzk%2Bs3nUZUbyGa9FE8POMQiiSE8iNGzY4R%2F5S3JXIrLKD9k72Jj9k8UqeJ7IvaP5TsRv7fRNVNMU9mSfGiMn8q7VLuNeup0ofIG4OO%2Baxor2vUqyydHPW6HY5CexpcfjRqhE0AhwAylYpazVvfEmA3TLpPh7JykvsgJKHq306z9Td0zLKuQ1V5ilVj&X-Amz-Signature=e5accf8986d40e8bd8d28404f8046662ee959556510166129380808d5f484b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
