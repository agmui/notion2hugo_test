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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKE2EGX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgSffg%2FggTuZZoaD%2FI7pweQC7KV4HArs7XW83oux%2BaUQIgPBzH8GTHIQlI0GZ6txHGnMF56eO3SQyBFiGPNSx5TQcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIBCR3ifjots%2B%2FBR8CrcA%2FCdQnJTRvn5LU9oP4Y3eTbZ8%2Bcrd0rnXMeTF%2FgXscLCFQODY9ggtMp99aT8cq%2F0nvJwyDt8eaDI03rX8rAcady2clemZerRsc%2Fj9Z6KmMoqZJArVM3MipLw566q8c3bBiBnrfTS3Z5hCphna4IwwiYzdWF9s3iH3POBjbbNMo5vowizvb5HJjpEstBbTozZ%2F3ddipuXodxxfzxWcoSUq0tK9YW1763m3qEJUN7SQmCyCW7rBtasW7TZiU67DVGu1rt3VGqKY1YI4Rhovu7mkxuKcK%2BOaqOxPGtyUTsRI12NfSQGll%2FIpwUmughgV2HWwL3FLj%2FsgS3TFmq5WSvjOSief6P27GnyjDi%2FvXU%2FBI7w4s2myG%2Ba%2F5Vv4eINl%2F6R3J8lDrbMCdWHW0Bp9hMDpK0JP8YOfiOd8WmUA3jKh2AoU2yQ3pqJ1dukav6plsHBRnpqLTmEi6VKTms0kIu2NwYK4Syrcb509tnrBDyNsS74cD45Pfvf%2BxIESUIFwG0pkCRgjNbqUeU6Asaz6cekfY0ibBqxGaaEFvYXkCV4PbeiaIrMusbSPGng5t5L0tXhJ7uSwVTvYOMf9A%2F4rhAYGcvnTjQXxPrM3y7im3aq%2FjvyZacT3KcKVyAq3C0yMIHvxMIGOqUBYjNhdBoRzQ62q4BnXReWO0xCUmUuZXSAdSbuRNlXN28Y1eUA8mZ0IP8diCiiLcj6dh3d7WXA%2BJ8GVfU9%2FqRzNfXxCYx2UsJci15oHowQ9%2FChO84QYIh91dpHlX%2BEpTyR5lbpD1XncQN6UOg2i6BQss82kOffNgxJhWOyI%2FN9o4j%2BjLqqMTGcDG43Z4FtOQqEktX%2FG28yjtnw6k8R3BWm68gygSac&X-Amz-Signature=0ee914131c9d33f2b6876c9b56ccf7c6bdc13f761d99ea3d3d844a7e13be52af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKE2EGX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgSffg%2FggTuZZoaD%2FI7pweQC7KV4HArs7XW83oux%2BaUQIgPBzH8GTHIQlI0GZ6txHGnMF56eO3SQyBFiGPNSx5TQcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIBCR3ifjots%2B%2FBR8CrcA%2FCdQnJTRvn5LU9oP4Y3eTbZ8%2Bcrd0rnXMeTF%2FgXscLCFQODY9ggtMp99aT8cq%2F0nvJwyDt8eaDI03rX8rAcady2clemZerRsc%2Fj9Z6KmMoqZJArVM3MipLw566q8c3bBiBnrfTS3Z5hCphna4IwwiYzdWF9s3iH3POBjbbNMo5vowizvb5HJjpEstBbTozZ%2F3ddipuXodxxfzxWcoSUq0tK9YW1763m3qEJUN7SQmCyCW7rBtasW7TZiU67DVGu1rt3VGqKY1YI4Rhovu7mkxuKcK%2BOaqOxPGtyUTsRI12NfSQGll%2FIpwUmughgV2HWwL3FLj%2FsgS3TFmq5WSvjOSief6P27GnyjDi%2FvXU%2FBI7w4s2myG%2Ba%2F5Vv4eINl%2F6R3J8lDrbMCdWHW0Bp9hMDpK0JP8YOfiOd8WmUA3jKh2AoU2yQ3pqJ1dukav6plsHBRnpqLTmEi6VKTms0kIu2NwYK4Syrcb509tnrBDyNsS74cD45Pfvf%2BxIESUIFwG0pkCRgjNbqUeU6Asaz6cekfY0ibBqxGaaEFvYXkCV4PbeiaIrMusbSPGng5t5L0tXhJ7uSwVTvYOMf9A%2F4rhAYGcvnTjQXxPrM3y7im3aq%2FjvyZacT3KcKVyAq3C0yMIHvxMIGOqUBYjNhdBoRzQ62q4BnXReWO0xCUmUuZXSAdSbuRNlXN28Y1eUA8mZ0IP8diCiiLcj6dh3d7WXA%2BJ8GVfU9%2FqRzNfXxCYx2UsJci15oHowQ9%2FChO84QYIh91dpHlX%2BEpTyR5lbpD1XncQN6UOg2i6BQss82kOffNgxJhWOyI%2FN9o4j%2BjLqqMTGcDG43Z4FtOQqEktX%2FG28yjtnw6k8R3BWm68gygSac&X-Amz-Signature=1c1605fdf22bf586d3d204a8f566def8db6da188c5d1765016de0449f43280cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKE2EGX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgSffg%2FggTuZZoaD%2FI7pweQC7KV4HArs7XW83oux%2BaUQIgPBzH8GTHIQlI0GZ6txHGnMF56eO3SQyBFiGPNSx5TQcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIBCR3ifjots%2B%2FBR8CrcA%2FCdQnJTRvn5LU9oP4Y3eTbZ8%2Bcrd0rnXMeTF%2FgXscLCFQODY9ggtMp99aT8cq%2F0nvJwyDt8eaDI03rX8rAcady2clemZerRsc%2Fj9Z6KmMoqZJArVM3MipLw566q8c3bBiBnrfTS3Z5hCphna4IwwiYzdWF9s3iH3POBjbbNMo5vowizvb5HJjpEstBbTozZ%2F3ddipuXodxxfzxWcoSUq0tK9YW1763m3qEJUN7SQmCyCW7rBtasW7TZiU67DVGu1rt3VGqKY1YI4Rhovu7mkxuKcK%2BOaqOxPGtyUTsRI12NfSQGll%2FIpwUmughgV2HWwL3FLj%2FsgS3TFmq5WSvjOSief6P27GnyjDi%2FvXU%2FBI7w4s2myG%2Ba%2F5Vv4eINl%2F6R3J8lDrbMCdWHW0Bp9hMDpK0JP8YOfiOd8WmUA3jKh2AoU2yQ3pqJ1dukav6plsHBRnpqLTmEi6VKTms0kIu2NwYK4Syrcb509tnrBDyNsS74cD45Pfvf%2BxIESUIFwG0pkCRgjNbqUeU6Asaz6cekfY0ibBqxGaaEFvYXkCV4PbeiaIrMusbSPGng5t5L0tXhJ7uSwVTvYOMf9A%2F4rhAYGcvnTjQXxPrM3y7im3aq%2FjvyZacT3KcKVyAq3C0yMIHvxMIGOqUBYjNhdBoRzQ62q4BnXReWO0xCUmUuZXSAdSbuRNlXN28Y1eUA8mZ0IP8diCiiLcj6dh3d7WXA%2BJ8GVfU9%2FqRzNfXxCYx2UsJci15oHowQ9%2FChO84QYIh91dpHlX%2BEpTyR5lbpD1XncQN6UOg2i6BQss82kOffNgxJhWOyI%2FN9o4j%2BjLqqMTGcDG43Z4FtOQqEktX%2FG28yjtnw6k8R3BWm68gygSac&X-Amz-Signature=d09a5e7d408307dd4d4060bf730d870af1efa0a828f5293b280d290aa70faf2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKE2EGX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgSffg%2FggTuZZoaD%2FI7pweQC7KV4HArs7XW83oux%2BaUQIgPBzH8GTHIQlI0GZ6txHGnMF56eO3SQyBFiGPNSx5TQcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIBCR3ifjots%2B%2FBR8CrcA%2FCdQnJTRvn5LU9oP4Y3eTbZ8%2Bcrd0rnXMeTF%2FgXscLCFQODY9ggtMp99aT8cq%2F0nvJwyDt8eaDI03rX8rAcady2clemZerRsc%2Fj9Z6KmMoqZJArVM3MipLw566q8c3bBiBnrfTS3Z5hCphna4IwwiYzdWF9s3iH3POBjbbNMo5vowizvb5HJjpEstBbTozZ%2F3ddipuXodxxfzxWcoSUq0tK9YW1763m3qEJUN7SQmCyCW7rBtasW7TZiU67DVGu1rt3VGqKY1YI4Rhovu7mkxuKcK%2BOaqOxPGtyUTsRI12NfSQGll%2FIpwUmughgV2HWwL3FLj%2FsgS3TFmq5WSvjOSief6P27GnyjDi%2FvXU%2FBI7w4s2myG%2Ba%2F5Vv4eINl%2F6R3J8lDrbMCdWHW0Bp9hMDpK0JP8YOfiOd8WmUA3jKh2AoU2yQ3pqJ1dukav6plsHBRnpqLTmEi6VKTms0kIu2NwYK4Syrcb509tnrBDyNsS74cD45Pfvf%2BxIESUIFwG0pkCRgjNbqUeU6Asaz6cekfY0ibBqxGaaEFvYXkCV4PbeiaIrMusbSPGng5t5L0tXhJ7uSwVTvYOMf9A%2F4rhAYGcvnTjQXxPrM3y7im3aq%2FjvyZacT3KcKVyAq3C0yMIHvxMIGOqUBYjNhdBoRzQ62q4BnXReWO0xCUmUuZXSAdSbuRNlXN28Y1eUA8mZ0IP8diCiiLcj6dh3d7WXA%2BJ8GVfU9%2FqRzNfXxCYx2UsJci15oHowQ9%2FChO84QYIh91dpHlX%2BEpTyR5lbpD1XncQN6UOg2i6BQss82kOffNgxJhWOyI%2FN9o4j%2BjLqqMTGcDG43Z4FtOQqEktX%2FG28yjtnw6k8R3BWm68gygSac&X-Amz-Signature=ef23fc2a30473f3e214adf3a2547cfe944236c4d60fb9b0058474e3a72023360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKE2EGX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgSffg%2FggTuZZoaD%2FI7pweQC7KV4HArs7XW83oux%2BaUQIgPBzH8GTHIQlI0GZ6txHGnMF56eO3SQyBFiGPNSx5TQcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIBCR3ifjots%2B%2FBR8CrcA%2FCdQnJTRvn5LU9oP4Y3eTbZ8%2Bcrd0rnXMeTF%2FgXscLCFQODY9ggtMp99aT8cq%2F0nvJwyDt8eaDI03rX8rAcady2clemZerRsc%2Fj9Z6KmMoqZJArVM3MipLw566q8c3bBiBnrfTS3Z5hCphna4IwwiYzdWF9s3iH3POBjbbNMo5vowizvb5HJjpEstBbTozZ%2F3ddipuXodxxfzxWcoSUq0tK9YW1763m3qEJUN7SQmCyCW7rBtasW7TZiU67DVGu1rt3VGqKY1YI4Rhovu7mkxuKcK%2BOaqOxPGtyUTsRI12NfSQGll%2FIpwUmughgV2HWwL3FLj%2FsgS3TFmq5WSvjOSief6P27GnyjDi%2FvXU%2FBI7w4s2myG%2Ba%2F5Vv4eINl%2F6R3J8lDrbMCdWHW0Bp9hMDpK0JP8YOfiOd8WmUA3jKh2AoU2yQ3pqJ1dukav6plsHBRnpqLTmEi6VKTms0kIu2NwYK4Syrcb509tnrBDyNsS74cD45Pfvf%2BxIESUIFwG0pkCRgjNbqUeU6Asaz6cekfY0ibBqxGaaEFvYXkCV4PbeiaIrMusbSPGng5t5L0tXhJ7uSwVTvYOMf9A%2F4rhAYGcvnTjQXxPrM3y7im3aq%2FjvyZacT3KcKVyAq3C0yMIHvxMIGOqUBYjNhdBoRzQ62q4BnXReWO0xCUmUuZXSAdSbuRNlXN28Y1eUA8mZ0IP8diCiiLcj6dh3d7WXA%2BJ8GVfU9%2FqRzNfXxCYx2UsJci15oHowQ9%2FChO84QYIh91dpHlX%2BEpTyR5lbpD1XncQN6UOg2i6BQss82kOffNgxJhWOyI%2FN9o4j%2BjLqqMTGcDG43Z4FtOQqEktX%2FG28yjtnw6k8R3BWm68gygSac&X-Amz-Signature=8d03af4be26447e5b0454f0aecf6149d3e4c05071b84b4569d5c9899bb5118fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKE2EGX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgSffg%2FggTuZZoaD%2FI7pweQC7KV4HArs7XW83oux%2BaUQIgPBzH8GTHIQlI0GZ6txHGnMF56eO3SQyBFiGPNSx5TQcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIBCR3ifjots%2B%2FBR8CrcA%2FCdQnJTRvn5LU9oP4Y3eTbZ8%2Bcrd0rnXMeTF%2FgXscLCFQODY9ggtMp99aT8cq%2F0nvJwyDt8eaDI03rX8rAcady2clemZerRsc%2Fj9Z6KmMoqZJArVM3MipLw566q8c3bBiBnrfTS3Z5hCphna4IwwiYzdWF9s3iH3POBjbbNMo5vowizvb5HJjpEstBbTozZ%2F3ddipuXodxxfzxWcoSUq0tK9YW1763m3qEJUN7SQmCyCW7rBtasW7TZiU67DVGu1rt3VGqKY1YI4Rhovu7mkxuKcK%2BOaqOxPGtyUTsRI12NfSQGll%2FIpwUmughgV2HWwL3FLj%2FsgS3TFmq5WSvjOSief6P27GnyjDi%2FvXU%2FBI7w4s2myG%2Ba%2F5Vv4eINl%2F6R3J8lDrbMCdWHW0Bp9hMDpK0JP8YOfiOd8WmUA3jKh2AoU2yQ3pqJ1dukav6plsHBRnpqLTmEi6VKTms0kIu2NwYK4Syrcb509tnrBDyNsS74cD45Pfvf%2BxIESUIFwG0pkCRgjNbqUeU6Asaz6cekfY0ibBqxGaaEFvYXkCV4PbeiaIrMusbSPGng5t5L0tXhJ7uSwVTvYOMf9A%2F4rhAYGcvnTjQXxPrM3y7im3aq%2FjvyZacT3KcKVyAq3C0yMIHvxMIGOqUBYjNhdBoRzQ62q4BnXReWO0xCUmUuZXSAdSbuRNlXN28Y1eUA8mZ0IP8diCiiLcj6dh3d7WXA%2BJ8GVfU9%2FqRzNfXxCYx2UsJci15oHowQ9%2FChO84QYIh91dpHlX%2BEpTyR5lbpD1XncQN6UOg2i6BQss82kOffNgxJhWOyI%2FN9o4j%2BjLqqMTGcDG43Z4FtOQqEktX%2FG28yjtnw6k8R3BWm68gygSac&X-Amz-Signature=6ded19d7a768d31c3924f910dedb7faa25d258f8b526f94e604e69d6c21c127c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKE2EGX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgSffg%2FggTuZZoaD%2FI7pweQC7KV4HArs7XW83oux%2BaUQIgPBzH8GTHIQlI0GZ6txHGnMF56eO3SQyBFiGPNSx5TQcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIBCR3ifjots%2B%2FBR8CrcA%2FCdQnJTRvn5LU9oP4Y3eTbZ8%2Bcrd0rnXMeTF%2FgXscLCFQODY9ggtMp99aT8cq%2F0nvJwyDt8eaDI03rX8rAcady2clemZerRsc%2Fj9Z6KmMoqZJArVM3MipLw566q8c3bBiBnrfTS3Z5hCphna4IwwiYzdWF9s3iH3POBjbbNMo5vowizvb5HJjpEstBbTozZ%2F3ddipuXodxxfzxWcoSUq0tK9YW1763m3qEJUN7SQmCyCW7rBtasW7TZiU67DVGu1rt3VGqKY1YI4Rhovu7mkxuKcK%2BOaqOxPGtyUTsRI12NfSQGll%2FIpwUmughgV2HWwL3FLj%2FsgS3TFmq5WSvjOSief6P27GnyjDi%2FvXU%2FBI7w4s2myG%2Ba%2F5Vv4eINl%2F6R3J8lDrbMCdWHW0Bp9hMDpK0JP8YOfiOd8WmUA3jKh2AoU2yQ3pqJ1dukav6plsHBRnpqLTmEi6VKTms0kIu2NwYK4Syrcb509tnrBDyNsS74cD45Pfvf%2BxIESUIFwG0pkCRgjNbqUeU6Asaz6cekfY0ibBqxGaaEFvYXkCV4PbeiaIrMusbSPGng5t5L0tXhJ7uSwVTvYOMf9A%2F4rhAYGcvnTjQXxPrM3y7im3aq%2FjvyZacT3KcKVyAq3C0yMIHvxMIGOqUBYjNhdBoRzQ62q4BnXReWO0xCUmUuZXSAdSbuRNlXN28Y1eUA8mZ0IP8diCiiLcj6dh3d7WXA%2BJ8GVfU9%2FqRzNfXxCYx2UsJci15oHowQ9%2FChO84QYIh91dpHlX%2BEpTyR5lbpD1XncQN6UOg2i6BQss82kOffNgxJhWOyI%2FN9o4j%2BjLqqMTGcDG43Z4FtOQqEktX%2FG28yjtnw6k8R3BWm68gygSac&X-Amz-Signature=7a6bb122b7d04ae621be2827e6fb004584344e99a31296e1e90d3eb874eca97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKE2EGX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgSffg%2FggTuZZoaD%2FI7pweQC7KV4HArs7XW83oux%2BaUQIgPBzH8GTHIQlI0GZ6txHGnMF56eO3SQyBFiGPNSx5TQcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIBCR3ifjots%2B%2FBR8CrcA%2FCdQnJTRvn5LU9oP4Y3eTbZ8%2Bcrd0rnXMeTF%2FgXscLCFQODY9ggtMp99aT8cq%2F0nvJwyDt8eaDI03rX8rAcady2clemZerRsc%2Fj9Z6KmMoqZJArVM3MipLw566q8c3bBiBnrfTS3Z5hCphna4IwwiYzdWF9s3iH3POBjbbNMo5vowizvb5HJjpEstBbTozZ%2F3ddipuXodxxfzxWcoSUq0tK9YW1763m3qEJUN7SQmCyCW7rBtasW7TZiU67DVGu1rt3VGqKY1YI4Rhovu7mkxuKcK%2BOaqOxPGtyUTsRI12NfSQGll%2FIpwUmughgV2HWwL3FLj%2FsgS3TFmq5WSvjOSief6P27GnyjDi%2FvXU%2FBI7w4s2myG%2Ba%2F5Vv4eINl%2F6R3J8lDrbMCdWHW0Bp9hMDpK0JP8YOfiOd8WmUA3jKh2AoU2yQ3pqJ1dukav6plsHBRnpqLTmEi6VKTms0kIu2NwYK4Syrcb509tnrBDyNsS74cD45Pfvf%2BxIESUIFwG0pkCRgjNbqUeU6Asaz6cekfY0ibBqxGaaEFvYXkCV4PbeiaIrMusbSPGng5t5L0tXhJ7uSwVTvYOMf9A%2F4rhAYGcvnTjQXxPrM3y7im3aq%2FjvyZacT3KcKVyAq3C0yMIHvxMIGOqUBYjNhdBoRzQ62q4BnXReWO0xCUmUuZXSAdSbuRNlXN28Y1eUA8mZ0IP8diCiiLcj6dh3d7WXA%2BJ8GVfU9%2FqRzNfXxCYx2UsJci15oHowQ9%2FChO84QYIh91dpHlX%2BEpTyR5lbpD1XncQN6UOg2i6BQss82kOffNgxJhWOyI%2FN9o4j%2BjLqqMTGcDG43Z4FtOQqEktX%2FG28yjtnw6k8R3BWm68gygSac&X-Amz-Signature=77d1f8620b2e6013acd64263d7909a9e41afa75ddace08a99a773c20fa09cd34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
