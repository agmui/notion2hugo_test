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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWBPVYZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDo76fXbescK55e6vs9BtArCxruJbc799CKsYd5lRpZ%2BgIgRYTowu1x2rCvmuiIBwMewgLbm0oNseazSxH0QlZjRXMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BehBbQwI3NKBM%2BwSrcAyGItglehsbZaaS4h8fnkHXuH%2FueFfHSllc%2BDct75vFSN%2F7KvnKdgMUQOkU9wZ5owxP%2B%2F98%2B0nEBXfqkASr5Jv8MR0FlafCNFZbFNBSj9w0KZtc8njCRfArB5piZX2EYAfAh4K3G7NkV6tEPNZVr6SBgcQwUDh1g%2FfcU8AtqLisX36LOwOZBtT7FdZpCTzH2fTsMHEW36rmzl2ZghCe4CgXMWyUMALkQXtM5OtHI0YMTMyz6fexh%2B0q8tcEk0920QpXvCLkLXfgYuRyIoRlCgCF83yDd%2FvnWvVhSAi3ink9gF70gn76%2FvpD2qhiKodsUO1%2FGCuwGTXn9pbnrv7riSE8ds8kiYY5zJ5Xlk%2B9O2YK9jUa7mXMCr0%2BGl2p7bMPpehfui7m47lcu94%2FD32MWoIQ4EawqRCaHgL%2BJQmqqCToacRWeaC06nO7JmynwUoHSJAMPgesKJwRjebBotA9hwYwAq3B3JO7WkVsk7aCrImWknvTSWgoHwTTpYuKsFsvpCfQPZmNoy6SbFmJ05QEY8tjRkfEhIU6WblS7vf%2FcrwRf8mpxLu%2Ba6weWx6iURL5%2FG7Z6B4wodlG9a%2BryL%2BSFg3s9l8Mfc%2BebhnAEutGUws9MRRAbuzkgoP5o0nSzMOWGmcAGOqUBHzmjLd74cHNvZ5zQBc87oZkpV2AgZzXIn1IpfRYxsI46BCGSFcJ6DY1v9CbskNDSZLWO1jQf2BSoTewaJVvHjh7HMqENg3%2FXVDgUo8nHQudMhqucf%2Bu9ISOtUIQbInNCm3yNP4eO15il%2BinirfQ4BeznVEo6cvYf6QLyRewI2clQePMeyRQ3%2BY2f%2B5a6pMtWSx%2FiAGjaJT3Jeac6Bd27vK9mRFZ%2B&X-Amz-Signature=0f876d57fc224aff82773409ea7f7b9a5009274e98aa49371937316c73fc007e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWBPVYZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDo76fXbescK55e6vs9BtArCxruJbc799CKsYd5lRpZ%2BgIgRYTowu1x2rCvmuiIBwMewgLbm0oNseazSxH0QlZjRXMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BehBbQwI3NKBM%2BwSrcAyGItglehsbZaaS4h8fnkHXuH%2FueFfHSllc%2BDct75vFSN%2F7KvnKdgMUQOkU9wZ5owxP%2B%2F98%2B0nEBXfqkASr5Jv8MR0FlafCNFZbFNBSj9w0KZtc8njCRfArB5piZX2EYAfAh4K3G7NkV6tEPNZVr6SBgcQwUDh1g%2FfcU8AtqLisX36LOwOZBtT7FdZpCTzH2fTsMHEW36rmzl2ZghCe4CgXMWyUMALkQXtM5OtHI0YMTMyz6fexh%2B0q8tcEk0920QpXvCLkLXfgYuRyIoRlCgCF83yDd%2FvnWvVhSAi3ink9gF70gn76%2FvpD2qhiKodsUO1%2FGCuwGTXn9pbnrv7riSE8ds8kiYY5zJ5Xlk%2B9O2YK9jUa7mXMCr0%2BGl2p7bMPpehfui7m47lcu94%2FD32MWoIQ4EawqRCaHgL%2BJQmqqCToacRWeaC06nO7JmynwUoHSJAMPgesKJwRjebBotA9hwYwAq3B3JO7WkVsk7aCrImWknvTSWgoHwTTpYuKsFsvpCfQPZmNoy6SbFmJ05QEY8tjRkfEhIU6WblS7vf%2FcrwRf8mpxLu%2Ba6weWx6iURL5%2FG7Z6B4wodlG9a%2BryL%2BSFg3s9l8Mfc%2BebhnAEutGUws9MRRAbuzkgoP5o0nSzMOWGmcAGOqUBHzmjLd74cHNvZ5zQBc87oZkpV2AgZzXIn1IpfRYxsI46BCGSFcJ6DY1v9CbskNDSZLWO1jQf2BSoTewaJVvHjh7HMqENg3%2FXVDgUo8nHQudMhqucf%2Bu9ISOtUIQbInNCm3yNP4eO15il%2BinirfQ4BeznVEo6cvYf6QLyRewI2clQePMeyRQ3%2BY2f%2B5a6pMtWSx%2FiAGjaJT3Jeac6Bd27vK9mRFZ%2B&X-Amz-Signature=6fa3497c2234337c742e6cd48120d1b4b7d4b554cbf9615115eb1c4e12edb700&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWBPVYZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDo76fXbescK55e6vs9BtArCxruJbc799CKsYd5lRpZ%2BgIgRYTowu1x2rCvmuiIBwMewgLbm0oNseazSxH0QlZjRXMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BehBbQwI3NKBM%2BwSrcAyGItglehsbZaaS4h8fnkHXuH%2FueFfHSllc%2BDct75vFSN%2F7KvnKdgMUQOkU9wZ5owxP%2B%2F98%2B0nEBXfqkASr5Jv8MR0FlafCNFZbFNBSj9w0KZtc8njCRfArB5piZX2EYAfAh4K3G7NkV6tEPNZVr6SBgcQwUDh1g%2FfcU8AtqLisX36LOwOZBtT7FdZpCTzH2fTsMHEW36rmzl2ZghCe4CgXMWyUMALkQXtM5OtHI0YMTMyz6fexh%2B0q8tcEk0920QpXvCLkLXfgYuRyIoRlCgCF83yDd%2FvnWvVhSAi3ink9gF70gn76%2FvpD2qhiKodsUO1%2FGCuwGTXn9pbnrv7riSE8ds8kiYY5zJ5Xlk%2B9O2YK9jUa7mXMCr0%2BGl2p7bMPpehfui7m47lcu94%2FD32MWoIQ4EawqRCaHgL%2BJQmqqCToacRWeaC06nO7JmynwUoHSJAMPgesKJwRjebBotA9hwYwAq3B3JO7WkVsk7aCrImWknvTSWgoHwTTpYuKsFsvpCfQPZmNoy6SbFmJ05QEY8tjRkfEhIU6WblS7vf%2FcrwRf8mpxLu%2Ba6weWx6iURL5%2FG7Z6B4wodlG9a%2BryL%2BSFg3s9l8Mfc%2BebhnAEutGUws9MRRAbuzkgoP5o0nSzMOWGmcAGOqUBHzmjLd74cHNvZ5zQBc87oZkpV2AgZzXIn1IpfRYxsI46BCGSFcJ6DY1v9CbskNDSZLWO1jQf2BSoTewaJVvHjh7HMqENg3%2FXVDgUo8nHQudMhqucf%2Bu9ISOtUIQbInNCm3yNP4eO15il%2BinirfQ4BeznVEo6cvYf6QLyRewI2clQePMeyRQ3%2BY2f%2B5a6pMtWSx%2FiAGjaJT3Jeac6Bd27vK9mRFZ%2B&X-Amz-Signature=97f5b353f74c056b4060311ef8fea97d1817639a62bfa5625c1570171d0776ea&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWBPVYZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDo76fXbescK55e6vs9BtArCxruJbc799CKsYd5lRpZ%2BgIgRYTowu1x2rCvmuiIBwMewgLbm0oNseazSxH0QlZjRXMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BehBbQwI3NKBM%2BwSrcAyGItglehsbZaaS4h8fnkHXuH%2FueFfHSllc%2BDct75vFSN%2F7KvnKdgMUQOkU9wZ5owxP%2B%2F98%2B0nEBXfqkASr5Jv8MR0FlafCNFZbFNBSj9w0KZtc8njCRfArB5piZX2EYAfAh4K3G7NkV6tEPNZVr6SBgcQwUDh1g%2FfcU8AtqLisX36LOwOZBtT7FdZpCTzH2fTsMHEW36rmzl2ZghCe4CgXMWyUMALkQXtM5OtHI0YMTMyz6fexh%2B0q8tcEk0920QpXvCLkLXfgYuRyIoRlCgCF83yDd%2FvnWvVhSAi3ink9gF70gn76%2FvpD2qhiKodsUO1%2FGCuwGTXn9pbnrv7riSE8ds8kiYY5zJ5Xlk%2B9O2YK9jUa7mXMCr0%2BGl2p7bMPpehfui7m47lcu94%2FD32MWoIQ4EawqRCaHgL%2BJQmqqCToacRWeaC06nO7JmynwUoHSJAMPgesKJwRjebBotA9hwYwAq3B3JO7WkVsk7aCrImWknvTSWgoHwTTpYuKsFsvpCfQPZmNoy6SbFmJ05QEY8tjRkfEhIU6WblS7vf%2FcrwRf8mpxLu%2Ba6weWx6iURL5%2FG7Z6B4wodlG9a%2BryL%2BSFg3s9l8Mfc%2BebhnAEutGUws9MRRAbuzkgoP5o0nSzMOWGmcAGOqUBHzmjLd74cHNvZ5zQBc87oZkpV2AgZzXIn1IpfRYxsI46BCGSFcJ6DY1v9CbskNDSZLWO1jQf2BSoTewaJVvHjh7HMqENg3%2FXVDgUo8nHQudMhqucf%2Bu9ISOtUIQbInNCm3yNP4eO15il%2BinirfQ4BeznVEo6cvYf6QLyRewI2clQePMeyRQ3%2BY2f%2B5a6pMtWSx%2FiAGjaJT3Jeac6Bd27vK9mRFZ%2B&X-Amz-Signature=cab0dcb80e0784ebb34efa69250891a312493d1318d85888cbdf55dc9fb41f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWBPVYZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDo76fXbescK55e6vs9BtArCxruJbc799CKsYd5lRpZ%2BgIgRYTowu1x2rCvmuiIBwMewgLbm0oNseazSxH0QlZjRXMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BehBbQwI3NKBM%2BwSrcAyGItglehsbZaaS4h8fnkHXuH%2FueFfHSllc%2BDct75vFSN%2F7KvnKdgMUQOkU9wZ5owxP%2B%2F98%2B0nEBXfqkASr5Jv8MR0FlafCNFZbFNBSj9w0KZtc8njCRfArB5piZX2EYAfAh4K3G7NkV6tEPNZVr6SBgcQwUDh1g%2FfcU8AtqLisX36LOwOZBtT7FdZpCTzH2fTsMHEW36rmzl2ZghCe4CgXMWyUMALkQXtM5OtHI0YMTMyz6fexh%2B0q8tcEk0920QpXvCLkLXfgYuRyIoRlCgCF83yDd%2FvnWvVhSAi3ink9gF70gn76%2FvpD2qhiKodsUO1%2FGCuwGTXn9pbnrv7riSE8ds8kiYY5zJ5Xlk%2B9O2YK9jUa7mXMCr0%2BGl2p7bMPpehfui7m47lcu94%2FD32MWoIQ4EawqRCaHgL%2BJQmqqCToacRWeaC06nO7JmynwUoHSJAMPgesKJwRjebBotA9hwYwAq3B3JO7WkVsk7aCrImWknvTSWgoHwTTpYuKsFsvpCfQPZmNoy6SbFmJ05QEY8tjRkfEhIU6WblS7vf%2FcrwRf8mpxLu%2Ba6weWx6iURL5%2FG7Z6B4wodlG9a%2BryL%2BSFg3s9l8Mfc%2BebhnAEutGUws9MRRAbuzkgoP5o0nSzMOWGmcAGOqUBHzmjLd74cHNvZ5zQBc87oZkpV2AgZzXIn1IpfRYxsI46BCGSFcJ6DY1v9CbskNDSZLWO1jQf2BSoTewaJVvHjh7HMqENg3%2FXVDgUo8nHQudMhqucf%2Bu9ISOtUIQbInNCm3yNP4eO15il%2BinirfQ4BeznVEo6cvYf6QLyRewI2clQePMeyRQ3%2BY2f%2B5a6pMtWSx%2FiAGjaJT3Jeac6Bd27vK9mRFZ%2B&X-Amz-Signature=2865562cea935cd3cb761cafbe9fa335ae6df1522bdcbd161c4eddb5ac0c1e59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWBPVYZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDo76fXbescK55e6vs9BtArCxruJbc799CKsYd5lRpZ%2BgIgRYTowu1x2rCvmuiIBwMewgLbm0oNseazSxH0QlZjRXMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BehBbQwI3NKBM%2BwSrcAyGItglehsbZaaS4h8fnkHXuH%2FueFfHSllc%2BDct75vFSN%2F7KvnKdgMUQOkU9wZ5owxP%2B%2F98%2B0nEBXfqkASr5Jv8MR0FlafCNFZbFNBSj9w0KZtc8njCRfArB5piZX2EYAfAh4K3G7NkV6tEPNZVr6SBgcQwUDh1g%2FfcU8AtqLisX36LOwOZBtT7FdZpCTzH2fTsMHEW36rmzl2ZghCe4CgXMWyUMALkQXtM5OtHI0YMTMyz6fexh%2B0q8tcEk0920QpXvCLkLXfgYuRyIoRlCgCF83yDd%2FvnWvVhSAi3ink9gF70gn76%2FvpD2qhiKodsUO1%2FGCuwGTXn9pbnrv7riSE8ds8kiYY5zJ5Xlk%2B9O2YK9jUa7mXMCr0%2BGl2p7bMPpehfui7m47lcu94%2FD32MWoIQ4EawqRCaHgL%2BJQmqqCToacRWeaC06nO7JmynwUoHSJAMPgesKJwRjebBotA9hwYwAq3B3JO7WkVsk7aCrImWknvTSWgoHwTTpYuKsFsvpCfQPZmNoy6SbFmJ05QEY8tjRkfEhIU6WblS7vf%2FcrwRf8mpxLu%2Ba6weWx6iURL5%2FG7Z6B4wodlG9a%2BryL%2BSFg3s9l8Mfc%2BebhnAEutGUws9MRRAbuzkgoP5o0nSzMOWGmcAGOqUBHzmjLd74cHNvZ5zQBc87oZkpV2AgZzXIn1IpfRYxsI46BCGSFcJ6DY1v9CbskNDSZLWO1jQf2BSoTewaJVvHjh7HMqENg3%2FXVDgUo8nHQudMhqucf%2Bu9ISOtUIQbInNCm3yNP4eO15il%2BinirfQ4BeznVEo6cvYf6QLyRewI2clQePMeyRQ3%2BY2f%2B5a6pMtWSx%2FiAGjaJT3Jeac6Bd27vK9mRFZ%2B&X-Amz-Signature=55aed6519f28f10c2b000c4d83d3c4099570f2df9c9ac848f99d57dd55f12985&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWBPVYZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDo76fXbescK55e6vs9BtArCxruJbc799CKsYd5lRpZ%2BgIgRYTowu1x2rCvmuiIBwMewgLbm0oNseazSxH0QlZjRXMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BehBbQwI3NKBM%2BwSrcAyGItglehsbZaaS4h8fnkHXuH%2FueFfHSllc%2BDct75vFSN%2F7KvnKdgMUQOkU9wZ5owxP%2B%2F98%2B0nEBXfqkASr5Jv8MR0FlafCNFZbFNBSj9w0KZtc8njCRfArB5piZX2EYAfAh4K3G7NkV6tEPNZVr6SBgcQwUDh1g%2FfcU8AtqLisX36LOwOZBtT7FdZpCTzH2fTsMHEW36rmzl2ZghCe4CgXMWyUMALkQXtM5OtHI0YMTMyz6fexh%2B0q8tcEk0920QpXvCLkLXfgYuRyIoRlCgCF83yDd%2FvnWvVhSAi3ink9gF70gn76%2FvpD2qhiKodsUO1%2FGCuwGTXn9pbnrv7riSE8ds8kiYY5zJ5Xlk%2B9O2YK9jUa7mXMCr0%2BGl2p7bMPpehfui7m47lcu94%2FD32MWoIQ4EawqRCaHgL%2BJQmqqCToacRWeaC06nO7JmynwUoHSJAMPgesKJwRjebBotA9hwYwAq3B3JO7WkVsk7aCrImWknvTSWgoHwTTpYuKsFsvpCfQPZmNoy6SbFmJ05QEY8tjRkfEhIU6WblS7vf%2FcrwRf8mpxLu%2Ba6weWx6iURL5%2FG7Z6B4wodlG9a%2BryL%2BSFg3s9l8Mfc%2BebhnAEutGUws9MRRAbuzkgoP5o0nSzMOWGmcAGOqUBHzmjLd74cHNvZ5zQBc87oZkpV2AgZzXIn1IpfRYxsI46BCGSFcJ6DY1v9CbskNDSZLWO1jQf2BSoTewaJVvHjh7HMqENg3%2FXVDgUo8nHQudMhqucf%2Bu9ISOtUIQbInNCm3yNP4eO15il%2BinirfQ4BeznVEo6cvYf6QLyRewI2clQePMeyRQ3%2BY2f%2B5a6pMtWSx%2FiAGjaJT3Jeac6Bd27vK9mRFZ%2B&X-Amz-Signature=b85c4499284527f861e917419a129fd626465976ea6064bc95eca42f0ae51727&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWBPVYZ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDo76fXbescK55e6vs9BtArCxruJbc799CKsYd5lRpZ%2BgIgRYTowu1x2rCvmuiIBwMewgLbm0oNseazSxH0QlZjRXMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BehBbQwI3NKBM%2BwSrcAyGItglehsbZaaS4h8fnkHXuH%2FueFfHSllc%2BDct75vFSN%2F7KvnKdgMUQOkU9wZ5owxP%2B%2F98%2B0nEBXfqkASr5Jv8MR0FlafCNFZbFNBSj9w0KZtc8njCRfArB5piZX2EYAfAh4K3G7NkV6tEPNZVr6SBgcQwUDh1g%2FfcU8AtqLisX36LOwOZBtT7FdZpCTzH2fTsMHEW36rmzl2ZghCe4CgXMWyUMALkQXtM5OtHI0YMTMyz6fexh%2B0q8tcEk0920QpXvCLkLXfgYuRyIoRlCgCF83yDd%2FvnWvVhSAi3ink9gF70gn76%2FvpD2qhiKodsUO1%2FGCuwGTXn9pbnrv7riSE8ds8kiYY5zJ5Xlk%2B9O2YK9jUa7mXMCr0%2BGl2p7bMPpehfui7m47lcu94%2FD32MWoIQ4EawqRCaHgL%2BJQmqqCToacRWeaC06nO7JmynwUoHSJAMPgesKJwRjebBotA9hwYwAq3B3JO7WkVsk7aCrImWknvTSWgoHwTTpYuKsFsvpCfQPZmNoy6SbFmJ05QEY8tjRkfEhIU6WblS7vf%2FcrwRf8mpxLu%2Ba6weWx6iURL5%2FG7Z6B4wodlG9a%2BryL%2BSFg3s9l8Mfc%2BebhnAEutGUws9MRRAbuzkgoP5o0nSzMOWGmcAGOqUBHzmjLd74cHNvZ5zQBc87oZkpV2AgZzXIn1IpfRYxsI46BCGSFcJ6DY1v9CbskNDSZLWO1jQf2BSoTewaJVvHjh7HMqENg3%2FXVDgUo8nHQudMhqucf%2Bu9ISOtUIQbInNCm3yNP4eO15il%2BinirfQ4BeznVEo6cvYf6QLyRewI2clQePMeyRQ3%2BY2f%2B5a6pMtWSx%2FiAGjaJT3Jeac6Bd27vK9mRFZ%2B&X-Amz-Signature=f2ac4b2045a61fc284094cf42d929bde32bd78c53ee53adbfac4f6d748b9c1fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
