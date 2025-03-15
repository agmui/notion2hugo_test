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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWRTMPN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7eqn8i%2Bl842IrzOXoCA3G3uH3yO5cQBuZC3Zx7X8zeAIhAIehFk3hRwD0MiZzCwnQGHKmLImeXrHRIQ4kR4EhFG9uKv8DCBwQABoMNjM3NDIzMTgzODA1IgzEq7xNmOFXTldpSrwq3APB7HKk1xvUi5hKzzsNiuzPmRNIhQJreyWIWY8Zu9z0A1qX6Q4CsSp09IEU7bW1omTxZODOCURdu8cXNkrwDc9Zx4eS5cuOTZKrPFSLfdmw%2FWioYLZtfKg%2F0eiWnpA71LTGlT1RJapIS57FDYKzitkK7PvmHnjsgaTtKEVeSrSUrSh069BLK28rhiZEwge5q2eAbnGsvSVYKa2GZpht%2Br1XtQDCcbT3TxZUnFdwWw793vPBauBsI8e7eZvmpNVIvWPL7zF3fVsWblsIzsH2WxA7nKwFnNoNhjZOuNDQQOwN99QMkBBTneCGgSMpB3dojMznHKyg9gfarVhymqOzfbGWPgTKJH4baV9dnES%2F2PuMWw4UOdJ61v%2BiFdGkT%2BuRDyGG%2BulwWIKw8j3rvzlDlBr2kVZKKzCt29T%2Bc97WjME6ntcaOsvmg1q8JYiAvlQvYlXSGDpQBXL33rLL9oMNClARn3eZsn7XiexHrzjT%2FhZx%2F%2FaV6NCjDGab28Y4zmqb8iYbOKYUEpyUwy26LmqndraHQEmGEOdITakUG7FMQU0X2SwF9STmnSa1%2Bpr8RwfYYPkaJoVsSjtShwptniDI8oo8Tj%2FdMN41aP5Tp9BxfydVJ51efdOTBkt5Bym6WDCpjte%2BBjqkAfTmC2OroeNSvhxtHUaUTA2SbJqBKKjmtrSImBAhATJKqergj19EXmqSF4TN69OkG9AJp%2F9v7qAyc8z6dud4%2FEg43V4QHfL3cm%2BmGVrN%2FkLn3V57I0tlG6is2GZNOnIrQd7yL%2BgG6c2E9VhzBE8PjebZysSmyHSg%2F7oJlKUWtwNygxu5YPYHtqZzT9ZiJIr7yJ4AkA6gF45YefU7o5yOuAgHQFmw&X-Amz-Signature=a1c555affd094edf171a5babca6b124ba3919d4ad045624ef9fb8ef0743bf1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWRTMPN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7eqn8i%2Bl842IrzOXoCA3G3uH3yO5cQBuZC3Zx7X8zeAIhAIehFk3hRwD0MiZzCwnQGHKmLImeXrHRIQ4kR4EhFG9uKv8DCBwQABoMNjM3NDIzMTgzODA1IgzEq7xNmOFXTldpSrwq3APB7HKk1xvUi5hKzzsNiuzPmRNIhQJreyWIWY8Zu9z0A1qX6Q4CsSp09IEU7bW1omTxZODOCURdu8cXNkrwDc9Zx4eS5cuOTZKrPFSLfdmw%2FWioYLZtfKg%2F0eiWnpA71LTGlT1RJapIS57FDYKzitkK7PvmHnjsgaTtKEVeSrSUrSh069BLK28rhiZEwge5q2eAbnGsvSVYKa2GZpht%2Br1XtQDCcbT3TxZUnFdwWw793vPBauBsI8e7eZvmpNVIvWPL7zF3fVsWblsIzsH2WxA7nKwFnNoNhjZOuNDQQOwN99QMkBBTneCGgSMpB3dojMznHKyg9gfarVhymqOzfbGWPgTKJH4baV9dnES%2F2PuMWw4UOdJ61v%2BiFdGkT%2BuRDyGG%2BulwWIKw8j3rvzlDlBr2kVZKKzCt29T%2Bc97WjME6ntcaOsvmg1q8JYiAvlQvYlXSGDpQBXL33rLL9oMNClARn3eZsn7XiexHrzjT%2FhZx%2F%2FaV6NCjDGab28Y4zmqb8iYbOKYUEpyUwy26LmqndraHQEmGEOdITakUG7FMQU0X2SwF9STmnSa1%2Bpr8RwfYYPkaJoVsSjtShwptniDI8oo8Tj%2FdMN41aP5Tp9BxfydVJ51efdOTBkt5Bym6WDCpjte%2BBjqkAfTmC2OroeNSvhxtHUaUTA2SbJqBKKjmtrSImBAhATJKqergj19EXmqSF4TN69OkG9AJp%2F9v7qAyc8z6dud4%2FEg43V4QHfL3cm%2BmGVrN%2FkLn3V57I0tlG6is2GZNOnIrQd7yL%2BgG6c2E9VhzBE8PjebZysSmyHSg%2F7oJlKUWtwNygxu5YPYHtqZzT9ZiJIr7yJ4AkA6gF45YefU7o5yOuAgHQFmw&X-Amz-Signature=466280bf2ba1055f7be9904b1ac7b84ddac7c67dcd3f306a972504377af37d89&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWRTMPN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7eqn8i%2Bl842IrzOXoCA3G3uH3yO5cQBuZC3Zx7X8zeAIhAIehFk3hRwD0MiZzCwnQGHKmLImeXrHRIQ4kR4EhFG9uKv8DCBwQABoMNjM3NDIzMTgzODA1IgzEq7xNmOFXTldpSrwq3APB7HKk1xvUi5hKzzsNiuzPmRNIhQJreyWIWY8Zu9z0A1qX6Q4CsSp09IEU7bW1omTxZODOCURdu8cXNkrwDc9Zx4eS5cuOTZKrPFSLfdmw%2FWioYLZtfKg%2F0eiWnpA71LTGlT1RJapIS57FDYKzitkK7PvmHnjsgaTtKEVeSrSUrSh069BLK28rhiZEwge5q2eAbnGsvSVYKa2GZpht%2Br1XtQDCcbT3TxZUnFdwWw793vPBauBsI8e7eZvmpNVIvWPL7zF3fVsWblsIzsH2WxA7nKwFnNoNhjZOuNDQQOwN99QMkBBTneCGgSMpB3dojMznHKyg9gfarVhymqOzfbGWPgTKJH4baV9dnES%2F2PuMWw4UOdJ61v%2BiFdGkT%2BuRDyGG%2BulwWIKw8j3rvzlDlBr2kVZKKzCt29T%2Bc97WjME6ntcaOsvmg1q8JYiAvlQvYlXSGDpQBXL33rLL9oMNClARn3eZsn7XiexHrzjT%2FhZx%2F%2FaV6NCjDGab28Y4zmqb8iYbOKYUEpyUwy26LmqndraHQEmGEOdITakUG7FMQU0X2SwF9STmnSa1%2Bpr8RwfYYPkaJoVsSjtShwptniDI8oo8Tj%2FdMN41aP5Tp9BxfydVJ51efdOTBkt5Bym6WDCpjte%2BBjqkAfTmC2OroeNSvhxtHUaUTA2SbJqBKKjmtrSImBAhATJKqergj19EXmqSF4TN69OkG9AJp%2F9v7qAyc8z6dud4%2FEg43V4QHfL3cm%2BmGVrN%2FkLn3V57I0tlG6is2GZNOnIrQd7yL%2BgG6c2E9VhzBE8PjebZysSmyHSg%2F7oJlKUWtwNygxu5YPYHtqZzT9ZiJIr7yJ4AkA6gF45YefU7o5yOuAgHQFmw&X-Amz-Signature=ac9da00f1ae0c9415d73224be6c5a1a7222874a5cdd0e265b5225344dde9e4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWRTMPN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7eqn8i%2Bl842IrzOXoCA3G3uH3yO5cQBuZC3Zx7X8zeAIhAIehFk3hRwD0MiZzCwnQGHKmLImeXrHRIQ4kR4EhFG9uKv8DCBwQABoMNjM3NDIzMTgzODA1IgzEq7xNmOFXTldpSrwq3APB7HKk1xvUi5hKzzsNiuzPmRNIhQJreyWIWY8Zu9z0A1qX6Q4CsSp09IEU7bW1omTxZODOCURdu8cXNkrwDc9Zx4eS5cuOTZKrPFSLfdmw%2FWioYLZtfKg%2F0eiWnpA71LTGlT1RJapIS57FDYKzitkK7PvmHnjsgaTtKEVeSrSUrSh069BLK28rhiZEwge5q2eAbnGsvSVYKa2GZpht%2Br1XtQDCcbT3TxZUnFdwWw793vPBauBsI8e7eZvmpNVIvWPL7zF3fVsWblsIzsH2WxA7nKwFnNoNhjZOuNDQQOwN99QMkBBTneCGgSMpB3dojMznHKyg9gfarVhymqOzfbGWPgTKJH4baV9dnES%2F2PuMWw4UOdJ61v%2BiFdGkT%2BuRDyGG%2BulwWIKw8j3rvzlDlBr2kVZKKzCt29T%2Bc97WjME6ntcaOsvmg1q8JYiAvlQvYlXSGDpQBXL33rLL9oMNClARn3eZsn7XiexHrzjT%2FhZx%2F%2FaV6NCjDGab28Y4zmqb8iYbOKYUEpyUwy26LmqndraHQEmGEOdITakUG7FMQU0X2SwF9STmnSa1%2Bpr8RwfYYPkaJoVsSjtShwptniDI8oo8Tj%2FdMN41aP5Tp9BxfydVJ51efdOTBkt5Bym6WDCpjte%2BBjqkAfTmC2OroeNSvhxtHUaUTA2SbJqBKKjmtrSImBAhATJKqergj19EXmqSF4TN69OkG9AJp%2F9v7qAyc8z6dud4%2FEg43V4QHfL3cm%2BmGVrN%2FkLn3V57I0tlG6is2GZNOnIrQd7yL%2BgG6c2E9VhzBE8PjebZysSmyHSg%2F7oJlKUWtwNygxu5YPYHtqZzT9ZiJIr7yJ4AkA6gF45YefU7o5yOuAgHQFmw&X-Amz-Signature=f8f60d16550698feff7e6dda6202866bb042609a406b175ab54be72d53c94597&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWRTMPN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7eqn8i%2Bl842IrzOXoCA3G3uH3yO5cQBuZC3Zx7X8zeAIhAIehFk3hRwD0MiZzCwnQGHKmLImeXrHRIQ4kR4EhFG9uKv8DCBwQABoMNjM3NDIzMTgzODA1IgzEq7xNmOFXTldpSrwq3APB7HKk1xvUi5hKzzsNiuzPmRNIhQJreyWIWY8Zu9z0A1qX6Q4CsSp09IEU7bW1omTxZODOCURdu8cXNkrwDc9Zx4eS5cuOTZKrPFSLfdmw%2FWioYLZtfKg%2F0eiWnpA71LTGlT1RJapIS57FDYKzitkK7PvmHnjsgaTtKEVeSrSUrSh069BLK28rhiZEwge5q2eAbnGsvSVYKa2GZpht%2Br1XtQDCcbT3TxZUnFdwWw793vPBauBsI8e7eZvmpNVIvWPL7zF3fVsWblsIzsH2WxA7nKwFnNoNhjZOuNDQQOwN99QMkBBTneCGgSMpB3dojMznHKyg9gfarVhymqOzfbGWPgTKJH4baV9dnES%2F2PuMWw4UOdJ61v%2BiFdGkT%2BuRDyGG%2BulwWIKw8j3rvzlDlBr2kVZKKzCt29T%2Bc97WjME6ntcaOsvmg1q8JYiAvlQvYlXSGDpQBXL33rLL9oMNClARn3eZsn7XiexHrzjT%2FhZx%2F%2FaV6NCjDGab28Y4zmqb8iYbOKYUEpyUwy26LmqndraHQEmGEOdITakUG7FMQU0X2SwF9STmnSa1%2Bpr8RwfYYPkaJoVsSjtShwptniDI8oo8Tj%2FdMN41aP5Tp9BxfydVJ51efdOTBkt5Bym6WDCpjte%2BBjqkAfTmC2OroeNSvhxtHUaUTA2SbJqBKKjmtrSImBAhATJKqergj19EXmqSF4TN69OkG9AJp%2F9v7qAyc8z6dud4%2FEg43V4QHfL3cm%2BmGVrN%2FkLn3V57I0tlG6is2GZNOnIrQd7yL%2BgG6c2E9VhzBE8PjebZysSmyHSg%2F7oJlKUWtwNygxu5YPYHtqZzT9ZiJIr7yJ4AkA6gF45YefU7o5yOuAgHQFmw&X-Amz-Signature=a5ccbca0692bdc0472819cb3e042e96615e85fd52a639162b1463296b374e6b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWRTMPN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7eqn8i%2Bl842IrzOXoCA3G3uH3yO5cQBuZC3Zx7X8zeAIhAIehFk3hRwD0MiZzCwnQGHKmLImeXrHRIQ4kR4EhFG9uKv8DCBwQABoMNjM3NDIzMTgzODA1IgzEq7xNmOFXTldpSrwq3APB7HKk1xvUi5hKzzsNiuzPmRNIhQJreyWIWY8Zu9z0A1qX6Q4CsSp09IEU7bW1omTxZODOCURdu8cXNkrwDc9Zx4eS5cuOTZKrPFSLfdmw%2FWioYLZtfKg%2F0eiWnpA71LTGlT1RJapIS57FDYKzitkK7PvmHnjsgaTtKEVeSrSUrSh069BLK28rhiZEwge5q2eAbnGsvSVYKa2GZpht%2Br1XtQDCcbT3TxZUnFdwWw793vPBauBsI8e7eZvmpNVIvWPL7zF3fVsWblsIzsH2WxA7nKwFnNoNhjZOuNDQQOwN99QMkBBTneCGgSMpB3dojMznHKyg9gfarVhymqOzfbGWPgTKJH4baV9dnES%2F2PuMWw4UOdJ61v%2BiFdGkT%2BuRDyGG%2BulwWIKw8j3rvzlDlBr2kVZKKzCt29T%2Bc97WjME6ntcaOsvmg1q8JYiAvlQvYlXSGDpQBXL33rLL9oMNClARn3eZsn7XiexHrzjT%2FhZx%2F%2FaV6NCjDGab28Y4zmqb8iYbOKYUEpyUwy26LmqndraHQEmGEOdITakUG7FMQU0X2SwF9STmnSa1%2Bpr8RwfYYPkaJoVsSjtShwptniDI8oo8Tj%2FdMN41aP5Tp9BxfydVJ51efdOTBkt5Bym6WDCpjte%2BBjqkAfTmC2OroeNSvhxtHUaUTA2SbJqBKKjmtrSImBAhATJKqergj19EXmqSF4TN69OkG9AJp%2F9v7qAyc8z6dud4%2FEg43V4QHfL3cm%2BmGVrN%2FkLn3V57I0tlG6is2GZNOnIrQd7yL%2BgG6c2E9VhzBE8PjebZysSmyHSg%2F7oJlKUWtwNygxu5YPYHtqZzT9ZiJIr7yJ4AkA6gF45YefU7o5yOuAgHQFmw&X-Amz-Signature=c925220ab7566a05bd7b342a92abc81ed54775394af756f420e355f1aa4d2762&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWRTMPN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7eqn8i%2Bl842IrzOXoCA3G3uH3yO5cQBuZC3Zx7X8zeAIhAIehFk3hRwD0MiZzCwnQGHKmLImeXrHRIQ4kR4EhFG9uKv8DCBwQABoMNjM3NDIzMTgzODA1IgzEq7xNmOFXTldpSrwq3APB7HKk1xvUi5hKzzsNiuzPmRNIhQJreyWIWY8Zu9z0A1qX6Q4CsSp09IEU7bW1omTxZODOCURdu8cXNkrwDc9Zx4eS5cuOTZKrPFSLfdmw%2FWioYLZtfKg%2F0eiWnpA71LTGlT1RJapIS57FDYKzitkK7PvmHnjsgaTtKEVeSrSUrSh069BLK28rhiZEwge5q2eAbnGsvSVYKa2GZpht%2Br1XtQDCcbT3TxZUnFdwWw793vPBauBsI8e7eZvmpNVIvWPL7zF3fVsWblsIzsH2WxA7nKwFnNoNhjZOuNDQQOwN99QMkBBTneCGgSMpB3dojMznHKyg9gfarVhymqOzfbGWPgTKJH4baV9dnES%2F2PuMWw4UOdJ61v%2BiFdGkT%2BuRDyGG%2BulwWIKw8j3rvzlDlBr2kVZKKzCt29T%2Bc97WjME6ntcaOsvmg1q8JYiAvlQvYlXSGDpQBXL33rLL9oMNClARn3eZsn7XiexHrzjT%2FhZx%2F%2FaV6NCjDGab28Y4zmqb8iYbOKYUEpyUwy26LmqndraHQEmGEOdITakUG7FMQU0X2SwF9STmnSa1%2Bpr8RwfYYPkaJoVsSjtShwptniDI8oo8Tj%2FdMN41aP5Tp9BxfydVJ51efdOTBkt5Bym6WDCpjte%2BBjqkAfTmC2OroeNSvhxtHUaUTA2SbJqBKKjmtrSImBAhATJKqergj19EXmqSF4TN69OkG9AJp%2F9v7qAyc8z6dud4%2FEg43V4QHfL3cm%2BmGVrN%2FkLn3V57I0tlG6is2GZNOnIrQd7yL%2BgG6c2E9VhzBE8PjebZysSmyHSg%2F7oJlKUWtwNygxu5YPYHtqZzT9ZiJIr7yJ4AkA6gF45YefU7o5yOuAgHQFmw&X-Amz-Signature=b70fdc2878a4fa4e9fc89be0cd5c8318026d081208eabf2e8bd23b728627ed95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWRTMPN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7eqn8i%2Bl842IrzOXoCA3G3uH3yO5cQBuZC3Zx7X8zeAIhAIehFk3hRwD0MiZzCwnQGHKmLImeXrHRIQ4kR4EhFG9uKv8DCBwQABoMNjM3NDIzMTgzODA1IgzEq7xNmOFXTldpSrwq3APB7HKk1xvUi5hKzzsNiuzPmRNIhQJreyWIWY8Zu9z0A1qX6Q4CsSp09IEU7bW1omTxZODOCURdu8cXNkrwDc9Zx4eS5cuOTZKrPFSLfdmw%2FWioYLZtfKg%2F0eiWnpA71LTGlT1RJapIS57FDYKzitkK7PvmHnjsgaTtKEVeSrSUrSh069BLK28rhiZEwge5q2eAbnGsvSVYKa2GZpht%2Br1XtQDCcbT3TxZUnFdwWw793vPBauBsI8e7eZvmpNVIvWPL7zF3fVsWblsIzsH2WxA7nKwFnNoNhjZOuNDQQOwN99QMkBBTneCGgSMpB3dojMznHKyg9gfarVhymqOzfbGWPgTKJH4baV9dnES%2F2PuMWw4UOdJ61v%2BiFdGkT%2BuRDyGG%2BulwWIKw8j3rvzlDlBr2kVZKKzCt29T%2Bc97WjME6ntcaOsvmg1q8JYiAvlQvYlXSGDpQBXL33rLL9oMNClARn3eZsn7XiexHrzjT%2FhZx%2F%2FaV6NCjDGab28Y4zmqb8iYbOKYUEpyUwy26LmqndraHQEmGEOdITakUG7FMQU0X2SwF9STmnSa1%2Bpr8RwfYYPkaJoVsSjtShwptniDI8oo8Tj%2FdMN41aP5Tp9BxfydVJ51efdOTBkt5Bym6WDCpjte%2BBjqkAfTmC2OroeNSvhxtHUaUTA2SbJqBKKjmtrSImBAhATJKqergj19EXmqSF4TN69OkG9AJp%2F9v7qAyc8z6dud4%2FEg43V4QHfL3cm%2BmGVrN%2FkLn3V57I0tlG6is2GZNOnIrQd7yL%2BgG6c2E9VhzBE8PjebZysSmyHSg%2F7oJlKUWtwNygxu5YPYHtqZzT9ZiJIr7yJ4AkA6gF45YefU7o5yOuAgHQFmw&X-Amz-Signature=51c227aa0b6d4492b9c8437001522bab0c45eaacd933942a35930493a0d11110&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
