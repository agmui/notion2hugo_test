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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOURMRLO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCt2zPMdoN6ijr0fgi81p6HEh8P8U0PkiyNJqmyNJLygAIgI%2FCXfgnRSTwJTHPKpoz8aoP38d%2FSvGDkK5VKeYYnjYgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FFWNnMPBjqfs69pyrcAx0l3n2yAlaVXnVorOGWey7SvXR7CJICKBkgPbLdQNsKP0RSb8%2FwxYTaPEigCH8bUtyxT0k4tPcjXJcFuG1rjFE41%2FFjyHHgSGABEgo%2Fmn%2B26iBux5wt6QMEYdB%2FLEW%2FmpNwqSVuaocp%2FCYSEZm7JYxYKLeAz6TloGNnstWANXkC7vNDEQtdDZzyrjguG%2Bci9dfHKrGxczN42Q4VYA1K10KD2PbulOyh6S5l4D7jAQz9563X2OZYhZ6QMd60K1aPbpQoIWWFBkGj8Jl7GiHE4P1ETCu9U7jsHShGht9bjFy66oAuzb5dyezHHche6BNeFkK3IRao5SEZkY1ZHDry2jDPe8NBUrWesAvsmyoR0RkBaObwDTAMxeYpZ4eXGaT1T1SHMJ6PBrGOSKQEbNp8BevmI3Oosu0gwvx2%2BnXkuGaM%2BUu2ERa%2B9peMSL%2Bqb%2BxXjmI1EdQU6xQDnz9Su6n395Iue9705fKT0o8qC0e0IpbvQevdk2Aj6aldWe28H86gNtjryfNdxppsdx0%2FavzHvqzMDcG27wOKuvSlNmRuLbd0zy%2FRg0xu3zxGsse5%2BxZpib%2FdMtzC%2FJ%2B%2FFomsCNW0GvtB7iv1wzF9kk5TQ8H%2Fhk1Px5lbrLjK2zKdGDNmMLXE28QGOqUB1I3xZ0jl8ymhBZXe1Iuz54cKqTZooxxU1Fxggqe4DAu8xFlU0AMyM6JY7wxkgmr3Ns3DCk%2FblPe7UqiiTUhQV3Vw5bmkAUncvpn2dyMcmff4VswBaaYh0fRTbtCa0ox%2FQtTXjZa3wEfWmIljxYQst5qji2MvrtECyILkVVOv6WtnF4Eb0KrqHgyhY2ebua2gjRuHU%2BkYTqsM6MfGSeAOpkccIn5d&X-Amz-Signature=1f03a8229abf5d9f0fc231a676837cfd052de7473d023b80958b00f05a71cac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOURMRLO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCt2zPMdoN6ijr0fgi81p6HEh8P8U0PkiyNJqmyNJLygAIgI%2FCXfgnRSTwJTHPKpoz8aoP38d%2FSvGDkK5VKeYYnjYgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FFWNnMPBjqfs69pyrcAx0l3n2yAlaVXnVorOGWey7SvXR7CJICKBkgPbLdQNsKP0RSb8%2FwxYTaPEigCH8bUtyxT0k4tPcjXJcFuG1rjFE41%2FFjyHHgSGABEgo%2Fmn%2B26iBux5wt6QMEYdB%2FLEW%2FmpNwqSVuaocp%2FCYSEZm7JYxYKLeAz6TloGNnstWANXkC7vNDEQtdDZzyrjguG%2Bci9dfHKrGxczN42Q4VYA1K10KD2PbulOyh6S5l4D7jAQz9563X2OZYhZ6QMd60K1aPbpQoIWWFBkGj8Jl7GiHE4P1ETCu9U7jsHShGht9bjFy66oAuzb5dyezHHche6BNeFkK3IRao5SEZkY1ZHDry2jDPe8NBUrWesAvsmyoR0RkBaObwDTAMxeYpZ4eXGaT1T1SHMJ6PBrGOSKQEbNp8BevmI3Oosu0gwvx2%2BnXkuGaM%2BUu2ERa%2B9peMSL%2Bqb%2BxXjmI1EdQU6xQDnz9Su6n395Iue9705fKT0o8qC0e0IpbvQevdk2Aj6aldWe28H86gNtjryfNdxppsdx0%2FavzHvqzMDcG27wOKuvSlNmRuLbd0zy%2FRg0xu3zxGsse5%2BxZpib%2FdMtzC%2FJ%2B%2FFomsCNW0GvtB7iv1wzF9kk5TQ8H%2Fhk1Px5lbrLjK2zKdGDNmMLXE28QGOqUB1I3xZ0jl8ymhBZXe1Iuz54cKqTZooxxU1Fxggqe4DAu8xFlU0AMyM6JY7wxkgmr3Ns3DCk%2FblPe7UqiiTUhQV3Vw5bmkAUncvpn2dyMcmff4VswBaaYh0fRTbtCa0ox%2FQtTXjZa3wEfWmIljxYQst5qji2MvrtECyILkVVOv6WtnF4Eb0KrqHgyhY2ebua2gjRuHU%2BkYTqsM6MfGSeAOpkccIn5d&X-Amz-Signature=355fd7743845afc24d38164bb56d7f87f5ada0878a5e09584521e528e1d6bc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOURMRLO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCt2zPMdoN6ijr0fgi81p6HEh8P8U0PkiyNJqmyNJLygAIgI%2FCXfgnRSTwJTHPKpoz8aoP38d%2FSvGDkK5VKeYYnjYgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FFWNnMPBjqfs69pyrcAx0l3n2yAlaVXnVorOGWey7SvXR7CJICKBkgPbLdQNsKP0RSb8%2FwxYTaPEigCH8bUtyxT0k4tPcjXJcFuG1rjFE41%2FFjyHHgSGABEgo%2Fmn%2B26iBux5wt6QMEYdB%2FLEW%2FmpNwqSVuaocp%2FCYSEZm7JYxYKLeAz6TloGNnstWANXkC7vNDEQtdDZzyrjguG%2Bci9dfHKrGxczN42Q4VYA1K10KD2PbulOyh6S5l4D7jAQz9563X2OZYhZ6QMd60K1aPbpQoIWWFBkGj8Jl7GiHE4P1ETCu9U7jsHShGht9bjFy66oAuzb5dyezHHche6BNeFkK3IRao5SEZkY1ZHDry2jDPe8NBUrWesAvsmyoR0RkBaObwDTAMxeYpZ4eXGaT1T1SHMJ6PBrGOSKQEbNp8BevmI3Oosu0gwvx2%2BnXkuGaM%2BUu2ERa%2B9peMSL%2Bqb%2BxXjmI1EdQU6xQDnz9Su6n395Iue9705fKT0o8qC0e0IpbvQevdk2Aj6aldWe28H86gNtjryfNdxppsdx0%2FavzHvqzMDcG27wOKuvSlNmRuLbd0zy%2FRg0xu3zxGsse5%2BxZpib%2FdMtzC%2FJ%2B%2FFomsCNW0GvtB7iv1wzF9kk5TQ8H%2Fhk1Px5lbrLjK2zKdGDNmMLXE28QGOqUB1I3xZ0jl8ymhBZXe1Iuz54cKqTZooxxU1Fxggqe4DAu8xFlU0AMyM6JY7wxkgmr3Ns3DCk%2FblPe7UqiiTUhQV3Vw5bmkAUncvpn2dyMcmff4VswBaaYh0fRTbtCa0ox%2FQtTXjZa3wEfWmIljxYQst5qji2MvrtECyILkVVOv6WtnF4Eb0KrqHgyhY2ebua2gjRuHU%2BkYTqsM6MfGSeAOpkccIn5d&X-Amz-Signature=38cef843ebdcd21502f602f2f866bef23398c39b3dd3ae8dd54bc522f955974e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOURMRLO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCt2zPMdoN6ijr0fgi81p6HEh8P8U0PkiyNJqmyNJLygAIgI%2FCXfgnRSTwJTHPKpoz8aoP38d%2FSvGDkK5VKeYYnjYgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FFWNnMPBjqfs69pyrcAx0l3n2yAlaVXnVorOGWey7SvXR7CJICKBkgPbLdQNsKP0RSb8%2FwxYTaPEigCH8bUtyxT0k4tPcjXJcFuG1rjFE41%2FFjyHHgSGABEgo%2Fmn%2B26iBux5wt6QMEYdB%2FLEW%2FmpNwqSVuaocp%2FCYSEZm7JYxYKLeAz6TloGNnstWANXkC7vNDEQtdDZzyrjguG%2Bci9dfHKrGxczN42Q4VYA1K10KD2PbulOyh6S5l4D7jAQz9563X2OZYhZ6QMd60K1aPbpQoIWWFBkGj8Jl7GiHE4P1ETCu9U7jsHShGht9bjFy66oAuzb5dyezHHche6BNeFkK3IRao5SEZkY1ZHDry2jDPe8NBUrWesAvsmyoR0RkBaObwDTAMxeYpZ4eXGaT1T1SHMJ6PBrGOSKQEbNp8BevmI3Oosu0gwvx2%2BnXkuGaM%2BUu2ERa%2B9peMSL%2Bqb%2BxXjmI1EdQU6xQDnz9Su6n395Iue9705fKT0o8qC0e0IpbvQevdk2Aj6aldWe28H86gNtjryfNdxppsdx0%2FavzHvqzMDcG27wOKuvSlNmRuLbd0zy%2FRg0xu3zxGsse5%2BxZpib%2FdMtzC%2FJ%2B%2FFomsCNW0GvtB7iv1wzF9kk5TQ8H%2Fhk1Px5lbrLjK2zKdGDNmMLXE28QGOqUB1I3xZ0jl8ymhBZXe1Iuz54cKqTZooxxU1Fxggqe4DAu8xFlU0AMyM6JY7wxkgmr3Ns3DCk%2FblPe7UqiiTUhQV3Vw5bmkAUncvpn2dyMcmff4VswBaaYh0fRTbtCa0ox%2FQtTXjZa3wEfWmIljxYQst5qji2MvrtECyILkVVOv6WtnF4Eb0KrqHgyhY2ebua2gjRuHU%2BkYTqsM6MfGSeAOpkccIn5d&X-Amz-Signature=95fd2ee2eda8d7fe59a16dcda73de6105d4f879ae11ec8b9bbd3c0a90a0fa0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOURMRLO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCt2zPMdoN6ijr0fgi81p6HEh8P8U0PkiyNJqmyNJLygAIgI%2FCXfgnRSTwJTHPKpoz8aoP38d%2FSvGDkK5VKeYYnjYgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FFWNnMPBjqfs69pyrcAx0l3n2yAlaVXnVorOGWey7SvXR7CJICKBkgPbLdQNsKP0RSb8%2FwxYTaPEigCH8bUtyxT0k4tPcjXJcFuG1rjFE41%2FFjyHHgSGABEgo%2Fmn%2B26iBux5wt6QMEYdB%2FLEW%2FmpNwqSVuaocp%2FCYSEZm7JYxYKLeAz6TloGNnstWANXkC7vNDEQtdDZzyrjguG%2Bci9dfHKrGxczN42Q4VYA1K10KD2PbulOyh6S5l4D7jAQz9563X2OZYhZ6QMd60K1aPbpQoIWWFBkGj8Jl7GiHE4P1ETCu9U7jsHShGht9bjFy66oAuzb5dyezHHche6BNeFkK3IRao5SEZkY1ZHDry2jDPe8NBUrWesAvsmyoR0RkBaObwDTAMxeYpZ4eXGaT1T1SHMJ6PBrGOSKQEbNp8BevmI3Oosu0gwvx2%2BnXkuGaM%2BUu2ERa%2B9peMSL%2Bqb%2BxXjmI1EdQU6xQDnz9Su6n395Iue9705fKT0o8qC0e0IpbvQevdk2Aj6aldWe28H86gNtjryfNdxppsdx0%2FavzHvqzMDcG27wOKuvSlNmRuLbd0zy%2FRg0xu3zxGsse5%2BxZpib%2FdMtzC%2FJ%2B%2FFomsCNW0GvtB7iv1wzF9kk5TQ8H%2Fhk1Px5lbrLjK2zKdGDNmMLXE28QGOqUB1I3xZ0jl8ymhBZXe1Iuz54cKqTZooxxU1Fxggqe4DAu8xFlU0AMyM6JY7wxkgmr3Ns3DCk%2FblPe7UqiiTUhQV3Vw5bmkAUncvpn2dyMcmff4VswBaaYh0fRTbtCa0ox%2FQtTXjZa3wEfWmIljxYQst5qji2MvrtECyILkVVOv6WtnF4Eb0KrqHgyhY2ebua2gjRuHU%2BkYTqsM6MfGSeAOpkccIn5d&X-Amz-Signature=ad6991ece44901e998499a56fd89d835fa3ed1f24bbe784abd9a896dcdf9bbd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOURMRLO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCt2zPMdoN6ijr0fgi81p6HEh8P8U0PkiyNJqmyNJLygAIgI%2FCXfgnRSTwJTHPKpoz8aoP38d%2FSvGDkK5VKeYYnjYgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FFWNnMPBjqfs69pyrcAx0l3n2yAlaVXnVorOGWey7SvXR7CJICKBkgPbLdQNsKP0RSb8%2FwxYTaPEigCH8bUtyxT0k4tPcjXJcFuG1rjFE41%2FFjyHHgSGABEgo%2Fmn%2B26iBux5wt6QMEYdB%2FLEW%2FmpNwqSVuaocp%2FCYSEZm7JYxYKLeAz6TloGNnstWANXkC7vNDEQtdDZzyrjguG%2Bci9dfHKrGxczN42Q4VYA1K10KD2PbulOyh6S5l4D7jAQz9563X2OZYhZ6QMd60K1aPbpQoIWWFBkGj8Jl7GiHE4P1ETCu9U7jsHShGht9bjFy66oAuzb5dyezHHche6BNeFkK3IRao5SEZkY1ZHDry2jDPe8NBUrWesAvsmyoR0RkBaObwDTAMxeYpZ4eXGaT1T1SHMJ6PBrGOSKQEbNp8BevmI3Oosu0gwvx2%2BnXkuGaM%2BUu2ERa%2B9peMSL%2Bqb%2BxXjmI1EdQU6xQDnz9Su6n395Iue9705fKT0o8qC0e0IpbvQevdk2Aj6aldWe28H86gNtjryfNdxppsdx0%2FavzHvqzMDcG27wOKuvSlNmRuLbd0zy%2FRg0xu3zxGsse5%2BxZpib%2FdMtzC%2FJ%2B%2FFomsCNW0GvtB7iv1wzF9kk5TQ8H%2Fhk1Px5lbrLjK2zKdGDNmMLXE28QGOqUB1I3xZ0jl8ymhBZXe1Iuz54cKqTZooxxU1Fxggqe4DAu8xFlU0AMyM6JY7wxkgmr3Ns3DCk%2FblPe7UqiiTUhQV3Vw5bmkAUncvpn2dyMcmff4VswBaaYh0fRTbtCa0ox%2FQtTXjZa3wEfWmIljxYQst5qji2MvrtECyILkVVOv6WtnF4Eb0KrqHgyhY2ebua2gjRuHU%2BkYTqsM6MfGSeAOpkccIn5d&X-Amz-Signature=f4638802b5d231c8f58102f5a02c5cd976634582ce0623911202bfc93cc98fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOURMRLO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCt2zPMdoN6ijr0fgi81p6HEh8P8U0PkiyNJqmyNJLygAIgI%2FCXfgnRSTwJTHPKpoz8aoP38d%2FSvGDkK5VKeYYnjYgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FFWNnMPBjqfs69pyrcAx0l3n2yAlaVXnVorOGWey7SvXR7CJICKBkgPbLdQNsKP0RSb8%2FwxYTaPEigCH8bUtyxT0k4tPcjXJcFuG1rjFE41%2FFjyHHgSGABEgo%2Fmn%2B26iBux5wt6QMEYdB%2FLEW%2FmpNwqSVuaocp%2FCYSEZm7JYxYKLeAz6TloGNnstWANXkC7vNDEQtdDZzyrjguG%2Bci9dfHKrGxczN42Q4VYA1K10KD2PbulOyh6S5l4D7jAQz9563X2OZYhZ6QMd60K1aPbpQoIWWFBkGj8Jl7GiHE4P1ETCu9U7jsHShGht9bjFy66oAuzb5dyezHHche6BNeFkK3IRao5SEZkY1ZHDry2jDPe8NBUrWesAvsmyoR0RkBaObwDTAMxeYpZ4eXGaT1T1SHMJ6PBrGOSKQEbNp8BevmI3Oosu0gwvx2%2BnXkuGaM%2BUu2ERa%2B9peMSL%2Bqb%2BxXjmI1EdQU6xQDnz9Su6n395Iue9705fKT0o8qC0e0IpbvQevdk2Aj6aldWe28H86gNtjryfNdxppsdx0%2FavzHvqzMDcG27wOKuvSlNmRuLbd0zy%2FRg0xu3zxGsse5%2BxZpib%2FdMtzC%2FJ%2B%2FFomsCNW0GvtB7iv1wzF9kk5TQ8H%2Fhk1Px5lbrLjK2zKdGDNmMLXE28QGOqUB1I3xZ0jl8ymhBZXe1Iuz54cKqTZooxxU1Fxggqe4DAu8xFlU0AMyM6JY7wxkgmr3Ns3DCk%2FblPe7UqiiTUhQV3Vw5bmkAUncvpn2dyMcmff4VswBaaYh0fRTbtCa0ox%2FQtTXjZa3wEfWmIljxYQst5qji2MvrtECyILkVVOv6WtnF4Eb0KrqHgyhY2ebua2gjRuHU%2BkYTqsM6MfGSeAOpkccIn5d&X-Amz-Signature=e0caa0b830444dda82506f0ee1f6b50fafade716d0f3b555bdc364bc8fe83c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOURMRLO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCt2zPMdoN6ijr0fgi81p6HEh8P8U0PkiyNJqmyNJLygAIgI%2FCXfgnRSTwJTHPKpoz8aoP38d%2FSvGDkK5VKeYYnjYgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FFWNnMPBjqfs69pyrcAx0l3n2yAlaVXnVorOGWey7SvXR7CJICKBkgPbLdQNsKP0RSb8%2FwxYTaPEigCH8bUtyxT0k4tPcjXJcFuG1rjFE41%2FFjyHHgSGABEgo%2Fmn%2B26iBux5wt6QMEYdB%2FLEW%2FmpNwqSVuaocp%2FCYSEZm7JYxYKLeAz6TloGNnstWANXkC7vNDEQtdDZzyrjguG%2Bci9dfHKrGxczN42Q4VYA1K10KD2PbulOyh6S5l4D7jAQz9563X2OZYhZ6QMd60K1aPbpQoIWWFBkGj8Jl7GiHE4P1ETCu9U7jsHShGht9bjFy66oAuzb5dyezHHche6BNeFkK3IRao5SEZkY1ZHDry2jDPe8NBUrWesAvsmyoR0RkBaObwDTAMxeYpZ4eXGaT1T1SHMJ6PBrGOSKQEbNp8BevmI3Oosu0gwvx2%2BnXkuGaM%2BUu2ERa%2B9peMSL%2Bqb%2BxXjmI1EdQU6xQDnz9Su6n395Iue9705fKT0o8qC0e0IpbvQevdk2Aj6aldWe28H86gNtjryfNdxppsdx0%2FavzHvqzMDcG27wOKuvSlNmRuLbd0zy%2FRg0xu3zxGsse5%2BxZpib%2FdMtzC%2FJ%2B%2FFomsCNW0GvtB7iv1wzF9kk5TQ8H%2Fhk1Px5lbrLjK2zKdGDNmMLXE28QGOqUB1I3xZ0jl8ymhBZXe1Iuz54cKqTZooxxU1Fxggqe4DAu8xFlU0AMyM6JY7wxkgmr3Ns3DCk%2FblPe7UqiiTUhQV3Vw5bmkAUncvpn2dyMcmff4VswBaaYh0fRTbtCa0ox%2FQtTXjZa3wEfWmIljxYQst5qji2MvrtECyILkVVOv6WtnF4Eb0KrqHgyhY2ebua2gjRuHU%2BkYTqsM6MfGSeAOpkccIn5d&X-Amz-Signature=9e9291f6583d5426ec405c963fff86b863bf87dff64b32ec6cb2643d5c051ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
