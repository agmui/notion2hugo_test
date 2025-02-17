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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJXTFDU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDNAoIy2%2FuFhIDmvu7a1xAj11%2B62Qy87Yn1vE7ypIPrbAiBjK3dBqktzWt9qAX8EXXU4kZlfIAkP%2F4HkxLMGYtagvSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMbs1Qxp%2BpAQkBON0VKtwDKh3ZfnZsGPOOAbrmwzgL5Ilix8%2FUP%2FGlebGIr%2FyEFGhsm00cAUPOuD0tStPmrVygX%2Bi%2BT7%2B2JyUCufRjG7Fw0mXfjokXanqpVvve7RTSu9V9qyepYsegnIke%2B2SqXzLguIOmA36Qo0%2BYnzBAL1K%2FspNLZ%2BObVVoifXAtyutRFU%2Bm%2B4Bq8cAjvvVArv%2B0hpiSVoLcn0mikxxIP5h7SLAqx%2B6vHCFZ624bEH2P8CnbJFOsObMY6T6zBVJAnLtiPolkF3BICnBQpLO02xXsyUqH3pkSICMwWn7fyDccQIvtQjxgEYpJ%2Fk18TMAWKpKjis0IyrbW%2BzfNKzcp9ZJPEWA8PWetIT%2BgPyM1TOR4oWy%2BpJyLciROqXqYVTB3A6jQxXMHbkNTeUzbX7EzSJmaduXZKk2ZqX746rnYs%2FTJd8r37nev5V4iBMC7uIfkU%2B53cM0NQLHh7wYB84Ur%2FSx34O9pRx0Tr1ByJs%2FAk3f0t%2BbkpC2sClGi9T0dyxpG1Vq4UDVjbjBc75SxJP76GJXRzAoFXTnXqYXLZysxE3V7EXBGvImfwvrpsZsLfmnQAnWLF%2Fjyeshd0UuZHPySoC0bh5r%2BWUeGrID6chobQLrTdNPriHyz9tyP3TNzxf0ZYPkw3OPKvQY6pgFHBUQySy%2BfocEsBlZVF50lrmaYx1BS1%2B6QoA0husES7I7GEf5NW%2Ffv2tzHyhX9l79pUAqYehVkEWUabyxz7ethOe7BZnCzYaVpTZom7o30nzR%2FujUoOma2o2JCTx8Nnx0H%2FUtjA71URU%2B5QdD7xhzkvSGtiKxTMv9%2BFDmuh2bIPKlifLFrvv6uDhwtQ40b5wAS%2Bt5Eas4Sa57l6KWYC7XglvAc1I8U&X-Amz-Signature=e31a24345b9904b05b06f94a8a40dc9b2002da6f19e4a7ddffb0cfa9dc07f09b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJXTFDU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDNAoIy2%2FuFhIDmvu7a1xAj11%2B62Qy87Yn1vE7ypIPrbAiBjK3dBqktzWt9qAX8EXXU4kZlfIAkP%2F4HkxLMGYtagvSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMbs1Qxp%2BpAQkBON0VKtwDKh3ZfnZsGPOOAbrmwzgL5Ilix8%2FUP%2FGlebGIr%2FyEFGhsm00cAUPOuD0tStPmrVygX%2Bi%2BT7%2B2JyUCufRjG7Fw0mXfjokXanqpVvve7RTSu9V9qyepYsegnIke%2B2SqXzLguIOmA36Qo0%2BYnzBAL1K%2FspNLZ%2BObVVoifXAtyutRFU%2Bm%2B4Bq8cAjvvVArv%2B0hpiSVoLcn0mikxxIP5h7SLAqx%2B6vHCFZ624bEH2P8CnbJFOsObMY6T6zBVJAnLtiPolkF3BICnBQpLO02xXsyUqH3pkSICMwWn7fyDccQIvtQjxgEYpJ%2Fk18TMAWKpKjis0IyrbW%2BzfNKzcp9ZJPEWA8PWetIT%2BgPyM1TOR4oWy%2BpJyLciROqXqYVTB3A6jQxXMHbkNTeUzbX7EzSJmaduXZKk2ZqX746rnYs%2FTJd8r37nev5V4iBMC7uIfkU%2B53cM0NQLHh7wYB84Ur%2FSx34O9pRx0Tr1ByJs%2FAk3f0t%2BbkpC2sClGi9T0dyxpG1Vq4UDVjbjBc75SxJP76GJXRzAoFXTnXqYXLZysxE3V7EXBGvImfwvrpsZsLfmnQAnWLF%2Fjyeshd0UuZHPySoC0bh5r%2BWUeGrID6chobQLrTdNPriHyz9tyP3TNzxf0ZYPkw3OPKvQY6pgFHBUQySy%2BfocEsBlZVF50lrmaYx1BS1%2B6QoA0husES7I7GEf5NW%2Ffv2tzHyhX9l79pUAqYehVkEWUabyxz7ethOe7BZnCzYaVpTZom7o30nzR%2FujUoOma2o2JCTx8Nnx0H%2FUtjA71URU%2B5QdD7xhzkvSGtiKxTMv9%2BFDmuh2bIPKlifLFrvv6uDhwtQ40b5wAS%2Bt5Eas4Sa57l6KWYC7XglvAc1I8U&X-Amz-Signature=9aed4ea60a5cddc3c2d15ac026932001b3a0a342bbd52929ea3badb1b1b02de8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJXTFDU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDNAoIy2%2FuFhIDmvu7a1xAj11%2B62Qy87Yn1vE7ypIPrbAiBjK3dBqktzWt9qAX8EXXU4kZlfIAkP%2F4HkxLMGYtagvSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMbs1Qxp%2BpAQkBON0VKtwDKh3ZfnZsGPOOAbrmwzgL5Ilix8%2FUP%2FGlebGIr%2FyEFGhsm00cAUPOuD0tStPmrVygX%2Bi%2BT7%2B2JyUCufRjG7Fw0mXfjokXanqpVvve7RTSu9V9qyepYsegnIke%2B2SqXzLguIOmA36Qo0%2BYnzBAL1K%2FspNLZ%2BObVVoifXAtyutRFU%2Bm%2B4Bq8cAjvvVArv%2B0hpiSVoLcn0mikxxIP5h7SLAqx%2B6vHCFZ624bEH2P8CnbJFOsObMY6T6zBVJAnLtiPolkF3BICnBQpLO02xXsyUqH3pkSICMwWn7fyDccQIvtQjxgEYpJ%2Fk18TMAWKpKjis0IyrbW%2BzfNKzcp9ZJPEWA8PWetIT%2BgPyM1TOR4oWy%2BpJyLciROqXqYVTB3A6jQxXMHbkNTeUzbX7EzSJmaduXZKk2ZqX746rnYs%2FTJd8r37nev5V4iBMC7uIfkU%2B53cM0NQLHh7wYB84Ur%2FSx34O9pRx0Tr1ByJs%2FAk3f0t%2BbkpC2sClGi9T0dyxpG1Vq4UDVjbjBc75SxJP76GJXRzAoFXTnXqYXLZysxE3V7EXBGvImfwvrpsZsLfmnQAnWLF%2Fjyeshd0UuZHPySoC0bh5r%2BWUeGrID6chobQLrTdNPriHyz9tyP3TNzxf0ZYPkw3OPKvQY6pgFHBUQySy%2BfocEsBlZVF50lrmaYx1BS1%2B6QoA0husES7I7GEf5NW%2Ffv2tzHyhX9l79pUAqYehVkEWUabyxz7ethOe7BZnCzYaVpTZom7o30nzR%2FujUoOma2o2JCTx8Nnx0H%2FUtjA71URU%2B5QdD7xhzkvSGtiKxTMv9%2BFDmuh2bIPKlifLFrvv6uDhwtQ40b5wAS%2Bt5Eas4Sa57l6KWYC7XglvAc1I8U&X-Amz-Signature=da7afef67a57d1b175e86afdfc79c4c6594b14bbf82db9553f721a376e2e1acf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJXTFDU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDNAoIy2%2FuFhIDmvu7a1xAj11%2B62Qy87Yn1vE7ypIPrbAiBjK3dBqktzWt9qAX8EXXU4kZlfIAkP%2F4HkxLMGYtagvSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMbs1Qxp%2BpAQkBON0VKtwDKh3ZfnZsGPOOAbrmwzgL5Ilix8%2FUP%2FGlebGIr%2FyEFGhsm00cAUPOuD0tStPmrVygX%2Bi%2BT7%2B2JyUCufRjG7Fw0mXfjokXanqpVvve7RTSu9V9qyepYsegnIke%2B2SqXzLguIOmA36Qo0%2BYnzBAL1K%2FspNLZ%2BObVVoifXAtyutRFU%2Bm%2B4Bq8cAjvvVArv%2B0hpiSVoLcn0mikxxIP5h7SLAqx%2B6vHCFZ624bEH2P8CnbJFOsObMY6T6zBVJAnLtiPolkF3BICnBQpLO02xXsyUqH3pkSICMwWn7fyDccQIvtQjxgEYpJ%2Fk18TMAWKpKjis0IyrbW%2BzfNKzcp9ZJPEWA8PWetIT%2BgPyM1TOR4oWy%2BpJyLciROqXqYVTB3A6jQxXMHbkNTeUzbX7EzSJmaduXZKk2ZqX746rnYs%2FTJd8r37nev5V4iBMC7uIfkU%2B53cM0NQLHh7wYB84Ur%2FSx34O9pRx0Tr1ByJs%2FAk3f0t%2BbkpC2sClGi9T0dyxpG1Vq4UDVjbjBc75SxJP76GJXRzAoFXTnXqYXLZysxE3V7EXBGvImfwvrpsZsLfmnQAnWLF%2Fjyeshd0UuZHPySoC0bh5r%2BWUeGrID6chobQLrTdNPriHyz9tyP3TNzxf0ZYPkw3OPKvQY6pgFHBUQySy%2BfocEsBlZVF50lrmaYx1BS1%2B6QoA0husES7I7GEf5NW%2Ffv2tzHyhX9l79pUAqYehVkEWUabyxz7ethOe7BZnCzYaVpTZom7o30nzR%2FujUoOma2o2JCTx8Nnx0H%2FUtjA71URU%2B5QdD7xhzkvSGtiKxTMv9%2BFDmuh2bIPKlifLFrvv6uDhwtQ40b5wAS%2Bt5Eas4Sa57l6KWYC7XglvAc1I8U&X-Amz-Signature=a2f786045da6fdaf27fc819fce5d1d65e9a0d42286bae471e2166b0bc4a15e92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJXTFDU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDNAoIy2%2FuFhIDmvu7a1xAj11%2B62Qy87Yn1vE7ypIPrbAiBjK3dBqktzWt9qAX8EXXU4kZlfIAkP%2F4HkxLMGYtagvSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMbs1Qxp%2BpAQkBON0VKtwDKh3ZfnZsGPOOAbrmwzgL5Ilix8%2FUP%2FGlebGIr%2FyEFGhsm00cAUPOuD0tStPmrVygX%2Bi%2BT7%2B2JyUCufRjG7Fw0mXfjokXanqpVvve7RTSu9V9qyepYsegnIke%2B2SqXzLguIOmA36Qo0%2BYnzBAL1K%2FspNLZ%2BObVVoifXAtyutRFU%2Bm%2B4Bq8cAjvvVArv%2B0hpiSVoLcn0mikxxIP5h7SLAqx%2B6vHCFZ624bEH2P8CnbJFOsObMY6T6zBVJAnLtiPolkF3BICnBQpLO02xXsyUqH3pkSICMwWn7fyDccQIvtQjxgEYpJ%2Fk18TMAWKpKjis0IyrbW%2BzfNKzcp9ZJPEWA8PWetIT%2BgPyM1TOR4oWy%2BpJyLciROqXqYVTB3A6jQxXMHbkNTeUzbX7EzSJmaduXZKk2ZqX746rnYs%2FTJd8r37nev5V4iBMC7uIfkU%2B53cM0NQLHh7wYB84Ur%2FSx34O9pRx0Tr1ByJs%2FAk3f0t%2BbkpC2sClGi9T0dyxpG1Vq4UDVjbjBc75SxJP76GJXRzAoFXTnXqYXLZysxE3V7EXBGvImfwvrpsZsLfmnQAnWLF%2Fjyeshd0UuZHPySoC0bh5r%2BWUeGrID6chobQLrTdNPriHyz9tyP3TNzxf0ZYPkw3OPKvQY6pgFHBUQySy%2BfocEsBlZVF50lrmaYx1BS1%2B6QoA0husES7I7GEf5NW%2Ffv2tzHyhX9l79pUAqYehVkEWUabyxz7ethOe7BZnCzYaVpTZom7o30nzR%2FujUoOma2o2JCTx8Nnx0H%2FUtjA71URU%2B5QdD7xhzkvSGtiKxTMv9%2BFDmuh2bIPKlifLFrvv6uDhwtQ40b5wAS%2Bt5Eas4Sa57l6KWYC7XglvAc1I8U&X-Amz-Signature=995e7f7ae5cc50bb1a0e2355e3e8b8009a819fd4dc515e0b71ec5d0863689976&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJXTFDU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDNAoIy2%2FuFhIDmvu7a1xAj11%2B62Qy87Yn1vE7ypIPrbAiBjK3dBqktzWt9qAX8EXXU4kZlfIAkP%2F4HkxLMGYtagvSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMbs1Qxp%2BpAQkBON0VKtwDKh3ZfnZsGPOOAbrmwzgL5Ilix8%2FUP%2FGlebGIr%2FyEFGhsm00cAUPOuD0tStPmrVygX%2Bi%2BT7%2B2JyUCufRjG7Fw0mXfjokXanqpVvve7RTSu9V9qyepYsegnIke%2B2SqXzLguIOmA36Qo0%2BYnzBAL1K%2FspNLZ%2BObVVoifXAtyutRFU%2Bm%2B4Bq8cAjvvVArv%2B0hpiSVoLcn0mikxxIP5h7SLAqx%2B6vHCFZ624bEH2P8CnbJFOsObMY6T6zBVJAnLtiPolkF3BICnBQpLO02xXsyUqH3pkSICMwWn7fyDccQIvtQjxgEYpJ%2Fk18TMAWKpKjis0IyrbW%2BzfNKzcp9ZJPEWA8PWetIT%2BgPyM1TOR4oWy%2BpJyLciROqXqYVTB3A6jQxXMHbkNTeUzbX7EzSJmaduXZKk2ZqX746rnYs%2FTJd8r37nev5V4iBMC7uIfkU%2B53cM0NQLHh7wYB84Ur%2FSx34O9pRx0Tr1ByJs%2FAk3f0t%2BbkpC2sClGi9T0dyxpG1Vq4UDVjbjBc75SxJP76GJXRzAoFXTnXqYXLZysxE3V7EXBGvImfwvrpsZsLfmnQAnWLF%2Fjyeshd0UuZHPySoC0bh5r%2BWUeGrID6chobQLrTdNPriHyz9tyP3TNzxf0ZYPkw3OPKvQY6pgFHBUQySy%2BfocEsBlZVF50lrmaYx1BS1%2B6QoA0husES7I7GEf5NW%2Ffv2tzHyhX9l79pUAqYehVkEWUabyxz7ethOe7BZnCzYaVpTZom7o30nzR%2FujUoOma2o2JCTx8Nnx0H%2FUtjA71URU%2B5QdD7xhzkvSGtiKxTMv9%2BFDmuh2bIPKlifLFrvv6uDhwtQ40b5wAS%2Bt5Eas4Sa57l6KWYC7XglvAc1I8U&X-Amz-Signature=0e1b24399384402a5642de79890d5ce1b2882e9687b84b9fc940a92a4d7cd858&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJXTFDU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDNAoIy2%2FuFhIDmvu7a1xAj11%2B62Qy87Yn1vE7ypIPrbAiBjK3dBqktzWt9qAX8EXXU4kZlfIAkP%2F4HkxLMGYtagvSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMbs1Qxp%2BpAQkBON0VKtwDKh3ZfnZsGPOOAbrmwzgL5Ilix8%2FUP%2FGlebGIr%2FyEFGhsm00cAUPOuD0tStPmrVygX%2Bi%2BT7%2B2JyUCufRjG7Fw0mXfjokXanqpVvve7RTSu9V9qyepYsegnIke%2B2SqXzLguIOmA36Qo0%2BYnzBAL1K%2FspNLZ%2BObVVoifXAtyutRFU%2Bm%2B4Bq8cAjvvVArv%2B0hpiSVoLcn0mikxxIP5h7SLAqx%2B6vHCFZ624bEH2P8CnbJFOsObMY6T6zBVJAnLtiPolkF3BICnBQpLO02xXsyUqH3pkSICMwWn7fyDccQIvtQjxgEYpJ%2Fk18TMAWKpKjis0IyrbW%2BzfNKzcp9ZJPEWA8PWetIT%2BgPyM1TOR4oWy%2BpJyLciROqXqYVTB3A6jQxXMHbkNTeUzbX7EzSJmaduXZKk2ZqX746rnYs%2FTJd8r37nev5V4iBMC7uIfkU%2B53cM0NQLHh7wYB84Ur%2FSx34O9pRx0Tr1ByJs%2FAk3f0t%2BbkpC2sClGi9T0dyxpG1Vq4UDVjbjBc75SxJP76GJXRzAoFXTnXqYXLZysxE3V7EXBGvImfwvrpsZsLfmnQAnWLF%2Fjyeshd0UuZHPySoC0bh5r%2BWUeGrID6chobQLrTdNPriHyz9tyP3TNzxf0ZYPkw3OPKvQY6pgFHBUQySy%2BfocEsBlZVF50lrmaYx1BS1%2B6QoA0husES7I7GEf5NW%2Ffv2tzHyhX9l79pUAqYehVkEWUabyxz7ethOe7BZnCzYaVpTZom7o30nzR%2FujUoOma2o2JCTx8Nnx0H%2FUtjA71URU%2B5QdD7xhzkvSGtiKxTMv9%2BFDmuh2bIPKlifLFrvv6uDhwtQ40b5wAS%2Bt5Eas4Sa57l6KWYC7XglvAc1I8U&X-Amz-Signature=25ad3ed6fecd8778cad59a7811e03285dd9741f2b7f7bae32e1eabcb64aa8127&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJXTFDU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIDNAoIy2%2FuFhIDmvu7a1xAj11%2B62Qy87Yn1vE7ypIPrbAiBjK3dBqktzWt9qAX8EXXU4kZlfIAkP%2F4HkxLMGYtagvSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMbs1Qxp%2BpAQkBON0VKtwDKh3ZfnZsGPOOAbrmwzgL5Ilix8%2FUP%2FGlebGIr%2FyEFGhsm00cAUPOuD0tStPmrVygX%2Bi%2BT7%2B2JyUCufRjG7Fw0mXfjokXanqpVvve7RTSu9V9qyepYsegnIke%2B2SqXzLguIOmA36Qo0%2BYnzBAL1K%2FspNLZ%2BObVVoifXAtyutRFU%2Bm%2B4Bq8cAjvvVArv%2B0hpiSVoLcn0mikxxIP5h7SLAqx%2B6vHCFZ624bEH2P8CnbJFOsObMY6T6zBVJAnLtiPolkF3BICnBQpLO02xXsyUqH3pkSICMwWn7fyDccQIvtQjxgEYpJ%2Fk18TMAWKpKjis0IyrbW%2BzfNKzcp9ZJPEWA8PWetIT%2BgPyM1TOR4oWy%2BpJyLciROqXqYVTB3A6jQxXMHbkNTeUzbX7EzSJmaduXZKk2ZqX746rnYs%2FTJd8r37nev5V4iBMC7uIfkU%2B53cM0NQLHh7wYB84Ur%2FSx34O9pRx0Tr1ByJs%2FAk3f0t%2BbkpC2sClGi9T0dyxpG1Vq4UDVjbjBc75SxJP76GJXRzAoFXTnXqYXLZysxE3V7EXBGvImfwvrpsZsLfmnQAnWLF%2Fjyeshd0UuZHPySoC0bh5r%2BWUeGrID6chobQLrTdNPriHyz9tyP3TNzxf0ZYPkw3OPKvQY6pgFHBUQySy%2BfocEsBlZVF50lrmaYx1BS1%2B6QoA0husES7I7GEf5NW%2Ffv2tzHyhX9l79pUAqYehVkEWUabyxz7ethOe7BZnCzYaVpTZom7o30nzR%2FujUoOma2o2JCTx8Nnx0H%2FUtjA71URU%2B5QdD7xhzkvSGtiKxTMv9%2BFDmuh2bIPKlifLFrvv6uDhwtQ40b5wAS%2Bt5Eas4Sa57l6KWYC7XglvAc1I8U&X-Amz-Signature=3dc25cc2cf9d9f4d5a61b207626a1375229faab91eb7b9ec1bf7a540fd99e447&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
