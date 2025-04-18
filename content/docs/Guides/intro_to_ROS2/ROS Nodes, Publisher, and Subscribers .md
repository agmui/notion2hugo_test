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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRXPN5FU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2E3y%2BLIxsJAS78GgUZ%2FW5XcOj1qd4c0Pgz9Fm%2B9S9wQIgf2DNE52RT2eDBPOPiNF9hwUe1lmnwl4mpTxTrHuiAhsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABB14MBRF3UM%2BetdSrcA82gICepyPh%2Fs7lIGbeLOAJURAYx1q3xyRCMrD9A5rtl26IgsDocF1SxsGlOvCrCPPvqA6Hg4P3EI6%2FxAtG1R8TcRnsWNAT3BrZMbJx5Dqoqj5X57s43JJeZnR9F6kpXnbGqNBb70gnFRCwtQ4bTRSG%2BrNZ5pR7oFSqv9gaDuz9h2M3bYOkGdvtTDEWfF29SPK%2BFsXeEDIPUO6PTFMZjCu8bREE7OeQyjwogjpjqr3mXNtkndkmwMCE%2B%2Bx31%2Bm4KBhR0guc9vU8c9lr9P9BAqi%2B6ezl8sLrP%2BZHLM01ZL3VEGMh2UUgrb8j7pB%2F8AslT%2B9ZfpkBdXbeMv55U4JDAYgPN7qjEBpZS%2BqolDex%2BKd4IWrtJdbM9lf8sGbDjuh%2FajedU1pYJhJ27%2F%2FLN%2FURAUABCainOYXgm%2Bf1dXmpbNRJeJIlEQI5J7NSi6eFxrwUIP7YaRD3ev%2BWiyfECkpjKD6nlipiPnZndQ6zgkB7yOBhe2njz5jYrGycZAQJBagBHA%2Bhtcq%2FBNGa2ArVVPpLLlRK17QYdHQ4SROp9aoJA5VTwNmTvbE2qDXCuIN8zF0pJSxGDfev3qWUA%2BnE5uXy%2FkJCJRSrUpUzTyj6zg0rH1qyrwKGTjvCowvNELaojMIi0i8AGOqUBwSW%2Bc9ZlV5e4w3V%2BUfAaKaB1prnKcJ2tNvLidTVDKRH4%2F6LuFnljl5RM0CJ9tYChEoTEAr4bdy6zhPDGucZmfYuQin0evIrszyiIqcnObSj3sGQRMcJH67HQQWFNFehXB5%2BZC5J9h3eWxdGtMShrKXiqiXjIqN2pqrg5z%2BixlbI33zeAJPgGoIe5CUVI273h0PXaPU%2FjPDnkxoF4P7bm%2BD8znKgz&X-Amz-Signature=4c0b181856ea545eb8e3fd76907c5b541037a31e4b31d1101431140cc8da272f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRXPN5FU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2E3y%2BLIxsJAS78GgUZ%2FW5XcOj1qd4c0Pgz9Fm%2B9S9wQIgf2DNE52RT2eDBPOPiNF9hwUe1lmnwl4mpTxTrHuiAhsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABB14MBRF3UM%2BetdSrcA82gICepyPh%2Fs7lIGbeLOAJURAYx1q3xyRCMrD9A5rtl26IgsDocF1SxsGlOvCrCPPvqA6Hg4P3EI6%2FxAtG1R8TcRnsWNAT3BrZMbJx5Dqoqj5X57s43JJeZnR9F6kpXnbGqNBb70gnFRCwtQ4bTRSG%2BrNZ5pR7oFSqv9gaDuz9h2M3bYOkGdvtTDEWfF29SPK%2BFsXeEDIPUO6PTFMZjCu8bREE7OeQyjwogjpjqr3mXNtkndkmwMCE%2B%2Bx31%2Bm4KBhR0guc9vU8c9lr9P9BAqi%2B6ezl8sLrP%2BZHLM01ZL3VEGMh2UUgrb8j7pB%2F8AslT%2B9ZfpkBdXbeMv55U4JDAYgPN7qjEBpZS%2BqolDex%2BKd4IWrtJdbM9lf8sGbDjuh%2FajedU1pYJhJ27%2F%2FLN%2FURAUABCainOYXgm%2Bf1dXmpbNRJeJIlEQI5J7NSi6eFxrwUIP7YaRD3ev%2BWiyfECkpjKD6nlipiPnZndQ6zgkB7yOBhe2njz5jYrGycZAQJBagBHA%2Bhtcq%2FBNGa2ArVVPpLLlRK17QYdHQ4SROp9aoJA5VTwNmTvbE2qDXCuIN8zF0pJSxGDfev3qWUA%2BnE5uXy%2FkJCJRSrUpUzTyj6zg0rH1qyrwKGTjvCowvNELaojMIi0i8AGOqUBwSW%2Bc9ZlV5e4w3V%2BUfAaKaB1prnKcJ2tNvLidTVDKRH4%2F6LuFnljl5RM0CJ9tYChEoTEAr4bdy6zhPDGucZmfYuQin0evIrszyiIqcnObSj3sGQRMcJH67HQQWFNFehXB5%2BZC5J9h3eWxdGtMShrKXiqiXjIqN2pqrg5z%2BixlbI33zeAJPgGoIe5CUVI273h0PXaPU%2FjPDnkxoF4P7bm%2BD8znKgz&X-Amz-Signature=c37dd2df688072035f179fdd4e9f02071623e4c4d27e1b45f9825ae2198f1255&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRXPN5FU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2E3y%2BLIxsJAS78GgUZ%2FW5XcOj1qd4c0Pgz9Fm%2B9S9wQIgf2DNE52RT2eDBPOPiNF9hwUe1lmnwl4mpTxTrHuiAhsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABB14MBRF3UM%2BetdSrcA82gICepyPh%2Fs7lIGbeLOAJURAYx1q3xyRCMrD9A5rtl26IgsDocF1SxsGlOvCrCPPvqA6Hg4P3EI6%2FxAtG1R8TcRnsWNAT3BrZMbJx5Dqoqj5X57s43JJeZnR9F6kpXnbGqNBb70gnFRCwtQ4bTRSG%2BrNZ5pR7oFSqv9gaDuz9h2M3bYOkGdvtTDEWfF29SPK%2BFsXeEDIPUO6PTFMZjCu8bREE7OeQyjwogjpjqr3mXNtkndkmwMCE%2B%2Bx31%2Bm4KBhR0guc9vU8c9lr9P9BAqi%2B6ezl8sLrP%2BZHLM01ZL3VEGMh2UUgrb8j7pB%2F8AslT%2B9ZfpkBdXbeMv55U4JDAYgPN7qjEBpZS%2BqolDex%2BKd4IWrtJdbM9lf8sGbDjuh%2FajedU1pYJhJ27%2F%2FLN%2FURAUABCainOYXgm%2Bf1dXmpbNRJeJIlEQI5J7NSi6eFxrwUIP7YaRD3ev%2BWiyfECkpjKD6nlipiPnZndQ6zgkB7yOBhe2njz5jYrGycZAQJBagBHA%2Bhtcq%2FBNGa2ArVVPpLLlRK17QYdHQ4SROp9aoJA5VTwNmTvbE2qDXCuIN8zF0pJSxGDfev3qWUA%2BnE5uXy%2FkJCJRSrUpUzTyj6zg0rH1qyrwKGTjvCowvNELaojMIi0i8AGOqUBwSW%2Bc9ZlV5e4w3V%2BUfAaKaB1prnKcJ2tNvLidTVDKRH4%2F6LuFnljl5RM0CJ9tYChEoTEAr4bdy6zhPDGucZmfYuQin0evIrszyiIqcnObSj3sGQRMcJH67HQQWFNFehXB5%2BZC5J9h3eWxdGtMShrKXiqiXjIqN2pqrg5z%2BixlbI33zeAJPgGoIe5CUVI273h0PXaPU%2FjPDnkxoF4P7bm%2BD8znKgz&X-Amz-Signature=18e6e9c4e5406b30489fb738597db47dcec9de9f114ffe13d9b7e9910612ad02&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRXPN5FU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2E3y%2BLIxsJAS78GgUZ%2FW5XcOj1qd4c0Pgz9Fm%2B9S9wQIgf2DNE52RT2eDBPOPiNF9hwUe1lmnwl4mpTxTrHuiAhsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABB14MBRF3UM%2BetdSrcA82gICepyPh%2Fs7lIGbeLOAJURAYx1q3xyRCMrD9A5rtl26IgsDocF1SxsGlOvCrCPPvqA6Hg4P3EI6%2FxAtG1R8TcRnsWNAT3BrZMbJx5Dqoqj5X57s43JJeZnR9F6kpXnbGqNBb70gnFRCwtQ4bTRSG%2BrNZ5pR7oFSqv9gaDuz9h2M3bYOkGdvtTDEWfF29SPK%2BFsXeEDIPUO6PTFMZjCu8bREE7OeQyjwogjpjqr3mXNtkndkmwMCE%2B%2Bx31%2Bm4KBhR0guc9vU8c9lr9P9BAqi%2B6ezl8sLrP%2BZHLM01ZL3VEGMh2UUgrb8j7pB%2F8AslT%2B9ZfpkBdXbeMv55U4JDAYgPN7qjEBpZS%2BqolDex%2BKd4IWrtJdbM9lf8sGbDjuh%2FajedU1pYJhJ27%2F%2FLN%2FURAUABCainOYXgm%2Bf1dXmpbNRJeJIlEQI5J7NSi6eFxrwUIP7YaRD3ev%2BWiyfECkpjKD6nlipiPnZndQ6zgkB7yOBhe2njz5jYrGycZAQJBagBHA%2Bhtcq%2FBNGa2ArVVPpLLlRK17QYdHQ4SROp9aoJA5VTwNmTvbE2qDXCuIN8zF0pJSxGDfev3qWUA%2BnE5uXy%2FkJCJRSrUpUzTyj6zg0rH1qyrwKGTjvCowvNELaojMIi0i8AGOqUBwSW%2Bc9ZlV5e4w3V%2BUfAaKaB1prnKcJ2tNvLidTVDKRH4%2F6LuFnljl5RM0CJ9tYChEoTEAr4bdy6zhPDGucZmfYuQin0evIrszyiIqcnObSj3sGQRMcJH67HQQWFNFehXB5%2BZC5J9h3eWxdGtMShrKXiqiXjIqN2pqrg5z%2BixlbI33zeAJPgGoIe5CUVI273h0PXaPU%2FjPDnkxoF4P7bm%2BD8znKgz&X-Amz-Signature=eb6c06a517eb1626d54a7e9efa56d42d088551a89c134022a49b72c0a2321627&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRXPN5FU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2E3y%2BLIxsJAS78GgUZ%2FW5XcOj1qd4c0Pgz9Fm%2B9S9wQIgf2DNE52RT2eDBPOPiNF9hwUe1lmnwl4mpTxTrHuiAhsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABB14MBRF3UM%2BetdSrcA82gICepyPh%2Fs7lIGbeLOAJURAYx1q3xyRCMrD9A5rtl26IgsDocF1SxsGlOvCrCPPvqA6Hg4P3EI6%2FxAtG1R8TcRnsWNAT3BrZMbJx5Dqoqj5X57s43JJeZnR9F6kpXnbGqNBb70gnFRCwtQ4bTRSG%2BrNZ5pR7oFSqv9gaDuz9h2M3bYOkGdvtTDEWfF29SPK%2BFsXeEDIPUO6PTFMZjCu8bREE7OeQyjwogjpjqr3mXNtkndkmwMCE%2B%2Bx31%2Bm4KBhR0guc9vU8c9lr9P9BAqi%2B6ezl8sLrP%2BZHLM01ZL3VEGMh2UUgrb8j7pB%2F8AslT%2B9ZfpkBdXbeMv55U4JDAYgPN7qjEBpZS%2BqolDex%2BKd4IWrtJdbM9lf8sGbDjuh%2FajedU1pYJhJ27%2F%2FLN%2FURAUABCainOYXgm%2Bf1dXmpbNRJeJIlEQI5J7NSi6eFxrwUIP7YaRD3ev%2BWiyfECkpjKD6nlipiPnZndQ6zgkB7yOBhe2njz5jYrGycZAQJBagBHA%2Bhtcq%2FBNGa2ArVVPpLLlRK17QYdHQ4SROp9aoJA5VTwNmTvbE2qDXCuIN8zF0pJSxGDfev3qWUA%2BnE5uXy%2FkJCJRSrUpUzTyj6zg0rH1qyrwKGTjvCowvNELaojMIi0i8AGOqUBwSW%2Bc9ZlV5e4w3V%2BUfAaKaB1prnKcJ2tNvLidTVDKRH4%2F6LuFnljl5RM0CJ9tYChEoTEAr4bdy6zhPDGucZmfYuQin0evIrszyiIqcnObSj3sGQRMcJH67HQQWFNFehXB5%2BZC5J9h3eWxdGtMShrKXiqiXjIqN2pqrg5z%2BixlbI33zeAJPgGoIe5CUVI273h0PXaPU%2FjPDnkxoF4P7bm%2BD8znKgz&X-Amz-Signature=1d95d81be0db3830e3a16f4c9ed905b3eceaddfeeb7ba01bb85809753ab359e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRXPN5FU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2E3y%2BLIxsJAS78GgUZ%2FW5XcOj1qd4c0Pgz9Fm%2B9S9wQIgf2DNE52RT2eDBPOPiNF9hwUe1lmnwl4mpTxTrHuiAhsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABB14MBRF3UM%2BetdSrcA82gICepyPh%2Fs7lIGbeLOAJURAYx1q3xyRCMrD9A5rtl26IgsDocF1SxsGlOvCrCPPvqA6Hg4P3EI6%2FxAtG1R8TcRnsWNAT3BrZMbJx5Dqoqj5X57s43JJeZnR9F6kpXnbGqNBb70gnFRCwtQ4bTRSG%2BrNZ5pR7oFSqv9gaDuz9h2M3bYOkGdvtTDEWfF29SPK%2BFsXeEDIPUO6PTFMZjCu8bREE7OeQyjwogjpjqr3mXNtkndkmwMCE%2B%2Bx31%2Bm4KBhR0guc9vU8c9lr9P9BAqi%2B6ezl8sLrP%2BZHLM01ZL3VEGMh2UUgrb8j7pB%2F8AslT%2B9ZfpkBdXbeMv55U4JDAYgPN7qjEBpZS%2BqolDex%2BKd4IWrtJdbM9lf8sGbDjuh%2FajedU1pYJhJ27%2F%2FLN%2FURAUABCainOYXgm%2Bf1dXmpbNRJeJIlEQI5J7NSi6eFxrwUIP7YaRD3ev%2BWiyfECkpjKD6nlipiPnZndQ6zgkB7yOBhe2njz5jYrGycZAQJBagBHA%2Bhtcq%2FBNGa2ArVVPpLLlRK17QYdHQ4SROp9aoJA5VTwNmTvbE2qDXCuIN8zF0pJSxGDfev3qWUA%2BnE5uXy%2FkJCJRSrUpUzTyj6zg0rH1qyrwKGTjvCowvNELaojMIi0i8AGOqUBwSW%2Bc9ZlV5e4w3V%2BUfAaKaB1prnKcJ2tNvLidTVDKRH4%2F6LuFnljl5RM0CJ9tYChEoTEAr4bdy6zhPDGucZmfYuQin0evIrszyiIqcnObSj3sGQRMcJH67HQQWFNFehXB5%2BZC5J9h3eWxdGtMShrKXiqiXjIqN2pqrg5z%2BixlbI33zeAJPgGoIe5CUVI273h0PXaPU%2FjPDnkxoF4P7bm%2BD8znKgz&X-Amz-Signature=bb03a16edea498c5d9934b487a7859d6a2d63826e09a0331647044aad28488c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRXPN5FU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2E3y%2BLIxsJAS78GgUZ%2FW5XcOj1qd4c0Pgz9Fm%2B9S9wQIgf2DNE52RT2eDBPOPiNF9hwUe1lmnwl4mpTxTrHuiAhsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABB14MBRF3UM%2BetdSrcA82gICepyPh%2Fs7lIGbeLOAJURAYx1q3xyRCMrD9A5rtl26IgsDocF1SxsGlOvCrCPPvqA6Hg4P3EI6%2FxAtG1R8TcRnsWNAT3BrZMbJx5Dqoqj5X57s43JJeZnR9F6kpXnbGqNBb70gnFRCwtQ4bTRSG%2BrNZ5pR7oFSqv9gaDuz9h2M3bYOkGdvtTDEWfF29SPK%2BFsXeEDIPUO6PTFMZjCu8bREE7OeQyjwogjpjqr3mXNtkndkmwMCE%2B%2Bx31%2Bm4KBhR0guc9vU8c9lr9P9BAqi%2B6ezl8sLrP%2BZHLM01ZL3VEGMh2UUgrb8j7pB%2F8AslT%2B9ZfpkBdXbeMv55U4JDAYgPN7qjEBpZS%2BqolDex%2BKd4IWrtJdbM9lf8sGbDjuh%2FajedU1pYJhJ27%2F%2FLN%2FURAUABCainOYXgm%2Bf1dXmpbNRJeJIlEQI5J7NSi6eFxrwUIP7YaRD3ev%2BWiyfECkpjKD6nlipiPnZndQ6zgkB7yOBhe2njz5jYrGycZAQJBagBHA%2Bhtcq%2FBNGa2ArVVPpLLlRK17QYdHQ4SROp9aoJA5VTwNmTvbE2qDXCuIN8zF0pJSxGDfev3qWUA%2BnE5uXy%2FkJCJRSrUpUzTyj6zg0rH1qyrwKGTjvCowvNELaojMIi0i8AGOqUBwSW%2Bc9ZlV5e4w3V%2BUfAaKaB1prnKcJ2tNvLidTVDKRH4%2F6LuFnljl5RM0CJ9tYChEoTEAr4bdy6zhPDGucZmfYuQin0evIrszyiIqcnObSj3sGQRMcJH67HQQWFNFehXB5%2BZC5J9h3eWxdGtMShrKXiqiXjIqN2pqrg5z%2BixlbI33zeAJPgGoIe5CUVI273h0PXaPU%2FjPDnkxoF4P7bm%2BD8znKgz&X-Amz-Signature=1fd7964b39eaf9b2afac2b9ccc16f7f7457dea69bf63ef20212401ac7cf7a546&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRXPN5FU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2E3y%2BLIxsJAS78GgUZ%2FW5XcOj1qd4c0Pgz9Fm%2B9S9wQIgf2DNE52RT2eDBPOPiNF9hwUe1lmnwl4mpTxTrHuiAhsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABB14MBRF3UM%2BetdSrcA82gICepyPh%2Fs7lIGbeLOAJURAYx1q3xyRCMrD9A5rtl26IgsDocF1SxsGlOvCrCPPvqA6Hg4P3EI6%2FxAtG1R8TcRnsWNAT3BrZMbJx5Dqoqj5X57s43JJeZnR9F6kpXnbGqNBb70gnFRCwtQ4bTRSG%2BrNZ5pR7oFSqv9gaDuz9h2M3bYOkGdvtTDEWfF29SPK%2BFsXeEDIPUO6PTFMZjCu8bREE7OeQyjwogjpjqr3mXNtkndkmwMCE%2B%2Bx31%2Bm4KBhR0guc9vU8c9lr9P9BAqi%2B6ezl8sLrP%2BZHLM01ZL3VEGMh2UUgrb8j7pB%2F8AslT%2B9ZfpkBdXbeMv55U4JDAYgPN7qjEBpZS%2BqolDex%2BKd4IWrtJdbM9lf8sGbDjuh%2FajedU1pYJhJ27%2F%2FLN%2FURAUABCainOYXgm%2Bf1dXmpbNRJeJIlEQI5J7NSi6eFxrwUIP7YaRD3ev%2BWiyfECkpjKD6nlipiPnZndQ6zgkB7yOBhe2njz5jYrGycZAQJBagBHA%2Bhtcq%2FBNGa2ArVVPpLLlRK17QYdHQ4SROp9aoJA5VTwNmTvbE2qDXCuIN8zF0pJSxGDfev3qWUA%2BnE5uXy%2FkJCJRSrUpUzTyj6zg0rH1qyrwKGTjvCowvNELaojMIi0i8AGOqUBwSW%2Bc9ZlV5e4w3V%2BUfAaKaB1prnKcJ2tNvLidTVDKRH4%2F6LuFnljl5RM0CJ9tYChEoTEAr4bdy6zhPDGucZmfYuQin0evIrszyiIqcnObSj3sGQRMcJH67HQQWFNFehXB5%2BZC5J9h3eWxdGtMShrKXiqiXjIqN2pqrg5z%2BixlbI33zeAJPgGoIe5CUVI273h0PXaPU%2FjPDnkxoF4P7bm%2BD8znKgz&X-Amz-Signature=d17f96bd49aaab8f6f831e10a86f588eb4ec50eebc818f874d44f6989e4530e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
