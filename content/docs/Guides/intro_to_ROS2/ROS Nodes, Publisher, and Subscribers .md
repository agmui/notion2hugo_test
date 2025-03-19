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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUJ7CBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFQOmRyR%2Ffr8qoZH5pFgkLZkd1mqZmcaxesN6M%2F%2B%2FUfQAiA6lCax8GKagTsJRjCmpRbkjbngEevCVSVRC72mo87eCSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMZ%2B4x4rbVRtZcn6iWKtwDkTRKrBgz3W6kpUiLzwau9dEj36QtdJiU9PaDBmBuy1Q4UhvoInMBr%2FGJSJvJlwRK8f9PoLeDqQvXDxYxxAPLuSAzUY0PskKTLPLVkBNquBTuQNkspgrEe48q17sY4E9ERLS3pQNtnojl4MSnUSyQWOZVtxiazMEptd3RITZIuegCZ3G4%2Boxa7Xf3vf%2FGAn3t4U2Pdkbt6WcYUzArsRIDrtR5wDWNVwzkdPWMPSPG08NEjG4x3fwfJW3iiZ8uE5WbE6OZzBlaTLl%2Fiwk4GvNUS0v8%2B4TqKdlh1vxHXEn5DeSECsVgx4Hg1AJM94FSqq44aQJSvvES36XgLACaT9dStppvXXvVDvLkx4LyiJZ7a31mhZV8ztmF67jPlXQpIPPf1yf5mDlyp0g7ZQ4xxyWczJla7rt0kGmuiaawCs4ZKte4MPlSGqBMjfvqdhnWb7eKsBnHb4JHYT%2BvfgSFy6sSHt9HLoGKqDWs8EHjk9ignwx%2FLZQS9WyZ7%2BXafV5LWV%2Bqely4e1NTEJz7FvXB%2FyzutF3TxmFRN4nPP2qOF%2FNf%2FhBe5k3fcT5ci3ELlAbklIZOYrtqetOJWqqB8SWipIRb3XImyLs%2BBfWWRmbFiL%2B3mj3nTAXRbA3ISHU6M1owsP7ovgY6pgFmmDZXCQ9EGqujsW%2BmcXBPcP0hsYufbyHGHqM7JAIiwifc696hW%2FY1J0nKaSsrVkXpqL9HmNvPzFGIxNrEHc94IcY5clM%2BanY0W7cCG0fezY8U4mPSMZhSQ2M0E%2FLCKPelnohvEEMIBzc2Oql8zQnu%2BwCZ7V%2F0lnacYuxzsun8c9o8QnZpL%2BVFQjegBko%2BXOx6LkcwupqIrJveJP%2BM2ottM19MApzd&X-Amz-Signature=ab228596a865d20251add11b3c9e30ceed5dac6a5a76e03f324e603453d0cdfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUJ7CBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFQOmRyR%2Ffr8qoZH5pFgkLZkd1mqZmcaxesN6M%2F%2B%2FUfQAiA6lCax8GKagTsJRjCmpRbkjbngEevCVSVRC72mo87eCSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMZ%2B4x4rbVRtZcn6iWKtwDkTRKrBgz3W6kpUiLzwau9dEj36QtdJiU9PaDBmBuy1Q4UhvoInMBr%2FGJSJvJlwRK8f9PoLeDqQvXDxYxxAPLuSAzUY0PskKTLPLVkBNquBTuQNkspgrEe48q17sY4E9ERLS3pQNtnojl4MSnUSyQWOZVtxiazMEptd3RITZIuegCZ3G4%2Boxa7Xf3vf%2FGAn3t4U2Pdkbt6WcYUzArsRIDrtR5wDWNVwzkdPWMPSPG08NEjG4x3fwfJW3iiZ8uE5WbE6OZzBlaTLl%2Fiwk4GvNUS0v8%2B4TqKdlh1vxHXEn5DeSECsVgx4Hg1AJM94FSqq44aQJSvvES36XgLACaT9dStppvXXvVDvLkx4LyiJZ7a31mhZV8ztmF67jPlXQpIPPf1yf5mDlyp0g7ZQ4xxyWczJla7rt0kGmuiaawCs4ZKte4MPlSGqBMjfvqdhnWb7eKsBnHb4JHYT%2BvfgSFy6sSHt9HLoGKqDWs8EHjk9ignwx%2FLZQS9WyZ7%2BXafV5LWV%2Bqely4e1NTEJz7FvXB%2FyzutF3TxmFRN4nPP2qOF%2FNf%2FhBe5k3fcT5ci3ELlAbklIZOYrtqetOJWqqB8SWipIRb3XImyLs%2BBfWWRmbFiL%2B3mj3nTAXRbA3ISHU6M1owsP7ovgY6pgFmmDZXCQ9EGqujsW%2BmcXBPcP0hsYufbyHGHqM7JAIiwifc696hW%2FY1J0nKaSsrVkXpqL9HmNvPzFGIxNrEHc94IcY5clM%2BanY0W7cCG0fezY8U4mPSMZhSQ2M0E%2FLCKPelnohvEEMIBzc2Oql8zQnu%2BwCZ7V%2F0lnacYuxzsun8c9o8QnZpL%2BVFQjegBko%2BXOx6LkcwupqIrJveJP%2BM2ottM19MApzd&X-Amz-Signature=c34c49e6ea99e043a230b74a2013a8972cfa506fe3e3cd5fd0796d5e6ddf7cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUJ7CBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFQOmRyR%2Ffr8qoZH5pFgkLZkd1mqZmcaxesN6M%2F%2B%2FUfQAiA6lCax8GKagTsJRjCmpRbkjbngEevCVSVRC72mo87eCSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMZ%2B4x4rbVRtZcn6iWKtwDkTRKrBgz3W6kpUiLzwau9dEj36QtdJiU9PaDBmBuy1Q4UhvoInMBr%2FGJSJvJlwRK8f9PoLeDqQvXDxYxxAPLuSAzUY0PskKTLPLVkBNquBTuQNkspgrEe48q17sY4E9ERLS3pQNtnojl4MSnUSyQWOZVtxiazMEptd3RITZIuegCZ3G4%2Boxa7Xf3vf%2FGAn3t4U2Pdkbt6WcYUzArsRIDrtR5wDWNVwzkdPWMPSPG08NEjG4x3fwfJW3iiZ8uE5WbE6OZzBlaTLl%2Fiwk4GvNUS0v8%2B4TqKdlh1vxHXEn5DeSECsVgx4Hg1AJM94FSqq44aQJSvvES36XgLACaT9dStppvXXvVDvLkx4LyiJZ7a31mhZV8ztmF67jPlXQpIPPf1yf5mDlyp0g7ZQ4xxyWczJla7rt0kGmuiaawCs4ZKte4MPlSGqBMjfvqdhnWb7eKsBnHb4JHYT%2BvfgSFy6sSHt9HLoGKqDWs8EHjk9ignwx%2FLZQS9WyZ7%2BXafV5LWV%2Bqely4e1NTEJz7FvXB%2FyzutF3TxmFRN4nPP2qOF%2FNf%2FhBe5k3fcT5ci3ELlAbklIZOYrtqetOJWqqB8SWipIRb3XImyLs%2BBfWWRmbFiL%2B3mj3nTAXRbA3ISHU6M1owsP7ovgY6pgFmmDZXCQ9EGqujsW%2BmcXBPcP0hsYufbyHGHqM7JAIiwifc696hW%2FY1J0nKaSsrVkXpqL9HmNvPzFGIxNrEHc94IcY5clM%2BanY0W7cCG0fezY8U4mPSMZhSQ2M0E%2FLCKPelnohvEEMIBzc2Oql8zQnu%2BwCZ7V%2F0lnacYuxzsun8c9o8QnZpL%2BVFQjegBko%2BXOx6LkcwupqIrJveJP%2BM2ottM19MApzd&X-Amz-Signature=513304eebb1c08ae8262844b1c71c461686c024dd0a60fc71e79cf5c555d0693&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUJ7CBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFQOmRyR%2Ffr8qoZH5pFgkLZkd1mqZmcaxesN6M%2F%2B%2FUfQAiA6lCax8GKagTsJRjCmpRbkjbngEevCVSVRC72mo87eCSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMZ%2B4x4rbVRtZcn6iWKtwDkTRKrBgz3W6kpUiLzwau9dEj36QtdJiU9PaDBmBuy1Q4UhvoInMBr%2FGJSJvJlwRK8f9PoLeDqQvXDxYxxAPLuSAzUY0PskKTLPLVkBNquBTuQNkspgrEe48q17sY4E9ERLS3pQNtnojl4MSnUSyQWOZVtxiazMEptd3RITZIuegCZ3G4%2Boxa7Xf3vf%2FGAn3t4U2Pdkbt6WcYUzArsRIDrtR5wDWNVwzkdPWMPSPG08NEjG4x3fwfJW3iiZ8uE5WbE6OZzBlaTLl%2Fiwk4GvNUS0v8%2B4TqKdlh1vxHXEn5DeSECsVgx4Hg1AJM94FSqq44aQJSvvES36XgLACaT9dStppvXXvVDvLkx4LyiJZ7a31mhZV8ztmF67jPlXQpIPPf1yf5mDlyp0g7ZQ4xxyWczJla7rt0kGmuiaawCs4ZKte4MPlSGqBMjfvqdhnWb7eKsBnHb4JHYT%2BvfgSFy6sSHt9HLoGKqDWs8EHjk9ignwx%2FLZQS9WyZ7%2BXafV5LWV%2Bqely4e1NTEJz7FvXB%2FyzutF3TxmFRN4nPP2qOF%2FNf%2FhBe5k3fcT5ci3ELlAbklIZOYrtqetOJWqqB8SWipIRb3XImyLs%2BBfWWRmbFiL%2B3mj3nTAXRbA3ISHU6M1owsP7ovgY6pgFmmDZXCQ9EGqujsW%2BmcXBPcP0hsYufbyHGHqM7JAIiwifc696hW%2FY1J0nKaSsrVkXpqL9HmNvPzFGIxNrEHc94IcY5clM%2BanY0W7cCG0fezY8U4mPSMZhSQ2M0E%2FLCKPelnohvEEMIBzc2Oql8zQnu%2BwCZ7V%2F0lnacYuxzsun8c9o8QnZpL%2BVFQjegBko%2BXOx6LkcwupqIrJveJP%2BM2ottM19MApzd&X-Amz-Signature=3305deb2949752dc5d4b5e8313253c3ca8a33eae2f00ea91409e999663e50aa9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUJ7CBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFQOmRyR%2Ffr8qoZH5pFgkLZkd1mqZmcaxesN6M%2F%2B%2FUfQAiA6lCax8GKagTsJRjCmpRbkjbngEevCVSVRC72mo87eCSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMZ%2B4x4rbVRtZcn6iWKtwDkTRKrBgz3W6kpUiLzwau9dEj36QtdJiU9PaDBmBuy1Q4UhvoInMBr%2FGJSJvJlwRK8f9PoLeDqQvXDxYxxAPLuSAzUY0PskKTLPLVkBNquBTuQNkspgrEe48q17sY4E9ERLS3pQNtnojl4MSnUSyQWOZVtxiazMEptd3RITZIuegCZ3G4%2Boxa7Xf3vf%2FGAn3t4U2Pdkbt6WcYUzArsRIDrtR5wDWNVwzkdPWMPSPG08NEjG4x3fwfJW3iiZ8uE5WbE6OZzBlaTLl%2Fiwk4GvNUS0v8%2B4TqKdlh1vxHXEn5DeSECsVgx4Hg1AJM94FSqq44aQJSvvES36XgLACaT9dStppvXXvVDvLkx4LyiJZ7a31mhZV8ztmF67jPlXQpIPPf1yf5mDlyp0g7ZQ4xxyWczJla7rt0kGmuiaawCs4ZKte4MPlSGqBMjfvqdhnWb7eKsBnHb4JHYT%2BvfgSFy6sSHt9HLoGKqDWs8EHjk9ignwx%2FLZQS9WyZ7%2BXafV5LWV%2Bqely4e1NTEJz7FvXB%2FyzutF3TxmFRN4nPP2qOF%2FNf%2FhBe5k3fcT5ci3ELlAbklIZOYrtqetOJWqqB8SWipIRb3XImyLs%2BBfWWRmbFiL%2B3mj3nTAXRbA3ISHU6M1owsP7ovgY6pgFmmDZXCQ9EGqujsW%2BmcXBPcP0hsYufbyHGHqM7JAIiwifc696hW%2FY1J0nKaSsrVkXpqL9HmNvPzFGIxNrEHc94IcY5clM%2BanY0W7cCG0fezY8U4mPSMZhSQ2M0E%2FLCKPelnohvEEMIBzc2Oql8zQnu%2BwCZ7V%2F0lnacYuxzsun8c9o8QnZpL%2BVFQjegBko%2BXOx6LkcwupqIrJveJP%2BM2ottM19MApzd&X-Amz-Signature=39fd1bf2adb3041dd54e8769d645620af86e0d88c7e77f727386db110049fee9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUJ7CBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFQOmRyR%2Ffr8qoZH5pFgkLZkd1mqZmcaxesN6M%2F%2B%2FUfQAiA6lCax8GKagTsJRjCmpRbkjbngEevCVSVRC72mo87eCSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMZ%2B4x4rbVRtZcn6iWKtwDkTRKrBgz3W6kpUiLzwau9dEj36QtdJiU9PaDBmBuy1Q4UhvoInMBr%2FGJSJvJlwRK8f9PoLeDqQvXDxYxxAPLuSAzUY0PskKTLPLVkBNquBTuQNkspgrEe48q17sY4E9ERLS3pQNtnojl4MSnUSyQWOZVtxiazMEptd3RITZIuegCZ3G4%2Boxa7Xf3vf%2FGAn3t4U2Pdkbt6WcYUzArsRIDrtR5wDWNVwzkdPWMPSPG08NEjG4x3fwfJW3iiZ8uE5WbE6OZzBlaTLl%2Fiwk4GvNUS0v8%2B4TqKdlh1vxHXEn5DeSECsVgx4Hg1AJM94FSqq44aQJSvvES36XgLACaT9dStppvXXvVDvLkx4LyiJZ7a31mhZV8ztmF67jPlXQpIPPf1yf5mDlyp0g7ZQ4xxyWczJla7rt0kGmuiaawCs4ZKte4MPlSGqBMjfvqdhnWb7eKsBnHb4JHYT%2BvfgSFy6sSHt9HLoGKqDWs8EHjk9ignwx%2FLZQS9WyZ7%2BXafV5LWV%2Bqely4e1NTEJz7FvXB%2FyzutF3TxmFRN4nPP2qOF%2FNf%2FhBe5k3fcT5ci3ELlAbklIZOYrtqetOJWqqB8SWipIRb3XImyLs%2BBfWWRmbFiL%2B3mj3nTAXRbA3ISHU6M1owsP7ovgY6pgFmmDZXCQ9EGqujsW%2BmcXBPcP0hsYufbyHGHqM7JAIiwifc696hW%2FY1J0nKaSsrVkXpqL9HmNvPzFGIxNrEHc94IcY5clM%2BanY0W7cCG0fezY8U4mPSMZhSQ2M0E%2FLCKPelnohvEEMIBzc2Oql8zQnu%2BwCZ7V%2F0lnacYuxzsun8c9o8QnZpL%2BVFQjegBko%2BXOx6LkcwupqIrJveJP%2BM2ottM19MApzd&X-Amz-Signature=8e59e9f5084ae0312fffa26f69ddee4a581fff67b4809f53552e385b2b14a75f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUJ7CBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFQOmRyR%2Ffr8qoZH5pFgkLZkd1mqZmcaxesN6M%2F%2B%2FUfQAiA6lCax8GKagTsJRjCmpRbkjbngEevCVSVRC72mo87eCSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMZ%2B4x4rbVRtZcn6iWKtwDkTRKrBgz3W6kpUiLzwau9dEj36QtdJiU9PaDBmBuy1Q4UhvoInMBr%2FGJSJvJlwRK8f9PoLeDqQvXDxYxxAPLuSAzUY0PskKTLPLVkBNquBTuQNkspgrEe48q17sY4E9ERLS3pQNtnojl4MSnUSyQWOZVtxiazMEptd3RITZIuegCZ3G4%2Boxa7Xf3vf%2FGAn3t4U2Pdkbt6WcYUzArsRIDrtR5wDWNVwzkdPWMPSPG08NEjG4x3fwfJW3iiZ8uE5WbE6OZzBlaTLl%2Fiwk4GvNUS0v8%2B4TqKdlh1vxHXEn5DeSECsVgx4Hg1AJM94FSqq44aQJSvvES36XgLACaT9dStppvXXvVDvLkx4LyiJZ7a31mhZV8ztmF67jPlXQpIPPf1yf5mDlyp0g7ZQ4xxyWczJla7rt0kGmuiaawCs4ZKte4MPlSGqBMjfvqdhnWb7eKsBnHb4JHYT%2BvfgSFy6sSHt9HLoGKqDWs8EHjk9ignwx%2FLZQS9WyZ7%2BXafV5LWV%2Bqely4e1NTEJz7FvXB%2FyzutF3TxmFRN4nPP2qOF%2FNf%2FhBe5k3fcT5ci3ELlAbklIZOYrtqetOJWqqB8SWipIRb3XImyLs%2BBfWWRmbFiL%2B3mj3nTAXRbA3ISHU6M1owsP7ovgY6pgFmmDZXCQ9EGqujsW%2BmcXBPcP0hsYufbyHGHqM7JAIiwifc696hW%2FY1J0nKaSsrVkXpqL9HmNvPzFGIxNrEHc94IcY5clM%2BanY0W7cCG0fezY8U4mPSMZhSQ2M0E%2FLCKPelnohvEEMIBzc2Oql8zQnu%2BwCZ7V%2F0lnacYuxzsun8c9o8QnZpL%2BVFQjegBko%2BXOx6LkcwupqIrJveJP%2BM2ottM19MApzd&X-Amz-Signature=ea5c7870f9fb2a63909e3a1691029e131cefae264bfa4d80140f3c61e4db32e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUJ7CBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFQOmRyR%2Ffr8qoZH5pFgkLZkd1mqZmcaxesN6M%2F%2B%2FUfQAiA6lCax8GKagTsJRjCmpRbkjbngEevCVSVRC72mo87eCSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMZ%2B4x4rbVRtZcn6iWKtwDkTRKrBgz3W6kpUiLzwau9dEj36QtdJiU9PaDBmBuy1Q4UhvoInMBr%2FGJSJvJlwRK8f9PoLeDqQvXDxYxxAPLuSAzUY0PskKTLPLVkBNquBTuQNkspgrEe48q17sY4E9ERLS3pQNtnojl4MSnUSyQWOZVtxiazMEptd3RITZIuegCZ3G4%2Boxa7Xf3vf%2FGAn3t4U2Pdkbt6WcYUzArsRIDrtR5wDWNVwzkdPWMPSPG08NEjG4x3fwfJW3iiZ8uE5WbE6OZzBlaTLl%2Fiwk4GvNUS0v8%2B4TqKdlh1vxHXEn5DeSECsVgx4Hg1AJM94FSqq44aQJSvvES36XgLACaT9dStppvXXvVDvLkx4LyiJZ7a31mhZV8ztmF67jPlXQpIPPf1yf5mDlyp0g7ZQ4xxyWczJla7rt0kGmuiaawCs4ZKte4MPlSGqBMjfvqdhnWb7eKsBnHb4JHYT%2BvfgSFy6sSHt9HLoGKqDWs8EHjk9ignwx%2FLZQS9WyZ7%2BXafV5LWV%2Bqely4e1NTEJz7FvXB%2FyzutF3TxmFRN4nPP2qOF%2FNf%2FhBe5k3fcT5ci3ELlAbklIZOYrtqetOJWqqB8SWipIRb3XImyLs%2BBfWWRmbFiL%2B3mj3nTAXRbA3ISHU6M1owsP7ovgY6pgFmmDZXCQ9EGqujsW%2BmcXBPcP0hsYufbyHGHqM7JAIiwifc696hW%2FY1J0nKaSsrVkXpqL9HmNvPzFGIxNrEHc94IcY5clM%2BanY0W7cCG0fezY8U4mPSMZhSQ2M0E%2FLCKPelnohvEEMIBzc2Oql8zQnu%2BwCZ7V%2F0lnacYuxzsun8c9o8QnZpL%2BVFQjegBko%2BXOx6LkcwupqIrJveJP%2BM2ottM19MApzd&X-Amz-Signature=189c955ab87eeae4b2f1d6026802543f2b13e08b5aebaf3b198be43413ebf626&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
