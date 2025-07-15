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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZFW72L%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCgygQyd6dLc28ObyH82qWx2xATRA%2BHeh4U3d0F%2F%2B35bwIgSmtmkh3l8bKf1PExUZLHJwM7IZte77c2T0RvNR0oSskq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ7XPEqlVXbZLxPLaSrcA9AVwXUVDHfQY9S9KNSPazZMOqKbOHdgVRDw4gsaPJ8Cd1XhhorTXrM2r0fa53LXtn5JlhlvRK%2FgVkETRCGrS3lno3mSyaG0E2WVsE2SUlAxM2Rl1yQljpY23SGjK%2FzWeO99UHGFNB0SScs8E4otpMMmWvFpOysh00w%2BSUnInWpZYwLlJrfmJgS5uWvkF7%2Fk8gTQLxiP%2ByP0hBCtcFHrzHzeK6F0a6gH2rKwN%2BAFxPkJEz6VfG%2B4ghXLpisizHqtS3gEHy6jEy%2BzTpxzksZ6Zm0JhNZy8MuGC6%2BlQqdAG5b3Hm8EHVri5iPd03%2BZ3HZdLUcjqIKjr4%2BcFJ%2BLO5YkJ%2FHQPP3AoruS3UQoRi%2BcfAr1pAx7dBELDoTakcpAid%2FS5UdOR%2F%2Bs24JzdP%2FEeoFOUudYBKBz5DKfjPGgVMNf2Ci7b3LU0RQ0hHFexy1jefKG5ucxLjpaVivCXjOI%2B%2FZ6VHuPG4C9oBCq9UlI9VP9TtIbvx6z6W7GV%2F2Z5kUoYjGFWroubk4uTguJeSHJcSrxuE95dYcQC9zPYzkNL0g%2Frd7DqRltIDoJD5NACV%2BQLZNViXfXdMpvljevHWtG489H%2FHiWjn1hpyaP96knHSGiL6K6FXmgnWX4ASJQ24VKMJTa2MMGOqUBoEirgpDOLsAecOUrZHmz4oJ2kv1ZfK%2FyhxuVpSsOihwwIDCLolQr7CZLBLSrATbYWkQJnwd0NTRe2MFSTfquGOk4pDVRXPY2Zes7N2B6rFjZARqMAqZE6yqD8MKhc80%2BQisVeMTbFky78RzqoOaNt%2FsU8xxydKuYJQZ1Mq05%2BuQiqAd%2BkNP%2FbUeUZvdEXBaYCSI4zHPr4JaUkdI1nh7q4%2BlJK2y0&X-Amz-Signature=415cd9a95a3aa4ce76e97ef8bfc695af660f7442e5edc6fa343f765ff2421b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZFW72L%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCgygQyd6dLc28ObyH82qWx2xATRA%2BHeh4U3d0F%2F%2B35bwIgSmtmkh3l8bKf1PExUZLHJwM7IZte77c2T0RvNR0oSskq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ7XPEqlVXbZLxPLaSrcA9AVwXUVDHfQY9S9KNSPazZMOqKbOHdgVRDw4gsaPJ8Cd1XhhorTXrM2r0fa53LXtn5JlhlvRK%2FgVkETRCGrS3lno3mSyaG0E2WVsE2SUlAxM2Rl1yQljpY23SGjK%2FzWeO99UHGFNB0SScs8E4otpMMmWvFpOysh00w%2BSUnInWpZYwLlJrfmJgS5uWvkF7%2Fk8gTQLxiP%2ByP0hBCtcFHrzHzeK6F0a6gH2rKwN%2BAFxPkJEz6VfG%2B4ghXLpisizHqtS3gEHy6jEy%2BzTpxzksZ6Zm0JhNZy8MuGC6%2BlQqdAG5b3Hm8EHVri5iPd03%2BZ3HZdLUcjqIKjr4%2BcFJ%2BLO5YkJ%2FHQPP3AoruS3UQoRi%2BcfAr1pAx7dBELDoTakcpAid%2FS5UdOR%2F%2Bs24JzdP%2FEeoFOUudYBKBz5DKfjPGgVMNf2Ci7b3LU0RQ0hHFexy1jefKG5ucxLjpaVivCXjOI%2B%2FZ6VHuPG4C9oBCq9UlI9VP9TtIbvx6z6W7GV%2F2Z5kUoYjGFWroubk4uTguJeSHJcSrxuE95dYcQC9zPYzkNL0g%2Frd7DqRltIDoJD5NACV%2BQLZNViXfXdMpvljevHWtG489H%2FHiWjn1hpyaP96knHSGiL6K6FXmgnWX4ASJQ24VKMJTa2MMGOqUBoEirgpDOLsAecOUrZHmz4oJ2kv1ZfK%2FyhxuVpSsOihwwIDCLolQr7CZLBLSrATbYWkQJnwd0NTRe2MFSTfquGOk4pDVRXPY2Zes7N2B6rFjZARqMAqZE6yqD8MKhc80%2BQisVeMTbFky78RzqoOaNt%2FsU8xxydKuYJQZ1Mq05%2BuQiqAd%2BkNP%2FbUeUZvdEXBaYCSI4zHPr4JaUkdI1nh7q4%2BlJK2y0&X-Amz-Signature=5e09622d1ab2713757a98f42f4c190b0da04f1e4c78f2fc0045fd32c1bd4a29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZFW72L%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCgygQyd6dLc28ObyH82qWx2xATRA%2BHeh4U3d0F%2F%2B35bwIgSmtmkh3l8bKf1PExUZLHJwM7IZte77c2T0RvNR0oSskq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ7XPEqlVXbZLxPLaSrcA9AVwXUVDHfQY9S9KNSPazZMOqKbOHdgVRDw4gsaPJ8Cd1XhhorTXrM2r0fa53LXtn5JlhlvRK%2FgVkETRCGrS3lno3mSyaG0E2WVsE2SUlAxM2Rl1yQljpY23SGjK%2FzWeO99UHGFNB0SScs8E4otpMMmWvFpOysh00w%2BSUnInWpZYwLlJrfmJgS5uWvkF7%2Fk8gTQLxiP%2ByP0hBCtcFHrzHzeK6F0a6gH2rKwN%2BAFxPkJEz6VfG%2B4ghXLpisizHqtS3gEHy6jEy%2BzTpxzksZ6Zm0JhNZy8MuGC6%2BlQqdAG5b3Hm8EHVri5iPd03%2BZ3HZdLUcjqIKjr4%2BcFJ%2BLO5YkJ%2FHQPP3AoruS3UQoRi%2BcfAr1pAx7dBELDoTakcpAid%2FS5UdOR%2F%2Bs24JzdP%2FEeoFOUudYBKBz5DKfjPGgVMNf2Ci7b3LU0RQ0hHFexy1jefKG5ucxLjpaVivCXjOI%2B%2FZ6VHuPG4C9oBCq9UlI9VP9TtIbvx6z6W7GV%2F2Z5kUoYjGFWroubk4uTguJeSHJcSrxuE95dYcQC9zPYzkNL0g%2Frd7DqRltIDoJD5NACV%2BQLZNViXfXdMpvljevHWtG489H%2FHiWjn1hpyaP96knHSGiL6K6FXmgnWX4ASJQ24VKMJTa2MMGOqUBoEirgpDOLsAecOUrZHmz4oJ2kv1ZfK%2FyhxuVpSsOihwwIDCLolQr7CZLBLSrATbYWkQJnwd0NTRe2MFSTfquGOk4pDVRXPY2Zes7N2B6rFjZARqMAqZE6yqD8MKhc80%2BQisVeMTbFky78RzqoOaNt%2FsU8xxydKuYJQZ1Mq05%2BuQiqAd%2BkNP%2FbUeUZvdEXBaYCSI4zHPr4JaUkdI1nh7q4%2BlJK2y0&X-Amz-Signature=5aec824423f404d54d68ef15e61df4a2692993b657f8fb5f645e208382de0ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZFW72L%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCgygQyd6dLc28ObyH82qWx2xATRA%2BHeh4U3d0F%2F%2B35bwIgSmtmkh3l8bKf1PExUZLHJwM7IZte77c2T0RvNR0oSskq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ7XPEqlVXbZLxPLaSrcA9AVwXUVDHfQY9S9KNSPazZMOqKbOHdgVRDw4gsaPJ8Cd1XhhorTXrM2r0fa53LXtn5JlhlvRK%2FgVkETRCGrS3lno3mSyaG0E2WVsE2SUlAxM2Rl1yQljpY23SGjK%2FzWeO99UHGFNB0SScs8E4otpMMmWvFpOysh00w%2BSUnInWpZYwLlJrfmJgS5uWvkF7%2Fk8gTQLxiP%2ByP0hBCtcFHrzHzeK6F0a6gH2rKwN%2BAFxPkJEz6VfG%2B4ghXLpisizHqtS3gEHy6jEy%2BzTpxzksZ6Zm0JhNZy8MuGC6%2BlQqdAG5b3Hm8EHVri5iPd03%2BZ3HZdLUcjqIKjr4%2BcFJ%2BLO5YkJ%2FHQPP3AoruS3UQoRi%2BcfAr1pAx7dBELDoTakcpAid%2FS5UdOR%2F%2Bs24JzdP%2FEeoFOUudYBKBz5DKfjPGgVMNf2Ci7b3LU0RQ0hHFexy1jefKG5ucxLjpaVivCXjOI%2B%2FZ6VHuPG4C9oBCq9UlI9VP9TtIbvx6z6W7GV%2F2Z5kUoYjGFWroubk4uTguJeSHJcSrxuE95dYcQC9zPYzkNL0g%2Frd7DqRltIDoJD5NACV%2BQLZNViXfXdMpvljevHWtG489H%2FHiWjn1hpyaP96knHSGiL6K6FXmgnWX4ASJQ24VKMJTa2MMGOqUBoEirgpDOLsAecOUrZHmz4oJ2kv1ZfK%2FyhxuVpSsOihwwIDCLolQr7CZLBLSrATbYWkQJnwd0NTRe2MFSTfquGOk4pDVRXPY2Zes7N2B6rFjZARqMAqZE6yqD8MKhc80%2BQisVeMTbFky78RzqoOaNt%2FsU8xxydKuYJQZ1Mq05%2BuQiqAd%2BkNP%2FbUeUZvdEXBaYCSI4zHPr4JaUkdI1nh7q4%2BlJK2y0&X-Amz-Signature=71f3990221a66e3bd1e602b86d70ee9888427d510ddf7943de7baf4579c6caa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZFW72L%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCgygQyd6dLc28ObyH82qWx2xATRA%2BHeh4U3d0F%2F%2B35bwIgSmtmkh3l8bKf1PExUZLHJwM7IZte77c2T0RvNR0oSskq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ7XPEqlVXbZLxPLaSrcA9AVwXUVDHfQY9S9KNSPazZMOqKbOHdgVRDw4gsaPJ8Cd1XhhorTXrM2r0fa53LXtn5JlhlvRK%2FgVkETRCGrS3lno3mSyaG0E2WVsE2SUlAxM2Rl1yQljpY23SGjK%2FzWeO99UHGFNB0SScs8E4otpMMmWvFpOysh00w%2BSUnInWpZYwLlJrfmJgS5uWvkF7%2Fk8gTQLxiP%2ByP0hBCtcFHrzHzeK6F0a6gH2rKwN%2BAFxPkJEz6VfG%2B4ghXLpisizHqtS3gEHy6jEy%2BzTpxzksZ6Zm0JhNZy8MuGC6%2BlQqdAG5b3Hm8EHVri5iPd03%2BZ3HZdLUcjqIKjr4%2BcFJ%2BLO5YkJ%2FHQPP3AoruS3UQoRi%2BcfAr1pAx7dBELDoTakcpAid%2FS5UdOR%2F%2Bs24JzdP%2FEeoFOUudYBKBz5DKfjPGgVMNf2Ci7b3LU0RQ0hHFexy1jefKG5ucxLjpaVivCXjOI%2B%2FZ6VHuPG4C9oBCq9UlI9VP9TtIbvx6z6W7GV%2F2Z5kUoYjGFWroubk4uTguJeSHJcSrxuE95dYcQC9zPYzkNL0g%2Frd7DqRltIDoJD5NACV%2BQLZNViXfXdMpvljevHWtG489H%2FHiWjn1hpyaP96knHSGiL6K6FXmgnWX4ASJQ24VKMJTa2MMGOqUBoEirgpDOLsAecOUrZHmz4oJ2kv1ZfK%2FyhxuVpSsOihwwIDCLolQr7CZLBLSrATbYWkQJnwd0NTRe2MFSTfquGOk4pDVRXPY2Zes7N2B6rFjZARqMAqZE6yqD8MKhc80%2BQisVeMTbFky78RzqoOaNt%2FsU8xxydKuYJQZ1Mq05%2BuQiqAd%2BkNP%2FbUeUZvdEXBaYCSI4zHPr4JaUkdI1nh7q4%2BlJK2y0&X-Amz-Signature=9bce5c03ec72a972578070d5e176f92580952ee881af4d6f8ba7bc45b0226c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZFW72L%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCgygQyd6dLc28ObyH82qWx2xATRA%2BHeh4U3d0F%2F%2B35bwIgSmtmkh3l8bKf1PExUZLHJwM7IZte77c2T0RvNR0oSskq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ7XPEqlVXbZLxPLaSrcA9AVwXUVDHfQY9S9KNSPazZMOqKbOHdgVRDw4gsaPJ8Cd1XhhorTXrM2r0fa53LXtn5JlhlvRK%2FgVkETRCGrS3lno3mSyaG0E2WVsE2SUlAxM2Rl1yQljpY23SGjK%2FzWeO99UHGFNB0SScs8E4otpMMmWvFpOysh00w%2BSUnInWpZYwLlJrfmJgS5uWvkF7%2Fk8gTQLxiP%2ByP0hBCtcFHrzHzeK6F0a6gH2rKwN%2BAFxPkJEz6VfG%2B4ghXLpisizHqtS3gEHy6jEy%2BzTpxzksZ6Zm0JhNZy8MuGC6%2BlQqdAG5b3Hm8EHVri5iPd03%2BZ3HZdLUcjqIKjr4%2BcFJ%2BLO5YkJ%2FHQPP3AoruS3UQoRi%2BcfAr1pAx7dBELDoTakcpAid%2FS5UdOR%2F%2Bs24JzdP%2FEeoFOUudYBKBz5DKfjPGgVMNf2Ci7b3LU0RQ0hHFexy1jefKG5ucxLjpaVivCXjOI%2B%2FZ6VHuPG4C9oBCq9UlI9VP9TtIbvx6z6W7GV%2F2Z5kUoYjGFWroubk4uTguJeSHJcSrxuE95dYcQC9zPYzkNL0g%2Frd7DqRltIDoJD5NACV%2BQLZNViXfXdMpvljevHWtG489H%2FHiWjn1hpyaP96knHSGiL6K6FXmgnWX4ASJQ24VKMJTa2MMGOqUBoEirgpDOLsAecOUrZHmz4oJ2kv1ZfK%2FyhxuVpSsOihwwIDCLolQr7CZLBLSrATbYWkQJnwd0NTRe2MFSTfquGOk4pDVRXPY2Zes7N2B6rFjZARqMAqZE6yqD8MKhc80%2BQisVeMTbFky78RzqoOaNt%2FsU8xxydKuYJQZ1Mq05%2BuQiqAd%2BkNP%2FbUeUZvdEXBaYCSI4zHPr4JaUkdI1nh7q4%2BlJK2y0&X-Amz-Signature=b656519ec10ae3bab650fabba703972275ebc244af0c62eab21b62d4ee355de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZFW72L%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCgygQyd6dLc28ObyH82qWx2xATRA%2BHeh4U3d0F%2F%2B35bwIgSmtmkh3l8bKf1PExUZLHJwM7IZte77c2T0RvNR0oSskq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ7XPEqlVXbZLxPLaSrcA9AVwXUVDHfQY9S9KNSPazZMOqKbOHdgVRDw4gsaPJ8Cd1XhhorTXrM2r0fa53LXtn5JlhlvRK%2FgVkETRCGrS3lno3mSyaG0E2WVsE2SUlAxM2Rl1yQljpY23SGjK%2FzWeO99UHGFNB0SScs8E4otpMMmWvFpOysh00w%2BSUnInWpZYwLlJrfmJgS5uWvkF7%2Fk8gTQLxiP%2ByP0hBCtcFHrzHzeK6F0a6gH2rKwN%2BAFxPkJEz6VfG%2B4ghXLpisizHqtS3gEHy6jEy%2BzTpxzksZ6Zm0JhNZy8MuGC6%2BlQqdAG5b3Hm8EHVri5iPd03%2BZ3HZdLUcjqIKjr4%2BcFJ%2BLO5YkJ%2FHQPP3AoruS3UQoRi%2BcfAr1pAx7dBELDoTakcpAid%2FS5UdOR%2F%2Bs24JzdP%2FEeoFOUudYBKBz5DKfjPGgVMNf2Ci7b3LU0RQ0hHFexy1jefKG5ucxLjpaVivCXjOI%2B%2FZ6VHuPG4C9oBCq9UlI9VP9TtIbvx6z6W7GV%2F2Z5kUoYjGFWroubk4uTguJeSHJcSrxuE95dYcQC9zPYzkNL0g%2Frd7DqRltIDoJD5NACV%2BQLZNViXfXdMpvljevHWtG489H%2FHiWjn1hpyaP96knHSGiL6K6FXmgnWX4ASJQ24VKMJTa2MMGOqUBoEirgpDOLsAecOUrZHmz4oJ2kv1ZfK%2FyhxuVpSsOihwwIDCLolQr7CZLBLSrATbYWkQJnwd0NTRe2MFSTfquGOk4pDVRXPY2Zes7N2B6rFjZARqMAqZE6yqD8MKhc80%2BQisVeMTbFky78RzqoOaNt%2FsU8xxydKuYJQZ1Mq05%2BuQiqAd%2BkNP%2FbUeUZvdEXBaYCSI4zHPr4JaUkdI1nh7q4%2BlJK2y0&X-Amz-Signature=54292afbe260fa4ce9c9017df1d71abc26a58955e92bb7cc0ea8eddd349c0108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZFW72L%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCgygQyd6dLc28ObyH82qWx2xATRA%2BHeh4U3d0F%2F%2B35bwIgSmtmkh3l8bKf1PExUZLHJwM7IZte77c2T0RvNR0oSskq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJ7XPEqlVXbZLxPLaSrcA9AVwXUVDHfQY9S9KNSPazZMOqKbOHdgVRDw4gsaPJ8Cd1XhhorTXrM2r0fa53LXtn5JlhlvRK%2FgVkETRCGrS3lno3mSyaG0E2WVsE2SUlAxM2Rl1yQljpY23SGjK%2FzWeO99UHGFNB0SScs8E4otpMMmWvFpOysh00w%2BSUnInWpZYwLlJrfmJgS5uWvkF7%2Fk8gTQLxiP%2ByP0hBCtcFHrzHzeK6F0a6gH2rKwN%2BAFxPkJEz6VfG%2B4ghXLpisizHqtS3gEHy6jEy%2BzTpxzksZ6Zm0JhNZy8MuGC6%2BlQqdAG5b3Hm8EHVri5iPd03%2BZ3HZdLUcjqIKjr4%2BcFJ%2BLO5YkJ%2FHQPP3AoruS3UQoRi%2BcfAr1pAx7dBELDoTakcpAid%2FS5UdOR%2F%2Bs24JzdP%2FEeoFOUudYBKBz5DKfjPGgVMNf2Ci7b3LU0RQ0hHFexy1jefKG5ucxLjpaVivCXjOI%2B%2FZ6VHuPG4C9oBCq9UlI9VP9TtIbvx6z6W7GV%2F2Z5kUoYjGFWroubk4uTguJeSHJcSrxuE95dYcQC9zPYzkNL0g%2Frd7DqRltIDoJD5NACV%2BQLZNViXfXdMpvljevHWtG489H%2FHiWjn1hpyaP96knHSGiL6K6FXmgnWX4ASJQ24VKMJTa2MMGOqUBoEirgpDOLsAecOUrZHmz4oJ2kv1ZfK%2FyhxuVpSsOihwwIDCLolQr7CZLBLSrATbYWkQJnwd0NTRe2MFSTfquGOk4pDVRXPY2Zes7N2B6rFjZARqMAqZE6yqD8MKhc80%2BQisVeMTbFky78RzqoOaNt%2FsU8xxydKuYJQZ1Mq05%2BuQiqAd%2BkNP%2FbUeUZvdEXBaYCSI4zHPr4JaUkdI1nh7q4%2BlJK2y0&X-Amz-Signature=7a693b6efd435df7d355b3fbfccc4bfd4e346458dc6d91d0e9b2b98f8cb3561c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
