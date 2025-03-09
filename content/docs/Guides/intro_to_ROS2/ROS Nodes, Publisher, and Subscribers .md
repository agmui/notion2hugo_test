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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5ODNAH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFHQgUXmvNNVdw9ZCf2ov5J8u5b1SuI%2BH184vdVlB5qGAiEA8%2B%2BVVzdsk%2BHn8TBYOUrZaXyUQRFr%2BxGCh%2B57bmMuovYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDvNtTTZ3Biv4jZshircA21ukPQWjicAWpZoNZtIgI9YznpMyOc3ruZEW0l27jkjymaOlpsBjnoQLXBuizsIl0Tv7NI08q5ZqRlkb%2FFe58OAZ06%2B5%2BvSXVVL3Gdd%2FL6arMB92GAx7eh38Jtd5gMqRxAq%2F%2BsHNafmm1r7WD5xKGb98Cy7WM%2F6koOyXU9PX2B0CgnlOVG%2FWCs4GwDKGZjTsRTbA7eZCZ63%2FsjI8cF8FmiJfI%2FYHqUnisjLTvWFqk5e1rD0zgGySTulSpEzhOc0KQb1ReLD8NxvMwyJasV9GL9uO6PRG51eZgAJ5LypVVpOmoleaYU%2FPyYzIXfJD%2BD93ffexkOsUyasXkCi4KSP1zvE6WeDKuM1GWawrS4ePl4oK7WN2kf8kNPSi5gbuMur%2BScOoEcsHl0HS04OwgYK%2FN4SeIfbT9c0gSTaqEPkveLOs%2F9Lm7n%2BpFNnzg94nTOYIWLWtDbbwaoxhpTghh6LsEBrJyZpsXFy4cFMDJWrjumoJ0jEjsuF7BBw3NaqNS54ohfSDuPz5Cta83tt2cnedHiqvwXEoc0kUCp8ny0Ssijl95MlJaApnOU%2B1kWLJTJgFNC3ZJgBxcSfrq1TNulPhpuzqUppFseOPiH5tXe6cbZUYltrg18BymAUmt8SMNbps74GOqUBjtvj779mwnETKkgbatTls8hMGQjMdSthNv685UQnTrizzyOBbVHntzVJ%2FG5H9O1BYzLG5gA0Zbq%2FdjeMEGSdjZlqgnJN%2FqBzaOg0qPQQkvkowpjrxMkp%2BNWo55LcPxYY4H76njjs8H4Sl2KG3GiC3d8Jwuj2ulPJX6n0HdID1GvWrfqP3Yyk5bIS7oJw9nK1sKucRdrnTkhYkp4V40hly%2Fdpgzbg&X-Amz-Signature=e2312121df679b33522a70d54891e7040571da16ae1a2af786578d5eeef9cb5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5ODNAH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFHQgUXmvNNVdw9ZCf2ov5J8u5b1SuI%2BH184vdVlB5qGAiEA8%2B%2BVVzdsk%2BHn8TBYOUrZaXyUQRFr%2BxGCh%2B57bmMuovYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDvNtTTZ3Biv4jZshircA21ukPQWjicAWpZoNZtIgI9YznpMyOc3ruZEW0l27jkjymaOlpsBjnoQLXBuizsIl0Tv7NI08q5ZqRlkb%2FFe58OAZ06%2B5%2BvSXVVL3Gdd%2FL6arMB92GAx7eh38Jtd5gMqRxAq%2F%2BsHNafmm1r7WD5xKGb98Cy7WM%2F6koOyXU9PX2B0CgnlOVG%2FWCs4GwDKGZjTsRTbA7eZCZ63%2FsjI8cF8FmiJfI%2FYHqUnisjLTvWFqk5e1rD0zgGySTulSpEzhOc0KQb1ReLD8NxvMwyJasV9GL9uO6PRG51eZgAJ5LypVVpOmoleaYU%2FPyYzIXfJD%2BD93ffexkOsUyasXkCi4KSP1zvE6WeDKuM1GWawrS4ePl4oK7WN2kf8kNPSi5gbuMur%2BScOoEcsHl0HS04OwgYK%2FN4SeIfbT9c0gSTaqEPkveLOs%2F9Lm7n%2BpFNnzg94nTOYIWLWtDbbwaoxhpTghh6LsEBrJyZpsXFy4cFMDJWrjumoJ0jEjsuF7BBw3NaqNS54ohfSDuPz5Cta83tt2cnedHiqvwXEoc0kUCp8ny0Ssijl95MlJaApnOU%2B1kWLJTJgFNC3ZJgBxcSfrq1TNulPhpuzqUppFseOPiH5tXe6cbZUYltrg18BymAUmt8SMNbps74GOqUBjtvj779mwnETKkgbatTls8hMGQjMdSthNv685UQnTrizzyOBbVHntzVJ%2FG5H9O1BYzLG5gA0Zbq%2FdjeMEGSdjZlqgnJN%2FqBzaOg0qPQQkvkowpjrxMkp%2BNWo55LcPxYY4H76njjs8H4Sl2KG3GiC3d8Jwuj2ulPJX6n0HdID1GvWrfqP3Yyk5bIS7oJw9nK1sKucRdrnTkhYkp4V40hly%2Fdpgzbg&X-Amz-Signature=f32b311a513b4c4df65bd4255991feddcf0a50a46e1fe5e93bac71865ba41688&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5ODNAH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFHQgUXmvNNVdw9ZCf2ov5J8u5b1SuI%2BH184vdVlB5qGAiEA8%2B%2BVVzdsk%2BHn8TBYOUrZaXyUQRFr%2BxGCh%2B57bmMuovYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDvNtTTZ3Biv4jZshircA21ukPQWjicAWpZoNZtIgI9YznpMyOc3ruZEW0l27jkjymaOlpsBjnoQLXBuizsIl0Tv7NI08q5ZqRlkb%2FFe58OAZ06%2B5%2BvSXVVL3Gdd%2FL6arMB92GAx7eh38Jtd5gMqRxAq%2F%2BsHNafmm1r7WD5xKGb98Cy7WM%2F6koOyXU9PX2B0CgnlOVG%2FWCs4GwDKGZjTsRTbA7eZCZ63%2FsjI8cF8FmiJfI%2FYHqUnisjLTvWFqk5e1rD0zgGySTulSpEzhOc0KQb1ReLD8NxvMwyJasV9GL9uO6PRG51eZgAJ5LypVVpOmoleaYU%2FPyYzIXfJD%2BD93ffexkOsUyasXkCi4KSP1zvE6WeDKuM1GWawrS4ePl4oK7WN2kf8kNPSi5gbuMur%2BScOoEcsHl0HS04OwgYK%2FN4SeIfbT9c0gSTaqEPkveLOs%2F9Lm7n%2BpFNnzg94nTOYIWLWtDbbwaoxhpTghh6LsEBrJyZpsXFy4cFMDJWrjumoJ0jEjsuF7BBw3NaqNS54ohfSDuPz5Cta83tt2cnedHiqvwXEoc0kUCp8ny0Ssijl95MlJaApnOU%2B1kWLJTJgFNC3ZJgBxcSfrq1TNulPhpuzqUppFseOPiH5tXe6cbZUYltrg18BymAUmt8SMNbps74GOqUBjtvj779mwnETKkgbatTls8hMGQjMdSthNv685UQnTrizzyOBbVHntzVJ%2FG5H9O1BYzLG5gA0Zbq%2FdjeMEGSdjZlqgnJN%2FqBzaOg0qPQQkvkowpjrxMkp%2BNWo55LcPxYY4H76njjs8H4Sl2KG3GiC3d8Jwuj2ulPJX6n0HdID1GvWrfqP3Yyk5bIS7oJw9nK1sKucRdrnTkhYkp4V40hly%2Fdpgzbg&X-Amz-Signature=ccb1dfb095a408f90c33d8f69a1ab2d11a7f2067c0a32be40417142cc0eb35dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5ODNAH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFHQgUXmvNNVdw9ZCf2ov5J8u5b1SuI%2BH184vdVlB5qGAiEA8%2B%2BVVzdsk%2BHn8TBYOUrZaXyUQRFr%2BxGCh%2B57bmMuovYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDvNtTTZ3Biv4jZshircA21ukPQWjicAWpZoNZtIgI9YznpMyOc3ruZEW0l27jkjymaOlpsBjnoQLXBuizsIl0Tv7NI08q5ZqRlkb%2FFe58OAZ06%2B5%2BvSXVVL3Gdd%2FL6arMB92GAx7eh38Jtd5gMqRxAq%2F%2BsHNafmm1r7WD5xKGb98Cy7WM%2F6koOyXU9PX2B0CgnlOVG%2FWCs4GwDKGZjTsRTbA7eZCZ63%2FsjI8cF8FmiJfI%2FYHqUnisjLTvWFqk5e1rD0zgGySTulSpEzhOc0KQb1ReLD8NxvMwyJasV9GL9uO6PRG51eZgAJ5LypVVpOmoleaYU%2FPyYzIXfJD%2BD93ffexkOsUyasXkCi4KSP1zvE6WeDKuM1GWawrS4ePl4oK7WN2kf8kNPSi5gbuMur%2BScOoEcsHl0HS04OwgYK%2FN4SeIfbT9c0gSTaqEPkveLOs%2F9Lm7n%2BpFNnzg94nTOYIWLWtDbbwaoxhpTghh6LsEBrJyZpsXFy4cFMDJWrjumoJ0jEjsuF7BBw3NaqNS54ohfSDuPz5Cta83tt2cnedHiqvwXEoc0kUCp8ny0Ssijl95MlJaApnOU%2B1kWLJTJgFNC3ZJgBxcSfrq1TNulPhpuzqUppFseOPiH5tXe6cbZUYltrg18BymAUmt8SMNbps74GOqUBjtvj779mwnETKkgbatTls8hMGQjMdSthNv685UQnTrizzyOBbVHntzVJ%2FG5H9O1BYzLG5gA0Zbq%2FdjeMEGSdjZlqgnJN%2FqBzaOg0qPQQkvkowpjrxMkp%2BNWo55LcPxYY4H76njjs8H4Sl2KG3GiC3d8Jwuj2ulPJX6n0HdID1GvWrfqP3Yyk5bIS7oJw9nK1sKucRdrnTkhYkp4V40hly%2Fdpgzbg&X-Amz-Signature=bcdbb4074cc836ab0952b66bc9247203e80f1d1a5c9a23221da5694029725a96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5ODNAH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFHQgUXmvNNVdw9ZCf2ov5J8u5b1SuI%2BH184vdVlB5qGAiEA8%2B%2BVVzdsk%2BHn8TBYOUrZaXyUQRFr%2BxGCh%2B57bmMuovYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDvNtTTZ3Biv4jZshircA21ukPQWjicAWpZoNZtIgI9YznpMyOc3ruZEW0l27jkjymaOlpsBjnoQLXBuizsIl0Tv7NI08q5ZqRlkb%2FFe58OAZ06%2B5%2BvSXVVL3Gdd%2FL6arMB92GAx7eh38Jtd5gMqRxAq%2F%2BsHNafmm1r7WD5xKGb98Cy7WM%2F6koOyXU9PX2B0CgnlOVG%2FWCs4GwDKGZjTsRTbA7eZCZ63%2FsjI8cF8FmiJfI%2FYHqUnisjLTvWFqk5e1rD0zgGySTulSpEzhOc0KQb1ReLD8NxvMwyJasV9GL9uO6PRG51eZgAJ5LypVVpOmoleaYU%2FPyYzIXfJD%2BD93ffexkOsUyasXkCi4KSP1zvE6WeDKuM1GWawrS4ePl4oK7WN2kf8kNPSi5gbuMur%2BScOoEcsHl0HS04OwgYK%2FN4SeIfbT9c0gSTaqEPkveLOs%2F9Lm7n%2BpFNnzg94nTOYIWLWtDbbwaoxhpTghh6LsEBrJyZpsXFy4cFMDJWrjumoJ0jEjsuF7BBw3NaqNS54ohfSDuPz5Cta83tt2cnedHiqvwXEoc0kUCp8ny0Ssijl95MlJaApnOU%2B1kWLJTJgFNC3ZJgBxcSfrq1TNulPhpuzqUppFseOPiH5tXe6cbZUYltrg18BymAUmt8SMNbps74GOqUBjtvj779mwnETKkgbatTls8hMGQjMdSthNv685UQnTrizzyOBbVHntzVJ%2FG5H9O1BYzLG5gA0Zbq%2FdjeMEGSdjZlqgnJN%2FqBzaOg0qPQQkvkowpjrxMkp%2BNWo55LcPxYY4H76njjs8H4Sl2KG3GiC3d8Jwuj2ulPJX6n0HdID1GvWrfqP3Yyk5bIS7oJw9nK1sKucRdrnTkhYkp4V40hly%2Fdpgzbg&X-Amz-Signature=339f651b162057aa47abd7aed93af36e503dc34c5ab047e89766a58c586e2307&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5ODNAH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFHQgUXmvNNVdw9ZCf2ov5J8u5b1SuI%2BH184vdVlB5qGAiEA8%2B%2BVVzdsk%2BHn8TBYOUrZaXyUQRFr%2BxGCh%2B57bmMuovYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDvNtTTZ3Biv4jZshircA21ukPQWjicAWpZoNZtIgI9YznpMyOc3ruZEW0l27jkjymaOlpsBjnoQLXBuizsIl0Tv7NI08q5ZqRlkb%2FFe58OAZ06%2B5%2BvSXVVL3Gdd%2FL6arMB92GAx7eh38Jtd5gMqRxAq%2F%2BsHNafmm1r7WD5xKGb98Cy7WM%2F6koOyXU9PX2B0CgnlOVG%2FWCs4GwDKGZjTsRTbA7eZCZ63%2FsjI8cF8FmiJfI%2FYHqUnisjLTvWFqk5e1rD0zgGySTulSpEzhOc0KQb1ReLD8NxvMwyJasV9GL9uO6PRG51eZgAJ5LypVVpOmoleaYU%2FPyYzIXfJD%2BD93ffexkOsUyasXkCi4KSP1zvE6WeDKuM1GWawrS4ePl4oK7WN2kf8kNPSi5gbuMur%2BScOoEcsHl0HS04OwgYK%2FN4SeIfbT9c0gSTaqEPkveLOs%2F9Lm7n%2BpFNnzg94nTOYIWLWtDbbwaoxhpTghh6LsEBrJyZpsXFy4cFMDJWrjumoJ0jEjsuF7BBw3NaqNS54ohfSDuPz5Cta83tt2cnedHiqvwXEoc0kUCp8ny0Ssijl95MlJaApnOU%2B1kWLJTJgFNC3ZJgBxcSfrq1TNulPhpuzqUppFseOPiH5tXe6cbZUYltrg18BymAUmt8SMNbps74GOqUBjtvj779mwnETKkgbatTls8hMGQjMdSthNv685UQnTrizzyOBbVHntzVJ%2FG5H9O1BYzLG5gA0Zbq%2FdjeMEGSdjZlqgnJN%2FqBzaOg0qPQQkvkowpjrxMkp%2BNWo55LcPxYY4H76njjs8H4Sl2KG3GiC3d8Jwuj2ulPJX6n0HdID1GvWrfqP3Yyk5bIS7oJw9nK1sKucRdrnTkhYkp4V40hly%2Fdpgzbg&X-Amz-Signature=893a6b375d6e2254cbd199f7bb2d0754555c8ba3681d5de27ffb8086f3933ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5ODNAH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFHQgUXmvNNVdw9ZCf2ov5J8u5b1SuI%2BH184vdVlB5qGAiEA8%2B%2BVVzdsk%2BHn8TBYOUrZaXyUQRFr%2BxGCh%2B57bmMuovYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDvNtTTZ3Biv4jZshircA21ukPQWjicAWpZoNZtIgI9YznpMyOc3ruZEW0l27jkjymaOlpsBjnoQLXBuizsIl0Tv7NI08q5ZqRlkb%2FFe58OAZ06%2B5%2BvSXVVL3Gdd%2FL6arMB92GAx7eh38Jtd5gMqRxAq%2F%2BsHNafmm1r7WD5xKGb98Cy7WM%2F6koOyXU9PX2B0CgnlOVG%2FWCs4GwDKGZjTsRTbA7eZCZ63%2FsjI8cF8FmiJfI%2FYHqUnisjLTvWFqk5e1rD0zgGySTulSpEzhOc0KQb1ReLD8NxvMwyJasV9GL9uO6PRG51eZgAJ5LypVVpOmoleaYU%2FPyYzIXfJD%2BD93ffexkOsUyasXkCi4KSP1zvE6WeDKuM1GWawrS4ePl4oK7WN2kf8kNPSi5gbuMur%2BScOoEcsHl0HS04OwgYK%2FN4SeIfbT9c0gSTaqEPkveLOs%2F9Lm7n%2BpFNnzg94nTOYIWLWtDbbwaoxhpTghh6LsEBrJyZpsXFy4cFMDJWrjumoJ0jEjsuF7BBw3NaqNS54ohfSDuPz5Cta83tt2cnedHiqvwXEoc0kUCp8ny0Ssijl95MlJaApnOU%2B1kWLJTJgFNC3ZJgBxcSfrq1TNulPhpuzqUppFseOPiH5tXe6cbZUYltrg18BymAUmt8SMNbps74GOqUBjtvj779mwnETKkgbatTls8hMGQjMdSthNv685UQnTrizzyOBbVHntzVJ%2FG5H9O1BYzLG5gA0Zbq%2FdjeMEGSdjZlqgnJN%2FqBzaOg0qPQQkvkowpjrxMkp%2BNWo55LcPxYY4H76njjs8H4Sl2KG3GiC3d8Jwuj2ulPJX6n0HdID1GvWrfqP3Yyk5bIS7oJw9nK1sKucRdrnTkhYkp4V40hly%2Fdpgzbg&X-Amz-Signature=51c3baa9eca492c59ee5aee3c344b841cc44da4b30f4482ebb179784f9f43de0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5ODNAH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFHQgUXmvNNVdw9ZCf2ov5J8u5b1SuI%2BH184vdVlB5qGAiEA8%2B%2BVVzdsk%2BHn8TBYOUrZaXyUQRFr%2BxGCh%2B57bmMuovYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDvNtTTZ3Biv4jZshircA21ukPQWjicAWpZoNZtIgI9YznpMyOc3ruZEW0l27jkjymaOlpsBjnoQLXBuizsIl0Tv7NI08q5ZqRlkb%2FFe58OAZ06%2B5%2BvSXVVL3Gdd%2FL6arMB92GAx7eh38Jtd5gMqRxAq%2F%2BsHNafmm1r7WD5xKGb98Cy7WM%2F6koOyXU9PX2B0CgnlOVG%2FWCs4GwDKGZjTsRTbA7eZCZ63%2FsjI8cF8FmiJfI%2FYHqUnisjLTvWFqk5e1rD0zgGySTulSpEzhOc0KQb1ReLD8NxvMwyJasV9GL9uO6PRG51eZgAJ5LypVVpOmoleaYU%2FPyYzIXfJD%2BD93ffexkOsUyasXkCi4KSP1zvE6WeDKuM1GWawrS4ePl4oK7WN2kf8kNPSi5gbuMur%2BScOoEcsHl0HS04OwgYK%2FN4SeIfbT9c0gSTaqEPkveLOs%2F9Lm7n%2BpFNnzg94nTOYIWLWtDbbwaoxhpTghh6LsEBrJyZpsXFy4cFMDJWrjumoJ0jEjsuF7BBw3NaqNS54ohfSDuPz5Cta83tt2cnedHiqvwXEoc0kUCp8ny0Ssijl95MlJaApnOU%2B1kWLJTJgFNC3ZJgBxcSfrq1TNulPhpuzqUppFseOPiH5tXe6cbZUYltrg18BymAUmt8SMNbps74GOqUBjtvj779mwnETKkgbatTls8hMGQjMdSthNv685UQnTrizzyOBbVHntzVJ%2FG5H9O1BYzLG5gA0Zbq%2FdjeMEGSdjZlqgnJN%2FqBzaOg0qPQQkvkowpjrxMkp%2BNWo55LcPxYY4H76njjs8H4Sl2KG3GiC3d8Jwuj2ulPJX6n0HdID1GvWrfqP3Yyk5bIS7oJw9nK1sKucRdrnTkhYkp4V40hly%2Fdpgzbg&X-Amz-Signature=8c1172f94fbeeb9c27b8957ab83a1e38808f7fce0d677704bd38c387a6dbfb17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
