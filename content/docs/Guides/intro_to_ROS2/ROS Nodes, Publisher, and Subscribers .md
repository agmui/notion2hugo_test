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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVHXL2W6%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8PIWKM9XUVssNMbmULV0BYABUfMGzB9CVOHb4FXTLSAiALAfEQ0ZTaaNEURvp6LiQLPGPLnqXSQOcFeqVkf8%2FyVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQTOlBvgtGHCL9lcZKtwDepyLfYYevWgeNTCfpFUDtevtikEStWr%2BUQWtjYTmJx7dve8riMC3%2Fr7YMH8d8OhVNZUxMe5e8ksPkAaKbTevx0JAmQdIIVhR%2Byk9f902YqMm1TGHoLvNZRloHswy9EI6U277iTh95YK8c7jQqMQjRcXRhmpoO0iGO5YfF7i9dOTw0HyPJ2krtlvJaAf1SxU8lzeuG%2BHjpcwLgvLT%2B7XFBaXQmfHxySPJ3YP9%2BUv9qT3N6IkRcf9AGeDUDGplHyhfIzqAeTpdZyvX2fHPZ7mRGn9b%2Bvs3o8RSdmjg50hyhFXRwL%2Fh%2BubL2vIyGyh2u%2BWvE8j6RslkpBoGYSts%2F9YCgS1jx9u12bcpmrWZsIwVMZVRIiXWSfJXpLqkNEPXoD7blxXIKhhdI4whiFh6fYmLa6dlXFSy%2BqzwPBdb%2BkRZLLC9yLD%2Fkv6VBKNnnkUTkhC3yPyTTrNV8V6JRhKBTv4ke7KdWZzQmBICNxhGSrZPY%2BHUGzE2H0Np%2F7gMU2X70i3S3tvhluc6i7cDzfVv%2BlkXdpNKubLH6AkYOygrSxJZ1wD%2BbZp38TsF9XJAzJAOoQNuzAUGx09cegJa8zNOoEEtDpziLS8apg%2B%2ByLvgPFJ8W8pBjWsY1Mo5jLNYg1EwiJunwQY6pgGvA5UKaMmO6SyxwI5YShLaSGwZL2BHneNDvABRRRD2aZO5yt%2B%2Bd0BALNf5ZIDLbfGnKALvb1e9E6wDmbSSLtysl0YlPNTlo8LrKuzaW25m%2BUxon%2BOgNwelUhe9brUnJxDm3UQL9XXiWc7WQ%2BYv38e1pboG043QdcDuqUeZPBg6oHwC5XKaaTs%2BQTW8sETbgCXA8bS2AJklIQxQ%2FbYNqkhvBUtQg3VI&X-Amz-Signature=f913b7eb46fcd7baedf131bedd6e642b0f616d23bb573378a8cdbf22155c6764&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVHXL2W6%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8PIWKM9XUVssNMbmULV0BYABUfMGzB9CVOHb4FXTLSAiALAfEQ0ZTaaNEURvp6LiQLPGPLnqXSQOcFeqVkf8%2FyVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQTOlBvgtGHCL9lcZKtwDepyLfYYevWgeNTCfpFUDtevtikEStWr%2BUQWtjYTmJx7dve8riMC3%2Fr7YMH8d8OhVNZUxMe5e8ksPkAaKbTevx0JAmQdIIVhR%2Byk9f902YqMm1TGHoLvNZRloHswy9EI6U277iTh95YK8c7jQqMQjRcXRhmpoO0iGO5YfF7i9dOTw0HyPJ2krtlvJaAf1SxU8lzeuG%2BHjpcwLgvLT%2B7XFBaXQmfHxySPJ3YP9%2BUv9qT3N6IkRcf9AGeDUDGplHyhfIzqAeTpdZyvX2fHPZ7mRGn9b%2Bvs3o8RSdmjg50hyhFXRwL%2Fh%2BubL2vIyGyh2u%2BWvE8j6RslkpBoGYSts%2F9YCgS1jx9u12bcpmrWZsIwVMZVRIiXWSfJXpLqkNEPXoD7blxXIKhhdI4whiFh6fYmLa6dlXFSy%2BqzwPBdb%2BkRZLLC9yLD%2Fkv6VBKNnnkUTkhC3yPyTTrNV8V6JRhKBTv4ke7KdWZzQmBICNxhGSrZPY%2BHUGzE2H0Np%2F7gMU2X70i3S3tvhluc6i7cDzfVv%2BlkXdpNKubLH6AkYOygrSxJZ1wD%2BbZp38TsF9XJAzJAOoQNuzAUGx09cegJa8zNOoEEtDpziLS8apg%2B%2ByLvgPFJ8W8pBjWsY1Mo5jLNYg1EwiJunwQY6pgGvA5UKaMmO6SyxwI5YShLaSGwZL2BHneNDvABRRRD2aZO5yt%2B%2Bd0BALNf5ZIDLbfGnKALvb1e9E6wDmbSSLtysl0YlPNTlo8LrKuzaW25m%2BUxon%2BOgNwelUhe9brUnJxDm3UQL9XXiWc7WQ%2BYv38e1pboG043QdcDuqUeZPBg6oHwC5XKaaTs%2BQTW8sETbgCXA8bS2AJklIQxQ%2FbYNqkhvBUtQg3VI&X-Amz-Signature=5b4fd5a1e6c1c82eea4d27bf95a75a0e9bec628abd6d3140b1894a2bd1e317d0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVHXL2W6%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8PIWKM9XUVssNMbmULV0BYABUfMGzB9CVOHb4FXTLSAiALAfEQ0ZTaaNEURvp6LiQLPGPLnqXSQOcFeqVkf8%2FyVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQTOlBvgtGHCL9lcZKtwDepyLfYYevWgeNTCfpFUDtevtikEStWr%2BUQWtjYTmJx7dve8riMC3%2Fr7YMH8d8OhVNZUxMe5e8ksPkAaKbTevx0JAmQdIIVhR%2Byk9f902YqMm1TGHoLvNZRloHswy9EI6U277iTh95YK8c7jQqMQjRcXRhmpoO0iGO5YfF7i9dOTw0HyPJ2krtlvJaAf1SxU8lzeuG%2BHjpcwLgvLT%2B7XFBaXQmfHxySPJ3YP9%2BUv9qT3N6IkRcf9AGeDUDGplHyhfIzqAeTpdZyvX2fHPZ7mRGn9b%2Bvs3o8RSdmjg50hyhFXRwL%2Fh%2BubL2vIyGyh2u%2BWvE8j6RslkpBoGYSts%2F9YCgS1jx9u12bcpmrWZsIwVMZVRIiXWSfJXpLqkNEPXoD7blxXIKhhdI4whiFh6fYmLa6dlXFSy%2BqzwPBdb%2BkRZLLC9yLD%2Fkv6VBKNnnkUTkhC3yPyTTrNV8V6JRhKBTv4ke7KdWZzQmBICNxhGSrZPY%2BHUGzE2H0Np%2F7gMU2X70i3S3tvhluc6i7cDzfVv%2BlkXdpNKubLH6AkYOygrSxJZ1wD%2BbZp38TsF9XJAzJAOoQNuzAUGx09cegJa8zNOoEEtDpziLS8apg%2B%2ByLvgPFJ8W8pBjWsY1Mo5jLNYg1EwiJunwQY6pgGvA5UKaMmO6SyxwI5YShLaSGwZL2BHneNDvABRRRD2aZO5yt%2B%2Bd0BALNf5ZIDLbfGnKALvb1e9E6wDmbSSLtysl0YlPNTlo8LrKuzaW25m%2BUxon%2BOgNwelUhe9brUnJxDm3UQL9XXiWc7WQ%2BYv38e1pboG043QdcDuqUeZPBg6oHwC5XKaaTs%2BQTW8sETbgCXA8bS2AJklIQxQ%2FbYNqkhvBUtQg3VI&X-Amz-Signature=ac37cd85f9ba3eccd04d6b26c20ed3d342db4888e4a0329652285f11f4577afa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVHXL2W6%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8PIWKM9XUVssNMbmULV0BYABUfMGzB9CVOHb4FXTLSAiALAfEQ0ZTaaNEURvp6LiQLPGPLnqXSQOcFeqVkf8%2FyVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQTOlBvgtGHCL9lcZKtwDepyLfYYevWgeNTCfpFUDtevtikEStWr%2BUQWtjYTmJx7dve8riMC3%2Fr7YMH8d8OhVNZUxMe5e8ksPkAaKbTevx0JAmQdIIVhR%2Byk9f902YqMm1TGHoLvNZRloHswy9EI6U277iTh95YK8c7jQqMQjRcXRhmpoO0iGO5YfF7i9dOTw0HyPJ2krtlvJaAf1SxU8lzeuG%2BHjpcwLgvLT%2B7XFBaXQmfHxySPJ3YP9%2BUv9qT3N6IkRcf9AGeDUDGplHyhfIzqAeTpdZyvX2fHPZ7mRGn9b%2Bvs3o8RSdmjg50hyhFXRwL%2Fh%2BubL2vIyGyh2u%2BWvE8j6RslkpBoGYSts%2F9YCgS1jx9u12bcpmrWZsIwVMZVRIiXWSfJXpLqkNEPXoD7blxXIKhhdI4whiFh6fYmLa6dlXFSy%2BqzwPBdb%2BkRZLLC9yLD%2Fkv6VBKNnnkUTkhC3yPyTTrNV8V6JRhKBTv4ke7KdWZzQmBICNxhGSrZPY%2BHUGzE2H0Np%2F7gMU2X70i3S3tvhluc6i7cDzfVv%2BlkXdpNKubLH6AkYOygrSxJZ1wD%2BbZp38TsF9XJAzJAOoQNuzAUGx09cegJa8zNOoEEtDpziLS8apg%2B%2ByLvgPFJ8W8pBjWsY1Mo5jLNYg1EwiJunwQY6pgGvA5UKaMmO6SyxwI5YShLaSGwZL2BHneNDvABRRRD2aZO5yt%2B%2Bd0BALNf5ZIDLbfGnKALvb1e9E6wDmbSSLtysl0YlPNTlo8LrKuzaW25m%2BUxon%2BOgNwelUhe9brUnJxDm3UQL9XXiWc7WQ%2BYv38e1pboG043QdcDuqUeZPBg6oHwC5XKaaTs%2BQTW8sETbgCXA8bS2AJklIQxQ%2FbYNqkhvBUtQg3VI&X-Amz-Signature=849ac7f6b6e98d09299b922db3f87920c2c77c37b3f0f638e2edc867567e1c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVHXL2W6%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8PIWKM9XUVssNMbmULV0BYABUfMGzB9CVOHb4FXTLSAiALAfEQ0ZTaaNEURvp6LiQLPGPLnqXSQOcFeqVkf8%2FyVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQTOlBvgtGHCL9lcZKtwDepyLfYYevWgeNTCfpFUDtevtikEStWr%2BUQWtjYTmJx7dve8riMC3%2Fr7YMH8d8OhVNZUxMe5e8ksPkAaKbTevx0JAmQdIIVhR%2Byk9f902YqMm1TGHoLvNZRloHswy9EI6U277iTh95YK8c7jQqMQjRcXRhmpoO0iGO5YfF7i9dOTw0HyPJ2krtlvJaAf1SxU8lzeuG%2BHjpcwLgvLT%2B7XFBaXQmfHxySPJ3YP9%2BUv9qT3N6IkRcf9AGeDUDGplHyhfIzqAeTpdZyvX2fHPZ7mRGn9b%2Bvs3o8RSdmjg50hyhFXRwL%2Fh%2BubL2vIyGyh2u%2BWvE8j6RslkpBoGYSts%2F9YCgS1jx9u12bcpmrWZsIwVMZVRIiXWSfJXpLqkNEPXoD7blxXIKhhdI4whiFh6fYmLa6dlXFSy%2BqzwPBdb%2BkRZLLC9yLD%2Fkv6VBKNnnkUTkhC3yPyTTrNV8V6JRhKBTv4ke7KdWZzQmBICNxhGSrZPY%2BHUGzE2H0Np%2F7gMU2X70i3S3tvhluc6i7cDzfVv%2BlkXdpNKubLH6AkYOygrSxJZ1wD%2BbZp38TsF9XJAzJAOoQNuzAUGx09cegJa8zNOoEEtDpziLS8apg%2B%2ByLvgPFJ8W8pBjWsY1Mo5jLNYg1EwiJunwQY6pgGvA5UKaMmO6SyxwI5YShLaSGwZL2BHneNDvABRRRD2aZO5yt%2B%2Bd0BALNf5ZIDLbfGnKALvb1e9E6wDmbSSLtysl0YlPNTlo8LrKuzaW25m%2BUxon%2BOgNwelUhe9brUnJxDm3UQL9XXiWc7WQ%2BYv38e1pboG043QdcDuqUeZPBg6oHwC5XKaaTs%2BQTW8sETbgCXA8bS2AJklIQxQ%2FbYNqkhvBUtQg3VI&X-Amz-Signature=fcdb68cbcb175f56493eb51ac13b7a2844be0adcafcd63cd9108c8d5c8ada5df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVHXL2W6%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8PIWKM9XUVssNMbmULV0BYABUfMGzB9CVOHb4FXTLSAiALAfEQ0ZTaaNEURvp6LiQLPGPLnqXSQOcFeqVkf8%2FyVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQTOlBvgtGHCL9lcZKtwDepyLfYYevWgeNTCfpFUDtevtikEStWr%2BUQWtjYTmJx7dve8riMC3%2Fr7YMH8d8OhVNZUxMe5e8ksPkAaKbTevx0JAmQdIIVhR%2Byk9f902YqMm1TGHoLvNZRloHswy9EI6U277iTh95YK8c7jQqMQjRcXRhmpoO0iGO5YfF7i9dOTw0HyPJ2krtlvJaAf1SxU8lzeuG%2BHjpcwLgvLT%2B7XFBaXQmfHxySPJ3YP9%2BUv9qT3N6IkRcf9AGeDUDGplHyhfIzqAeTpdZyvX2fHPZ7mRGn9b%2Bvs3o8RSdmjg50hyhFXRwL%2Fh%2BubL2vIyGyh2u%2BWvE8j6RslkpBoGYSts%2F9YCgS1jx9u12bcpmrWZsIwVMZVRIiXWSfJXpLqkNEPXoD7blxXIKhhdI4whiFh6fYmLa6dlXFSy%2BqzwPBdb%2BkRZLLC9yLD%2Fkv6VBKNnnkUTkhC3yPyTTrNV8V6JRhKBTv4ke7KdWZzQmBICNxhGSrZPY%2BHUGzE2H0Np%2F7gMU2X70i3S3tvhluc6i7cDzfVv%2BlkXdpNKubLH6AkYOygrSxJZ1wD%2BbZp38TsF9XJAzJAOoQNuzAUGx09cegJa8zNOoEEtDpziLS8apg%2B%2ByLvgPFJ8W8pBjWsY1Mo5jLNYg1EwiJunwQY6pgGvA5UKaMmO6SyxwI5YShLaSGwZL2BHneNDvABRRRD2aZO5yt%2B%2Bd0BALNf5ZIDLbfGnKALvb1e9E6wDmbSSLtysl0YlPNTlo8LrKuzaW25m%2BUxon%2BOgNwelUhe9brUnJxDm3UQL9XXiWc7WQ%2BYv38e1pboG043QdcDuqUeZPBg6oHwC5XKaaTs%2BQTW8sETbgCXA8bS2AJklIQxQ%2FbYNqkhvBUtQg3VI&X-Amz-Signature=54305d24e9edb151d05f117846bb0dcd535406e70addac1d91f94cfbf0353bf1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVHXL2W6%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8PIWKM9XUVssNMbmULV0BYABUfMGzB9CVOHb4FXTLSAiALAfEQ0ZTaaNEURvp6LiQLPGPLnqXSQOcFeqVkf8%2FyVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQTOlBvgtGHCL9lcZKtwDepyLfYYevWgeNTCfpFUDtevtikEStWr%2BUQWtjYTmJx7dve8riMC3%2Fr7YMH8d8OhVNZUxMe5e8ksPkAaKbTevx0JAmQdIIVhR%2Byk9f902YqMm1TGHoLvNZRloHswy9EI6U277iTh95YK8c7jQqMQjRcXRhmpoO0iGO5YfF7i9dOTw0HyPJ2krtlvJaAf1SxU8lzeuG%2BHjpcwLgvLT%2B7XFBaXQmfHxySPJ3YP9%2BUv9qT3N6IkRcf9AGeDUDGplHyhfIzqAeTpdZyvX2fHPZ7mRGn9b%2Bvs3o8RSdmjg50hyhFXRwL%2Fh%2BubL2vIyGyh2u%2BWvE8j6RslkpBoGYSts%2F9YCgS1jx9u12bcpmrWZsIwVMZVRIiXWSfJXpLqkNEPXoD7blxXIKhhdI4whiFh6fYmLa6dlXFSy%2BqzwPBdb%2BkRZLLC9yLD%2Fkv6VBKNnnkUTkhC3yPyTTrNV8V6JRhKBTv4ke7KdWZzQmBICNxhGSrZPY%2BHUGzE2H0Np%2F7gMU2X70i3S3tvhluc6i7cDzfVv%2BlkXdpNKubLH6AkYOygrSxJZ1wD%2BbZp38TsF9XJAzJAOoQNuzAUGx09cegJa8zNOoEEtDpziLS8apg%2B%2ByLvgPFJ8W8pBjWsY1Mo5jLNYg1EwiJunwQY6pgGvA5UKaMmO6SyxwI5YShLaSGwZL2BHneNDvABRRRD2aZO5yt%2B%2Bd0BALNf5ZIDLbfGnKALvb1e9E6wDmbSSLtysl0YlPNTlo8LrKuzaW25m%2BUxon%2BOgNwelUhe9brUnJxDm3UQL9XXiWc7WQ%2BYv38e1pboG043QdcDuqUeZPBg6oHwC5XKaaTs%2BQTW8sETbgCXA8bS2AJklIQxQ%2FbYNqkhvBUtQg3VI&X-Amz-Signature=d0bf6ceedc2658de1000ed77c88e1ff7df4de086e47b92bb6126f6938d2a5e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVHXL2W6%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8PIWKM9XUVssNMbmULV0BYABUfMGzB9CVOHb4FXTLSAiALAfEQ0ZTaaNEURvp6LiQLPGPLnqXSQOcFeqVkf8%2FyVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMQTOlBvgtGHCL9lcZKtwDepyLfYYevWgeNTCfpFUDtevtikEStWr%2BUQWtjYTmJx7dve8riMC3%2Fr7YMH8d8OhVNZUxMe5e8ksPkAaKbTevx0JAmQdIIVhR%2Byk9f902YqMm1TGHoLvNZRloHswy9EI6U277iTh95YK8c7jQqMQjRcXRhmpoO0iGO5YfF7i9dOTw0HyPJ2krtlvJaAf1SxU8lzeuG%2BHjpcwLgvLT%2B7XFBaXQmfHxySPJ3YP9%2BUv9qT3N6IkRcf9AGeDUDGplHyhfIzqAeTpdZyvX2fHPZ7mRGn9b%2Bvs3o8RSdmjg50hyhFXRwL%2Fh%2BubL2vIyGyh2u%2BWvE8j6RslkpBoGYSts%2F9YCgS1jx9u12bcpmrWZsIwVMZVRIiXWSfJXpLqkNEPXoD7blxXIKhhdI4whiFh6fYmLa6dlXFSy%2BqzwPBdb%2BkRZLLC9yLD%2Fkv6VBKNnnkUTkhC3yPyTTrNV8V6JRhKBTv4ke7KdWZzQmBICNxhGSrZPY%2BHUGzE2H0Np%2F7gMU2X70i3S3tvhluc6i7cDzfVv%2BlkXdpNKubLH6AkYOygrSxJZ1wD%2BbZp38TsF9XJAzJAOoQNuzAUGx09cegJa8zNOoEEtDpziLS8apg%2B%2ByLvgPFJ8W8pBjWsY1Mo5jLNYg1EwiJunwQY6pgGvA5UKaMmO6SyxwI5YShLaSGwZL2BHneNDvABRRRD2aZO5yt%2B%2Bd0BALNf5ZIDLbfGnKALvb1e9E6wDmbSSLtysl0YlPNTlo8LrKuzaW25m%2BUxon%2BOgNwelUhe9brUnJxDm3UQL9XXiWc7WQ%2BYv38e1pboG043QdcDuqUeZPBg6oHwC5XKaaTs%2BQTW8sETbgCXA8bS2AJklIQxQ%2FbYNqkhvBUtQg3VI&X-Amz-Signature=f09de92d896c8dbd99d322ec0ab6ea53fe1f9b3e2045fb2683ce0531c8c463ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
