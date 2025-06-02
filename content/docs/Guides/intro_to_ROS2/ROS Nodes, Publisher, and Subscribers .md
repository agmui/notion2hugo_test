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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VVB4EV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDkdt3T%2BUS2NpCicisSm3%2BSdeuCvgrDiIaAqvb2y1evSwIhAPWvz3DbNEZK0kNUK%2BNqmnAH9fMu4Vdv%2F%2FJylYH9uSEQKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLxzUGJYp0uvWlxogq3ANJxi99xWj9C7Su6Ku8Jh6vDSb8mx%2BJl8e%2Fr3EjYmXyEEcKRgyRWqiGNjJOi7K4wEAFdkRPvelhRJmEsRRgURFPJsXINUu44NO8B5CAJ6RBZWhGYnh2YqYWsohiYGzOB7pK7wGWP1qT21TuFaSolDNiyZzcgRWft%2F8Oga7rKNFWzIorJeUCO589Qp7AZxP%2FA%2Fu6mj4yn9XmIN9f2%2F5cjfSfP0jGdApVu3bJCFPteeU5n3wbF1oU7jCxGWt4FxDDggWPklbbnmv%2B665BRmNv5uMA5k012v646AkT5CPmyUPa%2BpRch%2B4%2FC%2FiZM3%2FAd55O6i2fsuqgQUPOaeu6ZlqCgQuCMLJ0s06IhDy5od%2BPUCx2BXhKGzX3daNY26lXS18rvLP3mJN00zjQQj9vqEwLNwIYd0y9A2quEzTuwHf%2FMeV%2FPKUFzc%2FZsYtveaG%2BKaCifqt8Vs%2F9slenNRLzlhK1nsCld0iGEaYaiMVuZTOZ%2BoGiIg5YKw%2FE2xDQ3xIsZeFL53xKdQ9c9kZ5ctR27yUKAGhUJfIVaev4Ad4XNcoHMEioATKrvzJYXvc7F2zjCVfE%2BuXhuqnlELMlUrhMimBiFRNBERYuadO1NfqFRCnEa07VL7nl1wqjdkcExN0DrzCV9%2FPBBjqkAfM%2Bb%2Fu5RzQIbzEjuff6JaSbSZD%2FESY0LsReTQPIfB%2FeiQiDiK9W7v7XsinUgTm1%2FLfKMN6Q686qL7lX2c2Quy2ndm5W6NL%2B0uOUBIbOS38fa066XUE8Wqeo9Csy%2BV3d9P6safRpXY5svtzbMvKx6S2q4xv4it83YZ1XRolvmEeaG42IQyCzL%2BziCNSTTTMEGXKkyn3irZ060UFF5z67Floo4FeF&X-Amz-Signature=29a3d01a8e323d114f63d81737d1464e40c7f0542311308a37bbcfb815e6bab5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VVB4EV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDkdt3T%2BUS2NpCicisSm3%2BSdeuCvgrDiIaAqvb2y1evSwIhAPWvz3DbNEZK0kNUK%2BNqmnAH9fMu4Vdv%2F%2FJylYH9uSEQKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLxzUGJYp0uvWlxogq3ANJxi99xWj9C7Su6Ku8Jh6vDSb8mx%2BJl8e%2Fr3EjYmXyEEcKRgyRWqiGNjJOi7K4wEAFdkRPvelhRJmEsRRgURFPJsXINUu44NO8B5CAJ6RBZWhGYnh2YqYWsohiYGzOB7pK7wGWP1qT21TuFaSolDNiyZzcgRWft%2F8Oga7rKNFWzIorJeUCO589Qp7AZxP%2FA%2Fu6mj4yn9XmIN9f2%2F5cjfSfP0jGdApVu3bJCFPteeU5n3wbF1oU7jCxGWt4FxDDggWPklbbnmv%2B665BRmNv5uMA5k012v646AkT5CPmyUPa%2BpRch%2B4%2FC%2FiZM3%2FAd55O6i2fsuqgQUPOaeu6ZlqCgQuCMLJ0s06IhDy5od%2BPUCx2BXhKGzX3daNY26lXS18rvLP3mJN00zjQQj9vqEwLNwIYd0y9A2quEzTuwHf%2FMeV%2FPKUFzc%2FZsYtveaG%2BKaCifqt8Vs%2F9slenNRLzlhK1nsCld0iGEaYaiMVuZTOZ%2BoGiIg5YKw%2FE2xDQ3xIsZeFL53xKdQ9c9kZ5ctR27yUKAGhUJfIVaev4Ad4XNcoHMEioATKrvzJYXvc7F2zjCVfE%2BuXhuqnlELMlUrhMimBiFRNBERYuadO1NfqFRCnEa07VL7nl1wqjdkcExN0DrzCV9%2FPBBjqkAfM%2Bb%2Fu5RzQIbzEjuff6JaSbSZD%2FESY0LsReTQPIfB%2FeiQiDiK9W7v7XsinUgTm1%2FLfKMN6Q686qL7lX2c2Quy2ndm5W6NL%2B0uOUBIbOS38fa066XUE8Wqeo9Csy%2BV3d9P6safRpXY5svtzbMvKx6S2q4xv4it83YZ1XRolvmEeaG42IQyCzL%2BziCNSTTTMEGXKkyn3irZ060UFF5z67Floo4FeF&X-Amz-Signature=89b0ea1b13e5d56770ae3c7e6450d9a2629fe0fd700dd2be4343756f9eae7e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VVB4EV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDkdt3T%2BUS2NpCicisSm3%2BSdeuCvgrDiIaAqvb2y1evSwIhAPWvz3DbNEZK0kNUK%2BNqmnAH9fMu4Vdv%2F%2FJylYH9uSEQKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLxzUGJYp0uvWlxogq3ANJxi99xWj9C7Su6Ku8Jh6vDSb8mx%2BJl8e%2Fr3EjYmXyEEcKRgyRWqiGNjJOi7K4wEAFdkRPvelhRJmEsRRgURFPJsXINUu44NO8B5CAJ6RBZWhGYnh2YqYWsohiYGzOB7pK7wGWP1qT21TuFaSolDNiyZzcgRWft%2F8Oga7rKNFWzIorJeUCO589Qp7AZxP%2FA%2Fu6mj4yn9XmIN9f2%2F5cjfSfP0jGdApVu3bJCFPteeU5n3wbF1oU7jCxGWt4FxDDggWPklbbnmv%2B665BRmNv5uMA5k012v646AkT5CPmyUPa%2BpRch%2B4%2FC%2FiZM3%2FAd55O6i2fsuqgQUPOaeu6ZlqCgQuCMLJ0s06IhDy5od%2BPUCx2BXhKGzX3daNY26lXS18rvLP3mJN00zjQQj9vqEwLNwIYd0y9A2quEzTuwHf%2FMeV%2FPKUFzc%2FZsYtveaG%2BKaCifqt8Vs%2F9slenNRLzlhK1nsCld0iGEaYaiMVuZTOZ%2BoGiIg5YKw%2FE2xDQ3xIsZeFL53xKdQ9c9kZ5ctR27yUKAGhUJfIVaev4Ad4XNcoHMEioATKrvzJYXvc7F2zjCVfE%2BuXhuqnlELMlUrhMimBiFRNBERYuadO1NfqFRCnEa07VL7nl1wqjdkcExN0DrzCV9%2FPBBjqkAfM%2Bb%2Fu5RzQIbzEjuff6JaSbSZD%2FESY0LsReTQPIfB%2FeiQiDiK9W7v7XsinUgTm1%2FLfKMN6Q686qL7lX2c2Quy2ndm5W6NL%2B0uOUBIbOS38fa066XUE8Wqeo9Csy%2BV3d9P6safRpXY5svtzbMvKx6S2q4xv4it83YZ1XRolvmEeaG42IQyCzL%2BziCNSTTTMEGXKkyn3irZ060UFF5z67Floo4FeF&X-Amz-Signature=e79ea8a69e5315a03f68370a64f6d54c051368dcb15db744700044165b8e4237&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VVB4EV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDkdt3T%2BUS2NpCicisSm3%2BSdeuCvgrDiIaAqvb2y1evSwIhAPWvz3DbNEZK0kNUK%2BNqmnAH9fMu4Vdv%2F%2FJylYH9uSEQKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLxzUGJYp0uvWlxogq3ANJxi99xWj9C7Su6Ku8Jh6vDSb8mx%2BJl8e%2Fr3EjYmXyEEcKRgyRWqiGNjJOi7K4wEAFdkRPvelhRJmEsRRgURFPJsXINUu44NO8B5CAJ6RBZWhGYnh2YqYWsohiYGzOB7pK7wGWP1qT21TuFaSolDNiyZzcgRWft%2F8Oga7rKNFWzIorJeUCO589Qp7AZxP%2FA%2Fu6mj4yn9XmIN9f2%2F5cjfSfP0jGdApVu3bJCFPteeU5n3wbF1oU7jCxGWt4FxDDggWPklbbnmv%2B665BRmNv5uMA5k012v646AkT5CPmyUPa%2BpRch%2B4%2FC%2FiZM3%2FAd55O6i2fsuqgQUPOaeu6ZlqCgQuCMLJ0s06IhDy5od%2BPUCx2BXhKGzX3daNY26lXS18rvLP3mJN00zjQQj9vqEwLNwIYd0y9A2quEzTuwHf%2FMeV%2FPKUFzc%2FZsYtveaG%2BKaCifqt8Vs%2F9slenNRLzlhK1nsCld0iGEaYaiMVuZTOZ%2BoGiIg5YKw%2FE2xDQ3xIsZeFL53xKdQ9c9kZ5ctR27yUKAGhUJfIVaev4Ad4XNcoHMEioATKrvzJYXvc7F2zjCVfE%2BuXhuqnlELMlUrhMimBiFRNBERYuadO1NfqFRCnEa07VL7nl1wqjdkcExN0DrzCV9%2FPBBjqkAfM%2Bb%2Fu5RzQIbzEjuff6JaSbSZD%2FESY0LsReTQPIfB%2FeiQiDiK9W7v7XsinUgTm1%2FLfKMN6Q686qL7lX2c2Quy2ndm5W6NL%2B0uOUBIbOS38fa066XUE8Wqeo9Csy%2BV3d9P6safRpXY5svtzbMvKx6S2q4xv4it83YZ1XRolvmEeaG42IQyCzL%2BziCNSTTTMEGXKkyn3irZ060UFF5z67Floo4FeF&X-Amz-Signature=a87d96130e2a22e6cad52d003c7a90335510703bfcc5cb01b6534a981956ac8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VVB4EV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDkdt3T%2BUS2NpCicisSm3%2BSdeuCvgrDiIaAqvb2y1evSwIhAPWvz3DbNEZK0kNUK%2BNqmnAH9fMu4Vdv%2F%2FJylYH9uSEQKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLxzUGJYp0uvWlxogq3ANJxi99xWj9C7Su6Ku8Jh6vDSb8mx%2BJl8e%2Fr3EjYmXyEEcKRgyRWqiGNjJOi7K4wEAFdkRPvelhRJmEsRRgURFPJsXINUu44NO8B5CAJ6RBZWhGYnh2YqYWsohiYGzOB7pK7wGWP1qT21TuFaSolDNiyZzcgRWft%2F8Oga7rKNFWzIorJeUCO589Qp7AZxP%2FA%2Fu6mj4yn9XmIN9f2%2F5cjfSfP0jGdApVu3bJCFPteeU5n3wbF1oU7jCxGWt4FxDDggWPklbbnmv%2B665BRmNv5uMA5k012v646AkT5CPmyUPa%2BpRch%2B4%2FC%2FiZM3%2FAd55O6i2fsuqgQUPOaeu6ZlqCgQuCMLJ0s06IhDy5od%2BPUCx2BXhKGzX3daNY26lXS18rvLP3mJN00zjQQj9vqEwLNwIYd0y9A2quEzTuwHf%2FMeV%2FPKUFzc%2FZsYtveaG%2BKaCifqt8Vs%2F9slenNRLzlhK1nsCld0iGEaYaiMVuZTOZ%2BoGiIg5YKw%2FE2xDQ3xIsZeFL53xKdQ9c9kZ5ctR27yUKAGhUJfIVaev4Ad4XNcoHMEioATKrvzJYXvc7F2zjCVfE%2BuXhuqnlELMlUrhMimBiFRNBERYuadO1NfqFRCnEa07VL7nl1wqjdkcExN0DrzCV9%2FPBBjqkAfM%2Bb%2Fu5RzQIbzEjuff6JaSbSZD%2FESY0LsReTQPIfB%2FeiQiDiK9W7v7XsinUgTm1%2FLfKMN6Q686qL7lX2c2Quy2ndm5W6NL%2B0uOUBIbOS38fa066XUE8Wqeo9Csy%2BV3d9P6safRpXY5svtzbMvKx6S2q4xv4it83YZ1XRolvmEeaG42IQyCzL%2BziCNSTTTMEGXKkyn3irZ060UFF5z67Floo4FeF&X-Amz-Signature=37b5247438200d6c51d6b431fcf919a0d53f22a36c1725ce4ccedbcf08f6a141&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VVB4EV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDkdt3T%2BUS2NpCicisSm3%2BSdeuCvgrDiIaAqvb2y1evSwIhAPWvz3DbNEZK0kNUK%2BNqmnAH9fMu4Vdv%2F%2FJylYH9uSEQKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLxzUGJYp0uvWlxogq3ANJxi99xWj9C7Su6Ku8Jh6vDSb8mx%2BJl8e%2Fr3EjYmXyEEcKRgyRWqiGNjJOi7K4wEAFdkRPvelhRJmEsRRgURFPJsXINUu44NO8B5CAJ6RBZWhGYnh2YqYWsohiYGzOB7pK7wGWP1qT21TuFaSolDNiyZzcgRWft%2F8Oga7rKNFWzIorJeUCO589Qp7AZxP%2FA%2Fu6mj4yn9XmIN9f2%2F5cjfSfP0jGdApVu3bJCFPteeU5n3wbF1oU7jCxGWt4FxDDggWPklbbnmv%2B665BRmNv5uMA5k012v646AkT5CPmyUPa%2BpRch%2B4%2FC%2FiZM3%2FAd55O6i2fsuqgQUPOaeu6ZlqCgQuCMLJ0s06IhDy5od%2BPUCx2BXhKGzX3daNY26lXS18rvLP3mJN00zjQQj9vqEwLNwIYd0y9A2quEzTuwHf%2FMeV%2FPKUFzc%2FZsYtveaG%2BKaCifqt8Vs%2F9slenNRLzlhK1nsCld0iGEaYaiMVuZTOZ%2BoGiIg5YKw%2FE2xDQ3xIsZeFL53xKdQ9c9kZ5ctR27yUKAGhUJfIVaev4Ad4XNcoHMEioATKrvzJYXvc7F2zjCVfE%2BuXhuqnlELMlUrhMimBiFRNBERYuadO1NfqFRCnEa07VL7nl1wqjdkcExN0DrzCV9%2FPBBjqkAfM%2Bb%2Fu5RzQIbzEjuff6JaSbSZD%2FESY0LsReTQPIfB%2FeiQiDiK9W7v7XsinUgTm1%2FLfKMN6Q686qL7lX2c2Quy2ndm5W6NL%2B0uOUBIbOS38fa066XUE8Wqeo9Csy%2BV3d9P6safRpXY5svtzbMvKx6S2q4xv4it83YZ1XRolvmEeaG42IQyCzL%2BziCNSTTTMEGXKkyn3irZ060UFF5z67Floo4FeF&X-Amz-Signature=0d9e0694729e98556173033d87b70b635505b918f3cac0f48bb9d55c4790a713&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VVB4EV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDkdt3T%2BUS2NpCicisSm3%2BSdeuCvgrDiIaAqvb2y1evSwIhAPWvz3DbNEZK0kNUK%2BNqmnAH9fMu4Vdv%2F%2FJylYH9uSEQKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLxzUGJYp0uvWlxogq3ANJxi99xWj9C7Su6Ku8Jh6vDSb8mx%2BJl8e%2Fr3EjYmXyEEcKRgyRWqiGNjJOi7K4wEAFdkRPvelhRJmEsRRgURFPJsXINUu44NO8B5CAJ6RBZWhGYnh2YqYWsohiYGzOB7pK7wGWP1qT21TuFaSolDNiyZzcgRWft%2F8Oga7rKNFWzIorJeUCO589Qp7AZxP%2FA%2Fu6mj4yn9XmIN9f2%2F5cjfSfP0jGdApVu3bJCFPteeU5n3wbF1oU7jCxGWt4FxDDggWPklbbnmv%2B665BRmNv5uMA5k012v646AkT5CPmyUPa%2BpRch%2B4%2FC%2FiZM3%2FAd55O6i2fsuqgQUPOaeu6ZlqCgQuCMLJ0s06IhDy5od%2BPUCx2BXhKGzX3daNY26lXS18rvLP3mJN00zjQQj9vqEwLNwIYd0y9A2quEzTuwHf%2FMeV%2FPKUFzc%2FZsYtveaG%2BKaCifqt8Vs%2F9slenNRLzlhK1nsCld0iGEaYaiMVuZTOZ%2BoGiIg5YKw%2FE2xDQ3xIsZeFL53xKdQ9c9kZ5ctR27yUKAGhUJfIVaev4Ad4XNcoHMEioATKrvzJYXvc7F2zjCVfE%2BuXhuqnlELMlUrhMimBiFRNBERYuadO1NfqFRCnEa07VL7nl1wqjdkcExN0DrzCV9%2FPBBjqkAfM%2Bb%2Fu5RzQIbzEjuff6JaSbSZD%2FESY0LsReTQPIfB%2FeiQiDiK9W7v7XsinUgTm1%2FLfKMN6Q686qL7lX2c2Quy2ndm5W6NL%2B0uOUBIbOS38fa066XUE8Wqeo9Csy%2BV3d9P6safRpXY5svtzbMvKx6S2q4xv4it83YZ1XRolvmEeaG42IQyCzL%2BziCNSTTTMEGXKkyn3irZ060UFF5z67Floo4FeF&X-Amz-Signature=e2e1c2b29b6ca1866811d122ef6e14bc72c4801b0b028851d21239acf48175fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VVB4EV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDkdt3T%2BUS2NpCicisSm3%2BSdeuCvgrDiIaAqvb2y1evSwIhAPWvz3DbNEZK0kNUK%2BNqmnAH9fMu4Vdv%2F%2FJylYH9uSEQKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLxzUGJYp0uvWlxogq3ANJxi99xWj9C7Su6Ku8Jh6vDSb8mx%2BJl8e%2Fr3EjYmXyEEcKRgyRWqiGNjJOi7K4wEAFdkRPvelhRJmEsRRgURFPJsXINUu44NO8B5CAJ6RBZWhGYnh2YqYWsohiYGzOB7pK7wGWP1qT21TuFaSolDNiyZzcgRWft%2F8Oga7rKNFWzIorJeUCO589Qp7AZxP%2FA%2Fu6mj4yn9XmIN9f2%2F5cjfSfP0jGdApVu3bJCFPteeU5n3wbF1oU7jCxGWt4FxDDggWPklbbnmv%2B665BRmNv5uMA5k012v646AkT5CPmyUPa%2BpRch%2B4%2FC%2FiZM3%2FAd55O6i2fsuqgQUPOaeu6ZlqCgQuCMLJ0s06IhDy5od%2BPUCx2BXhKGzX3daNY26lXS18rvLP3mJN00zjQQj9vqEwLNwIYd0y9A2quEzTuwHf%2FMeV%2FPKUFzc%2FZsYtveaG%2BKaCifqt8Vs%2F9slenNRLzlhK1nsCld0iGEaYaiMVuZTOZ%2BoGiIg5YKw%2FE2xDQ3xIsZeFL53xKdQ9c9kZ5ctR27yUKAGhUJfIVaev4Ad4XNcoHMEioATKrvzJYXvc7F2zjCVfE%2BuXhuqnlELMlUrhMimBiFRNBERYuadO1NfqFRCnEa07VL7nl1wqjdkcExN0DrzCV9%2FPBBjqkAfM%2Bb%2Fu5RzQIbzEjuff6JaSbSZD%2FESY0LsReTQPIfB%2FeiQiDiK9W7v7XsinUgTm1%2FLfKMN6Q686qL7lX2c2Quy2ndm5W6NL%2B0uOUBIbOS38fa066XUE8Wqeo9Csy%2BV3d9P6safRpXY5svtzbMvKx6S2q4xv4it83YZ1XRolvmEeaG42IQyCzL%2BziCNSTTTMEGXKkyn3irZ060UFF5z67Floo4FeF&X-Amz-Signature=f7ffada4d03937094afbfcd202fe64a0e566ebb860ea01d143322a57bb21694b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
