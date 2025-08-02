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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGK7J7XN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxSYupOYthJTGAnbCiPCQaX3zrh7vxgr6vbnDiILNqiAiEAxkCBGptRDmlNvdRzZ2d%2Bb4qjZ%2FuKEjpRbjOJ%2FfVtGAcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHfWvhoFYXeCdf4cDyrcA1C3awVCnB%2FTdKlMyDlf8MMjpGq9nNHqAonVY%2FruL5lj%2BTQtYxmrlreh4982oglALafp5x2YYLNFjb7jRkf%2FJ9jMxZdVcq81J2rm%2Bi2QgYJ34ULG%2BqBpEfNRe3Do%2Fd25hjeMrN0j8gXAkB%2FOoDig4%2B8w0k2y5B%2F1%2FicPwp4ApvckzKZD8xJ%2FKtIJjJgp%2F3ZGhthwaRy%2Fhn3pwLyXVWyBqLobtyv8dMjr0kLY8hwHzjysZzXSrq8%2FuctT2dc1sqdzzAmnyBaQJPO6jxJLnjCM6TMuNGSSz80ntH1JaKq2g9UM7NY6IttwA%2BFiOnZ5Jqs1jN1GvcY5vyv7gwIXoaptl4KYM%2BOe4KvrKWNTx3%2BAjtq3xer3qcF13ErgpHCqfCQhU0ytw0s3TSoVx2e2VKnKMYGVllgMuszZ%2FIcZa67rqUC9cJG%2B5x8WWgMcdGLlww%2BFHlu%2F6ayKY12j05HtbvlhPXNNsiRWd1BQxXcQnHcwbekPlpxY%2FXZZcCsb9iXV9l1r8RrQvU%2BKj61BG59ODlyztBwM8Afzmbvh%2Fhu4cBs0hMjh9QMfx1hJuP3n6mKnaMCzM3uXnKBzYUYtmfLCC4pf9zyC5M8nxMR0vEvKzEULlBoKcJrqvXD5%2FWVOorMGMNzvtsQGOqUBnhL1JVx2ZyBC3lDfRZJxaAtd4kG9Z8httRQ%2BBMwghu3rcjmA3ryuT09ZCjIDiUj1uTT9mxPgn%2F8H2zmnnr5Ar3zmb8JeKOnQH4%2BPKzS2FBHZZ3gdoWSLNgaUYhhVF9NYy4SMszjlYiYzdfn3zCnO4id89VXNsCom134%2FZvk2BmW%2FkcGl5ZB8Q7jj%2FpHZ19P60gzQKaQ1RZQ9J89klzr6Y3I%2FKCpw&X-Amz-Signature=cbc86da020cc4cd4f220bd01b27544ec6925140a5d957884c77d7352c57e2c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGK7J7XN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxSYupOYthJTGAnbCiPCQaX3zrh7vxgr6vbnDiILNqiAiEAxkCBGptRDmlNvdRzZ2d%2Bb4qjZ%2FuKEjpRbjOJ%2FfVtGAcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHfWvhoFYXeCdf4cDyrcA1C3awVCnB%2FTdKlMyDlf8MMjpGq9nNHqAonVY%2FruL5lj%2BTQtYxmrlreh4982oglALafp5x2YYLNFjb7jRkf%2FJ9jMxZdVcq81J2rm%2Bi2QgYJ34ULG%2BqBpEfNRe3Do%2Fd25hjeMrN0j8gXAkB%2FOoDig4%2B8w0k2y5B%2F1%2FicPwp4ApvckzKZD8xJ%2FKtIJjJgp%2F3ZGhthwaRy%2Fhn3pwLyXVWyBqLobtyv8dMjr0kLY8hwHzjysZzXSrq8%2FuctT2dc1sqdzzAmnyBaQJPO6jxJLnjCM6TMuNGSSz80ntH1JaKq2g9UM7NY6IttwA%2BFiOnZ5Jqs1jN1GvcY5vyv7gwIXoaptl4KYM%2BOe4KvrKWNTx3%2BAjtq3xer3qcF13ErgpHCqfCQhU0ytw0s3TSoVx2e2VKnKMYGVllgMuszZ%2FIcZa67rqUC9cJG%2B5x8WWgMcdGLlww%2BFHlu%2F6ayKY12j05HtbvlhPXNNsiRWd1BQxXcQnHcwbekPlpxY%2FXZZcCsb9iXV9l1r8RrQvU%2BKj61BG59ODlyztBwM8Afzmbvh%2Fhu4cBs0hMjh9QMfx1hJuP3n6mKnaMCzM3uXnKBzYUYtmfLCC4pf9zyC5M8nxMR0vEvKzEULlBoKcJrqvXD5%2FWVOorMGMNzvtsQGOqUBnhL1JVx2ZyBC3lDfRZJxaAtd4kG9Z8httRQ%2BBMwghu3rcjmA3ryuT09ZCjIDiUj1uTT9mxPgn%2F8H2zmnnr5Ar3zmb8JeKOnQH4%2BPKzS2FBHZZ3gdoWSLNgaUYhhVF9NYy4SMszjlYiYzdfn3zCnO4id89VXNsCom134%2FZvk2BmW%2FkcGl5ZB8Q7jj%2FpHZ19P60gzQKaQ1RZQ9J89klzr6Y3I%2FKCpw&X-Amz-Signature=260f7c1f39b45ebcb0776620f8b383e01d3dfdf3569fc4fa7dc9154dcff4cd6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGK7J7XN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxSYupOYthJTGAnbCiPCQaX3zrh7vxgr6vbnDiILNqiAiEAxkCBGptRDmlNvdRzZ2d%2Bb4qjZ%2FuKEjpRbjOJ%2FfVtGAcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHfWvhoFYXeCdf4cDyrcA1C3awVCnB%2FTdKlMyDlf8MMjpGq9nNHqAonVY%2FruL5lj%2BTQtYxmrlreh4982oglALafp5x2YYLNFjb7jRkf%2FJ9jMxZdVcq81J2rm%2Bi2QgYJ34ULG%2BqBpEfNRe3Do%2Fd25hjeMrN0j8gXAkB%2FOoDig4%2B8w0k2y5B%2F1%2FicPwp4ApvckzKZD8xJ%2FKtIJjJgp%2F3ZGhthwaRy%2Fhn3pwLyXVWyBqLobtyv8dMjr0kLY8hwHzjysZzXSrq8%2FuctT2dc1sqdzzAmnyBaQJPO6jxJLnjCM6TMuNGSSz80ntH1JaKq2g9UM7NY6IttwA%2BFiOnZ5Jqs1jN1GvcY5vyv7gwIXoaptl4KYM%2BOe4KvrKWNTx3%2BAjtq3xer3qcF13ErgpHCqfCQhU0ytw0s3TSoVx2e2VKnKMYGVllgMuszZ%2FIcZa67rqUC9cJG%2B5x8WWgMcdGLlww%2BFHlu%2F6ayKY12j05HtbvlhPXNNsiRWd1BQxXcQnHcwbekPlpxY%2FXZZcCsb9iXV9l1r8RrQvU%2BKj61BG59ODlyztBwM8Afzmbvh%2Fhu4cBs0hMjh9QMfx1hJuP3n6mKnaMCzM3uXnKBzYUYtmfLCC4pf9zyC5M8nxMR0vEvKzEULlBoKcJrqvXD5%2FWVOorMGMNzvtsQGOqUBnhL1JVx2ZyBC3lDfRZJxaAtd4kG9Z8httRQ%2BBMwghu3rcjmA3ryuT09ZCjIDiUj1uTT9mxPgn%2F8H2zmnnr5Ar3zmb8JeKOnQH4%2BPKzS2FBHZZ3gdoWSLNgaUYhhVF9NYy4SMszjlYiYzdfn3zCnO4id89VXNsCom134%2FZvk2BmW%2FkcGl5ZB8Q7jj%2FpHZ19P60gzQKaQ1RZQ9J89klzr6Y3I%2FKCpw&X-Amz-Signature=d409ebb0ed67f90e1f2aa941a2a7ddda2e03367bd1d760f5be8602fec1deae89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGK7J7XN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxSYupOYthJTGAnbCiPCQaX3zrh7vxgr6vbnDiILNqiAiEAxkCBGptRDmlNvdRzZ2d%2Bb4qjZ%2FuKEjpRbjOJ%2FfVtGAcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHfWvhoFYXeCdf4cDyrcA1C3awVCnB%2FTdKlMyDlf8MMjpGq9nNHqAonVY%2FruL5lj%2BTQtYxmrlreh4982oglALafp5x2YYLNFjb7jRkf%2FJ9jMxZdVcq81J2rm%2Bi2QgYJ34ULG%2BqBpEfNRe3Do%2Fd25hjeMrN0j8gXAkB%2FOoDig4%2B8w0k2y5B%2F1%2FicPwp4ApvckzKZD8xJ%2FKtIJjJgp%2F3ZGhthwaRy%2Fhn3pwLyXVWyBqLobtyv8dMjr0kLY8hwHzjysZzXSrq8%2FuctT2dc1sqdzzAmnyBaQJPO6jxJLnjCM6TMuNGSSz80ntH1JaKq2g9UM7NY6IttwA%2BFiOnZ5Jqs1jN1GvcY5vyv7gwIXoaptl4KYM%2BOe4KvrKWNTx3%2BAjtq3xer3qcF13ErgpHCqfCQhU0ytw0s3TSoVx2e2VKnKMYGVllgMuszZ%2FIcZa67rqUC9cJG%2B5x8WWgMcdGLlww%2BFHlu%2F6ayKY12j05HtbvlhPXNNsiRWd1BQxXcQnHcwbekPlpxY%2FXZZcCsb9iXV9l1r8RrQvU%2BKj61BG59ODlyztBwM8Afzmbvh%2Fhu4cBs0hMjh9QMfx1hJuP3n6mKnaMCzM3uXnKBzYUYtmfLCC4pf9zyC5M8nxMR0vEvKzEULlBoKcJrqvXD5%2FWVOorMGMNzvtsQGOqUBnhL1JVx2ZyBC3lDfRZJxaAtd4kG9Z8httRQ%2BBMwghu3rcjmA3ryuT09ZCjIDiUj1uTT9mxPgn%2F8H2zmnnr5Ar3zmb8JeKOnQH4%2BPKzS2FBHZZ3gdoWSLNgaUYhhVF9NYy4SMszjlYiYzdfn3zCnO4id89VXNsCom134%2FZvk2BmW%2FkcGl5ZB8Q7jj%2FpHZ19P60gzQKaQ1RZQ9J89klzr6Y3I%2FKCpw&X-Amz-Signature=19034af94e4dc5a870991fa0cf50dd8da918c824b6e13501a56cd5280f1652c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGK7J7XN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxSYupOYthJTGAnbCiPCQaX3zrh7vxgr6vbnDiILNqiAiEAxkCBGptRDmlNvdRzZ2d%2Bb4qjZ%2FuKEjpRbjOJ%2FfVtGAcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHfWvhoFYXeCdf4cDyrcA1C3awVCnB%2FTdKlMyDlf8MMjpGq9nNHqAonVY%2FruL5lj%2BTQtYxmrlreh4982oglALafp5x2YYLNFjb7jRkf%2FJ9jMxZdVcq81J2rm%2Bi2QgYJ34ULG%2BqBpEfNRe3Do%2Fd25hjeMrN0j8gXAkB%2FOoDig4%2B8w0k2y5B%2F1%2FicPwp4ApvckzKZD8xJ%2FKtIJjJgp%2F3ZGhthwaRy%2Fhn3pwLyXVWyBqLobtyv8dMjr0kLY8hwHzjysZzXSrq8%2FuctT2dc1sqdzzAmnyBaQJPO6jxJLnjCM6TMuNGSSz80ntH1JaKq2g9UM7NY6IttwA%2BFiOnZ5Jqs1jN1GvcY5vyv7gwIXoaptl4KYM%2BOe4KvrKWNTx3%2BAjtq3xer3qcF13ErgpHCqfCQhU0ytw0s3TSoVx2e2VKnKMYGVllgMuszZ%2FIcZa67rqUC9cJG%2B5x8WWgMcdGLlww%2BFHlu%2F6ayKY12j05HtbvlhPXNNsiRWd1BQxXcQnHcwbekPlpxY%2FXZZcCsb9iXV9l1r8RrQvU%2BKj61BG59ODlyztBwM8Afzmbvh%2Fhu4cBs0hMjh9QMfx1hJuP3n6mKnaMCzM3uXnKBzYUYtmfLCC4pf9zyC5M8nxMR0vEvKzEULlBoKcJrqvXD5%2FWVOorMGMNzvtsQGOqUBnhL1JVx2ZyBC3lDfRZJxaAtd4kG9Z8httRQ%2BBMwghu3rcjmA3ryuT09ZCjIDiUj1uTT9mxPgn%2F8H2zmnnr5Ar3zmb8JeKOnQH4%2BPKzS2FBHZZ3gdoWSLNgaUYhhVF9NYy4SMszjlYiYzdfn3zCnO4id89VXNsCom134%2FZvk2BmW%2FkcGl5ZB8Q7jj%2FpHZ19P60gzQKaQ1RZQ9J89klzr6Y3I%2FKCpw&X-Amz-Signature=100a9b4f4603c0e9a50fba389ff7a76724d0028bf2159c51960ed62b584e3388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGK7J7XN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxSYupOYthJTGAnbCiPCQaX3zrh7vxgr6vbnDiILNqiAiEAxkCBGptRDmlNvdRzZ2d%2Bb4qjZ%2FuKEjpRbjOJ%2FfVtGAcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHfWvhoFYXeCdf4cDyrcA1C3awVCnB%2FTdKlMyDlf8MMjpGq9nNHqAonVY%2FruL5lj%2BTQtYxmrlreh4982oglALafp5x2YYLNFjb7jRkf%2FJ9jMxZdVcq81J2rm%2Bi2QgYJ34ULG%2BqBpEfNRe3Do%2Fd25hjeMrN0j8gXAkB%2FOoDig4%2B8w0k2y5B%2F1%2FicPwp4ApvckzKZD8xJ%2FKtIJjJgp%2F3ZGhthwaRy%2Fhn3pwLyXVWyBqLobtyv8dMjr0kLY8hwHzjysZzXSrq8%2FuctT2dc1sqdzzAmnyBaQJPO6jxJLnjCM6TMuNGSSz80ntH1JaKq2g9UM7NY6IttwA%2BFiOnZ5Jqs1jN1GvcY5vyv7gwIXoaptl4KYM%2BOe4KvrKWNTx3%2BAjtq3xer3qcF13ErgpHCqfCQhU0ytw0s3TSoVx2e2VKnKMYGVllgMuszZ%2FIcZa67rqUC9cJG%2B5x8WWgMcdGLlww%2BFHlu%2F6ayKY12j05HtbvlhPXNNsiRWd1BQxXcQnHcwbekPlpxY%2FXZZcCsb9iXV9l1r8RrQvU%2BKj61BG59ODlyztBwM8Afzmbvh%2Fhu4cBs0hMjh9QMfx1hJuP3n6mKnaMCzM3uXnKBzYUYtmfLCC4pf9zyC5M8nxMR0vEvKzEULlBoKcJrqvXD5%2FWVOorMGMNzvtsQGOqUBnhL1JVx2ZyBC3lDfRZJxaAtd4kG9Z8httRQ%2BBMwghu3rcjmA3ryuT09ZCjIDiUj1uTT9mxPgn%2F8H2zmnnr5Ar3zmb8JeKOnQH4%2BPKzS2FBHZZ3gdoWSLNgaUYhhVF9NYy4SMszjlYiYzdfn3zCnO4id89VXNsCom134%2FZvk2BmW%2FkcGl5ZB8Q7jj%2FpHZ19P60gzQKaQ1RZQ9J89klzr6Y3I%2FKCpw&X-Amz-Signature=022763c835d9e4b3b3484e2e1e0bbd271b1349431bc08cf65532b1447d5a4d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGK7J7XN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxSYupOYthJTGAnbCiPCQaX3zrh7vxgr6vbnDiILNqiAiEAxkCBGptRDmlNvdRzZ2d%2Bb4qjZ%2FuKEjpRbjOJ%2FfVtGAcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHfWvhoFYXeCdf4cDyrcA1C3awVCnB%2FTdKlMyDlf8MMjpGq9nNHqAonVY%2FruL5lj%2BTQtYxmrlreh4982oglALafp5x2YYLNFjb7jRkf%2FJ9jMxZdVcq81J2rm%2Bi2QgYJ34ULG%2BqBpEfNRe3Do%2Fd25hjeMrN0j8gXAkB%2FOoDig4%2B8w0k2y5B%2F1%2FicPwp4ApvckzKZD8xJ%2FKtIJjJgp%2F3ZGhthwaRy%2Fhn3pwLyXVWyBqLobtyv8dMjr0kLY8hwHzjysZzXSrq8%2FuctT2dc1sqdzzAmnyBaQJPO6jxJLnjCM6TMuNGSSz80ntH1JaKq2g9UM7NY6IttwA%2BFiOnZ5Jqs1jN1GvcY5vyv7gwIXoaptl4KYM%2BOe4KvrKWNTx3%2BAjtq3xer3qcF13ErgpHCqfCQhU0ytw0s3TSoVx2e2VKnKMYGVllgMuszZ%2FIcZa67rqUC9cJG%2B5x8WWgMcdGLlww%2BFHlu%2F6ayKY12j05HtbvlhPXNNsiRWd1BQxXcQnHcwbekPlpxY%2FXZZcCsb9iXV9l1r8RrQvU%2BKj61BG59ODlyztBwM8Afzmbvh%2Fhu4cBs0hMjh9QMfx1hJuP3n6mKnaMCzM3uXnKBzYUYtmfLCC4pf9zyC5M8nxMR0vEvKzEULlBoKcJrqvXD5%2FWVOorMGMNzvtsQGOqUBnhL1JVx2ZyBC3lDfRZJxaAtd4kG9Z8httRQ%2BBMwghu3rcjmA3ryuT09ZCjIDiUj1uTT9mxPgn%2F8H2zmnnr5Ar3zmb8JeKOnQH4%2BPKzS2FBHZZ3gdoWSLNgaUYhhVF9NYy4SMszjlYiYzdfn3zCnO4id89VXNsCom134%2FZvk2BmW%2FkcGl5ZB8Q7jj%2FpHZ19P60gzQKaQ1RZQ9J89klzr6Y3I%2FKCpw&X-Amz-Signature=67993fe9fc4d08cb487b274e814b9be1c2997e542ffca984627729752af16e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGK7J7XN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxSYupOYthJTGAnbCiPCQaX3zrh7vxgr6vbnDiILNqiAiEAxkCBGptRDmlNvdRzZ2d%2Bb4qjZ%2FuKEjpRbjOJ%2FfVtGAcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHfWvhoFYXeCdf4cDyrcA1C3awVCnB%2FTdKlMyDlf8MMjpGq9nNHqAonVY%2FruL5lj%2BTQtYxmrlreh4982oglALafp5x2YYLNFjb7jRkf%2FJ9jMxZdVcq81J2rm%2Bi2QgYJ34ULG%2BqBpEfNRe3Do%2Fd25hjeMrN0j8gXAkB%2FOoDig4%2B8w0k2y5B%2F1%2FicPwp4ApvckzKZD8xJ%2FKtIJjJgp%2F3ZGhthwaRy%2Fhn3pwLyXVWyBqLobtyv8dMjr0kLY8hwHzjysZzXSrq8%2FuctT2dc1sqdzzAmnyBaQJPO6jxJLnjCM6TMuNGSSz80ntH1JaKq2g9UM7NY6IttwA%2BFiOnZ5Jqs1jN1GvcY5vyv7gwIXoaptl4KYM%2BOe4KvrKWNTx3%2BAjtq3xer3qcF13ErgpHCqfCQhU0ytw0s3TSoVx2e2VKnKMYGVllgMuszZ%2FIcZa67rqUC9cJG%2B5x8WWgMcdGLlww%2BFHlu%2F6ayKY12j05HtbvlhPXNNsiRWd1BQxXcQnHcwbekPlpxY%2FXZZcCsb9iXV9l1r8RrQvU%2BKj61BG59ODlyztBwM8Afzmbvh%2Fhu4cBs0hMjh9QMfx1hJuP3n6mKnaMCzM3uXnKBzYUYtmfLCC4pf9zyC5M8nxMR0vEvKzEULlBoKcJrqvXD5%2FWVOorMGMNzvtsQGOqUBnhL1JVx2ZyBC3lDfRZJxaAtd4kG9Z8httRQ%2BBMwghu3rcjmA3ryuT09ZCjIDiUj1uTT9mxPgn%2F8H2zmnnr5Ar3zmb8JeKOnQH4%2BPKzS2FBHZZ3gdoWSLNgaUYhhVF9NYy4SMszjlYiYzdfn3zCnO4id89VXNsCom134%2FZvk2BmW%2FkcGl5ZB8Q7jj%2FpHZ19P60gzQKaQ1RZQ9J89klzr6Y3I%2FKCpw&X-Amz-Signature=f74338cab4bd63420522c6a9423b8b43ea91562e420d575a206573a812f4f2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
