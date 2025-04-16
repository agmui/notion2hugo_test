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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654R7JZIB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD5Ru2y4x2uDEVHoS%2FZTWS3UGfIevkh3hh8RJUW%2FxLrAiAFKDth3KFIj0gAnn9M1MPSi52Ad9zJn4sRXPgBPTCEVCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMPjTpcuu1MFMJTImQKtwDPbJqb3gkWQtZkvxe%2FXyoVPnJqdX6BpO10uN%2BKpUHzw4Om2B%2FKNFAADeadoy2j5qkJxa9jb8Ok8YnTpi7WEpO8VEqHJoVDoFKNwr2N0D%2F637vZ%2FLo8%2FP%2BVdRRvbz2%2F3CohxeGjA4FRjsyJ4he3Ksn5mDGtIAT1u0ObLu%2FkUtXEDX%2BI%2Brmcs3vpSAEKEjZcM5G5aFtuZo09j7601qkbEQs55zS9sZv8AbKGcp2J0GiG5O4nAqye%2FHSUfPwc%2BFpvJazqUvd%2BxzYQF1vnqVaQSxdYxd5SA6rBgOGMmTfPRTiBRZGC4XNoFyV3%2B7Q0iatqyzNKvP%2B3ANQ86LQYdNIUm5Bj4TVVoqSHZ6HShl7iwSsr5KTOyY2iMgqDD4xDVAXOSyCy8zdrCmNS%2FGOW0fqzCNlI%2F581XEYZTfx0A0yzyoZCjWNULuf7uEdULCenI0EGFXqZGbnbtfZ1%2BSUHmJPeoOgMR1AOHff0MTMY29BndOFxR7Yf19o7lPCLnGbI2FVmiCU2W32qxCRQAlAxz5hkMw9QWb%2BBw4tyoamS89C62Y%2FxQmUYzWfQ5qxdi%2B%2FIOQOgjcOGDw5DYZ3Bvdu3tB8%2BP3OyfYuIkn9QERUMu4ZegZ8zVGND0%2FBECruejHzvRgwyPH8vwY6pgGEh8KWAvGOo7r8VS%2BrwiUF8TH6uyGNzD8B1bbVhk%2BYju8etBEKenEJAol5cBwvfBwRryax8q9D6L%2FDTDZFZjTw46Qhg0D46400NNM3EwUA7ZmJNBGYiinryDWBVDGXbL0gPVeRoR3nRnt8ue5Ym05zSVDZ6aImj2xeXtADme7r69CbU9XGvPbTSKyxQYt08S8M31jj0S9jocx8I0SsiO2tKsGD6tsw&X-Amz-Signature=5a0a70c939977f00c75746bce0f771cef53e1fc2cdec7f86888b33fb97da7d65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654R7JZIB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD5Ru2y4x2uDEVHoS%2FZTWS3UGfIevkh3hh8RJUW%2FxLrAiAFKDth3KFIj0gAnn9M1MPSi52Ad9zJn4sRXPgBPTCEVCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMPjTpcuu1MFMJTImQKtwDPbJqb3gkWQtZkvxe%2FXyoVPnJqdX6BpO10uN%2BKpUHzw4Om2B%2FKNFAADeadoy2j5qkJxa9jb8Ok8YnTpi7WEpO8VEqHJoVDoFKNwr2N0D%2F637vZ%2FLo8%2FP%2BVdRRvbz2%2F3CohxeGjA4FRjsyJ4he3Ksn5mDGtIAT1u0ObLu%2FkUtXEDX%2BI%2Brmcs3vpSAEKEjZcM5G5aFtuZo09j7601qkbEQs55zS9sZv8AbKGcp2J0GiG5O4nAqye%2FHSUfPwc%2BFpvJazqUvd%2BxzYQF1vnqVaQSxdYxd5SA6rBgOGMmTfPRTiBRZGC4XNoFyV3%2B7Q0iatqyzNKvP%2B3ANQ86LQYdNIUm5Bj4TVVoqSHZ6HShl7iwSsr5KTOyY2iMgqDD4xDVAXOSyCy8zdrCmNS%2FGOW0fqzCNlI%2F581XEYZTfx0A0yzyoZCjWNULuf7uEdULCenI0EGFXqZGbnbtfZ1%2BSUHmJPeoOgMR1AOHff0MTMY29BndOFxR7Yf19o7lPCLnGbI2FVmiCU2W32qxCRQAlAxz5hkMw9QWb%2BBw4tyoamS89C62Y%2FxQmUYzWfQ5qxdi%2B%2FIOQOgjcOGDw5DYZ3Bvdu3tB8%2BP3OyfYuIkn9QERUMu4ZegZ8zVGND0%2FBECruejHzvRgwyPH8vwY6pgGEh8KWAvGOo7r8VS%2BrwiUF8TH6uyGNzD8B1bbVhk%2BYju8etBEKenEJAol5cBwvfBwRryax8q9D6L%2FDTDZFZjTw46Qhg0D46400NNM3EwUA7ZmJNBGYiinryDWBVDGXbL0gPVeRoR3nRnt8ue5Ym05zSVDZ6aImj2xeXtADme7r69CbU9XGvPbTSKyxQYt08S8M31jj0S9jocx8I0SsiO2tKsGD6tsw&X-Amz-Signature=743b23c966e26b5fd92ecf79a88f671f54906a68485ad9bd64f60bc8d09c711f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654R7JZIB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD5Ru2y4x2uDEVHoS%2FZTWS3UGfIevkh3hh8RJUW%2FxLrAiAFKDth3KFIj0gAnn9M1MPSi52Ad9zJn4sRXPgBPTCEVCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMPjTpcuu1MFMJTImQKtwDPbJqb3gkWQtZkvxe%2FXyoVPnJqdX6BpO10uN%2BKpUHzw4Om2B%2FKNFAADeadoy2j5qkJxa9jb8Ok8YnTpi7WEpO8VEqHJoVDoFKNwr2N0D%2F637vZ%2FLo8%2FP%2BVdRRvbz2%2F3CohxeGjA4FRjsyJ4he3Ksn5mDGtIAT1u0ObLu%2FkUtXEDX%2BI%2Brmcs3vpSAEKEjZcM5G5aFtuZo09j7601qkbEQs55zS9sZv8AbKGcp2J0GiG5O4nAqye%2FHSUfPwc%2BFpvJazqUvd%2BxzYQF1vnqVaQSxdYxd5SA6rBgOGMmTfPRTiBRZGC4XNoFyV3%2B7Q0iatqyzNKvP%2B3ANQ86LQYdNIUm5Bj4TVVoqSHZ6HShl7iwSsr5KTOyY2iMgqDD4xDVAXOSyCy8zdrCmNS%2FGOW0fqzCNlI%2F581XEYZTfx0A0yzyoZCjWNULuf7uEdULCenI0EGFXqZGbnbtfZ1%2BSUHmJPeoOgMR1AOHff0MTMY29BndOFxR7Yf19o7lPCLnGbI2FVmiCU2W32qxCRQAlAxz5hkMw9QWb%2BBw4tyoamS89C62Y%2FxQmUYzWfQ5qxdi%2B%2FIOQOgjcOGDw5DYZ3Bvdu3tB8%2BP3OyfYuIkn9QERUMu4ZegZ8zVGND0%2FBECruejHzvRgwyPH8vwY6pgGEh8KWAvGOo7r8VS%2BrwiUF8TH6uyGNzD8B1bbVhk%2BYju8etBEKenEJAol5cBwvfBwRryax8q9D6L%2FDTDZFZjTw46Qhg0D46400NNM3EwUA7ZmJNBGYiinryDWBVDGXbL0gPVeRoR3nRnt8ue5Ym05zSVDZ6aImj2xeXtADme7r69CbU9XGvPbTSKyxQYt08S8M31jj0S9jocx8I0SsiO2tKsGD6tsw&X-Amz-Signature=9a23817d4d16bc98efc045e1c15f03b1b08e71906033b076fcb0b66264887abe&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654R7JZIB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD5Ru2y4x2uDEVHoS%2FZTWS3UGfIevkh3hh8RJUW%2FxLrAiAFKDth3KFIj0gAnn9M1MPSi52Ad9zJn4sRXPgBPTCEVCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMPjTpcuu1MFMJTImQKtwDPbJqb3gkWQtZkvxe%2FXyoVPnJqdX6BpO10uN%2BKpUHzw4Om2B%2FKNFAADeadoy2j5qkJxa9jb8Ok8YnTpi7WEpO8VEqHJoVDoFKNwr2N0D%2F637vZ%2FLo8%2FP%2BVdRRvbz2%2F3CohxeGjA4FRjsyJ4he3Ksn5mDGtIAT1u0ObLu%2FkUtXEDX%2BI%2Brmcs3vpSAEKEjZcM5G5aFtuZo09j7601qkbEQs55zS9sZv8AbKGcp2J0GiG5O4nAqye%2FHSUfPwc%2BFpvJazqUvd%2BxzYQF1vnqVaQSxdYxd5SA6rBgOGMmTfPRTiBRZGC4XNoFyV3%2B7Q0iatqyzNKvP%2B3ANQ86LQYdNIUm5Bj4TVVoqSHZ6HShl7iwSsr5KTOyY2iMgqDD4xDVAXOSyCy8zdrCmNS%2FGOW0fqzCNlI%2F581XEYZTfx0A0yzyoZCjWNULuf7uEdULCenI0EGFXqZGbnbtfZ1%2BSUHmJPeoOgMR1AOHff0MTMY29BndOFxR7Yf19o7lPCLnGbI2FVmiCU2W32qxCRQAlAxz5hkMw9QWb%2BBw4tyoamS89C62Y%2FxQmUYzWfQ5qxdi%2B%2FIOQOgjcOGDw5DYZ3Bvdu3tB8%2BP3OyfYuIkn9QERUMu4ZegZ8zVGND0%2FBECruejHzvRgwyPH8vwY6pgGEh8KWAvGOo7r8VS%2BrwiUF8TH6uyGNzD8B1bbVhk%2BYju8etBEKenEJAol5cBwvfBwRryax8q9D6L%2FDTDZFZjTw46Qhg0D46400NNM3EwUA7ZmJNBGYiinryDWBVDGXbL0gPVeRoR3nRnt8ue5Ym05zSVDZ6aImj2xeXtADme7r69CbU9XGvPbTSKyxQYt08S8M31jj0S9jocx8I0SsiO2tKsGD6tsw&X-Amz-Signature=899f1126257440ba685a317a015a7da49f44dfed21c5ef0c5453adab8c735656&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654R7JZIB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD5Ru2y4x2uDEVHoS%2FZTWS3UGfIevkh3hh8RJUW%2FxLrAiAFKDth3KFIj0gAnn9M1MPSi52Ad9zJn4sRXPgBPTCEVCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMPjTpcuu1MFMJTImQKtwDPbJqb3gkWQtZkvxe%2FXyoVPnJqdX6BpO10uN%2BKpUHzw4Om2B%2FKNFAADeadoy2j5qkJxa9jb8Ok8YnTpi7WEpO8VEqHJoVDoFKNwr2N0D%2F637vZ%2FLo8%2FP%2BVdRRvbz2%2F3CohxeGjA4FRjsyJ4he3Ksn5mDGtIAT1u0ObLu%2FkUtXEDX%2BI%2Brmcs3vpSAEKEjZcM5G5aFtuZo09j7601qkbEQs55zS9sZv8AbKGcp2J0GiG5O4nAqye%2FHSUfPwc%2BFpvJazqUvd%2BxzYQF1vnqVaQSxdYxd5SA6rBgOGMmTfPRTiBRZGC4XNoFyV3%2B7Q0iatqyzNKvP%2B3ANQ86LQYdNIUm5Bj4TVVoqSHZ6HShl7iwSsr5KTOyY2iMgqDD4xDVAXOSyCy8zdrCmNS%2FGOW0fqzCNlI%2F581XEYZTfx0A0yzyoZCjWNULuf7uEdULCenI0EGFXqZGbnbtfZ1%2BSUHmJPeoOgMR1AOHff0MTMY29BndOFxR7Yf19o7lPCLnGbI2FVmiCU2W32qxCRQAlAxz5hkMw9QWb%2BBw4tyoamS89C62Y%2FxQmUYzWfQ5qxdi%2B%2FIOQOgjcOGDw5DYZ3Bvdu3tB8%2BP3OyfYuIkn9QERUMu4ZegZ8zVGND0%2FBECruejHzvRgwyPH8vwY6pgGEh8KWAvGOo7r8VS%2BrwiUF8TH6uyGNzD8B1bbVhk%2BYju8etBEKenEJAol5cBwvfBwRryax8q9D6L%2FDTDZFZjTw46Qhg0D46400NNM3EwUA7ZmJNBGYiinryDWBVDGXbL0gPVeRoR3nRnt8ue5Ym05zSVDZ6aImj2xeXtADme7r69CbU9XGvPbTSKyxQYt08S8M31jj0S9jocx8I0SsiO2tKsGD6tsw&X-Amz-Signature=06f712ffdcc87bec2f280584a5557790242bdaba7025ab5f08cdc04ee87530b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654R7JZIB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD5Ru2y4x2uDEVHoS%2FZTWS3UGfIevkh3hh8RJUW%2FxLrAiAFKDth3KFIj0gAnn9M1MPSi52Ad9zJn4sRXPgBPTCEVCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMPjTpcuu1MFMJTImQKtwDPbJqb3gkWQtZkvxe%2FXyoVPnJqdX6BpO10uN%2BKpUHzw4Om2B%2FKNFAADeadoy2j5qkJxa9jb8Ok8YnTpi7WEpO8VEqHJoVDoFKNwr2N0D%2F637vZ%2FLo8%2FP%2BVdRRvbz2%2F3CohxeGjA4FRjsyJ4he3Ksn5mDGtIAT1u0ObLu%2FkUtXEDX%2BI%2Brmcs3vpSAEKEjZcM5G5aFtuZo09j7601qkbEQs55zS9sZv8AbKGcp2J0GiG5O4nAqye%2FHSUfPwc%2BFpvJazqUvd%2BxzYQF1vnqVaQSxdYxd5SA6rBgOGMmTfPRTiBRZGC4XNoFyV3%2B7Q0iatqyzNKvP%2B3ANQ86LQYdNIUm5Bj4TVVoqSHZ6HShl7iwSsr5KTOyY2iMgqDD4xDVAXOSyCy8zdrCmNS%2FGOW0fqzCNlI%2F581XEYZTfx0A0yzyoZCjWNULuf7uEdULCenI0EGFXqZGbnbtfZ1%2BSUHmJPeoOgMR1AOHff0MTMY29BndOFxR7Yf19o7lPCLnGbI2FVmiCU2W32qxCRQAlAxz5hkMw9QWb%2BBw4tyoamS89C62Y%2FxQmUYzWfQ5qxdi%2B%2FIOQOgjcOGDw5DYZ3Bvdu3tB8%2BP3OyfYuIkn9QERUMu4ZegZ8zVGND0%2FBECruejHzvRgwyPH8vwY6pgGEh8KWAvGOo7r8VS%2BrwiUF8TH6uyGNzD8B1bbVhk%2BYju8etBEKenEJAol5cBwvfBwRryax8q9D6L%2FDTDZFZjTw46Qhg0D46400NNM3EwUA7ZmJNBGYiinryDWBVDGXbL0gPVeRoR3nRnt8ue5Ym05zSVDZ6aImj2xeXtADme7r69CbU9XGvPbTSKyxQYt08S8M31jj0S9jocx8I0SsiO2tKsGD6tsw&X-Amz-Signature=9976f478e005c2d09c5e854c52272da7784241de1060f603852d60a225955db6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654R7JZIB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD5Ru2y4x2uDEVHoS%2FZTWS3UGfIevkh3hh8RJUW%2FxLrAiAFKDth3KFIj0gAnn9M1MPSi52Ad9zJn4sRXPgBPTCEVCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMPjTpcuu1MFMJTImQKtwDPbJqb3gkWQtZkvxe%2FXyoVPnJqdX6BpO10uN%2BKpUHzw4Om2B%2FKNFAADeadoy2j5qkJxa9jb8Ok8YnTpi7WEpO8VEqHJoVDoFKNwr2N0D%2F637vZ%2FLo8%2FP%2BVdRRvbz2%2F3CohxeGjA4FRjsyJ4he3Ksn5mDGtIAT1u0ObLu%2FkUtXEDX%2BI%2Brmcs3vpSAEKEjZcM5G5aFtuZo09j7601qkbEQs55zS9sZv8AbKGcp2J0GiG5O4nAqye%2FHSUfPwc%2BFpvJazqUvd%2BxzYQF1vnqVaQSxdYxd5SA6rBgOGMmTfPRTiBRZGC4XNoFyV3%2B7Q0iatqyzNKvP%2B3ANQ86LQYdNIUm5Bj4TVVoqSHZ6HShl7iwSsr5KTOyY2iMgqDD4xDVAXOSyCy8zdrCmNS%2FGOW0fqzCNlI%2F581XEYZTfx0A0yzyoZCjWNULuf7uEdULCenI0EGFXqZGbnbtfZ1%2BSUHmJPeoOgMR1AOHff0MTMY29BndOFxR7Yf19o7lPCLnGbI2FVmiCU2W32qxCRQAlAxz5hkMw9QWb%2BBw4tyoamS89C62Y%2FxQmUYzWfQ5qxdi%2B%2FIOQOgjcOGDw5DYZ3Bvdu3tB8%2BP3OyfYuIkn9QERUMu4ZegZ8zVGND0%2FBECruejHzvRgwyPH8vwY6pgGEh8KWAvGOo7r8VS%2BrwiUF8TH6uyGNzD8B1bbVhk%2BYju8etBEKenEJAol5cBwvfBwRryax8q9D6L%2FDTDZFZjTw46Qhg0D46400NNM3EwUA7ZmJNBGYiinryDWBVDGXbL0gPVeRoR3nRnt8ue5Ym05zSVDZ6aImj2xeXtADme7r69CbU9XGvPbTSKyxQYt08S8M31jj0S9jocx8I0SsiO2tKsGD6tsw&X-Amz-Signature=e8ee2a845f305701e453d5f0eb2708cf0085fa7ea333e519a065cad63f42ed75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654R7JZIB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD5Ru2y4x2uDEVHoS%2FZTWS3UGfIevkh3hh8RJUW%2FxLrAiAFKDth3KFIj0gAnn9M1MPSi52Ad9zJn4sRXPgBPTCEVCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMPjTpcuu1MFMJTImQKtwDPbJqb3gkWQtZkvxe%2FXyoVPnJqdX6BpO10uN%2BKpUHzw4Om2B%2FKNFAADeadoy2j5qkJxa9jb8Ok8YnTpi7WEpO8VEqHJoVDoFKNwr2N0D%2F637vZ%2FLo8%2FP%2BVdRRvbz2%2F3CohxeGjA4FRjsyJ4he3Ksn5mDGtIAT1u0ObLu%2FkUtXEDX%2BI%2Brmcs3vpSAEKEjZcM5G5aFtuZo09j7601qkbEQs55zS9sZv8AbKGcp2J0GiG5O4nAqye%2FHSUfPwc%2BFpvJazqUvd%2BxzYQF1vnqVaQSxdYxd5SA6rBgOGMmTfPRTiBRZGC4XNoFyV3%2B7Q0iatqyzNKvP%2B3ANQ86LQYdNIUm5Bj4TVVoqSHZ6HShl7iwSsr5KTOyY2iMgqDD4xDVAXOSyCy8zdrCmNS%2FGOW0fqzCNlI%2F581XEYZTfx0A0yzyoZCjWNULuf7uEdULCenI0EGFXqZGbnbtfZ1%2BSUHmJPeoOgMR1AOHff0MTMY29BndOFxR7Yf19o7lPCLnGbI2FVmiCU2W32qxCRQAlAxz5hkMw9QWb%2BBw4tyoamS89C62Y%2FxQmUYzWfQ5qxdi%2B%2FIOQOgjcOGDw5DYZ3Bvdu3tB8%2BP3OyfYuIkn9QERUMu4ZegZ8zVGND0%2FBECruejHzvRgwyPH8vwY6pgGEh8KWAvGOo7r8VS%2BrwiUF8TH6uyGNzD8B1bbVhk%2BYju8etBEKenEJAol5cBwvfBwRryax8q9D6L%2FDTDZFZjTw46Qhg0D46400NNM3EwUA7ZmJNBGYiinryDWBVDGXbL0gPVeRoR3nRnt8ue5Ym05zSVDZ6aImj2xeXtADme7r69CbU9XGvPbTSKyxQYt08S8M31jj0S9jocx8I0SsiO2tKsGD6tsw&X-Amz-Signature=0f52c861d735f9b6c5335c16bf724bee2636d5ab38c066fb8f71464d7ea4460f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
