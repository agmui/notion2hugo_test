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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTSG3IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuLmRY6HEjrO2BjNWh7nzhl1vz8XRIqewEMVsB5CbuqAIgHUDUPxCeTdXetFmJYoPSTCsg%2BBTwtJB9z5Js0BuH3e0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHB5cL3fhiTjiEMxKircAxZa2kMvBquXtxNCIVyIPtjgDMYbct1qk%2FGYF5XMaReQssN7qLfviXc2ybAxInKk2duQU%2BJXMQd3zvP1A9e7Y1fOTt94xNYZv113KVrCGc2xHzbACTNUhyA60i6XmG1H1Du50HwUiZrAsGJc82ETthWfUQeZYq74x1TfzHaHBz8GkCo%2Br7rkaj4J4tYHX3j4IDJ6n2ftrMU8BHyNMAbEtJYwQNw85CRQToUyJ9uChaR3ZDYOOZpYFnbPCU3vCDHTyxdkPKCv0RxYhruRfchoc3I1%2B4k4WQXK3UoXWF7zLw0Qlv6GnCO%2BSzXv%2Ba0j2cmwhgKV3sUQ8IkEaivMZio9S0cKaTMMVs85IHlRYGAvnvUvClhNQ6SgYEVoFh9Uf5xWOUzoB3OZEcjI0enReJM2hEOXs0WcYNIYlz6QomOgVj9vSbKXkfz8Jcz3zjobSegexDtNF5dKGxnLuIka30pjlUmEIcXVMIGNSdlX61Q08p6vfY2VoUJadLL2QCNOI1MmiloFCJXTDK6x%2BZ93aTXI2K6cjTycBvFzQ4MnEF5ABSH4Mf3X9JDjtl6dhfOvwAf2hGhPDvM74uiwT7QFYjbpgrRV4fRMLkx88ok66cF4Kw9aOoltfIvUcyNDTeFjMMnj8r8GOqUBP4s6y%2BFfSML5KA520%2B%2F%2Bh4yMlipbCKZFt03VJWz9eBmLgqJpBoAscrqi2Mm9s8ryJDUYUBy6Btlzax0Ww02ofRGlFgntrCzI3lcUBDRH4lVUGNlD4QtjUAG9DsT6oLL8vj0sfd9jwEkqnT%2FgwlIcSMSSfftqxSKAwaGP1T4vujn%2FK6SCkVOQLfqwphLihxeSPfMaxnnZxTMQWgel8qTzl6UIGWyc&X-Amz-Signature=b20c518a9f12f2ba7d5ef6372cf233fd6d6e6958878a39ecaae6d67251b6eef3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTSG3IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuLmRY6HEjrO2BjNWh7nzhl1vz8XRIqewEMVsB5CbuqAIgHUDUPxCeTdXetFmJYoPSTCsg%2BBTwtJB9z5Js0BuH3e0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHB5cL3fhiTjiEMxKircAxZa2kMvBquXtxNCIVyIPtjgDMYbct1qk%2FGYF5XMaReQssN7qLfviXc2ybAxInKk2duQU%2BJXMQd3zvP1A9e7Y1fOTt94xNYZv113KVrCGc2xHzbACTNUhyA60i6XmG1H1Du50HwUiZrAsGJc82ETthWfUQeZYq74x1TfzHaHBz8GkCo%2Br7rkaj4J4tYHX3j4IDJ6n2ftrMU8BHyNMAbEtJYwQNw85CRQToUyJ9uChaR3ZDYOOZpYFnbPCU3vCDHTyxdkPKCv0RxYhruRfchoc3I1%2B4k4WQXK3UoXWF7zLw0Qlv6GnCO%2BSzXv%2Ba0j2cmwhgKV3sUQ8IkEaivMZio9S0cKaTMMVs85IHlRYGAvnvUvClhNQ6SgYEVoFh9Uf5xWOUzoB3OZEcjI0enReJM2hEOXs0WcYNIYlz6QomOgVj9vSbKXkfz8Jcz3zjobSegexDtNF5dKGxnLuIka30pjlUmEIcXVMIGNSdlX61Q08p6vfY2VoUJadLL2QCNOI1MmiloFCJXTDK6x%2BZ93aTXI2K6cjTycBvFzQ4MnEF5ABSH4Mf3X9JDjtl6dhfOvwAf2hGhPDvM74uiwT7QFYjbpgrRV4fRMLkx88ok66cF4Kw9aOoltfIvUcyNDTeFjMMnj8r8GOqUBP4s6y%2BFfSML5KA520%2B%2F%2Bh4yMlipbCKZFt03VJWz9eBmLgqJpBoAscrqi2Mm9s8ryJDUYUBy6Btlzax0Ww02ofRGlFgntrCzI3lcUBDRH4lVUGNlD4QtjUAG9DsT6oLL8vj0sfd9jwEkqnT%2FgwlIcSMSSfftqxSKAwaGP1T4vujn%2FK6SCkVOQLfqwphLihxeSPfMaxnnZxTMQWgel8qTzl6UIGWyc&X-Amz-Signature=ad553b3ffa40ec3be20d04a600fab2287a85e23c6eb40651f1978c8a6c6dc877&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTSG3IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuLmRY6HEjrO2BjNWh7nzhl1vz8XRIqewEMVsB5CbuqAIgHUDUPxCeTdXetFmJYoPSTCsg%2BBTwtJB9z5Js0BuH3e0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHB5cL3fhiTjiEMxKircAxZa2kMvBquXtxNCIVyIPtjgDMYbct1qk%2FGYF5XMaReQssN7qLfviXc2ybAxInKk2duQU%2BJXMQd3zvP1A9e7Y1fOTt94xNYZv113KVrCGc2xHzbACTNUhyA60i6XmG1H1Du50HwUiZrAsGJc82ETthWfUQeZYq74x1TfzHaHBz8GkCo%2Br7rkaj4J4tYHX3j4IDJ6n2ftrMU8BHyNMAbEtJYwQNw85CRQToUyJ9uChaR3ZDYOOZpYFnbPCU3vCDHTyxdkPKCv0RxYhruRfchoc3I1%2B4k4WQXK3UoXWF7zLw0Qlv6GnCO%2BSzXv%2Ba0j2cmwhgKV3sUQ8IkEaivMZio9S0cKaTMMVs85IHlRYGAvnvUvClhNQ6SgYEVoFh9Uf5xWOUzoB3OZEcjI0enReJM2hEOXs0WcYNIYlz6QomOgVj9vSbKXkfz8Jcz3zjobSegexDtNF5dKGxnLuIka30pjlUmEIcXVMIGNSdlX61Q08p6vfY2VoUJadLL2QCNOI1MmiloFCJXTDK6x%2BZ93aTXI2K6cjTycBvFzQ4MnEF5ABSH4Mf3X9JDjtl6dhfOvwAf2hGhPDvM74uiwT7QFYjbpgrRV4fRMLkx88ok66cF4Kw9aOoltfIvUcyNDTeFjMMnj8r8GOqUBP4s6y%2BFfSML5KA520%2B%2F%2Bh4yMlipbCKZFt03VJWz9eBmLgqJpBoAscrqi2Mm9s8ryJDUYUBy6Btlzax0Ww02ofRGlFgntrCzI3lcUBDRH4lVUGNlD4QtjUAG9DsT6oLL8vj0sfd9jwEkqnT%2FgwlIcSMSSfftqxSKAwaGP1T4vujn%2FK6SCkVOQLfqwphLihxeSPfMaxnnZxTMQWgel8qTzl6UIGWyc&X-Amz-Signature=67ba46d0d13961cba74aca9d65d08a4ec57c4eb81114cbd8c1bc99e75399b5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTSG3IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuLmRY6HEjrO2BjNWh7nzhl1vz8XRIqewEMVsB5CbuqAIgHUDUPxCeTdXetFmJYoPSTCsg%2BBTwtJB9z5Js0BuH3e0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHB5cL3fhiTjiEMxKircAxZa2kMvBquXtxNCIVyIPtjgDMYbct1qk%2FGYF5XMaReQssN7qLfviXc2ybAxInKk2duQU%2BJXMQd3zvP1A9e7Y1fOTt94xNYZv113KVrCGc2xHzbACTNUhyA60i6XmG1H1Du50HwUiZrAsGJc82ETthWfUQeZYq74x1TfzHaHBz8GkCo%2Br7rkaj4J4tYHX3j4IDJ6n2ftrMU8BHyNMAbEtJYwQNw85CRQToUyJ9uChaR3ZDYOOZpYFnbPCU3vCDHTyxdkPKCv0RxYhruRfchoc3I1%2B4k4WQXK3UoXWF7zLw0Qlv6GnCO%2BSzXv%2Ba0j2cmwhgKV3sUQ8IkEaivMZio9S0cKaTMMVs85IHlRYGAvnvUvClhNQ6SgYEVoFh9Uf5xWOUzoB3OZEcjI0enReJM2hEOXs0WcYNIYlz6QomOgVj9vSbKXkfz8Jcz3zjobSegexDtNF5dKGxnLuIka30pjlUmEIcXVMIGNSdlX61Q08p6vfY2VoUJadLL2QCNOI1MmiloFCJXTDK6x%2BZ93aTXI2K6cjTycBvFzQ4MnEF5ABSH4Mf3X9JDjtl6dhfOvwAf2hGhPDvM74uiwT7QFYjbpgrRV4fRMLkx88ok66cF4Kw9aOoltfIvUcyNDTeFjMMnj8r8GOqUBP4s6y%2BFfSML5KA520%2B%2F%2Bh4yMlipbCKZFt03VJWz9eBmLgqJpBoAscrqi2Mm9s8ryJDUYUBy6Btlzax0Ww02ofRGlFgntrCzI3lcUBDRH4lVUGNlD4QtjUAG9DsT6oLL8vj0sfd9jwEkqnT%2FgwlIcSMSSfftqxSKAwaGP1T4vujn%2FK6SCkVOQLfqwphLihxeSPfMaxnnZxTMQWgel8qTzl6UIGWyc&X-Amz-Signature=45f910f8e886f597d1954251286bc5add2c4b9ae633b74ae4bff3673c587dfaf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTSG3IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuLmRY6HEjrO2BjNWh7nzhl1vz8XRIqewEMVsB5CbuqAIgHUDUPxCeTdXetFmJYoPSTCsg%2BBTwtJB9z5Js0BuH3e0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHB5cL3fhiTjiEMxKircAxZa2kMvBquXtxNCIVyIPtjgDMYbct1qk%2FGYF5XMaReQssN7qLfviXc2ybAxInKk2duQU%2BJXMQd3zvP1A9e7Y1fOTt94xNYZv113KVrCGc2xHzbACTNUhyA60i6XmG1H1Du50HwUiZrAsGJc82ETthWfUQeZYq74x1TfzHaHBz8GkCo%2Br7rkaj4J4tYHX3j4IDJ6n2ftrMU8BHyNMAbEtJYwQNw85CRQToUyJ9uChaR3ZDYOOZpYFnbPCU3vCDHTyxdkPKCv0RxYhruRfchoc3I1%2B4k4WQXK3UoXWF7zLw0Qlv6GnCO%2BSzXv%2Ba0j2cmwhgKV3sUQ8IkEaivMZio9S0cKaTMMVs85IHlRYGAvnvUvClhNQ6SgYEVoFh9Uf5xWOUzoB3OZEcjI0enReJM2hEOXs0WcYNIYlz6QomOgVj9vSbKXkfz8Jcz3zjobSegexDtNF5dKGxnLuIka30pjlUmEIcXVMIGNSdlX61Q08p6vfY2VoUJadLL2QCNOI1MmiloFCJXTDK6x%2BZ93aTXI2K6cjTycBvFzQ4MnEF5ABSH4Mf3X9JDjtl6dhfOvwAf2hGhPDvM74uiwT7QFYjbpgrRV4fRMLkx88ok66cF4Kw9aOoltfIvUcyNDTeFjMMnj8r8GOqUBP4s6y%2BFfSML5KA520%2B%2F%2Bh4yMlipbCKZFt03VJWz9eBmLgqJpBoAscrqi2Mm9s8ryJDUYUBy6Btlzax0Ww02ofRGlFgntrCzI3lcUBDRH4lVUGNlD4QtjUAG9DsT6oLL8vj0sfd9jwEkqnT%2FgwlIcSMSSfftqxSKAwaGP1T4vujn%2FK6SCkVOQLfqwphLihxeSPfMaxnnZxTMQWgel8qTzl6UIGWyc&X-Amz-Signature=cdd6fc6f453d777c8c9ca163c1586629aa8a4f9de04425aeb58f64134c716b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTSG3IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuLmRY6HEjrO2BjNWh7nzhl1vz8XRIqewEMVsB5CbuqAIgHUDUPxCeTdXetFmJYoPSTCsg%2BBTwtJB9z5Js0BuH3e0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHB5cL3fhiTjiEMxKircAxZa2kMvBquXtxNCIVyIPtjgDMYbct1qk%2FGYF5XMaReQssN7qLfviXc2ybAxInKk2duQU%2BJXMQd3zvP1A9e7Y1fOTt94xNYZv113KVrCGc2xHzbACTNUhyA60i6XmG1H1Du50HwUiZrAsGJc82ETthWfUQeZYq74x1TfzHaHBz8GkCo%2Br7rkaj4J4tYHX3j4IDJ6n2ftrMU8BHyNMAbEtJYwQNw85CRQToUyJ9uChaR3ZDYOOZpYFnbPCU3vCDHTyxdkPKCv0RxYhruRfchoc3I1%2B4k4WQXK3UoXWF7zLw0Qlv6GnCO%2BSzXv%2Ba0j2cmwhgKV3sUQ8IkEaivMZio9S0cKaTMMVs85IHlRYGAvnvUvClhNQ6SgYEVoFh9Uf5xWOUzoB3OZEcjI0enReJM2hEOXs0WcYNIYlz6QomOgVj9vSbKXkfz8Jcz3zjobSegexDtNF5dKGxnLuIka30pjlUmEIcXVMIGNSdlX61Q08p6vfY2VoUJadLL2QCNOI1MmiloFCJXTDK6x%2BZ93aTXI2K6cjTycBvFzQ4MnEF5ABSH4Mf3X9JDjtl6dhfOvwAf2hGhPDvM74uiwT7QFYjbpgrRV4fRMLkx88ok66cF4Kw9aOoltfIvUcyNDTeFjMMnj8r8GOqUBP4s6y%2BFfSML5KA520%2B%2F%2Bh4yMlipbCKZFt03VJWz9eBmLgqJpBoAscrqi2Mm9s8ryJDUYUBy6Btlzax0Ww02ofRGlFgntrCzI3lcUBDRH4lVUGNlD4QtjUAG9DsT6oLL8vj0sfd9jwEkqnT%2FgwlIcSMSSfftqxSKAwaGP1T4vujn%2FK6SCkVOQLfqwphLihxeSPfMaxnnZxTMQWgel8qTzl6UIGWyc&X-Amz-Signature=29417bf675abf95d3214ea7eba18db1fcc8d5810e1f1f80da3191bb3269280f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTSG3IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuLmRY6HEjrO2BjNWh7nzhl1vz8XRIqewEMVsB5CbuqAIgHUDUPxCeTdXetFmJYoPSTCsg%2BBTwtJB9z5Js0BuH3e0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHB5cL3fhiTjiEMxKircAxZa2kMvBquXtxNCIVyIPtjgDMYbct1qk%2FGYF5XMaReQssN7qLfviXc2ybAxInKk2duQU%2BJXMQd3zvP1A9e7Y1fOTt94xNYZv113KVrCGc2xHzbACTNUhyA60i6XmG1H1Du50HwUiZrAsGJc82ETthWfUQeZYq74x1TfzHaHBz8GkCo%2Br7rkaj4J4tYHX3j4IDJ6n2ftrMU8BHyNMAbEtJYwQNw85CRQToUyJ9uChaR3ZDYOOZpYFnbPCU3vCDHTyxdkPKCv0RxYhruRfchoc3I1%2B4k4WQXK3UoXWF7zLw0Qlv6GnCO%2BSzXv%2Ba0j2cmwhgKV3sUQ8IkEaivMZio9S0cKaTMMVs85IHlRYGAvnvUvClhNQ6SgYEVoFh9Uf5xWOUzoB3OZEcjI0enReJM2hEOXs0WcYNIYlz6QomOgVj9vSbKXkfz8Jcz3zjobSegexDtNF5dKGxnLuIka30pjlUmEIcXVMIGNSdlX61Q08p6vfY2VoUJadLL2QCNOI1MmiloFCJXTDK6x%2BZ93aTXI2K6cjTycBvFzQ4MnEF5ABSH4Mf3X9JDjtl6dhfOvwAf2hGhPDvM74uiwT7QFYjbpgrRV4fRMLkx88ok66cF4Kw9aOoltfIvUcyNDTeFjMMnj8r8GOqUBP4s6y%2BFfSML5KA520%2B%2F%2Bh4yMlipbCKZFt03VJWz9eBmLgqJpBoAscrqi2Mm9s8ryJDUYUBy6Btlzax0Ww02ofRGlFgntrCzI3lcUBDRH4lVUGNlD4QtjUAG9DsT6oLL8vj0sfd9jwEkqnT%2FgwlIcSMSSfftqxSKAwaGP1T4vujn%2FK6SCkVOQLfqwphLihxeSPfMaxnnZxTMQWgel8qTzl6UIGWyc&X-Amz-Signature=3dcaf70d9639f64da81a788e6dec7225c993cd871300e8ca78d4ff2320b9e60d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTSG3IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuLmRY6HEjrO2BjNWh7nzhl1vz8XRIqewEMVsB5CbuqAIgHUDUPxCeTdXetFmJYoPSTCsg%2BBTwtJB9z5Js0BuH3e0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHB5cL3fhiTjiEMxKircAxZa2kMvBquXtxNCIVyIPtjgDMYbct1qk%2FGYF5XMaReQssN7qLfviXc2ybAxInKk2duQU%2BJXMQd3zvP1A9e7Y1fOTt94xNYZv113KVrCGc2xHzbACTNUhyA60i6XmG1H1Du50HwUiZrAsGJc82ETthWfUQeZYq74x1TfzHaHBz8GkCo%2Br7rkaj4J4tYHX3j4IDJ6n2ftrMU8BHyNMAbEtJYwQNw85CRQToUyJ9uChaR3ZDYOOZpYFnbPCU3vCDHTyxdkPKCv0RxYhruRfchoc3I1%2B4k4WQXK3UoXWF7zLw0Qlv6GnCO%2BSzXv%2Ba0j2cmwhgKV3sUQ8IkEaivMZio9S0cKaTMMVs85IHlRYGAvnvUvClhNQ6SgYEVoFh9Uf5xWOUzoB3OZEcjI0enReJM2hEOXs0WcYNIYlz6QomOgVj9vSbKXkfz8Jcz3zjobSegexDtNF5dKGxnLuIka30pjlUmEIcXVMIGNSdlX61Q08p6vfY2VoUJadLL2QCNOI1MmiloFCJXTDK6x%2BZ93aTXI2K6cjTycBvFzQ4MnEF5ABSH4Mf3X9JDjtl6dhfOvwAf2hGhPDvM74uiwT7QFYjbpgrRV4fRMLkx88ok66cF4Kw9aOoltfIvUcyNDTeFjMMnj8r8GOqUBP4s6y%2BFfSML5KA520%2B%2F%2Bh4yMlipbCKZFt03VJWz9eBmLgqJpBoAscrqi2Mm9s8ryJDUYUBy6Btlzax0Ww02ofRGlFgntrCzI3lcUBDRH4lVUGNlD4QtjUAG9DsT6oLL8vj0sfd9jwEkqnT%2FgwlIcSMSSfftqxSKAwaGP1T4vujn%2FK6SCkVOQLfqwphLihxeSPfMaxnnZxTMQWgel8qTzl6UIGWyc&X-Amz-Signature=f2f90a958b91f85c0d1851c90fefd0ba497cce62093db5bc8b0b2dfffefedbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
