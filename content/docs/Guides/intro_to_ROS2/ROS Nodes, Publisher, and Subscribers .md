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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLOEROS%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDluW7T48e87byCACLuM8y16%2BUmD54r%2FLOiDDvPRUEk5AIgXjH3vVNWa11czNQzTr8clgAE%2BkoAaoG%2FQonUj%2BMOaR4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6YDkA2FbwOz75qvyrcA0O8Qb8Tmd3ugKvDeOYat6tN5vkUOHA8OAytZd7IwLs1ZZiO8scjmZ0L5QACDMCOK18kxHBuQJHPHRwjaVDR%2FCJHtmCiuYqwkR4sraAwrcFir6FvS5GPO0IkFGbSqVVWrLgrjLzKGpocB3h89P7UN1DNmqQ72GZ7Nxpu3RX5636L7r1%2FEtZCTLPj0E%2FNG8mBD34tTKqCJok928f65wmtG7Oqj5wFjB1jN6ClPsHPFAW3wLLpV9Pi0wDZ1QeOSIrWx12NFAOoczpeRd%2BCC3GmNU3EF2GZQUdddStT%2FIwXpEqwWJvrwi1DGpSBoM%2FrvZhLD8iOj49PBq45sdPQXIY%2BCs5%2FEmAQsujT8D58DQMVZJMIS26OiiVueK%2FGLKC6JAxYftDle5y4%2F6FZUNalS5qw7EWt3o43pd9AD2uGA7XOrzA9Xt0KBWN4hXxiWdJJJDExxi9Vjw8vb6MnBwt9iiVWicPMM2%2FYEiIp2U8ZjZH7l9F6LAsoTGd7N%2F1zaHEzcGemN3y8trb117%2BqWTYfAqv4HPAxZVBJ%2BP6vg87fvWagbXlnrOEF6Z5CGspfiQsV7ZDTEkACXmL67NDed66OKV784XCMuaPG%2BFwgVXOzYAVd59Hx4mlyP68w03sCxlpeMKGiw8EGOqUBQ6%2BQS3Fyatrs5J7Rj%2BUeCZ9L8t3UNMV7DQhfDzqU3uslhwxLCW4F7cmJepyPB8usH%2Fl3CxdZaxtN923n%2BKuXzNpiB1l6Kt%2FMzngF%2FZ%2BG7csG%2FlD1gvjAgfwyQ%2BD9WrBa0wVWpoXwr3Q1yD5pEOT%2BcGX3KbxEKqXbr0zs0Bnw78Vl3ewE%2FFGUWj2F%2FscJeIvJe3ZohBIuEXuhYbNJ2rNqGCHCJ1MY&X-Amz-Signature=a3a1bf6890e39ca15413688e388d05f14167a2b69ff683b8bb10d60c912d2f70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLOEROS%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDluW7T48e87byCACLuM8y16%2BUmD54r%2FLOiDDvPRUEk5AIgXjH3vVNWa11czNQzTr8clgAE%2BkoAaoG%2FQonUj%2BMOaR4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6YDkA2FbwOz75qvyrcA0O8Qb8Tmd3ugKvDeOYat6tN5vkUOHA8OAytZd7IwLs1ZZiO8scjmZ0L5QACDMCOK18kxHBuQJHPHRwjaVDR%2FCJHtmCiuYqwkR4sraAwrcFir6FvS5GPO0IkFGbSqVVWrLgrjLzKGpocB3h89P7UN1DNmqQ72GZ7Nxpu3RX5636L7r1%2FEtZCTLPj0E%2FNG8mBD34tTKqCJok928f65wmtG7Oqj5wFjB1jN6ClPsHPFAW3wLLpV9Pi0wDZ1QeOSIrWx12NFAOoczpeRd%2BCC3GmNU3EF2GZQUdddStT%2FIwXpEqwWJvrwi1DGpSBoM%2FrvZhLD8iOj49PBq45sdPQXIY%2BCs5%2FEmAQsujT8D58DQMVZJMIS26OiiVueK%2FGLKC6JAxYftDle5y4%2F6FZUNalS5qw7EWt3o43pd9AD2uGA7XOrzA9Xt0KBWN4hXxiWdJJJDExxi9Vjw8vb6MnBwt9iiVWicPMM2%2FYEiIp2U8ZjZH7l9F6LAsoTGd7N%2F1zaHEzcGemN3y8trb117%2BqWTYfAqv4HPAxZVBJ%2BP6vg87fvWagbXlnrOEF6Z5CGspfiQsV7ZDTEkACXmL67NDed66OKV784XCMuaPG%2BFwgVXOzYAVd59Hx4mlyP68w03sCxlpeMKGiw8EGOqUBQ6%2BQS3Fyatrs5J7Rj%2BUeCZ9L8t3UNMV7DQhfDzqU3uslhwxLCW4F7cmJepyPB8usH%2Fl3CxdZaxtN923n%2BKuXzNpiB1l6Kt%2FMzngF%2FZ%2BG7csG%2FlD1gvjAgfwyQ%2BD9WrBa0wVWpoXwr3Q1yD5pEOT%2BcGX3KbxEKqXbr0zs0Bnw78Vl3ewE%2FFGUWj2F%2FscJeIvJe3ZohBIuEXuhYbNJ2rNqGCHCJ1MY&X-Amz-Signature=1136a85510a2284e0251a2bf4caa0ec5b536d649bc0050d8228d4bb43872dc31&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLOEROS%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDluW7T48e87byCACLuM8y16%2BUmD54r%2FLOiDDvPRUEk5AIgXjH3vVNWa11czNQzTr8clgAE%2BkoAaoG%2FQonUj%2BMOaR4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6YDkA2FbwOz75qvyrcA0O8Qb8Tmd3ugKvDeOYat6tN5vkUOHA8OAytZd7IwLs1ZZiO8scjmZ0L5QACDMCOK18kxHBuQJHPHRwjaVDR%2FCJHtmCiuYqwkR4sraAwrcFir6FvS5GPO0IkFGbSqVVWrLgrjLzKGpocB3h89P7UN1DNmqQ72GZ7Nxpu3RX5636L7r1%2FEtZCTLPj0E%2FNG8mBD34tTKqCJok928f65wmtG7Oqj5wFjB1jN6ClPsHPFAW3wLLpV9Pi0wDZ1QeOSIrWx12NFAOoczpeRd%2BCC3GmNU3EF2GZQUdddStT%2FIwXpEqwWJvrwi1DGpSBoM%2FrvZhLD8iOj49PBq45sdPQXIY%2BCs5%2FEmAQsujT8D58DQMVZJMIS26OiiVueK%2FGLKC6JAxYftDle5y4%2F6FZUNalS5qw7EWt3o43pd9AD2uGA7XOrzA9Xt0KBWN4hXxiWdJJJDExxi9Vjw8vb6MnBwt9iiVWicPMM2%2FYEiIp2U8ZjZH7l9F6LAsoTGd7N%2F1zaHEzcGemN3y8trb117%2BqWTYfAqv4HPAxZVBJ%2BP6vg87fvWagbXlnrOEF6Z5CGspfiQsV7ZDTEkACXmL67NDed66OKV784XCMuaPG%2BFwgVXOzYAVd59Hx4mlyP68w03sCxlpeMKGiw8EGOqUBQ6%2BQS3Fyatrs5J7Rj%2BUeCZ9L8t3UNMV7DQhfDzqU3uslhwxLCW4F7cmJepyPB8usH%2Fl3CxdZaxtN923n%2BKuXzNpiB1l6Kt%2FMzngF%2FZ%2BG7csG%2FlD1gvjAgfwyQ%2BD9WrBa0wVWpoXwr3Q1yD5pEOT%2BcGX3KbxEKqXbr0zs0Bnw78Vl3ewE%2FFGUWj2F%2FscJeIvJe3ZohBIuEXuhYbNJ2rNqGCHCJ1MY&X-Amz-Signature=92c173f957b1ade2a187b778e93bc0f61c4c4ecf401f0ab4c5bfc61f0837b342&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLOEROS%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDluW7T48e87byCACLuM8y16%2BUmD54r%2FLOiDDvPRUEk5AIgXjH3vVNWa11czNQzTr8clgAE%2BkoAaoG%2FQonUj%2BMOaR4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6YDkA2FbwOz75qvyrcA0O8Qb8Tmd3ugKvDeOYat6tN5vkUOHA8OAytZd7IwLs1ZZiO8scjmZ0L5QACDMCOK18kxHBuQJHPHRwjaVDR%2FCJHtmCiuYqwkR4sraAwrcFir6FvS5GPO0IkFGbSqVVWrLgrjLzKGpocB3h89P7UN1DNmqQ72GZ7Nxpu3RX5636L7r1%2FEtZCTLPj0E%2FNG8mBD34tTKqCJok928f65wmtG7Oqj5wFjB1jN6ClPsHPFAW3wLLpV9Pi0wDZ1QeOSIrWx12NFAOoczpeRd%2BCC3GmNU3EF2GZQUdddStT%2FIwXpEqwWJvrwi1DGpSBoM%2FrvZhLD8iOj49PBq45sdPQXIY%2BCs5%2FEmAQsujT8D58DQMVZJMIS26OiiVueK%2FGLKC6JAxYftDle5y4%2F6FZUNalS5qw7EWt3o43pd9AD2uGA7XOrzA9Xt0KBWN4hXxiWdJJJDExxi9Vjw8vb6MnBwt9iiVWicPMM2%2FYEiIp2U8ZjZH7l9F6LAsoTGd7N%2F1zaHEzcGemN3y8trb117%2BqWTYfAqv4HPAxZVBJ%2BP6vg87fvWagbXlnrOEF6Z5CGspfiQsV7ZDTEkACXmL67NDed66OKV784XCMuaPG%2BFwgVXOzYAVd59Hx4mlyP68w03sCxlpeMKGiw8EGOqUBQ6%2BQS3Fyatrs5J7Rj%2BUeCZ9L8t3UNMV7DQhfDzqU3uslhwxLCW4F7cmJepyPB8usH%2Fl3CxdZaxtN923n%2BKuXzNpiB1l6Kt%2FMzngF%2FZ%2BG7csG%2FlD1gvjAgfwyQ%2BD9WrBa0wVWpoXwr3Q1yD5pEOT%2BcGX3KbxEKqXbr0zs0Bnw78Vl3ewE%2FFGUWj2F%2FscJeIvJe3ZohBIuEXuhYbNJ2rNqGCHCJ1MY&X-Amz-Signature=2f3145c74897a1cf0bd100b31f0db3419366724bd7a60ffe3107990b89af40cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLOEROS%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDluW7T48e87byCACLuM8y16%2BUmD54r%2FLOiDDvPRUEk5AIgXjH3vVNWa11czNQzTr8clgAE%2BkoAaoG%2FQonUj%2BMOaR4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6YDkA2FbwOz75qvyrcA0O8Qb8Tmd3ugKvDeOYat6tN5vkUOHA8OAytZd7IwLs1ZZiO8scjmZ0L5QACDMCOK18kxHBuQJHPHRwjaVDR%2FCJHtmCiuYqwkR4sraAwrcFir6FvS5GPO0IkFGbSqVVWrLgrjLzKGpocB3h89P7UN1DNmqQ72GZ7Nxpu3RX5636L7r1%2FEtZCTLPj0E%2FNG8mBD34tTKqCJok928f65wmtG7Oqj5wFjB1jN6ClPsHPFAW3wLLpV9Pi0wDZ1QeOSIrWx12NFAOoczpeRd%2BCC3GmNU3EF2GZQUdddStT%2FIwXpEqwWJvrwi1DGpSBoM%2FrvZhLD8iOj49PBq45sdPQXIY%2BCs5%2FEmAQsujT8D58DQMVZJMIS26OiiVueK%2FGLKC6JAxYftDle5y4%2F6FZUNalS5qw7EWt3o43pd9AD2uGA7XOrzA9Xt0KBWN4hXxiWdJJJDExxi9Vjw8vb6MnBwt9iiVWicPMM2%2FYEiIp2U8ZjZH7l9F6LAsoTGd7N%2F1zaHEzcGemN3y8trb117%2BqWTYfAqv4HPAxZVBJ%2BP6vg87fvWagbXlnrOEF6Z5CGspfiQsV7ZDTEkACXmL67NDed66OKV784XCMuaPG%2BFwgVXOzYAVd59Hx4mlyP68w03sCxlpeMKGiw8EGOqUBQ6%2BQS3Fyatrs5J7Rj%2BUeCZ9L8t3UNMV7DQhfDzqU3uslhwxLCW4F7cmJepyPB8usH%2Fl3CxdZaxtN923n%2BKuXzNpiB1l6Kt%2FMzngF%2FZ%2BG7csG%2FlD1gvjAgfwyQ%2BD9WrBa0wVWpoXwr3Q1yD5pEOT%2BcGX3KbxEKqXbr0zs0Bnw78Vl3ewE%2FFGUWj2F%2FscJeIvJe3ZohBIuEXuhYbNJ2rNqGCHCJ1MY&X-Amz-Signature=0977f6129544ebd3dcf62caa574d260adbfb859971ef38cdaeaf11ebee03ab53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLOEROS%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDluW7T48e87byCACLuM8y16%2BUmD54r%2FLOiDDvPRUEk5AIgXjH3vVNWa11czNQzTr8clgAE%2BkoAaoG%2FQonUj%2BMOaR4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6YDkA2FbwOz75qvyrcA0O8Qb8Tmd3ugKvDeOYat6tN5vkUOHA8OAytZd7IwLs1ZZiO8scjmZ0L5QACDMCOK18kxHBuQJHPHRwjaVDR%2FCJHtmCiuYqwkR4sraAwrcFir6FvS5GPO0IkFGbSqVVWrLgrjLzKGpocB3h89P7UN1DNmqQ72GZ7Nxpu3RX5636L7r1%2FEtZCTLPj0E%2FNG8mBD34tTKqCJok928f65wmtG7Oqj5wFjB1jN6ClPsHPFAW3wLLpV9Pi0wDZ1QeOSIrWx12NFAOoczpeRd%2BCC3GmNU3EF2GZQUdddStT%2FIwXpEqwWJvrwi1DGpSBoM%2FrvZhLD8iOj49PBq45sdPQXIY%2BCs5%2FEmAQsujT8D58DQMVZJMIS26OiiVueK%2FGLKC6JAxYftDle5y4%2F6FZUNalS5qw7EWt3o43pd9AD2uGA7XOrzA9Xt0KBWN4hXxiWdJJJDExxi9Vjw8vb6MnBwt9iiVWicPMM2%2FYEiIp2U8ZjZH7l9F6LAsoTGd7N%2F1zaHEzcGemN3y8trb117%2BqWTYfAqv4HPAxZVBJ%2BP6vg87fvWagbXlnrOEF6Z5CGspfiQsV7ZDTEkACXmL67NDed66OKV784XCMuaPG%2BFwgVXOzYAVd59Hx4mlyP68w03sCxlpeMKGiw8EGOqUBQ6%2BQS3Fyatrs5J7Rj%2BUeCZ9L8t3UNMV7DQhfDzqU3uslhwxLCW4F7cmJepyPB8usH%2Fl3CxdZaxtN923n%2BKuXzNpiB1l6Kt%2FMzngF%2FZ%2BG7csG%2FlD1gvjAgfwyQ%2BD9WrBa0wVWpoXwr3Q1yD5pEOT%2BcGX3KbxEKqXbr0zs0Bnw78Vl3ewE%2FFGUWj2F%2FscJeIvJe3ZohBIuEXuhYbNJ2rNqGCHCJ1MY&X-Amz-Signature=6737e9b73dc04fe0c2f81630f2280b7aee6cb32962ede02f32602d9c01ada00f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLOEROS%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDluW7T48e87byCACLuM8y16%2BUmD54r%2FLOiDDvPRUEk5AIgXjH3vVNWa11czNQzTr8clgAE%2BkoAaoG%2FQonUj%2BMOaR4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6YDkA2FbwOz75qvyrcA0O8Qb8Tmd3ugKvDeOYat6tN5vkUOHA8OAytZd7IwLs1ZZiO8scjmZ0L5QACDMCOK18kxHBuQJHPHRwjaVDR%2FCJHtmCiuYqwkR4sraAwrcFir6FvS5GPO0IkFGbSqVVWrLgrjLzKGpocB3h89P7UN1DNmqQ72GZ7Nxpu3RX5636L7r1%2FEtZCTLPj0E%2FNG8mBD34tTKqCJok928f65wmtG7Oqj5wFjB1jN6ClPsHPFAW3wLLpV9Pi0wDZ1QeOSIrWx12NFAOoczpeRd%2BCC3GmNU3EF2GZQUdddStT%2FIwXpEqwWJvrwi1DGpSBoM%2FrvZhLD8iOj49PBq45sdPQXIY%2BCs5%2FEmAQsujT8D58DQMVZJMIS26OiiVueK%2FGLKC6JAxYftDle5y4%2F6FZUNalS5qw7EWt3o43pd9AD2uGA7XOrzA9Xt0KBWN4hXxiWdJJJDExxi9Vjw8vb6MnBwt9iiVWicPMM2%2FYEiIp2U8ZjZH7l9F6LAsoTGd7N%2F1zaHEzcGemN3y8trb117%2BqWTYfAqv4HPAxZVBJ%2BP6vg87fvWagbXlnrOEF6Z5CGspfiQsV7ZDTEkACXmL67NDed66OKV784XCMuaPG%2BFwgVXOzYAVd59Hx4mlyP68w03sCxlpeMKGiw8EGOqUBQ6%2BQS3Fyatrs5J7Rj%2BUeCZ9L8t3UNMV7DQhfDzqU3uslhwxLCW4F7cmJepyPB8usH%2Fl3CxdZaxtN923n%2BKuXzNpiB1l6Kt%2FMzngF%2FZ%2BG7csG%2FlD1gvjAgfwyQ%2BD9WrBa0wVWpoXwr3Q1yD5pEOT%2BcGX3KbxEKqXbr0zs0Bnw78Vl3ewE%2FFGUWj2F%2FscJeIvJe3ZohBIuEXuhYbNJ2rNqGCHCJ1MY&X-Amz-Signature=99d3d134306af5ba00133f2b18a813716c35516879787435a7b6fe2180031e36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLOEROS%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDluW7T48e87byCACLuM8y16%2BUmD54r%2FLOiDDvPRUEk5AIgXjH3vVNWa11czNQzTr8clgAE%2BkoAaoG%2FQonUj%2BMOaR4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6YDkA2FbwOz75qvyrcA0O8Qb8Tmd3ugKvDeOYat6tN5vkUOHA8OAytZd7IwLs1ZZiO8scjmZ0L5QACDMCOK18kxHBuQJHPHRwjaVDR%2FCJHtmCiuYqwkR4sraAwrcFir6FvS5GPO0IkFGbSqVVWrLgrjLzKGpocB3h89P7UN1DNmqQ72GZ7Nxpu3RX5636L7r1%2FEtZCTLPj0E%2FNG8mBD34tTKqCJok928f65wmtG7Oqj5wFjB1jN6ClPsHPFAW3wLLpV9Pi0wDZ1QeOSIrWx12NFAOoczpeRd%2BCC3GmNU3EF2GZQUdddStT%2FIwXpEqwWJvrwi1DGpSBoM%2FrvZhLD8iOj49PBq45sdPQXIY%2BCs5%2FEmAQsujT8D58DQMVZJMIS26OiiVueK%2FGLKC6JAxYftDle5y4%2F6FZUNalS5qw7EWt3o43pd9AD2uGA7XOrzA9Xt0KBWN4hXxiWdJJJDExxi9Vjw8vb6MnBwt9iiVWicPMM2%2FYEiIp2U8ZjZH7l9F6LAsoTGd7N%2F1zaHEzcGemN3y8trb117%2BqWTYfAqv4HPAxZVBJ%2BP6vg87fvWagbXlnrOEF6Z5CGspfiQsV7ZDTEkACXmL67NDed66OKV784XCMuaPG%2BFwgVXOzYAVd59Hx4mlyP68w03sCxlpeMKGiw8EGOqUBQ6%2BQS3Fyatrs5J7Rj%2BUeCZ9L8t3UNMV7DQhfDzqU3uslhwxLCW4F7cmJepyPB8usH%2Fl3CxdZaxtN923n%2BKuXzNpiB1l6Kt%2FMzngF%2FZ%2BG7csG%2FlD1gvjAgfwyQ%2BD9WrBa0wVWpoXwr3Q1yD5pEOT%2BcGX3KbxEKqXbr0zs0Bnw78Vl3ewE%2FFGUWj2F%2FscJeIvJe3ZohBIuEXuhYbNJ2rNqGCHCJ1MY&X-Amz-Signature=8cee9a60ed5e0634453a09a94417513ff893aa1701c1f2938b8972fae93de731&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
