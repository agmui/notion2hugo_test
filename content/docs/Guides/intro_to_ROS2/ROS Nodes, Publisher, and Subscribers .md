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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWR2SAO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDWQOXOgE8zTvEa%2BE1baDioz82a64Ap1AfvCaGfheQWVgIgKaxy3BQDcNvKfKL78rXqKfsRMSyneZPOA91mkyRYktoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsnUO4wSOT2cvXEcCrcAzuduqH6PVO5CpfLnhrw%2Fp1Il%2FsbWxgR6Rnw4ZCnJA6jwWgONm3nW1PlYjNufpiENB%2BK9zZJP35LCjdGmuPuURHrMBUuJK3cq4KwicrcoP0hY1BLJIEw8xOLlOgI6nqVfaf4b0VFDdjLMmhyzQYLTAKmjhjSM6mmOQvXuJNTH0GivvX%2F5RYtq%2Bi4eSqXsI7XnAzmtlx735AHL1wCejDHaIv2eoOMHi8ujo5lRouSmQUXKyPtvZRUSJIKWRCYauV9fGQfgXumUMbKkEJ5AjQP%2B%2FEqHPpxNlbaq%2Be12Ha8ir1Qf%2FAB%2FrkYNQhMVeJL4LZjLjn1IRlm5%2Br4i5160mfqld26cTt%2BKa9CSQmtW8sK8wBoD6re%2FpneOcmzb0%2BomnV%2BjqaDgQQj7NCkRMy%2BsWEddiAFsYylUhMX7P0DT5Ve0wRB4LSwSkigVqXj3CwbCaUfVFM%2FaFlNSmL1VBqW%2FtysGByyRf34o449EDLu5wNPmml1u%2Fd1l3USCu3QPFaCJaRp7k2ntjQSe3hMuym0kk2kYA8%2BDm4S1VauFqRubAW1YjopYeKocqCvkZxuWKE0ZtnThDXWpaLZbWuQrrPgYZ4c%2FhA3TrlmMMYJVCMb8Gge%2Bef4f05RdQp4Qg8huZIeMMHqwMEGOqUB9WpEYjJgjLRHeBwDPD7Nf2G2nxsnbyy%2Bo7QHnTrQc05HUKGRcFPlauAyMfh5vKw9VRbXj%2F4hscw4lacExwLVUE%2B5BFKXFa%2BnO37KLbXHtm7zVKQkmaTM0LjAvNHRvIbdhi3lT2%2BnxM24FLP7xx%2Ffp5jXVbWqpQ9PIDrO7WGufs85I70aLqrYCqp2t98rpBulQD9toJG5NGtdoazqGvOsH1EJHZxe&X-Amz-Signature=3423ae2465ae6e8387f3d65a5f479d64c32475220f4bdd5c25ae1e1c094a8e99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWR2SAO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDWQOXOgE8zTvEa%2BE1baDioz82a64Ap1AfvCaGfheQWVgIgKaxy3BQDcNvKfKL78rXqKfsRMSyneZPOA91mkyRYktoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsnUO4wSOT2cvXEcCrcAzuduqH6PVO5CpfLnhrw%2Fp1Il%2FsbWxgR6Rnw4ZCnJA6jwWgONm3nW1PlYjNufpiENB%2BK9zZJP35LCjdGmuPuURHrMBUuJK3cq4KwicrcoP0hY1BLJIEw8xOLlOgI6nqVfaf4b0VFDdjLMmhyzQYLTAKmjhjSM6mmOQvXuJNTH0GivvX%2F5RYtq%2Bi4eSqXsI7XnAzmtlx735AHL1wCejDHaIv2eoOMHi8ujo5lRouSmQUXKyPtvZRUSJIKWRCYauV9fGQfgXumUMbKkEJ5AjQP%2B%2FEqHPpxNlbaq%2Be12Ha8ir1Qf%2FAB%2FrkYNQhMVeJL4LZjLjn1IRlm5%2Br4i5160mfqld26cTt%2BKa9CSQmtW8sK8wBoD6re%2FpneOcmzb0%2BomnV%2BjqaDgQQj7NCkRMy%2BsWEddiAFsYylUhMX7P0DT5Ve0wRB4LSwSkigVqXj3CwbCaUfVFM%2FaFlNSmL1VBqW%2FtysGByyRf34o449EDLu5wNPmml1u%2Fd1l3USCu3QPFaCJaRp7k2ntjQSe3hMuym0kk2kYA8%2BDm4S1VauFqRubAW1YjopYeKocqCvkZxuWKE0ZtnThDXWpaLZbWuQrrPgYZ4c%2FhA3TrlmMMYJVCMb8Gge%2Bef4f05RdQp4Qg8huZIeMMHqwMEGOqUB9WpEYjJgjLRHeBwDPD7Nf2G2nxsnbyy%2Bo7QHnTrQc05HUKGRcFPlauAyMfh5vKw9VRbXj%2F4hscw4lacExwLVUE%2B5BFKXFa%2BnO37KLbXHtm7zVKQkmaTM0LjAvNHRvIbdhi3lT2%2BnxM24FLP7xx%2Ffp5jXVbWqpQ9PIDrO7WGufs85I70aLqrYCqp2t98rpBulQD9toJG5NGtdoazqGvOsH1EJHZxe&X-Amz-Signature=0b295abb9bf9e1f2d7c0bc4401b5018774cac1432540a7cb6bc8686af240c1fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWR2SAO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDWQOXOgE8zTvEa%2BE1baDioz82a64Ap1AfvCaGfheQWVgIgKaxy3BQDcNvKfKL78rXqKfsRMSyneZPOA91mkyRYktoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsnUO4wSOT2cvXEcCrcAzuduqH6PVO5CpfLnhrw%2Fp1Il%2FsbWxgR6Rnw4ZCnJA6jwWgONm3nW1PlYjNufpiENB%2BK9zZJP35LCjdGmuPuURHrMBUuJK3cq4KwicrcoP0hY1BLJIEw8xOLlOgI6nqVfaf4b0VFDdjLMmhyzQYLTAKmjhjSM6mmOQvXuJNTH0GivvX%2F5RYtq%2Bi4eSqXsI7XnAzmtlx735AHL1wCejDHaIv2eoOMHi8ujo5lRouSmQUXKyPtvZRUSJIKWRCYauV9fGQfgXumUMbKkEJ5AjQP%2B%2FEqHPpxNlbaq%2Be12Ha8ir1Qf%2FAB%2FrkYNQhMVeJL4LZjLjn1IRlm5%2Br4i5160mfqld26cTt%2BKa9CSQmtW8sK8wBoD6re%2FpneOcmzb0%2BomnV%2BjqaDgQQj7NCkRMy%2BsWEddiAFsYylUhMX7P0DT5Ve0wRB4LSwSkigVqXj3CwbCaUfVFM%2FaFlNSmL1VBqW%2FtysGByyRf34o449EDLu5wNPmml1u%2Fd1l3USCu3QPFaCJaRp7k2ntjQSe3hMuym0kk2kYA8%2BDm4S1VauFqRubAW1YjopYeKocqCvkZxuWKE0ZtnThDXWpaLZbWuQrrPgYZ4c%2FhA3TrlmMMYJVCMb8Gge%2Bef4f05RdQp4Qg8huZIeMMHqwMEGOqUB9WpEYjJgjLRHeBwDPD7Nf2G2nxsnbyy%2Bo7QHnTrQc05HUKGRcFPlauAyMfh5vKw9VRbXj%2F4hscw4lacExwLVUE%2B5BFKXFa%2BnO37KLbXHtm7zVKQkmaTM0LjAvNHRvIbdhi3lT2%2BnxM24FLP7xx%2Ffp5jXVbWqpQ9PIDrO7WGufs85I70aLqrYCqp2t98rpBulQD9toJG5NGtdoazqGvOsH1EJHZxe&X-Amz-Signature=33fe8be451c1c28f146ddbc1c3f5c214e045763614909a35477dc42dddcf6dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWR2SAO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDWQOXOgE8zTvEa%2BE1baDioz82a64Ap1AfvCaGfheQWVgIgKaxy3BQDcNvKfKL78rXqKfsRMSyneZPOA91mkyRYktoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsnUO4wSOT2cvXEcCrcAzuduqH6PVO5CpfLnhrw%2Fp1Il%2FsbWxgR6Rnw4ZCnJA6jwWgONm3nW1PlYjNufpiENB%2BK9zZJP35LCjdGmuPuURHrMBUuJK3cq4KwicrcoP0hY1BLJIEw8xOLlOgI6nqVfaf4b0VFDdjLMmhyzQYLTAKmjhjSM6mmOQvXuJNTH0GivvX%2F5RYtq%2Bi4eSqXsI7XnAzmtlx735AHL1wCejDHaIv2eoOMHi8ujo5lRouSmQUXKyPtvZRUSJIKWRCYauV9fGQfgXumUMbKkEJ5AjQP%2B%2FEqHPpxNlbaq%2Be12Ha8ir1Qf%2FAB%2FrkYNQhMVeJL4LZjLjn1IRlm5%2Br4i5160mfqld26cTt%2BKa9CSQmtW8sK8wBoD6re%2FpneOcmzb0%2BomnV%2BjqaDgQQj7NCkRMy%2BsWEddiAFsYylUhMX7P0DT5Ve0wRB4LSwSkigVqXj3CwbCaUfVFM%2FaFlNSmL1VBqW%2FtysGByyRf34o449EDLu5wNPmml1u%2Fd1l3USCu3QPFaCJaRp7k2ntjQSe3hMuym0kk2kYA8%2BDm4S1VauFqRubAW1YjopYeKocqCvkZxuWKE0ZtnThDXWpaLZbWuQrrPgYZ4c%2FhA3TrlmMMYJVCMb8Gge%2Bef4f05RdQp4Qg8huZIeMMHqwMEGOqUB9WpEYjJgjLRHeBwDPD7Nf2G2nxsnbyy%2Bo7QHnTrQc05HUKGRcFPlauAyMfh5vKw9VRbXj%2F4hscw4lacExwLVUE%2B5BFKXFa%2BnO37KLbXHtm7zVKQkmaTM0LjAvNHRvIbdhi3lT2%2BnxM24FLP7xx%2Ffp5jXVbWqpQ9PIDrO7WGufs85I70aLqrYCqp2t98rpBulQD9toJG5NGtdoazqGvOsH1EJHZxe&X-Amz-Signature=31f472eee851f0edf1363b815f8d0b5e5e8c5d14ba83d019bf34bfb37aca236b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWR2SAO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDWQOXOgE8zTvEa%2BE1baDioz82a64Ap1AfvCaGfheQWVgIgKaxy3BQDcNvKfKL78rXqKfsRMSyneZPOA91mkyRYktoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsnUO4wSOT2cvXEcCrcAzuduqH6PVO5CpfLnhrw%2Fp1Il%2FsbWxgR6Rnw4ZCnJA6jwWgONm3nW1PlYjNufpiENB%2BK9zZJP35LCjdGmuPuURHrMBUuJK3cq4KwicrcoP0hY1BLJIEw8xOLlOgI6nqVfaf4b0VFDdjLMmhyzQYLTAKmjhjSM6mmOQvXuJNTH0GivvX%2F5RYtq%2Bi4eSqXsI7XnAzmtlx735AHL1wCejDHaIv2eoOMHi8ujo5lRouSmQUXKyPtvZRUSJIKWRCYauV9fGQfgXumUMbKkEJ5AjQP%2B%2FEqHPpxNlbaq%2Be12Ha8ir1Qf%2FAB%2FrkYNQhMVeJL4LZjLjn1IRlm5%2Br4i5160mfqld26cTt%2BKa9CSQmtW8sK8wBoD6re%2FpneOcmzb0%2BomnV%2BjqaDgQQj7NCkRMy%2BsWEddiAFsYylUhMX7P0DT5Ve0wRB4LSwSkigVqXj3CwbCaUfVFM%2FaFlNSmL1VBqW%2FtysGByyRf34o449EDLu5wNPmml1u%2Fd1l3USCu3QPFaCJaRp7k2ntjQSe3hMuym0kk2kYA8%2BDm4S1VauFqRubAW1YjopYeKocqCvkZxuWKE0ZtnThDXWpaLZbWuQrrPgYZ4c%2FhA3TrlmMMYJVCMb8Gge%2Bef4f05RdQp4Qg8huZIeMMHqwMEGOqUB9WpEYjJgjLRHeBwDPD7Nf2G2nxsnbyy%2Bo7QHnTrQc05HUKGRcFPlauAyMfh5vKw9VRbXj%2F4hscw4lacExwLVUE%2B5BFKXFa%2BnO37KLbXHtm7zVKQkmaTM0LjAvNHRvIbdhi3lT2%2BnxM24FLP7xx%2Ffp5jXVbWqpQ9PIDrO7WGufs85I70aLqrYCqp2t98rpBulQD9toJG5NGtdoazqGvOsH1EJHZxe&X-Amz-Signature=9b8c290ab662564aec9051630feb480492f08db892e969552b3e3a93c441e4e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWR2SAO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDWQOXOgE8zTvEa%2BE1baDioz82a64Ap1AfvCaGfheQWVgIgKaxy3BQDcNvKfKL78rXqKfsRMSyneZPOA91mkyRYktoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsnUO4wSOT2cvXEcCrcAzuduqH6PVO5CpfLnhrw%2Fp1Il%2FsbWxgR6Rnw4ZCnJA6jwWgONm3nW1PlYjNufpiENB%2BK9zZJP35LCjdGmuPuURHrMBUuJK3cq4KwicrcoP0hY1BLJIEw8xOLlOgI6nqVfaf4b0VFDdjLMmhyzQYLTAKmjhjSM6mmOQvXuJNTH0GivvX%2F5RYtq%2Bi4eSqXsI7XnAzmtlx735AHL1wCejDHaIv2eoOMHi8ujo5lRouSmQUXKyPtvZRUSJIKWRCYauV9fGQfgXumUMbKkEJ5AjQP%2B%2FEqHPpxNlbaq%2Be12Ha8ir1Qf%2FAB%2FrkYNQhMVeJL4LZjLjn1IRlm5%2Br4i5160mfqld26cTt%2BKa9CSQmtW8sK8wBoD6re%2FpneOcmzb0%2BomnV%2BjqaDgQQj7NCkRMy%2BsWEddiAFsYylUhMX7P0DT5Ve0wRB4LSwSkigVqXj3CwbCaUfVFM%2FaFlNSmL1VBqW%2FtysGByyRf34o449EDLu5wNPmml1u%2Fd1l3USCu3QPFaCJaRp7k2ntjQSe3hMuym0kk2kYA8%2BDm4S1VauFqRubAW1YjopYeKocqCvkZxuWKE0ZtnThDXWpaLZbWuQrrPgYZ4c%2FhA3TrlmMMYJVCMb8Gge%2Bef4f05RdQp4Qg8huZIeMMHqwMEGOqUB9WpEYjJgjLRHeBwDPD7Nf2G2nxsnbyy%2Bo7QHnTrQc05HUKGRcFPlauAyMfh5vKw9VRbXj%2F4hscw4lacExwLVUE%2B5BFKXFa%2BnO37KLbXHtm7zVKQkmaTM0LjAvNHRvIbdhi3lT2%2BnxM24FLP7xx%2Ffp5jXVbWqpQ9PIDrO7WGufs85I70aLqrYCqp2t98rpBulQD9toJG5NGtdoazqGvOsH1EJHZxe&X-Amz-Signature=b304bb0bcd826416d2bbf64b431a5e684640b329809d7d2f6612667a40b6dcc5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWR2SAO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDWQOXOgE8zTvEa%2BE1baDioz82a64Ap1AfvCaGfheQWVgIgKaxy3BQDcNvKfKL78rXqKfsRMSyneZPOA91mkyRYktoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsnUO4wSOT2cvXEcCrcAzuduqH6PVO5CpfLnhrw%2Fp1Il%2FsbWxgR6Rnw4ZCnJA6jwWgONm3nW1PlYjNufpiENB%2BK9zZJP35LCjdGmuPuURHrMBUuJK3cq4KwicrcoP0hY1BLJIEw8xOLlOgI6nqVfaf4b0VFDdjLMmhyzQYLTAKmjhjSM6mmOQvXuJNTH0GivvX%2F5RYtq%2Bi4eSqXsI7XnAzmtlx735AHL1wCejDHaIv2eoOMHi8ujo5lRouSmQUXKyPtvZRUSJIKWRCYauV9fGQfgXumUMbKkEJ5AjQP%2B%2FEqHPpxNlbaq%2Be12Ha8ir1Qf%2FAB%2FrkYNQhMVeJL4LZjLjn1IRlm5%2Br4i5160mfqld26cTt%2BKa9CSQmtW8sK8wBoD6re%2FpneOcmzb0%2BomnV%2BjqaDgQQj7NCkRMy%2BsWEddiAFsYylUhMX7P0DT5Ve0wRB4LSwSkigVqXj3CwbCaUfVFM%2FaFlNSmL1VBqW%2FtysGByyRf34o449EDLu5wNPmml1u%2Fd1l3USCu3QPFaCJaRp7k2ntjQSe3hMuym0kk2kYA8%2BDm4S1VauFqRubAW1YjopYeKocqCvkZxuWKE0ZtnThDXWpaLZbWuQrrPgYZ4c%2FhA3TrlmMMYJVCMb8Gge%2Bef4f05RdQp4Qg8huZIeMMHqwMEGOqUB9WpEYjJgjLRHeBwDPD7Nf2G2nxsnbyy%2Bo7QHnTrQc05HUKGRcFPlauAyMfh5vKw9VRbXj%2F4hscw4lacExwLVUE%2B5BFKXFa%2BnO37KLbXHtm7zVKQkmaTM0LjAvNHRvIbdhi3lT2%2BnxM24FLP7xx%2Ffp5jXVbWqpQ9PIDrO7WGufs85I70aLqrYCqp2t98rpBulQD9toJG5NGtdoazqGvOsH1EJHZxe&X-Amz-Signature=da20e3bbfe96ce951e5720c65caf67e58c40c0bd8b0a9d74d1fa908cf6bdfba1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWR2SAO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDWQOXOgE8zTvEa%2BE1baDioz82a64Ap1AfvCaGfheQWVgIgKaxy3BQDcNvKfKL78rXqKfsRMSyneZPOA91mkyRYktoqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsnUO4wSOT2cvXEcCrcAzuduqH6PVO5CpfLnhrw%2Fp1Il%2FsbWxgR6Rnw4ZCnJA6jwWgONm3nW1PlYjNufpiENB%2BK9zZJP35LCjdGmuPuURHrMBUuJK3cq4KwicrcoP0hY1BLJIEw8xOLlOgI6nqVfaf4b0VFDdjLMmhyzQYLTAKmjhjSM6mmOQvXuJNTH0GivvX%2F5RYtq%2Bi4eSqXsI7XnAzmtlx735AHL1wCejDHaIv2eoOMHi8ujo5lRouSmQUXKyPtvZRUSJIKWRCYauV9fGQfgXumUMbKkEJ5AjQP%2B%2FEqHPpxNlbaq%2Be12Ha8ir1Qf%2FAB%2FrkYNQhMVeJL4LZjLjn1IRlm5%2Br4i5160mfqld26cTt%2BKa9CSQmtW8sK8wBoD6re%2FpneOcmzb0%2BomnV%2BjqaDgQQj7NCkRMy%2BsWEddiAFsYylUhMX7P0DT5Ve0wRB4LSwSkigVqXj3CwbCaUfVFM%2FaFlNSmL1VBqW%2FtysGByyRf34o449EDLu5wNPmml1u%2Fd1l3USCu3QPFaCJaRp7k2ntjQSe3hMuym0kk2kYA8%2BDm4S1VauFqRubAW1YjopYeKocqCvkZxuWKE0ZtnThDXWpaLZbWuQrrPgYZ4c%2FhA3TrlmMMYJVCMb8Gge%2Bef4f05RdQp4Qg8huZIeMMHqwMEGOqUB9WpEYjJgjLRHeBwDPD7Nf2G2nxsnbyy%2Bo7QHnTrQc05HUKGRcFPlauAyMfh5vKw9VRbXj%2F4hscw4lacExwLVUE%2B5BFKXFa%2BnO37KLbXHtm7zVKQkmaTM0LjAvNHRvIbdhi3lT2%2BnxM24FLP7xx%2Ffp5jXVbWqpQ9PIDrO7WGufs85I70aLqrYCqp2t98rpBulQD9toJG5NGtdoazqGvOsH1EJHZxe&X-Amz-Signature=833cbc8d9af2c6337f4c7cfda8c1c8820cce5b109b6fae447b5e0173787b9557&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
