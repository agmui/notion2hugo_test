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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVQOCSY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC%2FkeqoZwCiV%2FCysBiSSeBjRcx3IKnJqvOiXqjlTqF42gIgQeEaSuN8iGsCubnBdVwM4fr0CZkUhJ4tmZIvxoDnEH0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcERroHFlU8rtDG2ircA7Nrh9Z7fbD32s9uLX3yMZiH4zu2g5XsOzVMVt7NqE%2FR99nX8wBcU2%2Fpg08geBt7%2BHR7IU12THlQNyDaWlNS%2BDgYWZHr1GR2XIypaWrpkDPZQHZe9GlMNBINspSR4q8dFYD8aS%2B8GApKZkMjd68rhxEffAGU0oKW%2BZiBP0W9%2F9x2sGzruW3Q4x3N2hOb%2FQj4OF%2BYab4hGaIpoRMzYcxj3ipI471yDMU2j6WuuFNbUcjVsjiY8Zzdq%2BqQABGQzZUXVJsbgYjMopUYd4DFZ0cLXlwUfqg%2FBqUvz1iBfx7sYWe7dNShqo6YmUvI6D5YUi2xzPrrx%2FHzVprS%2FVAm%2BaPm4jT%2BrIM6Fl5%2BN77jkHciDvvGoxbscXO2oDmMSfXHb4jkkA9WWJ6EYEi0WoNi9EpEIpF4xIFaiClLzrMFwROjM4gsGk3kOiMUCnUADXg1mvddyYgTHzBPJcMmOF0VdnbvOKQsCaHAtSzqWgkpo2j0cWbpQ4b1fYB9%2FSCFCnFTq0pD3e%2B0%2FaBiJ1oNvTJIe0hGREMvICggrTkdzOQkFlSJShHOmW7icRL2pDpneafDKQR0yQ9fqzlqdNNtFuXPeN6qyBT7zreIIsl76h%2F%2BJGQX6s4fSQEwanP6UPx2KIYMMNXb18QGOqUBpxyQbn21HV6cps0HKGJawCXq0pLh6v%2BLcWfoRg9S14IAv9lZ2P0pyRv4paNJORAZc4ZhVGh8Q6gdYWxoHzzMKy22lPahXfmYsiRHUtuSzwUqBI3R31r6j992xi5bTOSWCWd4aPfCILOmEc%2Fk100KRlL8Nq53DNMHXab9zMWAy4W13wdDudQreA5rZH4hBF2vhULORXKbwX8ZfO3wYjnMtqTqtAxo&X-Amz-Signature=72cb347b5816ed698062a7b3ae5be4a95a03d564c1ff133e6ecdc18215410bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVQOCSY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC%2FkeqoZwCiV%2FCysBiSSeBjRcx3IKnJqvOiXqjlTqF42gIgQeEaSuN8iGsCubnBdVwM4fr0CZkUhJ4tmZIvxoDnEH0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcERroHFlU8rtDG2ircA7Nrh9Z7fbD32s9uLX3yMZiH4zu2g5XsOzVMVt7NqE%2FR99nX8wBcU2%2Fpg08geBt7%2BHR7IU12THlQNyDaWlNS%2BDgYWZHr1GR2XIypaWrpkDPZQHZe9GlMNBINspSR4q8dFYD8aS%2B8GApKZkMjd68rhxEffAGU0oKW%2BZiBP0W9%2F9x2sGzruW3Q4x3N2hOb%2FQj4OF%2BYab4hGaIpoRMzYcxj3ipI471yDMU2j6WuuFNbUcjVsjiY8Zzdq%2BqQABGQzZUXVJsbgYjMopUYd4DFZ0cLXlwUfqg%2FBqUvz1iBfx7sYWe7dNShqo6YmUvI6D5YUi2xzPrrx%2FHzVprS%2FVAm%2BaPm4jT%2BrIM6Fl5%2BN77jkHciDvvGoxbscXO2oDmMSfXHb4jkkA9WWJ6EYEi0WoNi9EpEIpF4xIFaiClLzrMFwROjM4gsGk3kOiMUCnUADXg1mvddyYgTHzBPJcMmOF0VdnbvOKQsCaHAtSzqWgkpo2j0cWbpQ4b1fYB9%2FSCFCnFTq0pD3e%2B0%2FaBiJ1oNvTJIe0hGREMvICggrTkdzOQkFlSJShHOmW7icRL2pDpneafDKQR0yQ9fqzlqdNNtFuXPeN6qyBT7zreIIsl76h%2F%2BJGQX6s4fSQEwanP6UPx2KIYMMNXb18QGOqUBpxyQbn21HV6cps0HKGJawCXq0pLh6v%2BLcWfoRg9S14IAv9lZ2P0pyRv4paNJORAZc4ZhVGh8Q6gdYWxoHzzMKy22lPahXfmYsiRHUtuSzwUqBI3R31r6j992xi5bTOSWCWd4aPfCILOmEc%2Fk100KRlL8Nq53DNMHXab9zMWAy4W13wdDudQreA5rZH4hBF2vhULORXKbwX8ZfO3wYjnMtqTqtAxo&X-Amz-Signature=662d080d63dd75f29d7e96c34c00acfed491458622436b59487c9e163312ebc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVQOCSY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC%2FkeqoZwCiV%2FCysBiSSeBjRcx3IKnJqvOiXqjlTqF42gIgQeEaSuN8iGsCubnBdVwM4fr0CZkUhJ4tmZIvxoDnEH0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcERroHFlU8rtDG2ircA7Nrh9Z7fbD32s9uLX3yMZiH4zu2g5XsOzVMVt7NqE%2FR99nX8wBcU2%2Fpg08geBt7%2BHR7IU12THlQNyDaWlNS%2BDgYWZHr1GR2XIypaWrpkDPZQHZe9GlMNBINspSR4q8dFYD8aS%2B8GApKZkMjd68rhxEffAGU0oKW%2BZiBP0W9%2F9x2sGzruW3Q4x3N2hOb%2FQj4OF%2BYab4hGaIpoRMzYcxj3ipI471yDMU2j6WuuFNbUcjVsjiY8Zzdq%2BqQABGQzZUXVJsbgYjMopUYd4DFZ0cLXlwUfqg%2FBqUvz1iBfx7sYWe7dNShqo6YmUvI6D5YUi2xzPrrx%2FHzVprS%2FVAm%2BaPm4jT%2BrIM6Fl5%2BN77jkHciDvvGoxbscXO2oDmMSfXHb4jkkA9WWJ6EYEi0WoNi9EpEIpF4xIFaiClLzrMFwROjM4gsGk3kOiMUCnUADXg1mvddyYgTHzBPJcMmOF0VdnbvOKQsCaHAtSzqWgkpo2j0cWbpQ4b1fYB9%2FSCFCnFTq0pD3e%2B0%2FaBiJ1oNvTJIe0hGREMvICggrTkdzOQkFlSJShHOmW7icRL2pDpneafDKQR0yQ9fqzlqdNNtFuXPeN6qyBT7zreIIsl76h%2F%2BJGQX6s4fSQEwanP6UPx2KIYMMNXb18QGOqUBpxyQbn21HV6cps0HKGJawCXq0pLh6v%2BLcWfoRg9S14IAv9lZ2P0pyRv4paNJORAZc4ZhVGh8Q6gdYWxoHzzMKy22lPahXfmYsiRHUtuSzwUqBI3R31r6j992xi5bTOSWCWd4aPfCILOmEc%2Fk100KRlL8Nq53DNMHXab9zMWAy4W13wdDudQreA5rZH4hBF2vhULORXKbwX8ZfO3wYjnMtqTqtAxo&X-Amz-Signature=1939f0adae2f244315671e37f2aac52cb35d8bb16eb594ee5fe5c049293ed268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVQOCSY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC%2FkeqoZwCiV%2FCysBiSSeBjRcx3IKnJqvOiXqjlTqF42gIgQeEaSuN8iGsCubnBdVwM4fr0CZkUhJ4tmZIvxoDnEH0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcERroHFlU8rtDG2ircA7Nrh9Z7fbD32s9uLX3yMZiH4zu2g5XsOzVMVt7NqE%2FR99nX8wBcU2%2Fpg08geBt7%2BHR7IU12THlQNyDaWlNS%2BDgYWZHr1GR2XIypaWrpkDPZQHZe9GlMNBINspSR4q8dFYD8aS%2B8GApKZkMjd68rhxEffAGU0oKW%2BZiBP0W9%2F9x2sGzruW3Q4x3N2hOb%2FQj4OF%2BYab4hGaIpoRMzYcxj3ipI471yDMU2j6WuuFNbUcjVsjiY8Zzdq%2BqQABGQzZUXVJsbgYjMopUYd4DFZ0cLXlwUfqg%2FBqUvz1iBfx7sYWe7dNShqo6YmUvI6D5YUi2xzPrrx%2FHzVprS%2FVAm%2BaPm4jT%2BrIM6Fl5%2BN77jkHciDvvGoxbscXO2oDmMSfXHb4jkkA9WWJ6EYEi0WoNi9EpEIpF4xIFaiClLzrMFwROjM4gsGk3kOiMUCnUADXg1mvddyYgTHzBPJcMmOF0VdnbvOKQsCaHAtSzqWgkpo2j0cWbpQ4b1fYB9%2FSCFCnFTq0pD3e%2B0%2FaBiJ1oNvTJIe0hGREMvICggrTkdzOQkFlSJShHOmW7icRL2pDpneafDKQR0yQ9fqzlqdNNtFuXPeN6qyBT7zreIIsl76h%2F%2BJGQX6s4fSQEwanP6UPx2KIYMMNXb18QGOqUBpxyQbn21HV6cps0HKGJawCXq0pLh6v%2BLcWfoRg9S14IAv9lZ2P0pyRv4paNJORAZc4ZhVGh8Q6gdYWxoHzzMKy22lPahXfmYsiRHUtuSzwUqBI3R31r6j992xi5bTOSWCWd4aPfCILOmEc%2Fk100KRlL8Nq53DNMHXab9zMWAy4W13wdDudQreA5rZH4hBF2vhULORXKbwX8ZfO3wYjnMtqTqtAxo&X-Amz-Signature=d2d1ed5fe11757df0dce20923a61d07bef3a430feb798d3e6e407efb92468e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVQOCSY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC%2FkeqoZwCiV%2FCysBiSSeBjRcx3IKnJqvOiXqjlTqF42gIgQeEaSuN8iGsCubnBdVwM4fr0CZkUhJ4tmZIvxoDnEH0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcERroHFlU8rtDG2ircA7Nrh9Z7fbD32s9uLX3yMZiH4zu2g5XsOzVMVt7NqE%2FR99nX8wBcU2%2Fpg08geBt7%2BHR7IU12THlQNyDaWlNS%2BDgYWZHr1GR2XIypaWrpkDPZQHZe9GlMNBINspSR4q8dFYD8aS%2B8GApKZkMjd68rhxEffAGU0oKW%2BZiBP0W9%2F9x2sGzruW3Q4x3N2hOb%2FQj4OF%2BYab4hGaIpoRMzYcxj3ipI471yDMU2j6WuuFNbUcjVsjiY8Zzdq%2BqQABGQzZUXVJsbgYjMopUYd4DFZ0cLXlwUfqg%2FBqUvz1iBfx7sYWe7dNShqo6YmUvI6D5YUi2xzPrrx%2FHzVprS%2FVAm%2BaPm4jT%2BrIM6Fl5%2BN77jkHciDvvGoxbscXO2oDmMSfXHb4jkkA9WWJ6EYEi0WoNi9EpEIpF4xIFaiClLzrMFwROjM4gsGk3kOiMUCnUADXg1mvddyYgTHzBPJcMmOF0VdnbvOKQsCaHAtSzqWgkpo2j0cWbpQ4b1fYB9%2FSCFCnFTq0pD3e%2B0%2FaBiJ1oNvTJIe0hGREMvICggrTkdzOQkFlSJShHOmW7icRL2pDpneafDKQR0yQ9fqzlqdNNtFuXPeN6qyBT7zreIIsl76h%2F%2BJGQX6s4fSQEwanP6UPx2KIYMMNXb18QGOqUBpxyQbn21HV6cps0HKGJawCXq0pLh6v%2BLcWfoRg9S14IAv9lZ2P0pyRv4paNJORAZc4ZhVGh8Q6gdYWxoHzzMKy22lPahXfmYsiRHUtuSzwUqBI3R31r6j992xi5bTOSWCWd4aPfCILOmEc%2Fk100KRlL8Nq53DNMHXab9zMWAy4W13wdDudQreA5rZH4hBF2vhULORXKbwX8ZfO3wYjnMtqTqtAxo&X-Amz-Signature=5900695952b6685ac3977ddd3a7b8eae075c2b06b0477d769bd82835da736f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVQOCSY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC%2FkeqoZwCiV%2FCysBiSSeBjRcx3IKnJqvOiXqjlTqF42gIgQeEaSuN8iGsCubnBdVwM4fr0CZkUhJ4tmZIvxoDnEH0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcERroHFlU8rtDG2ircA7Nrh9Z7fbD32s9uLX3yMZiH4zu2g5XsOzVMVt7NqE%2FR99nX8wBcU2%2Fpg08geBt7%2BHR7IU12THlQNyDaWlNS%2BDgYWZHr1GR2XIypaWrpkDPZQHZe9GlMNBINspSR4q8dFYD8aS%2B8GApKZkMjd68rhxEffAGU0oKW%2BZiBP0W9%2F9x2sGzruW3Q4x3N2hOb%2FQj4OF%2BYab4hGaIpoRMzYcxj3ipI471yDMU2j6WuuFNbUcjVsjiY8Zzdq%2BqQABGQzZUXVJsbgYjMopUYd4DFZ0cLXlwUfqg%2FBqUvz1iBfx7sYWe7dNShqo6YmUvI6D5YUi2xzPrrx%2FHzVprS%2FVAm%2BaPm4jT%2BrIM6Fl5%2BN77jkHciDvvGoxbscXO2oDmMSfXHb4jkkA9WWJ6EYEi0WoNi9EpEIpF4xIFaiClLzrMFwROjM4gsGk3kOiMUCnUADXg1mvddyYgTHzBPJcMmOF0VdnbvOKQsCaHAtSzqWgkpo2j0cWbpQ4b1fYB9%2FSCFCnFTq0pD3e%2B0%2FaBiJ1oNvTJIe0hGREMvICggrTkdzOQkFlSJShHOmW7icRL2pDpneafDKQR0yQ9fqzlqdNNtFuXPeN6qyBT7zreIIsl76h%2F%2BJGQX6s4fSQEwanP6UPx2KIYMMNXb18QGOqUBpxyQbn21HV6cps0HKGJawCXq0pLh6v%2BLcWfoRg9S14IAv9lZ2P0pyRv4paNJORAZc4ZhVGh8Q6gdYWxoHzzMKy22lPahXfmYsiRHUtuSzwUqBI3R31r6j992xi5bTOSWCWd4aPfCILOmEc%2Fk100KRlL8Nq53DNMHXab9zMWAy4W13wdDudQreA5rZH4hBF2vhULORXKbwX8ZfO3wYjnMtqTqtAxo&X-Amz-Signature=a3af5abb2a0d62869528b9b1f32c15488ee1d44318e11c515fb408dbb15db327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVQOCSY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC%2FkeqoZwCiV%2FCysBiSSeBjRcx3IKnJqvOiXqjlTqF42gIgQeEaSuN8iGsCubnBdVwM4fr0CZkUhJ4tmZIvxoDnEH0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcERroHFlU8rtDG2ircA7Nrh9Z7fbD32s9uLX3yMZiH4zu2g5XsOzVMVt7NqE%2FR99nX8wBcU2%2Fpg08geBt7%2BHR7IU12THlQNyDaWlNS%2BDgYWZHr1GR2XIypaWrpkDPZQHZe9GlMNBINspSR4q8dFYD8aS%2B8GApKZkMjd68rhxEffAGU0oKW%2BZiBP0W9%2F9x2sGzruW3Q4x3N2hOb%2FQj4OF%2BYab4hGaIpoRMzYcxj3ipI471yDMU2j6WuuFNbUcjVsjiY8Zzdq%2BqQABGQzZUXVJsbgYjMopUYd4DFZ0cLXlwUfqg%2FBqUvz1iBfx7sYWe7dNShqo6YmUvI6D5YUi2xzPrrx%2FHzVprS%2FVAm%2BaPm4jT%2BrIM6Fl5%2BN77jkHciDvvGoxbscXO2oDmMSfXHb4jkkA9WWJ6EYEi0WoNi9EpEIpF4xIFaiClLzrMFwROjM4gsGk3kOiMUCnUADXg1mvddyYgTHzBPJcMmOF0VdnbvOKQsCaHAtSzqWgkpo2j0cWbpQ4b1fYB9%2FSCFCnFTq0pD3e%2B0%2FaBiJ1oNvTJIe0hGREMvICggrTkdzOQkFlSJShHOmW7icRL2pDpneafDKQR0yQ9fqzlqdNNtFuXPeN6qyBT7zreIIsl76h%2F%2BJGQX6s4fSQEwanP6UPx2KIYMMNXb18QGOqUBpxyQbn21HV6cps0HKGJawCXq0pLh6v%2BLcWfoRg9S14IAv9lZ2P0pyRv4paNJORAZc4ZhVGh8Q6gdYWxoHzzMKy22lPahXfmYsiRHUtuSzwUqBI3R31r6j992xi5bTOSWCWd4aPfCILOmEc%2Fk100KRlL8Nq53DNMHXab9zMWAy4W13wdDudQreA5rZH4hBF2vhULORXKbwX8ZfO3wYjnMtqTqtAxo&X-Amz-Signature=e544644dda08a8f9b4144e3f10327fcdf6480e865f166ca346e496240f9e281c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVQOCSY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC%2FkeqoZwCiV%2FCysBiSSeBjRcx3IKnJqvOiXqjlTqF42gIgQeEaSuN8iGsCubnBdVwM4fr0CZkUhJ4tmZIvxoDnEH0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcERroHFlU8rtDG2ircA7Nrh9Z7fbD32s9uLX3yMZiH4zu2g5XsOzVMVt7NqE%2FR99nX8wBcU2%2Fpg08geBt7%2BHR7IU12THlQNyDaWlNS%2BDgYWZHr1GR2XIypaWrpkDPZQHZe9GlMNBINspSR4q8dFYD8aS%2B8GApKZkMjd68rhxEffAGU0oKW%2BZiBP0W9%2F9x2sGzruW3Q4x3N2hOb%2FQj4OF%2BYab4hGaIpoRMzYcxj3ipI471yDMU2j6WuuFNbUcjVsjiY8Zzdq%2BqQABGQzZUXVJsbgYjMopUYd4DFZ0cLXlwUfqg%2FBqUvz1iBfx7sYWe7dNShqo6YmUvI6D5YUi2xzPrrx%2FHzVprS%2FVAm%2BaPm4jT%2BrIM6Fl5%2BN77jkHciDvvGoxbscXO2oDmMSfXHb4jkkA9WWJ6EYEi0WoNi9EpEIpF4xIFaiClLzrMFwROjM4gsGk3kOiMUCnUADXg1mvddyYgTHzBPJcMmOF0VdnbvOKQsCaHAtSzqWgkpo2j0cWbpQ4b1fYB9%2FSCFCnFTq0pD3e%2B0%2FaBiJ1oNvTJIe0hGREMvICggrTkdzOQkFlSJShHOmW7icRL2pDpneafDKQR0yQ9fqzlqdNNtFuXPeN6qyBT7zreIIsl76h%2F%2BJGQX6s4fSQEwanP6UPx2KIYMMNXb18QGOqUBpxyQbn21HV6cps0HKGJawCXq0pLh6v%2BLcWfoRg9S14IAv9lZ2P0pyRv4paNJORAZc4ZhVGh8Q6gdYWxoHzzMKy22lPahXfmYsiRHUtuSzwUqBI3R31r6j992xi5bTOSWCWd4aPfCILOmEc%2Fk100KRlL8Nq53DNMHXab9zMWAy4W13wdDudQreA5rZH4hBF2vhULORXKbwX8ZfO3wYjnMtqTqtAxo&X-Amz-Signature=d334c7455d7abfecd7a5a88df95e56650debefae40ed46f97287691f7f6d34eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
