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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNO2QBK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB0hyDGrzMBpRapgJ9Aj4Z6dCheaGfy4KiI996vKxA8ZAiAbsIQWS9BCEsnFv3dEv%2FDkwW9lkC0deThbIht6Yg7d1Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMiGAWQHRYirJQuf94KtwDcN%2F2honEdv%2BskcJIcGBswylDnpipbg1iV3PaYoOUWMsyJQX%2BL481z4arobBV6DscmCK9BMRfzZZLJn7VFBOOOLzHmdh9F9PLhvACT1pDXbK3GljNFrF%2BCR80gDmDVPsxVmIeHe67xsnIZbYd58USGTnx6Onpd5cCLeDGFtzHxi2JjZLPdgTCArmKFHa8xtVHfMijZYGvcvlmdXhnuZRPiyNN1bB4ozLbSUmOtuppEekdOlPo6HY6MIxAu7dEI0qcw%2BJ63RFNN8bZ8z3IKZe29pI5RdFNTMH%2BbhAV70VuJasR9Nw0evajP8UvAOSSwBgY3lN228iLmUN%2BtHoU5RNwZSwDW31xwD2jd8SyyKJ8C%2F6Ipt3cRCeV5SnAUdoXWfADJ0kcC8WW8A20NrhHp9hXovB7dJKkKNu6RepUXhIgwiP2vCx2rR9bzG8%2BwIEVmeBD6sRP5weUZ6mRSJDQgfSrI8bUMYY67kitOmdPCa6tmi4vzQwXf9fu9GLKscTt%2BqC512dbzb6v4gSJ%2Fvu25bnUE1gBeXjCu1uCJ668G6AV%2F0DydtB409934t3QoIInMHdQBujj5m4hu7Jijqt7wv9wYHuNq54oXIgliCUFVnf0NP%2FFSwCuBLIIvgrq1M4ww8XNwQY6pgHc4mwss3uD7va%2BAEFoW0wE3alFRbp9aAI23LsVT5U3o1wGrcDWDBDgTskDspcNGRUFlJrxbm53BOFo9y0ysC%2F3L3UFKfkB32wq5sb2GlSMP9vbJxSdYdnoorWotUIXvhCnpGo3S3LMRgaaSCUKoWtuHfctNrqS5FebxjfR0GdLIadzJnjtfu9C4WUJ8W3p%2Fyb4mxoop8sVlFuqgz3w2HyktWl00wNn&X-Amz-Signature=8bc002114b10d235d9e35278c0a309d0f542ebba5349792cab6afef11716f582&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNO2QBK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB0hyDGrzMBpRapgJ9Aj4Z6dCheaGfy4KiI996vKxA8ZAiAbsIQWS9BCEsnFv3dEv%2FDkwW9lkC0deThbIht6Yg7d1Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMiGAWQHRYirJQuf94KtwDcN%2F2honEdv%2BskcJIcGBswylDnpipbg1iV3PaYoOUWMsyJQX%2BL481z4arobBV6DscmCK9BMRfzZZLJn7VFBOOOLzHmdh9F9PLhvACT1pDXbK3GljNFrF%2BCR80gDmDVPsxVmIeHe67xsnIZbYd58USGTnx6Onpd5cCLeDGFtzHxi2JjZLPdgTCArmKFHa8xtVHfMijZYGvcvlmdXhnuZRPiyNN1bB4ozLbSUmOtuppEekdOlPo6HY6MIxAu7dEI0qcw%2BJ63RFNN8bZ8z3IKZe29pI5RdFNTMH%2BbhAV70VuJasR9Nw0evajP8UvAOSSwBgY3lN228iLmUN%2BtHoU5RNwZSwDW31xwD2jd8SyyKJ8C%2F6Ipt3cRCeV5SnAUdoXWfADJ0kcC8WW8A20NrhHp9hXovB7dJKkKNu6RepUXhIgwiP2vCx2rR9bzG8%2BwIEVmeBD6sRP5weUZ6mRSJDQgfSrI8bUMYY67kitOmdPCa6tmi4vzQwXf9fu9GLKscTt%2BqC512dbzb6v4gSJ%2Fvu25bnUE1gBeXjCu1uCJ668G6AV%2F0DydtB409934t3QoIInMHdQBujj5m4hu7Jijqt7wv9wYHuNq54oXIgliCUFVnf0NP%2FFSwCuBLIIvgrq1M4ww8XNwQY6pgHc4mwss3uD7va%2BAEFoW0wE3alFRbp9aAI23LsVT5U3o1wGrcDWDBDgTskDspcNGRUFlJrxbm53BOFo9y0ysC%2F3L3UFKfkB32wq5sb2GlSMP9vbJxSdYdnoorWotUIXvhCnpGo3S3LMRgaaSCUKoWtuHfctNrqS5FebxjfR0GdLIadzJnjtfu9C4WUJ8W3p%2Fyb4mxoop8sVlFuqgz3w2HyktWl00wNn&X-Amz-Signature=016c899abe1f4fbd5c55b3a09e4594e0624fe608eef44f3e491617b76d9a8e16&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNO2QBK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB0hyDGrzMBpRapgJ9Aj4Z6dCheaGfy4KiI996vKxA8ZAiAbsIQWS9BCEsnFv3dEv%2FDkwW9lkC0deThbIht6Yg7d1Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMiGAWQHRYirJQuf94KtwDcN%2F2honEdv%2BskcJIcGBswylDnpipbg1iV3PaYoOUWMsyJQX%2BL481z4arobBV6DscmCK9BMRfzZZLJn7VFBOOOLzHmdh9F9PLhvACT1pDXbK3GljNFrF%2BCR80gDmDVPsxVmIeHe67xsnIZbYd58USGTnx6Onpd5cCLeDGFtzHxi2JjZLPdgTCArmKFHa8xtVHfMijZYGvcvlmdXhnuZRPiyNN1bB4ozLbSUmOtuppEekdOlPo6HY6MIxAu7dEI0qcw%2BJ63RFNN8bZ8z3IKZe29pI5RdFNTMH%2BbhAV70VuJasR9Nw0evajP8UvAOSSwBgY3lN228iLmUN%2BtHoU5RNwZSwDW31xwD2jd8SyyKJ8C%2F6Ipt3cRCeV5SnAUdoXWfADJ0kcC8WW8A20NrhHp9hXovB7dJKkKNu6RepUXhIgwiP2vCx2rR9bzG8%2BwIEVmeBD6sRP5weUZ6mRSJDQgfSrI8bUMYY67kitOmdPCa6tmi4vzQwXf9fu9GLKscTt%2BqC512dbzb6v4gSJ%2Fvu25bnUE1gBeXjCu1uCJ668G6AV%2F0DydtB409934t3QoIInMHdQBujj5m4hu7Jijqt7wv9wYHuNq54oXIgliCUFVnf0NP%2FFSwCuBLIIvgrq1M4ww8XNwQY6pgHc4mwss3uD7va%2BAEFoW0wE3alFRbp9aAI23LsVT5U3o1wGrcDWDBDgTskDspcNGRUFlJrxbm53BOFo9y0ysC%2F3L3UFKfkB32wq5sb2GlSMP9vbJxSdYdnoorWotUIXvhCnpGo3S3LMRgaaSCUKoWtuHfctNrqS5FebxjfR0GdLIadzJnjtfu9C4WUJ8W3p%2Fyb4mxoop8sVlFuqgz3w2HyktWl00wNn&X-Amz-Signature=5e42a78b4d8b9bca60d7081ecb3daae13abbc04b6d09fb8b4440eafabc711f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNO2QBK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB0hyDGrzMBpRapgJ9Aj4Z6dCheaGfy4KiI996vKxA8ZAiAbsIQWS9BCEsnFv3dEv%2FDkwW9lkC0deThbIht6Yg7d1Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMiGAWQHRYirJQuf94KtwDcN%2F2honEdv%2BskcJIcGBswylDnpipbg1iV3PaYoOUWMsyJQX%2BL481z4arobBV6DscmCK9BMRfzZZLJn7VFBOOOLzHmdh9F9PLhvACT1pDXbK3GljNFrF%2BCR80gDmDVPsxVmIeHe67xsnIZbYd58USGTnx6Onpd5cCLeDGFtzHxi2JjZLPdgTCArmKFHa8xtVHfMijZYGvcvlmdXhnuZRPiyNN1bB4ozLbSUmOtuppEekdOlPo6HY6MIxAu7dEI0qcw%2BJ63RFNN8bZ8z3IKZe29pI5RdFNTMH%2BbhAV70VuJasR9Nw0evajP8UvAOSSwBgY3lN228iLmUN%2BtHoU5RNwZSwDW31xwD2jd8SyyKJ8C%2F6Ipt3cRCeV5SnAUdoXWfADJ0kcC8WW8A20NrhHp9hXovB7dJKkKNu6RepUXhIgwiP2vCx2rR9bzG8%2BwIEVmeBD6sRP5weUZ6mRSJDQgfSrI8bUMYY67kitOmdPCa6tmi4vzQwXf9fu9GLKscTt%2BqC512dbzb6v4gSJ%2Fvu25bnUE1gBeXjCu1uCJ668G6AV%2F0DydtB409934t3QoIInMHdQBujj5m4hu7Jijqt7wv9wYHuNq54oXIgliCUFVnf0NP%2FFSwCuBLIIvgrq1M4ww8XNwQY6pgHc4mwss3uD7va%2BAEFoW0wE3alFRbp9aAI23LsVT5U3o1wGrcDWDBDgTskDspcNGRUFlJrxbm53BOFo9y0ysC%2F3L3UFKfkB32wq5sb2GlSMP9vbJxSdYdnoorWotUIXvhCnpGo3S3LMRgaaSCUKoWtuHfctNrqS5FebxjfR0GdLIadzJnjtfu9C4WUJ8W3p%2Fyb4mxoop8sVlFuqgz3w2HyktWl00wNn&X-Amz-Signature=899d5dcb095a359496dac23a5be11950de4f7dff8b098192866e2b2c3cdd7d91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNO2QBK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB0hyDGrzMBpRapgJ9Aj4Z6dCheaGfy4KiI996vKxA8ZAiAbsIQWS9BCEsnFv3dEv%2FDkwW9lkC0deThbIht6Yg7d1Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMiGAWQHRYirJQuf94KtwDcN%2F2honEdv%2BskcJIcGBswylDnpipbg1iV3PaYoOUWMsyJQX%2BL481z4arobBV6DscmCK9BMRfzZZLJn7VFBOOOLzHmdh9F9PLhvACT1pDXbK3GljNFrF%2BCR80gDmDVPsxVmIeHe67xsnIZbYd58USGTnx6Onpd5cCLeDGFtzHxi2JjZLPdgTCArmKFHa8xtVHfMijZYGvcvlmdXhnuZRPiyNN1bB4ozLbSUmOtuppEekdOlPo6HY6MIxAu7dEI0qcw%2BJ63RFNN8bZ8z3IKZe29pI5RdFNTMH%2BbhAV70VuJasR9Nw0evajP8UvAOSSwBgY3lN228iLmUN%2BtHoU5RNwZSwDW31xwD2jd8SyyKJ8C%2F6Ipt3cRCeV5SnAUdoXWfADJ0kcC8WW8A20NrhHp9hXovB7dJKkKNu6RepUXhIgwiP2vCx2rR9bzG8%2BwIEVmeBD6sRP5weUZ6mRSJDQgfSrI8bUMYY67kitOmdPCa6tmi4vzQwXf9fu9GLKscTt%2BqC512dbzb6v4gSJ%2Fvu25bnUE1gBeXjCu1uCJ668G6AV%2F0DydtB409934t3QoIInMHdQBujj5m4hu7Jijqt7wv9wYHuNq54oXIgliCUFVnf0NP%2FFSwCuBLIIvgrq1M4ww8XNwQY6pgHc4mwss3uD7va%2BAEFoW0wE3alFRbp9aAI23LsVT5U3o1wGrcDWDBDgTskDspcNGRUFlJrxbm53BOFo9y0ysC%2F3L3UFKfkB32wq5sb2GlSMP9vbJxSdYdnoorWotUIXvhCnpGo3S3LMRgaaSCUKoWtuHfctNrqS5FebxjfR0GdLIadzJnjtfu9C4WUJ8W3p%2Fyb4mxoop8sVlFuqgz3w2HyktWl00wNn&X-Amz-Signature=bab636f01854dc0825093656da7f6c5f19513106008914481f5a47c59e8376f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNO2QBK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB0hyDGrzMBpRapgJ9Aj4Z6dCheaGfy4KiI996vKxA8ZAiAbsIQWS9BCEsnFv3dEv%2FDkwW9lkC0deThbIht6Yg7d1Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMiGAWQHRYirJQuf94KtwDcN%2F2honEdv%2BskcJIcGBswylDnpipbg1iV3PaYoOUWMsyJQX%2BL481z4arobBV6DscmCK9BMRfzZZLJn7VFBOOOLzHmdh9F9PLhvACT1pDXbK3GljNFrF%2BCR80gDmDVPsxVmIeHe67xsnIZbYd58USGTnx6Onpd5cCLeDGFtzHxi2JjZLPdgTCArmKFHa8xtVHfMijZYGvcvlmdXhnuZRPiyNN1bB4ozLbSUmOtuppEekdOlPo6HY6MIxAu7dEI0qcw%2BJ63RFNN8bZ8z3IKZe29pI5RdFNTMH%2BbhAV70VuJasR9Nw0evajP8UvAOSSwBgY3lN228iLmUN%2BtHoU5RNwZSwDW31xwD2jd8SyyKJ8C%2F6Ipt3cRCeV5SnAUdoXWfADJ0kcC8WW8A20NrhHp9hXovB7dJKkKNu6RepUXhIgwiP2vCx2rR9bzG8%2BwIEVmeBD6sRP5weUZ6mRSJDQgfSrI8bUMYY67kitOmdPCa6tmi4vzQwXf9fu9GLKscTt%2BqC512dbzb6v4gSJ%2Fvu25bnUE1gBeXjCu1uCJ668G6AV%2F0DydtB409934t3QoIInMHdQBujj5m4hu7Jijqt7wv9wYHuNq54oXIgliCUFVnf0NP%2FFSwCuBLIIvgrq1M4ww8XNwQY6pgHc4mwss3uD7va%2BAEFoW0wE3alFRbp9aAI23LsVT5U3o1wGrcDWDBDgTskDspcNGRUFlJrxbm53BOFo9y0ysC%2F3L3UFKfkB32wq5sb2GlSMP9vbJxSdYdnoorWotUIXvhCnpGo3S3LMRgaaSCUKoWtuHfctNrqS5FebxjfR0GdLIadzJnjtfu9C4WUJ8W3p%2Fyb4mxoop8sVlFuqgz3w2HyktWl00wNn&X-Amz-Signature=a9e9979484d526bf45de154327631f13fc436b44f656feb7bf78f836502926a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNO2QBK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB0hyDGrzMBpRapgJ9Aj4Z6dCheaGfy4KiI996vKxA8ZAiAbsIQWS9BCEsnFv3dEv%2FDkwW9lkC0deThbIht6Yg7d1Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMiGAWQHRYirJQuf94KtwDcN%2F2honEdv%2BskcJIcGBswylDnpipbg1iV3PaYoOUWMsyJQX%2BL481z4arobBV6DscmCK9BMRfzZZLJn7VFBOOOLzHmdh9F9PLhvACT1pDXbK3GljNFrF%2BCR80gDmDVPsxVmIeHe67xsnIZbYd58USGTnx6Onpd5cCLeDGFtzHxi2JjZLPdgTCArmKFHa8xtVHfMijZYGvcvlmdXhnuZRPiyNN1bB4ozLbSUmOtuppEekdOlPo6HY6MIxAu7dEI0qcw%2BJ63RFNN8bZ8z3IKZe29pI5RdFNTMH%2BbhAV70VuJasR9Nw0evajP8UvAOSSwBgY3lN228iLmUN%2BtHoU5RNwZSwDW31xwD2jd8SyyKJ8C%2F6Ipt3cRCeV5SnAUdoXWfADJ0kcC8WW8A20NrhHp9hXovB7dJKkKNu6RepUXhIgwiP2vCx2rR9bzG8%2BwIEVmeBD6sRP5weUZ6mRSJDQgfSrI8bUMYY67kitOmdPCa6tmi4vzQwXf9fu9GLKscTt%2BqC512dbzb6v4gSJ%2Fvu25bnUE1gBeXjCu1uCJ668G6AV%2F0DydtB409934t3QoIInMHdQBujj5m4hu7Jijqt7wv9wYHuNq54oXIgliCUFVnf0NP%2FFSwCuBLIIvgrq1M4ww8XNwQY6pgHc4mwss3uD7va%2BAEFoW0wE3alFRbp9aAI23LsVT5U3o1wGrcDWDBDgTskDspcNGRUFlJrxbm53BOFo9y0ysC%2F3L3UFKfkB32wq5sb2GlSMP9vbJxSdYdnoorWotUIXvhCnpGo3S3LMRgaaSCUKoWtuHfctNrqS5FebxjfR0GdLIadzJnjtfu9C4WUJ8W3p%2Fyb4mxoop8sVlFuqgz3w2HyktWl00wNn&X-Amz-Signature=7b03b98723d68fcea205bc031c9f14b5b240738387e4aead4efa385445376b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNO2QBK%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB0hyDGrzMBpRapgJ9Aj4Z6dCheaGfy4KiI996vKxA8ZAiAbsIQWS9BCEsnFv3dEv%2FDkwW9lkC0deThbIht6Yg7d1Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMiGAWQHRYirJQuf94KtwDcN%2F2honEdv%2BskcJIcGBswylDnpipbg1iV3PaYoOUWMsyJQX%2BL481z4arobBV6DscmCK9BMRfzZZLJn7VFBOOOLzHmdh9F9PLhvACT1pDXbK3GljNFrF%2BCR80gDmDVPsxVmIeHe67xsnIZbYd58USGTnx6Onpd5cCLeDGFtzHxi2JjZLPdgTCArmKFHa8xtVHfMijZYGvcvlmdXhnuZRPiyNN1bB4ozLbSUmOtuppEekdOlPo6HY6MIxAu7dEI0qcw%2BJ63RFNN8bZ8z3IKZe29pI5RdFNTMH%2BbhAV70VuJasR9Nw0evajP8UvAOSSwBgY3lN228iLmUN%2BtHoU5RNwZSwDW31xwD2jd8SyyKJ8C%2F6Ipt3cRCeV5SnAUdoXWfADJ0kcC8WW8A20NrhHp9hXovB7dJKkKNu6RepUXhIgwiP2vCx2rR9bzG8%2BwIEVmeBD6sRP5weUZ6mRSJDQgfSrI8bUMYY67kitOmdPCa6tmi4vzQwXf9fu9GLKscTt%2BqC512dbzb6v4gSJ%2Fvu25bnUE1gBeXjCu1uCJ668G6AV%2F0DydtB409934t3QoIInMHdQBujj5m4hu7Jijqt7wv9wYHuNq54oXIgliCUFVnf0NP%2FFSwCuBLIIvgrq1M4ww8XNwQY6pgHc4mwss3uD7va%2BAEFoW0wE3alFRbp9aAI23LsVT5U3o1wGrcDWDBDgTskDspcNGRUFlJrxbm53BOFo9y0ysC%2F3L3UFKfkB32wq5sb2GlSMP9vbJxSdYdnoorWotUIXvhCnpGo3S3LMRgaaSCUKoWtuHfctNrqS5FebxjfR0GdLIadzJnjtfu9C4WUJ8W3p%2Fyb4mxoop8sVlFuqgz3w2HyktWl00wNn&X-Amz-Signature=499cd020b267f55f6195f6ec9dcbbf7fede54d8ce2c6adb9ebd6438a9900adf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
