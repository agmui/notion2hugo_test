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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKKI6U2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICx3P2mTWQ9WV70sWVh1nhIZUb63Oc%2FxchYfFiDPblgFAiAI5vocoMJnq8XhXcsFqqmpjff1jCSDR7Df%2Fe%2FzTakDsSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7O%2F05MT0Bi7jRYnpKtwDkqFouwMFXWjA3XyEUwPbMQ3s7tbnzoCKNSCVJu0cV%2BGkcYHODz5BRy4lX6VohJiwqhi%2F7VF%2BX1A1568IiI%2BPr6MJ0TWaaH9KLUsZ9waA7qvt76Qqj033awuSkkb5rqcs3PSiDZuBGYiOvn61dALKfAnPdPogZbqS8MdUyrwkVboop7KUUvs546t6fygdczQRQ8ViBkZKgFK%2FRL20lwdWDArhWIKqopbUhWH8aMwsJ7w09zeuaWVXbsc833ERdVH1pb%2BRex%2BP6mcVM0v9FOr5PDzkrJUZeob9Q%2BtPRrRR8HZWSRMFDPx8ZO5I6RdUblF2gsW1KGb3VD5l7bN8e%2Fc0EahOyWW1iRz7KwKzQXuqV560s6shU2tlQdcL7RQBnCozSc6m%2BY1pIgGwS%2FkxJZyG%2F4yfLkqmdnssIFq1dGI6kwlsANNSkuAY4PtW6lssHo2aZi%2F5wf85sScjkFVjLjOSA92wXGuRUu5XOcpUzEtRxPjp5xjhg4QJRw3oTHC176C7mIQUtWjUQBkOeMH3DQPGE4LRcE7xrvdOgZTymN55HhGy170Qi9%2BzL7SZSaS0DMrBSexX2uhkr7ukc3ajA4E4DuGeMGY0y6B3vEm%2B3U6Q0fx2eTy7s0uHpryDdvQwtfbNvQY6pgGKVmb98ftz8xlm8YMD7Pqg3mgY5L2oTw1F7USym4mc4DE7PWOX15oxsS7hS7VCAu%2F84NPVUJrqPjRwXrcUCiLO9Gcbdnm73v2xB48HkzK82ACQvu6ioOPKn3Bia7uMktcRG6EWgSnDjNm6Y4gutbxIAGXDqbAIICWjErBlHZJs%2FdAtDqwO5nulqz9h1c1EuDtFQzW77a5sUkC044kIMH0fXTcbpl3j&X-Amz-Signature=90e4acc5c79132eafee8e18c42100ed2f2ef8585e61f927f0f1ab6295bf12e78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKKI6U2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICx3P2mTWQ9WV70sWVh1nhIZUb63Oc%2FxchYfFiDPblgFAiAI5vocoMJnq8XhXcsFqqmpjff1jCSDR7Df%2Fe%2FzTakDsSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7O%2F05MT0Bi7jRYnpKtwDkqFouwMFXWjA3XyEUwPbMQ3s7tbnzoCKNSCVJu0cV%2BGkcYHODz5BRy4lX6VohJiwqhi%2F7VF%2BX1A1568IiI%2BPr6MJ0TWaaH9KLUsZ9waA7qvt76Qqj033awuSkkb5rqcs3PSiDZuBGYiOvn61dALKfAnPdPogZbqS8MdUyrwkVboop7KUUvs546t6fygdczQRQ8ViBkZKgFK%2FRL20lwdWDArhWIKqopbUhWH8aMwsJ7w09zeuaWVXbsc833ERdVH1pb%2BRex%2BP6mcVM0v9FOr5PDzkrJUZeob9Q%2BtPRrRR8HZWSRMFDPx8ZO5I6RdUblF2gsW1KGb3VD5l7bN8e%2Fc0EahOyWW1iRz7KwKzQXuqV560s6shU2tlQdcL7RQBnCozSc6m%2BY1pIgGwS%2FkxJZyG%2F4yfLkqmdnssIFq1dGI6kwlsANNSkuAY4PtW6lssHo2aZi%2F5wf85sScjkFVjLjOSA92wXGuRUu5XOcpUzEtRxPjp5xjhg4QJRw3oTHC176C7mIQUtWjUQBkOeMH3DQPGE4LRcE7xrvdOgZTymN55HhGy170Qi9%2BzL7SZSaS0DMrBSexX2uhkr7ukc3ajA4E4DuGeMGY0y6B3vEm%2B3U6Q0fx2eTy7s0uHpryDdvQwtfbNvQY6pgGKVmb98ftz8xlm8YMD7Pqg3mgY5L2oTw1F7USym4mc4DE7PWOX15oxsS7hS7VCAu%2F84NPVUJrqPjRwXrcUCiLO9Gcbdnm73v2xB48HkzK82ACQvu6ioOPKn3Bia7uMktcRG6EWgSnDjNm6Y4gutbxIAGXDqbAIICWjErBlHZJs%2FdAtDqwO5nulqz9h1c1EuDtFQzW77a5sUkC044kIMH0fXTcbpl3j&X-Amz-Signature=6decc71f4987dd5b2dcb7bbd18e1fd3d71c8eda88de45f16254cc7c2444ac3cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKKI6U2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICx3P2mTWQ9WV70sWVh1nhIZUb63Oc%2FxchYfFiDPblgFAiAI5vocoMJnq8XhXcsFqqmpjff1jCSDR7Df%2Fe%2FzTakDsSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7O%2F05MT0Bi7jRYnpKtwDkqFouwMFXWjA3XyEUwPbMQ3s7tbnzoCKNSCVJu0cV%2BGkcYHODz5BRy4lX6VohJiwqhi%2F7VF%2BX1A1568IiI%2BPr6MJ0TWaaH9KLUsZ9waA7qvt76Qqj033awuSkkb5rqcs3PSiDZuBGYiOvn61dALKfAnPdPogZbqS8MdUyrwkVboop7KUUvs546t6fygdczQRQ8ViBkZKgFK%2FRL20lwdWDArhWIKqopbUhWH8aMwsJ7w09zeuaWVXbsc833ERdVH1pb%2BRex%2BP6mcVM0v9FOr5PDzkrJUZeob9Q%2BtPRrRR8HZWSRMFDPx8ZO5I6RdUblF2gsW1KGb3VD5l7bN8e%2Fc0EahOyWW1iRz7KwKzQXuqV560s6shU2tlQdcL7RQBnCozSc6m%2BY1pIgGwS%2FkxJZyG%2F4yfLkqmdnssIFq1dGI6kwlsANNSkuAY4PtW6lssHo2aZi%2F5wf85sScjkFVjLjOSA92wXGuRUu5XOcpUzEtRxPjp5xjhg4QJRw3oTHC176C7mIQUtWjUQBkOeMH3DQPGE4LRcE7xrvdOgZTymN55HhGy170Qi9%2BzL7SZSaS0DMrBSexX2uhkr7ukc3ajA4E4DuGeMGY0y6B3vEm%2B3U6Q0fx2eTy7s0uHpryDdvQwtfbNvQY6pgGKVmb98ftz8xlm8YMD7Pqg3mgY5L2oTw1F7USym4mc4DE7PWOX15oxsS7hS7VCAu%2F84NPVUJrqPjRwXrcUCiLO9Gcbdnm73v2xB48HkzK82ACQvu6ioOPKn3Bia7uMktcRG6EWgSnDjNm6Y4gutbxIAGXDqbAIICWjErBlHZJs%2FdAtDqwO5nulqz9h1c1EuDtFQzW77a5sUkC044kIMH0fXTcbpl3j&X-Amz-Signature=dd9db9d06ead02a2f83464a3327e31fb529732421676c613e841db46331183c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKKI6U2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICx3P2mTWQ9WV70sWVh1nhIZUb63Oc%2FxchYfFiDPblgFAiAI5vocoMJnq8XhXcsFqqmpjff1jCSDR7Df%2Fe%2FzTakDsSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7O%2F05MT0Bi7jRYnpKtwDkqFouwMFXWjA3XyEUwPbMQ3s7tbnzoCKNSCVJu0cV%2BGkcYHODz5BRy4lX6VohJiwqhi%2F7VF%2BX1A1568IiI%2BPr6MJ0TWaaH9KLUsZ9waA7qvt76Qqj033awuSkkb5rqcs3PSiDZuBGYiOvn61dALKfAnPdPogZbqS8MdUyrwkVboop7KUUvs546t6fygdczQRQ8ViBkZKgFK%2FRL20lwdWDArhWIKqopbUhWH8aMwsJ7w09zeuaWVXbsc833ERdVH1pb%2BRex%2BP6mcVM0v9FOr5PDzkrJUZeob9Q%2BtPRrRR8HZWSRMFDPx8ZO5I6RdUblF2gsW1KGb3VD5l7bN8e%2Fc0EahOyWW1iRz7KwKzQXuqV560s6shU2tlQdcL7RQBnCozSc6m%2BY1pIgGwS%2FkxJZyG%2F4yfLkqmdnssIFq1dGI6kwlsANNSkuAY4PtW6lssHo2aZi%2F5wf85sScjkFVjLjOSA92wXGuRUu5XOcpUzEtRxPjp5xjhg4QJRw3oTHC176C7mIQUtWjUQBkOeMH3DQPGE4LRcE7xrvdOgZTymN55HhGy170Qi9%2BzL7SZSaS0DMrBSexX2uhkr7ukc3ajA4E4DuGeMGY0y6B3vEm%2B3U6Q0fx2eTy7s0uHpryDdvQwtfbNvQY6pgGKVmb98ftz8xlm8YMD7Pqg3mgY5L2oTw1F7USym4mc4DE7PWOX15oxsS7hS7VCAu%2F84NPVUJrqPjRwXrcUCiLO9Gcbdnm73v2xB48HkzK82ACQvu6ioOPKn3Bia7uMktcRG6EWgSnDjNm6Y4gutbxIAGXDqbAIICWjErBlHZJs%2FdAtDqwO5nulqz9h1c1EuDtFQzW77a5sUkC044kIMH0fXTcbpl3j&X-Amz-Signature=bf67bb5467e631ef9b6027ec62e701401bab85ed9c0b1662b914836c8f27792d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKKI6U2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICx3P2mTWQ9WV70sWVh1nhIZUb63Oc%2FxchYfFiDPblgFAiAI5vocoMJnq8XhXcsFqqmpjff1jCSDR7Df%2Fe%2FzTakDsSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7O%2F05MT0Bi7jRYnpKtwDkqFouwMFXWjA3XyEUwPbMQ3s7tbnzoCKNSCVJu0cV%2BGkcYHODz5BRy4lX6VohJiwqhi%2F7VF%2BX1A1568IiI%2BPr6MJ0TWaaH9KLUsZ9waA7qvt76Qqj033awuSkkb5rqcs3PSiDZuBGYiOvn61dALKfAnPdPogZbqS8MdUyrwkVboop7KUUvs546t6fygdczQRQ8ViBkZKgFK%2FRL20lwdWDArhWIKqopbUhWH8aMwsJ7w09zeuaWVXbsc833ERdVH1pb%2BRex%2BP6mcVM0v9FOr5PDzkrJUZeob9Q%2BtPRrRR8HZWSRMFDPx8ZO5I6RdUblF2gsW1KGb3VD5l7bN8e%2Fc0EahOyWW1iRz7KwKzQXuqV560s6shU2tlQdcL7RQBnCozSc6m%2BY1pIgGwS%2FkxJZyG%2F4yfLkqmdnssIFq1dGI6kwlsANNSkuAY4PtW6lssHo2aZi%2F5wf85sScjkFVjLjOSA92wXGuRUu5XOcpUzEtRxPjp5xjhg4QJRw3oTHC176C7mIQUtWjUQBkOeMH3DQPGE4LRcE7xrvdOgZTymN55HhGy170Qi9%2BzL7SZSaS0DMrBSexX2uhkr7ukc3ajA4E4DuGeMGY0y6B3vEm%2B3U6Q0fx2eTy7s0uHpryDdvQwtfbNvQY6pgGKVmb98ftz8xlm8YMD7Pqg3mgY5L2oTw1F7USym4mc4DE7PWOX15oxsS7hS7VCAu%2F84NPVUJrqPjRwXrcUCiLO9Gcbdnm73v2xB48HkzK82ACQvu6ioOPKn3Bia7uMktcRG6EWgSnDjNm6Y4gutbxIAGXDqbAIICWjErBlHZJs%2FdAtDqwO5nulqz9h1c1EuDtFQzW77a5sUkC044kIMH0fXTcbpl3j&X-Amz-Signature=f668880b12465fc7e1459bc41cba24eda514bb26b10d1704cddaa1491e43ba68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKKI6U2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICx3P2mTWQ9WV70sWVh1nhIZUb63Oc%2FxchYfFiDPblgFAiAI5vocoMJnq8XhXcsFqqmpjff1jCSDR7Df%2Fe%2FzTakDsSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7O%2F05MT0Bi7jRYnpKtwDkqFouwMFXWjA3XyEUwPbMQ3s7tbnzoCKNSCVJu0cV%2BGkcYHODz5BRy4lX6VohJiwqhi%2F7VF%2BX1A1568IiI%2BPr6MJ0TWaaH9KLUsZ9waA7qvt76Qqj033awuSkkb5rqcs3PSiDZuBGYiOvn61dALKfAnPdPogZbqS8MdUyrwkVboop7KUUvs546t6fygdczQRQ8ViBkZKgFK%2FRL20lwdWDArhWIKqopbUhWH8aMwsJ7w09zeuaWVXbsc833ERdVH1pb%2BRex%2BP6mcVM0v9FOr5PDzkrJUZeob9Q%2BtPRrRR8HZWSRMFDPx8ZO5I6RdUblF2gsW1KGb3VD5l7bN8e%2Fc0EahOyWW1iRz7KwKzQXuqV560s6shU2tlQdcL7RQBnCozSc6m%2BY1pIgGwS%2FkxJZyG%2F4yfLkqmdnssIFq1dGI6kwlsANNSkuAY4PtW6lssHo2aZi%2F5wf85sScjkFVjLjOSA92wXGuRUu5XOcpUzEtRxPjp5xjhg4QJRw3oTHC176C7mIQUtWjUQBkOeMH3DQPGE4LRcE7xrvdOgZTymN55HhGy170Qi9%2BzL7SZSaS0DMrBSexX2uhkr7ukc3ajA4E4DuGeMGY0y6B3vEm%2B3U6Q0fx2eTy7s0uHpryDdvQwtfbNvQY6pgGKVmb98ftz8xlm8YMD7Pqg3mgY5L2oTw1F7USym4mc4DE7PWOX15oxsS7hS7VCAu%2F84NPVUJrqPjRwXrcUCiLO9Gcbdnm73v2xB48HkzK82ACQvu6ioOPKn3Bia7uMktcRG6EWgSnDjNm6Y4gutbxIAGXDqbAIICWjErBlHZJs%2FdAtDqwO5nulqz9h1c1EuDtFQzW77a5sUkC044kIMH0fXTcbpl3j&X-Amz-Signature=1837a41a288380a2ec711c6dba866905031b1da3bff3fe94d3b8ef9fbbbe24eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKKI6U2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICx3P2mTWQ9WV70sWVh1nhIZUb63Oc%2FxchYfFiDPblgFAiAI5vocoMJnq8XhXcsFqqmpjff1jCSDR7Df%2Fe%2FzTakDsSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7O%2F05MT0Bi7jRYnpKtwDkqFouwMFXWjA3XyEUwPbMQ3s7tbnzoCKNSCVJu0cV%2BGkcYHODz5BRy4lX6VohJiwqhi%2F7VF%2BX1A1568IiI%2BPr6MJ0TWaaH9KLUsZ9waA7qvt76Qqj033awuSkkb5rqcs3PSiDZuBGYiOvn61dALKfAnPdPogZbqS8MdUyrwkVboop7KUUvs546t6fygdczQRQ8ViBkZKgFK%2FRL20lwdWDArhWIKqopbUhWH8aMwsJ7w09zeuaWVXbsc833ERdVH1pb%2BRex%2BP6mcVM0v9FOr5PDzkrJUZeob9Q%2BtPRrRR8HZWSRMFDPx8ZO5I6RdUblF2gsW1KGb3VD5l7bN8e%2Fc0EahOyWW1iRz7KwKzQXuqV560s6shU2tlQdcL7RQBnCozSc6m%2BY1pIgGwS%2FkxJZyG%2F4yfLkqmdnssIFq1dGI6kwlsANNSkuAY4PtW6lssHo2aZi%2F5wf85sScjkFVjLjOSA92wXGuRUu5XOcpUzEtRxPjp5xjhg4QJRw3oTHC176C7mIQUtWjUQBkOeMH3DQPGE4LRcE7xrvdOgZTymN55HhGy170Qi9%2BzL7SZSaS0DMrBSexX2uhkr7ukc3ajA4E4DuGeMGY0y6B3vEm%2B3U6Q0fx2eTy7s0uHpryDdvQwtfbNvQY6pgGKVmb98ftz8xlm8YMD7Pqg3mgY5L2oTw1F7USym4mc4DE7PWOX15oxsS7hS7VCAu%2F84NPVUJrqPjRwXrcUCiLO9Gcbdnm73v2xB48HkzK82ACQvu6ioOPKn3Bia7uMktcRG6EWgSnDjNm6Y4gutbxIAGXDqbAIICWjErBlHZJs%2FdAtDqwO5nulqz9h1c1EuDtFQzW77a5sUkC044kIMH0fXTcbpl3j&X-Amz-Signature=4cfb4fd7104177ef9d594c344ecef4f245e04337275444a5c9e98ffb4b521599&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKKI6U2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICx3P2mTWQ9WV70sWVh1nhIZUb63Oc%2FxchYfFiDPblgFAiAI5vocoMJnq8XhXcsFqqmpjff1jCSDR7Df%2Fe%2FzTakDsSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM7O%2F05MT0Bi7jRYnpKtwDkqFouwMFXWjA3XyEUwPbMQ3s7tbnzoCKNSCVJu0cV%2BGkcYHODz5BRy4lX6VohJiwqhi%2F7VF%2BX1A1568IiI%2BPr6MJ0TWaaH9KLUsZ9waA7qvt76Qqj033awuSkkb5rqcs3PSiDZuBGYiOvn61dALKfAnPdPogZbqS8MdUyrwkVboop7KUUvs546t6fygdczQRQ8ViBkZKgFK%2FRL20lwdWDArhWIKqopbUhWH8aMwsJ7w09zeuaWVXbsc833ERdVH1pb%2BRex%2BP6mcVM0v9FOr5PDzkrJUZeob9Q%2BtPRrRR8HZWSRMFDPx8ZO5I6RdUblF2gsW1KGb3VD5l7bN8e%2Fc0EahOyWW1iRz7KwKzQXuqV560s6shU2tlQdcL7RQBnCozSc6m%2BY1pIgGwS%2FkxJZyG%2F4yfLkqmdnssIFq1dGI6kwlsANNSkuAY4PtW6lssHo2aZi%2F5wf85sScjkFVjLjOSA92wXGuRUu5XOcpUzEtRxPjp5xjhg4QJRw3oTHC176C7mIQUtWjUQBkOeMH3DQPGE4LRcE7xrvdOgZTymN55HhGy170Qi9%2BzL7SZSaS0DMrBSexX2uhkr7ukc3ajA4E4DuGeMGY0y6B3vEm%2B3U6Q0fx2eTy7s0uHpryDdvQwtfbNvQY6pgGKVmb98ftz8xlm8YMD7Pqg3mgY5L2oTw1F7USym4mc4DE7PWOX15oxsS7hS7VCAu%2F84NPVUJrqPjRwXrcUCiLO9Gcbdnm73v2xB48HkzK82ACQvu6ioOPKn3Bia7uMktcRG6EWgSnDjNm6Y4gutbxIAGXDqbAIICWjErBlHZJs%2FdAtDqwO5nulqz9h1c1EuDtFQzW77a5sUkC044kIMH0fXTcbpl3j&X-Amz-Signature=faa3ee4a4e9d2d6423aa95270915697a2763e4045f08b6e5296ebf2a83bb8e31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
