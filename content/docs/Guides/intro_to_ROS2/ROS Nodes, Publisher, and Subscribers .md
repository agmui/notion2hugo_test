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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWERMD5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC82ytFtdSmbGyby9qcQ%2FRcA7UR1MrGlOxzL46hJ1V2jgIgE0bF6uM13UQxKwKv4PGfgbVTy%2BmzJKc%2Bqj5TK0k0OAQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrLhOXiQ1s22ZYnHircAwf%2F11Q%2F15ZeN7qTZqq3O7dTg9nV2Mw91C2FULH1Df1TLV1TOpOs78rQ8KX9ByJ%2Bf0JJoLvzEtqLGyX7X3AARUCsUX4c7x91g8AwL6ZLSOg%2Fv%2ByKV7iroDFysC3KGfOWCQo5BKGYz4kXp1%2FXr3KOmqc%2Br7RGRMC4V69Qs6rGN3dHdYxEXYLHb2ds5O%2FCa6wDadOpXzJHT2jQJ0cOybefAKHSP%2FZxLhwH%2FM565ocQt%2BEetoK3haG%2BNkysrA2ysGlZUOrKAy8%2BeeelDNMzKCKeeVSCjI5x4NYx9SfU8nyQuGD8MnPymDMI6BAPbE8ikij7TznDlrO57J4oy9XrCRxDs311rAaCsyKILNtnQ57dlHbz6yu8M%2B9u10nCm0%2BymZQaKQUyDx3RjogUQwjZwJuHcGWVLnn%2FwNmnWCbDx8yG0hP6ardFUYwFfxg%2BzAVZ6N3hcWxMUYB90d%2FKW9bbZPK64uY%2FgCaSUozdm6ywDJgrAH5I8%2BqENXWQ6HQWdI%2FdvnuiemSoNxwVH2Rwc3yuQ%2Fe94TOBBKs9WAMiM%2BaTL%2F4cqOSi8fgfCVUD%2F0mdEEzXIhZDbg0ibPQ39vAZPr8ZC7i9EJVSh3f3aD7a2lybQu431rxXMpHr3Nl%2FKLE6zTelMKLV1cIGOqUBSJIe3wTgfcpF07c5b8qgJyvdZlUN%2FmlI7Gvnw4XuBtax6T%2F2cYDI19V5IY65yHeeFa9vHVaBtbqePuocTYJ7Qt2Rf4whZY5UsZ0l1rNKbWK27YtnlBhkAQyfo0Pzv3lno0zOl7wTmrnWJhPiSe12MFOh0uUzcC46OfzIge6%2Bc9Mb%2FEb%2BD4WIYyOe5avHbREmSdie16G8l3OwY5TrJN87%2FV0Vzsex&X-Amz-Signature=06e801cf45e70baefee4c9164729c0b2b652a28afd2aac468abc64fbd07f7887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWERMD5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC82ytFtdSmbGyby9qcQ%2FRcA7UR1MrGlOxzL46hJ1V2jgIgE0bF6uM13UQxKwKv4PGfgbVTy%2BmzJKc%2Bqj5TK0k0OAQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrLhOXiQ1s22ZYnHircAwf%2F11Q%2F15ZeN7qTZqq3O7dTg9nV2Mw91C2FULH1Df1TLV1TOpOs78rQ8KX9ByJ%2Bf0JJoLvzEtqLGyX7X3AARUCsUX4c7x91g8AwL6ZLSOg%2Fv%2ByKV7iroDFysC3KGfOWCQo5BKGYz4kXp1%2FXr3KOmqc%2Br7RGRMC4V69Qs6rGN3dHdYxEXYLHb2ds5O%2FCa6wDadOpXzJHT2jQJ0cOybefAKHSP%2FZxLhwH%2FM565ocQt%2BEetoK3haG%2BNkysrA2ysGlZUOrKAy8%2BeeelDNMzKCKeeVSCjI5x4NYx9SfU8nyQuGD8MnPymDMI6BAPbE8ikij7TznDlrO57J4oy9XrCRxDs311rAaCsyKILNtnQ57dlHbz6yu8M%2B9u10nCm0%2BymZQaKQUyDx3RjogUQwjZwJuHcGWVLnn%2FwNmnWCbDx8yG0hP6ardFUYwFfxg%2BzAVZ6N3hcWxMUYB90d%2FKW9bbZPK64uY%2FgCaSUozdm6ywDJgrAH5I8%2BqENXWQ6HQWdI%2FdvnuiemSoNxwVH2Rwc3yuQ%2Fe94TOBBKs9WAMiM%2BaTL%2F4cqOSi8fgfCVUD%2F0mdEEzXIhZDbg0ibPQ39vAZPr8ZC7i9EJVSh3f3aD7a2lybQu431rxXMpHr3Nl%2FKLE6zTelMKLV1cIGOqUBSJIe3wTgfcpF07c5b8qgJyvdZlUN%2FmlI7Gvnw4XuBtax6T%2F2cYDI19V5IY65yHeeFa9vHVaBtbqePuocTYJ7Qt2Rf4whZY5UsZ0l1rNKbWK27YtnlBhkAQyfo0Pzv3lno0zOl7wTmrnWJhPiSe12MFOh0uUzcC46OfzIge6%2Bc9Mb%2FEb%2BD4WIYyOe5avHbREmSdie16G8l3OwY5TrJN87%2FV0Vzsex&X-Amz-Signature=9c043e23911a11d654c5acbfe65422b43c08385475f83acbcddfa14e4242b194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWERMD5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC82ytFtdSmbGyby9qcQ%2FRcA7UR1MrGlOxzL46hJ1V2jgIgE0bF6uM13UQxKwKv4PGfgbVTy%2BmzJKc%2Bqj5TK0k0OAQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrLhOXiQ1s22ZYnHircAwf%2F11Q%2F15ZeN7qTZqq3O7dTg9nV2Mw91C2FULH1Df1TLV1TOpOs78rQ8KX9ByJ%2Bf0JJoLvzEtqLGyX7X3AARUCsUX4c7x91g8AwL6ZLSOg%2Fv%2ByKV7iroDFysC3KGfOWCQo5BKGYz4kXp1%2FXr3KOmqc%2Br7RGRMC4V69Qs6rGN3dHdYxEXYLHb2ds5O%2FCa6wDadOpXzJHT2jQJ0cOybefAKHSP%2FZxLhwH%2FM565ocQt%2BEetoK3haG%2BNkysrA2ysGlZUOrKAy8%2BeeelDNMzKCKeeVSCjI5x4NYx9SfU8nyQuGD8MnPymDMI6BAPbE8ikij7TznDlrO57J4oy9XrCRxDs311rAaCsyKILNtnQ57dlHbz6yu8M%2B9u10nCm0%2BymZQaKQUyDx3RjogUQwjZwJuHcGWVLnn%2FwNmnWCbDx8yG0hP6ardFUYwFfxg%2BzAVZ6N3hcWxMUYB90d%2FKW9bbZPK64uY%2FgCaSUozdm6ywDJgrAH5I8%2BqENXWQ6HQWdI%2FdvnuiemSoNxwVH2Rwc3yuQ%2Fe94TOBBKs9WAMiM%2BaTL%2F4cqOSi8fgfCVUD%2F0mdEEzXIhZDbg0ibPQ39vAZPr8ZC7i9EJVSh3f3aD7a2lybQu431rxXMpHr3Nl%2FKLE6zTelMKLV1cIGOqUBSJIe3wTgfcpF07c5b8qgJyvdZlUN%2FmlI7Gvnw4XuBtax6T%2F2cYDI19V5IY65yHeeFa9vHVaBtbqePuocTYJ7Qt2Rf4whZY5UsZ0l1rNKbWK27YtnlBhkAQyfo0Pzv3lno0zOl7wTmrnWJhPiSe12MFOh0uUzcC46OfzIge6%2Bc9Mb%2FEb%2BD4WIYyOe5avHbREmSdie16G8l3OwY5TrJN87%2FV0Vzsex&X-Amz-Signature=a0a92ace5f192d12df6ef0146ccd6d83ff5446af3bfe44ed256e366cce929f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWERMD5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC82ytFtdSmbGyby9qcQ%2FRcA7UR1MrGlOxzL46hJ1V2jgIgE0bF6uM13UQxKwKv4PGfgbVTy%2BmzJKc%2Bqj5TK0k0OAQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrLhOXiQ1s22ZYnHircAwf%2F11Q%2F15ZeN7qTZqq3O7dTg9nV2Mw91C2FULH1Df1TLV1TOpOs78rQ8KX9ByJ%2Bf0JJoLvzEtqLGyX7X3AARUCsUX4c7x91g8AwL6ZLSOg%2Fv%2ByKV7iroDFysC3KGfOWCQo5BKGYz4kXp1%2FXr3KOmqc%2Br7RGRMC4V69Qs6rGN3dHdYxEXYLHb2ds5O%2FCa6wDadOpXzJHT2jQJ0cOybefAKHSP%2FZxLhwH%2FM565ocQt%2BEetoK3haG%2BNkysrA2ysGlZUOrKAy8%2BeeelDNMzKCKeeVSCjI5x4NYx9SfU8nyQuGD8MnPymDMI6BAPbE8ikij7TznDlrO57J4oy9XrCRxDs311rAaCsyKILNtnQ57dlHbz6yu8M%2B9u10nCm0%2BymZQaKQUyDx3RjogUQwjZwJuHcGWVLnn%2FwNmnWCbDx8yG0hP6ardFUYwFfxg%2BzAVZ6N3hcWxMUYB90d%2FKW9bbZPK64uY%2FgCaSUozdm6ywDJgrAH5I8%2BqENXWQ6HQWdI%2FdvnuiemSoNxwVH2Rwc3yuQ%2Fe94TOBBKs9WAMiM%2BaTL%2F4cqOSi8fgfCVUD%2F0mdEEzXIhZDbg0ibPQ39vAZPr8ZC7i9EJVSh3f3aD7a2lybQu431rxXMpHr3Nl%2FKLE6zTelMKLV1cIGOqUBSJIe3wTgfcpF07c5b8qgJyvdZlUN%2FmlI7Gvnw4XuBtax6T%2F2cYDI19V5IY65yHeeFa9vHVaBtbqePuocTYJ7Qt2Rf4whZY5UsZ0l1rNKbWK27YtnlBhkAQyfo0Pzv3lno0zOl7wTmrnWJhPiSe12MFOh0uUzcC46OfzIge6%2Bc9Mb%2FEb%2BD4WIYyOe5avHbREmSdie16G8l3OwY5TrJN87%2FV0Vzsex&X-Amz-Signature=5915117a56e07c059c64d85135bd0f5726e46c1531d9f7cfbc50a728d9e48ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWERMD5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC82ytFtdSmbGyby9qcQ%2FRcA7UR1MrGlOxzL46hJ1V2jgIgE0bF6uM13UQxKwKv4PGfgbVTy%2BmzJKc%2Bqj5TK0k0OAQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrLhOXiQ1s22ZYnHircAwf%2F11Q%2F15ZeN7qTZqq3O7dTg9nV2Mw91C2FULH1Df1TLV1TOpOs78rQ8KX9ByJ%2Bf0JJoLvzEtqLGyX7X3AARUCsUX4c7x91g8AwL6ZLSOg%2Fv%2ByKV7iroDFysC3KGfOWCQo5BKGYz4kXp1%2FXr3KOmqc%2Br7RGRMC4V69Qs6rGN3dHdYxEXYLHb2ds5O%2FCa6wDadOpXzJHT2jQJ0cOybefAKHSP%2FZxLhwH%2FM565ocQt%2BEetoK3haG%2BNkysrA2ysGlZUOrKAy8%2BeeelDNMzKCKeeVSCjI5x4NYx9SfU8nyQuGD8MnPymDMI6BAPbE8ikij7TznDlrO57J4oy9XrCRxDs311rAaCsyKILNtnQ57dlHbz6yu8M%2B9u10nCm0%2BymZQaKQUyDx3RjogUQwjZwJuHcGWVLnn%2FwNmnWCbDx8yG0hP6ardFUYwFfxg%2BzAVZ6N3hcWxMUYB90d%2FKW9bbZPK64uY%2FgCaSUozdm6ywDJgrAH5I8%2BqENXWQ6HQWdI%2FdvnuiemSoNxwVH2Rwc3yuQ%2Fe94TOBBKs9WAMiM%2BaTL%2F4cqOSi8fgfCVUD%2F0mdEEzXIhZDbg0ibPQ39vAZPr8ZC7i9EJVSh3f3aD7a2lybQu431rxXMpHr3Nl%2FKLE6zTelMKLV1cIGOqUBSJIe3wTgfcpF07c5b8qgJyvdZlUN%2FmlI7Gvnw4XuBtax6T%2F2cYDI19V5IY65yHeeFa9vHVaBtbqePuocTYJ7Qt2Rf4whZY5UsZ0l1rNKbWK27YtnlBhkAQyfo0Pzv3lno0zOl7wTmrnWJhPiSe12MFOh0uUzcC46OfzIge6%2Bc9Mb%2FEb%2BD4WIYyOe5avHbREmSdie16G8l3OwY5TrJN87%2FV0Vzsex&X-Amz-Signature=52d76cc069f6a36bd07348b65bdf6e1c7165bd68c02c3576a901cdab3b526a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWERMD5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC82ytFtdSmbGyby9qcQ%2FRcA7UR1MrGlOxzL46hJ1V2jgIgE0bF6uM13UQxKwKv4PGfgbVTy%2BmzJKc%2Bqj5TK0k0OAQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrLhOXiQ1s22ZYnHircAwf%2F11Q%2F15ZeN7qTZqq3O7dTg9nV2Mw91C2FULH1Df1TLV1TOpOs78rQ8KX9ByJ%2Bf0JJoLvzEtqLGyX7X3AARUCsUX4c7x91g8AwL6ZLSOg%2Fv%2ByKV7iroDFysC3KGfOWCQo5BKGYz4kXp1%2FXr3KOmqc%2Br7RGRMC4V69Qs6rGN3dHdYxEXYLHb2ds5O%2FCa6wDadOpXzJHT2jQJ0cOybefAKHSP%2FZxLhwH%2FM565ocQt%2BEetoK3haG%2BNkysrA2ysGlZUOrKAy8%2BeeelDNMzKCKeeVSCjI5x4NYx9SfU8nyQuGD8MnPymDMI6BAPbE8ikij7TznDlrO57J4oy9XrCRxDs311rAaCsyKILNtnQ57dlHbz6yu8M%2B9u10nCm0%2BymZQaKQUyDx3RjogUQwjZwJuHcGWVLnn%2FwNmnWCbDx8yG0hP6ardFUYwFfxg%2BzAVZ6N3hcWxMUYB90d%2FKW9bbZPK64uY%2FgCaSUozdm6ywDJgrAH5I8%2BqENXWQ6HQWdI%2FdvnuiemSoNxwVH2Rwc3yuQ%2Fe94TOBBKs9WAMiM%2BaTL%2F4cqOSi8fgfCVUD%2F0mdEEzXIhZDbg0ibPQ39vAZPr8ZC7i9EJVSh3f3aD7a2lybQu431rxXMpHr3Nl%2FKLE6zTelMKLV1cIGOqUBSJIe3wTgfcpF07c5b8qgJyvdZlUN%2FmlI7Gvnw4XuBtax6T%2F2cYDI19V5IY65yHeeFa9vHVaBtbqePuocTYJ7Qt2Rf4whZY5UsZ0l1rNKbWK27YtnlBhkAQyfo0Pzv3lno0zOl7wTmrnWJhPiSe12MFOh0uUzcC46OfzIge6%2Bc9Mb%2FEb%2BD4WIYyOe5avHbREmSdie16G8l3OwY5TrJN87%2FV0Vzsex&X-Amz-Signature=78c56fc9c2044db3fefc2955920823f443c62987819bf83b82dbce4515f50325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWERMD5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC82ytFtdSmbGyby9qcQ%2FRcA7UR1MrGlOxzL46hJ1V2jgIgE0bF6uM13UQxKwKv4PGfgbVTy%2BmzJKc%2Bqj5TK0k0OAQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrLhOXiQ1s22ZYnHircAwf%2F11Q%2F15ZeN7qTZqq3O7dTg9nV2Mw91C2FULH1Df1TLV1TOpOs78rQ8KX9ByJ%2Bf0JJoLvzEtqLGyX7X3AARUCsUX4c7x91g8AwL6ZLSOg%2Fv%2ByKV7iroDFysC3KGfOWCQo5BKGYz4kXp1%2FXr3KOmqc%2Br7RGRMC4V69Qs6rGN3dHdYxEXYLHb2ds5O%2FCa6wDadOpXzJHT2jQJ0cOybefAKHSP%2FZxLhwH%2FM565ocQt%2BEetoK3haG%2BNkysrA2ysGlZUOrKAy8%2BeeelDNMzKCKeeVSCjI5x4NYx9SfU8nyQuGD8MnPymDMI6BAPbE8ikij7TznDlrO57J4oy9XrCRxDs311rAaCsyKILNtnQ57dlHbz6yu8M%2B9u10nCm0%2BymZQaKQUyDx3RjogUQwjZwJuHcGWVLnn%2FwNmnWCbDx8yG0hP6ardFUYwFfxg%2BzAVZ6N3hcWxMUYB90d%2FKW9bbZPK64uY%2FgCaSUozdm6ywDJgrAH5I8%2BqENXWQ6HQWdI%2FdvnuiemSoNxwVH2Rwc3yuQ%2Fe94TOBBKs9WAMiM%2BaTL%2F4cqOSi8fgfCVUD%2F0mdEEzXIhZDbg0ibPQ39vAZPr8ZC7i9EJVSh3f3aD7a2lybQu431rxXMpHr3Nl%2FKLE6zTelMKLV1cIGOqUBSJIe3wTgfcpF07c5b8qgJyvdZlUN%2FmlI7Gvnw4XuBtax6T%2F2cYDI19V5IY65yHeeFa9vHVaBtbqePuocTYJ7Qt2Rf4whZY5UsZ0l1rNKbWK27YtnlBhkAQyfo0Pzv3lno0zOl7wTmrnWJhPiSe12MFOh0uUzcC46OfzIge6%2Bc9Mb%2FEb%2BD4WIYyOe5avHbREmSdie16G8l3OwY5TrJN87%2FV0Vzsex&X-Amz-Signature=ff3a42436f6b20ded5c9469c25f1a91ac9bd755b4fe57527320d8c0f835ec487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWERMD5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC82ytFtdSmbGyby9qcQ%2FRcA7UR1MrGlOxzL46hJ1V2jgIgE0bF6uM13UQxKwKv4PGfgbVTy%2BmzJKc%2Bqj5TK0k0OAQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrLhOXiQ1s22ZYnHircAwf%2F11Q%2F15ZeN7qTZqq3O7dTg9nV2Mw91C2FULH1Df1TLV1TOpOs78rQ8KX9ByJ%2Bf0JJoLvzEtqLGyX7X3AARUCsUX4c7x91g8AwL6ZLSOg%2Fv%2ByKV7iroDFysC3KGfOWCQo5BKGYz4kXp1%2FXr3KOmqc%2Br7RGRMC4V69Qs6rGN3dHdYxEXYLHb2ds5O%2FCa6wDadOpXzJHT2jQJ0cOybefAKHSP%2FZxLhwH%2FM565ocQt%2BEetoK3haG%2BNkysrA2ysGlZUOrKAy8%2BeeelDNMzKCKeeVSCjI5x4NYx9SfU8nyQuGD8MnPymDMI6BAPbE8ikij7TznDlrO57J4oy9XrCRxDs311rAaCsyKILNtnQ57dlHbz6yu8M%2B9u10nCm0%2BymZQaKQUyDx3RjogUQwjZwJuHcGWVLnn%2FwNmnWCbDx8yG0hP6ardFUYwFfxg%2BzAVZ6N3hcWxMUYB90d%2FKW9bbZPK64uY%2FgCaSUozdm6ywDJgrAH5I8%2BqENXWQ6HQWdI%2FdvnuiemSoNxwVH2Rwc3yuQ%2Fe94TOBBKs9WAMiM%2BaTL%2F4cqOSi8fgfCVUD%2F0mdEEzXIhZDbg0ibPQ39vAZPr8ZC7i9EJVSh3f3aD7a2lybQu431rxXMpHr3Nl%2FKLE6zTelMKLV1cIGOqUBSJIe3wTgfcpF07c5b8qgJyvdZlUN%2FmlI7Gvnw4XuBtax6T%2F2cYDI19V5IY65yHeeFa9vHVaBtbqePuocTYJ7Qt2Rf4whZY5UsZ0l1rNKbWK27YtnlBhkAQyfo0Pzv3lno0zOl7wTmrnWJhPiSe12MFOh0uUzcC46OfzIge6%2Bc9Mb%2FEb%2BD4WIYyOe5avHbREmSdie16G8l3OwY5TrJN87%2FV0Vzsex&X-Amz-Signature=6a1f77c3c0cd7949393f712036de6e505dcf9835944f4f8508d648c7d4dfbc08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
