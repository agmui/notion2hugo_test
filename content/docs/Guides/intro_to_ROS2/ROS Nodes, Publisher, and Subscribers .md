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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPZGGWH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxE2nOY3bR3O1eDQwz%2BXMd2SGwOEilVRtOdBr0ASD1LgIgLf0izu0aXaDE3KWR9GscL%2BYoReCDNJJ9D0%2FfW03ibIwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG8cpkEurJy3hjr%2BwCrcA%2BEw2Rw23swW%2BtnbkxFCADTiYG90LiWm6VjvLzb8lLCv0wAjjssOCHuKVvVlx2QFyQuOG%2FaWpQQuMOYpIt92Rpgqfq8Yw0CkjdQZirvOkCowI2g4n5W8efC1BuPhTE114mmdz3MAfRccxYnuRFO0Y0ZOZ7f%2Fq6UyWjqwRcRws58krryk2U%2BChiJNqmLVUeQxsq4CGURBSQvVTJzWvnQf0MqB7GRfF1YYHNseRqDAggDG%2BBnZM0KO4im1WgCphQ0VgcG%2FKyi6Hqyf6%2FKDNMpndrSPdwXHrVf0XwwBiXpn%2B5UU7g0bIDP%2Fcwm4Nd8kJSiFDpiw1C%2BQdEoom6lwbCYfEw20ebkQU0PN98DWM3uw%2BW5cp4TrnwDlcfObUVcKhINAQJlapMuf26bzYbD369iO0mCqMwPRYAnZ20LHv9samKVNm6zydEvPiTK4S7XWCfPpkhLziF5RMwX%2Fyw0MhqsjW8H2MT%2FPvRKLIEgA1YeNTvw9dM1kGMwsl2DJ%2Fk9HubktcRFK%2Fj6c5uAFizT3VKlW6e%2FxsquYO%2FjtIykBh8U4a3EQ0cWuMn38TEomd%2Ba44YOtdr47VFaj7Hm4FeHF98bUMchPVCIZ5NzBFrU5zk2Pu9%2BoLjqjIqWD7rpFgQvgMIqW4sAGOqUBrq8y6fqcHn%2FULPzJ%2FbNBSLU1WW1KUOKsHMAU0eQy2DdwR36zb5Rc0YUX46zxy6%2FKe4ckgUP0dXhxVRMpUoNuVQfh%2Fcz%2Bc5ixJLWH1DWlKUx7ZfZkZ2BXnB1pVst4QDNH44FQAThENYWCr%2BHml0p9RrHvMW8SlkHYMas2IOBZLeYvxn8bT9bsbJBfKkpUeSoBxZV7Vg7pMvRwIIBxXgHQoGyrk8xA&X-Amz-Signature=944dadb31a909803008393d1cce103def4ada823f058c99682f830ea7c5b9e94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPZGGWH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxE2nOY3bR3O1eDQwz%2BXMd2SGwOEilVRtOdBr0ASD1LgIgLf0izu0aXaDE3KWR9GscL%2BYoReCDNJJ9D0%2FfW03ibIwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG8cpkEurJy3hjr%2BwCrcA%2BEw2Rw23swW%2BtnbkxFCADTiYG90LiWm6VjvLzb8lLCv0wAjjssOCHuKVvVlx2QFyQuOG%2FaWpQQuMOYpIt92Rpgqfq8Yw0CkjdQZirvOkCowI2g4n5W8efC1BuPhTE114mmdz3MAfRccxYnuRFO0Y0ZOZ7f%2Fq6UyWjqwRcRws58krryk2U%2BChiJNqmLVUeQxsq4CGURBSQvVTJzWvnQf0MqB7GRfF1YYHNseRqDAggDG%2BBnZM0KO4im1WgCphQ0VgcG%2FKyi6Hqyf6%2FKDNMpndrSPdwXHrVf0XwwBiXpn%2B5UU7g0bIDP%2Fcwm4Nd8kJSiFDpiw1C%2BQdEoom6lwbCYfEw20ebkQU0PN98DWM3uw%2BW5cp4TrnwDlcfObUVcKhINAQJlapMuf26bzYbD369iO0mCqMwPRYAnZ20LHv9samKVNm6zydEvPiTK4S7XWCfPpkhLziF5RMwX%2Fyw0MhqsjW8H2MT%2FPvRKLIEgA1YeNTvw9dM1kGMwsl2DJ%2Fk9HubktcRFK%2Fj6c5uAFizT3VKlW6e%2FxsquYO%2FjtIykBh8U4a3EQ0cWuMn38TEomd%2Ba44YOtdr47VFaj7Hm4FeHF98bUMchPVCIZ5NzBFrU5zk2Pu9%2BoLjqjIqWD7rpFgQvgMIqW4sAGOqUBrq8y6fqcHn%2FULPzJ%2FbNBSLU1WW1KUOKsHMAU0eQy2DdwR36zb5Rc0YUX46zxy6%2FKe4ckgUP0dXhxVRMpUoNuVQfh%2Fcz%2Bc5ixJLWH1DWlKUx7ZfZkZ2BXnB1pVst4QDNH44FQAThENYWCr%2BHml0p9RrHvMW8SlkHYMas2IOBZLeYvxn8bT9bsbJBfKkpUeSoBxZV7Vg7pMvRwIIBxXgHQoGyrk8xA&X-Amz-Signature=49051009cb70a04c6b8e61de57f9a400f5f79428a0b9501fe19a975d0bb35992&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPZGGWH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxE2nOY3bR3O1eDQwz%2BXMd2SGwOEilVRtOdBr0ASD1LgIgLf0izu0aXaDE3KWR9GscL%2BYoReCDNJJ9D0%2FfW03ibIwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG8cpkEurJy3hjr%2BwCrcA%2BEw2Rw23swW%2BtnbkxFCADTiYG90LiWm6VjvLzb8lLCv0wAjjssOCHuKVvVlx2QFyQuOG%2FaWpQQuMOYpIt92Rpgqfq8Yw0CkjdQZirvOkCowI2g4n5W8efC1BuPhTE114mmdz3MAfRccxYnuRFO0Y0ZOZ7f%2Fq6UyWjqwRcRws58krryk2U%2BChiJNqmLVUeQxsq4CGURBSQvVTJzWvnQf0MqB7GRfF1YYHNseRqDAggDG%2BBnZM0KO4im1WgCphQ0VgcG%2FKyi6Hqyf6%2FKDNMpndrSPdwXHrVf0XwwBiXpn%2B5UU7g0bIDP%2Fcwm4Nd8kJSiFDpiw1C%2BQdEoom6lwbCYfEw20ebkQU0PN98DWM3uw%2BW5cp4TrnwDlcfObUVcKhINAQJlapMuf26bzYbD369iO0mCqMwPRYAnZ20LHv9samKVNm6zydEvPiTK4S7XWCfPpkhLziF5RMwX%2Fyw0MhqsjW8H2MT%2FPvRKLIEgA1YeNTvw9dM1kGMwsl2DJ%2Fk9HubktcRFK%2Fj6c5uAFizT3VKlW6e%2FxsquYO%2FjtIykBh8U4a3EQ0cWuMn38TEomd%2Ba44YOtdr47VFaj7Hm4FeHF98bUMchPVCIZ5NzBFrU5zk2Pu9%2BoLjqjIqWD7rpFgQvgMIqW4sAGOqUBrq8y6fqcHn%2FULPzJ%2FbNBSLU1WW1KUOKsHMAU0eQy2DdwR36zb5Rc0YUX46zxy6%2FKe4ckgUP0dXhxVRMpUoNuVQfh%2Fcz%2Bc5ixJLWH1DWlKUx7ZfZkZ2BXnB1pVst4QDNH44FQAThENYWCr%2BHml0p9RrHvMW8SlkHYMas2IOBZLeYvxn8bT9bsbJBfKkpUeSoBxZV7Vg7pMvRwIIBxXgHQoGyrk8xA&X-Amz-Signature=8bb43b8ea6412767b0d0cb8395b6af5da1663217fe2870c7d6e84655883594ed&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPZGGWH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxE2nOY3bR3O1eDQwz%2BXMd2SGwOEilVRtOdBr0ASD1LgIgLf0izu0aXaDE3KWR9GscL%2BYoReCDNJJ9D0%2FfW03ibIwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG8cpkEurJy3hjr%2BwCrcA%2BEw2Rw23swW%2BtnbkxFCADTiYG90LiWm6VjvLzb8lLCv0wAjjssOCHuKVvVlx2QFyQuOG%2FaWpQQuMOYpIt92Rpgqfq8Yw0CkjdQZirvOkCowI2g4n5W8efC1BuPhTE114mmdz3MAfRccxYnuRFO0Y0ZOZ7f%2Fq6UyWjqwRcRws58krryk2U%2BChiJNqmLVUeQxsq4CGURBSQvVTJzWvnQf0MqB7GRfF1YYHNseRqDAggDG%2BBnZM0KO4im1WgCphQ0VgcG%2FKyi6Hqyf6%2FKDNMpndrSPdwXHrVf0XwwBiXpn%2B5UU7g0bIDP%2Fcwm4Nd8kJSiFDpiw1C%2BQdEoom6lwbCYfEw20ebkQU0PN98DWM3uw%2BW5cp4TrnwDlcfObUVcKhINAQJlapMuf26bzYbD369iO0mCqMwPRYAnZ20LHv9samKVNm6zydEvPiTK4S7XWCfPpkhLziF5RMwX%2Fyw0MhqsjW8H2MT%2FPvRKLIEgA1YeNTvw9dM1kGMwsl2DJ%2Fk9HubktcRFK%2Fj6c5uAFizT3VKlW6e%2FxsquYO%2FjtIykBh8U4a3EQ0cWuMn38TEomd%2Ba44YOtdr47VFaj7Hm4FeHF98bUMchPVCIZ5NzBFrU5zk2Pu9%2BoLjqjIqWD7rpFgQvgMIqW4sAGOqUBrq8y6fqcHn%2FULPzJ%2FbNBSLU1WW1KUOKsHMAU0eQy2DdwR36zb5Rc0YUX46zxy6%2FKe4ckgUP0dXhxVRMpUoNuVQfh%2Fcz%2Bc5ixJLWH1DWlKUx7ZfZkZ2BXnB1pVst4QDNH44FQAThENYWCr%2BHml0p9RrHvMW8SlkHYMas2IOBZLeYvxn8bT9bsbJBfKkpUeSoBxZV7Vg7pMvRwIIBxXgHQoGyrk8xA&X-Amz-Signature=9b5e36508cf1414433d7101a36a62f570ce9a875cddce93351faae26bde3e002&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPZGGWH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxE2nOY3bR3O1eDQwz%2BXMd2SGwOEilVRtOdBr0ASD1LgIgLf0izu0aXaDE3KWR9GscL%2BYoReCDNJJ9D0%2FfW03ibIwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG8cpkEurJy3hjr%2BwCrcA%2BEw2Rw23swW%2BtnbkxFCADTiYG90LiWm6VjvLzb8lLCv0wAjjssOCHuKVvVlx2QFyQuOG%2FaWpQQuMOYpIt92Rpgqfq8Yw0CkjdQZirvOkCowI2g4n5W8efC1BuPhTE114mmdz3MAfRccxYnuRFO0Y0ZOZ7f%2Fq6UyWjqwRcRws58krryk2U%2BChiJNqmLVUeQxsq4CGURBSQvVTJzWvnQf0MqB7GRfF1YYHNseRqDAggDG%2BBnZM0KO4im1WgCphQ0VgcG%2FKyi6Hqyf6%2FKDNMpndrSPdwXHrVf0XwwBiXpn%2B5UU7g0bIDP%2Fcwm4Nd8kJSiFDpiw1C%2BQdEoom6lwbCYfEw20ebkQU0PN98DWM3uw%2BW5cp4TrnwDlcfObUVcKhINAQJlapMuf26bzYbD369iO0mCqMwPRYAnZ20LHv9samKVNm6zydEvPiTK4S7XWCfPpkhLziF5RMwX%2Fyw0MhqsjW8H2MT%2FPvRKLIEgA1YeNTvw9dM1kGMwsl2DJ%2Fk9HubktcRFK%2Fj6c5uAFizT3VKlW6e%2FxsquYO%2FjtIykBh8U4a3EQ0cWuMn38TEomd%2Ba44YOtdr47VFaj7Hm4FeHF98bUMchPVCIZ5NzBFrU5zk2Pu9%2BoLjqjIqWD7rpFgQvgMIqW4sAGOqUBrq8y6fqcHn%2FULPzJ%2FbNBSLU1WW1KUOKsHMAU0eQy2DdwR36zb5Rc0YUX46zxy6%2FKe4ckgUP0dXhxVRMpUoNuVQfh%2Fcz%2Bc5ixJLWH1DWlKUx7ZfZkZ2BXnB1pVst4QDNH44FQAThENYWCr%2BHml0p9RrHvMW8SlkHYMas2IOBZLeYvxn8bT9bsbJBfKkpUeSoBxZV7Vg7pMvRwIIBxXgHQoGyrk8xA&X-Amz-Signature=75013307d1da0d90c9aa48d2026fcdc3a7f6b6273788959103085b38169924e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPZGGWH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxE2nOY3bR3O1eDQwz%2BXMd2SGwOEilVRtOdBr0ASD1LgIgLf0izu0aXaDE3KWR9GscL%2BYoReCDNJJ9D0%2FfW03ibIwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG8cpkEurJy3hjr%2BwCrcA%2BEw2Rw23swW%2BtnbkxFCADTiYG90LiWm6VjvLzb8lLCv0wAjjssOCHuKVvVlx2QFyQuOG%2FaWpQQuMOYpIt92Rpgqfq8Yw0CkjdQZirvOkCowI2g4n5W8efC1BuPhTE114mmdz3MAfRccxYnuRFO0Y0ZOZ7f%2Fq6UyWjqwRcRws58krryk2U%2BChiJNqmLVUeQxsq4CGURBSQvVTJzWvnQf0MqB7GRfF1YYHNseRqDAggDG%2BBnZM0KO4im1WgCphQ0VgcG%2FKyi6Hqyf6%2FKDNMpndrSPdwXHrVf0XwwBiXpn%2B5UU7g0bIDP%2Fcwm4Nd8kJSiFDpiw1C%2BQdEoom6lwbCYfEw20ebkQU0PN98DWM3uw%2BW5cp4TrnwDlcfObUVcKhINAQJlapMuf26bzYbD369iO0mCqMwPRYAnZ20LHv9samKVNm6zydEvPiTK4S7XWCfPpkhLziF5RMwX%2Fyw0MhqsjW8H2MT%2FPvRKLIEgA1YeNTvw9dM1kGMwsl2DJ%2Fk9HubktcRFK%2Fj6c5uAFizT3VKlW6e%2FxsquYO%2FjtIykBh8U4a3EQ0cWuMn38TEomd%2Ba44YOtdr47VFaj7Hm4FeHF98bUMchPVCIZ5NzBFrU5zk2Pu9%2BoLjqjIqWD7rpFgQvgMIqW4sAGOqUBrq8y6fqcHn%2FULPzJ%2FbNBSLU1WW1KUOKsHMAU0eQy2DdwR36zb5Rc0YUX46zxy6%2FKe4ckgUP0dXhxVRMpUoNuVQfh%2Fcz%2Bc5ixJLWH1DWlKUx7ZfZkZ2BXnB1pVst4QDNH44FQAThENYWCr%2BHml0p9RrHvMW8SlkHYMas2IOBZLeYvxn8bT9bsbJBfKkpUeSoBxZV7Vg7pMvRwIIBxXgHQoGyrk8xA&X-Amz-Signature=48e60a89d4148f154a65b08a77423cf5ecbc5b3452ddb9b95f30e96efc126381&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPZGGWH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxE2nOY3bR3O1eDQwz%2BXMd2SGwOEilVRtOdBr0ASD1LgIgLf0izu0aXaDE3KWR9GscL%2BYoReCDNJJ9D0%2FfW03ibIwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG8cpkEurJy3hjr%2BwCrcA%2BEw2Rw23swW%2BtnbkxFCADTiYG90LiWm6VjvLzb8lLCv0wAjjssOCHuKVvVlx2QFyQuOG%2FaWpQQuMOYpIt92Rpgqfq8Yw0CkjdQZirvOkCowI2g4n5W8efC1BuPhTE114mmdz3MAfRccxYnuRFO0Y0ZOZ7f%2Fq6UyWjqwRcRws58krryk2U%2BChiJNqmLVUeQxsq4CGURBSQvVTJzWvnQf0MqB7GRfF1YYHNseRqDAggDG%2BBnZM0KO4im1WgCphQ0VgcG%2FKyi6Hqyf6%2FKDNMpndrSPdwXHrVf0XwwBiXpn%2B5UU7g0bIDP%2Fcwm4Nd8kJSiFDpiw1C%2BQdEoom6lwbCYfEw20ebkQU0PN98DWM3uw%2BW5cp4TrnwDlcfObUVcKhINAQJlapMuf26bzYbD369iO0mCqMwPRYAnZ20LHv9samKVNm6zydEvPiTK4S7XWCfPpkhLziF5RMwX%2Fyw0MhqsjW8H2MT%2FPvRKLIEgA1YeNTvw9dM1kGMwsl2DJ%2Fk9HubktcRFK%2Fj6c5uAFizT3VKlW6e%2FxsquYO%2FjtIykBh8U4a3EQ0cWuMn38TEomd%2Ba44YOtdr47VFaj7Hm4FeHF98bUMchPVCIZ5NzBFrU5zk2Pu9%2BoLjqjIqWD7rpFgQvgMIqW4sAGOqUBrq8y6fqcHn%2FULPzJ%2FbNBSLU1WW1KUOKsHMAU0eQy2DdwR36zb5Rc0YUX46zxy6%2FKe4ckgUP0dXhxVRMpUoNuVQfh%2Fcz%2Bc5ixJLWH1DWlKUx7ZfZkZ2BXnB1pVst4QDNH44FQAThENYWCr%2BHml0p9RrHvMW8SlkHYMas2IOBZLeYvxn8bT9bsbJBfKkpUeSoBxZV7Vg7pMvRwIIBxXgHQoGyrk8xA&X-Amz-Signature=ac4e5a0656e05537b4a8f921f3f6987240fe042729529f6ca1082166d3f3edbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPZGGWH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxE2nOY3bR3O1eDQwz%2BXMd2SGwOEilVRtOdBr0ASD1LgIgLf0izu0aXaDE3KWR9GscL%2BYoReCDNJJ9D0%2FfW03ibIwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG8cpkEurJy3hjr%2BwCrcA%2BEw2Rw23swW%2BtnbkxFCADTiYG90LiWm6VjvLzb8lLCv0wAjjssOCHuKVvVlx2QFyQuOG%2FaWpQQuMOYpIt92Rpgqfq8Yw0CkjdQZirvOkCowI2g4n5W8efC1BuPhTE114mmdz3MAfRccxYnuRFO0Y0ZOZ7f%2Fq6UyWjqwRcRws58krryk2U%2BChiJNqmLVUeQxsq4CGURBSQvVTJzWvnQf0MqB7GRfF1YYHNseRqDAggDG%2BBnZM0KO4im1WgCphQ0VgcG%2FKyi6Hqyf6%2FKDNMpndrSPdwXHrVf0XwwBiXpn%2B5UU7g0bIDP%2Fcwm4Nd8kJSiFDpiw1C%2BQdEoom6lwbCYfEw20ebkQU0PN98DWM3uw%2BW5cp4TrnwDlcfObUVcKhINAQJlapMuf26bzYbD369iO0mCqMwPRYAnZ20LHv9samKVNm6zydEvPiTK4S7XWCfPpkhLziF5RMwX%2Fyw0MhqsjW8H2MT%2FPvRKLIEgA1YeNTvw9dM1kGMwsl2DJ%2Fk9HubktcRFK%2Fj6c5uAFizT3VKlW6e%2FxsquYO%2FjtIykBh8U4a3EQ0cWuMn38TEomd%2Ba44YOtdr47VFaj7Hm4FeHF98bUMchPVCIZ5NzBFrU5zk2Pu9%2BoLjqjIqWD7rpFgQvgMIqW4sAGOqUBrq8y6fqcHn%2FULPzJ%2FbNBSLU1WW1KUOKsHMAU0eQy2DdwR36zb5Rc0YUX46zxy6%2FKe4ckgUP0dXhxVRMpUoNuVQfh%2Fcz%2Bc5ixJLWH1DWlKUx7ZfZkZ2BXnB1pVst4QDNH44FQAThENYWCr%2BHml0p9RrHvMW8SlkHYMas2IOBZLeYvxn8bT9bsbJBfKkpUeSoBxZV7Vg7pMvRwIIBxXgHQoGyrk8xA&X-Amz-Signature=bfe48d809399b81b76c341400603c1e28addad46b856c0e3fd1d0a385b88c42d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
