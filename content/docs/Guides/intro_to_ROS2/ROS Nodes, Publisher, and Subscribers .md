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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOSCXX5S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIn%2FWekB08g9TKR65YBu69ucjBAqoMNczRwKYJZEXmXAiAL%2B0cTld9g5AggbL0F%2Fr5LVhy0fXqhxK%2F5b5psea6%2B0yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMvZih5NsPLcYSaKErKtwDB7Uins19mZeJYt%2F9pTEJXhKNeMt%2FGUJG9mM573hIns4g1toN%2BlgLKcPq%2FQVEAoJSzQ1xSIY72BSBD%2BF%2FGWa8i7IXBtEwOgz0MzvJO5yGSUaIY%2Bw6RoKtQdsmPlLTPE3A4iV%2FaBWsNV3Gn7%2BtDhmMUQx8QakPR0qgIcQliSpge1c05QFe4VQBqYIeOYJkSeabHHv4rIPaxYqUqueRcepyMvqsGLtNN2IinjpUKOtPy%2F7gqYJGMNjoacDln9G1gqLREt5NDRlqEA3My%2FIeDkCPUP5QBcoBh7RTea%2Fi7EJx65zW%2BPQhUcazoEeTkOUJ9rje1kPcuiQRICjcdnFfXUZzRR3X%2F39c%2Bt%2B1iLzRaOCiC6X0dgW0bB6%2F4C8NI4HKi67dvJdR0E9nHGXDV%2BY%2B3t110eHpQ53dny2GvMYgQCcqQz4BbecmBRGvHgAUiAMhvgVwZ66898hYXSLjF7Q6HAVlVmweRPlpJNWjfnKt73oWRiEUh2BXDIGbGBBhWq0I78AKmiA8wYC4gQoaAJx%2BDuWXv3cR9nmx9A4ZJ3tpokkROLdUo6Yc%2BizRKc9qxYDw36qixZ%2BCRXuYpGvs2OwAPHaDmGCrry1c4sQJAYA9zSW8hxTA2oeODl9%2F%2BuEc0ZcwiuGgwQY6pgEG9PUFfkEcaReleRUjqntB%2FxYbpmMQTfmZfVHcEFcMqFkpvW7PT8aCORmOG1knXB5hKLhfE4dNYkcKE2g8eK9DpQA0T1imC1EDjVWIxP%2FmKvQxqCZAcEp%2FOX%2FPAamt27vc3AzLWAyu9XQsHLJoaoKGbsjlPZaHQ9EQsy%2BYvUYs9zVwsdFJlaAQo9q1Xel%2Bh3ks185zeRdnlB%2BGsc4gsjVqSkOZRNZl&X-Amz-Signature=29b0f8f12480a228cd3a395a57f02db0fe78083ce1457ffa2af94e339faba115&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOSCXX5S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIn%2FWekB08g9TKR65YBu69ucjBAqoMNczRwKYJZEXmXAiAL%2B0cTld9g5AggbL0F%2Fr5LVhy0fXqhxK%2F5b5psea6%2B0yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMvZih5NsPLcYSaKErKtwDB7Uins19mZeJYt%2F9pTEJXhKNeMt%2FGUJG9mM573hIns4g1toN%2BlgLKcPq%2FQVEAoJSzQ1xSIY72BSBD%2BF%2FGWa8i7IXBtEwOgz0MzvJO5yGSUaIY%2Bw6RoKtQdsmPlLTPE3A4iV%2FaBWsNV3Gn7%2BtDhmMUQx8QakPR0qgIcQliSpge1c05QFe4VQBqYIeOYJkSeabHHv4rIPaxYqUqueRcepyMvqsGLtNN2IinjpUKOtPy%2F7gqYJGMNjoacDln9G1gqLREt5NDRlqEA3My%2FIeDkCPUP5QBcoBh7RTea%2Fi7EJx65zW%2BPQhUcazoEeTkOUJ9rje1kPcuiQRICjcdnFfXUZzRR3X%2F39c%2Bt%2B1iLzRaOCiC6X0dgW0bB6%2F4C8NI4HKi67dvJdR0E9nHGXDV%2BY%2B3t110eHpQ53dny2GvMYgQCcqQz4BbecmBRGvHgAUiAMhvgVwZ66898hYXSLjF7Q6HAVlVmweRPlpJNWjfnKt73oWRiEUh2BXDIGbGBBhWq0I78AKmiA8wYC4gQoaAJx%2BDuWXv3cR9nmx9A4ZJ3tpokkROLdUo6Yc%2BizRKc9qxYDw36qixZ%2BCRXuYpGvs2OwAPHaDmGCrry1c4sQJAYA9zSW8hxTA2oeODl9%2F%2BuEc0ZcwiuGgwQY6pgEG9PUFfkEcaReleRUjqntB%2FxYbpmMQTfmZfVHcEFcMqFkpvW7PT8aCORmOG1knXB5hKLhfE4dNYkcKE2g8eK9DpQA0T1imC1EDjVWIxP%2FmKvQxqCZAcEp%2FOX%2FPAamt27vc3AzLWAyu9XQsHLJoaoKGbsjlPZaHQ9EQsy%2BYvUYs9zVwsdFJlaAQo9q1Xel%2Bh3ks185zeRdnlB%2BGsc4gsjVqSkOZRNZl&X-Amz-Signature=4f945fd587add904ef8e01d39c81960b6f7f21475b5b95b718e18d1e7434106b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOSCXX5S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIn%2FWekB08g9TKR65YBu69ucjBAqoMNczRwKYJZEXmXAiAL%2B0cTld9g5AggbL0F%2Fr5LVhy0fXqhxK%2F5b5psea6%2B0yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMvZih5NsPLcYSaKErKtwDB7Uins19mZeJYt%2F9pTEJXhKNeMt%2FGUJG9mM573hIns4g1toN%2BlgLKcPq%2FQVEAoJSzQ1xSIY72BSBD%2BF%2FGWa8i7IXBtEwOgz0MzvJO5yGSUaIY%2Bw6RoKtQdsmPlLTPE3A4iV%2FaBWsNV3Gn7%2BtDhmMUQx8QakPR0qgIcQliSpge1c05QFe4VQBqYIeOYJkSeabHHv4rIPaxYqUqueRcepyMvqsGLtNN2IinjpUKOtPy%2F7gqYJGMNjoacDln9G1gqLREt5NDRlqEA3My%2FIeDkCPUP5QBcoBh7RTea%2Fi7EJx65zW%2BPQhUcazoEeTkOUJ9rje1kPcuiQRICjcdnFfXUZzRR3X%2F39c%2Bt%2B1iLzRaOCiC6X0dgW0bB6%2F4C8NI4HKi67dvJdR0E9nHGXDV%2BY%2B3t110eHpQ53dny2GvMYgQCcqQz4BbecmBRGvHgAUiAMhvgVwZ66898hYXSLjF7Q6HAVlVmweRPlpJNWjfnKt73oWRiEUh2BXDIGbGBBhWq0I78AKmiA8wYC4gQoaAJx%2BDuWXv3cR9nmx9A4ZJ3tpokkROLdUo6Yc%2BizRKc9qxYDw36qixZ%2BCRXuYpGvs2OwAPHaDmGCrry1c4sQJAYA9zSW8hxTA2oeODl9%2F%2BuEc0ZcwiuGgwQY6pgEG9PUFfkEcaReleRUjqntB%2FxYbpmMQTfmZfVHcEFcMqFkpvW7PT8aCORmOG1knXB5hKLhfE4dNYkcKE2g8eK9DpQA0T1imC1EDjVWIxP%2FmKvQxqCZAcEp%2FOX%2FPAamt27vc3AzLWAyu9XQsHLJoaoKGbsjlPZaHQ9EQsy%2BYvUYs9zVwsdFJlaAQo9q1Xel%2Bh3ks185zeRdnlB%2BGsc4gsjVqSkOZRNZl&X-Amz-Signature=8ef5ae383cc1eabf0a6c59e3433ae6359b3fac9430d1381370d5b293ba0ef4a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOSCXX5S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIn%2FWekB08g9TKR65YBu69ucjBAqoMNczRwKYJZEXmXAiAL%2B0cTld9g5AggbL0F%2Fr5LVhy0fXqhxK%2F5b5psea6%2B0yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMvZih5NsPLcYSaKErKtwDB7Uins19mZeJYt%2F9pTEJXhKNeMt%2FGUJG9mM573hIns4g1toN%2BlgLKcPq%2FQVEAoJSzQ1xSIY72BSBD%2BF%2FGWa8i7IXBtEwOgz0MzvJO5yGSUaIY%2Bw6RoKtQdsmPlLTPE3A4iV%2FaBWsNV3Gn7%2BtDhmMUQx8QakPR0qgIcQliSpge1c05QFe4VQBqYIeOYJkSeabHHv4rIPaxYqUqueRcepyMvqsGLtNN2IinjpUKOtPy%2F7gqYJGMNjoacDln9G1gqLREt5NDRlqEA3My%2FIeDkCPUP5QBcoBh7RTea%2Fi7EJx65zW%2BPQhUcazoEeTkOUJ9rje1kPcuiQRICjcdnFfXUZzRR3X%2F39c%2Bt%2B1iLzRaOCiC6X0dgW0bB6%2F4C8NI4HKi67dvJdR0E9nHGXDV%2BY%2B3t110eHpQ53dny2GvMYgQCcqQz4BbecmBRGvHgAUiAMhvgVwZ66898hYXSLjF7Q6HAVlVmweRPlpJNWjfnKt73oWRiEUh2BXDIGbGBBhWq0I78AKmiA8wYC4gQoaAJx%2BDuWXv3cR9nmx9A4ZJ3tpokkROLdUo6Yc%2BizRKc9qxYDw36qixZ%2BCRXuYpGvs2OwAPHaDmGCrry1c4sQJAYA9zSW8hxTA2oeODl9%2F%2BuEc0ZcwiuGgwQY6pgEG9PUFfkEcaReleRUjqntB%2FxYbpmMQTfmZfVHcEFcMqFkpvW7PT8aCORmOG1knXB5hKLhfE4dNYkcKE2g8eK9DpQA0T1imC1EDjVWIxP%2FmKvQxqCZAcEp%2FOX%2FPAamt27vc3AzLWAyu9XQsHLJoaoKGbsjlPZaHQ9EQsy%2BYvUYs9zVwsdFJlaAQo9q1Xel%2Bh3ks185zeRdnlB%2BGsc4gsjVqSkOZRNZl&X-Amz-Signature=b288508156fdb77438519d1d0a2e306c6be4bc6eef8657f82ef4a92a8fdd2123&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOSCXX5S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIn%2FWekB08g9TKR65YBu69ucjBAqoMNczRwKYJZEXmXAiAL%2B0cTld9g5AggbL0F%2Fr5LVhy0fXqhxK%2F5b5psea6%2B0yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMvZih5NsPLcYSaKErKtwDB7Uins19mZeJYt%2F9pTEJXhKNeMt%2FGUJG9mM573hIns4g1toN%2BlgLKcPq%2FQVEAoJSzQ1xSIY72BSBD%2BF%2FGWa8i7IXBtEwOgz0MzvJO5yGSUaIY%2Bw6RoKtQdsmPlLTPE3A4iV%2FaBWsNV3Gn7%2BtDhmMUQx8QakPR0qgIcQliSpge1c05QFe4VQBqYIeOYJkSeabHHv4rIPaxYqUqueRcepyMvqsGLtNN2IinjpUKOtPy%2F7gqYJGMNjoacDln9G1gqLREt5NDRlqEA3My%2FIeDkCPUP5QBcoBh7RTea%2Fi7EJx65zW%2BPQhUcazoEeTkOUJ9rje1kPcuiQRICjcdnFfXUZzRR3X%2F39c%2Bt%2B1iLzRaOCiC6X0dgW0bB6%2F4C8NI4HKi67dvJdR0E9nHGXDV%2BY%2B3t110eHpQ53dny2GvMYgQCcqQz4BbecmBRGvHgAUiAMhvgVwZ66898hYXSLjF7Q6HAVlVmweRPlpJNWjfnKt73oWRiEUh2BXDIGbGBBhWq0I78AKmiA8wYC4gQoaAJx%2BDuWXv3cR9nmx9A4ZJ3tpokkROLdUo6Yc%2BizRKc9qxYDw36qixZ%2BCRXuYpGvs2OwAPHaDmGCrry1c4sQJAYA9zSW8hxTA2oeODl9%2F%2BuEc0ZcwiuGgwQY6pgEG9PUFfkEcaReleRUjqntB%2FxYbpmMQTfmZfVHcEFcMqFkpvW7PT8aCORmOG1knXB5hKLhfE4dNYkcKE2g8eK9DpQA0T1imC1EDjVWIxP%2FmKvQxqCZAcEp%2FOX%2FPAamt27vc3AzLWAyu9XQsHLJoaoKGbsjlPZaHQ9EQsy%2BYvUYs9zVwsdFJlaAQo9q1Xel%2Bh3ks185zeRdnlB%2BGsc4gsjVqSkOZRNZl&X-Amz-Signature=03efed241e21f98edb2b4b7a16555916aa7184f936dd9ccd56b3f15ddd2bcdc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOSCXX5S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIn%2FWekB08g9TKR65YBu69ucjBAqoMNczRwKYJZEXmXAiAL%2B0cTld9g5AggbL0F%2Fr5LVhy0fXqhxK%2F5b5psea6%2B0yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMvZih5NsPLcYSaKErKtwDB7Uins19mZeJYt%2F9pTEJXhKNeMt%2FGUJG9mM573hIns4g1toN%2BlgLKcPq%2FQVEAoJSzQ1xSIY72BSBD%2BF%2FGWa8i7IXBtEwOgz0MzvJO5yGSUaIY%2Bw6RoKtQdsmPlLTPE3A4iV%2FaBWsNV3Gn7%2BtDhmMUQx8QakPR0qgIcQliSpge1c05QFe4VQBqYIeOYJkSeabHHv4rIPaxYqUqueRcepyMvqsGLtNN2IinjpUKOtPy%2F7gqYJGMNjoacDln9G1gqLREt5NDRlqEA3My%2FIeDkCPUP5QBcoBh7RTea%2Fi7EJx65zW%2BPQhUcazoEeTkOUJ9rje1kPcuiQRICjcdnFfXUZzRR3X%2F39c%2Bt%2B1iLzRaOCiC6X0dgW0bB6%2F4C8NI4HKi67dvJdR0E9nHGXDV%2BY%2B3t110eHpQ53dny2GvMYgQCcqQz4BbecmBRGvHgAUiAMhvgVwZ66898hYXSLjF7Q6HAVlVmweRPlpJNWjfnKt73oWRiEUh2BXDIGbGBBhWq0I78AKmiA8wYC4gQoaAJx%2BDuWXv3cR9nmx9A4ZJ3tpokkROLdUo6Yc%2BizRKc9qxYDw36qixZ%2BCRXuYpGvs2OwAPHaDmGCrry1c4sQJAYA9zSW8hxTA2oeODl9%2F%2BuEc0ZcwiuGgwQY6pgEG9PUFfkEcaReleRUjqntB%2FxYbpmMQTfmZfVHcEFcMqFkpvW7PT8aCORmOG1knXB5hKLhfE4dNYkcKE2g8eK9DpQA0T1imC1EDjVWIxP%2FmKvQxqCZAcEp%2FOX%2FPAamt27vc3AzLWAyu9XQsHLJoaoKGbsjlPZaHQ9EQsy%2BYvUYs9zVwsdFJlaAQo9q1Xel%2Bh3ks185zeRdnlB%2BGsc4gsjVqSkOZRNZl&X-Amz-Signature=823a0356b4aa9abbbfa3fd36309e9e8916badd3beb4ced54e75d37a6e6e9f372&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOSCXX5S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIn%2FWekB08g9TKR65YBu69ucjBAqoMNczRwKYJZEXmXAiAL%2B0cTld9g5AggbL0F%2Fr5LVhy0fXqhxK%2F5b5psea6%2B0yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMvZih5NsPLcYSaKErKtwDB7Uins19mZeJYt%2F9pTEJXhKNeMt%2FGUJG9mM573hIns4g1toN%2BlgLKcPq%2FQVEAoJSzQ1xSIY72BSBD%2BF%2FGWa8i7IXBtEwOgz0MzvJO5yGSUaIY%2Bw6RoKtQdsmPlLTPE3A4iV%2FaBWsNV3Gn7%2BtDhmMUQx8QakPR0qgIcQliSpge1c05QFe4VQBqYIeOYJkSeabHHv4rIPaxYqUqueRcepyMvqsGLtNN2IinjpUKOtPy%2F7gqYJGMNjoacDln9G1gqLREt5NDRlqEA3My%2FIeDkCPUP5QBcoBh7RTea%2Fi7EJx65zW%2BPQhUcazoEeTkOUJ9rje1kPcuiQRICjcdnFfXUZzRR3X%2F39c%2Bt%2B1iLzRaOCiC6X0dgW0bB6%2F4C8NI4HKi67dvJdR0E9nHGXDV%2BY%2B3t110eHpQ53dny2GvMYgQCcqQz4BbecmBRGvHgAUiAMhvgVwZ66898hYXSLjF7Q6HAVlVmweRPlpJNWjfnKt73oWRiEUh2BXDIGbGBBhWq0I78AKmiA8wYC4gQoaAJx%2BDuWXv3cR9nmx9A4ZJ3tpokkROLdUo6Yc%2BizRKc9qxYDw36qixZ%2BCRXuYpGvs2OwAPHaDmGCrry1c4sQJAYA9zSW8hxTA2oeODl9%2F%2BuEc0ZcwiuGgwQY6pgEG9PUFfkEcaReleRUjqntB%2FxYbpmMQTfmZfVHcEFcMqFkpvW7PT8aCORmOG1knXB5hKLhfE4dNYkcKE2g8eK9DpQA0T1imC1EDjVWIxP%2FmKvQxqCZAcEp%2FOX%2FPAamt27vc3AzLWAyu9XQsHLJoaoKGbsjlPZaHQ9EQsy%2BYvUYs9zVwsdFJlaAQo9q1Xel%2Bh3ks185zeRdnlB%2BGsc4gsjVqSkOZRNZl&X-Amz-Signature=d18a677d71f04ba9a085aa0464bd2506ac5272ee713ae4cb48f4dcf2a031df3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOSCXX5S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIn%2FWekB08g9TKR65YBu69ucjBAqoMNczRwKYJZEXmXAiAL%2B0cTld9g5AggbL0F%2Fr5LVhy0fXqhxK%2F5b5psea6%2B0yr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMvZih5NsPLcYSaKErKtwDB7Uins19mZeJYt%2F9pTEJXhKNeMt%2FGUJG9mM573hIns4g1toN%2BlgLKcPq%2FQVEAoJSzQ1xSIY72BSBD%2BF%2FGWa8i7IXBtEwOgz0MzvJO5yGSUaIY%2Bw6RoKtQdsmPlLTPE3A4iV%2FaBWsNV3Gn7%2BtDhmMUQx8QakPR0qgIcQliSpge1c05QFe4VQBqYIeOYJkSeabHHv4rIPaxYqUqueRcepyMvqsGLtNN2IinjpUKOtPy%2F7gqYJGMNjoacDln9G1gqLREt5NDRlqEA3My%2FIeDkCPUP5QBcoBh7RTea%2Fi7EJx65zW%2BPQhUcazoEeTkOUJ9rje1kPcuiQRICjcdnFfXUZzRR3X%2F39c%2Bt%2B1iLzRaOCiC6X0dgW0bB6%2F4C8NI4HKi67dvJdR0E9nHGXDV%2BY%2B3t110eHpQ53dny2GvMYgQCcqQz4BbecmBRGvHgAUiAMhvgVwZ66898hYXSLjF7Q6HAVlVmweRPlpJNWjfnKt73oWRiEUh2BXDIGbGBBhWq0I78AKmiA8wYC4gQoaAJx%2BDuWXv3cR9nmx9A4ZJ3tpokkROLdUo6Yc%2BizRKc9qxYDw36qixZ%2BCRXuYpGvs2OwAPHaDmGCrry1c4sQJAYA9zSW8hxTA2oeODl9%2F%2BuEc0ZcwiuGgwQY6pgEG9PUFfkEcaReleRUjqntB%2FxYbpmMQTfmZfVHcEFcMqFkpvW7PT8aCORmOG1knXB5hKLhfE4dNYkcKE2g8eK9DpQA0T1imC1EDjVWIxP%2FmKvQxqCZAcEp%2FOX%2FPAamt27vc3AzLWAyu9XQsHLJoaoKGbsjlPZaHQ9EQsy%2BYvUYs9zVwsdFJlaAQo9q1Xel%2Bh3ks185zeRdnlB%2BGsc4gsjVqSkOZRNZl&X-Amz-Signature=67358fed10a253df35bcc92a4d30437f5d8702db8e9048d54707dd7e8f5fc6bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
