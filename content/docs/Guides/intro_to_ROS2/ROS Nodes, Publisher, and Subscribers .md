---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIMXGP4%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCpCEhQAIC0fJ3WNj%2F0dTHTIXIi8T4A%2Buq9bOyvjroHqAIgWRecHsiFCzFwADYIxcNv%2FIj5PsOYqbNCHmAU6q6slh4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGq%2FgRhayuTfQ3CQSrcA3PHegc9DnHbuS4l5ZQ7F1%2BT5TBMek%2BvCjYBpwo5ZqqRRZNbhtJUvDjpxMoVLm5QjhqMddFSIrq4jq%2BE6mTrZjF0vxul0nev5EPdtp71R0QfgDOKuAKQcpmuDTX0oUb3Bu1336Qnves1i2H9V2%2Bv4AyGNPiYVRslA4aUB73J1wmUaAuO1tnIxQb48wJFsEK6%2Fm%2BA0b2rEYAiM00AQxaIg7Ih6bVtuzrfabchQl6u5TjMRFLCMp3tPlmZtDJlLLbExzKw8P8RpyBQ6hsN%2BVFsR%2BDVaIsmb10UuDNJWqW6CHj0eo5UJen8BoNBK5cHbTP2%2BrPnIYpsfckYM16f7rhXzC98LX7Z2D58AD8JUZwG%2Bmv2Ec7QfpdxADA6tQErDmtP10odopS0oqJn3h5ney%2FWI65viixJUeVDw%2FQOZesS%2BHXT6LJ7MtjtKm2Kue67aLsprYap9quVr%2FD7%2FO2EJArV66YaBphBv%2BrUce4111yXJLCO%2BROSewAuRfigs%2Br0PR4qjfkVl5FDCE%2BStb6E0VnxHznVY1Hi6NIYcIFF%2BMzG8juKWhjklWrAXOmwghY3mz88rAA9AU1GkK0gGvjusEHdeOIFJCss%2BFsqVX63L%2BOVnCJxhDsN%2BtylRZFJMrVdMJDtnM4GOqUB3SKkgn7pjA%2Fv4sGsvbabJivK0hUmi1rTSvWo7GpwXk2C7mgYjLrD67TmGrnmMHG5ggOGGX5InXeIDm6Ju%2FMHtN%2BTUmyRMXefYDVRs%2FmaRqvLZBbUdrueKrWs%2FT7lV2tWyJVpLa0ZEzG85%2BFKfZauOz8%2FIeGIVunWOuw7kqfyu9uQPqIC2ChCzR31UwQThdllWGee8to3nWpj0WCu77KPvWF6XSW1&X-Amz-Signature=4699a1675037fe81bd430d85b5f0b98e612b7d038e7d5e43d97dc0360c1e9899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIMXGP4%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCpCEhQAIC0fJ3WNj%2F0dTHTIXIi8T4A%2Buq9bOyvjroHqAIgWRecHsiFCzFwADYIxcNv%2FIj5PsOYqbNCHmAU6q6slh4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGq%2FgRhayuTfQ3CQSrcA3PHegc9DnHbuS4l5ZQ7F1%2BT5TBMek%2BvCjYBpwo5ZqqRRZNbhtJUvDjpxMoVLm5QjhqMddFSIrq4jq%2BE6mTrZjF0vxul0nev5EPdtp71R0QfgDOKuAKQcpmuDTX0oUb3Bu1336Qnves1i2H9V2%2Bv4AyGNPiYVRslA4aUB73J1wmUaAuO1tnIxQb48wJFsEK6%2Fm%2BA0b2rEYAiM00AQxaIg7Ih6bVtuzrfabchQl6u5TjMRFLCMp3tPlmZtDJlLLbExzKw8P8RpyBQ6hsN%2BVFsR%2BDVaIsmb10UuDNJWqW6CHj0eo5UJen8BoNBK5cHbTP2%2BrPnIYpsfckYM16f7rhXzC98LX7Z2D58AD8JUZwG%2Bmv2Ec7QfpdxADA6tQErDmtP10odopS0oqJn3h5ney%2FWI65viixJUeVDw%2FQOZesS%2BHXT6LJ7MtjtKm2Kue67aLsprYap9quVr%2FD7%2FO2EJArV66YaBphBv%2BrUce4111yXJLCO%2BROSewAuRfigs%2Br0PR4qjfkVl5FDCE%2BStb6E0VnxHznVY1Hi6NIYcIFF%2BMzG8juKWhjklWrAXOmwghY3mz88rAA9AU1GkK0gGvjusEHdeOIFJCss%2BFsqVX63L%2BOVnCJxhDsN%2BtylRZFJMrVdMJDtnM4GOqUB3SKkgn7pjA%2Fv4sGsvbabJivK0hUmi1rTSvWo7GpwXk2C7mgYjLrD67TmGrnmMHG5ggOGGX5InXeIDm6Ju%2FMHtN%2BTUmyRMXefYDVRs%2FmaRqvLZBbUdrueKrWs%2FT7lV2tWyJVpLa0ZEzG85%2BFKfZauOz8%2FIeGIVunWOuw7kqfyu9uQPqIC2ChCzR31UwQThdllWGee8to3nWpj0WCu77KPvWF6XSW1&X-Amz-Signature=adf2f1f5e43eff44313e7f75082f911367212b0e363cd20916c5bad7f034c6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIMXGP4%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCpCEhQAIC0fJ3WNj%2F0dTHTIXIi8T4A%2Buq9bOyvjroHqAIgWRecHsiFCzFwADYIxcNv%2FIj5PsOYqbNCHmAU6q6slh4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGq%2FgRhayuTfQ3CQSrcA3PHegc9DnHbuS4l5ZQ7F1%2BT5TBMek%2BvCjYBpwo5ZqqRRZNbhtJUvDjpxMoVLm5QjhqMddFSIrq4jq%2BE6mTrZjF0vxul0nev5EPdtp71R0QfgDOKuAKQcpmuDTX0oUb3Bu1336Qnves1i2H9V2%2Bv4AyGNPiYVRslA4aUB73J1wmUaAuO1tnIxQb48wJFsEK6%2Fm%2BA0b2rEYAiM00AQxaIg7Ih6bVtuzrfabchQl6u5TjMRFLCMp3tPlmZtDJlLLbExzKw8P8RpyBQ6hsN%2BVFsR%2BDVaIsmb10UuDNJWqW6CHj0eo5UJen8BoNBK5cHbTP2%2BrPnIYpsfckYM16f7rhXzC98LX7Z2D58AD8JUZwG%2Bmv2Ec7QfpdxADA6tQErDmtP10odopS0oqJn3h5ney%2FWI65viixJUeVDw%2FQOZesS%2BHXT6LJ7MtjtKm2Kue67aLsprYap9quVr%2FD7%2FO2EJArV66YaBphBv%2BrUce4111yXJLCO%2BROSewAuRfigs%2Br0PR4qjfkVl5FDCE%2BStb6E0VnxHznVY1Hi6NIYcIFF%2BMzG8juKWhjklWrAXOmwghY3mz88rAA9AU1GkK0gGvjusEHdeOIFJCss%2BFsqVX63L%2BOVnCJxhDsN%2BtylRZFJMrVdMJDtnM4GOqUB3SKkgn7pjA%2Fv4sGsvbabJivK0hUmi1rTSvWo7GpwXk2C7mgYjLrD67TmGrnmMHG5ggOGGX5InXeIDm6Ju%2FMHtN%2BTUmyRMXefYDVRs%2FmaRqvLZBbUdrueKrWs%2FT7lV2tWyJVpLa0ZEzG85%2BFKfZauOz8%2FIeGIVunWOuw7kqfyu9uQPqIC2ChCzR31UwQThdllWGee8to3nWpj0WCu77KPvWF6XSW1&X-Amz-Signature=0ac6ad7efc5b53529731613bb9653f473aa15e2224ddd4669e7953af24bb7825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIMXGP4%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCpCEhQAIC0fJ3WNj%2F0dTHTIXIi8T4A%2Buq9bOyvjroHqAIgWRecHsiFCzFwADYIxcNv%2FIj5PsOYqbNCHmAU6q6slh4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGq%2FgRhayuTfQ3CQSrcA3PHegc9DnHbuS4l5ZQ7F1%2BT5TBMek%2BvCjYBpwo5ZqqRRZNbhtJUvDjpxMoVLm5QjhqMddFSIrq4jq%2BE6mTrZjF0vxul0nev5EPdtp71R0QfgDOKuAKQcpmuDTX0oUb3Bu1336Qnves1i2H9V2%2Bv4AyGNPiYVRslA4aUB73J1wmUaAuO1tnIxQb48wJFsEK6%2Fm%2BA0b2rEYAiM00AQxaIg7Ih6bVtuzrfabchQl6u5TjMRFLCMp3tPlmZtDJlLLbExzKw8P8RpyBQ6hsN%2BVFsR%2BDVaIsmb10UuDNJWqW6CHj0eo5UJen8BoNBK5cHbTP2%2BrPnIYpsfckYM16f7rhXzC98LX7Z2D58AD8JUZwG%2Bmv2Ec7QfpdxADA6tQErDmtP10odopS0oqJn3h5ney%2FWI65viixJUeVDw%2FQOZesS%2BHXT6LJ7MtjtKm2Kue67aLsprYap9quVr%2FD7%2FO2EJArV66YaBphBv%2BrUce4111yXJLCO%2BROSewAuRfigs%2Br0PR4qjfkVl5FDCE%2BStb6E0VnxHznVY1Hi6NIYcIFF%2BMzG8juKWhjklWrAXOmwghY3mz88rAA9AU1GkK0gGvjusEHdeOIFJCss%2BFsqVX63L%2BOVnCJxhDsN%2BtylRZFJMrVdMJDtnM4GOqUB3SKkgn7pjA%2Fv4sGsvbabJivK0hUmi1rTSvWo7GpwXk2C7mgYjLrD67TmGrnmMHG5ggOGGX5InXeIDm6Ju%2FMHtN%2BTUmyRMXefYDVRs%2FmaRqvLZBbUdrueKrWs%2FT7lV2tWyJVpLa0ZEzG85%2BFKfZauOz8%2FIeGIVunWOuw7kqfyu9uQPqIC2ChCzR31UwQThdllWGee8to3nWpj0WCu77KPvWF6XSW1&X-Amz-Signature=4112062a1464ed32f20eeb2ea5d25855c7758bb99cdd19e7b8c5b92c724368c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIMXGP4%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCpCEhQAIC0fJ3WNj%2F0dTHTIXIi8T4A%2Buq9bOyvjroHqAIgWRecHsiFCzFwADYIxcNv%2FIj5PsOYqbNCHmAU6q6slh4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGq%2FgRhayuTfQ3CQSrcA3PHegc9DnHbuS4l5ZQ7F1%2BT5TBMek%2BvCjYBpwo5ZqqRRZNbhtJUvDjpxMoVLm5QjhqMddFSIrq4jq%2BE6mTrZjF0vxul0nev5EPdtp71R0QfgDOKuAKQcpmuDTX0oUb3Bu1336Qnves1i2H9V2%2Bv4AyGNPiYVRslA4aUB73J1wmUaAuO1tnIxQb48wJFsEK6%2Fm%2BA0b2rEYAiM00AQxaIg7Ih6bVtuzrfabchQl6u5TjMRFLCMp3tPlmZtDJlLLbExzKw8P8RpyBQ6hsN%2BVFsR%2BDVaIsmb10UuDNJWqW6CHj0eo5UJen8BoNBK5cHbTP2%2BrPnIYpsfckYM16f7rhXzC98LX7Z2D58AD8JUZwG%2Bmv2Ec7QfpdxADA6tQErDmtP10odopS0oqJn3h5ney%2FWI65viixJUeVDw%2FQOZesS%2BHXT6LJ7MtjtKm2Kue67aLsprYap9quVr%2FD7%2FO2EJArV66YaBphBv%2BrUce4111yXJLCO%2BROSewAuRfigs%2Br0PR4qjfkVl5FDCE%2BStb6E0VnxHznVY1Hi6NIYcIFF%2BMzG8juKWhjklWrAXOmwghY3mz88rAA9AU1GkK0gGvjusEHdeOIFJCss%2BFsqVX63L%2BOVnCJxhDsN%2BtylRZFJMrVdMJDtnM4GOqUB3SKkgn7pjA%2Fv4sGsvbabJivK0hUmi1rTSvWo7GpwXk2C7mgYjLrD67TmGrnmMHG5ggOGGX5InXeIDm6Ju%2FMHtN%2BTUmyRMXefYDVRs%2FmaRqvLZBbUdrueKrWs%2FT7lV2tWyJVpLa0ZEzG85%2BFKfZauOz8%2FIeGIVunWOuw7kqfyu9uQPqIC2ChCzR31UwQThdllWGee8to3nWpj0WCu77KPvWF6XSW1&X-Amz-Signature=c2a29e306123354920f0eb123fc2a12d7c8ae947da8006dd6b8a3c610cc78c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIMXGP4%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCpCEhQAIC0fJ3WNj%2F0dTHTIXIi8T4A%2Buq9bOyvjroHqAIgWRecHsiFCzFwADYIxcNv%2FIj5PsOYqbNCHmAU6q6slh4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGq%2FgRhayuTfQ3CQSrcA3PHegc9DnHbuS4l5ZQ7F1%2BT5TBMek%2BvCjYBpwo5ZqqRRZNbhtJUvDjpxMoVLm5QjhqMddFSIrq4jq%2BE6mTrZjF0vxul0nev5EPdtp71R0QfgDOKuAKQcpmuDTX0oUb3Bu1336Qnves1i2H9V2%2Bv4AyGNPiYVRslA4aUB73J1wmUaAuO1tnIxQb48wJFsEK6%2Fm%2BA0b2rEYAiM00AQxaIg7Ih6bVtuzrfabchQl6u5TjMRFLCMp3tPlmZtDJlLLbExzKw8P8RpyBQ6hsN%2BVFsR%2BDVaIsmb10UuDNJWqW6CHj0eo5UJen8BoNBK5cHbTP2%2BrPnIYpsfckYM16f7rhXzC98LX7Z2D58AD8JUZwG%2Bmv2Ec7QfpdxADA6tQErDmtP10odopS0oqJn3h5ney%2FWI65viixJUeVDw%2FQOZesS%2BHXT6LJ7MtjtKm2Kue67aLsprYap9quVr%2FD7%2FO2EJArV66YaBphBv%2BrUce4111yXJLCO%2BROSewAuRfigs%2Br0PR4qjfkVl5FDCE%2BStb6E0VnxHznVY1Hi6NIYcIFF%2BMzG8juKWhjklWrAXOmwghY3mz88rAA9AU1GkK0gGvjusEHdeOIFJCss%2BFsqVX63L%2BOVnCJxhDsN%2BtylRZFJMrVdMJDtnM4GOqUB3SKkgn7pjA%2Fv4sGsvbabJivK0hUmi1rTSvWo7GpwXk2C7mgYjLrD67TmGrnmMHG5ggOGGX5InXeIDm6Ju%2FMHtN%2BTUmyRMXefYDVRs%2FmaRqvLZBbUdrueKrWs%2FT7lV2tWyJVpLa0ZEzG85%2BFKfZauOz8%2FIeGIVunWOuw7kqfyu9uQPqIC2ChCzR31UwQThdllWGee8to3nWpj0WCu77KPvWF6XSW1&X-Amz-Signature=544d99dee13d8c4328c3d2b4b68fca98fa5bd158436eeef1017eb469a251d333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIMXGP4%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCpCEhQAIC0fJ3WNj%2F0dTHTIXIi8T4A%2Buq9bOyvjroHqAIgWRecHsiFCzFwADYIxcNv%2FIj5PsOYqbNCHmAU6q6slh4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGq%2FgRhayuTfQ3CQSrcA3PHegc9DnHbuS4l5ZQ7F1%2BT5TBMek%2BvCjYBpwo5ZqqRRZNbhtJUvDjpxMoVLm5QjhqMddFSIrq4jq%2BE6mTrZjF0vxul0nev5EPdtp71R0QfgDOKuAKQcpmuDTX0oUb3Bu1336Qnves1i2H9V2%2Bv4AyGNPiYVRslA4aUB73J1wmUaAuO1tnIxQb48wJFsEK6%2Fm%2BA0b2rEYAiM00AQxaIg7Ih6bVtuzrfabchQl6u5TjMRFLCMp3tPlmZtDJlLLbExzKw8P8RpyBQ6hsN%2BVFsR%2BDVaIsmb10UuDNJWqW6CHj0eo5UJen8BoNBK5cHbTP2%2BrPnIYpsfckYM16f7rhXzC98LX7Z2D58AD8JUZwG%2Bmv2Ec7QfpdxADA6tQErDmtP10odopS0oqJn3h5ney%2FWI65viixJUeVDw%2FQOZesS%2BHXT6LJ7MtjtKm2Kue67aLsprYap9quVr%2FD7%2FO2EJArV66YaBphBv%2BrUce4111yXJLCO%2BROSewAuRfigs%2Br0PR4qjfkVl5FDCE%2BStb6E0VnxHznVY1Hi6NIYcIFF%2BMzG8juKWhjklWrAXOmwghY3mz88rAA9AU1GkK0gGvjusEHdeOIFJCss%2BFsqVX63L%2BOVnCJxhDsN%2BtylRZFJMrVdMJDtnM4GOqUB3SKkgn7pjA%2Fv4sGsvbabJivK0hUmi1rTSvWo7GpwXk2C7mgYjLrD67TmGrnmMHG5ggOGGX5InXeIDm6Ju%2FMHtN%2BTUmyRMXefYDVRs%2FmaRqvLZBbUdrueKrWs%2FT7lV2tWyJVpLa0ZEzG85%2BFKfZauOz8%2FIeGIVunWOuw7kqfyu9uQPqIC2ChCzR31UwQThdllWGee8to3nWpj0WCu77KPvWF6XSW1&X-Amz-Signature=c28de3439f8df2c2d741f181a67817fcaa8200fca4a1e29029a93efb72017092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SIMXGP4%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCpCEhQAIC0fJ3WNj%2F0dTHTIXIi8T4A%2Buq9bOyvjroHqAIgWRecHsiFCzFwADYIxcNv%2FIj5PsOYqbNCHmAU6q6slh4qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGq%2FgRhayuTfQ3CQSrcA3PHegc9DnHbuS4l5ZQ7F1%2BT5TBMek%2BvCjYBpwo5ZqqRRZNbhtJUvDjpxMoVLm5QjhqMddFSIrq4jq%2BE6mTrZjF0vxul0nev5EPdtp71R0QfgDOKuAKQcpmuDTX0oUb3Bu1336Qnves1i2H9V2%2Bv4AyGNPiYVRslA4aUB73J1wmUaAuO1tnIxQb48wJFsEK6%2Fm%2BA0b2rEYAiM00AQxaIg7Ih6bVtuzrfabchQl6u5TjMRFLCMp3tPlmZtDJlLLbExzKw8P8RpyBQ6hsN%2BVFsR%2BDVaIsmb10UuDNJWqW6CHj0eo5UJen8BoNBK5cHbTP2%2BrPnIYpsfckYM16f7rhXzC98LX7Z2D58AD8JUZwG%2Bmv2Ec7QfpdxADA6tQErDmtP10odopS0oqJn3h5ney%2FWI65viixJUeVDw%2FQOZesS%2BHXT6LJ7MtjtKm2Kue67aLsprYap9quVr%2FD7%2FO2EJArV66YaBphBv%2BrUce4111yXJLCO%2BROSewAuRfigs%2Br0PR4qjfkVl5FDCE%2BStb6E0VnxHznVY1Hi6NIYcIFF%2BMzG8juKWhjklWrAXOmwghY3mz88rAA9AU1GkK0gGvjusEHdeOIFJCss%2BFsqVX63L%2BOVnCJxhDsN%2BtylRZFJMrVdMJDtnM4GOqUB3SKkgn7pjA%2Fv4sGsvbabJivK0hUmi1rTSvWo7GpwXk2C7mgYjLrD67TmGrnmMHG5ggOGGX5InXeIDm6Ju%2FMHtN%2BTUmyRMXefYDVRs%2FmaRqvLZBbUdrueKrWs%2FT7lV2tWyJVpLa0ZEzG85%2BFKfZauOz8%2FIeGIVunWOuw7kqfyu9uQPqIC2ChCzR31UwQThdllWGee8to3nWpj0WCu77KPvWF6XSW1&X-Amz-Signature=075c9d6676423925b8e0edc374ccb5f5badd619dc14b7a4a9c78a911900e995f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
