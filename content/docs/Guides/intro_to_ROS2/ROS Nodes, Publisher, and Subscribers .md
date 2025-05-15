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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Q7CGIQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCulWQjNNMaJhqUhDrgC8g6Zu7chr9gYZhB%2BvykfvRicQIgbQvOdcbDQ922zmD6kNv%2BctemfLRizxhJ9rX0M7W9dhQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEeEzU0sypgo5J7fNyrcA%2F8d%2BbNDuKVUcptN%2FbEZ8wpHy2fPMZ%2FLY13RfEj50I6rn1UTrwsdPu%2BifJTcd3Qm0JG9p3e%2F6NYcCv8PPEDMMFCeH5uyZMdapxyh%2FGDGmgfxcjKZrUKOvAeVPJ9moYNzSeLwExwXCcQpOp0tA1WMDc3%2B8D4na6oYaE2UPwwaqEr%2BI2O5lVpL%2Fd7xjC9gTF8iQQI%2BVA%2BbcpqDISxUIUJjXUggG7AKOtR%2F9cfMNKhx8txHTgg8aJ7P%2FsgvWclQxrqyLM0J3KUWfxd8gWi9KhJZApDV9K7Ha8OhJee2fxjZ1n%2B5kOBEiTNyewwOWY1Vv2ka881x736fCbQDedY%2BQoGBneA9upei430lmm8Iy3iJPO8Nsqe86sK3DVcxg%2B8humMt06mYbqTdmv9UhpOYa12LitjfFZZk6fX2XrdTsWKJrnJ%2FQ7Ab47JclaY5m2qvnzoQXEtys23Qa75Et6Jzkz7C5f20%2BTuGyv%2FwZ3RU7s%2BUMQOOUq8Bcmk3RiyOTqGXXbgOidmIHMO%2B7gTrz%2F70ILbCUqNQ0mCqg5K4KMyj57Ov%2FJY1ZGQ906VmIpH%2FqGaSVmeZvVlxMi6rXGa3hb%2BMriWI3DIw%2BNFZrWUK9bBA%2BtL4p92KWg6AWhZTY6wWj%2FNoMJe2lcEGOqUBLuPZtvXu0mrwBzMZi1D8%2F7OYgwF970OrQydg5gTJouIDiXAyUVmeFZfuigUAaPogudbIzwcqUoCfazbjMDkc2ahw9saHe96Kmn3Ri1%2BFi2hDMaD7Vto74bqATX1pNSi5DHpMYTY0kbxksBKFxixQdljxfl8QHsBhsmdpe8VQ0O6gb6AYBheJ3O1xsYhKNjBQK88KTAlvR74%2BN%2BmJnsgYIONa6H8w&X-Amz-Signature=58ba3d25c40f0f24b86e8dccfb4490bf42a964fbfe2873de6ab68d07f24bfa9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Q7CGIQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCulWQjNNMaJhqUhDrgC8g6Zu7chr9gYZhB%2BvykfvRicQIgbQvOdcbDQ922zmD6kNv%2BctemfLRizxhJ9rX0M7W9dhQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEeEzU0sypgo5J7fNyrcA%2F8d%2BbNDuKVUcptN%2FbEZ8wpHy2fPMZ%2FLY13RfEj50I6rn1UTrwsdPu%2BifJTcd3Qm0JG9p3e%2F6NYcCv8PPEDMMFCeH5uyZMdapxyh%2FGDGmgfxcjKZrUKOvAeVPJ9moYNzSeLwExwXCcQpOp0tA1WMDc3%2B8D4na6oYaE2UPwwaqEr%2BI2O5lVpL%2Fd7xjC9gTF8iQQI%2BVA%2BbcpqDISxUIUJjXUggG7AKOtR%2F9cfMNKhx8txHTgg8aJ7P%2FsgvWclQxrqyLM0J3KUWfxd8gWi9KhJZApDV9K7Ha8OhJee2fxjZ1n%2B5kOBEiTNyewwOWY1Vv2ka881x736fCbQDedY%2BQoGBneA9upei430lmm8Iy3iJPO8Nsqe86sK3DVcxg%2B8humMt06mYbqTdmv9UhpOYa12LitjfFZZk6fX2XrdTsWKJrnJ%2FQ7Ab47JclaY5m2qvnzoQXEtys23Qa75Et6Jzkz7C5f20%2BTuGyv%2FwZ3RU7s%2BUMQOOUq8Bcmk3RiyOTqGXXbgOidmIHMO%2B7gTrz%2F70ILbCUqNQ0mCqg5K4KMyj57Ov%2FJY1ZGQ906VmIpH%2FqGaSVmeZvVlxMi6rXGa3hb%2BMriWI3DIw%2BNFZrWUK9bBA%2BtL4p92KWg6AWhZTY6wWj%2FNoMJe2lcEGOqUBLuPZtvXu0mrwBzMZi1D8%2F7OYgwF970OrQydg5gTJouIDiXAyUVmeFZfuigUAaPogudbIzwcqUoCfazbjMDkc2ahw9saHe96Kmn3Ri1%2BFi2hDMaD7Vto74bqATX1pNSi5DHpMYTY0kbxksBKFxixQdljxfl8QHsBhsmdpe8VQ0O6gb6AYBheJ3O1xsYhKNjBQK88KTAlvR74%2BN%2BmJnsgYIONa6H8w&X-Amz-Signature=52f05d419deb1ec4c5f7cd8509c2716e4b1237edbf597ce2268b6a9d7de5c95a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Q7CGIQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCulWQjNNMaJhqUhDrgC8g6Zu7chr9gYZhB%2BvykfvRicQIgbQvOdcbDQ922zmD6kNv%2BctemfLRizxhJ9rX0M7W9dhQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEeEzU0sypgo5J7fNyrcA%2F8d%2BbNDuKVUcptN%2FbEZ8wpHy2fPMZ%2FLY13RfEj50I6rn1UTrwsdPu%2BifJTcd3Qm0JG9p3e%2F6NYcCv8PPEDMMFCeH5uyZMdapxyh%2FGDGmgfxcjKZrUKOvAeVPJ9moYNzSeLwExwXCcQpOp0tA1WMDc3%2B8D4na6oYaE2UPwwaqEr%2BI2O5lVpL%2Fd7xjC9gTF8iQQI%2BVA%2BbcpqDISxUIUJjXUggG7AKOtR%2F9cfMNKhx8txHTgg8aJ7P%2FsgvWclQxrqyLM0J3KUWfxd8gWi9KhJZApDV9K7Ha8OhJee2fxjZ1n%2B5kOBEiTNyewwOWY1Vv2ka881x736fCbQDedY%2BQoGBneA9upei430lmm8Iy3iJPO8Nsqe86sK3DVcxg%2B8humMt06mYbqTdmv9UhpOYa12LitjfFZZk6fX2XrdTsWKJrnJ%2FQ7Ab47JclaY5m2qvnzoQXEtys23Qa75Et6Jzkz7C5f20%2BTuGyv%2FwZ3RU7s%2BUMQOOUq8Bcmk3RiyOTqGXXbgOidmIHMO%2B7gTrz%2F70ILbCUqNQ0mCqg5K4KMyj57Ov%2FJY1ZGQ906VmIpH%2FqGaSVmeZvVlxMi6rXGa3hb%2BMriWI3DIw%2BNFZrWUK9bBA%2BtL4p92KWg6AWhZTY6wWj%2FNoMJe2lcEGOqUBLuPZtvXu0mrwBzMZi1D8%2F7OYgwF970OrQydg5gTJouIDiXAyUVmeFZfuigUAaPogudbIzwcqUoCfazbjMDkc2ahw9saHe96Kmn3Ri1%2BFi2hDMaD7Vto74bqATX1pNSi5DHpMYTY0kbxksBKFxixQdljxfl8QHsBhsmdpe8VQ0O6gb6AYBheJ3O1xsYhKNjBQK88KTAlvR74%2BN%2BmJnsgYIONa6H8w&X-Amz-Signature=0793ac492903d7625363576b20aee3c6f6f0295c9ef3f45b86c625a89300c8de&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Q7CGIQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCulWQjNNMaJhqUhDrgC8g6Zu7chr9gYZhB%2BvykfvRicQIgbQvOdcbDQ922zmD6kNv%2BctemfLRizxhJ9rX0M7W9dhQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEeEzU0sypgo5J7fNyrcA%2F8d%2BbNDuKVUcptN%2FbEZ8wpHy2fPMZ%2FLY13RfEj50I6rn1UTrwsdPu%2BifJTcd3Qm0JG9p3e%2F6NYcCv8PPEDMMFCeH5uyZMdapxyh%2FGDGmgfxcjKZrUKOvAeVPJ9moYNzSeLwExwXCcQpOp0tA1WMDc3%2B8D4na6oYaE2UPwwaqEr%2BI2O5lVpL%2Fd7xjC9gTF8iQQI%2BVA%2BbcpqDISxUIUJjXUggG7AKOtR%2F9cfMNKhx8txHTgg8aJ7P%2FsgvWclQxrqyLM0J3KUWfxd8gWi9KhJZApDV9K7Ha8OhJee2fxjZ1n%2B5kOBEiTNyewwOWY1Vv2ka881x736fCbQDedY%2BQoGBneA9upei430lmm8Iy3iJPO8Nsqe86sK3DVcxg%2B8humMt06mYbqTdmv9UhpOYa12LitjfFZZk6fX2XrdTsWKJrnJ%2FQ7Ab47JclaY5m2qvnzoQXEtys23Qa75Et6Jzkz7C5f20%2BTuGyv%2FwZ3RU7s%2BUMQOOUq8Bcmk3RiyOTqGXXbgOidmIHMO%2B7gTrz%2F70ILbCUqNQ0mCqg5K4KMyj57Ov%2FJY1ZGQ906VmIpH%2FqGaSVmeZvVlxMi6rXGa3hb%2BMriWI3DIw%2BNFZrWUK9bBA%2BtL4p92KWg6AWhZTY6wWj%2FNoMJe2lcEGOqUBLuPZtvXu0mrwBzMZi1D8%2F7OYgwF970OrQydg5gTJouIDiXAyUVmeFZfuigUAaPogudbIzwcqUoCfazbjMDkc2ahw9saHe96Kmn3Ri1%2BFi2hDMaD7Vto74bqATX1pNSi5DHpMYTY0kbxksBKFxixQdljxfl8QHsBhsmdpe8VQ0O6gb6AYBheJ3O1xsYhKNjBQK88KTAlvR74%2BN%2BmJnsgYIONa6H8w&X-Amz-Signature=629015c5187ee5a5a194d6e242ba361d19a3d8b498219783dd9e23c17cc33b97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Q7CGIQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCulWQjNNMaJhqUhDrgC8g6Zu7chr9gYZhB%2BvykfvRicQIgbQvOdcbDQ922zmD6kNv%2BctemfLRizxhJ9rX0M7W9dhQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEeEzU0sypgo5J7fNyrcA%2F8d%2BbNDuKVUcptN%2FbEZ8wpHy2fPMZ%2FLY13RfEj50I6rn1UTrwsdPu%2BifJTcd3Qm0JG9p3e%2F6NYcCv8PPEDMMFCeH5uyZMdapxyh%2FGDGmgfxcjKZrUKOvAeVPJ9moYNzSeLwExwXCcQpOp0tA1WMDc3%2B8D4na6oYaE2UPwwaqEr%2BI2O5lVpL%2Fd7xjC9gTF8iQQI%2BVA%2BbcpqDISxUIUJjXUggG7AKOtR%2F9cfMNKhx8txHTgg8aJ7P%2FsgvWclQxrqyLM0J3KUWfxd8gWi9KhJZApDV9K7Ha8OhJee2fxjZ1n%2B5kOBEiTNyewwOWY1Vv2ka881x736fCbQDedY%2BQoGBneA9upei430lmm8Iy3iJPO8Nsqe86sK3DVcxg%2B8humMt06mYbqTdmv9UhpOYa12LitjfFZZk6fX2XrdTsWKJrnJ%2FQ7Ab47JclaY5m2qvnzoQXEtys23Qa75Et6Jzkz7C5f20%2BTuGyv%2FwZ3RU7s%2BUMQOOUq8Bcmk3RiyOTqGXXbgOidmIHMO%2B7gTrz%2F70ILbCUqNQ0mCqg5K4KMyj57Ov%2FJY1ZGQ906VmIpH%2FqGaSVmeZvVlxMi6rXGa3hb%2BMriWI3DIw%2BNFZrWUK9bBA%2BtL4p92KWg6AWhZTY6wWj%2FNoMJe2lcEGOqUBLuPZtvXu0mrwBzMZi1D8%2F7OYgwF970OrQydg5gTJouIDiXAyUVmeFZfuigUAaPogudbIzwcqUoCfazbjMDkc2ahw9saHe96Kmn3Ri1%2BFi2hDMaD7Vto74bqATX1pNSi5DHpMYTY0kbxksBKFxixQdljxfl8QHsBhsmdpe8VQ0O6gb6AYBheJ3O1xsYhKNjBQK88KTAlvR74%2BN%2BmJnsgYIONa6H8w&X-Amz-Signature=16e3c3754399a8180d17e4c96a6a2542ca1637af1298af8a190a4d2dfc7d4661&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Q7CGIQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCulWQjNNMaJhqUhDrgC8g6Zu7chr9gYZhB%2BvykfvRicQIgbQvOdcbDQ922zmD6kNv%2BctemfLRizxhJ9rX0M7W9dhQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEeEzU0sypgo5J7fNyrcA%2F8d%2BbNDuKVUcptN%2FbEZ8wpHy2fPMZ%2FLY13RfEj50I6rn1UTrwsdPu%2BifJTcd3Qm0JG9p3e%2F6NYcCv8PPEDMMFCeH5uyZMdapxyh%2FGDGmgfxcjKZrUKOvAeVPJ9moYNzSeLwExwXCcQpOp0tA1WMDc3%2B8D4na6oYaE2UPwwaqEr%2BI2O5lVpL%2Fd7xjC9gTF8iQQI%2BVA%2BbcpqDISxUIUJjXUggG7AKOtR%2F9cfMNKhx8txHTgg8aJ7P%2FsgvWclQxrqyLM0J3KUWfxd8gWi9KhJZApDV9K7Ha8OhJee2fxjZ1n%2B5kOBEiTNyewwOWY1Vv2ka881x736fCbQDedY%2BQoGBneA9upei430lmm8Iy3iJPO8Nsqe86sK3DVcxg%2B8humMt06mYbqTdmv9UhpOYa12LitjfFZZk6fX2XrdTsWKJrnJ%2FQ7Ab47JclaY5m2qvnzoQXEtys23Qa75Et6Jzkz7C5f20%2BTuGyv%2FwZ3RU7s%2BUMQOOUq8Bcmk3RiyOTqGXXbgOidmIHMO%2B7gTrz%2F70ILbCUqNQ0mCqg5K4KMyj57Ov%2FJY1ZGQ906VmIpH%2FqGaSVmeZvVlxMi6rXGa3hb%2BMriWI3DIw%2BNFZrWUK9bBA%2BtL4p92KWg6AWhZTY6wWj%2FNoMJe2lcEGOqUBLuPZtvXu0mrwBzMZi1D8%2F7OYgwF970OrQydg5gTJouIDiXAyUVmeFZfuigUAaPogudbIzwcqUoCfazbjMDkc2ahw9saHe96Kmn3Ri1%2BFi2hDMaD7Vto74bqATX1pNSi5DHpMYTY0kbxksBKFxixQdljxfl8QHsBhsmdpe8VQ0O6gb6AYBheJ3O1xsYhKNjBQK88KTAlvR74%2BN%2BmJnsgYIONa6H8w&X-Amz-Signature=d6c0235af77cd597cdf43223a500bf2dd99aee4ff398d35c6a0f6d739ba435ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Q7CGIQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCulWQjNNMaJhqUhDrgC8g6Zu7chr9gYZhB%2BvykfvRicQIgbQvOdcbDQ922zmD6kNv%2BctemfLRizxhJ9rX0M7W9dhQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEeEzU0sypgo5J7fNyrcA%2F8d%2BbNDuKVUcptN%2FbEZ8wpHy2fPMZ%2FLY13RfEj50I6rn1UTrwsdPu%2BifJTcd3Qm0JG9p3e%2F6NYcCv8PPEDMMFCeH5uyZMdapxyh%2FGDGmgfxcjKZrUKOvAeVPJ9moYNzSeLwExwXCcQpOp0tA1WMDc3%2B8D4na6oYaE2UPwwaqEr%2BI2O5lVpL%2Fd7xjC9gTF8iQQI%2BVA%2BbcpqDISxUIUJjXUggG7AKOtR%2F9cfMNKhx8txHTgg8aJ7P%2FsgvWclQxrqyLM0J3KUWfxd8gWi9KhJZApDV9K7Ha8OhJee2fxjZ1n%2B5kOBEiTNyewwOWY1Vv2ka881x736fCbQDedY%2BQoGBneA9upei430lmm8Iy3iJPO8Nsqe86sK3DVcxg%2B8humMt06mYbqTdmv9UhpOYa12LitjfFZZk6fX2XrdTsWKJrnJ%2FQ7Ab47JclaY5m2qvnzoQXEtys23Qa75Et6Jzkz7C5f20%2BTuGyv%2FwZ3RU7s%2BUMQOOUq8Bcmk3RiyOTqGXXbgOidmIHMO%2B7gTrz%2F70ILbCUqNQ0mCqg5K4KMyj57Ov%2FJY1ZGQ906VmIpH%2FqGaSVmeZvVlxMi6rXGa3hb%2BMriWI3DIw%2BNFZrWUK9bBA%2BtL4p92KWg6AWhZTY6wWj%2FNoMJe2lcEGOqUBLuPZtvXu0mrwBzMZi1D8%2F7OYgwF970OrQydg5gTJouIDiXAyUVmeFZfuigUAaPogudbIzwcqUoCfazbjMDkc2ahw9saHe96Kmn3Ri1%2BFi2hDMaD7Vto74bqATX1pNSi5DHpMYTY0kbxksBKFxixQdljxfl8QHsBhsmdpe8VQ0O6gb6AYBheJ3O1xsYhKNjBQK88KTAlvR74%2BN%2BmJnsgYIONa6H8w&X-Amz-Signature=b07554afefb3a7c6bb529f645ae1e6c86f56f283aa09fd6c533326d8916e92e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7Q7CGIQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCulWQjNNMaJhqUhDrgC8g6Zu7chr9gYZhB%2BvykfvRicQIgbQvOdcbDQ922zmD6kNv%2BctemfLRizxhJ9rX0M7W9dhQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEeEzU0sypgo5J7fNyrcA%2F8d%2BbNDuKVUcptN%2FbEZ8wpHy2fPMZ%2FLY13RfEj50I6rn1UTrwsdPu%2BifJTcd3Qm0JG9p3e%2F6NYcCv8PPEDMMFCeH5uyZMdapxyh%2FGDGmgfxcjKZrUKOvAeVPJ9moYNzSeLwExwXCcQpOp0tA1WMDc3%2B8D4na6oYaE2UPwwaqEr%2BI2O5lVpL%2Fd7xjC9gTF8iQQI%2BVA%2BbcpqDISxUIUJjXUggG7AKOtR%2F9cfMNKhx8txHTgg8aJ7P%2FsgvWclQxrqyLM0J3KUWfxd8gWi9KhJZApDV9K7Ha8OhJee2fxjZ1n%2B5kOBEiTNyewwOWY1Vv2ka881x736fCbQDedY%2BQoGBneA9upei430lmm8Iy3iJPO8Nsqe86sK3DVcxg%2B8humMt06mYbqTdmv9UhpOYa12LitjfFZZk6fX2XrdTsWKJrnJ%2FQ7Ab47JclaY5m2qvnzoQXEtys23Qa75Et6Jzkz7C5f20%2BTuGyv%2FwZ3RU7s%2BUMQOOUq8Bcmk3RiyOTqGXXbgOidmIHMO%2B7gTrz%2F70ILbCUqNQ0mCqg5K4KMyj57Ov%2FJY1ZGQ906VmIpH%2FqGaSVmeZvVlxMi6rXGa3hb%2BMriWI3DIw%2BNFZrWUK9bBA%2BtL4p92KWg6AWhZTY6wWj%2FNoMJe2lcEGOqUBLuPZtvXu0mrwBzMZi1D8%2F7OYgwF970OrQydg5gTJouIDiXAyUVmeFZfuigUAaPogudbIzwcqUoCfazbjMDkc2ahw9saHe96Kmn3Ri1%2BFi2hDMaD7Vto74bqATX1pNSi5DHpMYTY0kbxksBKFxixQdljxfl8QHsBhsmdpe8VQ0O6gb6AYBheJ3O1xsYhKNjBQK88KTAlvR74%2BN%2BmJnsgYIONa6H8w&X-Amz-Signature=c22439429b2c86492b30de8a0736a1acf0f8d16e8d709215aae1d52858533a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
