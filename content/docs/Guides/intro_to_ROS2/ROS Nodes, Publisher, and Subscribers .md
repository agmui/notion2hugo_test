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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USWMRN5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGC8OcN5XVt%2BAWezOYyWjw8XkPA7BuTpYpAOQZUNi8U9AiBs%2Fu8kfRl0%2B6tQUE5PJRQU4LbClhKMEgkG8DtUyj%2FZmiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkJofr7VK6wXIOIQSKtwDWcOBQFo9fqUxbQgeCIJRMC2sWKsjqotQypYWZBzI8ySHqggrbUnMM314ghwT6WRV98%2FOoP%2BZA2DmHxcOT97j3JR%2FcKVZdPduYvMGwspNIawW7qFcaioEVcZcUPzJwWEiCVk807Hqu32EDIIdN0fkXlEI5LK3qY5P4rphfQaqIkgwm%2BrXjn7t50pWz6R5P4rNcM3Hx3HhfI%2BC9ro%2BPL4b3gKHW2cG6xatRjdvuS0cyuH8K8tbuEvjI8v%2Fe8RoBCLHxVwq6FsQj93NyTb%2Bg5MC95ZzQCA4Hw5p7r4S77ALmKT9w7ELYG3UpTcIu4JFlH4xy5%2B7bl9Xt66z92ocz3zToRbxE7w%2FXa5tdSMWD%2FGc3zQLYJnSGqxNkYgXTmwskwgl0359hivcHQasejOSJ5YlAJdj28tuPTCFG2GXw2Ha5qcLdxq%2BEiCxXGTHTwHPt9tBaooaIwuAwGruAoIYx4gWOYccpVcpIcRWElpqlQKy4ln2aySKKqyMJKpZ5Ks8FZHiFGhVLEb3U4DDPunY3YcCQbHaw%2FRX1k%2Fc0MwN2rGVh1UldSHAR9SKWpivte6Dd8nPRcDRigL%2BXUu2t%2FTz0mK608EbfGYxl93u%2BVuZakrgHkuyK0pLmmKOP2bNMRowxeTxvgY6pgH9ZjVk8ovP0Phjt%2Ba8saY%2FqdEbU0yuLI0onk4c09l9OBmalSUPLWic5ykJ%2BQwK4FoYVFDlQfM%2FrGYWGJrKYt6OYCA2iiHMvTtkv1dJ1CXa8LrDtsuWQ8rmfsV9G06qIOWyidpDFWDhiJIPAGB47f4Y8%2FSfIfyY%2BqsjvBow6FxZNB99ATWmYfa0BhpuEJG82172RXJQixvcRYZeCap%2BC5Nh7OTGilFF&X-Amz-Signature=609381fc2380d368f31609e75138d4b54fa23c39ca8046dfaa21eff1f6fa1a56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USWMRN5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGC8OcN5XVt%2BAWezOYyWjw8XkPA7BuTpYpAOQZUNi8U9AiBs%2Fu8kfRl0%2B6tQUE5PJRQU4LbClhKMEgkG8DtUyj%2FZmiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkJofr7VK6wXIOIQSKtwDWcOBQFo9fqUxbQgeCIJRMC2sWKsjqotQypYWZBzI8ySHqggrbUnMM314ghwT6WRV98%2FOoP%2BZA2DmHxcOT97j3JR%2FcKVZdPduYvMGwspNIawW7qFcaioEVcZcUPzJwWEiCVk807Hqu32EDIIdN0fkXlEI5LK3qY5P4rphfQaqIkgwm%2BrXjn7t50pWz6R5P4rNcM3Hx3HhfI%2BC9ro%2BPL4b3gKHW2cG6xatRjdvuS0cyuH8K8tbuEvjI8v%2Fe8RoBCLHxVwq6FsQj93NyTb%2Bg5MC95ZzQCA4Hw5p7r4S77ALmKT9w7ELYG3UpTcIu4JFlH4xy5%2B7bl9Xt66z92ocz3zToRbxE7w%2FXa5tdSMWD%2FGc3zQLYJnSGqxNkYgXTmwskwgl0359hivcHQasejOSJ5YlAJdj28tuPTCFG2GXw2Ha5qcLdxq%2BEiCxXGTHTwHPt9tBaooaIwuAwGruAoIYx4gWOYccpVcpIcRWElpqlQKy4ln2aySKKqyMJKpZ5Ks8FZHiFGhVLEb3U4DDPunY3YcCQbHaw%2FRX1k%2Fc0MwN2rGVh1UldSHAR9SKWpivte6Dd8nPRcDRigL%2BXUu2t%2FTz0mK608EbfGYxl93u%2BVuZakrgHkuyK0pLmmKOP2bNMRowxeTxvgY6pgH9ZjVk8ovP0Phjt%2Ba8saY%2FqdEbU0yuLI0onk4c09l9OBmalSUPLWic5ykJ%2BQwK4FoYVFDlQfM%2FrGYWGJrKYt6OYCA2iiHMvTtkv1dJ1CXa8LrDtsuWQ8rmfsV9G06qIOWyidpDFWDhiJIPAGB47f4Y8%2FSfIfyY%2BqsjvBow6FxZNB99ATWmYfa0BhpuEJG82172RXJQixvcRYZeCap%2BC5Nh7OTGilFF&X-Amz-Signature=5dd3b8f05c567b2bca143a6ef1ea7e0ae896bdb4c52ab74256bca3a2dbddab33&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USWMRN5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGC8OcN5XVt%2BAWezOYyWjw8XkPA7BuTpYpAOQZUNi8U9AiBs%2Fu8kfRl0%2B6tQUE5PJRQU4LbClhKMEgkG8DtUyj%2FZmiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkJofr7VK6wXIOIQSKtwDWcOBQFo9fqUxbQgeCIJRMC2sWKsjqotQypYWZBzI8ySHqggrbUnMM314ghwT6WRV98%2FOoP%2BZA2DmHxcOT97j3JR%2FcKVZdPduYvMGwspNIawW7qFcaioEVcZcUPzJwWEiCVk807Hqu32EDIIdN0fkXlEI5LK3qY5P4rphfQaqIkgwm%2BrXjn7t50pWz6R5P4rNcM3Hx3HhfI%2BC9ro%2BPL4b3gKHW2cG6xatRjdvuS0cyuH8K8tbuEvjI8v%2Fe8RoBCLHxVwq6FsQj93NyTb%2Bg5MC95ZzQCA4Hw5p7r4S77ALmKT9w7ELYG3UpTcIu4JFlH4xy5%2B7bl9Xt66z92ocz3zToRbxE7w%2FXa5tdSMWD%2FGc3zQLYJnSGqxNkYgXTmwskwgl0359hivcHQasejOSJ5YlAJdj28tuPTCFG2GXw2Ha5qcLdxq%2BEiCxXGTHTwHPt9tBaooaIwuAwGruAoIYx4gWOYccpVcpIcRWElpqlQKy4ln2aySKKqyMJKpZ5Ks8FZHiFGhVLEb3U4DDPunY3YcCQbHaw%2FRX1k%2Fc0MwN2rGVh1UldSHAR9SKWpivte6Dd8nPRcDRigL%2BXUu2t%2FTz0mK608EbfGYxl93u%2BVuZakrgHkuyK0pLmmKOP2bNMRowxeTxvgY6pgH9ZjVk8ovP0Phjt%2Ba8saY%2FqdEbU0yuLI0onk4c09l9OBmalSUPLWic5ykJ%2BQwK4FoYVFDlQfM%2FrGYWGJrKYt6OYCA2iiHMvTtkv1dJ1CXa8LrDtsuWQ8rmfsV9G06qIOWyidpDFWDhiJIPAGB47f4Y8%2FSfIfyY%2BqsjvBow6FxZNB99ATWmYfa0BhpuEJG82172RXJQixvcRYZeCap%2BC5Nh7OTGilFF&X-Amz-Signature=fba136fe4773fe67efbaf7a4b03d39491c90ba55f24e1190692e80415433f800&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USWMRN5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGC8OcN5XVt%2BAWezOYyWjw8XkPA7BuTpYpAOQZUNi8U9AiBs%2Fu8kfRl0%2B6tQUE5PJRQU4LbClhKMEgkG8DtUyj%2FZmiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkJofr7VK6wXIOIQSKtwDWcOBQFo9fqUxbQgeCIJRMC2sWKsjqotQypYWZBzI8ySHqggrbUnMM314ghwT6WRV98%2FOoP%2BZA2DmHxcOT97j3JR%2FcKVZdPduYvMGwspNIawW7qFcaioEVcZcUPzJwWEiCVk807Hqu32EDIIdN0fkXlEI5LK3qY5P4rphfQaqIkgwm%2BrXjn7t50pWz6R5P4rNcM3Hx3HhfI%2BC9ro%2BPL4b3gKHW2cG6xatRjdvuS0cyuH8K8tbuEvjI8v%2Fe8RoBCLHxVwq6FsQj93NyTb%2Bg5MC95ZzQCA4Hw5p7r4S77ALmKT9w7ELYG3UpTcIu4JFlH4xy5%2B7bl9Xt66z92ocz3zToRbxE7w%2FXa5tdSMWD%2FGc3zQLYJnSGqxNkYgXTmwskwgl0359hivcHQasejOSJ5YlAJdj28tuPTCFG2GXw2Ha5qcLdxq%2BEiCxXGTHTwHPt9tBaooaIwuAwGruAoIYx4gWOYccpVcpIcRWElpqlQKy4ln2aySKKqyMJKpZ5Ks8FZHiFGhVLEb3U4DDPunY3YcCQbHaw%2FRX1k%2Fc0MwN2rGVh1UldSHAR9SKWpivte6Dd8nPRcDRigL%2BXUu2t%2FTz0mK608EbfGYxl93u%2BVuZakrgHkuyK0pLmmKOP2bNMRowxeTxvgY6pgH9ZjVk8ovP0Phjt%2Ba8saY%2FqdEbU0yuLI0onk4c09l9OBmalSUPLWic5ykJ%2BQwK4FoYVFDlQfM%2FrGYWGJrKYt6OYCA2iiHMvTtkv1dJ1CXa8LrDtsuWQ8rmfsV9G06qIOWyidpDFWDhiJIPAGB47f4Y8%2FSfIfyY%2BqsjvBow6FxZNB99ATWmYfa0BhpuEJG82172RXJQixvcRYZeCap%2BC5Nh7OTGilFF&X-Amz-Signature=a762f0c71abd87c6d536804a73bc18c08e640aaf06252f970b4a1680aa2ace75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USWMRN5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGC8OcN5XVt%2BAWezOYyWjw8XkPA7BuTpYpAOQZUNi8U9AiBs%2Fu8kfRl0%2B6tQUE5PJRQU4LbClhKMEgkG8DtUyj%2FZmiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkJofr7VK6wXIOIQSKtwDWcOBQFo9fqUxbQgeCIJRMC2sWKsjqotQypYWZBzI8ySHqggrbUnMM314ghwT6WRV98%2FOoP%2BZA2DmHxcOT97j3JR%2FcKVZdPduYvMGwspNIawW7qFcaioEVcZcUPzJwWEiCVk807Hqu32EDIIdN0fkXlEI5LK3qY5P4rphfQaqIkgwm%2BrXjn7t50pWz6R5P4rNcM3Hx3HhfI%2BC9ro%2BPL4b3gKHW2cG6xatRjdvuS0cyuH8K8tbuEvjI8v%2Fe8RoBCLHxVwq6FsQj93NyTb%2Bg5MC95ZzQCA4Hw5p7r4S77ALmKT9w7ELYG3UpTcIu4JFlH4xy5%2B7bl9Xt66z92ocz3zToRbxE7w%2FXa5tdSMWD%2FGc3zQLYJnSGqxNkYgXTmwskwgl0359hivcHQasejOSJ5YlAJdj28tuPTCFG2GXw2Ha5qcLdxq%2BEiCxXGTHTwHPt9tBaooaIwuAwGruAoIYx4gWOYccpVcpIcRWElpqlQKy4ln2aySKKqyMJKpZ5Ks8FZHiFGhVLEb3U4DDPunY3YcCQbHaw%2FRX1k%2Fc0MwN2rGVh1UldSHAR9SKWpivte6Dd8nPRcDRigL%2BXUu2t%2FTz0mK608EbfGYxl93u%2BVuZakrgHkuyK0pLmmKOP2bNMRowxeTxvgY6pgH9ZjVk8ovP0Phjt%2Ba8saY%2FqdEbU0yuLI0onk4c09l9OBmalSUPLWic5ykJ%2BQwK4FoYVFDlQfM%2FrGYWGJrKYt6OYCA2iiHMvTtkv1dJ1CXa8LrDtsuWQ8rmfsV9G06qIOWyidpDFWDhiJIPAGB47f4Y8%2FSfIfyY%2BqsjvBow6FxZNB99ATWmYfa0BhpuEJG82172RXJQixvcRYZeCap%2BC5Nh7OTGilFF&X-Amz-Signature=2f9652f842d7bdc0f48de9ee32aa0a7131a43fed2703516c7b73688ba20debea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USWMRN5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGC8OcN5XVt%2BAWezOYyWjw8XkPA7BuTpYpAOQZUNi8U9AiBs%2Fu8kfRl0%2B6tQUE5PJRQU4LbClhKMEgkG8DtUyj%2FZmiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkJofr7VK6wXIOIQSKtwDWcOBQFo9fqUxbQgeCIJRMC2sWKsjqotQypYWZBzI8ySHqggrbUnMM314ghwT6WRV98%2FOoP%2BZA2DmHxcOT97j3JR%2FcKVZdPduYvMGwspNIawW7qFcaioEVcZcUPzJwWEiCVk807Hqu32EDIIdN0fkXlEI5LK3qY5P4rphfQaqIkgwm%2BrXjn7t50pWz6R5P4rNcM3Hx3HhfI%2BC9ro%2BPL4b3gKHW2cG6xatRjdvuS0cyuH8K8tbuEvjI8v%2Fe8RoBCLHxVwq6FsQj93NyTb%2Bg5MC95ZzQCA4Hw5p7r4S77ALmKT9w7ELYG3UpTcIu4JFlH4xy5%2B7bl9Xt66z92ocz3zToRbxE7w%2FXa5tdSMWD%2FGc3zQLYJnSGqxNkYgXTmwskwgl0359hivcHQasejOSJ5YlAJdj28tuPTCFG2GXw2Ha5qcLdxq%2BEiCxXGTHTwHPt9tBaooaIwuAwGruAoIYx4gWOYccpVcpIcRWElpqlQKy4ln2aySKKqyMJKpZ5Ks8FZHiFGhVLEb3U4DDPunY3YcCQbHaw%2FRX1k%2Fc0MwN2rGVh1UldSHAR9SKWpivte6Dd8nPRcDRigL%2BXUu2t%2FTz0mK608EbfGYxl93u%2BVuZakrgHkuyK0pLmmKOP2bNMRowxeTxvgY6pgH9ZjVk8ovP0Phjt%2Ba8saY%2FqdEbU0yuLI0onk4c09l9OBmalSUPLWic5ykJ%2BQwK4FoYVFDlQfM%2FrGYWGJrKYt6OYCA2iiHMvTtkv1dJ1CXa8LrDtsuWQ8rmfsV9G06qIOWyidpDFWDhiJIPAGB47f4Y8%2FSfIfyY%2BqsjvBow6FxZNB99ATWmYfa0BhpuEJG82172RXJQixvcRYZeCap%2BC5Nh7OTGilFF&X-Amz-Signature=959a7791c7fd1013c593495ce9971d0ecdd3b90d3d22d02010055e4668ee2da6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USWMRN5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGC8OcN5XVt%2BAWezOYyWjw8XkPA7BuTpYpAOQZUNi8U9AiBs%2Fu8kfRl0%2B6tQUE5PJRQU4LbClhKMEgkG8DtUyj%2FZmiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkJofr7VK6wXIOIQSKtwDWcOBQFo9fqUxbQgeCIJRMC2sWKsjqotQypYWZBzI8ySHqggrbUnMM314ghwT6WRV98%2FOoP%2BZA2DmHxcOT97j3JR%2FcKVZdPduYvMGwspNIawW7qFcaioEVcZcUPzJwWEiCVk807Hqu32EDIIdN0fkXlEI5LK3qY5P4rphfQaqIkgwm%2BrXjn7t50pWz6R5P4rNcM3Hx3HhfI%2BC9ro%2BPL4b3gKHW2cG6xatRjdvuS0cyuH8K8tbuEvjI8v%2Fe8RoBCLHxVwq6FsQj93NyTb%2Bg5MC95ZzQCA4Hw5p7r4S77ALmKT9w7ELYG3UpTcIu4JFlH4xy5%2B7bl9Xt66z92ocz3zToRbxE7w%2FXa5tdSMWD%2FGc3zQLYJnSGqxNkYgXTmwskwgl0359hivcHQasejOSJ5YlAJdj28tuPTCFG2GXw2Ha5qcLdxq%2BEiCxXGTHTwHPt9tBaooaIwuAwGruAoIYx4gWOYccpVcpIcRWElpqlQKy4ln2aySKKqyMJKpZ5Ks8FZHiFGhVLEb3U4DDPunY3YcCQbHaw%2FRX1k%2Fc0MwN2rGVh1UldSHAR9SKWpivte6Dd8nPRcDRigL%2BXUu2t%2FTz0mK608EbfGYxl93u%2BVuZakrgHkuyK0pLmmKOP2bNMRowxeTxvgY6pgH9ZjVk8ovP0Phjt%2Ba8saY%2FqdEbU0yuLI0onk4c09l9OBmalSUPLWic5ykJ%2BQwK4FoYVFDlQfM%2FrGYWGJrKYt6OYCA2iiHMvTtkv1dJ1CXa8LrDtsuWQ8rmfsV9G06qIOWyidpDFWDhiJIPAGB47f4Y8%2FSfIfyY%2BqsjvBow6FxZNB99ATWmYfa0BhpuEJG82172RXJQixvcRYZeCap%2BC5Nh7OTGilFF&X-Amz-Signature=4acb2c6b635adfb2c825d8fa5be4d473003cbd188669abae99b641f8b5688c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666USWMRN5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGC8OcN5XVt%2BAWezOYyWjw8XkPA7BuTpYpAOQZUNi8U9AiBs%2Fu8kfRl0%2B6tQUE5PJRQU4LbClhKMEgkG8DtUyj%2FZmiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkJofr7VK6wXIOIQSKtwDWcOBQFo9fqUxbQgeCIJRMC2sWKsjqotQypYWZBzI8ySHqggrbUnMM314ghwT6WRV98%2FOoP%2BZA2DmHxcOT97j3JR%2FcKVZdPduYvMGwspNIawW7qFcaioEVcZcUPzJwWEiCVk807Hqu32EDIIdN0fkXlEI5LK3qY5P4rphfQaqIkgwm%2BrXjn7t50pWz6R5P4rNcM3Hx3HhfI%2BC9ro%2BPL4b3gKHW2cG6xatRjdvuS0cyuH8K8tbuEvjI8v%2Fe8RoBCLHxVwq6FsQj93NyTb%2Bg5MC95ZzQCA4Hw5p7r4S77ALmKT9w7ELYG3UpTcIu4JFlH4xy5%2B7bl9Xt66z92ocz3zToRbxE7w%2FXa5tdSMWD%2FGc3zQLYJnSGqxNkYgXTmwskwgl0359hivcHQasejOSJ5YlAJdj28tuPTCFG2GXw2Ha5qcLdxq%2BEiCxXGTHTwHPt9tBaooaIwuAwGruAoIYx4gWOYccpVcpIcRWElpqlQKy4ln2aySKKqyMJKpZ5Ks8FZHiFGhVLEb3U4DDPunY3YcCQbHaw%2FRX1k%2Fc0MwN2rGVh1UldSHAR9SKWpivte6Dd8nPRcDRigL%2BXUu2t%2FTz0mK608EbfGYxl93u%2BVuZakrgHkuyK0pLmmKOP2bNMRowxeTxvgY6pgH9ZjVk8ovP0Phjt%2Ba8saY%2FqdEbU0yuLI0onk4c09l9OBmalSUPLWic5ykJ%2BQwK4FoYVFDlQfM%2FrGYWGJrKYt6OYCA2iiHMvTtkv1dJ1CXa8LrDtsuWQ8rmfsV9G06qIOWyidpDFWDhiJIPAGB47f4Y8%2FSfIfyY%2BqsjvBow6FxZNB99ATWmYfa0BhpuEJG82172RXJQixvcRYZeCap%2BC5Nh7OTGilFF&X-Amz-Signature=da667f0274387e4393be6171327ce6e8141d8c1ed40c24d37d6b89c1c227ac31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
