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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXMOW6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXwfLRFHYu3no1YNh9%2FPv2GISVFcsgYCT85qtoAi2v2AIgR9FSBMbpr94qgv3xzV31Y5T%2BLtM9w4U8tmuPWXNyCO8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEI1ssWRcE4DB6VFCrcA4gd6ZXkLiARH%2B4o5Dg1fQTsYqViwnSUukSf8jp03cEm010%2BXHDkuPXprl4ywJ5nek9Wjw9%2FdfhkCWyYfK6M7h8jM7dHOkRKIlv41q3VrIeYJjndLJ1gb0q1DtMUl1%2BjLtTRtLt6OZ%2FFFYxwg0egwdxGx%2B3zQj3%2BT24l7px8j5LUnFIhdgJYNv75mM0TcYESHhp67iCwoZNOsqvlwFi5nVhyWH92VjXyTZyvf2lWl6WrorpJzUfnzH8hyJeZD3YRvJIAZgK%2FciHtaBRj9ZjYJPH9%2FmiXhASuGDYjOVZ%2FnbZPVkLCmvxYgBm8W9iqFB8oqFkyttK45UV677PdfZZ0OkpMkgmept1BjkYl8tyx9Gbc%2BCL2M3ToMd%2FArbmhJ%2F%2B5%2FZzzrT3qvta5Oma26D%2FXOgPfP%2FsyyoPRsA6kPEz%2FV7HfAtLgY%2FZeSGKTa75OcskH7GBS7y4flr2FodBEwf%2FgB19NhPCbsxz3gND%2BB0zUA1LGQIYO%2BzhSEkV0Dms0pjcIrKpRTkxOnP1r%2BaZLX8cZcqECSV5WqIwo5CL6hs5pb2UKXj0E16sQ%2ByUySpsx%2BRX8eI5pHtOdhc6Dau1OeSLQ8IRPV%2BULilEJyA37A6SYZWxHpnLsp4TjSVgKPebgMOjFrcQGOqUBDBt9cnwxS7FfZ7Q9xJtyFH1nu%2BZOVw7HkrKK2qZHtsBh8mvPn4zbb%2F6d6g5LPTEt3yQnWybRF%2BZbhQDtUSG1iBCwHMdBsd%2FYf6JYhy0nBEkPdQL3C%2FYd%2BnEIudKyKqNx%2BCZJ34xenmhzM9qATEmrkEYklwyPZy%2Fg8fjuCP2lXEqTHCewp3D02oAGg6MR4pM6o%2BufvGtldGcrrH4nLnf2%2F2pE2Wbp&X-Amz-Signature=8321fdaac0a219350abe8219046fcf845996071b74f6682214c09a3dbedb897c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXMOW6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXwfLRFHYu3no1YNh9%2FPv2GISVFcsgYCT85qtoAi2v2AIgR9FSBMbpr94qgv3xzV31Y5T%2BLtM9w4U8tmuPWXNyCO8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEI1ssWRcE4DB6VFCrcA4gd6ZXkLiARH%2B4o5Dg1fQTsYqViwnSUukSf8jp03cEm010%2BXHDkuPXprl4ywJ5nek9Wjw9%2FdfhkCWyYfK6M7h8jM7dHOkRKIlv41q3VrIeYJjndLJ1gb0q1DtMUl1%2BjLtTRtLt6OZ%2FFFYxwg0egwdxGx%2B3zQj3%2BT24l7px8j5LUnFIhdgJYNv75mM0TcYESHhp67iCwoZNOsqvlwFi5nVhyWH92VjXyTZyvf2lWl6WrorpJzUfnzH8hyJeZD3YRvJIAZgK%2FciHtaBRj9ZjYJPH9%2FmiXhASuGDYjOVZ%2FnbZPVkLCmvxYgBm8W9iqFB8oqFkyttK45UV677PdfZZ0OkpMkgmept1BjkYl8tyx9Gbc%2BCL2M3ToMd%2FArbmhJ%2F%2B5%2FZzzrT3qvta5Oma26D%2FXOgPfP%2FsyyoPRsA6kPEz%2FV7HfAtLgY%2FZeSGKTa75OcskH7GBS7y4flr2FodBEwf%2FgB19NhPCbsxz3gND%2BB0zUA1LGQIYO%2BzhSEkV0Dms0pjcIrKpRTkxOnP1r%2BaZLX8cZcqECSV5WqIwo5CL6hs5pb2UKXj0E16sQ%2ByUySpsx%2BRX8eI5pHtOdhc6Dau1OeSLQ8IRPV%2BULilEJyA37A6SYZWxHpnLsp4TjSVgKPebgMOjFrcQGOqUBDBt9cnwxS7FfZ7Q9xJtyFH1nu%2BZOVw7HkrKK2qZHtsBh8mvPn4zbb%2F6d6g5LPTEt3yQnWybRF%2BZbhQDtUSG1iBCwHMdBsd%2FYf6JYhy0nBEkPdQL3C%2FYd%2BnEIudKyKqNx%2BCZJ34xenmhzM9qATEmrkEYklwyPZy%2Fg8fjuCP2lXEqTHCewp3D02oAGg6MR4pM6o%2BufvGtldGcrrH4nLnf2%2F2pE2Wbp&X-Amz-Signature=d4cfc73cf58c3d60dc6efa626a63898b1df306d42f5eb065b7ba301753b1dd0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXMOW6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXwfLRFHYu3no1YNh9%2FPv2GISVFcsgYCT85qtoAi2v2AIgR9FSBMbpr94qgv3xzV31Y5T%2BLtM9w4U8tmuPWXNyCO8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEI1ssWRcE4DB6VFCrcA4gd6ZXkLiARH%2B4o5Dg1fQTsYqViwnSUukSf8jp03cEm010%2BXHDkuPXprl4ywJ5nek9Wjw9%2FdfhkCWyYfK6M7h8jM7dHOkRKIlv41q3VrIeYJjndLJ1gb0q1DtMUl1%2BjLtTRtLt6OZ%2FFFYxwg0egwdxGx%2B3zQj3%2BT24l7px8j5LUnFIhdgJYNv75mM0TcYESHhp67iCwoZNOsqvlwFi5nVhyWH92VjXyTZyvf2lWl6WrorpJzUfnzH8hyJeZD3YRvJIAZgK%2FciHtaBRj9ZjYJPH9%2FmiXhASuGDYjOVZ%2FnbZPVkLCmvxYgBm8W9iqFB8oqFkyttK45UV677PdfZZ0OkpMkgmept1BjkYl8tyx9Gbc%2BCL2M3ToMd%2FArbmhJ%2F%2B5%2FZzzrT3qvta5Oma26D%2FXOgPfP%2FsyyoPRsA6kPEz%2FV7HfAtLgY%2FZeSGKTa75OcskH7GBS7y4flr2FodBEwf%2FgB19NhPCbsxz3gND%2BB0zUA1LGQIYO%2BzhSEkV0Dms0pjcIrKpRTkxOnP1r%2BaZLX8cZcqECSV5WqIwo5CL6hs5pb2UKXj0E16sQ%2ByUySpsx%2BRX8eI5pHtOdhc6Dau1OeSLQ8IRPV%2BULilEJyA37A6SYZWxHpnLsp4TjSVgKPebgMOjFrcQGOqUBDBt9cnwxS7FfZ7Q9xJtyFH1nu%2BZOVw7HkrKK2qZHtsBh8mvPn4zbb%2F6d6g5LPTEt3yQnWybRF%2BZbhQDtUSG1iBCwHMdBsd%2FYf6JYhy0nBEkPdQL3C%2FYd%2BnEIudKyKqNx%2BCZJ34xenmhzM9qATEmrkEYklwyPZy%2Fg8fjuCP2lXEqTHCewp3D02oAGg6MR4pM6o%2BufvGtldGcrrH4nLnf2%2F2pE2Wbp&X-Amz-Signature=060021ed32131038413978e8a104e74335df9273e7cee7cff4ad501661f69ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXMOW6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXwfLRFHYu3no1YNh9%2FPv2GISVFcsgYCT85qtoAi2v2AIgR9FSBMbpr94qgv3xzV31Y5T%2BLtM9w4U8tmuPWXNyCO8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEI1ssWRcE4DB6VFCrcA4gd6ZXkLiARH%2B4o5Dg1fQTsYqViwnSUukSf8jp03cEm010%2BXHDkuPXprl4ywJ5nek9Wjw9%2FdfhkCWyYfK6M7h8jM7dHOkRKIlv41q3VrIeYJjndLJ1gb0q1DtMUl1%2BjLtTRtLt6OZ%2FFFYxwg0egwdxGx%2B3zQj3%2BT24l7px8j5LUnFIhdgJYNv75mM0TcYESHhp67iCwoZNOsqvlwFi5nVhyWH92VjXyTZyvf2lWl6WrorpJzUfnzH8hyJeZD3YRvJIAZgK%2FciHtaBRj9ZjYJPH9%2FmiXhASuGDYjOVZ%2FnbZPVkLCmvxYgBm8W9iqFB8oqFkyttK45UV677PdfZZ0OkpMkgmept1BjkYl8tyx9Gbc%2BCL2M3ToMd%2FArbmhJ%2F%2B5%2FZzzrT3qvta5Oma26D%2FXOgPfP%2FsyyoPRsA6kPEz%2FV7HfAtLgY%2FZeSGKTa75OcskH7GBS7y4flr2FodBEwf%2FgB19NhPCbsxz3gND%2BB0zUA1LGQIYO%2BzhSEkV0Dms0pjcIrKpRTkxOnP1r%2BaZLX8cZcqECSV5WqIwo5CL6hs5pb2UKXj0E16sQ%2ByUySpsx%2BRX8eI5pHtOdhc6Dau1OeSLQ8IRPV%2BULilEJyA37A6SYZWxHpnLsp4TjSVgKPebgMOjFrcQGOqUBDBt9cnwxS7FfZ7Q9xJtyFH1nu%2BZOVw7HkrKK2qZHtsBh8mvPn4zbb%2F6d6g5LPTEt3yQnWybRF%2BZbhQDtUSG1iBCwHMdBsd%2FYf6JYhy0nBEkPdQL3C%2FYd%2BnEIudKyKqNx%2BCZJ34xenmhzM9qATEmrkEYklwyPZy%2Fg8fjuCP2lXEqTHCewp3D02oAGg6MR4pM6o%2BufvGtldGcrrH4nLnf2%2F2pE2Wbp&X-Amz-Signature=31ddb7fc56df2d8f676741c9bfaa2b96dae06e46fe22077de1ad040d7ffa4555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXMOW6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXwfLRFHYu3no1YNh9%2FPv2GISVFcsgYCT85qtoAi2v2AIgR9FSBMbpr94qgv3xzV31Y5T%2BLtM9w4U8tmuPWXNyCO8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEI1ssWRcE4DB6VFCrcA4gd6ZXkLiARH%2B4o5Dg1fQTsYqViwnSUukSf8jp03cEm010%2BXHDkuPXprl4ywJ5nek9Wjw9%2FdfhkCWyYfK6M7h8jM7dHOkRKIlv41q3VrIeYJjndLJ1gb0q1DtMUl1%2BjLtTRtLt6OZ%2FFFYxwg0egwdxGx%2B3zQj3%2BT24l7px8j5LUnFIhdgJYNv75mM0TcYESHhp67iCwoZNOsqvlwFi5nVhyWH92VjXyTZyvf2lWl6WrorpJzUfnzH8hyJeZD3YRvJIAZgK%2FciHtaBRj9ZjYJPH9%2FmiXhASuGDYjOVZ%2FnbZPVkLCmvxYgBm8W9iqFB8oqFkyttK45UV677PdfZZ0OkpMkgmept1BjkYl8tyx9Gbc%2BCL2M3ToMd%2FArbmhJ%2F%2B5%2FZzzrT3qvta5Oma26D%2FXOgPfP%2FsyyoPRsA6kPEz%2FV7HfAtLgY%2FZeSGKTa75OcskH7GBS7y4flr2FodBEwf%2FgB19NhPCbsxz3gND%2BB0zUA1LGQIYO%2BzhSEkV0Dms0pjcIrKpRTkxOnP1r%2BaZLX8cZcqECSV5WqIwo5CL6hs5pb2UKXj0E16sQ%2ByUySpsx%2BRX8eI5pHtOdhc6Dau1OeSLQ8IRPV%2BULilEJyA37A6SYZWxHpnLsp4TjSVgKPebgMOjFrcQGOqUBDBt9cnwxS7FfZ7Q9xJtyFH1nu%2BZOVw7HkrKK2qZHtsBh8mvPn4zbb%2F6d6g5LPTEt3yQnWybRF%2BZbhQDtUSG1iBCwHMdBsd%2FYf6JYhy0nBEkPdQL3C%2FYd%2BnEIudKyKqNx%2BCZJ34xenmhzM9qATEmrkEYklwyPZy%2Fg8fjuCP2lXEqTHCewp3D02oAGg6MR4pM6o%2BufvGtldGcrrH4nLnf2%2F2pE2Wbp&X-Amz-Signature=cb290d1c76181e89f218e8c5cc4c06b6fe48da6ddb1b84c12004f3a009b68bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXMOW6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXwfLRFHYu3no1YNh9%2FPv2GISVFcsgYCT85qtoAi2v2AIgR9FSBMbpr94qgv3xzV31Y5T%2BLtM9w4U8tmuPWXNyCO8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEI1ssWRcE4DB6VFCrcA4gd6ZXkLiARH%2B4o5Dg1fQTsYqViwnSUukSf8jp03cEm010%2BXHDkuPXprl4ywJ5nek9Wjw9%2FdfhkCWyYfK6M7h8jM7dHOkRKIlv41q3VrIeYJjndLJ1gb0q1DtMUl1%2BjLtTRtLt6OZ%2FFFYxwg0egwdxGx%2B3zQj3%2BT24l7px8j5LUnFIhdgJYNv75mM0TcYESHhp67iCwoZNOsqvlwFi5nVhyWH92VjXyTZyvf2lWl6WrorpJzUfnzH8hyJeZD3YRvJIAZgK%2FciHtaBRj9ZjYJPH9%2FmiXhASuGDYjOVZ%2FnbZPVkLCmvxYgBm8W9iqFB8oqFkyttK45UV677PdfZZ0OkpMkgmept1BjkYl8tyx9Gbc%2BCL2M3ToMd%2FArbmhJ%2F%2B5%2FZzzrT3qvta5Oma26D%2FXOgPfP%2FsyyoPRsA6kPEz%2FV7HfAtLgY%2FZeSGKTa75OcskH7GBS7y4flr2FodBEwf%2FgB19NhPCbsxz3gND%2BB0zUA1LGQIYO%2BzhSEkV0Dms0pjcIrKpRTkxOnP1r%2BaZLX8cZcqECSV5WqIwo5CL6hs5pb2UKXj0E16sQ%2ByUySpsx%2BRX8eI5pHtOdhc6Dau1OeSLQ8IRPV%2BULilEJyA37A6SYZWxHpnLsp4TjSVgKPebgMOjFrcQGOqUBDBt9cnwxS7FfZ7Q9xJtyFH1nu%2BZOVw7HkrKK2qZHtsBh8mvPn4zbb%2F6d6g5LPTEt3yQnWybRF%2BZbhQDtUSG1iBCwHMdBsd%2FYf6JYhy0nBEkPdQL3C%2FYd%2BnEIudKyKqNx%2BCZJ34xenmhzM9qATEmrkEYklwyPZy%2Fg8fjuCP2lXEqTHCewp3D02oAGg6MR4pM6o%2BufvGtldGcrrH4nLnf2%2F2pE2Wbp&X-Amz-Signature=e0e8f6797a562c04c772a795ac0d77d9b6893db24ef3775a503f5ab0e6aa995c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXMOW6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXwfLRFHYu3no1YNh9%2FPv2GISVFcsgYCT85qtoAi2v2AIgR9FSBMbpr94qgv3xzV31Y5T%2BLtM9w4U8tmuPWXNyCO8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEI1ssWRcE4DB6VFCrcA4gd6ZXkLiARH%2B4o5Dg1fQTsYqViwnSUukSf8jp03cEm010%2BXHDkuPXprl4ywJ5nek9Wjw9%2FdfhkCWyYfK6M7h8jM7dHOkRKIlv41q3VrIeYJjndLJ1gb0q1DtMUl1%2BjLtTRtLt6OZ%2FFFYxwg0egwdxGx%2B3zQj3%2BT24l7px8j5LUnFIhdgJYNv75mM0TcYESHhp67iCwoZNOsqvlwFi5nVhyWH92VjXyTZyvf2lWl6WrorpJzUfnzH8hyJeZD3YRvJIAZgK%2FciHtaBRj9ZjYJPH9%2FmiXhASuGDYjOVZ%2FnbZPVkLCmvxYgBm8W9iqFB8oqFkyttK45UV677PdfZZ0OkpMkgmept1BjkYl8tyx9Gbc%2BCL2M3ToMd%2FArbmhJ%2F%2B5%2FZzzrT3qvta5Oma26D%2FXOgPfP%2FsyyoPRsA6kPEz%2FV7HfAtLgY%2FZeSGKTa75OcskH7GBS7y4flr2FodBEwf%2FgB19NhPCbsxz3gND%2BB0zUA1LGQIYO%2BzhSEkV0Dms0pjcIrKpRTkxOnP1r%2BaZLX8cZcqECSV5WqIwo5CL6hs5pb2UKXj0E16sQ%2ByUySpsx%2BRX8eI5pHtOdhc6Dau1OeSLQ8IRPV%2BULilEJyA37A6SYZWxHpnLsp4TjSVgKPebgMOjFrcQGOqUBDBt9cnwxS7FfZ7Q9xJtyFH1nu%2BZOVw7HkrKK2qZHtsBh8mvPn4zbb%2F6d6g5LPTEt3yQnWybRF%2BZbhQDtUSG1iBCwHMdBsd%2FYf6JYhy0nBEkPdQL3C%2FYd%2BnEIudKyKqNx%2BCZJ34xenmhzM9qATEmrkEYklwyPZy%2Fg8fjuCP2lXEqTHCewp3D02oAGg6MR4pM6o%2BufvGtldGcrrH4nLnf2%2F2pE2Wbp&X-Amz-Signature=37c643ce9e1136af19e671dcf6214d1b2e9735d017f2a9ab9b693851981197ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JXMOW6H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXwfLRFHYu3no1YNh9%2FPv2GISVFcsgYCT85qtoAi2v2AIgR9FSBMbpr94qgv3xzV31Y5T%2BLtM9w4U8tmuPWXNyCO8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEI1ssWRcE4DB6VFCrcA4gd6ZXkLiARH%2B4o5Dg1fQTsYqViwnSUukSf8jp03cEm010%2BXHDkuPXprl4ywJ5nek9Wjw9%2FdfhkCWyYfK6M7h8jM7dHOkRKIlv41q3VrIeYJjndLJ1gb0q1DtMUl1%2BjLtTRtLt6OZ%2FFFYxwg0egwdxGx%2B3zQj3%2BT24l7px8j5LUnFIhdgJYNv75mM0TcYESHhp67iCwoZNOsqvlwFi5nVhyWH92VjXyTZyvf2lWl6WrorpJzUfnzH8hyJeZD3YRvJIAZgK%2FciHtaBRj9ZjYJPH9%2FmiXhASuGDYjOVZ%2FnbZPVkLCmvxYgBm8W9iqFB8oqFkyttK45UV677PdfZZ0OkpMkgmept1BjkYl8tyx9Gbc%2BCL2M3ToMd%2FArbmhJ%2F%2B5%2FZzzrT3qvta5Oma26D%2FXOgPfP%2FsyyoPRsA6kPEz%2FV7HfAtLgY%2FZeSGKTa75OcskH7GBS7y4flr2FodBEwf%2FgB19NhPCbsxz3gND%2BB0zUA1LGQIYO%2BzhSEkV0Dms0pjcIrKpRTkxOnP1r%2BaZLX8cZcqECSV5WqIwo5CL6hs5pb2UKXj0E16sQ%2ByUySpsx%2BRX8eI5pHtOdhc6Dau1OeSLQ8IRPV%2BULilEJyA37A6SYZWxHpnLsp4TjSVgKPebgMOjFrcQGOqUBDBt9cnwxS7FfZ7Q9xJtyFH1nu%2BZOVw7HkrKK2qZHtsBh8mvPn4zbb%2F6d6g5LPTEt3yQnWybRF%2BZbhQDtUSG1iBCwHMdBsd%2FYf6JYhy0nBEkPdQL3C%2FYd%2BnEIudKyKqNx%2BCZJ34xenmhzM9qATEmrkEYklwyPZy%2Fg8fjuCP2lXEqTHCewp3D02oAGg6MR4pM6o%2BufvGtldGcrrH4nLnf2%2F2pE2Wbp&X-Amz-Signature=7181cedaec6effd83082b11a3582e0014f1582e0498f14a432b0427ea2216046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
