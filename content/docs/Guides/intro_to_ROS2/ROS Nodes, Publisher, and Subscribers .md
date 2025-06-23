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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UXID7L%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD%2BAshDY8j9XsLwkJe%2Bf%2FlcpXLxoLElsSz2sl7SmaqLZgIhANc6DqncCSowo2kGvVIMY88Q0L4r%2BzieKRwSY6VK7NNaKv8DCBoQABoMNjM3NDIzMTgzODA1IgxKFV4bFxChbUwGwdwq3ANuPsXeFCaq%2Fdz9KJOFCShhhV6RCdr%2FYJiFWgyOi3r1ZmcwymJb419JCLqXAUBgy3Uz4l6RJs9l9vsP1MD5oxeUoLy1Wg82ibbDdfz9ilrQllZaWOxz02Lqm16aAxlpydHApj2E%2BN5yCZYYXoCAPzm6Yp4Qs9udhK%2F9ZgDgxEpkGQUwNQ%2FuynvYr0fz6iTWXBkOOdPFB7T5sEJu9tuRyBjpF2asCYfqudTF8QVkEmU%2B1mF1XUANYGGjp%2F4eb3NfUtVtoX%2BNNqqf23aZ3ouifyu8QPGGSg8j%2BsgoagROezbL6YkRi9YCML9IKqF6UFWhK0y1hplJc86W8MamN6DaBgFQCiszYCLa%2B4w85hQ7zOY9kmHDDMyRusF9eTUkHzsQZSeZFHhKEM8NeEMEkGdvSEMy24oGgyLSnzrguQeqyRNZsoUo6CXoPxlvfQN2AFXTWt%2FBdVYLorAT4cP7bI9WVgcZK8UV8O3RF0vNIyyw%2F9jhFcMc0QdjTglKpocnugSJvZYm%2FiHCnOKELu%2BpOsnbf7Qi6%2FxLspWUP6mcT1Ga8dzh%2FbDZ5RZAmPjLRE1DASUJAVXPgUoyb7FUQ2b9B4%2FkTO22B40eLVtjNazGMmyrejykygv%2F26YMByJUdD5ceTCHiObCBjqkAbEHnz91O%2FsxtgjPhJQl25Lu6nOByDYuZdUE4bj5jaZF2z%2BLWurhctEvBzgL7THukV3%2FFZuBYnjwAEmy5IgcHukWYmoabwlnvzK4KsOEDkVO26fCR4jC3REAYYMOsOdDXF3v8h5dz3lTtNHAKTgykpzrdDX%2Fz%2FxFyjdzuAo%2B%2Filzl9e05JR0cwLa7QTivAglMWFFu7ab62UF9hPiQRRc11kS%2B64y&X-Amz-Signature=396d1cf9e17f7d18db64d718076367b27f51ecf6da8a21770b83e15bb316dae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UXID7L%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD%2BAshDY8j9XsLwkJe%2Bf%2FlcpXLxoLElsSz2sl7SmaqLZgIhANc6DqncCSowo2kGvVIMY88Q0L4r%2BzieKRwSY6VK7NNaKv8DCBoQABoMNjM3NDIzMTgzODA1IgxKFV4bFxChbUwGwdwq3ANuPsXeFCaq%2Fdz9KJOFCShhhV6RCdr%2FYJiFWgyOi3r1ZmcwymJb419JCLqXAUBgy3Uz4l6RJs9l9vsP1MD5oxeUoLy1Wg82ibbDdfz9ilrQllZaWOxz02Lqm16aAxlpydHApj2E%2BN5yCZYYXoCAPzm6Yp4Qs9udhK%2F9ZgDgxEpkGQUwNQ%2FuynvYr0fz6iTWXBkOOdPFB7T5sEJu9tuRyBjpF2asCYfqudTF8QVkEmU%2B1mF1XUANYGGjp%2F4eb3NfUtVtoX%2BNNqqf23aZ3ouifyu8QPGGSg8j%2BsgoagROezbL6YkRi9YCML9IKqF6UFWhK0y1hplJc86W8MamN6DaBgFQCiszYCLa%2B4w85hQ7zOY9kmHDDMyRusF9eTUkHzsQZSeZFHhKEM8NeEMEkGdvSEMy24oGgyLSnzrguQeqyRNZsoUo6CXoPxlvfQN2AFXTWt%2FBdVYLorAT4cP7bI9WVgcZK8UV8O3RF0vNIyyw%2F9jhFcMc0QdjTglKpocnugSJvZYm%2FiHCnOKELu%2BpOsnbf7Qi6%2FxLspWUP6mcT1Ga8dzh%2FbDZ5RZAmPjLRE1DASUJAVXPgUoyb7FUQ2b9B4%2FkTO22B40eLVtjNazGMmyrejykygv%2F26YMByJUdD5ceTCHiObCBjqkAbEHnz91O%2FsxtgjPhJQl25Lu6nOByDYuZdUE4bj5jaZF2z%2BLWurhctEvBzgL7THukV3%2FFZuBYnjwAEmy5IgcHukWYmoabwlnvzK4KsOEDkVO26fCR4jC3REAYYMOsOdDXF3v8h5dz3lTtNHAKTgykpzrdDX%2Fz%2FxFyjdzuAo%2B%2Filzl9e05JR0cwLa7QTivAglMWFFu7ab62UF9hPiQRRc11kS%2B64y&X-Amz-Signature=952945c9a7146624b6d7b4687157b25fbef9527cdbe70d7ef887686035126cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UXID7L%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD%2BAshDY8j9XsLwkJe%2Bf%2FlcpXLxoLElsSz2sl7SmaqLZgIhANc6DqncCSowo2kGvVIMY88Q0L4r%2BzieKRwSY6VK7NNaKv8DCBoQABoMNjM3NDIzMTgzODA1IgxKFV4bFxChbUwGwdwq3ANuPsXeFCaq%2Fdz9KJOFCShhhV6RCdr%2FYJiFWgyOi3r1ZmcwymJb419JCLqXAUBgy3Uz4l6RJs9l9vsP1MD5oxeUoLy1Wg82ibbDdfz9ilrQllZaWOxz02Lqm16aAxlpydHApj2E%2BN5yCZYYXoCAPzm6Yp4Qs9udhK%2F9ZgDgxEpkGQUwNQ%2FuynvYr0fz6iTWXBkOOdPFB7T5sEJu9tuRyBjpF2asCYfqudTF8QVkEmU%2B1mF1XUANYGGjp%2F4eb3NfUtVtoX%2BNNqqf23aZ3ouifyu8QPGGSg8j%2BsgoagROezbL6YkRi9YCML9IKqF6UFWhK0y1hplJc86W8MamN6DaBgFQCiszYCLa%2B4w85hQ7zOY9kmHDDMyRusF9eTUkHzsQZSeZFHhKEM8NeEMEkGdvSEMy24oGgyLSnzrguQeqyRNZsoUo6CXoPxlvfQN2AFXTWt%2FBdVYLorAT4cP7bI9WVgcZK8UV8O3RF0vNIyyw%2F9jhFcMc0QdjTglKpocnugSJvZYm%2FiHCnOKELu%2BpOsnbf7Qi6%2FxLspWUP6mcT1Ga8dzh%2FbDZ5RZAmPjLRE1DASUJAVXPgUoyb7FUQ2b9B4%2FkTO22B40eLVtjNazGMmyrejykygv%2F26YMByJUdD5ceTCHiObCBjqkAbEHnz91O%2FsxtgjPhJQl25Lu6nOByDYuZdUE4bj5jaZF2z%2BLWurhctEvBzgL7THukV3%2FFZuBYnjwAEmy5IgcHukWYmoabwlnvzK4KsOEDkVO26fCR4jC3REAYYMOsOdDXF3v8h5dz3lTtNHAKTgykpzrdDX%2Fz%2FxFyjdzuAo%2B%2Filzl9e05JR0cwLa7QTivAglMWFFu7ab62UF9hPiQRRc11kS%2B64y&X-Amz-Signature=bcec6d39a11ae0099ef07f8586ebd68a12ea728ba9c7a9b21bd5dfa3557c04f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UXID7L%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD%2BAshDY8j9XsLwkJe%2Bf%2FlcpXLxoLElsSz2sl7SmaqLZgIhANc6DqncCSowo2kGvVIMY88Q0L4r%2BzieKRwSY6VK7NNaKv8DCBoQABoMNjM3NDIzMTgzODA1IgxKFV4bFxChbUwGwdwq3ANuPsXeFCaq%2Fdz9KJOFCShhhV6RCdr%2FYJiFWgyOi3r1ZmcwymJb419JCLqXAUBgy3Uz4l6RJs9l9vsP1MD5oxeUoLy1Wg82ibbDdfz9ilrQllZaWOxz02Lqm16aAxlpydHApj2E%2BN5yCZYYXoCAPzm6Yp4Qs9udhK%2F9ZgDgxEpkGQUwNQ%2FuynvYr0fz6iTWXBkOOdPFB7T5sEJu9tuRyBjpF2asCYfqudTF8QVkEmU%2B1mF1XUANYGGjp%2F4eb3NfUtVtoX%2BNNqqf23aZ3ouifyu8QPGGSg8j%2BsgoagROezbL6YkRi9YCML9IKqF6UFWhK0y1hplJc86W8MamN6DaBgFQCiszYCLa%2B4w85hQ7zOY9kmHDDMyRusF9eTUkHzsQZSeZFHhKEM8NeEMEkGdvSEMy24oGgyLSnzrguQeqyRNZsoUo6CXoPxlvfQN2AFXTWt%2FBdVYLorAT4cP7bI9WVgcZK8UV8O3RF0vNIyyw%2F9jhFcMc0QdjTglKpocnugSJvZYm%2FiHCnOKELu%2BpOsnbf7Qi6%2FxLspWUP6mcT1Ga8dzh%2FbDZ5RZAmPjLRE1DASUJAVXPgUoyb7FUQ2b9B4%2FkTO22B40eLVtjNazGMmyrejykygv%2F26YMByJUdD5ceTCHiObCBjqkAbEHnz91O%2FsxtgjPhJQl25Lu6nOByDYuZdUE4bj5jaZF2z%2BLWurhctEvBzgL7THukV3%2FFZuBYnjwAEmy5IgcHukWYmoabwlnvzK4KsOEDkVO26fCR4jC3REAYYMOsOdDXF3v8h5dz3lTtNHAKTgykpzrdDX%2Fz%2FxFyjdzuAo%2B%2Filzl9e05JR0cwLa7QTivAglMWFFu7ab62UF9hPiQRRc11kS%2B64y&X-Amz-Signature=7f24341e8d1cad9ac2660f2c6585f2ca6ca3e28aeb5e8c8eb8c7b11fc2eebba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UXID7L%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD%2BAshDY8j9XsLwkJe%2Bf%2FlcpXLxoLElsSz2sl7SmaqLZgIhANc6DqncCSowo2kGvVIMY88Q0L4r%2BzieKRwSY6VK7NNaKv8DCBoQABoMNjM3NDIzMTgzODA1IgxKFV4bFxChbUwGwdwq3ANuPsXeFCaq%2Fdz9KJOFCShhhV6RCdr%2FYJiFWgyOi3r1ZmcwymJb419JCLqXAUBgy3Uz4l6RJs9l9vsP1MD5oxeUoLy1Wg82ibbDdfz9ilrQllZaWOxz02Lqm16aAxlpydHApj2E%2BN5yCZYYXoCAPzm6Yp4Qs9udhK%2F9ZgDgxEpkGQUwNQ%2FuynvYr0fz6iTWXBkOOdPFB7T5sEJu9tuRyBjpF2asCYfqudTF8QVkEmU%2B1mF1XUANYGGjp%2F4eb3NfUtVtoX%2BNNqqf23aZ3ouifyu8QPGGSg8j%2BsgoagROezbL6YkRi9YCML9IKqF6UFWhK0y1hplJc86W8MamN6DaBgFQCiszYCLa%2B4w85hQ7zOY9kmHDDMyRusF9eTUkHzsQZSeZFHhKEM8NeEMEkGdvSEMy24oGgyLSnzrguQeqyRNZsoUo6CXoPxlvfQN2AFXTWt%2FBdVYLorAT4cP7bI9WVgcZK8UV8O3RF0vNIyyw%2F9jhFcMc0QdjTglKpocnugSJvZYm%2FiHCnOKELu%2BpOsnbf7Qi6%2FxLspWUP6mcT1Ga8dzh%2FbDZ5RZAmPjLRE1DASUJAVXPgUoyb7FUQ2b9B4%2FkTO22B40eLVtjNazGMmyrejykygv%2F26YMByJUdD5ceTCHiObCBjqkAbEHnz91O%2FsxtgjPhJQl25Lu6nOByDYuZdUE4bj5jaZF2z%2BLWurhctEvBzgL7THukV3%2FFZuBYnjwAEmy5IgcHukWYmoabwlnvzK4KsOEDkVO26fCR4jC3REAYYMOsOdDXF3v8h5dz3lTtNHAKTgykpzrdDX%2Fz%2FxFyjdzuAo%2B%2Filzl9e05JR0cwLa7QTivAglMWFFu7ab62UF9hPiQRRc11kS%2B64y&X-Amz-Signature=bd9f09741e8012a321e033687a4a495db7934a9c7e179be737979953b5f25fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UXID7L%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD%2BAshDY8j9XsLwkJe%2Bf%2FlcpXLxoLElsSz2sl7SmaqLZgIhANc6DqncCSowo2kGvVIMY88Q0L4r%2BzieKRwSY6VK7NNaKv8DCBoQABoMNjM3NDIzMTgzODA1IgxKFV4bFxChbUwGwdwq3ANuPsXeFCaq%2Fdz9KJOFCShhhV6RCdr%2FYJiFWgyOi3r1ZmcwymJb419JCLqXAUBgy3Uz4l6RJs9l9vsP1MD5oxeUoLy1Wg82ibbDdfz9ilrQllZaWOxz02Lqm16aAxlpydHApj2E%2BN5yCZYYXoCAPzm6Yp4Qs9udhK%2F9ZgDgxEpkGQUwNQ%2FuynvYr0fz6iTWXBkOOdPFB7T5sEJu9tuRyBjpF2asCYfqudTF8QVkEmU%2B1mF1XUANYGGjp%2F4eb3NfUtVtoX%2BNNqqf23aZ3ouifyu8QPGGSg8j%2BsgoagROezbL6YkRi9YCML9IKqF6UFWhK0y1hplJc86W8MamN6DaBgFQCiszYCLa%2B4w85hQ7zOY9kmHDDMyRusF9eTUkHzsQZSeZFHhKEM8NeEMEkGdvSEMy24oGgyLSnzrguQeqyRNZsoUo6CXoPxlvfQN2AFXTWt%2FBdVYLorAT4cP7bI9WVgcZK8UV8O3RF0vNIyyw%2F9jhFcMc0QdjTglKpocnugSJvZYm%2FiHCnOKELu%2BpOsnbf7Qi6%2FxLspWUP6mcT1Ga8dzh%2FbDZ5RZAmPjLRE1DASUJAVXPgUoyb7FUQ2b9B4%2FkTO22B40eLVtjNazGMmyrejykygv%2F26YMByJUdD5ceTCHiObCBjqkAbEHnz91O%2FsxtgjPhJQl25Lu6nOByDYuZdUE4bj5jaZF2z%2BLWurhctEvBzgL7THukV3%2FFZuBYnjwAEmy5IgcHukWYmoabwlnvzK4KsOEDkVO26fCR4jC3REAYYMOsOdDXF3v8h5dz3lTtNHAKTgykpzrdDX%2Fz%2FxFyjdzuAo%2B%2Filzl9e05JR0cwLa7QTivAglMWFFu7ab62UF9hPiQRRc11kS%2B64y&X-Amz-Signature=5f8e69304daf357ea5e321565280f563a1a7b7fd2f7529ae390c63b6c75b4607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UXID7L%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD%2BAshDY8j9XsLwkJe%2Bf%2FlcpXLxoLElsSz2sl7SmaqLZgIhANc6DqncCSowo2kGvVIMY88Q0L4r%2BzieKRwSY6VK7NNaKv8DCBoQABoMNjM3NDIzMTgzODA1IgxKFV4bFxChbUwGwdwq3ANuPsXeFCaq%2Fdz9KJOFCShhhV6RCdr%2FYJiFWgyOi3r1ZmcwymJb419JCLqXAUBgy3Uz4l6RJs9l9vsP1MD5oxeUoLy1Wg82ibbDdfz9ilrQllZaWOxz02Lqm16aAxlpydHApj2E%2BN5yCZYYXoCAPzm6Yp4Qs9udhK%2F9ZgDgxEpkGQUwNQ%2FuynvYr0fz6iTWXBkOOdPFB7T5sEJu9tuRyBjpF2asCYfqudTF8QVkEmU%2B1mF1XUANYGGjp%2F4eb3NfUtVtoX%2BNNqqf23aZ3ouifyu8QPGGSg8j%2BsgoagROezbL6YkRi9YCML9IKqF6UFWhK0y1hplJc86W8MamN6DaBgFQCiszYCLa%2B4w85hQ7zOY9kmHDDMyRusF9eTUkHzsQZSeZFHhKEM8NeEMEkGdvSEMy24oGgyLSnzrguQeqyRNZsoUo6CXoPxlvfQN2AFXTWt%2FBdVYLorAT4cP7bI9WVgcZK8UV8O3RF0vNIyyw%2F9jhFcMc0QdjTglKpocnugSJvZYm%2FiHCnOKELu%2BpOsnbf7Qi6%2FxLspWUP6mcT1Ga8dzh%2FbDZ5RZAmPjLRE1DASUJAVXPgUoyb7FUQ2b9B4%2FkTO22B40eLVtjNazGMmyrejykygv%2F26YMByJUdD5ceTCHiObCBjqkAbEHnz91O%2FsxtgjPhJQl25Lu6nOByDYuZdUE4bj5jaZF2z%2BLWurhctEvBzgL7THukV3%2FFZuBYnjwAEmy5IgcHukWYmoabwlnvzK4KsOEDkVO26fCR4jC3REAYYMOsOdDXF3v8h5dz3lTtNHAKTgykpzrdDX%2Fz%2FxFyjdzuAo%2B%2Filzl9e05JR0cwLa7QTivAglMWFFu7ab62UF9hPiQRRc11kS%2B64y&X-Amz-Signature=8bcfce9a63deaf020c452f69d4009b40d915552086435503613720c01babf7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UXID7L%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD%2BAshDY8j9XsLwkJe%2Bf%2FlcpXLxoLElsSz2sl7SmaqLZgIhANc6DqncCSowo2kGvVIMY88Q0L4r%2BzieKRwSY6VK7NNaKv8DCBoQABoMNjM3NDIzMTgzODA1IgxKFV4bFxChbUwGwdwq3ANuPsXeFCaq%2Fdz9KJOFCShhhV6RCdr%2FYJiFWgyOi3r1ZmcwymJb419JCLqXAUBgy3Uz4l6RJs9l9vsP1MD5oxeUoLy1Wg82ibbDdfz9ilrQllZaWOxz02Lqm16aAxlpydHApj2E%2BN5yCZYYXoCAPzm6Yp4Qs9udhK%2F9ZgDgxEpkGQUwNQ%2FuynvYr0fz6iTWXBkOOdPFB7T5sEJu9tuRyBjpF2asCYfqudTF8QVkEmU%2B1mF1XUANYGGjp%2F4eb3NfUtVtoX%2BNNqqf23aZ3ouifyu8QPGGSg8j%2BsgoagROezbL6YkRi9YCML9IKqF6UFWhK0y1hplJc86W8MamN6DaBgFQCiszYCLa%2B4w85hQ7zOY9kmHDDMyRusF9eTUkHzsQZSeZFHhKEM8NeEMEkGdvSEMy24oGgyLSnzrguQeqyRNZsoUo6CXoPxlvfQN2AFXTWt%2FBdVYLorAT4cP7bI9WVgcZK8UV8O3RF0vNIyyw%2F9jhFcMc0QdjTglKpocnugSJvZYm%2FiHCnOKELu%2BpOsnbf7Qi6%2FxLspWUP6mcT1Ga8dzh%2FbDZ5RZAmPjLRE1DASUJAVXPgUoyb7FUQ2b9B4%2FkTO22B40eLVtjNazGMmyrejykygv%2F26YMByJUdD5ceTCHiObCBjqkAbEHnz91O%2FsxtgjPhJQl25Lu6nOByDYuZdUE4bj5jaZF2z%2BLWurhctEvBzgL7THukV3%2FFZuBYnjwAEmy5IgcHukWYmoabwlnvzK4KsOEDkVO26fCR4jC3REAYYMOsOdDXF3v8h5dz3lTtNHAKTgykpzrdDX%2Fz%2FxFyjdzuAo%2B%2Filzl9e05JR0cwLa7QTivAglMWFFu7ab62UF9hPiQRRc11kS%2B64y&X-Amz-Signature=bf0f38b9f26c747f22587f766d7cc86c096cc4d84473ab29ba63233c6dfe42e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
