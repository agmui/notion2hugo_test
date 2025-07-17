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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z62P6MV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEJ3KMNwLwCDT%2B6%2BPjHq7ecLbsqSPrlDmLxo82BL6m1AAiEAxosFDv7sbyT0j%2BHwezqpTapd241APqdY3JTv%2Fax5O0oq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGkijuSOOPnrNqEqDyrcAzRonisxMefhbR9AylrmHi%2B5LKHuvh%2F0Fvqcv3Ss%2BcIfpGACHgGaFF7vHTnZjoLj37E6JiLWCWKlYKDp2JuchF%2BwSzf%2FIOOmkFLnVGjma9HPZ21hNDzhuWGHzhoes1RX%2FFsMKZMq13CWhZFjVRa%2BDmX0cuR0GrAHJp7SESTAOnlt%2BE13CZOAxoPm%2FdNWqWMnrfwZlinndsHkY8UCfWtAopcz%2B7WE0Jh6wU%2BCw%2FOOmZygPFvDadEXCRcXD8oMwIxPsSgsL7ib0%2F2eFeIvkZDSfH44NZFVV9NLSqX3gA9tkkTYXpTJrDAEKiNBr8leRSRmEinv6MKOQUX5Ya8cToBQwJuq1U0wuisHVEc5f4LUnjUhW0P2PXl7nFGu6nJ9L8UanUX9If6buQPJ6BVvNwMEcVnPWr8rJz52fslHek%2BwpTY6LgIKm2EYnmEj9uGywIAdBwL2aahP%2BFvQseJtFAEwLOa6WnJeCfYj2q%2Ba2X%2FLnQ%2FMzQAxW2MbUjfl3SzgJoh%2BmqWTlcC%2FxnP6Dvd9sqWSYhcWkyXS3XV5ijLdUPH1RWwTGKTbxrkwFQPgobbGBZ%2FvWg678h4A6I0LdbOMUMkg1rwGUWzeM80rid65Uo1f8%2Fibgv3DlGZlNYzLRjarMMq%2F5MMGOqUBZO03Hf4fRMiYuRtS%2BHX0BElDgWJSrHaYvz6b5YMSMMwkX4LP1NL%2B769z7L%2Fw1HLBQh%2Fyv%2BLwM7VrKjMyTEGIdTFD755xzCcj%2Fwhp7jARIMtytT6X%2FCqc%2B7iT4%2FugQ4DUzNpoBseHY19YysITmcxlkyGhc%2FxULJp80DVO2OUZ2xLczM6zxLQLoeX1%2BovEnezcK53yheVHKySnwwiC7sQQKCxjRttB&X-Amz-Signature=f1b07f0f0e725ed2e3639c4c52bf453d2f3c5e2bc31d492a836b5ecae60a4d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z62P6MV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEJ3KMNwLwCDT%2B6%2BPjHq7ecLbsqSPrlDmLxo82BL6m1AAiEAxosFDv7sbyT0j%2BHwezqpTapd241APqdY3JTv%2Fax5O0oq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGkijuSOOPnrNqEqDyrcAzRonisxMefhbR9AylrmHi%2B5LKHuvh%2F0Fvqcv3Ss%2BcIfpGACHgGaFF7vHTnZjoLj37E6JiLWCWKlYKDp2JuchF%2BwSzf%2FIOOmkFLnVGjma9HPZ21hNDzhuWGHzhoes1RX%2FFsMKZMq13CWhZFjVRa%2BDmX0cuR0GrAHJp7SESTAOnlt%2BE13CZOAxoPm%2FdNWqWMnrfwZlinndsHkY8UCfWtAopcz%2B7WE0Jh6wU%2BCw%2FOOmZygPFvDadEXCRcXD8oMwIxPsSgsL7ib0%2F2eFeIvkZDSfH44NZFVV9NLSqX3gA9tkkTYXpTJrDAEKiNBr8leRSRmEinv6MKOQUX5Ya8cToBQwJuq1U0wuisHVEc5f4LUnjUhW0P2PXl7nFGu6nJ9L8UanUX9If6buQPJ6BVvNwMEcVnPWr8rJz52fslHek%2BwpTY6LgIKm2EYnmEj9uGywIAdBwL2aahP%2BFvQseJtFAEwLOa6WnJeCfYj2q%2Ba2X%2FLnQ%2FMzQAxW2MbUjfl3SzgJoh%2BmqWTlcC%2FxnP6Dvd9sqWSYhcWkyXS3XV5ijLdUPH1RWwTGKTbxrkwFQPgobbGBZ%2FvWg678h4A6I0LdbOMUMkg1rwGUWzeM80rid65Uo1f8%2Fibgv3DlGZlNYzLRjarMMq%2F5MMGOqUBZO03Hf4fRMiYuRtS%2BHX0BElDgWJSrHaYvz6b5YMSMMwkX4LP1NL%2B769z7L%2Fw1HLBQh%2Fyv%2BLwM7VrKjMyTEGIdTFD755xzCcj%2Fwhp7jARIMtytT6X%2FCqc%2B7iT4%2FugQ4DUzNpoBseHY19YysITmcxlkyGhc%2FxULJp80DVO2OUZ2xLczM6zxLQLoeX1%2BovEnezcK53yheVHKySnwwiC7sQQKCxjRttB&X-Amz-Signature=2370d42d3f1f703297b801dee11b14eeac15d32b6431271e032d78e289cd9886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z62P6MV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEJ3KMNwLwCDT%2B6%2BPjHq7ecLbsqSPrlDmLxo82BL6m1AAiEAxosFDv7sbyT0j%2BHwezqpTapd241APqdY3JTv%2Fax5O0oq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGkijuSOOPnrNqEqDyrcAzRonisxMefhbR9AylrmHi%2B5LKHuvh%2F0Fvqcv3Ss%2BcIfpGACHgGaFF7vHTnZjoLj37E6JiLWCWKlYKDp2JuchF%2BwSzf%2FIOOmkFLnVGjma9HPZ21hNDzhuWGHzhoes1RX%2FFsMKZMq13CWhZFjVRa%2BDmX0cuR0GrAHJp7SESTAOnlt%2BE13CZOAxoPm%2FdNWqWMnrfwZlinndsHkY8UCfWtAopcz%2B7WE0Jh6wU%2BCw%2FOOmZygPFvDadEXCRcXD8oMwIxPsSgsL7ib0%2F2eFeIvkZDSfH44NZFVV9NLSqX3gA9tkkTYXpTJrDAEKiNBr8leRSRmEinv6MKOQUX5Ya8cToBQwJuq1U0wuisHVEc5f4LUnjUhW0P2PXl7nFGu6nJ9L8UanUX9If6buQPJ6BVvNwMEcVnPWr8rJz52fslHek%2BwpTY6LgIKm2EYnmEj9uGywIAdBwL2aahP%2BFvQseJtFAEwLOa6WnJeCfYj2q%2Ba2X%2FLnQ%2FMzQAxW2MbUjfl3SzgJoh%2BmqWTlcC%2FxnP6Dvd9sqWSYhcWkyXS3XV5ijLdUPH1RWwTGKTbxrkwFQPgobbGBZ%2FvWg678h4A6I0LdbOMUMkg1rwGUWzeM80rid65Uo1f8%2Fibgv3DlGZlNYzLRjarMMq%2F5MMGOqUBZO03Hf4fRMiYuRtS%2BHX0BElDgWJSrHaYvz6b5YMSMMwkX4LP1NL%2B769z7L%2Fw1HLBQh%2Fyv%2BLwM7VrKjMyTEGIdTFD755xzCcj%2Fwhp7jARIMtytT6X%2FCqc%2B7iT4%2FugQ4DUzNpoBseHY19YysITmcxlkyGhc%2FxULJp80DVO2OUZ2xLczM6zxLQLoeX1%2BovEnezcK53yheVHKySnwwiC7sQQKCxjRttB&X-Amz-Signature=94ed60041fbc9d377fb4c42cdb1150b89804cf815d9cc0f7e03f6252ce047f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z62P6MV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEJ3KMNwLwCDT%2B6%2BPjHq7ecLbsqSPrlDmLxo82BL6m1AAiEAxosFDv7sbyT0j%2BHwezqpTapd241APqdY3JTv%2Fax5O0oq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGkijuSOOPnrNqEqDyrcAzRonisxMefhbR9AylrmHi%2B5LKHuvh%2F0Fvqcv3Ss%2BcIfpGACHgGaFF7vHTnZjoLj37E6JiLWCWKlYKDp2JuchF%2BwSzf%2FIOOmkFLnVGjma9HPZ21hNDzhuWGHzhoes1RX%2FFsMKZMq13CWhZFjVRa%2BDmX0cuR0GrAHJp7SESTAOnlt%2BE13CZOAxoPm%2FdNWqWMnrfwZlinndsHkY8UCfWtAopcz%2B7WE0Jh6wU%2BCw%2FOOmZygPFvDadEXCRcXD8oMwIxPsSgsL7ib0%2F2eFeIvkZDSfH44NZFVV9NLSqX3gA9tkkTYXpTJrDAEKiNBr8leRSRmEinv6MKOQUX5Ya8cToBQwJuq1U0wuisHVEc5f4LUnjUhW0P2PXl7nFGu6nJ9L8UanUX9If6buQPJ6BVvNwMEcVnPWr8rJz52fslHek%2BwpTY6LgIKm2EYnmEj9uGywIAdBwL2aahP%2BFvQseJtFAEwLOa6WnJeCfYj2q%2Ba2X%2FLnQ%2FMzQAxW2MbUjfl3SzgJoh%2BmqWTlcC%2FxnP6Dvd9sqWSYhcWkyXS3XV5ijLdUPH1RWwTGKTbxrkwFQPgobbGBZ%2FvWg678h4A6I0LdbOMUMkg1rwGUWzeM80rid65Uo1f8%2Fibgv3DlGZlNYzLRjarMMq%2F5MMGOqUBZO03Hf4fRMiYuRtS%2BHX0BElDgWJSrHaYvz6b5YMSMMwkX4LP1NL%2B769z7L%2Fw1HLBQh%2Fyv%2BLwM7VrKjMyTEGIdTFD755xzCcj%2Fwhp7jARIMtytT6X%2FCqc%2B7iT4%2FugQ4DUzNpoBseHY19YysITmcxlkyGhc%2FxULJp80DVO2OUZ2xLczM6zxLQLoeX1%2BovEnezcK53yheVHKySnwwiC7sQQKCxjRttB&X-Amz-Signature=fb5fe7b09f025ee3592795a73ef5df61a72fa90362c8e08c438a198c2d865f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z62P6MV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEJ3KMNwLwCDT%2B6%2BPjHq7ecLbsqSPrlDmLxo82BL6m1AAiEAxosFDv7sbyT0j%2BHwezqpTapd241APqdY3JTv%2Fax5O0oq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGkijuSOOPnrNqEqDyrcAzRonisxMefhbR9AylrmHi%2B5LKHuvh%2F0Fvqcv3Ss%2BcIfpGACHgGaFF7vHTnZjoLj37E6JiLWCWKlYKDp2JuchF%2BwSzf%2FIOOmkFLnVGjma9HPZ21hNDzhuWGHzhoes1RX%2FFsMKZMq13CWhZFjVRa%2BDmX0cuR0GrAHJp7SESTAOnlt%2BE13CZOAxoPm%2FdNWqWMnrfwZlinndsHkY8UCfWtAopcz%2B7WE0Jh6wU%2BCw%2FOOmZygPFvDadEXCRcXD8oMwIxPsSgsL7ib0%2F2eFeIvkZDSfH44NZFVV9NLSqX3gA9tkkTYXpTJrDAEKiNBr8leRSRmEinv6MKOQUX5Ya8cToBQwJuq1U0wuisHVEc5f4LUnjUhW0P2PXl7nFGu6nJ9L8UanUX9If6buQPJ6BVvNwMEcVnPWr8rJz52fslHek%2BwpTY6LgIKm2EYnmEj9uGywIAdBwL2aahP%2BFvQseJtFAEwLOa6WnJeCfYj2q%2Ba2X%2FLnQ%2FMzQAxW2MbUjfl3SzgJoh%2BmqWTlcC%2FxnP6Dvd9sqWSYhcWkyXS3XV5ijLdUPH1RWwTGKTbxrkwFQPgobbGBZ%2FvWg678h4A6I0LdbOMUMkg1rwGUWzeM80rid65Uo1f8%2Fibgv3DlGZlNYzLRjarMMq%2F5MMGOqUBZO03Hf4fRMiYuRtS%2BHX0BElDgWJSrHaYvz6b5YMSMMwkX4LP1NL%2B769z7L%2Fw1HLBQh%2Fyv%2BLwM7VrKjMyTEGIdTFD755xzCcj%2Fwhp7jARIMtytT6X%2FCqc%2B7iT4%2FugQ4DUzNpoBseHY19YysITmcxlkyGhc%2FxULJp80DVO2OUZ2xLczM6zxLQLoeX1%2BovEnezcK53yheVHKySnwwiC7sQQKCxjRttB&X-Amz-Signature=dbbc5a53f6888ec95111415d7d816c3d2ab6390a416a6e72b5a4261e38b212ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z62P6MV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEJ3KMNwLwCDT%2B6%2BPjHq7ecLbsqSPrlDmLxo82BL6m1AAiEAxosFDv7sbyT0j%2BHwezqpTapd241APqdY3JTv%2Fax5O0oq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGkijuSOOPnrNqEqDyrcAzRonisxMefhbR9AylrmHi%2B5LKHuvh%2F0Fvqcv3Ss%2BcIfpGACHgGaFF7vHTnZjoLj37E6JiLWCWKlYKDp2JuchF%2BwSzf%2FIOOmkFLnVGjma9HPZ21hNDzhuWGHzhoes1RX%2FFsMKZMq13CWhZFjVRa%2BDmX0cuR0GrAHJp7SESTAOnlt%2BE13CZOAxoPm%2FdNWqWMnrfwZlinndsHkY8UCfWtAopcz%2B7WE0Jh6wU%2BCw%2FOOmZygPFvDadEXCRcXD8oMwIxPsSgsL7ib0%2F2eFeIvkZDSfH44NZFVV9NLSqX3gA9tkkTYXpTJrDAEKiNBr8leRSRmEinv6MKOQUX5Ya8cToBQwJuq1U0wuisHVEc5f4LUnjUhW0P2PXl7nFGu6nJ9L8UanUX9If6buQPJ6BVvNwMEcVnPWr8rJz52fslHek%2BwpTY6LgIKm2EYnmEj9uGywIAdBwL2aahP%2BFvQseJtFAEwLOa6WnJeCfYj2q%2Ba2X%2FLnQ%2FMzQAxW2MbUjfl3SzgJoh%2BmqWTlcC%2FxnP6Dvd9sqWSYhcWkyXS3XV5ijLdUPH1RWwTGKTbxrkwFQPgobbGBZ%2FvWg678h4A6I0LdbOMUMkg1rwGUWzeM80rid65Uo1f8%2Fibgv3DlGZlNYzLRjarMMq%2F5MMGOqUBZO03Hf4fRMiYuRtS%2BHX0BElDgWJSrHaYvz6b5YMSMMwkX4LP1NL%2B769z7L%2Fw1HLBQh%2Fyv%2BLwM7VrKjMyTEGIdTFD755xzCcj%2Fwhp7jARIMtytT6X%2FCqc%2B7iT4%2FugQ4DUzNpoBseHY19YysITmcxlkyGhc%2FxULJp80DVO2OUZ2xLczM6zxLQLoeX1%2BovEnezcK53yheVHKySnwwiC7sQQKCxjRttB&X-Amz-Signature=4ee95f22d8ad0efc63792f4fec15f6006ec0532c67ffc66782cb3b115f69b763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z62P6MV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEJ3KMNwLwCDT%2B6%2BPjHq7ecLbsqSPrlDmLxo82BL6m1AAiEAxosFDv7sbyT0j%2BHwezqpTapd241APqdY3JTv%2Fax5O0oq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGkijuSOOPnrNqEqDyrcAzRonisxMefhbR9AylrmHi%2B5LKHuvh%2F0Fvqcv3Ss%2BcIfpGACHgGaFF7vHTnZjoLj37E6JiLWCWKlYKDp2JuchF%2BwSzf%2FIOOmkFLnVGjma9HPZ21hNDzhuWGHzhoes1RX%2FFsMKZMq13CWhZFjVRa%2BDmX0cuR0GrAHJp7SESTAOnlt%2BE13CZOAxoPm%2FdNWqWMnrfwZlinndsHkY8UCfWtAopcz%2B7WE0Jh6wU%2BCw%2FOOmZygPFvDadEXCRcXD8oMwIxPsSgsL7ib0%2F2eFeIvkZDSfH44NZFVV9NLSqX3gA9tkkTYXpTJrDAEKiNBr8leRSRmEinv6MKOQUX5Ya8cToBQwJuq1U0wuisHVEc5f4LUnjUhW0P2PXl7nFGu6nJ9L8UanUX9If6buQPJ6BVvNwMEcVnPWr8rJz52fslHek%2BwpTY6LgIKm2EYnmEj9uGywIAdBwL2aahP%2BFvQseJtFAEwLOa6WnJeCfYj2q%2Ba2X%2FLnQ%2FMzQAxW2MbUjfl3SzgJoh%2BmqWTlcC%2FxnP6Dvd9sqWSYhcWkyXS3XV5ijLdUPH1RWwTGKTbxrkwFQPgobbGBZ%2FvWg678h4A6I0LdbOMUMkg1rwGUWzeM80rid65Uo1f8%2Fibgv3DlGZlNYzLRjarMMq%2F5MMGOqUBZO03Hf4fRMiYuRtS%2BHX0BElDgWJSrHaYvz6b5YMSMMwkX4LP1NL%2B769z7L%2Fw1HLBQh%2Fyv%2BLwM7VrKjMyTEGIdTFD755xzCcj%2Fwhp7jARIMtytT6X%2FCqc%2B7iT4%2FugQ4DUzNpoBseHY19YysITmcxlkyGhc%2FxULJp80DVO2OUZ2xLczM6zxLQLoeX1%2BovEnezcK53yheVHKySnwwiC7sQQKCxjRttB&X-Amz-Signature=3d13d4584785ad137f9ff738afbb1c66528ebbc4f469b34a9539affbe7c74f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z62P6MV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEJ3KMNwLwCDT%2B6%2BPjHq7ecLbsqSPrlDmLxo82BL6m1AAiEAxosFDv7sbyT0j%2BHwezqpTapd241APqdY3JTv%2Fax5O0oq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGkijuSOOPnrNqEqDyrcAzRonisxMefhbR9AylrmHi%2B5LKHuvh%2F0Fvqcv3Ss%2BcIfpGACHgGaFF7vHTnZjoLj37E6JiLWCWKlYKDp2JuchF%2BwSzf%2FIOOmkFLnVGjma9HPZ21hNDzhuWGHzhoes1RX%2FFsMKZMq13CWhZFjVRa%2BDmX0cuR0GrAHJp7SESTAOnlt%2BE13CZOAxoPm%2FdNWqWMnrfwZlinndsHkY8UCfWtAopcz%2B7WE0Jh6wU%2BCw%2FOOmZygPFvDadEXCRcXD8oMwIxPsSgsL7ib0%2F2eFeIvkZDSfH44NZFVV9NLSqX3gA9tkkTYXpTJrDAEKiNBr8leRSRmEinv6MKOQUX5Ya8cToBQwJuq1U0wuisHVEc5f4LUnjUhW0P2PXl7nFGu6nJ9L8UanUX9If6buQPJ6BVvNwMEcVnPWr8rJz52fslHek%2BwpTY6LgIKm2EYnmEj9uGywIAdBwL2aahP%2BFvQseJtFAEwLOa6WnJeCfYj2q%2Ba2X%2FLnQ%2FMzQAxW2MbUjfl3SzgJoh%2BmqWTlcC%2FxnP6Dvd9sqWSYhcWkyXS3XV5ijLdUPH1RWwTGKTbxrkwFQPgobbGBZ%2FvWg678h4A6I0LdbOMUMkg1rwGUWzeM80rid65Uo1f8%2Fibgv3DlGZlNYzLRjarMMq%2F5MMGOqUBZO03Hf4fRMiYuRtS%2BHX0BElDgWJSrHaYvz6b5YMSMMwkX4LP1NL%2B769z7L%2Fw1HLBQh%2Fyv%2BLwM7VrKjMyTEGIdTFD755xzCcj%2Fwhp7jARIMtytT6X%2FCqc%2B7iT4%2FugQ4DUzNpoBseHY19YysITmcxlkyGhc%2FxULJp80DVO2OUZ2xLczM6zxLQLoeX1%2BovEnezcK53yheVHKySnwwiC7sQQKCxjRttB&X-Amz-Signature=3a5aeb4349a7d27a49608ec7fceb5c85815193eceaf31a02811868580cf2914b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
