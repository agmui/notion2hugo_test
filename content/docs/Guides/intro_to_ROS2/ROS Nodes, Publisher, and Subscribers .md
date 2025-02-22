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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LRGE64%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5S1axXi%2BSgouOE0Yyy5anivAl1ZaWARLpdxgaqa6egwIgPy8dZKe71%2FYZ1coiEN0x26yahN1lXHsrG%2FpBPxnTp08qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4PjERaYCyICmeIWyrcA0znCxDvnF87ppmAmBgY3SJdbIZyq27wxd91CjkX3biomqIPFHYzp8n3KvOmHA760NSsqgUJdjL4jh92zKI6y5QuKjRrLuKQj7qQ7CKpJS7k3XvklZPgRf2TeRle%2BwLTPVogkkPcEwx1ZJ%2BZZZK0aDJMw138Nm%2BfiDz0ROqOmDfYUspIUddEvO5SaTTfznfGEq%2BsJVnsVBg5avw2WbP6YqIU9WUAmiY%2FrAKtej7W7CSIxSqob04qlWHmSJ%2FS6ffnvjUOj3INpssXqEuOmkEHSEJ7Jyf09%2FYWfN3jpkbTqQ2DbBztcDTXvtFCbLZSQTlM1rUaPsn1w%2F%2BvPQIFnKFT%2BOZ7qopDVBBEUJNw25ALVs1AA8KL%2FFQOxJRfL9ZfosJ56AocJ8uyyBlDurTLwQ1sgzdMUaFDwSGGBRxwhQKPe0WGfZK5sPt8MC8FkaHNv8snCbxsqSJcQAl2VPzMVI4T4LIQtim8jcn44ff2GdylRa4OfxGnh9v%2FqKWUWhbk8YJ2MPFrkz8r%2BrtE5QiXjs%2BjFqGA7AbqCx8QlOoPbIk6srG025RO2rCqu7LjPRUKiH2%2BGKaUoAwdToRvKDowHMt6XFAJwTHw%2BFNtYVLnHko93SVvqDjT4GmxwRvKzHEbMNC4570GOqUBeGVKmUZZaeJG53%2B1%2BIZlwU0t6LvVoQ4pwaIAQ4q7dBRM9H7VbxU1N4gCUng7Ti8ARbfomfXw5MHd6FMxLT6%2FhA5CwPbYhkOhHREbWBiHryygn7CmPttWTv8Coqmg9l4ykg3VvzA%2BjQKHaOFV82IlIw0BAikPioBR0O9sXrfRdfMdIDnMwrI5m7U37rJDZ5lfgkeBkczqCu12o03suwyo1Kms%2BmQt&X-Amz-Signature=7cdfc5a44a421f2edc1fb669372fc258e3855e2e76c3889568c37d548f41c370&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LRGE64%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5S1axXi%2BSgouOE0Yyy5anivAl1ZaWARLpdxgaqa6egwIgPy8dZKe71%2FYZ1coiEN0x26yahN1lXHsrG%2FpBPxnTp08qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4PjERaYCyICmeIWyrcA0znCxDvnF87ppmAmBgY3SJdbIZyq27wxd91CjkX3biomqIPFHYzp8n3KvOmHA760NSsqgUJdjL4jh92zKI6y5QuKjRrLuKQj7qQ7CKpJS7k3XvklZPgRf2TeRle%2BwLTPVogkkPcEwx1ZJ%2BZZZK0aDJMw138Nm%2BfiDz0ROqOmDfYUspIUddEvO5SaTTfznfGEq%2BsJVnsVBg5avw2WbP6YqIU9WUAmiY%2FrAKtej7W7CSIxSqob04qlWHmSJ%2FS6ffnvjUOj3INpssXqEuOmkEHSEJ7Jyf09%2FYWfN3jpkbTqQ2DbBztcDTXvtFCbLZSQTlM1rUaPsn1w%2F%2BvPQIFnKFT%2BOZ7qopDVBBEUJNw25ALVs1AA8KL%2FFQOxJRfL9ZfosJ56AocJ8uyyBlDurTLwQ1sgzdMUaFDwSGGBRxwhQKPe0WGfZK5sPt8MC8FkaHNv8snCbxsqSJcQAl2VPzMVI4T4LIQtim8jcn44ff2GdylRa4OfxGnh9v%2FqKWUWhbk8YJ2MPFrkz8r%2BrtE5QiXjs%2BjFqGA7AbqCx8QlOoPbIk6srG025RO2rCqu7LjPRUKiH2%2BGKaUoAwdToRvKDowHMt6XFAJwTHw%2BFNtYVLnHko93SVvqDjT4GmxwRvKzHEbMNC4570GOqUBeGVKmUZZaeJG53%2B1%2BIZlwU0t6LvVoQ4pwaIAQ4q7dBRM9H7VbxU1N4gCUng7Ti8ARbfomfXw5MHd6FMxLT6%2FhA5CwPbYhkOhHREbWBiHryygn7CmPttWTv8Coqmg9l4ykg3VvzA%2BjQKHaOFV82IlIw0BAikPioBR0O9sXrfRdfMdIDnMwrI5m7U37rJDZ5lfgkeBkczqCu12o03suwyo1Kms%2BmQt&X-Amz-Signature=ec3e723c375d9f226e73acb3c48931b69ae46593880d927a705a00cf82df4c88&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LRGE64%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5S1axXi%2BSgouOE0Yyy5anivAl1ZaWARLpdxgaqa6egwIgPy8dZKe71%2FYZ1coiEN0x26yahN1lXHsrG%2FpBPxnTp08qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4PjERaYCyICmeIWyrcA0znCxDvnF87ppmAmBgY3SJdbIZyq27wxd91CjkX3biomqIPFHYzp8n3KvOmHA760NSsqgUJdjL4jh92zKI6y5QuKjRrLuKQj7qQ7CKpJS7k3XvklZPgRf2TeRle%2BwLTPVogkkPcEwx1ZJ%2BZZZK0aDJMw138Nm%2BfiDz0ROqOmDfYUspIUddEvO5SaTTfznfGEq%2BsJVnsVBg5avw2WbP6YqIU9WUAmiY%2FrAKtej7W7CSIxSqob04qlWHmSJ%2FS6ffnvjUOj3INpssXqEuOmkEHSEJ7Jyf09%2FYWfN3jpkbTqQ2DbBztcDTXvtFCbLZSQTlM1rUaPsn1w%2F%2BvPQIFnKFT%2BOZ7qopDVBBEUJNw25ALVs1AA8KL%2FFQOxJRfL9ZfosJ56AocJ8uyyBlDurTLwQ1sgzdMUaFDwSGGBRxwhQKPe0WGfZK5sPt8MC8FkaHNv8snCbxsqSJcQAl2VPzMVI4T4LIQtim8jcn44ff2GdylRa4OfxGnh9v%2FqKWUWhbk8YJ2MPFrkz8r%2BrtE5QiXjs%2BjFqGA7AbqCx8QlOoPbIk6srG025RO2rCqu7LjPRUKiH2%2BGKaUoAwdToRvKDowHMt6XFAJwTHw%2BFNtYVLnHko93SVvqDjT4GmxwRvKzHEbMNC4570GOqUBeGVKmUZZaeJG53%2B1%2BIZlwU0t6LvVoQ4pwaIAQ4q7dBRM9H7VbxU1N4gCUng7Ti8ARbfomfXw5MHd6FMxLT6%2FhA5CwPbYhkOhHREbWBiHryygn7CmPttWTv8Coqmg9l4ykg3VvzA%2BjQKHaOFV82IlIw0BAikPioBR0O9sXrfRdfMdIDnMwrI5m7U37rJDZ5lfgkeBkczqCu12o03suwyo1Kms%2BmQt&X-Amz-Signature=1746e8f3798f1c13cc1ccdff49dd89f555c5fb7f699e3eced4e1efe450507983&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LRGE64%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5S1axXi%2BSgouOE0Yyy5anivAl1ZaWARLpdxgaqa6egwIgPy8dZKe71%2FYZ1coiEN0x26yahN1lXHsrG%2FpBPxnTp08qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4PjERaYCyICmeIWyrcA0znCxDvnF87ppmAmBgY3SJdbIZyq27wxd91CjkX3biomqIPFHYzp8n3KvOmHA760NSsqgUJdjL4jh92zKI6y5QuKjRrLuKQj7qQ7CKpJS7k3XvklZPgRf2TeRle%2BwLTPVogkkPcEwx1ZJ%2BZZZK0aDJMw138Nm%2BfiDz0ROqOmDfYUspIUddEvO5SaTTfznfGEq%2BsJVnsVBg5avw2WbP6YqIU9WUAmiY%2FrAKtej7W7CSIxSqob04qlWHmSJ%2FS6ffnvjUOj3INpssXqEuOmkEHSEJ7Jyf09%2FYWfN3jpkbTqQ2DbBztcDTXvtFCbLZSQTlM1rUaPsn1w%2F%2BvPQIFnKFT%2BOZ7qopDVBBEUJNw25ALVs1AA8KL%2FFQOxJRfL9ZfosJ56AocJ8uyyBlDurTLwQ1sgzdMUaFDwSGGBRxwhQKPe0WGfZK5sPt8MC8FkaHNv8snCbxsqSJcQAl2VPzMVI4T4LIQtim8jcn44ff2GdylRa4OfxGnh9v%2FqKWUWhbk8YJ2MPFrkz8r%2BrtE5QiXjs%2BjFqGA7AbqCx8QlOoPbIk6srG025RO2rCqu7LjPRUKiH2%2BGKaUoAwdToRvKDowHMt6XFAJwTHw%2BFNtYVLnHko93SVvqDjT4GmxwRvKzHEbMNC4570GOqUBeGVKmUZZaeJG53%2B1%2BIZlwU0t6LvVoQ4pwaIAQ4q7dBRM9H7VbxU1N4gCUng7Ti8ARbfomfXw5MHd6FMxLT6%2FhA5CwPbYhkOhHREbWBiHryygn7CmPttWTv8Coqmg9l4ykg3VvzA%2BjQKHaOFV82IlIw0BAikPioBR0O9sXrfRdfMdIDnMwrI5m7U37rJDZ5lfgkeBkczqCu12o03suwyo1Kms%2BmQt&X-Amz-Signature=b0a857a72e5597baf7a5379cf77fb2c437ba3876db47f1ab51159e081491d52f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LRGE64%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5S1axXi%2BSgouOE0Yyy5anivAl1ZaWARLpdxgaqa6egwIgPy8dZKe71%2FYZ1coiEN0x26yahN1lXHsrG%2FpBPxnTp08qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4PjERaYCyICmeIWyrcA0znCxDvnF87ppmAmBgY3SJdbIZyq27wxd91CjkX3biomqIPFHYzp8n3KvOmHA760NSsqgUJdjL4jh92zKI6y5QuKjRrLuKQj7qQ7CKpJS7k3XvklZPgRf2TeRle%2BwLTPVogkkPcEwx1ZJ%2BZZZK0aDJMw138Nm%2BfiDz0ROqOmDfYUspIUddEvO5SaTTfznfGEq%2BsJVnsVBg5avw2WbP6YqIU9WUAmiY%2FrAKtej7W7CSIxSqob04qlWHmSJ%2FS6ffnvjUOj3INpssXqEuOmkEHSEJ7Jyf09%2FYWfN3jpkbTqQ2DbBztcDTXvtFCbLZSQTlM1rUaPsn1w%2F%2BvPQIFnKFT%2BOZ7qopDVBBEUJNw25ALVs1AA8KL%2FFQOxJRfL9ZfosJ56AocJ8uyyBlDurTLwQ1sgzdMUaFDwSGGBRxwhQKPe0WGfZK5sPt8MC8FkaHNv8snCbxsqSJcQAl2VPzMVI4T4LIQtim8jcn44ff2GdylRa4OfxGnh9v%2FqKWUWhbk8YJ2MPFrkz8r%2BrtE5QiXjs%2BjFqGA7AbqCx8QlOoPbIk6srG025RO2rCqu7LjPRUKiH2%2BGKaUoAwdToRvKDowHMt6XFAJwTHw%2BFNtYVLnHko93SVvqDjT4GmxwRvKzHEbMNC4570GOqUBeGVKmUZZaeJG53%2B1%2BIZlwU0t6LvVoQ4pwaIAQ4q7dBRM9H7VbxU1N4gCUng7Ti8ARbfomfXw5MHd6FMxLT6%2FhA5CwPbYhkOhHREbWBiHryygn7CmPttWTv8Coqmg9l4ykg3VvzA%2BjQKHaOFV82IlIw0BAikPioBR0O9sXrfRdfMdIDnMwrI5m7U37rJDZ5lfgkeBkczqCu12o03suwyo1Kms%2BmQt&X-Amz-Signature=a396a882b2ee6520cb33c169593912e8f17f94ccf2a27bca2493cb248709be2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LRGE64%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5S1axXi%2BSgouOE0Yyy5anivAl1ZaWARLpdxgaqa6egwIgPy8dZKe71%2FYZ1coiEN0x26yahN1lXHsrG%2FpBPxnTp08qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4PjERaYCyICmeIWyrcA0znCxDvnF87ppmAmBgY3SJdbIZyq27wxd91CjkX3biomqIPFHYzp8n3KvOmHA760NSsqgUJdjL4jh92zKI6y5QuKjRrLuKQj7qQ7CKpJS7k3XvklZPgRf2TeRle%2BwLTPVogkkPcEwx1ZJ%2BZZZK0aDJMw138Nm%2BfiDz0ROqOmDfYUspIUddEvO5SaTTfznfGEq%2BsJVnsVBg5avw2WbP6YqIU9WUAmiY%2FrAKtej7W7CSIxSqob04qlWHmSJ%2FS6ffnvjUOj3INpssXqEuOmkEHSEJ7Jyf09%2FYWfN3jpkbTqQ2DbBztcDTXvtFCbLZSQTlM1rUaPsn1w%2F%2BvPQIFnKFT%2BOZ7qopDVBBEUJNw25ALVs1AA8KL%2FFQOxJRfL9ZfosJ56AocJ8uyyBlDurTLwQ1sgzdMUaFDwSGGBRxwhQKPe0WGfZK5sPt8MC8FkaHNv8snCbxsqSJcQAl2VPzMVI4T4LIQtim8jcn44ff2GdylRa4OfxGnh9v%2FqKWUWhbk8YJ2MPFrkz8r%2BrtE5QiXjs%2BjFqGA7AbqCx8QlOoPbIk6srG025RO2rCqu7LjPRUKiH2%2BGKaUoAwdToRvKDowHMt6XFAJwTHw%2BFNtYVLnHko93SVvqDjT4GmxwRvKzHEbMNC4570GOqUBeGVKmUZZaeJG53%2B1%2BIZlwU0t6LvVoQ4pwaIAQ4q7dBRM9H7VbxU1N4gCUng7Ti8ARbfomfXw5MHd6FMxLT6%2FhA5CwPbYhkOhHREbWBiHryygn7CmPttWTv8Coqmg9l4ykg3VvzA%2BjQKHaOFV82IlIw0BAikPioBR0O9sXrfRdfMdIDnMwrI5m7U37rJDZ5lfgkeBkczqCu12o03suwyo1Kms%2BmQt&X-Amz-Signature=7c533689ef98f06f375d12427e8891e86261b5dc2f353276c81563c0b6e5c43f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LRGE64%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5S1axXi%2BSgouOE0Yyy5anivAl1ZaWARLpdxgaqa6egwIgPy8dZKe71%2FYZ1coiEN0x26yahN1lXHsrG%2FpBPxnTp08qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4PjERaYCyICmeIWyrcA0znCxDvnF87ppmAmBgY3SJdbIZyq27wxd91CjkX3biomqIPFHYzp8n3KvOmHA760NSsqgUJdjL4jh92zKI6y5QuKjRrLuKQj7qQ7CKpJS7k3XvklZPgRf2TeRle%2BwLTPVogkkPcEwx1ZJ%2BZZZK0aDJMw138Nm%2BfiDz0ROqOmDfYUspIUddEvO5SaTTfznfGEq%2BsJVnsVBg5avw2WbP6YqIU9WUAmiY%2FrAKtej7W7CSIxSqob04qlWHmSJ%2FS6ffnvjUOj3INpssXqEuOmkEHSEJ7Jyf09%2FYWfN3jpkbTqQ2DbBztcDTXvtFCbLZSQTlM1rUaPsn1w%2F%2BvPQIFnKFT%2BOZ7qopDVBBEUJNw25ALVs1AA8KL%2FFQOxJRfL9ZfosJ56AocJ8uyyBlDurTLwQ1sgzdMUaFDwSGGBRxwhQKPe0WGfZK5sPt8MC8FkaHNv8snCbxsqSJcQAl2VPzMVI4T4LIQtim8jcn44ff2GdylRa4OfxGnh9v%2FqKWUWhbk8YJ2MPFrkz8r%2BrtE5QiXjs%2BjFqGA7AbqCx8QlOoPbIk6srG025RO2rCqu7LjPRUKiH2%2BGKaUoAwdToRvKDowHMt6XFAJwTHw%2BFNtYVLnHko93SVvqDjT4GmxwRvKzHEbMNC4570GOqUBeGVKmUZZaeJG53%2B1%2BIZlwU0t6LvVoQ4pwaIAQ4q7dBRM9H7VbxU1N4gCUng7Ti8ARbfomfXw5MHd6FMxLT6%2FhA5CwPbYhkOhHREbWBiHryygn7CmPttWTv8Coqmg9l4ykg3VvzA%2BjQKHaOFV82IlIw0BAikPioBR0O9sXrfRdfMdIDnMwrI5m7U37rJDZ5lfgkeBkczqCu12o03suwyo1Kms%2BmQt&X-Amz-Signature=291cbc3b065ed98c0c99d3e76f338cf9510d3431f881a95525aade5adb9e7f20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2LRGE64%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5S1axXi%2BSgouOE0Yyy5anivAl1ZaWARLpdxgaqa6egwIgPy8dZKe71%2FYZ1coiEN0x26yahN1lXHsrG%2FpBPxnTp08qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4PjERaYCyICmeIWyrcA0znCxDvnF87ppmAmBgY3SJdbIZyq27wxd91CjkX3biomqIPFHYzp8n3KvOmHA760NSsqgUJdjL4jh92zKI6y5QuKjRrLuKQj7qQ7CKpJS7k3XvklZPgRf2TeRle%2BwLTPVogkkPcEwx1ZJ%2BZZZK0aDJMw138Nm%2BfiDz0ROqOmDfYUspIUddEvO5SaTTfznfGEq%2BsJVnsVBg5avw2WbP6YqIU9WUAmiY%2FrAKtej7W7CSIxSqob04qlWHmSJ%2FS6ffnvjUOj3INpssXqEuOmkEHSEJ7Jyf09%2FYWfN3jpkbTqQ2DbBztcDTXvtFCbLZSQTlM1rUaPsn1w%2F%2BvPQIFnKFT%2BOZ7qopDVBBEUJNw25ALVs1AA8KL%2FFQOxJRfL9ZfosJ56AocJ8uyyBlDurTLwQ1sgzdMUaFDwSGGBRxwhQKPe0WGfZK5sPt8MC8FkaHNv8snCbxsqSJcQAl2VPzMVI4T4LIQtim8jcn44ff2GdylRa4OfxGnh9v%2FqKWUWhbk8YJ2MPFrkz8r%2BrtE5QiXjs%2BjFqGA7AbqCx8QlOoPbIk6srG025RO2rCqu7LjPRUKiH2%2BGKaUoAwdToRvKDowHMt6XFAJwTHw%2BFNtYVLnHko93SVvqDjT4GmxwRvKzHEbMNC4570GOqUBeGVKmUZZaeJG53%2B1%2BIZlwU0t6LvVoQ4pwaIAQ4q7dBRM9H7VbxU1N4gCUng7Ti8ARbfomfXw5MHd6FMxLT6%2FhA5CwPbYhkOhHREbWBiHryygn7CmPttWTv8Coqmg9l4ykg3VvzA%2BjQKHaOFV82IlIw0BAikPioBR0O9sXrfRdfMdIDnMwrI5m7U37rJDZ5lfgkeBkczqCu12o03suwyo1Kms%2BmQt&X-Amz-Signature=845fddd856a923a34d09b3cbea4b270a305b2a8f5aa9af4775394cdfc4dce00c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
