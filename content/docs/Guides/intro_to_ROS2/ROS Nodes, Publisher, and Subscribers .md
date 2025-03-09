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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546W4FAX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIElRjW83z7iLxwT19ITheG6g6DPx1jtC1zBxsRwcXJuWAiBi%2F3P6OEPNQiRPfMusghdqbF55k9nm2vboz8a9%2F5Qv2ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDWVUu6GY0tqAX7WiKtwDVlIEeRVMfdYWdtFv4jIavIvcMQOy5fruDVgHhI1%2F9dYE71ZpHgblQhqZxZkDgYqnZL2raklBAeJFHc2sCR4NGJG2st3Y8D2yXnTRIqcxvGs2KhfYH46Y5116Kc%2BToOp9wTeS2B2YaC1nHcw7KGhPeWJz00quAJT8kVT5%2FMrHZ6ah4ZvQaHIRRNRyW0CTjm7tqBJaUahQGWxzTAI0o0Mis7yGTgL8e1hY%2BUWW3ICqInxMTRH8e4cPE3AWQzYB8yiWyyoFLH9WR9tuD%2FZ%2BfZpAnRdHqFQolLQxELgPTfEcR1JwqG%2F0aikDr2CQI9kw1ALD5dF30eKDmMxTGN1SWJ9gzR4uEshQNaOyROUeP5d%2FO7jmsYHtcWkmB0aShT7drx2HOcWBVQg4FzD8pf%2Fb2NVeAxu2D1v4EJslftbj1551yImc9HXofxcaznKZZhvu0%2BY3Yiz%2BUADiXGXl8TlajoX5n7UnXPClvgzoMaXfcHpWhdOdh0MugYF%2Bg4r7fzDjR7s6ImFG0S0b05UEYQyy4TA9L7uzQH%2BUBsqDIWb1PIiq0lAyFUsR9YwQkub49XfEt71E6Wop57rYO5uvDqaid8arQOeYLx2wShjh9e9Ctt91UehXW7sYNPPO5imjtI8wiOu0vgY6pgGkdw27EOVd97IfyHrmcZX8ve618St%2Fhwt1jZGLGuS8Ia1hTl5EJw67i6Lv%2FXT%2BhYijYUg%2BWpIXkXLxQk8DXCZQqG26VqM3vaNj3t5dz5zzzf0vtGQfGUFAy2SQcuQSyfwAbE7sTc0yazyJOKPBZsAt6DlfLnmPMnaJsEb9Ry6VbLrZtuCO4QZzzFEn%2BmZz7iNX0UMoBieq0rMGHpQOKbGtGfHsI9ML&X-Amz-Signature=ee8eb81b2691673492051586e26bfcb3384b040e0e787e677bee0c6549b4ea6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546W4FAX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIElRjW83z7iLxwT19ITheG6g6DPx1jtC1zBxsRwcXJuWAiBi%2F3P6OEPNQiRPfMusghdqbF55k9nm2vboz8a9%2F5Qv2ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDWVUu6GY0tqAX7WiKtwDVlIEeRVMfdYWdtFv4jIavIvcMQOy5fruDVgHhI1%2F9dYE71ZpHgblQhqZxZkDgYqnZL2raklBAeJFHc2sCR4NGJG2st3Y8D2yXnTRIqcxvGs2KhfYH46Y5116Kc%2BToOp9wTeS2B2YaC1nHcw7KGhPeWJz00quAJT8kVT5%2FMrHZ6ah4ZvQaHIRRNRyW0CTjm7tqBJaUahQGWxzTAI0o0Mis7yGTgL8e1hY%2BUWW3ICqInxMTRH8e4cPE3AWQzYB8yiWyyoFLH9WR9tuD%2FZ%2BfZpAnRdHqFQolLQxELgPTfEcR1JwqG%2F0aikDr2CQI9kw1ALD5dF30eKDmMxTGN1SWJ9gzR4uEshQNaOyROUeP5d%2FO7jmsYHtcWkmB0aShT7drx2HOcWBVQg4FzD8pf%2Fb2NVeAxu2D1v4EJslftbj1551yImc9HXofxcaznKZZhvu0%2BY3Yiz%2BUADiXGXl8TlajoX5n7UnXPClvgzoMaXfcHpWhdOdh0MugYF%2Bg4r7fzDjR7s6ImFG0S0b05UEYQyy4TA9L7uzQH%2BUBsqDIWb1PIiq0lAyFUsR9YwQkub49XfEt71E6Wop57rYO5uvDqaid8arQOeYLx2wShjh9e9Ctt91UehXW7sYNPPO5imjtI8wiOu0vgY6pgGkdw27EOVd97IfyHrmcZX8ve618St%2Fhwt1jZGLGuS8Ia1hTl5EJw67i6Lv%2FXT%2BhYijYUg%2BWpIXkXLxQk8DXCZQqG26VqM3vaNj3t5dz5zzzf0vtGQfGUFAy2SQcuQSyfwAbE7sTc0yazyJOKPBZsAt6DlfLnmPMnaJsEb9Ry6VbLrZtuCO4QZzzFEn%2BmZz7iNX0UMoBieq0rMGHpQOKbGtGfHsI9ML&X-Amz-Signature=85c74e6d312c5dea8ff03ad3ce2a3d183875b559d49b1061d9d5dbaab11d5700&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546W4FAX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIElRjW83z7iLxwT19ITheG6g6DPx1jtC1zBxsRwcXJuWAiBi%2F3P6OEPNQiRPfMusghdqbF55k9nm2vboz8a9%2F5Qv2ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDWVUu6GY0tqAX7WiKtwDVlIEeRVMfdYWdtFv4jIavIvcMQOy5fruDVgHhI1%2F9dYE71ZpHgblQhqZxZkDgYqnZL2raklBAeJFHc2sCR4NGJG2st3Y8D2yXnTRIqcxvGs2KhfYH46Y5116Kc%2BToOp9wTeS2B2YaC1nHcw7KGhPeWJz00quAJT8kVT5%2FMrHZ6ah4ZvQaHIRRNRyW0CTjm7tqBJaUahQGWxzTAI0o0Mis7yGTgL8e1hY%2BUWW3ICqInxMTRH8e4cPE3AWQzYB8yiWyyoFLH9WR9tuD%2FZ%2BfZpAnRdHqFQolLQxELgPTfEcR1JwqG%2F0aikDr2CQI9kw1ALD5dF30eKDmMxTGN1SWJ9gzR4uEshQNaOyROUeP5d%2FO7jmsYHtcWkmB0aShT7drx2HOcWBVQg4FzD8pf%2Fb2NVeAxu2D1v4EJslftbj1551yImc9HXofxcaznKZZhvu0%2BY3Yiz%2BUADiXGXl8TlajoX5n7UnXPClvgzoMaXfcHpWhdOdh0MugYF%2Bg4r7fzDjR7s6ImFG0S0b05UEYQyy4TA9L7uzQH%2BUBsqDIWb1PIiq0lAyFUsR9YwQkub49XfEt71E6Wop57rYO5uvDqaid8arQOeYLx2wShjh9e9Ctt91UehXW7sYNPPO5imjtI8wiOu0vgY6pgGkdw27EOVd97IfyHrmcZX8ve618St%2Fhwt1jZGLGuS8Ia1hTl5EJw67i6Lv%2FXT%2BhYijYUg%2BWpIXkXLxQk8DXCZQqG26VqM3vaNj3t5dz5zzzf0vtGQfGUFAy2SQcuQSyfwAbE7sTc0yazyJOKPBZsAt6DlfLnmPMnaJsEb9Ry6VbLrZtuCO4QZzzFEn%2BmZz7iNX0UMoBieq0rMGHpQOKbGtGfHsI9ML&X-Amz-Signature=0f512e7060c8996a82aae2fbda70e9f9a18c23a4fbe59f5b267e89f21821c56b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546W4FAX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIElRjW83z7iLxwT19ITheG6g6DPx1jtC1zBxsRwcXJuWAiBi%2F3P6OEPNQiRPfMusghdqbF55k9nm2vboz8a9%2F5Qv2ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDWVUu6GY0tqAX7WiKtwDVlIEeRVMfdYWdtFv4jIavIvcMQOy5fruDVgHhI1%2F9dYE71ZpHgblQhqZxZkDgYqnZL2raklBAeJFHc2sCR4NGJG2st3Y8D2yXnTRIqcxvGs2KhfYH46Y5116Kc%2BToOp9wTeS2B2YaC1nHcw7KGhPeWJz00quAJT8kVT5%2FMrHZ6ah4ZvQaHIRRNRyW0CTjm7tqBJaUahQGWxzTAI0o0Mis7yGTgL8e1hY%2BUWW3ICqInxMTRH8e4cPE3AWQzYB8yiWyyoFLH9WR9tuD%2FZ%2BfZpAnRdHqFQolLQxELgPTfEcR1JwqG%2F0aikDr2CQI9kw1ALD5dF30eKDmMxTGN1SWJ9gzR4uEshQNaOyROUeP5d%2FO7jmsYHtcWkmB0aShT7drx2HOcWBVQg4FzD8pf%2Fb2NVeAxu2D1v4EJslftbj1551yImc9HXofxcaznKZZhvu0%2BY3Yiz%2BUADiXGXl8TlajoX5n7UnXPClvgzoMaXfcHpWhdOdh0MugYF%2Bg4r7fzDjR7s6ImFG0S0b05UEYQyy4TA9L7uzQH%2BUBsqDIWb1PIiq0lAyFUsR9YwQkub49XfEt71E6Wop57rYO5uvDqaid8arQOeYLx2wShjh9e9Ctt91UehXW7sYNPPO5imjtI8wiOu0vgY6pgGkdw27EOVd97IfyHrmcZX8ve618St%2Fhwt1jZGLGuS8Ia1hTl5EJw67i6Lv%2FXT%2BhYijYUg%2BWpIXkXLxQk8DXCZQqG26VqM3vaNj3t5dz5zzzf0vtGQfGUFAy2SQcuQSyfwAbE7sTc0yazyJOKPBZsAt6DlfLnmPMnaJsEb9Ry6VbLrZtuCO4QZzzFEn%2BmZz7iNX0UMoBieq0rMGHpQOKbGtGfHsI9ML&X-Amz-Signature=172c821375264a6e14173c49894c72fb62b24754ed71b953b28d233320a41d93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546W4FAX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIElRjW83z7iLxwT19ITheG6g6DPx1jtC1zBxsRwcXJuWAiBi%2F3P6OEPNQiRPfMusghdqbF55k9nm2vboz8a9%2F5Qv2ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDWVUu6GY0tqAX7WiKtwDVlIEeRVMfdYWdtFv4jIavIvcMQOy5fruDVgHhI1%2F9dYE71ZpHgblQhqZxZkDgYqnZL2raklBAeJFHc2sCR4NGJG2st3Y8D2yXnTRIqcxvGs2KhfYH46Y5116Kc%2BToOp9wTeS2B2YaC1nHcw7KGhPeWJz00quAJT8kVT5%2FMrHZ6ah4ZvQaHIRRNRyW0CTjm7tqBJaUahQGWxzTAI0o0Mis7yGTgL8e1hY%2BUWW3ICqInxMTRH8e4cPE3AWQzYB8yiWyyoFLH9WR9tuD%2FZ%2BfZpAnRdHqFQolLQxELgPTfEcR1JwqG%2F0aikDr2CQI9kw1ALD5dF30eKDmMxTGN1SWJ9gzR4uEshQNaOyROUeP5d%2FO7jmsYHtcWkmB0aShT7drx2HOcWBVQg4FzD8pf%2Fb2NVeAxu2D1v4EJslftbj1551yImc9HXofxcaznKZZhvu0%2BY3Yiz%2BUADiXGXl8TlajoX5n7UnXPClvgzoMaXfcHpWhdOdh0MugYF%2Bg4r7fzDjR7s6ImFG0S0b05UEYQyy4TA9L7uzQH%2BUBsqDIWb1PIiq0lAyFUsR9YwQkub49XfEt71E6Wop57rYO5uvDqaid8arQOeYLx2wShjh9e9Ctt91UehXW7sYNPPO5imjtI8wiOu0vgY6pgGkdw27EOVd97IfyHrmcZX8ve618St%2Fhwt1jZGLGuS8Ia1hTl5EJw67i6Lv%2FXT%2BhYijYUg%2BWpIXkXLxQk8DXCZQqG26VqM3vaNj3t5dz5zzzf0vtGQfGUFAy2SQcuQSyfwAbE7sTc0yazyJOKPBZsAt6DlfLnmPMnaJsEb9Ry6VbLrZtuCO4QZzzFEn%2BmZz7iNX0UMoBieq0rMGHpQOKbGtGfHsI9ML&X-Amz-Signature=57e1b155d26919ecdc7f59421192ac1ff416b13918d64b84799134cd95d6d372&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546W4FAX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIElRjW83z7iLxwT19ITheG6g6DPx1jtC1zBxsRwcXJuWAiBi%2F3P6OEPNQiRPfMusghdqbF55k9nm2vboz8a9%2F5Qv2ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDWVUu6GY0tqAX7WiKtwDVlIEeRVMfdYWdtFv4jIavIvcMQOy5fruDVgHhI1%2F9dYE71ZpHgblQhqZxZkDgYqnZL2raklBAeJFHc2sCR4NGJG2st3Y8D2yXnTRIqcxvGs2KhfYH46Y5116Kc%2BToOp9wTeS2B2YaC1nHcw7KGhPeWJz00quAJT8kVT5%2FMrHZ6ah4ZvQaHIRRNRyW0CTjm7tqBJaUahQGWxzTAI0o0Mis7yGTgL8e1hY%2BUWW3ICqInxMTRH8e4cPE3AWQzYB8yiWyyoFLH9WR9tuD%2FZ%2BfZpAnRdHqFQolLQxELgPTfEcR1JwqG%2F0aikDr2CQI9kw1ALD5dF30eKDmMxTGN1SWJ9gzR4uEshQNaOyROUeP5d%2FO7jmsYHtcWkmB0aShT7drx2HOcWBVQg4FzD8pf%2Fb2NVeAxu2D1v4EJslftbj1551yImc9HXofxcaznKZZhvu0%2BY3Yiz%2BUADiXGXl8TlajoX5n7UnXPClvgzoMaXfcHpWhdOdh0MugYF%2Bg4r7fzDjR7s6ImFG0S0b05UEYQyy4TA9L7uzQH%2BUBsqDIWb1PIiq0lAyFUsR9YwQkub49XfEt71E6Wop57rYO5uvDqaid8arQOeYLx2wShjh9e9Ctt91UehXW7sYNPPO5imjtI8wiOu0vgY6pgGkdw27EOVd97IfyHrmcZX8ve618St%2Fhwt1jZGLGuS8Ia1hTl5EJw67i6Lv%2FXT%2BhYijYUg%2BWpIXkXLxQk8DXCZQqG26VqM3vaNj3t5dz5zzzf0vtGQfGUFAy2SQcuQSyfwAbE7sTc0yazyJOKPBZsAt6DlfLnmPMnaJsEb9Ry6VbLrZtuCO4QZzzFEn%2BmZz7iNX0UMoBieq0rMGHpQOKbGtGfHsI9ML&X-Amz-Signature=18c311d96af50a6991240bac83562505c89b9fec18f1ad2b14fa9039fec5d365&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546W4FAX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIElRjW83z7iLxwT19ITheG6g6DPx1jtC1zBxsRwcXJuWAiBi%2F3P6OEPNQiRPfMusghdqbF55k9nm2vboz8a9%2F5Qv2ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDWVUu6GY0tqAX7WiKtwDVlIEeRVMfdYWdtFv4jIavIvcMQOy5fruDVgHhI1%2F9dYE71ZpHgblQhqZxZkDgYqnZL2raklBAeJFHc2sCR4NGJG2st3Y8D2yXnTRIqcxvGs2KhfYH46Y5116Kc%2BToOp9wTeS2B2YaC1nHcw7KGhPeWJz00quAJT8kVT5%2FMrHZ6ah4ZvQaHIRRNRyW0CTjm7tqBJaUahQGWxzTAI0o0Mis7yGTgL8e1hY%2BUWW3ICqInxMTRH8e4cPE3AWQzYB8yiWyyoFLH9WR9tuD%2FZ%2BfZpAnRdHqFQolLQxELgPTfEcR1JwqG%2F0aikDr2CQI9kw1ALD5dF30eKDmMxTGN1SWJ9gzR4uEshQNaOyROUeP5d%2FO7jmsYHtcWkmB0aShT7drx2HOcWBVQg4FzD8pf%2Fb2NVeAxu2D1v4EJslftbj1551yImc9HXofxcaznKZZhvu0%2BY3Yiz%2BUADiXGXl8TlajoX5n7UnXPClvgzoMaXfcHpWhdOdh0MugYF%2Bg4r7fzDjR7s6ImFG0S0b05UEYQyy4TA9L7uzQH%2BUBsqDIWb1PIiq0lAyFUsR9YwQkub49XfEt71E6Wop57rYO5uvDqaid8arQOeYLx2wShjh9e9Ctt91UehXW7sYNPPO5imjtI8wiOu0vgY6pgGkdw27EOVd97IfyHrmcZX8ve618St%2Fhwt1jZGLGuS8Ia1hTl5EJw67i6Lv%2FXT%2BhYijYUg%2BWpIXkXLxQk8DXCZQqG26VqM3vaNj3t5dz5zzzf0vtGQfGUFAy2SQcuQSyfwAbE7sTc0yazyJOKPBZsAt6DlfLnmPMnaJsEb9Ry6VbLrZtuCO4QZzzFEn%2BmZz7iNX0UMoBieq0rMGHpQOKbGtGfHsI9ML&X-Amz-Signature=8c36158b0f0b2205fb130fb1829dc7db75a82e3d9d9cbe9acf778204911f4fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546W4FAX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIElRjW83z7iLxwT19ITheG6g6DPx1jtC1zBxsRwcXJuWAiBi%2F3P6OEPNQiRPfMusghdqbF55k9nm2vboz8a9%2F5Qv2ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMDWVUu6GY0tqAX7WiKtwDVlIEeRVMfdYWdtFv4jIavIvcMQOy5fruDVgHhI1%2F9dYE71ZpHgblQhqZxZkDgYqnZL2raklBAeJFHc2sCR4NGJG2st3Y8D2yXnTRIqcxvGs2KhfYH46Y5116Kc%2BToOp9wTeS2B2YaC1nHcw7KGhPeWJz00quAJT8kVT5%2FMrHZ6ah4ZvQaHIRRNRyW0CTjm7tqBJaUahQGWxzTAI0o0Mis7yGTgL8e1hY%2BUWW3ICqInxMTRH8e4cPE3AWQzYB8yiWyyoFLH9WR9tuD%2FZ%2BfZpAnRdHqFQolLQxELgPTfEcR1JwqG%2F0aikDr2CQI9kw1ALD5dF30eKDmMxTGN1SWJ9gzR4uEshQNaOyROUeP5d%2FO7jmsYHtcWkmB0aShT7drx2HOcWBVQg4FzD8pf%2Fb2NVeAxu2D1v4EJslftbj1551yImc9HXofxcaznKZZhvu0%2BY3Yiz%2BUADiXGXl8TlajoX5n7UnXPClvgzoMaXfcHpWhdOdh0MugYF%2Bg4r7fzDjR7s6ImFG0S0b05UEYQyy4TA9L7uzQH%2BUBsqDIWb1PIiq0lAyFUsR9YwQkub49XfEt71E6Wop57rYO5uvDqaid8arQOeYLx2wShjh9e9Ctt91UehXW7sYNPPO5imjtI8wiOu0vgY6pgGkdw27EOVd97IfyHrmcZX8ve618St%2Fhwt1jZGLGuS8Ia1hTl5EJw67i6Lv%2FXT%2BhYijYUg%2BWpIXkXLxQk8DXCZQqG26VqM3vaNj3t5dz5zzzf0vtGQfGUFAy2SQcuQSyfwAbE7sTc0yazyJOKPBZsAt6DlfLnmPMnaJsEb9Ry6VbLrZtuCO4QZzzFEn%2BmZz7iNX0UMoBieq0rMGHpQOKbGtGfHsI9ML&X-Amz-Signature=879277fb35a81035ecf8ae475d6bab0d30f9a2733fecf0ba4142e234695ac9eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
