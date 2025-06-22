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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJBEKPR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIq%2BCcZYdL0j0fBahyg2L5DNpzplC%2FTifmcpky8FpKtAiAidKsO0qvBGi5qjwglr%2FOdVPgG5O0TQX7sKci%2B2NmjcyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj9J1KG%2B0N%2FGoWNueKtwDUtyriMsny4tucZQyC53kJ2i%2BFFo%2F%2BRSMhdYl1WL0rgSY8afc5h8r8uTWjNdSTCcLTc35EHC4YMm5P3Kg1%2FiSN%2FMSnLP%2BfP2hFbpbym%2BC6NvRY9GVKnM%2F0kr2uO3f9V7kfqYJWLJbPPVUsVXiBGBuu%2B0vmpERWAQwQvcyWS12AYFVW31KVKvcO09ensV39SUokibKfQYrPj4i50M3qAXUXwjNsRjnYFlqBs1McdUXwmQi3KNLz0dz5ZnBWdEaCwU%2BNd2LgYowAcFGADu%2F%2F%2BrO3hyfglU3T%2FVBbFr%2B4%2FRj4HvcP2sldXryM%2FMjcbsZWdPJCZ0SoCGux%2BD71YrVbb%2B3M%2FPUpsC1gZvKkbp8BTybTJi%2BWnTjhNap6r%2FIXA9gPEqx6ax836w7j40Mx4Tg%2FxBHkMSeIOayiI%2B%2BhV0HrXsBgcdjNSo%2BsbZtMhcqJci%2FuV7aGuFGtsNlg6r9wbkbnACs5bMu2wvNJ6ACDPCwuoWNyufJx%2Fe8gmwRbAqTNQZ%2FSoyhE6l4maFgW7woOht47t12xMo7pBsVAVEhbopDCi5zYpo%2BVKTOStkxIRCCLJpW18jG3t0LJIOdr15q7OLaDITgp2z5fkVEhBfQT%2BHwFt1WfxGB7X6x7VnvdpOeBW8wycXdwgY6pgHAhIax91GFO%2BYNAl4BGDGAntKbj%2BuPlwH9SmREGiGmRKaUV4wUkIoZTELTPFNYuns9YPUgM2HiK1sA3G63GYtt2UBE85HpA57UC6H95kYVjXTKOMberBCIAzoPhBPDm9w4ez%2F11Z3%2FkadNsYwRXyeoLQ8hzXIaPaMxCJgayBfuzvu9rBjMWnzKAGUWcfJccbPNv%2FabCVlOT12yHQW%2BxVUdY1U5u4a4&X-Amz-Signature=7e6eb831b3433437039d689795baa053f2ec10687eee084bd78bef43876c4c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJBEKPR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIq%2BCcZYdL0j0fBahyg2L5DNpzplC%2FTifmcpky8FpKtAiAidKsO0qvBGi5qjwglr%2FOdVPgG5O0TQX7sKci%2B2NmjcyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj9J1KG%2B0N%2FGoWNueKtwDUtyriMsny4tucZQyC53kJ2i%2BFFo%2F%2BRSMhdYl1WL0rgSY8afc5h8r8uTWjNdSTCcLTc35EHC4YMm5P3Kg1%2FiSN%2FMSnLP%2BfP2hFbpbym%2BC6NvRY9GVKnM%2F0kr2uO3f9V7kfqYJWLJbPPVUsVXiBGBuu%2B0vmpERWAQwQvcyWS12AYFVW31KVKvcO09ensV39SUokibKfQYrPj4i50M3qAXUXwjNsRjnYFlqBs1McdUXwmQi3KNLz0dz5ZnBWdEaCwU%2BNd2LgYowAcFGADu%2F%2F%2BrO3hyfglU3T%2FVBbFr%2B4%2FRj4HvcP2sldXryM%2FMjcbsZWdPJCZ0SoCGux%2BD71YrVbb%2B3M%2FPUpsC1gZvKkbp8BTybTJi%2BWnTjhNap6r%2FIXA9gPEqx6ax836w7j40Mx4Tg%2FxBHkMSeIOayiI%2B%2BhV0HrXsBgcdjNSo%2BsbZtMhcqJci%2FuV7aGuFGtsNlg6r9wbkbnACs5bMu2wvNJ6ACDPCwuoWNyufJx%2Fe8gmwRbAqTNQZ%2FSoyhE6l4maFgW7woOht47t12xMo7pBsVAVEhbopDCi5zYpo%2BVKTOStkxIRCCLJpW18jG3t0LJIOdr15q7OLaDITgp2z5fkVEhBfQT%2BHwFt1WfxGB7X6x7VnvdpOeBW8wycXdwgY6pgHAhIax91GFO%2BYNAl4BGDGAntKbj%2BuPlwH9SmREGiGmRKaUV4wUkIoZTELTPFNYuns9YPUgM2HiK1sA3G63GYtt2UBE85HpA57UC6H95kYVjXTKOMberBCIAzoPhBPDm9w4ez%2F11Z3%2FkadNsYwRXyeoLQ8hzXIaPaMxCJgayBfuzvu9rBjMWnzKAGUWcfJccbPNv%2FabCVlOT12yHQW%2BxVUdY1U5u4a4&X-Amz-Signature=9ac7d6904f825137668bb8901657d15fc6cbfe6c32868d52ea8a2a5e44c081be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJBEKPR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIq%2BCcZYdL0j0fBahyg2L5DNpzplC%2FTifmcpky8FpKtAiAidKsO0qvBGi5qjwglr%2FOdVPgG5O0TQX7sKci%2B2NmjcyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj9J1KG%2B0N%2FGoWNueKtwDUtyriMsny4tucZQyC53kJ2i%2BFFo%2F%2BRSMhdYl1WL0rgSY8afc5h8r8uTWjNdSTCcLTc35EHC4YMm5P3Kg1%2FiSN%2FMSnLP%2BfP2hFbpbym%2BC6NvRY9GVKnM%2F0kr2uO3f9V7kfqYJWLJbPPVUsVXiBGBuu%2B0vmpERWAQwQvcyWS12AYFVW31KVKvcO09ensV39SUokibKfQYrPj4i50M3qAXUXwjNsRjnYFlqBs1McdUXwmQi3KNLz0dz5ZnBWdEaCwU%2BNd2LgYowAcFGADu%2F%2F%2BrO3hyfglU3T%2FVBbFr%2B4%2FRj4HvcP2sldXryM%2FMjcbsZWdPJCZ0SoCGux%2BD71YrVbb%2B3M%2FPUpsC1gZvKkbp8BTybTJi%2BWnTjhNap6r%2FIXA9gPEqx6ax836w7j40Mx4Tg%2FxBHkMSeIOayiI%2B%2BhV0HrXsBgcdjNSo%2BsbZtMhcqJci%2FuV7aGuFGtsNlg6r9wbkbnACs5bMu2wvNJ6ACDPCwuoWNyufJx%2Fe8gmwRbAqTNQZ%2FSoyhE6l4maFgW7woOht47t12xMo7pBsVAVEhbopDCi5zYpo%2BVKTOStkxIRCCLJpW18jG3t0LJIOdr15q7OLaDITgp2z5fkVEhBfQT%2BHwFt1WfxGB7X6x7VnvdpOeBW8wycXdwgY6pgHAhIax91GFO%2BYNAl4BGDGAntKbj%2BuPlwH9SmREGiGmRKaUV4wUkIoZTELTPFNYuns9YPUgM2HiK1sA3G63GYtt2UBE85HpA57UC6H95kYVjXTKOMberBCIAzoPhBPDm9w4ez%2F11Z3%2FkadNsYwRXyeoLQ8hzXIaPaMxCJgayBfuzvu9rBjMWnzKAGUWcfJccbPNv%2FabCVlOT12yHQW%2BxVUdY1U5u4a4&X-Amz-Signature=0b3814d3423aa610fc03ffbd3805a80841287d323b937a96734449837c1a1c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJBEKPR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIq%2BCcZYdL0j0fBahyg2L5DNpzplC%2FTifmcpky8FpKtAiAidKsO0qvBGi5qjwglr%2FOdVPgG5O0TQX7sKci%2B2NmjcyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj9J1KG%2B0N%2FGoWNueKtwDUtyriMsny4tucZQyC53kJ2i%2BFFo%2F%2BRSMhdYl1WL0rgSY8afc5h8r8uTWjNdSTCcLTc35EHC4YMm5P3Kg1%2FiSN%2FMSnLP%2BfP2hFbpbym%2BC6NvRY9GVKnM%2F0kr2uO3f9V7kfqYJWLJbPPVUsVXiBGBuu%2B0vmpERWAQwQvcyWS12AYFVW31KVKvcO09ensV39SUokibKfQYrPj4i50M3qAXUXwjNsRjnYFlqBs1McdUXwmQi3KNLz0dz5ZnBWdEaCwU%2BNd2LgYowAcFGADu%2F%2F%2BrO3hyfglU3T%2FVBbFr%2B4%2FRj4HvcP2sldXryM%2FMjcbsZWdPJCZ0SoCGux%2BD71YrVbb%2B3M%2FPUpsC1gZvKkbp8BTybTJi%2BWnTjhNap6r%2FIXA9gPEqx6ax836w7j40Mx4Tg%2FxBHkMSeIOayiI%2B%2BhV0HrXsBgcdjNSo%2BsbZtMhcqJci%2FuV7aGuFGtsNlg6r9wbkbnACs5bMu2wvNJ6ACDPCwuoWNyufJx%2Fe8gmwRbAqTNQZ%2FSoyhE6l4maFgW7woOht47t12xMo7pBsVAVEhbopDCi5zYpo%2BVKTOStkxIRCCLJpW18jG3t0LJIOdr15q7OLaDITgp2z5fkVEhBfQT%2BHwFt1WfxGB7X6x7VnvdpOeBW8wycXdwgY6pgHAhIax91GFO%2BYNAl4BGDGAntKbj%2BuPlwH9SmREGiGmRKaUV4wUkIoZTELTPFNYuns9YPUgM2HiK1sA3G63GYtt2UBE85HpA57UC6H95kYVjXTKOMberBCIAzoPhBPDm9w4ez%2F11Z3%2FkadNsYwRXyeoLQ8hzXIaPaMxCJgayBfuzvu9rBjMWnzKAGUWcfJccbPNv%2FabCVlOT12yHQW%2BxVUdY1U5u4a4&X-Amz-Signature=e6b425fc3ef99217e3eae8c2c1deacd53a8f6fab75ab0ae414912805839bf4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJBEKPR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIq%2BCcZYdL0j0fBahyg2L5DNpzplC%2FTifmcpky8FpKtAiAidKsO0qvBGi5qjwglr%2FOdVPgG5O0TQX7sKci%2B2NmjcyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj9J1KG%2B0N%2FGoWNueKtwDUtyriMsny4tucZQyC53kJ2i%2BFFo%2F%2BRSMhdYl1WL0rgSY8afc5h8r8uTWjNdSTCcLTc35EHC4YMm5P3Kg1%2FiSN%2FMSnLP%2BfP2hFbpbym%2BC6NvRY9GVKnM%2F0kr2uO3f9V7kfqYJWLJbPPVUsVXiBGBuu%2B0vmpERWAQwQvcyWS12AYFVW31KVKvcO09ensV39SUokibKfQYrPj4i50M3qAXUXwjNsRjnYFlqBs1McdUXwmQi3KNLz0dz5ZnBWdEaCwU%2BNd2LgYowAcFGADu%2F%2F%2BrO3hyfglU3T%2FVBbFr%2B4%2FRj4HvcP2sldXryM%2FMjcbsZWdPJCZ0SoCGux%2BD71YrVbb%2B3M%2FPUpsC1gZvKkbp8BTybTJi%2BWnTjhNap6r%2FIXA9gPEqx6ax836w7j40Mx4Tg%2FxBHkMSeIOayiI%2B%2BhV0HrXsBgcdjNSo%2BsbZtMhcqJci%2FuV7aGuFGtsNlg6r9wbkbnACs5bMu2wvNJ6ACDPCwuoWNyufJx%2Fe8gmwRbAqTNQZ%2FSoyhE6l4maFgW7woOht47t12xMo7pBsVAVEhbopDCi5zYpo%2BVKTOStkxIRCCLJpW18jG3t0LJIOdr15q7OLaDITgp2z5fkVEhBfQT%2BHwFt1WfxGB7X6x7VnvdpOeBW8wycXdwgY6pgHAhIax91GFO%2BYNAl4BGDGAntKbj%2BuPlwH9SmREGiGmRKaUV4wUkIoZTELTPFNYuns9YPUgM2HiK1sA3G63GYtt2UBE85HpA57UC6H95kYVjXTKOMberBCIAzoPhBPDm9w4ez%2F11Z3%2FkadNsYwRXyeoLQ8hzXIaPaMxCJgayBfuzvu9rBjMWnzKAGUWcfJccbPNv%2FabCVlOT12yHQW%2BxVUdY1U5u4a4&X-Amz-Signature=d11e2b5c27d4189e6906ed744dc133913a0f312c9b9db3a89329f82974356951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJBEKPR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIq%2BCcZYdL0j0fBahyg2L5DNpzplC%2FTifmcpky8FpKtAiAidKsO0qvBGi5qjwglr%2FOdVPgG5O0TQX7sKci%2B2NmjcyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj9J1KG%2B0N%2FGoWNueKtwDUtyriMsny4tucZQyC53kJ2i%2BFFo%2F%2BRSMhdYl1WL0rgSY8afc5h8r8uTWjNdSTCcLTc35EHC4YMm5P3Kg1%2FiSN%2FMSnLP%2BfP2hFbpbym%2BC6NvRY9GVKnM%2F0kr2uO3f9V7kfqYJWLJbPPVUsVXiBGBuu%2B0vmpERWAQwQvcyWS12AYFVW31KVKvcO09ensV39SUokibKfQYrPj4i50M3qAXUXwjNsRjnYFlqBs1McdUXwmQi3KNLz0dz5ZnBWdEaCwU%2BNd2LgYowAcFGADu%2F%2F%2BrO3hyfglU3T%2FVBbFr%2B4%2FRj4HvcP2sldXryM%2FMjcbsZWdPJCZ0SoCGux%2BD71YrVbb%2B3M%2FPUpsC1gZvKkbp8BTybTJi%2BWnTjhNap6r%2FIXA9gPEqx6ax836w7j40Mx4Tg%2FxBHkMSeIOayiI%2B%2BhV0HrXsBgcdjNSo%2BsbZtMhcqJci%2FuV7aGuFGtsNlg6r9wbkbnACs5bMu2wvNJ6ACDPCwuoWNyufJx%2Fe8gmwRbAqTNQZ%2FSoyhE6l4maFgW7woOht47t12xMo7pBsVAVEhbopDCi5zYpo%2BVKTOStkxIRCCLJpW18jG3t0LJIOdr15q7OLaDITgp2z5fkVEhBfQT%2BHwFt1WfxGB7X6x7VnvdpOeBW8wycXdwgY6pgHAhIax91GFO%2BYNAl4BGDGAntKbj%2BuPlwH9SmREGiGmRKaUV4wUkIoZTELTPFNYuns9YPUgM2HiK1sA3G63GYtt2UBE85HpA57UC6H95kYVjXTKOMberBCIAzoPhBPDm9w4ez%2F11Z3%2FkadNsYwRXyeoLQ8hzXIaPaMxCJgayBfuzvu9rBjMWnzKAGUWcfJccbPNv%2FabCVlOT12yHQW%2BxVUdY1U5u4a4&X-Amz-Signature=82bdf7351eef1d2d76ba047a7a3a5927e9a7a93b1dfed69ffca98be120e0855e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJBEKPR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIq%2BCcZYdL0j0fBahyg2L5DNpzplC%2FTifmcpky8FpKtAiAidKsO0qvBGi5qjwglr%2FOdVPgG5O0TQX7sKci%2B2NmjcyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj9J1KG%2B0N%2FGoWNueKtwDUtyriMsny4tucZQyC53kJ2i%2BFFo%2F%2BRSMhdYl1WL0rgSY8afc5h8r8uTWjNdSTCcLTc35EHC4YMm5P3Kg1%2FiSN%2FMSnLP%2BfP2hFbpbym%2BC6NvRY9GVKnM%2F0kr2uO3f9V7kfqYJWLJbPPVUsVXiBGBuu%2B0vmpERWAQwQvcyWS12AYFVW31KVKvcO09ensV39SUokibKfQYrPj4i50M3qAXUXwjNsRjnYFlqBs1McdUXwmQi3KNLz0dz5ZnBWdEaCwU%2BNd2LgYowAcFGADu%2F%2F%2BrO3hyfglU3T%2FVBbFr%2B4%2FRj4HvcP2sldXryM%2FMjcbsZWdPJCZ0SoCGux%2BD71YrVbb%2B3M%2FPUpsC1gZvKkbp8BTybTJi%2BWnTjhNap6r%2FIXA9gPEqx6ax836w7j40Mx4Tg%2FxBHkMSeIOayiI%2B%2BhV0HrXsBgcdjNSo%2BsbZtMhcqJci%2FuV7aGuFGtsNlg6r9wbkbnACs5bMu2wvNJ6ACDPCwuoWNyufJx%2Fe8gmwRbAqTNQZ%2FSoyhE6l4maFgW7woOht47t12xMo7pBsVAVEhbopDCi5zYpo%2BVKTOStkxIRCCLJpW18jG3t0LJIOdr15q7OLaDITgp2z5fkVEhBfQT%2BHwFt1WfxGB7X6x7VnvdpOeBW8wycXdwgY6pgHAhIax91GFO%2BYNAl4BGDGAntKbj%2BuPlwH9SmREGiGmRKaUV4wUkIoZTELTPFNYuns9YPUgM2HiK1sA3G63GYtt2UBE85HpA57UC6H95kYVjXTKOMberBCIAzoPhBPDm9w4ez%2F11Z3%2FkadNsYwRXyeoLQ8hzXIaPaMxCJgayBfuzvu9rBjMWnzKAGUWcfJccbPNv%2FabCVlOT12yHQW%2BxVUdY1U5u4a4&X-Amz-Signature=1287a2aa32cecf0cc6d844800f396b47dab2368a5b9342f7e4e89544966774ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJBEKPR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIq%2BCcZYdL0j0fBahyg2L5DNpzplC%2FTifmcpky8FpKtAiAidKsO0qvBGi5qjwglr%2FOdVPgG5O0TQX7sKci%2B2NmjcyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj9J1KG%2B0N%2FGoWNueKtwDUtyriMsny4tucZQyC53kJ2i%2BFFo%2F%2BRSMhdYl1WL0rgSY8afc5h8r8uTWjNdSTCcLTc35EHC4YMm5P3Kg1%2FiSN%2FMSnLP%2BfP2hFbpbym%2BC6NvRY9GVKnM%2F0kr2uO3f9V7kfqYJWLJbPPVUsVXiBGBuu%2B0vmpERWAQwQvcyWS12AYFVW31KVKvcO09ensV39SUokibKfQYrPj4i50M3qAXUXwjNsRjnYFlqBs1McdUXwmQi3KNLz0dz5ZnBWdEaCwU%2BNd2LgYowAcFGADu%2F%2F%2BrO3hyfglU3T%2FVBbFr%2B4%2FRj4HvcP2sldXryM%2FMjcbsZWdPJCZ0SoCGux%2BD71YrVbb%2B3M%2FPUpsC1gZvKkbp8BTybTJi%2BWnTjhNap6r%2FIXA9gPEqx6ax836w7j40Mx4Tg%2FxBHkMSeIOayiI%2B%2BhV0HrXsBgcdjNSo%2BsbZtMhcqJci%2FuV7aGuFGtsNlg6r9wbkbnACs5bMu2wvNJ6ACDPCwuoWNyufJx%2Fe8gmwRbAqTNQZ%2FSoyhE6l4maFgW7woOht47t12xMo7pBsVAVEhbopDCi5zYpo%2BVKTOStkxIRCCLJpW18jG3t0LJIOdr15q7OLaDITgp2z5fkVEhBfQT%2BHwFt1WfxGB7X6x7VnvdpOeBW8wycXdwgY6pgHAhIax91GFO%2BYNAl4BGDGAntKbj%2BuPlwH9SmREGiGmRKaUV4wUkIoZTELTPFNYuns9YPUgM2HiK1sA3G63GYtt2UBE85HpA57UC6H95kYVjXTKOMberBCIAzoPhBPDm9w4ez%2F11Z3%2FkadNsYwRXyeoLQ8hzXIaPaMxCJgayBfuzvu9rBjMWnzKAGUWcfJccbPNv%2FabCVlOT12yHQW%2BxVUdY1U5u4a4&X-Amz-Signature=1c9bc43228e8b909d18e69c4412c189057930afef34ff23f8b24a97686cb2ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
