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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLDN22%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCyPN3B0GGSip2q%2F0DERd%2FSPqVdSUmcFo7vndZnCz3%2F1wIhAN70KXcC8xU8xTY5Mlq1qgG259QER6hvqLMzJC4OTPRCKv8DCFgQABoMNjM3NDIzMTgzODA1Igw58Vk3aMmHijozyhcq3AOu72ekWbRdSuctifJfqIYREhP%2F7ZN21Qt2XwOy%2B%2FW5i1H%2F9LpExyh8cN%2F63NVrTWMdhJfreQLsRflBL43hK51o70A%2FsWZBan95v6wVvm0StgLzuGnQx%2FDQXk%2BXX642J9hSn9dhLpOle8tF814d17szvOSGHeCzmAVsVtfaWAnvnIF6LKXNFGLqtQHMFpIu9GfRiDoLroWcdMS2ITTMSvKNmbNM5B8HvUb8aVFpn1YxNm%2BdWI1ek4brqGchiNfSvHT6EVmKaCVRtAnj%2Fk6Hi93qRSPf4xnNw6AWD5cCU4wOYL4jtGGQqrm4QI672bfwgkS6rMl4yh5iM6zHIQ4S1Pb%2F56WYmha8TG9kkVR%2BmML0%2BXh2Fe2xzfkcGF4u4q2FlGFIdlcpVz6s7WkORoZWdKv0dQ99ZIPAvmWzpapiuWRGlwE4Fe7zNV3D9GGwUHnVC7OkAXykQtIhDh8cbrh5IqvlnWrZd6AYd9sS5cmNFdIlT7CHfvyUIOOXFI4zlK0gir%2FucYh3b2YDzNqImsX78HKQV%2BdLF4ePp9WDQi8f3OCYhcV%2F9dHUSaFlJB4UIx%2FX3rmf%2Ba6GI7Xalh620W3QC5TR0BE%2FlmRiW5A90WIWi3z2z8dKdpjsPBnqjpbUDTDX4K%2B%2BBjqkAUFppnqstYDh3n8BreFLL0NUc%2FA7z0UCRJLtTPc54ZP6U%2FA1zA7w%2FkEDUblbyfKpZHKxj7JzOe09EF0RGcbZ6ASfYZYOIFISArIW7%2Ffl7%2BigsEDGukHL4xliWX4FvQ%2FJgczt%2BcKnAZMxdyGeprKi21fW9%2FhhwMXCN%2F%2Ba5G5aycw%2FXKxQW5C0w3cYIraNESOKI4vDpXb4BgnjEMRbz3roEndmk29q&X-Amz-Signature=404f09be14e64534b1b44d852d96293378897500a26a92b23e0da6c0ab64013c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLDN22%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCyPN3B0GGSip2q%2F0DERd%2FSPqVdSUmcFo7vndZnCz3%2F1wIhAN70KXcC8xU8xTY5Mlq1qgG259QER6hvqLMzJC4OTPRCKv8DCFgQABoMNjM3NDIzMTgzODA1Igw58Vk3aMmHijozyhcq3AOu72ekWbRdSuctifJfqIYREhP%2F7ZN21Qt2XwOy%2B%2FW5i1H%2F9LpExyh8cN%2F63NVrTWMdhJfreQLsRflBL43hK51o70A%2FsWZBan95v6wVvm0StgLzuGnQx%2FDQXk%2BXX642J9hSn9dhLpOle8tF814d17szvOSGHeCzmAVsVtfaWAnvnIF6LKXNFGLqtQHMFpIu9GfRiDoLroWcdMS2ITTMSvKNmbNM5B8HvUb8aVFpn1YxNm%2BdWI1ek4brqGchiNfSvHT6EVmKaCVRtAnj%2Fk6Hi93qRSPf4xnNw6AWD5cCU4wOYL4jtGGQqrm4QI672bfwgkS6rMl4yh5iM6zHIQ4S1Pb%2F56WYmha8TG9kkVR%2BmML0%2BXh2Fe2xzfkcGF4u4q2FlGFIdlcpVz6s7WkORoZWdKv0dQ99ZIPAvmWzpapiuWRGlwE4Fe7zNV3D9GGwUHnVC7OkAXykQtIhDh8cbrh5IqvlnWrZd6AYd9sS5cmNFdIlT7CHfvyUIOOXFI4zlK0gir%2FucYh3b2YDzNqImsX78HKQV%2BdLF4ePp9WDQi8f3OCYhcV%2F9dHUSaFlJB4UIx%2FX3rmf%2Ba6GI7Xalh620W3QC5TR0BE%2FlmRiW5A90WIWi3z2z8dKdpjsPBnqjpbUDTDX4K%2B%2BBjqkAUFppnqstYDh3n8BreFLL0NUc%2FA7z0UCRJLtTPc54ZP6U%2FA1zA7w%2FkEDUblbyfKpZHKxj7JzOe09EF0RGcbZ6ASfYZYOIFISArIW7%2Ffl7%2BigsEDGukHL4xliWX4FvQ%2FJgczt%2BcKnAZMxdyGeprKi21fW9%2FhhwMXCN%2F%2Ba5G5aycw%2FXKxQW5C0w3cYIraNESOKI4vDpXb4BgnjEMRbz3roEndmk29q&X-Amz-Signature=c9a85749d189fb4594196020e46791b08c707982d5133066018362ab5324c627&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLDN22%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCyPN3B0GGSip2q%2F0DERd%2FSPqVdSUmcFo7vndZnCz3%2F1wIhAN70KXcC8xU8xTY5Mlq1qgG259QER6hvqLMzJC4OTPRCKv8DCFgQABoMNjM3NDIzMTgzODA1Igw58Vk3aMmHijozyhcq3AOu72ekWbRdSuctifJfqIYREhP%2F7ZN21Qt2XwOy%2B%2FW5i1H%2F9LpExyh8cN%2F63NVrTWMdhJfreQLsRflBL43hK51o70A%2FsWZBan95v6wVvm0StgLzuGnQx%2FDQXk%2BXX642J9hSn9dhLpOle8tF814d17szvOSGHeCzmAVsVtfaWAnvnIF6LKXNFGLqtQHMFpIu9GfRiDoLroWcdMS2ITTMSvKNmbNM5B8HvUb8aVFpn1YxNm%2BdWI1ek4brqGchiNfSvHT6EVmKaCVRtAnj%2Fk6Hi93qRSPf4xnNw6AWD5cCU4wOYL4jtGGQqrm4QI672bfwgkS6rMl4yh5iM6zHIQ4S1Pb%2F56WYmha8TG9kkVR%2BmML0%2BXh2Fe2xzfkcGF4u4q2FlGFIdlcpVz6s7WkORoZWdKv0dQ99ZIPAvmWzpapiuWRGlwE4Fe7zNV3D9GGwUHnVC7OkAXykQtIhDh8cbrh5IqvlnWrZd6AYd9sS5cmNFdIlT7CHfvyUIOOXFI4zlK0gir%2FucYh3b2YDzNqImsX78HKQV%2BdLF4ePp9WDQi8f3OCYhcV%2F9dHUSaFlJB4UIx%2FX3rmf%2Ba6GI7Xalh620W3QC5TR0BE%2FlmRiW5A90WIWi3z2z8dKdpjsPBnqjpbUDTDX4K%2B%2BBjqkAUFppnqstYDh3n8BreFLL0NUc%2FA7z0UCRJLtTPc54ZP6U%2FA1zA7w%2FkEDUblbyfKpZHKxj7JzOe09EF0RGcbZ6ASfYZYOIFISArIW7%2Ffl7%2BigsEDGukHL4xliWX4FvQ%2FJgczt%2BcKnAZMxdyGeprKi21fW9%2FhhwMXCN%2F%2Ba5G5aycw%2FXKxQW5C0w3cYIraNESOKI4vDpXb4BgnjEMRbz3roEndmk29q&X-Amz-Signature=ff3e04f922cbd6072f64dddec405108aa453563f4ed19d96ed53d000b199086a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLDN22%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCyPN3B0GGSip2q%2F0DERd%2FSPqVdSUmcFo7vndZnCz3%2F1wIhAN70KXcC8xU8xTY5Mlq1qgG259QER6hvqLMzJC4OTPRCKv8DCFgQABoMNjM3NDIzMTgzODA1Igw58Vk3aMmHijozyhcq3AOu72ekWbRdSuctifJfqIYREhP%2F7ZN21Qt2XwOy%2B%2FW5i1H%2F9LpExyh8cN%2F63NVrTWMdhJfreQLsRflBL43hK51o70A%2FsWZBan95v6wVvm0StgLzuGnQx%2FDQXk%2BXX642J9hSn9dhLpOle8tF814d17szvOSGHeCzmAVsVtfaWAnvnIF6LKXNFGLqtQHMFpIu9GfRiDoLroWcdMS2ITTMSvKNmbNM5B8HvUb8aVFpn1YxNm%2BdWI1ek4brqGchiNfSvHT6EVmKaCVRtAnj%2Fk6Hi93qRSPf4xnNw6AWD5cCU4wOYL4jtGGQqrm4QI672bfwgkS6rMl4yh5iM6zHIQ4S1Pb%2F56WYmha8TG9kkVR%2BmML0%2BXh2Fe2xzfkcGF4u4q2FlGFIdlcpVz6s7WkORoZWdKv0dQ99ZIPAvmWzpapiuWRGlwE4Fe7zNV3D9GGwUHnVC7OkAXykQtIhDh8cbrh5IqvlnWrZd6AYd9sS5cmNFdIlT7CHfvyUIOOXFI4zlK0gir%2FucYh3b2YDzNqImsX78HKQV%2BdLF4ePp9WDQi8f3OCYhcV%2F9dHUSaFlJB4UIx%2FX3rmf%2Ba6GI7Xalh620W3QC5TR0BE%2FlmRiW5A90WIWi3z2z8dKdpjsPBnqjpbUDTDX4K%2B%2BBjqkAUFppnqstYDh3n8BreFLL0NUc%2FA7z0UCRJLtTPc54ZP6U%2FA1zA7w%2FkEDUblbyfKpZHKxj7JzOe09EF0RGcbZ6ASfYZYOIFISArIW7%2Ffl7%2BigsEDGukHL4xliWX4FvQ%2FJgczt%2BcKnAZMxdyGeprKi21fW9%2FhhwMXCN%2F%2Ba5G5aycw%2FXKxQW5C0w3cYIraNESOKI4vDpXb4BgnjEMRbz3roEndmk29q&X-Amz-Signature=256b2050a38766e205bd2e0df9c3d9031ba2b3ad9364c61dc753610e25417b07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLDN22%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCyPN3B0GGSip2q%2F0DERd%2FSPqVdSUmcFo7vndZnCz3%2F1wIhAN70KXcC8xU8xTY5Mlq1qgG259QER6hvqLMzJC4OTPRCKv8DCFgQABoMNjM3NDIzMTgzODA1Igw58Vk3aMmHijozyhcq3AOu72ekWbRdSuctifJfqIYREhP%2F7ZN21Qt2XwOy%2B%2FW5i1H%2F9LpExyh8cN%2F63NVrTWMdhJfreQLsRflBL43hK51o70A%2FsWZBan95v6wVvm0StgLzuGnQx%2FDQXk%2BXX642J9hSn9dhLpOle8tF814d17szvOSGHeCzmAVsVtfaWAnvnIF6LKXNFGLqtQHMFpIu9GfRiDoLroWcdMS2ITTMSvKNmbNM5B8HvUb8aVFpn1YxNm%2BdWI1ek4brqGchiNfSvHT6EVmKaCVRtAnj%2Fk6Hi93qRSPf4xnNw6AWD5cCU4wOYL4jtGGQqrm4QI672bfwgkS6rMl4yh5iM6zHIQ4S1Pb%2F56WYmha8TG9kkVR%2BmML0%2BXh2Fe2xzfkcGF4u4q2FlGFIdlcpVz6s7WkORoZWdKv0dQ99ZIPAvmWzpapiuWRGlwE4Fe7zNV3D9GGwUHnVC7OkAXykQtIhDh8cbrh5IqvlnWrZd6AYd9sS5cmNFdIlT7CHfvyUIOOXFI4zlK0gir%2FucYh3b2YDzNqImsX78HKQV%2BdLF4ePp9WDQi8f3OCYhcV%2F9dHUSaFlJB4UIx%2FX3rmf%2Ba6GI7Xalh620W3QC5TR0BE%2FlmRiW5A90WIWi3z2z8dKdpjsPBnqjpbUDTDX4K%2B%2BBjqkAUFppnqstYDh3n8BreFLL0NUc%2FA7z0UCRJLtTPc54ZP6U%2FA1zA7w%2FkEDUblbyfKpZHKxj7JzOe09EF0RGcbZ6ASfYZYOIFISArIW7%2Ffl7%2BigsEDGukHL4xliWX4FvQ%2FJgczt%2BcKnAZMxdyGeprKi21fW9%2FhhwMXCN%2F%2Ba5G5aycw%2FXKxQW5C0w3cYIraNESOKI4vDpXb4BgnjEMRbz3roEndmk29q&X-Amz-Signature=0ef8bee672a40a184b1a8a010db7f5b9510e8bc14c8bca7258262c9045638d73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLDN22%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCyPN3B0GGSip2q%2F0DERd%2FSPqVdSUmcFo7vndZnCz3%2F1wIhAN70KXcC8xU8xTY5Mlq1qgG259QER6hvqLMzJC4OTPRCKv8DCFgQABoMNjM3NDIzMTgzODA1Igw58Vk3aMmHijozyhcq3AOu72ekWbRdSuctifJfqIYREhP%2F7ZN21Qt2XwOy%2B%2FW5i1H%2F9LpExyh8cN%2F63NVrTWMdhJfreQLsRflBL43hK51o70A%2FsWZBan95v6wVvm0StgLzuGnQx%2FDQXk%2BXX642J9hSn9dhLpOle8tF814d17szvOSGHeCzmAVsVtfaWAnvnIF6LKXNFGLqtQHMFpIu9GfRiDoLroWcdMS2ITTMSvKNmbNM5B8HvUb8aVFpn1YxNm%2BdWI1ek4brqGchiNfSvHT6EVmKaCVRtAnj%2Fk6Hi93qRSPf4xnNw6AWD5cCU4wOYL4jtGGQqrm4QI672bfwgkS6rMl4yh5iM6zHIQ4S1Pb%2F56WYmha8TG9kkVR%2BmML0%2BXh2Fe2xzfkcGF4u4q2FlGFIdlcpVz6s7WkORoZWdKv0dQ99ZIPAvmWzpapiuWRGlwE4Fe7zNV3D9GGwUHnVC7OkAXykQtIhDh8cbrh5IqvlnWrZd6AYd9sS5cmNFdIlT7CHfvyUIOOXFI4zlK0gir%2FucYh3b2YDzNqImsX78HKQV%2BdLF4ePp9WDQi8f3OCYhcV%2F9dHUSaFlJB4UIx%2FX3rmf%2Ba6GI7Xalh620W3QC5TR0BE%2FlmRiW5A90WIWi3z2z8dKdpjsPBnqjpbUDTDX4K%2B%2BBjqkAUFppnqstYDh3n8BreFLL0NUc%2FA7z0UCRJLtTPc54ZP6U%2FA1zA7w%2FkEDUblbyfKpZHKxj7JzOe09EF0RGcbZ6ASfYZYOIFISArIW7%2Ffl7%2BigsEDGukHL4xliWX4FvQ%2FJgczt%2BcKnAZMxdyGeprKi21fW9%2FhhwMXCN%2F%2Ba5G5aycw%2FXKxQW5C0w3cYIraNESOKI4vDpXb4BgnjEMRbz3roEndmk29q&X-Amz-Signature=61c3e16adf8e643f3f69b90c71d12d305bed238f8704750360807af9993a119b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLDN22%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCyPN3B0GGSip2q%2F0DERd%2FSPqVdSUmcFo7vndZnCz3%2F1wIhAN70KXcC8xU8xTY5Mlq1qgG259QER6hvqLMzJC4OTPRCKv8DCFgQABoMNjM3NDIzMTgzODA1Igw58Vk3aMmHijozyhcq3AOu72ekWbRdSuctifJfqIYREhP%2F7ZN21Qt2XwOy%2B%2FW5i1H%2F9LpExyh8cN%2F63NVrTWMdhJfreQLsRflBL43hK51o70A%2FsWZBan95v6wVvm0StgLzuGnQx%2FDQXk%2BXX642J9hSn9dhLpOle8tF814d17szvOSGHeCzmAVsVtfaWAnvnIF6LKXNFGLqtQHMFpIu9GfRiDoLroWcdMS2ITTMSvKNmbNM5B8HvUb8aVFpn1YxNm%2BdWI1ek4brqGchiNfSvHT6EVmKaCVRtAnj%2Fk6Hi93qRSPf4xnNw6AWD5cCU4wOYL4jtGGQqrm4QI672bfwgkS6rMl4yh5iM6zHIQ4S1Pb%2F56WYmha8TG9kkVR%2BmML0%2BXh2Fe2xzfkcGF4u4q2FlGFIdlcpVz6s7WkORoZWdKv0dQ99ZIPAvmWzpapiuWRGlwE4Fe7zNV3D9GGwUHnVC7OkAXykQtIhDh8cbrh5IqvlnWrZd6AYd9sS5cmNFdIlT7CHfvyUIOOXFI4zlK0gir%2FucYh3b2YDzNqImsX78HKQV%2BdLF4ePp9WDQi8f3OCYhcV%2F9dHUSaFlJB4UIx%2FX3rmf%2Ba6GI7Xalh620W3QC5TR0BE%2FlmRiW5A90WIWi3z2z8dKdpjsPBnqjpbUDTDX4K%2B%2BBjqkAUFppnqstYDh3n8BreFLL0NUc%2FA7z0UCRJLtTPc54ZP6U%2FA1zA7w%2FkEDUblbyfKpZHKxj7JzOe09EF0RGcbZ6ASfYZYOIFISArIW7%2Ffl7%2BigsEDGukHL4xliWX4FvQ%2FJgczt%2BcKnAZMxdyGeprKi21fW9%2FhhwMXCN%2F%2Ba5G5aycw%2FXKxQW5C0w3cYIraNESOKI4vDpXb4BgnjEMRbz3roEndmk29q&X-Amz-Signature=f4bc1f4bce8469c985f05e51ffab0c342e3c4a780a19a1bf9ad2183f1a3b6a45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLDN22%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCyPN3B0GGSip2q%2F0DERd%2FSPqVdSUmcFo7vndZnCz3%2F1wIhAN70KXcC8xU8xTY5Mlq1qgG259QER6hvqLMzJC4OTPRCKv8DCFgQABoMNjM3NDIzMTgzODA1Igw58Vk3aMmHijozyhcq3AOu72ekWbRdSuctifJfqIYREhP%2F7ZN21Qt2XwOy%2B%2FW5i1H%2F9LpExyh8cN%2F63NVrTWMdhJfreQLsRflBL43hK51o70A%2FsWZBan95v6wVvm0StgLzuGnQx%2FDQXk%2BXX642J9hSn9dhLpOle8tF814d17szvOSGHeCzmAVsVtfaWAnvnIF6LKXNFGLqtQHMFpIu9GfRiDoLroWcdMS2ITTMSvKNmbNM5B8HvUb8aVFpn1YxNm%2BdWI1ek4brqGchiNfSvHT6EVmKaCVRtAnj%2Fk6Hi93qRSPf4xnNw6AWD5cCU4wOYL4jtGGQqrm4QI672bfwgkS6rMl4yh5iM6zHIQ4S1Pb%2F56WYmha8TG9kkVR%2BmML0%2BXh2Fe2xzfkcGF4u4q2FlGFIdlcpVz6s7WkORoZWdKv0dQ99ZIPAvmWzpapiuWRGlwE4Fe7zNV3D9GGwUHnVC7OkAXykQtIhDh8cbrh5IqvlnWrZd6AYd9sS5cmNFdIlT7CHfvyUIOOXFI4zlK0gir%2FucYh3b2YDzNqImsX78HKQV%2BdLF4ePp9WDQi8f3OCYhcV%2F9dHUSaFlJB4UIx%2FX3rmf%2Ba6GI7Xalh620W3QC5TR0BE%2FlmRiW5A90WIWi3z2z8dKdpjsPBnqjpbUDTDX4K%2B%2BBjqkAUFppnqstYDh3n8BreFLL0NUc%2FA7z0UCRJLtTPc54ZP6U%2FA1zA7w%2FkEDUblbyfKpZHKxj7JzOe09EF0RGcbZ6ASfYZYOIFISArIW7%2Ffl7%2BigsEDGukHL4xliWX4FvQ%2FJgczt%2BcKnAZMxdyGeprKi21fW9%2FhhwMXCN%2F%2Ba5G5aycw%2FXKxQW5C0w3cYIraNESOKI4vDpXb4BgnjEMRbz3roEndmk29q&X-Amz-Signature=9f8f7da7c76f2e31f730aabbb3938cf883791c6b9498e725a1a17361159fd023&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
