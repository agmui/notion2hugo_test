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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJRDKEV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW9gEM9hlDg%2BCypoBm4uWrbZjWr%2FMMwzNglmjx2PHa9AiEApBcle%2FMqXG16jEoT%2FPHYKaDb8qnM5%2Bz29HPIKpaWC2gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjEJw%2Bzl%2FcOROf0aircA20i92cqrNN9b3cAjiymMRmTkB86Cau86bhv%2FDeKLF4VFQbTE%2BMXye07jqyWCx%2BDhbjb2JgrSuMoyIQHrgfcbre8NSNonjOPMwC9OTgG8MyT2XyRNG5JOc35mM5XwLizLBa61YzzC%2BiRTtFc2w7R2Qbj7Obfulx7ydfSQtQGIjUcgHGyqrtsscScedv2NDMCrnNW8CTbSBRbDTPyH2O2Ba2GL6ZKTqdqJGqkPyK1bT7MIoNPoq0Qdf6xMtQv5bASzHIDOKweYPngsrRxYtCUrdu6DoaGahapZ2KgYGbY5IAI0KWX9FbTagA5mQGcxJiGIE1UxS2mBY26lTZvFcNjZvbcLcuDeutaOKU9s92ccXyAREXrYJks5bMNityegESWRHcVshpCVFDkqSHtmSqt5wG7cFa4MncLfZN2CCrIYRB3hx3Fu40MmYuiiHnw8Xo7iFHLFLeopts2dpxM85c0M%2FHq%2FfeL9f5SFfQOmB9vF5iLoX8JrxxXnIayHXR%2BbbeSz6ZZ4Xxl7YAtJHii%2F8tnZKsqY4ZJjD92t9QBwo4BKCjFx9jJ9CZO5uA7ROYOJ2lZCwHP6tfnEzPYSojQTBcwTInFBmSDNQHztdx33QqW3chUm1p2SB%2BVilYpa2uFMImx8sMGOqUBQpSfu%2FfmF7cpj6LvGZ7DXFTRL6IEMqn2pTFU6ZtlqPixZ93sbmKxlUe1wwst%2BFPuOmTVuQEuByNwNW88TzWWr%2FzYH4Y%2Fj6DrAcwONhBruJEi1flFNXRHEmk4ixmbL0Coh9Rsg0Q8b%2FVQzrdYScCqwPCSGcCwqfLhmwmwjRzA05dcex7FU3muxkEjnv9zvt6jaivpd1dS8Qwg1TfIgBSP6bq8mFaf&X-Amz-Signature=9000ef43a5ec26fa28894086aec17487da7461ea951f51116059bd512e900240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJRDKEV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW9gEM9hlDg%2BCypoBm4uWrbZjWr%2FMMwzNglmjx2PHa9AiEApBcle%2FMqXG16jEoT%2FPHYKaDb8qnM5%2Bz29HPIKpaWC2gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjEJw%2Bzl%2FcOROf0aircA20i92cqrNN9b3cAjiymMRmTkB86Cau86bhv%2FDeKLF4VFQbTE%2BMXye07jqyWCx%2BDhbjb2JgrSuMoyIQHrgfcbre8NSNonjOPMwC9OTgG8MyT2XyRNG5JOc35mM5XwLizLBa61YzzC%2BiRTtFc2w7R2Qbj7Obfulx7ydfSQtQGIjUcgHGyqrtsscScedv2NDMCrnNW8CTbSBRbDTPyH2O2Ba2GL6ZKTqdqJGqkPyK1bT7MIoNPoq0Qdf6xMtQv5bASzHIDOKweYPngsrRxYtCUrdu6DoaGahapZ2KgYGbY5IAI0KWX9FbTagA5mQGcxJiGIE1UxS2mBY26lTZvFcNjZvbcLcuDeutaOKU9s92ccXyAREXrYJks5bMNityegESWRHcVshpCVFDkqSHtmSqt5wG7cFa4MncLfZN2CCrIYRB3hx3Fu40MmYuiiHnw8Xo7iFHLFLeopts2dpxM85c0M%2FHq%2FfeL9f5SFfQOmB9vF5iLoX8JrxxXnIayHXR%2BbbeSz6ZZ4Xxl7YAtJHii%2F8tnZKsqY4ZJjD92t9QBwo4BKCjFx9jJ9CZO5uA7ROYOJ2lZCwHP6tfnEzPYSojQTBcwTInFBmSDNQHztdx33QqW3chUm1p2SB%2BVilYpa2uFMImx8sMGOqUBQpSfu%2FfmF7cpj6LvGZ7DXFTRL6IEMqn2pTFU6ZtlqPixZ93sbmKxlUe1wwst%2BFPuOmTVuQEuByNwNW88TzWWr%2FzYH4Y%2Fj6DrAcwONhBruJEi1flFNXRHEmk4ixmbL0Coh9Rsg0Q8b%2FVQzrdYScCqwPCSGcCwqfLhmwmwjRzA05dcex7FU3muxkEjnv9zvt6jaivpd1dS8Qwg1TfIgBSP6bq8mFaf&X-Amz-Signature=f5902009f8f54cf9aa251fedf5744ce39bfd1781ded23d408848847fd0e93201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJRDKEV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW9gEM9hlDg%2BCypoBm4uWrbZjWr%2FMMwzNglmjx2PHa9AiEApBcle%2FMqXG16jEoT%2FPHYKaDb8qnM5%2Bz29HPIKpaWC2gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjEJw%2Bzl%2FcOROf0aircA20i92cqrNN9b3cAjiymMRmTkB86Cau86bhv%2FDeKLF4VFQbTE%2BMXye07jqyWCx%2BDhbjb2JgrSuMoyIQHrgfcbre8NSNonjOPMwC9OTgG8MyT2XyRNG5JOc35mM5XwLizLBa61YzzC%2BiRTtFc2w7R2Qbj7Obfulx7ydfSQtQGIjUcgHGyqrtsscScedv2NDMCrnNW8CTbSBRbDTPyH2O2Ba2GL6ZKTqdqJGqkPyK1bT7MIoNPoq0Qdf6xMtQv5bASzHIDOKweYPngsrRxYtCUrdu6DoaGahapZ2KgYGbY5IAI0KWX9FbTagA5mQGcxJiGIE1UxS2mBY26lTZvFcNjZvbcLcuDeutaOKU9s92ccXyAREXrYJks5bMNityegESWRHcVshpCVFDkqSHtmSqt5wG7cFa4MncLfZN2CCrIYRB3hx3Fu40MmYuiiHnw8Xo7iFHLFLeopts2dpxM85c0M%2FHq%2FfeL9f5SFfQOmB9vF5iLoX8JrxxXnIayHXR%2BbbeSz6ZZ4Xxl7YAtJHii%2F8tnZKsqY4ZJjD92t9QBwo4BKCjFx9jJ9CZO5uA7ROYOJ2lZCwHP6tfnEzPYSojQTBcwTInFBmSDNQHztdx33QqW3chUm1p2SB%2BVilYpa2uFMImx8sMGOqUBQpSfu%2FfmF7cpj6LvGZ7DXFTRL6IEMqn2pTFU6ZtlqPixZ93sbmKxlUe1wwst%2BFPuOmTVuQEuByNwNW88TzWWr%2FzYH4Y%2Fj6DrAcwONhBruJEi1flFNXRHEmk4ixmbL0Coh9Rsg0Q8b%2FVQzrdYScCqwPCSGcCwqfLhmwmwjRzA05dcex7FU3muxkEjnv9zvt6jaivpd1dS8Qwg1TfIgBSP6bq8mFaf&X-Amz-Signature=4c943ab50cb36eba1bbbd5b711e2e9cc2a7acf7fd1e7d7d5a4c03896ea9b3c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJRDKEV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW9gEM9hlDg%2BCypoBm4uWrbZjWr%2FMMwzNglmjx2PHa9AiEApBcle%2FMqXG16jEoT%2FPHYKaDb8qnM5%2Bz29HPIKpaWC2gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjEJw%2Bzl%2FcOROf0aircA20i92cqrNN9b3cAjiymMRmTkB86Cau86bhv%2FDeKLF4VFQbTE%2BMXye07jqyWCx%2BDhbjb2JgrSuMoyIQHrgfcbre8NSNonjOPMwC9OTgG8MyT2XyRNG5JOc35mM5XwLizLBa61YzzC%2BiRTtFc2w7R2Qbj7Obfulx7ydfSQtQGIjUcgHGyqrtsscScedv2NDMCrnNW8CTbSBRbDTPyH2O2Ba2GL6ZKTqdqJGqkPyK1bT7MIoNPoq0Qdf6xMtQv5bASzHIDOKweYPngsrRxYtCUrdu6DoaGahapZ2KgYGbY5IAI0KWX9FbTagA5mQGcxJiGIE1UxS2mBY26lTZvFcNjZvbcLcuDeutaOKU9s92ccXyAREXrYJks5bMNityegESWRHcVshpCVFDkqSHtmSqt5wG7cFa4MncLfZN2CCrIYRB3hx3Fu40MmYuiiHnw8Xo7iFHLFLeopts2dpxM85c0M%2FHq%2FfeL9f5SFfQOmB9vF5iLoX8JrxxXnIayHXR%2BbbeSz6ZZ4Xxl7YAtJHii%2F8tnZKsqY4ZJjD92t9QBwo4BKCjFx9jJ9CZO5uA7ROYOJ2lZCwHP6tfnEzPYSojQTBcwTInFBmSDNQHztdx33QqW3chUm1p2SB%2BVilYpa2uFMImx8sMGOqUBQpSfu%2FfmF7cpj6LvGZ7DXFTRL6IEMqn2pTFU6ZtlqPixZ93sbmKxlUe1wwst%2BFPuOmTVuQEuByNwNW88TzWWr%2FzYH4Y%2Fj6DrAcwONhBruJEi1flFNXRHEmk4ixmbL0Coh9Rsg0Q8b%2FVQzrdYScCqwPCSGcCwqfLhmwmwjRzA05dcex7FU3muxkEjnv9zvt6jaivpd1dS8Qwg1TfIgBSP6bq8mFaf&X-Amz-Signature=c79b608bf9c4eea4b6a76672233fbd00817384b824ef4b925fdf19a3383ce8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJRDKEV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW9gEM9hlDg%2BCypoBm4uWrbZjWr%2FMMwzNglmjx2PHa9AiEApBcle%2FMqXG16jEoT%2FPHYKaDb8qnM5%2Bz29HPIKpaWC2gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjEJw%2Bzl%2FcOROf0aircA20i92cqrNN9b3cAjiymMRmTkB86Cau86bhv%2FDeKLF4VFQbTE%2BMXye07jqyWCx%2BDhbjb2JgrSuMoyIQHrgfcbre8NSNonjOPMwC9OTgG8MyT2XyRNG5JOc35mM5XwLizLBa61YzzC%2BiRTtFc2w7R2Qbj7Obfulx7ydfSQtQGIjUcgHGyqrtsscScedv2NDMCrnNW8CTbSBRbDTPyH2O2Ba2GL6ZKTqdqJGqkPyK1bT7MIoNPoq0Qdf6xMtQv5bASzHIDOKweYPngsrRxYtCUrdu6DoaGahapZ2KgYGbY5IAI0KWX9FbTagA5mQGcxJiGIE1UxS2mBY26lTZvFcNjZvbcLcuDeutaOKU9s92ccXyAREXrYJks5bMNityegESWRHcVshpCVFDkqSHtmSqt5wG7cFa4MncLfZN2CCrIYRB3hx3Fu40MmYuiiHnw8Xo7iFHLFLeopts2dpxM85c0M%2FHq%2FfeL9f5SFfQOmB9vF5iLoX8JrxxXnIayHXR%2BbbeSz6ZZ4Xxl7YAtJHii%2F8tnZKsqY4ZJjD92t9QBwo4BKCjFx9jJ9CZO5uA7ROYOJ2lZCwHP6tfnEzPYSojQTBcwTInFBmSDNQHztdx33QqW3chUm1p2SB%2BVilYpa2uFMImx8sMGOqUBQpSfu%2FfmF7cpj6LvGZ7DXFTRL6IEMqn2pTFU6ZtlqPixZ93sbmKxlUe1wwst%2BFPuOmTVuQEuByNwNW88TzWWr%2FzYH4Y%2Fj6DrAcwONhBruJEi1flFNXRHEmk4ixmbL0Coh9Rsg0Q8b%2FVQzrdYScCqwPCSGcCwqfLhmwmwjRzA05dcex7FU3muxkEjnv9zvt6jaivpd1dS8Qwg1TfIgBSP6bq8mFaf&X-Amz-Signature=7073a85379555d41f969da31e28a57347272d0e38e6a904d4e310a39298b43db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJRDKEV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW9gEM9hlDg%2BCypoBm4uWrbZjWr%2FMMwzNglmjx2PHa9AiEApBcle%2FMqXG16jEoT%2FPHYKaDb8qnM5%2Bz29HPIKpaWC2gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjEJw%2Bzl%2FcOROf0aircA20i92cqrNN9b3cAjiymMRmTkB86Cau86bhv%2FDeKLF4VFQbTE%2BMXye07jqyWCx%2BDhbjb2JgrSuMoyIQHrgfcbre8NSNonjOPMwC9OTgG8MyT2XyRNG5JOc35mM5XwLizLBa61YzzC%2BiRTtFc2w7R2Qbj7Obfulx7ydfSQtQGIjUcgHGyqrtsscScedv2NDMCrnNW8CTbSBRbDTPyH2O2Ba2GL6ZKTqdqJGqkPyK1bT7MIoNPoq0Qdf6xMtQv5bASzHIDOKweYPngsrRxYtCUrdu6DoaGahapZ2KgYGbY5IAI0KWX9FbTagA5mQGcxJiGIE1UxS2mBY26lTZvFcNjZvbcLcuDeutaOKU9s92ccXyAREXrYJks5bMNityegESWRHcVshpCVFDkqSHtmSqt5wG7cFa4MncLfZN2CCrIYRB3hx3Fu40MmYuiiHnw8Xo7iFHLFLeopts2dpxM85c0M%2FHq%2FfeL9f5SFfQOmB9vF5iLoX8JrxxXnIayHXR%2BbbeSz6ZZ4Xxl7YAtJHii%2F8tnZKsqY4ZJjD92t9QBwo4BKCjFx9jJ9CZO5uA7ROYOJ2lZCwHP6tfnEzPYSojQTBcwTInFBmSDNQHztdx33QqW3chUm1p2SB%2BVilYpa2uFMImx8sMGOqUBQpSfu%2FfmF7cpj6LvGZ7DXFTRL6IEMqn2pTFU6ZtlqPixZ93sbmKxlUe1wwst%2BFPuOmTVuQEuByNwNW88TzWWr%2FzYH4Y%2Fj6DrAcwONhBruJEi1flFNXRHEmk4ixmbL0Coh9Rsg0Q8b%2FVQzrdYScCqwPCSGcCwqfLhmwmwjRzA05dcex7FU3muxkEjnv9zvt6jaivpd1dS8Qwg1TfIgBSP6bq8mFaf&X-Amz-Signature=b81a470e61505c0807ba262cf22e0eeb1ff0e8f8701b3402909d63e9d762a082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJRDKEV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW9gEM9hlDg%2BCypoBm4uWrbZjWr%2FMMwzNglmjx2PHa9AiEApBcle%2FMqXG16jEoT%2FPHYKaDb8qnM5%2Bz29HPIKpaWC2gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjEJw%2Bzl%2FcOROf0aircA20i92cqrNN9b3cAjiymMRmTkB86Cau86bhv%2FDeKLF4VFQbTE%2BMXye07jqyWCx%2BDhbjb2JgrSuMoyIQHrgfcbre8NSNonjOPMwC9OTgG8MyT2XyRNG5JOc35mM5XwLizLBa61YzzC%2BiRTtFc2w7R2Qbj7Obfulx7ydfSQtQGIjUcgHGyqrtsscScedv2NDMCrnNW8CTbSBRbDTPyH2O2Ba2GL6ZKTqdqJGqkPyK1bT7MIoNPoq0Qdf6xMtQv5bASzHIDOKweYPngsrRxYtCUrdu6DoaGahapZ2KgYGbY5IAI0KWX9FbTagA5mQGcxJiGIE1UxS2mBY26lTZvFcNjZvbcLcuDeutaOKU9s92ccXyAREXrYJks5bMNityegESWRHcVshpCVFDkqSHtmSqt5wG7cFa4MncLfZN2CCrIYRB3hx3Fu40MmYuiiHnw8Xo7iFHLFLeopts2dpxM85c0M%2FHq%2FfeL9f5SFfQOmB9vF5iLoX8JrxxXnIayHXR%2BbbeSz6ZZ4Xxl7YAtJHii%2F8tnZKsqY4ZJjD92t9QBwo4BKCjFx9jJ9CZO5uA7ROYOJ2lZCwHP6tfnEzPYSojQTBcwTInFBmSDNQHztdx33QqW3chUm1p2SB%2BVilYpa2uFMImx8sMGOqUBQpSfu%2FfmF7cpj6LvGZ7DXFTRL6IEMqn2pTFU6ZtlqPixZ93sbmKxlUe1wwst%2BFPuOmTVuQEuByNwNW88TzWWr%2FzYH4Y%2Fj6DrAcwONhBruJEi1flFNXRHEmk4ixmbL0Coh9Rsg0Q8b%2FVQzrdYScCqwPCSGcCwqfLhmwmwjRzA05dcex7FU3muxkEjnv9zvt6jaivpd1dS8Qwg1TfIgBSP6bq8mFaf&X-Amz-Signature=6252c63a54d73e2b827bad58de1c8fd0e788c261ee51599205bcb4bb29e1b92a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJRDKEV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDW9gEM9hlDg%2BCypoBm4uWrbZjWr%2FMMwzNglmjx2PHa9AiEApBcle%2FMqXG16jEoT%2FPHYKaDb8qnM5%2Bz29HPIKpaWC2gqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjEJw%2Bzl%2FcOROf0aircA20i92cqrNN9b3cAjiymMRmTkB86Cau86bhv%2FDeKLF4VFQbTE%2BMXye07jqyWCx%2BDhbjb2JgrSuMoyIQHrgfcbre8NSNonjOPMwC9OTgG8MyT2XyRNG5JOc35mM5XwLizLBa61YzzC%2BiRTtFc2w7R2Qbj7Obfulx7ydfSQtQGIjUcgHGyqrtsscScedv2NDMCrnNW8CTbSBRbDTPyH2O2Ba2GL6ZKTqdqJGqkPyK1bT7MIoNPoq0Qdf6xMtQv5bASzHIDOKweYPngsrRxYtCUrdu6DoaGahapZ2KgYGbY5IAI0KWX9FbTagA5mQGcxJiGIE1UxS2mBY26lTZvFcNjZvbcLcuDeutaOKU9s92ccXyAREXrYJks5bMNityegESWRHcVshpCVFDkqSHtmSqt5wG7cFa4MncLfZN2CCrIYRB3hx3Fu40MmYuiiHnw8Xo7iFHLFLeopts2dpxM85c0M%2FHq%2FfeL9f5SFfQOmB9vF5iLoX8JrxxXnIayHXR%2BbbeSz6ZZ4Xxl7YAtJHii%2F8tnZKsqY4ZJjD92t9QBwo4BKCjFx9jJ9CZO5uA7ROYOJ2lZCwHP6tfnEzPYSojQTBcwTInFBmSDNQHztdx33QqW3chUm1p2SB%2BVilYpa2uFMImx8sMGOqUBQpSfu%2FfmF7cpj6LvGZ7DXFTRL6IEMqn2pTFU6ZtlqPixZ93sbmKxlUe1wwst%2BFPuOmTVuQEuByNwNW88TzWWr%2FzYH4Y%2Fj6DrAcwONhBruJEi1flFNXRHEmk4ixmbL0Coh9Rsg0Q8b%2FVQzrdYScCqwPCSGcCwqfLhmwmwjRzA05dcex7FU3muxkEjnv9zvt6jaivpd1dS8Qwg1TfIgBSP6bq8mFaf&X-Amz-Signature=04b0fc09e764e63713766bf98d7da50228afd798945ccc473d114dc42bde3473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
