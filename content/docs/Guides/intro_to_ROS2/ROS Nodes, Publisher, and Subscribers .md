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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQ33IFB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH91pINe5yEZ6M2lNoQ08%2F11l7bVCcuWTatGdxOY3B5XAiEA%2FFrGzL4Rnx1RqujRMJl0SGFlLwABCShqNcE2Xn1TIpAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDNSSHIDqb6v2l4e7YircA8gt6Rx73OqjLhRth00LtVwYDqIXw7sSlhUwGPRYUacGzWKqZHs4nVA5t0Uf5LxODBbhT%2FpdCRf19O5SaeNJwKqKl8EY%2Fh3wPAxpU7q%2FrCWmSmKcVrqIAkxwuxkjgJgGKHo8YuYZHHX2ZU8QhZ0hBsWKOJvVthW5T%2FXqWWiiVNNTS0Lj6Q62XYG3Htx1n2CHBX6Am5Wp38rWAAnabX7MIAoNirOXU%2FaMqFp7V0he5A6K0Z5vGRSY8i67oMd3j2VRimrFwFMV%2BlJFkba1Sh8kFw4awf3caODbFm75JfyNUzIk%2BBE%2BDZLrV%2FM9GENWXERf029YvHA8ijX5Lwmn2oN9keq9CNqivA6WEjwXZLthKbn%2Fqd8ms3FKINfm2ZntArXdVo6QAxuiUNMdqd1oACNV5i0gLWs2z%2B4CBDVlwgwg7aZTkWp5MQzYKbe9ygW9tZzT%2FfOHDdauSswkvhVOmZKlsysQF6R9uXdlgeSoz6EnahczGzTgqTFa6M1HHuPRMAKFgPHk1Sserg3EiJo89rm3XAQOMRo2JHaJeskCv7QVUS7HIyMOW%2BY3U5dkfzHgUmFr9VoAGykOjjhd6Im5I3R5QeUAyP%2F6fmcECYmgZaK6nhs0yGxfgpTWnVyUmlZXMIHhp8oGOqUBwZU5gYwNYRIaSXj3tqDiicjRwB4gUI%2F5mVFncYTY2BBhy7%2BeWX5%2BuofIkE64HAyanT0aM46dof%2FVuHts0uH5%2BL1RNJEvTPCB2aRSQMMXSr5i4zAVv68SJkd0vi4FdB0VPY2zHzDrgOC5PK%2FPaQtN7U4vfyF9%2FjJUUdCCp%2FBJ2ch%2BNQ6RFQPF2Y4%2BZvCIOstZah5jEP36e%2BOHso3RZ6CgBqlX5JZn&X-Amz-Signature=b76b5656c29450ae06571b520a283f85972a63cc3c6c4feb3eb858bb4dea72b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQ33IFB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH91pINe5yEZ6M2lNoQ08%2F11l7bVCcuWTatGdxOY3B5XAiEA%2FFrGzL4Rnx1RqujRMJl0SGFlLwABCShqNcE2Xn1TIpAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDNSSHIDqb6v2l4e7YircA8gt6Rx73OqjLhRth00LtVwYDqIXw7sSlhUwGPRYUacGzWKqZHs4nVA5t0Uf5LxODBbhT%2FpdCRf19O5SaeNJwKqKl8EY%2Fh3wPAxpU7q%2FrCWmSmKcVrqIAkxwuxkjgJgGKHo8YuYZHHX2ZU8QhZ0hBsWKOJvVthW5T%2FXqWWiiVNNTS0Lj6Q62XYG3Htx1n2CHBX6Am5Wp38rWAAnabX7MIAoNirOXU%2FaMqFp7V0he5A6K0Z5vGRSY8i67oMd3j2VRimrFwFMV%2BlJFkba1Sh8kFw4awf3caODbFm75JfyNUzIk%2BBE%2BDZLrV%2FM9GENWXERf029YvHA8ijX5Lwmn2oN9keq9CNqivA6WEjwXZLthKbn%2Fqd8ms3FKINfm2ZntArXdVo6QAxuiUNMdqd1oACNV5i0gLWs2z%2B4CBDVlwgwg7aZTkWp5MQzYKbe9ygW9tZzT%2FfOHDdauSswkvhVOmZKlsysQF6R9uXdlgeSoz6EnahczGzTgqTFa6M1HHuPRMAKFgPHk1Sserg3EiJo89rm3XAQOMRo2JHaJeskCv7QVUS7HIyMOW%2BY3U5dkfzHgUmFr9VoAGykOjjhd6Im5I3R5QeUAyP%2F6fmcECYmgZaK6nhs0yGxfgpTWnVyUmlZXMIHhp8oGOqUBwZU5gYwNYRIaSXj3tqDiicjRwB4gUI%2F5mVFncYTY2BBhy7%2BeWX5%2BuofIkE64HAyanT0aM46dof%2FVuHts0uH5%2BL1RNJEvTPCB2aRSQMMXSr5i4zAVv68SJkd0vi4FdB0VPY2zHzDrgOC5PK%2FPaQtN7U4vfyF9%2FjJUUdCCp%2FBJ2ch%2BNQ6RFQPF2Y4%2BZvCIOstZah5jEP36e%2BOHso3RZ6CgBqlX5JZn&X-Amz-Signature=30d0c6031630aed8c58fdac4bae40f5a5cc245eb1f99c41c838d9c45bf7691f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQ33IFB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH91pINe5yEZ6M2lNoQ08%2F11l7bVCcuWTatGdxOY3B5XAiEA%2FFrGzL4Rnx1RqujRMJl0SGFlLwABCShqNcE2Xn1TIpAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDNSSHIDqb6v2l4e7YircA8gt6Rx73OqjLhRth00LtVwYDqIXw7sSlhUwGPRYUacGzWKqZHs4nVA5t0Uf5LxODBbhT%2FpdCRf19O5SaeNJwKqKl8EY%2Fh3wPAxpU7q%2FrCWmSmKcVrqIAkxwuxkjgJgGKHo8YuYZHHX2ZU8QhZ0hBsWKOJvVthW5T%2FXqWWiiVNNTS0Lj6Q62XYG3Htx1n2CHBX6Am5Wp38rWAAnabX7MIAoNirOXU%2FaMqFp7V0he5A6K0Z5vGRSY8i67oMd3j2VRimrFwFMV%2BlJFkba1Sh8kFw4awf3caODbFm75JfyNUzIk%2BBE%2BDZLrV%2FM9GENWXERf029YvHA8ijX5Lwmn2oN9keq9CNqivA6WEjwXZLthKbn%2Fqd8ms3FKINfm2ZntArXdVo6QAxuiUNMdqd1oACNV5i0gLWs2z%2B4CBDVlwgwg7aZTkWp5MQzYKbe9ygW9tZzT%2FfOHDdauSswkvhVOmZKlsysQF6R9uXdlgeSoz6EnahczGzTgqTFa6M1HHuPRMAKFgPHk1Sserg3EiJo89rm3XAQOMRo2JHaJeskCv7QVUS7HIyMOW%2BY3U5dkfzHgUmFr9VoAGykOjjhd6Im5I3R5QeUAyP%2F6fmcECYmgZaK6nhs0yGxfgpTWnVyUmlZXMIHhp8oGOqUBwZU5gYwNYRIaSXj3tqDiicjRwB4gUI%2F5mVFncYTY2BBhy7%2BeWX5%2BuofIkE64HAyanT0aM46dof%2FVuHts0uH5%2BL1RNJEvTPCB2aRSQMMXSr5i4zAVv68SJkd0vi4FdB0VPY2zHzDrgOC5PK%2FPaQtN7U4vfyF9%2FjJUUdCCp%2FBJ2ch%2BNQ6RFQPF2Y4%2BZvCIOstZah5jEP36e%2BOHso3RZ6CgBqlX5JZn&X-Amz-Signature=7252388f1f28df0989237b3c5295f16746c29e88f37b07f35ca8b69252018ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQ33IFB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH91pINe5yEZ6M2lNoQ08%2F11l7bVCcuWTatGdxOY3B5XAiEA%2FFrGzL4Rnx1RqujRMJl0SGFlLwABCShqNcE2Xn1TIpAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDNSSHIDqb6v2l4e7YircA8gt6Rx73OqjLhRth00LtVwYDqIXw7sSlhUwGPRYUacGzWKqZHs4nVA5t0Uf5LxODBbhT%2FpdCRf19O5SaeNJwKqKl8EY%2Fh3wPAxpU7q%2FrCWmSmKcVrqIAkxwuxkjgJgGKHo8YuYZHHX2ZU8QhZ0hBsWKOJvVthW5T%2FXqWWiiVNNTS0Lj6Q62XYG3Htx1n2CHBX6Am5Wp38rWAAnabX7MIAoNirOXU%2FaMqFp7V0he5A6K0Z5vGRSY8i67oMd3j2VRimrFwFMV%2BlJFkba1Sh8kFw4awf3caODbFm75JfyNUzIk%2BBE%2BDZLrV%2FM9GENWXERf029YvHA8ijX5Lwmn2oN9keq9CNqivA6WEjwXZLthKbn%2Fqd8ms3FKINfm2ZntArXdVo6QAxuiUNMdqd1oACNV5i0gLWs2z%2B4CBDVlwgwg7aZTkWp5MQzYKbe9ygW9tZzT%2FfOHDdauSswkvhVOmZKlsysQF6R9uXdlgeSoz6EnahczGzTgqTFa6M1HHuPRMAKFgPHk1Sserg3EiJo89rm3XAQOMRo2JHaJeskCv7QVUS7HIyMOW%2BY3U5dkfzHgUmFr9VoAGykOjjhd6Im5I3R5QeUAyP%2F6fmcECYmgZaK6nhs0yGxfgpTWnVyUmlZXMIHhp8oGOqUBwZU5gYwNYRIaSXj3tqDiicjRwB4gUI%2F5mVFncYTY2BBhy7%2BeWX5%2BuofIkE64HAyanT0aM46dof%2FVuHts0uH5%2BL1RNJEvTPCB2aRSQMMXSr5i4zAVv68SJkd0vi4FdB0VPY2zHzDrgOC5PK%2FPaQtN7U4vfyF9%2FjJUUdCCp%2FBJ2ch%2BNQ6RFQPF2Y4%2BZvCIOstZah5jEP36e%2BOHso3RZ6CgBqlX5JZn&X-Amz-Signature=659b50dcc0502a13b9fe849defbbb08447dcf0790dbead6f75df3dc978768aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQ33IFB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH91pINe5yEZ6M2lNoQ08%2F11l7bVCcuWTatGdxOY3B5XAiEA%2FFrGzL4Rnx1RqujRMJl0SGFlLwABCShqNcE2Xn1TIpAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDNSSHIDqb6v2l4e7YircA8gt6Rx73OqjLhRth00LtVwYDqIXw7sSlhUwGPRYUacGzWKqZHs4nVA5t0Uf5LxODBbhT%2FpdCRf19O5SaeNJwKqKl8EY%2Fh3wPAxpU7q%2FrCWmSmKcVrqIAkxwuxkjgJgGKHo8YuYZHHX2ZU8QhZ0hBsWKOJvVthW5T%2FXqWWiiVNNTS0Lj6Q62XYG3Htx1n2CHBX6Am5Wp38rWAAnabX7MIAoNirOXU%2FaMqFp7V0he5A6K0Z5vGRSY8i67oMd3j2VRimrFwFMV%2BlJFkba1Sh8kFw4awf3caODbFm75JfyNUzIk%2BBE%2BDZLrV%2FM9GENWXERf029YvHA8ijX5Lwmn2oN9keq9CNqivA6WEjwXZLthKbn%2Fqd8ms3FKINfm2ZntArXdVo6QAxuiUNMdqd1oACNV5i0gLWs2z%2B4CBDVlwgwg7aZTkWp5MQzYKbe9ygW9tZzT%2FfOHDdauSswkvhVOmZKlsysQF6R9uXdlgeSoz6EnahczGzTgqTFa6M1HHuPRMAKFgPHk1Sserg3EiJo89rm3XAQOMRo2JHaJeskCv7QVUS7HIyMOW%2BY3U5dkfzHgUmFr9VoAGykOjjhd6Im5I3R5QeUAyP%2F6fmcECYmgZaK6nhs0yGxfgpTWnVyUmlZXMIHhp8oGOqUBwZU5gYwNYRIaSXj3tqDiicjRwB4gUI%2F5mVFncYTY2BBhy7%2BeWX5%2BuofIkE64HAyanT0aM46dof%2FVuHts0uH5%2BL1RNJEvTPCB2aRSQMMXSr5i4zAVv68SJkd0vi4FdB0VPY2zHzDrgOC5PK%2FPaQtN7U4vfyF9%2FjJUUdCCp%2FBJ2ch%2BNQ6RFQPF2Y4%2BZvCIOstZah5jEP36e%2BOHso3RZ6CgBqlX5JZn&X-Amz-Signature=9f7019da2c10eeb7892930017258589840fb66f30b8db45f8bfb86ae780450ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQ33IFB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH91pINe5yEZ6M2lNoQ08%2F11l7bVCcuWTatGdxOY3B5XAiEA%2FFrGzL4Rnx1RqujRMJl0SGFlLwABCShqNcE2Xn1TIpAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDNSSHIDqb6v2l4e7YircA8gt6Rx73OqjLhRth00LtVwYDqIXw7sSlhUwGPRYUacGzWKqZHs4nVA5t0Uf5LxODBbhT%2FpdCRf19O5SaeNJwKqKl8EY%2Fh3wPAxpU7q%2FrCWmSmKcVrqIAkxwuxkjgJgGKHo8YuYZHHX2ZU8QhZ0hBsWKOJvVthW5T%2FXqWWiiVNNTS0Lj6Q62XYG3Htx1n2CHBX6Am5Wp38rWAAnabX7MIAoNirOXU%2FaMqFp7V0he5A6K0Z5vGRSY8i67oMd3j2VRimrFwFMV%2BlJFkba1Sh8kFw4awf3caODbFm75JfyNUzIk%2BBE%2BDZLrV%2FM9GENWXERf029YvHA8ijX5Lwmn2oN9keq9CNqivA6WEjwXZLthKbn%2Fqd8ms3FKINfm2ZntArXdVo6QAxuiUNMdqd1oACNV5i0gLWs2z%2B4CBDVlwgwg7aZTkWp5MQzYKbe9ygW9tZzT%2FfOHDdauSswkvhVOmZKlsysQF6R9uXdlgeSoz6EnahczGzTgqTFa6M1HHuPRMAKFgPHk1Sserg3EiJo89rm3XAQOMRo2JHaJeskCv7QVUS7HIyMOW%2BY3U5dkfzHgUmFr9VoAGykOjjhd6Im5I3R5QeUAyP%2F6fmcECYmgZaK6nhs0yGxfgpTWnVyUmlZXMIHhp8oGOqUBwZU5gYwNYRIaSXj3tqDiicjRwB4gUI%2F5mVFncYTY2BBhy7%2BeWX5%2BuofIkE64HAyanT0aM46dof%2FVuHts0uH5%2BL1RNJEvTPCB2aRSQMMXSr5i4zAVv68SJkd0vi4FdB0VPY2zHzDrgOC5PK%2FPaQtN7U4vfyF9%2FjJUUdCCp%2FBJ2ch%2BNQ6RFQPF2Y4%2BZvCIOstZah5jEP36e%2BOHso3RZ6CgBqlX5JZn&X-Amz-Signature=2116e85fdc2cb650ea848e0215783060c7638106f8d4d2dde0be40ca3de22363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQ33IFB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH91pINe5yEZ6M2lNoQ08%2F11l7bVCcuWTatGdxOY3B5XAiEA%2FFrGzL4Rnx1RqujRMJl0SGFlLwABCShqNcE2Xn1TIpAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDNSSHIDqb6v2l4e7YircA8gt6Rx73OqjLhRth00LtVwYDqIXw7sSlhUwGPRYUacGzWKqZHs4nVA5t0Uf5LxODBbhT%2FpdCRf19O5SaeNJwKqKl8EY%2Fh3wPAxpU7q%2FrCWmSmKcVrqIAkxwuxkjgJgGKHo8YuYZHHX2ZU8QhZ0hBsWKOJvVthW5T%2FXqWWiiVNNTS0Lj6Q62XYG3Htx1n2CHBX6Am5Wp38rWAAnabX7MIAoNirOXU%2FaMqFp7V0he5A6K0Z5vGRSY8i67oMd3j2VRimrFwFMV%2BlJFkba1Sh8kFw4awf3caODbFm75JfyNUzIk%2BBE%2BDZLrV%2FM9GENWXERf029YvHA8ijX5Lwmn2oN9keq9CNqivA6WEjwXZLthKbn%2Fqd8ms3FKINfm2ZntArXdVo6QAxuiUNMdqd1oACNV5i0gLWs2z%2B4CBDVlwgwg7aZTkWp5MQzYKbe9ygW9tZzT%2FfOHDdauSswkvhVOmZKlsysQF6R9uXdlgeSoz6EnahczGzTgqTFa6M1HHuPRMAKFgPHk1Sserg3EiJo89rm3XAQOMRo2JHaJeskCv7QVUS7HIyMOW%2BY3U5dkfzHgUmFr9VoAGykOjjhd6Im5I3R5QeUAyP%2F6fmcECYmgZaK6nhs0yGxfgpTWnVyUmlZXMIHhp8oGOqUBwZU5gYwNYRIaSXj3tqDiicjRwB4gUI%2F5mVFncYTY2BBhy7%2BeWX5%2BuofIkE64HAyanT0aM46dof%2FVuHts0uH5%2BL1RNJEvTPCB2aRSQMMXSr5i4zAVv68SJkd0vi4FdB0VPY2zHzDrgOC5PK%2FPaQtN7U4vfyF9%2FjJUUdCCp%2FBJ2ch%2BNQ6RFQPF2Y4%2BZvCIOstZah5jEP36e%2BOHso3RZ6CgBqlX5JZn&X-Amz-Signature=03ec1906fe9ddd92d175cc360f8571fd5b6aa9555d89ef4f3790a3f88b68bbf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQ33IFB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH91pINe5yEZ6M2lNoQ08%2F11l7bVCcuWTatGdxOY3B5XAiEA%2FFrGzL4Rnx1RqujRMJl0SGFlLwABCShqNcE2Xn1TIpAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDNSSHIDqb6v2l4e7YircA8gt6Rx73OqjLhRth00LtVwYDqIXw7sSlhUwGPRYUacGzWKqZHs4nVA5t0Uf5LxODBbhT%2FpdCRf19O5SaeNJwKqKl8EY%2Fh3wPAxpU7q%2FrCWmSmKcVrqIAkxwuxkjgJgGKHo8YuYZHHX2ZU8QhZ0hBsWKOJvVthW5T%2FXqWWiiVNNTS0Lj6Q62XYG3Htx1n2CHBX6Am5Wp38rWAAnabX7MIAoNirOXU%2FaMqFp7V0he5A6K0Z5vGRSY8i67oMd3j2VRimrFwFMV%2BlJFkba1Sh8kFw4awf3caODbFm75JfyNUzIk%2BBE%2BDZLrV%2FM9GENWXERf029YvHA8ijX5Lwmn2oN9keq9CNqivA6WEjwXZLthKbn%2Fqd8ms3FKINfm2ZntArXdVo6QAxuiUNMdqd1oACNV5i0gLWs2z%2B4CBDVlwgwg7aZTkWp5MQzYKbe9ygW9tZzT%2FfOHDdauSswkvhVOmZKlsysQF6R9uXdlgeSoz6EnahczGzTgqTFa6M1HHuPRMAKFgPHk1Sserg3EiJo89rm3XAQOMRo2JHaJeskCv7QVUS7HIyMOW%2BY3U5dkfzHgUmFr9VoAGykOjjhd6Im5I3R5QeUAyP%2F6fmcECYmgZaK6nhs0yGxfgpTWnVyUmlZXMIHhp8oGOqUBwZU5gYwNYRIaSXj3tqDiicjRwB4gUI%2F5mVFncYTY2BBhy7%2BeWX5%2BuofIkE64HAyanT0aM46dof%2FVuHts0uH5%2BL1RNJEvTPCB2aRSQMMXSr5i4zAVv68SJkd0vi4FdB0VPY2zHzDrgOC5PK%2FPaQtN7U4vfyF9%2FjJUUdCCp%2FBJ2ch%2BNQ6RFQPF2Y4%2BZvCIOstZah5jEP36e%2BOHso3RZ6CgBqlX5JZn&X-Amz-Signature=e798a9d35b8b17931f2a195be03f97aefef0fed64b935d48d497165f93e2880f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
