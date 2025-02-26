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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYWXABJ6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICYzdOmVSJq5cKO18iblY6yuWZgKRdZa6nQes2JGXG%2BUAiBd8MKBZCUCsblzFZT45oZsWgvfWqpFwxA%2F%2F6Wewnr%2BeSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQ1XKEPSyy3XPVG4KKtwDVIDi7wEfH6xsZyBNW4Uese9LPSGkOGUz5Czpl8NPtVmcnb52BiRy5MIHAqfpZvOg7Iqj4wwhBD0N6aYdzKwGq7sJjjAbzMIfCsP%2Bhe9c7c1v3UOiSRKKLfvdd1jixldt31xhVC843eliUVjWSBbwgHKbRTFgv6VddKq74P8%2B4YM1AXB5P2gjdl8P6iuYSkg5VXRMS49ui02TD54P06ka0OvUeF9h8VjaGj7coGqo5C9inwOIb%2BgCp9aEZZeOp5LHvhKsRRQBFFpIvLyG%2FFkyTYojReBvBSHU8GGxWF58j%2BwauQwVZG313ofK4iG6FBx54kSV%2B5C4Ol3yDp2pN4lmeTYDVXYmVvLGyJ8LdylYaHBYFjbSthGn7kdbyokqWS7rLzPamE8hTqm800arOzahGLkLI6UkUO6IjcKXcjwuSZKzb5yL6%2FZD9JdmiZlk%2F6lHrYtqJCjUeZuJg2i4o6IPxuo123m4VPsgp7ScihNPfsuDB6BRZ9OToZFKTrAvnY1TlsU6GCpo%2BGddD1MTcEu8WFehEvPffErzHfJukyff6ydkpkjU7Zr65WJ7VEc7D4mRtsyE%2F3fncsjzbw7dw0IxgAU7kQgT5Jy%2B27qf70Al9%2FHA3UVT7x%2BXx5pEMV4wrb35vQY6pgEQ2aQK1HV%2BbiMmeBlGspK9l4D4vmGRnSPeyRrcTR2XnHKFSreGqU7fb4nG4hUJStUuLJaFyEYHHbEWWoyog4h5YhULPGKjbXG9zSw4TrQidUmsJogXeZrkjT6xlRNfCv8PIY61oL1JDkbZZLtZ6CAmIoaUi%2FuLdGUtzAkwdVcuuOp7VDYjNBSSwD6MROTclB0%2BdCWhdlMfgENoIQZh358GxGDelCBE&X-Amz-Signature=10c554c84d102c3e634ebde8dcb6fe692a8f632302ffaee91d69f25b8c92a66d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYWXABJ6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICYzdOmVSJq5cKO18iblY6yuWZgKRdZa6nQes2JGXG%2BUAiBd8MKBZCUCsblzFZT45oZsWgvfWqpFwxA%2F%2F6Wewnr%2BeSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQ1XKEPSyy3XPVG4KKtwDVIDi7wEfH6xsZyBNW4Uese9LPSGkOGUz5Czpl8NPtVmcnb52BiRy5MIHAqfpZvOg7Iqj4wwhBD0N6aYdzKwGq7sJjjAbzMIfCsP%2Bhe9c7c1v3UOiSRKKLfvdd1jixldt31xhVC843eliUVjWSBbwgHKbRTFgv6VddKq74P8%2B4YM1AXB5P2gjdl8P6iuYSkg5VXRMS49ui02TD54P06ka0OvUeF9h8VjaGj7coGqo5C9inwOIb%2BgCp9aEZZeOp5LHvhKsRRQBFFpIvLyG%2FFkyTYojReBvBSHU8GGxWF58j%2BwauQwVZG313ofK4iG6FBx54kSV%2B5C4Ol3yDp2pN4lmeTYDVXYmVvLGyJ8LdylYaHBYFjbSthGn7kdbyokqWS7rLzPamE8hTqm800arOzahGLkLI6UkUO6IjcKXcjwuSZKzb5yL6%2FZD9JdmiZlk%2F6lHrYtqJCjUeZuJg2i4o6IPxuo123m4VPsgp7ScihNPfsuDB6BRZ9OToZFKTrAvnY1TlsU6GCpo%2BGddD1MTcEu8WFehEvPffErzHfJukyff6ydkpkjU7Zr65WJ7VEc7D4mRtsyE%2F3fncsjzbw7dw0IxgAU7kQgT5Jy%2B27qf70Al9%2FHA3UVT7x%2BXx5pEMV4wrb35vQY6pgEQ2aQK1HV%2BbiMmeBlGspK9l4D4vmGRnSPeyRrcTR2XnHKFSreGqU7fb4nG4hUJStUuLJaFyEYHHbEWWoyog4h5YhULPGKjbXG9zSw4TrQidUmsJogXeZrkjT6xlRNfCv8PIY61oL1JDkbZZLtZ6CAmIoaUi%2FuLdGUtzAkwdVcuuOp7VDYjNBSSwD6MROTclB0%2BdCWhdlMfgENoIQZh358GxGDelCBE&X-Amz-Signature=22de92ecf10282e190a5f1b5916c5ba69750466d4d1a158d31795cea4963c7f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYWXABJ6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICYzdOmVSJq5cKO18iblY6yuWZgKRdZa6nQes2JGXG%2BUAiBd8MKBZCUCsblzFZT45oZsWgvfWqpFwxA%2F%2F6Wewnr%2BeSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQ1XKEPSyy3XPVG4KKtwDVIDi7wEfH6xsZyBNW4Uese9LPSGkOGUz5Czpl8NPtVmcnb52BiRy5MIHAqfpZvOg7Iqj4wwhBD0N6aYdzKwGq7sJjjAbzMIfCsP%2Bhe9c7c1v3UOiSRKKLfvdd1jixldt31xhVC843eliUVjWSBbwgHKbRTFgv6VddKq74P8%2B4YM1AXB5P2gjdl8P6iuYSkg5VXRMS49ui02TD54P06ka0OvUeF9h8VjaGj7coGqo5C9inwOIb%2BgCp9aEZZeOp5LHvhKsRRQBFFpIvLyG%2FFkyTYojReBvBSHU8GGxWF58j%2BwauQwVZG313ofK4iG6FBx54kSV%2B5C4Ol3yDp2pN4lmeTYDVXYmVvLGyJ8LdylYaHBYFjbSthGn7kdbyokqWS7rLzPamE8hTqm800arOzahGLkLI6UkUO6IjcKXcjwuSZKzb5yL6%2FZD9JdmiZlk%2F6lHrYtqJCjUeZuJg2i4o6IPxuo123m4VPsgp7ScihNPfsuDB6BRZ9OToZFKTrAvnY1TlsU6GCpo%2BGddD1MTcEu8WFehEvPffErzHfJukyff6ydkpkjU7Zr65WJ7VEc7D4mRtsyE%2F3fncsjzbw7dw0IxgAU7kQgT5Jy%2B27qf70Al9%2FHA3UVT7x%2BXx5pEMV4wrb35vQY6pgEQ2aQK1HV%2BbiMmeBlGspK9l4D4vmGRnSPeyRrcTR2XnHKFSreGqU7fb4nG4hUJStUuLJaFyEYHHbEWWoyog4h5YhULPGKjbXG9zSw4TrQidUmsJogXeZrkjT6xlRNfCv8PIY61oL1JDkbZZLtZ6CAmIoaUi%2FuLdGUtzAkwdVcuuOp7VDYjNBSSwD6MROTclB0%2BdCWhdlMfgENoIQZh358GxGDelCBE&X-Amz-Signature=d67d3544a2584686be446c81d9f44ae539145e7c72cee0f797cdfe82db100296&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYWXABJ6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICYzdOmVSJq5cKO18iblY6yuWZgKRdZa6nQes2JGXG%2BUAiBd8MKBZCUCsblzFZT45oZsWgvfWqpFwxA%2F%2F6Wewnr%2BeSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQ1XKEPSyy3XPVG4KKtwDVIDi7wEfH6xsZyBNW4Uese9LPSGkOGUz5Czpl8NPtVmcnb52BiRy5MIHAqfpZvOg7Iqj4wwhBD0N6aYdzKwGq7sJjjAbzMIfCsP%2Bhe9c7c1v3UOiSRKKLfvdd1jixldt31xhVC843eliUVjWSBbwgHKbRTFgv6VddKq74P8%2B4YM1AXB5P2gjdl8P6iuYSkg5VXRMS49ui02TD54P06ka0OvUeF9h8VjaGj7coGqo5C9inwOIb%2BgCp9aEZZeOp5LHvhKsRRQBFFpIvLyG%2FFkyTYojReBvBSHU8GGxWF58j%2BwauQwVZG313ofK4iG6FBx54kSV%2B5C4Ol3yDp2pN4lmeTYDVXYmVvLGyJ8LdylYaHBYFjbSthGn7kdbyokqWS7rLzPamE8hTqm800arOzahGLkLI6UkUO6IjcKXcjwuSZKzb5yL6%2FZD9JdmiZlk%2F6lHrYtqJCjUeZuJg2i4o6IPxuo123m4VPsgp7ScihNPfsuDB6BRZ9OToZFKTrAvnY1TlsU6GCpo%2BGddD1MTcEu8WFehEvPffErzHfJukyff6ydkpkjU7Zr65WJ7VEc7D4mRtsyE%2F3fncsjzbw7dw0IxgAU7kQgT5Jy%2B27qf70Al9%2FHA3UVT7x%2BXx5pEMV4wrb35vQY6pgEQ2aQK1HV%2BbiMmeBlGspK9l4D4vmGRnSPeyRrcTR2XnHKFSreGqU7fb4nG4hUJStUuLJaFyEYHHbEWWoyog4h5YhULPGKjbXG9zSw4TrQidUmsJogXeZrkjT6xlRNfCv8PIY61oL1JDkbZZLtZ6CAmIoaUi%2FuLdGUtzAkwdVcuuOp7VDYjNBSSwD6MROTclB0%2BdCWhdlMfgENoIQZh358GxGDelCBE&X-Amz-Signature=ef130d589d0da4b58045b90ebe85e159537471f8cbc49063454013b6784fcf6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYWXABJ6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICYzdOmVSJq5cKO18iblY6yuWZgKRdZa6nQes2JGXG%2BUAiBd8MKBZCUCsblzFZT45oZsWgvfWqpFwxA%2F%2F6Wewnr%2BeSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQ1XKEPSyy3XPVG4KKtwDVIDi7wEfH6xsZyBNW4Uese9LPSGkOGUz5Czpl8NPtVmcnb52BiRy5MIHAqfpZvOg7Iqj4wwhBD0N6aYdzKwGq7sJjjAbzMIfCsP%2Bhe9c7c1v3UOiSRKKLfvdd1jixldt31xhVC843eliUVjWSBbwgHKbRTFgv6VddKq74P8%2B4YM1AXB5P2gjdl8P6iuYSkg5VXRMS49ui02TD54P06ka0OvUeF9h8VjaGj7coGqo5C9inwOIb%2BgCp9aEZZeOp5LHvhKsRRQBFFpIvLyG%2FFkyTYojReBvBSHU8GGxWF58j%2BwauQwVZG313ofK4iG6FBx54kSV%2B5C4Ol3yDp2pN4lmeTYDVXYmVvLGyJ8LdylYaHBYFjbSthGn7kdbyokqWS7rLzPamE8hTqm800arOzahGLkLI6UkUO6IjcKXcjwuSZKzb5yL6%2FZD9JdmiZlk%2F6lHrYtqJCjUeZuJg2i4o6IPxuo123m4VPsgp7ScihNPfsuDB6BRZ9OToZFKTrAvnY1TlsU6GCpo%2BGddD1MTcEu8WFehEvPffErzHfJukyff6ydkpkjU7Zr65WJ7VEc7D4mRtsyE%2F3fncsjzbw7dw0IxgAU7kQgT5Jy%2B27qf70Al9%2FHA3UVT7x%2BXx5pEMV4wrb35vQY6pgEQ2aQK1HV%2BbiMmeBlGspK9l4D4vmGRnSPeyRrcTR2XnHKFSreGqU7fb4nG4hUJStUuLJaFyEYHHbEWWoyog4h5YhULPGKjbXG9zSw4TrQidUmsJogXeZrkjT6xlRNfCv8PIY61oL1JDkbZZLtZ6CAmIoaUi%2FuLdGUtzAkwdVcuuOp7VDYjNBSSwD6MROTclB0%2BdCWhdlMfgENoIQZh358GxGDelCBE&X-Amz-Signature=765c42f4d79049154e736c64cf32ef5f745becbc61b311cf7649c0c850778889&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYWXABJ6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICYzdOmVSJq5cKO18iblY6yuWZgKRdZa6nQes2JGXG%2BUAiBd8MKBZCUCsblzFZT45oZsWgvfWqpFwxA%2F%2F6Wewnr%2BeSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQ1XKEPSyy3XPVG4KKtwDVIDi7wEfH6xsZyBNW4Uese9LPSGkOGUz5Czpl8NPtVmcnb52BiRy5MIHAqfpZvOg7Iqj4wwhBD0N6aYdzKwGq7sJjjAbzMIfCsP%2Bhe9c7c1v3UOiSRKKLfvdd1jixldt31xhVC843eliUVjWSBbwgHKbRTFgv6VddKq74P8%2B4YM1AXB5P2gjdl8P6iuYSkg5VXRMS49ui02TD54P06ka0OvUeF9h8VjaGj7coGqo5C9inwOIb%2BgCp9aEZZeOp5LHvhKsRRQBFFpIvLyG%2FFkyTYojReBvBSHU8GGxWF58j%2BwauQwVZG313ofK4iG6FBx54kSV%2B5C4Ol3yDp2pN4lmeTYDVXYmVvLGyJ8LdylYaHBYFjbSthGn7kdbyokqWS7rLzPamE8hTqm800arOzahGLkLI6UkUO6IjcKXcjwuSZKzb5yL6%2FZD9JdmiZlk%2F6lHrYtqJCjUeZuJg2i4o6IPxuo123m4VPsgp7ScihNPfsuDB6BRZ9OToZFKTrAvnY1TlsU6GCpo%2BGddD1MTcEu8WFehEvPffErzHfJukyff6ydkpkjU7Zr65WJ7VEc7D4mRtsyE%2F3fncsjzbw7dw0IxgAU7kQgT5Jy%2B27qf70Al9%2FHA3UVT7x%2BXx5pEMV4wrb35vQY6pgEQ2aQK1HV%2BbiMmeBlGspK9l4D4vmGRnSPeyRrcTR2XnHKFSreGqU7fb4nG4hUJStUuLJaFyEYHHbEWWoyog4h5YhULPGKjbXG9zSw4TrQidUmsJogXeZrkjT6xlRNfCv8PIY61oL1JDkbZZLtZ6CAmIoaUi%2FuLdGUtzAkwdVcuuOp7VDYjNBSSwD6MROTclB0%2BdCWhdlMfgENoIQZh358GxGDelCBE&X-Amz-Signature=1f4ac2ef6a01cca3dc7952919fffd424a508619c44058ac5f82417ecd361fa19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYWXABJ6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICYzdOmVSJq5cKO18iblY6yuWZgKRdZa6nQes2JGXG%2BUAiBd8MKBZCUCsblzFZT45oZsWgvfWqpFwxA%2F%2F6Wewnr%2BeSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQ1XKEPSyy3XPVG4KKtwDVIDi7wEfH6xsZyBNW4Uese9LPSGkOGUz5Czpl8NPtVmcnb52BiRy5MIHAqfpZvOg7Iqj4wwhBD0N6aYdzKwGq7sJjjAbzMIfCsP%2Bhe9c7c1v3UOiSRKKLfvdd1jixldt31xhVC843eliUVjWSBbwgHKbRTFgv6VddKq74P8%2B4YM1AXB5P2gjdl8P6iuYSkg5VXRMS49ui02TD54P06ka0OvUeF9h8VjaGj7coGqo5C9inwOIb%2BgCp9aEZZeOp5LHvhKsRRQBFFpIvLyG%2FFkyTYojReBvBSHU8GGxWF58j%2BwauQwVZG313ofK4iG6FBx54kSV%2B5C4Ol3yDp2pN4lmeTYDVXYmVvLGyJ8LdylYaHBYFjbSthGn7kdbyokqWS7rLzPamE8hTqm800arOzahGLkLI6UkUO6IjcKXcjwuSZKzb5yL6%2FZD9JdmiZlk%2F6lHrYtqJCjUeZuJg2i4o6IPxuo123m4VPsgp7ScihNPfsuDB6BRZ9OToZFKTrAvnY1TlsU6GCpo%2BGddD1MTcEu8WFehEvPffErzHfJukyff6ydkpkjU7Zr65WJ7VEc7D4mRtsyE%2F3fncsjzbw7dw0IxgAU7kQgT5Jy%2B27qf70Al9%2FHA3UVT7x%2BXx5pEMV4wrb35vQY6pgEQ2aQK1HV%2BbiMmeBlGspK9l4D4vmGRnSPeyRrcTR2XnHKFSreGqU7fb4nG4hUJStUuLJaFyEYHHbEWWoyog4h5YhULPGKjbXG9zSw4TrQidUmsJogXeZrkjT6xlRNfCv8PIY61oL1JDkbZZLtZ6CAmIoaUi%2FuLdGUtzAkwdVcuuOp7VDYjNBSSwD6MROTclB0%2BdCWhdlMfgENoIQZh358GxGDelCBE&X-Amz-Signature=7a0be96bc37708a7ec2c5becb0a375be0e5dbe04e869f30ba57903a1045d046f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYWXABJ6%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICYzdOmVSJq5cKO18iblY6yuWZgKRdZa6nQes2JGXG%2BUAiBd8MKBZCUCsblzFZT45oZsWgvfWqpFwxA%2F%2F6Wewnr%2BeSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQ1XKEPSyy3XPVG4KKtwDVIDi7wEfH6xsZyBNW4Uese9LPSGkOGUz5Czpl8NPtVmcnb52BiRy5MIHAqfpZvOg7Iqj4wwhBD0N6aYdzKwGq7sJjjAbzMIfCsP%2Bhe9c7c1v3UOiSRKKLfvdd1jixldt31xhVC843eliUVjWSBbwgHKbRTFgv6VddKq74P8%2B4YM1AXB5P2gjdl8P6iuYSkg5VXRMS49ui02TD54P06ka0OvUeF9h8VjaGj7coGqo5C9inwOIb%2BgCp9aEZZeOp5LHvhKsRRQBFFpIvLyG%2FFkyTYojReBvBSHU8GGxWF58j%2BwauQwVZG313ofK4iG6FBx54kSV%2B5C4Ol3yDp2pN4lmeTYDVXYmVvLGyJ8LdylYaHBYFjbSthGn7kdbyokqWS7rLzPamE8hTqm800arOzahGLkLI6UkUO6IjcKXcjwuSZKzb5yL6%2FZD9JdmiZlk%2F6lHrYtqJCjUeZuJg2i4o6IPxuo123m4VPsgp7ScihNPfsuDB6BRZ9OToZFKTrAvnY1TlsU6GCpo%2BGddD1MTcEu8WFehEvPffErzHfJukyff6ydkpkjU7Zr65WJ7VEc7D4mRtsyE%2F3fncsjzbw7dw0IxgAU7kQgT5Jy%2B27qf70Al9%2FHA3UVT7x%2BXx5pEMV4wrb35vQY6pgEQ2aQK1HV%2BbiMmeBlGspK9l4D4vmGRnSPeyRrcTR2XnHKFSreGqU7fb4nG4hUJStUuLJaFyEYHHbEWWoyog4h5YhULPGKjbXG9zSw4TrQidUmsJogXeZrkjT6xlRNfCv8PIY61oL1JDkbZZLtZ6CAmIoaUi%2FuLdGUtzAkwdVcuuOp7VDYjNBSSwD6MROTclB0%2BdCWhdlMfgENoIQZh358GxGDelCBE&X-Amz-Signature=16319e59c50f4d4a2472f2574b4faa7ee67770239219ea8bb82666b3de835bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
