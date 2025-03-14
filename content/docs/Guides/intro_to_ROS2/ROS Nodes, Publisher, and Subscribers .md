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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVIDCTO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg42Kdkk%2Bi3xPypFzPKtXJm07CNHiWNBwU0HhBYZD2zQIhAJK04BB6vhiTQ6zD8d6QcIYZMPZ0AC3TU%2FtiFLeKdEh%2BKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza0DUG61sKEkws%2BTkq3AOVuveMTFXfoO%2FS1iDAa782c3mf%2BOOpJxBqAk43QFbsEnuOURMkxmAhrLUSW2dXf%2B2YX6IMOx4sBnJv51RO%2BGDgCV6hUUeit%2FLZRNycmGGZiZYt5RmIHC6dnmD1i%2B0GM83fxrtbjDvplcWD2o%2Bz%2BpBsrWUXc1J%2B3brpZrq8%2F2QV4kkMaWoo9s%2B%2FFEZA3M%2FfFgw6QSQtuK8ircV7jAvaajvCL4Z58YE0MLbwkH0vOU1ffPzxXQSIetcl3jcNYIencod2wXdS338BZVJQYlR98jw1hxr453t2wvYlPEiI5%2FHSluqefAip4BhSuy0Q2ZlSiiuG6E1xxjAElGTq%2B6gAPFdt95eOjVP4%2FPNi4Fv3fTO3ft3gdZkYG7M5Hqf%2BOSv3ofaXb4apyS65aJ%2F%2BKR1hrcJO0g%2F2kFI0gFWmnQKvBjo83FHQmYvk6T6c3xINYnsJ%2FxihiaTlXNgYq64omvBKGfRm%2FLJqt3uVqa%2BokMXadYbGvlbEmMnfUAUJ2Q1y%2BozByb0CHA3OGaNWsPs3mAS2y%2F13UQfHbTBZr1MtIoaJg94McBeUzbVAlTdHZZXBSoJirIaVdJJhRvWuwCgWDyzqsA2AR7rliK%2F1B892oQrlM%2BNzdO7ivoKpOr03VcW35TCk%2BNC%2BBjqkAbL4XD4eaKgggtOAN3wrhX%2BtNZJFWOEcctrUFhSgmvnJiN6bBxuTi4tsB9CAQ4qMYyzv%2FMB7k7a86fKHzKBHqZr5P1P3lCmYvP5uUiPWaOoXQgdEJB5ZDx3xoRgoa4Y5Mi5QNMla6AJmFD2XIeYLJ1cCSpExNVy1zAI8U92gxdzxu24BuMm%2FrkYahna7CHxE0sPDxZ4xf63OLoipi1S3Y1CJ0QBc&X-Amz-Signature=5f7d253c8af601512cd2ad04fbba8e31d967cda0a4e69c6fcaaa188858357bba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVIDCTO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg42Kdkk%2Bi3xPypFzPKtXJm07CNHiWNBwU0HhBYZD2zQIhAJK04BB6vhiTQ6zD8d6QcIYZMPZ0AC3TU%2FtiFLeKdEh%2BKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza0DUG61sKEkws%2BTkq3AOVuveMTFXfoO%2FS1iDAa782c3mf%2BOOpJxBqAk43QFbsEnuOURMkxmAhrLUSW2dXf%2B2YX6IMOx4sBnJv51RO%2BGDgCV6hUUeit%2FLZRNycmGGZiZYt5RmIHC6dnmD1i%2B0GM83fxrtbjDvplcWD2o%2Bz%2BpBsrWUXc1J%2B3brpZrq8%2F2QV4kkMaWoo9s%2B%2FFEZA3M%2FfFgw6QSQtuK8ircV7jAvaajvCL4Z58YE0MLbwkH0vOU1ffPzxXQSIetcl3jcNYIencod2wXdS338BZVJQYlR98jw1hxr453t2wvYlPEiI5%2FHSluqefAip4BhSuy0Q2ZlSiiuG6E1xxjAElGTq%2B6gAPFdt95eOjVP4%2FPNi4Fv3fTO3ft3gdZkYG7M5Hqf%2BOSv3ofaXb4apyS65aJ%2F%2BKR1hrcJO0g%2F2kFI0gFWmnQKvBjo83FHQmYvk6T6c3xINYnsJ%2FxihiaTlXNgYq64omvBKGfRm%2FLJqt3uVqa%2BokMXadYbGvlbEmMnfUAUJ2Q1y%2BozByb0CHA3OGaNWsPs3mAS2y%2F13UQfHbTBZr1MtIoaJg94McBeUzbVAlTdHZZXBSoJirIaVdJJhRvWuwCgWDyzqsA2AR7rliK%2F1B892oQrlM%2BNzdO7ivoKpOr03VcW35TCk%2BNC%2BBjqkAbL4XD4eaKgggtOAN3wrhX%2BtNZJFWOEcctrUFhSgmvnJiN6bBxuTi4tsB9CAQ4qMYyzv%2FMB7k7a86fKHzKBHqZr5P1P3lCmYvP5uUiPWaOoXQgdEJB5ZDx3xoRgoa4Y5Mi5QNMla6AJmFD2XIeYLJ1cCSpExNVy1zAI8U92gxdzxu24BuMm%2FrkYahna7CHxE0sPDxZ4xf63OLoipi1S3Y1CJ0QBc&X-Amz-Signature=f123dfc1c1fdcb873a296cc2753b9024068679dd68a1cb4efa67edcd7a27ee7e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVIDCTO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg42Kdkk%2Bi3xPypFzPKtXJm07CNHiWNBwU0HhBYZD2zQIhAJK04BB6vhiTQ6zD8d6QcIYZMPZ0AC3TU%2FtiFLeKdEh%2BKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza0DUG61sKEkws%2BTkq3AOVuveMTFXfoO%2FS1iDAa782c3mf%2BOOpJxBqAk43QFbsEnuOURMkxmAhrLUSW2dXf%2B2YX6IMOx4sBnJv51RO%2BGDgCV6hUUeit%2FLZRNycmGGZiZYt5RmIHC6dnmD1i%2B0GM83fxrtbjDvplcWD2o%2Bz%2BpBsrWUXc1J%2B3brpZrq8%2F2QV4kkMaWoo9s%2B%2FFEZA3M%2FfFgw6QSQtuK8ircV7jAvaajvCL4Z58YE0MLbwkH0vOU1ffPzxXQSIetcl3jcNYIencod2wXdS338BZVJQYlR98jw1hxr453t2wvYlPEiI5%2FHSluqefAip4BhSuy0Q2ZlSiiuG6E1xxjAElGTq%2B6gAPFdt95eOjVP4%2FPNi4Fv3fTO3ft3gdZkYG7M5Hqf%2BOSv3ofaXb4apyS65aJ%2F%2BKR1hrcJO0g%2F2kFI0gFWmnQKvBjo83FHQmYvk6T6c3xINYnsJ%2FxihiaTlXNgYq64omvBKGfRm%2FLJqt3uVqa%2BokMXadYbGvlbEmMnfUAUJ2Q1y%2BozByb0CHA3OGaNWsPs3mAS2y%2F13UQfHbTBZr1MtIoaJg94McBeUzbVAlTdHZZXBSoJirIaVdJJhRvWuwCgWDyzqsA2AR7rliK%2F1B892oQrlM%2BNzdO7ivoKpOr03VcW35TCk%2BNC%2BBjqkAbL4XD4eaKgggtOAN3wrhX%2BtNZJFWOEcctrUFhSgmvnJiN6bBxuTi4tsB9CAQ4qMYyzv%2FMB7k7a86fKHzKBHqZr5P1P3lCmYvP5uUiPWaOoXQgdEJB5ZDx3xoRgoa4Y5Mi5QNMla6AJmFD2XIeYLJ1cCSpExNVy1zAI8U92gxdzxu24BuMm%2FrkYahna7CHxE0sPDxZ4xf63OLoipi1S3Y1CJ0QBc&X-Amz-Signature=70b24246d2af78bc175c8b70810edd12f3939168e16681338616b5c8706e7bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVIDCTO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg42Kdkk%2Bi3xPypFzPKtXJm07CNHiWNBwU0HhBYZD2zQIhAJK04BB6vhiTQ6zD8d6QcIYZMPZ0AC3TU%2FtiFLeKdEh%2BKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza0DUG61sKEkws%2BTkq3AOVuveMTFXfoO%2FS1iDAa782c3mf%2BOOpJxBqAk43QFbsEnuOURMkxmAhrLUSW2dXf%2B2YX6IMOx4sBnJv51RO%2BGDgCV6hUUeit%2FLZRNycmGGZiZYt5RmIHC6dnmD1i%2B0GM83fxrtbjDvplcWD2o%2Bz%2BpBsrWUXc1J%2B3brpZrq8%2F2QV4kkMaWoo9s%2B%2FFEZA3M%2FfFgw6QSQtuK8ircV7jAvaajvCL4Z58YE0MLbwkH0vOU1ffPzxXQSIetcl3jcNYIencod2wXdS338BZVJQYlR98jw1hxr453t2wvYlPEiI5%2FHSluqefAip4BhSuy0Q2ZlSiiuG6E1xxjAElGTq%2B6gAPFdt95eOjVP4%2FPNi4Fv3fTO3ft3gdZkYG7M5Hqf%2BOSv3ofaXb4apyS65aJ%2F%2BKR1hrcJO0g%2F2kFI0gFWmnQKvBjo83FHQmYvk6T6c3xINYnsJ%2FxihiaTlXNgYq64omvBKGfRm%2FLJqt3uVqa%2BokMXadYbGvlbEmMnfUAUJ2Q1y%2BozByb0CHA3OGaNWsPs3mAS2y%2F13UQfHbTBZr1MtIoaJg94McBeUzbVAlTdHZZXBSoJirIaVdJJhRvWuwCgWDyzqsA2AR7rliK%2F1B892oQrlM%2BNzdO7ivoKpOr03VcW35TCk%2BNC%2BBjqkAbL4XD4eaKgggtOAN3wrhX%2BtNZJFWOEcctrUFhSgmvnJiN6bBxuTi4tsB9CAQ4qMYyzv%2FMB7k7a86fKHzKBHqZr5P1P3lCmYvP5uUiPWaOoXQgdEJB5ZDx3xoRgoa4Y5Mi5QNMla6AJmFD2XIeYLJ1cCSpExNVy1zAI8U92gxdzxu24BuMm%2FrkYahna7CHxE0sPDxZ4xf63OLoipi1S3Y1CJ0QBc&X-Amz-Signature=12dff9e95f8d0447e3f8ea53fa150f863bd5a0dc4aeac4efcfb5baa92fbb3bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVIDCTO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg42Kdkk%2Bi3xPypFzPKtXJm07CNHiWNBwU0HhBYZD2zQIhAJK04BB6vhiTQ6zD8d6QcIYZMPZ0AC3TU%2FtiFLeKdEh%2BKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza0DUG61sKEkws%2BTkq3AOVuveMTFXfoO%2FS1iDAa782c3mf%2BOOpJxBqAk43QFbsEnuOURMkxmAhrLUSW2dXf%2B2YX6IMOx4sBnJv51RO%2BGDgCV6hUUeit%2FLZRNycmGGZiZYt5RmIHC6dnmD1i%2B0GM83fxrtbjDvplcWD2o%2Bz%2BpBsrWUXc1J%2B3brpZrq8%2F2QV4kkMaWoo9s%2B%2FFEZA3M%2FfFgw6QSQtuK8ircV7jAvaajvCL4Z58YE0MLbwkH0vOU1ffPzxXQSIetcl3jcNYIencod2wXdS338BZVJQYlR98jw1hxr453t2wvYlPEiI5%2FHSluqefAip4BhSuy0Q2ZlSiiuG6E1xxjAElGTq%2B6gAPFdt95eOjVP4%2FPNi4Fv3fTO3ft3gdZkYG7M5Hqf%2BOSv3ofaXb4apyS65aJ%2F%2BKR1hrcJO0g%2F2kFI0gFWmnQKvBjo83FHQmYvk6T6c3xINYnsJ%2FxihiaTlXNgYq64omvBKGfRm%2FLJqt3uVqa%2BokMXadYbGvlbEmMnfUAUJ2Q1y%2BozByb0CHA3OGaNWsPs3mAS2y%2F13UQfHbTBZr1MtIoaJg94McBeUzbVAlTdHZZXBSoJirIaVdJJhRvWuwCgWDyzqsA2AR7rliK%2F1B892oQrlM%2BNzdO7ivoKpOr03VcW35TCk%2BNC%2BBjqkAbL4XD4eaKgggtOAN3wrhX%2BtNZJFWOEcctrUFhSgmvnJiN6bBxuTi4tsB9CAQ4qMYyzv%2FMB7k7a86fKHzKBHqZr5P1P3lCmYvP5uUiPWaOoXQgdEJB5ZDx3xoRgoa4Y5Mi5QNMla6AJmFD2XIeYLJ1cCSpExNVy1zAI8U92gxdzxu24BuMm%2FrkYahna7CHxE0sPDxZ4xf63OLoipi1S3Y1CJ0QBc&X-Amz-Signature=bd603305cdf523b6270d901a84f2ff15a5606a5dfd21d25e9a179acfebff2459&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVIDCTO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg42Kdkk%2Bi3xPypFzPKtXJm07CNHiWNBwU0HhBYZD2zQIhAJK04BB6vhiTQ6zD8d6QcIYZMPZ0AC3TU%2FtiFLeKdEh%2BKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza0DUG61sKEkws%2BTkq3AOVuveMTFXfoO%2FS1iDAa782c3mf%2BOOpJxBqAk43QFbsEnuOURMkxmAhrLUSW2dXf%2B2YX6IMOx4sBnJv51RO%2BGDgCV6hUUeit%2FLZRNycmGGZiZYt5RmIHC6dnmD1i%2B0GM83fxrtbjDvplcWD2o%2Bz%2BpBsrWUXc1J%2B3brpZrq8%2F2QV4kkMaWoo9s%2B%2FFEZA3M%2FfFgw6QSQtuK8ircV7jAvaajvCL4Z58YE0MLbwkH0vOU1ffPzxXQSIetcl3jcNYIencod2wXdS338BZVJQYlR98jw1hxr453t2wvYlPEiI5%2FHSluqefAip4BhSuy0Q2ZlSiiuG6E1xxjAElGTq%2B6gAPFdt95eOjVP4%2FPNi4Fv3fTO3ft3gdZkYG7M5Hqf%2BOSv3ofaXb4apyS65aJ%2F%2BKR1hrcJO0g%2F2kFI0gFWmnQKvBjo83FHQmYvk6T6c3xINYnsJ%2FxihiaTlXNgYq64omvBKGfRm%2FLJqt3uVqa%2BokMXadYbGvlbEmMnfUAUJ2Q1y%2BozByb0CHA3OGaNWsPs3mAS2y%2F13UQfHbTBZr1MtIoaJg94McBeUzbVAlTdHZZXBSoJirIaVdJJhRvWuwCgWDyzqsA2AR7rliK%2F1B892oQrlM%2BNzdO7ivoKpOr03VcW35TCk%2BNC%2BBjqkAbL4XD4eaKgggtOAN3wrhX%2BtNZJFWOEcctrUFhSgmvnJiN6bBxuTi4tsB9CAQ4qMYyzv%2FMB7k7a86fKHzKBHqZr5P1P3lCmYvP5uUiPWaOoXQgdEJB5ZDx3xoRgoa4Y5Mi5QNMla6AJmFD2XIeYLJ1cCSpExNVy1zAI8U92gxdzxu24BuMm%2FrkYahna7CHxE0sPDxZ4xf63OLoipi1S3Y1CJ0QBc&X-Amz-Signature=ef38d941eb54c7fc7f50a0851ed96dcd7ba243d5daa7c81224f3858bb5dd263d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVIDCTO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg42Kdkk%2Bi3xPypFzPKtXJm07CNHiWNBwU0HhBYZD2zQIhAJK04BB6vhiTQ6zD8d6QcIYZMPZ0AC3TU%2FtiFLeKdEh%2BKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza0DUG61sKEkws%2BTkq3AOVuveMTFXfoO%2FS1iDAa782c3mf%2BOOpJxBqAk43QFbsEnuOURMkxmAhrLUSW2dXf%2B2YX6IMOx4sBnJv51RO%2BGDgCV6hUUeit%2FLZRNycmGGZiZYt5RmIHC6dnmD1i%2B0GM83fxrtbjDvplcWD2o%2Bz%2BpBsrWUXc1J%2B3brpZrq8%2F2QV4kkMaWoo9s%2B%2FFEZA3M%2FfFgw6QSQtuK8ircV7jAvaajvCL4Z58YE0MLbwkH0vOU1ffPzxXQSIetcl3jcNYIencod2wXdS338BZVJQYlR98jw1hxr453t2wvYlPEiI5%2FHSluqefAip4BhSuy0Q2ZlSiiuG6E1xxjAElGTq%2B6gAPFdt95eOjVP4%2FPNi4Fv3fTO3ft3gdZkYG7M5Hqf%2BOSv3ofaXb4apyS65aJ%2F%2BKR1hrcJO0g%2F2kFI0gFWmnQKvBjo83FHQmYvk6T6c3xINYnsJ%2FxihiaTlXNgYq64omvBKGfRm%2FLJqt3uVqa%2BokMXadYbGvlbEmMnfUAUJ2Q1y%2BozByb0CHA3OGaNWsPs3mAS2y%2F13UQfHbTBZr1MtIoaJg94McBeUzbVAlTdHZZXBSoJirIaVdJJhRvWuwCgWDyzqsA2AR7rliK%2F1B892oQrlM%2BNzdO7ivoKpOr03VcW35TCk%2BNC%2BBjqkAbL4XD4eaKgggtOAN3wrhX%2BtNZJFWOEcctrUFhSgmvnJiN6bBxuTi4tsB9CAQ4qMYyzv%2FMB7k7a86fKHzKBHqZr5P1P3lCmYvP5uUiPWaOoXQgdEJB5ZDx3xoRgoa4Y5Mi5QNMla6AJmFD2XIeYLJ1cCSpExNVy1zAI8U92gxdzxu24BuMm%2FrkYahna7CHxE0sPDxZ4xf63OLoipi1S3Y1CJ0QBc&X-Amz-Signature=a848f60bf7f9800ff09510aaf2f7bc4558a296dfc770b84bedcac07be195d3f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVIDCTO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg42Kdkk%2Bi3xPypFzPKtXJm07CNHiWNBwU0HhBYZD2zQIhAJK04BB6vhiTQ6zD8d6QcIYZMPZ0AC3TU%2FtiFLeKdEh%2BKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igza0DUG61sKEkws%2BTkq3AOVuveMTFXfoO%2FS1iDAa782c3mf%2BOOpJxBqAk43QFbsEnuOURMkxmAhrLUSW2dXf%2B2YX6IMOx4sBnJv51RO%2BGDgCV6hUUeit%2FLZRNycmGGZiZYt5RmIHC6dnmD1i%2B0GM83fxrtbjDvplcWD2o%2Bz%2BpBsrWUXc1J%2B3brpZrq8%2F2QV4kkMaWoo9s%2B%2FFEZA3M%2FfFgw6QSQtuK8ircV7jAvaajvCL4Z58YE0MLbwkH0vOU1ffPzxXQSIetcl3jcNYIencod2wXdS338BZVJQYlR98jw1hxr453t2wvYlPEiI5%2FHSluqefAip4BhSuy0Q2ZlSiiuG6E1xxjAElGTq%2B6gAPFdt95eOjVP4%2FPNi4Fv3fTO3ft3gdZkYG7M5Hqf%2BOSv3ofaXb4apyS65aJ%2F%2BKR1hrcJO0g%2F2kFI0gFWmnQKvBjo83FHQmYvk6T6c3xINYnsJ%2FxihiaTlXNgYq64omvBKGfRm%2FLJqt3uVqa%2BokMXadYbGvlbEmMnfUAUJ2Q1y%2BozByb0CHA3OGaNWsPs3mAS2y%2F13UQfHbTBZr1MtIoaJg94McBeUzbVAlTdHZZXBSoJirIaVdJJhRvWuwCgWDyzqsA2AR7rliK%2F1B892oQrlM%2BNzdO7ivoKpOr03VcW35TCk%2BNC%2BBjqkAbL4XD4eaKgggtOAN3wrhX%2BtNZJFWOEcctrUFhSgmvnJiN6bBxuTi4tsB9CAQ4qMYyzv%2FMB7k7a86fKHzKBHqZr5P1P3lCmYvP5uUiPWaOoXQgdEJB5ZDx3xoRgoa4Y5Mi5QNMla6AJmFD2XIeYLJ1cCSpExNVy1zAI8U92gxdzxu24BuMm%2FrkYahna7CHxE0sPDxZ4xf63OLoipi1S3Y1CJ0QBc&X-Amz-Signature=9f5dbeb2e4d81300778737d15a1259a59d5d5d9c8590a9d6922b14f6fd5617bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
