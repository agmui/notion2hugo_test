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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMTNVMS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDo0n3%2BIZtPE0NiJ1OgxsFOs%2FBGjlDY%2Fgw%2FPUGB3jzyFgIgHIxHaqaea8yDCsTfa2SZFgmSPK%2BEBAzehdDDldr5FEMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq5aim7UYTx34SRlSrcAypuMfRumxusoqiNl0G15gigwOmVdgWB2rVjGKzWQ2kpZO5EwYdiYPz%2FmwARFgwcWBzR9n5cYStgaZYXthz8jBabAxmox2KAU5b4Juem3pFf34yzwLN0Dk93VY9eGykeNFvstPbhmZn2uYgU0KHGLb0aeXgUWCUcrpxc0ot%2BJ6kZvh3JSB9lIpqjVx0ierrde%2BH9sJ8Rilllub%2BdS4FwSUmpAkpwlxbYbgO2A2QG44aJVFJVS%2Beu6pmEpnenXREWDA7SVXJ7FOF7AfE7DRSuNYuOyk83bt0ufbFNbjmFdq4bNk4AM0sOEFLehkpC%2BneNJWceLM9Ui8A9cEJ2CZtliIcutstd%2FzzhDmKjqWfxZ3vgaln8h7yj4zmq11zwRNAvm9IE6xNfbYUuyl6oOhP7FP4rLIrSNsOun1xkS5e2NYfyObfcRGxomeATwFv8Hx1QHQYemVRK3qB01ry8HowrcA4UkfU6JmLWjpIEgAeaagW1elsp1E6E%2BJqIvhK8hVAzdXo5aA4iRj45ufdW%2BlKoz%2F6qbxnIigQaxL%2Fm6kOCCxPiNje85W8eO8YLqRJ3XlONDTs2QqZpxOlD7nuoeYaw5uPEBkEG7KoM7nJ4yKNLH%2FHA7%2FIM7qLh%2FELIgIvYMJXt0MQGOqUB5ZrkKbn3SzA0OXr9ZNQ2GYaMzzbNOlxTuNUeE6lU2R6%2BvlIvXvST25v1PaNfeEWw6AaLYliFSvsGy741iXNBio5APtYBOwfB5S4H1PCcAOGjBs7Cn%2F7XdcLzIN4B0ZmhwQVuy7DsYGdTf9aHeUvIPAHTDU2zLzEekcc%2FxixPc6fwrJxG7mTxrpnnsPDu5%2Bmb6yMJxYr7ffiyA%2Frpc1yDHWxyRWbV&X-Amz-Signature=32c73db000b1ab2a4c053c6988973844108a2e6b102500c40c2efb7ab72f14d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMTNVMS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDo0n3%2BIZtPE0NiJ1OgxsFOs%2FBGjlDY%2Fgw%2FPUGB3jzyFgIgHIxHaqaea8yDCsTfa2SZFgmSPK%2BEBAzehdDDldr5FEMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq5aim7UYTx34SRlSrcAypuMfRumxusoqiNl0G15gigwOmVdgWB2rVjGKzWQ2kpZO5EwYdiYPz%2FmwARFgwcWBzR9n5cYStgaZYXthz8jBabAxmox2KAU5b4Juem3pFf34yzwLN0Dk93VY9eGykeNFvstPbhmZn2uYgU0KHGLb0aeXgUWCUcrpxc0ot%2BJ6kZvh3JSB9lIpqjVx0ierrde%2BH9sJ8Rilllub%2BdS4FwSUmpAkpwlxbYbgO2A2QG44aJVFJVS%2Beu6pmEpnenXREWDA7SVXJ7FOF7AfE7DRSuNYuOyk83bt0ufbFNbjmFdq4bNk4AM0sOEFLehkpC%2BneNJWceLM9Ui8A9cEJ2CZtliIcutstd%2FzzhDmKjqWfxZ3vgaln8h7yj4zmq11zwRNAvm9IE6xNfbYUuyl6oOhP7FP4rLIrSNsOun1xkS5e2NYfyObfcRGxomeATwFv8Hx1QHQYemVRK3qB01ry8HowrcA4UkfU6JmLWjpIEgAeaagW1elsp1E6E%2BJqIvhK8hVAzdXo5aA4iRj45ufdW%2BlKoz%2F6qbxnIigQaxL%2Fm6kOCCxPiNje85W8eO8YLqRJ3XlONDTs2QqZpxOlD7nuoeYaw5uPEBkEG7KoM7nJ4yKNLH%2FHA7%2FIM7qLh%2FELIgIvYMJXt0MQGOqUB5ZrkKbn3SzA0OXr9ZNQ2GYaMzzbNOlxTuNUeE6lU2R6%2BvlIvXvST25v1PaNfeEWw6AaLYliFSvsGy741iXNBio5APtYBOwfB5S4H1PCcAOGjBs7Cn%2F7XdcLzIN4B0ZmhwQVuy7DsYGdTf9aHeUvIPAHTDU2zLzEekcc%2FxixPc6fwrJxG7mTxrpnnsPDu5%2Bmb6yMJxYr7ffiyA%2Frpc1yDHWxyRWbV&X-Amz-Signature=60b6f2cc5e5194205aaee8dcf5b82c9fbc085de39a9c7190acd667294d16825f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMTNVMS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDo0n3%2BIZtPE0NiJ1OgxsFOs%2FBGjlDY%2Fgw%2FPUGB3jzyFgIgHIxHaqaea8yDCsTfa2SZFgmSPK%2BEBAzehdDDldr5FEMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq5aim7UYTx34SRlSrcAypuMfRumxusoqiNl0G15gigwOmVdgWB2rVjGKzWQ2kpZO5EwYdiYPz%2FmwARFgwcWBzR9n5cYStgaZYXthz8jBabAxmox2KAU5b4Juem3pFf34yzwLN0Dk93VY9eGykeNFvstPbhmZn2uYgU0KHGLb0aeXgUWCUcrpxc0ot%2BJ6kZvh3JSB9lIpqjVx0ierrde%2BH9sJ8Rilllub%2BdS4FwSUmpAkpwlxbYbgO2A2QG44aJVFJVS%2Beu6pmEpnenXREWDA7SVXJ7FOF7AfE7DRSuNYuOyk83bt0ufbFNbjmFdq4bNk4AM0sOEFLehkpC%2BneNJWceLM9Ui8A9cEJ2CZtliIcutstd%2FzzhDmKjqWfxZ3vgaln8h7yj4zmq11zwRNAvm9IE6xNfbYUuyl6oOhP7FP4rLIrSNsOun1xkS5e2NYfyObfcRGxomeATwFv8Hx1QHQYemVRK3qB01ry8HowrcA4UkfU6JmLWjpIEgAeaagW1elsp1E6E%2BJqIvhK8hVAzdXo5aA4iRj45ufdW%2BlKoz%2F6qbxnIigQaxL%2Fm6kOCCxPiNje85W8eO8YLqRJ3XlONDTs2QqZpxOlD7nuoeYaw5uPEBkEG7KoM7nJ4yKNLH%2FHA7%2FIM7qLh%2FELIgIvYMJXt0MQGOqUB5ZrkKbn3SzA0OXr9ZNQ2GYaMzzbNOlxTuNUeE6lU2R6%2BvlIvXvST25v1PaNfeEWw6AaLYliFSvsGy741iXNBio5APtYBOwfB5S4H1PCcAOGjBs7Cn%2F7XdcLzIN4B0ZmhwQVuy7DsYGdTf9aHeUvIPAHTDU2zLzEekcc%2FxixPc6fwrJxG7mTxrpnnsPDu5%2Bmb6yMJxYr7ffiyA%2Frpc1yDHWxyRWbV&X-Amz-Signature=b3226b07ce3610ae5ffaa919ac55b58c72ab86a38c05ebc58287d5681cac3aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMTNVMS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDo0n3%2BIZtPE0NiJ1OgxsFOs%2FBGjlDY%2Fgw%2FPUGB3jzyFgIgHIxHaqaea8yDCsTfa2SZFgmSPK%2BEBAzehdDDldr5FEMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq5aim7UYTx34SRlSrcAypuMfRumxusoqiNl0G15gigwOmVdgWB2rVjGKzWQ2kpZO5EwYdiYPz%2FmwARFgwcWBzR9n5cYStgaZYXthz8jBabAxmox2KAU5b4Juem3pFf34yzwLN0Dk93VY9eGykeNFvstPbhmZn2uYgU0KHGLb0aeXgUWCUcrpxc0ot%2BJ6kZvh3JSB9lIpqjVx0ierrde%2BH9sJ8Rilllub%2BdS4FwSUmpAkpwlxbYbgO2A2QG44aJVFJVS%2Beu6pmEpnenXREWDA7SVXJ7FOF7AfE7DRSuNYuOyk83bt0ufbFNbjmFdq4bNk4AM0sOEFLehkpC%2BneNJWceLM9Ui8A9cEJ2CZtliIcutstd%2FzzhDmKjqWfxZ3vgaln8h7yj4zmq11zwRNAvm9IE6xNfbYUuyl6oOhP7FP4rLIrSNsOun1xkS5e2NYfyObfcRGxomeATwFv8Hx1QHQYemVRK3qB01ry8HowrcA4UkfU6JmLWjpIEgAeaagW1elsp1E6E%2BJqIvhK8hVAzdXo5aA4iRj45ufdW%2BlKoz%2F6qbxnIigQaxL%2Fm6kOCCxPiNje85W8eO8YLqRJ3XlONDTs2QqZpxOlD7nuoeYaw5uPEBkEG7KoM7nJ4yKNLH%2FHA7%2FIM7qLh%2FELIgIvYMJXt0MQGOqUB5ZrkKbn3SzA0OXr9ZNQ2GYaMzzbNOlxTuNUeE6lU2R6%2BvlIvXvST25v1PaNfeEWw6AaLYliFSvsGy741iXNBio5APtYBOwfB5S4H1PCcAOGjBs7Cn%2F7XdcLzIN4B0ZmhwQVuy7DsYGdTf9aHeUvIPAHTDU2zLzEekcc%2FxixPc6fwrJxG7mTxrpnnsPDu5%2Bmb6yMJxYr7ffiyA%2Frpc1yDHWxyRWbV&X-Amz-Signature=c99769a5e1356c12fc8760283950f673b334c837241c16f1ebedaf34115e540b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMTNVMS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDo0n3%2BIZtPE0NiJ1OgxsFOs%2FBGjlDY%2Fgw%2FPUGB3jzyFgIgHIxHaqaea8yDCsTfa2SZFgmSPK%2BEBAzehdDDldr5FEMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq5aim7UYTx34SRlSrcAypuMfRumxusoqiNl0G15gigwOmVdgWB2rVjGKzWQ2kpZO5EwYdiYPz%2FmwARFgwcWBzR9n5cYStgaZYXthz8jBabAxmox2KAU5b4Juem3pFf34yzwLN0Dk93VY9eGykeNFvstPbhmZn2uYgU0KHGLb0aeXgUWCUcrpxc0ot%2BJ6kZvh3JSB9lIpqjVx0ierrde%2BH9sJ8Rilllub%2BdS4FwSUmpAkpwlxbYbgO2A2QG44aJVFJVS%2Beu6pmEpnenXREWDA7SVXJ7FOF7AfE7DRSuNYuOyk83bt0ufbFNbjmFdq4bNk4AM0sOEFLehkpC%2BneNJWceLM9Ui8A9cEJ2CZtliIcutstd%2FzzhDmKjqWfxZ3vgaln8h7yj4zmq11zwRNAvm9IE6xNfbYUuyl6oOhP7FP4rLIrSNsOun1xkS5e2NYfyObfcRGxomeATwFv8Hx1QHQYemVRK3qB01ry8HowrcA4UkfU6JmLWjpIEgAeaagW1elsp1E6E%2BJqIvhK8hVAzdXo5aA4iRj45ufdW%2BlKoz%2F6qbxnIigQaxL%2Fm6kOCCxPiNje85W8eO8YLqRJ3XlONDTs2QqZpxOlD7nuoeYaw5uPEBkEG7KoM7nJ4yKNLH%2FHA7%2FIM7qLh%2FELIgIvYMJXt0MQGOqUB5ZrkKbn3SzA0OXr9ZNQ2GYaMzzbNOlxTuNUeE6lU2R6%2BvlIvXvST25v1PaNfeEWw6AaLYliFSvsGy741iXNBio5APtYBOwfB5S4H1PCcAOGjBs7Cn%2F7XdcLzIN4B0ZmhwQVuy7DsYGdTf9aHeUvIPAHTDU2zLzEekcc%2FxixPc6fwrJxG7mTxrpnnsPDu5%2Bmb6yMJxYr7ffiyA%2Frpc1yDHWxyRWbV&X-Amz-Signature=b9470ea01fb8cff0da501a6618829017352156d9a2f5147b44d6057fd7a70458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMTNVMS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDo0n3%2BIZtPE0NiJ1OgxsFOs%2FBGjlDY%2Fgw%2FPUGB3jzyFgIgHIxHaqaea8yDCsTfa2SZFgmSPK%2BEBAzehdDDldr5FEMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq5aim7UYTx34SRlSrcAypuMfRumxusoqiNl0G15gigwOmVdgWB2rVjGKzWQ2kpZO5EwYdiYPz%2FmwARFgwcWBzR9n5cYStgaZYXthz8jBabAxmox2KAU5b4Juem3pFf34yzwLN0Dk93VY9eGykeNFvstPbhmZn2uYgU0KHGLb0aeXgUWCUcrpxc0ot%2BJ6kZvh3JSB9lIpqjVx0ierrde%2BH9sJ8Rilllub%2BdS4FwSUmpAkpwlxbYbgO2A2QG44aJVFJVS%2Beu6pmEpnenXREWDA7SVXJ7FOF7AfE7DRSuNYuOyk83bt0ufbFNbjmFdq4bNk4AM0sOEFLehkpC%2BneNJWceLM9Ui8A9cEJ2CZtliIcutstd%2FzzhDmKjqWfxZ3vgaln8h7yj4zmq11zwRNAvm9IE6xNfbYUuyl6oOhP7FP4rLIrSNsOun1xkS5e2NYfyObfcRGxomeATwFv8Hx1QHQYemVRK3qB01ry8HowrcA4UkfU6JmLWjpIEgAeaagW1elsp1E6E%2BJqIvhK8hVAzdXo5aA4iRj45ufdW%2BlKoz%2F6qbxnIigQaxL%2Fm6kOCCxPiNje85W8eO8YLqRJ3XlONDTs2QqZpxOlD7nuoeYaw5uPEBkEG7KoM7nJ4yKNLH%2FHA7%2FIM7qLh%2FELIgIvYMJXt0MQGOqUB5ZrkKbn3SzA0OXr9ZNQ2GYaMzzbNOlxTuNUeE6lU2R6%2BvlIvXvST25v1PaNfeEWw6AaLYliFSvsGy741iXNBio5APtYBOwfB5S4H1PCcAOGjBs7Cn%2F7XdcLzIN4B0ZmhwQVuy7DsYGdTf9aHeUvIPAHTDU2zLzEekcc%2FxixPc6fwrJxG7mTxrpnnsPDu5%2Bmb6yMJxYr7ffiyA%2Frpc1yDHWxyRWbV&X-Amz-Signature=04f889c4947b47ed2d18888251717359470c90f1ace2d960e1a1cc3996e37d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMTNVMS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDo0n3%2BIZtPE0NiJ1OgxsFOs%2FBGjlDY%2Fgw%2FPUGB3jzyFgIgHIxHaqaea8yDCsTfa2SZFgmSPK%2BEBAzehdDDldr5FEMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq5aim7UYTx34SRlSrcAypuMfRumxusoqiNl0G15gigwOmVdgWB2rVjGKzWQ2kpZO5EwYdiYPz%2FmwARFgwcWBzR9n5cYStgaZYXthz8jBabAxmox2KAU5b4Juem3pFf34yzwLN0Dk93VY9eGykeNFvstPbhmZn2uYgU0KHGLb0aeXgUWCUcrpxc0ot%2BJ6kZvh3JSB9lIpqjVx0ierrde%2BH9sJ8Rilllub%2BdS4FwSUmpAkpwlxbYbgO2A2QG44aJVFJVS%2Beu6pmEpnenXREWDA7SVXJ7FOF7AfE7DRSuNYuOyk83bt0ufbFNbjmFdq4bNk4AM0sOEFLehkpC%2BneNJWceLM9Ui8A9cEJ2CZtliIcutstd%2FzzhDmKjqWfxZ3vgaln8h7yj4zmq11zwRNAvm9IE6xNfbYUuyl6oOhP7FP4rLIrSNsOun1xkS5e2NYfyObfcRGxomeATwFv8Hx1QHQYemVRK3qB01ry8HowrcA4UkfU6JmLWjpIEgAeaagW1elsp1E6E%2BJqIvhK8hVAzdXo5aA4iRj45ufdW%2BlKoz%2F6qbxnIigQaxL%2Fm6kOCCxPiNje85W8eO8YLqRJ3XlONDTs2QqZpxOlD7nuoeYaw5uPEBkEG7KoM7nJ4yKNLH%2FHA7%2FIM7qLh%2FELIgIvYMJXt0MQGOqUB5ZrkKbn3SzA0OXr9ZNQ2GYaMzzbNOlxTuNUeE6lU2R6%2BvlIvXvST25v1PaNfeEWw6AaLYliFSvsGy741iXNBio5APtYBOwfB5S4H1PCcAOGjBs7Cn%2F7XdcLzIN4B0ZmhwQVuy7DsYGdTf9aHeUvIPAHTDU2zLzEekcc%2FxixPc6fwrJxG7mTxrpnnsPDu5%2Bmb6yMJxYr7ffiyA%2Frpc1yDHWxyRWbV&X-Amz-Signature=35d6b15c9635d6d5fb9373b9e2e067f0fe8b2e4c77aedeacb0ff26863d2f388b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMTNVMS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDo0n3%2BIZtPE0NiJ1OgxsFOs%2FBGjlDY%2Fgw%2FPUGB3jzyFgIgHIxHaqaea8yDCsTfa2SZFgmSPK%2BEBAzehdDDldr5FEMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq5aim7UYTx34SRlSrcAypuMfRumxusoqiNl0G15gigwOmVdgWB2rVjGKzWQ2kpZO5EwYdiYPz%2FmwARFgwcWBzR9n5cYStgaZYXthz8jBabAxmox2KAU5b4Juem3pFf34yzwLN0Dk93VY9eGykeNFvstPbhmZn2uYgU0KHGLb0aeXgUWCUcrpxc0ot%2BJ6kZvh3JSB9lIpqjVx0ierrde%2BH9sJ8Rilllub%2BdS4FwSUmpAkpwlxbYbgO2A2QG44aJVFJVS%2Beu6pmEpnenXREWDA7SVXJ7FOF7AfE7DRSuNYuOyk83bt0ufbFNbjmFdq4bNk4AM0sOEFLehkpC%2BneNJWceLM9Ui8A9cEJ2CZtliIcutstd%2FzzhDmKjqWfxZ3vgaln8h7yj4zmq11zwRNAvm9IE6xNfbYUuyl6oOhP7FP4rLIrSNsOun1xkS5e2NYfyObfcRGxomeATwFv8Hx1QHQYemVRK3qB01ry8HowrcA4UkfU6JmLWjpIEgAeaagW1elsp1E6E%2BJqIvhK8hVAzdXo5aA4iRj45ufdW%2BlKoz%2F6qbxnIigQaxL%2Fm6kOCCxPiNje85W8eO8YLqRJ3XlONDTs2QqZpxOlD7nuoeYaw5uPEBkEG7KoM7nJ4yKNLH%2FHA7%2FIM7qLh%2FELIgIvYMJXt0MQGOqUB5ZrkKbn3SzA0OXr9ZNQ2GYaMzzbNOlxTuNUeE6lU2R6%2BvlIvXvST25v1PaNfeEWw6AaLYliFSvsGy741iXNBio5APtYBOwfB5S4H1PCcAOGjBs7Cn%2F7XdcLzIN4B0ZmhwQVuy7DsYGdTf9aHeUvIPAHTDU2zLzEekcc%2FxixPc6fwrJxG7mTxrpnnsPDu5%2Bmb6yMJxYr7ffiyA%2Frpc1yDHWxyRWbV&X-Amz-Signature=e73addbfdef2dd28fc3bfecb3fabb55da0d59e6ef1f2b678ec2707abdb1593ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
