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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7HJ6V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT32OWGHwOTeDi6RUL41ziH2BOYZYgt57nEgujHAkDWAiA3SH026b2o%2FCb%2FxKTpLJUe9rQL1kwIySdbCQNvxS0zMir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMlzORy1Ox7iYyRoBGKtwDwXZLWKFlNwiFh%2FEKdt%2BPj1mZp1%2FroiTOhJF3eH79261iVYw5%2BguxVPhqCug3sFX4r6rtXOInPTPo%2FmJvUQF1Gm9dDCCu02gZAWbu2ixKFWm0ESvOVZorG5wtje8%2Fi5vhCbwq0ySRrsvgsv2%2B56FcyaE5S7%2BbLxEoMPlFGhyk1bVRD9a1IZtiDtLy2iQvmL0Syo5g2sWiwcPprarvjqMVbJZoHgw8q%2B0lR18QF4rP995dvdtpuMpr5rgw0ba7lTtYgAHPQURmI83MhdzJcw%2ByuA4aSOfvUvJC0qOnb435oEE2VpEPhty1QlhhnF84fWf8zd5NMej1xqJ8g%2Ff4Vbj2vl4k01Vrr2melCsX1q4WFQUKKA0PrPWMAaet4hBg6fiu6p4%2FHsMs%2ByqIHigA2lzc%2F%2FmUcp5c%2FsvpXlptwMZ5C5%2FkPpkvKvL6qsEhpD9rnkw2WV6uAPvRX2zBsdNQFcOjkOHlYmFbV7lmpnAAE8aWM932zaetD7pK3piuPlxMpcIHykwocpoOpel7IDp4GJUknU73r9D0F4GW8FKqI8uPxrx%2FE2suxemwQHl%2Fsgkdn2vnbZJa0PVbW5RmW4L6Ikap%2BKUrSB%2FPvtfQ8VP7okGL6ppIK%2Fhv3N2T9punA%2FswgqLKvwY6pgF2Rn5AH8%2F0vPyQlaE8PqX02BPAGeJLY8gjgCmXej%2FGWZ48YIhT2XtCJ4sYj%2F3cYhvNedv3IW%2BMn%2BygdFmQdlkWx92c6wG%2BnK4Ckk5fOFsKV4i%2FZT15xlkFyoRRfeLvMbfC%2Fpm7HEyUqsUGVS4N2XN8ZKogGytjR%2B4UKJg0I53xmX5IG%2FRPMPSTxG6mz4b%2BmBgWKcxdK9X9HN9hcLThk68Jq4bSBsO1&X-Amz-Signature=99fc769a2ebf7c7b8921f709d6a744313fd61fb2be832197624e0e5fb98b6057&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7HJ6V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT32OWGHwOTeDi6RUL41ziH2BOYZYgt57nEgujHAkDWAiA3SH026b2o%2FCb%2FxKTpLJUe9rQL1kwIySdbCQNvxS0zMir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMlzORy1Ox7iYyRoBGKtwDwXZLWKFlNwiFh%2FEKdt%2BPj1mZp1%2FroiTOhJF3eH79261iVYw5%2BguxVPhqCug3sFX4r6rtXOInPTPo%2FmJvUQF1Gm9dDCCu02gZAWbu2ixKFWm0ESvOVZorG5wtje8%2Fi5vhCbwq0ySRrsvgsv2%2B56FcyaE5S7%2BbLxEoMPlFGhyk1bVRD9a1IZtiDtLy2iQvmL0Syo5g2sWiwcPprarvjqMVbJZoHgw8q%2B0lR18QF4rP995dvdtpuMpr5rgw0ba7lTtYgAHPQURmI83MhdzJcw%2ByuA4aSOfvUvJC0qOnb435oEE2VpEPhty1QlhhnF84fWf8zd5NMej1xqJ8g%2Ff4Vbj2vl4k01Vrr2melCsX1q4WFQUKKA0PrPWMAaet4hBg6fiu6p4%2FHsMs%2ByqIHigA2lzc%2F%2FmUcp5c%2FsvpXlptwMZ5C5%2FkPpkvKvL6qsEhpD9rnkw2WV6uAPvRX2zBsdNQFcOjkOHlYmFbV7lmpnAAE8aWM932zaetD7pK3piuPlxMpcIHykwocpoOpel7IDp4GJUknU73r9D0F4GW8FKqI8uPxrx%2FE2suxemwQHl%2Fsgkdn2vnbZJa0PVbW5RmW4L6Ikap%2BKUrSB%2FPvtfQ8VP7okGL6ppIK%2Fhv3N2T9punA%2FswgqLKvwY6pgF2Rn5AH8%2F0vPyQlaE8PqX02BPAGeJLY8gjgCmXej%2FGWZ48YIhT2XtCJ4sYj%2F3cYhvNedv3IW%2BMn%2BygdFmQdlkWx92c6wG%2BnK4Ckk5fOFsKV4i%2FZT15xlkFyoRRfeLvMbfC%2Fpm7HEyUqsUGVS4N2XN8ZKogGytjR%2B4UKJg0I53xmX5IG%2FRPMPSTxG6mz4b%2BmBgWKcxdK9X9HN9hcLThk68Jq4bSBsO1&X-Amz-Signature=e416ee9e543c8eabda719607abfc2e30c866a11751bdc55e62c80b8340e99910&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7HJ6V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT32OWGHwOTeDi6RUL41ziH2BOYZYgt57nEgujHAkDWAiA3SH026b2o%2FCb%2FxKTpLJUe9rQL1kwIySdbCQNvxS0zMir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMlzORy1Ox7iYyRoBGKtwDwXZLWKFlNwiFh%2FEKdt%2BPj1mZp1%2FroiTOhJF3eH79261iVYw5%2BguxVPhqCug3sFX4r6rtXOInPTPo%2FmJvUQF1Gm9dDCCu02gZAWbu2ixKFWm0ESvOVZorG5wtje8%2Fi5vhCbwq0ySRrsvgsv2%2B56FcyaE5S7%2BbLxEoMPlFGhyk1bVRD9a1IZtiDtLy2iQvmL0Syo5g2sWiwcPprarvjqMVbJZoHgw8q%2B0lR18QF4rP995dvdtpuMpr5rgw0ba7lTtYgAHPQURmI83MhdzJcw%2ByuA4aSOfvUvJC0qOnb435oEE2VpEPhty1QlhhnF84fWf8zd5NMej1xqJ8g%2Ff4Vbj2vl4k01Vrr2melCsX1q4WFQUKKA0PrPWMAaet4hBg6fiu6p4%2FHsMs%2ByqIHigA2lzc%2F%2FmUcp5c%2FsvpXlptwMZ5C5%2FkPpkvKvL6qsEhpD9rnkw2WV6uAPvRX2zBsdNQFcOjkOHlYmFbV7lmpnAAE8aWM932zaetD7pK3piuPlxMpcIHykwocpoOpel7IDp4GJUknU73r9D0F4GW8FKqI8uPxrx%2FE2suxemwQHl%2Fsgkdn2vnbZJa0PVbW5RmW4L6Ikap%2BKUrSB%2FPvtfQ8VP7okGL6ppIK%2Fhv3N2T9punA%2FswgqLKvwY6pgF2Rn5AH8%2F0vPyQlaE8PqX02BPAGeJLY8gjgCmXej%2FGWZ48YIhT2XtCJ4sYj%2F3cYhvNedv3IW%2BMn%2BygdFmQdlkWx92c6wG%2BnK4Ckk5fOFsKV4i%2FZT15xlkFyoRRfeLvMbfC%2Fpm7HEyUqsUGVS4N2XN8ZKogGytjR%2B4UKJg0I53xmX5IG%2FRPMPSTxG6mz4b%2BmBgWKcxdK9X9HN9hcLThk68Jq4bSBsO1&X-Amz-Signature=a6a4b38539cda3902548a7ec751e7b33e578810d0dd08762c4d2d218e47e7642&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7HJ6V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT32OWGHwOTeDi6RUL41ziH2BOYZYgt57nEgujHAkDWAiA3SH026b2o%2FCb%2FxKTpLJUe9rQL1kwIySdbCQNvxS0zMir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMlzORy1Ox7iYyRoBGKtwDwXZLWKFlNwiFh%2FEKdt%2BPj1mZp1%2FroiTOhJF3eH79261iVYw5%2BguxVPhqCug3sFX4r6rtXOInPTPo%2FmJvUQF1Gm9dDCCu02gZAWbu2ixKFWm0ESvOVZorG5wtje8%2Fi5vhCbwq0ySRrsvgsv2%2B56FcyaE5S7%2BbLxEoMPlFGhyk1bVRD9a1IZtiDtLy2iQvmL0Syo5g2sWiwcPprarvjqMVbJZoHgw8q%2B0lR18QF4rP995dvdtpuMpr5rgw0ba7lTtYgAHPQURmI83MhdzJcw%2ByuA4aSOfvUvJC0qOnb435oEE2VpEPhty1QlhhnF84fWf8zd5NMej1xqJ8g%2Ff4Vbj2vl4k01Vrr2melCsX1q4WFQUKKA0PrPWMAaet4hBg6fiu6p4%2FHsMs%2ByqIHigA2lzc%2F%2FmUcp5c%2FsvpXlptwMZ5C5%2FkPpkvKvL6qsEhpD9rnkw2WV6uAPvRX2zBsdNQFcOjkOHlYmFbV7lmpnAAE8aWM932zaetD7pK3piuPlxMpcIHykwocpoOpel7IDp4GJUknU73r9D0F4GW8FKqI8uPxrx%2FE2suxemwQHl%2Fsgkdn2vnbZJa0PVbW5RmW4L6Ikap%2BKUrSB%2FPvtfQ8VP7okGL6ppIK%2Fhv3N2T9punA%2FswgqLKvwY6pgF2Rn5AH8%2F0vPyQlaE8PqX02BPAGeJLY8gjgCmXej%2FGWZ48YIhT2XtCJ4sYj%2F3cYhvNedv3IW%2BMn%2BygdFmQdlkWx92c6wG%2BnK4Ckk5fOFsKV4i%2FZT15xlkFyoRRfeLvMbfC%2Fpm7HEyUqsUGVS4N2XN8ZKogGytjR%2B4UKJg0I53xmX5IG%2FRPMPSTxG6mz4b%2BmBgWKcxdK9X9HN9hcLThk68Jq4bSBsO1&X-Amz-Signature=9b609cb8524143491bcc766e80d43b6de02a68ada37a5634da1a516bbe268aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7HJ6V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT32OWGHwOTeDi6RUL41ziH2BOYZYgt57nEgujHAkDWAiA3SH026b2o%2FCb%2FxKTpLJUe9rQL1kwIySdbCQNvxS0zMir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMlzORy1Ox7iYyRoBGKtwDwXZLWKFlNwiFh%2FEKdt%2BPj1mZp1%2FroiTOhJF3eH79261iVYw5%2BguxVPhqCug3sFX4r6rtXOInPTPo%2FmJvUQF1Gm9dDCCu02gZAWbu2ixKFWm0ESvOVZorG5wtje8%2Fi5vhCbwq0ySRrsvgsv2%2B56FcyaE5S7%2BbLxEoMPlFGhyk1bVRD9a1IZtiDtLy2iQvmL0Syo5g2sWiwcPprarvjqMVbJZoHgw8q%2B0lR18QF4rP995dvdtpuMpr5rgw0ba7lTtYgAHPQURmI83MhdzJcw%2ByuA4aSOfvUvJC0qOnb435oEE2VpEPhty1QlhhnF84fWf8zd5NMej1xqJ8g%2Ff4Vbj2vl4k01Vrr2melCsX1q4WFQUKKA0PrPWMAaet4hBg6fiu6p4%2FHsMs%2ByqIHigA2lzc%2F%2FmUcp5c%2FsvpXlptwMZ5C5%2FkPpkvKvL6qsEhpD9rnkw2WV6uAPvRX2zBsdNQFcOjkOHlYmFbV7lmpnAAE8aWM932zaetD7pK3piuPlxMpcIHykwocpoOpel7IDp4GJUknU73r9D0F4GW8FKqI8uPxrx%2FE2suxemwQHl%2Fsgkdn2vnbZJa0PVbW5RmW4L6Ikap%2BKUrSB%2FPvtfQ8VP7okGL6ppIK%2Fhv3N2T9punA%2FswgqLKvwY6pgF2Rn5AH8%2F0vPyQlaE8PqX02BPAGeJLY8gjgCmXej%2FGWZ48YIhT2XtCJ4sYj%2F3cYhvNedv3IW%2BMn%2BygdFmQdlkWx92c6wG%2BnK4Ckk5fOFsKV4i%2FZT15xlkFyoRRfeLvMbfC%2Fpm7HEyUqsUGVS4N2XN8ZKogGytjR%2B4UKJg0I53xmX5IG%2FRPMPSTxG6mz4b%2BmBgWKcxdK9X9HN9hcLThk68Jq4bSBsO1&X-Amz-Signature=525a63454ae564de8ac13e06091a84f2ed6eb956f07ebc40f7858fbf3b22dc4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7HJ6V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT32OWGHwOTeDi6RUL41ziH2BOYZYgt57nEgujHAkDWAiA3SH026b2o%2FCb%2FxKTpLJUe9rQL1kwIySdbCQNvxS0zMir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMlzORy1Ox7iYyRoBGKtwDwXZLWKFlNwiFh%2FEKdt%2BPj1mZp1%2FroiTOhJF3eH79261iVYw5%2BguxVPhqCug3sFX4r6rtXOInPTPo%2FmJvUQF1Gm9dDCCu02gZAWbu2ixKFWm0ESvOVZorG5wtje8%2Fi5vhCbwq0ySRrsvgsv2%2B56FcyaE5S7%2BbLxEoMPlFGhyk1bVRD9a1IZtiDtLy2iQvmL0Syo5g2sWiwcPprarvjqMVbJZoHgw8q%2B0lR18QF4rP995dvdtpuMpr5rgw0ba7lTtYgAHPQURmI83MhdzJcw%2ByuA4aSOfvUvJC0qOnb435oEE2VpEPhty1QlhhnF84fWf8zd5NMej1xqJ8g%2Ff4Vbj2vl4k01Vrr2melCsX1q4WFQUKKA0PrPWMAaet4hBg6fiu6p4%2FHsMs%2ByqIHigA2lzc%2F%2FmUcp5c%2FsvpXlptwMZ5C5%2FkPpkvKvL6qsEhpD9rnkw2WV6uAPvRX2zBsdNQFcOjkOHlYmFbV7lmpnAAE8aWM932zaetD7pK3piuPlxMpcIHykwocpoOpel7IDp4GJUknU73r9D0F4GW8FKqI8uPxrx%2FE2suxemwQHl%2Fsgkdn2vnbZJa0PVbW5RmW4L6Ikap%2BKUrSB%2FPvtfQ8VP7okGL6ppIK%2Fhv3N2T9punA%2FswgqLKvwY6pgF2Rn5AH8%2F0vPyQlaE8PqX02BPAGeJLY8gjgCmXej%2FGWZ48YIhT2XtCJ4sYj%2F3cYhvNedv3IW%2BMn%2BygdFmQdlkWx92c6wG%2BnK4Ckk5fOFsKV4i%2FZT15xlkFyoRRfeLvMbfC%2Fpm7HEyUqsUGVS4N2XN8ZKogGytjR%2B4UKJg0I53xmX5IG%2FRPMPSTxG6mz4b%2BmBgWKcxdK9X9HN9hcLThk68Jq4bSBsO1&X-Amz-Signature=29422cb3d49633e592e0586d9062033c9114eb8d76f2543240b9aee90b0bd3d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7HJ6V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT32OWGHwOTeDi6RUL41ziH2BOYZYgt57nEgujHAkDWAiA3SH026b2o%2FCb%2FxKTpLJUe9rQL1kwIySdbCQNvxS0zMir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMlzORy1Ox7iYyRoBGKtwDwXZLWKFlNwiFh%2FEKdt%2BPj1mZp1%2FroiTOhJF3eH79261iVYw5%2BguxVPhqCug3sFX4r6rtXOInPTPo%2FmJvUQF1Gm9dDCCu02gZAWbu2ixKFWm0ESvOVZorG5wtje8%2Fi5vhCbwq0ySRrsvgsv2%2B56FcyaE5S7%2BbLxEoMPlFGhyk1bVRD9a1IZtiDtLy2iQvmL0Syo5g2sWiwcPprarvjqMVbJZoHgw8q%2B0lR18QF4rP995dvdtpuMpr5rgw0ba7lTtYgAHPQURmI83MhdzJcw%2ByuA4aSOfvUvJC0qOnb435oEE2VpEPhty1QlhhnF84fWf8zd5NMej1xqJ8g%2Ff4Vbj2vl4k01Vrr2melCsX1q4WFQUKKA0PrPWMAaet4hBg6fiu6p4%2FHsMs%2ByqIHigA2lzc%2F%2FmUcp5c%2FsvpXlptwMZ5C5%2FkPpkvKvL6qsEhpD9rnkw2WV6uAPvRX2zBsdNQFcOjkOHlYmFbV7lmpnAAE8aWM932zaetD7pK3piuPlxMpcIHykwocpoOpel7IDp4GJUknU73r9D0F4GW8FKqI8uPxrx%2FE2suxemwQHl%2Fsgkdn2vnbZJa0PVbW5RmW4L6Ikap%2BKUrSB%2FPvtfQ8VP7okGL6ppIK%2Fhv3N2T9punA%2FswgqLKvwY6pgF2Rn5AH8%2F0vPyQlaE8PqX02BPAGeJLY8gjgCmXej%2FGWZ48YIhT2XtCJ4sYj%2F3cYhvNedv3IW%2BMn%2BygdFmQdlkWx92c6wG%2BnK4Ckk5fOFsKV4i%2FZT15xlkFyoRRfeLvMbfC%2Fpm7HEyUqsUGVS4N2XN8ZKogGytjR%2B4UKJg0I53xmX5IG%2FRPMPSTxG6mz4b%2BmBgWKcxdK9X9HN9hcLThk68Jq4bSBsO1&X-Amz-Signature=ddaccceebefa21ef82a10b549efa844d2b414fc21d003e2bd0baf50c94a68829&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LI7HJ6V%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT32OWGHwOTeDi6RUL41ziH2BOYZYgt57nEgujHAkDWAiA3SH026b2o%2FCb%2FxKTpLJUe9rQL1kwIySdbCQNvxS0zMir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMlzORy1Ox7iYyRoBGKtwDwXZLWKFlNwiFh%2FEKdt%2BPj1mZp1%2FroiTOhJF3eH79261iVYw5%2BguxVPhqCug3sFX4r6rtXOInPTPo%2FmJvUQF1Gm9dDCCu02gZAWbu2ixKFWm0ESvOVZorG5wtje8%2Fi5vhCbwq0ySRrsvgsv2%2B56FcyaE5S7%2BbLxEoMPlFGhyk1bVRD9a1IZtiDtLy2iQvmL0Syo5g2sWiwcPprarvjqMVbJZoHgw8q%2B0lR18QF4rP995dvdtpuMpr5rgw0ba7lTtYgAHPQURmI83MhdzJcw%2ByuA4aSOfvUvJC0qOnb435oEE2VpEPhty1QlhhnF84fWf8zd5NMej1xqJ8g%2Ff4Vbj2vl4k01Vrr2melCsX1q4WFQUKKA0PrPWMAaet4hBg6fiu6p4%2FHsMs%2ByqIHigA2lzc%2F%2FmUcp5c%2FsvpXlptwMZ5C5%2FkPpkvKvL6qsEhpD9rnkw2WV6uAPvRX2zBsdNQFcOjkOHlYmFbV7lmpnAAE8aWM932zaetD7pK3piuPlxMpcIHykwocpoOpel7IDp4GJUknU73r9D0F4GW8FKqI8uPxrx%2FE2suxemwQHl%2Fsgkdn2vnbZJa0PVbW5RmW4L6Ikap%2BKUrSB%2FPvtfQ8VP7okGL6ppIK%2Fhv3N2T9punA%2FswgqLKvwY6pgF2Rn5AH8%2F0vPyQlaE8PqX02BPAGeJLY8gjgCmXej%2FGWZ48YIhT2XtCJ4sYj%2F3cYhvNedv3IW%2BMn%2BygdFmQdlkWx92c6wG%2BnK4Ckk5fOFsKV4i%2FZT15xlkFyoRRfeLvMbfC%2Fpm7HEyUqsUGVS4N2XN8ZKogGytjR%2B4UKJg0I53xmX5IG%2FRPMPSTxG6mz4b%2BmBgWKcxdK9X9HN9hcLThk68Jq4bSBsO1&X-Amz-Signature=835d807718dcc8b8185febe1932625a74e74744f4c117d9c60f15c4b50153b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
