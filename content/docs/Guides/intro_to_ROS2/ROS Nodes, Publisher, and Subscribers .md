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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767AZSYL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuKlTmHiQ3c0AZTE3v660xVOksGqLsSuckwFnYjq7y8AIgAtPrYyxTnOHUXofZJSsfJRE5EX1%2Fq1gQRIIPBgYuMqEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNgr7OglatsDC6%2BorircA9TnvFf52OQiu%2BkpYLSCHD9lXKQm4RLV5iHwEFqc%2BLk6Vq5mqanjPOvCCp1cfUL7EEo7vCwzPpxB2BHoeJaFJBcqOLroCeock6KWLe1MYZnYdFASRDZzt%2Fz7h1l1oMOdVfPbI9UtR5KtTg0CX2NazVZRky1FTKsCA9HX3io5w5xiTFh0XNAGym0UdumcKviJ3RYimbPgYwfBcuR4IQ%2FhCqxN%2FkMHeBvQzFF6Ih0qlEivsdVY4KO90nOBEXIPHHw7Wh5OZ7bKiXlG66tUv8LBKAAFvNsoYdXDqmeYK99F2XLNckuyMRVYbVHTv0200s669YRkGWF3EX3q%2Bn1aWAR0MO0GL8icgIoTMkE7TRRxZ6xnRFfF4gr4c76L14xviU0t%2BYywVeqgKQIYx8FKtMeTkbgElofmTKq%2BvzPmI789UrbfSUxA9L90dj%2BNPa36BwC6kY4hZGb0yqVbz0LaxUP%2FRZ%2F%2FVpooNOUzWr2R7vtKcmZ41aJR6JLO1%2FRptuVblQFdNewn5H18Ywz0HTfXLeyyNOfwI96VyhaexcbZzuBu6jqSb3%2B4lndQWSqqfrWx2IBy4CmECnT77LhO40woiNpxJwU8bLmDq45RrKSS6y11e0CU6tI9j8fRQCwJ%2FM5NMObFir8GOqUB0e7q%2FNX9STXW1nAhBGu2LdqHyie8MYWwrdt6U2xUPbedZr3KorWhwVYyu%2BXXcQVLTMwiXDB3zROcbQ8XT7614y2OPZkMb4WAGDqiIOhMb2cMozqL51k4Dc5QmArIXbnja3qpwrUv0fujn%2FNNQYI3e16UcfKefSKWrFXrtDcVdI3tRsBI%2FWqVpzB8A0bxlcWWVz1Iu60UHx4e2nOWCY0U0qFaGC9d&X-Amz-Signature=d60a5dd3827097f566841de143724c6c1acbacebaa72c14b6ccebe5e3deca915&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767AZSYL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuKlTmHiQ3c0AZTE3v660xVOksGqLsSuckwFnYjq7y8AIgAtPrYyxTnOHUXofZJSsfJRE5EX1%2Fq1gQRIIPBgYuMqEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNgr7OglatsDC6%2BorircA9TnvFf52OQiu%2BkpYLSCHD9lXKQm4RLV5iHwEFqc%2BLk6Vq5mqanjPOvCCp1cfUL7EEo7vCwzPpxB2BHoeJaFJBcqOLroCeock6KWLe1MYZnYdFASRDZzt%2Fz7h1l1oMOdVfPbI9UtR5KtTg0CX2NazVZRky1FTKsCA9HX3io5w5xiTFh0XNAGym0UdumcKviJ3RYimbPgYwfBcuR4IQ%2FhCqxN%2FkMHeBvQzFF6Ih0qlEivsdVY4KO90nOBEXIPHHw7Wh5OZ7bKiXlG66tUv8LBKAAFvNsoYdXDqmeYK99F2XLNckuyMRVYbVHTv0200s669YRkGWF3EX3q%2Bn1aWAR0MO0GL8icgIoTMkE7TRRxZ6xnRFfF4gr4c76L14xviU0t%2BYywVeqgKQIYx8FKtMeTkbgElofmTKq%2BvzPmI789UrbfSUxA9L90dj%2BNPa36BwC6kY4hZGb0yqVbz0LaxUP%2FRZ%2F%2FVpooNOUzWr2R7vtKcmZ41aJR6JLO1%2FRptuVblQFdNewn5H18Ywz0HTfXLeyyNOfwI96VyhaexcbZzuBu6jqSb3%2B4lndQWSqqfrWx2IBy4CmECnT77LhO40woiNpxJwU8bLmDq45RrKSS6y11e0CU6tI9j8fRQCwJ%2FM5NMObFir8GOqUB0e7q%2FNX9STXW1nAhBGu2LdqHyie8MYWwrdt6U2xUPbedZr3KorWhwVYyu%2BXXcQVLTMwiXDB3zROcbQ8XT7614y2OPZkMb4WAGDqiIOhMb2cMozqL51k4Dc5QmArIXbnja3qpwrUv0fujn%2FNNQYI3e16UcfKefSKWrFXrtDcVdI3tRsBI%2FWqVpzB8A0bxlcWWVz1Iu60UHx4e2nOWCY0U0qFaGC9d&X-Amz-Signature=29d4e072b0b47c215a651cdeac2528e6645bb8e96ad54c0abec93b472b06a5c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767AZSYL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuKlTmHiQ3c0AZTE3v660xVOksGqLsSuckwFnYjq7y8AIgAtPrYyxTnOHUXofZJSsfJRE5EX1%2Fq1gQRIIPBgYuMqEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNgr7OglatsDC6%2BorircA9TnvFf52OQiu%2BkpYLSCHD9lXKQm4RLV5iHwEFqc%2BLk6Vq5mqanjPOvCCp1cfUL7EEo7vCwzPpxB2BHoeJaFJBcqOLroCeock6KWLe1MYZnYdFASRDZzt%2Fz7h1l1oMOdVfPbI9UtR5KtTg0CX2NazVZRky1FTKsCA9HX3io5w5xiTFh0XNAGym0UdumcKviJ3RYimbPgYwfBcuR4IQ%2FhCqxN%2FkMHeBvQzFF6Ih0qlEivsdVY4KO90nOBEXIPHHw7Wh5OZ7bKiXlG66tUv8LBKAAFvNsoYdXDqmeYK99F2XLNckuyMRVYbVHTv0200s669YRkGWF3EX3q%2Bn1aWAR0MO0GL8icgIoTMkE7TRRxZ6xnRFfF4gr4c76L14xviU0t%2BYywVeqgKQIYx8FKtMeTkbgElofmTKq%2BvzPmI789UrbfSUxA9L90dj%2BNPa36BwC6kY4hZGb0yqVbz0LaxUP%2FRZ%2F%2FVpooNOUzWr2R7vtKcmZ41aJR6JLO1%2FRptuVblQFdNewn5H18Ywz0HTfXLeyyNOfwI96VyhaexcbZzuBu6jqSb3%2B4lndQWSqqfrWx2IBy4CmECnT77LhO40woiNpxJwU8bLmDq45RrKSS6y11e0CU6tI9j8fRQCwJ%2FM5NMObFir8GOqUB0e7q%2FNX9STXW1nAhBGu2LdqHyie8MYWwrdt6U2xUPbedZr3KorWhwVYyu%2BXXcQVLTMwiXDB3zROcbQ8XT7614y2OPZkMb4WAGDqiIOhMb2cMozqL51k4Dc5QmArIXbnja3qpwrUv0fujn%2FNNQYI3e16UcfKefSKWrFXrtDcVdI3tRsBI%2FWqVpzB8A0bxlcWWVz1Iu60UHx4e2nOWCY0U0qFaGC9d&X-Amz-Signature=08469ef43f936b1dc36dc5837ce0b71624fb26c1e409064ff80da957ed4a2678&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767AZSYL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuKlTmHiQ3c0AZTE3v660xVOksGqLsSuckwFnYjq7y8AIgAtPrYyxTnOHUXofZJSsfJRE5EX1%2Fq1gQRIIPBgYuMqEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNgr7OglatsDC6%2BorircA9TnvFf52OQiu%2BkpYLSCHD9lXKQm4RLV5iHwEFqc%2BLk6Vq5mqanjPOvCCp1cfUL7EEo7vCwzPpxB2BHoeJaFJBcqOLroCeock6KWLe1MYZnYdFASRDZzt%2Fz7h1l1oMOdVfPbI9UtR5KtTg0CX2NazVZRky1FTKsCA9HX3io5w5xiTFh0XNAGym0UdumcKviJ3RYimbPgYwfBcuR4IQ%2FhCqxN%2FkMHeBvQzFF6Ih0qlEivsdVY4KO90nOBEXIPHHw7Wh5OZ7bKiXlG66tUv8LBKAAFvNsoYdXDqmeYK99F2XLNckuyMRVYbVHTv0200s669YRkGWF3EX3q%2Bn1aWAR0MO0GL8icgIoTMkE7TRRxZ6xnRFfF4gr4c76L14xviU0t%2BYywVeqgKQIYx8FKtMeTkbgElofmTKq%2BvzPmI789UrbfSUxA9L90dj%2BNPa36BwC6kY4hZGb0yqVbz0LaxUP%2FRZ%2F%2FVpooNOUzWr2R7vtKcmZ41aJR6JLO1%2FRptuVblQFdNewn5H18Ywz0HTfXLeyyNOfwI96VyhaexcbZzuBu6jqSb3%2B4lndQWSqqfrWx2IBy4CmECnT77LhO40woiNpxJwU8bLmDq45RrKSS6y11e0CU6tI9j8fRQCwJ%2FM5NMObFir8GOqUB0e7q%2FNX9STXW1nAhBGu2LdqHyie8MYWwrdt6U2xUPbedZr3KorWhwVYyu%2BXXcQVLTMwiXDB3zROcbQ8XT7614y2OPZkMb4WAGDqiIOhMb2cMozqL51k4Dc5QmArIXbnja3qpwrUv0fujn%2FNNQYI3e16UcfKefSKWrFXrtDcVdI3tRsBI%2FWqVpzB8A0bxlcWWVz1Iu60UHx4e2nOWCY0U0qFaGC9d&X-Amz-Signature=5e941f39aca459ea451ec1045e70e7dfa1b7dc6469290b83ced5d272234a0830&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767AZSYL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuKlTmHiQ3c0AZTE3v660xVOksGqLsSuckwFnYjq7y8AIgAtPrYyxTnOHUXofZJSsfJRE5EX1%2Fq1gQRIIPBgYuMqEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNgr7OglatsDC6%2BorircA9TnvFf52OQiu%2BkpYLSCHD9lXKQm4RLV5iHwEFqc%2BLk6Vq5mqanjPOvCCp1cfUL7EEo7vCwzPpxB2BHoeJaFJBcqOLroCeock6KWLe1MYZnYdFASRDZzt%2Fz7h1l1oMOdVfPbI9UtR5KtTg0CX2NazVZRky1FTKsCA9HX3io5w5xiTFh0XNAGym0UdumcKviJ3RYimbPgYwfBcuR4IQ%2FhCqxN%2FkMHeBvQzFF6Ih0qlEivsdVY4KO90nOBEXIPHHw7Wh5OZ7bKiXlG66tUv8LBKAAFvNsoYdXDqmeYK99F2XLNckuyMRVYbVHTv0200s669YRkGWF3EX3q%2Bn1aWAR0MO0GL8icgIoTMkE7TRRxZ6xnRFfF4gr4c76L14xviU0t%2BYywVeqgKQIYx8FKtMeTkbgElofmTKq%2BvzPmI789UrbfSUxA9L90dj%2BNPa36BwC6kY4hZGb0yqVbz0LaxUP%2FRZ%2F%2FVpooNOUzWr2R7vtKcmZ41aJR6JLO1%2FRptuVblQFdNewn5H18Ywz0HTfXLeyyNOfwI96VyhaexcbZzuBu6jqSb3%2B4lndQWSqqfrWx2IBy4CmECnT77LhO40woiNpxJwU8bLmDq45RrKSS6y11e0CU6tI9j8fRQCwJ%2FM5NMObFir8GOqUB0e7q%2FNX9STXW1nAhBGu2LdqHyie8MYWwrdt6U2xUPbedZr3KorWhwVYyu%2BXXcQVLTMwiXDB3zROcbQ8XT7614y2OPZkMb4WAGDqiIOhMb2cMozqL51k4Dc5QmArIXbnja3qpwrUv0fujn%2FNNQYI3e16UcfKefSKWrFXrtDcVdI3tRsBI%2FWqVpzB8A0bxlcWWVz1Iu60UHx4e2nOWCY0U0qFaGC9d&X-Amz-Signature=ac6149156a7561cc595b681e97fc19ac8fa86f28ee1a4928a24746d085e49c84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767AZSYL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuKlTmHiQ3c0AZTE3v660xVOksGqLsSuckwFnYjq7y8AIgAtPrYyxTnOHUXofZJSsfJRE5EX1%2Fq1gQRIIPBgYuMqEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNgr7OglatsDC6%2BorircA9TnvFf52OQiu%2BkpYLSCHD9lXKQm4RLV5iHwEFqc%2BLk6Vq5mqanjPOvCCp1cfUL7EEo7vCwzPpxB2BHoeJaFJBcqOLroCeock6KWLe1MYZnYdFASRDZzt%2Fz7h1l1oMOdVfPbI9UtR5KtTg0CX2NazVZRky1FTKsCA9HX3io5w5xiTFh0XNAGym0UdumcKviJ3RYimbPgYwfBcuR4IQ%2FhCqxN%2FkMHeBvQzFF6Ih0qlEivsdVY4KO90nOBEXIPHHw7Wh5OZ7bKiXlG66tUv8LBKAAFvNsoYdXDqmeYK99F2XLNckuyMRVYbVHTv0200s669YRkGWF3EX3q%2Bn1aWAR0MO0GL8icgIoTMkE7TRRxZ6xnRFfF4gr4c76L14xviU0t%2BYywVeqgKQIYx8FKtMeTkbgElofmTKq%2BvzPmI789UrbfSUxA9L90dj%2BNPa36BwC6kY4hZGb0yqVbz0LaxUP%2FRZ%2F%2FVpooNOUzWr2R7vtKcmZ41aJR6JLO1%2FRptuVblQFdNewn5H18Ywz0HTfXLeyyNOfwI96VyhaexcbZzuBu6jqSb3%2B4lndQWSqqfrWx2IBy4CmECnT77LhO40woiNpxJwU8bLmDq45RrKSS6y11e0CU6tI9j8fRQCwJ%2FM5NMObFir8GOqUB0e7q%2FNX9STXW1nAhBGu2LdqHyie8MYWwrdt6U2xUPbedZr3KorWhwVYyu%2BXXcQVLTMwiXDB3zROcbQ8XT7614y2OPZkMb4WAGDqiIOhMb2cMozqL51k4Dc5QmArIXbnja3qpwrUv0fujn%2FNNQYI3e16UcfKefSKWrFXrtDcVdI3tRsBI%2FWqVpzB8A0bxlcWWVz1Iu60UHx4e2nOWCY0U0qFaGC9d&X-Amz-Signature=796f6c83377931e8599a299c74afac07bf6d706922bf2961e42af19f2cbc4aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767AZSYL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuKlTmHiQ3c0AZTE3v660xVOksGqLsSuckwFnYjq7y8AIgAtPrYyxTnOHUXofZJSsfJRE5EX1%2Fq1gQRIIPBgYuMqEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNgr7OglatsDC6%2BorircA9TnvFf52OQiu%2BkpYLSCHD9lXKQm4RLV5iHwEFqc%2BLk6Vq5mqanjPOvCCp1cfUL7EEo7vCwzPpxB2BHoeJaFJBcqOLroCeock6KWLe1MYZnYdFASRDZzt%2Fz7h1l1oMOdVfPbI9UtR5KtTg0CX2NazVZRky1FTKsCA9HX3io5w5xiTFh0XNAGym0UdumcKviJ3RYimbPgYwfBcuR4IQ%2FhCqxN%2FkMHeBvQzFF6Ih0qlEivsdVY4KO90nOBEXIPHHw7Wh5OZ7bKiXlG66tUv8LBKAAFvNsoYdXDqmeYK99F2XLNckuyMRVYbVHTv0200s669YRkGWF3EX3q%2Bn1aWAR0MO0GL8icgIoTMkE7TRRxZ6xnRFfF4gr4c76L14xviU0t%2BYywVeqgKQIYx8FKtMeTkbgElofmTKq%2BvzPmI789UrbfSUxA9L90dj%2BNPa36BwC6kY4hZGb0yqVbz0LaxUP%2FRZ%2F%2FVpooNOUzWr2R7vtKcmZ41aJR6JLO1%2FRptuVblQFdNewn5H18Ywz0HTfXLeyyNOfwI96VyhaexcbZzuBu6jqSb3%2B4lndQWSqqfrWx2IBy4CmECnT77LhO40woiNpxJwU8bLmDq45RrKSS6y11e0CU6tI9j8fRQCwJ%2FM5NMObFir8GOqUB0e7q%2FNX9STXW1nAhBGu2LdqHyie8MYWwrdt6U2xUPbedZr3KorWhwVYyu%2BXXcQVLTMwiXDB3zROcbQ8XT7614y2OPZkMb4WAGDqiIOhMb2cMozqL51k4Dc5QmArIXbnja3qpwrUv0fujn%2FNNQYI3e16UcfKefSKWrFXrtDcVdI3tRsBI%2FWqVpzB8A0bxlcWWVz1Iu60UHx4e2nOWCY0U0qFaGC9d&X-Amz-Signature=979e57d14af4f26cfab30355dac9dc7de5618c204f2a0ffc7dd4b7c9efd24189&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767AZSYL%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuKlTmHiQ3c0AZTE3v660xVOksGqLsSuckwFnYjq7y8AIgAtPrYyxTnOHUXofZJSsfJRE5EX1%2Fq1gQRIIPBgYuMqEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNgr7OglatsDC6%2BorircA9TnvFf52OQiu%2BkpYLSCHD9lXKQm4RLV5iHwEFqc%2BLk6Vq5mqanjPOvCCp1cfUL7EEo7vCwzPpxB2BHoeJaFJBcqOLroCeock6KWLe1MYZnYdFASRDZzt%2Fz7h1l1oMOdVfPbI9UtR5KtTg0CX2NazVZRky1FTKsCA9HX3io5w5xiTFh0XNAGym0UdumcKviJ3RYimbPgYwfBcuR4IQ%2FhCqxN%2FkMHeBvQzFF6Ih0qlEivsdVY4KO90nOBEXIPHHw7Wh5OZ7bKiXlG66tUv8LBKAAFvNsoYdXDqmeYK99F2XLNckuyMRVYbVHTv0200s669YRkGWF3EX3q%2Bn1aWAR0MO0GL8icgIoTMkE7TRRxZ6xnRFfF4gr4c76L14xviU0t%2BYywVeqgKQIYx8FKtMeTkbgElofmTKq%2BvzPmI789UrbfSUxA9L90dj%2BNPa36BwC6kY4hZGb0yqVbz0LaxUP%2FRZ%2F%2FVpooNOUzWr2R7vtKcmZ41aJR6JLO1%2FRptuVblQFdNewn5H18Ywz0HTfXLeyyNOfwI96VyhaexcbZzuBu6jqSb3%2B4lndQWSqqfrWx2IBy4CmECnT77LhO40woiNpxJwU8bLmDq45RrKSS6y11e0CU6tI9j8fRQCwJ%2FM5NMObFir8GOqUB0e7q%2FNX9STXW1nAhBGu2LdqHyie8MYWwrdt6U2xUPbedZr3KorWhwVYyu%2BXXcQVLTMwiXDB3zROcbQ8XT7614y2OPZkMb4WAGDqiIOhMb2cMozqL51k4Dc5QmArIXbnja3qpwrUv0fujn%2FNNQYI3e16UcfKefSKWrFXrtDcVdI3tRsBI%2FWqVpzB8A0bxlcWWVz1Iu60UHx4e2nOWCY0U0qFaGC9d&X-Amz-Signature=617520f6dfa66b14fa184a513d64f9b4e8ac4493ba9823c7400f852ffe7ba128&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
