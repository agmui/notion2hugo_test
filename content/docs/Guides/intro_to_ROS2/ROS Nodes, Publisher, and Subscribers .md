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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ7BIWF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDh7tlQ030QsMJSVu4IVyRiDd%2F4E6tvmSeUZ2EGSwKvnwIgUVCOX4VjidIiJ29DStzmBHmi5%2BEiQuxLI1S4zu06h%2BUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKL4PelcKHjWM5rYdircA%2FqNFZBekMZxlAorfhriL1m0VHheKJDlYChXMQD2ee4oWjiwdVbZcqzVyzrhwIPa02HLOrwDouPeEIc16%2Fx7LJcaVhZfobeCsxpJdDuYHWYI93FqfA%2FJDCa2KJ0htr%2FntC3s1DSK9FjjJAV6gQQrEoU1oOovSZiy7sr2NWJfj8dFC5%2FJTMrA689kP5cq2dsqCiyk3zgd4WWJUnOpkapJnW46HfsorvIAzxc9ae0%2BxQhiV7p65kv3PtsWxc4NGVpO365OiH5kP8TKAKRD3VTtjOGPzWwBolOtkgWFSg81SXEZFvx8VbU3BS2JcMCc6QCclUYtTgkbokR0WEp9onJWVaJe8YHZWV8wiABI1z24eALe2Ik%2BN1yeZGMIZU6oP5L%2BGwOccNQ%2BrkAa7UwQU%2FYdcGeOKskYNAx40myMf3tYobCAPBj1KGcs%2FfWnjaS9t5XsCP9Olilg9IjjjeFz3JS764xuVacdN%2BgHjEJ5F1lKq4DiEm2yKl7Oz9dmZh1tO4Cs3x%2Fz%2FZSC0XsSNj4f4ZBc15amcdfcoDpgs3krFVAjcyPIP3W4NkDsho8Gxd48gmVbQhK%2FYgx9ZxAvwFlouaXg6zkMKcyQVWXcSxG9uBWB8lKJPs5PHeURPaPaP7%2BoMPfQ970GOqUB%2FHuCZmbMlswYxaF40%2FFLezPtcKdFgus5YPjfUZk7vF4OBQu%2BJp5QDNBL0i929ur%2B%2FBEh6n7A2A5tagdyqKxidcpCu2QJMqFtmZnJY65x6BJZjGWGh2LvHmQ33xvxL8v7Gx%2Fnk5zp2indfOEaP07euz%2Bhb5TMovE70emuhy94FnBfoZU%2Bb6hBtNGGtQOW4mXj1%2Bk0KOlB6MIoeE8TDPTb8OUraBmI&X-Amz-Signature=a21ead3b9add3602b0de7d96166d04adf0d4b5d17d7d562011d0c60267066631&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ7BIWF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDh7tlQ030QsMJSVu4IVyRiDd%2F4E6tvmSeUZ2EGSwKvnwIgUVCOX4VjidIiJ29DStzmBHmi5%2BEiQuxLI1S4zu06h%2BUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKL4PelcKHjWM5rYdircA%2FqNFZBekMZxlAorfhriL1m0VHheKJDlYChXMQD2ee4oWjiwdVbZcqzVyzrhwIPa02HLOrwDouPeEIc16%2Fx7LJcaVhZfobeCsxpJdDuYHWYI93FqfA%2FJDCa2KJ0htr%2FntC3s1DSK9FjjJAV6gQQrEoU1oOovSZiy7sr2NWJfj8dFC5%2FJTMrA689kP5cq2dsqCiyk3zgd4WWJUnOpkapJnW46HfsorvIAzxc9ae0%2BxQhiV7p65kv3PtsWxc4NGVpO365OiH5kP8TKAKRD3VTtjOGPzWwBolOtkgWFSg81SXEZFvx8VbU3BS2JcMCc6QCclUYtTgkbokR0WEp9onJWVaJe8YHZWV8wiABI1z24eALe2Ik%2BN1yeZGMIZU6oP5L%2BGwOccNQ%2BrkAa7UwQU%2FYdcGeOKskYNAx40myMf3tYobCAPBj1KGcs%2FfWnjaS9t5XsCP9Olilg9IjjjeFz3JS764xuVacdN%2BgHjEJ5F1lKq4DiEm2yKl7Oz9dmZh1tO4Cs3x%2Fz%2FZSC0XsSNj4f4ZBc15amcdfcoDpgs3krFVAjcyPIP3W4NkDsho8Gxd48gmVbQhK%2FYgx9ZxAvwFlouaXg6zkMKcyQVWXcSxG9uBWB8lKJPs5PHeURPaPaP7%2BoMPfQ970GOqUB%2FHuCZmbMlswYxaF40%2FFLezPtcKdFgus5YPjfUZk7vF4OBQu%2BJp5QDNBL0i929ur%2B%2FBEh6n7A2A5tagdyqKxidcpCu2QJMqFtmZnJY65x6BJZjGWGh2LvHmQ33xvxL8v7Gx%2Fnk5zp2indfOEaP07euz%2Bhb5TMovE70emuhy94FnBfoZU%2Bb6hBtNGGtQOW4mXj1%2Bk0KOlB6MIoeE8TDPTb8OUraBmI&X-Amz-Signature=68fd3af681dcf028f3185c0f9b70e33f14c2665684c12d9357de892b4e311d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ7BIWF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDh7tlQ030QsMJSVu4IVyRiDd%2F4E6tvmSeUZ2EGSwKvnwIgUVCOX4VjidIiJ29DStzmBHmi5%2BEiQuxLI1S4zu06h%2BUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKL4PelcKHjWM5rYdircA%2FqNFZBekMZxlAorfhriL1m0VHheKJDlYChXMQD2ee4oWjiwdVbZcqzVyzrhwIPa02HLOrwDouPeEIc16%2Fx7LJcaVhZfobeCsxpJdDuYHWYI93FqfA%2FJDCa2KJ0htr%2FntC3s1DSK9FjjJAV6gQQrEoU1oOovSZiy7sr2NWJfj8dFC5%2FJTMrA689kP5cq2dsqCiyk3zgd4WWJUnOpkapJnW46HfsorvIAzxc9ae0%2BxQhiV7p65kv3PtsWxc4NGVpO365OiH5kP8TKAKRD3VTtjOGPzWwBolOtkgWFSg81SXEZFvx8VbU3BS2JcMCc6QCclUYtTgkbokR0WEp9onJWVaJe8YHZWV8wiABI1z24eALe2Ik%2BN1yeZGMIZU6oP5L%2BGwOccNQ%2BrkAa7UwQU%2FYdcGeOKskYNAx40myMf3tYobCAPBj1KGcs%2FfWnjaS9t5XsCP9Olilg9IjjjeFz3JS764xuVacdN%2BgHjEJ5F1lKq4DiEm2yKl7Oz9dmZh1tO4Cs3x%2Fz%2FZSC0XsSNj4f4ZBc15amcdfcoDpgs3krFVAjcyPIP3W4NkDsho8Gxd48gmVbQhK%2FYgx9ZxAvwFlouaXg6zkMKcyQVWXcSxG9uBWB8lKJPs5PHeURPaPaP7%2BoMPfQ970GOqUB%2FHuCZmbMlswYxaF40%2FFLezPtcKdFgus5YPjfUZk7vF4OBQu%2BJp5QDNBL0i929ur%2B%2FBEh6n7A2A5tagdyqKxidcpCu2QJMqFtmZnJY65x6BJZjGWGh2LvHmQ33xvxL8v7Gx%2Fnk5zp2indfOEaP07euz%2Bhb5TMovE70emuhy94FnBfoZU%2Bb6hBtNGGtQOW4mXj1%2Bk0KOlB6MIoeE8TDPTb8OUraBmI&X-Amz-Signature=4ad2a35666d023da26a5ce3f76b49c5fbfd58ec5c88fc7d22e4d6331b777c8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ7BIWF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDh7tlQ030QsMJSVu4IVyRiDd%2F4E6tvmSeUZ2EGSwKvnwIgUVCOX4VjidIiJ29DStzmBHmi5%2BEiQuxLI1S4zu06h%2BUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKL4PelcKHjWM5rYdircA%2FqNFZBekMZxlAorfhriL1m0VHheKJDlYChXMQD2ee4oWjiwdVbZcqzVyzrhwIPa02HLOrwDouPeEIc16%2Fx7LJcaVhZfobeCsxpJdDuYHWYI93FqfA%2FJDCa2KJ0htr%2FntC3s1DSK9FjjJAV6gQQrEoU1oOovSZiy7sr2NWJfj8dFC5%2FJTMrA689kP5cq2dsqCiyk3zgd4WWJUnOpkapJnW46HfsorvIAzxc9ae0%2BxQhiV7p65kv3PtsWxc4NGVpO365OiH5kP8TKAKRD3VTtjOGPzWwBolOtkgWFSg81SXEZFvx8VbU3BS2JcMCc6QCclUYtTgkbokR0WEp9onJWVaJe8YHZWV8wiABI1z24eALe2Ik%2BN1yeZGMIZU6oP5L%2BGwOccNQ%2BrkAa7UwQU%2FYdcGeOKskYNAx40myMf3tYobCAPBj1KGcs%2FfWnjaS9t5XsCP9Olilg9IjjjeFz3JS764xuVacdN%2BgHjEJ5F1lKq4DiEm2yKl7Oz9dmZh1tO4Cs3x%2Fz%2FZSC0XsSNj4f4ZBc15amcdfcoDpgs3krFVAjcyPIP3W4NkDsho8Gxd48gmVbQhK%2FYgx9ZxAvwFlouaXg6zkMKcyQVWXcSxG9uBWB8lKJPs5PHeURPaPaP7%2BoMPfQ970GOqUB%2FHuCZmbMlswYxaF40%2FFLezPtcKdFgus5YPjfUZk7vF4OBQu%2BJp5QDNBL0i929ur%2B%2FBEh6n7A2A5tagdyqKxidcpCu2QJMqFtmZnJY65x6BJZjGWGh2LvHmQ33xvxL8v7Gx%2Fnk5zp2indfOEaP07euz%2Bhb5TMovE70emuhy94FnBfoZU%2Bb6hBtNGGtQOW4mXj1%2Bk0KOlB6MIoeE8TDPTb8OUraBmI&X-Amz-Signature=e4713329eb30850ebe4c669705908aaa90bcfc16a614ea27b79c1dd6af225854&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ7BIWF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDh7tlQ030QsMJSVu4IVyRiDd%2F4E6tvmSeUZ2EGSwKvnwIgUVCOX4VjidIiJ29DStzmBHmi5%2BEiQuxLI1S4zu06h%2BUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKL4PelcKHjWM5rYdircA%2FqNFZBekMZxlAorfhriL1m0VHheKJDlYChXMQD2ee4oWjiwdVbZcqzVyzrhwIPa02HLOrwDouPeEIc16%2Fx7LJcaVhZfobeCsxpJdDuYHWYI93FqfA%2FJDCa2KJ0htr%2FntC3s1DSK9FjjJAV6gQQrEoU1oOovSZiy7sr2NWJfj8dFC5%2FJTMrA689kP5cq2dsqCiyk3zgd4WWJUnOpkapJnW46HfsorvIAzxc9ae0%2BxQhiV7p65kv3PtsWxc4NGVpO365OiH5kP8TKAKRD3VTtjOGPzWwBolOtkgWFSg81SXEZFvx8VbU3BS2JcMCc6QCclUYtTgkbokR0WEp9onJWVaJe8YHZWV8wiABI1z24eALe2Ik%2BN1yeZGMIZU6oP5L%2BGwOccNQ%2BrkAa7UwQU%2FYdcGeOKskYNAx40myMf3tYobCAPBj1KGcs%2FfWnjaS9t5XsCP9Olilg9IjjjeFz3JS764xuVacdN%2BgHjEJ5F1lKq4DiEm2yKl7Oz9dmZh1tO4Cs3x%2Fz%2FZSC0XsSNj4f4ZBc15amcdfcoDpgs3krFVAjcyPIP3W4NkDsho8Gxd48gmVbQhK%2FYgx9ZxAvwFlouaXg6zkMKcyQVWXcSxG9uBWB8lKJPs5PHeURPaPaP7%2BoMPfQ970GOqUB%2FHuCZmbMlswYxaF40%2FFLezPtcKdFgus5YPjfUZk7vF4OBQu%2BJp5QDNBL0i929ur%2B%2FBEh6n7A2A5tagdyqKxidcpCu2QJMqFtmZnJY65x6BJZjGWGh2LvHmQ33xvxL8v7Gx%2Fnk5zp2indfOEaP07euz%2Bhb5TMovE70emuhy94FnBfoZU%2Bb6hBtNGGtQOW4mXj1%2Bk0KOlB6MIoeE8TDPTb8OUraBmI&X-Amz-Signature=e49cd91b09d8195750811211a118d0fb34d659b7d32601fe88b7048cc9612eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ7BIWF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDh7tlQ030QsMJSVu4IVyRiDd%2F4E6tvmSeUZ2EGSwKvnwIgUVCOX4VjidIiJ29DStzmBHmi5%2BEiQuxLI1S4zu06h%2BUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKL4PelcKHjWM5rYdircA%2FqNFZBekMZxlAorfhriL1m0VHheKJDlYChXMQD2ee4oWjiwdVbZcqzVyzrhwIPa02HLOrwDouPeEIc16%2Fx7LJcaVhZfobeCsxpJdDuYHWYI93FqfA%2FJDCa2KJ0htr%2FntC3s1DSK9FjjJAV6gQQrEoU1oOovSZiy7sr2NWJfj8dFC5%2FJTMrA689kP5cq2dsqCiyk3zgd4WWJUnOpkapJnW46HfsorvIAzxc9ae0%2BxQhiV7p65kv3PtsWxc4NGVpO365OiH5kP8TKAKRD3VTtjOGPzWwBolOtkgWFSg81SXEZFvx8VbU3BS2JcMCc6QCclUYtTgkbokR0WEp9onJWVaJe8YHZWV8wiABI1z24eALe2Ik%2BN1yeZGMIZU6oP5L%2BGwOccNQ%2BrkAa7UwQU%2FYdcGeOKskYNAx40myMf3tYobCAPBj1KGcs%2FfWnjaS9t5XsCP9Olilg9IjjjeFz3JS764xuVacdN%2BgHjEJ5F1lKq4DiEm2yKl7Oz9dmZh1tO4Cs3x%2Fz%2FZSC0XsSNj4f4ZBc15amcdfcoDpgs3krFVAjcyPIP3W4NkDsho8Gxd48gmVbQhK%2FYgx9ZxAvwFlouaXg6zkMKcyQVWXcSxG9uBWB8lKJPs5PHeURPaPaP7%2BoMPfQ970GOqUB%2FHuCZmbMlswYxaF40%2FFLezPtcKdFgus5YPjfUZk7vF4OBQu%2BJp5QDNBL0i929ur%2B%2FBEh6n7A2A5tagdyqKxidcpCu2QJMqFtmZnJY65x6BJZjGWGh2LvHmQ33xvxL8v7Gx%2Fnk5zp2indfOEaP07euz%2Bhb5TMovE70emuhy94FnBfoZU%2Bb6hBtNGGtQOW4mXj1%2Bk0KOlB6MIoeE8TDPTb8OUraBmI&X-Amz-Signature=241762fa80fad46dc63fc2615b04bdd8e2c362e875fe64bdc4944ac7542a4dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ7BIWF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDh7tlQ030QsMJSVu4IVyRiDd%2F4E6tvmSeUZ2EGSwKvnwIgUVCOX4VjidIiJ29DStzmBHmi5%2BEiQuxLI1S4zu06h%2BUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKL4PelcKHjWM5rYdircA%2FqNFZBekMZxlAorfhriL1m0VHheKJDlYChXMQD2ee4oWjiwdVbZcqzVyzrhwIPa02HLOrwDouPeEIc16%2Fx7LJcaVhZfobeCsxpJdDuYHWYI93FqfA%2FJDCa2KJ0htr%2FntC3s1DSK9FjjJAV6gQQrEoU1oOovSZiy7sr2NWJfj8dFC5%2FJTMrA689kP5cq2dsqCiyk3zgd4WWJUnOpkapJnW46HfsorvIAzxc9ae0%2BxQhiV7p65kv3PtsWxc4NGVpO365OiH5kP8TKAKRD3VTtjOGPzWwBolOtkgWFSg81SXEZFvx8VbU3BS2JcMCc6QCclUYtTgkbokR0WEp9onJWVaJe8YHZWV8wiABI1z24eALe2Ik%2BN1yeZGMIZU6oP5L%2BGwOccNQ%2BrkAa7UwQU%2FYdcGeOKskYNAx40myMf3tYobCAPBj1KGcs%2FfWnjaS9t5XsCP9Olilg9IjjjeFz3JS764xuVacdN%2BgHjEJ5F1lKq4DiEm2yKl7Oz9dmZh1tO4Cs3x%2Fz%2FZSC0XsSNj4f4ZBc15amcdfcoDpgs3krFVAjcyPIP3W4NkDsho8Gxd48gmVbQhK%2FYgx9ZxAvwFlouaXg6zkMKcyQVWXcSxG9uBWB8lKJPs5PHeURPaPaP7%2BoMPfQ970GOqUB%2FHuCZmbMlswYxaF40%2FFLezPtcKdFgus5YPjfUZk7vF4OBQu%2BJp5QDNBL0i929ur%2B%2FBEh6n7A2A5tagdyqKxidcpCu2QJMqFtmZnJY65x6BJZjGWGh2LvHmQ33xvxL8v7Gx%2Fnk5zp2indfOEaP07euz%2Bhb5TMovE70emuhy94FnBfoZU%2Bb6hBtNGGtQOW4mXj1%2Bk0KOlB6MIoeE8TDPTb8OUraBmI&X-Amz-Signature=43c4ae5d194e056222cea61be555e3c95f9984cec7076b08428d1dfa93524230&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ7BIWF%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDh7tlQ030QsMJSVu4IVyRiDd%2F4E6tvmSeUZ2EGSwKvnwIgUVCOX4VjidIiJ29DStzmBHmi5%2BEiQuxLI1S4zu06h%2BUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKL4PelcKHjWM5rYdircA%2FqNFZBekMZxlAorfhriL1m0VHheKJDlYChXMQD2ee4oWjiwdVbZcqzVyzrhwIPa02HLOrwDouPeEIc16%2Fx7LJcaVhZfobeCsxpJdDuYHWYI93FqfA%2FJDCa2KJ0htr%2FntC3s1DSK9FjjJAV6gQQrEoU1oOovSZiy7sr2NWJfj8dFC5%2FJTMrA689kP5cq2dsqCiyk3zgd4WWJUnOpkapJnW46HfsorvIAzxc9ae0%2BxQhiV7p65kv3PtsWxc4NGVpO365OiH5kP8TKAKRD3VTtjOGPzWwBolOtkgWFSg81SXEZFvx8VbU3BS2JcMCc6QCclUYtTgkbokR0WEp9onJWVaJe8YHZWV8wiABI1z24eALe2Ik%2BN1yeZGMIZU6oP5L%2BGwOccNQ%2BrkAa7UwQU%2FYdcGeOKskYNAx40myMf3tYobCAPBj1KGcs%2FfWnjaS9t5XsCP9Olilg9IjjjeFz3JS764xuVacdN%2BgHjEJ5F1lKq4DiEm2yKl7Oz9dmZh1tO4Cs3x%2Fz%2FZSC0XsSNj4f4ZBc15amcdfcoDpgs3krFVAjcyPIP3W4NkDsho8Gxd48gmVbQhK%2FYgx9ZxAvwFlouaXg6zkMKcyQVWXcSxG9uBWB8lKJPs5PHeURPaPaP7%2BoMPfQ970GOqUB%2FHuCZmbMlswYxaF40%2FFLezPtcKdFgus5YPjfUZk7vF4OBQu%2BJp5QDNBL0i929ur%2B%2FBEh6n7A2A5tagdyqKxidcpCu2QJMqFtmZnJY65x6BJZjGWGh2LvHmQ33xvxL8v7Gx%2Fnk5zp2indfOEaP07euz%2Bhb5TMovE70emuhy94FnBfoZU%2Bb6hBtNGGtQOW4mXj1%2Bk0KOlB6MIoeE8TDPTb8OUraBmI&X-Amz-Signature=dcf305be7953b6b661ee881bc16588727238775b44bbaa768e34f2b8acba9a67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
