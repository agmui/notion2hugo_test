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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQX772D4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0emt7xgaDLyd3Pw8yp%2BILd7x51W2zg4CU3LK9Mbhs0CIQDv4Cx%2FWvF6WHWCffDcq%2Bq2nuACFD1hDBc8hvzLdmktiSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMIKlSMec6HIoOkayaKtwDXlJg57UjzKnWZmZorLkseufqrBRj%2F14luVlgDEa4BzEurFGX6zNiZ4nneShPlYCQEGhr5xlPC0wanwwbDF7turNYMY9A%2FY8aAtBAa7RyX5dWKofsTLL3BfF34CHK1yor5iYZm5d0PY01PZyX%2FSP5r5kc3Sr5hNd%2B0e8cghB9RTNrz3u1os4AYlKpDRFZtV4GL3z6mb4dLUDhdUd0PlQaZZpjJg7nm9x6NIYT0yYPuw4X8VSf75AqBtSsuM8GDCU8TCoiHVamW1z%2FajqrieEzdEYjD977Euh1V5GkeT85ZvAIZp7VDM4yY6OlEJH9SwmRFMJjkPh2GzOY1b1xlxRcEEhz0raQo%2BeZMQMFLKHGPYeIWV%2BtsVdbh9tREiyQ%2FbFs7yn7HI0DUbug3bCTZNo9s%2Feod1LHhvkrVOo6g3PjwktDzIXUaucCVulydCnG0YjoDkSuWgrlFnJx3ZdcXvpBh3moB6qq%2BqPhaw6MutfLyJsDtkL9DoXWUtNDOyS4%2FSTk4P5UJcCWzZIw2%2B1g0TulAiwTQsY1JOFejRfcC4fkD2syf%2BCQq96X5ERympv%2FUlPWuPaVCrHpTs8Ch5ka1wMbWFnLXIj0hHrYqUgU2G7yN6u%2BvfqQyqbAGcQGB2gwpprzwAY6pgGmL7zBFtMKU%2FyQLQ1ZRYH27%2FBKiN9hSgRjY5O8H3kKp8MnpuyptuBk2QOyLIF9LkT1wPJplqzlbmHkzOiCJ%2FU84PpCvLwhVPHvy9Dt5gdzl6U1SU%2FmPeSOjh2kFjIvWfIrYHCMF0Ld71gf0G9TvqkXEkE6WsgeHGUfBYxki0ISD7IzKP3FgWUOOFQHz3Aw4Ap4%2FqiTa3fP5G2R8yvKKWoqv0PguoPu&X-Amz-Signature=3267b70d8c6ee7a4151f688d17369782f2564c46bbfaa2a07e95aea7fec13721&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQX772D4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0emt7xgaDLyd3Pw8yp%2BILd7x51W2zg4CU3LK9Mbhs0CIQDv4Cx%2FWvF6WHWCffDcq%2Bq2nuACFD1hDBc8hvzLdmktiSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMIKlSMec6HIoOkayaKtwDXlJg57UjzKnWZmZorLkseufqrBRj%2F14luVlgDEa4BzEurFGX6zNiZ4nneShPlYCQEGhr5xlPC0wanwwbDF7turNYMY9A%2FY8aAtBAa7RyX5dWKofsTLL3BfF34CHK1yor5iYZm5d0PY01PZyX%2FSP5r5kc3Sr5hNd%2B0e8cghB9RTNrz3u1os4AYlKpDRFZtV4GL3z6mb4dLUDhdUd0PlQaZZpjJg7nm9x6NIYT0yYPuw4X8VSf75AqBtSsuM8GDCU8TCoiHVamW1z%2FajqrieEzdEYjD977Euh1V5GkeT85ZvAIZp7VDM4yY6OlEJH9SwmRFMJjkPh2GzOY1b1xlxRcEEhz0raQo%2BeZMQMFLKHGPYeIWV%2BtsVdbh9tREiyQ%2FbFs7yn7HI0DUbug3bCTZNo9s%2Feod1LHhvkrVOo6g3PjwktDzIXUaucCVulydCnG0YjoDkSuWgrlFnJx3ZdcXvpBh3moB6qq%2BqPhaw6MutfLyJsDtkL9DoXWUtNDOyS4%2FSTk4P5UJcCWzZIw2%2B1g0TulAiwTQsY1JOFejRfcC4fkD2syf%2BCQq96X5ERympv%2FUlPWuPaVCrHpTs8Ch5ka1wMbWFnLXIj0hHrYqUgU2G7yN6u%2BvfqQyqbAGcQGB2gwpprzwAY6pgGmL7zBFtMKU%2FyQLQ1ZRYH27%2FBKiN9hSgRjY5O8H3kKp8MnpuyptuBk2QOyLIF9LkT1wPJplqzlbmHkzOiCJ%2FU84PpCvLwhVPHvy9Dt5gdzl6U1SU%2FmPeSOjh2kFjIvWfIrYHCMF0Ld71gf0G9TvqkXEkE6WsgeHGUfBYxki0ISD7IzKP3FgWUOOFQHz3Aw4Ap4%2FqiTa3fP5G2R8yvKKWoqv0PguoPu&X-Amz-Signature=8a53568b08c3280c10c1ed7416cbb5247a58dd46f47b314d2f4ac2420a266f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQX772D4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0emt7xgaDLyd3Pw8yp%2BILd7x51W2zg4CU3LK9Mbhs0CIQDv4Cx%2FWvF6WHWCffDcq%2Bq2nuACFD1hDBc8hvzLdmktiSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMIKlSMec6HIoOkayaKtwDXlJg57UjzKnWZmZorLkseufqrBRj%2F14luVlgDEa4BzEurFGX6zNiZ4nneShPlYCQEGhr5xlPC0wanwwbDF7turNYMY9A%2FY8aAtBAa7RyX5dWKofsTLL3BfF34CHK1yor5iYZm5d0PY01PZyX%2FSP5r5kc3Sr5hNd%2B0e8cghB9RTNrz3u1os4AYlKpDRFZtV4GL3z6mb4dLUDhdUd0PlQaZZpjJg7nm9x6NIYT0yYPuw4X8VSf75AqBtSsuM8GDCU8TCoiHVamW1z%2FajqrieEzdEYjD977Euh1V5GkeT85ZvAIZp7VDM4yY6OlEJH9SwmRFMJjkPh2GzOY1b1xlxRcEEhz0raQo%2BeZMQMFLKHGPYeIWV%2BtsVdbh9tREiyQ%2FbFs7yn7HI0DUbug3bCTZNo9s%2Feod1LHhvkrVOo6g3PjwktDzIXUaucCVulydCnG0YjoDkSuWgrlFnJx3ZdcXvpBh3moB6qq%2BqPhaw6MutfLyJsDtkL9DoXWUtNDOyS4%2FSTk4P5UJcCWzZIw2%2B1g0TulAiwTQsY1JOFejRfcC4fkD2syf%2BCQq96X5ERympv%2FUlPWuPaVCrHpTs8Ch5ka1wMbWFnLXIj0hHrYqUgU2G7yN6u%2BvfqQyqbAGcQGB2gwpprzwAY6pgGmL7zBFtMKU%2FyQLQ1ZRYH27%2FBKiN9hSgRjY5O8H3kKp8MnpuyptuBk2QOyLIF9LkT1wPJplqzlbmHkzOiCJ%2FU84PpCvLwhVPHvy9Dt5gdzl6U1SU%2FmPeSOjh2kFjIvWfIrYHCMF0Ld71gf0G9TvqkXEkE6WsgeHGUfBYxki0ISD7IzKP3FgWUOOFQHz3Aw4Ap4%2FqiTa3fP5G2R8yvKKWoqv0PguoPu&X-Amz-Signature=90cdf0812772a8ceae646fbd469569597d7e119d93d3be1b50c506d3af2f222d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQX772D4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0emt7xgaDLyd3Pw8yp%2BILd7x51W2zg4CU3LK9Mbhs0CIQDv4Cx%2FWvF6WHWCffDcq%2Bq2nuACFD1hDBc8hvzLdmktiSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMIKlSMec6HIoOkayaKtwDXlJg57UjzKnWZmZorLkseufqrBRj%2F14luVlgDEa4BzEurFGX6zNiZ4nneShPlYCQEGhr5xlPC0wanwwbDF7turNYMY9A%2FY8aAtBAa7RyX5dWKofsTLL3BfF34CHK1yor5iYZm5d0PY01PZyX%2FSP5r5kc3Sr5hNd%2B0e8cghB9RTNrz3u1os4AYlKpDRFZtV4GL3z6mb4dLUDhdUd0PlQaZZpjJg7nm9x6NIYT0yYPuw4X8VSf75AqBtSsuM8GDCU8TCoiHVamW1z%2FajqrieEzdEYjD977Euh1V5GkeT85ZvAIZp7VDM4yY6OlEJH9SwmRFMJjkPh2GzOY1b1xlxRcEEhz0raQo%2BeZMQMFLKHGPYeIWV%2BtsVdbh9tREiyQ%2FbFs7yn7HI0DUbug3bCTZNo9s%2Feod1LHhvkrVOo6g3PjwktDzIXUaucCVulydCnG0YjoDkSuWgrlFnJx3ZdcXvpBh3moB6qq%2BqPhaw6MutfLyJsDtkL9DoXWUtNDOyS4%2FSTk4P5UJcCWzZIw2%2B1g0TulAiwTQsY1JOFejRfcC4fkD2syf%2BCQq96X5ERympv%2FUlPWuPaVCrHpTs8Ch5ka1wMbWFnLXIj0hHrYqUgU2G7yN6u%2BvfqQyqbAGcQGB2gwpprzwAY6pgGmL7zBFtMKU%2FyQLQ1ZRYH27%2FBKiN9hSgRjY5O8H3kKp8MnpuyptuBk2QOyLIF9LkT1wPJplqzlbmHkzOiCJ%2FU84PpCvLwhVPHvy9Dt5gdzl6U1SU%2FmPeSOjh2kFjIvWfIrYHCMF0Ld71gf0G9TvqkXEkE6WsgeHGUfBYxki0ISD7IzKP3FgWUOOFQHz3Aw4Ap4%2FqiTa3fP5G2R8yvKKWoqv0PguoPu&X-Amz-Signature=e6da023fe52f9da88ed1cfd979ef1cf7f9915aefc7d0472cf05d938d99e8fc51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQX772D4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0emt7xgaDLyd3Pw8yp%2BILd7x51W2zg4CU3LK9Mbhs0CIQDv4Cx%2FWvF6WHWCffDcq%2Bq2nuACFD1hDBc8hvzLdmktiSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMIKlSMec6HIoOkayaKtwDXlJg57UjzKnWZmZorLkseufqrBRj%2F14luVlgDEa4BzEurFGX6zNiZ4nneShPlYCQEGhr5xlPC0wanwwbDF7turNYMY9A%2FY8aAtBAa7RyX5dWKofsTLL3BfF34CHK1yor5iYZm5d0PY01PZyX%2FSP5r5kc3Sr5hNd%2B0e8cghB9RTNrz3u1os4AYlKpDRFZtV4GL3z6mb4dLUDhdUd0PlQaZZpjJg7nm9x6NIYT0yYPuw4X8VSf75AqBtSsuM8GDCU8TCoiHVamW1z%2FajqrieEzdEYjD977Euh1V5GkeT85ZvAIZp7VDM4yY6OlEJH9SwmRFMJjkPh2GzOY1b1xlxRcEEhz0raQo%2BeZMQMFLKHGPYeIWV%2BtsVdbh9tREiyQ%2FbFs7yn7HI0DUbug3bCTZNo9s%2Feod1LHhvkrVOo6g3PjwktDzIXUaucCVulydCnG0YjoDkSuWgrlFnJx3ZdcXvpBh3moB6qq%2BqPhaw6MutfLyJsDtkL9DoXWUtNDOyS4%2FSTk4P5UJcCWzZIw2%2B1g0TulAiwTQsY1JOFejRfcC4fkD2syf%2BCQq96X5ERympv%2FUlPWuPaVCrHpTs8Ch5ka1wMbWFnLXIj0hHrYqUgU2G7yN6u%2BvfqQyqbAGcQGB2gwpprzwAY6pgGmL7zBFtMKU%2FyQLQ1ZRYH27%2FBKiN9hSgRjY5O8H3kKp8MnpuyptuBk2QOyLIF9LkT1wPJplqzlbmHkzOiCJ%2FU84PpCvLwhVPHvy9Dt5gdzl6U1SU%2FmPeSOjh2kFjIvWfIrYHCMF0Ld71gf0G9TvqkXEkE6WsgeHGUfBYxki0ISD7IzKP3FgWUOOFQHz3Aw4Ap4%2FqiTa3fP5G2R8yvKKWoqv0PguoPu&X-Amz-Signature=b824947a45efcf25e8ca93ae06a7bc60593b3ddba4da4e0e670d2ced5f215b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQX772D4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0emt7xgaDLyd3Pw8yp%2BILd7x51W2zg4CU3LK9Mbhs0CIQDv4Cx%2FWvF6WHWCffDcq%2Bq2nuACFD1hDBc8hvzLdmktiSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMIKlSMec6HIoOkayaKtwDXlJg57UjzKnWZmZorLkseufqrBRj%2F14luVlgDEa4BzEurFGX6zNiZ4nneShPlYCQEGhr5xlPC0wanwwbDF7turNYMY9A%2FY8aAtBAa7RyX5dWKofsTLL3BfF34CHK1yor5iYZm5d0PY01PZyX%2FSP5r5kc3Sr5hNd%2B0e8cghB9RTNrz3u1os4AYlKpDRFZtV4GL3z6mb4dLUDhdUd0PlQaZZpjJg7nm9x6NIYT0yYPuw4X8VSf75AqBtSsuM8GDCU8TCoiHVamW1z%2FajqrieEzdEYjD977Euh1V5GkeT85ZvAIZp7VDM4yY6OlEJH9SwmRFMJjkPh2GzOY1b1xlxRcEEhz0raQo%2BeZMQMFLKHGPYeIWV%2BtsVdbh9tREiyQ%2FbFs7yn7HI0DUbug3bCTZNo9s%2Feod1LHhvkrVOo6g3PjwktDzIXUaucCVulydCnG0YjoDkSuWgrlFnJx3ZdcXvpBh3moB6qq%2BqPhaw6MutfLyJsDtkL9DoXWUtNDOyS4%2FSTk4P5UJcCWzZIw2%2B1g0TulAiwTQsY1JOFejRfcC4fkD2syf%2BCQq96X5ERympv%2FUlPWuPaVCrHpTs8Ch5ka1wMbWFnLXIj0hHrYqUgU2G7yN6u%2BvfqQyqbAGcQGB2gwpprzwAY6pgGmL7zBFtMKU%2FyQLQ1ZRYH27%2FBKiN9hSgRjY5O8H3kKp8MnpuyptuBk2QOyLIF9LkT1wPJplqzlbmHkzOiCJ%2FU84PpCvLwhVPHvy9Dt5gdzl6U1SU%2FmPeSOjh2kFjIvWfIrYHCMF0Ld71gf0G9TvqkXEkE6WsgeHGUfBYxki0ISD7IzKP3FgWUOOFQHz3Aw4Ap4%2FqiTa3fP5G2R8yvKKWoqv0PguoPu&X-Amz-Signature=eb4d57b048239a4f833bf7f63f131748637f5355b23033e7552eb5d951795223&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQX772D4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0emt7xgaDLyd3Pw8yp%2BILd7x51W2zg4CU3LK9Mbhs0CIQDv4Cx%2FWvF6WHWCffDcq%2Bq2nuACFD1hDBc8hvzLdmktiSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMIKlSMec6HIoOkayaKtwDXlJg57UjzKnWZmZorLkseufqrBRj%2F14luVlgDEa4BzEurFGX6zNiZ4nneShPlYCQEGhr5xlPC0wanwwbDF7turNYMY9A%2FY8aAtBAa7RyX5dWKofsTLL3BfF34CHK1yor5iYZm5d0PY01PZyX%2FSP5r5kc3Sr5hNd%2B0e8cghB9RTNrz3u1os4AYlKpDRFZtV4GL3z6mb4dLUDhdUd0PlQaZZpjJg7nm9x6NIYT0yYPuw4X8VSf75AqBtSsuM8GDCU8TCoiHVamW1z%2FajqrieEzdEYjD977Euh1V5GkeT85ZvAIZp7VDM4yY6OlEJH9SwmRFMJjkPh2GzOY1b1xlxRcEEhz0raQo%2BeZMQMFLKHGPYeIWV%2BtsVdbh9tREiyQ%2FbFs7yn7HI0DUbug3bCTZNo9s%2Feod1LHhvkrVOo6g3PjwktDzIXUaucCVulydCnG0YjoDkSuWgrlFnJx3ZdcXvpBh3moB6qq%2BqPhaw6MutfLyJsDtkL9DoXWUtNDOyS4%2FSTk4P5UJcCWzZIw2%2B1g0TulAiwTQsY1JOFejRfcC4fkD2syf%2BCQq96X5ERympv%2FUlPWuPaVCrHpTs8Ch5ka1wMbWFnLXIj0hHrYqUgU2G7yN6u%2BvfqQyqbAGcQGB2gwpprzwAY6pgGmL7zBFtMKU%2FyQLQ1ZRYH27%2FBKiN9hSgRjY5O8H3kKp8MnpuyptuBk2QOyLIF9LkT1wPJplqzlbmHkzOiCJ%2FU84PpCvLwhVPHvy9Dt5gdzl6U1SU%2FmPeSOjh2kFjIvWfIrYHCMF0Ld71gf0G9TvqkXEkE6WsgeHGUfBYxki0ISD7IzKP3FgWUOOFQHz3Aw4Ap4%2FqiTa3fP5G2R8yvKKWoqv0PguoPu&X-Amz-Signature=d53a73be8e5fa57f5ca247e313f129351b097de1b77ea5a8b061b0ee3bfd6c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQX772D4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0emt7xgaDLyd3Pw8yp%2BILd7x51W2zg4CU3LK9Mbhs0CIQDv4Cx%2FWvF6WHWCffDcq%2Bq2nuACFD1hDBc8hvzLdmktiSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMIKlSMec6HIoOkayaKtwDXlJg57UjzKnWZmZorLkseufqrBRj%2F14luVlgDEa4BzEurFGX6zNiZ4nneShPlYCQEGhr5xlPC0wanwwbDF7turNYMY9A%2FY8aAtBAa7RyX5dWKofsTLL3BfF34CHK1yor5iYZm5d0PY01PZyX%2FSP5r5kc3Sr5hNd%2B0e8cghB9RTNrz3u1os4AYlKpDRFZtV4GL3z6mb4dLUDhdUd0PlQaZZpjJg7nm9x6NIYT0yYPuw4X8VSf75AqBtSsuM8GDCU8TCoiHVamW1z%2FajqrieEzdEYjD977Euh1V5GkeT85ZvAIZp7VDM4yY6OlEJH9SwmRFMJjkPh2GzOY1b1xlxRcEEhz0raQo%2BeZMQMFLKHGPYeIWV%2BtsVdbh9tREiyQ%2FbFs7yn7HI0DUbug3bCTZNo9s%2Feod1LHhvkrVOo6g3PjwktDzIXUaucCVulydCnG0YjoDkSuWgrlFnJx3ZdcXvpBh3moB6qq%2BqPhaw6MutfLyJsDtkL9DoXWUtNDOyS4%2FSTk4P5UJcCWzZIw2%2B1g0TulAiwTQsY1JOFejRfcC4fkD2syf%2BCQq96X5ERympv%2FUlPWuPaVCrHpTs8Ch5ka1wMbWFnLXIj0hHrYqUgU2G7yN6u%2BvfqQyqbAGcQGB2gwpprzwAY6pgGmL7zBFtMKU%2FyQLQ1ZRYH27%2FBKiN9hSgRjY5O8H3kKp8MnpuyptuBk2QOyLIF9LkT1wPJplqzlbmHkzOiCJ%2FU84PpCvLwhVPHvy9Dt5gdzl6U1SU%2FmPeSOjh2kFjIvWfIrYHCMF0Ld71gf0G9TvqkXEkE6WsgeHGUfBYxki0ISD7IzKP3FgWUOOFQHz3Aw4Ap4%2FqiTa3fP5G2R8yvKKWoqv0PguoPu&X-Amz-Signature=4fe7e3e9aeb54df73cabfc2b102ec8cdaca61ba38196b3ee2796c616a23f4d51&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
