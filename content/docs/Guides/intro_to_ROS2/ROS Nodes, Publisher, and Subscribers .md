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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOJ7FA3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaSENw0JX5uEq3E9gx0qg22pLn5ZE3EZ11NZDpsOmgLAiEAn%2Bl2vQeL4U0oRnPCYamhvfV%2BhCA5d1grVNqlMivti4sq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAmtEE5riZdlWHQn2SrcA1rOwcOVzJr2XFEFApi1Flcse990SxQvV9Kh8nfupd%2BSenTGGgwem9ESlBdblI7w6pCTre3XlVcwr8fd66HZpLkqRJLtnZx%2FfsRf3FRbNFb%2BO1uuKX18tYl3tcVLQQ01KpLHYhltMsqR1iytlLCSdOOL%2FEp4%2BIx3Own71%2FG%2B6N8LdwrD%2FK%2FVyC9Hpt%2Ba%2BG7heAsvEBTyE09p%2Ff%2FyHpUMWxGumsvuj6LXufBCpkqo8uxcghheB0hDzKh2Cn%2BY1rln2nKSQMRN9Gk7BCE2uj%2B8Be97NEzpvQ1wdBVtk1aHGMHTkNfPRXK0VJWC%2FtcPxQsgL77QivJmn8r5QNNcmAwzEpNdj%2FUt%2FrAyTvGp74vkhvnk9%2Fi9xnydg7fvtn6eP7yHSn1oEAe5Iz3%2FejxF5Okti0bfROQiVZTroAOrP7do4WVP41lgyD6jTNxdLMvaek7JoSR4Y169Ke5K5%2BT5khA3Sq9pMU2Jao7qkxkBKn2XqD%2FtP0dr0Ymi%2BGQg1RW6FVEaVmw%2FMQQGyfhkvbAYXyYEiyZ3TMuB9y7Dh6A5dPRfcysa1pZ57IC9I2Tupx7wD%2BPPJ41LEfHsarCYwhtAEstf791vXxuaOmg4WSDYs9qtKn2deGfWQOP2ZZSHZXfGMP6W2MEGOqUBrGoaLaTtsAzSX0G8E9jTmeUUyXNoM8sfi59jP4FqwismeOZ89sRcGnRhWkf8N5SnKZxXyO8BzoKaX3E2tfqk8E%2FMJ%2FoWlqPYLCqFDGXftjtMCku9Cd6UpudwlaurrGL2IRpllhH78AEVmRxHqF45YL1ls8KrS4UFS35%2BTthYBCcptbrv5H4qFkqaKJSi7Rn7LoSZAQqagWQ5IEIDTb22dRIclLIY&X-Amz-Signature=a33d865133ee6fe4fd32229252c8cbc5c98ba43f3e76db51e08cc939cbd3b74b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOJ7FA3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaSENw0JX5uEq3E9gx0qg22pLn5ZE3EZ11NZDpsOmgLAiEAn%2Bl2vQeL4U0oRnPCYamhvfV%2BhCA5d1grVNqlMivti4sq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAmtEE5riZdlWHQn2SrcA1rOwcOVzJr2XFEFApi1Flcse990SxQvV9Kh8nfupd%2BSenTGGgwem9ESlBdblI7w6pCTre3XlVcwr8fd66HZpLkqRJLtnZx%2FfsRf3FRbNFb%2BO1uuKX18tYl3tcVLQQ01KpLHYhltMsqR1iytlLCSdOOL%2FEp4%2BIx3Own71%2FG%2B6N8LdwrD%2FK%2FVyC9Hpt%2Ba%2BG7heAsvEBTyE09p%2Ff%2FyHpUMWxGumsvuj6LXufBCpkqo8uxcghheB0hDzKh2Cn%2BY1rln2nKSQMRN9Gk7BCE2uj%2B8Be97NEzpvQ1wdBVtk1aHGMHTkNfPRXK0VJWC%2FtcPxQsgL77QivJmn8r5QNNcmAwzEpNdj%2FUt%2FrAyTvGp74vkhvnk9%2Fi9xnydg7fvtn6eP7yHSn1oEAe5Iz3%2FejxF5Okti0bfROQiVZTroAOrP7do4WVP41lgyD6jTNxdLMvaek7JoSR4Y169Ke5K5%2BT5khA3Sq9pMU2Jao7qkxkBKn2XqD%2FtP0dr0Ymi%2BGQg1RW6FVEaVmw%2FMQQGyfhkvbAYXyYEiyZ3TMuB9y7Dh6A5dPRfcysa1pZ57IC9I2Tupx7wD%2BPPJ41LEfHsarCYwhtAEstf791vXxuaOmg4WSDYs9qtKn2deGfWQOP2ZZSHZXfGMP6W2MEGOqUBrGoaLaTtsAzSX0G8E9jTmeUUyXNoM8sfi59jP4FqwismeOZ89sRcGnRhWkf8N5SnKZxXyO8BzoKaX3E2tfqk8E%2FMJ%2FoWlqPYLCqFDGXftjtMCku9Cd6UpudwlaurrGL2IRpllhH78AEVmRxHqF45YL1ls8KrS4UFS35%2BTthYBCcptbrv5H4qFkqaKJSi7Rn7LoSZAQqagWQ5IEIDTb22dRIclLIY&X-Amz-Signature=0bcb9314a958c774d560aafde7062253b286cc7e3f65c6c00e5c64ddce963a06&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOJ7FA3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaSENw0JX5uEq3E9gx0qg22pLn5ZE3EZ11NZDpsOmgLAiEAn%2Bl2vQeL4U0oRnPCYamhvfV%2BhCA5d1grVNqlMivti4sq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAmtEE5riZdlWHQn2SrcA1rOwcOVzJr2XFEFApi1Flcse990SxQvV9Kh8nfupd%2BSenTGGgwem9ESlBdblI7w6pCTre3XlVcwr8fd66HZpLkqRJLtnZx%2FfsRf3FRbNFb%2BO1uuKX18tYl3tcVLQQ01KpLHYhltMsqR1iytlLCSdOOL%2FEp4%2BIx3Own71%2FG%2B6N8LdwrD%2FK%2FVyC9Hpt%2Ba%2BG7heAsvEBTyE09p%2Ff%2FyHpUMWxGumsvuj6LXufBCpkqo8uxcghheB0hDzKh2Cn%2BY1rln2nKSQMRN9Gk7BCE2uj%2B8Be97NEzpvQ1wdBVtk1aHGMHTkNfPRXK0VJWC%2FtcPxQsgL77QivJmn8r5QNNcmAwzEpNdj%2FUt%2FrAyTvGp74vkhvnk9%2Fi9xnydg7fvtn6eP7yHSn1oEAe5Iz3%2FejxF5Okti0bfROQiVZTroAOrP7do4WVP41lgyD6jTNxdLMvaek7JoSR4Y169Ke5K5%2BT5khA3Sq9pMU2Jao7qkxkBKn2XqD%2FtP0dr0Ymi%2BGQg1RW6FVEaVmw%2FMQQGyfhkvbAYXyYEiyZ3TMuB9y7Dh6A5dPRfcysa1pZ57IC9I2Tupx7wD%2BPPJ41LEfHsarCYwhtAEstf791vXxuaOmg4WSDYs9qtKn2deGfWQOP2ZZSHZXfGMP6W2MEGOqUBrGoaLaTtsAzSX0G8E9jTmeUUyXNoM8sfi59jP4FqwismeOZ89sRcGnRhWkf8N5SnKZxXyO8BzoKaX3E2tfqk8E%2FMJ%2FoWlqPYLCqFDGXftjtMCku9Cd6UpudwlaurrGL2IRpllhH78AEVmRxHqF45YL1ls8KrS4UFS35%2BTthYBCcptbrv5H4qFkqaKJSi7Rn7LoSZAQqagWQ5IEIDTb22dRIclLIY&X-Amz-Signature=84bc7aa8f64d150445dc019e69b2b984b5ba8dda00de2e8509267faba34fdc83&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOJ7FA3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaSENw0JX5uEq3E9gx0qg22pLn5ZE3EZ11NZDpsOmgLAiEAn%2Bl2vQeL4U0oRnPCYamhvfV%2BhCA5d1grVNqlMivti4sq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAmtEE5riZdlWHQn2SrcA1rOwcOVzJr2XFEFApi1Flcse990SxQvV9Kh8nfupd%2BSenTGGgwem9ESlBdblI7w6pCTre3XlVcwr8fd66HZpLkqRJLtnZx%2FfsRf3FRbNFb%2BO1uuKX18tYl3tcVLQQ01KpLHYhltMsqR1iytlLCSdOOL%2FEp4%2BIx3Own71%2FG%2B6N8LdwrD%2FK%2FVyC9Hpt%2Ba%2BG7heAsvEBTyE09p%2Ff%2FyHpUMWxGumsvuj6LXufBCpkqo8uxcghheB0hDzKh2Cn%2BY1rln2nKSQMRN9Gk7BCE2uj%2B8Be97NEzpvQ1wdBVtk1aHGMHTkNfPRXK0VJWC%2FtcPxQsgL77QivJmn8r5QNNcmAwzEpNdj%2FUt%2FrAyTvGp74vkhvnk9%2Fi9xnydg7fvtn6eP7yHSn1oEAe5Iz3%2FejxF5Okti0bfROQiVZTroAOrP7do4WVP41lgyD6jTNxdLMvaek7JoSR4Y169Ke5K5%2BT5khA3Sq9pMU2Jao7qkxkBKn2XqD%2FtP0dr0Ymi%2BGQg1RW6FVEaVmw%2FMQQGyfhkvbAYXyYEiyZ3TMuB9y7Dh6A5dPRfcysa1pZ57IC9I2Tupx7wD%2BPPJ41LEfHsarCYwhtAEstf791vXxuaOmg4WSDYs9qtKn2deGfWQOP2ZZSHZXfGMP6W2MEGOqUBrGoaLaTtsAzSX0G8E9jTmeUUyXNoM8sfi59jP4FqwismeOZ89sRcGnRhWkf8N5SnKZxXyO8BzoKaX3E2tfqk8E%2FMJ%2FoWlqPYLCqFDGXftjtMCku9Cd6UpudwlaurrGL2IRpllhH78AEVmRxHqF45YL1ls8KrS4UFS35%2BTthYBCcptbrv5H4qFkqaKJSi7Rn7LoSZAQqagWQ5IEIDTb22dRIclLIY&X-Amz-Signature=ea7cfa439124f3e3a663183e74a891a1392a7ff60daa05ec8c12ca794eba3e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOJ7FA3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaSENw0JX5uEq3E9gx0qg22pLn5ZE3EZ11NZDpsOmgLAiEAn%2Bl2vQeL4U0oRnPCYamhvfV%2BhCA5d1grVNqlMivti4sq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAmtEE5riZdlWHQn2SrcA1rOwcOVzJr2XFEFApi1Flcse990SxQvV9Kh8nfupd%2BSenTGGgwem9ESlBdblI7w6pCTre3XlVcwr8fd66HZpLkqRJLtnZx%2FfsRf3FRbNFb%2BO1uuKX18tYl3tcVLQQ01KpLHYhltMsqR1iytlLCSdOOL%2FEp4%2BIx3Own71%2FG%2B6N8LdwrD%2FK%2FVyC9Hpt%2Ba%2BG7heAsvEBTyE09p%2Ff%2FyHpUMWxGumsvuj6LXufBCpkqo8uxcghheB0hDzKh2Cn%2BY1rln2nKSQMRN9Gk7BCE2uj%2B8Be97NEzpvQ1wdBVtk1aHGMHTkNfPRXK0VJWC%2FtcPxQsgL77QivJmn8r5QNNcmAwzEpNdj%2FUt%2FrAyTvGp74vkhvnk9%2Fi9xnydg7fvtn6eP7yHSn1oEAe5Iz3%2FejxF5Okti0bfROQiVZTroAOrP7do4WVP41lgyD6jTNxdLMvaek7JoSR4Y169Ke5K5%2BT5khA3Sq9pMU2Jao7qkxkBKn2XqD%2FtP0dr0Ymi%2BGQg1RW6FVEaVmw%2FMQQGyfhkvbAYXyYEiyZ3TMuB9y7Dh6A5dPRfcysa1pZ57IC9I2Tupx7wD%2BPPJ41LEfHsarCYwhtAEstf791vXxuaOmg4WSDYs9qtKn2deGfWQOP2ZZSHZXfGMP6W2MEGOqUBrGoaLaTtsAzSX0G8E9jTmeUUyXNoM8sfi59jP4FqwismeOZ89sRcGnRhWkf8N5SnKZxXyO8BzoKaX3E2tfqk8E%2FMJ%2FoWlqPYLCqFDGXftjtMCku9Cd6UpudwlaurrGL2IRpllhH78AEVmRxHqF45YL1ls8KrS4UFS35%2BTthYBCcptbrv5H4qFkqaKJSi7Rn7LoSZAQqagWQ5IEIDTb22dRIclLIY&X-Amz-Signature=783c6c3f5a6e9c9b9605f1693ccd3411effd5d0ec4da25b0ae77caf2ed26c60c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOJ7FA3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaSENw0JX5uEq3E9gx0qg22pLn5ZE3EZ11NZDpsOmgLAiEAn%2Bl2vQeL4U0oRnPCYamhvfV%2BhCA5d1grVNqlMivti4sq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAmtEE5riZdlWHQn2SrcA1rOwcOVzJr2XFEFApi1Flcse990SxQvV9Kh8nfupd%2BSenTGGgwem9ESlBdblI7w6pCTre3XlVcwr8fd66HZpLkqRJLtnZx%2FfsRf3FRbNFb%2BO1uuKX18tYl3tcVLQQ01KpLHYhltMsqR1iytlLCSdOOL%2FEp4%2BIx3Own71%2FG%2B6N8LdwrD%2FK%2FVyC9Hpt%2Ba%2BG7heAsvEBTyE09p%2Ff%2FyHpUMWxGumsvuj6LXufBCpkqo8uxcghheB0hDzKh2Cn%2BY1rln2nKSQMRN9Gk7BCE2uj%2B8Be97NEzpvQ1wdBVtk1aHGMHTkNfPRXK0VJWC%2FtcPxQsgL77QivJmn8r5QNNcmAwzEpNdj%2FUt%2FrAyTvGp74vkhvnk9%2Fi9xnydg7fvtn6eP7yHSn1oEAe5Iz3%2FejxF5Okti0bfROQiVZTroAOrP7do4WVP41lgyD6jTNxdLMvaek7JoSR4Y169Ke5K5%2BT5khA3Sq9pMU2Jao7qkxkBKn2XqD%2FtP0dr0Ymi%2BGQg1RW6FVEaVmw%2FMQQGyfhkvbAYXyYEiyZ3TMuB9y7Dh6A5dPRfcysa1pZ57IC9I2Tupx7wD%2BPPJ41LEfHsarCYwhtAEstf791vXxuaOmg4WSDYs9qtKn2deGfWQOP2ZZSHZXfGMP6W2MEGOqUBrGoaLaTtsAzSX0G8E9jTmeUUyXNoM8sfi59jP4FqwismeOZ89sRcGnRhWkf8N5SnKZxXyO8BzoKaX3E2tfqk8E%2FMJ%2FoWlqPYLCqFDGXftjtMCku9Cd6UpudwlaurrGL2IRpllhH78AEVmRxHqF45YL1ls8KrS4UFS35%2BTthYBCcptbrv5H4qFkqaKJSi7Rn7LoSZAQqagWQ5IEIDTb22dRIclLIY&X-Amz-Signature=a0e712d257d96027e92ba2bba95c89611922d0f1e707034043b779026ec64efb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOJ7FA3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaSENw0JX5uEq3E9gx0qg22pLn5ZE3EZ11NZDpsOmgLAiEAn%2Bl2vQeL4U0oRnPCYamhvfV%2BhCA5d1grVNqlMivti4sq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAmtEE5riZdlWHQn2SrcA1rOwcOVzJr2XFEFApi1Flcse990SxQvV9Kh8nfupd%2BSenTGGgwem9ESlBdblI7w6pCTre3XlVcwr8fd66HZpLkqRJLtnZx%2FfsRf3FRbNFb%2BO1uuKX18tYl3tcVLQQ01KpLHYhltMsqR1iytlLCSdOOL%2FEp4%2BIx3Own71%2FG%2B6N8LdwrD%2FK%2FVyC9Hpt%2Ba%2BG7heAsvEBTyE09p%2Ff%2FyHpUMWxGumsvuj6LXufBCpkqo8uxcghheB0hDzKh2Cn%2BY1rln2nKSQMRN9Gk7BCE2uj%2B8Be97NEzpvQ1wdBVtk1aHGMHTkNfPRXK0VJWC%2FtcPxQsgL77QivJmn8r5QNNcmAwzEpNdj%2FUt%2FrAyTvGp74vkhvnk9%2Fi9xnydg7fvtn6eP7yHSn1oEAe5Iz3%2FejxF5Okti0bfROQiVZTroAOrP7do4WVP41lgyD6jTNxdLMvaek7JoSR4Y169Ke5K5%2BT5khA3Sq9pMU2Jao7qkxkBKn2XqD%2FtP0dr0Ymi%2BGQg1RW6FVEaVmw%2FMQQGyfhkvbAYXyYEiyZ3TMuB9y7Dh6A5dPRfcysa1pZ57IC9I2Tupx7wD%2BPPJ41LEfHsarCYwhtAEstf791vXxuaOmg4WSDYs9qtKn2deGfWQOP2ZZSHZXfGMP6W2MEGOqUBrGoaLaTtsAzSX0G8E9jTmeUUyXNoM8sfi59jP4FqwismeOZ89sRcGnRhWkf8N5SnKZxXyO8BzoKaX3E2tfqk8E%2FMJ%2FoWlqPYLCqFDGXftjtMCku9Cd6UpudwlaurrGL2IRpllhH78AEVmRxHqF45YL1ls8KrS4UFS35%2BTthYBCcptbrv5H4qFkqaKJSi7Rn7LoSZAQqagWQ5IEIDTb22dRIclLIY&X-Amz-Signature=1562547149066bf7ffc01b9d8719fb75fe9ce45277a5c77a08403a1a651da769&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOJ7FA3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaSENw0JX5uEq3E9gx0qg22pLn5ZE3EZ11NZDpsOmgLAiEAn%2Bl2vQeL4U0oRnPCYamhvfV%2BhCA5d1grVNqlMivti4sq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDAmtEE5riZdlWHQn2SrcA1rOwcOVzJr2XFEFApi1Flcse990SxQvV9Kh8nfupd%2BSenTGGgwem9ESlBdblI7w6pCTre3XlVcwr8fd66HZpLkqRJLtnZx%2FfsRf3FRbNFb%2BO1uuKX18tYl3tcVLQQ01KpLHYhltMsqR1iytlLCSdOOL%2FEp4%2BIx3Own71%2FG%2B6N8LdwrD%2FK%2FVyC9Hpt%2Ba%2BG7heAsvEBTyE09p%2Ff%2FyHpUMWxGumsvuj6LXufBCpkqo8uxcghheB0hDzKh2Cn%2BY1rln2nKSQMRN9Gk7BCE2uj%2B8Be97NEzpvQ1wdBVtk1aHGMHTkNfPRXK0VJWC%2FtcPxQsgL77QivJmn8r5QNNcmAwzEpNdj%2FUt%2FrAyTvGp74vkhvnk9%2Fi9xnydg7fvtn6eP7yHSn1oEAe5Iz3%2FejxF5Okti0bfROQiVZTroAOrP7do4WVP41lgyD6jTNxdLMvaek7JoSR4Y169Ke5K5%2BT5khA3Sq9pMU2Jao7qkxkBKn2XqD%2FtP0dr0Ymi%2BGQg1RW6FVEaVmw%2FMQQGyfhkvbAYXyYEiyZ3TMuB9y7Dh6A5dPRfcysa1pZ57IC9I2Tupx7wD%2BPPJ41LEfHsarCYwhtAEstf791vXxuaOmg4WSDYs9qtKn2deGfWQOP2ZZSHZXfGMP6W2MEGOqUBrGoaLaTtsAzSX0G8E9jTmeUUyXNoM8sfi59jP4FqwismeOZ89sRcGnRhWkf8N5SnKZxXyO8BzoKaX3E2tfqk8E%2FMJ%2FoWlqPYLCqFDGXftjtMCku9Cd6UpudwlaurrGL2IRpllhH78AEVmRxHqF45YL1ls8KrS4UFS35%2BTthYBCcptbrv5H4qFkqaKJSi7Rn7LoSZAQqagWQ5IEIDTb22dRIclLIY&X-Amz-Signature=80a1468ae52e2016cc3134d70678f307462b025941d0317c75ea50a6bb595ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
