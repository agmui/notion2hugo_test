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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5QJGQR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFZxp0%2Bxgjqwictj3nu1OjIWSeBDIS27aG9L%2BEFl11yqAiAZKrjeGFBCDOB2CWR2%2FugiGTL9xI%2BmGWPHoT7U9WfkIyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIzdGap45CuFO%2FTsEKtwDLWr%2FHIYs6tY8m4Y381VBF1zzTIQlJdKWlMXdZF7LVYd%2FSOLjRWJkm%2Bdsm9X6Hfs9B54TlpxOt3x1rNjoJeM46SsS%2BpJsDjHh%2BfSxoJsEHiBe1T0I54FwZ44wIXI4OgNTZCYFd7vW4jMrgZT3zRqQMP8L9TouOxZZrYiNXIJk%2BG66H8CrcF1ZsC6Gu7YKo7dA7KzTOKeUS%2FryXsVq7YL66ALZWA7nEiO1uDDtUpcKqBlcvOciWGoFlbOvpA6uju%2BOJayG6Hpn3rtHB8SWlpw2FW1mokE6Un5fkUFCFkDiBuZlzu8qH9B%2BFGuXvQzW7VaQRbiwR9ZskXQ3ye4j2pq0o25J43Jly23nRqqSjFoxwUY00IsNib2PxFF%2B1T92UPdZW3AVgt6Dvy2twJiw3Z7%2BuJi6UUq5GPIYuOckdVWPkqOYBb36L1c6VRLZ9Uq1XgBV0mF2R7yKA%2FJZNM1mFFSxjAlU37Lq9eEP9YWmhIVqv8rv5TXW3gXjKWruXfwU2GnRxEYZeIeX9t%2Ft1vYvKQ%2F0at2Z0RXAwAY%2F%2Blzt%2BfYdCZKykT6L34xPTUFMDXFNp0WSwfRIbKgiWE40Ff3E81%2B3Kcs%2Fzj6ZyyHyUyaGxNXgD5hL20HdFJyYhkAXJsIwu4GKwgY6pgFgpYmjNHv9%2F63oiXaLFsZG7UHnLAWZmEYkeyP7u91c124HagxQumKvCmhyld6kxDcWNvukJEbysg5MgP6GrhBfByKwn%2Fo7Szm7OpVyAckXQACgyCIH%2FVzYETWmIu4sM0nMCh7o9p7rWRjZfdCLmBo12Yhkt%2F2Ej1JWk%2FrCit1gB3xa8q1xQvGcnjlKgktksLDv7Xc5T%2B7fjN8R7kf76dkRjQ3OrFHo&X-Amz-Signature=9d3c9c75004602736e3aa77708716a795ffd045537a6bc68204ce44664274a09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5QJGQR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFZxp0%2Bxgjqwictj3nu1OjIWSeBDIS27aG9L%2BEFl11yqAiAZKrjeGFBCDOB2CWR2%2FugiGTL9xI%2BmGWPHoT7U9WfkIyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIzdGap45CuFO%2FTsEKtwDLWr%2FHIYs6tY8m4Y381VBF1zzTIQlJdKWlMXdZF7LVYd%2FSOLjRWJkm%2Bdsm9X6Hfs9B54TlpxOt3x1rNjoJeM46SsS%2BpJsDjHh%2BfSxoJsEHiBe1T0I54FwZ44wIXI4OgNTZCYFd7vW4jMrgZT3zRqQMP8L9TouOxZZrYiNXIJk%2BG66H8CrcF1ZsC6Gu7YKo7dA7KzTOKeUS%2FryXsVq7YL66ALZWA7nEiO1uDDtUpcKqBlcvOciWGoFlbOvpA6uju%2BOJayG6Hpn3rtHB8SWlpw2FW1mokE6Un5fkUFCFkDiBuZlzu8qH9B%2BFGuXvQzW7VaQRbiwR9ZskXQ3ye4j2pq0o25J43Jly23nRqqSjFoxwUY00IsNib2PxFF%2B1T92UPdZW3AVgt6Dvy2twJiw3Z7%2BuJi6UUq5GPIYuOckdVWPkqOYBb36L1c6VRLZ9Uq1XgBV0mF2R7yKA%2FJZNM1mFFSxjAlU37Lq9eEP9YWmhIVqv8rv5TXW3gXjKWruXfwU2GnRxEYZeIeX9t%2Ft1vYvKQ%2F0at2Z0RXAwAY%2F%2Blzt%2BfYdCZKykT6L34xPTUFMDXFNp0WSwfRIbKgiWE40Ff3E81%2B3Kcs%2Fzj6ZyyHyUyaGxNXgD5hL20HdFJyYhkAXJsIwu4GKwgY6pgFgpYmjNHv9%2F63oiXaLFsZG7UHnLAWZmEYkeyP7u91c124HagxQumKvCmhyld6kxDcWNvukJEbysg5MgP6GrhBfByKwn%2Fo7Szm7OpVyAckXQACgyCIH%2FVzYETWmIu4sM0nMCh7o9p7rWRjZfdCLmBo12Yhkt%2F2Ej1JWk%2FrCit1gB3xa8q1xQvGcnjlKgktksLDv7Xc5T%2B7fjN8R7kf76dkRjQ3OrFHo&X-Amz-Signature=87a2530126eb9c66f26159acd5d303fc14a47d11bbf5860f9ca68a285ed02f32&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5QJGQR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFZxp0%2Bxgjqwictj3nu1OjIWSeBDIS27aG9L%2BEFl11yqAiAZKrjeGFBCDOB2CWR2%2FugiGTL9xI%2BmGWPHoT7U9WfkIyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIzdGap45CuFO%2FTsEKtwDLWr%2FHIYs6tY8m4Y381VBF1zzTIQlJdKWlMXdZF7LVYd%2FSOLjRWJkm%2Bdsm9X6Hfs9B54TlpxOt3x1rNjoJeM46SsS%2BpJsDjHh%2BfSxoJsEHiBe1T0I54FwZ44wIXI4OgNTZCYFd7vW4jMrgZT3zRqQMP8L9TouOxZZrYiNXIJk%2BG66H8CrcF1ZsC6Gu7YKo7dA7KzTOKeUS%2FryXsVq7YL66ALZWA7nEiO1uDDtUpcKqBlcvOciWGoFlbOvpA6uju%2BOJayG6Hpn3rtHB8SWlpw2FW1mokE6Un5fkUFCFkDiBuZlzu8qH9B%2BFGuXvQzW7VaQRbiwR9ZskXQ3ye4j2pq0o25J43Jly23nRqqSjFoxwUY00IsNib2PxFF%2B1T92UPdZW3AVgt6Dvy2twJiw3Z7%2BuJi6UUq5GPIYuOckdVWPkqOYBb36L1c6VRLZ9Uq1XgBV0mF2R7yKA%2FJZNM1mFFSxjAlU37Lq9eEP9YWmhIVqv8rv5TXW3gXjKWruXfwU2GnRxEYZeIeX9t%2Ft1vYvKQ%2F0at2Z0RXAwAY%2F%2Blzt%2BfYdCZKykT6L34xPTUFMDXFNp0WSwfRIbKgiWE40Ff3E81%2B3Kcs%2Fzj6ZyyHyUyaGxNXgD5hL20HdFJyYhkAXJsIwu4GKwgY6pgFgpYmjNHv9%2F63oiXaLFsZG7UHnLAWZmEYkeyP7u91c124HagxQumKvCmhyld6kxDcWNvukJEbysg5MgP6GrhBfByKwn%2Fo7Szm7OpVyAckXQACgyCIH%2FVzYETWmIu4sM0nMCh7o9p7rWRjZfdCLmBo12Yhkt%2F2Ej1JWk%2FrCit1gB3xa8q1xQvGcnjlKgktksLDv7Xc5T%2B7fjN8R7kf76dkRjQ3OrFHo&X-Amz-Signature=477f839d29c4f45b63f94eaac3f54abd984c4273015d96386bd1b87363384da7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5QJGQR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFZxp0%2Bxgjqwictj3nu1OjIWSeBDIS27aG9L%2BEFl11yqAiAZKrjeGFBCDOB2CWR2%2FugiGTL9xI%2BmGWPHoT7U9WfkIyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIzdGap45CuFO%2FTsEKtwDLWr%2FHIYs6tY8m4Y381VBF1zzTIQlJdKWlMXdZF7LVYd%2FSOLjRWJkm%2Bdsm9X6Hfs9B54TlpxOt3x1rNjoJeM46SsS%2BpJsDjHh%2BfSxoJsEHiBe1T0I54FwZ44wIXI4OgNTZCYFd7vW4jMrgZT3zRqQMP8L9TouOxZZrYiNXIJk%2BG66H8CrcF1ZsC6Gu7YKo7dA7KzTOKeUS%2FryXsVq7YL66ALZWA7nEiO1uDDtUpcKqBlcvOciWGoFlbOvpA6uju%2BOJayG6Hpn3rtHB8SWlpw2FW1mokE6Un5fkUFCFkDiBuZlzu8qH9B%2BFGuXvQzW7VaQRbiwR9ZskXQ3ye4j2pq0o25J43Jly23nRqqSjFoxwUY00IsNib2PxFF%2B1T92UPdZW3AVgt6Dvy2twJiw3Z7%2BuJi6UUq5GPIYuOckdVWPkqOYBb36L1c6VRLZ9Uq1XgBV0mF2R7yKA%2FJZNM1mFFSxjAlU37Lq9eEP9YWmhIVqv8rv5TXW3gXjKWruXfwU2GnRxEYZeIeX9t%2Ft1vYvKQ%2F0at2Z0RXAwAY%2F%2Blzt%2BfYdCZKykT6L34xPTUFMDXFNp0WSwfRIbKgiWE40Ff3E81%2B3Kcs%2Fzj6ZyyHyUyaGxNXgD5hL20HdFJyYhkAXJsIwu4GKwgY6pgFgpYmjNHv9%2F63oiXaLFsZG7UHnLAWZmEYkeyP7u91c124HagxQumKvCmhyld6kxDcWNvukJEbysg5MgP6GrhBfByKwn%2Fo7Szm7OpVyAckXQACgyCIH%2FVzYETWmIu4sM0nMCh7o9p7rWRjZfdCLmBo12Yhkt%2F2Ej1JWk%2FrCit1gB3xa8q1xQvGcnjlKgktksLDv7Xc5T%2B7fjN8R7kf76dkRjQ3OrFHo&X-Amz-Signature=edc6653950633833aba0da5d5f64481507bf0dce8808960c91e7ea6fda47f79d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5QJGQR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFZxp0%2Bxgjqwictj3nu1OjIWSeBDIS27aG9L%2BEFl11yqAiAZKrjeGFBCDOB2CWR2%2FugiGTL9xI%2BmGWPHoT7U9WfkIyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIzdGap45CuFO%2FTsEKtwDLWr%2FHIYs6tY8m4Y381VBF1zzTIQlJdKWlMXdZF7LVYd%2FSOLjRWJkm%2Bdsm9X6Hfs9B54TlpxOt3x1rNjoJeM46SsS%2BpJsDjHh%2BfSxoJsEHiBe1T0I54FwZ44wIXI4OgNTZCYFd7vW4jMrgZT3zRqQMP8L9TouOxZZrYiNXIJk%2BG66H8CrcF1ZsC6Gu7YKo7dA7KzTOKeUS%2FryXsVq7YL66ALZWA7nEiO1uDDtUpcKqBlcvOciWGoFlbOvpA6uju%2BOJayG6Hpn3rtHB8SWlpw2FW1mokE6Un5fkUFCFkDiBuZlzu8qH9B%2BFGuXvQzW7VaQRbiwR9ZskXQ3ye4j2pq0o25J43Jly23nRqqSjFoxwUY00IsNib2PxFF%2B1T92UPdZW3AVgt6Dvy2twJiw3Z7%2BuJi6UUq5GPIYuOckdVWPkqOYBb36L1c6VRLZ9Uq1XgBV0mF2R7yKA%2FJZNM1mFFSxjAlU37Lq9eEP9YWmhIVqv8rv5TXW3gXjKWruXfwU2GnRxEYZeIeX9t%2Ft1vYvKQ%2F0at2Z0RXAwAY%2F%2Blzt%2BfYdCZKykT6L34xPTUFMDXFNp0WSwfRIbKgiWE40Ff3E81%2B3Kcs%2Fzj6ZyyHyUyaGxNXgD5hL20HdFJyYhkAXJsIwu4GKwgY6pgFgpYmjNHv9%2F63oiXaLFsZG7UHnLAWZmEYkeyP7u91c124HagxQumKvCmhyld6kxDcWNvukJEbysg5MgP6GrhBfByKwn%2Fo7Szm7OpVyAckXQACgyCIH%2FVzYETWmIu4sM0nMCh7o9p7rWRjZfdCLmBo12Yhkt%2F2Ej1JWk%2FrCit1gB3xa8q1xQvGcnjlKgktksLDv7Xc5T%2B7fjN8R7kf76dkRjQ3OrFHo&X-Amz-Signature=a450052f2879b02dd730e1e8a4f9dcc8f75df997975ffb38af71830c9bef852a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5QJGQR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFZxp0%2Bxgjqwictj3nu1OjIWSeBDIS27aG9L%2BEFl11yqAiAZKrjeGFBCDOB2CWR2%2FugiGTL9xI%2BmGWPHoT7U9WfkIyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIzdGap45CuFO%2FTsEKtwDLWr%2FHIYs6tY8m4Y381VBF1zzTIQlJdKWlMXdZF7LVYd%2FSOLjRWJkm%2Bdsm9X6Hfs9B54TlpxOt3x1rNjoJeM46SsS%2BpJsDjHh%2BfSxoJsEHiBe1T0I54FwZ44wIXI4OgNTZCYFd7vW4jMrgZT3zRqQMP8L9TouOxZZrYiNXIJk%2BG66H8CrcF1ZsC6Gu7YKo7dA7KzTOKeUS%2FryXsVq7YL66ALZWA7nEiO1uDDtUpcKqBlcvOciWGoFlbOvpA6uju%2BOJayG6Hpn3rtHB8SWlpw2FW1mokE6Un5fkUFCFkDiBuZlzu8qH9B%2BFGuXvQzW7VaQRbiwR9ZskXQ3ye4j2pq0o25J43Jly23nRqqSjFoxwUY00IsNib2PxFF%2B1T92UPdZW3AVgt6Dvy2twJiw3Z7%2BuJi6UUq5GPIYuOckdVWPkqOYBb36L1c6VRLZ9Uq1XgBV0mF2R7yKA%2FJZNM1mFFSxjAlU37Lq9eEP9YWmhIVqv8rv5TXW3gXjKWruXfwU2GnRxEYZeIeX9t%2Ft1vYvKQ%2F0at2Z0RXAwAY%2F%2Blzt%2BfYdCZKykT6L34xPTUFMDXFNp0WSwfRIbKgiWE40Ff3E81%2B3Kcs%2Fzj6ZyyHyUyaGxNXgD5hL20HdFJyYhkAXJsIwu4GKwgY6pgFgpYmjNHv9%2F63oiXaLFsZG7UHnLAWZmEYkeyP7u91c124HagxQumKvCmhyld6kxDcWNvukJEbysg5MgP6GrhBfByKwn%2Fo7Szm7OpVyAckXQACgyCIH%2FVzYETWmIu4sM0nMCh7o9p7rWRjZfdCLmBo12Yhkt%2F2Ej1JWk%2FrCit1gB3xa8q1xQvGcnjlKgktksLDv7Xc5T%2B7fjN8R7kf76dkRjQ3OrFHo&X-Amz-Signature=714d46099825e8a2d02f47e41282a1f68a1cd5427590894de31b828242fad730&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5QJGQR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFZxp0%2Bxgjqwictj3nu1OjIWSeBDIS27aG9L%2BEFl11yqAiAZKrjeGFBCDOB2CWR2%2FugiGTL9xI%2BmGWPHoT7U9WfkIyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIzdGap45CuFO%2FTsEKtwDLWr%2FHIYs6tY8m4Y381VBF1zzTIQlJdKWlMXdZF7LVYd%2FSOLjRWJkm%2Bdsm9X6Hfs9B54TlpxOt3x1rNjoJeM46SsS%2BpJsDjHh%2BfSxoJsEHiBe1T0I54FwZ44wIXI4OgNTZCYFd7vW4jMrgZT3zRqQMP8L9TouOxZZrYiNXIJk%2BG66H8CrcF1ZsC6Gu7YKo7dA7KzTOKeUS%2FryXsVq7YL66ALZWA7nEiO1uDDtUpcKqBlcvOciWGoFlbOvpA6uju%2BOJayG6Hpn3rtHB8SWlpw2FW1mokE6Un5fkUFCFkDiBuZlzu8qH9B%2BFGuXvQzW7VaQRbiwR9ZskXQ3ye4j2pq0o25J43Jly23nRqqSjFoxwUY00IsNib2PxFF%2B1T92UPdZW3AVgt6Dvy2twJiw3Z7%2BuJi6UUq5GPIYuOckdVWPkqOYBb36L1c6VRLZ9Uq1XgBV0mF2R7yKA%2FJZNM1mFFSxjAlU37Lq9eEP9YWmhIVqv8rv5TXW3gXjKWruXfwU2GnRxEYZeIeX9t%2Ft1vYvKQ%2F0at2Z0RXAwAY%2F%2Blzt%2BfYdCZKykT6L34xPTUFMDXFNp0WSwfRIbKgiWE40Ff3E81%2B3Kcs%2Fzj6ZyyHyUyaGxNXgD5hL20HdFJyYhkAXJsIwu4GKwgY6pgFgpYmjNHv9%2F63oiXaLFsZG7UHnLAWZmEYkeyP7u91c124HagxQumKvCmhyld6kxDcWNvukJEbysg5MgP6GrhBfByKwn%2Fo7Szm7OpVyAckXQACgyCIH%2FVzYETWmIu4sM0nMCh7o9p7rWRjZfdCLmBo12Yhkt%2F2Ej1JWk%2FrCit1gB3xa8q1xQvGcnjlKgktksLDv7Xc5T%2B7fjN8R7kf76dkRjQ3OrFHo&X-Amz-Signature=5c5e2bb1d8492719c65b4f9627d6095a0ca29ec12152ced4733e5cb45401678c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5QJGQR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFZxp0%2Bxgjqwictj3nu1OjIWSeBDIS27aG9L%2BEFl11yqAiAZKrjeGFBCDOB2CWR2%2FugiGTL9xI%2BmGWPHoT7U9WfkIyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIzdGap45CuFO%2FTsEKtwDLWr%2FHIYs6tY8m4Y381VBF1zzTIQlJdKWlMXdZF7LVYd%2FSOLjRWJkm%2Bdsm9X6Hfs9B54TlpxOt3x1rNjoJeM46SsS%2BpJsDjHh%2BfSxoJsEHiBe1T0I54FwZ44wIXI4OgNTZCYFd7vW4jMrgZT3zRqQMP8L9TouOxZZrYiNXIJk%2BG66H8CrcF1ZsC6Gu7YKo7dA7KzTOKeUS%2FryXsVq7YL66ALZWA7nEiO1uDDtUpcKqBlcvOciWGoFlbOvpA6uju%2BOJayG6Hpn3rtHB8SWlpw2FW1mokE6Un5fkUFCFkDiBuZlzu8qH9B%2BFGuXvQzW7VaQRbiwR9ZskXQ3ye4j2pq0o25J43Jly23nRqqSjFoxwUY00IsNib2PxFF%2B1T92UPdZW3AVgt6Dvy2twJiw3Z7%2BuJi6UUq5GPIYuOckdVWPkqOYBb36L1c6VRLZ9Uq1XgBV0mF2R7yKA%2FJZNM1mFFSxjAlU37Lq9eEP9YWmhIVqv8rv5TXW3gXjKWruXfwU2GnRxEYZeIeX9t%2Ft1vYvKQ%2F0at2Z0RXAwAY%2F%2Blzt%2BfYdCZKykT6L34xPTUFMDXFNp0WSwfRIbKgiWE40Ff3E81%2B3Kcs%2Fzj6ZyyHyUyaGxNXgD5hL20HdFJyYhkAXJsIwu4GKwgY6pgFgpYmjNHv9%2F63oiXaLFsZG7UHnLAWZmEYkeyP7u91c124HagxQumKvCmhyld6kxDcWNvukJEbysg5MgP6GrhBfByKwn%2Fo7Szm7OpVyAckXQACgyCIH%2FVzYETWmIu4sM0nMCh7o9p7rWRjZfdCLmBo12Yhkt%2F2Ej1JWk%2FrCit1gB3xa8q1xQvGcnjlKgktksLDv7Xc5T%2B7fjN8R7kf76dkRjQ3OrFHo&X-Amz-Signature=6ba17f815fd6a434018e1f369950b69e8c8bf56325f1d369e29a08fb32aea331&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
