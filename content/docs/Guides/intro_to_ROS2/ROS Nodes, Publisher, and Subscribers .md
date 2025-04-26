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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q664Q5J6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL2jNkan31h6HrheFVgUk%2BKmAqyL9%2FSYwayjAjoUu%2BCAiEAi0AiS8AXU%2B1MPVCPPTdAvdhfq2PndXdAo1Try2iF8hEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA4nXF3HjJ0uahHokSrcA6vCHsKQK%2Bm8%2BDIbtjqZGfGZNaUthYnAuKHNfqDU2VIONUonScQdanBM5an7%2FZrcQUQKn86E9wd7x%2F5GBs6KdjOZJRvGIOPBML4lQxNAhNe8jHp8ZSwbftna778WTG%2BV38sdQ2LobD7a1erEwhWnAlAy%2BNbglYFQ1E1j4PUBoEtOvBG2fVfEy%2B6nIokdcIwYt5uTmk%2BmmL2MYW8tTIFUz7Ci6tvJlMpspAYNg8kOXkmzfi65A%2FFjtlQbsoP8yZmrbGsn7Q94LosYstRavrIC22Ih1pn1s0FLCJi7JGZjJGD3n3z9m8ue%2BH4M5qDJjyOQMkK31S2z7X9I7bMt85HijP6lAUVE2JCK8Yu%2F0F0%2F73SyYThb8cWJGTmLrGmv4TTu6MKazu5NQsFrrzBlmSdygXBR7xcZZS7n%2FT2tRUvEjlgL439k0TPMST28plXluHxHbA7i7aQ%2B84%2FXAw6GEX5ifEmwXR70fL4turA1csnrafaOKTVxReLyMHcXEVTAdlvcbfQKNL1uCQlvx2rEA3rTJTx0S9LtHnxnoy1BHr8MlQLkVSuT%2BRIuWO1MLcmZQo0qYb9FdfI4UnWb%2B8oTJz%2BempILO9qByrNbi%2FRrOG1TPjPyEVajie4DVCXr9EUMMLm%2FtcAGOqUBkcVvkV%2F41q8EoXthCOBUB%2Fkd0RLLJ1kHytWie%2BasTL9vP6Wds7AQ71qA%2FHfEvUgxx9%2BoDQyBeTHjB7QPioPXL6UdWd3LCS6PO6WtgthjrurL%2Fo53tSrLfNXKgFhDxuO9icWKB8YRmdKz01VuKqb2i9%2FoK9avCTWPAl5n69wCwfm5UiF7%2B4R5wZq%2BCzDjHUiVBKroCP%2F%2FRwWkPl8XpZX0v1wcL4HG&X-Amz-Signature=d5aaaf9c978233f4954b3ea168d83f64f49acf32bc31ff67c9460353377f11a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q664Q5J6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL2jNkan31h6HrheFVgUk%2BKmAqyL9%2FSYwayjAjoUu%2BCAiEAi0AiS8AXU%2B1MPVCPPTdAvdhfq2PndXdAo1Try2iF8hEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA4nXF3HjJ0uahHokSrcA6vCHsKQK%2Bm8%2BDIbtjqZGfGZNaUthYnAuKHNfqDU2VIONUonScQdanBM5an7%2FZrcQUQKn86E9wd7x%2F5GBs6KdjOZJRvGIOPBML4lQxNAhNe8jHp8ZSwbftna778WTG%2BV38sdQ2LobD7a1erEwhWnAlAy%2BNbglYFQ1E1j4PUBoEtOvBG2fVfEy%2B6nIokdcIwYt5uTmk%2BmmL2MYW8tTIFUz7Ci6tvJlMpspAYNg8kOXkmzfi65A%2FFjtlQbsoP8yZmrbGsn7Q94LosYstRavrIC22Ih1pn1s0FLCJi7JGZjJGD3n3z9m8ue%2BH4M5qDJjyOQMkK31S2z7X9I7bMt85HijP6lAUVE2JCK8Yu%2F0F0%2F73SyYThb8cWJGTmLrGmv4TTu6MKazu5NQsFrrzBlmSdygXBR7xcZZS7n%2FT2tRUvEjlgL439k0TPMST28plXluHxHbA7i7aQ%2B84%2FXAw6GEX5ifEmwXR70fL4turA1csnrafaOKTVxReLyMHcXEVTAdlvcbfQKNL1uCQlvx2rEA3rTJTx0S9LtHnxnoy1BHr8MlQLkVSuT%2BRIuWO1MLcmZQo0qYb9FdfI4UnWb%2B8oTJz%2BempILO9qByrNbi%2FRrOG1TPjPyEVajie4DVCXr9EUMMLm%2FtcAGOqUBkcVvkV%2F41q8EoXthCOBUB%2Fkd0RLLJ1kHytWie%2BasTL9vP6Wds7AQ71qA%2FHfEvUgxx9%2BoDQyBeTHjB7QPioPXL6UdWd3LCS6PO6WtgthjrurL%2Fo53tSrLfNXKgFhDxuO9icWKB8YRmdKz01VuKqb2i9%2FoK9avCTWPAl5n69wCwfm5UiF7%2B4R5wZq%2BCzDjHUiVBKroCP%2F%2FRwWkPl8XpZX0v1wcL4HG&X-Amz-Signature=d56f25d2d292984cf67ad73e69797827868a86ba2d9a09a2a7e1f8b731b4a66d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q664Q5J6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL2jNkan31h6HrheFVgUk%2BKmAqyL9%2FSYwayjAjoUu%2BCAiEAi0AiS8AXU%2B1MPVCPPTdAvdhfq2PndXdAo1Try2iF8hEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA4nXF3HjJ0uahHokSrcA6vCHsKQK%2Bm8%2BDIbtjqZGfGZNaUthYnAuKHNfqDU2VIONUonScQdanBM5an7%2FZrcQUQKn86E9wd7x%2F5GBs6KdjOZJRvGIOPBML4lQxNAhNe8jHp8ZSwbftna778WTG%2BV38sdQ2LobD7a1erEwhWnAlAy%2BNbglYFQ1E1j4PUBoEtOvBG2fVfEy%2B6nIokdcIwYt5uTmk%2BmmL2MYW8tTIFUz7Ci6tvJlMpspAYNg8kOXkmzfi65A%2FFjtlQbsoP8yZmrbGsn7Q94LosYstRavrIC22Ih1pn1s0FLCJi7JGZjJGD3n3z9m8ue%2BH4M5qDJjyOQMkK31S2z7X9I7bMt85HijP6lAUVE2JCK8Yu%2F0F0%2F73SyYThb8cWJGTmLrGmv4TTu6MKazu5NQsFrrzBlmSdygXBR7xcZZS7n%2FT2tRUvEjlgL439k0TPMST28plXluHxHbA7i7aQ%2B84%2FXAw6GEX5ifEmwXR70fL4turA1csnrafaOKTVxReLyMHcXEVTAdlvcbfQKNL1uCQlvx2rEA3rTJTx0S9LtHnxnoy1BHr8MlQLkVSuT%2BRIuWO1MLcmZQo0qYb9FdfI4UnWb%2B8oTJz%2BempILO9qByrNbi%2FRrOG1TPjPyEVajie4DVCXr9EUMMLm%2FtcAGOqUBkcVvkV%2F41q8EoXthCOBUB%2Fkd0RLLJ1kHytWie%2BasTL9vP6Wds7AQ71qA%2FHfEvUgxx9%2BoDQyBeTHjB7QPioPXL6UdWd3LCS6PO6WtgthjrurL%2Fo53tSrLfNXKgFhDxuO9icWKB8YRmdKz01VuKqb2i9%2FoK9avCTWPAl5n69wCwfm5UiF7%2B4R5wZq%2BCzDjHUiVBKroCP%2F%2FRwWkPl8XpZX0v1wcL4HG&X-Amz-Signature=80b7a2fc056996052721c923be14493bfb9bd956af9e7d2ce1fc7958aa4fdf44&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q664Q5J6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL2jNkan31h6HrheFVgUk%2BKmAqyL9%2FSYwayjAjoUu%2BCAiEAi0AiS8AXU%2B1MPVCPPTdAvdhfq2PndXdAo1Try2iF8hEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA4nXF3HjJ0uahHokSrcA6vCHsKQK%2Bm8%2BDIbtjqZGfGZNaUthYnAuKHNfqDU2VIONUonScQdanBM5an7%2FZrcQUQKn86E9wd7x%2F5GBs6KdjOZJRvGIOPBML4lQxNAhNe8jHp8ZSwbftna778WTG%2BV38sdQ2LobD7a1erEwhWnAlAy%2BNbglYFQ1E1j4PUBoEtOvBG2fVfEy%2B6nIokdcIwYt5uTmk%2BmmL2MYW8tTIFUz7Ci6tvJlMpspAYNg8kOXkmzfi65A%2FFjtlQbsoP8yZmrbGsn7Q94LosYstRavrIC22Ih1pn1s0FLCJi7JGZjJGD3n3z9m8ue%2BH4M5qDJjyOQMkK31S2z7X9I7bMt85HijP6lAUVE2JCK8Yu%2F0F0%2F73SyYThb8cWJGTmLrGmv4TTu6MKazu5NQsFrrzBlmSdygXBR7xcZZS7n%2FT2tRUvEjlgL439k0TPMST28plXluHxHbA7i7aQ%2B84%2FXAw6GEX5ifEmwXR70fL4turA1csnrafaOKTVxReLyMHcXEVTAdlvcbfQKNL1uCQlvx2rEA3rTJTx0S9LtHnxnoy1BHr8MlQLkVSuT%2BRIuWO1MLcmZQo0qYb9FdfI4UnWb%2B8oTJz%2BempILO9qByrNbi%2FRrOG1TPjPyEVajie4DVCXr9EUMMLm%2FtcAGOqUBkcVvkV%2F41q8EoXthCOBUB%2Fkd0RLLJ1kHytWie%2BasTL9vP6Wds7AQ71qA%2FHfEvUgxx9%2BoDQyBeTHjB7QPioPXL6UdWd3LCS6PO6WtgthjrurL%2Fo53tSrLfNXKgFhDxuO9icWKB8YRmdKz01VuKqb2i9%2FoK9avCTWPAl5n69wCwfm5UiF7%2B4R5wZq%2BCzDjHUiVBKroCP%2F%2FRwWkPl8XpZX0v1wcL4HG&X-Amz-Signature=9099342aa42f7b382caa887328c96ac4232ff9ea52a14cc415b4a1ab938717ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q664Q5J6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL2jNkan31h6HrheFVgUk%2BKmAqyL9%2FSYwayjAjoUu%2BCAiEAi0AiS8AXU%2B1MPVCPPTdAvdhfq2PndXdAo1Try2iF8hEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA4nXF3HjJ0uahHokSrcA6vCHsKQK%2Bm8%2BDIbtjqZGfGZNaUthYnAuKHNfqDU2VIONUonScQdanBM5an7%2FZrcQUQKn86E9wd7x%2F5GBs6KdjOZJRvGIOPBML4lQxNAhNe8jHp8ZSwbftna778WTG%2BV38sdQ2LobD7a1erEwhWnAlAy%2BNbglYFQ1E1j4PUBoEtOvBG2fVfEy%2B6nIokdcIwYt5uTmk%2BmmL2MYW8tTIFUz7Ci6tvJlMpspAYNg8kOXkmzfi65A%2FFjtlQbsoP8yZmrbGsn7Q94LosYstRavrIC22Ih1pn1s0FLCJi7JGZjJGD3n3z9m8ue%2BH4M5qDJjyOQMkK31S2z7X9I7bMt85HijP6lAUVE2JCK8Yu%2F0F0%2F73SyYThb8cWJGTmLrGmv4TTu6MKazu5NQsFrrzBlmSdygXBR7xcZZS7n%2FT2tRUvEjlgL439k0TPMST28plXluHxHbA7i7aQ%2B84%2FXAw6GEX5ifEmwXR70fL4turA1csnrafaOKTVxReLyMHcXEVTAdlvcbfQKNL1uCQlvx2rEA3rTJTx0S9LtHnxnoy1BHr8MlQLkVSuT%2BRIuWO1MLcmZQo0qYb9FdfI4UnWb%2B8oTJz%2BempILO9qByrNbi%2FRrOG1TPjPyEVajie4DVCXr9EUMMLm%2FtcAGOqUBkcVvkV%2F41q8EoXthCOBUB%2Fkd0RLLJ1kHytWie%2BasTL9vP6Wds7AQ71qA%2FHfEvUgxx9%2BoDQyBeTHjB7QPioPXL6UdWd3LCS6PO6WtgthjrurL%2Fo53tSrLfNXKgFhDxuO9icWKB8YRmdKz01VuKqb2i9%2FoK9avCTWPAl5n69wCwfm5UiF7%2B4R5wZq%2BCzDjHUiVBKroCP%2F%2FRwWkPl8XpZX0v1wcL4HG&X-Amz-Signature=5e7e141e77c6442256cb7aad01516c5279d30a053ddd325287a83c25da9c29d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q664Q5J6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL2jNkan31h6HrheFVgUk%2BKmAqyL9%2FSYwayjAjoUu%2BCAiEAi0AiS8AXU%2B1MPVCPPTdAvdhfq2PndXdAo1Try2iF8hEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA4nXF3HjJ0uahHokSrcA6vCHsKQK%2Bm8%2BDIbtjqZGfGZNaUthYnAuKHNfqDU2VIONUonScQdanBM5an7%2FZrcQUQKn86E9wd7x%2F5GBs6KdjOZJRvGIOPBML4lQxNAhNe8jHp8ZSwbftna778WTG%2BV38sdQ2LobD7a1erEwhWnAlAy%2BNbglYFQ1E1j4PUBoEtOvBG2fVfEy%2B6nIokdcIwYt5uTmk%2BmmL2MYW8tTIFUz7Ci6tvJlMpspAYNg8kOXkmzfi65A%2FFjtlQbsoP8yZmrbGsn7Q94LosYstRavrIC22Ih1pn1s0FLCJi7JGZjJGD3n3z9m8ue%2BH4M5qDJjyOQMkK31S2z7X9I7bMt85HijP6lAUVE2JCK8Yu%2F0F0%2F73SyYThb8cWJGTmLrGmv4TTu6MKazu5NQsFrrzBlmSdygXBR7xcZZS7n%2FT2tRUvEjlgL439k0TPMST28plXluHxHbA7i7aQ%2B84%2FXAw6GEX5ifEmwXR70fL4turA1csnrafaOKTVxReLyMHcXEVTAdlvcbfQKNL1uCQlvx2rEA3rTJTx0S9LtHnxnoy1BHr8MlQLkVSuT%2BRIuWO1MLcmZQo0qYb9FdfI4UnWb%2B8oTJz%2BempILO9qByrNbi%2FRrOG1TPjPyEVajie4DVCXr9EUMMLm%2FtcAGOqUBkcVvkV%2F41q8EoXthCOBUB%2Fkd0RLLJ1kHytWie%2BasTL9vP6Wds7AQ71qA%2FHfEvUgxx9%2BoDQyBeTHjB7QPioPXL6UdWd3LCS6PO6WtgthjrurL%2Fo53tSrLfNXKgFhDxuO9icWKB8YRmdKz01VuKqb2i9%2FoK9avCTWPAl5n69wCwfm5UiF7%2B4R5wZq%2BCzDjHUiVBKroCP%2F%2FRwWkPl8XpZX0v1wcL4HG&X-Amz-Signature=0c58a92090c53d57cf9104aa6fae87cbdcda7f0ac6f5cac2cd25ad2290c07655&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q664Q5J6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL2jNkan31h6HrheFVgUk%2BKmAqyL9%2FSYwayjAjoUu%2BCAiEAi0AiS8AXU%2B1MPVCPPTdAvdhfq2PndXdAo1Try2iF8hEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA4nXF3HjJ0uahHokSrcA6vCHsKQK%2Bm8%2BDIbtjqZGfGZNaUthYnAuKHNfqDU2VIONUonScQdanBM5an7%2FZrcQUQKn86E9wd7x%2F5GBs6KdjOZJRvGIOPBML4lQxNAhNe8jHp8ZSwbftna778WTG%2BV38sdQ2LobD7a1erEwhWnAlAy%2BNbglYFQ1E1j4PUBoEtOvBG2fVfEy%2B6nIokdcIwYt5uTmk%2BmmL2MYW8tTIFUz7Ci6tvJlMpspAYNg8kOXkmzfi65A%2FFjtlQbsoP8yZmrbGsn7Q94LosYstRavrIC22Ih1pn1s0FLCJi7JGZjJGD3n3z9m8ue%2BH4M5qDJjyOQMkK31S2z7X9I7bMt85HijP6lAUVE2JCK8Yu%2F0F0%2F73SyYThb8cWJGTmLrGmv4TTu6MKazu5NQsFrrzBlmSdygXBR7xcZZS7n%2FT2tRUvEjlgL439k0TPMST28plXluHxHbA7i7aQ%2B84%2FXAw6GEX5ifEmwXR70fL4turA1csnrafaOKTVxReLyMHcXEVTAdlvcbfQKNL1uCQlvx2rEA3rTJTx0S9LtHnxnoy1BHr8MlQLkVSuT%2BRIuWO1MLcmZQo0qYb9FdfI4UnWb%2B8oTJz%2BempILO9qByrNbi%2FRrOG1TPjPyEVajie4DVCXr9EUMMLm%2FtcAGOqUBkcVvkV%2F41q8EoXthCOBUB%2Fkd0RLLJ1kHytWie%2BasTL9vP6Wds7AQ71qA%2FHfEvUgxx9%2BoDQyBeTHjB7QPioPXL6UdWd3LCS6PO6WtgthjrurL%2Fo53tSrLfNXKgFhDxuO9icWKB8YRmdKz01VuKqb2i9%2FoK9avCTWPAl5n69wCwfm5UiF7%2B4R5wZq%2BCzDjHUiVBKroCP%2F%2FRwWkPl8XpZX0v1wcL4HG&X-Amz-Signature=1794a8a802dcf35b7df22a6868a9e127a73cf6146491339bd661d613fd371cee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q664Q5J6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDL2jNkan31h6HrheFVgUk%2BKmAqyL9%2FSYwayjAjoUu%2BCAiEAi0AiS8AXU%2B1MPVCPPTdAvdhfq2PndXdAo1Try2iF8hEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA4nXF3HjJ0uahHokSrcA6vCHsKQK%2Bm8%2BDIbtjqZGfGZNaUthYnAuKHNfqDU2VIONUonScQdanBM5an7%2FZrcQUQKn86E9wd7x%2F5GBs6KdjOZJRvGIOPBML4lQxNAhNe8jHp8ZSwbftna778WTG%2BV38sdQ2LobD7a1erEwhWnAlAy%2BNbglYFQ1E1j4PUBoEtOvBG2fVfEy%2B6nIokdcIwYt5uTmk%2BmmL2MYW8tTIFUz7Ci6tvJlMpspAYNg8kOXkmzfi65A%2FFjtlQbsoP8yZmrbGsn7Q94LosYstRavrIC22Ih1pn1s0FLCJi7JGZjJGD3n3z9m8ue%2BH4M5qDJjyOQMkK31S2z7X9I7bMt85HijP6lAUVE2JCK8Yu%2F0F0%2F73SyYThb8cWJGTmLrGmv4TTu6MKazu5NQsFrrzBlmSdygXBR7xcZZS7n%2FT2tRUvEjlgL439k0TPMST28plXluHxHbA7i7aQ%2B84%2FXAw6GEX5ifEmwXR70fL4turA1csnrafaOKTVxReLyMHcXEVTAdlvcbfQKNL1uCQlvx2rEA3rTJTx0S9LtHnxnoy1BHr8MlQLkVSuT%2BRIuWO1MLcmZQo0qYb9FdfI4UnWb%2B8oTJz%2BempILO9qByrNbi%2FRrOG1TPjPyEVajie4DVCXr9EUMMLm%2FtcAGOqUBkcVvkV%2F41q8EoXthCOBUB%2Fkd0RLLJ1kHytWie%2BasTL9vP6Wds7AQ71qA%2FHfEvUgxx9%2BoDQyBeTHjB7QPioPXL6UdWd3LCS6PO6WtgthjrurL%2Fo53tSrLfNXKgFhDxuO9icWKB8YRmdKz01VuKqb2i9%2FoK9avCTWPAl5n69wCwfm5UiF7%2B4R5wZq%2BCzDjHUiVBKroCP%2F%2FRwWkPl8XpZX0v1wcL4HG&X-Amz-Signature=171d0573e37e6e923d86084bf12e73f8264dfed458468a1747f4c7aa48d15f12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
