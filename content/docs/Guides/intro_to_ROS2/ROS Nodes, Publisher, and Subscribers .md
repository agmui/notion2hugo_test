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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTBG7OD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDFwmVV7FJCnfWuVIBMy0opMBY3jArm9%2Bh%2Fo4lg6XIgPQIhAKjjb6ybYPwhhpytCjdGj1DXb0IphbH9U1JyhQnOfewjKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzr6QyLxRa%2BScy6toq3ANpBBiXZa9vlzPqGbFEvtOImZnCxeXdEZcGffehKJV7KV2YadMtKExdEC8TDOieBQEInFM4gj0kQDjyrHmn4S9s51TjqqAtfgivFZ6XCQX2QY3HoOZjbTHu1enFmYKj5BmZUsL2OdWRuuuWTNmIKfhM%2FPawQMsskejradOZICe5CHfA64c1q33TAjwgbdvX8GQ%2BzitXbxt3BkAyH2LqfoDF9MiMXEfkKnFr8Z3SwMXPxdXEZNrlr%2Fr8ThmYK1tv6AgUQBaHa7wWbXngJTIM5dZTJt8t7JSvbJs73T4rtE4e8m3%2FyqM0umWUZ%2BtyfH8k%2Baou9QGcBm1j0ioxHQxwg64O%2BOkmGp7t38DMq5wQ9NrWqKUWUUttq1djvb1a4uNnR1a9VrbS0%2Beu8ol6VgkTBAMUx493Iu0UW9BDgKui4mI9yJLo08iBZ3ZPLms9o4nC0FDCIk9fZAdCznuAw1%2F75mKimqVMpYRzbGF8zBsQfb5QdrOxM6NMSIsDbxLoGMBWrqpBlWiTJpXsm8Tz6buESDhhVsnmWnHV%2FxiCaRceQu08dMcCF2K6T8%2Bsc1Aq6cIdqJa0kHG3%2BZnAdmrq6OBcwKnN5wNss2WMCKoOoWtIPgt5jdVWdqCOHMGITxUp6jDboLC%2FBjqkAaQ6P2rbSHnfYVFjYQf8%2Bb3jIIDbN%2BZ65lfAutI9%2F88%2FRfw%2Fs9eH1OyEAFWWIpFQYyupWEQq8lake30ZMXLbu8lQUjPSlaVzcsreuxx3nPt5NLTZEszbLyBV%2Fo%2Bwy7RdqTEkb97f3HQX%2FaBnLN3cEzbVGrhsqyYQxKcWy61wK5hruW7%2F01mTBx5XEvCfCLhnrKMZbhcHEmjyBKiNfQp6SEZ01h5g&X-Amz-Signature=fb8a553217e83364f181cf8f2a3cb869bcadd2398bcdcddb0fa024a03a37d5e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTBG7OD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDFwmVV7FJCnfWuVIBMy0opMBY3jArm9%2Bh%2Fo4lg6XIgPQIhAKjjb6ybYPwhhpytCjdGj1DXb0IphbH9U1JyhQnOfewjKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzr6QyLxRa%2BScy6toq3ANpBBiXZa9vlzPqGbFEvtOImZnCxeXdEZcGffehKJV7KV2YadMtKExdEC8TDOieBQEInFM4gj0kQDjyrHmn4S9s51TjqqAtfgivFZ6XCQX2QY3HoOZjbTHu1enFmYKj5BmZUsL2OdWRuuuWTNmIKfhM%2FPawQMsskejradOZICe5CHfA64c1q33TAjwgbdvX8GQ%2BzitXbxt3BkAyH2LqfoDF9MiMXEfkKnFr8Z3SwMXPxdXEZNrlr%2Fr8ThmYK1tv6AgUQBaHa7wWbXngJTIM5dZTJt8t7JSvbJs73T4rtE4e8m3%2FyqM0umWUZ%2BtyfH8k%2Baou9QGcBm1j0ioxHQxwg64O%2BOkmGp7t38DMq5wQ9NrWqKUWUUttq1djvb1a4uNnR1a9VrbS0%2Beu8ol6VgkTBAMUx493Iu0UW9BDgKui4mI9yJLo08iBZ3ZPLms9o4nC0FDCIk9fZAdCznuAw1%2F75mKimqVMpYRzbGF8zBsQfb5QdrOxM6NMSIsDbxLoGMBWrqpBlWiTJpXsm8Tz6buESDhhVsnmWnHV%2FxiCaRceQu08dMcCF2K6T8%2Bsc1Aq6cIdqJa0kHG3%2BZnAdmrq6OBcwKnN5wNss2WMCKoOoWtIPgt5jdVWdqCOHMGITxUp6jDboLC%2FBjqkAaQ6P2rbSHnfYVFjYQf8%2Bb3jIIDbN%2BZ65lfAutI9%2F88%2FRfw%2Fs9eH1OyEAFWWIpFQYyupWEQq8lake30ZMXLbu8lQUjPSlaVzcsreuxx3nPt5NLTZEszbLyBV%2Fo%2Bwy7RdqTEkb97f3HQX%2FaBnLN3cEzbVGrhsqyYQxKcWy61wK5hruW7%2F01mTBx5XEvCfCLhnrKMZbhcHEmjyBKiNfQp6SEZ01h5g&X-Amz-Signature=603ee4f288f7ac1b30ffc8b3aacba4ef434634411b35abc99276aa0d4f933e15&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTBG7OD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDFwmVV7FJCnfWuVIBMy0opMBY3jArm9%2Bh%2Fo4lg6XIgPQIhAKjjb6ybYPwhhpytCjdGj1DXb0IphbH9U1JyhQnOfewjKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzr6QyLxRa%2BScy6toq3ANpBBiXZa9vlzPqGbFEvtOImZnCxeXdEZcGffehKJV7KV2YadMtKExdEC8TDOieBQEInFM4gj0kQDjyrHmn4S9s51TjqqAtfgivFZ6XCQX2QY3HoOZjbTHu1enFmYKj5BmZUsL2OdWRuuuWTNmIKfhM%2FPawQMsskejradOZICe5CHfA64c1q33TAjwgbdvX8GQ%2BzitXbxt3BkAyH2LqfoDF9MiMXEfkKnFr8Z3SwMXPxdXEZNrlr%2Fr8ThmYK1tv6AgUQBaHa7wWbXngJTIM5dZTJt8t7JSvbJs73T4rtE4e8m3%2FyqM0umWUZ%2BtyfH8k%2Baou9QGcBm1j0ioxHQxwg64O%2BOkmGp7t38DMq5wQ9NrWqKUWUUttq1djvb1a4uNnR1a9VrbS0%2Beu8ol6VgkTBAMUx493Iu0UW9BDgKui4mI9yJLo08iBZ3ZPLms9o4nC0FDCIk9fZAdCznuAw1%2F75mKimqVMpYRzbGF8zBsQfb5QdrOxM6NMSIsDbxLoGMBWrqpBlWiTJpXsm8Tz6buESDhhVsnmWnHV%2FxiCaRceQu08dMcCF2K6T8%2Bsc1Aq6cIdqJa0kHG3%2BZnAdmrq6OBcwKnN5wNss2WMCKoOoWtIPgt5jdVWdqCOHMGITxUp6jDboLC%2FBjqkAaQ6P2rbSHnfYVFjYQf8%2Bb3jIIDbN%2BZ65lfAutI9%2F88%2FRfw%2Fs9eH1OyEAFWWIpFQYyupWEQq8lake30ZMXLbu8lQUjPSlaVzcsreuxx3nPt5NLTZEszbLyBV%2Fo%2Bwy7RdqTEkb97f3HQX%2FaBnLN3cEzbVGrhsqyYQxKcWy61wK5hruW7%2F01mTBx5XEvCfCLhnrKMZbhcHEmjyBKiNfQp6SEZ01h5g&X-Amz-Signature=c82d266beebc2c7951d35c483ab547684fb4acc618d96d76e3ee665e0fd22eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTBG7OD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDFwmVV7FJCnfWuVIBMy0opMBY3jArm9%2Bh%2Fo4lg6XIgPQIhAKjjb6ybYPwhhpytCjdGj1DXb0IphbH9U1JyhQnOfewjKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzr6QyLxRa%2BScy6toq3ANpBBiXZa9vlzPqGbFEvtOImZnCxeXdEZcGffehKJV7KV2YadMtKExdEC8TDOieBQEInFM4gj0kQDjyrHmn4S9s51TjqqAtfgivFZ6XCQX2QY3HoOZjbTHu1enFmYKj5BmZUsL2OdWRuuuWTNmIKfhM%2FPawQMsskejradOZICe5CHfA64c1q33TAjwgbdvX8GQ%2BzitXbxt3BkAyH2LqfoDF9MiMXEfkKnFr8Z3SwMXPxdXEZNrlr%2Fr8ThmYK1tv6AgUQBaHa7wWbXngJTIM5dZTJt8t7JSvbJs73T4rtE4e8m3%2FyqM0umWUZ%2BtyfH8k%2Baou9QGcBm1j0ioxHQxwg64O%2BOkmGp7t38DMq5wQ9NrWqKUWUUttq1djvb1a4uNnR1a9VrbS0%2Beu8ol6VgkTBAMUx493Iu0UW9BDgKui4mI9yJLo08iBZ3ZPLms9o4nC0FDCIk9fZAdCznuAw1%2F75mKimqVMpYRzbGF8zBsQfb5QdrOxM6NMSIsDbxLoGMBWrqpBlWiTJpXsm8Tz6buESDhhVsnmWnHV%2FxiCaRceQu08dMcCF2K6T8%2Bsc1Aq6cIdqJa0kHG3%2BZnAdmrq6OBcwKnN5wNss2WMCKoOoWtIPgt5jdVWdqCOHMGITxUp6jDboLC%2FBjqkAaQ6P2rbSHnfYVFjYQf8%2Bb3jIIDbN%2BZ65lfAutI9%2F88%2FRfw%2Fs9eH1OyEAFWWIpFQYyupWEQq8lake30ZMXLbu8lQUjPSlaVzcsreuxx3nPt5NLTZEszbLyBV%2Fo%2Bwy7RdqTEkb97f3HQX%2FaBnLN3cEzbVGrhsqyYQxKcWy61wK5hruW7%2F01mTBx5XEvCfCLhnrKMZbhcHEmjyBKiNfQp6SEZ01h5g&X-Amz-Signature=7793c32e4e8af5fbf57e48a11060742f1d8adec4231afbf4d4481dbc3bc23211&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTBG7OD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDFwmVV7FJCnfWuVIBMy0opMBY3jArm9%2Bh%2Fo4lg6XIgPQIhAKjjb6ybYPwhhpytCjdGj1DXb0IphbH9U1JyhQnOfewjKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzr6QyLxRa%2BScy6toq3ANpBBiXZa9vlzPqGbFEvtOImZnCxeXdEZcGffehKJV7KV2YadMtKExdEC8TDOieBQEInFM4gj0kQDjyrHmn4S9s51TjqqAtfgivFZ6XCQX2QY3HoOZjbTHu1enFmYKj5BmZUsL2OdWRuuuWTNmIKfhM%2FPawQMsskejradOZICe5CHfA64c1q33TAjwgbdvX8GQ%2BzitXbxt3BkAyH2LqfoDF9MiMXEfkKnFr8Z3SwMXPxdXEZNrlr%2Fr8ThmYK1tv6AgUQBaHa7wWbXngJTIM5dZTJt8t7JSvbJs73T4rtE4e8m3%2FyqM0umWUZ%2BtyfH8k%2Baou9QGcBm1j0ioxHQxwg64O%2BOkmGp7t38DMq5wQ9NrWqKUWUUttq1djvb1a4uNnR1a9VrbS0%2Beu8ol6VgkTBAMUx493Iu0UW9BDgKui4mI9yJLo08iBZ3ZPLms9o4nC0FDCIk9fZAdCznuAw1%2F75mKimqVMpYRzbGF8zBsQfb5QdrOxM6NMSIsDbxLoGMBWrqpBlWiTJpXsm8Tz6buESDhhVsnmWnHV%2FxiCaRceQu08dMcCF2K6T8%2Bsc1Aq6cIdqJa0kHG3%2BZnAdmrq6OBcwKnN5wNss2WMCKoOoWtIPgt5jdVWdqCOHMGITxUp6jDboLC%2FBjqkAaQ6P2rbSHnfYVFjYQf8%2Bb3jIIDbN%2BZ65lfAutI9%2F88%2FRfw%2Fs9eH1OyEAFWWIpFQYyupWEQq8lake30ZMXLbu8lQUjPSlaVzcsreuxx3nPt5NLTZEszbLyBV%2Fo%2Bwy7RdqTEkb97f3HQX%2FaBnLN3cEzbVGrhsqyYQxKcWy61wK5hruW7%2F01mTBx5XEvCfCLhnrKMZbhcHEmjyBKiNfQp6SEZ01h5g&X-Amz-Signature=2cb1ac8deba2f73bc3a23dbb2352459dfd01bd3703ba48cc665408fb123533ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTBG7OD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDFwmVV7FJCnfWuVIBMy0opMBY3jArm9%2Bh%2Fo4lg6XIgPQIhAKjjb6ybYPwhhpytCjdGj1DXb0IphbH9U1JyhQnOfewjKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzr6QyLxRa%2BScy6toq3ANpBBiXZa9vlzPqGbFEvtOImZnCxeXdEZcGffehKJV7KV2YadMtKExdEC8TDOieBQEInFM4gj0kQDjyrHmn4S9s51TjqqAtfgivFZ6XCQX2QY3HoOZjbTHu1enFmYKj5BmZUsL2OdWRuuuWTNmIKfhM%2FPawQMsskejradOZICe5CHfA64c1q33TAjwgbdvX8GQ%2BzitXbxt3BkAyH2LqfoDF9MiMXEfkKnFr8Z3SwMXPxdXEZNrlr%2Fr8ThmYK1tv6AgUQBaHa7wWbXngJTIM5dZTJt8t7JSvbJs73T4rtE4e8m3%2FyqM0umWUZ%2BtyfH8k%2Baou9QGcBm1j0ioxHQxwg64O%2BOkmGp7t38DMq5wQ9NrWqKUWUUttq1djvb1a4uNnR1a9VrbS0%2Beu8ol6VgkTBAMUx493Iu0UW9BDgKui4mI9yJLo08iBZ3ZPLms9o4nC0FDCIk9fZAdCznuAw1%2F75mKimqVMpYRzbGF8zBsQfb5QdrOxM6NMSIsDbxLoGMBWrqpBlWiTJpXsm8Tz6buESDhhVsnmWnHV%2FxiCaRceQu08dMcCF2K6T8%2Bsc1Aq6cIdqJa0kHG3%2BZnAdmrq6OBcwKnN5wNss2WMCKoOoWtIPgt5jdVWdqCOHMGITxUp6jDboLC%2FBjqkAaQ6P2rbSHnfYVFjYQf8%2Bb3jIIDbN%2BZ65lfAutI9%2F88%2FRfw%2Fs9eH1OyEAFWWIpFQYyupWEQq8lake30ZMXLbu8lQUjPSlaVzcsreuxx3nPt5NLTZEszbLyBV%2Fo%2Bwy7RdqTEkb97f3HQX%2FaBnLN3cEzbVGrhsqyYQxKcWy61wK5hruW7%2F01mTBx5XEvCfCLhnrKMZbhcHEmjyBKiNfQp6SEZ01h5g&X-Amz-Signature=53e89955a02fd8118f641cef1a7406cc3724e936e2d4a696096f484165bd36a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTBG7OD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDFwmVV7FJCnfWuVIBMy0opMBY3jArm9%2Bh%2Fo4lg6XIgPQIhAKjjb6ybYPwhhpytCjdGj1DXb0IphbH9U1JyhQnOfewjKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzr6QyLxRa%2BScy6toq3ANpBBiXZa9vlzPqGbFEvtOImZnCxeXdEZcGffehKJV7KV2YadMtKExdEC8TDOieBQEInFM4gj0kQDjyrHmn4S9s51TjqqAtfgivFZ6XCQX2QY3HoOZjbTHu1enFmYKj5BmZUsL2OdWRuuuWTNmIKfhM%2FPawQMsskejradOZICe5CHfA64c1q33TAjwgbdvX8GQ%2BzitXbxt3BkAyH2LqfoDF9MiMXEfkKnFr8Z3SwMXPxdXEZNrlr%2Fr8ThmYK1tv6AgUQBaHa7wWbXngJTIM5dZTJt8t7JSvbJs73T4rtE4e8m3%2FyqM0umWUZ%2BtyfH8k%2Baou9QGcBm1j0ioxHQxwg64O%2BOkmGp7t38DMq5wQ9NrWqKUWUUttq1djvb1a4uNnR1a9VrbS0%2Beu8ol6VgkTBAMUx493Iu0UW9BDgKui4mI9yJLo08iBZ3ZPLms9o4nC0FDCIk9fZAdCznuAw1%2F75mKimqVMpYRzbGF8zBsQfb5QdrOxM6NMSIsDbxLoGMBWrqpBlWiTJpXsm8Tz6buESDhhVsnmWnHV%2FxiCaRceQu08dMcCF2K6T8%2Bsc1Aq6cIdqJa0kHG3%2BZnAdmrq6OBcwKnN5wNss2WMCKoOoWtIPgt5jdVWdqCOHMGITxUp6jDboLC%2FBjqkAaQ6P2rbSHnfYVFjYQf8%2Bb3jIIDbN%2BZ65lfAutI9%2F88%2FRfw%2Fs9eH1OyEAFWWIpFQYyupWEQq8lake30ZMXLbu8lQUjPSlaVzcsreuxx3nPt5NLTZEszbLyBV%2Fo%2Bwy7RdqTEkb97f3HQX%2FaBnLN3cEzbVGrhsqyYQxKcWy61wK5hruW7%2F01mTBx5XEvCfCLhnrKMZbhcHEmjyBKiNfQp6SEZ01h5g&X-Amz-Signature=0145e653de5015750972885cad5b16b36a38dba201f1e46d7176d80a8a3e3d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTBG7OD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDFwmVV7FJCnfWuVIBMy0opMBY3jArm9%2Bh%2Fo4lg6XIgPQIhAKjjb6ybYPwhhpytCjdGj1DXb0IphbH9U1JyhQnOfewjKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzr6QyLxRa%2BScy6toq3ANpBBiXZa9vlzPqGbFEvtOImZnCxeXdEZcGffehKJV7KV2YadMtKExdEC8TDOieBQEInFM4gj0kQDjyrHmn4S9s51TjqqAtfgivFZ6XCQX2QY3HoOZjbTHu1enFmYKj5BmZUsL2OdWRuuuWTNmIKfhM%2FPawQMsskejradOZICe5CHfA64c1q33TAjwgbdvX8GQ%2BzitXbxt3BkAyH2LqfoDF9MiMXEfkKnFr8Z3SwMXPxdXEZNrlr%2Fr8ThmYK1tv6AgUQBaHa7wWbXngJTIM5dZTJt8t7JSvbJs73T4rtE4e8m3%2FyqM0umWUZ%2BtyfH8k%2Baou9QGcBm1j0ioxHQxwg64O%2BOkmGp7t38DMq5wQ9NrWqKUWUUttq1djvb1a4uNnR1a9VrbS0%2Beu8ol6VgkTBAMUx493Iu0UW9BDgKui4mI9yJLo08iBZ3ZPLms9o4nC0FDCIk9fZAdCznuAw1%2F75mKimqVMpYRzbGF8zBsQfb5QdrOxM6NMSIsDbxLoGMBWrqpBlWiTJpXsm8Tz6buESDhhVsnmWnHV%2FxiCaRceQu08dMcCF2K6T8%2Bsc1Aq6cIdqJa0kHG3%2BZnAdmrq6OBcwKnN5wNss2WMCKoOoWtIPgt5jdVWdqCOHMGITxUp6jDboLC%2FBjqkAaQ6P2rbSHnfYVFjYQf8%2Bb3jIIDbN%2BZ65lfAutI9%2F88%2FRfw%2Fs9eH1OyEAFWWIpFQYyupWEQq8lake30ZMXLbu8lQUjPSlaVzcsreuxx3nPt5NLTZEszbLyBV%2Fo%2Bwy7RdqTEkb97f3HQX%2FaBnLN3cEzbVGrhsqyYQxKcWy61wK5hruW7%2F01mTBx5XEvCfCLhnrKMZbhcHEmjyBKiNfQp6SEZ01h5g&X-Amz-Signature=4029624c180b0b76355f3f5aa553e5bec0c53c20935a742762b7787f142095cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
