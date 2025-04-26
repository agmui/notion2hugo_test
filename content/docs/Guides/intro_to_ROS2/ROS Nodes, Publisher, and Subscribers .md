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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCCFAZX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo66Dks%2Bryb0x11wyw%2Bu1pYu78HglwNTXviFuZc2qlNgIgTonW%2B2525m%2BTSQ23hLPqgMaAZkNlQBu2PQLaAOaMkmsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFLG%2BjvRgi%2FkYnjVKCrcA1SXMilC%2FoGK4arVm8%2B%2B0AQzAHqjdPvDzCIETKuwbNbv7Ba7IKIpQaEKkADLFVwBkYC7lSJLcAT5Srjkl1zqUAa2ygpQU7plw%2B01fjr8YC%2FKIBgwSYZto2bkiay1QgO4UZTH5GifyoaMv6%2By5365R8zL9YPT4g75IsLnameQFNRhc%2FDJqYwL9BuAduOPhdhzWWzd3cXHSjH6nDF7XfHHaRQSOhf8PGrh0P035n2%2FZn2awTDktQAHI4odjP7Zh9E7lFesxnWxAJfNPdg00%2BHduUhtKnktLGpHHBcJRYxR06ho%2Fyg3tc1SjTRMo09mD2US2w9xSPWfQOnnxxEr9hJ%2BsDMhqRVT6XveZYQfqJM%2BEjnJc0823gFR%2FGE2%2B0oH6MpdJWRBwO3Hz74bDt6Mi%2B%2Byo6UQDZnQk6xPo31CnXX78A3%2B7jZzMDc76GyqZ91OUO1kVBButdqWoRPEMRbu%2BVzhHWZhUovbgAT%2FaryjQm0KTuC2ocpS8V%2B8uWE5Az0lg7v%2BQF%2F6XyZKf3wDCH7vjZVLbU118Q3IaH8%2BlBkYn0bSQCjAoixusVLTXO8wHfLaHzbmpRzsZrY8CWfRMnfyULIdTpyLM708GD6EF%2Be0AeS%2BsdI3wI95nccUh%2F1t58yiMJeEssAGOqUBs981zA0%2FlM7Kplm36BJXNV7Tbf0WRwg511ocaYfQWr%2FX2Tq32AMr32qJEBccc0t2Yna04L%2FcIFbakfMtL4og8Qr6JTK39vaFRztEiZ4RK%2Fgm08jMB8XWJFlTgBb8X1f1AaiG%2F6MJd89LIGK0kb1daV%2Fi%2BpcKqK6JRj7OHQT0fKP3zjpfPu1FQ85Pk25mOdMjJR89hl5dcI2EyrdvtuTR3MUK3VEi&X-Amz-Signature=470df1f183582000f0e29d33df1a72c69e9530d10d815a4eb8e9297e72c3e5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCCFAZX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo66Dks%2Bryb0x11wyw%2Bu1pYu78HglwNTXviFuZc2qlNgIgTonW%2B2525m%2BTSQ23hLPqgMaAZkNlQBu2PQLaAOaMkmsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFLG%2BjvRgi%2FkYnjVKCrcA1SXMilC%2FoGK4arVm8%2B%2B0AQzAHqjdPvDzCIETKuwbNbv7Ba7IKIpQaEKkADLFVwBkYC7lSJLcAT5Srjkl1zqUAa2ygpQU7plw%2B01fjr8YC%2FKIBgwSYZto2bkiay1QgO4UZTH5GifyoaMv6%2By5365R8zL9YPT4g75IsLnameQFNRhc%2FDJqYwL9BuAduOPhdhzWWzd3cXHSjH6nDF7XfHHaRQSOhf8PGrh0P035n2%2FZn2awTDktQAHI4odjP7Zh9E7lFesxnWxAJfNPdg00%2BHduUhtKnktLGpHHBcJRYxR06ho%2Fyg3tc1SjTRMo09mD2US2w9xSPWfQOnnxxEr9hJ%2BsDMhqRVT6XveZYQfqJM%2BEjnJc0823gFR%2FGE2%2B0oH6MpdJWRBwO3Hz74bDt6Mi%2B%2Byo6UQDZnQk6xPo31CnXX78A3%2B7jZzMDc76GyqZ91OUO1kVBButdqWoRPEMRbu%2BVzhHWZhUovbgAT%2FaryjQm0KTuC2ocpS8V%2B8uWE5Az0lg7v%2BQF%2F6XyZKf3wDCH7vjZVLbU118Q3IaH8%2BlBkYn0bSQCjAoixusVLTXO8wHfLaHzbmpRzsZrY8CWfRMnfyULIdTpyLM708GD6EF%2Be0AeS%2BsdI3wI95nccUh%2F1t58yiMJeEssAGOqUBs981zA0%2FlM7Kplm36BJXNV7Tbf0WRwg511ocaYfQWr%2FX2Tq32AMr32qJEBccc0t2Yna04L%2FcIFbakfMtL4og8Qr6JTK39vaFRztEiZ4RK%2Fgm08jMB8XWJFlTgBb8X1f1AaiG%2F6MJd89LIGK0kb1daV%2Fi%2BpcKqK6JRj7OHQT0fKP3zjpfPu1FQ85Pk25mOdMjJR89hl5dcI2EyrdvtuTR3MUK3VEi&X-Amz-Signature=ff7b6c918cef4a66dd5592e64976951555ec9f50912c11ba9c78238ac5a44a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCCFAZX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo66Dks%2Bryb0x11wyw%2Bu1pYu78HglwNTXviFuZc2qlNgIgTonW%2B2525m%2BTSQ23hLPqgMaAZkNlQBu2PQLaAOaMkmsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFLG%2BjvRgi%2FkYnjVKCrcA1SXMilC%2FoGK4arVm8%2B%2B0AQzAHqjdPvDzCIETKuwbNbv7Ba7IKIpQaEKkADLFVwBkYC7lSJLcAT5Srjkl1zqUAa2ygpQU7plw%2B01fjr8YC%2FKIBgwSYZto2bkiay1QgO4UZTH5GifyoaMv6%2By5365R8zL9YPT4g75IsLnameQFNRhc%2FDJqYwL9BuAduOPhdhzWWzd3cXHSjH6nDF7XfHHaRQSOhf8PGrh0P035n2%2FZn2awTDktQAHI4odjP7Zh9E7lFesxnWxAJfNPdg00%2BHduUhtKnktLGpHHBcJRYxR06ho%2Fyg3tc1SjTRMo09mD2US2w9xSPWfQOnnxxEr9hJ%2BsDMhqRVT6XveZYQfqJM%2BEjnJc0823gFR%2FGE2%2B0oH6MpdJWRBwO3Hz74bDt6Mi%2B%2Byo6UQDZnQk6xPo31CnXX78A3%2B7jZzMDc76GyqZ91OUO1kVBButdqWoRPEMRbu%2BVzhHWZhUovbgAT%2FaryjQm0KTuC2ocpS8V%2B8uWE5Az0lg7v%2BQF%2F6XyZKf3wDCH7vjZVLbU118Q3IaH8%2BlBkYn0bSQCjAoixusVLTXO8wHfLaHzbmpRzsZrY8CWfRMnfyULIdTpyLM708GD6EF%2Be0AeS%2BsdI3wI95nccUh%2F1t58yiMJeEssAGOqUBs981zA0%2FlM7Kplm36BJXNV7Tbf0WRwg511ocaYfQWr%2FX2Tq32AMr32qJEBccc0t2Yna04L%2FcIFbakfMtL4og8Qr6JTK39vaFRztEiZ4RK%2Fgm08jMB8XWJFlTgBb8X1f1AaiG%2F6MJd89LIGK0kb1daV%2Fi%2BpcKqK6JRj7OHQT0fKP3zjpfPu1FQ85Pk25mOdMjJR89hl5dcI2EyrdvtuTR3MUK3VEi&X-Amz-Signature=908d61733681905be9dc3f225acfdd71a0cf62d588900651a3d5c7cc0942c941&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCCFAZX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo66Dks%2Bryb0x11wyw%2Bu1pYu78HglwNTXviFuZc2qlNgIgTonW%2B2525m%2BTSQ23hLPqgMaAZkNlQBu2PQLaAOaMkmsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFLG%2BjvRgi%2FkYnjVKCrcA1SXMilC%2FoGK4arVm8%2B%2B0AQzAHqjdPvDzCIETKuwbNbv7Ba7IKIpQaEKkADLFVwBkYC7lSJLcAT5Srjkl1zqUAa2ygpQU7plw%2B01fjr8YC%2FKIBgwSYZto2bkiay1QgO4UZTH5GifyoaMv6%2By5365R8zL9YPT4g75IsLnameQFNRhc%2FDJqYwL9BuAduOPhdhzWWzd3cXHSjH6nDF7XfHHaRQSOhf8PGrh0P035n2%2FZn2awTDktQAHI4odjP7Zh9E7lFesxnWxAJfNPdg00%2BHduUhtKnktLGpHHBcJRYxR06ho%2Fyg3tc1SjTRMo09mD2US2w9xSPWfQOnnxxEr9hJ%2BsDMhqRVT6XveZYQfqJM%2BEjnJc0823gFR%2FGE2%2B0oH6MpdJWRBwO3Hz74bDt6Mi%2B%2Byo6UQDZnQk6xPo31CnXX78A3%2B7jZzMDc76GyqZ91OUO1kVBButdqWoRPEMRbu%2BVzhHWZhUovbgAT%2FaryjQm0KTuC2ocpS8V%2B8uWE5Az0lg7v%2BQF%2F6XyZKf3wDCH7vjZVLbU118Q3IaH8%2BlBkYn0bSQCjAoixusVLTXO8wHfLaHzbmpRzsZrY8CWfRMnfyULIdTpyLM708GD6EF%2Be0AeS%2BsdI3wI95nccUh%2F1t58yiMJeEssAGOqUBs981zA0%2FlM7Kplm36BJXNV7Tbf0WRwg511ocaYfQWr%2FX2Tq32AMr32qJEBccc0t2Yna04L%2FcIFbakfMtL4og8Qr6JTK39vaFRztEiZ4RK%2Fgm08jMB8XWJFlTgBb8X1f1AaiG%2F6MJd89LIGK0kb1daV%2Fi%2BpcKqK6JRj7OHQT0fKP3zjpfPu1FQ85Pk25mOdMjJR89hl5dcI2EyrdvtuTR3MUK3VEi&X-Amz-Signature=59b08693cb219f613ed4dc04384f341ce7280b28246e800921ffe46db0a8c53f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCCFAZX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo66Dks%2Bryb0x11wyw%2Bu1pYu78HglwNTXviFuZc2qlNgIgTonW%2B2525m%2BTSQ23hLPqgMaAZkNlQBu2PQLaAOaMkmsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFLG%2BjvRgi%2FkYnjVKCrcA1SXMilC%2FoGK4arVm8%2B%2B0AQzAHqjdPvDzCIETKuwbNbv7Ba7IKIpQaEKkADLFVwBkYC7lSJLcAT5Srjkl1zqUAa2ygpQU7plw%2B01fjr8YC%2FKIBgwSYZto2bkiay1QgO4UZTH5GifyoaMv6%2By5365R8zL9YPT4g75IsLnameQFNRhc%2FDJqYwL9BuAduOPhdhzWWzd3cXHSjH6nDF7XfHHaRQSOhf8PGrh0P035n2%2FZn2awTDktQAHI4odjP7Zh9E7lFesxnWxAJfNPdg00%2BHduUhtKnktLGpHHBcJRYxR06ho%2Fyg3tc1SjTRMo09mD2US2w9xSPWfQOnnxxEr9hJ%2BsDMhqRVT6XveZYQfqJM%2BEjnJc0823gFR%2FGE2%2B0oH6MpdJWRBwO3Hz74bDt6Mi%2B%2Byo6UQDZnQk6xPo31CnXX78A3%2B7jZzMDc76GyqZ91OUO1kVBButdqWoRPEMRbu%2BVzhHWZhUovbgAT%2FaryjQm0KTuC2ocpS8V%2B8uWE5Az0lg7v%2BQF%2F6XyZKf3wDCH7vjZVLbU118Q3IaH8%2BlBkYn0bSQCjAoixusVLTXO8wHfLaHzbmpRzsZrY8CWfRMnfyULIdTpyLM708GD6EF%2Be0AeS%2BsdI3wI95nccUh%2F1t58yiMJeEssAGOqUBs981zA0%2FlM7Kplm36BJXNV7Tbf0WRwg511ocaYfQWr%2FX2Tq32AMr32qJEBccc0t2Yna04L%2FcIFbakfMtL4og8Qr6JTK39vaFRztEiZ4RK%2Fgm08jMB8XWJFlTgBb8X1f1AaiG%2F6MJd89LIGK0kb1daV%2Fi%2BpcKqK6JRj7OHQT0fKP3zjpfPu1FQ85Pk25mOdMjJR89hl5dcI2EyrdvtuTR3MUK3VEi&X-Amz-Signature=8c22e042e403aed41c033443028ba54b6f3e4261fa256fb08daae0b0075f2292&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCCFAZX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo66Dks%2Bryb0x11wyw%2Bu1pYu78HglwNTXviFuZc2qlNgIgTonW%2B2525m%2BTSQ23hLPqgMaAZkNlQBu2PQLaAOaMkmsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFLG%2BjvRgi%2FkYnjVKCrcA1SXMilC%2FoGK4arVm8%2B%2B0AQzAHqjdPvDzCIETKuwbNbv7Ba7IKIpQaEKkADLFVwBkYC7lSJLcAT5Srjkl1zqUAa2ygpQU7plw%2B01fjr8YC%2FKIBgwSYZto2bkiay1QgO4UZTH5GifyoaMv6%2By5365R8zL9YPT4g75IsLnameQFNRhc%2FDJqYwL9BuAduOPhdhzWWzd3cXHSjH6nDF7XfHHaRQSOhf8PGrh0P035n2%2FZn2awTDktQAHI4odjP7Zh9E7lFesxnWxAJfNPdg00%2BHduUhtKnktLGpHHBcJRYxR06ho%2Fyg3tc1SjTRMo09mD2US2w9xSPWfQOnnxxEr9hJ%2BsDMhqRVT6XveZYQfqJM%2BEjnJc0823gFR%2FGE2%2B0oH6MpdJWRBwO3Hz74bDt6Mi%2B%2Byo6UQDZnQk6xPo31CnXX78A3%2B7jZzMDc76GyqZ91OUO1kVBButdqWoRPEMRbu%2BVzhHWZhUovbgAT%2FaryjQm0KTuC2ocpS8V%2B8uWE5Az0lg7v%2BQF%2F6XyZKf3wDCH7vjZVLbU118Q3IaH8%2BlBkYn0bSQCjAoixusVLTXO8wHfLaHzbmpRzsZrY8CWfRMnfyULIdTpyLM708GD6EF%2Be0AeS%2BsdI3wI95nccUh%2F1t58yiMJeEssAGOqUBs981zA0%2FlM7Kplm36BJXNV7Tbf0WRwg511ocaYfQWr%2FX2Tq32AMr32qJEBccc0t2Yna04L%2FcIFbakfMtL4og8Qr6JTK39vaFRztEiZ4RK%2Fgm08jMB8XWJFlTgBb8X1f1AaiG%2F6MJd89LIGK0kb1daV%2Fi%2BpcKqK6JRj7OHQT0fKP3zjpfPu1FQ85Pk25mOdMjJR89hl5dcI2EyrdvtuTR3MUK3VEi&X-Amz-Signature=9cb59c0bc72f53d8d9957df13169a239c3f9b0c677e8ec3f1480987186aa6459&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCCFAZX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo66Dks%2Bryb0x11wyw%2Bu1pYu78HglwNTXviFuZc2qlNgIgTonW%2B2525m%2BTSQ23hLPqgMaAZkNlQBu2PQLaAOaMkmsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFLG%2BjvRgi%2FkYnjVKCrcA1SXMilC%2FoGK4arVm8%2B%2B0AQzAHqjdPvDzCIETKuwbNbv7Ba7IKIpQaEKkADLFVwBkYC7lSJLcAT5Srjkl1zqUAa2ygpQU7plw%2B01fjr8YC%2FKIBgwSYZto2bkiay1QgO4UZTH5GifyoaMv6%2By5365R8zL9YPT4g75IsLnameQFNRhc%2FDJqYwL9BuAduOPhdhzWWzd3cXHSjH6nDF7XfHHaRQSOhf8PGrh0P035n2%2FZn2awTDktQAHI4odjP7Zh9E7lFesxnWxAJfNPdg00%2BHduUhtKnktLGpHHBcJRYxR06ho%2Fyg3tc1SjTRMo09mD2US2w9xSPWfQOnnxxEr9hJ%2BsDMhqRVT6XveZYQfqJM%2BEjnJc0823gFR%2FGE2%2B0oH6MpdJWRBwO3Hz74bDt6Mi%2B%2Byo6UQDZnQk6xPo31CnXX78A3%2B7jZzMDc76GyqZ91OUO1kVBButdqWoRPEMRbu%2BVzhHWZhUovbgAT%2FaryjQm0KTuC2ocpS8V%2B8uWE5Az0lg7v%2BQF%2F6XyZKf3wDCH7vjZVLbU118Q3IaH8%2BlBkYn0bSQCjAoixusVLTXO8wHfLaHzbmpRzsZrY8CWfRMnfyULIdTpyLM708GD6EF%2Be0AeS%2BsdI3wI95nccUh%2F1t58yiMJeEssAGOqUBs981zA0%2FlM7Kplm36BJXNV7Tbf0WRwg511ocaYfQWr%2FX2Tq32AMr32qJEBccc0t2Yna04L%2FcIFbakfMtL4og8Qr6JTK39vaFRztEiZ4RK%2Fgm08jMB8XWJFlTgBb8X1f1AaiG%2F6MJd89LIGK0kb1daV%2Fi%2BpcKqK6JRj7OHQT0fKP3zjpfPu1FQ85Pk25mOdMjJR89hl5dcI2EyrdvtuTR3MUK3VEi&X-Amz-Signature=ef786819c67f344225ab11cbb3a0de914164527884a5b9317a599488bad855b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCCFAZX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo66Dks%2Bryb0x11wyw%2Bu1pYu78HglwNTXviFuZc2qlNgIgTonW%2B2525m%2BTSQ23hLPqgMaAZkNlQBu2PQLaAOaMkmsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFLG%2BjvRgi%2FkYnjVKCrcA1SXMilC%2FoGK4arVm8%2B%2B0AQzAHqjdPvDzCIETKuwbNbv7Ba7IKIpQaEKkADLFVwBkYC7lSJLcAT5Srjkl1zqUAa2ygpQU7plw%2B01fjr8YC%2FKIBgwSYZto2bkiay1QgO4UZTH5GifyoaMv6%2By5365R8zL9YPT4g75IsLnameQFNRhc%2FDJqYwL9BuAduOPhdhzWWzd3cXHSjH6nDF7XfHHaRQSOhf8PGrh0P035n2%2FZn2awTDktQAHI4odjP7Zh9E7lFesxnWxAJfNPdg00%2BHduUhtKnktLGpHHBcJRYxR06ho%2Fyg3tc1SjTRMo09mD2US2w9xSPWfQOnnxxEr9hJ%2BsDMhqRVT6XveZYQfqJM%2BEjnJc0823gFR%2FGE2%2B0oH6MpdJWRBwO3Hz74bDt6Mi%2B%2Byo6UQDZnQk6xPo31CnXX78A3%2B7jZzMDc76GyqZ91OUO1kVBButdqWoRPEMRbu%2BVzhHWZhUovbgAT%2FaryjQm0KTuC2ocpS8V%2B8uWE5Az0lg7v%2BQF%2F6XyZKf3wDCH7vjZVLbU118Q3IaH8%2BlBkYn0bSQCjAoixusVLTXO8wHfLaHzbmpRzsZrY8CWfRMnfyULIdTpyLM708GD6EF%2Be0AeS%2BsdI3wI95nccUh%2F1t58yiMJeEssAGOqUBs981zA0%2FlM7Kplm36BJXNV7Tbf0WRwg511ocaYfQWr%2FX2Tq32AMr32qJEBccc0t2Yna04L%2FcIFbakfMtL4og8Qr6JTK39vaFRztEiZ4RK%2Fgm08jMB8XWJFlTgBb8X1f1AaiG%2F6MJd89LIGK0kb1daV%2Fi%2BpcKqK6JRj7OHQT0fKP3zjpfPu1FQ85Pk25mOdMjJR89hl5dcI2EyrdvtuTR3MUK3VEi&X-Amz-Signature=adf3819bc3b7991693052a5c2a1705b261653875bad1b4c62b8da2de50ceb3bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
