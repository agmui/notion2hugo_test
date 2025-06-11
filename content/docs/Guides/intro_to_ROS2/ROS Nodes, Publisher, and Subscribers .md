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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU6RRA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgASnWwit81YOfFRgZZr23hqCQM2X8v%2FzTkSR5gmfRYgIgNfz%2BlHEB9Sh6J5QVlAQ2xPFStUPfLraF9ATchB8H9lkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNx0qmR52%2FvnPBfuEyrcA7%2FFq3Ni9zJV94Ir8DjjEfPgDbsr3DA1XBbhuxhGwocajI9leElLQotlIiJ%2F8zBpxC3ia29WjroFgRb0rv6VXRvnkBuG%2B2wkh2VNo2yikoJnjh6emYbNjUKjKa%2BiJ%2B16ndCL77EfXXHu9wmPXFEcQTZj5%2BbLOf3n2kOsw%2FYBDHDMw2oE0c6epJpoXML%2BhstY%2F0sMbCpyrtGEwCkLx%2FHk3iSNprQNtH6hcNbloVUMqgrdkPjwxT3S5H0kDkKVyR6Un8wyDeaFH8xlxoM3UUO765JDQQYgClBn3WaalmfXKH5prNyrxV3l%2FTxHlSUSLXGLobH2Y6I%2BUGzlk8ySavypDMqvJDA8cmbDwpbxpJKrntzkUWZtKBnwuHaLIBLP6UldFKPYoIBRTBXA5ndCpKxmqhIOeOs8kpkNen7poZwTMv8J2MQn0buWSrgyhksO7UFIH4YYEKJdQ30EgmunIEsbPmd%2Fu1z5hRDcuwbW83CF7%2FK5ewPR7lWUcu32HRct34Pw2fK9uk%2BryqmVcW09MNBoc1L44x21k0P6cZOWynoH0zPlMpU62O5jsjn7%2FudtW0u7z%2Fnk%2BCVu1SDA4L7jxwtOMaP%2FsvCJtvx1oFD69sMoShbpOs5KMR57OOf3WIXtMLbppcIGOqUBrn9C1mkhKC7k4GsZdM%2BhVCjwZlfCSsp0kzxU2Vrg5ipEIVpHj3qTzrikLbb9XRdYGB4ZmDtS398Q9CUQZ6zVaTmnPJv6HNo7nN7q7jbQw%2BZTsLlXgGN8Qykezi4fOxRaJmOIHKqKDlZHKvRswCabwpE%2BnemlUmPTezhKj5Lmteh1NBUCD%2F5OfKhWUNnpwSVFTqK8%2BSpuQZJlrd5dSnDy%2Br7EzPTe&X-Amz-Signature=df5e99e68d2bbb2aefaeeff75d2dc24e7ee4187771d8c8838e8f9455c72d6188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU6RRA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgASnWwit81YOfFRgZZr23hqCQM2X8v%2FzTkSR5gmfRYgIgNfz%2BlHEB9Sh6J5QVlAQ2xPFStUPfLraF9ATchB8H9lkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNx0qmR52%2FvnPBfuEyrcA7%2FFq3Ni9zJV94Ir8DjjEfPgDbsr3DA1XBbhuxhGwocajI9leElLQotlIiJ%2F8zBpxC3ia29WjroFgRb0rv6VXRvnkBuG%2B2wkh2VNo2yikoJnjh6emYbNjUKjKa%2BiJ%2B16ndCL77EfXXHu9wmPXFEcQTZj5%2BbLOf3n2kOsw%2FYBDHDMw2oE0c6epJpoXML%2BhstY%2F0sMbCpyrtGEwCkLx%2FHk3iSNprQNtH6hcNbloVUMqgrdkPjwxT3S5H0kDkKVyR6Un8wyDeaFH8xlxoM3UUO765JDQQYgClBn3WaalmfXKH5prNyrxV3l%2FTxHlSUSLXGLobH2Y6I%2BUGzlk8ySavypDMqvJDA8cmbDwpbxpJKrntzkUWZtKBnwuHaLIBLP6UldFKPYoIBRTBXA5ndCpKxmqhIOeOs8kpkNen7poZwTMv8J2MQn0buWSrgyhksO7UFIH4YYEKJdQ30EgmunIEsbPmd%2Fu1z5hRDcuwbW83CF7%2FK5ewPR7lWUcu32HRct34Pw2fK9uk%2BryqmVcW09MNBoc1L44x21k0P6cZOWynoH0zPlMpU62O5jsjn7%2FudtW0u7z%2Fnk%2BCVu1SDA4L7jxwtOMaP%2FsvCJtvx1oFD69sMoShbpOs5KMR57OOf3WIXtMLbppcIGOqUBrn9C1mkhKC7k4GsZdM%2BhVCjwZlfCSsp0kzxU2Vrg5ipEIVpHj3qTzrikLbb9XRdYGB4ZmDtS398Q9CUQZ6zVaTmnPJv6HNo7nN7q7jbQw%2BZTsLlXgGN8Qykezi4fOxRaJmOIHKqKDlZHKvRswCabwpE%2BnemlUmPTezhKj5Lmteh1NBUCD%2F5OfKhWUNnpwSVFTqK8%2BSpuQZJlrd5dSnDy%2Br7EzPTe&X-Amz-Signature=540c1a00efe9efd27862147ae748d31c50f89397ba8fc8636c265e654f590d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU6RRA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgASnWwit81YOfFRgZZr23hqCQM2X8v%2FzTkSR5gmfRYgIgNfz%2BlHEB9Sh6J5QVlAQ2xPFStUPfLraF9ATchB8H9lkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNx0qmR52%2FvnPBfuEyrcA7%2FFq3Ni9zJV94Ir8DjjEfPgDbsr3DA1XBbhuxhGwocajI9leElLQotlIiJ%2F8zBpxC3ia29WjroFgRb0rv6VXRvnkBuG%2B2wkh2VNo2yikoJnjh6emYbNjUKjKa%2BiJ%2B16ndCL77EfXXHu9wmPXFEcQTZj5%2BbLOf3n2kOsw%2FYBDHDMw2oE0c6epJpoXML%2BhstY%2F0sMbCpyrtGEwCkLx%2FHk3iSNprQNtH6hcNbloVUMqgrdkPjwxT3S5H0kDkKVyR6Un8wyDeaFH8xlxoM3UUO765JDQQYgClBn3WaalmfXKH5prNyrxV3l%2FTxHlSUSLXGLobH2Y6I%2BUGzlk8ySavypDMqvJDA8cmbDwpbxpJKrntzkUWZtKBnwuHaLIBLP6UldFKPYoIBRTBXA5ndCpKxmqhIOeOs8kpkNen7poZwTMv8J2MQn0buWSrgyhksO7UFIH4YYEKJdQ30EgmunIEsbPmd%2Fu1z5hRDcuwbW83CF7%2FK5ewPR7lWUcu32HRct34Pw2fK9uk%2BryqmVcW09MNBoc1L44x21k0P6cZOWynoH0zPlMpU62O5jsjn7%2FudtW0u7z%2Fnk%2BCVu1SDA4L7jxwtOMaP%2FsvCJtvx1oFD69sMoShbpOs5KMR57OOf3WIXtMLbppcIGOqUBrn9C1mkhKC7k4GsZdM%2BhVCjwZlfCSsp0kzxU2Vrg5ipEIVpHj3qTzrikLbb9XRdYGB4ZmDtS398Q9CUQZ6zVaTmnPJv6HNo7nN7q7jbQw%2BZTsLlXgGN8Qykezi4fOxRaJmOIHKqKDlZHKvRswCabwpE%2BnemlUmPTezhKj5Lmteh1NBUCD%2F5OfKhWUNnpwSVFTqK8%2BSpuQZJlrd5dSnDy%2Br7EzPTe&X-Amz-Signature=f97cc360ac71fc499325d2b5962840ece712f261dd3ecaa61efcad550b621b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU6RRA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgASnWwit81YOfFRgZZr23hqCQM2X8v%2FzTkSR5gmfRYgIgNfz%2BlHEB9Sh6J5QVlAQ2xPFStUPfLraF9ATchB8H9lkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNx0qmR52%2FvnPBfuEyrcA7%2FFq3Ni9zJV94Ir8DjjEfPgDbsr3DA1XBbhuxhGwocajI9leElLQotlIiJ%2F8zBpxC3ia29WjroFgRb0rv6VXRvnkBuG%2B2wkh2VNo2yikoJnjh6emYbNjUKjKa%2BiJ%2B16ndCL77EfXXHu9wmPXFEcQTZj5%2BbLOf3n2kOsw%2FYBDHDMw2oE0c6epJpoXML%2BhstY%2F0sMbCpyrtGEwCkLx%2FHk3iSNprQNtH6hcNbloVUMqgrdkPjwxT3S5H0kDkKVyR6Un8wyDeaFH8xlxoM3UUO765JDQQYgClBn3WaalmfXKH5prNyrxV3l%2FTxHlSUSLXGLobH2Y6I%2BUGzlk8ySavypDMqvJDA8cmbDwpbxpJKrntzkUWZtKBnwuHaLIBLP6UldFKPYoIBRTBXA5ndCpKxmqhIOeOs8kpkNen7poZwTMv8J2MQn0buWSrgyhksO7UFIH4YYEKJdQ30EgmunIEsbPmd%2Fu1z5hRDcuwbW83CF7%2FK5ewPR7lWUcu32HRct34Pw2fK9uk%2BryqmVcW09MNBoc1L44x21k0P6cZOWynoH0zPlMpU62O5jsjn7%2FudtW0u7z%2Fnk%2BCVu1SDA4L7jxwtOMaP%2FsvCJtvx1oFD69sMoShbpOs5KMR57OOf3WIXtMLbppcIGOqUBrn9C1mkhKC7k4GsZdM%2BhVCjwZlfCSsp0kzxU2Vrg5ipEIVpHj3qTzrikLbb9XRdYGB4ZmDtS398Q9CUQZ6zVaTmnPJv6HNo7nN7q7jbQw%2BZTsLlXgGN8Qykezi4fOxRaJmOIHKqKDlZHKvRswCabwpE%2BnemlUmPTezhKj5Lmteh1NBUCD%2F5OfKhWUNnpwSVFTqK8%2BSpuQZJlrd5dSnDy%2Br7EzPTe&X-Amz-Signature=2a5782325ba197cc83677963a9ab318a57210514ebbce49c7eaf701f51989f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU6RRA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgASnWwit81YOfFRgZZr23hqCQM2X8v%2FzTkSR5gmfRYgIgNfz%2BlHEB9Sh6J5QVlAQ2xPFStUPfLraF9ATchB8H9lkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNx0qmR52%2FvnPBfuEyrcA7%2FFq3Ni9zJV94Ir8DjjEfPgDbsr3DA1XBbhuxhGwocajI9leElLQotlIiJ%2F8zBpxC3ia29WjroFgRb0rv6VXRvnkBuG%2B2wkh2VNo2yikoJnjh6emYbNjUKjKa%2BiJ%2B16ndCL77EfXXHu9wmPXFEcQTZj5%2BbLOf3n2kOsw%2FYBDHDMw2oE0c6epJpoXML%2BhstY%2F0sMbCpyrtGEwCkLx%2FHk3iSNprQNtH6hcNbloVUMqgrdkPjwxT3S5H0kDkKVyR6Un8wyDeaFH8xlxoM3UUO765JDQQYgClBn3WaalmfXKH5prNyrxV3l%2FTxHlSUSLXGLobH2Y6I%2BUGzlk8ySavypDMqvJDA8cmbDwpbxpJKrntzkUWZtKBnwuHaLIBLP6UldFKPYoIBRTBXA5ndCpKxmqhIOeOs8kpkNen7poZwTMv8J2MQn0buWSrgyhksO7UFIH4YYEKJdQ30EgmunIEsbPmd%2Fu1z5hRDcuwbW83CF7%2FK5ewPR7lWUcu32HRct34Pw2fK9uk%2BryqmVcW09MNBoc1L44x21k0P6cZOWynoH0zPlMpU62O5jsjn7%2FudtW0u7z%2Fnk%2BCVu1SDA4L7jxwtOMaP%2FsvCJtvx1oFD69sMoShbpOs5KMR57OOf3WIXtMLbppcIGOqUBrn9C1mkhKC7k4GsZdM%2BhVCjwZlfCSsp0kzxU2Vrg5ipEIVpHj3qTzrikLbb9XRdYGB4ZmDtS398Q9CUQZ6zVaTmnPJv6HNo7nN7q7jbQw%2BZTsLlXgGN8Qykezi4fOxRaJmOIHKqKDlZHKvRswCabwpE%2BnemlUmPTezhKj5Lmteh1NBUCD%2F5OfKhWUNnpwSVFTqK8%2BSpuQZJlrd5dSnDy%2Br7EzPTe&X-Amz-Signature=95e19dac1743e1c62ede1167bbc0f93f364b9023baf081ca49bf7b4634bec1d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU6RRA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgASnWwit81YOfFRgZZr23hqCQM2X8v%2FzTkSR5gmfRYgIgNfz%2BlHEB9Sh6J5QVlAQ2xPFStUPfLraF9ATchB8H9lkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNx0qmR52%2FvnPBfuEyrcA7%2FFq3Ni9zJV94Ir8DjjEfPgDbsr3DA1XBbhuxhGwocajI9leElLQotlIiJ%2F8zBpxC3ia29WjroFgRb0rv6VXRvnkBuG%2B2wkh2VNo2yikoJnjh6emYbNjUKjKa%2BiJ%2B16ndCL77EfXXHu9wmPXFEcQTZj5%2BbLOf3n2kOsw%2FYBDHDMw2oE0c6epJpoXML%2BhstY%2F0sMbCpyrtGEwCkLx%2FHk3iSNprQNtH6hcNbloVUMqgrdkPjwxT3S5H0kDkKVyR6Un8wyDeaFH8xlxoM3UUO765JDQQYgClBn3WaalmfXKH5prNyrxV3l%2FTxHlSUSLXGLobH2Y6I%2BUGzlk8ySavypDMqvJDA8cmbDwpbxpJKrntzkUWZtKBnwuHaLIBLP6UldFKPYoIBRTBXA5ndCpKxmqhIOeOs8kpkNen7poZwTMv8J2MQn0buWSrgyhksO7UFIH4YYEKJdQ30EgmunIEsbPmd%2Fu1z5hRDcuwbW83CF7%2FK5ewPR7lWUcu32HRct34Pw2fK9uk%2BryqmVcW09MNBoc1L44x21k0P6cZOWynoH0zPlMpU62O5jsjn7%2FudtW0u7z%2Fnk%2BCVu1SDA4L7jxwtOMaP%2FsvCJtvx1oFD69sMoShbpOs5KMR57OOf3WIXtMLbppcIGOqUBrn9C1mkhKC7k4GsZdM%2BhVCjwZlfCSsp0kzxU2Vrg5ipEIVpHj3qTzrikLbb9XRdYGB4ZmDtS398Q9CUQZ6zVaTmnPJv6HNo7nN7q7jbQw%2BZTsLlXgGN8Qykezi4fOxRaJmOIHKqKDlZHKvRswCabwpE%2BnemlUmPTezhKj5Lmteh1NBUCD%2F5OfKhWUNnpwSVFTqK8%2BSpuQZJlrd5dSnDy%2Br7EzPTe&X-Amz-Signature=04bbc916349a2a1d15fa41b0ff50f8ca95b00e29d9e53702e32263ab49a85590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU6RRA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgASnWwit81YOfFRgZZr23hqCQM2X8v%2FzTkSR5gmfRYgIgNfz%2BlHEB9Sh6J5QVlAQ2xPFStUPfLraF9ATchB8H9lkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNx0qmR52%2FvnPBfuEyrcA7%2FFq3Ni9zJV94Ir8DjjEfPgDbsr3DA1XBbhuxhGwocajI9leElLQotlIiJ%2F8zBpxC3ia29WjroFgRb0rv6VXRvnkBuG%2B2wkh2VNo2yikoJnjh6emYbNjUKjKa%2BiJ%2B16ndCL77EfXXHu9wmPXFEcQTZj5%2BbLOf3n2kOsw%2FYBDHDMw2oE0c6epJpoXML%2BhstY%2F0sMbCpyrtGEwCkLx%2FHk3iSNprQNtH6hcNbloVUMqgrdkPjwxT3S5H0kDkKVyR6Un8wyDeaFH8xlxoM3UUO765JDQQYgClBn3WaalmfXKH5prNyrxV3l%2FTxHlSUSLXGLobH2Y6I%2BUGzlk8ySavypDMqvJDA8cmbDwpbxpJKrntzkUWZtKBnwuHaLIBLP6UldFKPYoIBRTBXA5ndCpKxmqhIOeOs8kpkNen7poZwTMv8J2MQn0buWSrgyhksO7UFIH4YYEKJdQ30EgmunIEsbPmd%2Fu1z5hRDcuwbW83CF7%2FK5ewPR7lWUcu32HRct34Pw2fK9uk%2BryqmVcW09MNBoc1L44x21k0P6cZOWynoH0zPlMpU62O5jsjn7%2FudtW0u7z%2Fnk%2BCVu1SDA4L7jxwtOMaP%2FsvCJtvx1oFD69sMoShbpOs5KMR57OOf3WIXtMLbppcIGOqUBrn9C1mkhKC7k4GsZdM%2BhVCjwZlfCSsp0kzxU2Vrg5ipEIVpHj3qTzrikLbb9XRdYGB4ZmDtS398Q9CUQZ6zVaTmnPJv6HNo7nN7q7jbQw%2BZTsLlXgGN8Qykezi4fOxRaJmOIHKqKDlZHKvRswCabwpE%2BnemlUmPTezhKj5Lmteh1NBUCD%2F5OfKhWUNnpwSVFTqK8%2BSpuQZJlrd5dSnDy%2Br7EzPTe&X-Amz-Signature=e61e47c52a611d727b87f63729675209f303014b819271f7c0d4cfcdf2adacca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU6RRA%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgASnWwit81YOfFRgZZr23hqCQM2X8v%2FzTkSR5gmfRYgIgNfz%2BlHEB9Sh6J5QVlAQ2xPFStUPfLraF9ATchB8H9lkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNx0qmR52%2FvnPBfuEyrcA7%2FFq3Ni9zJV94Ir8DjjEfPgDbsr3DA1XBbhuxhGwocajI9leElLQotlIiJ%2F8zBpxC3ia29WjroFgRb0rv6VXRvnkBuG%2B2wkh2VNo2yikoJnjh6emYbNjUKjKa%2BiJ%2B16ndCL77EfXXHu9wmPXFEcQTZj5%2BbLOf3n2kOsw%2FYBDHDMw2oE0c6epJpoXML%2BhstY%2F0sMbCpyrtGEwCkLx%2FHk3iSNprQNtH6hcNbloVUMqgrdkPjwxT3S5H0kDkKVyR6Un8wyDeaFH8xlxoM3UUO765JDQQYgClBn3WaalmfXKH5prNyrxV3l%2FTxHlSUSLXGLobH2Y6I%2BUGzlk8ySavypDMqvJDA8cmbDwpbxpJKrntzkUWZtKBnwuHaLIBLP6UldFKPYoIBRTBXA5ndCpKxmqhIOeOs8kpkNen7poZwTMv8J2MQn0buWSrgyhksO7UFIH4YYEKJdQ30EgmunIEsbPmd%2Fu1z5hRDcuwbW83CF7%2FK5ewPR7lWUcu32HRct34Pw2fK9uk%2BryqmVcW09MNBoc1L44x21k0P6cZOWynoH0zPlMpU62O5jsjn7%2FudtW0u7z%2Fnk%2BCVu1SDA4L7jxwtOMaP%2FsvCJtvx1oFD69sMoShbpOs5KMR57OOf3WIXtMLbppcIGOqUBrn9C1mkhKC7k4GsZdM%2BhVCjwZlfCSsp0kzxU2Vrg5ipEIVpHj3qTzrikLbb9XRdYGB4ZmDtS398Q9CUQZ6zVaTmnPJv6HNo7nN7q7jbQw%2BZTsLlXgGN8Qykezi4fOxRaJmOIHKqKDlZHKvRswCabwpE%2BnemlUmPTezhKj5Lmteh1NBUCD%2F5OfKhWUNnpwSVFTqK8%2BSpuQZJlrd5dSnDy%2Br7EzPTe&X-Amz-Signature=2078304a744fece13e78825611ee842470b1ebc28c3308b3fe387172cb3b6cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
