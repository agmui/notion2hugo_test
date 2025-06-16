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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZGYRC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCySy7%2Bs6g%2B8tiXO2DIGjAJgWVmSEID0GBgae8L%2FDQLWAIhAIRZ84QFc64iG6R1vlB2mcW%2BQ2BIk3E6viK64bGNHPNZKv8DCF0QABoMNjM3NDIzMTgzODA1Igw2Y2lzG9PJhY4bvaQq3AMDgTJdHztM6JH4Dlisb8YyUktD4UzdE%2Fc5nZakxyyfEGHmeOWL3rPbozBBWl%2F9YXjH%2BJlsLiTJIB40Dbl2G6gRnU0OmuCzvQ9Jpfxjv3ctYtlC6s4a3jOxr6skvyRmvMLfZ5MSoX4IK2fUuJ7UViNQHbXjF5Fw3EthDqOfUfzK6DaBf6h%2BmHKdfVWAQcDfHoGGJvCQTv%2FvTu6lrjzTAgiwnP%2F8wFPJFSc%2FRWT%2Fi%2FljHLiDZ5VSKe7id4p61CmzsMBWxyGgx%2F1xA31WGYrqI%2FJaSCaUWNTLk3V66%2FbT3tF1qKPwpIRHg0h%2FFiuan96MUwZSB9Ak9dN9m5xAcSHqhT%2FBLS1ESF9QA8gPjUYI9AMm6mRH6YpUsAGycTLmBMi%2BtzmWJRp6%2B4U5PBrswxiwnarOrlsOKX4Vr3KrauoOUGSmbXXvm5yjAHpt8xJakmPt1F11pykGtgHme2K0j27MIU6kVqYSglAVS2PCBC0u29UzCql%2FRpHbv1G27M48cB7HREgZCTeSNdMf7j5u115aVdgwijWDUZ0CfgTG1aOzaGPbexy9o3n5XYefaGMhuClQBSvzlOwBPwdxwtiJ9ZYqfBrE3RYReVE%2FQ5YOEu7yazq3zlBXpOrqvaBeSYNKxDCVm8DCBjqkAeDFBNuoPecgcX7Czm2j0Z1AVL3N0hUYaUWQR7p0qcpqmFY97BhxfXghUXVvGVI7%2FN6Ud4jqEPV%2F6ybaFcdf7ov8esJtg6hhLlygEe1eLRwLeteebog5eGBK7x1wc0DpcbSe0RPLSOaFhlTyEOuv942aFxIIUd3cJmdoGBMo2%2F8NM8o6x8F5x939AJf9RAct3MFtz8VdiargNmUbiCWIhBn2tnoQ&X-Amz-Signature=870a9e26a2d427a38a188667f96f036cf966d46722cacef78200bfde574b829b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZGYRC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCySy7%2Bs6g%2B8tiXO2DIGjAJgWVmSEID0GBgae8L%2FDQLWAIhAIRZ84QFc64iG6R1vlB2mcW%2BQ2BIk3E6viK64bGNHPNZKv8DCF0QABoMNjM3NDIzMTgzODA1Igw2Y2lzG9PJhY4bvaQq3AMDgTJdHztM6JH4Dlisb8YyUktD4UzdE%2Fc5nZakxyyfEGHmeOWL3rPbozBBWl%2F9YXjH%2BJlsLiTJIB40Dbl2G6gRnU0OmuCzvQ9Jpfxjv3ctYtlC6s4a3jOxr6skvyRmvMLfZ5MSoX4IK2fUuJ7UViNQHbXjF5Fw3EthDqOfUfzK6DaBf6h%2BmHKdfVWAQcDfHoGGJvCQTv%2FvTu6lrjzTAgiwnP%2F8wFPJFSc%2FRWT%2Fi%2FljHLiDZ5VSKe7id4p61CmzsMBWxyGgx%2F1xA31WGYrqI%2FJaSCaUWNTLk3V66%2FbT3tF1qKPwpIRHg0h%2FFiuan96MUwZSB9Ak9dN9m5xAcSHqhT%2FBLS1ESF9QA8gPjUYI9AMm6mRH6YpUsAGycTLmBMi%2BtzmWJRp6%2B4U5PBrswxiwnarOrlsOKX4Vr3KrauoOUGSmbXXvm5yjAHpt8xJakmPt1F11pykGtgHme2K0j27MIU6kVqYSglAVS2PCBC0u29UzCql%2FRpHbv1G27M48cB7HREgZCTeSNdMf7j5u115aVdgwijWDUZ0CfgTG1aOzaGPbexy9o3n5XYefaGMhuClQBSvzlOwBPwdxwtiJ9ZYqfBrE3RYReVE%2FQ5YOEu7yazq3zlBXpOrqvaBeSYNKxDCVm8DCBjqkAeDFBNuoPecgcX7Czm2j0Z1AVL3N0hUYaUWQR7p0qcpqmFY97BhxfXghUXVvGVI7%2FN6Ud4jqEPV%2F6ybaFcdf7ov8esJtg6hhLlygEe1eLRwLeteebog5eGBK7x1wc0DpcbSe0RPLSOaFhlTyEOuv942aFxIIUd3cJmdoGBMo2%2F8NM8o6x8F5x939AJf9RAct3MFtz8VdiargNmUbiCWIhBn2tnoQ&X-Amz-Signature=50fee79281a0d4eb6c2d2989cfc42723b5bc501553e4c4a4bb15fe95c26925fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZGYRC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCySy7%2Bs6g%2B8tiXO2DIGjAJgWVmSEID0GBgae8L%2FDQLWAIhAIRZ84QFc64iG6R1vlB2mcW%2BQ2BIk3E6viK64bGNHPNZKv8DCF0QABoMNjM3NDIzMTgzODA1Igw2Y2lzG9PJhY4bvaQq3AMDgTJdHztM6JH4Dlisb8YyUktD4UzdE%2Fc5nZakxyyfEGHmeOWL3rPbozBBWl%2F9YXjH%2BJlsLiTJIB40Dbl2G6gRnU0OmuCzvQ9Jpfxjv3ctYtlC6s4a3jOxr6skvyRmvMLfZ5MSoX4IK2fUuJ7UViNQHbXjF5Fw3EthDqOfUfzK6DaBf6h%2BmHKdfVWAQcDfHoGGJvCQTv%2FvTu6lrjzTAgiwnP%2F8wFPJFSc%2FRWT%2Fi%2FljHLiDZ5VSKe7id4p61CmzsMBWxyGgx%2F1xA31WGYrqI%2FJaSCaUWNTLk3V66%2FbT3tF1qKPwpIRHg0h%2FFiuan96MUwZSB9Ak9dN9m5xAcSHqhT%2FBLS1ESF9QA8gPjUYI9AMm6mRH6YpUsAGycTLmBMi%2BtzmWJRp6%2B4U5PBrswxiwnarOrlsOKX4Vr3KrauoOUGSmbXXvm5yjAHpt8xJakmPt1F11pykGtgHme2K0j27MIU6kVqYSglAVS2PCBC0u29UzCql%2FRpHbv1G27M48cB7HREgZCTeSNdMf7j5u115aVdgwijWDUZ0CfgTG1aOzaGPbexy9o3n5XYefaGMhuClQBSvzlOwBPwdxwtiJ9ZYqfBrE3RYReVE%2FQ5YOEu7yazq3zlBXpOrqvaBeSYNKxDCVm8DCBjqkAeDFBNuoPecgcX7Czm2j0Z1AVL3N0hUYaUWQR7p0qcpqmFY97BhxfXghUXVvGVI7%2FN6Ud4jqEPV%2F6ybaFcdf7ov8esJtg6hhLlygEe1eLRwLeteebog5eGBK7x1wc0DpcbSe0RPLSOaFhlTyEOuv942aFxIIUd3cJmdoGBMo2%2F8NM8o6x8F5x939AJf9RAct3MFtz8VdiargNmUbiCWIhBn2tnoQ&X-Amz-Signature=f85cdc1160d1192980c73102b27f6463d3aa70cf410625091167cd139cce6a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZGYRC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCySy7%2Bs6g%2B8tiXO2DIGjAJgWVmSEID0GBgae8L%2FDQLWAIhAIRZ84QFc64iG6R1vlB2mcW%2BQ2BIk3E6viK64bGNHPNZKv8DCF0QABoMNjM3NDIzMTgzODA1Igw2Y2lzG9PJhY4bvaQq3AMDgTJdHztM6JH4Dlisb8YyUktD4UzdE%2Fc5nZakxyyfEGHmeOWL3rPbozBBWl%2F9YXjH%2BJlsLiTJIB40Dbl2G6gRnU0OmuCzvQ9Jpfxjv3ctYtlC6s4a3jOxr6skvyRmvMLfZ5MSoX4IK2fUuJ7UViNQHbXjF5Fw3EthDqOfUfzK6DaBf6h%2BmHKdfVWAQcDfHoGGJvCQTv%2FvTu6lrjzTAgiwnP%2F8wFPJFSc%2FRWT%2Fi%2FljHLiDZ5VSKe7id4p61CmzsMBWxyGgx%2F1xA31WGYrqI%2FJaSCaUWNTLk3V66%2FbT3tF1qKPwpIRHg0h%2FFiuan96MUwZSB9Ak9dN9m5xAcSHqhT%2FBLS1ESF9QA8gPjUYI9AMm6mRH6YpUsAGycTLmBMi%2BtzmWJRp6%2B4U5PBrswxiwnarOrlsOKX4Vr3KrauoOUGSmbXXvm5yjAHpt8xJakmPt1F11pykGtgHme2K0j27MIU6kVqYSglAVS2PCBC0u29UzCql%2FRpHbv1G27M48cB7HREgZCTeSNdMf7j5u115aVdgwijWDUZ0CfgTG1aOzaGPbexy9o3n5XYefaGMhuClQBSvzlOwBPwdxwtiJ9ZYqfBrE3RYReVE%2FQ5YOEu7yazq3zlBXpOrqvaBeSYNKxDCVm8DCBjqkAeDFBNuoPecgcX7Czm2j0Z1AVL3N0hUYaUWQR7p0qcpqmFY97BhxfXghUXVvGVI7%2FN6Ud4jqEPV%2F6ybaFcdf7ov8esJtg6hhLlygEe1eLRwLeteebog5eGBK7x1wc0DpcbSe0RPLSOaFhlTyEOuv942aFxIIUd3cJmdoGBMo2%2F8NM8o6x8F5x939AJf9RAct3MFtz8VdiargNmUbiCWIhBn2tnoQ&X-Amz-Signature=0947261ba88c74b5612c2952d0e0f4f08361371801a9ffac5c0cde67cf32013f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZGYRC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCySy7%2Bs6g%2B8tiXO2DIGjAJgWVmSEID0GBgae8L%2FDQLWAIhAIRZ84QFc64iG6R1vlB2mcW%2BQ2BIk3E6viK64bGNHPNZKv8DCF0QABoMNjM3NDIzMTgzODA1Igw2Y2lzG9PJhY4bvaQq3AMDgTJdHztM6JH4Dlisb8YyUktD4UzdE%2Fc5nZakxyyfEGHmeOWL3rPbozBBWl%2F9YXjH%2BJlsLiTJIB40Dbl2G6gRnU0OmuCzvQ9Jpfxjv3ctYtlC6s4a3jOxr6skvyRmvMLfZ5MSoX4IK2fUuJ7UViNQHbXjF5Fw3EthDqOfUfzK6DaBf6h%2BmHKdfVWAQcDfHoGGJvCQTv%2FvTu6lrjzTAgiwnP%2F8wFPJFSc%2FRWT%2Fi%2FljHLiDZ5VSKe7id4p61CmzsMBWxyGgx%2F1xA31WGYrqI%2FJaSCaUWNTLk3V66%2FbT3tF1qKPwpIRHg0h%2FFiuan96MUwZSB9Ak9dN9m5xAcSHqhT%2FBLS1ESF9QA8gPjUYI9AMm6mRH6YpUsAGycTLmBMi%2BtzmWJRp6%2B4U5PBrswxiwnarOrlsOKX4Vr3KrauoOUGSmbXXvm5yjAHpt8xJakmPt1F11pykGtgHme2K0j27MIU6kVqYSglAVS2PCBC0u29UzCql%2FRpHbv1G27M48cB7HREgZCTeSNdMf7j5u115aVdgwijWDUZ0CfgTG1aOzaGPbexy9o3n5XYefaGMhuClQBSvzlOwBPwdxwtiJ9ZYqfBrE3RYReVE%2FQ5YOEu7yazq3zlBXpOrqvaBeSYNKxDCVm8DCBjqkAeDFBNuoPecgcX7Czm2j0Z1AVL3N0hUYaUWQR7p0qcpqmFY97BhxfXghUXVvGVI7%2FN6Ud4jqEPV%2F6ybaFcdf7ov8esJtg6hhLlygEe1eLRwLeteebog5eGBK7x1wc0DpcbSe0RPLSOaFhlTyEOuv942aFxIIUd3cJmdoGBMo2%2F8NM8o6x8F5x939AJf9RAct3MFtz8VdiargNmUbiCWIhBn2tnoQ&X-Amz-Signature=c8247cc88287278b59bab16de9ee1a4199d2d3798840164535a0ce7742797230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZGYRC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCySy7%2Bs6g%2B8tiXO2DIGjAJgWVmSEID0GBgae8L%2FDQLWAIhAIRZ84QFc64iG6R1vlB2mcW%2BQ2BIk3E6viK64bGNHPNZKv8DCF0QABoMNjM3NDIzMTgzODA1Igw2Y2lzG9PJhY4bvaQq3AMDgTJdHztM6JH4Dlisb8YyUktD4UzdE%2Fc5nZakxyyfEGHmeOWL3rPbozBBWl%2F9YXjH%2BJlsLiTJIB40Dbl2G6gRnU0OmuCzvQ9Jpfxjv3ctYtlC6s4a3jOxr6skvyRmvMLfZ5MSoX4IK2fUuJ7UViNQHbXjF5Fw3EthDqOfUfzK6DaBf6h%2BmHKdfVWAQcDfHoGGJvCQTv%2FvTu6lrjzTAgiwnP%2F8wFPJFSc%2FRWT%2Fi%2FljHLiDZ5VSKe7id4p61CmzsMBWxyGgx%2F1xA31WGYrqI%2FJaSCaUWNTLk3V66%2FbT3tF1qKPwpIRHg0h%2FFiuan96MUwZSB9Ak9dN9m5xAcSHqhT%2FBLS1ESF9QA8gPjUYI9AMm6mRH6YpUsAGycTLmBMi%2BtzmWJRp6%2B4U5PBrswxiwnarOrlsOKX4Vr3KrauoOUGSmbXXvm5yjAHpt8xJakmPt1F11pykGtgHme2K0j27MIU6kVqYSglAVS2PCBC0u29UzCql%2FRpHbv1G27M48cB7HREgZCTeSNdMf7j5u115aVdgwijWDUZ0CfgTG1aOzaGPbexy9o3n5XYefaGMhuClQBSvzlOwBPwdxwtiJ9ZYqfBrE3RYReVE%2FQ5YOEu7yazq3zlBXpOrqvaBeSYNKxDCVm8DCBjqkAeDFBNuoPecgcX7Czm2j0Z1AVL3N0hUYaUWQR7p0qcpqmFY97BhxfXghUXVvGVI7%2FN6Ud4jqEPV%2F6ybaFcdf7ov8esJtg6hhLlygEe1eLRwLeteebog5eGBK7x1wc0DpcbSe0RPLSOaFhlTyEOuv942aFxIIUd3cJmdoGBMo2%2F8NM8o6x8F5x939AJf9RAct3MFtz8VdiargNmUbiCWIhBn2tnoQ&X-Amz-Signature=230b435005f7b7ceadcfbabe6a3bb46b566cbd38a67d6545880725a1cd9d0163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZGYRC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCySy7%2Bs6g%2B8tiXO2DIGjAJgWVmSEID0GBgae8L%2FDQLWAIhAIRZ84QFc64iG6R1vlB2mcW%2BQ2BIk3E6viK64bGNHPNZKv8DCF0QABoMNjM3NDIzMTgzODA1Igw2Y2lzG9PJhY4bvaQq3AMDgTJdHztM6JH4Dlisb8YyUktD4UzdE%2Fc5nZakxyyfEGHmeOWL3rPbozBBWl%2F9YXjH%2BJlsLiTJIB40Dbl2G6gRnU0OmuCzvQ9Jpfxjv3ctYtlC6s4a3jOxr6skvyRmvMLfZ5MSoX4IK2fUuJ7UViNQHbXjF5Fw3EthDqOfUfzK6DaBf6h%2BmHKdfVWAQcDfHoGGJvCQTv%2FvTu6lrjzTAgiwnP%2F8wFPJFSc%2FRWT%2Fi%2FljHLiDZ5VSKe7id4p61CmzsMBWxyGgx%2F1xA31WGYrqI%2FJaSCaUWNTLk3V66%2FbT3tF1qKPwpIRHg0h%2FFiuan96MUwZSB9Ak9dN9m5xAcSHqhT%2FBLS1ESF9QA8gPjUYI9AMm6mRH6YpUsAGycTLmBMi%2BtzmWJRp6%2B4U5PBrswxiwnarOrlsOKX4Vr3KrauoOUGSmbXXvm5yjAHpt8xJakmPt1F11pykGtgHme2K0j27MIU6kVqYSglAVS2PCBC0u29UzCql%2FRpHbv1G27M48cB7HREgZCTeSNdMf7j5u115aVdgwijWDUZ0CfgTG1aOzaGPbexy9o3n5XYefaGMhuClQBSvzlOwBPwdxwtiJ9ZYqfBrE3RYReVE%2FQ5YOEu7yazq3zlBXpOrqvaBeSYNKxDCVm8DCBjqkAeDFBNuoPecgcX7Czm2j0Z1AVL3N0hUYaUWQR7p0qcpqmFY97BhxfXghUXVvGVI7%2FN6Ud4jqEPV%2F6ybaFcdf7ov8esJtg6hhLlygEe1eLRwLeteebog5eGBK7x1wc0DpcbSe0RPLSOaFhlTyEOuv942aFxIIUd3cJmdoGBMo2%2F8NM8o6x8F5x939AJf9RAct3MFtz8VdiargNmUbiCWIhBn2tnoQ&X-Amz-Signature=d9cfd0df00f209552a79820103140b40c3b3b155789123ea307bfecabb9db959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SHZGYRC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCySy7%2Bs6g%2B8tiXO2DIGjAJgWVmSEID0GBgae8L%2FDQLWAIhAIRZ84QFc64iG6R1vlB2mcW%2BQ2BIk3E6viK64bGNHPNZKv8DCF0QABoMNjM3NDIzMTgzODA1Igw2Y2lzG9PJhY4bvaQq3AMDgTJdHztM6JH4Dlisb8YyUktD4UzdE%2Fc5nZakxyyfEGHmeOWL3rPbozBBWl%2F9YXjH%2BJlsLiTJIB40Dbl2G6gRnU0OmuCzvQ9Jpfxjv3ctYtlC6s4a3jOxr6skvyRmvMLfZ5MSoX4IK2fUuJ7UViNQHbXjF5Fw3EthDqOfUfzK6DaBf6h%2BmHKdfVWAQcDfHoGGJvCQTv%2FvTu6lrjzTAgiwnP%2F8wFPJFSc%2FRWT%2Fi%2FljHLiDZ5VSKe7id4p61CmzsMBWxyGgx%2F1xA31WGYrqI%2FJaSCaUWNTLk3V66%2FbT3tF1qKPwpIRHg0h%2FFiuan96MUwZSB9Ak9dN9m5xAcSHqhT%2FBLS1ESF9QA8gPjUYI9AMm6mRH6YpUsAGycTLmBMi%2BtzmWJRp6%2B4U5PBrswxiwnarOrlsOKX4Vr3KrauoOUGSmbXXvm5yjAHpt8xJakmPt1F11pykGtgHme2K0j27MIU6kVqYSglAVS2PCBC0u29UzCql%2FRpHbv1G27M48cB7HREgZCTeSNdMf7j5u115aVdgwijWDUZ0CfgTG1aOzaGPbexy9o3n5XYefaGMhuClQBSvzlOwBPwdxwtiJ9ZYqfBrE3RYReVE%2FQ5YOEu7yazq3zlBXpOrqvaBeSYNKxDCVm8DCBjqkAeDFBNuoPecgcX7Czm2j0Z1AVL3N0hUYaUWQR7p0qcpqmFY97BhxfXghUXVvGVI7%2FN6Ud4jqEPV%2F6ybaFcdf7ov8esJtg6hhLlygEe1eLRwLeteebog5eGBK7x1wc0DpcbSe0RPLSOaFhlTyEOuv942aFxIIUd3cJmdoGBMo2%2F8NM8o6x8F5x939AJf9RAct3MFtz8VdiargNmUbiCWIhBn2tnoQ&X-Amz-Signature=5f4e732313a77da13940bda15abe8add925e9d3bf05fb74001f0c010f2bd7942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
