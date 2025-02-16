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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G3T3M4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAKwINd%2BB6qK7N9mbmwBFBbcpI%2B8SAFPa5hShIlYoE1uAiEA1WNkTAI7kDBXsB8fwMzAhiUtRuU%2BhAsVuZv9vH9Vw3Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC%2BUCn6cPYaAUuPhLCrcA%2FdCbDB7jexvVsEgmROUcXZdmJV1BVfhwBnNj41OC2hRsD54PrhWDSqDznWQC3Yq3lzCru%2BnWiG9pjzAFr2VyrRcqOqqoAcDA42ZTN77C%2F5ANJsbHYS7Y%2B7r1IeAj4Iz47TMaD7Kt2ZrRwiRBtKHehTSfrSBUzlwLs0krmJD7k1vW2rtURUI4aa0s%2F1kgKtbw%2BStMu3wXC4JhdelynbGdwEdPs29aZUuDTrNE77zlA%2Bdfz2XCBOv%2BtJFaxsMlSeHXaDRJk3%2BGMUHacNaOyWPw21uSJMv8wuY8lj4uq3B3%2FE3ph5SlUApBb5WwczgR%2FT2kLchOIG7RfjWquWVAgbSqAhoaB9qT0S1Z%2Fa206dNU7zxlQeMY4JoCAx2KlGMXY5YaOL%2Fy%2F2KbtvpKkfPYHVRXWdJfsA0WQjA76eZFIYpZBLhnRwLUaamvmuIUD3OJtSUJApwIrgoJVyFzBuNniRPkXF9N9NI69oI0ZtgbeyDboy4BTHKw2d9xi7Ac%2BTCMiaZ9QGsYKjWm5Qws8U4T0gvzCtOrCt1RmsjRoHGjZIpowUm%2BF2Zai0Yc5PRJaZwdpM9nB7H1nqhqVvXPXCLXQXDOpWC9u4dPWkRYwtnGxUkBhm7R7%2BMNn9sS0%2BnGTy5MPn9xb0GOqUBJ7nWYNJb2erJG0tSns%2BRq2Urs1H%2BWueNjylaIcIT4UmXwKq%2FDxDE33uTuTMiPpKrCeGxlWds%2FeD5NqfJK8W1GRl9psn%2Bp8L%2F8hZ3W6n1tBWbESUYbLcdAc4zQeY3cMA5kDG0stoEUzPLFm9WMwD7TKgw1wsghaI%2BwFd1aVA%2FhQiduWjuM6QqbFMX0mYgMHe47QOX%2FLzSnXHW%2FckV8V0ypwwsEPQq&X-Amz-Signature=376812b8b819d0fe8fec94e8fb290c121f34e7e46fb87d212dcb4a49aa420f52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G3T3M4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAKwINd%2BB6qK7N9mbmwBFBbcpI%2B8SAFPa5hShIlYoE1uAiEA1WNkTAI7kDBXsB8fwMzAhiUtRuU%2BhAsVuZv9vH9Vw3Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC%2BUCn6cPYaAUuPhLCrcA%2FdCbDB7jexvVsEgmROUcXZdmJV1BVfhwBnNj41OC2hRsD54PrhWDSqDznWQC3Yq3lzCru%2BnWiG9pjzAFr2VyrRcqOqqoAcDA42ZTN77C%2F5ANJsbHYS7Y%2B7r1IeAj4Iz47TMaD7Kt2ZrRwiRBtKHehTSfrSBUzlwLs0krmJD7k1vW2rtURUI4aa0s%2F1kgKtbw%2BStMu3wXC4JhdelynbGdwEdPs29aZUuDTrNE77zlA%2Bdfz2XCBOv%2BtJFaxsMlSeHXaDRJk3%2BGMUHacNaOyWPw21uSJMv8wuY8lj4uq3B3%2FE3ph5SlUApBb5WwczgR%2FT2kLchOIG7RfjWquWVAgbSqAhoaB9qT0S1Z%2Fa206dNU7zxlQeMY4JoCAx2KlGMXY5YaOL%2Fy%2F2KbtvpKkfPYHVRXWdJfsA0WQjA76eZFIYpZBLhnRwLUaamvmuIUD3OJtSUJApwIrgoJVyFzBuNniRPkXF9N9NI69oI0ZtgbeyDboy4BTHKw2d9xi7Ac%2BTCMiaZ9QGsYKjWm5Qws8U4T0gvzCtOrCt1RmsjRoHGjZIpowUm%2BF2Zai0Yc5PRJaZwdpM9nB7H1nqhqVvXPXCLXQXDOpWC9u4dPWkRYwtnGxUkBhm7R7%2BMNn9sS0%2BnGTy5MPn9xb0GOqUBJ7nWYNJb2erJG0tSns%2BRq2Urs1H%2BWueNjylaIcIT4UmXwKq%2FDxDE33uTuTMiPpKrCeGxlWds%2FeD5NqfJK8W1GRl9psn%2Bp8L%2F8hZ3W6n1tBWbESUYbLcdAc4zQeY3cMA5kDG0stoEUzPLFm9WMwD7TKgw1wsghaI%2BwFd1aVA%2FhQiduWjuM6QqbFMX0mYgMHe47QOX%2FLzSnXHW%2FckV8V0ypwwsEPQq&X-Amz-Signature=8a3a576d8a5b78852bce8bd7320fb294256fee1d9de54849c568a02652935d63&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G3T3M4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAKwINd%2BB6qK7N9mbmwBFBbcpI%2B8SAFPa5hShIlYoE1uAiEA1WNkTAI7kDBXsB8fwMzAhiUtRuU%2BhAsVuZv9vH9Vw3Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC%2BUCn6cPYaAUuPhLCrcA%2FdCbDB7jexvVsEgmROUcXZdmJV1BVfhwBnNj41OC2hRsD54PrhWDSqDznWQC3Yq3lzCru%2BnWiG9pjzAFr2VyrRcqOqqoAcDA42ZTN77C%2F5ANJsbHYS7Y%2B7r1IeAj4Iz47TMaD7Kt2ZrRwiRBtKHehTSfrSBUzlwLs0krmJD7k1vW2rtURUI4aa0s%2F1kgKtbw%2BStMu3wXC4JhdelynbGdwEdPs29aZUuDTrNE77zlA%2Bdfz2XCBOv%2BtJFaxsMlSeHXaDRJk3%2BGMUHacNaOyWPw21uSJMv8wuY8lj4uq3B3%2FE3ph5SlUApBb5WwczgR%2FT2kLchOIG7RfjWquWVAgbSqAhoaB9qT0S1Z%2Fa206dNU7zxlQeMY4JoCAx2KlGMXY5YaOL%2Fy%2F2KbtvpKkfPYHVRXWdJfsA0WQjA76eZFIYpZBLhnRwLUaamvmuIUD3OJtSUJApwIrgoJVyFzBuNniRPkXF9N9NI69oI0ZtgbeyDboy4BTHKw2d9xi7Ac%2BTCMiaZ9QGsYKjWm5Qws8U4T0gvzCtOrCt1RmsjRoHGjZIpowUm%2BF2Zai0Yc5PRJaZwdpM9nB7H1nqhqVvXPXCLXQXDOpWC9u4dPWkRYwtnGxUkBhm7R7%2BMNn9sS0%2BnGTy5MPn9xb0GOqUBJ7nWYNJb2erJG0tSns%2BRq2Urs1H%2BWueNjylaIcIT4UmXwKq%2FDxDE33uTuTMiPpKrCeGxlWds%2FeD5NqfJK8W1GRl9psn%2Bp8L%2F8hZ3W6n1tBWbESUYbLcdAc4zQeY3cMA5kDG0stoEUzPLFm9WMwD7TKgw1wsghaI%2BwFd1aVA%2FhQiduWjuM6QqbFMX0mYgMHe47QOX%2FLzSnXHW%2FckV8V0ypwwsEPQq&X-Amz-Signature=d17f7da4ff83fc33ba36dcd8e243fa518b161d8227685d77191da3d7c4f0cd0e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G3T3M4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAKwINd%2BB6qK7N9mbmwBFBbcpI%2B8SAFPa5hShIlYoE1uAiEA1WNkTAI7kDBXsB8fwMzAhiUtRuU%2BhAsVuZv9vH9Vw3Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC%2BUCn6cPYaAUuPhLCrcA%2FdCbDB7jexvVsEgmROUcXZdmJV1BVfhwBnNj41OC2hRsD54PrhWDSqDznWQC3Yq3lzCru%2BnWiG9pjzAFr2VyrRcqOqqoAcDA42ZTN77C%2F5ANJsbHYS7Y%2B7r1IeAj4Iz47TMaD7Kt2ZrRwiRBtKHehTSfrSBUzlwLs0krmJD7k1vW2rtURUI4aa0s%2F1kgKtbw%2BStMu3wXC4JhdelynbGdwEdPs29aZUuDTrNE77zlA%2Bdfz2XCBOv%2BtJFaxsMlSeHXaDRJk3%2BGMUHacNaOyWPw21uSJMv8wuY8lj4uq3B3%2FE3ph5SlUApBb5WwczgR%2FT2kLchOIG7RfjWquWVAgbSqAhoaB9qT0S1Z%2Fa206dNU7zxlQeMY4JoCAx2KlGMXY5YaOL%2Fy%2F2KbtvpKkfPYHVRXWdJfsA0WQjA76eZFIYpZBLhnRwLUaamvmuIUD3OJtSUJApwIrgoJVyFzBuNniRPkXF9N9NI69oI0ZtgbeyDboy4BTHKw2d9xi7Ac%2BTCMiaZ9QGsYKjWm5Qws8U4T0gvzCtOrCt1RmsjRoHGjZIpowUm%2BF2Zai0Yc5PRJaZwdpM9nB7H1nqhqVvXPXCLXQXDOpWC9u4dPWkRYwtnGxUkBhm7R7%2BMNn9sS0%2BnGTy5MPn9xb0GOqUBJ7nWYNJb2erJG0tSns%2BRq2Urs1H%2BWueNjylaIcIT4UmXwKq%2FDxDE33uTuTMiPpKrCeGxlWds%2FeD5NqfJK8W1GRl9psn%2Bp8L%2F8hZ3W6n1tBWbESUYbLcdAc4zQeY3cMA5kDG0stoEUzPLFm9WMwD7TKgw1wsghaI%2BwFd1aVA%2FhQiduWjuM6QqbFMX0mYgMHe47QOX%2FLzSnXHW%2FckV8V0ypwwsEPQq&X-Amz-Signature=e8323f6afbd917be8a428bd4e3a1d03c5e1881ab5a2251502e6a253e6eccba2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G3T3M4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAKwINd%2BB6qK7N9mbmwBFBbcpI%2B8SAFPa5hShIlYoE1uAiEA1WNkTAI7kDBXsB8fwMzAhiUtRuU%2BhAsVuZv9vH9Vw3Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC%2BUCn6cPYaAUuPhLCrcA%2FdCbDB7jexvVsEgmROUcXZdmJV1BVfhwBnNj41OC2hRsD54PrhWDSqDznWQC3Yq3lzCru%2BnWiG9pjzAFr2VyrRcqOqqoAcDA42ZTN77C%2F5ANJsbHYS7Y%2B7r1IeAj4Iz47TMaD7Kt2ZrRwiRBtKHehTSfrSBUzlwLs0krmJD7k1vW2rtURUI4aa0s%2F1kgKtbw%2BStMu3wXC4JhdelynbGdwEdPs29aZUuDTrNE77zlA%2Bdfz2XCBOv%2BtJFaxsMlSeHXaDRJk3%2BGMUHacNaOyWPw21uSJMv8wuY8lj4uq3B3%2FE3ph5SlUApBb5WwczgR%2FT2kLchOIG7RfjWquWVAgbSqAhoaB9qT0S1Z%2Fa206dNU7zxlQeMY4JoCAx2KlGMXY5YaOL%2Fy%2F2KbtvpKkfPYHVRXWdJfsA0WQjA76eZFIYpZBLhnRwLUaamvmuIUD3OJtSUJApwIrgoJVyFzBuNniRPkXF9N9NI69oI0ZtgbeyDboy4BTHKw2d9xi7Ac%2BTCMiaZ9QGsYKjWm5Qws8U4T0gvzCtOrCt1RmsjRoHGjZIpowUm%2BF2Zai0Yc5PRJaZwdpM9nB7H1nqhqVvXPXCLXQXDOpWC9u4dPWkRYwtnGxUkBhm7R7%2BMNn9sS0%2BnGTy5MPn9xb0GOqUBJ7nWYNJb2erJG0tSns%2BRq2Urs1H%2BWueNjylaIcIT4UmXwKq%2FDxDE33uTuTMiPpKrCeGxlWds%2FeD5NqfJK8W1GRl9psn%2Bp8L%2F8hZ3W6n1tBWbESUYbLcdAc4zQeY3cMA5kDG0stoEUzPLFm9WMwD7TKgw1wsghaI%2BwFd1aVA%2FhQiduWjuM6QqbFMX0mYgMHe47QOX%2FLzSnXHW%2FckV8V0ypwwsEPQq&X-Amz-Signature=3a7f2607d8e8dde175fd31b4b620668dac728c0f53304c2eae84824e8ffde31e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G3T3M4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAKwINd%2BB6qK7N9mbmwBFBbcpI%2B8SAFPa5hShIlYoE1uAiEA1WNkTAI7kDBXsB8fwMzAhiUtRuU%2BhAsVuZv9vH9Vw3Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC%2BUCn6cPYaAUuPhLCrcA%2FdCbDB7jexvVsEgmROUcXZdmJV1BVfhwBnNj41OC2hRsD54PrhWDSqDznWQC3Yq3lzCru%2BnWiG9pjzAFr2VyrRcqOqqoAcDA42ZTN77C%2F5ANJsbHYS7Y%2B7r1IeAj4Iz47TMaD7Kt2ZrRwiRBtKHehTSfrSBUzlwLs0krmJD7k1vW2rtURUI4aa0s%2F1kgKtbw%2BStMu3wXC4JhdelynbGdwEdPs29aZUuDTrNE77zlA%2Bdfz2XCBOv%2BtJFaxsMlSeHXaDRJk3%2BGMUHacNaOyWPw21uSJMv8wuY8lj4uq3B3%2FE3ph5SlUApBb5WwczgR%2FT2kLchOIG7RfjWquWVAgbSqAhoaB9qT0S1Z%2Fa206dNU7zxlQeMY4JoCAx2KlGMXY5YaOL%2Fy%2F2KbtvpKkfPYHVRXWdJfsA0WQjA76eZFIYpZBLhnRwLUaamvmuIUD3OJtSUJApwIrgoJVyFzBuNniRPkXF9N9NI69oI0ZtgbeyDboy4BTHKw2d9xi7Ac%2BTCMiaZ9QGsYKjWm5Qws8U4T0gvzCtOrCt1RmsjRoHGjZIpowUm%2BF2Zai0Yc5PRJaZwdpM9nB7H1nqhqVvXPXCLXQXDOpWC9u4dPWkRYwtnGxUkBhm7R7%2BMNn9sS0%2BnGTy5MPn9xb0GOqUBJ7nWYNJb2erJG0tSns%2BRq2Urs1H%2BWueNjylaIcIT4UmXwKq%2FDxDE33uTuTMiPpKrCeGxlWds%2FeD5NqfJK8W1GRl9psn%2Bp8L%2F8hZ3W6n1tBWbESUYbLcdAc4zQeY3cMA5kDG0stoEUzPLFm9WMwD7TKgw1wsghaI%2BwFd1aVA%2FhQiduWjuM6QqbFMX0mYgMHe47QOX%2FLzSnXHW%2FckV8V0ypwwsEPQq&X-Amz-Signature=a9f1a6095789bdba03b115548fbf34f49d44fb90fd8769d95062c10abe837713&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G3T3M4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAKwINd%2BB6qK7N9mbmwBFBbcpI%2B8SAFPa5hShIlYoE1uAiEA1WNkTAI7kDBXsB8fwMzAhiUtRuU%2BhAsVuZv9vH9Vw3Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC%2BUCn6cPYaAUuPhLCrcA%2FdCbDB7jexvVsEgmROUcXZdmJV1BVfhwBnNj41OC2hRsD54PrhWDSqDznWQC3Yq3lzCru%2BnWiG9pjzAFr2VyrRcqOqqoAcDA42ZTN77C%2F5ANJsbHYS7Y%2B7r1IeAj4Iz47TMaD7Kt2ZrRwiRBtKHehTSfrSBUzlwLs0krmJD7k1vW2rtURUI4aa0s%2F1kgKtbw%2BStMu3wXC4JhdelynbGdwEdPs29aZUuDTrNE77zlA%2Bdfz2XCBOv%2BtJFaxsMlSeHXaDRJk3%2BGMUHacNaOyWPw21uSJMv8wuY8lj4uq3B3%2FE3ph5SlUApBb5WwczgR%2FT2kLchOIG7RfjWquWVAgbSqAhoaB9qT0S1Z%2Fa206dNU7zxlQeMY4JoCAx2KlGMXY5YaOL%2Fy%2F2KbtvpKkfPYHVRXWdJfsA0WQjA76eZFIYpZBLhnRwLUaamvmuIUD3OJtSUJApwIrgoJVyFzBuNniRPkXF9N9NI69oI0ZtgbeyDboy4BTHKw2d9xi7Ac%2BTCMiaZ9QGsYKjWm5Qws8U4T0gvzCtOrCt1RmsjRoHGjZIpowUm%2BF2Zai0Yc5PRJaZwdpM9nB7H1nqhqVvXPXCLXQXDOpWC9u4dPWkRYwtnGxUkBhm7R7%2BMNn9sS0%2BnGTy5MPn9xb0GOqUBJ7nWYNJb2erJG0tSns%2BRq2Urs1H%2BWueNjylaIcIT4UmXwKq%2FDxDE33uTuTMiPpKrCeGxlWds%2FeD5NqfJK8W1GRl9psn%2Bp8L%2F8hZ3W6n1tBWbESUYbLcdAc4zQeY3cMA5kDG0stoEUzPLFm9WMwD7TKgw1wsghaI%2BwFd1aVA%2FhQiduWjuM6QqbFMX0mYgMHe47QOX%2FLzSnXHW%2FckV8V0ypwwsEPQq&X-Amz-Signature=c36fecbd7feda8c1eabd9ab4f5026dded8099d0143a771870f124d558c9fcaf0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634G3T3M4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAKwINd%2BB6qK7N9mbmwBFBbcpI%2B8SAFPa5hShIlYoE1uAiEA1WNkTAI7kDBXsB8fwMzAhiUtRuU%2BhAsVuZv9vH9Vw3Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC%2BUCn6cPYaAUuPhLCrcA%2FdCbDB7jexvVsEgmROUcXZdmJV1BVfhwBnNj41OC2hRsD54PrhWDSqDznWQC3Yq3lzCru%2BnWiG9pjzAFr2VyrRcqOqqoAcDA42ZTN77C%2F5ANJsbHYS7Y%2B7r1IeAj4Iz47TMaD7Kt2ZrRwiRBtKHehTSfrSBUzlwLs0krmJD7k1vW2rtURUI4aa0s%2F1kgKtbw%2BStMu3wXC4JhdelynbGdwEdPs29aZUuDTrNE77zlA%2Bdfz2XCBOv%2BtJFaxsMlSeHXaDRJk3%2BGMUHacNaOyWPw21uSJMv8wuY8lj4uq3B3%2FE3ph5SlUApBb5WwczgR%2FT2kLchOIG7RfjWquWVAgbSqAhoaB9qT0S1Z%2Fa206dNU7zxlQeMY4JoCAx2KlGMXY5YaOL%2Fy%2F2KbtvpKkfPYHVRXWdJfsA0WQjA76eZFIYpZBLhnRwLUaamvmuIUD3OJtSUJApwIrgoJVyFzBuNniRPkXF9N9NI69oI0ZtgbeyDboy4BTHKw2d9xi7Ac%2BTCMiaZ9QGsYKjWm5Qws8U4T0gvzCtOrCt1RmsjRoHGjZIpowUm%2BF2Zai0Yc5PRJaZwdpM9nB7H1nqhqVvXPXCLXQXDOpWC9u4dPWkRYwtnGxUkBhm7R7%2BMNn9sS0%2BnGTy5MPn9xb0GOqUBJ7nWYNJb2erJG0tSns%2BRq2Urs1H%2BWueNjylaIcIT4UmXwKq%2FDxDE33uTuTMiPpKrCeGxlWds%2FeD5NqfJK8W1GRl9psn%2Bp8L%2F8hZ3W6n1tBWbESUYbLcdAc4zQeY3cMA5kDG0stoEUzPLFm9WMwD7TKgw1wsghaI%2BwFd1aVA%2FhQiduWjuM6QqbFMX0mYgMHe47QOX%2FLzSnXHW%2FckV8V0ypwwsEPQq&X-Amz-Signature=b6767bc484b8c358e540d8971f47a34e5ba55177d6f2396d4c3844d7a2422dff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
