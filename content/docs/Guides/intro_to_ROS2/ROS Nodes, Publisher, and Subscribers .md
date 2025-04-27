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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NNSMXBF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQgzeY5xL4gwmZTnZuhRFiIASTNk2uo9Qz6atRBVHvpAIgXG1z4P0xw7b6DZVvGTjFWyQlg9ZtiQy7nJ6N6njq9ygq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHXWlymKw7wN5Arg7yrcA7eJhxgRlot5lJl3HsOJDyIWTJBDduyhALDuhfMdYh27pFbKM1LCdSaR0uFTNoEN1kVpBP1UJHaozlhTQnaIDPD0cQaHGwXYCNxsMnvqcUxIarTTr2J1azrhmH3JyuAfLKhLEmpqDSyZcWlWOTG9oFihvlDJDTi0AfyNJwL%2B4ZyjoBN8xVP0o22gSDHVtDr9BRFo5wClgpiMnSTnDmHgIhDjDahTHZTUAo737U0ThDQxgU9yoiwHwMovzib2RoBF%2BVOhi6wouXFGCDuOchAYIQvMJmapwKBZxlzUMST6D5sAyMkDC28295CmwBdLooS1eAw7%2F7yB1H3p5D1CNlhWbSJp5LPLYcEJfewJ13bZvqM5cC27l%2FwCWYfo8EC5eTb2YyPIcIQ29xn21YCF7JtXTxDlQ9q%2BAISaLbU%2BOw7Ufb%2BsuwRysvi5n6qEeh4r4aurbnpneJInQ6WbiCYXvvikQZMjtADo6gGeAP6JYwNmR0eYldkxGqbYf%2BNmaSUWjVnkym3q86u260zm%2BNLzGd7dxjK1z%2FZJBY27z18FMNt6XKYuugCvWB7KAOadbzBUYT9NhJfSBys6ZRw1VnpR1CFleXgMjVV7IMLL5J66r0wDQIHuOI4EisT0iyXnZQSvMNmKusAGOqUBxWVvz1vfrDYL71wVpYMphyHFVk8VT%2BfKr6oWCvyVl9%2FclQUecGfoAJHYzTTneEF9DsRXaNDCcQRsuMMRwYdk%2B6XAEY1ijrpxzY99fQFfuIemvquFV%2FHGAAZyHyMkRxhDVeHrhiIREOzD7fesruldGMKVv%2B87RWTOfSymvvWA8zs4wkAasRgF7OhBswLN7u8V%2BPpxgYFrxO%2BdWcfxHyF2xgUpoLkU&X-Amz-Signature=13c27c5484094c3427125e705b4a75bc7083c4c55396928c6f0292f126727dad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NNSMXBF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQgzeY5xL4gwmZTnZuhRFiIASTNk2uo9Qz6atRBVHvpAIgXG1z4P0xw7b6DZVvGTjFWyQlg9ZtiQy7nJ6N6njq9ygq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHXWlymKw7wN5Arg7yrcA7eJhxgRlot5lJl3HsOJDyIWTJBDduyhALDuhfMdYh27pFbKM1LCdSaR0uFTNoEN1kVpBP1UJHaozlhTQnaIDPD0cQaHGwXYCNxsMnvqcUxIarTTr2J1azrhmH3JyuAfLKhLEmpqDSyZcWlWOTG9oFihvlDJDTi0AfyNJwL%2B4ZyjoBN8xVP0o22gSDHVtDr9BRFo5wClgpiMnSTnDmHgIhDjDahTHZTUAo737U0ThDQxgU9yoiwHwMovzib2RoBF%2BVOhi6wouXFGCDuOchAYIQvMJmapwKBZxlzUMST6D5sAyMkDC28295CmwBdLooS1eAw7%2F7yB1H3p5D1CNlhWbSJp5LPLYcEJfewJ13bZvqM5cC27l%2FwCWYfo8EC5eTb2YyPIcIQ29xn21YCF7JtXTxDlQ9q%2BAISaLbU%2BOw7Ufb%2BsuwRysvi5n6qEeh4r4aurbnpneJInQ6WbiCYXvvikQZMjtADo6gGeAP6JYwNmR0eYldkxGqbYf%2BNmaSUWjVnkym3q86u260zm%2BNLzGd7dxjK1z%2FZJBY27z18FMNt6XKYuugCvWB7KAOadbzBUYT9NhJfSBys6ZRw1VnpR1CFleXgMjVV7IMLL5J66r0wDQIHuOI4EisT0iyXnZQSvMNmKusAGOqUBxWVvz1vfrDYL71wVpYMphyHFVk8VT%2BfKr6oWCvyVl9%2FclQUecGfoAJHYzTTneEF9DsRXaNDCcQRsuMMRwYdk%2B6XAEY1ijrpxzY99fQFfuIemvquFV%2FHGAAZyHyMkRxhDVeHrhiIREOzD7fesruldGMKVv%2B87RWTOfSymvvWA8zs4wkAasRgF7OhBswLN7u8V%2BPpxgYFrxO%2BdWcfxHyF2xgUpoLkU&X-Amz-Signature=e2f0bd2dfe856eddf29ffa0b67093cc5bcc07afdf32e6737e54dd6a2eb29e67a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NNSMXBF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQgzeY5xL4gwmZTnZuhRFiIASTNk2uo9Qz6atRBVHvpAIgXG1z4P0xw7b6DZVvGTjFWyQlg9ZtiQy7nJ6N6njq9ygq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHXWlymKw7wN5Arg7yrcA7eJhxgRlot5lJl3HsOJDyIWTJBDduyhALDuhfMdYh27pFbKM1LCdSaR0uFTNoEN1kVpBP1UJHaozlhTQnaIDPD0cQaHGwXYCNxsMnvqcUxIarTTr2J1azrhmH3JyuAfLKhLEmpqDSyZcWlWOTG9oFihvlDJDTi0AfyNJwL%2B4ZyjoBN8xVP0o22gSDHVtDr9BRFo5wClgpiMnSTnDmHgIhDjDahTHZTUAo737U0ThDQxgU9yoiwHwMovzib2RoBF%2BVOhi6wouXFGCDuOchAYIQvMJmapwKBZxlzUMST6D5sAyMkDC28295CmwBdLooS1eAw7%2F7yB1H3p5D1CNlhWbSJp5LPLYcEJfewJ13bZvqM5cC27l%2FwCWYfo8EC5eTb2YyPIcIQ29xn21YCF7JtXTxDlQ9q%2BAISaLbU%2BOw7Ufb%2BsuwRysvi5n6qEeh4r4aurbnpneJInQ6WbiCYXvvikQZMjtADo6gGeAP6JYwNmR0eYldkxGqbYf%2BNmaSUWjVnkym3q86u260zm%2BNLzGd7dxjK1z%2FZJBY27z18FMNt6XKYuugCvWB7KAOadbzBUYT9NhJfSBys6ZRw1VnpR1CFleXgMjVV7IMLL5J66r0wDQIHuOI4EisT0iyXnZQSvMNmKusAGOqUBxWVvz1vfrDYL71wVpYMphyHFVk8VT%2BfKr6oWCvyVl9%2FclQUecGfoAJHYzTTneEF9DsRXaNDCcQRsuMMRwYdk%2B6XAEY1ijrpxzY99fQFfuIemvquFV%2FHGAAZyHyMkRxhDVeHrhiIREOzD7fesruldGMKVv%2B87RWTOfSymvvWA8zs4wkAasRgF7OhBswLN7u8V%2BPpxgYFrxO%2BdWcfxHyF2xgUpoLkU&X-Amz-Signature=f20339e612a93212b91a62e4863abd61e93dee6f76e012bc2796c357e846e96b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NNSMXBF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQgzeY5xL4gwmZTnZuhRFiIASTNk2uo9Qz6atRBVHvpAIgXG1z4P0xw7b6DZVvGTjFWyQlg9ZtiQy7nJ6N6njq9ygq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHXWlymKw7wN5Arg7yrcA7eJhxgRlot5lJl3HsOJDyIWTJBDduyhALDuhfMdYh27pFbKM1LCdSaR0uFTNoEN1kVpBP1UJHaozlhTQnaIDPD0cQaHGwXYCNxsMnvqcUxIarTTr2J1azrhmH3JyuAfLKhLEmpqDSyZcWlWOTG9oFihvlDJDTi0AfyNJwL%2B4ZyjoBN8xVP0o22gSDHVtDr9BRFo5wClgpiMnSTnDmHgIhDjDahTHZTUAo737U0ThDQxgU9yoiwHwMovzib2RoBF%2BVOhi6wouXFGCDuOchAYIQvMJmapwKBZxlzUMST6D5sAyMkDC28295CmwBdLooS1eAw7%2F7yB1H3p5D1CNlhWbSJp5LPLYcEJfewJ13bZvqM5cC27l%2FwCWYfo8EC5eTb2YyPIcIQ29xn21YCF7JtXTxDlQ9q%2BAISaLbU%2BOw7Ufb%2BsuwRysvi5n6qEeh4r4aurbnpneJInQ6WbiCYXvvikQZMjtADo6gGeAP6JYwNmR0eYldkxGqbYf%2BNmaSUWjVnkym3q86u260zm%2BNLzGd7dxjK1z%2FZJBY27z18FMNt6XKYuugCvWB7KAOadbzBUYT9NhJfSBys6ZRw1VnpR1CFleXgMjVV7IMLL5J66r0wDQIHuOI4EisT0iyXnZQSvMNmKusAGOqUBxWVvz1vfrDYL71wVpYMphyHFVk8VT%2BfKr6oWCvyVl9%2FclQUecGfoAJHYzTTneEF9DsRXaNDCcQRsuMMRwYdk%2B6XAEY1ijrpxzY99fQFfuIemvquFV%2FHGAAZyHyMkRxhDVeHrhiIREOzD7fesruldGMKVv%2B87RWTOfSymvvWA8zs4wkAasRgF7OhBswLN7u8V%2BPpxgYFrxO%2BdWcfxHyF2xgUpoLkU&X-Amz-Signature=d2b0f4de469410732623055b3a05da76e0837a1f332fc1d714281ea18a8aeb53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NNSMXBF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQgzeY5xL4gwmZTnZuhRFiIASTNk2uo9Qz6atRBVHvpAIgXG1z4P0xw7b6DZVvGTjFWyQlg9ZtiQy7nJ6N6njq9ygq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHXWlymKw7wN5Arg7yrcA7eJhxgRlot5lJl3HsOJDyIWTJBDduyhALDuhfMdYh27pFbKM1LCdSaR0uFTNoEN1kVpBP1UJHaozlhTQnaIDPD0cQaHGwXYCNxsMnvqcUxIarTTr2J1azrhmH3JyuAfLKhLEmpqDSyZcWlWOTG9oFihvlDJDTi0AfyNJwL%2B4ZyjoBN8xVP0o22gSDHVtDr9BRFo5wClgpiMnSTnDmHgIhDjDahTHZTUAo737U0ThDQxgU9yoiwHwMovzib2RoBF%2BVOhi6wouXFGCDuOchAYIQvMJmapwKBZxlzUMST6D5sAyMkDC28295CmwBdLooS1eAw7%2F7yB1H3p5D1CNlhWbSJp5LPLYcEJfewJ13bZvqM5cC27l%2FwCWYfo8EC5eTb2YyPIcIQ29xn21YCF7JtXTxDlQ9q%2BAISaLbU%2BOw7Ufb%2BsuwRysvi5n6qEeh4r4aurbnpneJInQ6WbiCYXvvikQZMjtADo6gGeAP6JYwNmR0eYldkxGqbYf%2BNmaSUWjVnkym3q86u260zm%2BNLzGd7dxjK1z%2FZJBY27z18FMNt6XKYuugCvWB7KAOadbzBUYT9NhJfSBys6ZRw1VnpR1CFleXgMjVV7IMLL5J66r0wDQIHuOI4EisT0iyXnZQSvMNmKusAGOqUBxWVvz1vfrDYL71wVpYMphyHFVk8VT%2BfKr6oWCvyVl9%2FclQUecGfoAJHYzTTneEF9DsRXaNDCcQRsuMMRwYdk%2B6XAEY1ijrpxzY99fQFfuIemvquFV%2FHGAAZyHyMkRxhDVeHrhiIREOzD7fesruldGMKVv%2B87RWTOfSymvvWA8zs4wkAasRgF7OhBswLN7u8V%2BPpxgYFrxO%2BdWcfxHyF2xgUpoLkU&X-Amz-Signature=aae286ab69ebc539f7223f422719cf655f95e7c618f2ff93cbe106c7c18f3898&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NNSMXBF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQgzeY5xL4gwmZTnZuhRFiIASTNk2uo9Qz6atRBVHvpAIgXG1z4P0xw7b6DZVvGTjFWyQlg9ZtiQy7nJ6N6njq9ygq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHXWlymKw7wN5Arg7yrcA7eJhxgRlot5lJl3HsOJDyIWTJBDduyhALDuhfMdYh27pFbKM1LCdSaR0uFTNoEN1kVpBP1UJHaozlhTQnaIDPD0cQaHGwXYCNxsMnvqcUxIarTTr2J1azrhmH3JyuAfLKhLEmpqDSyZcWlWOTG9oFihvlDJDTi0AfyNJwL%2B4ZyjoBN8xVP0o22gSDHVtDr9BRFo5wClgpiMnSTnDmHgIhDjDahTHZTUAo737U0ThDQxgU9yoiwHwMovzib2RoBF%2BVOhi6wouXFGCDuOchAYIQvMJmapwKBZxlzUMST6D5sAyMkDC28295CmwBdLooS1eAw7%2F7yB1H3p5D1CNlhWbSJp5LPLYcEJfewJ13bZvqM5cC27l%2FwCWYfo8EC5eTb2YyPIcIQ29xn21YCF7JtXTxDlQ9q%2BAISaLbU%2BOw7Ufb%2BsuwRysvi5n6qEeh4r4aurbnpneJInQ6WbiCYXvvikQZMjtADo6gGeAP6JYwNmR0eYldkxGqbYf%2BNmaSUWjVnkym3q86u260zm%2BNLzGd7dxjK1z%2FZJBY27z18FMNt6XKYuugCvWB7KAOadbzBUYT9NhJfSBys6ZRw1VnpR1CFleXgMjVV7IMLL5J66r0wDQIHuOI4EisT0iyXnZQSvMNmKusAGOqUBxWVvz1vfrDYL71wVpYMphyHFVk8VT%2BfKr6oWCvyVl9%2FclQUecGfoAJHYzTTneEF9DsRXaNDCcQRsuMMRwYdk%2B6XAEY1ijrpxzY99fQFfuIemvquFV%2FHGAAZyHyMkRxhDVeHrhiIREOzD7fesruldGMKVv%2B87RWTOfSymvvWA8zs4wkAasRgF7OhBswLN7u8V%2BPpxgYFrxO%2BdWcfxHyF2xgUpoLkU&X-Amz-Signature=5d8ce3cf6e0ccafc302491577386fca2126dd5cfb03007ae59258b0f91789029&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NNSMXBF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQgzeY5xL4gwmZTnZuhRFiIASTNk2uo9Qz6atRBVHvpAIgXG1z4P0xw7b6DZVvGTjFWyQlg9ZtiQy7nJ6N6njq9ygq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHXWlymKw7wN5Arg7yrcA7eJhxgRlot5lJl3HsOJDyIWTJBDduyhALDuhfMdYh27pFbKM1LCdSaR0uFTNoEN1kVpBP1UJHaozlhTQnaIDPD0cQaHGwXYCNxsMnvqcUxIarTTr2J1azrhmH3JyuAfLKhLEmpqDSyZcWlWOTG9oFihvlDJDTi0AfyNJwL%2B4ZyjoBN8xVP0o22gSDHVtDr9BRFo5wClgpiMnSTnDmHgIhDjDahTHZTUAo737U0ThDQxgU9yoiwHwMovzib2RoBF%2BVOhi6wouXFGCDuOchAYIQvMJmapwKBZxlzUMST6D5sAyMkDC28295CmwBdLooS1eAw7%2F7yB1H3p5D1CNlhWbSJp5LPLYcEJfewJ13bZvqM5cC27l%2FwCWYfo8EC5eTb2YyPIcIQ29xn21YCF7JtXTxDlQ9q%2BAISaLbU%2BOw7Ufb%2BsuwRysvi5n6qEeh4r4aurbnpneJInQ6WbiCYXvvikQZMjtADo6gGeAP6JYwNmR0eYldkxGqbYf%2BNmaSUWjVnkym3q86u260zm%2BNLzGd7dxjK1z%2FZJBY27z18FMNt6XKYuugCvWB7KAOadbzBUYT9NhJfSBys6ZRw1VnpR1CFleXgMjVV7IMLL5J66r0wDQIHuOI4EisT0iyXnZQSvMNmKusAGOqUBxWVvz1vfrDYL71wVpYMphyHFVk8VT%2BfKr6oWCvyVl9%2FclQUecGfoAJHYzTTneEF9DsRXaNDCcQRsuMMRwYdk%2B6XAEY1ijrpxzY99fQFfuIemvquFV%2FHGAAZyHyMkRxhDVeHrhiIREOzD7fesruldGMKVv%2B87RWTOfSymvvWA8zs4wkAasRgF7OhBswLN7u8V%2BPpxgYFrxO%2BdWcfxHyF2xgUpoLkU&X-Amz-Signature=38e7a2875d7538c34639c4f25cba79d76665eb6642a04dc32c7932522379d553&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NNSMXBF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQgzeY5xL4gwmZTnZuhRFiIASTNk2uo9Qz6atRBVHvpAIgXG1z4P0xw7b6DZVvGTjFWyQlg9ZtiQy7nJ6N6njq9ygq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHXWlymKw7wN5Arg7yrcA7eJhxgRlot5lJl3HsOJDyIWTJBDduyhALDuhfMdYh27pFbKM1LCdSaR0uFTNoEN1kVpBP1UJHaozlhTQnaIDPD0cQaHGwXYCNxsMnvqcUxIarTTr2J1azrhmH3JyuAfLKhLEmpqDSyZcWlWOTG9oFihvlDJDTi0AfyNJwL%2B4ZyjoBN8xVP0o22gSDHVtDr9BRFo5wClgpiMnSTnDmHgIhDjDahTHZTUAo737U0ThDQxgU9yoiwHwMovzib2RoBF%2BVOhi6wouXFGCDuOchAYIQvMJmapwKBZxlzUMST6D5sAyMkDC28295CmwBdLooS1eAw7%2F7yB1H3p5D1CNlhWbSJp5LPLYcEJfewJ13bZvqM5cC27l%2FwCWYfo8EC5eTb2YyPIcIQ29xn21YCF7JtXTxDlQ9q%2BAISaLbU%2BOw7Ufb%2BsuwRysvi5n6qEeh4r4aurbnpneJInQ6WbiCYXvvikQZMjtADo6gGeAP6JYwNmR0eYldkxGqbYf%2BNmaSUWjVnkym3q86u260zm%2BNLzGd7dxjK1z%2FZJBY27z18FMNt6XKYuugCvWB7KAOadbzBUYT9NhJfSBys6ZRw1VnpR1CFleXgMjVV7IMLL5J66r0wDQIHuOI4EisT0iyXnZQSvMNmKusAGOqUBxWVvz1vfrDYL71wVpYMphyHFVk8VT%2BfKr6oWCvyVl9%2FclQUecGfoAJHYzTTneEF9DsRXaNDCcQRsuMMRwYdk%2B6XAEY1ijrpxzY99fQFfuIemvquFV%2FHGAAZyHyMkRxhDVeHrhiIREOzD7fesruldGMKVv%2B87RWTOfSymvvWA8zs4wkAasRgF7OhBswLN7u8V%2BPpxgYFrxO%2BdWcfxHyF2xgUpoLkU&X-Amz-Signature=f1a22542584943dcac350c38ed0a1a08dd9fe8774ad340dd50c29ad92e131724&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
