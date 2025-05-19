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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCJPIUK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh96TY2JOq6r5BQYsuwwBjJrEhx%2B3GLTPdpvRX1xQy3QIhAIXtMTEy5eXSYtm%2Fjm55UdZ%2FuNoK9KDLPfqbvjQ%2FrYnRKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg34sgJ4L4m4DpKbwq3AM%2F8NeHNavthEvcZ7zlS3pqrJWcKK1jWUtpgmqHQXqPjRWWZbOQxwI8x9oHixUSX0yBLVoiqJWlkijqtzvvCdYJFiLDLJErYQC40DP2UlDtYFS5%2FJ9rZ%2BzMp9WmGEIkX4aE3z0M%2BLlhRZZuiFgpJ1ENASn00ZNj0gFE39w2n%2BOZuYQyjONnMJ3eCjnF9O7G0ems1uy13%2B9xwYWeVx8Kcwy1eQRTezQY18Zgt5sPkx9mFe8KAZvekJN8ecPY5BsE0QM4MI4FjpPkv4ZxqdmlIGzGYZXIaViwiO%2FtLSM9xvGMX%2BvX5EMF17NDo7D565bgNhbsdpjfmZ1VqAdaSA1PXeGjPi%2F2jZQaRyCSDtdWu9vicLTQj83s3qVRpbygq5BZvP%2BTJrQ80f5z73vPCWpo2NBsOfUjZD5n8UkLPVzR8%2Fp3r27nCK8ejyG755AdGCeiUwGBIN4EHXi%2F7TN1nHpmVz66HfUn1HNMWLet2nGMRzSczlLPyybgd%2FH7ZapKZ1QOvAv7VcuZW4Ve3ImeQtctBZZtiXjlAiMlJxrXUDvKNnFjGd%2FnYy2fp61%2BimuqRgd34ubanoBBdE3gU5IvFjuxROpLN6gjYU7FuK%2FFVvvucaTmtPhEGfFjscD1tgUrSDCj7KnBBjqkAR%2FmflzpKRe0HFzJVGU3XkQFQUgti%2FdRoVyErglcHdX2BdrgmtMyIqzAqHo2ksoEtjIxILoOixg0GoyYLAXwvseFI9RiKzri47%2FqL1avKy7QCcgS76Q2aWSHfkQqpXZhgDC0cn5lC1ugt%2FAKKkeHvT6arvHCWg6V406M204BRF1qTSbP8lFB21LfUPqt0pgCSXQ70PwY6wOrS%2Bhd%2Ftod7g4K%2BtbD&X-Amz-Signature=a5c9fc56f5f53414ed52e8bd32e6fcbda1bede13148bb2e89f771c4ec0c3816a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCJPIUK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh96TY2JOq6r5BQYsuwwBjJrEhx%2B3GLTPdpvRX1xQy3QIhAIXtMTEy5eXSYtm%2Fjm55UdZ%2FuNoK9KDLPfqbvjQ%2FrYnRKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg34sgJ4L4m4DpKbwq3AM%2F8NeHNavthEvcZ7zlS3pqrJWcKK1jWUtpgmqHQXqPjRWWZbOQxwI8x9oHixUSX0yBLVoiqJWlkijqtzvvCdYJFiLDLJErYQC40DP2UlDtYFS5%2FJ9rZ%2BzMp9WmGEIkX4aE3z0M%2BLlhRZZuiFgpJ1ENASn00ZNj0gFE39w2n%2BOZuYQyjONnMJ3eCjnF9O7G0ems1uy13%2B9xwYWeVx8Kcwy1eQRTezQY18Zgt5sPkx9mFe8KAZvekJN8ecPY5BsE0QM4MI4FjpPkv4ZxqdmlIGzGYZXIaViwiO%2FtLSM9xvGMX%2BvX5EMF17NDo7D565bgNhbsdpjfmZ1VqAdaSA1PXeGjPi%2F2jZQaRyCSDtdWu9vicLTQj83s3qVRpbygq5BZvP%2BTJrQ80f5z73vPCWpo2NBsOfUjZD5n8UkLPVzR8%2Fp3r27nCK8ejyG755AdGCeiUwGBIN4EHXi%2F7TN1nHpmVz66HfUn1HNMWLet2nGMRzSczlLPyybgd%2FH7ZapKZ1QOvAv7VcuZW4Ve3ImeQtctBZZtiXjlAiMlJxrXUDvKNnFjGd%2FnYy2fp61%2BimuqRgd34ubanoBBdE3gU5IvFjuxROpLN6gjYU7FuK%2FFVvvucaTmtPhEGfFjscD1tgUrSDCj7KnBBjqkAR%2FmflzpKRe0HFzJVGU3XkQFQUgti%2FdRoVyErglcHdX2BdrgmtMyIqzAqHo2ksoEtjIxILoOixg0GoyYLAXwvseFI9RiKzri47%2FqL1avKy7QCcgS76Q2aWSHfkQqpXZhgDC0cn5lC1ugt%2FAKKkeHvT6arvHCWg6V406M204BRF1qTSbP8lFB21LfUPqt0pgCSXQ70PwY6wOrS%2Bhd%2Ftod7g4K%2BtbD&X-Amz-Signature=86383ddc1a2f7b972259921515d5c97d89e9ef78e806637938f41e51ce7d7cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCJPIUK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh96TY2JOq6r5BQYsuwwBjJrEhx%2B3GLTPdpvRX1xQy3QIhAIXtMTEy5eXSYtm%2Fjm55UdZ%2FuNoK9KDLPfqbvjQ%2FrYnRKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg34sgJ4L4m4DpKbwq3AM%2F8NeHNavthEvcZ7zlS3pqrJWcKK1jWUtpgmqHQXqPjRWWZbOQxwI8x9oHixUSX0yBLVoiqJWlkijqtzvvCdYJFiLDLJErYQC40DP2UlDtYFS5%2FJ9rZ%2BzMp9WmGEIkX4aE3z0M%2BLlhRZZuiFgpJ1ENASn00ZNj0gFE39w2n%2BOZuYQyjONnMJ3eCjnF9O7G0ems1uy13%2B9xwYWeVx8Kcwy1eQRTezQY18Zgt5sPkx9mFe8KAZvekJN8ecPY5BsE0QM4MI4FjpPkv4ZxqdmlIGzGYZXIaViwiO%2FtLSM9xvGMX%2BvX5EMF17NDo7D565bgNhbsdpjfmZ1VqAdaSA1PXeGjPi%2F2jZQaRyCSDtdWu9vicLTQj83s3qVRpbygq5BZvP%2BTJrQ80f5z73vPCWpo2NBsOfUjZD5n8UkLPVzR8%2Fp3r27nCK8ejyG755AdGCeiUwGBIN4EHXi%2F7TN1nHpmVz66HfUn1HNMWLet2nGMRzSczlLPyybgd%2FH7ZapKZ1QOvAv7VcuZW4Ve3ImeQtctBZZtiXjlAiMlJxrXUDvKNnFjGd%2FnYy2fp61%2BimuqRgd34ubanoBBdE3gU5IvFjuxROpLN6gjYU7FuK%2FFVvvucaTmtPhEGfFjscD1tgUrSDCj7KnBBjqkAR%2FmflzpKRe0HFzJVGU3XkQFQUgti%2FdRoVyErglcHdX2BdrgmtMyIqzAqHo2ksoEtjIxILoOixg0GoyYLAXwvseFI9RiKzri47%2FqL1avKy7QCcgS76Q2aWSHfkQqpXZhgDC0cn5lC1ugt%2FAKKkeHvT6arvHCWg6V406M204BRF1qTSbP8lFB21LfUPqt0pgCSXQ70PwY6wOrS%2Bhd%2Ftod7g4K%2BtbD&X-Amz-Signature=9683aac117b2d4a04b6a50f4e42701b401fed0a9fdf49257c978139014089121&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCJPIUK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh96TY2JOq6r5BQYsuwwBjJrEhx%2B3GLTPdpvRX1xQy3QIhAIXtMTEy5eXSYtm%2Fjm55UdZ%2FuNoK9KDLPfqbvjQ%2FrYnRKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg34sgJ4L4m4DpKbwq3AM%2F8NeHNavthEvcZ7zlS3pqrJWcKK1jWUtpgmqHQXqPjRWWZbOQxwI8x9oHixUSX0yBLVoiqJWlkijqtzvvCdYJFiLDLJErYQC40DP2UlDtYFS5%2FJ9rZ%2BzMp9WmGEIkX4aE3z0M%2BLlhRZZuiFgpJ1ENASn00ZNj0gFE39w2n%2BOZuYQyjONnMJ3eCjnF9O7G0ems1uy13%2B9xwYWeVx8Kcwy1eQRTezQY18Zgt5sPkx9mFe8KAZvekJN8ecPY5BsE0QM4MI4FjpPkv4ZxqdmlIGzGYZXIaViwiO%2FtLSM9xvGMX%2BvX5EMF17NDo7D565bgNhbsdpjfmZ1VqAdaSA1PXeGjPi%2F2jZQaRyCSDtdWu9vicLTQj83s3qVRpbygq5BZvP%2BTJrQ80f5z73vPCWpo2NBsOfUjZD5n8UkLPVzR8%2Fp3r27nCK8ejyG755AdGCeiUwGBIN4EHXi%2F7TN1nHpmVz66HfUn1HNMWLet2nGMRzSczlLPyybgd%2FH7ZapKZ1QOvAv7VcuZW4Ve3ImeQtctBZZtiXjlAiMlJxrXUDvKNnFjGd%2FnYy2fp61%2BimuqRgd34ubanoBBdE3gU5IvFjuxROpLN6gjYU7FuK%2FFVvvucaTmtPhEGfFjscD1tgUrSDCj7KnBBjqkAR%2FmflzpKRe0HFzJVGU3XkQFQUgti%2FdRoVyErglcHdX2BdrgmtMyIqzAqHo2ksoEtjIxILoOixg0GoyYLAXwvseFI9RiKzri47%2FqL1avKy7QCcgS76Q2aWSHfkQqpXZhgDC0cn5lC1ugt%2FAKKkeHvT6arvHCWg6V406M204BRF1qTSbP8lFB21LfUPqt0pgCSXQ70PwY6wOrS%2Bhd%2Ftod7g4K%2BtbD&X-Amz-Signature=2c6d24d2ef60150ebd7a0185bb10198d804b9027cd334926fcb01405f856f3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCJPIUK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh96TY2JOq6r5BQYsuwwBjJrEhx%2B3GLTPdpvRX1xQy3QIhAIXtMTEy5eXSYtm%2Fjm55UdZ%2FuNoK9KDLPfqbvjQ%2FrYnRKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg34sgJ4L4m4DpKbwq3AM%2F8NeHNavthEvcZ7zlS3pqrJWcKK1jWUtpgmqHQXqPjRWWZbOQxwI8x9oHixUSX0yBLVoiqJWlkijqtzvvCdYJFiLDLJErYQC40DP2UlDtYFS5%2FJ9rZ%2BzMp9WmGEIkX4aE3z0M%2BLlhRZZuiFgpJ1ENASn00ZNj0gFE39w2n%2BOZuYQyjONnMJ3eCjnF9O7G0ems1uy13%2B9xwYWeVx8Kcwy1eQRTezQY18Zgt5sPkx9mFe8KAZvekJN8ecPY5BsE0QM4MI4FjpPkv4ZxqdmlIGzGYZXIaViwiO%2FtLSM9xvGMX%2BvX5EMF17NDo7D565bgNhbsdpjfmZ1VqAdaSA1PXeGjPi%2F2jZQaRyCSDtdWu9vicLTQj83s3qVRpbygq5BZvP%2BTJrQ80f5z73vPCWpo2NBsOfUjZD5n8UkLPVzR8%2Fp3r27nCK8ejyG755AdGCeiUwGBIN4EHXi%2F7TN1nHpmVz66HfUn1HNMWLet2nGMRzSczlLPyybgd%2FH7ZapKZ1QOvAv7VcuZW4Ve3ImeQtctBZZtiXjlAiMlJxrXUDvKNnFjGd%2FnYy2fp61%2BimuqRgd34ubanoBBdE3gU5IvFjuxROpLN6gjYU7FuK%2FFVvvucaTmtPhEGfFjscD1tgUrSDCj7KnBBjqkAR%2FmflzpKRe0HFzJVGU3XkQFQUgti%2FdRoVyErglcHdX2BdrgmtMyIqzAqHo2ksoEtjIxILoOixg0GoyYLAXwvseFI9RiKzri47%2FqL1avKy7QCcgS76Q2aWSHfkQqpXZhgDC0cn5lC1ugt%2FAKKkeHvT6arvHCWg6V406M204BRF1qTSbP8lFB21LfUPqt0pgCSXQ70PwY6wOrS%2Bhd%2Ftod7g4K%2BtbD&X-Amz-Signature=61676f496c2dd4be3fda9e174db7ae8b816972d3ff85b394f3e58165ae52dac7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCJPIUK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh96TY2JOq6r5BQYsuwwBjJrEhx%2B3GLTPdpvRX1xQy3QIhAIXtMTEy5eXSYtm%2Fjm55UdZ%2FuNoK9KDLPfqbvjQ%2FrYnRKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg34sgJ4L4m4DpKbwq3AM%2F8NeHNavthEvcZ7zlS3pqrJWcKK1jWUtpgmqHQXqPjRWWZbOQxwI8x9oHixUSX0yBLVoiqJWlkijqtzvvCdYJFiLDLJErYQC40DP2UlDtYFS5%2FJ9rZ%2BzMp9WmGEIkX4aE3z0M%2BLlhRZZuiFgpJ1ENASn00ZNj0gFE39w2n%2BOZuYQyjONnMJ3eCjnF9O7G0ems1uy13%2B9xwYWeVx8Kcwy1eQRTezQY18Zgt5sPkx9mFe8KAZvekJN8ecPY5BsE0QM4MI4FjpPkv4ZxqdmlIGzGYZXIaViwiO%2FtLSM9xvGMX%2BvX5EMF17NDo7D565bgNhbsdpjfmZ1VqAdaSA1PXeGjPi%2F2jZQaRyCSDtdWu9vicLTQj83s3qVRpbygq5BZvP%2BTJrQ80f5z73vPCWpo2NBsOfUjZD5n8UkLPVzR8%2Fp3r27nCK8ejyG755AdGCeiUwGBIN4EHXi%2F7TN1nHpmVz66HfUn1HNMWLet2nGMRzSczlLPyybgd%2FH7ZapKZ1QOvAv7VcuZW4Ve3ImeQtctBZZtiXjlAiMlJxrXUDvKNnFjGd%2FnYy2fp61%2BimuqRgd34ubanoBBdE3gU5IvFjuxROpLN6gjYU7FuK%2FFVvvucaTmtPhEGfFjscD1tgUrSDCj7KnBBjqkAR%2FmflzpKRe0HFzJVGU3XkQFQUgti%2FdRoVyErglcHdX2BdrgmtMyIqzAqHo2ksoEtjIxILoOixg0GoyYLAXwvseFI9RiKzri47%2FqL1avKy7QCcgS76Q2aWSHfkQqpXZhgDC0cn5lC1ugt%2FAKKkeHvT6arvHCWg6V406M204BRF1qTSbP8lFB21LfUPqt0pgCSXQ70PwY6wOrS%2Bhd%2Ftod7g4K%2BtbD&X-Amz-Signature=810ace2a7ea7579242c34a3cc4275764a8660fd429e13d5cd1e1a07645d34958&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCJPIUK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh96TY2JOq6r5BQYsuwwBjJrEhx%2B3GLTPdpvRX1xQy3QIhAIXtMTEy5eXSYtm%2Fjm55UdZ%2FuNoK9KDLPfqbvjQ%2FrYnRKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg34sgJ4L4m4DpKbwq3AM%2F8NeHNavthEvcZ7zlS3pqrJWcKK1jWUtpgmqHQXqPjRWWZbOQxwI8x9oHixUSX0yBLVoiqJWlkijqtzvvCdYJFiLDLJErYQC40DP2UlDtYFS5%2FJ9rZ%2BzMp9WmGEIkX4aE3z0M%2BLlhRZZuiFgpJ1ENASn00ZNj0gFE39w2n%2BOZuYQyjONnMJ3eCjnF9O7G0ems1uy13%2B9xwYWeVx8Kcwy1eQRTezQY18Zgt5sPkx9mFe8KAZvekJN8ecPY5BsE0QM4MI4FjpPkv4ZxqdmlIGzGYZXIaViwiO%2FtLSM9xvGMX%2BvX5EMF17NDo7D565bgNhbsdpjfmZ1VqAdaSA1PXeGjPi%2F2jZQaRyCSDtdWu9vicLTQj83s3qVRpbygq5BZvP%2BTJrQ80f5z73vPCWpo2NBsOfUjZD5n8UkLPVzR8%2Fp3r27nCK8ejyG755AdGCeiUwGBIN4EHXi%2F7TN1nHpmVz66HfUn1HNMWLet2nGMRzSczlLPyybgd%2FH7ZapKZ1QOvAv7VcuZW4Ve3ImeQtctBZZtiXjlAiMlJxrXUDvKNnFjGd%2FnYy2fp61%2BimuqRgd34ubanoBBdE3gU5IvFjuxROpLN6gjYU7FuK%2FFVvvucaTmtPhEGfFjscD1tgUrSDCj7KnBBjqkAR%2FmflzpKRe0HFzJVGU3XkQFQUgti%2FdRoVyErglcHdX2BdrgmtMyIqzAqHo2ksoEtjIxILoOixg0GoyYLAXwvseFI9RiKzri47%2FqL1avKy7QCcgS76Q2aWSHfkQqpXZhgDC0cn5lC1ugt%2FAKKkeHvT6arvHCWg6V406M204BRF1qTSbP8lFB21LfUPqt0pgCSXQ70PwY6wOrS%2Bhd%2Ftod7g4K%2BtbD&X-Amz-Signature=ca3fceac91355b485c624888e1567d3f58d93d9c51738ccd721258788b51cd2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCJPIUK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh96TY2JOq6r5BQYsuwwBjJrEhx%2B3GLTPdpvRX1xQy3QIhAIXtMTEy5eXSYtm%2Fjm55UdZ%2FuNoK9KDLPfqbvjQ%2FrYnRKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg34sgJ4L4m4DpKbwq3AM%2F8NeHNavthEvcZ7zlS3pqrJWcKK1jWUtpgmqHQXqPjRWWZbOQxwI8x9oHixUSX0yBLVoiqJWlkijqtzvvCdYJFiLDLJErYQC40DP2UlDtYFS5%2FJ9rZ%2BzMp9WmGEIkX4aE3z0M%2BLlhRZZuiFgpJ1ENASn00ZNj0gFE39w2n%2BOZuYQyjONnMJ3eCjnF9O7G0ems1uy13%2B9xwYWeVx8Kcwy1eQRTezQY18Zgt5sPkx9mFe8KAZvekJN8ecPY5BsE0QM4MI4FjpPkv4ZxqdmlIGzGYZXIaViwiO%2FtLSM9xvGMX%2BvX5EMF17NDo7D565bgNhbsdpjfmZ1VqAdaSA1PXeGjPi%2F2jZQaRyCSDtdWu9vicLTQj83s3qVRpbygq5BZvP%2BTJrQ80f5z73vPCWpo2NBsOfUjZD5n8UkLPVzR8%2Fp3r27nCK8ejyG755AdGCeiUwGBIN4EHXi%2F7TN1nHpmVz66HfUn1HNMWLet2nGMRzSczlLPyybgd%2FH7ZapKZ1QOvAv7VcuZW4Ve3ImeQtctBZZtiXjlAiMlJxrXUDvKNnFjGd%2FnYy2fp61%2BimuqRgd34ubanoBBdE3gU5IvFjuxROpLN6gjYU7FuK%2FFVvvucaTmtPhEGfFjscD1tgUrSDCj7KnBBjqkAR%2FmflzpKRe0HFzJVGU3XkQFQUgti%2FdRoVyErglcHdX2BdrgmtMyIqzAqHo2ksoEtjIxILoOixg0GoyYLAXwvseFI9RiKzri47%2FqL1avKy7QCcgS76Q2aWSHfkQqpXZhgDC0cn5lC1ugt%2FAKKkeHvT6arvHCWg6V406M204BRF1qTSbP8lFB21LfUPqt0pgCSXQ70PwY6wOrS%2Bhd%2Ftod7g4K%2BtbD&X-Amz-Signature=34c5194af4ee1beb6e2852bb98c099fcec725d3f092d0ccefbbd73f0f899b27d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
