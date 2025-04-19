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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCSCRRR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAYtQNHD72d9H6swiOB6dXDAQXC4XYHTsoA%2FM%2BO7KDgmAiEAmxODBIdDvAmJ8dMzw%2FU3HeGP1nKW5Uv0OSZjoKujqBkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSKALT%2Br7KEj17xNircA%2FCUFbIKY%2FgREgdBMFmvX0jvJqD%2BgDRGeZuAaOZUWKhgimLaUQ6M6o7b3StVUxDFrA1nn%2F9xkcAj56ssCqqgf4vOHQ9aV08W0qrPsCk6%2F3sKMpkJa2Iy4qo5LfdtizIk5cNlJb8k41hlwarCVY4bez4TWopQjReLI0trd46Q0Uld3DYl8Va12R6jetiw9quZDlnLvNAC8hJNpMnqgSqKcJZUAOabjJZCJJq98o%2Frf5ZjtwiR2jpFDBbGV9zu9VC6shkLT0x3VnqCqS5UV%2FOwUj9TpcBUY2qzaO3FtCatMh27fUTVWGwyYAIJdcKiSzg%2FftaVxjCRThK%2F8b6h5lQ6qkyZOh7ZD74GWMdsWm440WGpkOrHAHDuQh2zI80StiYU9fyKlfWkJ47EGUJA6e9%2B1V%2BF4Fc49SvNDx4TXCZ8U0hjrMP5O%2FQmD31Ex9p%2FNp%2Bp1lbvLy1WCJ0xY0JCNscpWvuNFjqX%2F5FBkg%2BxZIYgNBJc0EOSNiQ7Zb0qL%2FbRaLSQ6XNtniTWdAKXf9UGjfvFZu2RT79x%2BPwrnS0pUnneVTt4lOagP5BDeuc1M25K6eN%2BEJBCBlsruULoqJ7j9cN5lHDHYHRhwh5XfWC5a33FJSjyGYaUcjOr7WDXGBDoMMaCj8AGOqUBr1c%2FOg6tMuZsZngB%2F6gOwpbgabCp1DlVXx9dPU9E0uXb%2F%2FNsjOrTAXOSgqgo%2FlziXhz8SwlzyTNjLfTQqxk%2Fcxugxzd6Ydtb6UDCzXErO6WKm7GSOhKGb47GxRj%2Fn4Q5%2FKGJVfSMMf0ER9wWWzji%2BNXgiUnsEwAinzchuIlYdXGXX0Df%2FvXkbFNB1DxqNeneZbaQAm9ORuCpRDx8agYdyMRoXWUe&X-Amz-Signature=d8f1d2211fff04ee9b7760102943503c9b4014f80b7dfc8b1c7dafc6cdb7b9de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCSCRRR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAYtQNHD72d9H6swiOB6dXDAQXC4XYHTsoA%2FM%2BO7KDgmAiEAmxODBIdDvAmJ8dMzw%2FU3HeGP1nKW5Uv0OSZjoKujqBkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSKALT%2Br7KEj17xNircA%2FCUFbIKY%2FgREgdBMFmvX0jvJqD%2BgDRGeZuAaOZUWKhgimLaUQ6M6o7b3StVUxDFrA1nn%2F9xkcAj56ssCqqgf4vOHQ9aV08W0qrPsCk6%2F3sKMpkJa2Iy4qo5LfdtizIk5cNlJb8k41hlwarCVY4bez4TWopQjReLI0trd46Q0Uld3DYl8Va12R6jetiw9quZDlnLvNAC8hJNpMnqgSqKcJZUAOabjJZCJJq98o%2Frf5ZjtwiR2jpFDBbGV9zu9VC6shkLT0x3VnqCqS5UV%2FOwUj9TpcBUY2qzaO3FtCatMh27fUTVWGwyYAIJdcKiSzg%2FftaVxjCRThK%2F8b6h5lQ6qkyZOh7ZD74GWMdsWm440WGpkOrHAHDuQh2zI80StiYU9fyKlfWkJ47EGUJA6e9%2B1V%2BF4Fc49SvNDx4TXCZ8U0hjrMP5O%2FQmD31Ex9p%2FNp%2Bp1lbvLy1WCJ0xY0JCNscpWvuNFjqX%2F5FBkg%2BxZIYgNBJc0EOSNiQ7Zb0qL%2FbRaLSQ6XNtniTWdAKXf9UGjfvFZu2RT79x%2BPwrnS0pUnneVTt4lOagP5BDeuc1M25K6eN%2BEJBCBlsruULoqJ7j9cN5lHDHYHRhwh5XfWC5a33FJSjyGYaUcjOr7WDXGBDoMMaCj8AGOqUBr1c%2FOg6tMuZsZngB%2F6gOwpbgabCp1DlVXx9dPU9E0uXb%2F%2FNsjOrTAXOSgqgo%2FlziXhz8SwlzyTNjLfTQqxk%2Fcxugxzd6Ydtb6UDCzXErO6WKm7GSOhKGb47GxRj%2Fn4Q5%2FKGJVfSMMf0ER9wWWzji%2BNXgiUnsEwAinzchuIlYdXGXX0Df%2FvXkbFNB1DxqNeneZbaQAm9ORuCpRDx8agYdyMRoXWUe&X-Amz-Signature=101f1f5593c37bf1d2a58924a74c99dbcfd46fa65c6e59bbf4daca8af41f4788&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCSCRRR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAYtQNHD72d9H6swiOB6dXDAQXC4XYHTsoA%2FM%2BO7KDgmAiEAmxODBIdDvAmJ8dMzw%2FU3HeGP1nKW5Uv0OSZjoKujqBkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSKALT%2Br7KEj17xNircA%2FCUFbIKY%2FgREgdBMFmvX0jvJqD%2BgDRGeZuAaOZUWKhgimLaUQ6M6o7b3StVUxDFrA1nn%2F9xkcAj56ssCqqgf4vOHQ9aV08W0qrPsCk6%2F3sKMpkJa2Iy4qo5LfdtizIk5cNlJb8k41hlwarCVY4bez4TWopQjReLI0trd46Q0Uld3DYl8Va12R6jetiw9quZDlnLvNAC8hJNpMnqgSqKcJZUAOabjJZCJJq98o%2Frf5ZjtwiR2jpFDBbGV9zu9VC6shkLT0x3VnqCqS5UV%2FOwUj9TpcBUY2qzaO3FtCatMh27fUTVWGwyYAIJdcKiSzg%2FftaVxjCRThK%2F8b6h5lQ6qkyZOh7ZD74GWMdsWm440WGpkOrHAHDuQh2zI80StiYU9fyKlfWkJ47EGUJA6e9%2B1V%2BF4Fc49SvNDx4TXCZ8U0hjrMP5O%2FQmD31Ex9p%2FNp%2Bp1lbvLy1WCJ0xY0JCNscpWvuNFjqX%2F5FBkg%2BxZIYgNBJc0EOSNiQ7Zb0qL%2FbRaLSQ6XNtniTWdAKXf9UGjfvFZu2RT79x%2BPwrnS0pUnneVTt4lOagP5BDeuc1M25K6eN%2BEJBCBlsruULoqJ7j9cN5lHDHYHRhwh5XfWC5a33FJSjyGYaUcjOr7WDXGBDoMMaCj8AGOqUBr1c%2FOg6tMuZsZngB%2F6gOwpbgabCp1DlVXx9dPU9E0uXb%2F%2FNsjOrTAXOSgqgo%2FlziXhz8SwlzyTNjLfTQqxk%2Fcxugxzd6Ydtb6UDCzXErO6WKm7GSOhKGb47GxRj%2Fn4Q5%2FKGJVfSMMf0ER9wWWzji%2BNXgiUnsEwAinzchuIlYdXGXX0Df%2FvXkbFNB1DxqNeneZbaQAm9ORuCpRDx8agYdyMRoXWUe&X-Amz-Signature=fdff1c942240fcb4955ff577837db62ceffba67db48620561b171a9bc7c216d4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCSCRRR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAYtQNHD72d9H6swiOB6dXDAQXC4XYHTsoA%2FM%2BO7KDgmAiEAmxODBIdDvAmJ8dMzw%2FU3HeGP1nKW5Uv0OSZjoKujqBkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSKALT%2Br7KEj17xNircA%2FCUFbIKY%2FgREgdBMFmvX0jvJqD%2BgDRGeZuAaOZUWKhgimLaUQ6M6o7b3StVUxDFrA1nn%2F9xkcAj56ssCqqgf4vOHQ9aV08W0qrPsCk6%2F3sKMpkJa2Iy4qo5LfdtizIk5cNlJb8k41hlwarCVY4bez4TWopQjReLI0trd46Q0Uld3DYl8Va12R6jetiw9quZDlnLvNAC8hJNpMnqgSqKcJZUAOabjJZCJJq98o%2Frf5ZjtwiR2jpFDBbGV9zu9VC6shkLT0x3VnqCqS5UV%2FOwUj9TpcBUY2qzaO3FtCatMh27fUTVWGwyYAIJdcKiSzg%2FftaVxjCRThK%2F8b6h5lQ6qkyZOh7ZD74GWMdsWm440WGpkOrHAHDuQh2zI80StiYU9fyKlfWkJ47EGUJA6e9%2B1V%2BF4Fc49SvNDx4TXCZ8U0hjrMP5O%2FQmD31Ex9p%2FNp%2Bp1lbvLy1WCJ0xY0JCNscpWvuNFjqX%2F5FBkg%2BxZIYgNBJc0EOSNiQ7Zb0qL%2FbRaLSQ6XNtniTWdAKXf9UGjfvFZu2RT79x%2BPwrnS0pUnneVTt4lOagP5BDeuc1M25K6eN%2BEJBCBlsruULoqJ7j9cN5lHDHYHRhwh5XfWC5a33FJSjyGYaUcjOr7WDXGBDoMMaCj8AGOqUBr1c%2FOg6tMuZsZngB%2F6gOwpbgabCp1DlVXx9dPU9E0uXb%2F%2FNsjOrTAXOSgqgo%2FlziXhz8SwlzyTNjLfTQqxk%2Fcxugxzd6Ydtb6UDCzXErO6WKm7GSOhKGb47GxRj%2Fn4Q5%2FKGJVfSMMf0ER9wWWzji%2BNXgiUnsEwAinzchuIlYdXGXX0Df%2FvXkbFNB1DxqNeneZbaQAm9ORuCpRDx8agYdyMRoXWUe&X-Amz-Signature=a4cc0e35232c1f0e156ba59bbc175c0a2703d532b56a7d3603d0cc1e6b6777b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCSCRRR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAYtQNHD72d9H6swiOB6dXDAQXC4XYHTsoA%2FM%2BO7KDgmAiEAmxODBIdDvAmJ8dMzw%2FU3HeGP1nKW5Uv0OSZjoKujqBkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSKALT%2Br7KEj17xNircA%2FCUFbIKY%2FgREgdBMFmvX0jvJqD%2BgDRGeZuAaOZUWKhgimLaUQ6M6o7b3StVUxDFrA1nn%2F9xkcAj56ssCqqgf4vOHQ9aV08W0qrPsCk6%2F3sKMpkJa2Iy4qo5LfdtizIk5cNlJb8k41hlwarCVY4bez4TWopQjReLI0trd46Q0Uld3DYl8Va12R6jetiw9quZDlnLvNAC8hJNpMnqgSqKcJZUAOabjJZCJJq98o%2Frf5ZjtwiR2jpFDBbGV9zu9VC6shkLT0x3VnqCqS5UV%2FOwUj9TpcBUY2qzaO3FtCatMh27fUTVWGwyYAIJdcKiSzg%2FftaVxjCRThK%2F8b6h5lQ6qkyZOh7ZD74GWMdsWm440WGpkOrHAHDuQh2zI80StiYU9fyKlfWkJ47EGUJA6e9%2B1V%2BF4Fc49SvNDx4TXCZ8U0hjrMP5O%2FQmD31Ex9p%2FNp%2Bp1lbvLy1WCJ0xY0JCNscpWvuNFjqX%2F5FBkg%2BxZIYgNBJc0EOSNiQ7Zb0qL%2FbRaLSQ6XNtniTWdAKXf9UGjfvFZu2RT79x%2BPwrnS0pUnneVTt4lOagP5BDeuc1M25K6eN%2BEJBCBlsruULoqJ7j9cN5lHDHYHRhwh5XfWC5a33FJSjyGYaUcjOr7WDXGBDoMMaCj8AGOqUBr1c%2FOg6tMuZsZngB%2F6gOwpbgabCp1DlVXx9dPU9E0uXb%2F%2FNsjOrTAXOSgqgo%2FlziXhz8SwlzyTNjLfTQqxk%2Fcxugxzd6Ydtb6UDCzXErO6WKm7GSOhKGb47GxRj%2Fn4Q5%2FKGJVfSMMf0ER9wWWzji%2BNXgiUnsEwAinzchuIlYdXGXX0Df%2FvXkbFNB1DxqNeneZbaQAm9ORuCpRDx8agYdyMRoXWUe&X-Amz-Signature=ca06d003cc3b5f4645e015f51d1b66e03e2c513128f69e08889a6b010eb23671&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCSCRRR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAYtQNHD72d9H6swiOB6dXDAQXC4XYHTsoA%2FM%2BO7KDgmAiEAmxODBIdDvAmJ8dMzw%2FU3HeGP1nKW5Uv0OSZjoKujqBkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSKALT%2Br7KEj17xNircA%2FCUFbIKY%2FgREgdBMFmvX0jvJqD%2BgDRGeZuAaOZUWKhgimLaUQ6M6o7b3StVUxDFrA1nn%2F9xkcAj56ssCqqgf4vOHQ9aV08W0qrPsCk6%2F3sKMpkJa2Iy4qo5LfdtizIk5cNlJb8k41hlwarCVY4bez4TWopQjReLI0trd46Q0Uld3DYl8Va12R6jetiw9quZDlnLvNAC8hJNpMnqgSqKcJZUAOabjJZCJJq98o%2Frf5ZjtwiR2jpFDBbGV9zu9VC6shkLT0x3VnqCqS5UV%2FOwUj9TpcBUY2qzaO3FtCatMh27fUTVWGwyYAIJdcKiSzg%2FftaVxjCRThK%2F8b6h5lQ6qkyZOh7ZD74GWMdsWm440WGpkOrHAHDuQh2zI80StiYU9fyKlfWkJ47EGUJA6e9%2B1V%2BF4Fc49SvNDx4TXCZ8U0hjrMP5O%2FQmD31Ex9p%2FNp%2Bp1lbvLy1WCJ0xY0JCNscpWvuNFjqX%2F5FBkg%2BxZIYgNBJc0EOSNiQ7Zb0qL%2FbRaLSQ6XNtniTWdAKXf9UGjfvFZu2RT79x%2BPwrnS0pUnneVTt4lOagP5BDeuc1M25K6eN%2BEJBCBlsruULoqJ7j9cN5lHDHYHRhwh5XfWC5a33FJSjyGYaUcjOr7WDXGBDoMMaCj8AGOqUBr1c%2FOg6tMuZsZngB%2F6gOwpbgabCp1DlVXx9dPU9E0uXb%2F%2FNsjOrTAXOSgqgo%2FlziXhz8SwlzyTNjLfTQqxk%2Fcxugxzd6Ydtb6UDCzXErO6WKm7GSOhKGb47GxRj%2Fn4Q5%2FKGJVfSMMf0ER9wWWzji%2BNXgiUnsEwAinzchuIlYdXGXX0Df%2FvXkbFNB1DxqNeneZbaQAm9ORuCpRDx8agYdyMRoXWUe&X-Amz-Signature=76fdcc1ecc089c33531b3fdac21b179f5141f5bc3d4477ff18ad0a91aa4eddc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCSCRRR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAYtQNHD72d9H6swiOB6dXDAQXC4XYHTsoA%2FM%2BO7KDgmAiEAmxODBIdDvAmJ8dMzw%2FU3HeGP1nKW5Uv0OSZjoKujqBkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSKALT%2Br7KEj17xNircA%2FCUFbIKY%2FgREgdBMFmvX0jvJqD%2BgDRGeZuAaOZUWKhgimLaUQ6M6o7b3StVUxDFrA1nn%2F9xkcAj56ssCqqgf4vOHQ9aV08W0qrPsCk6%2F3sKMpkJa2Iy4qo5LfdtizIk5cNlJb8k41hlwarCVY4bez4TWopQjReLI0trd46Q0Uld3DYl8Va12R6jetiw9quZDlnLvNAC8hJNpMnqgSqKcJZUAOabjJZCJJq98o%2Frf5ZjtwiR2jpFDBbGV9zu9VC6shkLT0x3VnqCqS5UV%2FOwUj9TpcBUY2qzaO3FtCatMh27fUTVWGwyYAIJdcKiSzg%2FftaVxjCRThK%2F8b6h5lQ6qkyZOh7ZD74GWMdsWm440WGpkOrHAHDuQh2zI80StiYU9fyKlfWkJ47EGUJA6e9%2B1V%2BF4Fc49SvNDx4TXCZ8U0hjrMP5O%2FQmD31Ex9p%2FNp%2Bp1lbvLy1WCJ0xY0JCNscpWvuNFjqX%2F5FBkg%2BxZIYgNBJc0EOSNiQ7Zb0qL%2FbRaLSQ6XNtniTWdAKXf9UGjfvFZu2RT79x%2BPwrnS0pUnneVTt4lOagP5BDeuc1M25K6eN%2BEJBCBlsruULoqJ7j9cN5lHDHYHRhwh5XfWC5a33FJSjyGYaUcjOr7WDXGBDoMMaCj8AGOqUBr1c%2FOg6tMuZsZngB%2F6gOwpbgabCp1DlVXx9dPU9E0uXb%2F%2FNsjOrTAXOSgqgo%2FlziXhz8SwlzyTNjLfTQqxk%2Fcxugxzd6Ydtb6UDCzXErO6WKm7GSOhKGb47GxRj%2Fn4Q5%2FKGJVfSMMf0ER9wWWzji%2BNXgiUnsEwAinzchuIlYdXGXX0Df%2FvXkbFNB1DxqNeneZbaQAm9ORuCpRDx8agYdyMRoXWUe&X-Amz-Signature=a9d82c1d4ea4326dcc2f669534ddb2733fbc4a6a3282e6fe2ccd3aca0463b14b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCSCRRR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAYtQNHD72d9H6swiOB6dXDAQXC4XYHTsoA%2FM%2BO7KDgmAiEAmxODBIdDvAmJ8dMzw%2FU3HeGP1nKW5Uv0OSZjoKujqBkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSKALT%2Br7KEj17xNircA%2FCUFbIKY%2FgREgdBMFmvX0jvJqD%2BgDRGeZuAaOZUWKhgimLaUQ6M6o7b3StVUxDFrA1nn%2F9xkcAj56ssCqqgf4vOHQ9aV08W0qrPsCk6%2F3sKMpkJa2Iy4qo5LfdtizIk5cNlJb8k41hlwarCVY4bez4TWopQjReLI0trd46Q0Uld3DYl8Va12R6jetiw9quZDlnLvNAC8hJNpMnqgSqKcJZUAOabjJZCJJq98o%2Frf5ZjtwiR2jpFDBbGV9zu9VC6shkLT0x3VnqCqS5UV%2FOwUj9TpcBUY2qzaO3FtCatMh27fUTVWGwyYAIJdcKiSzg%2FftaVxjCRThK%2F8b6h5lQ6qkyZOh7ZD74GWMdsWm440WGpkOrHAHDuQh2zI80StiYU9fyKlfWkJ47EGUJA6e9%2B1V%2BF4Fc49SvNDx4TXCZ8U0hjrMP5O%2FQmD31Ex9p%2FNp%2Bp1lbvLy1WCJ0xY0JCNscpWvuNFjqX%2F5FBkg%2BxZIYgNBJc0EOSNiQ7Zb0qL%2FbRaLSQ6XNtniTWdAKXf9UGjfvFZu2RT79x%2BPwrnS0pUnneVTt4lOagP5BDeuc1M25K6eN%2BEJBCBlsruULoqJ7j9cN5lHDHYHRhwh5XfWC5a33FJSjyGYaUcjOr7WDXGBDoMMaCj8AGOqUBr1c%2FOg6tMuZsZngB%2F6gOwpbgabCp1DlVXx9dPU9E0uXb%2F%2FNsjOrTAXOSgqgo%2FlziXhz8SwlzyTNjLfTQqxk%2Fcxugxzd6Ydtb6UDCzXErO6WKm7GSOhKGb47GxRj%2Fn4Q5%2FKGJVfSMMf0ER9wWWzji%2BNXgiUnsEwAinzchuIlYdXGXX0Df%2FvXkbFNB1DxqNeneZbaQAm9ORuCpRDx8agYdyMRoXWUe&X-Amz-Signature=63b948b07975f37d1e125bccf2511153313a1924f994b27ef500da51a504cffa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
