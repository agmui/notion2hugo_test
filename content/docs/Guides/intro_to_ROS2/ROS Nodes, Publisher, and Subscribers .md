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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHK6KV4X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDixUd%2F%2FV8ruL%2B4h4Opih8zByFCwlDRTZS2jUuY9l9%2BAQIgZ6A3u6Yw4bvNPz9ld3eAQNAIamKDA5eafnT8SgQ3T1oq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHPnWXzQINC4DbW6GSrcA1GScfJzkmHClHz2gjsaqxw%2FrvbBBspZX2lg2%2F5R%2B6No1mEmeecKVxeko%2BVfV7LW5YiOl96Rrzd0aVNPdcRjkSXGoEiks875SFwJAhrCJJl5OT9lNy7lklJvWutz56lhU5q88bYWZANZiL73bRiFpOWlCmXWdZMHqjiMOay%2Bm69Tjez3f72AghDbFpbFkY1sGnqUZpi0trglk95M2A23TTIgVguoFo1fWOePjO9aszlDFvPM1gsFeOq8p84CcPlEPrXwnFi2mdzEziiOgT9pTH%2F786tf3qvtuMEnNwiBWDvHPt2O0chW1RXUxytarE1JXc862inInlK7HMgKKwwwxzq5DvDu4EAijGbwX%2BhGSK46Inyi7ID6hu8AfMTRMzkCuaYB1UU2a8IfNrOovykYirPs60J3jDdSOwQZZiazfgpv8bHWZ86ok9pmUSNtFge9b4%2BumIeXEthYV%2B3YPKenmBKksIZzgt9seh8crfaYmJTFeXxxMY2WuhPay%2BqySDDa7DfN5kXjUGGEUcXr2dTye8yTdNNs24hDLOdsQFJlxuz16ekK1WIsqMMO1fnkz3oKv4a51117%2Bux4%2BwGpJS29SwBP%2B%2BSDTSImx8s7rguGaIunhDAVnS3%2B5OW8t5AlMILggcAGOqUBmAByVlpQMSSkE%2Be8WCbDtiaTfsAWtbhrF25zMMgGr1LZPQZLhZ4jY6IrGI7MqnFUuae6XIDwQwVdA6SqupLZBDDpbqqQwA4%2FORuP1tlxqz1TpH7ghk0UY8vtWA0zNRag50T95pAioQOAAbfqHbVG0efCUQCLGWtBKbn1gxrfibh4P%2FP7Ss274HtQ%2BP67vMeVzho%2BIHhrdszc70sk3fMGwcQTMxNb&X-Amz-Signature=ff0337c988ce0c7957ea0d9cd73b8cfd5bccfdb6e169916f9accf43f7a6b1ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHK6KV4X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDixUd%2F%2FV8ruL%2B4h4Opih8zByFCwlDRTZS2jUuY9l9%2BAQIgZ6A3u6Yw4bvNPz9ld3eAQNAIamKDA5eafnT8SgQ3T1oq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHPnWXzQINC4DbW6GSrcA1GScfJzkmHClHz2gjsaqxw%2FrvbBBspZX2lg2%2F5R%2B6No1mEmeecKVxeko%2BVfV7LW5YiOl96Rrzd0aVNPdcRjkSXGoEiks875SFwJAhrCJJl5OT9lNy7lklJvWutz56lhU5q88bYWZANZiL73bRiFpOWlCmXWdZMHqjiMOay%2Bm69Tjez3f72AghDbFpbFkY1sGnqUZpi0trglk95M2A23TTIgVguoFo1fWOePjO9aszlDFvPM1gsFeOq8p84CcPlEPrXwnFi2mdzEziiOgT9pTH%2F786tf3qvtuMEnNwiBWDvHPt2O0chW1RXUxytarE1JXc862inInlK7HMgKKwwwxzq5DvDu4EAijGbwX%2BhGSK46Inyi7ID6hu8AfMTRMzkCuaYB1UU2a8IfNrOovykYirPs60J3jDdSOwQZZiazfgpv8bHWZ86ok9pmUSNtFge9b4%2BumIeXEthYV%2B3YPKenmBKksIZzgt9seh8crfaYmJTFeXxxMY2WuhPay%2BqySDDa7DfN5kXjUGGEUcXr2dTye8yTdNNs24hDLOdsQFJlxuz16ekK1WIsqMMO1fnkz3oKv4a51117%2Bux4%2BwGpJS29SwBP%2B%2BSDTSImx8s7rguGaIunhDAVnS3%2B5OW8t5AlMILggcAGOqUBmAByVlpQMSSkE%2Be8WCbDtiaTfsAWtbhrF25zMMgGr1LZPQZLhZ4jY6IrGI7MqnFUuae6XIDwQwVdA6SqupLZBDDpbqqQwA4%2FORuP1tlxqz1TpH7ghk0UY8vtWA0zNRag50T95pAioQOAAbfqHbVG0efCUQCLGWtBKbn1gxrfibh4P%2FP7Ss274HtQ%2BP67vMeVzho%2BIHhrdszc70sk3fMGwcQTMxNb&X-Amz-Signature=ccdbdf198a61115ec31e36ab1605c038918c6b5165086d7d3faa60590b3f1304&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHK6KV4X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDixUd%2F%2FV8ruL%2B4h4Opih8zByFCwlDRTZS2jUuY9l9%2BAQIgZ6A3u6Yw4bvNPz9ld3eAQNAIamKDA5eafnT8SgQ3T1oq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHPnWXzQINC4DbW6GSrcA1GScfJzkmHClHz2gjsaqxw%2FrvbBBspZX2lg2%2F5R%2B6No1mEmeecKVxeko%2BVfV7LW5YiOl96Rrzd0aVNPdcRjkSXGoEiks875SFwJAhrCJJl5OT9lNy7lklJvWutz56lhU5q88bYWZANZiL73bRiFpOWlCmXWdZMHqjiMOay%2Bm69Tjez3f72AghDbFpbFkY1sGnqUZpi0trglk95M2A23TTIgVguoFo1fWOePjO9aszlDFvPM1gsFeOq8p84CcPlEPrXwnFi2mdzEziiOgT9pTH%2F786tf3qvtuMEnNwiBWDvHPt2O0chW1RXUxytarE1JXc862inInlK7HMgKKwwwxzq5DvDu4EAijGbwX%2BhGSK46Inyi7ID6hu8AfMTRMzkCuaYB1UU2a8IfNrOovykYirPs60J3jDdSOwQZZiazfgpv8bHWZ86ok9pmUSNtFge9b4%2BumIeXEthYV%2B3YPKenmBKksIZzgt9seh8crfaYmJTFeXxxMY2WuhPay%2BqySDDa7DfN5kXjUGGEUcXr2dTye8yTdNNs24hDLOdsQFJlxuz16ekK1WIsqMMO1fnkz3oKv4a51117%2Bux4%2BwGpJS29SwBP%2B%2BSDTSImx8s7rguGaIunhDAVnS3%2B5OW8t5AlMILggcAGOqUBmAByVlpQMSSkE%2Be8WCbDtiaTfsAWtbhrF25zMMgGr1LZPQZLhZ4jY6IrGI7MqnFUuae6XIDwQwVdA6SqupLZBDDpbqqQwA4%2FORuP1tlxqz1TpH7ghk0UY8vtWA0zNRag50T95pAioQOAAbfqHbVG0efCUQCLGWtBKbn1gxrfibh4P%2FP7Ss274HtQ%2BP67vMeVzho%2BIHhrdszc70sk3fMGwcQTMxNb&X-Amz-Signature=c1097c9d3813404f9143dd75e5d3f322cf5f1f51ffe51a615449090c70af13f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHK6KV4X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDixUd%2F%2FV8ruL%2B4h4Opih8zByFCwlDRTZS2jUuY9l9%2BAQIgZ6A3u6Yw4bvNPz9ld3eAQNAIamKDA5eafnT8SgQ3T1oq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHPnWXzQINC4DbW6GSrcA1GScfJzkmHClHz2gjsaqxw%2FrvbBBspZX2lg2%2F5R%2B6No1mEmeecKVxeko%2BVfV7LW5YiOl96Rrzd0aVNPdcRjkSXGoEiks875SFwJAhrCJJl5OT9lNy7lklJvWutz56lhU5q88bYWZANZiL73bRiFpOWlCmXWdZMHqjiMOay%2Bm69Tjez3f72AghDbFpbFkY1sGnqUZpi0trglk95M2A23TTIgVguoFo1fWOePjO9aszlDFvPM1gsFeOq8p84CcPlEPrXwnFi2mdzEziiOgT9pTH%2F786tf3qvtuMEnNwiBWDvHPt2O0chW1RXUxytarE1JXc862inInlK7HMgKKwwwxzq5DvDu4EAijGbwX%2BhGSK46Inyi7ID6hu8AfMTRMzkCuaYB1UU2a8IfNrOovykYirPs60J3jDdSOwQZZiazfgpv8bHWZ86ok9pmUSNtFge9b4%2BumIeXEthYV%2B3YPKenmBKksIZzgt9seh8crfaYmJTFeXxxMY2WuhPay%2BqySDDa7DfN5kXjUGGEUcXr2dTye8yTdNNs24hDLOdsQFJlxuz16ekK1WIsqMMO1fnkz3oKv4a51117%2Bux4%2BwGpJS29SwBP%2B%2BSDTSImx8s7rguGaIunhDAVnS3%2B5OW8t5AlMILggcAGOqUBmAByVlpQMSSkE%2Be8WCbDtiaTfsAWtbhrF25zMMgGr1LZPQZLhZ4jY6IrGI7MqnFUuae6XIDwQwVdA6SqupLZBDDpbqqQwA4%2FORuP1tlxqz1TpH7ghk0UY8vtWA0zNRag50T95pAioQOAAbfqHbVG0efCUQCLGWtBKbn1gxrfibh4P%2FP7Ss274HtQ%2BP67vMeVzho%2BIHhrdszc70sk3fMGwcQTMxNb&X-Amz-Signature=471e09c65b355d1f477c1b732f2498796b64b40de775a4f5df597566dea40635&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHK6KV4X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDixUd%2F%2FV8ruL%2B4h4Opih8zByFCwlDRTZS2jUuY9l9%2BAQIgZ6A3u6Yw4bvNPz9ld3eAQNAIamKDA5eafnT8SgQ3T1oq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHPnWXzQINC4DbW6GSrcA1GScfJzkmHClHz2gjsaqxw%2FrvbBBspZX2lg2%2F5R%2B6No1mEmeecKVxeko%2BVfV7LW5YiOl96Rrzd0aVNPdcRjkSXGoEiks875SFwJAhrCJJl5OT9lNy7lklJvWutz56lhU5q88bYWZANZiL73bRiFpOWlCmXWdZMHqjiMOay%2Bm69Tjez3f72AghDbFpbFkY1sGnqUZpi0trglk95M2A23TTIgVguoFo1fWOePjO9aszlDFvPM1gsFeOq8p84CcPlEPrXwnFi2mdzEziiOgT9pTH%2F786tf3qvtuMEnNwiBWDvHPt2O0chW1RXUxytarE1JXc862inInlK7HMgKKwwwxzq5DvDu4EAijGbwX%2BhGSK46Inyi7ID6hu8AfMTRMzkCuaYB1UU2a8IfNrOovykYirPs60J3jDdSOwQZZiazfgpv8bHWZ86ok9pmUSNtFge9b4%2BumIeXEthYV%2B3YPKenmBKksIZzgt9seh8crfaYmJTFeXxxMY2WuhPay%2BqySDDa7DfN5kXjUGGEUcXr2dTye8yTdNNs24hDLOdsQFJlxuz16ekK1WIsqMMO1fnkz3oKv4a51117%2Bux4%2BwGpJS29SwBP%2B%2BSDTSImx8s7rguGaIunhDAVnS3%2B5OW8t5AlMILggcAGOqUBmAByVlpQMSSkE%2Be8WCbDtiaTfsAWtbhrF25zMMgGr1LZPQZLhZ4jY6IrGI7MqnFUuae6XIDwQwVdA6SqupLZBDDpbqqQwA4%2FORuP1tlxqz1TpH7ghk0UY8vtWA0zNRag50T95pAioQOAAbfqHbVG0efCUQCLGWtBKbn1gxrfibh4P%2FP7Ss274HtQ%2BP67vMeVzho%2BIHhrdszc70sk3fMGwcQTMxNb&X-Amz-Signature=c5bd5d692450db63ca0bfe862c2748d04ad1f3e4579457ada41ca1c7396fe693&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHK6KV4X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDixUd%2F%2FV8ruL%2B4h4Opih8zByFCwlDRTZS2jUuY9l9%2BAQIgZ6A3u6Yw4bvNPz9ld3eAQNAIamKDA5eafnT8SgQ3T1oq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHPnWXzQINC4DbW6GSrcA1GScfJzkmHClHz2gjsaqxw%2FrvbBBspZX2lg2%2F5R%2B6No1mEmeecKVxeko%2BVfV7LW5YiOl96Rrzd0aVNPdcRjkSXGoEiks875SFwJAhrCJJl5OT9lNy7lklJvWutz56lhU5q88bYWZANZiL73bRiFpOWlCmXWdZMHqjiMOay%2Bm69Tjez3f72AghDbFpbFkY1sGnqUZpi0trglk95M2A23TTIgVguoFo1fWOePjO9aszlDFvPM1gsFeOq8p84CcPlEPrXwnFi2mdzEziiOgT9pTH%2F786tf3qvtuMEnNwiBWDvHPt2O0chW1RXUxytarE1JXc862inInlK7HMgKKwwwxzq5DvDu4EAijGbwX%2BhGSK46Inyi7ID6hu8AfMTRMzkCuaYB1UU2a8IfNrOovykYirPs60J3jDdSOwQZZiazfgpv8bHWZ86ok9pmUSNtFge9b4%2BumIeXEthYV%2B3YPKenmBKksIZzgt9seh8crfaYmJTFeXxxMY2WuhPay%2BqySDDa7DfN5kXjUGGEUcXr2dTye8yTdNNs24hDLOdsQFJlxuz16ekK1WIsqMMO1fnkz3oKv4a51117%2Bux4%2BwGpJS29SwBP%2B%2BSDTSImx8s7rguGaIunhDAVnS3%2B5OW8t5AlMILggcAGOqUBmAByVlpQMSSkE%2Be8WCbDtiaTfsAWtbhrF25zMMgGr1LZPQZLhZ4jY6IrGI7MqnFUuae6XIDwQwVdA6SqupLZBDDpbqqQwA4%2FORuP1tlxqz1TpH7ghk0UY8vtWA0zNRag50T95pAioQOAAbfqHbVG0efCUQCLGWtBKbn1gxrfibh4P%2FP7Ss274HtQ%2BP67vMeVzho%2BIHhrdszc70sk3fMGwcQTMxNb&X-Amz-Signature=3dbf16a6a957256f19c58112b2affadf0d4b0e2171e7939e01e6f6aa37a93229&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHK6KV4X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDixUd%2F%2FV8ruL%2B4h4Opih8zByFCwlDRTZS2jUuY9l9%2BAQIgZ6A3u6Yw4bvNPz9ld3eAQNAIamKDA5eafnT8SgQ3T1oq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHPnWXzQINC4DbW6GSrcA1GScfJzkmHClHz2gjsaqxw%2FrvbBBspZX2lg2%2F5R%2B6No1mEmeecKVxeko%2BVfV7LW5YiOl96Rrzd0aVNPdcRjkSXGoEiks875SFwJAhrCJJl5OT9lNy7lklJvWutz56lhU5q88bYWZANZiL73bRiFpOWlCmXWdZMHqjiMOay%2Bm69Tjez3f72AghDbFpbFkY1sGnqUZpi0trglk95M2A23TTIgVguoFo1fWOePjO9aszlDFvPM1gsFeOq8p84CcPlEPrXwnFi2mdzEziiOgT9pTH%2F786tf3qvtuMEnNwiBWDvHPt2O0chW1RXUxytarE1JXc862inInlK7HMgKKwwwxzq5DvDu4EAijGbwX%2BhGSK46Inyi7ID6hu8AfMTRMzkCuaYB1UU2a8IfNrOovykYirPs60J3jDdSOwQZZiazfgpv8bHWZ86ok9pmUSNtFge9b4%2BumIeXEthYV%2B3YPKenmBKksIZzgt9seh8crfaYmJTFeXxxMY2WuhPay%2BqySDDa7DfN5kXjUGGEUcXr2dTye8yTdNNs24hDLOdsQFJlxuz16ekK1WIsqMMO1fnkz3oKv4a51117%2Bux4%2BwGpJS29SwBP%2B%2BSDTSImx8s7rguGaIunhDAVnS3%2B5OW8t5AlMILggcAGOqUBmAByVlpQMSSkE%2Be8WCbDtiaTfsAWtbhrF25zMMgGr1LZPQZLhZ4jY6IrGI7MqnFUuae6XIDwQwVdA6SqupLZBDDpbqqQwA4%2FORuP1tlxqz1TpH7ghk0UY8vtWA0zNRag50T95pAioQOAAbfqHbVG0efCUQCLGWtBKbn1gxrfibh4P%2FP7Ss274HtQ%2BP67vMeVzho%2BIHhrdszc70sk3fMGwcQTMxNb&X-Amz-Signature=0017ee11aa8c2f6380dcb23892df9384c62b9abd37ee3734ad0ccb147820a140&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHK6KV4X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDixUd%2F%2FV8ruL%2B4h4Opih8zByFCwlDRTZS2jUuY9l9%2BAQIgZ6A3u6Yw4bvNPz9ld3eAQNAIamKDA5eafnT8SgQ3T1oq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHPnWXzQINC4DbW6GSrcA1GScfJzkmHClHz2gjsaqxw%2FrvbBBspZX2lg2%2F5R%2B6No1mEmeecKVxeko%2BVfV7LW5YiOl96Rrzd0aVNPdcRjkSXGoEiks875SFwJAhrCJJl5OT9lNy7lklJvWutz56lhU5q88bYWZANZiL73bRiFpOWlCmXWdZMHqjiMOay%2Bm69Tjez3f72AghDbFpbFkY1sGnqUZpi0trglk95M2A23TTIgVguoFo1fWOePjO9aszlDFvPM1gsFeOq8p84CcPlEPrXwnFi2mdzEziiOgT9pTH%2F786tf3qvtuMEnNwiBWDvHPt2O0chW1RXUxytarE1JXc862inInlK7HMgKKwwwxzq5DvDu4EAijGbwX%2BhGSK46Inyi7ID6hu8AfMTRMzkCuaYB1UU2a8IfNrOovykYirPs60J3jDdSOwQZZiazfgpv8bHWZ86ok9pmUSNtFge9b4%2BumIeXEthYV%2B3YPKenmBKksIZzgt9seh8crfaYmJTFeXxxMY2WuhPay%2BqySDDa7DfN5kXjUGGEUcXr2dTye8yTdNNs24hDLOdsQFJlxuz16ekK1WIsqMMO1fnkz3oKv4a51117%2Bux4%2BwGpJS29SwBP%2B%2BSDTSImx8s7rguGaIunhDAVnS3%2B5OW8t5AlMILggcAGOqUBmAByVlpQMSSkE%2Be8WCbDtiaTfsAWtbhrF25zMMgGr1LZPQZLhZ4jY6IrGI7MqnFUuae6XIDwQwVdA6SqupLZBDDpbqqQwA4%2FORuP1tlxqz1TpH7ghk0UY8vtWA0zNRag50T95pAioQOAAbfqHbVG0efCUQCLGWtBKbn1gxrfibh4P%2FP7Ss274HtQ%2BP67vMeVzho%2BIHhrdszc70sk3fMGwcQTMxNb&X-Amz-Signature=aeabf6206c661cc7fee38136177ccca25f7a554e28c37e3ffc5fe73fa98f5e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
