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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4HW6OF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpO%2Bgnbj4YR%2BSeRg3KD%2BOmJEHRX7QBeXfH6CmVclj5wIhAIaPxvenZMsLvEuTd6rvndnhv8AoB%2Bpm5jc2sGgMly47Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwTLkq%2FeHNpBKl5rWoq3AMVRz91mKE1MLIr1bbk27OWAJ1kcWUkLl%2BSKhFBQI%2BSbhyMxA3qYcRJquoYypFTClEGLcNIm3RClyu6nNkKJElLpPJT0ol8pf01XjuKOa4OH9dNJTa%2BIEN1R72s5GU0gyN7D5nOOjmOhQrOP8oLh2uKoK1QIoukYIpyEFLfjppvWIik9gD0hhCPpP2V6ilaiuPK2KT88BVwDfWB4PokY95MqNsz93WZsqv8noM342bkK0k%2BlYleHtCRKb3Jf8iel1W7bo3eR0G5YK6jh3bXD9aZGaJI9N5P%2Bh7Ih3UOc1oScvl62Be71PcyFdG3fpjbriKqB5kpqxksByt%2Bzbgf9Flxxv%2FE1wb%2BiGzLIOIJEOVEdzMFnJ3aGKiqS9z%2FNUV1iEvYWlvbNTyNgXjlMvGq12qRNAr3XUZmYOQmWMjMYURdBLAW10Gwpl%2BO0XBdcrhfVj78ZQPbMFbTHmrF%2BcY1bo4Jkqab4CeHzM5Rk%2BT6E5bd%2Fzi8NBG2lEKc0wC2xegEPMNnH2wpfPg%2BvXNW%2BuPsXJkV7ObXb90R5FIyImW8pPvzGGHQUOpcNXU5Uzr3%2FNR5cQvaSaLMoRjY%2BTOKdJm8EyZUiGatGwYRdv9au7TgqoSzbo6oW3UQTNyia%2F3UaDCd%2BL2%2FBjqkAQIE2HtkKLJqNqPTBr5WFp9sYXqskohGpEivbZsNzq%2Bli8bPFWYe2kGuKSVM9n7efb4bh%2Bv0tKDZRchHcrkJazUh1Y5tFHj4zGlDLXQHcHtGC0C0ITbsvzqwxpkjciCFKrIDUnYAT9JGw1PkGdHPz6RXy7WHd5DbCk1DmNJkFCgh%2F2oiNyIkKK4TzP2PQtCqoPX8nO6omQq3G8JhuYHzgK%2Fq4V4R&X-Amz-Signature=f71052eee79ccca73651aa8c9634b923d7d03ee174c8471441fc97cd75631edc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4HW6OF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpO%2Bgnbj4YR%2BSeRg3KD%2BOmJEHRX7QBeXfH6CmVclj5wIhAIaPxvenZMsLvEuTd6rvndnhv8AoB%2Bpm5jc2sGgMly47Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwTLkq%2FeHNpBKl5rWoq3AMVRz91mKE1MLIr1bbk27OWAJ1kcWUkLl%2BSKhFBQI%2BSbhyMxA3qYcRJquoYypFTClEGLcNIm3RClyu6nNkKJElLpPJT0ol8pf01XjuKOa4OH9dNJTa%2BIEN1R72s5GU0gyN7D5nOOjmOhQrOP8oLh2uKoK1QIoukYIpyEFLfjppvWIik9gD0hhCPpP2V6ilaiuPK2KT88BVwDfWB4PokY95MqNsz93WZsqv8noM342bkK0k%2BlYleHtCRKb3Jf8iel1W7bo3eR0G5YK6jh3bXD9aZGaJI9N5P%2Bh7Ih3UOc1oScvl62Be71PcyFdG3fpjbriKqB5kpqxksByt%2Bzbgf9Flxxv%2FE1wb%2BiGzLIOIJEOVEdzMFnJ3aGKiqS9z%2FNUV1iEvYWlvbNTyNgXjlMvGq12qRNAr3XUZmYOQmWMjMYURdBLAW10Gwpl%2BO0XBdcrhfVj78ZQPbMFbTHmrF%2BcY1bo4Jkqab4CeHzM5Rk%2BT6E5bd%2Fzi8NBG2lEKc0wC2xegEPMNnH2wpfPg%2BvXNW%2BuPsXJkV7ObXb90R5FIyImW8pPvzGGHQUOpcNXU5Uzr3%2FNR5cQvaSaLMoRjY%2BTOKdJm8EyZUiGatGwYRdv9au7TgqoSzbo6oW3UQTNyia%2F3UaDCd%2BL2%2FBjqkAQIE2HtkKLJqNqPTBr5WFp9sYXqskohGpEivbZsNzq%2Bli8bPFWYe2kGuKSVM9n7efb4bh%2Bv0tKDZRchHcrkJazUh1Y5tFHj4zGlDLXQHcHtGC0C0ITbsvzqwxpkjciCFKrIDUnYAT9JGw1PkGdHPz6RXy7WHd5DbCk1DmNJkFCgh%2F2oiNyIkKK4TzP2PQtCqoPX8nO6omQq3G8JhuYHzgK%2Fq4V4R&X-Amz-Signature=230e4349aec047799a7aef6d5e441304b2ea3ebe40ad345a4008da662fcd9cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4HW6OF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpO%2Bgnbj4YR%2BSeRg3KD%2BOmJEHRX7QBeXfH6CmVclj5wIhAIaPxvenZMsLvEuTd6rvndnhv8AoB%2Bpm5jc2sGgMly47Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwTLkq%2FeHNpBKl5rWoq3AMVRz91mKE1MLIr1bbk27OWAJ1kcWUkLl%2BSKhFBQI%2BSbhyMxA3qYcRJquoYypFTClEGLcNIm3RClyu6nNkKJElLpPJT0ol8pf01XjuKOa4OH9dNJTa%2BIEN1R72s5GU0gyN7D5nOOjmOhQrOP8oLh2uKoK1QIoukYIpyEFLfjppvWIik9gD0hhCPpP2V6ilaiuPK2KT88BVwDfWB4PokY95MqNsz93WZsqv8noM342bkK0k%2BlYleHtCRKb3Jf8iel1W7bo3eR0G5YK6jh3bXD9aZGaJI9N5P%2Bh7Ih3UOc1oScvl62Be71PcyFdG3fpjbriKqB5kpqxksByt%2Bzbgf9Flxxv%2FE1wb%2BiGzLIOIJEOVEdzMFnJ3aGKiqS9z%2FNUV1iEvYWlvbNTyNgXjlMvGq12qRNAr3XUZmYOQmWMjMYURdBLAW10Gwpl%2BO0XBdcrhfVj78ZQPbMFbTHmrF%2BcY1bo4Jkqab4CeHzM5Rk%2BT6E5bd%2Fzi8NBG2lEKc0wC2xegEPMNnH2wpfPg%2BvXNW%2BuPsXJkV7ObXb90R5FIyImW8pPvzGGHQUOpcNXU5Uzr3%2FNR5cQvaSaLMoRjY%2BTOKdJm8EyZUiGatGwYRdv9au7TgqoSzbo6oW3UQTNyia%2F3UaDCd%2BL2%2FBjqkAQIE2HtkKLJqNqPTBr5WFp9sYXqskohGpEivbZsNzq%2Bli8bPFWYe2kGuKSVM9n7efb4bh%2Bv0tKDZRchHcrkJazUh1Y5tFHj4zGlDLXQHcHtGC0C0ITbsvzqwxpkjciCFKrIDUnYAT9JGw1PkGdHPz6RXy7WHd5DbCk1DmNJkFCgh%2F2oiNyIkKK4TzP2PQtCqoPX8nO6omQq3G8JhuYHzgK%2Fq4V4R&X-Amz-Signature=ecb20ed30a568e7b1b3c61031419f68dcbd52b509a86fd3e281bf0fe7e0d6020&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4HW6OF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpO%2Bgnbj4YR%2BSeRg3KD%2BOmJEHRX7QBeXfH6CmVclj5wIhAIaPxvenZMsLvEuTd6rvndnhv8AoB%2Bpm5jc2sGgMly47Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwTLkq%2FeHNpBKl5rWoq3AMVRz91mKE1MLIr1bbk27OWAJ1kcWUkLl%2BSKhFBQI%2BSbhyMxA3qYcRJquoYypFTClEGLcNIm3RClyu6nNkKJElLpPJT0ol8pf01XjuKOa4OH9dNJTa%2BIEN1R72s5GU0gyN7D5nOOjmOhQrOP8oLh2uKoK1QIoukYIpyEFLfjppvWIik9gD0hhCPpP2V6ilaiuPK2KT88BVwDfWB4PokY95MqNsz93WZsqv8noM342bkK0k%2BlYleHtCRKb3Jf8iel1W7bo3eR0G5YK6jh3bXD9aZGaJI9N5P%2Bh7Ih3UOc1oScvl62Be71PcyFdG3fpjbriKqB5kpqxksByt%2Bzbgf9Flxxv%2FE1wb%2BiGzLIOIJEOVEdzMFnJ3aGKiqS9z%2FNUV1iEvYWlvbNTyNgXjlMvGq12qRNAr3XUZmYOQmWMjMYURdBLAW10Gwpl%2BO0XBdcrhfVj78ZQPbMFbTHmrF%2BcY1bo4Jkqab4CeHzM5Rk%2BT6E5bd%2Fzi8NBG2lEKc0wC2xegEPMNnH2wpfPg%2BvXNW%2BuPsXJkV7ObXb90R5FIyImW8pPvzGGHQUOpcNXU5Uzr3%2FNR5cQvaSaLMoRjY%2BTOKdJm8EyZUiGatGwYRdv9au7TgqoSzbo6oW3UQTNyia%2F3UaDCd%2BL2%2FBjqkAQIE2HtkKLJqNqPTBr5WFp9sYXqskohGpEivbZsNzq%2Bli8bPFWYe2kGuKSVM9n7efb4bh%2Bv0tKDZRchHcrkJazUh1Y5tFHj4zGlDLXQHcHtGC0C0ITbsvzqwxpkjciCFKrIDUnYAT9JGw1PkGdHPz6RXy7WHd5DbCk1DmNJkFCgh%2F2oiNyIkKK4TzP2PQtCqoPX8nO6omQq3G8JhuYHzgK%2Fq4V4R&X-Amz-Signature=5b6379a1d8518d49aa68fc240a1655145d58f67c7fcf77448cedc1ea8c9184d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4HW6OF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpO%2Bgnbj4YR%2BSeRg3KD%2BOmJEHRX7QBeXfH6CmVclj5wIhAIaPxvenZMsLvEuTd6rvndnhv8AoB%2Bpm5jc2sGgMly47Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwTLkq%2FeHNpBKl5rWoq3AMVRz91mKE1MLIr1bbk27OWAJ1kcWUkLl%2BSKhFBQI%2BSbhyMxA3qYcRJquoYypFTClEGLcNIm3RClyu6nNkKJElLpPJT0ol8pf01XjuKOa4OH9dNJTa%2BIEN1R72s5GU0gyN7D5nOOjmOhQrOP8oLh2uKoK1QIoukYIpyEFLfjppvWIik9gD0hhCPpP2V6ilaiuPK2KT88BVwDfWB4PokY95MqNsz93WZsqv8noM342bkK0k%2BlYleHtCRKb3Jf8iel1W7bo3eR0G5YK6jh3bXD9aZGaJI9N5P%2Bh7Ih3UOc1oScvl62Be71PcyFdG3fpjbriKqB5kpqxksByt%2Bzbgf9Flxxv%2FE1wb%2BiGzLIOIJEOVEdzMFnJ3aGKiqS9z%2FNUV1iEvYWlvbNTyNgXjlMvGq12qRNAr3XUZmYOQmWMjMYURdBLAW10Gwpl%2BO0XBdcrhfVj78ZQPbMFbTHmrF%2BcY1bo4Jkqab4CeHzM5Rk%2BT6E5bd%2Fzi8NBG2lEKc0wC2xegEPMNnH2wpfPg%2BvXNW%2BuPsXJkV7ObXb90R5FIyImW8pPvzGGHQUOpcNXU5Uzr3%2FNR5cQvaSaLMoRjY%2BTOKdJm8EyZUiGatGwYRdv9au7TgqoSzbo6oW3UQTNyia%2F3UaDCd%2BL2%2FBjqkAQIE2HtkKLJqNqPTBr5WFp9sYXqskohGpEivbZsNzq%2Bli8bPFWYe2kGuKSVM9n7efb4bh%2Bv0tKDZRchHcrkJazUh1Y5tFHj4zGlDLXQHcHtGC0C0ITbsvzqwxpkjciCFKrIDUnYAT9JGw1PkGdHPz6RXy7WHd5DbCk1DmNJkFCgh%2F2oiNyIkKK4TzP2PQtCqoPX8nO6omQq3G8JhuYHzgK%2Fq4V4R&X-Amz-Signature=19df6f02a25fe05223e453d11911faac185a22774c7ff4906fde23bfcb90d2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4HW6OF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpO%2Bgnbj4YR%2BSeRg3KD%2BOmJEHRX7QBeXfH6CmVclj5wIhAIaPxvenZMsLvEuTd6rvndnhv8AoB%2Bpm5jc2sGgMly47Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwTLkq%2FeHNpBKl5rWoq3AMVRz91mKE1MLIr1bbk27OWAJ1kcWUkLl%2BSKhFBQI%2BSbhyMxA3qYcRJquoYypFTClEGLcNIm3RClyu6nNkKJElLpPJT0ol8pf01XjuKOa4OH9dNJTa%2BIEN1R72s5GU0gyN7D5nOOjmOhQrOP8oLh2uKoK1QIoukYIpyEFLfjppvWIik9gD0hhCPpP2V6ilaiuPK2KT88BVwDfWB4PokY95MqNsz93WZsqv8noM342bkK0k%2BlYleHtCRKb3Jf8iel1W7bo3eR0G5YK6jh3bXD9aZGaJI9N5P%2Bh7Ih3UOc1oScvl62Be71PcyFdG3fpjbriKqB5kpqxksByt%2Bzbgf9Flxxv%2FE1wb%2BiGzLIOIJEOVEdzMFnJ3aGKiqS9z%2FNUV1iEvYWlvbNTyNgXjlMvGq12qRNAr3XUZmYOQmWMjMYURdBLAW10Gwpl%2BO0XBdcrhfVj78ZQPbMFbTHmrF%2BcY1bo4Jkqab4CeHzM5Rk%2BT6E5bd%2Fzi8NBG2lEKc0wC2xegEPMNnH2wpfPg%2BvXNW%2BuPsXJkV7ObXb90R5FIyImW8pPvzGGHQUOpcNXU5Uzr3%2FNR5cQvaSaLMoRjY%2BTOKdJm8EyZUiGatGwYRdv9au7TgqoSzbo6oW3UQTNyia%2F3UaDCd%2BL2%2FBjqkAQIE2HtkKLJqNqPTBr5WFp9sYXqskohGpEivbZsNzq%2Bli8bPFWYe2kGuKSVM9n7efb4bh%2Bv0tKDZRchHcrkJazUh1Y5tFHj4zGlDLXQHcHtGC0C0ITbsvzqwxpkjciCFKrIDUnYAT9JGw1PkGdHPz6RXy7WHd5DbCk1DmNJkFCgh%2F2oiNyIkKK4TzP2PQtCqoPX8nO6omQq3G8JhuYHzgK%2Fq4V4R&X-Amz-Signature=ba3bc98ba526e3f19f7d86bce28ca20f50f3ded8564b97e6ce93f7244d98e7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4HW6OF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpO%2Bgnbj4YR%2BSeRg3KD%2BOmJEHRX7QBeXfH6CmVclj5wIhAIaPxvenZMsLvEuTd6rvndnhv8AoB%2Bpm5jc2sGgMly47Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwTLkq%2FeHNpBKl5rWoq3AMVRz91mKE1MLIr1bbk27OWAJ1kcWUkLl%2BSKhFBQI%2BSbhyMxA3qYcRJquoYypFTClEGLcNIm3RClyu6nNkKJElLpPJT0ol8pf01XjuKOa4OH9dNJTa%2BIEN1R72s5GU0gyN7D5nOOjmOhQrOP8oLh2uKoK1QIoukYIpyEFLfjppvWIik9gD0hhCPpP2V6ilaiuPK2KT88BVwDfWB4PokY95MqNsz93WZsqv8noM342bkK0k%2BlYleHtCRKb3Jf8iel1W7bo3eR0G5YK6jh3bXD9aZGaJI9N5P%2Bh7Ih3UOc1oScvl62Be71PcyFdG3fpjbriKqB5kpqxksByt%2Bzbgf9Flxxv%2FE1wb%2BiGzLIOIJEOVEdzMFnJ3aGKiqS9z%2FNUV1iEvYWlvbNTyNgXjlMvGq12qRNAr3XUZmYOQmWMjMYURdBLAW10Gwpl%2BO0XBdcrhfVj78ZQPbMFbTHmrF%2BcY1bo4Jkqab4CeHzM5Rk%2BT6E5bd%2Fzi8NBG2lEKc0wC2xegEPMNnH2wpfPg%2BvXNW%2BuPsXJkV7ObXb90R5FIyImW8pPvzGGHQUOpcNXU5Uzr3%2FNR5cQvaSaLMoRjY%2BTOKdJm8EyZUiGatGwYRdv9au7TgqoSzbo6oW3UQTNyia%2F3UaDCd%2BL2%2FBjqkAQIE2HtkKLJqNqPTBr5WFp9sYXqskohGpEivbZsNzq%2Bli8bPFWYe2kGuKSVM9n7efb4bh%2Bv0tKDZRchHcrkJazUh1Y5tFHj4zGlDLXQHcHtGC0C0ITbsvzqwxpkjciCFKrIDUnYAT9JGw1PkGdHPz6RXy7WHd5DbCk1DmNJkFCgh%2F2oiNyIkKK4TzP2PQtCqoPX8nO6omQq3G8JhuYHzgK%2Fq4V4R&X-Amz-Signature=848526913bb224932e26630fcc4a0df6b30b476fac8e16b01dfe33baf1a22bec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4HW6OF%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpO%2Bgnbj4YR%2BSeRg3KD%2BOmJEHRX7QBeXfH6CmVclj5wIhAIaPxvenZMsLvEuTd6rvndnhv8AoB%2Bpm5jc2sGgMly47Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwTLkq%2FeHNpBKl5rWoq3AMVRz91mKE1MLIr1bbk27OWAJ1kcWUkLl%2BSKhFBQI%2BSbhyMxA3qYcRJquoYypFTClEGLcNIm3RClyu6nNkKJElLpPJT0ol8pf01XjuKOa4OH9dNJTa%2BIEN1R72s5GU0gyN7D5nOOjmOhQrOP8oLh2uKoK1QIoukYIpyEFLfjppvWIik9gD0hhCPpP2V6ilaiuPK2KT88BVwDfWB4PokY95MqNsz93WZsqv8noM342bkK0k%2BlYleHtCRKb3Jf8iel1W7bo3eR0G5YK6jh3bXD9aZGaJI9N5P%2Bh7Ih3UOc1oScvl62Be71PcyFdG3fpjbriKqB5kpqxksByt%2Bzbgf9Flxxv%2FE1wb%2BiGzLIOIJEOVEdzMFnJ3aGKiqS9z%2FNUV1iEvYWlvbNTyNgXjlMvGq12qRNAr3XUZmYOQmWMjMYURdBLAW10Gwpl%2BO0XBdcrhfVj78ZQPbMFbTHmrF%2BcY1bo4Jkqab4CeHzM5Rk%2BT6E5bd%2Fzi8NBG2lEKc0wC2xegEPMNnH2wpfPg%2BvXNW%2BuPsXJkV7ObXb90R5FIyImW8pPvzGGHQUOpcNXU5Uzr3%2FNR5cQvaSaLMoRjY%2BTOKdJm8EyZUiGatGwYRdv9au7TgqoSzbo6oW3UQTNyia%2F3UaDCd%2BL2%2FBjqkAQIE2HtkKLJqNqPTBr5WFp9sYXqskohGpEivbZsNzq%2Bli8bPFWYe2kGuKSVM9n7efb4bh%2Bv0tKDZRchHcrkJazUh1Y5tFHj4zGlDLXQHcHtGC0C0ITbsvzqwxpkjciCFKrIDUnYAT9JGw1PkGdHPz6RXy7WHd5DbCk1DmNJkFCgh%2F2oiNyIkKK4TzP2PQtCqoPX8nO6omQq3G8JhuYHzgK%2Fq4V4R&X-Amz-Signature=2de56becdc4001aa62cea52889927c02ac398accff94800f8e9122faf3e9175c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
