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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEB5ZDZT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICnB9edxpQgz5TPAD1FAmqCCAOgKg%2B3t656%2FGT99LEN7AiEApctt17ujs%2Bk6uQ%2BkNi37w%2BmWB%2FBUTV6k4ADliyhpL7Iq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLAYT205lTN9zcng1ircA6VxADlcHHxJ6WBYhwPPfbIAf%2BSq3zmYYu4%2BQn9jVFr3NOxJpPssZI%2FP0ScP%2FpuWX7KHQkppxJFRWGuMsSnlI7PDLXXmZS7uMqCX%2F0du3sJMZL1on4g%2BydByOIfPGVnwo90QPiYMPejP4qvMBzBxBNcd50KV3KVeHiL5YF6nb4VgyBWqyrsyNZzj1IWh2v19%2FG8bQR1PY0Nz1DsYZp6W4C5OPOdAZLtxchlkQR08Uj8CNwufuYda0wbfpuEbcsAonuiP0L89R5ptrhi67HSDQoioV%2FcHUBoOFqHwTia2ml06PyaoetF7N2Dze8tr16DJ7PqVhNYUXdyH34vwokB435RvW2%2Fe1rcTHcwcS457WRj2abAadpa76OPtkzm%2BzEhOAbCDi5I6C1q5w1cxn1KdAVDln4C8w6dmyCHUcz4KyA0WTeiZee7j0r69ObCoVZc4O6MAC78wX3gjecfHwoOwwFZ4za2jlxb0weVBAIeaBlkC%2BFopPc%2BvQgNPokCXxOBlfLwAZF2aV62t0qYrgHvzyII582COZh3Yk%2FWYJ%2F73yoKlCOVTolrUCW6fk91O43vCyjXNVxqVBRbUz7xx5dh3fAYcQb5EADY%2BWRuB5jDR1jYKLrwulLfFQ71hvZaUMJaMjcQGOqUBzXKTlPKFJQ%2B7RYr%2Brump4oUDn%2BbK%2Bzn3kczcqnxYSIMegG29vpLW7AONf8oiJkWmXC%2FxEZ5V3Y6zr95u4WxgPhn7VOO92U1qkUuADthKn6Bp24Z7D25vQvSkEgWTFW61%2BOYRUMS1DPivO1xLa1qVfsSoD4Azc4OJNuNLNYTiAV7TzAPSX8wmQq40ACTsVH8cEVpjatA3XXUIKu%2FJmHU7NN08%2F8x6&X-Amz-Signature=1c968609110e73b7c7c5e8ad856a9e51a4f96c307b8a8cfb5eec42b138b2361c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEB5ZDZT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICnB9edxpQgz5TPAD1FAmqCCAOgKg%2B3t656%2FGT99LEN7AiEApctt17ujs%2Bk6uQ%2BkNi37w%2BmWB%2FBUTV6k4ADliyhpL7Iq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLAYT205lTN9zcng1ircA6VxADlcHHxJ6WBYhwPPfbIAf%2BSq3zmYYu4%2BQn9jVFr3NOxJpPssZI%2FP0ScP%2FpuWX7KHQkppxJFRWGuMsSnlI7PDLXXmZS7uMqCX%2F0du3sJMZL1on4g%2BydByOIfPGVnwo90QPiYMPejP4qvMBzBxBNcd50KV3KVeHiL5YF6nb4VgyBWqyrsyNZzj1IWh2v19%2FG8bQR1PY0Nz1DsYZp6W4C5OPOdAZLtxchlkQR08Uj8CNwufuYda0wbfpuEbcsAonuiP0L89R5ptrhi67HSDQoioV%2FcHUBoOFqHwTia2ml06PyaoetF7N2Dze8tr16DJ7PqVhNYUXdyH34vwokB435RvW2%2Fe1rcTHcwcS457WRj2abAadpa76OPtkzm%2BzEhOAbCDi5I6C1q5w1cxn1KdAVDln4C8w6dmyCHUcz4KyA0WTeiZee7j0r69ObCoVZc4O6MAC78wX3gjecfHwoOwwFZ4za2jlxb0weVBAIeaBlkC%2BFopPc%2BvQgNPokCXxOBlfLwAZF2aV62t0qYrgHvzyII582COZh3Yk%2FWYJ%2F73yoKlCOVTolrUCW6fk91O43vCyjXNVxqVBRbUz7xx5dh3fAYcQb5EADY%2BWRuB5jDR1jYKLrwulLfFQ71hvZaUMJaMjcQGOqUBzXKTlPKFJQ%2B7RYr%2Brump4oUDn%2BbK%2Bzn3kczcqnxYSIMegG29vpLW7AONf8oiJkWmXC%2FxEZ5V3Y6zr95u4WxgPhn7VOO92U1qkUuADthKn6Bp24Z7D25vQvSkEgWTFW61%2BOYRUMS1DPivO1xLa1qVfsSoD4Azc4OJNuNLNYTiAV7TzAPSX8wmQq40ACTsVH8cEVpjatA3XXUIKu%2FJmHU7NN08%2F8x6&X-Amz-Signature=62eb852e32ef72c4265895a7a266505d96abd5ac3d61240f61d9b1f3304b6887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEB5ZDZT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICnB9edxpQgz5TPAD1FAmqCCAOgKg%2B3t656%2FGT99LEN7AiEApctt17ujs%2Bk6uQ%2BkNi37w%2BmWB%2FBUTV6k4ADliyhpL7Iq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLAYT205lTN9zcng1ircA6VxADlcHHxJ6WBYhwPPfbIAf%2BSq3zmYYu4%2BQn9jVFr3NOxJpPssZI%2FP0ScP%2FpuWX7KHQkppxJFRWGuMsSnlI7PDLXXmZS7uMqCX%2F0du3sJMZL1on4g%2BydByOIfPGVnwo90QPiYMPejP4qvMBzBxBNcd50KV3KVeHiL5YF6nb4VgyBWqyrsyNZzj1IWh2v19%2FG8bQR1PY0Nz1DsYZp6W4C5OPOdAZLtxchlkQR08Uj8CNwufuYda0wbfpuEbcsAonuiP0L89R5ptrhi67HSDQoioV%2FcHUBoOFqHwTia2ml06PyaoetF7N2Dze8tr16DJ7PqVhNYUXdyH34vwokB435RvW2%2Fe1rcTHcwcS457WRj2abAadpa76OPtkzm%2BzEhOAbCDi5I6C1q5w1cxn1KdAVDln4C8w6dmyCHUcz4KyA0WTeiZee7j0r69ObCoVZc4O6MAC78wX3gjecfHwoOwwFZ4za2jlxb0weVBAIeaBlkC%2BFopPc%2BvQgNPokCXxOBlfLwAZF2aV62t0qYrgHvzyII582COZh3Yk%2FWYJ%2F73yoKlCOVTolrUCW6fk91O43vCyjXNVxqVBRbUz7xx5dh3fAYcQb5EADY%2BWRuB5jDR1jYKLrwulLfFQ71hvZaUMJaMjcQGOqUBzXKTlPKFJQ%2B7RYr%2Brump4oUDn%2BbK%2Bzn3kczcqnxYSIMegG29vpLW7AONf8oiJkWmXC%2FxEZ5V3Y6zr95u4WxgPhn7VOO92U1qkUuADthKn6Bp24Z7D25vQvSkEgWTFW61%2BOYRUMS1DPivO1xLa1qVfsSoD4Azc4OJNuNLNYTiAV7TzAPSX8wmQq40ACTsVH8cEVpjatA3XXUIKu%2FJmHU7NN08%2F8x6&X-Amz-Signature=040d2da5a1ec98fed390ca610ec04170522a5e06092590bfa9e0cd5fb977a599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEB5ZDZT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICnB9edxpQgz5TPAD1FAmqCCAOgKg%2B3t656%2FGT99LEN7AiEApctt17ujs%2Bk6uQ%2BkNi37w%2BmWB%2FBUTV6k4ADliyhpL7Iq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLAYT205lTN9zcng1ircA6VxADlcHHxJ6WBYhwPPfbIAf%2BSq3zmYYu4%2BQn9jVFr3NOxJpPssZI%2FP0ScP%2FpuWX7KHQkppxJFRWGuMsSnlI7PDLXXmZS7uMqCX%2F0du3sJMZL1on4g%2BydByOIfPGVnwo90QPiYMPejP4qvMBzBxBNcd50KV3KVeHiL5YF6nb4VgyBWqyrsyNZzj1IWh2v19%2FG8bQR1PY0Nz1DsYZp6W4C5OPOdAZLtxchlkQR08Uj8CNwufuYda0wbfpuEbcsAonuiP0L89R5ptrhi67HSDQoioV%2FcHUBoOFqHwTia2ml06PyaoetF7N2Dze8tr16DJ7PqVhNYUXdyH34vwokB435RvW2%2Fe1rcTHcwcS457WRj2abAadpa76OPtkzm%2BzEhOAbCDi5I6C1q5w1cxn1KdAVDln4C8w6dmyCHUcz4KyA0WTeiZee7j0r69ObCoVZc4O6MAC78wX3gjecfHwoOwwFZ4za2jlxb0weVBAIeaBlkC%2BFopPc%2BvQgNPokCXxOBlfLwAZF2aV62t0qYrgHvzyII582COZh3Yk%2FWYJ%2F73yoKlCOVTolrUCW6fk91O43vCyjXNVxqVBRbUz7xx5dh3fAYcQb5EADY%2BWRuB5jDR1jYKLrwulLfFQ71hvZaUMJaMjcQGOqUBzXKTlPKFJQ%2B7RYr%2Brump4oUDn%2BbK%2Bzn3kczcqnxYSIMegG29vpLW7AONf8oiJkWmXC%2FxEZ5V3Y6zr95u4WxgPhn7VOO92U1qkUuADthKn6Bp24Z7D25vQvSkEgWTFW61%2BOYRUMS1DPivO1xLa1qVfsSoD4Azc4OJNuNLNYTiAV7TzAPSX8wmQq40ACTsVH8cEVpjatA3XXUIKu%2FJmHU7NN08%2F8x6&X-Amz-Signature=87aedd152e8e89c68c63083672594d615ad54494781fc2d47c952e61be7f0518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEB5ZDZT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICnB9edxpQgz5TPAD1FAmqCCAOgKg%2B3t656%2FGT99LEN7AiEApctt17ujs%2Bk6uQ%2BkNi37w%2BmWB%2FBUTV6k4ADliyhpL7Iq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLAYT205lTN9zcng1ircA6VxADlcHHxJ6WBYhwPPfbIAf%2BSq3zmYYu4%2BQn9jVFr3NOxJpPssZI%2FP0ScP%2FpuWX7KHQkppxJFRWGuMsSnlI7PDLXXmZS7uMqCX%2F0du3sJMZL1on4g%2BydByOIfPGVnwo90QPiYMPejP4qvMBzBxBNcd50KV3KVeHiL5YF6nb4VgyBWqyrsyNZzj1IWh2v19%2FG8bQR1PY0Nz1DsYZp6W4C5OPOdAZLtxchlkQR08Uj8CNwufuYda0wbfpuEbcsAonuiP0L89R5ptrhi67HSDQoioV%2FcHUBoOFqHwTia2ml06PyaoetF7N2Dze8tr16DJ7PqVhNYUXdyH34vwokB435RvW2%2Fe1rcTHcwcS457WRj2abAadpa76OPtkzm%2BzEhOAbCDi5I6C1q5w1cxn1KdAVDln4C8w6dmyCHUcz4KyA0WTeiZee7j0r69ObCoVZc4O6MAC78wX3gjecfHwoOwwFZ4za2jlxb0weVBAIeaBlkC%2BFopPc%2BvQgNPokCXxOBlfLwAZF2aV62t0qYrgHvzyII582COZh3Yk%2FWYJ%2F73yoKlCOVTolrUCW6fk91O43vCyjXNVxqVBRbUz7xx5dh3fAYcQb5EADY%2BWRuB5jDR1jYKLrwulLfFQ71hvZaUMJaMjcQGOqUBzXKTlPKFJQ%2B7RYr%2Brump4oUDn%2BbK%2Bzn3kczcqnxYSIMegG29vpLW7AONf8oiJkWmXC%2FxEZ5V3Y6zr95u4WxgPhn7VOO92U1qkUuADthKn6Bp24Z7D25vQvSkEgWTFW61%2BOYRUMS1DPivO1xLa1qVfsSoD4Azc4OJNuNLNYTiAV7TzAPSX8wmQq40ACTsVH8cEVpjatA3XXUIKu%2FJmHU7NN08%2F8x6&X-Amz-Signature=08f63ceab479c783a9a6f12865c91f92cf095286e6b35095eaa416754733bc9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEB5ZDZT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICnB9edxpQgz5TPAD1FAmqCCAOgKg%2B3t656%2FGT99LEN7AiEApctt17ujs%2Bk6uQ%2BkNi37w%2BmWB%2FBUTV6k4ADliyhpL7Iq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLAYT205lTN9zcng1ircA6VxADlcHHxJ6WBYhwPPfbIAf%2BSq3zmYYu4%2BQn9jVFr3NOxJpPssZI%2FP0ScP%2FpuWX7KHQkppxJFRWGuMsSnlI7PDLXXmZS7uMqCX%2F0du3sJMZL1on4g%2BydByOIfPGVnwo90QPiYMPejP4qvMBzBxBNcd50KV3KVeHiL5YF6nb4VgyBWqyrsyNZzj1IWh2v19%2FG8bQR1PY0Nz1DsYZp6W4C5OPOdAZLtxchlkQR08Uj8CNwufuYda0wbfpuEbcsAonuiP0L89R5ptrhi67HSDQoioV%2FcHUBoOFqHwTia2ml06PyaoetF7N2Dze8tr16DJ7PqVhNYUXdyH34vwokB435RvW2%2Fe1rcTHcwcS457WRj2abAadpa76OPtkzm%2BzEhOAbCDi5I6C1q5w1cxn1KdAVDln4C8w6dmyCHUcz4KyA0WTeiZee7j0r69ObCoVZc4O6MAC78wX3gjecfHwoOwwFZ4za2jlxb0weVBAIeaBlkC%2BFopPc%2BvQgNPokCXxOBlfLwAZF2aV62t0qYrgHvzyII582COZh3Yk%2FWYJ%2F73yoKlCOVTolrUCW6fk91O43vCyjXNVxqVBRbUz7xx5dh3fAYcQb5EADY%2BWRuB5jDR1jYKLrwulLfFQ71hvZaUMJaMjcQGOqUBzXKTlPKFJQ%2B7RYr%2Brump4oUDn%2BbK%2Bzn3kczcqnxYSIMegG29vpLW7AONf8oiJkWmXC%2FxEZ5V3Y6zr95u4WxgPhn7VOO92U1qkUuADthKn6Bp24Z7D25vQvSkEgWTFW61%2BOYRUMS1DPivO1xLa1qVfsSoD4Azc4OJNuNLNYTiAV7TzAPSX8wmQq40ACTsVH8cEVpjatA3XXUIKu%2FJmHU7NN08%2F8x6&X-Amz-Signature=40531f55de5fe7d5f39d6789b97bdf1a5f48cb956a6c6de214beae936ff409d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEB5ZDZT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICnB9edxpQgz5TPAD1FAmqCCAOgKg%2B3t656%2FGT99LEN7AiEApctt17ujs%2Bk6uQ%2BkNi37w%2BmWB%2FBUTV6k4ADliyhpL7Iq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLAYT205lTN9zcng1ircA6VxADlcHHxJ6WBYhwPPfbIAf%2BSq3zmYYu4%2BQn9jVFr3NOxJpPssZI%2FP0ScP%2FpuWX7KHQkppxJFRWGuMsSnlI7PDLXXmZS7uMqCX%2F0du3sJMZL1on4g%2BydByOIfPGVnwo90QPiYMPejP4qvMBzBxBNcd50KV3KVeHiL5YF6nb4VgyBWqyrsyNZzj1IWh2v19%2FG8bQR1PY0Nz1DsYZp6W4C5OPOdAZLtxchlkQR08Uj8CNwufuYda0wbfpuEbcsAonuiP0L89R5ptrhi67HSDQoioV%2FcHUBoOFqHwTia2ml06PyaoetF7N2Dze8tr16DJ7PqVhNYUXdyH34vwokB435RvW2%2Fe1rcTHcwcS457WRj2abAadpa76OPtkzm%2BzEhOAbCDi5I6C1q5w1cxn1KdAVDln4C8w6dmyCHUcz4KyA0WTeiZee7j0r69ObCoVZc4O6MAC78wX3gjecfHwoOwwFZ4za2jlxb0weVBAIeaBlkC%2BFopPc%2BvQgNPokCXxOBlfLwAZF2aV62t0qYrgHvzyII582COZh3Yk%2FWYJ%2F73yoKlCOVTolrUCW6fk91O43vCyjXNVxqVBRbUz7xx5dh3fAYcQb5EADY%2BWRuB5jDR1jYKLrwulLfFQ71hvZaUMJaMjcQGOqUBzXKTlPKFJQ%2B7RYr%2Brump4oUDn%2BbK%2Bzn3kczcqnxYSIMegG29vpLW7AONf8oiJkWmXC%2FxEZ5V3Y6zr95u4WxgPhn7VOO92U1qkUuADthKn6Bp24Z7D25vQvSkEgWTFW61%2BOYRUMS1DPivO1xLa1qVfsSoD4Azc4OJNuNLNYTiAV7TzAPSX8wmQq40ACTsVH8cEVpjatA3XXUIKu%2FJmHU7NN08%2F8x6&X-Amz-Signature=d20c5643d7a4e17180696bdd12c83aa3ce8de629cb8227c7c02834700c3cc4f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEB5ZDZT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCICnB9edxpQgz5TPAD1FAmqCCAOgKg%2B3t656%2FGT99LEN7AiEApctt17ujs%2Bk6uQ%2BkNi37w%2BmWB%2FBUTV6k4ADliyhpL7Iq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLAYT205lTN9zcng1ircA6VxADlcHHxJ6WBYhwPPfbIAf%2BSq3zmYYu4%2BQn9jVFr3NOxJpPssZI%2FP0ScP%2FpuWX7KHQkppxJFRWGuMsSnlI7PDLXXmZS7uMqCX%2F0du3sJMZL1on4g%2BydByOIfPGVnwo90QPiYMPejP4qvMBzBxBNcd50KV3KVeHiL5YF6nb4VgyBWqyrsyNZzj1IWh2v19%2FG8bQR1PY0Nz1DsYZp6W4C5OPOdAZLtxchlkQR08Uj8CNwufuYda0wbfpuEbcsAonuiP0L89R5ptrhi67HSDQoioV%2FcHUBoOFqHwTia2ml06PyaoetF7N2Dze8tr16DJ7PqVhNYUXdyH34vwokB435RvW2%2Fe1rcTHcwcS457WRj2abAadpa76OPtkzm%2BzEhOAbCDi5I6C1q5w1cxn1KdAVDln4C8w6dmyCHUcz4KyA0WTeiZee7j0r69ObCoVZc4O6MAC78wX3gjecfHwoOwwFZ4za2jlxb0weVBAIeaBlkC%2BFopPc%2BvQgNPokCXxOBlfLwAZF2aV62t0qYrgHvzyII582COZh3Yk%2FWYJ%2F73yoKlCOVTolrUCW6fk91O43vCyjXNVxqVBRbUz7xx5dh3fAYcQb5EADY%2BWRuB5jDR1jYKLrwulLfFQ71hvZaUMJaMjcQGOqUBzXKTlPKFJQ%2B7RYr%2Brump4oUDn%2BbK%2Bzn3kczcqnxYSIMegG29vpLW7AONf8oiJkWmXC%2FxEZ5V3Y6zr95u4WxgPhn7VOO92U1qkUuADthKn6Bp24Z7D25vQvSkEgWTFW61%2BOYRUMS1DPivO1xLa1qVfsSoD4Azc4OJNuNLNYTiAV7TzAPSX8wmQq40ACTsVH8cEVpjatA3XXUIKu%2FJmHU7NN08%2F8x6&X-Amz-Signature=7b784c07f2239dccf92369c7f648d38580d80d77a077c7b3d2328f3f4879f7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
