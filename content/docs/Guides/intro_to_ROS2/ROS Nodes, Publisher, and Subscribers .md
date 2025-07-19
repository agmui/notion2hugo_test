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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRDJYWC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVHfBmJk3fJH5vtYl32VFS0dRtupCTcg08bnNbbMuRoAiAQrdXgLOrBcLvuynLiDN9Yavf8GSrmzNYS1sN5ART7hCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKCjfXioFhUorrYNKtwDfgoH6w2WLx6%2FGN4DUCh7HBLpCwRqdAx8WlRSaVGf7DgH8OOXF4lOb3A3GWDGDYStloyCwxGkNOBhuStn1a9OEo828Hy11%2FAN%2Fcv842F0g72A7DV0GWWyGF67bwwVCCAyMb%2BdSPLO7IFXxzdB0lTFiHG8%2FtvaqGEx1iK38M8kViCYbhMHPHi6VzK9hmOCRJW1%2FgSyh11WZ%2FuIwy5Sg0bUgzQfngA2f33Y4YnZCi%2Fiu%2FxBYZo%2Bz72PQXuHhd6bRLFm76fsufvY3bKrf3uvMRKzWMEoCMvquaPOFrLjU%2F0t95r7qRiOnxeKus5t%2Bi732LA5LtQqIP7BuiQ%2BJS0m6l0j6D7CA1vcUFYSEd0Z6nzm8V21bckL5wxqM%2FGa1QW8tx0hauU3FdOkmw2yJLk%2FzAAlK0OfGGgGzR7KFNmLcn%2BBUMg%2B9vungOFS6GUbiOglu0ErZ2ZjSZb5hF%2Bg%2FQcjZ4dWudPJFJVlhzvrdMW%2FXHM%2BgIQMvuWpmZPFX4f1uoZtkrrRVk2JV3tU04yvfqXJ9U5ifRqJZ8DJyjUa5jT8XR8OxxLpi2FX489NO5k5%2FsDXeXj9MSNfxVj%2BGlDLvvhYVULZWbGu6aYnwEp6b4iPwGf3GIfje%2BdWJUZTu2aF%2B7UwjvbvwwY6pgFfTNCmPyr8US3reOv4F778WjpNkW7XYUJ%2BygqHu2N7lQbyJovjg9Wp%2B9bsfe40hs%2F0zdd54GRLSnUvWpdN9SAqbYk5Jge2muzjC0gsp%2FHzYVrb7gFOGIWyJnL0lgjRflnmHBF3Map6cHQdp%2FC8D9H4CMsjPKngec5NGOb%2BN%2FTH5LQNRGDW1n5xkLvQomcGP6biDkoRCIYIqtKSV%2BpFB9xC3C5FAAUc&X-Amz-Signature=4c1156d1462c468cee96d5692f50660ec4a2c1d74646efdebbc68fbc79da6b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRDJYWC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVHfBmJk3fJH5vtYl32VFS0dRtupCTcg08bnNbbMuRoAiAQrdXgLOrBcLvuynLiDN9Yavf8GSrmzNYS1sN5ART7hCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKCjfXioFhUorrYNKtwDfgoH6w2WLx6%2FGN4DUCh7HBLpCwRqdAx8WlRSaVGf7DgH8OOXF4lOb3A3GWDGDYStloyCwxGkNOBhuStn1a9OEo828Hy11%2FAN%2Fcv842F0g72A7DV0GWWyGF67bwwVCCAyMb%2BdSPLO7IFXxzdB0lTFiHG8%2FtvaqGEx1iK38M8kViCYbhMHPHi6VzK9hmOCRJW1%2FgSyh11WZ%2FuIwy5Sg0bUgzQfngA2f33Y4YnZCi%2Fiu%2FxBYZo%2Bz72PQXuHhd6bRLFm76fsufvY3bKrf3uvMRKzWMEoCMvquaPOFrLjU%2F0t95r7qRiOnxeKus5t%2Bi732LA5LtQqIP7BuiQ%2BJS0m6l0j6D7CA1vcUFYSEd0Z6nzm8V21bckL5wxqM%2FGa1QW8tx0hauU3FdOkmw2yJLk%2FzAAlK0OfGGgGzR7KFNmLcn%2BBUMg%2B9vungOFS6GUbiOglu0ErZ2ZjSZb5hF%2Bg%2FQcjZ4dWudPJFJVlhzvrdMW%2FXHM%2BgIQMvuWpmZPFX4f1uoZtkrrRVk2JV3tU04yvfqXJ9U5ifRqJZ8DJyjUa5jT8XR8OxxLpi2FX489NO5k5%2FsDXeXj9MSNfxVj%2BGlDLvvhYVULZWbGu6aYnwEp6b4iPwGf3GIfje%2BdWJUZTu2aF%2B7UwjvbvwwY6pgFfTNCmPyr8US3reOv4F778WjpNkW7XYUJ%2BygqHu2N7lQbyJovjg9Wp%2B9bsfe40hs%2F0zdd54GRLSnUvWpdN9SAqbYk5Jge2muzjC0gsp%2FHzYVrb7gFOGIWyJnL0lgjRflnmHBF3Map6cHQdp%2FC8D9H4CMsjPKngec5NGOb%2BN%2FTH5LQNRGDW1n5xkLvQomcGP6biDkoRCIYIqtKSV%2BpFB9xC3C5FAAUc&X-Amz-Signature=dc6f28766653c41d65f69df9c0c37d36b91a5dee6798b469e5c89019ad332d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRDJYWC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVHfBmJk3fJH5vtYl32VFS0dRtupCTcg08bnNbbMuRoAiAQrdXgLOrBcLvuynLiDN9Yavf8GSrmzNYS1sN5ART7hCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKCjfXioFhUorrYNKtwDfgoH6w2WLx6%2FGN4DUCh7HBLpCwRqdAx8WlRSaVGf7DgH8OOXF4lOb3A3GWDGDYStloyCwxGkNOBhuStn1a9OEo828Hy11%2FAN%2Fcv842F0g72A7DV0GWWyGF67bwwVCCAyMb%2BdSPLO7IFXxzdB0lTFiHG8%2FtvaqGEx1iK38M8kViCYbhMHPHi6VzK9hmOCRJW1%2FgSyh11WZ%2FuIwy5Sg0bUgzQfngA2f33Y4YnZCi%2Fiu%2FxBYZo%2Bz72PQXuHhd6bRLFm76fsufvY3bKrf3uvMRKzWMEoCMvquaPOFrLjU%2F0t95r7qRiOnxeKus5t%2Bi732LA5LtQqIP7BuiQ%2BJS0m6l0j6D7CA1vcUFYSEd0Z6nzm8V21bckL5wxqM%2FGa1QW8tx0hauU3FdOkmw2yJLk%2FzAAlK0OfGGgGzR7KFNmLcn%2BBUMg%2B9vungOFS6GUbiOglu0ErZ2ZjSZb5hF%2Bg%2FQcjZ4dWudPJFJVlhzvrdMW%2FXHM%2BgIQMvuWpmZPFX4f1uoZtkrrRVk2JV3tU04yvfqXJ9U5ifRqJZ8DJyjUa5jT8XR8OxxLpi2FX489NO5k5%2FsDXeXj9MSNfxVj%2BGlDLvvhYVULZWbGu6aYnwEp6b4iPwGf3GIfje%2BdWJUZTu2aF%2B7UwjvbvwwY6pgFfTNCmPyr8US3reOv4F778WjpNkW7XYUJ%2BygqHu2N7lQbyJovjg9Wp%2B9bsfe40hs%2F0zdd54GRLSnUvWpdN9SAqbYk5Jge2muzjC0gsp%2FHzYVrb7gFOGIWyJnL0lgjRflnmHBF3Map6cHQdp%2FC8D9H4CMsjPKngec5NGOb%2BN%2FTH5LQNRGDW1n5xkLvQomcGP6biDkoRCIYIqtKSV%2BpFB9xC3C5FAAUc&X-Amz-Signature=24c9439911b8dcd611ba929a0a64b1bf7af6b94d2f1a5e138771ba49d100d23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRDJYWC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVHfBmJk3fJH5vtYl32VFS0dRtupCTcg08bnNbbMuRoAiAQrdXgLOrBcLvuynLiDN9Yavf8GSrmzNYS1sN5ART7hCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKCjfXioFhUorrYNKtwDfgoH6w2WLx6%2FGN4DUCh7HBLpCwRqdAx8WlRSaVGf7DgH8OOXF4lOb3A3GWDGDYStloyCwxGkNOBhuStn1a9OEo828Hy11%2FAN%2Fcv842F0g72A7DV0GWWyGF67bwwVCCAyMb%2BdSPLO7IFXxzdB0lTFiHG8%2FtvaqGEx1iK38M8kViCYbhMHPHi6VzK9hmOCRJW1%2FgSyh11WZ%2FuIwy5Sg0bUgzQfngA2f33Y4YnZCi%2Fiu%2FxBYZo%2Bz72PQXuHhd6bRLFm76fsufvY3bKrf3uvMRKzWMEoCMvquaPOFrLjU%2F0t95r7qRiOnxeKus5t%2Bi732LA5LtQqIP7BuiQ%2BJS0m6l0j6D7CA1vcUFYSEd0Z6nzm8V21bckL5wxqM%2FGa1QW8tx0hauU3FdOkmw2yJLk%2FzAAlK0OfGGgGzR7KFNmLcn%2BBUMg%2B9vungOFS6GUbiOglu0ErZ2ZjSZb5hF%2Bg%2FQcjZ4dWudPJFJVlhzvrdMW%2FXHM%2BgIQMvuWpmZPFX4f1uoZtkrrRVk2JV3tU04yvfqXJ9U5ifRqJZ8DJyjUa5jT8XR8OxxLpi2FX489NO5k5%2FsDXeXj9MSNfxVj%2BGlDLvvhYVULZWbGu6aYnwEp6b4iPwGf3GIfje%2BdWJUZTu2aF%2B7UwjvbvwwY6pgFfTNCmPyr8US3reOv4F778WjpNkW7XYUJ%2BygqHu2N7lQbyJovjg9Wp%2B9bsfe40hs%2F0zdd54GRLSnUvWpdN9SAqbYk5Jge2muzjC0gsp%2FHzYVrb7gFOGIWyJnL0lgjRflnmHBF3Map6cHQdp%2FC8D9H4CMsjPKngec5NGOb%2BN%2FTH5LQNRGDW1n5xkLvQomcGP6biDkoRCIYIqtKSV%2BpFB9xC3C5FAAUc&X-Amz-Signature=cebd920cf095e15a304e27f3309e3d2319eb742833c2bbda740fedd853f22d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRDJYWC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVHfBmJk3fJH5vtYl32VFS0dRtupCTcg08bnNbbMuRoAiAQrdXgLOrBcLvuynLiDN9Yavf8GSrmzNYS1sN5ART7hCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKCjfXioFhUorrYNKtwDfgoH6w2WLx6%2FGN4DUCh7HBLpCwRqdAx8WlRSaVGf7DgH8OOXF4lOb3A3GWDGDYStloyCwxGkNOBhuStn1a9OEo828Hy11%2FAN%2Fcv842F0g72A7DV0GWWyGF67bwwVCCAyMb%2BdSPLO7IFXxzdB0lTFiHG8%2FtvaqGEx1iK38M8kViCYbhMHPHi6VzK9hmOCRJW1%2FgSyh11WZ%2FuIwy5Sg0bUgzQfngA2f33Y4YnZCi%2Fiu%2FxBYZo%2Bz72PQXuHhd6bRLFm76fsufvY3bKrf3uvMRKzWMEoCMvquaPOFrLjU%2F0t95r7qRiOnxeKus5t%2Bi732LA5LtQqIP7BuiQ%2BJS0m6l0j6D7CA1vcUFYSEd0Z6nzm8V21bckL5wxqM%2FGa1QW8tx0hauU3FdOkmw2yJLk%2FzAAlK0OfGGgGzR7KFNmLcn%2BBUMg%2B9vungOFS6GUbiOglu0ErZ2ZjSZb5hF%2Bg%2FQcjZ4dWudPJFJVlhzvrdMW%2FXHM%2BgIQMvuWpmZPFX4f1uoZtkrrRVk2JV3tU04yvfqXJ9U5ifRqJZ8DJyjUa5jT8XR8OxxLpi2FX489NO5k5%2FsDXeXj9MSNfxVj%2BGlDLvvhYVULZWbGu6aYnwEp6b4iPwGf3GIfje%2BdWJUZTu2aF%2B7UwjvbvwwY6pgFfTNCmPyr8US3reOv4F778WjpNkW7XYUJ%2BygqHu2N7lQbyJovjg9Wp%2B9bsfe40hs%2F0zdd54GRLSnUvWpdN9SAqbYk5Jge2muzjC0gsp%2FHzYVrb7gFOGIWyJnL0lgjRflnmHBF3Map6cHQdp%2FC8D9H4CMsjPKngec5NGOb%2BN%2FTH5LQNRGDW1n5xkLvQomcGP6biDkoRCIYIqtKSV%2BpFB9xC3C5FAAUc&X-Amz-Signature=074a28eec993fef4397b9039debeda5dbc366d942edf7615160222bd691e3090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRDJYWC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVHfBmJk3fJH5vtYl32VFS0dRtupCTcg08bnNbbMuRoAiAQrdXgLOrBcLvuynLiDN9Yavf8GSrmzNYS1sN5ART7hCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKCjfXioFhUorrYNKtwDfgoH6w2WLx6%2FGN4DUCh7HBLpCwRqdAx8WlRSaVGf7DgH8OOXF4lOb3A3GWDGDYStloyCwxGkNOBhuStn1a9OEo828Hy11%2FAN%2Fcv842F0g72A7DV0GWWyGF67bwwVCCAyMb%2BdSPLO7IFXxzdB0lTFiHG8%2FtvaqGEx1iK38M8kViCYbhMHPHi6VzK9hmOCRJW1%2FgSyh11WZ%2FuIwy5Sg0bUgzQfngA2f33Y4YnZCi%2Fiu%2FxBYZo%2Bz72PQXuHhd6bRLFm76fsufvY3bKrf3uvMRKzWMEoCMvquaPOFrLjU%2F0t95r7qRiOnxeKus5t%2Bi732LA5LtQqIP7BuiQ%2BJS0m6l0j6D7CA1vcUFYSEd0Z6nzm8V21bckL5wxqM%2FGa1QW8tx0hauU3FdOkmw2yJLk%2FzAAlK0OfGGgGzR7KFNmLcn%2BBUMg%2B9vungOFS6GUbiOglu0ErZ2ZjSZb5hF%2Bg%2FQcjZ4dWudPJFJVlhzvrdMW%2FXHM%2BgIQMvuWpmZPFX4f1uoZtkrrRVk2JV3tU04yvfqXJ9U5ifRqJZ8DJyjUa5jT8XR8OxxLpi2FX489NO5k5%2FsDXeXj9MSNfxVj%2BGlDLvvhYVULZWbGu6aYnwEp6b4iPwGf3GIfje%2BdWJUZTu2aF%2B7UwjvbvwwY6pgFfTNCmPyr8US3reOv4F778WjpNkW7XYUJ%2BygqHu2N7lQbyJovjg9Wp%2B9bsfe40hs%2F0zdd54GRLSnUvWpdN9SAqbYk5Jge2muzjC0gsp%2FHzYVrb7gFOGIWyJnL0lgjRflnmHBF3Map6cHQdp%2FC8D9H4CMsjPKngec5NGOb%2BN%2FTH5LQNRGDW1n5xkLvQomcGP6biDkoRCIYIqtKSV%2BpFB9xC3C5FAAUc&X-Amz-Signature=04a7a8201e992026c46945143f8f14538aab0addcbbf865cb86eea169dd25906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRDJYWC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVHfBmJk3fJH5vtYl32VFS0dRtupCTcg08bnNbbMuRoAiAQrdXgLOrBcLvuynLiDN9Yavf8GSrmzNYS1sN5ART7hCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKCjfXioFhUorrYNKtwDfgoH6w2WLx6%2FGN4DUCh7HBLpCwRqdAx8WlRSaVGf7DgH8OOXF4lOb3A3GWDGDYStloyCwxGkNOBhuStn1a9OEo828Hy11%2FAN%2Fcv842F0g72A7DV0GWWyGF67bwwVCCAyMb%2BdSPLO7IFXxzdB0lTFiHG8%2FtvaqGEx1iK38M8kViCYbhMHPHi6VzK9hmOCRJW1%2FgSyh11WZ%2FuIwy5Sg0bUgzQfngA2f33Y4YnZCi%2Fiu%2FxBYZo%2Bz72PQXuHhd6bRLFm76fsufvY3bKrf3uvMRKzWMEoCMvquaPOFrLjU%2F0t95r7qRiOnxeKus5t%2Bi732LA5LtQqIP7BuiQ%2BJS0m6l0j6D7CA1vcUFYSEd0Z6nzm8V21bckL5wxqM%2FGa1QW8tx0hauU3FdOkmw2yJLk%2FzAAlK0OfGGgGzR7KFNmLcn%2BBUMg%2B9vungOFS6GUbiOglu0ErZ2ZjSZb5hF%2Bg%2FQcjZ4dWudPJFJVlhzvrdMW%2FXHM%2BgIQMvuWpmZPFX4f1uoZtkrrRVk2JV3tU04yvfqXJ9U5ifRqJZ8DJyjUa5jT8XR8OxxLpi2FX489NO5k5%2FsDXeXj9MSNfxVj%2BGlDLvvhYVULZWbGu6aYnwEp6b4iPwGf3GIfje%2BdWJUZTu2aF%2B7UwjvbvwwY6pgFfTNCmPyr8US3reOv4F778WjpNkW7XYUJ%2BygqHu2N7lQbyJovjg9Wp%2B9bsfe40hs%2F0zdd54GRLSnUvWpdN9SAqbYk5Jge2muzjC0gsp%2FHzYVrb7gFOGIWyJnL0lgjRflnmHBF3Map6cHQdp%2FC8D9H4CMsjPKngec5NGOb%2BN%2FTH5LQNRGDW1n5xkLvQomcGP6biDkoRCIYIqtKSV%2BpFB9xC3C5FAAUc&X-Amz-Signature=5964de229a1b891424176fa2aaf78cded6999d7386dcc8bd151c9d305a21f25a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRDJYWC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVHfBmJk3fJH5vtYl32VFS0dRtupCTcg08bnNbbMuRoAiAQrdXgLOrBcLvuynLiDN9Yavf8GSrmzNYS1sN5ART7hCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsKCjfXioFhUorrYNKtwDfgoH6w2WLx6%2FGN4DUCh7HBLpCwRqdAx8WlRSaVGf7DgH8OOXF4lOb3A3GWDGDYStloyCwxGkNOBhuStn1a9OEo828Hy11%2FAN%2Fcv842F0g72A7DV0GWWyGF67bwwVCCAyMb%2BdSPLO7IFXxzdB0lTFiHG8%2FtvaqGEx1iK38M8kViCYbhMHPHi6VzK9hmOCRJW1%2FgSyh11WZ%2FuIwy5Sg0bUgzQfngA2f33Y4YnZCi%2Fiu%2FxBYZo%2Bz72PQXuHhd6bRLFm76fsufvY3bKrf3uvMRKzWMEoCMvquaPOFrLjU%2F0t95r7qRiOnxeKus5t%2Bi732LA5LtQqIP7BuiQ%2BJS0m6l0j6D7CA1vcUFYSEd0Z6nzm8V21bckL5wxqM%2FGa1QW8tx0hauU3FdOkmw2yJLk%2FzAAlK0OfGGgGzR7KFNmLcn%2BBUMg%2B9vungOFS6GUbiOglu0ErZ2ZjSZb5hF%2Bg%2FQcjZ4dWudPJFJVlhzvrdMW%2FXHM%2BgIQMvuWpmZPFX4f1uoZtkrrRVk2JV3tU04yvfqXJ9U5ifRqJZ8DJyjUa5jT8XR8OxxLpi2FX489NO5k5%2FsDXeXj9MSNfxVj%2BGlDLvvhYVULZWbGu6aYnwEp6b4iPwGf3GIfje%2BdWJUZTu2aF%2B7UwjvbvwwY6pgFfTNCmPyr8US3reOv4F778WjpNkW7XYUJ%2BygqHu2N7lQbyJovjg9Wp%2B9bsfe40hs%2F0zdd54GRLSnUvWpdN9SAqbYk5Jge2muzjC0gsp%2FHzYVrb7gFOGIWyJnL0lgjRflnmHBF3Map6cHQdp%2FC8D9H4CMsjPKngec5NGOb%2BN%2FTH5LQNRGDW1n5xkLvQomcGP6biDkoRCIYIqtKSV%2BpFB9xC3C5FAAUc&X-Amz-Signature=5d6db58c8fc2728c1adfa2cdbe59b773beebc4f5d6e399e97ea7611395ab32eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
