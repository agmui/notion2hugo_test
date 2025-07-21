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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOEFKQD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BT7PiviD93p79HFg9Rg5crZ1PtzcdS%2BfaeqDhGSLDoAiEAyPZaRRvCaqPBmv%2FfY8ACUkN8QAHNnHV3T%2BufbQW59QkqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOfIiodEQ%2FMyx4A6CrcA6jedUFmCy1eofPPNlaKaL7SbGcWb%2FJ5YvP9bA6I6%2BqTDmdEJBrbz3eSoeOeq5Zv%2Fdx8yM7Q%2Bxy5hts8s8pT4Ze6SwVU4rjPXQxdww3fwX%2B9olIYN34UVuqvygoJJFityOx7zNGuy8PwovzbypYytF1iVS%2B0fnGrSu%2BMXDkLIZ66jNg%2FXveKKMRp5gluWvj%2BO7u8sSHumQQvoJfbMAe4DHJeupgW%2BTqa5ufC5B2AfOEn6Gh%2FLv8raCCK1w9tMNre4vVmyt0cvySZJX9D%2F2%2BtQbZkqKKRGyBqQ0fWWoZZg6thD3KcwZj7bgmZ3br2OpQq4S9PzBy48NFRpYIjIlmg4VpB5oVgPkMYOgov35iuDhFsLOFBA7WnpHt6zVVM3dQyBqrPsaFQh3h20ymjHKD1bzDoOmuL4VMzOKNi8umRfwMC5R4BvbBg6bz4BgvlPoGcEl5AUubXTDvxhfMp73oy32%2Fu%2B3bawMP3rXln%2BeZbRVV0ASqSAIT6e2bdwOtEyerl8ZpiaRrOQRh42fQk8b%2Fdj0vm4dhr%2Bzliwcd14tcsBB2A8yVDu65FuV7RGNzAExQOPlt5CQDaa2hwlGtS7We0sg5K5uTG5FZyA41MnsnwT9FiBxw1tI9n1a90t40yMLmP%2BsMGOqUBUbp1LRuPUARHR8RyflknirzgYZWqz%2F4sKXYqUWbKbMtFZ1VwCLqPXK4R%2BVsOBg35kDCvAURXYzTRI2v4xlpHM07DGooWVKQ4FBssXxJLCNld7d7Rxo%2BQM%2BgYO9%2BKWAhRe5aeWna8pbWfZojqaTJesi69uzPSW%2FgiShUNydatP9Vm%2F4FEH2jF0yLCAMUBsU5WphlyXAv%2B9zUWRQmpgejJP1jRGiGo&X-Amz-Signature=24dd97d606ff3bdd1b1d1ebfdcff6ad8e51c7598dbec5241dcddacb276e6fae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOEFKQD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BT7PiviD93p79HFg9Rg5crZ1PtzcdS%2BfaeqDhGSLDoAiEAyPZaRRvCaqPBmv%2FfY8ACUkN8QAHNnHV3T%2BufbQW59QkqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOfIiodEQ%2FMyx4A6CrcA6jedUFmCy1eofPPNlaKaL7SbGcWb%2FJ5YvP9bA6I6%2BqTDmdEJBrbz3eSoeOeq5Zv%2Fdx8yM7Q%2Bxy5hts8s8pT4Ze6SwVU4rjPXQxdww3fwX%2B9olIYN34UVuqvygoJJFityOx7zNGuy8PwovzbypYytF1iVS%2B0fnGrSu%2BMXDkLIZ66jNg%2FXveKKMRp5gluWvj%2BO7u8sSHumQQvoJfbMAe4DHJeupgW%2BTqa5ufC5B2AfOEn6Gh%2FLv8raCCK1w9tMNre4vVmyt0cvySZJX9D%2F2%2BtQbZkqKKRGyBqQ0fWWoZZg6thD3KcwZj7bgmZ3br2OpQq4S9PzBy48NFRpYIjIlmg4VpB5oVgPkMYOgov35iuDhFsLOFBA7WnpHt6zVVM3dQyBqrPsaFQh3h20ymjHKD1bzDoOmuL4VMzOKNi8umRfwMC5R4BvbBg6bz4BgvlPoGcEl5AUubXTDvxhfMp73oy32%2Fu%2B3bawMP3rXln%2BeZbRVV0ASqSAIT6e2bdwOtEyerl8ZpiaRrOQRh42fQk8b%2Fdj0vm4dhr%2Bzliwcd14tcsBB2A8yVDu65FuV7RGNzAExQOPlt5CQDaa2hwlGtS7We0sg5K5uTG5FZyA41MnsnwT9FiBxw1tI9n1a90t40yMLmP%2BsMGOqUBUbp1LRuPUARHR8RyflknirzgYZWqz%2F4sKXYqUWbKbMtFZ1VwCLqPXK4R%2BVsOBg35kDCvAURXYzTRI2v4xlpHM07DGooWVKQ4FBssXxJLCNld7d7Rxo%2BQM%2BgYO9%2BKWAhRe5aeWna8pbWfZojqaTJesi69uzPSW%2FgiShUNydatP9Vm%2F4FEH2jF0yLCAMUBsU5WphlyXAv%2B9zUWRQmpgejJP1jRGiGo&X-Amz-Signature=b913e6039742fdb1b987a422ee17129f2da6d6eb3844875412dc4f015e25e29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOEFKQD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BT7PiviD93p79HFg9Rg5crZ1PtzcdS%2BfaeqDhGSLDoAiEAyPZaRRvCaqPBmv%2FfY8ACUkN8QAHNnHV3T%2BufbQW59QkqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOfIiodEQ%2FMyx4A6CrcA6jedUFmCy1eofPPNlaKaL7SbGcWb%2FJ5YvP9bA6I6%2BqTDmdEJBrbz3eSoeOeq5Zv%2Fdx8yM7Q%2Bxy5hts8s8pT4Ze6SwVU4rjPXQxdww3fwX%2B9olIYN34UVuqvygoJJFityOx7zNGuy8PwovzbypYytF1iVS%2B0fnGrSu%2BMXDkLIZ66jNg%2FXveKKMRp5gluWvj%2BO7u8sSHumQQvoJfbMAe4DHJeupgW%2BTqa5ufC5B2AfOEn6Gh%2FLv8raCCK1w9tMNre4vVmyt0cvySZJX9D%2F2%2BtQbZkqKKRGyBqQ0fWWoZZg6thD3KcwZj7bgmZ3br2OpQq4S9PzBy48NFRpYIjIlmg4VpB5oVgPkMYOgov35iuDhFsLOFBA7WnpHt6zVVM3dQyBqrPsaFQh3h20ymjHKD1bzDoOmuL4VMzOKNi8umRfwMC5R4BvbBg6bz4BgvlPoGcEl5AUubXTDvxhfMp73oy32%2Fu%2B3bawMP3rXln%2BeZbRVV0ASqSAIT6e2bdwOtEyerl8ZpiaRrOQRh42fQk8b%2Fdj0vm4dhr%2Bzliwcd14tcsBB2A8yVDu65FuV7RGNzAExQOPlt5CQDaa2hwlGtS7We0sg5K5uTG5FZyA41MnsnwT9FiBxw1tI9n1a90t40yMLmP%2BsMGOqUBUbp1LRuPUARHR8RyflknirzgYZWqz%2F4sKXYqUWbKbMtFZ1VwCLqPXK4R%2BVsOBg35kDCvAURXYzTRI2v4xlpHM07DGooWVKQ4FBssXxJLCNld7d7Rxo%2BQM%2BgYO9%2BKWAhRe5aeWna8pbWfZojqaTJesi69uzPSW%2FgiShUNydatP9Vm%2F4FEH2jF0yLCAMUBsU5WphlyXAv%2B9zUWRQmpgejJP1jRGiGo&X-Amz-Signature=e19127f5b7f677ba6d578ff9ae1769cea9acb2861fdea34d75721b05d1128f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOEFKQD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BT7PiviD93p79HFg9Rg5crZ1PtzcdS%2BfaeqDhGSLDoAiEAyPZaRRvCaqPBmv%2FfY8ACUkN8QAHNnHV3T%2BufbQW59QkqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOfIiodEQ%2FMyx4A6CrcA6jedUFmCy1eofPPNlaKaL7SbGcWb%2FJ5YvP9bA6I6%2BqTDmdEJBrbz3eSoeOeq5Zv%2Fdx8yM7Q%2Bxy5hts8s8pT4Ze6SwVU4rjPXQxdww3fwX%2B9olIYN34UVuqvygoJJFityOx7zNGuy8PwovzbypYytF1iVS%2B0fnGrSu%2BMXDkLIZ66jNg%2FXveKKMRp5gluWvj%2BO7u8sSHumQQvoJfbMAe4DHJeupgW%2BTqa5ufC5B2AfOEn6Gh%2FLv8raCCK1w9tMNre4vVmyt0cvySZJX9D%2F2%2BtQbZkqKKRGyBqQ0fWWoZZg6thD3KcwZj7bgmZ3br2OpQq4S9PzBy48NFRpYIjIlmg4VpB5oVgPkMYOgov35iuDhFsLOFBA7WnpHt6zVVM3dQyBqrPsaFQh3h20ymjHKD1bzDoOmuL4VMzOKNi8umRfwMC5R4BvbBg6bz4BgvlPoGcEl5AUubXTDvxhfMp73oy32%2Fu%2B3bawMP3rXln%2BeZbRVV0ASqSAIT6e2bdwOtEyerl8ZpiaRrOQRh42fQk8b%2Fdj0vm4dhr%2Bzliwcd14tcsBB2A8yVDu65FuV7RGNzAExQOPlt5CQDaa2hwlGtS7We0sg5K5uTG5FZyA41MnsnwT9FiBxw1tI9n1a90t40yMLmP%2BsMGOqUBUbp1LRuPUARHR8RyflknirzgYZWqz%2F4sKXYqUWbKbMtFZ1VwCLqPXK4R%2BVsOBg35kDCvAURXYzTRI2v4xlpHM07DGooWVKQ4FBssXxJLCNld7d7Rxo%2BQM%2BgYO9%2BKWAhRe5aeWna8pbWfZojqaTJesi69uzPSW%2FgiShUNydatP9Vm%2F4FEH2jF0yLCAMUBsU5WphlyXAv%2B9zUWRQmpgejJP1jRGiGo&X-Amz-Signature=d2b5dcf99a3da6dfcc09d83f43e30fd42ee16ebc5344760c4807286435abc7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOEFKQD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BT7PiviD93p79HFg9Rg5crZ1PtzcdS%2BfaeqDhGSLDoAiEAyPZaRRvCaqPBmv%2FfY8ACUkN8QAHNnHV3T%2BufbQW59QkqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOfIiodEQ%2FMyx4A6CrcA6jedUFmCy1eofPPNlaKaL7SbGcWb%2FJ5YvP9bA6I6%2BqTDmdEJBrbz3eSoeOeq5Zv%2Fdx8yM7Q%2Bxy5hts8s8pT4Ze6SwVU4rjPXQxdww3fwX%2B9olIYN34UVuqvygoJJFityOx7zNGuy8PwovzbypYytF1iVS%2B0fnGrSu%2BMXDkLIZ66jNg%2FXveKKMRp5gluWvj%2BO7u8sSHumQQvoJfbMAe4DHJeupgW%2BTqa5ufC5B2AfOEn6Gh%2FLv8raCCK1w9tMNre4vVmyt0cvySZJX9D%2F2%2BtQbZkqKKRGyBqQ0fWWoZZg6thD3KcwZj7bgmZ3br2OpQq4S9PzBy48NFRpYIjIlmg4VpB5oVgPkMYOgov35iuDhFsLOFBA7WnpHt6zVVM3dQyBqrPsaFQh3h20ymjHKD1bzDoOmuL4VMzOKNi8umRfwMC5R4BvbBg6bz4BgvlPoGcEl5AUubXTDvxhfMp73oy32%2Fu%2B3bawMP3rXln%2BeZbRVV0ASqSAIT6e2bdwOtEyerl8ZpiaRrOQRh42fQk8b%2Fdj0vm4dhr%2Bzliwcd14tcsBB2A8yVDu65FuV7RGNzAExQOPlt5CQDaa2hwlGtS7We0sg5K5uTG5FZyA41MnsnwT9FiBxw1tI9n1a90t40yMLmP%2BsMGOqUBUbp1LRuPUARHR8RyflknirzgYZWqz%2F4sKXYqUWbKbMtFZ1VwCLqPXK4R%2BVsOBg35kDCvAURXYzTRI2v4xlpHM07DGooWVKQ4FBssXxJLCNld7d7Rxo%2BQM%2BgYO9%2BKWAhRe5aeWna8pbWfZojqaTJesi69uzPSW%2FgiShUNydatP9Vm%2F4FEH2jF0yLCAMUBsU5WphlyXAv%2B9zUWRQmpgejJP1jRGiGo&X-Amz-Signature=4909e80d60f73bb3b70993cae1dce5a82d9a9768010ede429828673c56d3b5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOEFKQD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BT7PiviD93p79HFg9Rg5crZ1PtzcdS%2BfaeqDhGSLDoAiEAyPZaRRvCaqPBmv%2FfY8ACUkN8QAHNnHV3T%2BufbQW59QkqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOfIiodEQ%2FMyx4A6CrcA6jedUFmCy1eofPPNlaKaL7SbGcWb%2FJ5YvP9bA6I6%2BqTDmdEJBrbz3eSoeOeq5Zv%2Fdx8yM7Q%2Bxy5hts8s8pT4Ze6SwVU4rjPXQxdww3fwX%2B9olIYN34UVuqvygoJJFityOx7zNGuy8PwovzbypYytF1iVS%2B0fnGrSu%2BMXDkLIZ66jNg%2FXveKKMRp5gluWvj%2BO7u8sSHumQQvoJfbMAe4DHJeupgW%2BTqa5ufC5B2AfOEn6Gh%2FLv8raCCK1w9tMNre4vVmyt0cvySZJX9D%2F2%2BtQbZkqKKRGyBqQ0fWWoZZg6thD3KcwZj7bgmZ3br2OpQq4S9PzBy48NFRpYIjIlmg4VpB5oVgPkMYOgov35iuDhFsLOFBA7WnpHt6zVVM3dQyBqrPsaFQh3h20ymjHKD1bzDoOmuL4VMzOKNi8umRfwMC5R4BvbBg6bz4BgvlPoGcEl5AUubXTDvxhfMp73oy32%2Fu%2B3bawMP3rXln%2BeZbRVV0ASqSAIT6e2bdwOtEyerl8ZpiaRrOQRh42fQk8b%2Fdj0vm4dhr%2Bzliwcd14tcsBB2A8yVDu65FuV7RGNzAExQOPlt5CQDaa2hwlGtS7We0sg5K5uTG5FZyA41MnsnwT9FiBxw1tI9n1a90t40yMLmP%2BsMGOqUBUbp1LRuPUARHR8RyflknirzgYZWqz%2F4sKXYqUWbKbMtFZ1VwCLqPXK4R%2BVsOBg35kDCvAURXYzTRI2v4xlpHM07DGooWVKQ4FBssXxJLCNld7d7Rxo%2BQM%2BgYO9%2BKWAhRe5aeWna8pbWfZojqaTJesi69uzPSW%2FgiShUNydatP9Vm%2F4FEH2jF0yLCAMUBsU5WphlyXAv%2B9zUWRQmpgejJP1jRGiGo&X-Amz-Signature=2f541be98db5130f392cb56819e3947b89c14641f03f2abf933cdf031360e14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOEFKQD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BT7PiviD93p79HFg9Rg5crZ1PtzcdS%2BfaeqDhGSLDoAiEAyPZaRRvCaqPBmv%2FfY8ACUkN8QAHNnHV3T%2BufbQW59QkqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOfIiodEQ%2FMyx4A6CrcA6jedUFmCy1eofPPNlaKaL7SbGcWb%2FJ5YvP9bA6I6%2BqTDmdEJBrbz3eSoeOeq5Zv%2Fdx8yM7Q%2Bxy5hts8s8pT4Ze6SwVU4rjPXQxdww3fwX%2B9olIYN34UVuqvygoJJFityOx7zNGuy8PwovzbypYytF1iVS%2B0fnGrSu%2BMXDkLIZ66jNg%2FXveKKMRp5gluWvj%2BO7u8sSHumQQvoJfbMAe4DHJeupgW%2BTqa5ufC5B2AfOEn6Gh%2FLv8raCCK1w9tMNre4vVmyt0cvySZJX9D%2F2%2BtQbZkqKKRGyBqQ0fWWoZZg6thD3KcwZj7bgmZ3br2OpQq4S9PzBy48NFRpYIjIlmg4VpB5oVgPkMYOgov35iuDhFsLOFBA7WnpHt6zVVM3dQyBqrPsaFQh3h20ymjHKD1bzDoOmuL4VMzOKNi8umRfwMC5R4BvbBg6bz4BgvlPoGcEl5AUubXTDvxhfMp73oy32%2Fu%2B3bawMP3rXln%2BeZbRVV0ASqSAIT6e2bdwOtEyerl8ZpiaRrOQRh42fQk8b%2Fdj0vm4dhr%2Bzliwcd14tcsBB2A8yVDu65FuV7RGNzAExQOPlt5CQDaa2hwlGtS7We0sg5K5uTG5FZyA41MnsnwT9FiBxw1tI9n1a90t40yMLmP%2BsMGOqUBUbp1LRuPUARHR8RyflknirzgYZWqz%2F4sKXYqUWbKbMtFZ1VwCLqPXK4R%2BVsOBg35kDCvAURXYzTRI2v4xlpHM07DGooWVKQ4FBssXxJLCNld7d7Rxo%2BQM%2BgYO9%2BKWAhRe5aeWna8pbWfZojqaTJesi69uzPSW%2FgiShUNydatP9Vm%2F4FEH2jF0yLCAMUBsU5WphlyXAv%2B9zUWRQmpgejJP1jRGiGo&X-Amz-Signature=caed3ebecebd2032a01a0a99fa20f476748d925b74a39333f6d1fc8c498c40c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOEFKQD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BT7PiviD93p79HFg9Rg5crZ1PtzcdS%2BfaeqDhGSLDoAiEAyPZaRRvCaqPBmv%2FfY8ACUkN8QAHNnHV3T%2BufbQW59QkqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOfIiodEQ%2FMyx4A6CrcA6jedUFmCy1eofPPNlaKaL7SbGcWb%2FJ5YvP9bA6I6%2BqTDmdEJBrbz3eSoeOeq5Zv%2Fdx8yM7Q%2Bxy5hts8s8pT4Ze6SwVU4rjPXQxdww3fwX%2B9olIYN34UVuqvygoJJFityOx7zNGuy8PwovzbypYytF1iVS%2B0fnGrSu%2BMXDkLIZ66jNg%2FXveKKMRp5gluWvj%2BO7u8sSHumQQvoJfbMAe4DHJeupgW%2BTqa5ufC5B2AfOEn6Gh%2FLv8raCCK1w9tMNre4vVmyt0cvySZJX9D%2F2%2BtQbZkqKKRGyBqQ0fWWoZZg6thD3KcwZj7bgmZ3br2OpQq4S9PzBy48NFRpYIjIlmg4VpB5oVgPkMYOgov35iuDhFsLOFBA7WnpHt6zVVM3dQyBqrPsaFQh3h20ymjHKD1bzDoOmuL4VMzOKNi8umRfwMC5R4BvbBg6bz4BgvlPoGcEl5AUubXTDvxhfMp73oy32%2Fu%2B3bawMP3rXln%2BeZbRVV0ASqSAIT6e2bdwOtEyerl8ZpiaRrOQRh42fQk8b%2Fdj0vm4dhr%2Bzliwcd14tcsBB2A8yVDu65FuV7RGNzAExQOPlt5CQDaa2hwlGtS7We0sg5K5uTG5FZyA41MnsnwT9FiBxw1tI9n1a90t40yMLmP%2BsMGOqUBUbp1LRuPUARHR8RyflknirzgYZWqz%2F4sKXYqUWbKbMtFZ1VwCLqPXK4R%2BVsOBg35kDCvAURXYzTRI2v4xlpHM07DGooWVKQ4FBssXxJLCNld7d7Rxo%2BQM%2BgYO9%2BKWAhRe5aeWna8pbWfZojqaTJesi69uzPSW%2FgiShUNydatP9Vm%2F4FEH2jF0yLCAMUBsU5WphlyXAv%2B9zUWRQmpgejJP1jRGiGo&X-Amz-Signature=fc17a4a1375c08f9c252d0b0dcb24f460f851fdf26e68e690843d237e01f02ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
