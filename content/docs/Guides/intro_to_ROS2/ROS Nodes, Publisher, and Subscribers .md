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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6TZXWZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDjtwtQuOCAomzKnxeBoVaAt5bCgCWZ9rGHIAv1DgQrbQIhAOnR0ckpgAuC8kCYW50OV2gtfZxHp91FNG9McHwX56zpKv8DCHMQABoMNjM3NDIzMTgzODA1Igz8bgNXBfYhe2x6k6Uq3AN%2FknBmJlp2Xo6oDPBueICJt8glijsDVFM5LHDHgPp8KrjB4hxB%2BhLeuaDp6krsh%2BuGyN63rUKUxJ1j%2FjfnTgd4mGzrbq4A0uoGD5t1hyZk1%2BN2XpoDljXiOYP1CAsWj51ZzL57L8CB2IidvqskkRSjztm2ys0acWO9H0SxDH6CDjtfUnNxZ4UoMtT7MUh1vk6gzEH%2BBIfpjHG7uhKmP9JIAv0JqO9BIqOiYTroEtw8vfzd7wyB40YrS8lcrVnfshaobcx4OBB9pfdk3YevwwNuxtTNNMhzIwCQNMQS7ACRrKSYR%2BCg1%2BMv4yfwl%2F0Z09B37ZSUvNJXDaaPOWdIrBNtV9Us1ygktbWFgNt2OR16Txz4imGwUE%2BqendRV%2Fwh0R0txhJRWSN8jStRfKboErh7RvVtmHHrBNxs36Fvm7V0ezmovuuLUyAJQVWFJRWbvALpSeHIb6AS0oeNMw9M8%2BvfLtYmtp1LE17cHHOaBGVA%2BpFd4O8AKQAP4taz3WVgka08TS8g65z9Xgks3DZKersdKJ%2B%2BJrG%2Fi3sbAAKbfPdxMGRaSHVFZDeGQnevxZV3%2BfdM21LpGt8KpspVwCFwn96AubrBO9iUvy0iVHyZNIPZ0xzXBXiqA9nJO860JzCEpOq%2BBjqkATjZOCE9i3lP3ZaGxDviDsrA6ON7YYKjG3aenjQYXJhfWPtOu5okw6z8GfG9mcRZMXOOaM2IKVyd0X%2B3HjMpUeKJJHIfc9Sn1Ihc8EhlX8du8m%2BwkDkpDbQ9hlHJje1u6UH1MegDokG%2BDEXbqFTftHd8gxS1l4B5OhuL18DEQA5ADVjVO3hlyx%2BJQ5pKLcxQUTXUrI8SYq409L3QRxxO85DPdo62&X-Amz-Signature=c4ef8ebee8c33e7b048d4c6954f3cd258160de4e686c07c3bef17a35c4aa801e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6TZXWZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDjtwtQuOCAomzKnxeBoVaAt5bCgCWZ9rGHIAv1DgQrbQIhAOnR0ckpgAuC8kCYW50OV2gtfZxHp91FNG9McHwX56zpKv8DCHMQABoMNjM3NDIzMTgzODA1Igz8bgNXBfYhe2x6k6Uq3AN%2FknBmJlp2Xo6oDPBueICJt8glijsDVFM5LHDHgPp8KrjB4hxB%2BhLeuaDp6krsh%2BuGyN63rUKUxJ1j%2FjfnTgd4mGzrbq4A0uoGD5t1hyZk1%2BN2XpoDljXiOYP1CAsWj51ZzL57L8CB2IidvqskkRSjztm2ys0acWO9H0SxDH6CDjtfUnNxZ4UoMtT7MUh1vk6gzEH%2BBIfpjHG7uhKmP9JIAv0JqO9BIqOiYTroEtw8vfzd7wyB40YrS8lcrVnfshaobcx4OBB9pfdk3YevwwNuxtTNNMhzIwCQNMQS7ACRrKSYR%2BCg1%2BMv4yfwl%2F0Z09B37ZSUvNJXDaaPOWdIrBNtV9Us1ygktbWFgNt2OR16Txz4imGwUE%2BqendRV%2Fwh0R0txhJRWSN8jStRfKboErh7RvVtmHHrBNxs36Fvm7V0ezmovuuLUyAJQVWFJRWbvALpSeHIb6AS0oeNMw9M8%2BvfLtYmtp1LE17cHHOaBGVA%2BpFd4O8AKQAP4taz3WVgka08TS8g65z9Xgks3DZKersdKJ%2B%2BJrG%2Fi3sbAAKbfPdxMGRaSHVFZDeGQnevxZV3%2BfdM21LpGt8KpspVwCFwn96AubrBO9iUvy0iVHyZNIPZ0xzXBXiqA9nJO860JzCEpOq%2BBjqkATjZOCE9i3lP3ZaGxDviDsrA6ON7YYKjG3aenjQYXJhfWPtOu5okw6z8GfG9mcRZMXOOaM2IKVyd0X%2B3HjMpUeKJJHIfc9Sn1Ihc8EhlX8du8m%2BwkDkpDbQ9hlHJje1u6UH1MegDokG%2BDEXbqFTftHd8gxS1l4B5OhuL18DEQA5ADVjVO3hlyx%2BJQ5pKLcxQUTXUrI8SYq409L3QRxxO85DPdo62&X-Amz-Signature=980fa674eb39d1c0bd546fe8686dab9dd78e78b07de03ee329450b19be34ced7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6TZXWZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDjtwtQuOCAomzKnxeBoVaAt5bCgCWZ9rGHIAv1DgQrbQIhAOnR0ckpgAuC8kCYW50OV2gtfZxHp91FNG9McHwX56zpKv8DCHMQABoMNjM3NDIzMTgzODA1Igz8bgNXBfYhe2x6k6Uq3AN%2FknBmJlp2Xo6oDPBueICJt8glijsDVFM5LHDHgPp8KrjB4hxB%2BhLeuaDp6krsh%2BuGyN63rUKUxJ1j%2FjfnTgd4mGzrbq4A0uoGD5t1hyZk1%2BN2XpoDljXiOYP1CAsWj51ZzL57L8CB2IidvqskkRSjztm2ys0acWO9H0SxDH6CDjtfUnNxZ4UoMtT7MUh1vk6gzEH%2BBIfpjHG7uhKmP9JIAv0JqO9BIqOiYTroEtw8vfzd7wyB40YrS8lcrVnfshaobcx4OBB9pfdk3YevwwNuxtTNNMhzIwCQNMQS7ACRrKSYR%2BCg1%2BMv4yfwl%2F0Z09B37ZSUvNJXDaaPOWdIrBNtV9Us1ygktbWFgNt2OR16Txz4imGwUE%2BqendRV%2Fwh0R0txhJRWSN8jStRfKboErh7RvVtmHHrBNxs36Fvm7V0ezmovuuLUyAJQVWFJRWbvALpSeHIb6AS0oeNMw9M8%2BvfLtYmtp1LE17cHHOaBGVA%2BpFd4O8AKQAP4taz3WVgka08TS8g65z9Xgks3DZKersdKJ%2B%2BJrG%2Fi3sbAAKbfPdxMGRaSHVFZDeGQnevxZV3%2BfdM21LpGt8KpspVwCFwn96AubrBO9iUvy0iVHyZNIPZ0xzXBXiqA9nJO860JzCEpOq%2BBjqkATjZOCE9i3lP3ZaGxDviDsrA6ON7YYKjG3aenjQYXJhfWPtOu5okw6z8GfG9mcRZMXOOaM2IKVyd0X%2B3HjMpUeKJJHIfc9Sn1Ihc8EhlX8du8m%2BwkDkpDbQ9hlHJje1u6UH1MegDokG%2BDEXbqFTftHd8gxS1l4B5OhuL18DEQA5ADVjVO3hlyx%2BJQ5pKLcxQUTXUrI8SYq409L3QRxxO85DPdo62&X-Amz-Signature=13c95011208fde1f1fb73653bf33df9e8ffd083feba55562a03020a9d0f48339&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6TZXWZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDjtwtQuOCAomzKnxeBoVaAt5bCgCWZ9rGHIAv1DgQrbQIhAOnR0ckpgAuC8kCYW50OV2gtfZxHp91FNG9McHwX56zpKv8DCHMQABoMNjM3NDIzMTgzODA1Igz8bgNXBfYhe2x6k6Uq3AN%2FknBmJlp2Xo6oDPBueICJt8glijsDVFM5LHDHgPp8KrjB4hxB%2BhLeuaDp6krsh%2BuGyN63rUKUxJ1j%2FjfnTgd4mGzrbq4A0uoGD5t1hyZk1%2BN2XpoDljXiOYP1CAsWj51ZzL57L8CB2IidvqskkRSjztm2ys0acWO9H0SxDH6CDjtfUnNxZ4UoMtT7MUh1vk6gzEH%2BBIfpjHG7uhKmP9JIAv0JqO9BIqOiYTroEtw8vfzd7wyB40YrS8lcrVnfshaobcx4OBB9pfdk3YevwwNuxtTNNMhzIwCQNMQS7ACRrKSYR%2BCg1%2BMv4yfwl%2F0Z09B37ZSUvNJXDaaPOWdIrBNtV9Us1ygktbWFgNt2OR16Txz4imGwUE%2BqendRV%2Fwh0R0txhJRWSN8jStRfKboErh7RvVtmHHrBNxs36Fvm7V0ezmovuuLUyAJQVWFJRWbvALpSeHIb6AS0oeNMw9M8%2BvfLtYmtp1LE17cHHOaBGVA%2BpFd4O8AKQAP4taz3WVgka08TS8g65z9Xgks3DZKersdKJ%2B%2BJrG%2Fi3sbAAKbfPdxMGRaSHVFZDeGQnevxZV3%2BfdM21LpGt8KpspVwCFwn96AubrBO9iUvy0iVHyZNIPZ0xzXBXiqA9nJO860JzCEpOq%2BBjqkATjZOCE9i3lP3ZaGxDviDsrA6ON7YYKjG3aenjQYXJhfWPtOu5okw6z8GfG9mcRZMXOOaM2IKVyd0X%2B3HjMpUeKJJHIfc9Sn1Ihc8EhlX8du8m%2BwkDkpDbQ9hlHJje1u6UH1MegDokG%2BDEXbqFTftHd8gxS1l4B5OhuL18DEQA5ADVjVO3hlyx%2BJQ5pKLcxQUTXUrI8SYq409L3QRxxO85DPdo62&X-Amz-Signature=2f16e9e3f8be686a4d7698f08ed7cb4eb9cba5ef53f1a09910e930a76b4a1467&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6TZXWZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDjtwtQuOCAomzKnxeBoVaAt5bCgCWZ9rGHIAv1DgQrbQIhAOnR0ckpgAuC8kCYW50OV2gtfZxHp91FNG9McHwX56zpKv8DCHMQABoMNjM3NDIzMTgzODA1Igz8bgNXBfYhe2x6k6Uq3AN%2FknBmJlp2Xo6oDPBueICJt8glijsDVFM5LHDHgPp8KrjB4hxB%2BhLeuaDp6krsh%2BuGyN63rUKUxJ1j%2FjfnTgd4mGzrbq4A0uoGD5t1hyZk1%2BN2XpoDljXiOYP1CAsWj51ZzL57L8CB2IidvqskkRSjztm2ys0acWO9H0SxDH6CDjtfUnNxZ4UoMtT7MUh1vk6gzEH%2BBIfpjHG7uhKmP9JIAv0JqO9BIqOiYTroEtw8vfzd7wyB40YrS8lcrVnfshaobcx4OBB9pfdk3YevwwNuxtTNNMhzIwCQNMQS7ACRrKSYR%2BCg1%2BMv4yfwl%2F0Z09B37ZSUvNJXDaaPOWdIrBNtV9Us1ygktbWFgNt2OR16Txz4imGwUE%2BqendRV%2Fwh0R0txhJRWSN8jStRfKboErh7RvVtmHHrBNxs36Fvm7V0ezmovuuLUyAJQVWFJRWbvALpSeHIb6AS0oeNMw9M8%2BvfLtYmtp1LE17cHHOaBGVA%2BpFd4O8AKQAP4taz3WVgka08TS8g65z9Xgks3DZKersdKJ%2B%2BJrG%2Fi3sbAAKbfPdxMGRaSHVFZDeGQnevxZV3%2BfdM21LpGt8KpspVwCFwn96AubrBO9iUvy0iVHyZNIPZ0xzXBXiqA9nJO860JzCEpOq%2BBjqkATjZOCE9i3lP3ZaGxDviDsrA6ON7YYKjG3aenjQYXJhfWPtOu5okw6z8GfG9mcRZMXOOaM2IKVyd0X%2B3HjMpUeKJJHIfc9Sn1Ihc8EhlX8du8m%2BwkDkpDbQ9hlHJje1u6UH1MegDokG%2BDEXbqFTftHd8gxS1l4B5OhuL18DEQA5ADVjVO3hlyx%2BJQ5pKLcxQUTXUrI8SYq409L3QRxxO85DPdo62&X-Amz-Signature=5fe36d8cf43804c930e2c60de693e95f27d9fa9609482a99b98c2acf7d8a23e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6TZXWZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDjtwtQuOCAomzKnxeBoVaAt5bCgCWZ9rGHIAv1DgQrbQIhAOnR0ckpgAuC8kCYW50OV2gtfZxHp91FNG9McHwX56zpKv8DCHMQABoMNjM3NDIzMTgzODA1Igz8bgNXBfYhe2x6k6Uq3AN%2FknBmJlp2Xo6oDPBueICJt8glijsDVFM5LHDHgPp8KrjB4hxB%2BhLeuaDp6krsh%2BuGyN63rUKUxJ1j%2FjfnTgd4mGzrbq4A0uoGD5t1hyZk1%2BN2XpoDljXiOYP1CAsWj51ZzL57L8CB2IidvqskkRSjztm2ys0acWO9H0SxDH6CDjtfUnNxZ4UoMtT7MUh1vk6gzEH%2BBIfpjHG7uhKmP9JIAv0JqO9BIqOiYTroEtw8vfzd7wyB40YrS8lcrVnfshaobcx4OBB9pfdk3YevwwNuxtTNNMhzIwCQNMQS7ACRrKSYR%2BCg1%2BMv4yfwl%2F0Z09B37ZSUvNJXDaaPOWdIrBNtV9Us1ygktbWFgNt2OR16Txz4imGwUE%2BqendRV%2Fwh0R0txhJRWSN8jStRfKboErh7RvVtmHHrBNxs36Fvm7V0ezmovuuLUyAJQVWFJRWbvALpSeHIb6AS0oeNMw9M8%2BvfLtYmtp1LE17cHHOaBGVA%2BpFd4O8AKQAP4taz3WVgka08TS8g65z9Xgks3DZKersdKJ%2B%2BJrG%2Fi3sbAAKbfPdxMGRaSHVFZDeGQnevxZV3%2BfdM21LpGt8KpspVwCFwn96AubrBO9iUvy0iVHyZNIPZ0xzXBXiqA9nJO860JzCEpOq%2BBjqkATjZOCE9i3lP3ZaGxDviDsrA6ON7YYKjG3aenjQYXJhfWPtOu5okw6z8GfG9mcRZMXOOaM2IKVyd0X%2B3HjMpUeKJJHIfc9Sn1Ihc8EhlX8du8m%2BwkDkpDbQ9hlHJje1u6UH1MegDokG%2BDEXbqFTftHd8gxS1l4B5OhuL18DEQA5ADVjVO3hlyx%2BJQ5pKLcxQUTXUrI8SYq409L3QRxxO85DPdo62&X-Amz-Signature=168fd909fdf71d48b469bb8e2bc2fcea963946ef8d7225df0c74d7e644dc9500&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6TZXWZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDjtwtQuOCAomzKnxeBoVaAt5bCgCWZ9rGHIAv1DgQrbQIhAOnR0ckpgAuC8kCYW50OV2gtfZxHp91FNG9McHwX56zpKv8DCHMQABoMNjM3NDIzMTgzODA1Igz8bgNXBfYhe2x6k6Uq3AN%2FknBmJlp2Xo6oDPBueICJt8glijsDVFM5LHDHgPp8KrjB4hxB%2BhLeuaDp6krsh%2BuGyN63rUKUxJ1j%2FjfnTgd4mGzrbq4A0uoGD5t1hyZk1%2BN2XpoDljXiOYP1CAsWj51ZzL57L8CB2IidvqskkRSjztm2ys0acWO9H0SxDH6CDjtfUnNxZ4UoMtT7MUh1vk6gzEH%2BBIfpjHG7uhKmP9JIAv0JqO9BIqOiYTroEtw8vfzd7wyB40YrS8lcrVnfshaobcx4OBB9pfdk3YevwwNuxtTNNMhzIwCQNMQS7ACRrKSYR%2BCg1%2BMv4yfwl%2F0Z09B37ZSUvNJXDaaPOWdIrBNtV9Us1ygktbWFgNt2OR16Txz4imGwUE%2BqendRV%2Fwh0R0txhJRWSN8jStRfKboErh7RvVtmHHrBNxs36Fvm7V0ezmovuuLUyAJQVWFJRWbvALpSeHIb6AS0oeNMw9M8%2BvfLtYmtp1LE17cHHOaBGVA%2BpFd4O8AKQAP4taz3WVgka08TS8g65z9Xgks3DZKersdKJ%2B%2BJrG%2Fi3sbAAKbfPdxMGRaSHVFZDeGQnevxZV3%2BfdM21LpGt8KpspVwCFwn96AubrBO9iUvy0iVHyZNIPZ0xzXBXiqA9nJO860JzCEpOq%2BBjqkATjZOCE9i3lP3ZaGxDviDsrA6ON7YYKjG3aenjQYXJhfWPtOu5okw6z8GfG9mcRZMXOOaM2IKVyd0X%2B3HjMpUeKJJHIfc9Sn1Ihc8EhlX8du8m%2BwkDkpDbQ9hlHJje1u6UH1MegDokG%2BDEXbqFTftHd8gxS1l4B5OhuL18DEQA5ADVjVO3hlyx%2BJQ5pKLcxQUTXUrI8SYq409L3QRxxO85DPdo62&X-Amz-Signature=2a0f37688de3ff6f0b34d7573667c2f819a31b8f0fe48dc4e96726bc196952d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6TZXWZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDjtwtQuOCAomzKnxeBoVaAt5bCgCWZ9rGHIAv1DgQrbQIhAOnR0ckpgAuC8kCYW50OV2gtfZxHp91FNG9McHwX56zpKv8DCHMQABoMNjM3NDIzMTgzODA1Igz8bgNXBfYhe2x6k6Uq3AN%2FknBmJlp2Xo6oDPBueICJt8glijsDVFM5LHDHgPp8KrjB4hxB%2BhLeuaDp6krsh%2BuGyN63rUKUxJ1j%2FjfnTgd4mGzrbq4A0uoGD5t1hyZk1%2BN2XpoDljXiOYP1CAsWj51ZzL57L8CB2IidvqskkRSjztm2ys0acWO9H0SxDH6CDjtfUnNxZ4UoMtT7MUh1vk6gzEH%2BBIfpjHG7uhKmP9JIAv0JqO9BIqOiYTroEtw8vfzd7wyB40YrS8lcrVnfshaobcx4OBB9pfdk3YevwwNuxtTNNMhzIwCQNMQS7ACRrKSYR%2BCg1%2BMv4yfwl%2F0Z09B37ZSUvNJXDaaPOWdIrBNtV9Us1ygktbWFgNt2OR16Txz4imGwUE%2BqendRV%2Fwh0R0txhJRWSN8jStRfKboErh7RvVtmHHrBNxs36Fvm7V0ezmovuuLUyAJQVWFJRWbvALpSeHIb6AS0oeNMw9M8%2BvfLtYmtp1LE17cHHOaBGVA%2BpFd4O8AKQAP4taz3WVgka08TS8g65z9Xgks3DZKersdKJ%2B%2BJrG%2Fi3sbAAKbfPdxMGRaSHVFZDeGQnevxZV3%2BfdM21LpGt8KpspVwCFwn96AubrBO9iUvy0iVHyZNIPZ0xzXBXiqA9nJO860JzCEpOq%2BBjqkATjZOCE9i3lP3ZaGxDviDsrA6ON7YYKjG3aenjQYXJhfWPtOu5okw6z8GfG9mcRZMXOOaM2IKVyd0X%2B3HjMpUeKJJHIfc9Sn1Ihc8EhlX8du8m%2BwkDkpDbQ9hlHJje1u6UH1MegDokG%2BDEXbqFTftHd8gxS1l4B5OhuL18DEQA5ADVjVO3hlyx%2BJQ5pKLcxQUTXUrI8SYq409L3QRxxO85DPdo62&X-Amz-Signature=db326fac381f9fb6ca612eb5e72215762bf614bc5e588b24686f8ec3bfddb61d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
