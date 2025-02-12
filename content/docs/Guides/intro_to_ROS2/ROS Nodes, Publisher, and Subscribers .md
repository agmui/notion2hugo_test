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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R333VNFK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPip8%2F9WpcZ%2BAsKE5M9vxrp6hx1LuGfEGGchPMU%2FiOQAiEAoIUyfvX5DRO%2FQbc5hNzQlGSX7%2BgtwWvmoFWPIYpVrrYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONTpMK%2BDAi3hGL5hSrcA2QIZU6JNAikKMRLv2Vhw0UOgfa%2F3BTkxDHwCzdCP2r2UbcuCNkxCTQquuhwfS6UhIiEzgA%2FrO0UgixMPY%2BYsVSGYR34vHIP13lycTfmJUFfdt5MD26lzm9DdkqXf8RrGvaIgxcq9lquwyzzoXRxeoPl9fyu0BVYBNTGkph9%2Bl5aNhWehOz20c9lSjxbkGZ7YB9x8D9NTXfDS3lOWwA5dCTiHQDoe5OXpyRhReYoG62z8OaUwVKGQT63QbUec8cQe4EErd3Sg2JgEIEgdVc0Sn31uDCsH3XJTm9fvcHwEFVPuVRGia6wPE1E7Bw8ooYG03Ckf7lSqgxEwSwVsTTl%2FX6I7nRjjspIHgHuCx%2FAYm6hdXfloh2d3VwKlxRdLHZNyCs437Zkd04TtKbsPlkl7LTTGOQ26Zd6kdzSjkMFHjuTN%2Bj0Je%2FyiBQBvmXAab%2B%2BHCBnKkivJJ8Opa3m9J9Ismq5buEWwVXLnFCH48fENQxePIethLDj2TZvXHkYx2D5daEs3DoBR1eULSu046WwE9RpNbskqkevviG9lVMe3mqRrPNFaE%2FlXKaHFnPLEQzvwuUXZVgiZVh6%2BkDyIK14MfFQ3kQT%2BJ3acToTMb7GirsyWXiuTTzkV9vtYC%2F4MMfur70GOqUB%2BBd1hH4bB8s3FBouTR5mngPLebsV7RJU8EbPca4JvAfdEi5pt5J3PTeMgy4jjeuonf1hyarsDSlToADPI8fphcO7n8JFZPMyLXy1bvgaNDiEzGVz%2BxX%2FX8nvcoKscGbREt%2BwHisk4gY2XbMGdjmuWKx32Q7vx%2BL%2FdmbUPL%2B5rnXRSIsZw9DraqE9hh7R3rl0ls0OqjNqRQegoRBnQX1Ya%2BaToh7g&X-Amz-Signature=7a2526ba38334fe6fd94f9ae2b8674e9ade7bb56d6b2fe745bda8b4d0a9901e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R333VNFK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPip8%2F9WpcZ%2BAsKE5M9vxrp6hx1LuGfEGGchPMU%2FiOQAiEAoIUyfvX5DRO%2FQbc5hNzQlGSX7%2BgtwWvmoFWPIYpVrrYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONTpMK%2BDAi3hGL5hSrcA2QIZU6JNAikKMRLv2Vhw0UOgfa%2F3BTkxDHwCzdCP2r2UbcuCNkxCTQquuhwfS6UhIiEzgA%2FrO0UgixMPY%2BYsVSGYR34vHIP13lycTfmJUFfdt5MD26lzm9DdkqXf8RrGvaIgxcq9lquwyzzoXRxeoPl9fyu0BVYBNTGkph9%2Bl5aNhWehOz20c9lSjxbkGZ7YB9x8D9NTXfDS3lOWwA5dCTiHQDoe5OXpyRhReYoG62z8OaUwVKGQT63QbUec8cQe4EErd3Sg2JgEIEgdVc0Sn31uDCsH3XJTm9fvcHwEFVPuVRGia6wPE1E7Bw8ooYG03Ckf7lSqgxEwSwVsTTl%2FX6I7nRjjspIHgHuCx%2FAYm6hdXfloh2d3VwKlxRdLHZNyCs437Zkd04TtKbsPlkl7LTTGOQ26Zd6kdzSjkMFHjuTN%2Bj0Je%2FyiBQBvmXAab%2B%2BHCBnKkivJJ8Opa3m9J9Ismq5buEWwVXLnFCH48fENQxePIethLDj2TZvXHkYx2D5daEs3DoBR1eULSu046WwE9RpNbskqkevviG9lVMe3mqRrPNFaE%2FlXKaHFnPLEQzvwuUXZVgiZVh6%2BkDyIK14MfFQ3kQT%2BJ3acToTMb7GirsyWXiuTTzkV9vtYC%2F4MMfur70GOqUB%2BBd1hH4bB8s3FBouTR5mngPLebsV7RJU8EbPca4JvAfdEi5pt5J3PTeMgy4jjeuonf1hyarsDSlToADPI8fphcO7n8JFZPMyLXy1bvgaNDiEzGVz%2BxX%2FX8nvcoKscGbREt%2BwHisk4gY2XbMGdjmuWKx32Q7vx%2BL%2FdmbUPL%2B5rnXRSIsZw9DraqE9hh7R3rl0ls0OqjNqRQegoRBnQX1Ya%2BaToh7g&X-Amz-Signature=db65211a2436c9fdd770a3027fcd687b06c041d9117a2bb21b1891dc57078dac&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R333VNFK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPip8%2F9WpcZ%2BAsKE5M9vxrp6hx1LuGfEGGchPMU%2FiOQAiEAoIUyfvX5DRO%2FQbc5hNzQlGSX7%2BgtwWvmoFWPIYpVrrYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONTpMK%2BDAi3hGL5hSrcA2QIZU6JNAikKMRLv2Vhw0UOgfa%2F3BTkxDHwCzdCP2r2UbcuCNkxCTQquuhwfS6UhIiEzgA%2FrO0UgixMPY%2BYsVSGYR34vHIP13lycTfmJUFfdt5MD26lzm9DdkqXf8RrGvaIgxcq9lquwyzzoXRxeoPl9fyu0BVYBNTGkph9%2Bl5aNhWehOz20c9lSjxbkGZ7YB9x8D9NTXfDS3lOWwA5dCTiHQDoe5OXpyRhReYoG62z8OaUwVKGQT63QbUec8cQe4EErd3Sg2JgEIEgdVc0Sn31uDCsH3XJTm9fvcHwEFVPuVRGia6wPE1E7Bw8ooYG03Ckf7lSqgxEwSwVsTTl%2FX6I7nRjjspIHgHuCx%2FAYm6hdXfloh2d3VwKlxRdLHZNyCs437Zkd04TtKbsPlkl7LTTGOQ26Zd6kdzSjkMFHjuTN%2Bj0Je%2FyiBQBvmXAab%2B%2BHCBnKkivJJ8Opa3m9J9Ismq5buEWwVXLnFCH48fENQxePIethLDj2TZvXHkYx2D5daEs3DoBR1eULSu046WwE9RpNbskqkevviG9lVMe3mqRrPNFaE%2FlXKaHFnPLEQzvwuUXZVgiZVh6%2BkDyIK14MfFQ3kQT%2BJ3acToTMb7GirsyWXiuTTzkV9vtYC%2F4MMfur70GOqUB%2BBd1hH4bB8s3FBouTR5mngPLebsV7RJU8EbPca4JvAfdEi5pt5J3PTeMgy4jjeuonf1hyarsDSlToADPI8fphcO7n8JFZPMyLXy1bvgaNDiEzGVz%2BxX%2FX8nvcoKscGbREt%2BwHisk4gY2XbMGdjmuWKx32Q7vx%2BL%2FdmbUPL%2B5rnXRSIsZw9DraqE9hh7R3rl0ls0OqjNqRQegoRBnQX1Ya%2BaToh7g&X-Amz-Signature=97537a95ce619d8a931158c89cc3df33cdd40c395811ab793fd97a21b401b601&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R333VNFK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPip8%2F9WpcZ%2BAsKE5M9vxrp6hx1LuGfEGGchPMU%2FiOQAiEAoIUyfvX5DRO%2FQbc5hNzQlGSX7%2BgtwWvmoFWPIYpVrrYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONTpMK%2BDAi3hGL5hSrcA2QIZU6JNAikKMRLv2Vhw0UOgfa%2F3BTkxDHwCzdCP2r2UbcuCNkxCTQquuhwfS6UhIiEzgA%2FrO0UgixMPY%2BYsVSGYR34vHIP13lycTfmJUFfdt5MD26lzm9DdkqXf8RrGvaIgxcq9lquwyzzoXRxeoPl9fyu0BVYBNTGkph9%2Bl5aNhWehOz20c9lSjxbkGZ7YB9x8D9NTXfDS3lOWwA5dCTiHQDoe5OXpyRhReYoG62z8OaUwVKGQT63QbUec8cQe4EErd3Sg2JgEIEgdVc0Sn31uDCsH3XJTm9fvcHwEFVPuVRGia6wPE1E7Bw8ooYG03Ckf7lSqgxEwSwVsTTl%2FX6I7nRjjspIHgHuCx%2FAYm6hdXfloh2d3VwKlxRdLHZNyCs437Zkd04TtKbsPlkl7LTTGOQ26Zd6kdzSjkMFHjuTN%2Bj0Je%2FyiBQBvmXAab%2B%2BHCBnKkivJJ8Opa3m9J9Ismq5buEWwVXLnFCH48fENQxePIethLDj2TZvXHkYx2D5daEs3DoBR1eULSu046WwE9RpNbskqkevviG9lVMe3mqRrPNFaE%2FlXKaHFnPLEQzvwuUXZVgiZVh6%2BkDyIK14MfFQ3kQT%2BJ3acToTMb7GirsyWXiuTTzkV9vtYC%2F4MMfur70GOqUB%2BBd1hH4bB8s3FBouTR5mngPLebsV7RJU8EbPca4JvAfdEi5pt5J3PTeMgy4jjeuonf1hyarsDSlToADPI8fphcO7n8JFZPMyLXy1bvgaNDiEzGVz%2BxX%2FX8nvcoKscGbREt%2BwHisk4gY2XbMGdjmuWKx32Q7vx%2BL%2FdmbUPL%2B5rnXRSIsZw9DraqE9hh7R3rl0ls0OqjNqRQegoRBnQX1Ya%2BaToh7g&X-Amz-Signature=f69445daa883481631fe93baaa0b8397bab5c710e289248a4cc4b4847256404a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R333VNFK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPip8%2F9WpcZ%2BAsKE5M9vxrp6hx1LuGfEGGchPMU%2FiOQAiEAoIUyfvX5DRO%2FQbc5hNzQlGSX7%2BgtwWvmoFWPIYpVrrYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONTpMK%2BDAi3hGL5hSrcA2QIZU6JNAikKMRLv2Vhw0UOgfa%2F3BTkxDHwCzdCP2r2UbcuCNkxCTQquuhwfS6UhIiEzgA%2FrO0UgixMPY%2BYsVSGYR34vHIP13lycTfmJUFfdt5MD26lzm9DdkqXf8RrGvaIgxcq9lquwyzzoXRxeoPl9fyu0BVYBNTGkph9%2Bl5aNhWehOz20c9lSjxbkGZ7YB9x8D9NTXfDS3lOWwA5dCTiHQDoe5OXpyRhReYoG62z8OaUwVKGQT63QbUec8cQe4EErd3Sg2JgEIEgdVc0Sn31uDCsH3XJTm9fvcHwEFVPuVRGia6wPE1E7Bw8ooYG03Ckf7lSqgxEwSwVsTTl%2FX6I7nRjjspIHgHuCx%2FAYm6hdXfloh2d3VwKlxRdLHZNyCs437Zkd04TtKbsPlkl7LTTGOQ26Zd6kdzSjkMFHjuTN%2Bj0Je%2FyiBQBvmXAab%2B%2BHCBnKkivJJ8Opa3m9J9Ismq5buEWwVXLnFCH48fENQxePIethLDj2TZvXHkYx2D5daEs3DoBR1eULSu046WwE9RpNbskqkevviG9lVMe3mqRrPNFaE%2FlXKaHFnPLEQzvwuUXZVgiZVh6%2BkDyIK14MfFQ3kQT%2BJ3acToTMb7GirsyWXiuTTzkV9vtYC%2F4MMfur70GOqUB%2BBd1hH4bB8s3FBouTR5mngPLebsV7RJU8EbPca4JvAfdEi5pt5J3PTeMgy4jjeuonf1hyarsDSlToADPI8fphcO7n8JFZPMyLXy1bvgaNDiEzGVz%2BxX%2FX8nvcoKscGbREt%2BwHisk4gY2XbMGdjmuWKx32Q7vx%2BL%2FdmbUPL%2B5rnXRSIsZw9DraqE9hh7R3rl0ls0OqjNqRQegoRBnQX1Ya%2BaToh7g&X-Amz-Signature=ef7f7ec1712532ed5e5eff300dcbe2b3f7570fdddeb55699f3ca6a8ebe22f4cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R333VNFK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPip8%2F9WpcZ%2BAsKE5M9vxrp6hx1LuGfEGGchPMU%2FiOQAiEAoIUyfvX5DRO%2FQbc5hNzQlGSX7%2BgtwWvmoFWPIYpVrrYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONTpMK%2BDAi3hGL5hSrcA2QIZU6JNAikKMRLv2Vhw0UOgfa%2F3BTkxDHwCzdCP2r2UbcuCNkxCTQquuhwfS6UhIiEzgA%2FrO0UgixMPY%2BYsVSGYR34vHIP13lycTfmJUFfdt5MD26lzm9DdkqXf8RrGvaIgxcq9lquwyzzoXRxeoPl9fyu0BVYBNTGkph9%2Bl5aNhWehOz20c9lSjxbkGZ7YB9x8D9NTXfDS3lOWwA5dCTiHQDoe5OXpyRhReYoG62z8OaUwVKGQT63QbUec8cQe4EErd3Sg2JgEIEgdVc0Sn31uDCsH3XJTm9fvcHwEFVPuVRGia6wPE1E7Bw8ooYG03Ckf7lSqgxEwSwVsTTl%2FX6I7nRjjspIHgHuCx%2FAYm6hdXfloh2d3VwKlxRdLHZNyCs437Zkd04TtKbsPlkl7LTTGOQ26Zd6kdzSjkMFHjuTN%2Bj0Je%2FyiBQBvmXAab%2B%2BHCBnKkivJJ8Opa3m9J9Ismq5buEWwVXLnFCH48fENQxePIethLDj2TZvXHkYx2D5daEs3DoBR1eULSu046WwE9RpNbskqkevviG9lVMe3mqRrPNFaE%2FlXKaHFnPLEQzvwuUXZVgiZVh6%2BkDyIK14MfFQ3kQT%2BJ3acToTMb7GirsyWXiuTTzkV9vtYC%2F4MMfur70GOqUB%2BBd1hH4bB8s3FBouTR5mngPLebsV7RJU8EbPca4JvAfdEi5pt5J3PTeMgy4jjeuonf1hyarsDSlToADPI8fphcO7n8JFZPMyLXy1bvgaNDiEzGVz%2BxX%2FX8nvcoKscGbREt%2BwHisk4gY2XbMGdjmuWKx32Q7vx%2BL%2FdmbUPL%2B5rnXRSIsZw9DraqE9hh7R3rl0ls0OqjNqRQegoRBnQX1Ya%2BaToh7g&X-Amz-Signature=1f11efd8908a0f6e7daa694429724965e0761b9c1ad68e5771b4c04312b68964&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R333VNFK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPip8%2F9WpcZ%2BAsKE5M9vxrp6hx1LuGfEGGchPMU%2FiOQAiEAoIUyfvX5DRO%2FQbc5hNzQlGSX7%2BgtwWvmoFWPIYpVrrYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONTpMK%2BDAi3hGL5hSrcA2QIZU6JNAikKMRLv2Vhw0UOgfa%2F3BTkxDHwCzdCP2r2UbcuCNkxCTQquuhwfS6UhIiEzgA%2FrO0UgixMPY%2BYsVSGYR34vHIP13lycTfmJUFfdt5MD26lzm9DdkqXf8RrGvaIgxcq9lquwyzzoXRxeoPl9fyu0BVYBNTGkph9%2Bl5aNhWehOz20c9lSjxbkGZ7YB9x8D9NTXfDS3lOWwA5dCTiHQDoe5OXpyRhReYoG62z8OaUwVKGQT63QbUec8cQe4EErd3Sg2JgEIEgdVc0Sn31uDCsH3XJTm9fvcHwEFVPuVRGia6wPE1E7Bw8ooYG03Ckf7lSqgxEwSwVsTTl%2FX6I7nRjjspIHgHuCx%2FAYm6hdXfloh2d3VwKlxRdLHZNyCs437Zkd04TtKbsPlkl7LTTGOQ26Zd6kdzSjkMFHjuTN%2Bj0Je%2FyiBQBvmXAab%2B%2BHCBnKkivJJ8Opa3m9J9Ismq5buEWwVXLnFCH48fENQxePIethLDj2TZvXHkYx2D5daEs3DoBR1eULSu046WwE9RpNbskqkevviG9lVMe3mqRrPNFaE%2FlXKaHFnPLEQzvwuUXZVgiZVh6%2BkDyIK14MfFQ3kQT%2BJ3acToTMb7GirsyWXiuTTzkV9vtYC%2F4MMfur70GOqUB%2BBd1hH4bB8s3FBouTR5mngPLebsV7RJU8EbPca4JvAfdEi5pt5J3PTeMgy4jjeuonf1hyarsDSlToADPI8fphcO7n8JFZPMyLXy1bvgaNDiEzGVz%2BxX%2FX8nvcoKscGbREt%2BwHisk4gY2XbMGdjmuWKx32Q7vx%2BL%2FdmbUPL%2B5rnXRSIsZw9DraqE9hh7R3rl0ls0OqjNqRQegoRBnQX1Ya%2BaToh7g&X-Amz-Signature=6858c7b3e1540c0ab0fd005e603b05ccb6fa5f87270d8e640fc563ad7b9c0fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R333VNFK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPip8%2F9WpcZ%2BAsKE5M9vxrp6hx1LuGfEGGchPMU%2FiOQAiEAoIUyfvX5DRO%2FQbc5hNzQlGSX7%2BgtwWvmoFWPIYpVrrYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONTpMK%2BDAi3hGL5hSrcA2QIZU6JNAikKMRLv2Vhw0UOgfa%2F3BTkxDHwCzdCP2r2UbcuCNkxCTQquuhwfS6UhIiEzgA%2FrO0UgixMPY%2BYsVSGYR34vHIP13lycTfmJUFfdt5MD26lzm9DdkqXf8RrGvaIgxcq9lquwyzzoXRxeoPl9fyu0BVYBNTGkph9%2Bl5aNhWehOz20c9lSjxbkGZ7YB9x8D9NTXfDS3lOWwA5dCTiHQDoe5OXpyRhReYoG62z8OaUwVKGQT63QbUec8cQe4EErd3Sg2JgEIEgdVc0Sn31uDCsH3XJTm9fvcHwEFVPuVRGia6wPE1E7Bw8ooYG03Ckf7lSqgxEwSwVsTTl%2FX6I7nRjjspIHgHuCx%2FAYm6hdXfloh2d3VwKlxRdLHZNyCs437Zkd04TtKbsPlkl7LTTGOQ26Zd6kdzSjkMFHjuTN%2Bj0Je%2FyiBQBvmXAab%2B%2BHCBnKkivJJ8Opa3m9J9Ismq5buEWwVXLnFCH48fENQxePIethLDj2TZvXHkYx2D5daEs3DoBR1eULSu046WwE9RpNbskqkevviG9lVMe3mqRrPNFaE%2FlXKaHFnPLEQzvwuUXZVgiZVh6%2BkDyIK14MfFQ3kQT%2BJ3acToTMb7GirsyWXiuTTzkV9vtYC%2F4MMfur70GOqUB%2BBd1hH4bB8s3FBouTR5mngPLebsV7RJU8EbPca4JvAfdEi5pt5J3PTeMgy4jjeuonf1hyarsDSlToADPI8fphcO7n8JFZPMyLXy1bvgaNDiEzGVz%2BxX%2FX8nvcoKscGbREt%2BwHisk4gY2XbMGdjmuWKx32Q7vx%2BL%2FdmbUPL%2B5rnXRSIsZw9DraqE9hh7R3rl0ls0OqjNqRQegoRBnQX1Ya%2BaToh7g&X-Amz-Signature=fcd48dc889efd78276dc3f7b9fef880d6552fffd6c14c3a5bd1e8b1c159978c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
