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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QYDUVD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2B1HB8y4rhmk9RH1ZlgqUDsuZuCIc97mEjUvvb1rlxCAIhAN8oKaFld7SWMVE23oFFQ%2B5w%2Br%2FKSIjfEn%2BZIAcdquNJKv8DCHEQABoMNjM3NDIzMTgzODA1Igxu535DY1ayfO8Bf4wq3ANYimsNDwr88WtlMCzHUINdGo9BX8PbuiJAqu3vsKToZJLGAF9P1a%2Bzgf%2F%2B0hCWwf2aT6vWhH8fBE9qVnxtmoG%2FKbKGBwYZzfc8eGd9pdDa0Vo6fqMJcpYtEBKEvnRJLjnlV7GJZq8TEo7FMfAGIZvAy7X9U3tSHYivatpGEZHRzf9iOqRQI7kbpI2Y5BTjfQDybaQ4TmBvz7nj8dQYcq2IzSxpeedQkcNJf3z8wXLf6F%2Fb9Bck2reii6k3OFI8Z6%2BhpuZbEhjQI0HK3Ftogp%2B21%2BjiCQYomDYMCv3xvQoB1i1kOUP2fkQAIdCo2TP%2FvNoPthRbu%2BLgl18zMZTpzP82ORz7m%2BZZ1dO2Cxl3PCKjfBl%2BETYu53Wh%2FmnOs4x%2FldvQfA9JGBIJ3nZ4cgUjac9gNKDzupeCoFRYR41pmQb2t%2FxEN8dr1NkQv01wxq5OVztNsavMDGpne2FzbcLsnAnzhpu%2Bc8vWB9jtKV7gqeIHFmWo141qfHRUuoKzwTFVyP4AsPAWjK6wTlyZFabSxNNolgfRPcIqXhCLjzNuP%2BtXbW%2FflSkiach4728cunzXXiTt5mmBlYFJEIZtOUHtNCVDOraMkMjR3RA8F4BV5mjTxkMLz1LZbtjGosgt%2FjCw%2B5a9BjqkAWPwmlHd8nROCk3fjRaaXvXgjVDXZV1QIxHsM0FAgqsRm4o9cpygVy8l53OFbRUyagIjsppBrXPn8l7qpCsm7u4W03GjegWW6VrYf9UZtiSw0idBRAbh0BJ0aJAk20UG7HUjCqeUHFHyJI7s7za3Wv6qmoVGJ2QVhk7jiNr3P9wmReD017Mg9wlTMcbMDl6d2292%2Bywo0aHzT8HhAfVDJRT%2FKAVk&X-Amz-Signature=9ff32bbf5bea22891561c779f2e15071479d60db40388723b32aae79f89d436d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QYDUVD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2B1HB8y4rhmk9RH1ZlgqUDsuZuCIc97mEjUvvb1rlxCAIhAN8oKaFld7SWMVE23oFFQ%2B5w%2Br%2FKSIjfEn%2BZIAcdquNJKv8DCHEQABoMNjM3NDIzMTgzODA1Igxu535DY1ayfO8Bf4wq3ANYimsNDwr88WtlMCzHUINdGo9BX8PbuiJAqu3vsKToZJLGAF9P1a%2Bzgf%2F%2B0hCWwf2aT6vWhH8fBE9qVnxtmoG%2FKbKGBwYZzfc8eGd9pdDa0Vo6fqMJcpYtEBKEvnRJLjnlV7GJZq8TEo7FMfAGIZvAy7X9U3tSHYivatpGEZHRzf9iOqRQI7kbpI2Y5BTjfQDybaQ4TmBvz7nj8dQYcq2IzSxpeedQkcNJf3z8wXLf6F%2Fb9Bck2reii6k3OFI8Z6%2BhpuZbEhjQI0HK3Ftogp%2B21%2BjiCQYomDYMCv3xvQoB1i1kOUP2fkQAIdCo2TP%2FvNoPthRbu%2BLgl18zMZTpzP82ORz7m%2BZZ1dO2Cxl3PCKjfBl%2BETYu53Wh%2FmnOs4x%2FldvQfA9JGBIJ3nZ4cgUjac9gNKDzupeCoFRYR41pmQb2t%2FxEN8dr1NkQv01wxq5OVztNsavMDGpne2FzbcLsnAnzhpu%2Bc8vWB9jtKV7gqeIHFmWo141qfHRUuoKzwTFVyP4AsPAWjK6wTlyZFabSxNNolgfRPcIqXhCLjzNuP%2BtXbW%2FflSkiach4728cunzXXiTt5mmBlYFJEIZtOUHtNCVDOraMkMjR3RA8F4BV5mjTxkMLz1LZbtjGosgt%2FjCw%2B5a9BjqkAWPwmlHd8nROCk3fjRaaXvXgjVDXZV1QIxHsM0FAgqsRm4o9cpygVy8l53OFbRUyagIjsppBrXPn8l7qpCsm7u4W03GjegWW6VrYf9UZtiSw0idBRAbh0BJ0aJAk20UG7HUjCqeUHFHyJI7s7za3Wv6qmoVGJ2QVhk7jiNr3P9wmReD017Mg9wlTMcbMDl6d2292%2Bywo0aHzT8HhAfVDJRT%2FKAVk&X-Amz-Signature=dd074c35f45b17b0fdffe5f13e40c24b5b4412808936f89d5207e22e723602ae&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QYDUVD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2B1HB8y4rhmk9RH1ZlgqUDsuZuCIc97mEjUvvb1rlxCAIhAN8oKaFld7SWMVE23oFFQ%2B5w%2Br%2FKSIjfEn%2BZIAcdquNJKv8DCHEQABoMNjM3NDIzMTgzODA1Igxu535DY1ayfO8Bf4wq3ANYimsNDwr88WtlMCzHUINdGo9BX8PbuiJAqu3vsKToZJLGAF9P1a%2Bzgf%2F%2B0hCWwf2aT6vWhH8fBE9qVnxtmoG%2FKbKGBwYZzfc8eGd9pdDa0Vo6fqMJcpYtEBKEvnRJLjnlV7GJZq8TEo7FMfAGIZvAy7X9U3tSHYivatpGEZHRzf9iOqRQI7kbpI2Y5BTjfQDybaQ4TmBvz7nj8dQYcq2IzSxpeedQkcNJf3z8wXLf6F%2Fb9Bck2reii6k3OFI8Z6%2BhpuZbEhjQI0HK3Ftogp%2B21%2BjiCQYomDYMCv3xvQoB1i1kOUP2fkQAIdCo2TP%2FvNoPthRbu%2BLgl18zMZTpzP82ORz7m%2BZZ1dO2Cxl3PCKjfBl%2BETYu53Wh%2FmnOs4x%2FldvQfA9JGBIJ3nZ4cgUjac9gNKDzupeCoFRYR41pmQb2t%2FxEN8dr1NkQv01wxq5OVztNsavMDGpne2FzbcLsnAnzhpu%2Bc8vWB9jtKV7gqeIHFmWo141qfHRUuoKzwTFVyP4AsPAWjK6wTlyZFabSxNNolgfRPcIqXhCLjzNuP%2BtXbW%2FflSkiach4728cunzXXiTt5mmBlYFJEIZtOUHtNCVDOraMkMjR3RA8F4BV5mjTxkMLz1LZbtjGosgt%2FjCw%2B5a9BjqkAWPwmlHd8nROCk3fjRaaXvXgjVDXZV1QIxHsM0FAgqsRm4o9cpygVy8l53OFbRUyagIjsppBrXPn8l7qpCsm7u4W03GjegWW6VrYf9UZtiSw0idBRAbh0BJ0aJAk20UG7HUjCqeUHFHyJI7s7za3Wv6qmoVGJ2QVhk7jiNr3P9wmReD017Mg9wlTMcbMDl6d2292%2Bywo0aHzT8HhAfVDJRT%2FKAVk&X-Amz-Signature=1554f272224beccb27478a4c6bb30c8910d17a1193eee95b55adf1f3e82fd9d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QYDUVD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2B1HB8y4rhmk9RH1ZlgqUDsuZuCIc97mEjUvvb1rlxCAIhAN8oKaFld7SWMVE23oFFQ%2B5w%2Br%2FKSIjfEn%2BZIAcdquNJKv8DCHEQABoMNjM3NDIzMTgzODA1Igxu535DY1ayfO8Bf4wq3ANYimsNDwr88WtlMCzHUINdGo9BX8PbuiJAqu3vsKToZJLGAF9P1a%2Bzgf%2F%2B0hCWwf2aT6vWhH8fBE9qVnxtmoG%2FKbKGBwYZzfc8eGd9pdDa0Vo6fqMJcpYtEBKEvnRJLjnlV7GJZq8TEo7FMfAGIZvAy7X9U3tSHYivatpGEZHRzf9iOqRQI7kbpI2Y5BTjfQDybaQ4TmBvz7nj8dQYcq2IzSxpeedQkcNJf3z8wXLf6F%2Fb9Bck2reii6k3OFI8Z6%2BhpuZbEhjQI0HK3Ftogp%2B21%2BjiCQYomDYMCv3xvQoB1i1kOUP2fkQAIdCo2TP%2FvNoPthRbu%2BLgl18zMZTpzP82ORz7m%2BZZ1dO2Cxl3PCKjfBl%2BETYu53Wh%2FmnOs4x%2FldvQfA9JGBIJ3nZ4cgUjac9gNKDzupeCoFRYR41pmQb2t%2FxEN8dr1NkQv01wxq5OVztNsavMDGpne2FzbcLsnAnzhpu%2Bc8vWB9jtKV7gqeIHFmWo141qfHRUuoKzwTFVyP4AsPAWjK6wTlyZFabSxNNolgfRPcIqXhCLjzNuP%2BtXbW%2FflSkiach4728cunzXXiTt5mmBlYFJEIZtOUHtNCVDOraMkMjR3RA8F4BV5mjTxkMLz1LZbtjGosgt%2FjCw%2B5a9BjqkAWPwmlHd8nROCk3fjRaaXvXgjVDXZV1QIxHsM0FAgqsRm4o9cpygVy8l53OFbRUyagIjsppBrXPn8l7qpCsm7u4W03GjegWW6VrYf9UZtiSw0idBRAbh0BJ0aJAk20UG7HUjCqeUHFHyJI7s7za3Wv6qmoVGJ2QVhk7jiNr3P9wmReD017Mg9wlTMcbMDl6d2292%2Bywo0aHzT8HhAfVDJRT%2FKAVk&X-Amz-Signature=7654bce86f732dea0e50b89c8b7ffb4f857cfa907169947c84e1dd4d47500e84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QYDUVD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2B1HB8y4rhmk9RH1ZlgqUDsuZuCIc97mEjUvvb1rlxCAIhAN8oKaFld7SWMVE23oFFQ%2B5w%2Br%2FKSIjfEn%2BZIAcdquNJKv8DCHEQABoMNjM3NDIzMTgzODA1Igxu535DY1ayfO8Bf4wq3ANYimsNDwr88WtlMCzHUINdGo9BX8PbuiJAqu3vsKToZJLGAF9P1a%2Bzgf%2F%2B0hCWwf2aT6vWhH8fBE9qVnxtmoG%2FKbKGBwYZzfc8eGd9pdDa0Vo6fqMJcpYtEBKEvnRJLjnlV7GJZq8TEo7FMfAGIZvAy7X9U3tSHYivatpGEZHRzf9iOqRQI7kbpI2Y5BTjfQDybaQ4TmBvz7nj8dQYcq2IzSxpeedQkcNJf3z8wXLf6F%2Fb9Bck2reii6k3OFI8Z6%2BhpuZbEhjQI0HK3Ftogp%2B21%2BjiCQYomDYMCv3xvQoB1i1kOUP2fkQAIdCo2TP%2FvNoPthRbu%2BLgl18zMZTpzP82ORz7m%2BZZ1dO2Cxl3PCKjfBl%2BETYu53Wh%2FmnOs4x%2FldvQfA9JGBIJ3nZ4cgUjac9gNKDzupeCoFRYR41pmQb2t%2FxEN8dr1NkQv01wxq5OVztNsavMDGpne2FzbcLsnAnzhpu%2Bc8vWB9jtKV7gqeIHFmWo141qfHRUuoKzwTFVyP4AsPAWjK6wTlyZFabSxNNolgfRPcIqXhCLjzNuP%2BtXbW%2FflSkiach4728cunzXXiTt5mmBlYFJEIZtOUHtNCVDOraMkMjR3RA8F4BV5mjTxkMLz1LZbtjGosgt%2FjCw%2B5a9BjqkAWPwmlHd8nROCk3fjRaaXvXgjVDXZV1QIxHsM0FAgqsRm4o9cpygVy8l53OFbRUyagIjsppBrXPn8l7qpCsm7u4W03GjegWW6VrYf9UZtiSw0idBRAbh0BJ0aJAk20UG7HUjCqeUHFHyJI7s7za3Wv6qmoVGJ2QVhk7jiNr3P9wmReD017Mg9wlTMcbMDl6d2292%2Bywo0aHzT8HhAfVDJRT%2FKAVk&X-Amz-Signature=05695d61bf868416fd383e07bbc6b28573cded2c7905b5a309a9310d37ad16eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QYDUVD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2B1HB8y4rhmk9RH1ZlgqUDsuZuCIc97mEjUvvb1rlxCAIhAN8oKaFld7SWMVE23oFFQ%2B5w%2Br%2FKSIjfEn%2BZIAcdquNJKv8DCHEQABoMNjM3NDIzMTgzODA1Igxu535DY1ayfO8Bf4wq3ANYimsNDwr88WtlMCzHUINdGo9BX8PbuiJAqu3vsKToZJLGAF9P1a%2Bzgf%2F%2B0hCWwf2aT6vWhH8fBE9qVnxtmoG%2FKbKGBwYZzfc8eGd9pdDa0Vo6fqMJcpYtEBKEvnRJLjnlV7GJZq8TEo7FMfAGIZvAy7X9U3tSHYivatpGEZHRzf9iOqRQI7kbpI2Y5BTjfQDybaQ4TmBvz7nj8dQYcq2IzSxpeedQkcNJf3z8wXLf6F%2Fb9Bck2reii6k3OFI8Z6%2BhpuZbEhjQI0HK3Ftogp%2B21%2BjiCQYomDYMCv3xvQoB1i1kOUP2fkQAIdCo2TP%2FvNoPthRbu%2BLgl18zMZTpzP82ORz7m%2BZZ1dO2Cxl3PCKjfBl%2BETYu53Wh%2FmnOs4x%2FldvQfA9JGBIJ3nZ4cgUjac9gNKDzupeCoFRYR41pmQb2t%2FxEN8dr1NkQv01wxq5OVztNsavMDGpne2FzbcLsnAnzhpu%2Bc8vWB9jtKV7gqeIHFmWo141qfHRUuoKzwTFVyP4AsPAWjK6wTlyZFabSxNNolgfRPcIqXhCLjzNuP%2BtXbW%2FflSkiach4728cunzXXiTt5mmBlYFJEIZtOUHtNCVDOraMkMjR3RA8F4BV5mjTxkMLz1LZbtjGosgt%2FjCw%2B5a9BjqkAWPwmlHd8nROCk3fjRaaXvXgjVDXZV1QIxHsM0FAgqsRm4o9cpygVy8l53OFbRUyagIjsppBrXPn8l7qpCsm7u4W03GjegWW6VrYf9UZtiSw0idBRAbh0BJ0aJAk20UG7HUjCqeUHFHyJI7s7za3Wv6qmoVGJ2QVhk7jiNr3P9wmReD017Mg9wlTMcbMDl6d2292%2Bywo0aHzT8HhAfVDJRT%2FKAVk&X-Amz-Signature=8619bd5f847277aae43f49874f42c0af43fa1c592f6664cd0e28ca362eb5ff88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QYDUVD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2B1HB8y4rhmk9RH1ZlgqUDsuZuCIc97mEjUvvb1rlxCAIhAN8oKaFld7SWMVE23oFFQ%2B5w%2Br%2FKSIjfEn%2BZIAcdquNJKv8DCHEQABoMNjM3NDIzMTgzODA1Igxu535DY1ayfO8Bf4wq3ANYimsNDwr88WtlMCzHUINdGo9BX8PbuiJAqu3vsKToZJLGAF9P1a%2Bzgf%2F%2B0hCWwf2aT6vWhH8fBE9qVnxtmoG%2FKbKGBwYZzfc8eGd9pdDa0Vo6fqMJcpYtEBKEvnRJLjnlV7GJZq8TEo7FMfAGIZvAy7X9U3tSHYivatpGEZHRzf9iOqRQI7kbpI2Y5BTjfQDybaQ4TmBvz7nj8dQYcq2IzSxpeedQkcNJf3z8wXLf6F%2Fb9Bck2reii6k3OFI8Z6%2BhpuZbEhjQI0HK3Ftogp%2B21%2BjiCQYomDYMCv3xvQoB1i1kOUP2fkQAIdCo2TP%2FvNoPthRbu%2BLgl18zMZTpzP82ORz7m%2BZZ1dO2Cxl3PCKjfBl%2BETYu53Wh%2FmnOs4x%2FldvQfA9JGBIJ3nZ4cgUjac9gNKDzupeCoFRYR41pmQb2t%2FxEN8dr1NkQv01wxq5OVztNsavMDGpne2FzbcLsnAnzhpu%2Bc8vWB9jtKV7gqeIHFmWo141qfHRUuoKzwTFVyP4AsPAWjK6wTlyZFabSxNNolgfRPcIqXhCLjzNuP%2BtXbW%2FflSkiach4728cunzXXiTt5mmBlYFJEIZtOUHtNCVDOraMkMjR3RA8F4BV5mjTxkMLz1LZbtjGosgt%2FjCw%2B5a9BjqkAWPwmlHd8nROCk3fjRaaXvXgjVDXZV1QIxHsM0FAgqsRm4o9cpygVy8l53OFbRUyagIjsppBrXPn8l7qpCsm7u4W03GjegWW6VrYf9UZtiSw0idBRAbh0BJ0aJAk20UG7HUjCqeUHFHyJI7s7za3Wv6qmoVGJ2QVhk7jiNr3P9wmReD017Mg9wlTMcbMDl6d2292%2Bywo0aHzT8HhAfVDJRT%2FKAVk&X-Amz-Signature=bcf0e7f83cc35017bf2e6003144bb164c4babd4aca30d4d83d994514a06dcbac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QYDUVD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2B1HB8y4rhmk9RH1ZlgqUDsuZuCIc97mEjUvvb1rlxCAIhAN8oKaFld7SWMVE23oFFQ%2B5w%2Br%2FKSIjfEn%2BZIAcdquNJKv8DCHEQABoMNjM3NDIzMTgzODA1Igxu535DY1ayfO8Bf4wq3ANYimsNDwr88WtlMCzHUINdGo9BX8PbuiJAqu3vsKToZJLGAF9P1a%2Bzgf%2F%2B0hCWwf2aT6vWhH8fBE9qVnxtmoG%2FKbKGBwYZzfc8eGd9pdDa0Vo6fqMJcpYtEBKEvnRJLjnlV7GJZq8TEo7FMfAGIZvAy7X9U3tSHYivatpGEZHRzf9iOqRQI7kbpI2Y5BTjfQDybaQ4TmBvz7nj8dQYcq2IzSxpeedQkcNJf3z8wXLf6F%2Fb9Bck2reii6k3OFI8Z6%2BhpuZbEhjQI0HK3Ftogp%2B21%2BjiCQYomDYMCv3xvQoB1i1kOUP2fkQAIdCo2TP%2FvNoPthRbu%2BLgl18zMZTpzP82ORz7m%2BZZ1dO2Cxl3PCKjfBl%2BETYu53Wh%2FmnOs4x%2FldvQfA9JGBIJ3nZ4cgUjac9gNKDzupeCoFRYR41pmQb2t%2FxEN8dr1NkQv01wxq5OVztNsavMDGpne2FzbcLsnAnzhpu%2Bc8vWB9jtKV7gqeIHFmWo141qfHRUuoKzwTFVyP4AsPAWjK6wTlyZFabSxNNolgfRPcIqXhCLjzNuP%2BtXbW%2FflSkiach4728cunzXXiTt5mmBlYFJEIZtOUHtNCVDOraMkMjR3RA8F4BV5mjTxkMLz1LZbtjGosgt%2FjCw%2B5a9BjqkAWPwmlHd8nROCk3fjRaaXvXgjVDXZV1QIxHsM0FAgqsRm4o9cpygVy8l53OFbRUyagIjsppBrXPn8l7qpCsm7u4W03GjegWW6VrYf9UZtiSw0idBRAbh0BJ0aJAk20UG7HUjCqeUHFHyJI7s7za3Wv6qmoVGJ2QVhk7jiNr3P9wmReD017Mg9wlTMcbMDl6d2292%2Bywo0aHzT8HhAfVDJRT%2FKAVk&X-Amz-Signature=8d7f02ea471b40820a59958ec317f6a399eb38c1419a6c887b6efcd6585e08ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
