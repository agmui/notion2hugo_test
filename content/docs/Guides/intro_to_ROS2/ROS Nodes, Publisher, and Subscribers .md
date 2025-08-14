---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2MG6FM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5DPdaXv0WQvhW8Sxi7Lxeugct0DZJO0cthu7WadyxDgIhALxtifu1PZPXr%2B7lvhJLGm8NXL8JdS8tY2ujA58U%2F8n%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgweLt4EUX0an7lmlpUq3ANOAIMFhw4vv9cm9HZ%2BZKqvLNrlj%2FiY66ENcjZklaTHepSoPjV8HvXeNjKdBXviwwi9FMGxKCavD4sihEknKS1xwUuP6Xb72a1liNj5v8Lg5FiPHrZPmRTs2lpNADm9vw8DPYhEY%2BKMp3%2FgaiF5cux2rBkWTXxwXXCyct3VbpXYJrZSUdjY4Tz0OFGfCZ5iRqDMhd47mE3qA7t1q2ggHjzuolIuIonkL53A6Ze90XCk4%2BdTy4VOBK6byFuK8Gkm2Mdy9Vw3bQqGI0hOXDpr33SV%2B5Vh4j9PcsnXsZe03gZ90YOMl%2FLRqepMcqOHqxx68n78nKkRRF4bTNkqUon3IobkMos9%2FA7hl2hvL%2BgAnLVGXwH3trDTqdayq5nchKX%2BuoUFS%2F03vdfUDfH3%2FPo6dSdvT%2FgTqShpo2gD9%2BBUhOBzaODCI317N8AZz2kpDM50BgVNlbJ%2Bk60bIH%2FMCTRJxCWOM3tBDA3hjcCDcPVvJzJEY9J%2FruazAOZUrvbbIQye89GEvdkqu%2Bt4aH5zH7kUioVAi%2F5Nu%2FUhGn4Fhjsc0xdopUhOxZrox5%2F1Sre8CEdSxiZ4R5vItcXOVEnCqYo8jZIDGH5ReThTesloVxPcID9z8NK7WCj91WMlMb%2Ff9zCfjPXEBjqkAbe1mU0cc6Cq56ciT4XRDeu3DjKRZWpDi9KvEqPJgSG7L%2F6LEoHq%2BYdwsnkbhVJ9LEp9sxP9W8xK%2BxjGsIFsc95H2WYojo8cIMNlP1X7dygsqPhRt0IFU79vD2YX2f6fNFmtmxsd8UqQSU%2BKC5UEKN3nzaRjhjUpobSrUQTtIFGZw1jLB7Zhs4JZrAGKv79yaOpXwFdZ8bdbJQpFJRIPYRz7R7IS&X-Amz-Signature=24a2cb9ad6e1bf03a677b7c8d94ffab838dfa2a9adb77a5aaf3be0ab238b8231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2MG6FM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5DPdaXv0WQvhW8Sxi7Lxeugct0DZJO0cthu7WadyxDgIhALxtifu1PZPXr%2B7lvhJLGm8NXL8JdS8tY2ujA58U%2F8n%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgweLt4EUX0an7lmlpUq3ANOAIMFhw4vv9cm9HZ%2BZKqvLNrlj%2FiY66ENcjZklaTHepSoPjV8HvXeNjKdBXviwwi9FMGxKCavD4sihEknKS1xwUuP6Xb72a1liNj5v8Lg5FiPHrZPmRTs2lpNADm9vw8DPYhEY%2BKMp3%2FgaiF5cux2rBkWTXxwXXCyct3VbpXYJrZSUdjY4Tz0OFGfCZ5iRqDMhd47mE3qA7t1q2ggHjzuolIuIonkL53A6Ze90XCk4%2BdTy4VOBK6byFuK8Gkm2Mdy9Vw3bQqGI0hOXDpr33SV%2B5Vh4j9PcsnXsZe03gZ90YOMl%2FLRqepMcqOHqxx68n78nKkRRF4bTNkqUon3IobkMos9%2FA7hl2hvL%2BgAnLVGXwH3trDTqdayq5nchKX%2BuoUFS%2F03vdfUDfH3%2FPo6dSdvT%2FgTqShpo2gD9%2BBUhOBzaODCI317N8AZz2kpDM50BgVNlbJ%2Bk60bIH%2FMCTRJxCWOM3tBDA3hjcCDcPVvJzJEY9J%2FruazAOZUrvbbIQye89GEvdkqu%2Bt4aH5zH7kUioVAi%2F5Nu%2FUhGn4Fhjsc0xdopUhOxZrox5%2F1Sre8CEdSxiZ4R5vItcXOVEnCqYo8jZIDGH5ReThTesloVxPcID9z8NK7WCj91WMlMb%2Ff9zCfjPXEBjqkAbe1mU0cc6Cq56ciT4XRDeu3DjKRZWpDi9KvEqPJgSG7L%2F6LEoHq%2BYdwsnkbhVJ9LEp9sxP9W8xK%2BxjGsIFsc95H2WYojo8cIMNlP1X7dygsqPhRt0IFU79vD2YX2f6fNFmtmxsd8UqQSU%2BKC5UEKN3nzaRjhjUpobSrUQTtIFGZw1jLB7Zhs4JZrAGKv79yaOpXwFdZ8bdbJQpFJRIPYRz7R7IS&X-Amz-Signature=cdf962477c2466e99c395aa5526d46debf6478f5d6959c5faa69c228369e6de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2MG6FM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5DPdaXv0WQvhW8Sxi7Lxeugct0DZJO0cthu7WadyxDgIhALxtifu1PZPXr%2B7lvhJLGm8NXL8JdS8tY2ujA58U%2F8n%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgweLt4EUX0an7lmlpUq3ANOAIMFhw4vv9cm9HZ%2BZKqvLNrlj%2FiY66ENcjZklaTHepSoPjV8HvXeNjKdBXviwwi9FMGxKCavD4sihEknKS1xwUuP6Xb72a1liNj5v8Lg5FiPHrZPmRTs2lpNADm9vw8DPYhEY%2BKMp3%2FgaiF5cux2rBkWTXxwXXCyct3VbpXYJrZSUdjY4Tz0OFGfCZ5iRqDMhd47mE3qA7t1q2ggHjzuolIuIonkL53A6Ze90XCk4%2BdTy4VOBK6byFuK8Gkm2Mdy9Vw3bQqGI0hOXDpr33SV%2B5Vh4j9PcsnXsZe03gZ90YOMl%2FLRqepMcqOHqxx68n78nKkRRF4bTNkqUon3IobkMos9%2FA7hl2hvL%2BgAnLVGXwH3trDTqdayq5nchKX%2BuoUFS%2F03vdfUDfH3%2FPo6dSdvT%2FgTqShpo2gD9%2BBUhOBzaODCI317N8AZz2kpDM50BgVNlbJ%2Bk60bIH%2FMCTRJxCWOM3tBDA3hjcCDcPVvJzJEY9J%2FruazAOZUrvbbIQye89GEvdkqu%2Bt4aH5zH7kUioVAi%2F5Nu%2FUhGn4Fhjsc0xdopUhOxZrox5%2F1Sre8CEdSxiZ4R5vItcXOVEnCqYo8jZIDGH5ReThTesloVxPcID9z8NK7WCj91WMlMb%2Ff9zCfjPXEBjqkAbe1mU0cc6Cq56ciT4XRDeu3DjKRZWpDi9KvEqPJgSG7L%2F6LEoHq%2BYdwsnkbhVJ9LEp9sxP9W8xK%2BxjGsIFsc95H2WYojo8cIMNlP1X7dygsqPhRt0IFU79vD2YX2f6fNFmtmxsd8UqQSU%2BKC5UEKN3nzaRjhjUpobSrUQTtIFGZw1jLB7Zhs4JZrAGKv79yaOpXwFdZ8bdbJQpFJRIPYRz7R7IS&X-Amz-Signature=2977934a5251c1b848ae863662570fe1c1d1373a96c469ba3b553367abed9e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2MG6FM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5DPdaXv0WQvhW8Sxi7Lxeugct0DZJO0cthu7WadyxDgIhALxtifu1PZPXr%2B7lvhJLGm8NXL8JdS8tY2ujA58U%2F8n%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgweLt4EUX0an7lmlpUq3ANOAIMFhw4vv9cm9HZ%2BZKqvLNrlj%2FiY66ENcjZklaTHepSoPjV8HvXeNjKdBXviwwi9FMGxKCavD4sihEknKS1xwUuP6Xb72a1liNj5v8Lg5FiPHrZPmRTs2lpNADm9vw8DPYhEY%2BKMp3%2FgaiF5cux2rBkWTXxwXXCyct3VbpXYJrZSUdjY4Tz0OFGfCZ5iRqDMhd47mE3qA7t1q2ggHjzuolIuIonkL53A6Ze90XCk4%2BdTy4VOBK6byFuK8Gkm2Mdy9Vw3bQqGI0hOXDpr33SV%2B5Vh4j9PcsnXsZe03gZ90YOMl%2FLRqepMcqOHqxx68n78nKkRRF4bTNkqUon3IobkMos9%2FA7hl2hvL%2BgAnLVGXwH3trDTqdayq5nchKX%2BuoUFS%2F03vdfUDfH3%2FPo6dSdvT%2FgTqShpo2gD9%2BBUhOBzaODCI317N8AZz2kpDM50BgVNlbJ%2Bk60bIH%2FMCTRJxCWOM3tBDA3hjcCDcPVvJzJEY9J%2FruazAOZUrvbbIQye89GEvdkqu%2Bt4aH5zH7kUioVAi%2F5Nu%2FUhGn4Fhjsc0xdopUhOxZrox5%2F1Sre8CEdSxiZ4R5vItcXOVEnCqYo8jZIDGH5ReThTesloVxPcID9z8NK7WCj91WMlMb%2Ff9zCfjPXEBjqkAbe1mU0cc6Cq56ciT4XRDeu3DjKRZWpDi9KvEqPJgSG7L%2F6LEoHq%2BYdwsnkbhVJ9LEp9sxP9W8xK%2BxjGsIFsc95H2WYojo8cIMNlP1X7dygsqPhRt0IFU79vD2YX2f6fNFmtmxsd8UqQSU%2BKC5UEKN3nzaRjhjUpobSrUQTtIFGZw1jLB7Zhs4JZrAGKv79yaOpXwFdZ8bdbJQpFJRIPYRz7R7IS&X-Amz-Signature=875c61287ea01d12769d6d19174276582a38132d77d4833c13f0a27d90a5cee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2MG6FM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5DPdaXv0WQvhW8Sxi7Lxeugct0DZJO0cthu7WadyxDgIhALxtifu1PZPXr%2B7lvhJLGm8NXL8JdS8tY2ujA58U%2F8n%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgweLt4EUX0an7lmlpUq3ANOAIMFhw4vv9cm9HZ%2BZKqvLNrlj%2FiY66ENcjZklaTHepSoPjV8HvXeNjKdBXviwwi9FMGxKCavD4sihEknKS1xwUuP6Xb72a1liNj5v8Lg5FiPHrZPmRTs2lpNADm9vw8DPYhEY%2BKMp3%2FgaiF5cux2rBkWTXxwXXCyct3VbpXYJrZSUdjY4Tz0OFGfCZ5iRqDMhd47mE3qA7t1q2ggHjzuolIuIonkL53A6Ze90XCk4%2BdTy4VOBK6byFuK8Gkm2Mdy9Vw3bQqGI0hOXDpr33SV%2B5Vh4j9PcsnXsZe03gZ90YOMl%2FLRqepMcqOHqxx68n78nKkRRF4bTNkqUon3IobkMos9%2FA7hl2hvL%2BgAnLVGXwH3trDTqdayq5nchKX%2BuoUFS%2F03vdfUDfH3%2FPo6dSdvT%2FgTqShpo2gD9%2BBUhOBzaODCI317N8AZz2kpDM50BgVNlbJ%2Bk60bIH%2FMCTRJxCWOM3tBDA3hjcCDcPVvJzJEY9J%2FruazAOZUrvbbIQye89GEvdkqu%2Bt4aH5zH7kUioVAi%2F5Nu%2FUhGn4Fhjsc0xdopUhOxZrox5%2F1Sre8CEdSxiZ4R5vItcXOVEnCqYo8jZIDGH5ReThTesloVxPcID9z8NK7WCj91WMlMb%2Ff9zCfjPXEBjqkAbe1mU0cc6Cq56ciT4XRDeu3DjKRZWpDi9KvEqPJgSG7L%2F6LEoHq%2BYdwsnkbhVJ9LEp9sxP9W8xK%2BxjGsIFsc95H2WYojo8cIMNlP1X7dygsqPhRt0IFU79vD2YX2f6fNFmtmxsd8UqQSU%2BKC5UEKN3nzaRjhjUpobSrUQTtIFGZw1jLB7Zhs4JZrAGKv79yaOpXwFdZ8bdbJQpFJRIPYRz7R7IS&X-Amz-Signature=5deea99b2b1da54aa09cc356111875eecf0af0017d33ae3d9328b125e39a88ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2MG6FM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5DPdaXv0WQvhW8Sxi7Lxeugct0DZJO0cthu7WadyxDgIhALxtifu1PZPXr%2B7lvhJLGm8NXL8JdS8tY2ujA58U%2F8n%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgweLt4EUX0an7lmlpUq3ANOAIMFhw4vv9cm9HZ%2BZKqvLNrlj%2FiY66ENcjZklaTHepSoPjV8HvXeNjKdBXviwwi9FMGxKCavD4sihEknKS1xwUuP6Xb72a1liNj5v8Lg5FiPHrZPmRTs2lpNADm9vw8DPYhEY%2BKMp3%2FgaiF5cux2rBkWTXxwXXCyct3VbpXYJrZSUdjY4Tz0OFGfCZ5iRqDMhd47mE3qA7t1q2ggHjzuolIuIonkL53A6Ze90XCk4%2BdTy4VOBK6byFuK8Gkm2Mdy9Vw3bQqGI0hOXDpr33SV%2B5Vh4j9PcsnXsZe03gZ90YOMl%2FLRqepMcqOHqxx68n78nKkRRF4bTNkqUon3IobkMos9%2FA7hl2hvL%2BgAnLVGXwH3trDTqdayq5nchKX%2BuoUFS%2F03vdfUDfH3%2FPo6dSdvT%2FgTqShpo2gD9%2BBUhOBzaODCI317N8AZz2kpDM50BgVNlbJ%2Bk60bIH%2FMCTRJxCWOM3tBDA3hjcCDcPVvJzJEY9J%2FruazAOZUrvbbIQye89GEvdkqu%2Bt4aH5zH7kUioVAi%2F5Nu%2FUhGn4Fhjsc0xdopUhOxZrox5%2F1Sre8CEdSxiZ4R5vItcXOVEnCqYo8jZIDGH5ReThTesloVxPcID9z8NK7WCj91WMlMb%2Ff9zCfjPXEBjqkAbe1mU0cc6Cq56ciT4XRDeu3DjKRZWpDi9KvEqPJgSG7L%2F6LEoHq%2BYdwsnkbhVJ9LEp9sxP9W8xK%2BxjGsIFsc95H2WYojo8cIMNlP1X7dygsqPhRt0IFU79vD2YX2f6fNFmtmxsd8UqQSU%2BKC5UEKN3nzaRjhjUpobSrUQTtIFGZw1jLB7Zhs4JZrAGKv79yaOpXwFdZ8bdbJQpFJRIPYRz7R7IS&X-Amz-Signature=011085b43c6b6bddd27a8a860903d17380e5ae27ce5f60b6ec533437de186011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2MG6FM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5DPdaXv0WQvhW8Sxi7Lxeugct0DZJO0cthu7WadyxDgIhALxtifu1PZPXr%2B7lvhJLGm8NXL8JdS8tY2ujA58U%2F8n%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgweLt4EUX0an7lmlpUq3ANOAIMFhw4vv9cm9HZ%2BZKqvLNrlj%2FiY66ENcjZklaTHepSoPjV8HvXeNjKdBXviwwi9FMGxKCavD4sihEknKS1xwUuP6Xb72a1liNj5v8Lg5FiPHrZPmRTs2lpNADm9vw8DPYhEY%2BKMp3%2FgaiF5cux2rBkWTXxwXXCyct3VbpXYJrZSUdjY4Tz0OFGfCZ5iRqDMhd47mE3qA7t1q2ggHjzuolIuIonkL53A6Ze90XCk4%2BdTy4VOBK6byFuK8Gkm2Mdy9Vw3bQqGI0hOXDpr33SV%2B5Vh4j9PcsnXsZe03gZ90YOMl%2FLRqepMcqOHqxx68n78nKkRRF4bTNkqUon3IobkMos9%2FA7hl2hvL%2BgAnLVGXwH3trDTqdayq5nchKX%2BuoUFS%2F03vdfUDfH3%2FPo6dSdvT%2FgTqShpo2gD9%2BBUhOBzaODCI317N8AZz2kpDM50BgVNlbJ%2Bk60bIH%2FMCTRJxCWOM3tBDA3hjcCDcPVvJzJEY9J%2FruazAOZUrvbbIQye89GEvdkqu%2Bt4aH5zH7kUioVAi%2F5Nu%2FUhGn4Fhjsc0xdopUhOxZrox5%2F1Sre8CEdSxiZ4R5vItcXOVEnCqYo8jZIDGH5ReThTesloVxPcID9z8NK7WCj91WMlMb%2Ff9zCfjPXEBjqkAbe1mU0cc6Cq56ciT4XRDeu3DjKRZWpDi9KvEqPJgSG7L%2F6LEoHq%2BYdwsnkbhVJ9LEp9sxP9W8xK%2BxjGsIFsc95H2WYojo8cIMNlP1X7dygsqPhRt0IFU79vD2YX2f6fNFmtmxsd8UqQSU%2BKC5UEKN3nzaRjhjUpobSrUQTtIFGZw1jLB7Zhs4JZrAGKv79yaOpXwFdZ8bdbJQpFJRIPYRz7R7IS&X-Amz-Signature=785d17400863ed96d27fe10e8395ef2996380adc9615745aeaf689fac920d39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2MG6FM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5DPdaXv0WQvhW8Sxi7Lxeugct0DZJO0cthu7WadyxDgIhALxtifu1PZPXr%2B7lvhJLGm8NXL8JdS8tY2ujA58U%2F8n%2BKv8DCDsQABoMNjM3NDIzMTgzODA1IgweLt4EUX0an7lmlpUq3ANOAIMFhw4vv9cm9HZ%2BZKqvLNrlj%2FiY66ENcjZklaTHepSoPjV8HvXeNjKdBXviwwi9FMGxKCavD4sihEknKS1xwUuP6Xb72a1liNj5v8Lg5FiPHrZPmRTs2lpNADm9vw8DPYhEY%2BKMp3%2FgaiF5cux2rBkWTXxwXXCyct3VbpXYJrZSUdjY4Tz0OFGfCZ5iRqDMhd47mE3qA7t1q2ggHjzuolIuIonkL53A6Ze90XCk4%2BdTy4VOBK6byFuK8Gkm2Mdy9Vw3bQqGI0hOXDpr33SV%2B5Vh4j9PcsnXsZe03gZ90YOMl%2FLRqepMcqOHqxx68n78nKkRRF4bTNkqUon3IobkMos9%2FA7hl2hvL%2BgAnLVGXwH3trDTqdayq5nchKX%2BuoUFS%2F03vdfUDfH3%2FPo6dSdvT%2FgTqShpo2gD9%2BBUhOBzaODCI317N8AZz2kpDM50BgVNlbJ%2Bk60bIH%2FMCTRJxCWOM3tBDA3hjcCDcPVvJzJEY9J%2FruazAOZUrvbbIQye89GEvdkqu%2Bt4aH5zH7kUioVAi%2F5Nu%2FUhGn4Fhjsc0xdopUhOxZrox5%2F1Sre8CEdSxiZ4R5vItcXOVEnCqYo8jZIDGH5ReThTesloVxPcID9z8NK7WCj91WMlMb%2Ff9zCfjPXEBjqkAbe1mU0cc6Cq56ciT4XRDeu3DjKRZWpDi9KvEqPJgSG7L%2F6LEoHq%2BYdwsnkbhVJ9LEp9sxP9W8xK%2BxjGsIFsc95H2WYojo8cIMNlP1X7dygsqPhRt0IFU79vD2YX2f6fNFmtmxsd8UqQSU%2BKC5UEKN3nzaRjhjUpobSrUQTtIFGZw1jLB7Zhs4JZrAGKv79yaOpXwFdZ8bdbJQpFJRIPYRz7R7IS&X-Amz-Signature=5ed518d6bf2ce482c9db49e79c2d02dbf7c7aa648993b8012762c2ff65eaf63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
