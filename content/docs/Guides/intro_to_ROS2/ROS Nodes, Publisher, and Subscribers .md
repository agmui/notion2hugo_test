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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBY24ND%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs753svqTBBeC2H7DFi%2FNc35DxXjU56gUPR64UsGcL%2BgIhAKCyER6jeOrsY3o6KadoJjTxGdvEg3HVKdIph5y1z9uCKv8DCCoQABoMNjM3NDIzMTgzODA1Igzz0TvaOvMsUkbdRPsq3AOKVzmKw6SUF%2F7iu2VkFH3QIzhAl7s%2FdWfEQruQ7pMPgbiBPdGBOOqcQEZR%2Blu8hjheYyxpfjyOEr%2FGNNM5Jeq7XMCsKxiK%2By32465OycmLDPupa5xt3TpoSqjIbJtXlSxRI2C1uUOnt%2FPtN6HejPp9mqVoCMclRHVK06Jc2gBBR2WfJdO4iGOsIbyef9mLqoskeRC9uSUTt7EG2ccyJVaoVT8hhConaK61rO8YLCgWUevZ8XQDBPu6qIJ0VtsxNdMf9%2B6T%2B1owuWEnB%2BJyMsbaS3U7I1bbIqiqQC7OmuRt9%2BlWcvIYXSEMQbG9klxwqOYx8ONEUiOT0xhBT5dBc57UuzqlPG%2FX%2Fr8ZFNMpl5Rzz1alvoyOqauTyhrkjivPLw0qmwmIXD4OSEw6sUe2hujAd2%2B6jdFFLPtvIn%2B7nl%2BCtz2V5d4z2Z%2Fu7vE7DjmIWR2AT%2BjPoj5jpXAqGqKACSDZQXH52FMoMZ3A4dTfaDxOaE0hFEINNpMdE2VFWt9iBMyBzcoXF6lXOwOMdg99rXgcEquhpfEq%2BBGbIBPDdsT3aBULqSMFDs43qD4H9pGVw4pvfe9iJbx9wlOSiMw5NnEYVYBMkS7lk7cJ6VqKsQykyGpDJ1sWZeMyzaGc7zD35MO%2FBjqkATiF8%2FARm%2F4o7aEVxJLyJjlN2xTdIogiOLYb2K12fsXuoUtz5G%2BjsNdIP279b8BRbu%2Bzc5G3zRI2r19ak5MH3Vf40fFnC0QeluHtAVVZP3VuD3LrXdCdPceH4wdd78DCE8t8tpfPXXGLi11oDED5je31R13nmKtY2E1vJ7%2Bx2GuSeOnOO8FprZLyg67tmrPJNAtu7c8p%2FwJPlpWMunaQHeSpGqPt&X-Amz-Signature=b13d2143d026310096b29517b8e62c5f505b1f401412d73188b48c111cb02bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBY24ND%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs753svqTBBeC2H7DFi%2FNc35DxXjU56gUPR64UsGcL%2BgIhAKCyER6jeOrsY3o6KadoJjTxGdvEg3HVKdIph5y1z9uCKv8DCCoQABoMNjM3NDIzMTgzODA1Igzz0TvaOvMsUkbdRPsq3AOKVzmKw6SUF%2F7iu2VkFH3QIzhAl7s%2FdWfEQruQ7pMPgbiBPdGBOOqcQEZR%2Blu8hjheYyxpfjyOEr%2FGNNM5Jeq7XMCsKxiK%2By32465OycmLDPupa5xt3TpoSqjIbJtXlSxRI2C1uUOnt%2FPtN6HejPp9mqVoCMclRHVK06Jc2gBBR2WfJdO4iGOsIbyef9mLqoskeRC9uSUTt7EG2ccyJVaoVT8hhConaK61rO8YLCgWUevZ8XQDBPu6qIJ0VtsxNdMf9%2B6T%2B1owuWEnB%2BJyMsbaS3U7I1bbIqiqQC7OmuRt9%2BlWcvIYXSEMQbG9klxwqOYx8ONEUiOT0xhBT5dBc57UuzqlPG%2FX%2Fr8ZFNMpl5Rzz1alvoyOqauTyhrkjivPLw0qmwmIXD4OSEw6sUe2hujAd2%2B6jdFFLPtvIn%2B7nl%2BCtz2V5d4z2Z%2Fu7vE7DjmIWR2AT%2BjPoj5jpXAqGqKACSDZQXH52FMoMZ3A4dTfaDxOaE0hFEINNpMdE2VFWt9iBMyBzcoXF6lXOwOMdg99rXgcEquhpfEq%2BBGbIBPDdsT3aBULqSMFDs43qD4H9pGVw4pvfe9iJbx9wlOSiMw5NnEYVYBMkS7lk7cJ6VqKsQykyGpDJ1sWZeMyzaGc7zD35MO%2FBjqkATiF8%2FARm%2F4o7aEVxJLyJjlN2xTdIogiOLYb2K12fsXuoUtz5G%2BjsNdIP279b8BRbu%2Bzc5G3zRI2r19ak5MH3Vf40fFnC0QeluHtAVVZP3VuD3LrXdCdPceH4wdd78DCE8t8tpfPXXGLi11oDED5je31R13nmKtY2E1vJ7%2Bx2GuSeOnOO8FprZLyg67tmrPJNAtu7c8p%2FwJPlpWMunaQHeSpGqPt&X-Amz-Signature=685b822b32ab4b2955118adb20902d94594282062eee78ca0bc1b30114256f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBY24ND%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs753svqTBBeC2H7DFi%2FNc35DxXjU56gUPR64UsGcL%2BgIhAKCyER6jeOrsY3o6KadoJjTxGdvEg3HVKdIph5y1z9uCKv8DCCoQABoMNjM3NDIzMTgzODA1Igzz0TvaOvMsUkbdRPsq3AOKVzmKw6SUF%2F7iu2VkFH3QIzhAl7s%2FdWfEQruQ7pMPgbiBPdGBOOqcQEZR%2Blu8hjheYyxpfjyOEr%2FGNNM5Jeq7XMCsKxiK%2By32465OycmLDPupa5xt3TpoSqjIbJtXlSxRI2C1uUOnt%2FPtN6HejPp9mqVoCMclRHVK06Jc2gBBR2WfJdO4iGOsIbyef9mLqoskeRC9uSUTt7EG2ccyJVaoVT8hhConaK61rO8YLCgWUevZ8XQDBPu6qIJ0VtsxNdMf9%2B6T%2B1owuWEnB%2BJyMsbaS3U7I1bbIqiqQC7OmuRt9%2BlWcvIYXSEMQbG9klxwqOYx8ONEUiOT0xhBT5dBc57UuzqlPG%2FX%2Fr8ZFNMpl5Rzz1alvoyOqauTyhrkjivPLw0qmwmIXD4OSEw6sUe2hujAd2%2B6jdFFLPtvIn%2B7nl%2BCtz2V5d4z2Z%2Fu7vE7DjmIWR2AT%2BjPoj5jpXAqGqKACSDZQXH52FMoMZ3A4dTfaDxOaE0hFEINNpMdE2VFWt9iBMyBzcoXF6lXOwOMdg99rXgcEquhpfEq%2BBGbIBPDdsT3aBULqSMFDs43qD4H9pGVw4pvfe9iJbx9wlOSiMw5NnEYVYBMkS7lk7cJ6VqKsQykyGpDJ1sWZeMyzaGc7zD35MO%2FBjqkATiF8%2FARm%2F4o7aEVxJLyJjlN2xTdIogiOLYb2K12fsXuoUtz5G%2BjsNdIP279b8BRbu%2Bzc5G3zRI2r19ak5MH3Vf40fFnC0QeluHtAVVZP3VuD3LrXdCdPceH4wdd78DCE8t8tpfPXXGLi11oDED5je31R13nmKtY2E1vJ7%2Bx2GuSeOnOO8FprZLyg67tmrPJNAtu7c8p%2FwJPlpWMunaQHeSpGqPt&X-Amz-Signature=52024c0c70ee409268944477700d389acc5118ec8e53bacff219146dcbf89b21&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBY24ND%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs753svqTBBeC2H7DFi%2FNc35DxXjU56gUPR64UsGcL%2BgIhAKCyER6jeOrsY3o6KadoJjTxGdvEg3HVKdIph5y1z9uCKv8DCCoQABoMNjM3NDIzMTgzODA1Igzz0TvaOvMsUkbdRPsq3AOKVzmKw6SUF%2F7iu2VkFH3QIzhAl7s%2FdWfEQruQ7pMPgbiBPdGBOOqcQEZR%2Blu8hjheYyxpfjyOEr%2FGNNM5Jeq7XMCsKxiK%2By32465OycmLDPupa5xt3TpoSqjIbJtXlSxRI2C1uUOnt%2FPtN6HejPp9mqVoCMclRHVK06Jc2gBBR2WfJdO4iGOsIbyef9mLqoskeRC9uSUTt7EG2ccyJVaoVT8hhConaK61rO8YLCgWUevZ8XQDBPu6qIJ0VtsxNdMf9%2B6T%2B1owuWEnB%2BJyMsbaS3U7I1bbIqiqQC7OmuRt9%2BlWcvIYXSEMQbG9klxwqOYx8ONEUiOT0xhBT5dBc57UuzqlPG%2FX%2Fr8ZFNMpl5Rzz1alvoyOqauTyhrkjivPLw0qmwmIXD4OSEw6sUe2hujAd2%2B6jdFFLPtvIn%2B7nl%2BCtz2V5d4z2Z%2Fu7vE7DjmIWR2AT%2BjPoj5jpXAqGqKACSDZQXH52FMoMZ3A4dTfaDxOaE0hFEINNpMdE2VFWt9iBMyBzcoXF6lXOwOMdg99rXgcEquhpfEq%2BBGbIBPDdsT3aBULqSMFDs43qD4H9pGVw4pvfe9iJbx9wlOSiMw5NnEYVYBMkS7lk7cJ6VqKsQykyGpDJ1sWZeMyzaGc7zD35MO%2FBjqkATiF8%2FARm%2F4o7aEVxJLyJjlN2xTdIogiOLYb2K12fsXuoUtz5G%2BjsNdIP279b8BRbu%2Bzc5G3zRI2r19ak5MH3Vf40fFnC0QeluHtAVVZP3VuD3LrXdCdPceH4wdd78DCE8t8tpfPXXGLi11oDED5je31R13nmKtY2E1vJ7%2Bx2GuSeOnOO8FprZLyg67tmrPJNAtu7c8p%2FwJPlpWMunaQHeSpGqPt&X-Amz-Signature=b33255a1cafc27189a6c3b3a1d6ca54ce5d0f9d7943100225690156f3d5f60d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBY24ND%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs753svqTBBeC2H7DFi%2FNc35DxXjU56gUPR64UsGcL%2BgIhAKCyER6jeOrsY3o6KadoJjTxGdvEg3HVKdIph5y1z9uCKv8DCCoQABoMNjM3NDIzMTgzODA1Igzz0TvaOvMsUkbdRPsq3AOKVzmKw6SUF%2F7iu2VkFH3QIzhAl7s%2FdWfEQruQ7pMPgbiBPdGBOOqcQEZR%2Blu8hjheYyxpfjyOEr%2FGNNM5Jeq7XMCsKxiK%2By32465OycmLDPupa5xt3TpoSqjIbJtXlSxRI2C1uUOnt%2FPtN6HejPp9mqVoCMclRHVK06Jc2gBBR2WfJdO4iGOsIbyef9mLqoskeRC9uSUTt7EG2ccyJVaoVT8hhConaK61rO8YLCgWUevZ8XQDBPu6qIJ0VtsxNdMf9%2B6T%2B1owuWEnB%2BJyMsbaS3U7I1bbIqiqQC7OmuRt9%2BlWcvIYXSEMQbG9klxwqOYx8ONEUiOT0xhBT5dBc57UuzqlPG%2FX%2Fr8ZFNMpl5Rzz1alvoyOqauTyhrkjivPLw0qmwmIXD4OSEw6sUe2hujAd2%2B6jdFFLPtvIn%2B7nl%2BCtz2V5d4z2Z%2Fu7vE7DjmIWR2AT%2BjPoj5jpXAqGqKACSDZQXH52FMoMZ3A4dTfaDxOaE0hFEINNpMdE2VFWt9iBMyBzcoXF6lXOwOMdg99rXgcEquhpfEq%2BBGbIBPDdsT3aBULqSMFDs43qD4H9pGVw4pvfe9iJbx9wlOSiMw5NnEYVYBMkS7lk7cJ6VqKsQykyGpDJ1sWZeMyzaGc7zD35MO%2FBjqkATiF8%2FARm%2F4o7aEVxJLyJjlN2xTdIogiOLYb2K12fsXuoUtz5G%2BjsNdIP279b8BRbu%2Bzc5G3zRI2r19ak5MH3Vf40fFnC0QeluHtAVVZP3VuD3LrXdCdPceH4wdd78DCE8t8tpfPXXGLi11oDED5je31R13nmKtY2E1vJ7%2Bx2GuSeOnOO8FprZLyg67tmrPJNAtu7c8p%2FwJPlpWMunaQHeSpGqPt&X-Amz-Signature=9a3d1a3bc48ee0aae05bf0d10fc782b76c4f8d87ad8fc027a31802290535647a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBY24ND%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs753svqTBBeC2H7DFi%2FNc35DxXjU56gUPR64UsGcL%2BgIhAKCyER6jeOrsY3o6KadoJjTxGdvEg3HVKdIph5y1z9uCKv8DCCoQABoMNjM3NDIzMTgzODA1Igzz0TvaOvMsUkbdRPsq3AOKVzmKw6SUF%2F7iu2VkFH3QIzhAl7s%2FdWfEQruQ7pMPgbiBPdGBOOqcQEZR%2Blu8hjheYyxpfjyOEr%2FGNNM5Jeq7XMCsKxiK%2By32465OycmLDPupa5xt3TpoSqjIbJtXlSxRI2C1uUOnt%2FPtN6HejPp9mqVoCMclRHVK06Jc2gBBR2WfJdO4iGOsIbyef9mLqoskeRC9uSUTt7EG2ccyJVaoVT8hhConaK61rO8YLCgWUevZ8XQDBPu6qIJ0VtsxNdMf9%2B6T%2B1owuWEnB%2BJyMsbaS3U7I1bbIqiqQC7OmuRt9%2BlWcvIYXSEMQbG9klxwqOYx8ONEUiOT0xhBT5dBc57UuzqlPG%2FX%2Fr8ZFNMpl5Rzz1alvoyOqauTyhrkjivPLw0qmwmIXD4OSEw6sUe2hujAd2%2B6jdFFLPtvIn%2B7nl%2BCtz2V5d4z2Z%2Fu7vE7DjmIWR2AT%2BjPoj5jpXAqGqKACSDZQXH52FMoMZ3A4dTfaDxOaE0hFEINNpMdE2VFWt9iBMyBzcoXF6lXOwOMdg99rXgcEquhpfEq%2BBGbIBPDdsT3aBULqSMFDs43qD4H9pGVw4pvfe9iJbx9wlOSiMw5NnEYVYBMkS7lk7cJ6VqKsQykyGpDJ1sWZeMyzaGc7zD35MO%2FBjqkATiF8%2FARm%2F4o7aEVxJLyJjlN2xTdIogiOLYb2K12fsXuoUtz5G%2BjsNdIP279b8BRbu%2Bzc5G3zRI2r19ak5MH3Vf40fFnC0QeluHtAVVZP3VuD3LrXdCdPceH4wdd78DCE8t8tpfPXXGLi11oDED5je31R13nmKtY2E1vJ7%2Bx2GuSeOnOO8FprZLyg67tmrPJNAtu7c8p%2FwJPlpWMunaQHeSpGqPt&X-Amz-Signature=202eb5c09ee791902cdd19a15baf60ae9c9e4c792f8d15f7e657496ad94905b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBY24ND%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs753svqTBBeC2H7DFi%2FNc35DxXjU56gUPR64UsGcL%2BgIhAKCyER6jeOrsY3o6KadoJjTxGdvEg3HVKdIph5y1z9uCKv8DCCoQABoMNjM3NDIzMTgzODA1Igzz0TvaOvMsUkbdRPsq3AOKVzmKw6SUF%2F7iu2VkFH3QIzhAl7s%2FdWfEQruQ7pMPgbiBPdGBOOqcQEZR%2Blu8hjheYyxpfjyOEr%2FGNNM5Jeq7XMCsKxiK%2By32465OycmLDPupa5xt3TpoSqjIbJtXlSxRI2C1uUOnt%2FPtN6HejPp9mqVoCMclRHVK06Jc2gBBR2WfJdO4iGOsIbyef9mLqoskeRC9uSUTt7EG2ccyJVaoVT8hhConaK61rO8YLCgWUevZ8XQDBPu6qIJ0VtsxNdMf9%2B6T%2B1owuWEnB%2BJyMsbaS3U7I1bbIqiqQC7OmuRt9%2BlWcvIYXSEMQbG9klxwqOYx8ONEUiOT0xhBT5dBc57UuzqlPG%2FX%2Fr8ZFNMpl5Rzz1alvoyOqauTyhrkjivPLw0qmwmIXD4OSEw6sUe2hujAd2%2B6jdFFLPtvIn%2B7nl%2BCtz2V5d4z2Z%2Fu7vE7DjmIWR2AT%2BjPoj5jpXAqGqKACSDZQXH52FMoMZ3A4dTfaDxOaE0hFEINNpMdE2VFWt9iBMyBzcoXF6lXOwOMdg99rXgcEquhpfEq%2BBGbIBPDdsT3aBULqSMFDs43qD4H9pGVw4pvfe9iJbx9wlOSiMw5NnEYVYBMkS7lk7cJ6VqKsQykyGpDJ1sWZeMyzaGc7zD35MO%2FBjqkATiF8%2FARm%2F4o7aEVxJLyJjlN2xTdIogiOLYb2K12fsXuoUtz5G%2BjsNdIP279b8BRbu%2Bzc5G3zRI2r19ak5MH3Vf40fFnC0QeluHtAVVZP3VuD3LrXdCdPceH4wdd78DCE8t8tpfPXXGLi11oDED5je31R13nmKtY2E1vJ7%2Bx2GuSeOnOO8FprZLyg67tmrPJNAtu7c8p%2FwJPlpWMunaQHeSpGqPt&X-Amz-Signature=2c10b7974ad6d992c686296b9fe8a0f8d0544142e136852489522585193aa3e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBY24ND%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs753svqTBBeC2H7DFi%2FNc35DxXjU56gUPR64UsGcL%2BgIhAKCyER6jeOrsY3o6KadoJjTxGdvEg3HVKdIph5y1z9uCKv8DCCoQABoMNjM3NDIzMTgzODA1Igzz0TvaOvMsUkbdRPsq3AOKVzmKw6SUF%2F7iu2VkFH3QIzhAl7s%2FdWfEQruQ7pMPgbiBPdGBOOqcQEZR%2Blu8hjheYyxpfjyOEr%2FGNNM5Jeq7XMCsKxiK%2By32465OycmLDPupa5xt3TpoSqjIbJtXlSxRI2C1uUOnt%2FPtN6HejPp9mqVoCMclRHVK06Jc2gBBR2WfJdO4iGOsIbyef9mLqoskeRC9uSUTt7EG2ccyJVaoVT8hhConaK61rO8YLCgWUevZ8XQDBPu6qIJ0VtsxNdMf9%2B6T%2B1owuWEnB%2BJyMsbaS3U7I1bbIqiqQC7OmuRt9%2BlWcvIYXSEMQbG9klxwqOYx8ONEUiOT0xhBT5dBc57UuzqlPG%2FX%2Fr8ZFNMpl5Rzz1alvoyOqauTyhrkjivPLw0qmwmIXD4OSEw6sUe2hujAd2%2B6jdFFLPtvIn%2B7nl%2BCtz2V5d4z2Z%2Fu7vE7DjmIWR2AT%2BjPoj5jpXAqGqKACSDZQXH52FMoMZ3A4dTfaDxOaE0hFEINNpMdE2VFWt9iBMyBzcoXF6lXOwOMdg99rXgcEquhpfEq%2BBGbIBPDdsT3aBULqSMFDs43qD4H9pGVw4pvfe9iJbx9wlOSiMw5NnEYVYBMkS7lk7cJ6VqKsQykyGpDJ1sWZeMyzaGc7zD35MO%2FBjqkATiF8%2FARm%2F4o7aEVxJLyJjlN2xTdIogiOLYb2K12fsXuoUtz5G%2BjsNdIP279b8BRbu%2Bzc5G3zRI2r19ak5MH3Vf40fFnC0QeluHtAVVZP3VuD3LrXdCdPceH4wdd78DCE8t8tpfPXXGLi11oDED5je31R13nmKtY2E1vJ7%2Bx2GuSeOnOO8FprZLyg67tmrPJNAtu7c8p%2FwJPlpWMunaQHeSpGqPt&X-Amz-Signature=ea209e4851656ee0aeb614b4717073e02bb575d8438c86f4442047ba10a741a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
