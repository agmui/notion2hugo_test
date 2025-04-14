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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRS7S5O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FnItkx44BW6qWNlUOtg4FVtBqhA7UgymRbY%2FyX3qOzwIgKAua9LHT7TUIl3NL828OgBmYEJ1egXMZ77ExKmU95egq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE2%2BCs9Y3pEXfbaBYSrcA05SLUFIwUTBqmFo%2FzY%2FMGUiSPwoDeEHGDlDJcHZOpoMcjH9RdUaRwStnvYfj%2FA0B%2BAoq%2B1H0wvPHpzs0n6Tu%2FDwj3b2Yg2A6w7oWXyRwwctOjbYBhL%2BUaC4vteEEj5oZzqT%2BAzrjQ6XTdE9dlKcdkzfceeHnEl91%2FSlV3AVf%2BtQMvEqo3g95fazY1v5koJmjutomOdyNZgfe6ziTFanooFLfPgMdiULQvMUtJgyn73Rha3Pb%2FSZOgkhXqKL3oRk3fHhffVngUnC7JpWsn9xGt02z0JMFoGD6CV3Gn44dipB%2FyzvoPondGgphBayorYan%2FYQk1NZFMZzrRozh65hinjqneWj9%2BFYLRrzj7NHDBNPBx1j8T9RIv6MVJ7IYqHUE%2Fr5Ef0hQYaiFCEFVC0wVMCDeJOAKwKMkncdlVYK1FgwGl6KTuxP1CPXgGmWYzkS%2FzhCfK4if0uq2Mjwh8%2B4rqSzS7wvNxp7kguHyIuUDiBXUhM%2FarOhYf%2FL47vheURYmAZX23mPG70%2Bfh33bGLV5hRFxZVEQoHR6NkZzdMSCK4FXk0j3O6QaCEMTd2PtrUnYxu99cFyRIjXl5MvmMHoRQhZpRg5ePfTVyVSWrJjzAHh3J95d5MmwMQaksq2MJWV9b8GOqUBb51TuThPr82ZFTSUpJlCxNnXbo%2FUUMaf5QDAvPsAU7eApUy59TmNq9tIFjNuXOHLxCPa2eGgL%2BeJrLHqYIIe6mLiL2p8BP98uLWCQ23aQwOL0vSbudqvq78h9h1k5y7wXDoFIusdI2ug8d8%2BxoQj7FoAzAippcycR7btNcIKiuHl6ZIc3QxpoepLfEsiWA4mlXIw8GsKAndWac%2But1XMV47fADkY&X-Amz-Signature=3ac4130984aba349564d648efa072aeef11b09841fc1d4d75edcc768b044522e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRS7S5O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FnItkx44BW6qWNlUOtg4FVtBqhA7UgymRbY%2FyX3qOzwIgKAua9LHT7TUIl3NL828OgBmYEJ1egXMZ77ExKmU95egq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE2%2BCs9Y3pEXfbaBYSrcA05SLUFIwUTBqmFo%2FzY%2FMGUiSPwoDeEHGDlDJcHZOpoMcjH9RdUaRwStnvYfj%2FA0B%2BAoq%2B1H0wvPHpzs0n6Tu%2FDwj3b2Yg2A6w7oWXyRwwctOjbYBhL%2BUaC4vteEEj5oZzqT%2BAzrjQ6XTdE9dlKcdkzfceeHnEl91%2FSlV3AVf%2BtQMvEqo3g95fazY1v5koJmjutomOdyNZgfe6ziTFanooFLfPgMdiULQvMUtJgyn73Rha3Pb%2FSZOgkhXqKL3oRk3fHhffVngUnC7JpWsn9xGt02z0JMFoGD6CV3Gn44dipB%2FyzvoPondGgphBayorYan%2FYQk1NZFMZzrRozh65hinjqneWj9%2BFYLRrzj7NHDBNPBx1j8T9RIv6MVJ7IYqHUE%2Fr5Ef0hQYaiFCEFVC0wVMCDeJOAKwKMkncdlVYK1FgwGl6KTuxP1CPXgGmWYzkS%2FzhCfK4if0uq2Mjwh8%2B4rqSzS7wvNxp7kguHyIuUDiBXUhM%2FarOhYf%2FL47vheURYmAZX23mPG70%2Bfh33bGLV5hRFxZVEQoHR6NkZzdMSCK4FXk0j3O6QaCEMTd2PtrUnYxu99cFyRIjXl5MvmMHoRQhZpRg5ePfTVyVSWrJjzAHh3J95d5MmwMQaksq2MJWV9b8GOqUBb51TuThPr82ZFTSUpJlCxNnXbo%2FUUMaf5QDAvPsAU7eApUy59TmNq9tIFjNuXOHLxCPa2eGgL%2BeJrLHqYIIe6mLiL2p8BP98uLWCQ23aQwOL0vSbudqvq78h9h1k5y7wXDoFIusdI2ug8d8%2BxoQj7FoAzAippcycR7btNcIKiuHl6ZIc3QxpoepLfEsiWA4mlXIw8GsKAndWac%2But1XMV47fADkY&X-Amz-Signature=dd9991f98ef8bf01310bdb3f0d798e8cf79602dc7dc31933cfe382a962bc0457&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRS7S5O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FnItkx44BW6qWNlUOtg4FVtBqhA7UgymRbY%2FyX3qOzwIgKAua9LHT7TUIl3NL828OgBmYEJ1egXMZ77ExKmU95egq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE2%2BCs9Y3pEXfbaBYSrcA05SLUFIwUTBqmFo%2FzY%2FMGUiSPwoDeEHGDlDJcHZOpoMcjH9RdUaRwStnvYfj%2FA0B%2BAoq%2B1H0wvPHpzs0n6Tu%2FDwj3b2Yg2A6w7oWXyRwwctOjbYBhL%2BUaC4vteEEj5oZzqT%2BAzrjQ6XTdE9dlKcdkzfceeHnEl91%2FSlV3AVf%2BtQMvEqo3g95fazY1v5koJmjutomOdyNZgfe6ziTFanooFLfPgMdiULQvMUtJgyn73Rha3Pb%2FSZOgkhXqKL3oRk3fHhffVngUnC7JpWsn9xGt02z0JMFoGD6CV3Gn44dipB%2FyzvoPondGgphBayorYan%2FYQk1NZFMZzrRozh65hinjqneWj9%2BFYLRrzj7NHDBNPBx1j8T9RIv6MVJ7IYqHUE%2Fr5Ef0hQYaiFCEFVC0wVMCDeJOAKwKMkncdlVYK1FgwGl6KTuxP1CPXgGmWYzkS%2FzhCfK4if0uq2Mjwh8%2B4rqSzS7wvNxp7kguHyIuUDiBXUhM%2FarOhYf%2FL47vheURYmAZX23mPG70%2Bfh33bGLV5hRFxZVEQoHR6NkZzdMSCK4FXk0j3O6QaCEMTd2PtrUnYxu99cFyRIjXl5MvmMHoRQhZpRg5ePfTVyVSWrJjzAHh3J95d5MmwMQaksq2MJWV9b8GOqUBb51TuThPr82ZFTSUpJlCxNnXbo%2FUUMaf5QDAvPsAU7eApUy59TmNq9tIFjNuXOHLxCPa2eGgL%2BeJrLHqYIIe6mLiL2p8BP98uLWCQ23aQwOL0vSbudqvq78h9h1k5y7wXDoFIusdI2ug8d8%2BxoQj7FoAzAippcycR7btNcIKiuHl6ZIc3QxpoepLfEsiWA4mlXIw8GsKAndWac%2But1XMV47fADkY&X-Amz-Signature=667633c27ebdb6e1f790f7132bf5df1f67afe173cc9290284c57a937c0b62bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRS7S5O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FnItkx44BW6qWNlUOtg4FVtBqhA7UgymRbY%2FyX3qOzwIgKAua9LHT7TUIl3NL828OgBmYEJ1egXMZ77ExKmU95egq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE2%2BCs9Y3pEXfbaBYSrcA05SLUFIwUTBqmFo%2FzY%2FMGUiSPwoDeEHGDlDJcHZOpoMcjH9RdUaRwStnvYfj%2FA0B%2BAoq%2B1H0wvPHpzs0n6Tu%2FDwj3b2Yg2A6w7oWXyRwwctOjbYBhL%2BUaC4vteEEj5oZzqT%2BAzrjQ6XTdE9dlKcdkzfceeHnEl91%2FSlV3AVf%2BtQMvEqo3g95fazY1v5koJmjutomOdyNZgfe6ziTFanooFLfPgMdiULQvMUtJgyn73Rha3Pb%2FSZOgkhXqKL3oRk3fHhffVngUnC7JpWsn9xGt02z0JMFoGD6CV3Gn44dipB%2FyzvoPondGgphBayorYan%2FYQk1NZFMZzrRozh65hinjqneWj9%2BFYLRrzj7NHDBNPBx1j8T9RIv6MVJ7IYqHUE%2Fr5Ef0hQYaiFCEFVC0wVMCDeJOAKwKMkncdlVYK1FgwGl6KTuxP1CPXgGmWYzkS%2FzhCfK4if0uq2Mjwh8%2B4rqSzS7wvNxp7kguHyIuUDiBXUhM%2FarOhYf%2FL47vheURYmAZX23mPG70%2Bfh33bGLV5hRFxZVEQoHR6NkZzdMSCK4FXk0j3O6QaCEMTd2PtrUnYxu99cFyRIjXl5MvmMHoRQhZpRg5ePfTVyVSWrJjzAHh3J95d5MmwMQaksq2MJWV9b8GOqUBb51TuThPr82ZFTSUpJlCxNnXbo%2FUUMaf5QDAvPsAU7eApUy59TmNq9tIFjNuXOHLxCPa2eGgL%2BeJrLHqYIIe6mLiL2p8BP98uLWCQ23aQwOL0vSbudqvq78h9h1k5y7wXDoFIusdI2ug8d8%2BxoQj7FoAzAippcycR7btNcIKiuHl6ZIc3QxpoepLfEsiWA4mlXIw8GsKAndWac%2But1XMV47fADkY&X-Amz-Signature=8fe29e79e9635d5498628674b034bcc92902993db536206d88cb78380a09a038&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRS7S5O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FnItkx44BW6qWNlUOtg4FVtBqhA7UgymRbY%2FyX3qOzwIgKAua9LHT7TUIl3NL828OgBmYEJ1egXMZ77ExKmU95egq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE2%2BCs9Y3pEXfbaBYSrcA05SLUFIwUTBqmFo%2FzY%2FMGUiSPwoDeEHGDlDJcHZOpoMcjH9RdUaRwStnvYfj%2FA0B%2BAoq%2B1H0wvPHpzs0n6Tu%2FDwj3b2Yg2A6w7oWXyRwwctOjbYBhL%2BUaC4vteEEj5oZzqT%2BAzrjQ6XTdE9dlKcdkzfceeHnEl91%2FSlV3AVf%2BtQMvEqo3g95fazY1v5koJmjutomOdyNZgfe6ziTFanooFLfPgMdiULQvMUtJgyn73Rha3Pb%2FSZOgkhXqKL3oRk3fHhffVngUnC7JpWsn9xGt02z0JMFoGD6CV3Gn44dipB%2FyzvoPondGgphBayorYan%2FYQk1NZFMZzrRozh65hinjqneWj9%2BFYLRrzj7NHDBNPBx1j8T9RIv6MVJ7IYqHUE%2Fr5Ef0hQYaiFCEFVC0wVMCDeJOAKwKMkncdlVYK1FgwGl6KTuxP1CPXgGmWYzkS%2FzhCfK4if0uq2Mjwh8%2B4rqSzS7wvNxp7kguHyIuUDiBXUhM%2FarOhYf%2FL47vheURYmAZX23mPG70%2Bfh33bGLV5hRFxZVEQoHR6NkZzdMSCK4FXk0j3O6QaCEMTd2PtrUnYxu99cFyRIjXl5MvmMHoRQhZpRg5ePfTVyVSWrJjzAHh3J95d5MmwMQaksq2MJWV9b8GOqUBb51TuThPr82ZFTSUpJlCxNnXbo%2FUUMaf5QDAvPsAU7eApUy59TmNq9tIFjNuXOHLxCPa2eGgL%2BeJrLHqYIIe6mLiL2p8BP98uLWCQ23aQwOL0vSbudqvq78h9h1k5y7wXDoFIusdI2ug8d8%2BxoQj7FoAzAippcycR7btNcIKiuHl6ZIc3QxpoepLfEsiWA4mlXIw8GsKAndWac%2But1XMV47fADkY&X-Amz-Signature=91b925e22ab29075fdc056ef8c71c27fdae8335d2d946c56260892e0d695f378&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRS7S5O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FnItkx44BW6qWNlUOtg4FVtBqhA7UgymRbY%2FyX3qOzwIgKAua9LHT7TUIl3NL828OgBmYEJ1egXMZ77ExKmU95egq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE2%2BCs9Y3pEXfbaBYSrcA05SLUFIwUTBqmFo%2FzY%2FMGUiSPwoDeEHGDlDJcHZOpoMcjH9RdUaRwStnvYfj%2FA0B%2BAoq%2B1H0wvPHpzs0n6Tu%2FDwj3b2Yg2A6w7oWXyRwwctOjbYBhL%2BUaC4vteEEj5oZzqT%2BAzrjQ6XTdE9dlKcdkzfceeHnEl91%2FSlV3AVf%2BtQMvEqo3g95fazY1v5koJmjutomOdyNZgfe6ziTFanooFLfPgMdiULQvMUtJgyn73Rha3Pb%2FSZOgkhXqKL3oRk3fHhffVngUnC7JpWsn9xGt02z0JMFoGD6CV3Gn44dipB%2FyzvoPondGgphBayorYan%2FYQk1NZFMZzrRozh65hinjqneWj9%2BFYLRrzj7NHDBNPBx1j8T9RIv6MVJ7IYqHUE%2Fr5Ef0hQYaiFCEFVC0wVMCDeJOAKwKMkncdlVYK1FgwGl6KTuxP1CPXgGmWYzkS%2FzhCfK4if0uq2Mjwh8%2B4rqSzS7wvNxp7kguHyIuUDiBXUhM%2FarOhYf%2FL47vheURYmAZX23mPG70%2Bfh33bGLV5hRFxZVEQoHR6NkZzdMSCK4FXk0j3O6QaCEMTd2PtrUnYxu99cFyRIjXl5MvmMHoRQhZpRg5ePfTVyVSWrJjzAHh3J95d5MmwMQaksq2MJWV9b8GOqUBb51TuThPr82ZFTSUpJlCxNnXbo%2FUUMaf5QDAvPsAU7eApUy59TmNq9tIFjNuXOHLxCPa2eGgL%2BeJrLHqYIIe6mLiL2p8BP98uLWCQ23aQwOL0vSbudqvq78h9h1k5y7wXDoFIusdI2ug8d8%2BxoQj7FoAzAippcycR7btNcIKiuHl6ZIc3QxpoepLfEsiWA4mlXIw8GsKAndWac%2But1XMV47fADkY&X-Amz-Signature=d428a9986f72fe43c96cfe70d7788515a96cc65b487cd5c2c3205549a861118c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRS7S5O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FnItkx44BW6qWNlUOtg4FVtBqhA7UgymRbY%2FyX3qOzwIgKAua9LHT7TUIl3NL828OgBmYEJ1egXMZ77ExKmU95egq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE2%2BCs9Y3pEXfbaBYSrcA05SLUFIwUTBqmFo%2FzY%2FMGUiSPwoDeEHGDlDJcHZOpoMcjH9RdUaRwStnvYfj%2FA0B%2BAoq%2B1H0wvPHpzs0n6Tu%2FDwj3b2Yg2A6w7oWXyRwwctOjbYBhL%2BUaC4vteEEj5oZzqT%2BAzrjQ6XTdE9dlKcdkzfceeHnEl91%2FSlV3AVf%2BtQMvEqo3g95fazY1v5koJmjutomOdyNZgfe6ziTFanooFLfPgMdiULQvMUtJgyn73Rha3Pb%2FSZOgkhXqKL3oRk3fHhffVngUnC7JpWsn9xGt02z0JMFoGD6CV3Gn44dipB%2FyzvoPondGgphBayorYan%2FYQk1NZFMZzrRozh65hinjqneWj9%2BFYLRrzj7NHDBNPBx1j8T9RIv6MVJ7IYqHUE%2Fr5Ef0hQYaiFCEFVC0wVMCDeJOAKwKMkncdlVYK1FgwGl6KTuxP1CPXgGmWYzkS%2FzhCfK4if0uq2Mjwh8%2B4rqSzS7wvNxp7kguHyIuUDiBXUhM%2FarOhYf%2FL47vheURYmAZX23mPG70%2Bfh33bGLV5hRFxZVEQoHR6NkZzdMSCK4FXk0j3O6QaCEMTd2PtrUnYxu99cFyRIjXl5MvmMHoRQhZpRg5ePfTVyVSWrJjzAHh3J95d5MmwMQaksq2MJWV9b8GOqUBb51TuThPr82ZFTSUpJlCxNnXbo%2FUUMaf5QDAvPsAU7eApUy59TmNq9tIFjNuXOHLxCPa2eGgL%2BeJrLHqYIIe6mLiL2p8BP98uLWCQ23aQwOL0vSbudqvq78h9h1k5y7wXDoFIusdI2ug8d8%2BxoQj7FoAzAippcycR7btNcIKiuHl6ZIc3QxpoepLfEsiWA4mlXIw8GsKAndWac%2But1XMV47fADkY&X-Amz-Signature=a0c007a8e18fdbe36756b83a66f430b5e59a779fda1a888d30e817f99e2a3d94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRS7S5O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FnItkx44BW6qWNlUOtg4FVtBqhA7UgymRbY%2FyX3qOzwIgKAua9LHT7TUIl3NL828OgBmYEJ1egXMZ77ExKmU95egq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE2%2BCs9Y3pEXfbaBYSrcA05SLUFIwUTBqmFo%2FzY%2FMGUiSPwoDeEHGDlDJcHZOpoMcjH9RdUaRwStnvYfj%2FA0B%2BAoq%2B1H0wvPHpzs0n6Tu%2FDwj3b2Yg2A6w7oWXyRwwctOjbYBhL%2BUaC4vteEEj5oZzqT%2BAzrjQ6XTdE9dlKcdkzfceeHnEl91%2FSlV3AVf%2BtQMvEqo3g95fazY1v5koJmjutomOdyNZgfe6ziTFanooFLfPgMdiULQvMUtJgyn73Rha3Pb%2FSZOgkhXqKL3oRk3fHhffVngUnC7JpWsn9xGt02z0JMFoGD6CV3Gn44dipB%2FyzvoPondGgphBayorYan%2FYQk1NZFMZzrRozh65hinjqneWj9%2BFYLRrzj7NHDBNPBx1j8T9RIv6MVJ7IYqHUE%2Fr5Ef0hQYaiFCEFVC0wVMCDeJOAKwKMkncdlVYK1FgwGl6KTuxP1CPXgGmWYzkS%2FzhCfK4if0uq2Mjwh8%2B4rqSzS7wvNxp7kguHyIuUDiBXUhM%2FarOhYf%2FL47vheURYmAZX23mPG70%2Bfh33bGLV5hRFxZVEQoHR6NkZzdMSCK4FXk0j3O6QaCEMTd2PtrUnYxu99cFyRIjXl5MvmMHoRQhZpRg5ePfTVyVSWrJjzAHh3J95d5MmwMQaksq2MJWV9b8GOqUBb51TuThPr82ZFTSUpJlCxNnXbo%2FUUMaf5QDAvPsAU7eApUy59TmNq9tIFjNuXOHLxCPa2eGgL%2BeJrLHqYIIe6mLiL2p8BP98uLWCQ23aQwOL0vSbudqvq78h9h1k5y7wXDoFIusdI2ug8d8%2BxoQj7FoAzAippcycR7btNcIKiuHl6ZIc3QxpoepLfEsiWA4mlXIw8GsKAndWac%2But1XMV47fADkY&X-Amz-Signature=815368a0d832b72e0362c7b48a29b5e9257d2dcaa84ac6df16a7af4767f4d99c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
