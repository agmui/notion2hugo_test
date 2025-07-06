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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIKB5LB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCze2z1MWAKECKyVZia%2BqQNd5peCNKWYqymdufepZaMfQIgSxnXpLVVptOuPzjXxZjO%2FQU179p0rBiEvbdh%2FjoT6gkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDL0x%2B%2FvzsHGoDaycXircA%2BZB78XLWEk5FGZ3rPH4IhmEVBASCd4J%2FCuJqD7NbLvchzuFFQuH5r56IOvyk19RVv4rjHwVhsvHWmvDb6%2BZIdSjB4IpfCbFyarDGr3ZympzTq6UJu%2BMTpQ%2BwYSn6wUE1frxL5n3RzNoNTPC5gjg1JJEjawBgKReBAaY6iE32GOA0m3GLpfWpcbAPPEnnfvNT0Y%2F%2BG8Y%2BwgffR2O%2B1D535KorhBCa5IEz8i6YogiFPiwvEfqg%2Bnj3CyuS1gQQ94iFX%2FkIpTnZhlWBDEByeFpDNm5VwDArLUJ1wmzcC%2FJ1kB%2FBIRcGOsHcTCJes4S0tqaMHzuqeCP7cshueDukAmBdp8AqS1E2Fsd0NfoXZytzSCRFlnDhAmN0Hz0RtyPG9uH0iBThiueAxpWbRyrSF41AALooNXBPEPHAESFYDxfbiMZ8VboCz6S1BAhuWRs%2BKMRa85j20NxAZYkSebl%2FTBqSjuhxRR1ikdlTZOP9XT5E%2Fzs97zlfAIkOC2haW%2BDDoBVOXM7ZcY4A2C8edeQFVVHvfoelGqjAwWO8myJc3OsgkHqtwJMPHXggpT9ArdpLXfQC2MM0pjn5UUMYCjyKBox3l1gNoHsD2kLsvBaUTy19RCP9brPc4MfJFxO5dDiMMePp8MGOqUB0QabhDX3OwyM5yeQFz8i6YcqMzD7aphUSH1mx2IWHh73vbI0qixrPgeN%2FXf%2BLR4BWsAodDadgyZcSYqVD1TWrXZiopRPEJu%2FCByC0rLW03CNuDgVs3kxO6%2F1KkNj%2BIr5g6T9wCOs7XcTN1CXZa62Pf%2BPy%2BYa3EoWgprsnXR28tZRJOPro89FNxwhQrHG1oxWukBwhJjkpzBecP1zotBIYh0Z09me&X-Amz-Signature=d1f8d36eb584a82965e19a4bdf887619d366ed862b4d77042a1ad0d6c5f70cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIKB5LB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCze2z1MWAKECKyVZia%2BqQNd5peCNKWYqymdufepZaMfQIgSxnXpLVVptOuPzjXxZjO%2FQU179p0rBiEvbdh%2FjoT6gkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDL0x%2B%2FvzsHGoDaycXircA%2BZB78XLWEk5FGZ3rPH4IhmEVBASCd4J%2FCuJqD7NbLvchzuFFQuH5r56IOvyk19RVv4rjHwVhsvHWmvDb6%2BZIdSjB4IpfCbFyarDGr3ZympzTq6UJu%2BMTpQ%2BwYSn6wUE1frxL5n3RzNoNTPC5gjg1JJEjawBgKReBAaY6iE32GOA0m3GLpfWpcbAPPEnnfvNT0Y%2F%2BG8Y%2BwgffR2O%2B1D535KorhBCa5IEz8i6YogiFPiwvEfqg%2Bnj3CyuS1gQQ94iFX%2FkIpTnZhlWBDEByeFpDNm5VwDArLUJ1wmzcC%2FJ1kB%2FBIRcGOsHcTCJes4S0tqaMHzuqeCP7cshueDukAmBdp8AqS1E2Fsd0NfoXZytzSCRFlnDhAmN0Hz0RtyPG9uH0iBThiueAxpWbRyrSF41AALooNXBPEPHAESFYDxfbiMZ8VboCz6S1BAhuWRs%2BKMRa85j20NxAZYkSebl%2FTBqSjuhxRR1ikdlTZOP9XT5E%2Fzs97zlfAIkOC2haW%2BDDoBVOXM7ZcY4A2C8edeQFVVHvfoelGqjAwWO8myJc3OsgkHqtwJMPHXggpT9ArdpLXfQC2MM0pjn5UUMYCjyKBox3l1gNoHsD2kLsvBaUTy19RCP9brPc4MfJFxO5dDiMMePp8MGOqUB0QabhDX3OwyM5yeQFz8i6YcqMzD7aphUSH1mx2IWHh73vbI0qixrPgeN%2FXf%2BLR4BWsAodDadgyZcSYqVD1TWrXZiopRPEJu%2FCByC0rLW03CNuDgVs3kxO6%2F1KkNj%2BIr5g6T9wCOs7XcTN1CXZa62Pf%2BPy%2BYa3EoWgprsnXR28tZRJOPro89FNxwhQrHG1oxWukBwhJjkpzBecP1zotBIYh0Z09me&X-Amz-Signature=140a5e017e299bddbdcff47c180317eb63d6280bd9d93701defa9eaeb63dd04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIKB5LB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCze2z1MWAKECKyVZia%2BqQNd5peCNKWYqymdufepZaMfQIgSxnXpLVVptOuPzjXxZjO%2FQU179p0rBiEvbdh%2FjoT6gkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDL0x%2B%2FvzsHGoDaycXircA%2BZB78XLWEk5FGZ3rPH4IhmEVBASCd4J%2FCuJqD7NbLvchzuFFQuH5r56IOvyk19RVv4rjHwVhsvHWmvDb6%2BZIdSjB4IpfCbFyarDGr3ZympzTq6UJu%2BMTpQ%2BwYSn6wUE1frxL5n3RzNoNTPC5gjg1JJEjawBgKReBAaY6iE32GOA0m3GLpfWpcbAPPEnnfvNT0Y%2F%2BG8Y%2BwgffR2O%2B1D535KorhBCa5IEz8i6YogiFPiwvEfqg%2Bnj3CyuS1gQQ94iFX%2FkIpTnZhlWBDEByeFpDNm5VwDArLUJ1wmzcC%2FJ1kB%2FBIRcGOsHcTCJes4S0tqaMHzuqeCP7cshueDukAmBdp8AqS1E2Fsd0NfoXZytzSCRFlnDhAmN0Hz0RtyPG9uH0iBThiueAxpWbRyrSF41AALooNXBPEPHAESFYDxfbiMZ8VboCz6S1BAhuWRs%2BKMRa85j20NxAZYkSebl%2FTBqSjuhxRR1ikdlTZOP9XT5E%2Fzs97zlfAIkOC2haW%2BDDoBVOXM7ZcY4A2C8edeQFVVHvfoelGqjAwWO8myJc3OsgkHqtwJMPHXggpT9ArdpLXfQC2MM0pjn5UUMYCjyKBox3l1gNoHsD2kLsvBaUTy19RCP9brPc4MfJFxO5dDiMMePp8MGOqUB0QabhDX3OwyM5yeQFz8i6YcqMzD7aphUSH1mx2IWHh73vbI0qixrPgeN%2FXf%2BLR4BWsAodDadgyZcSYqVD1TWrXZiopRPEJu%2FCByC0rLW03CNuDgVs3kxO6%2F1KkNj%2BIr5g6T9wCOs7XcTN1CXZa62Pf%2BPy%2BYa3EoWgprsnXR28tZRJOPro89FNxwhQrHG1oxWukBwhJjkpzBecP1zotBIYh0Z09me&X-Amz-Signature=8f305bc8fe0b2a095af4d51db7951f8562493eea9dfbf6229d4169fbe952acbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIKB5LB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCze2z1MWAKECKyVZia%2BqQNd5peCNKWYqymdufepZaMfQIgSxnXpLVVptOuPzjXxZjO%2FQU179p0rBiEvbdh%2FjoT6gkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDL0x%2B%2FvzsHGoDaycXircA%2BZB78XLWEk5FGZ3rPH4IhmEVBASCd4J%2FCuJqD7NbLvchzuFFQuH5r56IOvyk19RVv4rjHwVhsvHWmvDb6%2BZIdSjB4IpfCbFyarDGr3ZympzTq6UJu%2BMTpQ%2BwYSn6wUE1frxL5n3RzNoNTPC5gjg1JJEjawBgKReBAaY6iE32GOA0m3GLpfWpcbAPPEnnfvNT0Y%2F%2BG8Y%2BwgffR2O%2B1D535KorhBCa5IEz8i6YogiFPiwvEfqg%2Bnj3CyuS1gQQ94iFX%2FkIpTnZhlWBDEByeFpDNm5VwDArLUJ1wmzcC%2FJ1kB%2FBIRcGOsHcTCJes4S0tqaMHzuqeCP7cshueDukAmBdp8AqS1E2Fsd0NfoXZytzSCRFlnDhAmN0Hz0RtyPG9uH0iBThiueAxpWbRyrSF41AALooNXBPEPHAESFYDxfbiMZ8VboCz6S1BAhuWRs%2BKMRa85j20NxAZYkSebl%2FTBqSjuhxRR1ikdlTZOP9XT5E%2Fzs97zlfAIkOC2haW%2BDDoBVOXM7ZcY4A2C8edeQFVVHvfoelGqjAwWO8myJc3OsgkHqtwJMPHXggpT9ArdpLXfQC2MM0pjn5UUMYCjyKBox3l1gNoHsD2kLsvBaUTy19RCP9brPc4MfJFxO5dDiMMePp8MGOqUB0QabhDX3OwyM5yeQFz8i6YcqMzD7aphUSH1mx2IWHh73vbI0qixrPgeN%2FXf%2BLR4BWsAodDadgyZcSYqVD1TWrXZiopRPEJu%2FCByC0rLW03CNuDgVs3kxO6%2F1KkNj%2BIr5g6T9wCOs7XcTN1CXZa62Pf%2BPy%2BYa3EoWgprsnXR28tZRJOPro89FNxwhQrHG1oxWukBwhJjkpzBecP1zotBIYh0Z09me&X-Amz-Signature=cfe82dd38ac211d8dd4f99c5381c2c1a50d6aa79b0a97ac4a7400cdb0fc99c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIKB5LB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCze2z1MWAKECKyVZia%2BqQNd5peCNKWYqymdufepZaMfQIgSxnXpLVVptOuPzjXxZjO%2FQU179p0rBiEvbdh%2FjoT6gkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDL0x%2B%2FvzsHGoDaycXircA%2BZB78XLWEk5FGZ3rPH4IhmEVBASCd4J%2FCuJqD7NbLvchzuFFQuH5r56IOvyk19RVv4rjHwVhsvHWmvDb6%2BZIdSjB4IpfCbFyarDGr3ZympzTq6UJu%2BMTpQ%2BwYSn6wUE1frxL5n3RzNoNTPC5gjg1JJEjawBgKReBAaY6iE32GOA0m3GLpfWpcbAPPEnnfvNT0Y%2F%2BG8Y%2BwgffR2O%2B1D535KorhBCa5IEz8i6YogiFPiwvEfqg%2Bnj3CyuS1gQQ94iFX%2FkIpTnZhlWBDEByeFpDNm5VwDArLUJ1wmzcC%2FJ1kB%2FBIRcGOsHcTCJes4S0tqaMHzuqeCP7cshueDukAmBdp8AqS1E2Fsd0NfoXZytzSCRFlnDhAmN0Hz0RtyPG9uH0iBThiueAxpWbRyrSF41AALooNXBPEPHAESFYDxfbiMZ8VboCz6S1BAhuWRs%2BKMRa85j20NxAZYkSebl%2FTBqSjuhxRR1ikdlTZOP9XT5E%2Fzs97zlfAIkOC2haW%2BDDoBVOXM7ZcY4A2C8edeQFVVHvfoelGqjAwWO8myJc3OsgkHqtwJMPHXggpT9ArdpLXfQC2MM0pjn5UUMYCjyKBox3l1gNoHsD2kLsvBaUTy19RCP9brPc4MfJFxO5dDiMMePp8MGOqUB0QabhDX3OwyM5yeQFz8i6YcqMzD7aphUSH1mx2IWHh73vbI0qixrPgeN%2FXf%2BLR4BWsAodDadgyZcSYqVD1TWrXZiopRPEJu%2FCByC0rLW03CNuDgVs3kxO6%2F1KkNj%2BIr5g6T9wCOs7XcTN1CXZa62Pf%2BPy%2BYa3EoWgprsnXR28tZRJOPro89FNxwhQrHG1oxWukBwhJjkpzBecP1zotBIYh0Z09me&X-Amz-Signature=00e13edbe937006f480773a391cf04a28f376ef8853e8ceef50ad0044a5577eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIKB5LB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCze2z1MWAKECKyVZia%2BqQNd5peCNKWYqymdufepZaMfQIgSxnXpLVVptOuPzjXxZjO%2FQU179p0rBiEvbdh%2FjoT6gkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDL0x%2B%2FvzsHGoDaycXircA%2BZB78XLWEk5FGZ3rPH4IhmEVBASCd4J%2FCuJqD7NbLvchzuFFQuH5r56IOvyk19RVv4rjHwVhsvHWmvDb6%2BZIdSjB4IpfCbFyarDGr3ZympzTq6UJu%2BMTpQ%2BwYSn6wUE1frxL5n3RzNoNTPC5gjg1JJEjawBgKReBAaY6iE32GOA0m3GLpfWpcbAPPEnnfvNT0Y%2F%2BG8Y%2BwgffR2O%2B1D535KorhBCa5IEz8i6YogiFPiwvEfqg%2Bnj3CyuS1gQQ94iFX%2FkIpTnZhlWBDEByeFpDNm5VwDArLUJ1wmzcC%2FJ1kB%2FBIRcGOsHcTCJes4S0tqaMHzuqeCP7cshueDukAmBdp8AqS1E2Fsd0NfoXZytzSCRFlnDhAmN0Hz0RtyPG9uH0iBThiueAxpWbRyrSF41AALooNXBPEPHAESFYDxfbiMZ8VboCz6S1BAhuWRs%2BKMRa85j20NxAZYkSebl%2FTBqSjuhxRR1ikdlTZOP9XT5E%2Fzs97zlfAIkOC2haW%2BDDoBVOXM7ZcY4A2C8edeQFVVHvfoelGqjAwWO8myJc3OsgkHqtwJMPHXggpT9ArdpLXfQC2MM0pjn5UUMYCjyKBox3l1gNoHsD2kLsvBaUTy19RCP9brPc4MfJFxO5dDiMMePp8MGOqUB0QabhDX3OwyM5yeQFz8i6YcqMzD7aphUSH1mx2IWHh73vbI0qixrPgeN%2FXf%2BLR4BWsAodDadgyZcSYqVD1TWrXZiopRPEJu%2FCByC0rLW03CNuDgVs3kxO6%2F1KkNj%2BIr5g6T9wCOs7XcTN1CXZa62Pf%2BPy%2BYa3EoWgprsnXR28tZRJOPro89FNxwhQrHG1oxWukBwhJjkpzBecP1zotBIYh0Z09me&X-Amz-Signature=9f41903457730ffaff4c8858252ed4fbdb2990e892ae743f824216161fa3048a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIKB5LB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCze2z1MWAKECKyVZia%2BqQNd5peCNKWYqymdufepZaMfQIgSxnXpLVVptOuPzjXxZjO%2FQU179p0rBiEvbdh%2FjoT6gkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDL0x%2B%2FvzsHGoDaycXircA%2BZB78XLWEk5FGZ3rPH4IhmEVBASCd4J%2FCuJqD7NbLvchzuFFQuH5r56IOvyk19RVv4rjHwVhsvHWmvDb6%2BZIdSjB4IpfCbFyarDGr3ZympzTq6UJu%2BMTpQ%2BwYSn6wUE1frxL5n3RzNoNTPC5gjg1JJEjawBgKReBAaY6iE32GOA0m3GLpfWpcbAPPEnnfvNT0Y%2F%2BG8Y%2BwgffR2O%2B1D535KorhBCa5IEz8i6YogiFPiwvEfqg%2Bnj3CyuS1gQQ94iFX%2FkIpTnZhlWBDEByeFpDNm5VwDArLUJ1wmzcC%2FJ1kB%2FBIRcGOsHcTCJes4S0tqaMHzuqeCP7cshueDukAmBdp8AqS1E2Fsd0NfoXZytzSCRFlnDhAmN0Hz0RtyPG9uH0iBThiueAxpWbRyrSF41AALooNXBPEPHAESFYDxfbiMZ8VboCz6S1BAhuWRs%2BKMRa85j20NxAZYkSebl%2FTBqSjuhxRR1ikdlTZOP9XT5E%2Fzs97zlfAIkOC2haW%2BDDoBVOXM7ZcY4A2C8edeQFVVHvfoelGqjAwWO8myJc3OsgkHqtwJMPHXggpT9ArdpLXfQC2MM0pjn5UUMYCjyKBox3l1gNoHsD2kLsvBaUTy19RCP9brPc4MfJFxO5dDiMMePp8MGOqUB0QabhDX3OwyM5yeQFz8i6YcqMzD7aphUSH1mx2IWHh73vbI0qixrPgeN%2FXf%2BLR4BWsAodDadgyZcSYqVD1TWrXZiopRPEJu%2FCByC0rLW03CNuDgVs3kxO6%2F1KkNj%2BIr5g6T9wCOs7XcTN1CXZa62Pf%2BPy%2BYa3EoWgprsnXR28tZRJOPro89FNxwhQrHG1oxWukBwhJjkpzBecP1zotBIYh0Z09me&X-Amz-Signature=1b661a5bea19d7fb92091db10ec8d4730f2687373b90ab18a0bdf5e6357c32d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIKB5LB%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCze2z1MWAKECKyVZia%2BqQNd5peCNKWYqymdufepZaMfQIgSxnXpLVVptOuPzjXxZjO%2FQU179p0rBiEvbdh%2FjoT6gkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDL0x%2B%2FvzsHGoDaycXircA%2BZB78XLWEk5FGZ3rPH4IhmEVBASCd4J%2FCuJqD7NbLvchzuFFQuH5r56IOvyk19RVv4rjHwVhsvHWmvDb6%2BZIdSjB4IpfCbFyarDGr3ZympzTq6UJu%2BMTpQ%2BwYSn6wUE1frxL5n3RzNoNTPC5gjg1JJEjawBgKReBAaY6iE32GOA0m3GLpfWpcbAPPEnnfvNT0Y%2F%2BG8Y%2BwgffR2O%2B1D535KorhBCa5IEz8i6YogiFPiwvEfqg%2Bnj3CyuS1gQQ94iFX%2FkIpTnZhlWBDEByeFpDNm5VwDArLUJ1wmzcC%2FJ1kB%2FBIRcGOsHcTCJes4S0tqaMHzuqeCP7cshueDukAmBdp8AqS1E2Fsd0NfoXZytzSCRFlnDhAmN0Hz0RtyPG9uH0iBThiueAxpWbRyrSF41AALooNXBPEPHAESFYDxfbiMZ8VboCz6S1BAhuWRs%2BKMRa85j20NxAZYkSebl%2FTBqSjuhxRR1ikdlTZOP9XT5E%2Fzs97zlfAIkOC2haW%2BDDoBVOXM7ZcY4A2C8edeQFVVHvfoelGqjAwWO8myJc3OsgkHqtwJMPHXggpT9ArdpLXfQC2MM0pjn5UUMYCjyKBox3l1gNoHsD2kLsvBaUTy19RCP9brPc4MfJFxO5dDiMMePp8MGOqUB0QabhDX3OwyM5yeQFz8i6YcqMzD7aphUSH1mx2IWHh73vbI0qixrPgeN%2FXf%2BLR4BWsAodDadgyZcSYqVD1TWrXZiopRPEJu%2FCByC0rLW03CNuDgVs3kxO6%2F1KkNj%2BIr5g6T9wCOs7XcTN1CXZa62Pf%2BPy%2BYa3EoWgprsnXR28tZRJOPro89FNxwhQrHG1oxWukBwhJjkpzBecP1zotBIYh0Z09me&X-Amz-Signature=1f4fbcf371cac8717fa4a8a3eb4f105d18505e8cae4ddba7e4001730ea6a3045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
