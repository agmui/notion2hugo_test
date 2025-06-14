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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUP4NTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCljQhZ5hbBNuEfZi%2F6afajp8jJHMkSGn1Ohr%2BmdX%2BdTgIgBnYOpej3HM1DAZqYc6yKCCxscPqHpDF8lr8FuOgHks0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNbUxnCt3wTTkjG23ircAxAo1l2wI4toSE%2FuPB0PEuxbFX0c75XbS6Ghu7ifGC0AEqyDYbfptjGZICiYXOQDmqGfVz26pOa%2F%2FUcYFkhbFsjXPfK1VYzjp1cADeMvePb%2FZWOy%2BShEcQEFriDC%2FpvZ01Q4ZYeJK%2Bw6HrA55T7QkuMxk8hhwhGvPO645Ia0v78UzDwmJH8Up%2FZe8hK9yxgwdPExCK4eyipOJQTHwGccsl2gAl259Nc8Qb%2B%2FfndhUscduzD6S21tNQsxtBeYA0qDWyoRoNqiPcXNuTa3dlumbYzfFBso4L7P%2FtmUrhAPX8aUtpg%2Bv7nXbUaHNhGNv5VXv%2Bcv0kpEUhXd1dWTLkmRJvShukqxrputWyEVcC3RdFgpF9HvIMhOa9pYJ919b%2F13Acl%2BBqjKXEviza5zetttVZfNrJzYBRKla%2BdtktUxaxDqEalJt2CCtLB0cO%2FV%2Fd3FmSOAzoYDnwQ2jNz2uZzGPzOBTQpodsrpqvHd3A3ZSg6hzHniU%2F5hpxguAF2DfxcMUaIHIddWYaR%2BNBx6RK2ygDDxV%2B%2BnEjsSvTHNcx48noFHek4o%2Fz90l6h29kdR9XxpuvxjWFnrfsnj%2FygvvxLXUrSBrJYAiv8mdRoSxTwntVv1a36X3iQiUw8zmIaLMMPBtcIGOqUBmo%2B4CpVsUVO3VvbZAfoMrLxtgcoIitcklDrlB1eSBUQmzoBwRzHcidFRjU0ewrv9364xpLd8dr6yJ%2F7PcojyHlhS11rJJmbauICsjeUR21lPV5aXQUiRTyRZv2xJW5uwZ07Bsl6opsOcsh1S4JytzMf%2F%2FVrru0Y%2F%2BYOeQEwNVVYjlFwaUDBEdD1c55YkuNb%2F8waKXfTsF057fXjlivJCAMhHKBLi&X-Amz-Signature=41cf621f5573024e0cd700c9138b08b1c1058709cd9fabd7059b9c258f44ae68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUP4NTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCljQhZ5hbBNuEfZi%2F6afajp8jJHMkSGn1Ohr%2BmdX%2BdTgIgBnYOpej3HM1DAZqYc6yKCCxscPqHpDF8lr8FuOgHks0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNbUxnCt3wTTkjG23ircAxAo1l2wI4toSE%2FuPB0PEuxbFX0c75XbS6Ghu7ifGC0AEqyDYbfptjGZICiYXOQDmqGfVz26pOa%2F%2FUcYFkhbFsjXPfK1VYzjp1cADeMvePb%2FZWOy%2BShEcQEFriDC%2FpvZ01Q4ZYeJK%2Bw6HrA55T7QkuMxk8hhwhGvPO645Ia0v78UzDwmJH8Up%2FZe8hK9yxgwdPExCK4eyipOJQTHwGccsl2gAl259Nc8Qb%2B%2FfndhUscduzD6S21tNQsxtBeYA0qDWyoRoNqiPcXNuTa3dlumbYzfFBso4L7P%2FtmUrhAPX8aUtpg%2Bv7nXbUaHNhGNv5VXv%2Bcv0kpEUhXd1dWTLkmRJvShukqxrputWyEVcC3RdFgpF9HvIMhOa9pYJ919b%2F13Acl%2BBqjKXEviza5zetttVZfNrJzYBRKla%2BdtktUxaxDqEalJt2CCtLB0cO%2FV%2Fd3FmSOAzoYDnwQ2jNz2uZzGPzOBTQpodsrpqvHd3A3ZSg6hzHniU%2F5hpxguAF2DfxcMUaIHIddWYaR%2BNBx6RK2ygDDxV%2B%2BnEjsSvTHNcx48noFHek4o%2Fz90l6h29kdR9XxpuvxjWFnrfsnj%2FygvvxLXUrSBrJYAiv8mdRoSxTwntVv1a36X3iQiUw8zmIaLMMPBtcIGOqUBmo%2B4CpVsUVO3VvbZAfoMrLxtgcoIitcklDrlB1eSBUQmzoBwRzHcidFRjU0ewrv9364xpLd8dr6yJ%2F7PcojyHlhS11rJJmbauICsjeUR21lPV5aXQUiRTyRZv2xJW5uwZ07Bsl6opsOcsh1S4JytzMf%2F%2FVrru0Y%2F%2BYOeQEwNVVYjlFwaUDBEdD1c55YkuNb%2F8waKXfTsF057fXjlivJCAMhHKBLi&X-Amz-Signature=26a50398d91a8486d27498a9edef648897d1d93290287e373102161745aa74b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUP4NTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCljQhZ5hbBNuEfZi%2F6afajp8jJHMkSGn1Ohr%2BmdX%2BdTgIgBnYOpej3HM1DAZqYc6yKCCxscPqHpDF8lr8FuOgHks0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNbUxnCt3wTTkjG23ircAxAo1l2wI4toSE%2FuPB0PEuxbFX0c75XbS6Ghu7ifGC0AEqyDYbfptjGZICiYXOQDmqGfVz26pOa%2F%2FUcYFkhbFsjXPfK1VYzjp1cADeMvePb%2FZWOy%2BShEcQEFriDC%2FpvZ01Q4ZYeJK%2Bw6HrA55T7QkuMxk8hhwhGvPO645Ia0v78UzDwmJH8Up%2FZe8hK9yxgwdPExCK4eyipOJQTHwGccsl2gAl259Nc8Qb%2B%2FfndhUscduzD6S21tNQsxtBeYA0qDWyoRoNqiPcXNuTa3dlumbYzfFBso4L7P%2FtmUrhAPX8aUtpg%2Bv7nXbUaHNhGNv5VXv%2Bcv0kpEUhXd1dWTLkmRJvShukqxrputWyEVcC3RdFgpF9HvIMhOa9pYJ919b%2F13Acl%2BBqjKXEviza5zetttVZfNrJzYBRKla%2BdtktUxaxDqEalJt2CCtLB0cO%2FV%2Fd3FmSOAzoYDnwQ2jNz2uZzGPzOBTQpodsrpqvHd3A3ZSg6hzHniU%2F5hpxguAF2DfxcMUaIHIddWYaR%2BNBx6RK2ygDDxV%2B%2BnEjsSvTHNcx48noFHek4o%2Fz90l6h29kdR9XxpuvxjWFnrfsnj%2FygvvxLXUrSBrJYAiv8mdRoSxTwntVv1a36X3iQiUw8zmIaLMMPBtcIGOqUBmo%2B4CpVsUVO3VvbZAfoMrLxtgcoIitcklDrlB1eSBUQmzoBwRzHcidFRjU0ewrv9364xpLd8dr6yJ%2F7PcojyHlhS11rJJmbauICsjeUR21lPV5aXQUiRTyRZv2xJW5uwZ07Bsl6opsOcsh1S4JytzMf%2F%2FVrru0Y%2F%2BYOeQEwNVVYjlFwaUDBEdD1c55YkuNb%2F8waKXfTsF057fXjlivJCAMhHKBLi&X-Amz-Signature=f06bcada5b55736162571482ce0ee44391c054f553e59e803d7ff9e63ffddc08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUP4NTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCljQhZ5hbBNuEfZi%2F6afajp8jJHMkSGn1Ohr%2BmdX%2BdTgIgBnYOpej3HM1DAZqYc6yKCCxscPqHpDF8lr8FuOgHks0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNbUxnCt3wTTkjG23ircAxAo1l2wI4toSE%2FuPB0PEuxbFX0c75XbS6Ghu7ifGC0AEqyDYbfptjGZICiYXOQDmqGfVz26pOa%2F%2FUcYFkhbFsjXPfK1VYzjp1cADeMvePb%2FZWOy%2BShEcQEFriDC%2FpvZ01Q4ZYeJK%2Bw6HrA55T7QkuMxk8hhwhGvPO645Ia0v78UzDwmJH8Up%2FZe8hK9yxgwdPExCK4eyipOJQTHwGccsl2gAl259Nc8Qb%2B%2FfndhUscduzD6S21tNQsxtBeYA0qDWyoRoNqiPcXNuTa3dlumbYzfFBso4L7P%2FtmUrhAPX8aUtpg%2Bv7nXbUaHNhGNv5VXv%2Bcv0kpEUhXd1dWTLkmRJvShukqxrputWyEVcC3RdFgpF9HvIMhOa9pYJ919b%2F13Acl%2BBqjKXEviza5zetttVZfNrJzYBRKla%2BdtktUxaxDqEalJt2CCtLB0cO%2FV%2Fd3FmSOAzoYDnwQ2jNz2uZzGPzOBTQpodsrpqvHd3A3ZSg6hzHniU%2F5hpxguAF2DfxcMUaIHIddWYaR%2BNBx6RK2ygDDxV%2B%2BnEjsSvTHNcx48noFHek4o%2Fz90l6h29kdR9XxpuvxjWFnrfsnj%2FygvvxLXUrSBrJYAiv8mdRoSxTwntVv1a36X3iQiUw8zmIaLMMPBtcIGOqUBmo%2B4CpVsUVO3VvbZAfoMrLxtgcoIitcklDrlB1eSBUQmzoBwRzHcidFRjU0ewrv9364xpLd8dr6yJ%2F7PcojyHlhS11rJJmbauICsjeUR21lPV5aXQUiRTyRZv2xJW5uwZ07Bsl6opsOcsh1S4JytzMf%2F%2FVrru0Y%2F%2BYOeQEwNVVYjlFwaUDBEdD1c55YkuNb%2F8waKXfTsF057fXjlivJCAMhHKBLi&X-Amz-Signature=4b2f3d5ad93499954692ae11124e5ce9e0d5d26816c4ae228af54513c2b93f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUP4NTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCljQhZ5hbBNuEfZi%2F6afajp8jJHMkSGn1Ohr%2BmdX%2BdTgIgBnYOpej3HM1DAZqYc6yKCCxscPqHpDF8lr8FuOgHks0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNbUxnCt3wTTkjG23ircAxAo1l2wI4toSE%2FuPB0PEuxbFX0c75XbS6Ghu7ifGC0AEqyDYbfptjGZICiYXOQDmqGfVz26pOa%2F%2FUcYFkhbFsjXPfK1VYzjp1cADeMvePb%2FZWOy%2BShEcQEFriDC%2FpvZ01Q4ZYeJK%2Bw6HrA55T7QkuMxk8hhwhGvPO645Ia0v78UzDwmJH8Up%2FZe8hK9yxgwdPExCK4eyipOJQTHwGccsl2gAl259Nc8Qb%2B%2FfndhUscduzD6S21tNQsxtBeYA0qDWyoRoNqiPcXNuTa3dlumbYzfFBso4L7P%2FtmUrhAPX8aUtpg%2Bv7nXbUaHNhGNv5VXv%2Bcv0kpEUhXd1dWTLkmRJvShukqxrputWyEVcC3RdFgpF9HvIMhOa9pYJ919b%2F13Acl%2BBqjKXEviza5zetttVZfNrJzYBRKla%2BdtktUxaxDqEalJt2CCtLB0cO%2FV%2Fd3FmSOAzoYDnwQ2jNz2uZzGPzOBTQpodsrpqvHd3A3ZSg6hzHniU%2F5hpxguAF2DfxcMUaIHIddWYaR%2BNBx6RK2ygDDxV%2B%2BnEjsSvTHNcx48noFHek4o%2Fz90l6h29kdR9XxpuvxjWFnrfsnj%2FygvvxLXUrSBrJYAiv8mdRoSxTwntVv1a36X3iQiUw8zmIaLMMPBtcIGOqUBmo%2B4CpVsUVO3VvbZAfoMrLxtgcoIitcklDrlB1eSBUQmzoBwRzHcidFRjU0ewrv9364xpLd8dr6yJ%2F7PcojyHlhS11rJJmbauICsjeUR21lPV5aXQUiRTyRZv2xJW5uwZ07Bsl6opsOcsh1S4JytzMf%2F%2FVrru0Y%2F%2BYOeQEwNVVYjlFwaUDBEdD1c55YkuNb%2F8waKXfTsF057fXjlivJCAMhHKBLi&X-Amz-Signature=d35ba61c30e91514a3f53c7194aa330af370600c958e1c47944dc37765b82f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUP4NTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCljQhZ5hbBNuEfZi%2F6afajp8jJHMkSGn1Ohr%2BmdX%2BdTgIgBnYOpej3HM1DAZqYc6yKCCxscPqHpDF8lr8FuOgHks0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNbUxnCt3wTTkjG23ircAxAo1l2wI4toSE%2FuPB0PEuxbFX0c75XbS6Ghu7ifGC0AEqyDYbfptjGZICiYXOQDmqGfVz26pOa%2F%2FUcYFkhbFsjXPfK1VYzjp1cADeMvePb%2FZWOy%2BShEcQEFriDC%2FpvZ01Q4ZYeJK%2Bw6HrA55T7QkuMxk8hhwhGvPO645Ia0v78UzDwmJH8Up%2FZe8hK9yxgwdPExCK4eyipOJQTHwGccsl2gAl259Nc8Qb%2B%2FfndhUscduzD6S21tNQsxtBeYA0qDWyoRoNqiPcXNuTa3dlumbYzfFBso4L7P%2FtmUrhAPX8aUtpg%2Bv7nXbUaHNhGNv5VXv%2Bcv0kpEUhXd1dWTLkmRJvShukqxrputWyEVcC3RdFgpF9HvIMhOa9pYJ919b%2F13Acl%2BBqjKXEviza5zetttVZfNrJzYBRKla%2BdtktUxaxDqEalJt2CCtLB0cO%2FV%2Fd3FmSOAzoYDnwQ2jNz2uZzGPzOBTQpodsrpqvHd3A3ZSg6hzHniU%2F5hpxguAF2DfxcMUaIHIddWYaR%2BNBx6RK2ygDDxV%2B%2BnEjsSvTHNcx48noFHek4o%2Fz90l6h29kdR9XxpuvxjWFnrfsnj%2FygvvxLXUrSBrJYAiv8mdRoSxTwntVv1a36X3iQiUw8zmIaLMMPBtcIGOqUBmo%2B4CpVsUVO3VvbZAfoMrLxtgcoIitcklDrlB1eSBUQmzoBwRzHcidFRjU0ewrv9364xpLd8dr6yJ%2F7PcojyHlhS11rJJmbauICsjeUR21lPV5aXQUiRTyRZv2xJW5uwZ07Bsl6opsOcsh1S4JytzMf%2F%2FVrru0Y%2F%2BYOeQEwNVVYjlFwaUDBEdD1c55YkuNb%2F8waKXfTsF057fXjlivJCAMhHKBLi&X-Amz-Signature=d1b34512cdb07400513fbe9df7540b2897363bbe818e355196607f84e297ce2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUP4NTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCljQhZ5hbBNuEfZi%2F6afajp8jJHMkSGn1Ohr%2BmdX%2BdTgIgBnYOpej3HM1DAZqYc6yKCCxscPqHpDF8lr8FuOgHks0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNbUxnCt3wTTkjG23ircAxAo1l2wI4toSE%2FuPB0PEuxbFX0c75XbS6Ghu7ifGC0AEqyDYbfptjGZICiYXOQDmqGfVz26pOa%2F%2FUcYFkhbFsjXPfK1VYzjp1cADeMvePb%2FZWOy%2BShEcQEFriDC%2FpvZ01Q4ZYeJK%2Bw6HrA55T7QkuMxk8hhwhGvPO645Ia0v78UzDwmJH8Up%2FZe8hK9yxgwdPExCK4eyipOJQTHwGccsl2gAl259Nc8Qb%2B%2FfndhUscduzD6S21tNQsxtBeYA0qDWyoRoNqiPcXNuTa3dlumbYzfFBso4L7P%2FtmUrhAPX8aUtpg%2Bv7nXbUaHNhGNv5VXv%2Bcv0kpEUhXd1dWTLkmRJvShukqxrputWyEVcC3RdFgpF9HvIMhOa9pYJ919b%2F13Acl%2BBqjKXEviza5zetttVZfNrJzYBRKla%2BdtktUxaxDqEalJt2CCtLB0cO%2FV%2Fd3FmSOAzoYDnwQ2jNz2uZzGPzOBTQpodsrpqvHd3A3ZSg6hzHniU%2F5hpxguAF2DfxcMUaIHIddWYaR%2BNBx6RK2ygDDxV%2B%2BnEjsSvTHNcx48noFHek4o%2Fz90l6h29kdR9XxpuvxjWFnrfsnj%2FygvvxLXUrSBrJYAiv8mdRoSxTwntVv1a36X3iQiUw8zmIaLMMPBtcIGOqUBmo%2B4CpVsUVO3VvbZAfoMrLxtgcoIitcklDrlB1eSBUQmzoBwRzHcidFRjU0ewrv9364xpLd8dr6yJ%2F7PcojyHlhS11rJJmbauICsjeUR21lPV5aXQUiRTyRZv2xJW5uwZ07Bsl6opsOcsh1S4JytzMf%2F%2FVrru0Y%2F%2BYOeQEwNVVYjlFwaUDBEdD1c55YkuNb%2F8waKXfTsF057fXjlivJCAMhHKBLi&X-Amz-Signature=4f086760c7f79095b095c090e8f75e944ba849aa51e2e75babc7736cc6fa9917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TUP4NTA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCljQhZ5hbBNuEfZi%2F6afajp8jJHMkSGn1Ohr%2BmdX%2BdTgIgBnYOpej3HM1DAZqYc6yKCCxscPqHpDF8lr8FuOgHks0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNbUxnCt3wTTkjG23ircAxAo1l2wI4toSE%2FuPB0PEuxbFX0c75XbS6Ghu7ifGC0AEqyDYbfptjGZICiYXOQDmqGfVz26pOa%2F%2FUcYFkhbFsjXPfK1VYzjp1cADeMvePb%2FZWOy%2BShEcQEFriDC%2FpvZ01Q4ZYeJK%2Bw6HrA55T7QkuMxk8hhwhGvPO645Ia0v78UzDwmJH8Up%2FZe8hK9yxgwdPExCK4eyipOJQTHwGccsl2gAl259Nc8Qb%2B%2FfndhUscduzD6S21tNQsxtBeYA0qDWyoRoNqiPcXNuTa3dlumbYzfFBso4L7P%2FtmUrhAPX8aUtpg%2Bv7nXbUaHNhGNv5VXv%2Bcv0kpEUhXd1dWTLkmRJvShukqxrputWyEVcC3RdFgpF9HvIMhOa9pYJ919b%2F13Acl%2BBqjKXEviza5zetttVZfNrJzYBRKla%2BdtktUxaxDqEalJt2CCtLB0cO%2FV%2Fd3FmSOAzoYDnwQ2jNz2uZzGPzOBTQpodsrpqvHd3A3ZSg6hzHniU%2F5hpxguAF2DfxcMUaIHIddWYaR%2BNBx6RK2ygDDxV%2B%2BnEjsSvTHNcx48noFHek4o%2Fz90l6h29kdR9XxpuvxjWFnrfsnj%2FygvvxLXUrSBrJYAiv8mdRoSxTwntVv1a36X3iQiUw8zmIaLMMPBtcIGOqUBmo%2B4CpVsUVO3VvbZAfoMrLxtgcoIitcklDrlB1eSBUQmzoBwRzHcidFRjU0ewrv9364xpLd8dr6yJ%2F7PcojyHlhS11rJJmbauICsjeUR21lPV5aXQUiRTyRZv2xJW5uwZ07Bsl6opsOcsh1S4JytzMf%2F%2FVrru0Y%2F%2BYOeQEwNVVYjlFwaUDBEdD1c55YkuNb%2F8waKXfTsF057fXjlivJCAMhHKBLi&X-Amz-Signature=3ea433bf21972bf9c6afb229bacd9d0fb5d32de4583adcc3ab52fd9d011ba9a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
