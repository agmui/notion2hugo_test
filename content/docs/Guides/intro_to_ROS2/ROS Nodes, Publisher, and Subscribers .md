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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJ57RGO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSnL7T9wXLKUjgQbXMJYMCnGjTXW5FDXyLrbulfgcvwIgEb476qqR6U%2ByHvJT7A4fztTdZ2hE3cABXjmaS0PPkHUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzDUkQ%2FaRngrJU0circAyA7geRHvEv6K%2BKWqFlTgBOWnxZYYY6L%2FKpl5tuOvWDaMn1quSQu7EXz7DiTFLgPRWYhB%2FnMmuHkwZYo%2FUSp9J%2BG%2F3ya%2FsGKhcmNMESFLQmDFhV2ZJWzLdWQLZxeYnjuhQkua185E%2BuKd0%2FqfYFMOKc0dBKbI0IStOJoTuXXRhLwWBGxtzOPqVBNlF4aA6IRTy8F41LKZeMGXygJDWOGgW3IboI886SDErplMEQTkWptV5tpkgMbyByRr3jcsg3o3%2FC9H2V%2FlNo%2BaQ23IUEJmltS%2FA32md59M5QlejIhzDCQJuLbISOTb0R6eHZgWLtw7SkYtWfbCYUjTxK%2Bv41rJyB2MrJy%2Bozo2ZXHHsPu%2BgF0wXDI5%2F%2B5hAOS0a6Y6t5Pi%2Fao9wNb4jfbDwtDHaWb3qDs9Y%2Fl%2FfDheJ05T6T7PgbliaJiIAZJy5%2BhS4mUHznfAlFKO193pGzO22PWkewaxopWH%2BW9tMgbyZTmrcJMjDauyIl%2Bx8rQQbGEMA%2FvUZiY1Tztq%2FPc9GQu3fT9kgKudrTWpcMN%2BCthdZKznT6u43uKMpXuiX5%2Bz1Bouv3TuWledijA%2Fiz4Gd8PNMjfueocGsmOWQK5%2BNhuL27cwwB1AJBoFSk8oaBZJw0wkVsAMPKq5sQGOqUBOMFzqEJqdHr9tepZoHLpCEf8OPYJD5Ognfsg8xo%2FZXqhDeUWbCfP2if9smNa6N511L%2FInfevMUyCdUUHcnguHgoxgBKpOBQDJQYZRLLQtEPly8GU%2BE3LV6%2BEE5wOPvJ1Lhf4Xkg7iIVC37trxGDX%2BiBiJAKtgKFv2QbnLmRZ2W%2BrSXUJ866b1LE%2BFTsD%2BaS%2Fa9mBckN4BIf6xAS71AiHHWTey2QZ&X-Amz-Signature=8a014ea7be9de03c322fc28618f42e525918f94117c1e53392d685775fdf3a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJ57RGO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSnL7T9wXLKUjgQbXMJYMCnGjTXW5FDXyLrbulfgcvwIgEb476qqR6U%2ByHvJT7A4fztTdZ2hE3cABXjmaS0PPkHUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzDUkQ%2FaRngrJU0circAyA7geRHvEv6K%2BKWqFlTgBOWnxZYYY6L%2FKpl5tuOvWDaMn1quSQu7EXz7DiTFLgPRWYhB%2FnMmuHkwZYo%2FUSp9J%2BG%2F3ya%2FsGKhcmNMESFLQmDFhV2ZJWzLdWQLZxeYnjuhQkua185E%2BuKd0%2FqfYFMOKc0dBKbI0IStOJoTuXXRhLwWBGxtzOPqVBNlF4aA6IRTy8F41LKZeMGXygJDWOGgW3IboI886SDErplMEQTkWptV5tpkgMbyByRr3jcsg3o3%2FC9H2V%2FlNo%2BaQ23IUEJmltS%2FA32md59M5QlejIhzDCQJuLbISOTb0R6eHZgWLtw7SkYtWfbCYUjTxK%2Bv41rJyB2MrJy%2Bozo2ZXHHsPu%2BgF0wXDI5%2F%2B5hAOS0a6Y6t5Pi%2Fao9wNb4jfbDwtDHaWb3qDs9Y%2Fl%2FfDheJ05T6T7PgbliaJiIAZJy5%2BhS4mUHznfAlFKO193pGzO22PWkewaxopWH%2BW9tMgbyZTmrcJMjDauyIl%2Bx8rQQbGEMA%2FvUZiY1Tztq%2FPc9GQu3fT9kgKudrTWpcMN%2BCthdZKznT6u43uKMpXuiX5%2Bz1Bouv3TuWledijA%2Fiz4Gd8PNMjfueocGsmOWQK5%2BNhuL27cwwB1AJBoFSk8oaBZJw0wkVsAMPKq5sQGOqUBOMFzqEJqdHr9tepZoHLpCEf8OPYJD5Ognfsg8xo%2FZXqhDeUWbCfP2if9smNa6N511L%2FInfevMUyCdUUHcnguHgoxgBKpOBQDJQYZRLLQtEPly8GU%2BE3LV6%2BEE5wOPvJ1Lhf4Xkg7iIVC37trxGDX%2BiBiJAKtgKFv2QbnLmRZ2W%2BrSXUJ866b1LE%2BFTsD%2BaS%2Fa9mBckN4BIf6xAS71AiHHWTey2QZ&X-Amz-Signature=278969d157d24eca1c9625774e56024622c2863a93d180274a850f618858d034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJ57RGO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSnL7T9wXLKUjgQbXMJYMCnGjTXW5FDXyLrbulfgcvwIgEb476qqR6U%2ByHvJT7A4fztTdZ2hE3cABXjmaS0PPkHUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzDUkQ%2FaRngrJU0circAyA7geRHvEv6K%2BKWqFlTgBOWnxZYYY6L%2FKpl5tuOvWDaMn1quSQu7EXz7DiTFLgPRWYhB%2FnMmuHkwZYo%2FUSp9J%2BG%2F3ya%2FsGKhcmNMESFLQmDFhV2ZJWzLdWQLZxeYnjuhQkua185E%2BuKd0%2FqfYFMOKc0dBKbI0IStOJoTuXXRhLwWBGxtzOPqVBNlF4aA6IRTy8F41LKZeMGXygJDWOGgW3IboI886SDErplMEQTkWptV5tpkgMbyByRr3jcsg3o3%2FC9H2V%2FlNo%2BaQ23IUEJmltS%2FA32md59M5QlejIhzDCQJuLbISOTb0R6eHZgWLtw7SkYtWfbCYUjTxK%2Bv41rJyB2MrJy%2Bozo2ZXHHsPu%2BgF0wXDI5%2F%2B5hAOS0a6Y6t5Pi%2Fao9wNb4jfbDwtDHaWb3qDs9Y%2Fl%2FfDheJ05T6T7PgbliaJiIAZJy5%2BhS4mUHznfAlFKO193pGzO22PWkewaxopWH%2BW9tMgbyZTmrcJMjDauyIl%2Bx8rQQbGEMA%2FvUZiY1Tztq%2FPc9GQu3fT9kgKudrTWpcMN%2BCthdZKznT6u43uKMpXuiX5%2Bz1Bouv3TuWledijA%2Fiz4Gd8PNMjfueocGsmOWQK5%2BNhuL27cwwB1AJBoFSk8oaBZJw0wkVsAMPKq5sQGOqUBOMFzqEJqdHr9tepZoHLpCEf8OPYJD5Ognfsg8xo%2FZXqhDeUWbCfP2if9smNa6N511L%2FInfevMUyCdUUHcnguHgoxgBKpOBQDJQYZRLLQtEPly8GU%2BE3LV6%2BEE5wOPvJ1Lhf4Xkg7iIVC37trxGDX%2BiBiJAKtgKFv2QbnLmRZ2W%2BrSXUJ866b1LE%2BFTsD%2BaS%2Fa9mBckN4BIf6xAS71AiHHWTey2QZ&X-Amz-Signature=f1012c0c205be7274e350141217305cd93630782dddeb4f5b5b197b08336ce1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJ57RGO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSnL7T9wXLKUjgQbXMJYMCnGjTXW5FDXyLrbulfgcvwIgEb476qqR6U%2ByHvJT7A4fztTdZ2hE3cABXjmaS0PPkHUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzDUkQ%2FaRngrJU0circAyA7geRHvEv6K%2BKWqFlTgBOWnxZYYY6L%2FKpl5tuOvWDaMn1quSQu7EXz7DiTFLgPRWYhB%2FnMmuHkwZYo%2FUSp9J%2BG%2F3ya%2FsGKhcmNMESFLQmDFhV2ZJWzLdWQLZxeYnjuhQkua185E%2BuKd0%2FqfYFMOKc0dBKbI0IStOJoTuXXRhLwWBGxtzOPqVBNlF4aA6IRTy8F41LKZeMGXygJDWOGgW3IboI886SDErplMEQTkWptV5tpkgMbyByRr3jcsg3o3%2FC9H2V%2FlNo%2BaQ23IUEJmltS%2FA32md59M5QlejIhzDCQJuLbISOTb0R6eHZgWLtw7SkYtWfbCYUjTxK%2Bv41rJyB2MrJy%2Bozo2ZXHHsPu%2BgF0wXDI5%2F%2B5hAOS0a6Y6t5Pi%2Fao9wNb4jfbDwtDHaWb3qDs9Y%2Fl%2FfDheJ05T6T7PgbliaJiIAZJy5%2BhS4mUHznfAlFKO193pGzO22PWkewaxopWH%2BW9tMgbyZTmrcJMjDauyIl%2Bx8rQQbGEMA%2FvUZiY1Tztq%2FPc9GQu3fT9kgKudrTWpcMN%2BCthdZKznT6u43uKMpXuiX5%2Bz1Bouv3TuWledijA%2Fiz4Gd8PNMjfueocGsmOWQK5%2BNhuL27cwwB1AJBoFSk8oaBZJw0wkVsAMPKq5sQGOqUBOMFzqEJqdHr9tepZoHLpCEf8OPYJD5Ognfsg8xo%2FZXqhDeUWbCfP2if9smNa6N511L%2FInfevMUyCdUUHcnguHgoxgBKpOBQDJQYZRLLQtEPly8GU%2BE3LV6%2BEE5wOPvJ1Lhf4Xkg7iIVC37trxGDX%2BiBiJAKtgKFv2QbnLmRZ2W%2BrSXUJ866b1LE%2BFTsD%2BaS%2Fa9mBckN4BIf6xAS71AiHHWTey2QZ&X-Amz-Signature=400c0de99ce6c15fbbceef6b37f16341589e1def843fed930221509edcb47add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJ57RGO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSnL7T9wXLKUjgQbXMJYMCnGjTXW5FDXyLrbulfgcvwIgEb476qqR6U%2ByHvJT7A4fztTdZ2hE3cABXjmaS0PPkHUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzDUkQ%2FaRngrJU0circAyA7geRHvEv6K%2BKWqFlTgBOWnxZYYY6L%2FKpl5tuOvWDaMn1quSQu7EXz7DiTFLgPRWYhB%2FnMmuHkwZYo%2FUSp9J%2BG%2F3ya%2FsGKhcmNMESFLQmDFhV2ZJWzLdWQLZxeYnjuhQkua185E%2BuKd0%2FqfYFMOKc0dBKbI0IStOJoTuXXRhLwWBGxtzOPqVBNlF4aA6IRTy8F41LKZeMGXygJDWOGgW3IboI886SDErplMEQTkWptV5tpkgMbyByRr3jcsg3o3%2FC9H2V%2FlNo%2BaQ23IUEJmltS%2FA32md59M5QlejIhzDCQJuLbISOTb0R6eHZgWLtw7SkYtWfbCYUjTxK%2Bv41rJyB2MrJy%2Bozo2ZXHHsPu%2BgF0wXDI5%2F%2B5hAOS0a6Y6t5Pi%2Fao9wNb4jfbDwtDHaWb3qDs9Y%2Fl%2FfDheJ05T6T7PgbliaJiIAZJy5%2BhS4mUHznfAlFKO193pGzO22PWkewaxopWH%2BW9tMgbyZTmrcJMjDauyIl%2Bx8rQQbGEMA%2FvUZiY1Tztq%2FPc9GQu3fT9kgKudrTWpcMN%2BCthdZKznT6u43uKMpXuiX5%2Bz1Bouv3TuWledijA%2Fiz4Gd8PNMjfueocGsmOWQK5%2BNhuL27cwwB1AJBoFSk8oaBZJw0wkVsAMPKq5sQGOqUBOMFzqEJqdHr9tepZoHLpCEf8OPYJD5Ognfsg8xo%2FZXqhDeUWbCfP2if9smNa6N511L%2FInfevMUyCdUUHcnguHgoxgBKpOBQDJQYZRLLQtEPly8GU%2BE3LV6%2BEE5wOPvJ1Lhf4Xkg7iIVC37trxGDX%2BiBiJAKtgKFv2QbnLmRZ2W%2BrSXUJ866b1LE%2BFTsD%2BaS%2Fa9mBckN4BIf6xAS71AiHHWTey2QZ&X-Amz-Signature=67c6c61bd42171c87bba715e2021cea3fe3f939803a50c19ade7cf6d220a46fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJ57RGO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSnL7T9wXLKUjgQbXMJYMCnGjTXW5FDXyLrbulfgcvwIgEb476qqR6U%2ByHvJT7A4fztTdZ2hE3cABXjmaS0PPkHUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzDUkQ%2FaRngrJU0circAyA7geRHvEv6K%2BKWqFlTgBOWnxZYYY6L%2FKpl5tuOvWDaMn1quSQu7EXz7DiTFLgPRWYhB%2FnMmuHkwZYo%2FUSp9J%2BG%2F3ya%2FsGKhcmNMESFLQmDFhV2ZJWzLdWQLZxeYnjuhQkua185E%2BuKd0%2FqfYFMOKc0dBKbI0IStOJoTuXXRhLwWBGxtzOPqVBNlF4aA6IRTy8F41LKZeMGXygJDWOGgW3IboI886SDErplMEQTkWptV5tpkgMbyByRr3jcsg3o3%2FC9H2V%2FlNo%2BaQ23IUEJmltS%2FA32md59M5QlejIhzDCQJuLbISOTb0R6eHZgWLtw7SkYtWfbCYUjTxK%2Bv41rJyB2MrJy%2Bozo2ZXHHsPu%2BgF0wXDI5%2F%2B5hAOS0a6Y6t5Pi%2Fao9wNb4jfbDwtDHaWb3qDs9Y%2Fl%2FfDheJ05T6T7PgbliaJiIAZJy5%2BhS4mUHznfAlFKO193pGzO22PWkewaxopWH%2BW9tMgbyZTmrcJMjDauyIl%2Bx8rQQbGEMA%2FvUZiY1Tztq%2FPc9GQu3fT9kgKudrTWpcMN%2BCthdZKznT6u43uKMpXuiX5%2Bz1Bouv3TuWledijA%2Fiz4Gd8PNMjfueocGsmOWQK5%2BNhuL27cwwB1AJBoFSk8oaBZJw0wkVsAMPKq5sQGOqUBOMFzqEJqdHr9tepZoHLpCEf8OPYJD5Ognfsg8xo%2FZXqhDeUWbCfP2if9smNa6N511L%2FInfevMUyCdUUHcnguHgoxgBKpOBQDJQYZRLLQtEPly8GU%2BE3LV6%2BEE5wOPvJ1Lhf4Xkg7iIVC37trxGDX%2BiBiJAKtgKFv2QbnLmRZ2W%2BrSXUJ866b1LE%2BFTsD%2BaS%2Fa9mBckN4BIf6xAS71AiHHWTey2QZ&X-Amz-Signature=a3b552923631c9ba55d6d42995828bf5de12f938548b2443aece6e9749b1dbf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJ57RGO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSnL7T9wXLKUjgQbXMJYMCnGjTXW5FDXyLrbulfgcvwIgEb476qqR6U%2ByHvJT7A4fztTdZ2hE3cABXjmaS0PPkHUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzDUkQ%2FaRngrJU0circAyA7geRHvEv6K%2BKWqFlTgBOWnxZYYY6L%2FKpl5tuOvWDaMn1quSQu7EXz7DiTFLgPRWYhB%2FnMmuHkwZYo%2FUSp9J%2BG%2F3ya%2FsGKhcmNMESFLQmDFhV2ZJWzLdWQLZxeYnjuhQkua185E%2BuKd0%2FqfYFMOKc0dBKbI0IStOJoTuXXRhLwWBGxtzOPqVBNlF4aA6IRTy8F41LKZeMGXygJDWOGgW3IboI886SDErplMEQTkWptV5tpkgMbyByRr3jcsg3o3%2FC9H2V%2FlNo%2BaQ23IUEJmltS%2FA32md59M5QlejIhzDCQJuLbISOTb0R6eHZgWLtw7SkYtWfbCYUjTxK%2Bv41rJyB2MrJy%2Bozo2ZXHHsPu%2BgF0wXDI5%2F%2B5hAOS0a6Y6t5Pi%2Fao9wNb4jfbDwtDHaWb3qDs9Y%2Fl%2FfDheJ05T6T7PgbliaJiIAZJy5%2BhS4mUHznfAlFKO193pGzO22PWkewaxopWH%2BW9tMgbyZTmrcJMjDauyIl%2Bx8rQQbGEMA%2FvUZiY1Tztq%2FPc9GQu3fT9kgKudrTWpcMN%2BCthdZKznT6u43uKMpXuiX5%2Bz1Bouv3TuWledijA%2Fiz4Gd8PNMjfueocGsmOWQK5%2BNhuL27cwwB1AJBoFSk8oaBZJw0wkVsAMPKq5sQGOqUBOMFzqEJqdHr9tepZoHLpCEf8OPYJD5Ognfsg8xo%2FZXqhDeUWbCfP2if9smNa6N511L%2FInfevMUyCdUUHcnguHgoxgBKpOBQDJQYZRLLQtEPly8GU%2BE3LV6%2BEE5wOPvJ1Lhf4Xkg7iIVC37trxGDX%2BiBiJAKtgKFv2QbnLmRZ2W%2BrSXUJ866b1LE%2BFTsD%2BaS%2Fa9mBckN4BIf6xAS71AiHHWTey2QZ&X-Amz-Signature=83a53b6c7bafead57deee2bfdf910938314dca6d6e4d5a0a8b3981909adefa24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJ57RGO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSnL7T9wXLKUjgQbXMJYMCnGjTXW5FDXyLrbulfgcvwIgEb476qqR6U%2ByHvJT7A4fztTdZ2hE3cABXjmaS0PPkHUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzDUkQ%2FaRngrJU0circAyA7geRHvEv6K%2BKWqFlTgBOWnxZYYY6L%2FKpl5tuOvWDaMn1quSQu7EXz7DiTFLgPRWYhB%2FnMmuHkwZYo%2FUSp9J%2BG%2F3ya%2FsGKhcmNMESFLQmDFhV2ZJWzLdWQLZxeYnjuhQkua185E%2BuKd0%2FqfYFMOKc0dBKbI0IStOJoTuXXRhLwWBGxtzOPqVBNlF4aA6IRTy8F41LKZeMGXygJDWOGgW3IboI886SDErplMEQTkWptV5tpkgMbyByRr3jcsg3o3%2FC9H2V%2FlNo%2BaQ23IUEJmltS%2FA32md59M5QlejIhzDCQJuLbISOTb0R6eHZgWLtw7SkYtWfbCYUjTxK%2Bv41rJyB2MrJy%2Bozo2ZXHHsPu%2BgF0wXDI5%2F%2B5hAOS0a6Y6t5Pi%2Fao9wNb4jfbDwtDHaWb3qDs9Y%2Fl%2FfDheJ05T6T7PgbliaJiIAZJy5%2BhS4mUHznfAlFKO193pGzO22PWkewaxopWH%2BW9tMgbyZTmrcJMjDauyIl%2Bx8rQQbGEMA%2FvUZiY1Tztq%2FPc9GQu3fT9kgKudrTWpcMN%2BCthdZKznT6u43uKMpXuiX5%2Bz1Bouv3TuWledijA%2Fiz4Gd8PNMjfueocGsmOWQK5%2BNhuL27cwwB1AJBoFSk8oaBZJw0wkVsAMPKq5sQGOqUBOMFzqEJqdHr9tepZoHLpCEf8OPYJD5Ognfsg8xo%2FZXqhDeUWbCfP2if9smNa6N511L%2FInfevMUyCdUUHcnguHgoxgBKpOBQDJQYZRLLQtEPly8GU%2BE3LV6%2BEE5wOPvJ1Lhf4Xkg7iIVC37trxGDX%2BiBiJAKtgKFv2QbnLmRZ2W%2BrSXUJ866b1LE%2BFTsD%2BaS%2Fa9mBckN4BIf6xAS71AiHHWTey2QZ&X-Amz-Signature=ca3299335a11e248e0a106a6154be91559c0e4ec6f461dca8083cf18dc5ead51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
