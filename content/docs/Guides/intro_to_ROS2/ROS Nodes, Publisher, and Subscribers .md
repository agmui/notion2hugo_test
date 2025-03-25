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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V63XD27L%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJVo3QEIafeBw%2FSYDo%2BRHOo02%2BCVsGjbc42AIU%2BJzTxAIhAIIP5qDMI16nbyVGEN7bYgbz%2FPpDbjfVOX7nh6q%2FgvIPKv8DCBgQABoMNjM3NDIzMTgzODA1IgzZyA1oOFHHIe%2BpPb4q3AP2PnYwu%2B%2Bz1atJ9ZvHHs5aTUZzC7g2foHhCAM0HYQLWi6lbdux0gNJsiqco%2BE3R7RbLZu8X56LCoJNqeoK%2F1mu5RjY6ZCScX%2B7Lu%2F9x%2FrxAu1TPqI8dtEc%2FQURtiRBKyQo2PRa%2FzmZ0I0q2Cz5aGrjCT8jrH1AxLkp2bsOpl5kgBRySpEioy2YuV7GkT39gEaK9EoMMDZTUn38nqF%2FoaqI4iCRO3OphLN4xUrd%2FiAdd8seNKBVkRiK7IpWTCt%2Bqrty7rRfru5f8JUaCs142QfqNzcjAkpgGHMgaKEue832h0LsmaRMIDZ3Orh%2BRhZMDoyyspR6JOMD99uIOqRWfCKUKmcGI9vz%2Fjrx%2FefWs%2BZy2CF9LtFIqOpU7dSy7GCN2mKHtIaYDm6UAH72%2BHqZC3aypUOBWc%2Fizj%2FFw6UVP1xe3q8LWZaMry2ATtOVfe6vtV%2B80%2FOpyX%2FbOF%2FaihIWdPwzPkuHSHkxeUNEdkANOjUC3E2Lj3O9Hp2grdjxVP9GP9LZfYVMJsMzb500EclIr5kDoUvWdKmqp%2Bv%2BojGYPOtzzHTtg8XlRLzO35wlzeU%2BvzlkwiZn4k5dCLNlcwggML9AYVSrcGnw0AUBbhOMk%2F4DaLiIrrrjO%2FGeOlzKnTD0hYu%2FBjqkAf7VS8XzfjzdNhw5XGlVCOfE%2B4H9VRws%2Ftx8fNtaPTAekfoh7XBRXQP8%2BmXdv%2Fzw64hsocC%2BOWhkS7cw7nB%2FXQdIaDmA3C1l9MCVZ9D%2F0wWyjHVQt2vYGvGQ12CcTPI%2B0AX21ynfm19dMmBYJNgREVqzBVQrOjMuIsvjE2Kg94fcQtm%2FAncnVDSy2rKlFRcKOWXvJgzHRHkAM%2FfQAnWHvmsWwYh0&X-Amz-Signature=59909ef4e8146c98e17d8ff1d7480307edcce89248c84a5fd45ca0e6d0419b16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V63XD27L%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJVo3QEIafeBw%2FSYDo%2BRHOo02%2BCVsGjbc42AIU%2BJzTxAIhAIIP5qDMI16nbyVGEN7bYgbz%2FPpDbjfVOX7nh6q%2FgvIPKv8DCBgQABoMNjM3NDIzMTgzODA1IgzZyA1oOFHHIe%2BpPb4q3AP2PnYwu%2B%2Bz1atJ9ZvHHs5aTUZzC7g2foHhCAM0HYQLWi6lbdux0gNJsiqco%2BE3R7RbLZu8X56LCoJNqeoK%2F1mu5RjY6ZCScX%2B7Lu%2F9x%2FrxAu1TPqI8dtEc%2FQURtiRBKyQo2PRa%2FzmZ0I0q2Cz5aGrjCT8jrH1AxLkp2bsOpl5kgBRySpEioy2YuV7GkT39gEaK9EoMMDZTUn38nqF%2FoaqI4iCRO3OphLN4xUrd%2FiAdd8seNKBVkRiK7IpWTCt%2Bqrty7rRfru5f8JUaCs142QfqNzcjAkpgGHMgaKEue832h0LsmaRMIDZ3Orh%2BRhZMDoyyspR6JOMD99uIOqRWfCKUKmcGI9vz%2Fjrx%2FefWs%2BZy2CF9LtFIqOpU7dSy7GCN2mKHtIaYDm6UAH72%2BHqZC3aypUOBWc%2Fizj%2FFw6UVP1xe3q8LWZaMry2ATtOVfe6vtV%2B80%2FOpyX%2FbOF%2FaihIWdPwzPkuHSHkxeUNEdkANOjUC3E2Lj3O9Hp2grdjxVP9GP9LZfYVMJsMzb500EclIr5kDoUvWdKmqp%2Bv%2BojGYPOtzzHTtg8XlRLzO35wlzeU%2BvzlkwiZn4k5dCLNlcwggML9AYVSrcGnw0AUBbhOMk%2F4DaLiIrrrjO%2FGeOlzKnTD0hYu%2FBjqkAf7VS8XzfjzdNhw5XGlVCOfE%2B4H9VRws%2Ftx8fNtaPTAekfoh7XBRXQP8%2BmXdv%2Fzw64hsocC%2BOWhkS7cw7nB%2FXQdIaDmA3C1l9MCVZ9D%2F0wWyjHVQt2vYGvGQ12CcTPI%2B0AX21ynfm19dMmBYJNgREVqzBVQrOjMuIsvjE2Kg94fcQtm%2FAncnVDSy2rKlFRcKOWXvJgzHRHkAM%2FfQAnWHvmsWwYh0&X-Amz-Signature=1a13ebdc4f5a72ed976e5cbdb82d85abc9bac4dcdc8a3806e2c66f002f33c95c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V63XD27L%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJVo3QEIafeBw%2FSYDo%2BRHOo02%2BCVsGjbc42AIU%2BJzTxAIhAIIP5qDMI16nbyVGEN7bYgbz%2FPpDbjfVOX7nh6q%2FgvIPKv8DCBgQABoMNjM3NDIzMTgzODA1IgzZyA1oOFHHIe%2BpPb4q3AP2PnYwu%2B%2Bz1atJ9ZvHHs5aTUZzC7g2foHhCAM0HYQLWi6lbdux0gNJsiqco%2BE3R7RbLZu8X56LCoJNqeoK%2F1mu5RjY6ZCScX%2B7Lu%2F9x%2FrxAu1TPqI8dtEc%2FQURtiRBKyQo2PRa%2FzmZ0I0q2Cz5aGrjCT8jrH1AxLkp2bsOpl5kgBRySpEioy2YuV7GkT39gEaK9EoMMDZTUn38nqF%2FoaqI4iCRO3OphLN4xUrd%2FiAdd8seNKBVkRiK7IpWTCt%2Bqrty7rRfru5f8JUaCs142QfqNzcjAkpgGHMgaKEue832h0LsmaRMIDZ3Orh%2BRhZMDoyyspR6JOMD99uIOqRWfCKUKmcGI9vz%2Fjrx%2FefWs%2BZy2CF9LtFIqOpU7dSy7GCN2mKHtIaYDm6UAH72%2BHqZC3aypUOBWc%2Fizj%2FFw6UVP1xe3q8LWZaMry2ATtOVfe6vtV%2B80%2FOpyX%2FbOF%2FaihIWdPwzPkuHSHkxeUNEdkANOjUC3E2Lj3O9Hp2grdjxVP9GP9LZfYVMJsMzb500EclIr5kDoUvWdKmqp%2Bv%2BojGYPOtzzHTtg8XlRLzO35wlzeU%2BvzlkwiZn4k5dCLNlcwggML9AYVSrcGnw0AUBbhOMk%2F4DaLiIrrrjO%2FGeOlzKnTD0hYu%2FBjqkAf7VS8XzfjzdNhw5XGlVCOfE%2B4H9VRws%2Ftx8fNtaPTAekfoh7XBRXQP8%2BmXdv%2Fzw64hsocC%2BOWhkS7cw7nB%2FXQdIaDmA3C1l9MCVZ9D%2F0wWyjHVQt2vYGvGQ12CcTPI%2B0AX21ynfm19dMmBYJNgREVqzBVQrOjMuIsvjE2Kg94fcQtm%2FAncnVDSy2rKlFRcKOWXvJgzHRHkAM%2FfQAnWHvmsWwYh0&X-Amz-Signature=3a6db48de1719f87c350768b3af7474b36e5964b3520b865a1cd252f5c94faa8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V63XD27L%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJVo3QEIafeBw%2FSYDo%2BRHOo02%2BCVsGjbc42AIU%2BJzTxAIhAIIP5qDMI16nbyVGEN7bYgbz%2FPpDbjfVOX7nh6q%2FgvIPKv8DCBgQABoMNjM3NDIzMTgzODA1IgzZyA1oOFHHIe%2BpPb4q3AP2PnYwu%2B%2Bz1atJ9ZvHHs5aTUZzC7g2foHhCAM0HYQLWi6lbdux0gNJsiqco%2BE3R7RbLZu8X56LCoJNqeoK%2F1mu5RjY6ZCScX%2B7Lu%2F9x%2FrxAu1TPqI8dtEc%2FQURtiRBKyQo2PRa%2FzmZ0I0q2Cz5aGrjCT8jrH1AxLkp2bsOpl5kgBRySpEioy2YuV7GkT39gEaK9EoMMDZTUn38nqF%2FoaqI4iCRO3OphLN4xUrd%2FiAdd8seNKBVkRiK7IpWTCt%2Bqrty7rRfru5f8JUaCs142QfqNzcjAkpgGHMgaKEue832h0LsmaRMIDZ3Orh%2BRhZMDoyyspR6JOMD99uIOqRWfCKUKmcGI9vz%2Fjrx%2FefWs%2BZy2CF9LtFIqOpU7dSy7GCN2mKHtIaYDm6UAH72%2BHqZC3aypUOBWc%2Fizj%2FFw6UVP1xe3q8LWZaMry2ATtOVfe6vtV%2B80%2FOpyX%2FbOF%2FaihIWdPwzPkuHSHkxeUNEdkANOjUC3E2Lj3O9Hp2grdjxVP9GP9LZfYVMJsMzb500EclIr5kDoUvWdKmqp%2Bv%2BojGYPOtzzHTtg8XlRLzO35wlzeU%2BvzlkwiZn4k5dCLNlcwggML9AYVSrcGnw0AUBbhOMk%2F4DaLiIrrrjO%2FGeOlzKnTD0hYu%2FBjqkAf7VS8XzfjzdNhw5XGlVCOfE%2B4H9VRws%2Ftx8fNtaPTAekfoh7XBRXQP8%2BmXdv%2Fzw64hsocC%2BOWhkS7cw7nB%2FXQdIaDmA3C1l9MCVZ9D%2F0wWyjHVQt2vYGvGQ12CcTPI%2B0AX21ynfm19dMmBYJNgREVqzBVQrOjMuIsvjE2Kg94fcQtm%2FAncnVDSy2rKlFRcKOWXvJgzHRHkAM%2FfQAnWHvmsWwYh0&X-Amz-Signature=1ef9ecd33b7b437ff4ee4848d7803f79afa319a67ed6578c6d0dc1f519628f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V63XD27L%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJVo3QEIafeBw%2FSYDo%2BRHOo02%2BCVsGjbc42AIU%2BJzTxAIhAIIP5qDMI16nbyVGEN7bYgbz%2FPpDbjfVOX7nh6q%2FgvIPKv8DCBgQABoMNjM3NDIzMTgzODA1IgzZyA1oOFHHIe%2BpPb4q3AP2PnYwu%2B%2Bz1atJ9ZvHHs5aTUZzC7g2foHhCAM0HYQLWi6lbdux0gNJsiqco%2BE3R7RbLZu8X56LCoJNqeoK%2F1mu5RjY6ZCScX%2B7Lu%2F9x%2FrxAu1TPqI8dtEc%2FQURtiRBKyQo2PRa%2FzmZ0I0q2Cz5aGrjCT8jrH1AxLkp2bsOpl5kgBRySpEioy2YuV7GkT39gEaK9EoMMDZTUn38nqF%2FoaqI4iCRO3OphLN4xUrd%2FiAdd8seNKBVkRiK7IpWTCt%2Bqrty7rRfru5f8JUaCs142QfqNzcjAkpgGHMgaKEue832h0LsmaRMIDZ3Orh%2BRhZMDoyyspR6JOMD99uIOqRWfCKUKmcGI9vz%2Fjrx%2FefWs%2BZy2CF9LtFIqOpU7dSy7GCN2mKHtIaYDm6UAH72%2BHqZC3aypUOBWc%2Fizj%2FFw6UVP1xe3q8LWZaMry2ATtOVfe6vtV%2B80%2FOpyX%2FbOF%2FaihIWdPwzPkuHSHkxeUNEdkANOjUC3E2Lj3O9Hp2grdjxVP9GP9LZfYVMJsMzb500EclIr5kDoUvWdKmqp%2Bv%2BojGYPOtzzHTtg8XlRLzO35wlzeU%2BvzlkwiZn4k5dCLNlcwggML9AYVSrcGnw0AUBbhOMk%2F4DaLiIrrrjO%2FGeOlzKnTD0hYu%2FBjqkAf7VS8XzfjzdNhw5XGlVCOfE%2B4H9VRws%2Ftx8fNtaPTAekfoh7XBRXQP8%2BmXdv%2Fzw64hsocC%2BOWhkS7cw7nB%2FXQdIaDmA3C1l9MCVZ9D%2F0wWyjHVQt2vYGvGQ12CcTPI%2B0AX21ynfm19dMmBYJNgREVqzBVQrOjMuIsvjE2Kg94fcQtm%2FAncnVDSy2rKlFRcKOWXvJgzHRHkAM%2FfQAnWHvmsWwYh0&X-Amz-Signature=e4c1135130e560ba00a00d10c1bfb8040a256ab6bd0b0fc42bd98bf9de2d5e51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V63XD27L%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJVo3QEIafeBw%2FSYDo%2BRHOo02%2BCVsGjbc42AIU%2BJzTxAIhAIIP5qDMI16nbyVGEN7bYgbz%2FPpDbjfVOX7nh6q%2FgvIPKv8DCBgQABoMNjM3NDIzMTgzODA1IgzZyA1oOFHHIe%2BpPb4q3AP2PnYwu%2B%2Bz1atJ9ZvHHs5aTUZzC7g2foHhCAM0HYQLWi6lbdux0gNJsiqco%2BE3R7RbLZu8X56LCoJNqeoK%2F1mu5RjY6ZCScX%2B7Lu%2F9x%2FrxAu1TPqI8dtEc%2FQURtiRBKyQo2PRa%2FzmZ0I0q2Cz5aGrjCT8jrH1AxLkp2bsOpl5kgBRySpEioy2YuV7GkT39gEaK9EoMMDZTUn38nqF%2FoaqI4iCRO3OphLN4xUrd%2FiAdd8seNKBVkRiK7IpWTCt%2Bqrty7rRfru5f8JUaCs142QfqNzcjAkpgGHMgaKEue832h0LsmaRMIDZ3Orh%2BRhZMDoyyspR6JOMD99uIOqRWfCKUKmcGI9vz%2Fjrx%2FefWs%2BZy2CF9LtFIqOpU7dSy7GCN2mKHtIaYDm6UAH72%2BHqZC3aypUOBWc%2Fizj%2FFw6UVP1xe3q8LWZaMry2ATtOVfe6vtV%2B80%2FOpyX%2FbOF%2FaihIWdPwzPkuHSHkxeUNEdkANOjUC3E2Lj3O9Hp2grdjxVP9GP9LZfYVMJsMzb500EclIr5kDoUvWdKmqp%2Bv%2BojGYPOtzzHTtg8XlRLzO35wlzeU%2BvzlkwiZn4k5dCLNlcwggML9AYVSrcGnw0AUBbhOMk%2F4DaLiIrrrjO%2FGeOlzKnTD0hYu%2FBjqkAf7VS8XzfjzdNhw5XGlVCOfE%2B4H9VRws%2Ftx8fNtaPTAekfoh7XBRXQP8%2BmXdv%2Fzw64hsocC%2BOWhkS7cw7nB%2FXQdIaDmA3C1l9MCVZ9D%2F0wWyjHVQt2vYGvGQ12CcTPI%2B0AX21ynfm19dMmBYJNgREVqzBVQrOjMuIsvjE2Kg94fcQtm%2FAncnVDSy2rKlFRcKOWXvJgzHRHkAM%2FfQAnWHvmsWwYh0&X-Amz-Signature=c315ba2591e5992fc98cf4512952fb05f29befce37e9a58696412783197e75cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V63XD27L%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJVo3QEIafeBw%2FSYDo%2BRHOo02%2BCVsGjbc42AIU%2BJzTxAIhAIIP5qDMI16nbyVGEN7bYgbz%2FPpDbjfVOX7nh6q%2FgvIPKv8DCBgQABoMNjM3NDIzMTgzODA1IgzZyA1oOFHHIe%2BpPb4q3AP2PnYwu%2B%2Bz1atJ9ZvHHs5aTUZzC7g2foHhCAM0HYQLWi6lbdux0gNJsiqco%2BE3R7RbLZu8X56LCoJNqeoK%2F1mu5RjY6ZCScX%2B7Lu%2F9x%2FrxAu1TPqI8dtEc%2FQURtiRBKyQo2PRa%2FzmZ0I0q2Cz5aGrjCT8jrH1AxLkp2bsOpl5kgBRySpEioy2YuV7GkT39gEaK9EoMMDZTUn38nqF%2FoaqI4iCRO3OphLN4xUrd%2FiAdd8seNKBVkRiK7IpWTCt%2Bqrty7rRfru5f8JUaCs142QfqNzcjAkpgGHMgaKEue832h0LsmaRMIDZ3Orh%2BRhZMDoyyspR6JOMD99uIOqRWfCKUKmcGI9vz%2Fjrx%2FefWs%2BZy2CF9LtFIqOpU7dSy7GCN2mKHtIaYDm6UAH72%2BHqZC3aypUOBWc%2Fizj%2FFw6UVP1xe3q8LWZaMry2ATtOVfe6vtV%2B80%2FOpyX%2FbOF%2FaihIWdPwzPkuHSHkxeUNEdkANOjUC3E2Lj3O9Hp2grdjxVP9GP9LZfYVMJsMzb500EclIr5kDoUvWdKmqp%2Bv%2BojGYPOtzzHTtg8XlRLzO35wlzeU%2BvzlkwiZn4k5dCLNlcwggML9AYVSrcGnw0AUBbhOMk%2F4DaLiIrrrjO%2FGeOlzKnTD0hYu%2FBjqkAf7VS8XzfjzdNhw5XGlVCOfE%2B4H9VRws%2Ftx8fNtaPTAekfoh7XBRXQP8%2BmXdv%2Fzw64hsocC%2BOWhkS7cw7nB%2FXQdIaDmA3C1l9MCVZ9D%2F0wWyjHVQt2vYGvGQ12CcTPI%2B0AX21ynfm19dMmBYJNgREVqzBVQrOjMuIsvjE2Kg94fcQtm%2FAncnVDSy2rKlFRcKOWXvJgzHRHkAM%2FfQAnWHvmsWwYh0&X-Amz-Signature=cd067630f16b71341f81a6a8c9a03b04c2d992397148896f718c72391e7b4ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V63XD27L%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJVo3QEIafeBw%2FSYDo%2BRHOo02%2BCVsGjbc42AIU%2BJzTxAIhAIIP5qDMI16nbyVGEN7bYgbz%2FPpDbjfVOX7nh6q%2FgvIPKv8DCBgQABoMNjM3NDIzMTgzODA1IgzZyA1oOFHHIe%2BpPb4q3AP2PnYwu%2B%2Bz1atJ9ZvHHs5aTUZzC7g2foHhCAM0HYQLWi6lbdux0gNJsiqco%2BE3R7RbLZu8X56LCoJNqeoK%2F1mu5RjY6ZCScX%2B7Lu%2F9x%2FrxAu1TPqI8dtEc%2FQURtiRBKyQo2PRa%2FzmZ0I0q2Cz5aGrjCT8jrH1AxLkp2bsOpl5kgBRySpEioy2YuV7GkT39gEaK9EoMMDZTUn38nqF%2FoaqI4iCRO3OphLN4xUrd%2FiAdd8seNKBVkRiK7IpWTCt%2Bqrty7rRfru5f8JUaCs142QfqNzcjAkpgGHMgaKEue832h0LsmaRMIDZ3Orh%2BRhZMDoyyspR6JOMD99uIOqRWfCKUKmcGI9vz%2Fjrx%2FefWs%2BZy2CF9LtFIqOpU7dSy7GCN2mKHtIaYDm6UAH72%2BHqZC3aypUOBWc%2Fizj%2FFw6UVP1xe3q8LWZaMry2ATtOVfe6vtV%2B80%2FOpyX%2FbOF%2FaihIWdPwzPkuHSHkxeUNEdkANOjUC3E2Lj3O9Hp2grdjxVP9GP9LZfYVMJsMzb500EclIr5kDoUvWdKmqp%2Bv%2BojGYPOtzzHTtg8XlRLzO35wlzeU%2BvzlkwiZn4k5dCLNlcwggML9AYVSrcGnw0AUBbhOMk%2F4DaLiIrrrjO%2FGeOlzKnTD0hYu%2FBjqkAf7VS8XzfjzdNhw5XGlVCOfE%2B4H9VRws%2Ftx8fNtaPTAekfoh7XBRXQP8%2BmXdv%2Fzw64hsocC%2BOWhkS7cw7nB%2FXQdIaDmA3C1l9MCVZ9D%2F0wWyjHVQt2vYGvGQ12CcTPI%2B0AX21ynfm19dMmBYJNgREVqzBVQrOjMuIsvjE2Kg94fcQtm%2FAncnVDSy2rKlFRcKOWXvJgzHRHkAM%2FfQAnWHvmsWwYh0&X-Amz-Signature=a2dfa213ca96a96824000b773f9fa5b53bcf1193b74f6cbc720e43a2cd9062f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
