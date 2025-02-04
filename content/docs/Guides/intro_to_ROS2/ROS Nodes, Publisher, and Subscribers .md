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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUOEJMB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDo0yutxeA0FOw8ZeVV0btw4ttTX%2B2xoDjF5NyX6s8h%2FAIhAMzL42Itiu0L2HasyCxcjTNgTTzQVI%2BwfkF3G82esrFdKv8DCDQQABoMNjM3NDIzMTgzODA1IgytVgUZTBbTmUnw89wq3AMm9KbwSLTl9ATSX%2B45Pz1eMbP77JwbI9a56091iT215CXDznaajaPEfXgebCGkVe25L33ht2ko2Dd89aJPsQfQbQKCD2C4drBsRP9PWZIzrGLGLgw2sQNZF8gIie%2Fh0i7Wa4j0wxGHATQeAqe8e7FWqd9mKmXS%2BGOo9j%2BZpjMo9gjihP1aNo%2BALYFXYnX0zAqdCwAjGb9UfFveC%2F%2BJiPMiEsjxlkfvORld8ehKDz4Py8bpGUmYTgnwZG6TkbBHtRuVKbjp4yxc%2FQn1KjalrdBXtWhxXFNNrBoBlEpyXppqZDRp%2FRuDnsyJvOhbh6DYuksa9FTe%2F8k2kWGjhgm7uGZwV6VDrGvG69YUeHorzZs%2BQRnb%2F5zf8DlHj65H4tG480CCiMbzNnxYBOz15EkCsSAArxl3E7d093cXw5ZwwsfhlG6UDQIa0yeGMOWwXPKm08ct94j6a0x89HLjZRuC%2B7ijxHXBHrwEsdkR%2ByBuON0X9Figm22TtMy%2BMlER7%2BUc9zLG5tW12Qb2IDXqQ%2FGsWPngFoTgnW0LRITpIKnpAMCUY6msmcfE9VF4tEL84%2FSXpdwyHq4r4udkI11NMlf4e0o2PcNL2WRne0KV00vOc4jaHRsmPlfESz1xgDUlAzDXvom9BjqkAdJWtldPXGUCqV8KHgTb14KT1%2BrfaZiE7xi2QMQm1uCGoPUi5ecJ5G5DJjfEWcb3OvOtoirdca6eUn0Zt9BNSJBDQ5h3IojNxdynOQpQPur7SsTxgEDHu3l8B%2FdV1YkEClKZolV7aewgDAN5f1cKw7VcF4tcbn4TGK48FaWRh1Ezc%2B%2F4%2FH%2B6LP4NqqPQmxSzne2LDu1iONx7ZOzUguireulXOc7S&X-Amz-Signature=fee1ca2f9958df91ece90f164e425be3339f489c1d262865d73fd245da1c93b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUOEJMB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDo0yutxeA0FOw8ZeVV0btw4ttTX%2B2xoDjF5NyX6s8h%2FAIhAMzL42Itiu0L2HasyCxcjTNgTTzQVI%2BwfkF3G82esrFdKv8DCDQQABoMNjM3NDIzMTgzODA1IgytVgUZTBbTmUnw89wq3AMm9KbwSLTl9ATSX%2B45Pz1eMbP77JwbI9a56091iT215CXDznaajaPEfXgebCGkVe25L33ht2ko2Dd89aJPsQfQbQKCD2C4drBsRP9PWZIzrGLGLgw2sQNZF8gIie%2Fh0i7Wa4j0wxGHATQeAqe8e7FWqd9mKmXS%2BGOo9j%2BZpjMo9gjihP1aNo%2BALYFXYnX0zAqdCwAjGb9UfFveC%2F%2BJiPMiEsjxlkfvORld8ehKDz4Py8bpGUmYTgnwZG6TkbBHtRuVKbjp4yxc%2FQn1KjalrdBXtWhxXFNNrBoBlEpyXppqZDRp%2FRuDnsyJvOhbh6DYuksa9FTe%2F8k2kWGjhgm7uGZwV6VDrGvG69YUeHorzZs%2BQRnb%2F5zf8DlHj65H4tG480CCiMbzNnxYBOz15EkCsSAArxl3E7d093cXw5ZwwsfhlG6UDQIa0yeGMOWwXPKm08ct94j6a0x89HLjZRuC%2B7ijxHXBHrwEsdkR%2ByBuON0X9Figm22TtMy%2BMlER7%2BUc9zLG5tW12Qb2IDXqQ%2FGsWPngFoTgnW0LRITpIKnpAMCUY6msmcfE9VF4tEL84%2FSXpdwyHq4r4udkI11NMlf4e0o2PcNL2WRne0KV00vOc4jaHRsmPlfESz1xgDUlAzDXvom9BjqkAdJWtldPXGUCqV8KHgTb14KT1%2BrfaZiE7xi2QMQm1uCGoPUi5ecJ5G5DJjfEWcb3OvOtoirdca6eUn0Zt9BNSJBDQ5h3IojNxdynOQpQPur7SsTxgEDHu3l8B%2FdV1YkEClKZolV7aewgDAN5f1cKw7VcF4tcbn4TGK48FaWRh1Ezc%2B%2F4%2FH%2B6LP4NqqPQmxSzne2LDu1iONx7ZOzUguireulXOc7S&X-Amz-Signature=935f2dcbe0224ff560ec11b5f3df50d7a617f3ccc5b1303147768a267cc993c2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUOEJMB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDo0yutxeA0FOw8ZeVV0btw4ttTX%2B2xoDjF5NyX6s8h%2FAIhAMzL42Itiu0L2HasyCxcjTNgTTzQVI%2BwfkF3G82esrFdKv8DCDQQABoMNjM3NDIzMTgzODA1IgytVgUZTBbTmUnw89wq3AMm9KbwSLTl9ATSX%2B45Pz1eMbP77JwbI9a56091iT215CXDznaajaPEfXgebCGkVe25L33ht2ko2Dd89aJPsQfQbQKCD2C4drBsRP9PWZIzrGLGLgw2sQNZF8gIie%2Fh0i7Wa4j0wxGHATQeAqe8e7FWqd9mKmXS%2BGOo9j%2BZpjMo9gjihP1aNo%2BALYFXYnX0zAqdCwAjGb9UfFveC%2F%2BJiPMiEsjxlkfvORld8ehKDz4Py8bpGUmYTgnwZG6TkbBHtRuVKbjp4yxc%2FQn1KjalrdBXtWhxXFNNrBoBlEpyXppqZDRp%2FRuDnsyJvOhbh6DYuksa9FTe%2F8k2kWGjhgm7uGZwV6VDrGvG69YUeHorzZs%2BQRnb%2F5zf8DlHj65H4tG480CCiMbzNnxYBOz15EkCsSAArxl3E7d093cXw5ZwwsfhlG6UDQIa0yeGMOWwXPKm08ct94j6a0x89HLjZRuC%2B7ijxHXBHrwEsdkR%2ByBuON0X9Figm22TtMy%2BMlER7%2BUc9zLG5tW12Qb2IDXqQ%2FGsWPngFoTgnW0LRITpIKnpAMCUY6msmcfE9VF4tEL84%2FSXpdwyHq4r4udkI11NMlf4e0o2PcNL2WRne0KV00vOc4jaHRsmPlfESz1xgDUlAzDXvom9BjqkAdJWtldPXGUCqV8KHgTb14KT1%2BrfaZiE7xi2QMQm1uCGoPUi5ecJ5G5DJjfEWcb3OvOtoirdca6eUn0Zt9BNSJBDQ5h3IojNxdynOQpQPur7SsTxgEDHu3l8B%2FdV1YkEClKZolV7aewgDAN5f1cKw7VcF4tcbn4TGK48FaWRh1Ezc%2B%2F4%2FH%2B6LP4NqqPQmxSzne2LDu1iONx7ZOzUguireulXOc7S&X-Amz-Signature=283253822379b16d52318758481c6079e797363709b0da39dbeb09cfa79460e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUOEJMB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDo0yutxeA0FOw8ZeVV0btw4ttTX%2B2xoDjF5NyX6s8h%2FAIhAMzL42Itiu0L2HasyCxcjTNgTTzQVI%2BwfkF3G82esrFdKv8DCDQQABoMNjM3NDIzMTgzODA1IgytVgUZTBbTmUnw89wq3AMm9KbwSLTl9ATSX%2B45Pz1eMbP77JwbI9a56091iT215CXDznaajaPEfXgebCGkVe25L33ht2ko2Dd89aJPsQfQbQKCD2C4drBsRP9PWZIzrGLGLgw2sQNZF8gIie%2Fh0i7Wa4j0wxGHATQeAqe8e7FWqd9mKmXS%2BGOo9j%2BZpjMo9gjihP1aNo%2BALYFXYnX0zAqdCwAjGb9UfFveC%2F%2BJiPMiEsjxlkfvORld8ehKDz4Py8bpGUmYTgnwZG6TkbBHtRuVKbjp4yxc%2FQn1KjalrdBXtWhxXFNNrBoBlEpyXppqZDRp%2FRuDnsyJvOhbh6DYuksa9FTe%2F8k2kWGjhgm7uGZwV6VDrGvG69YUeHorzZs%2BQRnb%2F5zf8DlHj65H4tG480CCiMbzNnxYBOz15EkCsSAArxl3E7d093cXw5ZwwsfhlG6UDQIa0yeGMOWwXPKm08ct94j6a0x89HLjZRuC%2B7ijxHXBHrwEsdkR%2ByBuON0X9Figm22TtMy%2BMlER7%2BUc9zLG5tW12Qb2IDXqQ%2FGsWPngFoTgnW0LRITpIKnpAMCUY6msmcfE9VF4tEL84%2FSXpdwyHq4r4udkI11NMlf4e0o2PcNL2WRne0KV00vOc4jaHRsmPlfESz1xgDUlAzDXvom9BjqkAdJWtldPXGUCqV8KHgTb14KT1%2BrfaZiE7xi2QMQm1uCGoPUi5ecJ5G5DJjfEWcb3OvOtoirdca6eUn0Zt9BNSJBDQ5h3IojNxdynOQpQPur7SsTxgEDHu3l8B%2FdV1YkEClKZolV7aewgDAN5f1cKw7VcF4tcbn4TGK48FaWRh1Ezc%2B%2F4%2FH%2B6LP4NqqPQmxSzne2LDu1iONx7ZOzUguireulXOc7S&X-Amz-Signature=d8f37a9ffef9290eaef3d18b61e345f4d60464ad1b089cdbf5d2ae7afb5e583a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUOEJMB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDo0yutxeA0FOw8ZeVV0btw4ttTX%2B2xoDjF5NyX6s8h%2FAIhAMzL42Itiu0L2HasyCxcjTNgTTzQVI%2BwfkF3G82esrFdKv8DCDQQABoMNjM3NDIzMTgzODA1IgytVgUZTBbTmUnw89wq3AMm9KbwSLTl9ATSX%2B45Pz1eMbP77JwbI9a56091iT215CXDznaajaPEfXgebCGkVe25L33ht2ko2Dd89aJPsQfQbQKCD2C4drBsRP9PWZIzrGLGLgw2sQNZF8gIie%2Fh0i7Wa4j0wxGHATQeAqe8e7FWqd9mKmXS%2BGOo9j%2BZpjMo9gjihP1aNo%2BALYFXYnX0zAqdCwAjGb9UfFveC%2F%2BJiPMiEsjxlkfvORld8ehKDz4Py8bpGUmYTgnwZG6TkbBHtRuVKbjp4yxc%2FQn1KjalrdBXtWhxXFNNrBoBlEpyXppqZDRp%2FRuDnsyJvOhbh6DYuksa9FTe%2F8k2kWGjhgm7uGZwV6VDrGvG69YUeHorzZs%2BQRnb%2F5zf8DlHj65H4tG480CCiMbzNnxYBOz15EkCsSAArxl3E7d093cXw5ZwwsfhlG6UDQIa0yeGMOWwXPKm08ct94j6a0x89HLjZRuC%2B7ijxHXBHrwEsdkR%2ByBuON0X9Figm22TtMy%2BMlER7%2BUc9zLG5tW12Qb2IDXqQ%2FGsWPngFoTgnW0LRITpIKnpAMCUY6msmcfE9VF4tEL84%2FSXpdwyHq4r4udkI11NMlf4e0o2PcNL2WRne0KV00vOc4jaHRsmPlfESz1xgDUlAzDXvom9BjqkAdJWtldPXGUCqV8KHgTb14KT1%2BrfaZiE7xi2QMQm1uCGoPUi5ecJ5G5DJjfEWcb3OvOtoirdca6eUn0Zt9BNSJBDQ5h3IojNxdynOQpQPur7SsTxgEDHu3l8B%2FdV1YkEClKZolV7aewgDAN5f1cKw7VcF4tcbn4TGK48FaWRh1Ezc%2B%2F4%2FH%2B6LP4NqqPQmxSzne2LDu1iONx7ZOzUguireulXOc7S&X-Amz-Signature=744c4497ec8ac59d2ae7c50b62b6e963da71fd5006459760f92d5e28b69eb22d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUOEJMB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDo0yutxeA0FOw8ZeVV0btw4ttTX%2B2xoDjF5NyX6s8h%2FAIhAMzL42Itiu0L2HasyCxcjTNgTTzQVI%2BwfkF3G82esrFdKv8DCDQQABoMNjM3NDIzMTgzODA1IgytVgUZTBbTmUnw89wq3AMm9KbwSLTl9ATSX%2B45Pz1eMbP77JwbI9a56091iT215CXDznaajaPEfXgebCGkVe25L33ht2ko2Dd89aJPsQfQbQKCD2C4drBsRP9PWZIzrGLGLgw2sQNZF8gIie%2Fh0i7Wa4j0wxGHATQeAqe8e7FWqd9mKmXS%2BGOo9j%2BZpjMo9gjihP1aNo%2BALYFXYnX0zAqdCwAjGb9UfFveC%2F%2BJiPMiEsjxlkfvORld8ehKDz4Py8bpGUmYTgnwZG6TkbBHtRuVKbjp4yxc%2FQn1KjalrdBXtWhxXFNNrBoBlEpyXppqZDRp%2FRuDnsyJvOhbh6DYuksa9FTe%2F8k2kWGjhgm7uGZwV6VDrGvG69YUeHorzZs%2BQRnb%2F5zf8DlHj65H4tG480CCiMbzNnxYBOz15EkCsSAArxl3E7d093cXw5ZwwsfhlG6UDQIa0yeGMOWwXPKm08ct94j6a0x89HLjZRuC%2B7ijxHXBHrwEsdkR%2ByBuON0X9Figm22TtMy%2BMlER7%2BUc9zLG5tW12Qb2IDXqQ%2FGsWPngFoTgnW0LRITpIKnpAMCUY6msmcfE9VF4tEL84%2FSXpdwyHq4r4udkI11NMlf4e0o2PcNL2WRne0KV00vOc4jaHRsmPlfESz1xgDUlAzDXvom9BjqkAdJWtldPXGUCqV8KHgTb14KT1%2BrfaZiE7xi2QMQm1uCGoPUi5ecJ5G5DJjfEWcb3OvOtoirdca6eUn0Zt9BNSJBDQ5h3IojNxdynOQpQPur7SsTxgEDHu3l8B%2FdV1YkEClKZolV7aewgDAN5f1cKw7VcF4tcbn4TGK48FaWRh1Ezc%2B%2F4%2FH%2B6LP4NqqPQmxSzne2LDu1iONx7ZOzUguireulXOc7S&X-Amz-Signature=bf2f6448c23a28fff18ebbb2ee6a5f62bd8b7e7d9ec6143cf9d849c6a8874684&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUOEJMB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDo0yutxeA0FOw8ZeVV0btw4ttTX%2B2xoDjF5NyX6s8h%2FAIhAMzL42Itiu0L2HasyCxcjTNgTTzQVI%2BwfkF3G82esrFdKv8DCDQQABoMNjM3NDIzMTgzODA1IgytVgUZTBbTmUnw89wq3AMm9KbwSLTl9ATSX%2B45Pz1eMbP77JwbI9a56091iT215CXDznaajaPEfXgebCGkVe25L33ht2ko2Dd89aJPsQfQbQKCD2C4drBsRP9PWZIzrGLGLgw2sQNZF8gIie%2Fh0i7Wa4j0wxGHATQeAqe8e7FWqd9mKmXS%2BGOo9j%2BZpjMo9gjihP1aNo%2BALYFXYnX0zAqdCwAjGb9UfFveC%2F%2BJiPMiEsjxlkfvORld8ehKDz4Py8bpGUmYTgnwZG6TkbBHtRuVKbjp4yxc%2FQn1KjalrdBXtWhxXFNNrBoBlEpyXppqZDRp%2FRuDnsyJvOhbh6DYuksa9FTe%2F8k2kWGjhgm7uGZwV6VDrGvG69YUeHorzZs%2BQRnb%2F5zf8DlHj65H4tG480CCiMbzNnxYBOz15EkCsSAArxl3E7d093cXw5ZwwsfhlG6UDQIa0yeGMOWwXPKm08ct94j6a0x89HLjZRuC%2B7ijxHXBHrwEsdkR%2ByBuON0X9Figm22TtMy%2BMlER7%2BUc9zLG5tW12Qb2IDXqQ%2FGsWPngFoTgnW0LRITpIKnpAMCUY6msmcfE9VF4tEL84%2FSXpdwyHq4r4udkI11NMlf4e0o2PcNL2WRne0KV00vOc4jaHRsmPlfESz1xgDUlAzDXvom9BjqkAdJWtldPXGUCqV8KHgTb14KT1%2BrfaZiE7xi2QMQm1uCGoPUi5ecJ5G5DJjfEWcb3OvOtoirdca6eUn0Zt9BNSJBDQ5h3IojNxdynOQpQPur7SsTxgEDHu3l8B%2FdV1YkEClKZolV7aewgDAN5f1cKw7VcF4tcbn4TGK48FaWRh1Ezc%2B%2F4%2FH%2B6LP4NqqPQmxSzne2LDu1iONx7ZOzUguireulXOc7S&X-Amz-Signature=d3742135eafc5535510862113a9e9fc1f97260d0f11437e82d01ddea4c2891b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUOEJMB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDo0yutxeA0FOw8ZeVV0btw4ttTX%2B2xoDjF5NyX6s8h%2FAIhAMzL42Itiu0L2HasyCxcjTNgTTzQVI%2BwfkF3G82esrFdKv8DCDQQABoMNjM3NDIzMTgzODA1IgytVgUZTBbTmUnw89wq3AMm9KbwSLTl9ATSX%2B45Pz1eMbP77JwbI9a56091iT215CXDznaajaPEfXgebCGkVe25L33ht2ko2Dd89aJPsQfQbQKCD2C4drBsRP9PWZIzrGLGLgw2sQNZF8gIie%2Fh0i7Wa4j0wxGHATQeAqe8e7FWqd9mKmXS%2BGOo9j%2BZpjMo9gjihP1aNo%2BALYFXYnX0zAqdCwAjGb9UfFveC%2F%2BJiPMiEsjxlkfvORld8ehKDz4Py8bpGUmYTgnwZG6TkbBHtRuVKbjp4yxc%2FQn1KjalrdBXtWhxXFNNrBoBlEpyXppqZDRp%2FRuDnsyJvOhbh6DYuksa9FTe%2F8k2kWGjhgm7uGZwV6VDrGvG69YUeHorzZs%2BQRnb%2F5zf8DlHj65H4tG480CCiMbzNnxYBOz15EkCsSAArxl3E7d093cXw5ZwwsfhlG6UDQIa0yeGMOWwXPKm08ct94j6a0x89HLjZRuC%2B7ijxHXBHrwEsdkR%2ByBuON0X9Figm22TtMy%2BMlER7%2BUc9zLG5tW12Qb2IDXqQ%2FGsWPngFoTgnW0LRITpIKnpAMCUY6msmcfE9VF4tEL84%2FSXpdwyHq4r4udkI11NMlf4e0o2PcNL2WRne0KV00vOc4jaHRsmPlfESz1xgDUlAzDXvom9BjqkAdJWtldPXGUCqV8KHgTb14KT1%2BrfaZiE7xi2QMQm1uCGoPUi5ecJ5G5DJjfEWcb3OvOtoirdca6eUn0Zt9BNSJBDQ5h3IojNxdynOQpQPur7SsTxgEDHu3l8B%2FdV1YkEClKZolV7aewgDAN5f1cKw7VcF4tcbn4TGK48FaWRh1Ezc%2B%2F4%2FH%2B6LP4NqqPQmxSzne2LDu1iONx7ZOzUguireulXOc7S&X-Amz-Signature=d454193b035b0f0d97d4f0f645f6d0d44ef76b99c2c9ab5691d231d20adccc66&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
