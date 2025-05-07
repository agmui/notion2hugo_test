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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5XK2L7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqJ2ZLbB%2B67656fpMJFGse%2Bt8lY77WpcfqBw2v4WrpEgIgZLiD%2BipKXe4eVf2z9ubkJ15du7zxZCXuuI6fnXUNqNkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM7rsczeSQCfq5bzjCrcA%2BguGPK2972SplNw9RDqjVRASwsrCAqi0MbZBa41cAKNCSSOmABEdEti5CpresOmovRh7SKsHEGqU1xuND3tfjE6IWe80UbFwURiygA1NrAD3Mknnf3eazq3JaxnMkOWXPBYgQx00auAm2iidtmAuEu7szTz2cNL%2B6aVLHT9nJsjQC2cCfJuYGXKcSzss5vOa4Wlz%2BHOr5RjpQyIIcbwOUvOuQmrBrh%2FYHEyyaYhvDBVAKFR%2By4QA5gdWr2XodDNmbz2ErMQWU85wV5QgEntzakD07H02MD99OSzgkmsfKD3FVAmFFn5h4WdUKM1xyEebZyzCOz6%2FLjbhksGMH7b8XGaTaoiCE5npU7dt3OJ4ExtnWDaY5E%2Bgh47SKVJnUI%2FNWr2H1lws%2BiQJLJyukzRfZP97PCemQGjwo3o2s3Thgi7TMIAW5qcGdJ5YBukkDaM29BiU5YpylcePGznvKyIHDsg8J8vnFgsL3pOTYbwIMI06aiZ1GbnRFXTq8MaRp6AQFqIjTD%2F8t5ynknQyIMc%2FVSCkXtbjsu%2F4qkshj4QXKfcnzfzqwL14mj98T36XfjdJh5FCwPkMbQHL6EZ41tbilZK0AFcjc8xD8dwA%2FQs56Uodd1qhG0NTVZag0gdMOea7cAGOqUB2lzQXmfnw7hKUTuWeqwRWlStahtwnbifyGoMlP22fBYjSyI1u1TDYMV%2BJL1uEL%2FQrOoHRc1T9%2FUXvlatYS%2BrFjUQF7dKoFJrK9K5Ha0kMfY5W%2BxeR%2FzVXjCXDtlyj6PFDFGyCk2BbIIauoporOUcNh44dZnR1tfsF5CSIPmzoiPkQ1xyk%2FNKsIuBumnPMobycscAr7Os2nOexVhQqvKflgD1n8Rd&X-Amz-Signature=8ca8c1a3b96436b7daf099a4f98d65d7ca152999f9e9e4ed92a6f889e21c71f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5XK2L7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqJ2ZLbB%2B67656fpMJFGse%2Bt8lY77WpcfqBw2v4WrpEgIgZLiD%2BipKXe4eVf2z9ubkJ15du7zxZCXuuI6fnXUNqNkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM7rsczeSQCfq5bzjCrcA%2BguGPK2972SplNw9RDqjVRASwsrCAqi0MbZBa41cAKNCSSOmABEdEti5CpresOmovRh7SKsHEGqU1xuND3tfjE6IWe80UbFwURiygA1NrAD3Mknnf3eazq3JaxnMkOWXPBYgQx00auAm2iidtmAuEu7szTz2cNL%2B6aVLHT9nJsjQC2cCfJuYGXKcSzss5vOa4Wlz%2BHOr5RjpQyIIcbwOUvOuQmrBrh%2FYHEyyaYhvDBVAKFR%2By4QA5gdWr2XodDNmbz2ErMQWU85wV5QgEntzakD07H02MD99OSzgkmsfKD3FVAmFFn5h4WdUKM1xyEebZyzCOz6%2FLjbhksGMH7b8XGaTaoiCE5npU7dt3OJ4ExtnWDaY5E%2Bgh47SKVJnUI%2FNWr2H1lws%2BiQJLJyukzRfZP97PCemQGjwo3o2s3Thgi7TMIAW5qcGdJ5YBukkDaM29BiU5YpylcePGznvKyIHDsg8J8vnFgsL3pOTYbwIMI06aiZ1GbnRFXTq8MaRp6AQFqIjTD%2F8t5ynknQyIMc%2FVSCkXtbjsu%2F4qkshj4QXKfcnzfzqwL14mj98T36XfjdJh5FCwPkMbQHL6EZ41tbilZK0AFcjc8xD8dwA%2FQs56Uodd1qhG0NTVZag0gdMOea7cAGOqUB2lzQXmfnw7hKUTuWeqwRWlStahtwnbifyGoMlP22fBYjSyI1u1TDYMV%2BJL1uEL%2FQrOoHRc1T9%2FUXvlatYS%2BrFjUQF7dKoFJrK9K5Ha0kMfY5W%2BxeR%2FzVXjCXDtlyj6PFDFGyCk2BbIIauoporOUcNh44dZnR1tfsF5CSIPmzoiPkQ1xyk%2FNKsIuBumnPMobycscAr7Os2nOexVhQqvKflgD1n8Rd&X-Amz-Signature=d38a0e1c0eef688fc1a00d172a551eaa0ffd18f335e2883d3fbaa9c95e3c6e81&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5XK2L7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqJ2ZLbB%2B67656fpMJFGse%2Bt8lY77WpcfqBw2v4WrpEgIgZLiD%2BipKXe4eVf2z9ubkJ15du7zxZCXuuI6fnXUNqNkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM7rsczeSQCfq5bzjCrcA%2BguGPK2972SplNw9RDqjVRASwsrCAqi0MbZBa41cAKNCSSOmABEdEti5CpresOmovRh7SKsHEGqU1xuND3tfjE6IWe80UbFwURiygA1NrAD3Mknnf3eazq3JaxnMkOWXPBYgQx00auAm2iidtmAuEu7szTz2cNL%2B6aVLHT9nJsjQC2cCfJuYGXKcSzss5vOa4Wlz%2BHOr5RjpQyIIcbwOUvOuQmrBrh%2FYHEyyaYhvDBVAKFR%2By4QA5gdWr2XodDNmbz2ErMQWU85wV5QgEntzakD07H02MD99OSzgkmsfKD3FVAmFFn5h4WdUKM1xyEebZyzCOz6%2FLjbhksGMH7b8XGaTaoiCE5npU7dt3OJ4ExtnWDaY5E%2Bgh47SKVJnUI%2FNWr2H1lws%2BiQJLJyukzRfZP97PCemQGjwo3o2s3Thgi7TMIAW5qcGdJ5YBukkDaM29BiU5YpylcePGznvKyIHDsg8J8vnFgsL3pOTYbwIMI06aiZ1GbnRFXTq8MaRp6AQFqIjTD%2F8t5ynknQyIMc%2FVSCkXtbjsu%2F4qkshj4QXKfcnzfzqwL14mj98T36XfjdJh5FCwPkMbQHL6EZ41tbilZK0AFcjc8xD8dwA%2FQs56Uodd1qhG0NTVZag0gdMOea7cAGOqUB2lzQXmfnw7hKUTuWeqwRWlStahtwnbifyGoMlP22fBYjSyI1u1TDYMV%2BJL1uEL%2FQrOoHRc1T9%2FUXvlatYS%2BrFjUQF7dKoFJrK9K5Ha0kMfY5W%2BxeR%2FzVXjCXDtlyj6PFDFGyCk2BbIIauoporOUcNh44dZnR1tfsF5CSIPmzoiPkQ1xyk%2FNKsIuBumnPMobycscAr7Os2nOexVhQqvKflgD1n8Rd&X-Amz-Signature=790da2f3fb265a1d5d83f15deacfdd3b6abe9ab16fa94a9331b547b1f674708d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5XK2L7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqJ2ZLbB%2B67656fpMJFGse%2Bt8lY77WpcfqBw2v4WrpEgIgZLiD%2BipKXe4eVf2z9ubkJ15du7zxZCXuuI6fnXUNqNkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM7rsczeSQCfq5bzjCrcA%2BguGPK2972SplNw9RDqjVRASwsrCAqi0MbZBa41cAKNCSSOmABEdEti5CpresOmovRh7SKsHEGqU1xuND3tfjE6IWe80UbFwURiygA1NrAD3Mknnf3eazq3JaxnMkOWXPBYgQx00auAm2iidtmAuEu7szTz2cNL%2B6aVLHT9nJsjQC2cCfJuYGXKcSzss5vOa4Wlz%2BHOr5RjpQyIIcbwOUvOuQmrBrh%2FYHEyyaYhvDBVAKFR%2By4QA5gdWr2XodDNmbz2ErMQWU85wV5QgEntzakD07H02MD99OSzgkmsfKD3FVAmFFn5h4WdUKM1xyEebZyzCOz6%2FLjbhksGMH7b8XGaTaoiCE5npU7dt3OJ4ExtnWDaY5E%2Bgh47SKVJnUI%2FNWr2H1lws%2BiQJLJyukzRfZP97PCemQGjwo3o2s3Thgi7TMIAW5qcGdJ5YBukkDaM29BiU5YpylcePGznvKyIHDsg8J8vnFgsL3pOTYbwIMI06aiZ1GbnRFXTq8MaRp6AQFqIjTD%2F8t5ynknQyIMc%2FVSCkXtbjsu%2F4qkshj4QXKfcnzfzqwL14mj98T36XfjdJh5FCwPkMbQHL6EZ41tbilZK0AFcjc8xD8dwA%2FQs56Uodd1qhG0NTVZag0gdMOea7cAGOqUB2lzQXmfnw7hKUTuWeqwRWlStahtwnbifyGoMlP22fBYjSyI1u1TDYMV%2BJL1uEL%2FQrOoHRc1T9%2FUXvlatYS%2BrFjUQF7dKoFJrK9K5Ha0kMfY5W%2BxeR%2FzVXjCXDtlyj6PFDFGyCk2BbIIauoporOUcNh44dZnR1tfsF5CSIPmzoiPkQ1xyk%2FNKsIuBumnPMobycscAr7Os2nOexVhQqvKflgD1n8Rd&X-Amz-Signature=1ca906009f907da1078cf32370b244b158b06916931d5c151f2a88574382c03c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5XK2L7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqJ2ZLbB%2B67656fpMJFGse%2Bt8lY77WpcfqBw2v4WrpEgIgZLiD%2BipKXe4eVf2z9ubkJ15du7zxZCXuuI6fnXUNqNkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM7rsczeSQCfq5bzjCrcA%2BguGPK2972SplNw9RDqjVRASwsrCAqi0MbZBa41cAKNCSSOmABEdEti5CpresOmovRh7SKsHEGqU1xuND3tfjE6IWe80UbFwURiygA1NrAD3Mknnf3eazq3JaxnMkOWXPBYgQx00auAm2iidtmAuEu7szTz2cNL%2B6aVLHT9nJsjQC2cCfJuYGXKcSzss5vOa4Wlz%2BHOr5RjpQyIIcbwOUvOuQmrBrh%2FYHEyyaYhvDBVAKFR%2By4QA5gdWr2XodDNmbz2ErMQWU85wV5QgEntzakD07H02MD99OSzgkmsfKD3FVAmFFn5h4WdUKM1xyEebZyzCOz6%2FLjbhksGMH7b8XGaTaoiCE5npU7dt3OJ4ExtnWDaY5E%2Bgh47SKVJnUI%2FNWr2H1lws%2BiQJLJyukzRfZP97PCemQGjwo3o2s3Thgi7TMIAW5qcGdJ5YBukkDaM29BiU5YpylcePGznvKyIHDsg8J8vnFgsL3pOTYbwIMI06aiZ1GbnRFXTq8MaRp6AQFqIjTD%2F8t5ynknQyIMc%2FVSCkXtbjsu%2F4qkshj4QXKfcnzfzqwL14mj98T36XfjdJh5FCwPkMbQHL6EZ41tbilZK0AFcjc8xD8dwA%2FQs56Uodd1qhG0NTVZag0gdMOea7cAGOqUB2lzQXmfnw7hKUTuWeqwRWlStahtwnbifyGoMlP22fBYjSyI1u1TDYMV%2BJL1uEL%2FQrOoHRc1T9%2FUXvlatYS%2BrFjUQF7dKoFJrK9K5Ha0kMfY5W%2BxeR%2FzVXjCXDtlyj6PFDFGyCk2BbIIauoporOUcNh44dZnR1tfsF5CSIPmzoiPkQ1xyk%2FNKsIuBumnPMobycscAr7Os2nOexVhQqvKflgD1n8Rd&X-Amz-Signature=8556b0d8e053f505e33460196008cfbd2ef9863bb89639f4d3e0dbc6940a725d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5XK2L7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqJ2ZLbB%2B67656fpMJFGse%2Bt8lY77WpcfqBw2v4WrpEgIgZLiD%2BipKXe4eVf2z9ubkJ15du7zxZCXuuI6fnXUNqNkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM7rsczeSQCfq5bzjCrcA%2BguGPK2972SplNw9RDqjVRASwsrCAqi0MbZBa41cAKNCSSOmABEdEti5CpresOmovRh7SKsHEGqU1xuND3tfjE6IWe80UbFwURiygA1NrAD3Mknnf3eazq3JaxnMkOWXPBYgQx00auAm2iidtmAuEu7szTz2cNL%2B6aVLHT9nJsjQC2cCfJuYGXKcSzss5vOa4Wlz%2BHOr5RjpQyIIcbwOUvOuQmrBrh%2FYHEyyaYhvDBVAKFR%2By4QA5gdWr2XodDNmbz2ErMQWU85wV5QgEntzakD07H02MD99OSzgkmsfKD3FVAmFFn5h4WdUKM1xyEebZyzCOz6%2FLjbhksGMH7b8XGaTaoiCE5npU7dt3OJ4ExtnWDaY5E%2Bgh47SKVJnUI%2FNWr2H1lws%2BiQJLJyukzRfZP97PCemQGjwo3o2s3Thgi7TMIAW5qcGdJ5YBukkDaM29BiU5YpylcePGznvKyIHDsg8J8vnFgsL3pOTYbwIMI06aiZ1GbnRFXTq8MaRp6AQFqIjTD%2F8t5ynknQyIMc%2FVSCkXtbjsu%2F4qkshj4QXKfcnzfzqwL14mj98T36XfjdJh5FCwPkMbQHL6EZ41tbilZK0AFcjc8xD8dwA%2FQs56Uodd1qhG0NTVZag0gdMOea7cAGOqUB2lzQXmfnw7hKUTuWeqwRWlStahtwnbifyGoMlP22fBYjSyI1u1TDYMV%2BJL1uEL%2FQrOoHRc1T9%2FUXvlatYS%2BrFjUQF7dKoFJrK9K5Ha0kMfY5W%2BxeR%2FzVXjCXDtlyj6PFDFGyCk2BbIIauoporOUcNh44dZnR1tfsF5CSIPmzoiPkQ1xyk%2FNKsIuBumnPMobycscAr7Os2nOexVhQqvKflgD1n8Rd&X-Amz-Signature=66c1418628528309a9311d35e0d3dfb227f0f2d0ad60b76dd3ba805c29821e99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5XK2L7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqJ2ZLbB%2B67656fpMJFGse%2Bt8lY77WpcfqBw2v4WrpEgIgZLiD%2BipKXe4eVf2z9ubkJ15du7zxZCXuuI6fnXUNqNkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM7rsczeSQCfq5bzjCrcA%2BguGPK2972SplNw9RDqjVRASwsrCAqi0MbZBa41cAKNCSSOmABEdEti5CpresOmovRh7SKsHEGqU1xuND3tfjE6IWe80UbFwURiygA1NrAD3Mknnf3eazq3JaxnMkOWXPBYgQx00auAm2iidtmAuEu7szTz2cNL%2B6aVLHT9nJsjQC2cCfJuYGXKcSzss5vOa4Wlz%2BHOr5RjpQyIIcbwOUvOuQmrBrh%2FYHEyyaYhvDBVAKFR%2By4QA5gdWr2XodDNmbz2ErMQWU85wV5QgEntzakD07H02MD99OSzgkmsfKD3FVAmFFn5h4WdUKM1xyEebZyzCOz6%2FLjbhksGMH7b8XGaTaoiCE5npU7dt3OJ4ExtnWDaY5E%2Bgh47SKVJnUI%2FNWr2H1lws%2BiQJLJyukzRfZP97PCemQGjwo3o2s3Thgi7TMIAW5qcGdJ5YBukkDaM29BiU5YpylcePGznvKyIHDsg8J8vnFgsL3pOTYbwIMI06aiZ1GbnRFXTq8MaRp6AQFqIjTD%2F8t5ynknQyIMc%2FVSCkXtbjsu%2F4qkshj4QXKfcnzfzqwL14mj98T36XfjdJh5FCwPkMbQHL6EZ41tbilZK0AFcjc8xD8dwA%2FQs56Uodd1qhG0NTVZag0gdMOea7cAGOqUB2lzQXmfnw7hKUTuWeqwRWlStahtwnbifyGoMlP22fBYjSyI1u1TDYMV%2BJL1uEL%2FQrOoHRc1T9%2FUXvlatYS%2BrFjUQF7dKoFJrK9K5Ha0kMfY5W%2BxeR%2FzVXjCXDtlyj6PFDFGyCk2BbIIauoporOUcNh44dZnR1tfsF5CSIPmzoiPkQ1xyk%2FNKsIuBumnPMobycscAr7Os2nOexVhQqvKflgD1n8Rd&X-Amz-Signature=917e8187338ae78a15e4a808852030bfce22e07d117caa4eed51aa0ce951600f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS5XK2L7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqJ2ZLbB%2B67656fpMJFGse%2Bt8lY77WpcfqBw2v4WrpEgIgZLiD%2BipKXe4eVf2z9ubkJ15du7zxZCXuuI6fnXUNqNkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM7rsczeSQCfq5bzjCrcA%2BguGPK2972SplNw9RDqjVRASwsrCAqi0MbZBa41cAKNCSSOmABEdEti5CpresOmovRh7SKsHEGqU1xuND3tfjE6IWe80UbFwURiygA1NrAD3Mknnf3eazq3JaxnMkOWXPBYgQx00auAm2iidtmAuEu7szTz2cNL%2B6aVLHT9nJsjQC2cCfJuYGXKcSzss5vOa4Wlz%2BHOr5RjpQyIIcbwOUvOuQmrBrh%2FYHEyyaYhvDBVAKFR%2By4QA5gdWr2XodDNmbz2ErMQWU85wV5QgEntzakD07H02MD99OSzgkmsfKD3FVAmFFn5h4WdUKM1xyEebZyzCOz6%2FLjbhksGMH7b8XGaTaoiCE5npU7dt3OJ4ExtnWDaY5E%2Bgh47SKVJnUI%2FNWr2H1lws%2BiQJLJyukzRfZP97PCemQGjwo3o2s3Thgi7TMIAW5qcGdJ5YBukkDaM29BiU5YpylcePGznvKyIHDsg8J8vnFgsL3pOTYbwIMI06aiZ1GbnRFXTq8MaRp6AQFqIjTD%2F8t5ynknQyIMc%2FVSCkXtbjsu%2F4qkshj4QXKfcnzfzqwL14mj98T36XfjdJh5FCwPkMbQHL6EZ41tbilZK0AFcjc8xD8dwA%2FQs56Uodd1qhG0NTVZag0gdMOea7cAGOqUB2lzQXmfnw7hKUTuWeqwRWlStahtwnbifyGoMlP22fBYjSyI1u1TDYMV%2BJL1uEL%2FQrOoHRc1T9%2FUXvlatYS%2BrFjUQF7dKoFJrK9K5Ha0kMfY5W%2BxeR%2FzVXjCXDtlyj6PFDFGyCk2BbIIauoporOUcNh44dZnR1tfsF5CSIPmzoiPkQ1xyk%2FNKsIuBumnPMobycscAr7Os2nOexVhQqvKflgD1n8Rd&X-Amz-Signature=82753e0653276d2110fd9c8204b807dc0fb369b660c69c2f2288731b1664f5ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
