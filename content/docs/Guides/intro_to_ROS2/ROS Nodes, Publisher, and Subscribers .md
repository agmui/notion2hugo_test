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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORXAEQ5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1wIJGAHo7CnbYRQj%2Fh65Ae3%2F%2FaUsH%2FWmBGNmWcqCygIgDMTqJcmDO6kGtIyuHVvSEQDh%2B4ZNhBsuhEDGu8Kn0DgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BKEHsAkBcTUFMU0yrcA5nNWDjHhkM4IDhhSjCbBfaP2SQG1XVbQV%2FJ7S%2Fd8l%2Bsvkvz9Bz1NbNtzfcNf21%2FxV0Z1gCVzU6soPtUaqMz6GHnt6Nhnd5dNbQYAKG4lZCWppk9QHA%2BDmbSSm8ptgdVQazu66ojb%2Bpp1jBVq03goU%2Fe8H9prTdRjLREyAxdNM0bh0k%2BQrrybJG8a9Ii5EKUbkU2DlvwcTgNSK%2BDV0x%2BZyG5dWERkHq1kubauCqK7n3Hjb47%2F3yJBqA6ySruqLk6bHOLcqNdN06jr3gMv4p0IYvIhCL0YDFUs3%2FMmyd7wyC9qTylK3I%2BKYy2U9D8pw%2BZbS17%2BI%2BD11ICu3ttIa9NMhJWvwAm5RPPjr91l9fqOPUCkzJ5E0IKP2G8jxkfQGFI5ifVz3CMKwDlMO225qI0LSl4JaRWz%2FxuwAdOSlccQUhCD5aEnLODe3MEj0FwwSaOIGzliPkQp22znNb3t2SeWuEv1%2BMtzlPfeprsO8P78hM0as7yh%2BrrDwFkZAqCec1IU1MMri5%2BKVuU06%2FHMcLYLoJRAAlq8mf5IHADwVp8sHEERRzpTQGJHCEpHu4qO%2BV09IRLb4fFJ%2FOuWQ5ahYEd6pUHNEZ7qTLz4O1ijQ%2B1bk%2FIY67Kq7VAMuo2h4zIMJ6Y%2FcAGOqUB0vtaaGAxfsutaOfvbO6zHIJR6ek7zdLwmre35h2Wq2TvSX7dAi506%2F643I0ivpqJX8KWtal7ZNHSinnhr9dbu75nj5amuYSYUCttwE1qp0CPWpAQaBiTvph4XoAoFnzTH2Q2zwebjgXCguXZEqrGKLlHVmjFnu6m4sf49JDP9Uc%2FzH8yVOW8CRPoNCfHxdP7fgRMCXBZnITpwi19DZWV6G%2BzDRke&X-Amz-Signature=3147a0b905d2357c9bda327f56e42c71d2d7b615d968473e5feffc519d15d1c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORXAEQ5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1wIJGAHo7CnbYRQj%2Fh65Ae3%2F%2FaUsH%2FWmBGNmWcqCygIgDMTqJcmDO6kGtIyuHVvSEQDh%2B4ZNhBsuhEDGu8Kn0DgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BKEHsAkBcTUFMU0yrcA5nNWDjHhkM4IDhhSjCbBfaP2SQG1XVbQV%2FJ7S%2Fd8l%2Bsvkvz9Bz1NbNtzfcNf21%2FxV0Z1gCVzU6soPtUaqMz6GHnt6Nhnd5dNbQYAKG4lZCWppk9QHA%2BDmbSSm8ptgdVQazu66ojb%2Bpp1jBVq03goU%2Fe8H9prTdRjLREyAxdNM0bh0k%2BQrrybJG8a9Ii5EKUbkU2DlvwcTgNSK%2BDV0x%2BZyG5dWERkHq1kubauCqK7n3Hjb47%2F3yJBqA6ySruqLk6bHOLcqNdN06jr3gMv4p0IYvIhCL0YDFUs3%2FMmyd7wyC9qTylK3I%2BKYy2U9D8pw%2BZbS17%2BI%2BD11ICu3ttIa9NMhJWvwAm5RPPjr91l9fqOPUCkzJ5E0IKP2G8jxkfQGFI5ifVz3CMKwDlMO225qI0LSl4JaRWz%2FxuwAdOSlccQUhCD5aEnLODe3MEj0FwwSaOIGzliPkQp22znNb3t2SeWuEv1%2BMtzlPfeprsO8P78hM0as7yh%2BrrDwFkZAqCec1IU1MMri5%2BKVuU06%2FHMcLYLoJRAAlq8mf5IHADwVp8sHEERRzpTQGJHCEpHu4qO%2BV09IRLb4fFJ%2FOuWQ5ahYEd6pUHNEZ7qTLz4O1ijQ%2B1bk%2FIY67Kq7VAMuo2h4zIMJ6Y%2FcAGOqUB0vtaaGAxfsutaOfvbO6zHIJR6ek7zdLwmre35h2Wq2TvSX7dAi506%2F643I0ivpqJX8KWtal7ZNHSinnhr9dbu75nj5amuYSYUCttwE1qp0CPWpAQaBiTvph4XoAoFnzTH2Q2zwebjgXCguXZEqrGKLlHVmjFnu6m4sf49JDP9Uc%2FzH8yVOW8CRPoNCfHxdP7fgRMCXBZnITpwi19DZWV6G%2BzDRke&X-Amz-Signature=04837fcf4e919980a016b6b56b207bce1bbb4b92162c915b3e119c4c85c4f128&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORXAEQ5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1wIJGAHo7CnbYRQj%2Fh65Ae3%2F%2FaUsH%2FWmBGNmWcqCygIgDMTqJcmDO6kGtIyuHVvSEQDh%2B4ZNhBsuhEDGu8Kn0DgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BKEHsAkBcTUFMU0yrcA5nNWDjHhkM4IDhhSjCbBfaP2SQG1XVbQV%2FJ7S%2Fd8l%2Bsvkvz9Bz1NbNtzfcNf21%2FxV0Z1gCVzU6soPtUaqMz6GHnt6Nhnd5dNbQYAKG4lZCWppk9QHA%2BDmbSSm8ptgdVQazu66ojb%2Bpp1jBVq03goU%2Fe8H9prTdRjLREyAxdNM0bh0k%2BQrrybJG8a9Ii5EKUbkU2DlvwcTgNSK%2BDV0x%2BZyG5dWERkHq1kubauCqK7n3Hjb47%2F3yJBqA6ySruqLk6bHOLcqNdN06jr3gMv4p0IYvIhCL0YDFUs3%2FMmyd7wyC9qTylK3I%2BKYy2U9D8pw%2BZbS17%2BI%2BD11ICu3ttIa9NMhJWvwAm5RPPjr91l9fqOPUCkzJ5E0IKP2G8jxkfQGFI5ifVz3CMKwDlMO225qI0LSl4JaRWz%2FxuwAdOSlccQUhCD5aEnLODe3MEj0FwwSaOIGzliPkQp22znNb3t2SeWuEv1%2BMtzlPfeprsO8P78hM0as7yh%2BrrDwFkZAqCec1IU1MMri5%2BKVuU06%2FHMcLYLoJRAAlq8mf5IHADwVp8sHEERRzpTQGJHCEpHu4qO%2BV09IRLb4fFJ%2FOuWQ5ahYEd6pUHNEZ7qTLz4O1ijQ%2B1bk%2FIY67Kq7VAMuo2h4zIMJ6Y%2FcAGOqUB0vtaaGAxfsutaOfvbO6zHIJR6ek7zdLwmre35h2Wq2TvSX7dAi506%2F643I0ivpqJX8KWtal7ZNHSinnhr9dbu75nj5amuYSYUCttwE1qp0CPWpAQaBiTvph4XoAoFnzTH2Q2zwebjgXCguXZEqrGKLlHVmjFnu6m4sf49JDP9Uc%2FzH8yVOW8CRPoNCfHxdP7fgRMCXBZnITpwi19DZWV6G%2BzDRke&X-Amz-Signature=b6583332fa3b01c97c2033a567cc5f74782fa962e00356849bde8053f5e4aa12&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORXAEQ5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1wIJGAHo7CnbYRQj%2Fh65Ae3%2F%2FaUsH%2FWmBGNmWcqCygIgDMTqJcmDO6kGtIyuHVvSEQDh%2B4ZNhBsuhEDGu8Kn0DgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BKEHsAkBcTUFMU0yrcA5nNWDjHhkM4IDhhSjCbBfaP2SQG1XVbQV%2FJ7S%2Fd8l%2Bsvkvz9Bz1NbNtzfcNf21%2FxV0Z1gCVzU6soPtUaqMz6GHnt6Nhnd5dNbQYAKG4lZCWppk9QHA%2BDmbSSm8ptgdVQazu66ojb%2Bpp1jBVq03goU%2Fe8H9prTdRjLREyAxdNM0bh0k%2BQrrybJG8a9Ii5EKUbkU2DlvwcTgNSK%2BDV0x%2BZyG5dWERkHq1kubauCqK7n3Hjb47%2F3yJBqA6ySruqLk6bHOLcqNdN06jr3gMv4p0IYvIhCL0YDFUs3%2FMmyd7wyC9qTylK3I%2BKYy2U9D8pw%2BZbS17%2BI%2BD11ICu3ttIa9NMhJWvwAm5RPPjr91l9fqOPUCkzJ5E0IKP2G8jxkfQGFI5ifVz3CMKwDlMO225qI0LSl4JaRWz%2FxuwAdOSlccQUhCD5aEnLODe3MEj0FwwSaOIGzliPkQp22znNb3t2SeWuEv1%2BMtzlPfeprsO8P78hM0as7yh%2BrrDwFkZAqCec1IU1MMri5%2BKVuU06%2FHMcLYLoJRAAlq8mf5IHADwVp8sHEERRzpTQGJHCEpHu4qO%2BV09IRLb4fFJ%2FOuWQ5ahYEd6pUHNEZ7qTLz4O1ijQ%2B1bk%2FIY67Kq7VAMuo2h4zIMJ6Y%2FcAGOqUB0vtaaGAxfsutaOfvbO6zHIJR6ek7zdLwmre35h2Wq2TvSX7dAi506%2F643I0ivpqJX8KWtal7ZNHSinnhr9dbu75nj5amuYSYUCttwE1qp0CPWpAQaBiTvph4XoAoFnzTH2Q2zwebjgXCguXZEqrGKLlHVmjFnu6m4sf49JDP9Uc%2FzH8yVOW8CRPoNCfHxdP7fgRMCXBZnITpwi19DZWV6G%2BzDRke&X-Amz-Signature=7a66c23ff3f4a0c2167a46750a0977b36fd780b96d7b72b76475757b23ef2216&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORXAEQ5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1wIJGAHo7CnbYRQj%2Fh65Ae3%2F%2FaUsH%2FWmBGNmWcqCygIgDMTqJcmDO6kGtIyuHVvSEQDh%2B4ZNhBsuhEDGu8Kn0DgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BKEHsAkBcTUFMU0yrcA5nNWDjHhkM4IDhhSjCbBfaP2SQG1XVbQV%2FJ7S%2Fd8l%2Bsvkvz9Bz1NbNtzfcNf21%2FxV0Z1gCVzU6soPtUaqMz6GHnt6Nhnd5dNbQYAKG4lZCWppk9QHA%2BDmbSSm8ptgdVQazu66ojb%2Bpp1jBVq03goU%2Fe8H9prTdRjLREyAxdNM0bh0k%2BQrrybJG8a9Ii5EKUbkU2DlvwcTgNSK%2BDV0x%2BZyG5dWERkHq1kubauCqK7n3Hjb47%2F3yJBqA6ySruqLk6bHOLcqNdN06jr3gMv4p0IYvIhCL0YDFUs3%2FMmyd7wyC9qTylK3I%2BKYy2U9D8pw%2BZbS17%2BI%2BD11ICu3ttIa9NMhJWvwAm5RPPjr91l9fqOPUCkzJ5E0IKP2G8jxkfQGFI5ifVz3CMKwDlMO225qI0LSl4JaRWz%2FxuwAdOSlccQUhCD5aEnLODe3MEj0FwwSaOIGzliPkQp22znNb3t2SeWuEv1%2BMtzlPfeprsO8P78hM0as7yh%2BrrDwFkZAqCec1IU1MMri5%2BKVuU06%2FHMcLYLoJRAAlq8mf5IHADwVp8sHEERRzpTQGJHCEpHu4qO%2BV09IRLb4fFJ%2FOuWQ5ahYEd6pUHNEZ7qTLz4O1ijQ%2B1bk%2FIY67Kq7VAMuo2h4zIMJ6Y%2FcAGOqUB0vtaaGAxfsutaOfvbO6zHIJR6ek7zdLwmre35h2Wq2TvSX7dAi506%2F643I0ivpqJX8KWtal7ZNHSinnhr9dbu75nj5amuYSYUCttwE1qp0CPWpAQaBiTvph4XoAoFnzTH2Q2zwebjgXCguXZEqrGKLlHVmjFnu6m4sf49JDP9Uc%2FzH8yVOW8CRPoNCfHxdP7fgRMCXBZnITpwi19DZWV6G%2BzDRke&X-Amz-Signature=dcdf4905b894f3e66ccb38e906ac6e5b07ea041d9ec20106294c848198a4a217&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORXAEQ5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1wIJGAHo7CnbYRQj%2Fh65Ae3%2F%2FaUsH%2FWmBGNmWcqCygIgDMTqJcmDO6kGtIyuHVvSEQDh%2B4ZNhBsuhEDGu8Kn0DgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BKEHsAkBcTUFMU0yrcA5nNWDjHhkM4IDhhSjCbBfaP2SQG1XVbQV%2FJ7S%2Fd8l%2Bsvkvz9Bz1NbNtzfcNf21%2FxV0Z1gCVzU6soPtUaqMz6GHnt6Nhnd5dNbQYAKG4lZCWppk9QHA%2BDmbSSm8ptgdVQazu66ojb%2Bpp1jBVq03goU%2Fe8H9prTdRjLREyAxdNM0bh0k%2BQrrybJG8a9Ii5EKUbkU2DlvwcTgNSK%2BDV0x%2BZyG5dWERkHq1kubauCqK7n3Hjb47%2F3yJBqA6ySruqLk6bHOLcqNdN06jr3gMv4p0IYvIhCL0YDFUs3%2FMmyd7wyC9qTylK3I%2BKYy2U9D8pw%2BZbS17%2BI%2BD11ICu3ttIa9NMhJWvwAm5RPPjr91l9fqOPUCkzJ5E0IKP2G8jxkfQGFI5ifVz3CMKwDlMO225qI0LSl4JaRWz%2FxuwAdOSlccQUhCD5aEnLODe3MEj0FwwSaOIGzliPkQp22znNb3t2SeWuEv1%2BMtzlPfeprsO8P78hM0as7yh%2BrrDwFkZAqCec1IU1MMri5%2BKVuU06%2FHMcLYLoJRAAlq8mf5IHADwVp8sHEERRzpTQGJHCEpHu4qO%2BV09IRLb4fFJ%2FOuWQ5ahYEd6pUHNEZ7qTLz4O1ijQ%2B1bk%2FIY67Kq7VAMuo2h4zIMJ6Y%2FcAGOqUB0vtaaGAxfsutaOfvbO6zHIJR6ek7zdLwmre35h2Wq2TvSX7dAi506%2F643I0ivpqJX8KWtal7ZNHSinnhr9dbu75nj5amuYSYUCttwE1qp0CPWpAQaBiTvph4XoAoFnzTH2Q2zwebjgXCguXZEqrGKLlHVmjFnu6m4sf49JDP9Uc%2FzH8yVOW8CRPoNCfHxdP7fgRMCXBZnITpwi19DZWV6G%2BzDRke&X-Amz-Signature=7af49b203487a8734878b9dcb877bb30cb75bb4e4b41a685af1221ec19a0cb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORXAEQ5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1wIJGAHo7CnbYRQj%2Fh65Ae3%2F%2FaUsH%2FWmBGNmWcqCygIgDMTqJcmDO6kGtIyuHVvSEQDh%2B4ZNhBsuhEDGu8Kn0DgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BKEHsAkBcTUFMU0yrcA5nNWDjHhkM4IDhhSjCbBfaP2SQG1XVbQV%2FJ7S%2Fd8l%2Bsvkvz9Bz1NbNtzfcNf21%2FxV0Z1gCVzU6soPtUaqMz6GHnt6Nhnd5dNbQYAKG4lZCWppk9QHA%2BDmbSSm8ptgdVQazu66ojb%2Bpp1jBVq03goU%2Fe8H9prTdRjLREyAxdNM0bh0k%2BQrrybJG8a9Ii5EKUbkU2DlvwcTgNSK%2BDV0x%2BZyG5dWERkHq1kubauCqK7n3Hjb47%2F3yJBqA6ySruqLk6bHOLcqNdN06jr3gMv4p0IYvIhCL0YDFUs3%2FMmyd7wyC9qTylK3I%2BKYy2U9D8pw%2BZbS17%2BI%2BD11ICu3ttIa9NMhJWvwAm5RPPjr91l9fqOPUCkzJ5E0IKP2G8jxkfQGFI5ifVz3CMKwDlMO225qI0LSl4JaRWz%2FxuwAdOSlccQUhCD5aEnLODe3MEj0FwwSaOIGzliPkQp22znNb3t2SeWuEv1%2BMtzlPfeprsO8P78hM0as7yh%2BrrDwFkZAqCec1IU1MMri5%2BKVuU06%2FHMcLYLoJRAAlq8mf5IHADwVp8sHEERRzpTQGJHCEpHu4qO%2BV09IRLb4fFJ%2FOuWQ5ahYEd6pUHNEZ7qTLz4O1ijQ%2B1bk%2FIY67Kq7VAMuo2h4zIMJ6Y%2FcAGOqUB0vtaaGAxfsutaOfvbO6zHIJR6ek7zdLwmre35h2Wq2TvSX7dAi506%2F643I0ivpqJX8KWtal7ZNHSinnhr9dbu75nj5amuYSYUCttwE1qp0CPWpAQaBiTvph4XoAoFnzTH2Q2zwebjgXCguXZEqrGKLlHVmjFnu6m4sf49JDP9Uc%2FzH8yVOW8CRPoNCfHxdP7fgRMCXBZnITpwi19DZWV6G%2BzDRke&X-Amz-Signature=34f79d2d0ae190eb0b42c42621d8a4d48c3b9a9389a6a8b4d43e6caf69eb5878&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORXAEQ5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F1wIJGAHo7CnbYRQj%2Fh65Ae3%2F%2FaUsH%2FWmBGNmWcqCygIgDMTqJcmDO6kGtIyuHVvSEQDh%2B4ZNhBsuhEDGu8Kn0DgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BKEHsAkBcTUFMU0yrcA5nNWDjHhkM4IDhhSjCbBfaP2SQG1XVbQV%2FJ7S%2Fd8l%2Bsvkvz9Bz1NbNtzfcNf21%2FxV0Z1gCVzU6soPtUaqMz6GHnt6Nhnd5dNbQYAKG4lZCWppk9QHA%2BDmbSSm8ptgdVQazu66ojb%2Bpp1jBVq03goU%2Fe8H9prTdRjLREyAxdNM0bh0k%2BQrrybJG8a9Ii5EKUbkU2DlvwcTgNSK%2BDV0x%2BZyG5dWERkHq1kubauCqK7n3Hjb47%2F3yJBqA6ySruqLk6bHOLcqNdN06jr3gMv4p0IYvIhCL0YDFUs3%2FMmyd7wyC9qTylK3I%2BKYy2U9D8pw%2BZbS17%2BI%2BD11ICu3ttIa9NMhJWvwAm5RPPjr91l9fqOPUCkzJ5E0IKP2G8jxkfQGFI5ifVz3CMKwDlMO225qI0LSl4JaRWz%2FxuwAdOSlccQUhCD5aEnLODe3MEj0FwwSaOIGzliPkQp22znNb3t2SeWuEv1%2BMtzlPfeprsO8P78hM0as7yh%2BrrDwFkZAqCec1IU1MMri5%2BKVuU06%2FHMcLYLoJRAAlq8mf5IHADwVp8sHEERRzpTQGJHCEpHu4qO%2BV09IRLb4fFJ%2FOuWQ5ahYEd6pUHNEZ7qTLz4O1ijQ%2B1bk%2FIY67Kq7VAMuo2h4zIMJ6Y%2FcAGOqUB0vtaaGAxfsutaOfvbO6zHIJR6ek7zdLwmre35h2Wq2TvSX7dAi506%2F643I0ivpqJX8KWtal7ZNHSinnhr9dbu75nj5amuYSYUCttwE1qp0CPWpAQaBiTvph4XoAoFnzTH2Q2zwebjgXCguXZEqrGKLlHVmjFnu6m4sf49JDP9Uc%2FzH8yVOW8CRPoNCfHxdP7fgRMCXBZnITpwi19DZWV6G%2BzDRke&X-Amz-Signature=b47e964f2458138fe8bcdbe7c11a9323a66d93480f3d9fe85156e99fe5c35b53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
