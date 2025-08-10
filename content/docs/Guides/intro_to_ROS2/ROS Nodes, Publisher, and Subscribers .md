---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BU5NGHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPpJj4ZQbkwrJTCv9795QbXg%2Fn3D3hqB%2FHR2thWcSnTAiEAk31Z8E%2FGtyD%2FYIbmh5YQZCFrwu%2B4Fo8%2Bxt893HFCfbEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI8SV86z7PvUnmVDyrcA%2BaYa7mPcGVEOiksUDbHqjmx3pFPZC86ZFA4ZXk3p28RvzjkMshmH2uMbnmK7hG6Quem%2FgaPXkqR1dd407%2FuXNFCGiY92yhVmj%2FZKXHXAF2c%2BKphpZTWbDVosa7isu1xfJktDmIEd8I%2F4%2BwoF1cJHlcrdctbeMCYsR0erQ1K4HHZzlvbcdV1eClD%2ByIe53LRT9Zl7pm8dzUbf5Zk%2FIV8T9g6UWLo1n8iHnWBHWra7VPDofGmrCxuHGOpLvXaQ0mDSOWER3ylc6XMwEh4kC8cQXkwNoDHbfyetXYppzj5n5jgACjbSqWwFWSL9C6fhAOQY%2BnOriz5vpjnesNhcH8L2UVww8i2ZYwbufdEjc5olfcGqQu7665RWgrMz4NXczYSCuB%2BbWqXf8vOtBSZ0U2Z39EyNw4Mw7uwe4WyubGYxMhJ8u%2BUf9izDn26RWv8gxpMJqPrItDmRwygs0BoTn1Hb980EVoRVVyczux5p7CJvgi9UaJvC1juwD1QGLSdqtIJM%2FlhfrpWZvxjnNPOHAu3wft82G1tT0zUdo%2BVSSQvdbGoASHJzx%2F7jKc%2ByfldHMutXvLoXVFGo8Rq8nKpsP8N%2FG1JhqIfGjxeaxgiieFRMZbHWzzSa2ExyXgvtVE6MP%2B648QGOqUB%2BP7J3wfTdh1W2%2FsfqvAd3Y2UiYdiBraOiU2jecer%2BOHx1KOeLy%2Ffn4p%2BtgbOu%2B8e7dJouc3Q7%2FrFSfWLUIQ3V0EIV%2FWw%2Bd9VO9dt4PN2pT1FaTDWSqNV036O4kn%2BG4vgBUREAXrG8HQuYProwzh2mY6tiUiToboudxau1NjY8IsFSlALTAgmjOj9A7ktSz4dMGtqRAmXG62qZi0k17W5Lt2DHKkV&X-Amz-Signature=c5422543523723c81823e53200f1b6eb87562fd01ca67bc91c74528c25c174d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BU5NGHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPpJj4ZQbkwrJTCv9795QbXg%2Fn3D3hqB%2FHR2thWcSnTAiEAk31Z8E%2FGtyD%2FYIbmh5YQZCFrwu%2B4Fo8%2Bxt893HFCfbEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI8SV86z7PvUnmVDyrcA%2BaYa7mPcGVEOiksUDbHqjmx3pFPZC86ZFA4ZXk3p28RvzjkMshmH2uMbnmK7hG6Quem%2FgaPXkqR1dd407%2FuXNFCGiY92yhVmj%2FZKXHXAF2c%2BKphpZTWbDVosa7isu1xfJktDmIEd8I%2F4%2BwoF1cJHlcrdctbeMCYsR0erQ1K4HHZzlvbcdV1eClD%2ByIe53LRT9Zl7pm8dzUbf5Zk%2FIV8T9g6UWLo1n8iHnWBHWra7VPDofGmrCxuHGOpLvXaQ0mDSOWER3ylc6XMwEh4kC8cQXkwNoDHbfyetXYppzj5n5jgACjbSqWwFWSL9C6fhAOQY%2BnOriz5vpjnesNhcH8L2UVww8i2ZYwbufdEjc5olfcGqQu7665RWgrMz4NXczYSCuB%2BbWqXf8vOtBSZ0U2Z39EyNw4Mw7uwe4WyubGYxMhJ8u%2BUf9izDn26RWv8gxpMJqPrItDmRwygs0BoTn1Hb980EVoRVVyczux5p7CJvgi9UaJvC1juwD1QGLSdqtIJM%2FlhfrpWZvxjnNPOHAu3wft82G1tT0zUdo%2BVSSQvdbGoASHJzx%2F7jKc%2ByfldHMutXvLoXVFGo8Rq8nKpsP8N%2FG1JhqIfGjxeaxgiieFRMZbHWzzSa2ExyXgvtVE6MP%2B648QGOqUB%2BP7J3wfTdh1W2%2FsfqvAd3Y2UiYdiBraOiU2jecer%2BOHx1KOeLy%2Ffn4p%2BtgbOu%2B8e7dJouc3Q7%2FrFSfWLUIQ3V0EIV%2FWw%2Bd9VO9dt4PN2pT1FaTDWSqNV036O4kn%2BG4vgBUREAXrG8HQuYProwzh2mY6tiUiToboudxau1NjY8IsFSlALTAgmjOj9A7ktSz4dMGtqRAmXG62qZi0k17W5Lt2DHKkV&X-Amz-Signature=0f0d60ecacc25f53eb7c038993f8a41ff9150342a2d6c458c11af7a03c537b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BU5NGHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPpJj4ZQbkwrJTCv9795QbXg%2Fn3D3hqB%2FHR2thWcSnTAiEAk31Z8E%2FGtyD%2FYIbmh5YQZCFrwu%2B4Fo8%2Bxt893HFCfbEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI8SV86z7PvUnmVDyrcA%2BaYa7mPcGVEOiksUDbHqjmx3pFPZC86ZFA4ZXk3p28RvzjkMshmH2uMbnmK7hG6Quem%2FgaPXkqR1dd407%2FuXNFCGiY92yhVmj%2FZKXHXAF2c%2BKphpZTWbDVosa7isu1xfJktDmIEd8I%2F4%2BwoF1cJHlcrdctbeMCYsR0erQ1K4HHZzlvbcdV1eClD%2ByIe53LRT9Zl7pm8dzUbf5Zk%2FIV8T9g6UWLo1n8iHnWBHWra7VPDofGmrCxuHGOpLvXaQ0mDSOWER3ylc6XMwEh4kC8cQXkwNoDHbfyetXYppzj5n5jgACjbSqWwFWSL9C6fhAOQY%2BnOriz5vpjnesNhcH8L2UVww8i2ZYwbufdEjc5olfcGqQu7665RWgrMz4NXczYSCuB%2BbWqXf8vOtBSZ0U2Z39EyNw4Mw7uwe4WyubGYxMhJ8u%2BUf9izDn26RWv8gxpMJqPrItDmRwygs0BoTn1Hb980EVoRVVyczux5p7CJvgi9UaJvC1juwD1QGLSdqtIJM%2FlhfrpWZvxjnNPOHAu3wft82G1tT0zUdo%2BVSSQvdbGoASHJzx%2F7jKc%2ByfldHMutXvLoXVFGo8Rq8nKpsP8N%2FG1JhqIfGjxeaxgiieFRMZbHWzzSa2ExyXgvtVE6MP%2B648QGOqUB%2BP7J3wfTdh1W2%2FsfqvAd3Y2UiYdiBraOiU2jecer%2BOHx1KOeLy%2Ffn4p%2BtgbOu%2B8e7dJouc3Q7%2FrFSfWLUIQ3V0EIV%2FWw%2Bd9VO9dt4PN2pT1FaTDWSqNV036O4kn%2BG4vgBUREAXrG8HQuYProwzh2mY6tiUiToboudxau1NjY8IsFSlALTAgmjOj9A7ktSz4dMGtqRAmXG62qZi0k17W5Lt2DHKkV&X-Amz-Signature=4d4a089f140f9ca0a5f7a03b85c0653201eaa71c90165b517cb60e31fe7707f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BU5NGHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPpJj4ZQbkwrJTCv9795QbXg%2Fn3D3hqB%2FHR2thWcSnTAiEAk31Z8E%2FGtyD%2FYIbmh5YQZCFrwu%2B4Fo8%2Bxt893HFCfbEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI8SV86z7PvUnmVDyrcA%2BaYa7mPcGVEOiksUDbHqjmx3pFPZC86ZFA4ZXk3p28RvzjkMshmH2uMbnmK7hG6Quem%2FgaPXkqR1dd407%2FuXNFCGiY92yhVmj%2FZKXHXAF2c%2BKphpZTWbDVosa7isu1xfJktDmIEd8I%2F4%2BwoF1cJHlcrdctbeMCYsR0erQ1K4HHZzlvbcdV1eClD%2ByIe53LRT9Zl7pm8dzUbf5Zk%2FIV8T9g6UWLo1n8iHnWBHWra7VPDofGmrCxuHGOpLvXaQ0mDSOWER3ylc6XMwEh4kC8cQXkwNoDHbfyetXYppzj5n5jgACjbSqWwFWSL9C6fhAOQY%2BnOriz5vpjnesNhcH8L2UVww8i2ZYwbufdEjc5olfcGqQu7665RWgrMz4NXczYSCuB%2BbWqXf8vOtBSZ0U2Z39EyNw4Mw7uwe4WyubGYxMhJ8u%2BUf9izDn26RWv8gxpMJqPrItDmRwygs0BoTn1Hb980EVoRVVyczux5p7CJvgi9UaJvC1juwD1QGLSdqtIJM%2FlhfrpWZvxjnNPOHAu3wft82G1tT0zUdo%2BVSSQvdbGoASHJzx%2F7jKc%2ByfldHMutXvLoXVFGo8Rq8nKpsP8N%2FG1JhqIfGjxeaxgiieFRMZbHWzzSa2ExyXgvtVE6MP%2B648QGOqUB%2BP7J3wfTdh1W2%2FsfqvAd3Y2UiYdiBraOiU2jecer%2BOHx1KOeLy%2Ffn4p%2BtgbOu%2B8e7dJouc3Q7%2FrFSfWLUIQ3V0EIV%2FWw%2Bd9VO9dt4PN2pT1FaTDWSqNV036O4kn%2BG4vgBUREAXrG8HQuYProwzh2mY6tiUiToboudxau1NjY8IsFSlALTAgmjOj9A7ktSz4dMGtqRAmXG62qZi0k17W5Lt2DHKkV&X-Amz-Signature=f51c684e4e162875bbd73bc13751941d4e9837c61514a361b5cb997073b9ae65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BU5NGHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPpJj4ZQbkwrJTCv9795QbXg%2Fn3D3hqB%2FHR2thWcSnTAiEAk31Z8E%2FGtyD%2FYIbmh5YQZCFrwu%2B4Fo8%2Bxt893HFCfbEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI8SV86z7PvUnmVDyrcA%2BaYa7mPcGVEOiksUDbHqjmx3pFPZC86ZFA4ZXk3p28RvzjkMshmH2uMbnmK7hG6Quem%2FgaPXkqR1dd407%2FuXNFCGiY92yhVmj%2FZKXHXAF2c%2BKphpZTWbDVosa7isu1xfJktDmIEd8I%2F4%2BwoF1cJHlcrdctbeMCYsR0erQ1K4HHZzlvbcdV1eClD%2ByIe53LRT9Zl7pm8dzUbf5Zk%2FIV8T9g6UWLo1n8iHnWBHWra7VPDofGmrCxuHGOpLvXaQ0mDSOWER3ylc6XMwEh4kC8cQXkwNoDHbfyetXYppzj5n5jgACjbSqWwFWSL9C6fhAOQY%2BnOriz5vpjnesNhcH8L2UVww8i2ZYwbufdEjc5olfcGqQu7665RWgrMz4NXczYSCuB%2BbWqXf8vOtBSZ0U2Z39EyNw4Mw7uwe4WyubGYxMhJ8u%2BUf9izDn26RWv8gxpMJqPrItDmRwygs0BoTn1Hb980EVoRVVyczux5p7CJvgi9UaJvC1juwD1QGLSdqtIJM%2FlhfrpWZvxjnNPOHAu3wft82G1tT0zUdo%2BVSSQvdbGoASHJzx%2F7jKc%2ByfldHMutXvLoXVFGo8Rq8nKpsP8N%2FG1JhqIfGjxeaxgiieFRMZbHWzzSa2ExyXgvtVE6MP%2B648QGOqUB%2BP7J3wfTdh1W2%2FsfqvAd3Y2UiYdiBraOiU2jecer%2BOHx1KOeLy%2Ffn4p%2BtgbOu%2B8e7dJouc3Q7%2FrFSfWLUIQ3V0EIV%2FWw%2Bd9VO9dt4PN2pT1FaTDWSqNV036O4kn%2BG4vgBUREAXrG8HQuYProwzh2mY6tiUiToboudxau1NjY8IsFSlALTAgmjOj9A7ktSz4dMGtqRAmXG62qZi0k17W5Lt2DHKkV&X-Amz-Signature=dd1de272dd10b9b134c644c8311988536175d70d369f1fe0d7cb0102750590e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BU5NGHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPpJj4ZQbkwrJTCv9795QbXg%2Fn3D3hqB%2FHR2thWcSnTAiEAk31Z8E%2FGtyD%2FYIbmh5YQZCFrwu%2B4Fo8%2Bxt893HFCfbEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI8SV86z7PvUnmVDyrcA%2BaYa7mPcGVEOiksUDbHqjmx3pFPZC86ZFA4ZXk3p28RvzjkMshmH2uMbnmK7hG6Quem%2FgaPXkqR1dd407%2FuXNFCGiY92yhVmj%2FZKXHXAF2c%2BKphpZTWbDVosa7isu1xfJktDmIEd8I%2F4%2BwoF1cJHlcrdctbeMCYsR0erQ1K4HHZzlvbcdV1eClD%2ByIe53LRT9Zl7pm8dzUbf5Zk%2FIV8T9g6UWLo1n8iHnWBHWra7VPDofGmrCxuHGOpLvXaQ0mDSOWER3ylc6XMwEh4kC8cQXkwNoDHbfyetXYppzj5n5jgACjbSqWwFWSL9C6fhAOQY%2BnOriz5vpjnesNhcH8L2UVww8i2ZYwbufdEjc5olfcGqQu7665RWgrMz4NXczYSCuB%2BbWqXf8vOtBSZ0U2Z39EyNw4Mw7uwe4WyubGYxMhJ8u%2BUf9izDn26RWv8gxpMJqPrItDmRwygs0BoTn1Hb980EVoRVVyczux5p7CJvgi9UaJvC1juwD1QGLSdqtIJM%2FlhfrpWZvxjnNPOHAu3wft82G1tT0zUdo%2BVSSQvdbGoASHJzx%2F7jKc%2ByfldHMutXvLoXVFGo8Rq8nKpsP8N%2FG1JhqIfGjxeaxgiieFRMZbHWzzSa2ExyXgvtVE6MP%2B648QGOqUB%2BP7J3wfTdh1W2%2FsfqvAd3Y2UiYdiBraOiU2jecer%2BOHx1KOeLy%2Ffn4p%2BtgbOu%2B8e7dJouc3Q7%2FrFSfWLUIQ3V0EIV%2FWw%2Bd9VO9dt4PN2pT1FaTDWSqNV036O4kn%2BG4vgBUREAXrG8HQuYProwzh2mY6tiUiToboudxau1NjY8IsFSlALTAgmjOj9A7ktSz4dMGtqRAmXG62qZi0k17W5Lt2DHKkV&X-Amz-Signature=0be8957e10528aa86cb46e6f465f2bd4f907c9ebc223e813ca210477df4b84c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BU5NGHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPpJj4ZQbkwrJTCv9795QbXg%2Fn3D3hqB%2FHR2thWcSnTAiEAk31Z8E%2FGtyD%2FYIbmh5YQZCFrwu%2B4Fo8%2Bxt893HFCfbEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI8SV86z7PvUnmVDyrcA%2BaYa7mPcGVEOiksUDbHqjmx3pFPZC86ZFA4ZXk3p28RvzjkMshmH2uMbnmK7hG6Quem%2FgaPXkqR1dd407%2FuXNFCGiY92yhVmj%2FZKXHXAF2c%2BKphpZTWbDVosa7isu1xfJktDmIEd8I%2F4%2BwoF1cJHlcrdctbeMCYsR0erQ1K4HHZzlvbcdV1eClD%2ByIe53LRT9Zl7pm8dzUbf5Zk%2FIV8T9g6UWLo1n8iHnWBHWra7VPDofGmrCxuHGOpLvXaQ0mDSOWER3ylc6XMwEh4kC8cQXkwNoDHbfyetXYppzj5n5jgACjbSqWwFWSL9C6fhAOQY%2BnOriz5vpjnesNhcH8L2UVww8i2ZYwbufdEjc5olfcGqQu7665RWgrMz4NXczYSCuB%2BbWqXf8vOtBSZ0U2Z39EyNw4Mw7uwe4WyubGYxMhJ8u%2BUf9izDn26RWv8gxpMJqPrItDmRwygs0BoTn1Hb980EVoRVVyczux5p7CJvgi9UaJvC1juwD1QGLSdqtIJM%2FlhfrpWZvxjnNPOHAu3wft82G1tT0zUdo%2BVSSQvdbGoASHJzx%2F7jKc%2ByfldHMutXvLoXVFGo8Rq8nKpsP8N%2FG1JhqIfGjxeaxgiieFRMZbHWzzSa2ExyXgvtVE6MP%2B648QGOqUB%2BP7J3wfTdh1W2%2FsfqvAd3Y2UiYdiBraOiU2jecer%2BOHx1KOeLy%2Ffn4p%2BtgbOu%2B8e7dJouc3Q7%2FrFSfWLUIQ3V0EIV%2FWw%2Bd9VO9dt4PN2pT1FaTDWSqNV036O4kn%2BG4vgBUREAXrG8HQuYProwzh2mY6tiUiToboudxau1NjY8IsFSlALTAgmjOj9A7ktSz4dMGtqRAmXG62qZi0k17W5Lt2DHKkV&X-Amz-Signature=0e025e7055bde6efb14b569941ab3f2f8605d1b07e62dbfd2904dae6ba063520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BU5NGHP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPpJj4ZQbkwrJTCv9795QbXg%2Fn3D3hqB%2FHR2thWcSnTAiEAk31Z8E%2FGtyD%2FYIbmh5YQZCFrwu%2B4Fo8%2Bxt893HFCfbEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFI8SV86z7PvUnmVDyrcA%2BaYa7mPcGVEOiksUDbHqjmx3pFPZC86ZFA4ZXk3p28RvzjkMshmH2uMbnmK7hG6Quem%2FgaPXkqR1dd407%2FuXNFCGiY92yhVmj%2FZKXHXAF2c%2BKphpZTWbDVosa7isu1xfJktDmIEd8I%2F4%2BwoF1cJHlcrdctbeMCYsR0erQ1K4HHZzlvbcdV1eClD%2ByIe53LRT9Zl7pm8dzUbf5Zk%2FIV8T9g6UWLo1n8iHnWBHWra7VPDofGmrCxuHGOpLvXaQ0mDSOWER3ylc6XMwEh4kC8cQXkwNoDHbfyetXYppzj5n5jgACjbSqWwFWSL9C6fhAOQY%2BnOriz5vpjnesNhcH8L2UVww8i2ZYwbufdEjc5olfcGqQu7665RWgrMz4NXczYSCuB%2BbWqXf8vOtBSZ0U2Z39EyNw4Mw7uwe4WyubGYxMhJ8u%2BUf9izDn26RWv8gxpMJqPrItDmRwygs0BoTn1Hb980EVoRVVyczux5p7CJvgi9UaJvC1juwD1QGLSdqtIJM%2FlhfrpWZvxjnNPOHAu3wft82G1tT0zUdo%2BVSSQvdbGoASHJzx%2F7jKc%2ByfldHMutXvLoXVFGo8Rq8nKpsP8N%2FG1JhqIfGjxeaxgiieFRMZbHWzzSa2ExyXgvtVE6MP%2B648QGOqUB%2BP7J3wfTdh1W2%2FsfqvAd3Y2UiYdiBraOiU2jecer%2BOHx1KOeLy%2Ffn4p%2BtgbOu%2B8e7dJouc3Q7%2FrFSfWLUIQ3V0EIV%2FWw%2Bd9VO9dt4PN2pT1FaTDWSqNV036O4kn%2BG4vgBUREAXrG8HQuYProwzh2mY6tiUiToboudxau1NjY8IsFSlALTAgmjOj9A7ktSz4dMGtqRAmXG62qZi0k17W5Lt2DHKkV&X-Amz-Signature=4dc380cb6e12834fc6e1dfded251b56dd8209eb5cb69a8f30f31f8ce3a3ae0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
