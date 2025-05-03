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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHPH4S3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGtbAMUKFz4qsT0XKqhtsGvavFlv0jcCAz27ALkvjlztAiBUjIjQkuEoqjSSArNH95DT5ywJVKRr35DoimfcHEDIDSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlThgyzsQegbvhPRmKtwDyexR5tzKJl8MNr20ZtmhXf%2FWPGAJXdA5Ae12ghBk6MtVKd%2Fs8l3%2FNL7LgWJH39r%2FjfgfHv9S1WSNUw5QyXAVkkBJ0Gvz%2B4bNZ3jm1zHXKy9zcc5SMUOWuW78V%2BskHcoeC%2B%2FiYrjqfPtx7Q668C2YirXoGlY70ibsGLRxhWNHQx7DjjjsAuPX3GNiFikB%2BPmhzNzxPR6%2FPk1j2BRYeWwOmGiVdW0infGrQGUB8URbMuprsHQGPrD5Vx87TX%2BoJiTL%2BgKg3UPWCi32qe3hkJM310EHiKlOM85weY7kZlaKzhXGJhdEFtw28QjaomWV14dVjI4FBx7H5HjV9bJxdZZD6lTaBrP6umn0fJSV6LISVj0mMVK5En6WOidysoxvRIS6XtE76K3w68rkxZE9A8DMDaYCAI4uPHTJZgyt0YDwv1m4smaCJKOTKOayGvkAQl3ef2Axuhz%2BaaBQQt7YTa3bw%2F5pnqzVK6hNBhNZS2sELi6L%2FhPUIa74SDL4%2BEb1KPGhz0HFmv0fzJErBhbIUtvan%2BQBhxEcP1s4nVNhvIYgQJojm8IhHCQo2EfJsjCGkYDilM%2Bxh2Nf%2Bi8RGRfA6j1JMltbVOUknzMnpxdEH0A%2F4AwHlwIC38219QdH61Yw65rawAY6pgG71B0E2%2BZb5pGBDqje%2BsOF%2B5Pn3bgwypJyBe2COJMkz8V1xKstXoZJaYcpyADK%2FFwobQSV%2FNRtHV4s8jptF9oRez6vj%2F272PAdICCIYeGioIVE4W4Fjwi6IovL7KEP1Y7rxK3YGZcQE3ePDyf8nW3LRv2OV3%2FUXlz0f09pbiZkxIxqqUTckMIUhip4G49meyZDo0TTK0aolOKQGm5dD%2FcKI1oF%2FQsq&X-Amz-Signature=1f9cf36a164e1d46014d7d118d4a4a0f0b4a25d219b098ed74107eb91bc3c9fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHPH4S3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGtbAMUKFz4qsT0XKqhtsGvavFlv0jcCAz27ALkvjlztAiBUjIjQkuEoqjSSArNH95DT5ywJVKRr35DoimfcHEDIDSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlThgyzsQegbvhPRmKtwDyexR5tzKJl8MNr20ZtmhXf%2FWPGAJXdA5Ae12ghBk6MtVKd%2Fs8l3%2FNL7LgWJH39r%2FjfgfHv9S1WSNUw5QyXAVkkBJ0Gvz%2B4bNZ3jm1zHXKy9zcc5SMUOWuW78V%2BskHcoeC%2B%2FiYrjqfPtx7Q668C2YirXoGlY70ibsGLRxhWNHQx7DjjjsAuPX3GNiFikB%2BPmhzNzxPR6%2FPk1j2BRYeWwOmGiVdW0infGrQGUB8URbMuprsHQGPrD5Vx87TX%2BoJiTL%2BgKg3UPWCi32qe3hkJM310EHiKlOM85weY7kZlaKzhXGJhdEFtw28QjaomWV14dVjI4FBx7H5HjV9bJxdZZD6lTaBrP6umn0fJSV6LISVj0mMVK5En6WOidysoxvRIS6XtE76K3w68rkxZE9A8DMDaYCAI4uPHTJZgyt0YDwv1m4smaCJKOTKOayGvkAQl3ef2Axuhz%2BaaBQQt7YTa3bw%2F5pnqzVK6hNBhNZS2sELi6L%2FhPUIa74SDL4%2BEb1KPGhz0HFmv0fzJErBhbIUtvan%2BQBhxEcP1s4nVNhvIYgQJojm8IhHCQo2EfJsjCGkYDilM%2Bxh2Nf%2Bi8RGRfA6j1JMltbVOUknzMnpxdEH0A%2F4AwHlwIC38219QdH61Yw65rawAY6pgG71B0E2%2BZb5pGBDqje%2BsOF%2B5Pn3bgwypJyBe2COJMkz8V1xKstXoZJaYcpyADK%2FFwobQSV%2FNRtHV4s8jptF9oRez6vj%2F272PAdICCIYeGioIVE4W4Fjwi6IovL7KEP1Y7rxK3YGZcQE3ePDyf8nW3LRv2OV3%2FUXlz0f09pbiZkxIxqqUTckMIUhip4G49meyZDo0TTK0aolOKQGm5dD%2FcKI1oF%2FQsq&X-Amz-Signature=55b39a56e6b80be90c04216b94358d64a6d08361c1fe84f7e29d7a33073a4e87&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHPH4S3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGtbAMUKFz4qsT0XKqhtsGvavFlv0jcCAz27ALkvjlztAiBUjIjQkuEoqjSSArNH95DT5ywJVKRr35DoimfcHEDIDSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlThgyzsQegbvhPRmKtwDyexR5tzKJl8MNr20ZtmhXf%2FWPGAJXdA5Ae12ghBk6MtVKd%2Fs8l3%2FNL7LgWJH39r%2FjfgfHv9S1WSNUw5QyXAVkkBJ0Gvz%2B4bNZ3jm1zHXKy9zcc5SMUOWuW78V%2BskHcoeC%2B%2FiYrjqfPtx7Q668C2YirXoGlY70ibsGLRxhWNHQx7DjjjsAuPX3GNiFikB%2BPmhzNzxPR6%2FPk1j2BRYeWwOmGiVdW0infGrQGUB8URbMuprsHQGPrD5Vx87TX%2BoJiTL%2BgKg3UPWCi32qe3hkJM310EHiKlOM85weY7kZlaKzhXGJhdEFtw28QjaomWV14dVjI4FBx7H5HjV9bJxdZZD6lTaBrP6umn0fJSV6LISVj0mMVK5En6WOidysoxvRIS6XtE76K3w68rkxZE9A8DMDaYCAI4uPHTJZgyt0YDwv1m4smaCJKOTKOayGvkAQl3ef2Axuhz%2BaaBQQt7YTa3bw%2F5pnqzVK6hNBhNZS2sELi6L%2FhPUIa74SDL4%2BEb1KPGhz0HFmv0fzJErBhbIUtvan%2BQBhxEcP1s4nVNhvIYgQJojm8IhHCQo2EfJsjCGkYDilM%2Bxh2Nf%2Bi8RGRfA6j1JMltbVOUknzMnpxdEH0A%2F4AwHlwIC38219QdH61Yw65rawAY6pgG71B0E2%2BZb5pGBDqje%2BsOF%2B5Pn3bgwypJyBe2COJMkz8V1xKstXoZJaYcpyADK%2FFwobQSV%2FNRtHV4s8jptF9oRez6vj%2F272PAdICCIYeGioIVE4W4Fjwi6IovL7KEP1Y7rxK3YGZcQE3ePDyf8nW3LRv2OV3%2FUXlz0f09pbiZkxIxqqUTckMIUhip4G49meyZDo0TTK0aolOKQGm5dD%2FcKI1oF%2FQsq&X-Amz-Signature=827fb8fa68acc8563dac003bca7cffb59751e5e76b6172dd24a4a3a4825ac96f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHPH4S3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGtbAMUKFz4qsT0XKqhtsGvavFlv0jcCAz27ALkvjlztAiBUjIjQkuEoqjSSArNH95DT5ywJVKRr35DoimfcHEDIDSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlThgyzsQegbvhPRmKtwDyexR5tzKJl8MNr20ZtmhXf%2FWPGAJXdA5Ae12ghBk6MtVKd%2Fs8l3%2FNL7LgWJH39r%2FjfgfHv9S1WSNUw5QyXAVkkBJ0Gvz%2B4bNZ3jm1zHXKy9zcc5SMUOWuW78V%2BskHcoeC%2B%2FiYrjqfPtx7Q668C2YirXoGlY70ibsGLRxhWNHQx7DjjjsAuPX3GNiFikB%2BPmhzNzxPR6%2FPk1j2BRYeWwOmGiVdW0infGrQGUB8URbMuprsHQGPrD5Vx87TX%2BoJiTL%2BgKg3UPWCi32qe3hkJM310EHiKlOM85weY7kZlaKzhXGJhdEFtw28QjaomWV14dVjI4FBx7H5HjV9bJxdZZD6lTaBrP6umn0fJSV6LISVj0mMVK5En6WOidysoxvRIS6XtE76K3w68rkxZE9A8DMDaYCAI4uPHTJZgyt0YDwv1m4smaCJKOTKOayGvkAQl3ef2Axuhz%2BaaBQQt7YTa3bw%2F5pnqzVK6hNBhNZS2sELi6L%2FhPUIa74SDL4%2BEb1KPGhz0HFmv0fzJErBhbIUtvan%2BQBhxEcP1s4nVNhvIYgQJojm8IhHCQo2EfJsjCGkYDilM%2Bxh2Nf%2Bi8RGRfA6j1JMltbVOUknzMnpxdEH0A%2F4AwHlwIC38219QdH61Yw65rawAY6pgG71B0E2%2BZb5pGBDqje%2BsOF%2B5Pn3bgwypJyBe2COJMkz8V1xKstXoZJaYcpyADK%2FFwobQSV%2FNRtHV4s8jptF9oRez6vj%2F272PAdICCIYeGioIVE4W4Fjwi6IovL7KEP1Y7rxK3YGZcQE3ePDyf8nW3LRv2OV3%2FUXlz0f09pbiZkxIxqqUTckMIUhip4G49meyZDo0TTK0aolOKQGm5dD%2FcKI1oF%2FQsq&X-Amz-Signature=a14e2657ad2cbf4796feac87e9b49ce6984c2236790dc63d5bbf39066585c4d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHPH4S3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGtbAMUKFz4qsT0XKqhtsGvavFlv0jcCAz27ALkvjlztAiBUjIjQkuEoqjSSArNH95DT5ywJVKRr35DoimfcHEDIDSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlThgyzsQegbvhPRmKtwDyexR5tzKJl8MNr20ZtmhXf%2FWPGAJXdA5Ae12ghBk6MtVKd%2Fs8l3%2FNL7LgWJH39r%2FjfgfHv9S1WSNUw5QyXAVkkBJ0Gvz%2B4bNZ3jm1zHXKy9zcc5SMUOWuW78V%2BskHcoeC%2B%2FiYrjqfPtx7Q668C2YirXoGlY70ibsGLRxhWNHQx7DjjjsAuPX3GNiFikB%2BPmhzNzxPR6%2FPk1j2BRYeWwOmGiVdW0infGrQGUB8URbMuprsHQGPrD5Vx87TX%2BoJiTL%2BgKg3UPWCi32qe3hkJM310EHiKlOM85weY7kZlaKzhXGJhdEFtw28QjaomWV14dVjI4FBx7H5HjV9bJxdZZD6lTaBrP6umn0fJSV6LISVj0mMVK5En6WOidysoxvRIS6XtE76K3w68rkxZE9A8DMDaYCAI4uPHTJZgyt0YDwv1m4smaCJKOTKOayGvkAQl3ef2Axuhz%2BaaBQQt7YTa3bw%2F5pnqzVK6hNBhNZS2sELi6L%2FhPUIa74SDL4%2BEb1KPGhz0HFmv0fzJErBhbIUtvan%2BQBhxEcP1s4nVNhvIYgQJojm8IhHCQo2EfJsjCGkYDilM%2Bxh2Nf%2Bi8RGRfA6j1JMltbVOUknzMnpxdEH0A%2F4AwHlwIC38219QdH61Yw65rawAY6pgG71B0E2%2BZb5pGBDqje%2BsOF%2B5Pn3bgwypJyBe2COJMkz8V1xKstXoZJaYcpyADK%2FFwobQSV%2FNRtHV4s8jptF9oRez6vj%2F272PAdICCIYeGioIVE4W4Fjwi6IovL7KEP1Y7rxK3YGZcQE3ePDyf8nW3LRv2OV3%2FUXlz0f09pbiZkxIxqqUTckMIUhip4G49meyZDo0TTK0aolOKQGm5dD%2FcKI1oF%2FQsq&X-Amz-Signature=b497f71b72647253a5c3b013bcdd037fe59462ebd45176eb14cbad725d9d1c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHPH4S3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGtbAMUKFz4qsT0XKqhtsGvavFlv0jcCAz27ALkvjlztAiBUjIjQkuEoqjSSArNH95DT5ywJVKRr35DoimfcHEDIDSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlThgyzsQegbvhPRmKtwDyexR5tzKJl8MNr20ZtmhXf%2FWPGAJXdA5Ae12ghBk6MtVKd%2Fs8l3%2FNL7LgWJH39r%2FjfgfHv9S1WSNUw5QyXAVkkBJ0Gvz%2B4bNZ3jm1zHXKy9zcc5SMUOWuW78V%2BskHcoeC%2B%2FiYrjqfPtx7Q668C2YirXoGlY70ibsGLRxhWNHQx7DjjjsAuPX3GNiFikB%2BPmhzNzxPR6%2FPk1j2BRYeWwOmGiVdW0infGrQGUB8URbMuprsHQGPrD5Vx87TX%2BoJiTL%2BgKg3UPWCi32qe3hkJM310EHiKlOM85weY7kZlaKzhXGJhdEFtw28QjaomWV14dVjI4FBx7H5HjV9bJxdZZD6lTaBrP6umn0fJSV6LISVj0mMVK5En6WOidysoxvRIS6XtE76K3w68rkxZE9A8DMDaYCAI4uPHTJZgyt0YDwv1m4smaCJKOTKOayGvkAQl3ef2Axuhz%2BaaBQQt7YTa3bw%2F5pnqzVK6hNBhNZS2sELi6L%2FhPUIa74SDL4%2BEb1KPGhz0HFmv0fzJErBhbIUtvan%2BQBhxEcP1s4nVNhvIYgQJojm8IhHCQo2EfJsjCGkYDilM%2Bxh2Nf%2Bi8RGRfA6j1JMltbVOUknzMnpxdEH0A%2F4AwHlwIC38219QdH61Yw65rawAY6pgG71B0E2%2BZb5pGBDqje%2BsOF%2B5Pn3bgwypJyBe2COJMkz8V1xKstXoZJaYcpyADK%2FFwobQSV%2FNRtHV4s8jptF9oRez6vj%2F272PAdICCIYeGioIVE4W4Fjwi6IovL7KEP1Y7rxK3YGZcQE3ePDyf8nW3LRv2OV3%2FUXlz0f09pbiZkxIxqqUTckMIUhip4G49meyZDo0TTK0aolOKQGm5dD%2FcKI1oF%2FQsq&X-Amz-Signature=e43dd06518661e07dce1ec97dd80c54687b9488d710d98f840eab90701989cab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHPH4S3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGtbAMUKFz4qsT0XKqhtsGvavFlv0jcCAz27ALkvjlztAiBUjIjQkuEoqjSSArNH95DT5ywJVKRr35DoimfcHEDIDSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlThgyzsQegbvhPRmKtwDyexR5tzKJl8MNr20ZtmhXf%2FWPGAJXdA5Ae12ghBk6MtVKd%2Fs8l3%2FNL7LgWJH39r%2FjfgfHv9S1WSNUw5QyXAVkkBJ0Gvz%2B4bNZ3jm1zHXKy9zcc5SMUOWuW78V%2BskHcoeC%2B%2FiYrjqfPtx7Q668C2YirXoGlY70ibsGLRxhWNHQx7DjjjsAuPX3GNiFikB%2BPmhzNzxPR6%2FPk1j2BRYeWwOmGiVdW0infGrQGUB8URbMuprsHQGPrD5Vx87TX%2BoJiTL%2BgKg3UPWCi32qe3hkJM310EHiKlOM85weY7kZlaKzhXGJhdEFtw28QjaomWV14dVjI4FBx7H5HjV9bJxdZZD6lTaBrP6umn0fJSV6LISVj0mMVK5En6WOidysoxvRIS6XtE76K3w68rkxZE9A8DMDaYCAI4uPHTJZgyt0YDwv1m4smaCJKOTKOayGvkAQl3ef2Axuhz%2BaaBQQt7YTa3bw%2F5pnqzVK6hNBhNZS2sELi6L%2FhPUIa74SDL4%2BEb1KPGhz0HFmv0fzJErBhbIUtvan%2BQBhxEcP1s4nVNhvIYgQJojm8IhHCQo2EfJsjCGkYDilM%2Bxh2Nf%2Bi8RGRfA6j1JMltbVOUknzMnpxdEH0A%2F4AwHlwIC38219QdH61Yw65rawAY6pgG71B0E2%2BZb5pGBDqje%2BsOF%2B5Pn3bgwypJyBe2COJMkz8V1xKstXoZJaYcpyADK%2FFwobQSV%2FNRtHV4s8jptF9oRez6vj%2F272PAdICCIYeGioIVE4W4Fjwi6IovL7KEP1Y7rxK3YGZcQE3ePDyf8nW3LRv2OV3%2FUXlz0f09pbiZkxIxqqUTckMIUhip4G49meyZDo0TTK0aolOKQGm5dD%2FcKI1oF%2FQsq&X-Amz-Signature=619afccd5efda4f5513c5f400860db584d43de220d45456b6a52bbf2bb0ea1b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHPH4S3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGtbAMUKFz4qsT0XKqhtsGvavFlv0jcCAz27ALkvjlztAiBUjIjQkuEoqjSSArNH95DT5ywJVKRr35DoimfcHEDIDSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlThgyzsQegbvhPRmKtwDyexR5tzKJl8MNr20ZtmhXf%2FWPGAJXdA5Ae12ghBk6MtVKd%2Fs8l3%2FNL7LgWJH39r%2FjfgfHv9S1WSNUw5QyXAVkkBJ0Gvz%2B4bNZ3jm1zHXKy9zcc5SMUOWuW78V%2BskHcoeC%2B%2FiYrjqfPtx7Q668C2YirXoGlY70ibsGLRxhWNHQx7DjjjsAuPX3GNiFikB%2BPmhzNzxPR6%2FPk1j2BRYeWwOmGiVdW0infGrQGUB8URbMuprsHQGPrD5Vx87TX%2BoJiTL%2BgKg3UPWCi32qe3hkJM310EHiKlOM85weY7kZlaKzhXGJhdEFtw28QjaomWV14dVjI4FBx7H5HjV9bJxdZZD6lTaBrP6umn0fJSV6LISVj0mMVK5En6WOidysoxvRIS6XtE76K3w68rkxZE9A8DMDaYCAI4uPHTJZgyt0YDwv1m4smaCJKOTKOayGvkAQl3ef2Axuhz%2BaaBQQt7YTa3bw%2F5pnqzVK6hNBhNZS2sELi6L%2FhPUIa74SDL4%2BEb1KPGhz0HFmv0fzJErBhbIUtvan%2BQBhxEcP1s4nVNhvIYgQJojm8IhHCQo2EfJsjCGkYDilM%2Bxh2Nf%2Bi8RGRfA6j1JMltbVOUknzMnpxdEH0A%2F4AwHlwIC38219QdH61Yw65rawAY6pgG71B0E2%2BZb5pGBDqje%2BsOF%2B5Pn3bgwypJyBe2COJMkz8V1xKstXoZJaYcpyADK%2FFwobQSV%2FNRtHV4s8jptF9oRez6vj%2F272PAdICCIYeGioIVE4W4Fjwi6IovL7KEP1Y7rxK3YGZcQE3ePDyf8nW3LRv2OV3%2FUXlz0f09pbiZkxIxqqUTckMIUhip4G49meyZDo0TTK0aolOKQGm5dD%2FcKI1oF%2FQsq&X-Amz-Signature=60d2117b00418fef2cfeb3ace0fab0085dc84f15422fdec7e14412e7856bf382&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
