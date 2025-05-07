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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSZUX45I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlBdYggBzve9sCA3T9qzPKmcHccgqeD6EEMtXnLCD3QIgBfNF4Rf53Lxn2HHNgaRAu1gBOdMHAWQmnNnG8XrjiWUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHJhx8t%2FZ7tKCE11UircAwHO5Qov0ZzSGYMhQm0ISEf8IELcfxta3OPIYYJ3RBXc0b3AGQyMZGVaeItjFQmhDX5Em1P%2FboPxDyNQXxzVk4D49GAgMJh34NfYhX8rrLRznLu5eavu7tv9iSQ72cmK5l7R08UL1z3aPvSiZYfbCyOxImE6Xuo0hmjH4wExz3s1Xri%2FLdp3U8CeOK15FJoGrzczp4ot2qjKtXXQQyMBkbidD3ECcEng3iQD54GmGNEj%2Ft%2BXfNpB8HrTsJ%2BpqMdCAYrmC12vZhv9NJNfycBexClF5xH%2BnrvuNEexdNcIDo3IVUhn3jvYmCbCKLmK%2F%2BjtqHu5FtuCPZFOaDABY6gdcWYDT2Jq6FB8SzOSowXOpCNfU91o8JnbcPsZdlyW8nO7xUQ4WwUAnH7O1lmoy%2FTzPHYFMlDbJ92Kvyhm27jbqOLTdg1yWS1C6c3HvCNarnAd0CT2%2FgPJ0K0eBCGgLSZpfZy7nKLYj0cgederndsNOfgAdU4klHiOOaK85a0%2Fxzq4rMRZC1Pbe8hi4zZDrII0g4xsVDu0H%2BEX9%2BirHuERpgwSnhDVkDDUsHNRvC5iySKS33Nq5RVsa40jUxbgzEYT4CpRvXsXEfl7VcXED7JfLqKbOXk%2BETE%2Fm9TRhma8MJzQ7cAGOqUBuNv8djrFz5hlj%2BCo%2FQ6kFs0toVrprA0L7YfyZAU%2BvdhHKVik87bUI4%2BcwurajGXcr8H2XRqG07Ny2HYkDfHF4sDwJ3R802Jgeh6dQrkB%2BRLiON2dTvLyGuCWJQXFJCBQ3YMQtsFmJBmUBkr7qZPp9h9gYD11hnbly9s6COjOO02%2BI2qGfhgXf50OBC%2FLYA%2BQG4KfKQO0BCCXhThrbLwlBvt5XrS%2B&X-Amz-Signature=867acc48c19e90bb64db6f8278f7afd8facd19fb1fe06132ea431a5915d7ad9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSZUX45I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlBdYggBzve9sCA3T9qzPKmcHccgqeD6EEMtXnLCD3QIgBfNF4Rf53Lxn2HHNgaRAu1gBOdMHAWQmnNnG8XrjiWUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHJhx8t%2FZ7tKCE11UircAwHO5Qov0ZzSGYMhQm0ISEf8IELcfxta3OPIYYJ3RBXc0b3AGQyMZGVaeItjFQmhDX5Em1P%2FboPxDyNQXxzVk4D49GAgMJh34NfYhX8rrLRznLu5eavu7tv9iSQ72cmK5l7R08UL1z3aPvSiZYfbCyOxImE6Xuo0hmjH4wExz3s1Xri%2FLdp3U8CeOK15FJoGrzczp4ot2qjKtXXQQyMBkbidD3ECcEng3iQD54GmGNEj%2Ft%2BXfNpB8HrTsJ%2BpqMdCAYrmC12vZhv9NJNfycBexClF5xH%2BnrvuNEexdNcIDo3IVUhn3jvYmCbCKLmK%2F%2BjtqHu5FtuCPZFOaDABY6gdcWYDT2Jq6FB8SzOSowXOpCNfU91o8JnbcPsZdlyW8nO7xUQ4WwUAnH7O1lmoy%2FTzPHYFMlDbJ92Kvyhm27jbqOLTdg1yWS1C6c3HvCNarnAd0CT2%2FgPJ0K0eBCGgLSZpfZy7nKLYj0cgederndsNOfgAdU4klHiOOaK85a0%2Fxzq4rMRZC1Pbe8hi4zZDrII0g4xsVDu0H%2BEX9%2BirHuERpgwSnhDVkDDUsHNRvC5iySKS33Nq5RVsa40jUxbgzEYT4CpRvXsXEfl7VcXED7JfLqKbOXk%2BETE%2Fm9TRhma8MJzQ7cAGOqUBuNv8djrFz5hlj%2BCo%2FQ6kFs0toVrprA0L7YfyZAU%2BvdhHKVik87bUI4%2BcwurajGXcr8H2XRqG07Ny2HYkDfHF4sDwJ3R802Jgeh6dQrkB%2BRLiON2dTvLyGuCWJQXFJCBQ3YMQtsFmJBmUBkr7qZPp9h9gYD11hnbly9s6COjOO02%2BI2qGfhgXf50OBC%2FLYA%2BQG4KfKQO0BCCXhThrbLwlBvt5XrS%2B&X-Amz-Signature=a0d2df6e64575a426ae9a3f5772db0d332ed41cbe390f92dda8ad46765fabd94&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSZUX45I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlBdYggBzve9sCA3T9qzPKmcHccgqeD6EEMtXnLCD3QIgBfNF4Rf53Lxn2HHNgaRAu1gBOdMHAWQmnNnG8XrjiWUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHJhx8t%2FZ7tKCE11UircAwHO5Qov0ZzSGYMhQm0ISEf8IELcfxta3OPIYYJ3RBXc0b3AGQyMZGVaeItjFQmhDX5Em1P%2FboPxDyNQXxzVk4D49GAgMJh34NfYhX8rrLRznLu5eavu7tv9iSQ72cmK5l7R08UL1z3aPvSiZYfbCyOxImE6Xuo0hmjH4wExz3s1Xri%2FLdp3U8CeOK15FJoGrzczp4ot2qjKtXXQQyMBkbidD3ECcEng3iQD54GmGNEj%2Ft%2BXfNpB8HrTsJ%2BpqMdCAYrmC12vZhv9NJNfycBexClF5xH%2BnrvuNEexdNcIDo3IVUhn3jvYmCbCKLmK%2F%2BjtqHu5FtuCPZFOaDABY6gdcWYDT2Jq6FB8SzOSowXOpCNfU91o8JnbcPsZdlyW8nO7xUQ4WwUAnH7O1lmoy%2FTzPHYFMlDbJ92Kvyhm27jbqOLTdg1yWS1C6c3HvCNarnAd0CT2%2FgPJ0K0eBCGgLSZpfZy7nKLYj0cgederndsNOfgAdU4klHiOOaK85a0%2Fxzq4rMRZC1Pbe8hi4zZDrII0g4xsVDu0H%2BEX9%2BirHuERpgwSnhDVkDDUsHNRvC5iySKS33Nq5RVsa40jUxbgzEYT4CpRvXsXEfl7VcXED7JfLqKbOXk%2BETE%2Fm9TRhma8MJzQ7cAGOqUBuNv8djrFz5hlj%2BCo%2FQ6kFs0toVrprA0L7YfyZAU%2BvdhHKVik87bUI4%2BcwurajGXcr8H2XRqG07Ny2HYkDfHF4sDwJ3R802Jgeh6dQrkB%2BRLiON2dTvLyGuCWJQXFJCBQ3YMQtsFmJBmUBkr7qZPp9h9gYD11hnbly9s6COjOO02%2BI2qGfhgXf50OBC%2FLYA%2BQG4KfKQO0BCCXhThrbLwlBvt5XrS%2B&X-Amz-Signature=855dea0335c660b6ce3b738f0b1593ce78d7fabb356d1d5b7b4f160f6fccad8c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSZUX45I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlBdYggBzve9sCA3T9qzPKmcHccgqeD6EEMtXnLCD3QIgBfNF4Rf53Lxn2HHNgaRAu1gBOdMHAWQmnNnG8XrjiWUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHJhx8t%2FZ7tKCE11UircAwHO5Qov0ZzSGYMhQm0ISEf8IELcfxta3OPIYYJ3RBXc0b3AGQyMZGVaeItjFQmhDX5Em1P%2FboPxDyNQXxzVk4D49GAgMJh34NfYhX8rrLRznLu5eavu7tv9iSQ72cmK5l7R08UL1z3aPvSiZYfbCyOxImE6Xuo0hmjH4wExz3s1Xri%2FLdp3U8CeOK15FJoGrzczp4ot2qjKtXXQQyMBkbidD3ECcEng3iQD54GmGNEj%2Ft%2BXfNpB8HrTsJ%2BpqMdCAYrmC12vZhv9NJNfycBexClF5xH%2BnrvuNEexdNcIDo3IVUhn3jvYmCbCKLmK%2F%2BjtqHu5FtuCPZFOaDABY6gdcWYDT2Jq6FB8SzOSowXOpCNfU91o8JnbcPsZdlyW8nO7xUQ4WwUAnH7O1lmoy%2FTzPHYFMlDbJ92Kvyhm27jbqOLTdg1yWS1C6c3HvCNarnAd0CT2%2FgPJ0K0eBCGgLSZpfZy7nKLYj0cgederndsNOfgAdU4klHiOOaK85a0%2Fxzq4rMRZC1Pbe8hi4zZDrII0g4xsVDu0H%2BEX9%2BirHuERpgwSnhDVkDDUsHNRvC5iySKS33Nq5RVsa40jUxbgzEYT4CpRvXsXEfl7VcXED7JfLqKbOXk%2BETE%2Fm9TRhma8MJzQ7cAGOqUBuNv8djrFz5hlj%2BCo%2FQ6kFs0toVrprA0L7YfyZAU%2BvdhHKVik87bUI4%2BcwurajGXcr8H2XRqG07Ny2HYkDfHF4sDwJ3R802Jgeh6dQrkB%2BRLiON2dTvLyGuCWJQXFJCBQ3YMQtsFmJBmUBkr7qZPp9h9gYD11hnbly9s6COjOO02%2BI2qGfhgXf50OBC%2FLYA%2BQG4KfKQO0BCCXhThrbLwlBvt5XrS%2B&X-Amz-Signature=2def64ba79ac129a0e4d03e8f427eaf9f0ff438f18d54c2d47642294ec53b5f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSZUX45I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlBdYggBzve9sCA3T9qzPKmcHccgqeD6EEMtXnLCD3QIgBfNF4Rf53Lxn2HHNgaRAu1gBOdMHAWQmnNnG8XrjiWUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHJhx8t%2FZ7tKCE11UircAwHO5Qov0ZzSGYMhQm0ISEf8IELcfxta3OPIYYJ3RBXc0b3AGQyMZGVaeItjFQmhDX5Em1P%2FboPxDyNQXxzVk4D49GAgMJh34NfYhX8rrLRznLu5eavu7tv9iSQ72cmK5l7R08UL1z3aPvSiZYfbCyOxImE6Xuo0hmjH4wExz3s1Xri%2FLdp3U8CeOK15FJoGrzczp4ot2qjKtXXQQyMBkbidD3ECcEng3iQD54GmGNEj%2Ft%2BXfNpB8HrTsJ%2BpqMdCAYrmC12vZhv9NJNfycBexClF5xH%2BnrvuNEexdNcIDo3IVUhn3jvYmCbCKLmK%2F%2BjtqHu5FtuCPZFOaDABY6gdcWYDT2Jq6FB8SzOSowXOpCNfU91o8JnbcPsZdlyW8nO7xUQ4WwUAnH7O1lmoy%2FTzPHYFMlDbJ92Kvyhm27jbqOLTdg1yWS1C6c3HvCNarnAd0CT2%2FgPJ0K0eBCGgLSZpfZy7nKLYj0cgederndsNOfgAdU4klHiOOaK85a0%2Fxzq4rMRZC1Pbe8hi4zZDrII0g4xsVDu0H%2BEX9%2BirHuERpgwSnhDVkDDUsHNRvC5iySKS33Nq5RVsa40jUxbgzEYT4CpRvXsXEfl7VcXED7JfLqKbOXk%2BETE%2Fm9TRhma8MJzQ7cAGOqUBuNv8djrFz5hlj%2BCo%2FQ6kFs0toVrprA0L7YfyZAU%2BvdhHKVik87bUI4%2BcwurajGXcr8H2XRqG07Ny2HYkDfHF4sDwJ3R802Jgeh6dQrkB%2BRLiON2dTvLyGuCWJQXFJCBQ3YMQtsFmJBmUBkr7qZPp9h9gYD11hnbly9s6COjOO02%2BI2qGfhgXf50OBC%2FLYA%2BQG4KfKQO0BCCXhThrbLwlBvt5XrS%2B&X-Amz-Signature=e23441dc073addaef3b3f0c11229344d068ca7250360121f391bac823069bc0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSZUX45I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlBdYggBzve9sCA3T9qzPKmcHccgqeD6EEMtXnLCD3QIgBfNF4Rf53Lxn2HHNgaRAu1gBOdMHAWQmnNnG8XrjiWUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHJhx8t%2FZ7tKCE11UircAwHO5Qov0ZzSGYMhQm0ISEf8IELcfxta3OPIYYJ3RBXc0b3AGQyMZGVaeItjFQmhDX5Em1P%2FboPxDyNQXxzVk4D49GAgMJh34NfYhX8rrLRznLu5eavu7tv9iSQ72cmK5l7R08UL1z3aPvSiZYfbCyOxImE6Xuo0hmjH4wExz3s1Xri%2FLdp3U8CeOK15FJoGrzczp4ot2qjKtXXQQyMBkbidD3ECcEng3iQD54GmGNEj%2Ft%2BXfNpB8HrTsJ%2BpqMdCAYrmC12vZhv9NJNfycBexClF5xH%2BnrvuNEexdNcIDo3IVUhn3jvYmCbCKLmK%2F%2BjtqHu5FtuCPZFOaDABY6gdcWYDT2Jq6FB8SzOSowXOpCNfU91o8JnbcPsZdlyW8nO7xUQ4WwUAnH7O1lmoy%2FTzPHYFMlDbJ92Kvyhm27jbqOLTdg1yWS1C6c3HvCNarnAd0CT2%2FgPJ0K0eBCGgLSZpfZy7nKLYj0cgederndsNOfgAdU4klHiOOaK85a0%2Fxzq4rMRZC1Pbe8hi4zZDrII0g4xsVDu0H%2BEX9%2BirHuERpgwSnhDVkDDUsHNRvC5iySKS33Nq5RVsa40jUxbgzEYT4CpRvXsXEfl7VcXED7JfLqKbOXk%2BETE%2Fm9TRhma8MJzQ7cAGOqUBuNv8djrFz5hlj%2BCo%2FQ6kFs0toVrprA0L7YfyZAU%2BvdhHKVik87bUI4%2BcwurajGXcr8H2XRqG07Ny2HYkDfHF4sDwJ3R802Jgeh6dQrkB%2BRLiON2dTvLyGuCWJQXFJCBQ3YMQtsFmJBmUBkr7qZPp9h9gYD11hnbly9s6COjOO02%2BI2qGfhgXf50OBC%2FLYA%2BQG4KfKQO0BCCXhThrbLwlBvt5XrS%2B&X-Amz-Signature=e54f9b1ce65b73eaee26bbbcc2689b53138e8438e58eb962b1f5cc5fada14066&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSZUX45I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlBdYggBzve9sCA3T9qzPKmcHccgqeD6EEMtXnLCD3QIgBfNF4Rf53Lxn2HHNgaRAu1gBOdMHAWQmnNnG8XrjiWUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHJhx8t%2FZ7tKCE11UircAwHO5Qov0ZzSGYMhQm0ISEf8IELcfxta3OPIYYJ3RBXc0b3AGQyMZGVaeItjFQmhDX5Em1P%2FboPxDyNQXxzVk4D49GAgMJh34NfYhX8rrLRznLu5eavu7tv9iSQ72cmK5l7R08UL1z3aPvSiZYfbCyOxImE6Xuo0hmjH4wExz3s1Xri%2FLdp3U8CeOK15FJoGrzczp4ot2qjKtXXQQyMBkbidD3ECcEng3iQD54GmGNEj%2Ft%2BXfNpB8HrTsJ%2BpqMdCAYrmC12vZhv9NJNfycBexClF5xH%2BnrvuNEexdNcIDo3IVUhn3jvYmCbCKLmK%2F%2BjtqHu5FtuCPZFOaDABY6gdcWYDT2Jq6FB8SzOSowXOpCNfU91o8JnbcPsZdlyW8nO7xUQ4WwUAnH7O1lmoy%2FTzPHYFMlDbJ92Kvyhm27jbqOLTdg1yWS1C6c3HvCNarnAd0CT2%2FgPJ0K0eBCGgLSZpfZy7nKLYj0cgederndsNOfgAdU4klHiOOaK85a0%2Fxzq4rMRZC1Pbe8hi4zZDrII0g4xsVDu0H%2BEX9%2BirHuERpgwSnhDVkDDUsHNRvC5iySKS33Nq5RVsa40jUxbgzEYT4CpRvXsXEfl7VcXED7JfLqKbOXk%2BETE%2Fm9TRhma8MJzQ7cAGOqUBuNv8djrFz5hlj%2BCo%2FQ6kFs0toVrprA0L7YfyZAU%2BvdhHKVik87bUI4%2BcwurajGXcr8H2XRqG07Ny2HYkDfHF4sDwJ3R802Jgeh6dQrkB%2BRLiON2dTvLyGuCWJQXFJCBQ3YMQtsFmJBmUBkr7qZPp9h9gYD11hnbly9s6COjOO02%2BI2qGfhgXf50OBC%2FLYA%2BQG4KfKQO0BCCXhThrbLwlBvt5XrS%2B&X-Amz-Signature=ef71daf65d8ca461d54e7f117a8b3624e332154dc84a9fa481c63188eedb2886&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSZUX45I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMlBdYggBzve9sCA3T9qzPKmcHccgqeD6EEMtXnLCD3QIgBfNF4Rf53Lxn2HHNgaRAu1gBOdMHAWQmnNnG8XrjiWUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHJhx8t%2FZ7tKCE11UircAwHO5Qov0ZzSGYMhQm0ISEf8IELcfxta3OPIYYJ3RBXc0b3AGQyMZGVaeItjFQmhDX5Em1P%2FboPxDyNQXxzVk4D49GAgMJh34NfYhX8rrLRznLu5eavu7tv9iSQ72cmK5l7R08UL1z3aPvSiZYfbCyOxImE6Xuo0hmjH4wExz3s1Xri%2FLdp3U8CeOK15FJoGrzczp4ot2qjKtXXQQyMBkbidD3ECcEng3iQD54GmGNEj%2Ft%2BXfNpB8HrTsJ%2BpqMdCAYrmC12vZhv9NJNfycBexClF5xH%2BnrvuNEexdNcIDo3IVUhn3jvYmCbCKLmK%2F%2BjtqHu5FtuCPZFOaDABY6gdcWYDT2Jq6FB8SzOSowXOpCNfU91o8JnbcPsZdlyW8nO7xUQ4WwUAnH7O1lmoy%2FTzPHYFMlDbJ92Kvyhm27jbqOLTdg1yWS1C6c3HvCNarnAd0CT2%2FgPJ0K0eBCGgLSZpfZy7nKLYj0cgederndsNOfgAdU4klHiOOaK85a0%2Fxzq4rMRZC1Pbe8hi4zZDrII0g4xsVDu0H%2BEX9%2BirHuERpgwSnhDVkDDUsHNRvC5iySKS33Nq5RVsa40jUxbgzEYT4CpRvXsXEfl7VcXED7JfLqKbOXk%2BETE%2Fm9TRhma8MJzQ7cAGOqUBuNv8djrFz5hlj%2BCo%2FQ6kFs0toVrprA0L7YfyZAU%2BvdhHKVik87bUI4%2BcwurajGXcr8H2XRqG07Ny2HYkDfHF4sDwJ3R802Jgeh6dQrkB%2BRLiON2dTvLyGuCWJQXFJCBQ3YMQtsFmJBmUBkr7qZPp9h9gYD11hnbly9s6COjOO02%2BI2qGfhgXf50OBC%2FLYA%2BQG4KfKQO0BCCXhThrbLwlBvt5XrS%2B&X-Amz-Signature=cdaedc53907370f5578b3a9c18951665addb4a0b579fa4f561076c4f077ac69f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
