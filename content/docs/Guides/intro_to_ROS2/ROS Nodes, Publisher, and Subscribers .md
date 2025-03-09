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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZNX5CA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGCJznfTdDLiogUnHgzMplm%2FCNwkHZqNprIF9LL6eRANAiEA0KsGf2zMQH5wGkqR57yjweHrNrtxWZ7qGPSS4qK3wNwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGjgYlROjnQCIEPg3ircA2%2BEq3QmaAQ6hZ9nQv6rOirh4INOJx7WI83AfpRJ2gDKPJlDqyz07X4pQ1VAnJ3CWAy4k6x5tmFmO4t%2FdFePMqLliKYlxuPMRcXMYQoHSG4u8amcmgt%2BlNVk9OWAEA27pPgyvHa%2FEoK%2BjfgimWmsaNCY%2BrekpT64eir0NM0nfnmJMJm4%2B%2B5p5msIXQfu9QHD0mxujE6f1Kd%2BSI20LsELespysSAKsQB%2BeGm%2B1KkrC3gvIY8FJzuuHnnUC%2Bpd%2B0PRtwdRaZKRWh5tIx3TJGnln1qpMwoT4KDZdoLK5nOf%2BgWjIOHo6fegCD3qwfePVvLfJdQzxe7VahN0T064ZYxH%2BuuD0fQFDRUn%2Bz2BzZu9HYZhlAI%2F2yzXATLWCpfLuKbGViZ2De2R1Xa5He2YU4%2BIkX%2Fq%2B412cx2ruHGXlyi19t8Mk4p9cNcbtIDAd24zydGPqOFHkwykd82xHdghdebxJ2DPPecVLJUbK51R083%2Bs3IAV2dVJJseWe445MIbIVp30kNtVOAj%2BxPoFlcJKBO3HO%2FBpFq71FTEayr0TC%2FXpmZuJjWEm6KFJpSKm2ePyinW%2BlS8zQ9iu5dcsho6YKgCN9nbGGS3yXVdAuFA8e184ZDEj4h0SGCkK7U8vxYUMOKOtr4GOqUBI8Cuy%2Ft5lU7xWr5Ve2Eeuxwr8ElrsQZjXN4NvO14DRCEZR%2BN5acPoH8VEqC%2BH99pNPo6BxNO4i%2BWMRpXGJL7yZAxUK8qu8tzYUtrlydMTtz3OfGa86Af65yLwz8EU%2BNx7xi6BKJ8OP743Xak%2BCGFx%2FYRpLQV%2BAbZSo8Cq51iaYcbjBumIxBlEbk7usTCvPw0wr7luEQ6kZS5Z4oVdzBQ38XcjtpO&X-Amz-Signature=9b382941d196c2c08cf04218da9ec273f06dee91aa56c0a4b6657682dee3536f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZNX5CA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGCJznfTdDLiogUnHgzMplm%2FCNwkHZqNprIF9LL6eRANAiEA0KsGf2zMQH5wGkqR57yjweHrNrtxWZ7qGPSS4qK3wNwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGjgYlROjnQCIEPg3ircA2%2BEq3QmaAQ6hZ9nQv6rOirh4INOJx7WI83AfpRJ2gDKPJlDqyz07X4pQ1VAnJ3CWAy4k6x5tmFmO4t%2FdFePMqLliKYlxuPMRcXMYQoHSG4u8amcmgt%2BlNVk9OWAEA27pPgyvHa%2FEoK%2BjfgimWmsaNCY%2BrekpT64eir0NM0nfnmJMJm4%2B%2B5p5msIXQfu9QHD0mxujE6f1Kd%2BSI20LsELespysSAKsQB%2BeGm%2B1KkrC3gvIY8FJzuuHnnUC%2Bpd%2B0PRtwdRaZKRWh5tIx3TJGnln1qpMwoT4KDZdoLK5nOf%2BgWjIOHo6fegCD3qwfePVvLfJdQzxe7VahN0T064ZYxH%2BuuD0fQFDRUn%2Bz2BzZu9HYZhlAI%2F2yzXATLWCpfLuKbGViZ2De2R1Xa5He2YU4%2BIkX%2Fq%2B412cx2ruHGXlyi19t8Mk4p9cNcbtIDAd24zydGPqOFHkwykd82xHdghdebxJ2DPPecVLJUbK51R083%2Bs3IAV2dVJJseWe445MIbIVp30kNtVOAj%2BxPoFlcJKBO3HO%2FBpFq71FTEayr0TC%2FXpmZuJjWEm6KFJpSKm2ePyinW%2BlS8zQ9iu5dcsho6YKgCN9nbGGS3yXVdAuFA8e184ZDEj4h0SGCkK7U8vxYUMOKOtr4GOqUBI8Cuy%2Ft5lU7xWr5Ve2Eeuxwr8ElrsQZjXN4NvO14DRCEZR%2BN5acPoH8VEqC%2BH99pNPo6BxNO4i%2BWMRpXGJL7yZAxUK8qu8tzYUtrlydMTtz3OfGa86Af65yLwz8EU%2BNx7xi6BKJ8OP743Xak%2BCGFx%2FYRpLQV%2BAbZSo8Cq51iaYcbjBumIxBlEbk7usTCvPw0wr7luEQ6kZS5Z4oVdzBQ38XcjtpO&X-Amz-Signature=f906512b171f0d00fca4d09eddcbc0387ba1f95d42475897490666abe3d0216c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZNX5CA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGCJznfTdDLiogUnHgzMplm%2FCNwkHZqNprIF9LL6eRANAiEA0KsGf2zMQH5wGkqR57yjweHrNrtxWZ7qGPSS4qK3wNwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGjgYlROjnQCIEPg3ircA2%2BEq3QmaAQ6hZ9nQv6rOirh4INOJx7WI83AfpRJ2gDKPJlDqyz07X4pQ1VAnJ3CWAy4k6x5tmFmO4t%2FdFePMqLliKYlxuPMRcXMYQoHSG4u8amcmgt%2BlNVk9OWAEA27pPgyvHa%2FEoK%2BjfgimWmsaNCY%2BrekpT64eir0NM0nfnmJMJm4%2B%2B5p5msIXQfu9QHD0mxujE6f1Kd%2BSI20LsELespysSAKsQB%2BeGm%2B1KkrC3gvIY8FJzuuHnnUC%2Bpd%2B0PRtwdRaZKRWh5tIx3TJGnln1qpMwoT4KDZdoLK5nOf%2BgWjIOHo6fegCD3qwfePVvLfJdQzxe7VahN0T064ZYxH%2BuuD0fQFDRUn%2Bz2BzZu9HYZhlAI%2F2yzXATLWCpfLuKbGViZ2De2R1Xa5He2YU4%2BIkX%2Fq%2B412cx2ruHGXlyi19t8Mk4p9cNcbtIDAd24zydGPqOFHkwykd82xHdghdebxJ2DPPecVLJUbK51R083%2Bs3IAV2dVJJseWe445MIbIVp30kNtVOAj%2BxPoFlcJKBO3HO%2FBpFq71FTEayr0TC%2FXpmZuJjWEm6KFJpSKm2ePyinW%2BlS8zQ9iu5dcsho6YKgCN9nbGGS3yXVdAuFA8e184ZDEj4h0SGCkK7U8vxYUMOKOtr4GOqUBI8Cuy%2Ft5lU7xWr5Ve2Eeuxwr8ElrsQZjXN4NvO14DRCEZR%2BN5acPoH8VEqC%2BH99pNPo6BxNO4i%2BWMRpXGJL7yZAxUK8qu8tzYUtrlydMTtz3OfGa86Af65yLwz8EU%2BNx7xi6BKJ8OP743Xak%2BCGFx%2FYRpLQV%2BAbZSo8Cq51iaYcbjBumIxBlEbk7usTCvPw0wr7luEQ6kZS5Z4oVdzBQ38XcjtpO&X-Amz-Signature=840267a2855b9e17a1c64a8498758456e49004ce0916c7f8f71ac3aedb6494bb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZNX5CA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGCJznfTdDLiogUnHgzMplm%2FCNwkHZqNprIF9LL6eRANAiEA0KsGf2zMQH5wGkqR57yjweHrNrtxWZ7qGPSS4qK3wNwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGjgYlROjnQCIEPg3ircA2%2BEq3QmaAQ6hZ9nQv6rOirh4INOJx7WI83AfpRJ2gDKPJlDqyz07X4pQ1VAnJ3CWAy4k6x5tmFmO4t%2FdFePMqLliKYlxuPMRcXMYQoHSG4u8amcmgt%2BlNVk9OWAEA27pPgyvHa%2FEoK%2BjfgimWmsaNCY%2BrekpT64eir0NM0nfnmJMJm4%2B%2B5p5msIXQfu9QHD0mxujE6f1Kd%2BSI20LsELespysSAKsQB%2BeGm%2B1KkrC3gvIY8FJzuuHnnUC%2Bpd%2B0PRtwdRaZKRWh5tIx3TJGnln1qpMwoT4KDZdoLK5nOf%2BgWjIOHo6fegCD3qwfePVvLfJdQzxe7VahN0T064ZYxH%2BuuD0fQFDRUn%2Bz2BzZu9HYZhlAI%2F2yzXATLWCpfLuKbGViZ2De2R1Xa5He2YU4%2BIkX%2Fq%2B412cx2ruHGXlyi19t8Mk4p9cNcbtIDAd24zydGPqOFHkwykd82xHdghdebxJ2DPPecVLJUbK51R083%2Bs3IAV2dVJJseWe445MIbIVp30kNtVOAj%2BxPoFlcJKBO3HO%2FBpFq71FTEayr0TC%2FXpmZuJjWEm6KFJpSKm2ePyinW%2BlS8zQ9iu5dcsho6YKgCN9nbGGS3yXVdAuFA8e184ZDEj4h0SGCkK7U8vxYUMOKOtr4GOqUBI8Cuy%2Ft5lU7xWr5Ve2Eeuxwr8ElrsQZjXN4NvO14DRCEZR%2BN5acPoH8VEqC%2BH99pNPo6BxNO4i%2BWMRpXGJL7yZAxUK8qu8tzYUtrlydMTtz3OfGa86Af65yLwz8EU%2BNx7xi6BKJ8OP743Xak%2BCGFx%2FYRpLQV%2BAbZSo8Cq51iaYcbjBumIxBlEbk7usTCvPw0wr7luEQ6kZS5Z4oVdzBQ38XcjtpO&X-Amz-Signature=ec858b3b160d57049f9c8c6260419596f36d7bd6cc2f92e84289af89074ad73f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZNX5CA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGCJznfTdDLiogUnHgzMplm%2FCNwkHZqNprIF9LL6eRANAiEA0KsGf2zMQH5wGkqR57yjweHrNrtxWZ7qGPSS4qK3wNwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGjgYlROjnQCIEPg3ircA2%2BEq3QmaAQ6hZ9nQv6rOirh4INOJx7WI83AfpRJ2gDKPJlDqyz07X4pQ1VAnJ3CWAy4k6x5tmFmO4t%2FdFePMqLliKYlxuPMRcXMYQoHSG4u8amcmgt%2BlNVk9OWAEA27pPgyvHa%2FEoK%2BjfgimWmsaNCY%2BrekpT64eir0NM0nfnmJMJm4%2B%2B5p5msIXQfu9QHD0mxujE6f1Kd%2BSI20LsELespysSAKsQB%2BeGm%2B1KkrC3gvIY8FJzuuHnnUC%2Bpd%2B0PRtwdRaZKRWh5tIx3TJGnln1qpMwoT4KDZdoLK5nOf%2BgWjIOHo6fegCD3qwfePVvLfJdQzxe7VahN0T064ZYxH%2BuuD0fQFDRUn%2Bz2BzZu9HYZhlAI%2F2yzXATLWCpfLuKbGViZ2De2R1Xa5He2YU4%2BIkX%2Fq%2B412cx2ruHGXlyi19t8Mk4p9cNcbtIDAd24zydGPqOFHkwykd82xHdghdebxJ2DPPecVLJUbK51R083%2Bs3IAV2dVJJseWe445MIbIVp30kNtVOAj%2BxPoFlcJKBO3HO%2FBpFq71FTEayr0TC%2FXpmZuJjWEm6KFJpSKm2ePyinW%2BlS8zQ9iu5dcsho6YKgCN9nbGGS3yXVdAuFA8e184ZDEj4h0SGCkK7U8vxYUMOKOtr4GOqUBI8Cuy%2Ft5lU7xWr5Ve2Eeuxwr8ElrsQZjXN4NvO14DRCEZR%2BN5acPoH8VEqC%2BH99pNPo6BxNO4i%2BWMRpXGJL7yZAxUK8qu8tzYUtrlydMTtz3OfGa86Af65yLwz8EU%2BNx7xi6BKJ8OP743Xak%2BCGFx%2FYRpLQV%2BAbZSo8Cq51iaYcbjBumIxBlEbk7usTCvPw0wr7luEQ6kZS5Z4oVdzBQ38XcjtpO&X-Amz-Signature=17a5e29609f067fee10bd8655b95b542308286f42101f6f91b8fd75d546a94ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZNX5CA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGCJznfTdDLiogUnHgzMplm%2FCNwkHZqNprIF9LL6eRANAiEA0KsGf2zMQH5wGkqR57yjweHrNrtxWZ7qGPSS4qK3wNwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGjgYlROjnQCIEPg3ircA2%2BEq3QmaAQ6hZ9nQv6rOirh4INOJx7WI83AfpRJ2gDKPJlDqyz07X4pQ1VAnJ3CWAy4k6x5tmFmO4t%2FdFePMqLliKYlxuPMRcXMYQoHSG4u8amcmgt%2BlNVk9OWAEA27pPgyvHa%2FEoK%2BjfgimWmsaNCY%2BrekpT64eir0NM0nfnmJMJm4%2B%2B5p5msIXQfu9QHD0mxujE6f1Kd%2BSI20LsELespysSAKsQB%2BeGm%2B1KkrC3gvIY8FJzuuHnnUC%2Bpd%2B0PRtwdRaZKRWh5tIx3TJGnln1qpMwoT4KDZdoLK5nOf%2BgWjIOHo6fegCD3qwfePVvLfJdQzxe7VahN0T064ZYxH%2BuuD0fQFDRUn%2Bz2BzZu9HYZhlAI%2F2yzXATLWCpfLuKbGViZ2De2R1Xa5He2YU4%2BIkX%2Fq%2B412cx2ruHGXlyi19t8Mk4p9cNcbtIDAd24zydGPqOFHkwykd82xHdghdebxJ2DPPecVLJUbK51R083%2Bs3IAV2dVJJseWe445MIbIVp30kNtVOAj%2BxPoFlcJKBO3HO%2FBpFq71FTEayr0TC%2FXpmZuJjWEm6KFJpSKm2ePyinW%2BlS8zQ9iu5dcsho6YKgCN9nbGGS3yXVdAuFA8e184ZDEj4h0SGCkK7U8vxYUMOKOtr4GOqUBI8Cuy%2Ft5lU7xWr5Ve2Eeuxwr8ElrsQZjXN4NvO14DRCEZR%2BN5acPoH8VEqC%2BH99pNPo6BxNO4i%2BWMRpXGJL7yZAxUK8qu8tzYUtrlydMTtz3OfGa86Af65yLwz8EU%2BNx7xi6BKJ8OP743Xak%2BCGFx%2FYRpLQV%2BAbZSo8Cq51iaYcbjBumIxBlEbk7usTCvPw0wr7luEQ6kZS5Z4oVdzBQ38XcjtpO&X-Amz-Signature=3de2c6dd973ed9d232db43bfa8afba47059655b8a0030c561b6c0be60e80a9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZNX5CA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGCJznfTdDLiogUnHgzMplm%2FCNwkHZqNprIF9LL6eRANAiEA0KsGf2zMQH5wGkqR57yjweHrNrtxWZ7qGPSS4qK3wNwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGjgYlROjnQCIEPg3ircA2%2BEq3QmaAQ6hZ9nQv6rOirh4INOJx7WI83AfpRJ2gDKPJlDqyz07X4pQ1VAnJ3CWAy4k6x5tmFmO4t%2FdFePMqLliKYlxuPMRcXMYQoHSG4u8amcmgt%2BlNVk9OWAEA27pPgyvHa%2FEoK%2BjfgimWmsaNCY%2BrekpT64eir0NM0nfnmJMJm4%2B%2B5p5msIXQfu9QHD0mxujE6f1Kd%2BSI20LsELespysSAKsQB%2BeGm%2B1KkrC3gvIY8FJzuuHnnUC%2Bpd%2B0PRtwdRaZKRWh5tIx3TJGnln1qpMwoT4KDZdoLK5nOf%2BgWjIOHo6fegCD3qwfePVvLfJdQzxe7VahN0T064ZYxH%2BuuD0fQFDRUn%2Bz2BzZu9HYZhlAI%2F2yzXATLWCpfLuKbGViZ2De2R1Xa5He2YU4%2BIkX%2Fq%2B412cx2ruHGXlyi19t8Mk4p9cNcbtIDAd24zydGPqOFHkwykd82xHdghdebxJ2DPPecVLJUbK51R083%2Bs3IAV2dVJJseWe445MIbIVp30kNtVOAj%2BxPoFlcJKBO3HO%2FBpFq71FTEayr0TC%2FXpmZuJjWEm6KFJpSKm2ePyinW%2BlS8zQ9iu5dcsho6YKgCN9nbGGS3yXVdAuFA8e184ZDEj4h0SGCkK7U8vxYUMOKOtr4GOqUBI8Cuy%2Ft5lU7xWr5Ve2Eeuxwr8ElrsQZjXN4NvO14DRCEZR%2BN5acPoH8VEqC%2BH99pNPo6BxNO4i%2BWMRpXGJL7yZAxUK8qu8tzYUtrlydMTtz3OfGa86Af65yLwz8EU%2BNx7xi6BKJ8OP743Xak%2BCGFx%2FYRpLQV%2BAbZSo8Cq51iaYcbjBumIxBlEbk7usTCvPw0wr7luEQ6kZS5Z4oVdzBQ38XcjtpO&X-Amz-Signature=636f4ac95865224b769f1e0b7bd6caff7ba305c902fdc19fa5084dccfdaf75ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZNX5CA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIGCJznfTdDLiogUnHgzMplm%2FCNwkHZqNprIF9LL6eRANAiEA0KsGf2zMQH5wGkqR57yjweHrNrtxWZ7qGPSS4qK3wNwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGjgYlROjnQCIEPg3ircA2%2BEq3QmaAQ6hZ9nQv6rOirh4INOJx7WI83AfpRJ2gDKPJlDqyz07X4pQ1VAnJ3CWAy4k6x5tmFmO4t%2FdFePMqLliKYlxuPMRcXMYQoHSG4u8amcmgt%2BlNVk9OWAEA27pPgyvHa%2FEoK%2BjfgimWmsaNCY%2BrekpT64eir0NM0nfnmJMJm4%2B%2B5p5msIXQfu9QHD0mxujE6f1Kd%2BSI20LsELespysSAKsQB%2BeGm%2B1KkrC3gvIY8FJzuuHnnUC%2Bpd%2B0PRtwdRaZKRWh5tIx3TJGnln1qpMwoT4KDZdoLK5nOf%2BgWjIOHo6fegCD3qwfePVvLfJdQzxe7VahN0T064ZYxH%2BuuD0fQFDRUn%2Bz2BzZu9HYZhlAI%2F2yzXATLWCpfLuKbGViZ2De2R1Xa5He2YU4%2BIkX%2Fq%2B412cx2ruHGXlyi19t8Mk4p9cNcbtIDAd24zydGPqOFHkwykd82xHdghdebxJ2DPPecVLJUbK51R083%2Bs3IAV2dVJJseWe445MIbIVp30kNtVOAj%2BxPoFlcJKBO3HO%2FBpFq71FTEayr0TC%2FXpmZuJjWEm6KFJpSKm2ePyinW%2BlS8zQ9iu5dcsho6YKgCN9nbGGS3yXVdAuFA8e184ZDEj4h0SGCkK7U8vxYUMOKOtr4GOqUBI8Cuy%2Ft5lU7xWr5Ve2Eeuxwr8ElrsQZjXN4NvO14DRCEZR%2BN5acPoH8VEqC%2BH99pNPo6BxNO4i%2BWMRpXGJL7yZAxUK8qu8tzYUtrlydMTtz3OfGa86Af65yLwz8EU%2BNx7xi6BKJ8OP743Xak%2BCGFx%2FYRpLQV%2BAbZSo8Cq51iaYcbjBumIxBlEbk7usTCvPw0wr7luEQ6kZS5Z4oVdzBQ38XcjtpO&X-Amz-Signature=6784037191d9482092382c900591d56274684841a75eb51a0d290f65f8b9e7a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
