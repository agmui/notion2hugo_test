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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHD4WI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEIJFy4LGlZsNDQP7ZZvXrIyidElJapiTIfJv3vB3B6eAiEAi3otBOtR6vIAK5QQ%2BKHx0si2cydL4WJQus5vLR8bSNsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4k7FljhT2WD4noHCrcA4ex8x98xifqKnlQNvCSPTrLsNpDJAslbAKazit0yTY6Pf8u1zMKovGKyd1DfG1mX92sObrXSh8Ysx%2BuZLDUaE1bMM9oHpLm0VTfCJLpgu1Ml44%2F64%2BulHeqNBfbq15xxDoXWKhbTUTXJXefzyzV%2B%2BLw41wxzuLIzDWvTuj4wZzodC547ON%2B7ctqw6Z22cnd%2BIEiR4iSq7cF4%2FL8kSdIf0a0959wLJT11PzA7cl72kgmEQKv4uvPiP%2B0dpTxW5THYJRZLJEPyFQRqq8u66oLhxk1xuECnPiOfWrQarp5lWR1RDCIVcIWmTP97%2F7hetDw3Cxuf6auXHKerG60vVBR%2BVNKzPMN%2FN2n24ZBXgJqRWcdIRqnTrqEkhu4Khc0OywaTRMzFgMoUVb%2FM1QohZinT%2Fe51rtQuRlBrtD%2BuKI5Bz5IDHfk38FuoN%2Bp4NURsQiHDvYXSD4nsdAz6y0HC4GgxPH3YXnV86yTnmUGFsQQtavWaJSMkUc%2FmOC7Q93XuY08qp%2BHFx7EKUgDcy%2Fb8M0r0Vs2DYUuhVjy3a2wRJxmGXKzEXqlEudKDxPxr0Rt5gvlHAfoQeM858ydba%2BSF27j8H0xJRz1XjrFTLLuwvZtk3qxxjpRaoH6BPORsz%2FZMKu1n78GOqUBILfgWUEoxokJ5UtP7sn4FNDEync4%2BMwlCkfSbyT5eS%2FwlhyWFzP2khbT4J4W1zXLhpgGPu9mK4YInUzmOyPl%2B1nWLPkARt3Es2PyXgHTtLpJu3CpQxbtZ2gXEBUvW%2FPjTRulVzMNEEkQbEe9t5rF%2BzDrXdG%2F4y0XzSs3buoODvKafTtOaxEVi0h%2F6Qh9JQWXmEtbFs59hTYMHlQu5wmHaOJ4vprh&X-Amz-Signature=2e72c04afb306c8d45512d4857be31fa4db1eadb959293672d81fcc20936316e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHD4WI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEIJFy4LGlZsNDQP7ZZvXrIyidElJapiTIfJv3vB3B6eAiEAi3otBOtR6vIAK5QQ%2BKHx0si2cydL4WJQus5vLR8bSNsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4k7FljhT2WD4noHCrcA4ex8x98xifqKnlQNvCSPTrLsNpDJAslbAKazit0yTY6Pf8u1zMKovGKyd1DfG1mX92sObrXSh8Ysx%2BuZLDUaE1bMM9oHpLm0VTfCJLpgu1Ml44%2F64%2BulHeqNBfbq15xxDoXWKhbTUTXJXefzyzV%2B%2BLw41wxzuLIzDWvTuj4wZzodC547ON%2B7ctqw6Z22cnd%2BIEiR4iSq7cF4%2FL8kSdIf0a0959wLJT11PzA7cl72kgmEQKv4uvPiP%2B0dpTxW5THYJRZLJEPyFQRqq8u66oLhxk1xuECnPiOfWrQarp5lWR1RDCIVcIWmTP97%2F7hetDw3Cxuf6auXHKerG60vVBR%2BVNKzPMN%2FN2n24ZBXgJqRWcdIRqnTrqEkhu4Khc0OywaTRMzFgMoUVb%2FM1QohZinT%2Fe51rtQuRlBrtD%2BuKI5Bz5IDHfk38FuoN%2Bp4NURsQiHDvYXSD4nsdAz6y0HC4GgxPH3YXnV86yTnmUGFsQQtavWaJSMkUc%2FmOC7Q93XuY08qp%2BHFx7EKUgDcy%2Fb8M0r0Vs2DYUuhVjy3a2wRJxmGXKzEXqlEudKDxPxr0Rt5gvlHAfoQeM858ydba%2BSF27j8H0xJRz1XjrFTLLuwvZtk3qxxjpRaoH6BPORsz%2FZMKu1n78GOqUBILfgWUEoxokJ5UtP7sn4FNDEync4%2BMwlCkfSbyT5eS%2FwlhyWFzP2khbT4J4W1zXLhpgGPu9mK4YInUzmOyPl%2B1nWLPkARt3Es2PyXgHTtLpJu3CpQxbtZ2gXEBUvW%2FPjTRulVzMNEEkQbEe9t5rF%2BzDrXdG%2F4y0XzSs3buoODvKafTtOaxEVi0h%2F6Qh9JQWXmEtbFs59hTYMHlQu5wmHaOJ4vprh&X-Amz-Signature=b5c1ac5b1f00a4dfecb837f2b09ef64d0af060d9ec63363deae9fb765eb39466&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHD4WI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEIJFy4LGlZsNDQP7ZZvXrIyidElJapiTIfJv3vB3B6eAiEAi3otBOtR6vIAK5QQ%2BKHx0si2cydL4WJQus5vLR8bSNsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4k7FljhT2WD4noHCrcA4ex8x98xifqKnlQNvCSPTrLsNpDJAslbAKazit0yTY6Pf8u1zMKovGKyd1DfG1mX92sObrXSh8Ysx%2BuZLDUaE1bMM9oHpLm0VTfCJLpgu1Ml44%2F64%2BulHeqNBfbq15xxDoXWKhbTUTXJXefzyzV%2B%2BLw41wxzuLIzDWvTuj4wZzodC547ON%2B7ctqw6Z22cnd%2BIEiR4iSq7cF4%2FL8kSdIf0a0959wLJT11PzA7cl72kgmEQKv4uvPiP%2B0dpTxW5THYJRZLJEPyFQRqq8u66oLhxk1xuECnPiOfWrQarp5lWR1RDCIVcIWmTP97%2F7hetDw3Cxuf6auXHKerG60vVBR%2BVNKzPMN%2FN2n24ZBXgJqRWcdIRqnTrqEkhu4Khc0OywaTRMzFgMoUVb%2FM1QohZinT%2Fe51rtQuRlBrtD%2BuKI5Bz5IDHfk38FuoN%2Bp4NURsQiHDvYXSD4nsdAz6y0HC4GgxPH3YXnV86yTnmUGFsQQtavWaJSMkUc%2FmOC7Q93XuY08qp%2BHFx7EKUgDcy%2Fb8M0r0Vs2DYUuhVjy3a2wRJxmGXKzEXqlEudKDxPxr0Rt5gvlHAfoQeM858ydba%2BSF27j8H0xJRz1XjrFTLLuwvZtk3qxxjpRaoH6BPORsz%2FZMKu1n78GOqUBILfgWUEoxokJ5UtP7sn4FNDEync4%2BMwlCkfSbyT5eS%2FwlhyWFzP2khbT4J4W1zXLhpgGPu9mK4YInUzmOyPl%2B1nWLPkARt3Es2PyXgHTtLpJu3CpQxbtZ2gXEBUvW%2FPjTRulVzMNEEkQbEe9t5rF%2BzDrXdG%2F4y0XzSs3buoODvKafTtOaxEVi0h%2F6Qh9JQWXmEtbFs59hTYMHlQu5wmHaOJ4vprh&X-Amz-Signature=cd85a87fdb14be315e20d75ff923dd510d31d153f1f94ea99c98823c880942a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHD4WI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEIJFy4LGlZsNDQP7ZZvXrIyidElJapiTIfJv3vB3B6eAiEAi3otBOtR6vIAK5QQ%2BKHx0si2cydL4WJQus5vLR8bSNsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4k7FljhT2WD4noHCrcA4ex8x98xifqKnlQNvCSPTrLsNpDJAslbAKazit0yTY6Pf8u1zMKovGKyd1DfG1mX92sObrXSh8Ysx%2BuZLDUaE1bMM9oHpLm0VTfCJLpgu1Ml44%2F64%2BulHeqNBfbq15xxDoXWKhbTUTXJXefzyzV%2B%2BLw41wxzuLIzDWvTuj4wZzodC547ON%2B7ctqw6Z22cnd%2BIEiR4iSq7cF4%2FL8kSdIf0a0959wLJT11PzA7cl72kgmEQKv4uvPiP%2B0dpTxW5THYJRZLJEPyFQRqq8u66oLhxk1xuECnPiOfWrQarp5lWR1RDCIVcIWmTP97%2F7hetDw3Cxuf6auXHKerG60vVBR%2BVNKzPMN%2FN2n24ZBXgJqRWcdIRqnTrqEkhu4Khc0OywaTRMzFgMoUVb%2FM1QohZinT%2Fe51rtQuRlBrtD%2BuKI5Bz5IDHfk38FuoN%2Bp4NURsQiHDvYXSD4nsdAz6y0HC4GgxPH3YXnV86yTnmUGFsQQtavWaJSMkUc%2FmOC7Q93XuY08qp%2BHFx7EKUgDcy%2Fb8M0r0Vs2DYUuhVjy3a2wRJxmGXKzEXqlEudKDxPxr0Rt5gvlHAfoQeM858ydba%2BSF27j8H0xJRz1XjrFTLLuwvZtk3qxxjpRaoH6BPORsz%2FZMKu1n78GOqUBILfgWUEoxokJ5UtP7sn4FNDEync4%2BMwlCkfSbyT5eS%2FwlhyWFzP2khbT4J4W1zXLhpgGPu9mK4YInUzmOyPl%2B1nWLPkARt3Es2PyXgHTtLpJu3CpQxbtZ2gXEBUvW%2FPjTRulVzMNEEkQbEe9t5rF%2BzDrXdG%2F4y0XzSs3buoODvKafTtOaxEVi0h%2F6Qh9JQWXmEtbFs59hTYMHlQu5wmHaOJ4vprh&X-Amz-Signature=2cd59e513c534bc58588434dbb202642dfae44b4b4bacc1452859137c25a3096&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHD4WI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEIJFy4LGlZsNDQP7ZZvXrIyidElJapiTIfJv3vB3B6eAiEAi3otBOtR6vIAK5QQ%2BKHx0si2cydL4WJQus5vLR8bSNsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4k7FljhT2WD4noHCrcA4ex8x98xifqKnlQNvCSPTrLsNpDJAslbAKazit0yTY6Pf8u1zMKovGKyd1DfG1mX92sObrXSh8Ysx%2BuZLDUaE1bMM9oHpLm0VTfCJLpgu1Ml44%2F64%2BulHeqNBfbq15xxDoXWKhbTUTXJXefzyzV%2B%2BLw41wxzuLIzDWvTuj4wZzodC547ON%2B7ctqw6Z22cnd%2BIEiR4iSq7cF4%2FL8kSdIf0a0959wLJT11PzA7cl72kgmEQKv4uvPiP%2B0dpTxW5THYJRZLJEPyFQRqq8u66oLhxk1xuECnPiOfWrQarp5lWR1RDCIVcIWmTP97%2F7hetDw3Cxuf6auXHKerG60vVBR%2BVNKzPMN%2FN2n24ZBXgJqRWcdIRqnTrqEkhu4Khc0OywaTRMzFgMoUVb%2FM1QohZinT%2Fe51rtQuRlBrtD%2BuKI5Bz5IDHfk38FuoN%2Bp4NURsQiHDvYXSD4nsdAz6y0HC4GgxPH3YXnV86yTnmUGFsQQtavWaJSMkUc%2FmOC7Q93XuY08qp%2BHFx7EKUgDcy%2Fb8M0r0Vs2DYUuhVjy3a2wRJxmGXKzEXqlEudKDxPxr0Rt5gvlHAfoQeM858ydba%2BSF27j8H0xJRz1XjrFTLLuwvZtk3qxxjpRaoH6BPORsz%2FZMKu1n78GOqUBILfgWUEoxokJ5UtP7sn4FNDEync4%2BMwlCkfSbyT5eS%2FwlhyWFzP2khbT4J4W1zXLhpgGPu9mK4YInUzmOyPl%2B1nWLPkARt3Es2PyXgHTtLpJu3CpQxbtZ2gXEBUvW%2FPjTRulVzMNEEkQbEe9t5rF%2BzDrXdG%2F4y0XzSs3buoODvKafTtOaxEVi0h%2F6Qh9JQWXmEtbFs59hTYMHlQu5wmHaOJ4vprh&X-Amz-Signature=1501e25963f6bebdc3e2c115570cc5719595d6ac8d4baedbe207a618b1834cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHD4WI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEIJFy4LGlZsNDQP7ZZvXrIyidElJapiTIfJv3vB3B6eAiEAi3otBOtR6vIAK5QQ%2BKHx0si2cydL4WJQus5vLR8bSNsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4k7FljhT2WD4noHCrcA4ex8x98xifqKnlQNvCSPTrLsNpDJAslbAKazit0yTY6Pf8u1zMKovGKyd1DfG1mX92sObrXSh8Ysx%2BuZLDUaE1bMM9oHpLm0VTfCJLpgu1Ml44%2F64%2BulHeqNBfbq15xxDoXWKhbTUTXJXefzyzV%2B%2BLw41wxzuLIzDWvTuj4wZzodC547ON%2B7ctqw6Z22cnd%2BIEiR4iSq7cF4%2FL8kSdIf0a0959wLJT11PzA7cl72kgmEQKv4uvPiP%2B0dpTxW5THYJRZLJEPyFQRqq8u66oLhxk1xuECnPiOfWrQarp5lWR1RDCIVcIWmTP97%2F7hetDw3Cxuf6auXHKerG60vVBR%2BVNKzPMN%2FN2n24ZBXgJqRWcdIRqnTrqEkhu4Khc0OywaTRMzFgMoUVb%2FM1QohZinT%2Fe51rtQuRlBrtD%2BuKI5Bz5IDHfk38FuoN%2Bp4NURsQiHDvYXSD4nsdAz6y0HC4GgxPH3YXnV86yTnmUGFsQQtavWaJSMkUc%2FmOC7Q93XuY08qp%2BHFx7EKUgDcy%2Fb8M0r0Vs2DYUuhVjy3a2wRJxmGXKzEXqlEudKDxPxr0Rt5gvlHAfoQeM858ydba%2BSF27j8H0xJRz1XjrFTLLuwvZtk3qxxjpRaoH6BPORsz%2FZMKu1n78GOqUBILfgWUEoxokJ5UtP7sn4FNDEync4%2BMwlCkfSbyT5eS%2FwlhyWFzP2khbT4J4W1zXLhpgGPu9mK4YInUzmOyPl%2B1nWLPkARt3Es2PyXgHTtLpJu3CpQxbtZ2gXEBUvW%2FPjTRulVzMNEEkQbEe9t5rF%2BzDrXdG%2F4y0XzSs3buoODvKafTtOaxEVi0h%2F6Qh9JQWXmEtbFs59hTYMHlQu5wmHaOJ4vprh&X-Amz-Signature=8269102869067afe9eee8df1a12a3bf2258b88404af3a3dbcc76191462bc40f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHD4WI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEIJFy4LGlZsNDQP7ZZvXrIyidElJapiTIfJv3vB3B6eAiEAi3otBOtR6vIAK5QQ%2BKHx0si2cydL4WJQus5vLR8bSNsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4k7FljhT2WD4noHCrcA4ex8x98xifqKnlQNvCSPTrLsNpDJAslbAKazit0yTY6Pf8u1zMKovGKyd1DfG1mX92sObrXSh8Ysx%2BuZLDUaE1bMM9oHpLm0VTfCJLpgu1Ml44%2F64%2BulHeqNBfbq15xxDoXWKhbTUTXJXefzyzV%2B%2BLw41wxzuLIzDWvTuj4wZzodC547ON%2B7ctqw6Z22cnd%2BIEiR4iSq7cF4%2FL8kSdIf0a0959wLJT11PzA7cl72kgmEQKv4uvPiP%2B0dpTxW5THYJRZLJEPyFQRqq8u66oLhxk1xuECnPiOfWrQarp5lWR1RDCIVcIWmTP97%2F7hetDw3Cxuf6auXHKerG60vVBR%2BVNKzPMN%2FN2n24ZBXgJqRWcdIRqnTrqEkhu4Khc0OywaTRMzFgMoUVb%2FM1QohZinT%2Fe51rtQuRlBrtD%2BuKI5Bz5IDHfk38FuoN%2Bp4NURsQiHDvYXSD4nsdAz6y0HC4GgxPH3YXnV86yTnmUGFsQQtavWaJSMkUc%2FmOC7Q93XuY08qp%2BHFx7EKUgDcy%2Fb8M0r0Vs2DYUuhVjy3a2wRJxmGXKzEXqlEudKDxPxr0Rt5gvlHAfoQeM858ydba%2BSF27j8H0xJRz1XjrFTLLuwvZtk3qxxjpRaoH6BPORsz%2FZMKu1n78GOqUBILfgWUEoxokJ5UtP7sn4FNDEync4%2BMwlCkfSbyT5eS%2FwlhyWFzP2khbT4J4W1zXLhpgGPu9mK4YInUzmOyPl%2B1nWLPkARt3Es2PyXgHTtLpJu3CpQxbtZ2gXEBUvW%2FPjTRulVzMNEEkQbEe9t5rF%2BzDrXdG%2F4y0XzSs3buoODvKafTtOaxEVi0h%2F6Qh9JQWXmEtbFs59hTYMHlQu5wmHaOJ4vprh&X-Amz-Signature=d754f13e49e8bd87d12b133b2a999950a25da2823a79ad6f2e7fad12aa365c81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHD4WI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEIJFy4LGlZsNDQP7ZZvXrIyidElJapiTIfJv3vB3B6eAiEAi3otBOtR6vIAK5QQ%2BKHx0si2cydL4WJQus5vLR8bSNsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4k7FljhT2WD4noHCrcA4ex8x98xifqKnlQNvCSPTrLsNpDJAslbAKazit0yTY6Pf8u1zMKovGKyd1DfG1mX92sObrXSh8Ysx%2BuZLDUaE1bMM9oHpLm0VTfCJLpgu1Ml44%2F64%2BulHeqNBfbq15xxDoXWKhbTUTXJXefzyzV%2B%2BLw41wxzuLIzDWvTuj4wZzodC547ON%2B7ctqw6Z22cnd%2BIEiR4iSq7cF4%2FL8kSdIf0a0959wLJT11PzA7cl72kgmEQKv4uvPiP%2B0dpTxW5THYJRZLJEPyFQRqq8u66oLhxk1xuECnPiOfWrQarp5lWR1RDCIVcIWmTP97%2F7hetDw3Cxuf6auXHKerG60vVBR%2BVNKzPMN%2FN2n24ZBXgJqRWcdIRqnTrqEkhu4Khc0OywaTRMzFgMoUVb%2FM1QohZinT%2Fe51rtQuRlBrtD%2BuKI5Bz5IDHfk38FuoN%2Bp4NURsQiHDvYXSD4nsdAz6y0HC4GgxPH3YXnV86yTnmUGFsQQtavWaJSMkUc%2FmOC7Q93XuY08qp%2BHFx7EKUgDcy%2Fb8M0r0Vs2DYUuhVjy3a2wRJxmGXKzEXqlEudKDxPxr0Rt5gvlHAfoQeM858ydba%2BSF27j8H0xJRz1XjrFTLLuwvZtk3qxxjpRaoH6BPORsz%2FZMKu1n78GOqUBILfgWUEoxokJ5UtP7sn4FNDEync4%2BMwlCkfSbyT5eS%2FwlhyWFzP2khbT4J4W1zXLhpgGPu9mK4YInUzmOyPl%2B1nWLPkARt3Es2PyXgHTtLpJu3CpQxbtZ2gXEBUvW%2FPjTRulVzMNEEkQbEe9t5rF%2BzDrXdG%2F4y0XzSs3buoODvKafTtOaxEVi0h%2F6Qh9JQWXmEtbFs59hTYMHlQu5wmHaOJ4vprh&X-Amz-Signature=90fb3fe79c52e462612684ca3a9026b3a5f6eb70a606ced4ca24c866441336f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
