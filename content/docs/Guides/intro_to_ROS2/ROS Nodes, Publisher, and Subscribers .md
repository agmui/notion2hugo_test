---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656CKBQ5N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICqvxoCYUVu6ZosyY3%2FMAIN3SWh05caYQa%2FZY5SfZRsQAiEAsqk6PftShshfq0zHhg3xwMs%2FCRc2lMFqi%2BW%2FKR5lAOYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJBjwwyqEjhGmMqTlyrcA1CMuxJ7wgxRb6vVYyLzPv3yNa%2FAIbzpMmQHy1Kix1%2FV42Hcg3nUwgtbklbTNVT%2FBOzBu66eA9omcKCwk8gLxpm8w7o%2FV3I0H8Wq87PiyzxnsF906wVcZoY60nAk%2Bpyzc9VNXG2CiiAD2a8oCmcYyWo%2FIgGqns4y4gfbjIWht6yNa%2BQRG93HDIbr61dNOEcKoSf6c0g5sd8jFD8%2FB7atnjDtdDG6qIiFrh19hOnKTKC%2BmJDn12zjsbpT2qpydd4tBb0zq5Fztfi%2FchWqjzRnfqxtSYBt2B3rlLGYqSDEOs87CpdDkD2yl7rrwLR5V2kDE4rrqtd3MjqWBuT%2FWONGQ7XJEWcNNV1T5DKiE2vpMdHqu9JfVI2FMxFpA4wGUNmZjCY7FlR867J8KHvjamKx2aXStPQf5nX1dR57ybfzcJUrxG680m7ke0B5grIpnIz6auypzDvUqHyOofV%2F%2FpyY1kJFgGALW0zLt8%2B5DweOrykLX8mD%2BNYGXc0IWONNSoKutLKjQaOFL%2B7d4krTWy62G8e7w77nna1QUWqiAq%2FfvhM6tFx5ZvJ3z80hVPXRiO6QMBfrtE4CymbzLCzcv46Pd39vYSRXKJO%2Fr3QS75Dpc6Ce7c5WpPdtzBRT206UMN2N%2BcQGOqUBHDzOD6J7m%2F3qNWEDlMJUqWP%2BHtYsEAw%2BX%2F9NLM%2Blnu1o8TJv2RuqSeBFYC6VGMeQgHNslmjSg8cygOdJlheNhuF0pndjDQnZMu2kNSLojZgvSBIDUpFxWZxZuJgL0EIT6VCbELF%2Bebk8Bwo4erRCZvnMPvCGtQQuw4Dn%2FcLvp1YC7bHFHMtnyICPljRQCKzcQ5W5wY6tUz60GKbeB0UjOQYp2pL2&X-Amz-Signature=a4cb37b706907e4a3898a2db3209e018b08af2cb229245783ae6058464d67d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656CKBQ5N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICqvxoCYUVu6ZosyY3%2FMAIN3SWh05caYQa%2FZY5SfZRsQAiEAsqk6PftShshfq0zHhg3xwMs%2FCRc2lMFqi%2BW%2FKR5lAOYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJBjwwyqEjhGmMqTlyrcA1CMuxJ7wgxRb6vVYyLzPv3yNa%2FAIbzpMmQHy1Kix1%2FV42Hcg3nUwgtbklbTNVT%2FBOzBu66eA9omcKCwk8gLxpm8w7o%2FV3I0H8Wq87PiyzxnsF906wVcZoY60nAk%2Bpyzc9VNXG2CiiAD2a8oCmcYyWo%2FIgGqns4y4gfbjIWht6yNa%2BQRG93HDIbr61dNOEcKoSf6c0g5sd8jFD8%2FB7atnjDtdDG6qIiFrh19hOnKTKC%2BmJDn12zjsbpT2qpydd4tBb0zq5Fztfi%2FchWqjzRnfqxtSYBt2B3rlLGYqSDEOs87CpdDkD2yl7rrwLR5V2kDE4rrqtd3MjqWBuT%2FWONGQ7XJEWcNNV1T5DKiE2vpMdHqu9JfVI2FMxFpA4wGUNmZjCY7FlR867J8KHvjamKx2aXStPQf5nX1dR57ybfzcJUrxG680m7ke0B5grIpnIz6auypzDvUqHyOofV%2F%2FpyY1kJFgGALW0zLt8%2B5DweOrykLX8mD%2BNYGXc0IWONNSoKutLKjQaOFL%2B7d4krTWy62G8e7w77nna1QUWqiAq%2FfvhM6tFx5ZvJ3z80hVPXRiO6QMBfrtE4CymbzLCzcv46Pd39vYSRXKJO%2Fr3QS75Dpc6Ce7c5WpPdtzBRT206UMN2N%2BcQGOqUBHDzOD6J7m%2F3qNWEDlMJUqWP%2BHtYsEAw%2BX%2F9NLM%2Blnu1o8TJv2RuqSeBFYC6VGMeQgHNslmjSg8cygOdJlheNhuF0pndjDQnZMu2kNSLojZgvSBIDUpFxWZxZuJgL0EIT6VCbELF%2Bebk8Bwo4erRCZvnMPvCGtQQuw4Dn%2FcLvp1YC7bHFHMtnyICPljRQCKzcQ5W5wY6tUz60GKbeB0UjOQYp2pL2&X-Amz-Signature=9274d1c5152edb55891490fc59a2a9606c615fc2a8aabaccbc76bfb7b60e63e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656CKBQ5N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICqvxoCYUVu6ZosyY3%2FMAIN3SWh05caYQa%2FZY5SfZRsQAiEAsqk6PftShshfq0zHhg3xwMs%2FCRc2lMFqi%2BW%2FKR5lAOYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJBjwwyqEjhGmMqTlyrcA1CMuxJ7wgxRb6vVYyLzPv3yNa%2FAIbzpMmQHy1Kix1%2FV42Hcg3nUwgtbklbTNVT%2FBOzBu66eA9omcKCwk8gLxpm8w7o%2FV3I0H8Wq87PiyzxnsF906wVcZoY60nAk%2Bpyzc9VNXG2CiiAD2a8oCmcYyWo%2FIgGqns4y4gfbjIWht6yNa%2BQRG93HDIbr61dNOEcKoSf6c0g5sd8jFD8%2FB7atnjDtdDG6qIiFrh19hOnKTKC%2BmJDn12zjsbpT2qpydd4tBb0zq5Fztfi%2FchWqjzRnfqxtSYBt2B3rlLGYqSDEOs87CpdDkD2yl7rrwLR5V2kDE4rrqtd3MjqWBuT%2FWONGQ7XJEWcNNV1T5DKiE2vpMdHqu9JfVI2FMxFpA4wGUNmZjCY7FlR867J8KHvjamKx2aXStPQf5nX1dR57ybfzcJUrxG680m7ke0B5grIpnIz6auypzDvUqHyOofV%2F%2FpyY1kJFgGALW0zLt8%2B5DweOrykLX8mD%2BNYGXc0IWONNSoKutLKjQaOFL%2B7d4krTWy62G8e7w77nna1QUWqiAq%2FfvhM6tFx5ZvJ3z80hVPXRiO6QMBfrtE4CymbzLCzcv46Pd39vYSRXKJO%2Fr3QS75Dpc6Ce7c5WpPdtzBRT206UMN2N%2BcQGOqUBHDzOD6J7m%2F3qNWEDlMJUqWP%2BHtYsEAw%2BX%2F9NLM%2Blnu1o8TJv2RuqSeBFYC6VGMeQgHNslmjSg8cygOdJlheNhuF0pndjDQnZMu2kNSLojZgvSBIDUpFxWZxZuJgL0EIT6VCbELF%2Bebk8Bwo4erRCZvnMPvCGtQQuw4Dn%2FcLvp1YC7bHFHMtnyICPljRQCKzcQ5W5wY6tUz60GKbeB0UjOQYp2pL2&X-Amz-Signature=017928488436d93b8deb0a20cf05feed1e206e1adb6e7fa4f368f4e48598fa40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656CKBQ5N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICqvxoCYUVu6ZosyY3%2FMAIN3SWh05caYQa%2FZY5SfZRsQAiEAsqk6PftShshfq0zHhg3xwMs%2FCRc2lMFqi%2BW%2FKR5lAOYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJBjwwyqEjhGmMqTlyrcA1CMuxJ7wgxRb6vVYyLzPv3yNa%2FAIbzpMmQHy1Kix1%2FV42Hcg3nUwgtbklbTNVT%2FBOzBu66eA9omcKCwk8gLxpm8w7o%2FV3I0H8Wq87PiyzxnsF906wVcZoY60nAk%2Bpyzc9VNXG2CiiAD2a8oCmcYyWo%2FIgGqns4y4gfbjIWht6yNa%2BQRG93HDIbr61dNOEcKoSf6c0g5sd8jFD8%2FB7atnjDtdDG6qIiFrh19hOnKTKC%2BmJDn12zjsbpT2qpydd4tBb0zq5Fztfi%2FchWqjzRnfqxtSYBt2B3rlLGYqSDEOs87CpdDkD2yl7rrwLR5V2kDE4rrqtd3MjqWBuT%2FWONGQ7XJEWcNNV1T5DKiE2vpMdHqu9JfVI2FMxFpA4wGUNmZjCY7FlR867J8KHvjamKx2aXStPQf5nX1dR57ybfzcJUrxG680m7ke0B5grIpnIz6auypzDvUqHyOofV%2F%2FpyY1kJFgGALW0zLt8%2B5DweOrykLX8mD%2BNYGXc0IWONNSoKutLKjQaOFL%2B7d4krTWy62G8e7w77nna1QUWqiAq%2FfvhM6tFx5ZvJ3z80hVPXRiO6QMBfrtE4CymbzLCzcv46Pd39vYSRXKJO%2Fr3QS75Dpc6Ce7c5WpPdtzBRT206UMN2N%2BcQGOqUBHDzOD6J7m%2F3qNWEDlMJUqWP%2BHtYsEAw%2BX%2F9NLM%2Blnu1o8TJv2RuqSeBFYC6VGMeQgHNslmjSg8cygOdJlheNhuF0pndjDQnZMu2kNSLojZgvSBIDUpFxWZxZuJgL0EIT6VCbELF%2Bebk8Bwo4erRCZvnMPvCGtQQuw4Dn%2FcLvp1YC7bHFHMtnyICPljRQCKzcQ5W5wY6tUz60GKbeB0UjOQYp2pL2&X-Amz-Signature=b3cdb242a8b2a79579b47f5cb33f5e47f226050ad79ccacd7e6d01719300c386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656CKBQ5N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICqvxoCYUVu6ZosyY3%2FMAIN3SWh05caYQa%2FZY5SfZRsQAiEAsqk6PftShshfq0zHhg3xwMs%2FCRc2lMFqi%2BW%2FKR5lAOYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJBjwwyqEjhGmMqTlyrcA1CMuxJ7wgxRb6vVYyLzPv3yNa%2FAIbzpMmQHy1Kix1%2FV42Hcg3nUwgtbklbTNVT%2FBOzBu66eA9omcKCwk8gLxpm8w7o%2FV3I0H8Wq87PiyzxnsF906wVcZoY60nAk%2Bpyzc9VNXG2CiiAD2a8oCmcYyWo%2FIgGqns4y4gfbjIWht6yNa%2BQRG93HDIbr61dNOEcKoSf6c0g5sd8jFD8%2FB7atnjDtdDG6qIiFrh19hOnKTKC%2BmJDn12zjsbpT2qpydd4tBb0zq5Fztfi%2FchWqjzRnfqxtSYBt2B3rlLGYqSDEOs87CpdDkD2yl7rrwLR5V2kDE4rrqtd3MjqWBuT%2FWONGQ7XJEWcNNV1T5DKiE2vpMdHqu9JfVI2FMxFpA4wGUNmZjCY7FlR867J8KHvjamKx2aXStPQf5nX1dR57ybfzcJUrxG680m7ke0B5grIpnIz6auypzDvUqHyOofV%2F%2FpyY1kJFgGALW0zLt8%2B5DweOrykLX8mD%2BNYGXc0IWONNSoKutLKjQaOFL%2B7d4krTWy62G8e7w77nna1QUWqiAq%2FfvhM6tFx5ZvJ3z80hVPXRiO6QMBfrtE4CymbzLCzcv46Pd39vYSRXKJO%2Fr3QS75Dpc6Ce7c5WpPdtzBRT206UMN2N%2BcQGOqUBHDzOD6J7m%2F3qNWEDlMJUqWP%2BHtYsEAw%2BX%2F9NLM%2Blnu1o8TJv2RuqSeBFYC6VGMeQgHNslmjSg8cygOdJlheNhuF0pndjDQnZMu2kNSLojZgvSBIDUpFxWZxZuJgL0EIT6VCbELF%2Bebk8Bwo4erRCZvnMPvCGtQQuw4Dn%2FcLvp1YC7bHFHMtnyICPljRQCKzcQ5W5wY6tUz60GKbeB0UjOQYp2pL2&X-Amz-Signature=3ef39b18c52f0fe7e726492a375e272dd200e0d961fe7bee175ad0632f897a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656CKBQ5N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICqvxoCYUVu6ZosyY3%2FMAIN3SWh05caYQa%2FZY5SfZRsQAiEAsqk6PftShshfq0zHhg3xwMs%2FCRc2lMFqi%2BW%2FKR5lAOYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJBjwwyqEjhGmMqTlyrcA1CMuxJ7wgxRb6vVYyLzPv3yNa%2FAIbzpMmQHy1Kix1%2FV42Hcg3nUwgtbklbTNVT%2FBOzBu66eA9omcKCwk8gLxpm8w7o%2FV3I0H8Wq87PiyzxnsF906wVcZoY60nAk%2Bpyzc9VNXG2CiiAD2a8oCmcYyWo%2FIgGqns4y4gfbjIWht6yNa%2BQRG93HDIbr61dNOEcKoSf6c0g5sd8jFD8%2FB7atnjDtdDG6qIiFrh19hOnKTKC%2BmJDn12zjsbpT2qpydd4tBb0zq5Fztfi%2FchWqjzRnfqxtSYBt2B3rlLGYqSDEOs87CpdDkD2yl7rrwLR5V2kDE4rrqtd3MjqWBuT%2FWONGQ7XJEWcNNV1T5DKiE2vpMdHqu9JfVI2FMxFpA4wGUNmZjCY7FlR867J8KHvjamKx2aXStPQf5nX1dR57ybfzcJUrxG680m7ke0B5grIpnIz6auypzDvUqHyOofV%2F%2FpyY1kJFgGALW0zLt8%2B5DweOrykLX8mD%2BNYGXc0IWONNSoKutLKjQaOFL%2B7d4krTWy62G8e7w77nna1QUWqiAq%2FfvhM6tFx5ZvJ3z80hVPXRiO6QMBfrtE4CymbzLCzcv46Pd39vYSRXKJO%2Fr3QS75Dpc6Ce7c5WpPdtzBRT206UMN2N%2BcQGOqUBHDzOD6J7m%2F3qNWEDlMJUqWP%2BHtYsEAw%2BX%2F9NLM%2Blnu1o8TJv2RuqSeBFYC6VGMeQgHNslmjSg8cygOdJlheNhuF0pndjDQnZMu2kNSLojZgvSBIDUpFxWZxZuJgL0EIT6VCbELF%2Bebk8Bwo4erRCZvnMPvCGtQQuw4Dn%2FcLvp1YC7bHFHMtnyICPljRQCKzcQ5W5wY6tUz60GKbeB0UjOQYp2pL2&X-Amz-Signature=fd923b69b608a2438470881c7962458211b4f80c2371bd4876ebdbb02b023073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656CKBQ5N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICqvxoCYUVu6ZosyY3%2FMAIN3SWh05caYQa%2FZY5SfZRsQAiEAsqk6PftShshfq0zHhg3xwMs%2FCRc2lMFqi%2BW%2FKR5lAOYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJBjwwyqEjhGmMqTlyrcA1CMuxJ7wgxRb6vVYyLzPv3yNa%2FAIbzpMmQHy1Kix1%2FV42Hcg3nUwgtbklbTNVT%2FBOzBu66eA9omcKCwk8gLxpm8w7o%2FV3I0H8Wq87PiyzxnsF906wVcZoY60nAk%2Bpyzc9VNXG2CiiAD2a8oCmcYyWo%2FIgGqns4y4gfbjIWht6yNa%2BQRG93HDIbr61dNOEcKoSf6c0g5sd8jFD8%2FB7atnjDtdDG6qIiFrh19hOnKTKC%2BmJDn12zjsbpT2qpydd4tBb0zq5Fztfi%2FchWqjzRnfqxtSYBt2B3rlLGYqSDEOs87CpdDkD2yl7rrwLR5V2kDE4rrqtd3MjqWBuT%2FWONGQ7XJEWcNNV1T5DKiE2vpMdHqu9JfVI2FMxFpA4wGUNmZjCY7FlR867J8KHvjamKx2aXStPQf5nX1dR57ybfzcJUrxG680m7ke0B5grIpnIz6auypzDvUqHyOofV%2F%2FpyY1kJFgGALW0zLt8%2B5DweOrykLX8mD%2BNYGXc0IWONNSoKutLKjQaOFL%2B7d4krTWy62G8e7w77nna1QUWqiAq%2FfvhM6tFx5ZvJ3z80hVPXRiO6QMBfrtE4CymbzLCzcv46Pd39vYSRXKJO%2Fr3QS75Dpc6Ce7c5WpPdtzBRT206UMN2N%2BcQGOqUBHDzOD6J7m%2F3qNWEDlMJUqWP%2BHtYsEAw%2BX%2F9NLM%2Blnu1o8TJv2RuqSeBFYC6VGMeQgHNslmjSg8cygOdJlheNhuF0pndjDQnZMu2kNSLojZgvSBIDUpFxWZxZuJgL0EIT6VCbELF%2Bebk8Bwo4erRCZvnMPvCGtQQuw4Dn%2FcLvp1YC7bHFHMtnyICPljRQCKzcQ5W5wY6tUz60GKbeB0UjOQYp2pL2&X-Amz-Signature=a43b15bc7071e2ffb065c2421349dbf935582f805c70d7be9c7b919ff14e5c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656CKBQ5N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICqvxoCYUVu6ZosyY3%2FMAIN3SWh05caYQa%2FZY5SfZRsQAiEAsqk6PftShshfq0zHhg3xwMs%2FCRc2lMFqi%2BW%2FKR5lAOYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJBjwwyqEjhGmMqTlyrcA1CMuxJ7wgxRb6vVYyLzPv3yNa%2FAIbzpMmQHy1Kix1%2FV42Hcg3nUwgtbklbTNVT%2FBOzBu66eA9omcKCwk8gLxpm8w7o%2FV3I0H8Wq87PiyzxnsF906wVcZoY60nAk%2Bpyzc9VNXG2CiiAD2a8oCmcYyWo%2FIgGqns4y4gfbjIWht6yNa%2BQRG93HDIbr61dNOEcKoSf6c0g5sd8jFD8%2FB7atnjDtdDG6qIiFrh19hOnKTKC%2BmJDn12zjsbpT2qpydd4tBb0zq5Fztfi%2FchWqjzRnfqxtSYBt2B3rlLGYqSDEOs87CpdDkD2yl7rrwLR5V2kDE4rrqtd3MjqWBuT%2FWONGQ7XJEWcNNV1T5DKiE2vpMdHqu9JfVI2FMxFpA4wGUNmZjCY7FlR867J8KHvjamKx2aXStPQf5nX1dR57ybfzcJUrxG680m7ke0B5grIpnIz6auypzDvUqHyOofV%2F%2FpyY1kJFgGALW0zLt8%2B5DweOrykLX8mD%2BNYGXc0IWONNSoKutLKjQaOFL%2B7d4krTWy62G8e7w77nna1QUWqiAq%2FfvhM6tFx5ZvJ3z80hVPXRiO6QMBfrtE4CymbzLCzcv46Pd39vYSRXKJO%2Fr3QS75Dpc6Ce7c5WpPdtzBRT206UMN2N%2BcQGOqUBHDzOD6J7m%2F3qNWEDlMJUqWP%2BHtYsEAw%2BX%2F9NLM%2Blnu1o8TJv2RuqSeBFYC6VGMeQgHNslmjSg8cygOdJlheNhuF0pndjDQnZMu2kNSLojZgvSBIDUpFxWZxZuJgL0EIT6VCbELF%2Bebk8Bwo4erRCZvnMPvCGtQQuw4Dn%2FcLvp1YC7bHFHMtnyICPljRQCKzcQ5W5wY6tUz60GKbeB0UjOQYp2pL2&X-Amz-Signature=9ea17b68f6d783f959dce90e92c54f7cb3d4a34d00f05bc12937f988c1ffbe66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
