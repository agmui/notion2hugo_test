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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QR4SCR2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCHwoL04IXGoGq6j1lmLf%2FcIHKxX0cV4dJIcFg%2B8IuUhQIgUN2Rjh6uh5tMf%2FJC4tpT%2FaIRb1TZivUBakp6ABqRpQMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHsN0idjdoMcOEVfCrcA50ECxRiRSrfuOKVmG6%2FZiv%2FY%2F2jITlb%2B6%2FrYmkiA1K2%2BuL3XO7Jmii6yF0qIFbkDZEk2EFnB%2Fz%2Fo4iEfg42o51JVMCSDBxY7MHyBYUiQBvXlBeO%2FxpDFLy7NcPVKJzAD2cVuZcGGWvKNkdU5ZVGWBzPS2pFXBSMrGJ69gb%2BcwNLXnb6pQD2CfUWLRDsL%2BhmqUHxwMH1Z%2FFlQsSVrJReHISqInqX39STGxyBdbXrlh1sjeh%2BBs%2F8fddtcB1teEsJVaqCQtxWDFC0Nn5Yj1OexIEYSKh5culEAbIhU0KgKIXe4DtFE0egoCnuTofzN8Q8QUaehKh2fdi4RVMobDKj57pCQOjHTom1TG9OaZp6VtxAvs85jkPWKTFzNsYXJAq48Q%2BMqO4E09w1bQ3ePpAtvV4vkqqU%2Bs4uM%2Fk6vMB4gAuGT7RD0NbUyN%2F1roX5f8uFGm9EWYWHs9E9pBBM2%2BqySfmLjI9IpVc1WOaIhCzDkL8Qnj39Z63wQoUwQQUNEh8dLeiQ58%2BNJBuNz3oR2KXYKRW1%2F%2FZe0FNXK7ECWu36eYNz5eIZbahgEnWADrWy0m26xyGuiX9jB%2FMcviUH7NQ1OejYY1MeKOo6kpUdwwXSFoldKUXxqK%2BJCqq10oTPMIqLs78GOqUBq6naWFGqqOpp7%2BPar9iIRc0JkoeTFu009u1dMPZprG9uBQsdPJMK7vu5Fvx3HzIOz7P%2Fi4JuIXOdbpkHbF3Z4baOEZ%2FZsj93ezfXXkKF65bE%2F51o8fpmJ0Ye4OySe7F%2FqkzioUccxTVavV6EWA6ICT2Pqe7SEixePCAjmYLj9wgudLjiUdXZPW5WJkhRx64eBALoPt0DsGoX8r7%2FYH5P7JKQK6ot&X-Amz-Signature=e318439686a391169fe91390f8c384f07781db38dd45eba212c64fff58a64687&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QR4SCR2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCHwoL04IXGoGq6j1lmLf%2FcIHKxX0cV4dJIcFg%2B8IuUhQIgUN2Rjh6uh5tMf%2FJC4tpT%2FaIRb1TZivUBakp6ABqRpQMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHsN0idjdoMcOEVfCrcA50ECxRiRSrfuOKVmG6%2FZiv%2FY%2F2jITlb%2B6%2FrYmkiA1K2%2BuL3XO7Jmii6yF0qIFbkDZEk2EFnB%2Fz%2Fo4iEfg42o51JVMCSDBxY7MHyBYUiQBvXlBeO%2FxpDFLy7NcPVKJzAD2cVuZcGGWvKNkdU5ZVGWBzPS2pFXBSMrGJ69gb%2BcwNLXnb6pQD2CfUWLRDsL%2BhmqUHxwMH1Z%2FFlQsSVrJReHISqInqX39STGxyBdbXrlh1sjeh%2BBs%2F8fddtcB1teEsJVaqCQtxWDFC0Nn5Yj1OexIEYSKh5culEAbIhU0KgKIXe4DtFE0egoCnuTofzN8Q8QUaehKh2fdi4RVMobDKj57pCQOjHTom1TG9OaZp6VtxAvs85jkPWKTFzNsYXJAq48Q%2BMqO4E09w1bQ3ePpAtvV4vkqqU%2Bs4uM%2Fk6vMB4gAuGT7RD0NbUyN%2F1roX5f8uFGm9EWYWHs9E9pBBM2%2BqySfmLjI9IpVc1WOaIhCzDkL8Qnj39Z63wQoUwQQUNEh8dLeiQ58%2BNJBuNz3oR2KXYKRW1%2F%2FZe0FNXK7ECWu36eYNz5eIZbahgEnWADrWy0m26xyGuiX9jB%2FMcviUH7NQ1OejYY1MeKOo6kpUdwwXSFoldKUXxqK%2BJCqq10oTPMIqLs78GOqUBq6naWFGqqOpp7%2BPar9iIRc0JkoeTFu009u1dMPZprG9uBQsdPJMK7vu5Fvx3HzIOz7P%2Fi4JuIXOdbpkHbF3Z4baOEZ%2FZsj93ezfXXkKF65bE%2F51o8fpmJ0Ye4OySe7F%2FqkzioUccxTVavV6EWA6ICT2Pqe7SEixePCAjmYLj9wgudLjiUdXZPW5WJkhRx64eBALoPt0DsGoX8r7%2FYH5P7JKQK6ot&X-Amz-Signature=3065198c168212afbfcf9ea6d900155444611170dbf43d8a1284da82c8f50cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QR4SCR2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCHwoL04IXGoGq6j1lmLf%2FcIHKxX0cV4dJIcFg%2B8IuUhQIgUN2Rjh6uh5tMf%2FJC4tpT%2FaIRb1TZivUBakp6ABqRpQMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHsN0idjdoMcOEVfCrcA50ECxRiRSrfuOKVmG6%2FZiv%2FY%2F2jITlb%2B6%2FrYmkiA1K2%2BuL3XO7Jmii6yF0qIFbkDZEk2EFnB%2Fz%2Fo4iEfg42o51JVMCSDBxY7MHyBYUiQBvXlBeO%2FxpDFLy7NcPVKJzAD2cVuZcGGWvKNkdU5ZVGWBzPS2pFXBSMrGJ69gb%2BcwNLXnb6pQD2CfUWLRDsL%2BhmqUHxwMH1Z%2FFlQsSVrJReHISqInqX39STGxyBdbXrlh1sjeh%2BBs%2F8fddtcB1teEsJVaqCQtxWDFC0Nn5Yj1OexIEYSKh5culEAbIhU0KgKIXe4DtFE0egoCnuTofzN8Q8QUaehKh2fdi4RVMobDKj57pCQOjHTom1TG9OaZp6VtxAvs85jkPWKTFzNsYXJAq48Q%2BMqO4E09w1bQ3ePpAtvV4vkqqU%2Bs4uM%2Fk6vMB4gAuGT7RD0NbUyN%2F1roX5f8uFGm9EWYWHs9E9pBBM2%2BqySfmLjI9IpVc1WOaIhCzDkL8Qnj39Z63wQoUwQQUNEh8dLeiQ58%2BNJBuNz3oR2KXYKRW1%2F%2FZe0FNXK7ECWu36eYNz5eIZbahgEnWADrWy0m26xyGuiX9jB%2FMcviUH7NQ1OejYY1MeKOo6kpUdwwXSFoldKUXxqK%2BJCqq10oTPMIqLs78GOqUBq6naWFGqqOpp7%2BPar9iIRc0JkoeTFu009u1dMPZprG9uBQsdPJMK7vu5Fvx3HzIOz7P%2Fi4JuIXOdbpkHbF3Z4baOEZ%2FZsj93ezfXXkKF65bE%2F51o8fpmJ0Ye4OySe7F%2FqkzioUccxTVavV6EWA6ICT2Pqe7SEixePCAjmYLj9wgudLjiUdXZPW5WJkhRx64eBALoPt0DsGoX8r7%2FYH5P7JKQK6ot&X-Amz-Signature=439f9583e0fd2277510a719066a960b469568bdbe7c5bc823a61d5a99a798cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QR4SCR2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCHwoL04IXGoGq6j1lmLf%2FcIHKxX0cV4dJIcFg%2B8IuUhQIgUN2Rjh6uh5tMf%2FJC4tpT%2FaIRb1TZivUBakp6ABqRpQMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHsN0idjdoMcOEVfCrcA50ECxRiRSrfuOKVmG6%2FZiv%2FY%2F2jITlb%2B6%2FrYmkiA1K2%2BuL3XO7Jmii6yF0qIFbkDZEk2EFnB%2Fz%2Fo4iEfg42o51JVMCSDBxY7MHyBYUiQBvXlBeO%2FxpDFLy7NcPVKJzAD2cVuZcGGWvKNkdU5ZVGWBzPS2pFXBSMrGJ69gb%2BcwNLXnb6pQD2CfUWLRDsL%2BhmqUHxwMH1Z%2FFlQsSVrJReHISqInqX39STGxyBdbXrlh1sjeh%2BBs%2F8fddtcB1teEsJVaqCQtxWDFC0Nn5Yj1OexIEYSKh5culEAbIhU0KgKIXe4DtFE0egoCnuTofzN8Q8QUaehKh2fdi4RVMobDKj57pCQOjHTom1TG9OaZp6VtxAvs85jkPWKTFzNsYXJAq48Q%2BMqO4E09w1bQ3ePpAtvV4vkqqU%2Bs4uM%2Fk6vMB4gAuGT7RD0NbUyN%2F1roX5f8uFGm9EWYWHs9E9pBBM2%2BqySfmLjI9IpVc1WOaIhCzDkL8Qnj39Z63wQoUwQQUNEh8dLeiQ58%2BNJBuNz3oR2KXYKRW1%2F%2FZe0FNXK7ECWu36eYNz5eIZbahgEnWADrWy0m26xyGuiX9jB%2FMcviUH7NQ1OejYY1MeKOo6kpUdwwXSFoldKUXxqK%2BJCqq10oTPMIqLs78GOqUBq6naWFGqqOpp7%2BPar9iIRc0JkoeTFu009u1dMPZprG9uBQsdPJMK7vu5Fvx3HzIOz7P%2Fi4JuIXOdbpkHbF3Z4baOEZ%2FZsj93ezfXXkKF65bE%2F51o8fpmJ0Ye4OySe7F%2FqkzioUccxTVavV6EWA6ICT2Pqe7SEixePCAjmYLj9wgudLjiUdXZPW5WJkhRx64eBALoPt0DsGoX8r7%2FYH5P7JKQK6ot&X-Amz-Signature=3cbffa325d55558a1af25fa9ee01fb2c6f0a3f1ff7325297e61d2f01c655890d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QR4SCR2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCHwoL04IXGoGq6j1lmLf%2FcIHKxX0cV4dJIcFg%2B8IuUhQIgUN2Rjh6uh5tMf%2FJC4tpT%2FaIRb1TZivUBakp6ABqRpQMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHsN0idjdoMcOEVfCrcA50ECxRiRSrfuOKVmG6%2FZiv%2FY%2F2jITlb%2B6%2FrYmkiA1K2%2BuL3XO7Jmii6yF0qIFbkDZEk2EFnB%2Fz%2Fo4iEfg42o51JVMCSDBxY7MHyBYUiQBvXlBeO%2FxpDFLy7NcPVKJzAD2cVuZcGGWvKNkdU5ZVGWBzPS2pFXBSMrGJ69gb%2BcwNLXnb6pQD2CfUWLRDsL%2BhmqUHxwMH1Z%2FFlQsSVrJReHISqInqX39STGxyBdbXrlh1sjeh%2BBs%2F8fddtcB1teEsJVaqCQtxWDFC0Nn5Yj1OexIEYSKh5culEAbIhU0KgKIXe4DtFE0egoCnuTofzN8Q8QUaehKh2fdi4RVMobDKj57pCQOjHTom1TG9OaZp6VtxAvs85jkPWKTFzNsYXJAq48Q%2BMqO4E09w1bQ3ePpAtvV4vkqqU%2Bs4uM%2Fk6vMB4gAuGT7RD0NbUyN%2F1roX5f8uFGm9EWYWHs9E9pBBM2%2BqySfmLjI9IpVc1WOaIhCzDkL8Qnj39Z63wQoUwQQUNEh8dLeiQ58%2BNJBuNz3oR2KXYKRW1%2F%2FZe0FNXK7ECWu36eYNz5eIZbahgEnWADrWy0m26xyGuiX9jB%2FMcviUH7NQ1OejYY1MeKOo6kpUdwwXSFoldKUXxqK%2BJCqq10oTPMIqLs78GOqUBq6naWFGqqOpp7%2BPar9iIRc0JkoeTFu009u1dMPZprG9uBQsdPJMK7vu5Fvx3HzIOz7P%2Fi4JuIXOdbpkHbF3Z4baOEZ%2FZsj93ezfXXkKF65bE%2F51o8fpmJ0Ye4OySe7F%2FqkzioUccxTVavV6EWA6ICT2Pqe7SEixePCAjmYLj9wgudLjiUdXZPW5WJkhRx64eBALoPt0DsGoX8r7%2FYH5P7JKQK6ot&X-Amz-Signature=0dc5740805b989c9be260455624542b0befcb5b52b5aa79680a73f29be3c822b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QR4SCR2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCHwoL04IXGoGq6j1lmLf%2FcIHKxX0cV4dJIcFg%2B8IuUhQIgUN2Rjh6uh5tMf%2FJC4tpT%2FaIRb1TZivUBakp6ABqRpQMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHsN0idjdoMcOEVfCrcA50ECxRiRSrfuOKVmG6%2FZiv%2FY%2F2jITlb%2B6%2FrYmkiA1K2%2BuL3XO7Jmii6yF0qIFbkDZEk2EFnB%2Fz%2Fo4iEfg42o51JVMCSDBxY7MHyBYUiQBvXlBeO%2FxpDFLy7NcPVKJzAD2cVuZcGGWvKNkdU5ZVGWBzPS2pFXBSMrGJ69gb%2BcwNLXnb6pQD2CfUWLRDsL%2BhmqUHxwMH1Z%2FFlQsSVrJReHISqInqX39STGxyBdbXrlh1sjeh%2BBs%2F8fddtcB1teEsJVaqCQtxWDFC0Nn5Yj1OexIEYSKh5culEAbIhU0KgKIXe4DtFE0egoCnuTofzN8Q8QUaehKh2fdi4RVMobDKj57pCQOjHTom1TG9OaZp6VtxAvs85jkPWKTFzNsYXJAq48Q%2BMqO4E09w1bQ3ePpAtvV4vkqqU%2Bs4uM%2Fk6vMB4gAuGT7RD0NbUyN%2F1roX5f8uFGm9EWYWHs9E9pBBM2%2BqySfmLjI9IpVc1WOaIhCzDkL8Qnj39Z63wQoUwQQUNEh8dLeiQ58%2BNJBuNz3oR2KXYKRW1%2F%2FZe0FNXK7ECWu36eYNz5eIZbahgEnWADrWy0m26xyGuiX9jB%2FMcviUH7NQ1OejYY1MeKOo6kpUdwwXSFoldKUXxqK%2BJCqq10oTPMIqLs78GOqUBq6naWFGqqOpp7%2BPar9iIRc0JkoeTFu009u1dMPZprG9uBQsdPJMK7vu5Fvx3HzIOz7P%2Fi4JuIXOdbpkHbF3Z4baOEZ%2FZsj93ezfXXkKF65bE%2F51o8fpmJ0Ye4OySe7F%2FqkzioUccxTVavV6EWA6ICT2Pqe7SEixePCAjmYLj9wgudLjiUdXZPW5WJkhRx64eBALoPt0DsGoX8r7%2FYH5P7JKQK6ot&X-Amz-Signature=95919f72eb4c06318bc7b31cc5c0a74bc33b6d9ef6bd42b0d8c83b45db924db7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QR4SCR2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCHwoL04IXGoGq6j1lmLf%2FcIHKxX0cV4dJIcFg%2B8IuUhQIgUN2Rjh6uh5tMf%2FJC4tpT%2FaIRb1TZivUBakp6ABqRpQMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHsN0idjdoMcOEVfCrcA50ECxRiRSrfuOKVmG6%2FZiv%2FY%2F2jITlb%2B6%2FrYmkiA1K2%2BuL3XO7Jmii6yF0qIFbkDZEk2EFnB%2Fz%2Fo4iEfg42o51JVMCSDBxY7MHyBYUiQBvXlBeO%2FxpDFLy7NcPVKJzAD2cVuZcGGWvKNkdU5ZVGWBzPS2pFXBSMrGJ69gb%2BcwNLXnb6pQD2CfUWLRDsL%2BhmqUHxwMH1Z%2FFlQsSVrJReHISqInqX39STGxyBdbXrlh1sjeh%2BBs%2F8fddtcB1teEsJVaqCQtxWDFC0Nn5Yj1OexIEYSKh5culEAbIhU0KgKIXe4DtFE0egoCnuTofzN8Q8QUaehKh2fdi4RVMobDKj57pCQOjHTom1TG9OaZp6VtxAvs85jkPWKTFzNsYXJAq48Q%2BMqO4E09w1bQ3ePpAtvV4vkqqU%2Bs4uM%2Fk6vMB4gAuGT7RD0NbUyN%2F1roX5f8uFGm9EWYWHs9E9pBBM2%2BqySfmLjI9IpVc1WOaIhCzDkL8Qnj39Z63wQoUwQQUNEh8dLeiQ58%2BNJBuNz3oR2KXYKRW1%2F%2FZe0FNXK7ECWu36eYNz5eIZbahgEnWADrWy0m26xyGuiX9jB%2FMcviUH7NQ1OejYY1MeKOo6kpUdwwXSFoldKUXxqK%2BJCqq10oTPMIqLs78GOqUBq6naWFGqqOpp7%2BPar9iIRc0JkoeTFu009u1dMPZprG9uBQsdPJMK7vu5Fvx3HzIOz7P%2Fi4JuIXOdbpkHbF3Z4baOEZ%2FZsj93ezfXXkKF65bE%2F51o8fpmJ0Ye4OySe7F%2FqkzioUccxTVavV6EWA6ICT2Pqe7SEixePCAjmYLj9wgudLjiUdXZPW5WJkhRx64eBALoPt0DsGoX8r7%2FYH5P7JKQK6ot&X-Amz-Signature=6af2ab127934dafc03af807d296add8f7aae1fa5a3edcd39e29b9a63087057f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QR4SCR2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCHwoL04IXGoGq6j1lmLf%2FcIHKxX0cV4dJIcFg%2B8IuUhQIgUN2Rjh6uh5tMf%2FJC4tpT%2FaIRb1TZivUBakp6ABqRpQMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHsN0idjdoMcOEVfCrcA50ECxRiRSrfuOKVmG6%2FZiv%2FY%2F2jITlb%2B6%2FrYmkiA1K2%2BuL3XO7Jmii6yF0qIFbkDZEk2EFnB%2Fz%2Fo4iEfg42o51JVMCSDBxY7MHyBYUiQBvXlBeO%2FxpDFLy7NcPVKJzAD2cVuZcGGWvKNkdU5ZVGWBzPS2pFXBSMrGJ69gb%2BcwNLXnb6pQD2CfUWLRDsL%2BhmqUHxwMH1Z%2FFlQsSVrJReHISqInqX39STGxyBdbXrlh1sjeh%2BBs%2F8fddtcB1teEsJVaqCQtxWDFC0Nn5Yj1OexIEYSKh5culEAbIhU0KgKIXe4DtFE0egoCnuTofzN8Q8QUaehKh2fdi4RVMobDKj57pCQOjHTom1TG9OaZp6VtxAvs85jkPWKTFzNsYXJAq48Q%2BMqO4E09w1bQ3ePpAtvV4vkqqU%2Bs4uM%2Fk6vMB4gAuGT7RD0NbUyN%2F1roX5f8uFGm9EWYWHs9E9pBBM2%2BqySfmLjI9IpVc1WOaIhCzDkL8Qnj39Z63wQoUwQQUNEh8dLeiQ58%2BNJBuNz3oR2KXYKRW1%2F%2FZe0FNXK7ECWu36eYNz5eIZbahgEnWADrWy0m26xyGuiX9jB%2FMcviUH7NQ1OejYY1MeKOo6kpUdwwXSFoldKUXxqK%2BJCqq10oTPMIqLs78GOqUBq6naWFGqqOpp7%2BPar9iIRc0JkoeTFu009u1dMPZprG9uBQsdPJMK7vu5Fvx3HzIOz7P%2Fi4JuIXOdbpkHbF3Z4baOEZ%2FZsj93ezfXXkKF65bE%2F51o8fpmJ0Ye4OySe7F%2FqkzioUccxTVavV6EWA6ICT2Pqe7SEixePCAjmYLj9wgudLjiUdXZPW5WJkhRx64eBALoPt0DsGoX8r7%2FYH5P7JKQK6ot&X-Amz-Signature=4258c745101fc71cb5f84b54201ac234edfda463f927dc3c62a06387fc2ce674&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
