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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZFQPHL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdr4YkBWZTc%2BVCqv8KaLHD13ZQySkejaoJOW2T9rHeQAIgLRc9jFiC0UmV7cSQrZRIz29u5e4ZL2bjS8LT8zN18c8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8fYEvUOuyRGuBV6ircAwRbBoKQ5qaP8H32WPOm4r6VgXFeKL18XkjifjOOex1LWI7eFNARVtMOG4QfuzHpTEEeF8rJt7K5QbJ2qKUgY7f4NCJr3V1Zp0wmYJABgNBWpRG4kDBfUighMrCeHq8fVhKOR2mRYmKPaQfuZ3AcizieLEuVEJLEjp8KQNc7ZC%2Fw%2BHXIubhy4Mt1WALyKzdKe9YglN8nIRNZ5gQreaENMpzVoAEmRWtN9sU8%2FugO1d6wsi7IoDxuauHYl62i18SlgvXClO0z6KVSRenbqDtpbg7TrnU%2FmYV38cQTOVW8ExFvh1%2FRCVHm3eJrafit%2FmqXAp1mE%2FSVPhF%2BUireuDETHrSxEcwblQMqs%2F8VaVeM7jwZPvN1fRkEtwEcjy96oAK4Kse6yX9F5q1Gh4YJTlnp8UGTq%2FLr%2BtnlqbfPVW2dEKXwwWPaVt6BKOqMK0I90%2BF9QZA8%2BtDDN1ExAgRzUf6hbY4Ob4hYc%2Bh5BR2vO4PHNVTdXJt7ztj3IAFt0SCXTJJfZMETeu8RtIDhXaxkUEYRzQY%2BokGAhfmJK57u%2FkqizcoQ0%2BZXuytyUvgRwW8r1R%2B6vfriVmFtYKNhC055EzyGyZ6Xibaau7Ko1ZXQbXVaTE7VNngPM09DJKwCGMq%2FMIv%2Bo8QGOqUB83epWDiyGnIrtI8f6nA%2FeX0qDl5TYWQxdh2OPPZGI23djXc3x5SLu5K5bGshIF5lE6d9BACbgIzVcfHb9PEv27u9SKp5ZdytKSFkOyLsoItcZIbE5Wb8cBx19hPVXJmEYtWVQwjBNemQF72SHfV1DtM8NvizG%2BuYyWDyO2tevt1PcAWmmMq3DpL%2BkT4CH%2FgpbAOla2akiNlQ9a60V03Sqvh6V%2BMz&X-Amz-Signature=c819070fee95ae3e6dcd3d4754da72222608bf0f5e93b6dfd450f6e26afc8537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZFQPHL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdr4YkBWZTc%2BVCqv8KaLHD13ZQySkejaoJOW2T9rHeQAIgLRc9jFiC0UmV7cSQrZRIz29u5e4ZL2bjS8LT8zN18c8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8fYEvUOuyRGuBV6ircAwRbBoKQ5qaP8H32WPOm4r6VgXFeKL18XkjifjOOex1LWI7eFNARVtMOG4QfuzHpTEEeF8rJt7K5QbJ2qKUgY7f4NCJr3V1Zp0wmYJABgNBWpRG4kDBfUighMrCeHq8fVhKOR2mRYmKPaQfuZ3AcizieLEuVEJLEjp8KQNc7ZC%2Fw%2BHXIubhy4Mt1WALyKzdKe9YglN8nIRNZ5gQreaENMpzVoAEmRWtN9sU8%2FugO1d6wsi7IoDxuauHYl62i18SlgvXClO0z6KVSRenbqDtpbg7TrnU%2FmYV38cQTOVW8ExFvh1%2FRCVHm3eJrafit%2FmqXAp1mE%2FSVPhF%2BUireuDETHrSxEcwblQMqs%2F8VaVeM7jwZPvN1fRkEtwEcjy96oAK4Kse6yX9F5q1Gh4YJTlnp8UGTq%2FLr%2BtnlqbfPVW2dEKXwwWPaVt6BKOqMK0I90%2BF9QZA8%2BtDDN1ExAgRzUf6hbY4Ob4hYc%2Bh5BR2vO4PHNVTdXJt7ztj3IAFt0SCXTJJfZMETeu8RtIDhXaxkUEYRzQY%2BokGAhfmJK57u%2FkqizcoQ0%2BZXuytyUvgRwW8r1R%2B6vfriVmFtYKNhC055EzyGyZ6Xibaau7Ko1ZXQbXVaTE7VNngPM09DJKwCGMq%2FMIv%2Bo8QGOqUB83epWDiyGnIrtI8f6nA%2FeX0qDl5TYWQxdh2OPPZGI23djXc3x5SLu5K5bGshIF5lE6d9BACbgIzVcfHb9PEv27u9SKp5ZdytKSFkOyLsoItcZIbE5Wb8cBx19hPVXJmEYtWVQwjBNemQF72SHfV1DtM8NvizG%2BuYyWDyO2tevt1PcAWmmMq3DpL%2BkT4CH%2FgpbAOla2akiNlQ9a60V03Sqvh6V%2BMz&X-Amz-Signature=44de8491e5a25913b61e2b750490b2a0719fdf597c583bd923e5a97ce70d3dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZFQPHL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdr4YkBWZTc%2BVCqv8KaLHD13ZQySkejaoJOW2T9rHeQAIgLRc9jFiC0UmV7cSQrZRIz29u5e4ZL2bjS8LT8zN18c8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8fYEvUOuyRGuBV6ircAwRbBoKQ5qaP8H32WPOm4r6VgXFeKL18XkjifjOOex1LWI7eFNARVtMOG4QfuzHpTEEeF8rJt7K5QbJ2qKUgY7f4NCJr3V1Zp0wmYJABgNBWpRG4kDBfUighMrCeHq8fVhKOR2mRYmKPaQfuZ3AcizieLEuVEJLEjp8KQNc7ZC%2Fw%2BHXIubhy4Mt1WALyKzdKe9YglN8nIRNZ5gQreaENMpzVoAEmRWtN9sU8%2FugO1d6wsi7IoDxuauHYl62i18SlgvXClO0z6KVSRenbqDtpbg7TrnU%2FmYV38cQTOVW8ExFvh1%2FRCVHm3eJrafit%2FmqXAp1mE%2FSVPhF%2BUireuDETHrSxEcwblQMqs%2F8VaVeM7jwZPvN1fRkEtwEcjy96oAK4Kse6yX9F5q1Gh4YJTlnp8UGTq%2FLr%2BtnlqbfPVW2dEKXwwWPaVt6BKOqMK0I90%2BF9QZA8%2BtDDN1ExAgRzUf6hbY4Ob4hYc%2Bh5BR2vO4PHNVTdXJt7ztj3IAFt0SCXTJJfZMETeu8RtIDhXaxkUEYRzQY%2BokGAhfmJK57u%2FkqizcoQ0%2BZXuytyUvgRwW8r1R%2B6vfriVmFtYKNhC055EzyGyZ6Xibaau7Ko1ZXQbXVaTE7VNngPM09DJKwCGMq%2FMIv%2Bo8QGOqUB83epWDiyGnIrtI8f6nA%2FeX0qDl5TYWQxdh2OPPZGI23djXc3x5SLu5K5bGshIF5lE6d9BACbgIzVcfHb9PEv27u9SKp5ZdytKSFkOyLsoItcZIbE5Wb8cBx19hPVXJmEYtWVQwjBNemQF72SHfV1DtM8NvizG%2BuYyWDyO2tevt1PcAWmmMq3DpL%2BkT4CH%2FgpbAOla2akiNlQ9a60V03Sqvh6V%2BMz&X-Amz-Signature=bee4f40f5829aff41e8de229c70f3fcff2ab8121c5e2b9054004a08c77ca8c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZFQPHL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdr4YkBWZTc%2BVCqv8KaLHD13ZQySkejaoJOW2T9rHeQAIgLRc9jFiC0UmV7cSQrZRIz29u5e4ZL2bjS8LT8zN18c8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8fYEvUOuyRGuBV6ircAwRbBoKQ5qaP8H32WPOm4r6VgXFeKL18XkjifjOOex1LWI7eFNARVtMOG4QfuzHpTEEeF8rJt7K5QbJ2qKUgY7f4NCJr3V1Zp0wmYJABgNBWpRG4kDBfUighMrCeHq8fVhKOR2mRYmKPaQfuZ3AcizieLEuVEJLEjp8KQNc7ZC%2Fw%2BHXIubhy4Mt1WALyKzdKe9YglN8nIRNZ5gQreaENMpzVoAEmRWtN9sU8%2FugO1d6wsi7IoDxuauHYl62i18SlgvXClO0z6KVSRenbqDtpbg7TrnU%2FmYV38cQTOVW8ExFvh1%2FRCVHm3eJrafit%2FmqXAp1mE%2FSVPhF%2BUireuDETHrSxEcwblQMqs%2F8VaVeM7jwZPvN1fRkEtwEcjy96oAK4Kse6yX9F5q1Gh4YJTlnp8UGTq%2FLr%2BtnlqbfPVW2dEKXwwWPaVt6BKOqMK0I90%2BF9QZA8%2BtDDN1ExAgRzUf6hbY4Ob4hYc%2Bh5BR2vO4PHNVTdXJt7ztj3IAFt0SCXTJJfZMETeu8RtIDhXaxkUEYRzQY%2BokGAhfmJK57u%2FkqizcoQ0%2BZXuytyUvgRwW8r1R%2B6vfriVmFtYKNhC055EzyGyZ6Xibaau7Ko1ZXQbXVaTE7VNngPM09DJKwCGMq%2FMIv%2Bo8QGOqUB83epWDiyGnIrtI8f6nA%2FeX0qDl5TYWQxdh2OPPZGI23djXc3x5SLu5K5bGshIF5lE6d9BACbgIzVcfHb9PEv27u9SKp5ZdytKSFkOyLsoItcZIbE5Wb8cBx19hPVXJmEYtWVQwjBNemQF72SHfV1DtM8NvizG%2BuYyWDyO2tevt1PcAWmmMq3DpL%2BkT4CH%2FgpbAOla2akiNlQ9a60V03Sqvh6V%2BMz&X-Amz-Signature=8566a068a5999a83c1c0639d79d7dd1f3250aee7a494038a54fd44ada9ffe7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZFQPHL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdr4YkBWZTc%2BVCqv8KaLHD13ZQySkejaoJOW2T9rHeQAIgLRc9jFiC0UmV7cSQrZRIz29u5e4ZL2bjS8LT8zN18c8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8fYEvUOuyRGuBV6ircAwRbBoKQ5qaP8H32WPOm4r6VgXFeKL18XkjifjOOex1LWI7eFNARVtMOG4QfuzHpTEEeF8rJt7K5QbJ2qKUgY7f4NCJr3V1Zp0wmYJABgNBWpRG4kDBfUighMrCeHq8fVhKOR2mRYmKPaQfuZ3AcizieLEuVEJLEjp8KQNc7ZC%2Fw%2BHXIubhy4Mt1WALyKzdKe9YglN8nIRNZ5gQreaENMpzVoAEmRWtN9sU8%2FugO1d6wsi7IoDxuauHYl62i18SlgvXClO0z6KVSRenbqDtpbg7TrnU%2FmYV38cQTOVW8ExFvh1%2FRCVHm3eJrafit%2FmqXAp1mE%2FSVPhF%2BUireuDETHrSxEcwblQMqs%2F8VaVeM7jwZPvN1fRkEtwEcjy96oAK4Kse6yX9F5q1Gh4YJTlnp8UGTq%2FLr%2BtnlqbfPVW2dEKXwwWPaVt6BKOqMK0I90%2BF9QZA8%2BtDDN1ExAgRzUf6hbY4Ob4hYc%2Bh5BR2vO4PHNVTdXJt7ztj3IAFt0SCXTJJfZMETeu8RtIDhXaxkUEYRzQY%2BokGAhfmJK57u%2FkqizcoQ0%2BZXuytyUvgRwW8r1R%2B6vfriVmFtYKNhC055EzyGyZ6Xibaau7Ko1ZXQbXVaTE7VNngPM09DJKwCGMq%2FMIv%2Bo8QGOqUB83epWDiyGnIrtI8f6nA%2FeX0qDl5TYWQxdh2OPPZGI23djXc3x5SLu5K5bGshIF5lE6d9BACbgIzVcfHb9PEv27u9SKp5ZdytKSFkOyLsoItcZIbE5Wb8cBx19hPVXJmEYtWVQwjBNemQF72SHfV1DtM8NvizG%2BuYyWDyO2tevt1PcAWmmMq3DpL%2BkT4CH%2FgpbAOla2akiNlQ9a60V03Sqvh6V%2BMz&X-Amz-Signature=91168a87509a5ecdb2b8d23da8703aa08d9f07abfcaeb6e566535fcc2c4e87b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZFQPHL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdr4YkBWZTc%2BVCqv8KaLHD13ZQySkejaoJOW2T9rHeQAIgLRc9jFiC0UmV7cSQrZRIz29u5e4ZL2bjS8LT8zN18c8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8fYEvUOuyRGuBV6ircAwRbBoKQ5qaP8H32WPOm4r6VgXFeKL18XkjifjOOex1LWI7eFNARVtMOG4QfuzHpTEEeF8rJt7K5QbJ2qKUgY7f4NCJr3V1Zp0wmYJABgNBWpRG4kDBfUighMrCeHq8fVhKOR2mRYmKPaQfuZ3AcizieLEuVEJLEjp8KQNc7ZC%2Fw%2BHXIubhy4Mt1WALyKzdKe9YglN8nIRNZ5gQreaENMpzVoAEmRWtN9sU8%2FugO1d6wsi7IoDxuauHYl62i18SlgvXClO0z6KVSRenbqDtpbg7TrnU%2FmYV38cQTOVW8ExFvh1%2FRCVHm3eJrafit%2FmqXAp1mE%2FSVPhF%2BUireuDETHrSxEcwblQMqs%2F8VaVeM7jwZPvN1fRkEtwEcjy96oAK4Kse6yX9F5q1Gh4YJTlnp8UGTq%2FLr%2BtnlqbfPVW2dEKXwwWPaVt6BKOqMK0I90%2BF9QZA8%2BtDDN1ExAgRzUf6hbY4Ob4hYc%2Bh5BR2vO4PHNVTdXJt7ztj3IAFt0SCXTJJfZMETeu8RtIDhXaxkUEYRzQY%2BokGAhfmJK57u%2FkqizcoQ0%2BZXuytyUvgRwW8r1R%2B6vfriVmFtYKNhC055EzyGyZ6Xibaau7Ko1ZXQbXVaTE7VNngPM09DJKwCGMq%2FMIv%2Bo8QGOqUB83epWDiyGnIrtI8f6nA%2FeX0qDl5TYWQxdh2OPPZGI23djXc3x5SLu5K5bGshIF5lE6d9BACbgIzVcfHb9PEv27u9SKp5ZdytKSFkOyLsoItcZIbE5Wb8cBx19hPVXJmEYtWVQwjBNemQF72SHfV1DtM8NvizG%2BuYyWDyO2tevt1PcAWmmMq3DpL%2BkT4CH%2FgpbAOla2akiNlQ9a60V03Sqvh6V%2BMz&X-Amz-Signature=b86715259b243bfc5591d6c218b0e094f8de3ee2bc211a4109155ab2da62f7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZFQPHL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdr4YkBWZTc%2BVCqv8KaLHD13ZQySkejaoJOW2T9rHeQAIgLRc9jFiC0UmV7cSQrZRIz29u5e4ZL2bjS8LT8zN18c8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8fYEvUOuyRGuBV6ircAwRbBoKQ5qaP8H32WPOm4r6VgXFeKL18XkjifjOOex1LWI7eFNARVtMOG4QfuzHpTEEeF8rJt7K5QbJ2qKUgY7f4NCJr3V1Zp0wmYJABgNBWpRG4kDBfUighMrCeHq8fVhKOR2mRYmKPaQfuZ3AcizieLEuVEJLEjp8KQNc7ZC%2Fw%2BHXIubhy4Mt1WALyKzdKe9YglN8nIRNZ5gQreaENMpzVoAEmRWtN9sU8%2FugO1d6wsi7IoDxuauHYl62i18SlgvXClO0z6KVSRenbqDtpbg7TrnU%2FmYV38cQTOVW8ExFvh1%2FRCVHm3eJrafit%2FmqXAp1mE%2FSVPhF%2BUireuDETHrSxEcwblQMqs%2F8VaVeM7jwZPvN1fRkEtwEcjy96oAK4Kse6yX9F5q1Gh4YJTlnp8UGTq%2FLr%2BtnlqbfPVW2dEKXwwWPaVt6BKOqMK0I90%2BF9QZA8%2BtDDN1ExAgRzUf6hbY4Ob4hYc%2Bh5BR2vO4PHNVTdXJt7ztj3IAFt0SCXTJJfZMETeu8RtIDhXaxkUEYRzQY%2BokGAhfmJK57u%2FkqizcoQ0%2BZXuytyUvgRwW8r1R%2B6vfriVmFtYKNhC055EzyGyZ6Xibaau7Ko1ZXQbXVaTE7VNngPM09DJKwCGMq%2FMIv%2Bo8QGOqUB83epWDiyGnIrtI8f6nA%2FeX0qDl5TYWQxdh2OPPZGI23djXc3x5SLu5K5bGshIF5lE6d9BACbgIzVcfHb9PEv27u9SKp5ZdytKSFkOyLsoItcZIbE5Wb8cBx19hPVXJmEYtWVQwjBNemQF72SHfV1DtM8NvizG%2BuYyWDyO2tevt1PcAWmmMq3DpL%2BkT4CH%2FgpbAOla2akiNlQ9a60V03Sqvh6V%2BMz&X-Amz-Signature=3082ced4392f4334c3e21192748ab0d5a0bbe452f1d0e68c1e363a5211754618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZFQPHL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdr4YkBWZTc%2BVCqv8KaLHD13ZQySkejaoJOW2T9rHeQAIgLRc9jFiC0UmV7cSQrZRIz29u5e4ZL2bjS8LT8zN18c8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8fYEvUOuyRGuBV6ircAwRbBoKQ5qaP8H32WPOm4r6VgXFeKL18XkjifjOOex1LWI7eFNARVtMOG4QfuzHpTEEeF8rJt7K5QbJ2qKUgY7f4NCJr3V1Zp0wmYJABgNBWpRG4kDBfUighMrCeHq8fVhKOR2mRYmKPaQfuZ3AcizieLEuVEJLEjp8KQNc7ZC%2Fw%2BHXIubhy4Mt1WALyKzdKe9YglN8nIRNZ5gQreaENMpzVoAEmRWtN9sU8%2FugO1d6wsi7IoDxuauHYl62i18SlgvXClO0z6KVSRenbqDtpbg7TrnU%2FmYV38cQTOVW8ExFvh1%2FRCVHm3eJrafit%2FmqXAp1mE%2FSVPhF%2BUireuDETHrSxEcwblQMqs%2F8VaVeM7jwZPvN1fRkEtwEcjy96oAK4Kse6yX9F5q1Gh4YJTlnp8UGTq%2FLr%2BtnlqbfPVW2dEKXwwWPaVt6BKOqMK0I90%2BF9QZA8%2BtDDN1ExAgRzUf6hbY4Ob4hYc%2Bh5BR2vO4PHNVTdXJt7ztj3IAFt0SCXTJJfZMETeu8RtIDhXaxkUEYRzQY%2BokGAhfmJK57u%2FkqizcoQ0%2BZXuytyUvgRwW8r1R%2B6vfriVmFtYKNhC055EzyGyZ6Xibaau7Ko1ZXQbXVaTE7VNngPM09DJKwCGMq%2FMIv%2Bo8QGOqUB83epWDiyGnIrtI8f6nA%2FeX0qDl5TYWQxdh2OPPZGI23djXc3x5SLu5K5bGshIF5lE6d9BACbgIzVcfHb9PEv27u9SKp5ZdytKSFkOyLsoItcZIbE5Wb8cBx19hPVXJmEYtWVQwjBNemQF72SHfV1DtM8NvizG%2BuYyWDyO2tevt1PcAWmmMq3DpL%2BkT4CH%2FgpbAOla2akiNlQ9a60V03Sqvh6V%2BMz&X-Amz-Signature=b4b4bfb3bf9aa8afef7005ef9b08ee0296f096e228655b4623599795ea5d3647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
