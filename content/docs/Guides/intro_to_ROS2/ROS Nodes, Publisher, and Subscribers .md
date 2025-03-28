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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2OSMI2%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZqaMyRz0ucsaAJ7O5%2FhKQPpUelU%2BJ4MnFs7brwGO%2BLAiBRhUhkh1%2FaL42tjA0RiQJxYGsrol0N%2B4J4XMZKV1D4Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMStFP9IhYL9rtrzR2KtwDiam2%2FMfZkpO1ixWa5lgotEzIYyzLW3Wq%2FfYujevAnmuNZ2Khc2dvgk3NgfAbAkCQ1eAspfmhtp9vCojnT%2BDjgJ7%2FQQi0n5WmSQMseBHFh0xmTbaIyynTcG0yhgWi5SC%2BBYSCH83FjQsxs8nVKbkuzxZkppgw0HvXan7LdkdiaLHo8J%2BWIFI25mlHb45T6mn1Ab3JanxwtGU5ZMuQicGBOlXOORQKZmQfAZ29jwqvKP%2B%2Bg1ACPGHa%2Fgiq%2FDFvhzKfL3eKr59ITudQG2l8bFfUjblpk5GMEFlFCykTvEEB2dmqC0ozbsgV39vjBTz0LpPKxfTZEVFlKEUzNnkiuzP%2Bc9ryGdCIhf0L9TKxs%2BaG5GRkBhp8fZqnrnAprU05nwPU0VU6URnX%2By2H1WdK4H1oNb%2B8%2FK%2Fr3aSarPwX%2BXihErC0ARkH6%2B1DEBrWMgT35bUVWSHiVDONZtEEjMVhOWEqpyC%2BdM6eLQ7BwiSHzGZaw%2FQgnxgMiHT%2Bbw9L3KiT5W1FssPDPvOSkl2TNy%2B6xUKJlu2fdMYzTglJreHV87g4UKmqqMdly0TA%2F35kxJrUz69vXGtxBCSgkAFIw%2BMTRES%2BcEuRvvJABYtoE1eyBpVM80TO0uN4ghIA%2B14ohO8wh8CZvwY6pgGhiX65da%2FhQkVqQIVvKkeXnIzlAXyN4r%2FRss6ATm3WAfXXNJf1LwCyDWyOWXGplB7ia4%2Fgkem4gGx467WEbzcgmCBemdDIcXeBm0fVgmCNh4yZ5rzWjrJ8NgUkAsgM5aWAtqiO%2BsPG3ygJeQScPBEjThv6wRnBmhNGZ%2FmLH8b37Lc%2Fb9YoYz9Z434DqqNb0jbyl3LhQTTMj88KJLFUKzWwok9VsDp0&X-Amz-Signature=2ed23dc7e948002c85e8305d2d426c60490972e2e85c5f587e53c4b821d4133f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2OSMI2%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZqaMyRz0ucsaAJ7O5%2FhKQPpUelU%2BJ4MnFs7brwGO%2BLAiBRhUhkh1%2FaL42tjA0RiQJxYGsrol0N%2B4J4XMZKV1D4Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMStFP9IhYL9rtrzR2KtwDiam2%2FMfZkpO1ixWa5lgotEzIYyzLW3Wq%2FfYujevAnmuNZ2Khc2dvgk3NgfAbAkCQ1eAspfmhtp9vCojnT%2BDjgJ7%2FQQi0n5WmSQMseBHFh0xmTbaIyynTcG0yhgWi5SC%2BBYSCH83FjQsxs8nVKbkuzxZkppgw0HvXan7LdkdiaLHo8J%2BWIFI25mlHb45T6mn1Ab3JanxwtGU5ZMuQicGBOlXOORQKZmQfAZ29jwqvKP%2B%2Bg1ACPGHa%2Fgiq%2FDFvhzKfL3eKr59ITudQG2l8bFfUjblpk5GMEFlFCykTvEEB2dmqC0ozbsgV39vjBTz0LpPKxfTZEVFlKEUzNnkiuzP%2Bc9ryGdCIhf0L9TKxs%2BaG5GRkBhp8fZqnrnAprU05nwPU0VU6URnX%2By2H1WdK4H1oNb%2B8%2FK%2Fr3aSarPwX%2BXihErC0ARkH6%2B1DEBrWMgT35bUVWSHiVDONZtEEjMVhOWEqpyC%2BdM6eLQ7BwiSHzGZaw%2FQgnxgMiHT%2Bbw9L3KiT5W1FssPDPvOSkl2TNy%2B6xUKJlu2fdMYzTglJreHV87g4UKmqqMdly0TA%2F35kxJrUz69vXGtxBCSgkAFIw%2BMTRES%2BcEuRvvJABYtoE1eyBpVM80TO0uN4ghIA%2B14ohO8wh8CZvwY6pgGhiX65da%2FhQkVqQIVvKkeXnIzlAXyN4r%2FRss6ATm3WAfXXNJf1LwCyDWyOWXGplB7ia4%2Fgkem4gGx467WEbzcgmCBemdDIcXeBm0fVgmCNh4yZ5rzWjrJ8NgUkAsgM5aWAtqiO%2BsPG3ygJeQScPBEjThv6wRnBmhNGZ%2FmLH8b37Lc%2Fb9YoYz9Z434DqqNb0jbyl3LhQTTMj88KJLFUKzWwok9VsDp0&X-Amz-Signature=da7af7d5941dea1c707708220ac0bce0ccd7c17aa58d066f96359627f2823ddb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2OSMI2%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZqaMyRz0ucsaAJ7O5%2FhKQPpUelU%2BJ4MnFs7brwGO%2BLAiBRhUhkh1%2FaL42tjA0RiQJxYGsrol0N%2B4J4XMZKV1D4Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMStFP9IhYL9rtrzR2KtwDiam2%2FMfZkpO1ixWa5lgotEzIYyzLW3Wq%2FfYujevAnmuNZ2Khc2dvgk3NgfAbAkCQ1eAspfmhtp9vCojnT%2BDjgJ7%2FQQi0n5WmSQMseBHFh0xmTbaIyynTcG0yhgWi5SC%2BBYSCH83FjQsxs8nVKbkuzxZkppgw0HvXan7LdkdiaLHo8J%2BWIFI25mlHb45T6mn1Ab3JanxwtGU5ZMuQicGBOlXOORQKZmQfAZ29jwqvKP%2B%2Bg1ACPGHa%2Fgiq%2FDFvhzKfL3eKr59ITudQG2l8bFfUjblpk5GMEFlFCykTvEEB2dmqC0ozbsgV39vjBTz0LpPKxfTZEVFlKEUzNnkiuzP%2Bc9ryGdCIhf0L9TKxs%2BaG5GRkBhp8fZqnrnAprU05nwPU0VU6URnX%2By2H1WdK4H1oNb%2B8%2FK%2Fr3aSarPwX%2BXihErC0ARkH6%2B1DEBrWMgT35bUVWSHiVDONZtEEjMVhOWEqpyC%2BdM6eLQ7BwiSHzGZaw%2FQgnxgMiHT%2Bbw9L3KiT5W1FssPDPvOSkl2TNy%2B6xUKJlu2fdMYzTglJreHV87g4UKmqqMdly0TA%2F35kxJrUz69vXGtxBCSgkAFIw%2BMTRES%2BcEuRvvJABYtoE1eyBpVM80TO0uN4ghIA%2B14ohO8wh8CZvwY6pgGhiX65da%2FhQkVqQIVvKkeXnIzlAXyN4r%2FRss6ATm3WAfXXNJf1LwCyDWyOWXGplB7ia4%2Fgkem4gGx467WEbzcgmCBemdDIcXeBm0fVgmCNh4yZ5rzWjrJ8NgUkAsgM5aWAtqiO%2BsPG3ygJeQScPBEjThv6wRnBmhNGZ%2FmLH8b37Lc%2Fb9YoYz9Z434DqqNb0jbyl3LhQTTMj88KJLFUKzWwok9VsDp0&X-Amz-Signature=59ea8455f1723a739df306f36426665075c722011014571a4d7251cb67191f0c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2OSMI2%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZqaMyRz0ucsaAJ7O5%2FhKQPpUelU%2BJ4MnFs7brwGO%2BLAiBRhUhkh1%2FaL42tjA0RiQJxYGsrol0N%2B4J4XMZKV1D4Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMStFP9IhYL9rtrzR2KtwDiam2%2FMfZkpO1ixWa5lgotEzIYyzLW3Wq%2FfYujevAnmuNZ2Khc2dvgk3NgfAbAkCQ1eAspfmhtp9vCojnT%2BDjgJ7%2FQQi0n5WmSQMseBHFh0xmTbaIyynTcG0yhgWi5SC%2BBYSCH83FjQsxs8nVKbkuzxZkppgw0HvXan7LdkdiaLHo8J%2BWIFI25mlHb45T6mn1Ab3JanxwtGU5ZMuQicGBOlXOORQKZmQfAZ29jwqvKP%2B%2Bg1ACPGHa%2Fgiq%2FDFvhzKfL3eKr59ITudQG2l8bFfUjblpk5GMEFlFCykTvEEB2dmqC0ozbsgV39vjBTz0LpPKxfTZEVFlKEUzNnkiuzP%2Bc9ryGdCIhf0L9TKxs%2BaG5GRkBhp8fZqnrnAprU05nwPU0VU6URnX%2By2H1WdK4H1oNb%2B8%2FK%2Fr3aSarPwX%2BXihErC0ARkH6%2B1DEBrWMgT35bUVWSHiVDONZtEEjMVhOWEqpyC%2BdM6eLQ7BwiSHzGZaw%2FQgnxgMiHT%2Bbw9L3KiT5W1FssPDPvOSkl2TNy%2B6xUKJlu2fdMYzTglJreHV87g4UKmqqMdly0TA%2F35kxJrUz69vXGtxBCSgkAFIw%2BMTRES%2BcEuRvvJABYtoE1eyBpVM80TO0uN4ghIA%2B14ohO8wh8CZvwY6pgGhiX65da%2FhQkVqQIVvKkeXnIzlAXyN4r%2FRss6ATm3WAfXXNJf1LwCyDWyOWXGplB7ia4%2Fgkem4gGx467WEbzcgmCBemdDIcXeBm0fVgmCNh4yZ5rzWjrJ8NgUkAsgM5aWAtqiO%2BsPG3ygJeQScPBEjThv6wRnBmhNGZ%2FmLH8b37Lc%2Fb9YoYz9Z434DqqNb0jbyl3LhQTTMj88KJLFUKzWwok9VsDp0&X-Amz-Signature=d0304e35da57ff32555bb2f74cfc7189c2bd6d4ded6f1f18c04b9a5a2277e36f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2OSMI2%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZqaMyRz0ucsaAJ7O5%2FhKQPpUelU%2BJ4MnFs7brwGO%2BLAiBRhUhkh1%2FaL42tjA0RiQJxYGsrol0N%2B4J4XMZKV1D4Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMStFP9IhYL9rtrzR2KtwDiam2%2FMfZkpO1ixWa5lgotEzIYyzLW3Wq%2FfYujevAnmuNZ2Khc2dvgk3NgfAbAkCQ1eAspfmhtp9vCojnT%2BDjgJ7%2FQQi0n5WmSQMseBHFh0xmTbaIyynTcG0yhgWi5SC%2BBYSCH83FjQsxs8nVKbkuzxZkppgw0HvXan7LdkdiaLHo8J%2BWIFI25mlHb45T6mn1Ab3JanxwtGU5ZMuQicGBOlXOORQKZmQfAZ29jwqvKP%2B%2Bg1ACPGHa%2Fgiq%2FDFvhzKfL3eKr59ITudQG2l8bFfUjblpk5GMEFlFCykTvEEB2dmqC0ozbsgV39vjBTz0LpPKxfTZEVFlKEUzNnkiuzP%2Bc9ryGdCIhf0L9TKxs%2BaG5GRkBhp8fZqnrnAprU05nwPU0VU6URnX%2By2H1WdK4H1oNb%2B8%2FK%2Fr3aSarPwX%2BXihErC0ARkH6%2B1DEBrWMgT35bUVWSHiVDONZtEEjMVhOWEqpyC%2BdM6eLQ7BwiSHzGZaw%2FQgnxgMiHT%2Bbw9L3KiT5W1FssPDPvOSkl2TNy%2B6xUKJlu2fdMYzTglJreHV87g4UKmqqMdly0TA%2F35kxJrUz69vXGtxBCSgkAFIw%2BMTRES%2BcEuRvvJABYtoE1eyBpVM80TO0uN4ghIA%2B14ohO8wh8CZvwY6pgGhiX65da%2FhQkVqQIVvKkeXnIzlAXyN4r%2FRss6ATm3WAfXXNJf1LwCyDWyOWXGplB7ia4%2Fgkem4gGx467WEbzcgmCBemdDIcXeBm0fVgmCNh4yZ5rzWjrJ8NgUkAsgM5aWAtqiO%2BsPG3ygJeQScPBEjThv6wRnBmhNGZ%2FmLH8b37Lc%2Fb9YoYz9Z434DqqNb0jbyl3LhQTTMj88KJLFUKzWwok9VsDp0&X-Amz-Signature=a22bc3db521b1693ea82ae2c5405eb2b4347a7dacedf5b8fb9dc7a2d166ea9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2OSMI2%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZqaMyRz0ucsaAJ7O5%2FhKQPpUelU%2BJ4MnFs7brwGO%2BLAiBRhUhkh1%2FaL42tjA0RiQJxYGsrol0N%2B4J4XMZKV1D4Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMStFP9IhYL9rtrzR2KtwDiam2%2FMfZkpO1ixWa5lgotEzIYyzLW3Wq%2FfYujevAnmuNZ2Khc2dvgk3NgfAbAkCQ1eAspfmhtp9vCojnT%2BDjgJ7%2FQQi0n5WmSQMseBHFh0xmTbaIyynTcG0yhgWi5SC%2BBYSCH83FjQsxs8nVKbkuzxZkppgw0HvXan7LdkdiaLHo8J%2BWIFI25mlHb45T6mn1Ab3JanxwtGU5ZMuQicGBOlXOORQKZmQfAZ29jwqvKP%2B%2Bg1ACPGHa%2Fgiq%2FDFvhzKfL3eKr59ITudQG2l8bFfUjblpk5GMEFlFCykTvEEB2dmqC0ozbsgV39vjBTz0LpPKxfTZEVFlKEUzNnkiuzP%2Bc9ryGdCIhf0L9TKxs%2BaG5GRkBhp8fZqnrnAprU05nwPU0VU6URnX%2By2H1WdK4H1oNb%2B8%2FK%2Fr3aSarPwX%2BXihErC0ARkH6%2B1DEBrWMgT35bUVWSHiVDONZtEEjMVhOWEqpyC%2BdM6eLQ7BwiSHzGZaw%2FQgnxgMiHT%2Bbw9L3KiT5W1FssPDPvOSkl2TNy%2B6xUKJlu2fdMYzTglJreHV87g4UKmqqMdly0TA%2F35kxJrUz69vXGtxBCSgkAFIw%2BMTRES%2BcEuRvvJABYtoE1eyBpVM80TO0uN4ghIA%2B14ohO8wh8CZvwY6pgGhiX65da%2FhQkVqQIVvKkeXnIzlAXyN4r%2FRss6ATm3WAfXXNJf1LwCyDWyOWXGplB7ia4%2Fgkem4gGx467WEbzcgmCBemdDIcXeBm0fVgmCNh4yZ5rzWjrJ8NgUkAsgM5aWAtqiO%2BsPG3ygJeQScPBEjThv6wRnBmhNGZ%2FmLH8b37Lc%2Fb9YoYz9Z434DqqNb0jbyl3LhQTTMj88KJLFUKzWwok9VsDp0&X-Amz-Signature=102cc4e25c7c3cab032aa9b3405a62c1b883fa341e51a665e3733d97b4969f19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2OSMI2%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZqaMyRz0ucsaAJ7O5%2FhKQPpUelU%2BJ4MnFs7brwGO%2BLAiBRhUhkh1%2FaL42tjA0RiQJxYGsrol0N%2B4J4XMZKV1D4Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMStFP9IhYL9rtrzR2KtwDiam2%2FMfZkpO1ixWa5lgotEzIYyzLW3Wq%2FfYujevAnmuNZ2Khc2dvgk3NgfAbAkCQ1eAspfmhtp9vCojnT%2BDjgJ7%2FQQi0n5WmSQMseBHFh0xmTbaIyynTcG0yhgWi5SC%2BBYSCH83FjQsxs8nVKbkuzxZkppgw0HvXan7LdkdiaLHo8J%2BWIFI25mlHb45T6mn1Ab3JanxwtGU5ZMuQicGBOlXOORQKZmQfAZ29jwqvKP%2B%2Bg1ACPGHa%2Fgiq%2FDFvhzKfL3eKr59ITudQG2l8bFfUjblpk5GMEFlFCykTvEEB2dmqC0ozbsgV39vjBTz0LpPKxfTZEVFlKEUzNnkiuzP%2Bc9ryGdCIhf0L9TKxs%2BaG5GRkBhp8fZqnrnAprU05nwPU0VU6URnX%2By2H1WdK4H1oNb%2B8%2FK%2Fr3aSarPwX%2BXihErC0ARkH6%2B1DEBrWMgT35bUVWSHiVDONZtEEjMVhOWEqpyC%2BdM6eLQ7BwiSHzGZaw%2FQgnxgMiHT%2Bbw9L3KiT5W1FssPDPvOSkl2TNy%2B6xUKJlu2fdMYzTglJreHV87g4UKmqqMdly0TA%2F35kxJrUz69vXGtxBCSgkAFIw%2BMTRES%2BcEuRvvJABYtoE1eyBpVM80TO0uN4ghIA%2B14ohO8wh8CZvwY6pgGhiX65da%2FhQkVqQIVvKkeXnIzlAXyN4r%2FRss6ATm3WAfXXNJf1LwCyDWyOWXGplB7ia4%2Fgkem4gGx467WEbzcgmCBemdDIcXeBm0fVgmCNh4yZ5rzWjrJ8NgUkAsgM5aWAtqiO%2BsPG3ygJeQScPBEjThv6wRnBmhNGZ%2FmLH8b37Lc%2Fb9YoYz9Z434DqqNb0jbyl3LhQTTMj88KJLFUKzWwok9VsDp0&X-Amz-Signature=43ad3862eb48c3c9dac13450bf992ca67b0dcfe7e66a78a2c099450f6c81394a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2OSMI2%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZqaMyRz0ucsaAJ7O5%2FhKQPpUelU%2BJ4MnFs7brwGO%2BLAiBRhUhkh1%2FaL42tjA0RiQJxYGsrol0N%2B4J4XMZKV1D4Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMStFP9IhYL9rtrzR2KtwDiam2%2FMfZkpO1ixWa5lgotEzIYyzLW3Wq%2FfYujevAnmuNZ2Khc2dvgk3NgfAbAkCQ1eAspfmhtp9vCojnT%2BDjgJ7%2FQQi0n5WmSQMseBHFh0xmTbaIyynTcG0yhgWi5SC%2BBYSCH83FjQsxs8nVKbkuzxZkppgw0HvXan7LdkdiaLHo8J%2BWIFI25mlHb45T6mn1Ab3JanxwtGU5ZMuQicGBOlXOORQKZmQfAZ29jwqvKP%2B%2Bg1ACPGHa%2Fgiq%2FDFvhzKfL3eKr59ITudQG2l8bFfUjblpk5GMEFlFCykTvEEB2dmqC0ozbsgV39vjBTz0LpPKxfTZEVFlKEUzNnkiuzP%2Bc9ryGdCIhf0L9TKxs%2BaG5GRkBhp8fZqnrnAprU05nwPU0VU6URnX%2By2H1WdK4H1oNb%2B8%2FK%2Fr3aSarPwX%2BXihErC0ARkH6%2B1DEBrWMgT35bUVWSHiVDONZtEEjMVhOWEqpyC%2BdM6eLQ7BwiSHzGZaw%2FQgnxgMiHT%2Bbw9L3KiT5W1FssPDPvOSkl2TNy%2B6xUKJlu2fdMYzTglJreHV87g4UKmqqMdly0TA%2F35kxJrUz69vXGtxBCSgkAFIw%2BMTRES%2BcEuRvvJABYtoE1eyBpVM80TO0uN4ghIA%2B14ohO8wh8CZvwY6pgGhiX65da%2FhQkVqQIVvKkeXnIzlAXyN4r%2FRss6ATm3WAfXXNJf1LwCyDWyOWXGplB7ia4%2Fgkem4gGx467WEbzcgmCBemdDIcXeBm0fVgmCNh4yZ5rzWjrJ8NgUkAsgM5aWAtqiO%2BsPG3ygJeQScPBEjThv6wRnBmhNGZ%2FmLH8b37Lc%2Fb9YoYz9Z434DqqNb0jbyl3LhQTTMj88KJLFUKzWwok9VsDp0&X-Amz-Signature=c440c4c1353d4dbd5553027a98736c8f92594deedd88cc5db8b03b5aba7f5dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
