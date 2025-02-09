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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54ILDCZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyGuRCYk%2BjfCKy2OysQC%2FuyBEiQQ41I4iOWAAAdlbz0AiEAmXS8neZguD7JrbCupi75ASeGmXkG4wMvLek3E3jLcpgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjw1zVYH9BKw4ju6ircA3qv72zI%2BhvywiR4LLCYOwuCrOghmPajjJwumUjPWpHmgxre3KtWw0bs3xJ%2FoVNU251PzuqLQvIUoxwMIYKrn%2BoNde4kgIqGrO9RaukbTPYxxiFSd4YsLFQTMbGw%2B2ZUQKmN%2BeQtUQ32gNZDS%2BP2fWf4FJCBm1XEJBsaKIZWKjYNxbIcY8cNxDWJ5XNtQQK4BqBV7CWYk7SF0BT1STafoVx2jpIk1c4F9xZQKfpkDmpZOmsNy4bfF8shJW8p4S0zyYKifmN6sPqyoKJ7xdogMwUa3lfFcr6yZ749UR4SU3NyTq6ZIQ9fLUKuwz2sEXE4NzG0vZ9gL%2FHL5YTF9voxnj7T65aFgIODK60c3slbDJGkAr1WwNNCPYoRNTXuTKoC5JnnQTMkaL22rrFzUqaH%2FTZMQwOHoP3RJtwpFGbTfZR%2Bzr6D3yxNApP5lJiLqww8iL065QS6MgYJFdmVxOHU1RST42NwmhtMK182VIc4UA1BnWxAdpNqtb%2BSm59Hw44J2baYn2dqJvWrM%2FCu8V5HbKwU0xNzx0cyOoCeJ0LY6WnferaG9cf%2BV8fp8LlC2d3YTV747iepNefXbtem818T2OmS%2FY9rJds2vMHs1OQ02neN7xmlmvBrGBU41uzTMKi%2FoL0GOqUBJeWjEIKMPPGHqE6Sy1JJMlt8DAysBbBxMfEWqxfeIRhkwQES9TWnEy4HZ18L1MkPe0r31%2BGI%2BDJYmiAJY%2BHR5A4OHAPLoL3juGVswyTYKyzm5garSmN5sB%2FHC%2FghuXTUVCYRVNRCwjx4ZFGLQJw%2F%2Brafgv4KDGBsAy8iwjZPsss7%2FJMBskd5KQEu845eOXEETE1BDOqYWAGmIGWHbzMLh0wu80fN&X-Amz-Signature=ed0ca242adcdde093bf6c8f5b010c9a2fbc607966ddc59a5cb9088d9d5a9f573&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54ILDCZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyGuRCYk%2BjfCKy2OysQC%2FuyBEiQQ41I4iOWAAAdlbz0AiEAmXS8neZguD7JrbCupi75ASeGmXkG4wMvLek3E3jLcpgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjw1zVYH9BKw4ju6ircA3qv72zI%2BhvywiR4LLCYOwuCrOghmPajjJwumUjPWpHmgxre3KtWw0bs3xJ%2FoVNU251PzuqLQvIUoxwMIYKrn%2BoNde4kgIqGrO9RaukbTPYxxiFSd4YsLFQTMbGw%2B2ZUQKmN%2BeQtUQ32gNZDS%2BP2fWf4FJCBm1XEJBsaKIZWKjYNxbIcY8cNxDWJ5XNtQQK4BqBV7CWYk7SF0BT1STafoVx2jpIk1c4F9xZQKfpkDmpZOmsNy4bfF8shJW8p4S0zyYKifmN6sPqyoKJ7xdogMwUa3lfFcr6yZ749UR4SU3NyTq6ZIQ9fLUKuwz2sEXE4NzG0vZ9gL%2FHL5YTF9voxnj7T65aFgIODK60c3slbDJGkAr1WwNNCPYoRNTXuTKoC5JnnQTMkaL22rrFzUqaH%2FTZMQwOHoP3RJtwpFGbTfZR%2Bzr6D3yxNApP5lJiLqww8iL065QS6MgYJFdmVxOHU1RST42NwmhtMK182VIc4UA1BnWxAdpNqtb%2BSm59Hw44J2baYn2dqJvWrM%2FCu8V5HbKwU0xNzx0cyOoCeJ0LY6WnferaG9cf%2BV8fp8LlC2d3YTV747iepNefXbtem818T2OmS%2FY9rJds2vMHs1OQ02neN7xmlmvBrGBU41uzTMKi%2FoL0GOqUBJeWjEIKMPPGHqE6Sy1JJMlt8DAysBbBxMfEWqxfeIRhkwQES9TWnEy4HZ18L1MkPe0r31%2BGI%2BDJYmiAJY%2BHR5A4OHAPLoL3juGVswyTYKyzm5garSmN5sB%2FHC%2FghuXTUVCYRVNRCwjx4ZFGLQJw%2F%2Brafgv4KDGBsAy8iwjZPsss7%2FJMBskd5KQEu845eOXEETE1BDOqYWAGmIGWHbzMLh0wu80fN&X-Amz-Signature=9fa219bed03dce3e6c1b2619ec0ded065df16279f02f251cf9598ff5d9df2ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54ILDCZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyGuRCYk%2BjfCKy2OysQC%2FuyBEiQQ41I4iOWAAAdlbz0AiEAmXS8neZguD7JrbCupi75ASeGmXkG4wMvLek3E3jLcpgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjw1zVYH9BKw4ju6ircA3qv72zI%2BhvywiR4LLCYOwuCrOghmPajjJwumUjPWpHmgxre3KtWw0bs3xJ%2FoVNU251PzuqLQvIUoxwMIYKrn%2BoNde4kgIqGrO9RaukbTPYxxiFSd4YsLFQTMbGw%2B2ZUQKmN%2BeQtUQ32gNZDS%2BP2fWf4FJCBm1XEJBsaKIZWKjYNxbIcY8cNxDWJ5XNtQQK4BqBV7CWYk7SF0BT1STafoVx2jpIk1c4F9xZQKfpkDmpZOmsNy4bfF8shJW8p4S0zyYKifmN6sPqyoKJ7xdogMwUa3lfFcr6yZ749UR4SU3NyTq6ZIQ9fLUKuwz2sEXE4NzG0vZ9gL%2FHL5YTF9voxnj7T65aFgIODK60c3slbDJGkAr1WwNNCPYoRNTXuTKoC5JnnQTMkaL22rrFzUqaH%2FTZMQwOHoP3RJtwpFGbTfZR%2Bzr6D3yxNApP5lJiLqww8iL065QS6MgYJFdmVxOHU1RST42NwmhtMK182VIc4UA1BnWxAdpNqtb%2BSm59Hw44J2baYn2dqJvWrM%2FCu8V5HbKwU0xNzx0cyOoCeJ0LY6WnferaG9cf%2BV8fp8LlC2d3YTV747iepNefXbtem818T2OmS%2FY9rJds2vMHs1OQ02neN7xmlmvBrGBU41uzTMKi%2FoL0GOqUBJeWjEIKMPPGHqE6Sy1JJMlt8DAysBbBxMfEWqxfeIRhkwQES9TWnEy4HZ18L1MkPe0r31%2BGI%2BDJYmiAJY%2BHR5A4OHAPLoL3juGVswyTYKyzm5garSmN5sB%2FHC%2FghuXTUVCYRVNRCwjx4ZFGLQJw%2F%2Brafgv4KDGBsAy8iwjZPsss7%2FJMBskd5KQEu845eOXEETE1BDOqYWAGmIGWHbzMLh0wu80fN&X-Amz-Signature=a8418236c4e74c400e9fece736fa3b3051070c01b64f29d39800fe789046727a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54ILDCZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyGuRCYk%2BjfCKy2OysQC%2FuyBEiQQ41I4iOWAAAdlbz0AiEAmXS8neZguD7JrbCupi75ASeGmXkG4wMvLek3E3jLcpgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjw1zVYH9BKw4ju6ircA3qv72zI%2BhvywiR4LLCYOwuCrOghmPajjJwumUjPWpHmgxre3KtWw0bs3xJ%2FoVNU251PzuqLQvIUoxwMIYKrn%2BoNde4kgIqGrO9RaukbTPYxxiFSd4YsLFQTMbGw%2B2ZUQKmN%2BeQtUQ32gNZDS%2BP2fWf4FJCBm1XEJBsaKIZWKjYNxbIcY8cNxDWJ5XNtQQK4BqBV7CWYk7SF0BT1STafoVx2jpIk1c4F9xZQKfpkDmpZOmsNy4bfF8shJW8p4S0zyYKifmN6sPqyoKJ7xdogMwUa3lfFcr6yZ749UR4SU3NyTq6ZIQ9fLUKuwz2sEXE4NzG0vZ9gL%2FHL5YTF9voxnj7T65aFgIODK60c3slbDJGkAr1WwNNCPYoRNTXuTKoC5JnnQTMkaL22rrFzUqaH%2FTZMQwOHoP3RJtwpFGbTfZR%2Bzr6D3yxNApP5lJiLqww8iL065QS6MgYJFdmVxOHU1RST42NwmhtMK182VIc4UA1BnWxAdpNqtb%2BSm59Hw44J2baYn2dqJvWrM%2FCu8V5HbKwU0xNzx0cyOoCeJ0LY6WnferaG9cf%2BV8fp8LlC2d3YTV747iepNefXbtem818T2OmS%2FY9rJds2vMHs1OQ02neN7xmlmvBrGBU41uzTMKi%2FoL0GOqUBJeWjEIKMPPGHqE6Sy1JJMlt8DAysBbBxMfEWqxfeIRhkwQES9TWnEy4HZ18L1MkPe0r31%2BGI%2BDJYmiAJY%2BHR5A4OHAPLoL3juGVswyTYKyzm5garSmN5sB%2FHC%2FghuXTUVCYRVNRCwjx4ZFGLQJw%2F%2Brafgv4KDGBsAy8iwjZPsss7%2FJMBskd5KQEu845eOXEETE1BDOqYWAGmIGWHbzMLh0wu80fN&X-Amz-Signature=303bf11a352ca4d37d277bc8a9ae7a4dbeec7c4782e741ff1e3057f232a35fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54ILDCZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyGuRCYk%2BjfCKy2OysQC%2FuyBEiQQ41I4iOWAAAdlbz0AiEAmXS8neZguD7JrbCupi75ASeGmXkG4wMvLek3E3jLcpgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjw1zVYH9BKw4ju6ircA3qv72zI%2BhvywiR4LLCYOwuCrOghmPajjJwumUjPWpHmgxre3KtWw0bs3xJ%2FoVNU251PzuqLQvIUoxwMIYKrn%2BoNde4kgIqGrO9RaukbTPYxxiFSd4YsLFQTMbGw%2B2ZUQKmN%2BeQtUQ32gNZDS%2BP2fWf4FJCBm1XEJBsaKIZWKjYNxbIcY8cNxDWJ5XNtQQK4BqBV7CWYk7SF0BT1STafoVx2jpIk1c4F9xZQKfpkDmpZOmsNy4bfF8shJW8p4S0zyYKifmN6sPqyoKJ7xdogMwUa3lfFcr6yZ749UR4SU3NyTq6ZIQ9fLUKuwz2sEXE4NzG0vZ9gL%2FHL5YTF9voxnj7T65aFgIODK60c3slbDJGkAr1WwNNCPYoRNTXuTKoC5JnnQTMkaL22rrFzUqaH%2FTZMQwOHoP3RJtwpFGbTfZR%2Bzr6D3yxNApP5lJiLqww8iL065QS6MgYJFdmVxOHU1RST42NwmhtMK182VIc4UA1BnWxAdpNqtb%2BSm59Hw44J2baYn2dqJvWrM%2FCu8V5HbKwU0xNzx0cyOoCeJ0LY6WnferaG9cf%2BV8fp8LlC2d3YTV747iepNefXbtem818T2OmS%2FY9rJds2vMHs1OQ02neN7xmlmvBrGBU41uzTMKi%2FoL0GOqUBJeWjEIKMPPGHqE6Sy1JJMlt8DAysBbBxMfEWqxfeIRhkwQES9TWnEy4HZ18L1MkPe0r31%2BGI%2BDJYmiAJY%2BHR5A4OHAPLoL3juGVswyTYKyzm5garSmN5sB%2FHC%2FghuXTUVCYRVNRCwjx4ZFGLQJw%2F%2Brafgv4KDGBsAy8iwjZPsss7%2FJMBskd5KQEu845eOXEETE1BDOqYWAGmIGWHbzMLh0wu80fN&X-Amz-Signature=6420b48122d766bc88c7ba11acf930ed15a47928b5f252607598d2ce9322b70b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54ILDCZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyGuRCYk%2BjfCKy2OysQC%2FuyBEiQQ41I4iOWAAAdlbz0AiEAmXS8neZguD7JrbCupi75ASeGmXkG4wMvLek3E3jLcpgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjw1zVYH9BKw4ju6ircA3qv72zI%2BhvywiR4LLCYOwuCrOghmPajjJwumUjPWpHmgxre3KtWw0bs3xJ%2FoVNU251PzuqLQvIUoxwMIYKrn%2BoNde4kgIqGrO9RaukbTPYxxiFSd4YsLFQTMbGw%2B2ZUQKmN%2BeQtUQ32gNZDS%2BP2fWf4FJCBm1XEJBsaKIZWKjYNxbIcY8cNxDWJ5XNtQQK4BqBV7CWYk7SF0BT1STafoVx2jpIk1c4F9xZQKfpkDmpZOmsNy4bfF8shJW8p4S0zyYKifmN6sPqyoKJ7xdogMwUa3lfFcr6yZ749UR4SU3NyTq6ZIQ9fLUKuwz2sEXE4NzG0vZ9gL%2FHL5YTF9voxnj7T65aFgIODK60c3slbDJGkAr1WwNNCPYoRNTXuTKoC5JnnQTMkaL22rrFzUqaH%2FTZMQwOHoP3RJtwpFGbTfZR%2Bzr6D3yxNApP5lJiLqww8iL065QS6MgYJFdmVxOHU1RST42NwmhtMK182VIc4UA1BnWxAdpNqtb%2BSm59Hw44J2baYn2dqJvWrM%2FCu8V5HbKwU0xNzx0cyOoCeJ0LY6WnferaG9cf%2BV8fp8LlC2d3YTV747iepNefXbtem818T2OmS%2FY9rJds2vMHs1OQ02neN7xmlmvBrGBU41uzTMKi%2FoL0GOqUBJeWjEIKMPPGHqE6Sy1JJMlt8DAysBbBxMfEWqxfeIRhkwQES9TWnEy4HZ18L1MkPe0r31%2BGI%2BDJYmiAJY%2BHR5A4OHAPLoL3juGVswyTYKyzm5garSmN5sB%2FHC%2FghuXTUVCYRVNRCwjx4ZFGLQJw%2F%2Brafgv4KDGBsAy8iwjZPsss7%2FJMBskd5KQEu845eOXEETE1BDOqYWAGmIGWHbzMLh0wu80fN&X-Amz-Signature=83992769afdaaf935b23429b2ac23a3db6317d76cb22e72a5b49adbb40bda760&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54ILDCZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyGuRCYk%2BjfCKy2OysQC%2FuyBEiQQ41I4iOWAAAdlbz0AiEAmXS8neZguD7JrbCupi75ASeGmXkG4wMvLek3E3jLcpgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjw1zVYH9BKw4ju6ircA3qv72zI%2BhvywiR4LLCYOwuCrOghmPajjJwumUjPWpHmgxre3KtWw0bs3xJ%2FoVNU251PzuqLQvIUoxwMIYKrn%2BoNde4kgIqGrO9RaukbTPYxxiFSd4YsLFQTMbGw%2B2ZUQKmN%2BeQtUQ32gNZDS%2BP2fWf4FJCBm1XEJBsaKIZWKjYNxbIcY8cNxDWJ5XNtQQK4BqBV7CWYk7SF0BT1STafoVx2jpIk1c4F9xZQKfpkDmpZOmsNy4bfF8shJW8p4S0zyYKifmN6sPqyoKJ7xdogMwUa3lfFcr6yZ749UR4SU3NyTq6ZIQ9fLUKuwz2sEXE4NzG0vZ9gL%2FHL5YTF9voxnj7T65aFgIODK60c3slbDJGkAr1WwNNCPYoRNTXuTKoC5JnnQTMkaL22rrFzUqaH%2FTZMQwOHoP3RJtwpFGbTfZR%2Bzr6D3yxNApP5lJiLqww8iL065QS6MgYJFdmVxOHU1RST42NwmhtMK182VIc4UA1BnWxAdpNqtb%2BSm59Hw44J2baYn2dqJvWrM%2FCu8V5HbKwU0xNzx0cyOoCeJ0LY6WnferaG9cf%2BV8fp8LlC2d3YTV747iepNefXbtem818T2OmS%2FY9rJds2vMHs1OQ02neN7xmlmvBrGBU41uzTMKi%2FoL0GOqUBJeWjEIKMPPGHqE6Sy1JJMlt8DAysBbBxMfEWqxfeIRhkwQES9TWnEy4HZ18L1MkPe0r31%2BGI%2BDJYmiAJY%2BHR5A4OHAPLoL3juGVswyTYKyzm5garSmN5sB%2FHC%2FghuXTUVCYRVNRCwjx4ZFGLQJw%2F%2Brafgv4KDGBsAy8iwjZPsss7%2FJMBskd5KQEu845eOXEETE1BDOqYWAGmIGWHbzMLh0wu80fN&X-Amz-Signature=624bfb47cee651529c106329353ce917259d5f59bf60477019d209be6c737616&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54ILDCZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyGuRCYk%2BjfCKy2OysQC%2FuyBEiQQ41I4iOWAAAdlbz0AiEAmXS8neZguD7JrbCupi75ASeGmXkG4wMvLek3E3jLcpgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjw1zVYH9BKw4ju6ircA3qv72zI%2BhvywiR4LLCYOwuCrOghmPajjJwumUjPWpHmgxre3KtWw0bs3xJ%2FoVNU251PzuqLQvIUoxwMIYKrn%2BoNde4kgIqGrO9RaukbTPYxxiFSd4YsLFQTMbGw%2B2ZUQKmN%2BeQtUQ32gNZDS%2BP2fWf4FJCBm1XEJBsaKIZWKjYNxbIcY8cNxDWJ5XNtQQK4BqBV7CWYk7SF0BT1STafoVx2jpIk1c4F9xZQKfpkDmpZOmsNy4bfF8shJW8p4S0zyYKifmN6sPqyoKJ7xdogMwUa3lfFcr6yZ749UR4SU3NyTq6ZIQ9fLUKuwz2sEXE4NzG0vZ9gL%2FHL5YTF9voxnj7T65aFgIODK60c3slbDJGkAr1WwNNCPYoRNTXuTKoC5JnnQTMkaL22rrFzUqaH%2FTZMQwOHoP3RJtwpFGbTfZR%2Bzr6D3yxNApP5lJiLqww8iL065QS6MgYJFdmVxOHU1RST42NwmhtMK182VIc4UA1BnWxAdpNqtb%2BSm59Hw44J2baYn2dqJvWrM%2FCu8V5HbKwU0xNzx0cyOoCeJ0LY6WnferaG9cf%2BV8fp8LlC2d3YTV747iepNefXbtem818T2OmS%2FY9rJds2vMHs1OQ02neN7xmlmvBrGBU41uzTMKi%2FoL0GOqUBJeWjEIKMPPGHqE6Sy1JJMlt8DAysBbBxMfEWqxfeIRhkwQES9TWnEy4HZ18L1MkPe0r31%2BGI%2BDJYmiAJY%2BHR5A4OHAPLoL3juGVswyTYKyzm5garSmN5sB%2FHC%2FghuXTUVCYRVNRCwjx4ZFGLQJw%2F%2Brafgv4KDGBsAy8iwjZPsss7%2FJMBskd5KQEu845eOXEETE1BDOqYWAGmIGWHbzMLh0wu80fN&X-Amz-Signature=7403e91d3ae1d75c55f5162ead408af64dbabc0899f19440dc117684f8e65e75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
