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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZUBP7I%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIE9Q2Y76AbV939pHdONSTgFSqF1DTRSpRHjR7IVnhDa7AiEAvza8OFebRPcYE9rCXIwIDfCYaLEbZWC2FdNmhDPNXxcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2FDRkZLIu%2ByH7wgircA1wogGPYsrmWLNlrZvgE8o672BkLbqeY8G%2Be8JxXJoDp5ikMdSM1OOXFf7yp5Gi00cS0dctlRFc6Bl7yIRUjDz3uTsf%2B5lq4Vzr2W9QwvmCbHHOl0k%2FeplHS%2Bc4WJ35LwOvH3QPjkwEH8nUbj06ICGjxwwCm7Y9MN9yJRDKF2QY4n55L88mYiPmKrGJk9fodnjMOJaJA6HjgQdSkKJ9dtBvG8CDHvRTgntCCJ4ozLOlyOGfTNAoIL8eTEzZCBkMSagPTFqgmOYSvwGeiZoHoiB6K5ktWb%2BOBH5AIW5HSaqGd3uu9N0pYFJJftmgXSntG0vHT4vedmYDDXFLrdAMuALl5ftjUj4wYMfWa8kxCWzeYEv8bs1TafMcnD0IlwNs7TZTCnvlJ19pUBlwnSrzaMWikMDxbxfnLhVVGVy8%2BVcFWsIQ4LgOushT8YdFm0r431Mfn54E6RrnpSWmPjWPXVDrSN4Sx07XAPbyrcibHPDbMWL7QY8xyHAkts69efFPMQP2W8kRlIo4JSEyD8uRV7tI7r%2Bjs4fuBuoy1iZNv%2B5YJlMjvKiVXYh6PxyQXcMBQOG3TEoIUBdqEFPoXqCIapX6rXmX8N6fd72hZoPcNI4L4lv2EtpHlu%2Bf%2BikHIMOKZ0MAGOqUBa6zLF7MlJlya6nReMF9cqMcoVxTZt0RWR8TKbTlXQgInCDrlg5gCnb09zl2XqJpXadtjNIG08YniizDtLvTi0GCHM3TQmoFzcUtKq0C9BEG%2FGTQAq%2FxM3WuY6PXQ0hIuA0EjG1%2FfyyE10mtOX5jTMk61mg%2BMg5EpBKXQvnmn6zK4EVJDHBdUwbztg%2Bv74pZ%2FW%2BJetMNA4nvKkJo%2BWFzRYMsrhi%2BH&X-Amz-Signature=445b63774880c773aaa543ea62a471b461279b2d4ca99d6ca2d37a9c489d6594&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZUBP7I%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIE9Q2Y76AbV939pHdONSTgFSqF1DTRSpRHjR7IVnhDa7AiEAvza8OFebRPcYE9rCXIwIDfCYaLEbZWC2FdNmhDPNXxcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2FDRkZLIu%2ByH7wgircA1wogGPYsrmWLNlrZvgE8o672BkLbqeY8G%2Be8JxXJoDp5ikMdSM1OOXFf7yp5Gi00cS0dctlRFc6Bl7yIRUjDz3uTsf%2B5lq4Vzr2W9QwvmCbHHOl0k%2FeplHS%2Bc4WJ35LwOvH3QPjkwEH8nUbj06ICGjxwwCm7Y9MN9yJRDKF2QY4n55L88mYiPmKrGJk9fodnjMOJaJA6HjgQdSkKJ9dtBvG8CDHvRTgntCCJ4ozLOlyOGfTNAoIL8eTEzZCBkMSagPTFqgmOYSvwGeiZoHoiB6K5ktWb%2BOBH5AIW5HSaqGd3uu9N0pYFJJftmgXSntG0vHT4vedmYDDXFLrdAMuALl5ftjUj4wYMfWa8kxCWzeYEv8bs1TafMcnD0IlwNs7TZTCnvlJ19pUBlwnSrzaMWikMDxbxfnLhVVGVy8%2BVcFWsIQ4LgOushT8YdFm0r431Mfn54E6RrnpSWmPjWPXVDrSN4Sx07XAPbyrcibHPDbMWL7QY8xyHAkts69efFPMQP2W8kRlIo4JSEyD8uRV7tI7r%2Bjs4fuBuoy1iZNv%2B5YJlMjvKiVXYh6PxyQXcMBQOG3TEoIUBdqEFPoXqCIapX6rXmX8N6fd72hZoPcNI4L4lv2EtpHlu%2Bf%2BikHIMOKZ0MAGOqUBa6zLF7MlJlya6nReMF9cqMcoVxTZt0RWR8TKbTlXQgInCDrlg5gCnb09zl2XqJpXadtjNIG08YniizDtLvTi0GCHM3TQmoFzcUtKq0C9BEG%2FGTQAq%2FxM3WuY6PXQ0hIuA0EjG1%2FfyyE10mtOX5jTMk61mg%2BMg5EpBKXQvnmn6zK4EVJDHBdUwbztg%2Bv74pZ%2FW%2BJetMNA4nvKkJo%2BWFzRYMsrhi%2BH&X-Amz-Signature=60e59d35c5d27efa383929cb49e7f8c3dd2c6c43bedc20212f603164b5703c0f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZUBP7I%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIE9Q2Y76AbV939pHdONSTgFSqF1DTRSpRHjR7IVnhDa7AiEAvza8OFebRPcYE9rCXIwIDfCYaLEbZWC2FdNmhDPNXxcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2FDRkZLIu%2ByH7wgircA1wogGPYsrmWLNlrZvgE8o672BkLbqeY8G%2Be8JxXJoDp5ikMdSM1OOXFf7yp5Gi00cS0dctlRFc6Bl7yIRUjDz3uTsf%2B5lq4Vzr2W9QwvmCbHHOl0k%2FeplHS%2Bc4WJ35LwOvH3QPjkwEH8nUbj06ICGjxwwCm7Y9MN9yJRDKF2QY4n55L88mYiPmKrGJk9fodnjMOJaJA6HjgQdSkKJ9dtBvG8CDHvRTgntCCJ4ozLOlyOGfTNAoIL8eTEzZCBkMSagPTFqgmOYSvwGeiZoHoiB6K5ktWb%2BOBH5AIW5HSaqGd3uu9N0pYFJJftmgXSntG0vHT4vedmYDDXFLrdAMuALl5ftjUj4wYMfWa8kxCWzeYEv8bs1TafMcnD0IlwNs7TZTCnvlJ19pUBlwnSrzaMWikMDxbxfnLhVVGVy8%2BVcFWsIQ4LgOushT8YdFm0r431Mfn54E6RrnpSWmPjWPXVDrSN4Sx07XAPbyrcibHPDbMWL7QY8xyHAkts69efFPMQP2W8kRlIo4JSEyD8uRV7tI7r%2Bjs4fuBuoy1iZNv%2B5YJlMjvKiVXYh6PxyQXcMBQOG3TEoIUBdqEFPoXqCIapX6rXmX8N6fd72hZoPcNI4L4lv2EtpHlu%2Bf%2BikHIMOKZ0MAGOqUBa6zLF7MlJlya6nReMF9cqMcoVxTZt0RWR8TKbTlXQgInCDrlg5gCnb09zl2XqJpXadtjNIG08YniizDtLvTi0GCHM3TQmoFzcUtKq0C9BEG%2FGTQAq%2FxM3WuY6PXQ0hIuA0EjG1%2FfyyE10mtOX5jTMk61mg%2BMg5EpBKXQvnmn6zK4EVJDHBdUwbztg%2Bv74pZ%2FW%2BJetMNA4nvKkJo%2BWFzRYMsrhi%2BH&X-Amz-Signature=4f4e33fa9ec6ad3f2223f6c80131353d591fc38c7665e5ab91bfe8d9168a8ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZUBP7I%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIE9Q2Y76AbV939pHdONSTgFSqF1DTRSpRHjR7IVnhDa7AiEAvza8OFebRPcYE9rCXIwIDfCYaLEbZWC2FdNmhDPNXxcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2FDRkZLIu%2ByH7wgircA1wogGPYsrmWLNlrZvgE8o672BkLbqeY8G%2Be8JxXJoDp5ikMdSM1OOXFf7yp5Gi00cS0dctlRFc6Bl7yIRUjDz3uTsf%2B5lq4Vzr2W9QwvmCbHHOl0k%2FeplHS%2Bc4WJ35LwOvH3QPjkwEH8nUbj06ICGjxwwCm7Y9MN9yJRDKF2QY4n55L88mYiPmKrGJk9fodnjMOJaJA6HjgQdSkKJ9dtBvG8CDHvRTgntCCJ4ozLOlyOGfTNAoIL8eTEzZCBkMSagPTFqgmOYSvwGeiZoHoiB6K5ktWb%2BOBH5AIW5HSaqGd3uu9N0pYFJJftmgXSntG0vHT4vedmYDDXFLrdAMuALl5ftjUj4wYMfWa8kxCWzeYEv8bs1TafMcnD0IlwNs7TZTCnvlJ19pUBlwnSrzaMWikMDxbxfnLhVVGVy8%2BVcFWsIQ4LgOushT8YdFm0r431Mfn54E6RrnpSWmPjWPXVDrSN4Sx07XAPbyrcibHPDbMWL7QY8xyHAkts69efFPMQP2W8kRlIo4JSEyD8uRV7tI7r%2Bjs4fuBuoy1iZNv%2B5YJlMjvKiVXYh6PxyQXcMBQOG3TEoIUBdqEFPoXqCIapX6rXmX8N6fd72hZoPcNI4L4lv2EtpHlu%2Bf%2BikHIMOKZ0MAGOqUBa6zLF7MlJlya6nReMF9cqMcoVxTZt0RWR8TKbTlXQgInCDrlg5gCnb09zl2XqJpXadtjNIG08YniizDtLvTi0GCHM3TQmoFzcUtKq0C9BEG%2FGTQAq%2FxM3WuY6PXQ0hIuA0EjG1%2FfyyE10mtOX5jTMk61mg%2BMg5EpBKXQvnmn6zK4EVJDHBdUwbztg%2Bv74pZ%2FW%2BJetMNA4nvKkJo%2BWFzRYMsrhi%2BH&X-Amz-Signature=0a5a196160199fe5d53856eed6fe5f90bd19930b8c84a8a7a6b7a77d35c9c3a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZUBP7I%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIE9Q2Y76AbV939pHdONSTgFSqF1DTRSpRHjR7IVnhDa7AiEAvza8OFebRPcYE9rCXIwIDfCYaLEbZWC2FdNmhDPNXxcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2FDRkZLIu%2ByH7wgircA1wogGPYsrmWLNlrZvgE8o672BkLbqeY8G%2Be8JxXJoDp5ikMdSM1OOXFf7yp5Gi00cS0dctlRFc6Bl7yIRUjDz3uTsf%2B5lq4Vzr2W9QwvmCbHHOl0k%2FeplHS%2Bc4WJ35LwOvH3QPjkwEH8nUbj06ICGjxwwCm7Y9MN9yJRDKF2QY4n55L88mYiPmKrGJk9fodnjMOJaJA6HjgQdSkKJ9dtBvG8CDHvRTgntCCJ4ozLOlyOGfTNAoIL8eTEzZCBkMSagPTFqgmOYSvwGeiZoHoiB6K5ktWb%2BOBH5AIW5HSaqGd3uu9N0pYFJJftmgXSntG0vHT4vedmYDDXFLrdAMuALl5ftjUj4wYMfWa8kxCWzeYEv8bs1TafMcnD0IlwNs7TZTCnvlJ19pUBlwnSrzaMWikMDxbxfnLhVVGVy8%2BVcFWsIQ4LgOushT8YdFm0r431Mfn54E6RrnpSWmPjWPXVDrSN4Sx07XAPbyrcibHPDbMWL7QY8xyHAkts69efFPMQP2W8kRlIo4JSEyD8uRV7tI7r%2Bjs4fuBuoy1iZNv%2B5YJlMjvKiVXYh6PxyQXcMBQOG3TEoIUBdqEFPoXqCIapX6rXmX8N6fd72hZoPcNI4L4lv2EtpHlu%2Bf%2BikHIMOKZ0MAGOqUBa6zLF7MlJlya6nReMF9cqMcoVxTZt0RWR8TKbTlXQgInCDrlg5gCnb09zl2XqJpXadtjNIG08YniizDtLvTi0GCHM3TQmoFzcUtKq0C9BEG%2FGTQAq%2FxM3WuY6PXQ0hIuA0EjG1%2FfyyE10mtOX5jTMk61mg%2BMg5EpBKXQvnmn6zK4EVJDHBdUwbztg%2Bv74pZ%2FW%2BJetMNA4nvKkJo%2BWFzRYMsrhi%2BH&X-Amz-Signature=724ebb7c443544e4fe38f44237b589ff3ae32feba03d4afca848e6194c1bc296&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZUBP7I%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIE9Q2Y76AbV939pHdONSTgFSqF1DTRSpRHjR7IVnhDa7AiEAvza8OFebRPcYE9rCXIwIDfCYaLEbZWC2FdNmhDPNXxcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2FDRkZLIu%2ByH7wgircA1wogGPYsrmWLNlrZvgE8o672BkLbqeY8G%2Be8JxXJoDp5ikMdSM1OOXFf7yp5Gi00cS0dctlRFc6Bl7yIRUjDz3uTsf%2B5lq4Vzr2W9QwvmCbHHOl0k%2FeplHS%2Bc4WJ35LwOvH3QPjkwEH8nUbj06ICGjxwwCm7Y9MN9yJRDKF2QY4n55L88mYiPmKrGJk9fodnjMOJaJA6HjgQdSkKJ9dtBvG8CDHvRTgntCCJ4ozLOlyOGfTNAoIL8eTEzZCBkMSagPTFqgmOYSvwGeiZoHoiB6K5ktWb%2BOBH5AIW5HSaqGd3uu9N0pYFJJftmgXSntG0vHT4vedmYDDXFLrdAMuALl5ftjUj4wYMfWa8kxCWzeYEv8bs1TafMcnD0IlwNs7TZTCnvlJ19pUBlwnSrzaMWikMDxbxfnLhVVGVy8%2BVcFWsIQ4LgOushT8YdFm0r431Mfn54E6RrnpSWmPjWPXVDrSN4Sx07XAPbyrcibHPDbMWL7QY8xyHAkts69efFPMQP2W8kRlIo4JSEyD8uRV7tI7r%2Bjs4fuBuoy1iZNv%2B5YJlMjvKiVXYh6PxyQXcMBQOG3TEoIUBdqEFPoXqCIapX6rXmX8N6fd72hZoPcNI4L4lv2EtpHlu%2Bf%2BikHIMOKZ0MAGOqUBa6zLF7MlJlya6nReMF9cqMcoVxTZt0RWR8TKbTlXQgInCDrlg5gCnb09zl2XqJpXadtjNIG08YniizDtLvTi0GCHM3TQmoFzcUtKq0C9BEG%2FGTQAq%2FxM3WuY6PXQ0hIuA0EjG1%2FfyyE10mtOX5jTMk61mg%2BMg5EpBKXQvnmn6zK4EVJDHBdUwbztg%2Bv74pZ%2FW%2BJetMNA4nvKkJo%2BWFzRYMsrhi%2BH&X-Amz-Signature=47fbd090b0e565a34b5867f54b8bfe1d8cf99ae05f1583d2e121b974be74837d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZUBP7I%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIE9Q2Y76AbV939pHdONSTgFSqF1DTRSpRHjR7IVnhDa7AiEAvza8OFebRPcYE9rCXIwIDfCYaLEbZWC2FdNmhDPNXxcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2FDRkZLIu%2ByH7wgircA1wogGPYsrmWLNlrZvgE8o672BkLbqeY8G%2Be8JxXJoDp5ikMdSM1OOXFf7yp5Gi00cS0dctlRFc6Bl7yIRUjDz3uTsf%2B5lq4Vzr2W9QwvmCbHHOl0k%2FeplHS%2Bc4WJ35LwOvH3QPjkwEH8nUbj06ICGjxwwCm7Y9MN9yJRDKF2QY4n55L88mYiPmKrGJk9fodnjMOJaJA6HjgQdSkKJ9dtBvG8CDHvRTgntCCJ4ozLOlyOGfTNAoIL8eTEzZCBkMSagPTFqgmOYSvwGeiZoHoiB6K5ktWb%2BOBH5AIW5HSaqGd3uu9N0pYFJJftmgXSntG0vHT4vedmYDDXFLrdAMuALl5ftjUj4wYMfWa8kxCWzeYEv8bs1TafMcnD0IlwNs7TZTCnvlJ19pUBlwnSrzaMWikMDxbxfnLhVVGVy8%2BVcFWsIQ4LgOushT8YdFm0r431Mfn54E6RrnpSWmPjWPXVDrSN4Sx07XAPbyrcibHPDbMWL7QY8xyHAkts69efFPMQP2W8kRlIo4JSEyD8uRV7tI7r%2Bjs4fuBuoy1iZNv%2B5YJlMjvKiVXYh6PxyQXcMBQOG3TEoIUBdqEFPoXqCIapX6rXmX8N6fd72hZoPcNI4L4lv2EtpHlu%2Bf%2BikHIMOKZ0MAGOqUBa6zLF7MlJlya6nReMF9cqMcoVxTZt0RWR8TKbTlXQgInCDrlg5gCnb09zl2XqJpXadtjNIG08YniizDtLvTi0GCHM3TQmoFzcUtKq0C9BEG%2FGTQAq%2FxM3WuY6PXQ0hIuA0EjG1%2FfyyE10mtOX5jTMk61mg%2BMg5EpBKXQvnmn6zK4EVJDHBdUwbztg%2Bv74pZ%2FW%2BJetMNA4nvKkJo%2BWFzRYMsrhi%2BH&X-Amz-Signature=4bbd67381279f97a17192782b20b9497e86e68a1a6ca932fc4d15bc84542f99f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZUBP7I%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIE9Q2Y76AbV939pHdONSTgFSqF1DTRSpRHjR7IVnhDa7AiEAvza8OFebRPcYE9rCXIwIDfCYaLEbZWC2FdNmhDPNXxcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV%2FDRkZLIu%2ByH7wgircA1wogGPYsrmWLNlrZvgE8o672BkLbqeY8G%2Be8JxXJoDp5ikMdSM1OOXFf7yp5Gi00cS0dctlRFc6Bl7yIRUjDz3uTsf%2B5lq4Vzr2W9QwvmCbHHOl0k%2FeplHS%2Bc4WJ35LwOvH3QPjkwEH8nUbj06ICGjxwwCm7Y9MN9yJRDKF2QY4n55L88mYiPmKrGJk9fodnjMOJaJA6HjgQdSkKJ9dtBvG8CDHvRTgntCCJ4ozLOlyOGfTNAoIL8eTEzZCBkMSagPTFqgmOYSvwGeiZoHoiB6K5ktWb%2BOBH5AIW5HSaqGd3uu9N0pYFJJftmgXSntG0vHT4vedmYDDXFLrdAMuALl5ftjUj4wYMfWa8kxCWzeYEv8bs1TafMcnD0IlwNs7TZTCnvlJ19pUBlwnSrzaMWikMDxbxfnLhVVGVy8%2BVcFWsIQ4LgOushT8YdFm0r431Mfn54E6RrnpSWmPjWPXVDrSN4Sx07XAPbyrcibHPDbMWL7QY8xyHAkts69efFPMQP2W8kRlIo4JSEyD8uRV7tI7r%2Bjs4fuBuoy1iZNv%2B5YJlMjvKiVXYh6PxyQXcMBQOG3TEoIUBdqEFPoXqCIapX6rXmX8N6fd72hZoPcNI4L4lv2EtpHlu%2Bf%2BikHIMOKZ0MAGOqUBa6zLF7MlJlya6nReMF9cqMcoVxTZt0RWR8TKbTlXQgInCDrlg5gCnb09zl2XqJpXadtjNIG08YniizDtLvTi0GCHM3TQmoFzcUtKq0C9BEG%2FGTQAq%2FxM3WuY6PXQ0hIuA0EjG1%2FfyyE10mtOX5jTMk61mg%2BMg5EpBKXQvnmn6zK4EVJDHBdUwbztg%2Bv74pZ%2FW%2BJetMNA4nvKkJo%2BWFzRYMsrhi%2BH&X-Amz-Signature=82105d55faaa23ea3c30db462de4e8231a7c0852c126146bc1d7a8899bb952fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
