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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAWVWD4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD8%2Fgwn3916SXb6xsu3M44RhgzSN%2Bqb3UsjwfXIk5RWywIgJnGRATFNMejyAiKMVACw7E7qg0Zn9rDHufrO3X6QuHMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD%2BKYKeStQovpqbyBircA6MMY%2BLhLcekcg1jOjIn0s6v7ghzDkiihJ0JWEgntVAj2t4gZ8dDI1ffnpGfSDgEm%2F%2BzCDu8SHYAirC2ahUvT%2BTo1mHVapJh7AYThE0QGqsa6gPyF6G%2BvZ3biKhbMbCbDC%2FACjcAi%2FvNrg96Z8evyZNEmn1oRR7eu%2BbF4438IqYb5SF3YgRbLoXyaxNQETZj1XpZUALEh%2B%2BF5XAm4JMkLVF5Be58A%2FA1FrsJKCG%2BjTZxsaF0OrkuGHukvJrC0hvdNt2ZzxfZ4nc1ovJecCWr9GDL%2FiKouh4%2Bz8mtJuGiYgeAAotRO%2Bsi%2BPt%2FI7h3%2BjgZ65MC31k8WSOdAsVLX1I4Qc4I0C25RVZgy4CjOr4jARiijb4svR7ELH1CBRjBoqxIv68nW8cK4u3c%2FYZmtLBZzMQsIAEZLbQ28Utwg95bTGC78EE%2Fy2udUUF4iX2hZdYJBQoIgcxlmfagsfeZCWgHqFzG90SoCj8ufF2bKZQsggr0efypZiCM8dbgHFPPeU%2BCxbLab3IH36hnCCHRXBIn0Xtl4N1cQkfwnE%2F70MPVJPbRWkcyqE8e5eKCLg3J2TK7AqEWfkvD070M%2BJW4o6c7p6cUlWp3WrKqZDpKki3zCfabeGTC9N5ONBK3wxdXMI6J%2FL0GOqUBhBKd49Lgaj9P%2B0upNmG9NznVMEJU0HsjajmbGMrSP4bZ5Byz%2FyjDl2fB2HOYZ07hn2Wkkz23fP9U0ORdpN2WnvLXhYKbnE%2F3jAAUk3d3MphnTZpFvCtNny4mJoZS50Wy4x%2BYb6RhTxWfOKqp3XZtWmUzYimqDZqY4LiHGEcApqN%2FhG4Iy7zJuslUMlGHeQ81F23CXODVwH%2BILUVPu0Dy0f4zjWlN&X-Amz-Signature=b3218355d65ae72582737a1b051c173c11682a1a4f8ff3f1d3a561d6643ced8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAWVWD4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD8%2Fgwn3916SXb6xsu3M44RhgzSN%2Bqb3UsjwfXIk5RWywIgJnGRATFNMejyAiKMVACw7E7qg0Zn9rDHufrO3X6QuHMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD%2BKYKeStQovpqbyBircA6MMY%2BLhLcekcg1jOjIn0s6v7ghzDkiihJ0JWEgntVAj2t4gZ8dDI1ffnpGfSDgEm%2F%2BzCDu8SHYAirC2ahUvT%2BTo1mHVapJh7AYThE0QGqsa6gPyF6G%2BvZ3biKhbMbCbDC%2FACjcAi%2FvNrg96Z8evyZNEmn1oRR7eu%2BbF4438IqYb5SF3YgRbLoXyaxNQETZj1XpZUALEh%2B%2BF5XAm4JMkLVF5Be58A%2FA1FrsJKCG%2BjTZxsaF0OrkuGHukvJrC0hvdNt2ZzxfZ4nc1ovJecCWr9GDL%2FiKouh4%2Bz8mtJuGiYgeAAotRO%2Bsi%2BPt%2FI7h3%2BjgZ65MC31k8WSOdAsVLX1I4Qc4I0C25RVZgy4CjOr4jARiijb4svR7ELH1CBRjBoqxIv68nW8cK4u3c%2FYZmtLBZzMQsIAEZLbQ28Utwg95bTGC78EE%2Fy2udUUF4iX2hZdYJBQoIgcxlmfagsfeZCWgHqFzG90SoCj8ufF2bKZQsggr0efypZiCM8dbgHFPPeU%2BCxbLab3IH36hnCCHRXBIn0Xtl4N1cQkfwnE%2F70MPVJPbRWkcyqE8e5eKCLg3J2TK7AqEWfkvD070M%2BJW4o6c7p6cUlWp3WrKqZDpKki3zCfabeGTC9N5ONBK3wxdXMI6J%2FL0GOqUBhBKd49Lgaj9P%2B0upNmG9NznVMEJU0HsjajmbGMrSP4bZ5Byz%2FyjDl2fB2HOYZ07hn2Wkkz23fP9U0ORdpN2WnvLXhYKbnE%2F3jAAUk3d3MphnTZpFvCtNny4mJoZS50Wy4x%2BYb6RhTxWfOKqp3XZtWmUzYimqDZqY4LiHGEcApqN%2FhG4Iy7zJuslUMlGHeQ81F23CXODVwH%2BILUVPu0Dy0f4zjWlN&X-Amz-Signature=35218b86438b9453086a7267c1760fb9a850e5f3955919d4bd5693db8d101b10&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAWVWD4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD8%2Fgwn3916SXb6xsu3M44RhgzSN%2Bqb3UsjwfXIk5RWywIgJnGRATFNMejyAiKMVACw7E7qg0Zn9rDHufrO3X6QuHMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD%2BKYKeStQovpqbyBircA6MMY%2BLhLcekcg1jOjIn0s6v7ghzDkiihJ0JWEgntVAj2t4gZ8dDI1ffnpGfSDgEm%2F%2BzCDu8SHYAirC2ahUvT%2BTo1mHVapJh7AYThE0QGqsa6gPyF6G%2BvZ3biKhbMbCbDC%2FACjcAi%2FvNrg96Z8evyZNEmn1oRR7eu%2BbF4438IqYb5SF3YgRbLoXyaxNQETZj1XpZUALEh%2B%2BF5XAm4JMkLVF5Be58A%2FA1FrsJKCG%2BjTZxsaF0OrkuGHukvJrC0hvdNt2ZzxfZ4nc1ovJecCWr9GDL%2FiKouh4%2Bz8mtJuGiYgeAAotRO%2Bsi%2BPt%2FI7h3%2BjgZ65MC31k8WSOdAsVLX1I4Qc4I0C25RVZgy4CjOr4jARiijb4svR7ELH1CBRjBoqxIv68nW8cK4u3c%2FYZmtLBZzMQsIAEZLbQ28Utwg95bTGC78EE%2Fy2udUUF4iX2hZdYJBQoIgcxlmfagsfeZCWgHqFzG90SoCj8ufF2bKZQsggr0efypZiCM8dbgHFPPeU%2BCxbLab3IH36hnCCHRXBIn0Xtl4N1cQkfwnE%2F70MPVJPbRWkcyqE8e5eKCLg3J2TK7AqEWfkvD070M%2BJW4o6c7p6cUlWp3WrKqZDpKki3zCfabeGTC9N5ONBK3wxdXMI6J%2FL0GOqUBhBKd49Lgaj9P%2B0upNmG9NznVMEJU0HsjajmbGMrSP4bZ5Byz%2FyjDl2fB2HOYZ07hn2Wkkz23fP9U0ORdpN2WnvLXhYKbnE%2F3jAAUk3d3MphnTZpFvCtNny4mJoZS50Wy4x%2BYb6RhTxWfOKqp3XZtWmUzYimqDZqY4LiHGEcApqN%2FhG4Iy7zJuslUMlGHeQ81F23CXODVwH%2BILUVPu0Dy0f4zjWlN&X-Amz-Signature=205d33fd96a8caa6c94bfb90551194c7f423153e6da2e7aeaa45e345c7f6b18d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAWVWD4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD8%2Fgwn3916SXb6xsu3M44RhgzSN%2Bqb3UsjwfXIk5RWywIgJnGRATFNMejyAiKMVACw7E7qg0Zn9rDHufrO3X6QuHMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD%2BKYKeStQovpqbyBircA6MMY%2BLhLcekcg1jOjIn0s6v7ghzDkiihJ0JWEgntVAj2t4gZ8dDI1ffnpGfSDgEm%2F%2BzCDu8SHYAirC2ahUvT%2BTo1mHVapJh7AYThE0QGqsa6gPyF6G%2BvZ3biKhbMbCbDC%2FACjcAi%2FvNrg96Z8evyZNEmn1oRR7eu%2BbF4438IqYb5SF3YgRbLoXyaxNQETZj1XpZUALEh%2B%2BF5XAm4JMkLVF5Be58A%2FA1FrsJKCG%2BjTZxsaF0OrkuGHukvJrC0hvdNt2ZzxfZ4nc1ovJecCWr9GDL%2FiKouh4%2Bz8mtJuGiYgeAAotRO%2Bsi%2BPt%2FI7h3%2BjgZ65MC31k8WSOdAsVLX1I4Qc4I0C25RVZgy4CjOr4jARiijb4svR7ELH1CBRjBoqxIv68nW8cK4u3c%2FYZmtLBZzMQsIAEZLbQ28Utwg95bTGC78EE%2Fy2udUUF4iX2hZdYJBQoIgcxlmfagsfeZCWgHqFzG90SoCj8ufF2bKZQsggr0efypZiCM8dbgHFPPeU%2BCxbLab3IH36hnCCHRXBIn0Xtl4N1cQkfwnE%2F70MPVJPbRWkcyqE8e5eKCLg3J2TK7AqEWfkvD070M%2BJW4o6c7p6cUlWp3WrKqZDpKki3zCfabeGTC9N5ONBK3wxdXMI6J%2FL0GOqUBhBKd49Lgaj9P%2B0upNmG9NznVMEJU0HsjajmbGMrSP4bZ5Byz%2FyjDl2fB2HOYZ07hn2Wkkz23fP9U0ORdpN2WnvLXhYKbnE%2F3jAAUk3d3MphnTZpFvCtNny4mJoZS50Wy4x%2BYb6RhTxWfOKqp3XZtWmUzYimqDZqY4LiHGEcApqN%2FhG4Iy7zJuslUMlGHeQ81F23CXODVwH%2BILUVPu0Dy0f4zjWlN&X-Amz-Signature=7093f94d186936bba9fe4707e0067f0ba7732b1e42a9d8ed77fb3afd456b579e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAWVWD4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD8%2Fgwn3916SXb6xsu3M44RhgzSN%2Bqb3UsjwfXIk5RWywIgJnGRATFNMejyAiKMVACw7E7qg0Zn9rDHufrO3X6QuHMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD%2BKYKeStQovpqbyBircA6MMY%2BLhLcekcg1jOjIn0s6v7ghzDkiihJ0JWEgntVAj2t4gZ8dDI1ffnpGfSDgEm%2F%2BzCDu8SHYAirC2ahUvT%2BTo1mHVapJh7AYThE0QGqsa6gPyF6G%2BvZ3biKhbMbCbDC%2FACjcAi%2FvNrg96Z8evyZNEmn1oRR7eu%2BbF4438IqYb5SF3YgRbLoXyaxNQETZj1XpZUALEh%2B%2BF5XAm4JMkLVF5Be58A%2FA1FrsJKCG%2BjTZxsaF0OrkuGHukvJrC0hvdNt2ZzxfZ4nc1ovJecCWr9GDL%2FiKouh4%2Bz8mtJuGiYgeAAotRO%2Bsi%2BPt%2FI7h3%2BjgZ65MC31k8WSOdAsVLX1I4Qc4I0C25RVZgy4CjOr4jARiijb4svR7ELH1CBRjBoqxIv68nW8cK4u3c%2FYZmtLBZzMQsIAEZLbQ28Utwg95bTGC78EE%2Fy2udUUF4iX2hZdYJBQoIgcxlmfagsfeZCWgHqFzG90SoCj8ufF2bKZQsggr0efypZiCM8dbgHFPPeU%2BCxbLab3IH36hnCCHRXBIn0Xtl4N1cQkfwnE%2F70MPVJPbRWkcyqE8e5eKCLg3J2TK7AqEWfkvD070M%2BJW4o6c7p6cUlWp3WrKqZDpKki3zCfabeGTC9N5ONBK3wxdXMI6J%2FL0GOqUBhBKd49Lgaj9P%2B0upNmG9NznVMEJU0HsjajmbGMrSP4bZ5Byz%2FyjDl2fB2HOYZ07hn2Wkkz23fP9U0ORdpN2WnvLXhYKbnE%2F3jAAUk3d3MphnTZpFvCtNny4mJoZS50Wy4x%2BYb6RhTxWfOKqp3XZtWmUzYimqDZqY4LiHGEcApqN%2FhG4Iy7zJuslUMlGHeQ81F23CXODVwH%2BILUVPu0Dy0f4zjWlN&X-Amz-Signature=61ce11773f9712d9f0e1f33669c42ce830c1239bcc08486d4c1741f2250a46e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAWVWD4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD8%2Fgwn3916SXb6xsu3M44RhgzSN%2Bqb3UsjwfXIk5RWywIgJnGRATFNMejyAiKMVACw7E7qg0Zn9rDHufrO3X6QuHMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD%2BKYKeStQovpqbyBircA6MMY%2BLhLcekcg1jOjIn0s6v7ghzDkiihJ0JWEgntVAj2t4gZ8dDI1ffnpGfSDgEm%2F%2BzCDu8SHYAirC2ahUvT%2BTo1mHVapJh7AYThE0QGqsa6gPyF6G%2BvZ3biKhbMbCbDC%2FACjcAi%2FvNrg96Z8evyZNEmn1oRR7eu%2BbF4438IqYb5SF3YgRbLoXyaxNQETZj1XpZUALEh%2B%2BF5XAm4JMkLVF5Be58A%2FA1FrsJKCG%2BjTZxsaF0OrkuGHukvJrC0hvdNt2ZzxfZ4nc1ovJecCWr9GDL%2FiKouh4%2Bz8mtJuGiYgeAAotRO%2Bsi%2BPt%2FI7h3%2BjgZ65MC31k8WSOdAsVLX1I4Qc4I0C25RVZgy4CjOr4jARiijb4svR7ELH1CBRjBoqxIv68nW8cK4u3c%2FYZmtLBZzMQsIAEZLbQ28Utwg95bTGC78EE%2Fy2udUUF4iX2hZdYJBQoIgcxlmfagsfeZCWgHqFzG90SoCj8ufF2bKZQsggr0efypZiCM8dbgHFPPeU%2BCxbLab3IH36hnCCHRXBIn0Xtl4N1cQkfwnE%2F70MPVJPbRWkcyqE8e5eKCLg3J2TK7AqEWfkvD070M%2BJW4o6c7p6cUlWp3WrKqZDpKki3zCfabeGTC9N5ONBK3wxdXMI6J%2FL0GOqUBhBKd49Lgaj9P%2B0upNmG9NznVMEJU0HsjajmbGMrSP4bZ5Byz%2FyjDl2fB2HOYZ07hn2Wkkz23fP9U0ORdpN2WnvLXhYKbnE%2F3jAAUk3d3MphnTZpFvCtNny4mJoZS50Wy4x%2BYb6RhTxWfOKqp3XZtWmUzYimqDZqY4LiHGEcApqN%2FhG4Iy7zJuslUMlGHeQ81F23CXODVwH%2BILUVPu0Dy0f4zjWlN&X-Amz-Signature=f1d48ec62ee3a7190a32646f2b834fa6413df663e42553e3a75f3298340afb73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAWVWD4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD8%2Fgwn3916SXb6xsu3M44RhgzSN%2Bqb3UsjwfXIk5RWywIgJnGRATFNMejyAiKMVACw7E7qg0Zn9rDHufrO3X6QuHMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD%2BKYKeStQovpqbyBircA6MMY%2BLhLcekcg1jOjIn0s6v7ghzDkiihJ0JWEgntVAj2t4gZ8dDI1ffnpGfSDgEm%2F%2BzCDu8SHYAirC2ahUvT%2BTo1mHVapJh7AYThE0QGqsa6gPyF6G%2BvZ3biKhbMbCbDC%2FACjcAi%2FvNrg96Z8evyZNEmn1oRR7eu%2BbF4438IqYb5SF3YgRbLoXyaxNQETZj1XpZUALEh%2B%2BF5XAm4JMkLVF5Be58A%2FA1FrsJKCG%2BjTZxsaF0OrkuGHukvJrC0hvdNt2ZzxfZ4nc1ovJecCWr9GDL%2FiKouh4%2Bz8mtJuGiYgeAAotRO%2Bsi%2BPt%2FI7h3%2BjgZ65MC31k8WSOdAsVLX1I4Qc4I0C25RVZgy4CjOr4jARiijb4svR7ELH1CBRjBoqxIv68nW8cK4u3c%2FYZmtLBZzMQsIAEZLbQ28Utwg95bTGC78EE%2Fy2udUUF4iX2hZdYJBQoIgcxlmfagsfeZCWgHqFzG90SoCj8ufF2bKZQsggr0efypZiCM8dbgHFPPeU%2BCxbLab3IH36hnCCHRXBIn0Xtl4N1cQkfwnE%2F70MPVJPbRWkcyqE8e5eKCLg3J2TK7AqEWfkvD070M%2BJW4o6c7p6cUlWp3WrKqZDpKki3zCfabeGTC9N5ONBK3wxdXMI6J%2FL0GOqUBhBKd49Lgaj9P%2B0upNmG9NznVMEJU0HsjajmbGMrSP4bZ5Byz%2FyjDl2fB2HOYZ07hn2Wkkz23fP9U0ORdpN2WnvLXhYKbnE%2F3jAAUk3d3MphnTZpFvCtNny4mJoZS50Wy4x%2BYb6RhTxWfOKqp3XZtWmUzYimqDZqY4LiHGEcApqN%2FhG4Iy7zJuslUMlGHeQ81F23CXODVwH%2BILUVPu0Dy0f4zjWlN&X-Amz-Signature=46c27e319cfc49d70679e9804aa9a943d364ed96f03e8bd893fd405baab4afec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRAWVWD4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD8%2Fgwn3916SXb6xsu3M44RhgzSN%2Bqb3UsjwfXIk5RWywIgJnGRATFNMejyAiKMVACw7E7qg0Zn9rDHufrO3X6QuHMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDD%2BKYKeStQovpqbyBircA6MMY%2BLhLcekcg1jOjIn0s6v7ghzDkiihJ0JWEgntVAj2t4gZ8dDI1ffnpGfSDgEm%2F%2BzCDu8SHYAirC2ahUvT%2BTo1mHVapJh7AYThE0QGqsa6gPyF6G%2BvZ3biKhbMbCbDC%2FACjcAi%2FvNrg96Z8evyZNEmn1oRR7eu%2BbF4438IqYb5SF3YgRbLoXyaxNQETZj1XpZUALEh%2B%2BF5XAm4JMkLVF5Be58A%2FA1FrsJKCG%2BjTZxsaF0OrkuGHukvJrC0hvdNt2ZzxfZ4nc1ovJecCWr9GDL%2FiKouh4%2Bz8mtJuGiYgeAAotRO%2Bsi%2BPt%2FI7h3%2BjgZ65MC31k8WSOdAsVLX1I4Qc4I0C25RVZgy4CjOr4jARiijb4svR7ELH1CBRjBoqxIv68nW8cK4u3c%2FYZmtLBZzMQsIAEZLbQ28Utwg95bTGC78EE%2Fy2udUUF4iX2hZdYJBQoIgcxlmfagsfeZCWgHqFzG90SoCj8ufF2bKZQsggr0efypZiCM8dbgHFPPeU%2BCxbLab3IH36hnCCHRXBIn0Xtl4N1cQkfwnE%2F70MPVJPbRWkcyqE8e5eKCLg3J2TK7AqEWfkvD070M%2BJW4o6c7p6cUlWp3WrKqZDpKki3zCfabeGTC9N5ONBK3wxdXMI6J%2FL0GOqUBhBKd49Lgaj9P%2B0upNmG9NznVMEJU0HsjajmbGMrSP4bZ5Byz%2FyjDl2fB2HOYZ07hn2Wkkz23fP9U0ORdpN2WnvLXhYKbnE%2F3jAAUk3d3MphnTZpFvCtNny4mJoZS50Wy4x%2BYb6RhTxWfOKqp3XZtWmUzYimqDZqY4LiHGEcApqN%2FhG4Iy7zJuslUMlGHeQ81F23CXODVwH%2BILUVPu0Dy0f4zjWlN&X-Amz-Signature=b7c56a40d4fb57efe4d0da8be9f4f86412e23c15b193aaee36c5bfcbd29fb907&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
