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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSLKWZN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCQ6%2BoTlMO8cOAtsG29UKHCiR1BaO%2FL63jy1s2lnf5SQAIhAKY7Hec%2Fn5enMfMGL8P5riVBX7Bty3QJaap%2BzTu82l6bKv8DCEMQABoMNjM3NDIzMTgzODA1IgxOc5vxl67QWNpzogoq3ANckcCa5IATRIo%2BOG4j1sUJov5W6guVLjNybeKwzqCjAPBfZyPdW5Xw8hfEUOTPg5KY64jrq0Q0v87f%2FaE4Sh4clE4ZsES8zLY6uUWgSGUnD4BL%2Fq1RC7Y3KD%2BHZJQU3p7pTt5cX%2FQfRY4g4aW1q1%2B%2BNCpogtBZxBQakYYsvG2TAzpIgKYeZcRER8e07qlVGPW5Ofnmy9%2BxAU4HvHy9%2FO34YIsDzrJ8WBA0D4ao3OJ2UOySk1jxqgOcGyMDBBK5efKJT5L3dUqjJr6RHn4iEJ0Xccl3NIIh7qvXmD7QbYBhjamh10IaGB5J2tNROcV6iD%2Fy1J0WEvQpSp1WZINqLEauyizd2E9OfxGpPlT8x7NdMxyOs8IX5j8lzXJYh8v3%2F%2FwaFGfXN3l89FPDzDVrJ%2BN4QHdqiNRvpRekpdAKxIZ23tJ6PqQdflgObiz1eI1sSicOKkAJVfYbljGE0I7ux3C7%2FdUYBiLSX4j4JyW9Ze6NPBDA0FyTQeygRvHCM4iat0wLaXtUWY%2BzfTerds7NhbdJZf4oLHude0VretQxUai19G59zYkRxnmO8M6QsliFget3IbDfXcJdrzbW6Np2rX2HqBHIYVQdjCm68L8Ym9V5brwdPu1r3vr%2BABckYTDt3oXCBjqkAQGVlrxvRGGKMUfSfuovXHOjvMWWo2l1wEsbYpUyO8I7qHx29IYuQk%2Bb4jviBOzlE%2BnXCo0%2FGtc67D5nET7bbcjz5dsrcL9%2Ff3YZYoW9gkU6FvVSaPBz4BNatGDFx5kbChdIGIZp7AnsAc%2FM5zXuawnfhaTHD5ylMAYIcO%2FwjkUzzNIevIv4Z0b6Uqh%2FUExchYcX9rSHQnOooP3qHaRj4f7jjb8e&X-Amz-Signature=1e8be9c7184e3b874d7c183bfe110453512fce48ceac42ebd8aabb0ebfc3e8c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSLKWZN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCQ6%2BoTlMO8cOAtsG29UKHCiR1BaO%2FL63jy1s2lnf5SQAIhAKY7Hec%2Fn5enMfMGL8P5riVBX7Bty3QJaap%2BzTu82l6bKv8DCEMQABoMNjM3NDIzMTgzODA1IgxOc5vxl67QWNpzogoq3ANckcCa5IATRIo%2BOG4j1sUJov5W6guVLjNybeKwzqCjAPBfZyPdW5Xw8hfEUOTPg5KY64jrq0Q0v87f%2FaE4Sh4clE4ZsES8zLY6uUWgSGUnD4BL%2Fq1RC7Y3KD%2BHZJQU3p7pTt5cX%2FQfRY4g4aW1q1%2B%2BNCpogtBZxBQakYYsvG2TAzpIgKYeZcRER8e07qlVGPW5Ofnmy9%2BxAU4HvHy9%2FO34YIsDzrJ8WBA0D4ao3OJ2UOySk1jxqgOcGyMDBBK5efKJT5L3dUqjJr6RHn4iEJ0Xccl3NIIh7qvXmD7QbYBhjamh10IaGB5J2tNROcV6iD%2Fy1J0WEvQpSp1WZINqLEauyizd2E9OfxGpPlT8x7NdMxyOs8IX5j8lzXJYh8v3%2F%2FwaFGfXN3l89FPDzDVrJ%2BN4QHdqiNRvpRekpdAKxIZ23tJ6PqQdflgObiz1eI1sSicOKkAJVfYbljGE0I7ux3C7%2FdUYBiLSX4j4JyW9Ze6NPBDA0FyTQeygRvHCM4iat0wLaXtUWY%2BzfTerds7NhbdJZf4oLHude0VretQxUai19G59zYkRxnmO8M6QsliFget3IbDfXcJdrzbW6Np2rX2HqBHIYVQdjCm68L8Ym9V5brwdPu1r3vr%2BABckYTDt3oXCBjqkAQGVlrxvRGGKMUfSfuovXHOjvMWWo2l1wEsbYpUyO8I7qHx29IYuQk%2Bb4jviBOzlE%2BnXCo0%2FGtc67D5nET7bbcjz5dsrcL9%2Ff3YZYoW9gkU6FvVSaPBz4BNatGDFx5kbChdIGIZp7AnsAc%2FM5zXuawnfhaTHD5ylMAYIcO%2FwjkUzzNIevIv4Z0b6Uqh%2FUExchYcX9rSHQnOooP3qHaRj4f7jjb8e&X-Amz-Signature=e5d5e67a08f84ba87d25f6bd190681eda944a01fe948654706f86553d910a9c4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSLKWZN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCQ6%2BoTlMO8cOAtsG29UKHCiR1BaO%2FL63jy1s2lnf5SQAIhAKY7Hec%2Fn5enMfMGL8P5riVBX7Bty3QJaap%2BzTu82l6bKv8DCEMQABoMNjM3NDIzMTgzODA1IgxOc5vxl67QWNpzogoq3ANckcCa5IATRIo%2BOG4j1sUJov5W6guVLjNybeKwzqCjAPBfZyPdW5Xw8hfEUOTPg5KY64jrq0Q0v87f%2FaE4Sh4clE4ZsES8zLY6uUWgSGUnD4BL%2Fq1RC7Y3KD%2BHZJQU3p7pTt5cX%2FQfRY4g4aW1q1%2B%2BNCpogtBZxBQakYYsvG2TAzpIgKYeZcRER8e07qlVGPW5Ofnmy9%2BxAU4HvHy9%2FO34YIsDzrJ8WBA0D4ao3OJ2UOySk1jxqgOcGyMDBBK5efKJT5L3dUqjJr6RHn4iEJ0Xccl3NIIh7qvXmD7QbYBhjamh10IaGB5J2tNROcV6iD%2Fy1J0WEvQpSp1WZINqLEauyizd2E9OfxGpPlT8x7NdMxyOs8IX5j8lzXJYh8v3%2F%2FwaFGfXN3l89FPDzDVrJ%2BN4QHdqiNRvpRekpdAKxIZ23tJ6PqQdflgObiz1eI1sSicOKkAJVfYbljGE0I7ux3C7%2FdUYBiLSX4j4JyW9Ze6NPBDA0FyTQeygRvHCM4iat0wLaXtUWY%2BzfTerds7NhbdJZf4oLHude0VretQxUai19G59zYkRxnmO8M6QsliFget3IbDfXcJdrzbW6Np2rX2HqBHIYVQdjCm68L8Ym9V5brwdPu1r3vr%2BABckYTDt3oXCBjqkAQGVlrxvRGGKMUfSfuovXHOjvMWWo2l1wEsbYpUyO8I7qHx29IYuQk%2Bb4jviBOzlE%2BnXCo0%2FGtc67D5nET7bbcjz5dsrcL9%2Ff3YZYoW9gkU6FvVSaPBz4BNatGDFx5kbChdIGIZp7AnsAc%2FM5zXuawnfhaTHD5ylMAYIcO%2FwjkUzzNIevIv4Z0b6Uqh%2FUExchYcX9rSHQnOooP3qHaRj4f7jjb8e&X-Amz-Signature=41f56f2827895ea9b0a2243c9ec8c728a1cfd0a67ef3271d2234eb3cd369849d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSLKWZN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCQ6%2BoTlMO8cOAtsG29UKHCiR1BaO%2FL63jy1s2lnf5SQAIhAKY7Hec%2Fn5enMfMGL8P5riVBX7Bty3QJaap%2BzTu82l6bKv8DCEMQABoMNjM3NDIzMTgzODA1IgxOc5vxl67QWNpzogoq3ANckcCa5IATRIo%2BOG4j1sUJov5W6guVLjNybeKwzqCjAPBfZyPdW5Xw8hfEUOTPg5KY64jrq0Q0v87f%2FaE4Sh4clE4ZsES8zLY6uUWgSGUnD4BL%2Fq1RC7Y3KD%2BHZJQU3p7pTt5cX%2FQfRY4g4aW1q1%2B%2BNCpogtBZxBQakYYsvG2TAzpIgKYeZcRER8e07qlVGPW5Ofnmy9%2BxAU4HvHy9%2FO34YIsDzrJ8WBA0D4ao3OJ2UOySk1jxqgOcGyMDBBK5efKJT5L3dUqjJr6RHn4iEJ0Xccl3NIIh7qvXmD7QbYBhjamh10IaGB5J2tNROcV6iD%2Fy1J0WEvQpSp1WZINqLEauyizd2E9OfxGpPlT8x7NdMxyOs8IX5j8lzXJYh8v3%2F%2FwaFGfXN3l89FPDzDVrJ%2BN4QHdqiNRvpRekpdAKxIZ23tJ6PqQdflgObiz1eI1sSicOKkAJVfYbljGE0I7ux3C7%2FdUYBiLSX4j4JyW9Ze6NPBDA0FyTQeygRvHCM4iat0wLaXtUWY%2BzfTerds7NhbdJZf4oLHude0VretQxUai19G59zYkRxnmO8M6QsliFget3IbDfXcJdrzbW6Np2rX2HqBHIYVQdjCm68L8Ym9V5brwdPu1r3vr%2BABckYTDt3oXCBjqkAQGVlrxvRGGKMUfSfuovXHOjvMWWo2l1wEsbYpUyO8I7qHx29IYuQk%2Bb4jviBOzlE%2BnXCo0%2FGtc67D5nET7bbcjz5dsrcL9%2Ff3YZYoW9gkU6FvVSaPBz4BNatGDFx5kbChdIGIZp7AnsAc%2FM5zXuawnfhaTHD5ylMAYIcO%2FwjkUzzNIevIv4Z0b6Uqh%2FUExchYcX9rSHQnOooP3qHaRj4f7jjb8e&X-Amz-Signature=da3c410c8192c85ce94e7e858a2360d3d3babe5f40417d2b8641eafd7ea89179&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSLKWZN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCQ6%2BoTlMO8cOAtsG29UKHCiR1BaO%2FL63jy1s2lnf5SQAIhAKY7Hec%2Fn5enMfMGL8P5riVBX7Bty3QJaap%2BzTu82l6bKv8DCEMQABoMNjM3NDIzMTgzODA1IgxOc5vxl67QWNpzogoq3ANckcCa5IATRIo%2BOG4j1sUJov5W6guVLjNybeKwzqCjAPBfZyPdW5Xw8hfEUOTPg5KY64jrq0Q0v87f%2FaE4Sh4clE4ZsES8zLY6uUWgSGUnD4BL%2Fq1RC7Y3KD%2BHZJQU3p7pTt5cX%2FQfRY4g4aW1q1%2B%2BNCpogtBZxBQakYYsvG2TAzpIgKYeZcRER8e07qlVGPW5Ofnmy9%2BxAU4HvHy9%2FO34YIsDzrJ8WBA0D4ao3OJ2UOySk1jxqgOcGyMDBBK5efKJT5L3dUqjJr6RHn4iEJ0Xccl3NIIh7qvXmD7QbYBhjamh10IaGB5J2tNROcV6iD%2Fy1J0WEvQpSp1WZINqLEauyizd2E9OfxGpPlT8x7NdMxyOs8IX5j8lzXJYh8v3%2F%2FwaFGfXN3l89FPDzDVrJ%2BN4QHdqiNRvpRekpdAKxIZ23tJ6PqQdflgObiz1eI1sSicOKkAJVfYbljGE0I7ux3C7%2FdUYBiLSX4j4JyW9Ze6NPBDA0FyTQeygRvHCM4iat0wLaXtUWY%2BzfTerds7NhbdJZf4oLHude0VretQxUai19G59zYkRxnmO8M6QsliFget3IbDfXcJdrzbW6Np2rX2HqBHIYVQdjCm68L8Ym9V5brwdPu1r3vr%2BABckYTDt3oXCBjqkAQGVlrxvRGGKMUfSfuovXHOjvMWWo2l1wEsbYpUyO8I7qHx29IYuQk%2Bb4jviBOzlE%2BnXCo0%2FGtc67D5nET7bbcjz5dsrcL9%2Ff3YZYoW9gkU6FvVSaPBz4BNatGDFx5kbChdIGIZp7AnsAc%2FM5zXuawnfhaTHD5ylMAYIcO%2FwjkUzzNIevIv4Z0b6Uqh%2FUExchYcX9rSHQnOooP3qHaRj4f7jjb8e&X-Amz-Signature=b4e76565fe2a1471b41d37ca29be5769e0411794a2e911345df773e40bfd719f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSLKWZN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCQ6%2BoTlMO8cOAtsG29UKHCiR1BaO%2FL63jy1s2lnf5SQAIhAKY7Hec%2Fn5enMfMGL8P5riVBX7Bty3QJaap%2BzTu82l6bKv8DCEMQABoMNjM3NDIzMTgzODA1IgxOc5vxl67QWNpzogoq3ANckcCa5IATRIo%2BOG4j1sUJov5W6guVLjNybeKwzqCjAPBfZyPdW5Xw8hfEUOTPg5KY64jrq0Q0v87f%2FaE4Sh4clE4ZsES8zLY6uUWgSGUnD4BL%2Fq1RC7Y3KD%2BHZJQU3p7pTt5cX%2FQfRY4g4aW1q1%2B%2BNCpogtBZxBQakYYsvG2TAzpIgKYeZcRER8e07qlVGPW5Ofnmy9%2BxAU4HvHy9%2FO34YIsDzrJ8WBA0D4ao3OJ2UOySk1jxqgOcGyMDBBK5efKJT5L3dUqjJr6RHn4iEJ0Xccl3NIIh7qvXmD7QbYBhjamh10IaGB5J2tNROcV6iD%2Fy1J0WEvQpSp1WZINqLEauyizd2E9OfxGpPlT8x7NdMxyOs8IX5j8lzXJYh8v3%2F%2FwaFGfXN3l89FPDzDVrJ%2BN4QHdqiNRvpRekpdAKxIZ23tJ6PqQdflgObiz1eI1sSicOKkAJVfYbljGE0I7ux3C7%2FdUYBiLSX4j4JyW9Ze6NPBDA0FyTQeygRvHCM4iat0wLaXtUWY%2BzfTerds7NhbdJZf4oLHude0VretQxUai19G59zYkRxnmO8M6QsliFget3IbDfXcJdrzbW6Np2rX2HqBHIYVQdjCm68L8Ym9V5brwdPu1r3vr%2BABckYTDt3oXCBjqkAQGVlrxvRGGKMUfSfuovXHOjvMWWo2l1wEsbYpUyO8I7qHx29IYuQk%2Bb4jviBOzlE%2BnXCo0%2FGtc67D5nET7bbcjz5dsrcL9%2Ff3YZYoW9gkU6FvVSaPBz4BNatGDFx5kbChdIGIZp7AnsAc%2FM5zXuawnfhaTHD5ylMAYIcO%2FwjkUzzNIevIv4Z0b6Uqh%2FUExchYcX9rSHQnOooP3qHaRj4f7jjb8e&X-Amz-Signature=abbe12fe9e1d2787b64e82dc5591bb2f99121669d8e867f4a96de3ad6e297166&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSLKWZN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCQ6%2BoTlMO8cOAtsG29UKHCiR1BaO%2FL63jy1s2lnf5SQAIhAKY7Hec%2Fn5enMfMGL8P5riVBX7Bty3QJaap%2BzTu82l6bKv8DCEMQABoMNjM3NDIzMTgzODA1IgxOc5vxl67QWNpzogoq3ANckcCa5IATRIo%2BOG4j1sUJov5W6guVLjNybeKwzqCjAPBfZyPdW5Xw8hfEUOTPg5KY64jrq0Q0v87f%2FaE4Sh4clE4ZsES8zLY6uUWgSGUnD4BL%2Fq1RC7Y3KD%2BHZJQU3p7pTt5cX%2FQfRY4g4aW1q1%2B%2BNCpogtBZxBQakYYsvG2TAzpIgKYeZcRER8e07qlVGPW5Ofnmy9%2BxAU4HvHy9%2FO34YIsDzrJ8WBA0D4ao3OJ2UOySk1jxqgOcGyMDBBK5efKJT5L3dUqjJr6RHn4iEJ0Xccl3NIIh7qvXmD7QbYBhjamh10IaGB5J2tNROcV6iD%2Fy1J0WEvQpSp1WZINqLEauyizd2E9OfxGpPlT8x7NdMxyOs8IX5j8lzXJYh8v3%2F%2FwaFGfXN3l89FPDzDVrJ%2BN4QHdqiNRvpRekpdAKxIZ23tJ6PqQdflgObiz1eI1sSicOKkAJVfYbljGE0I7ux3C7%2FdUYBiLSX4j4JyW9Ze6NPBDA0FyTQeygRvHCM4iat0wLaXtUWY%2BzfTerds7NhbdJZf4oLHude0VretQxUai19G59zYkRxnmO8M6QsliFget3IbDfXcJdrzbW6Np2rX2HqBHIYVQdjCm68L8Ym9V5brwdPu1r3vr%2BABckYTDt3oXCBjqkAQGVlrxvRGGKMUfSfuovXHOjvMWWo2l1wEsbYpUyO8I7qHx29IYuQk%2Bb4jviBOzlE%2BnXCo0%2FGtc67D5nET7bbcjz5dsrcL9%2Ff3YZYoW9gkU6FvVSaPBz4BNatGDFx5kbChdIGIZp7AnsAc%2FM5zXuawnfhaTHD5ylMAYIcO%2FwjkUzzNIevIv4Z0b6Uqh%2FUExchYcX9rSHQnOooP3qHaRj4f7jjb8e&X-Amz-Signature=aace447ffa32f269412a5c80f07cb6405f91036e82acb3a37d9ea9d32784c0eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSLKWZN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCQ6%2BoTlMO8cOAtsG29UKHCiR1BaO%2FL63jy1s2lnf5SQAIhAKY7Hec%2Fn5enMfMGL8P5riVBX7Bty3QJaap%2BzTu82l6bKv8DCEMQABoMNjM3NDIzMTgzODA1IgxOc5vxl67QWNpzogoq3ANckcCa5IATRIo%2BOG4j1sUJov5W6guVLjNybeKwzqCjAPBfZyPdW5Xw8hfEUOTPg5KY64jrq0Q0v87f%2FaE4Sh4clE4ZsES8zLY6uUWgSGUnD4BL%2Fq1RC7Y3KD%2BHZJQU3p7pTt5cX%2FQfRY4g4aW1q1%2B%2BNCpogtBZxBQakYYsvG2TAzpIgKYeZcRER8e07qlVGPW5Ofnmy9%2BxAU4HvHy9%2FO34YIsDzrJ8WBA0D4ao3OJ2UOySk1jxqgOcGyMDBBK5efKJT5L3dUqjJr6RHn4iEJ0Xccl3NIIh7qvXmD7QbYBhjamh10IaGB5J2tNROcV6iD%2Fy1J0WEvQpSp1WZINqLEauyizd2E9OfxGpPlT8x7NdMxyOs8IX5j8lzXJYh8v3%2F%2FwaFGfXN3l89FPDzDVrJ%2BN4QHdqiNRvpRekpdAKxIZ23tJ6PqQdflgObiz1eI1sSicOKkAJVfYbljGE0I7ux3C7%2FdUYBiLSX4j4JyW9Ze6NPBDA0FyTQeygRvHCM4iat0wLaXtUWY%2BzfTerds7NhbdJZf4oLHude0VretQxUai19G59zYkRxnmO8M6QsliFget3IbDfXcJdrzbW6Np2rX2HqBHIYVQdjCm68L8Ym9V5brwdPu1r3vr%2BABckYTDt3oXCBjqkAQGVlrxvRGGKMUfSfuovXHOjvMWWo2l1wEsbYpUyO8I7qHx29IYuQk%2Bb4jviBOzlE%2BnXCo0%2FGtc67D5nET7bbcjz5dsrcL9%2Ff3YZYoW9gkU6FvVSaPBz4BNatGDFx5kbChdIGIZp7AnsAc%2FM5zXuawnfhaTHD5ylMAYIcO%2FwjkUzzNIevIv4Z0b6Uqh%2FUExchYcX9rSHQnOooP3qHaRj4f7jjb8e&X-Amz-Signature=0cb26d9b736deea8bd62b640642f1dbfe8e3e1f17f6d9e24c59c18d16ee34295&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
