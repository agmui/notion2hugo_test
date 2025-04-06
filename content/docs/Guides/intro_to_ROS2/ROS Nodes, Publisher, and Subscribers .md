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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2S37LL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnsjmbCS1qBzyHb8IYTglETS%2BBNBjtLDkcG20WnzkU8AiEAnTw3NY4noZ1CsGNdz1Nwwh7avIoe4E%2FWdZDPCdKZTxcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHKvDsZ2cny%2FYnCzQircA3MDq7rEiPj1WVIj1zkdrsAmQlfyqpMeaHREbScLKcuKqAK%2F%2FIL6274bjFmd4nFBxe9AMpU%2F2kLj0wMS%2Bd2294ELDy%2FZdhPJ7Txd5EUrt2ygvpPgAdZnf0NJC5hWm%2FvRIoaOWHalQKHCG4k7GVdME0caeOi%2FnOpnGIBHg6KgjL6D44Rf8uNI64Xs3DOjAsTxd2KCCV8zYFI0aTW1b69uUBNLm3TfvqProdFz3YRzlSJZNpsEeCKXABf5T%2BRKvlwEIT09sUmDP9a%2FFYIaGndTZgLyUURZ5OjPpziheKdOZ%2F6QypEuWCs80056e%2F6c%2B79dtwW5cTcdkFyOen5sZZTPrH3%2BHZNP2UIgiPXr%2Fu9PPm4Y0%2FEOkJfH3Jc5x3p7PFsUK04wmYcsNxB%2FVzhtbQnTapl%2Buv4%2BBShxTW4Yrjdv9hfMssTuMLgGwDBTagmsysbiM4UY%2FrVevEHr8rlqqIWV78V0PL9p8ttQHstn3lOMtAv%2BZ5bTh2RWXit7PieUu4AENvJz%2FhaaRmEvQxca2lXS7PH8FbdY%2BVe0jyJtgGIZWWRSoKyCWu9NPLBEt58jHz%2BZsaeCklL6gKH3QVGn7coK%2Fh%2BH9QOlq3j7YFuctbyE0DE078z2rYa7oiwYGyuPMMDDxr8GOqUBrgWdWBsWtaDMbrAj%2BYpeKZ0HLRdF0COUwNVmTga6mYQAdzV16Qwmz7uzOfNcZWyVmBZFvlkpkg8%2BLWoRMtvmkGwzk5OG3teGupO3LcP8AAT9fdzHaonYdW647pn%2B7Ll3u5HR4KvWsMcS5hWQiuA9KQiX8oxqUVZEl5T%2FJPMZQUoS5TAh8vouxVVxSGQHeEgdyPke%2FVdldj93bk4aSm7otqiOjSlD&X-Amz-Signature=e28caa5ed085ebeeadb67326f8d0a79d14f3e56608e5d4508b3a86c6efb1460d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2S37LL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnsjmbCS1qBzyHb8IYTglETS%2BBNBjtLDkcG20WnzkU8AiEAnTw3NY4noZ1CsGNdz1Nwwh7avIoe4E%2FWdZDPCdKZTxcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHKvDsZ2cny%2FYnCzQircA3MDq7rEiPj1WVIj1zkdrsAmQlfyqpMeaHREbScLKcuKqAK%2F%2FIL6274bjFmd4nFBxe9AMpU%2F2kLj0wMS%2Bd2294ELDy%2FZdhPJ7Txd5EUrt2ygvpPgAdZnf0NJC5hWm%2FvRIoaOWHalQKHCG4k7GVdME0caeOi%2FnOpnGIBHg6KgjL6D44Rf8uNI64Xs3DOjAsTxd2KCCV8zYFI0aTW1b69uUBNLm3TfvqProdFz3YRzlSJZNpsEeCKXABf5T%2BRKvlwEIT09sUmDP9a%2FFYIaGndTZgLyUURZ5OjPpziheKdOZ%2F6QypEuWCs80056e%2F6c%2B79dtwW5cTcdkFyOen5sZZTPrH3%2BHZNP2UIgiPXr%2Fu9PPm4Y0%2FEOkJfH3Jc5x3p7PFsUK04wmYcsNxB%2FVzhtbQnTapl%2Buv4%2BBShxTW4Yrjdv9hfMssTuMLgGwDBTagmsysbiM4UY%2FrVevEHr8rlqqIWV78V0PL9p8ttQHstn3lOMtAv%2BZ5bTh2RWXit7PieUu4AENvJz%2FhaaRmEvQxca2lXS7PH8FbdY%2BVe0jyJtgGIZWWRSoKyCWu9NPLBEt58jHz%2BZsaeCklL6gKH3QVGn7coK%2Fh%2BH9QOlq3j7YFuctbyE0DE078z2rYa7oiwYGyuPMMDDxr8GOqUBrgWdWBsWtaDMbrAj%2BYpeKZ0HLRdF0COUwNVmTga6mYQAdzV16Qwmz7uzOfNcZWyVmBZFvlkpkg8%2BLWoRMtvmkGwzk5OG3teGupO3LcP8AAT9fdzHaonYdW647pn%2B7Ll3u5HR4KvWsMcS5hWQiuA9KQiX8oxqUVZEl5T%2FJPMZQUoS5TAh8vouxVVxSGQHeEgdyPke%2FVdldj93bk4aSm7otqiOjSlD&X-Amz-Signature=7a6edf62bbbc6dd6e4acc20f3aecc9c420ab3790b00a9cff6bf3e8913f5a48fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2S37LL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnsjmbCS1qBzyHb8IYTglETS%2BBNBjtLDkcG20WnzkU8AiEAnTw3NY4noZ1CsGNdz1Nwwh7avIoe4E%2FWdZDPCdKZTxcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHKvDsZ2cny%2FYnCzQircA3MDq7rEiPj1WVIj1zkdrsAmQlfyqpMeaHREbScLKcuKqAK%2F%2FIL6274bjFmd4nFBxe9AMpU%2F2kLj0wMS%2Bd2294ELDy%2FZdhPJ7Txd5EUrt2ygvpPgAdZnf0NJC5hWm%2FvRIoaOWHalQKHCG4k7GVdME0caeOi%2FnOpnGIBHg6KgjL6D44Rf8uNI64Xs3DOjAsTxd2KCCV8zYFI0aTW1b69uUBNLm3TfvqProdFz3YRzlSJZNpsEeCKXABf5T%2BRKvlwEIT09sUmDP9a%2FFYIaGndTZgLyUURZ5OjPpziheKdOZ%2F6QypEuWCs80056e%2F6c%2B79dtwW5cTcdkFyOen5sZZTPrH3%2BHZNP2UIgiPXr%2Fu9PPm4Y0%2FEOkJfH3Jc5x3p7PFsUK04wmYcsNxB%2FVzhtbQnTapl%2Buv4%2BBShxTW4Yrjdv9hfMssTuMLgGwDBTagmsysbiM4UY%2FrVevEHr8rlqqIWV78V0PL9p8ttQHstn3lOMtAv%2BZ5bTh2RWXit7PieUu4AENvJz%2FhaaRmEvQxca2lXS7PH8FbdY%2BVe0jyJtgGIZWWRSoKyCWu9NPLBEt58jHz%2BZsaeCklL6gKH3QVGn7coK%2Fh%2BH9QOlq3j7YFuctbyE0DE078z2rYa7oiwYGyuPMMDDxr8GOqUBrgWdWBsWtaDMbrAj%2BYpeKZ0HLRdF0COUwNVmTga6mYQAdzV16Qwmz7uzOfNcZWyVmBZFvlkpkg8%2BLWoRMtvmkGwzk5OG3teGupO3LcP8AAT9fdzHaonYdW647pn%2B7Ll3u5HR4KvWsMcS5hWQiuA9KQiX8oxqUVZEl5T%2FJPMZQUoS5TAh8vouxVVxSGQHeEgdyPke%2FVdldj93bk4aSm7otqiOjSlD&X-Amz-Signature=695099a872ec73bc8ed8c403e129a60e5c88ee32035a174706dd131346262eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2S37LL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnsjmbCS1qBzyHb8IYTglETS%2BBNBjtLDkcG20WnzkU8AiEAnTw3NY4noZ1CsGNdz1Nwwh7avIoe4E%2FWdZDPCdKZTxcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHKvDsZ2cny%2FYnCzQircA3MDq7rEiPj1WVIj1zkdrsAmQlfyqpMeaHREbScLKcuKqAK%2F%2FIL6274bjFmd4nFBxe9AMpU%2F2kLj0wMS%2Bd2294ELDy%2FZdhPJ7Txd5EUrt2ygvpPgAdZnf0NJC5hWm%2FvRIoaOWHalQKHCG4k7GVdME0caeOi%2FnOpnGIBHg6KgjL6D44Rf8uNI64Xs3DOjAsTxd2KCCV8zYFI0aTW1b69uUBNLm3TfvqProdFz3YRzlSJZNpsEeCKXABf5T%2BRKvlwEIT09sUmDP9a%2FFYIaGndTZgLyUURZ5OjPpziheKdOZ%2F6QypEuWCs80056e%2F6c%2B79dtwW5cTcdkFyOen5sZZTPrH3%2BHZNP2UIgiPXr%2Fu9PPm4Y0%2FEOkJfH3Jc5x3p7PFsUK04wmYcsNxB%2FVzhtbQnTapl%2Buv4%2BBShxTW4Yrjdv9hfMssTuMLgGwDBTagmsysbiM4UY%2FrVevEHr8rlqqIWV78V0PL9p8ttQHstn3lOMtAv%2BZ5bTh2RWXit7PieUu4AENvJz%2FhaaRmEvQxca2lXS7PH8FbdY%2BVe0jyJtgGIZWWRSoKyCWu9NPLBEt58jHz%2BZsaeCklL6gKH3QVGn7coK%2Fh%2BH9QOlq3j7YFuctbyE0DE078z2rYa7oiwYGyuPMMDDxr8GOqUBrgWdWBsWtaDMbrAj%2BYpeKZ0HLRdF0COUwNVmTga6mYQAdzV16Qwmz7uzOfNcZWyVmBZFvlkpkg8%2BLWoRMtvmkGwzk5OG3teGupO3LcP8AAT9fdzHaonYdW647pn%2B7Ll3u5HR4KvWsMcS5hWQiuA9KQiX8oxqUVZEl5T%2FJPMZQUoS5TAh8vouxVVxSGQHeEgdyPke%2FVdldj93bk4aSm7otqiOjSlD&X-Amz-Signature=5cb998c1aebe4349bb364594f0ecda6850373ede9e74d9608193d295df43bf92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2S37LL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnsjmbCS1qBzyHb8IYTglETS%2BBNBjtLDkcG20WnzkU8AiEAnTw3NY4noZ1CsGNdz1Nwwh7avIoe4E%2FWdZDPCdKZTxcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHKvDsZ2cny%2FYnCzQircA3MDq7rEiPj1WVIj1zkdrsAmQlfyqpMeaHREbScLKcuKqAK%2F%2FIL6274bjFmd4nFBxe9AMpU%2F2kLj0wMS%2Bd2294ELDy%2FZdhPJ7Txd5EUrt2ygvpPgAdZnf0NJC5hWm%2FvRIoaOWHalQKHCG4k7GVdME0caeOi%2FnOpnGIBHg6KgjL6D44Rf8uNI64Xs3DOjAsTxd2KCCV8zYFI0aTW1b69uUBNLm3TfvqProdFz3YRzlSJZNpsEeCKXABf5T%2BRKvlwEIT09sUmDP9a%2FFYIaGndTZgLyUURZ5OjPpziheKdOZ%2F6QypEuWCs80056e%2F6c%2B79dtwW5cTcdkFyOen5sZZTPrH3%2BHZNP2UIgiPXr%2Fu9PPm4Y0%2FEOkJfH3Jc5x3p7PFsUK04wmYcsNxB%2FVzhtbQnTapl%2Buv4%2BBShxTW4Yrjdv9hfMssTuMLgGwDBTagmsysbiM4UY%2FrVevEHr8rlqqIWV78V0PL9p8ttQHstn3lOMtAv%2BZ5bTh2RWXit7PieUu4AENvJz%2FhaaRmEvQxca2lXS7PH8FbdY%2BVe0jyJtgGIZWWRSoKyCWu9NPLBEt58jHz%2BZsaeCklL6gKH3QVGn7coK%2Fh%2BH9QOlq3j7YFuctbyE0DE078z2rYa7oiwYGyuPMMDDxr8GOqUBrgWdWBsWtaDMbrAj%2BYpeKZ0HLRdF0COUwNVmTga6mYQAdzV16Qwmz7uzOfNcZWyVmBZFvlkpkg8%2BLWoRMtvmkGwzk5OG3teGupO3LcP8AAT9fdzHaonYdW647pn%2B7Ll3u5HR4KvWsMcS5hWQiuA9KQiX8oxqUVZEl5T%2FJPMZQUoS5TAh8vouxVVxSGQHeEgdyPke%2FVdldj93bk4aSm7otqiOjSlD&X-Amz-Signature=d296976241983bafb621d940063020a91c50c2c5b3a6d3a0c7df23cc8595f04e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2S37LL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnsjmbCS1qBzyHb8IYTglETS%2BBNBjtLDkcG20WnzkU8AiEAnTw3NY4noZ1CsGNdz1Nwwh7avIoe4E%2FWdZDPCdKZTxcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHKvDsZ2cny%2FYnCzQircA3MDq7rEiPj1WVIj1zkdrsAmQlfyqpMeaHREbScLKcuKqAK%2F%2FIL6274bjFmd4nFBxe9AMpU%2F2kLj0wMS%2Bd2294ELDy%2FZdhPJ7Txd5EUrt2ygvpPgAdZnf0NJC5hWm%2FvRIoaOWHalQKHCG4k7GVdME0caeOi%2FnOpnGIBHg6KgjL6D44Rf8uNI64Xs3DOjAsTxd2KCCV8zYFI0aTW1b69uUBNLm3TfvqProdFz3YRzlSJZNpsEeCKXABf5T%2BRKvlwEIT09sUmDP9a%2FFYIaGndTZgLyUURZ5OjPpziheKdOZ%2F6QypEuWCs80056e%2F6c%2B79dtwW5cTcdkFyOen5sZZTPrH3%2BHZNP2UIgiPXr%2Fu9PPm4Y0%2FEOkJfH3Jc5x3p7PFsUK04wmYcsNxB%2FVzhtbQnTapl%2Buv4%2BBShxTW4Yrjdv9hfMssTuMLgGwDBTagmsysbiM4UY%2FrVevEHr8rlqqIWV78V0PL9p8ttQHstn3lOMtAv%2BZ5bTh2RWXit7PieUu4AENvJz%2FhaaRmEvQxca2lXS7PH8FbdY%2BVe0jyJtgGIZWWRSoKyCWu9NPLBEt58jHz%2BZsaeCklL6gKH3QVGn7coK%2Fh%2BH9QOlq3j7YFuctbyE0DE078z2rYa7oiwYGyuPMMDDxr8GOqUBrgWdWBsWtaDMbrAj%2BYpeKZ0HLRdF0COUwNVmTga6mYQAdzV16Qwmz7uzOfNcZWyVmBZFvlkpkg8%2BLWoRMtvmkGwzk5OG3teGupO3LcP8AAT9fdzHaonYdW647pn%2B7Ll3u5HR4KvWsMcS5hWQiuA9KQiX8oxqUVZEl5T%2FJPMZQUoS5TAh8vouxVVxSGQHeEgdyPke%2FVdldj93bk4aSm7otqiOjSlD&X-Amz-Signature=d0ba93079857dc3c74cc58210f63c511db3c8c031e1c30a92bda45612c952182&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2S37LL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnsjmbCS1qBzyHb8IYTglETS%2BBNBjtLDkcG20WnzkU8AiEAnTw3NY4noZ1CsGNdz1Nwwh7avIoe4E%2FWdZDPCdKZTxcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHKvDsZ2cny%2FYnCzQircA3MDq7rEiPj1WVIj1zkdrsAmQlfyqpMeaHREbScLKcuKqAK%2F%2FIL6274bjFmd4nFBxe9AMpU%2F2kLj0wMS%2Bd2294ELDy%2FZdhPJ7Txd5EUrt2ygvpPgAdZnf0NJC5hWm%2FvRIoaOWHalQKHCG4k7GVdME0caeOi%2FnOpnGIBHg6KgjL6D44Rf8uNI64Xs3DOjAsTxd2KCCV8zYFI0aTW1b69uUBNLm3TfvqProdFz3YRzlSJZNpsEeCKXABf5T%2BRKvlwEIT09sUmDP9a%2FFYIaGndTZgLyUURZ5OjPpziheKdOZ%2F6QypEuWCs80056e%2F6c%2B79dtwW5cTcdkFyOen5sZZTPrH3%2BHZNP2UIgiPXr%2Fu9PPm4Y0%2FEOkJfH3Jc5x3p7PFsUK04wmYcsNxB%2FVzhtbQnTapl%2Buv4%2BBShxTW4Yrjdv9hfMssTuMLgGwDBTagmsysbiM4UY%2FrVevEHr8rlqqIWV78V0PL9p8ttQHstn3lOMtAv%2BZ5bTh2RWXit7PieUu4AENvJz%2FhaaRmEvQxca2lXS7PH8FbdY%2BVe0jyJtgGIZWWRSoKyCWu9NPLBEt58jHz%2BZsaeCklL6gKH3QVGn7coK%2Fh%2BH9QOlq3j7YFuctbyE0DE078z2rYa7oiwYGyuPMMDDxr8GOqUBrgWdWBsWtaDMbrAj%2BYpeKZ0HLRdF0COUwNVmTga6mYQAdzV16Qwmz7uzOfNcZWyVmBZFvlkpkg8%2BLWoRMtvmkGwzk5OG3teGupO3LcP8AAT9fdzHaonYdW647pn%2B7Ll3u5HR4KvWsMcS5hWQiuA9KQiX8oxqUVZEl5T%2FJPMZQUoS5TAh8vouxVVxSGQHeEgdyPke%2FVdldj93bk4aSm7otqiOjSlD&X-Amz-Signature=7dda9a7a78337349195f23c07953aec4bfe0063259862bcd78ec675fcea92d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I2S37LL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnsjmbCS1qBzyHb8IYTglETS%2BBNBjtLDkcG20WnzkU8AiEAnTw3NY4noZ1CsGNdz1Nwwh7avIoe4E%2FWdZDPCdKZTxcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHKvDsZ2cny%2FYnCzQircA3MDq7rEiPj1WVIj1zkdrsAmQlfyqpMeaHREbScLKcuKqAK%2F%2FIL6274bjFmd4nFBxe9AMpU%2F2kLj0wMS%2Bd2294ELDy%2FZdhPJ7Txd5EUrt2ygvpPgAdZnf0NJC5hWm%2FvRIoaOWHalQKHCG4k7GVdME0caeOi%2FnOpnGIBHg6KgjL6D44Rf8uNI64Xs3DOjAsTxd2KCCV8zYFI0aTW1b69uUBNLm3TfvqProdFz3YRzlSJZNpsEeCKXABf5T%2BRKvlwEIT09sUmDP9a%2FFYIaGndTZgLyUURZ5OjPpziheKdOZ%2F6QypEuWCs80056e%2F6c%2B79dtwW5cTcdkFyOen5sZZTPrH3%2BHZNP2UIgiPXr%2Fu9PPm4Y0%2FEOkJfH3Jc5x3p7PFsUK04wmYcsNxB%2FVzhtbQnTapl%2Buv4%2BBShxTW4Yrjdv9hfMssTuMLgGwDBTagmsysbiM4UY%2FrVevEHr8rlqqIWV78V0PL9p8ttQHstn3lOMtAv%2BZ5bTh2RWXit7PieUu4AENvJz%2FhaaRmEvQxca2lXS7PH8FbdY%2BVe0jyJtgGIZWWRSoKyCWu9NPLBEt58jHz%2BZsaeCklL6gKH3QVGn7coK%2Fh%2BH9QOlq3j7YFuctbyE0DE078z2rYa7oiwYGyuPMMDDxr8GOqUBrgWdWBsWtaDMbrAj%2BYpeKZ0HLRdF0COUwNVmTga6mYQAdzV16Qwmz7uzOfNcZWyVmBZFvlkpkg8%2BLWoRMtvmkGwzk5OG3teGupO3LcP8AAT9fdzHaonYdW647pn%2B7Ll3u5HR4KvWsMcS5hWQiuA9KQiX8oxqUVZEl5T%2FJPMZQUoS5TAh8vouxVVxSGQHeEgdyPke%2FVdldj93bk4aSm7otqiOjSlD&X-Amz-Signature=19ba764aee35d59c35b1d8ceaad8f98f3c6756f3f36316a5d00eb6909e4f05db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
