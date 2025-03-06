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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XN4KLM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCP0NiFJoyi9e4BIRXNg2Mf77OzrSOqfm9Dc7xq3mcyQIgPQknzfRMnZ%2Fgphg%2BvPjMHaXiLySKuInFWUhBTCR9h28q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIDus8oIye0eY4USlyrcA1RI4Mzq0JMiKkvjKKUOyP70U%2BlPmu%2BPnblids1CzUukq5S%2B9cTD%2FWeamu6T2OO%2F9CTSwJ860YUPDMHQ55psufOsTH8r7OSLU5B2LXWSdjBcOP04Xo0oC8CndartLS%2FusaUaZFhareabdh8I4YYJo4t4CwH2SWc%2BF3Fa072GhbqNvYpPI9arlyjgBaR%2Baj4h8b1lnxfjt0V%2FjMCwda3Kk19vfZiNVzBpINHUr0%2BzCa43Dr5iyPxyNEXgL0BspBv8vY36Cy2I3CFWnuBz7sD0ZVYYGd75ZIzmbUC%2BuHT92TmknsBj4LObK2Pi8xFaqexWlM5xSfRxvfWnlBh2UGbDWlQapBDlCyCVp9y1kizE3FTyotXgdgfVJ0cduuvAdxMc4FwK4qPWxeG3UVXcRkXqmzCmh6qXF5QMtJ%2FYpCmiIPd%2BgU24DM0ponrHBvsh7Jb0pz1%2FaA7QAfu8TaU7MzjbfBWRRkGW1S0SsIA7xWsO0x9WPAmgXe0t0ljfTIB83B3WdtTP0xOFffKn06c3DhNq%2BMAZysxr2DyalCx7J9YlLrQfUw69AL0ncTGYXd2uXvJ7Wp0b3szA5W0dxG7d67aiDLwgbEbzEF9k4Ko%2FyeJV1NiY6tJ2F71bO3bHleChMJPzpb4GOqUBWW9osRQdSCIM45jSd7jvbDgoK%2BYnomXSre%2BPqZUEJjktYk4rM15JrB5GStPo%2BkvGGSUF6Rq9%2BE0evreL7PQqQQnaH4Lxjxh%2BvEYZwfZPg0Muy%2FHRYpkB0SmEa4o1qhv%2B15iv3FSdzaYsFnc%2FKu%2FLpvUGZ7g9C2aiVuvS6%2BEkD5Qj3v76Exb1PXhS2whMU3DBxz1WoX3selXDP2ZK1j%2BRGfZuhqiR&X-Amz-Signature=88b6623ec48f52547cfd6da8302fdc110607ce7f841c455214b4fbf93c85bdaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XN4KLM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCP0NiFJoyi9e4BIRXNg2Mf77OzrSOqfm9Dc7xq3mcyQIgPQknzfRMnZ%2Fgphg%2BvPjMHaXiLySKuInFWUhBTCR9h28q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIDus8oIye0eY4USlyrcA1RI4Mzq0JMiKkvjKKUOyP70U%2BlPmu%2BPnblids1CzUukq5S%2B9cTD%2FWeamu6T2OO%2F9CTSwJ860YUPDMHQ55psufOsTH8r7OSLU5B2LXWSdjBcOP04Xo0oC8CndartLS%2FusaUaZFhareabdh8I4YYJo4t4CwH2SWc%2BF3Fa072GhbqNvYpPI9arlyjgBaR%2Baj4h8b1lnxfjt0V%2FjMCwda3Kk19vfZiNVzBpINHUr0%2BzCa43Dr5iyPxyNEXgL0BspBv8vY36Cy2I3CFWnuBz7sD0ZVYYGd75ZIzmbUC%2BuHT92TmknsBj4LObK2Pi8xFaqexWlM5xSfRxvfWnlBh2UGbDWlQapBDlCyCVp9y1kizE3FTyotXgdgfVJ0cduuvAdxMc4FwK4qPWxeG3UVXcRkXqmzCmh6qXF5QMtJ%2FYpCmiIPd%2BgU24DM0ponrHBvsh7Jb0pz1%2FaA7QAfu8TaU7MzjbfBWRRkGW1S0SsIA7xWsO0x9WPAmgXe0t0ljfTIB83B3WdtTP0xOFffKn06c3DhNq%2BMAZysxr2DyalCx7J9YlLrQfUw69AL0ncTGYXd2uXvJ7Wp0b3szA5W0dxG7d67aiDLwgbEbzEF9k4Ko%2FyeJV1NiY6tJ2F71bO3bHleChMJPzpb4GOqUBWW9osRQdSCIM45jSd7jvbDgoK%2BYnomXSre%2BPqZUEJjktYk4rM15JrB5GStPo%2BkvGGSUF6Rq9%2BE0evreL7PQqQQnaH4Lxjxh%2BvEYZwfZPg0Muy%2FHRYpkB0SmEa4o1qhv%2B15iv3FSdzaYsFnc%2FKu%2FLpvUGZ7g9C2aiVuvS6%2BEkD5Qj3v76Exb1PXhS2whMU3DBxz1WoX3selXDP2ZK1j%2BRGfZuhqiR&X-Amz-Signature=c50068d1909fd8f13ebf71c11423ae6eb1b0c7057fe8867e9f09a1f495d4d712&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XN4KLM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCP0NiFJoyi9e4BIRXNg2Mf77OzrSOqfm9Dc7xq3mcyQIgPQknzfRMnZ%2Fgphg%2BvPjMHaXiLySKuInFWUhBTCR9h28q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIDus8oIye0eY4USlyrcA1RI4Mzq0JMiKkvjKKUOyP70U%2BlPmu%2BPnblids1CzUukq5S%2B9cTD%2FWeamu6T2OO%2F9CTSwJ860YUPDMHQ55psufOsTH8r7OSLU5B2LXWSdjBcOP04Xo0oC8CndartLS%2FusaUaZFhareabdh8I4YYJo4t4CwH2SWc%2BF3Fa072GhbqNvYpPI9arlyjgBaR%2Baj4h8b1lnxfjt0V%2FjMCwda3Kk19vfZiNVzBpINHUr0%2BzCa43Dr5iyPxyNEXgL0BspBv8vY36Cy2I3CFWnuBz7sD0ZVYYGd75ZIzmbUC%2BuHT92TmknsBj4LObK2Pi8xFaqexWlM5xSfRxvfWnlBh2UGbDWlQapBDlCyCVp9y1kizE3FTyotXgdgfVJ0cduuvAdxMc4FwK4qPWxeG3UVXcRkXqmzCmh6qXF5QMtJ%2FYpCmiIPd%2BgU24DM0ponrHBvsh7Jb0pz1%2FaA7QAfu8TaU7MzjbfBWRRkGW1S0SsIA7xWsO0x9WPAmgXe0t0ljfTIB83B3WdtTP0xOFffKn06c3DhNq%2BMAZysxr2DyalCx7J9YlLrQfUw69AL0ncTGYXd2uXvJ7Wp0b3szA5W0dxG7d67aiDLwgbEbzEF9k4Ko%2FyeJV1NiY6tJ2F71bO3bHleChMJPzpb4GOqUBWW9osRQdSCIM45jSd7jvbDgoK%2BYnomXSre%2BPqZUEJjktYk4rM15JrB5GStPo%2BkvGGSUF6Rq9%2BE0evreL7PQqQQnaH4Lxjxh%2BvEYZwfZPg0Muy%2FHRYpkB0SmEa4o1qhv%2B15iv3FSdzaYsFnc%2FKu%2FLpvUGZ7g9C2aiVuvS6%2BEkD5Qj3v76Exb1PXhS2whMU3DBxz1WoX3selXDP2ZK1j%2BRGfZuhqiR&X-Amz-Signature=8c45f27aa7d278afb1b40ebbb27a1eb220fe43c4112635dff81e06d709e2f3a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XN4KLM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCP0NiFJoyi9e4BIRXNg2Mf77OzrSOqfm9Dc7xq3mcyQIgPQknzfRMnZ%2Fgphg%2BvPjMHaXiLySKuInFWUhBTCR9h28q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIDus8oIye0eY4USlyrcA1RI4Mzq0JMiKkvjKKUOyP70U%2BlPmu%2BPnblids1CzUukq5S%2B9cTD%2FWeamu6T2OO%2F9CTSwJ860YUPDMHQ55psufOsTH8r7OSLU5B2LXWSdjBcOP04Xo0oC8CndartLS%2FusaUaZFhareabdh8I4YYJo4t4CwH2SWc%2BF3Fa072GhbqNvYpPI9arlyjgBaR%2Baj4h8b1lnxfjt0V%2FjMCwda3Kk19vfZiNVzBpINHUr0%2BzCa43Dr5iyPxyNEXgL0BspBv8vY36Cy2I3CFWnuBz7sD0ZVYYGd75ZIzmbUC%2BuHT92TmknsBj4LObK2Pi8xFaqexWlM5xSfRxvfWnlBh2UGbDWlQapBDlCyCVp9y1kizE3FTyotXgdgfVJ0cduuvAdxMc4FwK4qPWxeG3UVXcRkXqmzCmh6qXF5QMtJ%2FYpCmiIPd%2BgU24DM0ponrHBvsh7Jb0pz1%2FaA7QAfu8TaU7MzjbfBWRRkGW1S0SsIA7xWsO0x9WPAmgXe0t0ljfTIB83B3WdtTP0xOFffKn06c3DhNq%2BMAZysxr2DyalCx7J9YlLrQfUw69AL0ncTGYXd2uXvJ7Wp0b3szA5W0dxG7d67aiDLwgbEbzEF9k4Ko%2FyeJV1NiY6tJ2F71bO3bHleChMJPzpb4GOqUBWW9osRQdSCIM45jSd7jvbDgoK%2BYnomXSre%2BPqZUEJjktYk4rM15JrB5GStPo%2BkvGGSUF6Rq9%2BE0evreL7PQqQQnaH4Lxjxh%2BvEYZwfZPg0Muy%2FHRYpkB0SmEa4o1qhv%2B15iv3FSdzaYsFnc%2FKu%2FLpvUGZ7g9C2aiVuvS6%2BEkD5Qj3v76Exb1PXhS2whMU3DBxz1WoX3selXDP2ZK1j%2BRGfZuhqiR&X-Amz-Signature=149b4490678b74c76fa667f37db90afb0b8682f266c83e72a8eac338ac032962&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XN4KLM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCP0NiFJoyi9e4BIRXNg2Mf77OzrSOqfm9Dc7xq3mcyQIgPQknzfRMnZ%2Fgphg%2BvPjMHaXiLySKuInFWUhBTCR9h28q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIDus8oIye0eY4USlyrcA1RI4Mzq0JMiKkvjKKUOyP70U%2BlPmu%2BPnblids1CzUukq5S%2B9cTD%2FWeamu6T2OO%2F9CTSwJ860YUPDMHQ55psufOsTH8r7OSLU5B2LXWSdjBcOP04Xo0oC8CndartLS%2FusaUaZFhareabdh8I4YYJo4t4CwH2SWc%2BF3Fa072GhbqNvYpPI9arlyjgBaR%2Baj4h8b1lnxfjt0V%2FjMCwda3Kk19vfZiNVzBpINHUr0%2BzCa43Dr5iyPxyNEXgL0BspBv8vY36Cy2I3CFWnuBz7sD0ZVYYGd75ZIzmbUC%2BuHT92TmknsBj4LObK2Pi8xFaqexWlM5xSfRxvfWnlBh2UGbDWlQapBDlCyCVp9y1kizE3FTyotXgdgfVJ0cduuvAdxMc4FwK4qPWxeG3UVXcRkXqmzCmh6qXF5QMtJ%2FYpCmiIPd%2BgU24DM0ponrHBvsh7Jb0pz1%2FaA7QAfu8TaU7MzjbfBWRRkGW1S0SsIA7xWsO0x9WPAmgXe0t0ljfTIB83B3WdtTP0xOFffKn06c3DhNq%2BMAZysxr2DyalCx7J9YlLrQfUw69AL0ncTGYXd2uXvJ7Wp0b3szA5W0dxG7d67aiDLwgbEbzEF9k4Ko%2FyeJV1NiY6tJ2F71bO3bHleChMJPzpb4GOqUBWW9osRQdSCIM45jSd7jvbDgoK%2BYnomXSre%2BPqZUEJjktYk4rM15JrB5GStPo%2BkvGGSUF6Rq9%2BE0evreL7PQqQQnaH4Lxjxh%2BvEYZwfZPg0Muy%2FHRYpkB0SmEa4o1qhv%2B15iv3FSdzaYsFnc%2FKu%2FLpvUGZ7g9C2aiVuvS6%2BEkD5Qj3v76Exb1PXhS2whMU3DBxz1WoX3selXDP2ZK1j%2BRGfZuhqiR&X-Amz-Signature=c5d123cd41df248562da853dc9d38749e05d2ef249d23e15f04c74052063b595&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XN4KLM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCP0NiFJoyi9e4BIRXNg2Mf77OzrSOqfm9Dc7xq3mcyQIgPQknzfRMnZ%2Fgphg%2BvPjMHaXiLySKuInFWUhBTCR9h28q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIDus8oIye0eY4USlyrcA1RI4Mzq0JMiKkvjKKUOyP70U%2BlPmu%2BPnblids1CzUukq5S%2B9cTD%2FWeamu6T2OO%2F9CTSwJ860YUPDMHQ55psufOsTH8r7OSLU5B2LXWSdjBcOP04Xo0oC8CndartLS%2FusaUaZFhareabdh8I4YYJo4t4CwH2SWc%2BF3Fa072GhbqNvYpPI9arlyjgBaR%2Baj4h8b1lnxfjt0V%2FjMCwda3Kk19vfZiNVzBpINHUr0%2BzCa43Dr5iyPxyNEXgL0BspBv8vY36Cy2I3CFWnuBz7sD0ZVYYGd75ZIzmbUC%2BuHT92TmknsBj4LObK2Pi8xFaqexWlM5xSfRxvfWnlBh2UGbDWlQapBDlCyCVp9y1kizE3FTyotXgdgfVJ0cduuvAdxMc4FwK4qPWxeG3UVXcRkXqmzCmh6qXF5QMtJ%2FYpCmiIPd%2BgU24DM0ponrHBvsh7Jb0pz1%2FaA7QAfu8TaU7MzjbfBWRRkGW1S0SsIA7xWsO0x9WPAmgXe0t0ljfTIB83B3WdtTP0xOFffKn06c3DhNq%2BMAZysxr2DyalCx7J9YlLrQfUw69AL0ncTGYXd2uXvJ7Wp0b3szA5W0dxG7d67aiDLwgbEbzEF9k4Ko%2FyeJV1NiY6tJ2F71bO3bHleChMJPzpb4GOqUBWW9osRQdSCIM45jSd7jvbDgoK%2BYnomXSre%2BPqZUEJjktYk4rM15JrB5GStPo%2BkvGGSUF6Rq9%2BE0evreL7PQqQQnaH4Lxjxh%2BvEYZwfZPg0Muy%2FHRYpkB0SmEa4o1qhv%2B15iv3FSdzaYsFnc%2FKu%2FLpvUGZ7g9C2aiVuvS6%2BEkD5Qj3v76Exb1PXhS2whMU3DBxz1WoX3selXDP2ZK1j%2BRGfZuhqiR&X-Amz-Signature=6037035d29796b55cf7e99ab917c268b583b27df1bfa7366baa33c3867c94f50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XN4KLM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCP0NiFJoyi9e4BIRXNg2Mf77OzrSOqfm9Dc7xq3mcyQIgPQknzfRMnZ%2Fgphg%2BvPjMHaXiLySKuInFWUhBTCR9h28q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIDus8oIye0eY4USlyrcA1RI4Mzq0JMiKkvjKKUOyP70U%2BlPmu%2BPnblids1CzUukq5S%2B9cTD%2FWeamu6T2OO%2F9CTSwJ860YUPDMHQ55psufOsTH8r7OSLU5B2LXWSdjBcOP04Xo0oC8CndartLS%2FusaUaZFhareabdh8I4YYJo4t4CwH2SWc%2BF3Fa072GhbqNvYpPI9arlyjgBaR%2Baj4h8b1lnxfjt0V%2FjMCwda3Kk19vfZiNVzBpINHUr0%2BzCa43Dr5iyPxyNEXgL0BspBv8vY36Cy2I3CFWnuBz7sD0ZVYYGd75ZIzmbUC%2BuHT92TmknsBj4LObK2Pi8xFaqexWlM5xSfRxvfWnlBh2UGbDWlQapBDlCyCVp9y1kizE3FTyotXgdgfVJ0cduuvAdxMc4FwK4qPWxeG3UVXcRkXqmzCmh6qXF5QMtJ%2FYpCmiIPd%2BgU24DM0ponrHBvsh7Jb0pz1%2FaA7QAfu8TaU7MzjbfBWRRkGW1S0SsIA7xWsO0x9WPAmgXe0t0ljfTIB83B3WdtTP0xOFffKn06c3DhNq%2BMAZysxr2DyalCx7J9YlLrQfUw69AL0ncTGYXd2uXvJ7Wp0b3szA5W0dxG7d67aiDLwgbEbzEF9k4Ko%2FyeJV1NiY6tJ2F71bO3bHleChMJPzpb4GOqUBWW9osRQdSCIM45jSd7jvbDgoK%2BYnomXSre%2BPqZUEJjktYk4rM15JrB5GStPo%2BkvGGSUF6Rq9%2BE0evreL7PQqQQnaH4Lxjxh%2BvEYZwfZPg0Muy%2FHRYpkB0SmEa4o1qhv%2B15iv3FSdzaYsFnc%2FKu%2FLpvUGZ7g9C2aiVuvS6%2BEkD5Qj3v76Exb1PXhS2whMU3DBxz1WoX3selXDP2ZK1j%2BRGfZuhqiR&X-Amz-Signature=fc133302cb6950ee749c840cda22d4b7d7b4fc2bb08afb7a84da70492d338d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XN4KLM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCP0NiFJoyi9e4BIRXNg2Mf77OzrSOqfm9Dc7xq3mcyQIgPQknzfRMnZ%2Fgphg%2BvPjMHaXiLySKuInFWUhBTCR9h28q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIDus8oIye0eY4USlyrcA1RI4Mzq0JMiKkvjKKUOyP70U%2BlPmu%2BPnblids1CzUukq5S%2B9cTD%2FWeamu6T2OO%2F9CTSwJ860YUPDMHQ55psufOsTH8r7OSLU5B2LXWSdjBcOP04Xo0oC8CndartLS%2FusaUaZFhareabdh8I4YYJo4t4CwH2SWc%2BF3Fa072GhbqNvYpPI9arlyjgBaR%2Baj4h8b1lnxfjt0V%2FjMCwda3Kk19vfZiNVzBpINHUr0%2BzCa43Dr5iyPxyNEXgL0BspBv8vY36Cy2I3CFWnuBz7sD0ZVYYGd75ZIzmbUC%2BuHT92TmknsBj4LObK2Pi8xFaqexWlM5xSfRxvfWnlBh2UGbDWlQapBDlCyCVp9y1kizE3FTyotXgdgfVJ0cduuvAdxMc4FwK4qPWxeG3UVXcRkXqmzCmh6qXF5QMtJ%2FYpCmiIPd%2BgU24DM0ponrHBvsh7Jb0pz1%2FaA7QAfu8TaU7MzjbfBWRRkGW1S0SsIA7xWsO0x9WPAmgXe0t0ljfTIB83B3WdtTP0xOFffKn06c3DhNq%2BMAZysxr2DyalCx7J9YlLrQfUw69AL0ncTGYXd2uXvJ7Wp0b3szA5W0dxG7d67aiDLwgbEbzEF9k4Ko%2FyeJV1NiY6tJ2F71bO3bHleChMJPzpb4GOqUBWW9osRQdSCIM45jSd7jvbDgoK%2BYnomXSre%2BPqZUEJjktYk4rM15JrB5GStPo%2BkvGGSUF6Rq9%2BE0evreL7PQqQQnaH4Lxjxh%2BvEYZwfZPg0Muy%2FHRYpkB0SmEa4o1qhv%2B15iv3FSdzaYsFnc%2FKu%2FLpvUGZ7g9C2aiVuvS6%2BEkD5Qj3v76Exb1PXhS2whMU3DBxz1WoX3selXDP2ZK1j%2BRGfZuhqiR&X-Amz-Signature=5c5f776fc619d29644f0165d0decbfe6cac77449c6d8a06aa8e3eda9a0e9fad4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
