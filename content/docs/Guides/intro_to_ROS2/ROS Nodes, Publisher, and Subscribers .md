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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6MO4T5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB1NzyvfRvLHJaJ6OgiLcs6OQkpeZyubT%2BUcswKhLqIgIhAItLlbf7%2BfHlWeGwwLgN3JB6JhTNjRd5yKEUUZRg9BOkKv8DCD8QABoMNjM3NDIzMTgzODA1IgzAZ999o9HLR3xJWDUq3AOoE5Fi9iqW6KwNQq2qXAX1MxU4ax0We8OWLxHl46ErN4RJgLvB7ZMzRDB9ywDv7NH8HCrxx47MrOHGiDN9jigdOyEpLsrl%2FuVE3yLd2jSr5f01yaBY2Gemk3Yv%2BWgF7pj30faGswXWDFRqkNggLLPhycyKHW1pMCcvm1tDokmdO97CY%2BbxgOikQ6PXNjPEaC1Xz%2BrFpAGfTvYnrHbo92%2Bbe3gCtirVhveShjBHM9gPQNf%2BM5KjzINrLmE9fkxcCldINgiZFoaSA0xzjQ6pXzuMOdcrBppZur5otwvccSvB0CunnQeRkdC79cnKCXrR8bJL%2FyqoXa7UmbkOceJg0zOxs4uv5YYsfrNnrzNgh6jCCQDg8lDt3HlNYhWd4D34GmOOZHjtSMAxx%2BmknMzpUV0YQIvbzq%2BxYHlNsUZn07CvlixwTS%2ByWdZIU1CNCa1ZqarnupuLp7ziEx8x%2FoND6fOG2K%2F08X%2BQD5eyb0jIH2%2BxrQ2BxLVGS75BUvT8w6qKzpnbNQ18Vp5SRXzsJ1PPhnGCDxg9OVzHDAbkeMXRVMlDrO%2FaFgb7s92XsTq9U9EXW65qjV9TJbMX7co2kpw37DuMFu16LiWu5HvS0TMnSx51kWtnO1OdBFSwhsps1DDLiv2%2FBjqkAam1hFiYfJYrNR4oW9rQha%2Bz0f1B0KIR9%2B8J7m3FiBdHXqccW9utgeUQe1zgmwDMXep90TXm18cIirbmrMxmm1hXdULSuBZg%2FRI%2BiDRROeyhW8Ks9jE8CWNWoDmoELmlIrDi3ZD6dmuJKPp0Kesr9BWj%2FkCRtX5DOqsJ0BunfOsZC3ftBfWNCoSVnx9326KZ1e3afp%2BV6KB59PgkfrTPxxSfNZA0&X-Amz-Signature=b445cf17b826787baaee3322e9b7c28d1b3741abbfb134b6b2ad72078da26f68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6MO4T5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB1NzyvfRvLHJaJ6OgiLcs6OQkpeZyubT%2BUcswKhLqIgIhAItLlbf7%2BfHlWeGwwLgN3JB6JhTNjRd5yKEUUZRg9BOkKv8DCD8QABoMNjM3NDIzMTgzODA1IgzAZ999o9HLR3xJWDUq3AOoE5Fi9iqW6KwNQq2qXAX1MxU4ax0We8OWLxHl46ErN4RJgLvB7ZMzRDB9ywDv7NH8HCrxx47MrOHGiDN9jigdOyEpLsrl%2FuVE3yLd2jSr5f01yaBY2Gemk3Yv%2BWgF7pj30faGswXWDFRqkNggLLPhycyKHW1pMCcvm1tDokmdO97CY%2BbxgOikQ6PXNjPEaC1Xz%2BrFpAGfTvYnrHbo92%2Bbe3gCtirVhveShjBHM9gPQNf%2BM5KjzINrLmE9fkxcCldINgiZFoaSA0xzjQ6pXzuMOdcrBppZur5otwvccSvB0CunnQeRkdC79cnKCXrR8bJL%2FyqoXa7UmbkOceJg0zOxs4uv5YYsfrNnrzNgh6jCCQDg8lDt3HlNYhWd4D34GmOOZHjtSMAxx%2BmknMzpUV0YQIvbzq%2BxYHlNsUZn07CvlixwTS%2ByWdZIU1CNCa1ZqarnupuLp7ziEx8x%2FoND6fOG2K%2F08X%2BQD5eyb0jIH2%2BxrQ2BxLVGS75BUvT8w6qKzpnbNQ18Vp5SRXzsJ1PPhnGCDxg9OVzHDAbkeMXRVMlDrO%2FaFgb7s92XsTq9U9EXW65qjV9TJbMX7co2kpw37DuMFu16LiWu5HvS0TMnSx51kWtnO1OdBFSwhsps1DDLiv2%2FBjqkAam1hFiYfJYrNR4oW9rQha%2Bz0f1B0KIR9%2B8J7m3FiBdHXqccW9utgeUQe1zgmwDMXep90TXm18cIirbmrMxmm1hXdULSuBZg%2FRI%2BiDRROeyhW8Ks9jE8CWNWoDmoELmlIrDi3ZD6dmuJKPp0Kesr9BWj%2FkCRtX5DOqsJ0BunfOsZC3ftBfWNCoSVnx9326KZ1e3afp%2BV6KB59PgkfrTPxxSfNZA0&X-Amz-Signature=2e860c4f7f2c313a63b05c56b8eced9b1a5ffd72ca2103cc1b25bced060e78ee&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6MO4T5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB1NzyvfRvLHJaJ6OgiLcs6OQkpeZyubT%2BUcswKhLqIgIhAItLlbf7%2BfHlWeGwwLgN3JB6JhTNjRd5yKEUUZRg9BOkKv8DCD8QABoMNjM3NDIzMTgzODA1IgzAZ999o9HLR3xJWDUq3AOoE5Fi9iqW6KwNQq2qXAX1MxU4ax0We8OWLxHl46ErN4RJgLvB7ZMzRDB9ywDv7NH8HCrxx47MrOHGiDN9jigdOyEpLsrl%2FuVE3yLd2jSr5f01yaBY2Gemk3Yv%2BWgF7pj30faGswXWDFRqkNggLLPhycyKHW1pMCcvm1tDokmdO97CY%2BbxgOikQ6PXNjPEaC1Xz%2BrFpAGfTvYnrHbo92%2Bbe3gCtirVhveShjBHM9gPQNf%2BM5KjzINrLmE9fkxcCldINgiZFoaSA0xzjQ6pXzuMOdcrBppZur5otwvccSvB0CunnQeRkdC79cnKCXrR8bJL%2FyqoXa7UmbkOceJg0zOxs4uv5YYsfrNnrzNgh6jCCQDg8lDt3HlNYhWd4D34GmOOZHjtSMAxx%2BmknMzpUV0YQIvbzq%2BxYHlNsUZn07CvlixwTS%2ByWdZIU1CNCa1ZqarnupuLp7ziEx8x%2FoND6fOG2K%2F08X%2BQD5eyb0jIH2%2BxrQ2BxLVGS75BUvT8w6qKzpnbNQ18Vp5SRXzsJ1PPhnGCDxg9OVzHDAbkeMXRVMlDrO%2FaFgb7s92XsTq9U9EXW65qjV9TJbMX7co2kpw37DuMFu16LiWu5HvS0TMnSx51kWtnO1OdBFSwhsps1DDLiv2%2FBjqkAam1hFiYfJYrNR4oW9rQha%2Bz0f1B0KIR9%2B8J7m3FiBdHXqccW9utgeUQe1zgmwDMXep90TXm18cIirbmrMxmm1hXdULSuBZg%2FRI%2BiDRROeyhW8Ks9jE8CWNWoDmoELmlIrDi3ZD6dmuJKPp0Kesr9BWj%2FkCRtX5DOqsJ0BunfOsZC3ftBfWNCoSVnx9326KZ1e3afp%2BV6KB59PgkfrTPxxSfNZA0&X-Amz-Signature=c72c5cb55c4f66fc3b974f8352896c5d95be6b48c8230e90ccb75dbb25d47f22&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6MO4T5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB1NzyvfRvLHJaJ6OgiLcs6OQkpeZyubT%2BUcswKhLqIgIhAItLlbf7%2BfHlWeGwwLgN3JB6JhTNjRd5yKEUUZRg9BOkKv8DCD8QABoMNjM3NDIzMTgzODA1IgzAZ999o9HLR3xJWDUq3AOoE5Fi9iqW6KwNQq2qXAX1MxU4ax0We8OWLxHl46ErN4RJgLvB7ZMzRDB9ywDv7NH8HCrxx47MrOHGiDN9jigdOyEpLsrl%2FuVE3yLd2jSr5f01yaBY2Gemk3Yv%2BWgF7pj30faGswXWDFRqkNggLLPhycyKHW1pMCcvm1tDokmdO97CY%2BbxgOikQ6PXNjPEaC1Xz%2BrFpAGfTvYnrHbo92%2Bbe3gCtirVhveShjBHM9gPQNf%2BM5KjzINrLmE9fkxcCldINgiZFoaSA0xzjQ6pXzuMOdcrBppZur5otwvccSvB0CunnQeRkdC79cnKCXrR8bJL%2FyqoXa7UmbkOceJg0zOxs4uv5YYsfrNnrzNgh6jCCQDg8lDt3HlNYhWd4D34GmOOZHjtSMAxx%2BmknMzpUV0YQIvbzq%2BxYHlNsUZn07CvlixwTS%2ByWdZIU1CNCa1ZqarnupuLp7ziEx8x%2FoND6fOG2K%2F08X%2BQD5eyb0jIH2%2BxrQ2BxLVGS75BUvT8w6qKzpnbNQ18Vp5SRXzsJ1PPhnGCDxg9OVzHDAbkeMXRVMlDrO%2FaFgb7s92XsTq9U9EXW65qjV9TJbMX7co2kpw37DuMFu16LiWu5HvS0TMnSx51kWtnO1OdBFSwhsps1DDLiv2%2FBjqkAam1hFiYfJYrNR4oW9rQha%2Bz0f1B0KIR9%2B8J7m3FiBdHXqccW9utgeUQe1zgmwDMXep90TXm18cIirbmrMxmm1hXdULSuBZg%2FRI%2BiDRROeyhW8Ks9jE8CWNWoDmoELmlIrDi3ZD6dmuJKPp0Kesr9BWj%2FkCRtX5DOqsJ0BunfOsZC3ftBfWNCoSVnx9326KZ1e3afp%2BV6KB59PgkfrTPxxSfNZA0&X-Amz-Signature=b3ebf09436691652ac7e21dac124e3cc44d59a0a3535fd9564ba5e79daadf184&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6MO4T5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB1NzyvfRvLHJaJ6OgiLcs6OQkpeZyubT%2BUcswKhLqIgIhAItLlbf7%2BfHlWeGwwLgN3JB6JhTNjRd5yKEUUZRg9BOkKv8DCD8QABoMNjM3NDIzMTgzODA1IgzAZ999o9HLR3xJWDUq3AOoE5Fi9iqW6KwNQq2qXAX1MxU4ax0We8OWLxHl46ErN4RJgLvB7ZMzRDB9ywDv7NH8HCrxx47MrOHGiDN9jigdOyEpLsrl%2FuVE3yLd2jSr5f01yaBY2Gemk3Yv%2BWgF7pj30faGswXWDFRqkNggLLPhycyKHW1pMCcvm1tDokmdO97CY%2BbxgOikQ6PXNjPEaC1Xz%2BrFpAGfTvYnrHbo92%2Bbe3gCtirVhveShjBHM9gPQNf%2BM5KjzINrLmE9fkxcCldINgiZFoaSA0xzjQ6pXzuMOdcrBppZur5otwvccSvB0CunnQeRkdC79cnKCXrR8bJL%2FyqoXa7UmbkOceJg0zOxs4uv5YYsfrNnrzNgh6jCCQDg8lDt3HlNYhWd4D34GmOOZHjtSMAxx%2BmknMzpUV0YQIvbzq%2BxYHlNsUZn07CvlixwTS%2ByWdZIU1CNCa1ZqarnupuLp7ziEx8x%2FoND6fOG2K%2F08X%2BQD5eyb0jIH2%2BxrQ2BxLVGS75BUvT8w6qKzpnbNQ18Vp5SRXzsJ1PPhnGCDxg9OVzHDAbkeMXRVMlDrO%2FaFgb7s92XsTq9U9EXW65qjV9TJbMX7co2kpw37DuMFu16LiWu5HvS0TMnSx51kWtnO1OdBFSwhsps1DDLiv2%2FBjqkAam1hFiYfJYrNR4oW9rQha%2Bz0f1B0KIR9%2B8J7m3FiBdHXqccW9utgeUQe1zgmwDMXep90TXm18cIirbmrMxmm1hXdULSuBZg%2FRI%2BiDRROeyhW8Ks9jE8CWNWoDmoELmlIrDi3ZD6dmuJKPp0Kesr9BWj%2FkCRtX5DOqsJ0BunfOsZC3ftBfWNCoSVnx9326KZ1e3afp%2BV6KB59PgkfrTPxxSfNZA0&X-Amz-Signature=dd4d80b9d604f24b064a9bfc92afe64234f5692fe34b20e49acc7dc5af9c1890&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6MO4T5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB1NzyvfRvLHJaJ6OgiLcs6OQkpeZyubT%2BUcswKhLqIgIhAItLlbf7%2BfHlWeGwwLgN3JB6JhTNjRd5yKEUUZRg9BOkKv8DCD8QABoMNjM3NDIzMTgzODA1IgzAZ999o9HLR3xJWDUq3AOoE5Fi9iqW6KwNQq2qXAX1MxU4ax0We8OWLxHl46ErN4RJgLvB7ZMzRDB9ywDv7NH8HCrxx47MrOHGiDN9jigdOyEpLsrl%2FuVE3yLd2jSr5f01yaBY2Gemk3Yv%2BWgF7pj30faGswXWDFRqkNggLLPhycyKHW1pMCcvm1tDokmdO97CY%2BbxgOikQ6PXNjPEaC1Xz%2BrFpAGfTvYnrHbo92%2Bbe3gCtirVhveShjBHM9gPQNf%2BM5KjzINrLmE9fkxcCldINgiZFoaSA0xzjQ6pXzuMOdcrBppZur5otwvccSvB0CunnQeRkdC79cnKCXrR8bJL%2FyqoXa7UmbkOceJg0zOxs4uv5YYsfrNnrzNgh6jCCQDg8lDt3HlNYhWd4D34GmOOZHjtSMAxx%2BmknMzpUV0YQIvbzq%2BxYHlNsUZn07CvlixwTS%2ByWdZIU1CNCa1ZqarnupuLp7ziEx8x%2FoND6fOG2K%2F08X%2BQD5eyb0jIH2%2BxrQ2BxLVGS75BUvT8w6qKzpnbNQ18Vp5SRXzsJ1PPhnGCDxg9OVzHDAbkeMXRVMlDrO%2FaFgb7s92XsTq9U9EXW65qjV9TJbMX7co2kpw37DuMFu16LiWu5HvS0TMnSx51kWtnO1OdBFSwhsps1DDLiv2%2FBjqkAam1hFiYfJYrNR4oW9rQha%2Bz0f1B0KIR9%2B8J7m3FiBdHXqccW9utgeUQe1zgmwDMXep90TXm18cIirbmrMxmm1hXdULSuBZg%2FRI%2BiDRROeyhW8Ks9jE8CWNWoDmoELmlIrDi3ZD6dmuJKPp0Kesr9BWj%2FkCRtX5DOqsJ0BunfOsZC3ftBfWNCoSVnx9326KZ1e3afp%2BV6KB59PgkfrTPxxSfNZA0&X-Amz-Signature=b78724cd49a57495f60b2bbfbfac2994356c070808e505329de78ecbae3a069e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6MO4T5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB1NzyvfRvLHJaJ6OgiLcs6OQkpeZyubT%2BUcswKhLqIgIhAItLlbf7%2BfHlWeGwwLgN3JB6JhTNjRd5yKEUUZRg9BOkKv8DCD8QABoMNjM3NDIzMTgzODA1IgzAZ999o9HLR3xJWDUq3AOoE5Fi9iqW6KwNQq2qXAX1MxU4ax0We8OWLxHl46ErN4RJgLvB7ZMzRDB9ywDv7NH8HCrxx47MrOHGiDN9jigdOyEpLsrl%2FuVE3yLd2jSr5f01yaBY2Gemk3Yv%2BWgF7pj30faGswXWDFRqkNggLLPhycyKHW1pMCcvm1tDokmdO97CY%2BbxgOikQ6PXNjPEaC1Xz%2BrFpAGfTvYnrHbo92%2Bbe3gCtirVhveShjBHM9gPQNf%2BM5KjzINrLmE9fkxcCldINgiZFoaSA0xzjQ6pXzuMOdcrBppZur5otwvccSvB0CunnQeRkdC79cnKCXrR8bJL%2FyqoXa7UmbkOceJg0zOxs4uv5YYsfrNnrzNgh6jCCQDg8lDt3HlNYhWd4D34GmOOZHjtSMAxx%2BmknMzpUV0YQIvbzq%2BxYHlNsUZn07CvlixwTS%2ByWdZIU1CNCa1ZqarnupuLp7ziEx8x%2FoND6fOG2K%2F08X%2BQD5eyb0jIH2%2BxrQ2BxLVGS75BUvT8w6qKzpnbNQ18Vp5SRXzsJ1PPhnGCDxg9OVzHDAbkeMXRVMlDrO%2FaFgb7s92XsTq9U9EXW65qjV9TJbMX7co2kpw37DuMFu16LiWu5HvS0TMnSx51kWtnO1OdBFSwhsps1DDLiv2%2FBjqkAam1hFiYfJYrNR4oW9rQha%2Bz0f1B0KIR9%2B8J7m3FiBdHXqccW9utgeUQe1zgmwDMXep90TXm18cIirbmrMxmm1hXdULSuBZg%2FRI%2BiDRROeyhW8Ks9jE8CWNWoDmoELmlIrDi3ZD6dmuJKPp0Kesr9BWj%2FkCRtX5DOqsJ0BunfOsZC3ftBfWNCoSVnx9326KZ1e3afp%2BV6KB59PgkfrTPxxSfNZA0&X-Amz-Signature=7060c282aedbbe56775db41466e4717c8bcbea44a9c2397b4d3e71fda58ddedf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6MO4T5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB1NzyvfRvLHJaJ6OgiLcs6OQkpeZyubT%2BUcswKhLqIgIhAItLlbf7%2BfHlWeGwwLgN3JB6JhTNjRd5yKEUUZRg9BOkKv8DCD8QABoMNjM3NDIzMTgzODA1IgzAZ999o9HLR3xJWDUq3AOoE5Fi9iqW6KwNQq2qXAX1MxU4ax0We8OWLxHl46ErN4RJgLvB7ZMzRDB9ywDv7NH8HCrxx47MrOHGiDN9jigdOyEpLsrl%2FuVE3yLd2jSr5f01yaBY2Gemk3Yv%2BWgF7pj30faGswXWDFRqkNggLLPhycyKHW1pMCcvm1tDokmdO97CY%2BbxgOikQ6PXNjPEaC1Xz%2BrFpAGfTvYnrHbo92%2Bbe3gCtirVhveShjBHM9gPQNf%2BM5KjzINrLmE9fkxcCldINgiZFoaSA0xzjQ6pXzuMOdcrBppZur5otwvccSvB0CunnQeRkdC79cnKCXrR8bJL%2FyqoXa7UmbkOceJg0zOxs4uv5YYsfrNnrzNgh6jCCQDg8lDt3HlNYhWd4D34GmOOZHjtSMAxx%2BmknMzpUV0YQIvbzq%2BxYHlNsUZn07CvlixwTS%2ByWdZIU1CNCa1ZqarnupuLp7ziEx8x%2FoND6fOG2K%2F08X%2BQD5eyb0jIH2%2BxrQ2BxLVGS75BUvT8w6qKzpnbNQ18Vp5SRXzsJ1PPhnGCDxg9OVzHDAbkeMXRVMlDrO%2FaFgb7s92XsTq9U9EXW65qjV9TJbMX7co2kpw37DuMFu16LiWu5HvS0TMnSx51kWtnO1OdBFSwhsps1DDLiv2%2FBjqkAam1hFiYfJYrNR4oW9rQha%2Bz0f1B0KIR9%2B8J7m3FiBdHXqccW9utgeUQe1zgmwDMXep90TXm18cIirbmrMxmm1hXdULSuBZg%2FRI%2BiDRROeyhW8Ks9jE8CWNWoDmoELmlIrDi3ZD6dmuJKPp0Kesr9BWj%2FkCRtX5DOqsJ0BunfOsZC3ftBfWNCoSVnx9326KZ1e3afp%2BV6KB59PgkfrTPxxSfNZA0&X-Amz-Signature=5aeab42f98c37b0b37b764cbbcd4c772b45192ca64bce3886ab142346e886f83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
