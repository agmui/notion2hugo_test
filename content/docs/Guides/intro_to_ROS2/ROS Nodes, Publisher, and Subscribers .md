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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZPUB3T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDFb67vcabgxI1Kr4cLzGWndoCDa98fv0EOlGEUJp5rPQIgOpFlImlSdHQREl9MoqR0cwpEMmCLzzRuiVZM8CguEG8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNiVgHpmtes1bvnX4SrcAyRyy6jlLNcAh2PBBaJXeTjJiesz1unMG0Cl1L62WKWS7O7fsqkxmCW%2BvrUMV4ZmTjEE2j4YEyDTSC%2BgT2eB6I00NRhfXreoZoX8Fii0L0LpAt74wvxiTeQCfWKh%2BIfZI2%2FFoB8cWD0yLV%2FwlnyX188XpJBqbsdHimaXEbY%2BwQwTQgpROT9W5XJJ0FBRX8%2BApdUr7M%2F9faqJmbTTqmmlUPKUv2QEOj3e5Kim8A2Xz5n%2FuppvsrUZrla6hG6Jc0OBc8HoOd4HImbrMhnwCaPdt8eIPwzn6ZUCSuWvmZCbznxDbJv9UcOam27Soqz2NxFIEBBUIs6vLTFszfnUWzgp3SoqNXlOMEwc%2BEXKRvn%2BYtOECX%2FllD0c4x47Ja4W6IFW5C2lIioOQRxEbg3%2Fe4vUkq2iFHnBvjDin2MRx%2Bvgc2EVWQh4E7fqSbaoIP3Y1MTFPTNBF4hoZB6S5CuBPQR5WsKJ0qb1IWClU%2BBpWLsihojK9O4JX8QNyP4OHucoljz8zCTYBlN7Bs6hU0cMhNdvwERJyPMKrWVS2dzKS5ddZiQpADcpgjqtB%2FqA1QvZTalI2iyzFMw5uQuMKJtacynzeSHmMU4PHgiVVwe7foIAgeTh9lrI2rdMD%2FCGq0WNMJGNhsIGOqUBtduyduOE9zUwlnTjHctkQvLfioiwVL0midY%2BIR5GiVCpF7MKA7vu5lvTSdsT53x3ViSVouwqLQxZExeNjHjSfxEGzi0y3gu915Q3b1aZ7l%2FHJjtL2cDfiMWcGwHAXlBELta4pYp%2F2F8w%2BA0oXiJ4uH4wtzZusCXZM%2BYSYLbBXl6LFkLMySBvnK8eiep3rdnbhEPtSWHw9J1bDRbHdq6C6zcXURs0&X-Amz-Signature=b39145d05cf800f0db2c8790c6f2cc5289fcd3a092844c283e7e09fe9d5ab64c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZPUB3T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDFb67vcabgxI1Kr4cLzGWndoCDa98fv0EOlGEUJp5rPQIgOpFlImlSdHQREl9MoqR0cwpEMmCLzzRuiVZM8CguEG8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNiVgHpmtes1bvnX4SrcAyRyy6jlLNcAh2PBBaJXeTjJiesz1unMG0Cl1L62WKWS7O7fsqkxmCW%2BvrUMV4ZmTjEE2j4YEyDTSC%2BgT2eB6I00NRhfXreoZoX8Fii0L0LpAt74wvxiTeQCfWKh%2BIfZI2%2FFoB8cWD0yLV%2FwlnyX188XpJBqbsdHimaXEbY%2BwQwTQgpROT9W5XJJ0FBRX8%2BApdUr7M%2F9faqJmbTTqmmlUPKUv2QEOj3e5Kim8A2Xz5n%2FuppvsrUZrla6hG6Jc0OBc8HoOd4HImbrMhnwCaPdt8eIPwzn6ZUCSuWvmZCbznxDbJv9UcOam27Soqz2NxFIEBBUIs6vLTFszfnUWzgp3SoqNXlOMEwc%2BEXKRvn%2BYtOECX%2FllD0c4x47Ja4W6IFW5C2lIioOQRxEbg3%2Fe4vUkq2iFHnBvjDin2MRx%2Bvgc2EVWQh4E7fqSbaoIP3Y1MTFPTNBF4hoZB6S5CuBPQR5WsKJ0qb1IWClU%2BBpWLsihojK9O4JX8QNyP4OHucoljz8zCTYBlN7Bs6hU0cMhNdvwERJyPMKrWVS2dzKS5ddZiQpADcpgjqtB%2FqA1QvZTalI2iyzFMw5uQuMKJtacynzeSHmMU4PHgiVVwe7foIAgeTh9lrI2rdMD%2FCGq0WNMJGNhsIGOqUBtduyduOE9zUwlnTjHctkQvLfioiwVL0midY%2BIR5GiVCpF7MKA7vu5lvTSdsT53x3ViSVouwqLQxZExeNjHjSfxEGzi0y3gu915Q3b1aZ7l%2FHJjtL2cDfiMWcGwHAXlBELta4pYp%2F2F8w%2BA0oXiJ4uH4wtzZusCXZM%2BYSYLbBXl6LFkLMySBvnK8eiep3rdnbhEPtSWHw9J1bDRbHdq6C6zcXURs0&X-Amz-Signature=b7c26241544b92a7ec1bf51053c2334550961ee793c702614cde871212eff473&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZPUB3T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDFb67vcabgxI1Kr4cLzGWndoCDa98fv0EOlGEUJp5rPQIgOpFlImlSdHQREl9MoqR0cwpEMmCLzzRuiVZM8CguEG8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNiVgHpmtes1bvnX4SrcAyRyy6jlLNcAh2PBBaJXeTjJiesz1unMG0Cl1L62WKWS7O7fsqkxmCW%2BvrUMV4ZmTjEE2j4YEyDTSC%2BgT2eB6I00NRhfXreoZoX8Fii0L0LpAt74wvxiTeQCfWKh%2BIfZI2%2FFoB8cWD0yLV%2FwlnyX188XpJBqbsdHimaXEbY%2BwQwTQgpROT9W5XJJ0FBRX8%2BApdUr7M%2F9faqJmbTTqmmlUPKUv2QEOj3e5Kim8A2Xz5n%2FuppvsrUZrla6hG6Jc0OBc8HoOd4HImbrMhnwCaPdt8eIPwzn6ZUCSuWvmZCbznxDbJv9UcOam27Soqz2NxFIEBBUIs6vLTFszfnUWzgp3SoqNXlOMEwc%2BEXKRvn%2BYtOECX%2FllD0c4x47Ja4W6IFW5C2lIioOQRxEbg3%2Fe4vUkq2iFHnBvjDin2MRx%2Bvgc2EVWQh4E7fqSbaoIP3Y1MTFPTNBF4hoZB6S5CuBPQR5WsKJ0qb1IWClU%2BBpWLsihojK9O4JX8QNyP4OHucoljz8zCTYBlN7Bs6hU0cMhNdvwERJyPMKrWVS2dzKS5ddZiQpADcpgjqtB%2FqA1QvZTalI2iyzFMw5uQuMKJtacynzeSHmMU4PHgiVVwe7foIAgeTh9lrI2rdMD%2FCGq0WNMJGNhsIGOqUBtduyduOE9zUwlnTjHctkQvLfioiwVL0midY%2BIR5GiVCpF7MKA7vu5lvTSdsT53x3ViSVouwqLQxZExeNjHjSfxEGzi0y3gu915Q3b1aZ7l%2FHJjtL2cDfiMWcGwHAXlBELta4pYp%2F2F8w%2BA0oXiJ4uH4wtzZusCXZM%2BYSYLbBXl6LFkLMySBvnK8eiep3rdnbhEPtSWHw9J1bDRbHdq6C6zcXURs0&X-Amz-Signature=0a0e22f9b715757076155c0cacd7908cc50b9a546cfe979d460e08041c9dbd99&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZPUB3T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDFb67vcabgxI1Kr4cLzGWndoCDa98fv0EOlGEUJp5rPQIgOpFlImlSdHQREl9MoqR0cwpEMmCLzzRuiVZM8CguEG8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNiVgHpmtes1bvnX4SrcAyRyy6jlLNcAh2PBBaJXeTjJiesz1unMG0Cl1L62WKWS7O7fsqkxmCW%2BvrUMV4ZmTjEE2j4YEyDTSC%2BgT2eB6I00NRhfXreoZoX8Fii0L0LpAt74wvxiTeQCfWKh%2BIfZI2%2FFoB8cWD0yLV%2FwlnyX188XpJBqbsdHimaXEbY%2BwQwTQgpROT9W5XJJ0FBRX8%2BApdUr7M%2F9faqJmbTTqmmlUPKUv2QEOj3e5Kim8A2Xz5n%2FuppvsrUZrla6hG6Jc0OBc8HoOd4HImbrMhnwCaPdt8eIPwzn6ZUCSuWvmZCbznxDbJv9UcOam27Soqz2NxFIEBBUIs6vLTFszfnUWzgp3SoqNXlOMEwc%2BEXKRvn%2BYtOECX%2FllD0c4x47Ja4W6IFW5C2lIioOQRxEbg3%2Fe4vUkq2iFHnBvjDin2MRx%2Bvgc2EVWQh4E7fqSbaoIP3Y1MTFPTNBF4hoZB6S5CuBPQR5WsKJ0qb1IWClU%2BBpWLsihojK9O4JX8QNyP4OHucoljz8zCTYBlN7Bs6hU0cMhNdvwERJyPMKrWVS2dzKS5ddZiQpADcpgjqtB%2FqA1QvZTalI2iyzFMw5uQuMKJtacynzeSHmMU4PHgiVVwe7foIAgeTh9lrI2rdMD%2FCGq0WNMJGNhsIGOqUBtduyduOE9zUwlnTjHctkQvLfioiwVL0midY%2BIR5GiVCpF7MKA7vu5lvTSdsT53x3ViSVouwqLQxZExeNjHjSfxEGzi0y3gu915Q3b1aZ7l%2FHJjtL2cDfiMWcGwHAXlBELta4pYp%2F2F8w%2BA0oXiJ4uH4wtzZusCXZM%2BYSYLbBXl6LFkLMySBvnK8eiep3rdnbhEPtSWHw9J1bDRbHdq6C6zcXURs0&X-Amz-Signature=10db98c9c211d63939f8c43272e0ed42f6650e2167f420c8105debdad56bf9ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZPUB3T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDFb67vcabgxI1Kr4cLzGWndoCDa98fv0EOlGEUJp5rPQIgOpFlImlSdHQREl9MoqR0cwpEMmCLzzRuiVZM8CguEG8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNiVgHpmtes1bvnX4SrcAyRyy6jlLNcAh2PBBaJXeTjJiesz1unMG0Cl1L62WKWS7O7fsqkxmCW%2BvrUMV4ZmTjEE2j4YEyDTSC%2BgT2eB6I00NRhfXreoZoX8Fii0L0LpAt74wvxiTeQCfWKh%2BIfZI2%2FFoB8cWD0yLV%2FwlnyX188XpJBqbsdHimaXEbY%2BwQwTQgpROT9W5XJJ0FBRX8%2BApdUr7M%2F9faqJmbTTqmmlUPKUv2QEOj3e5Kim8A2Xz5n%2FuppvsrUZrla6hG6Jc0OBc8HoOd4HImbrMhnwCaPdt8eIPwzn6ZUCSuWvmZCbznxDbJv9UcOam27Soqz2NxFIEBBUIs6vLTFszfnUWzgp3SoqNXlOMEwc%2BEXKRvn%2BYtOECX%2FllD0c4x47Ja4W6IFW5C2lIioOQRxEbg3%2Fe4vUkq2iFHnBvjDin2MRx%2Bvgc2EVWQh4E7fqSbaoIP3Y1MTFPTNBF4hoZB6S5CuBPQR5WsKJ0qb1IWClU%2BBpWLsihojK9O4JX8QNyP4OHucoljz8zCTYBlN7Bs6hU0cMhNdvwERJyPMKrWVS2dzKS5ddZiQpADcpgjqtB%2FqA1QvZTalI2iyzFMw5uQuMKJtacynzeSHmMU4PHgiVVwe7foIAgeTh9lrI2rdMD%2FCGq0WNMJGNhsIGOqUBtduyduOE9zUwlnTjHctkQvLfioiwVL0midY%2BIR5GiVCpF7MKA7vu5lvTSdsT53x3ViSVouwqLQxZExeNjHjSfxEGzi0y3gu915Q3b1aZ7l%2FHJjtL2cDfiMWcGwHAXlBELta4pYp%2F2F8w%2BA0oXiJ4uH4wtzZusCXZM%2BYSYLbBXl6LFkLMySBvnK8eiep3rdnbhEPtSWHw9J1bDRbHdq6C6zcXURs0&X-Amz-Signature=65118e947b54c6e0656522de5e8f2e5b2e64a3cc6ac8597fb2d271301a1aae5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZPUB3T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDFb67vcabgxI1Kr4cLzGWndoCDa98fv0EOlGEUJp5rPQIgOpFlImlSdHQREl9MoqR0cwpEMmCLzzRuiVZM8CguEG8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNiVgHpmtes1bvnX4SrcAyRyy6jlLNcAh2PBBaJXeTjJiesz1unMG0Cl1L62WKWS7O7fsqkxmCW%2BvrUMV4ZmTjEE2j4YEyDTSC%2BgT2eB6I00NRhfXreoZoX8Fii0L0LpAt74wvxiTeQCfWKh%2BIfZI2%2FFoB8cWD0yLV%2FwlnyX188XpJBqbsdHimaXEbY%2BwQwTQgpROT9W5XJJ0FBRX8%2BApdUr7M%2F9faqJmbTTqmmlUPKUv2QEOj3e5Kim8A2Xz5n%2FuppvsrUZrla6hG6Jc0OBc8HoOd4HImbrMhnwCaPdt8eIPwzn6ZUCSuWvmZCbznxDbJv9UcOam27Soqz2NxFIEBBUIs6vLTFszfnUWzgp3SoqNXlOMEwc%2BEXKRvn%2BYtOECX%2FllD0c4x47Ja4W6IFW5C2lIioOQRxEbg3%2Fe4vUkq2iFHnBvjDin2MRx%2Bvgc2EVWQh4E7fqSbaoIP3Y1MTFPTNBF4hoZB6S5CuBPQR5WsKJ0qb1IWClU%2BBpWLsihojK9O4JX8QNyP4OHucoljz8zCTYBlN7Bs6hU0cMhNdvwERJyPMKrWVS2dzKS5ddZiQpADcpgjqtB%2FqA1QvZTalI2iyzFMw5uQuMKJtacynzeSHmMU4PHgiVVwe7foIAgeTh9lrI2rdMD%2FCGq0WNMJGNhsIGOqUBtduyduOE9zUwlnTjHctkQvLfioiwVL0midY%2BIR5GiVCpF7MKA7vu5lvTSdsT53x3ViSVouwqLQxZExeNjHjSfxEGzi0y3gu915Q3b1aZ7l%2FHJjtL2cDfiMWcGwHAXlBELta4pYp%2F2F8w%2BA0oXiJ4uH4wtzZusCXZM%2BYSYLbBXl6LFkLMySBvnK8eiep3rdnbhEPtSWHw9J1bDRbHdq6C6zcXURs0&X-Amz-Signature=7b064c3133f552c809bef8d379b4cb8cddab034d309c202d725d1eea824afd04&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZPUB3T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDFb67vcabgxI1Kr4cLzGWndoCDa98fv0EOlGEUJp5rPQIgOpFlImlSdHQREl9MoqR0cwpEMmCLzzRuiVZM8CguEG8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNiVgHpmtes1bvnX4SrcAyRyy6jlLNcAh2PBBaJXeTjJiesz1unMG0Cl1L62WKWS7O7fsqkxmCW%2BvrUMV4ZmTjEE2j4YEyDTSC%2BgT2eB6I00NRhfXreoZoX8Fii0L0LpAt74wvxiTeQCfWKh%2BIfZI2%2FFoB8cWD0yLV%2FwlnyX188XpJBqbsdHimaXEbY%2BwQwTQgpROT9W5XJJ0FBRX8%2BApdUr7M%2F9faqJmbTTqmmlUPKUv2QEOj3e5Kim8A2Xz5n%2FuppvsrUZrla6hG6Jc0OBc8HoOd4HImbrMhnwCaPdt8eIPwzn6ZUCSuWvmZCbznxDbJv9UcOam27Soqz2NxFIEBBUIs6vLTFszfnUWzgp3SoqNXlOMEwc%2BEXKRvn%2BYtOECX%2FllD0c4x47Ja4W6IFW5C2lIioOQRxEbg3%2Fe4vUkq2iFHnBvjDin2MRx%2Bvgc2EVWQh4E7fqSbaoIP3Y1MTFPTNBF4hoZB6S5CuBPQR5WsKJ0qb1IWClU%2BBpWLsihojK9O4JX8QNyP4OHucoljz8zCTYBlN7Bs6hU0cMhNdvwERJyPMKrWVS2dzKS5ddZiQpADcpgjqtB%2FqA1QvZTalI2iyzFMw5uQuMKJtacynzeSHmMU4PHgiVVwe7foIAgeTh9lrI2rdMD%2FCGq0WNMJGNhsIGOqUBtduyduOE9zUwlnTjHctkQvLfioiwVL0midY%2BIR5GiVCpF7MKA7vu5lvTSdsT53x3ViSVouwqLQxZExeNjHjSfxEGzi0y3gu915Q3b1aZ7l%2FHJjtL2cDfiMWcGwHAXlBELta4pYp%2F2F8w%2BA0oXiJ4uH4wtzZusCXZM%2BYSYLbBXl6LFkLMySBvnK8eiep3rdnbhEPtSWHw9J1bDRbHdq6C6zcXURs0&X-Amz-Signature=99669fe2da1fe63a9b6d60d9396998f225bbe1e82a374bf963373269b38ebaf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZPUB3T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDFb67vcabgxI1Kr4cLzGWndoCDa98fv0EOlGEUJp5rPQIgOpFlImlSdHQREl9MoqR0cwpEMmCLzzRuiVZM8CguEG8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNiVgHpmtes1bvnX4SrcAyRyy6jlLNcAh2PBBaJXeTjJiesz1unMG0Cl1L62WKWS7O7fsqkxmCW%2BvrUMV4ZmTjEE2j4YEyDTSC%2BgT2eB6I00NRhfXreoZoX8Fii0L0LpAt74wvxiTeQCfWKh%2BIfZI2%2FFoB8cWD0yLV%2FwlnyX188XpJBqbsdHimaXEbY%2BwQwTQgpROT9W5XJJ0FBRX8%2BApdUr7M%2F9faqJmbTTqmmlUPKUv2QEOj3e5Kim8A2Xz5n%2FuppvsrUZrla6hG6Jc0OBc8HoOd4HImbrMhnwCaPdt8eIPwzn6ZUCSuWvmZCbznxDbJv9UcOam27Soqz2NxFIEBBUIs6vLTFszfnUWzgp3SoqNXlOMEwc%2BEXKRvn%2BYtOECX%2FllD0c4x47Ja4W6IFW5C2lIioOQRxEbg3%2Fe4vUkq2iFHnBvjDin2MRx%2Bvgc2EVWQh4E7fqSbaoIP3Y1MTFPTNBF4hoZB6S5CuBPQR5WsKJ0qb1IWClU%2BBpWLsihojK9O4JX8QNyP4OHucoljz8zCTYBlN7Bs6hU0cMhNdvwERJyPMKrWVS2dzKS5ddZiQpADcpgjqtB%2FqA1QvZTalI2iyzFMw5uQuMKJtacynzeSHmMU4PHgiVVwe7foIAgeTh9lrI2rdMD%2FCGq0WNMJGNhsIGOqUBtduyduOE9zUwlnTjHctkQvLfioiwVL0midY%2BIR5GiVCpF7MKA7vu5lvTSdsT53x3ViSVouwqLQxZExeNjHjSfxEGzi0y3gu915Q3b1aZ7l%2FHJjtL2cDfiMWcGwHAXlBELta4pYp%2F2F8w%2BA0oXiJ4uH4wtzZusCXZM%2BYSYLbBXl6LFkLMySBvnK8eiep3rdnbhEPtSWHw9J1bDRbHdq6C6zcXURs0&X-Amz-Signature=1cef2180e26b563d8c3ef5e4c05dd2a768054b9c141a969227392dcc3e5814d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
