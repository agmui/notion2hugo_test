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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKW5AVX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxjB740LIH1aJ1vKKxhtRAHHG9XjqFBlswuS1pus26BgIhAPKUGEsW9Om%2B2klspbFEuGs8POKQi6s9UIpHEkyxufAGKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3en%2FW2tOK6ECFyJoq3AMup%2FGs75txVeZup%2Ft6yxppAt%2B87LmvDydbALkm3QjIC6ixryfRhUL877%2B5Gf0F3KjiM8hnXCvcU7wpqJzWQWkbPqu978R%2BpmbbPvX0Efk%2FCraIR9mUszaHr%2Fqi6PcN%2BV4OWVtL2R7bxfxA%2FAseiJMJcrnIu4pmsHlQ5Haqg6mw%2FXjabNu6cfuuHK%2FeCjzwWB3T4O9KYVABaJRT%2B0tSKQgWU0G4gOMduusIMdi5VnuYkEj79TUB9BvcpGRaeCVKf9%2BynrminMKyrlxSj2VfS%2FVoDBUD0vC0J8DEk75SsF4WI2Ayzuxjl%2BlPeRtc3CwpVDuX%2F5GSgW%2BtfEB3d%2BSdBb1RXbjeRzC6ddwcykd5QYArVVisjFiMBRlXHjz8yye1B%2Bp7tSRgSwqa8x0bb4Y4M6S0ZyinHNsU4dDauA9Zu7ISyubk7rXaHqut4Z0DGPCM1OrGCLSRvQSJ5z3KU7mRFQa8XikN5r%2BJSpbjSJf3TCvEdfZSeI%2FDQpE3Fg2ys3%2FEw9AbpVcd6xDwIdMvZoz7yvT2yR%2FaFx3LdacdUTzCFUQHynd5L2Q04dk8QBSlMWXz7L2E10LpjQUbee3QgjP8zlvBeiSpuUQwOFPT09ab1cnUsHdd3dlbthmMKOEHyzDYr9jCBjqkAQzDy63hkLzVgEXBFreGFgGJvwmuxJK2VSGtG03cNHiWRNsTzga3hBtP45GWcpL8kcoFdx2jDw08Bk4r9hZdcOxSR%2BIecUWp66o5RzYeeFkwDxdT2uBcF%2BwgG%2FcoFAi7SRgW1JWo%2F0YsYKUHFomP1uSDuhnS3JNmDyXVkJsei0qi6gBnqzbFWITvHtSkp7lso7WP6eaLSuj9HKlwdfdxOzSsZc2s&X-Amz-Signature=143e73d171f74faecdbafd291e173188fb1a0a69f2d10b5c55aca900f809d4d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKW5AVX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxjB740LIH1aJ1vKKxhtRAHHG9XjqFBlswuS1pus26BgIhAPKUGEsW9Om%2B2klspbFEuGs8POKQi6s9UIpHEkyxufAGKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3en%2FW2tOK6ECFyJoq3AMup%2FGs75txVeZup%2Ft6yxppAt%2B87LmvDydbALkm3QjIC6ixryfRhUL877%2B5Gf0F3KjiM8hnXCvcU7wpqJzWQWkbPqu978R%2BpmbbPvX0Efk%2FCraIR9mUszaHr%2Fqi6PcN%2BV4OWVtL2R7bxfxA%2FAseiJMJcrnIu4pmsHlQ5Haqg6mw%2FXjabNu6cfuuHK%2FeCjzwWB3T4O9KYVABaJRT%2B0tSKQgWU0G4gOMduusIMdi5VnuYkEj79TUB9BvcpGRaeCVKf9%2BynrminMKyrlxSj2VfS%2FVoDBUD0vC0J8DEk75SsF4WI2Ayzuxjl%2BlPeRtc3CwpVDuX%2F5GSgW%2BtfEB3d%2BSdBb1RXbjeRzC6ddwcykd5QYArVVisjFiMBRlXHjz8yye1B%2Bp7tSRgSwqa8x0bb4Y4M6S0ZyinHNsU4dDauA9Zu7ISyubk7rXaHqut4Z0DGPCM1OrGCLSRvQSJ5z3KU7mRFQa8XikN5r%2BJSpbjSJf3TCvEdfZSeI%2FDQpE3Fg2ys3%2FEw9AbpVcd6xDwIdMvZoz7yvT2yR%2FaFx3LdacdUTzCFUQHynd5L2Q04dk8QBSlMWXz7L2E10LpjQUbee3QgjP8zlvBeiSpuUQwOFPT09ab1cnUsHdd3dlbthmMKOEHyzDYr9jCBjqkAQzDy63hkLzVgEXBFreGFgGJvwmuxJK2VSGtG03cNHiWRNsTzga3hBtP45GWcpL8kcoFdx2jDw08Bk4r9hZdcOxSR%2BIecUWp66o5RzYeeFkwDxdT2uBcF%2BwgG%2FcoFAi7SRgW1JWo%2F0YsYKUHFomP1uSDuhnS3JNmDyXVkJsei0qi6gBnqzbFWITvHtSkp7lso7WP6eaLSuj9HKlwdfdxOzSsZc2s&X-Amz-Signature=7c8913a03af452679dbac36c480eeb79c08c65c3677a02545a22054b6dc315d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKW5AVX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxjB740LIH1aJ1vKKxhtRAHHG9XjqFBlswuS1pus26BgIhAPKUGEsW9Om%2B2klspbFEuGs8POKQi6s9UIpHEkyxufAGKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3en%2FW2tOK6ECFyJoq3AMup%2FGs75txVeZup%2Ft6yxppAt%2B87LmvDydbALkm3QjIC6ixryfRhUL877%2B5Gf0F3KjiM8hnXCvcU7wpqJzWQWkbPqu978R%2BpmbbPvX0Efk%2FCraIR9mUszaHr%2Fqi6PcN%2BV4OWVtL2R7bxfxA%2FAseiJMJcrnIu4pmsHlQ5Haqg6mw%2FXjabNu6cfuuHK%2FeCjzwWB3T4O9KYVABaJRT%2B0tSKQgWU0G4gOMduusIMdi5VnuYkEj79TUB9BvcpGRaeCVKf9%2BynrminMKyrlxSj2VfS%2FVoDBUD0vC0J8DEk75SsF4WI2Ayzuxjl%2BlPeRtc3CwpVDuX%2F5GSgW%2BtfEB3d%2BSdBb1RXbjeRzC6ddwcykd5QYArVVisjFiMBRlXHjz8yye1B%2Bp7tSRgSwqa8x0bb4Y4M6S0ZyinHNsU4dDauA9Zu7ISyubk7rXaHqut4Z0DGPCM1OrGCLSRvQSJ5z3KU7mRFQa8XikN5r%2BJSpbjSJf3TCvEdfZSeI%2FDQpE3Fg2ys3%2FEw9AbpVcd6xDwIdMvZoz7yvT2yR%2FaFx3LdacdUTzCFUQHynd5L2Q04dk8QBSlMWXz7L2E10LpjQUbee3QgjP8zlvBeiSpuUQwOFPT09ab1cnUsHdd3dlbthmMKOEHyzDYr9jCBjqkAQzDy63hkLzVgEXBFreGFgGJvwmuxJK2VSGtG03cNHiWRNsTzga3hBtP45GWcpL8kcoFdx2jDw08Bk4r9hZdcOxSR%2BIecUWp66o5RzYeeFkwDxdT2uBcF%2BwgG%2FcoFAi7SRgW1JWo%2F0YsYKUHFomP1uSDuhnS3JNmDyXVkJsei0qi6gBnqzbFWITvHtSkp7lso7WP6eaLSuj9HKlwdfdxOzSsZc2s&X-Amz-Signature=4f902e2986bd1f6e30b9fa0b4146a4a142498bc34afd58229c10b32b36bda0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKW5AVX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxjB740LIH1aJ1vKKxhtRAHHG9XjqFBlswuS1pus26BgIhAPKUGEsW9Om%2B2klspbFEuGs8POKQi6s9UIpHEkyxufAGKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3en%2FW2tOK6ECFyJoq3AMup%2FGs75txVeZup%2Ft6yxppAt%2B87LmvDydbALkm3QjIC6ixryfRhUL877%2B5Gf0F3KjiM8hnXCvcU7wpqJzWQWkbPqu978R%2BpmbbPvX0Efk%2FCraIR9mUszaHr%2Fqi6PcN%2BV4OWVtL2R7bxfxA%2FAseiJMJcrnIu4pmsHlQ5Haqg6mw%2FXjabNu6cfuuHK%2FeCjzwWB3T4O9KYVABaJRT%2B0tSKQgWU0G4gOMduusIMdi5VnuYkEj79TUB9BvcpGRaeCVKf9%2BynrminMKyrlxSj2VfS%2FVoDBUD0vC0J8DEk75SsF4WI2Ayzuxjl%2BlPeRtc3CwpVDuX%2F5GSgW%2BtfEB3d%2BSdBb1RXbjeRzC6ddwcykd5QYArVVisjFiMBRlXHjz8yye1B%2Bp7tSRgSwqa8x0bb4Y4M6S0ZyinHNsU4dDauA9Zu7ISyubk7rXaHqut4Z0DGPCM1OrGCLSRvQSJ5z3KU7mRFQa8XikN5r%2BJSpbjSJf3TCvEdfZSeI%2FDQpE3Fg2ys3%2FEw9AbpVcd6xDwIdMvZoz7yvT2yR%2FaFx3LdacdUTzCFUQHynd5L2Q04dk8QBSlMWXz7L2E10LpjQUbee3QgjP8zlvBeiSpuUQwOFPT09ab1cnUsHdd3dlbthmMKOEHyzDYr9jCBjqkAQzDy63hkLzVgEXBFreGFgGJvwmuxJK2VSGtG03cNHiWRNsTzga3hBtP45GWcpL8kcoFdx2jDw08Bk4r9hZdcOxSR%2BIecUWp66o5RzYeeFkwDxdT2uBcF%2BwgG%2FcoFAi7SRgW1JWo%2F0YsYKUHFomP1uSDuhnS3JNmDyXVkJsei0qi6gBnqzbFWITvHtSkp7lso7WP6eaLSuj9HKlwdfdxOzSsZc2s&X-Amz-Signature=0b42d894fd03112dfd005be552a1f34c7037ab397910e7816e5c59c4bcc63000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKW5AVX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxjB740LIH1aJ1vKKxhtRAHHG9XjqFBlswuS1pus26BgIhAPKUGEsW9Om%2B2klspbFEuGs8POKQi6s9UIpHEkyxufAGKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3en%2FW2tOK6ECFyJoq3AMup%2FGs75txVeZup%2Ft6yxppAt%2B87LmvDydbALkm3QjIC6ixryfRhUL877%2B5Gf0F3KjiM8hnXCvcU7wpqJzWQWkbPqu978R%2BpmbbPvX0Efk%2FCraIR9mUszaHr%2Fqi6PcN%2BV4OWVtL2R7bxfxA%2FAseiJMJcrnIu4pmsHlQ5Haqg6mw%2FXjabNu6cfuuHK%2FeCjzwWB3T4O9KYVABaJRT%2B0tSKQgWU0G4gOMduusIMdi5VnuYkEj79TUB9BvcpGRaeCVKf9%2BynrminMKyrlxSj2VfS%2FVoDBUD0vC0J8DEk75SsF4WI2Ayzuxjl%2BlPeRtc3CwpVDuX%2F5GSgW%2BtfEB3d%2BSdBb1RXbjeRzC6ddwcykd5QYArVVisjFiMBRlXHjz8yye1B%2Bp7tSRgSwqa8x0bb4Y4M6S0ZyinHNsU4dDauA9Zu7ISyubk7rXaHqut4Z0DGPCM1OrGCLSRvQSJ5z3KU7mRFQa8XikN5r%2BJSpbjSJf3TCvEdfZSeI%2FDQpE3Fg2ys3%2FEw9AbpVcd6xDwIdMvZoz7yvT2yR%2FaFx3LdacdUTzCFUQHynd5L2Q04dk8QBSlMWXz7L2E10LpjQUbee3QgjP8zlvBeiSpuUQwOFPT09ab1cnUsHdd3dlbthmMKOEHyzDYr9jCBjqkAQzDy63hkLzVgEXBFreGFgGJvwmuxJK2VSGtG03cNHiWRNsTzga3hBtP45GWcpL8kcoFdx2jDw08Bk4r9hZdcOxSR%2BIecUWp66o5RzYeeFkwDxdT2uBcF%2BwgG%2FcoFAi7SRgW1JWo%2F0YsYKUHFomP1uSDuhnS3JNmDyXVkJsei0qi6gBnqzbFWITvHtSkp7lso7WP6eaLSuj9HKlwdfdxOzSsZc2s&X-Amz-Signature=28c81fdc10861c4d29385876c2ad902f03bf231bce58725cab5b10681bb20f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKW5AVX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxjB740LIH1aJ1vKKxhtRAHHG9XjqFBlswuS1pus26BgIhAPKUGEsW9Om%2B2klspbFEuGs8POKQi6s9UIpHEkyxufAGKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3en%2FW2tOK6ECFyJoq3AMup%2FGs75txVeZup%2Ft6yxppAt%2B87LmvDydbALkm3QjIC6ixryfRhUL877%2B5Gf0F3KjiM8hnXCvcU7wpqJzWQWkbPqu978R%2BpmbbPvX0Efk%2FCraIR9mUszaHr%2Fqi6PcN%2BV4OWVtL2R7bxfxA%2FAseiJMJcrnIu4pmsHlQ5Haqg6mw%2FXjabNu6cfuuHK%2FeCjzwWB3T4O9KYVABaJRT%2B0tSKQgWU0G4gOMduusIMdi5VnuYkEj79TUB9BvcpGRaeCVKf9%2BynrminMKyrlxSj2VfS%2FVoDBUD0vC0J8DEk75SsF4WI2Ayzuxjl%2BlPeRtc3CwpVDuX%2F5GSgW%2BtfEB3d%2BSdBb1RXbjeRzC6ddwcykd5QYArVVisjFiMBRlXHjz8yye1B%2Bp7tSRgSwqa8x0bb4Y4M6S0ZyinHNsU4dDauA9Zu7ISyubk7rXaHqut4Z0DGPCM1OrGCLSRvQSJ5z3KU7mRFQa8XikN5r%2BJSpbjSJf3TCvEdfZSeI%2FDQpE3Fg2ys3%2FEw9AbpVcd6xDwIdMvZoz7yvT2yR%2FaFx3LdacdUTzCFUQHynd5L2Q04dk8QBSlMWXz7L2E10LpjQUbee3QgjP8zlvBeiSpuUQwOFPT09ab1cnUsHdd3dlbthmMKOEHyzDYr9jCBjqkAQzDy63hkLzVgEXBFreGFgGJvwmuxJK2VSGtG03cNHiWRNsTzga3hBtP45GWcpL8kcoFdx2jDw08Bk4r9hZdcOxSR%2BIecUWp66o5RzYeeFkwDxdT2uBcF%2BwgG%2FcoFAi7SRgW1JWo%2F0YsYKUHFomP1uSDuhnS3JNmDyXVkJsei0qi6gBnqzbFWITvHtSkp7lso7WP6eaLSuj9HKlwdfdxOzSsZc2s&X-Amz-Signature=7535a079418e96ff5be4fc72eb13f647b56118b3f56aede6e55ff3dcbe06c521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKW5AVX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxjB740LIH1aJ1vKKxhtRAHHG9XjqFBlswuS1pus26BgIhAPKUGEsW9Om%2B2klspbFEuGs8POKQi6s9UIpHEkyxufAGKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3en%2FW2tOK6ECFyJoq3AMup%2FGs75txVeZup%2Ft6yxppAt%2B87LmvDydbALkm3QjIC6ixryfRhUL877%2B5Gf0F3KjiM8hnXCvcU7wpqJzWQWkbPqu978R%2BpmbbPvX0Efk%2FCraIR9mUszaHr%2Fqi6PcN%2BV4OWVtL2R7bxfxA%2FAseiJMJcrnIu4pmsHlQ5Haqg6mw%2FXjabNu6cfuuHK%2FeCjzwWB3T4O9KYVABaJRT%2B0tSKQgWU0G4gOMduusIMdi5VnuYkEj79TUB9BvcpGRaeCVKf9%2BynrminMKyrlxSj2VfS%2FVoDBUD0vC0J8DEk75SsF4WI2Ayzuxjl%2BlPeRtc3CwpVDuX%2F5GSgW%2BtfEB3d%2BSdBb1RXbjeRzC6ddwcykd5QYArVVisjFiMBRlXHjz8yye1B%2Bp7tSRgSwqa8x0bb4Y4M6S0ZyinHNsU4dDauA9Zu7ISyubk7rXaHqut4Z0DGPCM1OrGCLSRvQSJ5z3KU7mRFQa8XikN5r%2BJSpbjSJf3TCvEdfZSeI%2FDQpE3Fg2ys3%2FEw9AbpVcd6xDwIdMvZoz7yvT2yR%2FaFx3LdacdUTzCFUQHynd5L2Q04dk8QBSlMWXz7L2E10LpjQUbee3QgjP8zlvBeiSpuUQwOFPT09ab1cnUsHdd3dlbthmMKOEHyzDYr9jCBjqkAQzDy63hkLzVgEXBFreGFgGJvwmuxJK2VSGtG03cNHiWRNsTzga3hBtP45GWcpL8kcoFdx2jDw08Bk4r9hZdcOxSR%2BIecUWp66o5RzYeeFkwDxdT2uBcF%2BwgG%2FcoFAi7SRgW1JWo%2F0YsYKUHFomP1uSDuhnS3JNmDyXVkJsei0qi6gBnqzbFWITvHtSkp7lso7WP6eaLSuj9HKlwdfdxOzSsZc2s&X-Amz-Signature=c2223b783cd8b4a28d82a18bc3b9cb0f3c051ce178b288ad89e1ade0a89116ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKW5AVX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxjB740LIH1aJ1vKKxhtRAHHG9XjqFBlswuS1pus26BgIhAPKUGEsW9Om%2B2klspbFEuGs8POKQi6s9UIpHEkyxufAGKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3en%2FW2tOK6ECFyJoq3AMup%2FGs75txVeZup%2Ft6yxppAt%2B87LmvDydbALkm3QjIC6ixryfRhUL877%2B5Gf0F3KjiM8hnXCvcU7wpqJzWQWkbPqu978R%2BpmbbPvX0Efk%2FCraIR9mUszaHr%2Fqi6PcN%2BV4OWVtL2R7bxfxA%2FAseiJMJcrnIu4pmsHlQ5Haqg6mw%2FXjabNu6cfuuHK%2FeCjzwWB3T4O9KYVABaJRT%2B0tSKQgWU0G4gOMduusIMdi5VnuYkEj79TUB9BvcpGRaeCVKf9%2BynrminMKyrlxSj2VfS%2FVoDBUD0vC0J8DEk75SsF4WI2Ayzuxjl%2BlPeRtc3CwpVDuX%2F5GSgW%2BtfEB3d%2BSdBb1RXbjeRzC6ddwcykd5QYArVVisjFiMBRlXHjz8yye1B%2Bp7tSRgSwqa8x0bb4Y4M6S0ZyinHNsU4dDauA9Zu7ISyubk7rXaHqut4Z0DGPCM1OrGCLSRvQSJ5z3KU7mRFQa8XikN5r%2BJSpbjSJf3TCvEdfZSeI%2FDQpE3Fg2ys3%2FEw9AbpVcd6xDwIdMvZoz7yvT2yR%2FaFx3LdacdUTzCFUQHynd5L2Q04dk8QBSlMWXz7L2E10LpjQUbee3QgjP8zlvBeiSpuUQwOFPT09ab1cnUsHdd3dlbthmMKOEHyzDYr9jCBjqkAQzDy63hkLzVgEXBFreGFgGJvwmuxJK2VSGtG03cNHiWRNsTzga3hBtP45GWcpL8kcoFdx2jDw08Bk4r9hZdcOxSR%2BIecUWp66o5RzYeeFkwDxdT2uBcF%2BwgG%2FcoFAi7SRgW1JWo%2F0YsYKUHFomP1uSDuhnS3JNmDyXVkJsei0qi6gBnqzbFWITvHtSkp7lso7WP6eaLSuj9HKlwdfdxOzSsZc2s&X-Amz-Signature=bb4e7f5bd89804ce9cd320a66955f75e29f2121a492c7bf2c738befd43134bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
