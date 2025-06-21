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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHE56FW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSBYkIvI%2Fgcjea8m1CalS%2BCXlAesH24csGsAGJuZEr3AiBRij8PxhZhcFsR8SiTO6e1mhWsPBTUskVXoqNCkP3C5yqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOK6I9DOaFR24BztKtwDZij6qVToBqRajUBokOiexa7ClQMbWSaL7QOllo6rrfBcEQdx8GvgLXMH2jv5yAA12WFPFtYs%2FAXg5LHb7RnJKjznnchf2jxLQuD4awmbHvNowJeBwVI6al4ofAGxPInlWWYG3tLhHpoc07rGdmYsrem9O2ItWaK%2F4sjxlg%2Fn9IQRoXPSDzHB5mcFrPbpjYvybm%2FI0Tumogel69%2B8wukKIPovO3NH9506968QE8trwtu%2FOJISrmRPyx7lFnVN6lyMQ8HmWVYP30w%2B%2Bbz5QrIl4MAMoOFDET95sv2PrLL%2FG0eAcC5m3nSFxe9Tz%2F7UE3soMQlU4IKhpWYS2pXWITzAEdPw%2FdGZLOhK8qthAzPYw7nAhdN3LU57irMWm422xY3piVrYPqes4gYdTZgsGgRWNmfw9GKATMNF67GMv95YAYHikmqvteRLG7zxMf%2Fg7wUqlTQlG53SGL%2FKC2xWu59YNwyfDgcy657mT3asTBrtm%2FbTHANBSw0b2vtqAVPfYXr2CK6oosJCUYuEl5Cm%2B5wM%2B%2Bb2GToxQQSKxValrBGnq9Py728QcIIw91roh08ow5co28C1GoYdWdIbkCdR1sn%2BfEUEGo75ptusjT9CY9rRoE9uqmyJzgqsxM1kHMEw%2F93cwgY6pgHnczLCG11AWw9z9KsZqz0dfcXNVBVzaAKrgX%2F74MVH%2BS5kwYPZNXcIuRtK2U5UKrGZv7UinRZwf1cbyh0Ra3gaB3vXnQVxWv0%2F0iQugHRKrY%2BEsj8OImXeM64ygZskhsSgvKTqTMUTabCcCxq295klLiEmLxFcZI0VArvvcCA0ujMPGysBReT%2BQyyAzZBL5b0FFVkR%2BN4788aa1WEzf9Efg8aKTz%2FE&X-Amz-Signature=6eada3d2d8500aaba3fa7343dac621e6050ff47332a4544cb03b4afbf4be9287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHE56FW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSBYkIvI%2Fgcjea8m1CalS%2BCXlAesH24csGsAGJuZEr3AiBRij8PxhZhcFsR8SiTO6e1mhWsPBTUskVXoqNCkP3C5yqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOK6I9DOaFR24BztKtwDZij6qVToBqRajUBokOiexa7ClQMbWSaL7QOllo6rrfBcEQdx8GvgLXMH2jv5yAA12WFPFtYs%2FAXg5LHb7RnJKjznnchf2jxLQuD4awmbHvNowJeBwVI6al4ofAGxPInlWWYG3tLhHpoc07rGdmYsrem9O2ItWaK%2F4sjxlg%2Fn9IQRoXPSDzHB5mcFrPbpjYvybm%2FI0Tumogel69%2B8wukKIPovO3NH9506968QE8trwtu%2FOJISrmRPyx7lFnVN6lyMQ8HmWVYP30w%2B%2Bbz5QrIl4MAMoOFDET95sv2PrLL%2FG0eAcC5m3nSFxe9Tz%2F7UE3soMQlU4IKhpWYS2pXWITzAEdPw%2FdGZLOhK8qthAzPYw7nAhdN3LU57irMWm422xY3piVrYPqes4gYdTZgsGgRWNmfw9GKATMNF67GMv95YAYHikmqvteRLG7zxMf%2Fg7wUqlTQlG53SGL%2FKC2xWu59YNwyfDgcy657mT3asTBrtm%2FbTHANBSw0b2vtqAVPfYXr2CK6oosJCUYuEl5Cm%2B5wM%2B%2Bb2GToxQQSKxValrBGnq9Py728QcIIw91roh08ow5co28C1GoYdWdIbkCdR1sn%2BfEUEGo75ptusjT9CY9rRoE9uqmyJzgqsxM1kHMEw%2F93cwgY6pgHnczLCG11AWw9z9KsZqz0dfcXNVBVzaAKrgX%2F74MVH%2BS5kwYPZNXcIuRtK2U5UKrGZv7UinRZwf1cbyh0Ra3gaB3vXnQVxWv0%2F0iQugHRKrY%2BEsj8OImXeM64ygZskhsSgvKTqTMUTabCcCxq295klLiEmLxFcZI0VArvvcCA0ujMPGysBReT%2BQyyAzZBL5b0FFVkR%2BN4788aa1WEzf9Efg8aKTz%2FE&X-Amz-Signature=9b0f9cac399366c97e314217008d6fe0b6fc38f1f277ff6d68ff685e044c966b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHE56FW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSBYkIvI%2Fgcjea8m1CalS%2BCXlAesH24csGsAGJuZEr3AiBRij8PxhZhcFsR8SiTO6e1mhWsPBTUskVXoqNCkP3C5yqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOK6I9DOaFR24BztKtwDZij6qVToBqRajUBokOiexa7ClQMbWSaL7QOllo6rrfBcEQdx8GvgLXMH2jv5yAA12WFPFtYs%2FAXg5LHb7RnJKjznnchf2jxLQuD4awmbHvNowJeBwVI6al4ofAGxPInlWWYG3tLhHpoc07rGdmYsrem9O2ItWaK%2F4sjxlg%2Fn9IQRoXPSDzHB5mcFrPbpjYvybm%2FI0Tumogel69%2B8wukKIPovO3NH9506968QE8trwtu%2FOJISrmRPyx7lFnVN6lyMQ8HmWVYP30w%2B%2Bbz5QrIl4MAMoOFDET95sv2PrLL%2FG0eAcC5m3nSFxe9Tz%2F7UE3soMQlU4IKhpWYS2pXWITzAEdPw%2FdGZLOhK8qthAzPYw7nAhdN3LU57irMWm422xY3piVrYPqes4gYdTZgsGgRWNmfw9GKATMNF67GMv95YAYHikmqvteRLG7zxMf%2Fg7wUqlTQlG53SGL%2FKC2xWu59YNwyfDgcy657mT3asTBrtm%2FbTHANBSw0b2vtqAVPfYXr2CK6oosJCUYuEl5Cm%2B5wM%2B%2Bb2GToxQQSKxValrBGnq9Py728QcIIw91roh08ow5co28C1GoYdWdIbkCdR1sn%2BfEUEGo75ptusjT9CY9rRoE9uqmyJzgqsxM1kHMEw%2F93cwgY6pgHnczLCG11AWw9z9KsZqz0dfcXNVBVzaAKrgX%2F74MVH%2BS5kwYPZNXcIuRtK2U5UKrGZv7UinRZwf1cbyh0Ra3gaB3vXnQVxWv0%2F0iQugHRKrY%2BEsj8OImXeM64ygZskhsSgvKTqTMUTabCcCxq295klLiEmLxFcZI0VArvvcCA0ujMPGysBReT%2BQyyAzZBL5b0FFVkR%2BN4788aa1WEzf9Efg8aKTz%2FE&X-Amz-Signature=ec3e030d2826820acc371b4ca263948ff8d6fac068daba81f3414a2b0a69a5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHE56FW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSBYkIvI%2Fgcjea8m1CalS%2BCXlAesH24csGsAGJuZEr3AiBRij8PxhZhcFsR8SiTO6e1mhWsPBTUskVXoqNCkP3C5yqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOK6I9DOaFR24BztKtwDZij6qVToBqRajUBokOiexa7ClQMbWSaL7QOllo6rrfBcEQdx8GvgLXMH2jv5yAA12WFPFtYs%2FAXg5LHb7RnJKjznnchf2jxLQuD4awmbHvNowJeBwVI6al4ofAGxPInlWWYG3tLhHpoc07rGdmYsrem9O2ItWaK%2F4sjxlg%2Fn9IQRoXPSDzHB5mcFrPbpjYvybm%2FI0Tumogel69%2B8wukKIPovO3NH9506968QE8trwtu%2FOJISrmRPyx7lFnVN6lyMQ8HmWVYP30w%2B%2Bbz5QrIl4MAMoOFDET95sv2PrLL%2FG0eAcC5m3nSFxe9Tz%2F7UE3soMQlU4IKhpWYS2pXWITzAEdPw%2FdGZLOhK8qthAzPYw7nAhdN3LU57irMWm422xY3piVrYPqes4gYdTZgsGgRWNmfw9GKATMNF67GMv95YAYHikmqvteRLG7zxMf%2Fg7wUqlTQlG53SGL%2FKC2xWu59YNwyfDgcy657mT3asTBrtm%2FbTHANBSw0b2vtqAVPfYXr2CK6oosJCUYuEl5Cm%2B5wM%2B%2Bb2GToxQQSKxValrBGnq9Py728QcIIw91roh08ow5co28C1GoYdWdIbkCdR1sn%2BfEUEGo75ptusjT9CY9rRoE9uqmyJzgqsxM1kHMEw%2F93cwgY6pgHnczLCG11AWw9z9KsZqz0dfcXNVBVzaAKrgX%2F74MVH%2BS5kwYPZNXcIuRtK2U5UKrGZv7UinRZwf1cbyh0Ra3gaB3vXnQVxWv0%2F0iQugHRKrY%2BEsj8OImXeM64ygZskhsSgvKTqTMUTabCcCxq295klLiEmLxFcZI0VArvvcCA0ujMPGysBReT%2BQyyAzZBL5b0FFVkR%2BN4788aa1WEzf9Efg8aKTz%2FE&X-Amz-Signature=9e420843050354a529d90b53334f986fa64ad8fb3261866f8e14a7f64757c625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHE56FW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSBYkIvI%2Fgcjea8m1CalS%2BCXlAesH24csGsAGJuZEr3AiBRij8PxhZhcFsR8SiTO6e1mhWsPBTUskVXoqNCkP3C5yqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOK6I9DOaFR24BztKtwDZij6qVToBqRajUBokOiexa7ClQMbWSaL7QOllo6rrfBcEQdx8GvgLXMH2jv5yAA12WFPFtYs%2FAXg5LHb7RnJKjznnchf2jxLQuD4awmbHvNowJeBwVI6al4ofAGxPInlWWYG3tLhHpoc07rGdmYsrem9O2ItWaK%2F4sjxlg%2Fn9IQRoXPSDzHB5mcFrPbpjYvybm%2FI0Tumogel69%2B8wukKIPovO3NH9506968QE8trwtu%2FOJISrmRPyx7lFnVN6lyMQ8HmWVYP30w%2B%2Bbz5QrIl4MAMoOFDET95sv2PrLL%2FG0eAcC5m3nSFxe9Tz%2F7UE3soMQlU4IKhpWYS2pXWITzAEdPw%2FdGZLOhK8qthAzPYw7nAhdN3LU57irMWm422xY3piVrYPqes4gYdTZgsGgRWNmfw9GKATMNF67GMv95YAYHikmqvteRLG7zxMf%2Fg7wUqlTQlG53SGL%2FKC2xWu59YNwyfDgcy657mT3asTBrtm%2FbTHANBSw0b2vtqAVPfYXr2CK6oosJCUYuEl5Cm%2B5wM%2B%2Bb2GToxQQSKxValrBGnq9Py728QcIIw91roh08ow5co28C1GoYdWdIbkCdR1sn%2BfEUEGo75ptusjT9CY9rRoE9uqmyJzgqsxM1kHMEw%2F93cwgY6pgHnczLCG11AWw9z9KsZqz0dfcXNVBVzaAKrgX%2F74MVH%2BS5kwYPZNXcIuRtK2U5UKrGZv7UinRZwf1cbyh0Ra3gaB3vXnQVxWv0%2F0iQugHRKrY%2BEsj8OImXeM64ygZskhsSgvKTqTMUTabCcCxq295klLiEmLxFcZI0VArvvcCA0ujMPGysBReT%2BQyyAzZBL5b0FFVkR%2BN4788aa1WEzf9Efg8aKTz%2FE&X-Amz-Signature=a4dc6471d3df96e3d70b28eadfde6e91fc23d7fe2c77b286570a20d7e8081e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHE56FW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSBYkIvI%2Fgcjea8m1CalS%2BCXlAesH24csGsAGJuZEr3AiBRij8PxhZhcFsR8SiTO6e1mhWsPBTUskVXoqNCkP3C5yqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOK6I9DOaFR24BztKtwDZij6qVToBqRajUBokOiexa7ClQMbWSaL7QOllo6rrfBcEQdx8GvgLXMH2jv5yAA12WFPFtYs%2FAXg5LHb7RnJKjznnchf2jxLQuD4awmbHvNowJeBwVI6al4ofAGxPInlWWYG3tLhHpoc07rGdmYsrem9O2ItWaK%2F4sjxlg%2Fn9IQRoXPSDzHB5mcFrPbpjYvybm%2FI0Tumogel69%2B8wukKIPovO3NH9506968QE8trwtu%2FOJISrmRPyx7lFnVN6lyMQ8HmWVYP30w%2B%2Bbz5QrIl4MAMoOFDET95sv2PrLL%2FG0eAcC5m3nSFxe9Tz%2F7UE3soMQlU4IKhpWYS2pXWITzAEdPw%2FdGZLOhK8qthAzPYw7nAhdN3LU57irMWm422xY3piVrYPqes4gYdTZgsGgRWNmfw9GKATMNF67GMv95YAYHikmqvteRLG7zxMf%2Fg7wUqlTQlG53SGL%2FKC2xWu59YNwyfDgcy657mT3asTBrtm%2FbTHANBSw0b2vtqAVPfYXr2CK6oosJCUYuEl5Cm%2B5wM%2B%2Bb2GToxQQSKxValrBGnq9Py728QcIIw91roh08ow5co28C1GoYdWdIbkCdR1sn%2BfEUEGo75ptusjT9CY9rRoE9uqmyJzgqsxM1kHMEw%2F93cwgY6pgHnczLCG11AWw9z9KsZqz0dfcXNVBVzaAKrgX%2F74MVH%2BS5kwYPZNXcIuRtK2U5UKrGZv7UinRZwf1cbyh0Ra3gaB3vXnQVxWv0%2F0iQugHRKrY%2BEsj8OImXeM64ygZskhsSgvKTqTMUTabCcCxq295klLiEmLxFcZI0VArvvcCA0ujMPGysBReT%2BQyyAzZBL5b0FFVkR%2BN4788aa1WEzf9Efg8aKTz%2FE&X-Amz-Signature=c501ed01cd16f02c29fff4765cdc213984a5f4c555b7ca66837086fbdb23a460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHE56FW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSBYkIvI%2Fgcjea8m1CalS%2BCXlAesH24csGsAGJuZEr3AiBRij8PxhZhcFsR8SiTO6e1mhWsPBTUskVXoqNCkP3C5yqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOK6I9DOaFR24BztKtwDZij6qVToBqRajUBokOiexa7ClQMbWSaL7QOllo6rrfBcEQdx8GvgLXMH2jv5yAA12WFPFtYs%2FAXg5LHb7RnJKjznnchf2jxLQuD4awmbHvNowJeBwVI6al4ofAGxPInlWWYG3tLhHpoc07rGdmYsrem9O2ItWaK%2F4sjxlg%2Fn9IQRoXPSDzHB5mcFrPbpjYvybm%2FI0Tumogel69%2B8wukKIPovO3NH9506968QE8trwtu%2FOJISrmRPyx7lFnVN6lyMQ8HmWVYP30w%2B%2Bbz5QrIl4MAMoOFDET95sv2PrLL%2FG0eAcC5m3nSFxe9Tz%2F7UE3soMQlU4IKhpWYS2pXWITzAEdPw%2FdGZLOhK8qthAzPYw7nAhdN3LU57irMWm422xY3piVrYPqes4gYdTZgsGgRWNmfw9GKATMNF67GMv95YAYHikmqvteRLG7zxMf%2Fg7wUqlTQlG53SGL%2FKC2xWu59YNwyfDgcy657mT3asTBrtm%2FbTHANBSw0b2vtqAVPfYXr2CK6oosJCUYuEl5Cm%2B5wM%2B%2Bb2GToxQQSKxValrBGnq9Py728QcIIw91roh08ow5co28C1GoYdWdIbkCdR1sn%2BfEUEGo75ptusjT9CY9rRoE9uqmyJzgqsxM1kHMEw%2F93cwgY6pgHnczLCG11AWw9z9KsZqz0dfcXNVBVzaAKrgX%2F74MVH%2BS5kwYPZNXcIuRtK2U5UKrGZv7UinRZwf1cbyh0Ra3gaB3vXnQVxWv0%2F0iQugHRKrY%2BEsj8OImXeM64ygZskhsSgvKTqTMUTabCcCxq295klLiEmLxFcZI0VArvvcCA0ujMPGysBReT%2BQyyAzZBL5b0FFVkR%2BN4788aa1WEzf9Efg8aKTz%2FE&X-Amz-Signature=147bd1536022fef8b4a8f9e215b770a5384f79e321c130d3220fd324afffbc10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHE56FW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSBYkIvI%2Fgcjea8m1CalS%2BCXlAesH24csGsAGJuZEr3AiBRij8PxhZhcFsR8SiTO6e1mhWsPBTUskVXoqNCkP3C5yqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOK6I9DOaFR24BztKtwDZij6qVToBqRajUBokOiexa7ClQMbWSaL7QOllo6rrfBcEQdx8GvgLXMH2jv5yAA12WFPFtYs%2FAXg5LHb7RnJKjznnchf2jxLQuD4awmbHvNowJeBwVI6al4ofAGxPInlWWYG3tLhHpoc07rGdmYsrem9O2ItWaK%2F4sjxlg%2Fn9IQRoXPSDzHB5mcFrPbpjYvybm%2FI0Tumogel69%2B8wukKIPovO3NH9506968QE8trwtu%2FOJISrmRPyx7lFnVN6lyMQ8HmWVYP30w%2B%2Bbz5QrIl4MAMoOFDET95sv2PrLL%2FG0eAcC5m3nSFxe9Tz%2F7UE3soMQlU4IKhpWYS2pXWITzAEdPw%2FdGZLOhK8qthAzPYw7nAhdN3LU57irMWm422xY3piVrYPqes4gYdTZgsGgRWNmfw9GKATMNF67GMv95YAYHikmqvteRLG7zxMf%2Fg7wUqlTQlG53SGL%2FKC2xWu59YNwyfDgcy657mT3asTBrtm%2FbTHANBSw0b2vtqAVPfYXr2CK6oosJCUYuEl5Cm%2B5wM%2B%2Bb2GToxQQSKxValrBGnq9Py728QcIIw91roh08ow5co28C1GoYdWdIbkCdR1sn%2BfEUEGo75ptusjT9CY9rRoE9uqmyJzgqsxM1kHMEw%2F93cwgY6pgHnczLCG11AWw9z9KsZqz0dfcXNVBVzaAKrgX%2F74MVH%2BS5kwYPZNXcIuRtK2U5UKrGZv7UinRZwf1cbyh0Ra3gaB3vXnQVxWv0%2F0iQugHRKrY%2BEsj8OImXeM64ygZskhsSgvKTqTMUTabCcCxq295klLiEmLxFcZI0VArvvcCA0ujMPGysBReT%2BQyyAzZBL5b0FFVkR%2BN4788aa1WEzf9Efg8aKTz%2FE&X-Amz-Signature=4da664cdf5ff14e39b5be478ea077e16216e0dc34c0299ba9eb3a0b251ea3559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
