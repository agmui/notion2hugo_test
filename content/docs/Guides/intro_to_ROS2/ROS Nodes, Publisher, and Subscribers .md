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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLYYOM6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hc5H9Gc57xBn4a6AsXDTffPsjSQqtu9yWD8x%2FMJnOQIgQP3DZHqZeO%2Bht8NW%2Fqqv7kGJO5jD1Utmm7gxqHcgODsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKjIda64CoUkvbaE2yrcA4zRf90WSAwOn4RPmMWL91sxTUbI10ZA2NKh6U%2F1yaC8F4D8xAQ9tJFizuc%2FSQzS08F39XrJgxviyVTXjJ%2BdLd5ySmV3PlguUzneiDTMCdsnQMr2C2RUQj4Ps0zGV4af6ZG1Wx5G2xvIT25ZlwCqV5ww4BCM8kH5HsHfTzicj07k2qY24jVzlfIsU8v9S551K%2BfzH6vhhbleUTKDw4Apf1vA7U37FoL7C4RplHBNuiQo%2Fg1fpVGB8mAWB%2BSzIu9fKiQkfR%2Fx2FSmGK7piZbbLbRA1WP7PZZxHgyEdoytFTBHDspbkH3XC%2BaTcfzoO232PE%2BrkauUX2Iz5quQLZz%2BhrInEcFsXXo3aP%2BxfdZD%2Fgs793MIm5ot0JwDH7HI6%2FHzxj5MI7%2FrGXCYSjPsV%2Fdvi5%2FTUSJ%2B5mpR3FZb%2Fe4inyrpcSakF8olqVEw05NCdILJIo5Cm3pAD%2Fs97TVueWwJeSvR%2BRTUr59BtyTN%2FypYT2ppQ7V3HFX65rymOqu5BqpUWi03xYwNFG9NVQZjPj7w7wRP5RG1WxKtvIl%2FQMQxBiPu7AcMM6AmUhXhWOwrMRARWVZ4%2Bw1SFBHi73CAflfL7U%2FEjS%2B%2FIUmQPpFBqiVruJEuX6gJw2RALO5zKz7AMP%2FIqL4GOqUBk8Wc5lM2%2FVkPyB3qypAjgq6fEBa%2BJceYjLE1bx9w6NCSB89ZEcO8VkCK84liCoLkdyW6I%2BWpKmr0yIDAKnA25%2FoNc%2Bkh8jsj7%2FdQ3FwXxcO3N2X5hjsc6JRg4qtb4snt%2Fd8amiNa31E%2BgdWkKkJvVTbGfYU3r%2B9g1bn7CsgwqH45ojQA%2BwGz4Ok9EkVHao%2FlgKeoE5RRU9j8DqVUEwBNTsVkpt8V&X-Amz-Signature=19a8007cb77c3d8afac182fbc90e120943dba80e5627ef9682b8dc37570ed616&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLYYOM6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hc5H9Gc57xBn4a6AsXDTffPsjSQqtu9yWD8x%2FMJnOQIgQP3DZHqZeO%2Bht8NW%2Fqqv7kGJO5jD1Utmm7gxqHcgODsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKjIda64CoUkvbaE2yrcA4zRf90WSAwOn4RPmMWL91sxTUbI10ZA2NKh6U%2F1yaC8F4D8xAQ9tJFizuc%2FSQzS08F39XrJgxviyVTXjJ%2BdLd5ySmV3PlguUzneiDTMCdsnQMr2C2RUQj4Ps0zGV4af6ZG1Wx5G2xvIT25ZlwCqV5ww4BCM8kH5HsHfTzicj07k2qY24jVzlfIsU8v9S551K%2BfzH6vhhbleUTKDw4Apf1vA7U37FoL7C4RplHBNuiQo%2Fg1fpVGB8mAWB%2BSzIu9fKiQkfR%2Fx2FSmGK7piZbbLbRA1WP7PZZxHgyEdoytFTBHDspbkH3XC%2BaTcfzoO232PE%2BrkauUX2Iz5quQLZz%2BhrInEcFsXXo3aP%2BxfdZD%2Fgs793MIm5ot0JwDH7HI6%2FHzxj5MI7%2FrGXCYSjPsV%2Fdvi5%2FTUSJ%2B5mpR3FZb%2Fe4inyrpcSakF8olqVEw05NCdILJIo5Cm3pAD%2Fs97TVueWwJeSvR%2BRTUr59BtyTN%2FypYT2ppQ7V3HFX65rymOqu5BqpUWi03xYwNFG9NVQZjPj7w7wRP5RG1WxKtvIl%2FQMQxBiPu7AcMM6AmUhXhWOwrMRARWVZ4%2Bw1SFBHi73CAflfL7U%2FEjS%2B%2FIUmQPpFBqiVruJEuX6gJw2RALO5zKz7AMP%2FIqL4GOqUBk8Wc5lM2%2FVkPyB3qypAjgq6fEBa%2BJceYjLE1bx9w6NCSB89ZEcO8VkCK84liCoLkdyW6I%2BWpKmr0yIDAKnA25%2FoNc%2Bkh8jsj7%2FdQ3FwXxcO3N2X5hjsc6JRg4qtb4snt%2Fd8amiNa31E%2BgdWkKkJvVTbGfYU3r%2B9g1bn7CsgwqH45ojQA%2BwGz4Ok9EkVHao%2FlgKeoE5RRU9j8DqVUEwBNTsVkpt8V&X-Amz-Signature=17a4cc1f9ea89c77a1b97535bebaf101f851c54fd148903a75987db917dee5ad&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLYYOM6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hc5H9Gc57xBn4a6AsXDTffPsjSQqtu9yWD8x%2FMJnOQIgQP3DZHqZeO%2Bht8NW%2Fqqv7kGJO5jD1Utmm7gxqHcgODsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKjIda64CoUkvbaE2yrcA4zRf90WSAwOn4RPmMWL91sxTUbI10ZA2NKh6U%2F1yaC8F4D8xAQ9tJFizuc%2FSQzS08F39XrJgxviyVTXjJ%2BdLd5ySmV3PlguUzneiDTMCdsnQMr2C2RUQj4Ps0zGV4af6ZG1Wx5G2xvIT25ZlwCqV5ww4BCM8kH5HsHfTzicj07k2qY24jVzlfIsU8v9S551K%2BfzH6vhhbleUTKDw4Apf1vA7U37FoL7C4RplHBNuiQo%2Fg1fpVGB8mAWB%2BSzIu9fKiQkfR%2Fx2FSmGK7piZbbLbRA1WP7PZZxHgyEdoytFTBHDspbkH3XC%2BaTcfzoO232PE%2BrkauUX2Iz5quQLZz%2BhrInEcFsXXo3aP%2BxfdZD%2Fgs793MIm5ot0JwDH7HI6%2FHzxj5MI7%2FrGXCYSjPsV%2Fdvi5%2FTUSJ%2B5mpR3FZb%2Fe4inyrpcSakF8olqVEw05NCdILJIo5Cm3pAD%2Fs97TVueWwJeSvR%2BRTUr59BtyTN%2FypYT2ppQ7V3HFX65rymOqu5BqpUWi03xYwNFG9NVQZjPj7w7wRP5RG1WxKtvIl%2FQMQxBiPu7AcMM6AmUhXhWOwrMRARWVZ4%2Bw1SFBHi73CAflfL7U%2FEjS%2B%2FIUmQPpFBqiVruJEuX6gJw2RALO5zKz7AMP%2FIqL4GOqUBk8Wc5lM2%2FVkPyB3qypAjgq6fEBa%2BJceYjLE1bx9w6NCSB89ZEcO8VkCK84liCoLkdyW6I%2BWpKmr0yIDAKnA25%2FoNc%2Bkh8jsj7%2FdQ3FwXxcO3N2X5hjsc6JRg4qtb4snt%2Fd8amiNa31E%2BgdWkKkJvVTbGfYU3r%2B9g1bn7CsgwqH45ojQA%2BwGz4Ok9EkVHao%2FlgKeoE5RRU9j8DqVUEwBNTsVkpt8V&X-Amz-Signature=5ea935c101fea8f12bdd27775e079a2cb9ba26a3ef6ca422e754b64bdcf10156&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLYYOM6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hc5H9Gc57xBn4a6AsXDTffPsjSQqtu9yWD8x%2FMJnOQIgQP3DZHqZeO%2Bht8NW%2Fqqv7kGJO5jD1Utmm7gxqHcgODsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKjIda64CoUkvbaE2yrcA4zRf90WSAwOn4RPmMWL91sxTUbI10ZA2NKh6U%2F1yaC8F4D8xAQ9tJFizuc%2FSQzS08F39XrJgxviyVTXjJ%2BdLd5ySmV3PlguUzneiDTMCdsnQMr2C2RUQj4Ps0zGV4af6ZG1Wx5G2xvIT25ZlwCqV5ww4BCM8kH5HsHfTzicj07k2qY24jVzlfIsU8v9S551K%2BfzH6vhhbleUTKDw4Apf1vA7U37FoL7C4RplHBNuiQo%2Fg1fpVGB8mAWB%2BSzIu9fKiQkfR%2Fx2FSmGK7piZbbLbRA1WP7PZZxHgyEdoytFTBHDspbkH3XC%2BaTcfzoO232PE%2BrkauUX2Iz5quQLZz%2BhrInEcFsXXo3aP%2BxfdZD%2Fgs793MIm5ot0JwDH7HI6%2FHzxj5MI7%2FrGXCYSjPsV%2Fdvi5%2FTUSJ%2B5mpR3FZb%2Fe4inyrpcSakF8olqVEw05NCdILJIo5Cm3pAD%2Fs97TVueWwJeSvR%2BRTUr59BtyTN%2FypYT2ppQ7V3HFX65rymOqu5BqpUWi03xYwNFG9NVQZjPj7w7wRP5RG1WxKtvIl%2FQMQxBiPu7AcMM6AmUhXhWOwrMRARWVZ4%2Bw1SFBHi73CAflfL7U%2FEjS%2B%2FIUmQPpFBqiVruJEuX6gJw2RALO5zKz7AMP%2FIqL4GOqUBk8Wc5lM2%2FVkPyB3qypAjgq6fEBa%2BJceYjLE1bx9w6NCSB89ZEcO8VkCK84liCoLkdyW6I%2BWpKmr0yIDAKnA25%2FoNc%2Bkh8jsj7%2FdQ3FwXxcO3N2X5hjsc6JRg4qtb4snt%2Fd8amiNa31E%2BgdWkKkJvVTbGfYU3r%2B9g1bn7CsgwqH45ojQA%2BwGz4Ok9EkVHao%2FlgKeoE5RRU9j8DqVUEwBNTsVkpt8V&X-Amz-Signature=dc06370f889ab051cf2c20af3ae21d5a6f06ece46bf8855698e3c7e5a51a649b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLYYOM6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hc5H9Gc57xBn4a6AsXDTffPsjSQqtu9yWD8x%2FMJnOQIgQP3DZHqZeO%2Bht8NW%2Fqqv7kGJO5jD1Utmm7gxqHcgODsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKjIda64CoUkvbaE2yrcA4zRf90WSAwOn4RPmMWL91sxTUbI10ZA2NKh6U%2F1yaC8F4D8xAQ9tJFizuc%2FSQzS08F39XrJgxviyVTXjJ%2BdLd5ySmV3PlguUzneiDTMCdsnQMr2C2RUQj4Ps0zGV4af6ZG1Wx5G2xvIT25ZlwCqV5ww4BCM8kH5HsHfTzicj07k2qY24jVzlfIsU8v9S551K%2BfzH6vhhbleUTKDw4Apf1vA7U37FoL7C4RplHBNuiQo%2Fg1fpVGB8mAWB%2BSzIu9fKiQkfR%2Fx2FSmGK7piZbbLbRA1WP7PZZxHgyEdoytFTBHDspbkH3XC%2BaTcfzoO232PE%2BrkauUX2Iz5quQLZz%2BhrInEcFsXXo3aP%2BxfdZD%2Fgs793MIm5ot0JwDH7HI6%2FHzxj5MI7%2FrGXCYSjPsV%2Fdvi5%2FTUSJ%2B5mpR3FZb%2Fe4inyrpcSakF8olqVEw05NCdILJIo5Cm3pAD%2Fs97TVueWwJeSvR%2BRTUr59BtyTN%2FypYT2ppQ7V3HFX65rymOqu5BqpUWi03xYwNFG9NVQZjPj7w7wRP5RG1WxKtvIl%2FQMQxBiPu7AcMM6AmUhXhWOwrMRARWVZ4%2Bw1SFBHi73CAflfL7U%2FEjS%2B%2FIUmQPpFBqiVruJEuX6gJw2RALO5zKz7AMP%2FIqL4GOqUBk8Wc5lM2%2FVkPyB3qypAjgq6fEBa%2BJceYjLE1bx9w6NCSB89ZEcO8VkCK84liCoLkdyW6I%2BWpKmr0yIDAKnA25%2FoNc%2Bkh8jsj7%2FdQ3FwXxcO3N2X5hjsc6JRg4qtb4snt%2Fd8amiNa31E%2BgdWkKkJvVTbGfYU3r%2B9g1bn7CsgwqH45ojQA%2BwGz4Ok9EkVHao%2FlgKeoE5RRU9j8DqVUEwBNTsVkpt8V&X-Amz-Signature=4578d9c849434dca914203e40f56902dc81de490dba3768d5f305750c7e406e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLYYOM6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hc5H9Gc57xBn4a6AsXDTffPsjSQqtu9yWD8x%2FMJnOQIgQP3DZHqZeO%2Bht8NW%2Fqqv7kGJO5jD1Utmm7gxqHcgODsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKjIda64CoUkvbaE2yrcA4zRf90WSAwOn4RPmMWL91sxTUbI10ZA2NKh6U%2F1yaC8F4D8xAQ9tJFizuc%2FSQzS08F39XrJgxviyVTXjJ%2BdLd5ySmV3PlguUzneiDTMCdsnQMr2C2RUQj4Ps0zGV4af6ZG1Wx5G2xvIT25ZlwCqV5ww4BCM8kH5HsHfTzicj07k2qY24jVzlfIsU8v9S551K%2BfzH6vhhbleUTKDw4Apf1vA7U37FoL7C4RplHBNuiQo%2Fg1fpVGB8mAWB%2BSzIu9fKiQkfR%2Fx2FSmGK7piZbbLbRA1WP7PZZxHgyEdoytFTBHDspbkH3XC%2BaTcfzoO232PE%2BrkauUX2Iz5quQLZz%2BhrInEcFsXXo3aP%2BxfdZD%2Fgs793MIm5ot0JwDH7HI6%2FHzxj5MI7%2FrGXCYSjPsV%2Fdvi5%2FTUSJ%2B5mpR3FZb%2Fe4inyrpcSakF8olqVEw05NCdILJIo5Cm3pAD%2Fs97TVueWwJeSvR%2BRTUr59BtyTN%2FypYT2ppQ7V3HFX65rymOqu5BqpUWi03xYwNFG9NVQZjPj7w7wRP5RG1WxKtvIl%2FQMQxBiPu7AcMM6AmUhXhWOwrMRARWVZ4%2Bw1SFBHi73CAflfL7U%2FEjS%2B%2FIUmQPpFBqiVruJEuX6gJw2RALO5zKz7AMP%2FIqL4GOqUBk8Wc5lM2%2FVkPyB3qypAjgq6fEBa%2BJceYjLE1bx9w6NCSB89ZEcO8VkCK84liCoLkdyW6I%2BWpKmr0yIDAKnA25%2FoNc%2Bkh8jsj7%2FdQ3FwXxcO3N2X5hjsc6JRg4qtb4snt%2Fd8amiNa31E%2BgdWkKkJvVTbGfYU3r%2B9g1bn7CsgwqH45ojQA%2BwGz4Ok9EkVHao%2FlgKeoE5RRU9j8DqVUEwBNTsVkpt8V&X-Amz-Signature=f5475cccf689b24fb428264cacea256c4b92342844962bb37959f8697f2857e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLYYOM6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hc5H9Gc57xBn4a6AsXDTffPsjSQqtu9yWD8x%2FMJnOQIgQP3DZHqZeO%2Bht8NW%2Fqqv7kGJO5jD1Utmm7gxqHcgODsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKjIda64CoUkvbaE2yrcA4zRf90WSAwOn4RPmMWL91sxTUbI10ZA2NKh6U%2F1yaC8F4D8xAQ9tJFizuc%2FSQzS08F39XrJgxviyVTXjJ%2BdLd5ySmV3PlguUzneiDTMCdsnQMr2C2RUQj4Ps0zGV4af6ZG1Wx5G2xvIT25ZlwCqV5ww4BCM8kH5HsHfTzicj07k2qY24jVzlfIsU8v9S551K%2BfzH6vhhbleUTKDw4Apf1vA7U37FoL7C4RplHBNuiQo%2Fg1fpVGB8mAWB%2BSzIu9fKiQkfR%2Fx2FSmGK7piZbbLbRA1WP7PZZxHgyEdoytFTBHDspbkH3XC%2BaTcfzoO232PE%2BrkauUX2Iz5quQLZz%2BhrInEcFsXXo3aP%2BxfdZD%2Fgs793MIm5ot0JwDH7HI6%2FHzxj5MI7%2FrGXCYSjPsV%2Fdvi5%2FTUSJ%2B5mpR3FZb%2Fe4inyrpcSakF8olqVEw05NCdILJIo5Cm3pAD%2Fs97TVueWwJeSvR%2BRTUr59BtyTN%2FypYT2ppQ7V3HFX65rymOqu5BqpUWi03xYwNFG9NVQZjPj7w7wRP5RG1WxKtvIl%2FQMQxBiPu7AcMM6AmUhXhWOwrMRARWVZ4%2Bw1SFBHi73CAflfL7U%2FEjS%2B%2FIUmQPpFBqiVruJEuX6gJw2RALO5zKz7AMP%2FIqL4GOqUBk8Wc5lM2%2FVkPyB3qypAjgq6fEBa%2BJceYjLE1bx9w6NCSB89ZEcO8VkCK84liCoLkdyW6I%2BWpKmr0yIDAKnA25%2FoNc%2Bkh8jsj7%2FdQ3FwXxcO3N2X5hjsc6JRg4qtb4snt%2Fd8amiNa31E%2BgdWkKkJvVTbGfYU3r%2B9g1bn7CsgwqH45ojQA%2BwGz4Ok9EkVHao%2FlgKeoE5RRU9j8DqVUEwBNTsVkpt8V&X-Amz-Signature=ba2e594810108c398406279c673f4d1f253ed85e73c880b19ade826725784c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLYYOM6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T031958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0hc5H9Gc57xBn4a6AsXDTffPsjSQqtu9yWD8x%2FMJnOQIgQP3DZHqZeO%2Bht8NW%2Fqqv7kGJO5jD1Utmm7gxqHcgODsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKjIda64CoUkvbaE2yrcA4zRf90WSAwOn4RPmMWL91sxTUbI10ZA2NKh6U%2F1yaC8F4D8xAQ9tJFizuc%2FSQzS08F39XrJgxviyVTXjJ%2BdLd5ySmV3PlguUzneiDTMCdsnQMr2C2RUQj4Ps0zGV4af6ZG1Wx5G2xvIT25ZlwCqV5ww4BCM8kH5HsHfTzicj07k2qY24jVzlfIsU8v9S551K%2BfzH6vhhbleUTKDw4Apf1vA7U37FoL7C4RplHBNuiQo%2Fg1fpVGB8mAWB%2BSzIu9fKiQkfR%2Fx2FSmGK7piZbbLbRA1WP7PZZxHgyEdoytFTBHDspbkH3XC%2BaTcfzoO232PE%2BrkauUX2Iz5quQLZz%2BhrInEcFsXXo3aP%2BxfdZD%2Fgs793MIm5ot0JwDH7HI6%2FHzxj5MI7%2FrGXCYSjPsV%2Fdvi5%2FTUSJ%2B5mpR3FZb%2Fe4inyrpcSakF8olqVEw05NCdILJIo5Cm3pAD%2Fs97TVueWwJeSvR%2BRTUr59BtyTN%2FypYT2ppQ7V3HFX65rymOqu5BqpUWi03xYwNFG9NVQZjPj7w7wRP5RG1WxKtvIl%2FQMQxBiPu7AcMM6AmUhXhWOwrMRARWVZ4%2Bw1SFBHi73CAflfL7U%2FEjS%2B%2FIUmQPpFBqiVruJEuX6gJw2RALO5zKz7AMP%2FIqL4GOqUBk8Wc5lM2%2FVkPyB3qypAjgq6fEBa%2BJceYjLE1bx9w6NCSB89ZEcO8VkCK84liCoLkdyW6I%2BWpKmr0yIDAKnA25%2FoNc%2Bkh8jsj7%2FdQ3FwXxcO3N2X5hjsc6JRg4qtb4snt%2Fd8amiNa31E%2BgdWkKkJvVTbGfYU3r%2B9g1bn7CsgwqH45ojQA%2BwGz4Ok9EkVHao%2FlgKeoE5RRU9j8DqVUEwBNTsVkpt8V&X-Amz-Signature=7ff995c112a9eafbc28881dc4c32d946efcaa28c0b9e05aa984004437876a535&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
