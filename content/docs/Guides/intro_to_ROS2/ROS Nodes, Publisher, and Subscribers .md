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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLKYG5ZV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu5uOlCQ2R3%2FEz%2FDXMWoTyUiJ9Qpz%2BuKMJ2MCLz823cAiEAutKTHWo1uPKowYkdQYY6fPlnCARe%2Boy2Krw4yUwiUxwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0qQxJgvOoOnuV7zSrcAwBLx5eLUTQRM79iC2aaFKTYEI6WDmqg6UNiqXIdcK5YPDNaxdW7R2QvSYv4mbhfupnOJpbzd6MXT%2Fpwr6isEaUvHDzjxOGPlR85L9gOnceLgqz7UuPd9gaVicq9G2Y7iRaGprQSojjCzwocb3nQqx8GELX%2FcXCV%2BHTf%2BK5nclVdVQAd7vHjopHyCmEESqW%2BGttmiW2T4NswrxCMm5ZdzopDFYvPinid3waoLwJfyLQNXgm0lKF%2BBcXHW1fhzgxH5emNXuDaNhPdZQNpA9hqQuUgEoV33xQ0hJVg6NFpp66a0O%2B0oyuYXwQBLl0vL6p1bNlRhWs%2FFllFz2bx6fh3heWa8VxAgRWKzDTP8WmVsxMmwz7rL4x6CaEhOmVpkmplNfQ6Pt2daM9akSMaWLyPejAZv7W5uO34Kjb2aY0ndX9aUvZIYKComrCQzpwBjHX1bYTUUDGqzE9g66dWQiihXht%2BL%2BwAvCD7G9fWy2olhr%2FouYVbiHZvgRZ533uXBY31fgToIl%2B%2BDl4eLhHM8Tk%2F6z01iEcGJKoodzFfnqdsQkex6KyYYsi8D4IQN9zocRV5OLHlY8R1BgUCXNsYvF35aSY%2FZ9kv6nth3sypuPR9hFkhyHtPPsfkrZyK8CuGMMiEisMGOqUBtCTi6tl%2Fa4TDby6TfIUVX%2B%2Fi7QZmnZCHEaPa26cjkaydj5H6n99Zy6nJzTLOmkAVMMwJhRNLLXTdc2UmYNR0R%2BhfeU8crYNLXMBsflQmtU%2BA3iwjrlQA7nylzdJyP0ID4ZNLQXFYrLAizt4b%2BSswiYKBmse5SHvU24H6yLh%2B9q7%2BBLZhj%2FNIIJb8IOUlcSLq2iAAebg6ZCZc9y5yKhdc3qgrP64h&X-Amz-Signature=0311609c4a280ad98424e5773f2676aac629944711d75c79c9bd3723f0c53457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLKYG5ZV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu5uOlCQ2R3%2FEz%2FDXMWoTyUiJ9Qpz%2BuKMJ2MCLz823cAiEAutKTHWo1uPKowYkdQYY6fPlnCARe%2Boy2Krw4yUwiUxwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0qQxJgvOoOnuV7zSrcAwBLx5eLUTQRM79iC2aaFKTYEI6WDmqg6UNiqXIdcK5YPDNaxdW7R2QvSYv4mbhfupnOJpbzd6MXT%2Fpwr6isEaUvHDzjxOGPlR85L9gOnceLgqz7UuPd9gaVicq9G2Y7iRaGprQSojjCzwocb3nQqx8GELX%2FcXCV%2BHTf%2BK5nclVdVQAd7vHjopHyCmEESqW%2BGttmiW2T4NswrxCMm5ZdzopDFYvPinid3waoLwJfyLQNXgm0lKF%2BBcXHW1fhzgxH5emNXuDaNhPdZQNpA9hqQuUgEoV33xQ0hJVg6NFpp66a0O%2B0oyuYXwQBLl0vL6p1bNlRhWs%2FFllFz2bx6fh3heWa8VxAgRWKzDTP8WmVsxMmwz7rL4x6CaEhOmVpkmplNfQ6Pt2daM9akSMaWLyPejAZv7W5uO34Kjb2aY0ndX9aUvZIYKComrCQzpwBjHX1bYTUUDGqzE9g66dWQiihXht%2BL%2BwAvCD7G9fWy2olhr%2FouYVbiHZvgRZ533uXBY31fgToIl%2B%2BDl4eLhHM8Tk%2F6z01iEcGJKoodzFfnqdsQkex6KyYYsi8D4IQN9zocRV5OLHlY8R1BgUCXNsYvF35aSY%2FZ9kv6nth3sypuPR9hFkhyHtPPsfkrZyK8CuGMMiEisMGOqUBtCTi6tl%2Fa4TDby6TfIUVX%2B%2Fi7QZmnZCHEaPa26cjkaydj5H6n99Zy6nJzTLOmkAVMMwJhRNLLXTdc2UmYNR0R%2BhfeU8crYNLXMBsflQmtU%2BA3iwjrlQA7nylzdJyP0ID4ZNLQXFYrLAizt4b%2BSswiYKBmse5SHvU24H6yLh%2B9q7%2BBLZhj%2FNIIJb8IOUlcSLq2iAAebg6ZCZc9y5yKhdc3qgrP64h&X-Amz-Signature=e0e2e1a73d86886338a51ae8ee4fae49a3dd0163a7027b5664e08fdeb59f1ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLKYG5ZV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu5uOlCQ2R3%2FEz%2FDXMWoTyUiJ9Qpz%2BuKMJ2MCLz823cAiEAutKTHWo1uPKowYkdQYY6fPlnCARe%2Boy2Krw4yUwiUxwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0qQxJgvOoOnuV7zSrcAwBLx5eLUTQRM79iC2aaFKTYEI6WDmqg6UNiqXIdcK5YPDNaxdW7R2QvSYv4mbhfupnOJpbzd6MXT%2Fpwr6isEaUvHDzjxOGPlR85L9gOnceLgqz7UuPd9gaVicq9G2Y7iRaGprQSojjCzwocb3nQqx8GELX%2FcXCV%2BHTf%2BK5nclVdVQAd7vHjopHyCmEESqW%2BGttmiW2T4NswrxCMm5ZdzopDFYvPinid3waoLwJfyLQNXgm0lKF%2BBcXHW1fhzgxH5emNXuDaNhPdZQNpA9hqQuUgEoV33xQ0hJVg6NFpp66a0O%2B0oyuYXwQBLl0vL6p1bNlRhWs%2FFllFz2bx6fh3heWa8VxAgRWKzDTP8WmVsxMmwz7rL4x6CaEhOmVpkmplNfQ6Pt2daM9akSMaWLyPejAZv7W5uO34Kjb2aY0ndX9aUvZIYKComrCQzpwBjHX1bYTUUDGqzE9g66dWQiihXht%2BL%2BwAvCD7G9fWy2olhr%2FouYVbiHZvgRZ533uXBY31fgToIl%2B%2BDl4eLhHM8Tk%2F6z01iEcGJKoodzFfnqdsQkex6KyYYsi8D4IQN9zocRV5OLHlY8R1BgUCXNsYvF35aSY%2FZ9kv6nth3sypuPR9hFkhyHtPPsfkrZyK8CuGMMiEisMGOqUBtCTi6tl%2Fa4TDby6TfIUVX%2B%2Fi7QZmnZCHEaPa26cjkaydj5H6n99Zy6nJzTLOmkAVMMwJhRNLLXTdc2UmYNR0R%2BhfeU8crYNLXMBsflQmtU%2BA3iwjrlQA7nylzdJyP0ID4ZNLQXFYrLAizt4b%2BSswiYKBmse5SHvU24H6yLh%2B9q7%2BBLZhj%2FNIIJb8IOUlcSLq2iAAebg6ZCZc9y5yKhdc3qgrP64h&X-Amz-Signature=e0bfe8ae709648bb2f9872da52999bd2c1bf6bc5477e34b8af8bca270e72d048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLKYG5ZV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu5uOlCQ2R3%2FEz%2FDXMWoTyUiJ9Qpz%2BuKMJ2MCLz823cAiEAutKTHWo1uPKowYkdQYY6fPlnCARe%2Boy2Krw4yUwiUxwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0qQxJgvOoOnuV7zSrcAwBLx5eLUTQRM79iC2aaFKTYEI6WDmqg6UNiqXIdcK5YPDNaxdW7R2QvSYv4mbhfupnOJpbzd6MXT%2Fpwr6isEaUvHDzjxOGPlR85L9gOnceLgqz7UuPd9gaVicq9G2Y7iRaGprQSojjCzwocb3nQqx8GELX%2FcXCV%2BHTf%2BK5nclVdVQAd7vHjopHyCmEESqW%2BGttmiW2T4NswrxCMm5ZdzopDFYvPinid3waoLwJfyLQNXgm0lKF%2BBcXHW1fhzgxH5emNXuDaNhPdZQNpA9hqQuUgEoV33xQ0hJVg6NFpp66a0O%2B0oyuYXwQBLl0vL6p1bNlRhWs%2FFllFz2bx6fh3heWa8VxAgRWKzDTP8WmVsxMmwz7rL4x6CaEhOmVpkmplNfQ6Pt2daM9akSMaWLyPejAZv7W5uO34Kjb2aY0ndX9aUvZIYKComrCQzpwBjHX1bYTUUDGqzE9g66dWQiihXht%2BL%2BwAvCD7G9fWy2olhr%2FouYVbiHZvgRZ533uXBY31fgToIl%2B%2BDl4eLhHM8Tk%2F6z01iEcGJKoodzFfnqdsQkex6KyYYsi8D4IQN9zocRV5OLHlY8R1BgUCXNsYvF35aSY%2FZ9kv6nth3sypuPR9hFkhyHtPPsfkrZyK8CuGMMiEisMGOqUBtCTi6tl%2Fa4TDby6TfIUVX%2B%2Fi7QZmnZCHEaPa26cjkaydj5H6n99Zy6nJzTLOmkAVMMwJhRNLLXTdc2UmYNR0R%2BhfeU8crYNLXMBsflQmtU%2BA3iwjrlQA7nylzdJyP0ID4ZNLQXFYrLAizt4b%2BSswiYKBmse5SHvU24H6yLh%2B9q7%2BBLZhj%2FNIIJb8IOUlcSLq2iAAebg6ZCZc9y5yKhdc3qgrP64h&X-Amz-Signature=384a9c03b2e645be6b19069a9064e9c9ccdbb7795c4312e4f08f555ff6215e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLKYG5ZV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu5uOlCQ2R3%2FEz%2FDXMWoTyUiJ9Qpz%2BuKMJ2MCLz823cAiEAutKTHWo1uPKowYkdQYY6fPlnCARe%2Boy2Krw4yUwiUxwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0qQxJgvOoOnuV7zSrcAwBLx5eLUTQRM79iC2aaFKTYEI6WDmqg6UNiqXIdcK5YPDNaxdW7R2QvSYv4mbhfupnOJpbzd6MXT%2Fpwr6isEaUvHDzjxOGPlR85L9gOnceLgqz7UuPd9gaVicq9G2Y7iRaGprQSojjCzwocb3nQqx8GELX%2FcXCV%2BHTf%2BK5nclVdVQAd7vHjopHyCmEESqW%2BGttmiW2T4NswrxCMm5ZdzopDFYvPinid3waoLwJfyLQNXgm0lKF%2BBcXHW1fhzgxH5emNXuDaNhPdZQNpA9hqQuUgEoV33xQ0hJVg6NFpp66a0O%2B0oyuYXwQBLl0vL6p1bNlRhWs%2FFllFz2bx6fh3heWa8VxAgRWKzDTP8WmVsxMmwz7rL4x6CaEhOmVpkmplNfQ6Pt2daM9akSMaWLyPejAZv7W5uO34Kjb2aY0ndX9aUvZIYKComrCQzpwBjHX1bYTUUDGqzE9g66dWQiihXht%2BL%2BwAvCD7G9fWy2olhr%2FouYVbiHZvgRZ533uXBY31fgToIl%2B%2BDl4eLhHM8Tk%2F6z01iEcGJKoodzFfnqdsQkex6KyYYsi8D4IQN9zocRV5OLHlY8R1BgUCXNsYvF35aSY%2FZ9kv6nth3sypuPR9hFkhyHtPPsfkrZyK8CuGMMiEisMGOqUBtCTi6tl%2Fa4TDby6TfIUVX%2B%2Fi7QZmnZCHEaPa26cjkaydj5H6n99Zy6nJzTLOmkAVMMwJhRNLLXTdc2UmYNR0R%2BhfeU8crYNLXMBsflQmtU%2BA3iwjrlQA7nylzdJyP0ID4ZNLQXFYrLAizt4b%2BSswiYKBmse5SHvU24H6yLh%2B9q7%2BBLZhj%2FNIIJb8IOUlcSLq2iAAebg6ZCZc9y5yKhdc3qgrP64h&X-Amz-Signature=475059445901ea07d970f8430a9fe78059047a3d5aaa100be2f66bacb298eaed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLKYG5ZV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu5uOlCQ2R3%2FEz%2FDXMWoTyUiJ9Qpz%2BuKMJ2MCLz823cAiEAutKTHWo1uPKowYkdQYY6fPlnCARe%2Boy2Krw4yUwiUxwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0qQxJgvOoOnuV7zSrcAwBLx5eLUTQRM79iC2aaFKTYEI6WDmqg6UNiqXIdcK5YPDNaxdW7R2QvSYv4mbhfupnOJpbzd6MXT%2Fpwr6isEaUvHDzjxOGPlR85L9gOnceLgqz7UuPd9gaVicq9G2Y7iRaGprQSojjCzwocb3nQqx8GELX%2FcXCV%2BHTf%2BK5nclVdVQAd7vHjopHyCmEESqW%2BGttmiW2T4NswrxCMm5ZdzopDFYvPinid3waoLwJfyLQNXgm0lKF%2BBcXHW1fhzgxH5emNXuDaNhPdZQNpA9hqQuUgEoV33xQ0hJVg6NFpp66a0O%2B0oyuYXwQBLl0vL6p1bNlRhWs%2FFllFz2bx6fh3heWa8VxAgRWKzDTP8WmVsxMmwz7rL4x6CaEhOmVpkmplNfQ6Pt2daM9akSMaWLyPejAZv7W5uO34Kjb2aY0ndX9aUvZIYKComrCQzpwBjHX1bYTUUDGqzE9g66dWQiihXht%2BL%2BwAvCD7G9fWy2olhr%2FouYVbiHZvgRZ533uXBY31fgToIl%2B%2BDl4eLhHM8Tk%2F6z01iEcGJKoodzFfnqdsQkex6KyYYsi8D4IQN9zocRV5OLHlY8R1BgUCXNsYvF35aSY%2FZ9kv6nth3sypuPR9hFkhyHtPPsfkrZyK8CuGMMiEisMGOqUBtCTi6tl%2Fa4TDby6TfIUVX%2B%2Fi7QZmnZCHEaPa26cjkaydj5H6n99Zy6nJzTLOmkAVMMwJhRNLLXTdc2UmYNR0R%2BhfeU8crYNLXMBsflQmtU%2BA3iwjrlQA7nylzdJyP0ID4ZNLQXFYrLAizt4b%2BSswiYKBmse5SHvU24H6yLh%2B9q7%2BBLZhj%2FNIIJb8IOUlcSLq2iAAebg6ZCZc9y5yKhdc3qgrP64h&X-Amz-Signature=8687b08d29d690018283facd7b6fc67c3b1346efeb39e14d143ea19c8ed621e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLKYG5ZV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu5uOlCQ2R3%2FEz%2FDXMWoTyUiJ9Qpz%2BuKMJ2MCLz823cAiEAutKTHWo1uPKowYkdQYY6fPlnCARe%2Boy2Krw4yUwiUxwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0qQxJgvOoOnuV7zSrcAwBLx5eLUTQRM79iC2aaFKTYEI6WDmqg6UNiqXIdcK5YPDNaxdW7R2QvSYv4mbhfupnOJpbzd6MXT%2Fpwr6isEaUvHDzjxOGPlR85L9gOnceLgqz7UuPd9gaVicq9G2Y7iRaGprQSojjCzwocb3nQqx8GELX%2FcXCV%2BHTf%2BK5nclVdVQAd7vHjopHyCmEESqW%2BGttmiW2T4NswrxCMm5ZdzopDFYvPinid3waoLwJfyLQNXgm0lKF%2BBcXHW1fhzgxH5emNXuDaNhPdZQNpA9hqQuUgEoV33xQ0hJVg6NFpp66a0O%2B0oyuYXwQBLl0vL6p1bNlRhWs%2FFllFz2bx6fh3heWa8VxAgRWKzDTP8WmVsxMmwz7rL4x6CaEhOmVpkmplNfQ6Pt2daM9akSMaWLyPejAZv7W5uO34Kjb2aY0ndX9aUvZIYKComrCQzpwBjHX1bYTUUDGqzE9g66dWQiihXht%2BL%2BwAvCD7G9fWy2olhr%2FouYVbiHZvgRZ533uXBY31fgToIl%2B%2BDl4eLhHM8Tk%2F6z01iEcGJKoodzFfnqdsQkex6KyYYsi8D4IQN9zocRV5OLHlY8R1BgUCXNsYvF35aSY%2FZ9kv6nth3sypuPR9hFkhyHtPPsfkrZyK8CuGMMiEisMGOqUBtCTi6tl%2Fa4TDby6TfIUVX%2B%2Fi7QZmnZCHEaPa26cjkaydj5H6n99Zy6nJzTLOmkAVMMwJhRNLLXTdc2UmYNR0R%2BhfeU8crYNLXMBsflQmtU%2BA3iwjrlQA7nylzdJyP0ID4ZNLQXFYrLAizt4b%2BSswiYKBmse5SHvU24H6yLh%2B9q7%2BBLZhj%2FNIIJb8IOUlcSLq2iAAebg6ZCZc9y5yKhdc3qgrP64h&X-Amz-Signature=47b9cbb2a30cd0c20d87f49bf2b7c1a39ce33d0db9efdc566ca6b1fafb4d6884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLKYG5ZV%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu5uOlCQ2R3%2FEz%2FDXMWoTyUiJ9Qpz%2BuKMJ2MCLz823cAiEAutKTHWo1uPKowYkdQYY6fPlnCARe%2Boy2Krw4yUwiUxwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0qQxJgvOoOnuV7zSrcAwBLx5eLUTQRM79iC2aaFKTYEI6WDmqg6UNiqXIdcK5YPDNaxdW7R2QvSYv4mbhfupnOJpbzd6MXT%2Fpwr6isEaUvHDzjxOGPlR85L9gOnceLgqz7UuPd9gaVicq9G2Y7iRaGprQSojjCzwocb3nQqx8GELX%2FcXCV%2BHTf%2BK5nclVdVQAd7vHjopHyCmEESqW%2BGttmiW2T4NswrxCMm5ZdzopDFYvPinid3waoLwJfyLQNXgm0lKF%2BBcXHW1fhzgxH5emNXuDaNhPdZQNpA9hqQuUgEoV33xQ0hJVg6NFpp66a0O%2B0oyuYXwQBLl0vL6p1bNlRhWs%2FFllFz2bx6fh3heWa8VxAgRWKzDTP8WmVsxMmwz7rL4x6CaEhOmVpkmplNfQ6Pt2daM9akSMaWLyPejAZv7W5uO34Kjb2aY0ndX9aUvZIYKComrCQzpwBjHX1bYTUUDGqzE9g66dWQiihXht%2BL%2BwAvCD7G9fWy2olhr%2FouYVbiHZvgRZ533uXBY31fgToIl%2B%2BDl4eLhHM8Tk%2F6z01iEcGJKoodzFfnqdsQkex6KyYYsi8D4IQN9zocRV5OLHlY8R1BgUCXNsYvF35aSY%2FZ9kv6nth3sypuPR9hFkhyHtPPsfkrZyK8CuGMMiEisMGOqUBtCTi6tl%2Fa4TDby6TfIUVX%2B%2Fi7QZmnZCHEaPa26cjkaydj5H6n99Zy6nJzTLOmkAVMMwJhRNLLXTdc2UmYNR0R%2BhfeU8crYNLXMBsflQmtU%2BA3iwjrlQA7nylzdJyP0ID4ZNLQXFYrLAizt4b%2BSswiYKBmse5SHvU24H6yLh%2B9q7%2BBLZhj%2FNIIJb8IOUlcSLq2iAAebg6ZCZc9y5yKhdc3qgrP64h&X-Amz-Signature=2545139b3fe9b9b654c6e044190075075114ce428aa0ceb0e16a0b2824718200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
