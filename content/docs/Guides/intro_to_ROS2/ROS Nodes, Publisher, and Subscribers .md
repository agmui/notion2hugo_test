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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GXIHSK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK55IAd57rr5IDV26YWH3vUPJHd1M%2FBzmAziQSTAoivQIgBLN6EAPAev1MRattcsxPkBeeShasy8Ij7wUuL9NS2u0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkbJUkRaly9zT8XPSrcA1bDDKf7mRwXS1NW2Vur%2BQmjU4Xb0%2FUidSAWjHx5sl1HTkhYLo3p8J3awotl2LOwYeNxxMGtENkX9dkycJe9sd7W54qFnYWv3NgwPqCIUtCuKYSPMeOrJsdjaY%2FqFieTLBYtrB9c3lZgSI6WKXwesCrElVVDSkMiKz7I2%2FtQI7MEAVprlHl07BSLQ1%2FPT3hu%2FtCaYyQq6670fEev5p30Y8X56BPHbE1Qw9l3Iwt%2FVJVup0DHPwNTlRa%2Bz2FHIlMyJmdzhaeJXhJi6kna1bz899%2BV7RAUBhmG4GT81U2RTKnL%2Fdpws2NLUO1zgdLnIgMu%2BfwwObj0%2BgaNg938%2FCz0podDLz00lc0aXFunsF%2B%2FWfdNAlAqA%2BotUdJyAsO6awEcmgwJot80xIiDCX3TKDRu0kpclmGvNNA3OcWjSqgBekO%2B5uGRDz093zuy2Zpe4REjUkQlfKpbm5zl%2FkqU9eh8Pp2Ble8Cfa0KrWujrykaMDvuO6dFTEpgCKnoceGDg1CXS7OsG9laAPkN0IpJXUw65Ih5IASwJXPp%2FpTCkE%2BZYbrdfHBekc8P8doJrsY9HbSAWqQAJCUw4w8aAMoA9t254qosJbFM0r1rtL6PGIg4QtElTXGpGB5pye8EDAgbMLar5sQGOqUBqE1nnRP5%2BdkIO5AXopXD9HLMMmbmBR7Wwt%2Bc0qlWk%2BL%2F%2FYuxP%2BY3RV%2FR5cUCtz8aTPKA54g%2F3hpRhI%2BQb638AKxIjn6T%2F2TR73m2mFEcGqaFaRcdfpIuAGEIhH0Hpv32onpTV8P3zHtmDG3X1FNoKGawNU%2F6L2iDvPaQWrrRq%2BWjPLredQWmwTak9jxba4U68CV5P1Z%2BR%2B7E%2FGb0nHALsEvfwY7i&X-Amz-Signature=a8aefef922bf83a269d1dceee18a8731b27f7c8759ac82d47ff9311994dcf08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GXIHSK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK55IAd57rr5IDV26YWH3vUPJHd1M%2FBzmAziQSTAoivQIgBLN6EAPAev1MRattcsxPkBeeShasy8Ij7wUuL9NS2u0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkbJUkRaly9zT8XPSrcA1bDDKf7mRwXS1NW2Vur%2BQmjU4Xb0%2FUidSAWjHx5sl1HTkhYLo3p8J3awotl2LOwYeNxxMGtENkX9dkycJe9sd7W54qFnYWv3NgwPqCIUtCuKYSPMeOrJsdjaY%2FqFieTLBYtrB9c3lZgSI6WKXwesCrElVVDSkMiKz7I2%2FtQI7MEAVprlHl07BSLQ1%2FPT3hu%2FtCaYyQq6670fEev5p30Y8X56BPHbE1Qw9l3Iwt%2FVJVup0DHPwNTlRa%2Bz2FHIlMyJmdzhaeJXhJi6kna1bz899%2BV7RAUBhmG4GT81U2RTKnL%2Fdpws2NLUO1zgdLnIgMu%2BfwwObj0%2BgaNg938%2FCz0podDLz00lc0aXFunsF%2B%2FWfdNAlAqA%2BotUdJyAsO6awEcmgwJot80xIiDCX3TKDRu0kpclmGvNNA3OcWjSqgBekO%2B5uGRDz093zuy2Zpe4REjUkQlfKpbm5zl%2FkqU9eh8Pp2Ble8Cfa0KrWujrykaMDvuO6dFTEpgCKnoceGDg1CXS7OsG9laAPkN0IpJXUw65Ih5IASwJXPp%2FpTCkE%2BZYbrdfHBekc8P8doJrsY9HbSAWqQAJCUw4w8aAMoA9t254qosJbFM0r1rtL6PGIg4QtElTXGpGB5pye8EDAgbMLar5sQGOqUBqE1nnRP5%2BdkIO5AXopXD9HLMMmbmBR7Wwt%2Bc0qlWk%2BL%2F%2FYuxP%2BY3RV%2FR5cUCtz8aTPKA54g%2F3hpRhI%2BQb638AKxIjn6T%2F2TR73m2mFEcGqaFaRcdfpIuAGEIhH0Hpv32onpTV8P3zHtmDG3X1FNoKGawNU%2F6L2iDvPaQWrrRq%2BWjPLredQWmwTak9jxba4U68CV5P1Z%2BR%2B7E%2FGb0nHALsEvfwY7i&X-Amz-Signature=a5c567a7a5cf7be9f531de2322285913e08b334cc84fc58d7ef57cdf42f4bdec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GXIHSK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK55IAd57rr5IDV26YWH3vUPJHd1M%2FBzmAziQSTAoivQIgBLN6EAPAev1MRattcsxPkBeeShasy8Ij7wUuL9NS2u0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkbJUkRaly9zT8XPSrcA1bDDKf7mRwXS1NW2Vur%2BQmjU4Xb0%2FUidSAWjHx5sl1HTkhYLo3p8J3awotl2LOwYeNxxMGtENkX9dkycJe9sd7W54qFnYWv3NgwPqCIUtCuKYSPMeOrJsdjaY%2FqFieTLBYtrB9c3lZgSI6WKXwesCrElVVDSkMiKz7I2%2FtQI7MEAVprlHl07BSLQ1%2FPT3hu%2FtCaYyQq6670fEev5p30Y8X56BPHbE1Qw9l3Iwt%2FVJVup0DHPwNTlRa%2Bz2FHIlMyJmdzhaeJXhJi6kna1bz899%2BV7RAUBhmG4GT81U2RTKnL%2Fdpws2NLUO1zgdLnIgMu%2BfwwObj0%2BgaNg938%2FCz0podDLz00lc0aXFunsF%2B%2FWfdNAlAqA%2BotUdJyAsO6awEcmgwJot80xIiDCX3TKDRu0kpclmGvNNA3OcWjSqgBekO%2B5uGRDz093zuy2Zpe4REjUkQlfKpbm5zl%2FkqU9eh8Pp2Ble8Cfa0KrWujrykaMDvuO6dFTEpgCKnoceGDg1CXS7OsG9laAPkN0IpJXUw65Ih5IASwJXPp%2FpTCkE%2BZYbrdfHBekc8P8doJrsY9HbSAWqQAJCUw4w8aAMoA9t254qosJbFM0r1rtL6PGIg4QtElTXGpGB5pye8EDAgbMLar5sQGOqUBqE1nnRP5%2BdkIO5AXopXD9HLMMmbmBR7Wwt%2Bc0qlWk%2BL%2F%2FYuxP%2BY3RV%2FR5cUCtz8aTPKA54g%2F3hpRhI%2BQb638AKxIjn6T%2F2TR73m2mFEcGqaFaRcdfpIuAGEIhH0Hpv32onpTV8P3zHtmDG3X1FNoKGawNU%2F6L2iDvPaQWrrRq%2BWjPLredQWmwTak9jxba4U68CV5P1Z%2BR%2B7E%2FGb0nHALsEvfwY7i&X-Amz-Signature=4b77d35fac0dbd0b0269c49bc26e7eb746a5d847c6de7d4eb0acb20a25988fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GXIHSK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK55IAd57rr5IDV26YWH3vUPJHd1M%2FBzmAziQSTAoivQIgBLN6EAPAev1MRattcsxPkBeeShasy8Ij7wUuL9NS2u0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkbJUkRaly9zT8XPSrcA1bDDKf7mRwXS1NW2Vur%2BQmjU4Xb0%2FUidSAWjHx5sl1HTkhYLo3p8J3awotl2LOwYeNxxMGtENkX9dkycJe9sd7W54qFnYWv3NgwPqCIUtCuKYSPMeOrJsdjaY%2FqFieTLBYtrB9c3lZgSI6WKXwesCrElVVDSkMiKz7I2%2FtQI7MEAVprlHl07BSLQ1%2FPT3hu%2FtCaYyQq6670fEev5p30Y8X56BPHbE1Qw9l3Iwt%2FVJVup0DHPwNTlRa%2Bz2FHIlMyJmdzhaeJXhJi6kna1bz899%2BV7RAUBhmG4GT81U2RTKnL%2Fdpws2NLUO1zgdLnIgMu%2BfwwObj0%2BgaNg938%2FCz0podDLz00lc0aXFunsF%2B%2FWfdNAlAqA%2BotUdJyAsO6awEcmgwJot80xIiDCX3TKDRu0kpclmGvNNA3OcWjSqgBekO%2B5uGRDz093zuy2Zpe4REjUkQlfKpbm5zl%2FkqU9eh8Pp2Ble8Cfa0KrWujrykaMDvuO6dFTEpgCKnoceGDg1CXS7OsG9laAPkN0IpJXUw65Ih5IASwJXPp%2FpTCkE%2BZYbrdfHBekc8P8doJrsY9HbSAWqQAJCUw4w8aAMoA9t254qosJbFM0r1rtL6PGIg4QtElTXGpGB5pye8EDAgbMLar5sQGOqUBqE1nnRP5%2BdkIO5AXopXD9HLMMmbmBR7Wwt%2Bc0qlWk%2BL%2F%2FYuxP%2BY3RV%2FR5cUCtz8aTPKA54g%2F3hpRhI%2BQb638AKxIjn6T%2F2TR73m2mFEcGqaFaRcdfpIuAGEIhH0Hpv32onpTV8P3zHtmDG3X1FNoKGawNU%2F6L2iDvPaQWrrRq%2BWjPLredQWmwTak9jxba4U68CV5P1Z%2BR%2B7E%2FGb0nHALsEvfwY7i&X-Amz-Signature=fdc2637e890fa26e99c50ea83b77cc08f8ccf8271e309e34124734619e152c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GXIHSK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK55IAd57rr5IDV26YWH3vUPJHd1M%2FBzmAziQSTAoivQIgBLN6EAPAev1MRattcsxPkBeeShasy8Ij7wUuL9NS2u0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkbJUkRaly9zT8XPSrcA1bDDKf7mRwXS1NW2Vur%2BQmjU4Xb0%2FUidSAWjHx5sl1HTkhYLo3p8J3awotl2LOwYeNxxMGtENkX9dkycJe9sd7W54qFnYWv3NgwPqCIUtCuKYSPMeOrJsdjaY%2FqFieTLBYtrB9c3lZgSI6WKXwesCrElVVDSkMiKz7I2%2FtQI7MEAVprlHl07BSLQ1%2FPT3hu%2FtCaYyQq6670fEev5p30Y8X56BPHbE1Qw9l3Iwt%2FVJVup0DHPwNTlRa%2Bz2FHIlMyJmdzhaeJXhJi6kna1bz899%2BV7RAUBhmG4GT81U2RTKnL%2Fdpws2NLUO1zgdLnIgMu%2BfwwObj0%2BgaNg938%2FCz0podDLz00lc0aXFunsF%2B%2FWfdNAlAqA%2BotUdJyAsO6awEcmgwJot80xIiDCX3TKDRu0kpclmGvNNA3OcWjSqgBekO%2B5uGRDz093zuy2Zpe4REjUkQlfKpbm5zl%2FkqU9eh8Pp2Ble8Cfa0KrWujrykaMDvuO6dFTEpgCKnoceGDg1CXS7OsG9laAPkN0IpJXUw65Ih5IASwJXPp%2FpTCkE%2BZYbrdfHBekc8P8doJrsY9HbSAWqQAJCUw4w8aAMoA9t254qosJbFM0r1rtL6PGIg4QtElTXGpGB5pye8EDAgbMLar5sQGOqUBqE1nnRP5%2BdkIO5AXopXD9HLMMmbmBR7Wwt%2Bc0qlWk%2BL%2F%2FYuxP%2BY3RV%2FR5cUCtz8aTPKA54g%2F3hpRhI%2BQb638AKxIjn6T%2F2TR73m2mFEcGqaFaRcdfpIuAGEIhH0Hpv32onpTV8P3zHtmDG3X1FNoKGawNU%2F6L2iDvPaQWrrRq%2BWjPLredQWmwTak9jxba4U68CV5P1Z%2BR%2B7E%2FGb0nHALsEvfwY7i&X-Amz-Signature=ad4c38b710d37c31dfa5bf89a05d451d133481409682ea0295d1d4c380ef4baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GXIHSK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK55IAd57rr5IDV26YWH3vUPJHd1M%2FBzmAziQSTAoivQIgBLN6EAPAev1MRattcsxPkBeeShasy8Ij7wUuL9NS2u0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkbJUkRaly9zT8XPSrcA1bDDKf7mRwXS1NW2Vur%2BQmjU4Xb0%2FUidSAWjHx5sl1HTkhYLo3p8J3awotl2LOwYeNxxMGtENkX9dkycJe9sd7W54qFnYWv3NgwPqCIUtCuKYSPMeOrJsdjaY%2FqFieTLBYtrB9c3lZgSI6WKXwesCrElVVDSkMiKz7I2%2FtQI7MEAVprlHl07BSLQ1%2FPT3hu%2FtCaYyQq6670fEev5p30Y8X56BPHbE1Qw9l3Iwt%2FVJVup0DHPwNTlRa%2Bz2FHIlMyJmdzhaeJXhJi6kna1bz899%2BV7RAUBhmG4GT81U2RTKnL%2Fdpws2NLUO1zgdLnIgMu%2BfwwObj0%2BgaNg938%2FCz0podDLz00lc0aXFunsF%2B%2FWfdNAlAqA%2BotUdJyAsO6awEcmgwJot80xIiDCX3TKDRu0kpclmGvNNA3OcWjSqgBekO%2B5uGRDz093zuy2Zpe4REjUkQlfKpbm5zl%2FkqU9eh8Pp2Ble8Cfa0KrWujrykaMDvuO6dFTEpgCKnoceGDg1CXS7OsG9laAPkN0IpJXUw65Ih5IASwJXPp%2FpTCkE%2BZYbrdfHBekc8P8doJrsY9HbSAWqQAJCUw4w8aAMoA9t254qosJbFM0r1rtL6PGIg4QtElTXGpGB5pye8EDAgbMLar5sQGOqUBqE1nnRP5%2BdkIO5AXopXD9HLMMmbmBR7Wwt%2Bc0qlWk%2BL%2F%2FYuxP%2BY3RV%2FR5cUCtz8aTPKA54g%2F3hpRhI%2BQb638AKxIjn6T%2F2TR73m2mFEcGqaFaRcdfpIuAGEIhH0Hpv32onpTV8P3zHtmDG3X1FNoKGawNU%2F6L2iDvPaQWrrRq%2BWjPLredQWmwTak9jxba4U68CV5P1Z%2BR%2B7E%2FGb0nHALsEvfwY7i&X-Amz-Signature=5c9d6b9f6ce8d4f556e1402fe5fd50ed07adcc132002f133c15ab86fbfaf05e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GXIHSK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK55IAd57rr5IDV26YWH3vUPJHd1M%2FBzmAziQSTAoivQIgBLN6EAPAev1MRattcsxPkBeeShasy8Ij7wUuL9NS2u0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkbJUkRaly9zT8XPSrcA1bDDKf7mRwXS1NW2Vur%2BQmjU4Xb0%2FUidSAWjHx5sl1HTkhYLo3p8J3awotl2LOwYeNxxMGtENkX9dkycJe9sd7W54qFnYWv3NgwPqCIUtCuKYSPMeOrJsdjaY%2FqFieTLBYtrB9c3lZgSI6WKXwesCrElVVDSkMiKz7I2%2FtQI7MEAVprlHl07BSLQ1%2FPT3hu%2FtCaYyQq6670fEev5p30Y8X56BPHbE1Qw9l3Iwt%2FVJVup0DHPwNTlRa%2Bz2FHIlMyJmdzhaeJXhJi6kna1bz899%2BV7RAUBhmG4GT81U2RTKnL%2Fdpws2NLUO1zgdLnIgMu%2BfwwObj0%2BgaNg938%2FCz0podDLz00lc0aXFunsF%2B%2FWfdNAlAqA%2BotUdJyAsO6awEcmgwJot80xIiDCX3TKDRu0kpclmGvNNA3OcWjSqgBekO%2B5uGRDz093zuy2Zpe4REjUkQlfKpbm5zl%2FkqU9eh8Pp2Ble8Cfa0KrWujrykaMDvuO6dFTEpgCKnoceGDg1CXS7OsG9laAPkN0IpJXUw65Ih5IASwJXPp%2FpTCkE%2BZYbrdfHBekc8P8doJrsY9HbSAWqQAJCUw4w8aAMoA9t254qosJbFM0r1rtL6PGIg4QtElTXGpGB5pye8EDAgbMLar5sQGOqUBqE1nnRP5%2BdkIO5AXopXD9HLMMmbmBR7Wwt%2Bc0qlWk%2BL%2F%2FYuxP%2BY3RV%2FR5cUCtz8aTPKA54g%2F3hpRhI%2BQb638AKxIjn6T%2F2TR73m2mFEcGqaFaRcdfpIuAGEIhH0Hpv32onpTV8P3zHtmDG3X1FNoKGawNU%2F6L2iDvPaQWrrRq%2BWjPLredQWmwTak9jxba4U68CV5P1Z%2BR%2B7E%2FGb0nHALsEvfwY7i&X-Amz-Signature=b50d34f878ae6fde167e5efa08b95749c352998412c2d202f131ffc07a2a2191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GXIHSK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK55IAd57rr5IDV26YWH3vUPJHd1M%2FBzmAziQSTAoivQIgBLN6EAPAev1MRattcsxPkBeeShasy8Ij7wUuL9NS2u0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkbJUkRaly9zT8XPSrcA1bDDKf7mRwXS1NW2Vur%2BQmjU4Xb0%2FUidSAWjHx5sl1HTkhYLo3p8J3awotl2LOwYeNxxMGtENkX9dkycJe9sd7W54qFnYWv3NgwPqCIUtCuKYSPMeOrJsdjaY%2FqFieTLBYtrB9c3lZgSI6WKXwesCrElVVDSkMiKz7I2%2FtQI7MEAVprlHl07BSLQ1%2FPT3hu%2FtCaYyQq6670fEev5p30Y8X56BPHbE1Qw9l3Iwt%2FVJVup0DHPwNTlRa%2Bz2FHIlMyJmdzhaeJXhJi6kna1bz899%2BV7RAUBhmG4GT81U2RTKnL%2Fdpws2NLUO1zgdLnIgMu%2BfwwObj0%2BgaNg938%2FCz0podDLz00lc0aXFunsF%2B%2FWfdNAlAqA%2BotUdJyAsO6awEcmgwJot80xIiDCX3TKDRu0kpclmGvNNA3OcWjSqgBekO%2B5uGRDz093zuy2Zpe4REjUkQlfKpbm5zl%2FkqU9eh8Pp2Ble8Cfa0KrWujrykaMDvuO6dFTEpgCKnoceGDg1CXS7OsG9laAPkN0IpJXUw65Ih5IASwJXPp%2FpTCkE%2BZYbrdfHBekc8P8doJrsY9HbSAWqQAJCUw4w8aAMoA9t254qosJbFM0r1rtL6PGIg4QtElTXGpGB5pye8EDAgbMLar5sQGOqUBqE1nnRP5%2BdkIO5AXopXD9HLMMmbmBR7Wwt%2Bc0qlWk%2BL%2F%2FYuxP%2BY3RV%2FR5cUCtz8aTPKA54g%2F3hpRhI%2BQb638AKxIjn6T%2F2TR73m2mFEcGqaFaRcdfpIuAGEIhH0Hpv32onpTV8P3zHtmDG3X1FNoKGawNU%2F6L2iDvPaQWrrRq%2BWjPLredQWmwTak9jxba4U68CV5P1Z%2BR%2B7E%2FGb0nHALsEvfwY7i&X-Amz-Signature=cdb7914f577a361f4fd9f1fcfc8118a0e33628bc5a64de83a5f13e2ea3287f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
