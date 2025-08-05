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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGCAQWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIHMwgwq95wLShffOMmdjZlTRXaiSyDIJkWUwYlNbHaN6AiAPM0cttAwQWbbfb7Lz9NAXuAN7n7Q%2Fm8T9ITrHBgSORir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4X3Ldbz1IrSB%2F5G%2FKtwDuYB6jUi1b1V3SCQG%2FuGgzzbaQzbyeWnQAjCz0HDqBGTxGkcKWqtRPWe%2FTKowVyfp45U6buHtAGcjoONklSnd6gYkKfICq6fzP05VPL1dOJKSzIAiTdsNIOV%2BuFmqPJDSNEnG9gmkP%2FmwnxgM%2B0ID%2FzikNRUdS4ZHionU6W3vegXrhlxSrT5K80S6sNEVOajuEouj4A6qMIAzWdrm5dt4kk9Zg8xUn%2FPmW5tklIUlHPLfyUbR%2Fwq7aEak23Go4KJyxI45wLJMjNKsNcXTOLt%2BxrYUE7TEwCZSl%2FQmUxxtY3lySjDZlxp1ave1QZMJ2m193ZTBIyyd%2BEsA5b1s6ca8O1v826JTmf67YDsZHX%2B7%2FnMViT3xCKZYWt8%2B0NzAQo5y%2F2aqNq27jopi%2BVmiycP0%2F6fijNOvOLq5U4fqAY%2FNCI%2BEok%2FB1fm0AI4GJ8mGrPdKkbufAgDMfq68GOZQPVriNr9XX1Zf0Pg4P7gOjALn4SLDFJFbcH4LneNe6%2FfUWKzhKuKeswm%2FO8CutT%2FZAHzpMAYYJcZIySzcV8sEHsgv1GXLx8G4nnTHEigUoIEeOel0JootSHaa8xhJQGS2cLzRLtBp2LKNS2m1BV%2FkHCPlcg65GLrws7L0UsXVrZwwwIfKxAY6pgFlGf328eEeUZ5E%2BvMJNZ4JZUwb94fkTFKyyIBTVTN%2BgYyhUMLUuE4eSZeacFY4wRfH6P%2FzCkS%2Bwubu9c5X3el39xyGPPu4RR2JUGbiWJyguTezODJ6nCk7ygFSho2Xr8Vaj%2Bi58r29becrAFgRknFM2Ru37bxVVOvXSFajC6Y5IeyJvh7mrKAaWaZFcwmuC8blGHoSM8UxYvI%2F7yVlVNooT32JkMRF&X-Amz-Signature=21da53a294884a2cbf2b0aa6474c84e533110cc3291f8b903ff08fd8d248fbb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGCAQWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIHMwgwq95wLShffOMmdjZlTRXaiSyDIJkWUwYlNbHaN6AiAPM0cttAwQWbbfb7Lz9NAXuAN7n7Q%2Fm8T9ITrHBgSORir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4X3Ldbz1IrSB%2F5G%2FKtwDuYB6jUi1b1V3SCQG%2FuGgzzbaQzbyeWnQAjCz0HDqBGTxGkcKWqtRPWe%2FTKowVyfp45U6buHtAGcjoONklSnd6gYkKfICq6fzP05VPL1dOJKSzIAiTdsNIOV%2BuFmqPJDSNEnG9gmkP%2FmwnxgM%2B0ID%2FzikNRUdS4ZHionU6W3vegXrhlxSrT5K80S6sNEVOajuEouj4A6qMIAzWdrm5dt4kk9Zg8xUn%2FPmW5tklIUlHPLfyUbR%2Fwq7aEak23Go4KJyxI45wLJMjNKsNcXTOLt%2BxrYUE7TEwCZSl%2FQmUxxtY3lySjDZlxp1ave1QZMJ2m193ZTBIyyd%2BEsA5b1s6ca8O1v826JTmf67YDsZHX%2B7%2FnMViT3xCKZYWt8%2B0NzAQo5y%2F2aqNq27jopi%2BVmiycP0%2F6fijNOvOLq5U4fqAY%2FNCI%2BEok%2FB1fm0AI4GJ8mGrPdKkbufAgDMfq68GOZQPVriNr9XX1Zf0Pg4P7gOjALn4SLDFJFbcH4LneNe6%2FfUWKzhKuKeswm%2FO8CutT%2FZAHzpMAYYJcZIySzcV8sEHsgv1GXLx8G4nnTHEigUoIEeOel0JootSHaa8xhJQGS2cLzRLtBp2LKNS2m1BV%2FkHCPlcg65GLrws7L0UsXVrZwwwIfKxAY6pgFlGf328eEeUZ5E%2BvMJNZ4JZUwb94fkTFKyyIBTVTN%2BgYyhUMLUuE4eSZeacFY4wRfH6P%2FzCkS%2Bwubu9c5X3el39xyGPPu4RR2JUGbiWJyguTezODJ6nCk7ygFSho2Xr8Vaj%2Bi58r29becrAFgRknFM2Ru37bxVVOvXSFajC6Y5IeyJvh7mrKAaWaZFcwmuC8blGHoSM8UxYvI%2F7yVlVNooT32JkMRF&X-Amz-Signature=6c7f5d44db9a75e47c4aad8fb65f51408e4093098dc13127a853505cda194f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGCAQWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIHMwgwq95wLShffOMmdjZlTRXaiSyDIJkWUwYlNbHaN6AiAPM0cttAwQWbbfb7Lz9NAXuAN7n7Q%2Fm8T9ITrHBgSORir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4X3Ldbz1IrSB%2F5G%2FKtwDuYB6jUi1b1V3SCQG%2FuGgzzbaQzbyeWnQAjCz0HDqBGTxGkcKWqtRPWe%2FTKowVyfp45U6buHtAGcjoONklSnd6gYkKfICq6fzP05VPL1dOJKSzIAiTdsNIOV%2BuFmqPJDSNEnG9gmkP%2FmwnxgM%2B0ID%2FzikNRUdS4ZHionU6W3vegXrhlxSrT5K80S6sNEVOajuEouj4A6qMIAzWdrm5dt4kk9Zg8xUn%2FPmW5tklIUlHPLfyUbR%2Fwq7aEak23Go4KJyxI45wLJMjNKsNcXTOLt%2BxrYUE7TEwCZSl%2FQmUxxtY3lySjDZlxp1ave1QZMJ2m193ZTBIyyd%2BEsA5b1s6ca8O1v826JTmf67YDsZHX%2B7%2FnMViT3xCKZYWt8%2B0NzAQo5y%2F2aqNq27jopi%2BVmiycP0%2F6fijNOvOLq5U4fqAY%2FNCI%2BEok%2FB1fm0AI4GJ8mGrPdKkbufAgDMfq68GOZQPVriNr9XX1Zf0Pg4P7gOjALn4SLDFJFbcH4LneNe6%2FfUWKzhKuKeswm%2FO8CutT%2FZAHzpMAYYJcZIySzcV8sEHsgv1GXLx8G4nnTHEigUoIEeOel0JootSHaa8xhJQGS2cLzRLtBp2LKNS2m1BV%2FkHCPlcg65GLrws7L0UsXVrZwwwIfKxAY6pgFlGf328eEeUZ5E%2BvMJNZ4JZUwb94fkTFKyyIBTVTN%2BgYyhUMLUuE4eSZeacFY4wRfH6P%2FzCkS%2Bwubu9c5X3el39xyGPPu4RR2JUGbiWJyguTezODJ6nCk7ygFSho2Xr8Vaj%2Bi58r29becrAFgRknFM2Ru37bxVVOvXSFajC6Y5IeyJvh7mrKAaWaZFcwmuC8blGHoSM8UxYvI%2F7yVlVNooT32JkMRF&X-Amz-Signature=e2d69048385d2ac328f034fda6ea179b0be158fbbfbcb4cf1b2c3ea4ed031393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGCAQWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIHMwgwq95wLShffOMmdjZlTRXaiSyDIJkWUwYlNbHaN6AiAPM0cttAwQWbbfb7Lz9NAXuAN7n7Q%2Fm8T9ITrHBgSORir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4X3Ldbz1IrSB%2F5G%2FKtwDuYB6jUi1b1V3SCQG%2FuGgzzbaQzbyeWnQAjCz0HDqBGTxGkcKWqtRPWe%2FTKowVyfp45U6buHtAGcjoONklSnd6gYkKfICq6fzP05VPL1dOJKSzIAiTdsNIOV%2BuFmqPJDSNEnG9gmkP%2FmwnxgM%2B0ID%2FzikNRUdS4ZHionU6W3vegXrhlxSrT5K80S6sNEVOajuEouj4A6qMIAzWdrm5dt4kk9Zg8xUn%2FPmW5tklIUlHPLfyUbR%2Fwq7aEak23Go4KJyxI45wLJMjNKsNcXTOLt%2BxrYUE7TEwCZSl%2FQmUxxtY3lySjDZlxp1ave1QZMJ2m193ZTBIyyd%2BEsA5b1s6ca8O1v826JTmf67YDsZHX%2B7%2FnMViT3xCKZYWt8%2B0NzAQo5y%2F2aqNq27jopi%2BVmiycP0%2F6fijNOvOLq5U4fqAY%2FNCI%2BEok%2FB1fm0AI4GJ8mGrPdKkbufAgDMfq68GOZQPVriNr9XX1Zf0Pg4P7gOjALn4SLDFJFbcH4LneNe6%2FfUWKzhKuKeswm%2FO8CutT%2FZAHzpMAYYJcZIySzcV8sEHsgv1GXLx8G4nnTHEigUoIEeOel0JootSHaa8xhJQGS2cLzRLtBp2LKNS2m1BV%2FkHCPlcg65GLrws7L0UsXVrZwwwIfKxAY6pgFlGf328eEeUZ5E%2BvMJNZ4JZUwb94fkTFKyyIBTVTN%2BgYyhUMLUuE4eSZeacFY4wRfH6P%2FzCkS%2Bwubu9c5X3el39xyGPPu4RR2JUGbiWJyguTezODJ6nCk7ygFSho2Xr8Vaj%2Bi58r29becrAFgRknFM2Ru37bxVVOvXSFajC6Y5IeyJvh7mrKAaWaZFcwmuC8blGHoSM8UxYvI%2F7yVlVNooT32JkMRF&X-Amz-Signature=5034dc0be9a1ea3604c6f7b1c1879c63fc695bd8997f4a85aac7ad17ba290a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGCAQWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIHMwgwq95wLShffOMmdjZlTRXaiSyDIJkWUwYlNbHaN6AiAPM0cttAwQWbbfb7Lz9NAXuAN7n7Q%2Fm8T9ITrHBgSORir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4X3Ldbz1IrSB%2F5G%2FKtwDuYB6jUi1b1V3SCQG%2FuGgzzbaQzbyeWnQAjCz0HDqBGTxGkcKWqtRPWe%2FTKowVyfp45U6buHtAGcjoONklSnd6gYkKfICq6fzP05VPL1dOJKSzIAiTdsNIOV%2BuFmqPJDSNEnG9gmkP%2FmwnxgM%2B0ID%2FzikNRUdS4ZHionU6W3vegXrhlxSrT5K80S6sNEVOajuEouj4A6qMIAzWdrm5dt4kk9Zg8xUn%2FPmW5tklIUlHPLfyUbR%2Fwq7aEak23Go4KJyxI45wLJMjNKsNcXTOLt%2BxrYUE7TEwCZSl%2FQmUxxtY3lySjDZlxp1ave1QZMJ2m193ZTBIyyd%2BEsA5b1s6ca8O1v826JTmf67YDsZHX%2B7%2FnMViT3xCKZYWt8%2B0NzAQo5y%2F2aqNq27jopi%2BVmiycP0%2F6fijNOvOLq5U4fqAY%2FNCI%2BEok%2FB1fm0AI4GJ8mGrPdKkbufAgDMfq68GOZQPVriNr9XX1Zf0Pg4P7gOjALn4SLDFJFbcH4LneNe6%2FfUWKzhKuKeswm%2FO8CutT%2FZAHzpMAYYJcZIySzcV8sEHsgv1GXLx8G4nnTHEigUoIEeOel0JootSHaa8xhJQGS2cLzRLtBp2LKNS2m1BV%2FkHCPlcg65GLrws7L0UsXVrZwwwIfKxAY6pgFlGf328eEeUZ5E%2BvMJNZ4JZUwb94fkTFKyyIBTVTN%2BgYyhUMLUuE4eSZeacFY4wRfH6P%2FzCkS%2Bwubu9c5X3el39xyGPPu4RR2JUGbiWJyguTezODJ6nCk7ygFSho2Xr8Vaj%2Bi58r29becrAFgRknFM2Ru37bxVVOvXSFajC6Y5IeyJvh7mrKAaWaZFcwmuC8blGHoSM8UxYvI%2F7yVlVNooT32JkMRF&X-Amz-Signature=191416c9e5d7058bfe50f36ff9e9be64a098907c4b5b7c5fe838f26595e09c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGCAQWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIHMwgwq95wLShffOMmdjZlTRXaiSyDIJkWUwYlNbHaN6AiAPM0cttAwQWbbfb7Lz9NAXuAN7n7Q%2Fm8T9ITrHBgSORir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4X3Ldbz1IrSB%2F5G%2FKtwDuYB6jUi1b1V3SCQG%2FuGgzzbaQzbyeWnQAjCz0HDqBGTxGkcKWqtRPWe%2FTKowVyfp45U6buHtAGcjoONklSnd6gYkKfICq6fzP05VPL1dOJKSzIAiTdsNIOV%2BuFmqPJDSNEnG9gmkP%2FmwnxgM%2B0ID%2FzikNRUdS4ZHionU6W3vegXrhlxSrT5K80S6sNEVOajuEouj4A6qMIAzWdrm5dt4kk9Zg8xUn%2FPmW5tklIUlHPLfyUbR%2Fwq7aEak23Go4KJyxI45wLJMjNKsNcXTOLt%2BxrYUE7TEwCZSl%2FQmUxxtY3lySjDZlxp1ave1QZMJ2m193ZTBIyyd%2BEsA5b1s6ca8O1v826JTmf67YDsZHX%2B7%2FnMViT3xCKZYWt8%2B0NzAQo5y%2F2aqNq27jopi%2BVmiycP0%2F6fijNOvOLq5U4fqAY%2FNCI%2BEok%2FB1fm0AI4GJ8mGrPdKkbufAgDMfq68GOZQPVriNr9XX1Zf0Pg4P7gOjALn4SLDFJFbcH4LneNe6%2FfUWKzhKuKeswm%2FO8CutT%2FZAHzpMAYYJcZIySzcV8sEHsgv1GXLx8G4nnTHEigUoIEeOel0JootSHaa8xhJQGS2cLzRLtBp2LKNS2m1BV%2FkHCPlcg65GLrws7L0UsXVrZwwwIfKxAY6pgFlGf328eEeUZ5E%2BvMJNZ4JZUwb94fkTFKyyIBTVTN%2BgYyhUMLUuE4eSZeacFY4wRfH6P%2FzCkS%2Bwubu9c5X3el39xyGPPu4RR2JUGbiWJyguTezODJ6nCk7ygFSho2Xr8Vaj%2Bi58r29becrAFgRknFM2Ru37bxVVOvXSFajC6Y5IeyJvh7mrKAaWaZFcwmuC8blGHoSM8UxYvI%2F7yVlVNooT32JkMRF&X-Amz-Signature=a12aefc82a4a66cb0202f21bedd97e70dbfd28d3772871205f648d606aa014e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGCAQWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIHMwgwq95wLShffOMmdjZlTRXaiSyDIJkWUwYlNbHaN6AiAPM0cttAwQWbbfb7Lz9NAXuAN7n7Q%2Fm8T9ITrHBgSORir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4X3Ldbz1IrSB%2F5G%2FKtwDuYB6jUi1b1V3SCQG%2FuGgzzbaQzbyeWnQAjCz0HDqBGTxGkcKWqtRPWe%2FTKowVyfp45U6buHtAGcjoONklSnd6gYkKfICq6fzP05VPL1dOJKSzIAiTdsNIOV%2BuFmqPJDSNEnG9gmkP%2FmwnxgM%2B0ID%2FzikNRUdS4ZHionU6W3vegXrhlxSrT5K80S6sNEVOajuEouj4A6qMIAzWdrm5dt4kk9Zg8xUn%2FPmW5tklIUlHPLfyUbR%2Fwq7aEak23Go4KJyxI45wLJMjNKsNcXTOLt%2BxrYUE7TEwCZSl%2FQmUxxtY3lySjDZlxp1ave1QZMJ2m193ZTBIyyd%2BEsA5b1s6ca8O1v826JTmf67YDsZHX%2B7%2FnMViT3xCKZYWt8%2B0NzAQo5y%2F2aqNq27jopi%2BVmiycP0%2F6fijNOvOLq5U4fqAY%2FNCI%2BEok%2FB1fm0AI4GJ8mGrPdKkbufAgDMfq68GOZQPVriNr9XX1Zf0Pg4P7gOjALn4SLDFJFbcH4LneNe6%2FfUWKzhKuKeswm%2FO8CutT%2FZAHzpMAYYJcZIySzcV8sEHsgv1GXLx8G4nnTHEigUoIEeOel0JootSHaa8xhJQGS2cLzRLtBp2LKNS2m1BV%2FkHCPlcg65GLrws7L0UsXVrZwwwIfKxAY6pgFlGf328eEeUZ5E%2BvMJNZ4JZUwb94fkTFKyyIBTVTN%2BgYyhUMLUuE4eSZeacFY4wRfH6P%2FzCkS%2Bwubu9c5X3el39xyGPPu4RR2JUGbiWJyguTezODJ6nCk7ygFSho2Xr8Vaj%2Bi58r29becrAFgRknFM2Ru37bxVVOvXSFajC6Y5IeyJvh7mrKAaWaZFcwmuC8blGHoSM8UxYvI%2F7yVlVNooT32JkMRF&X-Amz-Signature=a52da079737f216049d0f4c781508963a4a6f4449ee848a2ae1adba8c75aa5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGCAQWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIHMwgwq95wLShffOMmdjZlTRXaiSyDIJkWUwYlNbHaN6AiAPM0cttAwQWbbfb7Lz9NAXuAN7n7Q%2Fm8T9ITrHBgSORir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM4X3Ldbz1IrSB%2F5G%2FKtwDuYB6jUi1b1V3SCQG%2FuGgzzbaQzbyeWnQAjCz0HDqBGTxGkcKWqtRPWe%2FTKowVyfp45U6buHtAGcjoONklSnd6gYkKfICq6fzP05VPL1dOJKSzIAiTdsNIOV%2BuFmqPJDSNEnG9gmkP%2FmwnxgM%2B0ID%2FzikNRUdS4ZHionU6W3vegXrhlxSrT5K80S6sNEVOajuEouj4A6qMIAzWdrm5dt4kk9Zg8xUn%2FPmW5tklIUlHPLfyUbR%2Fwq7aEak23Go4KJyxI45wLJMjNKsNcXTOLt%2BxrYUE7TEwCZSl%2FQmUxxtY3lySjDZlxp1ave1QZMJ2m193ZTBIyyd%2BEsA5b1s6ca8O1v826JTmf67YDsZHX%2B7%2FnMViT3xCKZYWt8%2B0NzAQo5y%2F2aqNq27jopi%2BVmiycP0%2F6fijNOvOLq5U4fqAY%2FNCI%2BEok%2FB1fm0AI4GJ8mGrPdKkbufAgDMfq68GOZQPVriNr9XX1Zf0Pg4P7gOjALn4SLDFJFbcH4LneNe6%2FfUWKzhKuKeswm%2FO8CutT%2FZAHzpMAYYJcZIySzcV8sEHsgv1GXLx8G4nnTHEigUoIEeOel0JootSHaa8xhJQGS2cLzRLtBp2LKNS2m1BV%2FkHCPlcg65GLrws7L0UsXVrZwwwIfKxAY6pgFlGf328eEeUZ5E%2BvMJNZ4JZUwb94fkTFKyyIBTVTN%2BgYyhUMLUuE4eSZeacFY4wRfH6P%2FzCkS%2Bwubu9c5X3el39xyGPPu4RR2JUGbiWJyguTezODJ6nCk7ygFSho2Xr8Vaj%2Bi58r29becrAFgRknFM2Ru37bxVVOvXSFajC6Y5IeyJvh7mrKAaWaZFcwmuC8blGHoSM8UxYvI%2F7yVlVNooT32JkMRF&X-Amz-Signature=5dabd67541a63193123fd09e88790f7e13a11d94eb407262f1ddfa5c9c0f796e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
