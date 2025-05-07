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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFLA2M5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaAXAmcEDWEnwY3f%2FlyeSk281oJ%2FVXveNhzKdhjRs2JAiA3tdu8ygAXhOHVQudwI62hQpZhUMB6HA50B6tKpTitNCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMlCFNijp76eg7x54SKtwDWJdVYMTF1jJEaHU2aq%2B0eZhlV1TKXASARUp5P0da72ag29Sk55qT7ZeagSYR9u79qoTw9Kyk6KOEXaQjaKIjMrvUOAPr0z%2BxN3hjJjVhdxT%2FoH3LOfvMutq0rdCsDSeqs287QgStfCCA8zxCdSohrFlNz%2BjhQ%2B5ANdDQxxnGYV6S87R%2FjUJ1ItaebGvOnEld8%2FH9e0mWry%2F3%2BVn8AsujUvq%2Fi0%2BrQeZq1QZi1JShkU%2F4mNNaCdNO%2B3MdyRIMuHVNvyH3wvGG62chbR5iNAyrh%2FqQNK9yIeMg9ihVQyjMv5dQvtwjYvKhdmA%2Bn7H0Nyq3%2FlGrd1CAfuXTAKHOeeOsUS5wCGNpjfR09r3j124NR69cqXhgErohiwLGQs82KXggB7tkP37UtahbHt5QydeAVicnV29o9xHlMtdzDZluJhWO2X64RxF8ouCCcbuTsBjxk6t3CpWERh%2BiM6xKt7D5hjorBWGw%2FdNJmADY%2BZ9jpQoc4EgbW%2BNnhiVhG6ItVVd%2BtgxgGbkukmSH1mmMsXGLi0yvvY3cMLYO7EVCi3hWr07rDJtacQWlHueZUmC8dfm322Iry0YDrAXCj2ai7uAns58sE7JTdUcLd7rICm2TOnrSPo01KsLL9koeibQwk7PtwAY6pgF2bJVVJcT8WNm08CKFtr6AT2jdZ1XS42Y23KqovdcSZhgiMjOFDsfisohZsfDaG0OXRRa68AIcBuUPDU5o2krnqb5Mxcht5bXRJBxTaQWrS4IhXwvcqycCaBEX4XziU2UNFj3kXilfN4B%2B6hLc%2FJhc39KZ1Hh%2BK40RDQtfTpLOGK8CpYBtqZxZuvMLk7QR5NXRfC26WBbhARXm2oQl%2BqpmvD29j8Me&X-Amz-Signature=57eaf77f99e0034930c3b67080b4756b203ecc848893db5bf0526c520aee3cba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFLA2M5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaAXAmcEDWEnwY3f%2FlyeSk281oJ%2FVXveNhzKdhjRs2JAiA3tdu8ygAXhOHVQudwI62hQpZhUMB6HA50B6tKpTitNCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMlCFNijp76eg7x54SKtwDWJdVYMTF1jJEaHU2aq%2B0eZhlV1TKXASARUp5P0da72ag29Sk55qT7ZeagSYR9u79qoTw9Kyk6KOEXaQjaKIjMrvUOAPr0z%2BxN3hjJjVhdxT%2FoH3LOfvMutq0rdCsDSeqs287QgStfCCA8zxCdSohrFlNz%2BjhQ%2B5ANdDQxxnGYV6S87R%2FjUJ1ItaebGvOnEld8%2FH9e0mWry%2F3%2BVn8AsujUvq%2Fi0%2BrQeZq1QZi1JShkU%2F4mNNaCdNO%2B3MdyRIMuHVNvyH3wvGG62chbR5iNAyrh%2FqQNK9yIeMg9ihVQyjMv5dQvtwjYvKhdmA%2Bn7H0Nyq3%2FlGrd1CAfuXTAKHOeeOsUS5wCGNpjfR09r3j124NR69cqXhgErohiwLGQs82KXggB7tkP37UtahbHt5QydeAVicnV29o9xHlMtdzDZluJhWO2X64RxF8ouCCcbuTsBjxk6t3CpWERh%2BiM6xKt7D5hjorBWGw%2FdNJmADY%2BZ9jpQoc4EgbW%2BNnhiVhG6ItVVd%2BtgxgGbkukmSH1mmMsXGLi0yvvY3cMLYO7EVCi3hWr07rDJtacQWlHueZUmC8dfm322Iry0YDrAXCj2ai7uAns58sE7JTdUcLd7rICm2TOnrSPo01KsLL9koeibQwk7PtwAY6pgF2bJVVJcT8WNm08CKFtr6AT2jdZ1XS42Y23KqovdcSZhgiMjOFDsfisohZsfDaG0OXRRa68AIcBuUPDU5o2krnqb5Mxcht5bXRJBxTaQWrS4IhXwvcqycCaBEX4XziU2UNFj3kXilfN4B%2B6hLc%2FJhc39KZ1Hh%2BK40RDQtfTpLOGK8CpYBtqZxZuvMLk7QR5NXRfC26WBbhARXm2oQl%2BqpmvD29j8Me&X-Amz-Signature=431b82b76eef5d76e13791b401b9471d533ecacd48df79bf4bf76ffe3d027480&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFLA2M5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaAXAmcEDWEnwY3f%2FlyeSk281oJ%2FVXveNhzKdhjRs2JAiA3tdu8ygAXhOHVQudwI62hQpZhUMB6HA50B6tKpTitNCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMlCFNijp76eg7x54SKtwDWJdVYMTF1jJEaHU2aq%2B0eZhlV1TKXASARUp5P0da72ag29Sk55qT7ZeagSYR9u79qoTw9Kyk6KOEXaQjaKIjMrvUOAPr0z%2BxN3hjJjVhdxT%2FoH3LOfvMutq0rdCsDSeqs287QgStfCCA8zxCdSohrFlNz%2BjhQ%2B5ANdDQxxnGYV6S87R%2FjUJ1ItaebGvOnEld8%2FH9e0mWry%2F3%2BVn8AsujUvq%2Fi0%2BrQeZq1QZi1JShkU%2F4mNNaCdNO%2B3MdyRIMuHVNvyH3wvGG62chbR5iNAyrh%2FqQNK9yIeMg9ihVQyjMv5dQvtwjYvKhdmA%2Bn7H0Nyq3%2FlGrd1CAfuXTAKHOeeOsUS5wCGNpjfR09r3j124NR69cqXhgErohiwLGQs82KXggB7tkP37UtahbHt5QydeAVicnV29o9xHlMtdzDZluJhWO2X64RxF8ouCCcbuTsBjxk6t3CpWERh%2BiM6xKt7D5hjorBWGw%2FdNJmADY%2BZ9jpQoc4EgbW%2BNnhiVhG6ItVVd%2BtgxgGbkukmSH1mmMsXGLi0yvvY3cMLYO7EVCi3hWr07rDJtacQWlHueZUmC8dfm322Iry0YDrAXCj2ai7uAns58sE7JTdUcLd7rICm2TOnrSPo01KsLL9koeibQwk7PtwAY6pgF2bJVVJcT8WNm08CKFtr6AT2jdZ1XS42Y23KqovdcSZhgiMjOFDsfisohZsfDaG0OXRRa68AIcBuUPDU5o2krnqb5Mxcht5bXRJBxTaQWrS4IhXwvcqycCaBEX4XziU2UNFj3kXilfN4B%2B6hLc%2FJhc39KZ1Hh%2BK40RDQtfTpLOGK8CpYBtqZxZuvMLk7QR5NXRfC26WBbhARXm2oQl%2BqpmvD29j8Me&X-Amz-Signature=917d0c279fa96da410f6761d9e9d5eff76207a1d7e267d36a2a082e0a65ea2b8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFLA2M5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaAXAmcEDWEnwY3f%2FlyeSk281oJ%2FVXveNhzKdhjRs2JAiA3tdu8ygAXhOHVQudwI62hQpZhUMB6HA50B6tKpTitNCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMlCFNijp76eg7x54SKtwDWJdVYMTF1jJEaHU2aq%2B0eZhlV1TKXASARUp5P0da72ag29Sk55qT7ZeagSYR9u79qoTw9Kyk6KOEXaQjaKIjMrvUOAPr0z%2BxN3hjJjVhdxT%2FoH3LOfvMutq0rdCsDSeqs287QgStfCCA8zxCdSohrFlNz%2BjhQ%2B5ANdDQxxnGYV6S87R%2FjUJ1ItaebGvOnEld8%2FH9e0mWry%2F3%2BVn8AsujUvq%2Fi0%2BrQeZq1QZi1JShkU%2F4mNNaCdNO%2B3MdyRIMuHVNvyH3wvGG62chbR5iNAyrh%2FqQNK9yIeMg9ihVQyjMv5dQvtwjYvKhdmA%2Bn7H0Nyq3%2FlGrd1CAfuXTAKHOeeOsUS5wCGNpjfR09r3j124NR69cqXhgErohiwLGQs82KXggB7tkP37UtahbHt5QydeAVicnV29o9xHlMtdzDZluJhWO2X64RxF8ouCCcbuTsBjxk6t3CpWERh%2BiM6xKt7D5hjorBWGw%2FdNJmADY%2BZ9jpQoc4EgbW%2BNnhiVhG6ItVVd%2BtgxgGbkukmSH1mmMsXGLi0yvvY3cMLYO7EVCi3hWr07rDJtacQWlHueZUmC8dfm322Iry0YDrAXCj2ai7uAns58sE7JTdUcLd7rICm2TOnrSPo01KsLL9koeibQwk7PtwAY6pgF2bJVVJcT8WNm08CKFtr6AT2jdZ1XS42Y23KqovdcSZhgiMjOFDsfisohZsfDaG0OXRRa68AIcBuUPDU5o2krnqb5Mxcht5bXRJBxTaQWrS4IhXwvcqycCaBEX4XziU2UNFj3kXilfN4B%2B6hLc%2FJhc39KZ1Hh%2BK40RDQtfTpLOGK8CpYBtqZxZuvMLk7QR5NXRfC26WBbhARXm2oQl%2BqpmvD29j8Me&X-Amz-Signature=d5a32ef3b05041872b5f6e34042b1e5feaffb89427028e7ba99bd99ca1f5a367&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFLA2M5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaAXAmcEDWEnwY3f%2FlyeSk281oJ%2FVXveNhzKdhjRs2JAiA3tdu8ygAXhOHVQudwI62hQpZhUMB6HA50B6tKpTitNCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMlCFNijp76eg7x54SKtwDWJdVYMTF1jJEaHU2aq%2B0eZhlV1TKXASARUp5P0da72ag29Sk55qT7ZeagSYR9u79qoTw9Kyk6KOEXaQjaKIjMrvUOAPr0z%2BxN3hjJjVhdxT%2FoH3LOfvMutq0rdCsDSeqs287QgStfCCA8zxCdSohrFlNz%2BjhQ%2B5ANdDQxxnGYV6S87R%2FjUJ1ItaebGvOnEld8%2FH9e0mWry%2F3%2BVn8AsujUvq%2Fi0%2BrQeZq1QZi1JShkU%2F4mNNaCdNO%2B3MdyRIMuHVNvyH3wvGG62chbR5iNAyrh%2FqQNK9yIeMg9ihVQyjMv5dQvtwjYvKhdmA%2Bn7H0Nyq3%2FlGrd1CAfuXTAKHOeeOsUS5wCGNpjfR09r3j124NR69cqXhgErohiwLGQs82KXggB7tkP37UtahbHt5QydeAVicnV29o9xHlMtdzDZluJhWO2X64RxF8ouCCcbuTsBjxk6t3CpWERh%2BiM6xKt7D5hjorBWGw%2FdNJmADY%2BZ9jpQoc4EgbW%2BNnhiVhG6ItVVd%2BtgxgGbkukmSH1mmMsXGLi0yvvY3cMLYO7EVCi3hWr07rDJtacQWlHueZUmC8dfm322Iry0YDrAXCj2ai7uAns58sE7JTdUcLd7rICm2TOnrSPo01KsLL9koeibQwk7PtwAY6pgF2bJVVJcT8WNm08CKFtr6AT2jdZ1XS42Y23KqovdcSZhgiMjOFDsfisohZsfDaG0OXRRa68AIcBuUPDU5o2krnqb5Mxcht5bXRJBxTaQWrS4IhXwvcqycCaBEX4XziU2UNFj3kXilfN4B%2B6hLc%2FJhc39KZ1Hh%2BK40RDQtfTpLOGK8CpYBtqZxZuvMLk7QR5NXRfC26WBbhARXm2oQl%2BqpmvD29j8Me&X-Amz-Signature=488b2a716b19fa2af1fc584d5e8559209a22e60c454bc6521c7197ce3138841f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFLA2M5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaAXAmcEDWEnwY3f%2FlyeSk281oJ%2FVXveNhzKdhjRs2JAiA3tdu8ygAXhOHVQudwI62hQpZhUMB6HA50B6tKpTitNCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMlCFNijp76eg7x54SKtwDWJdVYMTF1jJEaHU2aq%2B0eZhlV1TKXASARUp5P0da72ag29Sk55qT7ZeagSYR9u79qoTw9Kyk6KOEXaQjaKIjMrvUOAPr0z%2BxN3hjJjVhdxT%2FoH3LOfvMutq0rdCsDSeqs287QgStfCCA8zxCdSohrFlNz%2BjhQ%2B5ANdDQxxnGYV6S87R%2FjUJ1ItaebGvOnEld8%2FH9e0mWry%2F3%2BVn8AsujUvq%2Fi0%2BrQeZq1QZi1JShkU%2F4mNNaCdNO%2B3MdyRIMuHVNvyH3wvGG62chbR5iNAyrh%2FqQNK9yIeMg9ihVQyjMv5dQvtwjYvKhdmA%2Bn7H0Nyq3%2FlGrd1CAfuXTAKHOeeOsUS5wCGNpjfR09r3j124NR69cqXhgErohiwLGQs82KXggB7tkP37UtahbHt5QydeAVicnV29o9xHlMtdzDZluJhWO2X64RxF8ouCCcbuTsBjxk6t3CpWERh%2BiM6xKt7D5hjorBWGw%2FdNJmADY%2BZ9jpQoc4EgbW%2BNnhiVhG6ItVVd%2BtgxgGbkukmSH1mmMsXGLi0yvvY3cMLYO7EVCi3hWr07rDJtacQWlHueZUmC8dfm322Iry0YDrAXCj2ai7uAns58sE7JTdUcLd7rICm2TOnrSPo01KsLL9koeibQwk7PtwAY6pgF2bJVVJcT8WNm08CKFtr6AT2jdZ1XS42Y23KqovdcSZhgiMjOFDsfisohZsfDaG0OXRRa68AIcBuUPDU5o2krnqb5Mxcht5bXRJBxTaQWrS4IhXwvcqycCaBEX4XziU2UNFj3kXilfN4B%2B6hLc%2FJhc39KZ1Hh%2BK40RDQtfTpLOGK8CpYBtqZxZuvMLk7QR5NXRfC26WBbhARXm2oQl%2BqpmvD29j8Me&X-Amz-Signature=ca37855847092c0eb68946d5ac65de237de0eebee8f773c576be066b18fdf933&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFLA2M5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaAXAmcEDWEnwY3f%2FlyeSk281oJ%2FVXveNhzKdhjRs2JAiA3tdu8ygAXhOHVQudwI62hQpZhUMB6HA50B6tKpTitNCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMlCFNijp76eg7x54SKtwDWJdVYMTF1jJEaHU2aq%2B0eZhlV1TKXASARUp5P0da72ag29Sk55qT7ZeagSYR9u79qoTw9Kyk6KOEXaQjaKIjMrvUOAPr0z%2BxN3hjJjVhdxT%2FoH3LOfvMutq0rdCsDSeqs287QgStfCCA8zxCdSohrFlNz%2BjhQ%2B5ANdDQxxnGYV6S87R%2FjUJ1ItaebGvOnEld8%2FH9e0mWry%2F3%2BVn8AsujUvq%2Fi0%2BrQeZq1QZi1JShkU%2F4mNNaCdNO%2B3MdyRIMuHVNvyH3wvGG62chbR5iNAyrh%2FqQNK9yIeMg9ihVQyjMv5dQvtwjYvKhdmA%2Bn7H0Nyq3%2FlGrd1CAfuXTAKHOeeOsUS5wCGNpjfR09r3j124NR69cqXhgErohiwLGQs82KXggB7tkP37UtahbHt5QydeAVicnV29o9xHlMtdzDZluJhWO2X64RxF8ouCCcbuTsBjxk6t3CpWERh%2BiM6xKt7D5hjorBWGw%2FdNJmADY%2BZ9jpQoc4EgbW%2BNnhiVhG6ItVVd%2BtgxgGbkukmSH1mmMsXGLi0yvvY3cMLYO7EVCi3hWr07rDJtacQWlHueZUmC8dfm322Iry0YDrAXCj2ai7uAns58sE7JTdUcLd7rICm2TOnrSPo01KsLL9koeibQwk7PtwAY6pgF2bJVVJcT8WNm08CKFtr6AT2jdZ1XS42Y23KqovdcSZhgiMjOFDsfisohZsfDaG0OXRRa68AIcBuUPDU5o2krnqb5Mxcht5bXRJBxTaQWrS4IhXwvcqycCaBEX4XziU2UNFj3kXilfN4B%2B6hLc%2FJhc39KZ1Hh%2BK40RDQtfTpLOGK8CpYBtqZxZuvMLk7QR5NXRfC26WBbhARXm2oQl%2BqpmvD29j8Me&X-Amz-Signature=320aca3ae79bd7739bdbb0dd72fe1e7c5fa5f9f8563060f3fdcdd754df3258bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFLA2M5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaAXAmcEDWEnwY3f%2FlyeSk281oJ%2FVXveNhzKdhjRs2JAiA3tdu8ygAXhOHVQudwI62hQpZhUMB6HA50B6tKpTitNCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMlCFNijp76eg7x54SKtwDWJdVYMTF1jJEaHU2aq%2B0eZhlV1TKXASARUp5P0da72ag29Sk55qT7ZeagSYR9u79qoTw9Kyk6KOEXaQjaKIjMrvUOAPr0z%2BxN3hjJjVhdxT%2FoH3LOfvMutq0rdCsDSeqs287QgStfCCA8zxCdSohrFlNz%2BjhQ%2B5ANdDQxxnGYV6S87R%2FjUJ1ItaebGvOnEld8%2FH9e0mWry%2F3%2BVn8AsujUvq%2Fi0%2BrQeZq1QZi1JShkU%2F4mNNaCdNO%2B3MdyRIMuHVNvyH3wvGG62chbR5iNAyrh%2FqQNK9yIeMg9ihVQyjMv5dQvtwjYvKhdmA%2Bn7H0Nyq3%2FlGrd1CAfuXTAKHOeeOsUS5wCGNpjfR09r3j124NR69cqXhgErohiwLGQs82KXggB7tkP37UtahbHt5QydeAVicnV29o9xHlMtdzDZluJhWO2X64RxF8ouCCcbuTsBjxk6t3CpWERh%2BiM6xKt7D5hjorBWGw%2FdNJmADY%2BZ9jpQoc4EgbW%2BNnhiVhG6ItVVd%2BtgxgGbkukmSH1mmMsXGLi0yvvY3cMLYO7EVCi3hWr07rDJtacQWlHueZUmC8dfm322Iry0YDrAXCj2ai7uAns58sE7JTdUcLd7rICm2TOnrSPo01KsLL9koeibQwk7PtwAY6pgF2bJVVJcT8WNm08CKFtr6AT2jdZ1XS42Y23KqovdcSZhgiMjOFDsfisohZsfDaG0OXRRa68AIcBuUPDU5o2krnqb5Mxcht5bXRJBxTaQWrS4IhXwvcqycCaBEX4XziU2UNFj3kXilfN4B%2B6hLc%2FJhc39KZ1Hh%2BK40RDQtfTpLOGK8CpYBtqZxZuvMLk7QR5NXRfC26WBbhARXm2oQl%2BqpmvD29j8Me&X-Amz-Signature=519f3920948c8f994544ddcf9f6965c1eb4b43b1b001c4c88810065b39f71624&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
