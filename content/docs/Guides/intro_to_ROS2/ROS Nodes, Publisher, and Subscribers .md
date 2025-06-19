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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5XN5Z6C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnLDafwkCSfN3%2FeSH%2FcIDZoUn%2FP%2B8%2B%2ByvDI4Bm2BKdqwIhAPHxt3fjscI0ep3Qc0tgEUeV7PyAH37soOBrNDYODzQmKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygUJVa5HDQY0UN%2B78q3AN2EIEUZkOeXUf1YUdI9tzrqibwy8gsGvyIJKXCCtRh8ci0tcY%2FpgGaIXjYtlSrwACPnyJJEZQThIEYXcqtEVMlQI9NL3KDNNZFwikZRC4YsblIp0Fi8KYFAen88tB5hvbaWOKTASDO3AB203vl2%2BeophKF4K4me6e7kq05XHbN%2BU6MZXGp%2Bf7uB5%2B7tWnscorgkFTWg9M1wC1qyujoyU8JUL%2FD%2B1zmzdS1uCxRbJQTwYU%2FBx4uO0Kn3y2Qp0zKEhB0KUJa%2Fp9qCP1MQ7k2xcYNAN4rMYMRaVFgRbj5z4W%2BBG%2Fulykupm3xAwDhzKV1Q7OVtBrgDDIFnSzz4R7omgz8fTZyI8pzbAuCJSZH8j%2FUQhCxdnPWQ%2Bs32CMpBp232quFVMNkbjejpksB7SnUO4hXAxRYigeeFwprbEoY6MjgRiZ64TyD%2F0rpoJbh0TaaklkMKPr5N6xbXCYQOk%2Fd%2FMPUVohmWGuj%2BLRO713BHBcb3lcmmJ0tJi78FgcRSDvoHShQ6MFbCQY3a0tt4vZtkELbL7BncbWHnm9L2g2DkD8YoLMwuhcSi4DhBNtDlUDRIkyZ9ftpfCeLuXQvLgLppQGrv01mJM%2FMk50NbD4qhABODN1AnEkhQvwzZCrrITCk387CBjqkAYgIt4AxuB20McaapGLl1MVqCT7Ah3dwK8AuP6elkmJEcgBlhWfqbaSRbIcq7NuxA0sWgfJ6WGGD4JpefrgJHdXodTldLYF0WilouRY8SdhuSAm9B5yF7dOLBlcQCxyyf%2BYZ5Z07iehUjE6kCrbgLOF00mY56I8JLBd%2FN1v4CG46tT2EuBLCVXQERYJw1zlBkMHYlaCstB72htKGeEeIq5g4jJHN&X-Amz-Signature=79f30210b594dd5dbfd4a3fc5bcaf1d8119da75f0a47a89d5b2d022e2c85468f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5XN5Z6C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnLDafwkCSfN3%2FeSH%2FcIDZoUn%2FP%2B8%2B%2ByvDI4Bm2BKdqwIhAPHxt3fjscI0ep3Qc0tgEUeV7PyAH37soOBrNDYODzQmKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygUJVa5HDQY0UN%2B78q3AN2EIEUZkOeXUf1YUdI9tzrqibwy8gsGvyIJKXCCtRh8ci0tcY%2FpgGaIXjYtlSrwACPnyJJEZQThIEYXcqtEVMlQI9NL3KDNNZFwikZRC4YsblIp0Fi8KYFAen88tB5hvbaWOKTASDO3AB203vl2%2BeophKF4K4me6e7kq05XHbN%2BU6MZXGp%2Bf7uB5%2B7tWnscorgkFTWg9M1wC1qyujoyU8JUL%2FD%2B1zmzdS1uCxRbJQTwYU%2FBx4uO0Kn3y2Qp0zKEhB0KUJa%2Fp9qCP1MQ7k2xcYNAN4rMYMRaVFgRbj5z4W%2BBG%2Fulykupm3xAwDhzKV1Q7OVtBrgDDIFnSzz4R7omgz8fTZyI8pzbAuCJSZH8j%2FUQhCxdnPWQ%2Bs32CMpBp232quFVMNkbjejpksB7SnUO4hXAxRYigeeFwprbEoY6MjgRiZ64TyD%2F0rpoJbh0TaaklkMKPr5N6xbXCYQOk%2Fd%2FMPUVohmWGuj%2BLRO713BHBcb3lcmmJ0tJi78FgcRSDvoHShQ6MFbCQY3a0tt4vZtkELbL7BncbWHnm9L2g2DkD8YoLMwuhcSi4DhBNtDlUDRIkyZ9ftpfCeLuXQvLgLppQGrv01mJM%2FMk50NbD4qhABODN1AnEkhQvwzZCrrITCk387CBjqkAYgIt4AxuB20McaapGLl1MVqCT7Ah3dwK8AuP6elkmJEcgBlhWfqbaSRbIcq7NuxA0sWgfJ6WGGD4JpefrgJHdXodTldLYF0WilouRY8SdhuSAm9B5yF7dOLBlcQCxyyf%2BYZ5Z07iehUjE6kCrbgLOF00mY56I8JLBd%2FN1v4CG46tT2EuBLCVXQERYJw1zlBkMHYlaCstB72htKGeEeIq5g4jJHN&X-Amz-Signature=625a4feff9582d90f518f4f4afe2acb612fc41066fa643156b14c7473d2a3471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5XN5Z6C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnLDafwkCSfN3%2FeSH%2FcIDZoUn%2FP%2B8%2B%2ByvDI4Bm2BKdqwIhAPHxt3fjscI0ep3Qc0tgEUeV7PyAH37soOBrNDYODzQmKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygUJVa5HDQY0UN%2B78q3AN2EIEUZkOeXUf1YUdI9tzrqibwy8gsGvyIJKXCCtRh8ci0tcY%2FpgGaIXjYtlSrwACPnyJJEZQThIEYXcqtEVMlQI9NL3KDNNZFwikZRC4YsblIp0Fi8KYFAen88tB5hvbaWOKTASDO3AB203vl2%2BeophKF4K4me6e7kq05XHbN%2BU6MZXGp%2Bf7uB5%2B7tWnscorgkFTWg9M1wC1qyujoyU8JUL%2FD%2B1zmzdS1uCxRbJQTwYU%2FBx4uO0Kn3y2Qp0zKEhB0KUJa%2Fp9qCP1MQ7k2xcYNAN4rMYMRaVFgRbj5z4W%2BBG%2Fulykupm3xAwDhzKV1Q7OVtBrgDDIFnSzz4R7omgz8fTZyI8pzbAuCJSZH8j%2FUQhCxdnPWQ%2Bs32CMpBp232quFVMNkbjejpksB7SnUO4hXAxRYigeeFwprbEoY6MjgRiZ64TyD%2F0rpoJbh0TaaklkMKPr5N6xbXCYQOk%2Fd%2FMPUVohmWGuj%2BLRO713BHBcb3lcmmJ0tJi78FgcRSDvoHShQ6MFbCQY3a0tt4vZtkELbL7BncbWHnm9L2g2DkD8YoLMwuhcSi4DhBNtDlUDRIkyZ9ftpfCeLuXQvLgLppQGrv01mJM%2FMk50NbD4qhABODN1AnEkhQvwzZCrrITCk387CBjqkAYgIt4AxuB20McaapGLl1MVqCT7Ah3dwK8AuP6elkmJEcgBlhWfqbaSRbIcq7NuxA0sWgfJ6WGGD4JpefrgJHdXodTldLYF0WilouRY8SdhuSAm9B5yF7dOLBlcQCxyyf%2BYZ5Z07iehUjE6kCrbgLOF00mY56I8JLBd%2FN1v4CG46tT2EuBLCVXQERYJw1zlBkMHYlaCstB72htKGeEeIq5g4jJHN&X-Amz-Signature=f9e6bc45dbf22aefe5fb111e53623538b10eda34da0708b3af85fb04b78e1fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5XN5Z6C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnLDafwkCSfN3%2FeSH%2FcIDZoUn%2FP%2B8%2B%2ByvDI4Bm2BKdqwIhAPHxt3fjscI0ep3Qc0tgEUeV7PyAH37soOBrNDYODzQmKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygUJVa5HDQY0UN%2B78q3AN2EIEUZkOeXUf1YUdI9tzrqibwy8gsGvyIJKXCCtRh8ci0tcY%2FpgGaIXjYtlSrwACPnyJJEZQThIEYXcqtEVMlQI9NL3KDNNZFwikZRC4YsblIp0Fi8KYFAen88tB5hvbaWOKTASDO3AB203vl2%2BeophKF4K4me6e7kq05XHbN%2BU6MZXGp%2Bf7uB5%2B7tWnscorgkFTWg9M1wC1qyujoyU8JUL%2FD%2B1zmzdS1uCxRbJQTwYU%2FBx4uO0Kn3y2Qp0zKEhB0KUJa%2Fp9qCP1MQ7k2xcYNAN4rMYMRaVFgRbj5z4W%2BBG%2Fulykupm3xAwDhzKV1Q7OVtBrgDDIFnSzz4R7omgz8fTZyI8pzbAuCJSZH8j%2FUQhCxdnPWQ%2Bs32CMpBp232quFVMNkbjejpksB7SnUO4hXAxRYigeeFwprbEoY6MjgRiZ64TyD%2F0rpoJbh0TaaklkMKPr5N6xbXCYQOk%2Fd%2FMPUVohmWGuj%2BLRO713BHBcb3lcmmJ0tJi78FgcRSDvoHShQ6MFbCQY3a0tt4vZtkELbL7BncbWHnm9L2g2DkD8YoLMwuhcSi4DhBNtDlUDRIkyZ9ftpfCeLuXQvLgLppQGrv01mJM%2FMk50NbD4qhABODN1AnEkhQvwzZCrrITCk387CBjqkAYgIt4AxuB20McaapGLl1MVqCT7Ah3dwK8AuP6elkmJEcgBlhWfqbaSRbIcq7NuxA0sWgfJ6WGGD4JpefrgJHdXodTldLYF0WilouRY8SdhuSAm9B5yF7dOLBlcQCxyyf%2BYZ5Z07iehUjE6kCrbgLOF00mY56I8JLBd%2FN1v4CG46tT2EuBLCVXQERYJw1zlBkMHYlaCstB72htKGeEeIq5g4jJHN&X-Amz-Signature=484be6f0fed38da44624a6e702c29d6d72fc9e1c214ad58cdb82130915c4e40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5XN5Z6C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnLDafwkCSfN3%2FeSH%2FcIDZoUn%2FP%2B8%2B%2ByvDI4Bm2BKdqwIhAPHxt3fjscI0ep3Qc0tgEUeV7PyAH37soOBrNDYODzQmKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygUJVa5HDQY0UN%2B78q3AN2EIEUZkOeXUf1YUdI9tzrqibwy8gsGvyIJKXCCtRh8ci0tcY%2FpgGaIXjYtlSrwACPnyJJEZQThIEYXcqtEVMlQI9NL3KDNNZFwikZRC4YsblIp0Fi8KYFAen88tB5hvbaWOKTASDO3AB203vl2%2BeophKF4K4me6e7kq05XHbN%2BU6MZXGp%2Bf7uB5%2B7tWnscorgkFTWg9M1wC1qyujoyU8JUL%2FD%2B1zmzdS1uCxRbJQTwYU%2FBx4uO0Kn3y2Qp0zKEhB0KUJa%2Fp9qCP1MQ7k2xcYNAN4rMYMRaVFgRbj5z4W%2BBG%2Fulykupm3xAwDhzKV1Q7OVtBrgDDIFnSzz4R7omgz8fTZyI8pzbAuCJSZH8j%2FUQhCxdnPWQ%2Bs32CMpBp232quFVMNkbjejpksB7SnUO4hXAxRYigeeFwprbEoY6MjgRiZ64TyD%2F0rpoJbh0TaaklkMKPr5N6xbXCYQOk%2Fd%2FMPUVohmWGuj%2BLRO713BHBcb3lcmmJ0tJi78FgcRSDvoHShQ6MFbCQY3a0tt4vZtkELbL7BncbWHnm9L2g2DkD8YoLMwuhcSi4DhBNtDlUDRIkyZ9ftpfCeLuXQvLgLppQGrv01mJM%2FMk50NbD4qhABODN1AnEkhQvwzZCrrITCk387CBjqkAYgIt4AxuB20McaapGLl1MVqCT7Ah3dwK8AuP6elkmJEcgBlhWfqbaSRbIcq7NuxA0sWgfJ6WGGD4JpefrgJHdXodTldLYF0WilouRY8SdhuSAm9B5yF7dOLBlcQCxyyf%2BYZ5Z07iehUjE6kCrbgLOF00mY56I8JLBd%2FN1v4CG46tT2EuBLCVXQERYJw1zlBkMHYlaCstB72htKGeEeIq5g4jJHN&X-Amz-Signature=d17852151b55b70dd7a38f423f76551faa19c5d6d32218c25a0dc8554afd2fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5XN5Z6C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnLDafwkCSfN3%2FeSH%2FcIDZoUn%2FP%2B8%2B%2ByvDI4Bm2BKdqwIhAPHxt3fjscI0ep3Qc0tgEUeV7PyAH37soOBrNDYODzQmKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygUJVa5HDQY0UN%2B78q3AN2EIEUZkOeXUf1YUdI9tzrqibwy8gsGvyIJKXCCtRh8ci0tcY%2FpgGaIXjYtlSrwACPnyJJEZQThIEYXcqtEVMlQI9NL3KDNNZFwikZRC4YsblIp0Fi8KYFAen88tB5hvbaWOKTASDO3AB203vl2%2BeophKF4K4me6e7kq05XHbN%2BU6MZXGp%2Bf7uB5%2B7tWnscorgkFTWg9M1wC1qyujoyU8JUL%2FD%2B1zmzdS1uCxRbJQTwYU%2FBx4uO0Kn3y2Qp0zKEhB0KUJa%2Fp9qCP1MQ7k2xcYNAN4rMYMRaVFgRbj5z4W%2BBG%2Fulykupm3xAwDhzKV1Q7OVtBrgDDIFnSzz4R7omgz8fTZyI8pzbAuCJSZH8j%2FUQhCxdnPWQ%2Bs32CMpBp232quFVMNkbjejpksB7SnUO4hXAxRYigeeFwprbEoY6MjgRiZ64TyD%2F0rpoJbh0TaaklkMKPr5N6xbXCYQOk%2Fd%2FMPUVohmWGuj%2BLRO713BHBcb3lcmmJ0tJi78FgcRSDvoHShQ6MFbCQY3a0tt4vZtkELbL7BncbWHnm9L2g2DkD8YoLMwuhcSi4DhBNtDlUDRIkyZ9ftpfCeLuXQvLgLppQGrv01mJM%2FMk50NbD4qhABODN1AnEkhQvwzZCrrITCk387CBjqkAYgIt4AxuB20McaapGLl1MVqCT7Ah3dwK8AuP6elkmJEcgBlhWfqbaSRbIcq7NuxA0sWgfJ6WGGD4JpefrgJHdXodTldLYF0WilouRY8SdhuSAm9B5yF7dOLBlcQCxyyf%2BYZ5Z07iehUjE6kCrbgLOF00mY56I8JLBd%2FN1v4CG46tT2EuBLCVXQERYJw1zlBkMHYlaCstB72htKGeEeIq5g4jJHN&X-Amz-Signature=2a336b7c83b9789bdaebd4a259b9dbae760f07e4100ebaabadee206c81a93439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5XN5Z6C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnLDafwkCSfN3%2FeSH%2FcIDZoUn%2FP%2B8%2B%2ByvDI4Bm2BKdqwIhAPHxt3fjscI0ep3Qc0tgEUeV7PyAH37soOBrNDYODzQmKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygUJVa5HDQY0UN%2B78q3AN2EIEUZkOeXUf1YUdI9tzrqibwy8gsGvyIJKXCCtRh8ci0tcY%2FpgGaIXjYtlSrwACPnyJJEZQThIEYXcqtEVMlQI9NL3KDNNZFwikZRC4YsblIp0Fi8KYFAen88tB5hvbaWOKTASDO3AB203vl2%2BeophKF4K4me6e7kq05XHbN%2BU6MZXGp%2Bf7uB5%2B7tWnscorgkFTWg9M1wC1qyujoyU8JUL%2FD%2B1zmzdS1uCxRbJQTwYU%2FBx4uO0Kn3y2Qp0zKEhB0KUJa%2Fp9qCP1MQ7k2xcYNAN4rMYMRaVFgRbj5z4W%2BBG%2Fulykupm3xAwDhzKV1Q7OVtBrgDDIFnSzz4R7omgz8fTZyI8pzbAuCJSZH8j%2FUQhCxdnPWQ%2Bs32CMpBp232quFVMNkbjejpksB7SnUO4hXAxRYigeeFwprbEoY6MjgRiZ64TyD%2F0rpoJbh0TaaklkMKPr5N6xbXCYQOk%2Fd%2FMPUVohmWGuj%2BLRO713BHBcb3lcmmJ0tJi78FgcRSDvoHShQ6MFbCQY3a0tt4vZtkELbL7BncbWHnm9L2g2DkD8YoLMwuhcSi4DhBNtDlUDRIkyZ9ftpfCeLuXQvLgLppQGrv01mJM%2FMk50NbD4qhABODN1AnEkhQvwzZCrrITCk387CBjqkAYgIt4AxuB20McaapGLl1MVqCT7Ah3dwK8AuP6elkmJEcgBlhWfqbaSRbIcq7NuxA0sWgfJ6WGGD4JpefrgJHdXodTldLYF0WilouRY8SdhuSAm9B5yF7dOLBlcQCxyyf%2BYZ5Z07iehUjE6kCrbgLOF00mY56I8JLBd%2FN1v4CG46tT2EuBLCVXQERYJw1zlBkMHYlaCstB72htKGeEeIq5g4jJHN&X-Amz-Signature=3649e9bde62771cfe61368f7562a3f0e443d43f91722c2b9324ce031b61d36a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5XN5Z6C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnLDafwkCSfN3%2FeSH%2FcIDZoUn%2FP%2B8%2B%2ByvDI4Bm2BKdqwIhAPHxt3fjscI0ep3Qc0tgEUeV7PyAH37soOBrNDYODzQmKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygUJVa5HDQY0UN%2B78q3AN2EIEUZkOeXUf1YUdI9tzrqibwy8gsGvyIJKXCCtRh8ci0tcY%2FpgGaIXjYtlSrwACPnyJJEZQThIEYXcqtEVMlQI9NL3KDNNZFwikZRC4YsblIp0Fi8KYFAen88tB5hvbaWOKTASDO3AB203vl2%2BeophKF4K4me6e7kq05XHbN%2BU6MZXGp%2Bf7uB5%2B7tWnscorgkFTWg9M1wC1qyujoyU8JUL%2FD%2B1zmzdS1uCxRbJQTwYU%2FBx4uO0Kn3y2Qp0zKEhB0KUJa%2Fp9qCP1MQ7k2xcYNAN4rMYMRaVFgRbj5z4W%2BBG%2Fulykupm3xAwDhzKV1Q7OVtBrgDDIFnSzz4R7omgz8fTZyI8pzbAuCJSZH8j%2FUQhCxdnPWQ%2Bs32CMpBp232quFVMNkbjejpksB7SnUO4hXAxRYigeeFwprbEoY6MjgRiZ64TyD%2F0rpoJbh0TaaklkMKPr5N6xbXCYQOk%2Fd%2FMPUVohmWGuj%2BLRO713BHBcb3lcmmJ0tJi78FgcRSDvoHShQ6MFbCQY3a0tt4vZtkELbL7BncbWHnm9L2g2DkD8YoLMwuhcSi4DhBNtDlUDRIkyZ9ftpfCeLuXQvLgLppQGrv01mJM%2FMk50NbD4qhABODN1AnEkhQvwzZCrrITCk387CBjqkAYgIt4AxuB20McaapGLl1MVqCT7Ah3dwK8AuP6elkmJEcgBlhWfqbaSRbIcq7NuxA0sWgfJ6WGGD4JpefrgJHdXodTldLYF0WilouRY8SdhuSAm9B5yF7dOLBlcQCxyyf%2BYZ5Z07iehUjE6kCrbgLOF00mY56I8JLBd%2FN1v4CG46tT2EuBLCVXQERYJw1zlBkMHYlaCstB72htKGeEeIq5g4jJHN&X-Amz-Signature=c156d5ec97a373d09d35c8338b0af651ae018e78961c9f6fc581c96146c45b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
