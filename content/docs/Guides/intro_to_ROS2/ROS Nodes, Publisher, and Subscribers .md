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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDZW46T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHeILxN8OTuyJjxIBxhuCbMYpVFStrq5SSt5mL9CixKAIgDwNrfo9nRaAUbMVoB2nUNU1vp5ZmjTP0m0YkWjAp7Hgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNvpIdK3UllKh7jcGircA7IneU7bxPonOnLYzhWrCaBKCGO0Ph9gIjHm7C%2B5IhvsG8IflMth%2B%2B7dysHhXQM9o8RkCtOicnjoBc4aX73KTaGF5EQgPEBsdxYXZw3AffvhcQNQnZlJ0b0XrFjYpkPqbrMqB55XHC7k0cK2XUnXb09W7uDg%2BcHhUHbjeosWsY8vRRfn1wKIs5KLhRwts5yrTO7zfzn8oRMuPBQrfAmzZnHjM96bRfytIi6FpnfCDkcqwWs88v1OlXlGdMcDj%2FVPCMdwaE%2BW%2FJBw2tL3b18ZpUZnwoY8szQkyz9sGH%2FYDsXdsccETLVgvJgiKrK2e0xneIDYlPIyNXDzWAl1ZZNRgDpFy8fGsAXnliVu3vP7VJJgKJD0QVKHzXEThJB0zAXUWMGsE2fGEa8RA%2FEobivKs6qVRuEX%2FRxr2hOLc28jtR0FAYuk96L1YcrMZLkOKrEp93DtchfBFWx6tmf6TrlK6KWdOWQrRyWL5fUCL1qJrk20EWDSZScKAjs%2B4%2F6B2gBlufsVgl1kXYHXsMLQ7qm0T0NFQ6k4ijeA%2FFKS8HNBhbYfmhZ0r5eroI3Mr04UhTeE20ocnTNq%2FjX%2BvKkB1bQPPf4IJoO3cSb8NraT7nnZLbVSs8bGIdQ%2BrSrKPqN9MLvMvMQGOqUBXwxn2cwrSt43tYM1kFW8%2FiHVYC8Zcnfl7E8T2hdBIapO%2FIKe4HghLFj0vXHTvA3btFqfr3wFnuxVS2rW2mUzPzkby783NFajiGFnLqUmqeqdFnaV%2FGGWiJM%2Fac%2FhR31sQ4ccLDOdKPD%2Fewmd0%2F1%2B0H0Bvc1vItjmUqFKQ3fMv7Fj7yzy593%2FnGF2fVfgE77t%2B0OT%2BlkSobql6MNn02SUKh4WY6ry&X-Amz-Signature=83f28c1cb131fa46be3c74ac00b43b77ef28f4f913a06f9a9787a55100ee7463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDZW46T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHeILxN8OTuyJjxIBxhuCbMYpVFStrq5SSt5mL9CixKAIgDwNrfo9nRaAUbMVoB2nUNU1vp5ZmjTP0m0YkWjAp7Hgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNvpIdK3UllKh7jcGircA7IneU7bxPonOnLYzhWrCaBKCGO0Ph9gIjHm7C%2B5IhvsG8IflMth%2B%2B7dysHhXQM9o8RkCtOicnjoBc4aX73KTaGF5EQgPEBsdxYXZw3AffvhcQNQnZlJ0b0XrFjYpkPqbrMqB55XHC7k0cK2XUnXb09W7uDg%2BcHhUHbjeosWsY8vRRfn1wKIs5KLhRwts5yrTO7zfzn8oRMuPBQrfAmzZnHjM96bRfytIi6FpnfCDkcqwWs88v1OlXlGdMcDj%2FVPCMdwaE%2BW%2FJBw2tL3b18ZpUZnwoY8szQkyz9sGH%2FYDsXdsccETLVgvJgiKrK2e0xneIDYlPIyNXDzWAl1ZZNRgDpFy8fGsAXnliVu3vP7VJJgKJD0QVKHzXEThJB0zAXUWMGsE2fGEa8RA%2FEobivKs6qVRuEX%2FRxr2hOLc28jtR0FAYuk96L1YcrMZLkOKrEp93DtchfBFWx6tmf6TrlK6KWdOWQrRyWL5fUCL1qJrk20EWDSZScKAjs%2B4%2F6B2gBlufsVgl1kXYHXsMLQ7qm0T0NFQ6k4ijeA%2FFKS8HNBhbYfmhZ0r5eroI3Mr04UhTeE20ocnTNq%2FjX%2BvKkB1bQPPf4IJoO3cSb8NraT7nnZLbVSs8bGIdQ%2BrSrKPqN9MLvMvMQGOqUBXwxn2cwrSt43tYM1kFW8%2FiHVYC8Zcnfl7E8T2hdBIapO%2FIKe4HghLFj0vXHTvA3btFqfr3wFnuxVS2rW2mUzPzkby783NFajiGFnLqUmqeqdFnaV%2FGGWiJM%2Fac%2FhR31sQ4ccLDOdKPD%2Fewmd0%2F1%2B0H0Bvc1vItjmUqFKQ3fMv7Fj7yzy593%2FnGF2fVfgE77t%2B0OT%2BlkSobql6MNn02SUKh4WY6ry&X-Amz-Signature=ec13bc818c18ae142a3c6db28340b7eb16dc4e6e66f5456e08f470ca71a53079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDZW46T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHeILxN8OTuyJjxIBxhuCbMYpVFStrq5SSt5mL9CixKAIgDwNrfo9nRaAUbMVoB2nUNU1vp5ZmjTP0m0YkWjAp7Hgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNvpIdK3UllKh7jcGircA7IneU7bxPonOnLYzhWrCaBKCGO0Ph9gIjHm7C%2B5IhvsG8IflMth%2B%2B7dysHhXQM9o8RkCtOicnjoBc4aX73KTaGF5EQgPEBsdxYXZw3AffvhcQNQnZlJ0b0XrFjYpkPqbrMqB55XHC7k0cK2XUnXb09W7uDg%2BcHhUHbjeosWsY8vRRfn1wKIs5KLhRwts5yrTO7zfzn8oRMuPBQrfAmzZnHjM96bRfytIi6FpnfCDkcqwWs88v1OlXlGdMcDj%2FVPCMdwaE%2BW%2FJBw2tL3b18ZpUZnwoY8szQkyz9sGH%2FYDsXdsccETLVgvJgiKrK2e0xneIDYlPIyNXDzWAl1ZZNRgDpFy8fGsAXnliVu3vP7VJJgKJD0QVKHzXEThJB0zAXUWMGsE2fGEa8RA%2FEobivKs6qVRuEX%2FRxr2hOLc28jtR0FAYuk96L1YcrMZLkOKrEp93DtchfBFWx6tmf6TrlK6KWdOWQrRyWL5fUCL1qJrk20EWDSZScKAjs%2B4%2F6B2gBlufsVgl1kXYHXsMLQ7qm0T0NFQ6k4ijeA%2FFKS8HNBhbYfmhZ0r5eroI3Mr04UhTeE20ocnTNq%2FjX%2BvKkB1bQPPf4IJoO3cSb8NraT7nnZLbVSs8bGIdQ%2BrSrKPqN9MLvMvMQGOqUBXwxn2cwrSt43tYM1kFW8%2FiHVYC8Zcnfl7E8T2hdBIapO%2FIKe4HghLFj0vXHTvA3btFqfr3wFnuxVS2rW2mUzPzkby783NFajiGFnLqUmqeqdFnaV%2FGGWiJM%2Fac%2FhR31sQ4ccLDOdKPD%2Fewmd0%2F1%2B0H0Bvc1vItjmUqFKQ3fMv7Fj7yzy593%2FnGF2fVfgE77t%2B0OT%2BlkSobql6MNn02SUKh4WY6ry&X-Amz-Signature=0e72431fa768308005503a58ab4e7b9b3b7106392eae1dc2216798e2a77a26dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDZW46T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHeILxN8OTuyJjxIBxhuCbMYpVFStrq5SSt5mL9CixKAIgDwNrfo9nRaAUbMVoB2nUNU1vp5ZmjTP0m0YkWjAp7Hgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNvpIdK3UllKh7jcGircA7IneU7bxPonOnLYzhWrCaBKCGO0Ph9gIjHm7C%2B5IhvsG8IflMth%2B%2B7dysHhXQM9o8RkCtOicnjoBc4aX73KTaGF5EQgPEBsdxYXZw3AffvhcQNQnZlJ0b0XrFjYpkPqbrMqB55XHC7k0cK2XUnXb09W7uDg%2BcHhUHbjeosWsY8vRRfn1wKIs5KLhRwts5yrTO7zfzn8oRMuPBQrfAmzZnHjM96bRfytIi6FpnfCDkcqwWs88v1OlXlGdMcDj%2FVPCMdwaE%2BW%2FJBw2tL3b18ZpUZnwoY8szQkyz9sGH%2FYDsXdsccETLVgvJgiKrK2e0xneIDYlPIyNXDzWAl1ZZNRgDpFy8fGsAXnliVu3vP7VJJgKJD0QVKHzXEThJB0zAXUWMGsE2fGEa8RA%2FEobivKs6qVRuEX%2FRxr2hOLc28jtR0FAYuk96L1YcrMZLkOKrEp93DtchfBFWx6tmf6TrlK6KWdOWQrRyWL5fUCL1qJrk20EWDSZScKAjs%2B4%2F6B2gBlufsVgl1kXYHXsMLQ7qm0T0NFQ6k4ijeA%2FFKS8HNBhbYfmhZ0r5eroI3Mr04UhTeE20ocnTNq%2FjX%2BvKkB1bQPPf4IJoO3cSb8NraT7nnZLbVSs8bGIdQ%2BrSrKPqN9MLvMvMQGOqUBXwxn2cwrSt43tYM1kFW8%2FiHVYC8Zcnfl7E8T2hdBIapO%2FIKe4HghLFj0vXHTvA3btFqfr3wFnuxVS2rW2mUzPzkby783NFajiGFnLqUmqeqdFnaV%2FGGWiJM%2Fac%2FhR31sQ4ccLDOdKPD%2Fewmd0%2F1%2B0H0Bvc1vItjmUqFKQ3fMv7Fj7yzy593%2FnGF2fVfgE77t%2B0OT%2BlkSobql6MNn02SUKh4WY6ry&X-Amz-Signature=c35ceef166e762d4c048a479aa3a1992edb18002efd5c2a74de1adbecd44afa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDZW46T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHeILxN8OTuyJjxIBxhuCbMYpVFStrq5SSt5mL9CixKAIgDwNrfo9nRaAUbMVoB2nUNU1vp5ZmjTP0m0YkWjAp7Hgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNvpIdK3UllKh7jcGircA7IneU7bxPonOnLYzhWrCaBKCGO0Ph9gIjHm7C%2B5IhvsG8IflMth%2B%2B7dysHhXQM9o8RkCtOicnjoBc4aX73KTaGF5EQgPEBsdxYXZw3AffvhcQNQnZlJ0b0XrFjYpkPqbrMqB55XHC7k0cK2XUnXb09W7uDg%2BcHhUHbjeosWsY8vRRfn1wKIs5KLhRwts5yrTO7zfzn8oRMuPBQrfAmzZnHjM96bRfytIi6FpnfCDkcqwWs88v1OlXlGdMcDj%2FVPCMdwaE%2BW%2FJBw2tL3b18ZpUZnwoY8szQkyz9sGH%2FYDsXdsccETLVgvJgiKrK2e0xneIDYlPIyNXDzWAl1ZZNRgDpFy8fGsAXnliVu3vP7VJJgKJD0QVKHzXEThJB0zAXUWMGsE2fGEa8RA%2FEobivKs6qVRuEX%2FRxr2hOLc28jtR0FAYuk96L1YcrMZLkOKrEp93DtchfBFWx6tmf6TrlK6KWdOWQrRyWL5fUCL1qJrk20EWDSZScKAjs%2B4%2F6B2gBlufsVgl1kXYHXsMLQ7qm0T0NFQ6k4ijeA%2FFKS8HNBhbYfmhZ0r5eroI3Mr04UhTeE20ocnTNq%2FjX%2BvKkB1bQPPf4IJoO3cSb8NraT7nnZLbVSs8bGIdQ%2BrSrKPqN9MLvMvMQGOqUBXwxn2cwrSt43tYM1kFW8%2FiHVYC8Zcnfl7E8T2hdBIapO%2FIKe4HghLFj0vXHTvA3btFqfr3wFnuxVS2rW2mUzPzkby783NFajiGFnLqUmqeqdFnaV%2FGGWiJM%2Fac%2FhR31sQ4ccLDOdKPD%2Fewmd0%2F1%2B0H0Bvc1vItjmUqFKQ3fMv7Fj7yzy593%2FnGF2fVfgE77t%2B0OT%2BlkSobql6MNn02SUKh4WY6ry&X-Amz-Signature=b9c70fcf5af2ff33e846c200914a4353e348d7b751e87a6bd0b5e3a098bdc018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDZW46T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHeILxN8OTuyJjxIBxhuCbMYpVFStrq5SSt5mL9CixKAIgDwNrfo9nRaAUbMVoB2nUNU1vp5ZmjTP0m0YkWjAp7Hgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNvpIdK3UllKh7jcGircA7IneU7bxPonOnLYzhWrCaBKCGO0Ph9gIjHm7C%2B5IhvsG8IflMth%2B%2B7dysHhXQM9o8RkCtOicnjoBc4aX73KTaGF5EQgPEBsdxYXZw3AffvhcQNQnZlJ0b0XrFjYpkPqbrMqB55XHC7k0cK2XUnXb09W7uDg%2BcHhUHbjeosWsY8vRRfn1wKIs5KLhRwts5yrTO7zfzn8oRMuPBQrfAmzZnHjM96bRfytIi6FpnfCDkcqwWs88v1OlXlGdMcDj%2FVPCMdwaE%2BW%2FJBw2tL3b18ZpUZnwoY8szQkyz9sGH%2FYDsXdsccETLVgvJgiKrK2e0xneIDYlPIyNXDzWAl1ZZNRgDpFy8fGsAXnliVu3vP7VJJgKJD0QVKHzXEThJB0zAXUWMGsE2fGEa8RA%2FEobivKs6qVRuEX%2FRxr2hOLc28jtR0FAYuk96L1YcrMZLkOKrEp93DtchfBFWx6tmf6TrlK6KWdOWQrRyWL5fUCL1qJrk20EWDSZScKAjs%2B4%2F6B2gBlufsVgl1kXYHXsMLQ7qm0T0NFQ6k4ijeA%2FFKS8HNBhbYfmhZ0r5eroI3Mr04UhTeE20ocnTNq%2FjX%2BvKkB1bQPPf4IJoO3cSb8NraT7nnZLbVSs8bGIdQ%2BrSrKPqN9MLvMvMQGOqUBXwxn2cwrSt43tYM1kFW8%2FiHVYC8Zcnfl7E8T2hdBIapO%2FIKe4HghLFj0vXHTvA3btFqfr3wFnuxVS2rW2mUzPzkby783NFajiGFnLqUmqeqdFnaV%2FGGWiJM%2Fac%2FhR31sQ4ccLDOdKPD%2Fewmd0%2F1%2B0H0Bvc1vItjmUqFKQ3fMv7Fj7yzy593%2FnGF2fVfgE77t%2B0OT%2BlkSobql6MNn02SUKh4WY6ry&X-Amz-Signature=b6ac37d86ec4b945ea2fc6b373d572885a800817f599c0f31d86eb1f685878da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDZW46T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHeILxN8OTuyJjxIBxhuCbMYpVFStrq5SSt5mL9CixKAIgDwNrfo9nRaAUbMVoB2nUNU1vp5ZmjTP0m0YkWjAp7Hgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNvpIdK3UllKh7jcGircA7IneU7bxPonOnLYzhWrCaBKCGO0Ph9gIjHm7C%2B5IhvsG8IflMth%2B%2B7dysHhXQM9o8RkCtOicnjoBc4aX73KTaGF5EQgPEBsdxYXZw3AffvhcQNQnZlJ0b0XrFjYpkPqbrMqB55XHC7k0cK2XUnXb09W7uDg%2BcHhUHbjeosWsY8vRRfn1wKIs5KLhRwts5yrTO7zfzn8oRMuPBQrfAmzZnHjM96bRfytIi6FpnfCDkcqwWs88v1OlXlGdMcDj%2FVPCMdwaE%2BW%2FJBw2tL3b18ZpUZnwoY8szQkyz9sGH%2FYDsXdsccETLVgvJgiKrK2e0xneIDYlPIyNXDzWAl1ZZNRgDpFy8fGsAXnliVu3vP7VJJgKJD0QVKHzXEThJB0zAXUWMGsE2fGEa8RA%2FEobivKs6qVRuEX%2FRxr2hOLc28jtR0FAYuk96L1YcrMZLkOKrEp93DtchfBFWx6tmf6TrlK6KWdOWQrRyWL5fUCL1qJrk20EWDSZScKAjs%2B4%2F6B2gBlufsVgl1kXYHXsMLQ7qm0T0NFQ6k4ijeA%2FFKS8HNBhbYfmhZ0r5eroI3Mr04UhTeE20ocnTNq%2FjX%2BvKkB1bQPPf4IJoO3cSb8NraT7nnZLbVSs8bGIdQ%2BrSrKPqN9MLvMvMQGOqUBXwxn2cwrSt43tYM1kFW8%2FiHVYC8Zcnfl7E8T2hdBIapO%2FIKe4HghLFj0vXHTvA3btFqfr3wFnuxVS2rW2mUzPzkby783NFajiGFnLqUmqeqdFnaV%2FGGWiJM%2Fac%2FhR31sQ4ccLDOdKPD%2Fewmd0%2F1%2B0H0Bvc1vItjmUqFKQ3fMv7Fj7yzy593%2FnGF2fVfgE77t%2B0OT%2BlkSobql6MNn02SUKh4WY6ry&X-Amz-Signature=3025359cae814c1fa12cd5297f625b8b8553b7c188ef97e6a11727a4ac13c049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDZW46T%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHeILxN8OTuyJjxIBxhuCbMYpVFStrq5SSt5mL9CixKAIgDwNrfo9nRaAUbMVoB2nUNU1vp5ZmjTP0m0YkWjAp7Hgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNvpIdK3UllKh7jcGircA7IneU7bxPonOnLYzhWrCaBKCGO0Ph9gIjHm7C%2B5IhvsG8IflMth%2B%2B7dysHhXQM9o8RkCtOicnjoBc4aX73KTaGF5EQgPEBsdxYXZw3AffvhcQNQnZlJ0b0XrFjYpkPqbrMqB55XHC7k0cK2XUnXb09W7uDg%2BcHhUHbjeosWsY8vRRfn1wKIs5KLhRwts5yrTO7zfzn8oRMuPBQrfAmzZnHjM96bRfytIi6FpnfCDkcqwWs88v1OlXlGdMcDj%2FVPCMdwaE%2BW%2FJBw2tL3b18ZpUZnwoY8szQkyz9sGH%2FYDsXdsccETLVgvJgiKrK2e0xneIDYlPIyNXDzWAl1ZZNRgDpFy8fGsAXnliVu3vP7VJJgKJD0QVKHzXEThJB0zAXUWMGsE2fGEa8RA%2FEobivKs6qVRuEX%2FRxr2hOLc28jtR0FAYuk96L1YcrMZLkOKrEp93DtchfBFWx6tmf6TrlK6KWdOWQrRyWL5fUCL1qJrk20EWDSZScKAjs%2B4%2F6B2gBlufsVgl1kXYHXsMLQ7qm0T0NFQ6k4ijeA%2FFKS8HNBhbYfmhZ0r5eroI3Mr04UhTeE20ocnTNq%2FjX%2BvKkB1bQPPf4IJoO3cSb8NraT7nnZLbVSs8bGIdQ%2BrSrKPqN9MLvMvMQGOqUBXwxn2cwrSt43tYM1kFW8%2FiHVYC8Zcnfl7E8T2hdBIapO%2FIKe4HghLFj0vXHTvA3btFqfr3wFnuxVS2rW2mUzPzkby783NFajiGFnLqUmqeqdFnaV%2FGGWiJM%2Fac%2FhR31sQ4ccLDOdKPD%2Fewmd0%2F1%2B0H0Bvc1vItjmUqFKQ3fMv7Fj7yzy593%2FnGF2fVfgE77t%2B0OT%2BlkSobql6MNn02SUKh4WY6ry&X-Amz-Signature=2e521e065f7d1aab96f1d7810508a9fa932ba5a0a93238e6ef5b5f5df4ea7cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
