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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNDBV5BT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCk%2BYeylaQJejCnImKOElqFdE7AnzHW6xI4ntaMYjcCGwIhAOO%2FcAoVrQqjpeIavRqdE%2Fo%2Bv%2FT2pBlZBkYw3Zq7DxboKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9bsqUuiJduYbzPnYq3AMeVkBchxeNb4YdkISxun0C46bEn4GcFhSUuPKmObpMCfJME2xMxW9EhFYauEsrNl70MD1Qo5B5wrOlFh1n1EEm67vZuy07%2BKoCdt2CM9KxBentnH5WzvvbqMK3P125oi4sjrHx695L%2BtJt49fwdrDjHRr1C%2BjDx3GuL%2FGZPabAZhwO4an%2BqoJT1VrtNoIRECq0DNPM4vWWLliNMRaOaT2x5bb5ScjR9HhwGHMTUFlp7ujHcBZiAGMhFjoiCZ6yTGeUElZ8LFr6p%2FkA0xHKQxYa0z45ZlVcNshINN2BguSQF51cEKWMulpAQtK%2Fjk%2BzeBqV3xKiTnCuX5WH6ZgCXf0vDwryVilbsUcjJrXFp61ZM88dOEPxW2wyDg0DAgIU4fT5eeDRiQYHkPbERq43muafr07u6hN18WUHU%2FqkhI03DKfbX1OYV46nM6aAGjQSPpftC7%2B0IQ%2B%2FbBaQComtxLpvkAvpmFK%2FjAcvgZvn0cELk8QYhH8hQFvNZEs9%2BW0tNrQZcL%2BOdsu7dVFHwIyF17%2BNkZzNq2VkNWkc2wgHuj5CxRCz6B0awznDhTMMRYVvV4TMFM1NlQWav2HeW4VgOYuEdn6SVh%2BXkmCLQcrI22Mhkt63A3LrAoVFRm3xqTCGobnBBjqkAeUFlKEwHwts9D6Rh9MYPhTHf1o1Jj84bnrINdGhC4QIgv7Jocsf0NOt8IKrCukQ%2BBwoBg0Ix4tpBG7vXAc%2BKEjZ408ee0XRs1z5Ls0qjhb4A%2BVWdF2Rfb1JBoVTYgL6GAa6ejUimfqBLYCfrABzdWStaU5k2nn%2BsrOdQIZYQFKpcBnQwRRAqewq%2FoAJlORpuFColUy6Ip5VcyFBzjdahyaV3f%2BX&X-Amz-Signature=788e290dfa17734235e1044b098843f8bd444e5b488c445a6ed708fa3f5a8e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNDBV5BT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCk%2BYeylaQJejCnImKOElqFdE7AnzHW6xI4ntaMYjcCGwIhAOO%2FcAoVrQqjpeIavRqdE%2Fo%2Bv%2FT2pBlZBkYw3Zq7DxboKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9bsqUuiJduYbzPnYq3AMeVkBchxeNb4YdkISxun0C46bEn4GcFhSUuPKmObpMCfJME2xMxW9EhFYauEsrNl70MD1Qo5B5wrOlFh1n1EEm67vZuy07%2BKoCdt2CM9KxBentnH5WzvvbqMK3P125oi4sjrHx695L%2BtJt49fwdrDjHRr1C%2BjDx3GuL%2FGZPabAZhwO4an%2BqoJT1VrtNoIRECq0DNPM4vWWLliNMRaOaT2x5bb5ScjR9HhwGHMTUFlp7ujHcBZiAGMhFjoiCZ6yTGeUElZ8LFr6p%2FkA0xHKQxYa0z45ZlVcNshINN2BguSQF51cEKWMulpAQtK%2Fjk%2BzeBqV3xKiTnCuX5WH6ZgCXf0vDwryVilbsUcjJrXFp61ZM88dOEPxW2wyDg0DAgIU4fT5eeDRiQYHkPbERq43muafr07u6hN18WUHU%2FqkhI03DKfbX1OYV46nM6aAGjQSPpftC7%2B0IQ%2B%2FbBaQComtxLpvkAvpmFK%2FjAcvgZvn0cELk8QYhH8hQFvNZEs9%2BW0tNrQZcL%2BOdsu7dVFHwIyF17%2BNkZzNq2VkNWkc2wgHuj5CxRCz6B0awznDhTMMRYVvV4TMFM1NlQWav2HeW4VgOYuEdn6SVh%2BXkmCLQcrI22Mhkt63A3LrAoVFRm3xqTCGobnBBjqkAeUFlKEwHwts9D6Rh9MYPhTHf1o1Jj84bnrINdGhC4QIgv7Jocsf0NOt8IKrCukQ%2BBwoBg0Ix4tpBG7vXAc%2BKEjZ408ee0XRs1z5Ls0qjhb4A%2BVWdF2Rfb1JBoVTYgL6GAa6ejUimfqBLYCfrABzdWStaU5k2nn%2BsrOdQIZYQFKpcBnQwRRAqewq%2FoAJlORpuFColUy6Ip5VcyFBzjdahyaV3f%2BX&X-Amz-Signature=dff83e79df9758cfd784f74bec88424f257bf052a268f191d7e3282b895a4f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNDBV5BT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCk%2BYeylaQJejCnImKOElqFdE7AnzHW6xI4ntaMYjcCGwIhAOO%2FcAoVrQqjpeIavRqdE%2Fo%2Bv%2FT2pBlZBkYw3Zq7DxboKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9bsqUuiJduYbzPnYq3AMeVkBchxeNb4YdkISxun0C46bEn4GcFhSUuPKmObpMCfJME2xMxW9EhFYauEsrNl70MD1Qo5B5wrOlFh1n1EEm67vZuy07%2BKoCdt2CM9KxBentnH5WzvvbqMK3P125oi4sjrHx695L%2BtJt49fwdrDjHRr1C%2BjDx3GuL%2FGZPabAZhwO4an%2BqoJT1VrtNoIRECq0DNPM4vWWLliNMRaOaT2x5bb5ScjR9HhwGHMTUFlp7ujHcBZiAGMhFjoiCZ6yTGeUElZ8LFr6p%2FkA0xHKQxYa0z45ZlVcNshINN2BguSQF51cEKWMulpAQtK%2Fjk%2BzeBqV3xKiTnCuX5WH6ZgCXf0vDwryVilbsUcjJrXFp61ZM88dOEPxW2wyDg0DAgIU4fT5eeDRiQYHkPbERq43muafr07u6hN18WUHU%2FqkhI03DKfbX1OYV46nM6aAGjQSPpftC7%2B0IQ%2B%2FbBaQComtxLpvkAvpmFK%2FjAcvgZvn0cELk8QYhH8hQFvNZEs9%2BW0tNrQZcL%2BOdsu7dVFHwIyF17%2BNkZzNq2VkNWkc2wgHuj5CxRCz6B0awznDhTMMRYVvV4TMFM1NlQWav2HeW4VgOYuEdn6SVh%2BXkmCLQcrI22Mhkt63A3LrAoVFRm3xqTCGobnBBjqkAeUFlKEwHwts9D6Rh9MYPhTHf1o1Jj84bnrINdGhC4QIgv7Jocsf0NOt8IKrCukQ%2BBwoBg0Ix4tpBG7vXAc%2BKEjZ408ee0XRs1z5Ls0qjhb4A%2BVWdF2Rfb1JBoVTYgL6GAa6ejUimfqBLYCfrABzdWStaU5k2nn%2BsrOdQIZYQFKpcBnQwRRAqewq%2FoAJlORpuFColUy6Ip5VcyFBzjdahyaV3f%2BX&X-Amz-Signature=bdceffe8877ee7f28f37fa7c2e5acf17c07d148464b018e89046597bd6e9006e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNDBV5BT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCk%2BYeylaQJejCnImKOElqFdE7AnzHW6xI4ntaMYjcCGwIhAOO%2FcAoVrQqjpeIavRqdE%2Fo%2Bv%2FT2pBlZBkYw3Zq7DxboKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9bsqUuiJduYbzPnYq3AMeVkBchxeNb4YdkISxun0C46bEn4GcFhSUuPKmObpMCfJME2xMxW9EhFYauEsrNl70MD1Qo5B5wrOlFh1n1EEm67vZuy07%2BKoCdt2CM9KxBentnH5WzvvbqMK3P125oi4sjrHx695L%2BtJt49fwdrDjHRr1C%2BjDx3GuL%2FGZPabAZhwO4an%2BqoJT1VrtNoIRECq0DNPM4vWWLliNMRaOaT2x5bb5ScjR9HhwGHMTUFlp7ujHcBZiAGMhFjoiCZ6yTGeUElZ8LFr6p%2FkA0xHKQxYa0z45ZlVcNshINN2BguSQF51cEKWMulpAQtK%2Fjk%2BzeBqV3xKiTnCuX5WH6ZgCXf0vDwryVilbsUcjJrXFp61ZM88dOEPxW2wyDg0DAgIU4fT5eeDRiQYHkPbERq43muafr07u6hN18WUHU%2FqkhI03DKfbX1OYV46nM6aAGjQSPpftC7%2B0IQ%2B%2FbBaQComtxLpvkAvpmFK%2FjAcvgZvn0cELk8QYhH8hQFvNZEs9%2BW0tNrQZcL%2BOdsu7dVFHwIyF17%2BNkZzNq2VkNWkc2wgHuj5CxRCz6B0awznDhTMMRYVvV4TMFM1NlQWav2HeW4VgOYuEdn6SVh%2BXkmCLQcrI22Mhkt63A3LrAoVFRm3xqTCGobnBBjqkAeUFlKEwHwts9D6Rh9MYPhTHf1o1Jj84bnrINdGhC4QIgv7Jocsf0NOt8IKrCukQ%2BBwoBg0Ix4tpBG7vXAc%2BKEjZ408ee0XRs1z5Ls0qjhb4A%2BVWdF2Rfb1JBoVTYgL6GAa6ejUimfqBLYCfrABzdWStaU5k2nn%2BsrOdQIZYQFKpcBnQwRRAqewq%2FoAJlORpuFColUy6Ip5VcyFBzjdahyaV3f%2BX&X-Amz-Signature=3b410d08be1bd42a62a9ac401ee64c7860fc8084ed070d4595a3113aee61b614&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNDBV5BT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCk%2BYeylaQJejCnImKOElqFdE7AnzHW6xI4ntaMYjcCGwIhAOO%2FcAoVrQqjpeIavRqdE%2Fo%2Bv%2FT2pBlZBkYw3Zq7DxboKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9bsqUuiJduYbzPnYq3AMeVkBchxeNb4YdkISxun0C46bEn4GcFhSUuPKmObpMCfJME2xMxW9EhFYauEsrNl70MD1Qo5B5wrOlFh1n1EEm67vZuy07%2BKoCdt2CM9KxBentnH5WzvvbqMK3P125oi4sjrHx695L%2BtJt49fwdrDjHRr1C%2BjDx3GuL%2FGZPabAZhwO4an%2BqoJT1VrtNoIRECq0DNPM4vWWLliNMRaOaT2x5bb5ScjR9HhwGHMTUFlp7ujHcBZiAGMhFjoiCZ6yTGeUElZ8LFr6p%2FkA0xHKQxYa0z45ZlVcNshINN2BguSQF51cEKWMulpAQtK%2Fjk%2BzeBqV3xKiTnCuX5WH6ZgCXf0vDwryVilbsUcjJrXFp61ZM88dOEPxW2wyDg0DAgIU4fT5eeDRiQYHkPbERq43muafr07u6hN18WUHU%2FqkhI03DKfbX1OYV46nM6aAGjQSPpftC7%2B0IQ%2B%2FbBaQComtxLpvkAvpmFK%2FjAcvgZvn0cELk8QYhH8hQFvNZEs9%2BW0tNrQZcL%2BOdsu7dVFHwIyF17%2BNkZzNq2VkNWkc2wgHuj5CxRCz6B0awznDhTMMRYVvV4TMFM1NlQWav2HeW4VgOYuEdn6SVh%2BXkmCLQcrI22Mhkt63A3LrAoVFRm3xqTCGobnBBjqkAeUFlKEwHwts9D6Rh9MYPhTHf1o1Jj84bnrINdGhC4QIgv7Jocsf0NOt8IKrCukQ%2BBwoBg0Ix4tpBG7vXAc%2BKEjZ408ee0XRs1z5Ls0qjhb4A%2BVWdF2Rfb1JBoVTYgL6GAa6ejUimfqBLYCfrABzdWStaU5k2nn%2BsrOdQIZYQFKpcBnQwRRAqewq%2FoAJlORpuFColUy6Ip5VcyFBzjdahyaV3f%2BX&X-Amz-Signature=252c616975842decc719370f7f0ebb33496beb150f9bfe17c580197b41943525&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNDBV5BT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCk%2BYeylaQJejCnImKOElqFdE7AnzHW6xI4ntaMYjcCGwIhAOO%2FcAoVrQqjpeIavRqdE%2Fo%2Bv%2FT2pBlZBkYw3Zq7DxboKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9bsqUuiJduYbzPnYq3AMeVkBchxeNb4YdkISxun0C46bEn4GcFhSUuPKmObpMCfJME2xMxW9EhFYauEsrNl70MD1Qo5B5wrOlFh1n1EEm67vZuy07%2BKoCdt2CM9KxBentnH5WzvvbqMK3P125oi4sjrHx695L%2BtJt49fwdrDjHRr1C%2BjDx3GuL%2FGZPabAZhwO4an%2BqoJT1VrtNoIRECq0DNPM4vWWLliNMRaOaT2x5bb5ScjR9HhwGHMTUFlp7ujHcBZiAGMhFjoiCZ6yTGeUElZ8LFr6p%2FkA0xHKQxYa0z45ZlVcNshINN2BguSQF51cEKWMulpAQtK%2Fjk%2BzeBqV3xKiTnCuX5WH6ZgCXf0vDwryVilbsUcjJrXFp61ZM88dOEPxW2wyDg0DAgIU4fT5eeDRiQYHkPbERq43muafr07u6hN18WUHU%2FqkhI03DKfbX1OYV46nM6aAGjQSPpftC7%2B0IQ%2B%2FbBaQComtxLpvkAvpmFK%2FjAcvgZvn0cELk8QYhH8hQFvNZEs9%2BW0tNrQZcL%2BOdsu7dVFHwIyF17%2BNkZzNq2VkNWkc2wgHuj5CxRCz6B0awznDhTMMRYVvV4TMFM1NlQWav2HeW4VgOYuEdn6SVh%2BXkmCLQcrI22Mhkt63A3LrAoVFRm3xqTCGobnBBjqkAeUFlKEwHwts9D6Rh9MYPhTHf1o1Jj84bnrINdGhC4QIgv7Jocsf0NOt8IKrCukQ%2BBwoBg0Ix4tpBG7vXAc%2BKEjZ408ee0XRs1z5Ls0qjhb4A%2BVWdF2Rfb1JBoVTYgL6GAa6ejUimfqBLYCfrABzdWStaU5k2nn%2BsrOdQIZYQFKpcBnQwRRAqewq%2FoAJlORpuFColUy6Ip5VcyFBzjdahyaV3f%2BX&X-Amz-Signature=a6df8bd65b1499d58b839c44e99dd807f28274b9e7bfa0d7a16098a42dd04da0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNDBV5BT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCk%2BYeylaQJejCnImKOElqFdE7AnzHW6xI4ntaMYjcCGwIhAOO%2FcAoVrQqjpeIavRqdE%2Fo%2Bv%2FT2pBlZBkYw3Zq7DxboKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9bsqUuiJduYbzPnYq3AMeVkBchxeNb4YdkISxun0C46bEn4GcFhSUuPKmObpMCfJME2xMxW9EhFYauEsrNl70MD1Qo5B5wrOlFh1n1EEm67vZuy07%2BKoCdt2CM9KxBentnH5WzvvbqMK3P125oi4sjrHx695L%2BtJt49fwdrDjHRr1C%2BjDx3GuL%2FGZPabAZhwO4an%2BqoJT1VrtNoIRECq0DNPM4vWWLliNMRaOaT2x5bb5ScjR9HhwGHMTUFlp7ujHcBZiAGMhFjoiCZ6yTGeUElZ8LFr6p%2FkA0xHKQxYa0z45ZlVcNshINN2BguSQF51cEKWMulpAQtK%2Fjk%2BzeBqV3xKiTnCuX5WH6ZgCXf0vDwryVilbsUcjJrXFp61ZM88dOEPxW2wyDg0DAgIU4fT5eeDRiQYHkPbERq43muafr07u6hN18WUHU%2FqkhI03DKfbX1OYV46nM6aAGjQSPpftC7%2B0IQ%2B%2FbBaQComtxLpvkAvpmFK%2FjAcvgZvn0cELk8QYhH8hQFvNZEs9%2BW0tNrQZcL%2BOdsu7dVFHwIyF17%2BNkZzNq2VkNWkc2wgHuj5CxRCz6B0awznDhTMMRYVvV4TMFM1NlQWav2HeW4VgOYuEdn6SVh%2BXkmCLQcrI22Mhkt63A3LrAoVFRm3xqTCGobnBBjqkAeUFlKEwHwts9D6Rh9MYPhTHf1o1Jj84bnrINdGhC4QIgv7Jocsf0NOt8IKrCukQ%2BBwoBg0Ix4tpBG7vXAc%2BKEjZ408ee0XRs1z5Ls0qjhb4A%2BVWdF2Rfb1JBoVTYgL6GAa6ejUimfqBLYCfrABzdWStaU5k2nn%2BsrOdQIZYQFKpcBnQwRRAqewq%2FoAJlORpuFColUy6Ip5VcyFBzjdahyaV3f%2BX&X-Amz-Signature=6119905a2d9c453fd0cab92456c1564ea82712acc700cd8c1d176be2db6b72c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNDBV5BT%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCk%2BYeylaQJejCnImKOElqFdE7AnzHW6xI4ntaMYjcCGwIhAOO%2FcAoVrQqjpeIavRqdE%2Fo%2Bv%2FT2pBlZBkYw3Zq7DxboKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9bsqUuiJduYbzPnYq3AMeVkBchxeNb4YdkISxun0C46bEn4GcFhSUuPKmObpMCfJME2xMxW9EhFYauEsrNl70MD1Qo5B5wrOlFh1n1EEm67vZuy07%2BKoCdt2CM9KxBentnH5WzvvbqMK3P125oi4sjrHx695L%2BtJt49fwdrDjHRr1C%2BjDx3GuL%2FGZPabAZhwO4an%2BqoJT1VrtNoIRECq0DNPM4vWWLliNMRaOaT2x5bb5ScjR9HhwGHMTUFlp7ujHcBZiAGMhFjoiCZ6yTGeUElZ8LFr6p%2FkA0xHKQxYa0z45ZlVcNshINN2BguSQF51cEKWMulpAQtK%2Fjk%2BzeBqV3xKiTnCuX5WH6ZgCXf0vDwryVilbsUcjJrXFp61ZM88dOEPxW2wyDg0DAgIU4fT5eeDRiQYHkPbERq43muafr07u6hN18WUHU%2FqkhI03DKfbX1OYV46nM6aAGjQSPpftC7%2B0IQ%2B%2FbBaQComtxLpvkAvpmFK%2FjAcvgZvn0cELk8QYhH8hQFvNZEs9%2BW0tNrQZcL%2BOdsu7dVFHwIyF17%2BNkZzNq2VkNWkc2wgHuj5CxRCz6B0awznDhTMMRYVvV4TMFM1NlQWav2HeW4VgOYuEdn6SVh%2BXkmCLQcrI22Mhkt63A3LrAoVFRm3xqTCGobnBBjqkAeUFlKEwHwts9D6Rh9MYPhTHf1o1Jj84bnrINdGhC4QIgv7Jocsf0NOt8IKrCukQ%2BBwoBg0Ix4tpBG7vXAc%2BKEjZ408ee0XRs1z5Ls0qjhb4A%2BVWdF2Rfb1JBoVTYgL6GAa6ejUimfqBLYCfrABzdWStaU5k2nn%2BsrOdQIZYQFKpcBnQwRRAqewq%2FoAJlORpuFColUy6Ip5VcyFBzjdahyaV3f%2BX&X-Amz-Signature=644afd4a8c69f531b70d4591ccdcbc275c6113885d706525a65e0cab093fe889&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
