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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=8ab73b0dca4ff7d562fc9558d7cb855eb6c65c2dd40ee0c038625623dca043bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=9dcdef816811558a16856be4a3831433c918e46720df1c4dd7c796be5a1d200a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=db3855888168b32a104bf927a60c4510a35f34823a8588b5fb754fe96f49477f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=1b8a022fd55299cf3c42d8fae0ecf7adb752db0096012d0c7fb54589a303e83b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=c74fe484c208e7a8f51a977dbef5cbbb1703a598cf3631e48ef732d3c9da7134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=09adfe9b33abe12e4370108628ad85ba6a7c192b33e03794f9323ae4d286ba74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=a51afff5eafcccb263c3f43d324f21f3b75b31cdf3aed8c94e6a1817915366a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=67befa05138ea9beec0c1daac4d7c6b89a2a23f62543f2e4fbe467d27a2ad434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
