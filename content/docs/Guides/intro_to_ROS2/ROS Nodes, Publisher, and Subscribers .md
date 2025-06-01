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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPWO7EF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCv3LhnRdnzQUbIw2bs%2B1ZQ3BC35bgAgPLN%2F0%2FnIch3OQIgRN3LRhZmj2vugK9LvPsRU64IOHNklQjCSzhFOYtG2b8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEp3U1MjPIpYAx6XByrcA1q1tzXVhP4WdS1push2VEVxiikgfOZZ8HgMGo5WQegkGaNAFOiU5gO3Wn4p0g0swQpume6UpYXTwrtZipXGf0%2FT8izQg5EtL%2FV7yG26Fwt1HKnypkbUmTju8ZinuSXD%2BQBebXMe5o8ZB%2BaHWVRCRm60L4bTVf9AKJLdqKquQbEEJVZKVE24GJuYvD3ZPiWbwAZm7%2BQZXtrPLnXY1nVwCV7q%2FSlSSmCcfwHUXIh70pma9K3LWvy3%2FwkOU42E%2F33XrNodtfJCbeubk3sCemTv7Jf89Qp7Buv9eno%2By8esr4i5P5TfEfpouUlRfc1V3xmWVGpHvP8KJbitucbDBA9b9Jq5YvSbGDT0PZD9ddfT8CJ25rhsy23E4lqklXsJI70qLcy8rzccwTAMDIOkwHCVf1h1QDJHmitbSfL0e33411qERrdg3mtRXW%2BCsQTLT08I7RN9NOeU4w34rzF0d9skNx7fqGuO9Wp9mA%2B2B9P2eOOVQw%2BiaSjOjY9MWcLvW82C7I5aq8M2wMAUWCj3xJTuZPazsAEKOZINLEEL9X4nQk5MDqU8uAotH8KccADHMBofIcOg6Hy31rvSoy3kDsn5FTf9f8zBtlYUNAdSGD9L2QjxYnge%2FEFPp4OlcEWpMN3e8MEGOqUB2JYmve0c%2BNiuxuWjKvg%2BWfl%2FzXzj44u%2BXrzEy1H3gkm8fHJocgmBh9B5Yj00sJ1wbMS7uKEDNfHVeImbETBwH5FQHI%2BKwM65RBNRm0JnYJFqDvbXJlV03%2BGrUonRvwXv0WONmBbsgFHVYbNQlv4WFt0naPiAdvKN62T%2BgRiSUj1kWz4ES2eAGG4XlepiHFLFfDtjXXhRc8wUT5RVWpH4tDDXGv6Q&X-Amz-Signature=39ecfd7bdb860c7d1332e6cb25df12b922432971cd50db75f8d70ba56bea871a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPWO7EF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCv3LhnRdnzQUbIw2bs%2B1ZQ3BC35bgAgPLN%2F0%2FnIch3OQIgRN3LRhZmj2vugK9LvPsRU64IOHNklQjCSzhFOYtG2b8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEp3U1MjPIpYAx6XByrcA1q1tzXVhP4WdS1push2VEVxiikgfOZZ8HgMGo5WQegkGaNAFOiU5gO3Wn4p0g0swQpume6UpYXTwrtZipXGf0%2FT8izQg5EtL%2FV7yG26Fwt1HKnypkbUmTju8ZinuSXD%2BQBebXMe5o8ZB%2BaHWVRCRm60L4bTVf9AKJLdqKquQbEEJVZKVE24GJuYvD3ZPiWbwAZm7%2BQZXtrPLnXY1nVwCV7q%2FSlSSmCcfwHUXIh70pma9K3LWvy3%2FwkOU42E%2F33XrNodtfJCbeubk3sCemTv7Jf89Qp7Buv9eno%2By8esr4i5P5TfEfpouUlRfc1V3xmWVGpHvP8KJbitucbDBA9b9Jq5YvSbGDT0PZD9ddfT8CJ25rhsy23E4lqklXsJI70qLcy8rzccwTAMDIOkwHCVf1h1QDJHmitbSfL0e33411qERrdg3mtRXW%2BCsQTLT08I7RN9NOeU4w34rzF0d9skNx7fqGuO9Wp9mA%2B2B9P2eOOVQw%2BiaSjOjY9MWcLvW82C7I5aq8M2wMAUWCj3xJTuZPazsAEKOZINLEEL9X4nQk5MDqU8uAotH8KccADHMBofIcOg6Hy31rvSoy3kDsn5FTf9f8zBtlYUNAdSGD9L2QjxYnge%2FEFPp4OlcEWpMN3e8MEGOqUB2JYmve0c%2BNiuxuWjKvg%2BWfl%2FzXzj44u%2BXrzEy1H3gkm8fHJocgmBh9B5Yj00sJ1wbMS7uKEDNfHVeImbETBwH5FQHI%2BKwM65RBNRm0JnYJFqDvbXJlV03%2BGrUonRvwXv0WONmBbsgFHVYbNQlv4WFt0naPiAdvKN62T%2BgRiSUj1kWz4ES2eAGG4XlepiHFLFfDtjXXhRc8wUT5RVWpH4tDDXGv6Q&X-Amz-Signature=b11515de16b08b18fbbaf5f5af83855e79b923f668cc69a179d7c77cb5c0919a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPWO7EF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCv3LhnRdnzQUbIw2bs%2B1ZQ3BC35bgAgPLN%2F0%2FnIch3OQIgRN3LRhZmj2vugK9LvPsRU64IOHNklQjCSzhFOYtG2b8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEp3U1MjPIpYAx6XByrcA1q1tzXVhP4WdS1push2VEVxiikgfOZZ8HgMGo5WQegkGaNAFOiU5gO3Wn4p0g0swQpume6UpYXTwrtZipXGf0%2FT8izQg5EtL%2FV7yG26Fwt1HKnypkbUmTju8ZinuSXD%2BQBebXMe5o8ZB%2BaHWVRCRm60L4bTVf9AKJLdqKquQbEEJVZKVE24GJuYvD3ZPiWbwAZm7%2BQZXtrPLnXY1nVwCV7q%2FSlSSmCcfwHUXIh70pma9K3LWvy3%2FwkOU42E%2F33XrNodtfJCbeubk3sCemTv7Jf89Qp7Buv9eno%2By8esr4i5P5TfEfpouUlRfc1V3xmWVGpHvP8KJbitucbDBA9b9Jq5YvSbGDT0PZD9ddfT8CJ25rhsy23E4lqklXsJI70qLcy8rzccwTAMDIOkwHCVf1h1QDJHmitbSfL0e33411qERrdg3mtRXW%2BCsQTLT08I7RN9NOeU4w34rzF0d9skNx7fqGuO9Wp9mA%2B2B9P2eOOVQw%2BiaSjOjY9MWcLvW82C7I5aq8M2wMAUWCj3xJTuZPazsAEKOZINLEEL9X4nQk5MDqU8uAotH8KccADHMBofIcOg6Hy31rvSoy3kDsn5FTf9f8zBtlYUNAdSGD9L2QjxYnge%2FEFPp4OlcEWpMN3e8MEGOqUB2JYmve0c%2BNiuxuWjKvg%2BWfl%2FzXzj44u%2BXrzEy1H3gkm8fHJocgmBh9B5Yj00sJ1wbMS7uKEDNfHVeImbETBwH5FQHI%2BKwM65RBNRm0JnYJFqDvbXJlV03%2BGrUonRvwXv0WONmBbsgFHVYbNQlv4WFt0naPiAdvKN62T%2BgRiSUj1kWz4ES2eAGG4XlepiHFLFfDtjXXhRc8wUT5RVWpH4tDDXGv6Q&X-Amz-Signature=a50e2a156aebb7535e93ee876a0522511dfb1c1bf22a24089373a1153d194407&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPWO7EF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCv3LhnRdnzQUbIw2bs%2B1ZQ3BC35bgAgPLN%2F0%2FnIch3OQIgRN3LRhZmj2vugK9LvPsRU64IOHNklQjCSzhFOYtG2b8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEp3U1MjPIpYAx6XByrcA1q1tzXVhP4WdS1push2VEVxiikgfOZZ8HgMGo5WQegkGaNAFOiU5gO3Wn4p0g0swQpume6UpYXTwrtZipXGf0%2FT8izQg5EtL%2FV7yG26Fwt1HKnypkbUmTju8ZinuSXD%2BQBebXMe5o8ZB%2BaHWVRCRm60L4bTVf9AKJLdqKquQbEEJVZKVE24GJuYvD3ZPiWbwAZm7%2BQZXtrPLnXY1nVwCV7q%2FSlSSmCcfwHUXIh70pma9K3LWvy3%2FwkOU42E%2F33XrNodtfJCbeubk3sCemTv7Jf89Qp7Buv9eno%2By8esr4i5P5TfEfpouUlRfc1V3xmWVGpHvP8KJbitucbDBA9b9Jq5YvSbGDT0PZD9ddfT8CJ25rhsy23E4lqklXsJI70qLcy8rzccwTAMDIOkwHCVf1h1QDJHmitbSfL0e33411qERrdg3mtRXW%2BCsQTLT08I7RN9NOeU4w34rzF0d9skNx7fqGuO9Wp9mA%2B2B9P2eOOVQw%2BiaSjOjY9MWcLvW82C7I5aq8M2wMAUWCj3xJTuZPazsAEKOZINLEEL9X4nQk5MDqU8uAotH8KccADHMBofIcOg6Hy31rvSoy3kDsn5FTf9f8zBtlYUNAdSGD9L2QjxYnge%2FEFPp4OlcEWpMN3e8MEGOqUB2JYmve0c%2BNiuxuWjKvg%2BWfl%2FzXzj44u%2BXrzEy1H3gkm8fHJocgmBh9B5Yj00sJ1wbMS7uKEDNfHVeImbETBwH5FQHI%2BKwM65RBNRm0JnYJFqDvbXJlV03%2BGrUonRvwXv0WONmBbsgFHVYbNQlv4WFt0naPiAdvKN62T%2BgRiSUj1kWz4ES2eAGG4XlepiHFLFfDtjXXhRc8wUT5RVWpH4tDDXGv6Q&X-Amz-Signature=1e07345964b7d7b8be6d806b96c4421c16171167039f9925f1167a2762c32414&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPWO7EF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCv3LhnRdnzQUbIw2bs%2B1ZQ3BC35bgAgPLN%2F0%2FnIch3OQIgRN3LRhZmj2vugK9LvPsRU64IOHNklQjCSzhFOYtG2b8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEp3U1MjPIpYAx6XByrcA1q1tzXVhP4WdS1push2VEVxiikgfOZZ8HgMGo5WQegkGaNAFOiU5gO3Wn4p0g0swQpume6UpYXTwrtZipXGf0%2FT8izQg5EtL%2FV7yG26Fwt1HKnypkbUmTju8ZinuSXD%2BQBebXMe5o8ZB%2BaHWVRCRm60L4bTVf9AKJLdqKquQbEEJVZKVE24GJuYvD3ZPiWbwAZm7%2BQZXtrPLnXY1nVwCV7q%2FSlSSmCcfwHUXIh70pma9K3LWvy3%2FwkOU42E%2F33XrNodtfJCbeubk3sCemTv7Jf89Qp7Buv9eno%2By8esr4i5P5TfEfpouUlRfc1V3xmWVGpHvP8KJbitucbDBA9b9Jq5YvSbGDT0PZD9ddfT8CJ25rhsy23E4lqklXsJI70qLcy8rzccwTAMDIOkwHCVf1h1QDJHmitbSfL0e33411qERrdg3mtRXW%2BCsQTLT08I7RN9NOeU4w34rzF0d9skNx7fqGuO9Wp9mA%2B2B9P2eOOVQw%2BiaSjOjY9MWcLvW82C7I5aq8M2wMAUWCj3xJTuZPazsAEKOZINLEEL9X4nQk5MDqU8uAotH8KccADHMBofIcOg6Hy31rvSoy3kDsn5FTf9f8zBtlYUNAdSGD9L2QjxYnge%2FEFPp4OlcEWpMN3e8MEGOqUB2JYmve0c%2BNiuxuWjKvg%2BWfl%2FzXzj44u%2BXrzEy1H3gkm8fHJocgmBh9B5Yj00sJ1wbMS7uKEDNfHVeImbETBwH5FQHI%2BKwM65RBNRm0JnYJFqDvbXJlV03%2BGrUonRvwXv0WONmBbsgFHVYbNQlv4WFt0naPiAdvKN62T%2BgRiSUj1kWz4ES2eAGG4XlepiHFLFfDtjXXhRc8wUT5RVWpH4tDDXGv6Q&X-Amz-Signature=56b8d67e80e52365c1dbd80cf04a135c62ad524651bdf2d88e40828fe30f55da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPWO7EF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCv3LhnRdnzQUbIw2bs%2B1ZQ3BC35bgAgPLN%2F0%2FnIch3OQIgRN3LRhZmj2vugK9LvPsRU64IOHNklQjCSzhFOYtG2b8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEp3U1MjPIpYAx6XByrcA1q1tzXVhP4WdS1push2VEVxiikgfOZZ8HgMGo5WQegkGaNAFOiU5gO3Wn4p0g0swQpume6UpYXTwrtZipXGf0%2FT8izQg5EtL%2FV7yG26Fwt1HKnypkbUmTju8ZinuSXD%2BQBebXMe5o8ZB%2BaHWVRCRm60L4bTVf9AKJLdqKquQbEEJVZKVE24GJuYvD3ZPiWbwAZm7%2BQZXtrPLnXY1nVwCV7q%2FSlSSmCcfwHUXIh70pma9K3LWvy3%2FwkOU42E%2F33XrNodtfJCbeubk3sCemTv7Jf89Qp7Buv9eno%2By8esr4i5P5TfEfpouUlRfc1V3xmWVGpHvP8KJbitucbDBA9b9Jq5YvSbGDT0PZD9ddfT8CJ25rhsy23E4lqklXsJI70qLcy8rzccwTAMDIOkwHCVf1h1QDJHmitbSfL0e33411qERrdg3mtRXW%2BCsQTLT08I7RN9NOeU4w34rzF0d9skNx7fqGuO9Wp9mA%2B2B9P2eOOVQw%2BiaSjOjY9MWcLvW82C7I5aq8M2wMAUWCj3xJTuZPazsAEKOZINLEEL9X4nQk5MDqU8uAotH8KccADHMBofIcOg6Hy31rvSoy3kDsn5FTf9f8zBtlYUNAdSGD9L2QjxYnge%2FEFPp4OlcEWpMN3e8MEGOqUB2JYmve0c%2BNiuxuWjKvg%2BWfl%2FzXzj44u%2BXrzEy1H3gkm8fHJocgmBh9B5Yj00sJ1wbMS7uKEDNfHVeImbETBwH5FQHI%2BKwM65RBNRm0JnYJFqDvbXJlV03%2BGrUonRvwXv0WONmBbsgFHVYbNQlv4WFt0naPiAdvKN62T%2BgRiSUj1kWz4ES2eAGG4XlepiHFLFfDtjXXhRc8wUT5RVWpH4tDDXGv6Q&X-Amz-Signature=380d58cf639c74dbb6e7f51d56842b1132e969ee19be8445721f543dc036eb51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPWO7EF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCv3LhnRdnzQUbIw2bs%2B1ZQ3BC35bgAgPLN%2F0%2FnIch3OQIgRN3LRhZmj2vugK9LvPsRU64IOHNklQjCSzhFOYtG2b8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEp3U1MjPIpYAx6XByrcA1q1tzXVhP4WdS1push2VEVxiikgfOZZ8HgMGo5WQegkGaNAFOiU5gO3Wn4p0g0swQpume6UpYXTwrtZipXGf0%2FT8izQg5EtL%2FV7yG26Fwt1HKnypkbUmTju8ZinuSXD%2BQBebXMe5o8ZB%2BaHWVRCRm60L4bTVf9AKJLdqKquQbEEJVZKVE24GJuYvD3ZPiWbwAZm7%2BQZXtrPLnXY1nVwCV7q%2FSlSSmCcfwHUXIh70pma9K3LWvy3%2FwkOU42E%2F33XrNodtfJCbeubk3sCemTv7Jf89Qp7Buv9eno%2By8esr4i5P5TfEfpouUlRfc1V3xmWVGpHvP8KJbitucbDBA9b9Jq5YvSbGDT0PZD9ddfT8CJ25rhsy23E4lqklXsJI70qLcy8rzccwTAMDIOkwHCVf1h1QDJHmitbSfL0e33411qERrdg3mtRXW%2BCsQTLT08I7RN9NOeU4w34rzF0d9skNx7fqGuO9Wp9mA%2B2B9P2eOOVQw%2BiaSjOjY9MWcLvW82C7I5aq8M2wMAUWCj3xJTuZPazsAEKOZINLEEL9X4nQk5MDqU8uAotH8KccADHMBofIcOg6Hy31rvSoy3kDsn5FTf9f8zBtlYUNAdSGD9L2QjxYnge%2FEFPp4OlcEWpMN3e8MEGOqUB2JYmve0c%2BNiuxuWjKvg%2BWfl%2FzXzj44u%2BXrzEy1H3gkm8fHJocgmBh9B5Yj00sJ1wbMS7uKEDNfHVeImbETBwH5FQHI%2BKwM65RBNRm0JnYJFqDvbXJlV03%2BGrUonRvwXv0WONmBbsgFHVYbNQlv4WFt0naPiAdvKN62T%2BgRiSUj1kWz4ES2eAGG4XlepiHFLFfDtjXXhRc8wUT5RVWpH4tDDXGv6Q&X-Amz-Signature=c97f79055d42b1cac4a66487f94b19acb8e7532946e89465ee993167e580a59c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPWO7EF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCv3LhnRdnzQUbIw2bs%2B1ZQ3BC35bgAgPLN%2F0%2FnIch3OQIgRN3LRhZmj2vugK9LvPsRU64IOHNklQjCSzhFOYtG2b8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEp3U1MjPIpYAx6XByrcA1q1tzXVhP4WdS1push2VEVxiikgfOZZ8HgMGo5WQegkGaNAFOiU5gO3Wn4p0g0swQpume6UpYXTwrtZipXGf0%2FT8izQg5EtL%2FV7yG26Fwt1HKnypkbUmTju8ZinuSXD%2BQBebXMe5o8ZB%2BaHWVRCRm60L4bTVf9AKJLdqKquQbEEJVZKVE24GJuYvD3ZPiWbwAZm7%2BQZXtrPLnXY1nVwCV7q%2FSlSSmCcfwHUXIh70pma9K3LWvy3%2FwkOU42E%2F33XrNodtfJCbeubk3sCemTv7Jf89Qp7Buv9eno%2By8esr4i5P5TfEfpouUlRfc1V3xmWVGpHvP8KJbitucbDBA9b9Jq5YvSbGDT0PZD9ddfT8CJ25rhsy23E4lqklXsJI70qLcy8rzccwTAMDIOkwHCVf1h1QDJHmitbSfL0e33411qERrdg3mtRXW%2BCsQTLT08I7RN9NOeU4w34rzF0d9skNx7fqGuO9Wp9mA%2B2B9P2eOOVQw%2BiaSjOjY9MWcLvW82C7I5aq8M2wMAUWCj3xJTuZPazsAEKOZINLEEL9X4nQk5MDqU8uAotH8KccADHMBofIcOg6Hy31rvSoy3kDsn5FTf9f8zBtlYUNAdSGD9L2QjxYnge%2FEFPp4OlcEWpMN3e8MEGOqUB2JYmve0c%2BNiuxuWjKvg%2BWfl%2FzXzj44u%2BXrzEy1H3gkm8fHJocgmBh9B5Yj00sJ1wbMS7uKEDNfHVeImbETBwH5FQHI%2BKwM65RBNRm0JnYJFqDvbXJlV03%2BGrUonRvwXv0WONmBbsgFHVYbNQlv4WFt0naPiAdvKN62T%2BgRiSUj1kWz4ES2eAGG4XlepiHFLFfDtjXXhRc8wUT5RVWpH4tDDXGv6Q&X-Amz-Signature=f3c656e444e3ac125d5919d3707886d86d09e4b34f089886cdebd47d9069dd8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
