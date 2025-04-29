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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIMQIYC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqg7EGPBn5xO7z7gs6YF1XuVbHhJu1BwOkQ9I5kz0DnAiBrOtqkBiIH4qFXpISO5V8mIioa6uYZ01hffKANEp27iCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZewscYyH1%2BeazWZLKtwDbkO6wSLIIv10K23xnpf7EnOF12bbasN1jsabgfYsDfb72zHODnUn0MkJws7zxa5acYQ5XfvJyWlE0b1bwuv9BZfGw20HVGmA1D%2FSv4%2BCBdRPFiwFqDQDpjIk2WkNIlm9P13eMez6fhnGp%2F7KtHXNGK869AWGdGQIJ8tKIWkpKE9J7ERtYNJ5gh5n8cpGdu%2B9K3Ii56StciOEnzJUeXWtcFVFVcEd1OcWEe6ZUkX4AvJ%2FseV%2F4ZljKOfgB7pQDfTQkRkV5Ag900dL33YwDjaNAJ7rFdyYObrXtX5xoi%2BtEGT9LZYkpuLuq5w%2FFjUA9GYZSGvpr4f%2B7ApywabzRRxoksB%2Flh9jUOv8XrvmMUFQapb5Pae09tbUzHZRzBuDIi%2FwDCYeQgakdY39Rpb2wvJxZBaEzibWSGYtagqLMn9yMmAZebfbWHrCmhwA1RO6D6%2BBcHTcjy4ikUAdChhbvCEapy70jLK5QuaTdPdGJWB86guamQrSdzPbDusEoQQzl2dPXDYA%2BjOqHN2Rh%2BSl4ca563dsQkWwYajMWQeVzbNhU1HCxyIjC8TlGpTXeQne8daSRh0J80Pc9l9oT3VtpTuIiLGUy8NYQ7Wr%2FEUEhu983%2FZRzL3lqfj%2FZPHGePAwtvjDwAY6pgGP0Zf9NIvWc9OgbcbtSZY5zueA2U%2B2X88A8DrccP6BqrakDkZnnCsrwBnOV4hzSLKTQxfB43chMX6QdFbTU3KNoOrxvK9bYbY%2BTcGSCZ9QH2lnOKF70bWye8pN7gxg2wXDd%2FOMb%2Bl5q9KYCjEJYfdhZGjFgFIrr%2FfN24OUzi5TkppOhNvCj8kyohSV2Of5EZKbFOXvkWhlsFFKe%2Fq5bu6wW27bE3d4&X-Amz-Signature=b6aad0bfa430b7659f21c880d7ba3a2993d8cb7a059842b793a00c6cb27cec05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIMQIYC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqg7EGPBn5xO7z7gs6YF1XuVbHhJu1BwOkQ9I5kz0DnAiBrOtqkBiIH4qFXpISO5V8mIioa6uYZ01hffKANEp27iCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZewscYyH1%2BeazWZLKtwDbkO6wSLIIv10K23xnpf7EnOF12bbasN1jsabgfYsDfb72zHODnUn0MkJws7zxa5acYQ5XfvJyWlE0b1bwuv9BZfGw20HVGmA1D%2FSv4%2BCBdRPFiwFqDQDpjIk2WkNIlm9P13eMez6fhnGp%2F7KtHXNGK869AWGdGQIJ8tKIWkpKE9J7ERtYNJ5gh5n8cpGdu%2B9K3Ii56StciOEnzJUeXWtcFVFVcEd1OcWEe6ZUkX4AvJ%2FseV%2F4ZljKOfgB7pQDfTQkRkV5Ag900dL33YwDjaNAJ7rFdyYObrXtX5xoi%2BtEGT9LZYkpuLuq5w%2FFjUA9GYZSGvpr4f%2B7ApywabzRRxoksB%2Flh9jUOv8XrvmMUFQapb5Pae09tbUzHZRzBuDIi%2FwDCYeQgakdY39Rpb2wvJxZBaEzibWSGYtagqLMn9yMmAZebfbWHrCmhwA1RO6D6%2BBcHTcjy4ikUAdChhbvCEapy70jLK5QuaTdPdGJWB86guamQrSdzPbDusEoQQzl2dPXDYA%2BjOqHN2Rh%2BSl4ca563dsQkWwYajMWQeVzbNhU1HCxyIjC8TlGpTXeQne8daSRh0J80Pc9l9oT3VtpTuIiLGUy8NYQ7Wr%2FEUEhu983%2FZRzL3lqfj%2FZPHGePAwtvjDwAY6pgGP0Zf9NIvWc9OgbcbtSZY5zueA2U%2B2X88A8DrccP6BqrakDkZnnCsrwBnOV4hzSLKTQxfB43chMX6QdFbTU3KNoOrxvK9bYbY%2BTcGSCZ9QH2lnOKF70bWye8pN7gxg2wXDd%2FOMb%2Bl5q9KYCjEJYfdhZGjFgFIrr%2FfN24OUzi5TkppOhNvCj8kyohSV2Of5EZKbFOXvkWhlsFFKe%2Fq5bu6wW27bE3d4&X-Amz-Signature=97275c8e5f8fdf6459ad3abb27ed9b9334a13c29bef73cebd0f2be2ae172563c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIMQIYC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqg7EGPBn5xO7z7gs6YF1XuVbHhJu1BwOkQ9I5kz0DnAiBrOtqkBiIH4qFXpISO5V8mIioa6uYZ01hffKANEp27iCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZewscYyH1%2BeazWZLKtwDbkO6wSLIIv10K23xnpf7EnOF12bbasN1jsabgfYsDfb72zHODnUn0MkJws7zxa5acYQ5XfvJyWlE0b1bwuv9BZfGw20HVGmA1D%2FSv4%2BCBdRPFiwFqDQDpjIk2WkNIlm9P13eMez6fhnGp%2F7KtHXNGK869AWGdGQIJ8tKIWkpKE9J7ERtYNJ5gh5n8cpGdu%2B9K3Ii56StciOEnzJUeXWtcFVFVcEd1OcWEe6ZUkX4AvJ%2FseV%2F4ZljKOfgB7pQDfTQkRkV5Ag900dL33YwDjaNAJ7rFdyYObrXtX5xoi%2BtEGT9LZYkpuLuq5w%2FFjUA9GYZSGvpr4f%2B7ApywabzRRxoksB%2Flh9jUOv8XrvmMUFQapb5Pae09tbUzHZRzBuDIi%2FwDCYeQgakdY39Rpb2wvJxZBaEzibWSGYtagqLMn9yMmAZebfbWHrCmhwA1RO6D6%2BBcHTcjy4ikUAdChhbvCEapy70jLK5QuaTdPdGJWB86guamQrSdzPbDusEoQQzl2dPXDYA%2BjOqHN2Rh%2BSl4ca563dsQkWwYajMWQeVzbNhU1HCxyIjC8TlGpTXeQne8daSRh0J80Pc9l9oT3VtpTuIiLGUy8NYQ7Wr%2FEUEhu983%2FZRzL3lqfj%2FZPHGePAwtvjDwAY6pgGP0Zf9NIvWc9OgbcbtSZY5zueA2U%2B2X88A8DrccP6BqrakDkZnnCsrwBnOV4hzSLKTQxfB43chMX6QdFbTU3KNoOrxvK9bYbY%2BTcGSCZ9QH2lnOKF70bWye8pN7gxg2wXDd%2FOMb%2Bl5q9KYCjEJYfdhZGjFgFIrr%2FfN24OUzi5TkppOhNvCj8kyohSV2Of5EZKbFOXvkWhlsFFKe%2Fq5bu6wW27bE3d4&X-Amz-Signature=958ef75ebaf742fb520956b90c630331cfd223bf35e499c73044c66426c122df&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIMQIYC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqg7EGPBn5xO7z7gs6YF1XuVbHhJu1BwOkQ9I5kz0DnAiBrOtqkBiIH4qFXpISO5V8mIioa6uYZ01hffKANEp27iCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZewscYyH1%2BeazWZLKtwDbkO6wSLIIv10K23xnpf7EnOF12bbasN1jsabgfYsDfb72zHODnUn0MkJws7zxa5acYQ5XfvJyWlE0b1bwuv9BZfGw20HVGmA1D%2FSv4%2BCBdRPFiwFqDQDpjIk2WkNIlm9P13eMez6fhnGp%2F7KtHXNGK869AWGdGQIJ8tKIWkpKE9J7ERtYNJ5gh5n8cpGdu%2B9K3Ii56StciOEnzJUeXWtcFVFVcEd1OcWEe6ZUkX4AvJ%2FseV%2F4ZljKOfgB7pQDfTQkRkV5Ag900dL33YwDjaNAJ7rFdyYObrXtX5xoi%2BtEGT9LZYkpuLuq5w%2FFjUA9GYZSGvpr4f%2B7ApywabzRRxoksB%2Flh9jUOv8XrvmMUFQapb5Pae09tbUzHZRzBuDIi%2FwDCYeQgakdY39Rpb2wvJxZBaEzibWSGYtagqLMn9yMmAZebfbWHrCmhwA1RO6D6%2BBcHTcjy4ikUAdChhbvCEapy70jLK5QuaTdPdGJWB86guamQrSdzPbDusEoQQzl2dPXDYA%2BjOqHN2Rh%2BSl4ca563dsQkWwYajMWQeVzbNhU1HCxyIjC8TlGpTXeQne8daSRh0J80Pc9l9oT3VtpTuIiLGUy8NYQ7Wr%2FEUEhu983%2FZRzL3lqfj%2FZPHGePAwtvjDwAY6pgGP0Zf9NIvWc9OgbcbtSZY5zueA2U%2B2X88A8DrccP6BqrakDkZnnCsrwBnOV4hzSLKTQxfB43chMX6QdFbTU3KNoOrxvK9bYbY%2BTcGSCZ9QH2lnOKF70bWye8pN7gxg2wXDd%2FOMb%2Bl5q9KYCjEJYfdhZGjFgFIrr%2FfN24OUzi5TkppOhNvCj8kyohSV2Of5EZKbFOXvkWhlsFFKe%2Fq5bu6wW27bE3d4&X-Amz-Signature=96da566589cc5978b042427cdf15b0df244f709519635ae812fe9b49ebe19000&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIMQIYC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqg7EGPBn5xO7z7gs6YF1XuVbHhJu1BwOkQ9I5kz0DnAiBrOtqkBiIH4qFXpISO5V8mIioa6uYZ01hffKANEp27iCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZewscYyH1%2BeazWZLKtwDbkO6wSLIIv10K23xnpf7EnOF12bbasN1jsabgfYsDfb72zHODnUn0MkJws7zxa5acYQ5XfvJyWlE0b1bwuv9BZfGw20HVGmA1D%2FSv4%2BCBdRPFiwFqDQDpjIk2WkNIlm9P13eMez6fhnGp%2F7KtHXNGK869AWGdGQIJ8tKIWkpKE9J7ERtYNJ5gh5n8cpGdu%2B9K3Ii56StciOEnzJUeXWtcFVFVcEd1OcWEe6ZUkX4AvJ%2FseV%2F4ZljKOfgB7pQDfTQkRkV5Ag900dL33YwDjaNAJ7rFdyYObrXtX5xoi%2BtEGT9LZYkpuLuq5w%2FFjUA9GYZSGvpr4f%2B7ApywabzRRxoksB%2Flh9jUOv8XrvmMUFQapb5Pae09tbUzHZRzBuDIi%2FwDCYeQgakdY39Rpb2wvJxZBaEzibWSGYtagqLMn9yMmAZebfbWHrCmhwA1RO6D6%2BBcHTcjy4ikUAdChhbvCEapy70jLK5QuaTdPdGJWB86guamQrSdzPbDusEoQQzl2dPXDYA%2BjOqHN2Rh%2BSl4ca563dsQkWwYajMWQeVzbNhU1HCxyIjC8TlGpTXeQne8daSRh0J80Pc9l9oT3VtpTuIiLGUy8NYQ7Wr%2FEUEhu983%2FZRzL3lqfj%2FZPHGePAwtvjDwAY6pgGP0Zf9NIvWc9OgbcbtSZY5zueA2U%2B2X88A8DrccP6BqrakDkZnnCsrwBnOV4hzSLKTQxfB43chMX6QdFbTU3KNoOrxvK9bYbY%2BTcGSCZ9QH2lnOKF70bWye8pN7gxg2wXDd%2FOMb%2Bl5q9KYCjEJYfdhZGjFgFIrr%2FfN24OUzi5TkppOhNvCj8kyohSV2Of5EZKbFOXvkWhlsFFKe%2Fq5bu6wW27bE3d4&X-Amz-Signature=9441ce7ed5f58e2e8839f3d7983ca38ac459730d9cc582fad7d55141d964b903&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIMQIYC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqg7EGPBn5xO7z7gs6YF1XuVbHhJu1BwOkQ9I5kz0DnAiBrOtqkBiIH4qFXpISO5V8mIioa6uYZ01hffKANEp27iCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZewscYyH1%2BeazWZLKtwDbkO6wSLIIv10K23xnpf7EnOF12bbasN1jsabgfYsDfb72zHODnUn0MkJws7zxa5acYQ5XfvJyWlE0b1bwuv9BZfGw20HVGmA1D%2FSv4%2BCBdRPFiwFqDQDpjIk2WkNIlm9P13eMez6fhnGp%2F7KtHXNGK869AWGdGQIJ8tKIWkpKE9J7ERtYNJ5gh5n8cpGdu%2B9K3Ii56StciOEnzJUeXWtcFVFVcEd1OcWEe6ZUkX4AvJ%2FseV%2F4ZljKOfgB7pQDfTQkRkV5Ag900dL33YwDjaNAJ7rFdyYObrXtX5xoi%2BtEGT9LZYkpuLuq5w%2FFjUA9GYZSGvpr4f%2B7ApywabzRRxoksB%2Flh9jUOv8XrvmMUFQapb5Pae09tbUzHZRzBuDIi%2FwDCYeQgakdY39Rpb2wvJxZBaEzibWSGYtagqLMn9yMmAZebfbWHrCmhwA1RO6D6%2BBcHTcjy4ikUAdChhbvCEapy70jLK5QuaTdPdGJWB86guamQrSdzPbDusEoQQzl2dPXDYA%2BjOqHN2Rh%2BSl4ca563dsQkWwYajMWQeVzbNhU1HCxyIjC8TlGpTXeQne8daSRh0J80Pc9l9oT3VtpTuIiLGUy8NYQ7Wr%2FEUEhu983%2FZRzL3lqfj%2FZPHGePAwtvjDwAY6pgGP0Zf9NIvWc9OgbcbtSZY5zueA2U%2B2X88A8DrccP6BqrakDkZnnCsrwBnOV4hzSLKTQxfB43chMX6QdFbTU3KNoOrxvK9bYbY%2BTcGSCZ9QH2lnOKF70bWye8pN7gxg2wXDd%2FOMb%2Bl5q9KYCjEJYfdhZGjFgFIrr%2FfN24OUzi5TkppOhNvCj8kyohSV2Of5EZKbFOXvkWhlsFFKe%2Fq5bu6wW27bE3d4&X-Amz-Signature=1fd23a92806e8fc516170c26801cba7a8fd2bbec275c8f0f74c2961145810f41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIMQIYC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqg7EGPBn5xO7z7gs6YF1XuVbHhJu1BwOkQ9I5kz0DnAiBrOtqkBiIH4qFXpISO5V8mIioa6uYZ01hffKANEp27iCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZewscYyH1%2BeazWZLKtwDbkO6wSLIIv10K23xnpf7EnOF12bbasN1jsabgfYsDfb72zHODnUn0MkJws7zxa5acYQ5XfvJyWlE0b1bwuv9BZfGw20HVGmA1D%2FSv4%2BCBdRPFiwFqDQDpjIk2WkNIlm9P13eMez6fhnGp%2F7KtHXNGK869AWGdGQIJ8tKIWkpKE9J7ERtYNJ5gh5n8cpGdu%2B9K3Ii56StciOEnzJUeXWtcFVFVcEd1OcWEe6ZUkX4AvJ%2FseV%2F4ZljKOfgB7pQDfTQkRkV5Ag900dL33YwDjaNAJ7rFdyYObrXtX5xoi%2BtEGT9LZYkpuLuq5w%2FFjUA9GYZSGvpr4f%2B7ApywabzRRxoksB%2Flh9jUOv8XrvmMUFQapb5Pae09tbUzHZRzBuDIi%2FwDCYeQgakdY39Rpb2wvJxZBaEzibWSGYtagqLMn9yMmAZebfbWHrCmhwA1RO6D6%2BBcHTcjy4ikUAdChhbvCEapy70jLK5QuaTdPdGJWB86guamQrSdzPbDusEoQQzl2dPXDYA%2BjOqHN2Rh%2BSl4ca563dsQkWwYajMWQeVzbNhU1HCxyIjC8TlGpTXeQne8daSRh0J80Pc9l9oT3VtpTuIiLGUy8NYQ7Wr%2FEUEhu983%2FZRzL3lqfj%2FZPHGePAwtvjDwAY6pgGP0Zf9NIvWc9OgbcbtSZY5zueA2U%2B2X88A8DrccP6BqrakDkZnnCsrwBnOV4hzSLKTQxfB43chMX6QdFbTU3KNoOrxvK9bYbY%2BTcGSCZ9QH2lnOKF70bWye8pN7gxg2wXDd%2FOMb%2Bl5q9KYCjEJYfdhZGjFgFIrr%2FfN24OUzi5TkppOhNvCj8kyohSV2Of5EZKbFOXvkWhlsFFKe%2Fq5bu6wW27bE3d4&X-Amz-Signature=bcf9d411d178c9a9b7b1b10ab7983a8de802186ba3469b58d38c32f4714c6fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIMQIYC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqg7EGPBn5xO7z7gs6YF1XuVbHhJu1BwOkQ9I5kz0DnAiBrOtqkBiIH4qFXpISO5V8mIioa6uYZ01hffKANEp27iCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZewscYyH1%2BeazWZLKtwDbkO6wSLIIv10K23xnpf7EnOF12bbasN1jsabgfYsDfb72zHODnUn0MkJws7zxa5acYQ5XfvJyWlE0b1bwuv9BZfGw20HVGmA1D%2FSv4%2BCBdRPFiwFqDQDpjIk2WkNIlm9P13eMez6fhnGp%2F7KtHXNGK869AWGdGQIJ8tKIWkpKE9J7ERtYNJ5gh5n8cpGdu%2B9K3Ii56StciOEnzJUeXWtcFVFVcEd1OcWEe6ZUkX4AvJ%2FseV%2F4ZljKOfgB7pQDfTQkRkV5Ag900dL33YwDjaNAJ7rFdyYObrXtX5xoi%2BtEGT9LZYkpuLuq5w%2FFjUA9GYZSGvpr4f%2B7ApywabzRRxoksB%2Flh9jUOv8XrvmMUFQapb5Pae09tbUzHZRzBuDIi%2FwDCYeQgakdY39Rpb2wvJxZBaEzibWSGYtagqLMn9yMmAZebfbWHrCmhwA1RO6D6%2BBcHTcjy4ikUAdChhbvCEapy70jLK5QuaTdPdGJWB86guamQrSdzPbDusEoQQzl2dPXDYA%2BjOqHN2Rh%2BSl4ca563dsQkWwYajMWQeVzbNhU1HCxyIjC8TlGpTXeQne8daSRh0J80Pc9l9oT3VtpTuIiLGUy8NYQ7Wr%2FEUEhu983%2FZRzL3lqfj%2FZPHGePAwtvjDwAY6pgGP0Zf9NIvWc9OgbcbtSZY5zueA2U%2B2X88A8DrccP6BqrakDkZnnCsrwBnOV4hzSLKTQxfB43chMX6QdFbTU3KNoOrxvK9bYbY%2BTcGSCZ9QH2lnOKF70bWye8pN7gxg2wXDd%2FOMb%2Bl5q9KYCjEJYfdhZGjFgFIrr%2FfN24OUzi5TkppOhNvCj8kyohSV2Of5EZKbFOXvkWhlsFFKe%2Fq5bu6wW27bE3d4&X-Amz-Signature=6a9d176a3e9d05e7bb04b2f5fa5570c530644b88147f13e4715596d5efef2ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
