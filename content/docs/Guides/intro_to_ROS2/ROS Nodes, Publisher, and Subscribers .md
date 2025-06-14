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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SL2Q4P%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCRd1XtWaj0xTJAkmWZUK%2FQo5klkQO0pdzIruDywMsvdgIgb5HPPTmwSbcuDKuz6t6ZHupJAq0od8fU8EnIoau2qkQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMAwiq1ZPno9RVa4eCrcA2HkMEfXIzE6GqsvDD8FHd4UScgWlynWL%2By4j%2BviiA0dpYGTj0MnUnQLEMlcf6YTMEKjQ90O%2F5VjkIOBnWmd03ZVcEMBGhFd9BdOtXQeehS%2FXiTPzl43heBSLkK845rhiEU4Zz%2F2TrZBNL0fYOHSux9UNhv6NdPncTHtCpjr3lCPzOc9507NfyO7Fte%2FrAKwIkcaVXR%2FxRY8NQZw92KB33FFjndYUi7JYMtenZ73FKKco2UiaRqBMjiVwMaXrN81kmV6FDbRoziLlvf5iScQ33hJv1mb4YDNabyfRHqFcpcSs4mUGkPvsGEJ3K2q59IZNYjxLGezAjVsNa10PZM54QewcKnXBdv1iraCL6eXFzoC911isTWdOqNkqIOihPQqoK0eZogRfhykqsrHjR745MA51VepBh407EmFldSlSeCxiJSlQ%2F8GrZRLhLvdKRUSq%2BIto2h8I5FZw4dGTHuBE3L2t0iBoESXvJawhaB0ACGP5X9uwK7hL8AzO4migCmUi%2FUI27xvvOPD%2B9LKD%2FzJWn4lqjgcWjYn5yIjJOCRpsOwB5WostS%2B5h7wQ7%2FXk3FyKvJ%2Fp8KhkxbHSvLmjnLKOXEhrgPrSWLBCCpOUKVXWfVpoThaS7Z%2FXpMSs773MPLBtcIGOqUB0gt16KCPSwiTvauBUGY105WhXdX0JLnkX%2B4oR6XByPySK7XaFRA1BMUKQbrXB7aYLho21IuX78hHCBJO0DmRx88tvcCrOZp6p1GsKBJfbvzuXYmbtGSAtiQZAzYptEYLaaHvpHjixJi0yEXAuf47aeWF6x6z7aYIB6%2FL2zuRifkpxahY4OPJZdwaJsPaZhFjZJIGyY6vqn6CF8psw3PkZD6JdhK4&X-Amz-Signature=17401c9f21787764cbd45bc8f5b7c312c9e67da8f3e187f88957ce649996ea05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SL2Q4P%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCRd1XtWaj0xTJAkmWZUK%2FQo5klkQO0pdzIruDywMsvdgIgb5HPPTmwSbcuDKuz6t6ZHupJAq0od8fU8EnIoau2qkQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMAwiq1ZPno9RVa4eCrcA2HkMEfXIzE6GqsvDD8FHd4UScgWlynWL%2By4j%2BviiA0dpYGTj0MnUnQLEMlcf6YTMEKjQ90O%2F5VjkIOBnWmd03ZVcEMBGhFd9BdOtXQeehS%2FXiTPzl43heBSLkK845rhiEU4Zz%2F2TrZBNL0fYOHSux9UNhv6NdPncTHtCpjr3lCPzOc9507NfyO7Fte%2FrAKwIkcaVXR%2FxRY8NQZw92KB33FFjndYUi7JYMtenZ73FKKco2UiaRqBMjiVwMaXrN81kmV6FDbRoziLlvf5iScQ33hJv1mb4YDNabyfRHqFcpcSs4mUGkPvsGEJ3K2q59IZNYjxLGezAjVsNa10PZM54QewcKnXBdv1iraCL6eXFzoC911isTWdOqNkqIOihPQqoK0eZogRfhykqsrHjR745MA51VepBh407EmFldSlSeCxiJSlQ%2F8GrZRLhLvdKRUSq%2BIto2h8I5FZw4dGTHuBE3L2t0iBoESXvJawhaB0ACGP5X9uwK7hL8AzO4migCmUi%2FUI27xvvOPD%2B9LKD%2FzJWn4lqjgcWjYn5yIjJOCRpsOwB5WostS%2B5h7wQ7%2FXk3FyKvJ%2Fp8KhkxbHSvLmjnLKOXEhrgPrSWLBCCpOUKVXWfVpoThaS7Z%2FXpMSs773MPLBtcIGOqUB0gt16KCPSwiTvauBUGY105WhXdX0JLnkX%2B4oR6XByPySK7XaFRA1BMUKQbrXB7aYLho21IuX78hHCBJO0DmRx88tvcCrOZp6p1GsKBJfbvzuXYmbtGSAtiQZAzYptEYLaaHvpHjixJi0yEXAuf47aeWF6x6z7aYIB6%2FL2zuRifkpxahY4OPJZdwaJsPaZhFjZJIGyY6vqn6CF8psw3PkZD6JdhK4&X-Amz-Signature=f5b3af5fafa1580619a1e28f20a52e5a7f08bcec7594573750df1d57e3e44b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SL2Q4P%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCRd1XtWaj0xTJAkmWZUK%2FQo5klkQO0pdzIruDywMsvdgIgb5HPPTmwSbcuDKuz6t6ZHupJAq0od8fU8EnIoau2qkQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMAwiq1ZPno9RVa4eCrcA2HkMEfXIzE6GqsvDD8FHd4UScgWlynWL%2By4j%2BviiA0dpYGTj0MnUnQLEMlcf6YTMEKjQ90O%2F5VjkIOBnWmd03ZVcEMBGhFd9BdOtXQeehS%2FXiTPzl43heBSLkK845rhiEU4Zz%2F2TrZBNL0fYOHSux9UNhv6NdPncTHtCpjr3lCPzOc9507NfyO7Fte%2FrAKwIkcaVXR%2FxRY8NQZw92KB33FFjndYUi7JYMtenZ73FKKco2UiaRqBMjiVwMaXrN81kmV6FDbRoziLlvf5iScQ33hJv1mb4YDNabyfRHqFcpcSs4mUGkPvsGEJ3K2q59IZNYjxLGezAjVsNa10PZM54QewcKnXBdv1iraCL6eXFzoC911isTWdOqNkqIOihPQqoK0eZogRfhykqsrHjR745MA51VepBh407EmFldSlSeCxiJSlQ%2F8GrZRLhLvdKRUSq%2BIto2h8I5FZw4dGTHuBE3L2t0iBoESXvJawhaB0ACGP5X9uwK7hL8AzO4migCmUi%2FUI27xvvOPD%2B9LKD%2FzJWn4lqjgcWjYn5yIjJOCRpsOwB5WostS%2B5h7wQ7%2FXk3FyKvJ%2Fp8KhkxbHSvLmjnLKOXEhrgPrSWLBCCpOUKVXWfVpoThaS7Z%2FXpMSs773MPLBtcIGOqUB0gt16KCPSwiTvauBUGY105WhXdX0JLnkX%2B4oR6XByPySK7XaFRA1BMUKQbrXB7aYLho21IuX78hHCBJO0DmRx88tvcCrOZp6p1GsKBJfbvzuXYmbtGSAtiQZAzYptEYLaaHvpHjixJi0yEXAuf47aeWF6x6z7aYIB6%2FL2zuRifkpxahY4OPJZdwaJsPaZhFjZJIGyY6vqn6CF8psw3PkZD6JdhK4&X-Amz-Signature=80994c6013bb0ff634a2d9721421277d9c0a120abdca434aefeb4e2267675bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SL2Q4P%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCRd1XtWaj0xTJAkmWZUK%2FQo5klkQO0pdzIruDywMsvdgIgb5HPPTmwSbcuDKuz6t6ZHupJAq0od8fU8EnIoau2qkQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMAwiq1ZPno9RVa4eCrcA2HkMEfXIzE6GqsvDD8FHd4UScgWlynWL%2By4j%2BviiA0dpYGTj0MnUnQLEMlcf6YTMEKjQ90O%2F5VjkIOBnWmd03ZVcEMBGhFd9BdOtXQeehS%2FXiTPzl43heBSLkK845rhiEU4Zz%2F2TrZBNL0fYOHSux9UNhv6NdPncTHtCpjr3lCPzOc9507NfyO7Fte%2FrAKwIkcaVXR%2FxRY8NQZw92KB33FFjndYUi7JYMtenZ73FKKco2UiaRqBMjiVwMaXrN81kmV6FDbRoziLlvf5iScQ33hJv1mb4YDNabyfRHqFcpcSs4mUGkPvsGEJ3K2q59IZNYjxLGezAjVsNa10PZM54QewcKnXBdv1iraCL6eXFzoC911isTWdOqNkqIOihPQqoK0eZogRfhykqsrHjR745MA51VepBh407EmFldSlSeCxiJSlQ%2F8GrZRLhLvdKRUSq%2BIto2h8I5FZw4dGTHuBE3L2t0iBoESXvJawhaB0ACGP5X9uwK7hL8AzO4migCmUi%2FUI27xvvOPD%2B9LKD%2FzJWn4lqjgcWjYn5yIjJOCRpsOwB5WostS%2B5h7wQ7%2FXk3FyKvJ%2Fp8KhkxbHSvLmjnLKOXEhrgPrSWLBCCpOUKVXWfVpoThaS7Z%2FXpMSs773MPLBtcIGOqUB0gt16KCPSwiTvauBUGY105WhXdX0JLnkX%2B4oR6XByPySK7XaFRA1BMUKQbrXB7aYLho21IuX78hHCBJO0DmRx88tvcCrOZp6p1GsKBJfbvzuXYmbtGSAtiQZAzYptEYLaaHvpHjixJi0yEXAuf47aeWF6x6z7aYIB6%2FL2zuRifkpxahY4OPJZdwaJsPaZhFjZJIGyY6vqn6CF8psw3PkZD6JdhK4&X-Amz-Signature=00e96ca3cbcbdbc8e61c24a2b3c79905f36c66dffed072adcc1a2415f565d21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SL2Q4P%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCRd1XtWaj0xTJAkmWZUK%2FQo5klkQO0pdzIruDywMsvdgIgb5HPPTmwSbcuDKuz6t6ZHupJAq0od8fU8EnIoau2qkQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMAwiq1ZPno9RVa4eCrcA2HkMEfXIzE6GqsvDD8FHd4UScgWlynWL%2By4j%2BviiA0dpYGTj0MnUnQLEMlcf6YTMEKjQ90O%2F5VjkIOBnWmd03ZVcEMBGhFd9BdOtXQeehS%2FXiTPzl43heBSLkK845rhiEU4Zz%2F2TrZBNL0fYOHSux9UNhv6NdPncTHtCpjr3lCPzOc9507NfyO7Fte%2FrAKwIkcaVXR%2FxRY8NQZw92KB33FFjndYUi7JYMtenZ73FKKco2UiaRqBMjiVwMaXrN81kmV6FDbRoziLlvf5iScQ33hJv1mb4YDNabyfRHqFcpcSs4mUGkPvsGEJ3K2q59IZNYjxLGezAjVsNa10PZM54QewcKnXBdv1iraCL6eXFzoC911isTWdOqNkqIOihPQqoK0eZogRfhykqsrHjR745MA51VepBh407EmFldSlSeCxiJSlQ%2F8GrZRLhLvdKRUSq%2BIto2h8I5FZw4dGTHuBE3L2t0iBoESXvJawhaB0ACGP5X9uwK7hL8AzO4migCmUi%2FUI27xvvOPD%2B9LKD%2FzJWn4lqjgcWjYn5yIjJOCRpsOwB5WostS%2B5h7wQ7%2FXk3FyKvJ%2Fp8KhkxbHSvLmjnLKOXEhrgPrSWLBCCpOUKVXWfVpoThaS7Z%2FXpMSs773MPLBtcIGOqUB0gt16KCPSwiTvauBUGY105WhXdX0JLnkX%2B4oR6XByPySK7XaFRA1BMUKQbrXB7aYLho21IuX78hHCBJO0DmRx88tvcCrOZp6p1GsKBJfbvzuXYmbtGSAtiQZAzYptEYLaaHvpHjixJi0yEXAuf47aeWF6x6z7aYIB6%2FL2zuRifkpxahY4OPJZdwaJsPaZhFjZJIGyY6vqn6CF8psw3PkZD6JdhK4&X-Amz-Signature=2f3f0ead868a461119decf6c9eb335de529fc393fe3c554c263a83434ac19d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SL2Q4P%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCRd1XtWaj0xTJAkmWZUK%2FQo5klkQO0pdzIruDywMsvdgIgb5HPPTmwSbcuDKuz6t6ZHupJAq0od8fU8EnIoau2qkQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMAwiq1ZPno9RVa4eCrcA2HkMEfXIzE6GqsvDD8FHd4UScgWlynWL%2By4j%2BviiA0dpYGTj0MnUnQLEMlcf6YTMEKjQ90O%2F5VjkIOBnWmd03ZVcEMBGhFd9BdOtXQeehS%2FXiTPzl43heBSLkK845rhiEU4Zz%2F2TrZBNL0fYOHSux9UNhv6NdPncTHtCpjr3lCPzOc9507NfyO7Fte%2FrAKwIkcaVXR%2FxRY8NQZw92KB33FFjndYUi7JYMtenZ73FKKco2UiaRqBMjiVwMaXrN81kmV6FDbRoziLlvf5iScQ33hJv1mb4YDNabyfRHqFcpcSs4mUGkPvsGEJ3K2q59IZNYjxLGezAjVsNa10PZM54QewcKnXBdv1iraCL6eXFzoC911isTWdOqNkqIOihPQqoK0eZogRfhykqsrHjR745MA51VepBh407EmFldSlSeCxiJSlQ%2F8GrZRLhLvdKRUSq%2BIto2h8I5FZw4dGTHuBE3L2t0iBoESXvJawhaB0ACGP5X9uwK7hL8AzO4migCmUi%2FUI27xvvOPD%2B9LKD%2FzJWn4lqjgcWjYn5yIjJOCRpsOwB5WostS%2B5h7wQ7%2FXk3FyKvJ%2Fp8KhkxbHSvLmjnLKOXEhrgPrSWLBCCpOUKVXWfVpoThaS7Z%2FXpMSs773MPLBtcIGOqUB0gt16KCPSwiTvauBUGY105WhXdX0JLnkX%2B4oR6XByPySK7XaFRA1BMUKQbrXB7aYLho21IuX78hHCBJO0DmRx88tvcCrOZp6p1GsKBJfbvzuXYmbtGSAtiQZAzYptEYLaaHvpHjixJi0yEXAuf47aeWF6x6z7aYIB6%2FL2zuRifkpxahY4OPJZdwaJsPaZhFjZJIGyY6vqn6CF8psw3PkZD6JdhK4&X-Amz-Signature=fd621afa2c1a74aa507d8f51697ff553bca9da3a8509e25fbc91aa0119877bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SL2Q4P%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCRd1XtWaj0xTJAkmWZUK%2FQo5klkQO0pdzIruDywMsvdgIgb5HPPTmwSbcuDKuz6t6ZHupJAq0od8fU8EnIoau2qkQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMAwiq1ZPno9RVa4eCrcA2HkMEfXIzE6GqsvDD8FHd4UScgWlynWL%2By4j%2BviiA0dpYGTj0MnUnQLEMlcf6YTMEKjQ90O%2F5VjkIOBnWmd03ZVcEMBGhFd9BdOtXQeehS%2FXiTPzl43heBSLkK845rhiEU4Zz%2F2TrZBNL0fYOHSux9UNhv6NdPncTHtCpjr3lCPzOc9507NfyO7Fte%2FrAKwIkcaVXR%2FxRY8NQZw92KB33FFjndYUi7JYMtenZ73FKKco2UiaRqBMjiVwMaXrN81kmV6FDbRoziLlvf5iScQ33hJv1mb4YDNabyfRHqFcpcSs4mUGkPvsGEJ3K2q59IZNYjxLGezAjVsNa10PZM54QewcKnXBdv1iraCL6eXFzoC911isTWdOqNkqIOihPQqoK0eZogRfhykqsrHjR745MA51VepBh407EmFldSlSeCxiJSlQ%2F8GrZRLhLvdKRUSq%2BIto2h8I5FZw4dGTHuBE3L2t0iBoESXvJawhaB0ACGP5X9uwK7hL8AzO4migCmUi%2FUI27xvvOPD%2B9LKD%2FzJWn4lqjgcWjYn5yIjJOCRpsOwB5WostS%2B5h7wQ7%2FXk3FyKvJ%2Fp8KhkxbHSvLmjnLKOXEhrgPrSWLBCCpOUKVXWfVpoThaS7Z%2FXpMSs773MPLBtcIGOqUB0gt16KCPSwiTvauBUGY105WhXdX0JLnkX%2B4oR6XByPySK7XaFRA1BMUKQbrXB7aYLho21IuX78hHCBJO0DmRx88tvcCrOZp6p1GsKBJfbvzuXYmbtGSAtiQZAzYptEYLaaHvpHjixJi0yEXAuf47aeWF6x6z7aYIB6%2FL2zuRifkpxahY4OPJZdwaJsPaZhFjZJIGyY6vqn6CF8psw3PkZD6JdhK4&X-Amz-Signature=17ada1fb850e5f3c511d80e244f889f4d32a4668cea4cf437157cae24ba183c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SL2Q4P%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCRd1XtWaj0xTJAkmWZUK%2FQo5klkQO0pdzIruDywMsvdgIgb5HPPTmwSbcuDKuz6t6ZHupJAq0od8fU8EnIoau2qkQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMAwiq1ZPno9RVa4eCrcA2HkMEfXIzE6GqsvDD8FHd4UScgWlynWL%2By4j%2BviiA0dpYGTj0MnUnQLEMlcf6YTMEKjQ90O%2F5VjkIOBnWmd03ZVcEMBGhFd9BdOtXQeehS%2FXiTPzl43heBSLkK845rhiEU4Zz%2F2TrZBNL0fYOHSux9UNhv6NdPncTHtCpjr3lCPzOc9507NfyO7Fte%2FrAKwIkcaVXR%2FxRY8NQZw92KB33FFjndYUi7JYMtenZ73FKKco2UiaRqBMjiVwMaXrN81kmV6FDbRoziLlvf5iScQ33hJv1mb4YDNabyfRHqFcpcSs4mUGkPvsGEJ3K2q59IZNYjxLGezAjVsNa10PZM54QewcKnXBdv1iraCL6eXFzoC911isTWdOqNkqIOihPQqoK0eZogRfhykqsrHjR745MA51VepBh407EmFldSlSeCxiJSlQ%2F8GrZRLhLvdKRUSq%2BIto2h8I5FZw4dGTHuBE3L2t0iBoESXvJawhaB0ACGP5X9uwK7hL8AzO4migCmUi%2FUI27xvvOPD%2B9LKD%2FzJWn4lqjgcWjYn5yIjJOCRpsOwB5WostS%2B5h7wQ7%2FXk3FyKvJ%2Fp8KhkxbHSvLmjnLKOXEhrgPrSWLBCCpOUKVXWfVpoThaS7Z%2FXpMSs773MPLBtcIGOqUB0gt16KCPSwiTvauBUGY105WhXdX0JLnkX%2B4oR6XByPySK7XaFRA1BMUKQbrXB7aYLho21IuX78hHCBJO0DmRx88tvcCrOZp6p1GsKBJfbvzuXYmbtGSAtiQZAzYptEYLaaHvpHjixJi0yEXAuf47aeWF6x6z7aYIB6%2FL2zuRifkpxahY4OPJZdwaJsPaZhFjZJIGyY6vqn6CF8psw3PkZD6JdhK4&X-Amz-Signature=f088ae9dff05dbcce5fd98c77e3127496376bdf3edc8408a003712b677b7e0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
