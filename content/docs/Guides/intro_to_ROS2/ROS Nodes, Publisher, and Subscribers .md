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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=3d9889e3c060c1b8f57056e9747f15d83529dde2eb6b39ec064eafd57dc53ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=b242a8cce5deca1ef642281661f38b3b8b61a6b0ded17feb2d9f0ed9928f2282&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=c1bd2fc9c8a2b2f503ef78e76890af08fac0d4dd7201186223d1c920e671eef2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=2a48407a6c2f7a47c9d8e5592234c16b3a309a2b48af92a7f5dee82508dada15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=3261c74fa3e74098bd9c0df65ba8bbb123490ae552bf494b673bdb2300ef98eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=98c7c59172f94dabb1156fb173d33bef7fdae24d0aedcc1451c765d74c0070c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=a7405b30a54f083d3dfe01c7c27b95e015d96c15ea1c8d6e0bafee4742c53cff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMTEZT4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAb9rlT8YE5rEDdbO0WGcgpxKtVSHn0PIwSQvATy12uIAiEAq8J9D%2BgUysuwe6XKOmtoWUHPrS3jDK5eGyMPKVdO410q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOLRA82t8ZrsW3Wg5ircAzav4lZos%2BXtCrvzETqIGZbk3%2FRM%2FIYypH4XU2Wwygo9fhzwc9KeRQsQo76Ew0JS%2FwHf0KB89T3h2nDyv%2BG2O0rK2aIYDfJJ9cXCoBWnE0%2FEYIG32J2O%2F8vDofmSLZgytxDCfC8XTeoYx8tLuRPXT28f%2FERbqnu%2FARSTUegjfWDyqUGdgcMwFXjJWl327QliD49Ji%2Fy%2F2vrA2zMc2ThDEQidVBBQl5RfRwx%2BWfLQbBxWpLkveLm1fGpmuE%2BCvoFQ7IBLiYC0QUcQONUO0rXbJ1mOE7kGnCH6I9D9FAUydoOjj2YDUdPYKCn4R6TNi8Mb5rg2i2ypopFTEowkicBNXCkVgeLNW82llTay0EQMJldkNS9AVxdYDNbcQDazDhhvCgjOyhn71wgldwGJZZA9EDTKZFLL30VF%2FZdL4i%2FBop9qzimSZj6s5%2ByeeJnkN6Q2zdxg%2Fmf6ejoKugZ1g%2FnV5WRYhZpYc6I6zO%2FO4wNH%2FZ6GAyOBb2IqCVsClITIAtUh%2FNB%2B1Xl2kWYjOYA925B8mV7kxN0cgIoO0PmxUxZ3F5c2oNNe8tH%2B7RPBr4WxLTVJlrOZgHA9iVS0t0tU%2FHkHMGTEbN8BDeZN4HkedQUlvqtC9m1jZeN0etSMiRJUMNKKusAGOqUB%2F5H6Ev1XLY4vU2eMoPHHcKjC059Ut6Vn3KN3MVCXiCnZ3CB6%2BOqwMGq9NSdmHsuXf4TnM%2Fvpzf7eBERKpIOe3Dxpv2Qd3PfQMzBY9VCZfLxrIN3U7OuuyG2Mb1QSG0fQzq43sy0kOq6Sv%2Bqc1uio6U0a3awK7SHn4DtoEHZs01TXyZusNwqYCtpI%2FIC2VSx5TlFzqQePESqKPDgKhftRnn1qcj0e&X-Amz-Signature=ad7d9de89de0205f1d721b66fa5d9cbb6623941c4f34f012b2aa6578aeb2e288&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
