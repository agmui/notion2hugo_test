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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYY7TF2Y%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICdZTMVkLNAH3g0eRGHZSfjBfWtOM0Clfy3tuE2%2FyCvxAiB%2BHl3fZKuiZ4xMx3YT6iOYJlnmpu21rfh25x8IBNl%2FqyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtfK2ouXGIpevcGzKtwDHxh0Ou3gr2aI%2FYCG8DBrInbyCp6rtAS1grWd%2BcrNZX1Bt9xugOy4KFqMqA2dNv4js89AyAPzSaBhDX7bMs6LAunYpnO7KkiB3ioTMAEXfGkpUCunuQvFQxv7EJg0u4hxCLjk96gdmEq7wiDzSRJxuHX6rECMsiOyf5K1uYy73IPIeFLiB4Q47TgJjaq0XqBLrfd6TltvXtY8sYn1LUyy2%2FrV4lzRsXd6LlwexMK8yu%2B3PgXfvmTXBcshNJj1sw7%2FkGvt6qNsn7hV6HRisdQxU4L0FrpIMnOl%2F6tM3%2F%2FXrrL5P1DI32kE%2BzO4LqxgcPLNlVp2v5m%2BhQKdoKKON%2F1OO2YrWdjpYy2MrOgfxvHg%2BDmmhfLbiDZC6N9xOgmuXAMKpKjXwUSTMTH%2Fp55tYJ%2FJX%2FTFsUBZ2HRxFQc%2B7EjLH%2FK4Fi7x2U5%2FvXfamp9WEG9qIz%2FmqeeXMQwmQIXMlGa1FgZ5swyYKB5BkWqYiBQF8trMitRB9kzImnkPdbrsTE%2F8MppT8WbxdShFK5JqhUTTLBsr3CvY6J%2BwO6deKX7F5veNqMiiRuhovIOWz4fXXCeKq88FQURbeideR8rZBjT9zCBTE8NwHzcs11y6W2Rwffv86vxta6q86dfYBu8w%2FoOvvwY6pgGwz7T73Wb%2BXRn1joqj6UAxcsqBysWg4YQ1OobjhrmeLmnagAFk9IT9ANW5msihfXeI4QXMPGGUg52mV2SY1kw%2BVO3FRmKGa9K4BBsTeIgU%2F0nJwKmMbdCORUg9pHpm0JVIPysPZGNkBQ071LWWe6roYIVhvBUsyJ5cn%2B8I4F8vFwiuwhSeIKBAPB9ApjKphS9HlHsAoam9dcRQEmS4g7vNarU0n6xl&X-Amz-Signature=2384696912967682dac61842efafcc29a552ff9a363041ebd6b240bb4f2318cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYY7TF2Y%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICdZTMVkLNAH3g0eRGHZSfjBfWtOM0Clfy3tuE2%2FyCvxAiB%2BHl3fZKuiZ4xMx3YT6iOYJlnmpu21rfh25x8IBNl%2FqyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtfK2ouXGIpevcGzKtwDHxh0Ou3gr2aI%2FYCG8DBrInbyCp6rtAS1grWd%2BcrNZX1Bt9xugOy4KFqMqA2dNv4js89AyAPzSaBhDX7bMs6LAunYpnO7KkiB3ioTMAEXfGkpUCunuQvFQxv7EJg0u4hxCLjk96gdmEq7wiDzSRJxuHX6rECMsiOyf5K1uYy73IPIeFLiB4Q47TgJjaq0XqBLrfd6TltvXtY8sYn1LUyy2%2FrV4lzRsXd6LlwexMK8yu%2B3PgXfvmTXBcshNJj1sw7%2FkGvt6qNsn7hV6HRisdQxU4L0FrpIMnOl%2F6tM3%2F%2FXrrL5P1DI32kE%2BzO4LqxgcPLNlVp2v5m%2BhQKdoKKON%2F1OO2YrWdjpYy2MrOgfxvHg%2BDmmhfLbiDZC6N9xOgmuXAMKpKjXwUSTMTH%2Fp55tYJ%2FJX%2FTFsUBZ2HRxFQc%2B7EjLH%2FK4Fi7x2U5%2FvXfamp9WEG9qIz%2FmqeeXMQwmQIXMlGa1FgZ5swyYKB5BkWqYiBQF8trMitRB9kzImnkPdbrsTE%2F8MppT8WbxdShFK5JqhUTTLBsr3CvY6J%2BwO6deKX7F5veNqMiiRuhovIOWz4fXXCeKq88FQURbeideR8rZBjT9zCBTE8NwHzcs11y6W2Rwffv86vxta6q86dfYBu8w%2FoOvvwY6pgGwz7T73Wb%2BXRn1joqj6UAxcsqBysWg4YQ1OobjhrmeLmnagAFk9IT9ANW5msihfXeI4QXMPGGUg52mV2SY1kw%2BVO3FRmKGa9K4BBsTeIgU%2F0nJwKmMbdCORUg9pHpm0JVIPysPZGNkBQ071LWWe6roYIVhvBUsyJ5cn%2B8I4F8vFwiuwhSeIKBAPB9ApjKphS9HlHsAoam9dcRQEmS4g7vNarU0n6xl&X-Amz-Signature=2b2aa42b8222d6d8d77a82247451fca57e105527c28f6efd17bcc351c2136d74&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYY7TF2Y%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICdZTMVkLNAH3g0eRGHZSfjBfWtOM0Clfy3tuE2%2FyCvxAiB%2BHl3fZKuiZ4xMx3YT6iOYJlnmpu21rfh25x8IBNl%2FqyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtfK2ouXGIpevcGzKtwDHxh0Ou3gr2aI%2FYCG8DBrInbyCp6rtAS1grWd%2BcrNZX1Bt9xugOy4KFqMqA2dNv4js89AyAPzSaBhDX7bMs6LAunYpnO7KkiB3ioTMAEXfGkpUCunuQvFQxv7EJg0u4hxCLjk96gdmEq7wiDzSRJxuHX6rECMsiOyf5K1uYy73IPIeFLiB4Q47TgJjaq0XqBLrfd6TltvXtY8sYn1LUyy2%2FrV4lzRsXd6LlwexMK8yu%2B3PgXfvmTXBcshNJj1sw7%2FkGvt6qNsn7hV6HRisdQxU4L0FrpIMnOl%2F6tM3%2F%2FXrrL5P1DI32kE%2BzO4LqxgcPLNlVp2v5m%2BhQKdoKKON%2F1OO2YrWdjpYy2MrOgfxvHg%2BDmmhfLbiDZC6N9xOgmuXAMKpKjXwUSTMTH%2Fp55tYJ%2FJX%2FTFsUBZ2HRxFQc%2B7EjLH%2FK4Fi7x2U5%2FvXfamp9WEG9qIz%2FmqeeXMQwmQIXMlGa1FgZ5swyYKB5BkWqYiBQF8trMitRB9kzImnkPdbrsTE%2F8MppT8WbxdShFK5JqhUTTLBsr3CvY6J%2BwO6deKX7F5veNqMiiRuhovIOWz4fXXCeKq88FQURbeideR8rZBjT9zCBTE8NwHzcs11y6W2Rwffv86vxta6q86dfYBu8w%2FoOvvwY6pgGwz7T73Wb%2BXRn1joqj6UAxcsqBysWg4YQ1OobjhrmeLmnagAFk9IT9ANW5msihfXeI4QXMPGGUg52mV2SY1kw%2BVO3FRmKGa9K4BBsTeIgU%2F0nJwKmMbdCORUg9pHpm0JVIPysPZGNkBQ071LWWe6roYIVhvBUsyJ5cn%2B8I4F8vFwiuwhSeIKBAPB9ApjKphS9HlHsAoam9dcRQEmS4g7vNarU0n6xl&X-Amz-Signature=5348d595772f018d74fb670d5e80c7ee27cea0aef967c69bde9fe8aeed33f608&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYY7TF2Y%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICdZTMVkLNAH3g0eRGHZSfjBfWtOM0Clfy3tuE2%2FyCvxAiB%2BHl3fZKuiZ4xMx3YT6iOYJlnmpu21rfh25x8IBNl%2FqyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtfK2ouXGIpevcGzKtwDHxh0Ou3gr2aI%2FYCG8DBrInbyCp6rtAS1grWd%2BcrNZX1Bt9xugOy4KFqMqA2dNv4js89AyAPzSaBhDX7bMs6LAunYpnO7KkiB3ioTMAEXfGkpUCunuQvFQxv7EJg0u4hxCLjk96gdmEq7wiDzSRJxuHX6rECMsiOyf5K1uYy73IPIeFLiB4Q47TgJjaq0XqBLrfd6TltvXtY8sYn1LUyy2%2FrV4lzRsXd6LlwexMK8yu%2B3PgXfvmTXBcshNJj1sw7%2FkGvt6qNsn7hV6HRisdQxU4L0FrpIMnOl%2F6tM3%2F%2FXrrL5P1DI32kE%2BzO4LqxgcPLNlVp2v5m%2BhQKdoKKON%2F1OO2YrWdjpYy2MrOgfxvHg%2BDmmhfLbiDZC6N9xOgmuXAMKpKjXwUSTMTH%2Fp55tYJ%2FJX%2FTFsUBZ2HRxFQc%2B7EjLH%2FK4Fi7x2U5%2FvXfamp9WEG9qIz%2FmqeeXMQwmQIXMlGa1FgZ5swyYKB5BkWqYiBQF8trMitRB9kzImnkPdbrsTE%2F8MppT8WbxdShFK5JqhUTTLBsr3CvY6J%2BwO6deKX7F5veNqMiiRuhovIOWz4fXXCeKq88FQURbeideR8rZBjT9zCBTE8NwHzcs11y6W2Rwffv86vxta6q86dfYBu8w%2FoOvvwY6pgGwz7T73Wb%2BXRn1joqj6UAxcsqBysWg4YQ1OobjhrmeLmnagAFk9IT9ANW5msihfXeI4QXMPGGUg52mV2SY1kw%2BVO3FRmKGa9K4BBsTeIgU%2F0nJwKmMbdCORUg9pHpm0JVIPysPZGNkBQ071LWWe6roYIVhvBUsyJ5cn%2B8I4F8vFwiuwhSeIKBAPB9ApjKphS9HlHsAoam9dcRQEmS4g7vNarU0n6xl&X-Amz-Signature=c07db4f6940a5c2493e3267518e48fe0950a9b90b7927dc338a268d5f471d4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYY7TF2Y%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICdZTMVkLNAH3g0eRGHZSfjBfWtOM0Clfy3tuE2%2FyCvxAiB%2BHl3fZKuiZ4xMx3YT6iOYJlnmpu21rfh25x8IBNl%2FqyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtfK2ouXGIpevcGzKtwDHxh0Ou3gr2aI%2FYCG8DBrInbyCp6rtAS1grWd%2BcrNZX1Bt9xugOy4KFqMqA2dNv4js89AyAPzSaBhDX7bMs6LAunYpnO7KkiB3ioTMAEXfGkpUCunuQvFQxv7EJg0u4hxCLjk96gdmEq7wiDzSRJxuHX6rECMsiOyf5K1uYy73IPIeFLiB4Q47TgJjaq0XqBLrfd6TltvXtY8sYn1LUyy2%2FrV4lzRsXd6LlwexMK8yu%2B3PgXfvmTXBcshNJj1sw7%2FkGvt6qNsn7hV6HRisdQxU4L0FrpIMnOl%2F6tM3%2F%2FXrrL5P1DI32kE%2BzO4LqxgcPLNlVp2v5m%2BhQKdoKKON%2F1OO2YrWdjpYy2MrOgfxvHg%2BDmmhfLbiDZC6N9xOgmuXAMKpKjXwUSTMTH%2Fp55tYJ%2FJX%2FTFsUBZ2HRxFQc%2B7EjLH%2FK4Fi7x2U5%2FvXfamp9WEG9qIz%2FmqeeXMQwmQIXMlGa1FgZ5swyYKB5BkWqYiBQF8trMitRB9kzImnkPdbrsTE%2F8MppT8WbxdShFK5JqhUTTLBsr3CvY6J%2BwO6deKX7F5veNqMiiRuhovIOWz4fXXCeKq88FQURbeideR8rZBjT9zCBTE8NwHzcs11y6W2Rwffv86vxta6q86dfYBu8w%2FoOvvwY6pgGwz7T73Wb%2BXRn1joqj6UAxcsqBysWg4YQ1OobjhrmeLmnagAFk9IT9ANW5msihfXeI4QXMPGGUg52mV2SY1kw%2BVO3FRmKGa9K4BBsTeIgU%2F0nJwKmMbdCORUg9pHpm0JVIPysPZGNkBQ071LWWe6roYIVhvBUsyJ5cn%2B8I4F8vFwiuwhSeIKBAPB9ApjKphS9HlHsAoam9dcRQEmS4g7vNarU0n6xl&X-Amz-Signature=2c2c659545c4e9cd1360a29f9afdf6011162bacfde45eec14e863c69151e2615&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYY7TF2Y%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICdZTMVkLNAH3g0eRGHZSfjBfWtOM0Clfy3tuE2%2FyCvxAiB%2BHl3fZKuiZ4xMx3YT6iOYJlnmpu21rfh25x8IBNl%2FqyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtfK2ouXGIpevcGzKtwDHxh0Ou3gr2aI%2FYCG8DBrInbyCp6rtAS1grWd%2BcrNZX1Bt9xugOy4KFqMqA2dNv4js89AyAPzSaBhDX7bMs6LAunYpnO7KkiB3ioTMAEXfGkpUCunuQvFQxv7EJg0u4hxCLjk96gdmEq7wiDzSRJxuHX6rECMsiOyf5K1uYy73IPIeFLiB4Q47TgJjaq0XqBLrfd6TltvXtY8sYn1LUyy2%2FrV4lzRsXd6LlwexMK8yu%2B3PgXfvmTXBcshNJj1sw7%2FkGvt6qNsn7hV6HRisdQxU4L0FrpIMnOl%2F6tM3%2F%2FXrrL5P1DI32kE%2BzO4LqxgcPLNlVp2v5m%2BhQKdoKKON%2F1OO2YrWdjpYy2MrOgfxvHg%2BDmmhfLbiDZC6N9xOgmuXAMKpKjXwUSTMTH%2Fp55tYJ%2FJX%2FTFsUBZ2HRxFQc%2B7EjLH%2FK4Fi7x2U5%2FvXfamp9WEG9qIz%2FmqeeXMQwmQIXMlGa1FgZ5swyYKB5BkWqYiBQF8trMitRB9kzImnkPdbrsTE%2F8MppT8WbxdShFK5JqhUTTLBsr3CvY6J%2BwO6deKX7F5veNqMiiRuhovIOWz4fXXCeKq88FQURbeideR8rZBjT9zCBTE8NwHzcs11y6W2Rwffv86vxta6q86dfYBu8w%2FoOvvwY6pgGwz7T73Wb%2BXRn1joqj6UAxcsqBysWg4YQ1OobjhrmeLmnagAFk9IT9ANW5msihfXeI4QXMPGGUg52mV2SY1kw%2BVO3FRmKGa9K4BBsTeIgU%2F0nJwKmMbdCORUg9pHpm0JVIPysPZGNkBQ071LWWe6roYIVhvBUsyJ5cn%2B8I4F8vFwiuwhSeIKBAPB9ApjKphS9HlHsAoam9dcRQEmS4g7vNarU0n6xl&X-Amz-Signature=baf173ce8958eaa33f98fb5ed4aec322dde9f53ce16ef9275401b2a74d062e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYY7TF2Y%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICdZTMVkLNAH3g0eRGHZSfjBfWtOM0Clfy3tuE2%2FyCvxAiB%2BHl3fZKuiZ4xMx3YT6iOYJlnmpu21rfh25x8IBNl%2FqyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtfK2ouXGIpevcGzKtwDHxh0Ou3gr2aI%2FYCG8DBrInbyCp6rtAS1grWd%2BcrNZX1Bt9xugOy4KFqMqA2dNv4js89AyAPzSaBhDX7bMs6LAunYpnO7KkiB3ioTMAEXfGkpUCunuQvFQxv7EJg0u4hxCLjk96gdmEq7wiDzSRJxuHX6rECMsiOyf5K1uYy73IPIeFLiB4Q47TgJjaq0XqBLrfd6TltvXtY8sYn1LUyy2%2FrV4lzRsXd6LlwexMK8yu%2B3PgXfvmTXBcshNJj1sw7%2FkGvt6qNsn7hV6HRisdQxU4L0FrpIMnOl%2F6tM3%2F%2FXrrL5P1DI32kE%2BzO4LqxgcPLNlVp2v5m%2BhQKdoKKON%2F1OO2YrWdjpYy2MrOgfxvHg%2BDmmhfLbiDZC6N9xOgmuXAMKpKjXwUSTMTH%2Fp55tYJ%2FJX%2FTFsUBZ2HRxFQc%2B7EjLH%2FK4Fi7x2U5%2FvXfamp9WEG9qIz%2FmqeeXMQwmQIXMlGa1FgZ5swyYKB5BkWqYiBQF8trMitRB9kzImnkPdbrsTE%2F8MppT8WbxdShFK5JqhUTTLBsr3CvY6J%2BwO6deKX7F5veNqMiiRuhovIOWz4fXXCeKq88FQURbeideR8rZBjT9zCBTE8NwHzcs11y6W2Rwffv86vxta6q86dfYBu8w%2FoOvvwY6pgGwz7T73Wb%2BXRn1joqj6UAxcsqBysWg4YQ1OobjhrmeLmnagAFk9IT9ANW5msihfXeI4QXMPGGUg52mV2SY1kw%2BVO3FRmKGa9K4BBsTeIgU%2F0nJwKmMbdCORUg9pHpm0JVIPysPZGNkBQ071LWWe6roYIVhvBUsyJ5cn%2B8I4F8vFwiuwhSeIKBAPB9ApjKphS9HlHsAoam9dcRQEmS4g7vNarU0n6xl&X-Amz-Signature=bd20f7c526b068a054488db93115ed6240866a06468592b6465000c879a1e92e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYY7TF2Y%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCICdZTMVkLNAH3g0eRGHZSfjBfWtOM0Clfy3tuE2%2FyCvxAiB%2BHl3fZKuiZ4xMx3YT6iOYJlnmpu21rfh25x8IBNl%2FqyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPtfK2ouXGIpevcGzKtwDHxh0Ou3gr2aI%2FYCG8DBrInbyCp6rtAS1grWd%2BcrNZX1Bt9xugOy4KFqMqA2dNv4js89AyAPzSaBhDX7bMs6LAunYpnO7KkiB3ioTMAEXfGkpUCunuQvFQxv7EJg0u4hxCLjk96gdmEq7wiDzSRJxuHX6rECMsiOyf5K1uYy73IPIeFLiB4Q47TgJjaq0XqBLrfd6TltvXtY8sYn1LUyy2%2FrV4lzRsXd6LlwexMK8yu%2B3PgXfvmTXBcshNJj1sw7%2FkGvt6qNsn7hV6HRisdQxU4L0FrpIMnOl%2F6tM3%2F%2FXrrL5P1DI32kE%2BzO4LqxgcPLNlVp2v5m%2BhQKdoKKON%2F1OO2YrWdjpYy2MrOgfxvHg%2BDmmhfLbiDZC6N9xOgmuXAMKpKjXwUSTMTH%2Fp55tYJ%2FJX%2FTFsUBZ2HRxFQc%2B7EjLH%2FK4Fi7x2U5%2FvXfamp9WEG9qIz%2FmqeeXMQwmQIXMlGa1FgZ5swyYKB5BkWqYiBQF8trMitRB9kzImnkPdbrsTE%2F8MppT8WbxdShFK5JqhUTTLBsr3CvY6J%2BwO6deKX7F5veNqMiiRuhovIOWz4fXXCeKq88FQURbeideR8rZBjT9zCBTE8NwHzcs11y6W2Rwffv86vxta6q86dfYBu8w%2FoOvvwY6pgGwz7T73Wb%2BXRn1joqj6UAxcsqBysWg4YQ1OobjhrmeLmnagAFk9IT9ANW5msihfXeI4QXMPGGUg52mV2SY1kw%2BVO3FRmKGa9K4BBsTeIgU%2F0nJwKmMbdCORUg9pHpm0JVIPysPZGNkBQ071LWWe6roYIVhvBUsyJ5cn%2B8I4F8vFwiuwhSeIKBAPB9ApjKphS9HlHsAoam9dcRQEmS4g7vNarU0n6xl&X-Amz-Signature=0928cee2068a73d4fc10127932b5e006f203d9b8740ec25c689229d8328d13d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
