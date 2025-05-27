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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIM3QINX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkGsw6oIcZ7IoS4rhpYoDlbOTA1z1165wK9Fw2CxvAqAiB2B%2BJrUjuLllaH6GxHXnemHN1AhkpwLtzVv8Nqk%2B8%2Byyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMEIdSVi4nc%2B%2F0WInGKtwDFjrOaUKbqFFi2DwGAnXAhTnilFMl8lSzZrOT6wbm%2Fc%2FUnEz7r9cVQCGSL7T%2Fakuzn9tZuI%2FHoAPg6nnfz6DIPdoD2fJ1drli1EVVOsJgcBu2ft471MwzuPKAgRE2F1UrYEOfDZxQS8jka1kHunbsGIkZhyZ7plk%2FBoWogMJ1AdkODGHGHRUgLgEiIx8Tv5Q81C27cTcoTv%2F%2BAfPYrct43N9zMycs4LAfzr2Ylj5yrLYza0Ix7lfr%2F%2F0rCmUAmR5AuFa9xSB9T1vGJJVNzgnLQM7tuGQLhMlQZJwqRwSHCOrUP%2B8chNonPf0Ljd0KJxkIKYxIp0z%2FrPkOTDkOJih5Dk9Qhg809n0leLgnC5XTvGDMqVZdVQvU9wDKbLE6cVLeFsyxlA4HKUgP9B7pETHo1rpnudPfvp9ZIBDddUTGLOv3M9u3c9D2w2bLLQADZDLMEW1AQ3uHMiM9n3rwhyIXPH%2FzF6Zuj7uE%2BNo%2B2j57WzoL%2BYXSlTFLPGs4VETAhSAQZY4qcgjz2552E2kt16qX4xRbnal2Ojl2%2B6Cw9N4kD3ccu43%2B1%2BHwKAY%2FXghG71M9%2F2290WQMI1AacxU2ujb%2Fo%2BGhPIhHuw6a7twRSLqfnoH%2FAoJ9cPUZ59iKrUww%2BMnYwQY6pgEKOvo7qqLyXUX34Dv8%2BXQbaFYNTLV75zu8B3TJzyFaB3w%2Bc8dI5Ti2hvXi9OuXQBYoGQxYQQALAAkQYEFVu%2B566CGVTe47lkzEdsa%2BtOD444qadwpHc17sYtbjzMiCqplM03nR%2B1tamFrFOT3YB%2B2s7CbCDqw%2B6LqOA8Akso3PLNRIjyRwehd3aHqbg7kfuFp05aLLM1SvCHA8vsaEHlT%2BFKat9Xfl&X-Amz-Signature=268e47f1e054a6a6d3fe25aa05a74e386da0dbbbdf3474e7bb475e0adca7e81a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIM3QINX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkGsw6oIcZ7IoS4rhpYoDlbOTA1z1165wK9Fw2CxvAqAiB2B%2BJrUjuLllaH6GxHXnemHN1AhkpwLtzVv8Nqk%2B8%2Byyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMEIdSVi4nc%2B%2F0WInGKtwDFjrOaUKbqFFi2DwGAnXAhTnilFMl8lSzZrOT6wbm%2Fc%2FUnEz7r9cVQCGSL7T%2Fakuzn9tZuI%2FHoAPg6nnfz6DIPdoD2fJ1drli1EVVOsJgcBu2ft471MwzuPKAgRE2F1UrYEOfDZxQS8jka1kHunbsGIkZhyZ7plk%2FBoWogMJ1AdkODGHGHRUgLgEiIx8Tv5Q81C27cTcoTv%2F%2BAfPYrct43N9zMycs4LAfzr2Ylj5yrLYza0Ix7lfr%2F%2F0rCmUAmR5AuFa9xSB9T1vGJJVNzgnLQM7tuGQLhMlQZJwqRwSHCOrUP%2B8chNonPf0Ljd0KJxkIKYxIp0z%2FrPkOTDkOJih5Dk9Qhg809n0leLgnC5XTvGDMqVZdVQvU9wDKbLE6cVLeFsyxlA4HKUgP9B7pETHo1rpnudPfvp9ZIBDddUTGLOv3M9u3c9D2w2bLLQADZDLMEW1AQ3uHMiM9n3rwhyIXPH%2FzF6Zuj7uE%2BNo%2B2j57WzoL%2BYXSlTFLPGs4VETAhSAQZY4qcgjz2552E2kt16qX4xRbnal2Ojl2%2B6Cw9N4kD3ccu43%2B1%2BHwKAY%2FXghG71M9%2F2290WQMI1AacxU2ujb%2Fo%2BGhPIhHuw6a7twRSLqfnoH%2FAoJ9cPUZ59iKrUww%2BMnYwQY6pgEKOvo7qqLyXUX34Dv8%2BXQbaFYNTLV75zu8B3TJzyFaB3w%2Bc8dI5Ti2hvXi9OuXQBYoGQxYQQALAAkQYEFVu%2B566CGVTe47lkzEdsa%2BtOD444qadwpHc17sYtbjzMiCqplM03nR%2B1tamFrFOT3YB%2B2s7CbCDqw%2B6LqOA8Akso3PLNRIjyRwehd3aHqbg7kfuFp05aLLM1SvCHA8vsaEHlT%2BFKat9Xfl&X-Amz-Signature=b739ac92b75d481cabd29c8bf349d5bb8a98d28073f0fa5f6ef2af262c269de2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIM3QINX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkGsw6oIcZ7IoS4rhpYoDlbOTA1z1165wK9Fw2CxvAqAiB2B%2BJrUjuLllaH6GxHXnemHN1AhkpwLtzVv8Nqk%2B8%2Byyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMEIdSVi4nc%2B%2F0WInGKtwDFjrOaUKbqFFi2DwGAnXAhTnilFMl8lSzZrOT6wbm%2Fc%2FUnEz7r9cVQCGSL7T%2Fakuzn9tZuI%2FHoAPg6nnfz6DIPdoD2fJ1drli1EVVOsJgcBu2ft471MwzuPKAgRE2F1UrYEOfDZxQS8jka1kHunbsGIkZhyZ7plk%2FBoWogMJ1AdkODGHGHRUgLgEiIx8Tv5Q81C27cTcoTv%2F%2BAfPYrct43N9zMycs4LAfzr2Ylj5yrLYza0Ix7lfr%2F%2F0rCmUAmR5AuFa9xSB9T1vGJJVNzgnLQM7tuGQLhMlQZJwqRwSHCOrUP%2B8chNonPf0Ljd0KJxkIKYxIp0z%2FrPkOTDkOJih5Dk9Qhg809n0leLgnC5XTvGDMqVZdVQvU9wDKbLE6cVLeFsyxlA4HKUgP9B7pETHo1rpnudPfvp9ZIBDddUTGLOv3M9u3c9D2w2bLLQADZDLMEW1AQ3uHMiM9n3rwhyIXPH%2FzF6Zuj7uE%2BNo%2B2j57WzoL%2BYXSlTFLPGs4VETAhSAQZY4qcgjz2552E2kt16qX4xRbnal2Ojl2%2B6Cw9N4kD3ccu43%2B1%2BHwKAY%2FXghG71M9%2F2290WQMI1AacxU2ujb%2Fo%2BGhPIhHuw6a7twRSLqfnoH%2FAoJ9cPUZ59iKrUww%2BMnYwQY6pgEKOvo7qqLyXUX34Dv8%2BXQbaFYNTLV75zu8B3TJzyFaB3w%2Bc8dI5Ti2hvXi9OuXQBYoGQxYQQALAAkQYEFVu%2B566CGVTe47lkzEdsa%2BtOD444qadwpHc17sYtbjzMiCqplM03nR%2B1tamFrFOT3YB%2B2s7CbCDqw%2B6LqOA8Akso3PLNRIjyRwehd3aHqbg7kfuFp05aLLM1SvCHA8vsaEHlT%2BFKat9Xfl&X-Amz-Signature=e149b36f3b423eac8e690ecb95695afa960bea97414b0a0cc2967a721ccf108e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIM3QINX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkGsw6oIcZ7IoS4rhpYoDlbOTA1z1165wK9Fw2CxvAqAiB2B%2BJrUjuLllaH6GxHXnemHN1AhkpwLtzVv8Nqk%2B8%2Byyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMEIdSVi4nc%2B%2F0WInGKtwDFjrOaUKbqFFi2DwGAnXAhTnilFMl8lSzZrOT6wbm%2Fc%2FUnEz7r9cVQCGSL7T%2Fakuzn9tZuI%2FHoAPg6nnfz6DIPdoD2fJ1drli1EVVOsJgcBu2ft471MwzuPKAgRE2F1UrYEOfDZxQS8jka1kHunbsGIkZhyZ7plk%2FBoWogMJ1AdkODGHGHRUgLgEiIx8Tv5Q81C27cTcoTv%2F%2BAfPYrct43N9zMycs4LAfzr2Ylj5yrLYza0Ix7lfr%2F%2F0rCmUAmR5AuFa9xSB9T1vGJJVNzgnLQM7tuGQLhMlQZJwqRwSHCOrUP%2B8chNonPf0Ljd0KJxkIKYxIp0z%2FrPkOTDkOJih5Dk9Qhg809n0leLgnC5XTvGDMqVZdVQvU9wDKbLE6cVLeFsyxlA4HKUgP9B7pETHo1rpnudPfvp9ZIBDddUTGLOv3M9u3c9D2w2bLLQADZDLMEW1AQ3uHMiM9n3rwhyIXPH%2FzF6Zuj7uE%2BNo%2B2j57WzoL%2BYXSlTFLPGs4VETAhSAQZY4qcgjz2552E2kt16qX4xRbnal2Ojl2%2B6Cw9N4kD3ccu43%2B1%2BHwKAY%2FXghG71M9%2F2290WQMI1AacxU2ujb%2Fo%2BGhPIhHuw6a7twRSLqfnoH%2FAoJ9cPUZ59iKrUww%2BMnYwQY6pgEKOvo7qqLyXUX34Dv8%2BXQbaFYNTLV75zu8B3TJzyFaB3w%2Bc8dI5Ti2hvXi9OuXQBYoGQxYQQALAAkQYEFVu%2B566CGVTe47lkzEdsa%2BtOD444qadwpHc17sYtbjzMiCqplM03nR%2B1tamFrFOT3YB%2B2s7CbCDqw%2B6LqOA8Akso3PLNRIjyRwehd3aHqbg7kfuFp05aLLM1SvCHA8vsaEHlT%2BFKat9Xfl&X-Amz-Signature=58a49bad6d90c42b217337aba066b6536413ae8cefa06c087a7f24d38c28b9f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIM3QINX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkGsw6oIcZ7IoS4rhpYoDlbOTA1z1165wK9Fw2CxvAqAiB2B%2BJrUjuLllaH6GxHXnemHN1AhkpwLtzVv8Nqk%2B8%2Byyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMEIdSVi4nc%2B%2F0WInGKtwDFjrOaUKbqFFi2DwGAnXAhTnilFMl8lSzZrOT6wbm%2Fc%2FUnEz7r9cVQCGSL7T%2Fakuzn9tZuI%2FHoAPg6nnfz6DIPdoD2fJ1drli1EVVOsJgcBu2ft471MwzuPKAgRE2F1UrYEOfDZxQS8jka1kHunbsGIkZhyZ7plk%2FBoWogMJ1AdkODGHGHRUgLgEiIx8Tv5Q81C27cTcoTv%2F%2BAfPYrct43N9zMycs4LAfzr2Ylj5yrLYza0Ix7lfr%2F%2F0rCmUAmR5AuFa9xSB9T1vGJJVNzgnLQM7tuGQLhMlQZJwqRwSHCOrUP%2B8chNonPf0Ljd0KJxkIKYxIp0z%2FrPkOTDkOJih5Dk9Qhg809n0leLgnC5XTvGDMqVZdVQvU9wDKbLE6cVLeFsyxlA4HKUgP9B7pETHo1rpnudPfvp9ZIBDddUTGLOv3M9u3c9D2w2bLLQADZDLMEW1AQ3uHMiM9n3rwhyIXPH%2FzF6Zuj7uE%2BNo%2B2j57WzoL%2BYXSlTFLPGs4VETAhSAQZY4qcgjz2552E2kt16qX4xRbnal2Ojl2%2B6Cw9N4kD3ccu43%2B1%2BHwKAY%2FXghG71M9%2F2290WQMI1AacxU2ujb%2Fo%2BGhPIhHuw6a7twRSLqfnoH%2FAoJ9cPUZ59iKrUww%2BMnYwQY6pgEKOvo7qqLyXUX34Dv8%2BXQbaFYNTLV75zu8B3TJzyFaB3w%2Bc8dI5Ti2hvXi9OuXQBYoGQxYQQALAAkQYEFVu%2B566CGVTe47lkzEdsa%2BtOD444qadwpHc17sYtbjzMiCqplM03nR%2B1tamFrFOT3YB%2B2s7CbCDqw%2B6LqOA8Akso3PLNRIjyRwehd3aHqbg7kfuFp05aLLM1SvCHA8vsaEHlT%2BFKat9Xfl&X-Amz-Signature=080913aa4a05fa24b5dc8eba947d7d6f35090224d3baeb9538679bcca29a65d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIM3QINX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkGsw6oIcZ7IoS4rhpYoDlbOTA1z1165wK9Fw2CxvAqAiB2B%2BJrUjuLllaH6GxHXnemHN1AhkpwLtzVv8Nqk%2B8%2Byyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMEIdSVi4nc%2B%2F0WInGKtwDFjrOaUKbqFFi2DwGAnXAhTnilFMl8lSzZrOT6wbm%2Fc%2FUnEz7r9cVQCGSL7T%2Fakuzn9tZuI%2FHoAPg6nnfz6DIPdoD2fJ1drli1EVVOsJgcBu2ft471MwzuPKAgRE2F1UrYEOfDZxQS8jka1kHunbsGIkZhyZ7plk%2FBoWogMJ1AdkODGHGHRUgLgEiIx8Tv5Q81C27cTcoTv%2F%2BAfPYrct43N9zMycs4LAfzr2Ylj5yrLYza0Ix7lfr%2F%2F0rCmUAmR5AuFa9xSB9T1vGJJVNzgnLQM7tuGQLhMlQZJwqRwSHCOrUP%2B8chNonPf0Ljd0KJxkIKYxIp0z%2FrPkOTDkOJih5Dk9Qhg809n0leLgnC5XTvGDMqVZdVQvU9wDKbLE6cVLeFsyxlA4HKUgP9B7pETHo1rpnudPfvp9ZIBDddUTGLOv3M9u3c9D2w2bLLQADZDLMEW1AQ3uHMiM9n3rwhyIXPH%2FzF6Zuj7uE%2BNo%2B2j57WzoL%2BYXSlTFLPGs4VETAhSAQZY4qcgjz2552E2kt16qX4xRbnal2Ojl2%2B6Cw9N4kD3ccu43%2B1%2BHwKAY%2FXghG71M9%2F2290WQMI1AacxU2ujb%2Fo%2BGhPIhHuw6a7twRSLqfnoH%2FAoJ9cPUZ59iKrUww%2BMnYwQY6pgEKOvo7qqLyXUX34Dv8%2BXQbaFYNTLV75zu8B3TJzyFaB3w%2Bc8dI5Ti2hvXi9OuXQBYoGQxYQQALAAkQYEFVu%2B566CGVTe47lkzEdsa%2BtOD444qadwpHc17sYtbjzMiCqplM03nR%2B1tamFrFOT3YB%2B2s7CbCDqw%2B6LqOA8Akso3PLNRIjyRwehd3aHqbg7kfuFp05aLLM1SvCHA8vsaEHlT%2BFKat9Xfl&X-Amz-Signature=b24a97d2e1da690298227d2f74e5a6b9fdd8a96a2650b2fda2f8866c658bfbeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIM3QINX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkGsw6oIcZ7IoS4rhpYoDlbOTA1z1165wK9Fw2CxvAqAiB2B%2BJrUjuLllaH6GxHXnemHN1AhkpwLtzVv8Nqk%2B8%2Byyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMEIdSVi4nc%2B%2F0WInGKtwDFjrOaUKbqFFi2DwGAnXAhTnilFMl8lSzZrOT6wbm%2Fc%2FUnEz7r9cVQCGSL7T%2Fakuzn9tZuI%2FHoAPg6nnfz6DIPdoD2fJ1drli1EVVOsJgcBu2ft471MwzuPKAgRE2F1UrYEOfDZxQS8jka1kHunbsGIkZhyZ7plk%2FBoWogMJ1AdkODGHGHRUgLgEiIx8Tv5Q81C27cTcoTv%2F%2BAfPYrct43N9zMycs4LAfzr2Ylj5yrLYza0Ix7lfr%2F%2F0rCmUAmR5AuFa9xSB9T1vGJJVNzgnLQM7tuGQLhMlQZJwqRwSHCOrUP%2B8chNonPf0Ljd0KJxkIKYxIp0z%2FrPkOTDkOJih5Dk9Qhg809n0leLgnC5XTvGDMqVZdVQvU9wDKbLE6cVLeFsyxlA4HKUgP9B7pETHo1rpnudPfvp9ZIBDddUTGLOv3M9u3c9D2w2bLLQADZDLMEW1AQ3uHMiM9n3rwhyIXPH%2FzF6Zuj7uE%2BNo%2B2j57WzoL%2BYXSlTFLPGs4VETAhSAQZY4qcgjz2552E2kt16qX4xRbnal2Ojl2%2B6Cw9N4kD3ccu43%2B1%2BHwKAY%2FXghG71M9%2F2290WQMI1AacxU2ujb%2Fo%2BGhPIhHuw6a7twRSLqfnoH%2FAoJ9cPUZ59iKrUww%2BMnYwQY6pgEKOvo7qqLyXUX34Dv8%2BXQbaFYNTLV75zu8B3TJzyFaB3w%2Bc8dI5Ti2hvXi9OuXQBYoGQxYQQALAAkQYEFVu%2B566CGVTe47lkzEdsa%2BtOD444qadwpHc17sYtbjzMiCqplM03nR%2B1tamFrFOT3YB%2B2s7CbCDqw%2B6LqOA8Akso3PLNRIjyRwehd3aHqbg7kfuFp05aLLM1SvCHA8vsaEHlT%2BFKat9Xfl&X-Amz-Signature=6ee14bbb52a5ca32620e27e9101a141b13f8eae3e05db6409b5c0690b1e75307&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIM3QINX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkGsw6oIcZ7IoS4rhpYoDlbOTA1z1165wK9Fw2CxvAqAiB2B%2BJrUjuLllaH6GxHXnemHN1AhkpwLtzVv8Nqk%2B8%2Byyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMEIdSVi4nc%2B%2F0WInGKtwDFjrOaUKbqFFi2DwGAnXAhTnilFMl8lSzZrOT6wbm%2Fc%2FUnEz7r9cVQCGSL7T%2Fakuzn9tZuI%2FHoAPg6nnfz6DIPdoD2fJ1drli1EVVOsJgcBu2ft471MwzuPKAgRE2F1UrYEOfDZxQS8jka1kHunbsGIkZhyZ7plk%2FBoWogMJ1AdkODGHGHRUgLgEiIx8Tv5Q81C27cTcoTv%2F%2BAfPYrct43N9zMycs4LAfzr2Ylj5yrLYza0Ix7lfr%2F%2F0rCmUAmR5AuFa9xSB9T1vGJJVNzgnLQM7tuGQLhMlQZJwqRwSHCOrUP%2B8chNonPf0Ljd0KJxkIKYxIp0z%2FrPkOTDkOJih5Dk9Qhg809n0leLgnC5XTvGDMqVZdVQvU9wDKbLE6cVLeFsyxlA4HKUgP9B7pETHo1rpnudPfvp9ZIBDddUTGLOv3M9u3c9D2w2bLLQADZDLMEW1AQ3uHMiM9n3rwhyIXPH%2FzF6Zuj7uE%2BNo%2B2j57WzoL%2BYXSlTFLPGs4VETAhSAQZY4qcgjz2552E2kt16qX4xRbnal2Ojl2%2B6Cw9N4kD3ccu43%2B1%2BHwKAY%2FXghG71M9%2F2290WQMI1AacxU2ujb%2Fo%2BGhPIhHuw6a7twRSLqfnoH%2FAoJ9cPUZ59iKrUww%2BMnYwQY6pgEKOvo7qqLyXUX34Dv8%2BXQbaFYNTLV75zu8B3TJzyFaB3w%2Bc8dI5Ti2hvXi9OuXQBYoGQxYQQALAAkQYEFVu%2B566CGVTe47lkzEdsa%2BtOD444qadwpHc17sYtbjzMiCqplM03nR%2B1tamFrFOT3YB%2B2s7CbCDqw%2B6LqOA8Akso3PLNRIjyRwehd3aHqbg7kfuFp05aLLM1SvCHA8vsaEHlT%2BFKat9Xfl&X-Amz-Signature=f1cd656de9e55fe302161a58d00469a3aa4a4ac232df6af23b2cb36eaa5ba59b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
