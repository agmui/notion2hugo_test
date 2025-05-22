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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLXMI5V%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDFw7%2FfJm67azy%2FCLX2OjMfy0b66s%2Fzchkhdq0DecQWpAIhAOH7CDoMu2ESMZa43DNSkm12feyg%2BR32%2BCu47FrJ1Az%2FKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYLfV2Gk7uFaeS2eUq3AOFVykD1RVIZ7DhFZ%2FNmGnTQO00%2B8xDHLXFRGxmUgSZVOarXLJ3s5eIktBogpEW0PpB8aM9davv1Eh9MKB98cbRasT1EDfpTWLUGzwAckAw0mc80bzkNmARZxvLwLoso1ySV49VoVFYfdh5NC0oC49IiLl0mC%2BwpcQubo2KQV%2FdkRZfoFvCoOWEzDj766ffnX4f4MoxnUEsEbtBH0IwlfhVglXY8hNoZywXWcEo31RjkW0BicmWEvD4Vk7fErsNfpItGT%2BkMcWf9Hzx19XxmYvB3COyOnj7vxSVT5TIjcUNdAYRJmGDde6YWIAcr4T79DIeSr6gDciKMwCV5%2FCpfabQDlvtKRdaJ%2BGP1S7tUpLu8Nmww%2F5vxg5Efp2UPpao9txpTJ0zs9QwNT3sxZyR7FVNg2lUaPtFXFm5MWNPamTrYUVaNUOjDNigQiQvZI%2FbqS4VwCHYg6ZHVjxLXoB%2F7B29%2FxWBl1GZUUKgkCgrS2ReFyrkS4wYFofZihO5OlVqPz2Ysz5URSLEwhDwZ2ene%2FE%2FUrpd3TpLIsQ0pk5OA0k7rm27SvtonxnRqw63RuCVb%2BD3TFeLY4O6xJhgqwhtFKkwiaxa56iT4XXrrcMPrLc89%2F6Lp8pLaseavL1I%2FjCm4rzBBjqkAa3VPmpoiH0KCegWkOC7Kp43hRU5AAaWZXLSRdSsznyls3TxpeX6ANPuFghZ2YzwV%2BbE0DUDixL%2BgsMHZ4LSLn%2Fz5S%2FHJcyppgN7z%2FcHC2ukgevNgcANAOzaD3wsv0w79LcX%2BAism6u1c6uWismA%2BpTSpUeGeodb4%2BVEmlAL7E85lRlix0RuhcAERJGPuWKTvAPulFsqnNvFuRgeDJi96jhu1E7Q&X-Amz-Signature=bd1be41df4788dd65e5f3e5cc6385213baae756f75cde7cfcc417167d6096e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLXMI5V%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDFw7%2FfJm67azy%2FCLX2OjMfy0b66s%2Fzchkhdq0DecQWpAIhAOH7CDoMu2ESMZa43DNSkm12feyg%2BR32%2BCu47FrJ1Az%2FKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYLfV2Gk7uFaeS2eUq3AOFVykD1RVIZ7DhFZ%2FNmGnTQO00%2B8xDHLXFRGxmUgSZVOarXLJ3s5eIktBogpEW0PpB8aM9davv1Eh9MKB98cbRasT1EDfpTWLUGzwAckAw0mc80bzkNmARZxvLwLoso1ySV49VoVFYfdh5NC0oC49IiLl0mC%2BwpcQubo2KQV%2FdkRZfoFvCoOWEzDj766ffnX4f4MoxnUEsEbtBH0IwlfhVglXY8hNoZywXWcEo31RjkW0BicmWEvD4Vk7fErsNfpItGT%2BkMcWf9Hzx19XxmYvB3COyOnj7vxSVT5TIjcUNdAYRJmGDde6YWIAcr4T79DIeSr6gDciKMwCV5%2FCpfabQDlvtKRdaJ%2BGP1S7tUpLu8Nmww%2F5vxg5Efp2UPpao9txpTJ0zs9QwNT3sxZyR7FVNg2lUaPtFXFm5MWNPamTrYUVaNUOjDNigQiQvZI%2FbqS4VwCHYg6ZHVjxLXoB%2F7B29%2FxWBl1GZUUKgkCgrS2ReFyrkS4wYFofZihO5OlVqPz2Ysz5URSLEwhDwZ2ene%2FE%2FUrpd3TpLIsQ0pk5OA0k7rm27SvtonxnRqw63RuCVb%2BD3TFeLY4O6xJhgqwhtFKkwiaxa56iT4XXrrcMPrLc89%2F6Lp8pLaseavL1I%2FjCm4rzBBjqkAa3VPmpoiH0KCegWkOC7Kp43hRU5AAaWZXLSRdSsznyls3TxpeX6ANPuFghZ2YzwV%2BbE0DUDixL%2BgsMHZ4LSLn%2Fz5S%2FHJcyppgN7z%2FcHC2ukgevNgcANAOzaD3wsv0w79LcX%2BAism6u1c6uWismA%2BpTSpUeGeodb4%2BVEmlAL7E85lRlix0RuhcAERJGPuWKTvAPulFsqnNvFuRgeDJi96jhu1E7Q&X-Amz-Signature=b852319c8226494ab0b5401b92bbd47a398516387b4f7ad5d522c382270cee6f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLXMI5V%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDFw7%2FfJm67azy%2FCLX2OjMfy0b66s%2Fzchkhdq0DecQWpAIhAOH7CDoMu2ESMZa43DNSkm12feyg%2BR32%2BCu47FrJ1Az%2FKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYLfV2Gk7uFaeS2eUq3AOFVykD1RVIZ7DhFZ%2FNmGnTQO00%2B8xDHLXFRGxmUgSZVOarXLJ3s5eIktBogpEW0PpB8aM9davv1Eh9MKB98cbRasT1EDfpTWLUGzwAckAw0mc80bzkNmARZxvLwLoso1ySV49VoVFYfdh5NC0oC49IiLl0mC%2BwpcQubo2KQV%2FdkRZfoFvCoOWEzDj766ffnX4f4MoxnUEsEbtBH0IwlfhVglXY8hNoZywXWcEo31RjkW0BicmWEvD4Vk7fErsNfpItGT%2BkMcWf9Hzx19XxmYvB3COyOnj7vxSVT5TIjcUNdAYRJmGDde6YWIAcr4T79DIeSr6gDciKMwCV5%2FCpfabQDlvtKRdaJ%2BGP1S7tUpLu8Nmww%2F5vxg5Efp2UPpao9txpTJ0zs9QwNT3sxZyR7FVNg2lUaPtFXFm5MWNPamTrYUVaNUOjDNigQiQvZI%2FbqS4VwCHYg6ZHVjxLXoB%2F7B29%2FxWBl1GZUUKgkCgrS2ReFyrkS4wYFofZihO5OlVqPz2Ysz5URSLEwhDwZ2ene%2FE%2FUrpd3TpLIsQ0pk5OA0k7rm27SvtonxnRqw63RuCVb%2BD3TFeLY4O6xJhgqwhtFKkwiaxa56iT4XXrrcMPrLc89%2F6Lp8pLaseavL1I%2FjCm4rzBBjqkAa3VPmpoiH0KCegWkOC7Kp43hRU5AAaWZXLSRdSsznyls3TxpeX6ANPuFghZ2YzwV%2BbE0DUDixL%2BgsMHZ4LSLn%2Fz5S%2FHJcyppgN7z%2FcHC2ukgevNgcANAOzaD3wsv0w79LcX%2BAism6u1c6uWismA%2BpTSpUeGeodb4%2BVEmlAL7E85lRlix0RuhcAERJGPuWKTvAPulFsqnNvFuRgeDJi96jhu1E7Q&X-Amz-Signature=15a411d11c148062289305de312c12393bada0911b3cf5e3a5bf67fa0ee6385a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLXMI5V%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDFw7%2FfJm67azy%2FCLX2OjMfy0b66s%2Fzchkhdq0DecQWpAIhAOH7CDoMu2ESMZa43DNSkm12feyg%2BR32%2BCu47FrJ1Az%2FKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYLfV2Gk7uFaeS2eUq3AOFVykD1RVIZ7DhFZ%2FNmGnTQO00%2B8xDHLXFRGxmUgSZVOarXLJ3s5eIktBogpEW0PpB8aM9davv1Eh9MKB98cbRasT1EDfpTWLUGzwAckAw0mc80bzkNmARZxvLwLoso1ySV49VoVFYfdh5NC0oC49IiLl0mC%2BwpcQubo2KQV%2FdkRZfoFvCoOWEzDj766ffnX4f4MoxnUEsEbtBH0IwlfhVglXY8hNoZywXWcEo31RjkW0BicmWEvD4Vk7fErsNfpItGT%2BkMcWf9Hzx19XxmYvB3COyOnj7vxSVT5TIjcUNdAYRJmGDde6YWIAcr4T79DIeSr6gDciKMwCV5%2FCpfabQDlvtKRdaJ%2BGP1S7tUpLu8Nmww%2F5vxg5Efp2UPpao9txpTJ0zs9QwNT3sxZyR7FVNg2lUaPtFXFm5MWNPamTrYUVaNUOjDNigQiQvZI%2FbqS4VwCHYg6ZHVjxLXoB%2F7B29%2FxWBl1GZUUKgkCgrS2ReFyrkS4wYFofZihO5OlVqPz2Ysz5URSLEwhDwZ2ene%2FE%2FUrpd3TpLIsQ0pk5OA0k7rm27SvtonxnRqw63RuCVb%2BD3TFeLY4O6xJhgqwhtFKkwiaxa56iT4XXrrcMPrLc89%2F6Lp8pLaseavL1I%2FjCm4rzBBjqkAa3VPmpoiH0KCegWkOC7Kp43hRU5AAaWZXLSRdSsznyls3TxpeX6ANPuFghZ2YzwV%2BbE0DUDixL%2BgsMHZ4LSLn%2Fz5S%2FHJcyppgN7z%2FcHC2ukgevNgcANAOzaD3wsv0w79LcX%2BAism6u1c6uWismA%2BpTSpUeGeodb4%2BVEmlAL7E85lRlix0RuhcAERJGPuWKTvAPulFsqnNvFuRgeDJi96jhu1E7Q&X-Amz-Signature=bb33f29de40ba322b497c52f2abffc4d69739fe3702733c5c92201d1475e715c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLXMI5V%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDFw7%2FfJm67azy%2FCLX2OjMfy0b66s%2Fzchkhdq0DecQWpAIhAOH7CDoMu2ESMZa43DNSkm12feyg%2BR32%2BCu47FrJ1Az%2FKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYLfV2Gk7uFaeS2eUq3AOFVykD1RVIZ7DhFZ%2FNmGnTQO00%2B8xDHLXFRGxmUgSZVOarXLJ3s5eIktBogpEW0PpB8aM9davv1Eh9MKB98cbRasT1EDfpTWLUGzwAckAw0mc80bzkNmARZxvLwLoso1ySV49VoVFYfdh5NC0oC49IiLl0mC%2BwpcQubo2KQV%2FdkRZfoFvCoOWEzDj766ffnX4f4MoxnUEsEbtBH0IwlfhVglXY8hNoZywXWcEo31RjkW0BicmWEvD4Vk7fErsNfpItGT%2BkMcWf9Hzx19XxmYvB3COyOnj7vxSVT5TIjcUNdAYRJmGDde6YWIAcr4T79DIeSr6gDciKMwCV5%2FCpfabQDlvtKRdaJ%2BGP1S7tUpLu8Nmww%2F5vxg5Efp2UPpao9txpTJ0zs9QwNT3sxZyR7FVNg2lUaPtFXFm5MWNPamTrYUVaNUOjDNigQiQvZI%2FbqS4VwCHYg6ZHVjxLXoB%2F7B29%2FxWBl1GZUUKgkCgrS2ReFyrkS4wYFofZihO5OlVqPz2Ysz5URSLEwhDwZ2ene%2FE%2FUrpd3TpLIsQ0pk5OA0k7rm27SvtonxnRqw63RuCVb%2BD3TFeLY4O6xJhgqwhtFKkwiaxa56iT4XXrrcMPrLc89%2F6Lp8pLaseavL1I%2FjCm4rzBBjqkAa3VPmpoiH0KCegWkOC7Kp43hRU5AAaWZXLSRdSsznyls3TxpeX6ANPuFghZ2YzwV%2BbE0DUDixL%2BgsMHZ4LSLn%2Fz5S%2FHJcyppgN7z%2FcHC2ukgevNgcANAOzaD3wsv0w79LcX%2BAism6u1c6uWismA%2BpTSpUeGeodb4%2BVEmlAL7E85lRlix0RuhcAERJGPuWKTvAPulFsqnNvFuRgeDJi96jhu1E7Q&X-Amz-Signature=bb167d784e25332cf97782bad9e8cc9aaba3e529f932b4fce3830d57bd84c6ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLXMI5V%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDFw7%2FfJm67azy%2FCLX2OjMfy0b66s%2Fzchkhdq0DecQWpAIhAOH7CDoMu2ESMZa43DNSkm12feyg%2BR32%2BCu47FrJ1Az%2FKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYLfV2Gk7uFaeS2eUq3AOFVykD1RVIZ7DhFZ%2FNmGnTQO00%2B8xDHLXFRGxmUgSZVOarXLJ3s5eIktBogpEW0PpB8aM9davv1Eh9MKB98cbRasT1EDfpTWLUGzwAckAw0mc80bzkNmARZxvLwLoso1ySV49VoVFYfdh5NC0oC49IiLl0mC%2BwpcQubo2KQV%2FdkRZfoFvCoOWEzDj766ffnX4f4MoxnUEsEbtBH0IwlfhVglXY8hNoZywXWcEo31RjkW0BicmWEvD4Vk7fErsNfpItGT%2BkMcWf9Hzx19XxmYvB3COyOnj7vxSVT5TIjcUNdAYRJmGDde6YWIAcr4T79DIeSr6gDciKMwCV5%2FCpfabQDlvtKRdaJ%2BGP1S7tUpLu8Nmww%2F5vxg5Efp2UPpao9txpTJ0zs9QwNT3sxZyR7FVNg2lUaPtFXFm5MWNPamTrYUVaNUOjDNigQiQvZI%2FbqS4VwCHYg6ZHVjxLXoB%2F7B29%2FxWBl1GZUUKgkCgrS2ReFyrkS4wYFofZihO5OlVqPz2Ysz5URSLEwhDwZ2ene%2FE%2FUrpd3TpLIsQ0pk5OA0k7rm27SvtonxnRqw63RuCVb%2BD3TFeLY4O6xJhgqwhtFKkwiaxa56iT4XXrrcMPrLc89%2F6Lp8pLaseavL1I%2FjCm4rzBBjqkAa3VPmpoiH0KCegWkOC7Kp43hRU5AAaWZXLSRdSsznyls3TxpeX6ANPuFghZ2YzwV%2BbE0DUDixL%2BgsMHZ4LSLn%2Fz5S%2FHJcyppgN7z%2FcHC2ukgevNgcANAOzaD3wsv0w79LcX%2BAism6u1c6uWismA%2BpTSpUeGeodb4%2BVEmlAL7E85lRlix0RuhcAERJGPuWKTvAPulFsqnNvFuRgeDJi96jhu1E7Q&X-Amz-Signature=f11403fc7a9b8046e1feb9ee1cc1f0578cf5577557a5e3681eb72af0543e932d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLXMI5V%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDFw7%2FfJm67azy%2FCLX2OjMfy0b66s%2Fzchkhdq0DecQWpAIhAOH7CDoMu2ESMZa43DNSkm12feyg%2BR32%2BCu47FrJ1Az%2FKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYLfV2Gk7uFaeS2eUq3AOFVykD1RVIZ7DhFZ%2FNmGnTQO00%2B8xDHLXFRGxmUgSZVOarXLJ3s5eIktBogpEW0PpB8aM9davv1Eh9MKB98cbRasT1EDfpTWLUGzwAckAw0mc80bzkNmARZxvLwLoso1ySV49VoVFYfdh5NC0oC49IiLl0mC%2BwpcQubo2KQV%2FdkRZfoFvCoOWEzDj766ffnX4f4MoxnUEsEbtBH0IwlfhVglXY8hNoZywXWcEo31RjkW0BicmWEvD4Vk7fErsNfpItGT%2BkMcWf9Hzx19XxmYvB3COyOnj7vxSVT5TIjcUNdAYRJmGDde6YWIAcr4T79DIeSr6gDciKMwCV5%2FCpfabQDlvtKRdaJ%2BGP1S7tUpLu8Nmww%2F5vxg5Efp2UPpao9txpTJ0zs9QwNT3sxZyR7FVNg2lUaPtFXFm5MWNPamTrYUVaNUOjDNigQiQvZI%2FbqS4VwCHYg6ZHVjxLXoB%2F7B29%2FxWBl1GZUUKgkCgrS2ReFyrkS4wYFofZihO5OlVqPz2Ysz5URSLEwhDwZ2ene%2FE%2FUrpd3TpLIsQ0pk5OA0k7rm27SvtonxnRqw63RuCVb%2BD3TFeLY4O6xJhgqwhtFKkwiaxa56iT4XXrrcMPrLc89%2F6Lp8pLaseavL1I%2FjCm4rzBBjqkAa3VPmpoiH0KCegWkOC7Kp43hRU5AAaWZXLSRdSsznyls3TxpeX6ANPuFghZ2YzwV%2BbE0DUDixL%2BgsMHZ4LSLn%2Fz5S%2FHJcyppgN7z%2FcHC2ukgevNgcANAOzaD3wsv0w79LcX%2BAism6u1c6uWismA%2BpTSpUeGeodb4%2BVEmlAL7E85lRlix0RuhcAERJGPuWKTvAPulFsqnNvFuRgeDJi96jhu1E7Q&X-Amz-Signature=98fd3e2a8b4a2b46b6eb02a4eee8f124f75feef7b1333c82a9e1ab0fa209f462&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLXMI5V%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDFw7%2FfJm67azy%2FCLX2OjMfy0b66s%2Fzchkhdq0DecQWpAIhAOH7CDoMu2ESMZa43DNSkm12feyg%2BR32%2BCu47FrJ1Az%2FKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYLfV2Gk7uFaeS2eUq3AOFVykD1RVIZ7DhFZ%2FNmGnTQO00%2B8xDHLXFRGxmUgSZVOarXLJ3s5eIktBogpEW0PpB8aM9davv1Eh9MKB98cbRasT1EDfpTWLUGzwAckAw0mc80bzkNmARZxvLwLoso1ySV49VoVFYfdh5NC0oC49IiLl0mC%2BwpcQubo2KQV%2FdkRZfoFvCoOWEzDj766ffnX4f4MoxnUEsEbtBH0IwlfhVglXY8hNoZywXWcEo31RjkW0BicmWEvD4Vk7fErsNfpItGT%2BkMcWf9Hzx19XxmYvB3COyOnj7vxSVT5TIjcUNdAYRJmGDde6YWIAcr4T79DIeSr6gDciKMwCV5%2FCpfabQDlvtKRdaJ%2BGP1S7tUpLu8Nmww%2F5vxg5Efp2UPpao9txpTJ0zs9QwNT3sxZyR7FVNg2lUaPtFXFm5MWNPamTrYUVaNUOjDNigQiQvZI%2FbqS4VwCHYg6ZHVjxLXoB%2F7B29%2FxWBl1GZUUKgkCgrS2ReFyrkS4wYFofZihO5OlVqPz2Ysz5URSLEwhDwZ2ene%2FE%2FUrpd3TpLIsQ0pk5OA0k7rm27SvtonxnRqw63RuCVb%2BD3TFeLY4O6xJhgqwhtFKkwiaxa56iT4XXrrcMPrLc89%2F6Lp8pLaseavL1I%2FjCm4rzBBjqkAa3VPmpoiH0KCegWkOC7Kp43hRU5AAaWZXLSRdSsznyls3TxpeX6ANPuFghZ2YzwV%2BbE0DUDixL%2BgsMHZ4LSLn%2Fz5S%2FHJcyppgN7z%2FcHC2ukgevNgcANAOzaD3wsv0w79LcX%2BAism6u1c6uWismA%2BpTSpUeGeodb4%2BVEmlAL7E85lRlix0RuhcAERJGPuWKTvAPulFsqnNvFuRgeDJi96jhu1E7Q&X-Amz-Signature=8877d0e92573643e6d1d5755351bede29a428bdb5e840d7033901d15d9052c12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
