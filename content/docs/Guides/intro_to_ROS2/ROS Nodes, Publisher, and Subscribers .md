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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT35Y6V%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDTxqBj%2FAIHTK4B28tiDmzHQLybJHyzHp%2FHywwC4oIruAiEAnhrnwH5yswNm%2BCSgoz3yGuGp3r34nv5DY%2FaGI7%2FCYOoq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBgGRsYkHVzM2hAT5yrcA2%2BrZ6qwold6dTCZhArD7TiFJvHyoCoho1viLA%2F1B5zQZLvxyJzgEpx6RQz%2Bp0W0zxrY4v%2BGJBO9WmjaNH3I882yRQ1reO4S%2FU31en7GrNZIDmpb6022YgEeFJR%2BK%2F54Oid6NHrwKvuKgqAVXjp1QqA2%2Bnly2qYf9ntwSg7s7eBJ8KktcBKKGrexJ0Jp1GFri3O2GizdAu%2FWnjGRFOiatHUd35X8OD3IMjp3OpEeQHKBbeK5JSy2f2mRs1dMwIOfASvBfcA9qaUVoXsVJKtwTmQsXP9vIYOYxTcPJvtkpj8fn7hmXFM0CnFTtC4sD6j8MMoWeOU6BbHzPhH5SUwgDXeVQHCVpTmKlHw2xI%2FFvsfLJWFbnlLAKM%2BnMRjSU%2FvsbRjgMXcXSVq0KooKQ59aoiH9pLeHmhaOK45sWUIvMXl9YL%2FewrjC8a22sTJM4CaHduxJYN0pI4Mfi9uRjPFALoZBGwPkKyKBz33gjRzmWHp6bESs8FDyw9TIUALHVP%2BlOgIkQ50JwqJRPeVDYyFOVYeu48Saaj4hiOkBaQvl0MrQ5Xe01o5sPse0Gw5q4U3T6nv%2BMBNsO9NTUYbddLmqeFdPIvenb%2FxTH7booTIIua%2FqAQ6PT5YIXvF2itRMMKKYscIGOqUB%2FUO%2F8mTANNjpl%2FbFKB48zgzluIdtjlZ%2FKA36DMdEFC7SnCZL5jHz8dLWnxLvkenHYPXflLprQbTl0XoneS3m8k5S%2BQ78uNk4Oex%2BNRXzrf5svZWvzGJ3zmARz2XsWnYkoqWcnfWqK1o%2FRu1dCwPZMfWl45%2FWo2E37n0j9%2BlKGdluea4yKE6LndUiHzJEP1xw0C%2BhkXW8wczCsRQzuBYDj9UgautB&X-Amz-Signature=86777d79f6d39530758ea47ed9b6856c1d0f8f1a98dee818c8fd7d23dd1472dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT35Y6V%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDTxqBj%2FAIHTK4B28tiDmzHQLybJHyzHp%2FHywwC4oIruAiEAnhrnwH5yswNm%2BCSgoz3yGuGp3r34nv5DY%2FaGI7%2FCYOoq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBgGRsYkHVzM2hAT5yrcA2%2BrZ6qwold6dTCZhArD7TiFJvHyoCoho1viLA%2F1B5zQZLvxyJzgEpx6RQz%2Bp0W0zxrY4v%2BGJBO9WmjaNH3I882yRQ1reO4S%2FU31en7GrNZIDmpb6022YgEeFJR%2BK%2F54Oid6NHrwKvuKgqAVXjp1QqA2%2Bnly2qYf9ntwSg7s7eBJ8KktcBKKGrexJ0Jp1GFri3O2GizdAu%2FWnjGRFOiatHUd35X8OD3IMjp3OpEeQHKBbeK5JSy2f2mRs1dMwIOfASvBfcA9qaUVoXsVJKtwTmQsXP9vIYOYxTcPJvtkpj8fn7hmXFM0CnFTtC4sD6j8MMoWeOU6BbHzPhH5SUwgDXeVQHCVpTmKlHw2xI%2FFvsfLJWFbnlLAKM%2BnMRjSU%2FvsbRjgMXcXSVq0KooKQ59aoiH9pLeHmhaOK45sWUIvMXl9YL%2FewrjC8a22sTJM4CaHduxJYN0pI4Mfi9uRjPFALoZBGwPkKyKBz33gjRzmWHp6bESs8FDyw9TIUALHVP%2BlOgIkQ50JwqJRPeVDYyFOVYeu48Saaj4hiOkBaQvl0MrQ5Xe01o5sPse0Gw5q4U3T6nv%2BMBNsO9NTUYbddLmqeFdPIvenb%2FxTH7booTIIua%2FqAQ6PT5YIXvF2itRMMKKYscIGOqUB%2FUO%2F8mTANNjpl%2FbFKB48zgzluIdtjlZ%2FKA36DMdEFC7SnCZL5jHz8dLWnxLvkenHYPXflLprQbTl0XoneS3m8k5S%2BQ78uNk4Oex%2BNRXzrf5svZWvzGJ3zmARz2XsWnYkoqWcnfWqK1o%2FRu1dCwPZMfWl45%2FWo2E37n0j9%2BlKGdluea4yKE6LndUiHzJEP1xw0C%2BhkXW8wczCsRQzuBYDj9UgautB&X-Amz-Signature=a5e51407e513c821e0db2194de3fcb939248aeffc98b0fdb9fcd6d20eed169d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT35Y6V%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDTxqBj%2FAIHTK4B28tiDmzHQLybJHyzHp%2FHywwC4oIruAiEAnhrnwH5yswNm%2BCSgoz3yGuGp3r34nv5DY%2FaGI7%2FCYOoq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBgGRsYkHVzM2hAT5yrcA2%2BrZ6qwold6dTCZhArD7TiFJvHyoCoho1viLA%2F1B5zQZLvxyJzgEpx6RQz%2Bp0W0zxrY4v%2BGJBO9WmjaNH3I882yRQ1reO4S%2FU31en7GrNZIDmpb6022YgEeFJR%2BK%2F54Oid6NHrwKvuKgqAVXjp1QqA2%2Bnly2qYf9ntwSg7s7eBJ8KktcBKKGrexJ0Jp1GFri3O2GizdAu%2FWnjGRFOiatHUd35X8OD3IMjp3OpEeQHKBbeK5JSy2f2mRs1dMwIOfASvBfcA9qaUVoXsVJKtwTmQsXP9vIYOYxTcPJvtkpj8fn7hmXFM0CnFTtC4sD6j8MMoWeOU6BbHzPhH5SUwgDXeVQHCVpTmKlHw2xI%2FFvsfLJWFbnlLAKM%2BnMRjSU%2FvsbRjgMXcXSVq0KooKQ59aoiH9pLeHmhaOK45sWUIvMXl9YL%2FewrjC8a22sTJM4CaHduxJYN0pI4Mfi9uRjPFALoZBGwPkKyKBz33gjRzmWHp6bESs8FDyw9TIUALHVP%2BlOgIkQ50JwqJRPeVDYyFOVYeu48Saaj4hiOkBaQvl0MrQ5Xe01o5sPse0Gw5q4U3T6nv%2BMBNsO9NTUYbddLmqeFdPIvenb%2FxTH7booTIIua%2FqAQ6PT5YIXvF2itRMMKKYscIGOqUB%2FUO%2F8mTANNjpl%2FbFKB48zgzluIdtjlZ%2FKA36DMdEFC7SnCZL5jHz8dLWnxLvkenHYPXflLprQbTl0XoneS3m8k5S%2BQ78uNk4Oex%2BNRXzrf5svZWvzGJ3zmARz2XsWnYkoqWcnfWqK1o%2FRu1dCwPZMfWl45%2FWo2E37n0j9%2BlKGdluea4yKE6LndUiHzJEP1xw0C%2BhkXW8wczCsRQzuBYDj9UgautB&X-Amz-Signature=feef78f90006b1fc742e7a9127973a18c7d4644ee2cd54b2871c14a656f0f7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT35Y6V%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDTxqBj%2FAIHTK4B28tiDmzHQLybJHyzHp%2FHywwC4oIruAiEAnhrnwH5yswNm%2BCSgoz3yGuGp3r34nv5DY%2FaGI7%2FCYOoq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBgGRsYkHVzM2hAT5yrcA2%2BrZ6qwold6dTCZhArD7TiFJvHyoCoho1viLA%2F1B5zQZLvxyJzgEpx6RQz%2Bp0W0zxrY4v%2BGJBO9WmjaNH3I882yRQ1reO4S%2FU31en7GrNZIDmpb6022YgEeFJR%2BK%2F54Oid6NHrwKvuKgqAVXjp1QqA2%2Bnly2qYf9ntwSg7s7eBJ8KktcBKKGrexJ0Jp1GFri3O2GizdAu%2FWnjGRFOiatHUd35X8OD3IMjp3OpEeQHKBbeK5JSy2f2mRs1dMwIOfASvBfcA9qaUVoXsVJKtwTmQsXP9vIYOYxTcPJvtkpj8fn7hmXFM0CnFTtC4sD6j8MMoWeOU6BbHzPhH5SUwgDXeVQHCVpTmKlHw2xI%2FFvsfLJWFbnlLAKM%2BnMRjSU%2FvsbRjgMXcXSVq0KooKQ59aoiH9pLeHmhaOK45sWUIvMXl9YL%2FewrjC8a22sTJM4CaHduxJYN0pI4Mfi9uRjPFALoZBGwPkKyKBz33gjRzmWHp6bESs8FDyw9TIUALHVP%2BlOgIkQ50JwqJRPeVDYyFOVYeu48Saaj4hiOkBaQvl0MrQ5Xe01o5sPse0Gw5q4U3T6nv%2BMBNsO9NTUYbddLmqeFdPIvenb%2FxTH7booTIIua%2FqAQ6PT5YIXvF2itRMMKKYscIGOqUB%2FUO%2F8mTANNjpl%2FbFKB48zgzluIdtjlZ%2FKA36DMdEFC7SnCZL5jHz8dLWnxLvkenHYPXflLprQbTl0XoneS3m8k5S%2BQ78uNk4Oex%2BNRXzrf5svZWvzGJ3zmARz2XsWnYkoqWcnfWqK1o%2FRu1dCwPZMfWl45%2FWo2E37n0j9%2BlKGdluea4yKE6LndUiHzJEP1xw0C%2BhkXW8wczCsRQzuBYDj9UgautB&X-Amz-Signature=ff9dc1b85e1d4171e5d493ac530d829b959c5cd692e8922afb99ce55dc794d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT35Y6V%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDTxqBj%2FAIHTK4B28tiDmzHQLybJHyzHp%2FHywwC4oIruAiEAnhrnwH5yswNm%2BCSgoz3yGuGp3r34nv5DY%2FaGI7%2FCYOoq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBgGRsYkHVzM2hAT5yrcA2%2BrZ6qwold6dTCZhArD7TiFJvHyoCoho1viLA%2F1B5zQZLvxyJzgEpx6RQz%2Bp0W0zxrY4v%2BGJBO9WmjaNH3I882yRQ1reO4S%2FU31en7GrNZIDmpb6022YgEeFJR%2BK%2F54Oid6NHrwKvuKgqAVXjp1QqA2%2Bnly2qYf9ntwSg7s7eBJ8KktcBKKGrexJ0Jp1GFri3O2GizdAu%2FWnjGRFOiatHUd35X8OD3IMjp3OpEeQHKBbeK5JSy2f2mRs1dMwIOfASvBfcA9qaUVoXsVJKtwTmQsXP9vIYOYxTcPJvtkpj8fn7hmXFM0CnFTtC4sD6j8MMoWeOU6BbHzPhH5SUwgDXeVQHCVpTmKlHw2xI%2FFvsfLJWFbnlLAKM%2BnMRjSU%2FvsbRjgMXcXSVq0KooKQ59aoiH9pLeHmhaOK45sWUIvMXl9YL%2FewrjC8a22sTJM4CaHduxJYN0pI4Mfi9uRjPFALoZBGwPkKyKBz33gjRzmWHp6bESs8FDyw9TIUALHVP%2BlOgIkQ50JwqJRPeVDYyFOVYeu48Saaj4hiOkBaQvl0MrQ5Xe01o5sPse0Gw5q4U3T6nv%2BMBNsO9NTUYbddLmqeFdPIvenb%2FxTH7booTIIua%2FqAQ6PT5YIXvF2itRMMKKYscIGOqUB%2FUO%2F8mTANNjpl%2FbFKB48zgzluIdtjlZ%2FKA36DMdEFC7SnCZL5jHz8dLWnxLvkenHYPXflLprQbTl0XoneS3m8k5S%2BQ78uNk4Oex%2BNRXzrf5svZWvzGJ3zmARz2XsWnYkoqWcnfWqK1o%2FRu1dCwPZMfWl45%2FWo2E37n0j9%2BlKGdluea4yKE6LndUiHzJEP1xw0C%2BhkXW8wczCsRQzuBYDj9UgautB&X-Amz-Signature=326249c256df4c33a1ef51eca5ebc5ed7d54f98df2f330a00c8f573a058c61db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT35Y6V%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDTxqBj%2FAIHTK4B28tiDmzHQLybJHyzHp%2FHywwC4oIruAiEAnhrnwH5yswNm%2BCSgoz3yGuGp3r34nv5DY%2FaGI7%2FCYOoq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBgGRsYkHVzM2hAT5yrcA2%2BrZ6qwold6dTCZhArD7TiFJvHyoCoho1viLA%2F1B5zQZLvxyJzgEpx6RQz%2Bp0W0zxrY4v%2BGJBO9WmjaNH3I882yRQ1reO4S%2FU31en7GrNZIDmpb6022YgEeFJR%2BK%2F54Oid6NHrwKvuKgqAVXjp1QqA2%2Bnly2qYf9ntwSg7s7eBJ8KktcBKKGrexJ0Jp1GFri3O2GizdAu%2FWnjGRFOiatHUd35X8OD3IMjp3OpEeQHKBbeK5JSy2f2mRs1dMwIOfASvBfcA9qaUVoXsVJKtwTmQsXP9vIYOYxTcPJvtkpj8fn7hmXFM0CnFTtC4sD6j8MMoWeOU6BbHzPhH5SUwgDXeVQHCVpTmKlHw2xI%2FFvsfLJWFbnlLAKM%2BnMRjSU%2FvsbRjgMXcXSVq0KooKQ59aoiH9pLeHmhaOK45sWUIvMXl9YL%2FewrjC8a22sTJM4CaHduxJYN0pI4Mfi9uRjPFALoZBGwPkKyKBz33gjRzmWHp6bESs8FDyw9TIUALHVP%2BlOgIkQ50JwqJRPeVDYyFOVYeu48Saaj4hiOkBaQvl0MrQ5Xe01o5sPse0Gw5q4U3T6nv%2BMBNsO9NTUYbddLmqeFdPIvenb%2FxTH7booTIIua%2FqAQ6PT5YIXvF2itRMMKKYscIGOqUB%2FUO%2F8mTANNjpl%2FbFKB48zgzluIdtjlZ%2FKA36DMdEFC7SnCZL5jHz8dLWnxLvkenHYPXflLprQbTl0XoneS3m8k5S%2BQ78uNk4Oex%2BNRXzrf5svZWvzGJ3zmARz2XsWnYkoqWcnfWqK1o%2FRu1dCwPZMfWl45%2FWo2E37n0j9%2BlKGdluea4yKE6LndUiHzJEP1xw0C%2BhkXW8wczCsRQzuBYDj9UgautB&X-Amz-Signature=babfc6b296f4bb34eae76208f63a01a53ac85e6d053a16d61f36e55374c7ac06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT35Y6V%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDTxqBj%2FAIHTK4B28tiDmzHQLybJHyzHp%2FHywwC4oIruAiEAnhrnwH5yswNm%2BCSgoz3yGuGp3r34nv5DY%2FaGI7%2FCYOoq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBgGRsYkHVzM2hAT5yrcA2%2BrZ6qwold6dTCZhArD7TiFJvHyoCoho1viLA%2F1B5zQZLvxyJzgEpx6RQz%2Bp0W0zxrY4v%2BGJBO9WmjaNH3I882yRQ1reO4S%2FU31en7GrNZIDmpb6022YgEeFJR%2BK%2F54Oid6NHrwKvuKgqAVXjp1QqA2%2Bnly2qYf9ntwSg7s7eBJ8KktcBKKGrexJ0Jp1GFri3O2GizdAu%2FWnjGRFOiatHUd35X8OD3IMjp3OpEeQHKBbeK5JSy2f2mRs1dMwIOfASvBfcA9qaUVoXsVJKtwTmQsXP9vIYOYxTcPJvtkpj8fn7hmXFM0CnFTtC4sD6j8MMoWeOU6BbHzPhH5SUwgDXeVQHCVpTmKlHw2xI%2FFvsfLJWFbnlLAKM%2BnMRjSU%2FvsbRjgMXcXSVq0KooKQ59aoiH9pLeHmhaOK45sWUIvMXl9YL%2FewrjC8a22sTJM4CaHduxJYN0pI4Mfi9uRjPFALoZBGwPkKyKBz33gjRzmWHp6bESs8FDyw9TIUALHVP%2BlOgIkQ50JwqJRPeVDYyFOVYeu48Saaj4hiOkBaQvl0MrQ5Xe01o5sPse0Gw5q4U3T6nv%2BMBNsO9NTUYbddLmqeFdPIvenb%2FxTH7booTIIua%2FqAQ6PT5YIXvF2itRMMKKYscIGOqUB%2FUO%2F8mTANNjpl%2FbFKB48zgzluIdtjlZ%2FKA36DMdEFC7SnCZL5jHz8dLWnxLvkenHYPXflLprQbTl0XoneS3m8k5S%2BQ78uNk4Oex%2BNRXzrf5svZWvzGJ3zmARz2XsWnYkoqWcnfWqK1o%2FRu1dCwPZMfWl45%2FWo2E37n0j9%2BlKGdluea4yKE6LndUiHzJEP1xw0C%2BhkXW8wczCsRQzuBYDj9UgautB&X-Amz-Signature=daba265e1e4ec79130a2ce884888fa863b4e09781dbc32b0c8fdac425cc3e2bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT35Y6V%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDTxqBj%2FAIHTK4B28tiDmzHQLybJHyzHp%2FHywwC4oIruAiEAnhrnwH5yswNm%2BCSgoz3yGuGp3r34nv5DY%2FaGI7%2FCYOoq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBgGRsYkHVzM2hAT5yrcA2%2BrZ6qwold6dTCZhArD7TiFJvHyoCoho1viLA%2F1B5zQZLvxyJzgEpx6RQz%2Bp0W0zxrY4v%2BGJBO9WmjaNH3I882yRQ1reO4S%2FU31en7GrNZIDmpb6022YgEeFJR%2BK%2F54Oid6NHrwKvuKgqAVXjp1QqA2%2Bnly2qYf9ntwSg7s7eBJ8KktcBKKGrexJ0Jp1GFri3O2GizdAu%2FWnjGRFOiatHUd35X8OD3IMjp3OpEeQHKBbeK5JSy2f2mRs1dMwIOfASvBfcA9qaUVoXsVJKtwTmQsXP9vIYOYxTcPJvtkpj8fn7hmXFM0CnFTtC4sD6j8MMoWeOU6BbHzPhH5SUwgDXeVQHCVpTmKlHw2xI%2FFvsfLJWFbnlLAKM%2BnMRjSU%2FvsbRjgMXcXSVq0KooKQ59aoiH9pLeHmhaOK45sWUIvMXl9YL%2FewrjC8a22sTJM4CaHduxJYN0pI4Mfi9uRjPFALoZBGwPkKyKBz33gjRzmWHp6bESs8FDyw9TIUALHVP%2BlOgIkQ50JwqJRPeVDYyFOVYeu48Saaj4hiOkBaQvl0MrQ5Xe01o5sPse0Gw5q4U3T6nv%2BMBNsO9NTUYbddLmqeFdPIvenb%2FxTH7booTIIua%2FqAQ6PT5YIXvF2itRMMKKYscIGOqUB%2FUO%2F8mTANNjpl%2FbFKB48zgzluIdtjlZ%2FKA36DMdEFC7SnCZL5jHz8dLWnxLvkenHYPXflLprQbTl0XoneS3m8k5S%2BQ78uNk4Oex%2BNRXzrf5svZWvzGJ3zmARz2XsWnYkoqWcnfWqK1o%2FRu1dCwPZMfWl45%2FWo2E37n0j9%2BlKGdluea4yKE6LndUiHzJEP1xw0C%2BhkXW8wczCsRQzuBYDj9UgautB&X-Amz-Signature=4906444a6b3e1241012cf928c66213e9d1b45c193c8a72a91d959f2cc1970995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
