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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJW4JC7P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWxYBqryB9jZm1OgiAGXJwlIL%2FZ61pwi1BIV3WQVZ5yAiEA7V2IRUmn8fNGgjOQdcYuM34OpsdBgBdj9ZRrB7vPT3Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAqbeNa7dYnVLp6MNSrcA8AOpTPuldLICv%2FRo3mcCPEzA3U%2Fx2%2FX%2F15dH0ZeCj3mzSQIg8IeYEfhxiZimeoXJntM5X8nei5yO6rNElhQMLmjF%2BepEeJLJy%2FCJz6o6bFi3JPYn8pCJjBiVpcwSbLboDpTkHYi%2BC7VGcaQBgKzpUGSY3mKXcuwSgx3kLIbrxi1E701%2FVcxDC2sG1GVxaAOcw07p2y1oYAaqawdi9PIZxK2x7VDW6fRmH8sPDXYEBwTcWzxabGXPXntdyjnlRAqieVhrF9J6xCvbU21tAZsrLmNO%2BVYS6iBB1%2BWdc1xIMOe5WDv3pCCHEZpzBZbNdmT01J%2B5lwzBhjevt4dOc%2FBzlEDE0hj1qqpTv75WnqdGEz0LDIhfxMLls5GqvLuw5wQBY9S7w5CSuajjXqcvXqoCBdL%2BESwxzKpGsQ8yutASMaWs3MHaqJUNFR56JljdK1FfT2hx31fR3iQxbjm%2BTl70O3U%2B3dVcOaaS7OqLTxrRcf2s8F2rlcjXLuDkhaiPQX52Kjse75mGBHqD%2B8Yx5r4cwmhPcHfkhfPZJwGEtNGhwSGseVxdLWvcI54EYZqcnQLC0P5tEOHtLQoB9sywxQsha4%2BfChXGjB01nnecgH6HvWugutUtx7t%2FZV7mXJlMJWDzb8GOqUBrQ77wKnjoOY7EweItWhLb96O62YBCUa%2B%2BCw0CNT7Q9rEgOVSNpqqqRUkvN4ENMTcMfMSWvWmio%2FJY0iCnOnniYgX2fVKMuntn8mPrQUfa6h%2BIcftab50tla5C5qEF93IFezdrxQAXPvqCmwgP1Y1qXmtPxSdILpnnjc8Scg%2Bk0vOc%2B8nMbyciO%2BLX0OVxgDivbiqcmGOYFdPOOEnBe1DKS7sgxAR&X-Amz-Signature=3e52d24cbca2356f0ff8f1c09df2afb9c104a0fca3642e2dd3f2069d49b342ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJW4JC7P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWxYBqryB9jZm1OgiAGXJwlIL%2FZ61pwi1BIV3WQVZ5yAiEA7V2IRUmn8fNGgjOQdcYuM34OpsdBgBdj9ZRrB7vPT3Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAqbeNa7dYnVLp6MNSrcA8AOpTPuldLICv%2FRo3mcCPEzA3U%2Fx2%2FX%2F15dH0ZeCj3mzSQIg8IeYEfhxiZimeoXJntM5X8nei5yO6rNElhQMLmjF%2BepEeJLJy%2FCJz6o6bFi3JPYn8pCJjBiVpcwSbLboDpTkHYi%2BC7VGcaQBgKzpUGSY3mKXcuwSgx3kLIbrxi1E701%2FVcxDC2sG1GVxaAOcw07p2y1oYAaqawdi9PIZxK2x7VDW6fRmH8sPDXYEBwTcWzxabGXPXntdyjnlRAqieVhrF9J6xCvbU21tAZsrLmNO%2BVYS6iBB1%2BWdc1xIMOe5WDv3pCCHEZpzBZbNdmT01J%2B5lwzBhjevt4dOc%2FBzlEDE0hj1qqpTv75WnqdGEz0LDIhfxMLls5GqvLuw5wQBY9S7w5CSuajjXqcvXqoCBdL%2BESwxzKpGsQ8yutASMaWs3MHaqJUNFR56JljdK1FfT2hx31fR3iQxbjm%2BTl70O3U%2B3dVcOaaS7OqLTxrRcf2s8F2rlcjXLuDkhaiPQX52Kjse75mGBHqD%2B8Yx5r4cwmhPcHfkhfPZJwGEtNGhwSGseVxdLWvcI54EYZqcnQLC0P5tEOHtLQoB9sywxQsha4%2BfChXGjB01nnecgH6HvWugutUtx7t%2FZV7mXJlMJWDzb8GOqUBrQ77wKnjoOY7EweItWhLb96O62YBCUa%2B%2BCw0CNT7Q9rEgOVSNpqqqRUkvN4ENMTcMfMSWvWmio%2FJY0iCnOnniYgX2fVKMuntn8mPrQUfa6h%2BIcftab50tla5C5qEF93IFezdrxQAXPvqCmwgP1Y1qXmtPxSdILpnnjc8Scg%2Bk0vOc%2B8nMbyciO%2BLX0OVxgDivbiqcmGOYFdPOOEnBe1DKS7sgxAR&X-Amz-Signature=9d77a59c7981411096148dda15cd9e48286cad7ce7e1b4fe028dd1236eda9c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJW4JC7P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWxYBqryB9jZm1OgiAGXJwlIL%2FZ61pwi1BIV3WQVZ5yAiEA7V2IRUmn8fNGgjOQdcYuM34OpsdBgBdj9ZRrB7vPT3Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAqbeNa7dYnVLp6MNSrcA8AOpTPuldLICv%2FRo3mcCPEzA3U%2Fx2%2FX%2F15dH0ZeCj3mzSQIg8IeYEfhxiZimeoXJntM5X8nei5yO6rNElhQMLmjF%2BepEeJLJy%2FCJz6o6bFi3JPYn8pCJjBiVpcwSbLboDpTkHYi%2BC7VGcaQBgKzpUGSY3mKXcuwSgx3kLIbrxi1E701%2FVcxDC2sG1GVxaAOcw07p2y1oYAaqawdi9PIZxK2x7VDW6fRmH8sPDXYEBwTcWzxabGXPXntdyjnlRAqieVhrF9J6xCvbU21tAZsrLmNO%2BVYS6iBB1%2BWdc1xIMOe5WDv3pCCHEZpzBZbNdmT01J%2B5lwzBhjevt4dOc%2FBzlEDE0hj1qqpTv75WnqdGEz0LDIhfxMLls5GqvLuw5wQBY9S7w5CSuajjXqcvXqoCBdL%2BESwxzKpGsQ8yutASMaWs3MHaqJUNFR56JljdK1FfT2hx31fR3iQxbjm%2BTl70O3U%2B3dVcOaaS7OqLTxrRcf2s8F2rlcjXLuDkhaiPQX52Kjse75mGBHqD%2B8Yx5r4cwmhPcHfkhfPZJwGEtNGhwSGseVxdLWvcI54EYZqcnQLC0P5tEOHtLQoB9sywxQsha4%2BfChXGjB01nnecgH6HvWugutUtx7t%2FZV7mXJlMJWDzb8GOqUBrQ77wKnjoOY7EweItWhLb96O62YBCUa%2B%2BCw0CNT7Q9rEgOVSNpqqqRUkvN4ENMTcMfMSWvWmio%2FJY0iCnOnniYgX2fVKMuntn8mPrQUfa6h%2BIcftab50tla5C5qEF93IFezdrxQAXPvqCmwgP1Y1qXmtPxSdILpnnjc8Scg%2Bk0vOc%2B8nMbyciO%2BLX0OVxgDivbiqcmGOYFdPOOEnBe1DKS7sgxAR&X-Amz-Signature=8828d075d50f1acd16e796120dba3ea8a2292b9cbfb5832d807e9581f362c06f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJW4JC7P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWxYBqryB9jZm1OgiAGXJwlIL%2FZ61pwi1BIV3WQVZ5yAiEA7V2IRUmn8fNGgjOQdcYuM34OpsdBgBdj9ZRrB7vPT3Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAqbeNa7dYnVLp6MNSrcA8AOpTPuldLICv%2FRo3mcCPEzA3U%2Fx2%2FX%2F15dH0ZeCj3mzSQIg8IeYEfhxiZimeoXJntM5X8nei5yO6rNElhQMLmjF%2BepEeJLJy%2FCJz6o6bFi3JPYn8pCJjBiVpcwSbLboDpTkHYi%2BC7VGcaQBgKzpUGSY3mKXcuwSgx3kLIbrxi1E701%2FVcxDC2sG1GVxaAOcw07p2y1oYAaqawdi9PIZxK2x7VDW6fRmH8sPDXYEBwTcWzxabGXPXntdyjnlRAqieVhrF9J6xCvbU21tAZsrLmNO%2BVYS6iBB1%2BWdc1xIMOe5WDv3pCCHEZpzBZbNdmT01J%2B5lwzBhjevt4dOc%2FBzlEDE0hj1qqpTv75WnqdGEz0LDIhfxMLls5GqvLuw5wQBY9S7w5CSuajjXqcvXqoCBdL%2BESwxzKpGsQ8yutASMaWs3MHaqJUNFR56JljdK1FfT2hx31fR3iQxbjm%2BTl70O3U%2B3dVcOaaS7OqLTxrRcf2s8F2rlcjXLuDkhaiPQX52Kjse75mGBHqD%2B8Yx5r4cwmhPcHfkhfPZJwGEtNGhwSGseVxdLWvcI54EYZqcnQLC0P5tEOHtLQoB9sywxQsha4%2BfChXGjB01nnecgH6HvWugutUtx7t%2FZV7mXJlMJWDzb8GOqUBrQ77wKnjoOY7EweItWhLb96O62YBCUa%2B%2BCw0CNT7Q9rEgOVSNpqqqRUkvN4ENMTcMfMSWvWmio%2FJY0iCnOnniYgX2fVKMuntn8mPrQUfa6h%2BIcftab50tla5C5qEF93IFezdrxQAXPvqCmwgP1Y1qXmtPxSdILpnnjc8Scg%2Bk0vOc%2B8nMbyciO%2BLX0OVxgDivbiqcmGOYFdPOOEnBe1DKS7sgxAR&X-Amz-Signature=1c5fa5f34c3351f3d43c07402ff55a693b90d0a02645b41f10b10561b7fc9dda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJW4JC7P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWxYBqryB9jZm1OgiAGXJwlIL%2FZ61pwi1BIV3WQVZ5yAiEA7V2IRUmn8fNGgjOQdcYuM34OpsdBgBdj9ZRrB7vPT3Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAqbeNa7dYnVLp6MNSrcA8AOpTPuldLICv%2FRo3mcCPEzA3U%2Fx2%2FX%2F15dH0ZeCj3mzSQIg8IeYEfhxiZimeoXJntM5X8nei5yO6rNElhQMLmjF%2BepEeJLJy%2FCJz6o6bFi3JPYn8pCJjBiVpcwSbLboDpTkHYi%2BC7VGcaQBgKzpUGSY3mKXcuwSgx3kLIbrxi1E701%2FVcxDC2sG1GVxaAOcw07p2y1oYAaqawdi9PIZxK2x7VDW6fRmH8sPDXYEBwTcWzxabGXPXntdyjnlRAqieVhrF9J6xCvbU21tAZsrLmNO%2BVYS6iBB1%2BWdc1xIMOe5WDv3pCCHEZpzBZbNdmT01J%2B5lwzBhjevt4dOc%2FBzlEDE0hj1qqpTv75WnqdGEz0LDIhfxMLls5GqvLuw5wQBY9S7w5CSuajjXqcvXqoCBdL%2BESwxzKpGsQ8yutASMaWs3MHaqJUNFR56JljdK1FfT2hx31fR3iQxbjm%2BTl70O3U%2B3dVcOaaS7OqLTxrRcf2s8F2rlcjXLuDkhaiPQX52Kjse75mGBHqD%2B8Yx5r4cwmhPcHfkhfPZJwGEtNGhwSGseVxdLWvcI54EYZqcnQLC0P5tEOHtLQoB9sywxQsha4%2BfChXGjB01nnecgH6HvWugutUtx7t%2FZV7mXJlMJWDzb8GOqUBrQ77wKnjoOY7EweItWhLb96O62YBCUa%2B%2BCw0CNT7Q9rEgOVSNpqqqRUkvN4ENMTcMfMSWvWmio%2FJY0iCnOnniYgX2fVKMuntn8mPrQUfa6h%2BIcftab50tla5C5qEF93IFezdrxQAXPvqCmwgP1Y1qXmtPxSdILpnnjc8Scg%2Bk0vOc%2B8nMbyciO%2BLX0OVxgDivbiqcmGOYFdPOOEnBe1DKS7sgxAR&X-Amz-Signature=3367d450c85238d725a1c79799f323a77fea0512de7af0f47efaa0e0f4e5d522&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJW4JC7P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWxYBqryB9jZm1OgiAGXJwlIL%2FZ61pwi1BIV3WQVZ5yAiEA7V2IRUmn8fNGgjOQdcYuM34OpsdBgBdj9ZRrB7vPT3Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAqbeNa7dYnVLp6MNSrcA8AOpTPuldLICv%2FRo3mcCPEzA3U%2Fx2%2FX%2F15dH0ZeCj3mzSQIg8IeYEfhxiZimeoXJntM5X8nei5yO6rNElhQMLmjF%2BepEeJLJy%2FCJz6o6bFi3JPYn8pCJjBiVpcwSbLboDpTkHYi%2BC7VGcaQBgKzpUGSY3mKXcuwSgx3kLIbrxi1E701%2FVcxDC2sG1GVxaAOcw07p2y1oYAaqawdi9PIZxK2x7VDW6fRmH8sPDXYEBwTcWzxabGXPXntdyjnlRAqieVhrF9J6xCvbU21tAZsrLmNO%2BVYS6iBB1%2BWdc1xIMOe5WDv3pCCHEZpzBZbNdmT01J%2B5lwzBhjevt4dOc%2FBzlEDE0hj1qqpTv75WnqdGEz0LDIhfxMLls5GqvLuw5wQBY9S7w5CSuajjXqcvXqoCBdL%2BESwxzKpGsQ8yutASMaWs3MHaqJUNFR56JljdK1FfT2hx31fR3iQxbjm%2BTl70O3U%2B3dVcOaaS7OqLTxrRcf2s8F2rlcjXLuDkhaiPQX52Kjse75mGBHqD%2B8Yx5r4cwmhPcHfkhfPZJwGEtNGhwSGseVxdLWvcI54EYZqcnQLC0P5tEOHtLQoB9sywxQsha4%2BfChXGjB01nnecgH6HvWugutUtx7t%2FZV7mXJlMJWDzb8GOqUBrQ77wKnjoOY7EweItWhLb96O62YBCUa%2B%2BCw0CNT7Q9rEgOVSNpqqqRUkvN4ENMTcMfMSWvWmio%2FJY0iCnOnniYgX2fVKMuntn8mPrQUfa6h%2BIcftab50tla5C5qEF93IFezdrxQAXPvqCmwgP1Y1qXmtPxSdILpnnjc8Scg%2Bk0vOc%2B8nMbyciO%2BLX0OVxgDivbiqcmGOYFdPOOEnBe1DKS7sgxAR&X-Amz-Signature=201e2deb1eb2ae43591e0d01478902126b2be0fd759d20f3f62e458d86339fef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJW4JC7P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWxYBqryB9jZm1OgiAGXJwlIL%2FZ61pwi1BIV3WQVZ5yAiEA7V2IRUmn8fNGgjOQdcYuM34OpsdBgBdj9ZRrB7vPT3Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAqbeNa7dYnVLp6MNSrcA8AOpTPuldLICv%2FRo3mcCPEzA3U%2Fx2%2FX%2F15dH0ZeCj3mzSQIg8IeYEfhxiZimeoXJntM5X8nei5yO6rNElhQMLmjF%2BepEeJLJy%2FCJz6o6bFi3JPYn8pCJjBiVpcwSbLboDpTkHYi%2BC7VGcaQBgKzpUGSY3mKXcuwSgx3kLIbrxi1E701%2FVcxDC2sG1GVxaAOcw07p2y1oYAaqawdi9PIZxK2x7VDW6fRmH8sPDXYEBwTcWzxabGXPXntdyjnlRAqieVhrF9J6xCvbU21tAZsrLmNO%2BVYS6iBB1%2BWdc1xIMOe5WDv3pCCHEZpzBZbNdmT01J%2B5lwzBhjevt4dOc%2FBzlEDE0hj1qqpTv75WnqdGEz0LDIhfxMLls5GqvLuw5wQBY9S7w5CSuajjXqcvXqoCBdL%2BESwxzKpGsQ8yutASMaWs3MHaqJUNFR56JljdK1FfT2hx31fR3iQxbjm%2BTl70O3U%2B3dVcOaaS7OqLTxrRcf2s8F2rlcjXLuDkhaiPQX52Kjse75mGBHqD%2B8Yx5r4cwmhPcHfkhfPZJwGEtNGhwSGseVxdLWvcI54EYZqcnQLC0P5tEOHtLQoB9sywxQsha4%2BfChXGjB01nnecgH6HvWugutUtx7t%2FZV7mXJlMJWDzb8GOqUBrQ77wKnjoOY7EweItWhLb96O62YBCUa%2B%2BCw0CNT7Q9rEgOVSNpqqqRUkvN4ENMTcMfMSWvWmio%2FJY0iCnOnniYgX2fVKMuntn8mPrQUfa6h%2BIcftab50tla5C5qEF93IFezdrxQAXPvqCmwgP1Y1qXmtPxSdILpnnjc8Scg%2Bk0vOc%2B8nMbyciO%2BLX0OVxgDivbiqcmGOYFdPOOEnBe1DKS7sgxAR&X-Amz-Signature=88913b6f3d2e7effe6a41dee74a34cae829b214c925eda8cb37cbb80a7e82ace&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJW4JC7P%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWxYBqryB9jZm1OgiAGXJwlIL%2FZ61pwi1BIV3WQVZ5yAiEA7V2IRUmn8fNGgjOQdcYuM34OpsdBgBdj9ZRrB7vPT3Aq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAqbeNa7dYnVLp6MNSrcA8AOpTPuldLICv%2FRo3mcCPEzA3U%2Fx2%2FX%2F15dH0ZeCj3mzSQIg8IeYEfhxiZimeoXJntM5X8nei5yO6rNElhQMLmjF%2BepEeJLJy%2FCJz6o6bFi3JPYn8pCJjBiVpcwSbLboDpTkHYi%2BC7VGcaQBgKzpUGSY3mKXcuwSgx3kLIbrxi1E701%2FVcxDC2sG1GVxaAOcw07p2y1oYAaqawdi9PIZxK2x7VDW6fRmH8sPDXYEBwTcWzxabGXPXntdyjnlRAqieVhrF9J6xCvbU21tAZsrLmNO%2BVYS6iBB1%2BWdc1xIMOe5WDv3pCCHEZpzBZbNdmT01J%2B5lwzBhjevt4dOc%2FBzlEDE0hj1qqpTv75WnqdGEz0LDIhfxMLls5GqvLuw5wQBY9S7w5CSuajjXqcvXqoCBdL%2BESwxzKpGsQ8yutASMaWs3MHaqJUNFR56JljdK1FfT2hx31fR3iQxbjm%2BTl70O3U%2B3dVcOaaS7OqLTxrRcf2s8F2rlcjXLuDkhaiPQX52Kjse75mGBHqD%2B8Yx5r4cwmhPcHfkhfPZJwGEtNGhwSGseVxdLWvcI54EYZqcnQLC0P5tEOHtLQoB9sywxQsha4%2BfChXGjB01nnecgH6HvWugutUtx7t%2FZV7mXJlMJWDzb8GOqUBrQ77wKnjoOY7EweItWhLb96O62YBCUa%2B%2BCw0CNT7Q9rEgOVSNpqqqRUkvN4ENMTcMfMSWvWmio%2FJY0iCnOnniYgX2fVKMuntn8mPrQUfa6h%2BIcftab50tla5C5qEF93IFezdrxQAXPvqCmwgP1Y1qXmtPxSdILpnnjc8Scg%2Bk0vOc%2B8nMbyciO%2BLX0OVxgDivbiqcmGOYFdPOOEnBe1DKS7sgxAR&X-Amz-Signature=7da58c16fa8fd4a52c52fef1143c2d32f35f88d9bb57214d1304b3397566a209&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
