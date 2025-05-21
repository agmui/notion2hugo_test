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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FW6NVLQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDB1CgefP%2Fog%2FmmZ1KGRqWfIjAMpNQRvqrpMRON3NcDcQIgECSe%2FhDj3cUFXetUa6hNZGEFB8IX4iJy%2FTezNYrz0NEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIbHUXX85IBcqYLyCrcA%2BlLd5SRaLnKibD2efFc9P3pYI61T6lFHmkgr3w2UbixuB8za2Lk1udBH1Kyc0waOQ3d0LYj7Ir3VMBhWpIu9q6vDWRFicowzYSihzVxt2D%2BvtscFDLXf86JVrqnia76HKNrS6IjLP4anJqCEbAJfs5HO6l%2BWyNjt1WWu58fldgDS%2FmrPQeWCYDNavxAvRNpIAxcLf%2BQDeIBdfyrkl0SiAbjj34uaXj%2F5w%2BZZyBByViAIHKHLNgugAF5lizlSyIeq0LqXcwCxvP%2BiYO5SYcBQe9DERDq%2B4cvN38%2FzA3yIBp3Vd7HSMBPe%2FmBKC89cklqJdsU5PQNad16M7wf2CgBk1QwUg54GizZ%2BlwpN4GY34PP2C6p89dW1ItrwYJs5qV02CATWA0T%2FUVBJHIWuiPFO%2B57lo9hB5N23Qu5V6pDJyZeiWdxjiSlCdupCFQbM8PW%2FUAo7CI3bUuwGx710jEt9MH7BK7LiPXDy7y3qtCYe1lJdxGV035yjuVMuY7lRNrey%2B9nFLc9alnLsBatGWyQjfkef7UIv90OA%2BT2pMPQf8HgU%2Fa2NQR7MXDPrrpAgsGxPLtjOnhNd8orUkSiGIKf9Y0trtdlbqS1nmLwe1VoHlKtf4qnpguubJiq0OlrMMLAuMEGOqUB6RplSBkLyqfSH7qyGpq9fZlP5XJxTf1iREcULitA6qPXuHV6vyOpuoepRpl11EJUKIV7dRA5ZmBaGPCf9tifHP5IQTcdMNOKWwK%2BUve8nt4UUyq2SL25W7qe%2BX9U3Wrdk6CcsdWU3wBUtjoNxUgNB%2BfuqpyWdObRZl3KoKQtubichU6r7IymN4tRsb1%2FQhdlRUah40i%2BCO1%2BPt4GaBVp%2FYAUGjx0&X-Amz-Signature=02a6c7f573be78a50a91c934d2cafd92b11f9e464f353b70df7c3cb91bb649f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FW6NVLQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDB1CgefP%2Fog%2FmmZ1KGRqWfIjAMpNQRvqrpMRON3NcDcQIgECSe%2FhDj3cUFXetUa6hNZGEFB8IX4iJy%2FTezNYrz0NEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIbHUXX85IBcqYLyCrcA%2BlLd5SRaLnKibD2efFc9P3pYI61T6lFHmkgr3w2UbixuB8za2Lk1udBH1Kyc0waOQ3d0LYj7Ir3VMBhWpIu9q6vDWRFicowzYSihzVxt2D%2BvtscFDLXf86JVrqnia76HKNrS6IjLP4anJqCEbAJfs5HO6l%2BWyNjt1WWu58fldgDS%2FmrPQeWCYDNavxAvRNpIAxcLf%2BQDeIBdfyrkl0SiAbjj34uaXj%2F5w%2BZZyBByViAIHKHLNgugAF5lizlSyIeq0LqXcwCxvP%2BiYO5SYcBQe9DERDq%2B4cvN38%2FzA3yIBp3Vd7HSMBPe%2FmBKC89cklqJdsU5PQNad16M7wf2CgBk1QwUg54GizZ%2BlwpN4GY34PP2C6p89dW1ItrwYJs5qV02CATWA0T%2FUVBJHIWuiPFO%2B57lo9hB5N23Qu5V6pDJyZeiWdxjiSlCdupCFQbM8PW%2FUAo7CI3bUuwGx710jEt9MH7BK7LiPXDy7y3qtCYe1lJdxGV035yjuVMuY7lRNrey%2B9nFLc9alnLsBatGWyQjfkef7UIv90OA%2BT2pMPQf8HgU%2Fa2NQR7MXDPrrpAgsGxPLtjOnhNd8orUkSiGIKf9Y0trtdlbqS1nmLwe1VoHlKtf4qnpguubJiq0OlrMMLAuMEGOqUB6RplSBkLyqfSH7qyGpq9fZlP5XJxTf1iREcULitA6qPXuHV6vyOpuoepRpl11EJUKIV7dRA5ZmBaGPCf9tifHP5IQTcdMNOKWwK%2BUve8nt4UUyq2SL25W7qe%2BX9U3Wrdk6CcsdWU3wBUtjoNxUgNB%2BfuqpyWdObRZl3KoKQtubichU6r7IymN4tRsb1%2FQhdlRUah40i%2BCO1%2BPt4GaBVp%2FYAUGjx0&X-Amz-Signature=4009f3ec55c6b59a4aaee846687a6aa6b0b85a9cdda5c226351f02c936a62484&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FW6NVLQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDB1CgefP%2Fog%2FmmZ1KGRqWfIjAMpNQRvqrpMRON3NcDcQIgECSe%2FhDj3cUFXetUa6hNZGEFB8IX4iJy%2FTezNYrz0NEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIbHUXX85IBcqYLyCrcA%2BlLd5SRaLnKibD2efFc9P3pYI61T6lFHmkgr3w2UbixuB8za2Lk1udBH1Kyc0waOQ3d0LYj7Ir3VMBhWpIu9q6vDWRFicowzYSihzVxt2D%2BvtscFDLXf86JVrqnia76HKNrS6IjLP4anJqCEbAJfs5HO6l%2BWyNjt1WWu58fldgDS%2FmrPQeWCYDNavxAvRNpIAxcLf%2BQDeIBdfyrkl0SiAbjj34uaXj%2F5w%2BZZyBByViAIHKHLNgugAF5lizlSyIeq0LqXcwCxvP%2BiYO5SYcBQe9DERDq%2B4cvN38%2FzA3yIBp3Vd7HSMBPe%2FmBKC89cklqJdsU5PQNad16M7wf2CgBk1QwUg54GizZ%2BlwpN4GY34PP2C6p89dW1ItrwYJs5qV02CATWA0T%2FUVBJHIWuiPFO%2B57lo9hB5N23Qu5V6pDJyZeiWdxjiSlCdupCFQbM8PW%2FUAo7CI3bUuwGx710jEt9MH7BK7LiPXDy7y3qtCYe1lJdxGV035yjuVMuY7lRNrey%2B9nFLc9alnLsBatGWyQjfkef7UIv90OA%2BT2pMPQf8HgU%2Fa2NQR7MXDPrrpAgsGxPLtjOnhNd8orUkSiGIKf9Y0trtdlbqS1nmLwe1VoHlKtf4qnpguubJiq0OlrMMLAuMEGOqUB6RplSBkLyqfSH7qyGpq9fZlP5XJxTf1iREcULitA6qPXuHV6vyOpuoepRpl11EJUKIV7dRA5ZmBaGPCf9tifHP5IQTcdMNOKWwK%2BUve8nt4UUyq2SL25W7qe%2BX9U3Wrdk6CcsdWU3wBUtjoNxUgNB%2BfuqpyWdObRZl3KoKQtubichU6r7IymN4tRsb1%2FQhdlRUah40i%2BCO1%2BPt4GaBVp%2FYAUGjx0&X-Amz-Signature=f23ac0dbe7dc060058dafd9c8b81287d5bac768a35744a3df2994e9af6e3217b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FW6NVLQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDB1CgefP%2Fog%2FmmZ1KGRqWfIjAMpNQRvqrpMRON3NcDcQIgECSe%2FhDj3cUFXetUa6hNZGEFB8IX4iJy%2FTezNYrz0NEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIbHUXX85IBcqYLyCrcA%2BlLd5SRaLnKibD2efFc9P3pYI61T6lFHmkgr3w2UbixuB8za2Lk1udBH1Kyc0waOQ3d0LYj7Ir3VMBhWpIu9q6vDWRFicowzYSihzVxt2D%2BvtscFDLXf86JVrqnia76HKNrS6IjLP4anJqCEbAJfs5HO6l%2BWyNjt1WWu58fldgDS%2FmrPQeWCYDNavxAvRNpIAxcLf%2BQDeIBdfyrkl0SiAbjj34uaXj%2F5w%2BZZyBByViAIHKHLNgugAF5lizlSyIeq0LqXcwCxvP%2BiYO5SYcBQe9DERDq%2B4cvN38%2FzA3yIBp3Vd7HSMBPe%2FmBKC89cklqJdsU5PQNad16M7wf2CgBk1QwUg54GizZ%2BlwpN4GY34PP2C6p89dW1ItrwYJs5qV02CATWA0T%2FUVBJHIWuiPFO%2B57lo9hB5N23Qu5V6pDJyZeiWdxjiSlCdupCFQbM8PW%2FUAo7CI3bUuwGx710jEt9MH7BK7LiPXDy7y3qtCYe1lJdxGV035yjuVMuY7lRNrey%2B9nFLc9alnLsBatGWyQjfkef7UIv90OA%2BT2pMPQf8HgU%2Fa2NQR7MXDPrrpAgsGxPLtjOnhNd8orUkSiGIKf9Y0trtdlbqS1nmLwe1VoHlKtf4qnpguubJiq0OlrMMLAuMEGOqUB6RplSBkLyqfSH7qyGpq9fZlP5XJxTf1iREcULitA6qPXuHV6vyOpuoepRpl11EJUKIV7dRA5ZmBaGPCf9tifHP5IQTcdMNOKWwK%2BUve8nt4UUyq2SL25W7qe%2BX9U3Wrdk6CcsdWU3wBUtjoNxUgNB%2BfuqpyWdObRZl3KoKQtubichU6r7IymN4tRsb1%2FQhdlRUah40i%2BCO1%2BPt4GaBVp%2FYAUGjx0&X-Amz-Signature=2470cedab807d72c42dca9040dbc524d51a8b242c671dc981b034a46e6f6d90b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FW6NVLQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDB1CgefP%2Fog%2FmmZ1KGRqWfIjAMpNQRvqrpMRON3NcDcQIgECSe%2FhDj3cUFXetUa6hNZGEFB8IX4iJy%2FTezNYrz0NEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIbHUXX85IBcqYLyCrcA%2BlLd5SRaLnKibD2efFc9P3pYI61T6lFHmkgr3w2UbixuB8za2Lk1udBH1Kyc0waOQ3d0LYj7Ir3VMBhWpIu9q6vDWRFicowzYSihzVxt2D%2BvtscFDLXf86JVrqnia76HKNrS6IjLP4anJqCEbAJfs5HO6l%2BWyNjt1WWu58fldgDS%2FmrPQeWCYDNavxAvRNpIAxcLf%2BQDeIBdfyrkl0SiAbjj34uaXj%2F5w%2BZZyBByViAIHKHLNgugAF5lizlSyIeq0LqXcwCxvP%2BiYO5SYcBQe9DERDq%2B4cvN38%2FzA3yIBp3Vd7HSMBPe%2FmBKC89cklqJdsU5PQNad16M7wf2CgBk1QwUg54GizZ%2BlwpN4GY34PP2C6p89dW1ItrwYJs5qV02CATWA0T%2FUVBJHIWuiPFO%2B57lo9hB5N23Qu5V6pDJyZeiWdxjiSlCdupCFQbM8PW%2FUAo7CI3bUuwGx710jEt9MH7BK7LiPXDy7y3qtCYe1lJdxGV035yjuVMuY7lRNrey%2B9nFLc9alnLsBatGWyQjfkef7UIv90OA%2BT2pMPQf8HgU%2Fa2NQR7MXDPrrpAgsGxPLtjOnhNd8orUkSiGIKf9Y0trtdlbqS1nmLwe1VoHlKtf4qnpguubJiq0OlrMMLAuMEGOqUB6RplSBkLyqfSH7qyGpq9fZlP5XJxTf1iREcULitA6qPXuHV6vyOpuoepRpl11EJUKIV7dRA5ZmBaGPCf9tifHP5IQTcdMNOKWwK%2BUve8nt4UUyq2SL25W7qe%2BX9U3Wrdk6CcsdWU3wBUtjoNxUgNB%2BfuqpyWdObRZl3KoKQtubichU6r7IymN4tRsb1%2FQhdlRUah40i%2BCO1%2BPt4GaBVp%2FYAUGjx0&X-Amz-Signature=2bcad08e8576ae340ae83dcb07dfa55699be9a4c55d5fc44e0c9e0086196e69e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FW6NVLQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDB1CgefP%2Fog%2FmmZ1KGRqWfIjAMpNQRvqrpMRON3NcDcQIgECSe%2FhDj3cUFXetUa6hNZGEFB8IX4iJy%2FTezNYrz0NEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIbHUXX85IBcqYLyCrcA%2BlLd5SRaLnKibD2efFc9P3pYI61T6lFHmkgr3w2UbixuB8za2Lk1udBH1Kyc0waOQ3d0LYj7Ir3VMBhWpIu9q6vDWRFicowzYSihzVxt2D%2BvtscFDLXf86JVrqnia76HKNrS6IjLP4anJqCEbAJfs5HO6l%2BWyNjt1WWu58fldgDS%2FmrPQeWCYDNavxAvRNpIAxcLf%2BQDeIBdfyrkl0SiAbjj34uaXj%2F5w%2BZZyBByViAIHKHLNgugAF5lizlSyIeq0LqXcwCxvP%2BiYO5SYcBQe9DERDq%2B4cvN38%2FzA3yIBp3Vd7HSMBPe%2FmBKC89cklqJdsU5PQNad16M7wf2CgBk1QwUg54GizZ%2BlwpN4GY34PP2C6p89dW1ItrwYJs5qV02CATWA0T%2FUVBJHIWuiPFO%2B57lo9hB5N23Qu5V6pDJyZeiWdxjiSlCdupCFQbM8PW%2FUAo7CI3bUuwGx710jEt9MH7BK7LiPXDy7y3qtCYe1lJdxGV035yjuVMuY7lRNrey%2B9nFLc9alnLsBatGWyQjfkef7UIv90OA%2BT2pMPQf8HgU%2Fa2NQR7MXDPrrpAgsGxPLtjOnhNd8orUkSiGIKf9Y0trtdlbqS1nmLwe1VoHlKtf4qnpguubJiq0OlrMMLAuMEGOqUB6RplSBkLyqfSH7qyGpq9fZlP5XJxTf1iREcULitA6qPXuHV6vyOpuoepRpl11EJUKIV7dRA5ZmBaGPCf9tifHP5IQTcdMNOKWwK%2BUve8nt4UUyq2SL25W7qe%2BX9U3Wrdk6CcsdWU3wBUtjoNxUgNB%2BfuqpyWdObRZl3KoKQtubichU6r7IymN4tRsb1%2FQhdlRUah40i%2BCO1%2BPt4GaBVp%2FYAUGjx0&X-Amz-Signature=473f0ad1b9b09b3724ae6a1ec52100b1e705746a99f44c560af64058bde7217d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FW6NVLQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDB1CgefP%2Fog%2FmmZ1KGRqWfIjAMpNQRvqrpMRON3NcDcQIgECSe%2FhDj3cUFXetUa6hNZGEFB8IX4iJy%2FTezNYrz0NEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIbHUXX85IBcqYLyCrcA%2BlLd5SRaLnKibD2efFc9P3pYI61T6lFHmkgr3w2UbixuB8za2Lk1udBH1Kyc0waOQ3d0LYj7Ir3VMBhWpIu9q6vDWRFicowzYSihzVxt2D%2BvtscFDLXf86JVrqnia76HKNrS6IjLP4anJqCEbAJfs5HO6l%2BWyNjt1WWu58fldgDS%2FmrPQeWCYDNavxAvRNpIAxcLf%2BQDeIBdfyrkl0SiAbjj34uaXj%2F5w%2BZZyBByViAIHKHLNgugAF5lizlSyIeq0LqXcwCxvP%2BiYO5SYcBQe9DERDq%2B4cvN38%2FzA3yIBp3Vd7HSMBPe%2FmBKC89cklqJdsU5PQNad16M7wf2CgBk1QwUg54GizZ%2BlwpN4GY34PP2C6p89dW1ItrwYJs5qV02CATWA0T%2FUVBJHIWuiPFO%2B57lo9hB5N23Qu5V6pDJyZeiWdxjiSlCdupCFQbM8PW%2FUAo7CI3bUuwGx710jEt9MH7BK7LiPXDy7y3qtCYe1lJdxGV035yjuVMuY7lRNrey%2B9nFLc9alnLsBatGWyQjfkef7UIv90OA%2BT2pMPQf8HgU%2Fa2NQR7MXDPrrpAgsGxPLtjOnhNd8orUkSiGIKf9Y0trtdlbqS1nmLwe1VoHlKtf4qnpguubJiq0OlrMMLAuMEGOqUB6RplSBkLyqfSH7qyGpq9fZlP5XJxTf1iREcULitA6qPXuHV6vyOpuoepRpl11EJUKIV7dRA5ZmBaGPCf9tifHP5IQTcdMNOKWwK%2BUve8nt4UUyq2SL25W7qe%2BX9U3Wrdk6CcsdWU3wBUtjoNxUgNB%2BfuqpyWdObRZl3KoKQtubichU6r7IymN4tRsb1%2FQhdlRUah40i%2BCO1%2BPt4GaBVp%2FYAUGjx0&X-Amz-Signature=742a2a76848101ed595898bda28413329b848ccdc2e82edbc1570d7059085d62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FW6NVLQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDB1CgefP%2Fog%2FmmZ1KGRqWfIjAMpNQRvqrpMRON3NcDcQIgECSe%2FhDj3cUFXetUa6hNZGEFB8IX4iJy%2FTezNYrz0NEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIbHUXX85IBcqYLyCrcA%2BlLd5SRaLnKibD2efFc9P3pYI61T6lFHmkgr3w2UbixuB8za2Lk1udBH1Kyc0waOQ3d0LYj7Ir3VMBhWpIu9q6vDWRFicowzYSihzVxt2D%2BvtscFDLXf86JVrqnia76HKNrS6IjLP4anJqCEbAJfs5HO6l%2BWyNjt1WWu58fldgDS%2FmrPQeWCYDNavxAvRNpIAxcLf%2BQDeIBdfyrkl0SiAbjj34uaXj%2F5w%2BZZyBByViAIHKHLNgugAF5lizlSyIeq0LqXcwCxvP%2BiYO5SYcBQe9DERDq%2B4cvN38%2FzA3yIBp3Vd7HSMBPe%2FmBKC89cklqJdsU5PQNad16M7wf2CgBk1QwUg54GizZ%2BlwpN4GY34PP2C6p89dW1ItrwYJs5qV02CATWA0T%2FUVBJHIWuiPFO%2B57lo9hB5N23Qu5V6pDJyZeiWdxjiSlCdupCFQbM8PW%2FUAo7CI3bUuwGx710jEt9MH7BK7LiPXDy7y3qtCYe1lJdxGV035yjuVMuY7lRNrey%2B9nFLc9alnLsBatGWyQjfkef7UIv90OA%2BT2pMPQf8HgU%2Fa2NQR7MXDPrrpAgsGxPLtjOnhNd8orUkSiGIKf9Y0trtdlbqS1nmLwe1VoHlKtf4qnpguubJiq0OlrMMLAuMEGOqUB6RplSBkLyqfSH7qyGpq9fZlP5XJxTf1iREcULitA6qPXuHV6vyOpuoepRpl11EJUKIV7dRA5ZmBaGPCf9tifHP5IQTcdMNOKWwK%2BUve8nt4UUyq2SL25W7qe%2BX9U3Wrdk6CcsdWU3wBUtjoNxUgNB%2BfuqpyWdObRZl3KoKQtubichU6r7IymN4tRsb1%2FQhdlRUah40i%2BCO1%2BPt4GaBVp%2FYAUGjx0&X-Amz-Signature=875e9f07a44d1daac384090cf7224509f99bdf77c13f9fb1f9ac8529b73aece4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
