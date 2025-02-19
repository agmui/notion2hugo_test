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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BSITDV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHCKGtsOblNhkfXrlpMhJh8Fql%2BZq%2F5kMpjXNJQHI8KPAiBqYGjzA33EjFbF9dXN8b7IVQbcAfjP%2BMC3HbEIHQo1nyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLN9spY01JgbavXfcKtwDeTYp5G%2FyAcPudpmGQIo3oAKmH17QvldGfQ8EASRlLz%2Fdmddp9vkUsnd6BFYwZ1eLM6VxMU8mRjP9G08NzVNDdsyT%2F9xLSkiF0wAQAlYLvrBw3afP%2FQn4GNvR%2BqDpWDQFUREHT%2BXpl9y4hypA0i%2FZJFoaiWVB4JX6r0W7JwPMVKFLdkU7VuiuV6Cqu%2FXwh%2F6xSmxJQrmAHuJWgaoWGaRHNuVqGPzE9vy39CFPeFsdtQIjeNhibCYYGCXwxTwnk5KAPW6G9yECtFD%2FwvXEhlKsU%2Bnj71UtFcZ%2BnAxJ4KM6pWni6GWFphtT6ALkoajnp4RhuXYrpjkn%2BJgtF6jiHM0fpfsdkDDKnNIL%2F5RKGVl93QziE3CgawnKFkzyVJGIjLPUKZ4KIGf0QbaOWmUCt41lljZlBiVIx6LL2%2BSUwxxXDURXXZUiep9NcJQJQatFh2FblQB6u5prAuwZ5iI4diW9N8N8SeknsGvv2H%2FLkK6NTPAG0i2u69BS%2FPiAJhML85Q%2F79CBJohlAaGS2kUf991ikch%2BqHz6WTQ3CiYLeszGgwVzVI6gdNucyagmUARyo0Bd4jiStd7u9GgEJ7f5GeIkkyjc6zsReCr1GGAeJyTqXjwE8WT30FucmwrUBQQwh%2FvWvQY6pgGvg35clMZ%2Bvblvm%2BbeVtREiRuaJkiRCOkDhjpsup1geCZjb5TFaN9n%2BFDO4NIIVvnJRY5%2FGKGMHWb6dE30MGVlyuUhtd%2FblcRrGX%2Fx5RNIauYE%2BK%2F9gUu2iNZM2xe7qXX8smhVycHn38tejrS2IP4oe9YSjzv2nBYVUGKqkNVPA5Gep5VUiyYp3azfsUG1dxOqqNqdlQVt8DlYMEycaplaIH3RXCSc&X-Amz-Signature=7f26ae4de2b51862bc122c2cec4404c4e61ffae49a55dc5c2be055b2a43c68fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BSITDV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHCKGtsOblNhkfXrlpMhJh8Fql%2BZq%2F5kMpjXNJQHI8KPAiBqYGjzA33EjFbF9dXN8b7IVQbcAfjP%2BMC3HbEIHQo1nyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLN9spY01JgbavXfcKtwDeTYp5G%2FyAcPudpmGQIo3oAKmH17QvldGfQ8EASRlLz%2Fdmddp9vkUsnd6BFYwZ1eLM6VxMU8mRjP9G08NzVNDdsyT%2F9xLSkiF0wAQAlYLvrBw3afP%2FQn4GNvR%2BqDpWDQFUREHT%2BXpl9y4hypA0i%2FZJFoaiWVB4JX6r0W7JwPMVKFLdkU7VuiuV6Cqu%2FXwh%2F6xSmxJQrmAHuJWgaoWGaRHNuVqGPzE9vy39CFPeFsdtQIjeNhibCYYGCXwxTwnk5KAPW6G9yECtFD%2FwvXEhlKsU%2Bnj71UtFcZ%2BnAxJ4KM6pWni6GWFphtT6ALkoajnp4RhuXYrpjkn%2BJgtF6jiHM0fpfsdkDDKnNIL%2F5RKGVl93QziE3CgawnKFkzyVJGIjLPUKZ4KIGf0QbaOWmUCt41lljZlBiVIx6LL2%2BSUwxxXDURXXZUiep9NcJQJQatFh2FblQB6u5prAuwZ5iI4diW9N8N8SeknsGvv2H%2FLkK6NTPAG0i2u69BS%2FPiAJhML85Q%2F79CBJohlAaGS2kUf991ikch%2BqHz6WTQ3CiYLeszGgwVzVI6gdNucyagmUARyo0Bd4jiStd7u9GgEJ7f5GeIkkyjc6zsReCr1GGAeJyTqXjwE8WT30FucmwrUBQQwh%2FvWvQY6pgGvg35clMZ%2Bvblvm%2BbeVtREiRuaJkiRCOkDhjpsup1geCZjb5TFaN9n%2BFDO4NIIVvnJRY5%2FGKGMHWb6dE30MGVlyuUhtd%2FblcRrGX%2Fx5RNIauYE%2BK%2F9gUu2iNZM2xe7qXX8smhVycHn38tejrS2IP4oe9YSjzv2nBYVUGKqkNVPA5Gep5VUiyYp3azfsUG1dxOqqNqdlQVt8DlYMEycaplaIH3RXCSc&X-Amz-Signature=1fd6b2bebcf24b3e4a0c03ac0ad05ea6fdefe80b4b73aa97edb1f08e66ea5752&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BSITDV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHCKGtsOblNhkfXrlpMhJh8Fql%2BZq%2F5kMpjXNJQHI8KPAiBqYGjzA33EjFbF9dXN8b7IVQbcAfjP%2BMC3HbEIHQo1nyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLN9spY01JgbavXfcKtwDeTYp5G%2FyAcPudpmGQIo3oAKmH17QvldGfQ8EASRlLz%2Fdmddp9vkUsnd6BFYwZ1eLM6VxMU8mRjP9G08NzVNDdsyT%2F9xLSkiF0wAQAlYLvrBw3afP%2FQn4GNvR%2BqDpWDQFUREHT%2BXpl9y4hypA0i%2FZJFoaiWVB4JX6r0W7JwPMVKFLdkU7VuiuV6Cqu%2FXwh%2F6xSmxJQrmAHuJWgaoWGaRHNuVqGPzE9vy39CFPeFsdtQIjeNhibCYYGCXwxTwnk5KAPW6G9yECtFD%2FwvXEhlKsU%2Bnj71UtFcZ%2BnAxJ4KM6pWni6GWFphtT6ALkoajnp4RhuXYrpjkn%2BJgtF6jiHM0fpfsdkDDKnNIL%2F5RKGVl93QziE3CgawnKFkzyVJGIjLPUKZ4KIGf0QbaOWmUCt41lljZlBiVIx6LL2%2BSUwxxXDURXXZUiep9NcJQJQatFh2FblQB6u5prAuwZ5iI4diW9N8N8SeknsGvv2H%2FLkK6NTPAG0i2u69BS%2FPiAJhML85Q%2F79CBJohlAaGS2kUf991ikch%2BqHz6WTQ3CiYLeszGgwVzVI6gdNucyagmUARyo0Bd4jiStd7u9GgEJ7f5GeIkkyjc6zsReCr1GGAeJyTqXjwE8WT30FucmwrUBQQwh%2FvWvQY6pgGvg35clMZ%2Bvblvm%2BbeVtREiRuaJkiRCOkDhjpsup1geCZjb5TFaN9n%2BFDO4NIIVvnJRY5%2FGKGMHWb6dE30MGVlyuUhtd%2FblcRrGX%2Fx5RNIauYE%2BK%2F9gUu2iNZM2xe7qXX8smhVycHn38tejrS2IP4oe9YSjzv2nBYVUGKqkNVPA5Gep5VUiyYp3azfsUG1dxOqqNqdlQVt8DlYMEycaplaIH3RXCSc&X-Amz-Signature=d88a678a8ac2ca89020f4049a511318a6780ef18f4ae308e6763e93fc9a3b831&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BSITDV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHCKGtsOblNhkfXrlpMhJh8Fql%2BZq%2F5kMpjXNJQHI8KPAiBqYGjzA33EjFbF9dXN8b7IVQbcAfjP%2BMC3HbEIHQo1nyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLN9spY01JgbavXfcKtwDeTYp5G%2FyAcPudpmGQIo3oAKmH17QvldGfQ8EASRlLz%2Fdmddp9vkUsnd6BFYwZ1eLM6VxMU8mRjP9G08NzVNDdsyT%2F9xLSkiF0wAQAlYLvrBw3afP%2FQn4GNvR%2BqDpWDQFUREHT%2BXpl9y4hypA0i%2FZJFoaiWVB4JX6r0W7JwPMVKFLdkU7VuiuV6Cqu%2FXwh%2F6xSmxJQrmAHuJWgaoWGaRHNuVqGPzE9vy39CFPeFsdtQIjeNhibCYYGCXwxTwnk5KAPW6G9yECtFD%2FwvXEhlKsU%2Bnj71UtFcZ%2BnAxJ4KM6pWni6GWFphtT6ALkoajnp4RhuXYrpjkn%2BJgtF6jiHM0fpfsdkDDKnNIL%2F5RKGVl93QziE3CgawnKFkzyVJGIjLPUKZ4KIGf0QbaOWmUCt41lljZlBiVIx6LL2%2BSUwxxXDURXXZUiep9NcJQJQatFh2FblQB6u5prAuwZ5iI4diW9N8N8SeknsGvv2H%2FLkK6NTPAG0i2u69BS%2FPiAJhML85Q%2F79CBJohlAaGS2kUf991ikch%2BqHz6WTQ3CiYLeszGgwVzVI6gdNucyagmUARyo0Bd4jiStd7u9GgEJ7f5GeIkkyjc6zsReCr1GGAeJyTqXjwE8WT30FucmwrUBQQwh%2FvWvQY6pgGvg35clMZ%2Bvblvm%2BbeVtREiRuaJkiRCOkDhjpsup1geCZjb5TFaN9n%2BFDO4NIIVvnJRY5%2FGKGMHWb6dE30MGVlyuUhtd%2FblcRrGX%2Fx5RNIauYE%2BK%2F9gUu2iNZM2xe7qXX8smhVycHn38tejrS2IP4oe9YSjzv2nBYVUGKqkNVPA5Gep5VUiyYp3azfsUG1dxOqqNqdlQVt8DlYMEycaplaIH3RXCSc&X-Amz-Signature=f6b695beeef21ca86b27c7e3081f0616a7da41ae55cfb5ef651f3c4700093030&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BSITDV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHCKGtsOblNhkfXrlpMhJh8Fql%2BZq%2F5kMpjXNJQHI8KPAiBqYGjzA33EjFbF9dXN8b7IVQbcAfjP%2BMC3HbEIHQo1nyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLN9spY01JgbavXfcKtwDeTYp5G%2FyAcPudpmGQIo3oAKmH17QvldGfQ8EASRlLz%2Fdmddp9vkUsnd6BFYwZ1eLM6VxMU8mRjP9G08NzVNDdsyT%2F9xLSkiF0wAQAlYLvrBw3afP%2FQn4GNvR%2BqDpWDQFUREHT%2BXpl9y4hypA0i%2FZJFoaiWVB4JX6r0W7JwPMVKFLdkU7VuiuV6Cqu%2FXwh%2F6xSmxJQrmAHuJWgaoWGaRHNuVqGPzE9vy39CFPeFsdtQIjeNhibCYYGCXwxTwnk5KAPW6G9yECtFD%2FwvXEhlKsU%2Bnj71UtFcZ%2BnAxJ4KM6pWni6GWFphtT6ALkoajnp4RhuXYrpjkn%2BJgtF6jiHM0fpfsdkDDKnNIL%2F5RKGVl93QziE3CgawnKFkzyVJGIjLPUKZ4KIGf0QbaOWmUCt41lljZlBiVIx6LL2%2BSUwxxXDURXXZUiep9NcJQJQatFh2FblQB6u5prAuwZ5iI4diW9N8N8SeknsGvv2H%2FLkK6NTPAG0i2u69BS%2FPiAJhML85Q%2F79CBJohlAaGS2kUf991ikch%2BqHz6WTQ3CiYLeszGgwVzVI6gdNucyagmUARyo0Bd4jiStd7u9GgEJ7f5GeIkkyjc6zsReCr1GGAeJyTqXjwE8WT30FucmwrUBQQwh%2FvWvQY6pgGvg35clMZ%2Bvblvm%2BbeVtREiRuaJkiRCOkDhjpsup1geCZjb5TFaN9n%2BFDO4NIIVvnJRY5%2FGKGMHWb6dE30MGVlyuUhtd%2FblcRrGX%2Fx5RNIauYE%2BK%2F9gUu2iNZM2xe7qXX8smhVycHn38tejrS2IP4oe9YSjzv2nBYVUGKqkNVPA5Gep5VUiyYp3azfsUG1dxOqqNqdlQVt8DlYMEycaplaIH3RXCSc&X-Amz-Signature=b28331a225c5afb4f33180b605988473d91ebca4da80dd2f8b2ec9dece5e77c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BSITDV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHCKGtsOblNhkfXrlpMhJh8Fql%2BZq%2F5kMpjXNJQHI8KPAiBqYGjzA33EjFbF9dXN8b7IVQbcAfjP%2BMC3HbEIHQo1nyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLN9spY01JgbavXfcKtwDeTYp5G%2FyAcPudpmGQIo3oAKmH17QvldGfQ8EASRlLz%2Fdmddp9vkUsnd6BFYwZ1eLM6VxMU8mRjP9G08NzVNDdsyT%2F9xLSkiF0wAQAlYLvrBw3afP%2FQn4GNvR%2BqDpWDQFUREHT%2BXpl9y4hypA0i%2FZJFoaiWVB4JX6r0W7JwPMVKFLdkU7VuiuV6Cqu%2FXwh%2F6xSmxJQrmAHuJWgaoWGaRHNuVqGPzE9vy39CFPeFsdtQIjeNhibCYYGCXwxTwnk5KAPW6G9yECtFD%2FwvXEhlKsU%2Bnj71UtFcZ%2BnAxJ4KM6pWni6GWFphtT6ALkoajnp4RhuXYrpjkn%2BJgtF6jiHM0fpfsdkDDKnNIL%2F5RKGVl93QziE3CgawnKFkzyVJGIjLPUKZ4KIGf0QbaOWmUCt41lljZlBiVIx6LL2%2BSUwxxXDURXXZUiep9NcJQJQatFh2FblQB6u5prAuwZ5iI4diW9N8N8SeknsGvv2H%2FLkK6NTPAG0i2u69BS%2FPiAJhML85Q%2F79CBJohlAaGS2kUf991ikch%2BqHz6WTQ3CiYLeszGgwVzVI6gdNucyagmUARyo0Bd4jiStd7u9GgEJ7f5GeIkkyjc6zsReCr1GGAeJyTqXjwE8WT30FucmwrUBQQwh%2FvWvQY6pgGvg35clMZ%2Bvblvm%2BbeVtREiRuaJkiRCOkDhjpsup1geCZjb5TFaN9n%2BFDO4NIIVvnJRY5%2FGKGMHWb6dE30MGVlyuUhtd%2FblcRrGX%2Fx5RNIauYE%2BK%2F9gUu2iNZM2xe7qXX8smhVycHn38tejrS2IP4oe9YSjzv2nBYVUGKqkNVPA5Gep5VUiyYp3azfsUG1dxOqqNqdlQVt8DlYMEycaplaIH3RXCSc&X-Amz-Signature=fdb3ac45399e7ce1eb73c0fedcfd114cd61fdf3e2d6cfe9adde12d5af8875a1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BSITDV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHCKGtsOblNhkfXrlpMhJh8Fql%2BZq%2F5kMpjXNJQHI8KPAiBqYGjzA33EjFbF9dXN8b7IVQbcAfjP%2BMC3HbEIHQo1nyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLN9spY01JgbavXfcKtwDeTYp5G%2FyAcPudpmGQIo3oAKmH17QvldGfQ8EASRlLz%2Fdmddp9vkUsnd6BFYwZ1eLM6VxMU8mRjP9G08NzVNDdsyT%2F9xLSkiF0wAQAlYLvrBw3afP%2FQn4GNvR%2BqDpWDQFUREHT%2BXpl9y4hypA0i%2FZJFoaiWVB4JX6r0W7JwPMVKFLdkU7VuiuV6Cqu%2FXwh%2F6xSmxJQrmAHuJWgaoWGaRHNuVqGPzE9vy39CFPeFsdtQIjeNhibCYYGCXwxTwnk5KAPW6G9yECtFD%2FwvXEhlKsU%2Bnj71UtFcZ%2BnAxJ4KM6pWni6GWFphtT6ALkoajnp4RhuXYrpjkn%2BJgtF6jiHM0fpfsdkDDKnNIL%2F5RKGVl93QziE3CgawnKFkzyVJGIjLPUKZ4KIGf0QbaOWmUCt41lljZlBiVIx6LL2%2BSUwxxXDURXXZUiep9NcJQJQatFh2FblQB6u5prAuwZ5iI4diW9N8N8SeknsGvv2H%2FLkK6NTPAG0i2u69BS%2FPiAJhML85Q%2F79CBJohlAaGS2kUf991ikch%2BqHz6WTQ3CiYLeszGgwVzVI6gdNucyagmUARyo0Bd4jiStd7u9GgEJ7f5GeIkkyjc6zsReCr1GGAeJyTqXjwE8WT30FucmwrUBQQwh%2FvWvQY6pgGvg35clMZ%2Bvblvm%2BbeVtREiRuaJkiRCOkDhjpsup1geCZjb5TFaN9n%2BFDO4NIIVvnJRY5%2FGKGMHWb6dE30MGVlyuUhtd%2FblcRrGX%2Fx5RNIauYE%2BK%2F9gUu2iNZM2xe7qXX8smhVycHn38tejrS2IP4oe9YSjzv2nBYVUGKqkNVPA5Gep5VUiyYp3azfsUG1dxOqqNqdlQVt8DlYMEycaplaIH3RXCSc&X-Amz-Signature=77a8fdb9ff12e87914693a52368526e0afadff679b4b433ec1e5c8ecc1d27e76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BSITDV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHCKGtsOblNhkfXrlpMhJh8Fql%2BZq%2F5kMpjXNJQHI8KPAiBqYGjzA33EjFbF9dXN8b7IVQbcAfjP%2BMC3HbEIHQo1nyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLN9spY01JgbavXfcKtwDeTYp5G%2FyAcPudpmGQIo3oAKmH17QvldGfQ8EASRlLz%2Fdmddp9vkUsnd6BFYwZ1eLM6VxMU8mRjP9G08NzVNDdsyT%2F9xLSkiF0wAQAlYLvrBw3afP%2FQn4GNvR%2BqDpWDQFUREHT%2BXpl9y4hypA0i%2FZJFoaiWVB4JX6r0W7JwPMVKFLdkU7VuiuV6Cqu%2FXwh%2F6xSmxJQrmAHuJWgaoWGaRHNuVqGPzE9vy39CFPeFsdtQIjeNhibCYYGCXwxTwnk5KAPW6G9yECtFD%2FwvXEhlKsU%2Bnj71UtFcZ%2BnAxJ4KM6pWni6GWFphtT6ALkoajnp4RhuXYrpjkn%2BJgtF6jiHM0fpfsdkDDKnNIL%2F5RKGVl93QziE3CgawnKFkzyVJGIjLPUKZ4KIGf0QbaOWmUCt41lljZlBiVIx6LL2%2BSUwxxXDURXXZUiep9NcJQJQatFh2FblQB6u5prAuwZ5iI4diW9N8N8SeknsGvv2H%2FLkK6NTPAG0i2u69BS%2FPiAJhML85Q%2F79CBJohlAaGS2kUf991ikch%2BqHz6WTQ3CiYLeszGgwVzVI6gdNucyagmUARyo0Bd4jiStd7u9GgEJ7f5GeIkkyjc6zsReCr1GGAeJyTqXjwE8WT30FucmwrUBQQwh%2FvWvQY6pgGvg35clMZ%2Bvblvm%2BbeVtREiRuaJkiRCOkDhjpsup1geCZjb5TFaN9n%2BFDO4NIIVvnJRY5%2FGKGMHWb6dE30MGVlyuUhtd%2FblcRrGX%2Fx5RNIauYE%2BK%2F9gUu2iNZM2xe7qXX8smhVycHn38tejrS2IP4oe9YSjzv2nBYVUGKqkNVPA5Gep5VUiyYp3azfsUG1dxOqqNqdlQVt8DlYMEycaplaIH3RXCSc&X-Amz-Signature=6a32453467befe083f8bb4cd511065c0fd21faea8fa02ff354cbeba4aa1b86f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
