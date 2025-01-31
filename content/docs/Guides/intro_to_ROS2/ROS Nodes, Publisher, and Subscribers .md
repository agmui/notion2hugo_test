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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5X5G3Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAoN356TZaByoAIoNDf8mh52rJg64ja4tacSmcgCOXAiByIpI7y6gIFcC2i%2B7%2FXMjwFYgzbg8USofHcgsgfdSEtiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZE74s%2BdnzyRwoygKtwDX%2FRp2uP%2BE8HxHAjnQZU9ba9EAobSQHcIe3O4kbjlAMY5oig8cZDFck1opvxEP6zD7%2BL6JTvMbc3BRp%2BjCTx2KqZ%2FmkLpwMi0lnnEpstFTJtNBftKqxGpv22%2FhuhtmZldmNOJ1bi9idZZu3%2Bi1O6wqZYy8D5ToHzU66BB7IAhTEflJ9zwND%2B27bHyUG%2FQbJl0UHnaYh9wdQZMtfrtayBI514SIWeC3QOZ5h520sQVdUElBh5ID8j2uCFj6OoDAAbZsmnpCKHuhp%2FWtT5D9R7g4GiISeUdwBB1npg6EnnF1ZNjqaIRANsaPBiYeZWDt28nAyomotvC0U%2F8Pkjyfjzm5LjpagYMroxQoYekpsbf7Zic3jrrqr2Zf5FucmDE7XFREhtyZgTUYFNU3ethePqOXkJDh0%2F8X1cD8kubO8196uVDxo7qDQboMQUFkHmcchI7MrAdtR4kFKulT%2FhmZk1WrrASK1i7zttskbR8xbZznEK1tgD32XCo%2B9dUD5rdOvXp1OvgWQ65z2M%2BjNLdEe6QCfk4kEK7p3m7zBoz05bQiiDZWW5bikc8cdmvCJ9qxMOG0yNFWzwX63twl7bl3vlaD4jgFT3%2FMbDz58k5X0XGDKSIZjPjnvuC%2B2wCChIwltLwvAY6pgFpGr%2BkS%2FawHXuhZteUOXerGnOH8NkXRSRb0P8eMuZQsLv2Krs7t0pUH77YwpVQKH4rm2mzbXPn%2FxtsjhU4AixtLz1Ty%2BNKyWWEXv58RsYAlgWSSgmgE3W6dV7YhbhwF0mDr6oltnEvYTP8e8ftByZK4mmzujwwU62sBJ8sKw%2FLlsK0eWb92YKnYQMWH5rHUYepxKjXWavUDxXlfys6mCoHXozLZKoh&X-Amz-Signature=feeab450c087bddeb08f1529931ad8f2aa46fb5a55fa6bd3179f4bcc8dd56a99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5X5G3Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAoN356TZaByoAIoNDf8mh52rJg64ja4tacSmcgCOXAiByIpI7y6gIFcC2i%2B7%2FXMjwFYgzbg8USofHcgsgfdSEtiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZE74s%2BdnzyRwoygKtwDX%2FRp2uP%2BE8HxHAjnQZU9ba9EAobSQHcIe3O4kbjlAMY5oig8cZDFck1opvxEP6zD7%2BL6JTvMbc3BRp%2BjCTx2KqZ%2FmkLpwMi0lnnEpstFTJtNBftKqxGpv22%2FhuhtmZldmNOJ1bi9idZZu3%2Bi1O6wqZYy8D5ToHzU66BB7IAhTEflJ9zwND%2B27bHyUG%2FQbJl0UHnaYh9wdQZMtfrtayBI514SIWeC3QOZ5h520sQVdUElBh5ID8j2uCFj6OoDAAbZsmnpCKHuhp%2FWtT5D9R7g4GiISeUdwBB1npg6EnnF1ZNjqaIRANsaPBiYeZWDt28nAyomotvC0U%2F8Pkjyfjzm5LjpagYMroxQoYekpsbf7Zic3jrrqr2Zf5FucmDE7XFREhtyZgTUYFNU3ethePqOXkJDh0%2F8X1cD8kubO8196uVDxo7qDQboMQUFkHmcchI7MrAdtR4kFKulT%2FhmZk1WrrASK1i7zttskbR8xbZznEK1tgD32XCo%2B9dUD5rdOvXp1OvgWQ65z2M%2BjNLdEe6QCfk4kEK7p3m7zBoz05bQiiDZWW5bikc8cdmvCJ9qxMOG0yNFWzwX63twl7bl3vlaD4jgFT3%2FMbDz58k5X0XGDKSIZjPjnvuC%2B2wCChIwltLwvAY6pgFpGr%2BkS%2FawHXuhZteUOXerGnOH8NkXRSRb0P8eMuZQsLv2Krs7t0pUH77YwpVQKH4rm2mzbXPn%2FxtsjhU4AixtLz1Ty%2BNKyWWEXv58RsYAlgWSSgmgE3W6dV7YhbhwF0mDr6oltnEvYTP8e8ftByZK4mmzujwwU62sBJ8sKw%2FLlsK0eWb92YKnYQMWH5rHUYepxKjXWavUDxXlfys6mCoHXozLZKoh&X-Amz-Signature=351a42d09818ca0e31771f1b4030ab9fa52d518d7bff5cf0d02fb628860f3b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5X5G3Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAoN356TZaByoAIoNDf8mh52rJg64ja4tacSmcgCOXAiByIpI7y6gIFcC2i%2B7%2FXMjwFYgzbg8USofHcgsgfdSEtiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZE74s%2BdnzyRwoygKtwDX%2FRp2uP%2BE8HxHAjnQZU9ba9EAobSQHcIe3O4kbjlAMY5oig8cZDFck1opvxEP6zD7%2BL6JTvMbc3BRp%2BjCTx2KqZ%2FmkLpwMi0lnnEpstFTJtNBftKqxGpv22%2FhuhtmZldmNOJ1bi9idZZu3%2Bi1O6wqZYy8D5ToHzU66BB7IAhTEflJ9zwND%2B27bHyUG%2FQbJl0UHnaYh9wdQZMtfrtayBI514SIWeC3QOZ5h520sQVdUElBh5ID8j2uCFj6OoDAAbZsmnpCKHuhp%2FWtT5D9R7g4GiISeUdwBB1npg6EnnF1ZNjqaIRANsaPBiYeZWDt28nAyomotvC0U%2F8Pkjyfjzm5LjpagYMroxQoYekpsbf7Zic3jrrqr2Zf5FucmDE7XFREhtyZgTUYFNU3ethePqOXkJDh0%2F8X1cD8kubO8196uVDxo7qDQboMQUFkHmcchI7MrAdtR4kFKulT%2FhmZk1WrrASK1i7zttskbR8xbZznEK1tgD32XCo%2B9dUD5rdOvXp1OvgWQ65z2M%2BjNLdEe6QCfk4kEK7p3m7zBoz05bQiiDZWW5bikc8cdmvCJ9qxMOG0yNFWzwX63twl7bl3vlaD4jgFT3%2FMbDz58k5X0XGDKSIZjPjnvuC%2B2wCChIwltLwvAY6pgFpGr%2BkS%2FawHXuhZteUOXerGnOH8NkXRSRb0P8eMuZQsLv2Krs7t0pUH77YwpVQKH4rm2mzbXPn%2FxtsjhU4AixtLz1Ty%2BNKyWWEXv58RsYAlgWSSgmgE3W6dV7YhbhwF0mDr6oltnEvYTP8e8ftByZK4mmzujwwU62sBJ8sKw%2FLlsK0eWb92YKnYQMWH5rHUYepxKjXWavUDxXlfys6mCoHXozLZKoh&X-Amz-Signature=795fb5aefe8eef43bcd05789eac88f632f0b0b0fc11b72589f5bd5d73ae6edc3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5X5G3Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAoN356TZaByoAIoNDf8mh52rJg64ja4tacSmcgCOXAiByIpI7y6gIFcC2i%2B7%2FXMjwFYgzbg8USofHcgsgfdSEtiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZE74s%2BdnzyRwoygKtwDX%2FRp2uP%2BE8HxHAjnQZU9ba9EAobSQHcIe3O4kbjlAMY5oig8cZDFck1opvxEP6zD7%2BL6JTvMbc3BRp%2BjCTx2KqZ%2FmkLpwMi0lnnEpstFTJtNBftKqxGpv22%2FhuhtmZldmNOJ1bi9idZZu3%2Bi1O6wqZYy8D5ToHzU66BB7IAhTEflJ9zwND%2B27bHyUG%2FQbJl0UHnaYh9wdQZMtfrtayBI514SIWeC3QOZ5h520sQVdUElBh5ID8j2uCFj6OoDAAbZsmnpCKHuhp%2FWtT5D9R7g4GiISeUdwBB1npg6EnnF1ZNjqaIRANsaPBiYeZWDt28nAyomotvC0U%2F8Pkjyfjzm5LjpagYMroxQoYekpsbf7Zic3jrrqr2Zf5FucmDE7XFREhtyZgTUYFNU3ethePqOXkJDh0%2F8X1cD8kubO8196uVDxo7qDQboMQUFkHmcchI7MrAdtR4kFKulT%2FhmZk1WrrASK1i7zttskbR8xbZznEK1tgD32XCo%2B9dUD5rdOvXp1OvgWQ65z2M%2BjNLdEe6QCfk4kEK7p3m7zBoz05bQiiDZWW5bikc8cdmvCJ9qxMOG0yNFWzwX63twl7bl3vlaD4jgFT3%2FMbDz58k5X0XGDKSIZjPjnvuC%2B2wCChIwltLwvAY6pgFpGr%2BkS%2FawHXuhZteUOXerGnOH8NkXRSRb0P8eMuZQsLv2Krs7t0pUH77YwpVQKH4rm2mzbXPn%2FxtsjhU4AixtLz1Ty%2BNKyWWEXv58RsYAlgWSSgmgE3W6dV7YhbhwF0mDr6oltnEvYTP8e8ftByZK4mmzujwwU62sBJ8sKw%2FLlsK0eWb92YKnYQMWH5rHUYepxKjXWavUDxXlfys6mCoHXozLZKoh&X-Amz-Signature=328c9d07e53f66e45f2cc244ba820f3eb3a485b791eaf7b6a848a910ee532033&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5X5G3Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAoN356TZaByoAIoNDf8mh52rJg64ja4tacSmcgCOXAiByIpI7y6gIFcC2i%2B7%2FXMjwFYgzbg8USofHcgsgfdSEtiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZE74s%2BdnzyRwoygKtwDX%2FRp2uP%2BE8HxHAjnQZU9ba9EAobSQHcIe3O4kbjlAMY5oig8cZDFck1opvxEP6zD7%2BL6JTvMbc3BRp%2BjCTx2KqZ%2FmkLpwMi0lnnEpstFTJtNBftKqxGpv22%2FhuhtmZldmNOJ1bi9idZZu3%2Bi1O6wqZYy8D5ToHzU66BB7IAhTEflJ9zwND%2B27bHyUG%2FQbJl0UHnaYh9wdQZMtfrtayBI514SIWeC3QOZ5h520sQVdUElBh5ID8j2uCFj6OoDAAbZsmnpCKHuhp%2FWtT5D9R7g4GiISeUdwBB1npg6EnnF1ZNjqaIRANsaPBiYeZWDt28nAyomotvC0U%2F8Pkjyfjzm5LjpagYMroxQoYekpsbf7Zic3jrrqr2Zf5FucmDE7XFREhtyZgTUYFNU3ethePqOXkJDh0%2F8X1cD8kubO8196uVDxo7qDQboMQUFkHmcchI7MrAdtR4kFKulT%2FhmZk1WrrASK1i7zttskbR8xbZznEK1tgD32XCo%2B9dUD5rdOvXp1OvgWQ65z2M%2BjNLdEe6QCfk4kEK7p3m7zBoz05bQiiDZWW5bikc8cdmvCJ9qxMOG0yNFWzwX63twl7bl3vlaD4jgFT3%2FMbDz58k5X0XGDKSIZjPjnvuC%2B2wCChIwltLwvAY6pgFpGr%2BkS%2FawHXuhZteUOXerGnOH8NkXRSRb0P8eMuZQsLv2Krs7t0pUH77YwpVQKH4rm2mzbXPn%2FxtsjhU4AixtLz1Ty%2BNKyWWEXv58RsYAlgWSSgmgE3W6dV7YhbhwF0mDr6oltnEvYTP8e8ftByZK4mmzujwwU62sBJ8sKw%2FLlsK0eWb92YKnYQMWH5rHUYepxKjXWavUDxXlfys6mCoHXozLZKoh&X-Amz-Signature=180decf8f430a4eeaa008baa3a9c121c4be8573883e392314a411cce72907e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5X5G3Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAoN356TZaByoAIoNDf8mh52rJg64ja4tacSmcgCOXAiByIpI7y6gIFcC2i%2B7%2FXMjwFYgzbg8USofHcgsgfdSEtiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZE74s%2BdnzyRwoygKtwDX%2FRp2uP%2BE8HxHAjnQZU9ba9EAobSQHcIe3O4kbjlAMY5oig8cZDFck1opvxEP6zD7%2BL6JTvMbc3BRp%2BjCTx2KqZ%2FmkLpwMi0lnnEpstFTJtNBftKqxGpv22%2FhuhtmZldmNOJ1bi9idZZu3%2Bi1O6wqZYy8D5ToHzU66BB7IAhTEflJ9zwND%2B27bHyUG%2FQbJl0UHnaYh9wdQZMtfrtayBI514SIWeC3QOZ5h520sQVdUElBh5ID8j2uCFj6OoDAAbZsmnpCKHuhp%2FWtT5D9R7g4GiISeUdwBB1npg6EnnF1ZNjqaIRANsaPBiYeZWDt28nAyomotvC0U%2F8Pkjyfjzm5LjpagYMroxQoYekpsbf7Zic3jrrqr2Zf5FucmDE7XFREhtyZgTUYFNU3ethePqOXkJDh0%2F8X1cD8kubO8196uVDxo7qDQboMQUFkHmcchI7MrAdtR4kFKulT%2FhmZk1WrrASK1i7zttskbR8xbZznEK1tgD32XCo%2B9dUD5rdOvXp1OvgWQ65z2M%2BjNLdEe6QCfk4kEK7p3m7zBoz05bQiiDZWW5bikc8cdmvCJ9qxMOG0yNFWzwX63twl7bl3vlaD4jgFT3%2FMbDz58k5X0XGDKSIZjPjnvuC%2B2wCChIwltLwvAY6pgFpGr%2BkS%2FawHXuhZteUOXerGnOH8NkXRSRb0P8eMuZQsLv2Krs7t0pUH77YwpVQKH4rm2mzbXPn%2FxtsjhU4AixtLz1Ty%2BNKyWWEXv58RsYAlgWSSgmgE3W6dV7YhbhwF0mDr6oltnEvYTP8e8ftByZK4mmzujwwU62sBJ8sKw%2FLlsK0eWb92YKnYQMWH5rHUYepxKjXWavUDxXlfys6mCoHXozLZKoh&X-Amz-Signature=578956a2c4ea1ea35090885e1acd044bb1bdca0f6f8ac6edf6cbc655026bfab1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5X5G3Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAoN356TZaByoAIoNDf8mh52rJg64ja4tacSmcgCOXAiByIpI7y6gIFcC2i%2B7%2FXMjwFYgzbg8USofHcgsgfdSEtiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZE74s%2BdnzyRwoygKtwDX%2FRp2uP%2BE8HxHAjnQZU9ba9EAobSQHcIe3O4kbjlAMY5oig8cZDFck1opvxEP6zD7%2BL6JTvMbc3BRp%2BjCTx2KqZ%2FmkLpwMi0lnnEpstFTJtNBftKqxGpv22%2FhuhtmZldmNOJ1bi9idZZu3%2Bi1O6wqZYy8D5ToHzU66BB7IAhTEflJ9zwND%2B27bHyUG%2FQbJl0UHnaYh9wdQZMtfrtayBI514SIWeC3QOZ5h520sQVdUElBh5ID8j2uCFj6OoDAAbZsmnpCKHuhp%2FWtT5D9R7g4GiISeUdwBB1npg6EnnF1ZNjqaIRANsaPBiYeZWDt28nAyomotvC0U%2F8Pkjyfjzm5LjpagYMroxQoYekpsbf7Zic3jrrqr2Zf5FucmDE7XFREhtyZgTUYFNU3ethePqOXkJDh0%2F8X1cD8kubO8196uVDxo7qDQboMQUFkHmcchI7MrAdtR4kFKulT%2FhmZk1WrrASK1i7zttskbR8xbZznEK1tgD32XCo%2B9dUD5rdOvXp1OvgWQ65z2M%2BjNLdEe6QCfk4kEK7p3m7zBoz05bQiiDZWW5bikc8cdmvCJ9qxMOG0yNFWzwX63twl7bl3vlaD4jgFT3%2FMbDz58k5X0XGDKSIZjPjnvuC%2B2wCChIwltLwvAY6pgFpGr%2BkS%2FawHXuhZteUOXerGnOH8NkXRSRb0P8eMuZQsLv2Krs7t0pUH77YwpVQKH4rm2mzbXPn%2FxtsjhU4AixtLz1Ty%2BNKyWWEXv58RsYAlgWSSgmgE3W6dV7YhbhwF0mDr6oltnEvYTP8e8ftByZK4mmzujwwU62sBJ8sKw%2FLlsK0eWb92YKnYQMWH5rHUYepxKjXWavUDxXlfys6mCoHXozLZKoh&X-Amz-Signature=6e8387ba478f92399e750933187a69b166eceb83bda02d2f4e519dfd0b989a42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5X5G3Q%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsAoN356TZaByoAIoNDf8mh52rJg64ja4tacSmcgCOXAiByIpI7y6gIFcC2i%2B7%2FXMjwFYgzbg8USofHcgsgfdSEtiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFZE74s%2BdnzyRwoygKtwDX%2FRp2uP%2BE8HxHAjnQZU9ba9EAobSQHcIe3O4kbjlAMY5oig8cZDFck1opvxEP6zD7%2BL6JTvMbc3BRp%2BjCTx2KqZ%2FmkLpwMi0lnnEpstFTJtNBftKqxGpv22%2FhuhtmZldmNOJ1bi9idZZu3%2Bi1O6wqZYy8D5ToHzU66BB7IAhTEflJ9zwND%2B27bHyUG%2FQbJl0UHnaYh9wdQZMtfrtayBI514SIWeC3QOZ5h520sQVdUElBh5ID8j2uCFj6OoDAAbZsmnpCKHuhp%2FWtT5D9R7g4GiISeUdwBB1npg6EnnF1ZNjqaIRANsaPBiYeZWDt28nAyomotvC0U%2F8Pkjyfjzm5LjpagYMroxQoYekpsbf7Zic3jrrqr2Zf5FucmDE7XFREhtyZgTUYFNU3ethePqOXkJDh0%2F8X1cD8kubO8196uVDxo7qDQboMQUFkHmcchI7MrAdtR4kFKulT%2FhmZk1WrrASK1i7zttskbR8xbZznEK1tgD32XCo%2B9dUD5rdOvXp1OvgWQ65z2M%2BjNLdEe6QCfk4kEK7p3m7zBoz05bQiiDZWW5bikc8cdmvCJ9qxMOG0yNFWzwX63twl7bl3vlaD4jgFT3%2FMbDz58k5X0XGDKSIZjPjnvuC%2B2wCChIwltLwvAY6pgFpGr%2BkS%2FawHXuhZteUOXerGnOH8NkXRSRb0P8eMuZQsLv2Krs7t0pUH77YwpVQKH4rm2mzbXPn%2FxtsjhU4AixtLz1Ty%2BNKyWWEXv58RsYAlgWSSgmgE3W6dV7YhbhwF0mDr6oltnEvYTP8e8ftByZK4mmzujwwU62sBJ8sKw%2FLlsK0eWb92YKnYQMWH5rHUYepxKjXWavUDxXlfys6mCoHXozLZKoh&X-Amz-Signature=7873d599ef2cc39de1c1ef8f96fd31b45ebfb599000385d68cb149c4347ac3b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
