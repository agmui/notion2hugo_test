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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBIG6NSJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4C0F77TX4J%2BRSqR%2FuWv5D%2BXMDZDvC2SfPS%2FeK02XMEgIhALs5tr2N%2BXXIhk80Msm3N3y%2FG%2B3DCFlVidOGe%2FER1%2B5BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQK6OByhy%2Fw%2FMFCoMq3AMqduZsu1zc4skKq2g%2FY6cnNwiVJadiWRG1hl%2B4hTozLsx%2Bb2E2O7Fr6a4LcGvBzntvBs%2BUiuQTU77dL5PoifUMx7sq2XPlmzejA5a6Q2H5ppO2ecD4REzRoI%2FprajNUadF5OT4Q0BIb6%2B6fdVO6GBCCIZ%2Fhyt3vUR73iMpc4qUTkMi7ukdRHLNLMtc3LADGBrq%2B7I8BU%2BA9N8KHFtiCqOOzr68iB%2Fh2YmreO5Wvrq1nE93I%2BwPyKJ5xrW0a1yhWtgDo3ZNNQo5kplcZHgWE1UGT2HpHtdxT%2F8ViglFp1hHjo4XgyCy7P%2BbT%2FqQBMY7bEjpH5gA6VemqeBqRN9KP31Mn9bJy35o7CIRrDe3BqQ1dYatXWGrxZdrbAa7V6vnN0aR9xlFrhqnQdtczLB%2FyaYDR5cqvP5LkJ2MJPNjli0vEqQGy4F7%2Fl%2FPhKpmZe3zCoKSWCAEDfUiC8hN%2FZEWTnbCauTxdr%2BcnBduRcJiUJ%2B3dxXI9WFK%2F4jL8aPL1fFDgjK9ClJJSoS%2Bj1sc%2FZutWqu1vMp94Aet6oPHUyHYH%2BAPBxZ%2FkW3dQbbFVfVeu43kJ4aXh3ROMHZ0z8X4PbsX5Y2AvtwP%2FjvKEzYTdyEoFoco2YLYxCRwOviB6uYyqDCmupTDBjqkAaZ%2FUtxZgIdpR%2BV8i%2BTPyQVt4fuM6P4mp%2FD31gYAX0KoxFtqTX65K5DMsQWOS37OckIVtjbjy0BthMWVidXlM6WOkbls%2FdgIqtSd7MK8rUIUcdgfb3Zxaa95JMBv64MfmlNWZwpCxeAQmn3jzs6IDvGz%2F436nghtTyTZJgiFTUbeoSbx%2B8xH2W2EHmYI0cBy%2BTqAa%2BmDj4yXprbzJPwljRqTx1Te&X-Amz-Signature=675015ae8910e500edf976b65fee41923ebf5bcb3e0a15b93f8baac10fe628b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBIG6NSJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4C0F77TX4J%2BRSqR%2FuWv5D%2BXMDZDvC2SfPS%2FeK02XMEgIhALs5tr2N%2BXXIhk80Msm3N3y%2FG%2B3DCFlVidOGe%2FER1%2B5BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQK6OByhy%2Fw%2FMFCoMq3AMqduZsu1zc4skKq2g%2FY6cnNwiVJadiWRG1hl%2B4hTozLsx%2Bb2E2O7Fr6a4LcGvBzntvBs%2BUiuQTU77dL5PoifUMx7sq2XPlmzejA5a6Q2H5ppO2ecD4REzRoI%2FprajNUadF5OT4Q0BIb6%2B6fdVO6GBCCIZ%2Fhyt3vUR73iMpc4qUTkMi7ukdRHLNLMtc3LADGBrq%2B7I8BU%2BA9N8KHFtiCqOOzr68iB%2Fh2YmreO5Wvrq1nE93I%2BwPyKJ5xrW0a1yhWtgDo3ZNNQo5kplcZHgWE1UGT2HpHtdxT%2F8ViglFp1hHjo4XgyCy7P%2BbT%2FqQBMY7bEjpH5gA6VemqeBqRN9KP31Mn9bJy35o7CIRrDe3BqQ1dYatXWGrxZdrbAa7V6vnN0aR9xlFrhqnQdtczLB%2FyaYDR5cqvP5LkJ2MJPNjli0vEqQGy4F7%2Fl%2FPhKpmZe3zCoKSWCAEDfUiC8hN%2FZEWTnbCauTxdr%2BcnBduRcJiUJ%2B3dxXI9WFK%2F4jL8aPL1fFDgjK9ClJJSoS%2Bj1sc%2FZutWqu1vMp94Aet6oPHUyHYH%2BAPBxZ%2FkW3dQbbFVfVeu43kJ4aXh3ROMHZ0z8X4PbsX5Y2AvtwP%2FjvKEzYTdyEoFoco2YLYxCRwOviB6uYyqDCmupTDBjqkAaZ%2FUtxZgIdpR%2BV8i%2BTPyQVt4fuM6P4mp%2FD31gYAX0KoxFtqTX65K5DMsQWOS37OckIVtjbjy0BthMWVidXlM6WOkbls%2FdgIqtSd7MK8rUIUcdgfb3Zxaa95JMBv64MfmlNWZwpCxeAQmn3jzs6IDvGz%2F436nghtTyTZJgiFTUbeoSbx%2B8xH2W2EHmYI0cBy%2BTqAa%2BmDj4yXprbzJPwljRqTx1Te&X-Amz-Signature=3641dac5e47aae58c6654697fccf7012a01223b8fa1eef2ee4163bc293dbd67f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBIG6NSJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4C0F77TX4J%2BRSqR%2FuWv5D%2BXMDZDvC2SfPS%2FeK02XMEgIhALs5tr2N%2BXXIhk80Msm3N3y%2FG%2B3DCFlVidOGe%2FER1%2B5BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQK6OByhy%2Fw%2FMFCoMq3AMqduZsu1zc4skKq2g%2FY6cnNwiVJadiWRG1hl%2B4hTozLsx%2Bb2E2O7Fr6a4LcGvBzntvBs%2BUiuQTU77dL5PoifUMx7sq2XPlmzejA5a6Q2H5ppO2ecD4REzRoI%2FprajNUadF5OT4Q0BIb6%2B6fdVO6GBCCIZ%2Fhyt3vUR73iMpc4qUTkMi7ukdRHLNLMtc3LADGBrq%2B7I8BU%2BA9N8KHFtiCqOOzr68iB%2Fh2YmreO5Wvrq1nE93I%2BwPyKJ5xrW0a1yhWtgDo3ZNNQo5kplcZHgWE1UGT2HpHtdxT%2F8ViglFp1hHjo4XgyCy7P%2BbT%2FqQBMY7bEjpH5gA6VemqeBqRN9KP31Mn9bJy35o7CIRrDe3BqQ1dYatXWGrxZdrbAa7V6vnN0aR9xlFrhqnQdtczLB%2FyaYDR5cqvP5LkJ2MJPNjli0vEqQGy4F7%2Fl%2FPhKpmZe3zCoKSWCAEDfUiC8hN%2FZEWTnbCauTxdr%2BcnBduRcJiUJ%2B3dxXI9WFK%2F4jL8aPL1fFDgjK9ClJJSoS%2Bj1sc%2FZutWqu1vMp94Aet6oPHUyHYH%2BAPBxZ%2FkW3dQbbFVfVeu43kJ4aXh3ROMHZ0z8X4PbsX5Y2AvtwP%2FjvKEzYTdyEoFoco2YLYxCRwOviB6uYyqDCmupTDBjqkAaZ%2FUtxZgIdpR%2BV8i%2BTPyQVt4fuM6P4mp%2FD31gYAX0KoxFtqTX65K5DMsQWOS37OckIVtjbjy0BthMWVidXlM6WOkbls%2FdgIqtSd7MK8rUIUcdgfb3Zxaa95JMBv64MfmlNWZwpCxeAQmn3jzs6IDvGz%2F436nghtTyTZJgiFTUbeoSbx%2B8xH2W2EHmYI0cBy%2BTqAa%2BmDj4yXprbzJPwljRqTx1Te&X-Amz-Signature=f99cce194a97957405073ce56022d0dac05b6ab7e8cdbdd6aa3c03c43d21ccd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBIG6NSJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4C0F77TX4J%2BRSqR%2FuWv5D%2BXMDZDvC2SfPS%2FeK02XMEgIhALs5tr2N%2BXXIhk80Msm3N3y%2FG%2B3DCFlVidOGe%2FER1%2B5BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQK6OByhy%2Fw%2FMFCoMq3AMqduZsu1zc4skKq2g%2FY6cnNwiVJadiWRG1hl%2B4hTozLsx%2Bb2E2O7Fr6a4LcGvBzntvBs%2BUiuQTU77dL5PoifUMx7sq2XPlmzejA5a6Q2H5ppO2ecD4REzRoI%2FprajNUadF5OT4Q0BIb6%2B6fdVO6GBCCIZ%2Fhyt3vUR73iMpc4qUTkMi7ukdRHLNLMtc3LADGBrq%2B7I8BU%2BA9N8KHFtiCqOOzr68iB%2Fh2YmreO5Wvrq1nE93I%2BwPyKJ5xrW0a1yhWtgDo3ZNNQo5kplcZHgWE1UGT2HpHtdxT%2F8ViglFp1hHjo4XgyCy7P%2BbT%2FqQBMY7bEjpH5gA6VemqeBqRN9KP31Mn9bJy35o7CIRrDe3BqQ1dYatXWGrxZdrbAa7V6vnN0aR9xlFrhqnQdtczLB%2FyaYDR5cqvP5LkJ2MJPNjli0vEqQGy4F7%2Fl%2FPhKpmZe3zCoKSWCAEDfUiC8hN%2FZEWTnbCauTxdr%2BcnBduRcJiUJ%2B3dxXI9WFK%2F4jL8aPL1fFDgjK9ClJJSoS%2Bj1sc%2FZutWqu1vMp94Aet6oPHUyHYH%2BAPBxZ%2FkW3dQbbFVfVeu43kJ4aXh3ROMHZ0z8X4PbsX5Y2AvtwP%2FjvKEzYTdyEoFoco2YLYxCRwOviB6uYyqDCmupTDBjqkAaZ%2FUtxZgIdpR%2BV8i%2BTPyQVt4fuM6P4mp%2FD31gYAX0KoxFtqTX65K5DMsQWOS37OckIVtjbjy0BthMWVidXlM6WOkbls%2FdgIqtSd7MK8rUIUcdgfb3Zxaa95JMBv64MfmlNWZwpCxeAQmn3jzs6IDvGz%2F436nghtTyTZJgiFTUbeoSbx%2B8xH2W2EHmYI0cBy%2BTqAa%2BmDj4yXprbzJPwljRqTx1Te&X-Amz-Signature=ee1d8b7d3227c2012383642f9ea617a92cd17f0c9322a7cf3d50953c22ab7a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBIG6NSJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4C0F77TX4J%2BRSqR%2FuWv5D%2BXMDZDvC2SfPS%2FeK02XMEgIhALs5tr2N%2BXXIhk80Msm3N3y%2FG%2B3DCFlVidOGe%2FER1%2B5BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQK6OByhy%2Fw%2FMFCoMq3AMqduZsu1zc4skKq2g%2FY6cnNwiVJadiWRG1hl%2B4hTozLsx%2Bb2E2O7Fr6a4LcGvBzntvBs%2BUiuQTU77dL5PoifUMx7sq2XPlmzejA5a6Q2H5ppO2ecD4REzRoI%2FprajNUadF5OT4Q0BIb6%2B6fdVO6GBCCIZ%2Fhyt3vUR73iMpc4qUTkMi7ukdRHLNLMtc3LADGBrq%2B7I8BU%2BA9N8KHFtiCqOOzr68iB%2Fh2YmreO5Wvrq1nE93I%2BwPyKJ5xrW0a1yhWtgDo3ZNNQo5kplcZHgWE1UGT2HpHtdxT%2F8ViglFp1hHjo4XgyCy7P%2BbT%2FqQBMY7bEjpH5gA6VemqeBqRN9KP31Mn9bJy35o7CIRrDe3BqQ1dYatXWGrxZdrbAa7V6vnN0aR9xlFrhqnQdtczLB%2FyaYDR5cqvP5LkJ2MJPNjli0vEqQGy4F7%2Fl%2FPhKpmZe3zCoKSWCAEDfUiC8hN%2FZEWTnbCauTxdr%2BcnBduRcJiUJ%2B3dxXI9WFK%2F4jL8aPL1fFDgjK9ClJJSoS%2Bj1sc%2FZutWqu1vMp94Aet6oPHUyHYH%2BAPBxZ%2FkW3dQbbFVfVeu43kJ4aXh3ROMHZ0z8X4PbsX5Y2AvtwP%2FjvKEzYTdyEoFoco2YLYxCRwOviB6uYyqDCmupTDBjqkAaZ%2FUtxZgIdpR%2BV8i%2BTPyQVt4fuM6P4mp%2FD31gYAX0KoxFtqTX65K5DMsQWOS37OckIVtjbjy0BthMWVidXlM6WOkbls%2FdgIqtSd7MK8rUIUcdgfb3Zxaa95JMBv64MfmlNWZwpCxeAQmn3jzs6IDvGz%2F436nghtTyTZJgiFTUbeoSbx%2B8xH2W2EHmYI0cBy%2BTqAa%2BmDj4yXprbzJPwljRqTx1Te&X-Amz-Signature=32d570b48c43d30ad70761f2664754d4147fd163cfc253baaaa64910b9193c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBIG6NSJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4C0F77TX4J%2BRSqR%2FuWv5D%2BXMDZDvC2SfPS%2FeK02XMEgIhALs5tr2N%2BXXIhk80Msm3N3y%2FG%2B3DCFlVidOGe%2FER1%2B5BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQK6OByhy%2Fw%2FMFCoMq3AMqduZsu1zc4skKq2g%2FY6cnNwiVJadiWRG1hl%2B4hTozLsx%2Bb2E2O7Fr6a4LcGvBzntvBs%2BUiuQTU77dL5PoifUMx7sq2XPlmzejA5a6Q2H5ppO2ecD4REzRoI%2FprajNUadF5OT4Q0BIb6%2B6fdVO6GBCCIZ%2Fhyt3vUR73iMpc4qUTkMi7ukdRHLNLMtc3LADGBrq%2B7I8BU%2BA9N8KHFtiCqOOzr68iB%2Fh2YmreO5Wvrq1nE93I%2BwPyKJ5xrW0a1yhWtgDo3ZNNQo5kplcZHgWE1UGT2HpHtdxT%2F8ViglFp1hHjo4XgyCy7P%2BbT%2FqQBMY7bEjpH5gA6VemqeBqRN9KP31Mn9bJy35o7CIRrDe3BqQ1dYatXWGrxZdrbAa7V6vnN0aR9xlFrhqnQdtczLB%2FyaYDR5cqvP5LkJ2MJPNjli0vEqQGy4F7%2Fl%2FPhKpmZe3zCoKSWCAEDfUiC8hN%2FZEWTnbCauTxdr%2BcnBduRcJiUJ%2B3dxXI9WFK%2F4jL8aPL1fFDgjK9ClJJSoS%2Bj1sc%2FZutWqu1vMp94Aet6oPHUyHYH%2BAPBxZ%2FkW3dQbbFVfVeu43kJ4aXh3ROMHZ0z8X4PbsX5Y2AvtwP%2FjvKEzYTdyEoFoco2YLYxCRwOviB6uYyqDCmupTDBjqkAaZ%2FUtxZgIdpR%2BV8i%2BTPyQVt4fuM6P4mp%2FD31gYAX0KoxFtqTX65K5DMsQWOS37OckIVtjbjy0BthMWVidXlM6WOkbls%2FdgIqtSd7MK8rUIUcdgfb3Zxaa95JMBv64MfmlNWZwpCxeAQmn3jzs6IDvGz%2F436nghtTyTZJgiFTUbeoSbx%2B8xH2W2EHmYI0cBy%2BTqAa%2BmDj4yXprbzJPwljRqTx1Te&X-Amz-Signature=1a7cc3ee418ebd68e105a692d6b4fcdc7658b3957786bb518cbc8f650ce01af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBIG6NSJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4C0F77TX4J%2BRSqR%2FuWv5D%2BXMDZDvC2SfPS%2FeK02XMEgIhALs5tr2N%2BXXIhk80Msm3N3y%2FG%2B3DCFlVidOGe%2FER1%2B5BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQK6OByhy%2Fw%2FMFCoMq3AMqduZsu1zc4skKq2g%2FY6cnNwiVJadiWRG1hl%2B4hTozLsx%2Bb2E2O7Fr6a4LcGvBzntvBs%2BUiuQTU77dL5PoifUMx7sq2XPlmzejA5a6Q2H5ppO2ecD4REzRoI%2FprajNUadF5OT4Q0BIb6%2B6fdVO6GBCCIZ%2Fhyt3vUR73iMpc4qUTkMi7ukdRHLNLMtc3LADGBrq%2B7I8BU%2BA9N8KHFtiCqOOzr68iB%2Fh2YmreO5Wvrq1nE93I%2BwPyKJ5xrW0a1yhWtgDo3ZNNQo5kplcZHgWE1UGT2HpHtdxT%2F8ViglFp1hHjo4XgyCy7P%2BbT%2FqQBMY7bEjpH5gA6VemqeBqRN9KP31Mn9bJy35o7CIRrDe3BqQ1dYatXWGrxZdrbAa7V6vnN0aR9xlFrhqnQdtczLB%2FyaYDR5cqvP5LkJ2MJPNjli0vEqQGy4F7%2Fl%2FPhKpmZe3zCoKSWCAEDfUiC8hN%2FZEWTnbCauTxdr%2BcnBduRcJiUJ%2B3dxXI9WFK%2F4jL8aPL1fFDgjK9ClJJSoS%2Bj1sc%2FZutWqu1vMp94Aet6oPHUyHYH%2BAPBxZ%2FkW3dQbbFVfVeu43kJ4aXh3ROMHZ0z8X4PbsX5Y2AvtwP%2FjvKEzYTdyEoFoco2YLYxCRwOviB6uYyqDCmupTDBjqkAaZ%2FUtxZgIdpR%2BV8i%2BTPyQVt4fuM6P4mp%2FD31gYAX0KoxFtqTX65K5DMsQWOS37OckIVtjbjy0BthMWVidXlM6WOkbls%2FdgIqtSd7MK8rUIUcdgfb3Zxaa95JMBv64MfmlNWZwpCxeAQmn3jzs6IDvGz%2F436nghtTyTZJgiFTUbeoSbx%2B8xH2W2EHmYI0cBy%2BTqAa%2BmDj4yXprbzJPwljRqTx1Te&X-Amz-Signature=80380128b3583cc7e7f4ff5c5988f9a2cf2cbab1821202dcc5964d9273f6b3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBIG6NSJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4C0F77TX4J%2BRSqR%2FuWv5D%2BXMDZDvC2SfPS%2FeK02XMEgIhALs5tr2N%2BXXIhk80Msm3N3y%2FG%2B3DCFlVidOGe%2FER1%2B5BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQK6OByhy%2Fw%2FMFCoMq3AMqduZsu1zc4skKq2g%2FY6cnNwiVJadiWRG1hl%2B4hTozLsx%2Bb2E2O7Fr6a4LcGvBzntvBs%2BUiuQTU77dL5PoifUMx7sq2XPlmzejA5a6Q2H5ppO2ecD4REzRoI%2FprajNUadF5OT4Q0BIb6%2B6fdVO6GBCCIZ%2Fhyt3vUR73iMpc4qUTkMi7ukdRHLNLMtc3LADGBrq%2B7I8BU%2BA9N8KHFtiCqOOzr68iB%2Fh2YmreO5Wvrq1nE93I%2BwPyKJ5xrW0a1yhWtgDo3ZNNQo5kplcZHgWE1UGT2HpHtdxT%2F8ViglFp1hHjo4XgyCy7P%2BbT%2FqQBMY7bEjpH5gA6VemqeBqRN9KP31Mn9bJy35o7CIRrDe3BqQ1dYatXWGrxZdrbAa7V6vnN0aR9xlFrhqnQdtczLB%2FyaYDR5cqvP5LkJ2MJPNjli0vEqQGy4F7%2Fl%2FPhKpmZe3zCoKSWCAEDfUiC8hN%2FZEWTnbCauTxdr%2BcnBduRcJiUJ%2B3dxXI9WFK%2F4jL8aPL1fFDgjK9ClJJSoS%2Bj1sc%2FZutWqu1vMp94Aet6oPHUyHYH%2BAPBxZ%2FkW3dQbbFVfVeu43kJ4aXh3ROMHZ0z8X4PbsX5Y2AvtwP%2FjvKEzYTdyEoFoco2YLYxCRwOviB6uYyqDCmupTDBjqkAaZ%2FUtxZgIdpR%2BV8i%2BTPyQVt4fuM6P4mp%2FD31gYAX0KoxFtqTX65K5DMsQWOS37OckIVtjbjy0BthMWVidXlM6WOkbls%2FdgIqtSd7MK8rUIUcdgfb3Zxaa95JMBv64MfmlNWZwpCxeAQmn3jzs6IDvGz%2F436nghtTyTZJgiFTUbeoSbx%2B8xH2W2EHmYI0cBy%2BTqAa%2BmDj4yXprbzJPwljRqTx1Te&X-Amz-Signature=a60176bff3b6587258a7c0572f0e60cc319d7ed7414aa780432a2567730a9d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
