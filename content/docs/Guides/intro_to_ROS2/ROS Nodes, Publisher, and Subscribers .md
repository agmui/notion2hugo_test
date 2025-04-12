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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDBUZMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICxV0TOjifTSMYiZGfFU6hHn55Cj71d4T8gsW0DUwGCXAiBq1Mn%2Fptv0qkAHSJy8TO2BgrBpPr8np8PnGFPVB24PFSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN7N9qFWMV6XH10IlKtwDwpkrODPTH1B4LcSJ05SLr8C30%2F%2FmtEVID5v0bh7tRVD4hR9AviKKF%2BQ8ZRhrFvYnIv7G4fQoJUzXKNRbhK2CvYSkG4unsYf4p8yHna02%2FFvdGXba0mLLeUZ7SeQ6IxSsmDZtb9SATo8RD54Jc0unNxSSHF3w2bC0IsSjCZZEtpL%2BfkeALCyJVlLOGFFMi8UBmDI5keZFkUvxhzGx4oNbF8c%2BDVm5XvxmloMWR%2B%2FFYK4SCbl8eJL2oogBsCsYzKCTgnPqUYccd5bFxKnwyBChTLwCFUkFrqHzYIXgrxi8IZnznbiYAK7UkrxiLibYaZsVGpBxh4DfM9v4BQHgr%2BXHqajG0Trve3TRE7I%2F29LzCD8TpQ4Hy5xG9WSLMfjhBSNldE5OsPBLFJatCcDYU8wxMr2R0PnGFy5CKHpN6BFiYrEr32KyQSRG%2Fyk9z5iGtCQjp4loOQHdGAJZ%2FDEr9%2Bp9evNuGAKgg%2FzlXLMc3BxY9ZToMWQ4DlKXROLOGcweAZzKjs1MF4MLiNk%2BS2kwhv8dPpO1pQDaXYqXdtOnV9bBEEV03U6z6%2FUqqQNbZDrE4ZRP6DQVBbtNVI9pgn%2FuSTKxyCEkp0UQoWT8Ze4E9tXo6pwP22Hc5vGnTsnuwtIw%2BvrpvwY6pgEVJY08%2F4CmPGVZ9bmO04RvWZF0xq2eVPiWOLKk9QynI0IxCfbmzBaDPAhtVHR9sqy9b%2FyXm4%2FyJJtze%2FX%2BftzTvqUGbAUxRYONmF%2BSxwFZB%2BsIY2fnDIELIBN%2FWkNRjJoLvPL3GVdnZvDBF1qcSX5h0wV5cVx9q%2BE69EjAI64cDpxTzoU%2BaJF9S%2BxiMVkZBAQk5C7PTmjL6iT0Pvhp6qq52PSKDSEW&X-Amz-Signature=16606494817b1b9d71e87ef35964905679679c2dc8b87bb5477cf86b9053451b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDBUZMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICxV0TOjifTSMYiZGfFU6hHn55Cj71d4T8gsW0DUwGCXAiBq1Mn%2Fptv0qkAHSJy8TO2BgrBpPr8np8PnGFPVB24PFSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN7N9qFWMV6XH10IlKtwDwpkrODPTH1B4LcSJ05SLr8C30%2F%2FmtEVID5v0bh7tRVD4hR9AviKKF%2BQ8ZRhrFvYnIv7G4fQoJUzXKNRbhK2CvYSkG4unsYf4p8yHna02%2FFvdGXba0mLLeUZ7SeQ6IxSsmDZtb9SATo8RD54Jc0unNxSSHF3w2bC0IsSjCZZEtpL%2BfkeALCyJVlLOGFFMi8UBmDI5keZFkUvxhzGx4oNbF8c%2BDVm5XvxmloMWR%2B%2FFYK4SCbl8eJL2oogBsCsYzKCTgnPqUYccd5bFxKnwyBChTLwCFUkFrqHzYIXgrxi8IZnznbiYAK7UkrxiLibYaZsVGpBxh4DfM9v4BQHgr%2BXHqajG0Trve3TRE7I%2F29LzCD8TpQ4Hy5xG9WSLMfjhBSNldE5OsPBLFJatCcDYU8wxMr2R0PnGFy5CKHpN6BFiYrEr32KyQSRG%2Fyk9z5iGtCQjp4loOQHdGAJZ%2FDEr9%2Bp9evNuGAKgg%2FzlXLMc3BxY9ZToMWQ4DlKXROLOGcweAZzKjs1MF4MLiNk%2BS2kwhv8dPpO1pQDaXYqXdtOnV9bBEEV03U6z6%2FUqqQNbZDrE4ZRP6DQVBbtNVI9pgn%2FuSTKxyCEkp0UQoWT8Ze4E9tXo6pwP22Hc5vGnTsnuwtIw%2BvrpvwY6pgEVJY08%2F4CmPGVZ9bmO04RvWZF0xq2eVPiWOLKk9QynI0IxCfbmzBaDPAhtVHR9sqy9b%2FyXm4%2FyJJtze%2FX%2BftzTvqUGbAUxRYONmF%2BSxwFZB%2BsIY2fnDIELIBN%2FWkNRjJoLvPL3GVdnZvDBF1qcSX5h0wV5cVx9q%2BE69EjAI64cDpxTzoU%2BaJF9S%2BxiMVkZBAQk5C7PTmjL6iT0Pvhp6qq52PSKDSEW&X-Amz-Signature=f603b25adb1f47cad7dbdb6d9bba55f3c76615e8c306d51c48bc3bf33e1a3d63&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDBUZMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICxV0TOjifTSMYiZGfFU6hHn55Cj71d4T8gsW0DUwGCXAiBq1Mn%2Fptv0qkAHSJy8TO2BgrBpPr8np8PnGFPVB24PFSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN7N9qFWMV6XH10IlKtwDwpkrODPTH1B4LcSJ05SLr8C30%2F%2FmtEVID5v0bh7tRVD4hR9AviKKF%2BQ8ZRhrFvYnIv7G4fQoJUzXKNRbhK2CvYSkG4unsYf4p8yHna02%2FFvdGXba0mLLeUZ7SeQ6IxSsmDZtb9SATo8RD54Jc0unNxSSHF3w2bC0IsSjCZZEtpL%2BfkeALCyJVlLOGFFMi8UBmDI5keZFkUvxhzGx4oNbF8c%2BDVm5XvxmloMWR%2B%2FFYK4SCbl8eJL2oogBsCsYzKCTgnPqUYccd5bFxKnwyBChTLwCFUkFrqHzYIXgrxi8IZnznbiYAK7UkrxiLibYaZsVGpBxh4DfM9v4BQHgr%2BXHqajG0Trve3TRE7I%2F29LzCD8TpQ4Hy5xG9WSLMfjhBSNldE5OsPBLFJatCcDYU8wxMr2R0PnGFy5CKHpN6BFiYrEr32KyQSRG%2Fyk9z5iGtCQjp4loOQHdGAJZ%2FDEr9%2Bp9evNuGAKgg%2FzlXLMc3BxY9ZToMWQ4DlKXROLOGcweAZzKjs1MF4MLiNk%2BS2kwhv8dPpO1pQDaXYqXdtOnV9bBEEV03U6z6%2FUqqQNbZDrE4ZRP6DQVBbtNVI9pgn%2FuSTKxyCEkp0UQoWT8Ze4E9tXo6pwP22Hc5vGnTsnuwtIw%2BvrpvwY6pgEVJY08%2F4CmPGVZ9bmO04RvWZF0xq2eVPiWOLKk9QynI0IxCfbmzBaDPAhtVHR9sqy9b%2FyXm4%2FyJJtze%2FX%2BftzTvqUGbAUxRYONmF%2BSxwFZB%2BsIY2fnDIELIBN%2FWkNRjJoLvPL3GVdnZvDBF1qcSX5h0wV5cVx9q%2BE69EjAI64cDpxTzoU%2BaJF9S%2BxiMVkZBAQk5C7PTmjL6iT0Pvhp6qq52PSKDSEW&X-Amz-Signature=777268bff378043d17fd23323b9ca82b625d80756fc929a9ac0b119a72e56ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDBUZMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICxV0TOjifTSMYiZGfFU6hHn55Cj71d4T8gsW0DUwGCXAiBq1Mn%2Fptv0qkAHSJy8TO2BgrBpPr8np8PnGFPVB24PFSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN7N9qFWMV6XH10IlKtwDwpkrODPTH1B4LcSJ05SLr8C30%2F%2FmtEVID5v0bh7tRVD4hR9AviKKF%2BQ8ZRhrFvYnIv7G4fQoJUzXKNRbhK2CvYSkG4unsYf4p8yHna02%2FFvdGXba0mLLeUZ7SeQ6IxSsmDZtb9SATo8RD54Jc0unNxSSHF3w2bC0IsSjCZZEtpL%2BfkeALCyJVlLOGFFMi8UBmDI5keZFkUvxhzGx4oNbF8c%2BDVm5XvxmloMWR%2B%2FFYK4SCbl8eJL2oogBsCsYzKCTgnPqUYccd5bFxKnwyBChTLwCFUkFrqHzYIXgrxi8IZnznbiYAK7UkrxiLibYaZsVGpBxh4DfM9v4BQHgr%2BXHqajG0Trve3TRE7I%2F29LzCD8TpQ4Hy5xG9WSLMfjhBSNldE5OsPBLFJatCcDYU8wxMr2R0PnGFy5CKHpN6BFiYrEr32KyQSRG%2Fyk9z5iGtCQjp4loOQHdGAJZ%2FDEr9%2Bp9evNuGAKgg%2FzlXLMc3BxY9ZToMWQ4DlKXROLOGcweAZzKjs1MF4MLiNk%2BS2kwhv8dPpO1pQDaXYqXdtOnV9bBEEV03U6z6%2FUqqQNbZDrE4ZRP6DQVBbtNVI9pgn%2FuSTKxyCEkp0UQoWT8Ze4E9tXo6pwP22Hc5vGnTsnuwtIw%2BvrpvwY6pgEVJY08%2F4CmPGVZ9bmO04RvWZF0xq2eVPiWOLKk9QynI0IxCfbmzBaDPAhtVHR9sqy9b%2FyXm4%2FyJJtze%2FX%2BftzTvqUGbAUxRYONmF%2BSxwFZB%2BsIY2fnDIELIBN%2FWkNRjJoLvPL3GVdnZvDBF1qcSX5h0wV5cVx9q%2BE69EjAI64cDpxTzoU%2BaJF9S%2BxiMVkZBAQk5C7PTmjL6iT0Pvhp6qq52PSKDSEW&X-Amz-Signature=263ae6f15aabb413048ea9176f5bfb47c6fa389d1448c1b015554a62e837de6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDBUZMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICxV0TOjifTSMYiZGfFU6hHn55Cj71d4T8gsW0DUwGCXAiBq1Mn%2Fptv0qkAHSJy8TO2BgrBpPr8np8PnGFPVB24PFSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN7N9qFWMV6XH10IlKtwDwpkrODPTH1B4LcSJ05SLr8C30%2F%2FmtEVID5v0bh7tRVD4hR9AviKKF%2BQ8ZRhrFvYnIv7G4fQoJUzXKNRbhK2CvYSkG4unsYf4p8yHna02%2FFvdGXba0mLLeUZ7SeQ6IxSsmDZtb9SATo8RD54Jc0unNxSSHF3w2bC0IsSjCZZEtpL%2BfkeALCyJVlLOGFFMi8UBmDI5keZFkUvxhzGx4oNbF8c%2BDVm5XvxmloMWR%2B%2FFYK4SCbl8eJL2oogBsCsYzKCTgnPqUYccd5bFxKnwyBChTLwCFUkFrqHzYIXgrxi8IZnznbiYAK7UkrxiLibYaZsVGpBxh4DfM9v4BQHgr%2BXHqajG0Trve3TRE7I%2F29LzCD8TpQ4Hy5xG9WSLMfjhBSNldE5OsPBLFJatCcDYU8wxMr2R0PnGFy5CKHpN6BFiYrEr32KyQSRG%2Fyk9z5iGtCQjp4loOQHdGAJZ%2FDEr9%2Bp9evNuGAKgg%2FzlXLMc3BxY9ZToMWQ4DlKXROLOGcweAZzKjs1MF4MLiNk%2BS2kwhv8dPpO1pQDaXYqXdtOnV9bBEEV03U6z6%2FUqqQNbZDrE4ZRP6DQVBbtNVI9pgn%2FuSTKxyCEkp0UQoWT8Ze4E9tXo6pwP22Hc5vGnTsnuwtIw%2BvrpvwY6pgEVJY08%2F4CmPGVZ9bmO04RvWZF0xq2eVPiWOLKk9QynI0IxCfbmzBaDPAhtVHR9sqy9b%2FyXm4%2FyJJtze%2FX%2BftzTvqUGbAUxRYONmF%2BSxwFZB%2BsIY2fnDIELIBN%2FWkNRjJoLvPL3GVdnZvDBF1qcSX5h0wV5cVx9q%2BE69EjAI64cDpxTzoU%2BaJF9S%2BxiMVkZBAQk5C7PTmjL6iT0Pvhp6qq52PSKDSEW&X-Amz-Signature=6f38caab47f9a68707ca346f136d1e2a8a60865813ed4d2d948e6c6b5a2bb793&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDBUZMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICxV0TOjifTSMYiZGfFU6hHn55Cj71d4T8gsW0DUwGCXAiBq1Mn%2Fptv0qkAHSJy8TO2BgrBpPr8np8PnGFPVB24PFSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN7N9qFWMV6XH10IlKtwDwpkrODPTH1B4LcSJ05SLr8C30%2F%2FmtEVID5v0bh7tRVD4hR9AviKKF%2BQ8ZRhrFvYnIv7G4fQoJUzXKNRbhK2CvYSkG4unsYf4p8yHna02%2FFvdGXba0mLLeUZ7SeQ6IxSsmDZtb9SATo8RD54Jc0unNxSSHF3w2bC0IsSjCZZEtpL%2BfkeALCyJVlLOGFFMi8UBmDI5keZFkUvxhzGx4oNbF8c%2BDVm5XvxmloMWR%2B%2FFYK4SCbl8eJL2oogBsCsYzKCTgnPqUYccd5bFxKnwyBChTLwCFUkFrqHzYIXgrxi8IZnznbiYAK7UkrxiLibYaZsVGpBxh4DfM9v4BQHgr%2BXHqajG0Trve3TRE7I%2F29LzCD8TpQ4Hy5xG9WSLMfjhBSNldE5OsPBLFJatCcDYU8wxMr2R0PnGFy5CKHpN6BFiYrEr32KyQSRG%2Fyk9z5iGtCQjp4loOQHdGAJZ%2FDEr9%2Bp9evNuGAKgg%2FzlXLMc3BxY9ZToMWQ4DlKXROLOGcweAZzKjs1MF4MLiNk%2BS2kwhv8dPpO1pQDaXYqXdtOnV9bBEEV03U6z6%2FUqqQNbZDrE4ZRP6DQVBbtNVI9pgn%2FuSTKxyCEkp0UQoWT8Ze4E9tXo6pwP22Hc5vGnTsnuwtIw%2BvrpvwY6pgEVJY08%2F4CmPGVZ9bmO04RvWZF0xq2eVPiWOLKk9QynI0IxCfbmzBaDPAhtVHR9sqy9b%2FyXm4%2FyJJtze%2FX%2BftzTvqUGbAUxRYONmF%2BSxwFZB%2BsIY2fnDIELIBN%2FWkNRjJoLvPL3GVdnZvDBF1qcSX5h0wV5cVx9q%2BE69EjAI64cDpxTzoU%2BaJF9S%2BxiMVkZBAQk5C7PTmjL6iT0Pvhp6qq52PSKDSEW&X-Amz-Signature=69b518d9a5470eba509abe45c5cac8eeddc2842d20b2512757f48292c46a1346&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDBUZMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICxV0TOjifTSMYiZGfFU6hHn55Cj71d4T8gsW0DUwGCXAiBq1Mn%2Fptv0qkAHSJy8TO2BgrBpPr8np8PnGFPVB24PFSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN7N9qFWMV6XH10IlKtwDwpkrODPTH1B4LcSJ05SLr8C30%2F%2FmtEVID5v0bh7tRVD4hR9AviKKF%2BQ8ZRhrFvYnIv7G4fQoJUzXKNRbhK2CvYSkG4unsYf4p8yHna02%2FFvdGXba0mLLeUZ7SeQ6IxSsmDZtb9SATo8RD54Jc0unNxSSHF3w2bC0IsSjCZZEtpL%2BfkeALCyJVlLOGFFMi8UBmDI5keZFkUvxhzGx4oNbF8c%2BDVm5XvxmloMWR%2B%2FFYK4SCbl8eJL2oogBsCsYzKCTgnPqUYccd5bFxKnwyBChTLwCFUkFrqHzYIXgrxi8IZnznbiYAK7UkrxiLibYaZsVGpBxh4DfM9v4BQHgr%2BXHqajG0Trve3TRE7I%2F29LzCD8TpQ4Hy5xG9WSLMfjhBSNldE5OsPBLFJatCcDYU8wxMr2R0PnGFy5CKHpN6BFiYrEr32KyQSRG%2Fyk9z5iGtCQjp4loOQHdGAJZ%2FDEr9%2Bp9evNuGAKgg%2FzlXLMc3BxY9ZToMWQ4DlKXROLOGcweAZzKjs1MF4MLiNk%2BS2kwhv8dPpO1pQDaXYqXdtOnV9bBEEV03U6z6%2FUqqQNbZDrE4ZRP6DQVBbtNVI9pgn%2FuSTKxyCEkp0UQoWT8Ze4E9tXo6pwP22Hc5vGnTsnuwtIw%2BvrpvwY6pgEVJY08%2F4CmPGVZ9bmO04RvWZF0xq2eVPiWOLKk9QynI0IxCfbmzBaDPAhtVHR9sqy9b%2FyXm4%2FyJJtze%2FX%2BftzTvqUGbAUxRYONmF%2BSxwFZB%2BsIY2fnDIELIBN%2FWkNRjJoLvPL3GVdnZvDBF1qcSX5h0wV5cVx9q%2BE69EjAI64cDpxTzoU%2BaJF9S%2BxiMVkZBAQk5C7PTmjL6iT0Pvhp6qq52PSKDSEW&X-Amz-Signature=c3999d37bbac68994a422beda26fa32b74738701282889937488bf5d35a887cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDBUZMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICxV0TOjifTSMYiZGfFU6hHn55Cj71d4T8gsW0DUwGCXAiBq1Mn%2Fptv0qkAHSJy8TO2BgrBpPr8np8PnGFPVB24PFSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN7N9qFWMV6XH10IlKtwDwpkrODPTH1B4LcSJ05SLr8C30%2F%2FmtEVID5v0bh7tRVD4hR9AviKKF%2BQ8ZRhrFvYnIv7G4fQoJUzXKNRbhK2CvYSkG4unsYf4p8yHna02%2FFvdGXba0mLLeUZ7SeQ6IxSsmDZtb9SATo8RD54Jc0unNxSSHF3w2bC0IsSjCZZEtpL%2BfkeALCyJVlLOGFFMi8UBmDI5keZFkUvxhzGx4oNbF8c%2BDVm5XvxmloMWR%2B%2FFYK4SCbl8eJL2oogBsCsYzKCTgnPqUYccd5bFxKnwyBChTLwCFUkFrqHzYIXgrxi8IZnznbiYAK7UkrxiLibYaZsVGpBxh4DfM9v4BQHgr%2BXHqajG0Trve3TRE7I%2F29LzCD8TpQ4Hy5xG9WSLMfjhBSNldE5OsPBLFJatCcDYU8wxMr2R0PnGFy5CKHpN6BFiYrEr32KyQSRG%2Fyk9z5iGtCQjp4loOQHdGAJZ%2FDEr9%2Bp9evNuGAKgg%2FzlXLMc3BxY9ZToMWQ4DlKXROLOGcweAZzKjs1MF4MLiNk%2BS2kwhv8dPpO1pQDaXYqXdtOnV9bBEEV03U6z6%2FUqqQNbZDrE4ZRP6DQVBbtNVI9pgn%2FuSTKxyCEkp0UQoWT8Ze4E9tXo6pwP22Hc5vGnTsnuwtIw%2BvrpvwY6pgEVJY08%2F4CmPGVZ9bmO04RvWZF0xq2eVPiWOLKk9QynI0IxCfbmzBaDPAhtVHR9sqy9b%2FyXm4%2FyJJtze%2FX%2BftzTvqUGbAUxRYONmF%2BSxwFZB%2BsIY2fnDIELIBN%2FWkNRjJoLvPL3GVdnZvDBF1qcSX5h0wV5cVx9q%2BE69EjAI64cDpxTzoU%2BaJF9S%2BxiMVkZBAQk5C7PTmjL6iT0Pvhp6qq52PSKDSEW&X-Amz-Signature=ddef71bd93a77cecbfc316ddb341f0877cd01461bcf9a56ebd5ff37d229a81f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
