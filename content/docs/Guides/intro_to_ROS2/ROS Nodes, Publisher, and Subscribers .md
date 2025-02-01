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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY7QRS2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDonlu1iCrBESe0KIpXo4YTpifplzWSrQ913IeceplSxAiEA0feGSSTzaPTrGR4Pn2D7iibQBjXuO6FJrMifFPPWqvAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm%2FY%2BYha%2BwKCcl6tCrcA2xZPojNdzm0mbtAyY7viAqQGdVoFCd8N3T%2BsyNnkUBDycnxbngGS7GUiQuKMLlDG8IPmpTNWn29AdZ52yNhTLJ1DagbGvVHY6azrcddZrxbJlcaUgrd26MGj4s81DwtlNVFWtcci2oYA3G9IYehB3w%2BJBghg%2B7L7LQqe3rylt3YLSomrj219K%2Bv3slTaE5C9cvwgC7JX0CKq0%2FpnYJzWQKeu4Nf%2Fh42Jr1jkGRCQpEwgvcHiZfFxnTCI5ox2fVU5ojaU2kX3z8Lam1pzYrHSUGz4xL03PVS%2B3JPnKoZVFJxpeEzE24l631j9aqEfffKCnWlb0UEaUJLQedveTQwYWlyKQmCI3i3curPluJX47Rog1%2FCH6QeFntNB7iamuXGX%2FNGeJBwHFeOAFZI7uaCoEhKmDdAdRcemvSn5zbQz2wT7OCqODyLC4UsY%2BD%2FV8U4NZ1oTkGc%2BroCdQREsjhQT4e3tv%2BxzO2Ck8g8TCkqA%2F2ed56AbYUXCyGBm1OH%2FRwogFPw%2F8WowrhxB%2Bk%2F8r8pIgyKAHzAMi4zFbstOz25Ja4yrmYSryOMrYg9vZ92d%2FL%2FqBNg5QKPwXgDiaMfu4JGVaDAPO%2BLS4%2BJC6EGUNeA8oArAaO2XeihFR14bmsUMI3A%2BLwGOqUBjpZA%2BXpffEiHd0fNOovT%2FNGZ8YPCaQo8xfFEdhhlxFFi%2B2TWZs2vylKlX8V0E0SfvabYJxTec%2Ff7DFcq%2FT6%2FzVPKuV%2FwSaJWPnfdKqIz93AQhxmupdj9Oa9OnDBwFn736pFMiW%2Ftyq%2F%2FH%2FZVp2wKFIrshIu8Sndg%2BxgYaBApZyBO5R2IceDnBSwsR0YVssbqfjIdsBp4ASU0uQvpj5UWDCTi4ecl&X-Amz-Signature=524b18b9071de8a15cd0710d09ffcd1e7cac0c4526177f3607194eb8a415ede7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY7QRS2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDonlu1iCrBESe0KIpXo4YTpifplzWSrQ913IeceplSxAiEA0feGSSTzaPTrGR4Pn2D7iibQBjXuO6FJrMifFPPWqvAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm%2FY%2BYha%2BwKCcl6tCrcA2xZPojNdzm0mbtAyY7viAqQGdVoFCd8N3T%2BsyNnkUBDycnxbngGS7GUiQuKMLlDG8IPmpTNWn29AdZ52yNhTLJ1DagbGvVHY6azrcddZrxbJlcaUgrd26MGj4s81DwtlNVFWtcci2oYA3G9IYehB3w%2BJBghg%2B7L7LQqe3rylt3YLSomrj219K%2Bv3slTaE5C9cvwgC7JX0CKq0%2FpnYJzWQKeu4Nf%2Fh42Jr1jkGRCQpEwgvcHiZfFxnTCI5ox2fVU5ojaU2kX3z8Lam1pzYrHSUGz4xL03PVS%2B3JPnKoZVFJxpeEzE24l631j9aqEfffKCnWlb0UEaUJLQedveTQwYWlyKQmCI3i3curPluJX47Rog1%2FCH6QeFntNB7iamuXGX%2FNGeJBwHFeOAFZI7uaCoEhKmDdAdRcemvSn5zbQz2wT7OCqODyLC4UsY%2BD%2FV8U4NZ1oTkGc%2BroCdQREsjhQT4e3tv%2BxzO2Ck8g8TCkqA%2F2ed56AbYUXCyGBm1OH%2FRwogFPw%2F8WowrhxB%2Bk%2F8r8pIgyKAHzAMi4zFbstOz25Ja4yrmYSryOMrYg9vZ92d%2FL%2FqBNg5QKPwXgDiaMfu4JGVaDAPO%2BLS4%2BJC6EGUNeA8oArAaO2XeihFR14bmsUMI3A%2BLwGOqUBjpZA%2BXpffEiHd0fNOovT%2FNGZ8YPCaQo8xfFEdhhlxFFi%2B2TWZs2vylKlX8V0E0SfvabYJxTec%2Ff7DFcq%2FT6%2FzVPKuV%2FwSaJWPnfdKqIz93AQhxmupdj9Oa9OnDBwFn736pFMiW%2Ftyq%2F%2FH%2FZVp2wKFIrshIu8Sndg%2BxgYaBApZyBO5R2IceDnBSwsR0YVssbqfjIdsBp4ASU0uQvpj5UWDCTi4ecl&X-Amz-Signature=ded81ecebed0e6bdce9834d1852727d402ab16abceef0d11d275737eabe9c85c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY7QRS2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDonlu1iCrBESe0KIpXo4YTpifplzWSrQ913IeceplSxAiEA0feGSSTzaPTrGR4Pn2D7iibQBjXuO6FJrMifFPPWqvAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm%2FY%2BYha%2BwKCcl6tCrcA2xZPojNdzm0mbtAyY7viAqQGdVoFCd8N3T%2BsyNnkUBDycnxbngGS7GUiQuKMLlDG8IPmpTNWn29AdZ52yNhTLJ1DagbGvVHY6azrcddZrxbJlcaUgrd26MGj4s81DwtlNVFWtcci2oYA3G9IYehB3w%2BJBghg%2B7L7LQqe3rylt3YLSomrj219K%2Bv3slTaE5C9cvwgC7JX0CKq0%2FpnYJzWQKeu4Nf%2Fh42Jr1jkGRCQpEwgvcHiZfFxnTCI5ox2fVU5ojaU2kX3z8Lam1pzYrHSUGz4xL03PVS%2B3JPnKoZVFJxpeEzE24l631j9aqEfffKCnWlb0UEaUJLQedveTQwYWlyKQmCI3i3curPluJX47Rog1%2FCH6QeFntNB7iamuXGX%2FNGeJBwHFeOAFZI7uaCoEhKmDdAdRcemvSn5zbQz2wT7OCqODyLC4UsY%2BD%2FV8U4NZ1oTkGc%2BroCdQREsjhQT4e3tv%2BxzO2Ck8g8TCkqA%2F2ed56AbYUXCyGBm1OH%2FRwogFPw%2F8WowrhxB%2Bk%2F8r8pIgyKAHzAMi4zFbstOz25Ja4yrmYSryOMrYg9vZ92d%2FL%2FqBNg5QKPwXgDiaMfu4JGVaDAPO%2BLS4%2BJC6EGUNeA8oArAaO2XeihFR14bmsUMI3A%2BLwGOqUBjpZA%2BXpffEiHd0fNOovT%2FNGZ8YPCaQo8xfFEdhhlxFFi%2B2TWZs2vylKlX8V0E0SfvabYJxTec%2Ff7DFcq%2FT6%2FzVPKuV%2FwSaJWPnfdKqIz93AQhxmupdj9Oa9OnDBwFn736pFMiW%2Ftyq%2F%2FH%2FZVp2wKFIrshIu8Sndg%2BxgYaBApZyBO5R2IceDnBSwsR0YVssbqfjIdsBp4ASU0uQvpj5UWDCTi4ecl&X-Amz-Signature=16965fc970f3c03b5e79b3041cebc2ba362f72a2bf2034af6907b9119b3b9a24&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY7QRS2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDonlu1iCrBESe0KIpXo4YTpifplzWSrQ913IeceplSxAiEA0feGSSTzaPTrGR4Pn2D7iibQBjXuO6FJrMifFPPWqvAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm%2FY%2BYha%2BwKCcl6tCrcA2xZPojNdzm0mbtAyY7viAqQGdVoFCd8N3T%2BsyNnkUBDycnxbngGS7GUiQuKMLlDG8IPmpTNWn29AdZ52yNhTLJ1DagbGvVHY6azrcddZrxbJlcaUgrd26MGj4s81DwtlNVFWtcci2oYA3G9IYehB3w%2BJBghg%2B7L7LQqe3rylt3YLSomrj219K%2Bv3slTaE5C9cvwgC7JX0CKq0%2FpnYJzWQKeu4Nf%2Fh42Jr1jkGRCQpEwgvcHiZfFxnTCI5ox2fVU5ojaU2kX3z8Lam1pzYrHSUGz4xL03PVS%2B3JPnKoZVFJxpeEzE24l631j9aqEfffKCnWlb0UEaUJLQedveTQwYWlyKQmCI3i3curPluJX47Rog1%2FCH6QeFntNB7iamuXGX%2FNGeJBwHFeOAFZI7uaCoEhKmDdAdRcemvSn5zbQz2wT7OCqODyLC4UsY%2BD%2FV8U4NZ1oTkGc%2BroCdQREsjhQT4e3tv%2BxzO2Ck8g8TCkqA%2F2ed56AbYUXCyGBm1OH%2FRwogFPw%2F8WowrhxB%2Bk%2F8r8pIgyKAHzAMi4zFbstOz25Ja4yrmYSryOMrYg9vZ92d%2FL%2FqBNg5QKPwXgDiaMfu4JGVaDAPO%2BLS4%2BJC6EGUNeA8oArAaO2XeihFR14bmsUMI3A%2BLwGOqUBjpZA%2BXpffEiHd0fNOovT%2FNGZ8YPCaQo8xfFEdhhlxFFi%2B2TWZs2vylKlX8V0E0SfvabYJxTec%2Ff7DFcq%2FT6%2FzVPKuV%2FwSaJWPnfdKqIz93AQhxmupdj9Oa9OnDBwFn736pFMiW%2Ftyq%2F%2FH%2FZVp2wKFIrshIu8Sndg%2BxgYaBApZyBO5R2IceDnBSwsR0YVssbqfjIdsBp4ASU0uQvpj5UWDCTi4ecl&X-Amz-Signature=6c76fac96a84a7e3bc04e5b2ad719523c3c8673d382e3f824a8ed30cae6427f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY7QRS2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDonlu1iCrBESe0KIpXo4YTpifplzWSrQ913IeceplSxAiEA0feGSSTzaPTrGR4Pn2D7iibQBjXuO6FJrMifFPPWqvAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm%2FY%2BYha%2BwKCcl6tCrcA2xZPojNdzm0mbtAyY7viAqQGdVoFCd8N3T%2BsyNnkUBDycnxbngGS7GUiQuKMLlDG8IPmpTNWn29AdZ52yNhTLJ1DagbGvVHY6azrcddZrxbJlcaUgrd26MGj4s81DwtlNVFWtcci2oYA3G9IYehB3w%2BJBghg%2B7L7LQqe3rylt3YLSomrj219K%2Bv3slTaE5C9cvwgC7JX0CKq0%2FpnYJzWQKeu4Nf%2Fh42Jr1jkGRCQpEwgvcHiZfFxnTCI5ox2fVU5ojaU2kX3z8Lam1pzYrHSUGz4xL03PVS%2B3JPnKoZVFJxpeEzE24l631j9aqEfffKCnWlb0UEaUJLQedveTQwYWlyKQmCI3i3curPluJX47Rog1%2FCH6QeFntNB7iamuXGX%2FNGeJBwHFeOAFZI7uaCoEhKmDdAdRcemvSn5zbQz2wT7OCqODyLC4UsY%2BD%2FV8U4NZ1oTkGc%2BroCdQREsjhQT4e3tv%2BxzO2Ck8g8TCkqA%2F2ed56AbYUXCyGBm1OH%2FRwogFPw%2F8WowrhxB%2Bk%2F8r8pIgyKAHzAMi4zFbstOz25Ja4yrmYSryOMrYg9vZ92d%2FL%2FqBNg5QKPwXgDiaMfu4JGVaDAPO%2BLS4%2BJC6EGUNeA8oArAaO2XeihFR14bmsUMI3A%2BLwGOqUBjpZA%2BXpffEiHd0fNOovT%2FNGZ8YPCaQo8xfFEdhhlxFFi%2B2TWZs2vylKlX8V0E0SfvabYJxTec%2Ff7DFcq%2FT6%2FzVPKuV%2FwSaJWPnfdKqIz93AQhxmupdj9Oa9OnDBwFn736pFMiW%2Ftyq%2F%2FH%2FZVp2wKFIrshIu8Sndg%2BxgYaBApZyBO5R2IceDnBSwsR0YVssbqfjIdsBp4ASU0uQvpj5UWDCTi4ecl&X-Amz-Signature=f932cd7226ec360d1796ce5495387871a1fa0038a4316e31d7d78756961859d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY7QRS2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDonlu1iCrBESe0KIpXo4YTpifplzWSrQ913IeceplSxAiEA0feGSSTzaPTrGR4Pn2D7iibQBjXuO6FJrMifFPPWqvAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm%2FY%2BYha%2BwKCcl6tCrcA2xZPojNdzm0mbtAyY7viAqQGdVoFCd8N3T%2BsyNnkUBDycnxbngGS7GUiQuKMLlDG8IPmpTNWn29AdZ52yNhTLJ1DagbGvVHY6azrcddZrxbJlcaUgrd26MGj4s81DwtlNVFWtcci2oYA3G9IYehB3w%2BJBghg%2B7L7LQqe3rylt3YLSomrj219K%2Bv3slTaE5C9cvwgC7JX0CKq0%2FpnYJzWQKeu4Nf%2Fh42Jr1jkGRCQpEwgvcHiZfFxnTCI5ox2fVU5ojaU2kX3z8Lam1pzYrHSUGz4xL03PVS%2B3JPnKoZVFJxpeEzE24l631j9aqEfffKCnWlb0UEaUJLQedveTQwYWlyKQmCI3i3curPluJX47Rog1%2FCH6QeFntNB7iamuXGX%2FNGeJBwHFeOAFZI7uaCoEhKmDdAdRcemvSn5zbQz2wT7OCqODyLC4UsY%2BD%2FV8U4NZ1oTkGc%2BroCdQREsjhQT4e3tv%2BxzO2Ck8g8TCkqA%2F2ed56AbYUXCyGBm1OH%2FRwogFPw%2F8WowrhxB%2Bk%2F8r8pIgyKAHzAMi4zFbstOz25Ja4yrmYSryOMrYg9vZ92d%2FL%2FqBNg5QKPwXgDiaMfu4JGVaDAPO%2BLS4%2BJC6EGUNeA8oArAaO2XeihFR14bmsUMI3A%2BLwGOqUBjpZA%2BXpffEiHd0fNOovT%2FNGZ8YPCaQo8xfFEdhhlxFFi%2B2TWZs2vylKlX8V0E0SfvabYJxTec%2Ff7DFcq%2FT6%2FzVPKuV%2FwSaJWPnfdKqIz93AQhxmupdj9Oa9OnDBwFn736pFMiW%2Ftyq%2F%2FH%2FZVp2wKFIrshIu8Sndg%2BxgYaBApZyBO5R2IceDnBSwsR0YVssbqfjIdsBp4ASU0uQvpj5UWDCTi4ecl&X-Amz-Signature=88cfda5bec4c7aadcd564d2549e80eb26fdf817dc92e0558103323173ea279ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY7QRS2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDonlu1iCrBESe0KIpXo4YTpifplzWSrQ913IeceplSxAiEA0feGSSTzaPTrGR4Pn2D7iibQBjXuO6FJrMifFPPWqvAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm%2FY%2BYha%2BwKCcl6tCrcA2xZPojNdzm0mbtAyY7viAqQGdVoFCd8N3T%2BsyNnkUBDycnxbngGS7GUiQuKMLlDG8IPmpTNWn29AdZ52yNhTLJ1DagbGvVHY6azrcddZrxbJlcaUgrd26MGj4s81DwtlNVFWtcci2oYA3G9IYehB3w%2BJBghg%2B7L7LQqe3rylt3YLSomrj219K%2Bv3slTaE5C9cvwgC7JX0CKq0%2FpnYJzWQKeu4Nf%2Fh42Jr1jkGRCQpEwgvcHiZfFxnTCI5ox2fVU5ojaU2kX3z8Lam1pzYrHSUGz4xL03PVS%2B3JPnKoZVFJxpeEzE24l631j9aqEfffKCnWlb0UEaUJLQedveTQwYWlyKQmCI3i3curPluJX47Rog1%2FCH6QeFntNB7iamuXGX%2FNGeJBwHFeOAFZI7uaCoEhKmDdAdRcemvSn5zbQz2wT7OCqODyLC4UsY%2BD%2FV8U4NZ1oTkGc%2BroCdQREsjhQT4e3tv%2BxzO2Ck8g8TCkqA%2F2ed56AbYUXCyGBm1OH%2FRwogFPw%2F8WowrhxB%2Bk%2F8r8pIgyKAHzAMi4zFbstOz25Ja4yrmYSryOMrYg9vZ92d%2FL%2FqBNg5QKPwXgDiaMfu4JGVaDAPO%2BLS4%2BJC6EGUNeA8oArAaO2XeihFR14bmsUMI3A%2BLwGOqUBjpZA%2BXpffEiHd0fNOovT%2FNGZ8YPCaQo8xfFEdhhlxFFi%2B2TWZs2vylKlX8V0E0SfvabYJxTec%2Ff7DFcq%2FT6%2FzVPKuV%2FwSaJWPnfdKqIz93AQhxmupdj9Oa9OnDBwFn736pFMiW%2Ftyq%2F%2FH%2FZVp2wKFIrshIu8Sndg%2BxgYaBApZyBO5R2IceDnBSwsR0YVssbqfjIdsBp4ASU0uQvpj5UWDCTi4ecl&X-Amz-Signature=31cd56e846efeb63eb7c5f2a730e0d8debc8c4672f43ee205b36786782ae6b36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY7QRS2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDonlu1iCrBESe0KIpXo4YTpifplzWSrQ913IeceplSxAiEA0feGSSTzaPTrGR4Pn2D7iibQBjXuO6FJrMifFPPWqvAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm%2FY%2BYha%2BwKCcl6tCrcA2xZPojNdzm0mbtAyY7viAqQGdVoFCd8N3T%2BsyNnkUBDycnxbngGS7GUiQuKMLlDG8IPmpTNWn29AdZ52yNhTLJ1DagbGvVHY6azrcddZrxbJlcaUgrd26MGj4s81DwtlNVFWtcci2oYA3G9IYehB3w%2BJBghg%2B7L7LQqe3rylt3YLSomrj219K%2Bv3slTaE5C9cvwgC7JX0CKq0%2FpnYJzWQKeu4Nf%2Fh42Jr1jkGRCQpEwgvcHiZfFxnTCI5ox2fVU5ojaU2kX3z8Lam1pzYrHSUGz4xL03PVS%2B3JPnKoZVFJxpeEzE24l631j9aqEfffKCnWlb0UEaUJLQedveTQwYWlyKQmCI3i3curPluJX47Rog1%2FCH6QeFntNB7iamuXGX%2FNGeJBwHFeOAFZI7uaCoEhKmDdAdRcemvSn5zbQz2wT7OCqODyLC4UsY%2BD%2FV8U4NZ1oTkGc%2BroCdQREsjhQT4e3tv%2BxzO2Ck8g8TCkqA%2F2ed56AbYUXCyGBm1OH%2FRwogFPw%2F8WowrhxB%2Bk%2F8r8pIgyKAHzAMi4zFbstOz25Ja4yrmYSryOMrYg9vZ92d%2FL%2FqBNg5QKPwXgDiaMfu4JGVaDAPO%2BLS4%2BJC6EGUNeA8oArAaO2XeihFR14bmsUMI3A%2BLwGOqUBjpZA%2BXpffEiHd0fNOovT%2FNGZ8YPCaQo8xfFEdhhlxFFi%2B2TWZs2vylKlX8V0E0SfvabYJxTec%2Ff7DFcq%2FT6%2FzVPKuV%2FwSaJWPnfdKqIz93AQhxmupdj9Oa9OnDBwFn736pFMiW%2Ftyq%2F%2FH%2FZVp2wKFIrshIu8Sndg%2BxgYaBApZyBO5R2IceDnBSwsR0YVssbqfjIdsBp4ASU0uQvpj5UWDCTi4ecl&X-Amz-Signature=321dd18a13a17865c182431e0622a1a3fda498d15342b065dfad29b310b9302c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
