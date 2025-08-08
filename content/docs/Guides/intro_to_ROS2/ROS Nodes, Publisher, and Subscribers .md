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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HLDIB5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBwnadbgBSB9kWlDKFyJLehoH4DrMW40nEn4BGLJEtT%2FAiBzXdyCM3aXPPZIetPkWuCo1xP6Rjr51wW6QzsVaFulcSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDPeLqkc7OnB99k9KtwDwlyD2QfcpimTUgZkeL5gLqiVnApoUPiu0vDPrSE6Oh5%2F1S48yKkK7v%2FchFgJ3pf6f8GWMbdyxtjw3bS0WkfOzPJgyCopWm5cJpFJAkBdRsjsdww6dCif9RMUmHJL8u7MWRVnG%2FzudcyMzKEGk89creRMEd6yUN88PslzGM%2FUCi2Ss5fbYJpj%2BnzSq4V5bmiqi0XNbgv3KX3J3xNH7InwuqC63LG9Z9yJBDtUh%2BGvlX%2Fwa%2FphT3iITb1hRy7lLEcr4%2BQrbmm%2FUtwZY9%2Bcxg7HNiTs69bcZgZBNzc6dvn19t9Upn%2BUe%2Bfty0xrrbItz%2FEsvscYZWedla2PWHoupxwPN%2F5Ep4SHx02YDQB5VmpZJ%2Bsp%2FIpU2dJTUB66McNrCn0PzJG%2BlbmhrrktSlc8WFkzs0NRszQCNYE90oJJ34QTFMEZLfB9%2B8BWfjJ71iXW9KMxyrKl0PBF0ycDmRyt87ra08PC4KeugErqTc%2BDmMl5A3hmAnvpzpdjsDlrBJi%2BalaZbOTnTBZZMwSHGiL%2Bn39Er85UcN4vPo4tKVRJ0UHJfKjNgbI19IZme9bTV%2FndoLf14obUajuqe%2BjQhx2YymLbFSnbEvCfimCuZEatW%2FFgxJO2Oh62HRepizXF8%2FwwvYLYxAY6pgH8OLFGZihuM5Pmk%2FdD58g0Psw9kNkIZ%2BE0MHu%2FFKBwpcXHyrs7gCIcJrQAhKoN1oI1vcLkf%2BofXtAJVJnNhXg00lhg0EOPOYrOtWkak313AzQ5vmffa8n%2B4yT9icwv2asO5QDFv37gq9McXb93sWojap2oNrqYjtg4%2FkDeEGtqP78kVfWiSvtKypWuwEodmBm7jycgl3oaBVlRtmO4UDfgPYtqZ12G&X-Amz-Signature=a597b73925b15a5c90d13f80bb7ab485c20123716d4afdbe544a747d8c47741f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HLDIB5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBwnadbgBSB9kWlDKFyJLehoH4DrMW40nEn4BGLJEtT%2FAiBzXdyCM3aXPPZIetPkWuCo1xP6Rjr51wW6QzsVaFulcSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDPeLqkc7OnB99k9KtwDwlyD2QfcpimTUgZkeL5gLqiVnApoUPiu0vDPrSE6Oh5%2F1S48yKkK7v%2FchFgJ3pf6f8GWMbdyxtjw3bS0WkfOzPJgyCopWm5cJpFJAkBdRsjsdww6dCif9RMUmHJL8u7MWRVnG%2FzudcyMzKEGk89creRMEd6yUN88PslzGM%2FUCi2Ss5fbYJpj%2BnzSq4V5bmiqi0XNbgv3KX3J3xNH7InwuqC63LG9Z9yJBDtUh%2BGvlX%2Fwa%2FphT3iITb1hRy7lLEcr4%2BQrbmm%2FUtwZY9%2Bcxg7HNiTs69bcZgZBNzc6dvn19t9Upn%2BUe%2Bfty0xrrbItz%2FEsvscYZWedla2PWHoupxwPN%2F5Ep4SHx02YDQB5VmpZJ%2Bsp%2FIpU2dJTUB66McNrCn0PzJG%2BlbmhrrktSlc8WFkzs0NRszQCNYE90oJJ34QTFMEZLfB9%2B8BWfjJ71iXW9KMxyrKl0PBF0ycDmRyt87ra08PC4KeugErqTc%2BDmMl5A3hmAnvpzpdjsDlrBJi%2BalaZbOTnTBZZMwSHGiL%2Bn39Er85UcN4vPo4tKVRJ0UHJfKjNgbI19IZme9bTV%2FndoLf14obUajuqe%2BjQhx2YymLbFSnbEvCfimCuZEatW%2FFgxJO2Oh62HRepizXF8%2FwwvYLYxAY6pgH8OLFGZihuM5Pmk%2FdD58g0Psw9kNkIZ%2BE0MHu%2FFKBwpcXHyrs7gCIcJrQAhKoN1oI1vcLkf%2BofXtAJVJnNhXg00lhg0EOPOYrOtWkak313AzQ5vmffa8n%2B4yT9icwv2asO5QDFv37gq9McXb93sWojap2oNrqYjtg4%2FkDeEGtqP78kVfWiSvtKypWuwEodmBm7jycgl3oaBVlRtmO4UDfgPYtqZ12G&X-Amz-Signature=082bd950af51656e62f44ef7cfd128a0c5ece1e2529e187a52ba1446355ec995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HLDIB5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBwnadbgBSB9kWlDKFyJLehoH4DrMW40nEn4BGLJEtT%2FAiBzXdyCM3aXPPZIetPkWuCo1xP6Rjr51wW6QzsVaFulcSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDPeLqkc7OnB99k9KtwDwlyD2QfcpimTUgZkeL5gLqiVnApoUPiu0vDPrSE6Oh5%2F1S48yKkK7v%2FchFgJ3pf6f8GWMbdyxtjw3bS0WkfOzPJgyCopWm5cJpFJAkBdRsjsdww6dCif9RMUmHJL8u7MWRVnG%2FzudcyMzKEGk89creRMEd6yUN88PslzGM%2FUCi2Ss5fbYJpj%2BnzSq4V5bmiqi0XNbgv3KX3J3xNH7InwuqC63LG9Z9yJBDtUh%2BGvlX%2Fwa%2FphT3iITb1hRy7lLEcr4%2BQrbmm%2FUtwZY9%2Bcxg7HNiTs69bcZgZBNzc6dvn19t9Upn%2BUe%2Bfty0xrrbItz%2FEsvscYZWedla2PWHoupxwPN%2F5Ep4SHx02YDQB5VmpZJ%2Bsp%2FIpU2dJTUB66McNrCn0PzJG%2BlbmhrrktSlc8WFkzs0NRszQCNYE90oJJ34QTFMEZLfB9%2B8BWfjJ71iXW9KMxyrKl0PBF0ycDmRyt87ra08PC4KeugErqTc%2BDmMl5A3hmAnvpzpdjsDlrBJi%2BalaZbOTnTBZZMwSHGiL%2Bn39Er85UcN4vPo4tKVRJ0UHJfKjNgbI19IZme9bTV%2FndoLf14obUajuqe%2BjQhx2YymLbFSnbEvCfimCuZEatW%2FFgxJO2Oh62HRepizXF8%2FwwvYLYxAY6pgH8OLFGZihuM5Pmk%2FdD58g0Psw9kNkIZ%2BE0MHu%2FFKBwpcXHyrs7gCIcJrQAhKoN1oI1vcLkf%2BofXtAJVJnNhXg00lhg0EOPOYrOtWkak313AzQ5vmffa8n%2B4yT9icwv2asO5QDFv37gq9McXb93sWojap2oNrqYjtg4%2FkDeEGtqP78kVfWiSvtKypWuwEodmBm7jycgl3oaBVlRtmO4UDfgPYtqZ12G&X-Amz-Signature=a71551c27ff34eb8faf0c9605ce7012bccf4fce9add7630309cf71e676187db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HLDIB5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBwnadbgBSB9kWlDKFyJLehoH4DrMW40nEn4BGLJEtT%2FAiBzXdyCM3aXPPZIetPkWuCo1xP6Rjr51wW6QzsVaFulcSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDPeLqkc7OnB99k9KtwDwlyD2QfcpimTUgZkeL5gLqiVnApoUPiu0vDPrSE6Oh5%2F1S48yKkK7v%2FchFgJ3pf6f8GWMbdyxtjw3bS0WkfOzPJgyCopWm5cJpFJAkBdRsjsdww6dCif9RMUmHJL8u7MWRVnG%2FzudcyMzKEGk89creRMEd6yUN88PslzGM%2FUCi2Ss5fbYJpj%2BnzSq4V5bmiqi0XNbgv3KX3J3xNH7InwuqC63LG9Z9yJBDtUh%2BGvlX%2Fwa%2FphT3iITb1hRy7lLEcr4%2BQrbmm%2FUtwZY9%2Bcxg7HNiTs69bcZgZBNzc6dvn19t9Upn%2BUe%2Bfty0xrrbItz%2FEsvscYZWedla2PWHoupxwPN%2F5Ep4SHx02YDQB5VmpZJ%2Bsp%2FIpU2dJTUB66McNrCn0PzJG%2BlbmhrrktSlc8WFkzs0NRszQCNYE90oJJ34QTFMEZLfB9%2B8BWfjJ71iXW9KMxyrKl0PBF0ycDmRyt87ra08PC4KeugErqTc%2BDmMl5A3hmAnvpzpdjsDlrBJi%2BalaZbOTnTBZZMwSHGiL%2Bn39Er85UcN4vPo4tKVRJ0UHJfKjNgbI19IZme9bTV%2FndoLf14obUajuqe%2BjQhx2YymLbFSnbEvCfimCuZEatW%2FFgxJO2Oh62HRepizXF8%2FwwvYLYxAY6pgH8OLFGZihuM5Pmk%2FdD58g0Psw9kNkIZ%2BE0MHu%2FFKBwpcXHyrs7gCIcJrQAhKoN1oI1vcLkf%2BofXtAJVJnNhXg00lhg0EOPOYrOtWkak313AzQ5vmffa8n%2B4yT9icwv2asO5QDFv37gq9McXb93sWojap2oNrqYjtg4%2FkDeEGtqP78kVfWiSvtKypWuwEodmBm7jycgl3oaBVlRtmO4UDfgPYtqZ12G&X-Amz-Signature=9c5f0b8c408a04a9f4e1e31622f3668123b8984eec183d30eaadbf40443e5fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HLDIB5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBwnadbgBSB9kWlDKFyJLehoH4DrMW40nEn4BGLJEtT%2FAiBzXdyCM3aXPPZIetPkWuCo1xP6Rjr51wW6QzsVaFulcSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDPeLqkc7OnB99k9KtwDwlyD2QfcpimTUgZkeL5gLqiVnApoUPiu0vDPrSE6Oh5%2F1S48yKkK7v%2FchFgJ3pf6f8GWMbdyxtjw3bS0WkfOzPJgyCopWm5cJpFJAkBdRsjsdww6dCif9RMUmHJL8u7MWRVnG%2FzudcyMzKEGk89creRMEd6yUN88PslzGM%2FUCi2Ss5fbYJpj%2BnzSq4V5bmiqi0XNbgv3KX3J3xNH7InwuqC63LG9Z9yJBDtUh%2BGvlX%2Fwa%2FphT3iITb1hRy7lLEcr4%2BQrbmm%2FUtwZY9%2Bcxg7HNiTs69bcZgZBNzc6dvn19t9Upn%2BUe%2Bfty0xrrbItz%2FEsvscYZWedla2PWHoupxwPN%2F5Ep4SHx02YDQB5VmpZJ%2Bsp%2FIpU2dJTUB66McNrCn0PzJG%2BlbmhrrktSlc8WFkzs0NRszQCNYE90oJJ34QTFMEZLfB9%2B8BWfjJ71iXW9KMxyrKl0PBF0ycDmRyt87ra08PC4KeugErqTc%2BDmMl5A3hmAnvpzpdjsDlrBJi%2BalaZbOTnTBZZMwSHGiL%2Bn39Er85UcN4vPo4tKVRJ0UHJfKjNgbI19IZme9bTV%2FndoLf14obUajuqe%2BjQhx2YymLbFSnbEvCfimCuZEatW%2FFgxJO2Oh62HRepizXF8%2FwwvYLYxAY6pgH8OLFGZihuM5Pmk%2FdD58g0Psw9kNkIZ%2BE0MHu%2FFKBwpcXHyrs7gCIcJrQAhKoN1oI1vcLkf%2BofXtAJVJnNhXg00lhg0EOPOYrOtWkak313AzQ5vmffa8n%2B4yT9icwv2asO5QDFv37gq9McXb93sWojap2oNrqYjtg4%2FkDeEGtqP78kVfWiSvtKypWuwEodmBm7jycgl3oaBVlRtmO4UDfgPYtqZ12G&X-Amz-Signature=0e823798b15a21b539ff753d948eb6b4849248be600fe064748eebb34ea7a553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HLDIB5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBwnadbgBSB9kWlDKFyJLehoH4DrMW40nEn4BGLJEtT%2FAiBzXdyCM3aXPPZIetPkWuCo1xP6Rjr51wW6QzsVaFulcSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDPeLqkc7OnB99k9KtwDwlyD2QfcpimTUgZkeL5gLqiVnApoUPiu0vDPrSE6Oh5%2F1S48yKkK7v%2FchFgJ3pf6f8GWMbdyxtjw3bS0WkfOzPJgyCopWm5cJpFJAkBdRsjsdww6dCif9RMUmHJL8u7MWRVnG%2FzudcyMzKEGk89creRMEd6yUN88PslzGM%2FUCi2Ss5fbYJpj%2BnzSq4V5bmiqi0XNbgv3KX3J3xNH7InwuqC63LG9Z9yJBDtUh%2BGvlX%2Fwa%2FphT3iITb1hRy7lLEcr4%2BQrbmm%2FUtwZY9%2Bcxg7HNiTs69bcZgZBNzc6dvn19t9Upn%2BUe%2Bfty0xrrbItz%2FEsvscYZWedla2PWHoupxwPN%2F5Ep4SHx02YDQB5VmpZJ%2Bsp%2FIpU2dJTUB66McNrCn0PzJG%2BlbmhrrktSlc8WFkzs0NRszQCNYE90oJJ34QTFMEZLfB9%2B8BWfjJ71iXW9KMxyrKl0PBF0ycDmRyt87ra08PC4KeugErqTc%2BDmMl5A3hmAnvpzpdjsDlrBJi%2BalaZbOTnTBZZMwSHGiL%2Bn39Er85UcN4vPo4tKVRJ0UHJfKjNgbI19IZme9bTV%2FndoLf14obUajuqe%2BjQhx2YymLbFSnbEvCfimCuZEatW%2FFgxJO2Oh62HRepizXF8%2FwwvYLYxAY6pgH8OLFGZihuM5Pmk%2FdD58g0Psw9kNkIZ%2BE0MHu%2FFKBwpcXHyrs7gCIcJrQAhKoN1oI1vcLkf%2BofXtAJVJnNhXg00lhg0EOPOYrOtWkak313AzQ5vmffa8n%2B4yT9icwv2asO5QDFv37gq9McXb93sWojap2oNrqYjtg4%2FkDeEGtqP78kVfWiSvtKypWuwEodmBm7jycgl3oaBVlRtmO4UDfgPYtqZ12G&X-Amz-Signature=ef64fab75880ef0168b216e807c33c8b6227c04bfd10eef6f513e3ed96841052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HLDIB5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBwnadbgBSB9kWlDKFyJLehoH4DrMW40nEn4BGLJEtT%2FAiBzXdyCM3aXPPZIetPkWuCo1xP6Rjr51wW6QzsVaFulcSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDPeLqkc7OnB99k9KtwDwlyD2QfcpimTUgZkeL5gLqiVnApoUPiu0vDPrSE6Oh5%2F1S48yKkK7v%2FchFgJ3pf6f8GWMbdyxtjw3bS0WkfOzPJgyCopWm5cJpFJAkBdRsjsdww6dCif9RMUmHJL8u7MWRVnG%2FzudcyMzKEGk89creRMEd6yUN88PslzGM%2FUCi2Ss5fbYJpj%2BnzSq4V5bmiqi0XNbgv3KX3J3xNH7InwuqC63LG9Z9yJBDtUh%2BGvlX%2Fwa%2FphT3iITb1hRy7lLEcr4%2BQrbmm%2FUtwZY9%2Bcxg7HNiTs69bcZgZBNzc6dvn19t9Upn%2BUe%2Bfty0xrrbItz%2FEsvscYZWedla2PWHoupxwPN%2F5Ep4SHx02YDQB5VmpZJ%2Bsp%2FIpU2dJTUB66McNrCn0PzJG%2BlbmhrrktSlc8WFkzs0NRszQCNYE90oJJ34QTFMEZLfB9%2B8BWfjJ71iXW9KMxyrKl0PBF0ycDmRyt87ra08PC4KeugErqTc%2BDmMl5A3hmAnvpzpdjsDlrBJi%2BalaZbOTnTBZZMwSHGiL%2Bn39Er85UcN4vPo4tKVRJ0UHJfKjNgbI19IZme9bTV%2FndoLf14obUajuqe%2BjQhx2YymLbFSnbEvCfimCuZEatW%2FFgxJO2Oh62HRepizXF8%2FwwvYLYxAY6pgH8OLFGZihuM5Pmk%2FdD58g0Psw9kNkIZ%2BE0MHu%2FFKBwpcXHyrs7gCIcJrQAhKoN1oI1vcLkf%2BofXtAJVJnNhXg00lhg0EOPOYrOtWkak313AzQ5vmffa8n%2B4yT9icwv2asO5QDFv37gq9McXb93sWojap2oNrqYjtg4%2FkDeEGtqP78kVfWiSvtKypWuwEodmBm7jycgl3oaBVlRtmO4UDfgPYtqZ12G&X-Amz-Signature=bb064d93d0adc40b6515c580c11a897cd93ffc329b47b6f410bf2d9a7a0f0c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HLDIB5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBwnadbgBSB9kWlDKFyJLehoH4DrMW40nEn4BGLJEtT%2FAiBzXdyCM3aXPPZIetPkWuCo1xP6Rjr51wW6QzsVaFulcSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDPeLqkc7OnB99k9KtwDwlyD2QfcpimTUgZkeL5gLqiVnApoUPiu0vDPrSE6Oh5%2F1S48yKkK7v%2FchFgJ3pf6f8GWMbdyxtjw3bS0WkfOzPJgyCopWm5cJpFJAkBdRsjsdww6dCif9RMUmHJL8u7MWRVnG%2FzudcyMzKEGk89creRMEd6yUN88PslzGM%2FUCi2Ss5fbYJpj%2BnzSq4V5bmiqi0XNbgv3KX3J3xNH7InwuqC63LG9Z9yJBDtUh%2BGvlX%2Fwa%2FphT3iITb1hRy7lLEcr4%2BQrbmm%2FUtwZY9%2Bcxg7HNiTs69bcZgZBNzc6dvn19t9Upn%2BUe%2Bfty0xrrbItz%2FEsvscYZWedla2PWHoupxwPN%2F5Ep4SHx02YDQB5VmpZJ%2Bsp%2FIpU2dJTUB66McNrCn0PzJG%2BlbmhrrktSlc8WFkzs0NRszQCNYE90oJJ34QTFMEZLfB9%2B8BWfjJ71iXW9KMxyrKl0PBF0ycDmRyt87ra08PC4KeugErqTc%2BDmMl5A3hmAnvpzpdjsDlrBJi%2BalaZbOTnTBZZMwSHGiL%2Bn39Er85UcN4vPo4tKVRJ0UHJfKjNgbI19IZme9bTV%2FndoLf14obUajuqe%2BjQhx2YymLbFSnbEvCfimCuZEatW%2FFgxJO2Oh62HRepizXF8%2FwwvYLYxAY6pgH8OLFGZihuM5Pmk%2FdD58g0Psw9kNkIZ%2BE0MHu%2FFKBwpcXHyrs7gCIcJrQAhKoN1oI1vcLkf%2BofXtAJVJnNhXg00lhg0EOPOYrOtWkak313AzQ5vmffa8n%2B4yT9icwv2asO5QDFv37gq9McXb93sWojap2oNrqYjtg4%2FkDeEGtqP78kVfWiSvtKypWuwEodmBm7jycgl3oaBVlRtmO4UDfgPYtqZ12G&X-Amz-Signature=2ba4ba7ff378bea5b65e264e1cf3d3d796abc42d1270020116f6cbfc13088178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
