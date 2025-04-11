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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EK6VKPX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC5sYH%2FYQu8lT9RR06Zh1%2FfUUHkgtlDUcWw0M2lKWfJ%2FgIhAPJ63v7Y8tKVp4hqed4rAHAOOUhGC0djvIr6Y3QXXGDwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BtaMqBW3fL9aZ1yEq3AP9jMDmVkgwmhGTd70kRTI1eoyDGoBE5pwXWG40kY04Y1BLi2URtGHaV6TlIrnYNRiczY50jyq9Vz8a9vX%2BBdNyhNFEIAqhONpQ9m%2F%2B7cmUcBLsaJ6p6xo0TKkY3ejIRJMJPLW4jlUy1m3qqKrUOebomCijhjRprA0Lu4z8q2A2oBOZmzU0vLFVPPawMXhbj6wx7UBjD9bLCSGutcYsjcKRIothBEuVNPQQxmydUYZ%2BXFHLXmT60yRUKGi%2FvLuRDBibzN%2FZFFRJOFCI4SKl%2BM6DVTxxZntnV5xm3bGzB2SPLKMRNAZ7G1gVzwnwN4sZ3UmDEBzSa25JYzH1M%2FfUf7rohPc6qQNZGkCMdJlVeolLVlJrpMid1obe6cwQNvQkQojqUi3B2PwanGbDXY6hUfkDfq%2B9pRiShS1rfFrBm9JWcjb58TuY%2F2cqa99z6rFALbtrAaw5xmAzhKCqPGs3Pcx3g5T5UIF6ROo%2B%2FPCr67Eg50GU9YdPMr6btSQfvSOU%2Bl21xYBEm8%2B%2B79eUtVtHJv1K5AhvTWp18J%2F%2FDc%2B%2F%2Btwd2LawzYWwI1giuhP%2BDJGXH35DYaP%2BvI2nZJdCw7ToULv2mtwAIqZvo3GoWPK1NNDpfxM66tOx0Lcb2D23sTCImeO%2FBjqkAaF0jt%2FNQwg3i4dZWY6DSGd6NWSb1K9dVrxaBnuIcQcyTCmdkrLy2seVczGFf7qB%2FrX3zHNrd4fQ25jxetlVHDY8Xqpo6QAy%2FSOheOJfLxtOQf49tP7uGUzaBT0VyZYf51Rc4S8dzNMOBcKOOcnL%2B6n04oJlQzAJfxNkvwRaZbzG21zJnVr3zfdeYfo%2FgRCQKkTUVKqWa6pusz2vncEPhTaP6bbA&X-Amz-Signature=330b6806a3f78d0f5ba5d1e7b1c6cba5e4851d36d1838bd90f00f485f441dce2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EK6VKPX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC5sYH%2FYQu8lT9RR06Zh1%2FfUUHkgtlDUcWw0M2lKWfJ%2FgIhAPJ63v7Y8tKVp4hqed4rAHAOOUhGC0djvIr6Y3QXXGDwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BtaMqBW3fL9aZ1yEq3AP9jMDmVkgwmhGTd70kRTI1eoyDGoBE5pwXWG40kY04Y1BLi2URtGHaV6TlIrnYNRiczY50jyq9Vz8a9vX%2BBdNyhNFEIAqhONpQ9m%2F%2B7cmUcBLsaJ6p6xo0TKkY3ejIRJMJPLW4jlUy1m3qqKrUOebomCijhjRprA0Lu4z8q2A2oBOZmzU0vLFVPPawMXhbj6wx7UBjD9bLCSGutcYsjcKRIothBEuVNPQQxmydUYZ%2BXFHLXmT60yRUKGi%2FvLuRDBibzN%2FZFFRJOFCI4SKl%2BM6DVTxxZntnV5xm3bGzB2SPLKMRNAZ7G1gVzwnwN4sZ3UmDEBzSa25JYzH1M%2FfUf7rohPc6qQNZGkCMdJlVeolLVlJrpMid1obe6cwQNvQkQojqUi3B2PwanGbDXY6hUfkDfq%2B9pRiShS1rfFrBm9JWcjb58TuY%2F2cqa99z6rFALbtrAaw5xmAzhKCqPGs3Pcx3g5T5UIF6ROo%2B%2FPCr67Eg50GU9YdPMr6btSQfvSOU%2Bl21xYBEm8%2B%2B79eUtVtHJv1K5AhvTWp18J%2F%2FDc%2B%2F%2Btwd2LawzYWwI1giuhP%2BDJGXH35DYaP%2BvI2nZJdCw7ToULv2mtwAIqZvo3GoWPK1NNDpfxM66tOx0Lcb2D23sTCImeO%2FBjqkAaF0jt%2FNQwg3i4dZWY6DSGd6NWSb1K9dVrxaBnuIcQcyTCmdkrLy2seVczGFf7qB%2FrX3zHNrd4fQ25jxetlVHDY8Xqpo6QAy%2FSOheOJfLxtOQf49tP7uGUzaBT0VyZYf51Rc4S8dzNMOBcKOOcnL%2B6n04oJlQzAJfxNkvwRaZbzG21zJnVr3zfdeYfo%2FgRCQKkTUVKqWa6pusz2vncEPhTaP6bbA&X-Amz-Signature=096a77c7902a416a56b7749f62d884aa8334ff7e436d53ceb66957a085bff6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EK6VKPX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC5sYH%2FYQu8lT9RR06Zh1%2FfUUHkgtlDUcWw0M2lKWfJ%2FgIhAPJ63v7Y8tKVp4hqed4rAHAOOUhGC0djvIr6Y3QXXGDwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BtaMqBW3fL9aZ1yEq3AP9jMDmVkgwmhGTd70kRTI1eoyDGoBE5pwXWG40kY04Y1BLi2URtGHaV6TlIrnYNRiczY50jyq9Vz8a9vX%2BBdNyhNFEIAqhONpQ9m%2F%2B7cmUcBLsaJ6p6xo0TKkY3ejIRJMJPLW4jlUy1m3qqKrUOebomCijhjRprA0Lu4z8q2A2oBOZmzU0vLFVPPawMXhbj6wx7UBjD9bLCSGutcYsjcKRIothBEuVNPQQxmydUYZ%2BXFHLXmT60yRUKGi%2FvLuRDBibzN%2FZFFRJOFCI4SKl%2BM6DVTxxZntnV5xm3bGzB2SPLKMRNAZ7G1gVzwnwN4sZ3UmDEBzSa25JYzH1M%2FfUf7rohPc6qQNZGkCMdJlVeolLVlJrpMid1obe6cwQNvQkQojqUi3B2PwanGbDXY6hUfkDfq%2B9pRiShS1rfFrBm9JWcjb58TuY%2F2cqa99z6rFALbtrAaw5xmAzhKCqPGs3Pcx3g5T5UIF6ROo%2B%2FPCr67Eg50GU9YdPMr6btSQfvSOU%2Bl21xYBEm8%2B%2B79eUtVtHJv1K5AhvTWp18J%2F%2FDc%2B%2F%2Btwd2LawzYWwI1giuhP%2BDJGXH35DYaP%2BvI2nZJdCw7ToULv2mtwAIqZvo3GoWPK1NNDpfxM66tOx0Lcb2D23sTCImeO%2FBjqkAaF0jt%2FNQwg3i4dZWY6DSGd6NWSb1K9dVrxaBnuIcQcyTCmdkrLy2seVczGFf7qB%2FrX3zHNrd4fQ25jxetlVHDY8Xqpo6QAy%2FSOheOJfLxtOQf49tP7uGUzaBT0VyZYf51Rc4S8dzNMOBcKOOcnL%2B6n04oJlQzAJfxNkvwRaZbzG21zJnVr3zfdeYfo%2FgRCQKkTUVKqWa6pusz2vncEPhTaP6bbA&X-Amz-Signature=0edc87bb946a349399062fb6deac48dca4a899cb31dbfe4432e26c1c8d8db8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EK6VKPX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC5sYH%2FYQu8lT9RR06Zh1%2FfUUHkgtlDUcWw0M2lKWfJ%2FgIhAPJ63v7Y8tKVp4hqed4rAHAOOUhGC0djvIr6Y3QXXGDwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BtaMqBW3fL9aZ1yEq3AP9jMDmVkgwmhGTd70kRTI1eoyDGoBE5pwXWG40kY04Y1BLi2URtGHaV6TlIrnYNRiczY50jyq9Vz8a9vX%2BBdNyhNFEIAqhONpQ9m%2F%2B7cmUcBLsaJ6p6xo0TKkY3ejIRJMJPLW4jlUy1m3qqKrUOebomCijhjRprA0Lu4z8q2A2oBOZmzU0vLFVPPawMXhbj6wx7UBjD9bLCSGutcYsjcKRIothBEuVNPQQxmydUYZ%2BXFHLXmT60yRUKGi%2FvLuRDBibzN%2FZFFRJOFCI4SKl%2BM6DVTxxZntnV5xm3bGzB2SPLKMRNAZ7G1gVzwnwN4sZ3UmDEBzSa25JYzH1M%2FfUf7rohPc6qQNZGkCMdJlVeolLVlJrpMid1obe6cwQNvQkQojqUi3B2PwanGbDXY6hUfkDfq%2B9pRiShS1rfFrBm9JWcjb58TuY%2F2cqa99z6rFALbtrAaw5xmAzhKCqPGs3Pcx3g5T5UIF6ROo%2B%2FPCr67Eg50GU9YdPMr6btSQfvSOU%2Bl21xYBEm8%2B%2B79eUtVtHJv1K5AhvTWp18J%2F%2FDc%2B%2F%2Btwd2LawzYWwI1giuhP%2BDJGXH35DYaP%2BvI2nZJdCw7ToULv2mtwAIqZvo3GoWPK1NNDpfxM66tOx0Lcb2D23sTCImeO%2FBjqkAaF0jt%2FNQwg3i4dZWY6DSGd6NWSb1K9dVrxaBnuIcQcyTCmdkrLy2seVczGFf7qB%2FrX3zHNrd4fQ25jxetlVHDY8Xqpo6QAy%2FSOheOJfLxtOQf49tP7uGUzaBT0VyZYf51Rc4S8dzNMOBcKOOcnL%2B6n04oJlQzAJfxNkvwRaZbzG21zJnVr3zfdeYfo%2FgRCQKkTUVKqWa6pusz2vncEPhTaP6bbA&X-Amz-Signature=be3b8a9dbc0fc5e624cbd814445c37ea6b711dc4b23a316004f9203bdde2d6d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EK6VKPX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC5sYH%2FYQu8lT9RR06Zh1%2FfUUHkgtlDUcWw0M2lKWfJ%2FgIhAPJ63v7Y8tKVp4hqed4rAHAOOUhGC0djvIr6Y3QXXGDwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BtaMqBW3fL9aZ1yEq3AP9jMDmVkgwmhGTd70kRTI1eoyDGoBE5pwXWG40kY04Y1BLi2URtGHaV6TlIrnYNRiczY50jyq9Vz8a9vX%2BBdNyhNFEIAqhONpQ9m%2F%2B7cmUcBLsaJ6p6xo0TKkY3ejIRJMJPLW4jlUy1m3qqKrUOebomCijhjRprA0Lu4z8q2A2oBOZmzU0vLFVPPawMXhbj6wx7UBjD9bLCSGutcYsjcKRIothBEuVNPQQxmydUYZ%2BXFHLXmT60yRUKGi%2FvLuRDBibzN%2FZFFRJOFCI4SKl%2BM6DVTxxZntnV5xm3bGzB2SPLKMRNAZ7G1gVzwnwN4sZ3UmDEBzSa25JYzH1M%2FfUf7rohPc6qQNZGkCMdJlVeolLVlJrpMid1obe6cwQNvQkQojqUi3B2PwanGbDXY6hUfkDfq%2B9pRiShS1rfFrBm9JWcjb58TuY%2F2cqa99z6rFALbtrAaw5xmAzhKCqPGs3Pcx3g5T5UIF6ROo%2B%2FPCr67Eg50GU9YdPMr6btSQfvSOU%2Bl21xYBEm8%2B%2B79eUtVtHJv1K5AhvTWp18J%2F%2FDc%2B%2F%2Btwd2LawzYWwI1giuhP%2BDJGXH35DYaP%2BvI2nZJdCw7ToULv2mtwAIqZvo3GoWPK1NNDpfxM66tOx0Lcb2D23sTCImeO%2FBjqkAaF0jt%2FNQwg3i4dZWY6DSGd6NWSb1K9dVrxaBnuIcQcyTCmdkrLy2seVczGFf7qB%2FrX3zHNrd4fQ25jxetlVHDY8Xqpo6QAy%2FSOheOJfLxtOQf49tP7uGUzaBT0VyZYf51Rc4S8dzNMOBcKOOcnL%2B6n04oJlQzAJfxNkvwRaZbzG21zJnVr3zfdeYfo%2FgRCQKkTUVKqWa6pusz2vncEPhTaP6bbA&X-Amz-Signature=a1c19c86907311d73bbc873ff0f1421bbd4cbbe7803f790fc3d94d6ee4318d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EK6VKPX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC5sYH%2FYQu8lT9RR06Zh1%2FfUUHkgtlDUcWw0M2lKWfJ%2FgIhAPJ63v7Y8tKVp4hqed4rAHAOOUhGC0djvIr6Y3QXXGDwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BtaMqBW3fL9aZ1yEq3AP9jMDmVkgwmhGTd70kRTI1eoyDGoBE5pwXWG40kY04Y1BLi2URtGHaV6TlIrnYNRiczY50jyq9Vz8a9vX%2BBdNyhNFEIAqhONpQ9m%2F%2B7cmUcBLsaJ6p6xo0TKkY3ejIRJMJPLW4jlUy1m3qqKrUOebomCijhjRprA0Lu4z8q2A2oBOZmzU0vLFVPPawMXhbj6wx7UBjD9bLCSGutcYsjcKRIothBEuVNPQQxmydUYZ%2BXFHLXmT60yRUKGi%2FvLuRDBibzN%2FZFFRJOFCI4SKl%2BM6DVTxxZntnV5xm3bGzB2SPLKMRNAZ7G1gVzwnwN4sZ3UmDEBzSa25JYzH1M%2FfUf7rohPc6qQNZGkCMdJlVeolLVlJrpMid1obe6cwQNvQkQojqUi3B2PwanGbDXY6hUfkDfq%2B9pRiShS1rfFrBm9JWcjb58TuY%2F2cqa99z6rFALbtrAaw5xmAzhKCqPGs3Pcx3g5T5UIF6ROo%2B%2FPCr67Eg50GU9YdPMr6btSQfvSOU%2Bl21xYBEm8%2B%2B79eUtVtHJv1K5AhvTWp18J%2F%2FDc%2B%2F%2Btwd2LawzYWwI1giuhP%2BDJGXH35DYaP%2BvI2nZJdCw7ToULv2mtwAIqZvo3GoWPK1NNDpfxM66tOx0Lcb2D23sTCImeO%2FBjqkAaF0jt%2FNQwg3i4dZWY6DSGd6NWSb1K9dVrxaBnuIcQcyTCmdkrLy2seVczGFf7qB%2FrX3zHNrd4fQ25jxetlVHDY8Xqpo6QAy%2FSOheOJfLxtOQf49tP7uGUzaBT0VyZYf51Rc4S8dzNMOBcKOOcnL%2B6n04oJlQzAJfxNkvwRaZbzG21zJnVr3zfdeYfo%2FgRCQKkTUVKqWa6pusz2vncEPhTaP6bbA&X-Amz-Signature=4367be7a5a17e644a938028587424c7e5f3c78d45180abfd7397beb93c2830ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EK6VKPX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC5sYH%2FYQu8lT9RR06Zh1%2FfUUHkgtlDUcWw0M2lKWfJ%2FgIhAPJ63v7Y8tKVp4hqed4rAHAOOUhGC0djvIr6Y3QXXGDwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BtaMqBW3fL9aZ1yEq3AP9jMDmVkgwmhGTd70kRTI1eoyDGoBE5pwXWG40kY04Y1BLi2URtGHaV6TlIrnYNRiczY50jyq9Vz8a9vX%2BBdNyhNFEIAqhONpQ9m%2F%2B7cmUcBLsaJ6p6xo0TKkY3ejIRJMJPLW4jlUy1m3qqKrUOebomCijhjRprA0Lu4z8q2A2oBOZmzU0vLFVPPawMXhbj6wx7UBjD9bLCSGutcYsjcKRIothBEuVNPQQxmydUYZ%2BXFHLXmT60yRUKGi%2FvLuRDBibzN%2FZFFRJOFCI4SKl%2BM6DVTxxZntnV5xm3bGzB2SPLKMRNAZ7G1gVzwnwN4sZ3UmDEBzSa25JYzH1M%2FfUf7rohPc6qQNZGkCMdJlVeolLVlJrpMid1obe6cwQNvQkQojqUi3B2PwanGbDXY6hUfkDfq%2B9pRiShS1rfFrBm9JWcjb58TuY%2F2cqa99z6rFALbtrAaw5xmAzhKCqPGs3Pcx3g5T5UIF6ROo%2B%2FPCr67Eg50GU9YdPMr6btSQfvSOU%2Bl21xYBEm8%2B%2B79eUtVtHJv1K5AhvTWp18J%2F%2FDc%2B%2F%2Btwd2LawzYWwI1giuhP%2BDJGXH35DYaP%2BvI2nZJdCw7ToULv2mtwAIqZvo3GoWPK1NNDpfxM66tOx0Lcb2D23sTCImeO%2FBjqkAaF0jt%2FNQwg3i4dZWY6DSGd6NWSb1K9dVrxaBnuIcQcyTCmdkrLy2seVczGFf7qB%2FrX3zHNrd4fQ25jxetlVHDY8Xqpo6QAy%2FSOheOJfLxtOQf49tP7uGUzaBT0VyZYf51Rc4S8dzNMOBcKOOcnL%2B6n04oJlQzAJfxNkvwRaZbzG21zJnVr3zfdeYfo%2FgRCQKkTUVKqWa6pusz2vncEPhTaP6bbA&X-Amz-Signature=dcdb4819d09365fa9cede16c34a44532bd0dafd23c3671e528672165eec265f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EK6VKPX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC5sYH%2FYQu8lT9RR06Zh1%2FfUUHkgtlDUcWw0M2lKWfJ%2FgIhAPJ63v7Y8tKVp4hqed4rAHAOOUhGC0djvIr6Y3QXXGDwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BtaMqBW3fL9aZ1yEq3AP9jMDmVkgwmhGTd70kRTI1eoyDGoBE5pwXWG40kY04Y1BLi2URtGHaV6TlIrnYNRiczY50jyq9Vz8a9vX%2BBdNyhNFEIAqhONpQ9m%2F%2B7cmUcBLsaJ6p6xo0TKkY3ejIRJMJPLW4jlUy1m3qqKrUOebomCijhjRprA0Lu4z8q2A2oBOZmzU0vLFVPPawMXhbj6wx7UBjD9bLCSGutcYsjcKRIothBEuVNPQQxmydUYZ%2BXFHLXmT60yRUKGi%2FvLuRDBibzN%2FZFFRJOFCI4SKl%2BM6DVTxxZntnV5xm3bGzB2SPLKMRNAZ7G1gVzwnwN4sZ3UmDEBzSa25JYzH1M%2FfUf7rohPc6qQNZGkCMdJlVeolLVlJrpMid1obe6cwQNvQkQojqUi3B2PwanGbDXY6hUfkDfq%2B9pRiShS1rfFrBm9JWcjb58TuY%2F2cqa99z6rFALbtrAaw5xmAzhKCqPGs3Pcx3g5T5UIF6ROo%2B%2FPCr67Eg50GU9YdPMr6btSQfvSOU%2Bl21xYBEm8%2B%2B79eUtVtHJv1K5AhvTWp18J%2F%2FDc%2B%2F%2Btwd2LawzYWwI1giuhP%2BDJGXH35DYaP%2BvI2nZJdCw7ToULv2mtwAIqZvo3GoWPK1NNDpfxM66tOx0Lcb2D23sTCImeO%2FBjqkAaF0jt%2FNQwg3i4dZWY6DSGd6NWSb1K9dVrxaBnuIcQcyTCmdkrLy2seVczGFf7qB%2FrX3zHNrd4fQ25jxetlVHDY8Xqpo6QAy%2FSOheOJfLxtOQf49tP7uGUzaBT0VyZYf51Rc4S8dzNMOBcKOOcnL%2B6n04oJlQzAJfxNkvwRaZbzG21zJnVr3zfdeYfo%2FgRCQKkTUVKqWa6pusz2vncEPhTaP6bbA&X-Amz-Signature=fc6eacaeb5e925213d8f689dd2a4fdfe2fd91ff24b355d6f8b6829de9268fe65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
