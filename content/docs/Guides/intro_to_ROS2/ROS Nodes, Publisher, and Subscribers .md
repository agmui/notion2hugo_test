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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMY6X6Z%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfqNULwYI0lEHokukSmLt%2FDNDDHaa3XJ1ObzILJKlcyAiEApl3MC6xqv1ivZSBx2xi9JVgXF4Av%2FszpD13k%2FwpdnyIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAsH7SQomh5rGcf%2BSrcA71iHOcDueFylUkjG6R4a9HZ1EEWu6tMDHTrj7EW5Dl2aKPsNJLEEjKbckh5Pb6wh17OFTHqbQVnwtKfLiCHW07pfyq96do262KIu6CcKPgzj%2BcTI6jJFGNWi3c4fAcd17G0qWNx%2BYsIQcZc%2BhA6LfSlybseqI0DWA9EaXY2fu7emBmTHP5VMPHs0Yie%2F7OEF9ks3DbCAzJd7fE9VSFxCWzDYwn38AXANFYNAzONA3%2BWkVGmu6ty0zOMhpObaOL2tv9Ysp4OQrRzeETSvd8mjl5MzV9yqICsLlm%2BL6T%2F%2F0i%2F15hXULtVvbswoj7zNeXCgeH4DvP3CZF555QHR0xrMb4uHJENFEKXaYJWHFjvtV7w%2FlwJL%2B1iV4RwEc2MuRI8Q9%2FCmQP%2FsA922PRtjvs9jsfveuj60GbE%2FOXwvXHqPH3RKhTJ%2Fsmw3FbC6Cw98umn2LMAyU4FENCrSnRN2OWq1mndcRzRBxTCDO6xR7iuA%2FGqeclc%2B1yVFcZfsErbc9SqIgwZ73t7qbkZ4kLxdj%2FVuO4Cm%2FFfhfT4YfDDZCrtC%2Fi4RtXlWqu6620EMXoikfis43msQorXSLBDuAR%2BKORWOmHS9D%2Fl9SvY4r1RNR07H%2Ft0dG%2FVVaS304JsOKhfMJmv8r8GOqUBGJFcootFjZOJC62l3CZNguMjbUCrGrsjv3YG1j6ijMlIfaaPJH%2FsvNIt%2F6ajMCOtED5JEadTTYul7Ki7DgIiigk1vmpdyIBbKhC6mCPn3XDsjDvMZuDfhDjX1HaB0Wd80HqjnZP4Te5N2ohMnp8ipqKJij3sNx20TZl1GBYEsf%2BrcN5DRjvcZka%2BZvL8aKgUByYSRCbMlv4dumTr4YzaJu1ag0Tc&X-Amz-Signature=fc3d77a22746b5e60d7710ed409f93c5782a162c0c2ba6637817a0d4f7c54332&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMY6X6Z%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfqNULwYI0lEHokukSmLt%2FDNDDHaa3XJ1ObzILJKlcyAiEApl3MC6xqv1ivZSBx2xi9JVgXF4Av%2FszpD13k%2FwpdnyIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAsH7SQomh5rGcf%2BSrcA71iHOcDueFylUkjG6R4a9HZ1EEWu6tMDHTrj7EW5Dl2aKPsNJLEEjKbckh5Pb6wh17OFTHqbQVnwtKfLiCHW07pfyq96do262KIu6CcKPgzj%2BcTI6jJFGNWi3c4fAcd17G0qWNx%2BYsIQcZc%2BhA6LfSlybseqI0DWA9EaXY2fu7emBmTHP5VMPHs0Yie%2F7OEF9ks3DbCAzJd7fE9VSFxCWzDYwn38AXANFYNAzONA3%2BWkVGmu6ty0zOMhpObaOL2tv9Ysp4OQrRzeETSvd8mjl5MzV9yqICsLlm%2BL6T%2F%2F0i%2F15hXULtVvbswoj7zNeXCgeH4DvP3CZF555QHR0xrMb4uHJENFEKXaYJWHFjvtV7w%2FlwJL%2B1iV4RwEc2MuRI8Q9%2FCmQP%2FsA922PRtjvs9jsfveuj60GbE%2FOXwvXHqPH3RKhTJ%2Fsmw3FbC6Cw98umn2LMAyU4FENCrSnRN2OWq1mndcRzRBxTCDO6xR7iuA%2FGqeclc%2B1yVFcZfsErbc9SqIgwZ73t7qbkZ4kLxdj%2FVuO4Cm%2FFfhfT4YfDDZCrtC%2Fi4RtXlWqu6620EMXoikfis43msQorXSLBDuAR%2BKORWOmHS9D%2Fl9SvY4r1RNR07H%2Ft0dG%2FVVaS304JsOKhfMJmv8r8GOqUBGJFcootFjZOJC62l3CZNguMjbUCrGrsjv3YG1j6ijMlIfaaPJH%2FsvNIt%2F6ajMCOtED5JEadTTYul7Ki7DgIiigk1vmpdyIBbKhC6mCPn3XDsjDvMZuDfhDjX1HaB0Wd80HqjnZP4Te5N2ohMnp8ipqKJij3sNx20TZl1GBYEsf%2BrcN5DRjvcZka%2BZvL8aKgUByYSRCbMlv4dumTr4YzaJu1ag0Tc&X-Amz-Signature=16a9f3845230d97c5cec1bff2fcb2741d250b3a02702bbb5b4cdbb432bc8c6da&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMY6X6Z%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfqNULwYI0lEHokukSmLt%2FDNDDHaa3XJ1ObzILJKlcyAiEApl3MC6xqv1ivZSBx2xi9JVgXF4Av%2FszpD13k%2FwpdnyIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAsH7SQomh5rGcf%2BSrcA71iHOcDueFylUkjG6R4a9HZ1EEWu6tMDHTrj7EW5Dl2aKPsNJLEEjKbckh5Pb6wh17OFTHqbQVnwtKfLiCHW07pfyq96do262KIu6CcKPgzj%2BcTI6jJFGNWi3c4fAcd17G0qWNx%2BYsIQcZc%2BhA6LfSlybseqI0DWA9EaXY2fu7emBmTHP5VMPHs0Yie%2F7OEF9ks3DbCAzJd7fE9VSFxCWzDYwn38AXANFYNAzONA3%2BWkVGmu6ty0zOMhpObaOL2tv9Ysp4OQrRzeETSvd8mjl5MzV9yqICsLlm%2BL6T%2F%2F0i%2F15hXULtVvbswoj7zNeXCgeH4DvP3CZF555QHR0xrMb4uHJENFEKXaYJWHFjvtV7w%2FlwJL%2B1iV4RwEc2MuRI8Q9%2FCmQP%2FsA922PRtjvs9jsfveuj60GbE%2FOXwvXHqPH3RKhTJ%2Fsmw3FbC6Cw98umn2LMAyU4FENCrSnRN2OWq1mndcRzRBxTCDO6xR7iuA%2FGqeclc%2B1yVFcZfsErbc9SqIgwZ73t7qbkZ4kLxdj%2FVuO4Cm%2FFfhfT4YfDDZCrtC%2Fi4RtXlWqu6620EMXoikfis43msQorXSLBDuAR%2BKORWOmHS9D%2Fl9SvY4r1RNR07H%2Ft0dG%2FVVaS304JsOKhfMJmv8r8GOqUBGJFcootFjZOJC62l3CZNguMjbUCrGrsjv3YG1j6ijMlIfaaPJH%2FsvNIt%2F6ajMCOtED5JEadTTYul7Ki7DgIiigk1vmpdyIBbKhC6mCPn3XDsjDvMZuDfhDjX1HaB0Wd80HqjnZP4Te5N2ohMnp8ipqKJij3sNx20TZl1GBYEsf%2BrcN5DRjvcZka%2BZvL8aKgUByYSRCbMlv4dumTr4YzaJu1ag0Tc&X-Amz-Signature=4300ceeb1e7d643d0a5bb3051a6f506d26be67b3181919ee885b5fdce3bf3d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMY6X6Z%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfqNULwYI0lEHokukSmLt%2FDNDDHaa3XJ1ObzILJKlcyAiEApl3MC6xqv1ivZSBx2xi9JVgXF4Av%2FszpD13k%2FwpdnyIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAsH7SQomh5rGcf%2BSrcA71iHOcDueFylUkjG6R4a9HZ1EEWu6tMDHTrj7EW5Dl2aKPsNJLEEjKbckh5Pb6wh17OFTHqbQVnwtKfLiCHW07pfyq96do262KIu6CcKPgzj%2BcTI6jJFGNWi3c4fAcd17G0qWNx%2BYsIQcZc%2BhA6LfSlybseqI0DWA9EaXY2fu7emBmTHP5VMPHs0Yie%2F7OEF9ks3DbCAzJd7fE9VSFxCWzDYwn38AXANFYNAzONA3%2BWkVGmu6ty0zOMhpObaOL2tv9Ysp4OQrRzeETSvd8mjl5MzV9yqICsLlm%2BL6T%2F%2F0i%2F15hXULtVvbswoj7zNeXCgeH4DvP3CZF555QHR0xrMb4uHJENFEKXaYJWHFjvtV7w%2FlwJL%2B1iV4RwEc2MuRI8Q9%2FCmQP%2FsA922PRtjvs9jsfveuj60GbE%2FOXwvXHqPH3RKhTJ%2Fsmw3FbC6Cw98umn2LMAyU4FENCrSnRN2OWq1mndcRzRBxTCDO6xR7iuA%2FGqeclc%2B1yVFcZfsErbc9SqIgwZ73t7qbkZ4kLxdj%2FVuO4Cm%2FFfhfT4YfDDZCrtC%2Fi4RtXlWqu6620EMXoikfis43msQorXSLBDuAR%2BKORWOmHS9D%2Fl9SvY4r1RNR07H%2Ft0dG%2FVVaS304JsOKhfMJmv8r8GOqUBGJFcootFjZOJC62l3CZNguMjbUCrGrsjv3YG1j6ijMlIfaaPJH%2FsvNIt%2F6ajMCOtED5JEadTTYul7Ki7DgIiigk1vmpdyIBbKhC6mCPn3XDsjDvMZuDfhDjX1HaB0Wd80HqjnZP4Te5N2ohMnp8ipqKJij3sNx20TZl1GBYEsf%2BrcN5DRjvcZka%2BZvL8aKgUByYSRCbMlv4dumTr4YzaJu1ag0Tc&X-Amz-Signature=706d8c658bdc325cc2ea80dba8f89e2efd29376e52ac8759e4d8cd9487ad3acf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMY6X6Z%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfqNULwYI0lEHokukSmLt%2FDNDDHaa3XJ1ObzILJKlcyAiEApl3MC6xqv1ivZSBx2xi9JVgXF4Av%2FszpD13k%2FwpdnyIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAsH7SQomh5rGcf%2BSrcA71iHOcDueFylUkjG6R4a9HZ1EEWu6tMDHTrj7EW5Dl2aKPsNJLEEjKbckh5Pb6wh17OFTHqbQVnwtKfLiCHW07pfyq96do262KIu6CcKPgzj%2BcTI6jJFGNWi3c4fAcd17G0qWNx%2BYsIQcZc%2BhA6LfSlybseqI0DWA9EaXY2fu7emBmTHP5VMPHs0Yie%2F7OEF9ks3DbCAzJd7fE9VSFxCWzDYwn38AXANFYNAzONA3%2BWkVGmu6ty0zOMhpObaOL2tv9Ysp4OQrRzeETSvd8mjl5MzV9yqICsLlm%2BL6T%2F%2F0i%2F15hXULtVvbswoj7zNeXCgeH4DvP3CZF555QHR0xrMb4uHJENFEKXaYJWHFjvtV7w%2FlwJL%2B1iV4RwEc2MuRI8Q9%2FCmQP%2FsA922PRtjvs9jsfveuj60GbE%2FOXwvXHqPH3RKhTJ%2Fsmw3FbC6Cw98umn2LMAyU4FENCrSnRN2OWq1mndcRzRBxTCDO6xR7iuA%2FGqeclc%2B1yVFcZfsErbc9SqIgwZ73t7qbkZ4kLxdj%2FVuO4Cm%2FFfhfT4YfDDZCrtC%2Fi4RtXlWqu6620EMXoikfis43msQorXSLBDuAR%2BKORWOmHS9D%2Fl9SvY4r1RNR07H%2Ft0dG%2FVVaS304JsOKhfMJmv8r8GOqUBGJFcootFjZOJC62l3CZNguMjbUCrGrsjv3YG1j6ijMlIfaaPJH%2FsvNIt%2F6ajMCOtED5JEadTTYul7Ki7DgIiigk1vmpdyIBbKhC6mCPn3XDsjDvMZuDfhDjX1HaB0Wd80HqjnZP4Te5N2ohMnp8ipqKJij3sNx20TZl1GBYEsf%2BrcN5DRjvcZka%2BZvL8aKgUByYSRCbMlv4dumTr4YzaJu1ag0Tc&X-Amz-Signature=36151117e04518fd1792e8be63762b24373c62b285448bdb9fb081f6b577922c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMY6X6Z%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfqNULwYI0lEHokukSmLt%2FDNDDHaa3XJ1ObzILJKlcyAiEApl3MC6xqv1ivZSBx2xi9JVgXF4Av%2FszpD13k%2FwpdnyIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAsH7SQomh5rGcf%2BSrcA71iHOcDueFylUkjG6R4a9HZ1EEWu6tMDHTrj7EW5Dl2aKPsNJLEEjKbckh5Pb6wh17OFTHqbQVnwtKfLiCHW07pfyq96do262KIu6CcKPgzj%2BcTI6jJFGNWi3c4fAcd17G0qWNx%2BYsIQcZc%2BhA6LfSlybseqI0DWA9EaXY2fu7emBmTHP5VMPHs0Yie%2F7OEF9ks3DbCAzJd7fE9VSFxCWzDYwn38AXANFYNAzONA3%2BWkVGmu6ty0zOMhpObaOL2tv9Ysp4OQrRzeETSvd8mjl5MzV9yqICsLlm%2BL6T%2F%2F0i%2F15hXULtVvbswoj7zNeXCgeH4DvP3CZF555QHR0xrMb4uHJENFEKXaYJWHFjvtV7w%2FlwJL%2B1iV4RwEc2MuRI8Q9%2FCmQP%2FsA922PRtjvs9jsfveuj60GbE%2FOXwvXHqPH3RKhTJ%2Fsmw3FbC6Cw98umn2LMAyU4FENCrSnRN2OWq1mndcRzRBxTCDO6xR7iuA%2FGqeclc%2B1yVFcZfsErbc9SqIgwZ73t7qbkZ4kLxdj%2FVuO4Cm%2FFfhfT4YfDDZCrtC%2Fi4RtXlWqu6620EMXoikfis43msQorXSLBDuAR%2BKORWOmHS9D%2Fl9SvY4r1RNR07H%2Ft0dG%2FVVaS304JsOKhfMJmv8r8GOqUBGJFcootFjZOJC62l3CZNguMjbUCrGrsjv3YG1j6ijMlIfaaPJH%2FsvNIt%2F6ajMCOtED5JEadTTYul7Ki7DgIiigk1vmpdyIBbKhC6mCPn3XDsjDvMZuDfhDjX1HaB0Wd80HqjnZP4Te5N2ohMnp8ipqKJij3sNx20TZl1GBYEsf%2BrcN5DRjvcZka%2BZvL8aKgUByYSRCbMlv4dumTr4YzaJu1ag0Tc&X-Amz-Signature=207a794027a8fa5f4de1b64490242b046283fdbf3aae7f0cd383d744398b0228&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMY6X6Z%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfqNULwYI0lEHokukSmLt%2FDNDDHaa3XJ1ObzILJKlcyAiEApl3MC6xqv1ivZSBx2xi9JVgXF4Av%2FszpD13k%2FwpdnyIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAsH7SQomh5rGcf%2BSrcA71iHOcDueFylUkjG6R4a9HZ1EEWu6tMDHTrj7EW5Dl2aKPsNJLEEjKbckh5Pb6wh17OFTHqbQVnwtKfLiCHW07pfyq96do262KIu6CcKPgzj%2BcTI6jJFGNWi3c4fAcd17G0qWNx%2BYsIQcZc%2BhA6LfSlybseqI0DWA9EaXY2fu7emBmTHP5VMPHs0Yie%2F7OEF9ks3DbCAzJd7fE9VSFxCWzDYwn38AXANFYNAzONA3%2BWkVGmu6ty0zOMhpObaOL2tv9Ysp4OQrRzeETSvd8mjl5MzV9yqICsLlm%2BL6T%2F%2F0i%2F15hXULtVvbswoj7zNeXCgeH4DvP3CZF555QHR0xrMb4uHJENFEKXaYJWHFjvtV7w%2FlwJL%2B1iV4RwEc2MuRI8Q9%2FCmQP%2FsA922PRtjvs9jsfveuj60GbE%2FOXwvXHqPH3RKhTJ%2Fsmw3FbC6Cw98umn2LMAyU4FENCrSnRN2OWq1mndcRzRBxTCDO6xR7iuA%2FGqeclc%2B1yVFcZfsErbc9SqIgwZ73t7qbkZ4kLxdj%2FVuO4Cm%2FFfhfT4YfDDZCrtC%2Fi4RtXlWqu6620EMXoikfis43msQorXSLBDuAR%2BKORWOmHS9D%2Fl9SvY4r1RNR07H%2Ft0dG%2FVVaS304JsOKhfMJmv8r8GOqUBGJFcootFjZOJC62l3CZNguMjbUCrGrsjv3YG1j6ijMlIfaaPJH%2FsvNIt%2F6ajMCOtED5JEadTTYul7Ki7DgIiigk1vmpdyIBbKhC6mCPn3XDsjDvMZuDfhDjX1HaB0Wd80HqjnZP4Te5N2ohMnp8ipqKJij3sNx20TZl1GBYEsf%2BrcN5DRjvcZka%2BZvL8aKgUByYSRCbMlv4dumTr4YzaJu1ag0Tc&X-Amz-Signature=4bbc012858d6b7522e9cadcff3ec16e015566d64be0066f7dd3741becbb31c40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMY6X6Z%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfqNULwYI0lEHokukSmLt%2FDNDDHaa3XJ1ObzILJKlcyAiEApl3MC6xqv1ivZSBx2xi9JVgXF4Av%2FszpD13k%2FwpdnyIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAsH7SQomh5rGcf%2BSrcA71iHOcDueFylUkjG6R4a9HZ1EEWu6tMDHTrj7EW5Dl2aKPsNJLEEjKbckh5Pb6wh17OFTHqbQVnwtKfLiCHW07pfyq96do262KIu6CcKPgzj%2BcTI6jJFGNWi3c4fAcd17G0qWNx%2BYsIQcZc%2BhA6LfSlybseqI0DWA9EaXY2fu7emBmTHP5VMPHs0Yie%2F7OEF9ks3DbCAzJd7fE9VSFxCWzDYwn38AXANFYNAzONA3%2BWkVGmu6ty0zOMhpObaOL2tv9Ysp4OQrRzeETSvd8mjl5MzV9yqICsLlm%2BL6T%2F%2F0i%2F15hXULtVvbswoj7zNeXCgeH4DvP3CZF555QHR0xrMb4uHJENFEKXaYJWHFjvtV7w%2FlwJL%2B1iV4RwEc2MuRI8Q9%2FCmQP%2FsA922PRtjvs9jsfveuj60GbE%2FOXwvXHqPH3RKhTJ%2Fsmw3FbC6Cw98umn2LMAyU4FENCrSnRN2OWq1mndcRzRBxTCDO6xR7iuA%2FGqeclc%2B1yVFcZfsErbc9SqIgwZ73t7qbkZ4kLxdj%2FVuO4Cm%2FFfhfT4YfDDZCrtC%2Fi4RtXlWqu6620EMXoikfis43msQorXSLBDuAR%2BKORWOmHS9D%2Fl9SvY4r1RNR07H%2Ft0dG%2FVVaS304JsOKhfMJmv8r8GOqUBGJFcootFjZOJC62l3CZNguMjbUCrGrsjv3YG1j6ijMlIfaaPJH%2FsvNIt%2F6ajMCOtED5JEadTTYul7Ki7DgIiigk1vmpdyIBbKhC6mCPn3XDsjDvMZuDfhDjX1HaB0Wd80HqjnZP4Te5N2ohMnp8ipqKJij3sNx20TZl1GBYEsf%2BrcN5DRjvcZka%2BZvL8aKgUByYSRCbMlv4dumTr4YzaJu1ag0Tc&X-Amz-Signature=836a495dfc209c48d2c83705ad5bf1efc6c19e4ddd037ddb8e85ff2a3ff8332f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
