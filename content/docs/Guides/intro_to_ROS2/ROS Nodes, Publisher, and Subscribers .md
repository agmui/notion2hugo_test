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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SBB2HLB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUYLrxRD2v2r8sbMimrM4j8OiL7aDD8RktfNXArhypZAiEA18mzajIZaKHHJgYTTB7fPkWuy63nTXGt7OXacZve4JUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLwQtWP1s7KrjCYYCyrcA2NHvHIAFG4dyhccZZK5W%2FHTqvn8u1Ik5pabrqHPobp4TCT39rJ%2BVY1MfceJsBn3Zd6%2BI0KOprj9hv%2FseShBilDkBdgld02OLjQIZtkxqLsTAp82vpDAj3JRGKo0elC7cSpUcjqFfUaH9Oh5YuVMoDywTcF41kVP5LsYEZRXDLL7ccquU6jRPa9LLNrxo%2BEn6N8ehYfdhMXQxY5COy9NchvyjTSSE2Za22raoz168vzMeVOZBKavB%2FdkAr5y4tUtqv7GCOSCoMnjq5PV3R34HdrSDwGoriG4LJVwYD8MoldV1prDNKq4ZSXgZ1gOzyILPg6qwilSGRxG6jck1wT5fBupU%2FvzpewVQdaf76FT6lfjS5mQJdwXfiTQjTuR9ibhzOc0GdCE8McSZj8rIIA7fErpYFRXyzVi0X8HqWo94jhAy5i9ZT35Qe5%2FI5%2FgKbRDWMUF0C6s%2FL5GSfilBJdSHy2nIdGG5K7fp2f0EbP%2BPzoO7c2VA6Khivi%2F6%2FDSXG2TCYUCfHCayshENZWDkB1bZOikrXwEn%2F0ZrqVNnEzZIcVE5FV5vYjkSxLmuc5RS0waMAW%2B6tcKyeXGaD1R7nXKO09GwaDLB%2FxwCr1OGxBWvCBWff6%2BXmhkEfwKHmOQMMPIgsAGOqUBCWlz50coXnKGgSe%2BcD%2BuqXfWgntcCrZXXFIHRAYIAdf7H78VyPyBc%2FBUSw2RHMRH7H%2BOj6caTlIij71fDkqCffekunDFG4OQ%2BXDoF8l6D3jUpRUnoL6rZsPiY59DI%2BjORVR9F2dFmf582N556Ia5Ce1wGeIMj1i2PCEBM2WTjpzVi2%2FerEtwjrm8NAXwAS%2B1H%2BPd1xhhVGQn41N9fRJPTwL0X2Rb&X-Amz-Signature=facf9dc9b60758df498943404abc573ffebc5e92a8d8dc062376f9572ca7004f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SBB2HLB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUYLrxRD2v2r8sbMimrM4j8OiL7aDD8RktfNXArhypZAiEA18mzajIZaKHHJgYTTB7fPkWuy63nTXGt7OXacZve4JUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLwQtWP1s7KrjCYYCyrcA2NHvHIAFG4dyhccZZK5W%2FHTqvn8u1Ik5pabrqHPobp4TCT39rJ%2BVY1MfceJsBn3Zd6%2BI0KOprj9hv%2FseShBilDkBdgld02OLjQIZtkxqLsTAp82vpDAj3JRGKo0elC7cSpUcjqFfUaH9Oh5YuVMoDywTcF41kVP5LsYEZRXDLL7ccquU6jRPa9LLNrxo%2BEn6N8ehYfdhMXQxY5COy9NchvyjTSSE2Za22raoz168vzMeVOZBKavB%2FdkAr5y4tUtqv7GCOSCoMnjq5PV3R34HdrSDwGoriG4LJVwYD8MoldV1prDNKq4ZSXgZ1gOzyILPg6qwilSGRxG6jck1wT5fBupU%2FvzpewVQdaf76FT6lfjS5mQJdwXfiTQjTuR9ibhzOc0GdCE8McSZj8rIIA7fErpYFRXyzVi0X8HqWo94jhAy5i9ZT35Qe5%2FI5%2FgKbRDWMUF0C6s%2FL5GSfilBJdSHy2nIdGG5K7fp2f0EbP%2BPzoO7c2VA6Khivi%2F6%2FDSXG2TCYUCfHCayshENZWDkB1bZOikrXwEn%2F0ZrqVNnEzZIcVE5FV5vYjkSxLmuc5RS0waMAW%2B6tcKyeXGaD1R7nXKO09GwaDLB%2FxwCr1OGxBWvCBWff6%2BXmhkEfwKHmOQMMPIgsAGOqUBCWlz50coXnKGgSe%2BcD%2BuqXfWgntcCrZXXFIHRAYIAdf7H78VyPyBc%2FBUSw2RHMRH7H%2BOj6caTlIij71fDkqCffekunDFG4OQ%2BXDoF8l6D3jUpRUnoL6rZsPiY59DI%2BjORVR9F2dFmf582N556Ia5Ce1wGeIMj1i2PCEBM2WTjpzVi2%2FerEtwjrm8NAXwAS%2B1H%2BPd1xhhVGQn41N9fRJPTwL0X2Rb&X-Amz-Signature=e0e52528358b42c67fa3e5e2ec2d33843c29c67b9e96d2824a985d61420eb24f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SBB2HLB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUYLrxRD2v2r8sbMimrM4j8OiL7aDD8RktfNXArhypZAiEA18mzajIZaKHHJgYTTB7fPkWuy63nTXGt7OXacZve4JUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLwQtWP1s7KrjCYYCyrcA2NHvHIAFG4dyhccZZK5W%2FHTqvn8u1Ik5pabrqHPobp4TCT39rJ%2BVY1MfceJsBn3Zd6%2BI0KOprj9hv%2FseShBilDkBdgld02OLjQIZtkxqLsTAp82vpDAj3JRGKo0elC7cSpUcjqFfUaH9Oh5YuVMoDywTcF41kVP5LsYEZRXDLL7ccquU6jRPa9LLNrxo%2BEn6N8ehYfdhMXQxY5COy9NchvyjTSSE2Za22raoz168vzMeVOZBKavB%2FdkAr5y4tUtqv7GCOSCoMnjq5PV3R34HdrSDwGoriG4LJVwYD8MoldV1prDNKq4ZSXgZ1gOzyILPg6qwilSGRxG6jck1wT5fBupU%2FvzpewVQdaf76FT6lfjS5mQJdwXfiTQjTuR9ibhzOc0GdCE8McSZj8rIIA7fErpYFRXyzVi0X8HqWo94jhAy5i9ZT35Qe5%2FI5%2FgKbRDWMUF0C6s%2FL5GSfilBJdSHy2nIdGG5K7fp2f0EbP%2BPzoO7c2VA6Khivi%2F6%2FDSXG2TCYUCfHCayshENZWDkB1bZOikrXwEn%2F0ZrqVNnEzZIcVE5FV5vYjkSxLmuc5RS0waMAW%2B6tcKyeXGaD1R7nXKO09GwaDLB%2FxwCr1OGxBWvCBWff6%2BXmhkEfwKHmOQMMPIgsAGOqUBCWlz50coXnKGgSe%2BcD%2BuqXfWgntcCrZXXFIHRAYIAdf7H78VyPyBc%2FBUSw2RHMRH7H%2BOj6caTlIij71fDkqCffekunDFG4OQ%2BXDoF8l6D3jUpRUnoL6rZsPiY59DI%2BjORVR9F2dFmf582N556Ia5Ce1wGeIMj1i2PCEBM2WTjpzVi2%2FerEtwjrm8NAXwAS%2B1H%2BPd1xhhVGQn41N9fRJPTwL0X2Rb&X-Amz-Signature=59cdbdec31e568cf1a5ed381cac6c096946cfdab9d8797350cd595931cd809dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SBB2HLB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUYLrxRD2v2r8sbMimrM4j8OiL7aDD8RktfNXArhypZAiEA18mzajIZaKHHJgYTTB7fPkWuy63nTXGt7OXacZve4JUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLwQtWP1s7KrjCYYCyrcA2NHvHIAFG4dyhccZZK5W%2FHTqvn8u1Ik5pabrqHPobp4TCT39rJ%2BVY1MfceJsBn3Zd6%2BI0KOprj9hv%2FseShBilDkBdgld02OLjQIZtkxqLsTAp82vpDAj3JRGKo0elC7cSpUcjqFfUaH9Oh5YuVMoDywTcF41kVP5LsYEZRXDLL7ccquU6jRPa9LLNrxo%2BEn6N8ehYfdhMXQxY5COy9NchvyjTSSE2Za22raoz168vzMeVOZBKavB%2FdkAr5y4tUtqv7GCOSCoMnjq5PV3R34HdrSDwGoriG4LJVwYD8MoldV1prDNKq4ZSXgZ1gOzyILPg6qwilSGRxG6jck1wT5fBupU%2FvzpewVQdaf76FT6lfjS5mQJdwXfiTQjTuR9ibhzOc0GdCE8McSZj8rIIA7fErpYFRXyzVi0X8HqWo94jhAy5i9ZT35Qe5%2FI5%2FgKbRDWMUF0C6s%2FL5GSfilBJdSHy2nIdGG5K7fp2f0EbP%2BPzoO7c2VA6Khivi%2F6%2FDSXG2TCYUCfHCayshENZWDkB1bZOikrXwEn%2F0ZrqVNnEzZIcVE5FV5vYjkSxLmuc5RS0waMAW%2B6tcKyeXGaD1R7nXKO09GwaDLB%2FxwCr1OGxBWvCBWff6%2BXmhkEfwKHmOQMMPIgsAGOqUBCWlz50coXnKGgSe%2BcD%2BuqXfWgntcCrZXXFIHRAYIAdf7H78VyPyBc%2FBUSw2RHMRH7H%2BOj6caTlIij71fDkqCffekunDFG4OQ%2BXDoF8l6D3jUpRUnoL6rZsPiY59DI%2BjORVR9F2dFmf582N556Ia5Ce1wGeIMj1i2PCEBM2WTjpzVi2%2FerEtwjrm8NAXwAS%2B1H%2BPd1xhhVGQn41N9fRJPTwL0X2Rb&X-Amz-Signature=3deaebf95bc8f4fb8146f405ca1ba7f491392c3fc1fdd083380cc639b90e82a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SBB2HLB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUYLrxRD2v2r8sbMimrM4j8OiL7aDD8RktfNXArhypZAiEA18mzajIZaKHHJgYTTB7fPkWuy63nTXGt7OXacZve4JUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLwQtWP1s7KrjCYYCyrcA2NHvHIAFG4dyhccZZK5W%2FHTqvn8u1Ik5pabrqHPobp4TCT39rJ%2BVY1MfceJsBn3Zd6%2BI0KOprj9hv%2FseShBilDkBdgld02OLjQIZtkxqLsTAp82vpDAj3JRGKo0elC7cSpUcjqFfUaH9Oh5YuVMoDywTcF41kVP5LsYEZRXDLL7ccquU6jRPa9LLNrxo%2BEn6N8ehYfdhMXQxY5COy9NchvyjTSSE2Za22raoz168vzMeVOZBKavB%2FdkAr5y4tUtqv7GCOSCoMnjq5PV3R34HdrSDwGoriG4LJVwYD8MoldV1prDNKq4ZSXgZ1gOzyILPg6qwilSGRxG6jck1wT5fBupU%2FvzpewVQdaf76FT6lfjS5mQJdwXfiTQjTuR9ibhzOc0GdCE8McSZj8rIIA7fErpYFRXyzVi0X8HqWo94jhAy5i9ZT35Qe5%2FI5%2FgKbRDWMUF0C6s%2FL5GSfilBJdSHy2nIdGG5K7fp2f0EbP%2BPzoO7c2VA6Khivi%2F6%2FDSXG2TCYUCfHCayshENZWDkB1bZOikrXwEn%2F0ZrqVNnEzZIcVE5FV5vYjkSxLmuc5RS0waMAW%2B6tcKyeXGaD1R7nXKO09GwaDLB%2FxwCr1OGxBWvCBWff6%2BXmhkEfwKHmOQMMPIgsAGOqUBCWlz50coXnKGgSe%2BcD%2BuqXfWgntcCrZXXFIHRAYIAdf7H78VyPyBc%2FBUSw2RHMRH7H%2BOj6caTlIij71fDkqCffekunDFG4OQ%2BXDoF8l6D3jUpRUnoL6rZsPiY59DI%2BjORVR9F2dFmf582N556Ia5Ce1wGeIMj1i2PCEBM2WTjpzVi2%2FerEtwjrm8NAXwAS%2B1H%2BPd1xhhVGQn41N9fRJPTwL0X2Rb&X-Amz-Signature=967c2bc627dfe8aa4c87896fa1f9c70f91d68c789ac4f42da1874720398960f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SBB2HLB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUYLrxRD2v2r8sbMimrM4j8OiL7aDD8RktfNXArhypZAiEA18mzajIZaKHHJgYTTB7fPkWuy63nTXGt7OXacZve4JUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLwQtWP1s7KrjCYYCyrcA2NHvHIAFG4dyhccZZK5W%2FHTqvn8u1Ik5pabrqHPobp4TCT39rJ%2BVY1MfceJsBn3Zd6%2BI0KOprj9hv%2FseShBilDkBdgld02OLjQIZtkxqLsTAp82vpDAj3JRGKo0elC7cSpUcjqFfUaH9Oh5YuVMoDywTcF41kVP5LsYEZRXDLL7ccquU6jRPa9LLNrxo%2BEn6N8ehYfdhMXQxY5COy9NchvyjTSSE2Za22raoz168vzMeVOZBKavB%2FdkAr5y4tUtqv7GCOSCoMnjq5PV3R34HdrSDwGoriG4LJVwYD8MoldV1prDNKq4ZSXgZ1gOzyILPg6qwilSGRxG6jck1wT5fBupU%2FvzpewVQdaf76FT6lfjS5mQJdwXfiTQjTuR9ibhzOc0GdCE8McSZj8rIIA7fErpYFRXyzVi0X8HqWo94jhAy5i9ZT35Qe5%2FI5%2FgKbRDWMUF0C6s%2FL5GSfilBJdSHy2nIdGG5K7fp2f0EbP%2BPzoO7c2VA6Khivi%2F6%2FDSXG2TCYUCfHCayshENZWDkB1bZOikrXwEn%2F0ZrqVNnEzZIcVE5FV5vYjkSxLmuc5RS0waMAW%2B6tcKyeXGaD1R7nXKO09GwaDLB%2FxwCr1OGxBWvCBWff6%2BXmhkEfwKHmOQMMPIgsAGOqUBCWlz50coXnKGgSe%2BcD%2BuqXfWgntcCrZXXFIHRAYIAdf7H78VyPyBc%2FBUSw2RHMRH7H%2BOj6caTlIij71fDkqCffekunDFG4OQ%2BXDoF8l6D3jUpRUnoL6rZsPiY59DI%2BjORVR9F2dFmf582N556Ia5Ce1wGeIMj1i2PCEBM2WTjpzVi2%2FerEtwjrm8NAXwAS%2B1H%2BPd1xhhVGQn41N9fRJPTwL0X2Rb&X-Amz-Signature=d52969a20b94e3e54578a238b6fd44787525fabc3894fa49c1622805fe28a455&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SBB2HLB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUYLrxRD2v2r8sbMimrM4j8OiL7aDD8RktfNXArhypZAiEA18mzajIZaKHHJgYTTB7fPkWuy63nTXGt7OXacZve4JUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLwQtWP1s7KrjCYYCyrcA2NHvHIAFG4dyhccZZK5W%2FHTqvn8u1Ik5pabrqHPobp4TCT39rJ%2BVY1MfceJsBn3Zd6%2BI0KOprj9hv%2FseShBilDkBdgld02OLjQIZtkxqLsTAp82vpDAj3JRGKo0elC7cSpUcjqFfUaH9Oh5YuVMoDywTcF41kVP5LsYEZRXDLL7ccquU6jRPa9LLNrxo%2BEn6N8ehYfdhMXQxY5COy9NchvyjTSSE2Za22raoz168vzMeVOZBKavB%2FdkAr5y4tUtqv7GCOSCoMnjq5PV3R34HdrSDwGoriG4LJVwYD8MoldV1prDNKq4ZSXgZ1gOzyILPg6qwilSGRxG6jck1wT5fBupU%2FvzpewVQdaf76FT6lfjS5mQJdwXfiTQjTuR9ibhzOc0GdCE8McSZj8rIIA7fErpYFRXyzVi0X8HqWo94jhAy5i9ZT35Qe5%2FI5%2FgKbRDWMUF0C6s%2FL5GSfilBJdSHy2nIdGG5K7fp2f0EbP%2BPzoO7c2VA6Khivi%2F6%2FDSXG2TCYUCfHCayshENZWDkB1bZOikrXwEn%2F0ZrqVNnEzZIcVE5FV5vYjkSxLmuc5RS0waMAW%2B6tcKyeXGaD1R7nXKO09GwaDLB%2FxwCr1OGxBWvCBWff6%2BXmhkEfwKHmOQMMPIgsAGOqUBCWlz50coXnKGgSe%2BcD%2BuqXfWgntcCrZXXFIHRAYIAdf7H78VyPyBc%2FBUSw2RHMRH7H%2BOj6caTlIij71fDkqCffekunDFG4OQ%2BXDoF8l6D3jUpRUnoL6rZsPiY59DI%2BjORVR9F2dFmf582N556Ia5Ce1wGeIMj1i2PCEBM2WTjpzVi2%2FerEtwjrm8NAXwAS%2B1H%2BPd1xhhVGQn41N9fRJPTwL0X2Rb&X-Amz-Signature=04ce540ecc1e3ebce5571a224968654e5c98ac606057bcc3c5d66dab22dda5a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SBB2HLB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUYLrxRD2v2r8sbMimrM4j8OiL7aDD8RktfNXArhypZAiEA18mzajIZaKHHJgYTTB7fPkWuy63nTXGt7OXacZve4JUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLwQtWP1s7KrjCYYCyrcA2NHvHIAFG4dyhccZZK5W%2FHTqvn8u1Ik5pabrqHPobp4TCT39rJ%2BVY1MfceJsBn3Zd6%2BI0KOprj9hv%2FseShBilDkBdgld02OLjQIZtkxqLsTAp82vpDAj3JRGKo0elC7cSpUcjqFfUaH9Oh5YuVMoDywTcF41kVP5LsYEZRXDLL7ccquU6jRPa9LLNrxo%2BEn6N8ehYfdhMXQxY5COy9NchvyjTSSE2Za22raoz168vzMeVOZBKavB%2FdkAr5y4tUtqv7GCOSCoMnjq5PV3R34HdrSDwGoriG4LJVwYD8MoldV1prDNKq4ZSXgZ1gOzyILPg6qwilSGRxG6jck1wT5fBupU%2FvzpewVQdaf76FT6lfjS5mQJdwXfiTQjTuR9ibhzOc0GdCE8McSZj8rIIA7fErpYFRXyzVi0X8HqWo94jhAy5i9ZT35Qe5%2FI5%2FgKbRDWMUF0C6s%2FL5GSfilBJdSHy2nIdGG5K7fp2f0EbP%2BPzoO7c2VA6Khivi%2F6%2FDSXG2TCYUCfHCayshENZWDkB1bZOikrXwEn%2F0ZrqVNnEzZIcVE5FV5vYjkSxLmuc5RS0waMAW%2B6tcKyeXGaD1R7nXKO09GwaDLB%2FxwCr1OGxBWvCBWff6%2BXmhkEfwKHmOQMMPIgsAGOqUBCWlz50coXnKGgSe%2BcD%2BuqXfWgntcCrZXXFIHRAYIAdf7H78VyPyBc%2FBUSw2RHMRH7H%2BOj6caTlIij71fDkqCffekunDFG4OQ%2BXDoF8l6D3jUpRUnoL6rZsPiY59DI%2BjORVR9F2dFmf582N556Ia5Ce1wGeIMj1i2PCEBM2WTjpzVi2%2FerEtwjrm8NAXwAS%2B1H%2BPd1xhhVGQn41N9fRJPTwL0X2Rb&X-Amz-Signature=c637f3b05ddf207f2c8785cec2ab864ce90e934e084a971e7b271e4e556c0353&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
