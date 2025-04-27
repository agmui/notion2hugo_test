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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWMEUFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3XKu3bWOnCJVEN998bPjX2xjHChSup61%2BQLcOsKJqcAiBhVQYWvP7Pjb%2FjcwYijR5Lzz5aGevyXP%2BQmyUL0eBwiCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMUUcA9lbbFl5AG%2B5KtwDYBKiAprivVgXSuXxSpm9rzjwCcGQi3gcl5YCoONC4LDEVS91hDTDiFNEEl8dyjFMFPmem1DqCAPuUKQFd88XF7p3UEoR0zmDVB35jBsioD2IpK7cuR2lQGqFnWxsJNranl6A91%2FUzdq%2FDYZQh5aTNS%2BYVxqeu90cR%2FAK3uG64avsRcuXCeHfPzkewm99gNAwhK6vKNkqmwhR3RwRIqe7mBe3pvscAadHWnDIxEFZzExboD%2BuyCIgQ%2BwMHnzkR91RpNX18vxtb3XFcrhCTe6IE2UJEeTAkbkZjDzDKrYaRblH%2FRg%2B%2Bh5NsxBN8wGEBUey%2BGw8ElfeOgVKyVzVbDfTKCWba%2FXAkIiGmaqbgzcbS%2FxJ%2FxOimeEEGhnX7tYMzp47uvO9PKTPX5%2FvuqI9Kn5apEe%2Bmbvhb3toKyyu0T%2Fjt7Tt0c%2Bi%2BfCSfyNl%2FYya0N5KwlVaYEJ3ZlX9RiHmcyap7LcZej2oLOzfroyCYovsck7%2FLodwBKEmfYzxE1TI%2FP%2B2G7xb6DRlaziw4pCJf0sEGJwLFsD2g0tO3idtAabWv54fgqWXjaMhTQeTCSy3NxVRXLw9WQPOTf%2BdNACVnvOXblCycNl479NBjfQQe5LIm033x%2Bn4G8zfoZSzGm8wl4y4wAY6pgFwWLY9lMGe%2FNoYexSECtPLtBGD7FY%2FdPcNxZnVsfCuEXBCM3V5zuGD4pzbxZzC3MjttDrlh%2FHqZV68%2BLP32%2BIKW01Dck87I35tyYKIEdbVy3uIIC228py7tym87y8ZckBpynqWmXD%2BliHcVTAsUhExem1EUz%2B3ohhRtiA%2BsmVeMpA6KcYFwzYT2pA%2BA58MnNoGL1YFdiKe6umUpFeBKVK8KNsJByU%2B&X-Amz-Signature=c0c7cc10d6d5247e7f65f4bd8137485e8f9ab37d0373de845345f96282c144f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWMEUFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3XKu3bWOnCJVEN998bPjX2xjHChSup61%2BQLcOsKJqcAiBhVQYWvP7Pjb%2FjcwYijR5Lzz5aGevyXP%2BQmyUL0eBwiCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMUUcA9lbbFl5AG%2B5KtwDYBKiAprivVgXSuXxSpm9rzjwCcGQi3gcl5YCoONC4LDEVS91hDTDiFNEEl8dyjFMFPmem1DqCAPuUKQFd88XF7p3UEoR0zmDVB35jBsioD2IpK7cuR2lQGqFnWxsJNranl6A91%2FUzdq%2FDYZQh5aTNS%2BYVxqeu90cR%2FAK3uG64avsRcuXCeHfPzkewm99gNAwhK6vKNkqmwhR3RwRIqe7mBe3pvscAadHWnDIxEFZzExboD%2BuyCIgQ%2BwMHnzkR91RpNX18vxtb3XFcrhCTe6IE2UJEeTAkbkZjDzDKrYaRblH%2FRg%2B%2Bh5NsxBN8wGEBUey%2BGw8ElfeOgVKyVzVbDfTKCWba%2FXAkIiGmaqbgzcbS%2FxJ%2FxOimeEEGhnX7tYMzp47uvO9PKTPX5%2FvuqI9Kn5apEe%2Bmbvhb3toKyyu0T%2Fjt7Tt0c%2Bi%2BfCSfyNl%2FYya0N5KwlVaYEJ3ZlX9RiHmcyap7LcZej2oLOzfroyCYovsck7%2FLodwBKEmfYzxE1TI%2FP%2B2G7xb6DRlaziw4pCJf0sEGJwLFsD2g0tO3idtAabWv54fgqWXjaMhTQeTCSy3NxVRXLw9WQPOTf%2BdNACVnvOXblCycNl479NBjfQQe5LIm033x%2Bn4G8zfoZSzGm8wl4y4wAY6pgFwWLY9lMGe%2FNoYexSECtPLtBGD7FY%2FdPcNxZnVsfCuEXBCM3V5zuGD4pzbxZzC3MjttDrlh%2FHqZV68%2BLP32%2BIKW01Dck87I35tyYKIEdbVy3uIIC228py7tym87y8ZckBpynqWmXD%2BliHcVTAsUhExem1EUz%2B3ohhRtiA%2BsmVeMpA6KcYFwzYT2pA%2BA58MnNoGL1YFdiKe6umUpFeBKVK8KNsJByU%2B&X-Amz-Signature=194b4028304772c54e3e07038bffbaac6ff8f9df3593bda6d5ffd9d71e82bb97&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWMEUFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3XKu3bWOnCJVEN998bPjX2xjHChSup61%2BQLcOsKJqcAiBhVQYWvP7Pjb%2FjcwYijR5Lzz5aGevyXP%2BQmyUL0eBwiCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMUUcA9lbbFl5AG%2B5KtwDYBKiAprivVgXSuXxSpm9rzjwCcGQi3gcl5YCoONC4LDEVS91hDTDiFNEEl8dyjFMFPmem1DqCAPuUKQFd88XF7p3UEoR0zmDVB35jBsioD2IpK7cuR2lQGqFnWxsJNranl6A91%2FUzdq%2FDYZQh5aTNS%2BYVxqeu90cR%2FAK3uG64avsRcuXCeHfPzkewm99gNAwhK6vKNkqmwhR3RwRIqe7mBe3pvscAadHWnDIxEFZzExboD%2BuyCIgQ%2BwMHnzkR91RpNX18vxtb3XFcrhCTe6IE2UJEeTAkbkZjDzDKrYaRblH%2FRg%2B%2Bh5NsxBN8wGEBUey%2BGw8ElfeOgVKyVzVbDfTKCWba%2FXAkIiGmaqbgzcbS%2FxJ%2FxOimeEEGhnX7tYMzp47uvO9PKTPX5%2FvuqI9Kn5apEe%2Bmbvhb3toKyyu0T%2Fjt7Tt0c%2Bi%2BfCSfyNl%2FYya0N5KwlVaYEJ3ZlX9RiHmcyap7LcZej2oLOzfroyCYovsck7%2FLodwBKEmfYzxE1TI%2FP%2B2G7xb6DRlaziw4pCJf0sEGJwLFsD2g0tO3idtAabWv54fgqWXjaMhTQeTCSy3NxVRXLw9WQPOTf%2BdNACVnvOXblCycNl479NBjfQQe5LIm033x%2Bn4G8zfoZSzGm8wl4y4wAY6pgFwWLY9lMGe%2FNoYexSECtPLtBGD7FY%2FdPcNxZnVsfCuEXBCM3V5zuGD4pzbxZzC3MjttDrlh%2FHqZV68%2BLP32%2BIKW01Dck87I35tyYKIEdbVy3uIIC228py7tym87y8ZckBpynqWmXD%2BliHcVTAsUhExem1EUz%2B3ohhRtiA%2BsmVeMpA6KcYFwzYT2pA%2BA58MnNoGL1YFdiKe6umUpFeBKVK8KNsJByU%2B&X-Amz-Signature=73dc00166963b929aa80f06f2e7e8ae15bccc2de638c2eaebfd6b29283b832bf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWMEUFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3XKu3bWOnCJVEN998bPjX2xjHChSup61%2BQLcOsKJqcAiBhVQYWvP7Pjb%2FjcwYijR5Lzz5aGevyXP%2BQmyUL0eBwiCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMUUcA9lbbFl5AG%2B5KtwDYBKiAprivVgXSuXxSpm9rzjwCcGQi3gcl5YCoONC4LDEVS91hDTDiFNEEl8dyjFMFPmem1DqCAPuUKQFd88XF7p3UEoR0zmDVB35jBsioD2IpK7cuR2lQGqFnWxsJNranl6A91%2FUzdq%2FDYZQh5aTNS%2BYVxqeu90cR%2FAK3uG64avsRcuXCeHfPzkewm99gNAwhK6vKNkqmwhR3RwRIqe7mBe3pvscAadHWnDIxEFZzExboD%2BuyCIgQ%2BwMHnzkR91RpNX18vxtb3XFcrhCTe6IE2UJEeTAkbkZjDzDKrYaRblH%2FRg%2B%2Bh5NsxBN8wGEBUey%2BGw8ElfeOgVKyVzVbDfTKCWba%2FXAkIiGmaqbgzcbS%2FxJ%2FxOimeEEGhnX7tYMzp47uvO9PKTPX5%2FvuqI9Kn5apEe%2Bmbvhb3toKyyu0T%2Fjt7Tt0c%2Bi%2BfCSfyNl%2FYya0N5KwlVaYEJ3ZlX9RiHmcyap7LcZej2oLOzfroyCYovsck7%2FLodwBKEmfYzxE1TI%2FP%2B2G7xb6DRlaziw4pCJf0sEGJwLFsD2g0tO3idtAabWv54fgqWXjaMhTQeTCSy3NxVRXLw9WQPOTf%2BdNACVnvOXblCycNl479NBjfQQe5LIm033x%2Bn4G8zfoZSzGm8wl4y4wAY6pgFwWLY9lMGe%2FNoYexSECtPLtBGD7FY%2FdPcNxZnVsfCuEXBCM3V5zuGD4pzbxZzC3MjttDrlh%2FHqZV68%2BLP32%2BIKW01Dck87I35tyYKIEdbVy3uIIC228py7tym87y8ZckBpynqWmXD%2BliHcVTAsUhExem1EUz%2B3ohhRtiA%2BsmVeMpA6KcYFwzYT2pA%2BA58MnNoGL1YFdiKe6umUpFeBKVK8KNsJByU%2B&X-Amz-Signature=fc0f5a4c0efa674940e06e8941314c7255acee9238b0acc06eb58f8d983a74e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWMEUFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3XKu3bWOnCJVEN998bPjX2xjHChSup61%2BQLcOsKJqcAiBhVQYWvP7Pjb%2FjcwYijR5Lzz5aGevyXP%2BQmyUL0eBwiCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMUUcA9lbbFl5AG%2B5KtwDYBKiAprivVgXSuXxSpm9rzjwCcGQi3gcl5YCoONC4LDEVS91hDTDiFNEEl8dyjFMFPmem1DqCAPuUKQFd88XF7p3UEoR0zmDVB35jBsioD2IpK7cuR2lQGqFnWxsJNranl6A91%2FUzdq%2FDYZQh5aTNS%2BYVxqeu90cR%2FAK3uG64avsRcuXCeHfPzkewm99gNAwhK6vKNkqmwhR3RwRIqe7mBe3pvscAadHWnDIxEFZzExboD%2BuyCIgQ%2BwMHnzkR91RpNX18vxtb3XFcrhCTe6IE2UJEeTAkbkZjDzDKrYaRblH%2FRg%2B%2Bh5NsxBN8wGEBUey%2BGw8ElfeOgVKyVzVbDfTKCWba%2FXAkIiGmaqbgzcbS%2FxJ%2FxOimeEEGhnX7tYMzp47uvO9PKTPX5%2FvuqI9Kn5apEe%2Bmbvhb3toKyyu0T%2Fjt7Tt0c%2Bi%2BfCSfyNl%2FYya0N5KwlVaYEJ3ZlX9RiHmcyap7LcZej2oLOzfroyCYovsck7%2FLodwBKEmfYzxE1TI%2FP%2B2G7xb6DRlaziw4pCJf0sEGJwLFsD2g0tO3idtAabWv54fgqWXjaMhTQeTCSy3NxVRXLw9WQPOTf%2BdNACVnvOXblCycNl479NBjfQQe5LIm033x%2Bn4G8zfoZSzGm8wl4y4wAY6pgFwWLY9lMGe%2FNoYexSECtPLtBGD7FY%2FdPcNxZnVsfCuEXBCM3V5zuGD4pzbxZzC3MjttDrlh%2FHqZV68%2BLP32%2BIKW01Dck87I35tyYKIEdbVy3uIIC228py7tym87y8ZckBpynqWmXD%2BliHcVTAsUhExem1EUz%2B3ohhRtiA%2BsmVeMpA6KcYFwzYT2pA%2BA58MnNoGL1YFdiKe6umUpFeBKVK8KNsJByU%2B&X-Amz-Signature=0c5e3998d25339fb002868dd2ecc7438066dcd2beee36de67087f60b1a95b0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWMEUFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3XKu3bWOnCJVEN998bPjX2xjHChSup61%2BQLcOsKJqcAiBhVQYWvP7Pjb%2FjcwYijR5Lzz5aGevyXP%2BQmyUL0eBwiCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMUUcA9lbbFl5AG%2B5KtwDYBKiAprivVgXSuXxSpm9rzjwCcGQi3gcl5YCoONC4LDEVS91hDTDiFNEEl8dyjFMFPmem1DqCAPuUKQFd88XF7p3UEoR0zmDVB35jBsioD2IpK7cuR2lQGqFnWxsJNranl6A91%2FUzdq%2FDYZQh5aTNS%2BYVxqeu90cR%2FAK3uG64avsRcuXCeHfPzkewm99gNAwhK6vKNkqmwhR3RwRIqe7mBe3pvscAadHWnDIxEFZzExboD%2BuyCIgQ%2BwMHnzkR91RpNX18vxtb3XFcrhCTe6IE2UJEeTAkbkZjDzDKrYaRblH%2FRg%2B%2Bh5NsxBN8wGEBUey%2BGw8ElfeOgVKyVzVbDfTKCWba%2FXAkIiGmaqbgzcbS%2FxJ%2FxOimeEEGhnX7tYMzp47uvO9PKTPX5%2FvuqI9Kn5apEe%2Bmbvhb3toKyyu0T%2Fjt7Tt0c%2Bi%2BfCSfyNl%2FYya0N5KwlVaYEJ3ZlX9RiHmcyap7LcZej2oLOzfroyCYovsck7%2FLodwBKEmfYzxE1TI%2FP%2B2G7xb6DRlaziw4pCJf0sEGJwLFsD2g0tO3idtAabWv54fgqWXjaMhTQeTCSy3NxVRXLw9WQPOTf%2BdNACVnvOXblCycNl479NBjfQQe5LIm033x%2Bn4G8zfoZSzGm8wl4y4wAY6pgFwWLY9lMGe%2FNoYexSECtPLtBGD7FY%2FdPcNxZnVsfCuEXBCM3V5zuGD4pzbxZzC3MjttDrlh%2FHqZV68%2BLP32%2BIKW01Dck87I35tyYKIEdbVy3uIIC228py7tym87y8ZckBpynqWmXD%2BliHcVTAsUhExem1EUz%2B3ohhRtiA%2BsmVeMpA6KcYFwzYT2pA%2BA58MnNoGL1YFdiKe6umUpFeBKVK8KNsJByU%2B&X-Amz-Signature=675a2435be0224eded1b54df5cf3a5d08de1a69d5f9bcb66fe9dcfcb3c64ae2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWMEUFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3XKu3bWOnCJVEN998bPjX2xjHChSup61%2BQLcOsKJqcAiBhVQYWvP7Pjb%2FjcwYijR5Lzz5aGevyXP%2BQmyUL0eBwiCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMUUcA9lbbFl5AG%2B5KtwDYBKiAprivVgXSuXxSpm9rzjwCcGQi3gcl5YCoONC4LDEVS91hDTDiFNEEl8dyjFMFPmem1DqCAPuUKQFd88XF7p3UEoR0zmDVB35jBsioD2IpK7cuR2lQGqFnWxsJNranl6A91%2FUzdq%2FDYZQh5aTNS%2BYVxqeu90cR%2FAK3uG64avsRcuXCeHfPzkewm99gNAwhK6vKNkqmwhR3RwRIqe7mBe3pvscAadHWnDIxEFZzExboD%2BuyCIgQ%2BwMHnzkR91RpNX18vxtb3XFcrhCTe6IE2UJEeTAkbkZjDzDKrYaRblH%2FRg%2B%2Bh5NsxBN8wGEBUey%2BGw8ElfeOgVKyVzVbDfTKCWba%2FXAkIiGmaqbgzcbS%2FxJ%2FxOimeEEGhnX7tYMzp47uvO9PKTPX5%2FvuqI9Kn5apEe%2Bmbvhb3toKyyu0T%2Fjt7Tt0c%2Bi%2BfCSfyNl%2FYya0N5KwlVaYEJ3ZlX9RiHmcyap7LcZej2oLOzfroyCYovsck7%2FLodwBKEmfYzxE1TI%2FP%2B2G7xb6DRlaziw4pCJf0sEGJwLFsD2g0tO3idtAabWv54fgqWXjaMhTQeTCSy3NxVRXLw9WQPOTf%2BdNACVnvOXblCycNl479NBjfQQe5LIm033x%2Bn4G8zfoZSzGm8wl4y4wAY6pgFwWLY9lMGe%2FNoYexSECtPLtBGD7FY%2FdPcNxZnVsfCuEXBCM3V5zuGD4pzbxZzC3MjttDrlh%2FHqZV68%2BLP32%2BIKW01Dck87I35tyYKIEdbVy3uIIC228py7tym87y8ZckBpynqWmXD%2BliHcVTAsUhExem1EUz%2B3ohhRtiA%2BsmVeMpA6KcYFwzYT2pA%2BA58MnNoGL1YFdiKe6umUpFeBKVK8KNsJByU%2B&X-Amz-Signature=9053132cddf898f787f608dbf44894d41e11084de489f453f4de9dd5fba2ff96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWMEUFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3XKu3bWOnCJVEN998bPjX2xjHChSup61%2BQLcOsKJqcAiBhVQYWvP7Pjb%2FjcwYijR5Lzz5aGevyXP%2BQmyUL0eBwiCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMUUcA9lbbFl5AG%2B5KtwDYBKiAprivVgXSuXxSpm9rzjwCcGQi3gcl5YCoONC4LDEVS91hDTDiFNEEl8dyjFMFPmem1DqCAPuUKQFd88XF7p3UEoR0zmDVB35jBsioD2IpK7cuR2lQGqFnWxsJNranl6A91%2FUzdq%2FDYZQh5aTNS%2BYVxqeu90cR%2FAK3uG64avsRcuXCeHfPzkewm99gNAwhK6vKNkqmwhR3RwRIqe7mBe3pvscAadHWnDIxEFZzExboD%2BuyCIgQ%2BwMHnzkR91RpNX18vxtb3XFcrhCTe6IE2UJEeTAkbkZjDzDKrYaRblH%2FRg%2B%2Bh5NsxBN8wGEBUey%2BGw8ElfeOgVKyVzVbDfTKCWba%2FXAkIiGmaqbgzcbS%2FxJ%2FxOimeEEGhnX7tYMzp47uvO9PKTPX5%2FvuqI9Kn5apEe%2Bmbvhb3toKyyu0T%2Fjt7Tt0c%2Bi%2BfCSfyNl%2FYya0N5KwlVaYEJ3ZlX9RiHmcyap7LcZej2oLOzfroyCYovsck7%2FLodwBKEmfYzxE1TI%2FP%2B2G7xb6DRlaziw4pCJf0sEGJwLFsD2g0tO3idtAabWv54fgqWXjaMhTQeTCSy3NxVRXLw9WQPOTf%2BdNACVnvOXblCycNl479NBjfQQe5LIm033x%2Bn4G8zfoZSzGm8wl4y4wAY6pgFwWLY9lMGe%2FNoYexSECtPLtBGD7FY%2FdPcNxZnVsfCuEXBCM3V5zuGD4pzbxZzC3MjttDrlh%2FHqZV68%2BLP32%2BIKW01Dck87I35tyYKIEdbVy3uIIC228py7tym87y8ZckBpynqWmXD%2BliHcVTAsUhExem1EUz%2B3ohhRtiA%2BsmVeMpA6KcYFwzYT2pA%2BA58MnNoGL1YFdiKe6umUpFeBKVK8KNsJByU%2B&X-Amz-Signature=6b91779594a0228d2bac3bdb10fba1ccd44472b75e70aa382050504acad03d88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
