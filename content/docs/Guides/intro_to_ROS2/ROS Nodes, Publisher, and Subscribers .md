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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX22ZMZS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqjCi887i%2FBzu1qmbTa60JuHhjstWB%2FYBoeg%2FZYWD3xwIgaPZO%2BSWZxpnByz4ZiqRHt%2B%2BTmFfafN5eNSdv%2F%2FJRa2kq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJGY5otIV0Io0WHmCircA4Trnx3N1VtUcFZtfW%2FMKz%2FMR2RlACSukgY8xndGRa98wAFSjPzY%2FYzVjcBi2Sd04i6WWDqYDJT%2B%2FeUQ9%2Bb8SjVyJAaDyJfAnhT5x0caOGKpxeYtO3MAQ5CXH22IWY4K%2FNdcOxutmWyfuVOugm4PqCjXt8ddTFkNQsVkAIEaD9yTzQ4y21gUhvnNweQKculjC6ee3hVFKicowhwHJ92pde7L%2FnPNFgTLOCmO2gr1mXIsTV0lVAIdsGVZvxVkez%2Bfvz9ROV7ZWa4dG8ef%2Fm39UTJueLWFhr6V5MjP3SStLAK8CL5s05oxcIaf7MOzvkKMZ%2B80PMJg0uANMsjoDJLcGPuf0n9%2FX%2BXCHI5fEjlHd98qaeGaALPfM3%2BE8sJh9xTsp%2FGam41ZSv7rzRm4f2QBO9pZvqMDdz2hLbIXlT0sxRa4lojHLHD1jXoRHOHBDJuUKlCUmIYWGUELSjZW%2Fp8Z8%2BUPCnV0dVGT0vAritYT%2FAAueH4%2B6M%2BQFhmScw4TagVgcB02uQlqJ0B2tgDx80RFy1bDtLMIWHYHVgZ93ZQBzLNBSkjh91EH2Xmbf88vTZ1nHTcvN9Suq0pxUZx9FCce4cM0XBSrq6o3XbtxfbWyXN8bPbG0njs0SMcQZV4YMPyX6MAGOqUBmvzpIiJlki%2B9QALFQeTeUspgyN7rbrs8WrzkmCvbae0igbZetAUXS%2FwRVIDuTflwCWjsW4o0HF4PIdwzyUD09bo1iKFIS64T43c8Uii0QkttbK1AYpa7cV67QDgP%2BgkKtsSsw0JUz8%2Fo1v2wzHClZ%2BLuGH4zYgMWn4NILsQsFvpjaOuB8OZWJidtFjxyfj6xRT2d%2F%2F0Q5WlcThY3MFP4Cds1%2F38k&X-Amz-Signature=d3e4617fe03e68e04b02731a578afff0404a1c76f628b0eb36b1602299ceeaa2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX22ZMZS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqjCi887i%2FBzu1qmbTa60JuHhjstWB%2FYBoeg%2FZYWD3xwIgaPZO%2BSWZxpnByz4ZiqRHt%2B%2BTmFfafN5eNSdv%2F%2FJRa2kq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJGY5otIV0Io0WHmCircA4Trnx3N1VtUcFZtfW%2FMKz%2FMR2RlACSukgY8xndGRa98wAFSjPzY%2FYzVjcBi2Sd04i6WWDqYDJT%2B%2FeUQ9%2Bb8SjVyJAaDyJfAnhT5x0caOGKpxeYtO3MAQ5CXH22IWY4K%2FNdcOxutmWyfuVOugm4PqCjXt8ddTFkNQsVkAIEaD9yTzQ4y21gUhvnNweQKculjC6ee3hVFKicowhwHJ92pde7L%2FnPNFgTLOCmO2gr1mXIsTV0lVAIdsGVZvxVkez%2Bfvz9ROV7ZWa4dG8ef%2Fm39UTJueLWFhr6V5MjP3SStLAK8CL5s05oxcIaf7MOzvkKMZ%2B80PMJg0uANMsjoDJLcGPuf0n9%2FX%2BXCHI5fEjlHd98qaeGaALPfM3%2BE8sJh9xTsp%2FGam41ZSv7rzRm4f2QBO9pZvqMDdz2hLbIXlT0sxRa4lojHLHD1jXoRHOHBDJuUKlCUmIYWGUELSjZW%2Fp8Z8%2BUPCnV0dVGT0vAritYT%2FAAueH4%2B6M%2BQFhmScw4TagVgcB02uQlqJ0B2tgDx80RFy1bDtLMIWHYHVgZ93ZQBzLNBSkjh91EH2Xmbf88vTZ1nHTcvN9Suq0pxUZx9FCce4cM0XBSrq6o3XbtxfbWyXN8bPbG0njs0SMcQZV4YMPyX6MAGOqUBmvzpIiJlki%2B9QALFQeTeUspgyN7rbrs8WrzkmCvbae0igbZetAUXS%2FwRVIDuTflwCWjsW4o0HF4PIdwzyUD09bo1iKFIS64T43c8Uii0QkttbK1AYpa7cV67QDgP%2BgkKtsSsw0JUz8%2Fo1v2wzHClZ%2BLuGH4zYgMWn4NILsQsFvpjaOuB8OZWJidtFjxyfj6xRT2d%2F%2F0Q5WlcThY3MFP4Cds1%2F38k&X-Amz-Signature=a8fa6ff110f9cf7d0cbfd5ad7b2af8ba4d694cf71b8fc2379e29bab9b66477f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX22ZMZS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqjCi887i%2FBzu1qmbTa60JuHhjstWB%2FYBoeg%2FZYWD3xwIgaPZO%2BSWZxpnByz4ZiqRHt%2B%2BTmFfafN5eNSdv%2F%2FJRa2kq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJGY5otIV0Io0WHmCircA4Trnx3N1VtUcFZtfW%2FMKz%2FMR2RlACSukgY8xndGRa98wAFSjPzY%2FYzVjcBi2Sd04i6WWDqYDJT%2B%2FeUQ9%2Bb8SjVyJAaDyJfAnhT5x0caOGKpxeYtO3MAQ5CXH22IWY4K%2FNdcOxutmWyfuVOugm4PqCjXt8ddTFkNQsVkAIEaD9yTzQ4y21gUhvnNweQKculjC6ee3hVFKicowhwHJ92pde7L%2FnPNFgTLOCmO2gr1mXIsTV0lVAIdsGVZvxVkez%2Bfvz9ROV7ZWa4dG8ef%2Fm39UTJueLWFhr6V5MjP3SStLAK8CL5s05oxcIaf7MOzvkKMZ%2B80PMJg0uANMsjoDJLcGPuf0n9%2FX%2BXCHI5fEjlHd98qaeGaALPfM3%2BE8sJh9xTsp%2FGam41ZSv7rzRm4f2QBO9pZvqMDdz2hLbIXlT0sxRa4lojHLHD1jXoRHOHBDJuUKlCUmIYWGUELSjZW%2Fp8Z8%2BUPCnV0dVGT0vAritYT%2FAAueH4%2B6M%2BQFhmScw4TagVgcB02uQlqJ0B2tgDx80RFy1bDtLMIWHYHVgZ93ZQBzLNBSkjh91EH2Xmbf88vTZ1nHTcvN9Suq0pxUZx9FCce4cM0XBSrq6o3XbtxfbWyXN8bPbG0njs0SMcQZV4YMPyX6MAGOqUBmvzpIiJlki%2B9QALFQeTeUspgyN7rbrs8WrzkmCvbae0igbZetAUXS%2FwRVIDuTflwCWjsW4o0HF4PIdwzyUD09bo1iKFIS64T43c8Uii0QkttbK1AYpa7cV67QDgP%2BgkKtsSsw0JUz8%2Fo1v2wzHClZ%2BLuGH4zYgMWn4NILsQsFvpjaOuB8OZWJidtFjxyfj6xRT2d%2F%2F0Q5WlcThY3MFP4Cds1%2F38k&X-Amz-Signature=0b34a1cdff9b9982e7429bbce6b267676abec83ddad99dd08861ce62f454db8f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX22ZMZS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqjCi887i%2FBzu1qmbTa60JuHhjstWB%2FYBoeg%2FZYWD3xwIgaPZO%2BSWZxpnByz4ZiqRHt%2B%2BTmFfafN5eNSdv%2F%2FJRa2kq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJGY5otIV0Io0WHmCircA4Trnx3N1VtUcFZtfW%2FMKz%2FMR2RlACSukgY8xndGRa98wAFSjPzY%2FYzVjcBi2Sd04i6WWDqYDJT%2B%2FeUQ9%2Bb8SjVyJAaDyJfAnhT5x0caOGKpxeYtO3MAQ5CXH22IWY4K%2FNdcOxutmWyfuVOugm4PqCjXt8ddTFkNQsVkAIEaD9yTzQ4y21gUhvnNweQKculjC6ee3hVFKicowhwHJ92pde7L%2FnPNFgTLOCmO2gr1mXIsTV0lVAIdsGVZvxVkez%2Bfvz9ROV7ZWa4dG8ef%2Fm39UTJueLWFhr6V5MjP3SStLAK8CL5s05oxcIaf7MOzvkKMZ%2B80PMJg0uANMsjoDJLcGPuf0n9%2FX%2BXCHI5fEjlHd98qaeGaALPfM3%2BE8sJh9xTsp%2FGam41ZSv7rzRm4f2QBO9pZvqMDdz2hLbIXlT0sxRa4lojHLHD1jXoRHOHBDJuUKlCUmIYWGUELSjZW%2Fp8Z8%2BUPCnV0dVGT0vAritYT%2FAAueH4%2B6M%2BQFhmScw4TagVgcB02uQlqJ0B2tgDx80RFy1bDtLMIWHYHVgZ93ZQBzLNBSkjh91EH2Xmbf88vTZ1nHTcvN9Suq0pxUZx9FCce4cM0XBSrq6o3XbtxfbWyXN8bPbG0njs0SMcQZV4YMPyX6MAGOqUBmvzpIiJlki%2B9QALFQeTeUspgyN7rbrs8WrzkmCvbae0igbZetAUXS%2FwRVIDuTflwCWjsW4o0HF4PIdwzyUD09bo1iKFIS64T43c8Uii0QkttbK1AYpa7cV67QDgP%2BgkKtsSsw0JUz8%2Fo1v2wzHClZ%2BLuGH4zYgMWn4NILsQsFvpjaOuB8OZWJidtFjxyfj6xRT2d%2F%2F0Q5WlcThY3MFP4Cds1%2F38k&X-Amz-Signature=dfba921a9fbc851f40fd95268888335b73428823045665696ee21461ec5f8598&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX22ZMZS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqjCi887i%2FBzu1qmbTa60JuHhjstWB%2FYBoeg%2FZYWD3xwIgaPZO%2BSWZxpnByz4ZiqRHt%2B%2BTmFfafN5eNSdv%2F%2FJRa2kq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJGY5otIV0Io0WHmCircA4Trnx3N1VtUcFZtfW%2FMKz%2FMR2RlACSukgY8xndGRa98wAFSjPzY%2FYzVjcBi2Sd04i6WWDqYDJT%2B%2FeUQ9%2Bb8SjVyJAaDyJfAnhT5x0caOGKpxeYtO3MAQ5CXH22IWY4K%2FNdcOxutmWyfuVOugm4PqCjXt8ddTFkNQsVkAIEaD9yTzQ4y21gUhvnNweQKculjC6ee3hVFKicowhwHJ92pde7L%2FnPNFgTLOCmO2gr1mXIsTV0lVAIdsGVZvxVkez%2Bfvz9ROV7ZWa4dG8ef%2Fm39UTJueLWFhr6V5MjP3SStLAK8CL5s05oxcIaf7MOzvkKMZ%2B80PMJg0uANMsjoDJLcGPuf0n9%2FX%2BXCHI5fEjlHd98qaeGaALPfM3%2BE8sJh9xTsp%2FGam41ZSv7rzRm4f2QBO9pZvqMDdz2hLbIXlT0sxRa4lojHLHD1jXoRHOHBDJuUKlCUmIYWGUELSjZW%2Fp8Z8%2BUPCnV0dVGT0vAritYT%2FAAueH4%2B6M%2BQFhmScw4TagVgcB02uQlqJ0B2tgDx80RFy1bDtLMIWHYHVgZ93ZQBzLNBSkjh91EH2Xmbf88vTZ1nHTcvN9Suq0pxUZx9FCce4cM0XBSrq6o3XbtxfbWyXN8bPbG0njs0SMcQZV4YMPyX6MAGOqUBmvzpIiJlki%2B9QALFQeTeUspgyN7rbrs8WrzkmCvbae0igbZetAUXS%2FwRVIDuTflwCWjsW4o0HF4PIdwzyUD09bo1iKFIS64T43c8Uii0QkttbK1AYpa7cV67QDgP%2BgkKtsSsw0JUz8%2Fo1v2wzHClZ%2BLuGH4zYgMWn4NILsQsFvpjaOuB8OZWJidtFjxyfj6xRT2d%2F%2F0Q5WlcThY3MFP4Cds1%2F38k&X-Amz-Signature=56932c590b4285b78b50127238d3324898d33a9ff0f8134466c72eeefa102ece&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX22ZMZS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqjCi887i%2FBzu1qmbTa60JuHhjstWB%2FYBoeg%2FZYWD3xwIgaPZO%2BSWZxpnByz4ZiqRHt%2B%2BTmFfafN5eNSdv%2F%2FJRa2kq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJGY5otIV0Io0WHmCircA4Trnx3N1VtUcFZtfW%2FMKz%2FMR2RlACSukgY8xndGRa98wAFSjPzY%2FYzVjcBi2Sd04i6WWDqYDJT%2B%2FeUQ9%2Bb8SjVyJAaDyJfAnhT5x0caOGKpxeYtO3MAQ5CXH22IWY4K%2FNdcOxutmWyfuVOugm4PqCjXt8ddTFkNQsVkAIEaD9yTzQ4y21gUhvnNweQKculjC6ee3hVFKicowhwHJ92pde7L%2FnPNFgTLOCmO2gr1mXIsTV0lVAIdsGVZvxVkez%2Bfvz9ROV7ZWa4dG8ef%2Fm39UTJueLWFhr6V5MjP3SStLAK8CL5s05oxcIaf7MOzvkKMZ%2B80PMJg0uANMsjoDJLcGPuf0n9%2FX%2BXCHI5fEjlHd98qaeGaALPfM3%2BE8sJh9xTsp%2FGam41ZSv7rzRm4f2QBO9pZvqMDdz2hLbIXlT0sxRa4lojHLHD1jXoRHOHBDJuUKlCUmIYWGUELSjZW%2Fp8Z8%2BUPCnV0dVGT0vAritYT%2FAAueH4%2B6M%2BQFhmScw4TagVgcB02uQlqJ0B2tgDx80RFy1bDtLMIWHYHVgZ93ZQBzLNBSkjh91EH2Xmbf88vTZ1nHTcvN9Suq0pxUZx9FCce4cM0XBSrq6o3XbtxfbWyXN8bPbG0njs0SMcQZV4YMPyX6MAGOqUBmvzpIiJlki%2B9QALFQeTeUspgyN7rbrs8WrzkmCvbae0igbZetAUXS%2FwRVIDuTflwCWjsW4o0HF4PIdwzyUD09bo1iKFIS64T43c8Uii0QkttbK1AYpa7cV67QDgP%2BgkKtsSsw0JUz8%2Fo1v2wzHClZ%2BLuGH4zYgMWn4NILsQsFvpjaOuB8OZWJidtFjxyfj6xRT2d%2F%2F0Q5WlcThY3MFP4Cds1%2F38k&X-Amz-Signature=c3cac8143a09945ddb6599ed28c24eea23d5c2f30d493db7f7348b8df8cab99c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX22ZMZS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqjCi887i%2FBzu1qmbTa60JuHhjstWB%2FYBoeg%2FZYWD3xwIgaPZO%2BSWZxpnByz4ZiqRHt%2B%2BTmFfafN5eNSdv%2F%2FJRa2kq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJGY5otIV0Io0WHmCircA4Trnx3N1VtUcFZtfW%2FMKz%2FMR2RlACSukgY8xndGRa98wAFSjPzY%2FYzVjcBi2Sd04i6WWDqYDJT%2B%2FeUQ9%2Bb8SjVyJAaDyJfAnhT5x0caOGKpxeYtO3MAQ5CXH22IWY4K%2FNdcOxutmWyfuVOugm4PqCjXt8ddTFkNQsVkAIEaD9yTzQ4y21gUhvnNweQKculjC6ee3hVFKicowhwHJ92pde7L%2FnPNFgTLOCmO2gr1mXIsTV0lVAIdsGVZvxVkez%2Bfvz9ROV7ZWa4dG8ef%2Fm39UTJueLWFhr6V5MjP3SStLAK8CL5s05oxcIaf7MOzvkKMZ%2B80PMJg0uANMsjoDJLcGPuf0n9%2FX%2BXCHI5fEjlHd98qaeGaALPfM3%2BE8sJh9xTsp%2FGam41ZSv7rzRm4f2QBO9pZvqMDdz2hLbIXlT0sxRa4lojHLHD1jXoRHOHBDJuUKlCUmIYWGUELSjZW%2Fp8Z8%2BUPCnV0dVGT0vAritYT%2FAAueH4%2B6M%2BQFhmScw4TagVgcB02uQlqJ0B2tgDx80RFy1bDtLMIWHYHVgZ93ZQBzLNBSkjh91EH2Xmbf88vTZ1nHTcvN9Suq0pxUZx9FCce4cM0XBSrq6o3XbtxfbWyXN8bPbG0njs0SMcQZV4YMPyX6MAGOqUBmvzpIiJlki%2B9QALFQeTeUspgyN7rbrs8WrzkmCvbae0igbZetAUXS%2FwRVIDuTflwCWjsW4o0HF4PIdwzyUD09bo1iKFIS64T43c8Uii0QkttbK1AYpa7cV67QDgP%2BgkKtsSsw0JUz8%2Fo1v2wzHClZ%2BLuGH4zYgMWn4NILsQsFvpjaOuB8OZWJidtFjxyfj6xRT2d%2F%2F0Q5WlcThY3MFP4Cds1%2F38k&X-Amz-Signature=9c3756e9aac174e396352dfb921507965e8d17035235f7a39d41a7111d1804f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX22ZMZS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqjCi887i%2FBzu1qmbTa60JuHhjstWB%2FYBoeg%2FZYWD3xwIgaPZO%2BSWZxpnByz4ZiqRHt%2B%2BTmFfafN5eNSdv%2F%2FJRa2kq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJGY5otIV0Io0WHmCircA4Trnx3N1VtUcFZtfW%2FMKz%2FMR2RlACSukgY8xndGRa98wAFSjPzY%2FYzVjcBi2Sd04i6WWDqYDJT%2B%2FeUQ9%2Bb8SjVyJAaDyJfAnhT5x0caOGKpxeYtO3MAQ5CXH22IWY4K%2FNdcOxutmWyfuVOugm4PqCjXt8ddTFkNQsVkAIEaD9yTzQ4y21gUhvnNweQKculjC6ee3hVFKicowhwHJ92pde7L%2FnPNFgTLOCmO2gr1mXIsTV0lVAIdsGVZvxVkez%2Bfvz9ROV7ZWa4dG8ef%2Fm39UTJueLWFhr6V5MjP3SStLAK8CL5s05oxcIaf7MOzvkKMZ%2B80PMJg0uANMsjoDJLcGPuf0n9%2FX%2BXCHI5fEjlHd98qaeGaALPfM3%2BE8sJh9xTsp%2FGam41ZSv7rzRm4f2QBO9pZvqMDdz2hLbIXlT0sxRa4lojHLHD1jXoRHOHBDJuUKlCUmIYWGUELSjZW%2Fp8Z8%2BUPCnV0dVGT0vAritYT%2FAAueH4%2B6M%2BQFhmScw4TagVgcB02uQlqJ0B2tgDx80RFy1bDtLMIWHYHVgZ93ZQBzLNBSkjh91EH2Xmbf88vTZ1nHTcvN9Suq0pxUZx9FCce4cM0XBSrq6o3XbtxfbWyXN8bPbG0njs0SMcQZV4YMPyX6MAGOqUBmvzpIiJlki%2B9QALFQeTeUspgyN7rbrs8WrzkmCvbae0igbZetAUXS%2FwRVIDuTflwCWjsW4o0HF4PIdwzyUD09bo1iKFIS64T43c8Uii0QkttbK1AYpa7cV67QDgP%2BgkKtsSsw0JUz8%2Fo1v2wzHClZ%2BLuGH4zYgMWn4NILsQsFvpjaOuB8OZWJidtFjxyfj6xRT2d%2F%2F0Q5WlcThY3MFP4Cds1%2F38k&X-Amz-Signature=7f931aa022c9cd63fd9568d55c3621d9e67ceb94c1424922c4a33eec083648c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
