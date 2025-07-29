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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLFSDCD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCmcoSllfCP%2FHWAZK6m%2FJbszLM4p%2FSKwuLcjQlFkT3WzgIgXJFZtfJLK9eH5c07MKo4rCLQpYJuiY9v4hsaf7j7FkgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVjwj5I%2FZ%2Fzxt9uqCrcAzxu1c2XIeEyI5dy77FdQDdJS9pgMMoronce5Ygb1NvdE8A6ICRHix6F3A999IzUhd79Zy%2BbuJPCtQ08HPuHReMOmR2Mf%2BFlhBvJpP8ejZWH5t9DCa48pMTz1YvPEDipFHRbOQvcJQlZuXYdn6QGOd7tElTO6oRD75eJgHt5rWLWG6xLfLB7JdFRhiTbsqIaaQHVTrmBJc3vXf4gsYJ5SQGuTvWpPUUITWL6K50EzKd0Fy6lsAg%2Flz5SCQ%2Ffqb%2BW7Hfw9fLliyFiUuqkGdnYSj4YEQuuc214YmySepoik%2FH8awOroGjXN8ifp%2FsIwsWvsADNZHdxIvJqeWwAomUVmWOy4LTGsGy%2BeoNWXbuySdTG1UBo1EBRvmevK5kGAg0ZpWsr7uX4AOh4Fb0HP02%2B4SYrAe3zesQMl%2Fs8QQUoRU5lFtAV8O47ywxeaTM2RGJdwlXl0mpDTiZ7%2FfCYsGzZ65JoW2BYGlsvZ%2Fpej8iSWDrRoDVRIpgToyQpf%2FjxSONxfHZSxZl0KhQI28kRyRxDsWG19HIwYADvw6c7REoNxgeQ1hMMFroa6F8IrNqnUOgvjSRnpMTdJEPcEhkLEV%2FL0b8WUO%2BvLlO0dskrKs8Z3OmElVDpXjL9CiyBd2isMKLMoMQGOqUBs8%2BVqrcEGn1kZl3BXMZ%2FeGjwgPTjqOe9O6qCOJpjPMpZ2IJl2b4Ng9Sig43h%2FTyFKJwPN7eu7K3Y3ZgMGzyeASVI4bjA4tZg%2FqYyWl2lPm3YGJZSj68AjGWbKy%2Fi4VM8FYDy0Owhh7qM0G7lcsLld2oyhz2uuMuiGysMC3v0YzUya9glrvdMjnj5dYFSIM8iApcLAh6AuimvR4%2FBUWbj4gktvBaq&X-Amz-Signature=54f72770bd60691fae2bec1c62e7b7d5d4329897ef258daaf6d94fceba8c0de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLFSDCD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCmcoSllfCP%2FHWAZK6m%2FJbszLM4p%2FSKwuLcjQlFkT3WzgIgXJFZtfJLK9eH5c07MKo4rCLQpYJuiY9v4hsaf7j7FkgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVjwj5I%2FZ%2Fzxt9uqCrcAzxu1c2XIeEyI5dy77FdQDdJS9pgMMoronce5Ygb1NvdE8A6ICRHix6F3A999IzUhd79Zy%2BbuJPCtQ08HPuHReMOmR2Mf%2BFlhBvJpP8ejZWH5t9DCa48pMTz1YvPEDipFHRbOQvcJQlZuXYdn6QGOd7tElTO6oRD75eJgHt5rWLWG6xLfLB7JdFRhiTbsqIaaQHVTrmBJc3vXf4gsYJ5SQGuTvWpPUUITWL6K50EzKd0Fy6lsAg%2Flz5SCQ%2Ffqb%2BW7Hfw9fLliyFiUuqkGdnYSj4YEQuuc214YmySepoik%2FH8awOroGjXN8ifp%2FsIwsWvsADNZHdxIvJqeWwAomUVmWOy4LTGsGy%2BeoNWXbuySdTG1UBo1EBRvmevK5kGAg0ZpWsr7uX4AOh4Fb0HP02%2B4SYrAe3zesQMl%2Fs8QQUoRU5lFtAV8O47ywxeaTM2RGJdwlXl0mpDTiZ7%2FfCYsGzZ65JoW2BYGlsvZ%2Fpej8iSWDrRoDVRIpgToyQpf%2FjxSONxfHZSxZl0KhQI28kRyRxDsWG19HIwYADvw6c7REoNxgeQ1hMMFroa6F8IrNqnUOgvjSRnpMTdJEPcEhkLEV%2FL0b8WUO%2BvLlO0dskrKs8Z3OmElVDpXjL9CiyBd2isMKLMoMQGOqUBs8%2BVqrcEGn1kZl3BXMZ%2FeGjwgPTjqOe9O6qCOJpjPMpZ2IJl2b4Ng9Sig43h%2FTyFKJwPN7eu7K3Y3ZgMGzyeASVI4bjA4tZg%2FqYyWl2lPm3YGJZSj68AjGWbKy%2Fi4VM8FYDy0Owhh7qM0G7lcsLld2oyhz2uuMuiGysMC3v0YzUya9glrvdMjnj5dYFSIM8iApcLAh6AuimvR4%2FBUWbj4gktvBaq&X-Amz-Signature=32199fe4a865c1af95027bf834c3946299c2f867a7dde9d80771a433c34cc782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLFSDCD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCmcoSllfCP%2FHWAZK6m%2FJbszLM4p%2FSKwuLcjQlFkT3WzgIgXJFZtfJLK9eH5c07MKo4rCLQpYJuiY9v4hsaf7j7FkgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVjwj5I%2FZ%2Fzxt9uqCrcAzxu1c2XIeEyI5dy77FdQDdJS9pgMMoronce5Ygb1NvdE8A6ICRHix6F3A999IzUhd79Zy%2BbuJPCtQ08HPuHReMOmR2Mf%2BFlhBvJpP8ejZWH5t9DCa48pMTz1YvPEDipFHRbOQvcJQlZuXYdn6QGOd7tElTO6oRD75eJgHt5rWLWG6xLfLB7JdFRhiTbsqIaaQHVTrmBJc3vXf4gsYJ5SQGuTvWpPUUITWL6K50EzKd0Fy6lsAg%2Flz5SCQ%2Ffqb%2BW7Hfw9fLliyFiUuqkGdnYSj4YEQuuc214YmySepoik%2FH8awOroGjXN8ifp%2FsIwsWvsADNZHdxIvJqeWwAomUVmWOy4LTGsGy%2BeoNWXbuySdTG1UBo1EBRvmevK5kGAg0ZpWsr7uX4AOh4Fb0HP02%2B4SYrAe3zesQMl%2Fs8QQUoRU5lFtAV8O47ywxeaTM2RGJdwlXl0mpDTiZ7%2FfCYsGzZ65JoW2BYGlsvZ%2Fpej8iSWDrRoDVRIpgToyQpf%2FjxSONxfHZSxZl0KhQI28kRyRxDsWG19HIwYADvw6c7REoNxgeQ1hMMFroa6F8IrNqnUOgvjSRnpMTdJEPcEhkLEV%2FL0b8WUO%2BvLlO0dskrKs8Z3OmElVDpXjL9CiyBd2isMKLMoMQGOqUBs8%2BVqrcEGn1kZl3BXMZ%2FeGjwgPTjqOe9O6qCOJpjPMpZ2IJl2b4Ng9Sig43h%2FTyFKJwPN7eu7K3Y3ZgMGzyeASVI4bjA4tZg%2FqYyWl2lPm3YGJZSj68AjGWbKy%2Fi4VM8FYDy0Owhh7qM0G7lcsLld2oyhz2uuMuiGysMC3v0YzUya9glrvdMjnj5dYFSIM8iApcLAh6AuimvR4%2FBUWbj4gktvBaq&X-Amz-Signature=fa883a6a31d5ae862bb53249ec5e46defcdd301b6ddabe7f43ab6ab44eae1f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLFSDCD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCmcoSllfCP%2FHWAZK6m%2FJbszLM4p%2FSKwuLcjQlFkT3WzgIgXJFZtfJLK9eH5c07MKo4rCLQpYJuiY9v4hsaf7j7FkgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVjwj5I%2FZ%2Fzxt9uqCrcAzxu1c2XIeEyI5dy77FdQDdJS9pgMMoronce5Ygb1NvdE8A6ICRHix6F3A999IzUhd79Zy%2BbuJPCtQ08HPuHReMOmR2Mf%2BFlhBvJpP8ejZWH5t9DCa48pMTz1YvPEDipFHRbOQvcJQlZuXYdn6QGOd7tElTO6oRD75eJgHt5rWLWG6xLfLB7JdFRhiTbsqIaaQHVTrmBJc3vXf4gsYJ5SQGuTvWpPUUITWL6K50EzKd0Fy6lsAg%2Flz5SCQ%2Ffqb%2BW7Hfw9fLliyFiUuqkGdnYSj4YEQuuc214YmySepoik%2FH8awOroGjXN8ifp%2FsIwsWvsADNZHdxIvJqeWwAomUVmWOy4LTGsGy%2BeoNWXbuySdTG1UBo1EBRvmevK5kGAg0ZpWsr7uX4AOh4Fb0HP02%2B4SYrAe3zesQMl%2Fs8QQUoRU5lFtAV8O47ywxeaTM2RGJdwlXl0mpDTiZ7%2FfCYsGzZ65JoW2BYGlsvZ%2Fpej8iSWDrRoDVRIpgToyQpf%2FjxSONxfHZSxZl0KhQI28kRyRxDsWG19HIwYADvw6c7REoNxgeQ1hMMFroa6F8IrNqnUOgvjSRnpMTdJEPcEhkLEV%2FL0b8WUO%2BvLlO0dskrKs8Z3OmElVDpXjL9CiyBd2isMKLMoMQGOqUBs8%2BVqrcEGn1kZl3BXMZ%2FeGjwgPTjqOe9O6qCOJpjPMpZ2IJl2b4Ng9Sig43h%2FTyFKJwPN7eu7K3Y3ZgMGzyeASVI4bjA4tZg%2FqYyWl2lPm3YGJZSj68AjGWbKy%2Fi4VM8FYDy0Owhh7qM0G7lcsLld2oyhz2uuMuiGysMC3v0YzUya9glrvdMjnj5dYFSIM8iApcLAh6AuimvR4%2FBUWbj4gktvBaq&X-Amz-Signature=e5d3da8aca35bb9ea1dbfb8ea54cb146a011ed8970995cde6a3bd65631e1ac85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLFSDCD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCmcoSllfCP%2FHWAZK6m%2FJbszLM4p%2FSKwuLcjQlFkT3WzgIgXJFZtfJLK9eH5c07MKo4rCLQpYJuiY9v4hsaf7j7FkgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVjwj5I%2FZ%2Fzxt9uqCrcAzxu1c2XIeEyI5dy77FdQDdJS9pgMMoronce5Ygb1NvdE8A6ICRHix6F3A999IzUhd79Zy%2BbuJPCtQ08HPuHReMOmR2Mf%2BFlhBvJpP8ejZWH5t9DCa48pMTz1YvPEDipFHRbOQvcJQlZuXYdn6QGOd7tElTO6oRD75eJgHt5rWLWG6xLfLB7JdFRhiTbsqIaaQHVTrmBJc3vXf4gsYJ5SQGuTvWpPUUITWL6K50EzKd0Fy6lsAg%2Flz5SCQ%2Ffqb%2BW7Hfw9fLliyFiUuqkGdnYSj4YEQuuc214YmySepoik%2FH8awOroGjXN8ifp%2FsIwsWvsADNZHdxIvJqeWwAomUVmWOy4LTGsGy%2BeoNWXbuySdTG1UBo1EBRvmevK5kGAg0ZpWsr7uX4AOh4Fb0HP02%2B4SYrAe3zesQMl%2Fs8QQUoRU5lFtAV8O47ywxeaTM2RGJdwlXl0mpDTiZ7%2FfCYsGzZ65JoW2BYGlsvZ%2Fpej8iSWDrRoDVRIpgToyQpf%2FjxSONxfHZSxZl0KhQI28kRyRxDsWG19HIwYADvw6c7REoNxgeQ1hMMFroa6F8IrNqnUOgvjSRnpMTdJEPcEhkLEV%2FL0b8WUO%2BvLlO0dskrKs8Z3OmElVDpXjL9CiyBd2isMKLMoMQGOqUBs8%2BVqrcEGn1kZl3BXMZ%2FeGjwgPTjqOe9O6qCOJpjPMpZ2IJl2b4Ng9Sig43h%2FTyFKJwPN7eu7K3Y3ZgMGzyeASVI4bjA4tZg%2FqYyWl2lPm3YGJZSj68AjGWbKy%2Fi4VM8FYDy0Owhh7qM0G7lcsLld2oyhz2uuMuiGysMC3v0YzUya9glrvdMjnj5dYFSIM8iApcLAh6AuimvR4%2FBUWbj4gktvBaq&X-Amz-Signature=b78363b37d13da6fe7312bd6922ad2963c63dc31fc3e222bf1a4169bd5c75bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLFSDCD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCmcoSllfCP%2FHWAZK6m%2FJbszLM4p%2FSKwuLcjQlFkT3WzgIgXJFZtfJLK9eH5c07MKo4rCLQpYJuiY9v4hsaf7j7FkgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVjwj5I%2FZ%2Fzxt9uqCrcAzxu1c2XIeEyI5dy77FdQDdJS9pgMMoronce5Ygb1NvdE8A6ICRHix6F3A999IzUhd79Zy%2BbuJPCtQ08HPuHReMOmR2Mf%2BFlhBvJpP8ejZWH5t9DCa48pMTz1YvPEDipFHRbOQvcJQlZuXYdn6QGOd7tElTO6oRD75eJgHt5rWLWG6xLfLB7JdFRhiTbsqIaaQHVTrmBJc3vXf4gsYJ5SQGuTvWpPUUITWL6K50EzKd0Fy6lsAg%2Flz5SCQ%2Ffqb%2BW7Hfw9fLliyFiUuqkGdnYSj4YEQuuc214YmySepoik%2FH8awOroGjXN8ifp%2FsIwsWvsADNZHdxIvJqeWwAomUVmWOy4LTGsGy%2BeoNWXbuySdTG1UBo1EBRvmevK5kGAg0ZpWsr7uX4AOh4Fb0HP02%2B4SYrAe3zesQMl%2Fs8QQUoRU5lFtAV8O47ywxeaTM2RGJdwlXl0mpDTiZ7%2FfCYsGzZ65JoW2BYGlsvZ%2Fpej8iSWDrRoDVRIpgToyQpf%2FjxSONxfHZSxZl0KhQI28kRyRxDsWG19HIwYADvw6c7REoNxgeQ1hMMFroa6F8IrNqnUOgvjSRnpMTdJEPcEhkLEV%2FL0b8WUO%2BvLlO0dskrKs8Z3OmElVDpXjL9CiyBd2isMKLMoMQGOqUBs8%2BVqrcEGn1kZl3BXMZ%2FeGjwgPTjqOe9O6qCOJpjPMpZ2IJl2b4Ng9Sig43h%2FTyFKJwPN7eu7K3Y3ZgMGzyeASVI4bjA4tZg%2FqYyWl2lPm3YGJZSj68AjGWbKy%2Fi4VM8FYDy0Owhh7qM0G7lcsLld2oyhz2uuMuiGysMC3v0YzUya9glrvdMjnj5dYFSIM8iApcLAh6AuimvR4%2FBUWbj4gktvBaq&X-Amz-Signature=843c3978b1deae6602ea97e6f68b8e66c71dd5d1ff53d7f76091fdee870fa693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLFSDCD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCmcoSllfCP%2FHWAZK6m%2FJbszLM4p%2FSKwuLcjQlFkT3WzgIgXJFZtfJLK9eH5c07MKo4rCLQpYJuiY9v4hsaf7j7FkgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVjwj5I%2FZ%2Fzxt9uqCrcAzxu1c2XIeEyI5dy77FdQDdJS9pgMMoronce5Ygb1NvdE8A6ICRHix6F3A999IzUhd79Zy%2BbuJPCtQ08HPuHReMOmR2Mf%2BFlhBvJpP8ejZWH5t9DCa48pMTz1YvPEDipFHRbOQvcJQlZuXYdn6QGOd7tElTO6oRD75eJgHt5rWLWG6xLfLB7JdFRhiTbsqIaaQHVTrmBJc3vXf4gsYJ5SQGuTvWpPUUITWL6K50EzKd0Fy6lsAg%2Flz5SCQ%2Ffqb%2BW7Hfw9fLliyFiUuqkGdnYSj4YEQuuc214YmySepoik%2FH8awOroGjXN8ifp%2FsIwsWvsADNZHdxIvJqeWwAomUVmWOy4LTGsGy%2BeoNWXbuySdTG1UBo1EBRvmevK5kGAg0ZpWsr7uX4AOh4Fb0HP02%2B4SYrAe3zesQMl%2Fs8QQUoRU5lFtAV8O47ywxeaTM2RGJdwlXl0mpDTiZ7%2FfCYsGzZ65JoW2BYGlsvZ%2Fpej8iSWDrRoDVRIpgToyQpf%2FjxSONxfHZSxZl0KhQI28kRyRxDsWG19HIwYADvw6c7REoNxgeQ1hMMFroa6F8IrNqnUOgvjSRnpMTdJEPcEhkLEV%2FL0b8WUO%2BvLlO0dskrKs8Z3OmElVDpXjL9CiyBd2isMKLMoMQGOqUBs8%2BVqrcEGn1kZl3BXMZ%2FeGjwgPTjqOe9O6qCOJpjPMpZ2IJl2b4Ng9Sig43h%2FTyFKJwPN7eu7K3Y3ZgMGzyeASVI4bjA4tZg%2FqYyWl2lPm3YGJZSj68AjGWbKy%2Fi4VM8FYDy0Owhh7qM0G7lcsLld2oyhz2uuMuiGysMC3v0YzUya9glrvdMjnj5dYFSIM8iApcLAh6AuimvR4%2FBUWbj4gktvBaq&X-Amz-Signature=a413fa9a7c3d9f9175385949814e7bf9856b442cd29cbed24663717572fab5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLFSDCD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCmcoSllfCP%2FHWAZK6m%2FJbszLM4p%2FSKwuLcjQlFkT3WzgIgXJFZtfJLK9eH5c07MKo4rCLQpYJuiY9v4hsaf7j7FkgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVjwj5I%2FZ%2Fzxt9uqCrcAzxu1c2XIeEyI5dy77FdQDdJS9pgMMoronce5Ygb1NvdE8A6ICRHix6F3A999IzUhd79Zy%2BbuJPCtQ08HPuHReMOmR2Mf%2BFlhBvJpP8ejZWH5t9DCa48pMTz1YvPEDipFHRbOQvcJQlZuXYdn6QGOd7tElTO6oRD75eJgHt5rWLWG6xLfLB7JdFRhiTbsqIaaQHVTrmBJc3vXf4gsYJ5SQGuTvWpPUUITWL6K50EzKd0Fy6lsAg%2Flz5SCQ%2Ffqb%2BW7Hfw9fLliyFiUuqkGdnYSj4YEQuuc214YmySepoik%2FH8awOroGjXN8ifp%2FsIwsWvsADNZHdxIvJqeWwAomUVmWOy4LTGsGy%2BeoNWXbuySdTG1UBo1EBRvmevK5kGAg0ZpWsr7uX4AOh4Fb0HP02%2B4SYrAe3zesQMl%2Fs8QQUoRU5lFtAV8O47ywxeaTM2RGJdwlXl0mpDTiZ7%2FfCYsGzZ65JoW2BYGlsvZ%2Fpej8iSWDrRoDVRIpgToyQpf%2FjxSONxfHZSxZl0KhQI28kRyRxDsWG19HIwYADvw6c7REoNxgeQ1hMMFroa6F8IrNqnUOgvjSRnpMTdJEPcEhkLEV%2FL0b8WUO%2BvLlO0dskrKs8Z3OmElVDpXjL9CiyBd2isMKLMoMQGOqUBs8%2BVqrcEGn1kZl3BXMZ%2FeGjwgPTjqOe9O6qCOJpjPMpZ2IJl2b4Ng9Sig43h%2FTyFKJwPN7eu7K3Y3ZgMGzyeASVI4bjA4tZg%2FqYyWl2lPm3YGJZSj68AjGWbKy%2Fi4VM8FYDy0Owhh7qM0G7lcsLld2oyhz2uuMuiGysMC3v0YzUya9glrvdMjnj5dYFSIM8iApcLAh6AuimvR4%2FBUWbj4gktvBaq&X-Amz-Signature=9a8476b9a91a4eae04233ae08461cc341e8c9bcd7e714816140bde11ed9e3b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
