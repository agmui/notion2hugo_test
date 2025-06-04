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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BU7L3F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDEjeDCFC%2BJuBX5oN42%2BIYc8lPifZ9olKB5dB5C%2BL4g4gIgeXKpZUmiLpc9dqzj4WYZFzw6WLeGKsKBAzjtU6YQofAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEwRQBoehZcWC1Gz8yrcA6sL3r3ydp7Bl%2FHVTg6xRhx71LHF%2FDf8guBFQ3e3byqbIp%2Fe01639tnWc%2B5r3vsam1iFT%2FDqwqnlGHLd82dsL%2BIJjIxj%2Bk3ZMW1r5T8z5XhQNUTaSiogT7ZrbzwEEwovWcvZoKMmxM%2BIYUvDIOB7JNv%2BgaLeetfRZNHsiGNZbwV%2FqLD3d%2Bni7kkb%2FexfVf8uUc5JE%2BQbqxNfQQfxtpRH5oMRE1ofrJfG%2BW5FwYJnmatI1Zm%2FVJ3hkaOyCuPpxc6IDvqrwYa45EPdpx%2FyO%2B%2F%2FlU5usi4ZdiFf4RKmqf4uSLrtx9YnErHctSE9%2BQC18XXjj%2F6uIVX1g0QJPjx7N5ZKOvG3ESx1jzVwHz%2BtfTBxI4o8AZ3%2BZ5lrgJzYBL%2BK309m5An6UuI%2FXmeKQ2W%2FrXpo6CBfXSgRSFBfBoqHG8bWsOQHVT0OtyhOOmj95pJMGckH161%2FRD7Z3mXwJMs9xia5OG4lvfUMLEmc9c6CUuk5I%2FLI0wPT%2B6QMLrtP2JDXC0EMGW7pHxPkCME%2F%2BdpDu%2FJ8cglZ%2BPViaDbpUVEJpgxHKW%2BIprB5p63fkLCsQA%2F5I%2Fh1hhpsRNE6dafqDbKx3m%2F8KALYhiJtFuOEE%2BA7L8AH5u2huE0t%2BPNe0wJKBG9AMNSfgMIGOqUBqNm4fGMzmh1O8Ma%2B0za4J1K%2BfoM3Dj6cKLm%2BgUQO1waoybfU6VrwB7QkruV7GR%2FjydxskAwM7alUPCxJz0%2Bx1YX0Na3HS%2BvwXsqEMInJ1iHJVnX3paVoCxvr%2Fh14HeXUGvNHzsTpj%2FHIZcIkdsHkLH40lM7U%2B%2FLt8JH6HGKENfFISwP2r14DT72wqtdvzSKhOFRVZi8K0SP2fSifkQZislWT5Uhf&X-Amz-Signature=bffa818dc98df14c18f8101a3ef0fcf302ea8270a4aeba0b21596d69a83cf302&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BU7L3F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDEjeDCFC%2BJuBX5oN42%2BIYc8lPifZ9olKB5dB5C%2BL4g4gIgeXKpZUmiLpc9dqzj4WYZFzw6WLeGKsKBAzjtU6YQofAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEwRQBoehZcWC1Gz8yrcA6sL3r3ydp7Bl%2FHVTg6xRhx71LHF%2FDf8guBFQ3e3byqbIp%2Fe01639tnWc%2B5r3vsam1iFT%2FDqwqnlGHLd82dsL%2BIJjIxj%2Bk3ZMW1r5T8z5XhQNUTaSiogT7ZrbzwEEwovWcvZoKMmxM%2BIYUvDIOB7JNv%2BgaLeetfRZNHsiGNZbwV%2FqLD3d%2Bni7kkb%2FexfVf8uUc5JE%2BQbqxNfQQfxtpRH5oMRE1ofrJfG%2BW5FwYJnmatI1Zm%2FVJ3hkaOyCuPpxc6IDvqrwYa45EPdpx%2FyO%2B%2F%2FlU5usi4ZdiFf4RKmqf4uSLrtx9YnErHctSE9%2BQC18XXjj%2F6uIVX1g0QJPjx7N5ZKOvG3ESx1jzVwHz%2BtfTBxI4o8AZ3%2BZ5lrgJzYBL%2BK309m5An6UuI%2FXmeKQ2W%2FrXpo6CBfXSgRSFBfBoqHG8bWsOQHVT0OtyhOOmj95pJMGckH161%2FRD7Z3mXwJMs9xia5OG4lvfUMLEmc9c6CUuk5I%2FLI0wPT%2B6QMLrtP2JDXC0EMGW7pHxPkCME%2F%2BdpDu%2FJ8cglZ%2BPViaDbpUVEJpgxHKW%2BIprB5p63fkLCsQA%2F5I%2Fh1hhpsRNE6dafqDbKx3m%2F8KALYhiJtFuOEE%2BA7L8AH5u2huE0t%2BPNe0wJKBG9AMNSfgMIGOqUBqNm4fGMzmh1O8Ma%2B0za4J1K%2BfoM3Dj6cKLm%2BgUQO1waoybfU6VrwB7QkruV7GR%2FjydxskAwM7alUPCxJz0%2Bx1YX0Na3HS%2BvwXsqEMInJ1iHJVnX3paVoCxvr%2Fh14HeXUGvNHzsTpj%2FHIZcIkdsHkLH40lM7U%2B%2FLt8JH6HGKENfFISwP2r14DT72wqtdvzSKhOFRVZi8K0SP2fSifkQZislWT5Uhf&X-Amz-Signature=1dfe17a710b87951cdc7d848c8f182a90613f30fd1a1ec543201244493d06767&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BU7L3F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDEjeDCFC%2BJuBX5oN42%2BIYc8lPifZ9olKB5dB5C%2BL4g4gIgeXKpZUmiLpc9dqzj4WYZFzw6WLeGKsKBAzjtU6YQofAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEwRQBoehZcWC1Gz8yrcA6sL3r3ydp7Bl%2FHVTg6xRhx71LHF%2FDf8guBFQ3e3byqbIp%2Fe01639tnWc%2B5r3vsam1iFT%2FDqwqnlGHLd82dsL%2BIJjIxj%2Bk3ZMW1r5T8z5XhQNUTaSiogT7ZrbzwEEwovWcvZoKMmxM%2BIYUvDIOB7JNv%2BgaLeetfRZNHsiGNZbwV%2FqLD3d%2Bni7kkb%2FexfVf8uUc5JE%2BQbqxNfQQfxtpRH5oMRE1ofrJfG%2BW5FwYJnmatI1Zm%2FVJ3hkaOyCuPpxc6IDvqrwYa45EPdpx%2FyO%2B%2F%2FlU5usi4ZdiFf4RKmqf4uSLrtx9YnErHctSE9%2BQC18XXjj%2F6uIVX1g0QJPjx7N5ZKOvG3ESx1jzVwHz%2BtfTBxI4o8AZ3%2BZ5lrgJzYBL%2BK309m5An6UuI%2FXmeKQ2W%2FrXpo6CBfXSgRSFBfBoqHG8bWsOQHVT0OtyhOOmj95pJMGckH161%2FRD7Z3mXwJMs9xia5OG4lvfUMLEmc9c6CUuk5I%2FLI0wPT%2B6QMLrtP2JDXC0EMGW7pHxPkCME%2F%2BdpDu%2FJ8cglZ%2BPViaDbpUVEJpgxHKW%2BIprB5p63fkLCsQA%2F5I%2Fh1hhpsRNE6dafqDbKx3m%2F8KALYhiJtFuOEE%2BA7L8AH5u2huE0t%2BPNe0wJKBG9AMNSfgMIGOqUBqNm4fGMzmh1O8Ma%2B0za4J1K%2BfoM3Dj6cKLm%2BgUQO1waoybfU6VrwB7QkruV7GR%2FjydxskAwM7alUPCxJz0%2Bx1YX0Na3HS%2BvwXsqEMInJ1iHJVnX3paVoCxvr%2Fh14HeXUGvNHzsTpj%2FHIZcIkdsHkLH40lM7U%2B%2FLt8JH6HGKENfFISwP2r14DT72wqtdvzSKhOFRVZi8K0SP2fSifkQZislWT5Uhf&X-Amz-Signature=42e5d127ffe55c962d2970cbcd2cb6ad8fabe36b3f41f795a01fef9c96b76bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BU7L3F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDEjeDCFC%2BJuBX5oN42%2BIYc8lPifZ9olKB5dB5C%2BL4g4gIgeXKpZUmiLpc9dqzj4WYZFzw6WLeGKsKBAzjtU6YQofAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEwRQBoehZcWC1Gz8yrcA6sL3r3ydp7Bl%2FHVTg6xRhx71LHF%2FDf8guBFQ3e3byqbIp%2Fe01639tnWc%2B5r3vsam1iFT%2FDqwqnlGHLd82dsL%2BIJjIxj%2Bk3ZMW1r5T8z5XhQNUTaSiogT7ZrbzwEEwovWcvZoKMmxM%2BIYUvDIOB7JNv%2BgaLeetfRZNHsiGNZbwV%2FqLD3d%2Bni7kkb%2FexfVf8uUc5JE%2BQbqxNfQQfxtpRH5oMRE1ofrJfG%2BW5FwYJnmatI1Zm%2FVJ3hkaOyCuPpxc6IDvqrwYa45EPdpx%2FyO%2B%2F%2FlU5usi4ZdiFf4RKmqf4uSLrtx9YnErHctSE9%2BQC18XXjj%2F6uIVX1g0QJPjx7N5ZKOvG3ESx1jzVwHz%2BtfTBxI4o8AZ3%2BZ5lrgJzYBL%2BK309m5An6UuI%2FXmeKQ2W%2FrXpo6CBfXSgRSFBfBoqHG8bWsOQHVT0OtyhOOmj95pJMGckH161%2FRD7Z3mXwJMs9xia5OG4lvfUMLEmc9c6CUuk5I%2FLI0wPT%2B6QMLrtP2JDXC0EMGW7pHxPkCME%2F%2BdpDu%2FJ8cglZ%2BPViaDbpUVEJpgxHKW%2BIprB5p63fkLCsQA%2F5I%2Fh1hhpsRNE6dafqDbKx3m%2F8KALYhiJtFuOEE%2BA7L8AH5u2huE0t%2BPNe0wJKBG9AMNSfgMIGOqUBqNm4fGMzmh1O8Ma%2B0za4J1K%2BfoM3Dj6cKLm%2BgUQO1waoybfU6VrwB7QkruV7GR%2FjydxskAwM7alUPCxJz0%2Bx1YX0Na3HS%2BvwXsqEMInJ1iHJVnX3paVoCxvr%2Fh14HeXUGvNHzsTpj%2FHIZcIkdsHkLH40lM7U%2B%2FLt8JH6HGKENfFISwP2r14DT72wqtdvzSKhOFRVZi8K0SP2fSifkQZislWT5Uhf&X-Amz-Signature=226bc82f42fe7c2cc173a89039aeb644e9b4c2ce688960f756d4b9d3e77f65d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BU7L3F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDEjeDCFC%2BJuBX5oN42%2BIYc8lPifZ9olKB5dB5C%2BL4g4gIgeXKpZUmiLpc9dqzj4WYZFzw6WLeGKsKBAzjtU6YQofAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEwRQBoehZcWC1Gz8yrcA6sL3r3ydp7Bl%2FHVTg6xRhx71LHF%2FDf8guBFQ3e3byqbIp%2Fe01639tnWc%2B5r3vsam1iFT%2FDqwqnlGHLd82dsL%2BIJjIxj%2Bk3ZMW1r5T8z5XhQNUTaSiogT7ZrbzwEEwovWcvZoKMmxM%2BIYUvDIOB7JNv%2BgaLeetfRZNHsiGNZbwV%2FqLD3d%2Bni7kkb%2FexfVf8uUc5JE%2BQbqxNfQQfxtpRH5oMRE1ofrJfG%2BW5FwYJnmatI1Zm%2FVJ3hkaOyCuPpxc6IDvqrwYa45EPdpx%2FyO%2B%2F%2FlU5usi4ZdiFf4RKmqf4uSLrtx9YnErHctSE9%2BQC18XXjj%2F6uIVX1g0QJPjx7N5ZKOvG3ESx1jzVwHz%2BtfTBxI4o8AZ3%2BZ5lrgJzYBL%2BK309m5An6UuI%2FXmeKQ2W%2FrXpo6CBfXSgRSFBfBoqHG8bWsOQHVT0OtyhOOmj95pJMGckH161%2FRD7Z3mXwJMs9xia5OG4lvfUMLEmc9c6CUuk5I%2FLI0wPT%2B6QMLrtP2JDXC0EMGW7pHxPkCME%2F%2BdpDu%2FJ8cglZ%2BPViaDbpUVEJpgxHKW%2BIprB5p63fkLCsQA%2F5I%2Fh1hhpsRNE6dafqDbKx3m%2F8KALYhiJtFuOEE%2BA7L8AH5u2huE0t%2BPNe0wJKBG9AMNSfgMIGOqUBqNm4fGMzmh1O8Ma%2B0za4J1K%2BfoM3Dj6cKLm%2BgUQO1waoybfU6VrwB7QkruV7GR%2FjydxskAwM7alUPCxJz0%2Bx1YX0Na3HS%2BvwXsqEMInJ1iHJVnX3paVoCxvr%2Fh14HeXUGvNHzsTpj%2FHIZcIkdsHkLH40lM7U%2B%2FLt8JH6HGKENfFISwP2r14DT72wqtdvzSKhOFRVZi8K0SP2fSifkQZislWT5Uhf&X-Amz-Signature=bc016eb623557c4b7db5f5708093adf8d37923f0d67385857274aa1fb0900295&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BU7L3F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDEjeDCFC%2BJuBX5oN42%2BIYc8lPifZ9olKB5dB5C%2BL4g4gIgeXKpZUmiLpc9dqzj4WYZFzw6WLeGKsKBAzjtU6YQofAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEwRQBoehZcWC1Gz8yrcA6sL3r3ydp7Bl%2FHVTg6xRhx71LHF%2FDf8guBFQ3e3byqbIp%2Fe01639tnWc%2B5r3vsam1iFT%2FDqwqnlGHLd82dsL%2BIJjIxj%2Bk3ZMW1r5T8z5XhQNUTaSiogT7ZrbzwEEwovWcvZoKMmxM%2BIYUvDIOB7JNv%2BgaLeetfRZNHsiGNZbwV%2FqLD3d%2Bni7kkb%2FexfVf8uUc5JE%2BQbqxNfQQfxtpRH5oMRE1ofrJfG%2BW5FwYJnmatI1Zm%2FVJ3hkaOyCuPpxc6IDvqrwYa45EPdpx%2FyO%2B%2F%2FlU5usi4ZdiFf4RKmqf4uSLrtx9YnErHctSE9%2BQC18XXjj%2F6uIVX1g0QJPjx7N5ZKOvG3ESx1jzVwHz%2BtfTBxI4o8AZ3%2BZ5lrgJzYBL%2BK309m5An6UuI%2FXmeKQ2W%2FrXpo6CBfXSgRSFBfBoqHG8bWsOQHVT0OtyhOOmj95pJMGckH161%2FRD7Z3mXwJMs9xia5OG4lvfUMLEmc9c6CUuk5I%2FLI0wPT%2B6QMLrtP2JDXC0EMGW7pHxPkCME%2F%2BdpDu%2FJ8cglZ%2BPViaDbpUVEJpgxHKW%2BIprB5p63fkLCsQA%2F5I%2Fh1hhpsRNE6dafqDbKx3m%2F8KALYhiJtFuOEE%2BA7L8AH5u2huE0t%2BPNe0wJKBG9AMNSfgMIGOqUBqNm4fGMzmh1O8Ma%2B0za4J1K%2BfoM3Dj6cKLm%2BgUQO1waoybfU6VrwB7QkruV7GR%2FjydxskAwM7alUPCxJz0%2Bx1YX0Na3HS%2BvwXsqEMInJ1iHJVnX3paVoCxvr%2Fh14HeXUGvNHzsTpj%2FHIZcIkdsHkLH40lM7U%2B%2FLt8JH6HGKENfFISwP2r14DT72wqtdvzSKhOFRVZi8K0SP2fSifkQZislWT5Uhf&X-Amz-Signature=7e65e9bf99d1791fef445a97c3c00c3550a27c32ae7616080f999377e572becd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BU7L3F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDEjeDCFC%2BJuBX5oN42%2BIYc8lPifZ9olKB5dB5C%2BL4g4gIgeXKpZUmiLpc9dqzj4WYZFzw6WLeGKsKBAzjtU6YQofAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEwRQBoehZcWC1Gz8yrcA6sL3r3ydp7Bl%2FHVTg6xRhx71LHF%2FDf8guBFQ3e3byqbIp%2Fe01639tnWc%2B5r3vsam1iFT%2FDqwqnlGHLd82dsL%2BIJjIxj%2Bk3ZMW1r5T8z5XhQNUTaSiogT7ZrbzwEEwovWcvZoKMmxM%2BIYUvDIOB7JNv%2BgaLeetfRZNHsiGNZbwV%2FqLD3d%2Bni7kkb%2FexfVf8uUc5JE%2BQbqxNfQQfxtpRH5oMRE1ofrJfG%2BW5FwYJnmatI1Zm%2FVJ3hkaOyCuPpxc6IDvqrwYa45EPdpx%2FyO%2B%2F%2FlU5usi4ZdiFf4RKmqf4uSLrtx9YnErHctSE9%2BQC18XXjj%2F6uIVX1g0QJPjx7N5ZKOvG3ESx1jzVwHz%2BtfTBxI4o8AZ3%2BZ5lrgJzYBL%2BK309m5An6UuI%2FXmeKQ2W%2FrXpo6CBfXSgRSFBfBoqHG8bWsOQHVT0OtyhOOmj95pJMGckH161%2FRD7Z3mXwJMs9xia5OG4lvfUMLEmc9c6CUuk5I%2FLI0wPT%2B6QMLrtP2JDXC0EMGW7pHxPkCME%2F%2BdpDu%2FJ8cglZ%2BPViaDbpUVEJpgxHKW%2BIprB5p63fkLCsQA%2F5I%2Fh1hhpsRNE6dafqDbKx3m%2F8KALYhiJtFuOEE%2BA7L8AH5u2huE0t%2BPNe0wJKBG9AMNSfgMIGOqUBqNm4fGMzmh1O8Ma%2B0za4J1K%2BfoM3Dj6cKLm%2BgUQO1waoybfU6VrwB7QkruV7GR%2FjydxskAwM7alUPCxJz0%2Bx1YX0Na3HS%2BvwXsqEMInJ1iHJVnX3paVoCxvr%2Fh14HeXUGvNHzsTpj%2FHIZcIkdsHkLH40lM7U%2B%2FLt8JH6HGKENfFISwP2r14DT72wqtdvzSKhOFRVZi8K0SP2fSifkQZislWT5Uhf&X-Amz-Signature=a7fec03b71432b95025ef169dc47d2fd379089ec433d07f754f5061eba7840c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BU7L3F%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDEjeDCFC%2BJuBX5oN42%2BIYc8lPifZ9olKB5dB5C%2BL4g4gIgeXKpZUmiLpc9dqzj4WYZFzw6WLeGKsKBAzjtU6YQofAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEwRQBoehZcWC1Gz8yrcA6sL3r3ydp7Bl%2FHVTg6xRhx71LHF%2FDf8guBFQ3e3byqbIp%2Fe01639tnWc%2B5r3vsam1iFT%2FDqwqnlGHLd82dsL%2BIJjIxj%2Bk3ZMW1r5T8z5XhQNUTaSiogT7ZrbzwEEwovWcvZoKMmxM%2BIYUvDIOB7JNv%2BgaLeetfRZNHsiGNZbwV%2FqLD3d%2Bni7kkb%2FexfVf8uUc5JE%2BQbqxNfQQfxtpRH5oMRE1ofrJfG%2BW5FwYJnmatI1Zm%2FVJ3hkaOyCuPpxc6IDvqrwYa45EPdpx%2FyO%2B%2F%2FlU5usi4ZdiFf4RKmqf4uSLrtx9YnErHctSE9%2BQC18XXjj%2F6uIVX1g0QJPjx7N5ZKOvG3ESx1jzVwHz%2BtfTBxI4o8AZ3%2BZ5lrgJzYBL%2BK309m5An6UuI%2FXmeKQ2W%2FrXpo6CBfXSgRSFBfBoqHG8bWsOQHVT0OtyhOOmj95pJMGckH161%2FRD7Z3mXwJMs9xia5OG4lvfUMLEmc9c6CUuk5I%2FLI0wPT%2B6QMLrtP2JDXC0EMGW7pHxPkCME%2F%2BdpDu%2FJ8cglZ%2BPViaDbpUVEJpgxHKW%2BIprB5p63fkLCsQA%2F5I%2Fh1hhpsRNE6dafqDbKx3m%2F8KALYhiJtFuOEE%2BA7L8AH5u2huE0t%2BPNe0wJKBG9AMNSfgMIGOqUBqNm4fGMzmh1O8Ma%2B0za4J1K%2BfoM3Dj6cKLm%2BgUQO1waoybfU6VrwB7QkruV7GR%2FjydxskAwM7alUPCxJz0%2Bx1YX0Na3HS%2BvwXsqEMInJ1iHJVnX3paVoCxvr%2Fh14HeXUGvNHzsTpj%2FHIZcIkdsHkLH40lM7U%2B%2FLt8JH6HGKENfFISwP2r14DT72wqtdvzSKhOFRVZi8K0SP2fSifkQZislWT5Uhf&X-Amz-Signature=79196154a433aa5bd5e6325fa516ec092f90c3a89dc4feea465b6da69adfd268&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
