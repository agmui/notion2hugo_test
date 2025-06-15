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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLEC3K5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTWnPj60RUIKogorOhg9MTQwLObfMeEHzhKUnesNyEygIhANXeWIVfWmDP6an9kry9XCF5X6BHOeOb3UYhq0Sv%2Fh3zKv8DCE0QABoMNjM3NDIzMTgzODA1IgzqRMrZ%2BrZhliuJNQsq3ANHfYD1bV34rLwwe%2FLNO0DXDLRwl6tkr4sHG1hqXxq77cAsXrLVL8%2F%2BMg0nmfxmOCfWWlGZ9P1xouds8PAQ7bcgydV%2FkWIG7bKtq6MDb8%2FlLXNjxGCyo82RBw3pbrGrpSp5GHPomD0qqcAR3TodUBo1EpovnBnOv4Q7vs3%2FWPXeZncJdZ3O5CmaT1d3Vprdeq9280hRAhqu0lxLBhhUluNnh5KeMazpvH0QO7exTosNQt70O%2BKYI%2FWYcaUhvD6xHMI72plAj5iViWMaYfynTNXFHxWFtxPZv9nMdqCwRc7wCgSckV%2BL3zACWTkyJfrXjJkJ6TYTba1ws7W5AjuJr9U4CWw5M3JwFOYMbE%2FM4RuQu5YGtOGtmYKHGrvkyPLGCcaQDHdK5NK0aONk2LJli33MaR%2FtXiHCdStV14wwkDMdIl32c1UWl2GyEZzv%2B1B6CU%2Fpf6CoHtb8Ru3mpPZNfYBpbk%2B5y9rK9HnReDnSMr6wWB1Wl1Nd2zRrKX7Alqk9dR4snJKheLkyj2HFKBBvEh2KKDUZl%2Bo5LT4U8m4%2FHvrDCRGkP0JwE0bSNAmw5Kq87kOFO2aHOFXXUhXboeCdzUn3XzSQa8cQpJHOnBf2auXhKrZXh6LTBHfrs%2FCwKzDNzrzCBjqkASr9DgxZjv3r0aJOH%2BAo%2FqQSniZNZykcNDsaurZCmPxxC5nyRmvsYpaX9viFG1rffuLPjZYF4D%2FD88GsHl1pG%2BPlrKyGMXwhb8XR8NbLxM3WtQMjvUGTMwTUJCrGbMVCNF4xztqPJg%2Bfy5Cnopq273ayBH8P8AoKnIfvS7gItkdko0AOzPPG9d2G6fiIMQDbUqlN2S%2FAnBaBT7vF3KBxiJlibBZy&X-Amz-Signature=97d306c421ad1ca12141caa7b19fdf1592c4ba3b67538265c057d9fc80538a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLEC3K5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTWnPj60RUIKogorOhg9MTQwLObfMeEHzhKUnesNyEygIhANXeWIVfWmDP6an9kry9XCF5X6BHOeOb3UYhq0Sv%2Fh3zKv8DCE0QABoMNjM3NDIzMTgzODA1IgzqRMrZ%2BrZhliuJNQsq3ANHfYD1bV34rLwwe%2FLNO0DXDLRwl6tkr4sHG1hqXxq77cAsXrLVL8%2F%2BMg0nmfxmOCfWWlGZ9P1xouds8PAQ7bcgydV%2FkWIG7bKtq6MDb8%2FlLXNjxGCyo82RBw3pbrGrpSp5GHPomD0qqcAR3TodUBo1EpovnBnOv4Q7vs3%2FWPXeZncJdZ3O5CmaT1d3Vprdeq9280hRAhqu0lxLBhhUluNnh5KeMazpvH0QO7exTosNQt70O%2BKYI%2FWYcaUhvD6xHMI72plAj5iViWMaYfynTNXFHxWFtxPZv9nMdqCwRc7wCgSckV%2BL3zACWTkyJfrXjJkJ6TYTba1ws7W5AjuJr9U4CWw5M3JwFOYMbE%2FM4RuQu5YGtOGtmYKHGrvkyPLGCcaQDHdK5NK0aONk2LJli33MaR%2FtXiHCdStV14wwkDMdIl32c1UWl2GyEZzv%2B1B6CU%2Fpf6CoHtb8Ru3mpPZNfYBpbk%2B5y9rK9HnReDnSMr6wWB1Wl1Nd2zRrKX7Alqk9dR4snJKheLkyj2HFKBBvEh2KKDUZl%2Bo5LT4U8m4%2FHvrDCRGkP0JwE0bSNAmw5Kq87kOFO2aHOFXXUhXboeCdzUn3XzSQa8cQpJHOnBf2auXhKrZXh6LTBHfrs%2FCwKzDNzrzCBjqkASr9DgxZjv3r0aJOH%2BAo%2FqQSniZNZykcNDsaurZCmPxxC5nyRmvsYpaX9viFG1rffuLPjZYF4D%2FD88GsHl1pG%2BPlrKyGMXwhb8XR8NbLxM3WtQMjvUGTMwTUJCrGbMVCNF4xztqPJg%2Bfy5Cnopq273ayBH8P8AoKnIfvS7gItkdko0AOzPPG9d2G6fiIMQDbUqlN2S%2FAnBaBT7vF3KBxiJlibBZy&X-Amz-Signature=fd237fb0f186c759056f0d677a880cfff84ad0b05e1a8f28d4cf3aef6d42fdfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLEC3K5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTWnPj60RUIKogorOhg9MTQwLObfMeEHzhKUnesNyEygIhANXeWIVfWmDP6an9kry9XCF5X6BHOeOb3UYhq0Sv%2Fh3zKv8DCE0QABoMNjM3NDIzMTgzODA1IgzqRMrZ%2BrZhliuJNQsq3ANHfYD1bV34rLwwe%2FLNO0DXDLRwl6tkr4sHG1hqXxq77cAsXrLVL8%2F%2BMg0nmfxmOCfWWlGZ9P1xouds8PAQ7bcgydV%2FkWIG7bKtq6MDb8%2FlLXNjxGCyo82RBw3pbrGrpSp5GHPomD0qqcAR3TodUBo1EpovnBnOv4Q7vs3%2FWPXeZncJdZ3O5CmaT1d3Vprdeq9280hRAhqu0lxLBhhUluNnh5KeMazpvH0QO7exTosNQt70O%2BKYI%2FWYcaUhvD6xHMI72plAj5iViWMaYfynTNXFHxWFtxPZv9nMdqCwRc7wCgSckV%2BL3zACWTkyJfrXjJkJ6TYTba1ws7W5AjuJr9U4CWw5M3JwFOYMbE%2FM4RuQu5YGtOGtmYKHGrvkyPLGCcaQDHdK5NK0aONk2LJli33MaR%2FtXiHCdStV14wwkDMdIl32c1UWl2GyEZzv%2B1B6CU%2Fpf6CoHtb8Ru3mpPZNfYBpbk%2B5y9rK9HnReDnSMr6wWB1Wl1Nd2zRrKX7Alqk9dR4snJKheLkyj2HFKBBvEh2KKDUZl%2Bo5LT4U8m4%2FHvrDCRGkP0JwE0bSNAmw5Kq87kOFO2aHOFXXUhXboeCdzUn3XzSQa8cQpJHOnBf2auXhKrZXh6LTBHfrs%2FCwKzDNzrzCBjqkASr9DgxZjv3r0aJOH%2BAo%2FqQSniZNZykcNDsaurZCmPxxC5nyRmvsYpaX9viFG1rffuLPjZYF4D%2FD88GsHl1pG%2BPlrKyGMXwhb8XR8NbLxM3WtQMjvUGTMwTUJCrGbMVCNF4xztqPJg%2Bfy5Cnopq273ayBH8P8AoKnIfvS7gItkdko0AOzPPG9d2G6fiIMQDbUqlN2S%2FAnBaBT7vF3KBxiJlibBZy&X-Amz-Signature=3442c3eaa8596ef49b273dbda1943a6ae36a48f00e70f6243e2019e15722267a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLEC3K5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTWnPj60RUIKogorOhg9MTQwLObfMeEHzhKUnesNyEygIhANXeWIVfWmDP6an9kry9XCF5X6BHOeOb3UYhq0Sv%2Fh3zKv8DCE0QABoMNjM3NDIzMTgzODA1IgzqRMrZ%2BrZhliuJNQsq3ANHfYD1bV34rLwwe%2FLNO0DXDLRwl6tkr4sHG1hqXxq77cAsXrLVL8%2F%2BMg0nmfxmOCfWWlGZ9P1xouds8PAQ7bcgydV%2FkWIG7bKtq6MDb8%2FlLXNjxGCyo82RBw3pbrGrpSp5GHPomD0qqcAR3TodUBo1EpovnBnOv4Q7vs3%2FWPXeZncJdZ3O5CmaT1d3Vprdeq9280hRAhqu0lxLBhhUluNnh5KeMazpvH0QO7exTosNQt70O%2BKYI%2FWYcaUhvD6xHMI72plAj5iViWMaYfynTNXFHxWFtxPZv9nMdqCwRc7wCgSckV%2BL3zACWTkyJfrXjJkJ6TYTba1ws7W5AjuJr9U4CWw5M3JwFOYMbE%2FM4RuQu5YGtOGtmYKHGrvkyPLGCcaQDHdK5NK0aONk2LJli33MaR%2FtXiHCdStV14wwkDMdIl32c1UWl2GyEZzv%2B1B6CU%2Fpf6CoHtb8Ru3mpPZNfYBpbk%2B5y9rK9HnReDnSMr6wWB1Wl1Nd2zRrKX7Alqk9dR4snJKheLkyj2HFKBBvEh2KKDUZl%2Bo5LT4U8m4%2FHvrDCRGkP0JwE0bSNAmw5Kq87kOFO2aHOFXXUhXboeCdzUn3XzSQa8cQpJHOnBf2auXhKrZXh6LTBHfrs%2FCwKzDNzrzCBjqkASr9DgxZjv3r0aJOH%2BAo%2FqQSniZNZykcNDsaurZCmPxxC5nyRmvsYpaX9viFG1rffuLPjZYF4D%2FD88GsHl1pG%2BPlrKyGMXwhb8XR8NbLxM3WtQMjvUGTMwTUJCrGbMVCNF4xztqPJg%2Bfy5Cnopq273ayBH8P8AoKnIfvS7gItkdko0AOzPPG9d2G6fiIMQDbUqlN2S%2FAnBaBT7vF3KBxiJlibBZy&X-Amz-Signature=e93cd081b265264ca81b27b38a90fdeba660e13269e406428a3bc7d04855721e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLEC3K5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTWnPj60RUIKogorOhg9MTQwLObfMeEHzhKUnesNyEygIhANXeWIVfWmDP6an9kry9XCF5X6BHOeOb3UYhq0Sv%2Fh3zKv8DCE0QABoMNjM3NDIzMTgzODA1IgzqRMrZ%2BrZhliuJNQsq3ANHfYD1bV34rLwwe%2FLNO0DXDLRwl6tkr4sHG1hqXxq77cAsXrLVL8%2F%2BMg0nmfxmOCfWWlGZ9P1xouds8PAQ7bcgydV%2FkWIG7bKtq6MDb8%2FlLXNjxGCyo82RBw3pbrGrpSp5GHPomD0qqcAR3TodUBo1EpovnBnOv4Q7vs3%2FWPXeZncJdZ3O5CmaT1d3Vprdeq9280hRAhqu0lxLBhhUluNnh5KeMazpvH0QO7exTosNQt70O%2BKYI%2FWYcaUhvD6xHMI72plAj5iViWMaYfynTNXFHxWFtxPZv9nMdqCwRc7wCgSckV%2BL3zACWTkyJfrXjJkJ6TYTba1ws7W5AjuJr9U4CWw5M3JwFOYMbE%2FM4RuQu5YGtOGtmYKHGrvkyPLGCcaQDHdK5NK0aONk2LJli33MaR%2FtXiHCdStV14wwkDMdIl32c1UWl2GyEZzv%2B1B6CU%2Fpf6CoHtb8Ru3mpPZNfYBpbk%2B5y9rK9HnReDnSMr6wWB1Wl1Nd2zRrKX7Alqk9dR4snJKheLkyj2HFKBBvEh2KKDUZl%2Bo5LT4U8m4%2FHvrDCRGkP0JwE0bSNAmw5Kq87kOFO2aHOFXXUhXboeCdzUn3XzSQa8cQpJHOnBf2auXhKrZXh6LTBHfrs%2FCwKzDNzrzCBjqkASr9DgxZjv3r0aJOH%2BAo%2FqQSniZNZykcNDsaurZCmPxxC5nyRmvsYpaX9viFG1rffuLPjZYF4D%2FD88GsHl1pG%2BPlrKyGMXwhb8XR8NbLxM3WtQMjvUGTMwTUJCrGbMVCNF4xztqPJg%2Bfy5Cnopq273ayBH8P8AoKnIfvS7gItkdko0AOzPPG9d2G6fiIMQDbUqlN2S%2FAnBaBT7vF3KBxiJlibBZy&X-Amz-Signature=caeea7b914a467d5d078a3ef2506f9309d4795a4f403081a536edf688a33428a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLEC3K5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTWnPj60RUIKogorOhg9MTQwLObfMeEHzhKUnesNyEygIhANXeWIVfWmDP6an9kry9XCF5X6BHOeOb3UYhq0Sv%2Fh3zKv8DCE0QABoMNjM3NDIzMTgzODA1IgzqRMrZ%2BrZhliuJNQsq3ANHfYD1bV34rLwwe%2FLNO0DXDLRwl6tkr4sHG1hqXxq77cAsXrLVL8%2F%2BMg0nmfxmOCfWWlGZ9P1xouds8PAQ7bcgydV%2FkWIG7bKtq6MDb8%2FlLXNjxGCyo82RBw3pbrGrpSp5GHPomD0qqcAR3TodUBo1EpovnBnOv4Q7vs3%2FWPXeZncJdZ3O5CmaT1d3Vprdeq9280hRAhqu0lxLBhhUluNnh5KeMazpvH0QO7exTosNQt70O%2BKYI%2FWYcaUhvD6xHMI72plAj5iViWMaYfynTNXFHxWFtxPZv9nMdqCwRc7wCgSckV%2BL3zACWTkyJfrXjJkJ6TYTba1ws7W5AjuJr9U4CWw5M3JwFOYMbE%2FM4RuQu5YGtOGtmYKHGrvkyPLGCcaQDHdK5NK0aONk2LJli33MaR%2FtXiHCdStV14wwkDMdIl32c1UWl2GyEZzv%2B1B6CU%2Fpf6CoHtb8Ru3mpPZNfYBpbk%2B5y9rK9HnReDnSMr6wWB1Wl1Nd2zRrKX7Alqk9dR4snJKheLkyj2HFKBBvEh2KKDUZl%2Bo5LT4U8m4%2FHvrDCRGkP0JwE0bSNAmw5Kq87kOFO2aHOFXXUhXboeCdzUn3XzSQa8cQpJHOnBf2auXhKrZXh6LTBHfrs%2FCwKzDNzrzCBjqkASr9DgxZjv3r0aJOH%2BAo%2FqQSniZNZykcNDsaurZCmPxxC5nyRmvsYpaX9viFG1rffuLPjZYF4D%2FD88GsHl1pG%2BPlrKyGMXwhb8XR8NbLxM3WtQMjvUGTMwTUJCrGbMVCNF4xztqPJg%2Bfy5Cnopq273ayBH8P8AoKnIfvS7gItkdko0AOzPPG9d2G6fiIMQDbUqlN2S%2FAnBaBT7vF3KBxiJlibBZy&X-Amz-Signature=d100a1d8111a007e587d2265a415d792b10eb4b636b53e081c4c2f41a33eef17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLEC3K5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTWnPj60RUIKogorOhg9MTQwLObfMeEHzhKUnesNyEygIhANXeWIVfWmDP6an9kry9XCF5X6BHOeOb3UYhq0Sv%2Fh3zKv8DCE0QABoMNjM3NDIzMTgzODA1IgzqRMrZ%2BrZhliuJNQsq3ANHfYD1bV34rLwwe%2FLNO0DXDLRwl6tkr4sHG1hqXxq77cAsXrLVL8%2F%2BMg0nmfxmOCfWWlGZ9P1xouds8PAQ7bcgydV%2FkWIG7bKtq6MDb8%2FlLXNjxGCyo82RBw3pbrGrpSp5GHPomD0qqcAR3TodUBo1EpovnBnOv4Q7vs3%2FWPXeZncJdZ3O5CmaT1d3Vprdeq9280hRAhqu0lxLBhhUluNnh5KeMazpvH0QO7exTosNQt70O%2BKYI%2FWYcaUhvD6xHMI72plAj5iViWMaYfynTNXFHxWFtxPZv9nMdqCwRc7wCgSckV%2BL3zACWTkyJfrXjJkJ6TYTba1ws7W5AjuJr9U4CWw5M3JwFOYMbE%2FM4RuQu5YGtOGtmYKHGrvkyPLGCcaQDHdK5NK0aONk2LJli33MaR%2FtXiHCdStV14wwkDMdIl32c1UWl2GyEZzv%2B1B6CU%2Fpf6CoHtb8Ru3mpPZNfYBpbk%2B5y9rK9HnReDnSMr6wWB1Wl1Nd2zRrKX7Alqk9dR4snJKheLkyj2HFKBBvEh2KKDUZl%2Bo5LT4U8m4%2FHvrDCRGkP0JwE0bSNAmw5Kq87kOFO2aHOFXXUhXboeCdzUn3XzSQa8cQpJHOnBf2auXhKrZXh6LTBHfrs%2FCwKzDNzrzCBjqkASr9DgxZjv3r0aJOH%2BAo%2FqQSniZNZykcNDsaurZCmPxxC5nyRmvsYpaX9viFG1rffuLPjZYF4D%2FD88GsHl1pG%2BPlrKyGMXwhb8XR8NbLxM3WtQMjvUGTMwTUJCrGbMVCNF4xztqPJg%2Bfy5Cnopq273ayBH8P8AoKnIfvS7gItkdko0AOzPPG9d2G6fiIMQDbUqlN2S%2FAnBaBT7vF3KBxiJlibBZy&X-Amz-Signature=9a68edd54a92303d3e6b8668380b6945328616b2b0fd8065ca1370f35432fee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLEC3K5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCTWnPj60RUIKogorOhg9MTQwLObfMeEHzhKUnesNyEygIhANXeWIVfWmDP6an9kry9XCF5X6BHOeOb3UYhq0Sv%2Fh3zKv8DCE0QABoMNjM3NDIzMTgzODA1IgzqRMrZ%2BrZhliuJNQsq3ANHfYD1bV34rLwwe%2FLNO0DXDLRwl6tkr4sHG1hqXxq77cAsXrLVL8%2F%2BMg0nmfxmOCfWWlGZ9P1xouds8PAQ7bcgydV%2FkWIG7bKtq6MDb8%2FlLXNjxGCyo82RBw3pbrGrpSp5GHPomD0qqcAR3TodUBo1EpovnBnOv4Q7vs3%2FWPXeZncJdZ3O5CmaT1d3Vprdeq9280hRAhqu0lxLBhhUluNnh5KeMazpvH0QO7exTosNQt70O%2BKYI%2FWYcaUhvD6xHMI72plAj5iViWMaYfynTNXFHxWFtxPZv9nMdqCwRc7wCgSckV%2BL3zACWTkyJfrXjJkJ6TYTba1ws7W5AjuJr9U4CWw5M3JwFOYMbE%2FM4RuQu5YGtOGtmYKHGrvkyPLGCcaQDHdK5NK0aONk2LJli33MaR%2FtXiHCdStV14wwkDMdIl32c1UWl2GyEZzv%2B1B6CU%2Fpf6CoHtb8Ru3mpPZNfYBpbk%2B5y9rK9HnReDnSMr6wWB1Wl1Nd2zRrKX7Alqk9dR4snJKheLkyj2HFKBBvEh2KKDUZl%2Bo5LT4U8m4%2FHvrDCRGkP0JwE0bSNAmw5Kq87kOFO2aHOFXXUhXboeCdzUn3XzSQa8cQpJHOnBf2auXhKrZXh6LTBHfrs%2FCwKzDNzrzCBjqkASr9DgxZjv3r0aJOH%2BAo%2FqQSniZNZykcNDsaurZCmPxxC5nyRmvsYpaX9viFG1rffuLPjZYF4D%2FD88GsHl1pG%2BPlrKyGMXwhb8XR8NbLxM3WtQMjvUGTMwTUJCrGbMVCNF4xztqPJg%2Bfy5Cnopq273ayBH8P8AoKnIfvS7gItkdko0AOzPPG9d2G6fiIMQDbUqlN2S%2FAnBaBT7vF3KBxiJlibBZy&X-Amz-Signature=1714f23efea959e10bb9a09ad017d3da3901b3a43630c941011afba552cc830c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
