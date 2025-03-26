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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKML6KRD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh09%2Fve8ke3OeK%2BcnKtDIlNyTdZAYNGXzCspiRfBWZSAiA6ekYBkla93OdfS8CVIuD93dZioFDbGtph4seAk95rxir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjn2koU4sxMkBlhKyKtwDNmc29hcImTMy%2FHRd5UwvDTJ%2BHTH6UxyDgjXz%2BGwWLpBXVZYDXKEWSaMtgxJHNWbihQtxZ5gLuSTroywTPvV56SjvVUMHTPP3i7EwJqBIJPWk5s%2FeHW6UzYb6JLZHD%2BYYHW3TGqMwuWMWA09F0TNtVeQBZJapvBWjvRZLzV92X8WGOsMRXdp1wTUlyDuuovx3DlOw8pWcWspiJDUfi4mBvmpg6vuwOaYwvjWRi7B9VCYFfisx1IHwNuZwZ16KwJxxowMGrtZOb24%2BgALvtOgwkqRwX6GGNiiF%2F%2FlVnd%2FI2HU6Cbi4GdYD4AcaOeSmelIUX%2BOOFgCVpW2AHu%2FJUPwp2Cy196f55v7c4yz1TO3Ft9EC9Lx2PlFgFAJL8S1b%2BwElyW16dOLmCgy7PBjzfimKclPB%2FVywlnw4RBQgMmOWr08b5NYPDd%2FEnyrldl6NP4k%2FihGBMcmTBLU51%2BHnITTVHb7LxjqD%2BkE6TtXtn0hv%2FveWOYYg1tpVUPQjOI%2Bx9Y%2F56h0Eap0eWNhRfjiJ%2B3JOdUnOraCB2Mz6Xk%2FtDPdgF1MAicL7cDKSjENnN9nSEMMW53Q6OxUMQqs25PKXvVLpGvsUB9kAoHAhIJF%2FiAWiikF%2F4aXTBA0a%2BpUai3YwgLmQvwY6pgH3E2z5dgycoBZszqluYWF4fCHI2qj4O20P5GIg3Myar2O85QfAVTZUkvdZ90XKtNh4VW3en1PDci3uUv8TqhRqXV0QYnI6Jbx11p0fIfn92g%2FN0C%2F2pzFTJivDOItwb%2BA%2FbbA%2BaVJ1pWSIJhK44KIXTmh%2FV2VPvyxysF5rAx81QgBK5NySZs5kSs5el3WVRes1fP3KM4LKTbDxom16AnTmrtvi%2FtL2&X-Amz-Signature=01b40636cc0f5f571529e017a083cf98630d5be7b1678abe07ad7c23c29277b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKML6KRD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh09%2Fve8ke3OeK%2BcnKtDIlNyTdZAYNGXzCspiRfBWZSAiA6ekYBkla93OdfS8CVIuD93dZioFDbGtph4seAk95rxir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjn2koU4sxMkBlhKyKtwDNmc29hcImTMy%2FHRd5UwvDTJ%2BHTH6UxyDgjXz%2BGwWLpBXVZYDXKEWSaMtgxJHNWbihQtxZ5gLuSTroywTPvV56SjvVUMHTPP3i7EwJqBIJPWk5s%2FeHW6UzYb6JLZHD%2BYYHW3TGqMwuWMWA09F0TNtVeQBZJapvBWjvRZLzV92X8WGOsMRXdp1wTUlyDuuovx3DlOw8pWcWspiJDUfi4mBvmpg6vuwOaYwvjWRi7B9VCYFfisx1IHwNuZwZ16KwJxxowMGrtZOb24%2BgALvtOgwkqRwX6GGNiiF%2F%2FlVnd%2FI2HU6Cbi4GdYD4AcaOeSmelIUX%2BOOFgCVpW2AHu%2FJUPwp2Cy196f55v7c4yz1TO3Ft9EC9Lx2PlFgFAJL8S1b%2BwElyW16dOLmCgy7PBjzfimKclPB%2FVywlnw4RBQgMmOWr08b5NYPDd%2FEnyrldl6NP4k%2FihGBMcmTBLU51%2BHnITTVHb7LxjqD%2BkE6TtXtn0hv%2FveWOYYg1tpVUPQjOI%2Bx9Y%2F56h0Eap0eWNhRfjiJ%2B3JOdUnOraCB2Mz6Xk%2FtDPdgF1MAicL7cDKSjENnN9nSEMMW53Q6OxUMQqs25PKXvVLpGvsUB9kAoHAhIJF%2FiAWiikF%2F4aXTBA0a%2BpUai3YwgLmQvwY6pgH3E2z5dgycoBZszqluYWF4fCHI2qj4O20P5GIg3Myar2O85QfAVTZUkvdZ90XKtNh4VW3en1PDci3uUv8TqhRqXV0QYnI6Jbx11p0fIfn92g%2FN0C%2F2pzFTJivDOItwb%2BA%2FbbA%2BaVJ1pWSIJhK44KIXTmh%2FV2VPvyxysF5rAx81QgBK5NySZs5kSs5el3WVRes1fP3KM4LKTbDxom16AnTmrtvi%2FtL2&X-Amz-Signature=5fe01b4d100d615917f8c7c091b3615b1f2a30c9f86b1abcb120075a837b8c03&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKML6KRD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh09%2Fve8ke3OeK%2BcnKtDIlNyTdZAYNGXzCspiRfBWZSAiA6ekYBkla93OdfS8CVIuD93dZioFDbGtph4seAk95rxir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjn2koU4sxMkBlhKyKtwDNmc29hcImTMy%2FHRd5UwvDTJ%2BHTH6UxyDgjXz%2BGwWLpBXVZYDXKEWSaMtgxJHNWbihQtxZ5gLuSTroywTPvV56SjvVUMHTPP3i7EwJqBIJPWk5s%2FeHW6UzYb6JLZHD%2BYYHW3TGqMwuWMWA09F0TNtVeQBZJapvBWjvRZLzV92X8WGOsMRXdp1wTUlyDuuovx3DlOw8pWcWspiJDUfi4mBvmpg6vuwOaYwvjWRi7B9VCYFfisx1IHwNuZwZ16KwJxxowMGrtZOb24%2BgALvtOgwkqRwX6GGNiiF%2F%2FlVnd%2FI2HU6Cbi4GdYD4AcaOeSmelIUX%2BOOFgCVpW2AHu%2FJUPwp2Cy196f55v7c4yz1TO3Ft9EC9Lx2PlFgFAJL8S1b%2BwElyW16dOLmCgy7PBjzfimKclPB%2FVywlnw4RBQgMmOWr08b5NYPDd%2FEnyrldl6NP4k%2FihGBMcmTBLU51%2BHnITTVHb7LxjqD%2BkE6TtXtn0hv%2FveWOYYg1tpVUPQjOI%2Bx9Y%2F56h0Eap0eWNhRfjiJ%2B3JOdUnOraCB2Mz6Xk%2FtDPdgF1MAicL7cDKSjENnN9nSEMMW53Q6OxUMQqs25PKXvVLpGvsUB9kAoHAhIJF%2FiAWiikF%2F4aXTBA0a%2BpUai3YwgLmQvwY6pgH3E2z5dgycoBZszqluYWF4fCHI2qj4O20P5GIg3Myar2O85QfAVTZUkvdZ90XKtNh4VW3en1PDci3uUv8TqhRqXV0QYnI6Jbx11p0fIfn92g%2FN0C%2F2pzFTJivDOItwb%2BA%2FbbA%2BaVJ1pWSIJhK44KIXTmh%2FV2VPvyxysF5rAx81QgBK5NySZs5kSs5el3WVRes1fP3KM4LKTbDxom16AnTmrtvi%2FtL2&X-Amz-Signature=025514e1acabaab3b03d557013fbd74d2494576b4a8c7e0ccf5e83ee2d4ed0d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKML6KRD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh09%2Fve8ke3OeK%2BcnKtDIlNyTdZAYNGXzCspiRfBWZSAiA6ekYBkla93OdfS8CVIuD93dZioFDbGtph4seAk95rxir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjn2koU4sxMkBlhKyKtwDNmc29hcImTMy%2FHRd5UwvDTJ%2BHTH6UxyDgjXz%2BGwWLpBXVZYDXKEWSaMtgxJHNWbihQtxZ5gLuSTroywTPvV56SjvVUMHTPP3i7EwJqBIJPWk5s%2FeHW6UzYb6JLZHD%2BYYHW3TGqMwuWMWA09F0TNtVeQBZJapvBWjvRZLzV92X8WGOsMRXdp1wTUlyDuuovx3DlOw8pWcWspiJDUfi4mBvmpg6vuwOaYwvjWRi7B9VCYFfisx1IHwNuZwZ16KwJxxowMGrtZOb24%2BgALvtOgwkqRwX6GGNiiF%2F%2FlVnd%2FI2HU6Cbi4GdYD4AcaOeSmelIUX%2BOOFgCVpW2AHu%2FJUPwp2Cy196f55v7c4yz1TO3Ft9EC9Lx2PlFgFAJL8S1b%2BwElyW16dOLmCgy7PBjzfimKclPB%2FVywlnw4RBQgMmOWr08b5NYPDd%2FEnyrldl6NP4k%2FihGBMcmTBLU51%2BHnITTVHb7LxjqD%2BkE6TtXtn0hv%2FveWOYYg1tpVUPQjOI%2Bx9Y%2F56h0Eap0eWNhRfjiJ%2B3JOdUnOraCB2Mz6Xk%2FtDPdgF1MAicL7cDKSjENnN9nSEMMW53Q6OxUMQqs25PKXvVLpGvsUB9kAoHAhIJF%2FiAWiikF%2F4aXTBA0a%2BpUai3YwgLmQvwY6pgH3E2z5dgycoBZszqluYWF4fCHI2qj4O20P5GIg3Myar2O85QfAVTZUkvdZ90XKtNh4VW3en1PDci3uUv8TqhRqXV0QYnI6Jbx11p0fIfn92g%2FN0C%2F2pzFTJivDOItwb%2BA%2FbbA%2BaVJ1pWSIJhK44KIXTmh%2FV2VPvyxysF5rAx81QgBK5NySZs5kSs5el3WVRes1fP3KM4LKTbDxom16AnTmrtvi%2FtL2&X-Amz-Signature=c4c8baad0d7e5848a445c3328c5e69bcea4211d12412a2e477b47583fb773444&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKML6KRD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh09%2Fve8ke3OeK%2BcnKtDIlNyTdZAYNGXzCspiRfBWZSAiA6ekYBkla93OdfS8CVIuD93dZioFDbGtph4seAk95rxir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjn2koU4sxMkBlhKyKtwDNmc29hcImTMy%2FHRd5UwvDTJ%2BHTH6UxyDgjXz%2BGwWLpBXVZYDXKEWSaMtgxJHNWbihQtxZ5gLuSTroywTPvV56SjvVUMHTPP3i7EwJqBIJPWk5s%2FeHW6UzYb6JLZHD%2BYYHW3TGqMwuWMWA09F0TNtVeQBZJapvBWjvRZLzV92X8WGOsMRXdp1wTUlyDuuovx3DlOw8pWcWspiJDUfi4mBvmpg6vuwOaYwvjWRi7B9VCYFfisx1IHwNuZwZ16KwJxxowMGrtZOb24%2BgALvtOgwkqRwX6GGNiiF%2F%2FlVnd%2FI2HU6Cbi4GdYD4AcaOeSmelIUX%2BOOFgCVpW2AHu%2FJUPwp2Cy196f55v7c4yz1TO3Ft9EC9Lx2PlFgFAJL8S1b%2BwElyW16dOLmCgy7PBjzfimKclPB%2FVywlnw4RBQgMmOWr08b5NYPDd%2FEnyrldl6NP4k%2FihGBMcmTBLU51%2BHnITTVHb7LxjqD%2BkE6TtXtn0hv%2FveWOYYg1tpVUPQjOI%2Bx9Y%2F56h0Eap0eWNhRfjiJ%2B3JOdUnOraCB2Mz6Xk%2FtDPdgF1MAicL7cDKSjENnN9nSEMMW53Q6OxUMQqs25PKXvVLpGvsUB9kAoHAhIJF%2FiAWiikF%2F4aXTBA0a%2BpUai3YwgLmQvwY6pgH3E2z5dgycoBZszqluYWF4fCHI2qj4O20P5GIg3Myar2O85QfAVTZUkvdZ90XKtNh4VW3en1PDci3uUv8TqhRqXV0QYnI6Jbx11p0fIfn92g%2FN0C%2F2pzFTJivDOItwb%2BA%2FbbA%2BaVJ1pWSIJhK44KIXTmh%2FV2VPvyxysF5rAx81QgBK5NySZs5kSs5el3WVRes1fP3KM4LKTbDxom16AnTmrtvi%2FtL2&X-Amz-Signature=72b980a1d7e38e54a964c3aba3ce9c07819f9f5be2a56b7d2077d3fe94c2f9fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKML6KRD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh09%2Fve8ke3OeK%2BcnKtDIlNyTdZAYNGXzCspiRfBWZSAiA6ekYBkla93OdfS8CVIuD93dZioFDbGtph4seAk95rxir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjn2koU4sxMkBlhKyKtwDNmc29hcImTMy%2FHRd5UwvDTJ%2BHTH6UxyDgjXz%2BGwWLpBXVZYDXKEWSaMtgxJHNWbihQtxZ5gLuSTroywTPvV56SjvVUMHTPP3i7EwJqBIJPWk5s%2FeHW6UzYb6JLZHD%2BYYHW3TGqMwuWMWA09F0TNtVeQBZJapvBWjvRZLzV92X8WGOsMRXdp1wTUlyDuuovx3DlOw8pWcWspiJDUfi4mBvmpg6vuwOaYwvjWRi7B9VCYFfisx1IHwNuZwZ16KwJxxowMGrtZOb24%2BgALvtOgwkqRwX6GGNiiF%2F%2FlVnd%2FI2HU6Cbi4GdYD4AcaOeSmelIUX%2BOOFgCVpW2AHu%2FJUPwp2Cy196f55v7c4yz1TO3Ft9EC9Lx2PlFgFAJL8S1b%2BwElyW16dOLmCgy7PBjzfimKclPB%2FVywlnw4RBQgMmOWr08b5NYPDd%2FEnyrldl6NP4k%2FihGBMcmTBLU51%2BHnITTVHb7LxjqD%2BkE6TtXtn0hv%2FveWOYYg1tpVUPQjOI%2Bx9Y%2F56h0Eap0eWNhRfjiJ%2B3JOdUnOraCB2Mz6Xk%2FtDPdgF1MAicL7cDKSjENnN9nSEMMW53Q6OxUMQqs25PKXvVLpGvsUB9kAoHAhIJF%2FiAWiikF%2F4aXTBA0a%2BpUai3YwgLmQvwY6pgH3E2z5dgycoBZszqluYWF4fCHI2qj4O20P5GIg3Myar2O85QfAVTZUkvdZ90XKtNh4VW3en1PDci3uUv8TqhRqXV0QYnI6Jbx11p0fIfn92g%2FN0C%2F2pzFTJivDOItwb%2BA%2FbbA%2BaVJ1pWSIJhK44KIXTmh%2FV2VPvyxysF5rAx81QgBK5NySZs5kSs5el3WVRes1fP3KM4LKTbDxom16AnTmrtvi%2FtL2&X-Amz-Signature=94446127717abefd4530f2f9fe38770ed6ab1938b8493b6de9f1da087a65f0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKML6KRD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh09%2Fve8ke3OeK%2BcnKtDIlNyTdZAYNGXzCspiRfBWZSAiA6ekYBkla93OdfS8CVIuD93dZioFDbGtph4seAk95rxir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjn2koU4sxMkBlhKyKtwDNmc29hcImTMy%2FHRd5UwvDTJ%2BHTH6UxyDgjXz%2BGwWLpBXVZYDXKEWSaMtgxJHNWbihQtxZ5gLuSTroywTPvV56SjvVUMHTPP3i7EwJqBIJPWk5s%2FeHW6UzYb6JLZHD%2BYYHW3TGqMwuWMWA09F0TNtVeQBZJapvBWjvRZLzV92X8WGOsMRXdp1wTUlyDuuovx3DlOw8pWcWspiJDUfi4mBvmpg6vuwOaYwvjWRi7B9VCYFfisx1IHwNuZwZ16KwJxxowMGrtZOb24%2BgALvtOgwkqRwX6GGNiiF%2F%2FlVnd%2FI2HU6Cbi4GdYD4AcaOeSmelIUX%2BOOFgCVpW2AHu%2FJUPwp2Cy196f55v7c4yz1TO3Ft9EC9Lx2PlFgFAJL8S1b%2BwElyW16dOLmCgy7PBjzfimKclPB%2FVywlnw4RBQgMmOWr08b5NYPDd%2FEnyrldl6NP4k%2FihGBMcmTBLU51%2BHnITTVHb7LxjqD%2BkE6TtXtn0hv%2FveWOYYg1tpVUPQjOI%2Bx9Y%2F56h0Eap0eWNhRfjiJ%2B3JOdUnOraCB2Mz6Xk%2FtDPdgF1MAicL7cDKSjENnN9nSEMMW53Q6OxUMQqs25PKXvVLpGvsUB9kAoHAhIJF%2FiAWiikF%2F4aXTBA0a%2BpUai3YwgLmQvwY6pgH3E2z5dgycoBZszqluYWF4fCHI2qj4O20P5GIg3Myar2O85QfAVTZUkvdZ90XKtNh4VW3en1PDci3uUv8TqhRqXV0QYnI6Jbx11p0fIfn92g%2FN0C%2F2pzFTJivDOItwb%2BA%2FbbA%2BaVJ1pWSIJhK44KIXTmh%2FV2VPvyxysF5rAx81QgBK5NySZs5kSs5el3WVRes1fP3KM4LKTbDxom16AnTmrtvi%2FtL2&X-Amz-Signature=d8fa03c5c2e680b0a92e6b0b4b8bc4cef5f1c6f3b28fb43a9e818cd8e78e9d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKML6KRD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh09%2Fve8ke3OeK%2BcnKtDIlNyTdZAYNGXzCspiRfBWZSAiA6ekYBkla93OdfS8CVIuD93dZioFDbGtph4seAk95rxir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMjn2koU4sxMkBlhKyKtwDNmc29hcImTMy%2FHRd5UwvDTJ%2BHTH6UxyDgjXz%2BGwWLpBXVZYDXKEWSaMtgxJHNWbihQtxZ5gLuSTroywTPvV56SjvVUMHTPP3i7EwJqBIJPWk5s%2FeHW6UzYb6JLZHD%2BYYHW3TGqMwuWMWA09F0TNtVeQBZJapvBWjvRZLzV92X8WGOsMRXdp1wTUlyDuuovx3DlOw8pWcWspiJDUfi4mBvmpg6vuwOaYwvjWRi7B9VCYFfisx1IHwNuZwZ16KwJxxowMGrtZOb24%2BgALvtOgwkqRwX6GGNiiF%2F%2FlVnd%2FI2HU6Cbi4GdYD4AcaOeSmelIUX%2BOOFgCVpW2AHu%2FJUPwp2Cy196f55v7c4yz1TO3Ft9EC9Lx2PlFgFAJL8S1b%2BwElyW16dOLmCgy7PBjzfimKclPB%2FVywlnw4RBQgMmOWr08b5NYPDd%2FEnyrldl6NP4k%2FihGBMcmTBLU51%2BHnITTVHb7LxjqD%2BkE6TtXtn0hv%2FveWOYYg1tpVUPQjOI%2Bx9Y%2F56h0Eap0eWNhRfjiJ%2B3JOdUnOraCB2Mz6Xk%2FtDPdgF1MAicL7cDKSjENnN9nSEMMW53Q6OxUMQqs25PKXvVLpGvsUB9kAoHAhIJF%2FiAWiikF%2F4aXTBA0a%2BpUai3YwgLmQvwY6pgH3E2z5dgycoBZszqluYWF4fCHI2qj4O20P5GIg3Myar2O85QfAVTZUkvdZ90XKtNh4VW3en1PDci3uUv8TqhRqXV0QYnI6Jbx11p0fIfn92g%2FN0C%2F2pzFTJivDOItwb%2BA%2FbbA%2BaVJ1pWSIJhK44KIXTmh%2FV2VPvyxysF5rAx81QgBK5NySZs5kSs5el3WVRes1fP3KM4LKTbDxom16AnTmrtvi%2FtL2&X-Amz-Signature=f0d2eb25ccea6d1c192e20ec367f12c3b15344b5ef5eb0c94e9f92dd5f38e2e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
