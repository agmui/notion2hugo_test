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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFY3VR4P%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGZoDb8umFo8iQojE%2BCLeEdEKwMnWZCjVpA%2FIfQmiVNeAiBCQUGp8QTmgkTwtKx%2Fsfn%2B8oz5ZWNOfex%2FinZjqr6xxyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1oq0SjxcqYh2p0KKtwDg%2FobJPbaTEPD7xIjiVNjmbVqHjDd28%2FOe0f3eDizgN%2Brd6EY90qc8CxzoyslgxokhUrYK3WZ20pMPzap3eNNZcu3C%2FHgzjBuf00ooPvX%2FXN9HES1016AZVzTMNQx2KQtuE5AZnH2N4iLqtWykk63wT7D1Ay1yQg1dhczsw4zhg5H63H1k8gLeVFYmzle%2Bp%2BbIpS2SztpsK%2FjbVpCpyMlmaphXIs3fbEZFCuwscAIMWxv1QEqk9cuXEcIogqc9HeLAG90GYkB3mokUK3g%2BLi6ZrfJybYY%2FWK5RKP4w66EyosXZr1hs%2B2Dqm6Zw%2FqyEDccPiPFL%2FOAtyroJuWO1kcC9OHeY%2BiI3ZBUsepYEq9yn1EQG8mt6Q0Dzzuzv%2BL2SNsIfziHYEMU%2F3aX0Cf8cJNh%2FniiIftgs7sOmGgh0QYwvzPGEqRRP52Dy63xFgoCMeisqsK3ANyxbb1wUW7jshu4uOmVux0tT784lqVKXHTap1ElfpYdFhagL1P17IS9oAoe%2FeCJj%2BYXithmIZdaSbC0t4WOknk4Z03gGl6I%2FlPQzLT%2BpXJnt5NkUhGRmsmI2fdod%2FkF5E7Iw1hbmTW39yuujZE0rngcamxWGYGx3x4YdGwA0Vmp4kZMZaHjf2kwoJDKwAY6pgHJG8II1s%2BvyU1jFP2vDHz3FLGfNFxIdtTOMZP9yACE4n8CNx2OazbeJblbcDUerjwRpOUHp%2Bdd7OWMZvOpAgDWw%2Fsrn4XWJfNDAcIb2eM6z91W1jp6yNrh2O8rwTWdGNcP7o4VXzsqJMT50lna%2BdS9mji3MN48WdU0t87mLf%2B%2FmCyau1%2Bvi0uI1TuoD8M3OxlsF63XhIbTm0zP8ieB%2FeUYKmJsZw0k&X-Amz-Signature=09868caad05823529fc9061824c92b068172e7f9a2a7b13970f31c069de61d56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFY3VR4P%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGZoDb8umFo8iQojE%2BCLeEdEKwMnWZCjVpA%2FIfQmiVNeAiBCQUGp8QTmgkTwtKx%2Fsfn%2B8oz5ZWNOfex%2FinZjqr6xxyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1oq0SjxcqYh2p0KKtwDg%2FobJPbaTEPD7xIjiVNjmbVqHjDd28%2FOe0f3eDizgN%2Brd6EY90qc8CxzoyslgxokhUrYK3WZ20pMPzap3eNNZcu3C%2FHgzjBuf00ooPvX%2FXN9HES1016AZVzTMNQx2KQtuE5AZnH2N4iLqtWykk63wT7D1Ay1yQg1dhczsw4zhg5H63H1k8gLeVFYmzle%2Bp%2BbIpS2SztpsK%2FjbVpCpyMlmaphXIs3fbEZFCuwscAIMWxv1QEqk9cuXEcIogqc9HeLAG90GYkB3mokUK3g%2BLi6ZrfJybYY%2FWK5RKP4w66EyosXZr1hs%2B2Dqm6Zw%2FqyEDccPiPFL%2FOAtyroJuWO1kcC9OHeY%2BiI3ZBUsepYEq9yn1EQG8mt6Q0Dzzuzv%2BL2SNsIfziHYEMU%2F3aX0Cf8cJNh%2FniiIftgs7sOmGgh0QYwvzPGEqRRP52Dy63xFgoCMeisqsK3ANyxbb1wUW7jshu4uOmVux0tT784lqVKXHTap1ElfpYdFhagL1P17IS9oAoe%2FeCJj%2BYXithmIZdaSbC0t4WOknk4Z03gGl6I%2FlPQzLT%2BpXJnt5NkUhGRmsmI2fdod%2FkF5E7Iw1hbmTW39yuujZE0rngcamxWGYGx3x4YdGwA0Vmp4kZMZaHjf2kwoJDKwAY6pgHJG8II1s%2BvyU1jFP2vDHz3FLGfNFxIdtTOMZP9yACE4n8CNx2OazbeJblbcDUerjwRpOUHp%2Bdd7OWMZvOpAgDWw%2Fsrn4XWJfNDAcIb2eM6z91W1jp6yNrh2O8rwTWdGNcP7o4VXzsqJMT50lna%2BdS9mji3MN48WdU0t87mLf%2B%2FmCyau1%2Bvi0uI1TuoD8M3OxlsF63XhIbTm0zP8ieB%2FeUYKmJsZw0k&X-Amz-Signature=e56f8baa5ce832726c74cdc3b4a308a3feb4efbaef5f2768aa1a8d8a2e3bda30&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFY3VR4P%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGZoDb8umFo8iQojE%2BCLeEdEKwMnWZCjVpA%2FIfQmiVNeAiBCQUGp8QTmgkTwtKx%2Fsfn%2B8oz5ZWNOfex%2FinZjqr6xxyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1oq0SjxcqYh2p0KKtwDg%2FobJPbaTEPD7xIjiVNjmbVqHjDd28%2FOe0f3eDizgN%2Brd6EY90qc8CxzoyslgxokhUrYK3WZ20pMPzap3eNNZcu3C%2FHgzjBuf00ooPvX%2FXN9HES1016AZVzTMNQx2KQtuE5AZnH2N4iLqtWykk63wT7D1Ay1yQg1dhczsw4zhg5H63H1k8gLeVFYmzle%2Bp%2BbIpS2SztpsK%2FjbVpCpyMlmaphXIs3fbEZFCuwscAIMWxv1QEqk9cuXEcIogqc9HeLAG90GYkB3mokUK3g%2BLi6ZrfJybYY%2FWK5RKP4w66EyosXZr1hs%2B2Dqm6Zw%2FqyEDccPiPFL%2FOAtyroJuWO1kcC9OHeY%2BiI3ZBUsepYEq9yn1EQG8mt6Q0Dzzuzv%2BL2SNsIfziHYEMU%2F3aX0Cf8cJNh%2FniiIftgs7sOmGgh0QYwvzPGEqRRP52Dy63xFgoCMeisqsK3ANyxbb1wUW7jshu4uOmVux0tT784lqVKXHTap1ElfpYdFhagL1P17IS9oAoe%2FeCJj%2BYXithmIZdaSbC0t4WOknk4Z03gGl6I%2FlPQzLT%2BpXJnt5NkUhGRmsmI2fdod%2FkF5E7Iw1hbmTW39yuujZE0rngcamxWGYGx3x4YdGwA0Vmp4kZMZaHjf2kwoJDKwAY6pgHJG8II1s%2BvyU1jFP2vDHz3FLGfNFxIdtTOMZP9yACE4n8CNx2OazbeJblbcDUerjwRpOUHp%2Bdd7OWMZvOpAgDWw%2Fsrn4XWJfNDAcIb2eM6z91W1jp6yNrh2O8rwTWdGNcP7o4VXzsqJMT50lna%2BdS9mji3MN48WdU0t87mLf%2B%2FmCyau1%2Bvi0uI1TuoD8M3OxlsF63XhIbTm0zP8ieB%2FeUYKmJsZw0k&X-Amz-Signature=a7cac5a721b3da47f489a12b34546a509f831c999043603c1fde589b8b0cc482&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFY3VR4P%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGZoDb8umFo8iQojE%2BCLeEdEKwMnWZCjVpA%2FIfQmiVNeAiBCQUGp8QTmgkTwtKx%2Fsfn%2B8oz5ZWNOfex%2FinZjqr6xxyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1oq0SjxcqYh2p0KKtwDg%2FobJPbaTEPD7xIjiVNjmbVqHjDd28%2FOe0f3eDizgN%2Brd6EY90qc8CxzoyslgxokhUrYK3WZ20pMPzap3eNNZcu3C%2FHgzjBuf00ooPvX%2FXN9HES1016AZVzTMNQx2KQtuE5AZnH2N4iLqtWykk63wT7D1Ay1yQg1dhczsw4zhg5H63H1k8gLeVFYmzle%2Bp%2BbIpS2SztpsK%2FjbVpCpyMlmaphXIs3fbEZFCuwscAIMWxv1QEqk9cuXEcIogqc9HeLAG90GYkB3mokUK3g%2BLi6ZrfJybYY%2FWK5RKP4w66EyosXZr1hs%2B2Dqm6Zw%2FqyEDccPiPFL%2FOAtyroJuWO1kcC9OHeY%2BiI3ZBUsepYEq9yn1EQG8mt6Q0Dzzuzv%2BL2SNsIfziHYEMU%2F3aX0Cf8cJNh%2FniiIftgs7sOmGgh0QYwvzPGEqRRP52Dy63xFgoCMeisqsK3ANyxbb1wUW7jshu4uOmVux0tT784lqVKXHTap1ElfpYdFhagL1P17IS9oAoe%2FeCJj%2BYXithmIZdaSbC0t4WOknk4Z03gGl6I%2FlPQzLT%2BpXJnt5NkUhGRmsmI2fdod%2FkF5E7Iw1hbmTW39yuujZE0rngcamxWGYGx3x4YdGwA0Vmp4kZMZaHjf2kwoJDKwAY6pgHJG8II1s%2BvyU1jFP2vDHz3FLGfNFxIdtTOMZP9yACE4n8CNx2OazbeJblbcDUerjwRpOUHp%2Bdd7OWMZvOpAgDWw%2Fsrn4XWJfNDAcIb2eM6z91W1jp6yNrh2O8rwTWdGNcP7o4VXzsqJMT50lna%2BdS9mji3MN48WdU0t87mLf%2B%2FmCyau1%2Bvi0uI1TuoD8M3OxlsF63XhIbTm0zP8ieB%2FeUYKmJsZw0k&X-Amz-Signature=d1068e237bc7a393ce77f7dde0295e80f9977056bd0f81fce9f1df57d21b5b35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFY3VR4P%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGZoDb8umFo8iQojE%2BCLeEdEKwMnWZCjVpA%2FIfQmiVNeAiBCQUGp8QTmgkTwtKx%2Fsfn%2B8oz5ZWNOfex%2FinZjqr6xxyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1oq0SjxcqYh2p0KKtwDg%2FobJPbaTEPD7xIjiVNjmbVqHjDd28%2FOe0f3eDizgN%2Brd6EY90qc8CxzoyslgxokhUrYK3WZ20pMPzap3eNNZcu3C%2FHgzjBuf00ooPvX%2FXN9HES1016AZVzTMNQx2KQtuE5AZnH2N4iLqtWykk63wT7D1Ay1yQg1dhczsw4zhg5H63H1k8gLeVFYmzle%2Bp%2BbIpS2SztpsK%2FjbVpCpyMlmaphXIs3fbEZFCuwscAIMWxv1QEqk9cuXEcIogqc9HeLAG90GYkB3mokUK3g%2BLi6ZrfJybYY%2FWK5RKP4w66EyosXZr1hs%2B2Dqm6Zw%2FqyEDccPiPFL%2FOAtyroJuWO1kcC9OHeY%2BiI3ZBUsepYEq9yn1EQG8mt6Q0Dzzuzv%2BL2SNsIfziHYEMU%2F3aX0Cf8cJNh%2FniiIftgs7sOmGgh0QYwvzPGEqRRP52Dy63xFgoCMeisqsK3ANyxbb1wUW7jshu4uOmVux0tT784lqVKXHTap1ElfpYdFhagL1P17IS9oAoe%2FeCJj%2BYXithmIZdaSbC0t4WOknk4Z03gGl6I%2FlPQzLT%2BpXJnt5NkUhGRmsmI2fdod%2FkF5E7Iw1hbmTW39yuujZE0rngcamxWGYGx3x4YdGwA0Vmp4kZMZaHjf2kwoJDKwAY6pgHJG8II1s%2BvyU1jFP2vDHz3FLGfNFxIdtTOMZP9yACE4n8CNx2OazbeJblbcDUerjwRpOUHp%2Bdd7OWMZvOpAgDWw%2Fsrn4XWJfNDAcIb2eM6z91W1jp6yNrh2O8rwTWdGNcP7o4VXzsqJMT50lna%2BdS9mji3MN48WdU0t87mLf%2B%2FmCyau1%2Bvi0uI1TuoD8M3OxlsF63XhIbTm0zP8ieB%2FeUYKmJsZw0k&X-Amz-Signature=6c4251b2fc2c9b2a1b53eb3180918f8c0b7dd33b895a02e5ffeebdf75f1215dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFY3VR4P%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGZoDb8umFo8iQojE%2BCLeEdEKwMnWZCjVpA%2FIfQmiVNeAiBCQUGp8QTmgkTwtKx%2Fsfn%2B8oz5ZWNOfex%2FinZjqr6xxyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1oq0SjxcqYh2p0KKtwDg%2FobJPbaTEPD7xIjiVNjmbVqHjDd28%2FOe0f3eDizgN%2Brd6EY90qc8CxzoyslgxokhUrYK3WZ20pMPzap3eNNZcu3C%2FHgzjBuf00ooPvX%2FXN9HES1016AZVzTMNQx2KQtuE5AZnH2N4iLqtWykk63wT7D1Ay1yQg1dhczsw4zhg5H63H1k8gLeVFYmzle%2Bp%2BbIpS2SztpsK%2FjbVpCpyMlmaphXIs3fbEZFCuwscAIMWxv1QEqk9cuXEcIogqc9HeLAG90GYkB3mokUK3g%2BLi6ZrfJybYY%2FWK5RKP4w66EyosXZr1hs%2B2Dqm6Zw%2FqyEDccPiPFL%2FOAtyroJuWO1kcC9OHeY%2BiI3ZBUsepYEq9yn1EQG8mt6Q0Dzzuzv%2BL2SNsIfziHYEMU%2F3aX0Cf8cJNh%2FniiIftgs7sOmGgh0QYwvzPGEqRRP52Dy63xFgoCMeisqsK3ANyxbb1wUW7jshu4uOmVux0tT784lqVKXHTap1ElfpYdFhagL1P17IS9oAoe%2FeCJj%2BYXithmIZdaSbC0t4WOknk4Z03gGl6I%2FlPQzLT%2BpXJnt5NkUhGRmsmI2fdod%2FkF5E7Iw1hbmTW39yuujZE0rngcamxWGYGx3x4YdGwA0Vmp4kZMZaHjf2kwoJDKwAY6pgHJG8II1s%2BvyU1jFP2vDHz3FLGfNFxIdtTOMZP9yACE4n8CNx2OazbeJblbcDUerjwRpOUHp%2Bdd7OWMZvOpAgDWw%2Fsrn4XWJfNDAcIb2eM6z91W1jp6yNrh2O8rwTWdGNcP7o4VXzsqJMT50lna%2BdS9mji3MN48WdU0t87mLf%2B%2FmCyau1%2Bvi0uI1TuoD8M3OxlsF63XhIbTm0zP8ieB%2FeUYKmJsZw0k&X-Amz-Signature=14f77b6cc7a4fd647a22b6a74925f9bab08f340ea6052ec6df91622c05010312&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFY3VR4P%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGZoDb8umFo8iQojE%2BCLeEdEKwMnWZCjVpA%2FIfQmiVNeAiBCQUGp8QTmgkTwtKx%2Fsfn%2B8oz5ZWNOfex%2FinZjqr6xxyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1oq0SjxcqYh2p0KKtwDg%2FobJPbaTEPD7xIjiVNjmbVqHjDd28%2FOe0f3eDizgN%2Brd6EY90qc8CxzoyslgxokhUrYK3WZ20pMPzap3eNNZcu3C%2FHgzjBuf00ooPvX%2FXN9HES1016AZVzTMNQx2KQtuE5AZnH2N4iLqtWykk63wT7D1Ay1yQg1dhczsw4zhg5H63H1k8gLeVFYmzle%2Bp%2BbIpS2SztpsK%2FjbVpCpyMlmaphXIs3fbEZFCuwscAIMWxv1QEqk9cuXEcIogqc9HeLAG90GYkB3mokUK3g%2BLi6ZrfJybYY%2FWK5RKP4w66EyosXZr1hs%2B2Dqm6Zw%2FqyEDccPiPFL%2FOAtyroJuWO1kcC9OHeY%2BiI3ZBUsepYEq9yn1EQG8mt6Q0Dzzuzv%2BL2SNsIfziHYEMU%2F3aX0Cf8cJNh%2FniiIftgs7sOmGgh0QYwvzPGEqRRP52Dy63xFgoCMeisqsK3ANyxbb1wUW7jshu4uOmVux0tT784lqVKXHTap1ElfpYdFhagL1P17IS9oAoe%2FeCJj%2BYXithmIZdaSbC0t4WOknk4Z03gGl6I%2FlPQzLT%2BpXJnt5NkUhGRmsmI2fdod%2FkF5E7Iw1hbmTW39yuujZE0rngcamxWGYGx3x4YdGwA0Vmp4kZMZaHjf2kwoJDKwAY6pgHJG8II1s%2BvyU1jFP2vDHz3FLGfNFxIdtTOMZP9yACE4n8CNx2OazbeJblbcDUerjwRpOUHp%2Bdd7OWMZvOpAgDWw%2Fsrn4XWJfNDAcIb2eM6z91W1jp6yNrh2O8rwTWdGNcP7o4VXzsqJMT50lna%2BdS9mji3MN48WdU0t87mLf%2B%2FmCyau1%2Bvi0uI1TuoD8M3OxlsF63XhIbTm0zP8ieB%2FeUYKmJsZw0k&X-Amz-Signature=22560dd237d056647fbb6621c6eb7d5e87fb4be8e5e05804502fc7f6e10c5b19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFY3VR4P%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGZoDb8umFo8iQojE%2BCLeEdEKwMnWZCjVpA%2FIfQmiVNeAiBCQUGp8QTmgkTwtKx%2Fsfn%2B8oz5ZWNOfex%2FinZjqr6xxyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo1oq0SjxcqYh2p0KKtwDg%2FobJPbaTEPD7xIjiVNjmbVqHjDd28%2FOe0f3eDizgN%2Brd6EY90qc8CxzoyslgxokhUrYK3WZ20pMPzap3eNNZcu3C%2FHgzjBuf00ooPvX%2FXN9HES1016AZVzTMNQx2KQtuE5AZnH2N4iLqtWykk63wT7D1Ay1yQg1dhczsw4zhg5H63H1k8gLeVFYmzle%2Bp%2BbIpS2SztpsK%2FjbVpCpyMlmaphXIs3fbEZFCuwscAIMWxv1QEqk9cuXEcIogqc9HeLAG90GYkB3mokUK3g%2BLi6ZrfJybYY%2FWK5RKP4w66EyosXZr1hs%2B2Dqm6Zw%2FqyEDccPiPFL%2FOAtyroJuWO1kcC9OHeY%2BiI3ZBUsepYEq9yn1EQG8mt6Q0Dzzuzv%2BL2SNsIfziHYEMU%2F3aX0Cf8cJNh%2FniiIftgs7sOmGgh0QYwvzPGEqRRP52Dy63xFgoCMeisqsK3ANyxbb1wUW7jshu4uOmVux0tT784lqVKXHTap1ElfpYdFhagL1P17IS9oAoe%2FeCJj%2BYXithmIZdaSbC0t4WOknk4Z03gGl6I%2FlPQzLT%2BpXJnt5NkUhGRmsmI2fdod%2FkF5E7Iw1hbmTW39yuujZE0rngcamxWGYGx3x4YdGwA0Vmp4kZMZaHjf2kwoJDKwAY6pgHJG8II1s%2BvyU1jFP2vDHz3FLGfNFxIdtTOMZP9yACE4n8CNx2OazbeJblbcDUerjwRpOUHp%2Bdd7OWMZvOpAgDWw%2Fsrn4XWJfNDAcIb2eM6z91W1jp6yNrh2O8rwTWdGNcP7o4VXzsqJMT50lna%2BdS9mji3MN48WdU0t87mLf%2B%2FmCyau1%2Bvi0uI1TuoD8M3OxlsF63XhIbTm0zP8ieB%2FeUYKmJsZw0k&X-Amz-Signature=c0e4c42a17fda15bb254c7c2354e58af2e7ddcce2d2b99af60d538b2b378b8ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
