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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPLOGIR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDnLFMwi2MVjI4843Ovly0lXw8Gbh8KiqD%2FO1f1Yx6ubAIhAMY3Xi3tB9VRqVtH17UJwlHCqhr3OZN%2FVR4xIJt%2BKz1GKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWCz4cV9fZlVIM9noq3AOLL2U9VNeFp6W5MNI5d%2BsjHVm9ccb%2BqfyWd8mOUiEGRms1Sz1IONFyxtrkvqiLGbj7c9bRMjaYDwSniJUQ9SQ%2F0x%2FJr5gyy%2Fw8He1CosGEBKU2pibnDRHP%2FhhrdQ80vPNQb6WNiOOeN7UE3erMkDPUyFfBd66YQFDU0W50YxOlyRCW%2FBnpWzoFLjSxNnXh4n%2F0CFub6gAriWzgSuULnBxOsb7Vje%2B34XtxmVa3osKDJvY6AVixEVZiXnHDGJhBS4E%2B7YPsObgJVqFK5FdlVjvpwISuHe%2BxweZGQicrJrcL8gqmcqxmNlwYSJn%2Bvvp4rH6%2B49mazscrzyg6WmZHFbx3kOFxIZM8PSnSXnF4HHaTihULwz5en9NzCt72%2FbLu1N56ka3HY%2BvgoUKdz7d%2BZEzcHppjA02PaoUs1wm9W1EaQ4O%2BJ5wmZEndSDHpvEGFbe2bKZNvCRAVJQvfzly4u5P0jqZUSlW6nVbcTSsjt20KCIa%2BXaqaItJD2X3tPyvmAjGMc2yUovoO20RzV4tu7HrytZ%2F2A7vEHOWKsS0w%2FYyaNVHo7cObb5cA3pHioNLbvhQt2LCQsi8ENMzOw%2F17KzGkfsJUaoQoeHo4Kjtp9Y9Hm5iXKgv5%2F2W%2BgYH%2BjDCj4J7ABjqkAdcZAnQn6327Yf%2Fq2p%2BQiyjlVGT9vmyLqKsRsHP3BISMo7%2BqayyQXwiHFc%2FBxKA4oOLhvvSLZh3KP2K85qHdkpUy%2B%2BAM7MQUZI3yP%2FyUPoMAT9ZdWM34v5KhajkIBBhLtlBftZe%2FQlDF3E4eGoxwK9T1hRzYv8NR5J%2FNJCZCu0IGBO0FC7MqyqUA8WCjF1ggHpvTQeV%2F2R0uIpLe2KyB8uYF9CeI&X-Amz-Signature=631b0e684ab3b7ac4aad2c5940f86c7ceab75aa9fd6e0e3f0e9573cf44e6cfd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPLOGIR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDnLFMwi2MVjI4843Ovly0lXw8Gbh8KiqD%2FO1f1Yx6ubAIhAMY3Xi3tB9VRqVtH17UJwlHCqhr3OZN%2FVR4xIJt%2BKz1GKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWCz4cV9fZlVIM9noq3AOLL2U9VNeFp6W5MNI5d%2BsjHVm9ccb%2BqfyWd8mOUiEGRms1Sz1IONFyxtrkvqiLGbj7c9bRMjaYDwSniJUQ9SQ%2F0x%2FJr5gyy%2Fw8He1CosGEBKU2pibnDRHP%2FhhrdQ80vPNQb6WNiOOeN7UE3erMkDPUyFfBd66YQFDU0W50YxOlyRCW%2FBnpWzoFLjSxNnXh4n%2F0CFub6gAriWzgSuULnBxOsb7Vje%2B34XtxmVa3osKDJvY6AVixEVZiXnHDGJhBS4E%2B7YPsObgJVqFK5FdlVjvpwISuHe%2BxweZGQicrJrcL8gqmcqxmNlwYSJn%2Bvvp4rH6%2B49mazscrzyg6WmZHFbx3kOFxIZM8PSnSXnF4HHaTihULwz5en9NzCt72%2FbLu1N56ka3HY%2BvgoUKdz7d%2BZEzcHppjA02PaoUs1wm9W1EaQ4O%2BJ5wmZEndSDHpvEGFbe2bKZNvCRAVJQvfzly4u5P0jqZUSlW6nVbcTSsjt20KCIa%2BXaqaItJD2X3tPyvmAjGMc2yUovoO20RzV4tu7HrytZ%2F2A7vEHOWKsS0w%2FYyaNVHo7cObb5cA3pHioNLbvhQt2LCQsi8ENMzOw%2F17KzGkfsJUaoQoeHo4Kjtp9Y9Hm5iXKgv5%2F2W%2BgYH%2BjDCj4J7ABjqkAdcZAnQn6327Yf%2Fq2p%2BQiyjlVGT9vmyLqKsRsHP3BISMo7%2BqayyQXwiHFc%2FBxKA4oOLhvvSLZh3KP2K85qHdkpUy%2B%2BAM7MQUZI3yP%2FyUPoMAT9ZdWM34v5KhajkIBBhLtlBftZe%2FQlDF3E4eGoxwK9T1hRzYv8NR5J%2FNJCZCu0IGBO0FC7MqyqUA8WCjF1ggHpvTQeV%2F2R0uIpLe2KyB8uYF9CeI&X-Amz-Signature=5774241d91f4f75603596557d838cf67d7f12cace1aadfae06eea1bbd45af2c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPLOGIR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDnLFMwi2MVjI4843Ovly0lXw8Gbh8KiqD%2FO1f1Yx6ubAIhAMY3Xi3tB9VRqVtH17UJwlHCqhr3OZN%2FVR4xIJt%2BKz1GKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWCz4cV9fZlVIM9noq3AOLL2U9VNeFp6W5MNI5d%2BsjHVm9ccb%2BqfyWd8mOUiEGRms1Sz1IONFyxtrkvqiLGbj7c9bRMjaYDwSniJUQ9SQ%2F0x%2FJr5gyy%2Fw8He1CosGEBKU2pibnDRHP%2FhhrdQ80vPNQb6WNiOOeN7UE3erMkDPUyFfBd66YQFDU0W50YxOlyRCW%2FBnpWzoFLjSxNnXh4n%2F0CFub6gAriWzgSuULnBxOsb7Vje%2B34XtxmVa3osKDJvY6AVixEVZiXnHDGJhBS4E%2B7YPsObgJVqFK5FdlVjvpwISuHe%2BxweZGQicrJrcL8gqmcqxmNlwYSJn%2Bvvp4rH6%2B49mazscrzyg6WmZHFbx3kOFxIZM8PSnSXnF4HHaTihULwz5en9NzCt72%2FbLu1N56ka3HY%2BvgoUKdz7d%2BZEzcHppjA02PaoUs1wm9W1EaQ4O%2BJ5wmZEndSDHpvEGFbe2bKZNvCRAVJQvfzly4u5P0jqZUSlW6nVbcTSsjt20KCIa%2BXaqaItJD2X3tPyvmAjGMc2yUovoO20RzV4tu7HrytZ%2F2A7vEHOWKsS0w%2FYyaNVHo7cObb5cA3pHioNLbvhQt2LCQsi8ENMzOw%2F17KzGkfsJUaoQoeHo4Kjtp9Y9Hm5iXKgv5%2F2W%2BgYH%2BjDCj4J7ABjqkAdcZAnQn6327Yf%2Fq2p%2BQiyjlVGT9vmyLqKsRsHP3BISMo7%2BqayyQXwiHFc%2FBxKA4oOLhvvSLZh3KP2K85qHdkpUy%2B%2BAM7MQUZI3yP%2FyUPoMAT9ZdWM34v5KhajkIBBhLtlBftZe%2FQlDF3E4eGoxwK9T1hRzYv8NR5J%2FNJCZCu0IGBO0FC7MqyqUA8WCjF1ggHpvTQeV%2F2R0uIpLe2KyB8uYF9CeI&X-Amz-Signature=eadc1a59bc5f960be30b5ee209eef7add93b3b269cb574cd4b5fda7001efd741&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPLOGIR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDnLFMwi2MVjI4843Ovly0lXw8Gbh8KiqD%2FO1f1Yx6ubAIhAMY3Xi3tB9VRqVtH17UJwlHCqhr3OZN%2FVR4xIJt%2BKz1GKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWCz4cV9fZlVIM9noq3AOLL2U9VNeFp6W5MNI5d%2BsjHVm9ccb%2BqfyWd8mOUiEGRms1Sz1IONFyxtrkvqiLGbj7c9bRMjaYDwSniJUQ9SQ%2F0x%2FJr5gyy%2Fw8He1CosGEBKU2pibnDRHP%2FhhrdQ80vPNQb6WNiOOeN7UE3erMkDPUyFfBd66YQFDU0W50YxOlyRCW%2FBnpWzoFLjSxNnXh4n%2F0CFub6gAriWzgSuULnBxOsb7Vje%2B34XtxmVa3osKDJvY6AVixEVZiXnHDGJhBS4E%2B7YPsObgJVqFK5FdlVjvpwISuHe%2BxweZGQicrJrcL8gqmcqxmNlwYSJn%2Bvvp4rH6%2B49mazscrzyg6WmZHFbx3kOFxIZM8PSnSXnF4HHaTihULwz5en9NzCt72%2FbLu1N56ka3HY%2BvgoUKdz7d%2BZEzcHppjA02PaoUs1wm9W1EaQ4O%2BJ5wmZEndSDHpvEGFbe2bKZNvCRAVJQvfzly4u5P0jqZUSlW6nVbcTSsjt20KCIa%2BXaqaItJD2X3tPyvmAjGMc2yUovoO20RzV4tu7HrytZ%2F2A7vEHOWKsS0w%2FYyaNVHo7cObb5cA3pHioNLbvhQt2LCQsi8ENMzOw%2F17KzGkfsJUaoQoeHo4Kjtp9Y9Hm5iXKgv5%2F2W%2BgYH%2BjDCj4J7ABjqkAdcZAnQn6327Yf%2Fq2p%2BQiyjlVGT9vmyLqKsRsHP3BISMo7%2BqayyQXwiHFc%2FBxKA4oOLhvvSLZh3KP2K85qHdkpUy%2B%2BAM7MQUZI3yP%2FyUPoMAT9ZdWM34v5KhajkIBBhLtlBftZe%2FQlDF3E4eGoxwK9T1hRzYv8NR5J%2FNJCZCu0IGBO0FC7MqyqUA8WCjF1ggHpvTQeV%2F2R0uIpLe2KyB8uYF9CeI&X-Amz-Signature=6794f080bce425c80e1c05ca6ad3b85179915543c06cdfa1ad1fc8752eab92f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPLOGIR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDnLFMwi2MVjI4843Ovly0lXw8Gbh8KiqD%2FO1f1Yx6ubAIhAMY3Xi3tB9VRqVtH17UJwlHCqhr3OZN%2FVR4xIJt%2BKz1GKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWCz4cV9fZlVIM9noq3AOLL2U9VNeFp6W5MNI5d%2BsjHVm9ccb%2BqfyWd8mOUiEGRms1Sz1IONFyxtrkvqiLGbj7c9bRMjaYDwSniJUQ9SQ%2F0x%2FJr5gyy%2Fw8He1CosGEBKU2pibnDRHP%2FhhrdQ80vPNQb6WNiOOeN7UE3erMkDPUyFfBd66YQFDU0W50YxOlyRCW%2FBnpWzoFLjSxNnXh4n%2F0CFub6gAriWzgSuULnBxOsb7Vje%2B34XtxmVa3osKDJvY6AVixEVZiXnHDGJhBS4E%2B7YPsObgJVqFK5FdlVjvpwISuHe%2BxweZGQicrJrcL8gqmcqxmNlwYSJn%2Bvvp4rH6%2B49mazscrzyg6WmZHFbx3kOFxIZM8PSnSXnF4HHaTihULwz5en9NzCt72%2FbLu1N56ka3HY%2BvgoUKdz7d%2BZEzcHppjA02PaoUs1wm9W1EaQ4O%2BJ5wmZEndSDHpvEGFbe2bKZNvCRAVJQvfzly4u5P0jqZUSlW6nVbcTSsjt20KCIa%2BXaqaItJD2X3tPyvmAjGMc2yUovoO20RzV4tu7HrytZ%2F2A7vEHOWKsS0w%2FYyaNVHo7cObb5cA3pHioNLbvhQt2LCQsi8ENMzOw%2F17KzGkfsJUaoQoeHo4Kjtp9Y9Hm5iXKgv5%2F2W%2BgYH%2BjDCj4J7ABjqkAdcZAnQn6327Yf%2Fq2p%2BQiyjlVGT9vmyLqKsRsHP3BISMo7%2BqayyQXwiHFc%2FBxKA4oOLhvvSLZh3KP2K85qHdkpUy%2B%2BAM7MQUZI3yP%2FyUPoMAT9ZdWM34v5KhajkIBBhLtlBftZe%2FQlDF3E4eGoxwK9T1hRzYv8NR5J%2FNJCZCu0IGBO0FC7MqyqUA8WCjF1ggHpvTQeV%2F2R0uIpLe2KyB8uYF9CeI&X-Amz-Signature=9df1ad18c07166c256a3470608b582bc711b5f2a6529b3ab83a0056849d2f6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPLOGIR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDnLFMwi2MVjI4843Ovly0lXw8Gbh8KiqD%2FO1f1Yx6ubAIhAMY3Xi3tB9VRqVtH17UJwlHCqhr3OZN%2FVR4xIJt%2BKz1GKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWCz4cV9fZlVIM9noq3AOLL2U9VNeFp6W5MNI5d%2BsjHVm9ccb%2BqfyWd8mOUiEGRms1Sz1IONFyxtrkvqiLGbj7c9bRMjaYDwSniJUQ9SQ%2F0x%2FJr5gyy%2Fw8He1CosGEBKU2pibnDRHP%2FhhrdQ80vPNQb6WNiOOeN7UE3erMkDPUyFfBd66YQFDU0W50YxOlyRCW%2FBnpWzoFLjSxNnXh4n%2F0CFub6gAriWzgSuULnBxOsb7Vje%2B34XtxmVa3osKDJvY6AVixEVZiXnHDGJhBS4E%2B7YPsObgJVqFK5FdlVjvpwISuHe%2BxweZGQicrJrcL8gqmcqxmNlwYSJn%2Bvvp4rH6%2B49mazscrzyg6WmZHFbx3kOFxIZM8PSnSXnF4HHaTihULwz5en9NzCt72%2FbLu1N56ka3HY%2BvgoUKdz7d%2BZEzcHppjA02PaoUs1wm9W1EaQ4O%2BJ5wmZEndSDHpvEGFbe2bKZNvCRAVJQvfzly4u5P0jqZUSlW6nVbcTSsjt20KCIa%2BXaqaItJD2X3tPyvmAjGMc2yUovoO20RzV4tu7HrytZ%2F2A7vEHOWKsS0w%2FYyaNVHo7cObb5cA3pHioNLbvhQt2LCQsi8ENMzOw%2F17KzGkfsJUaoQoeHo4Kjtp9Y9Hm5iXKgv5%2F2W%2BgYH%2BjDCj4J7ABjqkAdcZAnQn6327Yf%2Fq2p%2BQiyjlVGT9vmyLqKsRsHP3BISMo7%2BqayyQXwiHFc%2FBxKA4oOLhvvSLZh3KP2K85qHdkpUy%2B%2BAM7MQUZI3yP%2FyUPoMAT9ZdWM34v5KhajkIBBhLtlBftZe%2FQlDF3E4eGoxwK9T1hRzYv8NR5J%2FNJCZCu0IGBO0FC7MqyqUA8WCjF1ggHpvTQeV%2F2R0uIpLe2KyB8uYF9CeI&X-Amz-Signature=ac894fb734df3ddaf9345d5bc5e1987e813d596d9840148dcf6fb0ce708ba499&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPLOGIR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDnLFMwi2MVjI4843Ovly0lXw8Gbh8KiqD%2FO1f1Yx6ubAIhAMY3Xi3tB9VRqVtH17UJwlHCqhr3OZN%2FVR4xIJt%2BKz1GKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWCz4cV9fZlVIM9noq3AOLL2U9VNeFp6W5MNI5d%2BsjHVm9ccb%2BqfyWd8mOUiEGRms1Sz1IONFyxtrkvqiLGbj7c9bRMjaYDwSniJUQ9SQ%2F0x%2FJr5gyy%2Fw8He1CosGEBKU2pibnDRHP%2FhhrdQ80vPNQb6WNiOOeN7UE3erMkDPUyFfBd66YQFDU0W50YxOlyRCW%2FBnpWzoFLjSxNnXh4n%2F0CFub6gAriWzgSuULnBxOsb7Vje%2B34XtxmVa3osKDJvY6AVixEVZiXnHDGJhBS4E%2B7YPsObgJVqFK5FdlVjvpwISuHe%2BxweZGQicrJrcL8gqmcqxmNlwYSJn%2Bvvp4rH6%2B49mazscrzyg6WmZHFbx3kOFxIZM8PSnSXnF4HHaTihULwz5en9NzCt72%2FbLu1N56ka3HY%2BvgoUKdz7d%2BZEzcHppjA02PaoUs1wm9W1EaQ4O%2BJ5wmZEndSDHpvEGFbe2bKZNvCRAVJQvfzly4u5P0jqZUSlW6nVbcTSsjt20KCIa%2BXaqaItJD2X3tPyvmAjGMc2yUovoO20RzV4tu7HrytZ%2F2A7vEHOWKsS0w%2FYyaNVHo7cObb5cA3pHioNLbvhQt2LCQsi8ENMzOw%2F17KzGkfsJUaoQoeHo4Kjtp9Y9Hm5iXKgv5%2F2W%2BgYH%2BjDCj4J7ABjqkAdcZAnQn6327Yf%2Fq2p%2BQiyjlVGT9vmyLqKsRsHP3BISMo7%2BqayyQXwiHFc%2FBxKA4oOLhvvSLZh3KP2K85qHdkpUy%2B%2BAM7MQUZI3yP%2FyUPoMAT9ZdWM34v5KhajkIBBhLtlBftZe%2FQlDF3E4eGoxwK9T1hRzYv8NR5J%2FNJCZCu0IGBO0FC7MqyqUA8WCjF1ggHpvTQeV%2F2R0uIpLe2KyB8uYF9CeI&X-Amz-Signature=dd712e414b903b9d3c3c7b6015a2d48782e642aaff868b15aac39d38e42d4e39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPLOGIR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDnLFMwi2MVjI4843Ovly0lXw8Gbh8KiqD%2FO1f1Yx6ubAIhAMY3Xi3tB9VRqVtH17UJwlHCqhr3OZN%2FVR4xIJt%2BKz1GKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWCz4cV9fZlVIM9noq3AOLL2U9VNeFp6W5MNI5d%2BsjHVm9ccb%2BqfyWd8mOUiEGRms1Sz1IONFyxtrkvqiLGbj7c9bRMjaYDwSniJUQ9SQ%2F0x%2FJr5gyy%2Fw8He1CosGEBKU2pibnDRHP%2FhhrdQ80vPNQb6WNiOOeN7UE3erMkDPUyFfBd66YQFDU0W50YxOlyRCW%2FBnpWzoFLjSxNnXh4n%2F0CFub6gAriWzgSuULnBxOsb7Vje%2B34XtxmVa3osKDJvY6AVixEVZiXnHDGJhBS4E%2B7YPsObgJVqFK5FdlVjvpwISuHe%2BxweZGQicrJrcL8gqmcqxmNlwYSJn%2Bvvp4rH6%2B49mazscrzyg6WmZHFbx3kOFxIZM8PSnSXnF4HHaTihULwz5en9NzCt72%2FbLu1N56ka3HY%2BvgoUKdz7d%2BZEzcHppjA02PaoUs1wm9W1EaQ4O%2BJ5wmZEndSDHpvEGFbe2bKZNvCRAVJQvfzly4u5P0jqZUSlW6nVbcTSsjt20KCIa%2BXaqaItJD2X3tPyvmAjGMc2yUovoO20RzV4tu7HrytZ%2F2A7vEHOWKsS0w%2FYyaNVHo7cObb5cA3pHioNLbvhQt2LCQsi8ENMzOw%2F17KzGkfsJUaoQoeHo4Kjtp9Y9Hm5iXKgv5%2F2W%2BgYH%2BjDCj4J7ABjqkAdcZAnQn6327Yf%2Fq2p%2BQiyjlVGT9vmyLqKsRsHP3BISMo7%2BqayyQXwiHFc%2FBxKA4oOLhvvSLZh3KP2K85qHdkpUy%2B%2BAM7MQUZI3yP%2FyUPoMAT9ZdWM34v5KhajkIBBhLtlBftZe%2FQlDF3E4eGoxwK9T1hRzYv8NR5J%2FNJCZCu0IGBO0FC7MqyqUA8WCjF1ggHpvTQeV%2F2R0uIpLe2KyB8uYF9CeI&X-Amz-Signature=a01e137cdffdca03703ef0f76ff2eaa997731616045f55beb15a3c0e39a97de2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
