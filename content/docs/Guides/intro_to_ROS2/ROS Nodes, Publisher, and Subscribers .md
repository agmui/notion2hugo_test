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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P4FFW5V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUESsb7hUx1X%2BNHQoDD4eXB9dofOoHcehnZsI6kMN%2FZwIhAK9lkH2Xf%2FWEYZuYkpGzzms%2FnU7otLi4tA7S5SOdfFXyKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPt6fc1r4XHMyOSA8q3APMcSsTZjFI4wId2j5Lx8%2BEvRn5U0OIsje8NDVRKkNIRd%2F%2BuQpdkz9LYRjFA5GaNYcu0qKkuIrlrqAS6%2F%2FOBvnlXT30pkWVl6gjJ3Cf%2B3MTWvPYocKKueEV6AktXtsuLke9Z4p9GiHwXaGU5eFUG5U0nugj%2BK%2Fpq0mJ4rqOtRfat5KQeUgLqXdYX5p84422V%2FAhvka6vthNuNuORSCn3TDvt9zGKO3F5xYu0NRPA9A%2FGPxtwNDHqR40mJt1VLnUPXrG3dQ%2B%2BpJ%2F8JkdMIXbqVmGar7MNjiTxr%2BEgVxTohpbsC%2FOMsPx6kFIvBO%2FhmhAnuNWGzQBeQeYzNxSv32SRAp7emoWiuxXX%2F3dxEQrNZ7G4I8Dw1C9EiDBwvTBGLCMa5%2FDHUFacixUdRc%2BAypiKxNE%2FD4qKfyKlgOWSF0zQzN7yX%2FGAWnzmpJj0o5HEejHQX%2FumxlRmT8Lu2bVRbsvfUY%2F%2FrEGaiOF6eskueudWhVH3rModtSetA59NodnWeE7vlTZtcfk9fBeLbRZWp8LeGndo4%2BJy1ABjGWeCHbYZI4wT%2B%2FkJLzVR3KFkNlPa13p8KekgYmk05k5zM8Kl%2BkGCyhAAFIr9dMp7fh4t%2BEMroUA8a1gU8t6mNBCsiMBgDCwqOm9BjqkAZhRCm8DE9ZrZJTr8IJrekENr%2FxLOz4FwMzhbcwcLFTE%2F%2FqnhabDzjp4EVEJ5Q4GeJAamPLjQlr0rcWOStnCyTzu9Kbo0XM1R16dnCBw%2FYQxGVtvN9HzVLEdkYBvW%2FI14LG%2FscA6LtHF9wyOqLgotv%2F3bfpRuvY6AcPoPvF%2FJWn2Wkl8%2BJvvXshNZSZOsH6co64F74vW162KWI3fs24t4VzWgSMB&X-Amz-Signature=bf43c693632d287a87fdfd9432e5562447b69efbe34b33546290de58421d6003&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P4FFW5V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUESsb7hUx1X%2BNHQoDD4eXB9dofOoHcehnZsI6kMN%2FZwIhAK9lkH2Xf%2FWEYZuYkpGzzms%2FnU7otLi4tA7S5SOdfFXyKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPt6fc1r4XHMyOSA8q3APMcSsTZjFI4wId2j5Lx8%2BEvRn5U0OIsje8NDVRKkNIRd%2F%2BuQpdkz9LYRjFA5GaNYcu0qKkuIrlrqAS6%2F%2FOBvnlXT30pkWVl6gjJ3Cf%2B3MTWvPYocKKueEV6AktXtsuLke9Z4p9GiHwXaGU5eFUG5U0nugj%2BK%2Fpq0mJ4rqOtRfat5KQeUgLqXdYX5p84422V%2FAhvka6vthNuNuORSCn3TDvt9zGKO3F5xYu0NRPA9A%2FGPxtwNDHqR40mJt1VLnUPXrG3dQ%2B%2BpJ%2F8JkdMIXbqVmGar7MNjiTxr%2BEgVxTohpbsC%2FOMsPx6kFIvBO%2FhmhAnuNWGzQBeQeYzNxSv32SRAp7emoWiuxXX%2F3dxEQrNZ7G4I8Dw1C9EiDBwvTBGLCMa5%2FDHUFacixUdRc%2BAypiKxNE%2FD4qKfyKlgOWSF0zQzN7yX%2FGAWnzmpJj0o5HEejHQX%2FumxlRmT8Lu2bVRbsvfUY%2F%2FrEGaiOF6eskueudWhVH3rModtSetA59NodnWeE7vlTZtcfk9fBeLbRZWp8LeGndo4%2BJy1ABjGWeCHbYZI4wT%2B%2FkJLzVR3KFkNlPa13p8KekgYmk05k5zM8Kl%2BkGCyhAAFIr9dMp7fh4t%2BEMroUA8a1gU8t6mNBCsiMBgDCwqOm9BjqkAZhRCm8DE9ZrZJTr8IJrekENr%2FxLOz4FwMzhbcwcLFTE%2F%2FqnhabDzjp4EVEJ5Q4GeJAamPLjQlr0rcWOStnCyTzu9Kbo0XM1R16dnCBw%2FYQxGVtvN9HzVLEdkYBvW%2FI14LG%2FscA6LtHF9wyOqLgotv%2F3bfpRuvY6AcPoPvF%2FJWn2Wkl8%2BJvvXshNZSZOsH6co64F74vW162KWI3fs24t4VzWgSMB&X-Amz-Signature=1ed4a72a958d6963f61fa415b70b14b2a09d05fdbc97119a3116af743ea1dd11&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P4FFW5V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUESsb7hUx1X%2BNHQoDD4eXB9dofOoHcehnZsI6kMN%2FZwIhAK9lkH2Xf%2FWEYZuYkpGzzms%2FnU7otLi4tA7S5SOdfFXyKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPt6fc1r4XHMyOSA8q3APMcSsTZjFI4wId2j5Lx8%2BEvRn5U0OIsje8NDVRKkNIRd%2F%2BuQpdkz9LYRjFA5GaNYcu0qKkuIrlrqAS6%2F%2FOBvnlXT30pkWVl6gjJ3Cf%2B3MTWvPYocKKueEV6AktXtsuLke9Z4p9GiHwXaGU5eFUG5U0nugj%2BK%2Fpq0mJ4rqOtRfat5KQeUgLqXdYX5p84422V%2FAhvka6vthNuNuORSCn3TDvt9zGKO3F5xYu0NRPA9A%2FGPxtwNDHqR40mJt1VLnUPXrG3dQ%2B%2BpJ%2F8JkdMIXbqVmGar7MNjiTxr%2BEgVxTohpbsC%2FOMsPx6kFIvBO%2FhmhAnuNWGzQBeQeYzNxSv32SRAp7emoWiuxXX%2F3dxEQrNZ7G4I8Dw1C9EiDBwvTBGLCMa5%2FDHUFacixUdRc%2BAypiKxNE%2FD4qKfyKlgOWSF0zQzN7yX%2FGAWnzmpJj0o5HEejHQX%2FumxlRmT8Lu2bVRbsvfUY%2F%2FrEGaiOF6eskueudWhVH3rModtSetA59NodnWeE7vlTZtcfk9fBeLbRZWp8LeGndo4%2BJy1ABjGWeCHbYZI4wT%2B%2FkJLzVR3KFkNlPa13p8KekgYmk05k5zM8Kl%2BkGCyhAAFIr9dMp7fh4t%2BEMroUA8a1gU8t6mNBCsiMBgDCwqOm9BjqkAZhRCm8DE9ZrZJTr8IJrekENr%2FxLOz4FwMzhbcwcLFTE%2F%2FqnhabDzjp4EVEJ5Q4GeJAamPLjQlr0rcWOStnCyTzu9Kbo0XM1R16dnCBw%2FYQxGVtvN9HzVLEdkYBvW%2FI14LG%2FscA6LtHF9wyOqLgotv%2F3bfpRuvY6AcPoPvF%2FJWn2Wkl8%2BJvvXshNZSZOsH6co64F74vW162KWI3fs24t4VzWgSMB&X-Amz-Signature=3eea6a50498740980446b9a2bbff3b61a09ddbf0ed43a8267ecb95cee4a2344f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P4FFW5V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUESsb7hUx1X%2BNHQoDD4eXB9dofOoHcehnZsI6kMN%2FZwIhAK9lkH2Xf%2FWEYZuYkpGzzms%2FnU7otLi4tA7S5SOdfFXyKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPt6fc1r4XHMyOSA8q3APMcSsTZjFI4wId2j5Lx8%2BEvRn5U0OIsje8NDVRKkNIRd%2F%2BuQpdkz9LYRjFA5GaNYcu0qKkuIrlrqAS6%2F%2FOBvnlXT30pkWVl6gjJ3Cf%2B3MTWvPYocKKueEV6AktXtsuLke9Z4p9GiHwXaGU5eFUG5U0nugj%2BK%2Fpq0mJ4rqOtRfat5KQeUgLqXdYX5p84422V%2FAhvka6vthNuNuORSCn3TDvt9zGKO3F5xYu0NRPA9A%2FGPxtwNDHqR40mJt1VLnUPXrG3dQ%2B%2BpJ%2F8JkdMIXbqVmGar7MNjiTxr%2BEgVxTohpbsC%2FOMsPx6kFIvBO%2FhmhAnuNWGzQBeQeYzNxSv32SRAp7emoWiuxXX%2F3dxEQrNZ7G4I8Dw1C9EiDBwvTBGLCMa5%2FDHUFacixUdRc%2BAypiKxNE%2FD4qKfyKlgOWSF0zQzN7yX%2FGAWnzmpJj0o5HEejHQX%2FumxlRmT8Lu2bVRbsvfUY%2F%2FrEGaiOF6eskueudWhVH3rModtSetA59NodnWeE7vlTZtcfk9fBeLbRZWp8LeGndo4%2BJy1ABjGWeCHbYZI4wT%2B%2FkJLzVR3KFkNlPa13p8KekgYmk05k5zM8Kl%2BkGCyhAAFIr9dMp7fh4t%2BEMroUA8a1gU8t6mNBCsiMBgDCwqOm9BjqkAZhRCm8DE9ZrZJTr8IJrekENr%2FxLOz4FwMzhbcwcLFTE%2F%2FqnhabDzjp4EVEJ5Q4GeJAamPLjQlr0rcWOStnCyTzu9Kbo0XM1R16dnCBw%2FYQxGVtvN9HzVLEdkYBvW%2FI14LG%2FscA6LtHF9wyOqLgotv%2F3bfpRuvY6AcPoPvF%2FJWn2Wkl8%2BJvvXshNZSZOsH6co64F74vW162KWI3fs24t4VzWgSMB&X-Amz-Signature=51feb847dcbbd61bf3e70b621f1696a0443634e4149424a194a3d25518a4e78a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P4FFW5V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUESsb7hUx1X%2BNHQoDD4eXB9dofOoHcehnZsI6kMN%2FZwIhAK9lkH2Xf%2FWEYZuYkpGzzms%2FnU7otLi4tA7S5SOdfFXyKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPt6fc1r4XHMyOSA8q3APMcSsTZjFI4wId2j5Lx8%2BEvRn5U0OIsje8NDVRKkNIRd%2F%2BuQpdkz9LYRjFA5GaNYcu0qKkuIrlrqAS6%2F%2FOBvnlXT30pkWVl6gjJ3Cf%2B3MTWvPYocKKueEV6AktXtsuLke9Z4p9GiHwXaGU5eFUG5U0nugj%2BK%2Fpq0mJ4rqOtRfat5KQeUgLqXdYX5p84422V%2FAhvka6vthNuNuORSCn3TDvt9zGKO3F5xYu0NRPA9A%2FGPxtwNDHqR40mJt1VLnUPXrG3dQ%2B%2BpJ%2F8JkdMIXbqVmGar7MNjiTxr%2BEgVxTohpbsC%2FOMsPx6kFIvBO%2FhmhAnuNWGzQBeQeYzNxSv32SRAp7emoWiuxXX%2F3dxEQrNZ7G4I8Dw1C9EiDBwvTBGLCMa5%2FDHUFacixUdRc%2BAypiKxNE%2FD4qKfyKlgOWSF0zQzN7yX%2FGAWnzmpJj0o5HEejHQX%2FumxlRmT8Lu2bVRbsvfUY%2F%2FrEGaiOF6eskueudWhVH3rModtSetA59NodnWeE7vlTZtcfk9fBeLbRZWp8LeGndo4%2BJy1ABjGWeCHbYZI4wT%2B%2FkJLzVR3KFkNlPa13p8KekgYmk05k5zM8Kl%2BkGCyhAAFIr9dMp7fh4t%2BEMroUA8a1gU8t6mNBCsiMBgDCwqOm9BjqkAZhRCm8DE9ZrZJTr8IJrekENr%2FxLOz4FwMzhbcwcLFTE%2F%2FqnhabDzjp4EVEJ5Q4GeJAamPLjQlr0rcWOStnCyTzu9Kbo0XM1R16dnCBw%2FYQxGVtvN9HzVLEdkYBvW%2FI14LG%2FscA6LtHF9wyOqLgotv%2F3bfpRuvY6AcPoPvF%2FJWn2Wkl8%2BJvvXshNZSZOsH6co64F74vW162KWI3fs24t4VzWgSMB&X-Amz-Signature=44aace7fbb697a1b1b5ccd4c47544ce114441b3c014b6f405061bd5c668b1d21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P4FFW5V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUESsb7hUx1X%2BNHQoDD4eXB9dofOoHcehnZsI6kMN%2FZwIhAK9lkH2Xf%2FWEYZuYkpGzzms%2FnU7otLi4tA7S5SOdfFXyKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPt6fc1r4XHMyOSA8q3APMcSsTZjFI4wId2j5Lx8%2BEvRn5U0OIsje8NDVRKkNIRd%2F%2BuQpdkz9LYRjFA5GaNYcu0qKkuIrlrqAS6%2F%2FOBvnlXT30pkWVl6gjJ3Cf%2B3MTWvPYocKKueEV6AktXtsuLke9Z4p9GiHwXaGU5eFUG5U0nugj%2BK%2Fpq0mJ4rqOtRfat5KQeUgLqXdYX5p84422V%2FAhvka6vthNuNuORSCn3TDvt9zGKO3F5xYu0NRPA9A%2FGPxtwNDHqR40mJt1VLnUPXrG3dQ%2B%2BpJ%2F8JkdMIXbqVmGar7MNjiTxr%2BEgVxTohpbsC%2FOMsPx6kFIvBO%2FhmhAnuNWGzQBeQeYzNxSv32SRAp7emoWiuxXX%2F3dxEQrNZ7G4I8Dw1C9EiDBwvTBGLCMa5%2FDHUFacixUdRc%2BAypiKxNE%2FD4qKfyKlgOWSF0zQzN7yX%2FGAWnzmpJj0o5HEejHQX%2FumxlRmT8Lu2bVRbsvfUY%2F%2FrEGaiOF6eskueudWhVH3rModtSetA59NodnWeE7vlTZtcfk9fBeLbRZWp8LeGndo4%2BJy1ABjGWeCHbYZI4wT%2B%2FkJLzVR3KFkNlPa13p8KekgYmk05k5zM8Kl%2BkGCyhAAFIr9dMp7fh4t%2BEMroUA8a1gU8t6mNBCsiMBgDCwqOm9BjqkAZhRCm8DE9ZrZJTr8IJrekENr%2FxLOz4FwMzhbcwcLFTE%2F%2FqnhabDzjp4EVEJ5Q4GeJAamPLjQlr0rcWOStnCyTzu9Kbo0XM1R16dnCBw%2FYQxGVtvN9HzVLEdkYBvW%2FI14LG%2FscA6LtHF9wyOqLgotv%2F3bfpRuvY6AcPoPvF%2FJWn2Wkl8%2BJvvXshNZSZOsH6co64F74vW162KWI3fs24t4VzWgSMB&X-Amz-Signature=7c907eddc6c29ec033146160cefa4f9bdf65bc053b2bc942cbd6ffdb3920dd41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P4FFW5V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUESsb7hUx1X%2BNHQoDD4eXB9dofOoHcehnZsI6kMN%2FZwIhAK9lkH2Xf%2FWEYZuYkpGzzms%2FnU7otLi4tA7S5SOdfFXyKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPt6fc1r4XHMyOSA8q3APMcSsTZjFI4wId2j5Lx8%2BEvRn5U0OIsje8NDVRKkNIRd%2F%2BuQpdkz9LYRjFA5GaNYcu0qKkuIrlrqAS6%2F%2FOBvnlXT30pkWVl6gjJ3Cf%2B3MTWvPYocKKueEV6AktXtsuLke9Z4p9GiHwXaGU5eFUG5U0nugj%2BK%2Fpq0mJ4rqOtRfat5KQeUgLqXdYX5p84422V%2FAhvka6vthNuNuORSCn3TDvt9zGKO3F5xYu0NRPA9A%2FGPxtwNDHqR40mJt1VLnUPXrG3dQ%2B%2BpJ%2F8JkdMIXbqVmGar7MNjiTxr%2BEgVxTohpbsC%2FOMsPx6kFIvBO%2FhmhAnuNWGzQBeQeYzNxSv32SRAp7emoWiuxXX%2F3dxEQrNZ7G4I8Dw1C9EiDBwvTBGLCMa5%2FDHUFacixUdRc%2BAypiKxNE%2FD4qKfyKlgOWSF0zQzN7yX%2FGAWnzmpJj0o5HEejHQX%2FumxlRmT8Lu2bVRbsvfUY%2F%2FrEGaiOF6eskueudWhVH3rModtSetA59NodnWeE7vlTZtcfk9fBeLbRZWp8LeGndo4%2BJy1ABjGWeCHbYZI4wT%2B%2FkJLzVR3KFkNlPa13p8KekgYmk05k5zM8Kl%2BkGCyhAAFIr9dMp7fh4t%2BEMroUA8a1gU8t6mNBCsiMBgDCwqOm9BjqkAZhRCm8DE9ZrZJTr8IJrekENr%2FxLOz4FwMzhbcwcLFTE%2F%2FqnhabDzjp4EVEJ5Q4GeJAamPLjQlr0rcWOStnCyTzu9Kbo0XM1R16dnCBw%2FYQxGVtvN9HzVLEdkYBvW%2FI14LG%2FscA6LtHF9wyOqLgotv%2F3bfpRuvY6AcPoPvF%2FJWn2Wkl8%2BJvvXshNZSZOsH6co64F74vW162KWI3fs24t4VzWgSMB&X-Amz-Signature=c15ae525fe8546209eb1ba6934dafc3236ecc9ead31bf7e07c30ce10719c490c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P4FFW5V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUESsb7hUx1X%2BNHQoDD4eXB9dofOoHcehnZsI6kMN%2FZwIhAK9lkH2Xf%2FWEYZuYkpGzzms%2FnU7otLi4tA7S5SOdfFXyKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPt6fc1r4XHMyOSA8q3APMcSsTZjFI4wId2j5Lx8%2BEvRn5U0OIsje8NDVRKkNIRd%2F%2BuQpdkz9LYRjFA5GaNYcu0qKkuIrlrqAS6%2F%2FOBvnlXT30pkWVl6gjJ3Cf%2B3MTWvPYocKKueEV6AktXtsuLke9Z4p9GiHwXaGU5eFUG5U0nugj%2BK%2Fpq0mJ4rqOtRfat5KQeUgLqXdYX5p84422V%2FAhvka6vthNuNuORSCn3TDvt9zGKO3F5xYu0NRPA9A%2FGPxtwNDHqR40mJt1VLnUPXrG3dQ%2B%2BpJ%2F8JkdMIXbqVmGar7MNjiTxr%2BEgVxTohpbsC%2FOMsPx6kFIvBO%2FhmhAnuNWGzQBeQeYzNxSv32SRAp7emoWiuxXX%2F3dxEQrNZ7G4I8Dw1C9EiDBwvTBGLCMa5%2FDHUFacixUdRc%2BAypiKxNE%2FD4qKfyKlgOWSF0zQzN7yX%2FGAWnzmpJj0o5HEejHQX%2FumxlRmT8Lu2bVRbsvfUY%2F%2FrEGaiOF6eskueudWhVH3rModtSetA59NodnWeE7vlTZtcfk9fBeLbRZWp8LeGndo4%2BJy1ABjGWeCHbYZI4wT%2B%2FkJLzVR3KFkNlPa13p8KekgYmk05k5zM8Kl%2BkGCyhAAFIr9dMp7fh4t%2BEMroUA8a1gU8t6mNBCsiMBgDCwqOm9BjqkAZhRCm8DE9ZrZJTr8IJrekENr%2FxLOz4FwMzhbcwcLFTE%2F%2FqnhabDzjp4EVEJ5Q4GeJAamPLjQlr0rcWOStnCyTzu9Kbo0XM1R16dnCBw%2FYQxGVtvN9HzVLEdkYBvW%2FI14LG%2FscA6LtHF9wyOqLgotv%2F3bfpRuvY6AcPoPvF%2FJWn2Wkl8%2BJvvXshNZSZOsH6co64F74vW162KWI3fs24t4VzWgSMB&X-Amz-Signature=230e2fc22592475b7ca1a199763b826d4234bf70e3fe4ca83eb9d1a694c66a48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
