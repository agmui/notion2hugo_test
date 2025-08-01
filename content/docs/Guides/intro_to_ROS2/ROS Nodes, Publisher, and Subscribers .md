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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFJ7XCS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0GhnytBqLh0Qi0qBOW9OFP%2F0xSqPaaaPShehN0uEKxAiEA01%2BAytRoj%2B8RgCL0z2vIxLgr%2F7dEG%2BbvPgo1qbmswvwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPePeQAC7B%2B6lxbCwSrcA1jTgWzjFWRh3wtKvaSBjD3Q29g3JP5zEPjSI6ThFNims%2BMdMwJanXteUUQ6JDaOF22y5riEKcvAtbVmwMNYIF0bcr5jSvaz6wQ4zILN5kRXTtO1aao1GjgZ79QmSEFIZ2BGy1Cpxlj7s35EVQ3HeydSy7ULpWpcCSEzt5u57%2FOxaHC1WFoIfPiEmIe7%2FbnkB2WOLkY7uOFCw8KMNRfiSQGDwlp1g2u%2FbtYMlN584MKMkjoBPtRH290ntHQOAJB6I%2BKeEk6h0NdSakLuSzwzBohiEZ5rutxbqAp3XQ8Ljs34ZlJD6BEigwaK6Z4QqpKJ7p8291XTwyL1zDcUKA5pGEMEvSqzGRN1wX3pCC1PVVHPI%2BcEmHnTKeFH2ivSlAIXgP8yl4D6sAibLAuD0A55gybzwaUGtVmTDNMiVEgbS%2FBP65EMiT7oxDm%2Biz6xUO1qBaO6r%2FV0i8ytVtNNOoCtKK%2Fb9hNMIZFGqap09bWZIInnokxZUaTXuvFraEPBBQqB%2BEFkKuQ83OvBAkbb1uorjrv8ldEcYUnIW9m8s%2FPLvlSBLC8%2FhMO%2B1jZaN%2BMsWa%2F8FcXV8vmtGEl2G%2B%2FnvxaESrL476xRaSYpFhDdhB9X3T3eVSiKUvIUCU6YNVaFMOCcscQGOqUB9hiMTlUo78Nz9t4jwP47mTXmYr2Etb4LkBkIZuIja9Psi8dNK73NU%2FT9JetKYGrTru7kb%2BLhDP%2FtZqiY8QSdSDMzqMxH4JaTMAzLyCdqr84ignH5qVb2xT0Mq2oIuV4soibUB%2FRwkeZj2r9ZZNpDysY4DTOCLB0S09cJJcG%2FursQ2uK8eJ%2F0qwTAqLLpg3k7wbY3Wx%2FYbUFKzYHMqfed%2F9KRW4Jc&X-Amz-Signature=d0a91108d93a20f9caff0d59732a3c58a458ebdf716a9e47761a7908d3a811ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFJ7XCS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0GhnytBqLh0Qi0qBOW9OFP%2F0xSqPaaaPShehN0uEKxAiEA01%2BAytRoj%2B8RgCL0z2vIxLgr%2F7dEG%2BbvPgo1qbmswvwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPePeQAC7B%2B6lxbCwSrcA1jTgWzjFWRh3wtKvaSBjD3Q29g3JP5zEPjSI6ThFNims%2BMdMwJanXteUUQ6JDaOF22y5riEKcvAtbVmwMNYIF0bcr5jSvaz6wQ4zILN5kRXTtO1aao1GjgZ79QmSEFIZ2BGy1Cpxlj7s35EVQ3HeydSy7ULpWpcCSEzt5u57%2FOxaHC1WFoIfPiEmIe7%2FbnkB2WOLkY7uOFCw8KMNRfiSQGDwlp1g2u%2FbtYMlN584MKMkjoBPtRH290ntHQOAJB6I%2BKeEk6h0NdSakLuSzwzBohiEZ5rutxbqAp3XQ8Ljs34ZlJD6BEigwaK6Z4QqpKJ7p8291XTwyL1zDcUKA5pGEMEvSqzGRN1wX3pCC1PVVHPI%2BcEmHnTKeFH2ivSlAIXgP8yl4D6sAibLAuD0A55gybzwaUGtVmTDNMiVEgbS%2FBP65EMiT7oxDm%2Biz6xUO1qBaO6r%2FV0i8ytVtNNOoCtKK%2Fb9hNMIZFGqap09bWZIInnokxZUaTXuvFraEPBBQqB%2BEFkKuQ83OvBAkbb1uorjrv8ldEcYUnIW9m8s%2FPLvlSBLC8%2FhMO%2B1jZaN%2BMsWa%2F8FcXV8vmtGEl2G%2B%2FnvxaESrL476xRaSYpFhDdhB9X3T3eVSiKUvIUCU6YNVaFMOCcscQGOqUB9hiMTlUo78Nz9t4jwP47mTXmYr2Etb4LkBkIZuIja9Psi8dNK73NU%2FT9JetKYGrTru7kb%2BLhDP%2FtZqiY8QSdSDMzqMxH4JaTMAzLyCdqr84ignH5qVb2xT0Mq2oIuV4soibUB%2FRwkeZj2r9ZZNpDysY4DTOCLB0S09cJJcG%2FursQ2uK8eJ%2F0qwTAqLLpg3k7wbY3Wx%2FYbUFKzYHMqfed%2F9KRW4Jc&X-Amz-Signature=58a1f407283080aac3db96283dd6a0564700d06edcea7db8c8528284dd25c2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFJ7XCS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0GhnytBqLh0Qi0qBOW9OFP%2F0xSqPaaaPShehN0uEKxAiEA01%2BAytRoj%2B8RgCL0z2vIxLgr%2F7dEG%2BbvPgo1qbmswvwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPePeQAC7B%2B6lxbCwSrcA1jTgWzjFWRh3wtKvaSBjD3Q29g3JP5zEPjSI6ThFNims%2BMdMwJanXteUUQ6JDaOF22y5riEKcvAtbVmwMNYIF0bcr5jSvaz6wQ4zILN5kRXTtO1aao1GjgZ79QmSEFIZ2BGy1Cpxlj7s35EVQ3HeydSy7ULpWpcCSEzt5u57%2FOxaHC1WFoIfPiEmIe7%2FbnkB2WOLkY7uOFCw8KMNRfiSQGDwlp1g2u%2FbtYMlN584MKMkjoBPtRH290ntHQOAJB6I%2BKeEk6h0NdSakLuSzwzBohiEZ5rutxbqAp3XQ8Ljs34ZlJD6BEigwaK6Z4QqpKJ7p8291XTwyL1zDcUKA5pGEMEvSqzGRN1wX3pCC1PVVHPI%2BcEmHnTKeFH2ivSlAIXgP8yl4D6sAibLAuD0A55gybzwaUGtVmTDNMiVEgbS%2FBP65EMiT7oxDm%2Biz6xUO1qBaO6r%2FV0i8ytVtNNOoCtKK%2Fb9hNMIZFGqap09bWZIInnokxZUaTXuvFraEPBBQqB%2BEFkKuQ83OvBAkbb1uorjrv8ldEcYUnIW9m8s%2FPLvlSBLC8%2FhMO%2B1jZaN%2BMsWa%2F8FcXV8vmtGEl2G%2B%2FnvxaESrL476xRaSYpFhDdhB9X3T3eVSiKUvIUCU6YNVaFMOCcscQGOqUB9hiMTlUo78Nz9t4jwP47mTXmYr2Etb4LkBkIZuIja9Psi8dNK73NU%2FT9JetKYGrTru7kb%2BLhDP%2FtZqiY8QSdSDMzqMxH4JaTMAzLyCdqr84ignH5qVb2xT0Mq2oIuV4soibUB%2FRwkeZj2r9ZZNpDysY4DTOCLB0S09cJJcG%2FursQ2uK8eJ%2F0qwTAqLLpg3k7wbY3Wx%2FYbUFKzYHMqfed%2F9KRW4Jc&X-Amz-Signature=2054e7a0e98cdbbe63b014e3802117716c0808d0438d2052b80b1fdae193c7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFJ7XCS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0GhnytBqLh0Qi0qBOW9OFP%2F0xSqPaaaPShehN0uEKxAiEA01%2BAytRoj%2B8RgCL0z2vIxLgr%2F7dEG%2BbvPgo1qbmswvwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPePeQAC7B%2B6lxbCwSrcA1jTgWzjFWRh3wtKvaSBjD3Q29g3JP5zEPjSI6ThFNims%2BMdMwJanXteUUQ6JDaOF22y5riEKcvAtbVmwMNYIF0bcr5jSvaz6wQ4zILN5kRXTtO1aao1GjgZ79QmSEFIZ2BGy1Cpxlj7s35EVQ3HeydSy7ULpWpcCSEzt5u57%2FOxaHC1WFoIfPiEmIe7%2FbnkB2WOLkY7uOFCw8KMNRfiSQGDwlp1g2u%2FbtYMlN584MKMkjoBPtRH290ntHQOAJB6I%2BKeEk6h0NdSakLuSzwzBohiEZ5rutxbqAp3XQ8Ljs34ZlJD6BEigwaK6Z4QqpKJ7p8291XTwyL1zDcUKA5pGEMEvSqzGRN1wX3pCC1PVVHPI%2BcEmHnTKeFH2ivSlAIXgP8yl4D6sAibLAuD0A55gybzwaUGtVmTDNMiVEgbS%2FBP65EMiT7oxDm%2Biz6xUO1qBaO6r%2FV0i8ytVtNNOoCtKK%2Fb9hNMIZFGqap09bWZIInnokxZUaTXuvFraEPBBQqB%2BEFkKuQ83OvBAkbb1uorjrv8ldEcYUnIW9m8s%2FPLvlSBLC8%2FhMO%2B1jZaN%2BMsWa%2F8FcXV8vmtGEl2G%2B%2FnvxaESrL476xRaSYpFhDdhB9X3T3eVSiKUvIUCU6YNVaFMOCcscQGOqUB9hiMTlUo78Nz9t4jwP47mTXmYr2Etb4LkBkIZuIja9Psi8dNK73NU%2FT9JetKYGrTru7kb%2BLhDP%2FtZqiY8QSdSDMzqMxH4JaTMAzLyCdqr84ignH5qVb2xT0Mq2oIuV4soibUB%2FRwkeZj2r9ZZNpDysY4DTOCLB0S09cJJcG%2FursQ2uK8eJ%2F0qwTAqLLpg3k7wbY3Wx%2FYbUFKzYHMqfed%2F9KRW4Jc&X-Amz-Signature=d979e2b46630a39c0105e51de8e4f0774844a8437ac07ad0795129540aa8f522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFJ7XCS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0GhnytBqLh0Qi0qBOW9OFP%2F0xSqPaaaPShehN0uEKxAiEA01%2BAytRoj%2B8RgCL0z2vIxLgr%2F7dEG%2BbvPgo1qbmswvwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPePeQAC7B%2B6lxbCwSrcA1jTgWzjFWRh3wtKvaSBjD3Q29g3JP5zEPjSI6ThFNims%2BMdMwJanXteUUQ6JDaOF22y5riEKcvAtbVmwMNYIF0bcr5jSvaz6wQ4zILN5kRXTtO1aao1GjgZ79QmSEFIZ2BGy1Cpxlj7s35EVQ3HeydSy7ULpWpcCSEzt5u57%2FOxaHC1WFoIfPiEmIe7%2FbnkB2WOLkY7uOFCw8KMNRfiSQGDwlp1g2u%2FbtYMlN584MKMkjoBPtRH290ntHQOAJB6I%2BKeEk6h0NdSakLuSzwzBohiEZ5rutxbqAp3XQ8Ljs34ZlJD6BEigwaK6Z4QqpKJ7p8291XTwyL1zDcUKA5pGEMEvSqzGRN1wX3pCC1PVVHPI%2BcEmHnTKeFH2ivSlAIXgP8yl4D6sAibLAuD0A55gybzwaUGtVmTDNMiVEgbS%2FBP65EMiT7oxDm%2Biz6xUO1qBaO6r%2FV0i8ytVtNNOoCtKK%2Fb9hNMIZFGqap09bWZIInnokxZUaTXuvFraEPBBQqB%2BEFkKuQ83OvBAkbb1uorjrv8ldEcYUnIW9m8s%2FPLvlSBLC8%2FhMO%2B1jZaN%2BMsWa%2F8FcXV8vmtGEl2G%2B%2FnvxaESrL476xRaSYpFhDdhB9X3T3eVSiKUvIUCU6YNVaFMOCcscQGOqUB9hiMTlUo78Nz9t4jwP47mTXmYr2Etb4LkBkIZuIja9Psi8dNK73NU%2FT9JetKYGrTru7kb%2BLhDP%2FtZqiY8QSdSDMzqMxH4JaTMAzLyCdqr84ignH5qVb2xT0Mq2oIuV4soibUB%2FRwkeZj2r9ZZNpDysY4DTOCLB0S09cJJcG%2FursQ2uK8eJ%2F0qwTAqLLpg3k7wbY3Wx%2FYbUFKzYHMqfed%2F9KRW4Jc&X-Amz-Signature=7149f5bd9cf12a54b1d403e9b5b0cad90e33687ce7e74661f9f839655cbe5ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFJ7XCS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0GhnytBqLh0Qi0qBOW9OFP%2F0xSqPaaaPShehN0uEKxAiEA01%2BAytRoj%2B8RgCL0z2vIxLgr%2F7dEG%2BbvPgo1qbmswvwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPePeQAC7B%2B6lxbCwSrcA1jTgWzjFWRh3wtKvaSBjD3Q29g3JP5zEPjSI6ThFNims%2BMdMwJanXteUUQ6JDaOF22y5riEKcvAtbVmwMNYIF0bcr5jSvaz6wQ4zILN5kRXTtO1aao1GjgZ79QmSEFIZ2BGy1Cpxlj7s35EVQ3HeydSy7ULpWpcCSEzt5u57%2FOxaHC1WFoIfPiEmIe7%2FbnkB2WOLkY7uOFCw8KMNRfiSQGDwlp1g2u%2FbtYMlN584MKMkjoBPtRH290ntHQOAJB6I%2BKeEk6h0NdSakLuSzwzBohiEZ5rutxbqAp3XQ8Ljs34ZlJD6BEigwaK6Z4QqpKJ7p8291XTwyL1zDcUKA5pGEMEvSqzGRN1wX3pCC1PVVHPI%2BcEmHnTKeFH2ivSlAIXgP8yl4D6sAibLAuD0A55gybzwaUGtVmTDNMiVEgbS%2FBP65EMiT7oxDm%2Biz6xUO1qBaO6r%2FV0i8ytVtNNOoCtKK%2Fb9hNMIZFGqap09bWZIInnokxZUaTXuvFraEPBBQqB%2BEFkKuQ83OvBAkbb1uorjrv8ldEcYUnIW9m8s%2FPLvlSBLC8%2FhMO%2B1jZaN%2BMsWa%2F8FcXV8vmtGEl2G%2B%2FnvxaESrL476xRaSYpFhDdhB9X3T3eVSiKUvIUCU6YNVaFMOCcscQGOqUB9hiMTlUo78Nz9t4jwP47mTXmYr2Etb4LkBkIZuIja9Psi8dNK73NU%2FT9JetKYGrTru7kb%2BLhDP%2FtZqiY8QSdSDMzqMxH4JaTMAzLyCdqr84ignH5qVb2xT0Mq2oIuV4soibUB%2FRwkeZj2r9ZZNpDysY4DTOCLB0S09cJJcG%2FursQ2uK8eJ%2F0qwTAqLLpg3k7wbY3Wx%2FYbUFKzYHMqfed%2F9KRW4Jc&X-Amz-Signature=939694dcd79dc13a76dc7a75f9abc53ba0c4277fac5377bbbbc2f471e1b2d8c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFJ7XCS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0GhnytBqLh0Qi0qBOW9OFP%2F0xSqPaaaPShehN0uEKxAiEA01%2BAytRoj%2B8RgCL0z2vIxLgr%2F7dEG%2BbvPgo1qbmswvwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPePeQAC7B%2B6lxbCwSrcA1jTgWzjFWRh3wtKvaSBjD3Q29g3JP5zEPjSI6ThFNims%2BMdMwJanXteUUQ6JDaOF22y5riEKcvAtbVmwMNYIF0bcr5jSvaz6wQ4zILN5kRXTtO1aao1GjgZ79QmSEFIZ2BGy1Cpxlj7s35EVQ3HeydSy7ULpWpcCSEzt5u57%2FOxaHC1WFoIfPiEmIe7%2FbnkB2WOLkY7uOFCw8KMNRfiSQGDwlp1g2u%2FbtYMlN584MKMkjoBPtRH290ntHQOAJB6I%2BKeEk6h0NdSakLuSzwzBohiEZ5rutxbqAp3XQ8Ljs34ZlJD6BEigwaK6Z4QqpKJ7p8291XTwyL1zDcUKA5pGEMEvSqzGRN1wX3pCC1PVVHPI%2BcEmHnTKeFH2ivSlAIXgP8yl4D6sAibLAuD0A55gybzwaUGtVmTDNMiVEgbS%2FBP65EMiT7oxDm%2Biz6xUO1qBaO6r%2FV0i8ytVtNNOoCtKK%2Fb9hNMIZFGqap09bWZIInnokxZUaTXuvFraEPBBQqB%2BEFkKuQ83OvBAkbb1uorjrv8ldEcYUnIW9m8s%2FPLvlSBLC8%2FhMO%2B1jZaN%2BMsWa%2F8FcXV8vmtGEl2G%2B%2FnvxaESrL476xRaSYpFhDdhB9X3T3eVSiKUvIUCU6YNVaFMOCcscQGOqUB9hiMTlUo78Nz9t4jwP47mTXmYr2Etb4LkBkIZuIja9Psi8dNK73NU%2FT9JetKYGrTru7kb%2BLhDP%2FtZqiY8QSdSDMzqMxH4JaTMAzLyCdqr84ignH5qVb2xT0Mq2oIuV4soibUB%2FRwkeZj2r9ZZNpDysY4DTOCLB0S09cJJcG%2FursQ2uK8eJ%2F0qwTAqLLpg3k7wbY3Wx%2FYbUFKzYHMqfed%2F9KRW4Jc&X-Amz-Signature=bd18d559eac62f523e999b7125cbacba5d074130f4cf8c47b45d5456ee66bbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFJ7XCS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0GhnytBqLh0Qi0qBOW9OFP%2F0xSqPaaaPShehN0uEKxAiEA01%2BAytRoj%2B8RgCL0z2vIxLgr%2F7dEG%2BbvPgo1qbmswvwqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPePeQAC7B%2B6lxbCwSrcA1jTgWzjFWRh3wtKvaSBjD3Q29g3JP5zEPjSI6ThFNims%2BMdMwJanXteUUQ6JDaOF22y5riEKcvAtbVmwMNYIF0bcr5jSvaz6wQ4zILN5kRXTtO1aao1GjgZ79QmSEFIZ2BGy1Cpxlj7s35EVQ3HeydSy7ULpWpcCSEzt5u57%2FOxaHC1WFoIfPiEmIe7%2FbnkB2WOLkY7uOFCw8KMNRfiSQGDwlp1g2u%2FbtYMlN584MKMkjoBPtRH290ntHQOAJB6I%2BKeEk6h0NdSakLuSzwzBohiEZ5rutxbqAp3XQ8Ljs34ZlJD6BEigwaK6Z4QqpKJ7p8291XTwyL1zDcUKA5pGEMEvSqzGRN1wX3pCC1PVVHPI%2BcEmHnTKeFH2ivSlAIXgP8yl4D6sAibLAuD0A55gybzwaUGtVmTDNMiVEgbS%2FBP65EMiT7oxDm%2Biz6xUO1qBaO6r%2FV0i8ytVtNNOoCtKK%2Fb9hNMIZFGqap09bWZIInnokxZUaTXuvFraEPBBQqB%2BEFkKuQ83OvBAkbb1uorjrv8ldEcYUnIW9m8s%2FPLvlSBLC8%2FhMO%2B1jZaN%2BMsWa%2F8FcXV8vmtGEl2G%2B%2FnvxaESrL476xRaSYpFhDdhB9X3T3eVSiKUvIUCU6YNVaFMOCcscQGOqUB9hiMTlUo78Nz9t4jwP47mTXmYr2Etb4LkBkIZuIja9Psi8dNK73NU%2FT9JetKYGrTru7kb%2BLhDP%2FtZqiY8QSdSDMzqMxH4JaTMAzLyCdqr84ignH5qVb2xT0Mq2oIuV4soibUB%2FRwkeZj2r9ZZNpDysY4DTOCLB0S09cJJcG%2FursQ2uK8eJ%2F0qwTAqLLpg3k7wbY3Wx%2FYbUFKzYHMqfed%2F9KRW4Jc&X-Amz-Signature=201038b35c777992151f3dd9bd707fa114d0420554b3fa1d68f2a2bbe2fdf477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
