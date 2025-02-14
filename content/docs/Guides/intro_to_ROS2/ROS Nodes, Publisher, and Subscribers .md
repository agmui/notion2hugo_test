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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSCSMI4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8UsA%2FCiJYamBmxnTAIW05oqefSEg9KUy5D8xW9KhjQIhAIRYgS02s3hdEOKWgxkPooOBA9LNkDkdc503SY922v%2B5Kv8DCCcQABoMNjM3NDIzMTgzODA1IgytXIf8EkO7fN0EmjEq3AMPRDy6msmZCbRlXva%2FAZi1mRBnsqXmzfZSRUOvVPSK0cCecibYK039nPZwZchOj5LmWnLs9j6UDa82dqMILzE75bgpJwBXdNJ2kcP0%2FsApSuhFU7eq1MbxehDHehZYlYvvruwq45O7uXBPW4S%2FNntiXo7SCbkYjp1d9CMojXAXcZqpMmdWTOvNeYrIy1cHvqjjT%2BrT2teMmWVDWzqsi8a3BJ3kf1TOFC2rZUK8WQgNXxqWvZroruBUpqIPnjrlB4%2BZJuZp1h%2BJ%2Bo2%2Fho8bF3eSarzmwXJmRspJJUudTvxZFb8ierq8hROlXSQCxgZWcABhrUWOw41JLFXbAgvyuIQ7oJbaA8arELF2Ti9s59BQyEJ86npJFNpjQZXpR%2FOQ9AO2z%2FBvaMfI9Mw%2Fyy9VYkVepKtfukd8SR8KLjBTxqm3ownpAfvhg2snkPh3kv0P6E7gstaNAGUt5BJTBHgpmblUIuslZqQLtLrFV%2FMTvD60%2BKaJfz59EEuASYhbSrypow3DetaMf2qngUJFF6uZY67rPrvgRFuGnSYIfOZM0z7pRswzlDi%2F8U1UEaUFVM%2BVMiZ7RpI6FB0aLe4iCYqSP6hvYCn4AoBq30hPEa4OwY3qXQM91pAL%2FM7TBOnpVzDAq7u9BjqkATXTTl2yRCThtroogGqMrxHxJ0c8CnmhkmONRHG1dYhks14KhrBjNYYTNc7cIrLtMv0VUvfEby%2F7AKJ8JADdmId31Nztx%2Bx2qzA7uQIuQhpmzfUevkxnUfGhNMT5S2JiregOvBq0QbLdSdZoUqGAQSKrq%2FjTRWRyC6XPpIohH3XvWAqUq92K%2BHqmtBjYLq%2B9Z%2BpEn8ecD6gDZcIcghZ%2FWpmvLkBx&X-Amz-Signature=a01ecc1fcde743a085ffde3ee0b9edaead82e2d65d70e27be4ca941b5bdf2c23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSCSMI4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8UsA%2FCiJYamBmxnTAIW05oqefSEg9KUy5D8xW9KhjQIhAIRYgS02s3hdEOKWgxkPooOBA9LNkDkdc503SY922v%2B5Kv8DCCcQABoMNjM3NDIzMTgzODA1IgytXIf8EkO7fN0EmjEq3AMPRDy6msmZCbRlXva%2FAZi1mRBnsqXmzfZSRUOvVPSK0cCecibYK039nPZwZchOj5LmWnLs9j6UDa82dqMILzE75bgpJwBXdNJ2kcP0%2FsApSuhFU7eq1MbxehDHehZYlYvvruwq45O7uXBPW4S%2FNntiXo7SCbkYjp1d9CMojXAXcZqpMmdWTOvNeYrIy1cHvqjjT%2BrT2teMmWVDWzqsi8a3BJ3kf1TOFC2rZUK8WQgNXxqWvZroruBUpqIPnjrlB4%2BZJuZp1h%2BJ%2Bo2%2Fho8bF3eSarzmwXJmRspJJUudTvxZFb8ierq8hROlXSQCxgZWcABhrUWOw41JLFXbAgvyuIQ7oJbaA8arELF2Ti9s59BQyEJ86npJFNpjQZXpR%2FOQ9AO2z%2FBvaMfI9Mw%2Fyy9VYkVepKtfukd8SR8KLjBTxqm3ownpAfvhg2snkPh3kv0P6E7gstaNAGUt5BJTBHgpmblUIuslZqQLtLrFV%2FMTvD60%2BKaJfz59EEuASYhbSrypow3DetaMf2qngUJFF6uZY67rPrvgRFuGnSYIfOZM0z7pRswzlDi%2F8U1UEaUFVM%2BVMiZ7RpI6FB0aLe4iCYqSP6hvYCn4AoBq30hPEa4OwY3qXQM91pAL%2FM7TBOnpVzDAq7u9BjqkATXTTl2yRCThtroogGqMrxHxJ0c8CnmhkmONRHG1dYhks14KhrBjNYYTNc7cIrLtMv0VUvfEby%2F7AKJ8JADdmId31Nztx%2Bx2qzA7uQIuQhpmzfUevkxnUfGhNMT5S2JiregOvBq0QbLdSdZoUqGAQSKrq%2FjTRWRyC6XPpIohH3XvWAqUq92K%2BHqmtBjYLq%2B9Z%2BpEn8ecD6gDZcIcghZ%2FWpmvLkBx&X-Amz-Signature=c8fb5e62f6ada3cbafa27cfba06d9e2503d56d723687df72d8902c75ec86921f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSCSMI4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8UsA%2FCiJYamBmxnTAIW05oqefSEg9KUy5D8xW9KhjQIhAIRYgS02s3hdEOKWgxkPooOBA9LNkDkdc503SY922v%2B5Kv8DCCcQABoMNjM3NDIzMTgzODA1IgytXIf8EkO7fN0EmjEq3AMPRDy6msmZCbRlXva%2FAZi1mRBnsqXmzfZSRUOvVPSK0cCecibYK039nPZwZchOj5LmWnLs9j6UDa82dqMILzE75bgpJwBXdNJ2kcP0%2FsApSuhFU7eq1MbxehDHehZYlYvvruwq45O7uXBPW4S%2FNntiXo7SCbkYjp1d9CMojXAXcZqpMmdWTOvNeYrIy1cHvqjjT%2BrT2teMmWVDWzqsi8a3BJ3kf1TOFC2rZUK8WQgNXxqWvZroruBUpqIPnjrlB4%2BZJuZp1h%2BJ%2Bo2%2Fho8bF3eSarzmwXJmRspJJUudTvxZFb8ierq8hROlXSQCxgZWcABhrUWOw41JLFXbAgvyuIQ7oJbaA8arELF2Ti9s59BQyEJ86npJFNpjQZXpR%2FOQ9AO2z%2FBvaMfI9Mw%2Fyy9VYkVepKtfukd8SR8KLjBTxqm3ownpAfvhg2snkPh3kv0P6E7gstaNAGUt5BJTBHgpmblUIuslZqQLtLrFV%2FMTvD60%2BKaJfz59EEuASYhbSrypow3DetaMf2qngUJFF6uZY67rPrvgRFuGnSYIfOZM0z7pRswzlDi%2F8U1UEaUFVM%2BVMiZ7RpI6FB0aLe4iCYqSP6hvYCn4AoBq30hPEa4OwY3qXQM91pAL%2FM7TBOnpVzDAq7u9BjqkATXTTl2yRCThtroogGqMrxHxJ0c8CnmhkmONRHG1dYhks14KhrBjNYYTNc7cIrLtMv0VUvfEby%2F7AKJ8JADdmId31Nztx%2Bx2qzA7uQIuQhpmzfUevkxnUfGhNMT5S2JiregOvBq0QbLdSdZoUqGAQSKrq%2FjTRWRyC6XPpIohH3XvWAqUq92K%2BHqmtBjYLq%2B9Z%2BpEn8ecD6gDZcIcghZ%2FWpmvLkBx&X-Amz-Signature=3ea9e9dfbc94340a2436c543bc17b203cfdd6596757568730b397c58eb46ad93&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSCSMI4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8UsA%2FCiJYamBmxnTAIW05oqefSEg9KUy5D8xW9KhjQIhAIRYgS02s3hdEOKWgxkPooOBA9LNkDkdc503SY922v%2B5Kv8DCCcQABoMNjM3NDIzMTgzODA1IgytXIf8EkO7fN0EmjEq3AMPRDy6msmZCbRlXva%2FAZi1mRBnsqXmzfZSRUOvVPSK0cCecibYK039nPZwZchOj5LmWnLs9j6UDa82dqMILzE75bgpJwBXdNJ2kcP0%2FsApSuhFU7eq1MbxehDHehZYlYvvruwq45O7uXBPW4S%2FNntiXo7SCbkYjp1d9CMojXAXcZqpMmdWTOvNeYrIy1cHvqjjT%2BrT2teMmWVDWzqsi8a3BJ3kf1TOFC2rZUK8WQgNXxqWvZroruBUpqIPnjrlB4%2BZJuZp1h%2BJ%2Bo2%2Fho8bF3eSarzmwXJmRspJJUudTvxZFb8ierq8hROlXSQCxgZWcABhrUWOw41JLFXbAgvyuIQ7oJbaA8arELF2Ti9s59BQyEJ86npJFNpjQZXpR%2FOQ9AO2z%2FBvaMfI9Mw%2Fyy9VYkVepKtfukd8SR8KLjBTxqm3ownpAfvhg2snkPh3kv0P6E7gstaNAGUt5BJTBHgpmblUIuslZqQLtLrFV%2FMTvD60%2BKaJfz59EEuASYhbSrypow3DetaMf2qngUJFF6uZY67rPrvgRFuGnSYIfOZM0z7pRswzlDi%2F8U1UEaUFVM%2BVMiZ7RpI6FB0aLe4iCYqSP6hvYCn4AoBq30hPEa4OwY3qXQM91pAL%2FM7TBOnpVzDAq7u9BjqkATXTTl2yRCThtroogGqMrxHxJ0c8CnmhkmONRHG1dYhks14KhrBjNYYTNc7cIrLtMv0VUvfEby%2F7AKJ8JADdmId31Nztx%2Bx2qzA7uQIuQhpmzfUevkxnUfGhNMT5S2JiregOvBq0QbLdSdZoUqGAQSKrq%2FjTRWRyC6XPpIohH3XvWAqUq92K%2BHqmtBjYLq%2B9Z%2BpEn8ecD6gDZcIcghZ%2FWpmvLkBx&X-Amz-Signature=8380e41ac2e5f4337689723050e38504d8e5fc5e700145864718728c22455021&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSCSMI4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8UsA%2FCiJYamBmxnTAIW05oqefSEg9KUy5D8xW9KhjQIhAIRYgS02s3hdEOKWgxkPooOBA9LNkDkdc503SY922v%2B5Kv8DCCcQABoMNjM3NDIzMTgzODA1IgytXIf8EkO7fN0EmjEq3AMPRDy6msmZCbRlXva%2FAZi1mRBnsqXmzfZSRUOvVPSK0cCecibYK039nPZwZchOj5LmWnLs9j6UDa82dqMILzE75bgpJwBXdNJ2kcP0%2FsApSuhFU7eq1MbxehDHehZYlYvvruwq45O7uXBPW4S%2FNntiXo7SCbkYjp1d9CMojXAXcZqpMmdWTOvNeYrIy1cHvqjjT%2BrT2teMmWVDWzqsi8a3BJ3kf1TOFC2rZUK8WQgNXxqWvZroruBUpqIPnjrlB4%2BZJuZp1h%2BJ%2Bo2%2Fho8bF3eSarzmwXJmRspJJUudTvxZFb8ierq8hROlXSQCxgZWcABhrUWOw41JLFXbAgvyuIQ7oJbaA8arELF2Ti9s59BQyEJ86npJFNpjQZXpR%2FOQ9AO2z%2FBvaMfI9Mw%2Fyy9VYkVepKtfukd8SR8KLjBTxqm3ownpAfvhg2snkPh3kv0P6E7gstaNAGUt5BJTBHgpmblUIuslZqQLtLrFV%2FMTvD60%2BKaJfz59EEuASYhbSrypow3DetaMf2qngUJFF6uZY67rPrvgRFuGnSYIfOZM0z7pRswzlDi%2F8U1UEaUFVM%2BVMiZ7RpI6FB0aLe4iCYqSP6hvYCn4AoBq30hPEa4OwY3qXQM91pAL%2FM7TBOnpVzDAq7u9BjqkATXTTl2yRCThtroogGqMrxHxJ0c8CnmhkmONRHG1dYhks14KhrBjNYYTNc7cIrLtMv0VUvfEby%2F7AKJ8JADdmId31Nztx%2Bx2qzA7uQIuQhpmzfUevkxnUfGhNMT5S2JiregOvBq0QbLdSdZoUqGAQSKrq%2FjTRWRyC6XPpIohH3XvWAqUq92K%2BHqmtBjYLq%2B9Z%2BpEn8ecD6gDZcIcghZ%2FWpmvLkBx&X-Amz-Signature=a04fa9b420c023679d49df730d41c04d6eb009e08d7dbd4afe1e1bd54ef566a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSCSMI4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8UsA%2FCiJYamBmxnTAIW05oqefSEg9KUy5D8xW9KhjQIhAIRYgS02s3hdEOKWgxkPooOBA9LNkDkdc503SY922v%2B5Kv8DCCcQABoMNjM3NDIzMTgzODA1IgytXIf8EkO7fN0EmjEq3AMPRDy6msmZCbRlXva%2FAZi1mRBnsqXmzfZSRUOvVPSK0cCecibYK039nPZwZchOj5LmWnLs9j6UDa82dqMILzE75bgpJwBXdNJ2kcP0%2FsApSuhFU7eq1MbxehDHehZYlYvvruwq45O7uXBPW4S%2FNntiXo7SCbkYjp1d9CMojXAXcZqpMmdWTOvNeYrIy1cHvqjjT%2BrT2teMmWVDWzqsi8a3BJ3kf1TOFC2rZUK8WQgNXxqWvZroruBUpqIPnjrlB4%2BZJuZp1h%2BJ%2Bo2%2Fho8bF3eSarzmwXJmRspJJUudTvxZFb8ierq8hROlXSQCxgZWcABhrUWOw41JLFXbAgvyuIQ7oJbaA8arELF2Ti9s59BQyEJ86npJFNpjQZXpR%2FOQ9AO2z%2FBvaMfI9Mw%2Fyy9VYkVepKtfukd8SR8KLjBTxqm3ownpAfvhg2snkPh3kv0P6E7gstaNAGUt5BJTBHgpmblUIuslZqQLtLrFV%2FMTvD60%2BKaJfz59EEuASYhbSrypow3DetaMf2qngUJFF6uZY67rPrvgRFuGnSYIfOZM0z7pRswzlDi%2F8U1UEaUFVM%2BVMiZ7RpI6FB0aLe4iCYqSP6hvYCn4AoBq30hPEa4OwY3qXQM91pAL%2FM7TBOnpVzDAq7u9BjqkATXTTl2yRCThtroogGqMrxHxJ0c8CnmhkmONRHG1dYhks14KhrBjNYYTNc7cIrLtMv0VUvfEby%2F7AKJ8JADdmId31Nztx%2Bx2qzA7uQIuQhpmzfUevkxnUfGhNMT5S2JiregOvBq0QbLdSdZoUqGAQSKrq%2FjTRWRyC6XPpIohH3XvWAqUq92K%2BHqmtBjYLq%2B9Z%2BpEn8ecD6gDZcIcghZ%2FWpmvLkBx&X-Amz-Signature=7d8ebf4ce7076ec3bc9ef7a8b5d1f90384cd05934706c73fcc021a43710f1232&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSCSMI4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8UsA%2FCiJYamBmxnTAIW05oqefSEg9KUy5D8xW9KhjQIhAIRYgS02s3hdEOKWgxkPooOBA9LNkDkdc503SY922v%2B5Kv8DCCcQABoMNjM3NDIzMTgzODA1IgytXIf8EkO7fN0EmjEq3AMPRDy6msmZCbRlXva%2FAZi1mRBnsqXmzfZSRUOvVPSK0cCecibYK039nPZwZchOj5LmWnLs9j6UDa82dqMILzE75bgpJwBXdNJ2kcP0%2FsApSuhFU7eq1MbxehDHehZYlYvvruwq45O7uXBPW4S%2FNntiXo7SCbkYjp1d9CMojXAXcZqpMmdWTOvNeYrIy1cHvqjjT%2BrT2teMmWVDWzqsi8a3BJ3kf1TOFC2rZUK8WQgNXxqWvZroruBUpqIPnjrlB4%2BZJuZp1h%2BJ%2Bo2%2Fho8bF3eSarzmwXJmRspJJUudTvxZFb8ierq8hROlXSQCxgZWcABhrUWOw41JLFXbAgvyuIQ7oJbaA8arELF2Ti9s59BQyEJ86npJFNpjQZXpR%2FOQ9AO2z%2FBvaMfI9Mw%2Fyy9VYkVepKtfukd8SR8KLjBTxqm3ownpAfvhg2snkPh3kv0P6E7gstaNAGUt5BJTBHgpmblUIuslZqQLtLrFV%2FMTvD60%2BKaJfz59EEuASYhbSrypow3DetaMf2qngUJFF6uZY67rPrvgRFuGnSYIfOZM0z7pRswzlDi%2F8U1UEaUFVM%2BVMiZ7RpI6FB0aLe4iCYqSP6hvYCn4AoBq30hPEa4OwY3qXQM91pAL%2FM7TBOnpVzDAq7u9BjqkATXTTl2yRCThtroogGqMrxHxJ0c8CnmhkmONRHG1dYhks14KhrBjNYYTNc7cIrLtMv0VUvfEby%2F7AKJ8JADdmId31Nztx%2Bx2qzA7uQIuQhpmzfUevkxnUfGhNMT5S2JiregOvBq0QbLdSdZoUqGAQSKrq%2FjTRWRyC6XPpIohH3XvWAqUq92K%2BHqmtBjYLq%2B9Z%2BpEn8ecD6gDZcIcghZ%2FWpmvLkBx&X-Amz-Signature=3fdb7a577aa0fe6ee2e9e4c54c4c52196ef9255afd28f43d422de1178409ce75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSCSMI4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8UsA%2FCiJYamBmxnTAIW05oqefSEg9KUy5D8xW9KhjQIhAIRYgS02s3hdEOKWgxkPooOBA9LNkDkdc503SY922v%2B5Kv8DCCcQABoMNjM3NDIzMTgzODA1IgytXIf8EkO7fN0EmjEq3AMPRDy6msmZCbRlXva%2FAZi1mRBnsqXmzfZSRUOvVPSK0cCecibYK039nPZwZchOj5LmWnLs9j6UDa82dqMILzE75bgpJwBXdNJ2kcP0%2FsApSuhFU7eq1MbxehDHehZYlYvvruwq45O7uXBPW4S%2FNntiXo7SCbkYjp1d9CMojXAXcZqpMmdWTOvNeYrIy1cHvqjjT%2BrT2teMmWVDWzqsi8a3BJ3kf1TOFC2rZUK8WQgNXxqWvZroruBUpqIPnjrlB4%2BZJuZp1h%2BJ%2Bo2%2Fho8bF3eSarzmwXJmRspJJUudTvxZFb8ierq8hROlXSQCxgZWcABhrUWOw41JLFXbAgvyuIQ7oJbaA8arELF2Ti9s59BQyEJ86npJFNpjQZXpR%2FOQ9AO2z%2FBvaMfI9Mw%2Fyy9VYkVepKtfukd8SR8KLjBTxqm3ownpAfvhg2snkPh3kv0P6E7gstaNAGUt5BJTBHgpmblUIuslZqQLtLrFV%2FMTvD60%2BKaJfz59EEuASYhbSrypow3DetaMf2qngUJFF6uZY67rPrvgRFuGnSYIfOZM0z7pRswzlDi%2F8U1UEaUFVM%2BVMiZ7RpI6FB0aLe4iCYqSP6hvYCn4AoBq30hPEa4OwY3qXQM91pAL%2FM7TBOnpVzDAq7u9BjqkATXTTl2yRCThtroogGqMrxHxJ0c8CnmhkmONRHG1dYhks14KhrBjNYYTNc7cIrLtMv0VUvfEby%2F7AKJ8JADdmId31Nztx%2Bx2qzA7uQIuQhpmzfUevkxnUfGhNMT5S2JiregOvBq0QbLdSdZoUqGAQSKrq%2FjTRWRyC6XPpIohH3XvWAqUq92K%2BHqmtBjYLq%2B9Z%2BpEn8ecD6gDZcIcghZ%2FWpmvLkBx&X-Amz-Signature=216e1f0903b66ded47b91a604d9ed295e2204d3522cbab0c421ac87fda2abb90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
