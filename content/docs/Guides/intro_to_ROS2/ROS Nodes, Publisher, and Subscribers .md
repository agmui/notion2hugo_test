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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654JWOBTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkTk9vu%2FttsXo3mcHw5XrlIXvEDX9%2FHDnksfxoTsey%2FAIhAK98UIl47j61Q5ItP1SaVADdoQ0Ohli1O2aCWm2pxBfkKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGG4MqhRACkgKzaHoq3AOqIB9bf6N4hi%2FE%2F6ZU5JudTRXEk3lsWdo%2FCoWROlrbIq8RPQ2Cr2EBNYjwIt82nRECQKElysHL7QQSg7hBWVFIBo4yh0nbF%2BE5ZbNfgJU1%2FfDSYZaDQcFwkmAVXSTPh80rWkKN8nJtSmUMeLxzONXJwWcr2uBfXGh%2Fq1B%2BmgoOEG8v7g9sLxz50aIToXx260HduZgMf9LlMSxtcPXs3YDtblgBRsk%2F988hSEHOCrasqJFSa04VicFw2XBf8fJoRkPfwxTd6nJoEd2gpkKju7IKlGSRcer0K327Q%2BISKG0d1XEz7FnWvVNo2qw2xSH3vSRCpd1xCgsWupiR%2BqaMvs5K6UpsaK%2FW%2BYFEWQEcj3QWQ3MkW%2F1ZRFaOSBHpxykpcZozY57y5Ftf9rr7KkcoiEfUASaa16xVlqfdzXN9rF64tedSZjfieaLng1v7FBMzT%2Fc%2BSo4xeUEi1W%2F2cIxGNWCRzizDnmuKf1is19CB%2BnKstP%2Fsf8X4Q%2BgJgzNh1gJTnNfM4toAHGsRH8nWBwHcCr2QiTsNE%2BXRh6iTinGBoTczHD1VFPqVCHHsHQHGVfGPcadwo4Oy9Uy6al%2BChkYH4SwR83Y6QlBvGcxvJMp%2BzkGqfjoIs%2Flm2huSEeBILzC%2BwafEBjqkARxYu8FXtFE1wg4hg99NO9%2BshHf08V%2BPg0%2F80VlOX8P%2FZCoAtIFcRzmhyvCi8mgsmk2EaWq6q7ZlzSe7LtJZgLKntPRpqqShjQYoJGfVoZnggkInl5XTUsZAa8uYVCNEGJoRKKRybZZqKsVlZMOyOAGhirzt8H2FOZ8ZExbtneD4iL94fjQ5vMfGBmT6jz2miv4gS6dHB7Voe9XTBfZl6pcj5ffX&X-Amz-Signature=af16d6f2a9def6f02d92111d230eb74cb409345d05175d3a41cc80171afc8bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654JWOBTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkTk9vu%2FttsXo3mcHw5XrlIXvEDX9%2FHDnksfxoTsey%2FAIhAK98UIl47j61Q5ItP1SaVADdoQ0Ohli1O2aCWm2pxBfkKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGG4MqhRACkgKzaHoq3AOqIB9bf6N4hi%2FE%2F6ZU5JudTRXEk3lsWdo%2FCoWROlrbIq8RPQ2Cr2EBNYjwIt82nRECQKElysHL7QQSg7hBWVFIBo4yh0nbF%2BE5ZbNfgJU1%2FfDSYZaDQcFwkmAVXSTPh80rWkKN8nJtSmUMeLxzONXJwWcr2uBfXGh%2Fq1B%2BmgoOEG8v7g9sLxz50aIToXx260HduZgMf9LlMSxtcPXs3YDtblgBRsk%2F988hSEHOCrasqJFSa04VicFw2XBf8fJoRkPfwxTd6nJoEd2gpkKju7IKlGSRcer0K327Q%2BISKG0d1XEz7FnWvVNo2qw2xSH3vSRCpd1xCgsWupiR%2BqaMvs5K6UpsaK%2FW%2BYFEWQEcj3QWQ3MkW%2F1ZRFaOSBHpxykpcZozY57y5Ftf9rr7KkcoiEfUASaa16xVlqfdzXN9rF64tedSZjfieaLng1v7FBMzT%2Fc%2BSo4xeUEi1W%2F2cIxGNWCRzizDnmuKf1is19CB%2BnKstP%2Fsf8X4Q%2BgJgzNh1gJTnNfM4toAHGsRH8nWBwHcCr2QiTsNE%2BXRh6iTinGBoTczHD1VFPqVCHHsHQHGVfGPcadwo4Oy9Uy6al%2BChkYH4SwR83Y6QlBvGcxvJMp%2BzkGqfjoIs%2Flm2huSEeBILzC%2BwafEBjqkARxYu8FXtFE1wg4hg99NO9%2BshHf08V%2BPg0%2F80VlOX8P%2FZCoAtIFcRzmhyvCi8mgsmk2EaWq6q7ZlzSe7LtJZgLKntPRpqqShjQYoJGfVoZnggkInl5XTUsZAa8uYVCNEGJoRKKRybZZqKsVlZMOyOAGhirzt8H2FOZ8ZExbtneD4iL94fjQ5vMfGBmT6jz2miv4gS6dHB7Voe9XTBfZl6pcj5ffX&X-Amz-Signature=82a3266693a9f95ba4fe62e6b9024dd7bf80dfab966b93c3f070d53908c56df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654JWOBTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkTk9vu%2FttsXo3mcHw5XrlIXvEDX9%2FHDnksfxoTsey%2FAIhAK98UIl47j61Q5ItP1SaVADdoQ0Ohli1O2aCWm2pxBfkKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGG4MqhRACkgKzaHoq3AOqIB9bf6N4hi%2FE%2F6ZU5JudTRXEk3lsWdo%2FCoWROlrbIq8RPQ2Cr2EBNYjwIt82nRECQKElysHL7QQSg7hBWVFIBo4yh0nbF%2BE5ZbNfgJU1%2FfDSYZaDQcFwkmAVXSTPh80rWkKN8nJtSmUMeLxzONXJwWcr2uBfXGh%2Fq1B%2BmgoOEG8v7g9sLxz50aIToXx260HduZgMf9LlMSxtcPXs3YDtblgBRsk%2F988hSEHOCrasqJFSa04VicFw2XBf8fJoRkPfwxTd6nJoEd2gpkKju7IKlGSRcer0K327Q%2BISKG0d1XEz7FnWvVNo2qw2xSH3vSRCpd1xCgsWupiR%2BqaMvs5K6UpsaK%2FW%2BYFEWQEcj3QWQ3MkW%2F1ZRFaOSBHpxykpcZozY57y5Ftf9rr7KkcoiEfUASaa16xVlqfdzXN9rF64tedSZjfieaLng1v7FBMzT%2Fc%2BSo4xeUEi1W%2F2cIxGNWCRzizDnmuKf1is19CB%2BnKstP%2Fsf8X4Q%2BgJgzNh1gJTnNfM4toAHGsRH8nWBwHcCr2QiTsNE%2BXRh6iTinGBoTczHD1VFPqVCHHsHQHGVfGPcadwo4Oy9Uy6al%2BChkYH4SwR83Y6QlBvGcxvJMp%2BzkGqfjoIs%2Flm2huSEeBILzC%2BwafEBjqkARxYu8FXtFE1wg4hg99NO9%2BshHf08V%2BPg0%2F80VlOX8P%2FZCoAtIFcRzmhyvCi8mgsmk2EaWq6q7ZlzSe7LtJZgLKntPRpqqShjQYoJGfVoZnggkInl5XTUsZAa8uYVCNEGJoRKKRybZZqKsVlZMOyOAGhirzt8H2FOZ8ZExbtneD4iL94fjQ5vMfGBmT6jz2miv4gS6dHB7Voe9XTBfZl6pcj5ffX&X-Amz-Signature=670a23b7332bb13167f84fdedca96cd2da3ce88536ff917b0b61bb6a4894c3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654JWOBTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkTk9vu%2FttsXo3mcHw5XrlIXvEDX9%2FHDnksfxoTsey%2FAIhAK98UIl47j61Q5ItP1SaVADdoQ0Ohli1O2aCWm2pxBfkKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGG4MqhRACkgKzaHoq3AOqIB9bf6N4hi%2FE%2F6ZU5JudTRXEk3lsWdo%2FCoWROlrbIq8RPQ2Cr2EBNYjwIt82nRECQKElysHL7QQSg7hBWVFIBo4yh0nbF%2BE5ZbNfgJU1%2FfDSYZaDQcFwkmAVXSTPh80rWkKN8nJtSmUMeLxzONXJwWcr2uBfXGh%2Fq1B%2BmgoOEG8v7g9sLxz50aIToXx260HduZgMf9LlMSxtcPXs3YDtblgBRsk%2F988hSEHOCrasqJFSa04VicFw2XBf8fJoRkPfwxTd6nJoEd2gpkKju7IKlGSRcer0K327Q%2BISKG0d1XEz7FnWvVNo2qw2xSH3vSRCpd1xCgsWupiR%2BqaMvs5K6UpsaK%2FW%2BYFEWQEcj3QWQ3MkW%2F1ZRFaOSBHpxykpcZozY57y5Ftf9rr7KkcoiEfUASaa16xVlqfdzXN9rF64tedSZjfieaLng1v7FBMzT%2Fc%2BSo4xeUEi1W%2F2cIxGNWCRzizDnmuKf1is19CB%2BnKstP%2Fsf8X4Q%2BgJgzNh1gJTnNfM4toAHGsRH8nWBwHcCr2QiTsNE%2BXRh6iTinGBoTczHD1VFPqVCHHsHQHGVfGPcadwo4Oy9Uy6al%2BChkYH4SwR83Y6QlBvGcxvJMp%2BzkGqfjoIs%2Flm2huSEeBILzC%2BwafEBjqkARxYu8FXtFE1wg4hg99NO9%2BshHf08V%2BPg0%2F80VlOX8P%2FZCoAtIFcRzmhyvCi8mgsmk2EaWq6q7ZlzSe7LtJZgLKntPRpqqShjQYoJGfVoZnggkInl5XTUsZAa8uYVCNEGJoRKKRybZZqKsVlZMOyOAGhirzt8H2FOZ8ZExbtneD4iL94fjQ5vMfGBmT6jz2miv4gS6dHB7Voe9XTBfZl6pcj5ffX&X-Amz-Signature=2dc402cd308f893465b25cf07a3818c57c075fc1c8c61f52724cd5fcfb823435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654JWOBTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkTk9vu%2FttsXo3mcHw5XrlIXvEDX9%2FHDnksfxoTsey%2FAIhAK98UIl47j61Q5ItP1SaVADdoQ0Ohli1O2aCWm2pxBfkKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGG4MqhRACkgKzaHoq3AOqIB9bf6N4hi%2FE%2F6ZU5JudTRXEk3lsWdo%2FCoWROlrbIq8RPQ2Cr2EBNYjwIt82nRECQKElysHL7QQSg7hBWVFIBo4yh0nbF%2BE5ZbNfgJU1%2FfDSYZaDQcFwkmAVXSTPh80rWkKN8nJtSmUMeLxzONXJwWcr2uBfXGh%2Fq1B%2BmgoOEG8v7g9sLxz50aIToXx260HduZgMf9LlMSxtcPXs3YDtblgBRsk%2F988hSEHOCrasqJFSa04VicFw2XBf8fJoRkPfwxTd6nJoEd2gpkKju7IKlGSRcer0K327Q%2BISKG0d1XEz7FnWvVNo2qw2xSH3vSRCpd1xCgsWupiR%2BqaMvs5K6UpsaK%2FW%2BYFEWQEcj3QWQ3MkW%2F1ZRFaOSBHpxykpcZozY57y5Ftf9rr7KkcoiEfUASaa16xVlqfdzXN9rF64tedSZjfieaLng1v7FBMzT%2Fc%2BSo4xeUEi1W%2F2cIxGNWCRzizDnmuKf1is19CB%2BnKstP%2Fsf8X4Q%2BgJgzNh1gJTnNfM4toAHGsRH8nWBwHcCr2QiTsNE%2BXRh6iTinGBoTczHD1VFPqVCHHsHQHGVfGPcadwo4Oy9Uy6al%2BChkYH4SwR83Y6QlBvGcxvJMp%2BzkGqfjoIs%2Flm2huSEeBILzC%2BwafEBjqkARxYu8FXtFE1wg4hg99NO9%2BshHf08V%2BPg0%2F80VlOX8P%2FZCoAtIFcRzmhyvCi8mgsmk2EaWq6q7ZlzSe7LtJZgLKntPRpqqShjQYoJGfVoZnggkInl5XTUsZAa8uYVCNEGJoRKKRybZZqKsVlZMOyOAGhirzt8H2FOZ8ZExbtneD4iL94fjQ5vMfGBmT6jz2miv4gS6dHB7Voe9XTBfZl6pcj5ffX&X-Amz-Signature=77595ae2a81cf547bd9b9813a87ed8cb5907ab63a19b05286d51c72110d393a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654JWOBTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkTk9vu%2FttsXo3mcHw5XrlIXvEDX9%2FHDnksfxoTsey%2FAIhAK98UIl47j61Q5ItP1SaVADdoQ0Ohli1O2aCWm2pxBfkKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGG4MqhRACkgKzaHoq3AOqIB9bf6N4hi%2FE%2F6ZU5JudTRXEk3lsWdo%2FCoWROlrbIq8RPQ2Cr2EBNYjwIt82nRECQKElysHL7QQSg7hBWVFIBo4yh0nbF%2BE5ZbNfgJU1%2FfDSYZaDQcFwkmAVXSTPh80rWkKN8nJtSmUMeLxzONXJwWcr2uBfXGh%2Fq1B%2BmgoOEG8v7g9sLxz50aIToXx260HduZgMf9LlMSxtcPXs3YDtblgBRsk%2F988hSEHOCrasqJFSa04VicFw2XBf8fJoRkPfwxTd6nJoEd2gpkKju7IKlGSRcer0K327Q%2BISKG0d1XEz7FnWvVNo2qw2xSH3vSRCpd1xCgsWupiR%2BqaMvs5K6UpsaK%2FW%2BYFEWQEcj3QWQ3MkW%2F1ZRFaOSBHpxykpcZozY57y5Ftf9rr7KkcoiEfUASaa16xVlqfdzXN9rF64tedSZjfieaLng1v7FBMzT%2Fc%2BSo4xeUEi1W%2F2cIxGNWCRzizDnmuKf1is19CB%2BnKstP%2Fsf8X4Q%2BgJgzNh1gJTnNfM4toAHGsRH8nWBwHcCr2QiTsNE%2BXRh6iTinGBoTczHD1VFPqVCHHsHQHGVfGPcadwo4Oy9Uy6al%2BChkYH4SwR83Y6QlBvGcxvJMp%2BzkGqfjoIs%2Flm2huSEeBILzC%2BwafEBjqkARxYu8FXtFE1wg4hg99NO9%2BshHf08V%2BPg0%2F80VlOX8P%2FZCoAtIFcRzmhyvCi8mgsmk2EaWq6q7ZlzSe7LtJZgLKntPRpqqShjQYoJGfVoZnggkInl5XTUsZAa8uYVCNEGJoRKKRybZZqKsVlZMOyOAGhirzt8H2FOZ8ZExbtneD4iL94fjQ5vMfGBmT6jz2miv4gS6dHB7Voe9XTBfZl6pcj5ffX&X-Amz-Signature=81a7931cffefc2cdc7cda58d97a727e41c478e8db217a816d4e667679d8f3b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654JWOBTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkTk9vu%2FttsXo3mcHw5XrlIXvEDX9%2FHDnksfxoTsey%2FAIhAK98UIl47j61Q5ItP1SaVADdoQ0Ohli1O2aCWm2pxBfkKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGG4MqhRACkgKzaHoq3AOqIB9bf6N4hi%2FE%2F6ZU5JudTRXEk3lsWdo%2FCoWROlrbIq8RPQ2Cr2EBNYjwIt82nRECQKElysHL7QQSg7hBWVFIBo4yh0nbF%2BE5ZbNfgJU1%2FfDSYZaDQcFwkmAVXSTPh80rWkKN8nJtSmUMeLxzONXJwWcr2uBfXGh%2Fq1B%2BmgoOEG8v7g9sLxz50aIToXx260HduZgMf9LlMSxtcPXs3YDtblgBRsk%2F988hSEHOCrasqJFSa04VicFw2XBf8fJoRkPfwxTd6nJoEd2gpkKju7IKlGSRcer0K327Q%2BISKG0d1XEz7FnWvVNo2qw2xSH3vSRCpd1xCgsWupiR%2BqaMvs5K6UpsaK%2FW%2BYFEWQEcj3QWQ3MkW%2F1ZRFaOSBHpxykpcZozY57y5Ftf9rr7KkcoiEfUASaa16xVlqfdzXN9rF64tedSZjfieaLng1v7FBMzT%2Fc%2BSo4xeUEi1W%2F2cIxGNWCRzizDnmuKf1is19CB%2BnKstP%2Fsf8X4Q%2BgJgzNh1gJTnNfM4toAHGsRH8nWBwHcCr2QiTsNE%2BXRh6iTinGBoTczHD1VFPqVCHHsHQHGVfGPcadwo4Oy9Uy6al%2BChkYH4SwR83Y6QlBvGcxvJMp%2BzkGqfjoIs%2Flm2huSEeBILzC%2BwafEBjqkARxYu8FXtFE1wg4hg99NO9%2BshHf08V%2BPg0%2F80VlOX8P%2FZCoAtIFcRzmhyvCi8mgsmk2EaWq6q7ZlzSe7LtJZgLKntPRpqqShjQYoJGfVoZnggkInl5XTUsZAa8uYVCNEGJoRKKRybZZqKsVlZMOyOAGhirzt8H2FOZ8ZExbtneD4iL94fjQ5vMfGBmT6jz2miv4gS6dHB7Voe9XTBfZl6pcj5ffX&X-Amz-Signature=03c2bfd9552a334d8ff7e6c762643db263fd18af295b8a6ccde0044516a65621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654JWOBTI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkTk9vu%2FttsXo3mcHw5XrlIXvEDX9%2FHDnksfxoTsey%2FAIhAK98UIl47j61Q5ItP1SaVADdoQ0Ohli1O2aCWm2pxBfkKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGG4MqhRACkgKzaHoq3AOqIB9bf6N4hi%2FE%2F6ZU5JudTRXEk3lsWdo%2FCoWROlrbIq8RPQ2Cr2EBNYjwIt82nRECQKElysHL7QQSg7hBWVFIBo4yh0nbF%2BE5ZbNfgJU1%2FfDSYZaDQcFwkmAVXSTPh80rWkKN8nJtSmUMeLxzONXJwWcr2uBfXGh%2Fq1B%2BmgoOEG8v7g9sLxz50aIToXx260HduZgMf9LlMSxtcPXs3YDtblgBRsk%2F988hSEHOCrasqJFSa04VicFw2XBf8fJoRkPfwxTd6nJoEd2gpkKju7IKlGSRcer0K327Q%2BISKG0d1XEz7FnWvVNo2qw2xSH3vSRCpd1xCgsWupiR%2BqaMvs5K6UpsaK%2FW%2BYFEWQEcj3QWQ3MkW%2F1ZRFaOSBHpxykpcZozY57y5Ftf9rr7KkcoiEfUASaa16xVlqfdzXN9rF64tedSZjfieaLng1v7FBMzT%2Fc%2BSo4xeUEi1W%2F2cIxGNWCRzizDnmuKf1is19CB%2BnKstP%2Fsf8X4Q%2BgJgzNh1gJTnNfM4toAHGsRH8nWBwHcCr2QiTsNE%2BXRh6iTinGBoTczHD1VFPqVCHHsHQHGVfGPcadwo4Oy9Uy6al%2BChkYH4SwR83Y6QlBvGcxvJMp%2BzkGqfjoIs%2Flm2huSEeBILzC%2BwafEBjqkARxYu8FXtFE1wg4hg99NO9%2BshHf08V%2BPg0%2F80VlOX8P%2FZCoAtIFcRzmhyvCi8mgsmk2EaWq6q7ZlzSe7LtJZgLKntPRpqqShjQYoJGfVoZnggkInl5XTUsZAa8uYVCNEGJoRKKRybZZqKsVlZMOyOAGhirzt8H2FOZ8ZExbtneD4iL94fjQ5vMfGBmT6jz2miv4gS6dHB7Voe9XTBfZl6pcj5ffX&X-Amz-Signature=c9a121cb91e49e92dfb7890ef3affc299c01b763cc0b9ce496f737b84b11f6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
