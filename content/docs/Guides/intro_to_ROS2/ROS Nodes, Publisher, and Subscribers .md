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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFEO5EP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCRMbfRHMD4xh5qz%2FYahpRcc6oai%2FotfhZ%2BiI0XvJsa5QIhAKviq0KJkApXIVq%2BawiBsfcRWHU2AEo8mMNsaX8ybd1nKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzUXTJLB6zhECQdt4q3ANmRW36X6mCqn911fU9%2Bw3AdoFS5NpH43ndk3IuiEJbNrf%2FJyGmnZJWvC0iMGyzSyexoqC%2FadDztQFs3Unh%2FpKZdZ9AunJs%2FaI9X5WUJJW8fGiKTIkTlcwDYmThwbP3qrVow3%2BBWaEgP%2BULWr84KhuBNfPSRjFZ%2BVToxiEjYtFRBQU%2BeEGQZFZn8%2B%2Fu9DAcFTVRkiPOwgEtTXoPAQSX98pMuwRY7Wny%2FlJjtrfvrYEHKs1If1elEyReCMK3SOdunVxuEHimmz2exOiN2taoI1jQz2H5egjK7ps6Ex1oDAe4mfy%2F53bk73JLvrDCjFxYrEiSEWMHSu0CCfsdI%2BTm%2BFM8aDp0oT7GI4AF36H6%2BzVoEg89X964P5eCh0LfVKexMo5kZpeG9tPjCyFhUgwwklDXLyqZws%2BJ80i7D73t0hN91j6bfQFbEFgQbxcaTHVkx4483LTxzr2P%2B73it%2FGveTph74rr1lDwXgjE58EHrXnfVThTgnR3PM3YOjUhrAdz%2FKMIFPEskhZ%2B6WcW%2FPTJ0Zt2GBRR5AAtFIYTizPsqKhO3zIa0DiJalQWSOoHHHwHa00EiKAqHQiNEPFYfn7LOQW1a7abUxLEGp2sbamMYAE3Lyc%2BRjovPauWOY73vTCZw4nBBjqkAQjXghrjl3qFFFzXw6YvFLe36neW%2FYdTvJua%2BPFO9MCSWLNDS%2BiPbzp8bk8hgkLrhpFBat7hOGiOVCDz4yBT8c1JrDh%2FjrsGuRgu%2F3u9MvvAgCoSKK6m3YSVPEcmGhWSlNd5eK84p9hdv4%2BFs%2FwSxg4GF%2BUaccVRaCmhMNd%2B%2B1UhFvZcaQMRHvWxBe9C7Uq9YhUXup1G9iPcSdHFtfj7uEv3YY3T&X-Amz-Signature=ec509d61ef72099c290ea8e648b6f36ece84e406d37576195604693ff1df6f76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFEO5EP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCRMbfRHMD4xh5qz%2FYahpRcc6oai%2FotfhZ%2BiI0XvJsa5QIhAKviq0KJkApXIVq%2BawiBsfcRWHU2AEo8mMNsaX8ybd1nKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzUXTJLB6zhECQdt4q3ANmRW36X6mCqn911fU9%2Bw3AdoFS5NpH43ndk3IuiEJbNrf%2FJyGmnZJWvC0iMGyzSyexoqC%2FadDztQFs3Unh%2FpKZdZ9AunJs%2FaI9X5WUJJW8fGiKTIkTlcwDYmThwbP3qrVow3%2BBWaEgP%2BULWr84KhuBNfPSRjFZ%2BVToxiEjYtFRBQU%2BeEGQZFZn8%2B%2Fu9DAcFTVRkiPOwgEtTXoPAQSX98pMuwRY7Wny%2FlJjtrfvrYEHKs1If1elEyReCMK3SOdunVxuEHimmz2exOiN2taoI1jQz2H5egjK7ps6Ex1oDAe4mfy%2F53bk73JLvrDCjFxYrEiSEWMHSu0CCfsdI%2BTm%2BFM8aDp0oT7GI4AF36H6%2BzVoEg89X964P5eCh0LfVKexMo5kZpeG9tPjCyFhUgwwklDXLyqZws%2BJ80i7D73t0hN91j6bfQFbEFgQbxcaTHVkx4483LTxzr2P%2B73it%2FGveTph74rr1lDwXgjE58EHrXnfVThTgnR3PM3YOjUhrAdz%2FKMIFPEskhZ%2B6WcW%2FPTJ0Zt2GBRR5AAtFIYTizPsqKhO3zIa0DiJalQWSOoHHHwHa00EiKAqHQiNEPFYfn7LOQW1a7abUxLEGp2sbamMYAE3Lyc%2BRjovPauWOY73vTCZw4nBBjqkAQjXghrjl3qFFFzXw6YvFLe36neW%2FYdTvJua%2BPFO9MCSWLNDS%2BiPbzp8bk8hgkLrhpFBat7hOGiOVCDz4yBT8c1JrDh%2FjrsGuRgu%2F3u9MvvAgCoSKK6m3YSVPEcmGhWSlNd5eK84p9hdv4%2BFs%2FwSxg4GF%2BUaccVRaCmhMNd%2B%2B1UhFvZcaQMRHvWxBe9C7Uq9YhUXup1G9iPcSdHFtfj7uEv3YY3T&X-Amz-Signature=dc9bb43839cc0278e2983d60e29c0b11d86386c227974f38dbb24f63d5db2ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFEO5EP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCRMbfRHMD4xh5qz%2FYahpRcc6oai%2FotfhZ%2BiI0XvJsa5QIhAKviq0KJkApXIVq%2BawiBsfcRWHU2AEo8mMNsaX8ybd1nKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzUXTJLB6zhECQdt4q3ANmRW36X6mCqn911fU9%2Bw3AdoFS5NpH43ndk3IuiEJbNrf%2FJyGmnZJWvC0iMGyzSyexoqC%2FadDztQFs3Unh%2FpKZdZ9AunJs%2FaI9X5WUJJW8fGiKTIkTlcwDYmThwbP3qrVow3%2BBWaEgP%2BULWr84KhuBNfPSRjFZ%2BVToxiEjYtFRBQU%2BeEGQZFZn8%2B%2Fu9DAcFTVRkiPOwgEtTXoPAQSX98pMuwRY7Wny%2FlJjtrfvrYEHKs1If1elEyReCMK3SOdunVxuEHimmz2exOiN2taoI1jQz2H5egjK7ps6Ex1oDAe4mfy%2F53bk73JLvrDCjFxYrEiSEWMHSu0CCfsdI%2BTm%2BFM8aDp0oT7GI4AF36H6%2BzVoEg89X964P5eCh0LfVKexMo5kZpeG9tPjCyFhUgwwklDXLyqZws%2BJ80i7D73t0hN91j6bfQFbEFgQbxcaTHVkx4483LTxzr2P%2B73it%2FGveTph74rr1lDwXgjE58EHrXnfVThTgnR3PM3YOjUhrAdz%2FKMIFPEskhZ%2B6WcW%2FPTJ0Zt2GBRR5AAtFIYTizPsqKhO3zIa0DiJalQWSOoHHHwHa00EiKAqHQiNEPFYfn7LOQW1a7abUxLEGp2sbamMYAE3Lyc%2BRjovPauWOY73vTCZw4nBBjqkAQjXghrjl3qFFFzXw6YvFLe36neW%2FYdTvJua%2BPFO9MCSWLNDS%2BiPbzp8bk8hgkLrhpFBat7hOGiOVCDz4yBT8c1JrDh%2FjrsGuRgu%2F3u9MvvAgCoSKK6m3YSVPEcmGhWSlNd5eK84p9hdv4%2BFs%2FwSxg4GF%2BUaccVRaCmhMNd%2B%2B1UhFvZcaQMRHvWxBe9C7Uq9YhUXup1G9iPcSdHFtfj7uEv3YY3T&X-Amz-Signature=878c1ec4e63954236bb624b93740fe4d30412b5dde52a312074e3c732a6b93a9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFEO5EP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCRMbfRHMD4xh5qz%2FYahpRcc6oai%2FotfhZ%2BiI0XvJsa5QIhAKviq0KJkApXIVq%2BawiBsfcRWHU2AEo8mMNsaX8ybd1nKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzUXTJLB6zhECQdt4q3ANmRW36X6mCqn911fU9%2Bw3AdoFS5NpH43ndk3IuiEJbNrf%2FJyGmnZJWvC0iMGyzSyexoqC%2FadDztQFs3Unh%2FpKZdZ9AunJs%2FaI9X5WUJJW8fGiKTIkTlcwDYmThwbP3qrVow3%2BBWaEgP%2BULWr84KhuBNfPSRjFZ%2BVToxiEjYtFRBQU%2BeEGQZFZn8%2B%2Fu9DAcFTVRkiPOwgEtTXoPAQSX98pMuwRY7Wny%2FlJjtrfvrYEHKs1If1elEyReCMK3SOdunVxuEHimmz2exOiN2taoI1jQz2H5egjK7ps6Ex1oDAe4mfy%2F53bk73JLvrDCjFxYrEiSEWMHSu0CCfsdI%2BTm%2BFM8aDp0oT7GI4AF36H6%2BzVoEg89X964P5eCh0LfVKexMo5kZpeG9tPjCyFhUgwwklDXLyqZws%2BJ80i7D73t0hN91j6bfQFbEFgQbxcaTHVkx4483LTxzr2P%2B73it%2FGveTph74rr1lDwXgjE58EHrXnfVThTgnR3PM3YOjUhrAdz%2FKMIFPEskhZ%2B6WcW%2FPTJ0Zt2GBRR5AAtFIYTizPsqKhO3zIa0DiJalQWSOoHHHwHa00EiKAqHQiNEPFYfn7LOQW1a7abUxLEGp2sbamMYAE3Lyc%2BRjovPauWOY73vTCZw4nBBjqkAQjXghrjl3qFFFzXw6YvFLe36neW%2FYdTvJua%2BPFO9MCSWLNDS%2BiPbzp8bk8hgkLrhpFBat7hOGiOVCDz4yBT8c1JrDh%2FjrsGuRgu%2F3u9MvvAgCoSKK6m3YSVPEcmGhWSlNd5eK84p9hdv4%2BFs%2FwSxg4GF%2BUaccVRaCmhMNd%2B%2B1UhFvZcaQMRHvWxBe9C7Uq9YhUXup1G9iPcSdHFtfj7uEv3YY3T&X-Amz-Signature=b90c4d3d3fcde22d24d52073f48c53ec90057846f05e98232132ada4362275a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFEO5EP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCRMbfRHMD4xh5qz%2FYahpRcc6oai%2FotfhZ%2BiI0XvJsa5QIhAKviq0KJkApXIVq%2BawiBsfcRWHU2AEo8mMNsaX8ybd1nKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzUXTJLB6zhECQdt4q3ANmRW36X6mCqn911fU9%2Bw3AdoFS5NpH43ndk3IuiEJbNrf%2FJyGmnZJWvC0iMGyzSyexoqC%2FadDztQFs3Unh%2FpKZdZ9AunJs%2FaI9X5WUJJW8fGiKTIkTlcwDYmThwbP3qrVow3%2BBWaEgP%2BULWr84KhuBNfPSRjFZ%2BVToxiEjYtFRBQU%2BeEGQZFZn8%2B%2Fu9DAcFTVRkiPOwgEtTXoPAQSX98pMuwRY7Wny%2FlJjtrfvrYEHKs1If1elEyReCMK3SOdunVxuEHimmz2exOiN2taoI1jQz2H5egjK7ps6Ex1oDAe4mfy%2F53bk73JLvrDCjFxYrEiSEWMHSu0CCfsdI%2BTm%2BFM8aDp0oT7GI4AF36H6%2BzVoEg89X964P5eCh0LfVKexMo5kZpeG9tPjCyFhUgwwklDXLyqZws%2BJ80i7D73t0hN91j6bfQFbEFgQbxcaTHVkx4483LTxzr2P%2B73it%2FGveTph74rr1lDwXgjE58EHrXnfVThTgnR3PM3YOjUhrAdz%2FKMIFPEskhZ%2B6WcW%2FPTJ0Zt2GBRR5AAtFIYTizPsqKhO3zIa0DiJalQWSOoHHHwHa00EiKAqHQiNEPFYfn7LOQW1a7abUxLEGp2sbamMYAE3Lyc%2BRjovPauWOY73vTCZw4nBBjqkAQjXghrjl3qFFFzXw6YvFLe36neW%2FYdTvJua%2BPFO9MCSWLNDS%2BiPbzp8bk8hgkLrhpFBat7hOGiOVCDz4yBT8c1JrDh%2FjrsGuRgu%2F3u9MvvAgCoSKK6m3YSVPEcmGhWSlNd5eK84p9hdv4%2BFs%2FwSxg4GF%2BUaccVRaCmhMNd%2B%2B1UhFvZcaQMRHvWxBe9C7Uq9YhUXup1G9iPcSdHFtfj7uEv3YY3T&X-Amz-Signature=49b8b5de7da4f676a410021decd001e584a1f063efc4461c0191224829f97bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFEO5EP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCRMbfRHMD4xh5qz%2FYahpRcc6oai%2FotfhZ%2BiI0XvJsa5QIhAKviq0KJkApXIVq%2BawiBsfcRWHU2AEo8mMNsaX8ybd1nKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzUXTJLB6zhECQdt4q3ANmRW36X6mCqn911fU9%2Bw3AdoFS5NpH43ndk3IuiEJbNrf%2FJyGmnZJWvC0iMGyzSyexoqC%2FadDztQFs3Unh%2FpKZdZ9AunJs%2FaI9X5WUJJW8fGiKTIkTlcwDYmThwbP3qrVow3%2BBWaEgP%2BULWr84KhuBNfPSRjFZ%2BVToxiEjYtFRBQU%2BeEGQZFZn8%2B%2Fu9DAcFTVRkiPOwgEtTXoPAQSX98pMuwRY7Wny%2FlJjtrfvrYEHKs1If1elEyReCMK3SOdunVxuEHimmz2exOiN2taoI1jQz2H5egjK7ps6Ex1oDAe4mfy%2F53bk73JLvrDCjFxYrEiSEWMHSu0CCfsdI%2BTm%2BFM8aDp0oT7GI4AF36H6%2BzVoEg89X964P5eCh0LfVKexMo5kZpeG9tPjCyFhUgwwklDXLyqZws%2BJ80i7D73t0hN91j6bfQFbEFgQbxcaTHVkx4483LTxzr2P%2B73it%2FGveTph74rr1lDwXgjE58EHrXnfVThTgnR3PM3YOjUhrAdz%2FKMIFPEskhZ%2B6WcW%2FPTJ0Zt2GBRR5AAtFIYTizPsqKhO3zIa0DiJalQWSOoHHHwHa00EiKAqHQiNEPFYfn7LOQW1a7abUxLEGp2sbamMYAE3Lyc%2BRjovPauWOY73vTCZw4nBBjqkAQjXghrjl3qFFFzXw6YvFLe36neW%2FYdTvJua%2BPFO9MCSWLNDS%2BiPbzp8bk8hgkLrhpFBat7hOGiOVCDz4yBT8c1JrDh%2FjrsGuRgu%2F3u9MvvAgCoSKK6m3YSVPEcmGhWSlNd5eK84p9hdv4%2BFs%2FwSxg4GF%2BUaccVRaCmhMNd%2B%2B1UhFvZcaQMRHvWxBe9C7Uq9YhUXup1G9iPcSdHFtfj7uEv3YY3T&X-Amz-Signature=dc7bf372449df1e132e5936739fe201fb4f97b3bef31e676ac42a709e91b5339&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFEO5EP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCRMbfRHMD4xh5qz%2FYahpRcc6oai%2FotfhZ%2BiI0XvJsa5QIhAKviq0KJkApXIVq%2BawiBsfcRWHU2AEo8mMNsaX8ybd1nKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzUXTJLB6zhECQdt4q3ANmRW36X6mCqn911fU9%2Bw3AdoFS5NpH43ndk3IuiEJbNrf%2FJyGmnZJWvC0iMGyzSyexoqC%2FadDztQFs3Unh%2FpKZdZ9AunJs%2FaI9X5WUJJW8fGiKTIkTlcwDYmThwbP3qrVow3%2BBWaEgP%2BULWr84KhuBNfPSRjFZ%2BVToxiEjYtFRBQU%2BeEGQZFZn8%2B%2Fu9DAcFTVRkiPOwgEtTXoPAQSX98pMuwRY7Wny%2FlJjtrfvrYEHKs1If1elEyReCMK3SOdunVxuEHimmz2exOiN2taoI1jQz2H5egjK7ps6Ex1oDAe4mfy%2F53bk73JLvrDCjFxYrEiSEWMHSu0CCfsdI%2BTm%2BFM8aDp0oT7GI4AF36H6%2BzVoEg89X964P5eCh0LfVKexMo5kZpeG9tPjCyFhUgwwklDXLyqZws%2BJ80i7D73t0hN91j6bfQFbEFgQbxcaTHVkx4483LTxzr2P%2B73it%2FGveTph74rr1lDwXgjE58EHrXnfVThTgnR3PM3YOjUhrAdz%2FKMIFPEskhZ%2B6WcW%2FPTJ0Zt2GBRR5AAtFIYTizPsqKhO3zIa0DiJalQWSOoHHHwHa00EiKAqHQiNEPFYfn7LOQW1a7abUxLEGp2sbamMYAE3Lyc%2BRjovPauWOY73vTCZw4nBBjqkAQjXghrjl3qFFFzXw6YvFLe36neW%2FYdTvJua%2BPFO9MCSWLNDS%2BiPbzp8bk8hgkLrhpFBat7hOGiOVCDz4yBT8c1JrDh%2FjrsGuRgu%2F3u9MvvAgCoSKK6m3YSVPEcmGhWSlNd5eK84p9hdv4%2BFs%2FwSxg4GF%2BUaccVRaCmhMNd%2B%2B1UhFvZcaQMRHvWxBe9C7Uq9YhUXup1G9iPcSdHFtfj7uEv3YY3T&X-Amz-Signature=af1015377a97e1571f3dda2f34e9fa349eca6c9ef5413eee457d64b1a2e8b4ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFEO5EP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCRMbfRHMD4xh5qz%2FYahpRcc6oai%2FotfhZ%2BiI0XvJsa5QIhAKviq0KJkApXIVq%2BawiBsfcRWHU2AEo8mMNsaX8ybd1nKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzUXTJLB6zhECQdt4q3ANmRW36X6mCqn911fU9%2Bw3AdoFS5NpH43ndk3IuiEJbNrf%2FJyGmnZJWvC0iMGyzSyexoqC%2FadDztQFs3Unh%2FpKZdZ9AunJs%2FaI9X5WUJJW8fGiKTIkTlcwDYmThwbP3qrVow3%2BBWaEgP%2BULWr84KhuBNfPSRjFZ%2BVToxiEjYtFRBQU%2BeEGQZFZn8%2B%2Fu9DAcFTVRkiPOwgEtTXoPAQSX98pMuwRY7Wny%2FlJjtrfvrYEHKs1If1elEyReCMK3SOdunVxuEHimmz2exOiN2taoI1jQz2H5egjK7ps6Ex1oDAe4mfy%2F53bk73JLvrDCjFxYrEiSEWMHSu0CCfsdI%2BTm%2BFM8aDp0oT7GI4AF36H6%2BzVoEg89X964P5eCh0LfVKexMo5kZpeG9tPjCyFhUgwwklDXLyqZws%2BJ80i7D73t0hN91j6bfQFbEFgQbxcaTHVkx4483LTxzr2P%2B73it%2FGveTph74rr1lDwXgjE58EHrXnfVThTgnR3PM3YOjUhrAdz%2FKMIFPEskhZ%2B6WcW%2FPTJ0Zt2GBRR5AAtFIYTizPsqKhO3zIa0DiJalQWSOoHHHwHa00EiKAqHQiNEPFYfn7LOQW1a7abUxLEGp2sbamMYAE3Lyc%2BRjovPauWOY73vTCZw4nBBjqkAQjXghrjl3qFFFzXw6YvFLe36neW%2FYdTvJua%2BPFO9MCSWLNDS%2BiPbzp8bk8hgkLrhpFBat7hOGiOVCDz4yBT8c1JrDh%2FjrsGuRgu%2F3u9MvvAgCoSKK6m3YSVPEcmGhWSlNd5eK84p9hdv4%2BFs%2FwSxg4GF%2BUaccVRaCmhMNd%2B%2B1UhFvZcaQMRHvWxBe9C7Uq9YhUXup1G9iPcSdHFtfj7uEv3YY3T&X-Amz-Signature=d1bf263f8eb3f8a90a46934836e2421d674c4970856b326fe35243e3bfa5cca6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
