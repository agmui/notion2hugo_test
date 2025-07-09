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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF2YNBH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CML0xC8UxC9Y7gKCSve%2FLntHyDlMMloPwnL3MfLazAIgLjcA4DcwnsBIomahBzR4EC%2FftNpcGutDfswnzZmKLuYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj1tZDo5m8PqS6TySrcA7mkuHm9AnE2dZekCKAkFqcze%2FDKeOaxp2dzLmjTQeCXbHCN2kEb2jsuaiFK0Rl%2Bf%2F%2FYhnsp7D51mSaDd3KTBOfry%2FRxCOFnoYaBZW3Czts%2By3gMVpFXutNJJqAs1Y7hoY9LBIKAUBoPOV%2FyKN4H7U20F6FDVBRSPZ2iux%2F0T78yagvlE9qYiC5VvK4ukX7Rg7Y6UKjfEE1FSa6nX%2BcdFyAdAIFJMPkgtVU6ivbtBdkQGjqSadLc2cNYtrNvqTchRwmv2NCwf2bh%2BOM3Qdr2sMZouhoojTscAytBTVuPZlCumfNYSGQc9VQuFA4m1WnxyeEhmxIIc5tIZvvfh4kEA3yVlC4O1oiD4847uCG5yEgVUmwUk77x02IcJgGFKrzA%2BQIz6HSiH3%2Bep6FrXm4Ubr51Mw6hb9ymrFuUD9PulqT4sCSOUKRhIuG8RU3F%2FCFCdklsqd%2BsxJxMtINaaERNnwJhsJMjiLQZzhkklTA%2FRScIjrBNtCEycwhUvgtZiFWYrpmP1ubngd8FLZgY233aPKMoQOEXgZE%2FgpHTxKi4j4QWomINXYmVKHpL%2F0TvpXE%2Bkm86pIooZK7pc4EYkAIMypqLyZ8%2Bwttc2blJPyfTIK65RRWsnfXYc4Qyg7JVMJvLt8MGOqUBhH29GEv%2B9vjLHwjzqJzoTnAW0Jo4kKRinFjNbm1x1AS4rp%2FTyRKNKkNEe3sRsM4QC%2FWV4iG9BDu%2FtDqwN25sq5LNj4neSIZkfL0N8B17AT%2B2cvDJz%2FyL8%2BU13WVEbE73qDPxNyd0a%2BmLXe%2F8ZDv2HkSUR%2FDfHBWjcwkLUnUiLYIq5wOltQ6SKGm00FMeVqOj3LD2NpneTDbN2ZonG2mnifLLmkZE&X-Amz-Signature=1da99708176f08c158897db0182cd83add885ae669bc1bbc62bbca37968b7187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF2YNBH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CML0xC8UxC9Y7gKCSve%2FLntHyDlMMloPwnL3MfLazAIgLjcA4DcwnsBIomahBzR4EC%2FftNpcGutDfswnzZmKLuYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj1tZDo5m8PqS6TySrcA7mkuHm9AnE2dZekCKAkFqcze%2FDKeOaxp2dzLmjTQeCXbHCN2kEb2jsuaiFK0Rl%2Bf%2F%2FYhnsp7D51mSaDd3KTBOfry%2FRxCOFnoYaBZW3Czts%2By3gMVpFXutNJJqAs1Y7hoY9LBIKAUBoPOV%2FyKN4H7U20F6FDVBRSPZ2iux%2F0T78yagvlE9qYiC5VvK4ukX7Rg7Y6UKjfEE1FSa6nX%2BcdFyAdAIFJMPkgtVU6ivbtBdkQGjqSadLc2cNYtrNvqTchRwmv2NCwf2bh%2BOM3Qdr2sMZouhoojTscAytBTVuPZlCumfNYSGQc9VQuFA4m1WnxyeEhmxIIc5tIZvvfh4kEA3yVlC4O1oiD4847uCG5yEgVUmwUk77x02IcJgGFKrzA%2BQIz6HSiH3%2Bep6FrXm4Ubr51Mw6hb9ymrFuUD9PulqT4sCSOUKRhIuG8RU3F%2FCFCdklsqd%2BsxJxMtINaaERNnwJhsJMjiLQZzhkklTA%2FRScIjrBNtCEycwhUvgtZiFWYrpmP1ubngd8FLZgY233aPKMoQOEXgZE%2FgpHTxKi4j4QWomINXYmVKHpL%2F0TvpXE%2Bkm86pIooZK7pc4EYkAIMypqLyZ8%2Bwttc2blJPyfTIK65RRWsnfXYc4Qyg7JVMJvLt8MGOqUBhH29GEv%2B9vjLHwjzqJzoTnAW0Jo4kKRinFjNbm1x1AS4rp%2FTyRKNKkNEe3sRsM4QC%2FWV4iG9BDu%2FtDqwN25sq5LNj4neSIZkfL0N8B17AT%2B2cvDJz%2FyL8%2BU13WVEbE73qDPxNyd0a%2BmLXe%2F8ZDv2HkSUR%2FDfHBWjcwkLUnUiLYIq5wOltQ6SKGm00FMeVqOj3LD2NpneTDbN2ZonG2mnifLLmkZE&X-Amz-Signature=be5220c82af0bf77648528fdf5a8d4f5e7cf0251b13ab2f4226cdb5b7a8b893d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF2YNBH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CML0xC8UxC9Y7gKCSve%2FLntHyDlMMloPwnL3MfLazAIgLjcA4DcwnsBIomahBzR4EC%2FftNpcGutDfswnzZmKLuYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj1tZDo5m8PqS6TySrcA7mkuHm9AnE2dZekCKAkFqcze%2FDKeOaxp2dzLmjTQeCXbHCN2kEb2jsuaiFK0Rl%2Bf%2F%2FYhnsp7D51mSaDd3KTBOfry%2FRxCOFnoYaBZW3Czts%2By3gMVpFXutNJJqAs1Y7hoY9LBIKAUBoPOV%2FyKN4H7U20F6FDVBRSPZ2iux%2F0T78yagvlE9qYiC5VvK4ukX7Rg7Y6UKjfEE1FSa6nX%2BcdFyAdAIFJMPkgtVU6ivbtBdkQGjqSadLc2cNYtrNvqTchRwmv2NCwf2bh%2BOM3Qdr2sMZouhoojTscAytBTVuPZlCumfNYSGQc9VQuFA4m1WnxyeEhmxIIc5tIZvvfh4kEA3yVlC4O1oiD4847uCG5yEgVUmwUk77x02IcJgGFKrzA%2BQIz6HSiH3%2Bep6FrXm4Ubr51Mw6hb9ymrFuUD9PulqT4sCSOUKRhIuG8RU3F%2FCFCdklsqd%2BsxJxMtINaaERNnwJhsJMjiLQZzhkklTA%2FRScIjrBNtCEycwhUvgtZiFWYrpmP1ubngd8FLZgY233aPKMoQOEXgZE%2FgpHTxKi4j4QWomINXYmVKHpL%2F0TvpXE%2Bkm86pIooZK7pc4EYkAIMypqLyZ8%2Bwttc2blJPyfTIK65RRWsnfXYc4Qyg7JVMJvLt8MGOqUBhH29GEv%2B9vjLHwjzqJzoTnAW0Jo4kKRinFjNbm1x1AS4rp%2FTyRKNKkNEe3sRsM4QC%2FWV4iG9BDu%2FtDqwN25sq5LNj4neSIZkfL0N8B17AT%2B2cvDJz%2FyL8%2BU13WVEbE73qDPxNyd0a%2BmLXe%2F8ZDv2HkSUR%2FDfHBWjcwkLUnUiLYIq5wOltQ6SKGm00FMeVqOj3LD2NpneTDbN2ZonG2mnifLLmkZE&X-Amz-Signature=24abea3066130fcae4651175d69bf87349dbf8cfe65a736f6155bb23cad49f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF2YNBH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CML0xC8UxC9Y7gKCSve%2FLntHyDlMMloPwnL3MfLazAIgLjcA4DcwnsBIomahBzR4EC%2FftNpcGutDfswnzZmKLuYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj1tZDo5m8PqS6TySrcA7mkuHm9AnE2dZekCKAkFqcze%2FDKeOaxp2dzLmjTQeCXbHCN2kEb2jsuaiFK0Rl%2Bf%2F%2FYhnsp7D51mSaDd3KTBOfry%2FRxCOFnoYaBZW3Czts%2By3gMVpFXutNJJqAs1Y7hoY9LBIKAUBoPOV%2FyKN4H7U20F6FDVBRSPZ2iux%2F0T78yagvlE9qYiC5VvK4ukX7Rg7Y6UKjfEE1FSa6nX%2BcdFyAdAIFJMPkgtVU6ivbtBdkQGjqSadLc2cNYtrNvqTchRwmv2NCwf2bh%2BOM3Qdr2sMZouhoojTscAytBTVuPZlCumfNYSGQc9VQuFA4m1WnxyeEhmxIIc5tIZvvfh4kEA3yVlC4O1oiD4847uCG5yEgVUmwUk77x02IcJgGFKrzA%2BQIz6HSiH3%2Bep6FrXm4Ubr51Mw6hb9ymrFuUD9PulqT4sCSOUKRhIuG8RU3F%2FCFCdklsqd%2BsxJxMtINaaERNnwJhsJMjiLQZzhkklTA%2FRScIjrBNtCEycwhUvgtZiFWYrpmP1ubngd8FLZgY233aPKMoQOEXgZE%2FgpHTxKi4j4QWomINXYmVKHpL%2F0TvpXE%2Bkm86pIooZK7pc4EYkAIMypqLyZ8%2Bwttc2blJPyfTIK65RRWsnfXYc4Qyg7JVMJvLt8MGOqUBhH29GEv%2B9vjLHwjzqJzoTnAW0Jo4kKRinFjNbm1x1AS4rp%2FTyRKNKkNEe3sRsM4QC%2FWV4iG9BDu%2FtDqwN25sq5LNj4neSIZkfL0N8B17AT%2B2cvDJz%2FyL8%2BU13WVEbE73qDPxNyd0a%2BmLXe%2F8ZDv2HkSUR%2FDfHBWjcwkLUnUiLYIq5wOltQ6SKGm00FMeVqOj3LD2NpneTDbN2ZonG2mnifLLmkZE&X-Amz-Signature=0b54900da81b571ed327fdc9b7940b6601e2ff2508ec8bdead9c74293b2ef2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF2YNBH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CML0xC8UxC9Y7gKCSve%2FLntHyDlMMloPwnL3MfLazAIgLjcA4DcwnsBIomahBzR4EC%2FftNpcGutDfswnzZmKLuYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj1tZDo5m8PqS6TySrcA7mkuHm9AnE2dZekCKAkFqcze%2FDKeOaxp2dzLmjTQeCXbHCN2kEb2jsuaiFK0Rl%2Bf%2F%2FYhnsp7D51mSaDd3KTBOfry%2FRxCOFnoYaBZW3Czts%2By3gMVpFXutNJJqAs1Y7hoY9LBIKAUBoPOV%2FyKN4H7U20F6FDVBRSPZ2iux%2F0T78yagvlE9qYiC5VvK4ukX7Rg7Y6UKjfEE1FSa6nX%2BcdFyAdAIFJMPkgtVU6ivbtBdkQGjqSadLc2cNYtrNvqTchRwmv2NCwf2bh%2BOM3Qdr2sMZouhoojTscAytBTVuPZlCumfNYSGQc9VQuFA4m1WnxyeEhmxIIc5tIZvvfh4kEA3yVlC4O1oiD4847uCG5yEgVUmwUk77x02IcJgGFKrzA%2BQIz6HSiH3%2Bep6FrXm4Ubr51Mw6hb9ymrFuUD9PulqT4sCSOUKRhIuG8RU3F%2FCFCdklsqd%2BsxJxMtINaaERNnwJhsJMjiLQZzhkklTA%2FRScIjrBNtCEycwhUvgtZiFWYrpmP1ubngd8FLZgY233aPKMoQOEXgZE%2FgpHTxKi4j4QWomINXYmVKHpL%2F0TvpXE%2Bkm86pIooZK7pc4EYkAIMypqLyZ8%2Bwttc2blJPyfTIK65RRWsnfXYc4Qyg7JVMJvLt8MGOqUBhH29GEv%2B9vjLHwjzqJzoTnAW0Jo4kKRinFjNbm1x1AS4rp%2FTyRKNKkNEe3sRsM4QC%2FWV4iG9BDu%2FtDqwN25sq5LNj4neSIZkfL0N8B17AT%2B2cvDJz%2FyL8%2BU13WVEbE73qDPxNyd0a%2BmLXe%2F8ZDv2HkSUR%2FDfHBWjcwkLUnUiLYIq5wOltQ6SKGm00FMeVqOj3LD2NpneTDbN2ZonG2mnifLLmkZE&X-Amz-Signature=0f7e0cd0189726cdedfea437b10f22ef919172190cb54619ecc7e801d126968f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF2YNBH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CML0xC8UxC9Y7gKCSve%2FLntHyDlMMloPwnL3MfLazAIgLjcA4DcwnsBIomahBzR4EC%2FftNpcGutDfswnzZmKLuYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj1tZDo5m8PqS6TySrcA7mkuHm9AnE2dZekCKAkFqcze%2FDKeOaxp2dzLmjTQeCXbHCN2kEb2jsuaiFK0Rl%2Bf%2F%2FYhnsp7D51mSaDd3KTBOfry%2FRxCOFnoYaBZW3Czts%2By3gMVpFXutNJJqAs1Y7hoY9LBIKAUBoPOV%2FyKN4H7U20F6FDVBRSPZ2iux%2F0T78yagvlE9qYiC5VvK4ukX7Rg7Y6UKjfEE1FSa6nX%2BcdFyAdAIFJMPkgtVU6ivbtBdkQGjqSadLc2cNYtrNvqTchRwmv2NCwf2bh%2BOM3Qdr2sMZouhoojTscAytBTVuPZlCumfNYSGQc9VQuFA4m1WnxyeEhmxIIc5tIZvvfh4kEA3yVlC4O1oiD4847uCG5yEgVUmwUk77x02IcJgGFKrzA%2BQIz6HSiH3%2Bep6FrXm4Ubr51Mw6hb9ymrFuUD9PulqT4sCSOUKRhIuG8RU3F%2FCFCdklsqd%2BsxJxMtINaaERNnwJhsJMjiLQZzhkklTA%2FRScIjrBNtCEycwhUvgtZiFWYrpmP1ubngd8FLZgY233aPKMoQOEXgZE%2FgpHTxKi4j4QWomINXYmVKHpL%2F0TvpXE%2Bkm86pIooZK7pc4EYkAIMypqLyZ8%2Bwttc2blJPyfTIK65RRWsnfXYc4Qyg7JVMJvLt8MGOqUBhH29GEv%2B9vjLHwjzqJzoTnAW0Jo4kKRinFjNbm1x1AS4rp%2FTyRKNKkNEe3sRsM4QC%2FWV4iG9BDu%2FtDqwN25sq5LNj4neSIZkfL0N8B17AT%2B2cvDJz%2FyL8%2BU13WVEbE73qDPxNyd0a%2BmLXe%2F8ZDv2HkSUR%2FDfHBWjcwkLUnUiLYIq5wOltQ6SKGm00FMeVqOj3LD2NpneTDbN2ZonG2mnifLLmkZE&X-Amz-Signature=71885a971f8be67e293bcc79c05458eea04c2c21d6c51c20620e54d163a171eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF2YNBH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CML0xC8UxC9Y7gKCSve%2FLntHyDlMMloPwnL3MfLazAIgLjcA4DcwnsBIomahBzR4EC%2FftNpcGutDfswnzZmKLuYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj1tZDo5m8PqS6TySrcA7mkuHm9AnE2dZekCKAkFqcze%2FDKeOaxp2dzLmjTQeCXbHCN2kEb2jsuaiFK0Rl%2Bf%2F%2FYhnsp7D51mSaDd3KTBOfry%2FRxCOFnoYaBZW3Czts%2By3gMVpFXutNJJqAs1Y7hoY9LBIKAUBoPOV%2FyKN4H7U20F6FDVBRSPZ2iux%2F0T78yagvlE9qYiC5VvK4ukX7Rg7Y6UKjfEE1FSa6nX%2BcdFyAdAIFJMPkgtVU6ivbtBdkQGjqSadLc2cNYtrNvqTchRwmv2NCwf2bh%2BOM3Qdr2sMZouhoojTscAytBTVuPZlCumfNYSGQc9VQuFA4m1WnxyeEhmxIIc5tIZvvfh4kEA3yVlC4O1oiD4847uCG5yEgVUmwUk77x02IcJgGFKrzA%2BQIz6HSiH3%2Bep6FrXm4Ubr51Mw6hb9ymrFuUD9PulqT4sCSOUKRhIuG8RU3F%2FCFCdklsqd%2BsxJxMtINaaERNnwJhsJMjiLQZzhkklTA%2FRScIjrBNtCEycwhUvgtZiFWYrpmP1ubngd8FLZgY233aPKMoQOEXgZE%2FgpHTxKi4j4QWomINXYmVKHpL%2F0TvpXE%2Bkm86pIooZK7pc4EYkAIMypqLyZ8%2Bwttc2blJPyfTIK65RRWsnfXYc4Qyg7JVMJvLt8MGOqUBhH29GEv%2B9vjLHwjzqJzoTnAW0Jo4kKRinFjNbm1x1AS4rp%2FTyRKNKkNEe3sRsM4QC%2FWV4iG9BDu%2FtDqwN25sq5LNj4neSIZkfL0N8B17AT%2B2cvDJz%2FyL8%2BU13WVEbE73qDPxNyd0a%2BmLXe%2F8ZDv2HkSUR%2FDfHBWjcwkLUnUiLYIq5wOltQ6SKGm00FMeVqOj3LD2NpneTDbN2ZonG2mnifLLmkZE&X-Amz-Signature=d633aa56dd6991de25365faa65f67f138ccb71d34517d9303ca703ddb7eb5c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQF2YNBH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1CML0xC8UxC9Y7gKCSve%2FLntHyDlMMloPwnL3MfLazAIgLjcA4DcwnsBIomahBzR4EC%2FftNpcGutDfswnzZmKLuYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj1tZDo5m8PqS6TySrcA7mkuHm9AnE2dZekCKAkFqcze%2FDKeOaxp2dzLmjTQeCXbHCN2kEb2jsuaiFK0Rl%2Bf%2F%2FYhnsp7D51mSaDd3KTBOfry%2FRxCOFnoYaBZW3Czts%2By3gMVpFXutNJJqAs1Y7hoY9LBIKAUBoPOV%2FyKN4H7U20F6FDVBRSPZ2iux%2F0T78yagvlE9qYiC5VvK4ukX7Rg7Y6UKjfEE1FSa6nX%2BcdFyAdAIFJMPkgtVU6ivbtBdkQGjqSadLc2cNYtrNvqTchRwmv2NCwf2bh%2BOM3Qdr2sMZouhoojTscAytBTVuPZlCumfNYSGQc9VQuFA4m1WnxyeEhmxIIc5tIZvvfh4kEA3yVlC4O1oiD4847uCG5yEgVUmwUk77x02IcJgGFKrzA%2BQIz6HSiH3%2Bep6FrXm4Ubr51Mw6hb9ymrFuUD9PulqT4sCSOUKRhIuG8RU3F%2FCFCdklsqd%2BsxJxMtINaaERNnwJhsJMjiLQZzhkklTA%2FRScIjrBNtCEycwhUvgtZiFWYrpmP1ubngd8FLZgY233aPKMoQOEXgZE%2FgpHTxKi4j4QWomINXYmVKHpL%2F0TvpXE%2Bkm86pIooZK7pc4EYkAIMypqLyZ8%2Bwttc2blJPyfTIK65RRWsnfXYc4Qyg7JVMJvLt8MGOqUBhH29GEv%2B9vjLHwjzqJzoTnAW0Jo4kKRinFjNbm1x1AS4rp%2FTyRKNKkNEe3sRsM4QC%2FWV4iG9BDu%2FtDqwN25sq5LNj4neSIZkfL0N8B17AT%2B2cvDJz%2FyL8%2BU13WVEbE73qDPxNyd0a%2BmLXe%2F8ZDv2HkSUR%2FDfHBWjcwkLUnUiLYIq5wOltQ6SKGm00FMeVqOj3LD2NpneTDbN2ZonG2mnifLLmkZE&X-Amz-Signature=f6318abf7a4a0a42b2fb6a73643deefbf7950393707e2f32f1c20927d8c9a019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
