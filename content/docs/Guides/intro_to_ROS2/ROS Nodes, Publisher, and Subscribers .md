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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUTUJD7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FQPlxsFseZ4KvdDt4Hl8w%2FikYwjpt0R7arEVoaIPN1gIhAJuCit4mkJnUrLJTnpDgFt4k1qwm%2FPx2rxX2yHl%2FThxqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqK7WVLxH9EJkB3fIq3ANEBgkjNIAeV2M%2FUHVQTGhoO8IgtoYjKbVPFE0fv08dvIJ6yGEw9ES%2BTnKvBKw9p5c3hg1qTsq4PpjyK1%2Bld0tQjLNHiEoSvANgqXzwKZLOQKRcP9jdv57cAJ79YadvCuPmlnHZfVPjT2XsUOi8arG3zhn2bPu1LFZ1Ej0%2Bn4tQKLS2RJWxYnyQ6AhvG%2FnmjuGwD7mgeL74VuuB6%2B%2FAvHs44Z6qINc6Kpm31GPgfzAKegZDRlEpe4%2FY4yPHcr%2BlOLY3aKNoOfI251rP%2F24wgGJAuHc%2BP15T%2BJHDtqczG6XYIjqs%2BKn6v6bsW1JcHNscNr7dbZNmowSU02QuxFg3S4Z5GXjD7QEjdvvbLCZp5O4aEDpAlwdM1%2B11w1Ju%2BMtimXws%2FKXGYmC58FzBrCSQJ0fOGdN1sjLI8TNgGe899YxN0Cx3pw8mDXf7x%2BDp8Ktm0cl2e9PfJPgIsudByv1WRPQQgPqrcUyOf8q0gb1aa%2BoRKoF7qyzrOcIgjU%2FZRUHu7qrQv6qyfZw0DID48Sh2ovHF8OwAvkGTMM0PHqmOub%2BvWg36Urc2lDYitrCEqeseyWaB%2FlbEWpLwSBVI%2BfiotouKqfQGunSWHnkA3qzhXcFxy0VHf6E%2FW6wA73KLSTC%2BpPjABjqkAejhm7vIZ8e1%2FL1UYMohWA83fhB0Z8yN2b%2F6iKvLyA2KL5RMRTTvU2RzwPIXI9%2FP6W%2FwLBUAGymHsZTbHgyf98Wx%2FXYVglbCLhsdRWdwBwnDOxuIsxRKXRH4CgAvxTVwGODa4CcvGdJZ7TWECttNfb%2FMPU0p1wgR7d5IDa3Zbk6fWSS8QcvBIxPZXIWZIfprKC4s7jpKNwAjgqhO%2FBl1Qsnt0c2U&X-Amz-Signature=4cc71d16005a15db7f802c8a75798ab3953e321c67637d04f0b56fe0f26bd211&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUTUJD7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FQPlxsFseZ4KvdDt4Hl8w%2FikYwjpt0R7arEVoaIPN1gIhAJuCit4mkJnUrLJTnpDgFt4k1qwm%2FPx2rxX2yHl%2FThxqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqK7WVLxH9EJkB3fIq3ANEBgkjNIAeV2M%2FUHVQTGhoO8IgtoYjKbVPFE0fv08dvIJ6yGEw9ES%2BTnKvBKw9p5c3hg1qTsq4PpjyK1%2Bld0tQjLNHiEoSvANgqXzwKZLOQKRcP9jdv57cAJ79YadvCuPmlnHZfVPjT2XsUOi8arG3zhn2bPu1LFZ1Ej0%2Bn4tQKLS2RJWxYnyQ6AhvG%2FnmjuGwD7mgeL74VuuB6%2B%2FAvHs44Z6qINc6Kpm31GPgfzAKegZDRlEpe4%2FY4yPHcr%2BlOLY3aKNoOfI251rP%2F24wgGJAuHc%2BP15T%2BJHDtqczG6XYIjqs%2BKn6v6bsW1JcHNscNr7dbZNmowSU02QuxFg3S4Z5GXjD7QEjdvvbLCZp5O4aEDpAlwdM1%2B11w1Ju%2BMtimXws%2FKXGYmC58FzBrCSQJ0fOGdN1sjLI8TNgGe899YxN0Cx3pw8mDXf7x%2BDp8Ktm0cl2e9PfJPgIsudByv1WRPQQgPqrcUyOf8q0gb1aa%2BoRKoF7qyzrOcIgjU%2FZRUHu7qrQv6qyfZw0DID48Sh2ovHF8OwAvkGTMM0PHqmOub%2BvWg36Urc2lDYitrCEqeseyWaB%2FlbEWpLwSBVI%2BfiotouKqfQGunSWHnkA3qzhXcFxy0VHf6E%2FW6wA73KLSTC%2BpPjABjqkAejhm7vIZ8e1%2FL1UYMohWA83fhB0Z8yN2b%2F6iKvLyA2KL5RMRTTvU2RzwPIXI9%2FP6W%2FwLBUAGymHsZTbHgyf98Wx%2FXYVglbCLhsdRWdwBwnDOxuIsxRKXRH4CgAvxTVwGODa4CcvGdJZ7TWECttNfb%2FMPU0p1wgR7d5IDa3Zbk6fWSS8QcvBIxPZXIWZIfprKC4s7jpKNwAjgqhO%2FBl1Qsnt0c2U&X-Amz-Signature=ced1c66761e1087bfd6080304cb748ef922a3a043d15bf99ed9e3d567e799fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUTUJD7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FQPlxsFseZ4KvdDt4Hl8w%2FikYwjpt0R7arEVoaIPN1gIhAJuCit4mkJnUrLJTnpDgFt4k1qwm%2FPx2rxX2yHl%2FThxqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqK7WVLxH9EJkB3fIq3ANEBgkjNIAeV2M%2FUHVQTGhoO8IgtoYjKbVPFE0fv08dvIJ6yGEw9ES%2BTnKvBKw9p5c3hg1qTsq4PpjyK1%2Bld0tQjLNHiEoSvANgqXzwKZLOQKRcP9jdv57cAJ79YadvCuPmlnHZfVPjT2XsUOi8arG3zhn2bPu1LFZ1Ej0%2Bn4tQKLS2RJWxYnyQ6AhvG%2FnmjuGwD7mgeL74VuuB6%2B%2FAvHs44Z6qINc6Kpm31GPgfzAKegZDRlEpe4%2FY4yPHcr%2BlOLY3aKNoOfI251rP%2F24wgGJAuHc%2BP15T%2BJHDtqczG6XYIjqs%2BKn6v6bsW1JcHNscNr7dbZNmowSU02QuxFg3S4Z5GXjD7QEjdvvbLCZp5O4aEDpAlwdM1%2B11w1Ju%2BMtimXws%2FKXGYmC58FzBrCSQJ0fOGdN1sjLI8TNgGe899YxN0Cx3pw8mDXf7x%2BDp8Ktm0cl2e9PfJPgIsudByv1WRPQQgPqrcUyOf8q0gb1aa%2BoRKoF7qyzrOcIgjU%2FZRUHu7qrQv6qyfZw0DID48Sh2ovHF8OwAvkGTMM0PHqmOub%2BvWg36Urc2lDYitrCEqeseyWaB%2FlbEWpLwSBVI%2BfiotouKqfQGunSWHnkA3qzhXcFxy0VHf6E%2FW6wA73KLSTC%2BpPjABjqkAejhm7vIZ8e1%2FL1UYMohWA83fhB0Z8yN2b%2F6iKvLyA2KL5RMRTTvU2RzwPIXI9%2FP6W%2FwLBUAGymHsZTbHgyf98Wx%2FXYVglbCLhsdRWdwBwnDOxuIsxRKXRH4CgAvxTVwGODa4CcvGdJZ7TWECttNfb%2FMPU0p1wgR7d5IDa3Zbk6fWSS8QcvBIxPZXIWZIfprKC4s7jpKNwAjgqhO%2FBl1Qsnt0c2U&X-Amz-Signature=f457dc4a29342293810e21cf10771f666733ae89871b86f3f9329dff7d70e0a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUTUJD7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FQPlxsFseZ4KvdDt4Hl8w%2FikYwjpt0R7arEVoaIPN1gIhAJuCit4mkJnUrLJTnpDgFt4k1qwm%2FPx2rxX2yHl%2FThxqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqK7WVLxH9EJkB3fIq3ANEBgkjNIAeV2M%2FUHVQTGhoO8IgtoYjKbVPFE0fv08dvIJ6yGEw9ES%2BTnKvBKw9p5c3hg1qTsq4PpjyK1%2Bld0tQjLNHiEoSvANgqXzwKZLOQKRcP9jdv57cAJ79YadvCuPmlnHZfVPjT2XsUOi8arG3zhn2bPu1LFZ1Ej0%2Bn4tQKLS2RJWxYnyQ6AhvG%2FnmjuGwD7mgeL74VuuB6%2B%2FAvHs44Z6qINc6Kpm31GPgfzAKegZDRlEpe4%2FY4yPHcr%2BlOLY3aKNoOfI251rP%2F24wgGJAuHc%2BP15T%2BJHDtqczG6XYIjqs%2BKn6v6bsW1JcHNscNr7dbZNmowSU02QuxFg3S4Z5GXjD7QEjdvvbLCZp5O4aEDpAlwdM1%2B11w1Ju%2BMtimXws%2FKXGYmC58FzBrCSQJ0fOGdN1sjLI8TNgGe899YxN0Cx3pw8mDXf7x%2BDp8Ktm0cl2e9PfJPgIsudByv1WRPQQgPqrcUyOf8q0gb1aa%2BoRKoF7qyzrOcIgjU%2FZRUHu7qrQv6qyfZw0DID48Sh2ovHF8OwAvkGTMM0PHqmOub%2BvWg36Urc2lDYitrCEqeseyWaB%2FlbEWpLwSBVI%2BfiotouKqfQGunSWHnkA3qzhXcFxy0VHf6E%2FW6wA73KLSTC%2BpPjABjqkAejhm7vIZ8e1%2FL1UYMohWA83fhB0Z8yN2b%2F6iKvLyA2KL5RMRTTvU2RzwPIXI9%2FP6W%2FwLBUAGymHsZTbHgyf98Wx%2FXYVglbCLhsdRWdwBwnDOxuIsxRKXRH4CgAvxTVwGODa4CcvGdJZ7TWECttNfb%2FMPU0p1wgR7d5IDa3Zbk6fWSS8QcvBIxPZXIWZIfprKC4s7jpKNwAjgqhO%2FBl1Qsnt0c2U&X-Amz-Signature=5b738f46d0f353a487a21e3026b29da3fa6f1d5dffbd464caa51358ab6c3e57f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUTUJD7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FQPlxsFseZ4KvdDt4Hl8w%2FikYwjpt0R7arEVoaIPN1gIhAJuCit4mkJnUrLJTnpDgFt4k1qwm%2FPx2rxX2yHl%2FThxqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqK7WVLxH9EJkB3fIq3ANEBgkjNIAeV2M%2FUHVQTGhoO8IgtoYjKbVPFE0fv08dvIJ6yGEw9ES%2BTnKvBKw9p5c3hg1qTsq4PpjyK1%2Bld0tQjLNHiEoSvANgqXzwKZLOQKRcP9jdv57cAJ79YadvCuPmlnHZfVPjT2XsUOi8arG3zhn2bPu1LFZ1Ej0%2Bn4tQKLS2RJWxYnyQ6AhvG%2FnmjuGwD7mgeL74VuuB6%2B%2FAvHs44Z6qINc6Kpm31GPgfzAKegZDRlEpe4%2FY4yPHcr%2BlOLY3aKNoOfI251rP%2F24wgGJAuHc%2BP15T%2BJHDtqczG6XYIjqs%2BKn6v6bsW1JcHNscNr7dbZNmowSU02QuxFg3S4Z5GXjD7QEjdvvbLCZp5O4aEDpAlwdM1%2B11w1Ju%2BMtimXws%2FKXGYmC58FzBrCSQJ0fOGdN1sjLI8TNgGe899YxN0Cx3pw8mDXf7x%2BDp8Ktm0cl2e9PfJPgIsudByv1WRPQQgPqrcUyOf8q0gb1aa%2BoRKoF7qyzrOcIgjU%2FZRUHu7qrQv6qyfZw0DID48Sh2ovHF8OwAvkGTMM0PHqmOub%2BvWg36Urc2lDYitrCEqeseyWaB%2FlbEWpLwSBVI%2BfiotouKqfQGunSWHnkA3qzhXcFxy0VHf6E%2FW6wA73KLSTC%2BpPjABjqkAejhm7vIZ8e1%2FL1UYMohWA83fhB0Z8yN2b%2F6iKvLyA2KL5RMRTTvU2RzwPIXI9%2FP6W%2FwLBUAGymHsZTbHgyf98Wx%2FXYVglbCLhsdRWdwBwnDOxuIsxRKXRH4CgAvxTVwGODa4CcvGdJZ7TWECttNfb%2FMPU0p1wgR7d5IDa3Zbk6fWSS8QcvBIxPZXIWZIfprKC4s7jpKNwAjgqhO%2FBl1Qsnt0c2U&X-Amz-Signature=673d0058aabe75da4ac6a249e61593031845d6af149d42baa845257715506277&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUTUJD7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FQPlxsFseZ4KvdDt4Hl8w%2FikYwjpt0R7arEVoaIPN1gIhAJuCit4mkJnUrLJTnpDgFt4k1qwm%2FPx2rxX2yHl%2FThxqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqK7WVLxH9EJkB3fIq3ANEBgkjNIAeV2M%2FUHVQTGhoO8IgtoYjKbVPFE0fv08dvIJ6yGEw9ES%2BTnKvBKw9p5c3hg1qTsq4PpjyK1%2Bld0tQjLNHiEoSvANgqXzwKZLOQKRcP9jdv57cAJ79YadvCuPmlnHZfVPjT2XsUOi8arG3zhn2bPu1LFZ1Ej0%2Bn4tQKLS2RJWxYnyQ6AhvG%2FnmjuGwD7mgeL74VuuB6%2B%2FAvHs44Z6qINc6Kpm31GPgfzAKegZDRlEpe4%2FY4yPHcr%2BlOLY3aKNoOfI251rP%2F24wgGJAuHc%2BP15T%2BJHDtqczG6XYIjqs%2BKn6v6bsW1JcHNscNr7dbZNmowSU02QuxFg3S4Z5GXjD7QEjdvvbLCZp5O4aEDpAlwdM1%2B11w1Ju%2BMtimXws%2FKXGYmC58FzBrCSQJ0fOGdN1sjLI8TNgGe899YxN0Cx3pw8mDXf7x%2BDp8Ktm0cl2e9PfJPgIsudByv1WRPQQgPqrcUyOf8q0gb1aa%2BoRKoF7qyzrOcIgjU%2FZRUHu7qrQv6qyfZw0DID48Sh2ovHF8OwAvkGTMM0PHqmOub%2BvWg36Urc2lDYitrCEqeseyWaB%2FlbEWpLwSBVI%2BfiotouKqfQGunSWHnkA3qzhXcFxy0VHf6E%2FW6wA73KLSTC%2BpPjABjqkAejhm7vIZ8e1%2FL1UYMohWA83fhB0Z8yN2b%2F6iKvLyA2KL5RMRTTvU2RzwPIXI9%2FP6W%2FwLBUAGymHsZTbHgyf98Wx%2FXYVglbCLhsdRWdwBwnDOxuIsxRKXRH4CgAvxTVwGODa4CcvGdJZ7TWECttNfb%2FMPU0p1wgR7d5IDa3Zbk6fWSS8QcvBIxPZXIWZIfprKC4s7jpKNwAjgqhO%2FBl1Qsnt0c2U&X-Amz-Signature=d7298e4a0582849958ee56748897205a3e3e33fd7b21851c7a266c599e748ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUTUJD7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FQPlxsFseZ4KvdDt4Hl8w%2FikYwjpt0R7arEVoaIPN1gIhAJuCit4mkJnUrLJTnpDgFt4k1qwm%2FPx2rxX2yHl%2FThxqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqK7WVLxH9EJkB3fIq3ANEBgkjNIAeV2M%2FUHVQTGhoO8IgtoYjKbVPFE0fv08dvIJ6yGEw9ES%2BTnKvBKw9p5c3hg1qTsq4PpjyK1%2Bld0tQjLNHiEoSvANgqXzwKZLOQKRcP9jdv57cAJ79YadvCuPmlnHZfVPjT2XsUOi8arG3zhn2bPu1LFZ1Ej0%2Bn4tQKLS2RJWxYnyQ6AhvG%2FnmjuGwD7mgeL74VuuB6%2B%2FAvHs44Z6qINc6Kpm31GPgfzAKegZDRlEpe4%2FY4yPHcr%2BlOLY3aKNoOfI251rP%2F24wgGJAuHc%2BP15T%2BJHDtqczG6XYIjqs%2BKn6v6bsW1JcHNscNr7dbZNmowSU02QuxFg3S4Z5GXjD7QEjdvvbLCZp5O4aEDpAlwdM1%2B11w1Ju%2BMtimXws%2FKXGYmC58FzBrCSQJ0fOGdN1sjLI8TNgGe899YxN0Cx3pw8mDXf7x%2BDp8Ktm0cl2e9PfJPgIsudByv1WRPQQgPqrcUyOf8q0gb1aa%2BoRKoF7qyzrOcIgjU%2FZRUHu7qrQv6qyfZw0DID48Sh2ovHF8OwAvkGTMM0PHqmOub%2BvWg36Urc2lDYitrCEqeseyWaB%2FlbEWpLwSBVI%2BfiotouKqfQGunSWHnkA3qzhXcFxy0VHf6E%2FW6wA73KLSTC%2BpPjABjqkAejhm7vIZ8e1%2FL1UYMohWA83fhB0Z8yN2b%2F6iKvLyA2KL5RMRTTvU2RzwPIXI9%2FP6W%2FwLBUAGymHsZTbHgyf98Wx%2FXYVglbCLhsdRWdwBwnDOxuIsxRKXRH4CgAvxTVwGODa4CcvGdJZ7TWECttNfb%2FMPU0p1wgR7d5IDa3Zbk6fWSS8QcvBIxPZXIWZIfprKC4s7jpKNwAjgqhO%2FBl1Qsnt0c2U&X-Amz-Signature=76761ad1de5357bf3479b2a6edd60fa93648adf7d96f07a21fdd3c33686abb5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVUTUJD7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FQPlxsFseZ4KvdDt4Hl8w%2FikYwjpt0R7arEVoaIPN1gIhAJuCit4mkJnUrLJTnpDgFt4k1qwm%2FPx2rxX2yHl%2FThxqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqK7WVLxH9EJkB3fIq3ANEBgkjNIAeV2M%2FUHVQTGhoO8IgtoYjKbVPFE0fv08dvIJ6yGEw9ES%2BTnKvBKw9p5c3hg1qTsq4PpjyK1%2Bld0tQjLNHiEoSvANgqXzwKZLOQKRcP9jdv57cAJ79YadvCuPmlnHZfVPjT2XsUOi8arG3zhn2bPu1LFZ1Ej0%2Bn4tQKLS2RJWxYnyQ6AhvG%2FnmjuGwD7mgeL74VuuB6%2B%2FAvHs44Z6qINc6Kpm31GPgfzAKegZDRlEpe4%2FY4yPHcr%2BlOLY3aKNoOfI251rP%2F24wgGJAuHc%2BP15T%2BJHDtqczG6XYIjqs%2BKn6v6bsW1JcHNscNr7dbZNmowSU02QuxFg3S4Z5GXjD7QEjdvvbLCZp5O4aEDpAlwdM1%2B11w1Ju%2BMtimXws%2FKXGYmC58FzBrCSQJ0fOGdN1sjLI8TNgGe899YxN0Cx3pw8mDXf7x%2BDp8Ktm0cl2e9PfJPgIsudByv1WRPQQgPqrcUyOf8q0gb1aa%2BoRKoF7qyzrOcIgjU%2FZRUHu7qrQv6qyfZw0DID48Sh2ovHF8OwAvkGTMM0PHqmOub%2BvWg36Urc2lDYitrCEqeseyWaB%2FlbEWpLwSBVI%2BfiotouKqfQGunSWHnkA3qzhXcFxy0VHf6E%2FW6wA73KLSTC%2BpPjABjqkAejhm7vIZ8e1%2FL1UYMohWA83fhB0Z8yN2b%2F6iKvLyA2KL5RMRTTvU2RzwPIXI9%2FP6W%2FwLBUAGymHsZTbHgyf98Wx%2FXYVglbCLhsdRWdwBwnDOxuIsxRKXRH4CgAvxTVwGODa4CcvGdJZ7TWECttNfb%2FMPU0p1wgR7d5IDa3Zbk6fWSS8QcvBIxPZXIWZIfprKC4s7jpKNwAjgqhO%2FBl1Qsnt0c2U&X-Amz-Signature=4344742969cad41e590f2f07dc841a3122c6a4b18047330a8835f4ec4b36a334&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
