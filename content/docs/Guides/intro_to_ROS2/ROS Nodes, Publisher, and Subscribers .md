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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWNVRFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMXrd7FklIjFcCn8hHFKcadTcHUHKNn%2FO1JoC7Om4gkAiEArGDaRWZnBEsKEST3HtaiYOf4kv3DiizJu%2FF8jtcxogYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FaMdLJRsVBXjUHdircA%2BkdqvsCwKCKoYJ1sHDklS4wOSQGLSItmzPA%2B7o%2F8gVJIQ%2F%2BG06Kg7i01nq%2F2PP4pOrd%2FwBna003He5U0kCw1Q9mfBTSu%2FMunbsR1LhSNtzqF90pFl1rVPl%2BRu9mLe8f%2F69jr7A4XEHNY2QlMxV1m6EZXiNsZRgkEa7we5dBdD%2BVHgLP8i86I7%2Bp%2Be2W3l63DO8UAugrJprLFpkfzGoavnFGnSX0OY6Yb0NwP3xUhGBPFf5g6RozfsJ29uVzW7lB%2FBnOcwwpJkFlxew%2FFv%2FIaU54FXLlQGrwe2i9K02S8U4hG1X2oyLx3SvkLn6qSX%2FAGX6RXLU6x7yzdX9hg%2FVI7SuBwRuBhdbEINj3ocCs%2FPWwy5%2BOdhTPQSXZTr4ItdeOmIlmi%2BjOyhB2TW78r670Azvow0DPw8koPkBzW%2BSB2MBX9fAMJ9HAILIObsMoUrgza7a5mFZSWCug3cwZ9FSOajrAMKmn9VqMphUct%2FUbyEEPK%2BuGout1BRyxtVPn1yiAHUKyHmarXr0ompgM6%2BBvD0bgSKB78VK8kMFIL3NHKf%2B8cEBJEcvHVplC3z0l2qvAvvu648eCUvBtQtK4L0mMUwdK0xD3VEjCbmAHrtj6V9AwOoV7z1MhH9U%2FCGi2MMm9%2BMAGOqUBxiJFL8pXOMEdjVNCL0i7uM7peY0vreBcpAZ5wzNGQU0jCzTohvA6hWmV8MGCbpkdHT854TsHeDhC0kD0QortZWmV3F34L786Grf24iwl%2FzdJDmXkvpaPBBTUehpzkFrEVAubeWS9jT4O43Dk7e2zcZgF9ckGkWlqezyXcyw8WLX0SQOeNimodBPiy3siyvOT1lKGnig3a9FX7m354YVUWcgfMWo%2F&X-Amz-Signature=d3114143f08e343401282bafc3cd130ffadba16a4339baf037c321568a5ea15f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWNVRFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMXrd7FklIjFcCn8hHFKcadTcHUHKNn%2FO1JoC7Om4gkAiEArGDaRWZnBEsKEST3HtaiYOf4kv3DiizJu%2FF8jtcxogYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FaMdLJRsVBXjUHdircA%2BkdqvsCwKCKoYJ1sHDklS4wOSQGLSItmzPA%2B7o%2F8gVJIQ%2F%2BG06Kg7i01nq%2F2PP4pOrd%2FwBna003He5U0kCw1Q9mfBTSu%2FMunbsR1LhSNtzqF90pFl1rVPl%2BRu9mLe8f%2F69jr7A4XEHNY2QlMxV1m6EZXiNsZRgkEa7we5dBdD%2BVHgLP8i86I7%2Bp%2Be2W3l63DO8UAugrJprLFpkfzGoavnFGnSX0OY6Yb0NwP3xUhGBPFf5g6RozfsJ29uVzW7lB%2FBnOcwwpJkFlxew%2FFv%2FIaU54FXLlQGrwe2i9K02S8U4hG1X2oyLx3SvkLn6qSX%2FAGX6RXLU6x7yzdX9hg%2FVI7SuBwRuBhdbEINj3ocCs%2FPWwy5%2BOdhTPQSXZTr4ItdeOmIlmi%2BjOyhB2TW78r670Azvow0DPw8koPkBzW%2BSB2MBX9fAMJ9HAILIObsMoUrgza7a5mFZSWCug3cwZ9FSOajrAMKmn9VqMphUct%2FUbyEEPK%2BuGout1BRyxtVPn1yiAHUKyHmarXr0ompgM6%2BBvD0bgSKB78VK8kMFIL3NHKf%2B8cEBJEcvHVplC3z0l2qvAvvu648eCUvBtQtK4L0mMUwdK0xD3VEjCbmAHrtj6V9AwOoV7z1MhH9U%2FCGi2MMm9%2BMAGOqUBxiJFL8pXOMEdjVNCL0i7uM7peY0vreBcpAZ5wzNGQU0jCzTohvA6hWmV8MGCbpkdHT854TsHeDhC0kD0QortZWmV3F34L786Grf24iwl%2FzdJDmXkvpaPBBTUehpzkFrEVAubeWS9jT4O43Dk7e2zcZgF9ckGkWlqezyXcyw8WLX0SQOeNimodBPiy3siyvOT1lKGnig3a9FX7m354YVUWcgfMWo%2F&X-Amz-Signature=8499cc3b13784d75a16e8eb24a9afe1cd89410dc8c0f56870a73d01cb0c77448&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWNVRFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMXrd7FklIjFcCn8hHFKcadTcHUHKNn%2FO1JoC7Om4gkAiEArGDaRWZnBEsKEST3HtaiYOf4kv3DiizJu%2FF8jtcxogYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FaMdLJRsVBXjUHdircA%2BkdqvsCwKCKoYJ1sHDklS4wOSQGLSItmzPA%2B7o%2F8gVJIQ%2F%2BG06Kg7i01nq%2F2PP4pOrd%2FwBna003He5U0kCw1Q9mfBTSu%2FMunbsR1LhSNtzqF90pFl1rVPl%2BRu9mLe8f%2F69jr7A4XEHNY2QlMxV1m6EZXiNsZRgkEa7we5dBdD%2BVHgLP8i86I7%2Bp%2Be2W3l63DO8UAugrJprLFpkfzGoavnFGnSX0OY6Yb0NwP3xUhGBPFf5g6RozfsJ29uVzW7lB%2FBnOcwwpJkFlxew%2FFv%2FIaU54FXLlQGrwe2i9K02S8U4hG1X2oyLx3SvkLn6qSX%2FAGX6RXLU6x7yzdX9hg%2FVI7SuBwRuBhdbEINj3ocCs%2FPWwy5%2BOdhTPQSXZTr4ItdeOmIlmi%2BjOyhB2TW78r670Azvow0DPw8koPkBzW%2BSB2MBX9fAMJ9HAILIObsMoUrgza7a5mFZSWCug3cwZ9FSOajrAMKmn9VqMphUct%2FUbyEEPK%2BuGout1BRyxtVPn1yiAHUKyHmarXr0ompgM6%2BBvD0bgSKB78VK8kMFIL3NHKf%2B8cEBJEcvHVplC3z0l2qvAvvu648eCUvBtQtK4L0mMUwdK0xD3VEjCbmAHrtj6V9AwOoV7z1MhH9U%2FCGi2MMm9%2BMAGOqUBxiJFL8pXOMEdjVNCL0i7uM7peY0vreBcpAZ5wzNGQU0jCzTohvA6hWmV8MGCbpkdHT854TsHeDhC0kD0QortZWmV3F34L786Grf24iwl%2FzdJDmXkvpaPBBTUehpzkFrEVAubeWS9jT4O43Dk7e2zcZgF9ckGkWlqezyXcyw8WLX0SQOeNimodBPiy3siyvOT1lKGnig3a9FX7m354YVUWcgfMWo%2F&X-Amz-Signature=12ab294fee1ceabc3244ef031245c9d4240b715b3ff3aa66924251715391bf07&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWNVRFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMXrd7FklIjFcCn8hHFKcadTcHUHKNn%2FO1JoC7Om4gkAiEArGDaRWZnBEsKEST3HtaiYOf4kv3DiizJu%2FF8jtcxogYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FaMdLJRsVBXjUHdircA%2BkdqvsCwKCKoYJ1sHDklS4wOSQGLSItmzPA%2B7o%2F8gVJIQ%2F%2BG06Kg7i01nq%2F2PP4pOrd%2FwBna003He5U0kCw1Q9mfBTSu%2FMunbsR1LhSNtzqF90pFl1rVPl%2BRu9mLe8f%2F69jr7A4XEHNY2QlMxV1m6EZXiNsZRgkEa7we5dBdD%2BVHgLP8i86I7%2Bp%2Be2W3l63DO8UAugrJprLFpkfzGoavnFGnSX0OY6Yb0NwP3xUhGBPFf5g6RozfsJ29uVzW7lB%2FBnOcwwpJkFlxew%2FFv%2FIaU54FXLlQGrwe2i9K02S8U4hG1X2oyLx3SvkLn6qSX%2FAGX6RXLU6x7yzdX9hg%2FVI7SuBwRuBhdbEINj3ocCs%2FPWwy5%2BOdhTPQSXZTr4ItdeOmIlmi%2BjOyhB2TW78r670Azvow0DPw8koPkBzW%2BSB2MBX9fAMJ9HAILIObsMoUrgza7a5mFZSWCug3cwZ9FSOajrAMKmn9VqMphUct%2FUbyEEPK%2BuGout1BRyxtVPn1yiAHUKyHmarXr0ompgM6%2BBvD0bgSKB78VK8kMFIL3NHKf%2B8cEBJEcvHVplC3z0l2qvAvvu648eCUvBtQtK4L0mMUwdK0xD3VEjCbmAHrtj6V9AwOoV7z1MhH9U%2FCGi2MMm9%2BMAGOqUBxiJFL8pXOMEdjVNCL0i7uM7peY0vreBcpAZ5wzNGQU0jCzTohvA6hWmV8MGCbpkdHT854TsHeDhC0kD0QortZWmV3F34L786Grf24iwl%2FzdJDmXkvpaPBBTUehpzkFrEVAubeWS9jT4O43Dk7e2zcZgF9ckGkWlqezyXcyw8WLX0SQOeNimodBPiy3siyvOT1lKGnig3a9FX7m354YVUWcgfMWo%2F&X-Amz-Signature=d2a33ac1a692e7d1fdbc06113d745f3ace9b593c5f96a606325a65678ac2d33e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWNVRFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMXrd7FklIjFcCn8hHFKcadTcHUHKNn%2FO1JoC7Om4gkAiEArGDaRWZnBEsKEST3HtaiYOf4kv3DiizJu%2FF8jtcxogYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FaMdLJRsVBXjUHdircA%2BkdqvsCwKCKoYJ1sHDklS4wOSQGLSItmzPA%2B7o%2F8gVJIQ%2F%2BG06Kg7i01nq%2F2PP4pOrd%2FwBna003He5U0kCw1Q9mfBTSu%2FMunbsR1LhSNtzqF90pFl1rVPl%2BRu9mLe8f%2F69jr7A4XEHNY2QlMxV1m6EZXiNsZRgkEa7we5dBdD%2BVHgLP8i86I7%2Bp%2Be2W3l63DO8UAugrJprLFpkfzGoavnFGnSX0OY6Yb0NwP3xUhGBPFf5g6RozfsJ29uVzW7lB%2FBnOcwwpJkFlxew%2FFv%2FIaU54FXLlQGrwe2i9K02S8U4hG1X2oyLx3SvkLn6qSX%2FAGX6RXLU6x7yzdX9hg%2FVI7SuBwRuBhdbEINj3ocCs%2FPWwy5%2BOdhTPQSXZTr4ItdeOmIlmi%2BjOyhB2TW78r670Azvow0DPw8koPkBzW%2BSB2MBX9fAMJ9HAILIObsMoUrgza7a5mFZSWCug3cwZ9FSOajrAMKmn9VqMphUct%2FUbyEEPK%2BuGout1BRyxtVPn1yiAHUKyHmarXr0ompgM6%2BBvD0bgSKB78VK8kMFIL3NHKf%2B8cEBJEcvHVplC3z0l2qvAvvu648eCUvBtQtK4L0mMUwdK0xD3VEjCbmAHrtj6V9AwOoV7z1MhH9U%2FCGi2MMm9%2BMAGOqUBxiJFL8pXOMEdjVNCL0i7uM7peY0vreBcpAZ5wzNGQU0jCzTohvA6hWmV8MGCbpkdHT854TsHeDhC0kD0QortZWmV3F34L786Grf24iwl%2FzdJDmXkvpaPBBTUehpzkFrEVAubeWS9jT4O43Dk7e2zcZgF9ckGkWlqezyXcyw8WLX0SQOeNimodBPiy3siyvOT1lKGnig3a9FX7m354YVUWcgfMWo%2F&X-Amz-Signature=e2fc69606f20cddb3c4e34ec5886f738632e209886a492fe4d1c2594a68a228b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWNVRFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMXrd7FklIjFcCn8hHFKcadTcHUHKNn%2FO1JoC7Om4gkAiEArGDaRWZnBEsKEST3HtaiYOf4kv3DiizJu%2FF8jtcxogYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FaMdLJRsVBXjUHdircA%2BkdqvsCwKCKoYJ1sHDklS4wOSQGLSItmzPA%2B7o%2F8gVJIQ%2F%2BG06Kg7i01nq%2F2PP4pOrd%2FwBna003He5U0kCw1Q9mfBTSu%2FMunbsR1LhSNtzqF90pFl1rVPl%2BRu9mLe8f%2F69jr7A4XEHNY2QlMxV1m6EZXiNsZRgkEa7we5dBdD%2BVHgLP8i86I7%2Bp%2Be2W3l63DO8UAugrJprLFpkfzGoavnFGnSX0OY6Yb0NwP3xUhGBPFf5g6RozfsJ29uVzW7lB%2FBnOcwwpJkFlxew%2FFv%2FIaU54FXLlQGrwe2i9K02S8U4hG1X2oyLx3SvkLn6qSX%2FAGX6RXLU6x7yzdX9hg%2FVI7SuBwRuBhdbEINj3ocCs%2FPWwy5%2BOdhTPQSXZTr4ItdeOmIlmi%2BjOyhB2TW78r670Azvow0DPw8koPkBzW%2BSB2MBX9fAMJ9HAILIObsMoUrgza7a5mFZSWCug3cwZ9FSOajrAMKmn9VqMphUct%2FUbyEEPK%2BuGout1BRyxtVPn1yiAHUKyHmarXr0ompgM6%2BBvD0bgSKB78VK8kMFIL3NHKf%2B8cEBJEcvHVplC3z0l2qvAvvu648eCUvBtQtK4L0mMUwdK0xD3VEjCbmAHrtj6V9AwOoV7z1MhH9U%2FCGi2MMm9%2BMAGOqUBxiJFL8pXOMEdjVNCL0i7uM7peY0vreBcpAZ5wzNGQU0jCzTohvA6hWmV8MGCbpkdHT854TsHeDhC0kD0QortZWmV3F34L786Grf24iwl%2FzdJDmXkvpaPBBTUehpzkFrEVAubeWS9jT4O43Dk7e2zcZgF9ckGkWlqezyXcyw8WLX0SQOeNimodBPiy3siyvOT1lKGnig3a9FX7m354YVUWcgfMWo%2F&X-Amz-Signature=c781f726b35fbff45ef824b2d1fe4a9605375fbe675d5246e3b41ca439c361c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWNVRFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMXrd7FklIjFcCn8hHFKcadTcHUHKNn%2FO1JoC7Om4gkAiEArGDaRWZnBEsKEST3HtaiYOf4kv3DiizJu%2FF8jtcxogYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FaMdLJRsVBXjUHdircA%2BkdqvsCwKCKoYJ1sHDklS4wOSQGLSItmzPA%2B7o%2F8gVJIQ%2F%2BG06Kg7i01nq%2F2PP4pOrd%2FwBna003He5U0kCw1Q9mfBTSu%2FMunbsR1LhSNtzqF90pFl1rVPl%2BRu9mLe8f%2F69jr7A4XEHNY2QlMxV1m6EZXiNsZRgkEa7we5dBdD%2BVHgLP8i86I7%2Bp%2Be2W3l63DO8UAugrJprLFpkfzGoavnFGnSX0OY6Yb0NwP3xUhGBPFf5g6RozfsJ29uVzW7lB%2FBnOcwwpJkFlxew%2FFv%2FIaU54FXLlQGrwe2i9K02S8U4hG1X2oyLx3SvkLn6qSX%2FAGX6RXLU6x7yzdX9hg%2FVI7SuBwRuBhdbEINj3ocCs%2FPWwy5%2BOdhTPQSXZTr4ItdeOmIlmi%2BjOyhB2TW78r670Azvow0DPw8koPkBzW%2BSB2MBX9fAMJ9HAILIObsMoUrgza7a5mFZSWCug3cwZ9FSOajrAMKmn9VqMphUct%2FUbyEEPK%2BuGout1BRyxtVPn1yiAHUKyHmarXr0ompgM6%2BBvD0bgSKB78VK8kMFIL3NHKf%2B8cEBJEcvHVplC3z0l2qvAvvu648eCUvBtQtK4L0mMUwdK0xD3VEjCbmAHrtj6V9AwOoV7z1MhH9U%2FCGi2MMm9%2BMAGOqUBxiJFL8pXOMEdjVNCL0i7uM7peY0vreBcpAZ5wzNGQU0jCzTohvA6hWmV8MGCbpkdHT854TsHeDhC0kD0QortZWmV3F34L786Grf24iwl%2FzdJDmXkvpaPBBTUehpzkFrEVAubeWS9jT4O43Dk7e2zcZgF9ckGkWlqezyXcyw8WLX0SQOeNimodBPiy3siyvOT1lKGnig3a9FX7m354YVUWcgfMWo%2F&X-Amz-Signature=4c9a2f0cc0989348ff82120616d7c83d62ebb1fd601b37c28317e23e77bd484c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWNVRFS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMXrd7FklIjFcCn8hHFKcadTcHUHKNn%2FO1JoC7Om4gkAiEArGDaRWZnBEsKEST3HtaiYOf4kv3DiizJu%2FF8jtcxogYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FaMdLJRsVBXjUHdircA%2BkdqvsCwKCKoYJ1sHDklS4wOSQGLSItmzPA%2B7o%2F8gVJIQ%2F%2BG06Kg7i01nq%2F2PP4pOrd%2FwBna003He5U0kCw1Q9mfBTSu%2FMunbsR1LhSNtzqF90pFl1rVPl%2BRu9mLe8f%2F69jr7A4XEHNY2QlMxV1m6EZXiNsZRgkEa7we5dBdD%2BVHgLP8i86I7%2Bp%2Be2W3l63DO8UAugrJprLFpkfzGoavnFGnSX0OY6Yb0NwP3xUhGBPFf5g6RozfsJ29uVzW7lB%2FBnOcwwpJkFlxew%2FFv%2FIaU54FXLlQGrwe2i9K02S8U4hG1X2oyLx3SvkLn6qSX%2FAGX6RXLU6x7yzdX9hg%2FVI7SuBwRuBhdbEINj3ocCs%2FPWwy5%2BOdhTPQSXZTr4ItdeOmIlmi%2BjOyhB2TW78r670Azvow0DPw8koPkBzW%2BSB2MBX9fAMJ9HAILIObsMoUrgza7a5mFZSWCug3cwZ9FSOajrAMKmn9VqMphUct%2FUbyEEPK%2BuGout1BRyxtVPn1yiAHUKyHmarXr0ompgM6%2BBvD0bgSKB78VK8kMFIL3NHKf%2B8cEBJEcvHVplC3z0l2qvAvvu648eCUvBtQtK4L0mMUwdK0xD3VEjCbmAHrtj6V9AwOoV7z1MhH9U%2FCGi2MMm9%2BMAGOqUBxiJFL8pXOMEdjVNCL0i7uM7peY0vreBcpAZ5wzNGQU0jCzTohvA6hWmV8MGCbpkdHT854TsHeDhC0kD0QortZWmV3F34L786Grf24iwl%2FzdJDmXkvpaPBBTUehpzkFrEVAubeWS9jT4O43Dk7e2zcZgF9ckGkWlqezyXcyw8WLX0SQOeNimodBPiy3siyvOT1lKGnig3a9FX7m354YVUWcgfMWo%2F&X-Amz-Signature=319c812383c8abda0ac5d52107c15c433e5f5b9e7f74389345faf07f180d77bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
