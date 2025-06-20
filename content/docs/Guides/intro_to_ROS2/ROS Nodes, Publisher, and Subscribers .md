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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLSQLNI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2BWY1SjhzCDLRNhSm9YDKt1xzepAEH0rIrUKQBEKAcAiEAg4tuKpSEwGfntLsiqwOB04XTGrvPkXJ0CZ5W1861dlEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIX%2FlMPK92W%2FDKuJ1yrcA0mexLMFhC45dkoUwJzZ5iR%2BT2n4t39Kkj7qZh%2BV%2FGF8Hqh9nLnB3ZW77tiQZGSFGD65aSK%2FbbmGGtLYS7v%2FsSknSmyxdFgA0uRlEOa9JAaNmbAepGDOd1KWaZkHDbDaoTULRfgtrJrZZSKKaZbvOVAY%2FeEf38mCsMAbRfiwYyuxxUv6GF4%2FFOn5DgRtdPBySxPgkWgviuJsGkfuoPeu88S6%2FAy41AJs7%2FPNHLPBq1cmmw8lrW8SbmjS2kG4a0jfVg6w25n9%2BbL85hfzLBND7eBGOjJClmd7Y3irSDRyGE%2BHcDDW2ewwrWR1Vo%2BdPjdTCGd0hXuWQt0k5s1659JEa6ipY0D8N02gk8UP%2Buz%2FG7Jc9xESVTXSK7YQw30L3C22Zt42jEDjEUvqzsyfBNsAs8w5L5oJF95%2BEOv0EuMmdZGrj16TUGB%2B7nSHH0ZRK6sdMoix3ISvsqxuGUISaK%2BqNyZMkODoc38PTCsfHn3E3CpWAtFwoTBdLOFCHFVLD%2B7Je5MJUpAkxGYJlA5OPoMOAUIaAtac9WB3sVVcaSpl043e0ekDH8Uz%2BGqqnBi3zjdxMhkjFfkGCB5wPk8Ll%2BKQirPFtFrWPhbXfrcR1rCCbyxa4m3Smx4SXNL0%2FzEGMNWy1sIGOqUBx%2FaIPxxskK%2FtEfu8acqfyWmXkc7bDiRY3HMJsINEF7WKQkFMoamKywNbDAdjJztJQGRErySEzG1OimXSEZKudhCQk3PL4lnK8YUb%2FlcH3hrQhnWDNhOleL1xd05zWLzCuzeGcP01t8GMTUPtxD1ClRxCSUGrljt2wtDIMcPe2vP6qvhPn9C%2F5XrO9lM1aaVLCCumDY9RKoN1ghtwDmR1yOlxUzo3&X-Amz-Signature=c3eaf7ebba89a3de4a8c82ec14acd8022703480db724eb8689155dca1f7dce54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLSQLNI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2BWY1SjhzCDLRNhSm9YDKt1xzepAEH0rIrUKQBEKAcAiEAg4tuKpSEwGfntLsiqwOB04XTGrvPkXJ0CZ5W1861dlEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIX%2FlMPK92W%2FDKuJ1yrcA0mexLMFhC45dkoUwJzZ5iR%2BT2n4t39Kkj7qZh%2BV%2FGF8Hqh9nLnB3ZW77tiQZGSFGD65aSK%2FbbmGGtLYS7v%2FsSknSmyxdFgA0uRlEOa9JAaNmbAepGDOd1KWaZkHDbDaoTULRfgtrJrZZSKKaZbvOVAY%2FeEf38mCsMAbRfiwYyuxxUv6GF4%2FFOn5DgRtdPBySxPgkWgviuJsGkfuoPeu88S6%2FAy41AJs7%2FPNHLPBq1cmmw8lrW8SbmjS2kG4a0jfVg6w25n9%2BbL85hfzLBND7eBGOjJClmd7Y3irSDRyGE%2BHcDDW2ewwrWR1Vo%2BdPjdTCGd0hXuWQt0k5s1659JEa6ipY0D8N02gk8UP%2Buz%2FG7Jc9xESVTXSK7YQw30L3C22Zt42jEDjEUvqzsyfBNsAs8w5L5oJF95%2BEOv0EuMmdZGrj16TUGB%2B7nSHH0ZRK6sdMoix3ISvsqxuGUISaK%2BqNyZMkODoc38PTCsfHn3E3CpWAtFwoTBdLOFCHFVLD%2B7Je5MJUpAkxGYJlA5OPoMOAUIaAtac9WB3sVVcaSpl043e0ekDH8Uz%2BGqqnBi3zjdxMhkjFfkGCB5wPk8Ll%2BKQirPFtFrWPhbXfrcR1rCCbyxa4m3Smx4SXNL0%2FzEGMNWy1sIGOqUBx%2FaIPxxskK%2FtEfu8acqfyWmXkc7bDiRY3HMJsINEF7WKQkFMoamKywNbDAdjJztJQGRErySEzG1OimXSEZKudhCQk3PL4lnK8YUb%2FlcH3hrQhnWDNhOleL1xd05zWLzCuzeGcP01t8GMTUPtxD1ClRxCSUGrljt2wtDIMcPe2vP6qvhPn9C%2F5XrO9lM1aaVLCCumDY9RKoN1ghtwDmR1yOlxUzo3&X-Amz-Signature=98918971ca7fec9faa01e1b063ba5273ce9ed559f30c5052e718dfab94a38db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLSQLNI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2BWY1SjhzCDLRNhSm9YDKt1xzepAEH0rIrUKQBEKAcAiEAg4tuKpSEwGfntLsiqwOB04XTGrvPkXJ0CZ5W1861dlEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIX%2FlMPK92W%2FDKuJ1yrcA0mexLMFhC45dkoUwJzZ5iR%2BT2n4t39Kkj7qZh%2BV%2FGF8Hqh9nLnB3ZW77tiQZGSFGD65aSK%2FbbmGGtLYS7v%2FsSknSmyxdFgA0uRlEOa9JAaNmbAepGDOd1KWaZkHDbDaoTULRfgtrJrZZSKKaZbvOVAY%2FeEf38mCsMAbRfiwYyuxxUv6GF4%2FFOn5DgRtdPBySxPgkWgviuJsGkfuoPeu88S6%2FAy41AJs7%2FPNHLPBq1cmmw8lrW8SbmjS2kG4a0jfVg6w25n9%2BbL85hfzLBND7eBGOjJClmd7Y3irSDRyGE%2BHcDDW2ewwrWR1Vo%2BdPjdTCGd0hXuWQt0k5s1659JEa6ipY0D8N02gk8UP%2Buz%2FG7Jc9xESVTXSK7YQw30L3C22Zt42jEDjEUvqzsyfBNsAs8w5L5oJF95%2BEOv0EuMmdZGrj16TUGB%2B7nSHH0ZRK6sdMoix3ISvsqxuGUISaK%2BqNyZMkODoc38PTCsfHn3E3CpWAtFwoTBdLOFCHFVLD%2B7Je5MJUpAkxGYJlA5OPoMOAUIaAtac9WB3sVVcaSpl043e0ekDH8Uz%2BGqqnBi3zjdxMhkjFfkGCB5wPk8Ll%2BKQirPFtFrWPhbXfrcR1rCCbyxa4m3Smx4SXNL0%2FzEGMNWy1sIGOqUBx%2FaIPxxskK%2FtEfu8acqfyWmXkc7bDiRY3HMJsINEF7WKQkFMoamKywNbDAdjJztJQGRErySEzG1OimXSEZKudhCQk3PL4lnK8YUb%2FlcH3hrQhnWDNhOleL1xd05zWLzCuzeGcP01t8GMTUPtxD1ClRxCSUGrljt2wtDIMcPe2vP6qvhPn9C%2F5XrO9lM1aaVLCCumDY9RKoN1ghtwDmR1yOlxUzo3&X-Amz-Signature=b90c80390724d633ba505e24b97bba9ffda9e65cf57e222032142baacddc72b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLSQLNI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2BWY1SjhzCDLRNhSm9YDKt1xzepAEH0rIrUKQBEKAcAiEAg4tuKpSEwGfntLsiqwOB04XTGrvPkXJ0CZ5W1861dlEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIX%2FlMPK92W%2FDKuJ1yrcA0mexLMFhC45dkoUwJzZ5iR%2BT2n4t39Kkj7qZh%2BV%2FGF8Hqh9nLnB3ZW77tiQZGSFGD65aSK%2FbbmGGtLYS7v%2FsSknSmyxdFgA0uRlEOa9JAaNmbAepGDOd1KWaZkHDbDaoTULRfgtrJrZZSKKaZbvOVAY%2FeEf38mCsMAbRfiwYyuxxUv6GF4%2FFOn5DgRtdPBySxPgkWgviuJsGkfuoPeu88S6%2FAy41AJs7%2FPNHLPBq1cmmw8lrW8SbmjS2kG4a0jfVg6w25n9%2BbL85hfzLBND7eBGOjJClmd7Y3irSDRyGE%2BHcDDW2ewwrWR1Vo%2BdPjdTCGd0hXuWQt0k5s1659JEa6ipY0D8N02gk8UP%2Buz%2FG7Jc9xESVTXSK7YQw30L3C22Zt42jEDjEUvqzsyfBNsAs8w5L5oJF95%2BEOv0EuMmdZGrj16TUGB%2B7nSHH0ZRK6sdMoix3ISvsqxuGUISaK%2BqNyZMkODoc38PTCsfHn3E3CpWAtFwoTBdLOFCHFVLD%2B7Je5MJUpAkxGYJlA5OPoMOAUIaAtac9WB3sVVcaSpl043e0ekDH8Uz%2BGqqnBi3zjdxMhkjFfkGCB5wPk8Ll%2BKQirPFtFrWPhbXfrcR1rCCbyxa4m3Smx4SXNL0%2FzEGMNWy1sIGOqUBx%2FaIPxxskK%2FtEfu8acqfyWmXkc7bDiRY3HMJsINEF7WKQkFMoamKywNbDAdjJztJQGRErySEzG1OimXSEZKudhCQk3PL4lnK8YUb%2FlcH3hrQhnWDNhOleL1xd05zWLzCuzeGcP01t8GMTUPtxD1ClRxCSUGrljt2wtDIMcPe2vP6qvhPn9C%2F5XrO9lM1aaVLCCumDY9RKoN1ghtwDmR1yOlxUzo3&X-Amz-Signature=b6879a9ad89beece5cc50ea2adcd06152c01aa0affce8dd76a7539bcbddfdce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLSQLNI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2BWY1SjhzCDLRNhSm9YDKt1xzepAEH0rIrUKQBEKAcAiEAg4tuKpSEwGfntLsiqwOB04XTGrvPkXJ0CZ5W1861dlEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIX%2FlMPK92W%2FDKuJ1yrcA0mexLMFhC45dkoUwJzZ5iR%2BT2n4t39Kkj7qZh%2BV%2FGF8Hqh9nLnB3ZW77tiQZGSFGD65aSK%2FbbmGGtLYS7v%2FsSknSmyxdFgA0uRlEOa9JAaNmbAepGDOd1KWaZkHDbDaoTULRfgtrJrZZSKKaZbvOVAY%2FeEf38mCsMAbRfiwYyuxxUv6GF4%2FFOn5DgRtdPBySxPgkWgviuJsGkfuoPeu88S6%2FAy41AJs7%2FPNHLPBq1cmmw8lrW8SbmjS2kG4a0jfVg6w25n9%2BbL85hfzLBND7eBGOjJClmd7Y3irSDRyGE%2BHcDDW2ewwrWR1Vo%2BdPjdTCGd0hXuWQt0k5s1659JEa6ipY0D8N02gk8UP%2Buz%2FG7Jc9xESVTXSK7YQw30L3C22Zt42jEDjEUvqzsyfBNsAs8w5L5oJF95%2BEOv0EuMmdZGrj16TUGB%2B7nSHH0ZRK6sdMoix3ISvsqxuGUISaK%2BqNyZMkODoc38PTCsfHn3E3CpWAtFwoTBdLOFCHFVLD%2B7Je5MJUpAkxGYJlA5OPoMOAUIaAtac9WB3sVVcaSpl043e0ekDH8Uz%2BGqqnBi3zjdxMhkjFfkGCB5wPk8Ll%2BKQirPFtFrWPhbXfrcR1rCCbyxa4m3Smx4SXNL0%2FzEGMNWy1sIGOqUBx%2FaIPxxskK%2FtEfu8acqfyWmXkc7bDiRY3HMJsINEF7WKQkFMoamKywNbDAdjJztJQGRErySEzG1OimXSEZKudhCQk3PL4lnK8YUb%2FlcH3hrQhnWDNhOleL1xd05zWLzCuzeGcP01t8GMTUPtxD1ClRxCSUGrljt2wtDIMcPe2vP6qvhPn9C%2F5XrO9lM1aaVLCCumDY9RKoN1ghtwDmR1yOlxUzo3&X-Amz-Signature=77751e1c9fa4921abd2fe7b9a3733689737443d06c654fe4c507fd488e9b4dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLSQLNI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2BWY1SjhzCDLRNhSm9YDKt1xzepAEH0rIrUKQBEKAcAiEAg4tuKpSEwGfntLsiqwOB04XTGrvPkXJ0CZ5W1861dlEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIX%2FlMPK92W%2FDKuJ1yrcA0mexLMFhC45dkoUwJzZ5iR%2BT2n4t39Kkj7qZh%2BV%2FGF8Hqh9nLnB3ZW77tiQZGSFGD65aSK%2FbbmGGtLYS7v%2FsSknSmyxdFgA0uRlEOa9JAaNmbAepGDOd1KWaZkHDbDaoTULRfgtrJrZZSKKaZbvOVAY%2FeEf38mCsMAbRfiwYyuxxUv6GF4%2FFOn5DgRtdPBySxPgkWgviuJsGkfuoPeu88S6%2FAy41AJs7%2FPNHLPBq1cmmw8lrW8SbmjS2kG4a0jfVg6w25n9%2BbL85hfzLBND7eBGOjJClmd7Y3irSDRyGE%2BHcDDW2ewwrWR1Vo%2BdPjdTCGd0hXuWQt0k5s1659JEa6ipY0D8N02gk8UP%2Buz%2FG7Jc9xESVTXSK7YQw30L3C22Zt42jEDjEUvqzsyfBNsAs8w5L5oJF95%2BEOv0EuMmdZGrj16TUGB%2B7nSHH0ZRK6sdMoix3ISvsqxuGUISaK%2BqNyZMkODoc38PTCsfHn3E3CpWAtFwoTBdLOFCHFVLD%2B7Je5MJUpAkxGYJlA5OPoMOAUIaAtac9WB3sVVcaSpl043e0ekDH8Uz%2BGqqnBi3zjdxMhkjFfkGCB5wPk8Ll%2BKQirPFtFrWPhbXfrcR1rCCbyxa4m3Smx4SXNL0%2FzEGMNWy1sIGOqUBx%2FaIPxxskK%2FtEfu8acqfyWmXkc7bDiRY3HMJsINEF7WKQkFMoamKywNbDAdjJztJQGRErySEzG1OimXSEZKudhCQk3PL4lnK8YUb%2FlcH3hrQhnWDNhOleL1xd05zWLzCuzeGcP01t8GMTUPtxD1ClRxCSUGrljt2wtDIMcPe2vP6qvhPn9C%2F5XrO9lM1aaVLCCumDY9RKoN1ghtwDmR1yOlxUzo3&X-Amz-Signature=2a805ed7e863be85440ac2143613a74423adc08924425660146ca946cdc2ecd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLSQLNI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2BWY1SjhzCDLRNhSm9YDKt1xzepAEH0rIrUKQBEKAcAiEAg4tuKpSEwGfntLsiqwOB04XTGrvPkXJ0CZ5W1861dlEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIX%2FlMPK92W%2FDKuJ1yrcA0mexLMFhC45dkoUwJzZ5iR%2BT2n4t39Kkj7qZh%2BV%2FGF8Hqh9nLnB3ZW77tiQZGSFGD65aSK%2FbbmGGtLYS7v%2FsSknSmyxdFgA0uRlEOa9JAaNmbAepGDOd1KWaZkHDbDaoTULRfgtrJrZZSKKaZbvOVAY%2FeEf38mCsMAbRfiwYyuxxUv6GF4%2FFOn5DgRtdPBySxPgkWgviuJsGkfuoPeu88S6%2FAy41AJs7%2FPNHLPBq1cmmw8lrW8SbmjS2kG4a0jfVg6w25n9%2BbL85hfzLBND7eBGOjJClmd7Y3irSDRyGE%2BHcDDW2ewwrWR1Vo%2BdPjdTCGd0hXuWQt0k5s1659JEa6ipY0D8N02gk8UP%2Buz%2FG7Jc9xESVTXSK7YQw30L3C22Zt42jEDjEUvqzsyfBNsAs8w5L5oJF95%2BEOv0EuMmdZGrj16TUGB%2B7nSHH0ZRK6sdMoix3ISvsqxuGUISaK%2BqNyZMkODoc38PTCsfHn3E3CpWAtFwoTBdLOFCHFVLD%2B7Je5MJUpAkxGYJlA5OPoMOAUIaAtac9WB3sVVcaSpl043e0ekDH8Uz%2BGqqnBi3zjdxMhkjFfkGCB5wPk8Ll%2BKQirPFtFrWPhbXfrcR1rCCbyxa4m3Smx4SXNL0%2FzEGMNWy1sIGOqUBx%2FaIPxxskK%2FtEfu8acqfyWmXkc7bDiRY3HMJsINEF7WKQkFMoamKywNbDAdjJztJQGRErySEzG1OimXSEZKudhCQk3PL4lnK8YUb%2FlcH3hrQhnWDNhOleL1xd05zWLzCuzeGcP01t8GMTUPtxD1ClRxCSUGrljt2wtDIMcPe2vP6qvhPn9C%2F5XrO9lM1aaVLCCumDY9RKoN1ghtwDmR1yOlxUzo3&X-Amz-Signature=6e9f1f7c94a9c51f9ed4fcf2ec2537022f991de0255828c47f9a72ae1fb9c123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLSQLNI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY%2BWY1SjhzCDLRNhSm9YDKt1xzepAEH0rIrUKQBEKAcAiEAg4tuKpSEwGfntLsiqwOB04XTGrvPkXJ0CZ5W1861dlEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIX%2FlMPK92W%2FDKuJ1yrcA0mexLMFhC45dkoUwJzZ5iR%2BT2n4t39Kkj7qZh%2BV%2FGF8Hqh9nLnB3ZW77tiQZGSFGD65aSK%2FbbmGGtLYS7v%2FsSknSmyxdFgA0uRlEOa9JAaNmbAepGDOd1KWaZkHDbDaoTULRfgtrJrZZSKKaZbvOVAY%2FeEf38mCsMAbRfiwYyuxxUv6GF4%2FFOn5DgRtdPBySxPgkWgviuJsGkfuoPeu88S6%2FAy41AJs7%2FPNHLPBq1cmmw8lrW8SbmjS2kG4a0jfVg6w25n9%2BbL85hfzLBND7eBGOjJClmd7Y3irSDRyGE%2BHcDDW2ewwrWR1Vo%2BdPjdTCGd0hXuWQt0k5s1659JEa6ipY0D8N02gk8UP%2Buz%2FG7Jc9xESVTXSK7YQw30L3C22Zt42jEDjEUvqzsyfBNsAs8w5L5oJF95%2BEOv0EuMmdZGrj16TUGB%2B7nSHH0ZRK6sdMoix3ISvsqxuGUISaK%2BqNyZMkODoc38PTCsfHn3E3CpWAtFwoTBdLOFCHFVLD%2B7Je5MJUpAkxGYJlA5OPoMOAUIaAtac9WB3sVVcaSpl043e0ekDH8Uz%2BGqqnBi3zjdxMhkjFfkGCB5wPk8Ll%2BKQirPFtFrWPhbXfrcR1rCCbyxa4m3Smx4SXNL0%2FzEGMNWy1sIGOqUBx%2FaIPxxskK%2FtEfu8acqfyWmXkc7bDiRY3HMJsINEF7WKQkFMoamKywNbDAdjJztJQGRErySEzG1OimXSEZKudhCQk3PL4lnK8YUb%2FlcH3hrQhnWDNhOleL1xd05zWLzCuzeGcP01t8GMTUPtxD1ClRxCSUGrljt2wtDIMcPe2vP6qvhPn9C%2F5XrO9lM1aaVLCCumDY9RKoN1ghtwDmR1yOlxUzo3&X-Amz-Signature=f933e50d5dbfbc83b54ef705c899d5006f604b97b476020a883d97e13fcffa9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
