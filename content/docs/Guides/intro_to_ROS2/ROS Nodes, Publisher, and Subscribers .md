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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYHFIMI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhQ4%2B%2Ff12GDFAOpTBuVoOPVBHRijDe1WdlE81UpxyRoQIgM0pkcr0Ic5n5PpX1YFRy6vaZ8wFXylOUWA93axFj2%2BwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7eTqN1rWKcWvUYPyrcA%2BqCzq7vG0GJ3xl0pCTW32OPt%2F%2BIm176GTHnvxzcjHwb8e37vxYBHgLLeT9aBn2hnsfPlBe0yd90ZH9mBwygf2HSb6X0V8XMk0rBXGMvGCtTHy8zcmCBiFno2HiENzAaacKxXiMnyA7E3jrfT50amt6ya5S1KPL1ANQGjMH5p2hgsMz49YJfYGSO2DRW0BD3Xf%2FYqc4NCMv8CWkeBA995qpgHxHOqRMyCjhXLyJLnTaBeyc5JDYhoXLtLXYTrLwyuaGk1akpaTNfrDk3yylRHRo5ua3FMMFnTNfkRi3FAjAai%2Fg4HITNAZg75p2QX%2FtJX2%2BrVHYEjqnC08DDskHrKBtjW0NOQ5gUvcOkcVPu4I3LTGBOmn%2FIMpbnI2S%2BpklTvhLypi2CooveSIEl%2FFwLC86qFjVtZB3T344Unw7lEmALMuLZvSQkr%2BX7%2Fx%2FL2Z4Yh5nxoaPuq8ZjN3hnOpXniXyS9ZK%2FEUWCfGnOsTagb5GqtwAs2S16btzX1Rhjv3AFaw3YyM75js8u4xBY3ybAPB4G1jrByN%2BBURrVc0l14x9Oiw%2BrO3dtOU3q%2FAFYZ22nk22BlqKCNyE29PZsXgD0zXW5UKjUiq2TZNbHWpUfdyXs9pfN%2BnBK1G%2Fuzkb0MMPT18IGOqUBl9qZzI0XQ0ptwLfQbf%2FbG36G3ltSD%2BCsm5YbMnn%2B3e8tda8lLOpyxHiqopSgZ0jNCvavoa3C2A0deDZ8eIPpTZJ2%2FyVmSOf0F0LaumuxBehwmmak6zPKGnMv%2BkoBe%2Bx4c1YX63vHNbQqllY3Mwbe6hdNWOAE8U2BH1m%2B%2BKSrp%2BFEKX05rKylh3hILoohMJrpqTRmHZP5SSNyYM5iXYoW%2F3Kg1Rp3&X-Amz-Signature=69230b87e95ccddeedf34c5ee269713d2379726cfc0b59b2feb39621861d7261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYHFIMI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhQ4%2B%2Ff12GDFAOpTBuVoOPVBHRijDe1WdlE81UpxyRoQIgM0pkcr0Ic5n5PpX1YFRy6vaZ8wFXylOUWA93axFj2%2BwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7eTqN1rWKcWvUYPyrcA%2BqCzq7vG0GJ3xl0pCTW32OPt%2F%2BIm176GTHnvxzcjHwb8e37vxYBHgLLeT9aBn2hnsfPlBe0yd90ZH9mBwygf2HSb6X0V8XMk0rBXGMvGCtTHy8zcmCBiFno2HiENzAaacKxXiMnyA7E3jrfT50amt6ya5S1KPL1ANQGjMH5p2hgsMz49YJfYGSO2DRW0BD3Xf%2FYqc4NCMv8CWkeBA995qpgHxHOqRMyCjhXLyJLnTaBeyc5JDYhoXLtLXYTrLwyuaGk1akpaTNfrDk3yylRHRo5ua3FMMFnTNfkRi3FAjAai%2Fg4HITNAZg75p2QX%2FtJX2%2BrVHYEjqnC08DDskHrKBtjW0NOQ5gUvcOkcVPu4I3LTGBOmn%2FIMpbnI2S%2BpklTvhLypi2CooveSIEl%2FFwLC86qFjVtZB3T344Unw7lEmALMuLZvSQkr%2BX7%2Fx%2FL2Z4Yh5nxoaPuq8ZjN3hnOpXniXyS9ZK%2FEUWCfGnOsTagb5GqtwAs2S16btzX1Rhjv3AFaw3YyM75js8u4xBY3ybAPB4G1jrByN%2BBURrVc0l14x9Oiw%2BrO3dtOU3q%2FAFYZ22nk22BlqKCNyE29PZsXgD0zXW5UKjUiq2TZNbHWpUfdyXs9pfN%2BnBK1G%2Fuzkb0MMPT18IGOqUBl9qZzI0XQ0ptwLfQbf%2FbG36G3ltSD%2BCsm5YbMnn%2B3e8tda8lLOpyxHiqopSgZ0jNCvavoa3C2A0deDZ8eIPpTZJ2%2FyVmSOf0F0LaumuxBehwmmak6zPKGnMv%2BkoBe%2Bx4c1YX63vHNbQqllY3Mwbe6hdNWOAE8U2BH1m%2B%2BKSrp%2BFEKX05rKylh3hILoohMJrpqTRmHZP5SSNyYM5iXYoW%2F3Kg1Rp3&X-Amz-Signature=952377744acdea871e2f7a702cb0606569838802cf74fbd575dde8e219e381f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYHFIMI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhQ4%2B%2Ff12GDFAOpTBuVoOPVBHRijDe1WdlE81UpxyRoQIgM0pkcr0Ic5n5PpX1YFRy6vaZ8wFXylOUWA93axFj2%2BwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7eTqN1rWKcWvUYPyrcA%2BqCzq7vG0GJ3xl0pCTW32OPt%2F%2BIm176GTHnvxzcjHwb8e37vxYBHgLLeT9aBn2hnsfPlBe0yd90ZH9mBwygf2HSb6X0V8XMk0rBXGMvGCtTHy8zcmCBiFno2HiENzAaacKxXiMnyA7E3jrfT50amt6ya5S1KPL1ANQGjMH5p2hgsMz49YJfYGSO2DRW0BD3Xf%2FYqc4NCMv8CWkeBA995qpgHxHOqRMyCjhXLyJLnTaBeyc5JDYhoXLtLXYTrLwyuaGk1akpaTNfrDk3yylRHRo5ua3FMMFnTNfkRi3FAjAai%2Fg4HITNAZg75p2QX%2FtJX2%2BrVHYEjqnC08DDskHrKBtjW0NOQ5gUvcOkcVPu4I3LTGBOmn%2FIMpbnI2S%2BpklTvhLypi2CooveSIEl%2FFwLC86qFjVtZB3T344Unw7lEmALMuLZvSQkr%2BX7%2Fx%2FL2Z4Yh5nxoaPuq8ZjN3hnOpXniXyS9ZK%2FEUWCfGnOsTagb5GqtwAs2S16btzX1Rhjv3AFaw3YyM75js8u4xBY3ybAPB4G1jrByN%2BBURrVc0l14x9Oiw%2BrO3dtOU3q%2FAFYZ22nk22BlqKCNyE29PZsXgD0zXW5UKjUiq2TZNbHWpUfdyXs9pfN%2BnBK1G%2Fuzkb0MMPT18IGOqUBl9qZzI0XQ0ptwLfQbf%2FbG36G3ltSD%2BCsm5YbMnn%2B3e8tda8lLOpyxHiqopSgZ0jNCvavoa3C2A0deDZ8eIPpTZJ2%2FyVmSOf0F0LaumuxBehwmmak6zPKGnMv%2BkoBe%2Bx4c1YX63vHNbQqllY3Mwbe6hdNWOAE8U2BH1m%2B%2BKSrp%2BFEKX05rKylh3hILoohMJrpqTRmHZP5SSNyYM5iXYoW%2F3Kg1Rp3&X-Amz-Signature=0d815896b3878c213422a1d8908b6355e81b4005c1fd3e64ac4bcd13c50d6ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYHFIMI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhQ4%2B%2Ff12GDFAOpTBuVoOPVBHRijDe1WdlE81UpxyRoQIgM0pkcr0Ic5n5PpX1YFRy6vaZ8wFXylOUWA93axFj2%2BwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7eTqN1rWKcWvUYPyrcA%2BqCzq7vG0GJ3xl0pCTW32OPt%2F%2BIm176GTHnvxzcjHwb8e37vxYBHgLLeT9aBn2hnsfPlBe0yd90ZH9mBwygf2HSb6X0V8XMk0rBXGMvGCtTHy8zcmCBiFno2HiENzAaacKxXiMnyA7E3jrfT50amt6ya5S1KPL1ANQGjMH5p2hgsMz49YJfYGSO2DRW0BD3Xf%2FYqc4NCMv8CWkeBA995qpgHxHOqRMyCjhXLyJLnTaBeyc5JDYhoXLtLXYTrLwyuaGk1akpaTNfrDk3yylRHRo5ua3FMMFnTNfkRi3FAjAai%2Fg4HITNAZg75p2QX%2FtJX2%2BrVHYEjqnC08DDskHrKBtjW0NOQ5gUvcOkcVPu4I3LTGBOmn%2FIMpbnI2S%2BpklTvhLypi2CooveSIEl%2FFwLC86qFjVtZB3T344Unw7lEmALMuLZvSQkr%2BX7%2Fx%2FL2Z4Yh5nxoaPuq8ZjN3hnOpXniXyS9ZK%2FEUWCfGnOsTagb5GqtwAs2S16btzX1Rhjv3AFaw3YyM75js8u4xBY3ybAPB4G1jrByN%2BBURrVc0l14x9Oiw%2BrO3dtOU3q%2FAFYZ22nk22BlqKCNyE29PZsXgD0zXW5UKjUiq2TZNbHWpUfdyXs9pfN%2BnBK1G%2Fuzkb0MMPT18IGOqUBl9qZzI0XQ0ptwLfQbf%2FbG36G3ltSD%2BCsm5YbMnn%2B3e8tda8lLOpyxHiqopSgZ0jNCvavoa3C2A0deDZ8eIPpTZJ2%2FyVmSOf0F0LaumuxBehwmmak6zPKGnMv%2BkoBe%2Bx4c1YX63vHNbQqllY3Mwbe6hdNWOAE8U2BH1m%2B%2BKSrp%2BFEKX05rKylh3hILoohMJrpqTRmHZP5SSNyYM5iXYoW%2F3Kg1Rp3&X-Amz-Signature=2bd25b9c1e69f8b49d17e3339dff50e16e66507ef2040658514de6d4943de502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYHFIMI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhQ4%2B%2Ff12GDFAOpTBuVoOPVBHRijDe1WdlE81UpxyRoQIgM0pkcr0Ic5n5PpX1YFRy6vaZ8wFXylOUWA93axFj2%2BwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7eTqN1rWKcWvUYPyrcA%2BqCzq7vG0GJ3xl0pCTW32OPt%2F%2BIm176GTHnvxzcjHwb8e37vxYBHgLLeT9aBn2hnsfPlBe0yd90ZH9mBwygf2HSb6X0V8XMk0rBXGMvGCtTHy8zcmCBiFno2HiENzAaacKxXiMnyA7E3jrfT50amt6ya5S1KPL1ANQGjMH5p2hgsMz49YJfYGSO2DRW0BD3Xf%2FYqc4NCMv8CWkeBA995qpgHxHOqRMyCjhXLyJLnTaBeyc5JDYhoXLtLXYTrLwyuaGk1akpaTNfrDk3yylRHRo5ua3FMMFnTNfkRi3FAjAai%2Fg4HITNAZg75p2QX%2FtJX2%2BrVHYEjqnC08DDskHrKBtjW0NOQ5gUvcOkcVPu4I3LTGBOmn%2FIMpbnI2S%2BpklTvhLypi2CooveSIEl%2FFwLC86qFjVtZB3T344Unw7lEmALMuLZvSQkr%2BX7%2Fx%2FL2Z4Yh5nxoaPuq8ZjN3hnOpXniXyS9ZK%2FEUWCfGnOsTagb5GqtwAs2S16btzX1Rhjv3AFaw3YyM75js8u4xBY3ybAPB4G1jrByN%2BBURrVc0l14x9Oiw%2BrO3dtOU3q%2FAFYZ22nk22BlqKCNyE29PZsXgD0zXW5UKjUiq2TZNbHWpUfdyXs9pfN%2BnBK1G%2Fuzkb0MMPT18IGOqUBl9qZzI0XQ0ptwLfQbf%2FbG36G3ltSD%2BCsm5YbMnn%2B3e8tda8lLOpyxHiqopSgZ0jNCvavoa3C2A0deDZ8eIPpTZJ2%2FyVmSOf0F0LaumuxBehwmmak6zPKGnMv%2BkoBe%2Bx4c1YX63vHNbQqllY3Mwbe6hdNWOAE8U2BH1m%2B%2BKSrp%2BFEKX05rKylh3hILoohMJrpqTRmHZP5SSNyYM5iXYoW%2F3Kg1Rp3&X-Amz-Signature=2accfaca9db8b0fd7b6c88e7130e7465e65a685b49dc605f52d57f67c5e21fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYHFIMI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhQ4%2B%2Ff12GDFAOpTBuVoOPVBHRijDe1WdlE81UpxyRoQIgM0pkcr0Ic5n5PpX1YFRy6vaZ8wFXylOUWA93axFj2%2BwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7eTqN1rWKcWvUYPyrcA%2BqCzq7vG0GJ3xl0pCTW32OPt%2F%2BIm176GTHnvxzcjHwb8e37vxYBHgLLeT9aBn2hnsfPlBe0yd90ZH9mBwygf2HSb6X0V8XMk0rBXGMvGCtTHy8zcmCBiFno2HiENzAaacKxXiMnyA7E3jrfT50amt6ya5S1KPL1ANQGjMH5p2hgsMz49YJfYGSO2DRW0BD3Xf%2FYqc4NCMv8CWkeBA995qpgHxHOqRMyCjhXLyJLnTaBeyc5JDYhoXLtLXYTrLwyuaGk1akpaTNfrDk3yylRHRo5ua3FMMFnTNfkRi3FAjAai%2Fg4HITNAZg75p2QX%2FtJX2%2BrVHYEjqnC08DDskHrKBtjW0NOQ5gUvcOkcVPu4I3LTGBOmn%2FIMpbnI2S%2BpklTvhLypi2CooveSIEl%2FFwLC86qFjVtZB3T344Unw7lEmALMuLZvSQkr%2BX7%2Fx%2FL2Z4Yh5nxoaPuq8ZjN3hnOpXniXyS9ZK%2FEUWCfGnOsTagb5GqtwAs2S16btzX1Rhjv3AFaw3YyM75js8u4xBY3ybAPB4G1jrByN%2BBURrVc0l14x9Oiw%2BrO3dtOU3q%2FAFYZ22nk22BlqKCNyE29PZsXgD0zXW5UKjUiq2TZNbHWpUfdyXs9pfN%2BnBK1G%2Fuzkb0MMPT18IGOqUBl9qZzI0XQ0ptwLfQbf%2FbG36G3ltSD%2BCsm5YbMnn%2B3e8tda8lLOpyxHiqopSgZ0jNCvavoa3C2A0deDZ8eIPpTZJ2%2FyVmSOf0F0LaumuxBehwmmak6zPKGnMv%2BkoBe%2Bx4c1YX63vHNbQqllY3Mwbe6hdNWOAE8U2BH1m%2B%2BKSrp%2BFEKX05rKylh3hILoohMJrpqTRmHZP5SSNyYM5iXYoW%2F3Kg1Rp3&X-Amz-Signature=ff0a29f25e7a920534f387bd69fab8d2888abfb2f395ad3f04da617aa3f788dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYHFIMI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhQ4%2B%2Ff12GDFAOpTBuVoOPVBHRijDe1WdlE81UpxyRoQIgM0pkcr0Ic5n5PpX1YFRy6vaZ8wFXylOUWA93axFj2%2BwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7eTqN1rWKcWvUYPyrcA%2BqCzq7vG0GJ3xl0pCTW32OPt%2F%2BIm176GTHnvxzcjHwb8e37vxYBHgLLeT9aBn2hnsfPlBe0yd90ZH9mBwygf2HSb6X0V8XMk0rBXGMvGCtTHy8zcmCBiFno2HiENzAaacKxXiMnyA7E3jrfT50amt6ya5S1KPL1ANQGjMH5p2hgsMz49YJfYGSO2DRW0BD3Xf%2FYqc4NCMv8CWkeBA995qpgHxHOqRMyCjhXLyJLnTaBeyc5JDYhoXLtLXYTrLwyuaGk1akpaTNfrDk3yylRHRo5ua3FMMFnTNfkRi3FAjAai%2Fg4HITNAZg75p2QX%2FtJX2%2BrVHYEjqnC08DDskHrKBtjW0NOQ5gUvcOkcVPu4I3LTGBOmn%2FIMpbnI2S%2BpklTvhLypi2CooveSIEl%2FFwLC86qFjVtZB3T344Unw7lEmALMuLZvSQkr%2BX7%2Fx%2FL2Z4Yh5nxoaPuq8ZjN3hnOpXniXyS9ZK%2FEUWCfGnOsTagb5GqtwAs2S16btzX1Rhjv3AFaw3YyM75js8u4xBY3ybAPB4G1jrByN%2BBURrVc0l14x9Oiw%2BrO3dtOU3q%2FAFYZ22nk22BlqKCNyE29PZsXgD0zXW5UKjUiq2TZNbHWpUfdyXs9pfN%2BnBK1G%2Fuzkb0MMPT18IGOqUBl9qZzI0XQ0ptwLfQbf%2FbG36G3ltSD%2BCsm5YbMnn%2B3e8tda8lLOpyxHiqopSgZ0jNCvavoa3C2A0deDZ8eIPpTZJ2%2FyVmSOf0F0LaumuxBehwmmak6zPKGnMv%2BkoBe%2Bx4c1YX63vHNbQqllY3Mwbe6hdNWOAE8U2BH1m%2B%2BKSrp%2BFEKX05rKylh3hILoohMJrpqTRmHZP5SSNyYM5iXYoW%2F3Kg1Rp3&X-Amz-Signature=5bf7f1adcb8c42b274a591ed4b8e24fff8d6ed7d4d54e8311bb0edd7e23ef7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SYHFIMI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhQ4%2B%2Ff12GDFAOpTBuVoOPVBHRijDe1WdlE81UpxyRoQIgM0pkcr0Ic5n5PpX1YFRy6vaZ8wFXylOUWA93axFj2%2BwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7eTqN1rWKcWvUYPyrcA%2BqCzq7vG0GJ3xl0pCTW32OPt%2F%2BIm176GTHnvxzcjHwb8e37vxYBHgLLeT9aBn2hnsfPlBe0yd90ZH9mBwygf2HSb6X0V8XMk0rBXGMvGCtTHy8zcmCBiFno2HiENzAaacKxXiMnyA7E3jrfT50amt6ya5S1KPL1ANQGjMH5p2hgsMz49YJfYGSO2DRW0BD3Xf%2FYqc4NCMv8CWkeBA995qpgHxHOqRMyCjhXLyJLnTaBeyc5JDYhoXLtLXYTrLwyuaGk1akpaTNfrDk3yylRHRo5ua3FMMFnTNfkRi3FAjAai%2Fg4HITNAZg75p2QX%2FtJX2%2BrVHYEjqnC08DDskHrKBtjW0NOQ5gUvcOkcVPu4I3LTGBOmn%2FIMpbnI2S%2BpklTvhLypi2CooveSIEl%2FFwLC86qFjVtZB3T344Unw7lEmALMuLZvSQkr%2BX7%2Fx%2FL2Z4Yh5nxoaPuq8ZjN3hnOpXniXyS9ZK%2FEUWCfGnOsTagb5GqtwAs2S16btzX1Rhjv3AFaw3YyM75js8u4xBY3ybAPB4G1jrByN%2BBURrVc0l14x9Oiw%2BrO3dtOU3q%2FAFYZ22nk22BlqKCNyE29PZsXgD0zXW5UKjUiq2TZNbHWpUfdyXs9pfN%2BnBK1G%2Fuzkb0MMPT18IGOqUBl9qZzI0XQ0ptwLfQbf%2FbG36G3ltSD%2BCsm5YbMnn%2B3e8tda8lLOpyxHiqopSgZ0jNCvavoa3C2A0deDZ8eIPpTZJ2%2FyVmSOf0F0LaumuxBehwmmak6zPKGnMv%2BkoBe%2Bx4c1YX63vHNbQqllY3Mwbe6hdNWOAE8U2BH1m%2B%2BKSrp%2BFEKX05rKylh3hILoohMJrpqTRmHZP5SSNyYM5iXYoW%2F3Kg1Rp3&X-Amz-Signature=c1fb535485a28e1d632531debb7f84a3a58b70ffb4bbfd59e7910519e6210bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
