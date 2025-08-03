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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNBZ2P2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk%2B5PVXBfBkcQYa%2BCYLI02aM2ghulQda188xmvVrbPbAiEAmEK53I%2B0naFBaTmiOeLIM718EOEUQgvw0V726NvVtWkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOaz5BLRY%2FugkCFksCrcA3m4tCdP0v2ty5wPNprBUL2mzaioXyN94y8Ql%2Fp%2FMmEGOMblRDDdDkK9nHifZCpfMMf4wXtIaQ86ofoqlYDUfBUzBDIuXU22EJ7ys5T%2FT%2FaW9DLtQKKLbMrReZcFEB4wNpSdV%2FU9hclu50VGT86n4x7crIvjZOroOAB8klVvhIMVm05qodNvWCHGAeMAY19G1YMNXUhiyyErnN6KE1omTSVTgVttjENlQ9ACex6d9wKLjusRUyV0YaKGor8vVTYuhrt7c%2FZJS4bQFJv4aZhHgyZ%2FUZNGPlUG5MIHtkoJwG4bQo9Qyb1%2B3Y%2FNTGGJxoWrjQIzQQz6lUr%2FH4TRrl9hBbvp%2F1uzx3i4XBlKxcQ%2F3jZguwl8XDB4P7w7yaMr%2BNnGGXzYtnd3B%2Bj0qb%2B66apNfXI7lCpEjJ%2BY1Pc1IMtU95%2BiszqL3S2lx5ME82X19UEuhELfF0VUMaI7%2BgrTPJk6lBm%2FmcGssBbQu984DCGDXSeVxdex0T31XkokZbJ9a17mp3SF1IDiikzhsir%2FvFiSzTOi0MO3fWYQljRty7nwDWBOQjWkKRT%2BbQH4hab2q%2BzDbtIbqsudHdGQInDlL5F5xnE%2BNWQAO4WJFs0AlHRr7cCJii1LKpz1p2B7jZR8MMuqvsQGOqUB1MmkxkNffq67cl5lgxE%2FlkotFmGdjWepYsoXancwDj53zR2wZrU3PZjTybVgMpQJqSqj1nNK2FIkzIDj%2F1crMkUeUub5TjLak33uIkzKEo%2BQjyUjtBa9V8U6KrgYzxtZxUvAFJbseZnFYiz12QEY8yWjzbHI0Z%2BiRv%2B7%2BV%2F04d3%2Bx%2Fn%2FWK3KRMlWzNMz9FK%2F9%2BVfgp600zh%2FYo9%2F3HxtYE08rZl5&X-Amz-Signature=bfddfcbf3e2e638493d21b79f0bad7c380c17b6c30caa53082aa12d79d9872c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNBZ2P2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk%2B5PVXBfBkcQYa%2BCYLI02aM2ghulQda188xmvVrbPbAiEAmEK53I%2B0naFBaTmiOeLIM718EOEUQgvw0V726NvVtWkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOaz5BLRY%2FugkCFksCrcA3m4tCdP0v2ty5wPNprBUL2mzaioXyN94y8Ql%2Fp%2FMmEGOMblRDDdDkK9nHifZCpfMMf4wXtIaQ86ofoqlYDUfBUzBDIuXU22EJ7ys5T%2FT%2FaW9DLtQKKLbMrReZcFEB4wNpSdV%2FU9hclu50VGT86n4x7crIvjZOroOAB8klVvhIMVm05qodNvWCHGAeMAY19G1YMNXUhiyyErnN6KE1omTSVTgVttjENlQ9ACex6d9wKLjusRUyV0YaKGor8vVTYuhrt7c%2FZJS4bQFJv4aZhHgyZ%2FUZNGPlUG5MIHtkoJwG4bQo9Qyb1%2B3Y%2FNTGGJxoWrjQIzQQz6lUr%2FH4TRrl9hBbvp%2F1uzx3i4XBlKxcQ%2F3jZguwl8XDB4P7w7yaMr%2BNnGGXzYtnd3B%2Bj0qb%2B66apNfXI7lCpEjJ%2BY1Pc1IMtU95%2BiszqL3S2lx5ME82X19UEuhELfF0VUMaI7%2BgrTPJk6lBm%2FmcGssBbQu984DCGDXSeVxdex0T31XkokZbJ9a17mp3SF1IDiikzhsir%2FvFiSzTOi0MO3fWYQljRty7nwDWBOQjWkKRT%2BbQH4hab2q%2BzDbtIbqsudHdGQInDlL5F5xnE%2BNWQAO4WJFs0AlHRr7cCJii1LKpz1p2B7jZR8MMuqvsQGOqUB1MmkxkNffq67cl5lgxE%2FlkotFmGdjWepYsoXancwDj53zR2wZrU3PZjTybVgMpQJqSqj1nNK2FIkzIDj%2F1crMkUeUub5TjLak33uIkzKEo%2BQjyUjtBa9V8U6KrgYzxtZxUvAFJbseZnFYiz12QEY8yWjzbHI0Z%2BiRv%2B7%2BV%2F04d3%2Bx%2Fn%2FWK3KRMlWzNMz9FK%2F9%2BVfgp600zh%2FYo9%2F3HxtYE08rZl5&X-Amz-Signature=ccff3fcdb46a8f6c5eb5332e1d24b197d8235f3c0f8376be3e18220a07b72044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNBZ2P2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk%2B5PVXBfBkcQYa%2BCYLI02aM2ghulQda188xmvVrbPbAiEAmEK53I%2B0naFBaTmiOeLIM718EOEUQgvw0V726NvVtWkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOaz5BLRY%2FugkCFksCrcA3m4tCdP0v2ty5wPNprBUL2mzaioXyN94y8Ql%2Fp%2FMmEGOMblRDDdDkK9nHifZCpfMMf4wXtIaQ86ofoqlYDUfBUzBDIuXU22EJ7ys5T%2FT%2FaW9DLtQKKLbMrReZcFEB4wNpSdV%2FU9hclu50VGT86n4x7crIvjZOroOAB8klVvhIMVm05qodNvWCHGAeMAY19G1YMNXUhiyyErnN6KE1omTSVTgVttjENlQ9ACex6d9wKLjusRUyV0YaKGor8vVTYuhrt7c%2FZJS4bQFJv4aZhHgyZ%2FUZNGPlUG5MIHtkoJwG4bQo9Qyb1%2B3Y%2FNTGGJxoWrjQIzQQz6lUr%2FH4TRrl9hBbvp%2F1uzx3i4XBlKxcQ%2F3jZguwl8XDB4P7w7yaMr%2BNnGGXzYtnd3B%2Bj0qb%2B66apNfXI7lCpEjJ%2BY1Pc1IMtU95%2BiszqL3S2lx5ME82X19UEuhELfF0VUMaI7%2BgrTPJk6lBm%2FmcGssBbQu984DCGDXSeVxdex0T31XkokZbJ9a17mp3SF1IDiikzhsir%2FvFiSzTOi0MO3fWYQljRty7nwDWBOQjWkKRT%2BbQH4hab2q%2BzDbtIbqsudHdGQInDlL5F5xnE%2BNWQAO4WJFs0AlHRr7cCJii1LKpz1p2B7jZR8MMuqvsQGOqUB1MmkxkNffq67cl5lgxE%2FlkotFmGdjWepYsoXancwDj53zR2wZrU3PZjTybVgMpQJqSqj1nNK2FIkzIDj%2F1crMkUeUub5TjLak33uIkzKEo%2BQjyUjtBa9V8U6KrgYzxtZxUvAFJbseZnFYiz12QEY8yWjzbHI0Z%2BiRv%2B7%2BV%2F04d3%2Bx%2Fn%2FWK3KRMlWzNMz9FK%2F9%2BVfgp600zh%2FYo9%2F3HxtYE08rZl5&X-Amz-Signature=8f2b1d346d938f45fde0c7592f093276af55e6cab17078ab1177d06b8414db44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNBZ2P2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk%2B5PVXBfBkcQYa%2BCYLI02aM2ghulQda188xmvVrbPbAiEAmEK53I%2B0naFBaTmiOeLIM718EOEUQgvw0V726NvVtWkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOaz5BLRY%2FugkCFksCrcA3m4tCdP0v2ty5wPNprBUL2mzaioXyN94y8Ql%2Fp%2FMmEGOMblRDDdDkK9nHifZCpfMMf4wXtIaQ86ofoqlYDUfBUzBDIuXU22EJ7ys5T%2FT%2FaW9DLtQKKLbMrReZcFEB4wNpSdV%2FU9hclu50VGT86n4x7crIvjZOroOAB8klVvhIMVm05qodNvWCHGAeMAY19G1YMNXUhiyyErnN6KE1omTSVTgVttjENlQ9ACex6d9wKLjusRUyV0YaKGor8vVTYuhrt7c%2FZJS4bQFJv4aZhHgyZ%2FUZNGPlUG5MIHtkoJwG4bQo9Qyb1%2B3Y%2FNTGGJxoWrjQIzQQz6lUr%2FH4TRrl9hBbvp%2F1uzx3i4XBlKxcQ%2F3jZguwl8XDB4P7w7yaMr%2BNnGGXzYtnd3B%2Bj0qb%2B66apNfXI7lCpEjJ%2BY1Pc1IMtU95%2BiszqL3S2lx5ME82X19UEuhELfF0VUMaI7%2BgrTPJk6lBm%2FmcGssBbQu984DCGDXSeVxdex0T31XkokZbJ9a17mp3SF1IDiikzhsir%2FvFiSzTOi0MO3fWYQljRty7nwDWBOQjWkKRT%2BbQH4hab2q%2BzDbtIbqsudHdGQInDlL5F5xnE%2BNWQAO4WJFs0AlHRr7cCJii1LKpz1p2B7jZR8MMuqvsQGOqUB1MmkxkNffq67cl5lgxE%2FlkotFmGdjWepYsoXancwDj53zR2wZrU3PZjTybVgMpQJqSqj1nNK2FIkzIDj%2F1crMkUeUub5TjLak33uIkzKEo%2BQjyUjtBa9V8U6KrgYzxtZxUvAFJbseZnFYiz12QEY8yWjzbHI0Z%2BiRv%2B7%2BV%2F04d3%2Bx%2Fn%2FWK3KRMlWzNMz9FK%2F9%2BVfgp600zh%2FYo9%2F3HxtYE08rZl5&X-Amz-Signature=1eb0a929f57840662efdcb1854f417e04af38d06b68091661fa560b14e65f84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNBZ2P2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk%2B5PVXBfBkcQYa%2BCYLI02aM2ghulQda188xmvVrbPbAiEAmEK53I%2B0naFBaTmiOeLIM718EOEUQgvw0V726NvVtWkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOaz5BLRY%2FugkCFksCrcA3m4tCdP0v2ty5wPNprBUL2mzaioXyN94y8Ql%2Fp%2FMmEGOMblRDDdDkK9nHifZCpfMMf4wXtIaQ86ofoqlYDUfBUzBDIuXU22EJ7ys5T%2FT%2FaW9DLtQKKLbMrReZcFEB4wNpSdV%2FU9hclu50VGT86n4x7crIvjZOroOAB8klVvhIMVm05qodNvWCHGAeMAY19G1YMNXUhiyyErnN6KE1omTSVTgVttjENlQ9ACex6d9wKLjusRUyV0YaKGor8vVTYuhrt7c%2FZJS4bQFJv4aZhHgyZ%2FUZNGPlUG5MIHtkoJwG4bQo9Qyb1%2B3Y%2FNTGGJxoWrjQIzQQz6lUr%2FH4TRrl9hBbvp%2F1uzx3i4XBlKxcQ%2F3jZguwl8XDB4P7w7yaMr%2BNnGGXzYtnd3B%2Bj0qb%2B66apNfXI7lCpEjJ%2BY1Pc1IMtU95%2BiszqL3S2lx5ME82X19UEuhELfF0VUMaI7%2BgrTPJk6lBm%2FmcGssBbQu984DCGDXSeVxdex0T31XkokZbJ9a17mp3SF1IDiikzhsir%2FvFiSzTOi0MO3fWYQljRty7nwDWBOQjWkKRT%2BbQH4hab2q%2BzDbtIbqsudHdGQInDlL5F5xnE%2BNWQAO4WJFs0AlHRr7cCJii1LKpz1p2B7jZR8MMuqvsQGOqUB1MmkxkNffq67cl5lgxE%2FlkotFmGdjWepYsoXancwDj53zR2wZrU3PZjTybVgMpQJqSqj1nNK2FIkzIDj%2F1crMkUeUub5TjLak33uIkzKEo%2BQjyUjtBa9V8U6KrgYzxtZxUvAFJbseZnFYiz12QEY8yWjzbHI0Z%2BiRv%2B7%2BV%2F04d3%2Bx%2Fn%2FWK3KRMlWzNMz9FK%2F9%2BVfgp600zh%2FYo9%2F3HxtYE08rZl5&X-Amz-Signature=dffa1614215c2cf94ae338e5d7934304490f4423d13b1dce95824ae7be033086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNBZ2P2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk%2B5PVXBfBkcQYa%2BCYLI02aM2ghulQda188xmvVrbPbAiEAmEK53I%2B0naFBaTmiOeLIM718EOEUQgvw0V726NvVtWkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOaz5BLRY%2FugkCFksCrcA3m4tCdP0v2ty5wPNprBUL2mzaioXyN94y8Ql%2Fp%2FMmEGOMblRDDdDkK9nHifZCpfMMf4wXtIaQ86ofoqlYDUfBUzBDIuXU22EJ7ys5T%2FT%2FaW9DLtQKKLbMrReZcFEB4wNpSdV%2FU9hclu50VGT86n4x7crIvjZOroOAB8klVvhIMVm05qodNvWCHGAeMAY19G1YMNXUhiyyErnN6KE1omTSVTgVttjENlQ9ACex6d9wKLjusRUyV0YaKGor8vVTYuhrt7c%2FZJS4bQFJv4aZhHgyZ%2FUZNGPlUG5MIHtkoJwG4bQo9Qyb1%2B3Y%2FNTGGJxoWrjQIzQQz6lUr%2FH4TRrl9hBbvp%2F1uzx3i4XBlKxcQ%2F3jZguwl8XDB4P7w7yaMr%2BNnGGXzYtnd3B%2Bj0qb%2B66apNfXI7lCpEjJ%2BY1Pc1IMtU95%2BiszqL3S2lx5ME82X19UEuhELfF0VUMaI7%2BgrTPJk6lBm%2FmcGssBbQu984DCGDXSeVxdex0T31XkokZbJ9a17mp3SF1IDiikzhsir%2FvFiSzTOi0MO3fWYQljRty7nwDWBOQjWkKRT%2BbQH4hab2q%2BzDbtIbqsudHdGQInDlL5F5xnE%2BNWQAO4WJFs0AlHRr7cCJii1LKpz1p2B7jZR8MMuqvsQGOqUB1MmkxkNffq67cl5lgxE%2FlkotFmGdjWepYsoXancwDj53zR2wZrU3PZjTybVgMpQJqSqj1nNK2FIkzIDj%2F1crMkUeUub5TjLak33uIkzKEo%2BQjyUjtBa9V8U6KrgYzxtZxUvAFJbseZnFYiz12QEY8yWjzbHI0Z%2BiRv%2B7%2BV%2F04d3%2Bx%2Fn%2FWK3KRMlWzNMz9FK%2F9%2BVfgp600zh%2FYo9%2F3HxtYE08rZl5&X-Amz-Signature=73dd55ad14fc4dd13b5da3a906f25e33d8e903636f62feb8b57c465bef0ddfae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNBZ2P2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk%2B5PVXBfBkcQYa%2BCYLI02aM2ghulQda188xmvVrbPbAiEAmEK53I%2B0naFBaTmiOeLIM718EOEUQgvw0V726NvVtWkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOaz5BLRY%2FugkCFksCrcA3m4tCdP0v2ty5wPNprBUL2mzaioXyN94y8Ql%2Fp%2FMmEGOMblRDDdDkK9nHifZCpfMMf4wXtIaQ86ofoqlYDUfBUzBDIuXU22EJ7ys5T%2FT%2FaW9DLtQKKLbMrReZcFEB4wNpSdV%2FU9hclu50VGT86n4x7crIvjZOroOAB8klVvhIMVm05qodNvWCHGAeMAY19G1YMNXUhiyyErnN6KE1omTSVTgVttjENlQ9ACex6d9wKLjusRUyV0YaKGor8vVTYuhrt7c%2FZJS4bQFJv4aZhHgyZ%2FUZNGPlUG5MIHtkoJwG4bQo9Qyb1%2B3Y%2FNTGGJxoWrjQIzQQz6lUr%2FH4TRrl9hBbvp%2F1uzx3i4XBlKxcQ%2F3jZguwl8XDB4P7w7yaMr%2BNnGGXzYtnd3B%2Bj0qb%2B66apNfXI7lCpEjJ%2BY1Pc1IMtU95%2BiszqL3S2lx5ME82X19UEuhELfF0VUMaI7%2BgrTPJk6lBm%2FmcGssBbQu984DCGDXSeVxdex0T31XkokZbJ9a17mp3SF1IDiikzhsir%2FvFiSzTOi0MO3fWYQljRty7nwDWBOQjWkKRT%2BbQH4hab2q%2BzDbtIbqsudHdGQInDlL5F5xnE%2BNWQAO4WJFs0AlHRr7cCJii1LKpz1p2B7jZR8MMuqvsQGOqUB1MmkxkNffq67cl5lgxE%2FlkotFmGdjWepYsoXancwDj53zR2wZrU3PZjTybVgMpQJqSqj1nNK2FIkzIDj%2F1crMkUeUub5TjLak33uIkzKEo%2BQjyUjtBa9V8U6KrgYzxtZxUvAFJbseZnFYiz12QEY8yWjzbHI0Z%2BiRv%2B7%2BV%2F04d3%2Bx%2Fn%2FWK3KRMlWzNMz9FK%2F9%2BVfgp600zh%2FYo9%2F3HxtYE08rZl5&X-Amz-Signature=ced3ae822f05400e4c02b51b2ce016d8c3f6e6cac65af1a35bc712996a11c479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNBZ2P2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk%2B5PVXBfBkcQYa%2BCYLI02aM2ghulQda188xmvVrbPbAiEAmEK53I%2B0naFBaTmiOeLIM718EOEUQgvw0V726NvVtWkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOaz5BLRY%2FugkCFksCrcA3m4tCdP0v2ty5wPNprBUL2mzaioXyN94y8Ql%2Fp%2FMmEGOMblRDDdDkK9nHifZCpfMMf4wXtIaQ86ofoqlYDUfBUzBDIuXU22EJ7ys5T%2FT%2FaW9DLtQKKLbMrReZcFEB4wNpSdV%2FU9hclu50VGT86n4x7crIvjZOroOAB8klVvhIMVm05qodNvWCHGAeMAY19G1YMNXUhiyyErnN6KE1omTSVTgVttjENlQ9ACex6d9wKLjusRUyV0YaKGor8vVTYuhrt7c%2FZJS4bQFJv4aZhHgyZ%2FUZNGPlUG5MIHtkoJwG4bQo9Qyb1%2B3Y%2FNTGGJxoWrjQIzQQz6lUr%2FH4TRrl9hBbvp%2F1uzx3i4XBlKxcQ%2F3jZguwl8XDB4P7w7yaMr%2BNnGGXzYtnd3B%2Bj0qb%2B66apNfXI7lCpEjJ%2BY1Pc1IMtU95%2BiszqL3S2lx5ME82X19UEuhELfF0VUMaI7%2BgrTPJk6lBm%2FmcGssBbQu984DCGDXSeVxdex0T31XkokZbJ9a17mp3SF1IDiikzhsir%2FvFiSzTOi0MO3fWYQljRty7nwDWBOQjWkKRT%2BbQH4hab2q%2BzDbtIbqsudHdGQInDlL5F5xnE%2BNWQAO4WJFs0AlHRr7cCJii1LKpz1p2B7jZR8MMuqvsQGOqUB1MmkxkNffq67cl5lgxE%2FlkotFmGdjWepYsoXancwDj53zR2wZrU3PZjTybVgMpQJqSqj1nNK2FIkzIDj%2F1crMkUeUub5TjLak33uIkzKEo%2BQjyUjtBa9V8U6KrgYzxtZxUvAFJbseZnFYiz12QEY8yWjzbHI0Z%2BiRv%2B7%2BV%2F04d3%2Bx%2Fn%2FWK3KRMlWzNMz9FK%2F9%2BVfgp600zh%2FYo9%2F3HxtYE08rZl5&X-Amz-Signature=3cc44ff34451663747520598cdc433685f9e0598ed7d461e28d9e00b65229de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
