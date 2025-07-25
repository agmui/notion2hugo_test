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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJFTWDN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQChrrcXAlQfhRJGgboAA83GheV2LEikdS2b%2B81xpxgt7QIgQTulkp4ghz3Q5CqJ2sBE7dnATsRWbR5Wx6p4hFZ7ke8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETXeYKRbqkvjLshBSrcAwqxcvoWbS9F3fPdl9U3nFBKRwHhyWOJoZyQ%2BhBnxrtGcO%2FFM5raWSEcAMPbTcsnGhHRdzh6pwmtl3qH8AfNvdv3Jl3vYK%2F9X7Oqd1P4mfr9HdUAhD%2BBHjmtFdJcZh%2FFTG1%2B6IqoamfyAcsTNIIA1aWK7Sf9uEpzPiqgh9AgiXKDiAJ7OUZ%2F%2FrzA3keyleaGxx9XYgYcdqb80MzLuhlAzaTT0UWr46VACQ2Manv1os3hzgoZOoVLWfG43dEUdrR96jFmQ86PU3IG4jsxatGm18ORXXs5EXPnhEOWPmlfGhNtDPgqnrlZlih1AapdrRx9bWCj1drKUIbDrIIFro13Yw3ip5MJKyqSIFODBp3gPek4kKZkExry8eYJ9tYCZWanQnlb95qiTAxb1%2BV2WA3ljVMB79gEZGxlZD%2BYz0zlNjJfxCbo9NntqkupZHL7Jd2hVW%2Fb2oDGAZ5%2FqPw9DmQaiy3Wj5YGKCpzDxD4WlrEd6B6m0x3QVGWiYYwxzIyOFyNngMO2BnAB5u4k8dlFz1%2Ba0xC0VhWwiCK1xM%2Fb%2FRIwMypnKgTg5dSdj9QdHAzYFoiz6qHV3qMGRDVl3EsgUy8GqWpeZuaxBRwYcnEJN%2BjMRxEULmKna0YXazpea75MPzTi8QGOqUBmr%2F%2FQJaZSGskjrX8hysLgsW0HgdiKcrjf%2Fp5300%2BONFdqWT1AGBwA8JYfB2D8bvKyaNUNBkCmjVuN9GqPnEu%2BOk9vmv7mJcPpMzPC3rNgbkaVWShsvE7du6Vmuo8HkcTZ4n4bwVOgHGf3ziR62TQVD0jKg9jJyTzPGfYjp0eTFLh6kdZBnsBS8XD0Tv2%2FaX5i4GPO2xARmL8tTvkGHKmOMoV7GdV&X-Amz-Signature=b06c60ca831d333b1132738ceef2a7c96f2bf43755845aed0bbe1be7cba08195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJFTWDN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQChrrcXAlQfhRJGgboAA83GheV2LEikdS2b%2B81xpxgt7QIgQTulkp4ghz3Q5CqJ2sBE7dnATsRWbR5Wx6p4hFZ7ke8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETXeYKRbqkvjLshBSrcAwqxcvoWbS9F3fPdl9U3nFBKRwHhyWOJoZyQ%2BhBnxrtGcO%2FFM5raWSEcAMPbTcsnGhHRdzh6pwmtl3qH8AfNvdv3Jl3vYK%2F9X7Oqd1P4mfr9HdUAhD%2BBHjmtFdJcZh%2FFTG1%2B6IqoamfyAcsTNIIA1aWK7Sf9uEpzPiqgh9AgiXKDiAJ7OUZ%2F%2FrzA3keyleaGxx9XYgYcdqb80MzLuhlAzaTT0UWr46VACQ2Manv1os3hzgoZOoVLWfG43dEUdrR96jFmQ86PU3IG4jsxatGm18ORXXs5EXPnhEOWPmlfGhNtDPgqnrlZlih1AapdrRx9bWCj1drKUIbDrIIFro13Yw3ip5MJKyqSIFODBp3gPek4kKZkExry8eYJ9tYCZWanQnlb95qiTAxb1%2BV2WA3ljVMB79gEZGxlZD%2BYz0zlNjJfxCbo9NntqkupZHL7Jd2hVW%2Fb2oDGAZ5%2FqPw9DmQaiy3Wj5YGKCpzDxD4WlrEd6B6m0x3QVGWiYYwxzIyOFyNngMO2BnAB5u4k8dlFz1%2Ba0xC0VhWwiCK1xM%2Fb%2FRIwMypnKgTg5dSdj9QdHAzYFoiz6qHV3qMGRDVl3EsgUy8GqWpeZuaxBRwYcnEJN%2BjMRxEULmKna0YXazpea75MPzTi8QGOqUBmr%2F%2FQJaZSGskjrX8hysLgsW0HgdiKcrjf%2Fp5300%2BONFdqWT1AGBwA8JYfB2D8bvKyaNUNBkCmjVuN9GqPnEu%2BOk9vmv7mJcPpMzPC3rNgbkaVWShsvE7du6Vmuo8HkcTZ4n4bwVOgHGf3ziR62TQVD0jKg9jJyTzPGfYjp0eTFLh6kdZBnsBS8XD0Tv2%2FaX5i4GPO2xARmL8tTvkGHKmOMoV7GdV&X-Amz-Signature=a4d25e929708e053edf6c5aa8d69ea88b8d8bd84f376acbfd607140eb00bc37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJFTWDN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQChrrcXAlQfhRJGgboAA83GheV2LEikdS2b%2B81xpxgt7QIgQTulkp4ghz3Q5CqJ2sBE7dnATsRWbR5Wx6p4hFZ7ke8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETXeYKRbqkvjLshBSrcAwqxcvoWbS9F3fPdl9U3nFBKRwHhyWOJoZyQ%2BhBnxrtGcO%2FFM5raWSEcAMPbTcsnGhHRdzh6pwmtl3qH8AfNvdv3Jl3vYK%2F9X7Oqd1P4mfr9HdUAhD%2BBHjmtFdJcZh%2FFTG1%2B6IqoamfyAcsTNIIA1aWK7Sf9uEpzPiqgh9AgiXKDiAJ7OUZ%2F%2FrzA3keyleaGxx9XYgYcdqb80MzLuhlAzaTT0UWr46VACQ2Manv1os3hzgoZOoVLWfG43dEUdrR96jFmQ86PU3IG4jsxatGm18ORXXs5EXPnhEOWPmlfGhNtDPgqnrlZlih1AapdrRx9bWCj1drKUIbDrIIFro13Yw3ip5MJKyqSIFODBp3gPek4kKZkExry8eYJ9tYCZWanQnlb95qiTAxb1%2BV2WA3ljVMB79gEZGxlZD%2BYz0zlNjJfxCbo9NntqkupZHL7Jd2hVW%2Fb2oDGAZ5%2FqPw9DmQaiy3Wj5YGKCpzDxD4WlrEd6B6m0x3QVGWiYYwxzIyOFyNngMO2BnAB5u4k8dlFz1%2Ba0xC0VhWwiCK1xM%2Fb%2FRIwMypnKgTg5dSdj9QdHAzYFoiz6qHV3qMGRDVl3EsgUy8GqWpeZuaxBRwYcnEJN%2BjMRxEULmKna0YXazpea75MPzTi8QGOqUBmr%2F%2FQJaZSGskjrX8hysLgsW0HgdiKcrjf%2Fp5300%2BONFdqWT1AGBwA8JYfB2D8bvKyaNUNBkCmjVuN9GqPnEu%2BOk9vmv7mJcPpMzPC3rNgbkaVWShsvE7du6Vmuo8HkcTZ4n4bwVOgHGf3ziR62TQVD0jKg9jJyTzPGfYjp0eTFLh6kdZBnsBS8XD0Tv2%2FaX5i4GPO2xARmL8tTvkGHKmOMoV7GdV&X-Amz-Signature=ea1e831b3732b2ac8a378187d583f1d400a49ced587d25baf2f63fe2f81afd56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJFTWDN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQChrrcXAlQfhRJGgboAA83GheV2LEikdS2b%2B81xpxgt7QIgQTulkp4ghz3Q5CqJ2sBE7dnATsRWbR5Wx6p4hFZ7ke8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETXeYKRbqkvjLshBSrcAwqxcvoWbS9F3fPdl9U3nFBKRwHhyWOJoZyQ%2BhBnxrtGcO%2FFM5raWSEcAMPbTcsnGhHRdzh6pwmtl3qH8AfNvdv3Jl3vYK%2F9X7Oqd1P4mfr9HdUAhD%2BBHjmtFdJcZh%2FFTG1%2B6IqoamfyAcsTNIIA1aWK7Sf9uEpzPiqgh9AgiXKDiAJ7OUZ%2F%2FrzA3keyleaGxx9XYgYcdqb80MzLuhlAzaTT0UWr46VACQ2Manv1os3hzgoZOoVLWfG43dEUdrR96jFmQ86PU3IG4jsxatGm18ORXXs5EXPnhEOWPmlfGhNtDPgqnrlZlih1AapdrRx9bWCj1drKUIbDrIIFro13Yw3ip5MJKyqSIFODBp3gPek4kKZkExry8eYJ9tYCZWanQnlb95qiTAxb1%2BV2WA3ljVMB79gEZGxlZD%2BYz0zlNjJfxCbo9NntqkupZHL7Jd2hVW%2Fb2oDGAZ5%2FqPw9DmQaiy3Wj5YGKCpzDxD4WlrEd6B6m0x3QVGWiYYwxzIyOFyNngMO2BnAB5u4k8dlFz1%2Ba0xC0VhWwiCK1xM%2Fb%2FRIwMypnKgTg5dSdj9QdHAzYFoiz6qHV3qMGRDVl3EsgUy8GqWpeZuaxBRwYcnEJN%2BjMRxEULmKna0YXazpea75MPzTi8QGOqUBmr%2F%2FQJaZSGskjrX8hysLgsW0HgdiKcrjf%2Fp5300%2BONFdqWT1AGBwA8JYfB2D8bvKyaNUNBkCmjVuN9GqPnEu%2BOk9vmv7mJcPpMzPC3rNgbkaVWShsvE7du6Vmuo8HkcTZ4n4bwVOgHGf3ziR62TQVD0jKg9jJyTzPGfYjp0eTFLh6kdZBnsBS8XD0Tv2%2FaX5i4GPO2xARmL8tTvkGHKmOMoV7GdV&X-Amz-Signature=d0b2ea53d24accf42d77a3c9a38a520137205a2cf4daadcff6349365ceb90c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJFTWDN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQChrrcXAlQfhRJGgboAA83GheV2LEikdS2b%2B81xpxgt7QIgQTulkp4ghz3Q5CqJ2sBE7dnATsRWbR5Wx6p4hFZ7ke8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETXeYKRbqkvjLshBSrcAwqxcvoWbS9F3fPdl9U3nFBKRwHhyWOJoZyQ%2BhBnxrtGcO%2FFM5raWSEcAMPbTcsnGhHRdzh6pwmtl3qH8AfNvdv3Jl3vYK%2F9X7Oqd1P4mfr9HdUAhD%2BBHjmtFdJcZh%2FFTG1%2B6IqoamfyAcsTNIIA1aWK7Sf9uEpzPiqgh9AgiXKDiAJ7OUZ%2F%2FrzA3keyleaGxx9XYgYcdqb80MzLuhlAzaTT0UWr46VACQ2Manv1os3hzgoZOoVLWfG43dEUdrR96jFmQ86PU3IG4jsxatGm18ORXXs5EXPnhEOWPmlfGhNtDPgqnrlZlih1AapdrRx9bWCj1drKUIbDrIIFro13Yw3ip5MJKyqSIFODBp3gPek4kKZkExry8eYJ9tYCZWanQnlb95qiTAxb1%2BV2WA3ljVMB79gEZGxlZD%2BYz0zlNjJfxCbo9NntqkupZHL7Jd2hVW%2Fb2oDGAZ5%2FqPw9DmQaiy3Wj5YGKCpzDxD4WlrEd6B6m0x3QVGWiYYwxzIyOFyNngMO2BnAB5u4k8dlFz1%2Ba0xC0VhWwiCK1xM%2Fb%2FRIwMypnKgTg5dSdj9QdHAzYFoiz6qHV3qMGRDVl3EsgUy8GqWpeZuaxBRwYcnEJN%2BjMRxEULmKna0YXazpea75MPzTi8QGOqUBmr%2F%2FQJaZSGskjrX8hysLgsW0HgdiKcrjf%2Fp5300%2BONFdqWT1AGBwA8JYfB2D8bvKyaNUNBkCmjVuN9GqPnEu%2BOk9vmv7mJcPpMzPC3rNgbkaVWShsvE7du6Vmuo8HkcTZ4n4bwVOgHGf3ziR62TQVD0jKg9jJyTzPGfYjp0eTFLh6kdZBnsBS8XD0Tv2%2FaX5i4GPO2xARmL8tTvkGHKmOMoV7GdV&X-Amz-Signature=88631212165eef1d09a386a01315df109ea210d0e52b6341f78a710375b88246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJFTWDN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQChrrcXAlQfhRJGgboAA83GheV2LEikdS2b%2B81xpxgt7QIgQTulkp4ghz3Q5CqJ2sBE7dnATsRWbR5Wx6p4hFZ7ke8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETXeYKRbqkvjLshBSrcAwqxcvoWbS9F3fPdl9U3nFBKRwHhyWOJoZyQ%2BhBnxrtGcO%2FFM5raWSEcAMPbTcsnGhHRdzh6pwmtl3qH8AfNvdv3Jl3vYK%2F9X7Oqd1P4mfr9HdUAhD%2BBHjmtFdJcZh%2FFTG1%2B6IqoamfyAcsTNIIA1aWK7Sf9uEpzPiqgh9AgiXKDiAJ7OUZ%2F%2FrzA3keyleaGxx9XYgYcdqb80MzLuhlAzaTT0UWr46VACQ2Manv1os3hzgoZOoVLWfG43dEUdrR96jFmQ86PU3IG4jsxatGm18ORXXs5EXPnhEOWPmlfGhNtDPgqnrlZlih1AapdrRx9bWCj1drKUIbDrIIFro13Yw3ip5MJKyqSIFODBp3gPek4kKZkExry8eYJ9tYCZWanQnlb95qiTAxb1%2BV2WA3ljVMB79gEZGxlZD%2BYz0zlNjJfxCbo9NntqkupZHL7Jd2hVW%2Fb2oDGAZ5%2FqPw9DmQaiy3Wj5YGKCpzDxD4WlrEd6B6m0x3QVGWiYYwxzIyOFyNngMO2BnAB5u4k8dlFz1%2Ba0xC0VhWwiCK1xM%2Fb%2FRIwMypnKgTg5dSdj9QdHAzYFoiz6qHV3qMGRDVl3EsgUy8GqWpeZuaxBRwYcnEJN%2BjMRxEULmKna0YXazpea75MPzTi8QGOqUBmr%2F%2FQJaZSGskjrX8hysLgsW0HgdiKcrjf%2Fp5300%2BONFdqWT1AGBwA8JYfB2D8bvKyaNUNBkCmjVuN9GqPnEu%2BOk9vmv7mJcPpMzPC3rNgbkaVWShsvE7du6Vmuo8HkcTZ4n4bwVOgHGf3ziR62TQVD0jKg9jJyTzPGfYjp0eTFLh6kdZBnsBS8XD0Tv2%2FaX5i4GPO2xARmL8tTvkGHKmOMoV7GdV&X-Amz-Signature=0f949b05f8284e25e10454579c6d313e6625d8e9d6cbf383465455e0e436a597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJFTWDN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQChrrcXAlQfhRJGgboAA83GheV2LEikdS2b%2B81xpxgt7QIgQTulkp4ghz3Q5CqJ2sBE7dnATsRWbR5Wx6p4hFZ7ke8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETXeYKRbqkvjLshBSrcAwqxcvoWbS9F3fPdl9U3nFBKRwHhyWOJoZyQ%2BhBnxrtGcO%2FFM5raWSEcAMPbTcsnGhHRdzh6pwmtl3qH8AfNvdv3Jl3vYK%2F9X7Oqd1P4mfr9HdUAhD%2BBHjmtFdJcZh%2FFTG1%2B6IqoamfyAcsTNIIA1aWK7Sf9uEpzPiqgh9AgiXKDiAJ7OUZ%2F%2FrzA3keyleaGxx9XYgYcdqb80MzLuhlAzaTT0UWr46VACQ2Manv1os3hzgoZOoVLWfG43dEUdrR96jFmQ86PU3IG4jsxatGm18ORXXs5EXPnhEOWPmlfGhNtDPgqnrlZlih1AapdrRx9bWCj1drKUIbDrIIFro13Yw3ip5MJKyqSIFODBp3gPek4kKZkExry8eYJ9tYCZWanQnlb95qiTAxb1%2BV2WA3ljVMB79gEZGxlZD%2BYz0zlNjJfxCbo9NntqkupZHL7Jd2hVW%2Fb2oDGAZ5%2FqPw9DmQaiy3Wj5YGKCpzDxD4WlrEd6B6m0x3QVGWiYYwxzIyOFyNngMO2BnAB5u4k8dlFz1%2Ba0xC0VhWwiCK1xM%2Fb%2FRIwMypnKgTg5dSdj9QdHAzYFoiz6qHV3qMGRDVl3EsgUy8GqWpeZuaxBRwYcnEJN%2BjMRxEULmKna0YXazpea75MPzTi8QGOqUBmr%2F%2FQJaZSGskjrX8hysLgsW0HgdiKcrjf%2Fp5300%2BONFdqWT1AGBwA8JYfB2D8bvKyaNUNBkCmjVuN9GqPnEu%2BOk9vmv7mJcPpMzPC3rNgbkaVWShsvE7du6Vmuo8HkcTZ4n4bwVOgHGf3ziR62TQVD0jKg9jJyTzPGfYjp0eTFLh6kdZBnsBS8XD0Tv2%2FaX5i4GPO2xARmL8tTvkGHKmOMoV7GdV&X-Amz-Signature=b66fc65a2e4712ec5460568b6377670a83ed5ccff0508a1148a716a7989906ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJFTWDN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQChrrcXAlQfhRJGgboAA83GheV2LEikdS2b%2B81xpxgt7QIgQTulkp4ghz3Q5CqJ2sBE7dnATsRWbR5Wx6p4hFZ7ke8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDETXeYKRbqkvjLshBSrcAwqxcvoWbS9F3fPdl9U3nFBKRwHhyWOJoZyQ%2BhBnxrtGcO%2FFM5raWSEcAMPbTcsnGhHRdzh6pwmtl3qH8AfNvdv3Jl3vYK%2F9X7Oqd1P4mfr9HdUAhD%2BBHjmtFdJcZh%2FFTG1%2B6IqoamfyAcsTNIIA1aWK7Sf9uEpzPiqgh9AgiXKDiAJ7OUZ%2F%2FrzA3keyleaGxx9XYgYcdqb80MzLuhlAzaTT0UWr46VACQ2Manv1os3hzgoZOoVLWfG43dEUdrR96jFmQ86PU3IG4jsxatGm18ORXXs5EXPnhEOWPmlfGhNtDPgqnrlZlih1AapdrRx9bWCj1drKUIbDrIIFro13Yw3ip5MJKyqSIFODBp3gPek4kKZkExry8eYJ9tYCZWanQnlb95qiTAxb1%2BV2WA3ljVMB79gEZGxlZD%2BYz0zlNjJfxCbo9NntqkupZHL7Jd2hVW%2Fb2oDGAZ5%2FqPw9DmQaiy3Wj5YGKCpzDxD4WlrEd6B6m0x3QVGWiYYwxzIyOFyNngMO2BnAB5u4k8dlFz1%2Ba0xC0VhWwiCK1xM%2Fb%2FRIwMypnKgTg5dSdj9QdHAzYFoiz6qHV3qMGRDVl3EsgUy8GqWpeZuaxBRwYcnEJN%2BjMRxEULmKna0YXazpea75MPzTi8QGOqUBmr%2F%2FQJaZSGskjrX8hysLgsW0HgdiKcrjf%2Fp5300%2BONFdqWT1AGBwA8JYfB2D8bvKyaNUNBkCmjVuN9GqPnEu%2BOk9vmv7mJcPpMzPC3rNgbkaVWShsvE7du6Vmuo8HkcTZ4n4bwVOgHGf3ziR62TQVD0jKg9jJyTzPGfYjp0eTFLh6kdZBnsBS8XD0Tv2%2FaX5i4GPO2xARmL8tTvkGHKmOMoV7GdV&X-Amz-Signature=74f9a3927711d3c54e0002a3c2f58bb8bc7a2c26fa25ee7bdaf95ddeea48da92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
