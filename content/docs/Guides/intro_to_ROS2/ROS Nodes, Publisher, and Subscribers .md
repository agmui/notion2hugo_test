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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPT64WVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGDdmGGqF3Qv5OfUgdNEzEs0BcwBoRWc5pCqvjjXNn51AiEAw8Z3pj1B%2Bo1%2FdCNaygBxKpSz66p2D26Lz%2BGhczanzSIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCyOtHdHIhm1vgwOvSrcA9FP4FDrSh7uYHN%2Fvi1mNHI8PO%2BMqjNKUkicwGH9o7ItOcN7oLKVxRVgqIQLUiLEYs96HMLykLmcI04kF4MuKWSie%2BMPtO%2Fn1xysG6F1sXSPq7uVe%2FKtXsQbSsm8dpFEzY5qgtHnh0UmE838GYIqv7ijFkMnL%2F70UJcR2ysVLJmuAnC455HptN9oZtxpjuzY0zZ2SGK7IUlgG9qZ1NEdLQ%2Bteqqg8o6dj59RU7NzVz9A29xrTfRUA9GujNmcihLYOsWJORTbxzdCFMelE5FvdtZ8AZ6MN9r93LFn24iLIU4dtnRWKJNEIdj52AyYN0kn%2FI0Teo8siuqKcJTrMD%2F5UHvaqChv1hqqJaHD42KWapnJlb1TnCKvr8BVEjV7DVaQvv8p0jOgCU6q91AkXLnJNfKXIffCrOnBOuaBQlXUsUwnnjo0qEJKo68w12FYN8V3u56I9hvLoOzB62FQrBgHYNviOIOIGhoFTgqiin%2BrZjeq0oECb80%2FP2bVEWMIV50m961KAPF0Bbaw5SrmR2aArSgyjiovZwP%2F2BGEoZ79VwaTyNR3Lmam1cnTxsVnVD%2FRtx%2Fvequj%2B9DKCw7gFAPT0qoXaS5wa0836CRhlfltCzIivcwzX7yKuKR7ojlbMKPtkb0GOqUBioI5D5FVrr5FD8vyi2Sld%2B%2FauMw3ZPypvfPMmgg9%2F1KHeIZ5naNs%2FMYPwio0BquupM1IeDxW0046M%2FBMcnylHp%2FQ3o5nsgT8xnVQSEWHK9GBZtDwfsAx188wjENHuAzceaZ7JTfMvGp8PJih5LALn%2BPhjnD70aPDo5%2FIKPlJnRT4fcoDJpYifmO7bTOTzKMsp7LgLqU04ZS858S%2B%2Fd5F0d6qKmsu&X-Amz-Signature=522f6cd9d61ccbc34e28695b11bf75b17c3364f22e95eab058bf3081d348a765&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPT64WVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGDdmGGqF3Qv5OfUgdNEzEs0BcwBoRWc5pCqvjjXNn51AiEAw8Z3pj1B%2Bo1%2FdCNaygBxKpSz66p2D26Lz%2BGhczanzSIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCyOtHdHIhm1vgwOvSrcA9FP4FDrSh7uYHN%2Fvi1mNHI8PO%2BMqjNKUkicwGH9o7ItOcN7oLKVxRVgqIQLUiLEYs96HMLykLmcI04kF4MuKWSie%2BMPtO%2Fn1xysG6F1sXSPq7uVe%2FKtXsQbSsm8dpFEzY5qgtHnh0UmE838GYIqv7ijFkMnL%2F70UJcR2ysVLJmuAnC455HptN9oZtxpjuzY0zZ2SGK7IUlgG9qZ1NEdLQ%2Bteqqg8o6dj59RU7NzVz9A29xrTfRUA9GujNmcihLYOsWJORTbxzdCFMelE5FvdtZ8AZ6MN9r93LFn24iLIU4dtnRWKJNEIdj52AyYN0kn%2FI0Teo8siuqKcJTrMD%2F5UHvaqChv1hqqJaHD42KWapnJlb1TnCKvr8BVEjV7DVaQvv8p0jOgCU6q91AkXLnJNfKXIffCrOnBOuaBQlXUsUwnnjo0qEJKo68w12FYN8V3u56I9hvLoOzB62FQrBgHYNviOIOIGhoFTgqiin%2BrZjeq0oECb80%2FP2bVEWMIV50m961KAPF0Bbaw5SrmR2aArSgyjiovZwP%2F2BGEoZ79VwaTyNR3Lmam1cnTxsVnVD%2FRtx%2Fvequj%2B9DKCw7gFAPT0qoXaS5wa0836CRhlfltCzIivcwzX7yKuKR7ojlbMKPtkb0GOqUBioI5D5FVrr5FD8vyi2Sld%2B%2FauMw3ZPypvfPMmgg9%2F1KHeIZ5naNs%2FMYPwio0BquupM1IeDxW0046M%2FBMcnylHp%2FQ3o5nsgT8xnVQSEWHK9GBZtDwfsAx188wjENHuAzceaZ7JTfMvGp8PJih5LALn%2BPhjnD70aPDo5%2FIKPlJnRT4fcoDJpYifmO7bTOTzKMsp7LgLqU04ZS858S%2B%2Fd5F0d6qKmsu&X-Amz-Signature=0e8077eca68cdba4d84f47a66752c283958e1b4098f0e64bca4afd4c13ad925e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPT64WVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGDdmGGqF3Qv5OfUgdNEzEs0BcwBoRWc5pCqvjjXNn51AiEAw8Z3pj1B%2Bo1%2FdCNaygBxKpSz66p2D26Lz%2BGhczanzSIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCyOtHdHIhm1vgwOvSrcA9FP4FDrSh7uYHN%2Fvi1mNHI8PO%2BMqjNKUkicwGH9o7ItOcN7oLKVxRVgqIQLUiLEYs96HMLykLmcI04kF4MuKWSie%2BMPtO%2Fn1xysG6F1sXSPq7uVe%2FKtXsQbSsm8dpFEzY5qgtHnh0UmE838GYIqv7ijFkMnL%2F70UJcR2ysVLJmuAnC455HptN9oZtxpjuzY0zZ2SGK7IUlgG9qZ1NEdLQ%2Bteqqg8o6dj59RU7NzVz9A29xrTfRUA9GujNmcihLYOsWJORTbxzdCFMelE5FvdtZ8AZ6MN9r93LFn24iLIU4dtnRWKJNEIdj52AyYN0kn%2FI0Teo8siuqKcJTrMD%2F5UHvaqChv1hqqJaHD42KWapnJlb1TnCKvr8BVEjV7DVaQvv8p0jOgCU6q91AkXLnJNfKXIffCrOnBOuaBQlXUsUwnnjo0qEJKo68w12FYN8V3u56I9hvLoOzB62FQrBgHYNviOIOIGhoFTgqiin%2BrZjeq0oECb80%2FP2bVEWMIV50m961KAPF0Bbaw5SrmR2aArSgyjiovZwP%2F2BGEoZ79VwaTyNR3Lmam1cnTxsVnVD%2FRtx%2Fvequj%2B9DKCw7gFAPT0qoXaS5wa0836CRhlfltCzIivcwzX7yKuKR7ojlbMKPtkb0GOqUBioI5D5FVrr5FD8vyi2Sld%2B%2FauMw3ZPypvfPMmgg9%2F1KHeIZ5naNs%2FMYPwio0BquupM1IeDxW0046M%2FBMcnylHp%2FQ3o5nsgT8xnVQSEWHK9GBZtDwfsAx188wjENHuAzceaZ7JTfMvGp8PJih5LALn%2BPhjnD70aPDo5%2FIKPlJnRT4fcoDJpYifmO7bTOTzKMsp7LgLqU04ZS858S%2B%2Fd5F0d6qKmsu&X-Amz-Signature=f6bb8fd03976830777b3efcc1afbaf5c878cd333e6f53d15e6fec842016753c5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPT64WVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGDdmGGqF3Qv5OfUgdNEzEs0BcwBoRWc5pCqvjjXNn51AiEAw8Z3pj1B%2Bo1%2FdCNaygBxKpSz66p2D26Lz%2BGhczanzSIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCyOtHdHIhm1vgwOvSrcA9FP4FDrSh7uYHN%2Fvi1mNHI8PO%2BMqjNKUkicwGH9o7ItOcN7oLKVxRVgqIQLUiLEYs96HMLykLmcI04kF4MuKWSie%2BMPtO%2Fn1xysG6F1sXSPq7uVe%2FKtXsQbSsm8dpFEzY5qgtHnh0UmE838GYIqv7ijFkMnL%2F70UJcR2ysVLJmuAnC455HptN9oZtxpjuzY0zZ2SGK7IUlgG9qZ1NEdLQ%2Bteqqg8o6dj59RU7NzVz9A29xrTfRUA9GujNmcihLYOsWJORTbxzdCFMelE5FvdtZ8AZ6MN9r93LFn24iLIU4dtnRWKJNEIdj52AyYN0kn%2FI0Teo8siuqKcJTrMD%2F5UHvaqChv1hqqJaHD42KWapnJlb1TnCKvr8BVEjV7DVaQvv8p0jOgCU6q91AkXLnJNfKXIffCrOnBOuaBQlXUsUwnnjo0qEJKo68w12FYN8V3u56I9hvLoOzB62FQrBgHYNviOIOIGhoFTgqiin%2BrZjeq0oECb80%2FP2bVEWMIV50m961KAPF0Bbaw5SrmR2aArSgyjiovZwP%2F2BGEoZ79VwaTyNR3Lmam1cnTxsVnVD%2FRtx%2Fvequj%2B9DKCw7gFAPT0qoXaS5wa0836CRhlfltCzIivcwzX7yKuKR7ojlbMKPtkb0GOqUBioI5D5FVrr5FD8vyi2Sld%2B%2FauMw3ZPypvfPMmgg9%2F1KHeIZ5naNs%2FMYPwio0BquupM1IeDxW0046M%2FBMcnylHp%2FQ3o5nsgT8xnVQSEWHK9GBZtDwfsAx188wjENHuAzceaZ7JTfMvGp8PJih5LALn%2BPhjnD70aPDo5%2FIKPlJnRT4fcoDJpYifmO7bTOTzKMsp7LgLqU04ZS858S%2B%2Fd5F0d6qKmsu&X-Amz-Signature=7cdfde2cc5be57937fae9f8d0747acfc3beb58bfbf4a24a1b19dc7e058588027&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPT64WVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGDdmGGqF3Qv5OfUgdNEzEs0BcwBoRWc5pCqvjjXNn51AiEAw8Z3pj1B%2Bo1%2FdCNaygBxKpSz66p2D26Lz%2BGhczanzSIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCyOtHdHIhm1vgwOvSrcA9FP4FDrSh7uYHN%2Fvi1mNHI8PO%2BMqjNKUkicwGH9o7ItOcN7oLKVxRVgqIQLUiLEYs96HMLykLmcI04kF4MuKWSie%2BMPtO%2Fn1xysG6F1sXSPq7uVe%2FKtXsQbSsm8dpFEzY5qgtHnh0UmE838GYIqv7ijFkMnL%2F70UJcR2ysVLJmuAnC455HptN9oZtxpjuzY0zZ2SGK7IUlgG9qZ1NEdLQ%2Bteqqg8o6dj59RU7NzVz9A29xrTfRUA9GujNmcihLYOsWJORTbxzdCFMelE5FvdtZ8AZ6MN9r93LFn24iLIU4dtnRWKJNEIdj52AyYN0kn%2FI0Teo8siuqKcJTrMD%2F5UHvaqChv1hqqJaHD42KWapnJlb1TnCKvr8BVEjV7DVaQvv8p0jOgCU6q91AkXLnJNfKXIffCrOnBOuaBQlXUsUwnnjo0qEJKo68w12FYN8V3u56I9hvLoOzB62FQrBgHYNviOIOIGhoFTgqiin%2BrZjeq0oECb80%2FP2bVEWMIV50m961KAPF0Bbaw5SrmR2aArSgyjiovZwP%2F2BGEoZ79VwaTyNR3Lmam1cnTxsVnVD%2FRtx%2Fvequj%2B9DKCw7gFAPT0qoXaS5wa0836CRhlfltCzIivcwzX7yKuKR7ojlbMKPtkb0GOqUBioI5D5FVrr5FD8vyi2Sld%2B%2FauMw3ZPypvfPMmgg9%2F1KHeIZ5naNs%2FMYPwio0BquupM1IeDxW0046M%2FBMcnylHp%2FQ3o5nsgT8xnVQSEWHK9GBZtDwfsAx188wjENHuAzceaZ7JTfMvGp8PJih5LALn%2BPhjnD70aPDo5%2FIKPlJnRT4fcoDJpYifmO7bTOTzKMsp7LgLqU04ZS858S%2B%2Fd5F0d6qKmsu&X-Amz-Signature=130aeeb03300d5fe6ac8e9ce6510019a561522728b87e0cdda334043f38a2872&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPT64WVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGDdmGGqF3Qv5OfUgdNEzEs0BcwBoRWc5pCqvjjXNn51AiEAw8Z3pj1B%2Bo1%2FdCNaygBxKpSz66p2D26Lz%2BGhczanzSIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCyOtHdHIhm1vgwOvSrcA9FP4FDrSh7uYHN%2Fvi1mNHI8PO%2BMqjNKUkicwGH9o7ItOcN7oLKVxRVgqIQLUiLEYs96HMLykLmcI04kF4MuKWSie%2BMPtO%2Fn1xysG6F1sXSPq7uVe%2FKtXsQbSsm8dpFEzY5qgtHnh0UmE838GYIqv7ijFkMnL%2F70UJcR2ysVLJmuAnC455HptN9oZtxpjuzY0zZ2SGK7IUlgG9qZ1NEdLQ%2Bteqqg8o6dj59RU7NzVz9A29xrTfRUA9GujNmcihLYOsWJORTbxzdCFMelE5FvdtZ8AZ6MN9r93LFn24iLIU4dtnRWKJNEIdj52AyYN0kn%2FI0Teo8siuqKcJTrMD%2F5UHvaqChv1hqqJaHD42KWapnJlb1TnCKvr8BVEjV7DVaQvv8p0jOgCU6q91AkXLnJNfKXIffCrOnBOuaBQlXUsUwnnjo0qEJKo68w12FYN8V3u56I9hvLoOzB62FQrBgHYNviOIOIGhoFTgqiin%2BrZjeq0oECb80%2FP2bVEWMIV50m961KAPF0Bbaw5SrmR2aArSgyjiovZwP%2F2BGEoZ79VwaTyNR3Lmam1cnTxsVnVD%2FRtx%2Fvequj%2B9DKCw7gFAPT0qoXaS5wa0836CRhlfltCzIivcwzX7yKuKR7ojlbMKPtkb0GOqUBioI5D5FVrr5FD8vyi2Sld%2B%2FauMw3ZPypvfPMmgg9%2F1KHeIZ5naNs%2FMYPwio0BquupM1IeDxW0046M%2FBMcnylHp%2FQ3o5nsgT8xnVQSEWHK9GBZtDwfsAx188wjENHuAzceaZ7JTfMvGp8PJih5LALn%2BPhjnD70aPDo5%2FIKPlJnRT4fcoDJpYifmO7bTOTzKMsp7LgLqU04ZS858S%2B%2Fd5F0d6qKmsu&X-Amz-Signature=3f4513b2295688e52240900131c4185cc6594e450738936d347a3146a87d9143&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPT64WVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGDdmGGqF3Qv5OfUgdNEzEs0BcwBoRWc5pCqvjjXNn51AiEAw8Z3pj1B%2Bo1%2FdCNaygBxKpSz66p2D26Lz%2BGhczanzSIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCyOtHdHIhm1vgwOvSrcA9FP4FDrSh7uYHN%2Fvi1mNHI8PO%2BMqjNKUkicwGH9o7ItOcN7oLKVxRVgqIQLUiLEYs96HMLykLmcI04kF4MuKWSie%2BMPtO%2Fn1xysG6F1sXSPq7uVe%2FKtXsQbSsm8dpFEzY5qgtHnh0UmE838GYIqv7ijFkMnL%2F70UJcR2ysVLJmuAnC455HptN9oZtxpjuzY0zZ2SGK7IUlgG9qZ1NEdLQ%2Bteqqg8o6dj59RU7NzVz9A29xrTfRUA9GujNmcihLYOsWJORTbxzdCFMelE5FvdtZ8AZ6MN9r93LFn24iLIU4dtnRWKJNEIdj52AyYN0kn%2FI0Teo8siuqKcJTrMD%2F5UHvaqChv1hqqJaHD42KWapnJlb1TnCKvr8BVEjV7DVaQvv8p0jOgCU6q91AkXLnJNfKXIffCrOnBOuaBQlXUsUwnnjo0qEJKo68w12FYN8V3u56I9hvLoOzB62FQrBgHYNviOIOIGhoFTgqiin%2BrZjeq0oECb80%2FP2bVEWMIV50m961KAPF0Bbaw5SrmR2aArSgyjiovZwP%2F2BGEoZ79VwaTyNR3Lmam1cnTxsVnVD%2FRtx%2Fvequj%2B9DKCw7gFAPT0qoXaS5wa0836CRhlfltCzIivcwzX7yKuKR7ojlbMKPtkb0GOqUBioI5D5FVrr5FD8vyi2Sld%2B%2FauMw3ZPypvfPMmgg9%2F1KHeIZ5naNs%2FMYPwio0BquupM1IeDxW0046M%2FBMcnylHp%2FQ3o5nsgT8xnVQSEWHK9GBZtDwfsAx188wjENHuAzceaZ7JTfMvGp8PJih5LALn%2BPhjnD70aPDo5%2FIKPlJnRT4fcoDJpYifmO7bTOTzKMsp7LgLqU04ZS858S%2B%2Fd5F0d6qKmsu&X-Amz-Signature=9167ff02cac681e369fa9c0c629416136faf28b7dbc940038f8dfd2282bc374f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPT64WVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGDdmGGqF3Qv5OfUgdNEzEs0BcwBoRWc5pCqvjjXNn51AiEAw8Z3pj1B%2Bo1%2FdCNaygBxKpSz66p2D26Lz%2BGhczanzSIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCyOtHdHIhm1vgwOvSrcA9FP4FDrSh7uYHN%2Fvi1mNHI8PO%2BMqjNKUkicwGH9o7ItOcN7oLKVxRVgqIQLUiLEYs96HMLykLmcI04kF4MuKWSie%2BMPtO%2Fn1xysG6F1sXSPq7uVe%2FKtXsQbSsm8dpFEzY5qgtHnh0UmE838GYIqv7ijFkMnL%2F70UJcR2ysVLJmuAnC455HptN9oZtxpjuzY0zZ2SGK7IUlgG9qZ1NEdLQ%2Bteqqg8o6dj59RU7NzVz9A29xrTfRUA9GujNmcihLYOsWJORTbxzdCFMelE5FvdtZ8AZ6MN9r93LFn24iLIU4dtnRWKJNEIdj52AyYN0kn%2FI0Teo8siuqKcJTrMD%2F5UHvaqChv1hqqJaHD42KWapnJlb1TnCKvr8BVEjV7DVaQvv8p0jOgCU6q91AkXLnJNfKXIffCrOnBOuaBQlXUsUwnnjo0qEJKo68w12FYN8V3u56I9hvLoOzB62FQrBgHYNviOIOIGhoFTgqiin%2BrZjeq0oECb80%2FP2bVEWMIV50m961KAPF0Bbaw5SrmR2aArSgyjiovZwP%2F2BGEoZ79VwaTyNR3Lmam1cnTxsVnVD%2FRtx%2Fvequj%2B9DKCw7gFAPT0qoXaS5wa0836CRhlfltCzIivcwzX7yKuKR7ojlbMKPtkb0GOqUBioI5D5FVrr5FD8vyi2Sld%2B%2FauMw3ZPypvfPMmgg9%2F1KHeIZ5naNs%2FMYPwio0BquupM1IeDxW0046M%2FBMcnylHp%2FQ3o5nsgT8xnVQSEWHK9GBZtDwfsAx188wjENHuAzceaZ7JTfMvGp8PJih5LALn%2BPhjnD70aPDo5%2FIKPlJnRT4fcoDJpYifmO7bTOTzKMsp7LgLqU04ZS858S%2B%2Fd5F0d6qKmsu&X-Amz-Signature=c5e6517cc12fd142c47b7f7316302c1584893726847b95a0b2abc28fc4b3ed0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
