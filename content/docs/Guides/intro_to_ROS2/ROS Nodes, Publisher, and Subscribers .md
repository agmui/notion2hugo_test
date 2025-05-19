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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7MUORN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0IZm1H7edscOUw8NKhkTnML%2FhB8Ucpg7keS3FM8a3iAIgc0J2BNIhlUx0vbjyiCinGnmiRMSs43KHGPXDO9mPtjMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGLds4U9NFRfyJ3dyrcA3yP94uFWwBooNc4%2ByaG8WBNRnioLp2%2Bs6asCMYAQQp8xTM%2BZMwlXz0wRA2v1zXbAx9F7OfVRDQKfonab55aVnf%2B37nYbjPxSy9SkNjQIeNgeRrpYkssmJH5XQf8%2B%2F4rqACUkXJGwkswXFYkr9bNbUYp447XnMMRm0lvSut8OauOfjT4rlk8UW6DW2qCgRu%2Fvulws3LQ8DzITb5YXrPWNVe1SmrzX471oBuSaTheG7Sqh8Y09NSgEaNUn4IevDNSfxvaMnpViWwbfvhqJGBW0aUpvi%2FinCJZq1IrLZItRszGphfIeqsPc9U2DtEcwIHK4%2FMP23ClIVQOFIQAiYophS24ce%2FL1To3VzG3jSZlTnsSF1e2WegWuW%2Bxh9OZYKe4GtxDOCF3sQkoziRVxwm0fdLY%2BuQMM5aUUbXU6aqBIr3rPgnsVCwCPfR4KGiLQHsfgm95AZnv2ax%2FSH%2FCuHQ7I9kYkkr%2FQrh5TZJ6yQ4cYUvQr9znxRQ1AwIzOHO%2BdtJtAVr%2FLfbOUNqtcVLjCIDVIkpwC%2F65pjJtlr6KVYV72%2FZMfizY1FW4zFtDccGRsb%2Be3TiJ%2BrwkDA6PAPGisYGzDiOWvXX36Nngl3IoNCrPPREE3aQwEZBU2p%2F9Q8VtMKXRq8EGOqUBokSO07wzsHMIOInPVzkWPQpgJFgXrlVbhbQovv3ExCcIMr2Z0eyG93aSjStsi3v3d8q34jgmmZtOlTaaO%2Fm91hLB5%2FOV%2Fufb9mwzg994QuQF3cY75EVQw04onjhxjcjqoRG1%2FQ1fZa5t3N00QlKnaDQOOu1K3mxcXtZO99ZgDETp6hEG2uXAu7N3CX2XMWiL8aj4FOYfJMETGepHWPhBtq2F3MWX&X-Amz-Signature=9a3ced5851c22e228a7607ac1dea3bb657a918f03c5897eedfc4d8ce5a314240&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7MUORN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0IZm1H7edscOUw8NKhkTnML%2FhB8Ucpg7keS3FM8a3iAIgc0J2BNIhlUx0vbjyiCinGnmiRMSs43KHGPXDO9mPtjMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGLds4U9NFRfyJ3dyrcA3yP94uFWwBooNc4%2ByaG8WBNRnioLp2%2Bs6asCMYAQQp8xTM%2BZMwlXz0wRA2v1zXbAx9F7OfVRDQKfonab55aVnf%2B37nYbjPxSy9SkNjQIeNgeRrpYkssmJH5XQf8%2B%2F4rqACUkXJGwkswXFYkr9bNbUYp447XnMMRm0lvSut8OauOfjT4rlk8UW6DW2qCgRu%2Fvulws3LQ8DzITb5YXrPWNVe1SmrzX471oBuSaTheG7Sqh8Y09NSgEaNUn4IevDNSfxvaMnpViWwbfvhqJGBW0aUpvi%2FinCJZq1IrLZItRszGphfIeqsPc9U2DtEcwIHK4%2FMP23ClIVQOFIQAiYophS24ce%2FL1To3VzG3jSZlTnsSF1e2WegWuW%2Bxh9OZYKe4GtxDOCF3sQkoziRVxwm0fdLY%2BuQMM5aUUbXU6aqBIr3rPgnsVCwCPfR4KGiLQHsfgm95AZnv2ax%2FSH%2FCuHQ7I9kYkkr%2FQrh5TZJ6yQ4cYUvQr9znxRQ1AwIzOHO%2BdtJtAVr%2FLfbOUNqtcVLjCIDVIkpwC%2F65pjJtlr6KVYV72%2FZMfizY1FW4zFtDccGRsb%2Be3TiJ%2BrwkDA6PAPGisYGzDiOWvXX36Nngl3IoNCrPPREE3aQwEZBU2p%2F9Q8VtMKXRq8EGOqUBokSO07wzsHMIOInPVzkWPQpgJFgXrlVbhbQovv3ExCcIMr2Z0eyG93aSjStsi3v3d8q34jgmmZtOlTaaO%2Fm91hLB5%2FOV%2Fufb9mwzg994QuQF3cY75EVQw04onjhxjcjqoRG1%2FQ1fZa5t3N00QlKnaDQOOu1K3mxcXtZO99ZgDETp6hEG2uXAu7N3CX2XMWiL8aj4FOYfJMETGepHWPhBtq2F3MWX&X-Amz-Signature=4c94631702821621948f22632aa811a30937e05aaaefdb655de119824936fad6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7MUORN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0IZm1H7edscOUw8NKhkTnML%2FhB8Ucpg7keS3FM8a3iAIgc0J2BNIhlUx0vbjyiCinGnmiRMSs43KHGPXDO9mPtjMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGLds4U9NFRfyJ3dyrcA3yP94uFWwBooNc4%2ByaG8WBNRnioLp2%2Bs6asCMYAQQp8xTM%2BZMwlXz0wRA2v1zXbAx9F7OfVRDQKfonab55aVnf%2B37nYbjPxSy9SkNjQIeNgeRrpYkssmJH5XQf8%2B%2F4rqACUkXJGwkswXFYkr9bNbUYp447XnMMRm0lvSut8OauOfjT4rlk8UW6DW2qCgRu%2Fvulws3LQ8DzITb5YXrPWNVe1SmrzX471oBuSaTheG7Sqh8Y09NSgEaNUn4IevDNSfxvaMnpViWwbfvhqJGBW0aUpvi%2FinCJZq1IrLZItRszGphfIeqsPc9U2DtEcwIHK4%2FMP23ClIVQOFIQAiYophS24ce%2FL1To3VzG3jSZlTnsSF1e2WegWuW%2Bxh9OZYKe4GtxDOCF3sQkoziRVxwm0fdLY%2BuQMM5aUUbXU6aqBIr3rPgnsVCwCPfR4KGiLQHsfgm95AZnv2ax%2FSH%2FCuHQ7I9kYkkr%2FQrh5TZJ6yQ4cYUvQr9znxRQ1AwIzOHO%2BdtJtAVr%2FLfbOUNqtcVLjCIDVIkpwC%2F65pjJtlr6KVYV72%2FZMfizY1FW4zFtDccGRsb%2Be3TiJ%2BrwkDA6PAPGisYGzDiOWvXX36Nngl3IoNCrPPREE3aQwEZBU2p%2F9Q8VtMKXRq8EGOqUBokSO07wzsHMIOInPVzkWPQpgJFgXrlVbhbQovv3ExCcIMr2Z0eyG93aSjStsi3v3d8q34jgmmZtOlTaaO%2Fm91hLB5%2FOV%2Fufb9mwzg994QuQF3cY75EVQw04onjhxjcjqoRG1%2FQ1fZa5t3N00QlKnaDQOOu1K3mxcXtZO99ZgDETp6hEG2uXAu7N3CX2XMWiL8aj4FOYfJMETGepHWPhBtq2F3MWX&X-Amz-Signature=bf4cfa04f1a21a1be8e345457f13db38c5290ad6b38ff5bb1d0fec7ad0f20637&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7MUORN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0IZm1H7edscOUw8NKhkTnML%2FhB8Ucpg7keS3FM8a3iAIgc0J2BNIhlUx0vbjyiCinGnmiRMSs43KHGPXDO9mPtjMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGLds4U9NFRfyJ3dyrcA3yP94uFWwBooNc4%2ByaG8WBNRnioLp2%2Bs6asCMYAQQp8xTM%2BZMwlXz0wRA2v1zXbAx9F7OfVRDQKfonab55aVnf%2B37nYbjPxSy9SkNjQIeNgeRrpYkssmJH5XQf8%2B%2F4rqACUkXJGwkswXFYkr9bNbUYp447XnMMRm0lvSut8OauOfjT4rlk8UW6DW2qCgRu%2Fvulws3LQ8DzITb5YXrPWNVe1SmrzX471oBuSaTheG7Sqh8Y09NSgEaNUn4IevDNSfxvaMnpViWwbfvhqJGBW0aUpvi%2FinCJZq1IrLZItRszGphfIeqsPc9U2DtEcwIHK4%2FMP23ClIVQOFIQAiYophS24ce%2FL1To3VzG3jSZlTnsSF1e2WegWuW%2Bxh9OZYKe4GtxDOCF3sQkoziRVxwm0fdLY%2BuQMM5aUUbXU6aqBIr3rPgnsVCwCPfR4KGiLQHsfgm95AZnv2ax%2FSH%2FCuHQ7I9kYkkr%2FQrh5TZJ6yQ4cYUvQr9znxRQ1AwIzOHO%2BdtJtAVr%2FLfbOUNqtcVLjCIDVIkpwC%2F65pjJtlr6KVYV72%2FZMfizY1FW4zFtDccGRsb%2Be3TiJ%2BrwkDA6PAPGisYGzDiOWvXX36Nngl3IoNCrPPREE3aQwEZBU2p%2F9Q8VtMKXRq8EGOqUBokSO07wzsHMIOInPVzkWPQpgJFgXrlVbhbQovv3ExCcIMr2Z0eyG93aSjStsi3v3d8q34jgmmZtOlTaaO%2Fm91hLB5%2FOV%2Fufb9mwzg994QuQF3cY75EVQw04onjhxjcjqoRG1%2FQ1fZa5t3N00QlKnaDQOOu1K3mxcXtZO99ZgDETp6hEG2uXAu7N3CX2XMWiL8aj4FOYfJMETGepHWPhBtq2F3MWX&X-Amz-Signature=2f90ba8ceda048e08773ddb20717e5038d098116df1aebf3a6980e1434a18690&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7MUORN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0IZm1H7edscOUw8NKhkTnML%2FhB8Ucpg7keS3FM8a3iAIgc0J2BNIhlUx0vbjyiCinGnmiRMSs43KHGPXDO9mPtjMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGLds4U9NFRfyJ3dyrcA3yP94uFWwBooNc4%2ByaG8WBNRnioLp2%2Bs6asCMYAQQp8xTM%2BZMwlXz0wRA2v1zXbAx9F7OfVRDQKfonab55aVnf%2B37nYbjPxSy9SkNjQIeNgeRrpYkssmJH5XQf8%2B%2F4rqACUkXJGwkswXFYkr9bNbUYp447XnMMRm0lvSut8OauOfjT4rlk8UW6DW2qCgRu%2Fvulws3LQ8DzITb5YXrPWNVe1SmrzX471oBuSaTheG7Sqh8Y09NSgEaNUn4IevDNSfxvaMnpViWwbfvhqJGBW0aUpvi%2FinCJZq1IrLZItRszGphfIeqsPc9U2DtEcwIHK4%2FMP23ClIVQOFIQAiYophS24ce%2FL1To3VzG3jSZlTnsSF1e2WegWuW%2Bxh9OZYKe4GtxDOCF3sQkoziRVxwm0fdLY%2BuQMM5aUUbXU6aqBIr3rPgnsVCwCPfR4KGiLQHsfgm95AZnv2ax%2FSH%2FCuHQ7I9kYkkr%2FQrh5TZJ6yQ4cYUvQr9znxRQ1AwIzOHO%2BdtJtAVr%2FLfbOUNqtcVLjCIDVIkpwC%2F65pjJtlr6KVYV72%2FZMfizY1FW4zFtDccGRsb%2Be3TiJ%2BrwkDA6PAPGisYGzDiOWvXX36Nngl3IoNCrPPREE3aQwEZBU2p%2F9Q8VtMKXRq8EGOqUBokSO07wzsHMIOInPVzkWPQpgJFgXrlVbhbQovv3ExCcIMr2Z0eyG93aSjStsi3v3d8q34jgmmZtOlTaaO%2Fm91hLB5%2FOV%2Fufb9mwzg994QuQF3cY75EVQw04onjhxjcjqoRG1%2FQ1fZa5t3N00QlKnaDQOOu1K3mxcXtZO99ZgDETp6hEG2uXAu7N3CX2XMWiL8aj4FOYfJMETGepHWPhBtq2F3MWX&X-Amz-Signature=2e6799db9d4b1a5439b334a1f3ced4f84663ae2f54cc8215e1ac8947ea6bd9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7MUORN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0IZm1H7edscOUw8NKhkTnML%2FhB8Ucpg7keS3FM8a3iAIgc0J2BNIhlUx0vbjyiCinGnmiRMSs43KHGPXDO9mPtjMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGLds4U9NFRfyJ3dyrcA3yP94uFWwBooNc4%2ByaG8WBNRnioLp2%2Bs6asCMYAQQp8xTM%2BZMwlXz0wRA2v1zXbAx9F7OfVRDQKfonab55aVnf%2B37nYbjPxSy9SkNjQIeNgeRrpYkssmJH5XQf8%2B%2F4rqACUkXJGwkswXFYkr9bNbUYp447XnMMRm0lvSut8OauOfjT4rlk8UW6DW2qCgRu%2Fvulws3LQ8DzITb5YXrPWNVe1SmrzX471oBuSaTheG7Sqh8Y09NSgEaNUn4IevDNSfxvaMnpViWwbfvhqJGBW0aUpvi%2FinCJZq1IrLZItRszGphfIeqsPc9U2DtEcwIHK4%2FMP23ClIVQOFIQAiYophS24ce%2FL1To3VzG3jSZlTnsSF1e2WegWuW%2Bxh9OZYKe4GtxDOCF3sQkoziRVxwm0fdLY%2BuQMM5aUUbXU6aqBIr3rPgnsVCwCPfR4KGiLQHsfgm95AZnv2ax%2FSH%2FCuHQ7I9kYkkr%2FQrh5TZJ6yQ4cYUvQr9znxRQ1AwIzOHO%2BdtJtAVr%2FLfbOUNqtcVLjCIDVIkpwC%2F65pjJtlr6KVYV72%2FZMfizY1FW4zFtDccGRsb%2Be3TiJ%2BrwkDA6PAPGisYGzDiOWvXX36Nngl3IoNCrPPREE3aQwEZBU2p%2F9Q8VtMKXRq8EGOqUBokSO07wzsHMIOInPVzkWPQpgJFgXrlVbhbQovv3ExCcIMr2Z0eyG93aSjStsi3v3d8q34jgmmZtOlTaaO%2Fm91hLB5%2FOV%2Fufb9mwzg994QuQF3cY75EVQw04onjhxjcjqoRG1%2FQ1fZa5t3N00QlKnaDQOOu1K3mxcXtZO99ZgDETp6hEG2uXAu7N3CX2XMWiL8aj4FOYfJMETGepHWPhBtq2F3MWX&X-Amz-Signature=131b524dded0aa21834784fc579579cfa5642db9db8f05f0661a0ea1b57f9563&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7MUORN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0IZm1H7edscOUw8NKhkTnML%2FhB8Ucpg7keS3FM8a3iAIgc0J2BNIhlUx0vbjyiCinGnmiRMSs43KHGPXDO9mPtjMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGLds4U9NFRfyJ3dyrcA3yP94uFWwBooNc4%2ByaG8WBNRnioLp2%2Bs6asCMYAQQp8xTM%2BZMwlXz0wRA2v1zXbAx9F7OfVRDQKfonab55aVnf%2B37nYbjPxSy9SkNjQIeNgeRrpYkssmJH5XQf8%2B%2F4rqACUkXJGwkswXFYkr9bNbUYp447XnMMRm0lvSut8OauOfjT4rlk8UW6DW2qCgRu%2Fvulws3LQ8DzITb5YXrPWNVe1SmrzX471oBuSaTheG7Sqh8Y09NSgEaNUn4IevDNSfxvaMnpViWwbfvhqJGBW0aUpvi%2FinCJZq1IrLZItRszGphfIeqsPc9U2DtEcwIHK4%2FMP23ClIVQOFIQAiYophS24ce%2FL1To3VzG3jSZlTnsSF1e2WegWuW%2Bxh9OZYKe4GtxDOCF3sQkoziRVxwm0fdLY%2BuQMM5aUUbXU6aqBIr3rPgnsVCwCPfR4KGiLQHsfgm95AZnv2ax%2FSH%2FCuHQ7I9kYkkr%2FQrh5TZJ6yQ4cYUvQr9znxRQ1AwIzOHO%2BdtJtAVr%2FLfbOUNqtcVLjCIDVIkpwC%2F65pjJtlr6KVYV72%2FZMfizY1FW4zFtDccGRsb%2Be3TiJ%2BrwkDA6PAPGisYGzDiOWvXX36Nngl3IoNCrPPREE3aQwEZBU2p%2F9Q8VtMKXRq8EGOqUBokSO07wzsHMIOInPVzkWPQpgJFgXrlVbhbQovv3ExCcIMr2Z0eyG93aSjStsi3v3d8q34jgmmZtOlTaaO%2Fm91hLB5%2FOV%2Fufb9mwzg994QuQF3cY75EVQw04onjhxjcjqoRG1%2FQ1fZa5t3N00QlKnaDQOOu1K3mxcXtZO99ZgDETp6hEG2uXAu7N3CX2XMWiL8aj4FOYfJMETGepHWPhBtq2F3MWX&X-Amz-Signature=20c1b1a3679260b378f03a9012b7111a036c66c8b6e7704df870a7aff7d71c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U7MUORN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0IZm1H7edscOUw8NKhkTnML%2FhB8Ucpg7keS3FM8a3iAIgc0J2BNIhlUx0vbjyiCinGnmiRMSs43KHGPXDO9mPtjMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGLds4U9NFRfyJ3dyrcA3yP94uFWwBooNc4%2ByaG8WBNRnioLp2%2Bs6asCMYAQQp8xTM%2BZMwlXz0wRA2v1zXbAx9F7OfVRDQKfonab55aVnf%2B37nYbjPxSy9SkNjQIeNgeRrpYkssmJH5XQf8%2B%2F4rqACUkXJGwkswXFYkr9bNbUYp447XnMMRm0lvSut8OauOfjT4rlk8UW6DW2qCgRu%2Fvulws3LQ8DzITb5YXrPWNVe1SmrzX471oBuSaTheG7Sqh8Y09NSgEaNUn4IevDNSfxvaMnpViWwbfvhqJGBW0aUpvi%2FinCJZq1IrLZItRszGphfIeqsPc9U2DtEcwIHK4%2FMP23ClIVQOFIQAiYophS24ce%2FL1To3VzG3jSZlTnsSF1e2WegWuW%2Bxh9OZYKe4GtxDOCF3sQkoziRVxwm0fdLY%2BuQMM5aUUbXU6aqBIr3rPgnsVCwCPfR4KGiLQHsfgm95AZnv2ax%2FSH%2FCuHQ7I9kYkkr%2FQrh5TZJ6yQ4cYUvQr9znxRQ1AwIzOHO%2BdtJtAVr%2FLfbOUNqtcVLjCIDVIkpwC%2F65pjJtlr6KVYV72%2FZMfizY1FW4zFtDccGRsb%2Be3TiJ%2BrwkDA6PAPGisYGzDiOWvXX36Nngl3IoNCrPPREE3aQwEZBU2p%2F9Q8VtMKXRq8EGOqUBokSO07wzsHMIOInPVzkWPQpgJFgXrlVbhbQovv3ExCcIMr2Z0eyG93aSjStsi3v3d8q34jgmmZtOlTaaO%2Fm91hLB5%2FOV%2Fufb9mwzg994QuQF3cY75EVQw04onjhxjcjqoRG1%2FQ1fZa5t3N00QlKnaDQOOu1K3mxcXtZO99ZgDETp6hEG2uXAu7N3CX2XMWiL8aj4FOYfJMETGepHWPhBtq2F3MWX&X-Amz-Signature=0811d42baa98436c240e4699fe6dfc011a70747235aed4d093cf149cb5455c63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
