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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XK2A3I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDiyNwjrHVHiYBlVKOP0dFDzMOYEIocZwIt%2Fjgrr6LlHAiBmWL1vtPTZ48hpxI7u5lxc4v%2B8Kw5SWJhx5AhlrzE1jCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMH4nx%2Fl1MmYkmkSc0KtwDK5ZizAaIblMDHmNPEYDEhihy%2FU3%2BWbvfHCbtyCac6w0AFpgajrCd46HzN95Itl5RJsimtj7o6ltXmFZCOK14xIxhxSIFIzXqMg%2BVpiJZpGHH5ZMdMoTd7orHD2GqNh4%2FnkBxYHRXwCm7BhzjX7jXmmDsh50GiMA946wKZRUC25ugnCq0RjEN0cDgCI8OETqA8hRQCQLXtyvX53ziPDNLKnhNfydmRAtRtrbaMmGURYhQxHNxVyQUwMYRLKu%2FVPWzS6XnnLyAg92dgIzJn9yn9tq%2FbHVZEoQGQpXYzfs%2BWLJ2lYkiUcnhy%2F4H57Ke08NJmYRKrmqn2m4D%2F9Y6nGYkTFDx0m2EbthvyufCJM5m4wfIzsSY2OCo4ip5i%2BWzJbMsn6M%2FVTfBMwJ9uecSHUL9m7sourAAW5z%2FsDDcNZOf3pR7fiUNb%2Fq10Do%2FzWiu4vAJnNfCX3ZAbIgGCuE2pjXhsSnhpIvXox6IAEprAXFNjX04vusOxr9bmZTT9Glz%2FveoVfUDMjgKxw6XEgH9sV7DbDs%2FgmPvnEwnlr3DTnkL0f3hphacHXMa7w3Vv%2FnyPgOQ0jKiqq7eOijjEDL9TUGfbDH%2FnQmQCaAjEsLMD21a6LAVy5mCr0h86kFeAyQw8J2vvgY6pgFDM5dXRkAzcFcYEnfhzsvyMkSCNiKmP8HgB88VfuHdeosaKrK2LyX7uryxbhLfSPBcWkGYWtw9HGli%2Fo9Qk9AowVVWhnDRKHcGs0lHxvH4B59kPJFa4Bn1svZLY%2FjzOZw55tAsfsLgbD05JhVee1Yi8Tv9sWs6CXGX6mfkaFd9qulMeZz9D4v%2F3BWWy5MHysV6Zckfzr7imPm0rUmbuB1zgHu8qJNA&X-Amz-Signature=c5f981b36c3a79caa5172f4359e778e9281994d21b41b80c2b5c9394d5abf282&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XK2A3I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDiyNwjrHVHiYBlVKOP0dFDzMOYEIocZwIt%2Fjgrr6LlHAiBmWL1vtPTZ48hpxI7u5lxc4v%2B8Kw5SWJhx5AhlrzE1jCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMH4nx%2Fl1MmYkmkSc0KtwDK5ZizAaIblMDHmNPEYDEhihy%2FU3%2BWbvfHCbtyCac6w0AFpgajrCd46HzN95Itl5RJsimtj7o6ltXmFZCOK14xIxhxSIFIzXqMg%2BVpiJZpGHH5ZMdMoTd7orHD2GqNh4%2FnkBxYHRXwCm7BhzjX7jXmmDsh50GiMA946wKZRUC25ugnCq0RjEN0cDgCI8OETqA8hRQCQLXtyvX53ziPDNLKnhNfydmRAtRtrbaMmGURYhQxHNxVyQUwMYRLKu%2FVPWzS6XnnLyAg92dgIzJn9yn9tq%2FbHVZEoQGQpXYzfs%2BWLJ2lYkiUcnhy%2F4H57Ke08NJmYRKrmqn2m4D%2F9Y6nGYkTFDx0m2EbthvyufCJM5m4wfIzsSY2OCo4ip5i%2BWzJbMsn6M%2FVTfBMwJ9uecSHUL9m7sourAAW5z%2FsDDcNZOf3pR7fiUNb%2Fq10Do%2FzWiu4vAJnNfCX3ZAbIgGCuE2pjXhsSnhpIvXox6IAEprAXFNjX04vusOxr9bmZTT9Glz%2FveoVfUDMjgKxw6XEgH9sV7DbDs%2FgmPvnEwnlr3DTnkL0f3hphacHXMa7w3Vv%2FnyPgOQ0jKiqq7eOijjEDL9TUGfbDH%2FnQmQCaAjEsLMD21a6LAVy5mCr0h86kFeAyQw8J2vvgY6pgFDM5dXRkAzcFcYEnfhzsvyMkSCNiKmP8HgB88VfuHdeosaKrK2LyX7uryxbhLfSPBcWkGYWtw9HGli%2Fo9Qk9AowVVWhnDRKHcGs0lHxvH4B59kPJFa4Bn1svZLY%2FjzOZw55tAsfsLgbD05JhVee1Yi8Tv9sWs6CXGX6mfkaFd9qulMeZz9D4v%2F3BWWy5MHysV6Zckfzr7imPm0rUmbuB1zgHu8qJNA&X-Amz-Signature=54fdec818c1d882ae9d789df877059f923448b0919e07e39e9ded3527d4cde64&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XK2A3I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDiyNwjrHVHiYBlVKOP0dFDzMOYEIocZwIt%2Fjgrr6LlHAiBmWL1vtPTZ48hpxI7u5lxc4v%2B8Kw5SWJhx5AhlrzE1jCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMH4nx%2Fl1MmYkmkSc0KtwDK5ZizAaIblMDHmNPEYDEhihy%2FU3%2BWbvfHCbtyCac6w0AFpgajrCd46HzN95Itl5RJsimtj7o6ltXmFZCOK14xIxhxSIFIzXqMg%2BVpiJZpGHH5ZMdMoTd7orHD2GqNh4%2FnkBxYHRXwCm7BhzjX7jXmmDsh50GiMA946wKZRUC25ugnCq0RjEN0cDgCI8OETqA8hRQCQLXtyvX53ziPDNLKnhNfydmRAtRtrbaMmGURYhQxHNxVyQUwMYRLKu%2FVPWzS6XnnLyAg92dgIzJn9yn9tq%2FbHVZEoQGQpXYzfs%2BWLJ2lYkiUcnhy%2F4H57Ke08NJmYRKrmqn2m4D%2F9Y6nGYkTFDx0m2EbthvyufCJM5m4wfIzsSY2OCo4ip5i%2BWzJbMsn6M%2FVTfBMwJ9uecSHUL9m7sourAAW5z%2FsDDcNZOf3pR7fiUNb%2Fq10Do%2FzWiu4vAJnNfCX3ZAbIgGCuE2pjXhsSnhpIvXox6IAEprAXFNjX04vusOxr9bmZTT9Glz%2FveoVfUDMjgKxw6XEgH9sV7DbDs%2FgmPvnEwnlr3DTnkL0f3hphacHXMa7w3Vv%2FnyPgOQ0jKiqq7eOijjEDL9TUGfbDH%2FnQmQCaAjEsLMD21a6LAVy5mCr0h86kFeAyQw8J2vvgY6pgFDM5dXRkAzcFcYEnfhzsvyMkSCNiKmP8HgB88VfuHdeosaKrK2LyX7uryxbhLfSPBcWkGYWtw9HGli%2Fo9Qk9AowVVWhnDRKHcGs0lHxvH4B59kPJFa4Bn1svZLY%2FjzOZw55tAsfsLgbD05JhVee1Yi8Tv9sWs6CXGX6mfkaFd9qulMeZz9D4v%2F3BWWy5MHysV6Zckfzr7imPm0rUmbuB1zgHu8qJNA&X-Amz-Signature=20db3411c277831d5967aff8d78e60f39283299e9395bf09c21117d2aa41d71c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XK2A3I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDiyNwjrHVHiYBlVKOP0dFDzMOYEIocZwIt%2Fjgrr6LlHAiBmWL1vtPTZ48hpxI7u5lxc4v%2B8Kw5SWJhx5AhlrzE1jCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMH4nx%2Fl1MmYkmkSc0KtwDK5ZizAaIblMDHmNPEYDEhihy%2FU3%2BWbvfHCbtyCac6w0AFpgajrCd46HzN95Itl5RJsimtj7o6ltXmFZCOK14xIxhxSIFIzXqMg%2BVpiJZpGHH5ZMdMoTd7orHD2GqNh4%2FnkBxYHRXwCm7BhzjX7jXmmDsh50GiMA946wKZRUC25ugnCq0RjEN0cDgCI8OETqA8hRQCQLXtyvX53ziPDNLKnhNfydmRAtRtrbaMmGURYhQxHNxVyQUwMYRLKu%2FVPWzS6XnnLyAg92dgIzJn9yn9tq%2FbHVZEoQGQpXYzfs%2BWLJ2lYkiUcnhy%2F4H57Ke08NJmYRKrmqn2m4D%2F9Y6nGYkTFDx0m2EbthvyufCJM5m4wfIzsSY2OCo4ip5i%2BWzJbMsn6M%2FVTfBMwJ9uecSHUL9m7sourAAW5z%2FsDDcNZOf3pR7fiUNb%2Fq10Do%2FzWiu4vAJnNfCX3ZAbIgGCuE2pjXhsSnhpIvXox6IAEprAXFNjX04vusOxr9bmZTT9Glz%2FveoVfUDMjgKxw6XEgH9sV7DbDs%2FgmPvnEwnlr3DTnkL0f3hphacHXMa7w3Vv%2FnyPgOQ0jKiqq7eOijjEDL9TUGfbDH%2FnQmQCaAjEsLMD21a6LAVy5mCr0h86kFeAyQw8J2vvgY6pgFDM5dXRkAzcFcYEnfhzsvyMkSCNiKmP8HgB88VfuHdeosaKrK2LyX7uryxbhLfSPBcWkGYWtw9HGli%2Fo9Qk9AowVVWhnDRKHcGs0lHxvH4B59kPJFa4Bn1svZLY%2FjzOZw55tAsfsLgbD05JhVee1Yi8Tv9sWs6CXGX6mfkaFd9qulMeZz9D4v%2F3BWWy5MHysV6Zckfzr7imPm0rUmbuB1zgHu8qJNA&X-Amz-Signature=eb03683bea7c155e7ddd1765f04e28cc01932238c450d4a5c40a5a201ba02250&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XK2A3I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDiyNwjrHVHiYBlVKOP0dFDzMOYEIocZwIt%2Fjgrr6LlHAiBmWL1vtPTZ48hpxI7u5lxc4v%2B8Kw5SWJhx5AhlrzE1jCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMH4nx%2Fl1MmYkmkSc0KtwDK5ZizAaIblMDHmNPEYDEhihy%2FU3%2BWbvfHCbtyCac6w0AFpgajrCd46HzN95Itl5RJsimtj7o6ltXmFZCOK14xIxhxSIFIzXqMg%2BVpiJZpGHH5ZMdMoTd7orHD2GqNh4%2FnkBxYHRXwCm7BhzjX7jXmmDsh50GiMA946wKZRUC25ugnCq0RjEN0cDgCI8OETqA8hRQCQLXtyvX53ziPDNLKnhNfydmRAtRtrbaMmGURYhQxHNxVyQUwMYRLKu%2FVPWzS6XnnLyAg92dgIzJn9yn9tq%2FbHVZEoQGQpXYzfs%2BWLJ2lYkiUcnhy%2F4H57Ke08NJmYRKrmqn2m4D%2F9Y6nGYkTFDx0m2EbthvyufCJM5m4wfIzsSY2OCo4ip5i%2BWzJbMsn6M%2FVTfBMwJ9uecSHUL9m7sourAAW5z%2FsDDcNZOf3pR7fiUNb%2Fq10Do%2FzWiu4vAJnNfCX3ZAbIgGCuE2pjXhsSnhpIvXox6IAEprAXFNjX04vusOxr9bmZTT9Glz%2FveoVfUDMjgKxw6XEgH9sV7DbDs%2FgmPvnEwnlr3DTnkL0f3hphacHXMa7w3Vv%2FnyPgOQ0jKiqq7eOijjEDL9TUGfbDH%2FnQmQCaAjEsLMD21a6LAVy5mCr0h86kFeAyQw8J2vvgY6pgFDM5dXRkAzcFcYEnfhzsvyMkSCNiKmP8HgB88VfuHdeosaKrK2LyX7uryxbhLfSPBcWkGYWtw9HGli%2Fo9Qk9AowVVWhnDRKHcGs0lHxvH4B59kPJFa4Bn1svZLY%2FjzOZw55tAsfsLgbD05JhVee1Yi8Tv9sWs6CXGX6mfkaFd9qulMeZz9D4v%2F3BWWy5MHysV6Zckfzr7imPm0rUmbuB1zgHu8qJNA&X-Amz-Signature=1937399123d60039f3a840f35564e62509df9c2b6d95e614243af52188a4b59d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XK2A3I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDiyNwjrHVHiYBlVKOP0dFDzMOYEIocZwIt%2Fjgrr6LlHAiBmWL1vtPTZ48hpxI7u5lxc4v%2B8Kw5SWJhx5AhlrzE1jCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMH4nx%2Fl1MmYkmkSc0KtwDK5ZizAaIblMDHmNPEYDEhihy%2FU3%2BWbvfHCbtyCac6w0AFpgajrCd46HzN95Itl5RJsimtj7o6ltXmFZCOK14xIxhxSIFIzXqMg%2BVpiJZpGHH5ZMdMoTd7orHD2GqNh4%2FnkBxYHRXwCm7BhzjX7jXmmDsh50GiMA946wKZRUC25ugnCq0RjEN0cDgCI8OETqA8hRQCQLXtyvX53ziPDNLKnhNfydmRAtRtrbaMmGURYhQxHNxVyQUwMYRLKu%2FVPWzS6XnnLyAg92dgIzJn9yn9tq%2FbHVZEoQGQpXYzfs%2BWLJ2lYkiUcnhy%2F4H57Ke08NJmYRKrmqn2m4D%2F9Y6nGYkTFDx0m2EbthvyufCJM5m4wfIzsSY2OCo4ip5i%2BWzJbMsn6M%2FVTfBMwJ9uecSHUL9m7sourAAW5z%2FsDDcNZOf3pR7fiUNb%2Fq10Do%2FzWiu4vAJnNfCX3ZAbIgGCuE2pjXhsSnhpIvXox6IAEprAXFNjX04vusOxr9bmZTT9Glz%2FveoVfUDMjgKxw6XEgH9sV7DbDs%2FgmPvnEwnlr3DTnkL0f3hphacHXMa7w3Vv%2FnyPgOQ0jKiqq7eOijjEDL9TUGfbDH%2FnQmQCaAjEsLMD21a6LAVy5mCr0h86kFeAyQw8J2vvgY6pgFDM5dXRkAzcFcYEnfhzsvyMkSCNiKmP8HgB88VfuHdeosaKrK2LyX7uryxbhLfSPBcWkGYWtw9HGli%2Fo9Qk9AowVVWhnDRKHcGs0lHxvH4B59kPJFa4Bn1svZLY%2FjzOZw55tAsfsLgbD05JhVee1Yi8Tv9sWs6CXGX6mfkaFd9qulMeZz9D4v%2F3BWWy5MHysV6Zckfzr7imPm0rUmbuB1zgHu8qJNA&X-Amz-Signature=743646198637e6fc0a2d684b2d692c1058bd0d6c58e150daa67415f6ef56d82d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XK2A3I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDiyNwjrHVHiYBlVKOP0dFDzMOYEIocZwIt%2Fjgrr6LlHAiBmWL1vtPTZ48hpxI7u5lxc4v%2B8Kw5SWJhx5AhlrzE1jCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMH4nx%2Fl1MmYkmkSc0KtwDK5ZizAaIblMDHmNPEYDEhihy%2FU3%2BWbvfHCbtyCac6w0AFpgajrCd46HzN95Itl5RJsimtj7o6ltXmFZCOK14xIxhxSIFIzXqMg%2BVpiJZpGHH5ZMdMoTd7orHD2GqNh4%2FnkBxYHRXwCm7BhzjX7jXmmDsh50GiMA946wKZRUC25ugnCq0RjEN0cDgCI8OETqA8hRQCQLXtyvX53ziPDNLKnhNfydmRAtRtrbaMmGURYhQxHNxVyQUwMYRLKu%2FVPWzS6XnnLyAg92dgIzJn9yn9tq%2FbHVZEoQGQpXYzfs%2BWLJ2lYkiUcnhy%2F4H57Ke08NJmYRKrmqn2m4D%2F9Y6nGYkTFDx0m2EbthvyufCJM5m4wfIzsSY2OCo4ip5i%2BWzJbMsn6M%2FVTfBMwJ9uecSHUL9m7sourAAW5z%2FsDDcNZOf3pR7fiUNb%2Fq10Do%2FzWiu4vAJnNfCX3ZAbIgGCuE2pjXhsSnhpIvXox6IAEprAXFNjX04vusOxr9bmZTT9Glz%2FveoVfUDMjgKxw6XEgH9sV7DbDs%2FgmPvnEwnlr3DTnkL0f3hphacHXMa7w3Vv%2FnyPgOQ0jKiqq7eOijjEDL9TUGfbDH%2FnQmQCaAjEsLMD21a6LAVy5mCr0h86kFeAyQw8J2vvgY6pgFDM5dXRkAzcFcYEnfhzsvyMkSCNiKmP8HgB88VfuHdeosaKrK2LyX7uryxbhLfSPBcWkGYWtw9HGli%2Fo9Qk9AowVVWhnDRKHcGs0lHxvH4B59kPJFa4Bn1svZLY%2FjzOZw55tAsfsLgbD05JhVee1Yi8Tv9sWs6CXGX6mfkaFd9qulMeZz9D4v%2F3BWWy5MHysV6Zckfzr7imPm0rUmbuB1zgHu8qJNA&X-Amz-Signature=98c74d67c785c5a65f9b71d3c371a637d729ef116e84b642728cf82a09ff0138&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XK2A3I%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDiyNwjrHVHiYBlVKOP0dFDzMOYEIocZwIt%2Fjgrr6LlHAiBmWL1vtPTZ48hpxI7u5lxc4v%2B8Kw5SWJhx5AhlrzE1jCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMH4nx%2Fl1MmYkmkSc0KtwDK5ZizAaIblMDHmNPEYDEhihy%2FU3%2BWbvfHCbtyCac6w0AFpgajrCd46HzN95Itl5RJsimtj7o6ltXmFZCOK14xIxhxSIFIzXqMg%2BVpiJZpGHH5ZMdMoTd7orHD2GqNh4%2FnkBxYHRXwCm7BhzjX7jXmmDsh50GiMA946wKZRUC25ugnCq0RjEN0cDgCI8OETqA8hRQCQLXtyvX53ziPDNLKnhNfydmRAtRtrbaMmGURYhQxHNxVyQUwMYRLKu%2FVPWzS6XnnLyAg92dgIzJn9yn9tq%2FbHVZEoQGQpXYzfs%2BWLJ2lYkiUcnhy%2F4H57Ke08NJmYRKrmqn2m4D%2F9Y6nGYkTFDx0m2EbthvyufCJM5m4wfIzsSY2OCo4ip5i%2BWzJbMsn6M%2FVTfBMwJ9uecSHUL9m7sourAAW5z%2FsDDcNZOf3pR7fiUNb%2Fq10Do%2FzWiu4vAJnNfCX3ZAbIgGCuE2pjXhsSnhpIvXox6IAEprAXFNjX04vusOxr9bmZTT9Glz%2FveoVfUDMjgKxw6XEgH9sV7DbDs%2FgmPvnEwnlr3DTnkL0f3hphacHXMa7w3Vv%2FnyPgOQ0jKiqq7eOijjEDL9TUGfbDH%2FnQmQCaAjEsLMD21a6LAVy5mCr0h86kFeAyQw8J2vvgY6pgFDM5dXRkAzcFcYEnfhzsvyMkSCNiKmP8HgB88VfuHdeosaKrK2LyX7uryxbhLfSPBcWkGYWtw9HGli%2Fo9Qk9AowVVWhnDRKHcGs0lHxvH4B59kPJFa4Bn1svZLY%2FjzOZw55tAsfsLgbD05JhVee1Yi8Tv9sWs6CXGX6mfkaFd9qulMeZz9D4v%2F3BWWy5MHysV6Zckfzr7imPm0rUmbuB1zgHu8qJNA&X-Amz-Signature=c5f391ccc067efef4f93e01131cb93613559809644655d00aadb2a4893b8d3c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
