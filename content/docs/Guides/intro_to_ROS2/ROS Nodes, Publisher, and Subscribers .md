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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NW5UQL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJsVQCLORPSzugbTN11HIS9ndFyHXzaZ07W%2FZZldZERAIhAP%2BEYvnsvyRGnP0m9dG%2F30NWgtQ4yKdye5Kt%2FtbZ1zsJKv8DCH8QABoMNjM3NDIzMTgzODA1IgwsSMOKEtIMf%2BWevVoq3AN3TXfp63ysRhO6X%2BFrNPP%2BeUW6WH8t5KC4U%2FfesJiHePdcroyhw%2Bb6V8XmOoJPM2JVo9vb61%2F4YYDwjNaDE5LewCYdkjAcEO%2FChbvVsIxgj1ii0hPsb3C3lEG%2F%2FWWqZV62t1L4SPyaMKDdQnDGC%2F3l2m%2FsXgxV2iNNmqcmvEk8G2UUjARhsK%2BOnUqBFAzggzVIZCxTHASGfBPy8OXzrLNkNGaJrCaqhCtjALqhus7yLOUjN4NDkFVucEtqxSKT0r3lVwL%2F6TBI3HvRzszd%2Bq%2F%2Bbhf5uHypCqsLkb0OyeFOSG4cNaTgkLXKaTRWV5nT30xlyx7JQHlva0jkYLRa6zuRQgMRpgD587mZTuWv8c%2FZl9P2UOfWfLkfg5e4ZzEJtKkr%2BGaKCkrlzgfNq9FA%2BdmwDRojIStU8XXjS357JTciSR%2BDpYIqp1m%2Bnu8i8Zb6Ou%2FMOaaCG7JoFlKKu3D4yajsi8wkt1NWRHvKwAMjd9ZGSEr6n1gNCXr0C6XiTURqh0kH7FyBb3b3MGzXdCa3wpT6gl1skFMLuUw9xbtBLaT%2Bt0RVXwhDQQVLbemGABJST0Ff6nRJHTpS0ueTuSqwfDcpzbPZnjT2lHjMu6NhkG6foZ%2F8azeOwi%2BZmuQoGTCl7b%2FABjqkAbjy4yh6FnmoMB3yHH7HnxblBHuwNdFGKwJUkOvkkFN3DfBzASkc%2BEFq7olnjZEt827d54Cd0OfI932lzUENG%2FBfEBvpBS1d0pTHNSjt%2FRnzqQZ6o3E6D2wjVywu2wWzAA95t00wpeTnuGUVJTPJ71%2Bv62R5maTeRwMgf%2BQA2Xf8e80s2noz22Xa3s2om8O4sw22XTYPOZzoAeYP0oOUYucOEYfM&X-Amz-Signature=957ce3021839b18475223ce125123cb8e4db9cff81f42a35475d45735288b48b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NW5UQL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJsVQCLORPSzugbTN11HIS9ndFyHXzaZ07W%2FZZldZERAIhAP%2BEYvnsvyRGnP0m9dG%2F30NWgtQ4yKdye5Kt%2FtbZ1zsJKv8DCH8QABoMNjM3NDIzMTgzODA1IgwsSMOKEtIMf%2BWevVoq3AN3TXfp63ysRhO6X%2BFrNPP%2BeUW6WH8t5KC4U%2FfesJiHePdcroyhw%2Bb6V8XmOoJPM2JVo9vb61%2F4YYDwjNaDE5LewCYdkjAcEO%2FChbvVsIxgj1ii0hPsb3C3lEG%2F%2FWWqZV62t1L4SPyaMKDdQnDGC%2F3l2m%2FsXgxV2iNNmqcmvEk8G2UUjARhsK%2BOnUqBFAzggzVIZCxTHASGfBPy8OXzrLNkNGaJrCaqhCtjALqhus7yLOUjN4NDkFVucEtqxSKT0r3lVwL%2F6TBI3HvRzszd%2Bq%2F%2Bbhf5uHypCqsLkb0OyeFOSG4cNaTgkLXKaTRWV5nT30xlyx7JQHlva0jkYLRa6zuRQgMRpgD587mZTuWv8c%2FZl9P2UOfWfLkfg5e4ZzEJtKkr%2BGaKCkrlzgfNq9FA%2BdmwDRojIStU8XXjS357JTciSR%2BDpYIqp1m%2Bnu8i8Zb6Ou%2FMOaaCG7JoFlKKu3D4yajsi8wkt1NWRHvKwAMjd9ZGSEr6n1gNCXr0C6XiTURqh0kH7FyBb3b3MGzXdCa3wpT6gl1skFMLuUw9xbtBLaT%2Bt0RVXwhDQQVLbemGABJST0Ff6nRJHTpS0ueTuSqwfDcpzbPZnjT2lHjMu6NhkG6foZ%2F8azeOwi%2BZmuQoGTCl7b%2FABjqkAbjy4yh6FnmoMB3yHH7HnxblBHuwNdFGKwJUkOvkkFN3DfBzASkc%2BEFq7olnjZEt827d54Cd0OfI932lzUENG%2FBfEBvpBS1d0pTHNSjt%2FRnzqQZ6o3E6D2wjVywu2wWzAA95t00wpeTnuGUVJTPJ71%2Bv62R5maTeRwMgf%2BQA2Xf8e80s2noz22Xa3s2om8O4sw22XTYPOZzoAeYP0oOUYucOEYfM&X-Amz-Signature=effe48596bc4fc6998afb8790167c0622950f323bc850b6b14d8bf09c3a1731b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NW5UQL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJsVQCLORPSzugbTN11HIS9ndFyHXzaZ07W%2FZZldZERAIhAP%2BEYvnsvyRGnP0m9dG%2F30NWgtQ4yKdye5Kt%2FtbZ1zsJKv8DCH8QABoMNjM3NDIzMTgzODA1IgwsSMOKEtIMf%2BWevVoq3AN3TXfp63ysRhO6X%2BFrNPP%2BeUW6WH8t5KC4U%2FfesJiHePdcroyhw%2Bb6V8XmOoJPM2JVo9vb61%2F4YYDwjNaDE5LewCYdkjAcEO%2FChbvVsIxgj1ii0hPsb3C3lEG%2F%2FWWqZV62t1L4SPyaMKDdQnDGC%2F3l2m%2FsXgxV2iNNmqcmvEk8G2UUjARhsK%2BOnUqBFAzggzVIZCxTHASGfBPy8OXzrLNkNGaJrCaqhCtjALqhus7yLOUjN4NDkFVucEtqxSKT0r3lVwL%2F6TBI3HvRzszd%2Bq%2F%2Bbhf5uHypCqsLkb0OyeFOSG4cNaTgkLXKaTRWV5nT30xlyx7JQHlva0jkYLRa6zuRQgMRpgD587mZTuWv8c%2FZl9P2UOfWfLkfg5e4ZzEJtKkr%2BGaKCkrlzgfNq9FA%2BdmwDRojIStU8XXjS357JTciSR%2BDpYIqp1m%2Bnu8i8Zb6Ou%2FMOaaCG7JoFlKKu3D4yajsi8wkt1NWRHvKwAMjd9ZGSEr6n1gNCXr0C6XiTURqh0kH7FyBb3b3MGzXdCa3wpT6gl1skFMLuUw9xbtBLaT%2Bt0RVXwhDQQVLbemGABJST0Ff6nRJHTpS0ueTuSqwfDcpzbPZnjT2lHjMu6NhkG6foZ%2F8azeOwi%2BZmuQoGTCl7b%2FABjqkAbjy4yh6FnmoMB3yHH7HnxblBHuwNdFGKwJUkOvkkFN3DfBzASkc%2BEFq7olnjZEt827d54Cd0OfI932lzUENG%2FBfEBvpBS1d0pTHNSjt%2FRnzqQZ6o3E6D2wjVywu2wWzAA95t00wpeTnuGUVJTPJ71%2Bv62R5maTeRwMgf%2BQA2Xf8e80s2noz22Xa3s2om8O4sw22XTYPOZzoAeYP0oOUYucOEYfM&X-Amz-Signature=969ee65484d6b0465b525b3b362a80f346e8b63983b97de5ea0cac610a34c030&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NW5UQL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJsVQCLORPSzugbTN11HIS9ndFyHXzaZ07W%2FZZldZERAIhAP%2BEYvnsvyRGnP0m9dG%2F30NWgtQ4yKdye5Kt%2FtbZ1zsJKv8DCH8QABoMNjM3NDIzMTgzODA1IgwsSMOKEtIMf%2BWevVoq3AN3TXfp63ysRhO6X%2BFrNPP%2BeUW6WH8t5KC4U%2FfesJiHePdcroyhw%2Bb6V8XmOoJPM2JVo9vb61%2F4YYDwjNaDE5LewCYdkjAcEO%2FChbvVsIxgj1ii0hPsb3C3lEG%2F%2FWWqZV62t1L4SPyaMKDdQnDGC%2F3l2m%2FsXgxV2iNNmqcmvEk8G2UUjARhsK%2BOnUqBFAzggzVIZCxTHASGfBPy8OXzrLNkNGaJrCaqhCtjALqhus7yLOUjN4NDkFVucEtqxSKT0r3lVwL%2F6TBI3HvRzszd%2Bq%2F%2Bbhf5uHypCqsLkb0OyeFOSG4cNaTgkLXKaTRWV5nT30xlyx7JQHlva0jkYLRa6zuRQgMRpgD587mZTuWv8c%2FZl9P2UOfWfLkfg5e4ZzEJtKkr%2BGaKCkrlzgfNq9FA%2BdmwDRojIStU8XXjS357JTciSR%2BDpYIqp1m%2Bnu8i8Zb6Ou%2FMOaaCG7JoFlKKu3D4yajsi8wkt1NWRHvKwAMjd9ZGSEr6n1gNCXr0C6XiTURqh0kH7FyBb3b3MGzXdCa3wpT6gl1skFMLuUw9xbtBLaT%2Bt0RVXwhDQQVLbemGABJST0Ff6nRJHTpS0ueTuSqwfDcpzbPZnjT2lHjMu6NhkG6foZ%2F8azeOwi%2BZmuQoGTCl7b%2FABjqkAbjy4yh6FnmoMB3yHH7HnxblBHuwNdFGKwJUkOvkkFN3DfBzASkc%2BEFq7olnjZEt827d54Cd0OfI932lzUENG%2FBfEBvpBS1d0pTHNSjt%2FRnzqQZ6o3E6D2wjVywu2wWzAA95t00wpeTnuGUVJTPJ71%2Bv62R5maTeRwMgf%2BQA2Xf8e80s2noz22Xa3s2om8O4sw22XTYPOZzoAeYP0oOUYucOEYfM&X-Amz-Signature=368903db6311899877ac485364786248a4cca4158f05151638ddc976d89b925d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NW5UQL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJsVQCLORPSzugbTN11HIS9ndFyHXzaZ07W%2FZZldZERAIhAP%2BEYvnsvyRGnP0m9dG%2F30NWgtQ4yKdye5Kt%2FtbZ1zsJKv8DCH8QABoMNjM3NDIzMTgzODA1IgwsSMOKEtIMf%2BWevVoq3AN3TXfp63ysRhO6X%2BFrNPP%2BeUW6WH8t5KC4U%2FfesJiHePdcroyhw%2Bb6V8XmOoJPM2JVo9vb61%2F4YYDwjNaDE5LewCYdkjAcEO%2FChbvVsIxgj1ii0hPsb3C3lEG%2F%2FWWqZV62t1L4SPyaMKDdQnDGC%2F3l2m%2FsXgxV2iNNmqcmvEk8G2UUjARhsK%2BOnUqBFAzggzVIZCxTHASGfBPy8OXzrLNkNGaJrCaqhCtjALqhus7yLOUjN4NDkFVucEtqxSKT0r3lVwL%2F6TBI3HvRzszd%2Bq%2F%2Bbhf5uHypCqsLkb0OyeFOSG4cNaTgkLXKaTRWV5nT30xlyx7JQHlva0jkYLRa6zuRQgMRpgD587mZTuWv8c%2FZl9P2UOfWfLkfg5e4ZzEJtKkr%2BGaKCkrlzgfNq9FA%2BdmwDRojIStU8XXjS357JTciSR%2BDpYIqp1m%2Bnu8i8Zb6Ou%2FMOaaCG7JoFlKKu3D4yajsi8wkt1NWRHvKwAMjd9ZGSEr6n1gNCXr0C6XiTURqh0kH7FyBb3b3MGzXdCa3wpT6gl1skFMLuUw9xbtBLaT%2Bt0RVXwhDQQVLbemGABJST0Ff6nRJHTpS0ueTuSqwfDcpzbPZnjT2lHjMu6NhkG6foZ%2F8azeOwi%2BZmuQoGTCl7b%2FABjqkAbjy4yh6FnmoMB3yHH7HnxblBHuwNdFGKwJUkOvkkFN3DfBzASkc%2BEFq7olnjZEt827d54Cd0OfI932lzUENG%2FBfEBvpBS1d0pTHNSjt%2FRnzqQZ6o3E6D2wjVywu2wWzAA95t00wpeTnuGUVJTPJ71%2Bv62R5maTeRwMgf%2BQA2Xf8e80s2noz22Xa3s2om8O4sw22XTYPOZzoAeYP0oOUYucOEYfM&X-Amz-Signature=78cf898b64062540ff33271bce81d345aa8a66d19e281404fb498a926ca38696&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NW5UQL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJsVQCLORPSzugbTN11HIS9ndFyHXzaZ07W%2FZZldZERAIhAP%2BEYvnsvyRGnP0m9dG%2F30NWgtQ4yKdye5Kt%2FtbZ1zsJKv8DCH8QABoMNjM3NDIzMTgzODA1IgwsSMOKEtIMf%2BWevVoq3AN3TXfp63ysRhO6X%2BFrNPP%2BeUW6WH8t5KC4U%2FfesJiHePdcroyhw%2Bb6V8XmOoJPM2JVo9vb61%2F4YYDwjNaDE5LewCYdkjAcEO%2FChbvVsIxgj1ii0hPsb3C3lEG%2F%2FWWqZV62t1L4SPyaMKDdQnDGC%2F3l2m%2FsXgxV2iNNmqcmvEk8G2UUjARhsK%2BOnUqBFAzggzVIZCxTHASGfBPy8OXzrLNkNGaJrCaqhCtjALqhus7yLOUjN4NDkFVucEtqxSKT0r3lVwL%2F6TBI3HvRzszd%2Bq%2F%2Bbhf5uHypCqsLkb0OyeFOSG4cNaTgkLXKaTRWV5nT30xlyx7JQHlva0jkYLRa6zuRQgMRpgD587mZTuWv8c%2FZl9P2UOfWfLkfg5e4ZzEJtKkr%2BGaKCkrlzgfNq9FA%2BdmwDRojIStU8XXjS357JTciSR%2BDpYIqp1m%2Bnu8i8Zb6Ou%2FMOaaCG7JoFlKKu3D4yajsi8wkt1NWRHvKwAMjd9ZGSEr6n1gNCXr0C6XiTURqh0kH7FyBb3b3MGzXdCa3wpT6gl1skFMLuUw9xbtBLaT%2Bt0RVXwhDQQVLbemGABJST0Ff6nRJHTpS0ueTuSqwfDcpzbPZnjT2lHjMu6NhkG6foZ%2F8azeOwi%2BZmuQoGTCl7b%2FABjqkAbjy4yh6FnmoMB3yHH7HnxblBHuwNdFGKwJUkOvkkFN3DfBzASkc%2BEFq7olnjZEt827d54Cd0OfI932lzUENG%2FBfEBvpBS1d0pTHNSjt%2FRnzqQZ6o3E6D2wjVywu2wWzAA95t00wpeTnuGUVJTPJ71%2Bv62R5maTeRwMgf%2BQA2Xf8e80s2noz22Xa3s2om8O4sw22XTYPOZzoAeYP0oOUYucOEYfM&X-Amz-Signature=09be4a4b9d678371caedc2f06818bd4305b20bdda6b9b0570cdf4b8d49571266&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NW5UQL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJsVQCLORPSzugbTN11HIS9ndFyHXzaZ07W%2FZZldZERAIhAP%2BEYvnsvyRGnP0m9dG%2F30NWgtQ4yKdye5Kt%2FtbZ1zsJKv8DCH8QABoMNjM3NDIzMTgzODA1IgwsSMOKEtIMf%2BWevVoq3AN3TXfp63ysRhO6X%2BFrNPP%2BeUW6WH8t5KC4U%2FfesJiHePdcroyhw%2Bb6V8XmOoJPM2JVo9vb61%2F4YYDwjNaDE5LewCYdkjAcEO%2FChbvVsIxgj1ii0hPsb3C3lEG%2F%2FWWqZV62t1L4SPyaMKDdQnDGC%2F3l2m%2FsXgxV2iNNmqcmvEk8G2UUjARhsK%2BOnUqBFAzggzVIZCxTHASGfBPy8OXzrLNkNGaJrCaqhCtjALqhus7yLOUjN4NDkFVucEtqxSKT0r3lVwL%2F6TBI3HvRzszd%2Bq%2F%2Bbhf5uHypCqsLkb0OyeFOSG4cNaTgkLXKaTRWV5nT30xlyx7JQHlva0jkYLRa6zuRQgMRpgD587mZTuWv8c%2FZl9P2UOfWfLkfg5e4ZzEJtKkr%2BGaKCkrlzgfNq9FA%2BdmwDRojIStU8XXjS357JTciSR%2BDpYIqp1m%2Bnu8i8Zb6Ou%2FMOaaCG7JoFlKKu3D4yajsi8wkt1NWRHvKwAMjd9ZGSEr6n1gNCXr0C6XiTURqh0kH7FyBb3b3MGzXdCa3wpT6gl1skFMLuUw9xbtBLaT%2Bt0RVXwhDQQVLbemGABJST0Ff6nRJHTpS0ueTuSqwfDcpzbPZnjT2lHjMu6NhkG6foZ%2F8azeOwi%2BZmuQoGTCl7b%2FABjqkAbjy4yh6FnmoMB3yHH7HnxblBHuwNdFGKwJUkOvkkFN3DfBzASkc%2BEFq7olnjZEt827d54Cd0OfI932lzUENG%2FBfEBvpBS1d0pTHNSjt%2FRnzqQZ6o3E6D2wjVywu2wWzAA95t00wpeTnuGUVJTPJ71%2Bv62R5maTeRwMgf%2BQA2Xf8e80s2noz22Xa3s2om8O4sw22XTYPOZzoAeYP0oOUYucOEYfM&X-Amz-Signature=a25294f1d59a00c3df76490c8c04739d86d1fdbaeda49906da3e7aef36091e59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NW5UQL%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJsVQCLORPSzugbTN11HIS9ndFyHXzaZ07W%2FZZldZERAIhAP%2BEYvnsvyRGnP0m9dG%2F30NWgtQ4yKdye5Kt%2FtbZ1zsJKv8DCH8QABoMNjM3NDIzMTgzODA1IgwsSMOKEtIMf%2BWevVoq3AN3TXfp63ysRhO6X%2BFrNPP%2BeUW6WH8t5KC4U%2FfesJiHePdcroyhw%2Bb6V8XmOoJPM2JVo9vb61%2F4YYDwjNaDE5LewCYdkjAcEO%2FChbvVsIxgj1ii0hPsb3C3lEG%2F%2FWWqZV62t1L4SPyaMKDdQnDGC%2F3l2m%2FsXgxV2iNNmqcmvEk8G2UUjARhsK%2BOnUqBFAzggzVIZCxTHASGfBPy8OXzrLNkNGaJrCaqhCtjALqhus7yLOUjN4NDkFVucEtqxSKT0r3lVwL%2F6TBI3HvRzszd%2Bq%2F%2Bbhf5uHypCqsLkb0OyeFOSG4cNaTgkLXKaTRWV5nT30xlyx7JQHlva0jkYLRa6zuRQgMRpgD587mZTuWv8c%2FZl9P2UOfWfLkfg5e4ZzEJtKkr%2BGaKCkrlzgfNq9FA%2BdmwDRojIStU8XXjS357JTciSR%2BDpYIqp1m%2Bnu8i8Zb6Ou%2FMOaaCG7JoFlKKu3D4yajsi8wkt1NWRHvKwAMjd9ZGSEr6n1gNCXr0C6XiTURqh0kH7FyBb3b3MGzXdCa3wpT6gl1skFMLuUw9xbtBLaT%2Bt0RVXwhDQQVLbemGABJST0Ff6nRJHTpS0ueTuSqwfDcpzbPZnjT2lHjMu6NhkG6foZ%2F8azeOwi%2BZmuQoGTCl7b%2FABjqkAbjy4yh6FnmoMB3yHH7HnxblBHuwNdFGKwJUkOvkkFN3DfBzASkc%2BEFq7olnjZEt827d54Cd0OfI932lzUENG%2FBfEBvpBS1d0pTHNSjt%2FRnzqQZ6o3E6D2wjVywu2wWzAA95t00wpeTnuGUVJTPJ71%2Bv62R5maTeRwMgf%2BQA2Xf8e80s2noz22Xa3s2om8O4sw22XTYPOZzoAeYP0oOUYucOEYfM&X-Amz-Signature=998e2725028384a28b8193f589653dbf37b1df9a0ea9b27e629f8d0fba86b9be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
