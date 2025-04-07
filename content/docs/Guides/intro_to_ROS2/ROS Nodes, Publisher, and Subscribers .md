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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GN6FYO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMNCceakb6oXothSX1jgLshij2Lxg2sS%2FF7A74N7PqZAiA8MRh4GojBPTFomf3SHedR%2FEAoailjyWk4W2RI%2FXveiSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM3yegxc775uBPWfO%2BKtwDa9fVG%2BCJNG%2BEAAGVjyUQD57fFOt3wUlNlrRJsuAJdcBEXMCiN1SLuVWTzS7PQXb83P5Mj98xDUXA9QNsHq4GtXDnGZuwIqeAy3cnBkKA1c%2F2bfXTg%2BC29YohqrL4b5tRF4C1UV8g4yezUY3SYOefoRUsyDr6e%2ByEwhbwgiktx0xlypSV4U1ZaPOGp6ibUn6eXBrEN9z87YZpWbdMixQb22cQYN86WJLferw9VhHmM6MGSEGm8%2Bs18bGfJEw1KbYiPL28wP6p0uZdWZOTshEB7%2B2UsdBvts7RhbFXMGPtzBpWgwyOSCeGKabwi0%2F2boNgFfpPdg8GwqRfyiUtZw6dHCB3hRK2EkJQpbbIInETda78bPpKwKEMIilaTuLPuiF56LlHfEv3LoSyuBkg96Za51vyx9BvtifVo95ukjo5%2BMu%2BpjVqKEQDoJ6fIXlU%2BkSkymR0LivJxPu2mhPjHRJhdCoILDb9iktmD6w347iCGNvMqcKqIh6naWwBzE2PmW1rZBy5PPRVfw6yps%2Bl39DL0F%2BBsnAWtgERJggpHKlrjCUhQwImxOBaFoiuu7%2B7Z8bk5wE1WN9pWK7QZhmXgctRmuE4d1V5brIWMbjHz87IE6HP2jjr%2B7PaXXn15Ysw3bbPvwY6pgEM6DYei75qO9zbnt1IKzcL%2Fz4q4ZxBZEJFL5IcPgaiBl4XsXUr1GYEZS8tCL4HC4UOLOi53QilDkvugpC8X6vqwW6P87QK0geNjmIfVLq%2FR%2FKgq1svnxnrUSE3fadhx2cbeBNjvnD6bRQJwqVR27Nj31n6BCTBcyT2jidftZVrVY30%2BEc1ntFbnXiL8Uj8H%2Bwpqt8GLxsm4ZeIR9tPCDGPxZ1ArI7k&X-Amz-Signature=e28f194c30eda52a85e365c8d1d9b0ef24ec6541678cee5fc4abf5d37d834ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GN6FYO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMNCceakb6oXothSX1jgLshij2Lxg2sS%2FF7A74N7PqZAiA8MRh4GojBPTFomf3SHedR%2FEAoailjyWk4W2RI%2FXveiSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM3yegxc775uBPWfO%2BKtwDa9fVG%2BCJNG%2BEAAGVjyUQD57fFOt3wUlNlrRJsuAJdcBEXMCiN1SLuVWTzS7PQXb83P5Mj98xDUXA9QNsHq4GtXDnGZuwIqeAy3cnBkKA1c%2F2bfXTg%2BC29YohqrL4b5tRF4C1UV8g4yezUY3SYOefoRUsyDr6e%2ByEwhbwgiktx0xlypSV4U1ZaPOGp6ibUn6eXBrEN9z87YZpWbdMixQb22cQYN86WJLferw9VhHmM6MGSEGm8%2Bs18bGfJEw1KbYiPL28wP6p0uZdWZOTshEB7%2B2UsdBvts7RhbFXMGPtzBpWgwyOSCeGKabwi0%2F2boNgFfpPdg8GwqRfyiUtZw6dHCB3hRK2EkJQpbbIInETda78bPpKwKEMIilaTuLPuiF56LlHfEv3LoSyuBkg96Za51vyx9BvtifVo95ukjo5%2BMu%2BpjVqKEQDoJ6fIXlU%2BkSkymR0LivJxPu2mhPjHRJhdCoILDb9iktmD6w347iCGNvMqcKqIh6naWwBzE2PmW1rZBy5PPRVfw6yps%2Bl39DL0F%2BBsnAWtgERJggpHKlrjCUhQwImxOBaFoiuu7%2B7Z8bk5wE1WN9pWK7QZhmXgctRmuE4d1V5brIWMbjHz87IE6HP2jjr%2B7PaXXn15Ysw3bbPvwY6pgEM6DYei75qO9zbnt1IKzcL%2Fz4q4ZxBZEJFL5IcPgaiBl4XsXUr1GYEZS8tCL4HC4UOLOi53QilDkvugpC8X6vqwW6P87QK0geNjmIfVLq%2FR%2FKgq1svnxnrUSE3fadhx2cbeBNjvnD6bRQJwqVR27Nj31n6BCTBcyT2jidftZVrVY30%2BEc1ntFbnXiL8Uj8H%2Bwpqt8GLxsm4ZeIR9tPCDGPxZ1ArI7k&X-Amz-Signature=2d462a22298a27c7837c18e88585fdc7d010f44a8e521d171f8372043d3b5d34&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GN6FYO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMNCceakb6oXothSX1jgLshij2Lxg2sS%2FF7A74N7PqZAiA8MRh4GojBPTFomf3SHedR%2FEAoailjyWk4W2RI%2FXveiSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM3yegxc775uBPWfO%2BKtwDa9fVG%2BCJNG%2BEAAGVjyUQD57fFOt3wUlNlrRJsuAJdcBEXMCiN1SLuVWTzS7PQXb83P5Mj98xDUXA9QNsHq4GtXDnGZuwIqeAy3cnBkKA1c%2F2bfXTg%2BC29YohqrL4b5tRF4C1UV8g4yezUY3SYOefoRUsyDr6e%2ByEwhbwgiktx0xlypSV4U1ZaPOGp6ibUn6eXBrEN9z87YZpWbdMixQb22cQYN86WJLferw9VhHmM6MGSEGm8%2Bs18bGfJEw1KbYiPL28wP6p0uZdWZOTshEB7%2B2UsdBvts7RhbFXMGPtzBpWgwyOSCeGKabwi0%2F2boNgFfpPdg8GwqRfyiUtZw6dHCB3hRK2EkJQpbbIInETda78bPpKwKEMIilaTuLPuiF56LlHfEv3LoSyuBkg96Za51vyx9BvtifVo95ukjo5%2BMu%2BpjVqKEQDoJ6fIXlU%2BkSkymR0LivJxPu2mhPjHRJhdCoILDb9iktmD6w347iCGNvMqcKqIh6naWwBzE2PmW1rZBy5PPRVfw6yps%2Bl39DL0F%2BBsnAWtgERJggpHKlrjCUhQwImxOBaFoiuu7%2B7Z8bk5wE1WN9pWK7QZhmXgctRmuE4d1V5brIWMbjHz87IE6HP2jjr%2B7PaXXn15Ysw3bbPvwY6pgEM6DYei75qO9zbnt1IKzcL%2Fz4q4ZxBZEJFL5IcPgaiBl4XsXUr1GYEZS8tCL4HC4UOLOi53QilDkvugpC8X6vqwW6P87QK0geNjmIfVLq%2FR%2FKgq1svnxnrUSE3fadhx2cbeBNjvnD6bRQJwqVR27Nj31n6BCTBcyT2jidftZVrVY30%2BEc1ntFbnXiL8Uj8H%2Bwpqt8GLxsm4ZeIR9tPCDGPxZ1ArI7k&X-Amz-Signature=fe4bd42d48118ee9af855083f3ef7d55183e82107a3aaeea164433e31a4d3509&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GN6FYO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMNCceakb6oXothSX1jgLshij2Lxg2sS%2FF7A74N7PqZAiA8MRh4GojBPTFomf3SHedR%2FEAoailjyWk4W2RI%2FXveiSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM3yegxc775uBPWfO%2BKtwDa9fVG%2BCJNG%2BEAAGVjyUQD57fFOt3wUlNlrRJsuAJdcBEXMCiN1SLuVWTzS7PQXb83P5Mj98xDUXA9QNsHq4GtXDnGZuwIqeAy3cnBkKA1c%2F2bfXTg%2BC29YohqrL4b5tRF4C1UV8g4yezUY3SYOefoRUsyDr6e%2ByEwhbwgiktx0xlypSV4U1ZaPOGp6ibUn6eXBrEN9z87YZpWbdMixQb22cQYN86WJLferw9VhHmM6MGSEGm8%2Bs18bGfJEw1KbYiPL28wP6p0uZdWZOTshEB7%2B2UsdBvts7RhbFXMGPtzBpWgwyOSCeGKabwi0%2F2boNgFfpPdg8GwqRfyiUtZw6dHCB3hRK2EkJQpbbIInETda78bPpKwKEMIilaTuLPuiF56LlHfEv3LoSyuBkg96Za51vyx9BvtifVo95ukjo5%2BMu%2BpjVqKEQDoJ6fIXlU%2BkSkymR0LivJxPu2mhPjHRJhdCoILDb9iktmD6w347iCGNvMqcKqIh6naWwBzE2PmW1rZBy5PPRVfw6yps%2Bl39DL0F%2BBsnAWtgERJggpHKlrjCUhQwImxOBaFoiuu7%2B7Z8bk5wE1WN9pWK7QZhmXgctRmuE4d1V5brIWMbjHz87IE6HP2jjr%2B7PaXXn15Ysw3bbPvwY6pgEM6DYei75qO9zbnt1IKzcL%2Fz4q4ZxBZEJFL5IcPgaiBl4XsXUr1GYEZS8tCL4HC4UOLOi53QilDkvugpC8X6vqwW6P87QK0geNjmIfVLq%2FR%2FKgq1svnxnrUSE3fadhx2cbeBNjvnD6bRQJwqVR27Nj31n6BCTBcyT2jidftZVrVY30%2BEc1ntFbnXiL8Uj8H%2Bwpqt8GLxsm4ZeIR9tPCDGPxZ1ArI7k&X-Amz-Signature=ca730503223a0a3ce4c32165cca855c92ebfae64a254208213a77805a1c305cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GN6FYO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMNCceakb6oXothSX1jgLshij2Lxg2sS%2FF7A74N7PqZAiA8MRh4GojBPTFomf3SHedR%2FEAoailjyWk4W2RI%2FXveiSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM3yegxc775uBPWfO%2BKtwDa9fVG%2BCJNG%2BEAAGVjyUQD57fFOt3wUlNlrRJsuAJdcBEXMCiN1SLuVWTzS7PQXb83P5Mj98xDUXA9QNsHq4GtXDnGZuwIqeAy3cnBkKA1c%2F2bfXTg%2BC29YohqrL4b5tRF4C1UV8g4yezUY3SYOefoRUsyDr6e%2ByEwhbwgiktx0xlypSV4U1ZaPOGp6ibUn6eXBrEN9z87YZpWbdMixQb22cQYN86WJLferw9VhHmM6MGSEGm8%2Bs18bGfJEw1KbYiPL28wP6p0uZdWZOTshEB7%2B2UsdBvts7RhbFXMGPtzBpWgwyOSCeGKabwi0%2F2boNgFfpPdg8GwqRfyiUtZw6dHCB3hRK2EkJQpbbIInETda78bPpKwKEMIilaTuLPuiF56LlHfEv3LoSyuBkg96Za51vyx9BvtifVo95ukjo5%2BMu%2BpjVqKEQDoJ6fIXlU%2BkSkymR0LivJxPu2mhPjHRJhdCoILDb9iktmD6w347iCGNvMqcKqIh6naWwBzE2PmW1rZBy5PPRVfw6yps%2Bl39DL0F%2BBsnAWtgERJggpHKlrjCUhQwImxOBaFoiuu7%2B7Z8bk5wE1WN9pWK7QZhmXgctRmuE4d1V5brIWMbjHz87IE6HP2jjr%2B7PaXXn15Ysw3bbPvwY6pgEM6DYei75qO9zbnt1IKzcL%2Fz4q4ZxBZEJFL5IcPgaiBl4XsXUr1GYEZS8tCL4HC4UOLOi53QilDkvugpC8X6vqwW6P87QK0geNjmIfVLq%2FR%2FKgq1svnxnrUSE3fadhx2cbeBNjvnD6bRQJwqVR27Nj31n6BCTBcyT2jidftZVrVY30%2BEc1ntFbnXiL8Uj8H%2Bwpqt8GLxsm4ZeIR9tPCDGPxZ1ArI7k&X-Amz-Signature=44b95caeab02bb66d5b9667cfefe4e3860c2529a44635025fd1c71d78ef38f22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GN6FYO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMNCceakb6oXothSX1jgLshij2Lxg2sS%2FF7A74N7PqZAiA8MRh4GojBPTFomf3SHedR%2FEAoailjyWk4W2RI%2FXveiSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM3yegxc775uBPWfO%2BKtwDa9fVG%2BCJNG%2BEAAGVjyUQD57fFOt3wUlNlrRJsuAJdcBEXMCiN1SLuVWTzS7PQXb83P5Mj98xDUXA9QNsHq4GtXDnGZuwIqeAy3cnBkKA1c%2F2bfXTg%2BC29YohqrL4b5tRF4C1UV8g4yezUY3SYOefoRUsyDr6e%2ByEwhbwgiktx0xlypSV4U1ZaPOGp6ibUn6eXBrEN9z87YZpWbdMixQb22cQYN86WJLferw9VhHmM6MGSEGm8%2Bs18bGfJEw1KbYiPL28wP6p0uZdWZOTshEB7%2B2UsdBvts7RhbFXMGPtzBpWgwyOSCeGKabwi0%2F2boNgFfpPdg8GwqRfyiUtZw6dHCB3hRK2EkJQpbbIInETda78bPpKwKEMIilaTuLPuiF56LlHfEv3LoSyuBkg96Za51vyx9BvtifVo95ukjo5%2BMu%2BpjVqKEQDoJ6fIXlU%2BkSkymR0LivJxPu2mhPjHRJhdCoILDb9iktmD6w347iCGNvMqcKqIh6naWwBzE2PmW1rZBy5PPRVfw6yps%2Bl39DL0F%2BBsnAWtgERJggpHKlrjCUhQwImxOBaFoiuu7%2B7Z8bk5wE1WN9pWK7QZhmXgctRmuE4d1V5brIWMbjHz87IE6HP2jjr%2B7PaXXn15Ysw3bbPvwY6pgEM6DYei75qO9zbnt1IKzcL%2Fz4q4ZxBZEJFL5IcPgaiBl4XsXUr1GYEZS8tCL4HC4UOLOi53QilDkvugpC8X6vqwW6P87QK0geNjmIfVLq%2FR%2FKgq1svnxnrUSE3fadhx2cbeBNjvnD6bRQJwqVR27Nj31n6BCTBcyT2jidftZVrVY30%2BEc1ntFbnXiL8Uj8H%2Bwpqt8GLxsm4ZeIR9tPCDGPxZ1ArI7k&X-Amz-Signature=53c3227c3ad902b5dbff148e54c81294e8c9a0e99f4f64e694f37ab8335092e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GN6FYO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMNCceakb6oXothSX1jgLshij2Lxg2sS%2FF7A74N7PqZAiA8MRh4GojBPTFomf3SHedR%2FEAoailjyWk4W2RI%2FXveiSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM3yegxc775uBPWfO%2BKtwDa9fVG%2BCJNG%2BEAAGVjyUQD57fFOt3wUlNlrRJsuAJdcBEXMCiN1SLuVWTzS7PQXb83P5Mj98xDUXA9QNsHq4GtXDnGZuwIqeAy3cnBkKA1c%2F2bfXTg%2BC29YohqrL4b5tRF4C1UV8g4yezUY3SYOefoRUsyDr6e%2ByEwhbwgiktx0xlypSV4U1ZaPOGp6ibUn6eXBrEN9z87YZpWbdMixQb22cQYN86WJLferw9VhHmM6MGSEGm8%2Bs18bGfJEw1KbYiPL28wP6p0uZdWZOTshEB7%2B2UsdBvts7RhbFXMGPtzBpWgwyOSCeGKabwi0%2F2boNgFfpPdg8GwqRfyiUtZw6dHCB3hRK2EkJQpbbIInETda78bPpKwKEMIilaTuLPuiF56LlHfEv3LoSyuBkg96Za51vyx9BvtifVo95ukjo5%2BMu%2BpjVqKEQDoJ6fIXlU%2BkSkymR0LivJxPu2mhPjHRJhdCoILDb9iktmD6w347iCGNvMqcKqIh6naWwBzE2PmW1rZBy5PPRVfw6yps%2Bl39DL0F%2BBsnAWtgERJggpHKlrjCUhQwImxOBaFoiuu7%2B7Z8bk5wE1WN9pWK7QZhmXgctRmuE4d1V5brIWMbjHz87IE6HP2jjr%2B7PaXXn15Ysw3bbPvwY6pgEM6DYei75qO9zbnt1IKzcL%2Fz4q4ZxBZEJFL5IcPgaiBl4XsXUr1GYEZS8tCL4HC4UOLOi53QilDkvugpC8X6vqwW6P87QK0geNjmIfVLq%2FR%2FKgq1svnxnrUSE3fadhx2cbeBNjvnD6bRQJwqVR27Nj31n6BCTBcyT2jidftZVrVY30%2BEc1ntFbnXiL8Uj8H%2Bwpqt8GLxsm4ZeIR9tPCDGPxZ1ArI7k&X-Amz-Signature=a9e8ff8d789032ce26943fa180a09825ae3512b9823ff8eb29d96235d116ad72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4GN6FYO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMNCceakb6oXothSX1jgLshij2Lxg2sS%2FF7A74N7PqZAiA8MRh4GojBPTFomf3SHedR%2FEAoailjyWk4W2RI%2FXveiSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM3yegxc775uBPWfO%2BKtwDa9fVG%2BCJNG%2BEAAGVjyUQD57fFOt3wUlNlrRJsuAJdcBEXMCiN1SLuVWTzS7PQXb83P5Mj98xDUXA9QNsHq4GtXDnGZuwIqeAy3cnBkKA1c%2F2bfXTg%2BC29YohqrL4b5tRF4C1UV8g4yezUY3SYOefoRUsyDr6e%2ByEwhbwgiktx0xlypSV4U1ZaPOGp6ibUn6eXBrEN9z87YZpWbdMixQb22cQYN86WJLferw9VhHmM6MGSEGm8%2Bs18bGfJEw1KbYiPL28wP6p0uZdWZOTshEB7%2B2UsdBvts7RhbFXMGPtzBpWgwyOSCeGKabwi0%2F2boNgFfpPdg8GwqRfyiUtZw6dHCB3hRK2EkJQpbbIInETda78bPpKwKEMIilaTuLPuiF56LlHfEv3LoSyuBkg96Za51vyx9BvtifVo95ukjo5%2BMu%2BpjVqKEQDoJ6fIXlU%2BkSkymR0LivJxPu2mhPjHRJhdCoILDb9iktmD6w347iCGNvMqcKqIh6naWwBzE2PmW1rZBy5PPRVfw6yps%2Bl39DL0F%2BBsnAWtgERJggpHKlrjCUhQwImxOBaFoiuu7%2B7Z8bk5wE1WN9pWK7QZhmXgctRmuE4d1V5brIWMbjHz87IE6HP2jjr%2B7PaXXn15Ysw3bbPvwY6pgEM6DYei75qO9zbnt1IKzcL%2Fz4q4ZxBZEJFL5IcPgaiBl4XsXUr1GYEZS8tCL4HC4UOLOi53QilDkvugpC8X6vqwW6P87QK0geNjmIfVLq%2FR%2FKgq1svnxnrUSE3fadhx2cbeBNjvnD6bRQJwqVR27Nj31n6BCTBcyT2jidftZVrVY30%2BEc1ntFbnXiL8Uj8H%2Bwpqt8GLxsm4ZeIR9tPCDGPxZ1ArI7k&X-Amz-Signature=e6c772701a8b3d3e16e37b1b3e8edf97ab60446c7ceeef956c0230129be2ba6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
