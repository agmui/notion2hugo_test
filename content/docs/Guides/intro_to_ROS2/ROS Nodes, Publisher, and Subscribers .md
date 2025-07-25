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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSTRMNS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW7mtVFpyPnnuFw1WuT4ES9hBEJHAKs7AxoD2CnbjYYQIgWcALgVtbU9isL07fvEE6AwlUgauslSBhzqEKOq%2BFu5Iq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLN%2FRzET9pVJReY%2BsircAx8etYtXzL8gD914NUw2IMY84MY7flj6f%2BxFMVwnNGxUmtAm95mzCoMv0%2F4rrLBN%2FZl68uYu7esTQyofVeDaIZxxZ7Nfi%2Fw9VRrEBAhxLRjFYH%2FZgPh%2Fyz2teSZI2pypebj1FmntH0eW7%2B7N1%2Fbzt4Vo2kgzrNun3Gxw59w0vseBvwWzkSOFep2%2BJgTpprwIxMR%2FRZX9YqWotnFtRuYFzZynmoPe6o6wjupLeSkUy%2FhJNsG3M%2BbgTaqnvGyZa3zkWOdRL0ODOMLL4Mw%2Fg3d9Yh6fUiqcXrGQLlk0emgPrSGVl417siv0FlHDStWH4vpibxdnVA8PYZzTMaVdodmrClff4krhXVvei1PvriYn%2Bws%2BAhug7T1hxXO7gKptvi2ryUqXFqdAubKK4CZSN6ixyC1SrnKaqZlkaQvZpN8DV9sjtpBz3j4McwQHwTzJ799BR3xCjkvYShUZ%2BVAqOveGBAZClv6V5tNwrzsPO1xawWy6OMGi1KK6smMnyDBLdO4jjQUpF3mWITUZvuP0FiuKCY3s1LgRXfb1YZIjf6MQ7WOtmImmmI8zY7JyqKcecCBsbdcqqYbg%2F3GyhkwEaz%2FqEy9ijpxxZmpQdoSxhXimC%2F2jyGKAis2tiqrzC83vMJ68jsQGOqUBAP0WkmHYYULTBxiMObjoeqmJ5Vsgi257Auus4pc30cPghI46RYjABMtcn%2F2%2FLeXMhyC7guTr0wZQOUszqA8VO%2FCo7Bj9Hl%2Bs%2BI8fZcUI7QPMP6Jzq8LKDpVx%2BW9%2FndwQ8SxrtJJsHMJKu%2FbfqmHYfaPMxK8ydnDKLFOIi%2FBmfOZJTLxo2BUB%2Fi9jOTfgCUaRrGRCA2a5t2Nul4UB%2BgKjbvL14tK%2B&X-Amz-Signature=c8851db9b1775af84982730db4e624a4c77432307aa05ea214fe4901b47e8c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSTRMNS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW7mtVFpyPnnuFw1WuT4ES9hBEJHAKs7AxoD2CnbjYYQIgWcALgVtbU9isL07fvEE6AwlUgauslSBhzqEKOq%2BFu5Iq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLN%2FRzET9pVJReY%2BsircAx8etYtXzL8gD914NUw2IMY84MY7flj6f%2BxFMVwnNGxUmtAm95mzCoMv0%2F4rrLBN%2FZl68uYu7esTQyofVeDaIZxxZ7Nfi%2Fw9VRrEBAhxLRjFYH%2FZgPh%2Fyz2teSZI2pypebj1FmntH0eW7%2B7N1%2Fbzt4Vo2kgzrNun3Gxw59w0vseBvwWzkSOFep2%2BJgTpprwIxMR%2FRZX9YqWotnFtRuYFzZynmoPe6o6wjupLeSkUy%2FhJNsG3M%2BbgTaqnvGyZa3zkWOdRL0ODOMLL4Mw%2Fg3d9Yh6fUiqcXrGQLlk0emgPrSGVl417siv0FlHDStWH4vpibxdnVA8PYZzTMaVdodmrClff4krhXVvei1PvriYn%2Bws%2BAhug7T1hxXO7gKptvi2ryUqXFqdAubKK4CZSN6ixyC1SrnKaqZlkaQvZpN8DV9sjtpBz3j4McwQHwTzJ799BR3xCjkvYShUZ%2BVAqOveGBAZClv6V5tNwrzsPO1xawWy6OMGi1KK6smMnyDBLdO4jjQUpF3mWITUZvuP0FiuKCY3s1LgRXfb1YZIjf6MQ7WOtmImmmI8zY7JyqKcecCBsbdcqqYbg%2F3GyhkwEaz%2FqEy9ijpxxZmpQdoSxhXimC%2F2jyGKAis2tiqrzC83vMJ68jsQGOqUBAP0WkmHYYULTBxiMObjoeqmJ5Vsgi257Auus4pc30cPghI46RYjABMtcn%2F2%2FLeXMhyC7guTr0wZQOUszqA8VO%2FCo7Bj9Hl%2Bs%2BI8fZcUI7QPMP6Jzq8LKDpVx%2BW9%2FndwQ8SxrtJJsHMJKu%2FbfqmHYfaPMxK8ydnDKLFOIi%2FBmfOZJTLxo2BUB%2Fi9jOTfgCUaRrGRCA2a5t2Nul4UB%2BgKjbvL14tK%2B&X-Amz-Signature=53909e61c48a3da5c9a42732dbacdc5178c2398ed7dd79c9e65edec1f5a5db6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSTRMNS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW7mtVFpyPnnuFw1WuT4ES9hBEJHAKs7AxoD2CnbjYYQIgWcALgVtbU9isL07fvEE6AwlUgauslSBhzqEKOq%2BFu5Iq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLN%2FRzET9pVJReY%2BsircAx8etYtXzL8gD914NUw2IMY84MY7flj6f%2BxFMVwnNGxUmtAm95mzCoMv0%2F4rrLBN%2FZl68uYu7esTQyofVeDaIZxxZ7Nfi%2Fw9VRrEBAhxLRjFYH%2FZgPh%2Fyz2teSZI2pypebj1FmntH0eW7%2B7N1%2Fbzt4Vo2kgzrNun3Gxw59w0vseBvwWzkSOFep2%2BJgTpprwIxMR%2FRZX9YqWotnFtRuYFzZynmoPe6o6wjupLeSkUy%2FhJNsG3M%2BbgTaqnvGyZa3zkWOdRL0ODOMLL4Mw%2Fg3d9Yh6fUiqcXrGQLlk0emgPrSGVl417siv0FlHDStWH4vpibxdnVA8PYZzTMaVdodmrClff4krhXVvei1PvriYn%2Bws%2BAhug7T1hxXO7gKptvi2ryUqXFqdAubKK4CZSN6ixyC1SrnKaqZlkaQvZpN8DV9sjtpBz3j4McwQHwTzJ799BR3xCjkvYShUZ%2BVAqOveGBAZClv6V5tNwrzsPO1xawWy6OMGi1KK6smMnyDBLdO4jjQUpF3mWITUZvuP0FiuKCY3s1LgRXfb1YZIjf6MQ7WOtmImmmI8zY7JyqKcecCBsbdcqqYbg%2F3GyhkwEaz%2FqEy9ijpxxZmpQdoSxhXimC%2F2jyGKAis2tiqrzC83vMJ68jsQGOqUBAP0WkmHYYULTBxiMObjoeqmJ5Vsgi257Auus4pc30cPghI46RYjABMtcn%2F2%2FLeXMhyC7guTr0wZQOUszqA8VO%2FCo7Bj9Hl%2Bs%2BI8fZcUI7QPMP6Jzq8LKDpVx%2BW9%2FndwQ8SxrtJJsHMJKu%2FbfqmHYfaPMxK8ydnDKLFOIi%2FBmfOZJTLxo2BUB%2Fi9jOTfgCUaRrGRCA2a5t2Nul4UB%2BgKjbvL14tK%2B&X-Amz-Signature=86a1b35c783f2bcfde025661b2e50da6040013d436f6cccadad16a52293e79fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSTRMNS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW7mtVFpyPnnuFw1WuT4ES9hBEJHAKs7AxoD2CnbjYYQIgWcALgVtbU9isL07fvEE6AwlUgauslSBhzqEKOq%2BFu5Iq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLN%2FRzET9pVJReY%2BsircAx8etYtXzL8gD914NUw2IMY84MY7flj6f%2BxFMVwnNGxUmtAm95mzCoMv0%2F4rrLBN%2FZl68uYu7esTQyofVeDaIZxxZ7Nfi%2Fw9VRrEBAhxLRjFYH%2FZgPh%2Fyz2teSZI2pypebj1FmntH0eW7%2B7N1%2Fbzt4Vo2kgzrNun3Gxw59w0vseBvwWzkSOFep2%2BJgTpprwIxMR%2FRZX9YqWotnFtRuYFzZynmoPe6o6wjupLeSkUy%2FhJNsG3M%2BbgTaqnvGyZa3zkWOdRL0ODOMLL4Mw%2Fg3d9Yh6fUiqcXrGQLlk0emgPrSGVl417siv0FlHDStWH4vpibxdnVA8PYZzTMaVdodmrClff4krhXVvei1PvriYn%2Bws%2BAhug7T1hxXO7gKptvi2ryUqXFqdAubKK4CZSN6ixyC1SrnKaqZlkaQvZpN8DV9sjtpBz3j4McwQHwTzJ799BR3xCjkvYShUZ%2BVAqOveGBAZClv6V5tNwrzsPO1xawWy6OMGi1KK6smMnyDBLdO4jjQUpF3mWITUZvuP0FiuKCY3s1LgRXfb1YZIjf6MQ7WOtmImmmI8zY7JyqKcecCBsbdcqqYbg%2F3GyhkwEaz%2FqEy9ijpxxZmpQdoSxhXimC%2F2jyGKAis2tiqrzC83vMJ68jsQGOqUBAP0WkmHYYULTBxiMObjoeqmJ5Vsgi257Auus4pc30cPghI46RYjABMtcn%2F2%2FLeXMhyC7guTr0wZQOUszqA8VO%2FCo7Bj9Hl%2Bs%2BI8fZcUI7QPMP6Jzq8LKDpVx%2BW9%2FndwQ8SxrtJJsHMJKu%2FbfqmHYfaPMxK8ydnDKLFOIi%2FBmfOZJTLxo2BUB%2Fi9jOTfgCUaRrGRCA2a5t2Nul4UB%2BgKjbvL14tK%2B&X-Amz-Signature=81a9dc87ed7d49dfb14cecf5f68d118efa3dec712f8d477bfb1c1c44c77aaeab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSTRMNS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW7mtVFpyPnnuFw1WuT4ES9hBEJHAKs7AxoD2CnbjYYQIgWcALgVtbU9isL07fvEE6AwlUgauslSBhzqEKOq%2BFu5Iq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLN%2FRzET9pVJReY%2BsircAx8etYtXzL8gD914NUw2IMY84MY7flj6f%2BxFMVwnNGxUmtAm95mzCoMv0%2F4rrLBN%2FZl68uYu7esTQyofVeDaIZxxZ7Nfi%2Fw9VRrEBAhxLRjFYH%2FZgPh%2Fyz2teSZI2pypebj1FmntH0eW7%2B7N1%2Fbzt4Vo2kgzrNun3Gxw59w0vseBvwWzkSOFep2%2BJgTpprwIxMR%2FRZX9YqWotnFtRuYFzZynmoPe6o6wjupLeSkUy%2FhJNsG3M%2BbgTaqnvGyZa3zkWOdRL0ODOMLL4Mw%2Fg3d9Yh6fUiqcXrGQLlk0emgPrSGVl417siv0FlHDStWH4vpibxdnVA8PYZzTMaVdodmrClff4krhXVvei1PvriYn%2Bws%2BAhug7T1hxXO7gKptvi2ryUqXFqdAubKK4CZSN6ixyC1SrnKaqZlkaQvZpN8DV9sjtpBz3j4McwQHwTzJ799BR3xCjkvYShUZ%2BVAqOveGBAZClv6V5tNwrzsPO1xawWy6OMGi1KK6smMnyDBLdO4jjQUpF3mWITUZvuP0FiuKCY3s1LgRXfb1YZIjf6MQ7WOtmImmmI8zY7JyqKcecCBsbdcqqYbg%2F3GyhkwEaz%2FqEy9ijpxxZmpQdoSxhXimC%2F2jyGKAis2tiqrzC83vMJ68jsQGOqUBAP0WkmHYYULTBxiMObjoeqmJ5Vsgi257Auus4pc30cPghI46RYjABMtcn%2F2%2FLeXMhyC7guTr0wZQOUszqA8VO%2FCo7Bj9Hl%2Bs%2BI8fZcUI7QPMP6Jzq8LKDpVx%2BW9%2FndwQ8SxrtJJsHMJKu%2FbfqmHYfaPMxK8ydnDKLFOIi%2FBmfOZJTLxo2BUB%2Fi9jOTfgCUaRrGRCA2a5t2Nul4UB%2BgKjbvL14tK%2B&X-Amz-Signature=1a288177a36a37ade464eec1ec4e5d24d7ff85ac641b74910fa309a767cec9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSTRMNS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW7mtVFpyPnnuFw1WuT4ES9hBEJHAKs7AxoD2CnbjYYQIgWcALgVtbU9isL07fvEE6AwlUgauslSBhzqEKOq%2BFu5Iq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLN%2FRzET9pVJReY%2BsircAx8etYtXzL8gD914NUw2IMY84MY7flj6f%2BxFMVwnNGxUmtAm95mzCoMv0%2F4rrLBN%2FZl68uYu7esTQyofVeDaIZxxZ7Nfi%2Fw9VRrEBAhxLRjFYH%2FZgPh%2Fyz2teSZI2pypebj1FmntH0eW7%2B7N1%2Fbzt4Vo2kgzrNun3Gxw59w0vseBvwWzkSOFep2%2BJgTpprwIxMR%2FRZX9YqWotnFtRuYFzZynmoPe6o6wjupLeSkUy%2FhJNsG3M%2BbgTaqnvGyZa3zkWOdRL0ODOMLL4Mw%2Fg3d9Yh6fUiqcXrGQLlk0emgPrSGVl417siv0FlHDStWH4vpibxdnVA8PYZzTMaVdodmrClff4krhXVvei1PvriYn%2Bws%2BAhug7T1hxXO7gKptvi2ryUqXFqdAubKK4CZSN6ixyC1SrnKaqZlkaQvZpN8DV9sjtpBz3j4McwQHwTzJ799BR3xCjkvYShUZ%2BVAqOveGBAZClv6V5tNwrzsPO1xawWy6OMGi1KK6smMnyDBLdO4jjQUpF3mWITUZvuP0FiuKCY3s1LgRXfb1YZIjf6MQ7WOtmImmmI8zY7JyqKcecCBsbdcqqYbg%2F3GyhkwEaz%2FqEy9ijpxxZmpQdoSxhXimC%2F2jyGKAis2tiqrzC83vMJ68jsQGOqUBAP0WkmHYYULTBxiMObjoeqmJ5Vsgi257Auus4pc30cPghI46RYjABMtcn%2F2%2FLeXMhyC7guTr0wZQOUszqA8VO%2FCo7Bj9Hl%2Bs%2BI8fZcUI7QPMP6Jzq8LKDpVx%2BW9%2FndwQ8SxrtJJsHMJKu%2FbfqmHYfaPMxK8ydnDKLFOIi%2FBmfOZJTLxo2BUB%2Fi9jOTfgCUaRrGRCA2a5t2Nul4UB%2BgKjbvL14tK%2B&X-Amz-Signature=1145d7147b9d302b3ea717600888fc2cdc832d400c73a6349d9d1984d5c1218d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSTRMNS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW7mtVFpyPnnuFw1WuT4ES9hBEJHAKs7AxoD2CnbjYYQIgWcALgVtbU9isL07fvEE6AwlUgauslSBhzqEKOq%2BFu5Iq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLN%2FRzET9pVJReY%2BsircAx8etYtXzL8gD914NUw2IMY84MY7flj6f%2BxFMVwnNGxUmtAm95mzCoMv0%2F4rrLBN%2FZl68uYu7esTQyofVeDaIZxxZ7Nfi%2Fw9VRrEBAhxLRjFYH%2FZgPh%2Fyz2teSZI2pypebj1FmntH0eW7%2B7N1%2Fbzt4Vo2kgzrNun3Gxw59w0vseBvwWzkSOFep2%2BJgTpprwIxMR%2FRZX9YqWotnFtRuYFzZynmoPe6o6wjupLeSkUy%2FhJNsG3M%2BbgTaqnvGyZa3zkWOdRL0ODOMLL4Mw%2Fg3d9Yh6fUiqcXrGQLlk0emgPrSGVl417siv0FlHDStWH4vpibxdnVA8PYZzTMaVdodmrClff4krhXVvei1PvriYn%2Bws%2BAhug7T1hxXO7gKptvi2ryUqXFqdAubKK4CZSN6ixyC1SrnKaqZlkaQvZpN8DV9sjtpBz3j4McwQHwTzJ799BR3xCjkvYShUZ%2BVAqOveGBAZClv6V5tNwrzsPO1xawWy6OMGi1KK6smMnyDBLdO4jjQUpF3mWITUZvuP0FiuKCY3s1LgRXfb1YZIjf6MQ7WOtmImmmI8zY7JyqKcecCBsbdcqqYbg%2F3GyhkwEaz%2FqEy9ijpxxZmpQdoSxhXimC%2F2jyGKAis2tiqrzC83vMJ68jsQGOqUBAP0WkmHYYULTBxiMObjoeqmJ5Vsgi257Auus4pc30cPghI46RYjABMtcn%2F2%2FLeXMhyC7guTr0wZQOUszqA8VO%2FCo7Bj9Hl%2Bs%2BI8fZcUI7QPMP6Jzq8LKDpVx%2BW9%2FndwQ8SxrtJJsHMJKu%2FbfqmHYfaPMxK8ydnDKLFOIi%2FBmfOZJTLxo2BUB%2Fi9jOTfgCUaRrGRCA2a5t2Nul4UB%2BgKjbvL14tK%2B&X-Amz-Signature=7ef855df56f93f5e405c401b590d79ceb257e0671daa457d9922b76b28a204fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSTRMNS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW7mtVFpyPnnuFw1WuT4ES9hBEJHAKs7AxoD2CnbjYYQIgWcALgVtbU9isL07fvEE6AwlUgauslSBhzqEKOq%2BFu5Iq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDLN%2FRzET9pVJReY%2BsircAx8etYtXzL8gD914NUw2IMY84MY7flj6f%2BxFMVwnNGxUmtAm95mzCoMv0%2F4rrLBN%2FZl68uYu7esTQyofVeDaIZxxZ7Nfi%2Fw9VRrEBAhxLRjFYH%2FZgPh%2Fyz2teSZI2pypebj1FmntH0eW7%2B7N1%2Fbzt4Vo2kgzrNun3Gxw59w0vseBvwWzkSOFep2%2BJgTpprwIxMR%2FRZX9YqWotnFtRuYFzZynmoPe6o6wjupLeSkUy%2FhJNsG3M%2BbgTaqnvGyZa3zkWOdRL0ODOMLL4Mw%2Fg3d9Yh6fUiqcXrGQLlk0emgPrSGVl417siv0FlHDStWH4vpibxdnVA8PYZzTMaVdodmrClff4krhXVvei1PvriYn%2Bws%2BAhug7T1hxXO7gKptvi2ryUqXFqdAubKK4CZSN6ixyC1SrnKaqZlkaQvZpN8DV9sjtpBz3j4McwQHwTzJ799BR3xCjkvYShUZ%2BVAqOveGBAZClv6V5tNwrzsPO1xawWy6OMGi1KK6smMnyDBLdO4jjQUpF3mWITUZvuP0FiuKCY3s1LgRXfb1YZIjf6MQ7WOtmImmmI8zY7JyqKcecCBsbdcqqYbg%2F3GyhkwEaz%2FqEy9ijpxxZmpQdoSxhXimC%2F2jyGKAis2tiqrzC83vMJ68jsQGOqUBAP0WkmHYYULTBxiMObjoeqmJ5Vsgi257Auus4pc30cPghI46RYjABMtcn%2F2%2FLeXMhyC7guTr0wZQOUszqA8VO%2FCo7Bj9Hl%2Bs%2BI8fZcUI7QPMP6Jzq8LKDpVx%2BW9%2FndwQ8SxrtJJsHMJKu%2FbfqmHYfaPMxK8ydnDKLFOIi%2FBmfOZJTLxo2BUB%2Fi9jOTfgCUaRrGRCA2a5t2Nul4UB%2BgKjbvL14tK%2B&X-Amz-Signature=8d3548c9ff0a1fc1a2d07c9171eed485732658591dd442cc45d7a4563020a656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
