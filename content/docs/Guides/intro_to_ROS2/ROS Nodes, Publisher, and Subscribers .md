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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV22NV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77UPjwRZcrkyUoguknGbHDOU1bfUCXgkRhKl8rPPLcgIgSyjTil3XA6HXIzLK4Bc2kR98iK6ak5xWur0QK81Q0G8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNDHe6tadDAEJHogqircA73L2atBNuLtf5wy3YPx5pNaovffUiePJYtdhPkxMG6oykSR6XyMfC%2F2JgJYgcrJzZYkT9Jz4G2%2F%2BhDJN2O2B1R%2FbCmmQU9WNHfU%2BLFcjqYE%2BOcE%2BMIgK3H1198QdmD1ha%2Fcouq%2FHD3e3%2BygK%2BcGkqq60aYwJCAbpbj6U6jSnvfeE%2Fmzh8ogHLF4HDUhvBPicQVwoUqFIkeCs%2Bstf6tvmQoNuw9%2BJHRTy79%2BFz08IXgSO2%2Feh8pjNpBAhZw24J5qzxUEJWzb%2F3xJSBhstPuKr5IBq514%2ByZr8TSpv3OiQEiJHOdBV1HOyFNedq8SrJzwUq1ktSTPT2rtNWsfKGm4gUmwIaadV4JhRCbliYifptjaM5KyKkIp%2FylBxQJunSSWjr1vNnKZBqiTOPSLYCgPaLJbiudN0UqhbcnroB1edmyQ35ZLdNH8FMY8SGDt4sT4TT9co9lkPt4WEw%2FxMSiRfCWWNLCc4cODk6ydsuw%2FrkK8Bdb4fScBUw%2FK9KTEzSTz45%2FcsOpCq7iwtR6pnt7nhfCR5SRJ3hIqwJQHSL%2FdkGdq3scAZ3pNtalRocbE9dutfre4AdRxur54iVb8IMEYwoLzhkgau5bo4HkvEL2irPRXjGq3m%2B0YlPsdg3yRMNf258AGOqUB7YO6Es%2Fa1U1Zy7PtQ4FVlrpkJVlPBw9KCq5qqEyFrhjZrcN%2FjkgFovK9%2BFjuab6DTcGLSwCw90BL%2BFgqW7mLXhFhMHazCcLoZWSZes4dtpsIAQRtqwcy1TyHWUkn8e72x%2F%2FXOdjvGBQzMF3IplubZ4GSKjv3robidK3Du0X314XWpNbqZU9QVT%2FUw%2FHiPs90%2FZ%2F9s8Ly9ehwJEnhzq9NVp%2BwHjXK&X-Amz-Signature=875c41934358dab6641d470aba5ffbe9aa4f4a8634c885bb3335d98840d125eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV22NV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77UPjwRZcrkyUoguknGbHDOU1bfUCXgkRhKl8rPPLcgIgSyjTil3XA6HXIzLK4Bc2kR98iK6ak5xWur0QK81Q0G8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNDHe6tadDAEJHogqircA73L2atBNuLtf5wy3YPx5pNaovffUiePJYtdhPkxMG6oykSR6XyMfC%2F2JgJYgcrJzZYkT9Jz4G2%2F%2BhDJN2O2B1R%2FbCmmQU9WNHfU%2BLFcjqYE%2BOcE%2BMIgK3H1198QdmD1ha%2Fcouq%2FHD3e3%2BygK%2BcGkqq60aYwJCAbpbj6U6jSnvfeE%2Fmzh8ogHLF4HDUhvBPicQVwoUqFIkeCs%2Bstf6tvmQoNuw9%2BJHRTy79%2BFz08IXgSO2%2Feh8pjNpBAhZw24J5qzxUEJWzb%2F3xJSBhstPuKr5IBq514%2ByZr8TSpv3OiQEiJHOdBV1HOyFNedq8SrJzwUq1ktSTPT2rtNWsfKGm4gUmwIaadV4JhRCbliYifptjaM5KyKkIp%2FylBxQJunSSWjr1vNnKZBqiTOPSLYCgPaLJbiudN0UqhbcnroB1edmyQ35ZLdNH8FMY8SGDt4sT4TT9co9lkPt4WEw%2FxMSiRfCWWNLCc4cODk6ydsuw%2FrkK8Bdb4fScBUw%2FK9KTEzSTz45%2FcsOpCq7iwtR6pnt7nhfCR5SRJ3hIqwJQHSL%2FdkGdq3scAZ3pNtalRocbE9dutfre4AdRxur54iVb8IMEYwoLzhkgau5bo4HkvEL2irPRXjGq3m%2B0YlPsdg3yRMNf258AGOqUB7YO6Es%2Fa1U1Zy7PtQ4FVlrpkJVlPBw9KCq5qqEyFrhjZrcN%2FjkgFovK9%2BFjuab6DTcGLSwCw90BL%2BFgqW7mLXhFhMHazCcLoZWSZes4dtpsIAQRtqwcy1TyHWUkn8e72x%2F%2FXOdjvGBQzMF3IplubZ4GSKjv3robidK3Du0X314XWpNbqZU9QVT%2FUw%2FHiPs90%2FZ%2F9s8Ly9ehwJEnhzq9NVp%2BwHjXK&X-Amz-Signature=24da676c3534e6d6ca4b816e21e052b43baaecb909a8da224e5adb1d7de02193&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV22NV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77UPjwRZcrkyUoguknGbHDOU1bfUCXgkRhKl8rPPLcgIgSyjTil3XA6HXIzLK4Bc2kR98iK6ak5xWur0QK81Q0G8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNDHe6tadDAEJHogqircA73L2atBNuLtf5wy3YPx5pNaovffUiePJYtdhPkxMG6oykSR6XyMfC%2F2JgJYgcrJzZYkT9Jz4G2%2F%2BhDJN2O2B1R%2FbCmmQU9WNHfU%2BLFcjqYE%2BOcE%2BMIgK3H1198QdmD1ha%2Fcouq%2FHD3e3%2BygK%2BcGkqq60aYwJCAbpbj6U6jSnvfeE%2Fmzh8ogHLF4HDUhvBPicQVwoUqFIkeCs%2Bstf6tvmQoNuw9%2BJHRTy79%2BFz08IXgSO2%2Feh8pjNpBAhZw24J5qzxUEJWzb%2F3xJSBhstPuKr5IBq514%2ByZr8TSpv3OiQEiJHOdBV1HOyFNedq8SrJzwUq1ktSTPT2rtNWsfKGm4gUmwIaadV4JhRCbliYifptjaM5KyKkIp%2FylBxQJunSSWjr1vNnKZBqiTOPSLYCgPaLJbiudN0UqhbcnroB1edmyQ35ZLdNH8FMY8SGDt4sT4TT9co9lkPt4WEw%2FxMSiRfCWWNLCc4cODk6ydsuw%2FrkK8Bdb4fScBUw%2FK9KTEzSTz45%2FcsOpCq7iwtR6pnt7nhfCR5SRJ3hIqwJQHSL%2FdkGdq3scAZ3pNtalRocbE9dutfre4AdRxur54iVb8IMEYwoLzhkgau5bo4HkvEL2irPRXjGq3m%2B0YlPsdg3yRMNf258AGOqUB7YO6Es%2Fa1U1Zy7PtQ4FVlrpkJVlPBw9KCq5qqEyFrhjZrcN%2FjkgFovK9%2BFjuab6DTcGLSwCw90BL%2BFgqW7mLXhFhMHazCcLoZWSZes4dtpsIAQRtqwcy1TyHWUkn8e72x%2F%2FXOdjvGBQzMF3IplubZ4GSKjv3robidK3Du0X314XWpNbqZU9QVT%2FUw%2FHiPs90%2FZ%2F9s8Ly9ehwJEnhzq9NVp%2BwHjXK&X-Amz-Signature=283f072c7180c942319289a012125040fe112efa2fbfa2f225d2df62141063e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV22NV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77UPjwRZcrkyUoguknGbHDOU1bfUCXgkRhKl8rPPLcgIgSyjTil3XA6HXIzLK4Bc2kR98iK6ak5xWur0QK81Q0G8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNDHe6tadDAEJHogqircA73L2atBNuLtf5wy3YPx5pNaovffUiePJYtdhPkxMG6oykSR6XyMfC%2F2JgJYgcrJzZYkT9Jz4G2%2F%2BhDJN2O2B1R%2FbCmmQU9WNHfU%2BLFcjqYE%2BOcE%2BMIgK3H1198QdmD1ha%2Fcouq%2FHD3e3%2BygK%2BcGkqq60aYwJCAbpbj6U6jSnvfeE%2Fmzh8ogHLF4HDUhvBPicQVwoUqFIkeCs%2Bstf6tvmQoNuw9%2BJHRTy79%2BFz08IXgSO2%2Feh8pjNpBAhZw24J5qzxUEJWzb%2F3xJSBhstPuKr5IBq514%2ByZr8TSpv3OiQEiJHOdBV1HOyFNedq8SrJzwUq1ktSTPT2rtNWsfKGm4gUmwIaadV4JhRCbliYifptjaM5KyKkIp%2FylBxQJunSSWjr1vNnKZBqiTOPSLYCgPaLJbiudN0UqhbcnroB1edmyQ35ZLdNH8FMY8SGDt4sT4TT9co9lkPt4WEw%2FxMSiRfCWWNLCc4cODk6ydsuw%2FrkK8Bdb4fScBUw%2FK9KTEzSTz45%2FcsOpCq7iwtR6pnt7nhfCR5SRJ3hIqwJQHSL%2FdkGdq3scAZ3pNtalRocbE9dutfre4AdRxur54iVb8IMEYwoLzhkgau5bo4HkvEL2irPRXjGq3m%2B0YlPsdg3yRMNf258AGOqUB7YO6Es%2Fa1U1Zy7PtQ4FVlrpkJVlPBw9KCq5qqEyFrhjZrcN%2FjkgFovK9%2BFjuab6DTcGLSwCw90BL%2BFgqW7mLXhFhMHazCcLoZWSZes4dtpsIAQRtqwcy1TyHWUkn8e72x%2F%2FXOdjvGBQzMF3IplubZ4GSKjv3robidK3Du0X314XWpNbqZU9QVT%2FUw%2FHiPs90%2FZ%2F9s8Ly9ehwJEnhzq9NVp%2BwHjXK&X-Amz-Signature=154f06b83b2e2119d03d2e93d23415fd57682b9396950004c25fcf4ba3322d86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV22NV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77UPjwRZcrkyUoguknGbHDOU1bfUCXgkRhKl8rPPLcgIgSyjTil3XA6HXIzLK4Bc2kR98iK6ak5xWur0QK81Q0G8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNDHe6tadDAEJHogqircA73L2atBNuLtf5wy3YPx5pNaovffUiePJYtdhPkxMG6oykSR6XyMfC%2F2JgJYgcrJzZYkT9Jz4G2%2F%2BhDJN2O2B1R%2FbCmmQU9WNHfU%2BLFcjqYE%2BOcE%2BMIgK3H1198QdmD1ha%2Fcouq%2FHD3e3%2BygK%2BcGkqq60aYwJCAbpbj6U6jSnvfeE%2Fmzh8ogHLF4HDUhvBPicQVwoUqFIkeCs%2Bstf6tvmQoNuw9%2BJHRTy79%2BFz08IXgSO2%2Feh8pjNpBAhZw24J5qzxUEJWzb%2F3xJSBhstPuKr5IBq514%2ByZr8TSpv3OiQEiJHOdBV1HOyFNedq8SrJzwUq1ktSTPT2rtNWsfKGm4gUmwIaadV4JhRCbliYifptjaM5KyKkIp%2FylBxQJunSSWjr1vNnKZBqiTOPSLYCgPaLJbiudN0UqhbcnroB1edmyQ35ZLdNH8FMY8SGDt4sT4TT9co9lkPt4WEw%2FxMSiRfCWWNLCc4cODk6ydsuw%2FrkK8Bdb4fScBUw%2FK9KTEzSTz45%2FcsOpCq7iwtR6pnt7nhfCR5SRJ3hIqwJQHSL%2FdkGdq3scAZ3pNtalRocbE9dutfre4AdRxur54iVb8IMEYwoLzhkgau5bo4HkvEL2irPRXjGq3m%2B0YlPsdg3yRMNf258AGOqUB7YO6Es%2Fa1U1Zy7PtQ4FVlrpkJVlPBw9KCq5qqEyFrhjZrcN%2FjkgFovK9%2BFjuab6DTcGLSwCw90BL%2BFgqW7mLXhFhMHazCcLoZWSZes4dtpsIAQRtqwcy1TyHWUkn8e72x%2F%2FXOdjvGBQzMF3IplubZ4GSKjv3robidK3Du0X314XWpNbqZU9QVT%2FUw%2FHiPs90%2FZ%2F9s8Ly9ehwJEnhzq9NVp%2BwHjXK&X-Amz-Signature=57b732cb969652a30f56c6b1d1c219170a2ce519e1d6b5d11cdb72d8a2aae7ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV22NV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77UPjwRZcrkyUoguknGbHDOU1bfUCXgkRhKl8rPPLcgIgSyjTil3XA6HXIzLK4Bc2kR98iK6ak5xWur0QK81Q0G8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNDHe6tadDAEJHogqircA73L2atBNuLtf5wy3YPx5pNaovffUiePJYtdhPkxMG6oykSR6XyMfC%2F2JgJYgcrJzZYkT9Jz4G2%2F%2BhDJN2O2B1R%2FbCmmQU9WNHfU%2BLFcjqYE%2BOcE%2BMIgK3H1198QdmD1ha%2Fcouq%2FHD3e3%2BygK%2BcGkqq60aYwJCAbpbj6U6jSnvfeE%2Fmzh8ogHLF4HDUhvBPicQVwoUqFIkeCs%2Bstf6tvmQoNuw9%2BJHRTy79%2BFz08IXgSO2%2Feh8pjNpBAhZw24J5qzxUEJWzb%2F3xJSBhstPuKr5IBq514%2ByZr8TSpv3OiQEiJHOdBV1HOyFNedq8SrJzwUq1ktSTPT2rtNWsfKGm4gUmwIaadV4JhRCbliYifptjaM5KyKkIp%2FylBxQJunSSWjr1vNnKZBqiTOPSLYCgPaLJbiudN0UqhbcnroB1edmyQ35ZLdNH8FMY8SGDt4sT4TT9co9lkPt4WEw%2FxMSiRfCWWNLCc4cODk6ydsuw%2FrkK8Bdb4fScBUw%2FK9KTEzSTz45%2FcsOpCq7iwtR6pnt7nhfCR5SRJ3hIqwJQHSL%2FdkGdq3scAZ3pNtalRocbE9dutfre4AdRxur54iVb8IMEYwoLzhkgau5bo4HkvEL2irPRXjGq3m%2B0YlPsdg3yRMNf258AGOqUB7YO6Es%2Fa1U1Zy7PtQ4FVlrpkJVlPBw9KCq5qqEyFrhjZrcN%2FjkgFovK9%2BFjuab6DTcGLSwCw90BL%2BFgqW7mLXhFhMHazCcLoZWSZes4dtpsIAQRtqwcy1TyHWUkn8e72x%2F%2FXOdjvGBQzMF3IplubZ4GSKjv3robidK3Du0X314XWpNbqZU9QVT%2FUw%2FHiPs90%2FZ%2F9s8Ly9ehwJEnhzq9NVp%2BwHjXK&X-Amz-Signature=bdc7f486a9bbb03ddd32820ae4ce8c2a13c0907792b71f4926eeb67c95dd338e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV22NV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77UPjwRZcrkyUoguknGbHDOU1bfUCXgkRhKl8rPPLcgIgSyjTil3XA6HXIzLK4Bc2kR98iK6ak5xWur0QK81Q0G8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNDHe6tadDAEJHogqircA73L2atBNuLtf5wy3YPx5pNaovffUiePJYtdhPkxMG6oykSR6XyMfC%2F2JgJYgcrJzZYkT9Jz4G2%2F%2BhDJN2O2B1R%2FbCmmQU9WNHfU%2BLFcjqYE%2BOcE%2BMIgK3H1198QdmD1ha%2Fcouq%2FHD3e3%2BygK%2BcGkqq60aYwJCAbpbj6U6jSnvfeE%2Fmzh8ogHLF4HDUhvBPicQVwoUqFIkeCs%2Bstf6tvmQoNuw9%2BJHRTy79%2BFz08IXgSO2%2Feh8pjNpBAhZw24J5qzxUEJWzb%2F3xJSBhstPuKr5IBq514%2ByZr8TSpv3OiQEiJHOdBV1HOyFNedq8SrJzwUq1ktSTPT2rtNWsfKGm4gUmwIaadV4JhRCbliYifptjaM5KyKkIp%2FylBxQJunSSWjr1vNnKZBqiTOPSLYCgPaLJbiudN0UqhbcnroB1edmyQ35ZLdNH8FMY8SGDt4sT4TT9co9lkPt4WEw%2FxMSiRfCWWNLCc4cODk6ydsuw%2FrkK8Bdb4fScBUw%2FK9KTEzSTz45%2FcsOpCq7iwtR6pnt7nhfCR5SRJ3hIqwJQHSL%2FdkGdq3scAZ3pNtalRocbE9dutfre4AdRxur54iVb8IMEYwoLzhkgau5bo4HkvEL2irPRXjGq3m%2B0YlPsdg3yRMNf258AGOqUB7YO6Es%2Fa1U1Zy7PtQ4FVlrpkJVlPBw9KCq5qqEyFrhjZrcN%2FjkgFovK9%2BFjuab6DTcGLSwCw90BL%2BFgqW7mLXhFhMHazCcLoZWSZes4dtpsIAQRtqwcy1TyHWUkn8e72x%2F%2FXOdjvGBQzMF3IplubZ4GSKjv3robidK3Du0X314XWpNbqZU9QVT%2FUw%2FHiPs90%2FZ%2F9s8Ly9ehwJEnhzq9NVp%2BwHjXK&X-Amz-Signature=08cc6c378f5a41d88f421111ff84618e2c4ed4a01543f80b64104b5051df51ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV22NV%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77UPjwRZcrkyUoguknGbHDOU1bfUCXgkRhKl8rPPLcgIgSyjTil3XA6HXIzLK4Bc2kR98iK6ak5xWur0QK81Q0G8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNDHe6tadDAEJHogqircA73L2atBNuLtf5wy3YPx5pNaovffUiePJYtdhPkxMG6oykSR6XyMfC%2F2JgJYgcrJzZYkT9Jz4G2%2F%2BhDJN2O2B1R%2FbCmmQU9WNHfU%2BLFcjqYE%2BOcE%2BMIgK3H1198QdmD1ha%2Fcouq%2FHD3e3%2BygK%2BcGkqq60aYwJCAbpbj6U6jSnvfeE%2Fmzh8ogHLF4HDUhvBPicQVwoUqFIkeCs%2Bstf6tvmQoNuw9%2BJHRTy79%2BFz08IXgSO2%2Feh8pjNpBAhZw24J5qzxUEJWzb%2F3xJSBhstPuKr5IBq514%2ByZr8TSpv3OiQEiJHOdBV1HOyFNedq8SrJzwUq1ktSTPT2rtNWsfKGm4gUmwIaadV4JhRCbliYifptjaM5KyKkIp%2FylBxQJunSSWjr1vNnKZBqiTOPSLYCgPaLJbiudN0UqhbcnroB1edmyQ35ZLdNH8FMY8SGDt4sT4TT9co9lkPt4WEw%2FxMSiRfCWWNLCc4cODk6ydsuw%2FrkK8Bdb4fScBUw%2FK9KTEzSTz45%2FcsOpCq7iwtR6pnt7nhfCR5SRJ3hIqwJQHSL%2FdkGdq3scAZ3pNtalRocbE9dutfre4AdRxur54iVb8IMEYwoLzhkgau5bo4HkvEL2irPRXjGq3m%2B0YlPsdg3yRMNf258AGOqUB7YO6Es%2Fa1U1Zy7PtQ4FVlrpkJVlPBw9KCq5qqEyFrhjZrcN%2FjkgFovK9%2BFjuab6DTcGLSwCw90BL%2BFgqW7mLXhFhMHazCcLoZWSZes4dtpsIAQRtqwcy1TyHWUkn8e72x%2F%2FXOdjvGBQzMF3IplubZ4GSKjv3robidK3Du0X314XWpNbqZU9QVT%2FUw%2FHiPs90%2FZ%2F9s8Ly9ehwJEnhzq9NVp%2BwHjXK&X-Amz-Signature=dc122e58d60d54d566f70b0263ef363263372ed9778b2d31a495002fbd7547d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
