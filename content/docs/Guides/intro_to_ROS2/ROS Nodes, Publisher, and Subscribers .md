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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYL6DOW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE0IWk2PV8swaHbReR98dhxSTXzCSusGJsMlMeK9M6jTAiEA%2FEt7jVXc%2Fpf05wtHd02eaMod3tHGqBrJyI280mVnVrMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCx84CaRVACGcCJ3ZCrcA%2FY71XJywpMzywmPgc1VSmdQL1fZKW%2BCfwt854tvypFc1uQt2NUevgKaEcTQ5nV9EIqJchYaA5o1ygVdy96A%2FW6P%2BcoeY6JgaeqE1KqQs3%2B7VsrexSZyotY2eToSD3FLPiZqDMhemrbwHRs8TXAknTw2CUF9UAUV6ZKXhiTtzBSmdIFlkfG5ntbQ2%2BJ4PmUujbs5RmN7p9Ws5iIINxWvaCWrsbqIygZpmk2cvjSfcHO%2BHPC9gnfimfmMhdMtzZ5Llk%2B8Tl02sikf147QHKXSJ1nu3mv%2FDowMD64ZtDLeSsWPTG3Riv1WkXizVp8PwUrygzsvyxT2oqq1CWpUyfCLPS9q1%2Bct7sWUjcI9zBeik7KOyixI%2Fdl0gZ3JAM3R7rkqcfSl9SrxuFidpgO4BU3nK6XsmIqwadvqKCTAqRAF88KYvX2VpktQHTQ%2F1zceabGtLQwf8imqNMeN8EjGaFOH%2Fdr%2F0WKO%2Bummw2y%2F1AC4PtAhxc8FqFXC88rbi1kuNjiiGhca6KxTYmIlqrpnEdaWQ%2BSjotLgXNNgAMZSa4yZigO9tFxrgYc0KSpPZAr%2F8k3PoyOMqgMPp2BB9GoNFdG7lhE8b6IwzHMYI2L4%2Fv4f4ejIEIlNTMkc3VY0TRnFMJ2D9L0GOqUBz0IMHoXTtsVHPd05MVAU5KeOztXsEihGQes7gYeEZfYCZJLZWPDh3XdE1Td3hquiNZXY34YJb3BYqMKX9a%2FzbThcutRFi0RF0zURzXZCdKXdQ62AmL1ge9DwXfsJRIRKaSHiRnjbBgdyl3F9T%2BpqizHQWvR0%2FjuxqoPboUMSzqX1TAqH5dSlHruVE9kKA1MVDvpkN0rWFg7HeeCHtOF%2FBoMwRTG1&X-Amz-Signature=98a423ad156cf047dabf1206cc227b5fa6b0537dc2abcfae2d30873576342ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYL6DOW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE0IWk2PV8swaHbReR98dhxSTXzCSusGJsMlMeK9M6jTAiEA%2FEt7jVXc%2Fpf05wtHd02eaMod3tHGqBrJyI280mVnVrMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCx84CaRVACGcCJ3ZCrcA%2FY71XJywpMzywmPgc1VSmdQL1fZKW%2BCfwt854tvypFc1uQt2NUevgKaEcTQ5nV9EIqJchYaA5o1ygVdy96A%2FW6P%2BcoeY6JgaeqE1KqQs3%2B7VsrexSZyotY2eToSD3FLPiZqDMhemrbwHRs8TXAknTw2CUF9UAUV6ZKXhiTtzBSmdIFlkfG5ntbQ2%2BJ4PmUujbs5RmN7p9Ws5iIINxWvaCWrsbqIygZpmk2cvjSfcHO%2BHPC9gnfimfmMhdMtzZ5Llk%2B8Tl02sikf147QHKXSJ1nu3mv%2FDowMD64ZtDLeSsWPTG3Riv1WkXizVp8PwUrygzsvyxT2oqq1CWpUyfCLPS9q1%2Bct7sWUjcI9zBeik7KOyixI%2Fdl0gZ3JAM3R7rkqcfSl9SrxuFidpgO4BU3nK6XsmIqwadvqKCTAqRAF88KYvX2VpktQHTQ%2F1zceabGtLQwf8imqNMeN8EjGaFOH%2Fdr%2F0WKO%2Bummw2y%2F1AC4PtAhxc8FqFXC88rbi1kuNjiiGhca6KxTYmIlqrpnEdaWQ%2BSjotLgXNNgAMZSa4yZigO9tFxrgYc0KSpPZAr%2F8k3PoyOMqgMPp2BB9GoNFdG7lhE8b6IwzHMYI2L4%2Fv4f4ejIEIlNTMkc3VY0TRnFMJ2D9L0GOqUBz0IMHoXTtsVHPd05MVAU5KeOztXsEihGQes7gYeEZfYCZJLZWPDh3XdE1Td3hquiNZXY34YJb3BYqMKX9a%2FzbThcutRFi0RF0zURzXZCdKXdQ62AmL1ge9DwXfsJRIRKaSHiRnjbBgdyl3F9T%2BpqizHQWvR0%2FjuxqoPboUMSzqX1TAqH5dSlHruVE9kKA1MVDvpkN0rWFg7HeeCHtOF%2FBoMwRTG1&X-Amz-Signature=2f1343bf5044f077761adab895524a954f77f6ab7f7ecd8b39645283aacc58a4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYL6DOW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE0IWk2PV8swaHbReR98dhxSTXzCSusGJsMlMeK9M6jTAiEA%2FEt7jVXc%2Fpf05wtHd02eaMod3tHGqBrJyI280mVnVrMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCx84CaRVACGcCJ3ZCrcA%2FY71XJywpMzywmPgc1VSmdQL1fZKW%2BCfwt854tvypFc1uQt2NUevgKaEcTQ5nV9EIqJchYaA5o1ygVdy96A%2FW6P%2BcoeY6JgaeqE1KqQs3%2B7VsrexSZyotY2eToSD3FLPiZqDMhemrbwHRs8TXAknTw2CUF9UAUV6ZKXhiTtzBSmdIFlkfG5ntbQ2%2BJ4PmUujbs5RmN7p9Ws5iIINxWvaCWrsbqIygZpmk2cvjSfcHO%2BHPC9gnfimfmMhdMtzZ5Llk%2B8Tl02sikf147QHKXSJ1nu3mv%2FDowMD64ZtDLeSsWPTG3Riv1WkXizVp8PwUrygzsvyxT2oqq1CWpUyfCLPS9q1%2Bct7sWUjcI9zBeik7KOyixI%2Fdl0gZ3JAM3R7rkqcfSl9SrxuFidpgO4BU3nK6XsmIqwadvqKCTAqRAF88KYvX2VpktQHTQ%2F1zceabGtLQwf8imqNMeN8EjGaFOH%2Fdr%2F0WKO%2Bummw2y%2F1AC4PtAhxc8FqFXC88rbi1kuNjiiGhca6KxTYmIlqrpnEdaWQ%2BSjotLgXNNgAMZSa4yZigO9tFxrgYc0KSpPZAr%2F8k3PoyOMqgMPp2BB9GoNFdG7lhE8b6IwzHMYI2L4%2Fv4f4ejIEIlNTMkc3VY0TRnFMJ2D9L0GOqUBz0IMHoXTtsVHPd05MVAU5KeOztXsEihGQes7gYeEZfYCZJLZWPDh3XdE1Td3hquiNZXY34YJb3BYqMKX9a%2FzbThcutRFi0RF0zURzXZCdKXdQ62AmL1ge9DwXfsJRIRKaSHiRnjbBgdyl3F9T%2BpqizHQWvR0%2FjuxqoPboUMSzqX1TAqH5dSlHruVE9kKA1MVDvpkN0rWFg7HeeCHtOF%2FBoMwRTG1&X-Amz-Signature=e2ad177eeb6c5c49020df895b01e0637773fdd99a266ccf18afcf06d53057b12&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYL6DOW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE0IWk2PV8swaHbReR98dhxSTXzCSusGJsMlMeK9M6jTAiEA%2FEt7jVXc%2Fpf05wtHd02eaMod3tHGqBrJyI280mVnVrMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCx84CaRVACGcCJ3ZCrcA%2FY71XJywpMzywmPgc1VSmdQL1fZKW%2BCfwt854tvypFc1uQt2NUevgKaEcTQ5nV9EIqJchYaA5o1ygVdy96A%2FW6P%2BcoeY6JgaeqE1KqQs3%2B7VsrexSZyotY2eToSD3FLPiZqDMhemrbwHRs8TXAknTw2CUF9UAUV6ZKXhiTtzBSmdIFlkfG5ntbQ2%2BJ4PmUujbs5RmN7p9Ws5iIINxWvaCWrsbqIygZpmk2cvjSfcHO%2BHPC9gnfimfmMhdMtzZ5Llk%2B8Tl02sikf147QHKXSJ1nu3mv%2FDowMD64ZtDLeSsWPTG3Riv1WkXizVp8PwUrygzsvyxT2oqq1CWpUyfCLPS9q1%2Bct7sWUjcI9zBeik7KOyixI%2Fdl0gZ3JAM3R7rkqcfSl9SrxuFidpgO4BU3nK6XsmIqwadvqKCTAqRAF88KYvX2VpktQHTQ%2F1zceabGtLQwf8imqNMeN8EjGaFOH%2Fdr%2F0WKO%2Bummw2y%2F1AC4PtAhxc8FqFXC88rbi1kuNjiiGhca6KxTYmIlqrpnEdaWQ%2BSjotLgXNNgAMZSa4yZigO9tFxrgYc0KSpPZAr%2F8k3PoyOMqgMPp2BB9GoNFdG7lhE8b6IwzHMYI2L4%2Fv4f4ejIEIlNTMkc3VY0TRnFMJ2D9L0GOqUBz0IMHoXTtsVHPd05MVAU5KeOztXsEihGQes7gYeEZfYCZJLZWPDh3XdE1Td3hquiNZXY34YJb3BYqMKX9a%2FzbThcutRFi0RF0zURzXZCdKXdQ62AmL1ge9DwXfsJRIRKaSHiRnjbBgdyl3F9T%2BpqizHQWvR0%2FjuxqoPboUMSzqX1TAqH5dSlHruVE9kKA1MVDvpkN0rWFg7HeeCHtOF%2FBoMwRTG1&X-Amz-Signature=cc5e5532adb1d6bebda0020d99333e7d3efbbf7a479a2881597e073702249663&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYL6DOW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE0IWk2PV8swaHbReR98dhxSTXzCSusGJsMlMeK9M6jTAiEA%2FEt7jVXc%2Fpf05wtHd02eaMod3tHGqBrJyI280mVnVrMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCx84CaRVACGcCJ3ZCrcA%2FY71XJywpMzywmPgc1VSmdQL1fZKW%2BCfwt854tvypFc1uQt2NUevgKaEcTQ5nV9EIqJchYaA5o1ygVdy96A%2FW6P%2BcoeY6JgaeqE1KqQs3%2B7VsrexSZyotY2eToSD3FLPiZqDMhemrbwHRs8TXAknTw2CUF9UAUV6ZKXhiTtzBSmdIFlkfG5ntbQ2%2BJ4PmUujbs5RmN7p9Ws5iIINxWvaCWrsbqIygZpmk2cvjSfcHO%2BHPC9gnfimfmMhdMtzZ5Llk%2B8Tl02sikf147QHKXSJ1nu3mv%2FDowMD64ZtDLeSsWPTG3Riv1WkXizVp8PwUrygzsvyxT2oqq1CWpUyfCLPS9q1%2Bct7sWUjcI9zBeik7KOyixI%2Fdl0gZ3JAM3R7rkqcfSl9SrxuFidpgO4BU3nK6XsmIqwadvqKCTAqRAF88KYvX2VpktQHTQ%2F1zceabGtLQwf8imqNMeN8EjGaFOH%2Fdr%2F0WKO%2Bummw2y%2F1AC4PtAhxc8FqFXC88rbi1kuNjiiGhca6KxTYmIlqrpnEdaWQ%2BSjotLgXNNgAMZSa4yZigO9tFxrgYc0KSpPZAr%2F8k3PoyOMqgMPp2BB9GoNFdG7lhE8b6IwzHMYI2L4%2Fv4f4ejIEIlNTMkc3VY0TRnFMJ2D9L0GOqUBz0IMHoXTtsVHPd05MVAU5KeOztXsEihGQes7gYeEZfYCZJLZWPDh3XdE1Td3hquiNZXY34YJb3BYqMKX9a%2FzbThcutRFi0RF0zURzXZCdKXdQ62AmL1ge9DwXfsJRIRKaSHiRnjbBgdyl3F9T%2BpqizHQWvR0%2FjuxqoPboUMSzqX1TAqH5dSlHruVE9kKA1MVDvpkN0rWFg7HeeCHtOF%2FBoMwRTG1&X-Amz-Signature=2a02e7263ba924c328aa3703d50cbb5fda2b7b430e91a23fbf6ca33fea995569&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYL6DOW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE0IWk2PV8swaHbReR98dhxSTXzCSusGJsMlMeK9M6jTAiEA%2FEt7jVXc%2Fpf05wtHd02eaMod3tHGqBrJyI280mVnVrMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCx84CaRVACGcCJ3ZCrcA%2FY71XJywpMzywmPgc1VSmdQL1fZKW%2BCfwt854tvypFc1uQt2NUevgKaEcTQ5nV9EIqJchYaA5o1ygVdy96A%2FW6P%2BcoeY6JgaeqE1KqQs3%2B7VsrexSZyotY2eToSD3FLPiZqDMhemrbwHRs8TXAknTw2CUF9UAUV6ZKXhiTtzBSmdIFlkfG5ntbQ2%2BJ4PmUujbs5RmN7p9Ws5iIINxWvaCWrsbqIygZpmk2cvjSfcHO%2BHPC9gnfimfmMhdMtzZ5Llk%2B8Tl02sikf147QHKXSJ1nu3mv%2FDowMD64ZtDLeSsWPTG3Riv1WkXizVp8PwUrygzsvyxT2oqq1CWpUyfCLPS9q1%2Bct7sWUjcI9zBeik7KOyixI%2Fdl0gZ3JAM3R7rkqcfSl9SrxuFidpgO4BU3nK6XsmIqwadvqKCTAqRAF88KYvX2VpktQHTQ%2F1zceabGtLQwf8imqNMeN8EjGaFOH%2Fdr%2F0WKO%2Bummw2y%2F1AC4PtAhxc8FqFXC88rbi1kuNjiiGhca6KxTYmIlqrpnEdaWQ%2BSjotLgXNNgAMZSa4yZigO9tFxrgYc0KSpPZAr%2F8k3PoyOMqgMPp2BB9GoNFdG7lhE8b6IwzHMYI2L4%2Fv4f4ejIEIlNTMkc3VY0TRnFMJ2D9L0GOqUBz0IMHoXTtsVHPd05MVAU5KeOztXsEihGQes7gYeEZfYCZJLZWPDh3XdE1Td3hquiNZXY34YJb3BYqMKX9a%2FzbThcutRFi0RF0zURzXZCdKXdQ62AmL1ge9DwXfsJRIRKaSHiRnjbBgdyl3F9T%2BpqizHQWvR0%2FjuxqoPboUMSzqX1TAqH5dSlHruVE9kKA1MVDvpkN0rWFg7HeeCHtOF%2FBoMwRTG1&X-Amz-Signature=7f1c22a4d2cf8232a97e9231c9bc787fcdb98671860649972d68b579053873f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYL6DOW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE0IWk2PV8swaHbReR98dhxSTXzCSusGJsMlMeK9M6jTAiEA%2FEt7jVXc%2Fpf05wtHd02eaMod3tHGqBrJyI280mVnVrMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCx84CaRVACGcCJ3ZCrcA%2FY71XJywpMzywmPgc1VSmdQL1fZKW%2BCfwt854tvypFc1uQt2NUevgKaEcTQ5nV9EIqJchYaA5o1ygVdy96A%2FW6P%2BcoeY6JgaeqE1KqQs3%2B7VsrexSZyotY2eToSD3FLPiZqDMhemrbwHRs8TXAknTw2CUF9UAUV6ZKXhiTtzBSmdIFlkfG5ntbQ2%2BJ4PmUujbs5RmN7p9Ws5iIINxWvaCWrsbqIygZpmk2cvjSfcHO%2BHPC9gnfimfmMhdMtzZ5Llk%2B8Tl02sikf147QHKXSJ1nu3mv%2FDowMD64ZtDLeSsWPTG3Riv1WkXizVp8PwUrygzsvyxT2oqq1CWpUyfCLPS9q1%2Bct7sWUjcI9zBeik7KOyixI%2Fdl0gZ3JAM3R7rkqcfSl9SrxuFidpgO4BU3nK6XsmIqwadvqKCTAqRAF88KYvX2VpktQHTQ%2F1zceabGtLQwf8imqNMeN8EjGaFOH%2Fdr%2F0WKO%2Bummw2y%2F1AC4PtAhxc8FqFXC88rbi1kuNjiiGhca6KxTYmIlqrpnEdaWQ%2BSjotLgXNNgAMZSa4yZigO9tFxrgYc0KSpPZAr%2F8k3PoyOMqgMPp2BB9GoNFdG7lhE8b6IwzHMYI2L4%2Fv4f4ejIEIlNTMkc3VY0TRnFMJ2D9L0GOqUBz0IMHoXTtsVHPd05MVAU5KeOztXsEihGQes7gYeEZfYCZJLZWPDh3XdE1Td3hquiNZXY34YJb3BYqMKX9a%2FzbThcutRFi0RF0zURzXZCdKXdQ62AmL1ge9DwXfsJRIRKaSHiRnjbBgdyl3F9T%2BpqizHQWvR0%2FjuxqoPboUMSzqX1TAqH5dSlHruVE9kKA1MVDvpkN0rWFg7HeeCHtOF%2FBoMwRTG1&X-Amz-Signature=567422512e58045169331f451963f81dd647a237557d5114e77dc01edd320e09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYL6DOW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE0IWk2PV8swaHbReR98dhxSTXzCSusGJsMlMeK9M6jTAiEA%2FEt7jVXc%2Fpf05wtHd02eaMod3tHGqBrJyI280mVnVrMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCx84CaRVACGcCJ3ZCrcA%2FY71XJywpMzywmPgc1VSmdQL1fZKW%2BCfwt854tvypFc1uQt2NUevgKaEcTQ5nV9EIqJchYaA5o1ygVdy96A%2FW6P%2BcoeY6JgaeqE1KqQs3%2B7VsrexSZyotY2eToSD3FLPiZqDMhemrbwHRs8TXAknTw2CUF9UAUV6ZKXhiTtzBSmdIFlkfG5ntbQ2%2BJ4PmUujbs5RmN7p9Ws5iIINxWvaCWrsbqIygZpmk2cvjSfcHO%2BHPC9gnfimfmMhdMtzZ5Llk%2B8Tl02sikf147QHKXSJ1nu3mv%2FDowMD64ZtDLeSsWPTG3Riv1WkXizVp8PwUrygzsvyxT2oqq1CWpUyfCLPS9q1%2Bct7sWUjcI9zBeik7KOyixI%2Fdl0gZ3JAM3R7rkqcfSl9SrxuFidpgO4BU3nK6XsmIqwadvqKCTAqRAF88KYvX2VpktQHTQ%2F1zceabGtLQwf8imqNMeN8EjGaFOH%2Fdr%2F0WKO%2Bummw2y%2F1AC4PtAhxc8FqFXC88rbi1kuNjiiGhca6KxTYmIlqrpnEdaWQ%2BSjotLgXNNgAMZSa4yZigO9tFxrgYc0KSpPZAr%2F8k3PoyOMqgMPp2BB9GoNFdG7lhE8b6IwzHMYI2L4%2Fv4f4ejIEIlNTMkc3VY0TRnFMJ2D9L0GOqUBz0IMHoXTtsVHPd05MVAU5KeOztXsEihGQes7gYeEZfYCZJLZWPDh3XdE1Td3hquiNZXY34YJb3BYqMKX9a%2FzbThcutRFi0RF0zURzXZCdKXdQ62AmL1ge9DwXfsJRIRKaSHiRnjbBgdyl3F9T%2BpqizHQWvR0%2FjuxqoPboUMSzqX1TAqH5dSlHruVE9kKA1MVDvpkN0rWFg7HeeCHtOF%2FBoMwRTG1&X-Amz-Signature=cd88b619bcb3a234ac0ed91bd1e5ac2a37b158e3e2c196fdedcb7bf61f0d7d22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
