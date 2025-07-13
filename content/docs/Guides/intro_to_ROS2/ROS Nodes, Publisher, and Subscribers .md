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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UL4XM5J%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn%2BPHucRAF1beMDovRMh0Yy0svIhRwkB24DlIZwiAL0AiEA5%2FwPjGlmgcsEbGhLi37DpRB2q5WuFgi%2Ff4mfIcxe8Z8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDILVHA%2Fym0Gi3rkHlyrcAzvFbXwofRZct5XqGPSZRUpvk7%2BYu0IRyBY%2BQL9ZG4%2Brf2hLzCSOJvYowWDCaxDMTi3AmtSX83K43tmwuB0Y7Jpfqi%2BJq719By6mmPAUoYgF0ztUql0r9DXRilU8yNaD1WdhyKIVEinWIueEKrWA8bGP1f9pGCBzdc7ao6fgvSNkt8INGtkG4eo90G4LuALMaqCqSvs0FfFTtp3PUKMBUty5aBrVn41kuFzUzO2jxVBSBTIprGhBHPrX5Hl37jln7yYfcVS7nwEwJMDK39xsdsvF4TKL5ZJJMlGOItHdePmwbDdfbOGbygtdQbKEb%2FCb2qXbfeR%2FNPy4ZPuO1aqgsJZmhK7W2kLqNb6gFGM7PSTExQ1DoU0tZp2eUGz%2BVtJfwSEFyICtusYAwMawSn0CVdbbsusw%2B3qOn497O51i0ovlHMyLHEvMljJ4vIogpzwVlq%2BlkkYshpGb4V13rhOpC8m43%2Fch%2Bs9vUFSGKeytVTI4t9UL5OxF8RZuOR8kvtNzWDcU6Fy8pxXzdUTHe8FPEPCTBMzaKQ9Dv2o%2BUh4lwUep%2FOjKiAxjROQ1PpfTsNhcLNg6xk4CKHZJbTsHesFn%2BYraC6Cb2QgVgLATBPw5WoyWBG3fflMGEIGado2wMIGkzcMGOqUBEXbuF3KhXdzWKVsplWcKr7BbioM9HUI2P7FDU86%2BIkLSlP3Psmot1Bt5wL6CUwFBDIVj4S1pwNfwJzRIwqKltfLSCTDvPihzp12cpUQR4AKhkA5GixXFKd%2FDZNRABgUM55VnLRDZZGEI4ONgu6HrZLpAu1cjY3ejnkj%2FnLsWiW69DtyJebswgPMZViHKj3Q1%2FX0GDAhDh5O7OKCthoheqYnhLoC0&X-Amz-Signature=5353bd88140cdac650deceef84d044e244ab1b0c3f8343051a811f1f836f2cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UL4XM5J%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn%2BPHucRAF1beMDovRMh0Yy0svIhRwkB24DlIZwiAL0AiEA5%2FwPjGlmgcsEbGhLi37DpRB2q5WuFgi%2Ff4mfIcxe8Z8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDILVHA%2Fym0Gi3rkHlyrcAzvFbXwofRZct5XqGPSZRUpvk7%2BYu0IRyBY%2BQL9ZG4%2Brf2hLzCSOJvYowWDCaxDMTi3AmtSX83K43tmwuB0Y7Jpfqi%2BJq719By6mmPAUoYgF0ztUql0r9DXRilU8yNaD1WdhyKIVEinWIueEKrWA8bGP1f9pGCBzdc7ao6fgvSNkt8INGtkG4eo90G4LuALMaqCqSvs0FfFTtp3PUKMBUty5aBrVn41kuFzUzO2jxVBSBTIprGhBHPrX5Hl37jln7yYfcVS7nwEwJMDK39xsdsvF4TKL5ZJJMlGOItHdePmwbDdfbOGbygtdQbKEb%2FCb2qXbfeR%2FNPy4ZPuO1aqgsJZmhK7W2kLqNb6gFGM7PSTExQ1DoU0tZp2eUGz%2BVtJfwSEFyICtusYAwMawSn0CVdbbsusw%2B3qOn497O51i0ovlHMyLHEvMljJ4vIogpzwVlq%2BlkkYshpGb4V13rhOpC8m43%2Fch%2Bs9vUFSGKeytVTI4t9UL5OxF8RZuOR8kvtNzWDcU6Fy8pxXzdUTHe8FPEPCTBMzaKQ9Dv2o%2BUh4lwUep%2FOjKiAxjROQ1PpfTsNhcLNg6xk4CKHZJbTsHesFn%2BYraC6Cb2QgVgLATBPw5WoyWBG3fflMGEIGado2wMIGkzcMGOqUBEXbuF3KhXdzWKVsplWcKr7BbioM9HUI2P7FDU86%2BIkLSlP3Psmot1Bt5wL6CUwFBDIVj4S1pwNfwJzRIwqKltfLSCTDvPihzp12cpUQR4AKhkA5GixXFKd%2FDZNRABgUM55VnLRDZZGEI4ONgu6HrZLpAu1cjY3ejnkj%2FnLsWiW69DtyJebswgPMZViHKj3Q1%2FX0GDAhDh5O7OKCthoheqYnhLoC0&X-Amz-Signature=948a363251fdf639f62058f079b5bd28ef5bcb17e859a3445c2c482c24325f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UL4XM5J%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn%2BPHucRAF1beMDovRMh0Yy0svIhRwkB24DlIZwiAL0AiEA5%2FwPjGlmgcsEbGhLi37DpRB2q5WuFgi%2Ff4mfIcxe8Z8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDILVHA%2Fym0Gi3rkHlyrcAzvFbXwofRZct5XqGPSZRUpvk7%2BYu0IRyBY%2BQL9ZG4%2Brf2hLzCSOJvYowWDCaxDMTi3AmtSX83K43tmwuB0Y7Jpfqi%2BJq719By6mmPAUoYgF0ztUql0r9DXRilU8yNaD1WdhyKIVEinWIueEKrWA8bGP1f9pGCBzdc7ao6fgvSNkt8INGtkG4eo90G4LuALMaqCqSvs0FfFTtp3PUKMBUty5aBrVn41kuFzUzO2jxVBSBTIprGhBHPrX5Hl37jln7yYfcVS7nwEwJMDK39xsdsvF4TKL5ZJJMlGOItHdePmwbDdfbOGbygtdQbKEb%2FCb2qXbfeR%2FNPy4ZPuO1aqgsJZmhK7W2kLqNb6gFGM7PSTExQ1DoU0tZp2eUGz%2BVtJfwSEFyICtusYAwMawSn0CVdbbsusw%2B3qOn497O51i0ovlHMyLHEvMljJ4vIogpzwVlq%2BlkkYshpGb4V13rhOpC8m43%2Fch%2Bs9vUFSGKeytVTI4t9UL5OxF8RZuOR8kvtNzWDcU6Fy8pxXzdUTHe8FPEPCTBMzaKQ9Dv2o%2BUh4lwUep%2FOjKiAxjROQ1PpfTsNhcLNg6xk4CKHZJbTsHesFn%2BYraC6Cb2QgVgLATBPw5WoyWBG3fflMGEIGado2wMIGkzcMGOqUBEXbuF3KhXdzWKVsplWcKr7BbioM9HUI2P7FDU86%2BIkLSlP3Psmot1Bt5wL6CUwFBDIVj4S1pwNfwJzRIwqKltfLSCTDvPihzp12cpUQR4AKhkA5GixXFKd%2FDZNRABgUM55VnLRDZZGEI4ONgu6HrZLpAu1cjY3ejnkj%2FnLsWiW69DtyJebswgPMZViHKj3Q1%2FX0GDAhDh5O7OKCthoheqYnhLoC0&X-Amz-Signature=9c0fa9649afe3436ba75dea4cb75ce787b3863f416bfa1bc1d2d99893554cf62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UL4XM5J%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn%2BPHucRAF1beMDovRMh0Yy0svIhRwkB24DlIZwiAL0AiEA5%2FwPjGlmgcsEbGhLi37DpRB2q5WuFgi%2Ff4mfIcxe8Z8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDILVHA%2Fym0Gi3rkHlyrcAzvFbXwofRZct5XqGPSZRUpvk7%2BYu0IRyBY%2BQL9ZG4%2Brf2hLzCSOJvYowWDCaxDMTi3AmtSX83K43tmwuB0Y7Jpfqi%2BJq719By6mmPAUoYgF0ztUql0r9DXRilU8yNaD1WdhyKIVEinWIueEKrWA8bGP1f9pGCBzdc7ao6fgvSNkt8INGtkG4eo90G4LuALMaqCqSvs0FfFTtp3PUKMBUty5aBrVn41kuFzUzO2jxVBSBTIprGhBHPrX5Hl37jln7yYfcVS7nwEwJMDK39xsdsvF4TKL5ZJJMlGOItHdePmwbDdfbOGbygtdQbKEb%2FCb2qXbfeR%2FNPy4ZPuO1aqgsJZmhK7W2kLqNb6gFGM7PSTExQ1DoU0tZp2eUGz%2BVtJfwSEFyICtusYAwMawSn0CVdbbsusw%2B3qOn497O51i0ovlHMyLHEvMljJ4vIogpzwVlq%2BlkkYshpGb4V13rhOpC8m43%2Fch%2Bs9vUFSGKeytVTI4t9UL5OxF8RZuOR8kvtNzWDcU6Fy8pxXzdUTHe8FPEPCTBMzaKQ9Dv2o%2BUh4lwUep%2FOjKiAxjROQ1PpfTsNhcLNg6xk4CKHZJbTsHesFn%2BYraC6Cb2QgVgLATBPw5WoyWBG3fflMGEIGado2wMIGkzcMGOqUBEXbuF3KhXdzWKVsplWcKr7BbioM9HUI2P7FDU86%2BIkLSlP3Psmot1Bt5wL6CUwFBDIVj4S1pwNfwJzRIwqKltfLSCTDvPihzp12cpUQR4AKhkA5GixXFKd%2FDZNRABgUM55VnLRDZZGEI4ONgu6HrZLpAu1cjY3ejnkj%2FnLsWiW69DtyJebswgPMZViHKj3Q1%2FX0GDAhDh5O7OKCthoheqYnhLoC0&X-Amz-Signature=26488e41fbe82ad5144ee58b1262c573da72f973dc962bd2750d1204c5ff774d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UL4XM5J%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn%2BPHucRAF1beMDovRMh0Yy0svIhRwkB24DlIZwiAL0AiEA5%2FwPjGlmgcsEbGhLi37DpRB2q5WuFgi%2Ff4mfIcxe8Z8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDILVHA%2Fym0Gi3rkHlyrcAzvFbXwofRZct5XqGPSZRUpvk7%2BYu0IRyBY%2BQL9ZG4%2Brf2hLzCSOJvYowWDCaxDMTi3AmtSX83K43tmwuB0Y7Jpfqi%2BJq719By6mmPAUoYgF0ztUql0r9DXRilU8yNaD1WdhyKIVEinWIueEKrWA8bGP1f9pGCBzdc7ao6fgvSNkt8INGtkG4eo90G4LuALMaqCqSvs0FfFTtp3PUKMBUty5aBrVn41kuFzUzO2jxVBSBTIprGhBHPrX5Hl37jln7yYfcVS7nwEwJMDK39xsdsvF4TKL5ZJJMlGOItHdePmwbDdfbOGbygtdQbKEb%2FCb2qXbfeR%2FNPy4ZPuO1aqgsJZmhK7W2kLqNb6gFGM7PSTExQ1DoU0tZp2eUGz%2BVtJfwSEFyICtusYAwMawSn0CVdbbsusw%2B3qOn497O51i0ovlHMyLHEvMljJ4vIogpzwVlq%2BlkkYshpGb4V13rhOpC8m43%2Fch%2Bs9vUFSGKeytVTI4t9UL5OxF8RZuOR8kvtNzWDcU6Fy8pxXzdUTHe8FPEPCTBMzaKQ9Dv2o%2BUh4lwUep%2FOjKiAxjROQ1PpfTsNhcLNg6xk4CKHZJbTsHesFn%2BYraC6Cb2QgVgLATBPw5WoyWBG3fflMGEIGado2wMIGkzcMGOqUBEXbuF3KhXdzWKVsplWcKr7BbioM9HUI2P7FDU86%2BIkLSlP3Psmot1Bt5wL6CUwFBDIVj4S1pwNfwJzRIwqKltfLSCTDvPihzp12cpUQR4AKhkA5GixXFKd%2FDZNRABgUM55VnLRDZZGEI4ONgu6HrZLpAu1cjY3ejnkj%2FnLsWiW69DtyJebswgPMZViHKj3Q1%2FX0GDAhDh5O7OKCthoheqYnhLoC0&X-Amz-Signature=d63c03b010d84b730e4dbada5692127e3f1a9828aea22c6e4ac435a188101695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UL4XM5J%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn%2BPHucRAF1beMDovRMh0Yy0svIhRwkB24DlIZwiAL0AiEA5%2FwPjGlmgcsEbGhLi37DpRB2q5WuFgi%2Ff4mfIcxe8Z8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDILVHA%2Fym0Gi3rkHlyrcAzvFbXwofRZct5XqGPSZRUpvk7%2BYu0IRyBY%2BQL9ZG4%2Brf2hLzCSOJvYowWDCaxDMTi3AmtSX83K43tmwuB0Y7Jpfqi%2BJq719By6mmPAUoYgF0ztUql0r9DXRilU8yNaD1WdhyKIVEinWIueEKrWA8bGP1f9pGCBzdc7ao6fgvSNkt8INGtkG4eo90G4LuALMaqCqSvs0FfFTtp3PUKMBUty5aBrVn41kuFzUzO2jxVBSBTIprGhBHPrX5Hl37jln7yYfcVS7nwEwJMDK39xsdsvF4TKL5ZJJMlGOItHdePmwbDdfbOGbygtdQbKEb%2FCb2qXbfeR%2FNPy4ZPuO1aqgsJZmhK7W2kLqNb6gFGM7PSTExQ1DoU0tZp2eUGz%2BVtJfwSEFyICtusYAwMawSn0CVdbbsusw%2B3qOn497O51i0ovlHMyLHEvMljJ4vIogpzwVlq%2BlkkYshpGb4V13rhOpC8m43%2Fch%2Bs9vUFSGKeytVTI4t9UL5OxF8RZuOR8kvtNzWDcU6Fy8pxXzdUTHe8FPEPCTBMzaKQ9Dv2o%2BUh4lwUep%2FOjKiAxjROQ1PpfTsNhcLNg6xk4CKHZJbTsHesFn%2BYraC6Cb2QgVgLATBPw5WoyWBG3fflMGEIGado2wMIGkzcMGOqUBEXbuF3KhXdzWKVsplWcKr7BbioM9HUI2P7FDU86%2BIkLSlP3Psmot1Bt5wL6CUwFBDIVj4S1pwNfwJzRIwqKltfLSCTDvPihzp12cpUQR4AKhkA5GixXFKd%2FDZNRABgUM55VnLRDZZGEI4ONgu6HrZLpAu1cjY3ejnkj%2FnLsWiW69DtyJebswgPMZViHKj3Q1%2FX0GDAhDh5O7OKCthoheqYnhLoC0&X-Amz-Signature=9a192c49853eb7cd3b5d6a2a4e5b8308b26492a303fdfbd4b1f17c08185381de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UL4XM5J%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn%2BPHucRAF1beMDovRMh0Yy0svIhRwkB24DlIZwiAL0AiEA5%2FwPjGlmgcsEbGhLi37DpRB2q5WuFgi%2Ff4mfIcxe8Z8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDILVHA%2Fym0Gi3rkHlyrcAzvFbXwofRZct5XqGPSZRUpvk7%2BYu0IRyBY%2BQL9ZG4%2Brf2hLzCSOJvYowWDCaxDMTi3AmtSX83K43tmwuB0Y7Jpfqi%2BJq719By6mmPAUoYgF0ztUql0r9DXRilU8yNaD1WdhyKIVEinWIueEKrWA8bGP1f9pGCBzdc7ao6fgvSNkt8INGtkG4eo90G4LuALMaqCqSvs0FfFTtp3PUKMBUty5aBrVn41kuFzUzO2jxVBSBTIprGhBHPrX5Hl37jln7yYfcVS7nwEwJMDK39xsdsvF4TKL5ZJJMlGOItHdePmwbDdfbOGbygtdQbKEb%2FCb2qXbfeR%2FNPy4ZPuO1aqgsJZmhK7W2kLqNb6gFGM7PSTExQ1DoU0tZp2eUGz%2BVtJfwSEFyICtusYAwMawSn0CVdbbsusw%2B3qOn497O51i0ovlHMyLHEvMljJ4vIogpzwVlq%2BlkkYshpGb4V13rhOpC8m43%2Fch%2Bs9vUFSGKeytVTI4t9UL5OxF8RZuOR8kvtNzWDcU6Fy8pxXzdUTHe8FPEPCTBMzaKQ9Dv2o%2BUh4lwUep%2FOjKiAxjROQ1PpfTsNhcLNg6xk4CKHZJbTsHesFn%2BYraC6Cb2QgVgLATBPw5WoyWBG3fflMGEIGado2wMIGkzcMGOqUBEXbuF3KhXdzWKVsplWcKr7BbioM9HUI2P7FDU86%2BIkLSlP3Psmot1Bt5wL6CUwFBDIVj4S1pwNfwJzRIwqKltfLSCTDvPihzp12cpUQR4AKhkA5GixXFKd%2FDZNRABgUM55VnLRDZZGEI4ONgu6HrZLpAu1cjY3ejnkj%2FnLsWiW69DtyJebswgPMZViHKj3Q1%2FX0GDAhDh5O7OKCthoheqYnhLoC0&X-Amz-Signature=b82289ae7ae97ba22ebde2e0c9090998edc04042e6f75b155d0b33f986ed92f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UL4XM5J%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn%2BPHucRAF1beMDovRMh0Yy0svIhRwkB24DlIZwiAL0AiEA5%2FwPjGlmgcsEbGhLi37DpRB2q5WuFgi%2Ff4mfIcxe8Z8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDILVHA%2Fym0Gi3rkHlyrcAzvFbXwofRZct5XqGPSZRUpvk7%2BYu0IRyBY%2BQL9ZG4%2Brf2hLzCSOJvYowWDCaxDMTi3AmtSX83K43tmwuB0Y7Jpfqi%2BJq719By6mmPAUoYgF0ztUql0r9DXRilU8yNaD1WdhyKIVEinWIueEKrWA8bGP1f9pGCBzdc7ao6fgvSNkt8INGtkG4eo90G4LuALMaqCqSvs0FfFTtp3PUKMBUty5aBrVn41kuFzUzO2jxVBSBTIprGhBHPrX5Hl37jln7yYfcVS7nwEwJMDK39xsdsvF4TKL5ZJJMlGOItHdePmwbDdfbOGbygtdQbKEb%2FCb2qXbfeR%2FNPy4ZPuO1aqgsJZmhK7W2kLqNb6gFGM7PSTExQ1DoU0tZp2eUGz%2BVtJfwSEFyICtusYAwMawSn0CVdbbsusw%2B3qOn497O51i0ovlHMyLHEvMljJ4vIogpzwVlq%2BlkkYshpGb4V13rhOpC8m43%2Fch%2Bs9vUFSGKeytVTI4t9UL5OxF8RZuOR8kvtNzWDcU6Fy8pxXzdUTHe8FPEPCTBMzaKQ9Dv2o%2BUh4lwUep%2FOjKiAxjROQ1PpfTsNhcLNg6xk4CKHZJbTsHesFn%2BYraC6Cb2QgVgLATBPw5WoyWBG3fflMGEIGado2wMIGkzcMGOqUBEXbuF3KhXdzWKVsplWcKr7BbioM9HUI2P7FDU86%2BIkLSlP3Psmot1Bt5wL6CUwFBDIVj4S1pwNfwJzRIwqKltfLSCTDvPihzp12cpUQR4AKhkA5GixXFKd%2FDZNRABgUM55VnLRDZZGEI4ONgu6HrZLpAu1cjY3ejnkj%2FnLsWiW69DtyJebswgPMZViHKj3Q1%2FX0GDAhDh5O7OKCthoheqYnhLoC0&X-Amz-Signature=706ad1bc69bae66b65e5bba10d9717f4d9bcfa5e91f0cf1d1ca4068229b7b0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
