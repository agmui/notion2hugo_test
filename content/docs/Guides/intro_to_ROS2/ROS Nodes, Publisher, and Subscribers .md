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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7QF5YL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHN7JZArTlILLWvSNHglMDqWzptXENbvnxn82h35LOwaAiEAqMFl7cMTuUHzDC3%2BGILzQkpcUPrwMRLU%2B02PigYNQS0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpO7z1VZMH%2F1oft3CrcA4DBY3EYCGPA%2F%2F62MO60%2FSUxNtvkPlDIzYkGt4qym6qCFugExA2tFlwl7VUX7Ufqu6Znk2ERbpxmixvJQAu1TLRJ11bWZTSQwEoR8Kbn45vS%2FmozfDNjaqbUjQ5QoPfbgdm9YP%2BvoIur8Kb8BaPxXFYkpEIb7j9tZiY2MRaHDCo2ysTiLJHC13%2BlKGgTKiqlwwrDINtGW1soaEbnkHGi6U8lWn8wROcIeG47Z5OTI9G7BES%2FHQulH68FTOyopBlzHSUch9R3UCCac27I3flzkHiCKnFnri07w7CSaW2rW7n4B0bVy%2Bsq350uMLF3PQK8A4KaIR5NtpZ4%2FGHvE75wJPCZ6KQDK0CXu9Qolvfy72uKw3iI7%2B6iWA1ApAr%2BtbxM53N%2F24qkI1z%2FT1OTXjg7QCliXH4eJHhs6qqEwJoQcSHqUDpzyu4Jx7UGap9j0MAtPjdwrIgHztBszJaJrd381NUWyRLAfilMfeOCN9wdf9OXHyUICP4nZGNIIvDhck1zXYzPUXdnwR6BfrTp%2FTlF98UqnjFNRSVtNPfkZzPceIMFwdr22o1CMxG0RuSpsxjoswMyDBs0ik7lzmze4vg3ua2wR3DIRIUoIjS%2BDdYzsW2Tz9Ppmkf1ddYIlwItMISlrb8GOqUBDpcn4QDHVsMdghS%2FbUOet1kgDLvvDYl7of9nSYIPKCwZ2Jc%2Fkq2JTku2YcDuTRs%2Bj3Arxt0jrWQXUxC3cqTuGBnxpwDGibK%2F1LJVKyZuBsdC6%2FXN0edhnKEs5Dj8jhZW7cb3gF6t0%2B1MRLq1waJzlTA%2BMQNmNAh4PfOL96DFxwSdP6QVMBM5uN2P5m4SwfwrMuPju5wpjJ3TFBFDIAymF0Ewcg6Q&X-Amz-Signature=cad5b04666acc57f43dc26f670aac53f2366676e8b9c26486a4edd9bb0b3baa5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7QF5YL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHN7JZArTlILLWvSNHglMDqWzptXENbvnxn82h35LOwaAiEAqMFl7cMTuUHzDC3%2BGILzQkpcUPrwMRLU%2B02PigYNQS0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpO7z1VZMH%2F1oft3CrcA4DBY3EYCGPA%2F%2F62MO60%2FSUxNtvkPlDIzYkGt4qym6qCFugExA2tFlwl7VUX7Ufqu6Znk2ERbpxmixvJQAu1TLRJ11bWZTSQwEoR8Kbn45vS%2FmozfDNjaqbUjQ5QoPfbgdm9YP%2BvoIur8Kb8BaPxXFYkpEIb7j9tZiY2MRaHDCo2ysTiLJHC13%2BlKGgTKiqlwwrDINtGW1soaEbnkHGi6U8lWn8wROcIeG47Z5OTI9G7BES%2FHQulH68FTOyopBlzHSUch9R3UCCac27I3flzkHiCKnFnri07w7CSaW2rW7n4B0bVy%2Bsq350uMLF3PQK8A4KaIR5NtpZ4%2FGHvE75wJPCZ6KQDK0CXu9Qolvfy72uKw3iI7%2B6iWA1ApAr%2BtbxM53N%2F24qkI1z%2FT1OTXjg7QCliXH4eJHhs6qqEwJoQcSHqUDpzyu4Jx7UGap9j0MAtPjdwrIgHztBszJaJrd381NUWyRLAfilMfeOCN9wdf9OXHyUICP4nZGNIIvDhck1zXYzPUXdnwR6BfrTp%2FTlF98UqnjFNRSVtNPfkZzPceIMFwdr22o1CMxG0RuSpsxjoswMyDBs0ik7lzmze4vg3ua2wR3DIRIUoIjS%2BDdYzsW2Tz9Ppmkf1ddYIlwItMISlrb8GOqUBDpcn4QDHVsMdghS%2FbUOet1kgDLvvDYl7of9nSYIPKCwZ2Jc%2Fkq2JTku2YcDuTRs%2Bj3Arxt0jrWQXUxC3cqTuGBnxpwDGibK%2F1LJVKyZuBsdC6%2FXN0edhnKEs5Dj8jhZW7cb3gF6t0%2B1MRLq1waJzlTA%2BMQNmNAh4PfOL96DFxwSdP6QVMBM5uN2P5m4SwfwrMuPju5wpjJ3TFBFDIAymF0Ewcg6Q&X-Amz-Signature=31fc23620981fedd581fcae384c10be2511a6cfa94125125d6b956fa9fb4cfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7QF5YL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHN7JZArTlILLWvSNHglMDqWzptXENbvnxn82h35LOwaAiEAqMFl7cMTuUHzDC3%2BGILzQkpcUPrwMRLU%2B02PigYNQS0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpO7z1VZMH%2F1oft3CrcA4DBY3EYCGPA%2F%2F62MO60%2FSUxNtvkPlDIzYkGt4qym6qCFugExA2tFlwl7VUX7Ufqu6Znk2ERbpxmixvJQAu1TLRJ11bWZTSQwEoR8Kbn45vS%2FmozfDNjaqbUjQ5QoPfbgdm9YP%2BvoIur8Kb8BaPxXFYkpEIb7j9tZiY2MRaHDCo2ysTiLJHC13%2BlKGgTKiqlwwrDINtGW1soaEbnkHGi6U8lWn8wROcIeG47Z5OTI9G7BES%2FHQulH68FTOyopBlzHSUch9R3UCCac27I3flzkHiCKnFnri07w7CSaW2rW7n4B0bVy%2Bsq350uMLF3PQK8A4KaIR5NtpZ4%2FGHvE75wJPCZ6KQDK0CXu9Qolvfy72uKw3iI7%2B6iWA1ApAr%2BtbxM53N%2F24qkI1z%2FT1OTXjg7QCliXH4eJHhs6qqEwJoQcSHqUDpzyu4Jx7UGap9j0MAtPjdwrIgHztBszJaJrd381NUWyRLAfilMfeOCN9wdf9OXHyUICP4nZGNIIvDhck1zXYzPUXdnwR6BfrTp%2FTlF98UqnjFNRSVtNPfkZzPceIMFwdr22o1CMxG0RuSpsxjoswMyDBs0ik7lzmze4vg3ua2wR3DIRIUoIjS%2BDdYzsW2Tz9Ppmkf1ddYIlwItMISlrb8GOqUBDpcn4QDHVsMdghS%2FbUOet1kgDLvvDYl7of9nSYIPKCwZ2Jc%2Fkq2JTku2YcDuTRs%2Bj3Arxt0jrWQXUxC3cqTuGBnxpwDGibK%2F1LJVKyZuBsdC6%2FXN0edhnKEs5Dj8jhZW7cb3gF6t0%2B1MRLq1waJzlTA%2BMQNmNAh4PfOL96DFxwSdP6QVMBM5uN2P5m4SwfwrMuPju5wpjJ3TFBFDIAymF0Ewcg6Q&X-Amz-Signature=6a72e57e046ee29b7702203aa262e429313d150923c4b0c3683f91a878f37d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7QF5YL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHN7JZArTlILLWvSNHglMDqWzptXENbvnxn82h35LOwaAiEAqMFl7cMTuUHzDC3%2BGILzQkpcUPrwMRLU%2B02PigYNQS0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpO7z1VZMH%2F1oft3CrcA4DBY3EYCGPA%2F%2F62MO60%2FSUxNtvkPlDIzYkGt4qym6qCFugExA2tFlwl7VUX7Ufqu6Znk2ERbpxmixvJQAu1TLRJ11bWZTSQwEoR8Kbn45vS%2FmozfDNjaqbUjQ5QoPfbgdm9YP%2BvoIur8Kb8BaPxXFYkpEIb7j9tZiY2MRaHDCo2ysTiLJHC13%2BlKGgTKiqlwwrDINtGW1soaEbnkHGi6U8lWn8wROcIeG47Z5OTI9G7BES%2FHQulH68FTOyopBlzHSUch9R3UCCac27I3flzkHiCKnFnri07w7CSaW2rW7n4B0bVy%2Bsq350uMLF3PQK8A4KaIR5NtpZ4%2FGHvE75wJPCZ6KQDK0CXu9Qolvfy72uKw3iI7%2B6iWA1ApAr%2BtbxM53N%2F24qkI1z%2FT1OTXjg7QCliXH4eJHhs6qqEwJoQcSHqUDpzyu4Jx7UGap9j0MAtPjdwrIgHztBszJaJrd381NUWyRLAfilMfeOCN9wdf9OXHyUICP4nZGNIIvDhck1zXYzPUXdnwR6BfrTp%2FTlF98UqnjFNRSVtNPfkZzPceIMFwdr22o1CMxG0RuSpsxjoswMyDBs0ik7lzmze4vg3ua2wR3DIRIUoIjS%2BDdYzsW2Tz9Ppmkf1ddYIlwItMISlrb8GOqUBDpcn4QDHVsMdghS%2FbUOet1kgDLvvDYl7of9nSYIPKCwZ2Jc%2Fkq2JTku2YcDuTRs%2Bj3Arxt0jrWQXUxC3cqTuGBnxpwDGibK%2F1LJVKyZuBsdC6%2FXN0edhnKEs5Dj8jhZW7cb3gF6t0%2B1MRLq1waJzlTA%2BMQNmNAh4PfOL96DFxwSdP6QVMBM5uN2P5m4SwfwrMuPju5wpjJ3TFBFDIAymF0Ewcg6Q&X-Amz-Signature=200864552dda75d768e55655922ba51e519de84d922b9b70e9904d294b0986b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7QF5YL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHN7JZArTlILLWvSNHglMDqWzptXENbvnxn82h35LOwaAiEAqMFl7cMTuUHzDC3%2BGILzQkpcUPrwMRLU%2B02PigYNQS0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpO7z1VZMH%2F1oft3CrcA4DBY3EYCGPA%2F%2F62MO60%2FSUxNtvkPlDIzYkGt4qym6qCFugExA2tFlwl7VUX7Ufqu6Znk2ERbpxmixvJQAu1TLRJ11bWZTSQwEoR8Kbn45vS%2FmozfDNjaqbUjQ5QoPfbgdm9YP%2BvoIur8Kb8BaPxXFYkpEIb7j9tZiY2MRaHDCo2ysTiLJHC13%2BlKGgTKiqlwwrDINtGW1soaEbnkHGi6U8lWn8wROcIeG47Z5OTI9G7BES%2FHQulH68FTOyopBlzHSUch9R3UCCac27I3flzkHiCKnFnri07w7CSaW2rW7n4B0bVy%2Bsq350uMLF3PQK8A4KaIR5NtpZ4%2FGHvE75wJPCZ6KQDK0CXu9Qolvfy72uKw3iI7%2B6iWA1ApAr%2BtbxM53N%2F24qkI1z%2FT1OTXjg7QCliXH4eJHhs6qqEwJoQcSHqUDpzyu4Jx7UGap9j0MAtPjdwrIgHztBszJaJrd381NUWyRLAfilMfeOCN9wdf9OXHyUICP4nZGNIIvDhck1zXYzPUXdnwR6BfrTp%2FTlF98UqnjFNRSVtNPfkZzPceIMFwdr22o1CMxG0RuSpsxjoswMyDBs0ik7lzmze4vg3ua2wR3DIRIUoIjS%2BDdYzsW2Tz9Ppmkf1ddYIlwItMISlrb8GOqUBDpcn4QDHVsMdghS%2FbUOet1kgDLvvDYl7of9nSYIPKCwZ2Jc%2Fkq2JTku2YcDuTRs%2Bj3Arxt0jrWQXUxC3cqTuGBnxpwDGibK%2F1LJVKyZuBsdC6%2FXN0edhnKEs5Dj8jhZW7cb3gF6t0%2B1MRLq1waJzlTA%2BMQNmNAh4PfOL96DFxwSdP6QVMBM5uN2P5m4SwfwrMuPju5wpjJ3TFBFDIAymF0Ewcg6Q&X-Amz-Signature=8bed046cf70f1bd8d8c436501f4f8a436097501a341a11695815658f950583f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7QF5YL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHN7JZArTlILLWvSNHglMDqWzptXENbvnxn82h35LOwaAiEAqMFl7cMTuUHzDC3%2BGILzQkpcUPrwMRLU%2B02PigYNQS0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpO7z1VZMH%2F1oft3CrcA4DBY3EYCGPA%2F%2F62MO60%2FSUxNtvkPlDIzYkGt4qym6qCFugExA2tFlwl7VUX7Ufqu6Znk2ERbpxmixvJQAu1TLRJ11bWZTSQwEoR8Kbn45vS%2FmozfDNjaqbUjQ5QoPfbgdm9YP%2BvoIur8Kb8BaPxXFYkpEIb7j9tZiY2MRaHDCo2ysTiLJHC13%2BlKGgTKiqlwwrDINtGW1soaEbnkHGi6U8lWn8wROcIeG47Z5OTI9G7BES%2FHQulH68FTOyopBlzHSUch9R3UCCac27I3flzkHiCKnFnri07w7CSaW2rW7n4B0bVy%2Bsq350uMLF3PQK8A4KaIR5NtpZ4%2FGHvE75wJPCZ6KQDK0CXu9Qolvfy72uKw3iI7%2B6iWA1ApAr%2BtbxM53N%2F24qkI1z%2FT1OTXjg7QCliXH4eJHhs6qqEwJoQcSHqUDpzyu4Jx7UGap9j0MAtPjdwrIgHztBszJaJrd381NUWyRLAfilMfeOCN9wdf9OXHyUICP4nZGNIIvDhck1zXYzPUXdnwR6BfrTp%2FTlF98UqnjFNRSVtNPfkZzPceIMFwdr22o1CMxG0RuSpsxjoswMyDBs0ik7lzmze4vg3ua2wR3DIRIUoIjS%2BDdYzsW2Tz9Ppmkf1ddYIlwItMISlrb8GOqUBDpcn4QDHVsMdghS%2FbUOet1kgDLvvDYl7of9nSYIPKCwZ2Jc%2Fkq2JTku2YcDuTRs%2Bj3Arxt0jrWQXUxC3cqTuGBnxpwDGibK%2F1LJVKyZuBsdC6%2FXN0edhnKEs5Dj8jhZW7cb3gF6t0%2B1MRLq1waJzlTA%2BMQNmNAh4PfOL96DFxwSdP6QVMBM5uN2P5m4SwfwrMuPju5wpjJ3TFBFDIAymF0Ewcg6Q&X-Amz-Signature=10466ce7bff8399449d629d7b700d7b4955c4371cd452b425238c02a5627a9f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7QF5YL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHN7JZArTlILLWvSNHglMDqWzptXENbvnxn82h35LOwaAiEAqMFl7cMTuUHzDC3%2BGILzQkpcUPrwMRLU%2B02PigYNQS0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpO7z1VZMH%2F1oft3CrcA4DBY3EYCGPA%2F%2F62MO60%2FSUxNtvkPlDIzYkGt4qym6qCFugExA2tFlwl7VUX7Ufqu6Znk2ERbpxmixvJQAu1TLRJ11bWZTSQwEoR8Kbn45vS%2FmozfDNjaqbUjQ5QoPfbgdm9YP%2BvoIur8Kb8BaPxXFYkpEIb7j9tZiY2MRaHDCo2ysTiLJHC13%2BlKGgTKiqlwwrDINtGW1soaEbnkHGi6U8lWn8wROcIeG47Z5OTI9G7BES%2FHQulH68FTOyopBlzHSUch9R3UCCac27I3flzkHiCKnFnri07w7CSaW2rW7n4B0bVy%2Bsq350uMLF3PQK8A4KaIR5NtpZ4%2FGHvE75wJPCZ6KQDK0CXu9Qolvfy72uKw3iI7%2B6iWA1ApAr%2BtbxM53N%2F24qkI1z%2FT1OTXjg7QCliXH4eJHhs6qqEwJoQcSHqUDpzyu4Jx7UGap9j0MAtPjdwrIgHztBszJaJrd381NUWyRLAfilMfeOCN9wdf9OXHyUICP4nZGNIIvDhck1zXYzPUXdnwR6BfrTp%2FTlF98UqnjFNRSVtNPfkZzPceIMFwdr22o1CMxG0RuSpsxjoswMyDBs0ik7lzmze4vg3ua2wR3DIRIUoIjS%2BDdYzsW2Tz9Ppmkf1ddYIlwItMISlrb8GOqUBDpcn4QDHVsMdghS%2FbUOet1kgDLvvDYl7of9nSYIPKCwZ2Jc%2Fkq2JTku2YcDuTRs%2Bj3Arxt0jrWQXUxC3cqTuGBnxpwDGibK%2F1LJVKyZuBsdC6%2FXN0edhnKEs5Dj8jhZW7cb3gF6t0%2B1MRLq1waJzlTA%2BMQNmNAh4PfOL96DFxwSdP6QVMBM5uN2P5m4SwfwrMuPju5wpjJ3TFBFDIAymF0Ewcg6Q&X-Amz-Signature=98a401e83b3373b7ec0fba236f0160d5190b1947677b4eeae9662bf9e502d79f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ7QF5YL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHN7JZArTlILLWvSNHglMDqWzptXENbvnxn82h35LOwaAiEAqMFl7cMTuUHzDC3%2BGILzQkpcUPrwMRLU%2B02PigYNQS0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpO7z1VZMH%2F1oft3CrcA4DBY3EYCGPA%2F%2F62MO60%2FSUxNtvkPlDIzYkGt4qym6qCFugExA2tFlwl7VUX7Ufqu6Znk2ERbpxmixvJQAu1TLRJ11bWZTSQwEoR8Kbn45vS%2FmozfDNjaqbUjQ5QoPfbgdm9YP%2BvoIur8Kb8BaPxXFYkpEIb7j9tZiY2MRaHDCo2ysTiLJHC13%2BlKGgTKiqlwwrDINtGW1soaEbnkHGi6U8lWn8wROcIeG47Z5OTI9G7BES%2FHQulH68FTOyopBlzHSUch9R3UCCac27I3flzkHiCKnFnri07w7CSaW2rW7n4B0bVy%2Bsq350uMLF3PQK8A4KaIR5NtpZ4%2FGHvE75wJPCZ6KQDK0CXu9Qolvfy72uKw3iI7%2B6iWA1ApAr%2BtbxM53N%2F24qkI1z%2FT1OTXjg7QCliXH4eJHhs6qqEwJoQcSHqUDpzyu4Jx7UGap9j0MAtPjdwrIgHztBszJaJrd381NUWyRLAfilMfeOCN9wdf9OXHyUICP4nZGNIIvDhck1zXYzPUXdnwR6BfrTp%2FTlF98UqnjFNRSVtNPfkZzPceIMFwdr22o1CMxG0RuSpsxjoswMyDBs0ik7lzmze4vg3ua2wR3DIRIUoIjS%2BDdYzsW2Tz9Ppmkf1ddYIlwItMISlrb8GOqUBDpcn4QDHVsMdghS%2FbUOet1kgDLvvDYl7of9nSYIPKCwZ2Jc%2Fkq2JTku2YcDuTRs%2Bj3Arxt0jrWQXUxC3cqTuGBnxpwDGibK%2F1LJVKyZuBsdC6%2FXN0edhnKEs5Dj8jhZW7cb3gF6t0%2B1MRLq1waJzlTA%2BMQNmNAh4PfOL96DFxwSdP6QVMBM5uN2P5m4SwfwrMuPju5wpjJ3TFBFDIAymF0Ewcg6Q&X-Amz-Signature=1c64f34711a5e51df372af6b045117d160083e3439a2d3b79eff7c93cb26d880&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
