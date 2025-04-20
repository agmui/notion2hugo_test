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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFIWWSKA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQChP%2ByXmiWpTcUBiE2yBcDdoWBRqsTUuvHCcGenpLtvbQIgEW4BBlYrEKJgpDVuVAKIryuNaG3K6sRtikbYf3cDa9kqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq1hGRLVSt9%2BbOaOircAxoED%2FeazjEu%2FdCY5PiJdi7tlUYUHH3APY6hDCEUqUUw8Bx%2FH9KyrlremJwIrOnD91nX37%2F5FM5qg3t5tE%2BZVr72uWBHfAKAkEKPI6FKv415ZAE0XH6vwNOvTnwu2OOUB8zLgkIf9h6Vs8QEhlJGNjZ0HEfQF7xKVLtZ4%2FoWNKtsfV5xHBPNrvtLz6uX5wmp%2FcuKN0ncMUpggmEybz2c8SIYekGlh68Jz14LUQ0FrJvwn8SDdkZG97KwsZ2cbcagM4Veegq%2BLsgTwoc7uBv73M6%2Fc6Kx33gMO%2BDekIO9Zbi68p7YrFeZOABIEDtzOZ7kfG5JB%2F2y9DIT4zl%2BMezYAHQ7VA%2FWfNM0Bf9pHjWOninYenmHn980MjUh6qGLnf%2FgmbRh1pnpbO9ipeVRRO2j65zecux7SO2wkP%2Faj5uD2PsmJfpxd8M1xfgudDjlsSr1NKFF%2BWhvFN9khxRibsiVgejwlreVrCYvJUjDEUKh%2BvvmOEjQKl0KAyrx3msGQg76eLbHiwK%2FPM8%2B526CSV5CU1DwuDyMwTU0FWh47bgZ%2FgBB1iRzO9tbRYYYVyzIgbEhtpb2XsnJ%2FMkM%2BSWq1TwVNuXEGjYIlHmXugu4K1CD1BwW5ZU5N8Wl8LXrFOpdMLLAk8AGOqUBFiwdKviOE7Kt8Y09LLBbUnEtXtBgi60PKVG8cr7%2BhaTrz55kmXeR4ffeaGQ4W70yW%2BNzFHh4w9lyg6bi%2BeQdzHZ1QLHxtYX%2FkdHbd5giGnI4E6xImEPtOYsqP3WSSMyyNrfIf9Sum9rH961rfuAWdR%2FZl8hfAm%2FXZ9DVsII5Mv54PkbkJ5MRhfcZhYuTWQhTQhkcqoplOd8rIRHWi2YswMZWdIZi&X-Amz-Signature=247baa22f64276e8bd5a53096a953d9b3637717cacece520fdffceac81f1659c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFIWWSKA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQChP%2ByXmiWpTcUBiE2yBcDdoWBRqsTUuvHCcGenpLtvbQIgEW4BBlYrEKJgpDVuVAKIryuNaG3K6sRtikbYf3cDa9kqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq1hGRLVSt9%2BbOaOircAxoED%2FeazjEu%2FdCY5PiJdi7tlUYUHH3APY6hDCEUqUUw8Bx%2FH9KyrlremJwIrOnD91nX37%2F5FM5qg3t5tE%2BZVr72uWBHfAKAkEKPI6FKv415ZAE0XH6vwNOvTnwu2OOUB8zLgkIf9h6Vs8QEhlJGNjZ0HEfQF7xKVLtZ4%2FoWNKtsfV5xHBPNrvtLz6uX5wmp%2FcuKN0ncMUpggmEybz2c8SIYekGlh68Jz14LUQ0FrJvwn8SDdkZG97KwsZ2cbcagM4Veegq%2BLsgTwoc7uBv73M6%2Fc6Kx33gMO%2BDekIO9Zbi68p7YrFeZOABIEDtzOZ7kfG5JB%2F2y9DIT4zl%2BMezYAHQ7VA%2FWfNM0Bf9pHjWOninYenmHn980MjUh6qGLnf%2FgmbRh1pnpbO9ipeVRRO2j65zecux7SO2wkP%2Faj5uD2PsmJfpxd8M1xfgudDjlsSr1NKFF%2BWhvFN9khxRibsiVgejwlreVrCYvJUjDEUKh%2BvvmOEjQKl0KAyrx3msGQg76eLbHiwK%2FPM8%2B526CSV5CU1DwuDyMwTU0FWh47bgZ%2FgBB1iRzO9tbRYYYVyzIgbEhtpb2XsnJ%2FMkM%2BSWq1TwVNuXEGjYIlHmXugu4K1CD1BwW5ZU5N8Wl8LXrFOpdMLLAk8AGOqUBFiwdKviOE7Kt8Y09LLBbUnEtXtBgi60PKVG8cr7%2BhaTrz55kmXeR4ffeaGQ4W70yW%2BNzFHh4w9lyg6bi%2BeQdzHZ1QLHxtYX%2FkdHbd5giGnI4E6xImEPtOYsqP3WSSMyyNrfIf9Sum9rH961rfuAWdR%2FZl8hfAm%2FXZ9DVsII5Mv54PkbkJ5MRhfcZhYuTWQhTQhkcqoplOd8rIRHWi2YswMZWdIZi&X-Amz-Signature=1c32c71df96a0aceedd4285a82acccbccd106519f5da50e4c7a85599469663b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFIWWSKA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQChP%2ByXmiWpTcUBiE2yBcDdoWBRqsTUuvHCcGenpLtvbQIgEW4BBlYrEKJgpDVuVAKIryuNaG3K6sRtikbYf3cDa9kqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq1hGRLVSt9%2BbOaOircAxoED%2FeazjEu%2FdCY5PiJdi7tlUYUHH3APY6hDCEUqUUw8Bx%2FH9KyrlremJwIrOnD91nX37%2F5FM5qg3t5tE%2BZVr72uWBHfAKAkEKPI6FKv415ZAE0XH6vwNOvTnwu2OOUB8zLgkIf9h6Vs8QEhlJGNjZ0HEfQF7xKVLtZ4%2FoWNKtsfV5xHBPNrvtLz6uX5wmp%2FcuKN0ncMUpggmEybz2c8SIYekGlh68Jz14LUQ0FrJvwn8SDdkZG97KwsZ2cbcagM4Veegq%2BLsgTwoc7uBv73M6%2Fc6Kx33gMO%2BDekIO9Zbi68p7YrFeZOABIEDtzOZ7kfG5JB%2F2y9DIT4zl%2BMezYAHQ7VA%2FWfNM0Bf9pHjWOninYenmHn980MjUh6qGLnf%2FgmbRh1pnpbO9ipeVRRO2j65zecux7SO2wkP%2Faj5uD2PsmJfpxd8M1xfgudDjlsSr1NKFF%2BWhvFN9khxRibsiVgejwlreVrCYvJUjDEUKh%2BvvmOEjQKl0KAyrx3msGQg76eLbHiwK%2FPM8%2B526CSV5CU1DwuDyMwTU0FWh47bgZ%2FgBB1iRzO9tbRYYYVyzIgbEhtpb2XsnJ%2FMkM%2BSWq1TwVNuXEGjYIlHmXugu4K1CD1BwW5ZU5N8Wl8LXrFOpdMLLAk8AGOqUBFiwdKviOE7Kt8Y09LLBbUnEtXtBgi60PKVG8cr7%2BhaTrz55kmXeR4ffeaGQ4W70yW%2BNzFHh4w9lyg6bi%2BeQdzHZ1QLHxtYX%2FkdHbd5giGnI4E6xImEPtOYsqP3WSSMyyNrfIf9Sum9rH961rfuAWdR%2FZl8hfAm%2FXZ9DVsII5Mv54PkbkJ5MRhfcZhYuTWQhTQhkcqoplOd8rIRHWi2YswMZWdIZi&X-Amz-Signature=ddbb3fe2f89e5d2f6017e9acbd8ee2873a92e49c046b3ae0894106769f4dc99b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFIWWSKA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQChP%2ByXmiWpTcUBiE2yBcDdoWBRqsTUuvHCcGenpLtvbQIgEW4BBlYrEKJgpDVuVAKIryuNaG3K6sRtikbYf3cDa9kqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq1hGRLVSt9%2BbOaOircAxoED%2FeazjEu%2FdCY5PiJdi7tlUYUHH3APY6hDCEUqUUw8Bx%2FH9KyrlremJwIrOnD91nX37%2F5FM5qg3t5tE%2BZVr72uWBHfAKAkEKPI6FKv415ZAE0XH6vwNOvTnwu2OOUB8zLgkIf9h6Vs8QEhlJGNjZ0HEfQF7xKVLtZ4%2FoWNKtsfV5xHBPNrvtLz6uX5wmp%2FcuKN0ncMUpggmEybz2c8SIYekGlh68Jz14LUQ0FrJvwn8SDdkZG97KwsZ2cbcagM4Veegq%2BLsgTwoc7uBv73M6%2Fc6Kx33gMO%2BDekIO9Zbi68p7YrFeZOABIEDtzOZ7kfG5JB%2F2y9DIT4zl%2BMezYAHQ7VA%2FWfNM0Bf9pHjWOninYenmHn980MjUh6qGLnf%2FgmbRh1pnpbO9ipeVRRO2j65zecux7SO2wkP%2Faj5uD2PsmJfpxd8M1xfgudDjlsSr1NKFF%2BWhvFN9khxRibsiVgejwlreVrCYvJUjDEUKh%2BvvmOEjQKl0KAyrx3msGQg76eLbHiwK%2FPM8%2B526CSV5CU1DwuDyMwTU0FWh47bgZ%2FgBB1iRzO9tbRYYYVyzIgbEhtpb2XsnJ%2FMkM%2BSWq1TwVNuXEGjYIlHmXugu4K1CD1BwW5ZU5N8Wl8LXrFOpdMLLAk8AGOqUBFiwdKviOE7Kt8Y09LLBbUnEtXtBgi60PKVG8cr7%2BhaTrz55kmXeR4ffeaGQ4W70yW%2BNzFHh4w9lyg6bi%2BeQdzHZ1QLHxtYX%2FkdHbd5giGnI4E6xImEPtOYsqP3WSSMyyNrfIf9Sum9rH961rfuAWdR%2FZl8hfAm%2FXZ9DVsII5Mv54PkbkJ5MRhfcZhYuTWQhTQhkcqoplOd8rIRHWi2YswMZWdIZi&X-Amz-Signature=455f019402e13b1216ae1e3a0821d5a2363b3fe8ad37a13ef9ec85eff7944742&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFIWWSKA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQChP%2ByXmiWpTcUBiE2yBcDdoWBRqsTUuvHCcGenpLtvbQIgEW4BBlYrEKJgpDVuVAKIryuNaG3K6sRtikbYf3cDa9kqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq1hGRLVSt9%2BbOaOircAxoED%2FeazjEu%2FdCY5PiJdi7tlUYUHH3APY6hDCEUqUUw8Bx%2FH9KyrlremJwIrOnD91nX37%2F5FM5qg3t5tE%2BZVr72uWBHfAKAkEKPI6FKv415ZAE0XH6vwNOvTnwu2OOUB8zLgkIf9h6Vs8QEhlJGNjZ0HEfQF7xKVLtZ4%2FoWNKtsfV5xHBPNrvtLz6uX5wmp%2FcuKN0ncMUpggmEybz2c8SIYekGlh68Jz14LUQ0FrJvwn8SDdkZG97KwsZ2cbcagM4Veegq%2BLsgTwoc7uBv73M6%2Fc6Kx33gMO%2BDekIO9Zbi68p7YrFeZOABIEDtzOZ7kfG5JB%2F2y9DIT4zl%2BMezYAHQ7VA%2FWfNM0Bf9pHjWOninYenmHn980MjUh6qGLnf%2FgmbRh1pnpbO9ipeVRRO2j65zecux7SO2wkP%2Faj5uD2PsmJfpxd8M1xfgudDjlsSr1NKFF%2BWhvFN9khxRibsiVgejwlreVrCYvJUjDEUKh%2BvvmOEjQKl0KAyrx3msGQg76eLbHiwK%2FPM8%2B526CSV5CU1DwuDyMwTU0FWh47bgZ%2FgBB1iRzO9tbRYYYVyzIgbEhtpb2XsnJ%2FMkM%2BSWq1TwVNuXEGjYIlHmXugu4K1CD1BwW5ZU5N8Wl8LXrFOpdMLLAk8AGOqUBFiwdKviOE7Kt8Y09LLBbUnEtXtBgi60PKVG8cr7%2BhaTrz55kmXeR4ffeaGQ4W70yW%2BNzFHh4w9lyg6bi%2BeQdzHZ1QLHxtYX%2FkdHbd5giGnI4E6xImEPtOYsqP3WSSMyyNrfIf9Sum9rH961rfuAWdR%2FZl8hfAm%2FXZ9DVsII5Mv54PkbkJ5MRhfcZhYuTWQhTQhkcqoplOd8rIRHWi2YswMZWdIZi&X-Amz-Signature=d078c6fc119cb98b35eadbfe3403400c72eb79b94a901af9ee84133cb98c79d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFIWWSKA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQChP%2ByXmiWpTcUBiE2yBcDdoWBRqsTUuvHCcGenpLtvbQIgEW4BBlYrEKJgpDVuVAKIryuNaG3K6sRtikbYf3cDa9kqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq1hGRLVSt9%2BbOaOircAxoED%2FeazjEu%2FdCY5PiJdi7tlUYUHH3APY6hDCEUqUUw8Bx%2FH9KyrlremJwIrOnD91nX37%2F5FM5qg3t5tE%2BZVr72uWBHfAKAkEKPI6FKv415ZAE0XH6vwNOvTnwu2OOUB8zLgkIf9h6Vs8QEhlJGNjZ0HEfQF7xKVLtZ4%2FoWNKtsfV5xHBPNrvtLz6uX5wmp%2FcuKN0ncMUpggmEybz2c8SIYekGlh68Jz14LUQ0FrJvwn8SDdkZG97KwsZ2cbcagM4Veegq%2BLsgTwoc7uBv73M6%2Fc6Kx33gMO%2BDekIO9Zbi68p7YrFeZOABIEDtzOZ7kfG5JB%2F2y9DIT4zl%2BMezYAHQ7VA%2FWfNM0Bf9pHjWOninYenmHn980MjUh6qGLnf%2FgmbRh1pnpbO9ipeVRRO2j65zecux7SO2wkP%2Faj5uD2PsmJfpxd8M1xfgudDjlsSr1NKFF%2BWhvFN9khxRibsiVgejwlreVrCYvJUjDEUKh%2BvvmOEjQKl0KAyrx3msGQg76eLbHiwK%2FPM8%2B526CSV5CU1DwuDyMwTU0FWh47bgZ%2FgBB1iRzO9tbRYYYVyzIgbEhtpb2XsnJ%2FMkM%2BSWq1TwVNuXEGjYIlHmXugu4K1CD1BwW5ZU5N8Wl8LXrFOpdMLLAk8AGOqUBFiwdKviOE7Kt8Y09LLBbUnEtXtBgi60PKVG8cr7%2BhaTrz55kmXeR4ffeaGQ4W70yW%2BNzFHh4w9lyg6bi%2BeQdzHZ1QLHxtYX%2FkdHbd5giGnI4E6xImEPtOYsqP3WSSMyyNrfIf9Sum9rH961rfuAWdR%2FZl8hfAm%2FXZ9DVsII5Mv54PkbkJ5MRhfcZhYuTWQhTQhkcqoplOd8rIRHWi2YswMZWdIZi&X-Amz-Signature=8e917e40928eaaed55616ec16a6971e20af272bbf7e9a3f1d08b9dbf9538c771&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFIWWSKA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQChP%2ByXmiWpTcUBiE2yBcDdoWBRqsTUuvHCcGenpLtvbQIgEW4BBlYrEKJgpDVuVAKIryuNaG3K6sRtikbYf3cDa9kqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq1hGRLVSt9%2BbOaOircAxoED%2FeazjEu%2FdCY5PiJdi7tlUYUHH3APY6hDCEUqUUw8Bx%2FH9KyrlremJwIrOnD91nX37%2F5FM5qg3t5tE%2BZVr72uWBHfAKAkEKPI6FKv415ZAE0XH6vwNOvTnwu2OOUB8zLgkIf9h6Vs8QEhlJGNjZ0HEfQF7xKVLtZ4%2FoWNKtsfV5xHBPNrvtLz6uX5wmp%2FcuKN0ncMUpggmEybz2c8SIYekGlh68Jz14LUQ0FrJvwn8SDdkZG97KwsZ2cbcagM4Veegq%2BLsgTwoc7uBv73M6%2Fc6Kx33gMO%2BDekIO9Zbi68p7YrFeZOABIEDtzOZ7kfG5JB%2F2y9DIT4zl%2BMezYAHQ7VA%2FWfNM0Bf9pHjWOninYenmHn980MjUh6qGLnf%2FgmbRh1pnpbO9ipeVRRO2j65zecux7SO2wkP%2Faj5uD2PsmJfpxd8M1xfgudDjlsSr1NKFF%2BWhvFN9khxRibsiVgejwlreVrCYvJUjDEUKh%2BvvmOEjQKl0KAyrx3msGQg76eLbHiwK%2FPM8%2B526CSV5CU1DwuDyMwTU0FWh47bgZ%2FgBB1iRzO9tbRYYYVyzIgbEhtpb2XsnJ%2FMkM%2BSWq1TwVNuXEGjYIlHmXugu4K1CD1BwW5ZU5N8Wl8LXrFOpdMLLAk8AGOqUBFiwdKviOE7Kt8Y09LLBbUnEtXtBgi60PKVG8cr7%2BhaTrz55kmXeR4ffeaGQ4W70yW%2BNzFHh4w9lyg6bi%2BeQdzHZ1QLHxtYX%2FkdHbd5giGnI4E6xImEPtOYsqP3WSSMyyNrfIf9Sum9rH961rfuAWdR%2FZl8hfAm%2FXZ9DVsII5Mv54PkbkJ5MRhfcZhYuTWQhTQhkcqoplOd8rIRHWi2YswMZWdIZi&X-Amz-Signature=bd1d88c074be39d43336672e7c98101e2ea9a1e43e7537ecb1b370fde3d95254&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFIWWSKA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQChP%2ByXmiWpTcUBiE2yBcDdoWBRqsTUuvHCcGenpLtvbQIgEW4BBlYrEKJgpDVuVAKIryuNaG3K6sRtikbYf3cDa9kqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq1hGRLVSt9%2BbOaOircAxoED%2FeazjEu%2FdCY5PiJdi7tlUYUHH3APY6hDCEUqUUw8Bx%2FH9KyrlremJwIrOnD91nX37%2F5FM5qg3t5tE%2BZVr72uWBHfAKAkEKPI6FKv415ZAE0XH6vwNOvTnwu2OOUB8zLgkIf9h6Vs8QEhlJGNjZ0HEfQF7xKVLtZ4%2FoWNKtsfV5xHBPNrvtLz6uX5wmp%2FcuKN0ncMUpggmEybz2c8SIYekGlh68Jz14LUQ0FrJvwn8SDdkZG97KwsZ2cbcagM4Veegq%2BLsgTwoc7uBv73M6%2Fc6Kx33gMO%2BDekIO9Zbi68p7YrFeZOABIEDtzOZ7kfG5JB%2F2y9DIT4zl%2BMezYAHQ7VA%2FWfNM0Bf9pHjWOninYenmHn980MjUh6qGLnf%2FgmbRh1pnpbO9ipeVRRO2j65zecux7SO2wkP%2Faj5uD2PsmJfpxd8M1xfgudDjlsSr1NKFF%2BWhvFN9khxRibsiVgejwlreVrCYvJUjDEUKh%2BvvmOEjQKl0KAyrx3msGQg76eLbHiwK%2FPM8%2B526CSV5CU1DwuDyMwTU0FWh47bgZ%2FgBB1iRzO9tbRYYYVyzIgbEhtpb2XsnJ%2FMkM%2BSWq1TwVNuXEGjYIlHmXugu4K1CD1BwW5ZU5N8Wl8LXrFOpdMLLAk8AGOqUBFiwdKviOE7Kt8Y09LLBbUnEtXtBgi60PKVG8cr7%2BhaTrz55kmXeR4ffeaGQ4W70yW%2BNzFHh4w9lyg6bi%2BeQdzHZ1QLHxtYX%2FkdHbd5giGnI4E6xImEPtOYsqP3WSSMyyNrfIf9Sum9rH961rfuAWdR%2FZl8hfAm%2FXZ9DVsII5Mv54PkbkJ5MRhfcZhYuTWQhTQhkcqoplOd8rIRHWi2YswMZWdIZi&X-Amz-Signature=18e0ec8f87601880f20d60e7025492726309c0a5b372def3abb713b528405ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
