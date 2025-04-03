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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JUDEQF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAodEUeh6HovjUV%2Fg8Wfbct4IIGZbJgSlhYklKshJVcFAiEAqizllPEiAC%2FVIjxZiGj1TKbeITZTamPtkKa8vFoQTdEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYgxZGL7CXH9w0G%2FCrcA8%2Fj4zkXazMnMUqAgobi7mYQnbnadjF2LZaZzfmYXPr6k%2FRK3HwW24NkPC7OqnsEPV0J7AP6yjc0McpwVwNC7cGVxzqe3hAev9gxFxAPT0HjfS88WSUHMjmKa6XhKnTQo%2FfeR4Xk1fjfagGs42XXR5rhT9gvZ5NdT9tdgh5Feob%2FM6rXQDt%2F2%2BOoAdx0elMU7nqCW5vFTLscw4xRRQPmtl5ABS%2BF5TrcBgGyREnNiBU%2Bh%2FSamD4wTTvMT%2FfXNfmCWxoW%2B5XD3N0r6QxRLZlrjIDhgr4pmFQhLz2X%2FY9FE2vB7OvXCqXioQbJfIEej6kog%2F6DvRHyLpsZuViG78bgJtbkMYRCEVzCde44qB1ix4mR8yi2Gh3pgZDIT1jq%2Bm24tbYb7i0IG9UJncJaJCXo8DnpbjeBfnfGsOoc526KzZPmFDkM7jzu%2FfSzWU4QfncMBEsfWynWH3P7XZgjp5JD2PJ%2BUv9yKZww6nscjMMVVA3b50A5CAmxYT%2FABJ2p2yXuhP2BXzO%2FW64ruaap9zp0l2MtHdm4eKOAVcM%2FZH%2F2sYbpkD9TginIyi5znkFV5pLsp7Kd%2BVBbLvqDH%2FCyNUYnZDU7bXc%2F%2FmgKuAsoQfPkPNgTxOqdptps2Az6upJRMJeWub8GOqUBz1NkAxC6F1KTbQXCnWdlTNcKBx8obOhRzpCKW5E0Oao2QhstKutqZTmhcrfmHoXu6VCuUkaDvMwPsL5Wrijz%2BcBsbDgr1VLP1BFW6oh6ORBwWNjWoCfw%2B9i4X1o6QSBTxEoflMZ33qoKUH57g186Diygc%2B3%2Bgf%2FiEkhNU4NcDn6jGtxNPwR2HgEIEJkPZK3yPwsO4X1Koo2IcOKLNOAKctTKEDsk&X-Amz-Signature=000a2fa1da8a4b0f8947a3600d062a276c011590c7a1f0bfd2b335197b48bdac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JUDEQF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAodEUeh6HovjUV%2Fg8Wfbct4IIGZbJgSlhYklKshJVcFAiEAqizllPEiAC%2FVIjxZiGj1TKbeITZTamPtkKa8vFoQTdEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYgxZGL7CXH9w0G%2FCrcA8%2Fj4zkXazMnMUqAgobi7mYQnbnadjF2LZaZzfmYXPr6k%2FRK3HwW24NkPC7OqnsEPV0J7AP6yjc0McpwVwNC7cGVxzqe3hAev9gxFxAPT0HjfS88WSUHMjmKa6XhKnTQo%2FfeR4Xk1fjfagGs42XXR5rhT9gvZ5NdT9tdgh5Feob%2FM6rXQDt%2F2%2BOoAdx0elMU7nqCW5vFTLscw4xRRQPmtl5ABS%2BF5TrcBgGyREnNiBU%2Bh%2FSamD4wTTvMT%2FfXNfmCWxoW%2B5XD3N0r6QxRLZlrjIDhgr4pmFQhLz2X%2FY9FE2vB7OvXCqXioQbJfIEej6kog%2F6DvRHyLpsZuViG78bgJtbkMYRCEVzCde44qB1ix4mR8yi2Gh3pgZDIT1jq%2Bm24tbYb7i0IG9UJncJaJCXo8DnpbjeBfnfGsOoc526KzZPmFDkM7jzu%2FfSzWU4QfncMBEsfWynWH3P7XZgjp5JD2PJ%2BUv9yKZww6nscjMMVVA3b50A5CAmxYT%2FABJ2p2yXuhP2BXzO%2FW64ruaap9zp0l2MtHdm4eKOAVcM%2FZH%2F2sYbpkD9TginIyi5znkFV5pLsp7Kd%2BVBbLvqDH%2FCyNUYnZDU7bXc%2F%2FmgKuAsoQfPkPNgTxOqdptps2Az6upJRMJeWub8GOqUBz1NkAxC6F1KTbQXCnWdlTNcKBx8obOhRzpCKW5E0Oao2QhstKutqZTmhcrfmHoXu6VCuUkaDvMwPsL5Wrijz%2BcBsbDgr1VLP1BFW6oh6ORBwWNjWoCfw%2B9i4X1o6QSBTxEoflMZ33qoKUH57g186Diygc%2B3%2Bgf%2FiEkhNU4NcDn6jGtxNPwR2HgEIEJkPZK3yPwsO4X1Koo2IcOKLNOAKctTKEDsk&X-Amz-Signature=95a1cc8c6c22494733455249d2e59700d2765dc1b748ed60922113782477630f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JUDEQF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAodEUeh6HovjUV%2Fg8Wfbct4IIGZbJgSlhYklKshJVcFAiEAqizllPEiAC%2FVIjxZiGj1TKbeITZTamPtkKa8vFoQTdEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYgxZGL7CXH9w0G%2FCrcA8%2Fj4zkXazMnMUqAgobi7mYQnbnadjF2LZaZzfmYXPr6k%2FRK3HwW24NkPC7OqnsEPV0J7AP6yjc0McpwVwNC7cGVxzqe3hAev9gxFxAPT0HjfS88WSUHMjmKa6XhKnTQo%2FfeR4Xk1fjfagGs42XXR5rhT9gvZ5NdT9tdgh5Feob%2FM6rXQDt%2F2%2BOoAdx0elMU7nqCW5vFTLscw4xRRQPmtl5ABS%2BF5TrcBgGyREnNiBU%2Bh%2FSamD4wTTvMT%2FfXNfmCWxoW%2B5XD3N0r6QxRLZlrjIDhgr4pmFQhLz2X%2FY9FE2vB7OvXCqXioQbJfIEej6kog%2F6DvRHyLpsZuViG78bgJtbkMYRCEVzCde44qB1ix4mR8yi2Gh3pgZDIT1jq%2Bm24tbYb7i0IG9UJncJaJCXo8DnpbjeBfnfGsOoc526KzZPmFDkM7jzu%2FfSzWU4QfncMBEsfWynWH3P7XZgjp5JD2PJ%2BUv9yKZww6nscjMMVVA3b50A5CAmxYT%2FABJ2p2yXuhP2BXzO%2FW64ruaap9zp0l2MtHdm4eKOAVcM%2FZH%2F2sYbpkD9TginIyi5znkFV5pLsp7Kd%2BVBbLvqDH%2FCyNUYnZDU7bXc%2F%2FmgKuAsoQfPkPNgTxOqdptps2Az6upJRMJeWub8GOqUBz1NkAxC6F1KTbQXCnWdlTNcKBx8obOhRzpCKW5E0Oao2QhstKutqZTmhcrfmHoXu6VCuUkaDvMwPsL5Wrijz%2BcBsbDgr1VLP1BFW6oh6ORBwWNjWoCfw%2B9i4X1o6QSBTxEoflMZ33qoKUH57g186Diygc%2B3%2Bgf%2FiEkhNU4NcDn6jGtxNPwR2HgEIEJkPZK3yPwsO4X1Koo2IcOKLNOAKctTKEDsk&X-Amz-Signature=c13fbf02ac8e5672706529cb10ea4aa98f62a80ae59eb85f60940ff96daf9d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JUDEQF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAodEUeh6HovjUV%2Fg8Wfbct4IIGZbJgSlhYklKshJVcFAiEAqizllPEiAC%2FVIjxZiGj1TKbeITZTamPtkKa8vFoQTdEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYgxZGL7CXH9w0G%2FCrcA8%2Fj4zkXazMnMUqAgobi7mYQnbnadjF2LZaZzfmYXPr6k%2FRK3HwW24NkPC7OqnsEPV0J7AP6yjc0McpwVwNC7cGVxzqe3hAev9gxFxAPT0HjfS88WSUHMjmKa6XhKnTQo%2FfeR4Xk1fjfagGs42XXR5rhT9gvZ5NdT9tdgh5Feob%2FM6rXQDt%2F2%2BOoAdx0elMU7nqCW5vFTLscw4xRRQPmtl5ABS%2BF5TrcBgGyREnNiBU%2Bh%2FSamD4wTTvMT%2FfXNfmCWxoW%2B5XD3N0r6QxRLZlrjIDhgr4pmFQhLz2X%2FY9FE2vB7OvXCqXioQbJfIEej6kog%2F6DvRHyLpsZuViG78bgJtbkMYRCEVzCde44qB1ix4mR8yi2Gh3pgZDIT1jq%2Bm24tbYb7i0IG9UJncJaJCXo8DnpbjeBfnfGsOoc526KzZPmFDkM7jzu%2FfSzWU4QfncMBEsfWynWH3P7XZgjp5JD2PJ%2BUv9yKZww6nscjMMVVA3b50A5CAmxYT%2FABJ2p2yXuhP2BXzO%2FW64ruaap9zp0l2MtHdm4eKOAVcM%2FZH%2F2sYbpkD9TginIyi5znkFV5pLsp7Kd%2BVBbLvqDH%2FCyNUYnZDU7bXc%2F%2FmgKuAsoQfPkPNgTxOqdptps2Az6upJRMJeWub8GOqUBz1NkAxC6F1KTbQXCnWdlTNcKBx8obOhRzpCKW5E0Oao2QhstKutqZTmhcrfmHoXu6VCuUkaDvMwPsL5Wrijz%2BcBsbDgr1VLP1BFW6oh6ORBwWNjWoCfw%2B9i4X1o6QSBTxEoflMZ33qoKUH57g186Diygc%2B3%2Bgf%2FiEkhNU4NcDn6jGtxNPwR2HgEIEJkPZK3yPwsO4X1Koo2IcOKLNOAKctTKEDsk&X-Amz-Signature=7d2bc670bbdf0d2faba6db67322adaf1a82baed20d1428d339cc5755a3f2390b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JUDEQF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAodEUeh6HovjUV%2Fg8Wfbct4IIGZbJgSlhYklKshJVcFAiEAqizllPEiAC%2FVIjxZiGj1TKbeITZTamPtkKa8vFoQTdEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYgxZGL7CXH9w0G%2FCrcA8%2Fj4zkXazMnMUqAgobi7mYQnbnadjF2LZaZzfmYXPr6k%2FRK3HwW24NkPC7OqnsEPV0J7AP6yjc0McpwVwNC7cGVxzqe3hAev9gxFxAPT0HjfS88WSUHMjmKa6XhKnTQo%2FfeR4Xk1fjfagGs42XXR5rhT9gvZ5NdT9tdgh5Feob%2FM6rXQDt%2F2%2BOoAdx0elMU7nqCW5vFTLscw4xRRQPmtl5ABS%2BF5TrcBgGyREnNiBU%2Bh%2FSamD4wTTvMT%2FfXNfmCWxoW%2B5XD3N0r6QxRLZlrjIDhgr4pmFQhLz2X%2FY9FE2vB7OvXCqXioQbJfIEej6kog%2F6DvRHyLpsZuViG78bgJtbkMYRCEVzCde44qB1ix4mR8yi2Gh3pgZDIT1jq%2Bm24tbYb7i0IG9UJncJaJCXo8DnpbjeBfnfGsOoc526KzZPmFDkM7jzu%2FfSzWU4QfncMBEsfWynWH3P7XZgjp5JD2PJ%2BUv9yKZww6nscjMMVVA3b50A5CAmxYT%2FABJ2p2yXuhP2BXzO%2FW64ruaap9zp0l2MtHdm4eKOAVcM%2FZH%2F2sYbpkD9TginIyi5znkFV5pLsp7Kd%2BVBbLvqDH%2FCyNUYnZDU7bXc%2F%2FmgKuAsoQfPkPNgTxOqdptps2Az6upJRMJeWub8GOqUBz1NkAxC6F1KTbQXCnWdlTNcKBx8obOhRzpCKW5E0Oao2QhstKutqZTmhcrfmHoXu6VCuUkaDvMwPsL5Wrijz%2BcBsbDgr1VLP1BFW6oh6ORBwWNjWoCfw%2B9i4X1o6QSBTxEoflMZ33qoKUH57g186Diygc%2B3%2Bgf%2FiEkhNU4NcDn6jGtxNPwR2HgEIEJkPZK3yPwsO4X1Koo2IcOKLNOAKctTKEDsk&X-Amz-Signature=82336f533ab8ce7495aeec1448511833f1c5d4bb5fbaf3346de7702058e31f85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JUDEQF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAodEUeh6HovjUV%2Fg8Wfbct4IIGZbJgSlhYklKshJVcFAiEAqizllPEiAC%2FVIjxZiGj1TKbeITZTamPtkKa8vFoQTdEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYgxZGL7CXH9w0G%2FCrcA8%2Fj4zkXazMnMUqAgobi7mYQnbnadjF2LZaZzfmYXPr6k%2FRK3HwW24NkPC7OqnsEPV0J7AP6yjc0McpwVwNC7cGVxzqe3hAev9gxFxAPT0HjfS88WSUHMjmKa6XhKnTQo%2FfeR4Xk1fjfagGs42XXR5rhT9gvZ5NdT9tdgh5Feob%2FM6rXQDt%2F2%2BOoAdx0elMU7nqCW5vFTLscw4xRRQPmtl5ABS%2BF5TrcBgGyREnNiBU%2Bh%2FSamD4wTTvMT%2FfXNfmCWxoW%2B5XD3N0r6QxRLZlrjIDhgr4pmFQhLz2X%2FY9FE2vB7OvXCqXioQbJfIEej6kog%2F6DvRHyLpsZuViG78bgJtbkMYRCEVzCde44qB1ix4mR8yi2Gh3pgZDIT1jq%2Bm24tbYb7i0IG9UJncJaJCXo8DnpbjeBfnfGsOoc526KzZPmFDkM7jzu%2FfSzWU4QfncMBEsfWynWH3P7XZgjp5JD2PJ%2BUv9yKZww6nscjMMVVA3b50A5CAmxYT%2FABJ2p2yXuhP2BXzO%2FW64ruaap9zp0l2MtHdm4eKOAVcM%2FZH%2F2sYbpkD9TginIyi5znkFV5pLsp7Kd%2BVBbLvqDH%2FCyNUYnZDU7bXc%2F%2FmgKuAsoQfPkPNgTxOqdptps2Az6upJRMJeWub8GOqUBz1NkAxC6F1KTbQXCnWdlTNcKBx8obOhRzpCKW5E0Oao2QhstKutqZTmhcrfmHoXu6VCuUkaDvMwPsL5Wrijz%2BcBsbDgr1VLP1BFW6oh6ORBwWNjWoCfw%2B9i4X1o6QSBTxEoflMZ33qoKUH57g186Diygc%2B3%2Bgf%2FiEkhNU4NcDn6jGtxNPwR2HgEIEJkPZK3yPwsO4X1Koo2IcOKLNOAKctTKEDsk&X-Amz-Signature=0000626d67906f4a2a0d38c2006240ee1752b718e0a63606fed87d400982a247&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JUDEQF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAodEUeh6HovjUV%2Fg8Wfbct4IIGZbJgSlhYklKshJVcFAiEAqizllPEiAC%2FVIjxZiGj1TKbeITZTamPtkKa8vFoQTdEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYgxZGL7CXH9w0G%2FCrcA8%2Fj4zkXazMnMUqAgobi7mYQnbnadjF2LZaZzfmYXPr6k%2FRK3HwW24NkPC7OqnsEPV0J7AP6yjc0McpwVwNC7cGVxzqe3hAev9gxFxAPT0HjfS88WSUHMjmKa6XhKnTQo%2FfeR4Xk1fjfagGs42XXR5rhT9gvZ5NdT9tdgh5Feob%2FM6rXQDt%2F2%2BOoAdx0elMU7nqCW5vFTLscw4xRRQPmtl5ABS%2BF5TrcBgGyREnNiBU%2Bh%2FSamD4wTTvMT%2FfXNfmCWxoW%2B5XD3N0r6QxRLZlrjIDhgr4pmFQhLz2X%2FY9FE2vB7OvXCqXioQbJfIEej6kog%2F6DvRHyLpsZuViG78bgJtbkMYRCEVzCde44qB1ix4mR8yi2Gh3pgZDIT1jq%2Bm24tbYb7i0IG9UJncJaJCXo8DnpbjeBfnfGsOoc526KzZPmFDkM7jzu%2FfSzWU4QfncMBEsfWynWH3P7XZgjp5JD2PJ%2BUv9yKZww6nscjMMVVA3b50A5CAmxYT%2FABJ2p2yXuhP2BXzO%2FW64ruaap9zp0l2MtHdm4eKOAVcM%2FZH%2F2sYbpkD9TginIyi5znkFV5pLsp7Kd%2BVBbLvqDH%2FCyNUYnZDU7bXc%2F%2FmgKuAsoQfPkPNgTxOqdptps2Az6upJRMJeWub8GOqUBz1NkAxC6F1KTbQXCnWdlTNcKBx8obOhRzpCKW5E0Oao2QhstKutqZTmhcrfmHoXu6VCuUkaDvMwPsL5Wrijz%2BcBsbDgr1VLP1BFW6oh6ORBwWNjWoCfw%2B9i4X1o6QSBTxEoflMZ33qoKUH57g186Diygc%2B3%2Bgf%2FiEkhNU4NcDn6jGtxNPwR2HgEIEJkPZK3yPwsO4X1Koo2IcOKLNOAKctTKEDsk&X-Amz-Signature=4c01f578a21d2e0f79eff626f0872114fcc1dcb06f545eb65da6fa03125d27f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JUDEQF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAodEUeh6HovjUV%2Fg8Wfbct4IIGZbJgSlhYklKshJVcFAiEAqizllPEiAC%2FVIjxZiGj1TKbeITZTamPtkKa8vFoQTdEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYgxZGL7CXH9w0G%2FCrcA8%2Fj4zkXazMnMUqAgobi7mYQnbnadjF2LZaZzfmYXPr6k%2FRK3HwW24NkPC7OqnsEPV0J7AP6yjc0McpwVwNC7cGVxzqe3hAev9gxFxAPT0HjfS88WSUHMjmKa6XhKnTQo%2FfeR4Xk1fjfagGs42XXR5rhT9gvZ5NdT9tdgh5Feob%2FM6rXQDt%2F2%2BOoAdx0elMU7nqCW5vFTLscw4xRRQPmtl5ABS%2BF5TrcBgGyREnNiBU%2Bh%2FSamD4wTTvMT%2FfXNfmCWxoW%2B5XD3N0r6QxRLZlrjIDhgr4pmFQhLz2X%2FY9FE2vB7OvXCqXioQbJfIEej6kog%2F6DvRHyLpsZuViG78bgJtbkMYRCEVzCde44qB1ix4mR8yi2Gh3pgZDIT1jq%2Bm24tbYb7i0IG9UJncJaJCXo8DnpbjeBfnfGsOoc526KzZPmFDkM7jzu%2FfSzWU4QfncMBEsfWynWH3P7XZgjp5JD2PJ%2BUv9yKZww6nscjMMVVA3b50A5CAmxYT%2FABJ2p2yXuhP2BXzO%2FW64ruaap9zp0l2MtHdm4eKOAVcM%2FZH%2F2sYbpkD9TginIyi5znkFV5pLsp7Kd%2BVBbLvqDH%2FCyNUYnZDU7bXc%2F%2FmgKuAsoQfPkPNgTxOqdptps2Az6upJRMJeWub8GOqUBz1NkAxC6F1KTbQXCnWdlTNcKBx8obOhRzpCKW5E0Oao2QhstKutqZTmhcrfmHoXu6VCuUkaDvMwPsL5Wrijz%2BcBsbDgr1VLP1BFW6oh6ORBwWNjWoCfw%2B9i4X1o6QSBTxEoflMZ33qoKUH57g186Diygc%2B3%2Bgf%2FiEkhNU4NcDn6jGtxNPwR2HgEIEJkPZK3yPwsO4X1Koo2IcOKLNOAKctTKEDsk&X-Amz-Signature=4637c14cff1d71a141de8ae2c6432e17fc300073db9f0c70f2281dbbe60ea9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
