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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSYI5PK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICYe%2BfMaXFCWVVyzMRRpp%2FuErqgIPmUe03MQIkQROVVUAiAzYAqa730FlyK%2B0eNy8wJDqzC7JS6jz9YnkoLgsJ58iCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMkkZvAt5w32tLOHFbKtwDsRlLVxisbYZ4Q9etRVnyFi3TRS2KHGv0C0sZdqjdLCAcicnhA2WMpzh3fy%2Bhos82DSvJCWkSwEXCNLA2VYlCibzrZqu8dhWwEksUj4YhMNWUy3dnk0d3EgbpFEolybAUWJmZSE%2B0PRdZWjT7xisy%2BZYXjjdzgoP57TVmx4vgNsBPKqeHmL2GGmsa4fKSaeVfL8U92aEsJRslGzmb1n8y6GFYb%2F6UdRtH6ILtoj6it%2F7vM2fxByv9XGDdUs0ox139ojharuN7IirX9ABard2ZTjENZep71DA0DE7dpyVv%2BSsDvL1kOLP6DzIv%2Bu%2B%2BOCNIeBWLPld1B19CPsfPyfBXZU9Lu%2BDHbcEmOEEzIB1bPRldfgzA%2BJ%2F2wwKFF%2B8SV0akPICa5ItGyon9Qt%2BwpejQYXcTZb89J5yk8DSKHDzaJAVSmUoMicGD9nKZ5t%2BERuOWo1oznT532JYkNrWX3bh2VFGUGUutXNUJ3pvyds%2BJkl%2FkG6GIWMJZtDM6OISnFY8oxEHtH5YboFhZ41B9p%2BeBLv6nE5eTU1tl30oZzIvcZvA7QPLPoy7vq6ZXSheE2yDlRA3czATBrseDqOiQNihyF4lzRDQhvQ6IMcWkV1jFj6Zosy4ufh%2B13XXE6Skwmp6VwQY6pgGdoNmnPKbuDAPvJzxE%2FXLjTB3MfoE7x9CaeH3bi%2FqJNAprBy15TksOchKSRzIM2igvflVBKqHmVW%2Bm1PCURmEFwNLTMUR46NVDL9Pm%2FmEJnS7wcl950WVrr4NpW1ARXTYkeNYRYy%2BB4KPX7JvdEOd4avMvo6ILE7ENaaCFs%2BqjOWKEhcA4zFJYAI8jY8kat3vo48UiHg8LDJDI1np3Vxn%2BocZq%2BbOV&X-Amz-Signature=d433d1ad12f79509cae12797b308808115a4b7eee2e3a418e6d94fc19600ef16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSYI5PK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICYe%2BfMaXFCWVVyzMRRpp%2FuErqgIPmUe03MQIkQROVVUAiAzYAqa730FlyK%2B0eNy8wJDqzC7JS6jz9YnkoLgsJ58iCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMkkZvAt5w32tLOHFbKtwDsRlLVxisbYZ4Q9etRVnyFi3TRS2KHGv0C0sZdqjdLCAcicnhA2WMpzh3fy%2Bhos82DSvJCWkSwEXCNLA2VYlCibzrZqu8dhWwEksUj4YhMNWUy3dnk0d3EgbpFEolybAUWJmZSE%2B0PRdZWjT7xisy%2BZYXjjdzgoP57TVmx4vgNsBPKqeHmL2GGmsa4fKSaeVfL8U92aEsJRslGzmb1n8y6GFYb%2F6UdRtH6ILtoj6it%2F7vM2fxByv9XGDdUs0ox139ojharuN7IirX9ABard2ZTjENZep71DA0DE7dpyVv%2BSsDvL1kOLP6DzIv%2Bu%2B%2BOCNIeBWLPld1B19CPsfPyfBXZU9Lu%2BDHbcEmOEEzIB1bPRldfgzA%2BJ%2F2wwKFF%2B8SV0akPICa5ItGyon9Qt%2BwpejQYXcTZb89J5yk8DSKHDzaJAVSmUoMicGD9nKZ5t%2BERuOWo1oznT532JYkNrWX3bh2VFGUGUutXNUJ3pvyds%2BJkl%2FkG6GIWMJZtDM6OISnFY8oxEHtH5YboFhZ41B9p%2BeBLv6nE5eTU1tl30oZzIvcZvA7QPLPoy7vq6ZXSheE2yDlRA3czATBrseDqOiQNihyF4lzRDQhvQ6IMcWkV1jFj6Zosy4ufh%2B13XXE6Skwmp6VwQY6pgGdoNmnPKbuDAPvJzxE%2FXLjTB3MfoE7x9CaeH3bi%2FqJNAprBy15TksOchKSRzIM2igvflVBKqHmVW%2Bm1PCURmEFwNLTMUR46NVDL9Pm%2FmEJnS7wcl950WVrr4NpW1ARXTYkeNYRYy%2BB4KPX7JvdEOd4avMvo6ILE7ENaaCFs%2BqjOWKEhcA4zFJYAI8jY8kat3vo48UiHg8LDJDI1np3Vxn%2BocZq%2BbOV&X-Amz-Signature=413377585fbd1b1e5026ea5b3579406525e4529615847f4028b36855336e9fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSYI5PK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICYe%2BfMaXFCWVVyzMRRpp%2FuErqgIPmUe03MQIkQROVVUAiAzYAqa730FlyK%2B0eNy8wJDqzC7JS6jz9YnkoLgsJ58iCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMkkZvAt5w32tLOHFbKtwDsRlLVxisbYZ4Q9etRVnyFi3TRS2KHGv0C0sZdqjdLCAcicnhA2WMpzh3fy%2Bhos82DSvJCWkSwEXCNLA2VYlCibzrZqu8dhWwEksUj4YhMNWUy3dnk0d3EgbpFEolybAUWJmZSE%2B0PRdZWjT7xisy%2BZYXjjdzgoP57TVmx4vgNsBPKqeHmL2GGmsa4fKSaeVfL8U92aEsJRslGzmb1n8y6GFYb%2F6UdRtH6ILtoj6it%2F7vM2fxByv9XGDdUs0ox139ojharuN7IirX9ABard2ZTjENZep71DA0DE7dpyVv%2BSsDvL1kOLP6DzIv%2Bu%2B%2BOCNIeBWLPld1B19CPsfPyfBXZU9Lu%2BDHbcEmOEEzIB1bPRldfgzA%2BJ%2F2wwKFF%2B8SV0akPICa5ItGyon9Qt%2BwpejQYXcTZb89J5yk8DSKHDzaJAVSmUoMicGD9nKZ5t%2BERuOWo1oznT532JYkNrWX3bh2VFGUGUutXNUJ3pvyds%2BJkl%2FkG6GIWMJZtDM6OISnFY8oxEHtH5YboFhZ41B9p%2BeBLv6nE5eTU1tl30oZzIvcZvA7QPLPoy7vq6ZXSheE2yDlRA3czATBrseDqOiQNihyF4lzRDQhvQ6IMcWkV1jFj6Zosy4ufh%2B13XXE6Skwmp6VwQY6pgGdoNmnPKbuDAPvJzxE%2FXLjTB3MfoE7x9CaeH3bi%2FqJNAprBy15TksOchKSRzIM2igvflVBKqHmVW%2Bm1PCURmEFwNLTMUR46NVDL9Pm%2FmEJnS7wcl950WVrr4NpW1ARXTYkeNYRYy%2BB4KPX7JvdEOd4avMvo6ILE7ENaaCFs%2BqjOWKEhcA4zFJYAI8jY8kat3vo48UiHg8LDJDI1np3Vxn%2BocZq%2BbOV&X-Amz-Signature=3f08bc5714a6b30f031c389ee7d58ab3301e58b93fd221bf1e12111128d56408&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSYI5PK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICYe%2BfMaXFCWVVyzMRRpp%2FuErqgIPmUe03MQIkQROVVUAiAzYAqa730FlyK%2B0eNy8wJDqzC7JS6jz9YnkoLgsJ58iCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMkkZvAt5w32tLOHFbKtwDsRlLVxisbYZ4Q9etRVnyFi3TRS2KHGv0C0sZdqjdLCAcicnhA2WMpzh3fy%2Bhos82DSvJCWkSwEXCNLA2VYlCibzrZqu8dhWwEksUj4YhMNWUy3dnk0d3EgbpFEolybAUWJmZSE%2B0PRdZWjT7xisy%2BZYXjjdzgoP57TVmx4vgNsBPKqeHmL2GGmsa4fKSaeVfL8U92aEsJRslGzmb1n8y6GFYb%2F6UdRtH6ILtoj6it%2F7vM2fxByv9XGDdUs0ox139ojharuN7IirX9ABard2ZTjENZep71DA0DE7dpyVv%2BSsDvL1kOLP6DzIv%2Bu%2B%2BOCNIeBWLPld1B19CPsfPyfBXZU9Lu%2BDHbcEmOEEzIB1bPRldfgzA%2BJ%2F2wwKFF%2B8SV0akPICa5ItGyon9Qt%2BwpejQYXcTZb89J5yk8DSKHDzaJAVSmUoMicGD9nKZ5t%2BERuOWo1oznT532JYkNrWX3bh2VFGUGUutXNUJ3pvyds%2BJkl%2FkG6GIWMJZtDM6OISnFY8oxEHtH5YboFhZ41B9p%2BeBLv6nE5eTU1tl30oZzIvcZvA7QPLPoy7vq6ZXSheE2yDlRA3czATBrseDqOiQNihyF4lzRDQhvQ6IMcWkV1jFj6Zosy4ufh%2B13XXE6Skwmp6VwQY6pgGdoNmnPKbuDAPvJzxE%2FXLjTB3MfoE7x9CaeH3bi%2FqJNAprBy15TksOchKSRzIM2igvflVBKqHmVW%2Bm1PCURmEFwNLTMUR46NVDL9Pm%2FmEJnS7wcl950WVrr4NpW1ARXTYkeNYRYy%2BB4KPX7JvdEOd4avMvo6ILE7ENaaCFs%2BqjOWKEhcA4zFJYAI8jY8kat3vo48UiHg8LDJDI1np3Vxn%2BocZq%2BbOV&X-Amz-Signature=afe7364da3673cfeec46bb6bef591a5d1a2621f351b823f51a5660cca6a9252a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSYI5PK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICYe%2BfMaXFCWVVyzMRRpp%2FuErqgIPmUe03MQIkQROVVUAiAzYAqa730FlyK%2B0eNy8wJDqzC7JS6jz9YnkoLgsJ58iCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMkkZvAt5w32tLOHFbKtwDsRlLVxisbYZ4Q9etRVnyFi3TRS2KHGv0C0sZdqjdLCAcicnhA2WMpzh3fy%2Bhos82DSvJCWkSwEXCNLA2VYlCibzrZqu8dhWwEksUj4YhMNWUy3dnk0d3EgbpFEolybAUWJmZSE%2B0PRdZWjT7xisy%2BZYXjjdzgoP57TVmx4vgNsBPKqeHmL2GGmsa4fKSaeVfL8U92aEsJRslGzmb1n8y6GFYb%2F6UdRtH6ILtoj6it%2F7vM2fxByv9XGDdUs0ox139ojharuN7IirX9ABard2ZTjENZep71DA0DE7dpyVv%2BSsDvL1kOLP6DzIv%2Bu%2B%2BOCNIeBWLPld1B19CPsfPyfBXZU9Lu%2BDHbcEmOEEzIB1bPRldfgzA%2BJ%2F2wwKFF%2B8SV0akPICa5ItGyon9Qt%2BwpejQYXcTZb89J5yk8DSKHDzaJAVSmUoMicGD9nKZ5t%2BERuOWo1oznT532JYkNrWX3bh2VFGUGUutXNUJ3pvyds%2BJkl%2FkG6GIWMJZtDM6OISnFY8oxEHtH5YboFhZ41B9p%2BeBLv6nE5eTU1tl30oZzIvcZvA7QPLPoy7vq6ZXSheE2yDlRA3czATBrseDqOiQNihyF4lzRDQhvQ6IMcWkV1jFj6Zosy4ufh%2B13XXE6Skwmp6VwQY6pgGdoNmnPKbuDAPvJzxE%2FXLjTB3MfoE7x9CaeH3bi%2FqJNAprBy15TksOchKSRzIM2igvflVBKqHmVW%2Bm1PCURmEFwNLTMUR46NVDL9Pm%2FmEJnS7wcl950WVrr4NpW1ARXTYkeNYRYy%2BB4KPX7JvdEOd4avMvo6ILE7ENaaCFs%2BqjOWKEhcA4zFJYAI8jY8kat3vo48UiHg8LDJDI1np3Vxn%2BocZq%2BbOV&X-Amz-Signature=bc645cfca83c76ca2f5390bddc3cdce6ff63caf5503be34a06540cd0810b772c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSYI5PK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICYe%2BfMaXFCWVVyzMRRpp%2FuErqgIPmUe03MQIkQROVVUAiAzYAqa730FlyK%2B0eNy8wJDqzC7JS6jz9YnkoLgsJ58iCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMkkZvAt5w32tLOHFbKtwDsRlLVxisbYZ4Q9etRVnyFi3TRS2KHGv0C0sZdqjdLCAcicnhA2WMpzh3fy%2Bhos82DSvJCWkSwEXCNLA2VYlCibzrZqu8dhWwEksUj4YhMNWUy3dnk0d3EgbpFEolybAUWJmZSE%2B0PRdZWjT7xisy%2BZYXjjdzgoP57TVmx4vgNsBPKqeHmL2GGmsa4fKSaeVfL8U92aEsJRslGzmb1n8y6GFYb%2F6UdRtH6ILtoj6it%2F7vM2fxByv9XGDdUs0ox139ojharuN7IirX9ABard2ZTjENZep71DA0DE7dpyVv%2BSsDvL1kOLP6DzIv%2Bu%2B%2BOCNIeBWLPld1B19CPsfPyfBXZU9Lu%2BDHbcEmOEEzIB1bPRldfgzA%2BJ%2F2wwKFF%2B8SV0akPICa5ItGyon9Qt%2BwpejQYXcTZb89J5yk8DSKHDzaJAVSmUoMicGD9nKZ5t%2BERuOWo1oznT532JYkNrWX3bh2VFGUGUutXNUJ3pvyds%2BJkl%2FkG6GIWMJZtDM6OISnFY8oxEHtH5YboFhZ41B9p%2BeBLv6nE5eTU1tl30oZzIvcZvA7QPLPoy7vq6ZXSheE2yDlRA3czATBrseDqOiQNihyF4lzRDQhvQ6IMcWkV1jFj6Zosy4ufh%2B13XXE6Skwmp6VwQY6pgGdoNmnPKbuDAPvJzxE%2FXLjTB3MfoE7x9CaeH3bi%2FqJNAprBy15TksOchKSRzIM2igvflVBKqHmVW%2Bm1PCURmEFwNLTMUR46NVDL9Pm%2FmEJnS7wcl950WVrr4NpW1ARXTYkeNYRYy%2BB4KPX7JvdEOd4avMvo6ILE7ENaaCFs%2BqjOWKEhcA4zFJYAI8jY8kat3vo48UiHg8LDJDI1np3Vxn%2BocZq%2BbOV&X-Amz-Signature=6222d1afe5e0b4aa4c1b31f54fd3effdedd258928b1e75961e9b40ce9ac59fda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSYI5PK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICYe%2BfMaXFCWVVyzMRRpp%2FuErqgIPmUe03MQIkQROVVUAiAzYAqa730FlyK%2B0eNy8wJDqzC7JS6jz9YnkoLgsJ58iCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMkkZvAt5w32tLOHFbKtwDsRlLVxisbYZ4Q9etRVnyFi3TRS2KHGv0C0sZdqjdLCAcicnhA2WMpzh3fy%2Bhos82DSvJCWkSwEXCNLA2VYlCibzrZqu8dhWwEksUj4YhMNWUy3dnk0d3EgbpFEolybAUWJmZSE%2B0PRdZWjT7xisy%2BZYXjjdzgoP57TVmx4vgNsBPKqeHmL2GGmsa4fKSaeVfL8U92aEsJRslGzmb1n8y6GFYb%2F6UdRtH6ILtoj6it%2F7vM2fxByv9XGDdUs0ox139ojharuN7IirX9ABard2ZTjENZep71DA0DE7dpyVv%2BSsDvL1kOLP6DzIv%2Bu%2B%2BOCNIeBWLPld1B19CPsfPyfBXZU9Lu%2BDHbcEmOEEzIB1bPRldfgzA%2BJ%2F2wwKFF%2B8SV0akPICa5ItGyon9Qt%2BwpejQYXcTZb89J5yk8DSKHDzaJAVSmUoMicGD9nKZ5t%2BERuOWo1oznT532JYkNrWX3bh2VFGUGUutXNUJ3pvyds%2BJkl%2FkG6GIWMJZtDM6OISnFY8oxEHtH5YboFhZ41B9p%2BeBLv6nE5eTU1tl30oZzIvcZvA7QPLPoy7vq6ZXSheE2yDlRA3czATBrseDqOiQNihyF4lzRDQhvQ6IMcWkV1jFj6Zosy4ufh%2B13XXE6Skwmp6VwQY6pgGdoNmnPKbuDAPvJzxE%2FXLjTB3MfoE7x9CaeH3bi%2FqJNAprBy15TksOchKSRzIM2igvflVBKqHmVW%2Bm1PCURmEFwNLTMUR46NVDL9Pm%2FmEJnS7wcl950WVrr4NpW1ARXTYkeNYRYy%2BB4KPX7JvdEOd4avMvo6ILE7ENaaCFs%2BqjOWKEhcA4zFJYAI8jY8kat3vo48UiHg8LDJDI1np3Vxn%2BocZq%2BbOV&X-Amz-Signature=022bffd6898e143e6201207297d904ed2a1b939acd5fe20d0f8ef1cbd14afe1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSYI5PK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCICYe%2BfMaXFCWVVyzMRRpp%2FuErqgIPmUe03MQIkQROVVUAiAzYAqa730FlyK%2B0eNy8wJDqzC7JS6jz9YnkoLgsJ58iCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMkkZvAt5w32tLOHFbKtwDsRlLVxisbYZ4Q9etRVnyFi3TRS2KHGv0C0sZdqjdLCAcicnhA2WMpzh3fy%2Bhos82DSvJCWkSwEXCNLA2VYlCibzrZqu8dhWwEksUj4YhMNWUy3dnk0d3EgbpFEolybAUWJmZSE%2B0PRdZWjT7xisy%2BZYXjjdzgoP57TVmx4vgNsBPKqeHmL2GGmsa4fKSaeVfL8U92aEsJRslGzmb1n8y6GFYb%2F6UdRtH6ILtoj6it%2F7vM2fxByv9XGDdUs0ox139ojharuN7IirX9ABard2ZTjENZep71DA0DE7dpyVv%2BSsDvL1kOLP6DzIv%2Bu%2B%2BOCNIeBWLPld1B19CPsfPyfBXZU9Lu%2BDHbcEmOEEzIB1bPRldfgzA%2BJ%2F2wwKFF%2B8SV0akPICa5ItGyon9Qt%2BwpejQYXcTZb89J5yk8DSKHDzaJAVSmUoMicGD9nKZ5t%2BERuOWo1oznT532JYkNrWX3bh2VFGUGUutXNUJ3pvyds%2BJkl%2FkG6GIWMJZtDM6OISnFY8oxEHtH5YboFhZ41B9p%2BeBLv6nE5eTU1tl30oZzIvcZvA7QPLPoy7vq6ZXSheE2yDlRA3czATBrseDqOiQNihyF4lzRDQhvQ6IMcWkV1jFj6Zosy4ufh%2B13XXE6Skwmp6VwQY6pgGdoNmnPKbuDAPvJzxE%2FXLjTB3MfoE7x9CaeH3bi%2FqJNAprBy15TksOchKSRzIM2igvflVBKqHmVW%2Bm1PCURmEFwNLTMUR46NVDL9Pm%2FmEJnS7wcl950WVrr4NpW1ARXTYkeNYRYy%2BB4KPX7JvdEOd4avMvo6ILE7ENaaCFs%2BqjOWKEhcA4zFJYAI8jY8kat3vo48UiHg8LDJDI1np3Vxn%2BocZq%2BbOV&X-Amz-Signature=f6332ab6cae9674cf49851b01be5e9b9f8052c3f2da04acc4af6a55aa7b2744f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
