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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QFXX42%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFAwppo6NVoPHChlfby5ng0eKdLHWPJKAoQYsClqVMiiAiAYk1YNigvj0Gro9qrY7XhzVhm5LutqMG%2BLlR0F7QUWLCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMdq80lloqLFkHKOSYKtwDSb1c4L8Opf44vXWnkrznRlziVINaJnKYywPre9udTollkyuZCCdZBMxK9JpE8oAo4UGZhGXbzgQVXeTGVdz0wFDNZxCbw9kWJ2IpwrVwlgN%2FJSPHNT9UdNGU879B%2FfUHLKrU8CR0ABFBV58UqcvkLGQs4D4%2F1zWXCcGopYsqGE94CNie5w18KMJ6Zk7otaJOSv6bG%2FrawIC7kWLxmrxuqqSXtb%2F9AC27ON9pO%2B6oyaG61vBRcQgxBXQQkT4dfHMh8m4fRMpelE%2FNIEq9rsYraxNBq1SXELlefBlxY2bJ4QX3cPszL9M%2FN%2BnF14d1J8hieyutT8q%2BnOaqC9fW8T%2BzRXISSY1LBaNzrldej25eOsR0EimuM%2FAKj4hHG%2FlCqawC%2FwObkdw8DQDEeWj4SjkcyHlv9bPXXan9YdDpWocaZi%2FgR6jwALrPUlbgQF1Jhk401Iouh%2BIh0sfDOXPlNMagVV1zai9TpSmpw%2FAdw6Som2Hy%2F7uLc30xmsHYOwZK3BcRqY2NJDdTZ774KsLewE7vod6z4JGQ5UVIXToBFq0ynPZTVssSiiIiz9QlaMj5Tu6cYrP4vlSzxyPmrUGXZzNGAzxCJkP7SqZNSPZz%2B1HX9arNAr5x5XjmBqUY45ow7JPewwY6pgF%2Fm8YRlgWXjrZLFfrQafZeDxZ9X3QdH4rBsDuLT0pdQ%2B8oaBMga%2Fdgh2B2EAXy56s5GTSn%2B8n1wmg1AUTHbjHmac1puDw%2BNkAp2lvn5ImTbBnZkdffpBCPgXg61UT%2BhYOGYzZ5GMsgVHl90dP6iXa5A3TldC%2BB84J5YQT5lnOQOqp0xG4JVkgpFxg%2F0N3jzLPM3ho1CqCVTV4rnv7IEt3ZX%2Bn5cEFA&X-Amz-Signature=eeab7f34b73a6b606347eddd0a9db3b8ed030cf01701e096c7177593e645cabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QFXX42%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFAwppo6NVoPHChlfby5ng0eKdLHWPJKAoQYsClqVMiiAiAYk1YNigvj0Gro9qrY7XhzVhm5LutqMG%2BLlR0F7QUWLCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMdq80lloqLFkHKOSYKtwDSb1c4L8Opf44vXWnkrznRlziVINaJnKYywPre9udTollkyuZCCdZBMxK9JpE8oAo4UGZhGXbzgQVXeTGVdz0wFDNZxCbw9kWJ2IpwrVwlgN%2FJSPHNT9UdNGU879B%2FfUHLKrU8CR0ABFBV58UqcvkLGQs4D4%2F1zWXCcGopYsqGE94CNie5w18KMJ6Zk7otaJOSv6bG%2FrawIC7kWLxmrxuqqSXtb%2F9AC27ON9pO%2B6oyaG61vBRcQgxBXQQkT4dfHMh8m4fRMpelE%2FNIEq9rsYraxNBq1SXELlefBlxY2bJ4QX3cPszL9M%2FN%2BnF14d1J8hieyutT8q%2BnOaqC9fW8T%2BzRXISSY1LBaNzrldej25eOsR0EimuM%2FAKj4hHG%2FlCqawC%2FwObkdw8DQDEeWj4SjkcyHlv9bPXXan9YdDpWocaZi%2FgR6jwALrPUlbgQF1Jhk401Iouh%2BIh0sfDOXPlNMagVV1zai9TpSmpw%2FAdw6Som2Hy%2F7uLc30xmsHYOwZK3BcRqY2NJDdTZ774KsLewE7vod6z4JGQ5UVIXToBFq0ynPZTVssSiiIiz9QlaMj5Tu6cYrP4vlSzxyPmrUGXZzNGAzxCJkP7SqZNSPZz%2B1HX9arNAr5x5XjmBqUY45ow7JPewwY6pgF%2Fm8YRlgWXjrZLFfrQafZeDxZ9X3QdH4rBsDuLT0pdQ%2B8oaBMga%2Fdgh2B2EAXy56s5GTSn%2B8n1wmg1AUTHbjHmac1puDw%2BNkAp2lvn5ImTbBnZkdffpBCPgXg61UT%2BhYOGYzZ5GMsgVHl90dP6iXa5A3TldC%2BB84J5YQT5lnOQOqp0xG4JVkgpFxg%2F0N3jzLPM3ho1CqCVTV4rnv7IEt3ZX%2Bn5cEFA&X-Amz-Signature=532d32fc78e99394676a392a0cf97f26b6dc90e26034e10641284b2e9eeaa2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QFXX42%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFAwppo6NVoPHChlfby5ng0eKdLHWPJKAoQYsClqVMiiAiAYk1YNigvj0Gro9qrY7XhzVhm5LutqMG%2BLlR0F7QUWLCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMdq80lloqLFkHKOSYKtwDSb1c4L8Opf44vXWnkrznRlziVINaJnKYywPre9udTollkyuZCCdZBMxK9JpE8oAo4UGZhGXbzgQVXeTGVdz0wFDNZxCbw9kWJ2IpwrVwlgN%2FJSPHNT9UdNGU879B%2FfUHLKrU8CR0ABFBV58UqcvkLGQs4D4%2F1zWXCcGopYsqGE94CNie5w18KMJ6Zk7otaJOSv6bG%2FrawIC7kWLxmrxuqqSXtb%2F9AC27ON9pO%2B6oyaG61vBRcQgxBXQQkT4dfHMh8m4fRMpelE%2FNIEq9rsYraxNBq1SXELlefBlxY2bJ4QX3cPszL9M%2FN%2BnF14d1J8hieyutT8q%2BnOaqC9fW8T%2BzRXISSY1LBaNzrldej25eOsR0EimuM%2FAKj4hHG%2FlCqawC%2FwObkdw8DQDEeWj4SjkcyHlv9bPXXan9YdDpWocaZi%2FgR6jwALrPUlbgQF1Jhk401Iouh%2BIh0sfDOXPlNMagVV1zai9TpSmpw%2FAdw6Som2Hy%2F7uLc30xmsHYOwZK3BcRqY2NJDdTZ774KsLewE7vod6z4JGQ5UVIXToBFq0ynPZTVssSiiIiz9QlaMj5Tu6cYrP4vlSzxyPmrUGXZzNGAzxCJkP7SqZNSPZz%2B1HX9arNAr5x5XjmBqUY45ow7JPewwY6pgF%2Fm8YRlgWXjrZLFfrQafZeDxZ9X3QdH4rBsDuLT0pdQ%2B8oaBMga%2Fdgh2B2EAXy56s5GTSn%2B8n1wmg1AUTHbjHmac1puDw%2BNkAp2lvn5ImTbBnZkdffpBCPgXg61UT%2BhYOGYzZ5GMsgVHl90dP6iXa5A3TldC%2BB84J5YQT5lnOQOqp0xG4JVkgpFxg%2F0N3jzLPM3ho1CqCVTV4rnv7IEt3ZX%2Bn5cEFA&X-Amz-Signature=d57172ce0cceea8b7d4a16b69b2d005a16d7a8294f5a0907c5ec3e115bfb29b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QFXX42%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFAwppo6NVoPHChlfby5ng0eKdLHWPJKAoQYsClqVMiiAiAYk1YNigvj0Gro9qrY7XhzVhm5LutqMG%2BLlR0F7QUWLCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMdq80lloqLFkHKOSYKtwDSb1c4L8Opf44vXWnkrznRlziVINaJnKYywPre9udTollkyuZCCdZBMxK9JpE8oAo4UGZhGXbzgQVXeTGVdz0wFDNZxCbw9kWJ2IpwrVwlgN%2FJSPHNT9UdNGU879B%2FfUHLKrU8CR0ABFBV58UqcvkLGQs4D4%2F1zWXCcGopYsqGE94CNie5w18KMJ6Zk7otaJOSv6bG%2FrawIC7kWLxmrxuqqSXtb%2F9AC27ON9pO%2B6oyaG61vBRcQgxBXQQkT4dfHMh8m4fRMpelE%2FNIEq9rsYraxNBq1SXELlefBlxY2bJ4QX3cPszL9M%2FN%2BnF14d1J8hieyutT8q%2BnOaqC9fW8T%2BzRXISSY1LBaNzrldej25eOsR0EimuM%2FAKj4hHG%2FlCqawC%2FwObkdw8DQDEeWj4SjkcyHlv9bPXXan9YdDpWocaZi%2FgR6jwALrPUlbgQF1Jhk401Iouh%2BIh0sfDOXPlNMagVV1zai9TpSmpw%2FAdw6Som2Hy%2F7uLc30xmsHYOwZK3BcRqY2NJDdTZ774KsLewE7vod6z4JGQ5UVIXToBFq0ynPZTVssSiiIiz9QlaMj5Tu6cYrP4vlSzxyPmrUGXZzNGAzxCJkP7SqZNSPZz%2B1HX9arNAr5x5XjmBqUY45ow7JPewwY6pgF%2Fm8YRlgWXjrZLFfrQafZeDxZ9X3QdH4rBsDuLT0pdQ%2B8oaBMga%2Fdgh2B2EAXy56s5GTSn%2B8n1wmg1AUTHbjHmac1puDw%2BNkAp2lvn5ImTbBnZkdffpBCPgXg61UT%2BhYOGYzZ5GMsgVHl90dP6iXa5A3TldC%2BB84J5YQT5lnOQOqp0xG4JVkgpFxg%2F0N3jzLPM3ho1CqCVTV4rnv7IEt3ZX%2Bn5cEFA&X-Amz-Signature=cd9c4197b4a7f4c6fc4a0940e832ab4e671a2f7afadaaed088db4408518837c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QFXX42%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFAwppo6NVoPHChlfby5ng0eKdLHWPJKAoQYsClqVMiiAiAYk1YNigvj0Gro9qrY7XhzVhm5LutqMG%2BLlR0F7QUWLCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMdq80lloqLFkHKOSYKtwDSb1c4L8Opf44vXWnkrznRlziVINaJnKYywPre9udTollkyuZCCdZBMxK9JpE8oAo4UGZhGXbzgQVXeTGVdz0wFDNZxCbw9kWJ2IpwrVwlgN%2FJSPHNT9UdNGU879B%2FfUHLKrU8CR0ABFBV58UqcvkLGQs4D4%2F1zWXCcGopYsqGE94CNie5w18KMJ6Zk7otaJOSv6bG%2FrawIC7kWLxmrxuqqSXtb%2F9AC27ON9pO%2B6oyaG61vBRcQgxBXQQkT4dfHMh8m4fRMpelE%2FNIEq9rsYraxNBq1SXELlefBlxY2bJ4QX3cPszL9M%2FN%2BnF14d1J8hieyutT8q%2BnOaqC9fW8T%2BzRXISSY1LBaNzrldej25eOsR0EimuM%2FAKj4hHG%2FlCqawC%2FwObkdw8DQDEeWj4SjkcyHlv9bPXXan9YdDpWocaZi%2FgR6jwALrPUlbgQF1Jhk401Iouh%2BIh0sfDOXPlNMagVV1zai9TpSmpw%2FAdw6Som2Hy%2F7uLc30xmsHYOwZK3BcRqY2NJDdTZ774KsLewE7vod6z4JGQ5UVIXToBFq0ynPZTVssSiiIiz9QlaMj5Tu6cYrP4vlSzxyPmrUGXZzNGAzxCJkP7SqZNSPZz%2B1HX9arNAr5x5XjmBqUY45ow7JPewwY6pgF%2Fm8YRlgWXjrZLFfrQafZeDxZ9X3QdH4rBsDuLT0pdQ%2B8oaBMga%2Fdgh2B2EAXy56s5GTSn%2B8n1wmg1AUTHbjHmac1puDw%2BNkAp2lvn5ImTbBnZkdffpBCPgXg61UT%2BhYOGYzZ5GMsgVHl90dP6iXa5A3TldC%2BB84J5YQT5lnOQOqp0xG4JVkgpFxg%2F0N3jzLPM3ho1CqCVTV4rnv7IEt3ZX%2Bn5cEFA&X-Amz-Signature=655c9c82a0b645c3f2b3a7085d466a43aeb82066ffe2498347f3c19e527bd4c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QFXX42%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFAwppo6NVoPHChlfby5ng0eKdLHWPJKAoQYsClqVMiiAiAYk1YNigvj0Gro9qrY7XhzVhm5LutqMG%2BLlR0F7QUWLCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMdq80lloqLFkHKOSYKtwDSb1c4L8Opf44vXWnkrznRlziVINaJnKYywPre9udTollkyuZCCdZBMxK9JpE8oAo4UGZhGXbzgQVXeTGVdz0wFDNZxCbw9kWJ2IpwrVwlgN%2FJSPHNT9UdNGU879B%2FfUHLKrU8CR0ABFBV58UqcvkLGQs4D4%2F1zWXCcGopYsqGE94CNie5w18KMJ6Zk7otaJOSv6bG%2FrawIC7kWLxmrxuqqSXtb%2F9AC27ON9pO%2B6oyaG61vBRcQgxBXQQkT4dfHMh8m4fRMpelE%2FNIEq9rsYraxNBq1SXELlefBlxY2bJ4QX3cPszL9M%2FN%2BnF14d1J8hieyutT8q%2BnOaqC9fW8T%2BzRXISSY1LBaNzrldej25eOsR0EimuM%2FAKj4hHG%2FlCqawC%2FwObkdw8DQDEeWj4SjkcyHlv9bPXXan9YdDpWocaZi%2FgR6jwALrPUlbgQF1Jhk401Iouh%2BIh0sfDOXPlNMagVV1zai9TpSmpw%2FAdw6Som2Hy%2F7uLc30xmsHYOwZK3BcRqY2NJDdTZ774KsLewE7vod6z4JGQ5UVIXToBFq0ynPZTVssSiiIiz9QlaMj5Tu6cYrP4vlSzxyPmrUGXZzNGAzxCJkP7SqZNSPZz%2B1HX9arNAr5x5XjmBqUY45ow7JPewwY6pgF%2Fm8YRlgWXjrZLFfrQafZeDxZ9X3QdH4rBsDuLT0pdQ%2B8oaBMga%2Fdgh2B2EAXy56s5GTSn%2B8n1wmg1AUTHbjHmac1puDw%2BNkAp2lvn5ImTbBnZkdffpBCPgXg61UT%2BhYOGYzZ5GMsgVHl90dP6iXa5A3TldC%2BB84J5YQT5lnOQOqp0xG4JVkgpFxg%2F0N3jzLPM3ho1CqCVTV4rnv7IEt3ZX%2Bn5cEFA&X-Amz-Signature=e679131b2ab8c2cf49a04ee453bdb025ec8de3395e99ac02c1efe1217bc8e0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QFXX42%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFAwppo6NVoPHChlfby5ng0eKdLHWPJKAoQYsClqVMiiAiAYk1YNigvj0Gro9qrY7XhzVhm5LutqMG%2BLlR0F7QUWLCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMdq80lloqLFkHKOSYKtwDSb1c4L8Opf44vXWnkrznRlziVINaJnKYywPre9udTollkyuZCCdZBMxK9JpE8oAo4UGZhGXbzgQVXeTGVdz0wFDNZxCbw9kWJ2IpwrVwlgN%2FJSPHNT9UdNGU879B%2FfUHLKrU8CR0ABFBV58UqcvkLGQs4D4%2F1zWXCcGopYsqGE94CNie5w18KMJ6Zk7otaJOSv6bG%2FrawIC7kWLxmrxuqqSXtb%2F9AC27ON9pO%2B6oyaG61vBRcQgxBXQQkT4dfHMh8m4fRMpelE%2FNIEq9rsYraxNBq1SXELlefBlxY2bJ4QX3cPszL9M%2FN%2BnF14d1J8hieyutT8q%2BnOaqC9fW8T%2BzRXISSY1LBaNzrldej25eOsR0EimuM%2FAKj4hHG%2FlCqawC%2FwObkdw8DQDEeWj4SjkcyHlv9bPXXan9YdDpWocaZi%2FgR6jwALrPUlbgQF1Jhk401Iouh%2BIh0sfDOXPlNMagVV1zai9TpSmpw%2FAdw6Som2Hy%2F7uLc30xmsHYOwZK3BcRqY2NJDdTZ774KsLewE7vod6z4JGQ5UVIXToBFq0ynPZTVssSiiIiz9QlaMj5Tu6cYrP4vlSzxyPmrUGXZzNGAzxCJkP7SqZNSPZz%2B1HX9arNAr5x5XjmBqUY45ow7JPewwY6pgF%2Fm8YRlgWXjrZLFfrQafZeDxZ9X3QdH4rBsDuLT0pdQ%2B8oaBMga%2Fdgh2B2EAXy56s5GTSn%2B8n1wmg1AUTHbjHmac1puDw%2BNkAp2lvn5ImTbBnZkdffpBCPgXg61UT%2BhYOGYzZ5GMsgVHl90dP6iXa5A3TldC%2BB84J5YQT5lnOQOqp0xG4JVkgpFxg%2F0N3jzLPM3ho1CqCVTV4rnv7IEt3ZX%2Bn5cEFA&X-Amz-Signature=3a93be3f971267b415891cf584e9958540f998114ecab7583de5d78683fb3c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QFXX42%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFAwppo6NVoPHChlfby5ng0eKdLHWPJKAoQYsClqVMiiAiAYk1YNigvj0Gro9qrY7XhzVhm5LutqMG%2BLlR0F7QUWLCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMdq80lloqLFkHKOSYKtwDSb1c4L8Opf44vXWnkrznRlziVINaJnKYywPre9udTollkyuZCCdZBMxK9JpE8oAo4UGZhGXbzgQVXeTGVdz0wFDNZxCbw9kWJ2IpwrVwlgN%2FJSPHNT9UdNGU879B%2FfUHLKrU8CR0ABFBV58UqcvkLGQs4D4%2F1zWXCcGopYsqGE94CNie5w18KMJ6Zk7otaJOSv6bG%2FrawIC7kWLxmrxuqqSXtb%2F9AC27ON9pO%2B6oyaG61vBRcQgxBXQQkT4dfHMh8m4fRMpelE%2FNIEq9rsYraxNBq1SXELlefBlxY2bJ4QX3cPszL9M%2FN%2BnF14d1J8hieyutT8q%2BnOaqC9fW8T%2BzRXISSY1LBaNzrldej25eOsR0EimuM%2FAKj4hHG%2FlCqawC%2FwObkdw8DQDEeWj4SjkcyHlv9bPXXan9YdDpWocaZi%2FgR6jwALrPUlbgQF1Jhk401Iouh%2BIh0sfDOXPlNMagVV1zai9TpSmpw%2FAdw6Som2Hy%2F7uLc30xmsHYOwZK3BcRqY2NJDdTZ774KsLewE7vod6z4JGQ5UVIXToBFq0ynPZTVssSiiIiz9QlaMj5Tu6cYrP4vlSzxyPmrUGXZzNGAzxCJkP7SqZNSPZz%2B1HX9arNAr5x5XjmBqUY45ow7JPewwY6pgF%2Fm8YRlgWXjrZLFfrQafZeDxZ9X3QdH4rBsDuLT0pdQ%2B8oaBMga%2Fdgh2B2EAXy56s5GTSn%2B8n1wmg1AUTHbjHmac1puDw%2BNkAp2lvn5ImTbBnZkdffpBCPgXg61UT%2BhYOGYzZ5GMsgVHl90dP6iXa5A3TldC%2BB84J5YQT5lnOQOqp0xG4JVkgpFxg%2F0N3jzLPM3ho1CqCVTV4rnv7IEt3ZX%2Bn5cEFA&X-Amz-Signature=ab6a5dfb7d56a664a6f145bbfd2f277e8d77d6703b778ef9e2a0f5508fd1db3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
