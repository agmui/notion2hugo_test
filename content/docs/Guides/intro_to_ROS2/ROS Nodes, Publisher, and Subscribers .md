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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HND3NZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHgIyDDVQ4D8tpyfA7bf40jS3MG1xkd27dDDmGkrzjDAAiEAkt0vZyGueIFMxru74Jb7Hp%2BFx1wDITxcwHOcUpJzJdkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKPvSG3kV9D%2BtCLVIircA2tGzAjfoUthUc7UziTNmW4tQOkV5R4C5XdDDA8RQHU0n8%2B0mBXpuUWIhKyIuKUP%2FLXyHEPfydVHszDXGEXkzm8JwFQmx5yCd%2F8M7Hb4zyagUH1CtqJqS9Rp%2B57il0IHisNiQOWGWo4Ye6KgBr5ihfnMczle1%2FeeF%2BP02r64pAi8QgG8SwG3wxvl8aiAta5n08nZCc99rnlr04ssxUXITZVkHxZycjtlZ4menMoGT%2FCzS0PRnDZvdiVQn%2FS0hvbn93hECNpsPMMKMNd3AdCzyan7sed%2FDjxQPf38R5RkIAfPKgZWxzIWh546Aw1g80SOgqyaPILpSDUbSPYJRlBBIpveAWjLqv6y4w6dEv2f%2F6JvmsYcoShDDHb1iKlUB1o9FYgougyjZomjdGRR2hLYpObyk0t1eudAAsEkbT6PLvoIDcmNB30e2mqqVnCJq7NHgWLqmVQ2rHAOAcJ5RWRMhZXiaCHBoZchC5uyNZpet3GISPXktwWPFPpCznqM0lXOtBY69qnkCxt6nLuNqyTzGY%2FdwYpWkqry5LKTX8M8jrdM2E13fmm0Fr7%2Bq8BfpOr0ODAdxZZ3VKwUzO5Xp59u9TokocdNGGZtkmBWXkrXUlswbvBs4y3kxpG7nemNMJHR4MAGOqUB4TeQ8YiZk8pFrLto4WS6CMfDepFnlieZx1U9Qfxj%2B5NQwvcP0VO2%2Fqte%2FUhbCi5C1j%2FXftIlzjU1dBgeSQRttnOk2HqWCiLKsRlUnKYp30B7ry5v1M%2BsVrPWbGv7kT2VAb7FObnJIH4OZEOSOZKuVELflGQRXiG2nVDvvj6A7z%2BlHNU8atuhf3QyTQ%2BFivmcJG7cJlXDwv4tTK02iUVDCwNBZqxa&X-Amz-Signature=0104db8d98b9e8d8c6d156b45ce958dd250afb01656eca77c4f374edb0698fad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HND3NZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHgIyDDVQ4D8tpyfA7bf40jS3MG1xkd27dDDmGkrzjDAAiEAkt0vZyGueIFMxru74Jb7Hp%2BFx1wDITxcwHOcUpJzJdkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKPvSG3kV9D%2BtCLVIircA2tGzAjfoUthUc7UziTNmW4tQOkV5R4C5XdDDA8RQHU0n8%2B0mBXpuUWIhKyIuKUP%2FLXyHEPfydVHszDXGEXkzm8JwFQmx5yCd%2F8M7Hb4zyagUH1CtqJqS9Rp%2B57il0IHisNiQOWGWo4Ye6KgBr5ihfnMczle1%2FeeF%2BP02r64pAi8QgG8SwG3wxvl8aiAta5n08nZCc99rnlr04ssxUXITZVkHxZycjtlZ4menMoGT%2FCzS0PRnDZvdiVQn%2FS0hvbn93hECNpsPMMKMNd3AdCzyan7sed%2FDjxQPf38R5RkIAfPKgZWxzIWh546Aw1g80SOgqyaPILpSDUbSPYJRlBBIpveAWjLqv6y4w6dEv2f%2F6JvmsYcoShDDHb1iKlUB1o9FYgougyjZomjdGRR2hLYpObyk0t1eudAAsEkbT6PLvoIDcmNB30e2mqqVnCJq7NHgWLqmVQ2rHAOAcJ5RWRMhZXiaCHBoZchC5uyNZpet3GISPXktwWPFPpCznqM0lXOtBY69qnkCxt6nLuNqyTzGY%2FdwYpWkqry5LKTX8M8jrdM2E13fmm0Fr7%2Bq8BfpOr0ODAdxZZ3VKwUzO5Xp59u9TokocdNGGZtkmBWXkrXUlswbvBs4y3kxpG7nemNMJHR4MAGOqUB4TeQ8YiZk8pFrLto4WS6CMfDepFnlieZx1U9Qfxj%2B5NQwvcP0VO2%2Fqte%2FUhbCi5C1j%2FXftIlzjU1dBgeSQRttnOk2HqWCiLKsRlUnKYp30B7ry5v1M%2BsVrPWbGv7kT2VAb7FObnJIH4OZEOSOZKuVELflGQRXiG2nVDvvj6A7z%2BlHNU8atuhf3QyTQ%2BFivmcJG7cJlXDwv4tTK02iUVDCwNBZqxa&X-Amz-Signature=ca6df458b47f2a10a1ff9d374d22c878d0d9e211de8ad3cb573da5d435d6e545&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HND3NZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHgIyDDVQ4D8tpyfA7bf40jS3MG1xkd27dDDmGkrzjDAAiEAkt0vZyGueIFMxru74Jb7Hp%2BFx1wDITxcwHOcUpJzJdkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKPvSG3kV9D%2BtCLVIircA2tGzAjfoUthUc7UziTNmW4tQOkV5R4C5XdDDA8RQHU0n8%2B0mBXpuUWIhKyIuKUP%2FLXyHEPfydVHszDXGEXkzm8JwFQmx5yCd%2F8M7Hb4zyagUH1CtqJqS9Rp%2B57il0IHisNiQOWGWo4Ye6KgBr5ihfnMczle1%2FeeF%2BP02r64pAi8QgG8SwG3wxvl8aiAta5n08nZCc99rnlr04ssxUXITZVkHxZycjtlZ4menMoGT%2FCzS0PRnDZvdiVQn%2FS0hvbn93hECNpsPMMKMNd3AdCzyan7sed%2FDjxQPf38R5RkIAfPKgZWxzIWh546Aw1g80SOgqyaPILpSDUbSPYJRlBBIpveAWjLqv6y4w6dEv2f%2F6JvmsYcoShDDHb1iKlUB1o9FYgougyjZomjdGRR2hLYpObyk0t1eudAAsEkbT6PLvoIDcmNB30e2mqqVnCJq7NHgWLqmVQ2rHAOAcJ5RWRMhZXiaCHBoZchC5uyNZpet3GISPXktwWPFPpCznqM0lXOtBY69qnkCxt6nLuNqyTzGY%2FdwYpWkqry5LKTX8M8jrdM2E13fmm0Fr7%2Bq8BfpOr0ODAdxZZ3VKwUzO5Xp59u9TokocdNGGZtkmBWXkrXUlswbvBs4y3kxpG7nemNMJHR4MAGOqUB4TeQ8YiZk8pFrLto4WS6CMfDepFnlieZx1U9Qfxj%2B5NQwvcP0VO2%2Fqte%2FUhbCi5C1j%2FXftIlzjU1dBgeSQRttnOk2HqWCiLKsRlUnKYp30B7ry5v1M%2BsVrPWbGv7kT2VAb7FObnJIH4OZEOSOZKuVELflGQRXiG2nVDvvj6A7z%2BlHNU8atuhf3QyTQ%2BFivmcJG7cJlXDwv4tTK02iUVDCwNBZqxa&X-Amz-Signature=2c50321dd6b10155a24a00af8147af8f6588e381671d71ee9f09d62e4e0c2210&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HND3NZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHgIyDDVQ4D8tpyfA7bf40jS3MG1xkd27dDDmGkrzjDAAiEAkt0vZyGueIFMxru74Jb7Hp%2BFx1wDITxcwHOcUpJzJdkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKPvSG3kV9D%2BtCLVIircA2tGzAjfoUthUc7UziTNmW4tQOkV5R4C5XdDDA8RQHU0n8%2B0mBXpuUWIhKyIuKUP%2FLXyHEPfydVHszDXGEXkzm8JwFQmx5yCd%2F8M7Hb4zyagUH1CtqJqS9Rp%2B57il0IHisNiQOWGWo4Ye6KgBr5ihfnMczle1%2FeeF%2BP02r64pAi8QgG8SwG3wxvl8aiAta5n08nZCc99rnlr04ssxUXITZVkHxZycjtlZ4menMoGT%2FCzS0PRnDZvdiVQn%2FS0hvbn93hECNpsPMMKMNd3AdCzyan7sed%2FDjxQPf38R5RkIAfPKgZWxzIWh546Aw1g80SOgqyaPILpSDUbSPYJRlBBIpveAWjLqv6y4w6dEv2f%2F6JvmsYcoShDDHb1iKlUB1o9FYgougyjZomjdGRR2hLYpObyk0t1eudAAsEkbT6PLvoIDcmNB30e2mqqVnCJq7NHgWLqmVQ2rHAOAcJ5RWRMhZXiaCHBoZchC5uyNZpet3GISPXktwWPFPpCznqM0lXOtBY69qnkCxt6nLuNqyTzGY%2FdwYpWkqry5LKTX8M8jrdM2E13fmm0Fr7%2Bq8BfpOr0ODAdxZZ3VKwUzO5Xp59u9TokocdNGGZtkmBWXkrXUlswbvBs4y3kxpG7nemNMJHR4MAGOqUB4TeQ8YiZk8pFrLto4WS6CMfDepFnlieZx1U9Qfxj%2B5NQwvcP0VO2%2Fqte%2FUhbCi5C1j%2FXftIlzjU1dBgeSQRttnOk2HqWCiLKsRlUnKYp30B7ry5v1M%2BsVrPWbGv7kT2VAb7FObnJIH4OZEOSOZKuVELflGQRXiG2nVDvvj6A7z%2BlHNU8atuhf3QyTQ%2BFivmcJG7cJlXDwv4tTK02iUVDCwNBZqxa&X-Amz-Signature=74b84667be44736955d7edc1ec17b65b0d98c15c6a8ddd8bd8ae1430ab246d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HND3NZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHgIyDDVQ4D8tpyfA7bf40jS3MG1xkd27dDDmGkrzjDAAiEAkt0vZyGueIFMxru74Jb7Hp%2BFx1wDITxcwHOcUpJzJdkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKPvSG3kV9D%2BtCLVIircA2tGzAjfoUthUc7UziTNmW4tQOkV5R4C5XdDDA8RQHU0n8%2B0mBXpuUWIhKyIuKUP%2FLXyHEPfydVHszDXGEXkzm8JwFQmx5yCd%2F8M7Hb4zyagUH1CtqJqS9Rp%2B57il0IHisNiQOWGWo4Ye6KgBr5ihfnMczle1%2FeeF%2BP02r64pAi8QgG8SwG3wxvl8aiAta5n08nZCc99rnlr04ssxUXITZVkHxZycjtlZ4menMoGT%2FCzS0PRnDZvdiVQn%2FS0hvbn93hECNpsPMMKMNd3AdCzyan7sed%2FDjxQPf38R5RkIAfPKgZWxzIWh546Aw1g80SOgqyaPILpSDUbSPYJRlBBIpveAWjLqv6y4w6dEv2f%2F6JvmsYcoShDDHb1iKlUB1o9FYgougyjZomjdGRR2hLYpObyk0t1eudAAsEkbT6PLvoIDcmNB30e2mqqVnCJq7NHgWLqmVQ2rHAOAcJ5RWRMhZXiaCHBoZchC5uyNZpet3GISPXktwWPFPpCznqM0lXOtBY69qnkCxt6nLuNqyTzGY%2FdwYpWkqry5LKTX8M8jrdM2E13fmm0Fr7%2Bq8BfpOr0ODAdxZZ3VKwUzO5Xp59u9TokocdNGGZtkmBWXkrXUlswbvBs4y3kxpG7nemNMJHR4MAGOqUB4TeQ8YiZk8pFrLto4WS6CMfDepFnlieZx1U9Qfxj%2B5NQwvcP0VO2%2Fqte%2FUhbCi5C1j%2FXftIlzjU1dBgeSQRttnOk2HqWCiLKsRlUnKYp30B7ry5v1M%2BsVrPWbGv7kT2VAb7FObnJIH4OZEOSOZKuVELflGQRXiG2nVDvvj6A7z%2BlHNU8atuhf3QyTQ%2BFivmcJG7cJlXDwv4tTK02iUVDCwNBZqxa&X-Amz-Signature=7365e426dd12f0f119001a4f8da2c917d330966003a39fb077959cc80e28571a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HND3NZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHgIyDDVQ4D8tpyfA7bf40jS3MG1xkd27dDDmGkrzjDAAiEAkt0vZyGueIFMxru74Jb7Hp%2BFx1wDITxcwHOcUpJzJdkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKPvSG3kV9D%2BtCLVIircA2tGzAjfoUthUc7UziTNmW4tQOkV5R4C5XdDDA8RQHU0n8%2B0mBXpuUWIhKyIuKUP%2FLXyHEPfydVHszDXGEXkzm8JwFQmx5yCd%2F8M7Hb4zyagUH1CtqJqS9Rp%2B57il0IHisNiQOWGWo4Ye6KgBr5ihfnMczle1%2FeeF%2BP02r64pAi8QgG8SwG3wxvl8aiAta5n08nZCc99rnlr04ssxUXITZVkHxZycjtlZ4menMoGT%2FCzS0PRnDZvdiVQn%2FS0hvbn93hECNpsPMMKMNd3AdCzyan7sed%2FDjxQPf38R5RkIAfPKgZWxzIWh546Aw1g80SOgqyaPILpSDUbSPYJRlBBIpveAWjLqv6y4w6dEv2f%2F6JvmsYcoShDDHb1iKlUB1o9FYgougyjZomjdGRR2hLYpObyk0t1eudAAsEkbT6PLvoIDcmNB30e2mqqVnCJq7NHgWLqmVQ2rHAOAcJ5RWRMhZXiaCHBoZchC5uyNZpet3GISPXktwWPFPpCznqM0lXOtBY69qnkCxt6nLuNqyTzGY%2FdwYpWkqry5LKTX8M8jrdM2E13fmm0Fr7%2Bq8BfpOr0ODAdxZZ3VKwUzO5Xp59u9TokocdNGGZtkmBWXkrXUlswbvBs4y3kxpG7nemNMJHR4MAGOqUB4TeQ8YiZk8pFrLto4WS6CMfDepFnlieZx1U9Qfxj%2B5NQwvcP0VO2%2Fqte%2FUhbCi5C1j%2FXftIlzjU1dBgeSQRttnOk2HqWCiLKsRlUnKYp30B7ry5v1M%2BsVrPWbGv7kT2VAb7FObnJIH4OZEOSOZKuVELflGQRXiG2nVDvvj6A7z%2BlHNU8atuhf3QyTQ%2BFivmcJG7cJlXDwv4tTK02iUVDCwNBZqxa&X-Amz-Signature=32be190cef5d2b1bbced463c0e82e5435fb9b3090aa85c735a844120f1c1cb9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HND3NZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHgIyDDVQ4D8tpyfA7bf40jS3MG1xkd27dDDmGkrzjDAAiEAkt0vZyGueIFMxru74Jb7Hp%2BFx1wDITxcwHOcUpJzJdkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKPvSG3kV9D%2BtCLVIircA2tGzAjfoUthUc7UziTNmW4tQOkV5R4C5XdDDA8RQHU0n8%2B0mBXpuUWIhKyIuKUP%2FLXyHEPfydVHszDXGEXkzm8JwFQmx5yCd%2F8M7Hb4zyagUH1CtqJqS9Rp%2B57il0IHisNiQOWGWo4Ye6KgBr5ihfnMczle1%2FeeF%2BP02r64pAi8QgG8SwG3wxvl8aiAta5n08nZCc99rnlr04ssxUXITZVkHxZycjtlZ4menMoGT%2FCzS0PRnDZvdiVQn%2FS0hvbn93hECNpsPMMKMNd3AdCzyan7sed%2FDjxQPf38R5RkIAfPKgZWxzIWh546Aw1g80SOgqyaPILpSDUbSPYJRlBBIpveAWjLqv6y4w6dEv2f%2F6JvmsYcoShDDHb1iKlUB1o9FYgougyjZomjdGRR2hLYpObyk0t1eudAAsEkbT6PLvoIDcmNB30e2mqqVnCJq7NHgWLqmVQ2rHAOAcJ5RWRMhZXiaCHBoZchC5uyNZpet3GISPXktwWPFPpCznqM0lXOtBY69qnkCxt6nLuNqyTzGY%2FdwYpWkqry5LKTX8M8jrdM2E13fmm0Fr7%2Bq8BfpOr0ODAdxZZ3VKwUzO5Xp59u9TokocdNGGZtkmBWXkrXUlswbvBs4y3kxpG7nemNMJHR4MAGOqUB4TeQ8YiZk8pFrLto4WS6CMfDepFnlieZx1U9Qfxj%2B5NQwvcP0VO2%2Fqte%2FUhbCi5C1j%2FXftIlzjU1dBgeSQRttnOk2HqWCiLKsRlUnKYp30B7ry5v1M%2BsVrPWbGv7kT2VAb7FObnJIH4OZEOSOZKuVELflGQRXiG2nVDvvj6A7z%2BlHNU8atuhf3QyTQ%2BFivmcJG7cJlXDwv4tTK02iUVDCwNBZqxa&X-Amz-Signature=2296d61de6e6cca2f385abaa0bd6b6eac37828da980fa2a30e139138bb5ee986&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3HND3NZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHgIyDDVQ4D8tpyfA7bf40jS3MG1xkd27dDDmGkrzjDAAiEAkt0vZyGueIFMxru74Jb7Hp%2BFx1wDITxcwHOcUpJzJdkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKPvSG3kV9D%2BtCLVIircA2tGzAjfoUthUc7UziTNmW4tQOkV5R4C5XdDDA8RQHU0n8%2B0mBXpuUWIhKyIuKUP%2FLXyHEPfydVHszDXGEXkzm8JwFQmx5yCd%2F8M7Hb4zyagUH1CtqJqS9Rp%2B57il0IHisNiQOWGWo4Ye6KgBr5ihfnMczle1%2FeeF%2BP02r64pAi8QgG8SwG3wxvl8aiAta5n08nZCc99rnlr04ssxUXITZVkHxZycjtlZ4menMoGT%2FCzS0PRnDZvdiVQn%2FS0hvbn93hECNpsPMMKMNd3AdCzyan7sed%2FDjxQPf38R5RkIAfPKgZWxzIWh546Aw1g80SOgqyaPILpSDUbSPYJRlBBIpveAWjLqv6y4w6dEv2f%2F6JvmsYcoShDDHb1iKlUB1o9FYgougyjZomjdGRR2hLYpObyk0t1eudAAsEkbT6PLvoIDcmNB30e2mqqVnCJq7NHgWLqmVQ2rHAOAcJ5RWRMhZXiaCHBoZchC5uyNZpet3GISPXktwWPFPpCznqM0lXOtBY69qnkCxt6nLuNqyTzGY%2FdwYpWkqry5LKTX8M8jrdM2E13fmm0Fr7%2Bq8BfpOr0ODAdxZZ3VKwUzO5Xp59u9TokocdNGGZtkmBWXkrXUlswbvBs4y3kxpG7nemNMJHR4MAGOqUB4TeQ8YiZk8pFrLto4WS6CMfDepFnlieZx1U9Qfxj%2B5NQwvcP0VO2%2Fqte%2FUhbCi5C1j%2FXftIlzjU1dBgeSQRttnOk2HqWCiLKsRlUnKYp30B7ry5v1M%2BsVrPWbGv7kT2VAb7FObnJIH4OZEOSOZKuVELflGQRXiG2nVDvvj6A7z%2BlHNU8atuhf3QyTQ%2BFivmcJG7cJlXDwv4tTK02iUVDCwNBZqxa&X-Amz-Signature=e837f848b983c5cb40e0c1c7c4a742efbe7369f2147b412a23a108a1e2d98609&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
