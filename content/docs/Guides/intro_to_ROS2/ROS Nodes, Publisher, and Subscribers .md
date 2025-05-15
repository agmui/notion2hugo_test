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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTW7QUP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkJVufPUlcXFtOatj54lks%2Bl86rKAjQioo5Puo51P8CwIhAKZSHdbvNOlPCyWmoBN74F1ySF%2BNbq37W8jaqaBZYC%2F0Kv8DCC0QABoMNjM3NDIzMTgzODA1Igx4Dqz8dvL3fWT%2B6owq3AMJRrSNDdq6qevjIumO%2F%2FkQ4PwYIjAxnwjUsRJ4HE8yW7i3juYxZMLTlVlezLrLu92%2F%2B8uMb6FBeZoDVOUrF2%2BCfgNqvVkRszghjKhYuN3lrawp6I6db2ZytqyCJjzHWHmMG7x6GrrwR3gOgbFct08xXHCYKqm%2BCtI%2F4epkSJdZCsiGAWuDOMzW7bqjaqs2v6Ox%2FmNIegTiYHI0pg1caNnPkUahlSE2JfbKWggwvp0I1Qao1%2BmExBE1OKjSB3GlERXNCt%2FcPQ6COEuzDqMQfPbrYSGmw0DobfpAoaLfWIlOS9M05a0t1W9nxKe4m%2BxIrmErn%2B0UHdRS1Nig7QnAHT8JEGxZkSrw7snR4yEQtfAY62lgn%2FJWgs0F3btGb6csXrotctsMKJdPg8U8gf8AATKxrV7kdwF4xjaj6fb1NBcL6UPy8hLUtIuPYbXbq2TAYLus78szsAjvYxQnwxvlmzMj0HzlQnCy6xO3Qz1KW4inipANG8OVNHaGbHJBtnwVFJvn9euc9%2BecSA5EvF2w0R6M7T%2B43Cx%2Buw11uJ1nt6KYq7Fahs%2B6Ajqauzy7GyO%2BQHtKTsOdSwVO1c4bL4BUDOLb7K51xYCydlGjq1seqmq%2FdQgc7xe%2BOezxGanvdDChupfBBjqkAY1G5gCS168kfNhOJPiGMqeboJN1N1on2ken231KkG6P3AU%2Bv41ODiJxFuZ9ucyT4u0b8NLc53HUjDdDbUK9cuTXVF42D%2B9H39fQqQZu4TaPH21qvdWL5xQ%2FqtuwSzO3mxWq2x%2B1C1hD%2Fqmsb7Rp4NrO3O7v%2F77ynm4sNgoHSfICktxXe9%2BestY59Fl%2BbwlzkNQNvhVC8v9Jb9Uu%2B25XUUQn9JsH&X-Amz-Signature=54d059533c59956c9ee642b340d154b11ff5f11992117aa56d5b297bc9619f54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTW7QUP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkJVufPUlcXFtOatj54lks%2Bl86rKAjQioo5Puo51P8CwIhAKZSHdbvNOlPCyWmoBN74F1ySF%2BNbq37W8jaqaBZYC%2F0Kv8DCC0QABoMNjM3NDIzMTgzODA1Igx4Dqz8dvL3fWT%2B6owq3AMJRrSNDdq6qevjIumO%2F%2FkQ4PwYIjAxnwjUsRJ4HE8yW7i3juYxZMLTlVlezLrLu92%2F%2B8uMb6FBeZoDVOUrF2%2BCfgNqvVkRszghjKhYuN3lrawp6I6db2ZytqyCJjzHWHmMG7x6GrrwR3gOgbFct08xXHCYKqm%2BCtI%2F4epkSJdZCsiGAWuDOMzW7bqjaqs2v6Ox%2FmNIegTiYHI0pg1caNnPkUahlSE2JfbKWggwvp0I1Qao1%2BmExBE1OKjSB3GlERXNCt%2FcPQ6COEuzDqMQfPbrYSGmw0DobfpAoaLfWIlOS9M05a0t1W9nxKe4m%2BxIrmErn%2B0UHdRS1Nig7QnAHT8JEGxZkSrw7snR4yEQtfAY62lgn%2FJWgs0F3btGb6csXrotctsMKJdPg8U8gf8AATKxrV7kdwF4xjaj6fb1NBcL6UPy8hLUtIuPYbXbq2TAYLus78szsAjvYxQnwxvlmzMj0HzlQnCy6xO3Qz1KW4inipANG8OVNHaGbHJBtnwVFJvn9euc9%2BecSA5EvF2w0R6M7T%2B43Cx%2Buw11uJ1nt6KYq7Fahs%2B6Ajqauzy7GyO%2BQHtKTsOdSwVO1c4bL4BUDOLb7K51xYCydlGjq1seqmq%2FdQgc7xe%2BOezxGanvdDChupfBBjqkAY1G5gCS168kfNhOJPiGMqeboJN1N1on2ken231KkG6P3AU%2Bv41ODiJxFuZ9ucyT4u0b8NLc53HUjDdDbUK9cuTXVF42D%2B9H39fQqQZu4TaPH21qvdWL5xQ%2FqtuwSzO3mxWq2x%2B1C1hD%2Fqmsb7Rp4NrO3O7v%2F77ynm4sNgoHSfICktxXe9%2BestY59Fl%2BbwlzkNQNvhVC8v9Jb9Uu%2B25XUUQn9JsH&X-Amz-Signature=e9ad0e2d1b858f63a59275c6c41a6d2e7a70db019b2c70f4d17033789153fe5f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTW7QUP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkJVufPUlcXFtOatj54lks%2Bl86rKAjQioo5Puo51P8CwIhAKZSHdbvNOlPCyWmoBN74F1ySF%2BNbq37W8jaqaBZYC%2F0Kv8DCC0QABoMNjM3NDIzMTgzODA1Igx4Dqz8dvL3fWT%2B6owq3AMJRrSNDdq6qevjIumO%2F%2FkQ4PwYIjAxnwjUsRJ4HE8yW7i3juYxZMLTlVlezLrLu92%2F%2B8uMb6FBeZoDVOUrF2%2BCfgNqvVkRszghjKhYuN3lrawp6I6db2ZytqyCJjzHWHmMG7x6GrrwR3gOgbFct08xXHCYKqm%2BCtI%2F4epkSJdZCsiGAWuDOMzW7bqjaqs2v6Ox%2FmNIegTiYHI0pg1caNnPkUahlSE2JfbKWggwvp0I1Qao1%2BmExBE1OKjSB3GlERXNCt%2FcPQ6COEuzDqMQfPbrYSGmw0DobfpAoaLfWIlOS9M05a0t1W9nxKe4m%2BxIrmErn%2B0UHdRS1Nig7QnAHT8JEGxZkSrw7snR4yEQtfAY62lgn%2FJWgs0F3btGb6csXrotctsMKJdPg8U8gf8AATKxrV7kdwF4xjaj6fb1NBcL6UPy8hLUtIuPYbXbq2TAYLus78szsAjvYxQnwxvlmzMj0HzlQnCy6xO3Qz1KW4inipANG8OVNHaGbHJBtnwVFJvn9euc9%2BecSA5EvF2w0R6M7T%2B43Cx%2Buw11uJ1nt6KYq7Fahs%2B6Ajqauzy7GyO%2BQHtKTsOdSwVO1c4bL4BUDOLb7K51xYCydlGjq1seqmq%2FdQgc7xe%2BOezxGanvdDChupfBBjqkAY1G5gCS168kfNhOJPiGMqeboJN1N1on2ken231KkG6P3AU%2Bv41ODiJxFuZ9ucyT4u0b8NLc53HUjDdDbUK9cuTXVF42D%2B9H39fQqQZu4TaPH21qvdWL5xQ%2FqtuwSzO3mxWq2x%2B1C1hD%2Fqmsb7Rp4NrO3O7v%2F77ynm4sNgoHSfICktxXe9%2BestY59Fl%2BbwlzkNQNvhVC8v9Jb9Uu%2B25XUUQn9JsH&X-Amz-Signature=b1cf6945343ded71a7ad8436635d45362bc72addb39f4a77364375887e1246a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTW7QUP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkJVufPUlcXFtOatj54lks%2Bl86rKAjQioo5Puo51P8CwIhAKZSHdbvNOlPCyWmoBN74F1ySF%2BNbq37W8jaqaBZYC%2F0Kv8DCC0QABoMNjM3NDIzMTgzODA1Igx4Dqz8dvL3fWT%2B6owq3AMJRrSNDdq6qevjIumO%2F%2FkQ4PwYIjAxnwjUsRJ4HE8yW7i3juYxZMLTlVlezLrLu92%2F%2B8uMb6FBeZoDVOUrF2%2BCfgNqvVkRszghjKhYuN3lrawp6I6db2ZytqyCJjzHWHmMG7x6GrrwR3gOgbFct08xXHCYKqm%2BCtI%2F4epkSJdZCsiGAWuDOMzW7bqjaqs2v6Ox%2FmNIegTiYHI0pg1caNnPkUahlSE2JfbKWggwvp0I1Qao1%2BmExBE1OKjSB3GlERXNCt%2FcPQ6COEuzDqMQfPbrYSGmw0DobfpAoaLfWIlOS9M05a0t1W9nxKe4m%2BxIrmErn%2B0UHdRS1Nig7QnAHT8JEGxZkSrw7snR4yEQtfAY62lgn%2FJWgs0F3btGb6csXrotctsMKJdPg8U8gf8AATKxrV7kdwF4xjaj6fb1NBcL6UPy8hLUtIuPYbXbq2TAYLus78szsAjvYxQnwxvlmzMj0HzlQnCy6xO3Qz1KW4inipANG8OVNHaGbHJBtnwVFJvn9euc9%2BecSA5EvF2w0R6M7T%2B43Cx%2Buw11uJ1nt6KYq7Fahs%2B6Ajqauzy7GyO%2BQHtKTsOdSwVO1c4bL4BUDOLb7K51xYCydlGjq1seqmq%2FdQgc7xe%2BOezxGanvdDChupfBBjqkAY1G5gCS168kfNhOJPiGMqeboJN1N1on2ken231KkG6P3AU%2Bv41ODiJxFuZ9ucyT4u0b8NLc53HUjDdDbUK9cuTXVF42D%2B9H39fQqQZu4TaPH21qvdWL5xQ%2FqtuwSzO3mxWq2x%2B1C1hD%2Fqmsb7Rp4NrO3O7v%2F77ynm4sNgoHSfICktxXe9%2BestY59Fl%2BbwlzkNQNvhVC8v9Jb9Uu%2B25XUUQn9JsH&X-Amz-Signature=722bed542a3384a2c22a2ca628b9cf739c98437505ff97430cb80677fbdf0c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTW7QUP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkJVufPUlcXFtOatj54lks%2Bl86rKAjQioo5Puo51P8CwIhAKZSHdbvNOlPCyWmoBN74F1ySF%2BNbq37W8jaqaBZYC%2F0Kv8DCC0QABoMNjM3NDIzMTgzODA1Igx4Dqz8dvL3fWT%2B6owq3AMJRrSNDdq6qevjIumO%2F%2FkQ4PwYIjAxnwjUsRJ4HE8yW7i3juYxZMLTlVlezLrLu92%2F%2B8uMb6FBeZoDVOUrF2%2BCfgNqvVkRszghjKhYuN3lrawp6I6db2ZytqyCJjzHWHmMG7x6GrrwR3gOgbFct08xXHCYKqm%2BCtI%2F4epkSJdZCsiGAWuDOMzW7bqjaqs2v6Ox%2FmNIegTiYHI0pg1caNnPkUahlSE2JfbKWggwvp0I1Qao1%2BmExBE1OKjSB3GlERXNCt%2FcPQ6COEuzDqMQfPbrYSGmw0DobfpAoaLfWIlOS9M05a0t1W9nxKe4m%2BxIrmErn%2B0UHdRS1Nig7QnAHT8JEGxZkSrw7snR4yEQtfAY62lgn%2FJWgs0F3btGb6csXrotctsMKJdPg8U8gf8AATKxrV7kdwF4xjaj6fb1NBcL6UPy8hLUtIuPYbXbq2TAYLus78szsAjvYxQnwxvlmzMj0HzlQnCy6xO3Qz1KW4inipANG8OVNHaGbHJBtnwVFJvn9euc9%2BecSA5EvF2w0R6M7T%2B43Cx%2Buw11uJ1nt6KYq7Fahs%2B6Ajqauzy7GyO%2BQHtKTsOdSwVO1c4bL4BUDOLb7K51xYCydlGjq1seqmq%2FdQgc7xe%2BOezxGanvdDChupfBBjqkAY1G5gCS168kfNhOJPiGMqeboJN1N1on2ken231KkG6P3AU%2Bv41ODiJxFuZ9ucyT4u0b8NLc53HUjDdDbUK9cuTXVF42D%2B9H39fQqQZu4TaPH21qvdWL5xQ%2FqtuwSzO3mxWq2x%2B1C1hD%2Fqmsb7Rp4NrO3O7v%2F77ynm4sNgoHSfICktxXe9%2BestY59Fl%2BbwlzkNQNvhVC8v9Jb9Uu%2B25XUUQn9JsH&X-Amz-Signature=ddf544173e71d6698b826e55c409cd72aba97118a84815d453b25fd7657abd27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTW7QUP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkJVufPUlcXFtOatj54lks%2Bl86rKAjQioo5Puo51P8CwIhAKZSHdbvNOlPCyWmoBN74F1ySF%2BNbq37W8jaqaBZYC%2F0Kv8DCC0QABoMNjM3NDIzMTgzODA1Igx4Dqz8dvL3fWT%2B6owq3AMJRrSNDdq6qevjIumO%2F%2FkQ4PwYIjAxnwjUsRJ4HE8yW7i3juYxZMLTlVlezLrLu92%2F%2B8uMb6FBeZoDVOUrF2%2BCfgNqvVkRszghjKhYuN3lrawp6I6db2ZytqyCJjzHWHmMG7x6GrrwR3gOgbFct08xXHCYKqm%2BCtI%2F4epkSJdZCsiGAWuDOMzW7bqjaqs2v6Ox%2FmNIegTiYHI0pg1caNnPkUahlSE2JfbKWggwvp0I1Qao1%2BmExBE1OKjSB3GlERXNCt%2FcPQ6COEuzDqMQfPbrYSGmw0DobfpAoaLfWIlOS9M05a0t1W9nxKe4m%2BxIrmErn%2B0UHdRS1Nig7QnAHT8JEGxZkSrw7snR4yEQtfAY62lgn%2FJWgs0F3btGb6csXrotctsMKJdPg8U8gf8AATKxrV7kdwF4xjaj6fb1NBcL6UPy8hLUtIuPYbXbq2TAYLus78szsAjvYxQnwxvlmzMj0HzlQnCy6xO3Qz1KW4inipANG8OVNHaGbHJBtnwVFJvn9euc9%2BecSA5EvF2w0R6M7T%2B43Cx%2Buw11uJ1nt6KYq7Fahs%2B6Ajqauzy7GyO%2BQHtKTsOdSwVO1c4bL4BUDOLb7K51xYCydlGjq1seqmq%2FdQgc7xe%2BOezxGanvdDChupfBBjqkAY1G5gCS168kfNhOJPiGMqeboJN1N1on2ken231KkG6P3AU%2Bv41ODiJxFuZ9ucyT4u0b8NLc53HUjDdDbUK9cuTXVF42D%2B9H39fQqQZu4TaPH21qvdWL5xQ%2FqtuwSzO3mxWq2x%2B1C1hD%2Fqmsb7Rp4NrO3O7v%2F77ynm4sNgoHSfICktxXe9%2BestY59Fl%2BbwlzkNQNvhVC8v9Jb9Uu%2B25XUUQn9JsH&X-Amz-Signature=e9c3b439e5eaca41b1909d87dd605769b1e042926078cdda631c5c90134a7c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTW7QUP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkJVufPUlcXFtOatj54lks%2Bl86rKAjQioo5Puo51P8CwIhAKZSHdbvNOlPCyWmoBN74F1ySF%2BNbq37W8jaqaBZYC%2F0Kv8DCC0QABoMNjM3NDIzMTgzODA1Igx4Dqz8dvL3fWT%2B6owq3AMJRrSNDdq6qevjIumO%2F%2FkQ4PwYIjAxnwjUsRJ4HE8yW7i3juYxZMLTlVlezLrLu92%2F%2B8uMb6FBeZoDVOUrF2%2BCfgNqvVkRszghjKhYuN3lrawp6I6db2ZytqyCJjzHWHmMG7x6GrrwR3gOgbFct08xXHCYKqm%2BCtI%2F4epkSJdZCsiGAWuDOMzW7bqjaqs2v6Ox%2FmNIegTiYHI0pg1caNnPkUahlSE2JfbKWggwvp0I1Qao1%2BmExBE1OKjSB3GlERXNCt%2FcPQ6COEuzDqMQfPbrYSGmw0DobfpAoaLfWIlOS9M05a0t1W9nxKe4m%2BxIrmErn%2B0UHdRS1Nig7QnAHT8JEGxZkSrw7snR4yEQtfAY62lgn%2FJWgs0F3btGb6csXrotctsMKJdPg8U8gf8AATKxrV7kdwF4xjaj6fb1NBcL6UPy8hLUtIuPYbXbq2TAYLus78szsAjvYxQnwxvlmzMj0HzlQnCy6xO3Qz1KW4inipANG8OVNHaGbHJBtnwVFJvn9euc9%2BecSA5EvF2w0R6M7T%2B43Cx%2Buw11uJ1nt6KYq7Fahs%2B6Ajqauzy7GyO%2BQHtKTsOdSwVO1c4bL4BUDOLb7K51xYCydlGjq1seqmq%2FdQgc7xe%2BOezxGanvdDChupfBBjqkAY1G5gCS168kfNhOJPiGMqeboJN1N1on2ken231KkG6P3AU%2Bv41ODiJxFuZ9ucyT4u0b8NLc53HUjDdDbUK9cuTXVF42D%2B9H39fQqQZu4TaPH21qvdWL5xQ%2FqtuwSzO3mxWq2x%2B1C1hD%2Fqmsb7Rp4NrO3O7v%2F77ynm4sNgoHSfICktxXe9%2BestY59Fl%2BbwlzkNQNvhVC8v9Jb9Uu%2B25XUUQn9JsH&X-Amz-Signature=df88a8e644163c2427281b2e10218c3e625168beff91e4761daff82027868e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTW7QUP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T132147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkJVufPUlcXFtOatj54lks%2Bl86rKAjQioo5Puo51P8CwIhAKZSHdbvNOlPCyWmoBN74F1ySF%2BNbq37W8jaqaBZYC%2F0Kv8DCC0QABoMNjM3NDIzMTgzODA1Igx4Dqz8dvL3fWT%2B6owq3AMJRrSNDdq6qevjIumO%2F%2FkQ4PwYIjAxnwjUsRJ4HE8yW7i3juYxZMLTlVlezLrLu92%2F%2B8uMb6FBeZoDVOUrF2%2BCfgNqvVkRszghjKhYuN3lrawp6I6db2ZytqyCJjzHWHmMG7x6GrrwR3gOgbFct08xXHCYKqm%2BCtI%2F4epkSJdZCsiGAWuDOMzW7bqjaqs2v6Ox%2FmNIegTiYHI0pg1caNnPkUahlSE2JfbKWggwvp0I1Qao1%2BmExBE1OKjSB3GlERXNCt%2FcPQ6COEuzDqMQfPbrYSGmw0DobfpAoaLfWIlOS9M05a0t1W9nxKe4m%2BxIrmErn%2B0UHdRS1Nig7QnAHT8JEGxZkSrw7snR4yEQtfAY62lgn%2FJWgs0F3btGb6csXrotctsMKJdPg8U8gf8AATKxrV7kdwF4xjaj6fb1NBcL6UPy8hLUtIuPYbXbq2TAYLus78szsAjvYxQnwxvlmzMj0HzlQnCy6xO3Qz1KW4inipANG8OVNHaGbHJBtnwVFJvn9euc9%2BecSA5EvF2w0R6M7T%2B43Cx%2Buw11uJ1nt6KYq7Fahs%2B6Ajqauzy7GyO%2BQHtKTsOdSwVO1c4bL4BUDOLb7K51xYCydlGjq1seqmq%2FdQgc7xe%2BOezxGanvdDChupfBBjqkAY1G5gCS168kfNhOJPiGMqeboJN1N1on2ken231KkG6P3AU%2Bv41ODiJxFuZ9ucyT4u0b8NLc53HUjDdDbUK9cuTXVF42D%2B9H39fQqQZu4TaPH21qvdWL5xQ%2FqtuwSzO3mxWq2x%2B1C1hD%2Fqmsb7Rp4NrO3O7v%2F77ynm4sNgoHSfICktxXe9%2BestY59Fl%2BbwlzkNQNvhVC8v9Jb9Uu%2B25XUUQn9JsH&X-Amz-Signature=3f53cc4041c2170884676dcd2dc8b82252a22029390cbfbb6fedb85bf0ae8397&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
