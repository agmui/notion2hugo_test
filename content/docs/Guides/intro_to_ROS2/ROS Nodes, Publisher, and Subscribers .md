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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT772Q2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBxlMDsl9YN7w6BzOK%2Fgp3BCQC1BnUtzPmrApkaQyA5wAiAjgCtr2xAxFj0N6xejEgUHwEykohURNEAKxHlUPbC3LCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMn3McTpGJi%2B7HjmRBKtwDLpsIXthPW%2Fr2hfLGwK7h%2B0t0KoyS8UduwbhgW%2Fw0rfGl09KzuLZIIupkYcRmxROMXQR2oj6Rad2IueOEKlWwf92hKEkBLmjAsnALa8YfEWZC%2BUchAmw%2Bw25sLtrXZjTpaitBV3MEjqdOnc%2F1brzVCuAJr5UK36yEL4J%2BMJjQGEggKVBApC4NeAM72BFpp8OiS3Q5PCLNCpPCMDDDhG%2BNW8nJX9%2FNrsPEAjy8jLV0ogq1L6ONqAD1ytU7AYmWfYEP6vVNTvn64TMlBT3vuoY5wQcg%2BdACM67pxjn1uYivRUvm210b8fX4BslPc9kF5P8VHIgE3Y28IorkYRuNu6owlKEb7rxC0EPHA52KFagMMjt43sOH8RX%2Bh5fHlSrqzbDdTuyga%2BfIlbJaa42rEyxDXnA3TXB1eZjAqPiQQh6V6A%2BVdo8WGMpStbrxCpb8zjQsdnA9r8OCHzEDmwf2oWV2A8ikSbQ8%2B6vCdenldtWVYHonSqWTz228q25UreZfUWWbV2E0V%2B5jTDQSJZBS5E0p8vaWlLD1hYF%2BX0P2nHbCF7ENhr0Ju%2B9AdcmiLkWTFVs%2B8qMMNSPc1HpyCcDvRyK4Rzil7So0EX3mRAonpSSC0zXjSvSY5kQGOCZSkRIwl8K1wgY6pgEslWNQ5gNXJBotabYP3BkoutRhIOKGyuGZkaChl0j8zlbAm%2Bjq5uQyL1DXpCkd%2F7qEw60Pf1Vc1o0SzabhnDRVt6emZYoEOeA9Tdo8CrdTDixogKS22uJE3CGJLRj5IaCv6jNdppX8MM0SDSFITiOOwKCABuO9MOX3%2FGb%2FRFL2RvYUw2UWoXZBHy%2FctBb1C4rJRmP8UfpYIOetgVKNI4XXsAOwQ9D6&X-Amz-Signature=5e822bafd967a1555ce3213dff0b678e7d1f2b62f01d06903b8bae1f08b6915b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT772Q2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBxlMDsl9YN7w6BzOK%2Fgp3BCQC1BnUtzPmrApkaQyA5wAiAjgCtr2xAxFj0N6xejEgUHwEykohURNEAKxHlUPbC3LCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMn3McTpGJi%2B7HjmRBKtwDLpsIXthPW%2Fr2hfLGwK7h%2B0t0KoyS8UduwbhgW%2Fw0rfGl09KzuLZIIupkYcRmxROMXQR2oj6Rad2IueOEKlWwf92hKEkBLmjAsnALa8YfEWZC%2BUchAmw%2Bw25sLtrXZjTpaitBV3MEjqdOnc%2F1brzVCuAJr5UK36yEL4J%2BMJjQGEggKVBApC4NeAM72BFpp8OiS3Q5PCLNCpPCMDDDhG%2BNW8nJX9%2FNrsPEAjy8jLV0ogq1L6ONqAD1ytU7AYmWfYEP6vVNTvn64TMlBT3vuoY5wQcg%2BdACM67pxjn1uYivRUvm210b8fX4BslPc9kF5P8VHIgE3Y28IorkYRuNu6owlKEb7rxC0EPHA52KFagMMjt43sOH8RX%2Bh5fHlSrqzbDdTuyga%2BfIlbJaa42rEyxDXnA3TXB1eZjAqPiQQh6V6A%2BVdo8WGMpStbrxCpb8zjQsdnA9r8OCHzEDmwf2oWV2A8ikSbQ8%2B6vCdenldtWVYHonSqWTz228q25UreZfUWWbV2E0V%2B5jTDQSJZBS5E0p8vaWlLD1hYF%2BX0P2nHbCF7ENhr0Ju%2B9AdcmiLkWTFVs%2B8qMMNSPc1HpyCcDvRyK4Rzil7So0EX3mRAonpSSC0zXjSvSY5kQGOCZSkRIwl8K1wgY6pgEslWNQ5gNXJBotabYP3BkoutRhIOKGyuGZkaChl0j8zlbAm%2Bjq5uQyL1DXpCkd%2F7qEw60Pf1Vc1o0SzabhnDRVt6emZYoEOeA9Tdo8CrdTDixogKS22uJE3CGJLRj5IaCv6jNdppX8MM0SDSFITiOOwKCABuO9MOX3%2FGb%2FRFL2RvYUw2UWoXZBHy%2FctBb1C4rJRmP8UfpYIOetgVKNI4XXsAOwQ9D6&X-Amz-Signature=1c32ed75f334e46c0c7fb48254bb6119951c152b8b3dd1224d40e61df58c1fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT772Q2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBxlMDsl9YN7w6BzOK%2Fgp3BCQC1BnUtzPmrApkaQyA5wAiAjgCtr2xAxFj0N6xejEgUHwEykohURNEAKxHlUPbC3LCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMn3McTpGJi%2B7HjmRBKtwDLpsIXthPW%2Fr2hfLGwK7h%2B0t0KoyS8UduwbhgW%2Fw0rfGl09KzuLZIIupkYcRmxROMXQR2oj6Rad2IueOEKlWwf92hKEkBLmjAsnALa8YfEWZC%2BUchAmw%2Bw25sLtrXZjTpaitBV3MEjqdOnc%2F1brzVCuAJr5UK36yEL4J%2BMJjQGEggKVBApC4NeAM72BFpp8OiS3Q5PCLNCpPCMDDDhG%2BNW8nJX9%2FNrsPEAjy8jLV0ogq1L6ONqAD1ytU7AYmWfYEP6vVNTvn64TMlBT3vuoY5wQcg%2BdACM67pxjn1uYivRUvm210b8fX4BslPc9kF5P8VHIgE3Y28IorkYRuNu6owlKEb7rxC0EPHA52KFagMMjt43sOH8RX%2Bh5fHlSrqzbDdTuyga%2BfIlbJaa42rEyxDXnA3TXB1eZjAqPiQQh6V6A%2BVdo8WGMpStbrxCpb8zjQsdnA9r8OCHzEDmwf2oWV2A8ikSbQ8%2B6vCdenldtWVYHonSqWTz228q25UreZfUWWbV2E0V%2B5jTDQSJZBS5E0p8vaWlLD1hYF%2BX0P2nHbCF7ENhr0Ju%2B9AdcmiLkWTFVs%2B8qMMNSPc1HpyCcDvRyK4Rzil7So0EX3mRAonpSSC0zXjSvSY5kQGOCZSkRIwl8K1wgY6pgEslWNQ5gNXJBotabYP3BkoutRhIOKGyuGZkaChl0j8zlbAm%2Bjq5uQyL1DXpCkd%2F7qEw60Pf1Vc1o0SzabhnDRVt6emZYoEOeA9Tdo8CrdTDixogKS22uJE3CGJLRj5IaCv6jNdppX8MM0SDSFITiOOwKCABuO9MOX3%2FGb%2FRFL2RvYUw2UWoXZBHy%2FctBb1C4rJRmP8UfpYIOetgVKNI4XXsAOwQ9D6&X-Amz-Signature=feff7e03d9faf5fcef1e4041615a92df42c620b73a3bc5c129357f8c2aa1c639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT772Q2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBxlMDsl9YN7w6BzOK%2Fgp3BCQC1BnUtzPmrApkaQyA5wAiAjgCtr2xAxFj0N6xejEgUHwEykohURNEAKxHlUPbC3LCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMn3McTpGJi%2B7HjmRBKtwDLpsIXthPW%2Fr2hfLGwK7h%2B0t0KoyS8UduwbhgW%2Fw0rfGl09KzuLZIIupkYcRmxROMXQR2oj6Rad2IueOEKlWwf92hKEkBLmjAsnALa8YfEWZC%2BUchAmw%2Bw25sLtrXZjTpaitBV3MEjqdOnc%2F1brzVCuAJr5UK36yEL4J%2BMJjQGEggKVBApC4NeAM72BFpp8OiS3Q5PCLNCpPCMDDDhG%2BNW8nJX9%2FNrsPEAjy8jLV0ogq1L6ONqAD1ytU7AYmWfYEP6vVNTvn64TMlBT3vuoY5wQcg%2BdACM67pxjn1uYivRUvm210b8fX4BslPc9kF5P8VHIgE3Y28IorkYRuNu6owlKEb7rxC0EPHA52KFagMMjt43sOH8RX%2Bh5fHlSrqzbDdTuyga%2BfIlbJaa42rEyxDXnA3TXB1eZjAqPiQQh6V6A%2BVdo8WGMpStbrxCpb8zjQsdnA9r8OCHzEDmwf2oWV2A8ikSbQ8%2B6vCdenldtWVYHonSqWTz228q25UreZfUWWbV2E0V%2B5jTDQSJZBS5E0p8vaWlLD1hYF%2BX0P2nHbCF7ENhr0Ju%2B9AdcmiLkWTFVs%2B8qMMNSPc1HpyCcDvRyK4Rzil7So0EX3mRAonpSSC0zXjSvSY5kQGOCZSkRIwl8K1wgY6pgEslWNQ5gNXJBotabYP3BkoutRhIOKGyuGZkaChl0j8zlbAm%2Bjq5uQyL1DXpCkd%2F7qEw60Pf1Vc1o0SzabhnDRVt6emZYoEOeA9Tdo8CrdTDixogKS22uJE3CGJLRj5IaCv6jNdppX8MM0SDSFITiOOwKCABuO9MOX3%2FGb%2FRFL2RvYUw2UWoXZBHy%2FctBb1C4rJRmP8UfpYIOetgVKNI4XXsAOwQ9D6&X-Amz-Signature=a036c662e2c39edee0857cbd428b472bf09dc8bedbe69bba652e4bf62aa63a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT772Q2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBxlMDsl9YN7w6BzOK%2Fgp3BCQC1BnUtzPmrApkaQyA5wAiAjgCtr2xAxFj0N6xejEgUHwEykohURNEAKxHlUPbC3LCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMn3McTpGJi%2B7HjmRBKtwDLpsIXthPW%2Fr2hfLGwK7h%2B0t0KoyS8UduwbhgW%2Fw0rfGl09KzuLZIIupkYcRmxROMXQR2oj6Rad2IueOEKlWwf92hKEkBLmjAsnALa8YfEWZC%2BUchAmw%2Bw25sLtrXZjTpaitBV3MEjqdOnc%2F1brzVCuAJr5UK36yEL4J%2BMJjQGEggKVBApC4NeAM72BFpp8OiS3Q5PCLNCpPCMDDDhG%2BNW8nJX9%2FNrsPEAjy8jLV0ogq1L6ONqAD1ytU7AYmWfYEP6vVNTvn64TMlBT3vuoY5wQcg%2BdACM67pxjn1uYivRUvm210b8fX4BslPc9kF5P8VHIgE3Y28IorkYRuNu6owlKEb7rxC0EPHA52KFagMMjt43sOH8RX%2Bh5fHlSrqzbDdTuyga%2BfIlbJaa42rEyxDXnA3TXB1eZjAqPiQQh6V6A%2BVdo8WGMpStbrxCpb8zjQsdnA9r8OCHzEDmwf2oWV2A8ikSbQ8%2B6vCdenldtWVYHonSqWTz228q25UreZfUWWbV2E0V%2B5jTDQSJZBS5E0p8vaWlLD1hYF%2BX0P2nHbCF7ENhr0Ju%2B9AdcmiLkWTFVs%2B8qMMNSPc1HpyCcDvRyK4Rzil7So0EX3mRAonpSSC0zXjSvSY5kQGOCZSkRIwl8K1wgY6pgEslWNQ5gNXJBotabYP3BkoutRhIOKGyuGZkaChl0j8zlbAm%2Bjq5uQyL1DXpCkd%2F7qEw60Pf1Vc1o0SzabhnDRVt6emZYoEOeA9Tdo8CrdTDixogKS22uJE3CGJLRj5IaCv6jNdppX8MM0SDSFITiOOwKCABuO9MOX3%2FGb%2FRFL2RvYUw2UWoXZBHy%2FctBb1C4rJRmP8UfpYIOetgVKNI4XXsAOwQ9D6&X-Amz-Signature=e2bb76154ca768d2e657a3e21568ecba59cf613c127bf29f9c42492b2dc21417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT772Q2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBxlMDsl9YN7w6BzOK%2Fgp3BCQC1BnUtzPmrApkaQyA5wAiAjgCtr2xAxFj0N6xejEgUHwEykohURNEAKxHlUPbC3LCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMn3McTpGJi%2B7HjmRBKtwDLpsIXthPW%2Fr2hfLGwK7h%2B0t0KoyS8UduwbhgW%2Fw0rfGl09KzuLZIIupkYcRmxROMXQR2oj6Rad2IueOEKlWwf92hKEkBLmjAsnALa8YfEWZC%2BUchAmw%2Bw25sLtrXZjTpaitBV3MEjqdOnc%2F1brzVCuAJr5UK36yEL4J%2BMJjQGEggKVBApC4NeAM72BFpp8OiS3Q5PCLNCpPCMDDDhG%2BNW8nJX9%2FNrsPEAjy8jLV0ogq1L6ONqAD1ytU7AYmWfYEP6vVNTvn64TMlBT3vuoY5wQcg%2BdACM67pxjn1uYivRUvm210b8fX4BslPc9kF5P8VHIgE3Y28IorkYRuNu6owlKEb7rxC0EPHA52KFagMMjt43sOH8RX%2Bh5fHlSrqzbDdTuyga%2BfIlbJaa42rEyxDXnA3TXB1eZjAqPiQQh6V6A%2BVdo8WGMpStbrxCpb8zjQsdnA9r8OCHzEDmwf2oWV2A8ikSbQ8%2B6vCdenldtWVYHonSqWTz228q25UreZfUWWbV2E0V%2B5jTDQSJZBS5E0p8vaWlLD1hYF%2BX0P2nHbCF7ENhr0Ju%2B9AdcmiLkWTFVs%2B8qMMNSPc1HpyCcDvRyK4Rzil7So0EX3mRAonpSSC0zXjSvSY5kQGOCZSkRIwl8K1wgY6pgEslWNQ5gNXJBotabYP3BkoutRhIOKGyuGZkaChl0j8zlbAm%2Bjq5uQyL1DXpCkd%2F7qEw60Pf1Vc1o0SzabhnDRVt6emZYoEOeA9Tdo8CrdTDixogKS22uJE3CGJLRj5IaCv6jNdppX8MM0SDSFITiOOwKCABuO9MOX3%2FGb%2FRFL2RvYUw2UWoXZBHy%2FctBb1C4rJRmP8UfpYIOetgVKNI4XXsAOwQ9D6&X-Amz-Signature=d7931b958d5ca6b0cfa1ac8abf012e365ec7e38d8907c154686cbaa93bd26237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT772Q2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBxlMDsl9YN7w6BzOK%2Fgp3BCQC1BnUtzPmrApkaQyA5wAiAjgCtr2xAxFj0N6xejEgUHwEykohURNEAKxHlUPbC3LCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMn3McTpGJi%2B7HjmRBKtwDLpsIXthPW%2Fr2hfLGwK7h%2B0t0KoyS8UduwbhgW%2Fw0rfGl09KzuLZIIupkYcRmxROMXQR2oj6Rad2IueOEKlWwf92hKEkBLmjAsnALa8YfEWZC%2BUchAmw%2Bw25sLtrXZjTpaitBV3MEjqdOnc%2F1brzVCuAJr5UK36yEL4J%2BMJjQGEggKVBApC4NeAM72BFpp8OiS3Q5PCLNCpPCMDDDhG%2BNW8nJX9%2FNrsPEAjy8jLV0ogq1L6ONqAD1ytU7AYmWfYEP6vVNTvn64TMlBT3vuoY5wQcg%2BdACM67pxjn1uYivRUvm210b8fX4BslPc9kF5P8VHIgE3Y28IorkYRuNu6owlKEb7rxC0EPHA52KFagMMjt43sOH8RX%2Bh5fHlSrqzbDdTuyga%2BfIlbJaa42rEyxDXnA3TXB1eZjAqPiQQh6V6A%2BVdo8WGMpStbrxCpb8zjQsdnA9r8OCHzEDmwf2oWV2A8ikSbQ8%2B6vCdenldtWVYHonSqWTz228q25UreZfUWWbV2E0V%2B5jTDQSJZBS5E0p8vaWlLD1hYF%2BX0P2nHbCF7ENhr0Ju%2B9AdcmiLkWTFVs%2B8qMMNSPc1HpyCcDvRyK4Rzil7So0EX3mRAonpSSC0zXjSvSY5kQGOCZSkRIwl8K1wgY6pgEslWNQ5gNXJBotabYP3BkoutRhIOKGyuGZkaChl0j8zlbAm%2Bjq5uQyL1DXpCkd%2F7qEw60Pf1Vc1o0SzabhnDRVt6emZYoEOeA9Tdo8CrdTDixogKS22uJE3CGJLRj5IaCv6jNdppX8MM0SDSFITiOOwKCABuO9MOX3%2FGb%2FRFL2RvYUw2UWoXZBHy%2FctBb1C4rJRmP8UfpYIOetgVKNI4XXsAOwQ9D6&X-Amz-Signature=ac54e9fc5be4ac82f75ef012d1edfb8605c79d1af01209102857caee1bf65480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT772Q2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBxlMDsl9YN7w6BzOK%2Fgp3BCQC1BnUtzPmrApkaQyA5wAiAjgCtr2xAxFj0N6xejEgUHwEykohURNEAKxHlUPbC3LCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMn3McTpGJi%2B7HjmRBKtwDLpsIXthPW%2Fr2hfLGwK7h%2B0t0KoyS8UduwbhgW%2Fw0rfGl09KzuLZIIupkYcRmxROMXQR2oj6Rad2IueOEKlWwf92hKEkBLmjAsnALa8YfEWZC%2BUchAmw%2Bw25sLtrXZjTpaitBV3MEjqdOnc%2F1brzVCuAJr5UK36yEL4J%2BMJjQGEggKVBApC4NeAM72BFpp8OiS3Q5PCLNCpPCMDDDhG%2BNW8nJX9%2FNrsPEAjy8jLV0ogq1L6ONqAD1ytU7AYmWfYEP6vVNTvn64TMlBT3vuoY5wQcg%2BdACM67pxjn1uYivRUvm210b8fX4BslPc9kF5P8VHIgE3Y28IorkYRuNu6owlKEb7rxC0EPHA52KFagMMjt43sOH8RX%2Bh5fHlSrqzbDdTuyga%2BfIlbJaa42rEyxDXnA3TXB1eZjAqPiQQh6V6A%2BVdo8WGMpStbrxCpb8zjQsdnA9r8OCHzEDmwf2oWV2A8ikSbQ8%2B6vCdenldtWVYHonSqWTz228q25UreZfUWWbV2E0V%2B5jTDQSJZBS5E0p8vaWlLD1hYF%2BX0P2nHbCF7ENhr0Ju%2B9AdcmiLkWTFVs%2B8qMMNSPc1HpyCcDvRyK4Rzil7So0EX3mRAonpSSC0zXjSvSY5kQGOCZSkRIwl8K1wgY6pgEslWNQ5gNXJBotabYP3BkoutRhIOKGyuGZkaChl0j8zlbAm%2Bjq5uQyL1DXpCkd%2F7qEw60Pf1Vc1o0SzabhnDRVt6emZYoEOeA9Tdo8CrdTDixogKS22uJE3CGJLRj5IaCv6jNdppX8MM0SDSFITiOOwKCABuO9MOX3%2FGb%2FRFL2RvYUw2UWoXZBHy%2FctBb1C4rJRmP8UfpYIOetgVKNI4XXsAOwQ9D6&X-Amz-Signature=1c94c44bdb039125acb6e72cea39f32ec66189b80a0e1f187965fe2c787619ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
