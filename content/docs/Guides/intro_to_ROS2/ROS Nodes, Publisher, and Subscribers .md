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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635J6POCY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5YVbrt9Ea1xDIFPARVf5gOzQsTL4chW0SfwIbuggOAIgMGp9DxF4uuB1eLyDnIexHR%2BADSDg9kEsaMrJ9EHuBdIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR19wRf8u6RHAOccSrcA%2BntNLi4U0BU0yMBmDOsyxzBvp7%2Fw8GZb3NHVzbQgbrO6VuB8B%2BQ%2FVoVNb8LsFrcx%2FN0fxmntycDq7Nj7Sk9jHbVAbr5%2BbXP5WAKZ4N9EAmhAnQefWAgwPa2X5IplaNncWvAEIi6eadlYu3%2FJyz21W4Pl41vgOCE1dSNdDW2gYraasV6KRepyOgszEkyfyoNxp3rRIh4dgUy3YOxvEQBfsBLPcdoGDZfsHLAcyxoUKJh3ujcDggFaCzAwU7NRdQ9DJwO8UQUsJJT3yBtt68BbEopjQTD2qJ30q2PduWxGjMRoAAvqwvF9FzKobmTH4fTWp%2FgrMVCgv2kbxUyrudQwtJIyQEX8yaV1PnpXTjGMtbfa9nIGjwhvywXo%2F1joDpGOHNDbf9a6tZ080glUKd8tpkQw24OtQdjOGrCa8wuBFAf%2B%2B1rnIgUD5GIjOU1ly64IwJWfOcjSInzKNhKx14wic7CBjgBdEsBpcXveCmebun7kZ2H%2FdodNCkE34PbFQyxLgys%2F8qx9pELkrtyIY4xSEsjGA4JQtYWR%2FoGyhZ0Y%2BpbhVNBj1aTbWL0rzEOa7eNK0aBKnlYZcZZWoHYeqKEYF7VVWBN%2BMM1lu1m2u36GS%2B9ZXm53QMNOaxLg08LMMajlr8GOqUB8kzn%2BffvcnqTi%2Bhkt4xbvXHW5LLYXahXwUuKNjzNJhLskeQ9f0ZdWcJiZzKDQpMWzDrrNhHN9e77Oa04vfKmLqzyL5ReZJOv7VCzM0xRNw8%2BMUpVLM2MXC2%2Fm6j4NCIPRgctoXesh0nUW%2FKDiHdYGfbYcw5mw85U1uYioNvzphHIb7Uxc01woz%2FQDYLpWPYBL71Hn3fC1%2Bnm7v6v9kZqI%2FQBI%2BNJ&X-Amz-Signature=66faf90f37ee1a305370c15655031d04c94f870d253f8acbaab0622b0ac3f826&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635J6POCY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5YVbrt9Ea1xDIFPARVf5gOzQsTL4chW0SfwIbuggOAIgMGp9DxF4uuB1eLyDnIexHR%2BADSDg9kEsaMrJ9EHuBdIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR19wRf8u6RHAOccSrcA%2BntNLi4U0BU0yMBmDOsyxzBvp7%2Fw8GZb3NHVzbQgbrO6VuB8B%2BQ%2FVoVNb8LsFrcx%2FN0fxmntycDq7Nj7Sk9jHbVAbr5%2BbXP5WAKZ4N9EAmhAnQefWAgwPa2X5IplaNncWvAEIi6eadlYu3%2FJyz21W4Pl41vgOCE1dSNdDW2gYraasV6KRepyOgszEkyfyoNxp3rRIh4dgUy3YOxvEQBfsBLPcdoGDZfsHLAcyxoUKJh3ujcDggFaCzAwU7NRdQ9DJwO8UQUsJJT3yBtt68BbEopjQTD2qJ30q2PduWxGjMRoAAvqwvF9FzKobmTH4fTWp%2FgrMVCgv2kbxUyrudQwtJIyQEX8yaV1PnpXTjGMtbfa9nIGjwhvywXo%2F1joDpGOHNDbf9a6tZ080glUKd8tpkQw24OtQdjOGrCa8wuBFAf%2B%2B1rnIgUD5GIjOU1ly64IwJWfOcjSInzKNhKx14wic7CBjgBdEsBpcXveCmebun7kZ2H%2FdodNCkE34PbFQyxLgys%2F8qx9pELkrtyIY4xSEsjGA4JQtYWR%2FoGyhZ0Y%2BpbhVNBj1aTbWL0rzEOa7eNK0aBKnlYZcZZWoHYeqKEYF7VVWBN%2BMM1lu1m2u36GS%2B9ZXm53QMNOaxLg08LMMajlr8GOqUB8kzn%2BffvcnqTi%2Bhkt4xbvXHW5LLYXahXwUuKNjzNJhLskeQ9f0ZdWcJiZzKDQpMWzDrrNhHN9e77Oa04vfKmLqzyL5ReZJOv7VCzM0xRNw8%2BMUpVLM2MXC2%2Fm6j4NCIPRgctoXesh0nUW%2FKDiHdYGfbYcw5mw85U1uYioNvzphHIb7Uxc01woz%2FQDYLpWPYBL71Hn3fC1%2Bnm7v6v9kZqI%2FQBI%2BNJ&X-Amz-Signature=5e99e4613a9416ed5f4ab5b79c533af7935c9bdac2db19c021899db8b1b1df7c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635J6POCY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5YVbrt9Ea1xDIFPARVf5gOzQsTL4chW0SfwIbuggOAIgMGp9DxF4uuB1eLyDnIexHR%2BADSDg9kEsaMrJ9EHuBdIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR19wRf8u6RHAOccSrcA%2BntNLi4U0BU0yMBmDOsyxzBvp7%2Fw8GZb3NHVzbQgbrO6VuB8B%2BQ%2FVoVNb8LsFrcx%2FN0fxmntycDq7Nj7Sk9jHbVAbr5%2BbXP5WAKZ4N9EAmhAnQefWAgwPa2X5IplaNncWvAEIi6eadlYu3%2FJyz21W4Pl41vgOCE1dSNdDW2gYraasV6KRepyOgszEkyfyoNxp3rRIh4dgUy3YOxvEQBfsBLPcdoGDZfsHLAcyxoUKJh3ujcDggFaCzAwU7NRdQ9DJwO8UQUsJJT3yBtt68BbEopjQTD2qJ30q2PduWxGjMRoAAvqwvF9FzKobmTH4fTWp%2FgrMVCgv2kbxUyrudQwtJIyQEX8yaV1PnpXTjGMtbfa9nIGjwhvywXo%2F1joDpGOHNDbf9a6tZ080glUKd8tpkQw24OtQdjOGrCa8wuBFAf%2B%2B1rnIgUD5GIjOU1ly64IwJWfOcjSInzKNhKx14wic7CBjgBdEsBpcXveCmebun7kZ2H%2FdodNCkE34PbFQyxLgys%2F8qx9pELkrtyIY4xSEsjGA4JQtYWR%2FoGyhZ0Y%2BpbhVNBj1aTbWL0rzEOa7eNK0aBKnlYZcZZWoHYeqKEYF7VVWBN%2BMM1lu1m2u36GS%2B9ZXm53QMNOaxLg08LMMajlr8GOqUB8kzn%2BffvcnqTi%2Bhkt4xbvXHW5LLYXahXwUuKNjzNJhLskeQ9f0ZdWcJiZzKDQpMWzDrrNhHN9e77Oa04vfKmLqzyL5ReZJOv7VCzM0xRNw8%2BMUpVLM2MXC2%2Fm6j4NCIPRgctoXesh0nUW%2FKDiHdYGfbYcw5mw85U1uYioNvzphHIb7Uxc01woz%2FQDYLpWPYBL71Hn3fC1%2Bnm7v6v9kZqI%2FQBI%2BNJ&X-Amz-Signature=1b0ffc9c323ec0fbf6ecfbe61bfa4d3b1b3d22a8ea0179eaaf8130728fbdd721&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635J6POCY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5YVbrt9Ea1xDIFPARVf5gOzQsTL4chW0SfwIbuggOAIgMGp9DxF4uuB1eLyDnIexHR%2BADSDg9kEsaMrJ9EHuBdIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR19wRf8u6RHAOccSrcA%2BntNLi4U0BU0yMBmDOsyxzBvp7%2Fw8GZb3NHVzbQgbrO6VuB8B%2BQ%2FVoVNb8LsFrcx%2FN0fxmntycDq7Nj7Sk9jHbVAbr5%2BbXP5WAKZ4N9EAmhAnQefWAgwPa2X5IplaNncWvAEIi6eadlYu3%2FJyz21W4Pl41vgOCE1dSNdDW2gYraasV6KRepyOgszEkyfyoNxp3rRIh4dgUy3YOxvEQBfsBLPcdoGDZfsHLAcyxoUKJh3ujcDggFaCzAwU7NRdQ9DJwO8UQUsJJT3yBtt68BbEopjQTD2qJ30q2PduWxGjMRoAAvqwvF9FzKobmTH4fTWp%2FgrMVCgv2kbxUyrudQwtJIyQEX8yaV1PnpXTjGMtbfa9nIGjwhvywXo%2F1joDpGOHNDbf9a6tZ080glUKd8tpkQw24OtQdjOGrCa8wuBFAf%2B%2B1rnIgUD5GIjOU1ly64IwJWfOcjSInzKNhKx14wic7CBjgBdEsBpcXveCmebun7kZ2H%2FdodNCkE34PbFQyxLgys%2F8qx9pELkrtyIY4xSEsjGA4JQtYWR%2FoGyhZ0Y%2BpbhVNBj1aTbWL0rzEOa7eNK0aBKnlYZcZZWoHYeqKEYF7VVWBN%2BMM1lu1m2u36GS%2B9ZXm53QMNOaxLg08LMMajlr8GOqUB8kzn%2BffvcnqTi%2Bhkt4xbvXHW5LLYXahXwUuKNjzNJhLskeQ9f0ZdWcJiZzKDQpMWzDrrNhHN9e77Oa04vfKmLqzyL5ReZJOv7VCzM0xRNw8%2BMUpVLM2MXC2%2Fm6j4NCIPRgctoXesh0nUW%2FKDiHdYGfbYcw5mw85U1uYioNvzphHIb7Uxc01woz%2FQDYLpWPYBL71Hn3fC1%2Bnm7v6v9kZqI%2FQBI%2BNJ&X-Amz-Signature=93d676d3c002b91bcc4305148648d790aa0379cfdf83faa9dd9d5adfe70e74be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635J6POCY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5YVbrt9Ea1xDIFPARVf5gOzQsTL4chW0SfwIbuggOAIgMGp9DxF4uuB1eLyDnIexHR%2BADSDg9kEsaMrJ9EHuBdIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR19wRf8u6RHAOccSrcA%2BntNLi4U0BU0yMBmDOsyxzBvp7%2Fw8GZb3NHVzbQgbrO6VuB8B%2BQ%2FVoVNb8LsFrcx%2FN0fxmntycDq7Nj7Sk9jHbVAbr5%2BbXP5WAKZ4N9EAmhAnQefWAgwPa2X5IplaNncWvAEIi6eadlYu3%2FJyz21W4Pl41vgOCE1dSNdDW2gYraasV6KRepyOgszEkyfyoNxp3rRIh4dgUy3YOxvEQBfsBLPcdoGDZfsHLAcyxoUKJh3ujcDggFaCzAwU7NRdQ9DJwO8UQUsJJT3yBtt68BbEopjQTD2qJ30q2PduWxGjMRoAAvqwvF9FzKobmTH4fTWp%2FgrMVCgv2kbxUyrudQwtJIyQEX8yaV1PnpXTjGMtbfa9nIGjwhvywXo%2F1joDpGOHNDbf9a6tZ080glUKd8tpkQw24OtQdjOGrCa8wuBFAf%2B%2B1rnIgUD5GIjOU1ly64IwJWfOcjSInzKNhKx14wic7CBjgBdEsBpcXveCmebun7kZ2H%2FdodNCkE34PbFQyxLgys%2F8qx9pELkrtyIY4xSEsjGA4JQtYWR%2FoGyhZ0Y%2BpbhVNBj1aTbWL0rzEOa7eNK0aBKnlYZcZZWoHYeqKEYF7VVWBN%2BMM1lu1m2u36GS%2B9ZXm53QMNOaxLg08LMMajlr8GOqUB8kzn%2BffvcnqTi%2Bhkt4xbvXHW5LLYXahXwUuKNjzNJhLskeQ9f0ZdWcJiZzKDQpMWzDrrNhHN9e77Oa04vfKmLqzyL5ReZJOv7VCzM0xRNw8%2BMUpVLM2MXC2%2Fm6j4NCIPRgctoXesh0nUW%2FKDiHdYGfbYcw5mw85U1uYioNvzphHIb7Uxc01woz%2FQDYLpWPYBL71Hn3fC1%2Bnm7v6v9kZqI%2FQBI%2BNJ&X-Amz-Signature=fe4a24744fa14f34d3c7013b2ae9f6af01249dd151dce2389145fa9d6ae4f7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635J6POCY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5YVbrt9Ea1xDIFPARVf5gOzQsTL4chW0SfwIbuggOAIgMGp9DxF4uuB1eLyDnIexHR%2BADSDg9kEsaMrJ9EHuBdIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR19wRf8u6RHAOccSrcA%2BntNLi4U0BU0yMBmDOsyxzBvp7%2Fw8GZb3NHVzbQgbrO6VuB8B%2BQ%2FVoVNb8LsFrcx%2FN0fxmntycDq7Nj7Sk9jHbVAbr5%2BbXP5WAKZ4N9EAmhAnQefWAgwPa2X5IplaNncWvAEIi6eadlYu3%2FJyz21W4Pl41vgOCE1dSNdDW2gYraasV6KRepyOgszEkyfyoNxp3rRIh4dgUy3YOxvEQBfsBLPcdoGDZfsHLAcyxoUKJh3ujcDggFaCzAwU7NRdQ9DJwO8UQUsJJT3yBtt68BbEopjQTD2qJ30q2PduWxGjMRoAAvqwvF9FzKobmTH4fTWp%2FgrMVCgv2kbxUyrudQwtJIyQEX8yaV1PnpXTjGMtbfa9nIGjwhvywXo%2F1joDpGOHNDbf9a6tZ080glUKd8tpkQw24OtQdjOGrCa8wuBFAf%2B%2B1rnIgUD5GIjOU1ly64IwJWfOcjSInzKNhKx14wic7CBjgBdEsBpcXveCmebun7kZ2H%2FdodNCkE34PbFQyxLgys%2F8qx9pELkrtyIY4xSEsjGA4JQtYWR%2FoGyhZ0Y%2BpbhVNBj1aTbWL0rzEOa7eNK0aBKnlYZcZZWoHYeqKEYF7VVWBN%2BMM1lu1m2u36GS%2B9ZXm53QMNOaxLg08LMMajlr8GOqUB8kzn%2BffvcnqTi%2Bhkt4xbvXHW5LLYXahXwUuKNjzNJhLskeQ9f0ZdWcJiZzKDQpMWzDrrNhHN9e77Oa04vfKmLqzyL5ReZJOv7VCzM0xRNw8%2BMUpVLM2MXC2%2Fm6j4NCIPRgctoXesh0nUW%2FKDiHdYGfbYcw5mw85U1uYioNvzphHIb7Uxc01woz%2FQDYLpWPYBL71Hn3fC1%2Bnm7v6v9kZqI%2FQBI%2BNJ&X-Amz-Signature=ca96b4356f11e37db78672e6bd4f53fa19733a4ac9ad086a061baf2d48467c39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635J6POCY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5YVbrt9Ea1xDIFPARVf5gOzQsTL4chW0SfwIbuggOAIgMGp9DxF4uuB1eLyDnIexHR%2BADSDg9kEsaMrJ9EHuBdIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR19wRf8u6RHAOccSrcA%2BntNLi4U0BU0yMBmDOsyxzBvp7%2Fw8GZb3NHVzbQgbrO6VuB8B%2BQ%2FVoVNb8LsFrcx%2FN0fxmntycDq7Nj7Sk9jHbVAbr5%2BbXP5WAKZ4N9EAmhAnQefWAgwPa2X5IplaNncWvAEIi6eadlYu3%2FJyz21W4Pl41vgOCE1dSNdDW2gYraasV6KRepyOgszEkyfyoNxp3rRIh4dgUy3YOxvEQBfsBLPcdoGDZfsHLAcyxoUKJh3ujcDggFaCzAwU7NRdQ9DJwO8UQUsJJT3yBtt68BbEopjQTD2qJ30q2PduWxGjMRoAAvqwvF9FzKobmTH4fTWp%2FgrMVCgv2kbxUyrudQwtJIyQEX8yaV1PnpXTjGMtbfa9nIGjwhvywXo%2F1joDpGOHNDbf9a6tZ080glUKd8tpkQw24OtQdjOGrCa8wuBFAf%2B%2B1rnIgUD5GIjOU1ly64IwJWfOcjSInzKNhKx14wic7CBjgBdEsBpcXveCmebun7kZ2H%2FdodNCkE34PbFQyxLgys%2F8qx9pELkrtyIY4xSEsjGA4JQtYWR%2FoGyhZ0Y%2BpbhVNBj1aTbWL0rzEOa7eNK0aBKnlYZcZZWoHYeqKEYF7VVWBN%2BMM1lu1m2u36GS%2B9ZXm53QMNOaxLg08LMMajlr8GOqUB8kzn%2BffvcnqTi%2Bhkt4xbvXHW5LLYXahXwUuKNjzNJhLskeQ9f0ZdWcJiZzKDQpMWzDrrNhHN9e77Oa04vfKmLqzyL5ReZJOv7VCzM0xRNw8%2BMUpVLM2MXC2%2Fm6j4NCIPRgctoXesh0nUW%2FKDiHdYGfbYcw5mw85U1uYioNvzphHIb7Uxc01woz%2FQDYLpWPYBL71Hn3fC1%2Bnm7v6v9kZqI%2FQBI%2BNJ&X-Amz-Signature=ec5b169ece5255ab0b271e84c1ba5274b7d7a0d3144773840b2e9aec1d7382af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635J6POCY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh5YVbrt9Ea1xDIFPARVf5gOzQsTL4chW0SfwIbuggOAIgMGp9DxF4uuB1eLyDnIexHR%2BADSDg9kEsaMrJ9EHuBdIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDR19wRf8u6RHAOccSrcA%2BntNLi4U0BU0yMBmDOsyxzBvp7%2Fw8GZb3NHVzbQgbrO6VuB8B%2BQ%2FVoVNb8LsFrcx%2FN0fxmntycDq7Nj7Sk9jHbVAbr5%2BbXP5WAKZ4N9EAmhAnQefWAgwPa2X5IplaNncWvAEIi6eadlYu3%2FJyz21W4Pl41vgOCE1dSNdDW2gYraasV6KRepyOgszEkyfyoNxp3rRIh4dgUy3YOxvEQBfsBLPcdoGDZfsHLAcyxoUKJh3ujcDggFaCzAwU7NRdQ9DJwO8UQUsJJT3yBtt68BbEopjQTD2qJ30q2PduWxGjMRoAAvqwvF9FzKobmTH4fTWp%2FgrMVCgv2kbxUyrudQwtJIyQEX8yaV1PnpXTjGMtbfa9nIGjwhvywXo%2F1joDpGOHNDbf9a6tZ080glUKd8tpkQw24OtQdjOGrCa8wuBFAf%2B%2B1rnIgUD5GIjOU1ly64IwJWfOcjSInzKNhKx14wic7CBjgBdEsBpcXveCmebun7kZ2H%2FdodNCkE34PbFQyxLgys%2F8qx9pELkrtyIY4xSEsjGA4JQtYWR%2FoGyhZ0Y%2BpbhVNBj1aTbWL0rzEOa7eNK0aBKnlYZcZZWoHYeqKEYF7VVWBN%2BMM1lu1m2u36GS%2B9ZXm53QMNOaxLg08LMMajlr8GOqUB8kzn%2BffvcnqTi%2Bhkt4xbvXHW5LLYXahXwUuKNjzNJhLskeQ9f0ZdWcJiZzKDQpMWzDrrNhHN9e77Oa04vfKmLqzyL5ReZJOv7VCzM0xRNw8%2BMUpVLM2MXC2%2Fm6j4NCIPRgctoXesh0nUW%2FKDiHdYGfbYcw5mw85U1uYioNvzphHIb7Uxc01woz%2FQDYLpWPYBL71Hn3fC1%2Bnm7v6v9kZqI%2FQBI%2BNJ&X-Amz-Signature=5d008097ff1eab704773715abaf04514b2db3a16593f16c57bb7f6cea18c5f54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
