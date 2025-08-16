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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BCHMRD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFbDjEcvXwHAUu3uUKpsQKOutKkUlLI1bfCEZbBBurydAiB%2BpuD4PoE%2Bb6%2FT14irZByzhvAOXbiDzQW%2F9Et0AO802yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMeDNd19SGwpwCQkOSKtwDxDXvyVEfmkQTLGxcueOSnhOjrIS9ai32ZZVfdI6E3yx2u06uVGiPp0Y90Ar4jt7Z7EpQrQaIxkkValc5BdpMxviETTEiFahNdSesT5CuAny1F9skhIKRovoBrJXwrhhz233l%2BURErBYi4zzhuXXfaPdzYAHKd%2Bls8E00p9A4G12kdVKPuToQfPqMBunOv8C9Y6IO%2FFS7XnPl%2F0%2BNGhnQYrLHh6mOeCVxYX1FO51uo26xLR61ROpjCp0gBCErKIjz9DCHhs9RRO0FN%2FatzmJr7KRYyhvc8NPfv7bzyefoc%2FVFwm4MjpsfYrRQWpsSSC%2BAs8%2BCsycYcpepIY6mnvIYcrUxwHl5MKVVDBjz0QfEfQfONFL39QQjefoahIURzYrnX6XJuOLgqHLVvQHtQ%2FxtOJcnUhOTJC1icInqyNdVME7pG4Dv5003y1VSzhIF9FKJdQ%2FbpTWhaBCGLRRGPmYu2mAfvZ2%2BQg7x5h2TL2hd1TMv%2FdQ9cLEt5PLjTWjSDJi8lCqjIGBeEOe7saBvmjXxutoAwC5TuWRXA8DFbzpSDpi9HOldqeb8qP43Q1cxt4F5u6rZTHseExyojCgPyX9ux3X%2BldXGKcDdU6FWvBW9uOHxP5m%2FKxXo%2BeSvz%2B8w4PeAxQY6pgHRCPhgbZjtiaGl9RbOeEwlaxAOWkXkv9XojAMVenTOQJqpu0x3yeJyQUd5trnJHt9rsaQa1i7PGFRJoKIS7ZKmwFqcCO278d988%2BONP8mhScOHLIwuafwCUYfudLzoCz0llvEoL5IKvSey8qwBogn7N6F%2FyHanITLlVGJq8pt%2Bjicruz1KteqCsqkiX%2BFaFRLtG%2Bs4l5amGGBxgsc6bzNriGXBqQir&X-Amz-Signature=66bd0b8e066825cde9311fc816a507e20ff5fb9be04e681348981d9d232ece88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BCHMRD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFbDjEcvXwHAUu3uUKpsQKOutKkUlLI1bfCEZbBBurydAiB%2BpuD4PoE%2Bb6%2FT14irZByzhvAOXbiDzQW%2F9Et0AO802yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMeDNd19SGwpwCQkOSKtwDxDXvyVEfmkQTLGxcueOSnhOjrIS9ai32ZZVfdI6E3yx2u06uVGiPp0Y90Ar4jt7Z7EpQrQaIxkkValc5BdpMxviETTEiFahNdSesT5CuAny1F9skhIKRovoBrJXwrhhz233l%2BURErBYi4zzhuXXfaPdzYAHKd%2Bls8E00p9A4G12kdVKPuToQfPqMBunOv8C9Y6IO%2FFS7XnPl%2F0%2BNGhnQYrLHh6mOeCVxYX1FO51uo26xLR61ROpjCp0gBCErKIjz9DCHhs9RRO0FN%2FatzmJr7KRYyhvc8NPfv7bzyefoc%2FVFwm4MjpsfYrRQWpsSSC%2BAs8%2BCsycYcpepIY6mnvIYcrUxwHl5MKVVDBjz0QfEfQfONFL39QQjefoahIURzYrnX6XJuOLgqHLVvQHtQ%2FxtOJcnUhOTJC1icInqyNdVME7pG4Dv5003y1VSzhIF9FKJdQ%2FbpTWhaBCGLRRGPmYu2mAfvZ2%2BQg7x5h2TL2hd1TMv%2FdQ9cLEt5PLjTWjSDJi8lCqjIGBeEOe7saBvmjXxutoAwC5TuWRXA8DFbzpSDpi9HOldqeb8qP43Q1cxt4F5u6rZTHseExyojCgPyX9ux3X%2BldXGKcDdU6FWvBW9uOHxP5m%2FKxXo%2BeSvz%2B8w4PeAxQY6pgHRCPhgbZjtiaGl9RbOeEwlaxAOWkXkv9XojAMVenTOQJqpu0x3yeJyQUd5trnJHt9rsaQa1i7PGFRJoKIS7ZKmwFqcCO278d988%2BONP8mhScOHLIwuafwCUYfudLzoCz0llvEoL5IKvSey8qwBogn7N6F%2FyHanITLlVGJq8pt%2Bjicruz1KteqCsqkiX%2BFaFRLtG%2Bs4l5amGGBxgsc6bzNriGXBqQir&X-Amz-Signature=896ea84f79429e1cd5164fd38f9c39200995d7a0a96a26ff0eb7e1007a2f724a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BCHMRD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFbDjEcvXwHAUu3uUKpsQKOutKkUlLI1bfCEZbBBurydAiB%2BpuD4PoE%2Bb6%2FT14irZByzhvAOXbiDzQW%2F9Et0AO802yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMeDNd19SGwpwCQkOSKtwDxDXvyVEfmkQTLGxcueOSnhOjrIS9ai32ZZVfdI6E3yx2u06uVGiPp0Y90Ar4jt7Z7EpQrQaIxkkValc5BdpMxviETTEiFahNdSesT5CuAny1F9skhIKRovoBrJXwrhhz233l%2BURErBYi4zzhuXXfaPdzYAHKd%2Bls8E00p9A4G12kdVKPuToQfPqMBunOv8C9Y6IO%2FFS7XnPl%2F0%2BNGhnQYrLHh6mOeCVxYX1FO51uo26xLR61ROpjCp0gBCErKIjz9DCHhs9RRO0FN%2FatzmJr7KRYyhvc8NPfv7bzyefoc%2FVFwm4MjpsfYrRQWpsSSC%2BAs8%2BCsycYcpepIY6mnvIYcrUxwHl5MKVVDBjz0QfEfQfONFL39QQjefoahIURzYrnX6XJuOLgqHLVvQHtQ%2FxtOJcnUhOTJC1icInqyNdVME7pG4Dv5003y1VSzhIF9FKJdQ%2FbpTWhaBCGLRRGPmYu2mAfvZ2%2BQg7x5h2TL2hd1TMv%2FdQ9cLEt5PLjTWjSDJi8lCqjIGBeEOe7saBvmjXxutoAwC5TuWRXA8DFbzpSDpi9HOldqeb8qP43Q1cxt4F5u6rZTHseExyojCgPyX9ux3X%2BldXGKcDdU6FWvBW9uOHxP5m%2FKxXo%2BeSvz%2B8w4PeAxQY6pgHRCPhgbZjtiaGl9RbOeEwlaxAOWkXkv9XojAMVenTOQJqpu0x3yeJyQUd5trnJHt9rsaQa1i7PGFRJoKIS7ZKmwFqcCO278d988%2BONP8mhScOHLIwuafwCUYfudLzoCz0llvEoL5IKvSey8qwBogn7N6F%2FyHanITLlVGJq8pt%2Bjicruz1KteqCsqkiX%2BFaFRLtG%2Bs4l5amGGBxgsc6bzNriGXBqQir&X-Amz-Signature=0a0e2734bce6a0fb3c0697b421850ebcc70e7de0f6b099ac2acdf79594b9084e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BCHMRD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFbDjEcvXwHAUu3uUKpsQKOutKkUlLI1bfCEZbBBurydAiB%2BpuD4PoE%2Bb6%2FT14irZByzhvAOXbiDzQW%2F9Et0AO802yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMeDNd19SGwpwCQkOSKtwDxDXvyVEfmkQTLGxcueOSnhOjrIS9ai32ZZVfdI6E3yx2u06uVGiPp0Y90Ar4jt7Z7EpQrQaIxkkValc5BdpMxviETTEiFahNdSesT5CuAny1F9skhIKRovoBrJXwrhhz233l%2BURErBYi4zzhuXXfaPdzYAHKd%2Bls8E00p9A4G12kdVKPuToQfPqMBunOv8C9Y6IO%2FFS7XnPl%2F0%2BNGhnQYrLHh6mOeCVxYX1FO51uo26xLR61ROpjCp0gBCErKIjz9DCHhs9RRO0FN%2FatzmJr7KRYyhvc8NPfv7bzyefoc%2FVFwm4MjpsfYrRQWpsSSC%2BAs8%2BCsycYcpepIY6mnvIYcrUxwHl5MKVVDBjz0QfEfQfONFL39QQjefoahIURzYrnX6XJuOLgqHLVvQHtQ%2FxtOJcnUhOTJC1icInqyNdVME7pG4Dv5003y1VSzhIF9FKJdQ%2FbpTWhaBCGLRRGPmYu2mAfvZ2%2BQg7x5h2TL2hd1TMv%2FdQ9cLEt5PLjTWjSDJi8lCqjIGBeEOe7saBvmjXxutoAwC5TuWRXA8DFbzpSDpi9HOldqeb8qP43Q1cxt4F5u6rZTHseExyojCgPyX9ux3X%2BldXGKcDdU6FWvBW9uOHxP5m%2FKxXo%2BeSvz%2B8w4PeAxQY6pgHRCPhgbZjtiaGl9RbOeEwlaxAOWkXkv9XojAMVenTOQJqpu0x3yeJyQUd5trnJHt9rsaQa1i7PGFRJoKIS7ZKmwFqcCO278d988%2BONP8mhScOHLIwuafwCUYfudLzoCz0llvEoL5IKvSey8qwBogn7N6F%2FyHanITLlVGJq8pt%2Bjicruz1KteqCsqkiX%2BFaFRLtG%2Bs4l5amGGBxgsc6bzNriGXBqQir&X-Amz-Signature=d36567528ab0dcf808826846d321dce847060cf9902b6fa902d0e9e0a5718930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BCHMRD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFbDjEcvXwHAUu3uUKpsQKOutKkUlLI1bfCEZbBBurydAiB%2BpuD4PoE%2Bb6%2FT14irZByzhvAOXbiDzQW%2F9Et0AO802yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMeDNd19SGwpwCQkOSKtwDxDXvyVEfmkQTLGxcueOSnhOjrIS9ai32ZZVfdI6E3yx2u06uVGiPp0Y90Ar4jt7Z7EpQrQaIxkkValc5BdpMxviETTEiFahNdSesT5CuAny1F9skhIKRovoBrJXwrhhz233l%2BURErBYi4zzhuXXfaPdzYAHKd%2Bls8E00p9A4G12kdVKPuToQfPqMBunOv8C9Y6IO%2FFS7XnPl%2F0%2BNGhnQYrLHh6mOeCVxYX1FO51uo26xLR61ROpjCp0gBCErKIjz9DCHhs9RRO0FN%2FatzmJr7KRYyhvc8NPfv7bzyefoc%2FVFwm4MjpsfYrRQWpsSSC%2BAs8%2BCsycYcpepIY6mnvIYcrUxwHl5MKVVDBjz0QfEfQfONFL39QQjefoahIURzYrnX6XJuOLgqHLVvQHtQ%2FxtOJcnUhOTJC1icInqyNdVME7pG4Dv5003y1VSzhIF9FKJdQ%2FbpTWhaBCGLRRGPmYu2mAfvZ2%2BQg7x5h2TL2hd1TMv%2FdQ9cLEt5PLjTWjSDJi8lCqjIGBeEOe7saBvmjXxutoAwC5TuWRXA8DFbzpSDpi9HOldqeb8qP43Q1cxt4F5u6rZTHseExyojCgPyX9ux3X%2BldXGKcDdU6FWvBW9uOHxP5m%2FKxXo%2BeSvz%2B8w4PeAxQY6pgHRCPhgbZjtiaGl9RbOeEwlaxAOWkXkv9XojAMVenTOQJqpu0x3yeJyQUd5trnJHt9rsaQa1i7PGFRJoKIS7ZKmwFqcCO278d988%2BONP8mhScOHLIwuafwCUYfudLzoCz0llvEoL5IKvSey8qwBogn7N6F%2FyHanITLlVGJq8pt%2Bjicruz1KteqCsqkiX%2BFaFRLtG%2Bs4l5amGGBxgsc6bzNriGXBqQir&X-Amz-Signature=4816285e10d0d13995cbc298b9234862e0dbf2e40a1745ec2f173806109e0da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BCHMRD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFbDjEcvXwHAUu3uUKpsQKOutKkUlLI1bfCEZbBBurydAiB%2BpuD4PoE%2Bb6%2FT14irZByzhvAOXbiDzQW%2F9Et0AO802yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMeDNd19SGwpwCQkOSKtwDxDXvyVEfmkQTLGxcueOSnhOjrIS9ai32ZZVfdI6E3yx2u06uVGiPp0Y90Ar4jt7Z7EpQrQaIxkkValc5BdpMxviETTEiFahNdSesT5CuAny1F9skhIKRovoBrJXwrhhz233l%2BURErBYi4zzhuXXfaPdzYAHKd%2Bls8E00p9A4G12kdVKPuToQfPqMBunOv8C9Y6IO%2FFS7XnPl%2F0%2BNGhnQYrLHh6mOeCVxYX1FO51uo26xLR61ROpjCp0gBCErKIjz9DCHhs9RRO0FN%2FatzmJr7KRYyhvc8NPfv7bzyefoc%2FVFwm4MjpsfYrRQWpsSSC%2BAs8%2BCsycYcpepIY6mnvIYcrUxwHl5MKVVDBjz0QfEfQfONFL39QQjefoahIURzYrnX6XJuOLgqHLVvQHtQ%2FxtOJcnUhOTJC1icInqyNdVME7pG4Dv5003y1VSzhIF9FKJdQ%2FbpTWhaBCGLRRGPmYu2mAfvZ2%2BQg7x5h2TL2hd1TMv%2FdQ9cLEt5PLjTWjSDJi8lCqjIGBeEOe7saBvmjXxutoAwC5TuWRXA8DFbzpSDpi9HOldqeb8qP43Q1cxt4F5u6rZTHseExyojCgPyX9ux3X%2BldXGKcDdU6FWvBW9uOHxP5m%2FKxXo%2BeSvz%2B8w4PeAxQY6pgHRCPhgbZjtiaGl9RbOeEwlaxAOWkXkv9XojAMVenTOQJqpu0x3yeJyQUd5trnJHt9rsaQa1i7PGFRJoKIS7ZKmwFqcCO278d988%2BONP8mhScOHLIwuafwCUYfudLzoCz0llvEoL5IKvSey8qwBogn7N6F%2FyHanITLlVGJq8pt%2Bjicruz1KteqCsqkiX%2BFaFRLtG%2Bs4l5amGGBxgsc6bzNriGXBqQir&X-Amz-Signature=9d857cdca1938ae30af732917882e64352f58513b4e9e3d2094eb9803c9b7b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BCHMRD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFbDjEcvXwHAUu3uUKpsQKOutKkUlLI1bfCEZbBBurydAiB%2BpuD4PoE%2Bb6%2FT14irZByzhvAOXbiDzQW%2F9Et0AO802yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMeDNd19SGwpwCQkOSKtwDxDXvyVEfmkQTLGxcueOSnhOjrIS9ai32ZZVfdI6E3yx2u06uVGiPp0Y90Ar4jt7Z7EpQrQaIxkkValc5BdpMxviETTEiFahNdSesT5CuAny1F9skhIKRovoBrJXwrhhz233l%2BURErBYi4zzhuXXfaPdzYAHKd%2Bls8E00p9A4G12kdVKPuToQfPqMBunOv8C9Y6IO%2FFS7XnPl%2F0%2BNGhnQYrLHh6mOeCVxYX1FO51uo26xLR61ROpjCp0gBCErKIjz9DCHhs9RRO0FN%2FatzmJr7KRYyhvc8NPfv7bzyefoc%2FVFwm4MjpsfYrRQWpsSSC%2BAs8%2BCsycYcpepIY6mnvIYcrUxwHl5MKVVDBjz0QfEfQfONFL39QQjefoahIURzYrnX6XJuOLgqHLVvQHtQ%2FxtOJcnUhOTJC1icInqyNdVME7pG4Dv5003y1VSzhIF9FKJdQ%2FbpTWhaBCGLRRGPmYu2mAfvZ2%2BQg7x5h2TL2hd1TMv%2FdQ9cLEt5PLjTWjSDJi8lCqjIGBeEOe7saBvmjXxutoAwC5TuWRXA8DFbzpSDpi9HOldqeb8qP43Q1cxt4F5u6rZTHseExyojCgPyX9ux3X%2BldXGKcDdU6FWvBW9uOHxP5m%2FKxXo%2BeSvz%2B8w4PeAxQY6pgHRCPhgbZjtiaGl9RbOeEwlaxAOWkXkv9XojAMVenTOQJqpu0x3yeJyQUd5trnJHt9rsaQa1i7PGFRJoKIS7ZKmwFqcCO278d988%2BONP8mhScOHLIwuafwCUYfudLzoCz0llvEoL5IKvSey8qwBogn7N6F%2FyHanITLlVGJq8pt%2Bjicruz1KteqCsqkiX%2BFaFRLtG%2Bs4l5amGGBxgsc6bzNriGXBqQir&X-Amz-Signature=8e3d778edafc92d66c6f5e725b75eac6db29bc688bd6b85d496ae06cb084fdd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2BCHMRD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFbDjEcvXwHAUu3uUKpsQKOutKkUlLI1bfCEZbBBurydAiB%2BpuD4PoE%2Bb6%2FT14irZByzhvAOXbiDzQW%2F9Et0AO802yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMeDNd19SGwpwCQkOSKtwDxDXvyVEfmkQTLGxcueOSnhOjrIS9ai32ZZVfdI6E3yx2u06uVGiPp0Y90Ar4jt7Z7EpQrQaIxkkValc5BdpMxviETTEiFahNdSesT5CuAny1F9skhIKRovoBrJXwrhhz233l%2BURErBYi4zzhuXXfaPdzYAHKd%2Bls8E00p9A4G12kdVKPuToQfPqMBunOv8C9Y6IO%2FFS7XnPl%2F0%2BNGhnQYrLHh6mOeCVxYX1FO51uo26xLR61ROpjCp0gBCErKIjz9DCHhs9RRO0FN%2FatzmJr7KRYyhvc8NPfv7bzyefoc%2FVFwm4MjpsfYrRQWpsSSC%2BAs8%2BCsycYcpepIY6mnvIYcrUxwHl5MKVVDBjz0QfEfQfONFL39QQjefoahIURzYrnX6XJuOLgqHLVvQHtQ%2FxtOJcnUhOTJC1icInqyNdVME7pG4Dv5003y1VSzhIF9FKJdQ%2FbpTWhaBCGLRRGPmYu2mAfvZ2%2BQg7x5h2TL2hd1TMv%2FdQ9cLEt5PLjTWjSDJi8lCqjIGBeEOe7saBvmjXxutoAwC5TuWRXA8DFbzpSDpi9HOldqeb8qP43Q1cxt4F5u6rZTHseExyojCgPyX9ux3X%2BldXGKcDdU6FWvBW9uOHxP5m%2FKxXo%2BeSvz%2B8w4PeAxQY6pgHRCPhgbZjtiaGl9RbOeEwlaxAOWkXkv9XojAMVenTOQJqpu0x3yeJyQUd5trnJHt9rsaQa1i7PGFRJoKIS7ZKmwFqcCO278d988%2BONP8mhScOHLIwuafwCUYfudLzoCz0llvEoL5IKvSey8qwBogn7N6F%2FyHanITLlVGJq8pt%2Bjicruz1KteqCsqkiX%2BFaFRLtG%2Bs4l5amGGBxgsc6bzNriGXBqQir&X-Amz-Signature=0ef80714bf3ae2db604fb16881127b2a1a63ccedadd4bb7fe9ed96c490eb74f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
