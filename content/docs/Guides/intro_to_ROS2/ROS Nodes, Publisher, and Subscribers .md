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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTZCCEP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC6vX9MGjySt32mbuGaOnZlPgE77nScAtjByAChJ0j%2BWQIhAPGSMggRkIO4xzXSlZinhmqRz29OrBBaY63JO74ys%2FCzKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym89FryuhbqXR84n4q3AMeCM0gP7kIlWImKPHsAd4IHT1O%2FYt75nfcF0KlyZT1rJnkaApK%2F7nxcZ8zb4KlQJKgk0PUkeDViPaJY4DcK%2BABEoTwmu2MaQuSTZ0n455j26J8RqIo2wi4d13bHAvi5ABcsJlLoRTC4DOIvKt%2Fayp7v61vuIzMf3i7RhPttf1M8LdHsQsUFPuSamIbp2C1s35t7ihDJ4Ki3%2FX6PYcV6F5EhYhq7VnMfz4xuubBDyrBd%2BWBrNrZ1UFPtN6IJQJRuzcbW%2FSlgPW4i3gm8RGyRX4ItVBzYAHBGXSTRhkvYxTEerdmiU4nKFEM04gFdUE1JQtKmqYERP7WErNlwnsaACugJQVd%2BmjihhOIkeMh904dXnyhZXC5jRMpX6w3uQQxPUlRJ8WE15zKddaBbWNGAqCm%2Br29yYiZNn9%2FJJqMagtqIknXgbIBa%2FtlqmRp7dCq146zJO228lHISGns%2BXTu2F3enXlu7Aue5ftUey5cOVQ5buyQ6hoXR4bXLYv6uvDxGIgjFArfsMIwCzyOspcFab504SWBupOU7Om3sju06TWPrSgcg4E3ZPqtXh0J1H3AvBOCqvnAPocX5tK7mZP97JxwJe%2BcXXUaqt1%2F6DVX2p0Ctn58ZSTcWB315xQ4pjD839%2FCBjqkAT%2BZTzN%2Flt7w9geYOWE803a6jf9Uyh0pW%2FQPnLIP0chA%2BEpMZRAPneEPluAD%2FShPKMlESD8pd%2BiCJcEVPDsN8EWVUHYP2Em1uBxFochf0DdlSsn3YZyXbvN3x8AC1iWkEo6Uweeofo%2FISAYZpE9937%2B6yDQhYP1ScGCUXyVuHVFsgrVvgzcQZTyvCHso4qtrNGvbfwha2qqH2QiAVjO%2B5HIbsYGa&X-Amz-Signature=b6d448f2439e539db45f202935cd54cd8292d0fd904711645d657310c0875a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTZCCEP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC6vX9MGjySt32mbuGaOnZlPgE77nScAtjByAChJ0j%2BWQIhAPGSMggRkIO4xzXSlZinhmqRz29OrBBaY63JO74ys%2FCzKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym89FryuhbqXR84n4q3AMeCM0gP7kIlWImKPHsAd4IHT1O%2FYt75nfcF0KlyZT1rJnkaApK%2F7nxcZ8zb4KlQJKgk0PUkeDViPaJY4DcK%2BABEoTwmu2MaQuSTZ0n455j26J8RqIo2wi4d13bHAvi5ABcsJlLoRTC4DOIvKt%2Fayp7v61vuIzMf3i7RhPttf1M8LdHsQsUFPuSamIbp2C1s35t7ihDJ4Ki3%2FX6PYcV6F5EhYhq7VnMfz4xuubBDyrBd%2BWBrNrZ1UFPtN6IJQJRuzcbW%2FSlgPW4i3gm8RGyRX4ItVBzYAHBGXSTRhkvYxTEerdmiU4nKFEM04gFdUE1JQtKmqYERP7WErNlwnsaACugJQVd%2BmjihhOIkeMh904dXnyhZXC5jRMpX6w3uQQxPUlRJ8WE15zKddaBbWNGAqCm%2Br29yYiZNn9%2FJJqMagtqIknXgbIBa%2FtlqmRp7dCq146zJO228lHISGns%2BXTu2F3enXlu7Aue5ftUey5cOVQ5buyQ6hoXR4bXLYv6uvDxGIgjFArfsMIwCzyOspcFab504SWBupOU7Om3sju06TWPrSgcg4E3ZPqtXh0J1H3AvBOCqvnAPocX5tK7mZP97JxwJe%2BcXXUaqt1%2F6DVX2p0Ctn58ZSTcWB315xQ4pjD839%2FCBjqkAT%2BZTzN%2Flt7w9geYOWE803a6jf9Uyh0pW%2FQPnLIP0chA%2BEpMZRAPneEPluAD%2FShPKMlESD8pd%2BiCJcEVPDsN8EWVUHYP2Em1uBxFochf0DdlSsn3YZyXbvN3x8AC1iWkEo6Uweeofo%2FISAYZpE9937%2B6yDQhYP1ScGCUXyVuHVFsgrVvgzcQZTyvCHso4qtrNGvbfwha2qqH2QiAVjO%2B5HIbsYGa&X-Amz-Signature=f90222a691465620b8318abb0aa038a3aad58442a55ea93e07179719e9408849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTZCCEP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC6vX9MGjySt32mbuGaOnZlPgE77nScAtjByAChJ0j%2BWQIhAPGSMggRkIO4xzXSlZinhmqRz29OrBBaY63JO74ys%2FCzKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym89FryuhbqXR84n4q3AMeCM0gP7kIlWImKPHsAd4IHT1O%2FYt75nfcF0KlyZT1rJnkaApK%2F7nxcZ8zb4KlQJKgk0PUkeDViPaJY4DcK%2BABEoTwmu2MaQuSTZ0n455j26J8RqIo2wi4d13bHAvi5ABcsJlLoRTC4DOIvKt%2Fayp7v61vuIzMf3i7RhPttf1M8LdHsQsUFPuSamIbp2C1s35t7ihDJ4Ki3%2FX6PYcV6F5EhYhq7VnMfz4xuubBDyrBd%2BWBrNrZ1UFPtN6IJQJRuzcbW%2FSlgPW4i3gm8RGyRX4ItVBzYAHBGXSTRhkvYxTEerdmiU4nKFEM04gFdUE1JQtKmqYERP7WErNlwnsaACugJQVd%2BmjihhOIkeMh904dXnyhZXC5jRMpX6w3uQQxPUlRJ8WE15zKddaBbWNGAqCm%2Br29yYiZNn9%2FJJqMagtqIknXgbIBa%2FtlqmRp7dCq146zJO228lHISGns%2BXTu2F3enXlu7Aue5ftUey5cOVQ5buyQ6hoXR4bXLYv6uvDxGIgjFArfsMIwCzyOspcFab504SWBupOU7Om3sju06TWPrSgcg4E3ZPqtXh0J1H3AvBOCqvnAPocX5tK7mZP97JxwJe%2BcXXUaqt1%2F6DVX2p0Ctn58ZSTcWB315xQ4pjD839%2FCBjqkAT%2BZTzN%2Flt7w9geYOWE803a6jf9Uyh0pW%2FQPnLIP0chA%2BEpMZRAPneEPluAD%2FShPKMlESD8pd%2BiCJcEVPDsN8EWVUHYP2Em1uBxFochf0DdlSsn3YZyXbvN3x8AC1iWkEo6Uweeofo%2FISAYZpE9937%2B6yDQhYP1ScGCUXyVuHVFsgrVvgzcQZTyvCHso4qtrNGvbfwha2qqH2QiAVjO%2B5HIbsYGa&X-Amz-Signature=c588b92218453865a7c925a1d7568fd53d6853cf3dd7ddfd757bc67d304d5e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTZCCEP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC6vX9MGjySt32mbuGaOnZlPgE77nScAtjByAChJ0j%2BWQIhAPGSMggRkIO4xzXSlZinhmqRz29OrBBaY63JO74ys%2FCzKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym89FryuhbqXR84n4q3AMeCM0gP7kIlWImKPHsAd4IHT1O%2FYt75nfcF0KlyZT1rJnkaApK%2F7nxcZ8zb4KlQJKgk0PUkeDViPaJY4DcK%2BABEoTwmu2MaQuSTZ0n455j26J8RqIo2wi4d13bHAvi5ABcsJlLoRTC4DOIvKt%2Fayp7v61vuIzMf3i7RhPttf1M8LdHsQsUFPuSamIbp2C1s35t7ihDJ4Ki3%2FX6PYcV6F5EhYhq7VnMfz4xuubBDyrBd%2BWBrNrZ1UFPtN6IJQJRuzcbW%2FSlgPW4i3gm8RGyRX4ItVBzYAHBGXSTRhkvYxTEerdmiU4nKFEM04gFdUE1JQtKmqYERP7WErNlwnsaACugJQVd%2BmjihhOIkeMh904dXnyhZXC5jRMpX6w3uQQxPUlRJ8WE15zKddaBbWNGAqCm%2Br29yYiZNn9%2FJJqMagtqIknXgbIBa%2FtlqmRp7dCq146zJO228lHISGns%2BXTu2F3enXlu7Aue5ftUey5cOVQ5buyQ6hoXR4bXLYv6uvDxGIgjFArfsMIwCzyOspcFab504SWBupOU7Om3sju06TWPrSgcg4E3ZPqtXh0J1H3AvBOCqvnAPocX5tK7mZP97JxwJe%2BcXXUaqt1%2F6DVX2p0Ctn58ZSTcWB315xQ4pjD839%2FCBjqkAT%2BZTzN%2Flt7w9geYOWE803a6jf9Uyh0pW%2FQPnLIP0chA%2BEpMZRAPneEPluAD%2FShPKMlESD8pd%2BiCJcEVPDsN8EWVUHYP2Em1uBxFochf0DdlSsn3YZyXbvN3x8AC1iWkEo6Uweeofo%2FISAYZpE9937%2B6yDQhYP1ScGCUXyVuHVFsgrVvgzcQZTyvCHso4qtrNGvbfwha2qqH2QiAVjO%2B5HIbsYGa&X-Amz-Signature=948680694fc157d84c225ce63bd7f6acbbce5c8ebc894fbcd3a33cd136e9dbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTZCCEP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC6vX9MGjySt32mbuGaOnZlPgE77nScAtjByAChJ0j%2BWQIhAPGSMggRkIO4xzXSlZinhmqRz29OrBBaY63JO74ys%2FCzKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym89FryuhbqXR84n4q3AMeCM0gP7kIlWImKPHsAd4IHT1O%2FYt75nfcF0KlyZT1rJnkaApK%2F7nxcZ8zb4KlQJKgk0PUkeDViPaJY4DcK%2BABEoTwmu2MaQuSTZ0n455j26J8RqIo2wi4d13bHAvi5ABcsJlLoRTC4DOIvKt%2Fayp7v61vuIzMf3i7RhPttf1M8LdHsQsUFPuSamIbp2C1s35t7ihDJ4Ki3%2FX6PYcV6F5EhYhq7VnMfz4xuubBDyrBd%2BWBrNrZ1UFPtN6IJQJRuzcbW%2FSlgPW4i3gm8RGyRX4ItVBzYAHBGXSTRhkvYxTEerdmiU4nKFEM04gFdUE1JQtKmqYERP7WErNlwnsaACugJQVd%2BmjihhOIkeMh904dXnyhZXC5jRMpX6w3uQQxPUlRJ8WE15zKddaBbWNGAqCm%2Br29yYiZNn9%2FJJqMagtqIknXgbIBa%2FtlqmRp7dCq146zJO228lHISGns%2BXTu2F3enXlu7Aue5ftUey5cOVQ5buyQ6hoXR4bXLYv6uvDxGIgjFArfsMIwCzyOspcFab504SWBupOU7Om3sju06TWPrSgcg4E3ZPqtXh0J1H3AvBOCqvnAPocX5tK7mZP97JxwJe%2BcXXUaqt1%2F6DVX2p0Ctn58ZSTcWB315xQ4pjD839%2FCBjqkAT%2BZTzN%2Flt7w9geYOWE803a6jf9Uyh0pW%2FQPnLIP0chA%2BEpMZRAPneEPluAD%2FShPKMlESD8pd%2BiCJcEVPDsN8EWVUHYP2Em1uBxFochf0DdlSsn3YZyXbvN3x8AC1iWkEo6Uweeofo%2FISAYZpE9937%2B6yDQhYP1ScGCUXyVuHVFsgrVvgzcQZTyvCHso4qtrNGvbfwha2qqH2QiAVjO%2B5HIbsYGa&X-Amz-Signature=47635efdf6dee5220d31e71783120ba4fc1f9389246348a32f519bfdb34a05e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTZCCEP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC6vX9MGjySt32mbuGaOnZlPgE77nScAtjByAChJ0j%2BWQIhAPGSMggRkIO4xzXSlZinhmqRz29OrBBaY63JO74ys%2FCzKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym89FryuhbqXR84n4q3AMeCM0gP7kIlWImKPHsAd4IHT1O%2FYt75nfcF0KlyZT1rJnkaApK%2F7nxcZ8zb4KlQJKgk0PUkeDViPaJY4DcK%2BABEoTwmu2MaQuSTZ0n455j26J8RqIo2wi4d13bHAvi5ABcsJlLoRTC4DOIvKt%2Fayp7v61vuIzMf3i7RhPttf1M8LdHsQsUFPuSamIbp2C1s35t7ihDJ4Ki3%2FX6PYcV6F5EhYhq7VnMfz4xuubBDyrBd%2BWBrNrZ1UFPtN6IJQJRuzcbW%2FSlgPW4i3gm8RGyRX4ItVBzYAHBGXSTRhkvYxTEerdmiU4nKFEM04gFdUE1JQtKmqYERP7WErNlwnsaACugJQVd%2BmjihhOIkeMh904dXnyhZXC5jRMpX6w3uQQxPUlRJ8WE15zKddaBbWNGAqCm%2Br29yYiZNn9%2FJJqMagtqIknXgbIBa%2FtlqmRp7dCq146zJO228lHISGns%2BXTu2F3enXlu7Aue5ftUey5cOVQ5buyQ6hoXR4bXLYv6uvDxGIgjFArfsMIwCzyOspcFab504SWBupOU7Om3sju06TWPrSgcg4E3ZPqtXh0J1H3AvBOCqvnAPocX5tK7mZP97JxwJe%2BcXXUaqt1%2F6DVX2p0Ctn58ZSTcWB315xQ4pjD839%2FCBjqkAT%2BZTzN%2Flt7w9geYOWE803a6jf9Uyh0pW%2FQPnLIP0chA%2BEpMZRAPneEPluAD%2FShPKMlESD8pd%2BiCJcEVPDsN8EWVUHYP2Em1uBxFochf0DdlSsn3YZyXbvN3x8AC1iWkEo6Uweeofo%2FISAYZpE9937%2B6yDQhYP1ScGCUXyVuHVFsgrVvgzcQZTyvCHso4qtrNGvbfwha2qqH2QiAVjO%2B5HIbsYGa&X-Amz-Signature=3f98d9afe759995eb39e70348fa57340e886ca140be47970a41c7ab4f3d78e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTZCCEP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC6vX9MGjySt32mbuGaOnZlPgE77nScAtjByAChJ0j%2BWQIhAPGSMggRkIO4xzXSlZinhmqRz29OrBBaY63JO74ys%2FCzKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym89FryuhbqXR84n4q3AMeCM0gP7kIlWImKPHsAd4IHT1O%2FYt75nfcF0KlyZT1rJnkaApK%2F7nxcZ8zb4KlQJKgk0PUkeDViPaJY4DcK%2BABEoTwmu2MaQuSTZ0n455j26J8RqIo2wi4d13bHAvi5ABcsJlLoRTC4DOIvKt%2Fayp7v61vuIzMf3i7RhPttf1M8LdHsQsUFPuSamIbp2C1s35t7ihDJ4Ki3%2FX6PYcV6F5EhYhq7VnMfz4xuubBDyrBd%2BWBrNrZ1UFPtN6IJQJRuzcbW%2FSlgPW4i3gm8RGyRX4ItVBzYAHBGXSTRhkvYxTEerdmiU4nKFEM04gFdUE1JQtKmqYERP7WErNlwnsaACugJQVd%2BmjihhOIkeMh904dXnyhZXC5jRMpX6w3uQQxPUlRJ8WE15zKddaBbWNGAqCm%2Br29yYiZNn9%2FJJqMagtqIknXgbIBa%2FtlqmRp7dCq146zJO228lHISGns%2BXTu2F3enXlu7Aue5ftUey5cOVQ5buyQ6hoXR4bXLYv6uvDxGIgjFArfsMIwCzyOspcFab504SWBupOU7Om3sju06TWPrSgcg4E3ZPqtXh0J1H3AvBOCqvnAPocX5tK7mZP97JxwJe%2BcXXUaqt1%2F6DVX2p0Ctn58ZSTcWB315xQ4pjD839%2FCBjqkAT%2BZTzN%2Flt7w9geYOWE803a6jf9Uyh0pW%2FQPnLIP0chA%2BEpMZRAPneEPluAD%2FShPKMlESD8pd%2BiCJcEVPDsN8EWVUHYP2Em1uBxFochf0DdlSsn3YZyXbvN3x8AC1iWkEo6Uweeofo%2FISAYZpE9937%2B6yDQhYP1ScGCUXyVuHVFsgrVvgzcQZTyvCHso4qtrNGvbfwha2qqH2QiAVjO%2B5HIbsYGa&X-Amz-Signature=9a645f648e465fac89747f657e918e142b1b1ca5c2d3574592ff53fddd9b258f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VTZCCEP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC6vX9MGjySt32mbuGaOnZlPgE77nScAtjByAChJ0j%2BWQIhAPGSMggRkIO4xzXSlZinhmqRz29OrBBaY63JO74ys%2FCzKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym89FryuhbqXR84n4q3AMeCM0gP7kIlWImKPHsAd4IHT1O%2FYt75nfcF0KlyZT1rJnkaApK%2F7nxcZ8zb4KlQJKgk0PUkeDViPaJY4DcK%2BABEoTwmu2MaQuSTZ0n455j26J8RqIo2wi4d13bHAvi5ABcsJlLoRTC4DOIvKt%2Fayp7v61vuIzMf3i7RhPttf1M8LdHsQsUFPuSamIbp2C1s35t7ihDJ4Ki3%2FX6PYcV6F5EhYhq7VnMfz4xuubBDyrBd%2BWBrNrZ1UFPtN6IJQJRuzcbW%2FSlgPW4i3gm8RGyRX4ItVBzYAHBGXSTRhkvYxTEerdmiU4nKFEM04gFdUE1JQtKmqYERP7WErNlwnsaACugJQVd%2BmjihhOIkeMh904dXnyhZXC5jRMpX6w3uQQxPUlRJ8WE15zKddaBbWNGAqCm%2Br29yYiZNn9%2FJJqMagtqIknXgbIBa%2FtlqmRp7dCq146zJO228lHISGns%2BXTu2F3enXlu7Aue5ftUey5cOVQ5buyQ6hoXR4bXLYv6uvDxGIgjFArfsMIwCzyOspcFab504SWBupOU7Om3sju06TWPrSgcg4E3ZPqtXh0J1H3AvBOCqvnAPocX5tK7mZP97JxwJe%2BcXXUaqt1%2F6DVX2p0Ctn58ZSTcWB315xQ4pjD839%2FCBjqkAT%2BZTzN%2Flt7w9geYOWE803a6jf9Uyh0pW%2FQPnLIP0chA%2BEpMZRAPneEPluAD%2FShPKMlESD8pd%2BiCJcEVPDsN8EWVUHYP2Em1uBxFochf0DdlSsn3YZyXbvN3x8AC1iWkEo6Uweeofo%2FISAYZpE9937%2B6yDQhYP1ScGCUXyVuHVFsgrVvgzcQZTyvCHso4qtrNGvbfwha2qqH2QiAVjO%2B5HIbsYGa&X-Amz-Signature=da293440f1a561a6d3aac55122a54033c70db15a97fc21aa2e70dfed4163e9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
