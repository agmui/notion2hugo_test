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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYHK6I2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCID6IyXzU1WH1mx%2Bp2bo9GcwULy5cEiRQiN%2F8wjJqGPHsAiEA1jmYex4HDpv6OFw%2Ft%2B0LWiEhYmm%2BMsBzD4Pcn6T%2FtFEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdaI5US7%2BqcZ6r5SrcA9YbNhxLZYHprJAx%2F3OX5UV0Xl%2FnMf%2BDv3wdkrKCHOqnGIUbzpnI8%2FB9GIVs3CVPn%2B5Otl6OtdbczvIHj5liY5FBF1cOvjs7MGSSUkTlc5OdWMYyj5pT4Zohi0J%2FC%2FbpTgXyWuqIfi%2FTaQhrVDw6rXW3G9udZnaRacETlfIM0S%2FcaS5yc%2FP1WPSMAtOtRFXvrR9vTkmTkRIxz7q20J87bKgVX29fRRDyiZVzJ9qBt5y7v6kdf7SVmuBgMpdGdG2vibpJvq6ZbgxiHvrLa0Utpe7SZfrVqqpouxsCbx90xg3HZocdT19OnQfEeZaHK2%2BwAW%2BEDQOYeKk3lYTbTXzvfCyIh4o7Lr9x9iWAGVmTnc9ELaALBk93j3NSos4sLIEj89U24RJ3ONQYvyyiDLTNXbgav%2Bg0dXzWajyAu4XkSOjItPppDp%2BKdisizUIyJRNUzjUqfHEIRICcEIOQDC5UOpopBrWU55QcjmW7Pmvw6vVBInw7dg0u%2B%2BdEKgNaX6S6Aj4Ic6mdGNegcXX4y0tqooaHgTniA%2BJxp6xiXuY%2FQDGrwnmXsxTW%2Fw9OOc2z%2FALcVJ%2B9iooji3KHlMFJ7zmkiwQdMjGCRWsfAeogfLaDnCgjCCl0isONuNHv7pE5MNXutsEGOqUB4jiEsTa39E8EqDQPvYNwrdjFzGO9JgBCyR2E5VlR6EaaSMh5FuLqZPdjXgwu5HwfTwHh83j%2FAnHq46PhkSvHgGfmBKlq%2BMfLLYT%2FMvKBDTdmWZR0iubcQ6Qf4uj7tBfMlT%2F5biOdBmQm72F0RjATdGn9yvFNBVxij0%2Bc46qFtCenGejgmCAdUoEeeeL46xNauAOkMI%2FO0fCQfJxXqdgAP6pdwKKg&X-Amz-Signature=09f38c782e843b42dceaccc25960677e8b1b6222486ce4bf22ddb4a9afbdf6f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYHK6I2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCID6IyXzU1WH1mx%2Bp2bo9GcwULy5cEiRQiN%2F8wjJqGPHsAiEA1jmYex4HDpv6OFw%2Ft%2B0LWiEhYmm%2BMsBzD4Pcn6T%2FtFEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdaI5US7%2BqcZ6r5SrcA9YbNhxLZYHprJAx%2F3OX5UV0Xl%2FnMf%2BDv3wdkrKCHOqnGIUbzpnI8%2FB9GIVs3CVPn%2B5Otl6OtdbczvIHj5liY5FBF1cOvjs7MGSSUkTlc5OdWMYyj5pT4Zohi0J%2FC%2FbpTgXyWuqIfi%2FTaQhrVDw6rXW3G9udZnaRacETlfIM0S%2FcaS5yc%2FP1WPSMAtOtRFXvrR9vTkmTkRIxz7q20J87bKgVX29fRRDyiZVzJ9qBt5y7v6kdf7SVmuBgMpdGdG2vibpJvq6ZbgxiHvrLa0Utpe7SZfrVqqpouxsCbx90xg3HZocdT19OnQfEeZaHK2%2BwAW%2BEDQOYeKk3lYTbTXzvfCyIh4o7Lr9x9iWAGVmTnc9ELaALBk93j3NSos4sLIEj89U24RJ3ONQYvyyiDLTNXbgav%2Bg0dXzWajyAu4XkSOjItPppDp%2BKdisizUIyJRNUzjUqfHEIRICcEIOQDC5UOpopBrWU55QcjmW7Pmvw6vVBInw7dg0u%2B%2BdEKgNaX6S6Aj4Ic6mdGNegcXX4y0tqooaHgTniA%2BJxp6xiXuY%2FQDGrwnmXsxTW%2Fw9OOc2z%2FALcVJ%2B9iooji3KHlMFJ7zmkiwQdMjGCRWsfAeogfLaDnCgjCCl0isONuNHv7pE5MNXutsEGOqUB4jiEsTa39E8EqDQPvYNwrdjFzGO9JgBCyR2E5VlR6EaaSMh5FuLqZPdjXgwu5HwfTwHh83j%2FAnHq46PhkSvHgGfmBKlq%2BMfLLYT%2FMvKBDTdmWZR0iubcQ6Qf4uj7tBfMlT%2F5biOdBmQm72F0RjATdGn9yvFNBVxij0%2Bc46qFtCenGejgmCAdUoEeeeL46xNauAOkMI%2FO0fCQfJxXqdgAP6pdwKKg&X-Amz-Signature=58f5aa00669429f17ed0f6375409fe1bae40622c4f7ac2553fbb56eb2a38a2d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYHK6I2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCID6IyXzU1WH1mx%2Bp2bo9GcwULy5cEiRQiN%2F8wjJqGPHsAiEA1jmYex4HDpv6OFw%2Ft%2B0LWiEhYmm%2BMsBzD4Pcn6T%2FtFEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdaI5US7%2BqcZ6r5SrcA9YbNhxLZYHprJAx%2F3OX5UV0Xl%2FnMf%2BDv3wdkrKCHOqnGIUbzpnI8%2FB9GIVs3CVPn%2B5Otl6OtdbczvIHj5liY5FBF1cOvjs7MGSSUkTlc5OdWMYyj5pT4Zohi0J%2FC%2FbpTgXyWuqIfi%2FTaQhrVDw6rXW3G9udZnaRacETlfIM0S%2FcaS5yc%2FP1WPSMAtOtRFXvrR9vTkmTkRIxz7q20J87bKgVX29fRRDyiZVzJ9qBt5y7v6kdf7SVmuBgMpdGdG2vibpJvq6ZbgxiHvrLa0Utpe7SZfrVqqpouxsCbx90xg3HZocdT19OnQfEeZaHK2%2BwAW%2BEDQOYeKk3lYTbTXzvfCyIh4o7Lr9x9iWAGVmTnc9ELaALBk93j3NSos4sLIEj89U24RJ3ONQYvyyiDLTNXbgav%2Bg0dXzWajyAu4XkSOjItPppDp%2BKdisizUIyJRNUzjUqfHEIRICcEIOQDC5UOpopBrWU55QcjmW7Pmvw6vVBInw7dg0u%2B%2BdEKgNaX6S6Aj4Ic6mdGNegcXX4y0tqooaHgTniA%2BJxp6xiXuY%2FQDGrwnmXsxTW%2Fw9OOc2z%2FALcVJ%2B9iooji3KHlMFJ7zmkiwQdMjGCRWsfAeogfLaDnCgjCCl0isONuNHv7pE5MNXutsEGOqUB4jiEsTa39E8EqDQPvYNwrdjFzGO9JgBCyR2E5VlR6EaaSMh5FuLqZPdjXgwu5HwfTwHh83j%2FAnHq46PhkSvHgGfmBKlq%2BMfLLYT%2FMvKBDTdmWZR0iubcQ6Qf4uj7tBfMlT%2F5biOdBmQm72F0RjATdGn9yvFNBVxij0%2Bc46qFtCenGejgmCAdUoEeeeL46xNauAOkMI%2FO0fCQfJxXqdgAP6pdwKKg&X-Amz-Signature=396a42d681a1dc1d295bd301d5a48085db2734ddb88f3fa4cde94264859fe8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYHK6I2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCID6IyXzU1WH1mx%2Bp2bo9GcwULy5cEiRQiN%2F8wjJqGPHsAiEA1jmYex4HDpv6OFw%2Ft%2B0LWiEhYmm%2BMsBzD4Pcn6T%2FtFEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdaI5US7%2BqcZ6r5SrcA9YbNhxLZYHprJAx%2F3OX5UV0Xl%2FnMf%2BDv3wdkrKCHOqnGIUbzpnI8%2FB9GIVs3CVPn%2B5Otl6OtdbczvIHj5liY5FBF1cOvjs7MGSSUkTlc5OdWMYyj5pT4Zohi0J%2FC%2FbpTgXyWuqIfi%2FTaQhrVDw6rXW3G9udZnaRacETlfIM0S%2FcaS5yc%2FP1WPSMAtOtRFXvrR9vTkmTkRIxz7q20J87bKgVX29fRRDyiZVzJ9qBt5y7v6kdf7SVmuBgMpdGdG2vibpJvq6ZbgxiHvrLa0Utpe7SZfrVqqpouxsCbx90xg3HZocdT19OnQfEeZaHK2%2BwAW%2BEDQOYeKk3lYTbTXzvfCyIh4o7Lr9x9iWAGVmTnc9ELaALBk93j3NSos4sLIEj89U24RJ3ONQYvyyiDLTNXbgav%2Bg0dXzWajyAu4XkSOjItPppDp%2BKdisizUIyJRNUzjUqfHEIRICcEIOQDC5UOpopBrWU55QcjmW7Pmvw6vVBInw7dg0u%2B%2BdEKgNaX6S6Aj4Ic6mdGNegcXX4y0tqooaHgTniA%2BJxp6xiXuY%2FQDGrwnmXsxTW%2Fw9OOc2z%2FALcVJ%2B9iooji3KHlMFJ7zmkiwQdMjGCRWsfAeogfLaDnCgjCCl0isONuNHv7pE5MNXutsEGOqUB4jiEsTa39E8EqDQPvYNwrdjFzGO9JgBCyR2E5VlR6EaaSMh5FuLqZPdjXgwu5HwfTwHh83j%2FAnHq46PhkSvHgGfmBKlq%2BMfLLYT%2FMvKBDTdmWZR0iubcQ6Qf4uj7tBfMlT%2F5biOdBmQm72F0RjATdGn9yvFNBVxij0%2Bc46qFtCenGejgmCAdUoEeeeL46xNauAOkMI%2FO0fCQfJxXqdgAP6pdwKKg&X-Amz-Signature=518c0ec48c716cdc803023c81c1f57f3cc1f9a31c39d047ac199589a3fb8f645&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYHK6I2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCID6IyXzU1WH1mx%2Bp2bo9GcwULy5cEiRQiN%2F8wjJqGPHsAiEA1jmYex4HDpv6OFw%2Ft%2B0LWiEhYmm%2BMsBzD4Pcn6T%2FtFEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdaI5US7%2BqcZ6r5SrcA9YbNhxLZYHprJAx%2F3OX5UV0Xl%2FnMf%2BDv3wdkrKCHOqnGIUbzpnI8%2FB9GIVs3CVPn%2B5Otl6OtdbczvIHj5liY5FBF1cOvjs7MGSSUkTlc5OdWMYyj5pT4Zohi0J%2FC%2FbpTgXyWuqIfi%2FTaQhrVDw6rXW3G9udZnaRacETlfIM0S%2FcaS5yc%2FP1WPSMAtOtRFXvrR9vTkmTkRIxz7q20J87bKgVX29fRRDyiZVzJ9qBt5y7v6kdf7SVmuBgMpdGdG2vibpJvq6ZbgxiHvrLa0Utpe7SZfrVqqpouxsCbx90xg3HZocdT19OnQfEeZaHK2%2BwAW%2BEDQOYeKk3lYTbTXzvfCyIh4o7Lr9x9iWAGVmTnc9ELaALBk93j3NSos4sLIEj89U24RJ3ONQYvyyiDLTNXbgav%2Bg0dXzWajyAu4XkSOjItPppDp%2BKdisizUIyJRNUzjUqfHEIRICcEIOQDC5UOpopBrWU55QcjmW7Pmvw6vVBInw7dg0u%2B%2BdEKgNaX6S6Aj4Ic6mdGNegcXX4y0tqooaHgTniA%2BJxp6xiXuY%2FQDGrwnmXsxTW%2Fw9OOc2z%2FALcVJ%2B9iooji3KHlMFJ7zmkiwQdMjGCRWsfAeogfLaDnCgjCCl0isONuNHv7pE5MNXutsEGOqUB4jiEsTa39E8EqDQPvYNwrdjFzGO9JgBCyR2E5VlR6EaaSMh5FuLqZPdjXgwu5HwfTwHh83j%2FAnHq46PhkSvHgGfmBKlq%2BMfLLYT%2FMvKBDTdmWZR0iubcQ6Qf4uj7tBfMlT%2F5biOdBmQm72F0RjATdGn9yvFNBVxij0%2Bc46qFtCenGejgmCAdUoEeeeL46xNauAOkMI%2FO0fCQfJxXqdgAP6pdwKKg&X-Amz-Signature=7b55b5452bdd0b134b2660f95f7afab27f335f90d737106c57050028779f0652&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYHK6I2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCID6IyXzU1WH1mx%2Bp2bo9GcwULy5cEiRQiN%2F8wjJqGPHsAiEA1jmYex4HDpv6OFw%2Ft%2B0LWiEhYmm%2BMsBzD4Pcn6T%2FtFEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdaI5US7%2BqcZ6r5SrcA9YbNhxLZYHprJAx%2F3OX5UV0Xl%2FnMf%2BDv3wdkrKCHOqnGIUbzpnI8%2FB9GIVs3CVPn%2B5Otl6OtdbczvIHj5liY5FBF1cOvjs7MGSSUkTlc5OdWMYyj5pT4Zohi0J%2FC%2FbpTgXyWuqIfi%2FTaQhrVDw6rXW3G9udZnaRacETlfIM0S%2FcaS5yc%2FP1WPSMAtOtRFXvrR9vTkmTkRIxz7q20J87bKgVX29fRRDyiZVzJ9qBt5y7v6kdf7SVmuBgMpdGdG2vibpJvq6ZbgxiHvrLa0Utpe7SZfrVqqpouxsCbx90xg3HZocdT19OnQfEeZaHK2%2BwAW%2BEDQOYeKk3lYTbTXzvfCyIh4o7Lr9x9iWAGVmTnc9ELaALBk93j3NSos4sLIEj89U24RJ3ONQYvyyiDLTNXbgav%2Bg0dXzWajyAu4XkSOjItPppDp%2BKdisizUIyJRNUzjUqfHEIRICcEIOQDC5UOpopBrWU55QcjmW7Pmvw6vVBInw7dg0u%2B%2BdEKgNaX6S6Aj4Ic6mdGNegcXX4y0tqooaHgTniA%2BJxp6xiXuY%2FQDGrwnmXsxTW%2Fw9OOc2z%2FALcVJ%2B9iooji3KHlMFJ7zmkiwQdMjGCRWsfAeogfLaDnCgjCCl0isONuNHv7pE5MNXutsEGOqUB4jiEsTa39E8EqDQPvYNwrdjFzGO9JgBCyR2E5VlR6EaaSMh5FuLqZPdjXgwu5HwfTwHh83j%2FAnHq46PhkSvHgGfmBKlq%2BMfLLYT%2FMvKBDTdmWZR0iubcQ6Qf4uj7tBfMlT%2F5biOdBmQm72F0RjATdGn9yvFNBVxij0%2Bc46qFtCenGejgmCAdUoEeeeL46xNauAOkMI%2FO0fCQfJxXqdgAP6pdwKKg&X-Amz-Signature=859495a8102ccbfe9d0bb5d63499802eeb9f7c8ed78f6026d946c16a05b77556&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYHK6I2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCID6IyXzU1WH1mx%2Bp2bo9GcwULy5cEiRQiN%2F8wjJqGPHsAiEA1jmYex4HDpv6OFw%2Ft%2B0LWiEhYmm%2BMsBzD4Pcn6T%2FtFEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdaI5US7%2BqcZ6r5SrcA9YbNhxLZYHprJAx%2F3OX5UV0Xl%2FnMf%2BDv3wdkrKCHOqnGIUbzpnI8%2FB9GIVs3CVPn%2B5Otl6OtdbczvIHj5liY5FBF1cOvjs7MGSSUkTlc5OdWMYyj5pT4Zohi0J%2FC%2FbpTgXyWuqIfi%2FTaQhrVDw6rXW3G9udZnaRacETlfIM0S%2FcaS5yc%2FP1WPSMAtOtRFXvrR9vTkmTkRIxz7q20J87bKgVX29fRRDyiZVzJ9qBt5y7v6kdf7SVmuBgMpdGdG2vibpJvq6ZbgxiHvrLa0Utpe7SZfrVqqpouxsCbx90xg3HZocdT19OnQfEeZaHK2%2BwAW%2BEDQOYeKk3lYTbTXzvfCyIh4o7Lr9x9iWAGVmTnc9ELaALBk93j3NSos4sLIEj89U24RJ3ONQYvyyiDLTNXbgav%2Bg0dXzWajyAu4XkSOjItPppDp%2BKdisizUIyJRNUzjUqfHEIRICcEIOQDC5UOpopBrWU55QcjmW7Pmvw6vVBInw7dg0u%2B%2BdEKgNaX6S6Aj4Ic6mdGNegcXX4y0tqooaHgTniA%2BJxp6xiXuY%2FQDGrwnmXsxTW%2Fw9OOc2z%2FALcVJ%2B9iooji3KHlMFJ7zmkiwQdMjGCRWsfAeogfLaDnCgjCCl0isONuNHv7pE5MNXutsEGOqUB4jiEsTa39E8EqDQPvYNwrdjFzGO9JgBCyR2E5VlR6EaaSMh5FuLqZPdjXgwu5HwfTwHh83j%2FAnHq46PhkSvHgGfmBKlq%2BMfLLYT%2FMvKBDTdmWZR0iubcQ6Qf4uj7tBfMlT%2F5biOdBmQm72F0RjATdGn9yvFNBVxij0%2Bc46qFtCenGejgmCAdUoEeeeL46xNauAOkMI%2FO0fCQfJxXqdgAP6pdwKKg&X-Amz-Signature=0de31ec1bb01cae5462cfdb1b489c629d5f8d573b75076a677a91380fa902675&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYHK6I2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCID6IyXzU1WH1mx%2Bp2bo9GcwULy5cEiRQiN%2F8wjJqGPHsAiEA1jmYex4HDpv6OFw%2Ft%2B0LWiEhYmm%2BMsBzD4Pcn6T%2FtFEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVdaI5US7%2BqcZ6r5SrcA9YbNhxLZYHprJAx%2F3OX5UV0Xl%2FnMf%2BDv3wdkrKCHOqnGIUbzpnI8%2FB9GIVs3CVPn%2B5Otl6OtdbczvIHj5liY5FBF1cOvjs7MGSSUkTlc5OdWMYyj5pT4Zohi0J%2FC%2FbpTgXyWuqIfi%2FTaQhrVDw6rXW3G9udZnaRacETlfIM0S%2FcaS5yc%2FP1WPSMAtOtRFXvrR9vTkmTkRIxz7q20J87bKgVX29fRRDyiZVzJ9qBt5y7v6kdf7SVmuBgMpdGdG2vibpJvq6ZbgxiHvrLa0Utpe7SZfrVqqpouxsCbx90xg3HZocdT19OnQfEeZaHK2%2BwAW%2BEDQOYeKk3lYTbTXzvfCyIh4o7Lr9x9iWAGVmTnc9ELaALBk93j3NSos4sLIEj89U24RJ3ONQYvyyiDLTNXbgav%2Bg0dXzWajyAu4XkSOjItPppDp%2BKdisizUIyJRNUzjUqfHEIRICcEIOQDC5UOpopBrWU55QcjmW7Pmvw6vVBInw7dg0u%2B%2BdEKgNaX6S6Aj4Ic6mdGNegcXX4y0tqooaHgTniA%2BJxp6xiXuY%2FQDGrwnmXsxTW%2Fw9OOc2z%2FALcVJ%2B9iooji3KHlMFJ7zmkiwQdMjGCRWsfAeogfLaDnCgjCCl0isONuNHv7pE5MNXutsEGOqUB4jiEsTa39E8EqDQPvYNwrdjFzGO9JgBCyR2E5VlR6EaaSMh5FuLqZPdjXgwu5HwfTwHh83j%2FAnHq46PhkSvHgGfmBKlq%2BMfLLYT%2FMvKBDTdmWZR0iubcQ6Qf4uj7tBfMlT%2F5biOdBmQm72F0RjATdGn9yvFNBVxij0%2Bc46qFtCenGejgmCAdUoEeeeL46xNauAOkMI%2FO0fCQfJxXqdgAP6pdwKKg&X-Amz-Signature=5d02d689c0f4c385774b5a67d55e0c369a5352dbd5bea683769d1f7c00823215&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
