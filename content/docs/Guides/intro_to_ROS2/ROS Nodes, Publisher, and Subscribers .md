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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GRQJOW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDvq0ZkvPTcUb%2F2efa4BXLda1Iu1SG60IZo0Sap50%2Fu5gIgMUKXhosZaeCyD0RzqrXAJ3z55LToeYOhI7F7hpRfkJQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHVufaeApk0xb1WINCrcAwU8w3MIx5GZMUjp0u%2FAHPq3DrTf6dmssUtM0P2Jtpzv0FHW%2Fx4luuShm1L7%2FOsl8bYusX%2BAijBaJU7dYBF1KAm2lO6FMxDCA0DFxTHPF7YkPIuyWzC%2BeuQHIDejocLVMhahg2Vw8JuGxcShlaOGWhX1FbQizBN1uFlojx1d5T2aY0VJ0dezx6NuAUXz3Iktr2Q4zpKfe%2ByxoJdrvvRB0w88eYYOxXUz2s6mv8wBxo6tSBF%2FN2ORxeEvxqCTIwORZRMfCeCgM3xqwhbby5u9JkdoCMQ3LMBNf3yQHVBIqQMQTgreS8atHfOa6t0zzzZKpHPC%2B%2BZcZYOjJIcAgR%2FC%2FxLZJH%2F2pfDiPRiz%2Bo%2B4KXyVHlb%2FPXWZ1yKhJXQXvs7wugW5LfIvhFedXKP3oXOkJEqOj2O5CkfmH2x4BC0Blsn%2FOpwXifVCzqYCByq%2FyvIuYaLPK7kniaiFnZQfPuFKX4ooTi15lh4labeEZEhX7NGAMaPiRNIreRgYCQxi4I9yiBDaIOJlhP7rtvDA89Lc3At0BZO9RQ5g9MRM6Cy2Q8SqrJVSHCmV15N5R4K2%2FWSqLa%2FYNxKRbk4ehwQJIlAR1dNx09LAP%2BhkUF5xe8o2Qc5EwEig%2FPWZglWybIIkMNzqvL0GOqUB49Ns3ZXMYzxgn8Y0k1evu1o%2F9uTaYR22dXL4QJQhkd8kMl8O4bP4qfp%2FblmNvpn%2BCESHycWrv2PfCGplTAYgbW%2FkOVF12rICO2mb9dCsVbUSm9he%2FtQm7MllhrIidzv6jQA4Po9EtY4AV99fRvADKR45hGrTRcV8XAbYI3tUEtTId1PLVJLmC83nm6gVXOrrdthwCYwoganPrlmVYextC8zM20R%2F&X-Amz-Signature=52d5cf703b1cd7fcc7365edb56fcffe5ab0c33c23f012e18f3705067f703f384&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GRQJOW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDvq0ZkvPTcUb%2F2efa4BXLda1Iu1SG60IZo0Sap50%2Fu5gIgMUKXhosZaeCyD0RzqrXAJ3z55LToeYOhI7F7hpRfkJQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHVufaeApk0xb1WINCrcAwU8w3MIx5GZMUjp0u%2FAHPq3DrTf6dmssUtM0P2Jtpzv0FHW%2Fx4luuShm1L7%2FOsl8bYusX%2BAijBaJU7dYBF1KAm2lO6FMxDCA0DFxTHPF7YkPIuyWzC%2BeuQHIDejocLVMhahg2Vw8JuGxcShlaOGWhX1FbQizBN1uFlojx1d5T2aY0VJ0dezx6NuAUXz3Iktr2Q4zpKfe%2ByxoJdrvvRB0w88eYYOxXUz2s6mv8wBxo6tSBF%2FN2ORxeEvxqCTIwORZRMfCeCgM3xqwhbby5u9JkdoCMQ3LMBNf3yQHVBIqQMQTgreS8atHfOa6t0zzzZKpHPC%2B%2BZcZYOjJIcAgR%2FC%2FxLZJH%2F2pfDiPRiz%2Bo%2B4KXyVHlb%2FPXWZ1yKhJXQXvs7wugW5LfIvhFedXKP3oXOkJEqOj2O5CkfmH2x4BC0Blsn%2FOpwXifVCzqYCByq%2FyvIuYaLPK7kniaiFnZQfPuFKX4ooTi15lh4labeEZEhX7NGAMaPiRNIreRgYCQxi4I9yiBDaIOJlhP7rtvDA89Lc3At0BZO9RQ5g9MRM6Cy2Q8SqrJVSHCmV15N5R4K2%2FWSqLa%2FYNxKRbk4ehwQJIlAR1dNx09LAP%2BhkUF5xe8o2Qc5EwEig%2FPWZglWybIIkMNzqvL0GOqUB49Ns3ZXMYzxgn8Y0k1evu1o%2F9uTaYR22dXL4QJQhkd8kMl8O4bP4qfp%2FblmNvpn%2BCESHycWrv2PfCGplTAYgbW%2FkOVF12rICO2mb9dCsVbUSm9he%2FtQm7MllhrIidzv6jQA4Po9EtY4AV99fRvADKR45hGrTRcV8XAbYI3tUEtTId1PLVJLmC83nm6gVXOrrdthwCYwoganPrlmVYextC8zM20R%2F&X-Amz-Signature=1b05e19e5b177c856ff73e837fd4c82fd8a48b912089eaba45966df28a138ede&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GRQJOW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDvq0ZkvPTcUb%2F2efa4BXLda1Iu1SG60IZo0Sap50%2Fu5gIgMUKXhosZaeCyD0RzqrXAJ3z55LToeYOhI7F7hpRfkJQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHVufaeApk0xb1WINCrcAwU8w3MIx5GZMUjp0u%2FAHPq3DrTf6dmssUtM0P2Jtpzv0FHW%2Fx4luuShm1L7%2FOsl8bYusX%2BAijBaJU7dYBF1KAm2lO6FMxDCA0DFxTHPF7YkPIuyWzC%2BeuQHIDejocLVMhahg2Vw8JuGxcShlaOGWhX1FbQizBN1uFlojx1d5T2aY0VJ0dezx6NuAUXz3Iktr2Q4zpKfe%2ByxoJdrvvRB0w88eYYOxXUz2s6mv8wBxo6tSBF%2FN2ORxeEvxqCTIwORZRMfCeCgM3xqwhbby5u9JkdoCMQ3LMBNf3yQHVBIqQMQTgreS8atHfOa6t0zzzZKpHPC%2B%2BZcZYOjJIcAgR%2FC%2FxLZJH%2F2pfDiPRiz%2Bo%2B4KXyVHlb%2FPXWZ1yKhJXQXvs7wugW5LfIvhFedXKP3oXOkJEqOj2O5CkfmH2x4BC0Blsn%2FOpwXifVCzqYCByq%2FyvIuYaLPK7kniaiFnZQfPuFKX4ooTi15lh4labeEZEhX7NGAMaPiRNIreRgYCQxi4I9yiBDaIOJlhP7rtvDA89Lc3At0BZO9RQ5g9MRM6Cy2Q8SqrJVSHCmV15N5R4K2%2FWSqLa%2FYNxKRbk4ehwQJIlAR1dNx09LAP%2BhkUF5xe8o2Qc5EwEig%2FPWZglWybIIkMNzqvL0GOqUB49Ns3ZXMYzxgn8Y0k1evu1o%2F9uTaYR22dXL4QJQhkd8kMl8O4bP4qfp%2FblmNvpn%2BCESHycWrv2PfCGplTAYgbW%2FkOVF12rICO2mb9dCsVbUSm9he%2FtQm7MllhrIidzv6jQA4Po9EtY4AV99fRvADKR45hGrTRcV8XAbYI3tUEtTId1PLVJLmC83nm6gVXOrrdthwCYwoganPrlmVYextC8zM20R%2F&X-Amz-Signature=b24a98aad8ef4eefacbf22893b333e751a443d0a5ae89ce270516ceaf8fad41d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GRQJOW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDvq0ZkvPTcUb%2F2efa4BXLda1Iu1SG60IZo0Sap50%2Fu5gIgMUKXhosZaeCyD0RzqrXAJ3z55LToeYOhI7F7hpRfkJQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHVufaeApk0xb1WINCrcAwU8w3MIx5GZMUjp0u%2FAHPq3DrTf6dmssUtM0P2Jtpzv0FHW%2Fx4luuShm1L7%2FOsl8bYusX%2BAijBaJU7dYBF1KAm2lO6FMxDCA0DFxTHPF7YkPIuyWzC%2BeuQHIDejocLVMhahg2Vw8JuGxcShlaOGWhX1FbQizBN1uFlojx1d5T2aY0VJ0dezx6NuAUXz3Iktr2Q4zpKfe%2ByxoJdrvvRB0w88eYYOxXUz2s6mv8wBxo6tSBF%2FN2ORxeEvxqCTIwORZRMfCeCgM3xqwhbby5u9JkdoCMQ3LMBNf3yQHVBIqQMQTgreS8atHfOa6t0zzzZKpHPC%2B%2BZcZYOjJIcAgR%2FC%2FxLZJH%2F2pfDiPRiz%2Bo%2B4KXyVHlb%2FPXWZ1yKhJXQXvs7wugW5LfIvhFedXKP3oXOkJEqOj2O5CkfmH2x4BC0Blsn%2FOpwXifVCzqYCByq%2FyvIuYaLPK7kniaiFnZQfPuFKX4ooTi15lh4labeEZEhX7NGAMaPiRNIreRgYCQxi4I9yiBDaIOJlhP7rtvDA89Lc3At0BZO9RQ5g9MRM6Cy2Q8SqrJVSHCmV15N5R4K2%2FWSqLa%2FYNxKRbk4ehwQJIlAR1dNx09LAP%2BhkUF5xe8o2Qc5EwEig%2FPWZglWybIIkMNzqvL0GOqUB49Ns3ZXMYzxgn8Y0k1evu1o%2F9uTaYR22dXL4QJQhkd8kMl8O4bP4qfp%2FblmNvpn%2BCESHycWrv2PfCGplTAYgbW%2FkOVF12rICO2mb9dCsVbUSm9he%2FtQm7MllhrIidzv6jQA4Po9EtY4AV99fRvADKR45hGrTRcV8XAbYI3tUEtTId1PLVJLmC83nm6gVXOrrdthwCYwoganPrlmVYextC8zM20R%2F&X-Amz-Signature=daddf3a6b818079b7bb12c173393afaa7d5d15b899a7e3d176b5c06e364e1e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GRQJOW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDvq0ZkvPTcUb%2F2efa4BXLda1Iu1SG60IZo0Sap50%2Fu5gIgMUKXhosZaeCyD0RzqrXAJ3z55LToeYOhI7F7hpRfkJQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHVufaeApk0xb1WINCrcAwU8w3MIx5GZMUjp0u%2FAHPq3DrTf6dmssUtM0P2Jtpzv0FHW%2Fx4luuShm1L7%2FOsl8bYusX%2BAijBaJU7dYBF1KAm2lO6FMxDCA0DFxTHPF7YkPIuyWzC%2BeuQHIDejocLVMhahg2Vw8JuGxcShlaOGWhX1FbQizBN1uFlojx1d5T2aY0VJ0dezx6NuAUXz3Iktr2Q4zpKfe%2ByxoJdrvvRB0w88eYYOxXUz2s6mv8wBxo6tSBF%2FN2ORxeEvxqCTIwORZRMfCeCgM3xqwhbby5u9JkdoCMQ3LMBNf3yQHVBIqQMQTgreS8atHfOa6t0zzzZKpHPC%2B%2BZcZYOjJIcAgR%2FC%2FxLZJH%2F2pfDiPRiz%2Bo%2B4KXyVHlb%2FPXWZ1yKhJXQXvs7wugW5LfIvhFedXKP3oXOkJEqOj2O5CkfmH2x4BC0Blsn%2FOpwXifVCzqYCByq%2FyvIuYaLPK7kniaiFnZQfPuFKX4ooTi15lh4labeEZEhX7NGAMaPiRNIreRgYCQxi4I9yiBDaIOJlhP7rtvDA89Lc3At0BZO9RQ5g9MRM6Cy2Q8SqrJVSHCmV15N5R4K2%2FWSqLa%2FYNxKRbk4ehwQJIlAR1dNx09LAP%2BhkUF5xe8o2Qc5EwEig%2FPWZglWybIIkMNzqvL0GOqUB49Ns3ZXMYzxgn8Y0k1evu1o%2F9uTaYR22dXL4QJQhkd8kMl8O4bP4qfp%2FblmNvpn%2BCESHycWrv2PfCGplTAYgbW%2FkOVF12rICO2mb9dCsVbUSm9he%2FtQm7MllhrIidzv6jQA4Po9EtY4AV99fRvADKR45hGrTRcV8XAbYI3tUEtTId1PLVJLmC83nm6gVXOrrdthwCYwoganPrlmVYextC8zM20R%2F&X-Amz-Signature=24350140fab51ba0799a2070239cb23f2214d7eb785b54c2b8ed11590e509b33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GRQJOW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDvq0ZkvPTcUb%2F2efa4BXLda1Iu1SG60IZo0Sap50%2Fu5gIgMUKXhosZaeCyD0RzqrXAJ3z55LToeYOhI7F7hpRfkJQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHVufaeApk0xb1WINCrcAwU8w3MIx5GZMUjp0u%2FAHPq3DrTf6dmssUtM0P2Jtpzv0FHW%2Fx4luuShm1L7%2FOsl8bYusX%2BAijBaJU7dYBF1KAm2lO6FMxDCA0DFxTHPF7YkPIuyWzC%2BeuQHIDejocLVMhahg2Vw8JuGxcShlaOGWhX1FbQizBN1uFlojx1d5T2aY0VJ0dezx6NuAUXz3Iktr2Q4zpKfe%2ByxoJdrvvRB0w88eYYOxXUz2s6mv8wBxo6tSBF%2FN2ORxeEvxqCTIwORZRMfCeCgM3xqwhbby5u9JkdoCMQ3LMBNf3yQHVBIqQMQTgreS8atHfOa6t0zzzZKpHPC%2B%2BZcZYOjJIcAgR%2FC%2FxLZJH%2F2pfDiPRiz%2Bo%2B4KXyVHlb%2FPXWZ1yKhJXQXvs7wugW5LfIvhFedXKP3oXOkJEqOj2O5CkfmH2x4BC0Blsn%2FOpwXifVCzqYCByq%2FyvIuYaLPK7kniaiFnZQfPuFKX4ooTi15lh4labeEZEhX7NGAMaPiRNIreRgYCQxi4I9yiBDaIOJlhP7rtvDA89Lc3At0BZO9RQ5g9MRM6Cy2Q8SqrJVSHCmV15N5R4K2%2FWSqLa%2FYNxKRbk4ehwQJIlAR1dNx09LAP%2BhkUF5xe8o2Qc5EwEig%2FPWZglWybIIkMNzqvL0GOqUB49Ns3ZXMYzxgn8Y0k1evu1o%2F9uTaYR22dXL4QJQhkd8kMl8O4bP4qfp%2FblmNvpn%2BCESHycWrv2PfCGplTAYgbW%2FkOVF12rICO2mb9dCsVbUSm9he%2FtQm7MllhrIidzv6jQA4Po9EtY4AV99fRvADKR45hGrTRcV8XAbYI3tUEtTId1PLVJLmC83nm6gVXOrrdthwCYwoganPrlmVYextC8zM20R%2F&X-Amz-Signature=c0a0108758e9e63fca4a64a129a2dfe2d3e548c3a0492618158620bcc915f551&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GRQJOW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDvq0ZkvPTcUb%2F2efa4BXLda1Iu1SG60IZo0Sap50%2Fu5gIgMUKXhosZaeCyD0RzqrXAJ3z55LToeYOhI7F7hpRfkJQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHVufaeApk0xb1WINCrcAwU8w3MIx5GZMUjp0u%2FAHPq3DrTf6dmssUtM0P2Jtpzv0FHW%2Fx4luuShm1L7%2FOsl8bYusX%2BAijBaJU7dYBF1KAm2lO6FMxDCA0DFxTHPF7YkPIuyWzC%2BeuQHIDejocLVMhahg2Vw8JuGxcShlaOGWhX1FbQizBN1uFlojx1d5T2aY0VJ0dezx6NuAUXz3Iktr2Q4zpKfe%2ByxoJdrvvRB0w88eYYOxXUz2s6mv8wBxo6tSBF%2FN2ORxeEvxqCTIwORZRMfCeCgM3xqwhbby5u9JkdoCMQ3LMBNf3yQHVBIqQMQTgreS8atHfOa6t0zzzZKpHPC%2B%2BZcZYOjJIcAgR%2FC%2FxLZJH%2F2pfDiPRiz%2Bo%2B4KXyVHlb%2FPXWZ1yKhJXQXvs7wugW5LfIvhFedXKP3oXOkJEqOj2O5CkfmH2x4BC0Blsn%2FOpwXifVCzqYCByq%2FyvIuYaLPK7kniaiFnZQfPuFKX4ooTi15lh4labeEZEhX7NGAMaPiRNIreRgYCQxi4I9yiBDaIOJlhP7rtvDA89Lc3At0BZO9RQ5g9MRM6Cy2Q8SqrJVSHCmV15N5R4K2%2FWSqLa%2FYNxKRbk4ehwQJIlAR1dNx09LAP%2BhkUF5xe8o2Qc5EwEig%2FPWZglWybIIkMNzqvL0GOqUB49Ns3ZXMYzxgn8Y0k1evu1o%2F9uTaYR22dXL4QJQhkd8kMl8O4bP4qfp%2FblmNvpn%2BCESHycWrv2PfCGplTAYgbW%2FkOVF12rICO2mb9dCsVbUSm9he%2FtQm7MllhrIidzv6jQA4Po9EtY4AV99fRvADKR45hGrTRcV8XAbYI3tUEtTId1PLVJLmC83nm6gVXOrrdthwCYwoganPrlmVYextC8zM20R%2F&X-Amz-Signature=ba0ee25c63c0f4ac57e8f21a76c325f25e669d9d4918bbc27ac7eff9788b44d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GRQJOW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDvq0ZkvPTcUb%2F2efa4BXLda1Iu1SG60IZo0Sap50%2Fu5gIgMUKXhosZaeCyD0RzqrXAJ3z55LToeYOhI7F7hpRfkJQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHVufaeApk0xb1WINCrcAwU8w3MIx5GZMUjp0u%2FAHPq3DrTf6dmssUtM0P2Jtpzv0FHW%2Fx4luuShm1L7%2FOsl8bYusX%2BAijBaJU7dYBF1KAm2lO6FMxDCA0DFxTHPF7YkPIuyWzC%2BeuQHIDejocLVMhahg2Vw8JuGxcShlaOGWhX1FbQizBN1uFlojx1d5T2aY0VJ0dezx6NuAUXz3Iktr2Q4zpKfe%2ByxoJdrvvRB0w88eYYOxXUz2s6mv8wBxo6tSBF%2FN2ORxeEvxqCTIwORZRMfCeCgM3xqwhbby5u9JkdoCMQ3LMBNf3yQHVBIqQMQTgreS8atHfOa6t0zzzZKpHPC%2B%2BZcZYOjJIcAgR%2FC%2FxLZJH%2F2pfDiPRiz%2Bo%2B4KXyVHlb%2FPXWZ1yKhJXQXvs7wugW5LfIvhFedXKP3oXOkJEqOj2O5CkfmH2x4BC0Blsn%2FOpwXifVCzqYCByq%2FyvIuYaLPK7kniaiFnZQfPuFKX4ooTi15lh4labeEZEhX7NGAMaPiRNIreRgYCQxi4I9yiBDaIOJlhP7rtvDA89Lc3At0BZO9RQ5g9MRM6Cy2Q8SqrJVSHCmV15N5R4K2%2FWSqLa%2FYNxKRbk4ehwQJIlAR1dNx09LAP%2BhkUF5xe8o2Qc5EwEig%2FPWZglWybIIkMNzqvL0GOqUB49Ns3ZXMYzxgn8Y0k1evu1o%2F9uTaYR22dXL4QJQhkd8kMl8O4bP4qfp%2FblmNvpn%2BCESHycWrv2PfCGplTAYgbW%2FkOVF12rICO2mb9dCsVbUSm9he%2FtQm7MllhrIidzv6jQA4Po9EtY4AV99fRvADKR45hGrTRcV8XAbYI3tUEtTId1PLVJLmC83nm6gVXOrrdthwCYwoganPrlmVYextC8zM20R%2F&X-Amz-Signature=38cb2532e638387d2d28d71ac1be4f85d2f593687b5f1e6de26c973fdc1a0ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
