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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPAVIIH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVpXgfEqIWaBaC3tnunpBRS5zayNVQeUbYZ6eIzmsGkAiEA26Q0qL2tLmr6BpCfWr0hMBOJveHsqKWcPBhWOXOWjiMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIybVcQjSZ7VSHEKvCrcA%2FCrDWlz7LAXdZELP%2FMj1BbuT42Zj2k6IY36QUiGCPaxpb75cnEuWUZ33u9xzJkljpPGQE56uiykJoR5%2FqhUZdtQfz3aEHILd8lhS2zBxUONtD4t4uiJUO1t2I8g51xe6XSlmuczjJLp5W26OyDwlZCceeaR8cnV4G92Wwbjbtqdm%2FEuj7goew9h9QCyK1I8biHKJHFYt8CGivjMaOJd12VqPmj9unbzfVKDFb4JOuqCKwZdN4IyJsjZX%2Fe%2BLXhMNsP0uIrF6TsThNs1n788dLV4DLPhyFOLKjR2jvn6CsjYZ9ya2zM%2BIpM1XhW5NM5TmGKC96maeJwqtM%2BSBasZgA2KkeaK5FsOJ33q1%2BBh%2FCrx%2BVZ7kP6WS30GG5PUTu6sapWLAHSz1GWoYx%2FO5XAdamttUDhb%2BWxAU5ldqxCQ%2FuuZfWXHI8csb%2F5nwbEH5YBLqTXCCd7RE6mcsGFMkMe2GkfQrWwxHvccNyqwLOqTdOZ7kvYWs76LVlvD3hF%2FSubLQprzoVtRZ6JoGoJjDmPvN72rINtwaMetu3DckppgJKjwiKtwuXRkHozMx%2FwZ2%2BRNfgMhMYmN%2FXiu2kS60KmDXXikCIcKzIL0vBtyUmYZlL0SiY6PsymcgOS%2BOux2MKjSiL8GOqUB58mciZSrg3EwN1zrVjn2jaXAALRfaWgf8IyX%2BeZ1MuOCgo%2FgYTa85ksMoTYcgM%2BdUAy1%2FyGH0E3joRrSWBZIgdWTb8Y%2FrIchb2fWwo4iRTwd6q0PiSTnisPPaVnFmU4RLYX7Zt1pXTOatWlS1K19kaT5azbR0Lrn5F5yNWP4tiy5O9XHmJWzMbrTiR%2F9AwYkhxLavzo3R0K1IQMI8%2Bz2uHLoHFTj&X-Amz-Signature=e386d6d456d81836bcef132df675d26bcf9ba9380a249ad77c2851ae9f4ca991&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPAVIIH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVpXgfEqIWaBaC3tnunpBRS5zayNVQeUbYZ6eIzmsGkAiEA26Q0qL2tLmr6BpCfWr0hMBOJveHsqKWcPBhWOXOWjiMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIybVcQjSZ7VSHEKvCrcA%2FCrDWlz7LAXdZELP%2FMj1BbuT42Zj2k6IY36QUiGCPaxpb75cnEuWUZ33u9xzJkljpPGQE56uiykJoR5%2FqhUZdtQfz3aEHILd8lhS2zBxUONtD4t4uiJUO1t2I8g51xe6XSlmuczjJLp5W26OyDwlZCceeaR8cnV4G92Wwbjbtqdm%2FEuj7goew9h9QCyK1I8biHKJHFYt8CGivjMaOJd12VqPmj9unbzfVKDFb4JOuqCKwZdN4IyJsjZX%2Fe%2BLXhMNsP0uIrF6TsThNs1n788dLV4DLPhyFOLKjR2jvn6CsjYZ9ya2zM%2BIpM1XhW5NM5TmGKC96maeJwqtM%2BSBasZgA2KkeaK5FsOJ33q1%2BBh%2FCrx%2BVZ7kP6WS30GG5PUTu6sapWLAHSz1GWoYx%2FO5XAdamttUDhb%2BWxAU5ldqxCQ%2FuuZfWXHI8csb%2F5nwbEH5YBLqTXCCd7RE6mcsGFMkMe2GkfQrWwxHvccNyqwLOqTdOZ7kvYWs76LVlvD3hF%2FSubLQprzoVtRZ6JoGoJjDmPvN72rINtwaMetu3DckppgJKjwiKtwuXRkHozMx%2FwZ2%2BRNfgMhMYmN%2FXiu2kS60KmDXXikCIcKzIL0vBtyUmYZlL0SiY6PsymcgOS%2BOux2MKjSiL8GOqUB58mciZSrg3EwN1zrVjn2jaXAALRfaWgf8IyX%2BeZ1MuOCgo%2FgYTa85ksMoTYcgM%2BdUAy1%2FyGH0E3joRrSWBZIgdWTb8Y%2FrIchb2fWwo4iRTwd6q0PiSTnisPPaVnFmU4RLYX7Zt1pXTOatWlS1K19kaT5azbR0Lrn5F5yNWP4tiy5O9XHmJWzMbrTiR%2F9AwYkhxLavzo3R0K1IQMI8%2Bz2uHLoHFTj&X-Amz-Signature=e1426b4396969b54c34271efdde2e67b50cb93aa74320eece06cc82d0ee8b257&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPAVIIH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVpXgfEqIWaBaC3tnunpBRS5zayNVQeUbYZ6eIzmsGkAiEA26Q0qL2tLmr6BpCfWr0hMBOJveHsqKWcPBhWOXOWjiMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIybVcQjSZ7VSHEKvCrcA%2FCrDWlz7LAXdZELP%2FMj1BbuT42Zj2k6IY36QUiGCPaxpb75cnEuWUZ33u9xzJkljpPGQE56uiykJoR5%2FqhUZdtQfz3aEHILd8lhS2zBxUONtD4t4uiJUO1t2I8g51xe6XSlmuczjJLp5W26OyDwlZCceeaR8cnV4G92Wwbjbtqdm%2FEuj7goew9h9QCyK1I8biHKJHFYt8CGivjMaOJd12VqPmj9unbzfVKDFb4JOuqCKwZdN4IyJsjZX%2Fe%2BLXhMNsP0uIrF6TsThNs1n788dLV4DLPhyFOLKjR2jvn6CsjYZ9ya2zM%2BIpM1XhW5NM5TmGKC96maeJwqtM%2BSBasZgA2KkeaK5FsOJ33q1%2BBh%2FCrx%2BVZ7kP6WS30GG5PUTu6sapWLAHSz1GWoYx%2FO5XAdamttUDhb%2BWxAU5ldqxCQ%2FuuZfWXHI8csb%2F5nwbEH5YBLqTXCCd7RE6mcsGFMkMe2GkfQrWwxHvccNyqwLOqTdOZ7kvYWs76LVlvD3hF%2FSubLQprzoVtRZ6JoGoJjDmPvN72rINtwaMetu3DckppgJKjwiKtwuXRkHozMx%2FwZ2%2BRNfgMhMYmN%2FXiu2kS60KmDXXikCIcKzIL0vBtyUmYZlL0SiY6PsymcgOS%2BOux2MKjSiL8GOqUB58mciZSrg3EwN1zrVjn2jaXAALRfaWgf8IyX%2BeZ1MuOCgo%2FgYTa85ksMoTYcgM%2BdUAy1%2FyGH0E3joRrSWBZIgdWTb8Y%2FrIchb2fWwo4iRTwd6q0PiSTnisPPaVnFmU4RLYX7Zt1pXTOatWlS1K19kaT5azbR0Lrn5F5yNWP4tiy5O9XHmJWzMbrTiR%2F9AwYkhxLavzo3R0K1IQMI8%2Bz2uHLoHFTj&X-Amz-Signature=17076313669bcf3968ca197178e77c16cb2445e561fba65f50c306091976e4ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPAVIIH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVpXgfEqIWaBaC3tnunpBRS5zayNVQeUbYZ6eIzmsGkAiEA26Q0qL2tLmr6BpCfWr0hMBOJveHsqKWcPBhWOXOWjiMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIybVcQjSZ7VSHEKvCrcA%2FCrDWlz7LAXdZELP%2FMj1BbuT42Zj2k6IY36QUiGCPaxpb75cnEuWUZ33u9xzJkljpPGQE56uiykJoR5%2FqhUZdtQfz3aEHILd8lhS2zBxUONtD4t4uiJUO1t2I8g51xe6XSlmuczjJLp5W26OyDwlZCceeaR8cnV4G92Wwbjbtqdm%2FEuj7goew9h9QCyK1I8biHKJHFYt8CGivjMaOJd12VqPmj9unbzfVKDFb4JOuqCKwZdN4IyJsjZX%2Fe%2BLXhMNsP0uIrF6TsThNs1n788dLV4DLPhyFOLKjR2jvn6CsjYZ9ya2zM%2BIpM1XhW5NM5TmGKC96maeJwqtM%2BSBasZgA2KkeaK5FsOJ33q1%2BBh%2FCrx%2BVZ7kP6WS30GG5PUTu6sapWLAHSz1GWoYx%2FO5XAdamttUDhb%2BWxAU5ldqxCQ%2FuuZfWXHI8csb%2F5nwbEH5YBLqTXCCd7RE6mcsGFMkMe2GkfQrWwxHvccNyqwLOqTdOZ7kvYWs76LVlvD3hF%2FSubLQprzoVtRZ6JoGoJjDmPvN72rINtwaMetu3DckppgJKjwiKtwuXRkHozMx%2FwZ2%2BRNfgMhMYmN%2FXiu2kS60KmDXXikCIcKzIL0vBtyUmYZlL0SiY6PsymcgOS%2BOux2MKjSiL8GOqUB58mciZSrg3EwN1zrVjn2jaXAALRfaWgf8IyX%2BeZ1MuOCgo%2FgYTa85ksMoTYcgM%2BdUAy1%2FyGH0E3joRrSWBZIgdWTb8Y%2FrIchb2fWwo4iRTwd6q0PiSTnisPPaVnFmU4RLYX7Zt1pXTOatWlS1K19kaT5azbR0Lrn5F5yNWP4tiy5O9XHmJWzMbrTiR%2F9AwYkhxLavzo3R0K1IQMI8%2Bz2uHLoHFTj&X-Amz-Signature=38ee4bf088f2d0a7d5219d967a5dbca93dc0c23c0a9432a6c4537b1df7ac6808&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPAVIIH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVpXgfEqIWaBaC3tnunpBRS5zayNVQeUbYZ6eIzmsGkAiEA26Q0qL2tLmr6BpCfWr0hMBOJveHsqKWcPBhWOXOWjiMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIybVcQjSZ7VSHEKvCrcA%2FCrDWlz7LAXdZELP%2FMj1BbuT42Zj2k6IY36QUiGCPaxpb75cnEuWUZ33u9xzJkljpPGQE56uiykJoR5%2FqhUZdtQfz3aEHILd8lhS2zBxUONtD4t4uiJUO1t2I8g51xe6XSlmuczjJLp5W26OyDwlZCceeaR8cnV4G92Wwbjbtqdm%2FEuj7goew9h9QCyK1I8biHKJHFYt8CGivjMaOJd12VqPmj9unbzfVKDFb4JOuqCKwZdN4IyJsjZX%2Fe%2BLXhMNsP0uIrF6TsThNs1n788dLV4DLPhyFOLKjR2jvn6CsjYZ9ya2zM%2BIpM1XhW5NM5TmGKC96maeJwqtM%2BSBasZgA2KkeaK5FsOJ33q1%2BBh%2FCrx%2BVZ7kP6WS30GG5PUTu6sapWLAHSz1GWoYx%2FO5XAdamttUDhb%2BWxAU5ldqxCQ%2FuuZfWXHI8csb%2F5nwbEH5YBLqTXCCd7RE6mcsGFMkMe2GkfQrWwxHvccNyqwLOqTdOZ7kvYWs76LVlvD3hF%2FSubLQprzoVtRZ6JoGoJjDmPvN72rINtwaMetu3DckppgJKjwiKtwuXRkHozMx%2FwZ2%2BRNfgMhMYmN%2FXiu2kS60KmDXXikCIcKzIL0vBtyUmYZlL0SiY6PsymcgOS%2BOux2MKjSiL8GOqUB58mciZSrg3EwN1zrVjn2jaXAALRfaWgf8IyX%2BeZ1MuOCgo%2FgYTa85ksMoTYcgM%2BdUAy1%2FyGH0E3joRrSWBZIgdWTb8Y%2FrIchb2fWwo4iRTwd6q0PiSTnisPPaVnFmU4RLYX7Zt1pXTOatWlS1K19kaT5azbR0Lrn5F5yNWP4tiy5O9XHmJWzMbrTiR%2F9AwYkhxLavzo3R0K1IQMI8%2Bz2uHLoHFTj&X-Amz-Signature=305ad1fc55b2f80e0b6ff5436fb13c17dbe885f67a749dea390f7ff8c00c44a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPAVIIH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVpXgfEqIWaBaC3tnunpBRS5zayNVQeUbYZ6eIzmsGkAiEA26Q0qL2tLmr6BpCfWr0hMBOJveHsqKWcPBhWOXOWjiMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIybVcQjSZ7VSHEKvCrcA%2FCrDWlz7LAXdZELP%2FMj1BbuT42Zj2k6IY36QUiGCPaxpb75cnEuWUZ33u9xzJkljpPGQE56uiykJoR5%2FqhUZdtQfz3aEHILd8lhS2zBxUONtD4t4uiJUO1t2I8g51xe6XSlmuczjJLp5W26OyDwlZCceeaR8cnV4G92Wwbjbtqdm%2FEuj7goew9h9QCyK1I8biHKJHFYt8CGivjMaOJd12VqPmj9unbzfVKDFb4JOuqCKwZdN4IyJsjZX%2Fe%2BLXhMNsP0uIrF6TsThNs1n788dLV4DLPhyFOLKjR2jvn6CsjYZ9ya2zM%2BIpM1XhW5NM5TmGKC96maeJwqtM%2BSBasZgA2KkeaK5FsOJ33q1%2BBh%2FCrx%2BVZ7kP6WS30GG5PUTu6sapWLAHSz1GWoYx%2FO5XAdamttUDhb%2BWxAU5ldqxCQ%2FuuZfWXHI8csb%2F5nwbEH5YBLqTXCCd7RE6mcsGFMkMe2GkfQrWwxHvccNyqwLOqTdOZ7kvYWs76LVlvD3hF%2FSubLQprzoVtRZ6JoGoJjDmPvN72rINtwaMetu3DckppgJKjwiKtwuXRkHozMx%2FwZ2%2BRNfgMhMYmN%2FXiu2kS60KmDXXikCIcKzIL0vBtyUmYZlL0SiY6PsymcgOS%2BOux2MKjSiL8GOqUB58mciZSrg3EwN1zrVjn2jaXAALRfaWgf8IyX%2BeZ1MuOCgo%2FgYTa85ksMoTYcgM%2BdUAy1%2FyGH0E3joRrSWBZIgdWTb8Y%2FrIchb2fWwo4iRTwd6q0PiSTnisPPaVnFmU4RLYX7Zt1pXTOatWlS1K19kaT5azbR0Lrn5F5yNWP4tiy5O9XHmJWzMbrTiR%2F9AwYkhxLavzo3R0K1IQMI8%2Bz2uHLoHFTj&X-Amz-Signature=31c805a96a3bd7f5998247375b6b6a8bbbf8dad9c2debb531dcd1b501c1fb49c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPAVIIH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVpXgfEqIWaBaC3tnunpBRS5zayNVQeUbYZ6eIzmsGkAiEA26Q0qL2tLmr6BpCfWr0hMBOJveHsqKWcPBhWOXOWjiMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIybVcQjSZ7VSHEKvCrcA%2FCrDWlz7LAXdZELP%2FMj1BbuT42Zj2k6IY36QUiGCPaxpb75cnEuWUZ33u9xzJkljpPGQE56uiykJoR5%2FqhUZdtQfz3aEHILd8lhS2zBxUONtD4t4uiJUO1t2I8g51xe6XSlmuczjJLp5W26OyDwlZCceeaR8cnV4G92Wwbjbtqdm%2FEuj7goew9h9QCyK1I8biHKJHFYt8CGivjMaOJd12VqPmj9unbzfVKDFb4JOuqCKwZdN4IyJsjZX%2Fe%2BLXhMNsP0uIrF6TsThNs1n788dLV4DLPhyFOLKjR2jvn6CsjYZ9ya2zM%2BIpM1XhW5NM5TmGKC96maeJwqtM%2BSBasZgA2KkeaK5FsOJ33q1%2BBh%2FCrx%2BVZ7kP6WS30GG5PUTu6sapWLAHSz1GWoYx%2FO5XAdamttUDhb%2BWxAU5ldqxCQ%2FuuZfWXHI8csb%2F5nwbEH5YBLqTXCCd7RE6mcsGFMkMe2GkfQrWwxHvccNyqwLOqTdOZ7kvYWs76LVlvD3hF%2FSubLQprzoVtRZ6JoGoJjDmPvN72rINtwaMetu3DckppgJKjwiKtwuXRkHozMx%2FwZ2%2BRNfgMhMYmN%2FXiu2kS60KmDXXikCIcKzIL0vBtyUmYZlL0SiY6PsymcgOS%2BOux2MKjSiL8GOqUB58mciZSrg3EwN1zrVjn2jaXAALRfaWgf8IyX%2BeZ1MuOCgo%2FgYTa85ksMoTYcgM%2BdUAy1%2FyGH0E3joRrSWBZIgdWTb8Y%2FrIchb2fWwo4iRTwd6q0PiSTnisPPaVnFmU4RLYX7Zt1pXTOatWlS1K19kaT5azbR0Lrn5F5yNWP4tiy5O9XHmJWzMbrTiR%2F9AwYkhxLavzo3R0K1IQMI8%2Bz2uHLoHFTj&X-Amz-Signature=a4fafadbae4fc5115cb24224cc4e7d4bdd40d570235dc23b975b6b4fc399f145&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPAVIIH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVpXgfEqIWaBaC3tnunpBRS5zayNVQeUbYZ6eIzmsGkAiEA26Q0qL2tLmr6BpCfWr0hMBOJveHsqKWcPBhWOXOWjiMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIybVcQjSZ7VSHEKvCrcA%2FCrDWlz7LAXdZELP%2FMj1BbuT42Zj2k6IY36QUiGCPaxpb75cnEuWUZ33u9xzJkljpPGQE56uiykJoR5%2FqhUZdtQfz3aEHILd8lhS2zBxUONtD4t4uiJUO1t2I8g51xe6XSlmuczjJLp5W26OyDwlZCceeaR8cnV4G92Wwbjbtqdm%2FEuj7goew9h9QCyK1I8biHKJHFYt8CGivjMaOJd12VqPmj9unbzfVKDFb4JOuqCKwZdN4IyJsjZX%2Fe%2BLXhMNsP0uIrF6TsThNs1n788dLV4DLPhyFOLKjR2jvn6CsjYZ9ya2zM%2BIpM1XhW5NM5TmGKC96maeJwqtM%2BSBasZgA2KkeaK5FsOJ33q1%2BBh%2FCrx%2BVZ7kP6WS30GG5PUTu6sapWLAHSz1GWoYx%2FO5XAdamttUDhb%2BWxAU5ldqxCQ%2FuuZfWXHI8csb%2F5nwbEH5YBLqTXCCd7RE6mcsGFMkMe2GkfQrWwxHvccNyqwLOqTdOZ7kvYWs76LVlvD3hF%2FSubLQprzoVtRZ6JoGoJjDmPvN72rINtwaMetu3DckppgJKjwiKtwuXRkHozMx%2FwZ2%2BRNfgMhMYmN%2FXiu2kS60KmDXXikCIcKzIL0vBtyUmYZlL0SiY6PsymcgOS%2BOux2MKjSiL8GOqUB58mciZSrg3EwN1zrVjn2jaXAALRfaWgf8IyX%2BeZ1MuOCgo%2FgYTa85ksMoTYcgM%2BdUAy1%2FyGH0E3joRrSWBZIgdWTb8Y%2FrIchb2fWwo4iRTwd6q0PiSTnisPPaVnFmU4RLYX7Zt1pXTOatWlS1K19kaT5azbR0Lrn5F5yNWP4tiy5O9XHmJWzMbrTiR%2F9AwYkhxLavzo3R0K1IQMI8%2Bz2uHLoHFTj&X-Amz-Signature=5c15329eb77ba07d186667a5edee065a92e4f489d6a14664ac49c28e771219ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
