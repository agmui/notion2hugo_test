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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCFI4IN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCFLq3mDaq4u3zd%2FYfFDZn8erUQl7f5%2Fd5BnU2F0wvbdQIhAPyp5Jy8oJxZz5omRPR5YOE%2F7FXVB8CALGjFWx2KYMRXKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4FXZ0SgDKuttwPksq3AO2R4pACivchNA79zvrECuHRAHnTwVGnOXaIweBQ%2FOnyit4q0qZ7pqDtNrFapf3jn%2B9xyFCzGFszfAeM9pzdavkThQgXsUUXl5ok7ngn8d0O%2FL9uFdpdABVZYj0P71YhiuLirGBxR9fTGjYNVUPROJbqnjA8K2gUQsU%2FatjYcA2Ghmdb3AZwwbZ95PL1FObJLIc5dmJwCXy7aWrEhle7fnpG365xRvxEQXrZnXgT7lB2N0eRBktgxdmwF5m4ac6OzJxcYR17mpj5UYimT1Jalv06l6A0UeMpDAmB6lRPqgK%2BDO%2FPhkeeAo%2F%2BcN4bHEYw0TSMcR6klcbw2rJGNA9bWuII3PklQlHCC160JT4ReVbkyd0QYOZZgkVBKXdAwbdMNUPvFJuPjbYIUsLHGy20cSvUT39h6qCpgd2GyvCzYfp7%2BRAGjwVql1ubcAMvhCRjjLrB0qDHcjHswpFASwLhYaU8VQ8BFBTxenusXqPRdqiMH3%2BMH4NVY2lfU8ULkKbNNgKKcbVXez6h1WQ2ELyC3ENrXEmqzaRlvrwX7nZ5sHiI5tWM4EX7vquek7GSIKRWt0KFMVc8OFeACFRxEclPEtTiozbpPpGPTCq9p%2F54Zt4FI8sA1zaAi46baST7zCy6cu9BjqkAZiTWdqCJ3lI4R7TlMvH44injoi96bs4RrBWaXzMGsCat73sQ9Z%2BQg6yLH03xRGICDtj%2Beo58rMinjPy1Tm8aj%2FVqTzzjxDAV4LVo5aPUJR0qBu5FEIK766u%2BwGNp8iS%2F7Iek2XAuYOIzYRHrYfKC0SCSgE7YqnUO%2F%2Bdy1iKIK%2BOAcM3LOEvbW4sFNRQKz%2FfaU3OKtrJgDrV11j7MSpALfTMneTZ&X-Amz-Signature=ed31cbcb75377680875840b69dd2cad3c47d38c7deeb336c6a351aca171b2802&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCFI4IN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCFLq3mDaq4u3zd%2FYfFDZn8erUQl7f5%2Fd5BnU2F0wvbdQIhAPyp5Jy8oJxZz5omRPR5YOE%2F7FXVB8CALGjFWx2KYMRXKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4FXZ0SgDKuttwPksq3AO2R4pACivchNA79zvrECuHRAHnTwVGnOXaIweBQ%2FOnyit4q0qZ7pqDtNrFapf3jn%2B9xyFCzGFszfAeM9pzdavkThQgXsUUXl5ok7ngn8d0O%2FL9uFdpdABVZYj0P71YhiuLirGBxR9fTGjYNVUPROJbqnjA8K2gUQsU%2FatjYcA2Ghmdb3AZwwbZ95PL1FObJLIc5dmJwCXy7aWrEhle7fnpG365xRvxEQXrZnXgT7lB2N0eRBktgxdmwF5m4ac6OzJxcYR17mpj5UYimT1Jalv06l6A0UeMpDAmB6lRPqgK%2BDO%2FPhkeeAo%2F%2BcN4bHEYw0TSMcR6klcbw2rJGNA9bWuII3PklQlHCC160JT4ReVbkyd0QYOZZgkVBKXdAwbdMNUPvFJuPjbYIUsLHGy20cSvUT39h6qCpgd2GyvCzYfp7%2BRAGjwVql1ubcAMvhCRjjLrB0qDHcjHswpFASwLhYaU8VQ8BFBTxenusXqPRdqiMH3%2BMH4NVY2lfU8ULkKbNNgKKcbVXez6h1WQ2ELyC3ENrXEmqzaRlvrwX7nZ5sHiI5tWM4EX7vquek7GSIKRWt0KFMVc8OFeACFRxEclPEtTiozbpPpGPTCq9p%2F54Zt4FI8sA1zaAi46baST7zCy6cu9BjqkAZiTWdqCJ3lI4R7TlMvH44injoi96bs4RrBWaXzMGsCat73sQ9Z%2BQg6yLH03xRGICDtj%2Beo58rMinjPy1Tm8aj%2FVqTzzjxDAV4LVo5aPUJR0qBu5FEIK766u%2BwGNp8iS%2F7Iek2XAuYOIzYRHrYfKC0SCSgE7YqnUO%2F%2Bdy1iKIK%2BOAcM3LOEvbW4sFNRQKz%2FfaU3OKtrJgDrV11j7MSpALfTMneTZ&X-Amz-Signature=1188d93907beed5e3420d563dbfa1e295c90ded5d467de593e4aa8380184b62a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCFI4IN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCFLq3mDaq4u3zd%2FYfFDZn8erUQl7f5%2Fd5BnU2F0wvbdQIhAPyp5Jy8oJxZz5omRPR5YOE%2F7FXVB8CALGjFWx2KYMRXKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4FXZ0SgDKuttwPksq3AO2R4pACivchNA79zvrECuHRAHnTwVGnOXaIweBQ%2FOnyit4q0qZ7pqDtNrFapf3jn%2B9xyFCzGFszfAeM9pzdavkThQgXsUUXl5ok7ngn8d0O%2FL9uFdpdABVZYj0P71YhiuLirGBxR9fTGjYNVUPROJbqnjA8K2gUQsU%2FatjYcA2Ghmdb3AZwwbZ95PL1FObJLIc5dmJwCXy7aWrEhle7fnpG365xRvxEQXrZnXgT7lB2N0eRBktgxdmwF5m4ac6OzJxcYR17mpj5UYimT1Jalv06l6A0UeMpDAmB6lRPqgK%2BDO%2FPhkeeAo%2F%2BcN4bHEYw0TSMcR6klcbw2rJGNA9bWuII3PklQlHCC160JT4ReVbkyd0QYOZZgkVBKXdAwbdMNUPvFJuPjbYIUsLHGy20cSvUT39h6qCpgd2GyvCzYfp7%2BRAGjwVql1ubcAMvhCRjjLrB0qDHcjHswpFASwLhYaU8VQ8BFBTxenusXqPRdqiMH3%2BMH4NVY2lfU8ULkKbNNgKKcbVXez6h1WQ2ELyC3ENrXEmqzaRlvrwX7nZ5sHiI5tWM4EX7vquek7GSIKRWt0KFMVc8OFeACFRxEclPEtTiozbpPpGPTCq9p%2F54Zt4FI8sA1zaAi46baST7zCy6cu9BjqkAZiTWdqCJ3lI4R7TlMvH44injoi96bs4RrBWaXzMGsCat73sQ9Z%2BQg6yLH03xRGICDtj%2Beo58rMinjPy1Tm8aj%2FVqTzzjxDAV4LVo5aPUJR0qBu5FEIK766u%2BwGNp8iS%2F7Iek2XAuYOIzYRHrYfKC0SCSgE7YqnUO%2F%2Bdy1iKIK%2BOAcM3LOEvbW4sFNRQKz%2FfaU3OKtrJgDrV11j7MSpALfTMneTZ&X-Amz-Signature=540206209671a87162a52669caec287b2696215f55f9b2941c0b79cac52c5478&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCFI4IN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCFLq3mDaq4u3zd%2FYfFDZn8erUQl7f5%2Fd5BnU2F0wvbdQIhAPyp5Jy8oJxZz5omRPR5YOE%2F7FXVB8CALGjFWx2KYMRXKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4FXZ0SgDKuttwPksq3AO2R4pACivchNA79zvrECuHRAHnTwVGnOXaIweBQ%2FOnyit4q0qZ7pqDtNrFapf3jn%2B9xyFCzGFszfAeM9pzdavkThQgXsUUXl5ok7ngn8d0O%2FL9uFdpdABVZYj0P71YhiuLirGBxR9fTGjYNVUPROJbqnjA8K2gUQsU%2FatjYcA2Ghmdb3AZwwbZ95PL1FObJLIc5dmJwCXy7aWrEhle7fnpG365xRvxEQXrZnXgT7lB2N0eRBktgxdmwF5m4ac6OzJxcYR17mpj5UYimT1Jalv06l6A0UeMpDAmB6lRPqgK%2BDO%2FPhkeeAo%2F%2BcN4bHEYw0TSMcR6klcbw2rJGNA9bWuII3PklQlHCC160JT4ReVbkyd0QYOZZgkVBKXdAwbdMNUPvFJuPjbYIUsLHGy20cSvUT39h6qCpgd2GyvCzYfp7%2BRAGjwVql1ubcAMvhCRjjLrB0qDHcjHswpFASwLhYaU8VQ8BFBTxenusXqPRdqiMH3%2BMH4NVY2lfU8ULkKbNNgKKcbVXez6h1WQ2ELyC3ENrXEmqzaRlvrwX7nZ5sHiI5tWM4EX7vquek7GSIKRWt0KFMVc8OFeACFRxEclPEtTiozbpPpGPTCq9p%2F54Zt4FI8sA1zaAi46baST7zCy6cu9BjqkAZiTWdqCJ3lI4R7TlMvH44injoi96bs4RrBWaXzMGsCat73sQ9Z%2BQg6yLH03xRGICDtj%2Beo58rMinjPy1Tm8aj%2FVqTzzjxDAV4LVo5aPUJR0qBu5FEIK766u%2BwGNp8iS%2F7Iek2XAuYOIzYRHrYfKC0SCSgE7YqnUO%2F%2Bdy1iKIK%2BOAcM3LOEvbW4sFNRQKz%2FfaU3OKtrJgDrV11j7MSpALfTMneTZ&X-Amz-Signature=d39fc3f5bc1ba37e1357cfc4d71b70b3936ce57e389c22244071c0655a21310b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCFI4IN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCFLq3mDaq4u3zd%2FYfFDZn8erUQl7f5%2Fd5BnU2F0wvbdQIhAPyp5Jy8oJxZz5omRPR5YOE%2F7FXVB8CALGjFWx2KYMRXKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4FXZ0SgDKuttwPksq3AO2R4pACivchNA79zvrECuHRAHnTwVGnOXaIweBQ%2FOnyit4q0qZ7pqDtNrFapf3jn%2B9xyFCzGFszfAeM9pzdavkThQgXsUUXl5ok7ngn8d0O%2FL9uFdpdABVZYj0P71YhiuLirGBxR9fTGjYNVUPROJbqnjA8K2gUQsU%2FatjYcA2Ghmdb3AZwwbZ95PL1FObJLIc5dmJwCXy7aWrEhle7fnpG365xRvxEQXrZnXgT7lB2N0eRBktgxdmwF5m4ac6OzJxcYR17mpj5UYimT1Jalv06l6A0UeMpDAmB6lRPqgK%2BDO%2FPhkeeAo%2F%2BcN4bHEYw0TSMcR6klcbw2rJGNA9bWuII3PklQlHCC160JT4ReVbkyd0QYOZZgkVBKXdAwbdMNUPvFJuPjbYIUsLHGy20cSvUT39h6qCpgd2GyvCzYfp7%2BRAGjwVql1ubcAMvhCRjjLrB0qDHcjHswpFASwLhYaU8VQ8BFBTxenusXqPRdqiMH3%2BMH4NVY2lfU8ULkKbNNgKKcbVXez6h1WQ2ELyC3ENrXEmqzaRlvrwX7nZ5sHiI5tWM4EX7vquek7GSIKRWt0KFMVc8OFeACFRxEclPEtTiozbpPpGPTCq9p%2F54Zt4FI8sA1zaAi46baST7zCy6cu9BjqkAZiTWdqCJ3lI4R7TlMvH44injoi96bs4RrBWaXzMGsCat73sQ9Z%2BQg6yLH03xRGICDtj%2Beo58rMinjPy1Tm8aj%2FVqTzzjxDAV4LVo5aPUJR0qBu5FEIK766u%2BwGNp8iS%2F7Iek2XAuYOIzYRHrYfKC0SCSgE7YqnUO%2F%2Bdy1iKIK%2BOAcM3LOEvbW4sFNRQKz%2FfaU3OKtrJgDrV11j7MSpALfTMneTZ&X-Amz-Signature=58a9f9f912878708cc9c1c73f8769e3c9897c0c36d7f4aa63cc262d957a3b0ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCFI4IN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCFLq3mDaq4u3zd%2FYfFDZn8erUQl7f5%2Fd5BnU2F0wvbdQIhAPyp5Jy8oJxZz5omRPR5YOE%2F7FXVB8CALGjFWx2KYMRXKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4FXZ0SgDKuttwPksq3AO2R4pACivchNA79zvrECuHRAHnTwVGnOXaIweBQ%2FOnyit4q0qZ7pqDtNrFapf3jn%2B9xyFCzGFszfAeM9pzdavkThQgXsUUXl5ok7ngn8d0O%2FL9uFdpdABVZYj0P71YhiuLirGBxR9fTGjYNVUPROJbqnjA8K2gUQsU%2FatjYcA2Ghmdb3AZwwbZ95PL1FObJLIc5dmJwCXy7aWrEhle7fnpG365xRvxEQXrZnXgT7lB2N0eRBktgxdmwF5m4ac6OzJxcYR17mpj5UYimT1Jalv06l6A0UeMpDAmB6lRPqgK%2BDO%2FPhkeeAo%2F%2BcN4bHEYw0TSMcR6klcbw2rJGNA9bWuII3PklQlHCC160JT4ReVbkyd0QYOZZgkVBKXdAwbdMNUPvFJuPjbYIUsLHGy20cSvUT39h6qCpgd2GyvCzYfp7%2BRAGjwVql1ubcAMvhCRjjLrB0qDHcjHswpFASwLhYaU8VQ8BFBTxenusXqPRdqiMH3%2BMH4NVY2lfU8ULkKbNNgKKcbVXez6h1WQ2ELyC3ENrXEmqzaRlvrwX7nZ5sHiI5tWM4EX7vquek7GSIKRWt0KFMVc8OFeACFRxEclPEtTiozbpPpGPTCq9p%2F54Zt4FI8sA1zaAi46baST7zCy6cu9BjqkAZiTWdqCJ3lI4R7TlMvH44injoi96bs4RrBWaXzMGsCat73sQ9Z%2BQg6yLH03xRGICDtj%2Beo58rMinjPy1Tm8aj%2FVqTzzjxDAV4LVo5aPUJR0qBu5FEIK766u%2BwGNp8iS%2F7Iek2XAuYOIzYRHrYfKC0SCSgE7YqnUO%2F%2Bdy1iKIK%2BOAcM3LOEvbW4sFNRQKz%2FfaU3OKtrJgDrV11j7MSpALfTMneTZ&X-Amz-Signature=1012919fe39aac2f89cdf35c03bf19dd34fa98fc8abf0a2f7716d7dbd59ad8e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCFI4IN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCFLq3mDaq4u3zd%2FYfFDZn8erUQl7f5%2Fd5BnU2F0wvbdQIhAPyp5Jy8oJxZz5omRPR5YOE%2F7FXVB8CALGjFWx2KYMRXKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4FXZ0SgDKuttwPksq3AO2R4pACivchNA79zvrECuHRAHnTwVGnOXaIweBQ%2FOnyit4q0qZ7pqDtNrFapf3jn%2B9xyFCzGFszfAeM9pzdavkThQgXsUUXl5ok7ngn8d0O%2FL9uFdpdABVZYj0P71YhiuLirGBxR9fTGjYNVUPROJbqnjA8K2gUQsU%2FatjYcA2Ghmdb3AZwwbZ95PL1FObJLIc5dmJwCXy7aWrEhle7fnpG365xRvxEQXrZnXgT7lB2N0eRBktgxdmwF5m4ac6OzJxcYR17mpj5UYimT1Jalv06l6A0UeMpDAmB6lRPqgK%2BDO%2FPhkeeAo%2F%2BcN4bHEYw0TSMcR6klcbw2rJGNA9bWuII3PklQlHCC160JT4ReVbkyd0QYOZZgkVBKXdAwbdMNUPvFJuPjbYIUsLHGy20cSvUT39h6qCpgd2GyvCzYfp7%2BRAGjwVql1ubcAMvhCRjjLrB0qDHcjHswpFASwLhYaU8VQ8BFBTxenusXqPRdqiMH3%2BMH4NVY2lfU8ULkKbNNgKKcbVXez6h1WQ2ELyC3ENrXEmqzaRlvrwX7nZ5sHiI5tWM4EX7vquek7GSIKRWt0KFMVc8OFeACFRxEclPEtTiozbpPpGPTCq9p%2F54Zt4FI8sA1zaAi46baST7zCy6cu9BjqkAZiTWdqCJ3lI4R7TlMvH44injoi96bs4RrBWaXzMGsCat73sQ9Z%2BQg6yLH03xRGICDtj%2Beo58rMinjPy1Tm8aj%2FVqTzzjxDAV4LVo5aPUJR0qBu5FEIK766u%2BwGNp8iS%2F7Iek2XAuYOIzYRHrYfKC0SCSgE7YqnUO%2F%2Bdy1iKIK%2BOAcM3LOEvbW4sFNRQKz%2FfaU3OKtrJgDrV11j7MSpALfTMneTZ&X-Amz-Signature=551a5aee5642639248b20e142961125da3c32814be477e30e4471e5f948528d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCFI4IN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCFLq3mDaq4u3zd%2FYfFDZn8erUQl7f5%2Fd5BnU2F0wvbdQIhAPyp5Jy8oJxZz5omRPR5YOE%2F7FXVB8CALGjFWx2KYMRXKv8DCHIQABoMNjM3NDIzMTgzODA1Igy4FXZ0SgDKuttwPksq3AO2R4pACivchNA79zvrECuHRAHnTwVGnOXaIweBQ%2FOnyit4q0qZ7pqDtNrFapf3jn%2B9xyFCzGFszfAeM9pzdavkThQgXsUUXl5ok7ngn8d0O%2FL9uFdpdABVZYj0P71YhiuLirGBxR9fTGjYNVUPROJbqnjA8K2gUQsU%2FatjYcA2Ghmdb3AZwwbZ95PL1FObJLIc5dmJwCXy7aWrEhle7fnpG365xRvxEQXrZnXgT7lB2N0eRBktgxdmwF5m4ac6OzJxcYR17mpj5UYimT1Jalv06l6A0UeMpDAmB6lRPqgK%2BDO%2FPhkeeAo%2F%2BcN4bHEYw0TSMcR6klcbw2rJGNA9bWuII3PklQlHCC160JT4ReVbkyd0QYOZZgkVBKXdAwbdMNUPvFJuPjbYIUsLHGy20cSvUT39h6qCpgd2GyvCzYfp7%2BRAGjwVql1ubcAMvhCRjjLrB0qDHcjHswpFASwLhYaU8VQ8BFBTxenusXqPRdqiMH3%2BMH4NVY2lfU8ULkKbNNgKKcbVXez6h1WQ2ELyC3ENrXEmqzaRlvrwX7nZ5sHiI5tWM4EX7vquek7GSIKRWt0KFMVc8OFeACFRxEclPEtTiozbpPpGPTCq9p%2F54Zt4FI8sA1zaAi46baST7zCy6cu9BjqkAZiTWdqCJ3lI4R7TlMvH44injoi96bs4RrBWaXzMGsCat73sQ9Z%2BQg6yLH03xRGICDtj%2Beo58rMinjPy1Tm8aj%2FVqTzzjxDAV4LVo5aPUJR0qBu5FEIK766u%2BwGNp8iS%2F7Iek2XAuYOIzYRHrYfKC0SCSgE7YqnUO%2F%2Bdy1iKIK%2BOAcM3LOEvbW4sFNRQKz%2FfaU3OKtrJgDrV11j7MSpALfTMneTZ&X-Amz-Signature=f440536784006ce0e29104207861d49814d662262f90ab41fbf35932ff7fb1a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
