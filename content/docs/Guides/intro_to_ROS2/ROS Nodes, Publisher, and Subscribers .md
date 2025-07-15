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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETJWSK6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG5XfHjKEiXhYXEtE2YUw4AtCqw0im28ld3Po%2B4pFqbYAiEA%2FXFsGVRN2nHfPwxAiKX6FKpZK5nVAzEXDIalkxB%2BE0sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDZ66WDyXKucEsEyFyrcAygMAbXzGFvaIHiVSJ6YPP0rcuoRzdGsdnfCZ7mrhURHaO8jKNTZ0T43deccdGoa3BnqulTXYxbaCtzKYs14dLiyV5U6Avgr00szp8t8tFuzl7UA3YVhuCHJz9YBhEjU2fEs1h30Om0C5b0SggPxK%2FaDkvjsCTPjwOcDLfgPKgcYkgymXWSx1jcKFv843t1f8htGEbN8kBjl6JwnxoMWWcI1nrV1zOppVU%2BBRY38fyIrBOK9sI%2FEP2%2BOYW2jqGqtlI0ARvhLh1y4TSHW62tOI3mzHjAl40%2Fpj3uJ0VfV1zKttc6ehBY7y1GSZdzaXWG%2Fap9qfE%2Bw1hs8M6QNnP%2FE5nFi4c6gL4EtA%2BQlC0%2BklThFP1SJgTPPpEDR754b4TBeoAKL1AgDrQAtRZVBUaXpEkClP2KNe7v0KzsKd%2BDnFAIhJ75F%2FI51MlDtcmUbqFdGoGxIluKOelEol2R91yaKR9jkn104RrY6qGM9ObTcPn2iyVWIGIQNcT0pCbGcX5JBVH6hcOYwKrr5tIv3%2BqWHM%2FBJZ%2FEebgda3kTGQPJMa1KLglW6R%2F9bjIbABb4j2%2Fr9quo0pP54RTtpWsS%2FOjfJRSYlIRYSickVDCqqN6zvXKkI%2FAE9z%2F4zYtox%2BxrBMIWG2sMGOqUBL7LAlP9huHv%2FVSu4QSE4%2FAEooQETopZiMQtQk8mTptTM6Cqd1Cbms8hsqMt6RM0oiwEjg0xOUnprvwR8hnkO%2FUJHiWMaqMd4zrfsWSA7y3ahMpi2a9gX5BA6c4IQYqGcDSks9cnpfq8kAuzGg7jhucd%2FMXnpKxr7H2VzmsiItZ%2FudzOxNu7TBEUIHjNsEqDPOgs8SMTKrw0%2FHS4z3NvAQt7wYUWR&X-Amz-Signature=a7f3826e48b7f580ccec66f41e6e4e6f0bce20b580ce439ebae7819949359c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETJWSK6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG5XfHjKEiXhYXEtE2YUw4AtCqw0im28ld3Po%2B4pFqbYAiEA%2FXFsGVRN2nHfPwxAiKX6FKpZK5nVAzEXDIalkxB%2BE0sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDZ66WDyXKucEsEyFyrcAygMAbXzGFvaIHiVSJ6YPP0rcuoRzdGsdnfCZ7mrhURHaO8jKNTZ0T43deccdGoa3BnqulTXYxbaCtzKYs14dLiyV5U6Avgr00szp8t8tFuzl7UA3YVhuCHJz9YBhEjU2fEs1h30Om0C5b0SggPxK%2FaDkvjsCTPjwOcDLfgPKgcYkgymXWSx1jcKFv843t1f8htGEbN8kBjl6JwnxoMWWcI1nrV1zOppVU%2BBRY38fyIrBOK9sI%2FEP2%2BOYW2jqGqtlI0ARvhLh1y4TSHW62tOI3mzHjAl40%2Fpj3uJ0VfV1zKttc6ehBY7y1GSZdzaXWG%2Fap9qfE%2Bw1hs8M6QNnP%2FE5nFi4c6gL4EtA%2BQlC0%2BklThFP1SJgTPPpEDR754b4TBeoAKL1AgDrQAtRZVBUaXpEkClP2KNe7v0KzsKd%2BDnFAIhJ75F%2FI51MlDtcmUbqFdGoGxIluKOelEol2R91yaKR9jkn104RrY6qGM9ObTcPn2iyVWIGIQNcT0pCbGcX5JBVH6hcOYwKrr5tIv3%2BqWHM%2FBJZ%2FEebgda3kTGQPJMa1KLglW6R%2F9bjIbABb4j2%2Fr9quo0pP54RTtpWsS%2FOjfJRSYlIRYSickVDCqqN6zvXKkI%2FAE9z%2F4zYtox%2BxrBMIWG2sMGOqUBL7LAlP9huHv%2FVSu4QSE4%2FAEooQETopZiMQtQk8mTptTM6Cqd1Cbms8hsqMt6RM0oiwEjg0xOUnprvwR8hnkO%2FUJHiWMaqMd4zrfsWSA7y3ahMpi2a9gX5BA6c4IQYqGcDSks9cnpfq8kAuzGg7jhucd%2FMXnpKxr7H2VzmsiItZ%2FudzOxNu7TBEUIHjNsEqDPOgs8SMTKrw0%2FHS4z3NvAQt7wYUWR&X-Amz-Signature=d2d93b6ea08f0289f2f4a44317cac4abec7a9de8a3d73b7bc09582630a233b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETJWSK6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG5XfHjKEiXhYXEtE2YUw4AtCqw0im28ld3Po%2B4pFqbYAiEA%2FXFsGVRN2nHfPwxAiKX6FKpZK5nVAzEXDIalkxB%2BE0sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDZ66WDyXKucEsEyFyrcAygMAbXzGFvaIHiVSJ6YPP0rcuoRzdGsdnfCZ7mrhURHaO8jKNTZ0T43deccdGoa3BnqulTXYxbaCtzKYs14dLiyV5U6Avgr00szp8t8tFuzl7UA3YVhuCHJz9YBhEjU2fEs1h30Om0C5b0SggPxK%2FaDkvjsCTPjwOcDLfgPKgcYkgymXWSx1jcKFv843t1f8htGEbN8kBjl6JwnxoMWWcI1nrV1zOppVU%2BBRY38fyIrBOK9sI%2FEP2%2BOYW2jqGqtlI0ARvhLh1y4TSHW62tOI3mzHjAl40%2Fpj3uJ0VfV1zKttc6ehBY7y1GSZdzaXWG%2Fap9qfE%2Bw1hs8M6QNnP%2FE5nFi4c6gL4EtA%2BQlC0%2BklThFP1SJgTPPpEDR754b4TBeoAKL1AgDrQAtRZVBUaXpEkClP2KNe7v0KzsKd%2BDnFAIhJ75F%2FI51MlDtcmUbqFdGoGxIluKOelEol2R91yaKR9jkn104RrY6qGM9ObTcPn2iyVWIGIQNcT0pCbGcX5JBVH6hcOYwKrr5tIv3%2BqWHM%2FBJZ%2FEebgda3kTGQPJMa1KLglW6R%2F9bjIbABb4j2%2Fr9quo0pP54RTtpWsS%2FOjfJRSYlIRYSickVDCqqN6zvXKkI%2FAE9z%2F4zYtox%2BxrBMIWG2sMGOqUBL7LAlP9huHv%2FVSu4QSE4%2FAEooQETopZiMQtQk8mTptTM6Cqd1Cbms8hsqMt6RM0oiwEjg0xOUnprvwR8hnkO%2FUJHiWMaqMd4zrfsWSA7y3ahMpi2a9gX5BA6c4IQYqGcDSks9cnpfq8kAuzGg7jhucd%2FMXnpKxr7H2VzmsiItZ%2FudzOxNu7TBEUIHjNsEqDPOgs8SMTKrw0%2FHS4z3NvAQt7wYUWR&X-Amz-Signature=1dbfa05ba31b89f21d411c23f1b8f394a3fbf5e1e6c207f1ce18e70a76f2d885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETJWSK6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG5XfHjKEiXhYXEtE2YUw4AtCqw0im28ld3Po%2B4pFqbYAiEA%2FXFsGVRN2nHfPwxAiKX6FKpZK5nVAzEXDIalkxB%2BE0sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDZ66WDyXKucEsEyFyrcAygMAbXzGFvaIHiVSJ6YPP0rcuoRzdGsdnfCZ7mrhURHaO8jKNTZ0T43deccdGoa3BnqulTXYxbaCtzKYs14dLiyV5U6Avgr00szp8t8tFuzl7UA3YVhuCHJz9YBhEjU2fEs1h30Om0C5b0SggPxK%2FaDkvjsCTPjwOcDLfgPKgcYkgymXWSx1jcKFv843t1f8htGEbN8kBjl6JwnxoMWWcI1nrV1zOppVU%2BBRY38fyIrBOK9sI%2FEP2%2BOYW2jqGqtlI0ARvhLh1y4TSHW62tOI3mzHjAl40%2Fpj3uJ0VfV1zKttc6ehBY7y1GSZdzaXWG%2Fap9qfE%2Bw1hs8M6QNnP%2FE5nFi4c6gL4EtA%2BQlC0%2BklThFP1SJgTPPpEDR754b4TBeoAKL1AgDrQAtRZVBUaXpEkClP2KNe7v0KzsKd%2BDnFAIhJ75F%2FI51MlDtcmUbqFdGoGxIluKOelEol2R91yaKR9jkn104RrY6qGM9ObTcPn2iyVWIGIQNcT0pCbGcX5JBVH6hcOYwKrr5tIv3%2BqWHM%2FBJZ%2FEebgda3kTGQPJMa1KLglW6R%2F9bjIbABb4j2%2Fr9quo0pP54RTtpWsS%2FOjfJRSYlIRYSickVDCqqN6zvXKkI%2FAE9z%2F4zYtox%2BxrBMIWG2sMGOqUBL7LAlP9huHv%2FVSu4QSE4%2FAEooQETopZiMQtQk8mTptTM6Cqd1Cbms8hsqMt6RM0oiwEjg0xOUnprvwR8hnkO%2FUJHiWMaqMd4zrfsWSA7y3ahMpi2a9gX5BA6c4IQYqGcDSks9cnpfq8kAuzGg7jhucd%2FMXnpKxr7H2VzmsiItZ%2FudzOxNu7TBEUIHjNsEqDPOgs8SMTKrw0%2FHS4z3NvAQt7wYUWR&X-Amz-Signature=48a1926ba77821ce16ad6e4a3f8e5a457ae595508a013cde4093adf1a03d8e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETJWSK6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG5XfHjKEiXhYXEtE2YUw4AtCqw0im28ld3Po%2B4pFqbYAiEA%2FXFsGVRN2nHfPwxAiKX6FKpZK5nVAzEXDIalkxB%2BE0sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDZ66WDyXKucEsEyFyrcAygMAbXzGFvaIHiVSJ6YPP0rcuoRzdGsdnfCZ7mrhURHaO8jKNTZ0T43deccdGoa3BnqulTXYxbaCtzKYs14dLiyV5U6Avgr00szp8t8tFuzl7UA3YVhuCHJz9YBhEjU2fEs1h30Om0C5b0SggPxK%2FaDkvjsCTPjwOcDLfgPKgcYkgymXWSx1jcKFv843t1f8htGEbN8kBjl6JwnxoMWWcI1nrV1zOppVU%2BBRY38fyIrBOK9sI%2FEP2%2BOYW2jqGqtlI0ARvhLh1y4TSHW62tOI3mzHjAl40%2Fpj3uJ0VfV1zKttc6ehBY7y1GSZdzaXWG%2Fap9qfE%2Bw1hs8M6QNnP%2FE5nFi4c6gL4EtA%2BQlC0%2BklThFP1SJgTPPpEDR754b4TBeoAKL1AgDrQAtRZVBUaXpEkClP2KNe7v0KzsKd%2BDnFAIhJ75F%2FI51MlDtcmUbqFdGoGxIluKOelEol2R91yaKR9jkn104RrY6qGM9ObTcPn2iyVWIGIQNcT0pCbGcX5JBVH6hcOYwKrr5tIv3%2BqWHM%2FBJZ%2FEebgda3kTGQPJMa1KLglW6R%2F9bjIbABb4j2%2Fr9quo0pP54RTtpWsS%2FOjfJRSYlIRYSickVDCqqN6zvXKkI%2FAE9z%2F4zYtox%2BxrBMIWG2sMGOqUBL7LAlP9huHv%2FVSu4QSE4%2FAEooQETopZiMQtQk8mTptTM6Cqd1Cbms8hsqMt6RM0oiwEjg0xOUnprvwR8hnkO%2FUJHiWMaqMd4zrfsWSA7y3ahMpi2a9gX5BA6c4IQYqGcDSks9cnpfq8kAuzGg7jhucd%2FMXnpKxr7H2VzmsiItZ%2FudzOxNu7TBEUIHjNsEqDPOgs8SMTKrw0%2FHS4z3NvAQt7wYUWR&X-Amz-Signature=93e9ec19133e657b693bf354b267dd3a4c4f4e82d42ce91136c3399d32e6908e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETJWSK6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG5XfHjKEiXhYXEtE2YUw4AtCqw0im28ld3Po%2B4pFqbYAiEA%2FXFsGVRN2nHfPwxAiKX6FKpZK5nVAzEXDIalkxB%2BE0sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDZ66WDyXKucEsEyFyrcAygMAbXzGFvaIHiVSJ6YPP0rcuoRzdGsdnfCZ7mrhURHaO8jKNTZ0T43deccdGoa3BnqulTXYxbaCtzKYs14dLiyV5U6Avgr00szp8t8tFuzl7UA3YVhuCHJz9YBhEjU2fEs1h30Om0C5b0SggPxK%2FaDkvjsCTPjwOcDLfgPKgcYkgymXWSx1jcKFv843t1f8htGEbN8kBjl6JwnxoMWWcI1nrV1zOppVU%2BBRY38fyIrBOK9sI%2FEP2%2BOYW2jqGqtlI0ARvhLh1y4TSHW62tOI3mzHjAl40%2Fpj3uJ0VfV1zKttc6ehBY7y1GSZdzaXWG%2Fap9qfE%2Bw1hs8M6QNnP%2FE5nFi4c6gL4EtA%2BQlC0%2BklThFP1SJgTPPpEDR754b4TBeoAKL1AgDrQAtRZVBUaXpEkClP2KNe7v0KzsKd%2BDnFAIhJ75F%2FI51MlDtcmUbqFdGoGxIluKOelEol2R91yaKR9jkn104RrY6qGM9ObTcPn2iyVWIGIQNcT0pCbGcX5JBVH6hcOYwKrr5tIv3%2BqWHM%2FBJZ%2FEebgda3kTGQPJMa1KLglW6R%2F9bjIbABb4j2%2Fr9quo0pP54RTtpWsS%2FOjfJRSYlIRYSickVDCqqN6zvXKkI%2FAE9z%2F4zYtox%2BxrBMIWG2sMGOqUBL7LAlP9huHv%2FVSu4QSE4%2FAEooQETopZiMQtQk8mTptTM6Cqd1Cbms8hsqMt6RM0oiwEjg0xOUnprvwR8hnkO%2FUJHiWMaqMd4zrfsWSA7y3ahMpi2a9gX5BA6c4IQYqGcDSks9cnpfq8kAuzGg7jhucd%2FMXnpKxr7H2VzmsiItZ%2FudzOxNu7TBEUIHjNsEqDPOgs8SMTKrw0%2FHS4z3NvAQt7wYUWR&X-Amz-Signature=64dfa44dcbe13cb797f5b53a1d5e70c22f423648c55cf4f883a2c28e3bd6108a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETJWSK6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG5XfHjKEiXhYXEtE2YUw4AtCqw0im28ld3Po%2B4pFqbYAiEA%2FXFsGVRN2nHfPwxAiKX6FKpZK5nVAzEXDIalkxB%2BE0sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDZ66WDyXKucEsEyFyrcAygMAbXzGFvaIHiVSJ6YPP0rcuoRzdGsdnfCZ7mrhURHaO8jKNTZ0T43deccdGoa3BnqulTXYxbaCtzKYs14dLiyV5U6Avgr00szp8t8tFuzl7UA3YVhuCHJz9YBhEjU2fEs1h30Om0C5b0SggPxK%2FaDkvjsCTPjwOcDLfgPKgcYkgymXWSx1jcKFv843t1f8htGEbN8kBjl6JwnxoMWWcI1nrV1zOppVU%2BBRY38fyIrBOK9sI%2FEP2%2BOYW2jqGqtlI0ARvhLh1y4TSHW62tOI3mzHjAl40%2Fpj3uJ0VfV1zKttc6ehBY7y1GSZdzaXWG%2Fap9qfE%2Bw1hs8M6QNnP%2FE5nFi4c6gL4EtA%2BQlC0%2BklThFP1SJgTPPpEDR754b4TBeoAKL1AgDrQAtRZVBUaXpEkClP2KNe7v0KzsKd%2BDnFAIhJ75F%2FI51MlDtcmUbqFdGoGxIluKOelEol2R91yaKR9jkn104RrY6qGM9ObTcPn2iyVWIGIQNcT0pCbGcX5JBVH6hcOYwKrr5tIv3%2BqWHM%2FBJZ%2FEebgda3kTGQPJMa1KLglW6R%2F9bjIbABb4j2%2Fr9quo0pP54RTtpWsS%2FOjfJRSYlIRYSickVDCqqN6zvXKkI%2FAE9z%2F4zYtox%2BxrBMIWG2sMGOqUBL7LAlP9huHv%2FVSu4QSE4%2FAEooQETopZiMQtQk8mTptTM6Cqd1Cbms8hsqMt6RM0oiwEjg0xOUnprvwR8hnkO%2FUJHiWMaqMd4zrfsWSA7y3ahMpi2a9gX5BA6c4IQYqGcDSks9cnpfq8kAuzGg7jhucd%2FMXnpKxr7H2VzmsiItZ%2FudzOxNu7TBEUIHjNsEqDPOgs8SMTKrw0%2FHS4z3NvAQt7wYUWR&X-Amz-Signature=2b0a660a0175597518261effa491bf1aae3484b6083596ad0657539bf3258f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RETJWSK6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG5XfHjKEiXhYXEtE2YUw4AtCqw0im28ld3Po%2B4pFqbYAiEA%2FXFsGVRN2nHfPwxAiKX6FKpZK5nVAzEXDIalkxB%2BE0sq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDZ66WDyXKucEsEyFyrcAygMAbXzGFvaIHiVSJ6YPP0rcuoRzdGsdnfCZ7mrhURHaO8jKNTZ0T43deccdGoa3BnqulTXYxbaCtzKYs14dLiyV5U6Avgr00szp8t8tFuzl7UA3YVhuCHJz9YBhEjU2fEs1h30Om0C5b0SggPxK%2FaDkvjsCTPjwOcDLfgPKgcYkgymXWSx1jcKFv843t1f8htGEbN8kBjl6JwnxoMWWcI1nrV1zOppVU%2BBRY38fyIrBOK9sI%2FEP2%2BOYW2jqGqtlI0ARvhLh1y4TSHW62tOI3mzHjAl40%2Fpj3uJ0VfV1zKttc6ehBY7y1GSZdzaXWG%2Fap9qfE%2Bw1hs8M6QNnP%2FE5nFi4c6gL4EtA%2BQlC0%2BklThFP1SJgTPPpEDR754b4TBeoAKL1AgDrQAtRZVBUaXpEkClP2KNe7v0KzsKd%2BDnFAIhJ75F%2FI51MlDtcmUbqFdGoGxIluKOelEol2R91yaKR9jkn104RrY6qGM9ObTcPn2iyVWIGIQNcT0pCbGcX5JBVH6hcOYwKrr5tIv3%2BqWHM%2FBJZ%2FEebgda3kTGQPJMa1KLglW6R%2F9bjIbABb4j2%2Fr9quo0pP54RTtpWsS%2FOjfJRSYlIRYSickVDCqqN6zvXKkI%2FAE9z%2F4zYtox%2BxrBMIWG2sMGOqUBL7LAlP9huHv%2FVSu4QSE4%2FAEooQETopZiMQtQk8mTptTM6Cqd1Cbms8hsqMt6RM0oiwEjg0xOUnprvwR8hnkO%2FUJHiWMaqMd4zrfsWSA7y3ahMpi2a9gX5BA6c4IQYqGcDSks9cnpfq8kAuzGg7jhucd%2FMXnpKxr7H2VzmsiItZ%2FudzOxNu7TBEUIHjNsEqDPOgs8SMTKrw0%2FHS4z3NvAQt7wYUWR&X-Amz-Signature=5389de7b550268f1b78058e75069c9adfc15718c0a97c10e47415f6ff7a1311d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
