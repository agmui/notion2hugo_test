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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIHZHIH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmnr0qZ%2FZj3ox%2FEV4zGVqH%2Fa1Xb%2FzKDpSB2PKQ1mmtFAiA%2B1Apr7FRavFTwu8YRG8mRfdB492EX7UMkm5hfY%2BJccSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLtZ9vBTvRxJD%2FSeKtwDiSmVjy0khumIwD4gHfQzRe%2FIw5va5K0t2GtGZZi3VKhPBMCY%2BnvVoU0KEJjYQV52TZAhDqgBbe3nlB8ADyCQQOce0BL5FJV6B%2BSxP0zpyqom9BnKpuwFMRvR5SkIM%2FqpCHI3zl5PhoCgl23AUB1BowDx2suVXWTLnnLIjXAZOfnwLHQ%2BfSk9JXJp9sLmS7AITkrLIqqTHE2lZoz0KOrHzSj%2Bs98KtMZ30p4F0agTsQPbjtzGWo%2Ba%2Foc3MakfGQ5poLNdHdotraXDoDEjmnwLL3RvxSH4fWh%2BktlZHh9xFwXaq8n3pZh8%2Fb%2FlXck6Ep5YPIAsI4PwsrC8QkgUZwtvOLbQyswFO6ItC0NnMKFlTwMZ9oNuBgZZOWjUGW%2BoaMiDewVEEMAZIxlqQMyOMmSpZN9tw6Cqn03d5c2sm2BmSAE11ttGahdVIrCD681ulaLfdA04wXjdGMvyBoSSAm%2B9fm1sLHEbtjh9IXwwYUO9p99KAqPjy3VxzRmjTYpsb2LnTEYExbktr8V8LaapYD5sCajkccTm5C1TzLKTSR8s85WW4uP39RUjvSPQgAdHfw%2BHewnJ98WmOObfSmmCJnP7DLRjrj%2BYfaNgYH8yx95BSAcP6FyJ2%2FmP%2BWvX%2BKwwgMzcvQY6pgEyEbyyDTVE%2BkX%2FluTid6SFees%2BDMDdK0xfzwx5Ok%2BlSmMLLj8vIG9vtf72VRts%2FBFLmVXNJs%2B0%2F%2B1s6cVeeXdggUF2R78x5492marD0YKHG3zMKw9k6YtlNfvxod2%2FtZ6NfATpmdfl%2FYYX8xbW7n1T%2B4Ac52sm44Rc8x%2BW2la5iO6WgID65uu3%2FgWgpJgpoXcWNoiShRB9DWe2B7tPg5zjPt%2BJ8bTA&X-Amz-Signature=33c3468c815a4457791b1c361f07c2e1309a5dd68436b18217d85f055becee4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIHZHIH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmnr0qZ%2FZj3ox%2FEV4zGVqH%2Fa1Xb%2FzKDpSB2PKQ1mmtFAiA%2B1Apr7FRavFTwu8YRG8mRfdB492EX7UMkm5hfY%2BJccSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLtZ9vBTvRxJD%2FSeKtwDiSmVjy0khumIwD4gHfQzRe%2FIw5va5K0t2GtGZZi3VKhPBMCY%2BnvVoU0KEJjYQV52TZAhDqgBbe3nlB8ADyCQQOce0BL5FJV6B%2BSxP0zpyqom9BnKpuwFMRvR5SkIM%2FqpCHI3zl5PhoCgl23AUB1BowDx2suVXWTLnnLIjXAZOfnwLHQ%2BfSk9JXJp9sLmS7AITkrLIqqTHE2lZoz0KOrHzSj%2Bs98KtMZ30p4F0agTsQPbjtzGWo%2Ba%2Foc3MakfGQ5poLNdHdotraXDoDEjmnwLL3RvxSH4fWh%2BktlZHh9xFwXaq8n3pZh8%2Fb%2FlXck6Ep5YPIAsI4PwsrC8QkgUZwtvOLbQyswFO6ItC0NnMKFlTwMZ9oNuBgZZOWjUGW%2BoaMiDewVEEMAZIxlqQMyOMmSpZN9tw6Cqn03d5c2sm2BmSAE11ttGahdVIrCD681ulaLfdA04wXjdGMvyBoSSAm%2B9fm1sLHEbtjh9IXwwYUO9p99KAqPjy3VxzRmjTYpsb2LnTEYExbktr8V8LaapYD5sCajkccTm5C1TzLKTSR8s85WW4uP39RUjvSPQgAdHfw%2BHewnJ98WmOObfSmmCJnP7DLRjrj%2BYfaNgYH8yx95BSAcP6FyJ2%2FmP%2BWvX%2BKwwgMzcvQY6pgEyEbyyDTVE%2BkX%2FluTid6SFees%2BDMDdK0xfzwx5Ok%2BlSmMLLj8vIG9vtf72VRts%2FBFLmVXNJs%2B0%2F%2B1s6cVeeXdggUF2R78x5492marD0YKHG3zMKw9k6YtlNfvxod2%2FtZ6NfATpmdfl%2FYYX8xbW7n1T%2B4Ac52sm44Rc8x%2BW2la5iO6WgID65uu3%2FgWgpJgpoXcWNoiShRB9DWe2B7tPg5zjPt%2BJ8bTA&X-Amz-Signature=8919fd9c15c5d2dbfe1851ee897ad25f9e16cff5ac29f7ae11f0736589b9763a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIHZHIH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmnr0qZ%2FZj3ox%2FEV4zGVqH%2Fa1Xb%2FzKDpSB2PKQ1mmtFAiA%2B1Apr7FRavFTwu8YRG8mRfdB492EX7UMkm5hfY%2BJccSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLtZ9vBTvRxJD%2FSeKtwDiSmVjy0khumIwD4gHfQzRe%2FIw5va5K0t2GtGZZi3VKhPBMCY%2BnvVoU0KEJjYQV52TZAhDqgBbe3nlB8ADyCQQOce0BL5FJV6B%2BSxP0zpyqom9BnKpuwFMRvR5SkIM%2FqpCHI3zl5PhoCgl23AUB1BowDx2suVXWTLnnLIjXAZOfnwLHQ%2BfSk9JXJp9sLmS7AITkrLIqqTHE2lZoz0KOrHzSj%2Bs98KtMZ30p4F0agTsQPbjtzGWo%2Ba%2Foc3MakfGQ5poLNdHdotraXDoDEjmnwLL3RvxSH4fWh%2BktlZHh9xFwXaq8n3pZh8%2Fb%2FlXck6Ep5YPIAsI4PwsrC8QkgUZwtvOLbQyswFO6ItC0NnMKFlTwMZ9oNuBgZZOWjUGW%2BoaMiDewVEEMAZIxlqQMyOMmSpZN9tw6Cqn03d5c2sm2BmSAE11ttGahdVIrCD681ulaLfdA04wXjdGMvyBoSSAm%2B9fm1sLHEbtjh9IXwwYUO9p99KAqPjy3VxzRmjTYpsb2LnTEYExbktr8V8LaapYD5sCajkccTm5C1TzLKTSR8s85WW4uP39RUjvSPQgAdHfw%2BHewnJ98WmOObfSmmCJnP7DLRjrj%2BYfaNgYH8yx95BSAcP6FyJ2%2FmP%2BWvX%2BKwwgMzcvQY6pgEyEbyyDTVE%2BkX%2FluTid6SFees%2BDMDdK0xfzwx5Ok%2BlSmMLLj8vIG9vtf72VRts%2FBFLmVXNJs%2B0%2F%2B1s6cVeeXdggUF2R78x5492marD0YKHG3zMKw9k6YtlNfvxod2%2FtZ6NfATpmdfl%2FYYX8xbW7n1T%2B4Ac52sm44Rc8x%2BW2la5iO6WgID65uu3%2FgWgpJgpoXcWNoiShRB9DWe2B7tPg5zjPt%2BJ8bTA&X-Amz-Signature=0a545c6ab75b85978d0c746659cb8ff821984a382f07e0a1b58a25e341d68447&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIHZHIH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmnr0qZ%2FZj3ox%2FEV4zGVqH%2Fa1Xb%2FzKDpSB2PKQ1mmtFAiA%2B1Apr7FRavFTwu8YRG8mRfdB492EX7UMkm5hfY%2BJccSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLtZ9vBTvRxJD%2FSeKtwDiSmVjy0khumIwD4gHfQzRe%2FIw5va5K0t2GtGZZi3VKhPBMCY%2BnvVoU0KEJjYQV52TZAhDqgBbe3nlB8ADyCQQOce0BL5FJV6B%2BSxP0zpyqom9BnKpuwFMRvR5SkIM%2FqpCHI3zl5PhoCgl23AUB1BowDx2suVXWTLnnLIjXAZOfnwLHQ%2BfSk9JXJp9sLmS7AITkrLIqqTHE2lZoz0KOrHzSj%2Bs98KtMZ30p4F0agTsQPbjtzGWo%2Ba%2Foc3MakfGQ5poLNdHdotraXDoDEjmnwLL3RvxSH4fWh%2BktlZHh9xFwXaq8n3pZh8%2Fb%2FlXck6Ep5YPIAsI4PwsrC8QkgUZwtvOLbQyswFO6ItC0NnMKFlTwMZ9oNuBgZZOWjUGW%2BoaMiDewVEEMAZIxlqQMyOMmSpZN9tw6Cqn03d5c2sm2BmSAE11ttGahdVIrCD681ulaLfdA04wXjdGMvyBoSSAm%2B9fm1sLHEbtjh9IXwwYUO9p99KAqPjy3VxzRmjTYpsb2LnTEYExbktr8V8LaapYD5sCajkccTm5C1TzLKTSR8s85WW4uP39RUjvSPQgAdHfw%2BHewnJ98WmOObfSmmCJnP7DLRjrj%2BYfaNgYH8yx95BSAcP6FyJ2%2FmP%2BWvX%2BKwwgMzcvQY6pgEyEbyyDTVE%2BkX%2FluTid6SFees%2BDMDdK0xfzwx5Ok%2BlSmMLLj8vIG9vtf72VRts%2FBFLmVXNJs%2B0%2F%2B1s6cVeeXdggUF2R78x5492marD0YKHG3zMKw9k6YtlNfvxod2%2FtZ6NfATpmdfl%2FYYX8xbW7n1T%2B4Ac52sm44Rc8x%2BW2la5iO6WgID65uu3%2FgWgpJgpoXcWNoiShRB9DWe2B7tPg5zjPt%2BJ8bTA&X-Amz-Signature=b4962a664d5f82a75fb0371d998392801c75e82f28e185e5898e1161c72e0859&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIHZHIH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmnr0qZ%2FZj3ox%2FEV4zGVqH%2Fa1Xb%2FzKDpSB2PKQ1mmtFAiA%2B1Apr7FRavFTwu8YRG8mRfdB492EX7UMkm5hfY%2BJccSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLtZ9vBTvRxJD%2FSeKtwDiSmVjy0khumIwD4gHfQzRe%2FIw5va5K0t2GtGZZi3VKhPBMCY%2BnvVoU0KEJjYQV52TZAhDqgBbe3nlB8ADyCQQOce0BL5FJV6B%2BSxP0zpyqom9BnKpuwFMRvR5SkIM%2FqpCHI3zl5PhoCgl23AUB1BowDx2suVXWTLnnLIjXAZOfnwLHQ%2BfSk9JXJp9sLmS7AITkrLIqqTHE2lZoz0KOrHzSj%2Bs98KtMZ30p4F0agTsQPbjtzGWo%2Ba%2Foc3MakfGQ5poLNdHdotraXDoDEjmnwLL3RvxSH4fWh%2BktlZHh9xFwXaq8n3pZh8%2Fb%2FlXck6Ep5YPIAsI4PwsrC8QkgUZwtvOLbQyswFO6ItC0NnMKFlTwMZ9oNuBgZZOWjUGW%2BoaMiDewVEEMAZIxlqQMyOMmSpZN9tw6Cqn03d5c2sm2BmSAE11ttGahdVIrCD681ulaLfdA04wXjdGMvyBoSSAm%2B9fm1sLHEbtjh9IXwwYUO9p99KAqPjy3VxzRmjTYpsb2LnTEYExbktr8V8LaapYD5sCajkccTm5C1TzLKTSR8s85WW4uP39RUjvSPQgAdHfw%2BHewnJ98WmOObfSmmCJnP7DLRjrj%2BYfaNgYH8yx95BSAcP6FyJ2%2FmP%2BWvX%2BKwwgMzcvQY6pgEyEbyyDTVE%2BkX%2FluTid6SFees%2BDMDdK0xfzwx5Ok%2BlSmMLLj8vIG9vtf72VRts%2FBFLmVXNJs%2B0%2F%2B1s6cVeeXdggUF2R78x5492marD0YKHG3zMKw9k6YtlNfvxod2%2FtZ6NfATpmdfl%2FYYX8xbW7n1T%2B4Ac52sm44Rc8x%2BW2la5iO6WgID65uu3%2FgWgpJgpoXcWNoiShRB9DWe2B7tPg5zjPt%2BJ8bTA&X-Amz-Signature=a6170fa271df1290bf3382171e81db7a6cc7f65861097a40d091906a0f758cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIHZHIH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmnr0qZ%2FZj3ox%2FEV4zGVqH%2Fa1Xb%2FzKDpSB2PKQ1mmtFAiA%2B1Apr7FRavFTwu8YRG8mRfdB492EX7UMkm5hfY%2BJccSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLtZ9vBTvRxJD%2FSeKtwDiSmVjy0khumIwD4gHfQzRe%2FIw5va5K0t2GtGZZi3VKhPBMCY%2BnvVoU0KEJjYQV52TZAhDqgBbe3nlB8ADyCQQOce0BL5FJV6B%2BSxP0zpyqom9BnKpuwFMRvR5SkIM%2FqpCHI3zl5PhoCgl23AUB1BowDx2suVXWTLnnLIjXAZOfnwLHQ%2BfSk9JXJp9sLmS7AITkrLIqqTHE2lZoz0KOrHzSj%2Bs98KtMZ30p4F0agTsQPbjtzGWo%2Ba%2Foc3MakfGQ5poLNdHdotraXDoDEjmnwLL3RvxSH4fWh%2BktlZHh9xFwXaq8n3pZh8%2Fb%2FlXck6Ep5YPIAsI4PwsrC8QkgUZwtvOLbQyswFO6ItC0NnMKFlTwMZ9oNuBgZZOWjUGW%2BoaMiDewVEEMAZIxlqQMyOMmSpZN9tw6Cqn03d5c2sm2BmSAE11ttGahdVIrCD681ulaLfdA04wXjdGMvyBoSSAm%2B9fm1sLHEbtjh9IXwwYUO9p99KAqPjy3VxzRmjTYpsb2LnTEYExbktr8V8LaapYD5sCajkccTm5C1TzLKTSR8s85WW4uP39RUjvSPQgAdHfw%2BHewnJ98WmOObfSmmCJnP7DLRjrj%2BYfaNgYH8yx95BSAcP6FyJ2%2FmP%2BWvX%2BKwwgMzcvQY6pgEyEbyyDTVE%2BkX%2FluTid6SFees%2BDMDdK0xfzwx5Ok%2BlSmMLLj8vIG9vtf72VRts%2FBFLmVXNJs%2B0%2F%2B1s6cVeeXdggUF2R78x5492marD0YKHG3zMKw9k6YtlNfvxod2%2FtZ6NfATpmdfl%2FYYX8xbW7n1T%2B4Ac52sm44Rc8x%2BW2la5iO6WgID65uu3%2FgWgpJgpoXcWNoiShRB9DWe2B7tPg5zjPt%2BJ8bTA&X-Amz-Signature=1455ed4852002ec81460c0f89b0a002763ba20b897b3dd22bbc02f60760f86b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIHZHIH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmnr0qZ%2FZj3ox%2FEV4zGVqH%2Fa1Xb%2FzKDpSB2PKQ1mmtFAiA%2B1Apr7FRavFTwu8YRG8mRfdB492EX7UMkm5hfY%2BJccSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLtZ9vBTvRxJD%2FSeKtwDiSmVjy0khumIwD4gHfQzRe%2FIw5va5K0t2GtGZZi3VKhPBMCY%2BnvVoU0KEJjYQV52TZAhDqgBbe3nlB8ADyCQQOce0BL5FJV6B%2BSxP0zpyqom9BnKpuwFMRvR5SkIM%2FqpCHI3zl5PhoCgl23AUB1BowDx2suVXWTLnnLIjXAZOfnwLHQ%2BfSk9JXJp9sLmS7AITkrLIqqTHE2lZoz0KOrHzSj%2Bs98KtMZ30p4F0agTsQPbjtzGWo%2Ba%2Foc3MakfGQ5poLNdHdotraXDoDEjmnwLL3RvxSH4fWh%2BktlZHh9xFwXaq8n3pZh8%2Fb%2FlXck6Ep5YPIAsI4PwsrC8QkgUZwtvOLbQyswFO6ItC0NnMKFlTwMZ9oNuBgZZOWjUGW%2BoaMiDewVEEMAZIxlqQMyOMmSpZN9tw6Cqn03d5c2sm2BmSAE11ttGahdVIrCD681ulaLfdA04wXjdGMvyBoSSAm%2B9fm1sLHEbtjh9IXwwYUO9p99KAqPjy3VxzRmjTYpsb2LnTEYExbktr8V8LaapYD5sCajkccTm5C1TzLKTSR8s85WW4uP39RUjvSPQgAdHfw%2BHewnJ98WmOObfSmmCJnP7DLRjrj%2BYfaNgYH8yx95BSAcP6FyJ2%2FmP%2BWvX%2BKwwgMzcvQY6pgEyEbyyDTVE%2BkX%2FluTid6SFees%2BDMDdK0xfzwx5Ok%2BlSmMLLj8vIG9vtf72VRts%2FBFLmVXNJs%2B0%2F%2B1s6cVeeXdggUF2R78x5492marD0YKHG3zMKw9k6YtlNfvxod2%2FtZ6NfATpmdfl%2FYYX8xbW7n1T%2B4Ac52sm44Rc8x%2BW2la5iO6WgID65uu3%2FgWgpJgpoXcWNoiShRB9DWe2B7tPg5zjPt%2BJ8bTA&X-Amz-Signature=8bf319802c5d1f19d2e85fb01da0df58bedbf66a8e6b247eca6c25e7e6b1aab4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIHZHIH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmnr0qZ%2FZj3ox%2FEV4zGVqH%2Fa1Xb%2FzKDpSB2PKQ1mmtFAiA%2B1Apr7FRavFTwu8YRG8mRfdB492EX7UMkm5hfY%2BJccSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLtZ9vBTvRxJD%2FSeKtwDiSmVjy0khumIwD4gHfQzRe%2FIw5va5K0t2GtGZZi3VKhPBMCY%2BnvVoU0KEJjYQV52TZAhDqgBbe3nlB8ADyCQQOce0BL5FJV6B%2BSxP0zpyqom9BnKpuwFMRvR5SkIM%2FqpCHI3zl5PhoCgl23AUB1BowDx2suVXWTLnnLIjXAZOfnwLHQ%2BfSk9JXJp9sLmS7AITkrLIqqTHE2lZoz0KOrHzSj%2Bs98KtMZ30p4F0agTsQPbjtzGWo%2Ba%2Foc3MakfGQ5poLNdHdotraXDoDEjmnwLL3RvxSH4fWh%2BktlZHh9xFwXaq8n3pZh8%2Fb%2FlXck6Ep5YPIAsI4PwsrC8QkgUZwtvOLbQyswFO6ItC0NnMKFlTwMZ9oNuBgZZOWjUGW%2BoaMiDewVEEMAZIxlqQMyOMmSpZN9tw6Cqn03d5c2sm2BmSAE11ttGahdVIrCD681ulaLfdA04wXjdGMvyBoSSAm%2B9fm1sLHEbtjh9IXwwYUO9p99KAqPjy3VxzRmjTYpsb2LnTEYExbktr8V8LaapYD5sCajkccTm5C1TzLKTSR8s85WW4uP39RUjvSPQgAdHfw%2BHewnJ98WmOObfSmmCJnP7DLRjrj%2BYfaNgYH8yx95BSAcP6FyJ2%2FmP%2BWvX%2BKwwgMzcvQY6pgEyEbyyDTVE%2BkX%2FluTid6SFees%2BDMDdK0xfzwx5Ok%2BlSmMLLj8vIG9vtf72VRts%2FBFLmVXNJs%2B0%2F%2B1s6cVeeXdggUF2R78x5492marD0YKHG3zMKw9k6YtlNfvxod2%2FtZ6NfATpmdfl%2FYYX8xbW7n1T%2B4Ac52sm44Rc8x%2BW2la5iO6WgID65uu3%2FgWgpJgpoXcWNoiShRB9DWe2B7tPg5zjPt%2BJ8bTA&X-Amz-Signature=a3edf6f6d90214f0f1953a4813cdad2f1e23db57970b2a74c11b4d66d13669cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
