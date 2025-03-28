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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZCO5AZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqdVtUpZEgewohHTnDAlUyh7EsO9c3IbQO557%2BnFDBVgIgBAwKDcwis%2BvT2Ut6uCCaagOIYMwMRck44YHfFDEJ00sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEvei2ZRalbArcUDyircAxXSmNAPa8jD6frRa7g49N0tn%2BP2Z2QbfKUma2nE2Q9pTEcYNqd12dBWCAjuBl8pZrwC%2Bb2xMtw8DwVvu6thwdtjkZgmaSEJTwlSShD%2BFjqeeasLkLsr%2B0SvtqkyS3rU4Eh52pyzk3P2o5sYGAp9%2FHng5pfCXHefdZjZ28256Ba%2FNEBru%2Bee9VRudUhaPoJumouSMBdV8XF4elq2ZqcLJ8aMgVbVZFagGGIbyPeAc4brrddmsJIM4dooFoiCgFaweLg9sg8Hm6K%2BkSHHQIM6Pn3HMLQaL6E44WNOuE8MBEdhZqnzcbjq8GL1o1d%2BRIA67wLy5F43jVrnOoswJVSzbciyAair5XfY%2B1umIU1xn0BTxHdT8ovRTzi4HAsCyKOZLtFhBO1QXPossFsaGbvOazns1yAFXdKFCxtTnBXsI0NecjMZ8VWjXz86yfOHC3Si8h8RBySEqnQixR%2BmMo5vzFuHD24Yy6z5nVTDJB%2BWMXGNaXSL6Q6%2FGe0gVVoba7sY7SxZORr30ADQU3WGhRNgd%2F4g2F%2FDMMA0EI1mV0B%2Bw0yV7KbY71k74cnWFf1TvU7BJYL82FX19CExVgL74uzoKYTmU1J0%2BzUVBtgrttZZbNBQhRbbQfocdad3KcuJMIjtmr8GOqUBp9wWhjmneRGuoqgEZgSfUn32WCwlrt8ODpKZ6oWG4c9suCNoV7eH8QButthr%2FBP%2BJwetrgsk4zzz3Kdq%2FrdOcXEXvIQdQD9af%2FyMx2%2B5qXy%2Fo29shlmTmP4na2N4Wq0SsHLO%2FePiLVFTMrLf%2FNZUIMpnyIkPsf%2FBrmOQNMyt5pM9Lsm3Fp3O9f08w%2BbidlFUlGbLXGcGKHAg9Shu3JdwgphBDdcD&X-Amz-Signature=07cb9a48c987f15f477a997217765186d0f761bb0abf6a99a9e9bc392296cad3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZCO5AZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqdVtUpZEgewohHTnDAlUyh7EsO9c3IbQO557%2BnFDBVgIgBAwKDcwis%2BvT2Ut6uCCaagOIYMwMRck44YHfFDEJ00sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEvei2ZRalbArcUDyircAxXSmNAPa8jD6frRa7g49N0tn%2BP2Z2QbfKUma2nE2Q9pTEcYNqd12dBWCAjuBl8pZrwC%2Bb2xMtw8DwVvu6thwdtjkZgmaSEJTwlSShD%2BFjqeeasLkLsr%2B0SvtqkyS3rU4Eh52pyzk3P2o5sYGAp9%2FHng5pfCXHefdZjZ28256Ba%2FNEBru%2Bee9VRudUhaPoJumouSMBdV8XF4elq2ZqcLJ8aMgVbVZFagGGIbyPeAc4brrddmsJIM4dooFoiCgFaweLg9sg8Hm6K%2BkSHHQIM6Pn3HMLQaL6E44WNOuE8MBEdhZqnzcbjq8GL1o1d%2BRIA67wLy5F43jVrnOoswJVSzbciyAair5XfY%2B1umIU1xn0BTxHdT8ovRTzi4HAsCyKOZLtFhBO1QXPossFsaGbvOazns1yAFXdKFCxtTnBXsI0NecjMZ8VWjXz86yfOHC3Si8h8RBySEqnQixR%2BmMo5vzFuHD24Yy6z5nVTDJB%2BWMXGNaXSL6Q6%2FGe0gVVoba7sY7SxZORr30ADQU3WGhRNgd%2F4g2F%2FDMMA0EI1mV0B%2Bw0yV7KbY71k74cnWFf1TvU7BJYL82FX19CExVgL74uzoKYTmU1J0%2BzUVBtgrttZZbNBQhRbbQfocdad3KcuJMIjtmr8GOqUBp9wWhjmneRGuoqgEZgSfUn32WCwlrt8ODpKZ6oWG4c9suCNoV7eH8QButthr%2FBP%2BJwetrgsk4zzz3Kdq%2FrdOcXEXvIQdQD9af%2FyMx2%2B5qXy%2Fo29shlmTmP4na2N4Wq0SsHLO%2FePiLVFTMrLf%2FNZUIMpnyIkPsf%2FBrmOQNMyt5pM9Lsm3Fp3O9f08w%2BbidlFUlGbLXGcGKHAg9Shu3JdwgphBDdcD&X-Amz-Signature=fe8a76bcc033248b2b587f1e39b9ef96fad8bdad2342c819bb733fa3d91c35aa&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZCO5AZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqdVtUpZEgewohHTnDAlUyh7EsO9c3IbQO557%2BnFDBVgIgBAwKDcwis%2BvT2Ut6uCCaagOIYMwMRck44YHfFDEJ00sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEvei2ZRalbArcUDyircAxXSmNAPa8jD6frRa7g49N0tn%2BP2Z2QbfKUma2nE2Q9pTEcYNqd12dBWCAjuBl8pZrwC%2Bb2xMtw8DwVvu6thwdtjkZgmaSEJTwlSShD%2BFjqeeasLkLsr%2B0SvtqkyS3rU4Eh52pyzk3P2o5sYGAp9%2FHng5pfCXHefdZjZ28256Ba%2FNEBru%2Bee9VRudUhaPoJumouSMBdV8XF4elq2ZqcLJ8aMgVbVZFagGGIbyPeAc4brrddmsJIM4dooFoiCgFaweLg9sg8Hm6K%2BkSHHQIM6Pn3HMLQaL6E44WNOuE8MBEdhZqnzcbjq8GL1o1d%2BRIA67wLy5F43jVrnOoswJVSzbciyAair5XfY%2B1umIU1xn0BTxHdT8ovRTzi4HAsCyKOZLtFhBO1QXPossFsaGbvOazns1yAFXdKFCxtTnBXsI0NecjMZ8VWjXz86yfOHC3Si8h8RBySEqnQixR%2BmMo5vzFuHD24Yy6z5nVTDJB%2BWMXGNaXSL6Q6%2FGe0gVVoba7sY7SxZORr30ADQU3WGhRNgd%2F4g2F%2FDMMA0EI1mV0B%2Bw0yV7KbY71k74cnWFf1TvU7BJYL82FX19CExVgL74uzoKYTmU1J0%2BzUVBtgrttZZbNBQhRbbQfocdad3KcuJMIjtmr8GOqUBp9wWhjmneRGuoqgEZgSfUn32WCwlrt8ODpKZ6oWG4c9suCNoV7eH8QButthr%2FBP%2BJwetrgsk4zzz3Kdq%2FrdOcXEXvIQdQD9af%2FyMx2%2B5qXy%2Fo29shlmTmP4na2N4Wq0SsHLO%2FePiLVFTMrLf%2FNZUIMpnyIkPsf%2FBrmOQNMyt5pM9Lsm3Fp3O9f08w%2BbidlFUlGbLXGcGKHAg9Shu3JdwgphBDdcD&X-Amz-Signature=6c68a98a28a3e816fa2fa7ae705687d332503381672f95aa02b0f42409a0fbda&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZCO5AZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqdVtUpZEgewohHTnDAlUyh7EsO9c3IbQO557%2BnFDBVgIgBAwKDcwis%2BvT2Ut6uCCaagOIYMwMRck44YHfFDEJ00sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEvei2ZRalbArcUDyircAxXSmNAPa8jD6frRa7g49N0tn%2BP2Z2QbfKUma2nE2Q9pTEcYNqd12dBWCAjuBl8pZrwC%2Bb2xMtw8DwVvu6thwdtjkZgmaSEJTwlSShD%2BFjqeeasLkLsr%2B0SvtqkyS3rU4Eh52pyzk3P2o5sYGAp9%2FHng5pfCXHefdZjZ28256Ba%2FNEBru%2Bee9VRudUhaPoJumouSMBdV8XF4elq2ZqcLJ8aMgVbVZFagGGIbyPeAc4brrddmsJIM4dooFoiCgFaweLg9sg8Hm6K%2BkSHHQIM6Pn3HMLQaL6E44WNOuE8MBEdhZqnzcbjq8GL1o1d%2BRIA67wLy5F43jVrnOoswJVSzbciyAair5XfY%2B1umIU1xn0BTxHdT8ovRTzi4HAsCyKOZLtFhBO1QXPossFsaGbvOazns1yAFXdKFCxtTnBXsI0NecjMZ8VWjXz86yfOHC3Si8h8RBySEqnQixR%2BmMo5vzFuHD24Yy6z5nVTDJB%2BWMXGNaXSL6Q6%2FGe0gVVoba7sY7SxZORr30ADQU3WGhRNgd%2F4g2F%2FDMMA0EI1mV0B%2Bw0yV7KbY71k74cnWFf1TvU7BJYL82FX19CExVgL74uzoKYTmU1J0%2BzUVBtgrttZZbNBQhRbbQfocdad3KcuJMIjtmr8GOqUBp9wWhjmneRGuoqgEZgSfUn32WCwlrt8ODpKZ6oWG4c9suCNoV7eH8QButthr%2FBP%2BJwetrgsk4zzz3Kdq%2FrdOcXEXvIQdQD9af%2FyMx2%2B5qXy%2Fo29shlmTmP4na2N4Wq0SsHLO%2FePiLVFTMrLf%2FNZUIMpnyIkPsf%2FBrmOQNMyt5pM9Lsm3Fp3O9f08w%2BbidlFUlGbLXGcGKHAg9Shu3JdwgphBDdcD&X-Amz-Signature=3cf2559b25da60b7972dbac1f23d2fb29c504753e8bb1b063b665256b11b6415&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZCO5AZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqdVtUpZEgewohHTnDAlUyh7EsO9c3IbQO557%2BnFDBVgIgBAwKDcwis%2BvT2Ut6uCCaagOIYMwMRck44YHfFDEJ00sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEvei2ZRalbArcUDyircAxXSmNAPa8jD6frRa7g49N0tn%2BP2Z2QbfKUma2nE2Q9pTEcYNqd12dBWCAjuBl8pZrwC%2Bb2xMtw8DwVvu6thwdtjkZgmaSEJTwlSShD%2BFjqeeasLkLsr%2B0SvtqkyS3rU4Eh52pyzk3P2o5sYGAp9%2FHng5pfCXHefdZjZ28256Ba%2FNEBru%2Bee9VRudUhaPoJumouSMBdV8XF4elq2ZqcLJ8aMgVbVZFagGGIbyPeAc4brrddmsJIM4dooFoiCgFaweLg9sg8Hm6K%2BkSHHQIM6Pn3HMLQaL6E44WNOuE8MBEdhZqnzcbjq8GL1o1d%2BRIA67wLy5F43jVrnOoswJVSzbciyAair5XfY%2B1umIU1xn0BTxHdT8ovRTzi4HAsCyKOZLtFhBO1QXPossFsaGbvOazns1yAFXdKFCxtTnBXsI0NecjMZ8VWjXz86yfOHC3Si8h8RBySEqnQixR%2BmMo5vzFuHD24Yy6z5nVTDJB%2BWMXGNaXSL6Q6%2FGe0gVVoba7sY7SxZORr30ADQU3WGhRNgd%2F4g2F%2FDMMA0EI1mV0B%2Bw0yV7KbY71k74cnWFf1TvU7BJYL82FX19CExVgL74uzoKYTmU1J0%2BzUVBtgrttZZbNBQhRbbQfocdad3KcuJMIjtmr8GOqUBp9wWhjmneRGuoqgEZgSfUn32WCwlrt8ODpKZ6oWG4c9suCNoV7eH8QButthr%2FBP%2BJwetrgsk4zzz3Kdq%2FrdOcXEXvIQdQD9af%2FyMx2%2B5qXy%2Fo29shlmTmP4na2N4Wq0SsHLO%2FePiLVFTMrLf%2FNZUIMpnyIkPsf%2FBrmOQNMyt5pM9Lsm3Fp3O9f08w%2BbidlFUlGbLXGcGKHAg9Shu3JdwgphBDdcD&X-Amz-Signature=487c6646cb0b01fad850db760e83e949aff537938cb1ad87c14a6c0144582ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZCO5AZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqdVtUpZEgewohHTnDAlUyh7EsO9c3IbQO557%2BnFDBVgIgBAwKDcwis%2BvT2Ut6uCCaagOIYMwMRck44YHfFDEJ00sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEvei2ZRalbArcUDyircAxXSmNAPa8jD6frRa7g49N0tn%2BP2Z2QbfKUma2nE2Q9pTEcYNqd12dBWCAjuBl8pZrwC%2Bb2xMtw8DwVvu6thwdtjkZgmaSEJTwlSShD%2BFjqeeasLkLsr%2B0SvtqkyS3rU4Eh52pyzk3P2o5sYGAp9%2FHng5pfCXHefdZjZ28256Ba%2FNEBru%2Bee9VRudUhaPoJumouSMBdV8XF4elq2ZqcLJ8aMgVbVZFagGGIbyPeAc4brrddmsJIM4dooFoiCgFaweLg9sg8Hm6K%2BkSHHQIM6Pn3HMLQaL6E44WNOuE8MBEdhZqnzcbjq8GL1o1d%2BRIA67wLy5F43jVrnOoswJVSzbciyAair5XfY%2B1umIU1xn0BTxHdT8ovRTzi4HAsCyKOZLtFhBO1QXPossFsaGbvOazns1yAFXdKFCxtTnBXsI0NecjMZ8VWjXz86yfOHC3Si8h8RBySEqnQixR%2BmMo5vzFuHD24Yy6z5nVTDJB%2BWMXGNaXSL6Q6%2FGe0gVVoba7sY7SxZORr30ADQU3WGhRNgd%2F4g2F%2FDMMA0EI1mV0B%2Bw0yV7KbY71k74cnWFf1TvU7BJYL82FX19CExVgL74uzoKYTmU1J0%2BzUVBtgrttZZbNBQhRbbQfocdad3KcuJMIjtmr8GOqUBp9wWhjmneRGuoqgEZgSfUn32WCwlrt8ODpKZ6oWG4c9suCNoV7eH8QButthr%2FBP%2BJwetrgsk4zzz3Kdq%2FrdOcXEXvIQdQD9af%2FyMx2%2B5qXy%2Fo29shlmTmP4na2N4Wq0SsHLO%2FePiLVFTMrLf%2FNZUIMpnyIkPsf%2FBrmOQNMyt5pM9Lsm3Fp3O9f08w%2BbidlFUlGbLXGcGKHAg9Shu3JdwgphBDdcD&X-Amz-Signature=7f8073709a042a0933b51fdc91802ba3834f66639e696e6b5894cfcda65c5305&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZCO5AZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqdVtUpZEgewohHTnDAlUyh7EsO9c3IbQO557%2BnFDBVgIgBAwKDcwis%2BvT2Ut6uCCaagOIYMwMRck44YHfFDEJ00sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEvei2ZRalbArcUDyircAxXSmNAPa8jD6frRa7g49N0tn%2BP2Z2QbfKUma2nE2Q9pTEcYNqd12dBWCAjuBl8pZrwC%2Bb2xMtw8DwVvu6thwdtjkZgmaSEJTwlSShD%2BFjqeeasLkLsr%2B0SvtqkyS3rU4Eh52pyzk3P2o5sYGAp9%2FHng5pfCXHefdZjZ28256Ba%2FNEBru%2Bee9VRudUhaPoJumouSMBdV8XF4elq2ZqcLJ8aMgVbVZFagGGIbyPeAc4brrddmsJIM4dooFoiCgFaweLg9sg8Hm6K%2BkSHHQIM6Pn3HMLQaL6E44WNOuE8MBEdhZqnzcbjq8GL1o1d%2BRIA67wLy5F43jVrnOoswJVSzbciyAair5XfY%2B1umIU1xn0BTxHdT8ovRTzi4HAsCyKOZLtFhBO1QXPossFsaGbvOazns1yAFXdKFCxtTnBXsI0NecjMZ8VWjXz86yfOHC3Si8h8RBySEqnQixR%2BmMo5vzFuHD24Yy6z5nVTDJB%2BWMXGNaXSL6Q6%2FGe0gVVoba7sY7SxZORr30ADQU3WGhRNgd%2F4g2F%2FDMMA0EI1mV0B%2Bw0yV7KbY71k74cnWFf1TvU7BJYL82FX19CExVgL74uzoKYTmU1J0%2BzUVBtgrttZZbNBQhRbbQfocdad3KcuJMIjtmr8GOqUBp9wWhjmneRGuoqgEZgSfUn32WCwlrt8ODpKZ6oWG4c9suCNoV7eH8QButthr%2FBP%2BJwetrgsk4zzz3Kdq%2FrdOcXEXvIQdQD9af%2FyMx2%2B5qXy%2Fo29shlmTmP4na2N4Wq0SsHLO%2FePiLVFTMrLf%2FNZUIMpnyIkPsf%2FBrmOQNMyt5pM9Lsm3Fp3O9f08w%2BbidlFUlGbLXGcGKHAg9Shu3JdwgphBDdcD&X-Amz-Signature=93896ff3fb57846ea3964978348341bfee0902583e6a5f033d6068c797bb2537&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OZCO5AZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqdVtUpZEgewohHTnDAlUyh7EsO9c3IbQO557%2BnFDBVgIgBAwKDcwis%2BvT2Ut6uCCaagOIYMwMRck44YHfFDEJ00sq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEvei2ZRalbArcUDyircAxXSmNAPa8jD6frRa7g49N0tn%2BP2Z2QbfKUma2nE2Q9pTEcYNqd12dBWCAjuBl8pZrwC%2Bb2xMtw8DwVvu6thwdtjkZgmaSEJTwlSShD%2BFjqeeasLkLsr%2B0SvtqkyS3rU4Eh52pyzk3P2o5sYGAp9%2FHng5pfCXHefdZjZ28256Ba%2FNEBru%2Bee9VRudUhaPoJumouSMBdV8XF4elq2ZqcLJ8aMgVbVZFagGGIbyPeAc4brrddmsJIM4dooFoiCgFaweLg9sg8Hm6K%2BkSHHQIM6Pn3HMLQaL6E44WNOuE8MBEdhZqnzcbjq8GL1o1d%2BRIA67wLy5F43jVrnOoswJVSzbciyAair5XfY%2B1umIU1xn0BTxHdT8ovRTzi4HAsCyKOZLtFhBO1QXPossFsaGbvOazns1yAFXdKFCxtTnBXsI0NecjMZ8VWjXz86yfOHC3Si8h8RBySEqnQixR%2BmMo5vzFuHD24Yy6z5nVTDJB%2BWMXGNaXSL6Q6%2FGe0gVVoba7sY7SxZORr30ADQU3WGhRNgd%2F4g2F%2FDMMA0EI1mV0B%2Bw0yV7KbY71k74cnWFf1TvU7BJYL82FX19CExVgL74uzoKYTmU1J0%2BzUVBtgrttZZbNBQhRbbQfocdad3KcuJMIjtmr8GOqUBp9wWhjmneRGuoqgEZgSfUn32WCwlrt8ODpKZ6oWG4c9suCNoV7eH8QButthr%2FBP%2BJwetrgsk4zzz3Kdq%2FrdOcXEXvIQdQD9af%2FyMx2%2B5qXy%2Fo29shlmTmP4na2N4Wq0SsHLO%2FePiLVFTMrLf%2FNZUIMpnyIkPsf%2FBrmOQNMyt5pM9Lsm3Fp3O9f08w%2BbidlFUlGbLXGcGKHAg9Shu3JdwgphBDdcD&X-Amz-Signature=7a205464b97eb893b5b73e7eba0e38b0c40e1eb44fe980e1e6eb9a50d2809194&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
