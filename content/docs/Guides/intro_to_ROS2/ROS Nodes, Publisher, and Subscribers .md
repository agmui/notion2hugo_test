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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAVBG5Q%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ4zK5fqfdG5WcPTujXStSGWOArgyTXQf5250UGlVspAiEAqEfUZ55AZpTmvFcJV4jnpErhx40%2FrpW%2Fqzkf2y4eKwMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDKtKC6%2BEfEgzt%2BtJDyrcA8dix%2Fo%2FuMTQPxgrSZNt9U1Q7Yv%2FdT33fTZvuedzL9mnAABjiCXLaaO2YE1MDoztWx2WkmHMUkB8pipjFBN6jAfHCTYd4LZmRJay%2BoWPfofHU1O%2BpKfoifeUUyABWXwvsFDoBfzZn%2FvDfbegEof4fb06Tb1PBMqyQgUS8xkPdIxxBBVGzAX08pPpEIfWu1JIzuV1lUioZ%2FGZ85deE5ysWC4LU%2Bv2dusxME7E2ZoK3iN28AYWdTDnz1a9tpzWnHhfrLfHJCJYAiBTNt2LMeQcJz7SFU9qV8DtLXOizlN%2FFOdux0Em%2Bv17U4lPpTMGPbNZ03l%2FNMCQiAZO7v6m%2Bof5hh4g4DYoF1Y6RyciVwJJGl7cbnD8AcU8zq%2BDCkMc9eh7Rnz5j5Th1kjV8eYAQdKbm5Iu8I0BOe3oYKZW43nJDNu9DkpeeULdjqyzXMM2S%2FXPotFJ2iK%2B12PjlZRr4BvqYw%2BtT%2BDvfee88aO3lS7RYmrLLknFnIrTCRZ7enuAETiCP6exBAe%2Bqpoersswbvc63ny986SFbkeHiHj6bCEO%2Bde2Md5J%2F8l%2FplEq9BZxYVE%2B2%2BOoJWBZwMub%2FLKR5BCGnmDOOT9cLTCG53HSXpThMpwxb9pl2q0mdgYkhxNIMNjAjsIGOqUBkXaHG5S7B82jKEa95OFuShdyKeaX0u9SEcUrYhww%2Bcz86x6w85yJ4KKlhQroKI50sUja9heh40JaMxu8%2FxUVUJ5SOuzjMNCiD2yoSuqzWb4jVADQLyk0sz99dlFPp5y8lw0Guikhqyii4TNHdgzRaJzRyKB%2FEGbaPHK1PnA9FHmBAnsogWJeznGtJfAtCPbQUplPDM%2FToHGCmkVwQsan%2FDdmh%2FTK&X-Amz-Signature=3df85dcf67ac6f76e2a87757de4494dcf4884e238b504f435375501f173cc6ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAVBG5Q%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ4zK5fqfdG5WcPTujXStSGWOArgyTXQf5250UGlVspAiEAqEfUZ55AZpTmvFcJV4jnpErhx40%2FrpW%2Fqzkf2y4eKwMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDKtKC6%2BEfEgzt%2BtJDyrcA8dix%2Fo%2FuMTQPxgrSZNt9U1Q7Yv%2FdT33fTZvuedzL9mnAABjiCXLaaO2YE1MDoztWx2WkmHMUkB8pipjFBN6jAfHCTYd4LZmRJay%2BoWPfofHU1O%2BpKfoifeUUyABWXwvsFDoBfzZn%2FvDfbegEof4fb06Tb1PBMqyQgUS8xkPdIxxBBVGzAX08pPpEIfWu1JIzuV1lUioZ%2FGZ85deE5ysWC4LU%2Bv2dusxME7E2ZoK3iN28AYWdTDnz1a9tpzWnHhfrLfHJCJYAiBTNt2LMeQcJz7SFU9qV8DtLXOizlN%2FFOdux0Em%2Bv17U4lPpTMGPbNZ03l%2FNMCQiAZO7v6m%2Bof5hh4g4DYoF1Y6RyciVwJJGl7cbnD8AcU8zq%2BDCkMc9eh7Rnz5j5Th1kjV8eYAQdKbm5Iu8I0BOe3oYKZW43nJDNu9DkpeeULdjqyzXMM2S%2FXPotFJ2iK%2B12PjlZRr4BvqYw%2BtT%2BDvfee88aO3lS7RYmrLLknFnIrTCRZ7enuAETiCP6exBAe%2Bqpoersswbvc63ny986SFbkeHiHj6bCEO%2Bde2Md5J%2F8l%2FplEq9BZxYVE%2B2%2BOoJWBZwMub%2FLKR5BCGnmDOOT9cLTCG53HSXpThMpwxb9pl2q0mdgYkhxNIMNjAjsIGOqUBkXaHG5S7B82jKEa95OFuShdyKeaX0u9SEcUrYhww%2Bcz86x6w85yJ4KKlhQroKI50sUja9heh40JaMxu8%2FxUVUJ5SOuzjMNCiD2yoSuqzWb4jVADQLyk0sz99dlFPp5y8lw0Guikhqyii4TNHdgzRaJzRyKB%2FEGbaPHK1PnA9FHmBAnsogWJeznGtJfAtCPbQUplPDM%2FToHGCmkVwQsan%2FDdmh%2FTK&X-Amz-Signature=f068647593c8e4cdf94a4f9256ee07d51afd7d1cd74c4b9053efcfbd416cd42b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAVBG5Q%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ4zK5fqfdG5WcPTujXStSGWOArgyTXQf5250UGlVspAiEAqEfUZ55AZpTmvFcJV4jnpErhx40%2FrpW%2Fqzkf2y4eKwMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDKtKC6%2BEfEgzt%2BtJDyrcA8dix%2Fo%2FuMTQPxgrSZNt9U1Q7Yv%2FdT33fTZvuedzL9mnAABjiCXLaaO2YE1MDoztWx2WkmHMUkB8pipjFBN6jAfHCTYd4LZmRJay%2BoWPfofHU1O%2BpKfoifeUUyABWXwvsFDoBfzZn%2FvDfbegEof4fb06Tb1PBMqyQgUS8xkPdIxxBBVGzAX08pPpEIfWu1JIzuV1lUioZ%2FGZ85deE5ysWC4LU%2Bv2dusxME7E2ZoK3iN28AYWdTDnz1a9tpzWnHhfrLfHJCJYAiBTNt2LMeQcJz7SFU9qV8DtLXOizlN%2FFOdux0Em%2Bv17U4lPpTMGPbNZ03l%2FNMCQiAZO7v6m%2Bof5hh4g4DYoF1Y6RyciVwJJGl7cbnD8AcU8zq%2BDCkMc9eh7Rnz5j5Th1kjV8eYAQdKbm5Iu8I0BOe3oYKZW43nJDNu9DkpeeULdjqyzXMM2S%2FXPotFJ2iK%2B12PjlZRr4BvqYw%2BtT%2BDvfee88aO3lS7RYmrLLknFnIrTCRZ7enuAETiCP6exBAe%2Bqpoersswbvc63ny986SFbkeHiHj6bCEO%2Bde2Md5J%2F8l%2FplEq9BZxYVE%2B2%2BOoJWBZwMub%2FLKR5BCGnmDOOT9cLTCG53HSXpThMpwxb9pl2q0mdgYkhxNIMNjAjsIGOqUBkXaHG5S7B82jKEa95OFuShdyKeaX0u9SEcUrYhww%2Bcz86x6w85yJ4KKlhQroKI50sUja9heh40JaMxu8%2FxUVUJ5SOuzjMNCiD2yoSuqzWb4jVADQLyk0sz99dlFPp5y8lw0Guikhqyii4TNHdgzRaJzRyKB%2FEGbaPHK1PnA9FHmBAnsogWJeznGtJfAtCPbQUplPDM%2FToHGCmkVwQsan%2FDdmh%2FTK&X-Amz-Signature=5390f5b0b873735804aee5b0a65e9b421bfa353710b15e193ad5e3e9ca9fe4ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAVBG5Q%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ4zK5fqfdG5WcPTujXStSGWOArgyTXQf5250UGlVspAiEAqEfUZ55AZpTmvFcJV4jnpErhx40%2FrpW%2Fqzkf2y4eKwMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDKtKC6%2BEfEgzt%2BtJDyrcA8dix%2Fo%2FuMTQPxgrSZNt9U1Q7Yv%2FdT33fTZvuedzL9mnAABjiCXLaaO2YE1MDoztWx2WkmHMUkB8pipjFBN6jAfHCTYd4LZmRJay%2BoWPfofHU1O%2BpKfoifeUUyABWXwvsFDoBfzZn%2FvDfbegEof4fb06Tb1PBMqyQgUS8xkPdIxxBBVGzAX08pPpEIfWu1JIzuV1lUioZ%2FGZ85deE5ysWC4LU%2Bv2dusxME7E2ZoK3iN28AYWdTDnz1a9tpzWnHhfrLfHJCJYAiBTNt2LMeQcJz7SFU9qV8DtLXOizlN%2FFOdux0Em%2Bv17U4lPpTMGPbNZ03l%2FNMCQiAZO7v6m%2Bof5hh4g4DYoF1Y6RyciVwJJGl7cbnD8AcU8zq%2BDCkMc9eh7Rnz5j5Th1kjV8eYAQdKbm5Iu8I0BOe3oYKZW43nJDNu9DkpeeULdjqyzXMM2S%2FXPotFJ2iK%2B12PjlZRr4BvqYw%2BtT%2BDvfee88aO3lS7RYmrLLknFnIrTCRZ7enuAETiCP6exBAe%2Bqpoersswbvc63ny986SFbkeHiHj6bCEO%2Bde2Md5J%2F8l%2FplEq9BZxYVE%2B2%2BOoJWBZwMub%2FLKR5BCGnmDOOT9cLTCG53HSXpThMpwxb9pl2q0mdgYkhxNIMNjAjsIGOqUBkXaHG5S7B82jKEa95OFuShdyKeaX0u9SEcUrYhww%2Bcz86x6w85yJ4KKlhQroKI50sUja9heh40JaMxu8%2FxUVUJ5SOuzjMNCiD2yoSuqzWb4jVADQLyk0sz99dlFPp5y8lw0Guikhqyii4TNHdgzRaJzRyKB%2FEGbaPHK1PnA9FHmBAnsogWJeznGtJfAtCPbQUplPDM%2FToHGCmkVwQsan%2FDdmh%2FTK&X-Amz-Signature=b6b3b4c258f87ece63e4e7cf5a8f162486244e06c61e69cfa062571d2a35beca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAVBG5Q%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ4zK5fqfdG5WcPTujXStSGWOArgyTXQf5250UGlVspAiEAqEfUZ55AZpTmvFcJV4jnpErhx40%2FrpW%2Fqzkf2y4eKwMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDKtKC6%2BEfEgzt%2BtJDyrcA8dix%2Fo%2FuMTQPxgrSZNt9U1Q7Yv%2FdT33fTZvuedzL9mnAABjiCXLaaO2YE1MDoztWx2WkmHMUkB8pipjFBN6jAfHCTYd4LZmRJay%2BoWPfofHU1O%2BpKfoifeUUyABWXwvsFDoBfzZn%2FvDfbegEof4fb06Tb1PBMqyQgUS8xkPdIxxBBVGzAX08pPpEIfWu1JIzuV1lUioZ%2FGZ85deE5ysWC4LU%2Bv2dusxME7E2ZoK3iN28AYWdTDnz1a9tpzWnHhfrLfHJCJYAiBTNt2LMeQcJz7SFU9qV8DtLXOizlN%2FFOdux0Em%2Bv17U4lPpTMGPbNZ03l%2FNMCQiAZO7v6m%2Bof5hh4g4DYoF1Y6RyciVwJJGl7cbnD8AcU8zq%2BDCkMc9eh7Rnz5j5Th1kjV8eYAQdKbm5Iu8I0BOe3oYKZW43nJDNu9DkpeeULdjqyzXMM2S%2FXPotFJ2iK%2B12PjlZRr4BvqYw%2BtT%2BDvfee88aO3lS7RYmrLLknFnIrTCRZ7enuAETiCP6exBAe%2Bqpoersswbvc63ny986SFbkeHiHj6bCEO%2Bde2Md5J%2F8l%2FplEq9BZxYVE%2B2%2BOoJWBZwMub%2FLKR5BCGnmDOOT9cLTCG53HSXpThMpwxb9pl2q0mdgYkhxNIMNjAjsIGOqUBkXaHG5S7B82jKEa95OFuShdyKeaX0u9SEcUrYhww%2Bcz86x6w85yJ4KKlhQroKI50sUja9heh40JaMxu8%2FxUVUJ5SOuzjMNCiD2yoSuqzWb4jVADQLyk0sz99dlFPp5y8lw0Guikhqyii4TNHdgzRaJzRyKB%2FEGbaPHK1PnA9FHmBAnsogWJeznGtJfAtCPbQUplPDM%2FToHGCmkVwQsan%2FDdmh%2FTK&X-Amz-Signature=8862d7cc8afba2f034a6639977389f15f1dfe9bef41021c9fe0d138bf710af62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAVBG5Q%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ4zK5fqfdG5WcPTujXStSGWOArgyTXQf5250UGlVspAiEAqEfUZ55AZpTmvFcJV4jnpErhx40%2FrpW%2Fqzkf2y4eKwMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDKtKC6%2BEfEgzt%2BtJDyrcA8dix%2Fo%2FuMTQPxgrSZNt9U1Q7Yv%2FdT33fTZvuedzL9mnAABjiCXLaaO2YE1MDoztWx2WkmHMUkB8pipjFBN6jAfHCTYd4LZmRJay%2BoWPfofHU1O%2BpKfoifeUUyABWXwvsFDoBfzZn%2FvDfbegEof4fb06Tb1PBMqyQgUS8xkPdIxxBBVGzAX08pPpEIfWu1JIzuV1lUioZ%2FGZ85deE5ysWC4LU%2Bv2dusxME7E2ZoK3iN28AYWdTDnz1a9tpzWnHhfrLfHJCJYAiBTNt2LMeQcJz7SFU9qV8DtLXOizlN%2FFOdux0Em%2Bv17U4lPpTMGPbNZ03l%2FNMCQiAZO7v6m%2Bof5hh4g4DYoF1Y6RyciVwJJGl7cbnD8AcU8zq%2BDCkMc9eh7Rnz5j5Th1kjV8eYAQdKbm5Iu8I0BOe3oYKZW43nJDNu9DkpeeULdjqyzXMM2S%2FXPotFJ2iK%2B12PjlZRr4BvqYw%2BtT%2BDvfee88aO3lS7RYmrLLknFnIrTCRZ7enuAETiCP6exBAe%2Bqpoersswbvc63ny986SFbkeHiHj6bCEO%2Bde2Md5J%2F8l%2FplEq9BZxYVE%2B2%2BOoJWBZwMub%2FLKR5BCGnmDOOT9cLTCG53HSXpThMpwxb9pl2q0mdgYkhxNIMNjAjsIGOqUBkXaHG5S7B82jKEa95OFuShdyKeaX0u9SEcUrYhww%2Bcz86x6w85yJ4KKlhQroKI50sUja9heh40JaMxu8%2FxUVUJ5SOuzjMNCiD2yoSuqzWb4jVADQLyk0sz99dlFPp5y8lw0Guikhqyii4TNHdgzRaJzRyKB%2FEGbaPHK1PnA9FHmBAnsogWJeznGtJfAtCPbQUplPDM%2FToHGCmkVwQsan%2FDdmh%2FTK&X-Amz-Signature=f68fe1c0156aa656fb0a66a0322cabf5c5dba2b5b923cc27d322ed988c57415e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAVBG5Q%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ4zK5fqfdG5WcPTujXStSGWOArgyTXQf5250UGlVspAiEAqEfUZ55AZpTmvFcJV4jnpErhx40%2FrpW%2Fqzkf2y4eKwMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDKtKC6%2BEfEgzt%2BtJDyrcA8dix%2Fo%2FuMTQPxgrSZNt9U1Q7Yv%2FdT33fTZvuedzL9mnAABjiCXLaaO2YE1MDoztWx2WkmHMUkB8pipjFBN6jAfHCTYd4LZmRJay%2BoWPfofHU1O%2BpKfoifeUUyABWXwvsFDoBfzZn%2FvDfbegEof4fb06Tb1PBMqyQgUS8xkPdIxxBBVGzAX08pPpEIfWu1JIzuV1lUioZ%2FGZ85deE5ysWC4LU%2Bv2dusxME7E2ZoK3iN28AYWdTDnz1a9tpzWnHhfrLfHJCJYAiBTNt2LMeQcJz7SFU9qV8DtLXOizlN%2FFOdux0Em%2Bv17U4lPpTMGPbNZ03l%2FNMCQiAZO7v6m%2Bof5hh4g4DYoF1Y6RyciVwJJGl7cbnD8AcU8zq%2BDCkMc9eh7Rnz5j5Th1kjV8eYAQdKbm5Iu8I0BOe3oYKZW43nJDNu9DkpeeULdjqyzXMM2S%2FXPotFJ2iK%2B12PjlZRr4BvqYw%2BtT%2BDvfee88aO3lS7RYmrLLknFnIrTCRZ7enuAETiCP6exBAe%2Bqpoersswbvc63ny986SFbkeHiHj6bCEO%2Bde2Md5J%2F8l%2FplEq9BZxYVE%2B2%2BOoJWBZwMub%2FLKR5BCGnmDOOT9cLTCG53HSXpThMpwxb9pl2q0mdgYkhxNIMNjAjsIGOqUBkXaHG5S7B82jKEa95OFuShdyKeaX0u9SEcUrYhww%2Bcz86x6w85yJ4KKlhQroKI50sUja9heh40JaMxu8%2FxUVUJ5SOuzjMNCiD2yoSuqzWb4jVADQLyk0sz99dlFPp5y8lw0Guikhqyii4TNHdgzRaJzRyKB%2FEGbaPHK1PnA9FHmBAnsogWJeznGtJfAtCPbQUplPDM%2FToHGCmkVwQsan%2FDdmh%2FTK&X-Amz-Signature=4cf0a08cdf0b4948a8c91c3387c00a12f9f8120c89cf5a5e90e508f5e51ab19b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAVBG5Q%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ4zK5fqfdG5WcPTujXStSGWOArgyTXQf5250UGlVspAiEAqEfUZ55AZpTmvFcJV4jnpErhx40%2FrpW%2Fqzkf2y4eKwMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDKtKC6%2BEfEgzt%2BtJDyrcA8dix%2Fo%2FuMTQPxgrSZNt9U1Q7Yv%2FdT33fTZvuedzL9mnAABjiCXLaaO2YE1MDoztWx2WkmHMUkB8pipjFBN6jAfHCTYd4LZmRJay%2BoWPfofHU1O%2BpKfoifeUUyABWXwvsFDoBfzZn%2FvDfbegEof4fb06Tb1PBMqyQgUS8xkPdIxxBBVGzAX08pPpEIfWu1JIzuV1lUioZ%2FGZ85deE5ysWC4LU%2Bv2dusxME7E2ZoK3iN28AYWdTDnz1a9tpzWnHhfrLfHJCJYAiBTNt2LMeQcJz7SFU9qV8DtLXOizlN%2FFOdux0Em%2Bv17U4lPpTMGPbNZ03l%2FNMCQiAZO7v6m%2Bof5hh4g4DYoF1Y6RyciVwJJGl7cbnD8AcU8zq%2BDCkMc9eh7Rnz5j5Th1kjV8eYAQdKbm5Iu8I0BOe3oYKZW43nJDNu9DkpeeULdjqyzXMM2S%2FXPotFJ2iK%2B12PjlZRr4BvqYw%2BtT%2BDvfee88aO3lS7RYmrLLknFnIrTCRZ7enuAETiCP6exBAe%2Bqpoersswbvc63ny986SFbkeHiHj6bCEO%2Bde2Md5J%2F8l%2FplEq9BZxYVE%2B2%2BOoJWBZwMub%2FLKR5BCGnmDOOT9cLTCG53HSXpThMpwxb9pl2q0mdgYkhxNIMNjAjsIGOqUBkXaHG5S7B82jKEa95OFuShdyKeaX0u9SEcUrYhww%2Bcz86x6w85yJ4KKlhQroKI50sUja9heh40JaMxu8%2FxUVUJ5SOuzjMNCiD2yoSuqzWb4jVADQLyk0sz99dlFPp5y8lw0Guikhqyii4TNHdgzRaJzRyKB%2FEGbaPHK1PnA9FHmBAnsogWJeznGtJfAtCPbQUplPDM%2FToHGCmkVwQsan%2FDdmh%2FTK&X-Amz-Signature=341d32f33ca9b48ea79a82ecdcd0fb399d956f1ee84ad8505056505c7f4b1ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
