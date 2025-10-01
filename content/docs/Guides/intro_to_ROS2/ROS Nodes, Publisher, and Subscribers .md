---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JJUFZM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfAKXxVf7drLUD2tJ2dPgOZciT1AJuXfrC06mmrjmXowIgVNfQcKx6AqAsIY63UrxN9v1dkeW8SoTnsM4rXG77NVYqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGNYsVyzSf0pGNBPyrcA2FqLfckNOvK5JuzkTlKCxIiFJ8qxQu0daMinJ%2BNk%2F2zsi3F98p8btNoqaIvm%2FuvlV1Cc6uRYnWel46%2F%2FNG8wzrU3EzlWB2dm98VkNNg%2BXlAXxHJnYlsUBt4ROAuEeWBdnr1WZTZ9rboSo%2BA86Supo0iYnmyao6cLva9ZqoWCX%2BQKd0fhwdnjMdX%2FSmO5NPGOEZ1%2FEBWMIGlxrXVPpPWzgWvZyB%2BhczKe8lMx4dd0ynqBSebaGEpQr3uQ5fpkC5rfT%2BB4D6MSzd%2FIM8zUjh2AgTOEMPS%2FS2zfKq2ba%2BP7kAJah1IEHauQS2WPxXxN9Naifts69CeP0SD%2BCDNiXOxdz3bW93H9thOzomDPhdAPuQHEwv6iUgWtcaDe3jgKfSSvOa%2FWjL5fYFWT1g5l1raCn7104MwPLn8zkmfh2FR9bwNVjeE91%2FvJFSeagWUFr6OCCmWhAxxizZQ8QNvvKxqhLrGntB4QCtINU8vTWjjV8o4Zh49Ssp9Nqr0ETeYFjCqdCudtd0f0vpLZpJIuPHwldD%2FezL1h6cQdgxAq%2BkNbT8d7gOUZMumfLwLu6yrLmLyMAHDarwNKP%2Bite0klkmW5makp%2BqUvqGWacXigv2m3qjXvJlP3gHk%2BNlRUyxzMJWJ8sYGOqUBsF4PdWLNujDxbGszRVDRMgOzp8EC6T%2BP8Wp5TREOktaJl8p6dy52eHpFWkYwQg0StjNG%2FQKvA%2Bbc3zaEpuW1PQn2I5nybTk21tsLMXo%2FmP7beiYlAQLTd4OrYtZIcBRrn61g4Vk6xDsD2vRlqXDa%2BWenO9DQphlW9XvvJJIuU0QSOnTE%2Be69y2%2BSLP1XLjtf2dXsmO39E%2FkjGxXaB4wo3nhSKD8L&X-Amz-Signature=73161df446c894e8deaa90775213888dde68eafb1145e8b7ce92bcc094347037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JJUFZM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfAKXxVf7drLUD2tJ2dPgOZciT1AJuXfrC06mmrjmXowIgVNfQcKx6AqAsIY63UrxN9v1dkeW8SoTnsM4rXG77NVYqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGNYsVyzSf0pGNBPyrcA2FqLfckNOvK5JuzkTlKCxIiFJ8qxQu0daMinJ%2BNk%2F2zsi3F98p8btNoqaIvm%2FuvlV1Cc6uRYnWel46%2F%2FNG8wzrU3EzlWB2dm98VkNNg%2BXlAXxHJnYlsUBt4ROAuEeWBdnr1WZTZ9rboSo%2BA86Supo0iYnmyao6cLva9ZqoWCX%2BQKd0fhwdnjMdX%2FSmO5NPGOEZ1%2FEBWMIGlxrXVPpPWzgWvZyB%2BhczKe8lMx4dd0ynqBSebaGEpQr3uQ5fpkC5rfT%2BB4D6MSzd%2FIM8zUjh2AgTOEMPS%2FS2zfKq2ba%2BP7kAJah1IEHauQS2WPxXxN9Naifts69CeP0SD%2BCDNiXOxdz3bW93H9thOzomDPhdAPuQHEwv6iUgWtcaDe3jgKfSSvOa%2FWjL5fYFWT1g5l1raCn7104MwPLn8zkmfh2FR9bwNVjeE91%2FvJFSeagWUFr6OCCmWhAxxizZQ8QNvvKxqhLrGntB4QCtINU8vTWjjV8o4Zh49Ssp9Nqr0ETeYFjCqdCudtd0f0vpLZpJIuPHwldD%2FezL1h6cQdgxAq%2BkNbT8d7gOUZMumfLwLu6yrLmLyMAHDarwNKP%2Bite0klkmW5makp%2BqUvqGWacXigv2m3qjXvJlP3gHk%2BNlRUyxzMJWJ8sYGOqUBsF4PdWLNujDxbGszRVDRMgOzp8EC6T%2BP8Wp5TREOktaJl8p6dy52eHpFWkYwQg0StjNG%2FQKvA%2Bbc3zaEpuW1PQn2I5nybTk21tsLMXo%2FmP7beiYlAQLTd4OrYtZIcBRrn61g4Vk6xDsD2vRlqXDa%2BWenO9DQphlW9XvvJJIuU0QSOnTE%2Be69y2%2BSLP1XLjtf2dXsmO39E%2FkjGxXaB4wo3nhSKD8L&X-Amz-Signature=980bb11671168e24e5161c0c0a86dff3d3ab27778b4671730adc85b778d53f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JJUFZM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfAKXxVf7drLUD2tJ2dPgOZciT1AJuXfrC06mmrjmXowIgVNfQcKx6AqAsIY63UrxN9v1dkeW8SoTnsM4rXG77NVYqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGNYsVyzSf0pGNBPyrcA2FqLfckNOvK5JuzkTlKCxIiFJ8qxQu0daMinJ%2BNk%2F2zsi3F98p8btNoqaIvm%2FuvlV1Cc6uRYnWel46%2F%2FNG8wzrU3EzlWB2dm98VkNNg%2BXlAXxHJnYlsUBt4ROAuEeWBdnr1WZTZ9rboSo%2BA86Supo0iYnmyao6cLva9ZqoWCX%2BQKd0fhwdnjMdX%2FSmO5NPGOEZ1%2FEBWMIGlxrXVPpPWzgWvZyB%2BhczKe8lMx4dd0ynqBSebaGEpQr3uQ5fpkC5rfT%2BB4D6MSzd%2FIM8zUjh2AgTOEMPS%2FS2zfKq2ba%2BP7kAJah1IEHauQS2WPxXxN9Naifts69CeP0SD%2BCDNiXOxdz3bW93H9thOzomDPhdAPuQHEwv6iUgWtcaDe3jgKfSSvOa%2FWjL5fYFWT1g5l1raCn7104MwPLn8zkmfh2FR9bwNVjeE91%2FvJFSeagWUFr6OCCmWhAxxizZQ8QNvvKxqhLrGntB4QCtINU8vTWjjV8o4Zh49Ssp9Nqr0ETeYFjCqdCudtd0f0vpLZpJIuPHwldD%2FezL1h6cQdgxAq%2BkNbT8d7gOUZMumfLwLu6yrLmLyMAHDarwNKP%2Bite0klkmW5makp%2BqUvqGWacXigv2m3qjXvJlP3gHk%2BNlRUyxzMJWJ8sYGOqUBsF4PdWLNujDxbGszRVDRMgOzp8EC6T%2BP8Wp5TREOktaJl8p6dy52eHpFWkYwQg0StjNG%2FQKvA%2Bbc3zaEpuW1PQn2I5nybTk21tsLMXo%2FmP7beiYlAQLTd4OrYtZIcBRrn61g4Vk6xDsD2vRlqXDa%2BWenO9DQphlW9XvvJJIuU0QSOnTE%2Be69y2%2BSLP1XLjtf2dXsmO39E%2FkjGxXaB4wo3nhSKD8L&X-Amz-Signature=5395803956d1da9c2d06cef626db179df8d0d0422a92606f52a53f6b322038e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JJUFZM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfAKXxVf7drLUD2tJ2dPgOZciT1AJuXfrC06mmrjmXowIgVNfQcKx6AqAsIY63UrxN9v1dkeW8SoTnsM4rXG77NVYqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGNYsVyzSf0pGNBPyrcA2FqLfckNOvK5JuzkTlKCxIiFJ8qxQu0daMinJ%2BNk%2F2zsi3F98p8btNoqaIvm%2FuvlV1Cc6uRYnWel46%2F%2FNG8wzrU3EzlWB2dm98VkNNg%2BXlAXxHJnYlsUBt4ROAuEeWBdnr1WZTZ9rboSo%2BA86Supo0iYnmyao6cLva9ZqoWCX%2BQKd0fhwdnjMdX%2FSmO5NPGOEZ1%2FEBWMIGlxrXVPpPWzgWvZyB%2BhczKe8lMx4dd0ynqBSebaGEpQr3uQ5fpkC5rfT%2BB4D6MSzd%2FIM8zUjh2AgTOEMPS%2FS2zfKq2ba%2BP7kAJah1IEHauQS2WPxXxN9Naifts69CeP0SD%2BCDNiXOxdz3bW93H9thOzomDPhdAPuQHEwv6iUgWtcaDe3jgKfSSvOa%2FWjL5fYFWT1g5l1raCn7104MwPLn8zkmfh2FR9bwNVjeE91%2FvJFSeagWUFr6OCCmWhAxxizZQ8QNvvKxqhLrGntB4QCtINU8vTWjjV8o4Zh49Ssp9Nqr0ETeYFjCqdCudtd0f0vpLZpJIuPHwldD%2FezL1h6cQdgxAq%2BkNbT8d7gOUZMumfLwLu6yrLmLyMAHDarwNKP%2Bite0klkmW5makp%2BqUvqGWacXigv2m3qjXvJlP3gHk%2BNlRUyxzMJWJ8sYGOqUBsF4PdWLNujDxbGszRVDRMgOzp8EC6T%2BP8Wp5TREOktaJl8p6dy52eHpFWkYwQg0StjNG%2FQKvA%2Bbc3zaEpuW1PQn2I5nybTk21tsLMXo%2FmP7beiYlAQLTd4OrYtZIcBRrn61g4Vk6xDsD2vRlqXDa%2BWenO9DQphlW9XvvJJIuU0QSOnTE%2Be69y2%2BSLP1XLjtf2dXsmO39E%2FkjGxXaB4wo3nhSKD8L&X-Amz-Signature=2a497603d40f08bc670c9058322aeffc41a05f77812d640975be36cc983c5c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JJUFZM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfAKXxVf7drLUD2tJ2dPgOZciT1AJuXfrC06mmrjmXowIgVNfQcKx6AqAsIY63UrxN9v1dkeW8SoTnsM4rXG77NVYqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGNYsVyzSf0pGNBPyrcA2FqLfckNOvK5JuzkTlKCxIiFJ8qxQu0daMinJ%2BNk%2F2zsi3F98p8btNoqaIvm%2FuvlV1Cc6uRYnWel46%2F%2FNG8wzrU3EzlWB2dm98VkNNg%2BXlAXxHJnYlsUBt4ROAuEeWBdnr1WZTZ9rboSo%2BA86Supo0iYnmyao6cLva9ZqoWCX%2BQKd0fhwdnjMdX%2FSmO5NPGOEZ1%2FEBWMIGlxrXVPpPWzgWvZyB%2BhczKe8lMx4dd0ynqBSebaGEpQr3uQ5fpkC5rfT%2BB4D6MSzd%2FIM8zUjh2AgTOEMPS%2FS2zfKq2ba%2BP7kAJah1IEHauQS2WPxXxN9Naifts69CeP0SD%2BCDNiXOxdz3bW93H9thOzomDPhdAPuQHEwv6iUgWtcaDe3jgKfSSvOa%2FWjL5fYFWT1g5l1raCn7104MwPLn8zkmfh2FR9bwNVjeE91%2FvJFSeagWUFr6OCCmWhAxxizZQ8QNvvKxqhLrGntB4QCtINU8vTWjjV8o4Zh49Ssp9Nqr0ETeYFjCqdCudtd0f0vpLZpJIuPHwldD%2FezL1h6cQdgxAq%2BkNbT8d7gOUZMumfLwLu6yrLmLyMAHDarwNKP%2Bite0klkmW5makp%2BqUvqGWacXigv2m3qjXvJlP3gHk%2BNlRUyxzMJWJ8sYGOqUBsF4PdWLNujDxbGszRVDRMgOzp8EC6T%2BP8Wp5TREOktaJl8p6dy52eHpFWkYwQg0StjNG%2FQKvA%2Bbc3zaEpuW1PQn2I5nybTk21tsLMXo%2FmP7beiYlAQLTd4OrYtZIcBRrn61g4Vk6xDsD2vRlqXDa%2BWenO9DQphlW9XvvJJIuU0QSOnTE%2Be69y2%2BSLP1XLjtf2dXsmO39E%2FkjGxXaB4wo3nhSKD8L&X-Amz-Signature=86a4d1f14b0b1877fa5a421fcac9ee33fd73d957a53c0124ac8b28074107801b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JJUFZM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfAKXxVf7drLUD2tJ2dPgOZciT1AJuXfrC06mmrjmXowIgVNfQcKx6AqAsIY63UrxN9v1dkeW8SoTnsM4rXG77NVYqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGNYsVyzSf0pGNBPyrcA2FqLfckNOvK5JuzkTlKCxIiFJ8qxQu0daMinJ%2BNk%2F2zsi3F98p8btNoqaIvm%2FuvlV1Cc6uRYnWel46%2F%2FNG8wzrU3EzlWB2dm98VkNNg%2BXlAXxHJnYlsUBt4ROAuEeWBdnr1WZTZ9rboSo%2BA86Supo0iYnmyao6cLva9ZqoWCX%2BQKd0fhwdnjMdX%2FSmO5NPGOEZ1%2FEBWMIGlxrXVPpPWzgWvZyB%2BhczKe8lMx4dd0ynqBSebaGEpQr3uQ5fpkC5rfT%2BB4D6MSzd%2FIM8zUjh2AgTOEMPS%2FS2zfKq2ba%2BP7kAJah1IEHauQS2WPxXxN9Naifts69CeP0SD%2BCDNiXOxdz3bW93H9thOzomDPhdAPuQHEwv6iUgWtcaDe3jgKfSSvOa%2FWjL5fYFWT1g5l1raCn7104MwPLn8zkmfh2FR9bwNVjeE91%2FvJFSeagWUFr6OCCmWhAxxizZQ8QNvvKxqhLrGntB4QCtINU8vTWjjV8o4Zh49Ssp9Nqr0ETeYFjCqdCudtd0f0vpLZpJIuPHwldD%2FezL1h6cQdgxAq%2BkNbT8d7gOUZMumfLwLu6yrLmLyMAHDarwNKP%2Bite0klkmW5makp%2BqUvqGWacXigv2m3qjXvJlP3gHk%2BNlRUyxzMJWJ8sYGOqUBsF4PdWLNujDxbGszRVDRMgOzp8EC6T%2BP8Wp5TREOktaJl8p6dy52eHpFWkYwQg0StjNG%2FQKvA%2Bbc3zaEpuW1PQn2I5nybTk21tsLMXo%2FmP7beiYlAQLTd4OrYtZIcBRrn61g4Vk6xDsD2vRlqXDa%2BWenO9DQphlW9XvvJJIuU0QSOnTE%2Be69y2%2BSLP1XLjtf2dXsmO39E%2FkjGxXaB4wo3nhSKD8L&X-Amz-Signature=dc85d3a5aa228d4094c73a9c8e58428bd6f8209bb55257b67e61c62204c66e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JJUFZM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfAKXxVf7drLUD2tJ2dPgOZciT1AJuXfrC06mmrjmXowIgVNfQcKx6AqAsIY63UrxN9v1dkeW8SoTnsM4rXG77NVYqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGNYsVyzSf0pGNBPyrcA2FqLfckNOvK5JuzkTlKCxIiFJ8qxQu0daMinJ%2BNk%2F2zsi3F98p8btNoqaIvm%2FuvlV1Cc6uRYnWel46%2F%2FNG8wzrU3EzlWB2dm98VkNNg%2BXlAXxHJnYlsUBt4ROAuEeWBdnr1WZTZ9rboSo%2BA86Supo0iYnmyao6cLva9ZqoWCX%2BQKd0fhwdnjMdX%2FSmO5NPGOEZ1%2FEBWMIGlxrXVPpPWzgWvZyB%2BhczKe8lMx4dd0ynqBSebaGEpQr3uQ5fpkC5rfT%2BB4D6MSzd%2FIM8zUjh2AgTOEMPS%2FS2zfKq2ba%2BP7kAJah1IEHauQS2WPxXxN9Naifts69CeP0SD%2BCDNiXOxdz3bW93H9thOzomDPhdAPuQHEwv6iUgWtcaDe3jgKfSSvOa%2FWjL5fYFWT1g5l1raCn7104MwPLn8zkmfh2FR9bwNVjeE91%2FvJFSeagWUFr6OCCmWhAxxizZQ8QNvvKxqhLrGntB4QCtINU8vTWjjV8o4Zh49Ssp9Nqr0ETeYFjCqdCudtd0f0vpLZpJIuPHwldD%2FezL1h6cQdgxAq%2BkNbT8d7gOUZMumfLwLu6yrLmLyMAHDarwNKP%2Bite0klkmW5makp%2BqUvqGWacXigv2m3qjXvJlP3gHk%2BNlRUyxzMJWJ8sYGOqUBsF4PdWLNujDxbGszRVDRMgOzp8EC6T%2BP8Wp5TREOktaJl8p6dy52eHpFWkYwQg0StjNG%2FQKvA%2Bbc3zaEpuW1PQn2I5nybTk21tsLMXo%2FmP7beiYlAQLTd4OrYtZIcBRrn61g4Vk6xDsD2vRlqXDa%2BWenO9DQphlW9XvvJJIuU0QSOnTE%2Be69y2%2BSLP1XLjtf2dXsmO39E%2FkjGxXaB4wo3nhSKD8L&X-Amz-Signature=55c9b27b5877a7765a6eb42cf4802bb7ab61dbb8faf77dc07247d7b52104e774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JJUFZM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfAKXxVf7drLUD2tJ2dPgOZciT1AJuXfrC06mmrjmXowIgVNfQcKx6AqAsIY63UrxN9v1dkeW8SoTnsM4rXG77NVYqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGNYsVyzSf0pGNBPyrcA2FqLfckNOvK5JuzkTlKCxIiFJ8qxQu0daMinJ%2BNk%2F2zsi3F98p8btNoqaIvm%2FuvlV1Cc6uRYnWel46%2F%2FNG8wzrU3EzlWB2dm98VkNNg%2BXlAXxHJnYlsUBt4ROAuEeWBdnr1WZTZ9rboSo%2BA86Supo0iYnmyao6cLva9ZqoWCX%2BQKd0fhwdnjMdX%2FSmO5NPGOEZ1%2FEBWMIGlxrXVPpPWzgWvZyB%2BhczKe8lMx4dd0ynqBSebaGEpQr3uQ5fpkC5rfT%2BB4D6MSzd%2FIM8zUjh2AgTOEMPS%2FS2zfKq2ba%2BP7kAJah1IEHauQS2WPxXxN9Naifts69CeP0SD%2BCDNiXOxdz3bW93H9thOzomDPhdAPuQHEwv6iUgWtcaDe3jgKfSSvOa%2FWjL5fYFWT1g5l1raCn7104MwPLn8zkmfh2FR9bwNVjeE91%2FvJFSeagWUFr6OCCmWhAxxizZQ8QNvvKxqhLrGntB4QCtINU8vTWjjV8o4Zh49Ssp9Nqr0ETeYFjCqdCudtd0f0vpLZpJIuPHwldD%2FezL1h6cQdgxAq%2BkNbT8d7gOUZMumfLwLu6yrLmLyMAHDarwNKP%2Bite0klkmW5makp%2BqUvqGWacXigv2m3qjXvJlP3gHk%2BNlRUyxzMJWJ8sYGOqUBsF4PdWLNujDxbGszRVDRMgOzp8EC6T%2BP8Wp5TREOktaJl8p6dy52eHpFWkYwQg0StjNG%2FQKvA%2Bbc3zaEpuW1PQn2I5nybTk21tsLMXo%2FmP7beiYlAQLTd4OrYtZIcBRrn61g4Vk6xDsD2vRlqXDa%2BWenO9DQphlW9XvvJJIuU0QSOnTE%2Be69y2%2BSLP1XLjtf2dXsmO39E%2FkjGxXaB4wo3nhSKD8L&X-Amz-Signature=59718bf5b577df0257790ff7e6b9db4673ef17149d47157169202d7fd7be7b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
