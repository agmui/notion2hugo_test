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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GQ7YLL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAsANdIE7Eg%2Bul4D8BzCaoJOR8nmT0yhxbOTxyxNBbHgAiArLfHeN2UdXEcMFIpH5D1IaR5lhf6Rvk1J%2FgtReCHE1Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMOqTB2B0eDeJLZAnmKtwDXnU2zYd8%2BEAJpoybJ5YMSi7hbtKjUSmWOn%2FLbt8zFVNgqBqf6Z%2FG3odDFM%2B5nargKk026ncNzjsZ41XalAIh8GgvbE7GAxHUtRHeOSqmHDGtTZdJ2C2fIQxA7lh9gWSH2ID2eKaM4nOHFd0rWmNeMzJfR2u898EYQvRqahsBeqzYODE3wAXR60ocfWfCpi6qyYTmAaxwg9ay6DoxvF%2FAQadGLQoGwBpzrxgt3LJZYoykkS8eXrMM7QfdAm06sMb6Fiz5dqNkcFkVocdz764bci5x6VpZ7DLAiYzwWfI%2BGMtv3zU0fU3g7T7IqKtt%2BNbbQMU0T5wa2JlyZK45nWcJDSJJZ1cgaHSnEeVZPa1gln%2FI4AtEq2VTyYP0thRSWi5vfeBKyjqzeO9aZX2bbdZzWRq5sQhY669bDeFOGYk4spl6BySkrbfHM%2BrqpKUYBsysfiXbMY5xi52m3qvE1G%2FMlBjpU4OswICrWK%2Fgh6eT4vosb9zBeglf%2BWOZ%2FflfvWQAQXREVCSOOcKeLMngRY9nGtKp5jzN1CiEJKvA7Y6lV80i33CiuY2zuFEueuxB6w0wviH0F1eMA8%2FE7bOL77h9yCLZV3fu9neSH3Hs6C%2FNEYUsSBeQTLHizYvPN2gwusPtwgY6pgG8ztQX3EWgx0pLX2tJmumTPWhPi%2BkIM4HapSdiB0LVfhhADz%2FaSW1FwbbjGSif7c9mUduIGgz1A4yx8%2B1lspCTOwT7VNAQLZMfKR58dJTGlw2jYLIxYwEprpsTEfv2lwxix%2FOgqS2C2s%2F2xsr6Q5fOGEDCk2d6T9dI85%2BK%2FsPWdc1yl8hp34%2Ft5%2BweQBV9%2BF5eleLP8F4FbidvqRhW2v36X80Qh4vB&X-Amz-Signature=4358e32a8a4c65b218cf6390d03f4d1dbfcce1ef378b8ca109f310601e9b2080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GQ7YLL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAsANdIE7Eg%2Bul4D8BzCaoJOR8nmT0yhxbOTxyxNBbHgAiArLfHeN2UdXEcMFIpH5D1IaR5lhf6Rvk1J%2FgtReCHE1Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMOqTB2B0eDeJLZAnmKtwDXnU2zYd8%2BEAJpoybJ5YMSi7hbtKjUSmWOn%2FLbt8zFVNgqBqf6Z%2FG3odDFM%2B5nargKk026ncNzjsZ41XalAIh8GgvbE7GAxHUtRHeOSqmHDGtTZdJ2C2fIQxA7lh9gWSH2ID2eKaM4nOHFd0rWmNeMzJfR2u898EYQvRqahsBeqzYODE3wAXR60ocfWfCpi6qyYTmAaxwg9ay6DoxvF%2FAQadGLQoGwBpzrxgt3LJZYoykkS8eXrMM7QfdAm06sMb6Fiz5dqNkcFkVocdz764bci5x6VpZ7DLAiYzwWfI%2BGMtv3zU0fU3g7T7IqKtt%2BNbbQMU0T5wa2JlyZK45nWcJDSJJZ1cgaHSnEeVZPa1gln%2FI4AtEq2VTyYP0thRSWi5vfeBKyjqzeO9aZX2bbdZzWRq5sQhY669bDeFOGYk4spl6BySkrbfHM%2BrqpKUYBsysfiXbMY5xi52m3qvE1G%2FMlBjpU4OswICrWK%2Fgh6eT4vosb9zBeglf%2BWOZ%2FflfvWQAQXREVCSOOcKeLMngRY9nGtKp5jzN1CiEJKvA7Y6lV80i33CiuY2zuFEueuxB6w0wviH0F1eMA8%2FE7bOL77h9yCLZV3fu9neSH3Hs6C%2FNEYUsSBeQTLHizYvPN2gwusPtwgY6pgG8ztQX3EWgx0pLX2tJmumTPWhPi%2BkIM4HapSdiB0LVfhhADz%2FaSW1FwbbjGSif7c9mUduIGgz1A4yx8%2B1lspCTOwT7VNAQLZMfKR58dJTGlw2jYLIxYwEprpsTEfv2lwxix%2FOgqS2C2s%2F2xsr6Q5fOGEDCk2d6T9dI85%2BK%2FsPWdc1yl8hp34%2Ft5%2BweQBV9%2BF5eleLP8F4FbidvqRhW2v36X80Qh4vB&X-Amz-Signature=8d0eef372bba7abdc967ec2e05dde4f6ff63e42a4a891fc34891c0ae28a6ea83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GQ7YLL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAsANdIE7Eg%2Bul4D8BzCaoJOR8nmT0yhxbOTxyxNBbHgAiArLfHeN2UdXEcMFIpH5D1IaR5lhf6Rvk1J%2FgtReCHE1Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMOqTB2B0eDeJLZAnmKtwDXnU2zYd8%2BEAJpoybJ5YMSi7hbtKjUSmWOn%2FLbt8zFVNgqBqf6Z%2FG3odDFM%2B5nargKk026ncNzjsZ41XalAIh8GgvbE7GAxHUtRHeOSqmHDGtTZdJ2C2fIQxA7lh9gWSH2ID2eKaM4nOHFd0rWmNeMzJfR2u898EYQvRqahsBeqzYODE3wAXR60ocfWfCpi6qyYTmAaxwg9ay6DoxvF%2FAQadGLQoGwBpzrxgt3LJZYoykkS8eXrMM7QfdAm06sMb6Fiz5dqNkcFkVocdz764bci5x6VpZ7DLAiYzwWfI%2BGMtv3zU0fU3g7T7IqKtt%2BNbbQMU0T5wa2JlyZK45nWcJDSJJZ1cgaHSnEeVZPa1gln%2FI4AtEq2VTyYP0thRSWi5vfeBKyjqzeO9aZX2bbdZzWRq5sQhY669bDeFOGYk4spl6BySkrbfHM%2BrqpKUYBsysfiXbMY5xi52m3qvE1G%2FMlBjpU4OswICrWK%2Fgh6eT4vosb9zBeglf%2BWOZ%2FflfvWQAQXREVCSOOcKeLMngRY9nGtKp5jzN1CiEJKvA7Y6lV80i33CiuY2zuFEueuxB6w0wviH0F1eMA8%2FE7bOL77h9yCLZV3fu9neSH3Hs6C%2FNEYUsSBeQTLHizYvPN2gwusPtwgY6pgG8ztQX3EWgx0pLX2tJmumTPWhPi%2BkIM4HapSdiB0LVfhhADz%2FaSW1FwbbjGSif7c9mUduIGgz1A4yx8%2B1lspCTOwT7VNAQLZMfKR58dJTGlw2jYLIxYwEprpsTEfv2lwxix%2FOgqS2C2s%2F2xsr6Q5fOGEDCk2d6T9dI85%2BK%2FsPWdc1yl8hp34%2Ft5%2BweQBV9%2BF5eleLP8F4FbidvqRhW2v36X80Qh4vB&X-Amz-Signature=7101a39f162f184df5495b9a08e920304f161b9c46e331ad8011651f44181004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GQ7YLL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAsANdIE7Eg%2Bul4D8BzCaoJOR8nmT0yhxbOTxyxNBbHgAiArLfHeN2UdXEcMFIpH5D1IaR5lhf6Rvk1J%2FgtReCHE1Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMOqTB2B0eDeJLZAnmKtwDXnU2zYd8%2BEAJpoybJ5YMSi7hbtKjUSmWOn%2FLbt8zFVNgqBqf6Z%2FG3odDFM%2B5nargKk026ncNzjsZ41XalAIh8GgvbE7GAxHUtRHeOSqmHDGtTZdJ2C2fIQxA7lh9gWSH2ID2eKaM4nOHFd0rWmNeMzJfR2u898EYQvRqahsBeqzYODE3wAXR60ocfWfCpi6qyYTmAaxwg9ay6DoxvF%2FAQadGLQoGwBpzrxgt3LJZYoykkS8eXrMM7QfdAm06sMb6Fiz5dqNkcFkVocdz764bci5x6VpZ7DLAiYzwWfI%2BGMtv3zU0fU3g7T7IqKtt%2BNbbQMU0T5wa2JlyZK45nWcJDSJJZ1cgaHSnEeVZPa1gln%2FI4AtEq2VTyYP0thRSWi5vfeBKyjqzeO9aZX2bbdZzWRq5sQhY669bDeFOGYk4spl6BySkrbfHM%2BrqpKUYBsysfiXbMY5xi52m3qvE1G%2FMlBjpU4OswICrWK%2Fgh6eT4vosb9zBeglf%2BWOZ%2FflfvWQAQXREVCSOOcKeLMngRY9nGtKp5jzN1CiEJKvA7Y6lV80i33CiuY2zuFEueuxB6w0wviH0F1eMA8%2FE7bOL77h9yCLZV3fu9neSH3Hs6C%2FNEYUsSBeQTLHizYvPN2gwusPtwgY6pgG8ztQX3EWgx0pLX2tJmumTPWhPi%2BkIM4HapSdiB0LVfhhADz%2FaSW1FwbbjGSif7c9mUduIGgz1A4yx8%2B1lspCTOwT7VNAQLZMfKR58dJTGlw2jYLIxYwEprpsTEfv2lwxix%2FOgqS2C2s%2F2xsr6Q5fOGEDCk2d6T9dI85%2BK%2FsPWdc1yl8hp34%2Ft5%2BweQBV9%2BF5eleLP8F4FbidvqRhW2v36X80Qh4vB&X-Amz-Signature=2a7ab8c11439c98e85527423693838feb6d1efb5eb24f4397d2108ed8e84d348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GQ7YLL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAsANdIE7Eg%2Bul4D8BzCaoJOR8nmT0yhxbOTxyxNBbHgAiArLfHeN2UdXEcMFIpH5D1IaR5lhf6Rvk1J%2FgtReCHE1Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMOqTB2B0eDeJLZAnmKtwDXnU2zYd8%2BEAJpoybJ5YMSi7hbtKjUSmWOn%2FLbt8zFVNgqBqf6Z%2FG3odDFM%2B5nargKk026ncNzjsZ41XalAIh8GgvbE7GAxHUtRHeOSqmHDGtTZdJ2C2fIQxA7lh9gWSH2ID2eKaM4nOHFd0rWmNeMzJfR2u898EYQvRqahsBeqzYODE3wAXR60ocfWfCpi6qyYTmAaxwg9ay6DoxvF%2FAQadGLQoGwBpzrxgt3LJZYoykkS8eXrMM7QfdAm06sMb6Fiz5dqNkcFkVocdz764bci5x6VpZ7DLAiYzwWfI%2BGMtv3zU0fU3g7T7IqKtt%2BNbbQMU0T5wa2JlyZK45nWcJDSJJZ1cgaHSnEeVZPa1gln%2FI4AtEq2VTyYP0thRSWi5vfeBKyjqzeO9aZX2bbdZzWRq5sQhY669bDeFOGYk4spl6BySkrbfHM%2BrqpKUYBsysfiXbMY5xi52m3qvE1G%2FMlBjpU4OswICrWK%2Fgh6eT4vosb9zBeglf%2BWOZ%2FflfvWQAQXREVCSOOcKeLMngRY9nGtKp5jzN1CiEJKvA7Y6lV80i33CiuY2zuFEueuxB6w0wviH0F1eMA8%2FE7bOL77h9yCLZV3fu9neSH3Hs6C%2FNEYUsSBeQTLHizYvPN2gwusPtwgY6pgG8ztQX3EWgx0pLX2tJmumTPWhPi%2BkIM4HapSdiB0LVfhhADz%2FaSW1FwbbjGSif7c9mUduIGgz1A4yx8%2B1lspCTOwT7VNAQLZMfKR58dJTGlw2jYLIxYwEprpsTEfv2lwxix%2FOgqS2C2s%2F2xsr6Q5fOGEDCk2d6T9dI85%2BK%2FsPWdc1yl8hp34%2Ft5%2BweQBV9%2BF5eleLP8F4FbidvqRhW2v36X80Qh4vB&X-Amz-Signature=f837cdfc754b9afe8b2b33cac94e849b95f8ecd460557a36cda4cd9e3dc4c3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GQ7YLL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAsANdIE7Eg%2Bul4D8BzCaoJOR8nmT0yhxbOTxyxNBbHgAiArLfHeN2UdXEcMFIpH5D1IaR5lhf6Rvk1J%2FgtReCHE1Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMOqTB2B0eDeJLZAnmKtwDXnU2zYd8%2BEAJpoybJ5YMSi7hbtKjUSmWOn%2FLbt8zFVNgqBqf6Z%2FG3odDFM%2B5nargKk026ncNzjsZ41XalAIh8GgvbE7GAxHUtRHeOSqmHDGtTZdJ2C2fIQxA7lh9gWSH2ID2eKaM4nOHFd0rWmNeMzJfR2u898EYQvRqahsBeqzYODE3wAXR60ocfWfCpi6qyYTmAaxwg9ay6DoxvF%2FAQadGLQoGwBpzrxgt3LJZYoykkS8eXrMM7QfdAm06sMb6Fiz5dqNkcFkVocdz764bci5x6VpZ7DLAiYzwWfI%2BGMtv3zU0fU3g7T7IqKtt%2BNbbQMU0T5wa2JlyZK45nWcJDSJJZ1cgaHSnEeVZPa1gln%2FI4AtEq2VTyYP0thRSWi5vfeBKyjqzeO9aZX2bbdZzWRq5sQhY669bDeFOGYk4spl6BySkrbfHM%2BrqpKUYBsysfiXbMY5xi52m3qvE1G%2FMlBjpU4OswICrWK%2Fgh6eT4vosb9zBeglf%2BWOZ%2FflfvWQAQXREVCSOOcKeLMngRY9nGtKp5jzN1CiEJKvA7Y6lV80i33CiuY2zuFEueuxB6w0wviH0F1eMA8%2FE7bOL77h9yCLZV3fu9neSH3Hs6C%2FNEYUsSBeQTLHizYvPN2gwusPtwgY6pgG8ztQX3EWgx0pLX2tJmumTPWhPi%2BkIM4HapSdiB0LVfhhADz%2FaSW1FwbbjGSif7c9mUduIGgz1A4yx8%2B1lspCTOwT7VNAQLZMfKR58dJTGlw2jYLIxYwEprpsTEfv2lwxix%2FOgqS2C2s%2F2xsr6Q5fOGEDCk2d6T9dI85%2BK%2FsPWdc1yl8hp34%2Ft5%2BweQBV9%2BF5eleLP8F4FbidvqRhW2v36X80Qh4vB&X-Amz-Signature=5263678c1310b828da1558b3e6b0fc00d4a62c6f8279173418748c206a0f6aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GQ7YLL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAsANdIE7Eg%2Bul4D8BzCaoJOR8nmT0yhxbOTxyxNBbHgAiArLfHeN2UdXEcMFIpH5D1IaR5lhf6Rvk1J%2FgtReCHE1Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMOqTB2B0eDeJLZAnmKtwDXnU2zYd8%2BEAJpoybJ5YMSi7hbtKjUSmWOn%2FLbt8zFVNgqBqf6Z%2FG3odDFM%2B5nargKk026ncNzjsZ41XalAIh8GgvbE7GAxHUtRHeOSqmHDGtTZdJ2C2fIQxA7lh9gWSH2ID2eKaM4nOHFd0rWmNeMzJfR2u898EYQvRqahsBeqzYODE3wAXR60ocfWfCpi6qyYTmAaxwg9ay6DoxvF%2FAQadGLQoGwBpzrxgt3LJZYoykkS8eXrMM7QfdAm06sMb6Fiz5dqNkcFkVocdz764bci5x6VpZ7DLAiYzwWfI%2BGMtv3zU0fU3g7T7IqKtt%2BNbbQMU0T5wa2JlyZK45nWcJDSJJZ1cgaHSnEeVZPa1gln%2FI4AtEq2VTyYP0thRSWi5vfeBKyjqzeO9aZX2bbdZzWRq5sQhY669bDeFOGYk4spl6BySkrbfHM%2BrqpKUYBsysfiXbMY5xi52m3qvE1G%2FMlBjpU4OswICrWK%2Fgh6eT4vosb9zBeglf%2BWOZ%2FflfvWQAQXREVCSOOcKeLMngRY9nGtKp5jzN1CiEJKvA7Y6lV80i33CiuY2zuFEueuxB6w0wviH0F1eMA8%2FE7bOL77h9yCLZV3fu9neSH3Hs6C%2FNEYUsSBeQTLHizYvPN2gwusPtwgY6pgG8ztQX3EWgx0pLX2tJmumTPWhPi%2BkIM4HapSdiB0LVfhhADz%2FaSW1FwbbjGSif7c9mUduIGgz1A4yx8%2B1lspCTOwT7VNAQLZMfKR58dJTGlw2jYLIxYwEprpsTEfv2lwxix%2FOgqS2C2s%2F2xsr6Q5fOGEDCk2d6T9dI85%2BK%2FsPWdc1yl8hp34%2Ft5%2BweQBV9%2BF5eleLP8F4FbidvqRhW2v36X80Qh4vB&X-Amz-Signature=4305d74eaf2bb366ebc06fe969ce0c373a8bc1e25b0c0268ffba2afa57d48280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GQ7YLL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAsANdIE7Eg%2Bul4D8BzCaoJOR8nmT0yhxbOTxyxNBbHgAiArLfHeN2UdXEcMFIpH5D1IaR5lhf6Rvk1J%2FgtReCHE1Cr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMOqTB2B0eDeJLZAnmKtwDXnU2zYd8%2BEAJpoybJ5YMSi7hbtKjUSmWOn%2FLbt8zFVNgqBqf6Z%2FG3odDFM%2B5nargKk026ncNzjsZ41XalAIh8GgvbE7GAxHUtRHeOSqmHDGtTZdJ2C2fIQxA7lh9gWSH2ID2eKaM4nOHFd0rWmNeMzJfR2u898EYQvRqahsBeqzYODE3wAXR60ocfWfCpi6qyYTmAaxwg9ay6DoxvF%2FAQadGLQoGwBpzrxgt3LJZYoykkS8eXrMM7QfdAm06sMb6Fiz5dqNkcFkVocdz764bci5x6VpZ7DLAiYzwWfI%2BGMtv3zU0fU3g7T7IqKtt%2BNbbQMU0T5wa2JlyZK45nWcJDSJJZ1cgaHSnEeVZPa1gln%2FI4AtEq2VTyYP0thRSWi5vfeBKyjqzeO9aZX2bbdZzWRq5sQhY669bDeFOGYk4spl6BySkrbfHM%2BrqpKUYBsysfiXbMY5xi52m3qvE1G%2FMlBjpU4OswICrWK%2Fgh6eT4vosb9zBeglf%2BWOZ%2FflfvWQAQXREVCSOOcKeLMngRY9nGtKp5jzN1CiEJKvA7Y6lV80i33CiuY2zuFEueuxB6w0wviH0F1eMA8%2FE7bOL77h9yCLZV3fu9neSH3Hs6C%2FNEYUsSBeQTLHizYvPN2gwusPtwgY6pgG8ztQX3EWgx0pLX2tJmumTPWhPi%2BkIM4HapSdiB0LVfhhADz%2FaSW1FwbbjGSif7c9mUduIGgz1A4yx8%2B1lspCTOwT7VNAQLZMfKR58dJTGlw2jYLIxYwEprpsTEfv2lwxix%2FOgqS2C2s%2F2xsr6Q5fOGEDCk2d6T9dI85%2BK%2FsPWdc1yl8hp34%2Ft5%2BweQBV9%2BF5eleLP8F4FbidvqRhW2v36X80Qh4vB&X-Amz-Signature=696409636a28d53e1b9e008717b2af6ec62dd3b22b69f3bca28a1f52db168ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
