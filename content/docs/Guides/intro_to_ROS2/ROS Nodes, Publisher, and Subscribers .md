---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGLMOET%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDbLFgF6eNg7ubBO6fD51mQTesN7Dht%2FTGED%2BP9ccSsbwIhAIffxLOPT7XzKHb%2FZ52Bfky82dKMZRQkABg%2FBak9ra6JKv8DCGEQABoMNjM3NDIzMTgzODA1IgxDJeJDqj%2BSmwX%2FOdQq3APKw2fZfTnMwGLZjfJeMu%2F51b%2BpBGwmqWznB%2FkIfoJJ47MWD23HPD5laYaJfnMzQqXqpLk%2FYKDd3VViRWNx0ec65JrOxZbN1EMlRRns4BcFd6Z6gowWj3jsy7NyBp7dZI7x7D9rNJiwcayJf%2F4UWaZaTyhZb70pUaIoiI9f3T9MfNgWhe8OmDnBIv8w4vO%2Fg0HbWjvy8hm2yJJJchmxm67oNp81OQ4BPNqrOao8gdqEI82f%2FTm7h0%2FTNJ1qk25HpUCU4f7cANU2xOtZ0MRAgmTEqT6OdFmsYuAyQ%2BzfswQKGroYef2JBGC3lXocUnJpwzKWp4AjXh5OEN8CMy1MVOMk81Bt8fa1wMjhwSm9p1PfhbBNcftoevBnmT%2FLHmSjncQpgj0VHbYnWlINfUPf7akovJQolOT6zTSxZb3gepRmNtsxiXh4pxXJdPrgya6q4GTqUflnzgclMUMeofN3tDf28P%2FjT%2BnHRJN2LpO15Smu0bCmFomOBmNRnCnKcFszU41RYaf5V41tPjjFo3UmUpvVGYTru9j%2BFZtwRGSHYXLldMzdICNkeCVp%2B2Z8QfUVqmZLUba0f32fPGkVRpjwjKzl9l1gOpKqFuiZTzSuEdLFeGVckPywXPAVvr9QIDD8tP3EBjqkAbILL8voIRbc0EAflaw2N%2FH%2Bw3Xw%2F2ofuI%2FV3XHj%2FTz4xTM8i95ohVaOfxy4akIYct%2FQsss5y%2FPdBaK4SVaWQfF0Nyr76O%2B%2FJHol1tgxWU9M79UsPm10n7exmAFZRPr5AT4bBsjWuo%2BQ9hvXbZX5vR2C%2FzMQlDLmjbrg0FfZfmNwYuIlJuY%2FPxdyxieu8K3HAxVyflaWjSV7DhKwiVJFBMx%2B%2FkKM&X-Amz-Signature=616609e24967284e9a8140b2d449ca6ad64f19a46a0f42b53578d81a8470d926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGLMOET%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDbLFgF6eNg7ubBO6fD51mQTesN7Dht%2FTGED%2BP9ccSsbwIhAIffxLOPT7XzKHb%2FZ52Bfky82dKMZRQkABg%2FBak9ra6JKv8DCGEQABoMNjM3NDIzMTgzODA1IgxDJeJDqj%2BSmwX%2FOdQq3APKw2fZfTnMwGLZjfJeMu%2F51b%2BpBGwmqWznB%2FkIfoJJ47MWD23HPD5laYaJfnMzQqXqpLk%2FYKDd3VViRWNx0ec65JrOxZbN1EMlRRns4BcFd6Z6gowWj3jsy7NyBp7dZI7x7D9rNJiwcayJf%2F4UWaZaTyhZb70pUaIoiI9f3T9MfNgWhe8OmDnBIv8w4vO%2Fg0HbWjvy8hm2yJJJchmxm67oNp81OQ4BPNqrOao8gdqEI82f%2FTm7h0%2FTNJ1qk25HpUCU4f7cANU2xOtZ0MRAgmTEqT6OdFmsYuAyQ%2BzfswQKGroYef2JBGC3lXocUnJpwzKWp4AjXh5OEN8CMy1MVOMk81Bt8fa1wMjhwSm9p1PfhbBNcftoevBnmT%2FLHmSjncQpgj0VHbYnWlINfUPf7akovJQolOT6zTSxZb3gepRmNtsxiXh4pxXJdPrgya6q4GTqUflnzgclMUMeofN3tDf28P%2FjT%2BnHRJN2LpO15Smu0bCmFomOBmNRnCnKcFszU41RYaf5V41tPjjFo3UmUpvVGYTru9j%2BFZtwRGSHYXLldMzdICNkeCVp%2B2Z8QfUVqmZLUba0f32fPGkVRpjwjKzl9l1gOpKqFuiZTzSuEdLFeGVckPywXPAVvr9QIDD8tP3EBjqkAbILL8voIRbc0EAflaw2N%2FH%2Bw3Xw%2F2ofuI%2FV3XHj%2FTz4xTM8i95ohVaOfxy4akIYct%2FQsss5y%2FPdBaK4SVaWQfF0Nyr76O%2B%2FJHol1tgxWU9M79UsPm10n7exmAFZRPr5AT4bBsjWuo%2BQ9hvXbZX5vR2C%2FzMQlDLmjbrg0FfZfmNwYuIlJuY%2FPxdyxieu8K3HAxVyflaWjSV7DhKwiVJFBMx%2B%2FkKM&X-Amz-Signature=579a2a014723bdf8e2f7cca50f7eb60019822761c6f0bcbfd99e238fef158c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGLMOET%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDbLFgF6eNg7ubBO6fD51mQTesN7Dht%2FTGED%2BP9ccSsbwIhAIffxLOPT7XzKHb%2FZ52Bfky82dKMZRQkABg%2FBak9ra6JKv8DCGEQABoMNjM3NDIzMTgzODA1IgxDJeJDqj%2BSmwX%2FOdQq3APKw2fZfTnMwGLZjfJeMu%2F51b%2BpBGwmqWznB%2FkIfoJJ47MWD23HPD5laYaJfnMzQqXqpLk%2FYKDd3VViRWNx0ec65JrOxZbN1EMlRRns4BcFd6Z6gowWj3jsy7NyBp7dZI7x7D9rNJiwcayJf%2F4UWaZaTyhZb70pUaIoiI9f3T9MfNgWhe8OmDnBIv8w4vO%2Fg0HbWjvy8hm2yJJJchmxm67oNp81OQ4BPNqrOao8gdqEI82f%2FTm7h0%2FTNJ1qk25HpUCU4f7cANU2xOtZ0MRAgmTEqT6OdFmsYuAyQ%2BzfswQKGroYef2JBGC3lXocUnJpwzKWp4AjXh5OEN8CMy1MVOMk81Bt8fa1wMjhwSm9p1PfhbBNcftoevBnmT%2FLHmSjncQpgj0VHbYnWlINfUPf7akovJQolOT6zTSxZb3gepRmNtsxiXh4pxXJdPrgya6q4GTqUflnzgclMUMeofN3tDf28P%2FjT%2BnHRJN2LpO15Smu0bCmFomOBmNRnCnKcFszU41RYaf5V41tPjjFo3UmUpvVGYTru9j%2BFZtwRGSHYXLldMzdICNkeCVp%2B2Z8QfUVqmZLUba0f32fPGkVRpjwjKzl9l1gOpKqFuiZTzSuEdLFeGVckPywXPAVvr9QIDD8tP3EBjqkAbILL8voIRbc0EAflaw2N%2FH%2Bw3Xw%2F2ofuI%2FV3XHj%2FTz4xTM8i95ohVaOfxy4akIYct%2FQsss5y%2FPdBaK4SVaWQfF0Nyr76O%2B%2FJHol1tgxWU9M79UsPm10n7exmAFZRPr5AT4bBsjWuo%2BQ9hvXbZX5vR2C%2FzMQlDLmjbrg0FfZfmNwYuIlJuY%2FPxdyxieu8K3HAxVyflaWjSV7DhKwiVJFBMx%2B%2FkKM&X-Amz-Signature=1786662d23044bee190295a84aa8d79c8d1c677aacafd78d28406edb4f3c1b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGLMOET%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDbLFgF6eNg7ubBO6fD51mQTesN7Dht%2FTGED%2BP9ccSsbwIhAIffxLOPT7XzKHb%2FZ52Bfky82dKMZRQkABg%2FBak9ra6JKv8DCGEQABoMNjM3NDIzMTgzODA1IgxDJeJDqj%2BSmwX%2FOdQq3APKw2fZfTnMwGLZjfJeMu%2F51b%2BpBGwmqWznB%2FkIfoJJ47MWD23HPD5laYaJfnMzQqXqpLk%2FYKDd3VViRWNx0ec65JrOxZbN1EMlRRns4BcFd6Z6gowWj3jsy7NyBp7dZI7x7D9rNJiwcayJf%2F4UWaZaTyhZb70pUaIoiI9f3T9MfNgWhe8OmDnBIv8w4vO%2Fg0HbWjvy8hm2yJJJchmxm67oNp81OQ4BPNqrOao8gdqEI82f%2FTm7h0%2FTNJ1qk25HpUCU4f7cANU2xOtZ0MRAgmTEqT6OdFmsYuAyQ%2BzfswQKGroYef2JBGC3lXocUnJpwzKWp4AjXh5OEN8CMy1MVOMk81Bt8fa1wMjhwSm9p1PfhbBNcftoevBnmT%2FLHmSjncQpgj0VHbYnWlINfUPf7akovJQolOT6zTSxZb3gepRmNtsxiXh4pxXJdPrgya6q4GTqUflnzgclMUMeofN3tDf28P%2FjT%2BnHRJN2LpO15Smu0bCmFomOBmNRnCnKcFszU41RYaf5V41tPjjFo3UmUpvVGYTru9j%2BFZtwRGSHYXLldMzdICNkeCVp%2B2Z8QfUVqmZLUba0f32fPGkVRpjwjKzl9l1gOpKqFuiZTzSuEdLFeGVckPywXPAVvr9QIDD8tP3EBjqkAbILL8voIRbc0EAflaw2N%2FH%2Bw3Xw%2F2ofuI%2FV3XHj%2FTz4xTM8i95ohVaOfxy4akIYct%2FQsss5y%2FPdBaK4SVaWQfF0Nyr76O%2B%2FJHol1tgxWU9M79UsPm10n7exmAFZRPr5AT4bBsjWuo%2BQ9hvXbZX5vR2C%2FzMQlDLmjbrg0FfZfmNwYuIlJuY%2FPxdyxieu8K3HAxVyflaWjSV7DhKwiVJFBMx%2B%2FkKM&X-Amz-Signature=07a247c889bec09041c7f5f019767782fea527187136b5eb24bda1acc9e1cd0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGLMOET%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDbLFgF6eNg7ubBO6fD51mQTesN7Dht%2FTGED%2BP9ccSsbwIhAIffxLOPT7XzKHb%2FZ52Bfky82dKMZRQkABg%2FBak9ra6JKv8DCGEQABoMNjM3NDIzMTgzODA1IgxDJeJDqj%2BSmwX%2FOdQq3APKw2fZfTnMwGLZjfJeMu%2F51b%2BpBGwmqWznB%2FkIfoJJ47MWD23HPD5laYaJfnMzQqXqpLk%2FYKDd3VViRWNx0ec65JrOxZbN1EMlRRns4BcFd6Z6gowWj3jsy7NyBp7dZI7x7D9rNJiwcayJf%2F4UWaZaTyhZb70pUaIoiI9f3T9MfNgWhe8OmDnBIv8w4vO%2Fg0HbWjvy8hm2yJJJchmxm67oNp81OQ4BPNqrOao8gdqEI82f%2FTm7h0%2FTNJ1qk25HpUCU4f7cANU2xOtZ0MRAgmTEqT6OdFmsYuAyQ%2BzfswQKGroYef2JBGC3lXocUnJpwzKWp4AjXh5OEN8CMy1MVOMk81Bt8fa1wMjhwSm9p1PfhbBNcftoevBnmT%2FLHmSjncQpgj0VHbYnWlINfUPf7akovJQolOT6zTSxZb3gepRmNtsxiXh4pxXJdPrgya6q4GTqUflnzgclMUMeofN3tDf28P%2FjT%2BnHRJN2LpO15Smu0bCmFomOBmNRnCnKcFszU41RYaf5V41tPjjFo3UmUpvVGYTru9j%2BFZtwRGSHYXLldMzdICNkeCVp%2B2Z8QfUVqmZLUba0f32fPGkVRpjwjKzl9l1gOpKqFuiZTzSuEdLFeGVckPywXPAVvr9QIDD8tP3EBjqkAbILL8voIRbc0EAflaw2N%2FH%2Bw3Xw%2F2ofuI%2FV3XHj%2FTz4xTM8i95ohVaOfxy4akIYct%2FQsss5y%2FPdBaK4SVaWQfF0Nyr76O%2B%2FJHol1tgxWU9M79UsPm10n7exmAFZRPr5AT4bBsjWuo%2BQ9hvXbZX5vR2C%2FzMQlDLmjbrg0FfZfmNwYuIlJuY%2FPxdyxieu8K3HAxVyflaWjSV7DhKwiVJFBMx%2B%2FkKM&X-Amz-Signature=012ef4d86bb680b60f0ef2b36ad95a06fa5a594476177ca7790c2ec9e376bde1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGLMOET%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDbLFgF6eNg7ubBO6fD51mQTesN7Dht%2FTGED%2BP9ccSsbwIhAIffxLOPT7XzKHb%2FZ52Bfky82dKMZRQkABg%2FBak9ra6JKv8DCGEQABoMNjM3NDIzMTgzODA1IgxDJeJDqj%2BSmwX%2FOdQq3APKw2fZfTnMwGLZjfJeMu%2F51b%2BpBGwmqWznB%2FkIfoJJ47MWD23HPD5laYaJfnMzQqXqpLk%2FYKDd3VViRWNx0ec65JrOxZbN1EMlRRns4BcFd6Z6gowWj3jsy7NyBp7dZI7x7D9rNJiwcayJf%2F4UWaZaTyhZb70pUaIoiI9f3T9MfNgWhe8OmDnBIv8w4vO%2Fg0HbWjvy8hm2yJJJchmxm67oNp81OQ4BPNqrOao8gdqEI82f%2FTm7h0%2FTNJ1qk25HpUCU4f7cANU2xOtZ0MRAgmTEqT6OdFmsYuAyQ%2BzfswQKGroYef2JBGC3lXocUnJpwzKWp4AjXh5OEN8CMy1MVOMk81Bt8fa1wMjhwSm9p1PfhbBNcftoevBnmT%2FLHmSjncQpgj0VHbYnWlINfUPf7akovJQolOT6zTSxZb3gepRmNtsxiXh4pxXJdPrgya6q4GTqUflnzgclMUMeofN3tDf28P%2FjT%2BnHRJN2LpO15Smu0bCmFomOBmNRnCnKcFszU41RYaf5V41tPjjFo3UmUpvVGYTru9j%2BFZtwRGSHYXLldMzdICNkeCVp%2B2Z8QfUVqmZLUba0f32fPGkVRpjwjKzl9l1gOpKqFuiZTzSuEdLFeGVckPywXPAVvr9QIDD8tP3EBjqkAbILL8voIRbc0EAflaw2N%2FH%2Bw3Xw%2F2ofuI%2FV3XHj%2FTz4xTM8i95ohVaOfxy4akIYct%2FQsss5y%2FPdBaK4SVaWQfF0Nyr76O%2B%2FJHol1tgxWU9M79UsPm10n7exmAFZRPr5AT4bBsjWuo%2BQ9hvXbZX5vR2C%2FzMQlDLmjbrg0FfZfmNwYuIlJuY%2FPxdyxieu8K3HAxVyflaWjSV7DhKwiVJFBMx%2B%2FkKM&X-Amz-Signature=f1093888135c425530c5fa2de5581baf4a7b9b77a68aa368a4ae7bd25377d984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGLMOET%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDbLFgF6eNg7ubBO6fD51mQTesN7Dht%2FTGED%2BP9ccSsbwIhAIffxLOPT7XzKHb%2FZ52Bfky82dKMZRQkABg%2FBak9ra6JKv8DCGEQABoMNjM3NDIzMTgzODA1IgxDJeJDqj%2BSmwX%2FOdQq3APKw2fZfTnMwGLZjfJeMu%2F51b%2BpBGwmqWznB%2FkIfoJJ47MWD23HPD5laYaJfnMzQqXqpLk%2FYKDd3VViRWNx0ec65JrOxZbN1EMlRRns4BcFd6Z6gowWj3jsy7NyBp7dZI7x7D9rNJiwcayJf%2F4UWaZaTyhZb70pUaIoiI9f3T9MfNgWhe8OmDnBIv8w4vO%2Fg0HbWjvy8hm2yJJJchmxm67oNp81OQ4BPNqrOao8gdqEI82f%2FTm7h0%2FTNJ1qk25HpUCU4f7cANU2xOtZ0MRAgmTEqT6OdFmsYuAyQ%2BzfswQKGroYef2JBGC3lXocUnJpwzKWp4AjXh5OEN8CMy1MVOMk81Bt8fa1wMjhwSm9p1PfhbBNcftoevBnmT%2FLHmSjncQpgj0VHbYnWlINfUPf7akovJQolOT6zTSxZb3gepRmNtsxiXh4pxXJdPrgya6q4GTqUflnzgclMUMeofN3tDf28P%2FjT%2BnHRJN2LpO15Smu0bCmFomOBmNRnCnKcFszU41RYaf5V41tPjjFo3UmUpvVGYTru9j%2BFZtwRGSHYXLldMzdICNkeCVp%2B2Z8QfUVqmZLUba0f32fPGkVRpjwjKzl9l1gOpKqFuiZTzSuEdLFeGVckPywXPAVvr9QIDD8tP3EBjqkAbILL8voIRbc0EAflaw2N%2FH%2Bw3Xw%2F2ofuI%2FV3XHj%2FTz4xTM8i95ohVaOfxy4akIYct%2FQsss5y%2FPdBaK4SVaWQfF0Nyr76O%2B%2FJHol1tgxWU9M79UsPm10n7exmAFZRPr5AT4bBsjWuo%2BQ9hvXbZX5vR2C%2FzMQlDLmjbrg0FfZfmNwYuIlJuY%2FPxdyxieu8K3HAxVyflaWjSV7DhKwiVJFBMx%2B%2FkKM&X-Amz-Signature=ff0ae85e3e5b0b7103cedd471ac8332c89d6bb0062128cbed84732dc05f789ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGLMOET%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDbLFgF6eNg7ubBO6fD51mQTesN7Dht%2FTGED%2BP9ccSsbwIhAIffxLOPT7XzKHb%2FZ52Bfky82dKMZRQkABg%2FBak9ra6JKv8DCGEQABoMNjM3NDIzMTgzODA1IgxDJeJDqj%2BSmwX%2FOdQq3APKw2fZfTnMwGLZjfJeMu%2F51b%2BpBGwmqWznB%2FkIfoJJ47MWD23HPD5laYaJfnMzQqXqpLk%2FYKDd3VViRWNx0ec65JrOxZbN1EMlRRns4BcFd6Z6gowWj3jsy7NyBp7dZI7x7D9rNJiwcayJf%2F4UWaZaTyhZb70pUaIoiI9f3T9MfNgWhe8OmDnBIv8w4vO%2Fg0HbWjvy8hm2yJJJchmxm67oNp81OQ4BPNqrOao8gdqEI82f%2FTm7h0%2FTNJ1qk25HpUCU4f7cANU2xOtZ0MRAgmTEqT6OdFmsYuAyQ%2BzfswQKGroYef2JBGC3lXocUnJpwzKWp4AjXh5OEN8CMy1MVOMk81Bt8fa1wMjhwSm9p1PfhbBNcftoevBnmT%2FLHmSjncQpgj0VHbYnWlINfUPf7akovJQolOT6zTSxZb3gepRmNtsxiXh4pxXJdPrgya6q4GTqUflnzgclMUMeofN3tDf28P%2FjT%2BnHRJN2LpO15Smu0bCmFomOBmNRnCnKcFszU41RYaf5V41tPjjFo3UmUpvVGYTru9j%2BFZtwRGSHYXLldMzdICNkeCVp%2B2Z8QfUVqmZLUba0f32fPGkVRpjwjKzl9l1gOpKqFuiZTzSuEdLFeGVckPywXPAVvr9QIDD8tP3EBjqkAbILL8voIRbc0EAflaw2N%2FH%2Bw3Xw%2F2ofuI%2FV3XHj%2FTz4xTM8i95ohVaOfxy4akIYct%2FQsss5y%2FPdBaK4SVaWQfF0Nyr76O%2B%2FJHol1tgxWU9M79UsPm10n7exmAFZRPr5AT4bBsjWuo%2BQ9hvXbZX5vR2C%2FzMQlDLmjbrg0FfZfmNwYuIlJuY%2FPxdyxieu8K3HAxVyflaWjSV7DhKwiVJFBMx%2B%2FkKM&X-Amz-Signature=f43483c6dd439b9086b9bef9d193c198de9641c9dfec170f58a0f33381643fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
