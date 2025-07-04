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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LYS3K4G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDfIvma%2BKgll5wLZDBZPdpE7PMY7DyjzXA9mxXA1jG4%2BQIgOngex1SI9bKPPMl19z6cW1SCVmeHE%2FandVZhDH%2Bq7dYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB1ExWsfdfGj24JnJCrcA0LDpvKESgd7u0OppjmEJVXyrZDe%2BIvykEcfnxgObf111E5lifWZg0SjPq5zrd5zGIaHNmz%2FFLcXB24EqnabPZ344uc8u9wJDfbr9ICjTWyILTb0dbQ2DRC8SHXAtaL8cUu68jSrWfykrJNUXrj6X1cBa%2BCsJ%2BKFFUkoGFCPQToSD4Dcv%2F4hddWJrT6YK0Sed874CVl6H6FAFyHZK%2FTY64qs0nbyn%2FuIwTAvgbtvILLC51o1HjzIRzOBCVMqJUEiMB8oq49Hqmcg126FkyVOqNdXSWUt66aSF8GPw8UTuwgfCWRIGveYLkgg1jnZa6nyEJhognATwdkEqs4SxJgQZbEyj9IM6%2BGZc0njooN%2Fb79HeDNQgA53YwGIkjXgVL3eqbiMsAnNpr%2FwcE10xkmBdhALOxFiDjjoyQet2eMUpnAxxb71G2hXCT6MRYMZcZbEl%2Bn7ji7rG5wcB94b0APIBXJuUOPeHtXzuOr%2Fi%2B3LXSLC3p1CTcr57huHR9aSFhEuEZWkg%2BD39jHAeAdv2svR%2BTR%2Fw8OOHQ%2Bf6ju1JMER6Mdw5xUM%2BCeOMmo%2Bih24Pwibbjmyk2pcuXPuPMxAptaiFYVzw9z8R0itPvfKyebxHvt8yyZrLWQ0%2BN4pwV%2FCMLLsn8MGOqUBv1CStQ8YvRiM8O21Yo4jbtvVBeQj1YXy1L1ih8rj78TE5OF%2FrxZL%2F7cAIChT7xc9ZPa65Mmx2KtJU%2BwGWa825734uO%2FO8J%2F5FsjoUtXVzPejNZGJs%2BHU4jvNX4PNvx2uYdv%2FwfSC5dy%2F2cVPv1UIkc99y4uPwZt0PYntKnZJGwNUOsPUcXtr%2FQLkiIzmI6OxcrtZ3b5%2BZmM9x2sp%2FbhWvmcBFF6V&X-Amz-Signature=1a9e625cca696a6b41d073e6a48d3357d0a170139d041f838ee1d914da4b6eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LYS3K4G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDfIvma%2BKgll5wLZDBZPdpE7PMY7DyjzXA9mxXA1jG4%2BQIgOngex1SI9bKPPMl19z6cW1SCVmeHE%2FandVZhDH%2Bq7dYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB1ExWsfdfGj24JnJCrcA0LDpvKESgd7u0OppjmEJVXyrZDe%2BIvykEcfnxgObf111E5lifWZg0SjPq5zrd5zGIaHNmz%2FFLcXB24EqnabPZ344uc8u9wJDfbr9ICjTWyILTb0dbQ2DRC8SHXAtaL8cUu68jSrWfykrJNUXrj6X1cBa%2BCsJ%2BKFFUkoGFCPQToSD4Dcv%2F4hddWJrT6YK0Sed874CVl6H6FAFyHZK%2FTY64qs0nbyn%2FuIwTAvgbtvILLC51o1HjzIRzOBCVMqJUEiMB8oq49Hqmcg126FkyVOqNdXSWUt66aSF8GPw8UTuwgfCWRIGveYLkgg1jnZa6nyEJhognATwdkEqs4SxJgQZbEyj9IM6%2BGZc0njooN%2Fb79HeDNQgA53YwGIkjXgVL3eqbiMsAnNpr%2FwcE10xkmBdhALOxFiDjjoyQet2eMUpnAxxb71G2hXCT6MRYMZcZbEl%2Bn7ji7rG5wcB94b0APIBXJuUOPeHtXzuOr%2Fi%2B3LXSLC3p1CTcr57huHR9aSFhEuEZWkg%2BD39jHAeAdv2svR%2BTR%2Fw8OOHQ%2Bf6ju1JMER6Mdw5xUM%2BCeOMmo%2Bih24Pwibbjmyk2pcuXPuPMxAptaiFYVzw9z8R0itPvfKyebxHvt8yyZrLWQ0%2BN4pwV%2FCMLLsn8MGOqUBv1CStQ8YvRiM8O21Yo4jbtvVBeQj1YXy1L1ih8rj78TE5OF%2FrxZL%2F7cAIChT7xc9ZPa65Mmx2KtJU%2BwGWa825734uO%2FO8J%2F5FsjoUtXVzPejNZGJs%2BHU4jvNX4PNvx2uYdv%2FwfSC5dy%2F2cVPv1UIkc99y4uPwZt0PYntKnZJGwNUOsPUcXtr%2FQLkiIzmI6OxcrtZ3b5%2BZmM9x2sp%2FbhWvmcBFF6V&X-Amz-Signature=658c1ab6f76dd987a719511af8bda5acf19de0bd4be66cc4110c6db6bef2c1e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LYS3K4G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDfIvma%2BKgll5wLZDBZPdpE7PMY7DyjzXA9mxXA1jG4%2BQIgOngex1SI9bKPPMl19z6cW1SCVmeHE%2FandVZhDH%2Bq7dYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB1ExWsfdfGj24JnJCrcA0LDpvKESgd7u0OppjmEJVXyrZDe%2BIvykEcfnxgObf111E5lifWZg0SjPq5zrd5zGIaHNmz%2FFLcXB24EqnabPZ344uc8u9wJDfbr9ICjTWyILTb0dbQ2DRC8SHXAtaL8cUu68jSrWfykrJNUXrj6X1cBa%2BCsJ%2BKFFUkoGFCPQToSD4Dcv%2F4hddWJrT6YK0Sed874CVl6H6FAFyHZK%2FTY64qs0nbyn%2FuIwTAvgbtvILLC51o1HjzIRzOBCVMqJUEiMB8oq49Hqmcg126FkyVOqNdXSWUt66aSF8GPw8UTuwgfCWRIGveYLkgg1jnZa6nyEJhognATwdkEqs4SxJgQZbEyj9IM6%2BGZc0njooN%2Fb79HeDNQgA53YwGIkjXgVL3eqbiMsAnNpr%2FwcE10xkmBdhALOxFiDjjoyQet2eMUpnAxxb71G2hXCT6MRYMZcZbEl%2Bn7ji7rG5wcB94b0APIBXJuUOPeHtXzuOr%2Fi%2B3LXSLC3p1CTcr57huHR9aSFhEuEZWkg%2BD39jHAeAdv2svR%2BTR%2Fw8OOHQ%2Bf6ju1JMER6Mdw5xUM%2BCeOMmo%2Bih24Pwibbjmyk2pcuXPuPMxAptaiFYVzw9z8R0itPvfKyebxHvt8yyZrLWQ0%2BN4pwV%2FCMLLsn8MGOqUBv1CStQ8YvRiM8O21Yo4jbtvVBeQj1YXy1L1ih8rj78TE5OF%2FrxZL%2F7cAIChT7xc9ZPa65Mmx2KtJU%2BwGWa825734uO%2FO8J%2F5FsjoUtXVzPejNZGJs%2BHU4jvNX4PNvx2uYdv%2FwfSC5dy%2F2cVPv1UIkc99y4uPwZt0PYntKnZJGwNUOsPUcXtr%2FQLkiIzmI6OxcrtZ3b5%2BZmM9x2sp%2FbhWvmcBFF6V&X-Amz-Signature=b7a2557d4ec14c1eaebb051ebd1be4995975b05780e3552e00d108ee62e442f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LYS3K4G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDfIvma%2BKgll5wLZDBZPdpE7PMY7DyjzXA9mxXA1jG4%2BQIgOngex1SI9bKPPMl19z6cW1SCVmeHE%2FandVZhDH%2Bq7dYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB1ExWsfdfGj24JnJCrcA0LDpvKESgd7u0OppjmEJVXyrZDe%2BIvykEcfnxgObf111E5lifWZg0SjPq5zrd5zGIaHNmz%2FFLcXB24EqnabPZ344uc8u9wJDfbr9ICjTWyILTb0dbQ2DRC8SHXAtaL8cUu68jSrWfykrJNUXrj6X1cBa%2BCsJ%2BKFFUkoGFCPQToSD4Dcv%2F4hddWJrT6YK0Sed874CVl6H6FAFyHZK%2FTY64qs0nbyn%2FuIwTAvgbtvILLC51o1HjzIRzOBCVMqJUEiMB8oq49Hqmcg126FkyVOqNdXSWUt66aSF8GPw8UTuwgfCWRIGveYLkgg1jnZa6nyEJhognATwdkEqs4SxJgQZbEyj9IM6%2BGZc0njooN%2Fb79HeDNQgA53YwGIkjXgVL3eqbiMsAnNpr%2FwcE10xkmBdhALOxFiDjjoyQet2eMUpnAxxb71G2hXCT6MRYMZcZbEl%2Bn7ji7rG5wcB94b0APIBXJuUOPeHtXzuOr%2Fi%2B3LXSLC3p1CTcr57huHR9aSFhEuEZWkg%2BD39jHAeAdv2svR%2BTR%2Fw8OOHQ%2Bf6ju1JMER6Mdw5xUM%2BCeOMmo%2Bih24Pwibbjmyk2pcuXPuPMxAptaiFYVzw9z8R0itPvfKyebxHvt8yyZrLWQ0%2BN4pwV%2FCMLLsn8MGOqUBv1CStQ8YvRiM8O21Yo4jbtvVBeQj1YXy1L1ih8rj78TE5OF%2FrxZL%2F7cAIChT7xc9ZPa65Mmx2KtJU%2BwGWa825734uO%2FO8J%2F5FsjoUtXVzPejNZGJs%2BHU4jvNX4PNvx2uYdv%2FwfSC5dy%2F2cVPv1UIkc99y4uPwZt0PYntKnZJGwNUOsPUcXtr%2FQLkiIzmI6OxcrtZ3b5%2BZmM9x2sp%2FbhWvmcBFF6V&X-Amz-Signature=0b3e8979dd658324332001fe6a27401c67b1ce11f517c2f72422cbfa056d1d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LYS3K4G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDfIvma%2BKgll5wLZDBZPdpE7PMY7DyjzXA9mxXA1jG4%2BQIgOngex1SI9bKPPMl19z6cW1SCVmeHE%2FandVZhDH%2Bq7dYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB1ExWsfdfGj24JnJCrcA0LDpvKESgd7u0OppjmEJVXyrZDe%2BIvykEcfnxgObf111E5lifWZg0SjPq5zrd5zGIaHNmz%2FFLcXB24EqnabPZ344uc8u9wJDfbr9ICjTWyILTb0dbQ2DRC8SHXAtaL8cUu68jSrWfykrJNUXrj6X1cBa%2BCsJ%2BKFFUkoGFCPQToSD4Dcv%2F4hddWJrT6YK0Sed874CVl6H6FAFyHZK%2FTY64qs0nbyn%2FuIwTAvgbtvILLC51o1HjzIRzOBCVMqJUEiMB8oq49Hqmcg126FkyVOqNdXSWUt66aSF8GPw8UTuwgfCWRIGveYLkgg1jnZa6nyEJhognATwdkEqs4SxJgQZbEyj9IM6%2BGZc0njooN%2Fb79HeDNQgA53YwGIkjXgVL3eqbiMsAnNpr%2FwcE10xkmBdhALOxFiDjjoyQet2eMUpnAxxb71G2hXCT6MRYMZcZbEl%2Bn7ji7rG5wcB94b0APIBXJuUOPeHtXzuOr%2Fi%2B3LXSLC3p1CTcr57huHR9aSFhEuEZWkg%2BD39jHAeAdv2svR%2BTR%2Fw8OOHQ%2Bf6ju1JMER6Mdw5xUM%2BCeOMmo%2Bih24Pwibbjmyk2pcuXPuPMxAptaiFYVzw9z8R0itPvfKyebxHvt8yyZrLWQ0%2BN4pwV%2FCMLLsn8MGOqUBv1CStQ8YvRiM8O21Yo4jbtvVBeQj1YXy1L1ih8rj78TE5OF%2FrxZL%2F7cAIChT7xc9ZPa65Mmx2KtJU%2BwGWa825734uO%2FO8J%2F5FsjoUtXVzPejNZGJs%2BHU4jvNX4PNvx2uYdv%2FwfSC5dy%2F2cVPv1UIkc99y4uPwZt0PYntKnZJGwNUOsPUcXtr%2FQLkiIzmI6OxcrtZ3b5%2BZmM9x2sp%2FbhWvmcBFF6V&X-Amz-Signature=78a60c34f7470b7389dce0230d7b4c069361255dc48cfeec50e0a86aa8e5afc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LYS3K4G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDfIvma%2BKgll5wLZDBZPdpE7PMY7DyjzXA9mxXA1jG4%2BQIgOngex1SI9bKPPMl19z6cW1SCVmeHE%2FandVZhDH%2Bq7dYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB1ExWsfdfGj24JnJCrcA0LDpvKESgd7u0OppjmEJVXyrZDe%2BIvykEcfnxgObf111E5lifWZg0SjPq5zrd5zGIaHNmz%2FFLcXB24EqnabPZ344uc8u9wJDfbr9ICjTWyILTb0dbQ2DRC8SHXAtaL8cUu68jSrWfykrJNUXrj6X1cBa%2BCsJ%2BKFFUkoGFCPQToSD4Dcv%2F4hddWJrT6YK0Sed874CVl6H6FAFyHZK%2FTY64qs0nbyn%2FuIwTAvgbtvILLC51o1HjzIRzOBCVMqJUEiMB8oq49Hqmcg126FkyVOqNdXSWUt66aSF8GPw8UTuwgfCWRIGveYLkgg1jnZa6nyEJhognATwdkEqs4SxJgQZbEyj9IM6%2BGZc0njooN%2Fb79HeDNQgA53YwGIkjXgVL3eqbiMsAnNpr%2FwcE10xkmBdhALOxFiDjjoyQet2eMUpnAxxb71G2hXCT6MRYMZcZbEl%2Bn7ji7rG5wcB94b0APIBXJuUOPeHtXzuOr%2Fi%2B3LXSLC3p1CTcr57huHR9aSFhEuEZWkg%2BD39jHAeAdv2svR%2BTR%2Fw8OOHQ%2Bf6ju1JMER6Mdw5xUM%2BCeOMmo%2Bih24Pwibbjmyk2pcuXPuPMxAptaiFYVzw9z8R0itPvfKyebxHvt8yyZrLWQ0%2BN4pwV%2FCMLLsn8MGOqUBv1CStQ8YvRiM8O21Yo4jbtvVBeQj1YXy1L1ih8rj78TE5OF%2FrxZL%2F7cAIChT7xc9ZPa65Mmx2KtJU%2BwGWa825734uO%2FO8J%2F5FsjoUtXVzPejNZGJs%2BHU4jvNX4PNvx2uYdv%2FwfSC5dy%2F2cVPv1UIkc99y4uPwZt0PYntKnZJGwNUOsPUcXtr%2FQLkiIzmI6OxcrtZ3b5%2BZmM9x2sp%2FbhWvmcBFF6V&X-Amz-Signature=c4787e3b43eb6cefb259c80ce18808ad3ceab8415dd1061f6fd38b4a51d3d1b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LYS3K4G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDfIvma%2BKgll5wLZDBZPdpE7PMY7DyjzXA9mxXA1jG4%2BQIgOngex1SI9bKPPMl19z6cW1SCVmeHE%2FandVZhDH%2Bq7dYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB1ExWsfdfGj24JnJCrcA0LDpvKESgd7u0OppjmEJVXyrZDe%2BIvykEcfnxgObf111E5lifWZg0SjPq5zrd5zGIaHNmz%2FFLcXB24EqnabPZ344uc8u9wJDfbr9ICjTWyILTb0dbQ2DRC8SHXAtaL8cUu68jSrWfykrJNUXrj6X1cBa%2BCsJ%2BKFFUkoGFCPQToSD4Dcv%2F4hddWJrT6YK0Sed874CVl6H6FAFyHZK%2FTY64qs0nbyn%2FuIwTAvgbtvILLC51o1HjzIRzOBCVMqJUEiMB8oq49Hqmcg126FkyVOqNdXSWUt66aSF8GPw8UTuwgfCWRIGveYLkgg1jnZa6nyEJhognATwdkEqs4SxJgQZbEyj9IM6%2BGZc0njooN%2Fb79HeDNQgA53YwGIkjXgVL3eqbiMsAnNpr%2FwcE10xkmBdhALOxFiDjjoyQet2eMUpnAxxb71G2hXCT6MRYMZcZbEl%2Bn7ji7rG5wcB94b0APIBXJuUOPeHtXzuOr%2Fi%2B3LXSLC3p1CTcr57huHR9aSFhEuEZWkg%2BD39jHAeAdv2svR%2BTR%2Fw8OOHQ%2Bf6ju1JMER6Mdw5xUM%2BCeOMmo%2Bih24Pwibbjmyk2pcuXPuPMxAptaiFYVzw9z8R0itPvfKyebxHvt8yyZrLWQ0%2BN4pwV%2FCMLLsn8MGOqUBv1CStQ8YvRiM8O21Yo4jbtvVBeQj1YXy1L1ih8rj78TE5OF%2FrxZL%2F7cAIChT7xc9ZPa65Mmx2KtJU%2BwGWa825734uO%2FO8J%2F5FsjoUtXVzPejNZGJs%2BHU4jvNX4PNvx2uYdv%2FwfSC5dy%2F2cVPv1UIkc99y4uPwZt0PYntKnZJGwNUOsPUcXtr%2FQLkiIzmI6OxcrtZ3b5%2BZmM9x2sp%2FbhWvmcBFF6V&X-Amz-Signature=b70d94a093e9bfe88c677b9ee6dcec8fd4e1f397b4ed86e1bcc9d6eae9dd83ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LYS3K4G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDfIvma%2BKgll5wLZDBZPdpE7PMY7DyjzXA9mxXA1jG4%2BQIgOngex1SI9bKPPMl19z6cW1SCVmeHE%2FandVZhDH%2Bq7dYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB1ExWsfdfGj24JnJCrcA0LDpvKESgd7u0OppjmEJVXyrZDe%2BIvykEcfnxgObf111E5lifWZg0SjPq5zrd5zGIaHNmz%2FFLcXB24EqnabPZ344uc8u9wJDfbr9ICjTWyILTb0dbQ2DRC8SHXAtaL8cUu68jSrWfykrJNUXrj6X1cBa%2BCsJ%2BKFFUkoGFCPQToSD4Dcv%2F4hddWJrT6YK0Sed874CVl6H6FAFyHZK%2FTY64qs0nbyn%2FuIwTAvgbtvILLC51o1HjzIRzOBCVMqJUEiMB8oq49Hqmcg126FkyVOqNdXSWUt66aSF8GPw8UTuwgfCWRIGveYLkgg1jnZa6nyEJhognATwdkEqs4SxJgQZbEyj9IM6%2BGZc0njooN%2Fb79HeDNQgA53YwGIkjXgVL3eqbiMsAnNpr%2FwcE10xkmBdhALOxFiDjjoyQet2eMUpnAxxb71G2hXCT6MRYMZcZbEl%2Bn7ji7rG5wcB94b0APIBXJuUOPeHtXzuOr%2Fi%2B3LXSLC3p1CTcr57huHR9aSFhEuEZWkg%2BD39jHAeAdv2svR%2BTR%2Fw8OOHQ%2Bf6ju1JMER6Mdw5xUM%2BCeOMmo%2Bih24Pwibbjmyk2pcuXPuPMxAptaiFYVzw9z8R0itPvfKyebxHvt8yyZrLWQ0%2BN4pwV%2FCMLLsn8MGOqUBv1CStQ8YvRiM8O21Yo4jbtvVBeQj1YXy1L1ih8rj78TE5OF%2FrxZL%2F7cAIChT7xc9ZPa65Mmx2KtJU%2BwGWa825734uO%2FO8J%2F5FsjoUtXVzPejNZGJs%2BHU4jvNX4PNvx2uYdv%2FwfSC5dy%2F2cVPv1UIkc99y4uPwZt0PYntKnZJGwNUOsPUcXtr%2FQLkiIzmI6OxcrtZ3b5%2BZmM9x2sp%2FbhWvmcBFF6V&X-Amz-Signature=232ffffece4791ee4b7036f2287169bafed0d4c00e873aa4193b180e250abf93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
