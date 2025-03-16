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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTAZ2KX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzS78Wae7cz2mq4g%2BMomBG6RgJhf2OW%2BR1FwbYQRoKyAiEAw1W0BnVk%2FVE3GGspgnZGuord8JSKH%2Fmk%2B7vJokmnyFEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDERspToPd%2BwEwZUguCrcA8UTlcnuly2Bzu5bwBPLH8gM%2FqwhTUxYf8qYLtCdd2WP8igmlqbyzSKjGG5VCk1Ihi6z0VvizuTNlT%2FsbdbW9BT1t18gB3P4o33w%2BQ2VOYW1EhMWOpP6hMRPIAc%2FyQQYnVsuSs419guAka%2FwNxurQzEUR%2B%2B2DevIwayJdiiipL9c1gKMXfc4PcJQjSJwtpySfbkga%2BbLzuIOkA%2BbsGEBvLZQSlJNA4kun55Ztrx0N%2FLniODIWSJvJsfZUJom2BtRSlbcuivNkgp%2FxmexTGHOL7haQ2v6nRLAgHcUIpHoFcL8H%2FmTRZmmeOFPAYH5gRwo01pQbdoeeIh1t4krXqxuc08YPymMD8BeC%2FHcJb95wBfQu%2Byn%2BPxchmZdWBFDpcHtp9FRfAET1NJn5Y5JM8smNU8dNILzKotz%2ByxtptZ4ICykUHGZ1kesKPo%2BAZVWi5F%2FZ2E4hXh9DlTYcfmwBJaTcLbkYznuqXOrijWHVqQvSOD0i4bqRHClt1Cwv5Psn3okbCH9uqxA%2BwJPGBdcRfITWJ2H6q%2BNF%2FMVVme4rfZaPQH3Cv1nsi1dM7OU%2BqK6IrmyMKE2ge6lGG%2Fi%2BssV5TETzTSwCpKgrk5rAIUbxwQqFhR0m3WoR1uT1RL4%2FrIdMOvY2r4GOqUB8fVZsluLxaa9gwkTb5Z8imlIkCdqbz8orsW%2FqaDEUVSAObFVPEnvPo4goybqYpsksLpIML5nkGPHzl5ym4WrzrMF4coM55JzzLitbYS1pIA3%2BpNPO%2FMCv14wozIfCpFK2nzPrgutNMzzbR8uq1axoLhX03G9xxwAnBJ6ybUHhc1TPOBuWl5Dtnpo5xnPTIu5VrhwovP8Ns5H%2Foa7TCGcEEAqRQLP&X-Amz-Signature=ae2a89276c8bf7a83f1871c25cefc8d27b42a2ec21ef2070eb301bb5bc567b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTAZ2KX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzS78Wae7cz2mq4g%2BMomBG6RgJhf2OW%2BR1FwbYQRoKyAiEAw1W0BnVk%2FVE3GGspgnZGuord8JSKH%2Fmk%2B7vJokmnyFEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDERspToPd%2BwEwZUguCrcA8UTlcnuly2Bzu5bwBPLH8gM%2FqwhTUxYf8qYLtCdd2WP8igmlqbyzSKjGG5VCk1Ihi6z0VvizuTNlT%2FsbdbW9BT1t18gB3P4o33w%2BQ2VOYW1EhMWOpP6hMRPIAc%2FyQQYnVsuSs419guAka%2FwNxurQzEUR%2B%2B2DevIwayJdiiipL9c1gKMXfc4PcJQjSJwtpySfbkga%2BbLzuIOkA%2BbsGEBvLZQSlJNA4kun55Ztrx0N%2FLniODIWSJvJsfZUJom2BtRSlbcuivNkgp%2FxmexTGHOL7haQ2v6nRLAgHcUIpHoFcL8H%2FmTRZmmeOFPAYH5gRwo01pQbdoeeIh1t4krXqxuc08YPymMD8BeC%2FHcJb95wBfQu%2Byn%2BPxchmZdWBFDpcHtp9FRfAET1NJn5Y5JM8smNU8dNILzKotz%2ByxtptZ4ICykUHGZ1kesKPo%2BAZVWi5F%2FZ2E4hXh9DlTYcfmwBJaTcLbkYznuqXOrijWHVqQvSOD0i4bqRHClt1Cwv5Psn3okbCH9uqxA%2BwJPGBdcRfITWJ2H6q%2BNF%2FMVVme4rfZaPQH3Cv1nsi1dM7OU%2BqK6IrmyMKE2ge6lGG%2Fi%2BssV5TETzTSwCpKgrk5rAIUbxwQqFhR0m3WoR1uT1RL4%2FrIdMOvY2r4GOqUB8fVZsluLxaa9gwkTb5Z8imlIkCdqbz8orsW%2FqaDEUVSAObFVPEnvPo4goybqYpsksLpIML5nkGPHzl5ym4WrzrMF4coM55JzzLitbYS1pIA3%2BpNPO%2FMCv14wozIfCpFK2nzPrgutNMzzbR8uq1axoLhX03G9xxwAnBJ6ybUHhc1TPOBuWl5Dtnpo5xnPTIu5VrhwovP8Ns5H%2Foa7TCGcEEAqRQLP&X-Amz-Signature=8b72b299b2b83cecd3b0c669c6cfacb9ac29b51f9724b56e061fbf79fc6e8562&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTAZ2KX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzS78Wae7cz2mq4g%2BMomBG6RgJhf2OW%2BR1FwbYQRoKyAiEAw1W0BnVk%2FVE3GGspgnZGuord8JSKH%2Fmk%2B7vJokmnyFEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDERspToPd%2BwEwZUguCrcA8UTlcnuly2Bzu5bwBPLH8gM%2FqwhTUxYf8qYLtCdd2WP8igmlqbyzSKjGG5VCk1Ihi6z0VvizuTNlT%2FsbdbW9BT1t18gB3P4o33w%2BQ2VOYW1EhMWOpP6hMRPIAc%2FyQQYnVsuSs419guAka%2FwNxurQzEUR%2B%2B2DevIwayJdiiipL9c1gKMXfc4PcJQjSJwtpySfbkga%2BbLzuIOkA%2BbsGEBvLZQSlJNA4kun55Ztrx0N%2FLniODIWSJvJsfZUJom2BtRSlbcuivNkgp%2FxmexTGHOL7haQ2v6nRLAgHcUIpHoFcL8H%2FmTRZmmeOFPAYH5gRwo01pQbdoeeIh1t4krXqxuc08YPymMD8BeC%2FHcJb95wBfQu%2Byn%2BPxchmZdWBFDpcHtp9FRfAET1NJn5Y5JM8smNU8dNILzKotz%2ByxtptZ4ICykUHGZ1kesKPo%2BAZVWi5F%2FZ2E4hXh9DlTYcfmwBJaTcLbkYznuqXOrijWHVqQvSOD0i4bqRHClt1Cwv5Psn3okbCH9uqxA%2BwJPGBdcRfITWJ2H6q%2BNF%2FMVVme4rfZaPQH3Cv1nsi1dM7OU%2BqK6IrmyMKE2ge6lGG%2Fi%2BssV5TETzTSwCpKgrk5rAIUbxwQqFhR0m3WoR1uT1RL4%2FrIdMOvY2r4GOqUB8fVZsluLxaa9gwkTb5Z8imlIkCdqbz8orsW%2FqaDEUVSAObFVPEnvPo4goybqYpsksLpIML5nkGPHzl5ym4WrzrMF4coM55JzzLitbYS1pIA3%2BpNPO%2FMCv14wozIfCpFK2nzPrgutNMzzbR8uq1axoLhX03G9xxwAnBJ6ybUHhc1TPOBuWl5Dtnpo5xnPTIu5VrhwovP8Ns5H%2Foa7TCGcEEAqRQLP&X-Amz-Signature=807ad290baafc6f783c380ec64cc84ba10746a02078503587311c7ab3076963b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTAZ2KX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzS78Wae7cz2mq4g%2BMomBG6RgJhf2OW%2BR1FwbYQRoKyAiEAw1W0BnVk%2FVE3GGspgnZGuord8JSKH%2Fmk%2B7vJokmnyFEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDERspToPd%2BwEwZUguCrcA8UTlcnuly2Bzu5bwBPLH8gM%2FqwhTUxYf8qYLtCdd2WP8igmlqbyzSKjGG5VCk1Ihi6z0VvizuTNlT%2FsbdbW9BT1t18gB3P4o33w%2BQ2VOYW1EhMWOpP6hMRPIAc%2FyQQYnVsuSs419guAka%2FwNxurQzEUR%2B%2B2DevIwayJdiiipL9c1gKMXfc4PcJQjSJwtpySfbkga%2BbLzuIOkA%2BbsGEBvLZQSlJNA4kun55Ztrx0N%2FLniODIWSJvJsfZUJom2BtRSlbcuivNkgp%2FxmexTGHOL7haQ2v6nRLAgHcUIpHoFcL8H%2FmTRZmmeOFPAYH5gRwo01pQbdoeeIh1t4krXqxuc08YPymMD8BeC%2FHcJb95wBfQu%2Byn%2BPxchmZdWBFDpcHtp9FRfAET1NJn5Y5JM8smNU8dNILzKotz%2ByxtptZ4ICykUHGZ1kesKPo%2BAZVWi5F%2FZ2E4hXh9DlTYcfmwBJaTcLbkYznuqXOrijWHVqQvSOD0i4bqRHClt1Cwv5Psn3okbCH9uqxA%2BwJPGBdcRfITWJ2H6q%2BNF%2FMVVme4rfZaPQH3Cv1nsi1dM7OU%2BqK6IrmyMKE2ge6lGG%2Fi%2BssV5TETzTSwCpKgrk5rAIUbxwQqFhR0m3WoR1uT1RL4%2FrIdMOvY2r4GOqUB8fVZsluLxaa9gwkTb5Z8imlIkCdqbz8orsW%2FqaDEUVSAObFVPEnvPo4goybqYpsksLpIML5nkGPHzl5ym4WrzrMF4coM55JzzLitbYS1pIA3%2BpNPO%2FMCv14wozIfCpFK2nzPrgutNMzzbR8uq1axoLhX03G9xxwAnBJ6ybUHhc1TPOBuWl5Dtnpo5xnPTIu5VrhwovP8Ns5H%2Foa7TCGcEEAqRQLP&X-Amz-Signature=1f1a73e4183181b6fe65c18f8c1759408548c6057a464e83f0fd129ce638015c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTAZ2KX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzS78Wae7cz2mq4g%2BMomBG6RgJhf2OW%2BR1FwbYQRoKyAiEAw1W0BnVk%2FVE3GGspgnZGuord8JSKH%2Fmk%2B7vJokmnyFEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDERspToPd%2BwEwZUguCrcA8UTlcnuly2Bzu5bwBPLH8gM%2FqwhTUxYf8qYLtCdd2WP8igmlqbyzSKjGG5VCk1Ihi6z0VvizuTNlT%2FsbdbW9BT1t18gB3P4o33w%2BQ2VOYW1EhMWOpP6hMRPIAc%2FyQQYnVsuSs419guAka%2FwNxurQzEUR%2B%2B2DevIwayJdiiipL9c1gKMXfc4PcJQjSJwtpySfbkga%2BbLzuIOkA%2BbsGEBvLZQSlJNA4kun55Ztrx0N%2FLniODIWSJvJsfZUJom2BtRSlbcuivNkgp%2FxmexTGHOL7haQ2v6nRLAgHcUIpHoFcL8H%2FmTRZmmeOFPAYH5gRwo01pQbdoeeIh1t4krXqxuc08YPymMD8BeC%2FHcJb95wBfQu%2Byn%2BPxchmZdWBFDpcHtp9FRfAET1NJn5Y5JM8smNU8dNILzKotz%2ByxtptZ4ICykUHGZ1kesKPo%2BAZVWi5F%2FZ2E4hXh9DlTYcfmwBJaTcLbkYznuqXOrijWHVqQvSOD0i4bqRHClt1Cwv5Psn3okbCH9uqxA%2BwJPGBdcRfITWJ2H6q%2BNF%2FMVVme4rfZaPQH3Cv1nsi1dM7OU%2BqK6IrmyMKE2ge6lGG%2Fi%2BssV5TETzTSwCpKgrk5rAIUbxwQqFhR0m3WoR1uT1RL4%2FrIdMOvY2r4GOqUB8fVZsluLxaa9gwkTb5Z8imlIkCdqbz8orsW%2FqaDEUVSAObFVPEnvPo4goybqYpsksLpIML5nkGPHzl5ym4WrzrMF4coM55JzzLitbYS1pIA3%2BpNPO%2FMCv14wozIfCpFK2nzPrgutNMzzbR8uq1axoLhX03G9xxwAnBJ6ybUHhc1TPOBuWl5Dtnpo5xnPTIu5VrhwovP8Ns5H%2Foa7TCGcEEAqRQLP&X-Amz-Signature=71888d83e4d321db7d1c951029ed5cd884a9e846785bc72239dc596b413f9fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTAZ2KX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzS78Wae7cz2mq4g%2BMomBG6RgJhf2OW%2BR1FwbYQRoKyAiEAw1W0BnVk%2FVE3GGspgnZGuord8JSKH%2Fmk%2B7vJokmnyFEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDERspToPd%2BwEwZUguCrcA8UTlcnuly2Bzu5bwBPLH8gM%2FqwhTUxYf8qYLtCdd2WP8igmlqbyzSKjGG5VCk1Ihi6z0VvizuTNlT%2FsbdbW9BT1t18gB3P4o33w%2BQ2VOYW1EhMWOpP6hMRPIAc%2FyQQYnVsuSs419guAka%2FwNxurQzEUR%2B%2B2DevIwayJdiiipL9c1gKMXfc4PcJQjSJwtpySfbkga%2BbLzuIOkA%2BbsGEBvLZQSlJNA4kun55Ztrx0N%2FLniODIWSJvJsfZUJom2BtRSlbcuivNkgp%2FxmexTGHOL7haQ2v6nRLAgHcUIpHoFcL8H%2FmTRZmmeOFPAYH5gRwo01pQbdoeeIh1t4krXqxuc08YPymMD8BeC%2FHcJb95wBfQu%2Byn%2BPxchmZdWBFDpcHtp9FRfAET1NJn5Y5JM8smNU8dNILzKotz%2ByxtptZ4ICykUHGZ1kesKPo%2BAZVWi5F%2FZ2E4hXh9DlTYcfmwBJaTcLbkYznuqXOrijWHVqQvSOD0i4bqRHClt1Cwv5Psn3okbCH9uqxA%2BwJPGBdcRfITWJ2H6q%2BNF%2FMVVme4rfZaPQH3Cv1nsi1dM7OU%2BqK6IrmyMKE2ge6lGG%2Fi%2BssV5TETzTSwCpKgrk5rAIUbxwQqFhR0m3WoR1uT1RL4%2FrIdMOvY2r4GOqUB8fVZsluLxaa9gwkTb5Z8imlIkCdqbz8orsW%2FqaDEUVSAObFVPEnvPo4goybqYpsksLpIML5nkGPHzl5ym4WrzrMF4coM55JzzLitbYS1pIA3%2BpNPO%2FMCv14wozIfCpFK2nzPrgutNMzzbR8uq1axoLhX03G9xxwAnBJ6ybUHhc1TPOBuWl5Dtnpo5xnPTIu5VrhwovP8Ns5H%2Foa7TCGcEEAqRQLP&X-Amz-Signature=2e608c0e08ac7eeaaa289f0ac0b1a219ac854fe379dfb4bec5fe58508d4a4b71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTAZ2KX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzS78Wae7cz2mq4g%2BMomBG6RgJhf2OW%2BR1FwbYQRoKyAiEAw1W0BnVk%2FVE3GGspgnZGuord8JSKH%2Fmk%2B7vJokmnyFEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDERspToPd%2BwEwZUguCrcA8UTlcnuly2Bzu5bwBPLH8gM%2FqwhTUxYf8qYLtCdd2WP8igmlqbyzSKjGG5VCk1Ihi6z0VvizuTNlT%2FsbdbW9BT1t18gB3P4o33w%2BQ2VOYW1EhMWOpP6hMRPIAc%2FyQQYnVsuSs419guAka%2FwNxurQzEUR%2B%2B2DevIwayJdiiipL9c1gKMXfc4PcJQjSJwtpySfbkga%2BbLzuIOkA%2BbsGEBvLZQSlJNA4kun55Ztrx0N%2FLniODIWSJvJsfZUJom2BtRSlbcuivNkgp%2FxmexTGHOL7haQ2v6nRLAgHcUIpHoFcL8H%2FmTRZmmeOFPAYH5gRwo01pQbdoeeIh1t4krXqxuc08YPymMD8BeC%2FHcJb95wBfQu%2Byn%2BPxchmZdWBFDpcHtp9FRfAET1NJn5Y5JM8smNU8dNILzKotz%2ByxtptZ4ICykUHGZ1kesKPo%2BAZVWi5F%2FZ2E4hXh9DlTYcfmwBJaTcLbkYznuqXOrijWHVqQvSOD0i4bqRHClt1Cwv5Psn3okbCH9uqxA%2BwJPGBdcRfITWJ2H6q%2BNF%2FMVVme4rfZaPQH3Cv1nsi1dM7OU%2BqK6IrmyMKE2ge6lGG%2Fi%2BssV5TETzTSwCpKgrk5rAIUbxwQqFhR0m3WoR1uT1RL4%2FrIdMOvY2r4GOqUB8fVZsluLxaa9gwkTb5Z8imlIkCdqbz8orsW%2FqaDEUVSAObFVPEnvPo4goybqYpsksLpIML5nkGPHzl5ym4WrzrMF4coM55JzzLitbYS1pIA3%2BpNPO%2FMCv14wozIfCpFK2nzPrgutNMzzbR8uq1axoLhX03G9xxwAnBJ6ybUHhc1TPOBuWl5Dtnpo5xnPTIu5VrhwovP8Ns5H%2Foa7TCGcEEAqRQLP&X-Amz-Signature=2f42401b7d9fa82e77582897184b6b33c7f8d3c02310abf7cbf6accfb27e0cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTAZ2KX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzS78Wae7cz2mq4g%2BMomBG6RgJhf2OW%2BR1FwbYQRoKyAiEAw1W0BnVk%2FVE3GGspgnZGuord8JSKH%2Fmk%2B7vJokmnyFEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDERspToPd%2BwEwZUguCrcA8UTlcnuly2Bzu5bwBPLH8gM%2FqwhTUxYf8qYLtCdd2WP8igmlqbyzSKjGG5VCk1Ihi6z0VvizuTNlT%2FsbdbW9BT1t18gB3P4o33w%2BQ2VOYW1EhMWOpP6hMRPIAc%2FyQQYnVsuSs419guAka%2FwNxurQzEUR%2B%2B2DevIwayJdiiipL9c1gKMXfc4PcJQjSJwtpySfbkga%2BbLzuIOkA%2BbsGEBvLZQSlJNA4kun55Ztrx0N%2FLniODIWSJvJsfZUJom2BtRSlbcuivNkgp%2FxmexTGHOL7haQ2v6nRLAgHcUIpHoFcL8H%2FmTRZmmeOFPAYH5gRwo01pQbdoeeIh1t4krXqxuc08YPymMD8BeC%2FHcJb95wBfQu%2Byn%2BPxchmZdWBFDpcHtp9FRfAET1NJn5Y5JM8smNU8dNILzKotz%2ByxtptZ4ICykUHGZ1kesKPo%2BAZVWi5F%2FZ2E4hXh9DlTYcfmwBJaTcLbkYznuqXOrijWHVqQvSOD0i4bqRHClt1Cwv5Psn3okbCH9uqxA%2BwJPGBdcRfITWJ2H6q%2BNF%2FMVVme4rfZaPQH3Cv1nsi1dM7OU%2BqK6IrmyMKE2ge6lGG%2Fi%2BssV5TETzTSwCpKgrk5rAIUbxwQqFhR0m3WoR1uT1RL4%2FrIdMOvY2r4GOqUB8fVZsluLxaa9gwkTb5Z8imlIkCdqbz8orsW%2FqaDEUVSAObFVPEnvPo4goybqYpsksLpIML5nkGPHzl5ym4WrzrMF4coM55JzzLitbYS1pIA3%2BpNPO%2FMCv14wozIfCpFK2nzPrgutNMzzbR8uq1axoLhX03G9xxwAnBJ6ybUHhc1TPOBuWl5Dtnpo5xnPTIu5VrhwovP8Ns5H%2Foa7TCGcEEAqRQLP&X-Amz-Signature=2d92abe4cc232dadce6d591601fd2660f259985cde496489e25fd6810fca4099&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
