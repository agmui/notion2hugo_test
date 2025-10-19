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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CV4JAHX%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEfoiaUUAPDZ0KMFc92oIMqeQgJ020ZdXeCn%2FeQm4y2%2FAiBXltQnmMw5CP%2B6va%2F0K4DiY7HOmZG3dD%2BZKHu9j9ws9CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FK439tZ08HBVV612KtwDOON6aM8RodKQoSPNQw88%2Fmkk7DUvNPLuIJfHFthStigkRcArIFHjevCsTFFyO0%2BuDZ%2BA1xl8g9iv90VmXECs5ar%2BVCXCaVYpo3RcIJ53XepKVPRKNRGjQ%2BTjpM5r8cIz0bDzhtWK%2Bn%2BAk1iiK4woU0BUHVOuoMq7k8P%2Bw9pfan1IHxT4BWdzATOdwBkvot6isj6GzG2iLxH2Dpu6ZAdK5lhawNyXk0XDYShf1mxBlXg9ywHM9p0T2gC%2BImzHW5GJXvZo%2FtJ7g4qdcdAkWdsitmzoN1INY%2FOW4Zb1c0aUaGYtfYXzIpuN9hSoINS3hoNHVYfDtm3xbPS0xb3PuE3bomWmI8%2BisRjH9edjgjoFbgKKA8tMcJaqOgHxrGHg02ccWm%2Fnq522%2B2NbGo1MZZLbKAOb5QfAoSq3MDV0xjWJ%2FCGt%2B8Z6nosJkXqgIDtMQOxWs8Y5Ttu9c0psHbk1yDiARODIJ7phNk%2F93%2B73aUh77EuHBU0vfmf7wh6pi5fNPKZR8mvu4VJFQvBs1DVbWwQNfegX2UgXo1R8PfKKJg7D%2B%2Fdx4%2FqPwmTGysHqckdM7sIQ54lqxxxmPWe5vLjhFYPpxxn0e8l7NMBhld6n1uqZ%2B%2F2BWMNgV1hHYaT9%2BOcwyfnQxwY6pgGiIWqXaZZOsyuIfsi%2B5l0uooI9mljPBtQYMSImMeF3jhZ3mfAggINR564BNoTr3CHcQj%2BYMxrYaJlC6kVyZZxCBG35RfKSlx%2B4xBYzEWHM0T3V496phnC9UxABrU4zVfjZgd9XWahDwSjSN5EKpIzFsf7rAq%2BSNfEHJWPDp4ULw4t1pZfnt%2F6T4b0%2FjkQtxPx48XyukC%2F11adzeElP1niB%2BWYCIWuU&X-Amz-Signature=fa75bd97d46d994a1e8e0793c83736cf95b26e74e76b58718724ff18fb21a20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CV4JAHX%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEfoiaUUAPDZ0KMFc92oIMqeQgJ020ZdXeCn%2FeQm4y2%2FAiBXltQnmMw5CP%2B6va%2F0K4DiY7HOmZG3dD%2BZKHu9j9ws9CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FK439tZ08HBVV612KtwDOON6aM8RodKQoSPNQw88%2Fmkk7DUvNPLuIJfHFthStigkRcArIFHjevCsTFFyO0%2BuDZ%2BA1xl8g9iv90VmXECs5ar%2BVCXCaVYpo3RcIJ53XepKVPRKNRGjQ%2BTjpM5r8cIz0bDzhtWK%2Bn%2BAk1iiK4woU0BUHVOuoMq7k8P%2Bw9pfan1IHxT4BWdzATOdwBkvot6isj6GzG2iLxH2Dpu6ZAdK5lhawNyXk0XDYShf1mxBlXg9ywHM9p0T2gC%2BImzHW5GJXvZo%2FtJ7g4qdcdAkWdsitmzoN1INY%2FOW4Zb1c0aUaGYtfYXzIpuN9hSoINS3hoNHVYfDtm3xbPS0xb3PuE3bomWmI8%2BisRjH9edjgjoFbgKKA8tMcJaqOgHxrGHg02ccWm%2Fnq522%2B2NbGo1MZZLbKAOb5QfAoSq3MDV0xjWJ%2FCGt%2B8Z6nosJkXqgIDtMQOxWs8Y5Ttu9c0psHbk1yDiARODIJ7phNk%2F93%2B73aUh77EuHBU0vfmf7wh6pi5fNPKZR8mvu4VJFQvBs1DVbWwQNfegX2UgXo1R8PfKKJg7D%2B%2Fdx4%2FqPwmTGysHqckdM7sIQ54lqxxxmPWe5vLjhFYPpxxn0e8l7NMBhld6n1uqZ%2B%2F2BWMNgV1hHYaT9%2BOcwyfnQxwY6pgGiIWqXaZZOsyuIfsi%2B5l0uooI9mljPBtQYMSImMeF3jhZ3mfAggINR564BNoTr3CHcQj%2BYMxrYaJlC6kVyZZxCBG35RfKSlx%2B4xBYzEWHM0T3V496phnC9UxABrU4zVfjZgd9XWahDwSjSN5EKpIzFsf7rAq%2BSNfEHJWPDp4ULw4t1pZfnt%2F6T4b0%2FjkQtxPx48XyukC%2F11adzeElP1niB%2BWYCIWuU&X-Amz-Signature=3a922e19cfe7da4c5300f68ac9994f049bdf975c3e2c6999ec6fa99a5fd1f8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CV4JAHX%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEfoiaUUAPDZ0KMFc92oIMqeQgJ020ZdXeCn%2FeQm4y2%2FAiBXltQnmMw5CP%2B6va%2F0K4DiY7HOmZG3dD%2BZKHu9j9ws9CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FK439tZ08HBVV612KtwDOON6aM8RodKQoSPNQw88%2Fmkk7DUvNPLuIJfHFthStigkRcArIFHjevCsTFFyO0%2BuDZ%2BA1xl8g9iv90VmXECs5ar%2BVCXCaVYpo3RcIJ53XepKVPRKNRGjQ%2BTjpM5r8cIz0bDzhtWK%2Bn%2BAk1iiK4woU0BUHVOuoMq7k8P%2Bw9pfan1IHxT4BWdzATOdwBkvot6isj6GzG2iLxH2Dpu6ZAdK5lhawNyXk0XDYShf1mxBlXg9ywHM9p0T2gC%2BImzHW5GJXvZo%2FtJ7g4qdcdAkWdsitmzoN1INY%2FOW4Zb1c0aUaGYtfYXzIpuN9hSoINS3hoNHVYfDtm3xbPS0xb3PuE3bomWmI8%2BisRjH9edjgjoFbgKKA8tMcJaqOgHxrGHg02ccWm%2Fnq522%2B2NbGo1MZZLbKAOb5QfAoSq3MDV0xjWJ%2FCGt%2B8Z6nosJkXqgIDtMQOxWs8Y5Ttu9c0psHbk1yDiARODIJ7phNk%2F93%2B73aUh77EuHBU0vfmf7wh6pi5fNPKZR8mvu4VJFQvBs1DVbWwQNfegX2UgXo1R8PfKKJg7D%2B%2Fdx4%2FqPwmTGysHqckdM7sIQ54lqxxxmPWe5vLjhFYPpxxn0e8l7NMBhld6n1uqZ%2B%2F2BWMNgV1hHYaT9%2BOcwyfnQxwY6pgGiIWqXaZZOsyuIfsi%2B5l0uooI9mljPBtQYMSImMeF3jhZ3mfAggINR564BNoTr3CHcQj%2BYMxrYaJlC6kVyZZxCBG35RfKSlx%2B4xBYzEWHM0T3V496phnC9UxABrU4zVfjZgd9XWahDwSjSN5EKpIzFsf7rAq%2BSNfEHJWPDp4ULw4t1pZfnt%2F6T4b0%2FjkQtxPx48XyukC%2F11adzeElP1niB%2BWYCIWuU&X-Amz-Signature=3013a5fcbdd0f6705129498046f7180385b99960d4f22ccc55b4d4e769a113c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CV4JAHX%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEfoiaUUAPDZ0KMFc92oIMqeQgJ020ZdXeCn%2FeQm4y2%2FAiBXltQnmMw5CP%2B6va%2F0K4DiY7HOmZG3dD%2BZKHu9j9ws9CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FK439tZ08HBVV612KtwDOON6aM8RodKQoSPNQw88%2Fmkk7DUvNPLuIJfHFthStigkRcArIFHjevCsTFFyO0%2BuDZ%2BA1xl8g9iv90VmXECs5ar%2BVCXCaVYpo3RcIJ53XepKVPRKNRGjQ%2BTjpM5r8cIz0bDzhtWK%2Bn%2BAk1iiK4woU0BUHVOuoMq7k8P%2Bw9pfan1IHxT4BWdzATOdwBkvot6isj6GzG2iLxH2Dpu6ZAdK5lhawNyXk0XDYShf1mxBlXg9ywHM9p0T2gC%2BImzHW5GJXvZo%2FtJ7g4qdcdAkWdsitmzoN1INY%2FOW4Zb1c0aUaGYtfYXzIpuN9hSoINS3hoNHVYfDtm3xbPS0xb3PuE3bomWmI8%2BisRjH9edjgjoFbgKKA8tMcJaqOgHxrGHg02ccWm%2Fnq522%2B2NbGo1MZZLbKAOb5QfAoSq3MDV0xjWJ%2FCGt%2B8Z6nosJkXqgIDtMQOxWs8Y5Ttu9c0psHbk1yDiARODIJ7phNk%2F93%2B73aUh77EuHBU0vfmf7wh6pi5fNPKZR8mvu4VJFQvBs1DVbWwQNfegX2UgXo1R8PfKKJg7D%2B%2Fdx4%2FqPwmTGysHqckdM7sIQ54lqxxxmPWe5vLjhFYPpxxn0e8l7NMBhld6n1uqZ%2B%2F2BWMNgV1hHYaT9%2BOcwyfnQxwY6pgGiIWqXaZZOsyuIfsi%2B5l0uooI9mljPBtQYMSImMeF3jhZ3mfAggINR564BNoTr3CHcQj%2BYMxrYaJlC6kVyZZxCBG35RfKSlx%2B4xBYzEWHM0T3V496phnC9UxABrU4zVfjZgd9XWahDwSjSN5EKpIzFsf7rAq%2BSNfEHJWPDp4ULw4t1pZfnt%2F6T4b0%2FjkQtxPx48XyukC%2F11adzeElP1niB%2BWYCIWuU&X-Amz-Signature=baf810d21d54d60c99c6435fb8ea74e92e9a911fb5e4912bce4e1db4c5128dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CV4JAHX%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEfoiaUUAPDZ0KMFc92oIMqeQgJ020ZdXeCn%2FeQm4y2%2FAiBXltQnmMw5CP%2B6va%2F0K4DiY7HOmZG3dD%2BZKHu9j9ws9CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FK439tZ08HBVV612KtwDOON6aM8RodKQoSPNQw88%2Fmkk7DUvNPLuIJfHFthStigkRcArIFHjevCsTFFyO0%2BuDZ%2BA1xl8g9iv90VmXECs5ar%2BVCXCaVYpo3RcIJ53XepKVPRKNRGjQ%2BTjpM5r8cIz0bDzhtWK%2Bn%2BAk1iiK4woU0BUHVOuoMq7k8P%2Bw9pfan1IHxT4BWdzATOdwBkvot6isj6GzG2iLxH2Dpu6ZAdK5lhawNyXk0XDYShf1mxBlXg9ywHM9p0T2gC%2BImzHW5GJXvZo%2FtJ7g4qdcdAkWdsitmzoN1INY%2FOW4Zb1c0aUaGYtfYXzIpuN9hSoINS3hoNHVYfDtm3xbPS0xb3PuE3bomWmI8%2BisRjH9edjgjoFbgKKA8tMcJaqOgHxrGHg02ccWm%2Fnq522%2B2NbGo1MZZLbKAOb5QfAoSq3MDV0xjWJ%2FCGt%2B8Z6nosJkXqgIDtMQOxWs8Y5Ttu9c0psHbk1yDiARODIJ7phNk%2F93%2B73aUh77EuHBU0vfmf7wh6pi5fNPKZR8mvu4VJFQvBs1DVbWwQNfegX2UgXo1R8PfKKJg7D%2B%2Fdx4%2FqPwmTGysHqckdM7sIQ54lqxxxmPWe5vLjhFYPpxxn0e8l7NMBhld6n1uqZ%2B%2F2BWMNgV1hHYaT9%2BOcwyfnQxwY6pgGiIWqXaZZOsyuIfsi%2B5l0uooI9mljPBtQYMSImMeF3jhZ3mfAggINR564BNoTr3CHcQj%2BYMxrYaJlC6kVyZZxCBG35RfKSlx%2B4xBYzEWHM0T3V496phnC9UxABrU4zVfjZgd9XWahDwSjSN5EKpIzFsf7rAq%2BSNfEHJWPDp4ULw4t1pZfnt%2F6T4b0%2FjkQtxPx48XyukC%2F11adzeElP1niB%2BWYCIWuU&X-Amz-Signature=dfe6f13353bddeb2e53c897a883ec5fef05b0a17a1f887d2d1b34cc81d2d4926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CV4JAHX%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEfoiaUUAPDZ0KMFc92oIMqeQgJ020ZdXeCn%2FeQm4y2%2FAiBXltQnmMw5CP%2B6va%2F0K4DiY7HOmZG3dD%2BZKHu9j9ws9CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FK439tZ08HBVV612KtwDOON6aM8RodKQoSPNQw88%2Fmkk7DUvNPLuIJfHFthStigkRcArIFHjevCsTFFyO0%2BuDZ%2BA1xl8g9iv90VmXECs5ar%2BVCXCaVYpo3RcIJ53XepKVPRKNRGjQ%2BTjpM5r8cIz0bDzhtWK%2Bn%2BAk1iiK4woU0BUHVOuoMq7k8P%2Bw9pfan1IHxT4BWdzATOdwBkvot6isj6GzG2iLxH2Dpu6ZAdK5lhawNyXk0XDYShf1mxBlXg9ywHM9p0T2gC%2BImzHW5GJXvZo%2FtJ7g4qdcdAkWdsitmzoN1INY%2FOW4Zb1c0aUaGYtfYXzIpuN9hSoINS3hoNHVYfDtm3xbPS0xb3PuE3bomWmI8%2BisRjH9edjgjoFbgKKA8tMcJaqOgHxrGHg02ccWm%2Fnq522%2B2NbGo1MZZLbKAOb5QfAoSq3MDV0xjWJ%2FCGt%2B8Z6nosJkXqgIDtMQOxWs8Y5Ttu9c0psHbk1yDiARODIJ7phNk%2F93%2B73aUh77EuHBU0vfmf7wh6pi5fNPKZR8mvu4VJFQvBs1DVbWwQNfegX2UgXo1R8PfKKJg7D%2B%2Fdx4%2FqPwmTGysHqckdM7sIQ54lqxxxmPWe5vLjhFYPpxxn0e8l7NMBhld6n1uqZ%2B%2F2BWMNgV1hHYaT9%2BOcwyfnQxwY6pgGiIWqXaZZOsyuIfsi%2B5l0uooI9mljPBtQYMSImMeF3jhZ3mfAggINR564BNoTr3CHcQj%2BYMxrYaJlC6kVyZZxCBG35RfKSlx%2B4xBYzEWHM0T3V496phnC9UxABrU4zVfjZgd9XWahDwSjSN5EKpIzFsf7rAq%2BSNfEHJWPDp4ULw4t1pZfnt%2F6T4b0%2FjkQtxPx48XyukC%2F11adzeElP1niB%2BWYCIWuU&X-Amz-Signature=c24a386403e3750446dbcbb41b3f5fbd6389340ce2431bf6a50e1af8ccff493a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CV4JAHX%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEfoiaUUAPDZ0KMFc92oIMqeQgJ020ZdXeCn%2FeQm4y2%2FAiBXltQnmMw5CP%2B6va%2F0K4DiY7HOmZG3dD%2BZKHu9j9ws9CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FK439tZ08HBVV612KtwDOON6aM8RodKQoSPNQw88%2Fmkk7DUvNPLuIJfHFthStigkRcArIFHjevCsTFFyO0%2BuDZ%2BA1xl8g9iv90VmXECs5ar%2BVCXCaVYpo3RcIJ53XepKVPRKNRGjQ%2BTjpM5r8cIz0bDzhtWK%2Bn%2BAk1iiK4woU0BUHVOuoMq7k8P%2Bw9pfan1IHxT4BWdzATOdwBkvot6isj6GzG2iLxH2Dpu6ZAdK5lhawNyXk0XDYShf1mxBlXg9ywHM9p0T2gC%2BImzHW5GJXvZo%2FtJ7g4qdcdAkWdsitmzoN1INY%2FOW4Zb1c0aUaGYtfYXzIpuN9hSoINS3hoNHVYfDtm3xbPS0xb3PuE3bomWmI8%2BisRjH9edjgjoFbgKKA8tMcJaqOgHxrGHg02ccWm%2Fnq522%2B2NbGo1MZZLbKAOb5QfAoSq3MDV0xjWJ%2FCGt%2B8Z6nosJkXqgIDtMQOxWs8Y5Ttu9c0psHbk1yDiARODIJ7phNk%2F93%2B73aUh77EuHBU0vfmf7wh6pi5fNPKZR8mvu4VJFQvBs1DVbWwQNfegX2UgXo1R8PfKKJg7D%2B%2Fdx4%2FqPwmTGysHqckdM7sIQ54lqxxxmPWe5vLjhFYPpxxn0e8l7NMBhld6n1uqZ%2B%2F2BWMNgV1hHYaT9%2BOcwyfnQxwY6pgGiIWqXaZZOsyuIfsi%2B5l0uooI9mljPBtQYMSImMeF3jhZ3mfAggINR564BNoTr3CHcQj%2BYMxrYaJlC6kVyZZxCBG35RfKSlx%2B4xBYzEWHM0T3V496phnC9UxABrU4zVfjZgd9XWahDwSjSN5EKpIzFsf7rAq%2BSNfEHJWPDp4ULw4t1pZfnt%2F6T4b0%2FjkQtxPx48XyukC%2F11adzeElP1niB%2BWYCIWuU&X-Amz-Signature=7e36699ad60a23ddfe7989bb36ae76325b73cdaf1812e1035ae3aec907002f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CV4JAHX%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEfoiaUUAPDZ0KMFc92oIMqeQgJ020ZdXeCn%2FeQm4y2%2FAiBXltQnmMw5CP%2B6va%2F0K4DiY7HOmZG3dD%2BZKHu9j9ws9CqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FK439tZ08HBVV612KtwDOON6aM8RodKQoSPNQw88%2Fmkk7DUvNPLuIJfHFthStigkRcArIFHjevCsTFFyO0%2BuDZ%2BA1xl8g9iv90VmXECs5ar%2BVCXCaVYpo3RcIJ53XepKVPRKNRGjQ%2BTjpM5r8cIz0bDzhtWK%2Bn%2BAk1iiK4woU0BUHVOuoMq7k8P%2Bw9pfan1IHxT4BWdzATOdwBkvot6isj6GzG2iLxH2Dpu6ZAdK5lhawNyXk0XDYShf1mxBlXg9ywHM9p0T2gC%2BImzHW5GJXvZo%2FtJ7g4qdcdAkWdsitmzoN1INY%2FOW4Zb1c0aUaGYtfYXzIpuN9hSoINS3hoNHVYfDtm3xbPS0xb3PuE3bomWmI8%2BisRjH9edjgjoFbgKKA8tMcJaqOgHxrGHg02ccWm%2Fnq522%2B2NbGo1MZZLbKAOb5QfAoSq3MDV0xjWJ%2FCGt%2B8Z6nosJkXqgIDtMQOxWs8Y5Ttu9c0psHbk1yDiARODIJ7phNk%2F93%2B73aUh77EuHBU0vfmf7wh6pi5fNPKZR8mvu4VJFQvBs1DVbWwQNfegX2UgXo1R8PfKKJg7D%2B%2Fdx4%2FqPwmTGysHqckdM7sIQ54lqxxxmPWe5vLjhFYPpxxn0e8l7NMBhld6n1uqZ%2B%2F2BWMNgV1hHYaT9%2BOcwyfnQxwY6pgGiIWqXaZZOsyuIfsi%2B5l0uooI9mljPBtQYMSImMeF3jhZ3mfAggINR564BNoTr3CHcQj%2BYMxrYaJlC6kVyZZxCBG35RfKSlx%2B4xBYzEWHM0T3V496phnC9UxABrU4zVfjZgd9XWahDwSjSN5EKpIzFsf7rAq%2BSNfEHJWPDp4ULw4t1pZfnt%2F6T4b0%2FjkQtxPx48XyukC%2F11adzeElP1niB%2BWYCIWuU&X-Amz-Signature=6c73866be0d829cf044bb0f663d156b1b6d5d362bc0697c1b2c0c459bab2498e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
