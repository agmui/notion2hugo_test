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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLNJRRG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlITPBI6%2BZBHu%2FUOSleyr1YTpkKHxr7U7aFfo1WPuXvAiEA%2Fcf%2FkThB%2FRGytkw%2FHRkgo8Ft4VHComJJDp492H2cOXwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCscOKkzG3YlletpvircA5oUCpzcuoDZOlfUePgNKOarP0sSEH1PiWC9EPEEU6RZuCx61dBk2Qs08LP%2BsOhYRgUzf4d2703b407YKIk8uijrTRKhiNxt%2FeWi4McvBihXc1abijFNJO9TZe%2BG8lBKAcBFQacjGpISsxzwdXv66AqlclwhbaL%2BdtVlukjGCzZRAj55FTPaJmQYl0IIniTWUNXneNevWIhG1oknilWh2kgSU%2FE%2BpCylPR7111oANg1Jnheq2sp%2FMQkwxej8p6oCtyCD77%2Byb%2Bfz8fzrMDj0pU8LgoNHUdBN%2FNXGCTlsn6Jw1CikSbzXioRDApF2r4uAdgfk36HI%2FytBvT3MveDbJ6FWXYgc4Tpj6iZlJVtdFlwFHCpKJbw9q6Q7M3iPvglVb7KzEaDkz0U%2F98xA6a06vMdefvjtx8qU7o5PQeDgApixVTuzcS0tJPBWUPmLxrVhKqdRgW0R7B5BXYxazdcE30lZEABUr4MqoQcJnc%2BLwMOwzX2ko20zK02UFsK4QNtm9MlPCDuRoGJV8hFhVNcDZdYmWUvVB91okZ165A2xCpiJeSv9LtMTg3bpvio9KOXRr0nUn8%2BdsfF%2FKKH4YPFvfyMgLXeMR5xT%2FTJlGUhsQC17q%2BvxurZur8C29LemMIrGgcAGOqUB%2FG44hw3Kp2BbUGtz3FzxsFWnT4H47074uXJ3Jq8Fbe8VJMIZlJcBbWq4d4duShfpUgKyGcqgjXuW2rEWyEvJe%2Bwn4De1pMjhfXIqPHjIJ6fgkPmdAKA911hY6aE4VpWpw2Lrj9Vc0OOVC2%2BlJqcIbsPA4KAm1cw0ufjGwiqV4THxPXr00COCvfWLVImvgYN4VM8xuttYkQEJhI0g3wYs6JbPG6Hv&X-Amz-Signature=0070f53d69d6b1ab191c56f3818aef5fff671f8a95a174fd0fa038b8b818a37d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLNJRRG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlITPBI6%2BZBHu%2FUOSleyr1YTpkKHxr7U7aFfo1WPuXvAiEA%2Fcf%2FkThB%2FRGytkw%2FHRkgo8Ft4VHComJJDp492H2cOXwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCscOKkzG3YlletpvircA5oUCpzcuoDZOlfUePgNKOarP0sSEH1PiWC9EPEEU6RZuCx61dBk2Qs08LP%2BsOhYRgUzf4d2703b407YKIk8uijrTRKhiNxt%2FeWi4McvBihXc1abijFNJO9TZe%2BG8lBKAcBFQacjGpISsxzwdXv66AqlclwhbaL%2BdtVlukjGCzZRAj55FTPaJmQYl0IIniTWUNXneNevWIhG1oknilWh2kgSU%2FE%2BpCylPR7111oANg1Jnheq2sp%2FMQkwxej8p6oCtyCD77%2Byb%2Bfz8fzrMDj0pU8LgoNHUdBN%2FNXGCTlsn6Jw1CikSbzXioRDApF2r4uAdgfk36HI%2FytBvT3MveDbJ6FWXYgc4Tpj6iZlJVtdFlwFHCpKJbw9q6Q7M3iPvglVb7KzEaDkz0U%2F98xA6a06vMdefvjtx8qU7o5PQeDgApixVTuzcS0tJPBWUPmLxrVhKqdRgW0R7B5BXYxazdcE30lZEABUr4MqoQcJnc%2BLwMOwzX2ko20zK02UFsK4QNtm9MlPCDuRoGJV8hFhVNcDZdYmWUvVB91okZ165A2xCpiJeSv9LtMTg3bpvio9KOXRr0nUn8%2BdsfF%2FKKH4YPFvfyMgLXeMR5xT%2FTJlGUhsQC17q%2BvxurZur8C29LemMIrGgcAGOqUB%2FG44hw3Kp2BbUGtz3FzxsFWnT4H47074uXJ3Jq8Fbe8VJMIZlJcBbWq4d4duShfpUgKyGcqgjXuW2rEWyEvJe%2Bwn4De1pMjhfXIqPHjIJ6fgkPmdAKA911hY6aE4VpWpw2Lrj9Vc0OOVC2%2BlJqcIbsPA4KAm1cw0ufjGwiqV4THxPXr00COCvfWLVImvgYN4VM8xuttYkQEJhI0g3wYs6JbPG6Hv&X-Amz-Signature=432a03d14fd097bbad815fb5424afff2e40db860ff509d1dc844beebd9f2927d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLNJRRG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlITPBI6%2BZBHu%2FUOSleyr1YTpkKHxr7U7aFfo1WPuXvAiEA%2Fcf%2FkThB%2FRGytkw%2FHRkgo8Ft4VHComJJDp492H2cOXwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCscOKkzG3YlletpvircA5oUCpzcuoDZOlfUePgNKOarP0sSEH1PiWC9EPEEU6RZuCx61dBk2Qs08LP%2BsOhYRgUzf4d2703b407YKIk8uijrTRKhiNxt%2FeWi4McvBihXc1abijFNJO9TZe%2BG8lBKAcBFQacjGpISsxzwdXv66AqlclwhbaL%2BdtVlukjGCzZRAj55FTPaJmQYl0IIniTWUNXneNevWIhG1oknilWh2kgSU%2FE%2BpCylPR7111oANg1Jnheq2sp%2FMQkwxej8p6oCtyCD77%2Byb%2Bfz8fzrMDj0pU8LgoNHUdBN%2FNXGCTlsn6Jw1CikSbzXioRDApF2r4uAdgfk36HI%2FytBvT3MveDbJ6FWXYgc4Tpj6iZlJVtdFlwFHCpKJbw9q6Q7M3iPvglVb7KzEaDkz0U%2F98xA6a06vMdefvjtx8qU7o5PQeDgApixVTuzcS0tJPBWUPmLxrVhKqdRgW0R7B5BXYxazdcE30lZEABUr4MqoQcJnc%2BLwMOwzX2ko20zK02UFsK4QNtm9MlPCDuRoGJV8hFhVNcDZdYmWUvVB91okZ165A2xCpiJeSv9LtMTg3bpvio9KOXRr0nUn8%2BdsfF%2FKKH4YPFvfyMgLXeMR5xT%2FTJlGUhsQC17q%2BvxurZur8C29LemMIrGgcAGOqUB%2FG44hw3Kp2BbUGtz3FzxsFWnT4H47074uXJ3Jq8Fbe8VJMIZlJcBbWq4d4duShfpUgKyGcqgjXuW2rEWyEvJe%2Bwn4De1pMjhfXIqPHjIJ6fgkPmdAKA911hY6aE4VpWpw2Lrj9Vc0OOVC2%2BlJqcIbsPA4KAm1cw0ufjGwiqV4THxPXr00COCvfWLVImvgYN4VM8xuttYkQEJhI0g3wYs6JbPG6Hv&X-Amz-Signature=8b973d2afa8d1323e2c614ac700cc7859f854bb203e466338e2542469565cbe3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLNJRRG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlITPBI6%2BZBHu%2FUOSleyr1YTpkKHxr7U7aFfo1WPuXvAiEA%2Fcf%2FkThB%2FRGytkw%2FHRkgo8Ft4VHComJJDp492H2cOXwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCscOKkzG3YlletpvircA5oUCpzcuoDZOlfUePgNKOarP0sSEH1PiWC9EPEEU6RZuCx61dBk2Qs08LP%2BsOhYRgUzf4d2703b407YKIk8uijrTRKhiNxt%2FeWi4McvBihXc1abijFNJO9TZe%2BG8lBKAcBFQacjGpISsxzwdXv66AqlclwhbaL%2BdtVlukjGCzZRAj55FTPaJmQYl0IIniTWUNXneNevWIhG1oknilWh2kgSU%2FE%2BpCylPR7111oANg1Jnheq2sp%2FMQkwxej8p6oCtyCD77%2Byb%2Bfz8fzrMDj0pU8LgoNHUdBN%2FNXGCTlsn6Jw1CikSbzXioRDApF2r4uAdgfk36HI%2FytBvT3MveDbJ6FWXYgc4Tpj6iZlJVtdFlwFHCpKJbw9q6Q7M3iPvglVb7KzEaDkz0U%2F98xA6a06vMdefvjtx8qU7o5PQeDgApixVTuzcS0tJPBWUPmLxrVhKqdRgW0R7B5BXYxazdcE30lZEABUr4MqoQcJnc%2BLwMOwzX2ko20zK02UFsK4QNtm9MlPCDuRoGJV8hFhVNcDZdYmWUvVB91okZ165A2xCpiJeSv9LtMTg3bpvio9KOXRr0nUn8%2BdsfF%2FKKH4YPFvfyMgLXeMR5xT%2FTJlGUhsQC17q%2BvxurZur8C29LemMIrGgcAGOqUB%2FG44hw3Kp2BbUGtz3FzxsFWnT4H47074uXJ3Jq8Fbe8VJMIZlJcBbWq4d4duShfpUgKyGcqgjXuW2rEWyEvJe%2Bwn4De1pMjhfXIqPHjIJ6fgkPmdAKA911hY6aE4VpWpw2Lrj9Vc0OOVC2%2BlJqcIbsPA4KAm1cw0ufjGwiqV4THxPXr00COCvfWLVImvgYN4VM8xuttYkQEJhI0g3wYs6JbPG6Hv&X-Amz-Signature=798cc70dd90e8e6c532459f73329de685fd113edee7514c6cec2c41288c75ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLNJRRG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlITPBI6%2BZBHu%2FUOSleyr1YTpkKHxr7U7aFfo1WPuXvAiEA%2Fcf%2FkThB%2FRGytkw%2FHRkgo8Ft4VHComJJDp492H2cOXwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCscOKkzG3YlletpvircA5oUCpzcuoDZOlfUePgNKOarP0sSEH1PiWC9EPEEU6RZuCx61dBk2Qs08LP%2BsOhYRgUzf4d2703b407YKIk8uijrTRKhiNxt%2FeWi4McvBihXc1abijFNJO9TZe%2BG8lBKAcBFQacjGpISsxzwdXv66AqlclwhbaL%2BdtVlukjGCzZRAj55FTPaJmQYl0IIniTWUNXneNevWIhG1oknilWh2kgSU%2FE%2BpCylPR7111oANg1Jnheq2sp%2FMQkwxej8p6oCtyCD77%2Byb%2Bfz8fzrMDj0pU8LgoNHUdBN%2FNXGCTlsn6Jw1CikSbzXioRDApF2r4uAdgfk36HI%2FytBvT3MveDbJ6FWXYgc4Tpj6iZlJVtdFlwFHCpKJbw9q6Q7M3iPvglVb7KzEaDkz0U%2F98xA6a06vMdefvjtx8qU7o5PQeDgApixVTuzcS0tJPBWUPmLxrVhKqdRgW0R7B5BXYxazdcE30lZEABUr4MqoQcJnc%2BLwMOwzX2ko20zK02UFsK4QNtm9MlPCDuRoGJV8hFhVNcDZdYmWUvVB91okZ165A2xCpiJeSv9LtMTg3bpvio9KOXRr0nUn8%2BdsfF%2FKKH4YPFvfyMgLXeMR5xT%2FTJlGUhsQC17q%2BvxurZur8C29LemMIrGgcAGOqUB%2FG44hw3Kp2BbUGtz3FzxsFWnT4H47074uXJ3Jq8Fbe8VJMIZlJcBbWq4d4duShfpUgKyGcqgjXuW2rEWyEvJe%2Bwn4De1pMjhfXIqPHjIJ6fgkPmdAKA911hY6aE4VpWpw2Lrj9Vc0OOVC2%2BlJqcIbsPA4KAm1cw0ufjGwiqV4THxPXr00COCvfWLVImvgYN4VM8xuttYkQEJhI0g3wYs6JbPG6Hv&X-Amz-Signature=10629a9b8e78028bec5ed84a2ddfb47bbb190aa983ddb329dc6c98624b15f34f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLNJRRG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlITPBI6%2BZBHu%2FUOSleyr1YTpkKHxr7U7aFfo1WPuXvAiEA%2Fcf%2FkThB%2FRGytkw%2FHRkgo8Ft4VHComJJDp492H2cOXwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCscOKkzG3YlletpvircA5oUCpzcuoDZOlfUePgNKOarP0sSEH1PiWC9EPEEU6RZuCx61dBk2Qs08LP%2BsOhYRgUzf4d2703b407YKIk8uijrTRKhiNxt%2FeWi4McvBihXc1abijFNJO9TZe%2BG8lBKAcBFQacjGpISsxzwdXv66AqlclwhbaL%2BdtVlukjGCzZRAj55FTPaJmQYl0IIniTWUNXneNevWIhG1oknilWh2kgSU%2FE%2BpCylPR7111oANg1Jnheq2sp%2FMQkwxej8p6oCtyCD77%2Byb%2Bfz8fzrMDj0pU8LgoNHUdBN%2FNXGCTlsn6Jw1CikSbzXioRDApF2r4uAdgfk36HI%2FytBvT3MveDbJ6FWXYgc4Tpj6iZlJVtdFlwFHCpKJbw9q6Q7M3iPvglVb7KzEaDkz0U%2F98xA6a06vMdefvjtx8qU7o5PQeDgApixVTuzcS0tJPBWUPmLxrVhKqdRgW0R7B5BXYxazdcE30lZEABUr4MqoQcJnc%2BLwMOwzX2ko20zK02UFsK4QNtm9MlPCDuRoGJV8hFhVNcDZdYmWUvVB91okZ165A2xCpiJeSv9LtMTg3bpvio9KOXRr0nUn8%2BdsfF%2FKKH4YPFvfyMgLXeMR5xT%2FTJlGUhsQC17q%2BvxurZur8C29LemMIrGgcAGOqUB%2FG44hw3Kp2BbUGtz3FzxsFWnT4H47074uXJ3Jq8Fbe8VJMIZlJcBbWq4d4duShfpUgKyGcqgjXuW2rEWyEvJe%2Bwn4De1pMjhfXIqPHjIJ6fgkPmdAKA911hY6aE4VpWpw2Lrj9Vc0OOVC2%2BlJqcIbsPA4KAm1cw0ufjGwiqV4THxPXr00COCvfWLVImvgYN4VM8xuttYkQEJhI0g3wYs6JbPG6Hv&X-Amz-Signature=143eff524322c945e31f9953dc95425a1d96dbe75431108a910ea8acc198a075&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLNJRRG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlITPBI6%2BZBHu%2FUOSleyr1YTpkKHxr7U7aFfo1WPuXvAiEA%2Fcf%2FkThB%2FRGytkw%2FHRkgo8Ft4VHComJJDp492H2cOXwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCscOKkzG3YlletpvircA5oUCpzcuoDZOlfUePgNKOarP0sSEH1PiWC9EPEEU6RZuCx61dBk2Qs08LP%2BsOhYRgUzf4d2703b407YKIk8uijrTRKhiNxt%2FeWi4McvBihXc1abijFNJO9TZe%2BG8lBKAcBFQacjGpISsxzwdXv66AqlclwhbaL%2BdtVlukjGCzZRAj55FTPaJmQYl0IIniTWUNXneNevWIhG1oknilWh2kgSU%2FE%2BpCylPR7111oANg1Jnheq2sp%2FMQkwxej8p6oCtyCD77%2Byb%2Bfz8fzrMDj0pU8LgoNHUdBN%2FNXGCTlsn6Jw1CikSbzXioRDApF2r4uAdgfk36HI%2FytBvT3MveDbJ6FWXYgc4Tpj6iZlJVtdFlwFHCpKJbw9q6Q7M3iPvglVb7KzEaDkz0U%2F98xA6a06vMdefvjtx8qU7o5PQeDgApixVTuzcS0tJPBWUPmLxrVhKqdRgW0R7B5BXYxazdcE30lZEABUr4MqoQcJnc%2BLwMOwzX2ko20zK02UFsK4QNtm9MlPCDuRoGJV8hFhVNcDZdYmWUvVB91okZ165A2xCpiJeSv9LtMTg3bpvio9KOXRr0nUn8%2BdsfF%2FKKH4YPFvfyMgLXeMR5xT%2FTJlGUhsQC17q%2BvxurZur8C29LemMIrGgcAGOqUB%2FG44hw3Kp2BbUGtz3FzxsFWnT4H47074uXJ3Jq8Fbe8VJMIZlJcBbWq4d4duShfpUgKyGcqgjXuW2rEWyEvJe%2Bwn4De1pMjhfXIqPHjIJ6fgkPmdAKA911hY6aE4VpWpw2Lrj9Vc0OOVC2%2BlJqcIbsPA4KAm1cw0ufjGwiqV4THxPXr00COCvfWLVImvgYN4VM8xuttYkQEJhI0g3wYs6JbPG6Hv&X-Amz-Signature=7b725a46b9961829acc98a5477fca43c882e759a98964595dc93466ba2143529&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQLNJRRG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlITPBI6%2BZBHu%2FUOSleyr1YTpkKHxr7U7aFfo1WPuXvAiEA%2Fcf%2FkThB%2FRGytkw%2FHRkgo8Ft4VHComJJDp492H2cOXwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCscOKkzG3YlletpvircA5oUCpzcuoDZOlfUePgNKOarP0sSEH1PiWC9EPEEU6RZuCx61dBk2Qs08LP%2BsOhYRgUzf4d2703b407YKIk8uijrTRKhiNxt%2FeWi4McvBihXc1abijFNJO9TZe%2BG8lBKAcBFQacjGpISsxzwdXv66AqlclwhbaL%2BdtVlukjGCzZRAj55FTPaJmQYl0IIniTWUNXneNevWIhG1oknilWh2kgSU%2FE%2BpCylPR7111oANg1Jnheq2sp%2FMQkwxej8p6oCtyCD77%2Byb%2Bfz8fzrMDj0pU8LgoNHUdBN%2FNXGCTlsn6Jw1CikSbzXioRDApF2r4uAdgfk36HI%2FytBvT3MveDbJ6FWXYgc4Tpj6iZlJVtdFlwFHCpKJbw9q6Q7M3iPvglVb7KzEaDkz0U%2F98xA6a06vMdefvjtx8qU7o5PQeDgApixVTuzcS0tJPBWUPmLxrVhKqdRgW0R7B5BXYxazdcE30lZEABUr4MqoQcJnc%2BLwMOwzX2ko20zK02UFsK4QNtm9MlPCDuRoGJV8hFhVNcDZdYmWUvVB91okZ165A2xCpiJeSv9LtMTg3bpvio9KOXRr0nUn8%2BdsfF%2FKKH4YPFvfyMgLXeMR5xT%2FTJlGUhsQC17q%2BvxurZur8C29LemMIrGgcAGOqUB%2FG44hw3Kp2BbUGtz3FzxsFWnT4H47074uXJ3Jq8Fbe8VJMIZlJcBbWq4d4duShfpUgKyGcqgjXuW2rEWyEvJe%2Bwn4De1pMjhfXIqPHjIJ6fgkPmdAKA911hY6aE4VpWpw2Lrj9Vc0OOVC2%2BlJqcIbsPA4KAm1cw0ufjGwiqV4THxPXr00COCvfWLVImvgYN4VM8xuttYkQEJhI0g3wYs6JbPG6Hv&X-Amz-Signature=61f1ee52f1a5ee07b1abfdb3b7f098c870e83c42cb286fd5b858aaa067855d05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
