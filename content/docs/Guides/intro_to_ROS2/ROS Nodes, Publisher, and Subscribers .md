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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHT7AMQE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBlwhAxYpfnxZm9P0REqDTy6UL0VQYsm0Pa0rPePlmuAiEA63FZTjrXyh49QNJJlaQ47qJwKguYV8%2B3PKVbE2Dcoikq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGPE5UOPu2xixo3PwCrcA3t5FQzod8SN9VN2EXnoa0kagqhtmlzxi%2Fjso%2FjQ6aOJ6gTwGsrPboBNGpLLfvD2Fs1PsBymSpxITQEoJm%2Bii2VChanhi3lEYJp55JlsO59WFVpplwjH7iS%2Bq2mckeXGamflBZPqENZ%2BZeHEfKKoG1gdkTVBV5gKWE0SAqk24u9rvMfPmgaJC%2BnVpTaxPz0eS5HGkAs%2Fociw1sgsLTDbMkYhg7U7FuJ6xeXZxcRtzlyFFOr%2FnjNbG5ySpqKkfRtbKt7tySsqHoZocliPLcxFraow2kIqBkCIZ%2FhYEooy%2FaLErlP9b93nHDD8c18C7x4rIhMUcE6f7hTID7vPSNSmCNIeWGs%2BPj2GGr8sRpnsuFMVVDRx7K8yAtjI5KIIiNcVZ4ATSr%2BXbQzSEYhrjZHuLbEmoiRQGBKeOmvnrczmUHEM%2B%2F3KJdrTc1sJCUBZgRoTvcD2Ps0q7srd5EiSGnLn7uGG2Cd%2B6QsYpCxORu5jJcJnApdPBWN0GyZxZXalJArfEQYpWKvKmvY8qapfxqy%2Bvfnx%2FIVtvQWALGYLMx4hRLYz2OLPJQYTUnaRbwQpvODLlAuNKui%2FfKmH9LCdsnmx0kLaD0g59LhbFaG6S9sFka99q9osMDs4%2Bu4zewWEMNew5cAGOqUBjW2WEX9pskT81MZSiQRllt6dFRwcpseno7OcO5klLdZm%2BZxSnxX6B3iIvNfQjg29LjmhUZAIdFdqxrv2qzn9zAyfKyZGbKGCk4rwvVnlCyYnvu3KGRoMcbyd1Ht3TuQm%2BtAfjLX3nTy2XoDe%2Fu8t7qc1zMuNVUorXa%2FHPYSvR5IELG16M6x9AxqR9XGmxLJNDqdZFIHZVSu0TNtUf%2F0U7%2FcZ8fJD&X-Amz-Signature=e4366b395b26fb79340028104ae80d141b6cbb9c6f7cc185c3ebeeef5573275e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHT7AMQE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBlwhAxYpfnxZm9P0REqDTy6UL0VQYsm0Pa0rPePlmuAiEA63FZTjrXyh49QNJJlaQ47qJwKguYV8%2B3PKVbE2Dcoikq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGPE5UOPu2xixo3PwCrcA3t5FQzod8SN9VN2EXnoa0kagqhtmlzxi%2Fjso%2FjQ6aOJ6gTwGsrPboBNGpLLfvD2Fs1PsBymSpxITQEoJm%2Bii2VChanhi3lEYJp55JlsO59WFVpplwjH7iS%2Bq2mckeXGamflBZPqENZ%2BZeHEfKKoG1gdkTVBV5gKWE0SAqk24u9rvMfPmgaJC%2BnVpTaxPz0eS5HGkAs%2Fociw1sgsLTDbMkYhg7U7FuJ6xeXZxcRtzlyFFOr%2FnjNbG5ySpqKkfRtbKt7tySsqHoZocliPLcxFraow2kIqBkCIZ%2FhYEooy%2FaLErlP9b93nHDD8c18C7x4rIhMUcE6f7hTID7vPSNSmCNIeWGs%2BPj2GGr8sRpnsuFMVVDRx7K8yAtjI5KIIiNcVZ4ATSr%2BXbQzSEYhrjZHuLbEmoiRQGBKeOmvnrczmUHEM%2B%2F3KJdrTc1sJCUBZgRoTvcD2Ps0q7srd5EiSGnLn7uGG2Cd%2B6QsYpCxORu5jJcJnApdPBWN0GyZxZXalJArfEQYpWKvKmvY8qapfxqy%2Bvfnx%2FIVtvQWALGYLMx4hRLYz2OLPJQYTUnaRbwQpvODLlAuNKui%2FfKmH9LCdsnmx0kLaD0g59LhbFaG6S9sFka99q9osMDs4%2Bu4zewWEMNew5cAGOqUBjW2WEX9pskT81MZSiQRllt6dFRwcpseno7OcO5klLdZm%2BZxSnxX6B3iIvNfQjg29LjmhUZAIdFdqxrv2qzn9zAyfKyZGbKGCk4rwvVnlCyYnvu3KGRoMcbyd1Ht3TuQm%2BtAfjLX3nTy2XoDe%2Fu8t7qc1zMuNVUorXa%2FHPYSvR5IELG16M6x9AxqR9XGmxLJNDqdZFIHZVSu0TNtUf%2F0U7%2FcZ8fJD&X-Amz-Signature=f790b78eeee15b78133cf8c5894a75ddf9ffc8caf8e467fcb84a90f9249d2e96&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHT7AMQE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBlwhAxYpfnxZm9P0REqDTy6UL0VQYsm0Pa0rPePlmuAiEA63FZTjrXyh49QNJJlaQ47qJwKguYV8%2B3PKVbE2Dcoikq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGPE5UOPu2xixo3PwCrcA3t5FQzod8SN9VN2EXnoa0kagqhtmlzxi%2Fjso%2FjQ6aOJ6gTwGsrPboBNGpLLfvD2Fs1PsBymSpxITQEoJm%2Bii2VChanhi3lEYJp55JlsO59WFVpplwjH7iS%2Bq2mckeXGamflBZPqENZ%2BZeHEfKKoG1gdkTVBV5gKWE0SAqk24u9rvMfPmgaJC%2BnVpTaxPz0eS5HGkAs%2Fociw1sgsLTDbMkYhg7U7FuJ6xeXZxcRtzlyFFOr%2FnjNbG5ySpqKkfRtbKt7tySsqHoZocliPLcxFraow2kIqBkCIZ%2FhYEooy%2FaLErlP9b93nHDD8c18C7x4rIhMUcE6f7hTID7vPSNSmCNIeWGs%2BPj2GGr8sRpnsuFMVVDRx7K8yAtjI5KIIiNcVZ4ATSr%2BXbQzSEYhrjZHuLbEmoiRQGBKeOmvnrczmUHEM%2B%2F3KJdrTc1sJCUBZgRoTvcD2Ps0q7srd5EiSGnLn7uGG2Cd%2B6QsYpCxORu5jJcJnApdPBWN0GyZxZXalJArfEQYpWKvKmvY8qapfxqy%2Bvfnx%2FIVtvQWALGYLMx4hRLYz2OLPJQYTUnaRbwQpvODLlAuNKui%2FfKmH9LCdsnmx0kLaD0g59LhbFaG6S9sFka99q9osMDs4%2Bu4zewWEMNew5cAGOqUBjW2WEX9pskT81MZSiQRllt6dFRwcpseno7OcO5klLdZm%2BZxSnxX6B3iIvNfQjg29LjmhUZAIdFdqxrv2qzn9zAyfKyZGbKGCk4rwvVnlCyYnvu3KGRoMcbyd1Ht3TuQm%2BtAfjLX3nTy2XoDe%2Fu8t7qc1zMuNVUorXa%2FHPYSvR5IELG16M6x9AxqR9XGmxLJNDqdZFIHZVSu0TNtUf%2F0U7%2FcZ8fJD&X-Amz-Signature=47f2ca754d692da27fb0d16054dec5446eab19320502db339c6eda4f28ba0831&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHT7AMQE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBlwhAxYpfnxZm9P0REqDTy6UL0VQYsm0Pa0rPePlmuAiEA63FZTjrXyh49QNJJlaQ47qJwKguYV8%2B3PKVbE2Dcoikq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGPE5UOPu2xixo3PwCrcA3t5FQzod8SN9VN2EXnoa0kagqhtmlzxi%2Fjso%2FjQ6aOJ6gTwGsrPboBNGpLLfvD2Fs1PsBymSpxITQEoJm%2Bii2VChanhi3lEYJp55JlsO59WFVpplwjH7iS%2Bq2mckeXGamflBZPqENZ%2BZeHEfKKoG1gdkTVBV5gKWE0SAqk24u9rvMfPmgaJC%2BnVpTaxPz0eS5HGkAs%2Fociw1sgsLTDbMkYhg7U7FuJ6xeXZxcRtzlyFFOr%2FnjNbG5ySpqKkfRtbKt7tySsqHoZocliPLcxFraow2kIqBkCIZ%2FhYEooy%2FaLErlP9b93nHDD8c18C7x4rIhMUcE6f7hTID7vPSNSmCNIeWGs%2BPj2GGr8sRpnsuFMVVDRx7K8yAtjI5KIIiNcVZ4ATSr%2BXbQzSEYhrjZHuLbEmoiRQGBKeOmvnrczmUHEM%2B%2F3KJdrTc1sJCUBZgRoTvcD2Ps0q7srd5EiSGnLn7uGG2Cd%2B6QsYpCxORu5jJcJnApdPBWN0GyZxZXalJArfEQYpWKvKmvY8qapfxqy%2Bvfnx%2FIVtvQWALGYLMx4hRLYz2OLPJQYTUnaRbwQpvODLlAuNKui%2FfKmH9LCdsnmx0kLaD0g59LhbFaG6S9sFka99q9osMDs4%2Bu4zewWEMNew5cAGOqUBjW2WEX9pskT81MZSiQRllt6dFRwcpseno7OcO5klLdZm%2BZxSnxX6B3iIvNfQjg29LjmhUZAIdFdqxrv2qzn9zAyfKyZGbKGCk4rwvVnlCyYnvu3KGRoMcbyd1Ht3TuQm%2BtAfjLX3nTy2XoDe%2Fu8t7qc1zMuNVUorXa%2FHPYSvR5IELG16M6x9AxqR9XGmxLJNDqdZFIHZVSu0TNtUf%2F0U7%2FcZ8fJD&X-Amz-Signature=1707863b326604522614796f45051397e183cc5710f02fc9c777b803eae3e4dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHT7AMQE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBlwhAxYpfnxZm9P0REqDTy6UL0VQYsm0Pa0rPePlmuAiEA63FZTjrXyh49QNJJlaQ47qJwKguYV8%2B3PKVbE2Dcoikq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGPE5UOPu2xixo3PwCrcA3t5FQzod8SN9VN2EXnoa0kagqhtmlzxi%2Fjso%2FjQ6aOJ6gTwGsrPboBNGpLLfvD2Fs1PsBymSpxITQEoJm%2Bii2VChanhi3lEYJp55JlsO59WFVpplwjH7iS%2Bq2mckeXGamflBZPqENZ%2BZeHEfKKoG1gdkTVBV5gKWE0SAqk24u9rvMfPmgaJC%2BnVpTaxPz0eS5HGkAs%2Fociw1sgsLTDbMkYhg7U7FuJ6xeXZxcRtzlyFFOr%2FnjNbG5ySpqKkfRtbKt7tySsqHoZocliPLcxFraow2kIqBkCIZ%2FhYEooy%2FaLErlP9b93nHDD8c18C7x4rIhMUcE6f7hTID7vPSNSmCNIeWGs%2BPj2GGr8sRpnsuFMVVDRx7K8yAtjI5KIIiNcVZ4ATSr%2BXbQzSEYhrjZHuLbEmoiRQGBKeOmvnrczmUHEM%2B%2F3KJdrTc1sJCUBZgRoTvcD2Ps0q7srd5EiSGnLn7uGG2Cd%2B6QsYpCxORu5jJcJnApdPBWN0GyZxZXalJArfEQYpWKvKmvY8qapfxqy%2Bvfnx%2FIVtvQWALGYLMx4hRLYz2OLPJQYTUnaRbwQpvODLlAuNKui%2FfKmH9LCdsnmx0kLaD0g59LhbFaG6S9sFka99q9osMDs4%2Bu4zewWEMNew5cAGOqUBjW2WEX9pskT81MZSiQRllt6dFRwcpseno7OcO5klLdZm%2BZxSnxX6B3iIvNfQjg29LjmhUZAIdFdqxrv2qzn9zAyfKyZGbKGCk4rwvVnlCyYnvu3KGRoMcbyd1Ht3TuQm%2BtAfjLX3nTy2XoDe%2Fu8t7qc1zMuNVUorXa%2FHPYSvR5IELG16M6x9AxqR9XGmxLJNDqdZFIHZVSu0TNtUf%2F0U7%2FcZ8fJD&X-Amz-Signature=102ebb0266c16f8bf2ec88c818a39f1cd993a4d0f752fa886bef6e44c490d6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHT7AMQE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBlwhAxYpfnxZm9P0REqDTy6UL0VQYsm0Pa0rPePlmuAiEA63FZTjrXyh49QNJJlaQ47qJwKguYV8%2B3PKVbE2Dcoikq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGPE5UOPu2xixo3PwCrcA3t5FQzod8SN9VN2EXnoa0kagqhtmlzxi%2Fjso%2FjQ6aOJ6gTwGsrPboBNGpLLfvD2Fs1PsBymSpxITQEoJm%2Bii2VChanhi3lEYJp55JlsO59WFVpplwjH7iS%2Bq2mckeXGamflBZPqENZ%2BZeHEfKKoG1gdkTVBV5gKWE0SAqk24u9rvMfPmgaJC%2BnVpTaxPz0eS5HGkAs%2Fociw1sgsLTDbMkYhg7U7FuJ6xeXZxcRtzlyFFOr%2FnjNbG5ySpqKkfRtbKt7tySsqHoZocliPLcxFraow2kIqBkCIZ%2FhYEooy%2FaLErlP9b93nHDD8c18C7x4rIhMUcE6f7hTID7vPSNSmCNIeWGs%2BPj2GGr8sRpnsuFMVVDRx7K8yAtjI5KIIiNcVZ4ATSr%2BXbQzSEYhrjZHuLbEmoiRQGBKeOmvnrczmUHEM%2B%2F3KJdrTc1sJCUBZgRoTvcD2Ps0q7srd5EiSGnLn7uGG2Cd%2B6QsYpCxORu5jJcJnApdPBWN0GyZxZXalJArfEQYpWKvKmvY8qapfxqy%2Bvfnx%2FIVtvQWALGYLMx4hRLYz2OLPJQYTUnaRbwQpvODLlAuNKui%2FfKmH9LCdsnmx0kLaD0g59LhbFaG6S9sFka99q9osMDs4%2Bu4zewWEMNew5cAGOqUBjW2WEX9pskT81MZSiQRllt6dFRwcpseno7OcO5klLdZm%2BZxSnxX6B3iIvNfQjg29LjmhUZAIdFdqxrv2qzn9zAyfKyZGbKGCk4rwvVnlCyYnvu3KGRoMcbyd1Ht3TuQm%2BtAfjLX3nTy2XoDe%2Fu8t7qc1zMuNVUorXa%2FHPYSvR5IELG16M6x9AxqR9XGmxLJNDqdZFIHZVSu0TNtUf%2F0U7%2FcZ8fJD&X-Amz-Signature=5c00de8600e31712e7c43dcd6105ff62a122ea0494f3937b703d2b1366db2808&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHT7AMQE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBlwhAxYpfnxZm9P0REqDTy6UL0VQYsm0Pa0rPePlmuAiEA63FZTjrXyh49QNJJlaQ47qJwKguYV8%2B3PKVbE2Dcoikq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGPE5UOPu2xixo3PwCrcA3t5FQzod8SN9VN2EXnoa0kagqhtmlzxi%2Fjso%2FjQ6aOJ6gTwGsrPboBNGpLLfvD2Fs1PsBymSpxITQEoJm%2Bii2VChanhi3lEYJp55JlsO59WFVpplwjH7iS%2Bq2mckeXGamflBZPqENZ%2BZeHEfKKoG1gdkTVBV5gKWE0SAqk24u9rvMfPmgaJC%2BnVpTaxPz0eS5HGkAs%2Fociw1sgsLTDbMkYhg7U7FuJ6xeXZxcRtzlyFFOr%2FnjNbG5ySpqKkfRtbKt7tySsqHoZocliPLcxFraow2kIqBkCIZ%2FhYEooy%2FaLErlP9b93nHDD8c18C7x4rIhMUcE6f7hTID7vPSNSmCNIeWGs%2BPj2GGr8sRpnsuFMVVDRx7K8yAtjI5KIIiNcVZ4ATSr%2BXbQzSEYhrjZHuLbEmoiRQGBKeOmvnrczmUHEM%2B%2F3KJdrTc1sJCUBZgRoTvcD2Ps0q7srd5EiSGnLn7uGG2Cd%2B6QsYpCxORu5jJcJnApdPBWN0GyZxZXalJArfEQYpWKvKmvY8qapfxqy%2Bvfnx%2FIVtvQWALGYLMx4hRLYz2OLPJQYTUnaRbwQpvODLlAuNKui%2FfKmH9LCdsnmx0kLaD0g59LhbFaG6S9sFka99q9osMDs4%2Bu4zewWEMNew5cAGOqUBjW2WEX9pskT81MZSiQRllt6dFRwcpseno7OcO5klLdZm%2BZxSnxX6B3iIvNfQjg29LjmhUZAIdFdqxrv2qzn9zAyfKyZGbKGCk4rwvVnlCyYnvu3KGRoMcbyd1Ht3TuQm%2BtAfjLX3nTy2XoDe%2Fu8t7qc1zMuNVUorXa%2FHPYSvR5IELG16M6x9AxqR9XGmxLJNDqdZFIHZVSu0TNtUf%2F0U7%2FcZ8fJD&X-Amz-Signature=28a9107bfb201d667d57101e77e80aebe6fdc44dcea4caf8c9a6e53d399d4d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHT7AMQE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBlwhAxYpfnxZm9P0REqDTy6UL0VQYsm0Pa0rPePlmuAiEA63FZTjrXyh49QNJJlaQ47qJwKguYV8%2B3PKVbE2Dcoikq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGPE5UOPu2xixo3PwCrcA3t5FQzod8SN9VN2EXnoa0kagqhtmlzxi%2Fjso%2FjQ6aOJ6gTwGsrPboBNGpLLfvD2Fs1PsBymSpxITQEoJm%2Bii2VChanhi3lEYJp55JlsO59WFVpplwjH7iS%2Bq2mckeXGamflBZPqENZ%2BZeHEfKKoG1gdkTVBV5gKWE0SAqk24u9rvMfPmgaJC%2BnVpTaxPz0eS5HGkAs%2Fociw1sgsLTDbMkYhg7U7FuJ6xeXZxcRtzlyFFOr%2FnjNbG5ySpqKkfRtbKt7tySsqHoZocliPLcxFraow2kIqBkCIZ%2FhYEooy%2FaLErlP9b93nHDD8c18C7x4rIhMUcE6f7hTID7vPSNSmCNIeWGs%2BPj2GGr8sRpnsuFMVVDRx7K8yAtjI5KIIiNcVZ4ATSr%2BXbQzSEYhrjZHuLbEmoiRQGBKeOmvnrczmUHEM%2B%2F3KJdrTc1sJCUBZgRoTvcD2Ps0q7srd5EiSGnLn7uGG2Cd%2B6QsYpCxORu5jJcJnApdPBWN0GyZxZXalJArfEQYpWKvKmvY8qapfxqy%2Bvfnx%2FIVtvQWALGYLMx4hRLYz2OLPJQYTUnaRbwQpvODLlAuNKui%2FfKmH9LCdsnmx0kLaD0g59LhbFaG6S9sFka99q9osMDs4%2Bu4zewWEMNew5cAGOqUBjW2WEX9pskT81MZSiQRllt6dFRwcpseno7OcO5klLdZm%2BZxSnxX6B3iIvNfQjg29LjmhUZAIdFdqxrv2qzn9zAyfKyZGbKGCk4rwvVnlCyYnvu3KGRoMcbyd1Ht3TuQm%2BtAfjLX3nTy2XoDe%2Fu8t7qc1zMuNVUorXa%2FHPYSvR5IELG16M6x9AxqR9XGmxLJNDqdZFIHZVSu0TNtUf%2F0U7%2FcZ8fJD&X-Amz-Signature=35372beefc6f154a022fca9c641382b57d17d7dba54def35de504ed8fc9b3c40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
