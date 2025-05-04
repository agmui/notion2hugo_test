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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M72DDDK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICp%2FyLa%2FmkBvrgWY2hsCtCkHabW7FthJw8gF34zPqENWAiEA%2FdO%2BrlcNQtGtStT7GffGoSBGul09sSCm%2F%2FkWwTPa59Mq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHCzI3DY4jCB4eY15SrcA97Q1I1BR4IvefqiKYGUDQwOXZ2wfCpBD6bQ2EMMJUqTTkISBTBDAGcdgiboE8jaCSu1LoyfuHL3wSg0xa7YISpy3aABkIedqLw9KKoZ69TyU7krQxdW8JyRGBeuNI1KVZC2NgU5lsTvyZGjiCRzuio%2Ftv4ZTX%2Bv1gpgsZcEaKSRuyV2fsQ80cRcRHCC3vV%2FsIdcsW7HZ99Kuiz%2BBiEmbpIE2fUFcgFmoFVhGIoEk21ycUG6WTZVKZLZ8Gt3aTjXg4CkgLTL7mXD%2FK2K9eAM%2Bj2WfA2FmtneGu4NK%2F6wrEngJYiLBqSQcwYAphShmaoXZk0AvXbDRhgmJWyq8du2nPEt0YaMyKmL8x2%2BivurGBNWRpwvsfC0Sk2GKu9Z1wqhcgb7S2niScbt6DrloVIEh5w4Q4EjAe1OShrHs79o19uHlw4HY53MbwJK4FE5QO7fZ7Go2Im4M2u6p1sCqGaa%2BIp54jYdWOr0u8%2BQ8ml%2BqFnzHCMo9tuYf%2Fa3izQ1M%2B9RHU9h2m7Y8CGeCsKt03Hz%2Fu64gDZYaWRCwuIJn8wD4LaGRdk91zaaPymFDtoDFmpFFt3VBIeizChKEdc%2BWeLlFmCF8HPIi2vJ%2BLet%2Fp%2FclGbgXPXU5QOQ0apl%2FG4mMJzT3MAGOqUBrzyAphlO7TVsXrptlWAsEuqlOc3YCeq6Qj36Z%2BtIOCMcruT7Jc%2FDyC1dirIe9l2TmfzfRRPzMpNr3qEbPA6sw0Qbjhtwb1Iz7EGZ9%2BZVOAAER00FizPNi5Mt3zUzD0deLsv91FrECm8uwp%2BnSD4JUSqkKxw18pTgFqSVxrjBiH9%2BYmUknMBmK022mys4I%2BHChZO2HmMTU6EJbt5clgFdvXUEZKmM&X-Amz-Signature=5398e01bf26fd79832d984559e46fe34c878c424bb562369ff8ff7082ee64d51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M72DDDK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICp%2FyLa%2FmkBvrgWY2hsCtCkHabW7FthJw8gF34zPqENWAiEA%2FdO%2BrlcNQtGtStT7GffGoSBGul09sSCm%2F%2FkWwTPa59Mq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHCzI3DY4jCB4eY15SrcA97Q1I1BR4IvefqiKYGUDQwOXZ2wfCpBD6bQ2EMMJUqTTkISBTBDAGcdgiboE8jaCSu1LoyfuHL3wSg0xa7YISpy3aABkIedqLw9KKoZ69TyU7krQxdW8JyRGBeuNI1KVZC2NgU5lsTvyZGjiCRzuio%2Ftv4ZTX%2Bv1gpgsZcEaKSRuyV2fsQ80cRcRHCC3vV%2FsIdcsW7HZ99Kuiz%2BBiEmbpIE2fUFcgFmoFVhGIoEk21ycUG6WTZVKZLZ8Gt3aTjXg4CkgLTL7mXD%2FK2K9eAM%2Bj2WfA2FmtneGu4NK%2F6wrEngJYiLBqSQcwYAphShmaoXZk0AvXbDRhgmJWyq8du2nPEt0YaMyKmL8x2%2BivurGBNWRpwvsfC0Sk2GKu9Z1wqhcgb7S2niScbt6DrloVIEh5w4Q4EjAe1OShrHs79o19uHlw4HY53MbwJK4FE5QO7fZ7Go2Im4M2u6p1sCqGaa%2BIp54jYdWOr0u8%2BQ8ml%2BqFnzHCMo9tuYf%2Fa3izQ1M%2B9RHU9h2m7Y8CGeCsKt03Hz%2Fu64gDZYaWRCwuIJn8wD4LaGRdk91zaaPymFDtoDFmpFFt3VBIeizChKEdc%2BWeLlFmCF8HPIi2vJ%2BLet%2Fp%2FclGbgXPXU5QOQ0apl%2FG4mMJzT3MAGOqUBrzyAphlO7TVsXrptlWAsEuqlOc3YCeq6Qj36Z%2BtIOCMcruT7Jc%2FDyC1dirIe9l2TmfzfRRPzMpNr3qEbPA6sw0Qbjhtwb1Iz7EGZ9%2BZVOAAER00FizPNi5Mt3zUzD0deLsv91FrECm8uwp%2BnSD4JUSqkKxw18pTgFqSVxrjBiH9%2BYmUknMBmK022mys4I%2BHChZO2HmMTU6EJbt5clgFdvXUEZKmM&X-Amz-Signature=8198ff36988f51444f7213ae02182e2d895c3cf26caa2c0361e9c906d5217fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M72DDDK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICp%2FyLa%2FmkBvrgWY2hsCtCkHabW7FthJw8gF34zPqENWAiEA%2FdO%2BrlcNQtGtStT7GffGoSBGul09sSCm%2F%2FkWwTPa59Mq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHCzI3DY4jCB4eY15SrcA97Q1I1BR4IvefqiKYGUDQwOXZ2wfCpBD6bQ2EMMJUqTTkISBTBDAGcdgiboE8jaCSu1LoyfuHL3wSg0xa7YISpy3aABkIedqLw9KKoZ69TyU7krQxdW8JyRGBeuNI1KVZC2NgU5lsTvyZGjiCRzuio%2Ftv4ZTX%2Bv1gpgsZcEaKSRuyV2fsQ80cRcRHCC3vV%2FsIdcsW7HZ99Kuiz%2BBiEmbpIE2fUFcgFmoFVhGIoEk21ycUG6WTZVKZLZ8Gt3aTjXg4CkgLTL7mXD%2FK2K9eAM%2Bj2WfA2FmtneGu4NK%2F6wrEngJYiLBqSQcwYAphShmaoXZk0AvXbDRhgmJWyq8du2nPEt0YaMyKmL8x2%2BivurGBNWRpwvsfC0Sk2GKu9Z1wqhcgb7S2niScbt6DrloVIEh5w4Q4EjAe1OShrHs79o19uHlw4HY53MbwJK4FE5QO7fZ7Go2Im4M2u6p1sCqGaa%2BIp54jYdWOr0u8%2BQ8ml%2BqFnzHCMo9tuYf%2Fa3izQ1M%2B9RHU9h2m7Y8CGeCsKt03Hz%2Fu64gDZYaWRCwuIJn8wD4LaGRdk91zaaPymFDtoDFmpFFt3VBIeizChKEdc%2BWeLlFmCF8HPIi2vJ%2BLet%2Fp%2FclGbgXPXU5QOQ0apl%2FG4mMJzT3MAGOqUBrzyAphlO7TVsXrptlWAsEuqlOc3YCeq6Qj36Z%2BtIOCMcruT7Jc%2FDyC1dirIe9l2TmfzfRRPzMpNr3qEbPA6sw0Qbjhtwb1Iz7EGZ9%2BZVOAAER00FizPNi5Mt3zUzD0deLsv91FrECm8uwp%2BnSD4JUSqkKxw18pTgFqSVxrjBiH9%2BYmUknMBmK022mys4I%2BHChZO2HmMTU6EJbt5clgFdvXUEZKmM&X-Amz-Signature=a6c2ea733caf48e8d59ba39480d9be0cb865e159945c5f3cf0a4dadf2c7a1a52&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M72DDDK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICp%2FyLa%2FmkBvrgWY2hsCtCkHabW7FthJw8gF34zPqENWAiEA%2FdO%2BrlcNQtGtStT7GffGoSBGul09sSCm%2F%2FkWwTPa59Mq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHCzI3DY4jCB4eY15SrcA97Q1I1BR4IvefqiKYGUDQwOXZ2wfCpBD6bQ2EMMJUqTTkISBTBDAGcdgiboE8jaCSu1LoyfuHL3wSg0xa7YISpy3aABkIedqLw9KKoZ69TyU7krQxdW8JyRGBeuNI1KVZC2NgU5lsTvyZGjiCRzuio%2Ftv4ZTX%2Bv1gpgsZcEaKSRuyV2fsQ80cRcRHCC3vV%2FsIdcsW7HZ99Kuiz%2BBiEmbpIE2fUFcgFmoFVhGIoEk21ycUG6WTZVKZLZ8Gt3aTjXg4CkgLTL7mXD%2FK2K9eAM%2Bj2WfA2FmtneGu4NK%2F6wrEngJYiLBqSQcwYAphShmaoXZk0AvXbDRhgmJWyq8du2nPEt0YaMyKmL8x2%2BivurGBNWRpwvsfC0Sk2GKu9Z1wqhcgb7S2niScbt6DrloVIEh5w4Q4EjAe1OShrHs79o19uHlw4HY53MbwJK4FE5QO7fZ7Go2Im4M2u6p1sCqGaa%2BIp54jYdWOr0u8%2BQ8ml%2BqFnzHCMo9tuYf%2Fa3izQ1M%2B9RHU9h2m7Y8CGeCsKt03Hz%2Fu64gDZYaWRCwuIJn8wD4LaGRdk91zaaPymFDtoDFmpFFt3VBIeizChKEdc%2BWeLlFmCF8HPIi2vJ%2BLet%2Fp%2FclGbgXPXU5QOQ0apl%2FG4mMJzT3MAGOqUBrzyAphlO7TVsXrptlWAsEuqlOc3YCeq6Qj36Z%2BtIOCMcruT7Jc%2FDyC1dirIe9l2TmfzfRRPzMpNr3qEbPA6sw0Qbjhtwb1Iz7EGZ9%2BZVOAAER00FizPNi5Mt3zUzD0deLsv91FrECm8uwp%2BnSD4JUSqkKxw18pTgFqSVxrjBiH9%2BYmUknMBmK022mys4I%2BHChZO2HmMTU6EJbt5clgFdvXUEZKmM&X-Amz-Signature=a6c10a419c3d47e58fa199d305598c62f446534d33dcc25e06ff5c6055000b75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M72DDDK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICp%2FyLa%2FmkBvrgWY2hsCtCkHabW7FthJw8gF34zPqENWAiEA%2FdO%2BrlcNQtGtStT7GffGoSBGul09sSCm%2F%2FkWwTPa59Mq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHCzI3DY4jCB4eY15SrcA97Q1I1BR4IvefqiKYGUDQwOXZ2wfCpBD6bQ2EMMJUqTTkISBTBDAGcdgiboE8jaCSu1LoyfuHL3wSg0xa7YISpy3aABkIedqLw9KKoZ69TyU7krQxdW8JyRGBeuNI1KVZC2NgU5lsTvyZGjiCRzuio%2Ftv4ZTX%2Bv1gpgsZcEaKSRuyV2fsQ80cRcRHCC3vV%2FsIdcsW7HZ99Kuiz%2BBiEmbpIE2fUFcgFmoFVhGIoEk21ycUG6WTZVKZLZ8Gt3aTjXg4CkgLTL7mXD%2FK2K9eAM%2Bj2WfA2FmtneGu4NK%2F6wrEngJYiLBqSQcwYAphShmaoXZk0AvXbDRhgmJWyq8du2nPEt0YaMyKmL8x2%2BivurGBNWRpwvsfC0Sk2GKu9Z1wqhcgb7S2niScbt6DrloVIEh5w4Q4EjAe1OShrHs79o19uHlw4HY53MbwJK4FE5QO7fZ7Go2Im4M2u6p1sCqGaa%2BIp54jYdWOr0u8%2BQ8ml%2BqFnzHCMo9tuYf%2Fa3izQ1M%2B9RHU9h2m7Y8CGeCsKt03Hz%2Fu64gDZYaWRCwuIJn8wD4LaGRdk91zaaPymFDtoDFmpFFt3VBIeizChKEdc%2BWeLlFmCF8HPIi2vJ%2BLet%2Fp%2FclGbgXPXU5QOQ0apl%2FG4mMJzT3MAGOqUBrzyAphlO7TVsXrptlWAsEuqlOc3YCeq6Qj36Z%2BtIOCMcruT7Jc%2FDyC1dirIe9l2TmfzfRRPzMpNr3qEbPA6sw0Qbjhtwb1Iz7EGZ9%2BZVOAAER00FizPNi5Mt3zUzD0deLsv91FrECm8uwp%2BnSD4JUSqkKxw18pTgFqSVxrjBiH9%2BYmUknMBmK022mys4I%2BHChZO2HmMTU6EJbt5clgFdvXUEZKmM&X-Amz-Signature=7d2237ebd8950022c4fcba4b7951c5ce928f34161124667de7a05740460f1de5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M72DDDK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICp%2FyLa%2FmkBvrgWY2hsCtCkHabW7FthJw8gF34zPqENWAiEA%2FdO%2BrlcNQtGtStT7GffGoSBGul09sSCm%2F%2FkWwTPa59Mq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHCzI3DY4jCB4eY15SrcA97Q1I1BR4IvefqiKYGUDQwOXZ2wfCpBD6bQ2EMMJUqTTkISBTBDAGcdgiboE8jaCSu1LoyfuHL3wSg0xa7YISpy3aABkIedqLw9KKoZ69TyU7krQxdW8JyRGBeuNI1KVZC2NgU5lsTvyZGjiCRzuio%2Ftv4ZTX%2Bv1gpgsZcEaKSRuyV2fsQ80cRcRHCC3vV%2FsIdcsW7HZ99Kuiz%2BBiEmbpIE2fUFcgFmoFVhGIoEk21ycUG6WTZVKZLZ8Gt3aTjXg4CkgLTL7mXD%2FK2K9eAM%2Bj2WfA2FmtneGu4NK%2F6wrEngJYiLBqSQcwYAphShmaoXZk0AvXbDRhgmJWyq8du2nPEt0YaMyKmL8x2%2BivurGBNWRpwvsfC0Sk2GKu9Z1wqhcgb7S2niScbt6DrloVIEh5w4Q4EjAe1OShrHs79o19uHlw4HY53MbwJK4FE5QO7fZ7Go2Im4M2u6p1sCqGaa%2BIp54jYdWOr0u8%2BQ8ml%2BqFnzHCMo9tuYf%2Fa3izQ1M%2B9RHU9h2m7Y8CGeCsKt03Hz%2Fu64gDZYaWRCwuIJn8wD4LaGRdk91zaaPymFDtoDFmpFFt3VBIeizChKEdc%2BWeLlFmCF8HPIi2vJ%2BLet%2Fp%2FclGbgXPXU5QOQ0apl%2FG4mMJzT3MAGOqUBrzyAphlO7TVsXrptlWAsEuqlOc3YCeq6Qj36Z%2BtIOCMcruT7Jc%2FDyC1dirIe9l2TmfzfRRPzMpNr3qEbPA6sw0Qbjhtwb1Iz7EGZ9%2BZVOAAER00FizPNi5Mt3zUzD0deLsv91FrECm8uwp%2BnSD4JUSqkKxw18pTgFqSVxrjBiH9%2BYmUknMBmK022mys4I%2BHChZO2HmMTU6EJbt5clgFdvXUEZKmM&X-Amz-Signature=d6159b88962d2197498c929a916dd69c654c4d177b8fdc2abc017a5698141d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M72DDDK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICp%2FyLa%2FmkBvrgWY2hsCtCkHabW7FthJw8gF34zPqENWAiEA%2FdO%2BrlcNQtGtStT7GffGoSBGul09sSCm%2F%2FkWwTPa59Mq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHCzI3DY4jCB4eY15SrcA97Q1I1BR4IvefqiKYGUDQwOXZ2wfCpBD6bQ2EMMJUqTTkISBTBDAGcdgiboE8jaCSu1LoyfuHL3wSg0xa7YISpy3aABkIedqLw9KKoZ69TyU7krQxdW8JyRGBeuNI1KVZC2NgU5lsTvyZGjiCRzuio%2Ftv4ZTX%2Bv1gpgsZcEaKSRuyV2fsQ80cRcRHCC3vV%2FsIdcsW7HZ99Kuiz%2BBiEmbpIE2fUFcgFmoFVhGIoEk21ycUG6WTZVKZLZ8Gt3aTjXg4CkgLTL7mXD%2FK2K9eAM%2Bj2WfA2FmtneGu4NK%2F6wrEngJYiLBqSQcwYAphShmaoXZk0AvXbDRhgmJWyq8du2nPEt0YaMyKmL8x2%2BivurGBNWRpwvsfC0Sk2GKu9Z1wqhcgb7S2niScbt6DrloVIEh5w4Q4EjAe1OShrHs79o19uHlw4HY53MbwJK4FE5QO7fZ7Go2Im4M2u6p1sCqGaa%2BIp54jYdWOr0u8%2BQ8ml%2BqFnzHCMo9tuYf%2Fa3izQ1M%2B9RHU9h2m7Y8CGeCsKt03Hz%2Fu64gDZYaWRCwuIJn8wD4LaGRdk91zaaPymFDtoDFmpFFt3VBIeizChKEdc%2BWeLlFmCF8HPIi2vJ%2BLet%2Fp%2FclGbgXPXU5QOQ0apl%2FG4mMJzT3MAGOqUBrzyAphlO7TVsXrptlWAsEuqlOc3YCeq6Qj36Z%2BtIOCMcruT7Jc%2FDyC1dirIe9l2TmfzfRRPzMpNr3qEbPA6sw0Qbjhtwb1Iz7EGZ9%2BZVOAAER00FizPNi5Mt3zUzD0deLsv91FrECm8uwp%2BnSD4JUSqkKxw18pTgFqSVxrjBiH9%2BYmUknMBmK022mys4I%2BHChZO2HmMTU6EJbt5clgFdvXUEZKmM&X-Amz-Signature=12d2a4368684605ff20622170948e96d8cdf55ddf40ddb764484b7409864f2af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M72DDDK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICp%2FyLa%2FmkBvrgWY2hsCtCkHabW7FthJw8gF34zPqENWAiEA%2FdO%2BrlcNQtGtStT7GffGoSBGul09sSCm%2F%2FkWwTPa59Mq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHCzI3DY4jCB4eY15SrcA97Q1I1BR4IvefqiKYGUDQwOXZ2wfCpBD6bQ2EMMJUqTTkISBTBDAGcdgiboE8jaCSu1LoyfuHL3wSg0xa7YISpy3aABkIedqLw9KKoZ69TyU7krQxdW8JyRGBeuNI1KVZC2NgU5lsTvyZGjiCRzuio%2Ftv4ZTX%2Bv1gpgsZcEaKSRuyV2fsQ80cRcRHCC3vV%2FsIdcsW7HZ99Kuiz%2BBiEmbpIE2fUFcgFmoFVhGIoEk21ycUG6WTZVKZLZ8Gt3aTjXg4CkgLTL7mXD%2FK2K9eAM%2Bj2WfA2FmtneGu4NK%2F6wrEngJYiLBqSQcwYAphShmaoXZk0AvXbDRhgmJWyq8du2nPEt0YaMyKmL8x2%2BivurGBNWRpwvsfC0Sk2GKu9Z1wqhcgb7S2niScbt6DrloVIEh5w4Q4EjAe1OShrHs79o19uHlw4HY53MbwJK4FE5QO7fZ7Go2Im4M2u6p1sCqGaa%2BIp54jYdWOr0u8%2BQ8ml%2BqFnzHCMo9tuYf%2Fa3izQ1M%2B9RHU9h2m7Y8CGeCsKt03Hz%2Fu64gDZYaWRCwuIJn8wD4LaGRdk91zaaPymFDtoDFmpFFt3VBIeizChKEdc%2BWeLlFmCF8HPIi2vJ%2BLet%2Fp%2FclGbgXPXU5QOQ0apl%2FG4mMJzT3MAGOqUBrzyAphlO7TVsXrptlWAsEuqlOc3YCeq6Qj36Z%2BtIOCMcruT7Jc%2FDyC1dirIe9l2TmfzfRRPzMpNr3qEbPA6sw0Qbjhtwb1Iz7EGZ9%2BZVOAAER00FizPNi5Mt3zUzD0deLsv91FrECm8uwp%2BnSD4JUSqkKxw18pTgFqSVxrjBiH9%2BYmUknMBmK022mys4I%2BHChZO2HmMTU6EJbt5clgFdvXUEZKmM&X-Amz-Signature=134365bcecf9030d5143072e684588b2f923efb166f24aae4ebc01b1b983b6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
