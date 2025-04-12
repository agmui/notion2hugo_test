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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOVJHOH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEEMshUOlrUUs3G6dCCgA2lOX1uves%2BuNm11QlFbZ%2BrCAiAjIooCm9wYemW%2FUaKNyNXcyuN6SBFySYtrBdkbfypnoSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtM2xJi%2BopP4dXXaKtwDLUhBX253jSYP8gKT2NNajaecuX3OmpoNLIqJT05K2RrMjzh0Jf%2BuQY3iiV8hszA0bsft9EqQUAnkvfUEtWN3fAvtJtzKCV6fCvqRrdOTbSfFrHLziRwpnxlgHRqLKZ2kWvmINnUX5mt5QBQ3TyP7USczZmSmYY7rna84M%2BT94cWsy%2BQ9f0wzVEKPbLap8FnjxZdJKL0%2BQ4IUmCEt1zAFO80bryMMLlD%2BDXnX8osh13AF5YkKNksbsOTp7eW6HKKiJHDcwnKZsWn2KuOoU7yaarJEytr65xO7v2QY4ZJFaxVy%2BLFfaP1pC1XR9AlSenuKdkFvgevJcbCIkiimUwzdW71CVkptuSbUKrn32BgtyS%2FUGCzhjObIlbeIKv09cJFmztRmrnw9qo6gnF2AHlOr5ze44HmkiYoFMu82ye21FcbACa0D%2BNt8tB6AP4PPdvBNLMMbvPX4xxJ4IZ3WB%2BdvoNQuKZED9OnPOCKs8RoXpuc4zsB1THETtjbl4JY9v%2FIvbym7BKkNZwyCBxVee03Ld3sORK4EJtYde3VlAcBvEEe9IMnEEFLuoy56JrqJOv87sBEIaO4uNKA%2Ft%2BA4T0876oZLeg6r2CXYhvWXtpiywN99X1YjffZee5SrWZIw4bDrvwY6pgHXAcfIFftC2jh1jCizlaXdaUQ0FtWZ1WFeNEF%2Bp%2F52FG4gblt7P7fnPgz1l3isUBX7qZwUZBcNNV4X%2BgdGsVzJ4t6q2EzMBkE2ntsJE0Jc%2Bvos1rd5sTSfCDvp7ug%2FjvkvxVn2BwRwH%2FlmqHwlus2J2heDQhdlVlHBaChACHksvT%2BkPcZgx7rVcBT9%2B5EaEOoQRczSY1mgESBf%2BB26OTgMw7M7mZZu&X-Amz-Signature=41f40eb40932f5170b2fc960b889715fd06242135a798d36ef4e3620f7461596&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOVJHOH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEEMshUOlrUUs3G6dCCgA2lOX1uves%2BuNm11QlFbZ%2BrCAiAjIooCm9wYemW%2FUaKNyNXcyuN6SBFySYtrBdkbfypnoSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtM2xJi%2BopP4dXXaKtwDLUhBX253jSYP8gKT2NNajaecuX3OmpoNLIqJT05K2RrMjzh0Jf%2BuQY3iiV8hszA0bsft9EqQUAnkvfUEtWN3fAvtJtzKCV6fCvqRrdOTbSfFrHLziRwpnxlgHRqLKZ2kWvmINnUX5mt5QBQ3TyP7USczZmSmYY7rna84M%2BT94cWsy%2BQ9f0wzVEKPbLap8FnjxZdJKL0%2BQ4IUmCEt1zAFO80bryMMLlD%2BDXnX8osh13AF5YkKNksbsOTp7eW6HKKiJHDcwnKZsWn2KuOoU7yaarJEytr65xO7v2QY4ZJFaxVy%2BLFfaP1pC1XR9AlSenuKdkFvgevJcbCIkiimUwzdW71CVkptuSbUKrn32BgtyS%2FUGCzhjObIlbeIKv09cJFmztRmrnw9qo6gnF2AHlOr5ze44HmkiYoFMu82ye21FcbACa0D%2BNt8tB6AP4PPdvBNLMMbvPX4xxJ4IZ3WB%2BdvoNQuKZED9OnPOCKs8RoXpuc4zsB1THETtjbl4JY9v%2FIvbym7BKkNZwyCBxVee03Ld3sORK4EJtYde3VlAcBvEEe9IMnEEFLuoy56JrqJOv87sBEIaO4uNKA%2Ft%2BA4T0876oZLeg6r2CXYhvWXtpiywN99X1YjffZee5SrWZIw4bDrvwY6pgHXAcfIFftC2jh1jCizlaXdaUQ0FtWZ1WFeNEF%2Bp%2F52FG4gblt7P7fnPgz1l3isUBX7qZwUZBcNNV4X%2BgdGsVzJ4t6q2EzMBkE2ntsJE0Jc%2Bvos1rd5sTSfCDvp7ug%2FjvkvxVn2BwRwH%2FlmqHwlus2J2heDQhdlVlHBaChACHksvT%2BkPcZgx7rVcBT9%2B5EaEOoQRczSY1mgESBf%2BB26OTgMw7M7mZZu&X-Amz-Signature=9364829cb5eae2af645527c02da48e51a90fb3ca156c2e876941043a21796f25&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOVJHOH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEEMshUOlrUUs3G6dCCgA2lOX1uves%2BuNm11QlFbZ%2BrCAiAjIooCm9wYemW%2FUaKNyNXcyuN6SBFySYtrBdkbfypnoSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtM2xJi%2BopP4dXXaKtwDLUhBX253jSYP8gKT2NNajaecuX3OmpoNLIqJT05K2RrMjzh0Jf%2BuQY3iiV8hszA0bsft9EqQUAnkvfUEtWN3fAvtJtzKCV6fCvqRrdOTbSfFrHLziRwpnxlgHRqLKZ2kWvmINnUX5mt5QBQ3TyP7USczZmSmYY7rna84M%2BT94cWsy%2BQ9f0wzVEKPbLap8FnjxZdJKL0%2BQ4IUmCEt1zAFO80bryMMLlD%2BDXnX8osh13AF5YkKNksbsOTp7eW6HKKiJHDcwnKZsWn2KuOoU7yaarJEytr65xO7v2QY4ZJFaxVy%2BLFfaP1pC1XR9AlSenuKdkFvgevJcbCIkiimUwzdW71CVkptuSbUKrn32BgtyS%2FUGCzhjObIlbeIKv09cJFmztRmrnw9qo6gnF2AHlOr5ze44HmkiYoFMu82ye21FcbACa0D%2BNt8tB6AP4PPdvBNLMMbvPX4xxJ4IZ3WB%2BdvoNQuKZED9OnPOCKs8RoXpuc4zsB1THETtjbl4JY9v%2FIvbym7BKkNZwyCBxVee03Ld3sORK4EJtYde3VlAcBvEEe9IMnEEFLuoy56JrqJOv87sBEIaO4uNKA%2Ft%2BA4T0876oZLeg6r2CXYhvWXtpiywN99X1YjffZee5SrWZIw4bDrvwY6pgHXAcfIFftC2jh1jCizlaXdaUQ0FtWZ1WFeNEF%2Bp%2F52FG4gblt7P7fnPgz1l3isUBX7qZwUZBcNNV4X%2BgdGsVzJ4t6q2EzMBkE2ntsJE0Jc%2Bvos1rd5sTSfCDvp7ug%2FjvkvxVn2BwRwH%2FlmqHwlus2J2heDQhdlVlHBaChACHksvT%2BkPcZgx7rVcBT9%2B5EaEOoQRczSY1mgESBf%2BB26OTgMw7M7mZZu&X-Amz-Signature=76192b515eb3997cddadcb728287d9f8638e712184526418c033c093a66bfaf6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOVJHOH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEEMshUOlrUUs3G6dCCgA2lOX1uves%2BuNm11QlFbZ%2BrCAiAjIooCm9wYemW%2FUaKNyNXcyuN6SBFySYtrBdkbfypnoSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtM2xJi%2BopP4dXXaKtwDLUhBX253jSYP8gKT2NNajaecuX3OmpoNLIqJT05K2RrMjzh0Jf%2BuQY3iiV8hszA0bsft9EqQUAnkvfUEtWN3fAvtJtzKCV6fCvqRrdOTbSfFrHLziRwpnxlgHRqLKZ2kWvmINnUX5mt5QBQ3TyP7USczZmSmYY7rna84M%2BT94cWsy%2BQ9f0wzVEKPbLap8FnjxZdJKL0%2BQ4IUmCEt1zAFO80bryMMLlD%2BDXnX8osh13AF5YkKNksbsOTp7eW6HKKiJHDcwnKZsWn2KuOoU7yaarJEytr65xO7v2QY4ZJFaxVy%2BLFfaP1pC1XR9AlSenuKdkFvgevJcbCIkiimUwzdW71CVkptuSbUKrn32BgtyS%2FUGCzhjObIlbeIKv09cJFmztRmrnw9qo6gnF2AHlOr5ze44HmkiYoFMu82ye21FcbACa0D%2BNt8tB6AP4PPdvBNLMMbvPX4xxJ4IZ3WB%2BdvoNQuKZED9OnPOCKs8RoXpuc4zsB1THETtjbl4JY9v%2FIvbym7BKkNZwyCBxVee03Ld3sORK4EJtYde3VlAcBvEEe9IMnEEFLuoy56JrqJOv87sBEIaO4uNKA%2Ft%2BA4T0876oZLeg6r2CXYhvWXtpiywN99X1YjffZee5SrWZIw4bDrvwY6pgHXAcfIFftC2jh1jCizlaXdaUQ0FtWZ1WFeNEF%2Bp%2F52FG4gblt7P7fnPgz1l3isUBX7qZwUZBcNNV4X%2BgdGsVzJ4t6q2EzMBkE2ntsJE0Jc%2Bvos1rd5sTSfCDvp7ug%2FjvkvxVn2BwRwH%2FlmqHwlus2J2heDQhdlVlHBaChACHksvT%2BkPcZgx7rVcBT9%2B5EaEOoQRczSY1mgESBf%2BB26OTgMw7M7mZZu&X-Amz-Signature=2a3f7d3e309c32d76fc277cc53dc59c5acf9360e106a4dce3de3bedbb2d4931b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOVJHOH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEEMshUOlrUUs3G6dCCgA2lOX1uves%2BuNm11QlFbZ%2BrCAiAjIooCm9wYemW%2FUaKNyNXcyuN6SBFySYtrBdkbfypnoSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtM2xJi%2BopP4dXXaKtwDLUhBX253jSYP8gKT2NNajaecuX3OmpoNLIqJT05K2RrMjzh0Jf%2BuQY3iiV8hszA0bsft9EqQUAnkvfUEtWN3fAvtJtzKCV6fCvqRrdOTbSfFrHLziRwpnxlgHRqLKZ2kWvmINnUX5mt5QBQ3TyP7USczZmSmYY7rna84M%2BT94cWsy%2BQ9f0wzVEKPbLap8FnjxZdJKL0%2BQ4IUmCEt1zAFO80bryMMLlD%2BDXnX8osh13AF5YkKNksbsOTp7eW6HKKiJHDcwnKZsWn2KuOoU7yaarJEytr65xO7v2QY4ZJFaxVy%2BLFfaP1pC1XR9AlSenuKdkFvgevJcbCIkiimUwzdW71CVkptuSbUKrn32BgtyS%2FUGCzhjObIlbeIKv09cJFmztRmrnw9qo6gnF2AHlOr5ze44HmkiYoFMu82ye21FcbACa0D%2BNt8tB6AP4PPdvBNLMMbvPX4xxJ4IZ3WB%2BdvoNQuKZED9OnPOCKs8RoXpuc4zsB1THETtjbl4JY9v%2FIvbym7BKkNZwyCBxVee03Ld3sORK4EJtYde3VlAcBvEEe9IMnEEFLuoy56JrqJOv87sBEIaO4uNKA%2Ft%2BA4T0876oZLeg6r2CXYhvWXtpiywN99X1YjffZee5SrWZIw4bDrvwY6pgHXAcfIFftC2jh1jCizlaXdaUQ0FtWZ1WFeNEF%2Bp%2F52FG4gblt7P7fnPgz1l3isUBX7qZwUZBcNNV4X%2BgdGsVzJ4t6q2EzMBkE2ntsJE0Jc%2Bvos1rd5sTSfCDvp7ug%2FjvkvxVn2BwRwH%2FlmqHwlus2J2heDQhdlVlHBaChACHksvT%2BkPcZgx7rVcBT9%2B5EaEOoQRczSY1mgESBf%2BB26OTgMw7M7mZZu&X-Amz-Signature=ef1652ae919ddbad200e027f8687e3d2092e948bc4f86ae72aae458ae4dd9627&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOVJHOH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEEMshUOlrUUs3G6dCCgA2lOX1uves%2BuNm11QlFbZ%2BrCAiAjIooCm9wYemW%2FUaKNyNXcyuN6SBFySYtrBdkbfypnoSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtM2xJi%2BopP4dXXaKtwDLUhBX253jSYP8gKT2NNajaecuX3OmpoNLIqJT05K2RrMjzh0Jf%2BuQY3iiV8hszA0bsft9EqQUAnkvfUEtWN3fAvtJtzKCV6fCvqRrdOTbSfFrHLziRwpnxlgHRqLKZ2kWvmINnUX5mt5QBQ3TyP7USczZmSmYY7rna84M%2BT94cWsy%2BQ9f0wzVEKPbLap8FnjxZdJKL0%2BQ4IUmCEt1zAFO80bryMMLlD%2BDXnX8osh13AF5YkKNksbsOTp7eW6HKKiJHDcwnKZsWn2KuOoU7yaarJEytr65xO7v2QY4ZJFaxVy%2BLFfaP1pC1XR9AlSenuKdkFvgevJcbCIkiimUwzdW71CVkptuSbUKrn32BgtyS%2FUGCzhjObIlbeIKv09cJFmztRmrnw9qo6gnF2AHlOr5ze44HmkiYoFMu82ye21FcbACa0D%2BNt8tB6AP4PPdvBNLMMbvPX4xxJ4IZ3WB%2BdvoNQuKZED9OnPOCKs8RoXpuc4zsB1THETtjbl4JY9v%2FIvbym7BKkNZwyCBxVee03Ld3sORK4EJtYde3VlAcBvEEe9IMnEEFLuoy56JrqJOv87sBEIaO4uNKA%2Ft%2BA4T0876oZLeg6r2CXYhvWXtpiywN99X1YjffZee5SrWZIw4bDrvwY6pgHXAcfIFftC2jh1jCizlaXdaUQ0FtWZ1WFeNEF%2Bp%2F52FG4gblt7P7fnPgz1l3isUBX7qZwUZBcNNV4X%2BgdGsVzJ4t6q2EzMBkE2ntsJE0Jc%2Bvos1rd5sTSfCDvp7ug%2FjvkvxVn2BwRwH%2FlmqHwlus2J2heDQhdlVlHBaChACHksvT%2BkPcZgx7rVcBT9%2B5EaEOoQRczSY1mgESBf%2BB26OTgMw7M7mZZu&X-Amz-Signature=98fa8de74d378df1eea4a2afb3d6c5db6619d573f92da110f81f874871159d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOVJHOH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEEMshUOlrUUs3G6dCCgA2lOX1uves%2BuNm11QlFbZ%2BrCAiAjIooCm9wYemW%2FUaKNyNXcyuN6SBFySYtrBdkbfypnoSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtM2xJi%2BopP4dXXaKtwDLUhBX253jSYP8gKT2NNajaecuX3OmpoNLIqJT05K2RrMjzh0Jf%2BuQY3iiV8hszA0bsft9EqQUAnkvfUEtWN3fAvtJtzKCV6fCvqRrdOTbSfFrHLziRwpnxlgHRqLKZ2kWvmINnUX5mt5QBQ3TyP7USczZmSmYY7rna84M%2BT94cWsy%2BQ9f0wzVEKPbLap8FnjxZdJKL0%2BQ4IUmCEt1zAFO80bryMMLlD%2BDXnX8osh13AF5YkKNksbsOTp7eW6HKKiJHDcwnKZsWn2KuOoU7yaarJEytr65xO7v2QY4ZJFaxVy%2BLFfaP1pC1XR9AlSenuKdkFvgevJcbCIkiimUwzdW71CVkptuSbUKrn32BgtyS%2FUGCzhjObIlbeIKv09cJFmztRmrnw9qo6gnF2AHlOr5ze44HmkiYoFMu82ye21FcbACa0D%2BNt8tB6AP4PPdvBNLMMbvPX4xxJ4IZ3WB%2BdvoNQuKZED9OnPOCKs8RoXpuc4zsB1THETtjbl4JY9v%2FIvbym7BKkNZwyCBxVee03Ld3sORK4EJtYde3VlAcBvEEe9IMnEEFLuoy56JrqJOv87sBEIaO4uNKA%2Ft%2BA4T0876oZLeg6r2CXYhvWXtpiywN99X1YjffZee5SrWZIw4bDrvwY6pgHXAcfIFftC2jh1jCizlaXdaUQ0FtWZ1WFeNEF%2Bp%2F52FG4gblt7P7fnPgz1l3isUBX7qZwUZBcNNV4X%2BgdGsVzJ4t6q2EzMBkE2ntsJE0Jc%2Bvos1rd5sTSfCDvp7ug%2FjvkvxVn2BwRwH%2FlmqHwlus2J2heDQhdlVlHBaChACHksvT%2BkPcZgx7rVcBT9%2B5EaEOoQRczSY1mgESBf%2BB26OTgMw7M7mZZu&X-Amz-Signature=6c5c27ef67ab8e007c49001c5d009a651687b4c4258e437ade38410763032b52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOVJHOH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEEMshUOlrUUs3G6dCCgA2lOX1uves%2BuNm11QlFbZ%2BrCAiAjIooCm9wYemW%2FUaKNyNXcyuN6SBFySYtrBdkbfypnoSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtM2xJi%2BopP4dXXaKtwDLUhBX253jSYP8gKT2NNajaecuX3OmpoNLIqJT05K2RrMjzh0Jf%2BuQY3iiV8hszA0bsft9EqQUAnkvfUEtWN3fAvtJtzKCV6fCvqRrdOTbSfFrHLziRwpnxlgHRqLKZ2kWvmINnUX5mt5QBQ3TyP7USczZmSmYY7rna84M%2BT94cWsy%2BQ9f0wzVEKPbLap8FnjxZdJKL0%2BQ4IUmCEt1zAFO80bryMMLlD%2BDXnX8osh13AF5YkKNksbsOTp7eW6HKKiJHDcwnKZsWn2KuOoU7yaarJEytr65xO7v2QY4ZJFaxVy%2BLFfaP1pC1XR9AlSenuKdkFvgevJcbCIkiimUwzdW71CVkptuSbUKrn32BgtyS%2FUGCzhjObIlbeIKv09cJFmztRmrnw9qo6gnF2AHlOr5ze44HmkiYoFMu82ye21FcbACa0D%2BNt8tB6AP4PPdvBNLMMbvPX4xxJ4IZ3WB%2BdvoNQuKZED9OnPOCKs8RoXpuc4zsB1THETtjbl4JY9v%2FIvbym7BKkNZwyCBxVee03Ld3sORK4EJtYde3VlAcBvEEe9IMnEEFLuoy56JrqJOv87sBEIaO4uNKA%2Ft%2BA4T0876oZLeg6r2CXYhvWXtpiywN99X1YjffZee5SrWZIw4bDrvwY6pgHXAcfIFftC2jh1jCizlaXdaUQ0FtWZ1WFeNEF%2Bp%2F52FG4gblt7P7fnPgz1l3isUBX7qZwUZBcNNV4X%2BgdGsVzJ4t6q2EzMBkE2ntsJE0Jc%2Bvos1rd5sTSfCDvp7ug%2FjvkvxVn2BwRwH%2FlmqHwlus2J2heDQhdlVlHBaChACHksvT%2BkPcZgx7rVcBT9%2B5EaEOoQRczSY1mgESBf%2BB26OTgMw7M7mZZu&X-Amz-Signature=a9c653a05dfa2f94b1c3836427a7d12dacd322465be55c6b20cacf078d2a0bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
