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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYHW5RJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHAyzszq5rBopVUo7Ev4jBVAoEwDtLFQq%2FHplUaSVonuAiAQ4V3drmzFyvZyAJNfJ%2BXZd6pJm4X4YIZ%2FlGdf31ktGCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx4r0WvOZOsG69ONiKtwDs4zsQkzwiGyJ1DTALfks5HboEsZRtBckD0ernWKDaD%2FLgLtXBQVdltJ%2FURvUEMvpGH6mlzPW1p%2FA5pekXJYVUfbftqKNmtBJL3DQ5R7FIDRbx9Av9fb7aW7sWaomAniY5damQz3GJ2%2BUWtHCxHZYQh1vOn1FowUacgKoeNknV8JgUXQdNrLNKZhgbHMKAMrYiQqcYXMajli43xghptCZMztfSN5bkNLmfTL4H3izTfnMk%2B4deZuiBVNexfoLaDyQ%2Fm60Uxz7teUhiaVmCpoKlRpfIOtjCZ%2BHroTmLM0j3FfsGNv8LqojOuKEzIRxeuLSejGA5ObEWcqpGmUY44UbvfLLRDgitNg%2F0h1t2nJVD2scATHn9n9rbuoSnTJ3u4iB3JkfjbKpkjWFAtaOTAclqnQnMysX26%2BNdwIf7nQnZTIN9aVYw6tL6ysG5cXlA62RcZiuBbUA6JBLfWObk9KJsptAkOJG7LGPjQACujo5VKf%2B079iczJSykyYzWriBvENs6M3CQjish%2FhZY23PjSKFShRXfzA%2FVY4fMy6SmiK1gLrGr8OPab8WTtsR8fRwOKQWeicfgyrt50eDUtdFw6HBgVmVqQrWbKBXmYE4wMYKyJhYa0i1XPQ30SYLbowntnfwgY6pgHThaS9ac65%2BdOLJPnS%2FZhS94WXQwk0ld6Q%2BGAv5rN9Bq2Zz05BCw0Ka2%2FqzRH9vjWeSkdcb41weSIl7MxQbWfBiCTLwlQHYor459kFoHFUisLHhJzcdsOq7LTEFSZw2JWmNn0wLgRhiqbCuLfZFs1DiQf7xR445ZxtXSkNFMtv%2FstiSnXVz17EBoVJLlNs7%2ByHWa%2Fi7yGhQv7uqoHH3VpSV8jLirfl&X-Amz-Signature=ebf344775a9f9d753816d14f967e96420932c1f35085e8e995e9c880a6159dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYHW5RJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHAyzszq5rBopVUo7Ev4jBVAoEwDtLFQq%2FHplUaSVonuAiAQ4V3drmzFyvZyAJNfJ%2BXZd6pJm4X4YIZ%2FlGdf31ktGCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx4r0WvOZOsG69ONiKtwDs4zsQkzwiGyJ1DTALfks5HboEsZRtBckD0ernWKDaD%2FLgLtXBQVdltJ%2FURvUEMvpGH6mlzPW1p%2FA5pekXJYVUfbftqKNmtBJL3DQ5R7FIDRbx9Av9fb7aW7sWaomAniY5damQz3GJ2%2BUWtHCxHZYQh1vOn1FowUacgKoeNknV8JgUXQdNrLNKZhgbHMKAMrYiQqcYXMajli43xghptCZMztfSN5bkNLmfTL4H3izTfnMk%2B4deZuiBVNexfoLaDyQ%2Fm60Uxz7teUhiaVmCpoKlRpfIOtjCZ%2BHroTmLM0j3FfsGNv8LqojOuKEzIRxeuLSejGA5ObEWcqpGmUY44UbvfLLRDgitNg%2F0h1t2nJVD2scATHn9n9rbuoSnTJ3u4iB3JkfjbKpkjWFAtaOTAclqnQnMysX26%2BNdwIf7nQnZTIN9aVYw6tL6ysG5cXlA62RcZiuBbUA6JBLfWObk9KJsptAkOJG7LGPjQACujo5VKf%2B079iczJSykyYzWriBvENs6M3CQjish%2FhZY23PjSKFShRXfzA%2FVY4fMy6SmiK1gLrGr8OPab8WTtsR8fRwOKQWeicfgyrt50eDUtdFw6HBgVmVqQrWbKBXmYE4wMYKyJhYa0i1XPQ30SYLbowntnfwgY6pgHThaS9ac65%2BdOLJPnS%2FZhS94WXQwk0ld6Q%2BGAv5rN9Bq2Zz05BCw0Ka2%2FqzRH9vjWeSkdcb41weSIl7MxQbWfBiCTLwlQHYor459kFoHFUisLHhJzcdsOq7LTEFSZw2JWmNn0wLgRhiqbCuLfZFs1DiQf7xR445ZxtXSkNFMtv%2FstiSnXVz17EBoVJLlNs7%2ByHWa%2Fi7yGhQv7uqoHH3VpSV8jLirfl&X-Amz-Signature=81573d1287b47f86e735eb601a9a5120577cd3d8cf730858714ba1451fd6ea7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYHW5RJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHAyzszq5rBopVUo7Ev4jBVAoEwDtLFQq%2FHplUaSVonuAiAQ4V3drmzFyvZyAJNfJ%2BXZd6pJm4X4YIZ%2FlGdf31ktGCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx4r0WvOZOsG69ONiKtwDs4zsQkzwiGyJ1DTALfks5HboEsZRtBckD0ernWKDaD%2FLgLtXBQVdltJ%2FURvUEMvpGH6mlzPW1p%2FA5pekXJYVUfbftqKNmtBJL3DQ5R7FIDRbx9Av9fb7aW7sWaomAniY5damQz3GJ2%2BUWtHCxHZYQh1vOn1FowUacgKoeNknV8JgUXQdNrLNKZhgbHMKAMrYiQqcYXMajli43xghptCZMztfSN5bkNLmfTL4H3izTfnMk%2B4deZuiBVNexfoLaDyQ%2Fm60Uxz7teUhiaVmCpoKlRpfIOtjCZ%2BHroTmLM0j3FfsGNv8LqojOuKEzIRxeuLSejGA5ObEWcqpGmUY44UbvfLLRDgitNg%2F0h1t2nJVD2scATHn9n9rbuoSnTJ3u4iB3JkfjbKpkjWFAtaOTAclqnQnMysX26%2BNdwIf7nQnZTIN9aVYw6tL6ysG5cXlA62RcZiuBbUA6JBLfWObk9KJsptAkOJG7LGPjQACujo5VKf%2B079iczJSykyYzWriBvENs6M3CQjish%2FhZY23PjSKFShRXfzA%2FVY4fMy6SmiK1gLrGr8OPab8WTtsR8fRwOKQWeicfgyrt50eDUtdFw6HBgVmVqQrWbKBXmYE4wMYKyJhYa0i1XPQ30SYLbowntnfwgY6pgHThaS9ac65%2BdOLJPnS%2FZhS94WXQwk0ld6Q%2BGAv5rN9Bq2Zz05BCw0Ka2%2FqzRH9vjWeSkdcb41weSIl7MxQbWfBiCTLwlQHYor459kFoHFUisLHhJzcdsOq7LTEFSZw2JWmNn0wLgRhiqbCuLfZFs1DiQf7xR445ZxtXSkNFMtv%2FstiSnXVz17EBoVJLlNs7%2ByHWa%2Fi7yGhQv7uqoHH3VpSV8jLirfl&X-Amz-Signature=a6964313e34e07f896d2202746f97140cd53862f132243d3f137a7305c10d99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYHW5RJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHAyzszq5rBopVUo7Ev4jBVAoEwDtLFQq%2FHplUaSVonuAiAQ4V3drmzFyvZyAJNfJ%2BXZd6pJm4X4YIZ%2FlGdf31ktGCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx4r0WvOZOsG69ONiKtwDs4zsQkzwiGyJ1DTALfks5HboEsZRtBckD0ernWKDaD%2FLgLtXBQVdltJ%2FURvUEMvpGH6mlzPW1p%2FA5pekXJYVUfbftqKNmtBJL3DQ5R7FIDRbx9Av9fb7aW7sWaomAniY5damQz3GJ2%2BUWtHCxHZYQh1vOn1FowUacgKoeNknV8JgUXQdNrLNKZhgbHMKAMrYiQqcYXMajli43xghptCZMztfSN5bkNLmfTL4H3izTfnMk%2B4deZuiBVNexfoLaDyQ%2Fm60Uxz7teUhiaVmCpoKlRpfIOtjCZ%2BHroTmLM0j3FfsGNv8LqojOuKEzIRxeuLSejGA5ObEWcqpGmUY44UbvfLLRDgitNg%2F0h1t2nJVD2scATHn9n9rbuoSnTJ3u4iB3JkfjbKpkjWFAtaOTAclqnQnMysX26%2BNdwIf7nQnZTIN9aVYw6tL6ysG5cXlA62RcZiuBbUA6JBLfWObk9KJsptAkOJG7LGPjQACujo5VKf%2B079iczJSykyYzWriBvENs6M3CQjish%2FhZY23PjSKFShRXfzA%2FVY4fMy6SmiK1gLrGr8OPab8WTtsR8fRwOKQWeicfgyrt50eDUtdFw6HBgVmVqQrWbKBXmYE4wMYKyJhYa0i1XPQ30SYLbowntnfwgY6pgHThaS9ac65%2BdOLJPnS%2FZhS94WXQwk0ld6Q%2BGAv5rN9Bq2Zz05BCw0Ka2%2FqzRH9vjWeSkdcb41weSIl7MxQbWfBiCTLwlQHYor459kFoHFUisLHhJzcdsOq7LTEFSZw2JWmNn0wLgRhiqbCuLfZFs1DiQf7xR445ZxtXSkNFMtv%2FstiSnXVz17EBoVJLlNs7%2ByHWa%2Fi7yGhQv7uqoHH3VpSV8jLirfl&X-Amz-Signature=5272aaf16cb2e99970ed934127e0ec07e6d3a18cb54ad24c67ad32931f728174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYHW5RJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHAyzszq5rBopVUo7Ev4jBVAoEwDtLFQq%2FHplUaSVonuAiAQ4V3drmzFyvZyAJNfJ%2BXZd6pJm4X4YIZ%2FlGdf31ktGCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx4r0WvOZOsG69ONiKtwDs4zsQkzwiGyJ1DTALfks5HboEsZRtBckD0ernWKDaD%2FLgLtXBQVdltJ%2FURvUEMvpGH6mlzPW1p%2FA5pekXJYVUfbftqKNmtBJL3DQ5R7FIDRbx9Av9fb7aW7sWaomAniY5damQz3GJ2%2BUWtHCxHZYQh1vOn1FowUacgKoeNknV8JgUXQdNrLNKZhgbHMKAMrYiQqcYXMajli43xghptCZMztfSN5bkNLmfTL4H3izTfnMk%2B4deZuiBVNexfoLaDyQ%2Fm60Uxz7teUhiaVmCpoKlRpfIOtjCZ%2BHroTmLM0j3FfsGNv8LqojOuKEzIRxeuLSejGA5ObEWcqpGmUY44UbvfLLRDgitNg%2F0h1t2nJVD2scATHn9n9rbuoSnTJ3u4iB3JkfjbKpkjWFAtaOTAclqnQnMysX26%2BNdwIf7nQnZTIN9aVYw6tL6ysG5cXlA62RcZiuBbUA6JBLfWObk9KJsptAkOJG7LGPjQACujo5VKf%2B079iczJSykyYzWriBvENs6M3CQjish%2FhZY23PjSKFShRXfzA%2FVY4fMy6SmiK1gLrGr8OPab8WTtsR8fRwOKQWeicfgyrt50eDUtdFw6HBgVmVqQrWbKBXmYE4wMYKyJhYa0i1XPQ30SYLbowntnfwgY6pgHThaS9ac65%2BdOLJPnS%2FZhS94WXQwk0ld6Q%2BGAv5rN9Bq2Zz05BCw0Ka2%2FqzRH9vjWeSkdcb41weSIl7MxQbWfBiCTLwlQHYor459kFoHFUisLHhJzcdsOq7LTEFSZw2JWmNn0wLgRhiqbCuLfZFs1DiQf7xR445ZxtXSkNFMtv%2FstiSnXVz17EBoVJLlNs7%2ByHWa%2Fi7yGhQv7uqoHH3VpSV8jLirfl&X-Amz-Signature=c7c32a2b200377e683d4aa242d2a0df8af2ca5e85a1adc0e3310a4d7b71c382b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYHW5RJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHAyzszq5rBopVUo7Ev4jBVAoEwDtLFQq%2FHplUaSVonuAiAQ4V3drmzFyvZyAJNfJ%2BXZd6pJm4X4YIZ%2FlGdf31ktGCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx4r0WvOZOsG69ONiKtwDs4zsQkzwiGyJ1DTALfks5HboEsZRtBckD0ernWKDaD%2FLgLtXBQVdltJ%2FURvUEMvpGH6mlzPW1p%2FA5pekXJYVUfbftqKNmtBJL3DQ5R7FIDRbx9Av9fb7aW7sWaomAniY5damQz3GJ2%2BUWtHCxHZYQh1vOn1FowUacgKoeNknV8JgUXQdNrLNKZhgbHMKAMrYiQqcYXMajli43xghptCZMztfSN5bkNLmfTL4H3izTfnMk%2B4deZuiBVNexfoLaDyQ%2Fm60Uxz7teUhiaVmCpoKlRpfIOtjCZ%2BHroTmLM0j3FfsGNv8LqojOuKEzIRxeuLSejGA5ObEWcqpGmUY44UbvfLLRDgitNg%2F0h1t2nJVD2scATHn9n9rbuoSnTJ3u4iB3JkfjbKpkjWFAtaOTAclqnQnMysX26%2BNdwIf7nQnZTIN9aVYw6tL6ysG5cXlA62RcZiuBbUA6JBLfWObk9KJsptAkOJG7LGPjQACujo5VKf%2B079iczJSykyYzWriBvENs6M3CQjish%2FhZY23PjSKFShRXfzA%2FVY4fMy6SmiK1gLrGr8OPab8WTtsR8fRwOKQWeicfgyrt50eDUtdFw6HBgVmVqQrWbKBXmYE4wMYKyJhYa0i1XPQ30SYLbowntnfwgY6pgHThaS9ac65%2BdOLJPnS%2FZhS94WXQwk0ld6Q%2BGAv5rN9Bq2Zz05BCw0Ka2%2FqzRH9vjWeSkdcb41weSIl7MxQbWfBiCTLwlQHYor459kFoHFUisLHhJzcdsOq7LTEFSZw2JWmNn0wLgRhiqbCuLfZFs1DiQf7xR445ZxtXSkNFMtv%2FstiSnXVz17EBoVJLlNs7%2ByHWa%2Fi7yGhQv7uqoHH3VpSV8jLirfl&X-Amz-Signature=cd13d4d56c5476ca2c62f8ae5ae535228c50a3c8b646298571feb1760fbf6768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYHW5RJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHAyzszq5rBopVUo7Ev4jBVAoEwDtLFQq%2FHplUaSVonuAiAQ4V3drmzFyvZyAJNfJ%2BXZd6pJm4X4YIZ%2FlGdf31ktGCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx4r0WvOZOsG69ONiKtwDs4zsQkzwiGyJ1DTALfks5HboEsZRtBckD0ernWKDaD%2FLgLtXBQVdltJ%2FURvUEMvpGH6mlzPW1p%2FA5pekXJYVUfbftqKNmtBJL3DQ5R7FIDRbx9Av9fb7aW7sWaomAniY5damQz3GJ2%2BUWtHCxHZYQh1vOn1FowUacgKoeNknV8JgUXQdNrLNKZhgbHMKAMrYiQqcYXMajli43xghptCZMztfSN5bkNLmfTL4H3izTfnMk%2B4deZuiBVNexfoLaDyQ%2Fm60Uxz7teUhiaVmCpoKlRpfIOtjCZ%2BHroTmLM0j3FfsGNv8LqojOuKEzIRxeuLSejGA5ObEWcqpGmUY44UbvfLLRDgitNg%2F0h1t2nJVD2scATHn9n9rbuoSnTJ3u4iB3JkfjbKpkjWFAtaOTAclqnQnMysX26%2BNdwIf7nQnZTIN9aVYw6tL6ysG5cXlA62RcZiuBbUA6JBLfWObk9KJsptAkOJG7LGPjQACujo5VKf%2B079iczJSykyYzWriBvENs6M3CQjish%2FhZY23PjSKFShRXfzA%2FVY4fMy6SmiK1gLrGr8OPab8WTtsR8fRwOKQWeicfgyrt50eDUtdFw6HBgVmVqQrWbKBXmYE4wMYKyJhYa0i1XPQ30SYLbowntnfwgY6pgHThaS9ac65%2BdOLJPnS%2FZhS94WXQwk0ld6Q%2BGAv5rN9Bq2Zz05BCw0Ka2%2FqzRH9vjWeSkdcb41weSIl7MxQbWfBiCTLwlQHYor459kFoHFUisLHhJzcdsOq7LTEFSZw2JWmNn0wLgRhiqbCuLfZFs1DiQf7xR445ZxtXSkNFMtv%2FstiSnXVz17EBoVJLlNs7%2ByHWa%2Fi7yGhQv7uqoHH3VpSV8jLirfl&X-Amz-Signature=825d679b02807a8bc1ce46e067b8d3dcdd4d1bf0ea8816f048e0dd6ad7fa95c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYHW5RJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHAyzszq5rBopVUo7Ev4jBVAoEwDtLFQq%2FHplUaSVonuAiAQ4V3drmzFyvZyAJNfJ%2BXZd6pJm4X4YIZ%2FlGdf31ktGCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx4r0WvOZOsG69ONiKtwDs4zsQkzwiGyJ1DTALfks5HboEsZRtBckD0ernWKDaD%2FLgLtXBQVdltJ%2FURvUEMvpGH6mlzPW1p%2FA5pekXJYVUfbftqKNmtBJL3DQ5R7FIDRbx9Av9fb7aW7sWaomAniY5damQz3GJ2%2BUWtHCxHZYQh1vOn1FowUacgKoeNknV8JgUXQdNrLNKZhgbHMKAMrYiQqcYXMajli43xghptCZMztfSN5bkNLmfTL4H3izTfnMk%2B4deZuiBVNexfoLaDyQ%2Fm60Uxz7teUhiaVmCpoKlRpfIOtjCZ%2BHroTmLM0j3FfsGNv8LqojOuKEzIRxeuLSejGA5ObEWcqpGmUY44UbvfLLRDgitNg%2F0h1t2nJVD2scATHn9n9rbuoSnTJ3u4iB3JkfjbKpkjWFAtaOTAclqnQnMysX26%2BNdwIf7nQnZTIN9aVYw6tL6ysG5cXlA62RcZiuBbUA6JBLfWObk9KJsptAkOJG7LGPjQACujo5VKf%2B079iczJSykyYzWriBvENs6M3CQjish%2FhZY23PjSKFShRXfzA%2FVY4fMy6SmiK1gLrGr8OPab8WTtsR8fRwOKQWeicfgyrt50eDUtdFw6HBgVmVqQrWbKBXmYE4wMYKyJhYa0i1XPQ30SYLbowntnfwgY6pgHThaS9ac65%2BdOLJPnS%2FZhS94WXQwk0ld6Q%2BGAv5rN9Bq2Zz05BCw0Ka2%2FqzRH9vjWeSkdcb41weSIl7MxQbWfBiCTLwlQHYor459kFoHFUisLHhJzcdsOq7LTEFSZw2JWmNn0wLgRhiqbCuLfZFs1DiQf7xR445ZxtXSkNFMtv%2FstiSnXVz17EBoVJLlNs7%2ByHWa%2Fi7yGhQv7uqoHH3VpSV8jLirfl&X-Amz-Signature=f7b3976355872f7d7cded7bf6847a336430c8fc8d9b9c84a1ea9db5cbb09c1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
