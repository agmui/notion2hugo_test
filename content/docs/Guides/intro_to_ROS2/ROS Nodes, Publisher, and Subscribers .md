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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHRCTEU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQFCBz5CqMQHMYVKyrPHjSS0gG1U1R5pTJN3i%2FC1c59AIgA9k65FoOy0be3wUrAqFFxJayRjSiD7jqF%2Bar%2BUsVG6sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMSuPDqbh8rvG6mrASrcA1HNWWEWpHhcMgWju6WAGfZMxH4GP%2BqyqJ1b83BjpNnms4geH0iDJfnj3hSLlMXTrCZ%2FjhjeWtao1TbbMjyLHrHn87IBbBsVKKuiQ20sOHhDw6DiN2ORpHW0pc4woMcsQviPR2c%2BizSVvZ5%2FASPx4bc%2BJBIDBWAzqirFGYykV3W2iz8KApPtmsY752n5xNpahCCvrR8d2%2BA3qZ3Y%2BAGFXahq34G6%2F23AYLRIBfTp5k%2BLePjnJS3Z6wuQP5y4f9x6mkpw8qxbFsFi07aQsjW3ghEqQen%2B6TXKfEn6VPj3%2Bkd3CrscQ8pD%2BoExckSLtRXwgNKJvDlBMlfbFJzobLQ8BbiqJGvmSf%2BKlcX0OG97aV59ZB9%2FiYQaa2rsdrQI05aSqSoCf3OwLTp15fEied4rgvaXH%2FynZyaf%2BuUPbfthSgoONW%2BWAl15Gxk4fiiaGJBGQMeisBY6t%2FF%2B6ivKdRHg%2BcB4kdxiOWeq91wD3SsXcDXlDM7dgogP5ehUycc4Q%2FXEGneR3r6N4x0BvzrlgBEWNE4sS%2F7NWuTNOE47M4ofphIZsZD1shwM7y3Ies1yX7Wyw2Zurd35Hofj3mOdv2krvnJL7tNYq5FMNh3J9UO7X1weiMqFv5Yh2%2FfIzQj%2FMPOPoMEGOqUBlBW2DNpqyWJcS2XWtsBPaaEdO5iHiL2jQRlnz2nEUnw36lxXyGb3ZLmy%2Fzyb2SGmUj71RByy3JLok3%2BP6Mm3e1hCFgcE%2FHepY3D2YZ73%2FLZpbbJqVROnQ1MGxasKL8A2nNjCTKTvrzG3sNvfhnt1rXVZDDEoKtbfTyxbUEadkPR1F7Htf0LnP7thBTNZ30pvrwog%2FmG0HoODi0373589ri433pT6&X-Amz-Signature=0a682011f966fb4d81bf6394d77d265a7a039ceffc1ca36a800dbbc97c3a3249&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHRCTEU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQFCBz5CqMQHMYVKyrPHjSS0gG1U1R5pTJN3i%2FC1c59AIgA9k65FoOy0be3wUrAqFFxJayRjSiD7jqF%2Bar%2BUsVG6sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMSuPDqbh8rvG6mrASrcA1HNWWEWpHhcMgWju6WAGfZMxH4GP%2BqyqJ1b83BjpNnms4geH0iDJfnj3hSLlMXTrCZ%2FjhjeWtao1TbbMjyLHrHn87IBbBsVKKuiQ20sOHhDw6DiN2ORpHW0pc4woMcsQviPR2c%2BizSVvZ5%2FASPx4bc%2BJBIDBWAzqirFGYykV3W2iz8KApPtmsY752n5xNpahCCvrR8d2%2BA3qZ3Y%2BAGFXahq34G6%2F23AYLRIBfTp5k%2BLePjnJS3Z6wuQP5y4f9x6mkpw8qxbFsFi07aQsjW3ghEqQen%2B6TXKfEn6VPj3%2Bkd3CrscQ8pD%2BoExckSLtRXwgNKJvDlBMlfbFJzobLQ8BbiqJGvmSf%2BKlcX0OG97aV59ZB9%2FiYQaa2rsdrQI05aSqSoCf3OwLTp15fEied4rgvaXH%2FynZyaf%2BuUPbfthSgoONW%2BWAl15Gxk4fiiaGJBGQMeisBY6t%2FF%2B6ivKdRHg%2BcB4kdxiOWeq91wD3SsXcDXlDM7dgogP5ehUycc4Q%2FXEGneR3r6N4x0BvzrlgBEWNE4sS%2F7NWuTNOE47M4ofphIZsZD1shwM7y3Ies1yX7Wyw2Zurd35Hofj3mOdv2krvnJL7tNYq5FMNh3J9UO7X1weiMqFv5Yh2%2FfIzQj%2FMPOPoMEGOqUBlBW2DNpqyWJcS2XWtsBPaaEdO5iHiL2jQRlnz2nEUnw36lxXyGb3ZLmy%2Fzyb2SGmUj71RByy3JLok3%2BP6Mm3e1hCFgcE%2FHepY3D2YZ73%2FLZpbbJqVROnQ1MGxasKL8A2nNjCTKTvrzG3sNvfhnt1rXVZDDEoKtbfTyxbUEadkPR1F7Htf0LnP7thBTNZ30pvrwog%2FmG0HoODi0373589ri433pT6&X-Amz-Signature=c8fc9f2359f369a19f8d6635f565e6d205e1f16bd6ebeffbf64d136851057201&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHRCTEU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQFCBz5CqMQHMYVKyrPHjSS0gG1U1R5pTJN3i%2FC1c59AIgA9k65FoOy0be3wUrAqFFxJayRjSiD7jqF%2Bar%2BUsVG6sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMSuPDqbh8rvG6mrASrcA1HNWWEWpHhcMgWju6WAGfZMxH4GP%2BqyqJ1b83BjpNnms4geH0iDJfnj3hSLlMXTrCZ%2FjhjeWtao1TbbMjyLHrHn87IBbBsVKKuiQ20sOHhDw6DiN2ORpHW0pc4woMcsQviPR2c%2BizSVvZ5%2FASPx4bc%2BJBIDBWAzqirFGYykV3W2iz8KApPtmsY752n5xNpahCCvrR8d2%2BA3qZ3Y%2BAGFXahq34G6%2F23AYLRIBfTp5k%2BLePjnJS3Z6wuQP5y4f9x6mkpw8qxbFsFi07aQsjW3ghEqQen%2B6TXKfEn6VPj3%2Bkd3CrscQ8pD%2BoExckSLtRXwgNKJvDlBMlfbFJzobLQ8BbiqJGvmSf%2BKlcX0OG97aV59ZB9%2FiYQaa2rsdrQI05aSqSoCf3OwLTp15fEied4rgvaXH%2FynZyaf%2BuUPbfthSgoONW%2BWAl15Gxk4fiiaGJBGQMeisBY6t%2FF%2B6ivKdRHg%2BcB4kdxiOWeq91wD3SsXcDXlDM7dgogP5ehUycc4Q%2FXEGneR3r6N4x0BvzrlgBEWNE4sS%2F7NWuTNOE47M4ofphIZsZD1shwM7y3Ies1yX7Wyw2Zurd35Hofj3mOdv2krvnJL7tNYq5FMNh3J9UO7X1weiMqFv5Yh2%2FfIzQj%2FMPOPoMEGOqUBlBW2DNpqyWJcS2XWtsBPaaEdO5iHiL2jQRlnz2nEUnw36lxXyGb3ZLmy%2Fzyb2SGmUj71RByy3JLok3%2BP6Mm3e1hCFgcE%2FHepY3D2YZ73%2FLZpbbJqVROnQ1MGxasKL8A2nNjCTKTvrzG3sNvfhnt1rXVZDDEoKtbfTyxbUEadkPR1F7Htf0LnP7thBTNZ30pvrwog%2FmG0HoODi0373589ri433pT6&X-Amz-Signature=6e3a70e425395feb09453b81589858001af0847ea89e83b6ab7b1bda63b653db&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHRCTEU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQFCBz5CqMQHMYVKyrPHjSS0gG1U1R5pTJN3i%2FC1c59AIgA9k65FoOy0be3wUrAqFFxJayRjSiD7jqF%2Bar%2BUsVG6sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMSuPDqbh8rvG6mrASrcA1HNWWEWpHhcMgWju6WAGfZMxH4GP%2BqyqJ1b83BjpNnms4geH0iDJfnj3hSLlMXTrCZ%2FjhjeWtao1TbbMjyLHrHn87IBbBsVKKuiQ20sOHhDw6DiN2ORpHW0pc4woMcsQviPR2c%2BizSVvZ5%2FASPx4bc%2BJBIDBWAzqirFGYykV3W2iz8KApPtmsY752n5xNpahCCvrR8d2%2BA3qZ3Y%2BAGFXahq34G6%2F23AYLRIBfTp5k%2BLePjnJS3Z6wuQP5y4f9x6mkpw8qxbFsFi07aQsjW3ghEqQen%2B6TXKfEn6VPj3%2Bkd3CrscQ8pD%2BoExckSLtRXwgNKJvDlBMlfbFJzobLQ8BbiqJGvmSf%2BKlcX0OG97aV59ZB9%2FiYQaa2rsdrQI05aSqSoCf3OwLTp15fEied4rgvaXH%2FynZyaf%2BuUPbfthSgoONW%2BWAl15Gxk4fiiaGJBGQMeisBY6t%2FF%2B6ivKdRHg%2BcB4kdxiOWeq91wD3SsXcDXlDM7dgogP5ehUycc4Q%2FXEGneR3r6N4x0BvzrlgBEWNE4sS%2F7NWuTNOE47M4ofphIZsZD1shwM7y3Ies1yX7Wyw2Zurd35Hofj3mOdv2krvnJL7tNYq5FMNh3J9UO7X1weiMqFv5Yh2%2FfIzQj%2FMPOPoMEGOqUBlBW2DNpqyWJcS2XWtsBPaaEdO5iHiL2jQRlnz2nEUnw36lxXyGb3ZLmy%2Fzyb2SGmUj71RByy3JLok3%2BP6Mm3e1hCFgcE%2FHepY3D2YZ73%2FLZpbbJqVROnQ1MGxasKL8A2nNjCTKTvrzG3sNvfhnt1rXVZDDEoKtbfTyxbUEadkPR1F7Htf0LnP7thBTNZ30pvrwog%2FmG0HoODi0373589ri433pT6&X-Amz-Signature=2bbffcfa19b659ceb3f0743837de2bc4ebc2ace3dec1c645547abc74272aa905&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHRCTEU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQFCBz5CqMQHMYVKyrPHjSS0gG1U1R5pTJN3i%2FC1c59AIgA9k65FoOy0be3wUrAqFFxJayRjSiD7jqF%2Bar%2BUsVG6sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMSuPDqbh8rvG6mrASrcA1HNWWEWpHhcMgWju6WAGfZMxH4GP%2BqyqJ1b83BjpNnms4geH0iDJfnj3hSLlMXTrCZ%2FjhjeWtao1TbbMjyLHrHn87IBbBsVKKuiQ20sOHhDw6DiN2ORpHW0pc4woMcsQviPR2c%2BizSVvZ5%2FASPx4bc%2BJBIDBWAzqirFGYykV3W2iz8KApPtmsY752n5xNpahCCvrR8d2%2BA3qZ3Y%2BAGFXahq34G6%2F23AYLRIBfTp5k%2BLePjnJS3Z6wuQP5y4f9x6mkpw8qxbFsFi07aQsjW3ghEqQen%2B6TXKfEn6VPj3%2Bkd3CrscQ8pD%2BoExckSLtRXwgNKJvDlBMlfbFJzobLQ8BbiqJGvmSf%2BKlcX0OG97aV59ZB9%2FiYQaa2rsdrQI05aSqSoCf3OwLTp15fEied4rgvaXH%2FynZyaf%2BuUPbfthSgoONW%2BWAl15Gxk4fiiaGJBGQMeisBY6t%2FF%2B6ivKdRHg%2BcB4kdxiOWeq91wD3SsXcDXlDM7dgogP5ehUycc4Q%2FXEGneR3r6N4x0BvzrlgBEWNE4sS%2F7NWuTNOE47M4ofphIZsZD1shwM7y3Ies1yX7Wyw2Zurd35Hofj3mOdv2krvnJL7tNYq5FMNh3J9UO7X1weiMqFv5Yh2%2FfIzQj%2FMPOPoMEGOqUBlBW2DNpqyWJcS2XWtsBPaaEdO5iHiL2jQRlnz2nEUnw36lxXyGb3ZLmy%2Fzyb2SGmUj71RByy3JLok3%2BP6Mm3e1hCFgcE%2FHepY3D2YZ73%2FLZpbbJqVROnQ1MGxasKL8A2nNjCTKTvrzG3sNvfhnt1rXVZDDEoKtbfTyxbUEadkPR1F7Htf0LnP7thBTNZ30pvrwog%2FmG0HoODi0373589ri433pT6&X-Amz-Signature=3b8759348905ece5373f874ce0904a1899e5185065b2e919a559a9976b011568&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHRCTEU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQFCBz5CqMQHMYVKyrPHjSS0gG1U1R5pTJN3i%2FC1c59AIgA9k65FoOy0be3wUrAqFFxJayRjSiD7jqF%2Bar%2BUsVG6sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMSuPDqbh8rvG6mrASrcA1HNWWEWpHhcMgWju6WAGfZMxH4GP%2BqyqJ1b83BjpNnms4geH0iDJfnj3hSLlMXTrCZ%2FjhjeWtao1TbbMjyLHrHn87IBbBsVKKuiQ20sOHhDw6DiN2ORpHW0pc4woMcsQviPR2c%2BizSVvZ5%2FASPx4bc%2BJBIDBWAzqirFGYykV3W2iz8KApPtmsY752n5xNpahCCvrR8d2%2BA3qZ3Y%2BAGFXahq34G6%2F23AYLRIBfTp5k%2BLePjnJS3Z6wuQP5y4f9x6mkpw8qxbFsFi07aQsjW3ghEqQen%2B6TXKfEn6VPj3%2Bkd3CrscQ8pD%2BoExckSLtRXwgNKJvDlBMlfbFJzobLQ8BbiqJGvmSf%2BKlcX0OG97aV59ZB9%2FiYQaa2rsdrQI05aSqSoCf3OwLTp15fEied4rgvaXH%2FynZyaf%2BuUPbfthSgoONW%2BWAl15Gxk4fiiaGJBGQMeisBY6t%2FF%2B6ivKdRHg%2BcB4kdxiOWeq91wD3SsXcDXlDM7dgogP5ehUycc4Q%2FXEGneR3r6N4x0BvzrlgBEWNE4sS%2F7NWuTNOE47M4ofphIZsZD1shwM7y3Ies1yX7Wyw2Zurd35Hofj3mOdv2krvnJL7tNYq5FMNh3J9UO7X1weiMqFv5Yh2%2FfIzQj%2FMPOPoMEGOqUBlBW2DNpqyWJcS2XWtsBPaaEdO5iHiL2jQRlnz2nEUnw36lxXyGb3ZLmy%2Fzyb2SGmUj71RByy3JLok3%2BP6Mm3e1hCFgcE%2FHepY3D2YZ73%2FLZpbbJqVROnQ1MGxasKL8A2nNjCTKTvrzG3sNvfhnt1rXVZDDEoKtbfTyxbUEadkPR1F7Htf0LnP7thBTNZ30pvrwog%2FmG0HoODi0373589ri433pT6&X-Amz-Signature=39aafd3afca224136f0375f0ad56f4c437005e3dfd376518007fffc18ec0aa6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHRCTEU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQFCBz5CqMQHMYVKyrPHjSS0gG1U1R5pTJN3i%2FC1c59AIgA9k65FoOy0be3wUrAqFFxJayRjSiD7jqF%2Bar%2BUsVG6sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMSuPDqbh8rvG6mrASrcA1HNWWEWpHhcMgWju6WAGfZMxH4GP%2BqyqJ1b83BjpNnms4geH0iDJfnj3hSLlMXTrCZ%2FjhjeWtao1TbbMjyLHrHn87IBbBsVKKuiQ20sOHhDw6DiN2ORpHW0pc4woMcsQviPR2c%2BizSVvZ5%2FASPx4bc%2BJBIDBWAzqirFGYykV3W2iz8KApPtmsY752n5xNpahCCvrR8d2%2BA3qZ3Y%2BAGFXahq34G6%2F23AYLRIBfTp5k%2BLePjnJS3Z6wuQP5y4f9x6mkpw8qxbFsFi07aQsjW3ghEqQen%2B6TXKfEn6VPj3%2Bkd3CrscQ8pD%2BoExckSLtRXwgNKJvDlBMlfbFJzobLQ8BbiqJGvmSf%2BKlcX0OG97aV59ZB9%2FiYQaa2rsdrQI05aSqSoCf3OwLTp15fEied4rgvaXH%2FynZyaf%2BuUPbfthSgoONW%2BWAl15Gxk4fiiaGJBGQMeisBY6t%2FF%2B6ivKdRHg%2BcB4kdxiOWeq91wD3SsXcDXlDM7dgogP5ehUycc4Q%2FXEGneR3r6N4x0BvzrlgBEWNE4sS%2F7NWuTNOE47M4ofphIZsZD1shwM7y3Ies1yX7Wyw2Zurd35Hofj3mOdv2krvnJL7tNYq5FMNh3J9UO7X1weiMqFv5Yh2%2FfIzQj%2FMPOPoMEGOqUBlBW2DNpqyWJcS2XWtsBPaaEdO5iHiL2jQRlnz2nEUnw36lxXyGb3ZLmy%2Fzyb2SGmUj71RByy3JLok3%2BP6Mm3e1hCFgcE%2FHepY3D2YZ73%2FLZpbbJqVROnQ1MGxasKL8A2nNjCTKTvrzG3sNvfhnt1rXVZDDEoKtbfTyxbUEadkPR1F7Htf0LnP7thBTNZ30pvrwog%2FmG0HoODi0373589ri433pT6&X-Amz-Signature=d398c9ca42ecb308af7b1733320cb6b4f0b513e2b11b79de5d3c5c293ad4fe43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHRCTEU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQFCBz5CqMQHMYVKyrPHjSS0gG1U1R5pTJN3i%2FC1c59AIgA9k65FoOy0be3wUrAqFFxJayRjSiD7jqF%2Bar%2BUsVG6sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMSuPDqbh8rvG6mrASrcA1HNWWEWpHhcMgWju6WAGfZMxH4GP%2BqyqJ1b83BjpNnms4geH0iDJfnj3hSLlMXTrCZ%2FjhjeWtao1TbbMjyLHrHn87IBbBsVKKuiQ20sOHhDw6DiN2ORpHW0pc4woMcsQviPR2c%2BizSVvZ5%2FASPx4bc%2BJBIDBWAzqirFGYykV3W2iz8KApPtmsY752n5xNpahCCvrR8d2%2BA3qZ3Y%2BAGFXahq34G6%2F23AYLRIBfTp5k%2BLePjnJS3Z6wuQP5y4f9x6mkpw8qxbFsFi07aQsjW3ghEqQen%2B6TXKfEn6VPj3%2Bkd3CrscQ8pD%2BoExckSLtRXwgNKJvDlBMlfbFJzobLQ8BbiqJGvmSf%2BKlcX0OG97aV59ZB9%2FiYQaa2rsdrQI05aSqSoCf3OwLTp15fEied4rgvaXH%2FynZyaf%2BuUPbfthSgoONW%2BWAl15Gxk4fiiaGJBGQMeisBY6t%2FF%2B6ivKdRHg%2BcB4kdxiOWeq91wD3SsXcDXlDM7dgogP5ehUycc4Q%2FXEGneR3r6N4x0BvzrlgBEWNE4sS%2F7NWuTNOE47M4ofphIZsZD1shwM7y3Ies1yX7Wyw2Zurd35Hofj3mOdv2krvnJL7tNYq5FMNh3J9UO7X1weiMqFv5Yh2%2FfIzQj%2FMPOPoMEGOqUBlBW2DNpqyWJcS2XWtsBPaaEdO5iHiL2jQRlnz2nEUnw36lxXyGb3ZLmy%2Fzyb2SGmUj71RByy3JLok3%2BP6Mm3e1hCFgcE%2FHepY3D2YZ73%2FLZpbbJqVROnQ1MGxasKL8A2nNjCTKTvrzG3sNvfhnt1rXVZDDEoKtbfTyxbUEadkPR1F7Htf0LnP7thBTNZ30pvrwog%2FmG0HoODi0373589ri433pT6&X-Amz-Signature=4709ed485fdb651d7028a3d84400f7a4e9e35dce620868f6c4178c0fbeacdfb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
