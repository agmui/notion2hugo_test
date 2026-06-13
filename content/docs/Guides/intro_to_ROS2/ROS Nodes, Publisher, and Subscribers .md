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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWAQUFHC%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC709eMC1Zhe19lMghCQ%2BOoEyIY74tWjZa0enfamuwGigIgMdR3u1HhX5b0bC6op71VP6%2F4GXZ7LQ669E0MVXpwS3Qq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMxwmhIkAB34TQy1nyrcA5RptpqG6NkHLavzzNfyZfxvfPLyT8IMWnfjvk%2FvbU5Se8BBg1zdtA73aQkK7MgCYeIlpgogcwS3m6ZCGgCiu2HC4%2BdWpB0QNj11egL0c9ICs%2FdffMjFmqBSmpIvvTB7Tf1v0iW93LHGJaBO8a9Yp%2F6mPTVdrZooCtd9f%2FIYB3t8xpZ3OCrPr7KDoQq8QN88d8IKFMuF9wHRxWONxuCV4TW%2B33BH1feRz6IFGHr7HJsOWgL4UVppXcEJZCa%2BXrgXkyJ8lM1KErm%2FoarE8TDw7nvTvcI06WkZDVFYKUjKNUuf1EHpNz8MjinpP%2B37yvhCT6cNVi5uSEfSzLJXwZqTXnLz1qXj%2BkF4BFCc1dwU3m3y%2FxTfEcOIfolKEu5WU5krR3lrI6qeu5y%2Bsil9Wz63MFbnzxidcpZGIkg5IOjoFIMw7zzv71W%2FzZAjlikwZOrmkkAc%2BMNrnYaELdIbSo3BJVIsBpPMNkWOSZmGsXaceHxCc7KrhKE5J%2FUkUnEy5Lee7xvqd68tEdVwNUqsDPhWw3f%2BnibGcpEprCkWWo1pMHIwujt7te5Uj9zsFfs9JlnHvHnK4g7eJL7CjmcDnPGBVTI8MnL8iG5VrT2FzFger2O4ZGvyupPC8ogXef1%2FMIf6stEGOqUBshj1FktMSb%2B3IhgB36a5ygzH2MYlzWOOFoFk0GQd7bv2zMs7Q8fglW6ZFaf1qi%2BQZJLGkgcHPY%2BAuKJCWKt09eGfCyzScVpOd4x3gJOnthHEnPJe9Rt3jZ7ioDn9DEk%2FfSn6mqurRc305wYEr0fIQGxOUtF%2BQHbnenGOExuYHuNgXa5%2Bmy7fkjzLoxX6bq%2FYhEYUgcXkwidGVRp%2BF4J1GFbt6E6j&X-Amz-Signature=6e4485ce1162f963faab41520270c08c36bb3582eae60bf89a417764b06fa252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWAQUFHC%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC709eMC1Zhe19lMghCQ%2BOoEyIY74tWjZa0enfamuwGigIgMdR3u1HhX5b0bC6op71VP6%2F4GXZ7LQ669E0MVXpwS3Qq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMxwmhIkAB34TQy1nyrcA5RptpqG6NkHLavzzNfyZfxvfPLyT8IMWnfjvk%2FvbU5Se8BBg1zdtA73aQkK7MgCYeIlpgogcwS3m6ZCGgCiu2HC4%2BdWpB0QNj11egL0c9ICs%2FdffMjFmqBSmpIvvTB7Tf1v0iW93LHGJaBO8a9Yp%2F6mPTVdrZooCtd9f%2FIYB3t8xpZ3OCrPr7KDoQq8QN88d8IKFMuF9wHRxWONxuCV4TW%2B33BH1feRz6IFGHr7HJsOWgL4UVppXcEJZCa%2BXrgXkyJ8lM1KErm%2FoarE8TDw7nvTvcI06WkZDVFYKUjKNUuf1EHpNz8MjinpP%2B37yvhCT6cNVi5uSEfSzLJXwZqTXnLz1qXj%2BkF4BFCc1dwU3m3y%2FxTfEcOIfolKEu5WU5krR3lrI6qeu5y%2Bsil9Wz63MFbnzxidcpZGIkg5IOjoFIMw7zzv71W%2FzZAjlikwZOrmkkAc%2BMNrnYaELdIbSo3BJVIsBpPMNkWOSZmGsXaceHxCc7KrhKE5J%2FUkUnEy5Lee7xvqd68tEdVwNUqsDPhWw3f%2BnibGcpEprCkWWo1pMHIwujt7te5Uj9zsFfs9JlnHvHnK4g7eJL7CjmcDnPGBVTI8MnL8iG5VrT2FzFger2O4ZGvyupPC8ogXef1%2FMIf6stEGOqUBshj1FktMSb%2B3IhgB36a5ygzH2MYlzWOOFoFk0GQd7bv2zMs7Q8fglW6ZFaf1qi%2BQZJLGkgcHPY%2BAuKJCWKt09eGfCyzScVpOd4x3gJOnthHEnPJe9Rt3jZ7ioDn9DEk%2FfSn6mqurRc305wYEr0fIQGxOUtF%2BQHbnenGOExuYHuNgXa5%2Bmy7fkjzLoxX6bq%2FYhEYUgcXkwidGVRp%2BF4J1GFbt6E6j&X-Amz-Signature=5bbb1df510e8908eb262125e8cf1aca5d9a589e4dc0ec090b1607050587ecbfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWAQUFHC%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC709eMC1Zhe19lMghCQ%2BOoEyIY74tWjZa0enfamuwGigIgMdR3u1HhX5b0bC6op71VP6%2F4GXZ7LQ669E0MVXpwS3Qq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMxwmhIkAB34TQy1nyrcA5RptpqG6NkHLavzzNfyZfxvfPLyT8IMWnfjvk%2FvbU5Se8BBg1zdtA73aQkK7MgCYeIlpgogcwS3m6ZCGgCiu2HC4%2BdWpB0QNj11egL0c9ICs%2FdffMjFmqBSmpIvvTB7Tf1v0iW93LHGJaBO8a9Yp%2F6mPTVdrZooCtd9f%2FIYB3t8xpZ3OCrPr7KDoQq8QN88d8IKFMuF9wHRxWONxuCV4TW%2B33BH1feRz6IFGHr7HJsOWgL4UVppXcEJZCa%2BXrgXkyJ8lM1KErm%2FoarE8TDw7nvTvcI06WkZDVFYKUjKNUuf1EHpNz8MjinpP%2B37yvhCT6cNVi5uSEfSzLJXwZqTXnLz1qXj%2BkF4BFCc1dwU3m3y%2FxTfEcOIfolKEu5WU5krR3lrI6qeu5y%2Bsil9Wz63MFbnzxidcpZGIkg5IOjoFIMw7zzv71W%2FzZAjlikwZOrmkkAc%2BMNrnYaELdIbSo3BJVIsBpPMNkWOSZmGsXaceHxCc7KrhKE5J%2FUkUnEy5Lee7xvqd68tEdVwNUqsDPhWw3f%2BnibGcpEprCkWWo1pMHIwujt7te5Uj9zsFfs9JlnHvHnK4g7eJL7CjmcDnPGBVTI8MnL8iG5VrT2FzFger2O4ZGvyupPC8ogXef1%2FMIf6stEGOqUBshj1FktMSb%2B3IhgB36a5ygzH2MYlzWOOFoFk0GQd7bv2zMs7Q8fglW6ZFaf1qi%2BQZJLGkgcHPY%2BAuKJCWKt09eGfCyzScVpOd4x3gJOnthHEnPJe9Rt3jZ7ioDn9DEk%2FfSn6mqurRc305wYEr0fIQGxOUtF%2BQHbnenGOExuYHuNgXa5%2Bmy7fkjzLoxX6bq%2FYhEYUgcXkwidGVRp%2BF4J1GFbt6E6j&X-Amz-Signature=354569c0e2e6d38a717e7ae31bc710d80c684c281f6fe7075e3b0608b350aae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWAQUFHC%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC709eMC1Zhe19lMghCQ%2BOoEyIY74tWjZa0enfamuwGigIgMdR3u1HhX5b0bC6op71VP6%2F4GXZ7LQ669E0MVXpwS3Qq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMxwmhIkAB34TQy1nyrcA5RptpqG6NkHLavzzNfyZfxvfPLyT8IMWnfjvk%2FvbU5Se8BBg1zdtA73aQkK7MgCYeIlpgogcwS3m6ZCGgCiu2HC4%2BdWpB0QNj11egL0c9ICs%2FdffMjFmqBSmpIvvTB7Tf1v0iW93LHGJaBO8a9Yp%2F6mPTVdrZooCtd9f%2FIYB3t8xpZ3OCrPr7KDoQq8QN88d8IKFMuF9wHRxWONxuCV4TW%2B33BH1feRz6IFGHr7HJsOWgL4UVppXcEJZCa%2BXrgXkyJ8lM1KErm%2FoarE8TDw7nvTvcI06WkZDVFYKUjKNUuf1EHpNz8MjinpP%2B37yvhCT6cNVi5uSEfSzLJXwZqTXnLz1qXj%2BkF4BFCc1dwU3m3y%2FxTfEcOIfolKEu5WU5krR3lrI6qeu5y%2Bsil9Wz63MFbnzxidcpZGIkg5IOjoFIMw7zzv71W%2FzZAjlikwZOrmkkAc%2BMNrnYaELdIbSo3BJVIsBpPMNkWOSZmGsXaceHxCc7KrhKE5J%2FUkUnEy5Lee7xvqd68tEdVwNUqsDPhWw3f%2BnibGcpEprCkWWo1pMHIwujt7te5Uj9zsFfs9JlnHvHnK4g7eJL7CjmcDnPGBVTI8MnL8iG5VrT2FzFger2O4ZGvyupPC8ogXef1%2FMIf6stEGOqUBshj1FktMSb%2B3IhgB36a5ygzH2MYlzWOOFoFk0GQd7bv2zMs7Q8fglW6ZFaf1qi%2BQZJLGkgcHPY%2BAuKJCWKt09eGfCyzScVpOd4x3gJOnthHEnPJe9Rt3jZ7ioDn9DEk%2FfSn6mqurRc305wYEr0fIQGxOUtF%2BQHbnenGOExuYHuNgXa5%2Bmy7fkjzLoxX6bq%2FYhEYUgcXkwidGVRp%2BF4J1GFbt6E6j&X-Amz-Signature=444ec6fad1ebef1a76210c8a47a3fe54f1bd68da76d65e62790a6c002b657f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWAQUFHC%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC709eMC1Zhe19lMghCQ%2BOoEyIY74tWjZa0enfamuwGigIgMdR3u1HhX5b0bC6op71VP6%2F4GXZ7LQ669E0MVXpwS3Qq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMxwmhIkAB34TQy1nyrcA5RptpqG6NkHLavzzNfyZfxvfPLyT8IMWnfjvk%2FvbU5Se8BBg1zdtA73aQkK7MgCYeIlpgogcwS3m6ZCGgCiu2HC4%2BdWpB0QNj11egL0c9ICs%2FdffMjFmqBSmpIvvTB7Tf1v0iW93LHGJaBO8a9Yp%2F6mPTVdrZooCtd9f%2FIYB3t8xpZ3OCrPr7KDoQq8QN88d8IKFMuF9wHRxWONxuCV4TW%2B33BH1feRz6IFGHr7HJsOWgL4UVppXcEJZCa%2BXrgXkyJ8lM1KErm%2FoarE8TDw7nvTvcI06WkZDVFYKUjKNUuf1EHpNz8MjinpP%2B37yvhCT6cNVi5uSEfSzLJXwZqTXnLz1qXj%2BkF4BFCc1dwU3m3y%2FxTfEcOIfolKEu5WU5krR3lrI6qeu5y%2Bsil9Wz63MFbnzxidcpZGIkg5IOjoFIMw7zzv71W%2FzZAjlikwZOrmkkAc%2BMNrnYaELdIbSo3BJVIsBpPMNkWOSZmGsXaceHxCc7KrhKE5J%2FUkUnEy5Lee7xvqd68tEdVwNUqsDPhWw3f%2BnibGcpEprCkWWo1pMHIwujt7te5Uj9zsFfs9JlnHvHnK4g7eJL7CjmcDnPGBVTI8MnL8iG5VrT2FzFger2O4ZGvyupPC8ogXef1%2FMIf6stEGOqUBshj1FktMSb%2B3IhgB36a5ygzH2MYlzWOOFoFk0GQd7bv2zMs7Q8fglW6ZFaf1qi%2BQZJLGkgcHPY%2BAuKJCWKt09eGfCyzScVpOd4x3gJOnthHEnPJe9Rt3jZ7ioDn9DEk%2FfSn6mqurRc305wYEr0fIQGxOUtF%2BQHbnenGOExuYHuNgXa5%2Bmy7fkjzLoxX6bq%2FYhEYUgcXkwidGVRp%2BF4J1GFbt6E6j&X-Amz-Signature=0cb6edceb03603349dc825dc72eb8a75b6ea578dbef75ed5142d1a18122ed0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWAQUFHC%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC709eMC1Zhe19lMghCQ%2BOoEyIY74tWjZa0enfamuwGigIgMdR3u1HhX5b0bC6op71VP6%2F4GXZ7LQ669E0MVXpwS3Qq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMxwmhIkAB34TQy1nyrcA5RptpqG6NkHLavzzNfyZfxvfPLyT8IMWnfjvk%2FvbU5Se8BBg1zdtA73aQkK7MgCYeIlpgogcwS3m6ZCGgCiu2HC4%2BdWpB0QNj11egL0c9ICs%2FdffMjFmqBSmpIvvTB7Tf1v0iW93LHGJaBO8a9Yp%2F6mPTVdrZooCtd9f%2FIYB3t8xpZ3OCrPr7KDoQq8QN88d8IKFMuF9wHRxWONxuCV4TW%2B33BH1feRz6IFGHr7HJsOWgL4UVppXcEJZCa%2BXrgXkyJ8lM1KErm%2FoarE8TDw7nvTvcI06WkZDVFYKUjKNUuf1EHpNz8MjinpP%2B37yvhCT6cNVi5uSEfSzLJXwZqTXnLz1qXj%2BkF4BFCc1dwU3m3y%2FxTfEcOIfolKEu5WU5krR3lrI6qeu5y%2Bsil9Wz63MFbnzxidcpZGIkg5IOjoFIMw7zzv71W%2FzZAjlikwZOrmkkAc%2BMNrnYaELdIbSo3BJVIsBpPMNkWOSZmGsXaceHxCc7KrhKE5J%2FUkUnEy5Lee7xvqd68tEdVwNUqsDPhWw3f%2BnibGcpEprCkWWo1pMHIwujt7te5Uj9zsFfs9JlnHvHnK4g7eJL7CjmcDnPGBVTI8MnL8iG5VrT2FzFger2O4ZGvyupPC8ogXef1%2FMIf6stEGOqUBshj1FktMSb%2B3IhgB36a5ygzH2MYlzWOOFoFk0GQd7bv2zMs7Q8fglW6ZFaf1qi%2BQZJLGkgcHPY%2BAuKJCWKt09eGfCyzScVpOd4x3gJOnthHEnPJe9Rt3jZ7ioDn9DEk%2FfSn6mqurRc305wYEr0fIQGxOUtF%2BQHbnenGOExuYHuNgXa5%2Bmy7fkjzLoxX6bq%2FYhEYUgcXkwidGVRp%2BF4J1GFbt6E6j&X-Amz-Signature=4fe221f9fb6f5c3cf2d8d607b31def392b4602ead1e8534c85f06506ca72adb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWAQUFHC%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC709eMC1Zhe19lMghCQ%2BOoEyIY74tWjZa0enfamuwGigIgMdR3u1HhX5b0bC6op71VP6%2F4GXZ7LQ669E0MVXpwS3Qq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMxwmhIkAB34TQy1nyrcA5RptpqG6NkHLavzzNfyZfxvfPLyT8IMWnfjvk%2FvbU5Se8BBg1zdtA73aQkK7MgCYeIlpgogcwS3m6ZCGgCiu2HC4%2BdWpB0QNj11egL0c9ICs%2FdffMjFmqBSmpIvvTB7Tf1v0iW93LHGJaBO8a9Yp%2F6mPTVdrZooCtd9f%2FIYB3t8xpZ3OCrPr7KDoQq8QN88d8IKFMuF9wHRxWONxuCV4TW%2B33BH1feRz6IFGHr7HJsOWgL4UVppXcEJZCa%2BXrgXkyJ8lM1KErm%2FoarE8TDw7nvTvcI06WkZDVFYKUjKNUuf1EHpNz8MjinpP%2B37yvhCT6cNVi5uSEfSzLJXwZqTXnLz1qXj%2BkF4BFCc1dwU3m3y%2FxTfEcOIfolKEu5WU5krR3lrI6qeu5y%2Bsil9Wz63MFbnzxidcpZGIkg5IOjoFIMw7zzv71W%2FzZAjlikwZOrmkkAc%2BMNrnYaELdIbSo3BJVIsBpPMNkWOSZmGsXaceHxCc7KrhKE5J%2FUkUnEy5Lee7xvqd68tEdVwNUqsDPhWw3f%2BnibGcpEprCkWWo1pMHIwujt7te5Uj9zsFfs9JlnHvHnK4g7eJL7CjmcDnPGBVTI8MnL8iG5VrT2FzFger2O4ZGvyupPC8ogXef1%2FMIf6stEGOqUBshj1FktMSb%2B3IhgB36a5ygzH2MYlzWOOFoFk0GQd7bv2zMs7Q8fglW6ZFaf1qi%2BQZJLGkgcHPY%2BAuKJCWKt09eGfCyzScVpOd4x3gJOnthHEnPJe9Rt3jZ7ioDn9DEk%2FfSn6mqurRc305wYEr0fIQGxOUtF%2BQHbnenGOExuYHuNgXa5%2Bmy7fkjzLoxX6bq%2FYhEYUgcXkwidGVRp%2BF4J1GFbt6E6j&X-Amz-Signature=ad212b4ae7661518302c5138842804b5cb0e232e4dd6ab0064151fbc4dee9d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWAQUFHC%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQC709eMC1Zhe19lMghCQ%2BOoEyIY74tWjZa0enfamuwGigIgMdR3u1HhX5b0bC6op71VP6%2F4GXZ7LQ669E0MVXpwS3Qq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMxwmhIkAB34TQy1nyrcA5RptpqG6NkHLavzzNfyZfxvfPLyT8IMWnfjvk%2FvbU5Se8BBg1zdtA73aQkK7MgCYeIlpgogcwS3m6ZCGgCiu2HC4%2BdWpB0QNj11egL0c9ICs%2FdffMjFmqBSmpIvvTB7Tf1v0iW93LHGJaBO8a9Yp%2F6mPTVdrZooCtd9f%2FIYB3t8xpZ3OCrPr7KDoQq8QN88d8IKFMuF9wHRxWONxuCV4TW%2B33BH1feRz6IFGHr7HJsOWgL4UVppXcEJZCa%2BXrgXkyJ8lM1KErm%2FoarE8TDw7nvTvcI06WkZDVFYKUjKNUuf1EHpNz8MjinpP%2B37yvhCT6cNVi5uSEfSzLJXwZqTXnLz1qXj%2BkF4BFCc1dwU3m3y%2FxTfEcOIfolKEu5WU5krR3lrI6qeu5y%2Bsil9Wz63MFbnzxidcpZGIkg5IOjoFIMw7zzv71W%2FzZAjlikwZOrmkkAc%2BMNrnYaELdIbSo3BJVIsBpPMNkWOSZmGsXaceHxCc7KrhKE5J%2FUkUnEy5Lee7xvqd68tEdVwNUqsDPhWw3f%2BnibGcpEprCkWWo1pMHIwujt7te5Uj9zsFfs9JlnHvHnK4g7eJL7CjmcDnPGBVTI8MnL8iG5VrT2FzFger2O4ZGvyupPC8ogXef1%2FMIf6stEGOqUBshj1FktMSb%2B3IhgB36a5ygzH2MYlzWOOFoFk0GQd7bv2zMs7Q8fglW6ZFaf1qi%2BQZJLGkgcHPY%2BAuKJCWKt09eGfCyzScVpOd4x3gJOnthHEnPJe9Rt3jZ7ioDn9DEk%2FfSn6mqurRc305wYEr0fIQGxOUtF%2BQHbnenGOExuYHuNgXa5%2Bmy7fkjzLoxX6bq%2FYhEYUgcXkwidGVRp%2BF4J1GFbt6E6j&X-Amz-Signature=7180a8bb849039789fc7a69d16b2232274b7d7e5099552a91333a74276bc8205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
