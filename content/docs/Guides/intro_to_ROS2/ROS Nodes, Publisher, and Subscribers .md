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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMPOFH3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKIjKpY6%2BLEhbnOeUV6bLkGZjQXrUGCbkn%2BQEXaN4r6AiBQsRYIA5zoDDb7T0tWSjULiKl3TiFpYOBlGUFa%2FGXX6CqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhudWtnZU7xr6MnyaKtwD1DK2viZCiHbDWVMUNhKDKu7%2F26mF2JDIEfJaD18oI5m0vvLa2RO4Y%2BjAByn2tsEgiIvWMcpeT9exQxEEgP2MHCR4xlL141Dm9I%2F9mUt8JBo1xCvEC4oSkkS%2BFFqP5BzcqIakY%2Fj7mmaV8eZpi%2FCKQ40Gq6lps4jeydVAvXSHPfn9ChkjA8NHzx8lG4BjQCNP7LmtanrOQcWw95DAgsmjof0fzLah8KH0scmm7qpbn4MvN7Yq4kvW2bWLxJjeBy3%2F6fyFLn5XPuPSEq6LiIT8V3%2FrnJBONaZuO50Jpuvns5dOyP%2FG337JdRWiBPuymzqnJGK81EzZprIRwny82M3P%2F81ledtzpcDCUvL1zE6WhDi1tdogpQB4J38%2FoGB3l07GPiFveiH0LFJmfHLZvlYbtVMhQrANaY2t1pf4bHi9TboePgUzYVzdIKvVMoy6d4cjCDQW11a%2F%2FmsbkzCiLdRjvK2vI71ofNSOx%2FgUA%2BHHKS0T7VpHMX%2B5VdgtSJMoWey0yYNd2xI7iXXr%2FbDVmeot5pT6r1SKx%2BFQDvuNZggPq7KbsBzcbszPY%2Bai4LmAwjlKoYQS9%2BnGzjheOOdIHQYdjH1CjFNCVb7psx63GTjg9kDF6pMYExgTeMZoxXYwh779vAY6pgEFQJgVGnqa%2FOjso8Mo9eyMtKeWjm4%2B4TCkcbBFU1sHMcW2LgvwDI8ck5enAYUyKDWZH0wT1KDpENeoaU8TcoWz1jL4F%2FF7qaJepV7xHE%2B%2FHckraL%2FxDFhHfUqkoakR0kzrYXj3ULlUWujKzUlfqEvSuRMJBAfTinccUv4Jsjh8q3l1hRNs6YwsoQ5lGeH0k0qEz58qBDhiZ3D1yu743u5RBT5A7nO7&X-Amz-Signature=78c538331b6350e8172de99d3d858194d5ad510467bb222ab74fffa4c99e5314&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMPOFH3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKIjKpY6%2BLEhbnOeUV6bLkGZjQXrUGCbkn%2BQEXaN4r6AiBQsRYIA5zoDDb7T0tWSjULiKl3TiFpYOBlGUFa%2FGXX6CqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhudWtnZU7xr6MnyaKtwD1DK2viZCiHbDWVMUNhKDKu7%2F26mF2JDIEfJaD18oI5m0vvLa2RO4Y%2BjAByn2tsEgiIvWMcpeT9exQxEEgP2MHCR4xlL141Dm9I%2F9mUt8JBo1xCvEC4oSkkS%2BFFqP5BzcqIakY%2Fj7mmaV8eZpi%2FCKQ40Gq6lps4jeydVAvXSHPfn9ChkjA8NHzx8lG4BjQCNP7LmtanrOQcWw95DAgsmjof0fzLah8KH0scmm7qpbn4MvN7Yq4kvW2bWLxJjeBy3%2F6fyFLn5XPuPSEq6LiIT8V3%2FrnJBONaZuO50Jpuvns5dOyP%2FG337JdRWiBPuymzqnJGK81EzZprIRwny82M3P%2F81ledtzpcDCUvL1zE6WhDi1tdogpQB4J38%2FoGB3l07GPiFveiH0LFJmfHLZvlYbtVMhQrANaY2t1pf4bHi9TboePgUzYVzdIKvVMoy6d4cjCDQW11a%2F%2FmsbkzCiLdRjvK2vI71ofNSOx%2FgUA%2BHHKS0T7VpHMX%2B5VdgtSJMoWey0yYNd2xI7iXXr%2FbDVmeot5pT6r1SKx%2BFQDvuNZggPq7KbsBzcbszPY%2Bai4LmAwjlKoYQS9%2BnGzjheOOdIHQYdjH1CjFNCVb7psx63GTjg9kDF6pMYExgTeMZoxXYwh779vAY6pgEFQJgVGnqa%2FOjso8Mo9eyMtKeWjm4%2B4TCkcbBFU1sHMcW2LgvwDI8ck5enAYUyKDWZH0wT1KDpENeoaU8TcoWz1jL4F%2FF7qaJepV7xHE%2B%2FHckraL%2FxDFhHfUqkoakR0kzrYXj3ULlUWujKzUlfqEvSuRMJBAfTinccUv4Jsjh8q3l1hRNs6YwsoQ5lGeH0k0qEz58qBDhiZ3D1yu743u5RBT5A7nO7&X-Amz-Signature=9230560ac532af96ed2528e5489dde8eb4aa0d5cdaf85989b951ae8b91ed9c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMPOFH3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKIjKpY6%2BLEhbnOeUV6bLkGZjQXrUGCbkn%2BQEXaN4r6AiBQsRYIA5zoDDb7T0tWSjULiKl3TiFpYOBlGUFa%2FGXX6CqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhudWtnZU7xr6MnyaKtwD1DK2viZCiHbDWVMUNhKDKu7%2F26mF2JDIEfJaD18oI5m0vvLa2RO4Y%2BjAByn2tsEgiIvWMcpeT9exQxEEgP2MHCR4xlL141Dm9I%2F9mUt8JBo1xCvEC4oSkkS%2BFFqP5BzcqIakY%2Fj7mmaV8eZpi%2FCKQ40Gq6lps4jeydVAvXSHPfn9ChkjA8NHzx8lG4BjQCNP7LmtanrOQcWw95DAgsmjof0fzLah8KH0scmm7qpbn4MvN7Yq4kvW2bWLxJjeBy3%2F6fyFLn5XPuPSEq6LiIT8V3%2FrnJBONaZuO50Jpuvns5dOyP%2FG337JdRWiBPuymzqnJGK81EzZprIRwny82M3P%2F81ledtzpcDCUvL1zE6WhDi1tdogpQB4J38%2FoGB3l07GPiFveiH0LFJmfHLZvlYbtVMhQrANaY2t1pf4bHi9TboePgUzYVzdIKvVMoy6d4cjCDQW11a%2F%2FmsbkzCiLdRjvK2vI71ofNSOx%2FgUA%2BHHKS0T7VpHMX%2B5VdgtSJMoWey0yYNd2xI7iXXr%2FbDVmeot5pT6r1SKx%2BFQDvuNZggPq7KbsBzcbszPY%2Bai4LmAwjlKoYQS9%2BnGzjheOOdIHQYdjH1CjFNCVb7psx63GTjg9kDF6pMYExgTeMZoxXYwh779vAY6pgEFQJgVGnqa%2FOjso8Mo9eyMtKeWjm4%2B4TCkcbBFU1sHMcW2LgvwDI8ck5enAYUyKDWZH0wT1KDpENeoaU8TcoWz1jL4F%2FF7qaJepV7xHE%2B%2FHckraL%2FxDFhHfUqkoakR0kzrYXj3ULlUWujKzUlfqEvSuRMJBAfTinccUv4Jsjh8q3l1hRNs6YwsoQ5lGeH0k0qEz58qBDhiZ3D1yu743u5RBT5A7nO7&X-Amz-Signature=07ff134b27a070e3193e74ad8c4b870c451aab88f7f1d258e0686b1c35560798&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMPOFH3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKIjKpY6%2BLEhbnOeUV6bLkGZjQXrUGCbkn%2BQEXaN4r6AiBQsRYIA5zoDDb7T0tWSjULiKl3TiFpYOBlGUFa%2FGXX6CqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhudWtnZU7xr6MnyaKtwD1DK2viZCiHbDWVMUNhKDKu7%2F26mF2JDIEfJaD18oI5m0vvLa2RO4Y%2BjAByn2tsEgiIvWMcpeT9exQxEEgP2MHCR4xlL141Dm9I%2F9mUt8JBo1xCvEC4oSkkS%2BFFqP5BzcqIakY%2Fj7mmaV8eZpi%2FCKQ40Gq6lps4jeydVAvXSHPfn9ChkjA8NHzx8lG4BjQCNP7LmtanrOQcWw95DAgsmjof0fzLah8KH0scmm7qpbn4MvN7Yq4kvW2bWLxJjeBy3%2F6fyFLn5XPuPSEq6LiIT8V3%2FrnJBONaZuO50Jpuvns5dOyP%2FG337JdRWiBPuymzqnJGK81EzZprIRwny82M3P%2F81ledtzpcDCUvL1zE6WhDi1tdogpQB4J38%2FoGB3l07GPiFveiH0LFJmfHLZvlYbtVMhQrANaY2t1pf4bHi9TboePgUzYVzdIKvVMoy6d4cjCDQW11a%2F%2FmsbkzCiLdRjvK2vI71ofNSOx%2FgUA%2BHHKS0T7VpHMX%2B5VdgtSJMoWey0yYNd2xI7iXXr%2FbDVmeot5pT6r1SKx%2BFQDvuNZggPq7KbsBzcbszPY%2Bai4LmAwjlKoYQS9%2BnGzjheOOdIHQYdjH1CjFNCVb7psx63GTjg9kDF6pMYExgTeMZoxXYwh779vAY6pgEFQJgVGnqa%2FOjso8Mo9eyMtKeWjm4%2B4TCkcbBFU1sHMcW2LgvwDI8ck5enAYUyKDWZH0wT1KDpENeoaU8TcoWz1jL4F%2FF7qaJepV7xHE%2B%2FHckraL%2FxDFhHfUqkoakR0kzrYXj3ULlUWujKzUlfqEvSuRMJBAfTinccUv4Jsjh8q3l1hRNs6YwsoQ5lGeH0k0qEz58qBDhiZ3D1yu743u5RBT5A7nO7&X-Amz-Signature=a9b8626d0f0e86bfad5759723a6266fc93bc64d6f5322517a196db981d6f7353&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMPOFH3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKIjKpY6%2BLEhbnOeUV6bLkGZjQXrUGCbkn%2BQEXaN4r6AiBQsRYIA5zoDDb7T0tWSjULiKl3TiFpYOBlGUFa%2FGXX6CqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhudWtnZU7xr6MnyaKtwD1DK2viZCiHbDWVMUNhKDKu7%2F26mF2JDIEfJaD18oI5m0vvLa2RO4Y%2BjAByn2tsEgiIvWMcpeT9exQxEEgP2MHCR4xlL141Dm9I%2F9mUt8JBo1xCvEC4oSkkS%2BFFqP5BzcqIakY%2Fj7mmaV8eZpi%2FCKQ40Gq6lps4jeydVAvXSHPfn9ChkjA8NHzx8lG4BjQCNP7LmtanrOQcWw95DAgsmjof0fzLah8KH0scmm7qpbn4MvN7Yq4kvW2bWLxJjeBy3%2F6fyFLn5XPuPSEq6LiIT8V3%2FrnJBONaZuO50Jpuvns5dOyP%2FG337JdRWiBPuymzqnJGK81EzZprIRwny82M3P%2F81ledtzpcDCUvL1zE6WhDi1tdogpQB4J38%2FoGB3l07GPiFveiH0LFJmfHLZvlYbtVMhQrANaY2t1pf4bHi9TboePgUzYVzdIKvVMoy6d4cjCDQW11a%2F%2FmsbkzCiLdRjvK2vI71ofNSOx%2FgUA%2BHHKS0T7VpHMX%2B5VdgtSJMoWey0yYNd2xI7iXXr%2FbDVmeot5pT6r1SKx%2BFQDvuNZggPq7KbsBzcbszPY%2Bai4LmAwjlKoYQS9%2BnGzjheOOdIHQYdjH1CjFNCVb7psx63GTjg9kDF6pMYExgTeMZoxXYwh779vAY6pgEFQJgVGnqa%2FOjso8Mo9eyMtKeWjm4%2B4TCkcbBFU1sHMcW2LgvwDI8ck5enAYUyKDWZH0wT1KDpENeoaU8TcoWz1jL4F%2FF7qaJepV7xHE%2B%2FHckraL%2FxDFhHfUqkoakR0kzrYXj3ULlUWujKzUlfqEvSuRMJBAfTinccUv4Jsjh8q3l1hRNs6YwsoQ5lGeH0k0qEz58qBDhiZ3D1yu743u5RBT5A7nO7&X-Amz-Signature=bd69bbd199ff13f4dceca9a007e42143fe255615bd6a75d98cddbbe20ea7d97d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMPOFH3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKIjKpY6%2BLEhbnOeUV6bLkGZjQXrUGCbkn%2BQEXaN4r6AiBQsRYIA5zoDDb7T0tWSjULiKl3TiFpYOBlGUFa%2FGXX6CqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhudWtnZU7xr6MnyaKtwD1DK2viZCiHbDWVMUNhKDKu7%2F26mF2JDIEfJaD18oI5m0vvLa2RO4Y%2BjAByn2tsEgiIvWMcpeT9exQxEEgP2MHCR4xlL141Dm9I%2F9mUt8JBo1xCvEC4oSkkS%2BFFqP5BzcqIakY%2Fj7mmaV8eZpi%2FCKQ40Gq6lps4jeydVAvXSHPfn9ChkjA8NHzx8lG4BjQCNP7LmtanrOQcWw95DAgsmjof0fzLah8KH0scmm7qpbn4MvN7Yq4kvW2bWLxJjeBy3%2F6fyFLn5XPuPSEq6LiIT8V3%2FrnJBONaZuO50Jpuvns5dOyP%2FG337JdRWiBPuymzqnJGK81EzZprIRwny82M3P%2F81ledtzpcDCUvL1zE6WhDi1tdogpQB4J38%2FoGB3l07GPiFveiH0LFJmfHLZvlYbtVMhQrANaY2t1pf4bHi9TboePgUzYVzdIKvVMoy6d4cjCDQW11a%2F%2FmsbkzCiLdRjvK2vI71ofNSOx%2FgUA%2BHHKS0T7VpHMX%2B5VdgtSJMoWey0yYNd2xI7iXXr%2FbDVmeot5pT6r1SKx%2BFQDvuNZggPq7KbsBzcbszPY%2Bai4LmAwjlKoYQS9%2BnGzjheOOdIHQYdjH1CjFNCVb7psx63GTjg9kDF6pMYExgTeMZoxXYwh779vAY6pgEFQJgVGnqa%2FOjso8Mo9eyMtKeWjm4%2B4TCkcbBFU1sHMcW2LgvwDI8ck5enAYUyKDWZH0wT1KDpENeoaU8TcoWz1jL4F%2FF7qaJepV7xHE%2B%2FHckraL%2FxDFhHfUqkoakR0kzrYXj3ULlUWujKzUlfqEvSuRMJBAfTinccUv4Jsjh8q3l1hRNs6YwsoQ5lGeH0k0qEz58qBDhiZ3D1yu743u5RBT5A7nO7&X-Amz-Signature=b5bc8f244f587c6a6a9ffe3c9af85a01b4618442937db746ab0588fc7a04e728&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMPOFH3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKIjKpY6%2BLEhbnOeUV6bLkGZjQXrUGCbkn%2BQEXaN4r6AiBQsRYIA5zoDDb7T0tWSjULiKl3TiFpYOBlGUFa%2FGXX6CqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhudWtnZU7xr6MnyaKtwD1DK2viZCiHbDWVMUNhKDKu7%2F26mF2JDIEfJaD18oI5m0vvLa2RO4Y%2BjAByn2tsEgiIvWMcpeT9exQxEEgP2MHCR4xlL141Dm9I%2F9mUt8JBo1xCvEC4oSkkS%2BFFqP5BzcqIakY%2Fj7mmaV8eZpi%2FCKQ40Gq6lps4jeydVAvXSHPfn9ChkjA8NHzx8lG4BjQCNP7LmtanrOQcWw95DAgsmjof0fzLah8KH0scmm7qpbn4MvN7Yq4kvW2bWLxJjeBy3%2F6fyFLn5XPuPSEq6LiIT8V3%2FrnJBONaZuO50Jpuvns5dOyP%2FG337JdRWiBPuymzqnJGK81EzZprIRwny82M3P%2F81ledtzpcDCUvL1zE6WhDi1tdogpQB4J38%2FoGB3l07GPiFveiH0LFJmfHLZvlYbtVMhQrANaY2t1pf4bHi9TboePgUzYVzdIKvVMoy6d4cjCDQW11a%2F%2FmsbkzCiLdRjvK2vI71ofNSOx%2FgUA%2BHHKS0T7VpHMX%2B5VdgtSJMoWey0yYNd2xI7iXXr%2FbDVmeot5pT6r1SKx%2BFQDvuNZggPq7KbsBzcbszPY%2Bai4LmAwjlKoYQS9%2BnGzjheOOdIHQYdjH1CjFNCVb7psx63GTjg9kDF6pMYExgTeMZoxXYwh779vAY6pgEFQJgVGnqa%2FOjso8Mo9eyMtKeWjm4%2B4TCkcbBFU1sHMcW2LgvwDI8ck5enAYUyKDWZH0wT1KDpENeoaU8TcoWz1jL4F%2FF7qaJepV7xHE%2B%2FHckraL%2FxDFhHfUqkoakR0kzrYXj3ULlUWujKzUlfqEvSuRMJBAfTinccUv4Jsjh8q3l1hRNs6YwsoQ5lGeH0k0qEz58qBDhiZ3D1yu743u5RBT5A7nO7&X-Amz-Signature=4ef40fc72e18ca02706a4ad8d4d62bd5bb7136d48069a40cc19e2249d236ac3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMPOFH3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKIjKpY6%2BLEhbnOeUV6bLkGZjQXrUGCbkn%2BQEXaN4r6AiBQsRYIA5zoDDb7T0tWSjULiKl3TiFpYOBlGUFa%2FGXX6CqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhudWtnZU7xr6MnyaKtwD1DK2viZCiHbDWVMUNhKDKu7%2F26mF2JDIEfJaD18oI5m0vvLa2RO4Y%2BjAByn2tsEgiIvWMcpeT9exQxEEgP2MHCR4xlL141Dm9I%2F9mUt8JBo1xCvEC4oSkkS%2BFFqP5BzcqIakY%2Fj7mmaV8eZpi%2FCKQ40Gq6lps4jeydVAvXSHPfn9ChkjA8NHzx8lG4BjQCNP7LmtanrOQcWw95DAgsmjof0fzLah8KH0scmm7qpbn4MvN7Yq4kvW2bWLxJjeBy3%2F6fyFLn5XPuPSEq6LiIT8V3%2FrnJBONaZuO50Jpuvns5dOyP%2FG337JdRWiBPuymzqnJGK81EzZprIRwny82M3P%2F81ledtzpcDCUvL1zE6WhDi1tdogpQB4J38%2FoGB3l07GPiFveiH0LFJmfHLZvlYbtVMhQrANaY2t1pf4bHi9TboePgUzYVzdIKvVMoy6d4cjCDQW11a%2F%2FmsbkzCiLdRjvK2vI71ofNSOx%2FgUA%2BHHKS0T7VpHMX%2B5VdgtSJMoWey0yYNd2xI7iXXr%2FbDVmeot5pT6r1SKx%2BFQDvuNZggPq7KbsBzcbszPY%2Bai4LmAwjlKoYQS9%2BnGzjheOOdIHQYdjH1CjFNCVb7psx63GTjg9kDF6pMYExgTeMZoxXYwh779vAY6pgEFQJgVGnqa%2FOjso8Mo9eyMtKeWjm4%2B4TCkcbBFU1sHMcW2LgvwDI8ck5enAYUyKDWZH0wT1KDpENeoaU8TcoWz1jL4F%2FF7qaJepV7xHE%2B%2FHckraL%2FxDFhHfUqkoakR0kzrYXj3ULlUWujKzUlfqEvSuRMJBAfTinccUv4Jsjh8q3l1hRNs6YwsoQ5lGeH0k0qEz58qBDhiZ3D1yu743u5RBT5A7nO7&X-Amz-Signature=5e34723bf0e9150ca572bd0e8b63e66d9a17fd355e523b275e1c71827f0e8db1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
