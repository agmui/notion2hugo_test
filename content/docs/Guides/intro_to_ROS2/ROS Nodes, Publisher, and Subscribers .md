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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTNVMJR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG1vqCTHuLjT4FKf6deN05ka9%2FltIo0kdViE5omZ4jnpAiAroRNKV%2Bv43q6Ok0YBa8a9UCrr2p4DWC842WpnF7cvoiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoW47jRt3EZDFJVqtKtwDB7x5fQFFoVu9bY1YrqI0DoaxvG%2BE1e7p3sJ0GIxTW0cZSvIgLJPZ40YNX76YCbaO0t%2BNxbC0%2FWxHA2H4pIP1rtsUwDi4nvZtJA1vwifdbyjudFKDKmpr0O5ec1QlBEckm%2B0XZp57q24BeNI7BuvFvhf%2Fj84VM2hdWbofHbhouvB6AhldQ5MGPFxOY8VPIvsNdQnRidbUd3Ky%2Fmd%2F1bl%2FjPVSOpeeF5kO493O7vveWvHq7cqedESMd5cbajJ%2FShOutkbU4Ih8QJEiS0VF4Glzt%2Fdf89F%2Bo%2FnlKCIjJG4nqiVum1pnXFkrvaK83%2FOP%2Ba3Lu51qG7RWmG4%2B4bCaFRcK%2F9BrDfunJfC7GOsjF4BNr1skNKtgAn0HYfoJDHmbz4emfND4dL4mGI1T2anRfUKgdrOZ4LvtSgB%2BaSgIaxqzAYWYvPddJU0Z7MSmFyAa%2FYEE7zjG2m70DsY4cck3PX0IbyEkINT3SAM%2Bdda99%2BIsN0i9gITNTdUmwKBtVtAKmRGDmOinjOjmxtClxj0il1xj7AT1iIrkRQYRNF4xwRvc9jQTOxRWsObxsXH%2FUkwYConDJe07vlAIC1tzIpVcHP3gA5tCWxZOwSoZYqhnijWa4B6kgWWHfj947OzZ018wyZObxAY6pgGtoENdi6bx2QbhfYKTAzhxl%2B7PRIrFHvfgjqr%2BPrtCQYRTFcpwjHJhAX1nGTQOV6lAF5%2BEaJsYv9ZdhJyAER4aB3ZGEEpS%2BXrVlBWLxCV9PIoQePM4P8d1CPPx7s%2FgCLoBCk40g7mCThN1vQlRXwyk3mEztLsuxKkLoB1tiA2WY9rSaP5lQQeZIvE158xeUEzL0RujWHhPsaGpTF7rEFFnSlCUx%2FxE&X-Amz-Signature=57b6056af8cf7b2923546c39fb20faf52ed3d63590fe2acdbee023c823477b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTNVMJR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG1vqCTHuLjT4FKf6deN05ka9%2FltIo0kdViE5omZ4jnpAiAroRNKV%2Bv43q6Ok0YBa8a9UCrr2p4DWC842WpnF7cvoiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoW47jRt3EZDFJVqtKtwDB7x5fQFFoVu9bY1YrqI0DoaxvG%2BE1e7p3sJ0GIxTW0cZSvIgLJPZ40YNX76YCbaO0t%2BNxbC0%2FWxHA2H4pIP1rtsUwDi4nvZtJA1vwifdbyjudFKDKmpr0O5ec1QlBEckm%2B0XZp57q24BeNI7BuvFvhf%2Fj84VM2hdWbofHbhouvB6AhldQ5MGPFxOY8VPIvsNdQnRidbUd3Ky%2Fmd%2F1bl%2FjPVSOpeeF5kO493O7vveWvHq7cqedESMd5cbajJ%2FShOutkbU4Ih8QJEiS0VF4Glzt%2Fdf89F%2Bo%2FnlKCIjJG4nqiVum1pnXFkrvaK83%2FOP%2Ba3Lu51qG7RWmG4%2B4bCaFRcK%2F9BrDfunJfC7GOsjF4BNr1skNKtgAn0HYfoJDHmbz4emfND4dL4mGI1T2anRfUKgdrOZ4LvtSgB%2BaSgIaxqzAYWYvPddJU0Z7MSmFyAa%2FYEE7zjG2m70DsY4cck3PX0IbyEkINT3SAM%2Bdda99%2BIsN0i9gITNTdUmwKBtVtAKmRGDmOinjOjmxtClxj0il1xj7AT1iIrkRQYRNF4xwRvc9jQTOxRWsObxsXH%2FUkwYConDJe07vlAIC1tzIpVcHP3gA5tCWxZOwSoZYqhnijWa4B6kgWWHfj947OzZ018wyZObxAY6pgGtoENdi6bx2QbhfYKTAzhxl%2B7PRIrFHvfgjqr%2BPrtCQYRTFcpwjHJhAX1nGTQOV6lAF5%2BEaJsYv9ZdhJyAER4aB3ZGEEpS%2BXrVlBWLxCV9PIoQePM4P8d1CPPx7s%2FgCLoBCk40g7mCThN1vQlRXwyk3mEztLsuxKkLoB1tiA2WY9rSaP5lQQeZIvE158xeUEzL0RujWHhPsaGpTF7rEFFnSlCUx%2FxE&X-Amz-Signature=b70a4e70d2d58a79319ca4f274af5613d7670ac3afb824708c9ac35f6c0e93db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTNVMJR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG1vqCTHuLjT4FKf6deN05ka9%2FltIo0kdViE5omZ4jnpAiAroRNKV%2Bv43q6Ok0YBa8a9UCrr2p4DWC842WpnF7cvoiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoW47jRt3EZDFJVqtKtwDB7x5fQFFoVu9bY1YrqI0DoaxvG%2BE1e7p3sJ0GIxTW0cZSvIgLJPZ40YNX76YCbaO0t%2BNxbC0%2FWxHA2H4pIP1rtsUwDi4nvZtJA1vwifdbyjudFKDKmpr0O5ec1QlBEckm%2B0XZp57q24BeNI7BuvFvhf%2Fj84VM2hdWbofHbhouvB6AhldQ5MGPFxOY8VPIvsNdQnRidbUd3Ky%2Fmd%2F1bl%2FjPVSOpeeF5kO493O7vveWvHq7cqedESMd5cbajJ%2FShOutkbU4Ih8QJEiS0VF4Glzt%2Fdf89F%2Bo%2FnlKCIjJG4nqiVum1pnXFkrvaK83%2FOP%2Ba3Lu51qG7RWmG4%2B4bCaFRcK%2F9BrDfunJfC7GOsjF4BNr1skNKtgAn0HYfoJDHmbz4emfND4dL4mGI1T2anRfUKgdrOZ4LvtSgB%2BaSgIaxqzAYWYvPddJU0Z7MSmFyAa%2FYEE7zjG2m70DsY4cck3PX0IbyEkINT3SAM%2Bdda99%2BIsN0i9gITNTdUmwKBtVtAKmRGDmOinjOjmxtClxj0il1xj7AT1iIrkRQYRNF4xwRvc9jQTOxRWsObxsXH%2FUkwYConDJe07vlAIC1tzIpVcHP3gA5tCWxZOwSoZYqhnijWa4B6kgWWHfj947OzZ018wyZObxAY6pgGtoENdi6bx2QbhfYKTAzhxl%2B7PRIrFHvfgjqr%2BPrtCQYRTFcpwjHJhAX1nGTQOV6lAF5%2BEaJsYv9ZdhJyAER4aB3ZGEEpS%2BXrVlBWLxCV9PIoQePM4P8d1CPPx7s%2FgCLoBCk40g7mCThN1vQlRXwyk3mEztLsuxKkLoB1tiA2WY9rSaP5lQQeZIvE158xeUEzL0RujWHhPsaGpTF7rEFFnSlCUx%2FxE&X-Amz-Signature=17010f081a79b8b6d20eb040a8034a57eff27cfb33fe74fdb54b1a71f707874c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTNVMJR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG1vqCTHuLjT4FKf6deN05ka9%2FltIo0kdViE5omZ4jnpAiAroRNKV%2Bv43q6Ok0YBa8a9UCrr2p4DWC842WpnF7cvoiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoW47jRt3EZDFJVqtKtwDB7x5fQFFoVu9bY1YrqI0DoaxvG%2BE1e7p3sJ0GIxTW0cZSvIgLJPZ40YNX76YCbaO0t%2BNxbC0%2FWxHA2H4pIP1rtsUwDi4nvZtJA1vwifdbyjudFKDKmpr0O5ec1QlBEckm%2B0XZp57q24BeNI7BuvFvhf%2Fj84VM2hdWbofHbhouvB6AhldQ5MGPFxOY8VPIvsNdQnRidbUd3Ky%2Fmd%2F1bl%2FjPVSOpeeF5kO493O7vveWvHq7cqedESMd5cbajJ%2FShOutkbU4Ih8QJEiS0VF4Glzt%2Fdf89F%2Bo%2FnlKCIjJG4nqiVum1pnXFkrvaK83%2FOP%2Ba3Lu51qG7RWmG4%2B4bCaFRcK%2F9BrDfunJfC7GOsjF4BNr1skNKtgAn0HYfoJDHmbz4emfND4dL4mGI1T2anRfUKgdrOZ4LvtSgB%2BaSgIaxqzAYWYvPddJU0Z7MSmFyAa%2FYEE7zjG2m70DsY4cck3PX0IbyEkINT3SAM%2Bdda99%2BIsN0i9gITNTdUmwKBtVtAKmRGDmOinjOjmxtClxj0il1xj7AT1iIrkRQYRNF4xwRvc9jQTOxRWsObxsXH%2FUkwYConDJe07vlAIC1tzIpVcHP3gA5tCWxZOwSoZYqhnijWa4B6kgWWHfj947OzZ018wyZObxAY6pgGtoENdi6bx2QbhfYKTAzhxl%2B7PRIrFHvfgjqr%2BPrtCQYRTFcpwjHJhAX1nGTQOV6lAF5%2BEaJsYv9ZdhJyAER4aB3ZGEEpS%2BXrVlBWLxCV9PIoQePM4P8d1CPPx7s%2FgCLoBCk40g7mCThN1vQlRXwyk3mEztLsuxKkLoB1tiA2WY9rSaP5lQQeZIvE158xeUEzL0RujWHhPsaGpTF7rEFFnSlCUx%2FxE&X-Amz-Signature=d5a157daaa2307170f37639e19324f7c85489b5f4df39c765722831de1ca8c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTNVMJR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG1vqCTHuLjT4FKf6deN05ka9%2FltIo0kdViE5omZ4jnpAiAroRNKV%2Bv43q6Ok0YBa8a9UCrr2p4DWC842WpnF7cvoiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoW47jRt3EZDFJVqtKtwDB7x5fQFFoVu9bY1YrqI0DoaxvG%2BE1e7p3sJ0GIxTW0cZSvIgLJPZ40YNX76YCbaO0t%2BNxbC0%2FWxHA2H4pIP1rtsUwDi4nvZtJA1vwifdbyjudFKDKmpr0O5ec1QlBEckm%2B0XZp57q24BeNI7BuvFvhf%2Fj84VM2hdWbofHbhouvB6AhldQ5MGPFxOY8VPIvsNdQnRidbUd3Ky%2Fmd%2F1bl%2FjPVSOpeeF5kO493O7vveWvHq7cqedESMd5cbajJ%2FShOutkbU4Ih8QJEiS0VF4Glzt%2Fdf89F%2Bo%2FnlKCIjJG4nqiVum1pnXFkrvaK83%2FOP%2Ba3Lu51qG7RWmG4%2B4bCaFRcK%2F9BrDfunJfC7GOsjF4BNr1skNKtgAn0HYfoJDHmbz4emfND4dL4mGI1T2anRfUKgdrOZ4LvtSgB%2BaSgIaxqzAYWYvPddJU0Z7MSmFyAa%2FYEE7zjG2m70DsY4cck3PX0IbyEkINT3SAM%2Bdda99%2BIsN0i9gITNTdUmwKBtVtAKmRGDmOinjOjmxtClxj0il1xj7AT1iIrkRQYRNF4xwRvc9jQTOxRWsObxsXH%2FUkwYConDJe07vlAIC1tzIpVcHP3gA5tCWxZOwSoZYqhnijWa4B6kgWWHfj947OzZ018wyZObxAY6pgGtoENdi6bx2QbhfYKTAzhxl%2B7PRIrFHvfgjqr%2BPrtCQYRTFcpwjHJhAX1nGTQOV6lAF5%2BEaJsYv9ZdhJyAER4aB3ZGEEpS%2BXrVlBWLxCV9PIoQePM4P8d1CPPx7s%2FgCLoBCk40g7mCThN1vQlRXwyk3mEztLsuxKkLoB1tiA2WY9rSaP5lQQeZIvE158xeUEzL0RujWHhPsaGpTF7rEFFnSlCUx%2FxE&X-Amz-Signature=f3c0d5249fef4e63062ff7843e187e2404388e40298ccdd20cc92a23630395fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTNVMJR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG1vqCTHuLjT4FKf6deN05ka9%2FltIo0kdViE5omZ4jnpAiAroRNKV%2Bv43q6Ok0YBa8a9UCrr2p4DWC842WpnF7cvoiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoW47jRt3EZDFJVqtKtwDB7x5fQFFoVu9bY1YrqI0DoaxvG%2BE1e7p3sJ0GIxTW0cZSvIgLJPZ40YNX76YCbaO0t%2BNxbC0%2FWxHA2H4pIP1rtsUwDi4nvZtJA1vwifdbyjudFKDKmpr0O5ec1QlBEckm%2B0XZp57q24BeNI7BuvFvhf%2Fj84VM2hdWbofHbhouvB6AhldQ5MGPFxOY8VPIvsNdQnRidbUd3Ky%2Fmd%2F1bl%2FjPVSOpeeF5kO493O7vveWvHq7cqedESMd5cbajJ%2FShOutkbU4Ih8QJEiS0VF4Glzt%2Fdf89F%2Bo%2FnlKCIjJG4nqiVum1pnXFkrvaK83%2FOP%2Ba3Lu51qG7RWmG4%2B4bCaFRcK%2F9BrDfunJfC7GOsjF4BNr1skNKtgAn0HYfoJDHmbz4emfND4dL4mGI1T2anRfUKgdrOZ4LvtSgB%2BaSgIaxqzAYWYvPddJU0Z7MSmFyAa%2FYEE7zjG2m70DsY4cck3PX0IbyEkINT3SAM%2Bdda99%2BIsN0i9gITNTdUmwKBtVtAKmRGDmOinjOjmxtClxj0il1xj7AT1iIrkRQYRNF4xwRvc9jQTOxRWsObxsXH%2FUkwYConDJe07vlAIC1tzIpVcHP3gA5tCWxZOwSoZYqhnijWa4B6kgWWHfj947OzZ018wyZObxAY6pgGtoENdi6bx2QbhfYKTAzhxl%2B7PRIrFHvfgjqr%2BPrtCQYRTFcpwjHJhAX1nGTQOV6lAF5%2BEaJsYv9ZdhJyAER4aB3ZGEEpS%2BXrVlBWLxCV9PIoQePM4P8d1CPPx7s%2FgCLoBCk40g7mCThN1vQlRXwyk3mEztLsuxKkLoB1tiA2WY9rSaP5lQQeZIvE158xeUEzL0RujWHhPsaGpTF7rEFFnSlCUx%2FxE&X-Amz-Signature=d02aecd54c28c43ef7f357204ec50cbe25fd241d283c018293b44cea7281eccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTNVMJR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG1vqCTHuLjT4FKf6deN05ka9%2FltIo0kdViE5omZ4jnpAiAroRNKV%2Bv43q6Ok0YBa8a9UCrr2p4DWC842WpnF7cvoiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoW47jRt3EZDFJVqtKtwDB7x5fQFFoVu9bY1YrqI0DoaxvG%2BE1e7p3sJ0GIxTW0cZSvIgLJPZ40YNX76YCbaO0t%2BNxbC0%2FWxHA2H4pIP1rtsUwDi4nvZtJA1vwifdbyjudFKDKmpr0O5ec1QlBEckm%2B0XZp57q24BeNI7BuvFvhf%2Fj84VM2hdWbofHbhouvB6AhldQ5MGPFxOY8VPIvsNdQnRidbUd3Ky%2Fmd%2F1bl%2FjPVSOpeeF5kO493O7vveWvHq7cqedESMd5cbajJ%2FShOutkbU4Ih8QJEiS0VF4Glzt%2Fdf89F%2Bo%2FnlKCIjJG4nqiVum1pnXFkrvaK83%2FOP%2Ba3Lu51qG7RWmG4%2B4bCaFRcK%2F9BrDfunJfC7GOsjF4BNr1skNKtgAn0HYfoJDHmbz4emfND4dL4mGI1T2anRfUKgdrOZ4LvtSgB%2BaSgIaxqzAYWYvPddJU0Z7MSmFyAa%2FYEE7zjG2m70DsY4cck3PX0IbyEkINT3SAM%2Bdda99%2BIsN0i9gITNTdUmwKBtVtAKmRGDmOinjOjmxtClxj0il1xj7AT1iIrkRQYRNF4xwRvc9jQTOxRWsObxsXH%2FUkwYConDJe07vlAIC1tzIpVcHP3gA5tCWxZOwSoZYqhnijWa4B6kgWWHfj947OzZ018wyZObxAY6pgGtoENdi6bx2QbhfYKTAzhxl%2B7PRIrFHvfgjqr%2BPrtCQYRTFcpwjHJhAX1nGTQOV6lAF5%2BEaJsYv9ZdhJyAER4aB3ZGEEpS%2BXrVlBWLxCV9PIoQePM4P8d1CPPx7s%2FgCLoBCk40g7mCThN1vQlRXwyk3mEztLsuxKkLoB1tiA2WY9rSaP5lQQeZIvE158xeUEzL0RujWHhPsaGpTF7rEFFnSlCUx%2FxE&X-Amz-Signature=1a899bbe5a0be4f554b1adb43c5ee50e21d405381a80ab140265748bf49f9475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTNVMJR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG1vqCTHuLjT4FKf6deN05ka9%2FltIo0kdViE5omZ4jnpAiAroRNKV%2Bv43q6Ok0YBa8a9UCrr2p4DWC842WpnF7cvoiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoW47jRt3EZDFJVqtKtwDB7x5fQFFoVu9bY1YrqI0DoaxvG%2BE1e7p3sJ0GIxTW0cZSvIgLJPZ40YNX76YCbaO0t%2BNxbC0%2FWxHA2H4pIP1rtsUwDi4nvZtJA1vwifdbyjudFKDKmpr0O5ec1QlBEckm%2B0XZp57q24BeNI7BuvFvhf%2Fj84VM2hdWbofHbhouvB6AhldQ5MGPFxOY8VPIvsNdQnRidbUd3Ky%2Fmd%2F1bl%2FjPVSOpeeF5kO493O7vveWvHq7cqedESMd5cbajJ%2FShOutkbU4Ih8QJEiS0VF4Glzt%2Fdf89F%2Bo%2FnlKCIjJG4nqiVum1pnXFkrvaK83%2FOP%2Ba3Lu51qG7RWmG4%2B4bCaFRcK%2F9BrDfunJfC7GOsjF4BNr1skNKtgAn0HYfoJDHmbz4emfND4dL4mGI1T2anRfUKgdrOZ4LvtSgB%2BaSgIaxqzAYWYvPddJU0Z7MSmFyAa%2FYEE7zjG2m70DsY4cck3PX0IbyEkINT3SAM%2Bdda99%2BIsN0i9gITNTdUmwKBtVtAKmRGDmOinjOjmxtClxj0il1xj7AT1iIrkRQYRNF4xwRvc9jQTOxRWsObxsXH%2FUkwYConDJe07vlAIC1tzIpVcHP3gA5tCWxZOwSoZYqhnijWa4B6kgWWHfj947OzZ018wyZObxAY6pgGtoENdi6bx2QbhfYKTAzhxl%2B7PRIrFHvfgjqr%2BPrtCQYRTFcpwjHJhAX1nGTQOV6lAF5%2BEaJsYv9ZdhJyAER4aB3ZGEEpS%2BXrVlBWLxCV9PIoQePM4P8d1CPPx7s%2FgCLoBCk40g7mCThN1vQlRXwyk3mEztLsuxKkLoB1tiA2WY9rSaP5lQQeZIvE158xeUEzL0RujWHhPsaGpTF7rEFFnSlCUx%2FxE&X-Amz-Signature=5913fc5d020a7e617f6c1fa88fcb0d5d64297ff5fd4a061f49ca943c1692d305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
