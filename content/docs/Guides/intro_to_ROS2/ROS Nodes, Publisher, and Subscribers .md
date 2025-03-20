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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NANKU4I%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeODrDd2iBUG2pjMKCI3F0sNYmBXrBWqJhqKn3iAbDigIhAOYuqydcPMTvNGo%2F%2Fh3wD7V%2BgBpxfKfvRZuOWZOC5e5xKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBoxn5CD2lhrb6TAcq3ANe4LYImskDNaIwKufDE91nG1VkF0WMWennZ8fzIxjQCN8h78tokdog8FmQB093qToCr499F52Zu3LZTwSnfPc00gnaeyYLG2uTD75NtktX1kmKMdksxD03At0SQXk1dFmRVAwsCosdH2QcMwNfW5l2fbgnJSI%2BLjSHBindpuq7kFEB0Re%2BRFEDhJ4jAhQby%2BqNwOct02eAoIxl1MHNg0M0EP2VRx3anB8Idfs1o5wI2q8dqG0RFn15upIohKW6wyrP5ux1IkuLsf0DCGUhIV1HfHohmO%2FRKi4e%2B9zChpWJiGW8Yvebi82TT4c4%2F1117lj7pT0c351kFE%2Bw7Bqxhp18vZNcUYVapmLKIifH5nP4X8x4Eyfpn0FGk1M0gmB1z8JuRJ76o3XG7yXQGjlWtlaOXoX9jKgTKEz3TLdQNtq2Uo%2FX6avOq%2Bo%2BNhMX0QPf%2FuyePCYjo1jlLgG8QuSNACXWe%2BlQJTMI4ehack4bLXi5x%2BASKBLWU3f9qHB8bhRpsurVcWr5y2gNBLgNh1stMEWilxfsmLcVbWH4VBAFCrFhZjMjm%2Bm8ZOeyKusNZu0A1LTKdk%2FjMgimlHjFKQZbqBgP%2FVkn2XHL9x2JlzaioLEK5pGEF1kT5RseyzDEWDDppe%2B%2BBjqkAbkqYYokDs1lHPSvYwnJcrSCAh0Y%2Fs2MjpYyyzQwLSR2blfGAMDPGafzyj6arrGRsRg%2BnryZxOCpMDrKc%2F5ZCAGyL4aiDqR9oHRWbpXe95VEPtsYYiGwOwlz0oSjMEkuBrn1pxOrM%2Fct9L%2BDSiWU78omsPkd3Wd6Jfca4aDPUq4ZyQUJsYRuHjFTSDIVzPsPt%2Bg8EwzIt147IdcFNy%2F6f5cKoJBP&X-Amz-Signature=6d3f10104f00bc1667bb246f1e42c856aa6a61395102bcb39989eb190ae342b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NANKU4I%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeODrDd2iBUG2pjMKCI3F0sNYmBXrBWqJhqKn3iAbDigIhAOYuqydcPMTvNGo%2F%2Fh3wD7V%2BgBpxfKfvRZuOWZOC5e5xKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBoxn5CD2lhrb6TAcq3ANe4LYImskDNaIwKufDE91nG1VkF0WMWennZ8fzIxjQCN8h78tokdog8FmQB093qToCr499F52Zu3LZTwSnfPc00gnaeyYLG2uTD75NtktX1kmKMdksxD03At0SQXk1dFmRVAwsCosdH2QcMwNfW5l2fbgnJSI%2BLjSHBindpuq7kFEB0Re%2BRFEDhJ4jAhQby%2BqNwOct02eAoIxl1MHNg0M0EP2VRx3anB8Idfs1o5wI2q8dqG0RFn15upIohKW6wyrP5ux1IkuLsf0DCGUhIV1HfHohmO%2FRKi4e%2B9zChpWJiGW8Yvebi82TT4c4%2F1117lj7pT0c351kFE%2Bw7Bqxhp18vZNcUYVapmLKIifH5nP4X8x4Eyfpn0FGk1M0gmB1z8JuRJ76o3XG7yXQGjlWtlaOXoX9jKgTKEz3TLdQNtq2Uo%2FX6avOq%2Bo%2BNhMX0QPf%2FuyePCYjo1jlLgG8QuSNACXWe%2BlQJTMI4ehack4bLXi5x%2BASKBLWU3f9qHB8bhRpsurVcWr5y2gNBLgNh1stMEWilxfsmLcVbWH4VBAFCrFhZjMjm%2Bm8ZOeyKusNZu0A1LTKdk%2FjMgimlHjFKQZbqBgP%2FVkn2XHL9x2JlzaioLEK5pGEF1kT5RseyzDEWDDppe%2B%2BBjqkAbkqYYokDs1lHPSvYwnJcrSCAh0Y%2Fs2MjpYyyzQwLSR2blfGAMDPGafzyj6arrGRsRg%2BnryZxOCpMDrKc%2F5ZCAGyL4aiDqR9oHRWbpXe95VEPtsYYiGwOwlz0oSjMEkuBrn1pxOrM%2Fct9L%2BDSiWU78omsPkd3Wd6Jfca4aDPUq4ZyQUJsYRuHjFTSDIVzPsPt%2Bg8EwzIt147IdcFNy%2F6f5cKoJBP&X-Amz-Signature=7439b41280e172ad6dfb5bf991fd56a8670bc922bc7f5d3a0f7d962457e3f143&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NANKU4I%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeODrDd2iBUG2pjMKCI3F0sNYmBXrBWqJhqKn3iAbDigIhAOYuqydcPMTvNGo%2F%2Fh3wD7V%2BgBpxfKfvRZuOWZOC5e5xKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBoxn5CD2lhrb6TAcq3ANe4LYImskDNaIwKufDE91nG1VkF0WMWennZ8fzIxjQCN8h78tokdog8FmQB093qToCr499F52Zu3LZTwSnfPc00gnaeyYLG2uTD75NtktX1kmKMdksxD03At0SQXk1dFmRVAwsCosdH2QcMwNfW5l2fbgnJSI%2BLjSHBindpuq7kFEB0Re%2BRFEDhJ4jAhQby%2BqNwOct02eAoIxl1MHNg0M0EP2VRx3anB8Idfs1o5wI2q8dqG0RFn15upIohKW6wyrP5ux1IkuLsf0DCGUhIV1HfHohmO%2FRKi4e%2B9zChpWJiGW8Yvebi82TT4c4%2F1117lj7pT0c351kFE%2Bw7Bqxhp18vZNcUYVapmLKIifH5nP4X8x4Eyfpn0FGk1M0gmB1z8JuRJ76o3XG7yXQGjlWtlaOXoX9jKgTKEz3TLdQNtq2Uo%2FX6avOq%2Bo%2BNhMX0QPf%2FuyePCYjo1jlLgG8QuSNACXWe%2BlQJTMI4ehack4bLXi5x%2BASKBLWU3f9qHB8bhRpsurVcWr5y2gNBLgNh1stMEWilxfsmLcVbWH4VBAFCrFhZjMjm%2Bm8ZOeyKusNZu0A1LTKdk%2FjMgimlHjFKQZbqBgP%2FVkn2XHL9x2JlzaioLEK5pGEF1kT5RseyzDEWDDppe%2B%2BBjqkAbkqYYokDs1lHPSvYwnJcrSCAh0Y%2Fs2MjpYyyzQwLSR2blfGAMDPGafzyj6arrGRsRg%2BnryZxOCpMDrKc%2F5ZCAGyL4aiDqR9oHRWbpXe95VEPtsYYiGwOwlz0oSjMEkuBrn1pxOrM%2Fct9L%2BDSiWU78omsPkd3Wd6Jfca4aDPUq4ZyQUJsYRuHjFTSDIVzPsPt%2Bg8EwzIt147IdcFNy%2F6f5cKoJBP&X-Amz-Signature=0c0f26363b4507be8adefbea501677d802f89aa2df3b36c7b9154e464a95c0a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NANKU4I%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeODrDd2iBUG2pjMKCI3F0sNYmBXrBWqJhqKn3iAbDigIhAOYuqydcPMTvNGo%2F%2Fh3wD7V%2BgBpxfKfvRZuOWZOC5e5xKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBoxn5CD2lhrb6TAcq3ANe4LYImskDNaIwKufDE91nG1VkF0WMWennZ8fzIxjQCN8h78tokdog8FmQB093qToCr499F52Zu3LZTwSnfPc00gnaeyYLG2uTD75NtktX1kmKMdksxD03At0SQXk1dFmRVAwsCosdH2QcMwNfW5l2fbgnJSI%2BLjSHBindpuq7kFEB0Re%2BRFEDhJ4jAhQby%2BqNwOct02eAoIxl1MHNg0M0EP2VRx3anB8Idfs1o5wI2q8dqG0RFn15upIohKW6wyrP5ux1IkuLsf0DCGUhIV1HfHohmO%2FRKi4e%2B9zChpWJiGW8Yvebi82TT4c4%2F1117lj7pT0c351kFE%2Bw7Bqxhp18vZNcUYVapmLKIifH5nP4X8x4Eyfpn0FGk1M0gmB1z8JuRJ76o3XG7yXQGjlWtlaOXoX9jKgTKEz3TLdQNtq2Uo%2FX6avOq%2Bo%2BNhMX0QPf%2FuyePCYjo1jlLgG8QuSNACXWe%2BlQJTMI4ehack4bLXi5x%2BASKBLWU3f9qHB8bhRpsurVcWr5y2gNBLgNh1stMEWilxfsmLcVbWH4VBAFCrFhZjMjm%2Bm8ZOeyKusNZu0A1LTKdk%2FjMgimlHjFKQZbqBgP%2FVkn2XHL9x2JlzaioLEK5pGEF1kT5RseyzDEWDDppe%2B%2BBjqkAbkqYYokDs1lHPSvYwnJcrSCAh0Y%2Fs2MjpYyyzQwLSR2blfGAMDPGafzyj6arrGRsRg%2BnryZxOCpMDrKc%2F5ZCAGyL4aiDqR9oHRWbpXe95VEPtsYYiGwOwlz0oSjMEkuBrn1pxOrM%2Fct9L%2BDSiWU78omsPkd3Wd6Jfca4aDPUq4ZyQUJsYRuHjFTSDIVzPsPt%2Bg8EwzIt147IdcFNy%2F6f5cKoJBP&X-Amz-Signature=91810c50a3f36b145640277ecb74020f23eb2267286d5c8c4d83e6b330cd08d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NANKU4I%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeODrDd2iBUG2pjMKCI3F0sNYmBXrBWqJhqKn3iAbDigIhAOYuqydcPMTvNGo%2F%2Fh3wD7V%2BgBpxfKfvRZuOWZOC5e5xKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBoxn5CD2lhrb6TAcq3ANe4LYImskDNaIwKufDE91nG1VkF0WMWennZ8fzIxjQCN8h78tokdog8FmQB093qToCr499F52Zu3LZTwSnfPc00gnaeyYLG2uTD75NtktX1kmKMdksxD03At0SQXk1dFmRVAwsCosdH2QcMwNfW5l2fbgnJSI%2BLjSHBindpuq7kFEB0Re%2BRFEDhJ4jAhQby%2BqNwOct02eAoIxl1MHNg0M0EP2VRx3anB8Idfs1o5wI2q8dqG0RFn15upIohKW6wyrP5ux1IkuLsf0DCGUhIV1HfHohmO%2FRKi4e%2B9zChpWJiGW8Yvebi82TT4c4%2F1117lj7pT0c351kFE%2Bw7Bqxhp18vZNcUYVapmLKIifH5nP4X8x4Eyfpn0FGk1M0gmB1z8JuRJ76o3XG7yXQGjlWtlaOXoX9jKgTKEz3TLdQNtq2Uo%2FX6avOq%2Bo%2BNhMX0QPf%2FuyePCYjo1jlLgG8QuSNACXWe%2BlQJTMI4ehack4bLXi5x%2BASKBLWU3f9qHB8bhRpsurVcWr5y2gNBLgNh1stMEWilxfsmLcVbWH4VBAFCrFhZjMjm%2Bm8ZOeyKusNZu0A1LTKdk%2FjMgimlHjFKQZbqBgP%2FVkn2XHL9x2JlzaioLEK5pGEF1kT5RseyzDEWDDppe%2B%2BBjqkAbkqYYokDs1lHPSvYwnJcrSCAh0Y%2Fs2MjpYyyzQwLSR2blfGAMDPGafzyj6arrGRsRg%2BnryZxOCpMDrKc%2F5ZCAGyL4aiDqR9oHRWbpXe95VEPtsYYiGwOwlz0oSjMEkuBrn1pxOrM%2Fct9L%2BDSiWU78omsPkd3Wd6Jfca4aDPUq4ZyQUJsYRuHjFTSDIVzPsPt%2Bg8EwzIt147IdcFNy%2F6f5cKoJBP&X-Amz-Signature=85bd6a1edc97c414b1609bd9fed0875aac593abf36b10a5fa46c0fb348ef19e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NANKU4I%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeODrDd2iBUG2pjMKCI3F0sNYmBXrBWqJhqKn3iAbDigIhAOYuqydcPMTvNGo%2F%2Fh3wD7V%2BgBpxfKfvRZuOWZOC5e5xKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBoxn5CD2lhrb6TAcq3ANe4LYImskDNaIwKufDE91nG1VkF0WMWennZ8fzIxjQCN8h78tokdog8FmQB093qToCr499F52Zu3LZTwSnfPc00gnaeyYLG2uTD75NtktX1kmKMdksxD03At0SQXk1dFmRVAwsCosdH2QcMwNfW5l2fbgnJSI%2BLjSHBindpuq7kFEB0Re%2BRFEDhJ4jAhQby%2BqNwOct02eAoIxl1MHNg0M0EP2VRx3anB8Idfs1o5wI2q8dqG0RFn15upIohKW6wyrP5ux1IkuLsf0DCGUhIV1HfHohmO%2FRKi4e%2B9zChpWJiGW8Yvebi82TT4c4%2F1117lj7pT0c351kFE%2Bw7Bqxhp18vZNcUYVapmLKIifH5nP4X8x4Eyfpn0FGk1M0gmB1z8JuRJ76o3XG7yXQGjlWtlaOXoX9jKgTKEz3TLdQNtq2Uo%2FX6avOq%2Bo%2BNhMX0QPf%2FuyePCYjo1jlLgG8QuSNACXWe%2BlQJTMI4ehack4bLXi5x%2BASKBLWU3f9qHB8bhRpsurVcWr5y2gNBLgNh1stMEWilxfsmLcVbWH4VBAFCrFhZjMjm%2Bm8ZOeyKusNZu0A1LTKdk%2FjMgimlHjFKQZbqBgP%2FVkn2XHL9x2JlzaioLEK5pGEF1kT5RseyzDEWDDppe%2B%2BBjqkAbkqYYokDs1lHPSvYwnJcrSCAh0Y%2Fs2MjpYyyzQwLSR2blfGAMDPGafzyj6arrGRsRg%2BnryZxOCpMDrKc%2F5ZCAGyL4aiDqR9oHRWbpXe95VEPtsYYiGwOwlz0oSjMEkuBrn1pxOrM%2Fct9L%2BDSiWU78omsPkd3Wd6Jfca4aDPUq4ZyQUJsYRuHjFTSDIVzPsPt%2Bg8EwzIt147IdcFNy%2F6f5cKoJBP&X-Amz-Signature=4a68a49ea64e3e52fe0d91caf36e8f94f29af537815a2927f3dc74b080a3057b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NANKU4I%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeODrDd2iBUG2pjMKCI3F0sNYmBXrBWqJhqKn3iAbDigIhAOYuqydcPMTvNGo%2F%2Fh3wD7V%2BgBpxfKfvRZuOWZOC5e5xKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBoxn5CD2lhrb6TAcq3ANe4LYImskDNaIwKufDE91nG1VkF0WMWennZ8fzIxjQCN8h78tokdog8FmQB093qToCr499F52Zu3LZTwSnfPc00gnaeyYLG2uTD75NtktX1kmKMdksxD03At0SQXk1dFmRVAwsCosdH2QcMwNfW5l2fbgnJSI%2BLjSHBindpuq7kFEB0Re%2BRFEDhJ4jAhQby%2BqNwOct02eAoIxl1MHNg0M0EP2VRx3anB8Idfs1o5wI2q8dqG0RFn15upIohKW6wyrP5ux1IkuLsf0DCGUhIV1HfHohmO%2FRKi4e%2B9zChpWJiGW8Yvebi82TT4c4%2F1117lj7pT0c351kFE%2Bw7Bqxhp18vZNcUYVapmLKIifH5nP4X8x4Eyfpn0FGk1M0gmB1z8JuRJ76o3XG7yXQGjlWtlaOXoX9jKgTKEz3TLdQNtq2Uo%2FX6avOq%2Bo%2BNhMX0QPf%2FuyePCYjo1jlLgG8QuSNACXWe%2BlQJTMI4ehack4bLXi5x%2BASKBLWU3f9qHB8bhRpsurVcWr5y2gNBLgNh1stMEWilxfsmLcVbWH4VBAFCrFhZjMjm%2Bm8ZOeyKusNZu0A1LTKdk%2FjMgimlHjFKQZbqBgP%2FVkn2XHL9x2JlzaioLEK5pGEF1kT5RseyzDEWDDppe%2B%2BBjqkAbkqYYokDs1lHPSvYwnJcrSCAh0Y%2Fs2MjpYyyzQwLSR2blfGAMDPGafzyj6arrGRsRg%2BnryZxOCpMDrKc%2F5ZCAGyL4aiDqR9oHRWbpXe95VEPtsYYiGwOwlz0oSjMEkuBrn1pxOrM%2Fct9L%2BDSiWU78omsPkd3Wd6Jfca4aDPUq4ZyQUJsYRuHjFTSDIVzPsPt%2Bg8EwzIt147IdcFNy%2F6f5cKoJBP&X-Amz-Signature=346ae832257c8f85b237181969ea5d584e16cc2122f9046e227b414a6c7736ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NANKU4I%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCeODrDd2iBUG2pjMKCI3F0sNYmBXrBWqJhqKn3iAbDigIhAOYuqydcPMTvNGo%2F%2Fh3wD7V%2BgBpxfKfvRZuOWZOC5e5xKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBoxn5CD2lhrb6TAcq3ANe4LYImskDNaIwKufDE91nG1VkF0WMWennZ8fzIxjQCN8h78tokdog8FmQB093qToCr499F52Zu3LZTwSnfPc00gnaeyYLG2uTD75NtktX1kmKMdksxD03At0SQXk1dFmRVAwsCosdH2QcMwNfW5l2fbgnJSI%2BLjSHBindpuq7kFEB0Re%2BRFEDhJ4jAhQby%2BqNwOct02eAoIxl1MHNg0M0EP2VRx3anB8Idfs1o5wI2q8dqG0RFn15upIohKW6wyrP5ux1IkuLsf0DCGUhIV1HfHohmO%2FRKi4e%2B9zChpWJiGW8Yvebi82TT4c4%2F1117lj7pT0c351kFE%2Bw7Bqxhp18vZNcUYVapmLKIifH5nP4X8x4Eyfpn0FGk1M0gmB1z8JuRJ76o3XG7yXQGjlWtlaOXoX9jKgTKEz3TLdQNtq2Uo%2FX6avOq%2Bo%2BNhMX0QPf%2FuyePCYjo1jlLgG8QuSNACXWe%2BlQJTMI4ehack4bLXi5x%2BASKBLWU3f9qHB8bhRpsurVcWr5y2gNBLgNh1stMEWilxfsmLcVbWH4VBAFCrFhZjMjm%2Bm8ZOeyKusNZu0A1LTKdk%2FjMgimlHjFKQZbqBgP%2FVkn2XHL9x2JlzaioLEK5pGEF1kT5RseyzDEWDDppe%2B%2BBjqkAbkqYYokDs1lHPSvYwnJcrSCAh0Y%2Fs2MjpYyyzQwLSR2blfGAMDPGafzyj6arrGRsRg%2BnryZxOCpMDrKc%2F5ZCAGyL4aiDqR9oHRWbpXe95VEPtsYYiGwOwlz0oSjMEkuBrn1pxOrM%2Fct9L%2BDSiWU78omsPkd3Wd6Jfca4aDPUq4ZyQUJsYRuHjFTSDIVzPsPt%2Bg8EwzIt147IdcFNy%2F6f5cKoJBP&X-Amz-Signature=77e97624100ecb84f52fede85e00030153efb9c087dc5b0f337a06159aacc16e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
