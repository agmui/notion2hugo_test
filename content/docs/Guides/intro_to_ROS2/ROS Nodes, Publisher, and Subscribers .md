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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENTDUCR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWvI%2FB9dPe4KxX5Jiv2tEAhslnwJj7nKrnaCbRgzDeCAiBNJVfCnpPLio6zqwGEIXfk%2B2C86wMzq5oXYBFPZDb7jCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ngO3xyjQDWeN48WKtwDekqAWg%2FusreGwHKyBdKZc6oy80Tlhi2JPZ3jBudpL2Z67b7i5IynlRu1tOEY0oMghaVpHWtIJOGWTw2dbSCa51g7RADIJu7iW8GLHbSnlEmo%2Bc7Usl9eil72Idz%2FIIgvn5xjOwQ1HQSDf7oGEzG%2FNw9MFTcnIFtGE9KC%2FaWr0kur3WUyXLuwcSOqGPINnW6fHVrCk87cUJgsOz4IhQeQ0NgnncBxxfEW8emBafw79DyoApDryUaHcURs%2Fqsz6j8%2BnS7kovLb51msxKENWEJ44YtRlgsmRbOH3ZzVn%2Bm%2BqGco%2BY1vWuLDOO5M%2B%2Bbe%2BVrxK9xaMzq4xfQE1qfrzZGr1U%2BxQovs4EAbeotm69BwTqzINyJdMl84RhwgLVKsWQpOCUOobDqe1KN%2Fjj7SG%2BpmHZPmhtSpH82BUEagV3AlHC2v8H6mdjmsshu1pAJn8FYWyvnTo0cYgKuzomSr5H9WvwZwHJPPOBhvnVlR4pQ0LFzjxSI%2FVWWAa6g21ENnSR3l3Xnzcnl4ACZCK%2F5ioddAFHy469%2FFoAPRZaEhBOnEt9vhXjsAzwBOx%2Fux%2B%2BoUSaXMAnGdAjO3u1vt5VQmUVuOl7275eZWY%2FSRAJbkZcjOC38yaSBC2fjRgeiH5J4wz5msxAY6pgFxgt52SdQQ9x%2FYDlerLLS5F7o6k1rvlOXbvgndnJ0%2BPEuVvrhRolvjOncjijYJwOvkNcefcOj5%2Fqc0CE%2F%2BmSaBTKdPyGi9ORJmSFYNUdjlnpiZOf184eSRffbXUY5FVUeYPF8eol5bLeox%2FDSSlvZzgcbsiC4V%2BLbuCdYI4Rb%2FThvCHCcvIBkisgPJdQ2hwN7OYuKZbqiIzHydpnECZUTzCS9bKuQ%2F&X-Amz-Signature=5e3a893c5e03227b2d66cdb3d8d5be1acebf27abc523e621427a4acc16b1d830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENTDUCR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWvI%2FB9dPe4KxX5Jiv2tEAhslnwJj7nKrnaCbRgzDeCAiBNJVfCnpPLio6zqwGEIXfk%2B2C86wMzq5oXYBFPZDb7jCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ngO3xyjQDWeN48WKtwDekqAWg%2FusreGwHKyBdKZc6oy80Tlhi2JPZ3jBudpL2Z67b7i5IynlRu1tOEY0oMghaVpHWtIJOGWTw2dbSCa51g7RADIJu7iW8GLHbSnlEmo%2Bc7Usl9eil72Idz%2FIIgvn5xjOwQ1HQSDf7oGEzG%2FNw9MFTcnIFtGE9KC%2FaWr0kur3WUyXLuwcSOqGPINnW6fHVrCk87cUJgsOz4IhQeQ0NgnncBxxfEW8emBafw79DyoApDryUaHcURs%2Fqsz6j8%2BnS7kovLb51msxKENWEJ44YtRlgsmRbOH3ZzVn%2Bm%2BqGco%2BY1vWuLDOO5M%2B%2Bbe%2BVrxK9xaMzq4xfQE1qfrzZGr1U%2BxQovs4EAbeotm69BwTqzINyJdMl84RhwgLVKsWQpOCUOobDqe1KN%2Fjj7SG%2BpmHZPmhtSpH82BUEagV3AlHC2v8H6mdjmsshu1pAJn8FYWyvnTo0cYgKuzomSr5H9WvwZwHJPPOBhvnVlR4pQ0LFzjxSI%2FVWWAa6g21ENnSR3l3Xnzcnl4ACZCK%2F5ioddAFHy469%2FFoAPRZaEhBOnEt9vhXjsAzwBOx%2Fux%2B%2BoUSaXMAnGdAjO3u1vt5VQmUVuOl7275eZWY%2FSRAJbkZcjOC38yaSBC2fjRgeiH5J4wz5msxAY6pgFxgt52SdQQ9x%2FYDlerLLS5F7o6k1rvlOXbvgndnJ0%2BPEuVvrhRolvjOncjijYJwOvkNcefcOj5%2Fqc0CE%2F%2BmSaBTKdPyGi9ORJmSFYNUdjlnpiZOf184eSRffbXUY5FVUeYPF8eol5bLeox%2FDSSlvZzgcbsiC4V%2BLbuCdYI4Rb%2FThvCHCcvIBkisgPJdQ2hwN7OYuKZbqiIzHydpnECZUTzCS9bKuQ%2F&X-Amz-Signature=acca310dd397dc87d2c55fb87e2f9e1455fc1e439871c5267606ad7d55a618cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENTDUCR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWvI%2FB9dPe4KxX5Jiv2tEAhslnwJj7nKrnaCbRgzDeCAiBNJVfCnpPLio6zqwGEIXfk%2B2C86wMzq5oXYBFPZDb7jCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ngO3xyjQDWeN48WKtwDekqAWg%2FusreGwHKyBdKZc6oy80Tlhi2JPZ3jBudpL2Z67b7i5IynlRu1tOEY0oMghaVpHWtIJOGWTw2dbSCa51g7RADIJu7iW8GLHbSnlEmo%2Bc7Usl9eil72Idz%2FIIgvn5xjOwQ1HQSDf7oGEzG%2FNw9MFTcnIFtGE9KC%2FaWr0kur3WUyXLuwcSOqGPINnW6fHVrCk87cUJgsOz4IhQeQ0NgnncBxxfEW8emBafw79DyoApDryUaHcURs%2Fqsz6j8%2BnS7kovLb51msxKENWEJ44YtRlgsmRbOH3ZzVn%2Bm%2BqGco%2BY1vWuLDOO5M%2B%2Bbe%2BVrxK9xaMzq4xfQE1qfrzZGr1U%2BxQovs4EAbeotm69BwTqzINyJdMl84RhwgLVKsWQpOCUOobDqe1KN%2Fjj7SG%2BpmHZPmhtSpH82BUEagV3AlHC2v8H6mdjmsshu1pAJn8FYWyvnTo0cYgKuzomSr5H9WvwZwHJPPOBhvnVlR4pQ0LFzjxSI%2FVWWAa6g21ENnSR3l3Xnzcnl4ACZCK%2F5ioddAFHy469%2FFoAPRZaEhBOnEt9vhXjsAzwBOx%2Fux%2B%2BoUSaXMAnGdAjO3u1vt5VQmUVuOl7275eZWY%2FSRAJbkZcjOC38yaSBC2fjRgeiH5J4wz5msxAY6pgFxgt52SdQQ9x%2FYDlerLLS5F7o6k1rvlOXbvgndnJ0%2BPEuVvrhRolvjOncjijYJwOvkNcefcOj5%2Fqc0CE%2F%2BmSaBTKdPyGi9ORJmSFYNUdjlnpiZOf184eSRffbXUY5FVUeYPF8eol5bLeox%2FDSSlvZzgcbsiC4V%2BLbuCdYI4Rb%2FThvCHCcvIBkisgPJdQ2hwN7OYuKZbqiIzHydpnECZUTzCS9bKuQ%2F&X-Amz-Signature=33a6efe166d671f68e35fffad005b1f48ab7eda6d2d529d895391caef007acc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENTDUCR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWvI%2FB9dPe4KxX5Jiv2tEAhslnwJj7nKrnaCbRgzDeCAiBNJVfCnpPLio6zqwGEIXfk%2B2C86wMzq5oXYBFPZDb7jCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ngO3xyjQDWeN48WKtwDekqAWg%2FusreGwHKyBdKZc6oy80Tlhi2JPZ3jBudpL2Z67b7i5IynlRu1tOEY0oMghaVpHWtIJOGWTw2dbSCa51g7RADIJu7iW8GLHbSnlEmo%2Bc7Usl9eil72Idz%2FIIgvn5xjOwQ1HQSDf7oGEzG%2FNw9MFTcnIFtGE9KC%2FaWr0kur3WUyXLuwcSOqGPINnW6fHVrCk87cUJgsOz4IhQeQ0NgnncBxxfEW8emBafw79DyoApDryUaHcURs%2Fqsz6j8%2BnS7kovLb51msxKENWEJ44YtRlgsmRbOH3ZzVn%2Bm%2BqGco%2BY1vWuLDOO5M%2B%2Bbe%2BVrxK9xaMzq4xfQE1qfrzZGr1U%2BxQovs4EAbeotm69BwTqzINyJdMl84RhwgLVKsWQpOCUOobDqe1KN%2Fjj7SG%2BpmHZPmhtSpH82BUEagV3AlHC2v8H6mdjmsshu1pAJn8FYWyvnTo0cYgKuzomSr5H9WvwZwHJPPOBhvnVlR4pQ0LFzjxSI%2FVWWAa6g21ENnSR3l3Xnzcnl4ACZCK%2F5ioddAFHy469%2FFoAPRZaEhBOnEt9vhXjsAzwBOx%2Fux%2B%2BoUSaXMAnGdAjO3u1vt5VQmUVuOl7275eZWY%2FSRAJbkZcjOC38yaSBC2fjRgeiH5J4wz5msxAY6pgFxgt52SdQQ9x%2FYDlerLLS5F7o6k1rvlOXbvgndnJ0%2BPEuVvrhRolvjOncjijYJwOvkNcefcOj5%2Fqc0CE%2F%2BmSaBTKdPyGi9ORJmSFYNUdjlnpiZOf184eSRffbXUY5FVUeYPF8eol5bLeox%2FDSSlvZzgcbsiC4V%2BLbuCdYI4Rb%2FThvCHCcvIBkisgPJdQ2hwN7OYuKZbqiIzHydpnECZUTzCS9bKuQ%2F&X-Amz-Signature=4c492cccab4cdcfd091643082eb1e4c4e07fbf5e42fe9daf39f5e8868b73f5b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENTDUCR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWvI%2FB9dPe4KxX5Jiv2tEAhslnwJj7nKrnaCbRgzDeCAiBNJVfCnpPLio6zqwGEIXfk%2B2C86wMzq5oXYBFPZDb7jCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ngO3xyjQDWeN48WKtwDekqAWg%2FusreGwHKyBdKZc6oy80Tlhi2JPZ3jBudpL2Z67b7i5IynlRu1tOEY0oMghaVpHWtIJOGWTw2dbSCa51g7RADIJu7iW8GLHbSnlEmo%2Bc7Usl9eil72Idz%2FIIgvn5xjOwQ1HQSDf7oGEzG%2FNw9MFTcnIFtGE9KC%2FaWr0kur3WUyXLuwcSOqGPINnW6fHVrCk87cUJgsOz4IhQeQ0NgnncBxxfEW8emBafw79DyoApDryUaHcURs%2Fqsz6j8%2BnS7kovLb51msxKENWEJ44YtRlgsmRbOH3ZzVn%2Bm%2BqGco%2BY1vWuLDOO5M%2B%2Bbe%2BVrxK9xaMzq4xfQE1qfrzZGr1U%2BxQovs4EAbeotm69BwTqzINyJdMl84RhwgLVKsWQpOCUOobDqe1KN%2Fjj7SG%2BpmHZPmhtSpH82BUEagV3AlHC2v8H6mdjmsshu1pAJn8FYWyvnTo0cYgKuzomSr5H9WvwZwHJPPOBhvnVlR4pQ0LFzjxSI%2FVWWAa6g21ENnSR3l3Xnzcnl4ACZCK%2F5ioddAFHy469%2FFoAPRZaEhBOnEt9vhXjsAzwBOx%2Fux%2B%2BoUSaXMAnGdAjO3u1vt5VQmUVuOl7275eZWY%2FSRAJbkZcjOC38yaSBC2fjRgeiH5J4wz5msxAY6pgFxgt52SdQQ9x%2FYDlerLLS5F7o6k1rvlOXbvgndnJ0%2BPEuVvrhRolvjOncjijYJwOvkNcefcOj5%2Fqc0CE%2F%2BmSaBTKdPyGi9ORJmSFYNUdjlnpiZOf184eSRffbXUY5FVUeYPF8eol5bLeox%2FDSSlvZzgcbsiC4V%2BLbuCdYI4Rb%2FThvCHCcvIBkisgPJdQ2hwN7OYuKZbqiIzHydpnECZUTzCS9bKuQ%2F&X-Amz-Signature=effc87dda9fcf83727a1e940225e8089dff17151ad0d33f18213819819cd1613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENTDUCR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWvI%2FB9dPe4KxX5Jiv2tEAhslnwJj7nKrnaCbRgzDeCAiBNJVfCnpPLio6zqwGEIXfk%2B2C86wMzq5oXYBFPZDb7jCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ngO3xyjQDWeN48WKtwDekqAWg%2FusreGwHKyBdKZc6oy80Tlhi2JPZ3jBudpL2Z67b7i5IynlRu1tOEY0oMghaVpHWtIJOGWTw2dbSCa51g7RADIJu7iW8GLHbSnlEmo%2Bc7Usl9eil72Idz%2FIIgvn5xjOwQ1HQSDf7oGEzG%2FNw9MFTcnIFtGE9KC%2FaWr0kur3WUyXLuwcSOqGPINnW6fHVrCk87cUJgsOz4IhQeQ0NgnncBxxfEW8emBafw79DyoApDryUaHcURs%2Fqsz6j8%2BnS7kovLb51msxKENWEJ44YtRlgsmRbOH3ZzVn%2Bm%2BqGco%2BY1vWuLDOO5M%2B%2Bbe%2BVrxK9xaMzq4xfQE1qfrzZGr1U%2BxQovs4EAbeotm69BwTqzINyJdMl84RhwgLVKsWQpOCUOobDqe1KN%2Fjj7SG%2BpmHZPmhtSpH82BUEagV3AlHC2v8H6mdjmsshu1pAJn8FYWyvnTo0cYgKuzomSr5H9WvwZwHJPPOBhvnVlR4pQ0LFzjxSI%2FVWWAa6g21ENnSR3l3Xnzcnl4ACZCK%2F5ioddAFHy469%2FFoAPRZaEhBOnEt9vhXjsAzwBOx%2Fux%2B%2BoUSaXMAnGdAjO3u1vt5VQmUVuOl7275eZWY%2FSRAJbkZcjOC38yaSBC2fjRgeiH5J4wz5msxAY6pgFxgt52SdQQ9x%2FYDlerLLS5F7o6k1rvlOXbvgndnJ0%2BPEuVvrhRolvjOncjijYJwOvkNcefcOj5%2Fqc0CE%2F%2BmSaBTKdPyGi9ORJmSFYNUdjlnpiZOf184eSRffbXUY5FVUeYPF8eol5bLeox%2FDSSlvZzgcbsiC4V%2BLbuCdYI4Rb%2FThvCHCcvIBkisgPJdQ2hwN7OYuKZbqiIzHydpnECZUTzCS9bKuQ%2F&X-Amz-Signature=e200a129fe706379c697e1775917d1c388026cd90cb06ddfe3ea5088e414a650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENTDUCR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWvI%2FB9dPe4KxX5Jiv2tEAhslnwJj7nKrnaCbRgzDeCAiBNJVfCnpPLio6zqwGEIXfk%2B2C86wMzq5oXYBFPZDb7jCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ngO3xyjQDWeN48WKtwDekqAWg%2FusreGwHKyBdKZc6oy80Tlhi2JPZ3jBudpL2Z67b7i5IynlRu1tOEY0oMghaVpHWtIJOGWTw2dbSCa51g7RADIJu7iW8GLHbSnlEmo%2Bc7Usl9eil72Idz%2FIIgvn5xjOwQ1HQSDf7oGEzG%2FNw9MFTcnIFtGE9KC%2FaWr0kur3WUyXLuwcSOqGPINnW6fHVrCk87cUJgsOz4IhQeQ0NgnncBxxfEW8emBafw79DyoApDryUaHcURs%2Fqsz6j8%2BnS7kovLb51msxKENWEJ44YtRlgsmRbOH3ZzVn%2Bm%2BqGco%2BY1vWuLDOO5M%2B%2Bbe%2BVrxK9xaMzq4xfQE1qfrzZGr1U%2BxQovs4EAbeotm69BwTqzINyJdMl84RhwgLVKsWQpOCUOobDqe1KN%2Fjj7SG%2BpmHZPmhtSpH82BUEagV3AlHC2v8H6mdjmsshu1pAJn8FYWyvnTo0cYgKuzomSr5H9WvwZwHJPPOBhvnVlR4pQ0LFzjxSI%2FVWWAa6g21ENnSR3l3Xnzcnl4ACZCK%2F5ioddAFHy469%2FFoAPRZaEhBOnEt9vhXjsAzwBOx%2Fux%2B%2BoUSaXMAnGdAjO3u1vt5VQmUVuOl7275eZWY%2FSRAJbkZcjOC38yaSBC2fjRgeiH5J4wz5msxAY6pgFxgt52SdQQ9x%2FYDlerLLS5F7o6k1rvlOXbvgndnJ0%2BPEuVvrhRolvjOncjijYJwOvkNcefcOj5%2Fqc0CE%2F%2BmSaBTKdPyGi9ORJmSFYNUdjlnpiZOf184eSRffbXUY5FVUeYPF8eol5bLeox%2FDSSlvZzgcbsiC4V%2BLbuCdYI4Rb%2FThvCHCcvIBkisgPJdQ2hwN7OYuKZbqiIzHydpnECZUTzCS9bKuQ%2F&X-Amz-Signature=2a2c3a937c5414a72078f795c34213e5f7bf2b0c3b084b314a74ef0881ee52d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ENTDUCR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWvI%2FB9dPe4KxX5Jiv2tEAhslnwJj7nKrnaCbRgzDeCAiBNJVfCnpPLio6zqwGEIXfk%2B2C86wMzq5oXYBFPZDb7jCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ngO3xyjQDWeN48WKtwDekqAWg%2FusreGwHKyBdKZc6oy80Tlhi2JPZ3jBudpL2Z67b7i5IynlRu1tOEY0oMghaVpHWtIJOGWTw2dbSCa51g7RADIJu7iW8GLHbSnlEmo%2Bc7Usl9eil72Idz%2FIIgvn5xjOwQ1HQSDf7oGEzG%2FNw9MFTcnIFtGE9KC%2FaWr0kur3WUyXLuwcSOqGPINnW6fHVrCk87cUJgsOz4IhQeQ0NgnncBxxfEW8emBafw79DyoApDryUaHcURs%2Fqsz6j8%2BnS7kovLb51msxKENWEJ44YtRlgsmRbOH3ZzVn%2Bm%2BqGco%2BY1vWuLDOO5M%2B%2Bbe%2BVrxK9xaMzq4xfQE1qfrzZGr1U%2BxQovs4EAbeotm69BwTqzINyJdMl84RhwgLVKsWQpOCUOobDqe1KN%2Fjj7SG%2BpmHZPmhtSpH82BUEagV3AlHC2v8H6mdjmsshu1pAJn8FYWyvnTo0cYgKuzomSr5H9WvwZwHJPPOBhvnVlR4pQ0LFzjxSI%2FVWWAa6g21ENnSR3l3Xnzcnl4ACZCK%2F5ioddAFHy469%2FFoAPRZaEhBOnEt9vhXjsAzwBOx%2Fux%2B%2BoUSaXMAnGdAjO3u1vt5VQmUVuOl7275eZWY%2FSRAJbkZcjOC38yaSBC2fjRgeiH5J4wz5msxAY6pgFxgt52SdQQ9x%2FYDlerLLS5F7o6k1rvlOXbvgndnJ0%2BPEuVvrhRolvjOncjijYJwOvkNcefcOj5%2Fqc0CE%2F%2BmSaBTKdPyGi9ORJmSFYNUdjlnpiZOf184eSRffbXUY5FVUeYPF8eol5bLeox%2FDSSlvZzgcbsiC4V%2BLbuCdYI4Rb%2FThvCHCcvIBkisgPJdQ2hwN7OYuKZbqiIzHydpnECZUTzCS9bKuQ%2F&X-Amz-Signature=d37188fe8e8b1e60849a18302f0d6ed7dea501cc04caf95af443f22cb47d4819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
