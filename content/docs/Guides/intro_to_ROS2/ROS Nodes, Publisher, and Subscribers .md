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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVE3BYT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHxAGTBwj2wGA2H2okv1EqMdjSeYhkTAyFd220QPltE%2BAiEAm4QrjAtNZqIZ38oLQsNpXwxgSpH%2BvrS4QVQW45dOTIIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL4bxAXu%2BdtDk41BCrcAxnv0pHMZFC1aH0dahvnu5A75SU%2FwP9gXQ2CcSwbSKAaRkT02F5GBNfJ%2Fp8XvyPKeKa6A9%2B2KSvSB1xNBikQyiD7xI8s4vmyUZ%2BEY8eaEJ7NJQbDzS67E5yLYi2djdqVHTHgiXzqTzbeqYgVFjAwWCONYEqFR6hi6%2FmuOMeoN8hRXd4bfumyWOzAKmmWZQ9KU2wGcrnf5xZd96gpqaeZsAfip2e0%2Bat5u80l3TbSqGzJ20YO1SjTulhxLfAAg8WS2ch57w%2Bw1ABrDmJsdmGtkmMi4zzvmceUg9hFGx19ftwPNPhJ0MDFMvJhsDxqr6iQIY0F9vsG2fnT1qeRNzoL5B4zxb6gHqWJqqeZsJZ%2FtBka7RUzONXMIBVLeWmrNZV5nGBMVkAOwvvfwwtPd0vPFWBhGRIN5T7KTwDrunp8fRecxfVli2rE4xdpswepvzcXz6QSvyZCowzCGuYigO%2BkhyW07mp7tZf26BHf%2BQuouHe7P%2FGuikqxxdLSNlS8KNLYgDjW%2FwRH3Ni2J7cxSs6kv%2FtJa7GUhb7Tu1vKa9DxCwJTUzdYvftMlgvsmzlnXu3jq00zCVhoU5o%2FAJXNXWn%2FQpuo9UPhCjoDzGFyoxDH7xtXTgAFJQvCcYCb0NuBMNWS2cQGOqUB5voJmkCslGveFVjFqIHV%2BQ01thMFlpuG4iNHyvDDaz1DWKsVahFCF1y4N6gj%2FYst3%2FX7TcUsUpGRAc6WDDkL50crvz7yhKTQp7cbvWEm4KVjM8A8sevdbUpDjFil4vdKhbcmdq32uH7sTMwAJvtusJX47cwxGLOYXW6FAcmYIdT%2BvZzh0KDNQl7hPLLcft3MfBuqE3gcAClvQGaJvRq0oVBEKFwq&X-Amz-Signature=7af7eba36a72fb432a46bd871b0a701a832ff523478a06ec29a27d632a9dad9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVE3BYT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHxAGTBwj2wGA2H2okv1EqMdjSeYhkTAyFd220QPltE%2BAiEAm4QrjAtNZqIZ38oLQsNpXwxgSpH%2BvrS4QVQW45dOTIIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL4bxAXu%2BdtDk41BCrcAxnv0pHMZFC1aH0dahvnu5A75SU%2FwP9gXQ2CcSwbSKAaRkT02F5GBNfJ%2Fp8XvyPKeKa6A9%2B2KSvSB1xNBikQyiD7xI8s4vmyUZ%2BEY8eaEJ7NJQbDzS67E5yLYi2djdqVHTHgiXzqTzbeqYgVFjAwWCONYEqFR6hi6%2FmuOMeoN8hRXd4bfumyWOzAKmmWZQ9KU2wGcrnf5xZd96gpqaeZsAfip2e0%2Bat5u80l3TbSqGzJ20YO1SjTulhxLfAAg8WS2ch57w%2Bw1ABrDmJsdmGtkmMi4zzvmceUg9hFGx19ftwPNPhJ0MDFMvJhsDxqr6iQIY0F9vsG2fnT1qeRNzoL5B4zxb6gHqWJqqeZsJZ%2FtBka7RUzONXMIBVLeWmrNZV5nGBMVkAOwvvfwwtPd0vPFWBhGRIN5T7KTwDrunp8fRecxfVli2rE4xdpswepvzcXz6QSvyZCowzCGuYigO%2BkhyW07mp7tZf26BHf%2BQuouHe7P%2FGuikqxxdLSNlS8KNLYgDjW%2FwRH3Ni2J7cxSs6kv%2FtJa7GUhb7Tu1vKa9DxCwJTUzdYvftMlgvsmzlnXu3jq00zCVhoU5o%2FAJXNXWn%2FQpuo9UPhCjoDzGFyoxDH7xtXTgAFJQvCcYCb0NuBMNWS2cQGOqUB5voJmkCslGveFVjFqIHV%2BQ01thMFlpuG4iNHyvDDaz1DWKsVahFCF1y4N6gj%2FYst3%2FX7TcUsUpGRAc6WDDkL50crvz7yhKTQp7cbvWEm4KVjM8A8sevdbUpDjFil4vdKhbcmdq32uH7sTMwAJvtusJX47cwxGLOYXW6FAcmYIdT%2BvZzh0KDNQl7hPLLcft3MfBuqE3gcAClvQGaJvRq0oVBEKFwq&X-Amz-Signature=412dad49c3c7f5bda87aa83bb1725c470bb22121b3aea8f35f0d39f085baf745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVE3BYT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHxAGTBwj2wGA2H2okv1EqMdjSeYhkTAyFd220QPltE%2BAiEAm4QrjAtNZqIZ38oLQsNpXwxgSpH%2BvrS4QVQW45dOTIIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL4bxAXu%2BdtDk41BCrcAxnv0pHMZFC1aH0dahvnu5A75SU%2FwP9gXQ2CcSwbSKAaRkT02F5GBNfJ%2Fp8XvyPKeKa6A9%2B2KSvSB1xNBikQyiD7xI8s4vmyUZ%2BEY8eaEJ7NJQbDzS67E5yLYi2djdqVHTHgiXzqTzbeqYgVFjAwWCONYEqFR6hi6%2FmuOMeoN8hRXd4bfumyWOzAKmmWZQ9KU2wGcrnf5xZd96gpqaeZsAfip2e0%2Bat5u80l3TbSqGzJ20YO1SjTulhxLfAAg8WS2ch57w%2Bw1ABrDmJsdmGtkmMi4zzvmceUg9hFGx19ftwPNPhJ0MDFMvJhsDxqr6iQIY0F9vsG2fnT1qeRNzoL5B4zxb6gHqWJqqeZsJZ%2FtBka7RUzONXMIBVLeWmrNZV5nGBMVkAOwvvfwwtPd0vPFWBhGRIN5T7KTwDrunp8fRecxfVli2rE4xdpswepvzcXz6QSvyZCowzCGuYigO%2BkhyW07mp7tZf26BHf%2BQuouHe7P%2FGuikqxxdLSNlS8KNLYgDjW%2FwRH3Ni2J7cxSs6kv%2FtJa7GUhb7Tu1vKa9DxCwJTUzdYvftMlgvsmzlnXu3jq00zCVhoU5o%2FAJXNXWn%2FQpuo9UPhCjoDzGFyoxDH7xtXTgAFJQvCcYCb0NuBMNWS2cQGOqUB5voJmkCslGveFVjFqIHV%2BQ01thMFlpuG4iNHyvDDaz1DWKsVahFCF1y4N6gj%2FYst3%2FX7TcUsUpGRAc6WDDkL50crvz7yhKTQp7cbvWEm4KVjM8A8sevdbUpDjFil4vdKhbcmdq32uH7sTMwAJvtusJX47cwxGLOYXW6FAcmYIdT%2BvZzh0KDNQl7hPLLcft3MfBuqE3gcAClvQGaJvRq0oVBEKFwq&X-Amz-Signature=011b23776fafc2a9fdfd124b201808916ff822521b36a72c8c0b1e9302edff8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVE3BYT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHxAGTBwj2wGA2H2okv1EqMdjSeYhkTAyFd220QPltE%2BAiEAm4QrjAtNZqIZ38oLQsNpXwxgSpH%2BvrS4QVQW45dOTIIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL4bxAXu%2BdtDk41BCrcAxnv0pHMZFC1aH0dahvnu5A75SU%2FwP9gXQ2CcSwbSKAaRkT02F5GBNfJ%2Fp8XvyPKeKa6A9%2B2KSvSB1xNBikQyiD7xI8s4vmyUZ%2BEY8eaEJ7NJQbDzS67E5yLYi2djdqVHTHgiXzqTzbeqYgVFjAwWCONYEqFR6hi6%2FmuOMeoN8hRXd4bfumyWOzAKmmWZQ9KU2wGcrnf5xZd96gpqaeZsAfip2e0%2Bat5u80l3TbSqGzJ20YO1SjTulhxLfAAg8WS2ch57w%2Bw1ABrDmJsdmGtkmMi4zzvmceUg9hFGx19ftwPNPhJ0MDFMvJhsDxqr6iQIY0F9vsG2fnT1qeRNzoL5B4zxb6gHqWJqqeZsJZ%2FtBka7RUzONXMIBVLeWmrNZV5nGBMVkAOwvvfwwtPd0vPFWBhGRIN5T7KTwDrunp8fRecxfVli2rE4xdpswepvzcXz6QSvyZCowzCGuYigO%2BkhyW07mp7tZf26BHf%2BQuouHe7P%2FGuikqxxdLSNlS8KNLYgDjW%2FwRH3Ni2J7cxSs6kv%2FtJa7GUhb7Tu1vKa9DxCwJTUzdYvftMlgvsmzlnXu3jq00zCVhoU5o%2FAJXNXWn%2FQpuo9UPhCjoDzGFyoxDH7xtXTgAFJQvCcYCb0NuBMNWS2cQGOqUB5voJmkCslGveFVjFqIHV%2BQ01thMFlpuG4iNHyvDDaz1DWKsVahFCF1y4N6gj%2FYst3%2FX7TcUsUpGRAc6WDDkL50crvz7yhKTQp7cbvWEm4KVjM8A8sevdbUpDjFil4vdKhbcmdq32uH7sTMwAJvtusJX47cwxGLOYXW6FAcmYIdT%2BvZzh0KDNQl7hPLLcft3MfBuqE3gcAClvQGaJvRq0oVBEKFwq&X-Amz-Signature=aa00869e0af670212c0df481c023044b599663fb57f35c10258d3921b6272878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVE3BYT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHxAGTBwj2wGA2H2okv1EqMdjSeYhkTAyFd220QPltE%2BAiEAm4QrjAtNZqIZ38oLQsNpXwxgSpH%2BvrS4QVQW45dOTIIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL4bxAXu%2BdtDk41BCrcAxnv0pHMZFC1aH0dahvnu5A75SU%2FwP9gXQ2CcSwbSKAaRkT02F5GBNfJ%2Fp8XvyPKeKa6A9%2B2KSvSB1xNBikQyiD7xI8s4vmyUZ%2BEY8eaEJ7NJQbDzS67E5yLYi2djdqVHTHgiXzqTzbeqYgVFjAwWCONYEqFR6hi6%2FmuOMeoN8hRXd4bfumyWOzAKmmWZQ9KU2wGcrnf5xZd96gpqaeZsAfip2e0%2Bat5u80l3TbSqGzJ20YO1SjTulhxLfAAg8WS2ch57w%2Bw1ABrDmJsdmGtkmMi4zzvmceUg9hFGx19ftwPNPhJ0MDFMvJhsDxqr6iQIY0F9vsG2fnT1qeRNzoL5B4zxb6gHqWJqqeZsJZ%2FtBka7RUzONXMIBVLeWmrNZV5nGBMVkAOwvvfwwtPd0vPFWBhGRIN5T7KTwDrunp8fRecxfVli2rE4xdpswepvzcXz6QSvyZCowzCGuYigO%2BkhyW07mp7tZf26BHf%2BQuouHe7P%2FGuikqxxdLSNlS8KNLYgDjW%2FwRH3Ni2J7cxSs6kv%2FtJa7GUhb7Tu1vKa9DxCwJTUzdYvftMlgvsmzlnXu3jq00zCVhoU5o%2FAJXNXWn%2FQpuo9UPhCjoDzGFyoxDH7xtXTgAFJQvCcYCb0NuBMNWS2cQGOqUB5voJmkCslGveFVjFqIHV%2BQ01thMFlpuG4iNHyvDDaz1DWKsVahFCF1y4N6gj%2FYst3%2FX7TcUsUpGRAc6WDDkL50crvz7yhKTQp7cbvWEm4KVjM8A8sevdbUpDjFil4vdKhbcmdq32uH7sTMwAJvtusJX47cwxGLOYXW6FAcmYIdT%2BvZzh0KDNQl7hPLLcft3MfBuqE3gcAClvQGaJvRq0oVBEKFwq&X-Amz-Signature=2b0d6a4d0eb7953d6d67985201cec5bd86b9a661abc86ff9df61dcca4b6df330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVE3BYT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHxAGTBwj2wGA2H2okv1EqMdjSeYhkTAyFd220QPltE%2BAiEAm4QrjAtNZqIZ38oLQsNpXwxgSpH%2BvrS4QVQW45dOTIIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL4bxAXu%2BdtDk41BCrcAxnv0pHMZFC1aH0dahvnu5A75SU%2FwP9gXQ2CcSwbSKAaRkT02F5GBNfJ%2Fp8XvyPKeKa6A9%2B2KSvSB1xNBikQyiD7xI8s4vmyUZ%2BEY8eaEJ7NJQbDzS67E5yLYi2djdqVHTHgiXzqTzbeqYgVFjAwWCONYEqFR6hi6%2FmuOMeoN8hRXd4bfumyWOzAKmmWZQ9KU2wGcrnf5xZd96gpqaeZsAfip2e0%2Bat5u80l3TbSqGzJ20YO1SjTulhxLfAAg8WS2ch57w%2Bw1ABrDmJsdmGtkmMi4zzvmceUg9hFGx19ftwPNPhJ0MDFMvJhsDxqr6iQIY0F9vsG2fnT1qeRNzoL5B4zxb6gHqWJqqeZsJZ%2FtBka7RUzONXMIBVLeWmrNZV5nGBMVkAOwvvfwwtPd0vPFWBhGRIN5T7KTwDrunp8fRecxfVli2rE4xdpswepvzcXz6QSvyZCowzCGuYigO%2BkhyW07mp7tZf26BHf%2BQuouHe7P%2FGuikqxxdLSNlS8KNLYgDjW%2FwRH3Ni2J7cxSs6kv%2FtJa7GUhb7Tu1vKa9DxCwJTUzdYvftMlgvsmzlnXu3jq00zCVhoU5o%2FAJXNXWn%2FQpuo9UPhCjoDzGFyoxDH7xtXTgAFJQvCcYCb0NuBMNWS2cQGOqUB5voJmkCslGveFVjFqIHV%2BQ01thMFlpuG4iNHyvDDaz1DWKsVahFCF1y4N6gj%2FYst3%2FX7TcUsUpGRAc6WDDkL50crvz7yhKTQp7cbvWEm4KVjM8A8sevdbUpDjFil4vdKhbcmdq32uH7sTMwAJvtusJX47cwxGLOYXW6FAcmYIdT%2BvZzh0KDNQl7hPLLcft3MfBuqE3gcAClvQGaJvRq0oVBEKFwq&X-Amz-Signature=fb3f77633bafcf477305c0eb2d0fa814db0ad38854e1d4f6b6bee764136183d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVE3BYT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHxAGTBwj2wGA2H2okv1EqMdjSeYhkTAyFd220QPltE%2BAiEAm4QrjAtNZqIZ38oLQsNpXwxgSpH%2BvrS4QVQW45dOTIIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL4bxAXu%2BdtDk41BCrcAxnv0pHMZFC1aH0dahvnu5A75SU%2FwP9gXQ2CcSwbSKAaRkT02F5GBNfJ%2Fp8XvyPKeKa6A9%2B2KSvSB1xNBikQyiD7xI8s4vmyUZ%2BEY8eaEJ7NJQbDzS67E5yLYi2djdqVHTHgiXzqTzbeqYgVFjAwWCONYEqFR6hi6%2FmuOMeoN8hRXd4bfumyWOzAKmmWZQ9KU2wGcrnf5xZd96gpqaeZsAfip2e0%2Bat5u80l3TbSqGzJ20YO1SjTulhxLfAAg8WS2ch57w%2Bw1ABrDmJsdmGtkmMi4zzvmceUg9hFGx19ftwPNPhJ0MDFMvJhsDxqr6iQIY0F9vsG2fnT1qeRNzoL5B4zxb6gHqWJqqeZsJZ%2FtBka7RUzONXMIBVLeWmrNZV5nGBMVkAOwvvfwwtPd0vPFWBhGRIN5T7KTwDrunp8fRecxfVli2rE4xdpswepvzcXz6QSvyZCowzCGuYigO%2BkhyW07mp7tZf26BHf%2BQuouHe7P%2FGuikqxxdLSNlS8KNLYgDjW%2FwRH3Ni2J7cxSs6kv%2FtJa7GUhb7Tu1vKa9DxCwJTUzdYvftMlgvsmzlnXu3jq00zCVhoU5o%2FAJXNXWn%2FQpuo9UPhCjoDzGFyoxDH7xtXTgAFJQvCcYCb0NuBMNWS2cQGOqUB5voJmkCslGveFVjFqIHV%2BQ01thMFlpuG4iNHyvDDaz1DWKsVahFCF1y4N6gj%2FYst3%2FX7TcUsUpGRAc6WDDkL50crvz7yhKTQp7cbvWEm4KVjM8A8sevdbUpDjFil4vdKhbcmdq32uH7sTMwAJvtusJX47cwxGLOYXW6FAcmYIdT%2BvZzh0KDNQl7hPLLcft3MfBuqE3gcAClvQGaJvRq0oVBEKFwq&X-Amz-Signature=b37b6db0c818aa294daae201b0a7dbd0cd8ede9f3b97320bf6bf335fe7d39300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVE3BYT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHxAGTBwj2wGA2H2okv1EqMdjSeYhkTAyFd220QPltE%2BAiEAm4QrjAtNZqIZ38oLQsNpXwxgSpH%2BvrS4QVQW45dOTIIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL4bxAXu%2BdtDk41BCrcAxnv0pHMZFC1aH0dahvnu5A75SU%2FwP9gXQ2CcSwbSKAaRkT02F5GBNfJ%2Fp8XvyPKeKa6A9%2B2KSvSB1xNBikQyiD7xI8s4vmyUZ%2BEY8eaEJ7NJQbDzS67E5yLYi2djdqVHTHgiXzqTzbeqYgVFjAwWCONYEqFR6hi6%2FmuOMeoN8hRXd4bfumyWOzAKmmWZQ9KU2wGcrnf5xZd96gpqaeZsAfip2e0%2Bat5u80l3TbSqGzJ20YO1SjTulhxLfAAg8WS2ch57w%2Bw1ABrDmJsdmGtkmMi4zzvmceUg9hFGx19ftwPNPhJ0MDFMvJhsDxqr6iQIY0F9vsG2fnT1qeRNzoL5B4zxb6gHqWJqqeZsJZ%2FtBka7RUzONXMIBVLeWmrNZV5nGBMVkAOwvvfwwtPd0vPFWBhGRIN5T7KTwDrunp8fRecxfVli2rE4xdpswepvzcXz6QSvyZCowzCGuYigO%2BkhyW07mp7tZf26BHf%2BQuouHe7P%2FGuikqxxdLSNlS8KNLYgDjW%2FwRH3Ni2J7cxSs6kv%2FtJa7GUhb7Tu1vKa9DxCwJTUzdYvftMlgvsmzlnXu3jq00zCVhoU5o%2FAJXNXWn%2FQpuo9UPhCjoDzGFyoxDH7xtXTgAFJQvCcYCb0NuBMNWS2cQGOqUB5voJmkCslGveFVjFqIHV%2BQ01thMFlpuG4iNHyvDDaz1DWKsVahFCF1y4N6gj%2FYst3%2FX7TcUsUpGRAc6WDDkL50crvz7yhKTQp7cbvWEm4KVjM8A8sevdbUpDjFil4vdKhbcmdq32uH7sTMwAJvtusJX47cwxGLOYXW6FAcmYIdT%2BvZzh0KDNQl7hPLLcft3MfBuqE3gcAClvQGaJvRq0oVBEKFwq&X-Amz-Signature=479049075db96a6a94d66952e03cda7fe4f65ca94a3f17de7401cf110a82e077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
