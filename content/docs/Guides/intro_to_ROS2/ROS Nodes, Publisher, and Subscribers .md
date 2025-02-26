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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXSLEG2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDLz3G7MdnFl7D4xMIOQeZHDt%2FWif52zoJi2pUCk1odrgIgUIxy7KFDzoyRb0s%2FBltRTdh%2FejKFYvbG656sO1L0%2FiAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO4WDhtEhU8rthCYcyrcA6qSmddhQvoVy5ORx6wweW1J8qO2Y4BUECqhmgUAXz8qhzzUYd0VeP%2FzQszOPJ%2F70ccU3lyR6P9MZ0%2BQYR38ITSLju503FsNMsv3rTz8uLgrJ6mfBTo3d%2FgrzeGE6Vwl4yIHauTrnH6wvg1PE8x9TgzA8YeSwW4ABLceK4%2FTk%2Bkrs09hyItetriNRfEEmJbB37KeD2AQH3AQHGfgWoH03EtU2Y%2FpeOVV91gyIQduPjKN06Vf4leQi5%2BLBsjB6mXIrwKtmwsy06nThvVH2elyz7i6qIzIrm2C5%2FdFieoc1V6JPctuJDCvdLZnWuzTmhYKFmdRXMHIjMVeUKAimMbRHhhLlvOuapksB8UWjdFGSxw92oZPt%2B4sZEo7IsIrLUAOi5hoB10D6ZYWT9YdNteuspn0nK%2FwaQzNHAm8F5vf88clJNXqJ2a7eP0OrKOKhfXpL0im9Z3a4QqEq5GbkX%2Btpe3aGBYayDWn64ZuLDX50ND%2F633i%2BVVa2lF%2BlvXLaZguOv%2FghOHH9ePE8LGjfccxUkegnbgtetOSYfSe1GokUT6RbBWFtaHTssxrA6wXWS4nKcy%2FJ6CNpsihZYt2jInKeYFcEaa3XuZJgQk7sKElueMmY1fdLc%2BZ2X5dihP2MNu%2F%2B70GOqUBqfsEf4bqtvwsIS4MOTHrQtb3r2NkpRvLeePIBzV5vS6Rw%2FEntsPgm83h2UiuBqADZNr8HvmztdrnX6JFKO1l9pcDkpWO25lfWFaC%2BbNbpgd1pOaQmnpxw%2BLNkSJRhOxrxR%2F8vCB6%2FiOSLQP3Ct1Tau%2BDImsI%2Bk67ilUPZs4anr1NgoKicOxwrjBEayZUc3DRDDTIxbOreAPSlgoh2Vnf%2Fhgbol7%2B&X-Amz-Signature=012cf2dc7f98ce376b4085219a4e8a0212a1cd14b10d80959a86e560aa9bfe8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXSLEG2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDLz3G7MdnFl7D4xMIOQeZHDt%2FWif52zoJi2pUCk1odrgIgUIxy7KFDzoyRb0s%2FBltRTdh%2FejKFYvbG656sO1L0%2FiAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO4WDhtEhU8rthCYcyrcA6qSmddhQvoVy5ORx6wweW1J8qO2Y4BUECqhmgUAXz8qhzzUYd0VeP%2FzQszOPJ%2F70ccU3lyR6P9MZ0%2BQYR38ITSLju503FsNMsv3rTz8uLgrJ6mfBTo3d%2FgrzeGE6Vwl4yIHauTrnH6wvg1PE8x9TgzA8YeSwW4ABLceK4%2FTk%2Bkrs09hyItetriNRfEEmJbB37KeD2AQH3AQHGfgWoH03EtU2Y%2FpeOVV91gyIQduPjKN06Vf4leQi5%2BLBsjB6mXIrwKtmwsy06nThvVH2elyz7i6qIzIrm2C5%2FdFieoc1V6JPctuJDCvdLZnWuzTmhYKFmdRXMHIjMVeUKAimMbRHhhLlvOuapksB8UWjdFGSxw92oZPt%2B4sZEo7IsIrLUAOi5hoB10D6ZYWT9YdNteuspn0nK%2FwaQzNHAm8F5vf88clJNXqJ2a7eP0OrKOKhfXpL0im9Z3a4QqEq5GbkX%2Btpe3aGBYayDWn64ZuLDX50ND%2F633i%2BVVa2lF%2BlvXLaZguOv%2FghOHH9ePE8LGjfccxUkegnbgtetOSYfSe1GokUT6RbBWFtaHTssxrA6wXWS4nKcy%2FJ6CNpsihZYt2jInKeYFcEaa3XuZJgQk7sKElueMmY1fdLc%2BZ2X5dihP2MNu%2F%2B70GOqUBqfsEf4bqtvwsIS4MOTHrQtb3r2NkpRvLeePIBzV5vS6Rw%2FEntsPgm83h2UiuBqADZNr8HvmztdrnX6JFKO1l9pcDkpWO25lfWFaC%2BbNbpgd1pOaQmnpxw%2BLNkSJRhOxrxR%2F8vCB6%2FiOSLQP3Ct1Tau%2BDImsI%2Bk67ilUPZs4anr1NgoKicOxwrjBEayZUc3DRDDTIxbOreAPSlgoh2Vnf%2Fhgbol7%2B&X-Amz-Signature=3752a9a619e45dd195e54622489f2043330814602b1abd2c0fcbc18b8a39f4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXSLEG2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDLz3G7MdnFl7D4xMIOQeZHDt%2FWif52zoJi2pUCk1odrgIgUIxy7KFDzoyRb0s%2FBltRTdh%2FejKFYvbG656sO1L0%2FiAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO4WDhtEhU8rthCYcyrcA6qSmddhQvoVy5ORx6wweW1J8qO2Y4BUECqhmgUAXz8qhzzUYd0VeP%2FzQszOPJ%2F70ccU3lyR6P9MZ0%2BQYR38ITSLju503FsNMsv3rTz8uLgrJ6mfBTo3d%2FgrzeGE6Vwl4yIHauTrnH6wvg1PE8x9TgzA8YeSwW4ABLceK4%2FTk%2Bkrs09hyItetriNRfEEmJbB37KeD2AQH3AQHGfgWoH03EtU2Y%2FpeOVV91gyIQduPjKN06Vf4leQi5%2BLBsjB6mXIrwKtmwsy06nThvVH2elyz7i6qIzIrm2C5%2FdFieoc1V6JPctuJDCvdLZnWuzTmhYKFmdRXMHIjMVeUKAimMbRHhhLlvOuapksB8UWjdFGSxw92oZPt%2B4sZEo7IsIrLUAOi5hoB10D6ZYWT9YdNteuspn0nK%2FwaQzNHAm8F5vf88clJNXqJ2a7eP0OrKOKhfXpL0im9Z3a4QqEq5GbkX%2Btpe3aGBYayDWn64ZuLDX50ND%2F633i%2BVVa2lF%2BlvXLaZguOv%2FghOHH9ePE8LGjfccxUkegnbgtetOSYfSe1GokUT6RbBWFtaHTssxrA6wXWS4nKcy%2FJ6CNpsihZYt2jInKeYFcEaa3XuZJgQk7sKElueMmY1fdLc%2BZ2X5dihP2MNu%2F%2B70GOqUBqfsEf4bqtvwsIS4MOTHrQtb3r2NkpRvLeePIBzV5vS6Rw%2FEntsPgm83h2UiuBqADZNr8HvmztdrnX6JFKO1l9pcDkpWO25lfWFaC%2BbNbpgd1pOaQmnpxw%2BLNkSJRhOxrxR%2F8vCB6%2FiOSLQP3Ct1Tau%2BDImsI%2Bk67ilUPZs4anr1NgoKicOxwrjBEayZUc3DRDDTIxbOreAPSlgoh2Vnf%2Fhgbol7%2B&X-Amz-Signature=7d1e0c792fd46c08091fdee10edc31ea9611a734fab61d111f304e6759f6c543&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXSLEG2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDLz3G7MdnFl7D4xMIOQeZHDt%2FWif52zoJi2pUCk1odrgIgUIxy7KFDzoyRb0s%2FBltRTdh%2FejKFYvbG656sO1L0%2FiAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO4WDhtEhU8rthCYcyrcA6qSmddhQvoVy5ORx6wweW1J8qO2Y4BUECqhmgUAXz8qhzzUYd0VeP%2FzQszOPJ%2F70ccU3lyR6P9MZ0%2BQYR38ITSLju503FsNMsv3rTz8uLgrJ6mfBTo3d%2FgrzeGE6Vwl4yIHauTrnH6wvg1PE8x9TgzA8YeSwW4ABLceK4%2FTk%2Bkrs09hyItetriNRfEEmJbB37KeD2AQH3AQHGfgWoH03EtU2Y%2FpeOVV91gyIQduPjKN06Vf4leQi5%2BLBsjB6mXIrwKtmwsy06nThvVH2elyz7i6qIzIrm2C5%2FdFieoc1V6JPctuJDCvdLZnWuzTmhYKFmdRXMHIjMVeUKAimMbRHhhLlvOuapksB8UWjdFGSxw92oZPt%2B4sZEo7IsIrLUAOi5hoB10D6ZYWT9YdNteuspn0nK%2FwaQzNHAm8F5vf88clJNXqJ2a7eP0OrKOKhfXpL0im9Z3a4QqEq5GbkX%2Btpe3aGBYayDWn64ZuLDX50ND%2F633i%2BVVa2lF%2BlvXLaZguOv%2FghOHH9ePE8LGjfccxUkegnbgtetOSYfSe1GokUT6RbBWFtaHTssxrA6wXWS4nKcy%2FJ6CNpsihZYt2jInKeYFcEaa3XuZJgQk7sKElueMmY1fdLc%2BZ2X5dihP2MNu%2F%2B70GOqUBqfsEf4bqtvwsIS4MOTHrQtb3r2NkpRvLeePIBzV5vS6Rw%2FEntsPgm83h2UiuBqADZNr8HvmztdrnX6JFKO1l9pcDkpWO25lfWFaC%2BbNbpgd1pOaQmnpxw%2BLNkSJRhOxrxR%2F8vCB6%2FiOSLQP3Ct1Tau%2BDImsI%2Bk67ilUPZs4anr1NgoKicOxwrjBEayZUc3DRDDTIxbOreAPSlgoh2Vnf%2Fhgbol7%2B&X-Amz-Signature=0c4035de5d9a52610c278ee94090549d137e404823550918371920fd3ec184a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXSLEG2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDLz3G7MdnFl7D4xMIOQeZHDt%2FWif52zoJi2pUCk1odrgIgUIxy7KFDzoyRb0s%2FBltRTdh%2FejKFYvbG656sO1L0%2FiAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO4WDhtEhU8rthCYcyrcA6qSmddhQvoVy5ORx6wweW1J8qO2Y4BUECqhmgUAXz8qhzzUYd0VeP%2FzQszOPJ%2F70ccU3lyR6P9MZ0%2BQYR38ITSLju503FsNMsv3rTz8uLgrJ6mfBTo3d%2FgrzeGE6Vwl4yIHauTrnH6wvg1PE8x9TgzA8YeSwW4ABLceK4%2FTk%2Bkrs09hyItetriNRfEEmJbB37KeD2AQH3AQHGfgWoH03EtU2Y%2FpeOVV91gyIQduPjKN06Vf4leQi5%2BLBsjB6mXIrwKtmwsy06nThvVH2elyz7i6qIzIrm2C5%2FdFieoc1V6JPctuJDCvdLZnWuzTmhYKFmdRXMHIjMVeUKAimMbRHhhLlvOuapksB8UWjdFGSxw92oZPt%2B4sZEo7IsIrLUAOi5hoB10D6ZYWT9YdNteuspn0nK%2FwaQzNHAm8F5vf88clJNXqJ2a7eP0OrKOKhfXpL0im9Z3a4QqEq5GbkX%2Btpe3aGBYayDWn64ZuLDX50ND%2F633i%2BVVa2lF%2BlvXLaZguOv%2FghOHH9ePE8LGjfccxUkegnbgtetOSYfSe1GokUT6RbBWFtaHTssxrA6wXWS4nKcy%2FJ6CNpsihZYt2jInKeYFcEaa3XuZJgQk7sKElueMmY1fdLc%2BZ2X5dihP2MNu%2F%2B70GOqUBqfsEf4bqtvwsIS4MOTHrQtb3r2NkpRvLeePIBzV5vS6Rw%2FEntsPgm83h2UiuBqADZNr8HvmztdrnX6JFKO1l9pcDkpWO25lfWFaC%2BbNbpgd1pOaQmnpxw%2BLNkSJRhOxrxR%2F8vCB6%2FiOSLQP3Ct1Tau%2BDImsI%2Bk67ilUPZs4anr1NgoKicOxwrjBEayZUc3DRDDTIxbOreAPSlgoh2Vnf%2Fhgbol7%2B&X-Amz-Signature=33ba5574ec78fb64dfceba1c64c6c38470454ec8bf2d6adea8818684b03c7ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXSLEG2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDLz3G7MdnFl7D4xMIOQeZHDt%2FWif52zoJi2pUCk1odrgIgUIxy7KFDzoyRb0s%2FBltRTdh%2FejKFYvbG656sO1L0%2FiAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO4WDhtEhU8rthCYcyrcA6qSmddhQvoVy5ORx6wweW1J8qO2Y4BUECqhmgUAXz8qhzzUYd0VeP%2FzQszOPJ%2F70ccU3lyR6P9MZ0%2BQYR38ITSLju503FsNMsv3rTz8uLgrJ6mfBTo3d%2FgrzeGE6Vwl4yIHauTrnH6wvg1PE8x9TgzA8YeSwW4ABLceK4%2FTk%2Bkrs09hyItetriNRfEEmJbB37KeD2AQH3AQHGfgWoH03EtU2Y%2FpeOVV91gyIQduPjKN06Vf4leQi5%2BLBsjB6mXIrwKtmwsy06nThvVH2elyz7i6qIzIrm2C5%2FdFieoc1V6JPctuJDCvdLZnWuzTmhYKFmdRXMHIjMVeUKAimMbRHhhLlvOuapksB8UWjdFGSxw92oZPt%2B4sZEo7IsIrLUAOi5hoB10D6ZYWT9YdNteuspn0nK%2FwaQzNHAm8F5vf88clJNXqJ2a7eP0OrKOKhfXpL0im9Z3a4QqEq5GbkX%2Btpe3aGBYayDWn64ZuLDX50ND%2F633i%2BVVa2lF%2BlvXLaZguOv%2FghOHH9ePE8LGjfccxUkegnbgtetOSYfSe1GokUT6RbBWFtaHTssxrA6wXWS4nKcy%2FJ6CNpsihZYt2jInKeYFcEaa3XuZJgQk7sKElueMmY1fdLc%2BZ2X5dihP2MNu%2F%2B70GOqUBqfsEf4bqtvwsIS4MOTHrQtb3r2NkpRvLeePIBzV5vS6Rw%2FEntsPgm83h2UiuBqADZNr8HvmztdrnX6JFKO1l9pcDkpWO25lfWFaC%2BbNbpgd1pOaQmnpxw%2BLNkSJRhOxrxR%2F8vCB6%2FiOSLQP3Ct1Tau%2BDImsI%2Bk67ilUPZs4anr1NgoKicOxwrjBEayZUc3DRDDTIxbOreAPSlgoh2Vnf%2Fhgbol7%2B&X-Amz-Signature=50cd46ac5f18a1c390c4857ce2ed6b1ea9eabf759c0ff853e2a008a31ac167d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXSLEG2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDLz3G7MdnFl7D4xMIOQeZHDt%2FWif52zoJi2pUCk1odrgIgUIxy7KFDzoyRb0s%2FBltRTdh%2FejKFYvbG656sO1L0%2FiAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO4WDhtEhU8rthCYcyrcA6qSmddhQvoVy5ORx6wweW1J8qO2Y4BUECqhmgUAXz8qhzzUYd0VeP%2FzQszOPJ%2F70ccU3lyR6P9MZ0%2BQYR38ITSLju503FsNMsv3rTz8uLgrJ6mfBTo3d%2FgrzeGE6Vwl4yIHauTrnH6wvg1PE8x9TgzA8YeSwW4ABLceK4%2FTk%2Bkrs09hyItetriNRfEEmJbB37KeD2AQH3AQHGfgWoH03EtU2Y%2FpeOVV91gyIQduPjKN06Vf4leQi5%2BLBsjB6mXIrwKtmwsy06nThvVH2elyz7i6qIzIrm2C5%2FdFieoc1V6JPctuJDCvdLZnWuzTmhYKFmdRXMHIjMVeUKAimMbRHhhLlvOuapksB8UWjdFGSxw92oZPt%2B4sZEo7IsIrLUAOi5hoB10D6ZYWT9YdNteuspn0nK%2FwaQzNHAm8F5vf88clJNXqJ2a7eP0OrKOKhfXpL0im9Z3a4QqEq5GbkX%2Btpe3aGBYayDWn64ZuLDX50ND%2F633i%2BVVa2lF%2BlvXLaZguOv%2FghOHH9ePE8LGjfccxUkegnbgtetOSYfSe1GokUT6RbBWFtaHTssxrA6wXWS4nKcy%2FJ6CNpsihZYt2jInKeYFcEaa3XuZJgQk7sKElueMmY1fdLc%2BZ2X5dihP2MNu%2F%2B70GOqUBqfsEf4bqtvwsIS4MOTHrQtb3r2NkpRvLeePIBzV5vS6Rw%2FEntsPgm83h2UiuBqADZNr8HvmztdrnX6JFKO1l9pcDkpWO25lfWFaC%2BbNbpgd1pOaQmnpxw%2BLNkSJRhOxrxR%2F8vCB6%2FiOSLQP3Ct1Tau%2BDImsI%2Bk67ilUPZs4anr1NgoKicOxwrjBEayZUc3DRDDTIxbOreAPSlgoh2Vnf%2Fhgbol7%2B&X-Amz-Signature=43792cbe0a627f9a3c71f785b05b81c5f443db62f6f2533687888d44dad70dca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXSLEG2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDLz3G7MdnFl7D4xMIOQeZHDt%2FWif52zoJi2pUCk1odrgIgUIxy7KFDzoyRb0s%2FBltRTdh%2FejKFYvbG656sO1L0%2FiAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO4WDhtEhU8rthCYcyrcA6qSmddhQvoVy5ORx6wweW1J8qO2Y4BUECqhmgUAXz8qhzzUYd0VeP%2FzQszOPJ%2F70ccU3lyR6P9MZ0%2BQYR38ITSLju503FsNMsv3rTz8uLgrJ6mfBTo3d%2FgrzeGE6Vwl4yIHauTrnH6wvg1PE8x9TgzA8YeSwW4ABLceK4%2FTk%2Bkrs09hyItetriNRfEEmJbB37KeD2AQH3AQHGfgWoH03EtU2Y%2FpeOVV91gyIQduPjKN06Vf4leQi5%2BLBsjB6mXIrwKtmwsy06nThvVH2elyz7i6qIzIrm2C5%2FdFieoc1V6JPctuJDCvdLZnWuzTmhYKFmdRXMHIjMVeUKAimMbRHhhLlvOuapksB8UWjdFGSxw92oZPt%2B4sZEo7IsIrLUAOi5hoB10D6ZYWT9YdNteuspn0nK%2FwaQzNHAm8F5vf88clJNXqJ2a7eP0OrKOKhfXpL0im9Z3a4QqEq5GbkX%2Btpe3aGBYayDWn64ZuLDX50ND%2F633i%2BVVa2lF%2BlvXLaZguOv%2FghOHH9ePE8LGjfccxUkegnbgtetOSYfSe1GokUT6RbBWFtaHTssxrA6wXWS4nKcy%2FJ6CNpsihZYt2jInKeYFcEaa3XuZJgQk7sKElueMmY1fdLc%2BZ2X5dihP2MNu%2F%2B70GOqUBqfsEf4bqtvwsIS4MOTHrQtb3r2NkpRvLeePIBzV5vS6Rw%2FEntsPgm83h2UiuBqADZNr8HvmztdrnX6JFKO1l9pcDkpWO25lfWFaC%2BbNbpgd1pOaQmnpxw%2BLNkSJRhOxrxR%2F8vCB6%2FiOSLQP3Ct1Tau%2BDImsI%2Bk67ilUPZs4anr1NgoKicOxwrjBEayZUc3DRDDTIxbOreAPSlgoh2Vnf%2Fhgbol7%2B&X-Amz-Signature=261fd7cfca9057b49ba0a9002a9673834919ee7021e5a4a3340d284decb538e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
