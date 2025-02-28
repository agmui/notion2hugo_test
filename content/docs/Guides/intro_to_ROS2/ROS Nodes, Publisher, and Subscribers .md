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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAHCFQPE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICaSQ7CgxH56YgSkPIPbq6MQiuPUo%2F5u0fOePTYUfuiGAiAIbUhQFMbBZiN1S14rrsDOFBb8c%2FQOBzf0PA%2Bg5F0%2FCSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuxCofPgpumzIUeDEKtwDQeIM46em6UBNe53%2FLxZQ5ny%2FDcyti8Vb79tkQ3dWyoGnycyTcY7HfiwC2QgEwLv2NTxeM6NU6YMGApYwTG%2FO3T%2FOFiCtiIMEEPJG%2FUghPzeZ9axhsM8bE282iehzMrz5IdqPs9WXIq3b%2BYafNmPyGUYTRiVySAQR%2B84dLCkrke6%2FCatFOYWfmbwqfI8g2VjuO0Peg7K5Zw4GTr5XxP84u%2BIhlEJ2agO58ESfSrWxF20GyuwKqPYV9wlCUNXfiZhJ8I1pNHu5PR1s14PUQbI03twgSi7PT8lGbNg%2FsSnkWWbg9JGUlnI1nvXTFVdpyuwpjE1K7EA%2FLrS5b67LQQpxUgPnQSP2ImUVSXNOMfPJGh2wLATwDmJ60NI6qIA1ikvvQ%2FSnQTbwVjeXVXCFvuQ7TdZl09NeVatcJczdphoLwYR9VKtR6MGRinRwuXtepiPyF%2BxVnnDUyY5Gr0SzT19QWpS7jhpqqHbIc2vAa1tk4hJklzvSxzTwKPjCsCW%2BVsLHRbWVukRZ8k4cqFJbi7LA1NY5ahicfBSr6FCgxvfMHP3JYgG2axEQwbIJ%2BGRNoVgy2dZ7HndTTmMd2hFimMv8Q2n8HsZ0QJPkxsl4Mzd4n5VfjD61CR6wE4vf5Gswy9GEvgY6pgHwI5Sc3AQSRB2xKGQxHl%2BuXEJvN2PFD4h30qdqyisz4%2Fos2ctVows7FUNVZWE4OEoMBweKuVBfvTl0sHaHE6zafR7v09JXgr96KG0rC3igBU6vaDTvxE2ueZ4aAxK9kt%2FCBs6xPVz53KrsdIoXc2j2LDO80bt9f%2FMndmHsTUFYYzJ%2BYcWOGAj909xGGl8CMyPM2Ot%2Ftr8nSB1trJ%2F0Jtj7rzR3N0n%2F&X-Amz-Signature=f1d9aa4570c0db3a7fd67384e7ed051bf792a4baa655fa8e72c54d082fc154a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAHCFQPE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICaSQ7CgxH56YgSkPIPbq6MQiuPUo%2F5u0fOePTYUfuiGAiAIbUhQFMbBZiN1S14rrsDOFBb8c%2FQOBzf0PA%2Bg5F0%2FCSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuxCofPgpumzIUeDEKtwDQeIM46em6UBNe53%2FLxZQ5ny%2FDcyti8Vb79tkQ3dWyoGnycyTcY7HfiwC2QgEwLv2NTxeM6NU6YMGApYwTG%2FO3T%2FOFiCtiIMEEPJG%2FUghPzeZ9axhsM8bE282iehzMrz5IdqPs9WXIq3b%2BYafNmPyGUYTRiVySAQR%2B84dLCkrke6%2FCatFOYWfmbwqfI8g2VjuO0Peg7K5Zw4GTr5XxP84u%2BIhlEJ2agO58ESfSrWxF20GyuwKqPYV9wlCUNXfiZhJ8I1pNHu5PR1s14PUQbI03twgSi7PT8lGbNg%2FsSnkWWbg9JGUlnI1nvXTFVdpyuwpjE1K7EA%2FLrS5b67LQQpxUgPnQSP2ImUVSXNOMfPJGh2wLATwDmJ60NI6qIA1ikvvQ%2FSnQTbwVjeXVXCFvuQ7TdZl09NeVatcJczdphoLwYR9VKtR6MGRinRwuXtepiPyF%2BxVnnDUyY5Gr0SzT19QWpS7jhpqqHbIc2vAa1tk4hJklzvSxzTwKPjCsCW%2BVsLHRbWVukRZ8k4cqFJbi7LA1NY5ahicfBSr6FCgxvfMHP3JYgG2axEQwbIJ%2BGRNoVgy2dZ7HndTTmMd2hFimMv8Q2n8HsZ0QJPkxsl4Mzd4n5VfjD61CR6wE4vf5Gswy9GEvgY6pgHwI5Sc3AQSRB2xKGQxHl%2BuXEJvN2PFD4h30qdqyisz4%2Fos2ctVows7FUNVZWE4OEoMBweKuVBfvTl0sHaHE6zafR7v09JXgr96KG0rC3igBU6vaDTvxE2ueZ4aAxK9kt%2FCBs6xPVz53KrsdIoXc2j2LDO80bt9f%2FMndmHsTUFYYzJ%2BYcWOGAj909xGGl8CMyPM2Ot%2Ftr8nSB1trJ%2F0Jtj7rzR3N0n%2F&X-Amz-Signature=dc419d287e78d16dc4688cb456fc8c83cd9e9eb6d90c2b097b94a90ee4b7a88e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAHCFQPE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICaSQ7CgxH56YgSkPIPbq6MQiuPUo%2F5u0fOePTYUfuiGAiAIbUhQFMbBZiN1S14rrsDOFBb8c%2FQOBzf0PA%2Bg5F0%2FCSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuxCofPgpumzIUeDEKtwDQeIM46em6UBNe53%2FLxZQ5ny%2FDcyti8Vb79tkQ3dWyoGnycyTcY7HfiwC2QgEwLv2NTxeM6NU6YMGApYwTG%2FO3T%2FOFiCtiIMEEPJG%2FUghPzeZ9axhsM8bE282iehzMrz5IdqPs9WXIq3b%2BYafNmPyGUYTRiVySAQR%2B84dLCkrke6%2FCatFOYWfmbwqfI8g2VjuO0Peg7K5Zw4GTr5XxP84u%2BIhlEJ2agO58ESfSrWxF20GyuwKqPYV9wlCUNXfiZhJ8I1pNHu5PR1s14PUQbI03twgSi7PT8lGbNg%2FsSnkWWbg9JGUlnI1nvXTFVdpyuwpjE1K7EA%2FLrS5b67LQQpxUgPnQSP2ImUVSXNOMfPJGh2wLATwDmJ60NI6qIA1ikvvQ%2FSnQTbwVjeXVXCFvuQ7TdZl09NeVatcJczdphoLwYR9VKtR6MGRinRwuXtepiPyF%2BxVnnDUyY5Gr0SzT19QWpS7jhpqqHbIc2vAa1tk4hJklzvSxzTwKPjCsCW%2BVsLHRbWVukRZ8k4cqFJbi7LA1NY5ahicfBSr6FCgxvfMHP3JYgG2axEQwbIJ%2BGRNoVgy2dZ7HndTTmMd2hFimMv8Q2n8HsZ0QJPkxsl4Mzd4n5VfjD61CR6wE4vf5Gswy9GEvgY6pgHwI5Sc3AQSRB2xKGQxHl%2BuXEJvN2PFD4h30qdqyisz4%2Fos2ctVows7FUNVZWE4OEoMBweKuVBfvTl0sHaHE6zafR7v09JXgr96KG0rC3igBU6vaDTvxE2ueZ4aAxK9kt%2FCBs6xPVz53KrsdIoXc2j2LDO80bt9f%2FMndmHsTUFYYzJ%2BYcWOGAj909xGGl8CMyPM2Ot%2Ftr8nSB1trJ%2F0Jtj7rzR3N0n%2F&X-Amz-Signature=ed19229238f5f905c0c577f7714b49e53ed171de3ce06d0c04f326eba750440b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAHCFQPE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICaSQ7CgxH56YgSkPIPbq6MQiuPUo%2F5u0fOePTYUfuiGAiAIbUhQFMbBZiN1S14rrsDOFBb8c%2FQOBzf0PA%2Bg5F0%2FCSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuxCofPgpumzIUeDEKtwDQeIM46em6UBNe53%2FLxZQ5ny%2FDcyti8Vb79tkQ3dWyoGnycyTcY7HfiwC2QgEwLv2NTxeM6NU6YMGApYwTG%2FO3T%2FOFiCtiIMEEPJG%2FUghPzeZ9axhsM8bE282iehzMrz5IdqPs9WXIq3b%2BYafNmPyGUYTRiVySAQR%2B84dLCkrke6%2FCatFOYWfmbwqfI8g2VjuO0Peg7K5Zw4GTr5XxP84u%2BIhlEJ2agO58ESfSrWxF20GyuwKqPYV9wlCUNXfiZhJ8I1pNHu5PR1s14PUQbI03twgSi7PT8lGbNg%2FsSnkWWbg9JGUlnI1nvXTFVdpyuwpjE1K7EA%2FLrS5b67LQQpxUgPnQSP2ImUVSXNOMfPJGh2wLATwDmJ60NI6qIA1ikvvQ%2FSnQTbwVjeXVXCFvuQ7TdZl09NeVatcJczdphoLwYR9VKtR6MGRinRwuXtepiPyF%2BxVnnDUyY5Gr0SzT19QWpS7jhpqqHbIc2vAa1tk4hJklzvSxzTwKPjCsCW%2BVsLHRbWVukRZ8k4cqFJbi7LA1NY5ahicfBSr6FCgxvfMHP3JYgG2axEQwbIJ%2BGRNoVgy2dZ7HndTTmMd2hFimMv8Q2n8HsZ0QJPkxsl4Mzd4n5VfjD61CR6wE4vf5Gswy9GEvgY6pgHwI5Sc3AQSRB2xKGQxHl%2BuXEJvN2PFD4h30qdqyisz4%2Fos2ctVows7FUNVZWE4OEoMBweKuVBfvTl0sHaHE6zafR7v09JXgr96KG0rC3igBU6vaDTvxE2ueZ4aAxK9kt%2FCBs6xPVz53KrsdIoXc2j2LDO80bt9f%2FMndmHsTUFYYzJ%2BYcWOGAj909xGGl8CMyPM2Ot%2Ftr8nSB1trJ%2F0Jtj7rzR3N0n%2F&X-Amz-Signature=7a3d94cae9c1d3def57c91ea7d1545430375108d09e3dc97aeff2cf1c61ef83c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAHCFQPE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICaSQ7CgxH56YgSkPIPbq6MQiuPUo%2F5u0fOePTYUfuiGAiAIbUhQFMbBZiN1S14rrsDOFBb8c%2FQOBzf0PA%2Bg5F0%2FCSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuxCofPgpumzIUeDEKtwDQeIM46em6UBNe53%2FLxZQ5ny%2FDcyti8Vb79tkQ3dWyoGnycyTcY7HfiwC2QgEwLv2NTxeM6NU6YMGApYwTG%2FO3T%2FOFiCtiIMEEPJG%2FUghPzeZ9axhsM8bE282iehzMrz5IdqPs9WXIq3b%2BYafNmPyGUYTRiVySAQR%2B84dLCkrke6%2FCatFOYWfmbwqfI8g2VjuO0Peg7K5Zw4GTr5XxP84u%2BIhlEJ2agO58ESfSrWxF20GyuwKqPYV9wlCUNXfiZhJ8I1pNHu5PR1s14PUQbI03twgSi7PT8lGbNg%2FsSnkWWbg9JGUlnI1nvXTFVdpyuwpjE1K7EA%2FLrS5b67LQQpxUgPnQSP2ImUVSXNOMfPJGh2wLATwDmJ60NI6qIA1ikvvQ%2FSnQTbwVjeXVXCFvuQ7TdZl09NeVatcJczdphoLwYR9VKtR6MGRinRwuXtepiPyF%2BxVnnDUyY5Gr0SzT19QWpS7jhpqqHbIc2vAa1tk4hJklzvSxzTwKPjCsCW%2BVsLHRbWVukRZ8k4cqFJbi7LA1NY5ahicfBSr6FCgxvfMHP3JYgG2axEQwbIJ%2BGRNoVgy2dZ7HndTTmMd2hFimMv8Q2n8HsZ0QJPkxsl4Mzd4n5VfjD61CR6wE4vf5Gswy9GEvgY6pgHwI5Sc3AQSRB2xKGQxHl%2BuXEJvN2PFD4h30qdqyisz4%2Fos2ctVows7FUNVZWE4OEoMBweKuVBfvTl0sHaHE6zafR7v09JXgr96KG0rC3igBU6vaDTvxE2ueZ4aAxK9kt%2FCBs6xPVz53KrsdIoXc2j2LDO80bt9f%2FMndmHsTUFYYzJ%2BYcWOGAj909xGGl8CMyPM2Ot%2Ftr8nSB1trJ%2F0Jtj7rzR3N0n%2F&X-Amz-Signature=d88bddf3afa28b14ba5127f9059a23a6c8457cd9bcddcb8a71c146ab0049fc34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAHCFQPE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICaSQ7CgxH56YgSkPIPbq6MQiuPUo%2F5u0fOePTYUfuiGAiAIbUhQFMbBZiN1S14rrsDOFBb8c%2FQOBzf0PA%2Bg5F0%2FCSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuxCofPgpumzIUeDEKtwDQeIM46em6UBNe53%2FLxZQ5ny%2FDcyti8Vb79tkQ3dWyoGnycyTcY7HfiwC2QgEwLv2NTxeM6NU6YMGApYwTG%2FO3T%2FOFiCtiIMEEPJG%2FUghPzeZ9axhsM8bE282iehzMrz5IdqPs9WXIq3b%2BYafNmPyGUYTRiVySAQR%2B84dLCkrke6%2FCatFOYWfmbwqfI8g2VjuO0Peg7K5Zw4GTr5XxP84u%2BIhlEJ2agO58ESfSrWxF20GyuwKqPYV9wlCUNXfiZhJ8I1pNHu5PR1s14PUQbI03twgSi7PT8lGbNg%2FsSnkWWbg9JGUlnI1nvXTFVdpyuwpjE1K7EA%2FLrS5b67LQQpxUgPnQSP2ImUVSXNOMfPJGh2wLATwDmJ60NI6qIA1ikvvQ%2FSnQTbwVjeXVXCFvuQ7TdZl09NeVatcJczdphoLwYR9VKtR6MGRinRwuXtepiPyF%2BxVnnDUyY5Gr0SzT19QWpS7jhpqqHbIc2vAa1tk4hJklzvSxzTwKPjCsCW%2BVsLHRbWVukRZ8k4cqFJbi7LA1NY5ahicfBSr6FCgxvfMHP3JYgG2axEQwbIJ%2BGRNoVgy2dZ7HndTTmMd2hFimMv8Q2n8HsZ0QJPkxsl4Mzd4n5VfjD61CR6wE4vf5Gswy9GEvgY6pgHwI5Sc3AQSRB2xKGQxHl%2BuXEJvN2PFD4h30qdqyisz4%2Fos2ctVows7FUNVZWE4OEoMBweKuVBfvTl0sHaHE6zafR7v09JXgr96KG0rC3igBU6vaDTvxE2ueZ4aAxK9kt%2FCBs6xPVz53KrsdIoXc2j2LDO80bt9f%2FMndmHsTUFYYzJ%2BYcWOGAj909xGGl8CMyPM2Ot%2Ftr8nSB1trJ%2F0Jtj7rzR3N0n%2F&X-Amz-Signature=ca51810a0319129bfaf1e8fea7fb72223e7a20eb5dd05b78a2b26328b9c3e8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAHCFQPE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICaSQ7CgxH56YgSkPIPbq6MQiuPUo%2F5u0fOePTYUfuiGAiAIbUhQFMbBZiN1S14rrsDOFBb8c%2FQOBzf0PA%2Bg5F0%2FCSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuxCofPgpumzIUeDEKtwDQeIM46em6UBNe53%2FLxZQ5ny%2FDcyti8Vb79tkQ3dWyoGnycyTcY7HfiwC2QgEwLv2NTxeM6NU6YMGApYwTG%2FO3T%2FOFiCtiIMEEPJG%2FUghPzeZ9axhsM8bE282iehzMrz5IdqPs9WXIq3b%2BYafNmPyGUYTRiVySAQR%2B84dLCkrke6%2FCatFOYWfmbwqfI8g2VjuO0Peg7K5Zw4GTr5XxP84u%2BIhlEJ2agO58ESfSrWxF20GyuwKqPYV9wlCUNXfiZhJ8I1pNHu5PR1s14PUQbI03twgSi7PT8lGbNg%2FsSnkWWbg9JGUlnI1nvXTFVdpyuwpjE1K7EA%2FLrS5b67LQQpxUgPnQSP2ImUVSXNOMfPJGh2wLATwDmJ60NI6qIA1ikvvQ%2FSnQTbwVjeXVXCFvuQ7TdZl09NeVatcJczdphoLwYR9VKtR6MGRinRwuXtepiPyF%2BxVnnDUyY5Gr0SzT19QWpS7jhpqqHbIc2vAa1tk4hJklzvSxzTwKPjCsCW%2BVsLHRbWVukRZ8k4cqFJbi7LA1NY5ahicfBSr6FCgxvfMHP3JYgG2axEQwbIJ%2BGRNoVgy2dZ7HndTTmMd2hFimMv8Q2n8HsZ0QJPkxsl4Mzd4n5VfjD61CR6wE4vf5Gswy9GEvgY6pgHwI5Sc3AQSRB2xKGQxHl%2BuXEJvN2PFD4h30qdqyisz4%2Fos2ctVows7FUNVZWE4OEoMBweKuVBfvTl0sHaHE6zafR7v09JXgr96KG0rC3igBU6vaDTvxE2ueZ4aAxK9kt%2FCBs6xPVz53KrsdIoXc2j2LDO80bt9f%2FMndmHsTUFYYzJ%2BYcWOGAj909xGGl8CMyPM2Ot%2Ftr8nSB1trJ%2F0Jtj7rzR3N0n%2F&X-Amz-Signature=f54d315a6cb8f9f27bfe79fbc21fa34d42809fb899b8c1deb6bafb543258d3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAHCFQPE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICaSQ7CgxH56YgSkPIPbq6MQiuPUo%2F5u0fOePTYUfuiGAiAIbUhQFMbBZiN1S14rrsDOFBb8c%2FQOBzf0PA%2Bg5F0%2FCSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuxCofPgpumzIUeDEKtwDQeIM46em6UBNe53%2FLxZQ5ny%2FDcyti8Vb79tkQ3dWyoGnycyTcY7HfiwC2QgEwLv2NTxeM6NU6YMGApYwTG%2FO3T%2FOFiCtiIMEEPJG%2FUghPzeZ9axhsM8bE282iehzMrz5IdqPs9WXIq3b%2BYafNmPyGUYTRiVySAQR%2B84dLCkrke6%2FCatFOYWfmbwqfI8g2VjuO0Peg7K5Zw4GTr5XxP84u%2BIhlEJ2agO58ESfSrWxF20GyuwKqPYV9wlCUNXfiZhJ8I1pNHu5PR1s14PUQbI03twgSi7PT8lGbNg%2FsSnkWWbg9JGUlnI1nvXTFVdpyuwpjE1K7EA%2FLrS5b67LQQpxUgPnQSP2ImUVSXNOMfPJGh2wLATwDmJ60NI6qIA1ikvvQ%2FSnQTbwVjeXVXCFvuQ7TdZl09NeVatcJczdphoLwYR9VKtR6MGRinRwuXtepiPyF%2BxVnnDUyY5Gr0SzT19QWpS7jhpqqHbIc2vAa1tk4hJklzvSxzTwKPjCsCW%2BVsLHRbWVukRZ8k4cqFJbi7LA1NY5ahicfBSr6FCgxvfMHP3JYgG2axEQwbIJ%2BGRNoVgy2dZ7HndTTmMd2hFimMv8Q2n8HsZ0QJPkxsl4Mzd4n5VfjD61CR6wE4vf5Gswy9GEvgY6pgHwI5Sc3AQSRB2xKGQxHl%2BuXEJvN2PFD4h30qdqyisz4%2Fos2ctVows7FUNVZWE4OEoMBweKuVBfvTl0sHaHE6zafR7v09JXgr96KG0rC3igBU6vaDTvxE2ueZ4aAxK9kt%2FCBs6xPVz53KrsdIoXc2j2LDO80bt9f%2FMndmHsTUFYYzJ%2BYcWOGAj909xGGl8CMyPM2Ot%2Ftr8nSB1trJ%2F0Jtj7rzR3N0n%2F&X-Amz-Signature=a2c3a658634d2a2119d002325b453df209a062e2bc5f22531e85e42da26134d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
