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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQS6YDN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEE4U5AOKbZicJi5S%2Bl2%2BPQbT8gTjSOKRVBPGoCJaUSGAiA66AcAhc0%2FYrCFtFg699xu%2F483%2BxuORWQKSTnPUaOlaiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtXDe0EpGViZ9pMGsKtwDV0bK%2Fufo0hZJVobsOr2Z4DrgjAhJNdbfZTH%2BhXk9CcsVYTWaqfcdHgP5pWkA0YVXKDItsKjfMqBGmSjy9sFtnISxdsc7C8hVNSwMWRO0RGO%2FOx%2FqODEyW2kVriig5s8bTAwtO7x5RMSz3C03ULOJc%2F%2BVoy5%2Bj621t3ZvZ6ejHgqznGaz3Ytwb%2B0TG5tDK%2BOk0Ql7ihoIYxrefoIVQjQsNpJpOMiAN%2FTZ%2BvxsDNumYFHqWd9MQgJg4%2BLoFhBypoziwtLuoOD7JG4HxnbrrZk0YOvf9P6kK6cRvVUpMRAxNGuCxzcm5KRmLHpnpuuzYUcEp2N91e5JBh1mH7iC5%2FFz1L9AY425aHE29MDNhXw6kIv9gmUiGuGsyKuXwhWtjqCQsDz7YfDyDkJHkYznUge%2FDNZX1Fudtf4LCle3IBJm0WrmM4B6Zn2qdM9dhkCIaYUGZ9bCMngVDIwxZ9tENhY4p0QFFPMBpzi6Nj7MMpBT8%2BIGT4mANaP4u2TADOKJD2YzIeyk6TAoQBJqBceANW9GTnoNws2w9rACHrts4K9cHXn%2FexKoFEmosiQyyVbavwf%2Fo4GYzaKdX4q1otpAEDl%2FWwU1lmWcHwMyeGA9NSwOCEn5WChkW%2Bva6PCSYzwwh6fovwY6pgEWvcrYKUFKqV6E%2BzSgOTS9jNBFNQwHxYcQOH11z12MCKSjDLaqXEQ4tgyBLutAl179XoNaXVeSYdRdjc0mOI%2FgA4j0pkumNFyP9rGxNvYdTaEG1PjyXpdbqXTlWY7YWEE2Wei4UckUYdUFehqiXbHIbSWV4Uw9Y91EuwlTBucr6fg4r2rZDoyc5%2BpCp63ca%2F9ODJMdmhoKyMXKLb%2FeEe6iosREjQsb&X-Amz-Signature=2520f8bba99ebc2d375a7ccb973336e6e1382620273706c464497a9882c92369&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQS6YDN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEE4U5AOKbZicJi5S%2Bl2%2BPQbT8gTjSOKRVBPGoCJaUSGAiA66AcAhc0%2FYrCFtFg699xu%2F483%2BxuORWQKSTnPUaOlaiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtXDe0EpGViZ9pMGsKtwDV0bK%2Fufo0hZJVobsOr2Z4DrgjAhJNdbfZTH%2BhXk9CcsVYTWaqfcdHgP5pWkA0YVXKDItsKjfMqBGmSjy9sFtnISxdsc7C8hVNSwMWRO0RGO%2FOx%2FqODEyW2kVriig5s8bTAwtO7x5RMSz3C03ULOJc%2F%2BVoy5%2Bj621t3ZvZ6ejHgqznGaz3Ytwb%2B0TG5tDK%2BOk0Ql7ihoIYxrefoIVQjQsNpJpOMiAN%2FTZ%2BvxsDNumYFHqWd9MQgJg4%2BLoFhBypoziwtLuoOD7JG4HxnbrrZk0YOvf9P6kK6cRvVUpMRAxNGuCxzcm5KRmLHpnpuuzYUcEp2N91e5JBh1mH7iC5%2FFz1L9AY425aHE29MDNhXw6kIv9gmUiGuGsyKuXwhWtjqCQsDz7YfDyDkJHkYznUge%2FDNZX1Fudtf4LCle3IBJm0WrmM4B6Zn2qdM9dhkCIaYUGZ9bCMngVDIwxZ9tENhY4p0QFFPMBpzi6Nj7MMpBT8%2BIGT4mANaP4u2TADOKJD2YzIeyk6TAoQBJqBceANW9GTnoNws2w9rACHrts4K9cHXn%2FexKoFEmosiQyyVbavwf%2Fo4GYzaKdX4q1otpAEDl%2FWwU1lmWcHwMyeGA9NSwOCEn5WChkW%2Bva6PCSYzwwh6fovwY6pgEWvcrYKUFKqV6E%2BzSgOTS9jNBFNQwHxYcQOH11z12MCKSjDLaqXEQ4tgyBLutAl179XoNaXVeSYdRdjc0mOI%2FgA4j0pkumNFyP9rGxNvYdTaEG1PjyXpdbqXTlWY7YWEE2Wei4UckUYdUFehqiXbHIbSWV4Uw9Y91EuwlTBucr6fg4r2rZDoyc5%2BpCp63ca%2F9ODJMdmhoKyMXKLb%2FeEe6iosREjQsb&X-Amz-Signature=eaf8cfc9a828699eaf24825562a4ed2abc1c8ed50afb49bd87b8f1b7e2ecf7cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQS6YDN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEE4U5AOKbZicJi5S%2Bl2%2BPQbT8gTjSOKRVBPGoCJaUSGAiA66AcAhc0%2FYrCFtFg699xu%2F483%2BxuORWQKSTnPUaOlaiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtXDe0EpGViZ9pMGsKtwDV0bK%2Fufo0hZJVobsOr2Z4DrgjAhJNdbfZTH%2BhXk9CcsVYTWaqfcdHgP5pWkA0YVXKDItsKjfMqBGmSjy9sFtnISxdsc7C8hVNSwMWRO0RGO%2FOx%2FqODEyW2kVriig5s8bTAwtO7x5RMSz3C03ULOJc%2F%2BVoy5%2Bj621t3ZvZ6ejHgqznGaz3Ytwb%2B0TG5tDK%2BOk0Ql7ihoIYxrefoIVQjQsNpJpOMiAN%2FTZ%2BvxsDNumYFHqWd9MQgJg4%2BLoFhBypoziwtLuoOD7JG4HxnbrrZk0YOvf9P6kK6cRvVUpMRAxNGuCxzcm5KRmLHpnpuuzYUcEp2N91e5JBh1mH7iC5%2FFz1L9AY425aHE29MDNhXw6kIv9gmUiGuGsyKuXwhWtjqCQsDz7YfDyDkJHkYznUge%2FDNZX1Fudtf4LCle3IBJm0WrmM4B6Zn2qdM9dhkCIaYUGZ9bCMngVDIwxZ9tENhY4p0QFFPMBpzi6Nj7MMpBT8%2BIGT4mANaP4u2TADOKJD2YzIeyk6TAoQBJqBceANW9GTnoNws2w9rACHrts4K9cHXn%2FexKoFEmosiQyyVbavwf%2Fo4GYzaKdX4q1otpAEDl%2FWwU1lmWcHwMyeGA9NSwOCEn5WChkW%2Bva6PCSYzwwh6fovwY6pgEWvcrYKUFKqV6E%2BzSgOTS9jNBFNQwHxYcQOH11z12MCKSjDLaqXEQ4tgyBLutAl179XoNaXVeSYdRdjc0mOI%2FgA4j0pkumNFyP9rGxNvYdTaEG1PjyXpdbqXTlWY7YWEE2Wei4UckUYdUFehqiXbHIbSWV4Uw9Y91EuwlTBucr6fg4r2rZDoyc5%2BpCp63ca%2F9ODJMdmhoKyMXKLb%2FeEe6iosREjQsb&X-Amz-Signature=e3626505c40830672fc081071afa94f5d298e6bde0665d75ed44b67ebb3cda47&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQS6YDN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEE4U5AOKbZicJi5S%2Bl2%2BPQbT8gTjSOKRVBPGoCJaUSGAiA66AcAhc0%2FYrCFtFg699xu%2F483%2BxuORWQKSTnPUaOlaiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtXDe0EpGViZ9pMGsKtwDV0bK%2Fufo0hZJVobsOr2Z4DrgjAhJNdbfZTH%2BhXk9CcsVYTWaqfcdHgP5pWkA0YVXKDItsKjfMqBGmSjy9sFtnISxdsc7C8hVNSwMWRO0RGO%2FOx%2FqODEyW2kVriig5s8bTAwtO7x5RMSz3C03ULOJc%2F%2BVoy5%2Bj621t3ZvZ6ejHgqznGaz3Ytwb%2B0TG5tDK%2BOk0Ql7ihoIYxrefoIVQjQsNpJpOMiAN%2FTZ%2BvxsDNumYFHqWd9MQgJg4%2BLoFhBypoziwtLuoOD7JG4HxnbrrZk0YOvf9P6kK6cRvVUpMRAxNGuCxzcm5KRmLHpnpuuzYUcEp2N91e5JBh1mH7iC5%2FFz1L9AY425aHE29MDNhXw6kIv9gmUiGuGsyKuXwhWtjqCQsDz7YfDyDkJHkYznUge%2FDNZX1Fudtf4LCle3IBJm0WrmM4B6Zn2qdM9dhkCIaYUGZ9bCMngVDIwxZ9tENhY4p0QFFPMBpzi6Nj7MMpBT8%2BIGT4mANaP4u2TADOKJD2YzIeyk6TAoQBJqBceANW9GTnoNws2w9rACHrts4K9cHXn%2FexKoFEmosiQyyVbavwf%2Fo4GYzaKdX4q1otpAEDl%2FWwU1lmWcHwMyeGA9NSwOCEn5WChkW%2Bva6PCSYzwwh6fovwY6pgEWvcrYKUFKqV6E%2BzSgOTS9jNBFNQwHxYcQOH11z12MCKSjDLaqXEQ4tgyBLutAl179XoNaXVeSYdRdjc0mOI%2FgA4j0pkumNFyP9rGxNvYdTaEG1PjyXpdbqXTlWY7YWEE2Wei4UckUYdUFehqiXbHIbSWV4Uw9Y91EuwlTBucr6fg4r2rZDoyc5%2BpCp63ca%2F9ODJMdmhoKyMXKLb%2FeEe6iosREjQsb&X-Amz-Signature=5c6bdeacdd5351d6aee7783fd011dee0a75cf27de8e601120c3a078f08f84753&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQS6YDN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEE4U5AOKbZicJi5S%2Bl2%2BPQbT8gTjSOKRVBPGoCJaUSGAiA66AcAhc0%2FYrCFtFg699xu%2F483%2BxuORWQKSTnPUaOlaiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtXDe0EpGViZ9pMGsKtwDV0bK%2Fufo0hZJVobsOr2Z4DrgjAhJNdbfZTH%2BhXk9CcsVYTWaqfcdHgP5pWkA0YVXKDItsKjfMqBGmSjy9sFtnISxdsc7C8hVNSwMWRO0RGO%2FOx%2FqODEyW2kVriig5s8bTAwtO7x5RMSz3C03ULOJc%2F%2BVoy5%2Bj621t3ZvZ6ejHgqznGaz3Ytwb%2B0TG5tDK%2BOk0Ql7ihoIYxrefoIVQjQsNpJpOMiAN%2FTZ%2BvxsDNumYFHqWd9MQgJg4%2BLoFhBypoziwtLuoOD7JG4HxnbrrZk0YOvf9P6kK6cRvVUpMRAxNGuCxzcm5KRmLHpnpuuzYUcEp2N91e5JBh1mH7iC5%2FFz1L9AY425aHE29MDNhXw6kIv9gmUiGuGsyKuXwhWtjqCQsDz7YfDyDkJHkYznUge%2FDNZX1Fudtf4LCle3IBJm0WrmM4B6Zn2qdM9dhkCIaYUGZ9bCMngVDIwxZ9tENhY4p0QFFPMBpzi6Nj7MMpBT8%2BIGT4mANaP4u2TADOKJD2YzIeyk6TAoQBJqBceANW9GTnoNws2w9rACHrts4K9cHXn%2FexKoFEmosiQyyVbavwf%2Fo4GYzaKdX4q1otpAEDl%2FWwU1lmWcHwMyeGA9NSwOCEn5WChkW%2Bva6PCSYzwwh6fovwY6pgEWvcrYKUFKqV6E%2BzSgOTS9jNBFNQwHxYcQOH11z12MCKSjDLaqXEQ4tgyBLutAl179XoNaXVeSYdRdjc0mOI%2FgA4j0pkumNFyP9rGxNvYdTaEG1PjyXpdbqXTlWY7YWEE2Wei4UckUYdUFehqiXbHIbSWV4Uw9Y91EuwlTBucr6fg4r2rZDoyc5%2BpCp63ca%2F9ODJMdmhoKyMXKLb%2FeEe6iosREjQsb&X-Amz-Signature=79a2f6c7702c460b2e535385346480f24afe766fe6c8a3d1236af5353aab4030&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQS6YDN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEE4U5AOKbZicJi5S%2Bl2%2BPQbT8gTjSOKRVBPGoCJaUSGAiA66AcAhc0%2FYrCFtFg699xu%2F483%2BxuORWQKSTnPUaOlaiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtXDe0EpGViZ9pMGsKtwDV0bK%2Fufo0hZJVobsOr2Z4DrgjAhJNdbfZTH%2BhXk9CcsVYTWaqfcdHgP5pWkA0YVXKDItsKjfMqBGmSjy9sFtnISxdsc7C8hVNSwMWRO0RGO%2FOx%2FqODEyW2kVriig5s8bTAwtO7x5RMSz3C03ULOJc%2F%2BVoy5%2Bj621t3ZvZ6ejHgqznGaz3Ytwb%2B0TG5tDK%2BOk0Ql7ihoIYxrefoIVQjQsNpJpOMiAN%2FTZ%2BvxsDNumYFHqWd9MQgJg4%2BLoFhBypoziwtLuoOD7JG4HxnbrrZk0YOvf9P6kK6cRvVUpMRAxNGuCxzcm5KRmLHpnpuuzYUcEp2N91e5JBh1mH7iC5%2FFz1L9AY425aHE29MDNhXw6kIv9gmUiGuGsyKuXwhWtjqCQsDz7YfDyDkJHkYznUge%2FDNZX1Fudtf4LCle3IBJm0WrmM4B6Zn2qdM9dhkCIaYUGZ9bCMngVDIwxZ9tENhY4p0QFFPMBpzi6Nj7MMpBT8%2BIGT4mANaP4u2TADOKJD2YzIeyk6TAoQBJqBceANW9GTnoNws2w9rACHrts4K9cHXn%2FexKoFEmosiQyyVbavwf%2Fo4GYzaKdX4q1otpAEDl%2FWwU1lmWcHwMyeGA9NSwOCEn5WChkW%2Bva6PCSYzwwh6fovwY6pgEWvcrYKUFKqV6E%2BzSgOTS9jNBFNQwHxYcQOH11z12MCKSjDLaqXEQ4tgyBLutAl179XoNaXVeSYdRdjc0mOI%2FgA4j0pkumNFyP9rGxNvYdTaEG1PjyXpdbqXTlWY7YWEE2Wei4UckUYdUFehqiXbHIbSWV4Uw9Y91EuwlTBucr6fg4r2rZDoyc5%2BpCp63ca%2F9ODJMdmhoKyMXKLb%2FeEe6iosREjQsb&X-Amz-Signature=d27b767d8812205cddc7f8e7b2e4331a8a49600bae6e44958784f067ff7bcc26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQS6YDN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEE4U5AOKbZicJi5S%2Bl2%2BPQbT8gTjSOKRVBPGoCJaUSGAiA66AcAhc0%2FYrCFtFg699xu%2F483%2BxuORWQKSTnPUaOlaiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtXDe0EpGViZ9pMGsKtwDV0bK%2Fufo0hZJVobsOr2Z4DrgjAhJNdbfZTH%2BhXk9CcsVYTWaqfcdHgP5pWkA0YVXKDItsKjfMqBGmSjy9sFtnISxdsc7C8hVNSwMWRO0RGO%2FOx%2FqODEyW2kVriig5s8bTAwtO7x5RMSz3C03ULOJc%2F%2BVoy5%2Bj621t3ZvZ6ejHgqznGaz3Ytwb%2B0TG5tDK%2BOk0Ql7ihoIYxrefoIVQjQsNpJpOMiAN%2FTZ%2BvxsDNumYFHqWd9MQgJg4%2BLoFhBypoziwtLuoOD7JG4HxnbrrZk0YOvf9P6kK6cRvVUpMRAxNGuCxzcm5KRmLHpnpuuzYUcEp2N91e5JBh1mH7iC5%2FFz1L9AY425aHE29MDNhXw6kIv9gmUiGuGsyKuXwhWtjqCQsDz7YfDyDkJHkYznUge%2FDNZX1Fudtf4LCle3IBJm0WrmM4B6Zn2qdM9dhkCIaYUGZ9bCMngVDIwxZ9tENhY4p0QFFPMBpzi6Nj7MMpBT8%2BIGT4mANaP4u2TADOKJD2YzIeyk6TAoQBJqBceANW9GTnoNws2w9rACHrts4K9cHXn%2FexKoFEmosiQyyVbavwf%2Fo4GYzaKdX4q1otpAEDl%2FWwU1lmWcHwMyeGA9NSwOCEn5WChkW%2Bva6PCSYzwwh6fovwY6pgEWvcrYKUFKqV6E%2BzSgOTS9jNBFNQwHxYcQOH11z12MCKSjDLaqXEQ4tgyBLutAl179XoNaXVeSYdRdjc0mOI%2FgA4j0pkumNFyP9rGxNvYdTaEG1PjyXpdbqXTlWY7YWEE2Wei4UckUYdUFehqiXbHIbSWV4Uw9Y91EuwlTBucr6fg4r2rZDoyc5%2BpCp63ca%2F9ODJMdmhoKyMXKLb%2FeEe6iosREjQsb&X-Amz-Signature=62c9f302d62318283c094141e23c5ccbbc709d15509397b042e7861219e724f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQS6YDN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEE4U5AOKbZicJi5S%2Bl2%2BPQbT8gTjSOKRVBPGoCJaUSGAiA66AcAhc0%2FYrCFtFg699xu%2F483%2BxuORWQKSTnPUaOlaiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtXDe0EpGViZ9pMGsKtwDV0bK%2Fufo0hZJVobsOr2Z4DrgjAhJNdbfZTH%2BhXk9CcsVYTWaqfcdHgP5pWkA0YVXKDItsKjfMqBGmSjy9sFtnISxdsc7C8hVNSwMWRO0RGO%2FOx%2FqODEyW2kVriig5s8bTAwtO7x5RMSz3C03ULOJc%2F%2BVoy5%2Bj621t3ZvZ6ejHgqznGaz3Ytwb%2B0TG5tDK%2BOk0Ql7ihoIYxrefoIVQjQsNpJpOMiAN%2FTZ%2BvxsDNumYFHqWd9MQgJg4%2BLoFhBypoziwtLuoOD7JG4HxnbrrZk0YOvf9P6kK6cRvVUpMRAxNGuCxzcm5KRmLHpnpuuzYUcEp2N91e5JBh1mH7iC5%2FFz1L9AY425aHE29MDNhXw6kIv9gmUiGuGsyKuXwhWtjqCQsDz7YfDyDkJHkYznUge%2FDNZX1Fudtf4LCle3IBJm0WrmM4B6Zn2qdM9dhkCIaYUGZ9bCMngVDIwxZ9tENhY4p0QFFPMBpzi6Nj7MMpBT8%2BIGT4mANaP4u2TADOKJD2YzIeyk6TAoQBJqBceANW9GTnoNws2w9rACHrts4K9cHXn%2FexKoFEmosiQyyVbavwf%2Fo4GYzaKdX4q1otpAEDl%2FWwU1lmWcHwMyeGA9NSwOCEn5WChkW%2Bva6PCSYzwwh6fovwY6pgEWvcrYKUFKqV6E%2BzSgOTS9jNBFNQwHxYcQOH11z12MCKSjDLaqXEQ4tgyBLutAl179XoNaXVeSYdRdjc0mOI%2FgA4j0pkumNFyP9rGxNvYdTaEG1PjyXpdbqXTlWY7YWEE2Wei4UckUYdUFehqiXbHIbSWV4Uw9Y91EuwlTBucr6fg4r2rZDoyc5%2BpCp63ca%2F9ODJMdmhoKyMXKLb%2FeEe6iosREjQsb&X-Amz-Signature=5f67aae104d39bb77a77946f8b5cc990ae21fbf0f7d0e88f53c65e7b1ae1b342&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
