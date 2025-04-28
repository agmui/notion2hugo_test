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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDQTVCY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK0nJmDqIuYzDa3ugrR8qRECdemOGJG%2FBwz6Wh2ejK%2BAiB7YmGHqx9%2BZl65sUtZlnIcQjB3mEuw9nWK4nysZecDWir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMlx2RwRQpv7KZMrZFKtwD1979vRWgbj8c9VdWj8LbSZhrqE3lPKtMUKUPgJXtABvFZ2M2kloLEUlhG2%2BvUY0ESUsAhQYlgLBqmkXfEFcOZgDVpgX4PD1v7M49bcJ801LaA1%2B6SR%2FnpLXD1Ww%2BLfIS0pgbs0EF2T6ahtVg9zAbfXyKDuQyoZJgXemaaYV8D2gmXAB9S4t7fPPSu0hEQmBA9vjhq13PwVd3U7uA5fibbNdY6fEE%2B%2Fade2PHT8OekZAk2qfbhTkId3ho1rruUegWwSWgzvmyCNvVmb33oqVLDPcijJU0%2FJRpULRtIypNiAVnx2NuTmkRy8dSexyW7S2yYRTsVepU4iuzJqkfPEo3EAeIQpXIMGKeMsLqMADS%2B21X3Vhi5%2BYtljAHlwJcmcE5%2Bq5Wf6UeSAjekCZyUQGMeKHsjiO5L0bZ4BYl9uWV4gYb1hbrKAPJsR2lPJXf0RPdAFGSM%2FbFvz5tlf1fWE%2Bg2HQuUGrxyQJ3b3IiwbNf0uZ8dSjHfz8QSbyvON1MUM8oOgG7ynsDiP3x59aKM0CaZbwCD7SRVopdBx%2FG9wB63sE4wVh7fCwFSvj4qyVw%2BS8GBN7X7yu9MFXG03bk7W11lIbSdwxEkx5dr9TBkoSxQcq%2BcyagKGj4JdW8AY8wkby%2BwAY6pgFfpS85qn%2BTMq0zO05Zk%2FesMpbYJVM8AY1xPyYQZB%2FS9AngMmKFmWFLgnNXESei772%2BMhp%2BsraJBzi8AC0woa1iaR1E2F6PLvS740epYE8XDKl95PUoyIoJJ5fbSJ0xL%2BHAUso7QSHh%2FQVJSoiP0mL6YH10lwB0LNpu%2BgoL0DLy2WV0u9JQ6KZIhnPEH0V1iaWkRiJDc%2F5HWnJCfWqbVD52EhOjQLpO&X-Amz-Signature=5288effee11b353f6cdc92aefba19d42095d2c53ff59f371e8d62778da452601&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDQTVCY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK0nJmDqIuYzDa3ugrR8qRECdemOGJG%2FBwz6Wh2ejK%2BAiB7YmGHqx9%2BZl65sUtZlnIcQjB3mEuw9nWK4nysZecDWir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMlx2RwRQpv7KZMrZFKtwD1979vRWgbj8c9VdWj8LbSZhrqE3lPKtMUKUPgJXtABvFZ2M2kloLEUlhG2%2BvUY0ESUsAhQYlgLBqmkXfEFcOZgDVpgX4PD1v7M49bcJ801LaA1%2B6SR%2FnpLXD1Ww%2BLfIS0pgbs0EF2T6ahtVg9zAbfXyKDuQyoZJgXemaaYV8D2gmXAB9S4t7fPPSu0hEQmBA9vjhq13PwVd3U7uA5fibbNdY6fEE%2B%2Fade2PHT8OekZAk2qfbhTkId3ho1rruUegWwSWgzvmyCNvVmb33oqVLDPcijJU0%2FJRpULRtIypNiAVnx2NuTmkRy8dSexyW7S2yYRTsVepU4iuzJqkfPEo3EAeIQpXIMGKeMsLqMADS%2B21X3Vhi5%2BYtljAHlwJcmcE5%2Bq5Wf6UeSAjekCZyUQGMeKHsjiO5L0bZ4BYl9uWV4gYb1hbrKAPJsR2lPJXf0RPdAFGSM%2FbFvz5tlf1fWE%2Bg2HQuUGrxyQJ3b3IiwbNf0uZ8dSjHfz8QSbyvON1MUM8oOgG7ynsDiP3x59aKM0CaZbwCD7SRVopdBx%2FG9wB63sE4wVh7fCwFSvj4qyVw%2BS8GBN7X7yu9MFXG03bk7W11lIbSdwxEkx5dr9TBkoSxQcq%2BcyagKGj4JdW8AY8wkby%2BwAY6pgFfpS85qn%2BTMq0zO05Zk%2FesMpbYJVM8AY1xPyYQZB%2FS9AngMmKFmWFLgnNXESei772%2BMhp%2BsraJBzi8AC0woa1iaR1E2F6PLvS740epYE8XDKl95PUoyIoJJ5fbSJ0xL%2BHAUso7QSHh%2FQVJSoiP0mL6YH10lwB0LNpu%2BgoL0DLy2WV0u9JQ6KZIhnPEH0V1iaWkRiJDc%2F5HWnJCfWqbVD52EhOjQLpO&X-Amz-Signature=b93a969ea3684f03f57326e9419ec9ff7a2b938550a9512f89411576ca4a3226&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDQTVCY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK0nJmDqIuYzDa3ugrR8qRECdemOGJG%2FBwz6Wh2ejK%2BAiB7YmGHqx9%2BZl65sUtZlnIcQjB3mEuw9nWK4nysZecDWir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMlx2RwRQpv7KZMrZFKtwD1979vRWgbj8c9VdWj8LbSZhrqE3lPKtMUKUPgJXtABvFZ2M2kloLEUlhG2%2BvUY0ESUsAhQYlgLBqmkXfEFcOZgDVpgX4PD1v7M49bcJ801LaA1%2B6SR%2FnpLXD1Ww%2BLfIS0pgbs0EF2T6ahtVg9zAbfXyKDuQyoZJgXemaaYV8D2gmXAB9S4t7fPPSu0hEQmBA9vjhq13PwVd3U7uA5fibbNdY6fEE%2B%2Fade2PHT8OekZAk2qfbhTkId3ho1rruUegWwSWgzvmyCNvVmb33oqVLDPcijJU0%2FJRpULRtIypNiAVnx2NuTmkRy8dSexyW7S2yYRTsVepU4iuzJqkfPEo3EAeIQpXIMGKeMsLqMADS%2B21X3Vhi5%2BYtljAHlwJcmcE5%2Bq5Wf6UeSAjekCZyUQGMeKHsjiO5L0bZ4BYl9uWV4gYb1hbrKAPJsR2lPJXf0RPdAFGSM%2FbFvz5tlf1fWE%2Bg2HQuUGrxyQJ3b3IiwbNf0uZ8dSjHfz8QSbyvON1MUM8oOgG7ynsDiP3x59aKM0CaZbwCD7SRVopdBx%2FG9wB63sE4wVh7fCwFSvj4qyVw%2BS8GBN7X7yu9MFXG03bk7W11lIbSdwxEkx5dr9TBkoSxQcq%2BcyagKGj4JdW8AY8wkby%2BwAY6pgFfpS85qn%2BTMq0zO05Zk%2FesMpbYJVM8AY1xPyYQZB%2FS9AngMmKFmWFLgnNXESei772%2BMhp%2BsraJBzi8AC0woa1iaR1E2F6PLvS740epYE8XDKl95PUoyIoJJ5fbSJ0xL%2BHAUso7QSHh%2FQVJSoiP0mL6YH10lwB0LNpu%2BgoL0DLy2WV0u9JQ6KZIhnPEH0V1iaWkRiJDc%2F5HWnJCfWqbVD52EhOjQLpO&X-Amz-Signature=570b1fcac53b30a42b0f8a67268971871a66146c994a604ab67a562664862646&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDQTVCY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK0nJmDqIuYzDa3ugrR8qRECdemOGJG%2FBwz6Wh2ejK%2BAiB7YmGHqx9%2BZl65sUtZlnIcQjB3mEuw9nWK4nysZecDWir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMlx2RwRQpv7KZMrZFKtwD1979vRWgbj8c9VdWj8LbSZhrqE3lPKtMUKUPgJXtABvFZ2M2kloLEUlhG2%2BvUY0ESUsAhQYlgLBqmkXfEFcOZgDVpgX4PD1v7M49bcJ801LaA1%2B6SR%2FnpLXD1Ww%2BLfIS0pgbs0EF2T6ahtVg9zAbfXyKDuQyoZJgXemaaYV8D2gmXAB9S4t7fPPSu0hEQmBA9vjhq13PwVd3U7uA5fibbNdY6fEE%2B%2Fade2PHT8OekZAk2qfbhTkId3ho1rruUegWwSWgzvmyCNvVmb33oqVLDPcijJU0%2FJRpULRtIypNiAVnx2NuTmkRy8dSexyW7S2yYRTsVepU4iuzJqkfPEo3EAeIQpXIMGKeMsLqMADS%2B21X3Vhi5%2BYtljAHlwJcmcE5%2Bq5Wf6UeSAjekCZyUQGMeKHsjiO5L0bZ4BYl9uWV4gYb1hbrKAPJsR2lPJXf0RPdAFGSM%2FbFvz5tlf1fWE%2Bg2HQuUGrxyQJ3b3IiwbNf0uZ8dSjHfz8QSbyvON1MUM8oOgG7ynsDiP3x59aKM0CaZbwCD7SRVopdBx%2FG9wB63sE4wVh7fCwFSvj4qyVw%2BS8GBN7X7yu9MFXG03bk7W11lIbSdwxEkx5dr9TBkoSxQcq%2BcyagKGj4JdW8AY8wkby%2BwAY6pgFfpS85qn%2BTMq0zO05Zk%2FesMpbYJVM8AY1xPyYQZB%2FS9AngMmKFmWFLgnNXESei772%2BMhp%2BsraJBzi8AC0woa1iaR1E2F6PLvS740epYE8XDKl95PUoyIoJJ5fbSJ0xL%2BHAUso7QSHh%2FQVJSoiP0mL6YH10lwB0LNpu%2BgoL0DLy2WV0u9JQ6KZIhnPEH0V1iaWkRiJDc%2F5HWnJCfWqbVD52EhOjQLpO&X-Amz-Signature=8628c4ca8e4a5a371ce1959a3139587552510b5a4db2d88640cb18b2315afc51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDQTVCY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK0nJmDqIuYzDa3ugrR8qRECdemOGJG%2FBwz6Wh2ejK%2BAiB7YmGHqx9%2BZl65sUtZlnIcQjB3mEuw9nWK4nysZecDWir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMlx2RwRQpv7KZMrZFKtwD1979vRWgbj8c9VdWj8LbSZhrqE3lPKtMUKUPgJXtABvFZ2M2kloLEUlhG2%2BvUY0ESUsAhQYlgLBqmkXfEFcOZgDVpgX4PD1v7M49bcJ801LaA1%2B6SR%2FnpLXD1Ww%2BLfIS0pgbs0EF2T6ahtVg9zAbfXyKDuQyoZJgXemaaYV8D2gmXAB9S4t7fPPSu0hEQmBA9vjhq13PwVd3U7uA5fibbNdY6fEE%2B%2Fade2PHT8OekZAk2qfbhTkId3ho1rruUegWwSWgzvmyCNvVmb33oqVLDPcijJU0%2FJRpULRtIypNiAVnx2NuTmkRy8dSexyW7S2yYRTsVepU4iuzJqkfPEo3EAeIQpXIMGKeMsLqMADS%2B21X3Vhi5%2BYtljAHlwJcmcE5%2Bq5Wf6UeSAjekCZyUQGMeKHsjiO5L0bZ4BYl9uWV4gYb1hbrKAPJsR2lPJXf0RPdAFGSM%2FbFvz5tlf1fWE%2Bg2HQuUGrxyQJ3b3IiwbNf0uZ8dSjHfz8QSbyvON1MUM8oOgG7ynsDiP3x59aKM0CaZbwCD7SRVopdBx%2FG9wB63sE4wVh7fCwFSvj4qyVw%2BS8GBN7X7yu9MFXG03bk7W11lIbSdwxEkx5dr9TBkoSxQcq%2BcyagKGj4JdW8AY8wkby%2BwAY6pgFfpS85qn%2BTMq0zO05Zk%2FesMpbYJVM8AY1xPyYQZB%2FS9AngMmKFmWFLgnNXESei772%2BMhp%2BsraJBzi8AC0woa1iaR1E2F6PLvS740epYE8XDKl95PUoyIoJJ5fbSJ0xL%2BHAUso7QSHh%2FQVJSoiP0mL6YH10lwB0LNpu%2BgoL0DLy2WV0u9JQ6KZIhnPEH0V1iaWkRiJDc%2F5HWnJCfWqbVD52EhOjQLpO&X-Amz-Signature=e32b85795706bd0a263e1c6bc6bc75450fb8a5b75e011adbddbed9f3037e25b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDQTVCY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK0nJmDqIuYzDa3ugrR8qRECdemOGJG%2FBwz6Wh2ejK%2BAiB7YmGHqx9%2BZl65sUtZlnIcQjB3mEuw9nWK4nysZecDWir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMlx2RwRQpv7KZMrZFKtwD1979vRWgbj8c9VdWj8LbSZhrqE3lPKtMUKUPgJXtABvFZ2M2kloLEUlhG2%2BvUY0ESUsAhQYlgLBqmkXfEFcOZgDVpgX4PD1v7M49bcJ801LaA1%2B6SR%2FnpLXD1Ww%2BLfIS0pgbs0EF2T6ahtVg9zAbfXyKDuQyoZJgXemaaYV8D2gmXAB9S4t7fPPSu0hEQmBA9vjhq13PwVd3U7uA5fibbNdY6fEE%2B%2Fade2PHT8OekZAk2qfbhTkId3ho1rruUegWwSWgzvmyCNvVmb33oqVLDPcijJU0%2FJRpULRtIypNiAVnx2NuTmkRy8dSexyW7S2yYRTsVepU4iuzJqkfPEo3EAeIQpXIMGKeMsLqMADS%2B21X3Vhi5%2BYtljAHlwJcmcE5%2Bq5Wf6UeSAjekCZyUQGMeKHsjiO5L0bZ4BYl9uWV4gYb1hbrKAPJsR2lPJXf0RPdAFGSM%2FbFvz5tlf1fWE%2Bg2HQuUGrxyQJ3b3IiwbNf0uZ8dSjHfz8QSbyvON1MUM8oOgG7ynsDiP3x59aKM0CaZbwCD7SRVopdBx%2FG9wB63sE4wVh7fCwFSvj4qyVw%2BS8GBN7X7yu9MFXG03bk7W11lIbSdwxEkx5dr9TBkoSxQcq%2BcyagKGj4JdW8AY8wkby%2BwAY6pgFfpS85qn%2BTMq0zO05Zk%2FesMpbYJVM8AY1xPyYQZB%2FS9AngMmKFmWFLgnNXESei772%2BMhp%2BsraJBzi8AC0woa1iaR1E2F6PLvS740epYE8XDKl95PUoyIoJJ5fbSJ0xL%2BHAUso7QSHh%2FQVJSoiP0mL6YH10lwB0LNpu%2BgoL0DLy2WV0u9JQ6KZIhnPEH0V1iaWkRiJDc%2F5HWnJCfWqbVD52EhOjQLpO&X-Amz-Signature=304a413ac76e79299995e4ca3145a9850d58995aac8f8b330b2088593237790d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDQTVCY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK0nJmDqIuYzDa3ugrR8qRECdemOGJG%2FBwz6Wh2ejK%2BAiB7YmGHqx9%2BZl65sUtZlnIcQjB3mEuw9nWK4nysZecDWir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMlx2RwRQpv7KZMrZFKtwD1979vRWgbj8c9VdWj8LbSZhrqE3lPKtMUKUPgJXtABvFZ2M2kloLEUlhG2%2BvUY0ESUsAhQYlgLBqmkXfEFcOZgDVpgX4PD1v7M49bcJ801LaA1%2B6SR%2FnpLXD1Ww%2BLfIS0pgbs0EF2T6ahtVg9zAbfXyKDuQyoZJgXemaaYV8D2gmXAB9S4t7fPPSu0hEQmBA9vjhq13PwVd3U7uA5fibbNdY6fEE%2B%2Fade2PHT8OekZAk2qfbhTkId3ho1rruUegWwSWgzvmyCNvVmb33oqVLDPcijJU0%2FJRpULRtIypNiAVnx2NuTmkRy8dSexyW7S2yYRTsVepU4iuzJqkfPEo3EAeIQpXIMGKeMsLqMADS%2B21X3Vhi5%2BYtljAHlwJcmcE5%2Bq5Wf6UeSAjekCZyUQGMeKHsjiO5L0bZ4BYl9uWV4gYb1hbrKAPJsR2lPJXf0RPdAFGSM%2FbFvz5tlf1fWE%2Bg2HQuUGrxyQJ3b3IiwbNf0uZ8dSjHfz8QSbyvON1MUM8oOgG7ynsDiP3x59aKM0CaZbwCD7SRVopdBx%2FG9wB63sE4wVh7fCwFSvj4qyVw%2BS8GBN7X7yu9MFXG03bk7W11lIbSdwxEkx5dr9TBkoSxQcq%2BcyagKGj4JdW8AY8wkby%2BwAY6pgFfpS85qn%2BTMq0zO05Zk%2FesMpbYJVM8AY1xPyYQZB%2FS9AngMmKFmWFLgnNXESei772%2BMhp%2BsraJBzi8AC0woa1iaR1E2F6PLvS740epYE8XDKl95PUoyIoJJ5fbSJ0xL%2BHAUso7QSHh%2FQVJSoiP0mL6YH10lwB0LNpu%2BgoL0DLy2WV0u9JQ6KZIhnPEH0V1iaWkRiJDc%2F5HWnJCfWqbVD52EhOjQLpO&X-Amz-Signature=8e07d216e5e9119c2a49e4769a801783c3416d897e3b2d06371a8db129b5febf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDQTVCY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFK0nJmDqIuYzDa3ugrR8qRECdemOGJG%2FBwz6Wh2ejK%2BAiB7YmGHqx9%2BZl65sUtZlnIcQjB3mEuw9nWK4nysZecDWir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMlx2RwRQpv7KZMrZFKtwD1979vRWgbj8c9VdWj8LbSZhrqE3lPKtMUKUPgJXtABvFZ2M2kloLEUlhG2%2BvUY0ESUsAhQYlgLBqmkXfEFcOZgDVpgX4PD1v7M49bcJ801LaA1%2B6SR%2FnpLXD1Ww%2BLfIS0pgbs0EF2T6ahtVg9zAbfXyKDuQyoZJgXemaaYV8D2gmXAB9S4t7fPPSu0hEQmBA9vjhq13PwVd3U7uA5fibbNdY6fEE%2B%2Fade2PHT8OekZAk2qfbhTkId3ho1rruUegWwSWgzvmyCNvVmb33oqVLDPcijJU0%2FJRpULRtIypNiAVnx2NuTmkRy8dSexyW7S2yYRTsVepU4iuzJqkfPEo3EAeIQpXIMGKeMsLqMADS%2B21X3Vhi5%2BYtljAHlwJcmcE5%2Bq5Wf6UeSAjekCZyUQGMeKHsjiO5L0bZ4BYl9uWV4gYb1hbrKAPJsR2lPJXf0RPdAFGSM%2FbFvz5tlf1fWE%2Bg2HQuUGrxyQJ3b3IiwbNf0uZ8dSjHfz8QSbyvON1MUM8oOgG7ynsDiP3x59aKM0CaZbwCD7SRVopdBx%2FG9wB63sE4wVh7fCwFSvj4qyVw%2BS8GBN7X7yu9MFXG03bk7W11lIbSdwxEkx5dr9TBkoSxQcq%2BcyagKGj4JdW8AY8wkby%2BwAY6pgFfpS85qn%2BTMq0zO05Zk%2FesMpbYJVM8AY1xPyYQZB%2FS9AngMmKFmWFLgnNXESei772%2BMhp%2BsraJBzi8AC0woa1iaR1E2F6PLvS740epYE8XDKl95PUoyIoJJ5fbSJ0xL%2BHAUso7QSHh%2FQVJSoiP0mL6YH10lwB0LNpu%2BgoL0DLy2WV0u9JQ6KZIhnPEH0V1iaWkRiJDc%2F5HWnJCfWqbVD52EhOjQLpO&X-Amz-Signature=118b8fd0a37e3c057a3b2b2eb699511a1a46b578f7f1f28b1edf9f8109cca68a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
