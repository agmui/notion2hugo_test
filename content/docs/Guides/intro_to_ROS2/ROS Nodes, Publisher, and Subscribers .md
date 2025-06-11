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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQ2SD2O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLxgd0vAmHUn8ih6PEFvtYTmGOfzqpRgyX9t9Yzu8%2BKgIgGfEgD%2B1mY0TAPFSft3Uk6jVS8qQtwu3kRKLjOqPldJsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGefGXAHt1BdJCYzVCrcA%2FPVGXfX2SS73bVKKEs%2FDm%2FF8hBigr8C5RSCU7Iray2iK6QhG9TmN9u42mCLf8t4sVt%2BxPhqZSihNJRyW31HRbOykc0RG%2BVsIMYHiel1jRCb8%2FkQS1bWS8GgUMjKeJVEFjJHghb%2BgVpQXt6c%2BueYhD%2FgQ1q94qbmoSy%2F0kGwAz5ktrNlZINe6tcaCJ%2BWDUxqcH%2F347mD3Ju%2F0pDG3E7ISO8h3RliHjRTtk3nnrE7Lp1mReXpwlravbFdLfE0R1bgbeB6ItBX%2Bql%2BhYF4R%2FitLMuTmTydYUCJ6rjN%2FZ60N5a47XeOFfYWYijHMywMYoQUg92FUDD2A5k3cozOg54NHZgmwx%2BOjjRw%2FWWC4pi8eNgSVRKiWR13aaNtFsEFBKIQ3ucrqLltTaCXeBkoKhrFnNO0GmS7zPGz7R8USagFqK0Gc3aAiVivPX5yocAoNzraguM6NfT7d%2FWfkeAEahO7XBRQkBxx4xI7lStqTgjoudRmV7BBjDCLXthSSk0f8%2FL5fRocBEFdaaAhD5UKKiJJdCfrrkPF1AK3pDUo3NA%2FKZLGlYLIOGky2qOg83O7TWExBp4QMAFsDPuoc8CwEiPKt%2BsiJ4f%2FKSgei9Og0LJMBovCbBan5slQCQlqigoNMKSBpcIGOqUBYLgs%2Bwfb8ZLKFxkSY70aiAVD9XqPRPuwhO4Ct9ROOrKAHlzv2k4d0lmE5yka4WhzZ%2BfBdlJp%2B3zLynYihn22AzomIbomNXtFqOJT9NZZEpaJd4EimqyeuyfhZIZqeWdikobmJJgeKS5YQdtbQPHhzk2WwxrJWRdWcC%2F%2BaULppeo2d0LOToYlS6z%2FS99RDue%2BAnfRkoEp3C0WA56r6AmiRSdmxPA0&X-Amz-Signature=7280711470ab3dfc8284e76badcc395974aca46a4c81c6bc4e635c717c7c18c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQ2SD2O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLxgd0vAmHUn8ih6PEFvtYTmGOfzqpRgyX9t9Yzu8%2BKgIgGfEgD%2B1mY0TAPFSft3Uk6jVS8qQtwu3kRKLjOqPldJsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGefGXAHt1BdJCYzVCrcA%2FPVGXfX2SS73bVKKEs%2FDm%2FF8hBigr8C5RSCU7Iray2iK6QhG9TmN9u42mCLf8t4sVt%2BxPhqZSihNJRyW31HRbOykc0RG%2BVsIMYHiel1jRCb8%2FkQS1bWS8GgUMjKeJVEFjJHghb%2BgVpQXt6c%2BueYhD%2FgQ1q94qbmoSy%2F0kGwAz5ktrNlZINe6tcaCJ%2BWDUxqcH%2F347mD3Ju%2F0pDG3E7ISO8h3RliHjRTtk3nnrE7Lp1mReXpwlravbFdLfE0R1bgbeB6ItBX%2Bql%2BhYF4R%2FitLMuTmTydYUCJ6rjN%2FZ60N5a47XeOFfYWYijHMywMYoQUg92FUDD2A5k3cozOg54NHZgmwx%2BOjjRw%2FWWC4pi8eNgSVRKiWR13aaNtFsEFBKIQ3ucrqLltTaCXeBkoKhrFnNO0GmS7zPGz7R8USagFqK0Gc3aAiVivPX5yocAoNzraguM6NfT7d%2FWfkeAEahO7XBRQkBxx4xI7lStqTgjoudRmV7BBjDCLXthSSk0f8%2FL5fRocBEFdaaAhD5UKKiJJdCfrrkPF1AK3pDUo3NA%2FKZLGlYLIOGky2qOg83O7TWExBp4QMAFsDPuoc8CwEiPKt%2BsiJ4f%2FKSgei9Og0LJMBovCbBan5slQCQlqigoNMKSBpcIGOqUBYLgs%2Bwfb8ZLKFxkSY70aiAVD9XqPRPuwhO4Ct9ROOrKAHlzv2k4d0lmE5yka4WhzZ%2BfBdlJp%2B3zLynYihn22AzomIbomNXtFqOJT9NZZEpaJd4EimqyeuyfhZIZqeWdikobmJJgeKS5YQdtbQPHhzk2WwxrJWRdWcC%2F%2BaULppeo2d0LOToYlS6z%2FS99RDue%2BAnfRkoEp3C0WA56r6AmiRSdmxPA0&X-Amz-Signature=9032061ed2de6c62da592d4667d663e649ddef2f46bed5c07bf6d36847b6d241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQ2SD2O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLxgd0vAmHUn8ih6PEFvtYTmGOfzqpRgyX9t9Yzu8%2BKgIgGfEgD%2B1mY0TAPFSft3Uk6jVS8qQtwu3kRKLjOqPldJsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGefGXAHt1BdJCYzVCrcA%2FPVGXfX2SS73bVKKEs%2FDm%2FF8hBigr8C5RSCU7Iray2iK6QhG9TmN9u42mCLf8t4sVt%2BxPhqZSihNJRyW31HRbOykc0RG%2BVsIMYHiel1jRCb8%2FkQS1bWS8GgUMjKeJVEFjJHghb%2BgVpQXt6c%2BueYhD%2FgQ1q94qbmoSy%2F0kGwAz5ktrNlZINe6tcaCJ%2BWDUxqcH%2F347mD3Ju%2F0pDG3E7ISO8h3RliHjRTtk3nnrE7Lp1mReXpwlravbFdLfE0R1bgbeB6ItBX%2Bql%2BhYF4R%2FitLMuTmTydYUCJ6rjN%2FZ60N5a47XeOFfYWYijHMywMYoQUg92FUDD2A5k3cozOg54NHZgmwx%2BOjjRw%2FWWC4pi8eNgSVRKiWR13aaNtFsEFBKIQ3ucrqLltTaCXeBkoKhrFnNO0GmS7zPGz7R8USagFqK0Gc3aAiVivPX5yocAoNzraguM6NfT7d%2FWfkeAEahO7XBRQkBxx4xI7lStqTgjoudRmV7BBjDCLXthSSk0f8%2FL5fRocBEFdaaAhD5UKKiJJdCfrrkPF1AK3pDUo3NA%2FKZLGlYLIOGky2qOg83O7TWExBp4QMAFsDPuoc8CwEiPKt%2BsiJ4f%2FKSgei9Og0LJMBovCbBan5slQCQlqigoNMKSBpcIGOqUBYLgs%2Bwfb8ZLKFxkSY70aiAVD9XqPRPuwhO4Ct9ROOrKAHlzv2k4d0lmE5yka4WhzZ%2BfBdlJp%2B3zLynYihn22AzomIbomNXtFqOJT9NZZEpaJd4EimqyeuyfhZIZqeWdikobmJJgeKS5YQdtbQPHhzk2WwxrJWRdWcC%2F%2BaULppeo2d0LOToYlS6z%2FS99RDue%2BAnfRkoEp3C0WA56r6AmiRSdmxPA0&X-Amz-Signature=790e370053dba581e2fe6d49ece3d51622a05acb54b10b1daa61619438ea0a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQ2SD2O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLxgd0vAmHUn8ih6PEFvtYTmGOfzqpRgyX9t9Yzu8%2BKgIgGfEgD%2B1mY0TAPFSft3Uk6jVS8qQtwu3kRKLjOqPldJsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGefGXAHt1BdJCYzVCrcA%2FPVGXfX2SS73bVKKEs%2FDm%2FF8hBigr8C5RSCU7Iray2iK6QhG9TmN9u42mCLf8t4sVt%2BxPhqZSihNJRyW31HRbOykc0RG%2BVsIMYHiel1jRCb8%2FkQS1bWS8GgUMjKeJVEFjJHghb%2BgVpQXt6c%2BueYhD%2FgQ1q94qbmoSy%2F0kGwAz5ktrNlZINe6tcaCJ%2BWDUxqcH%2F347mD3Ju%2F0pDG3E7ISO8h3RliHjRTtk3nnrE7Lp1mReXpwlravbFdLfE0R1bgbeB6ItBX%2Bql%2BhYF4R%2FitLMuTmTydYUCJ6rjN%2FZ60N5a47XeOFfYWYijHMywMYoQUg92FUDD2A5k3cozOg54NHZgmwx%2BOjjRw%2FWWC4pi8eNgSVRKiWR13aaNtFsEFBKIQ3ucrqLltTaCXeBkoKhrFnNO0GmS7zPGz7R8USagFqK0Gc3aAiVivPX5yocAoNzraguM6NfT7d%2FWfkeAEahO7XBRQkBxx4xI7lStqTgjoudRmV7BBjDCLXthSSk0f8%2FL5fRocBEFdaaAhD5UKKiJJdCfrrkPF1AK3pDUo3NA%2FKZLGlYLIOGky2qOg83O7TWExBp4QMAFsDPuoc8CwEiPKt%2BsiJ4f%2FKSgei9Og0LJMBovCbBan5slQCQlqigoNMKSBpcIGOqUBYLgs%2Bwfb8ZLKFxkSY70aiAVD9XqPRPuwhO4Ct9ROOrKAHlzv2k4d0lmE5yka4WhzZ%2BfBdlJp%2B3zLynYihn22AzomIbomNXtFqOJT9NZZEpaJd4EimqyeuyfhZIZqeWdikobmJJgeKS5YQdtbQPHhzk2WwxrJWRdWcC%2F%2BaULppeo2d0LOToYlS6z%2FS99RDue%2BAnfRkoEp3C0WA56r6AmiRSdmxPA0&X-Amz-Signature=1252bfb4aa9b0651b3ef5e3b237dc56239824db88fe0b6047f214dec0d067e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQ2SD2O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLxgd0vAmHUn8ih6PEFvtYTmGOfzqpRgyX9t9Yzu8%2BKgIgGfEgD%2B1mY0TAPFSft3Uk6jVS8qQtwu3kRKLjOqPldJsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGefGXAHt1BdJCYzVCrcA%2FPVGXfX2SS73bVKKEs%2FDm%2FF8hBigr8C5RSCU7Iray2iK6QhG9TmN9u42mCLf8t4sVt%2BxPhqZSihNJRyW31HRbOykc0RG%2BVsIMYHiel1jRCb8%2FkQS1bWS8GgUMjKeJVEFjJHghb%2BgVpQXt6c%2BueYhD%2FgQ1q94qbmoSy%2F0kGwAz5ktrNlZINe6tcaCJ%2BWDUxqcH%2F347mD3Ju%2F0pDG3E7ISO8h3RliHjRTtk3nnrE7Lp1mReXpwlravbFdLfE0R1bgbeB6ItBX%2Bql%2BhYF4R%2FitLMuTmTydYUCJ6rjN%2FZ60N5a47XeOFfYWYijHMywMYoQUg92FUDD2A5k3cozOg54NHZgmwx%2BOjjRw%2FWWC4pi8eNgSVRKiWR13aaNtFsEFBKIQ3ucrqLltTaCXeBkoKhrFnNO0GmS7zPGz7R8USagFqK0Gc3aAiVivPX5yocAoNzraguM6NfT7d%2FWfkeAEahO7XBRQkBxx4xI7lStqTgjoudRmV7BBjDCLXthSSk0f8%2FL5fRocBEFdaaAhD5UKKiJJdCfrrkPF1AK3pDUo3NA%2FKZLGlYLIOGky2qOg83O7TWExBp4QMAFsDPuoc8CwEiPKt%2BsiJ4f%2FKSgei9Og0LJMBovCbBan5slQCQlqigoNMKSBpcIGOqUBYLgs%2Bwfb8ZLKFxkSY70aiAVD9XqPRPuwhO4Ct9ROOrKAHlzv2k4d0lmE5yka4WhzZ%2BfBdlJp%2B3zLynYihn22AzomIbomNXtFqOJT9NZZEpaJd4EimqyeuyfhZIZqeWdikobmJJgeKS5YQdtbQPHhzk2WwxrJWRdWcC%2F%2BaULppeo2d0LOToYlS6z%2FS99RDue%2BAnfRkoEp3C0WA56r6AmiRSdmxPA0&X-Amz-Signature=87174b487c74d51fb66b5286c3396d3b8120836eaba647b49eaf1a1f87a657d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQ2SD2O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLxgd0vAmHUn8ih6PEFvtYTmGOfzqpRgyX9t9Yzu8%2BKgIgGfEgD%2B1mY0TAPFSft3Uk6jVS8qQtwu3kRKLjOqPldJsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGefGXAHt1BdJCYzVCrcA%2FPVGXfX2SS73bVKKEs%2FDm%2FF8hBigr8C5RSCU7Iray2iK6QhG9TmN9u42mCLf8t4sVt%2BxPhqZSihNJRyW31HRbOykc0RG%2BVsIMYHiel1jRCb8%2FkQS1bWS8GgUMjKeJVEFjJHghb%2BgVpQXt6c%2BueYhD%2FgQ1q94qbmoSy%2F0kGwAz5ktrNlZINe6tcaCJ%2BWDUxqcH%2F347mD3Ju%2F0pDG3E7ISO8h3RliHjRTtk3nnrE7Lp1mReXpwlravbFdLfE0R1bgbeB6ItBX%2Bql%2BhYF4R%2FitLMuTmTydYUCJ6rjN%2FZ60N5a47XeOFfYWYijHMywMYoQUg92FUDD2A5k3cozOg54NHZgmwx%2BOjjRw%2FWWC4pi8eNgSVRKiWR13aaNtFsEFBKIQ3ucrqLltTaCXeBkoKhrFnNO0GmS7zPGz7R8USagFqK0Gc3aAiVivPX5yocAoNzraguM6NfT7d%2FWfkeAEahO7XBRQkBxx4xI7lStqTgjoudRmV7BBjDCLXthSSk0f8%2FL5fRocBEFdaaAhD5UKKiJJdCfrrkPF1AK3pDUo3NA%2FKZLGlYLIOGky2qOg83O7TWExBp4QMAFsDPuoc8CwEiPKt%2BsiJ4f%2FKSgei9Og0LJMBovCbBan5slQCQlqigoNMKSBpcIGOqUBYLgs%2Bwfb8ZLKFxkSY70aiAVD9XqPRPuwhO4Ct9ROOrKAHlzv2k4d0lmE5yka4WhzZ%2BfBdlJp%2B3zLynYihn22AzomIbomNXtFqOJT9NZZEpaJd4EimqyeuyfhZIZqeWdikobmJJgeKS5YQdtbQPHhzk2WwxrJWRdWcC%2F%2BaULppeo2d0LOToYlS6z%2FS99RDue%2BAnfRkoEp3C0WA56r6AmiRSdmxPA0&X-Amz-Signature=dc5aff1672c38c187af190772931c3ef4e02a96167ef37b5058a0e9946a123e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQ2SD2O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLxgd0vAmHUn8ih6PEFvtYTmGOfzqpRgyX9t9Yzu8%2BKgIgGfEgD%2B1mY0TAPFSft3Uk6jVS8qQtwu3kRKLjOqPldJsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGefGXAHt1BdJCYzVCrcA%2FPVGXfX2SS73bVKKEs%2FDm%2FF8hBigr8C5RSCU7Iray2iK6QhG9TmN9u42mCLf8t4sVt%2BxPhqZSihNJRyW31HRbOykc0RG%2BVsIMYHiel1jRCb8%2FkQS1bWS8GgUMjKeJVEFjJHghb%2BgVpQXt6c%2BueYhD%2FgQ1q94qbmoSy%2F0kGwAz5ktrNlZINe6tcaCJ%2BWDUxqcH%2F347mD3Ju%2F0pDG3E7ISO8h3RliHjRTtk3nnrE7Lp1mReXpwlravbFdLfE0R1bgbeB6ItBX%2Bql%2BhYF4R%2FitLMuTmTydYUCJ6rjN%2FZ60N5a47XeOFfYWYijHMywMYoQUg92FUDD2A5k3cozOg54NHZgmwx%2BOjjRw%2FWWC4pi8eNgSVRKiWR13aaNtFsEFBKIQ3ucrqLltTaCXeBkoKhrFnNO0GmS7zPGz7R8USagFqK0Gc3aAiVivPX5yocAoNzraguM6NfT7d%2FWfkeAEahO7XBRQkBxx4xI7lStqTgjoudRmV7BBjDCLXthSSk0f8%2FL5fRocBEFdaaAhD5UKKiJJdCfrrkPF1AK3pDUo3NA%2FKZLGlYLIOGky2qOg83O7TWExBp4QMAFsDPuoc8CwEiPKt%2BsiJ4f%2FKSgei9Og0LJMBovCbBan5slQCQlqigoNMKSBpcIGOqUBYLgs%2Bwfb8ZLKFxkSY70aiAVD9XqPRPuwhO4Ct9ROOrKAHlzv2k4d0lmE5yka4WhzZ%2BfBdlJp%2B3zLynYihn22AzomIbomNXtFqOJT9NZZEpaJd4EimqyeuyfhZIZqeWdikobmJJgeKS5YQdtbQPHhzk2WwxrJWRdWcC%2F%2BaULppeo2d0LOToYlS6z%2FS99RDue%2BAnfRkoEp3C0WA56r6AmiRSdmxPA0&X-Amz-Signature=be0d399dbda31dcd364b37c753ff309e59698b0c4bfedd4c8a0543f87f57ca4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQ2SD2O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLxgd0vAmHUn8ih6PEFvtYTmGOfzqpRgyX9t9Yzu8%2BKgIgGfEgD%2B1mY0TAPFSft3Uk6jVS8qQtwu3kRKLjOqPldJsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGefGXAHt1BdJCYzVCrcA%2FPVGXfX2SS73bVKKEs%2FDm%2FF8hBigr8C5RSCU7Iray2iK6QhG9TmN9u42mCLf8t4sVt%2BxPhqZSihNJRyW31HRbOykc0RG%2BVsIMYHiel1jRCb8%2FkQS1bWS8GgUMjKeJVEFjJHghb%2BgVpQXt6c%2BueYhD%2FgQ1q94qbmoSy%2F0kGwAz5ktrNlZINe6tcaCJ%2BWDUxqcH%2F347mD3Ju%2F0pDG3E7ISO8h3RliHjRTtk3nnrE7Lp1mReXpwlravbFdLfE0R1bgbeB6ItBX%2Bql%2BhYF4R%2FitLMuTmTydYUCJ6rjN%2FZ60N5a47XeOFfYWYijHMywMYoQUg92FUDD2A5k3cozOg54NHZgmwx%2BOjjRw%2FWWC4pi8eNgSVRKiWR13aaNtFsEFBKIQ3ucrqLltTaCXeBkoKhrFnNO0GmS7zPGz7R8USagFqK0Gc3aAiVivPX5yocAoNzraguM6NfT7d%2FWfkeAEahO7XBRQkBxx4xI7lStqTgjoudRmV7BBjDCLXthSSk0f8%2FL5fRocBEFdaaAhD5UKKiJJdCfrrkPF1AK3pDUo3NA%2FKZLGlYLIOGky2qOg83O7TWExBp4QMAFsDPuoc8CwEiPKt%2BsiJ4f%2FKSgei9Og0LJMBovCbBan5slQCQlqigoNMKSBpcIGOqUBYLgs%2Bwfb8ZLKFxkSY70aiAVD9XqPRPuwhO4Ct9ROOrKAHlzv2k4d0lmE5yka4WhzZ%2BfBdlJp%2B3zLynYihn22AzomIbomNXtFqOJT9NZZEpaJd4EimqyeuyfhZIZqeWdikobmJJgeKS5YQdtbQPHhzk2WwxrJWRdWcC%2F%2BaULppeo2d0LOToYlS6z%2FS99RDue%2BAnfRkoEp3C0WA56r6AmiRSdmxPA0&X-Amz-Signature=f873870e38b92798b83ca36149524f45a7813031d5d37f85728af73b56ee1f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
