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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466343F77TG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwDoEoId2%2BFxU8eDRPAU8fjJBt4aPT9oOIHRpSGAvxyAiA7iznq98Zc9s1Ye8D%2BZoGlcwwCLH4g8hTYbTzY4OMOkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HlWtxzeTYKZXW%2B0KtwDr43BwCxcPxDFzX4bnDg%2BVHQJQFm7QHG%2FON%2Be5ScLTa0Zu0Yx6rNiOtB2TE0CcD9u%2B4l9oiHPC7k%2BeGsmMNvA0my3MB4LFaHImuCi06n%2FkkkOGiRc3QX0Waqfxd9cxVGfIi9JlQ00SEWSEBzWT7%2FFnek9%2F8efVlZyjmMt%2F5DbGsk1O%2FWrAXbFhDLexDZw1ARg42MV7zJwybdZ27MqbG5K3uRuOQgrksjdFNbWREPaRo13Ne%2BrC4%2BsBFnGDS6%2BBJL1zE%2BsJSuIEmJpgT%2BGS7hkGSM8gPKP2NaTBzAmPk5sO9vTsBcJJNWMlGAn19ZYa22GgnAZFHrF8bjqDD8mEOC74djnDt4SEdQyp8JZnPpilt1AB%2B5L1NFK3t46%2Bn65NnY8CZEftpThi0ikE4AeD8CGmGerUi4qQ7WDy48DUmK%2F6Zq4wqwGuBNZ5stGwky5xLrAc8PFSPwXHZAlSYaw0LkocMk2cG3fZl28efko8UWdzH7zXMCwBbbJldrFudKrQSr7pPD4LzoHyugqnTLITyH%2Bh8S7qmjOiWPrjduBIdMlSixYKmlCbCVljKuAOZfsXPwt%2F3h6x2J2iRYotkZuRb5JUrSt4hQAT999IXwZq%2BL6ckVf9PnR9jSKWUGtN8kwkKH%2BwgY6pgEal%2B85rzBQulfsdKfUzdQREitjPHnKh5n5HsuO8HvZGzdBXkZhhFRQrqNMc5N3%2F53B%2Bb4O4uVu4FlSeBJ%2Bb88RvB9xdELSGKUZqyujyXSHQ2x5g3tirbwom7ullh9wSTtqcc3NAeZHI0viZ%2FS34DC4kiHLGQdrGyaniM2jMW59dBH5YfHALdqibIfT85IHgqTc%2F0C1Lo9bBboM8J5M%2BT49ZE9L9bmK&X-Amz-Signature=01988c9d4003deed46424f0c3bd7a02029c4a461e28ca1a562fd6d1aed327cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466343F77TG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwDoEoId2%2BFxU8eDRPAU8fjJBt4aPT9oOIHRpSGAvxyAiA7iznq98Zc9s1Ye8D%2BZoGlcwwCLH4g8hTYbTzY4OMOkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HlWtxzeTYKZXW%2B0KtwDr43BwCxcPxDFzX4bnDg%2BVHQJQFm7QHG%2FON%2Be5ScLTa0Zu0Yx6rNiOtB2TE0CcD9u%2B4l9oiHPC7k%2BeGsmMNvA0my3MB4LFaHImuCi06n%2FkkkOGiRc3QX0Waqfxd9cxVGfIi9JlQ00SEWSEBzWT7%2FFnek9%2F8efVlZyjmMt%2F5DbGsk1O%2FWrAXbFhDLexDZw1ARg42MV7zJwybdZ27MqbG5K3uRuOQgrksjdFNbWREPaRo13Ne%2BrC4%2BsBFnGDS6%2BBJL1zE%2BsJSuIEmJpgT%2BGS7hkGSM8gPKP2NaTBzAmPk5sO9vTsBcJJNWMlGAn19ZYa22GgnAZFHrF8bjqDD8mEOC74djnDt4SEdQyp8JZnPpilt1AB%2B5L1NFK3t46%2Bn65NnY8CZEftpThi0ikE4AeD8CGmGerUi4qQ7WDy48DUmK%2F6Zq4wqwGuBNZ5stGwky5xLrAc8PFSPwXHZAlSYaw0LkocMk2cG3fZl28efko8UWdzH7zXMCwBbbJldrFudKrQSr7pPD4LzoHyugqnTLITyH%2Bh8S7qmjOiWPrjduBIdMlSixYKmlCbCVljKuAOZfsXPwt%2F3h6x2J2iRYotkZuRb5JUrSt4hQAT999IXwZq%2BL6ckVf9PnR9jSKWUGtN8kwkKH%2BwgY6pgEal%2B85rzBQulfsdKfUzdQREitjPHnKh5n5HsuO8HvZGzdBXkZhhFRQrqNMc5N3%2F53B%2Bb4O4uVu4FlSeBJ%2Bb88RvB9xdELSGKUZqyujyXSHQ2x5g3tirbwom7ullh9wSTtqcc3NAeZHI0viZ%2FS34DC4kiHLGQdrGyaniM2jMW59dBH5YfHALdqibIfT85IHgqTc%2F0C1Lo9bBboM8J5M%2BT49ZE9L9bmK&X-Amz-Signature=670ff7612e8afe1535b4fa2fca27086ff77a1575836d6907ec21808380395551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466343F77TG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwDoEoId2%2BFxU8eDRPAU8fjJBt4aPT9oOIHRpSGAvxyAiA7iznq98Zc9s1Ye8D%2BZoGlcwwCLH4g8hTYbTzY4OMOkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HlWtxzeTYKZXW%2B0KtwDr43BwCxcPxDFzX4bnDg%2BVHQJQFm7QHG%2FON%2Be5ScLTa0Zu0Yx6rNiOtB2TE0CcD9u%2B4l9oiHPC7k%2BeGsmMNvA0my3MB4LFaHImuCi06n%2FkkkOGiRc3QX0Waqfxd9cxVGfIi9JlQ00SEWSEBzWT7%2FFnek9%2F8efVlZyjmMt%2F5DbGsk1O%2FWrAXbFhDLexDZw1ARg42MV7zJwybdZ27MqbG5K3uRuOQgrksjdFNbWREPaRo13Ne%2BrC4%2BsBFnGDS6%2BBJL1zE%2BsJSuIEmJpgT%2BGS7hkGSM8gPKP2NaTBzAmPk5sO9vTsBcJJNWMlGAn19ZYa22GgnAZFHrF8bjqDD8mEOC74djnDt4SEdQyp8JZnPpilt1AB%2B5L1NFK3t46%2Bn65NnY8CZEftpThi0ikE4AeD8CGmGerUi4qQ7WDy48DUmK%2F6Zq4wqwGuBNZ5stGwky5xLrAc8PFSPwXHZAlSYaw0LkocMk2cG3fZl28efko8UWdzH7zXMCwBbbJldrFudKrQSr7pPD4LzoHyugqnTLITyH%2Bh8S7qmjOiWPrjduBIdMlSixYKmlCbCVljKuAOZfsXPwt%2F3h6x2J2iRYotkZuRb5JUrSt4hQAT999IXwZq%2BL6ckVf9PnR9jSKWUGtN8kwkKH%2BwgY6pgEal%2B85rzBQulfsdKfUzdQREitjPHnKh5n5HsuO8HvZGzdBXkZhhFRQrqNMc5N3%2F53B%2Bb4O4uVu4FlSeBJ%2Bb88RvB9xdELSGKUZqyujyXSHQ2x5g3tirbwom7ullh9wSTtqcc3NAeZHI0viZ%2FS34DC4kiHLGQdrGyaniM2jMW59dBH5YfHALdqibIfT85IHgqTc%2F0C1Lo9bBboM8J5M%2BT49ZE9L9bmK&X-Amz-Signature=0dc36a0b246f58f711e450730afde0f11cc58ce0b0dada5e0d2362f2956b952b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466343F77TG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwDoEoId2%2BFxU8eDRPAU8fjJBt4aPT9oOIHRpSGAvxyAiA7iznq98Zc9s1Ye8D%2BZoGlcwwCLH4g8hTYbTzY4OMOkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HlWtxzeTYKZXW%2B0KtwDr43BwCxcPxDFzX4bnDg%2BVHQJQFm7QHG%2FON%2Be5ScLTa0Zu0Yx6rNiOtB2TE0CcD9u%2B4l9oiHPC7k%2BeGsmMNvA0my3MB4LFaHImuCi06n%2FkkkOGiRc3QX0Waqfxd9cxVGfIi9JlQ00SEWSEBzWT7%2FFnek9%2F8efVlZyjmMt%2F5DbGsk1O%2FWrAXbFhDLexDZw1ARg42MV7zJwybdZ27MqbG5K3uRuOQgrksjdFNbWREPaRo13Ne%2BrC4%2BsBFnGDS6%2BBJL1zE%2BsJSuIEmJpgT%2BGS7hkGSM8gPKP2NaTBzAmPk5sO9vTsBcJJNWMlGAn19ZYa22GgnAZFHrF8bjqDD8mEOC74djnDt4SEdQyp8JZnPpilt1AB%2B5L1NFK3t46%2Bn65NnY8CZEftpThi0ikE4AeD8CGmGerUi4qQ7WDy48DUmK%2F6Zq4wqwGuBNZ5stGwky5xLrAc8PFSPwXHZAlSYaw0LkocMk2cG3fZl28efko8UWdzH7zXMCwBbbJldrFudKrQSr7pPD4LzoHyugqnTLITyH%2Bh8S7qmjOiWPrjduBIdMlSixYKmlCbCVljKuAOZfsXPwt%2F3h6x2J2iRYotkZuRb5JUrSt4hQAT999IXwZq%2BL6ckVf9PnR9jSKWUGtN8kwkKH%2BwgY6pgEal%2B85rzBQulfsdKfUzdQREitjPHnKh5n5HsuO8HvZGzdBXkZhhFRQrqNMc5N3%2F53B%2Bb4O4uVu4FlSeBJ%2Bb88RvB9xdELSGKUZqyujyXSHQ2x5g3tirbwom7ullh9wSTtqcc3NAeZHI0viZ%2FS34DC4kiHLGQdrGyaniM2jMW59dBH5YfHALdqibIfT85IHgqTc%2F0C1Lo9bBboM8J5M%2BT49ZE9L9bmK&X-Amz-Signature=43b7fa2c073ce6d8662274b877d0ae8859d48f9723d8e521cbfd32791749a793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466343F77TG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwDoEoId2%2BFxU8eDRPAU8fjJBt4aPT9oOIHRpSGAvxyAiA7iznq98Zc9s1Ye8D%2BZoGlcwwCLH4g8hTYbTzY4OMOkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HlWtxzeTYKZXW%2B0KtwDr43BwCxcPxDFzX4bnDg%2BVHQJQFm7QHG%2FON%2Be5ScLTa0Zu0Yx6rNiOtB2TE0CcD9u%2B4l9oiHPC7k%2BeGsmMNvA0my3MB4LFaHImuCi06n%2FkkkOGiRc3QX0Waqfxd9cxVGfIi9JlQ00SEWSEBzWT7%2FFnek9%2F8efVlZyjmMt%2F5DbGsk1O%2FWrAXbFhDLexDZw1ARg42MV7zJwybdZ27MqbG5K3uRuOQgrksjdFNbWREPaRo13Ne%2BrC4%2BsBFnGDS6%2BBJL1zE%2BsJSuIEmJpgT%2BGS7hkGSM8gPKP2NaTBzAmPk5sO9vTsBcJJNWMlGAn19ZYa22GgnAZFHrF8bjqDD8mEOC74djnDt4SEdQyp8JZnPpilt1AB%2B5L1NFK3t46%2Bn65NnY8CZEftpThi0ikE4AeD8CGmGerUi4qQ7WDy48DUmK%2F6Zq4wqwGuBNZ5stGwky5xLrAc8PFSPwXHZAlSYaw0LkocMk2cG3fZl28efko8UWdzH7zXMCwBbbJldrFudKrQSr7pPD4LzoHyugqnTLITyH%2Bh8S7qmjOiWPrjduBIdMlSixYKmlCbCVljKuAOZfsXPwt%2F3h6x2J2iRYotkZuRb5JUrSt4hQAT999IXwZq%2BL6ckVf9PnR9jSKWUGtN8kwkKH%2BwgY6pgEal%2B85rzBQulfsdKfUzdQREitjPHnKh5n5HsuO8HvZGzdBXkZhhFRQrqNMc5N3%2F53B%2Bb4O4uVu4FlSeBJ%2Bb88RvB9xdELSGKUZqyujyXSHQ2x5g3tirbwom7ullh9wSTtqcc3NAeZHI0viZ%2FS34DC4kiHLGQdrGyaniM2jMW59dBH5YfHALdqibIfT85IHgqTc%2F0C1Lo9bBboM8J5M%2BT49ZE9L9bmK&X-Amz-Signature=f58915ef06d328a8c2f302a962136c1a744de0cbe75f2244b9b2bea75fa643dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466343F77TG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwDoEoId2%2BFxU8eDRPAU8fjJBt4aPT9oOIHRpSGAvxyAiA7iznq98Zc9s1Ye8D%2BZoGlcwwCLH4g8hTYbTzY4OMOkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HlWtxzeTYKZXW%2B0KtwDr43BwCxcPxDFzX4bnDg%2BVHQJQFm7QHG%2FON%2Be5ScLTa0Zu0Yx6rNiOtB2TE0CcD9u%2B4l9oiHPC7k%2BeGsmMNvA0my3MB4LFaHImuCi06n%2FkkkOGiRc3QX0Waqfxd9cxVGfIi9JlQ00SEWSEBzWT7%2FFnek9%2F8efVlZyjmMt%2F5DbGsk1O%2FWrAXbFhDLexDZw1ARg42MV7zJwybdZ27MqbG5K3uRuOQgrksjdFNbWREPaRo13Ne%2BrC4%2BsBFnGDS6%2BBJL1zE%2BsJSuIEmJpgT%2BGS7hkGSM8gPKP2NaTBzAmPk5sO9vTsBcJJNWMlGAn19ZYa22GgnAZFHrF8bjqDD8mEOC74djnDt4SEdQyp8JZnPpilt1AB%2B5L1NFK3t46%2Bn65NnY8CZEftpThi0ikE4AeD8CGmGerUi4qQ7WDy48DUmK%2F6Zq4wqwGuBNZ5stGwky5xLrAc8PFSPwXHZAlSYaw0LkocMk2cG3fZl28efko8UWdzH7zXMCwBbbJldrFudKrQSr7pPD4LzoHyugqnTLITyH%2Bh8S7qmjOiWPrjduBIdMlSixYKmlCbCVljKuAOZfsXPwt%2F3h6x2J2iRYotkZuRb5JUrSt4hQAT999IXwZq%2BL6ckVf9PnR9jSKWUGtN8kwkKH%2BwgY6pgEal%2B85rzBQulfsdKfUzdQREitjPHnKh5n5HsuO8HvZGzdBXkZhhFRQrqNMc5N3%2F53B%2Bb4O4uVu4FlSeBJ%2Bb88RvB9xdELSGKUZqyujyXSHQ2x5g3tirbwom7ullh9wSTtqcc3NAeZHI0viZ%2FS34DC4kiHLGQdrGyaniM2jMW59dBH5YfHALdqibIfT85IHgqTc%2F0C1Lo9bBboM8J5M%2BT49ZE9L9bmK&X-Amz-Signature=8067047fb09fd339ccfdf4a014c5696c87d1ace98ac8d5cc1eb2f735f8353683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466343F77TG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwDoEoId2%2BFxU8eDRPAU8fjJBt4aPT9oOIHRpSGAvxyAiA7iznq98Zc9s1Ye8D%2BZoGlcwwCLH4g8hTYbTzY4OMOkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HlWtxzeTYKZXW%2B0KtwDr43BwCxcPxDFzX4bnDg%2BVHQJQFm7QHG%2FON%2Be5ScLTa0Zu0Yx6rNiOtB2TE0CcD9u%2B4l9oiHPC7k%2BeGsmMNvA0my3MB4LFaHImuCi06n%2FkkkOGiRc3QX0Waqfxd9cxVGfIi9JlQ00SEWSEBzWT7%2FFnek9%2F8efVlZyjmMt%2F5DbGsk1O%2FWrAXbFhDLexDZw1ARg42MV7zJwybdZ27MqbG5K3uRuOQgrksjdFNbWREPaRo13Ne%2BrC4%2BsBFnGDS6%2BBJL1zE%2BsJSuIEmJpgT%2BGS7hkGSM8gPKP2NaTBzAmPk5sO9vTsBcJJNWMlGAn19ZYa22GgnAZFHrF8bjqDD8mEOC74djnDt4SEdQyp8JZnPpilt1AB%2B5L1NFK3t46%2Bn65NnY8CZEftpThi0ikE4AeD8CGmGerUi4qQ7WDy48DUmK%2F6Zq4wqwGuBNZ5stGwky5xLrAc8PFSPwXHZAlSYaw0LkocMk2cG3fZl28efko8UWdzH7zXMCwBbbJldrFudKrQSr7pPD4LzoHyugqnTLITyH%2Bh8S7qmjOiWPrjduBIdMlSixYKmlCbCVljKuAOZfsXPwt%2F3h6x2J2iRYotkZuRb5JUrSt4hQAT999IXwZq%2BL6ckVf9PnR9jSKWUGtN8kwkKH%2BwgY6pgEal%2B85rzBQulfsdKfUzdQREitjPHnKh5n5HsuO8HvZGzdBXkZhhFRQrqNMc5N3%2F53B%2Bb4O4uVu4FlSeBJ%2Bb88RvB9xdELSGKUZqyujyXSHQ2x5g3tirbwom7ullh9wSTtqcc3NAeZHI0viZ%2FS34DC4kiHLGQdrGyaniM2jMW59dBH5YfHALdqibIfT85IHgqTc%2F0C1Lo9bBboM8J5M%2BT49ZE9L9bmK&X-Amz-Signature=a147346891bf226fdebc7c78ebf4c5ebf212ec37f5a5f3b8ebeeadbe7093e8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466343F77TG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwDoEoId2%2BFxU8eDRPAU8fjJBt4aPT9oOIHRpSGAvxyAiA7iznq98Zc9s1Ye8D%2BZoGlcwwCLH4g8hTYbTzY4OMOkiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5HlWtxzeTYKZXW%2B0KtwDr43BwCxcPxDFzX4bnDg%2BVHQJQFm7QHG%2FON%2Be5ScLTa0Zu0Yx6rNiOtB2TE0CcD9u%2B4l9oiHPC7k%2BeGsmMNvA0my3MB4LFaHImuCi06n%2FkkkOGiRc3QX0Waqfxd9cxVGfIi9JlQ00SEWSEBzWT7%2FFnek9%2F8efVlZyjmMt%2F5DbGsk1O%2FWrAXbFhDLexDZw1ARg42MV7zJwybdZ27MqbG5K3uRuOQgrksjdFNbWREPaRo13Ne%2BrC4%2BsBFnGDS6%2BBJL1zE%2BsJSuIEmJpgT%2BGS7hkGSM8gPKP2NaTBzAmPk5sO9vTsBcJJNWMlGAn19ZYa22GgnAZFHrF8bjqDD8mEOC74djnDt4SEdQyp8JZnPpilt1AB%2B5L1NFK3t46%2Bn65NnY8CZEftpThi0ikE4AeD8CGmGerUi4qQ7WDy48DUmK%2F6Zq4wqwGuBNZ5stGwky5xLrAc8PFSPwXHZAlSYaw0LkocMk2cG3fZl28efko8UWdzH7zXMCwBbbJldrFudKrQSr7pPD4LzoHyugqnTLITyH%2Bh8S7qmjOiWPrjduBIdMlSixYKmlCbCVljKuAOZfsXPwt%2F3h6x2J2iRYotkZuRb5JUrSt4hQAT999IXwZq%2BL6ckVf9PnR9jSKWUGtN8kwkKH%2BwgY6pgEal%2B85rzBQulfsdKfUzdQREitjPHnKh5n5HsuO8HvZGzdBXkZhhFRQrqNMc5N3%2F53B%2Bb4O4uVu4FlSeBJ%2Bb88RvB9xdELSGKUZqyujyXSHQ2x5g3tirbwom7ullh9wSTtqcc3NAeZHI0viZ%2FS34DC4kiHLGQdrGyaniM2jMW59dBH5YfHALdqibIfT85IHgqTc%2F0C1Lo9bBboM8J5M%2BT49ZE9L9bmK&X-Amz-Signature=3d5d6d6d25985c4ea92a3cd753eb80b47ce6f5f8b3753f1197a4b5ba113735f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
