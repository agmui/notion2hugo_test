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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47LFDQP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FAFJicGlRcInjuvnMnhLG2%2BIUHX3E58GjZLFan9vL1gIgVFHZwMf4gZmPtgjK7%2FyOKhDHqyoOZC4rB%2FBRAJNZhGMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDGqky9%2BaDOZXpY0PSrcA9ytJbRoDO16qROsbivKn7EyPNqpJcdxb62ZAWeNktG1ozqU0ySCy935WJHwDiw15nqjvEEoTQbJjs7b2a4WeDqcRrUnBXphCtrixpYCVU8jSWM4YUkqBgwzvckd6OrPDYcuhQmTlKQHi0IIjyFId7u%2FrKD1IaunE%2BnRGX9FP8PXK%2BHlTyUti8vG5d3R2pq9dcJParMAnUlm%2FRWrqJ8YzpCKGjZO7XWi%2BfDwYs1HufFpxyxrJV2B75FLMen7yLjgqMNSzIMiN%2F0SKWsJK%2F%2FTQXqUcH2uJasdrOcKabgusqz%2F%2Fwfa%2BaOSVdTK7XRTGlJz5r8BMTnNPrvoYz4ylzupJrtNHog4TysLUkhvFgUTaMG9Aji6u34vTzbz8WiWoP6UChI7Y%2FCgSqj9wIyKIaJBqyPJLXCrF%2FZmMpiHXSUElkCoGyMgmaZmcDrSvvpPzgrl%2B8Juggx3rEFzulG0Mf%2BRwIxApgqYPpNmOUwfdUN1MbRJfuP%2BlJcUzjAa%2FItXn1NwqNaQI2dWaquyppgdu0I15Dz0vKC1eaJYM5HO3nTSICVgaqBL5k%2F3Zjx%2FTghbU4lXvGRSTkAiwQSJLo7KpSvArxKwHc2WUaDVv%2BZpwjv6u6W8MMB6i249ELlFaHo4MICX1MEGOqUBnB31e8N%2F6VAPmWpC9ekdpxM4osKmwkFIwrM%2FBVmVZDYqSJko3dBhap7oOclAl6eLB03HwDb4Nrtav0IK2khrDOvq96aM9e3HgGjMzP8YW34Pf59%2B1z6Y9kZAWmiRSpCf%2Bv%2BjEEvvt7Br8qsk1WBfK9KFARnthLnMe9z0OmiOe%2BtTKOZYUD3JtCyh03nDJ6M0cfC9D0soI8aHKjHm4B0WqZD8Ob%2FC&X-Amz-Signature=342f872ce5c42357fe2c8110af8d5062967cf5f88bf4af71ed38644113b38735&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47LFDQP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FAFJicGlRcInjuvnMnhLG2%2BIUHX3E58GjZLFan9vL1gIgVFHZwMf4gZmPtgjK7%2FyOKhDHqyoOZC4rB%2FBRAJNZhGMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDGqky9%2BaDOZXpY0PSrcA9ytJbRoDO16qROsbivKn7EyPNqpJcdxb62ZAWeNktG1ozqU0ySCy935WJHwDiw15nqjvEEoTQbJjs7b2a4WeDqcRrUnBXphCtrixpYCVU8jSWM4YUkqBgwzvckd6OrPDYcuhQmTlKQHi0IIjyFId7u%2FrKD1IaunE%2BnRGX9FP8PXK%2BHlTyUti8vG5d3R2pq9dcJParMAnUlm%2FRWrqJ8YzpCKGjZO7XWi%2BfDwYs1HufFpxyxrJV2B75FLMen7yLjgqMNSzIMiN%2F0SKWsJK%2F%2FTQXqUcH2uJasdrOcKabgusqz%2F%2Fwfa%2BaOSVdTK7XRTGlJz5r8BMTnNPrvoYz4ylzupJrtNHog4TysLUkhvFgUTaMG9Aji6u34vTzbz8WiWoP6UChI7Y%2FCgSqj9wIyKIaJBqyPJLXCrF%2FZmMpiHXSUElkCoGyMgmaZmcDrSvvpPzgrl%2B8Juggx3rEFzulG0Mf%2BRwIxApgqYPpNmOUwfdUN1MbRJfuP%2BlJcUzjAa%2FItXn1NwqNaQI2dWaquyppgdu0I15Dz0vKC1eaJYM5HO3nTSICVgaqBL5k%2F3Zjx%2FTghbU4lXvGRSTkAiwQSJLo7KpSvArxKwHc2WUaDVv%2BZpwjv6u6W8MMB6i249ELlFaHo4MICX1MEGOqUBnB31e8N%2F6VAPmWpC9ekdpxM4osKmwkFIwrM%2FBVmVZDYqSJko3dBhap7oOclAl6eLB03HwDb4Nrtav0IK2khrDOvq96aM9e3HgGjMzP8YW34Pf59%2B1z6Y9kZAWmiRSpCf%2Bv%2BjEEvvt7Br8qsk1WBfK9KFARnthLnMe9z0OmiOe%2BtTKOZYUD3JtCyh03nDJ6M0cfC9D0soI8aHKjHm4B0WqZD8Ob%2FC&X-Amz-Signature=c8ba8d27a595f085d62ce98896d35dd7203b889acb53374142a11530baaee0d2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47LFDQP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FAFJicGlRcInjuvnMnhLG2%2BIUHX3E58GjZLFan9vL1gIgVFHZwMf4gZmPtgjK7%2FyOKhDHqyoOZC4rB%2FBRAJNZhGMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDGqky9%2BaDOZXpY0PSrcA9ytJbRoDO16qROsbivKn7EyPNqpJcdxb62ZAWeNktG1ozqU0ySCy935WJHwDiw15nqjvEEoTQbJjs7b2a4WeDqcRrUnBXphCtrixpYCVU8jSWM4YUkqBgwzvckd6OrPDYcuhQmTlKQHi0IIjyFId7u%2FrKD1IaunE%2BnRGX9FP8PXK%2BHlTyUti8vG5d3R2pq9dcJParMAnUlm%2FRWrqJ8YzpCKGjZO7XWi%2BfDwYs1HufFpxyxrJV2B75FLMen7yLjgqMNSzIMiN%2F0SKWsJK%2F%2FTQXqUcH2uJasdrOcKabgusqz%2F%2Fwfa%2BaOSVdTK7XRTGlJz5r8BMTnNPrvoYz4ylzupJrtNHog4TysLUkhvFgUTaMG9Aji6u34vTzbz8WiWoP6UChI7Y%2FCgSqj9wIyKIaJBqyPJLXCrF%2FZmMpiHXSUElkCoGyMgmaZmcDrSvvpPzgrl%2B8Juggx3rEFzulG0Mf%2BRwIxApgqYPpNmOUwfdUN1MbRJfuP%2BlJcUzjAa%2FItXn1NwqNaQI2dWaquyppgdu0I15Dz0vKC1eaJYM5HO3nTSICVgaqBL5k%2F3Zjx%2FTghbU4lXvGRSTkAiwQSJLo7KpSvArxKwHc2WUaDVv%2BZpwjv6u6W8MMB6i249ELlFaHo4MICX1MEGOqUBnB31e8N%2F6VAPmWpC9ekdpxM4osKmwkFIwrM%2FBVmVZDYqSJko3dBhap7oOclAl6eLB03HwDb4Nrtav0IK2khrDOvq96aM9e3HgGjMzP8YW34Pf59%2B1z6Y9kZAWmiRSpCf%2Bv%2BjEEvvt7Br8qsk1WBfK9KFARnthLnMe9z0OmiOe%2BtTKOZYUD3JtCyh03nDJ6M0cfC9D0soI8aHKjHm4B0WqZD8Ob%2FC&X-Amz-Signature=34daa4c0e8d0e029c82e5c428b1764808dff17722bc152bb44c8aa427d9da319&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47LFDQP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FAFJicGlRcInjuvnMnhLG2%2BIUHX3E58GjZLFan9vL1gIgVFHZwMf4gZmPtgjK7%2FyOKhDHqyoOZC4rB%2FBRAJNZhGMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDGqky9%2BaDOZXpY0PSrcA9ytJbRoDO16qROsbivKn7EyPNqpJcdxb62ZAWeNktG1ozqU0ySCy935WJHwDiw15nqjvEEoTQbJjs7b2a4WeDqcRrUnBXphCtrixpYCVU8jSWM4YUkqBgwzvckd6OrPDYcuhQmTlKQHi0IIjyFId7u%2FrKD1IaunE%2BnRGX9FP8PXK%2BHlTyUti8vG5d3R2pq9dcJParMAnUlm%2FRWrqJ8YzpCKGjZO7XWi%2BfDwYs1HufFpxyxrJV2B75FLMen7yLjgqMNSzIMiN%2F0SKWsJK%2F%2FTQXqUcH2uJasdrOcKabgusqz%2F%2Fwfa%2BaOSVdTK7XRTGlJz5r8BMTnNPrvoYz4ylzupJrtNHog4TysLUkhvFgUTaMG9Aji6u34vTzbz8WiWoP6UChI7Y%2FCgSqj9wIyKIaJBqyPJLXCrF%2FZmMpiHXSUElkCoGyMgmaZmcDrSvvpPzgrl%2B8Juggx3rEFzulG0Mf%2BRwIxApgqYPpNmOUwfdUN1MbRJfuP%2BlJcUzjAa%2FItXn1NwqNaQI2dWaquyppgdu0I15Dz0vKC1eaJYM5HO3nTSICVgaqBL5k%2F3Zjx%2FTghbU4lXvGRSTkAiwQSJLo7KpSvArxKwHc2WUaDVv%2BZpwjv6u6W8MMB6i249ELlFaHo4MICX1MEGOqUBnB31e8N%2F6VAPmWpC9ekdpxM4osKmwkFIwrM%2FBVmVZDYqSJko3dBhap7oOclAl6eLB03HwDb4Nrtav0IK2khrDOvq96aM9e3HgGjMzP8YW34Pf59%2B1z6Y9kZAWmiRSpCf%2Bv%2BjEEvvt7Br8qsk1WBfK9KFARnthLnMe9z0OmiOe%2BtTKOZYUD3JtCyh03nDJ6M0cfC9D0soI8aHKjHm4B0WqZD8Ob%2FC&X-Amz-Signature=c47d114cc8547cc97678e79de1b041c3c91b17ff869540a9ff9fff12b33fa0f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47LFDQP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FAFJicGlRcInjuvnMnhLG2%2BIUHX3E58GjZLFan9vL1gIgVFHZwMf4gZmPtgjK7%2FyOKhDHqyoOZC4rB%2FBRAJNZhGMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDGqky9%2BaDOZXpY0PSrcA9ytJbRoDO16qROsbivKn7EyPNqpJcdxb62ZAWeNktG1ozqU0ySCy935WJHwDiw15nqjvEEoTQbJjs7b2a4WeDqcRrUnBXphCtrixpYCVU8jSWM4YUkqBgwzvckd6OrPDYcuhQmTlKQHi0IIjyFId7u%2FrKD1IaunE%2BnRGX9FP8PXK%2BHlTyUti8vG5d3R2pq9dcJParMAnUlm%2FRWrqJ8YzpCKGjZO7XWi%2BfDwYs1HufFpxyxrJV2B75FLMen7yLjgqMNSzIMiN%2F0SKWsJK%2F%2FTQXqUcH2uJasdrOcKabgusqz%2F%2Fwfa%2BaOSVdTK7XRTGlJz5r8BMTnNPrvoYz4ylzupJrtNHog4TysLUkhvFgUTaMG9Aji6u34vTzbz8WiWoP6UChI7Y%2FCgSqj9wIyKIaJBqyPJLXCrF%2FZmMpiHXSUElkCoGyMgmaZmcDrSvvpPzgrl%2B8Juggx3rEFzulG0Mf%2BRwIxApgqYPpNmOUwfdUN1MbRJfuP%2BlJcUzjAa%2FItXn1NwqNaQI2dWaquyppgdu0I15Dz0vKC1eaJYM5HO3nTSICVgaqBL5k%2F3Zjx%2FTghbU4lXvGRSTkAiwQSJLo7KpSvArxKwHc2WUaDVv%2BZpwjv6u6W8MMB6i249ELlFaHo4MICX1MEGOqUBnB31e8N%2F6VAPmWpC9ekdpxM4osKmwkFIwrM%2FBVmVZDYqSJko3dBhap7oOclAl6eLB03HwDb4Nrtav0IK2khrDOvq96aM9e3HgGjMzP8YW34Pf59%2B1z6Y9kZAWmiRSpCf%2Bv%2BjEEvvt7Br8qsk1WBfK9KFARnthLnMe9z0OmiOe%2BtTKOZYUD3JtCyh03nDJ6M0cfC9D0soI8aHKjHm4B0WqZD8Ob%2FC&X-Amz-Signature=61a0037d5c63d982a045f3f6584de94e08f9db1fd3b91b9363e37eb575a1f87d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47LFDQP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FAFJicGlRcInjuvnMnhLG2%2BIUHX3E58GjZLFan9vL1gIgVFHZwMf4gZmPtgjK7%2FyOKhDHqyoOZC4rB%2FBRAJNZhGMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDGqky9%2BaDOZXpY0PSrcA9ytJbRoDO16qROsbivKn7EyPNqpJcdxb62ZAWeNktG1ozqU0ySCy935WJHwDiw15nqjvEEoTQbJjs7b2a4WeDqcRrUnBXphCtrixpYCVU8jSWM4YUkqBgwzvckd6OrPDYcuhQmTlKQHi0IIjyFId7u%2FrKD1IaunE%2BnRGX9FP8PXK%2BHlTyUti8vG5d3R2pq9dcJParMAnUlm%2FRWrqJ8YzpCKGjZO7XWi%2BfDwYs1HufFpxyxrJV2B75FLMen7yLjgqMNSzIMiN%2F0SKWsJK%2F%2FTQXqUcH2uJasdrOcKabgusqz%2F%2Fwfa%2BaOSVdTK7XRTGlJz5r8BMTnNPrvoYz4ylzupJrtNHog4TysLUkhvFgUTaMG9Aji6u34vTzbz8WiWoP6UChI7Y%2FCgSqj9wIyKIaJBqyPJLXCrF%2FZmMpiHXSUElkCoGyMgmaZmcDrSvvpPzgrl%2B8Juggx3rEFzulG0Mf%2BRwIxApgqYPpNmOUwfdUN1MbRJfuP%2BlJcUzjAa%2FItXn1NwqNaQI2dWaquyppgdu0I15Dz0vKC1eaJYM5HO3nTSICVgaqBL5k%2F3Zjx%2FTghbU4lXvGRSTkAiwQSJLo7KpSvArxKwHc2WUaDVv%2BZpwjv6u6W8MMB6i249ELlFaHo4MICX1MEGOqUBnB31e8N%2F6VAPmWpC9ekdpxM4osKmwkFIwrM%2FBVmVZDYqSJko3dBhap7oOclAl6eLB03HwDb4Nrtav0IK2khrDOvq96aM9e3HgGjMzP8YW34Pf59%2B1z6Y9kZAWmiRSpCf%2Bv%2BjEEvvt7Br8qsk1WBfK9KFARnthLnMe9z0OmiOe%2BtTKOZYUD3JtCyh03nDJ6M0cfC9D0soI8aHKjHm4B0WqZD8Ob%2FC&X-Amz-Signature=3874db74ec5d15396809dec6420e3b52cac29e1c93ab8c6754b61662e43f6dce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47LFDQP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FAFJicGlRcInjuvnMnhLG2%2BIUHX3E58GjZLFan9vL1gIgVFHZwMf4gZmPtgjK7%2FyOKhDHqyoOZC4rB%2FBRAJNZhGMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDGqky9%2BaDOZXpY0PSrcA9ytJbRoDO16qROsbivKn7EyPNqpJcdxb62ZAWeNktG1ozqU0ySCy935WJHwDiw15nqjvEEoTQbJjs7b2a4WeDqcRrUnBXphCtrixpYCVU8jSWM4YUkqBgwzvckd6OrPDYcuhQmTlKQHi0IIjyFId7u%2FrKD1IaunE%2BnRGX9FP8PXK%2BHlTyUti8vG5d3R2pq9dcJParMAnUlm%2FRWrqJ8YzpCKGjZO7XWi%2BfDwYs1HufFpxyxrJV2B75FLMen7yLjgqMNSzIMiN%2F0SKWsJK%2F%2FTQXqUcH2uJasdrOcKabgusqz%2F%2Fwfa%2BaOSVdTK7XRTGlJz5r8BMTnNPrvoYz4ylzupJrtNHog4TysLUkhvFgUTaMG9Aji6u34vTzbz8WiWoP6UChI7Y%2FCgSqj9wIyKIaJBqyPJLXCrF%2FZmMpiHXSUElkCoGyMgmaZmcDrSvvpPzgrl%2B8Juggx3rEFzulG0Mf%2BRwIxApgqYPpNmOUwfdUN1MbRJfuP%2BlJcUzjAa%2FItXn1NwqNaQI2dWaquyppgdu0I15Dz0vKC1eaJYM5HO3nTSICVgaqBL5k%2F3Zjx%2FTghbU4lXvGRSTkAiwQSJLo7KpSvArxKwHc2WUaDVv%2BZpwjv6u6W8MMB6i249ELlFaHo4MICX1MEGOqUBnB31e8N%2F6VAPmWpC9ekdpxM4osKmwkFIwrM%2FBVmVZDYqSJko3dBhap7oOclAl6eLB03HwDb4Nrtav0IK2khrDOvq96aM9e3HgGjMzP8YW34Pf59%2B1z6Y9kZAWmiRSpCf%2Bv%2BjEEvvt7Br8qsk1WBfK9KFARnthLnMe9z0OmiOe%2BtTKOZYUD3JtCyh03nDJ6M0cfC9D0soI8aHKjHm4B0WqZD8Ob%2FC&X-Amz-Signature=a24d2b6bc5800024f58b129878e5c0a61af610715160f806df4b0f3cba32758d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47LFDQP%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FAFJicGlRcInjuvnMnhLG2%2BIUHX3E58GjZLFan9vL1gIgVFHZwMf4gZmPtgjK7%2FyOKhDHqyoOZC4rB%2FBRAJNZhGMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDGqky9%2BaDOZXpY0PSrcA9ytJbRoDO16qROsbivKn7EyPNqpJcdxb62ZAWeNktG1ozqU0ySCy935WJHwDiw15nqjvEEoTQbJjs7b2a4WeDqcRrUnBXphCtrixpYCVU8jSWM4YUkqBgwzvckd6OrPDYcuhQmTlKQHi0IIjyFId7u%2FrKD1IaunE%2BnRGX9FP8PXK%2BHlTyUti8vG5d3R2pq9dcJParMAnUlm%2FRWrqJ8YzpCKGjZO7XWi%2BfDwYs1HufFpxyxrJV2B75FLMen7yLjgqMNSzIMiN%2F0SKWsJK%2F%2FTQXqUcH2uJasdrOcKabgusqz%2F%2Fwfa%2BaOSVdTK7XRTGlJz5r8BMTnNPrvoYz4ylzupJrtNHog4TysLUkhvFgUTaMG9Aji6u34vTzbz8WiWoP6UChI7Y%2FCgSqj9wIyKIaJBqyPJLXCrF%2FZmMpiHXSUElkCoGyMgmaZmcDrSvvpPzgrl%2B8Juggx3rEFzulG0Mf%2BRwIxApgqYPpNmOUwfdUN1MbRJfuP%2BlJcUzjAa%2FItXn1NwqNaQI2dWaquyppgdu0I15Dz0vKC1eaJYM5HO3nTSICVgaqBL5k%2F3Zjx%2FTghbU4lXvGRSTkAiwQSJLo7KpSvArxKwHc2WUaDVv%2BZpwjv6u6W8MMB6i249ELlFaHo4MICX1MEGOqUBnB31e8N%2F6VAPmWpC9ekdpxM4osKmwkFIwrM%2FBVmVZDYqSJko3dBhap7oOclAl6eLB03HwDb4Nrtav0IK2khrDOvq96aM9e3HgGjMzP8YW34Pf59%2B1z6Y9kZAWmiRSpCf%2Bv%2BjEEvvt7Br8qsk1WBfK9KFARnthLnMe9z0OmiOe%2BtTKOZYUD3JtCyh03nDJ6M0cfC9D0soI8aHKjHm4B0WqZD8Ob%2FC&X-Amz-Signature=85c30f1073a7f3543520b3c81b3af8f0994f4778842db52c8a1587bc0ec241c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
