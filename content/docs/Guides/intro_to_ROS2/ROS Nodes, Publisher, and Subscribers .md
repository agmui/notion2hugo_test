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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QE5OXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZk9KlWcQjKnVAtiVTEZCiRpt6om9e2aSeO9Na%2BmyouAiAMuuM0JS7LKVjeqUV59iOlLHdyu4x5Z%2FdBx%2Fhj5O5XwyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJvOeBNzObYHf%2B2wVKtwDGvXqgffUV4KswLzR5BS2NX8Nq9uHubDyqOes3nAiQ62jAa5QgCszhxB6tQQpaH1ve8mXFpV5kJlqfbuZxMQA40YQ43bDLzZgWSrKZaElh0H%2FGI48gLI2%2B3qdoBzLQ1z4jD6UB6HnxpOBgPq9KWvBsVCPy9YBJpIGuCwkTu6ZDGgBTx9MsABNgpV62HBfgfbtVWneZB32VehANl4nJP2t0XoIO7kW%2B%2BZjgDqznj6l0xWGJXhHYYlTbRICrqL69QPpjFD%2BYSHhoxur7gshvKrEhDldjauyLqg3XWNiRMZTwvUIM21IMtHPbu6uXYvfb60Ooa%2BOk38CsbNKcc7fCJ5pbLz5WcraroHI9cPYUCXKY3VSNVdEdUcTOt3aWgS%2B%2FOWlaxOy0BvpwKTthnOGMab2OyGOP9OYlC4HK8x5nJg8YOv3tHeepQBGH6RxCc5Q7H7yg4EfFzW6%2BVhcnsthdvrGIub42xlllC0YG4mwSaW%2BNC7jhpKqwgTq2P3Z0szk9m1MLai6BukpnhxqKns3548wnCZekjzEGT2zyrdmsROePRR209%2FQ9MgHkVWYIC1HnWOf3LxmO27e2F88AC7TMctonxJZA4ZyfMcgCBX3g2sWCKBXk88YZufJoiN6D1wwsOP7vAY6pgE7XxpFM6pIBAuo0a78s%2FPtFdcikk3zW%2BfhkcDHzOi%2FQr5PeSVDaI7Zz46G1J3ygnmRb8dHhKK4%2F6uVIRadnuRCcnVBGl%2BGFfOgYf1a9fEyCXWeElFzojiVFHL6yfhqZP7ul%2FX7FC77hwmiHzZBsHN7fyXtwpvMxhEwFsfbqz2BZP24qzuRQmVrqdUIJTFeNo6CRUgHXRai3AkvgF5XH0g%2BNAX9lgZo&X-Amz-Signature=7f547d2ee60e085c46925c2949cf7820ac305ef346e7ca8e2a619dd526772278&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QE5OXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZk9KlWcQjKnVAtiVTEZCiRpt6om9e2aSeO9Na%2BmyouAiAMuuM0JS7LKVjeqUV59iOlLHdyu4x5Z%2FdBx%2Fhj5O5XwyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJvOeBNzObYHf%2B2wVKtwDGvXqgffUV4KswLzR5BS2NX8Nq9uHubDyqOes3nAiQ62jAa5QgCszhxB6tQQpaH1ve8mXFpV5kJlqfbuZxMQA40YQ43bDLzZgWSrKZaElh0H%2FGI48gLI2%2B3qdoBzLQ1z4jD6UB6HnxpOBgPq9KWvBsVCPy9YBJpIGuCwkTu6ZDGgBTx9MsABNgpV62HBfgfbtVWneZB32VehANl4nJP2t0XoIO7kW%2B%2BZjgDqznj6l0xWGJXhHYYlTbRICrqL69QPpjFD%2BYSHhoxur7gshvKrEhDldjauyLqg3XWNiRMZTwvUIM21IMtHPbu6uXYvfb60Ooa%2BOk38CsbNKcc7fCJ5pbLz5WcraroHI9cPYUCXKY3VSNVdEdUcTOt3aWgS%2B%2FOWlaxOy0BvpwKTthnOGMab2OyGOP9OYlC4HK8x5nJg8YOv3tHeepQBGH6RxCc5Q7H7yg4EfFzW6%2BVhcnsthdvrGIub42xlllC0YG4mwSaW%2BNC7jhpKqwgTq2P3Z0szk9m1MLai6BukpnhxqKns3548wnCZekjzEGT2zyrdmsROePRR209%2FQ9MgHkVWYIC1HnWOf3LxmO27e2F88AC7TMctonxJZA4ZyfMcgCBX3g2sWCKBXk88YZufJoiN6D1wwsOP7vAY6pgE7XxpFM6pIBAuo0a78s%2FPtFdcikk3zW%2BfhkcDHzOi%2FQr5PeSVDaI7Zz46G1J3ygnmRb8dHhKK4%2F6uVIRadnuRCcnVBGl%2BGFfOgYf1a9fEyCXWeElFzojiVFHL6yfhqZP7ul%2FX7FC77hwmiHzZBsHN7fyXtwpvMxhEwFsfbqz2BZP24qzuRQmVrqdUIJTFeNo6CRUgHXRai3AkvgF5XH0g%2BNAX9lgZo&X-Amz-Signature=a36f73b436227894eb95764ced47e6ea8204a16033c95f4599ab9eff1096695a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QE5OXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZk9KlWcQjKnVAtiVTEZCiRpt6om9e2aSeO9Na%2BmyouAiAMuuM0JS7LKVjeqUV59iOlLHdyu4x5Z%2FdBx%2Fhj5O5XwyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJvOeBNzObYHf%2B2wVKtwDGvXqgffUV4KswLzR5BS2NX8Nq9uHubDyqOes3nAiQ62jAa5QgCszhxB6tQQpaH1ve8mXFpV5kJlqfbuZxMQA40YQ43bDLzZgWSrKZaElh0H%2FGI48gLI2%2B3qdoBzLQ1z4jD6UB6HnxpOBgPq9KWvBsVCPy9YBJpIGuCwkTu6ZDGgBTx9MsABNgpV62HBfgfbtVWneZB32VehANl4nJP2t0XoIO7kW%2B%2BZjgDqznj6l0xWGJXhHYYlTbRICrqL69QPpjFD%2BYSHhoxur7gshvKrEhDldjauyLqg3XWNiRMZTwvUIM21IMtHPbu6uXYvfb60Ooa%2BOk38CsbNKcc7fCJ5pbLz5WcraroHI9cPYUCXKY3VSNVdEdUcTOt3aWgS%2B%2FOWlaxOy0BvpwKTthnOGMab2OyGOP9OYlC4HK8x5nJg8YOv3tHeepQBGH6RxCc5Q7H7yg4EfFzW6%2BVhcnsthdvrGIub42xlllC0YG4mwSaW%2BNC7jhpKqwgTq2P3Z0szk9m1MLai6BukpnhxqKns3548wnCZekjzEGT2zyrdmsROePRR209%2FQ9MgHkVWYIC1HnWOf3LxmO27e2F88AC7TMctonxJZA4ZyfMcgCBX3g2sWCKBXk88YZufJoiN6D1wwsOP7vAY6pgE7XxpFM6pIBAuo0a78s%2FPtFdcikk3zW%2BfhkcDHzOi%2FQr5PeSVDaI7Zz46G1J3ygnmRb8dHhKK4%2F6uVIRadnuRCcnVBGl%2BGFfOgYf1a9fEyCXWeElFzojiVFHL6yfhqZP7ul%2FX7FC77hwmiHzZBsHN7fyXtwpvMxhEwFsfbqz2BZP24qzuRQmVrqdUIJTFeNo6CRUgHXRai3AkvgF5XH0g%2BNAX9lgZo&X-Amz-Signature=724749d9b521882743807d3c7b35b7980cfc8ef200d12c81c46d8b35efe38216&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QE5OXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZk9KlWcQjKnVAtiVTEZCiRpt6om9e2aSeO9Na%2BmyouAiAMuuM0JS7LKVjeqUV59iOlLHdyu4x5Z%2FdBx%2Fhj5O5XwyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJvOeBNzObYHf%2B2wVKtwDGvXqgffUV4KswLzR5BS2NX8Nq9uHubDyqOes3nAiQ62jAa5QgCszhxB6tQQpaH1ve8mXFpV5kJlqfbuZxMQA40YQ43bDLzZgWSrKZaElh0H%2FGI48gLI2%2B3qdoBzLQ1z4jD6UB6HnxpOBgPq9KWvBsVCPy9YBJpIGuCwkTu6ZDGgBTx9MsABNgpV62HBfgfbtVWneZB32VehANl4nJP2t0XoIO7kW%2B%2BZjgDqznj6l0xWGJXhHYYlTbRICrqL69QPpjFD%2BYSHhoxur7gshvKrEhDldjauyLqg3XWNiRMZTwvUIM21IMtHPbu6uXYvfb60Ooa%2BOk38CsbNKcc7fCJ5pbLz5WcraroHI9cPYUCXKY3VSNVdEdUcTOt3aWgS%2B%2FOWlaxOy0BvpwKTthnOGMab2OyGOP9OYlC4HK8x5nJg8YOv3tHeepQBGH6RxCc5Q7H7yg4EfFzW6%2BVhcnsthdvrGIub42xlllC0YG4mwSaW%2BNC7jhpKqwgTq2P3Z0szk9m1MLai6BukpnhxqKns3548wnCZekjzEGT2zyrdmsROePRR209%2FQ9MgHkVWYIC1HnWOf3LxmO27e2F88AC7TMctonxJZA4ZyfMcgCBX3g2sWCKBXk88YZufJoiN6D1wwsOP7vAY6pgE7XxpFM6pIBAuo0a78s%2FPtFdcikk3zW%2BfhkcDHzOi%2FQr5PeSVDaI7Zz46G1J3ygnmRb8dHhKK4%2F6uVIRadnuRCcnVBGl%2BGFfOgYf1a9fEyCXWeElFzojiVFHL6yfhqZP7ul%2FX7FC77hwmiHzZBsHN7fyXtwpvMxhEwFsfbqz2BZP24qzuRQmVrqdUIJTFeNo6CRUgHXRai3AkvgF5XH0g%2BNAX9lgZo&X-Amz-Signature=c19e43274fcb59259f3157be5240541a98c2bc85d1b2a1378c18c248b5b292d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QE5OXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZk9KlWcQjKnVAtiVTEZCiRpt6om9e2aSeO9Na%2BmyouAiAMuuM0JS7LKVjeqUV59iOlLHdyu4x5Z%2FdBx%2Fhj5O5XwyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJvOeBNzObYHf%2B2wVKtwDGvXqgffUV4KswLzR5BS2NX8Nq9uHubDyqOes3nAiQ62jAa5QgCszhxB6tQQpaH1ve8mXFpV5kJlqfbuZxMQA40YQ43bDLzZgWSrKZaElh0H%2FGI48gLI2%2B3qdoBzLQ1z4jD6UB6HnxpOBgPq9KWvBsVCPy9YBJpIGuCwkTu6ZDGgBTx9MsABNgpV62HBfgfbtVWneZB32VehANl4nJP2t0XoIO7kW%2B%2BZjgDqznj6l0xWGJXhHYYlTbRICrqL69QPpjFD%2BYSHhoxur7gshvKrEhDldjauyLqg3XWNiRMZTwvUIM21IMtHPbu6uXYvfb60Ooa%2BOk38CsbNKcc7fCJ5pbLz5WcraroHI9cPYUCXKY3VSNVdEdUcTOt3aWgS%2B%2FOWlaxOy0BvpwKTthnOGMab2OyGOP9OYlC4HK8x5nJg8YOv3tHeepQBGH6RxCc5Q7H7yg4EfFzW6%2BVhcnsthdvrGIub42xlllC0YG4mwSaW%2BNC7jhpKqwgTq2P3Z0szk9m1MLai6BukpnhxqKns3548wnCZekjzEGT2zyrdmsROePRR209%2FQ9MgHkVWYIC1HnWOf3LxmO27e2F88AC7TMctonxJZA4ZyfMcgCBX3g2sWCKBXk88YZufJoiN6D1wwsOP7vAY6pgE7XxpFM6pIBAuo0a78s%2FPtFdcikk3zW%2BfhkcDHzOi%2FQr5PeSVDaI7Zz46G1J3ygnmRb8dHhKK4%2F6uVIRadnuRCcnVBGl%2BGFfOgYf1a9fEyCXWeElFzojiVFHL6yfhqZP7ul%2FX7FC77hwmiHzZBsHN7fyXtwpvMxhEwFsfbqz2BZP24qzuRQmVrqdUIJTFeNo6CRUgHXRai3AkvgF5XH0g%2BNAX9lgZo&X-Amz-Signature=354434d38eea561b101de404633651a70ec1616a433b420e717cbe9966c9dc16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QE5OXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZk9KlWcQjKnVAtiVTEZCiRpt6om9e2aSeO9Na%2BmyouAiAMuuM0JS7LKVjeqUV59iOlLHdyu4x5Z%2FdBx%2Fhj5O5XwyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJvOeBNzObYHf%2B2wVKtwDGvXqgffUV4KswLzR5BS2NX8Nq9uHubDyqOes3nAiQ62jAa5QgCszhxB6tQQpaH1ve8mXFpV5kJlqfbuZxMQA40YQ43bDLzZgWSrKZaElh0H%2FGI48gLI2%2B3qdoBzLQ1z4jD6UB6HnxpOBgPq9KWvBsVCPy9YBJpIGuCwkTu6ZDGgBTx9MsABNgpV62HBfgfbtVWneZB32VehANl4nJP2t0XoIO7kW%2B%2BZjgDqznj6l0xWGJXhHYYlTbRICrqL69QPpjFD%2BYSHhoxur7gshvKrEhDldjauyLqg3XWNiRMZTwvUIM21IMtHPbu6uXYvfb60Ooa%2BOk38CsbNKcc7fCJ5pbLz5WcraroHI9cPYUCXKY3VSNVdEdUcTOt3aWgS%2B%2FOWlaxOy0BvpwKTthnOGMab2OyGOP9OYlC4HK8x5nJg8YOv3tHeepQBGH6RxCc5Q7H7yg4EfFzW6%2BVhcnsthdvrGIub42xlllC0YG4mwSaW%2BNC7jhpKqwgTq2P3Z0szk9m1MLai6BukpnhxqKns3548wnCZekjzEGT2zyrdmsROePRR209%2FQ9MgHkVWYIC1HnWOf3LxmO27e2F88AC7TMctonxJZA4ZyfMcgCBX3g2sWCKBXk88YZufJoiN6D1wwsOP7vAY6pgE7XxpFM6pIBAuo0a78s%2FPtFdcikk3zW%2BfhkcDHzOi%2FQr5PeSVDaI7Zz46G1J3ygnmRb8dHhKK4%2F6uVIRadnuRCcnVBGl%2BGFfOgYf1a9fEyCXWeElFzojiVFHL6yfhqZP7ul%2FX7FC77hwmiHzZBsHN7fyXtwpvMxhEwFsfbqz2BZP24qzuRQmVrqdUIJTFeNo6CRUgHXRai3AkvgF5XH0g%2BNAX9lgZo&X-Amz-Signature=5ffb5629aa639f143bcb3255fca5ab91fa46cb24edef9c6746ce37086dceca98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QE5OXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZk9KlWcQjKnVAtiVTEZCiRpt6om9e2aSeO9Na%2BmyouAiAMuuM0JS7LKVjeqUV59iOlLHdyu4x5Z%2FdBx%2Fhj5O5XwyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJvOeBNzObYHf%2B2wVKtwDGvXqgffUV4KswLzR5BS2NX8Nq9uHubDyqOes3nAiQ62jAa5QgCszhxB6tQQpaH1ve8mXFpV5kJlqfbuZxMQA40YQ43bDLzZgWSrKZaElh0H%2FGI48gLI2%2B3qdoBzLQ1z4jD6UB6HnxpOBgPq9KWvBsVCPy9YBJpIGuCwkTu6ZDGgBTx9MsABNgpV62HBfgfbtVWneZB32VehANl4nJP2t0XoIO7kW%2B%2BZjgDqznj6l0xWGJXhHYYlTbRICrqL69QPpjFD%2BYSHhoxur7gshvKrEhDldjauyLqg3XWNiRMZTwvUIM21IMtHPbu6uXYvfb60Ooa%2BOk38CsbNKcc7fCJ5pbLz5WcraroHI9cPYUCXKY3VSNVdEdUcTOt3aWgS%2B%2FOWlaxOy0BvpwKTthnOGMab2OyGOP9OYlC4HK8x5nJg8YOv3tHeepQBGH6RxCc5Q7H7yg4EfFzW6%2BVhcnsthdvrGIub42xlllC0YG4mwSaW%2BNC7jhpKqwgTq2P3Z0szk9m1MLai6BukpnhxqKns3548wnCZekjzEGT2zyrdmsROePRR209%2FQ9MgHkVWYIC1HnWOf3LxmO27e2F88AC7TMctonxJZA4ZyfMcgCBX3g2sWCKBXk88YZufJoiN6D1wwsOP7vAY6pgE7XxpFM6pIBAuo0a78s%2FPtFdcikk3zW%2BfhkcDHzOi%2FQr5PeSVDaI7Zz46G1J3ygnmRb8dHhKK4%2F6uVIRadnuRCcnVBGl%2BGFfOgYf1a9fEyCXWeElFzojiVFHL6yfhqZP7ul%2FX7FC77hwmiHzZBsHN7fyXtwpvMxhEwFsfbqz2BZP24qzuRQmVrqdUIJTFeNo6CRUgHXRai3AkvgF5XH0g%2BNAX9lgZo&X-Amz-Signature=2a08e7c42bac4514cdb4ca94a9bf4e9354fbff6ac9b8ca40a18fe936dd5d99e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QE5OXC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZk9KlWcQjKnVAtiVTEZCiRpt6om9e2aSeO9Na%2BmyouAiAMuuM0JS7LKVjeqUV59iOlLHdyu4x5Z%2FdBx%2Fhj5O5XwyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJvOeBNzObYHf%2B2wVKtwDGvXqgffUV4KswLzR5BS2NX8Nq9uHubDyqOes3nAiQ62jAa5QgCszhxB6tQQpaH1ve8mXFpV5kJlqfbuZxMQA40YQ43bDLzZgWSrKZaElh0H%2FGI48gLI2%2B3qdoBzLQ1z4jD6UB6HnxpOBgPq9KWvBsVCPy9YBJpIGuCwkTu6ZDGgBTx9MsABNgpV62HBfgfbtVWneZB32VehANl4nJP2t0XoIO7kW%2B%2BZjgDqznj6l0xWGJXhHYYlTbRICrqL69QPpjFD%2BYSHhoxur7gshvKrEhDldjauyLqg3XWNiRMZTwvUIM21IMtHPbu6uXYvfb60Ooa%2BOk38CsbNKcc7fCJ5pbLz5WcraroHI9cPYUCXKY3VSNVdEdUcTOt3aWgS%2B%2FOWlaxOy0BvpwKTthnOGMab2OyGOP9OYlC4HK8x5nJg8YOv3tHeepQBGH6RxCc5Q7H7yg4EfFzW6%2BVhcnsthdvrGIub42xlllC0YG4mwSaW%2BNC7jhpKqwgTq2P3Z0szk9m1MLai6BukpnhxqKns3548wnCZekjzEGT2zyrdmsROePRR209%2FQ9MgHkVWYIC1HnWOf3LxmO27e2F88AC7TMctonxJZA4ZyfMcgCBX3g2sWCKBXk88YZufJoiN6D1wwsOP7vAY6pgE7XxpFM6pIBAuo0a78s%2FPtFdcikk3zW%2BfhkcDHzOi%2FQr5PeSVDaI7Zz46G1J3ygnmRb8dHhKK4%2F6uVIRadnuRCcnVBGl%2BGFfOgYf1a9fEyCXWeElFzojiVFHL6yfhqZP7ul%2FX7FC77hwmiHzZBsHN7fyXtwpvMxhEwFsfbqz2BZP24qzuRQmVrqdUIJTFeNo6CRUgHXRai3AkvgF5XH0g%2BNAX9lgZo&X-Amz-Signature=e8dfb432a9a4aeaf185af2bdc7cff621c705ba82a743863c0562025667701fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
