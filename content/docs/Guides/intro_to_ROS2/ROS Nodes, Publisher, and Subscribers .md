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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLSFHCV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F3w%2F%2BI72pT9qgWO21XD%2BH7UAsyZ9XkOmJxAk%2F%2FYjodAIhAJC3g9DI7Oxb7s%2BFqZeEUx6hge400mpVQ4n7lr%2B2PZGxKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypvFyAoCeXmqmhMYcq3AO8ocdK9EHrH%2Bb7MP%2BwtlJLi8eq3h84sF%2B5pKkmvDGJH8BVAq4mwHVffedxErzQWS4W%2BGUTog2TAGQO2eNXtC9J8mN3ZhvFiVg2XVdw18b7sOYn9v6yz7Cwuu4CBvQ3CvXTcR%2Bjx81zs6%2BFUSCpwzTu8GyVcr5an8LHY3DbtrhtS0bOQ5qwMKaXuNSYx4xaRSbv3ZyWEMpn1u43udnFXaG2xz1yWAFlyYBxPP%2BwIq42lZj1SJ5zd%2FA%2FGQdnROXL35rOTZ6GVVzxJ7Lc9u5muT2CXxTORy9GNJ%2BATNqdHzByuUHX2qUHQrMSG10c34oM46eBgHKJIgtCFTJDmBfdQzTWOs3CUr831E7jdFfFD%2F6Ucd%2FOc27ngm3oc8YbJHDRMSAudvQmkgHgMrsI7VITyap%2F6Fjt6lYlxI1zrld4MHXdF1K61DuGMz1mZqPD0C2261hNSyEOSH6Pm2sZEol36BIXyPFM1GrW6j%2FkTXlkR3cnnJuGaqBEIxhnFGO%2FtTauLsBS7ziDbkIok8OTNh54toiW5QBu5a8K%2F4BPCMz56aeOGx4ic4oooMa%2BGBr83V9ISNm%2FSHRgM3fspExiXlnByNuzE2jWC4teyUPFsjHSTaI7%2B2%2BLO%2B%2FWdUZqWiOUaTDG%2FqPEBjqkAS%2BUQ8sTMI3gSCO7wdyRHJSY9%2B0YdiSdh4i4h%2BEz3n9I6POMjpeKAXtOk6TqtiWyeXQbL96urqxd62Woqd9SDQfNe62kiGXQimB6vkaEIaGffVs1fkSkWxzCbiSFz2lkOdjEA2H1cz2kFl9ydwwVZ5Cz8N5Be3U0TWmmpj8qkyuYo40p%2BclQOLgcOA8lIaUHO5RWbO5YjW4S4p9Fz5HI8xH03rlJ&X-Amz-Signature=425d530b22da9eabc045eb7d8434efd6e05bacb0707f575284122fd6e38a12c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLSFHCV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F3w%2F%2BI72pT9qgWO21XD%2BH7UAsyZ9XkOmJxAk%2F%2FYjodAIhAJC3g9DI7Oxb7s%2BFqZeEUx6hge400mpVQ4n7lr%2B2PZGxKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypvFyAoCeXmqmhMYcq3AO8ocdK9EHrH%2Bb7MP%2BwtlJLi8eq3h84sF%2B5pKkmvDGJH8BVAq4mwHVffedxErzQWS4W%2BGUTog2TAGQO2eNXtC9J8mN3ZhvFiVg2XVdw18b7sOYn9v6yz7Cwuu4CBvQ3CvXTcR%2Bjx81zs6%2BFUSCpwzTu8GyVcr5an8LHY3DbtrhtS0bOQ5qwMKaXuNSYx4xaRSbv3ZyWEMpn1u43udnFXaG2xz1yWAFlyYBxPP%2BwIq42lZj1SJ5zd%2FA%2FGQdnROXL35rOTZ6GVVzxJ7Lc9u5muT2CXxTORy9GNJ%2BATNqdHzByuUHX2qUHQrMSG10c34oM46eBgHKJIgtCFTJDmBfdQzTWOs3CUr831E7jdFfFD%2F6Ucd%2FOc27ngm3oc8YbJHDRMSAudvQmkgHgMrsI7VITyap%2F6Fjt6lYlxI1zrld4MHXdF1K61DuGMz1mZqPD0C2261hNSyEOSH6Pm2sZEol36BIXyPFM1GrW6j%2FkTXlkR3cnnJuGaqBEIxhnFGO%2FtTauLsBS7ziDbkIok8OTNh54toiW5QBu5a8K%2F4BPCMz56aeOGx4ic4oooMa%2BGBr83V9ISNm%2FSHRgM3fspExiXlnByNuzE2jWC4teyUPFsjHSTaI7%2B2%2BLO%2B%2FWdUZqWiOUaTDG%2FqPEBjqkAS%2BUQ8sTMI3gSCO7wdyRHJSY9%2B0YdiSdh4i4h%2BEz3n9I6POMjpeKAXtOk6TqtiWyeXQbL96urqxd62Woqd9SDQfNe62kiGXQimB6vkaEIaGffVs1fkSkWxzCbiSFz2lkOdjEA2H1cz2kFl9ydwwVZ5Cz8N5Be3U0TWmmpj8qkyuYo40p%2BclQOLgcOA8lIaUHO5RWbO5YjW4S4p9Fz5HI8xH03rlJ&X-Amz-Signature=b1b3c106ac7893cfcf563810b6355bd217e28378668f540284be41ed984de96f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLSFHCV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F3w%2F%2BI72pT9qgWO21XD%2BH7UAsyZ9XkOmJxAk%2F%2FYjodAIhAJC3g9DI7Oxb7s%2BFqZeEUx6hge400mpVQ4n7lr%2B2PZGxKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypvFyAoCeXmqmhMYcq3AO8ocdK9EHrH%2Bb7MP%2BwtlJLi8eq3h84sF%2B5pKkmvDGJH8BVAq4mwHVffedxErzQWS4W%2BGUTog2TAGQO2eNXtC9J8mN3ZhvFiVg2XVdw18b7sOYn9v6yz7Cwuu4CBvQ3CvXTcR%2Bjx81zs6%2BFUSCpwzTu8GyVcr5an8LHY3DbtrhtS0bOQ5qwMKaXuNSYx4xaRSbv3ZyWEMpn1u43udnFXaG2xz1yWAFlyYBxPP%2BwIq42lZj1SJ5zd%2FA%2FGQdnROXL35rOTZ6GVVzxJ7Lc9u5muT2CXxTORy9GNJ%2BATNqdHzByuUHX2qUHQrMSG10c34oM46eBgHKJIgtCFTJDmBfdQzTWOs3CUr831E7jdFfFD%2F6Ucd%2FOc27ngm3oc8YbJHDRMSAudvQmkgHgMrsI7VITyap%2F6Fjt6lYlxI1zrld4MHXdF1K61DuGMz1mZqPD0C2261hNSyEOSH6Pm2sZEol36BIXyPFM1GrW6j%2FkTXlkR3cnnJuGaqBEIxhnFGO%2FtTauLsBS7ziDbkIok8OTNh54toiW5QBu5a8K%2F4BPCMz56aeOGx4ic4oooMa%2BGBr83V9ISNm%2FSHRgM3fspExiXlnByNuzE2jWC4teyUPFsjHSTaI7%2B2%2BLO%2B%2FWdUZqWiOUaTDG%2FqPEBjqkAS%2BUQ8sTMI3gSCO7wdyRHJSY9%2B0YdiSdh4i4h%2BEz3n9I6POMjpeKAXtOk6TqtiWyeXQbL96urqxd62Woqd9SDQfNe62kiGXQimB6vkaEIaGffVs1fkSkWxzCbiSFz2lkOdjEA2H1cz2kFl9ydwwVZ5Cz8N5Be3U0TWmmpj8qkyuYo40p%2BclQOLgcOA8lIaUHO5RWbO5YjW4S4p9Fz5HI8xH03rlJ&X-Amz-Signature=80096891b121688bbed9f6c90b27caa06e6fa4590ade7d3b11a8a0dff24958f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLSFHCV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F3w%2F%2BI72pT9qgWO21XD%2BH7UAsyZ9XkOmJxAk%2F%2FYjodAIhAJC3g9DI7Oxb7s%2BFqZeEUx6hge400mpVQ4n7lr%2B2PZGxKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypvFyAoCeXmqmhMYcq3AO8ocdK9EHrH%2Bb7MP%2BwtlJLi8eq3h84sF%2B5pKkmvDGJH8BVAq4mwHVffedxErzQWS4W%2BGUTog2TAGQO2eNXtC9J8mN3ZhvFiVg2XVdw18b7sOYn9v6yz7Cwuu4CBvQ3CvXTcR%2Bjx81zs6%2BFUSCpwzTu8GyVcr5an8LHY3DbtrhtS0bOQ5qwMKaXuNSYx4xaRSbv3ZyWEMpn1u43udnFXaG2xz1yWAFlyYBxPP%2BwIq42lZj1SJ5zd%2FA%2FGQdnROXL35rOTZ6GVVzxJ7Lc9u5muT2CXxTORy9GNJ%2BATNqdHzByuUHX2qUHQrMSG10c34oM46eBgHKJIgtCFTJDmBfdQzTWOs3CUr831E7jdFfFD%2F6Ucd%2FOc27ngm3oc8YbJHDRMSAudvQmkgHgMrsI7VITyap%2F6Fjt6lYlxI1zrld4MHXdF1K61DuGMz1mZqPD0C2261hNSyEOSH6Pm2sZEol36BIXyPFM1GrW6j%2FkTXlkR3cnnJuGaqBEIxhnFGO%2FtTauLsBS7ziDbkIok8OTNh54toiW5QBu5a8K%2F4BPCMz56aeOGx4ic4oooMa%2BGBr83V9ISNm%2FSHRgM3fspExiXlnByNuzE2jWC4teyUPFsjHSTaI7%2B2%2BLO%2B%2FWdUZqWiOUaTDG%2FqPEBjqkAS%2BUQ8sTMI3gSCO7wdyRHJSY9%2B0YdiSdh4i4h%2BEz3n9I6POMjpeKAXtOk6TqtiWyeXQbL96urqxd62Woqd9SDQfNe62kiGXQimB6vkaEIaGffVs1fkSkWxzCbiSFz2lkOdjEA2H1cz2kFl9ydwwVZ5Cz8N5Be3U0TWmmpj8qkyuYo40p%2BclQOLgcOA8lIaUHO5RWbO5YjW4S4p9Fz5HI8xH03rlJ&X-Amz-Signature=29f1f60ecfbad31c0cd10d3c065850b41b82627d9a794f32e9c63f79b15765bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLSFHCV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F3w%2F%2BI72pT9qgWO21XD%2BH7UAsyZ9XkOmJxAk%2F%2FYjodAIhAJC3g9DI7Oxb7s%2BFqZeEUx6hge400mpVQ4n7lr%2B2PZGxKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypvFyAoCeXmqmhMYcq3AO8ocdK9EHrH%2Bb7MP%2BwtlJLi8eq3h84sF%2B5pKkmvDGJH8BVAq4mwHVffedxErzQWS4W%2BGUTog2TAGQO2eNXtC9J8mN3ZhvFiVg2XVdw18b7sOYn9v6yz7Cwuu4CBvQ3CvXTcR%2Bjx81zs6%2BFUSCpwzTu8GyVcr5an8LHY3DbtrhtS0bOQ5qwMKaXuNSYx4xaRSbv3ZyWEMpn1u43udnFXaG2xz1yWAFlyYBxPP%2BwIq42lZj1SJ5zd%2FA%2FGQdnROXL35rOTZ6GVVzxJ7Lc9u5muT2CXxTORy9GNJ%2BATNqdHzByuUHX2qUHQrMSG10c34oM46eBgHKJIgtCFTJDmBfdQzTWOs3CUr831E7jdFfFD%2F6Ucd%2FOc27ngm3oc8YbJHDRMSAudvQmkgHgMrsI7VITyap%2F6Fjt6lYlxI1zrld4MHXdF1K61DuGMz1mZqPD0C2261hNSyEOSH6Pm2sZEol36BIXyPFM1GrW6j%2FkTXlkR3cnnJuGaqBEIxhnFGO%2FtTauLsBS7ziDbkIok8OTNh54toiW5QBu5a8K%2F4BPCMz56aeOGx4ic4oooMa%2BGBr83V9ISNm%2FSHRgM3fspExiXlnByNuzE2jWC4teyUPFsjHSTaI7%2B2%2BLO%2B%2FWdUZqWiOUaTDG%2FqPEBjqkAS%2BUQ8sTMI3gSCO7wdyRHJSY9%2B0YdiSdh4i4h%2BEz3n9I6POMjpeKAXtOk6TqtiWyeXQbL96urqxd62Woqd9SDQfNe62kiGXQimB6vkaEIaGffVs1fkSkWxzCbiSFz2lkOdjEA2H1cz2kFl9ydwwVZ5Cz8N5Be3U0TWmmpj8qkyuYo40p%2BclQOLgcOA8lIaUHO5RWbO5YjW4S4p9Fz5HI8xH03rlJ&X-Amz-Signature=689ac3d354ea6b2dfb448dcac72a27b87e0e8e1984bcb6b6f25d7ef4300ed6af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLSFHCV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F3w%2F%2BI72pT9qgWO21XD%2BH7UAsyZ9XkOmJxAk%2F%2FYjodAIhAJC3g9DI7Oxb7s%2BFqZeEUx6hge400mpVQ4n7lr%2B2PZGxKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypvFyAoCeXmqmhMYcq3AO8ocdK9EHrH%2Bb7MP%2BwtlJLi8eq3h84sF%2B5pKkmvDGJH8BVAq4mwHVffedxErzQWS4W%2BGUTog2TAGQO2eNXtC9J8mN3ZhvFiVg2XVdw18b7sOYn9v6yz7Cwuu4CBvQ3CvXTcR%2Bjx81zs6%2BFUSCpwzTu8GyVcr5an8LHY3DbtrhtS0bOQ5qwMKaXuNSYx4xaRSbv3ZyWEMpn1u43udnFXaG2xz1yWAFlyYBxPP%2BwIq42lZj1SJ5zd%2FA%2FGQdnROXL35rOTZ6GVVzxJ7Lc9u5muT2CXxTORy9GNJ%2BATNqdHzByuUHX2qUHQrMSG10c34oM46eBgHKJIgtCFTJDmBfdQzTWOs3CUr831E7jdFfFD%2F6Ucd%2FOc27ngm3oc8YbJHDRMSAudvQmkgHgMrsI7VITyap%2F6Fjt6lYlxI1zrld4MHXdF1K61DuGMz1mZqPD0C2261hNSyEOSH6Pm2sZEol36BIXyPFM1GrW6j%2FkTXlkR3cnnJuGaqBEIxhnFGO%2FtTauLsBS7ziDbkIok8OTNh54toiW5QBu5a8K%2F4BPCMz56aeOGx4ic4oooMa%2BGBr83V9ISNm%2FSHRgM3fspExiXlnByNuzE2jWC4teyUPFsjHSTaI7%2B2%2BLO%2B%2FWdUZqWiOUaTDG%2FqPEBjqkAS%2BUQ8sTMI3gSCO7wdyRHJSY9%2B0YdiSdh4i4h%2BEz3n9I6POMjpeKAXtOk6TqtiWyeXQbL96urqxd62Woqd9SDQfNe62kiGXQimB6vkaEIaGffVs1fkSkWxzCbiSFz2lkOdjEA2H1cz2kFl9ydwwVZ5Cz8N5Be3U0TWmmpj8qkyuYo40p%2BclQOLgcOA8lIaUHO5RWbO5YjW4S4p9Fz5HI8xH03rlJ&X-Amz-Signature=6fd07b5a64a4c9d61b540196257d4ebe43b5375475391cf16685b1684bff9b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLSFHCV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F3w%2F%2BI72pT9qgWO21XD%2BH7UAsyZ9XkOmJxAk%2F%2FYjodAIhAJC3g9DI7Oxb7s%2BFqZeEUx6hge400mpVQ4n7lr%2B2PZGxKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypvFyAoCeXmqmhMYcq3AO8ocdK9EHrH%2Bb7MP%2BwtlJLi8eq3h84sF%2B5pKkmvDGJH8BVAq4mwHVffedxErzQWS4W%2BGUTog2TAGQO2eNXtC9J8mN3ZhvFiVg2XVdw18b7sOYn9v6yz7Cwuu4CBvQ3CvXTcR%2Bjx81zs6%2BFUSCpwzTu8GyVcr5an8LHY3DbtrhtS0bOQ5qwMKaXuNSYx4xaRSbv3ZyWEMpn1u43udnFXaG2xz1yWAFlyYBxPP%2BwIq42lZj1SJ5zd%2FA%2FGQdnROXL35rOTZ6GVVzxJ7Lc9u5muT2CXxTORy9GNJ%2BATNqdHzByuUHX2qUHQrMSG10c34oM46eBgHKJIgtCFTJDmBfdQzTWOs3CUr831E7jdFfFD%2F6Ucd%2FOc27ngm3oc8YbJHDRMSAudvQmkgHgMrsI7VITyap%2F6Fjt6lYlxI1zrld4MHXdF1K61DuGMz1mZqPD0C2261hNSyEOSH6Pm2sZEol36BIXyPFM1GrW6j%2FkTXlkR3cnnJuGaqBEIxhnFGO%2FtTauLsBS7ziDbkIok8OTNh54toiW5QBu5a8K%2F4BPCMz56aeOGx4ic4oooMa%2BGBr83V9ISNm%2FSHRgM3fspExiXlnByNuzE2jWC4teyUPFsjHSTaI7%2B2%2BLO%2B%2FWdUZqWiOUaTDG%2FqPEBjqkAS%2BUQ8sTMI3gSCO7wdyRHJSY9%2B0YdiSdh4i4h%2BEz3n9I6POMjpeKAXtOk6TqtiWyeXQbL96urqxd62Woqd9SDQfNe62kiGXQimB6vkaEIaGffVs1fkSkWxzCbiSFz2lkOdjEA2H1cz2kFl9ydwwVZ5Cz8N5Be3U0TWmmpj8qkyuYo40p%2BclQOLgcOA8lIaUHO5RWbO5YjW4S4p9Fz5HI8xH03rlJ&X-Amz-Signature=1e7c59632a157aa2e4a260ff3e07e39c6d72d35b54c9edc3f3ed718b952a0f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPLSFHCV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F3w%2F%2BI72pT9qgWO21XD%2BH7UAsyZ9XkOmJxAk%2F%2FYjodAIhAJC3g9DI7Oxb7s%2BFqZeEUx6hge400mpVQ4n7lr%2B2PZGxKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypvFyAoCeXmqmhMYcq3AO8ocdK9EHrH%2Bb7MP%2BwtlJLi8eq3h84sF%2B5pKkmvDGJH8BVAq4mwHVffedxErzQWS4W%2BGUTog2TAGQO2eNXtC9J8mN3ZhvFiVg2XVdw18b7sOYn9v6yz7Cwuu4CBvQ3CvXTcR%2Bjx81zs6%2BFUSCpwzTu8GyVcr5an8LHY3DbtrhtS0bOQ5qwMKaXuNSYx4xaRSbv3ZyWEMpn1u43udnFXaG2xz1yWAFlyYBxPP%2BwIq42lZj1SJ5zd%2FA%2FGQdnROXL35rOTZ6GVVzxJ7Lc9u5muT2CXxTORy9GNJ%2BATNqdHzByuUHX2qUHQrMSG10c34oM46eBgHKJIgtCFTJDmBfdQzTWOs3CUr831E7jdFfFD%2F6Ucd%2FOc27ngm3oc8YbJHDRMSAudvQmkgHgMrsI7VITyap%2F6Fjt6lYlxI1zrld4MHXdF1K61DuGMz1mZqPD0C2261hNSyEOSH6Pm2sZEol36BIXyPFM1GrW6j%2FkTXlkR3cnnJuGaqBEIxhnFGO%2FtTauLsBS7ziDbkIok8OTNh54toiW5QBu5a8K%2F4BPCMz56aeOGx4ic4oooMa%2BGBr83V9ISNm%2FSHRgM3fspExiXlnByNuzE2jWC4teyUPFsjHSTaI7%2B2%2BLO%2B%2FWdUZqWiOUaTDG%2FqPEBjqkAS%2BUQ8sTMI3gSCO7wdyRHJSY9%2B0YdiSdh4i4h%2BEz3n9I6POMjpeKAXtOk6TqtiWyeXQbL96urqxd62Woqd9SDQfNe62kiGXQimB6vkaEIaGffVs1fkSkWxzCbiSFz2lkOdjEA2H1cz2kFl9ydwwVZ5Cz8N5Be3U0TWmmpj8qkyuYo40p%2BclQOLgcOA8lIaUHO5RWbO5YjW4S4p9Fz5HI8xH03rlJ&X-Amz-Signature=0610b6d9766dba996b3a50db50e9a9e6b635f0cb9b71b0b96e3d2020bf089158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
