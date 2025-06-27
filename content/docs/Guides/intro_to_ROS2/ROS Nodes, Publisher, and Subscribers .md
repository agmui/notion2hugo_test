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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQFHZ5M%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7M6bG3yjz61geWg3rJvzntYnR1zcPJu1U4WLMgzEV6QIhAPftmtnoxSDTFyk9c0jmEeojT%2Fs1A0LTeXfbSgdxynJWKv8DCHwQABoMNjM3NDIzMTgzODA1Igz6JWoQI%2F03jB3S2uUq3ANv94CHMz7qwZcIPOBdy1HYMaigDCkweiTvbq9dVK5X21lcNNTKzhhN2106gs7tXWV2H7Z40s3o7oQ38Y5DQSE03tukUvRaALT7szvGPefJ21BJ4t%2B5FVH8yE5GkjwnAJV03a9f%2FLvxR2bMTzBsx%2Bx1YT%2FOZiCHSbN%2Fgo9RUUYKUWNlDguKScDN6DJfJWvAlR7udLDqZrtU7ZjGSVCHBzcfwwDJM%2FPDshicZ4E9a9T4dH7FyRWJOl5Dxl1kCGJTHXTSBz%2FbziZEI%2Bbs0tak62NrmrmGUhnVo0iC0bpkDKpmmU7zl6GMIr4W1x71qXBDJ7p6k1zsiwBHdEt1W7WUOyMJug4j%2F7vpIaFsenJ36PvtiSzF33nF5i0tJXGf778UWCw9JzUpUYLrDxQfeLtDZrtXtEzWuoSVfirNeO%2BzYLvLCZ7%2BrdwQjXKhH9Y1p5WMtBN1TEbSU1%2Fy800k8iqE%2BlK8eAzPTPvzeE7ZjPq1ny4O6Yt0uoJyysuzdLopMZCTVdnnZTCK6Fd1s1Vmxb8xs0benIpLMOfMU1lPuqls69daTP%2B91UCj8adtVpauKj3u6fwjz4SitY52LA7H%2Bk3EIBtB5TmZwLOG2aageDIB4HfZ9mMvNH8quUEB1nP4PzD7yvvCBjqkAbDaSlZiDBOKUMcj3xCHIRm%2ByiQcleZKeWCQKJTZk9qD023W5qzzG9Yn6zy3tSfuk9TjdSRoRqqJM6QXkxUq7iHOwuX7ZvKZghN42p%2FsVVtRI%2FFmt8lZ2MyOtaTEnDv7sq4YmwLUhlzKd5Brmk51XWrDbhc6zshwAGswHQUYQDfQZKqckhIGruv1HyDG4vpEv1CSMUOWrV8mCcKzth2XeNVXylt8&X-Amz-Signature=c9eda50e44e1838bca8d39e13f9d80133076174964b66c3c0b36bc5b315b4743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQFHZ5M%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7M6bG3yjz61geWg3rJvzntYnR1zcPJu1U4WLMgzEV6QIhAPftmtnoxSDTFyk9c0jmEeojT%2Fs1A0LTeXfbSgdxynJWKv8DCHwQABoMNjM3NDIzMTgzODA1Igz6JWoQI%2F03jB3S2uUq3ANv94CHMz7qwZcIPOBdy1HYMaigDCkweiTvbq9dVK5X21lcNNTKzhhN2106gs7tXWV2H7Z40s3o7oQ38Y5DQSE03tukUvRaALT7szvGPefJ21BJ4t%2B5FVH8yE5GkjwnAJV03a9f%2FLvxR2bMTzBsx%2Bx1YT%2FOZiCHSbN%2Fgo9RUUYKUWNlDguKScDN6DJfJWvAlR7udLDqZrtU7ZjGSVCHBzcfwwDJM%2FPDshicZ4E9a9T4dH7FyRWJOl5Dxl1kCGJTHXTSBz%2FbziZEI%2Bbs0tak62NrmrmGUhnVo0iC0bpkDKpmmU7zl6GMIr4W1x71qXBDJ7p6k1zsiwBHdEt1W7WUOyMJug4j%2F7vpIaFsenJ36PvtiSzF33nF5i0tJXGf778UWCw9JzUpUYLrDxQfeLtDZrtXtEzWuoSVfirNeO%2BzYLvLCZ7%2BrdwQjXKhH9Y1p5WMtBN1TEbSU1%2Fy800k8iqE%2BlK8eAzPTPvzeE7ZjPq1ny4O6Yt0uoJyysuzdLopMZCTVdnnZTCK6Fd1s1Vmxb8xs0benIpLMOfMU1lPuqls69daTP%2B91UCj8adtVpauKj3u6fwjz4SitY52LA7H%2Bk3EIBtB5TmZwLOG2aageDIB4HfZ9mMvNH8quUEB1nP4PzD7yvvCBjqkAbDaSlZiDBOKUMcj3xCHIRm%2ByiQcleZKeWCQKJTZk9qD023W5qzzG9Yn6zy3tSfuk9TjdSRoRqqJM6QXkxUq7iHOwuX7ZvKZghN42p%2FsVVtRI%2FFmt8lZ2MyOtaTEnDv7sq4YmwLUhlzKd5Brmk51XWrDbhc6zshwAGswHQUYQDfQZKqckhIGruv1HyDG4vpEv1CSMUOWrV8mCcKzth2XeNVXylt8&X-Amz-Signature=d89230ffaa7df995917a4ca3f9cda15b135461f923c0e8e66819e9312145d76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQFHZ5M%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7M6bG3yjz61geWg3rJvzntYnR1zcPJu1U4WLMgzEV6QIhAPftmtnoxSDTFyk9c0jmEeojT%2Fs1A0LTeXfbSgdxynJWKv8DCHwQABoMNjM3NDIzMTgzODA1Igz6JWoQI%2F03jB3S2uUq3ANv94CHMz7qwZcIPOBdy1HYMaigDCkweiTvbq9dVK5X21lcNNTKzhhN2106gs7tXWV2H7Z40s3o7oQ38Y5DQSE03tukUvRaALT7szvGPefJ21BJ4t%2B5FVH8yE5GkjwnAJV03a9f%2FLvxR2bMTzBsx%2Bx1YT%2FOZiCHSbN%2Fgo9RUUYKUWNlDguKScDN6DJfJWvAlR7udLDqZrtU7ZjGSVCHBzcfwwDJM%2FPDshicZ4E9a9T4dH7FyRWJOl5Dxl1kCGJTHXTSBz%2FbziZEI%2Bbs0tak62NrmrmGUhnVo0iC0bpkDKpmmU7zl6GMIr4W1x71qXBDJ7p6k1zsiwBHdEt1W7WUOyMJug4j%2F7vpIaFsenJ36PvtiSzF33nF5i0tJXGf778UWCw9JzUpUYLrDxQfeLtDZrtXtEzWuoSVfirNeO%2BzYLvLCZ7%2BrdwQjXKhH9Y1p5WMtBN1TEbSU1%2Fy800k8iqE%2BlK8eAzPTPvzeE7ZjPq1ny4O6Yt0uoJyysuzdLopMZCTVdnnZTCK6Fd1s1Vmxb8xs0benIpLMOfMU1lPuqls69daTP%2B91UCj8adtVpauKj3u6fwjz4SitY52LA7H%2Bk3EIBtB5TmZwLOG2aageDIB4HfZ9mMvNH8quUEB1nP4PzD7yvvCBjqkAbDaSlZiDBOKUMcj3xCHIRm%2ByiQcleZKeWCQKJTZk9qD023W5qzzG9Yn6zy3tSfuk9TjdSRoRqqJM6QXkxUq7iHOwuX7ZvKZghN42p%2FsVVtRI%2FFmt8lZ2MyOtaTEnDv7sq4YmwLUhlzKd5Brmk51XWrDbhc6zshwAGswHQUYQDfQZKqckhIGruv1HyDG4vpEv1CSMUOWrV8mCcKzth2XeNVXylt8&X-Amz-Signature=2b18a41bb418d5832e75fc6daae94633a890969fcea534b291068cc3dd056394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQFHZ5M%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7M6bG3yjz61geWg3rJvzntYnR1zcPJu1U4WLMgzEV6QIhAPftmtnoxSDTFyk9c0jmEeojT%2Fs1A0LTeXfbSgdxynJWKv8DCHwQABoMNjM3NDIzMTgzODA1Igz6JWoQI%2F03jB3S2uUq3ANv94CHMz7qwZcIPOBdy1HYMaigDCkweiTvbq9dVK5X21lcNNTKzhhN2106gs7tXWV2H7Z40s3o7oQ38Y5DQSE03tukUvRaALT7szvGPefJ21BJ4t%2B5FVH8yE5GkjwnAJV03a9f%2FLvxR2bMTzBsx%2Bx1YT%2FOZiCHSbN%2Fgo9RUUYKUWNlDguKScDN6DJfJWvAlR7udLDqZrtU7ZjGSVCHBzcfwwDJM%2FPDshicZ4E9a9T4dH7FyRWJOl5Dxl1kCGJTHXTSBz%2FbziZEI%2Bbs0tak62NrmrmGUhnVo0iC0bpkDKpmmU7zl6GMIr4W1x71qXBDJ7p6k1zsiwBHdEt1W7WUOyMJug4j%2F7vpIaFsenJ36PvtiSzF33nF5i0tJXGf778UWCw9JzUpUYLrDxQfeLtDZrtXtEzWuoSVfirNeO%2BzYLvLCZ7%2BrdwQjXKhH9Y1p5WMtBN1TEbSU1%2Fy800k8iqE%2BlK8eAzPTPvzeE7ZjPq1ny4O6Yt0uoJyysuzdLopMZCTVdnnZTCK6Fd1s1Vmxb8xs0benIpLMOfMU1lPuqls69daTP%2B91UCj8adtVpauKj3u6fwjz4SitY52LA7H%2Bk3EIBtB5TmZwLOG2aageDIB4HfZ9mMvNH8quUEB1nP4PzD7yvvCBjqkAbDaSlZiDBOKUMcj3xCHIRm%2ByiQcleZKeWCQKJTZk9qD023W5qzzG9Yn6zy3tSfuk9TjdSRoRqqJM6QXkxUq7iHOwuX7ZvKZghN42p%2FsVVtRI%2FFmt8lZ2MyOtaTEnDv7sq4YmwLUhlzKd5Brmk51XWrDbhc6zshwAGswHQUYQDfQZKqckhIGruv1HyDG4vpEv1CSMUOWrV8mCcKzth2XeNVXylt8&X-Amz-Signature=86661210cd9b22169d231a83d6f75c524b05de1ecf352d0fce5b7cec2ade9187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQFHZ5M%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7M6bG3yjz61geWg3rJvzntYnR1zcPJu1U4WLMgzEV6QIhAPftmtnoxSDTFyk9c0jmEeojT%2Fs1A0LTeXfbSgdxynJWKv8DCHwQABoMNjM3NDIzMTgzODA1Igz6JWoQI%2F03jB3S2uUq3ANv94CHMz7qwZcIPOBdy1HYMaigDCkweiTvbq9dVK5X21lcNNTKzhhN2106gs7tXWV2H7Z40s3o7oQ38Y5DQSE03tukUvRaALT7szvGPefJ21BJ4t%2B5FVH8yE5GkjwnAJV03a9f%2FLvxR2bMTzBsx%2Bx1YT%2FOZiCHSbN%2Fgo9RUUYKUWNlDguKScDN6DJfJWvAlR7udLDqZrtU7ZjGSVCHBzcfwwDJM%2FPDshicZ4E9a9T4dH7FyRWJOl5Dxl1kCGJTHXTSBz%2FbziZEI%2Bbs0tak62NrmrmGUhnVo0iC0bpkDKpmmU7zl6GMIr4W1x71qXBDJ7p6k1zsiwBHdEt1W7WUOyMJug4j%2F7vpIaFsenJ36PvtiSzF33nF5i0tJXGf778UWCw9JzUpUYLrDxQfeLtDZrtXtEzWuoSVfirNeO%2BzYLvLCZ7%2BrdwQjXKhH9Y1p5WMtBN1TEbSU1%2Fy800k8iqE%2BlK8eAzPTPvzeE7ZjPq1ny4O6Yt0uoJyysuzdLopMZCTVdnnZTCK6Fd1s1Vmxb8xs0benIpLMOfMU1lPuqls69daTP%2B91UCj8adtVpauKj3u6fwjz4SitY52LA7H%2Bk3EIBtB5TmZwLOG2aageDIB4HfZ9mMvNH8quUEB1nP4PzD7yvvCBjqkAbDaSlZiDBOKUMcj3xCHIRm%2ByiQcleZKeWCQKJTZk9qD023W5qzzG9Yn6zy3tSfuk9TjdSRoRqqJM6QXkxUq7iHOwuX7ZvKZghN42p%2FsVVtRI%2FFmt8lZ2MyOtaTEnDv7sq4YmwLUhlzKd5Brmk51XWrDbhc6zshwAGswHQUYQDfQZKqckhIGruv1HyDG4vpEv1CSMUOWrV8mCcKzth2XeNVXylt8&X-Amz-Signature=bad6f88ba40358d9c8fa96a57ab5120cd85844d4ba4046331aec3aae618781e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQFHZ5M%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7M6bG3yjz61geWg3rJvzntYnR1zcPJu1U4WLMgzEV6QIhAPftmtnoxSDTFyk9c0jmEeojT%2Fs1A0LTeXfbSgdxynJWKv8DCHwQABoMNjM3NDIzMTgzODA1Igz6JWoQI%2F03jB3S2uUq3ANv94CHMz7qwZcIPOBdy1HYMaigDCkweiTvbq9dVK5X21lcNNTKzhhN2106gs7tXWV2H7Z40s3o7oQ38Y5DQSE03tukUvRaALT7szvGPefJ21BJ4t%2B5FVH8yE5GkjwnAJV03a9f%2FLvxR2bMTzBsx%2Bx1YT%2FOZiCHSbN%2Fgo9RUUYKUWNlDguKScDN6DJfJWvAlR7udLDqZrtU7ZjGSVCHBzcfwwDJM%2FPDshicZ4E9a9T4dH7FyRWJOl5Dxl1kCGJTHXTSBz%2FbziZEI%2Bbs0tak62NrmrmGUhnVo0iC0bpkDKpmmU7zl6GMIr4W1x71qXBDJ7p6k1zsiwBHdEt1W7WUOyMJug4j%2F7vpIaFsenJ36PvtiSzF33nF5i0tJXGf778UWCw9JzUpUYLrDxQfeLtDZrtXtEzWuoSVfirNeO%2BzYLvLCZ7%2BrdwQjXKhH9Y1p5WMtBN1TEbSU1%2Fy800k8iqE%2BlK8eAzPTPvzeE7ZjPq1ny4O6Yt0uoJyysuzdLopMZCTVdnnZTCK6Fd1s1Vmxb8xs0benIpLMOfMU1lPuqls69daTP%2B91UCj8adtVpauKj3u6fwjz4SitY52LA7H%2Bk3EIBtB5TmZwLOG2aageDIB4HfZ9mMvNH8quUEB1nP4PzD7yvvCBjqkAbDaSlZiDBOKUMcj3xCHIRm%2ByiQcleZKeWCQKJTZk9qD023W5qzzG9Yn6zy3tSfuk9TjdSRoRqqJM6QXkxUq7iHOwuX7ZvKZghN42p%2FsVVtRI%2FFmt8lZ2MyOtaTEnDv7sq4YmwLUhlzKd5Brmk51XWrDbhc6zshwAGswHQUYQDfQZKqckhIGruv1HyDG4vpEv1CSMUOWrV8mCcKzth2XeNVXylt8&X-Amz-Signature=5e506835e57ef60d2edd2e1f18d6d543f7791f08078f864201f0f9429a85aaae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQFHZ5M%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7M6bG3yjz61geWg3rJvzntYnR1zcPJu1U4WLMgzEV6QIhAPftmtnoxSDTFyk9c0jmEeojT%2Fs1A0LTeXfbSgdxynJWKv8DCHwQABoMNjM3NDIzMTgzODA1Igz6JWoQI%2F03jB3S2uUq3ANv94CHMz7qwZcIPOBdy1HYMaigDCkweiTvbq9dVK5X21lcNNTKzhhN2106gs7tXWV2H7Z40s3o7oQ38Y5DQSE03tukUvRaALT7szvGPefJ21BJ4t%2B5FVH8yE5GkjwnAJV03a9f%2FLvxR2bMTzBsx%2Bx1YT%2FOZiCHSbN%2Fgo9RUUYKUWNlDguKScDN6DJfJWvAlR7udLDqZrtU7ZjGSVCHBzcfwwDJM%2FPDshicZ4E9a9T4dH7FyRWJOl5Dxl1kCGJTHXTSBz%2FbziZEI%2Bbs0tak62NrmrmGUhnVo0iC0bpkDKpmmU7zl6GMIr4W1x71qXBDJ7p6k1zsiwBHdEt1W7WUOyMJug4j%2F7vpIaFsenJ36PvtiSzF33nF5i0tJXGf778UWCw9JzUpUYLrDxQfeLtDZrtXtEzWuoSVfirNeO%2BzYLvLCZ7%2BrdwQjXKhH9Y1p5WMtBN1TEbSU1%2Fy800k8iqE%2BlK8eAzPTPvzeE7ZjPq1ny4O6Yt0uoJyysuzdLopMZCTVdnnZTCK6Fd1s1Vmxb8xs0benIpLMOfMU1lPuqls69daTP%2B91UCj8adtVpauKj3u6fwjz4SitY52LA7H%2Bk3EIBtB5TmZwLOG2aageDIB4HfZ9mMvNH8quUEB1nP4PzD7yvvCBjqkAbDaSlZiDBOKUMcj3xCHIRm%2ByiQcleZKeWCQKJTZk9qD023W5qzzG9Yn6zy3tSfuk9TjdSRoRqqJM6QXkxUq7iHOwuX7ZvKZghN42p%2FsVVtRI%2FFmt8lZ2MyOtaTEnDv7sq4YmwLUhlzKd5Brmk51XWrDbhc6zshwAGswHQUYQDfQZKqckhIGruv1HyDG4vpEv1CSMUOWrV8mCcKzth2XeNVXylt8&X-Amz-Signature=b961fb2a281ede11acd3ad2f1d3d73cb32d2255a5b6a69890ddede103c90533a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQFHZ5M%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7M6bG3yjz61geWg3rJvzntYnR1zcPJu1U4WLMgzEV6QIhAPftmtnoxSDTFyk9c0jmEeojT%2Fs1A0LTeXfbSgdxynJWKv8DCHwQABoMNjM3NDIzMTgzODA1Igz6JWoQI%2F03jB3S2uUq3ANv94CHMz7qwZcIPOBdy1HYMaigDCkweiTvbq9dVK5X21lcNNTKzhhN2106gs7tXWV2H7Z40s3o7oQ38Y5DQSE03tukUvRaALT7szvGPefJ21BJ4t%2B5FVH8yE5GkjwnAJV03a9f%2FLvxR2bMTzBsx%2Bx1YT%2FOZiCHSbN%2Fgo9RUUYKUWNlDguKScDN6DJfJWvAlR7udLDqZrtU7ZjGSVCHBzcfwwDJM%2FPDshicZ4E9a9T4dH7FyRWJOl5Dxl1kCGJTHXTSBz%2FbziZEI%2Bbs0tak62NrmrmGUhnVo0iC0bpkDKpmmU7zl6GMIr4W1x71qXBDJ7p6k1zsiwBHdEt1W7WUOyMJug4j%2F7vpIaFsenJ36PvtiSzF33nF5i0tJXGf778UWCw9JzUpUYLrDxQfeLtDZrtXtEzWuoSVfirNeO%2BzYLvLCZ7%2BrdwQjXKhH9Y1p5WMtBN1TEbSU1%2Fy800k8iqE%2BlK8eAzPTPvzeE7ZjPq1ny4O6Yt0uoJyysuzdLopMZCTVdnnZTCK6Fd1s1Vmxb8xs0benIpLMOfMU1lPuqls69daTP%2B91UCj8adtVpauKj3u6fwjz4SitY52LA7H%2Bk3EIBtB5TmZwLOG2aageDIB4HfZ9mMvNH8quUEB1nP4PzD7yvvCBjqkAbDaSlZiDBOKUMcj3xCHIRm%2ByiQcleZKeWCQKJTZk9qD023W5qzzG9Yn6zy3tSfuk9TjdSRoRqqJM6QXkxUq7iHOwuX7ZvKZghN42p%2FsVVtRI%2FFmt8lZ2MyOtaTEnDv7sq4YmwLUhlzKd5Brmk51XWrDbhc6zshwAGswHQUYQDfQZKqckhIGruv1HyDG4vpEv1CSMUOWrV8mCcKzth2XeNVXylt8&X-Amz-Signature=b71fba4dd67895e380779c9acd5e9e68c1620eb9fe50560c53259ca7a05f2cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
