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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4VCBK7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BnjxFIlRyh3zApyL33jQGooeKslPxk15g3WSy7YAzxAiEAhMTmzcPaHkE9THtmBjV1HUUFvYes5%2FzDNHpSkWFXim8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK50pgajnyXYAwKkUyrcA6xeNgmhvG2ySWugDPdeOFBg3JuZvEV0srEd%2FW34IPyFn6e1pYIAISM2fNzPj%2B7%2FFIqaOAxBgKtGRNiuACKuc%2BuCWXolcnWG8ZKh1hl%2FtKmX%2Bz2%2BAvMGvQCDEkMmCg3N9%2B1CQzNtJep53BIUfeiWDRtcxV%2BzFN7UKuTHGcv17ZbAdsj%2BJKBMPzpCrUUaOL%2FhTP4a2Zeywx5WnUZNtgb1eM9pTLzti9JsyMg7JxKGIV2elvEuE%2FCmMgv8yCVtViCUesx1qW6MZV2ow%2Fe3BNXT%2BfRk0p9CpsX3NO7vX8XYaBwL1THnO9ZlIirf2%2FoVRl1kgkGNsowJ8mXXnvagJw8gFDSJ26HVNVaZlXmjxlYT6lZM87xQbIqB%2Fk4gQDE8TRp6JoSGBziQ%2B830jnzHWA4tO8TT%2BpPsdQYRZUSQyfWgnzLvgAxC4wdYtmm3Czw3ihqREqIx2bog7G%2FrhFMNOcxmLxSgrqZYxONzS%2FH2hgFcaw6XI5O2Zwb1%2Bo1Z%2F9ILoAOq8xuUk9WVFg%2Fw4QShC76IEm2uuqsuRLDJR8tXZJMO%2FWsuJgFdbeLROQbcq4zjgrQ8j7QuWNFPQq0kdCDtoTTsqbBARFhvxsYNBvMawzFe9u1xa7lsBkM48N2qHXO2MLaq5b0GOqUBuW1r0VYp06862IdmBQqByfFzhD74FMMAxSJ6ewxfeM0vRtwZ0Dl2ughh5uu8MXpb4RdH2FYCKk6YFs33w8VAW2knilhoYLrbbHvy9JKTizopW5h13gLrsptzmTKeqIdevQY3SMS1igsSXHqC9FwadTmLFXnlvithDzqTrqc2931Zr8oUszSVVGeva%2BM5K6va%2FbGwuQVALvGeXyPTXpt58q1Hf5s%2F&X-Amz-Signature=eceabb7bae1f944f9b73b6c6d2e1ccf0b51a1961b942dfbef4dce34d64333346&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4VCBK7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BnjxFIlRyh3zApyL33jQGooeKslPxk15g3WSy7YAzxAiEAhMTmzcPaHkE9THtmBjV1HUUFvYes5%2FzDNHpSkWFXim8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK50pgajnyXYAwKkUyrcA6xeNgmhvG2ySWugDPdeOFBg3JuZvEV0srEd%2FW34IPyFn6e1pYIAISM2fNzPj%2B7%2FFIqaOAxBgKtGRNiuACKuc%2BuCWXolcnWG8ZKh1hl%2FtKmX%2Bz2%2BAvMGvQCDEkMmCg3N9%2B1CQzNtJep53BIUfeiWDRtcxV%2BzFN7UKuTHGcv17ZbAdsj%2BJKBMPzpCrUUaOL%2FhTP4a2Zeywx5WnUZNtgb1eM9pTLzti9JsyMg7JxKGIV2elvEuE%2FCmMgv8yCVtViCUesx1qW6MZV2ow%2Fe3BNXT%2BfRk0p9CpsX3NO7vX8XYaBwL1THnO9ZlIirf2%2FoVRl1kgkGNsowJ8mXXnvagJw8gFDSJ26HVNVaZlXmjxlYT6lZM87xQbIqB%2Fk4gQDE8TRp6JoSGBziQ%2B830jnzHWA4tO8TT%2BpPsdQYRZUSQyfWgnzLvgAxC4wdYtmm3Czw3ihqREqIx2bog7G%2FrhFMNOcxmLxSgrqZYxONzS%2FH2hgFcaw6XI5O2Zwb1%2Bo1Z%2F9ILoAOq8xuUk9WVFg%2Fw4QShC76IEm2uuqsuRLDJR8tXZJMO%2FWsuJgFdbeLROQbcq4zjgrQ8j7QuWNFPQq0kdCDtoTTsqbBARFhvxsYNBvMawzFe9u1xa7lsBkM48N2qHXO2MLaq5b0GOqUBuW1r0VYp06862IdmBQqByfFzhD74FMMAxSJ6ewxfeM0vRtwZ0Dl2ughh5uu8MXpb4RdH2FYCKk6YFs33w8VAW2knilhoYLrbbHvy9JKTizopW5h13gLrsptzmTKeqIdevQY3SMS1igsSXHqC9FwadTmLFXnlvithDzqTrqc2931Zr8oUszSVVGeva%2BM5K6va%2FbGwuQVALvGeXyPTXpt58q1Hf5s%2F&X-Amz-Signature=fb65789ae2ddb9ad28193d63e3292401bcc981f3f19937f4710518aaeb9bca49&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4VCBK7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BnjxFIlRyh3zApyL33jQGooeKslPxk15g3WSy7YAzxAiEAhMTmzcPaHkE9THtmBjV1HUUFvYes5%2FzDNHpSkWFXim8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK50pgajnyXYAwKkUyrcA6xeNgmhvG2ySWugDPdeOFBg3JuZvEV0srEd%2FW34IPyFn6e1pYIAISM2fNzPj%2B7%2FFIqaOAxBgKtGRNiuACKuc%2BuCWXolcnWG8ZKh1hl%2FtKmX%2Bz2%2BAvMGvQCDEkMmCg3N9%2B1CQzNtJep53BIUfeiWDRtcxV%2BzFN7UKuTHGcv17ZbAdsj%2BJKBMPzpCrUUaOL%2FhTP4a2Zeywx5WnUZNtgb1eM9pTLzti9JsyMg7JxKGIV2elvEuE%2FCmMgv8yCVtViCUesx1qW6MZV2ow%2Fe3BNXT%2BfRk0p9CpsX3NO7vX8XYaBwL1THnO9ZlIirf2%2FoVRl1kgkGNsowJ8mXXnvagJw8gFDSJ26HVNVaZlXmjxlYT6lZM87xQbIqB%2Fk4gQDE8TRp6JoSGBziQ%2B830jnzHWA4tO8TT%2BpPsdQYRZUSQyfWgnzLvgAxC4wdYtmm3Czw3ihqREqIx2bog7G%2FrhFMNOcxmLxSgrqZYxONzS%2FH2hgFcaw6XI5O2Zwb1%2Bo1Z%2F9ILoAOq8xuUk9WVFg%2Fw4QShC76IEm2uuqsuRLDJR8tXZJMO%2FWsuJgFdbeLROQbcq4zjgrQ8j7QuWNFPQq0kdCDtoTTsqbBARFhvxsYNBvMawzFe9u1xa7lsBkM48N2qHXO2MLaq5b0GOqUBuW1r0VYp06862IdmBQqByfFzhD74FMMAxSJ6ewxfeM0vRtwZ0Dl2ughh5uu8MXpb4RdH2FYCKk6YFs33w8VAW2knilhoYLrbbHvy9JKTizopW5h13gLrsptzmTKeqIdevQY3SMS1igsSXHqC9FwadTmLFXnlvithDzqTrqc2931Zr8oUszSVVGeva%2BM5K6va%2FbGwuQVALvGeXyPTXpt58q1Hf5s%2F&X-Amz-Signature=e4f43b697307a576c1bff67a41c84966c53dc9e3d5da2da20d597b7bc40b5710&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4VCBK7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BnjxFIlRyh3zApyL33jQGooeKslPxk15g3WSy7YAzxAiEAhMTmzcPaHkE9THtmBjV1HUUFvYes5%2FzDNHpSkWFXim8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK50pgajnyXYAwKkUyrcA6xeNgmhvG2ySWugDPdeOFBg3JuZvEV0srEd%2FW34IPyFn6e1pYIAISM2fNzPj%2B7%2FFIqaOAxBgKtGRNiuACKuc%2BuCWXolcnWG8ZKh1hl%2FtKmX%2Bz2%2BAvMGvQCDEkMmCg3N9%2B1CQzNtJep53BIUfeiWDRtcxV%2BzFN7UKuTHGcv17ZbAdsj%2BJKBMPzpCrUUaOL%2FhTP4a2Zeywx5WnUZNtgb1eM9pTLzti9JsyMg7JxKGIV2elvEuE%2FCmMgv8yCVtViCUesx1qW6MZV2ow%2Fe3BNXT%2BfRk0p9CpsX3NO7vX8XYaBwL1THnO9ZlIirf2%2FoVRl1kgkGNsowJ8mXXnvagJw8gFDSJ26HVNVaZlXmjxlYT6lZM87xQbIqB%2Fk4gQDE8TRp6JoSGBziQ%2B830jnzHWA4tO8TT%2BpPsdQYRZUSQyfWgnzLvgAxC4wdYtmm3Czw3ihqREqIx2bog7G%2FrhFMNOcxmLxSgrqZYxONzS%2FH2hgFcaw6XI5O2Zwb1%2Bo1Z%2F9ILoAOq8xuUk9WVFg%2Fw4QShC76IEm2uuqsuRLDJR8tXZJMO%2FWsuJgFdbeLROQbcq4zjgrQ8j7QuWNFPQq0kdCDtoTTsqbBARFhvxsYNBvMawzFe9u1xa7lsBkM48N2qHXO2MLaq5b0GOqUBuW1r0VYp06862IdmBQqByfFzhD74FMMAxSJ6ewxfeM0vRtwZ0Dl2ughh5uu8MXpb4RdH2FYCKk6YFs33w8VAW2knilhoYLrbbHvy9JKTizopW5h13gLrsptzmTKeqIdevQY3SMS1igsSXHqC9FwadTmLFXnlvithDzqTrqc2931Zr8oUszSVVGeva%2BM5K6va%2FbGwuQVALvGeXyPTXpt58q1Hf5s%2F&X-Amz-Signature=d1694a4e7c499ddb5fdd843315f2f930de772cf3d98728da1faa398a5a8942ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4VCBK7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BnjxFIlRyh3zApyL33jQGooeKslPxk15g3WSy7YAzxAiEAhMTmzcPaHkE9THtmBjV1HUUFvYes5%2FzDNHpSkWFXim8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK50pgajnyXYAwKkUyrcA6xeNgmhvG2ySWugDPdeOFBg3JuZvEV0srEd%2FW34IPyFn6e1pYIAISM2fNzPj%2B7%2FFIqaOAxBgKtGRNiuACKuc%2BuCWXolcnWG8ZKh1hl%2FtKmX%2Bz2%2BAvMGvQCDEkMmCg3N9%2B1CQzNtJep53BIUfeiWDRtcxV%2BzFN7UKuTHGcv17ZbAdsj%2BJKBMPzpCrUUaOL%2FhTP4a2Zeywx5WnUZNtgb1eM9pTLzti9JsyMg7JxKGIV2elvEuE%2FCmMgv8yCVtViCUesx1qW6MZV2ow%2Fe3BNXT%2BfRk0p9CpsX3NO7vX8XYaBwL1THnO9ZlIirf2%2FoVRl1kgkGNsowJ8mXXnvagJw8gFDSJ26HVNVaZlXmjxlYT6lZM87xQbIqB%2Fk4gQDE8TRp6JoSGBziQ%2B830jnzHWA4tO8TT%2BpPsdQYRZUSQyfWgnzLvgAxC4wdYtmm3Czw3ihqREqIx2bog7G%2FrhFMNOcxmLxSgrqZYxONzS%2FH2hgFcaw6XI5O2Zwb1%2Bo1Z%2F9ILoAOq8xuUk9WVFg%2Fw4QShC76IEm2uuqsuRLDJR8tXZJMO%2FWsuJgFdbeLROQbcq4zjgrQ8j7QuWNFPQq0kdCDtoTTsqbBARFhvxsYNBvMawzFe9u1xa7lsBkM48N2qHXO2MLaq5b0GOqUBuW1r0VYp06862IdmBQqByfFzhD74FMMAxSJ6ewxfeM0vRtwZ0Dl2ughh5uu8MXpb4RdH2FYCKk6YFs33w8VAW2knilhoYLrbbHvy9JKTizopW5h13gLrsptzmTKeqIdevQY3SMS1igsSXHqC9FwadTmLFXnlvithDzqTrqc2931Zr8oUszSVVGeva%2BM5K6va%2FbGwuQVALvGeXyPTXpt58q1Hf5s%2F&X-Amz-Signature=aa1dd34c9d2196eb38414d7a9792b23121fc7bc4a1266715790b85bc6719590f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4VCBK7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BnjxFIlRyh3zApyL33jQGooeKslPxk15g3WSy7YAzxAiEAhMTmzcPaHkE9THtmBjV1HUUFvYes5%2FzDNHpSkWFXim8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK50pgajnyXYAwKkUyrcA6xeNgmhvG2ySWugDPdeOFBg3JuZvEV0srEd%2FW34IPyFn6e1pYIAISM2fNzPj%2B7%2FFIqaOAxBgKtGRNiuACKuc%2BuCWXolcnWG8ZKh1hl%2FtKmX%2Bz2%2BAvMGvQCDEkMmCg3N9%2B1CQzNtJep53BIUfeiWDRtcxV%2BzFN7UKuTHGcv17ZbAdsj%2BJKBMPzpCrUUaOL%2FhTP4a2Zeywx5WnUZNtgb1eM9pTLzti9JsyMg7JxKGIV2elvEuE%2FCmMgv8yCVtViCUesx1qW6MZV2ow%2Fe3BNXT%2BfRk0p9CpsX3NO7vX8XYaBwL1THnO9ZlIirf2%2FoVRl1kgkGNsowJ8mXXnvagJw8gFDSJ26HVNVaZlXmjxlYT6lZM87xQbIqB%2Fk4gQDE8TRp6JoSGBziQ%2B830jnzHWA4tO8TT%2BpPsdQYRZUSQyfWgnzLvgAxC4wdYtmm3Czw3ihqREqIx2bog7G%2FrhFMNOcxmLxSgrqZYxONzS%2FH2hgFcaw6XI5O2Zwb1%2Bo1Z%2F9ILoAOq8xuUk9WVFg%2Fw4QShC76IEm2uuqsuRLDJR8tXZJMO%2FWsuJgFdbeLROQbcq4zjgrQ8j7QuWNFPQq0kdCDtoTTsqbBARFhvxsYNBvMawzFe9u1xa7lsBkM48N2qHXO2MLaq5b0GOqUBuW1r0VYp06862IdmBQqByfFzhD74FMMAxSJ6ewxfeM0vRtwZ0Dl2ughh5uu8MXpb4RdH2FYCKk6YFs33w8VAW2knilhoYLrbbHvy9JKTizopW5h13gLrsptzmTKeqIdevQY3SMS1igsSXHqC9FwadTmLFXnlvithDzqTrqc2931Zr8oUszSVVGeva%2BM5K6va%2FbGwuQVALvGeXyPTXpt58q1Hf5s%2F&X-Amz-Signature=adb3a96bdf12d7365b910d60ba4de239051f21a428becafdf107ba064686e9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4VCBK7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BnjxFIlRyh3zApyL33jQGooeKslPxk15g3WSy7YAzxAiEAhMTmzcPaHkE9THtmBjV1HUUFvYes5%2FzDNHpSkWFXim8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK50pgajnyXYAwKkUyrcA6xeNgmhvG2ySWugDPdeOFBg3JuZvEV0srEd%2FW34IPyFn6e1pYIAISM2fNzPj%2B7%2FFIqaOAxBgKtGRNiuACKuc%2BuCWXolcnWG8ZKh1hl%2FtKmX%2Bz2%2BAvMGvQCDEkMmCg3N9%2B1CQzNtJep53BIUfeiWDRtcxV%2BzFN7UKuTHGcv17ZbAdsj%2BJKBMPzpCrUUaOL%2FhTP4a2Zeywx5WnUZNtgb1eM9pTLzti9JsyMg7JxKGIV2elvEuE%2FCmMgv8yCVtViCUesx1qW6MZV2ow%2Fe3BNXT%2BfRk0p9CpsX3NO7vX8XYaBwL1THnO9ZlIirf2%2FoVRl1kgkGNsowJ8mXXnvagJw8gFDSJ26HVNVaZlXmjxlYT6lZM87xQbIqB%2Fk4gQDE8TRp6JoSGBziQ%2B830jnzHWA4tO8TT%2BpPsdQYRZUSQyfWgnzLvgAxC4wdYtmm3Czw3ihqREqIx2bog7G%2FrhFMNOcxmLxSgrqZYxONzS%2FH2hgFcaw6XI5O2Zwb1%2Bo1Z%2F9ILoAOq8xuUk9WVFg%2Fw4QShC76IEm2uuqsuRLDJR8tXZJMO%2FWsuJgFdbeLROQbcq4zjgrQ8j7QuWNFPQq0kdCDtoTTsqbBARFhvxsYNBvMawzFe9u1xa7lsBkM48N2qHXO2MLaq5b0GOqUBuW1r0VYp06862IdmBQqByfFzhD74FMMAxSJ6ewxfeM0vRtwZ0Dl2ughh5uu8MXpb4RdH2FYCKk6YFs33w8VAW2knilhoYLrbbHvy9JKTizopW5h13gLrsptzmTKeqIdevQY3SMS1igsSXHqC9FwadTmLFXnlvithDzqTrqc2931Zr8oUszSVVGeva%2BM5K6va%2FbGwuQVALvGeXyPTXpt58q1Hf5s%2F&X-Amz-Signature=be9f34a5826e7c1edd25aec38f1cfbc5f61eba8e3cf2800503fe32e3f075a4a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4VCBK7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BnjxFIlRyh3zApyL33jQGooeKslPxk15g3WSy7YAzxAiEAhMTmzcPaHkE9THtmBjV1HUUFvYes5%2FzDNHpSkWFXim8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK50pgajnyXYAwKkUyrcA6xeNgmhvG2ySWugDPdeOFBg3JuZvEV0srEd%2FW34IPyFn6e1pYIAISM2fNzPj%2B7%2FFIqaOAxBgKtGRNiuACKuc%2BuCWXolcnWG8ZKh1hl%2FtKmX%2Bz2%2BAvMGvQCDEkMmCg3N9%2B1CQzNtJep53BIUfeiWDRtcxV%2BzFN7UKuTHGcv17ZbAdsj%2BJKBMPzpCrUUaOL%2FhTP4a2Zeywx5WnUZNtgb1eM9pTLzti9JsyMg7JxKGIV2elvEuE%2FCmMgv8yCVtViCUesx1qW6MZV2ow%2Fe3BNXT%2BfRk0p9CpsX3NO7vX8XYaBwL1THnO9ZlIirf2%2FoVRl1kgkGNsowJ8mXXnvagJw8gFDSJ26HVNVaZlXmjxlYT6lZM87xQbIqB%2Fk4gQDE8TRp6JoSGBziQ%2B830jnzHWA4tO8TT%2BpPsdQYRZUSQyfWgnzLvgAxC4wdYtmm3Czw3ihqREqIx2bog7G%2FrhFMNOcxmLxSgrqZYxONzS%2FH2hgFcaw6XI5O2Zwb1%2Bo1Z%2F9ILoAOq8xuUk9WVFg%2Fw4QShC76IEm2uuqsuRLDJR8tXZJMO%2FWsuJgFdbeLROQbcq4zjgrQ8j7QuWNFPQq0kdCDtoTTsqbBARFhvxsYNBvMawzFe9u1xa7lsBkM48N2qHXO2MLaq5b0GOqUBuW1r0VYp06862IdmBQqByfFzhD74FMMAxSJ6ewxfeM0vRtwZ0Dl2ughh5uu8MXpb4RdH2FYCKk6YFs33w8VAW2knilhoYLrbbHvy9JKTizopW5h13gLrsptzmTKeqIdevQY3SMS1igsSXHqC9FwadTmLFXnlvithDzqTrqc2931Zr8oUszSVVGeva%2BM5K6va%2FbGwuQVALvGeXyPTXpt58q1Hf5s%2F&X-Amz-Signature=9d5c4890de29a062f2fdff027be2e101fbee0c7549b16c0a1e86071253705c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
