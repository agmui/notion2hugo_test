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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFTAJSB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDXq%2F5OEhXR%2BGus5OiqDgnwLdehepJ01uQuFkROYOnPiQIgCuKabNGIlqB4IdNyl%2FP834XpdWRpVR%2BDuDKQ7Y3XqtQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCMr9vM6pvdBGOYLwSrcAzlvsQwB2kavEvFWmUh3LZUsMVNTRQqKvXqYlZ7vjqdWI7SEU1bbWP0slRq5%2FwWekG8kISC1JOOdbwg2VuY3kdjcOruyxeAVLV3HE798AjjBMG2VsaR9Q066RqKaKyxpZfdep%2FoWYszVQlYjr9GuBa0Dj%2BncMTJGF3MCFTmH9tgxYWr%2F0lyCCHexEszAuzYn5AGVuDl7sKi0V%2FbiJSK%2BwM5Ig1qWgkYPZOjKMh0RMPwppdMGJoGOutGsn%2BTVTLkBvlKBakgZWlgjVT%2Fq2dWqLbO%2Ff9bTdDkLGqGrZLMhEu%2BjJrqfwriKy3XZIY6MJo9rTzoWlNkwa24CeQl0cvc0NGC%2Bpnrmv%2B2SwSEsCaIioppeaK78ZyZnqs%2B00Bs46wdhnL1ONKy1uDr0jvc5VY8SfhB0SdNhqBw3HMwRrn3edU1K76p5LxN1NnV%2FGHXI3xs8WdmmswkWvOJoz1p7QGs9cASlAreueTjb6rEiVBE9eTOTcrh%2FbZaPdx6H9T8jofd%2Bib6q%2Bcc%2BC%2FFke%2BJzVQsqDJVNJs7F%2FCvGC7oXcSlj8t70oj3KuKGMQMpxvolRzqzatkmWxa8LHX2KmjLnucik7SXsx%2ByFs1s7JZzNg7TS1SbExTqOiWL%2F2iFmbXCYMPydisIGOqUBEDzl2iU9cj4dNDzrS3p5ajLuQpPLV4Gi41kNgVeJ9sVPmJFzpLgR1OfdfUcf2ehlI3wMEnNwMz7EIsmop9px4w9O1W9g4P%2BMQ9eXzmM62%2FFdkBfocwMDHpeEw3jbki95ImFG8IiMdHmZ7%2Bn5uOlZiH066xoiaZB5luT78%2FbKcIe72Vr%2Frlo4VsXfMpfxEXTufqBIqzap7jv7W0v5RV4SLcYuqYg9&X-Amz-Signature=f415f0cda3c6f2d4b84489ad23bd1ec480abad29528b7c9c4403480d44270cea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFTAJSB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDXq%2F5OEhXR%2BGus5OiqDgnwLdehepJ01uQuFkROYOnPiQIgCuKabNGIlqB4IdNyl%2FP834XpdWRpVR%2BDuDKQ7Y3XqtQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCMr9vM6pvdBGOYLwSrcAzlvsQwB2kavEvFWmUh3LZUsMVNTRQqKvXqYlZ7vjqdWI7SEU1bbWP0slRq5%2FwWekG8kISC1JOOdbwg2VuY3kdjcOruyxeAVLV3HE798AjjBMG2VsaR9Q066RqKaKyxpZfdep%2FoWYszVQlYjr9GuBa0Dj%2BncMTJGF3MCFTmH9tgxYWr%2F0lyCCHexEszAuzYn5AGVuDl7sKi0V%2FbiJSK%2BwM5Ig1qWgkYPZOjKMh0RMPwppdMGJoGOutGsn%2BTVTLkBvlKBakgZWlgjVT%2Fq2dWqLbO%2Ff9bTdDkLGqGrZLMhEu%2BjJrqfwriKy3XZIY6MJo9rTzoWlNkwa24CeQl0cvc0NGC%2Bpnrmv%2B2SwSEsCaIioppeaK78ZyZnqs%2B00Bs46wdhnL1ONKy1uDr0jvc5VY8SfhB0SdNhqBw3HMwRrn3edU1K76p5LxN1NnV%2FGHXI3xs8WdmmswkWvOJoz1p7QGs9cASlAreueTjb6rEiVBE9eTOTcrh%2FbZaPdx6H9T8jofd%2Bib6q%2Bcc%2BC%2FFke%2BJzVQsqDJVNJs7F%2FCvGC7oXcSlj8t70oj3KuKGMQMpxvolRzqzatkmWxa8LHX2KmjLnucik7SXsx%2ByFs1s7JZzNg7TS1SbExTqOiWL%2F2iFmbXCYMPydisIGOqUBEDzl2iU9cj4dNDzrS3p5ajLuQpPLV4Gi41kNgVeJ9sVPmJFzpLgR1OfdfUcf2ehlI3wMEnNwMz7EIsmop9px4w9O1W9g4P%2BMQ9eXzmM62%2FFdkBfocwMDHpeEw3jbki95ImFG8IiMdHmZ7%2Bn5uOlZiH066xoiaZB5luT78%2FbKcIe72Vr%2Frlo4VsXfMpfxEXTufqBIqzap7jv7W0v5RV4SLcYuqYg9&X-Amz-Signature=a94bde20a3cced8a48c4c88a4e1c562f5d0324a9a2fdf33813ad07aad7c9571a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFTAJSB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDXq%2F5OEhXR%2BGus5OiqDgnwLdehepJ01uQuFkROYOnPiQIgCuKabNGIlqB4IdNyl%2FP834XpdWRpVR%2BDuDKQ7Y3XqtQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCMr9vM6pvdBGOYLwSrcAzlvsQwB2kavEvFWmUh3LZUsMVNTRQqKvXqYlZ7vjqdWI7SEU1bbWP0slRq5%2FwWekG8kISC1JOOdbwg2VuY3kdjcOruyxeAVLV3HE798AjjBMG2VsaR9Q066RqKaKyxpZfdep%2FoWYszVQlYjr9GuBa0Dj%2BncMTJGF3MCFTmH9tgxYWr%2F0lyCCHexEszAuzYn5AGVuDl7sKi0V%2FbiJSK%2BwM5Ig1qWgkYPZOjKMh0RMPwppdMGJoGOutGsn%2BTVTLkBvlKBakgZWlgjVT%2Fq2dWqLbO%2Ff9bTdDkLGqGrZLMhEu%2BjJrqfwriKy3XZIY6MJo9rTzoWlNkwa24CeQl0cvc0NGC%2Bpnrmv%2B2SwSEsCaIioppeaK78ZyZnqs%2B00Bs46wdhnL1ONKy1uDr0jvc5VY8SfhB0SdNhqBw3HMwRrn3edU1K76p5LxN1NnV%2FGHXI3xs8WdmmswkWvOJoz1p7QGs9cASlAreueTjb6rEiVBE9eTOTcrh%2FbZaPdx6H9T8jofd%2Bib6q%2Bcc%2BC%2FFke%2BJzVQsqDJVNJs7F%2FCvGC7oXcSlj8t70oj3KuKGMQMpxvolRzqzatkmWxa8LHX2KmjLnucik7SXsx%2ByFs1s7JZzNg7TS1SbExTqOiWL%2F2iFmbXCYMPydisIGOqUBEDzl2iU9cj4dNDzrS3p5ajLuQpPLV4Gi41kNgVeJ9sVPmJFzpLgR1OfdfUcf2ehlI3wMEnNwMz7EIsmop9px4w9O1W9g4P%2BMQ9eXzmM62%2FFdkBfocwMDHpeEw3jbki95ImFG8IiMdHmZ7%2Bn5uOlZiH066xoiaZB5luT78%2FbKcIe72Vr%2Frlo4VsXfMpfxEXTufqBIqzap7jv7W0v5RV4SLcYuqYg9&X-Amz-Signature=fbce917a2626dcbea2a2a9b5f9a6607bd309883704dac4532750d04b251d894c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFTAJSB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDXq%2F5OEhXR%2BGus5OiqDgnwLdehepJ01uQuFkROYOnPiQIgCuKabNGIlqB4IdNyl%2FP834XpdWRpVR%2BDuDKQ7Y3XqtQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCMr9vM6pvdBGOYLwSrcAzlvsQwB2kavEvFWmUh3LZUsMVNTRQqKvXqYlZ7vjqdWI7SEU1bbWP0slRq5%2FwWekG8kISC1JOOdbwg2VuY3kdjcOruyxeAVLV3HE798AjjBMG2VsaR9Q066RqKaKyxpZfdep%2FoWYszVQlYjr9GuBa0Dj%2BncMTJGF3MCFTmH9tgxYWr%2F0lyCCHexEszAuzYn5AGVuDl7sKi0V%2FbiJSK%2BwM5Ig1qWgkYPZOjKMh0RMPwppdMGJoGOutGsn%2BTVTLkBvlKBakgZWlgjVT%2Fq2dWqLbO%2Ff9bTdDkLGqGrZLMhEu%2BjJrqfwriKy3XZIY6MJo9rTzoWlNkwa24CeQl0cvc0NGC%2Bpnrmv%2B2SwSEsCaIioppeaK78ZyZnqs%2B00Bs46wdhnL1ONKy1uDr0jvc5VY8SfhB0SdNhqBw3HMwRrn3edU1K76p5LxN1NnV%2FGHXI3xs8WdmmswkWvOJoz1p7QGs9cASlAreueTjb6rEiVBE9eTOTcrh%2FbZaPdx6H9T8jofd%2Bib6q%2Bcc%2BC%2FFke%2BJzVQsqDJVNJs7F%2FCvGC7oXcSlj8t70oj3KuKGMQMpxvolRzqzatkmWxa8LHX2KmjLnucik7SXsx%2ByFs1s7JZzNg7TS1SbExTqOiWL%2F2iFmbXCYMPydisIGOqUBEDzl2iU9cj4dNDzrS3p5ajLuQpPLV4Gi41kNgVeJ9sVPmJFzpLgR1OfdfUcf2ehlI3wMEnNwMz7EIsmop9px4w9O1W9g4P%2BMQ9eXzmM62%2FFdkBfocwMDHpeEw3jbki95ImFG8IiMdHmZ7%2Bn5uOlZiH066xoiaZB5luT78%2FbKcIe72Vr%2Frlo4VsXfMpfxEXTufqBIqzap7jv7W0v5RV4SLcYuqYg9&X-Amz-Signature=3259c241486cb9735f4b7f1b553048a5e35ad210848ccd8ecbd0325170f7482d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFTAJSB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDXq%2F5OEhXR%2BGus5OiqDgnwLdehepJ01uQuFkROYOnPiQIgCuKabNGIlqB4IdNyl%2FP834XpdWRpVR%2BDuDKQ7Y3XqtQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCMr9vM6pvdBGOYLwSrcAzlvsQwB2kavEvFWmUh3LZUsMVNTRQqKvXqYlZ7vjqdWI7SEU1bbWP0slRq5%2FwWekG8kISC1JOOdbwg2VuY3kdjcOruyxeAVLV3HE798AjjBMG2VsaR9Q066RqKaKyxpZfdep%2FoWYszVQlYjr9GuBa0Dj%2BncMTJGF3MCFTmH9tgxYWr%2F0lyCCHexEszAuzYn5AGVuDl7sKi0V%2FbiJSK%2BwM5Ig1qWgkYPZOjKMh0RMPwppdMGJoGOutGsn%2BTVTLkBvlKBakgZWlgjVT%2Fq2dWqLbO%2Ff9bTdDkLGqGrZLMhEu%2BjJrqfwriKy3XZIY6MJo9rTzoWlNkwa24CeQl0cvc0NGC%2Bpnrmv%2B2SwSEsCaIioppeaK78ZyZnqs%2B00Bs46wdhnL1ONKy1uDr0jvc5VY8SfhB0SdNhqBw3HMwRrn3edU1K76p5LxN1NnV%2FGHXI3xs8WdmmswkWvOJoz1p7QGs9cASlAreueTjb6rEiVBE9eTOTcrh%2FbZaPdx6H9T8jofd%2Bib6q%2Bcc%2BC%2FFke%2BJzVQsqDJVNJs7F%2FCvGC7oXcSlj8t70oj3KuKGMQMpxvolRzqzatkmWxa8LHX2KmjLnucik7SXsx%2ByFs1s7JZzNg7TS1SbExTqOiWL%2F2iFmbXCYMPydisIGOqUBEDzl2iU9cj4dNDzrS3p5ajLuQpPLV4Gi41kNgVeJ9sVPmJFzpLgR1OfdfUcf2ehlI3wMEnNwMz7EIsmop9px4w9O1W9g4P%2BMQ9eXzmM62%2FFdkBfocwMDHpeEw3jbki95ImFG8IiMdHmZ7%2Bn5uOlZiH066xoiaZB5luT78%2FbKcIe72Vr%2Frlo4VsXfMpfxEXTufqBIqzap7jv7W0v5RV4SLcYuqYg9&X-Amz-Signature=11a723bd6873099c929dc2ef6489b610bc7dee0ec8b983a84b24fb5e6e1305a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFTAJSB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDXq%2F5OEhXR%2BGus5OiqDgnwLdehepJ01uQuFkROYOnPiQIgCuKabNGIlqB4IdNyl%2FP834XpdWRpVR%2BDuDKQ7Y3XqtQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCMr9vM6pvdBGOYLwSrcAzlvsQwB2kavEvFWmUh3LZUsMVNTRQqKvXqYlZ7vjqdWI7SEU1bbWP0slRq5%2FwWekG8kISC1JOOdbwg2VuY3kdjcOruyxeAVLV3HE798AjjBMG2VsaR9Q066RqKaKyxpZfdep%2FoWYszVQlYjr9GuBa0Dj%2BncMTJGF3MCFTmH9tgxYWr%2F0lyCCHexEszAuzYn5AGVuDl7sKi0V%2FbiJSK%2BwM5Ig1qWgkYPZOjKMh0RMPwppdMGJoGOutGsn%2BTVTLkBvlKBakgZWlgjVT%2Fq2dWqLbO%2Ff9bTdDkLGqGrZLMhEu%2BjJrqfwriKy3XZIY6MJo9rTzoWlNkwa24CeQl0cvc0NGC%2Bpnrmv%2B2SwSEsCaIioppeaK78ZyZnqs%2B00Bs46wdhnL1ONKy1uDr0jvc5VY8SfhB0SdNhqBw3HMwRrn3edU1K76p5LxN1NnV%2FGHXI3xs8WdmmswkWvOJoz1p7QGs9cASlAreueTjb6rEiVBE9eTOTcrh%2FbZaPdx6H9T8jofd%2Bib6q%2Bcc%2BC%2FFke%2BJzVQsqDJVNJs7F%2FCvGC7oXcSlj8t70oj3KuKGMQMpxvolRzqzatkmWxa8LHX2KmjLnucik7SXsx%2ByFs1s7JZzNg7TS1SbExTqOiWL%2F2iFmbXCYMPydisIGOqUBEDzl2iU9cj4dNDzrS3p5ajLuQpPLV4Gi41kNgVeJ9sVPmJFzpLgR1OfdfUcf2ehlI3wMEnNwMz7EIsmop9px4w9O1W9g4P%2BMQ9eXzmM62%2FFdkBfocwMDHpeEw3jbki95ImFG8IiMdHmZ7%2Bn5uOlZiH066xoiaZB5luT78%2FbKcIe72Vr%2Frlo4VsXfMpfxEXTufqBIqzap7jv7W0v5RV4SLcYuqYg9&X-Amz-Signature=f852bf06ecfd0b286e66634cb405b88958d0c13ee168e22b5eb16e55c2bec808&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFTAJSB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDXq%2F5OEhXR%2BGus5OiqDgnwLdehepJ01uQuFkROYOnPiQIgCuKabNGIlqB4IdNyl%2FP834XpdWRpVR%2BDuDKQ7Y3XqtQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCMr9vM6pvdBGOYLwSrcAzlvsQwB2kavEvFWmUh3LZUsMVNTRQqKvXqYlZ7vjqdWI7SEU1bbWP0slRq5%2FwWekG8kISC1JOOdbwg2VuY3kdjcOruyxeAVLV3HE798AjjBMG2VsaR9Q066RqKaKyxpZfdep%2FoWYszVQlYjr9GuBa0Dj%2BncMTJGF3MCFTmH9tgxYWr%2F0lyCCHexEszAuzYn5AGVuDl7sKi0V%2FbiJSK%2BwM5Ig1qWgkYPZOjKMh0RMPwppdMGJoGOutGsn%2BTVTLkBvlKBakgZWlgjVT%2Fq2dWqLbO%2Ff9bTdDkLGqGrZLMhEu%2BjJrqfwriKy3XZIY6MJo9rTzoWlNkwa24CeQl0cvc0NGC%2Bpnrmv%2B2SwSEsCaIioppeaK78ZyZnqs%2B00Bs46wdhnL1ONKy1uDr0jvc5VY8SfhB0SdNhqBw3HMwRrn3edU1K76p5LxN1NnV%2FGHXI3xs8WdmmswkWvOJoz1p7QGs9cASlAreueTjb6rEiVBE9eTOTcrh%2FbZaPdx6H9T8jofd%2Bib6q%2Bcc%2BC%2FFke%2BJzVQsqDJVNJs7F%2FCvGC7oXcSlj8t70oj3KuKGMQMpxvolRzqzatkmWxa8LHX2KmjLnucik7SXsx%2ByFs1s7JZzNg7TS1SbExTqOiWL%2F2iFmbXCYMPydisIGOqUBEDzl2iU9cj4dNDzrS3p5ajLuQpPLV4Gi41kNgVeJ9sVPmJFzpLgR1OfdfUcf2ehlI3wMEnNwMz7EIsmop9px4w9O1W9g4P%2BMQ9eXzmM62%2FFdkBfocwMDHpeEw3jbki95ImFG8IiMdHmZ7%2Bn5uOlZiH066xoiaZB5luT78%2FbKcIe72Vr%2Frlo4VsXfMpfxEXTufqBIqzap7jv7W0v5RV4SLcYuqYg9&X-Amz-Signature=b75d29b4b437cc5c0bee81020e2e22a9d908765896c132eab5ae1b79a754e0d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RFTAJSB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDXq%2F5OEhXR%2BGus5OiqDgnwLdehepJ01uQuFkROYOnPiQIgCuKabNGIlqB4IdNyl%2FP834XpdWRpVR%2BDuDKQ7Y3XqtQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDCMr9vM6pvdBGOYLwSrcAzlvsQwB2kavEvFWmUh3LZUsMVNTRQqKvXqYlZ7vjqdWI7SEU1bbWP0slRq5%2FwWekG8kISC1JOOdbwg2VuY3kdjcOruyxeAVLV3HE798AjjBMG2VsaR9Q066RqKaKyxpZfdep%2FoWYszVQlYjr9GuBa0Dj%2BncMTJGF3MCFTmH9tgxYWr%2F0lyCCHexEszAuzYn5AGVuDl7sKi0V%2FbiJSK%2BwM5Ig1qWgkYPZOjKMh0RMPwppdMGJoGOutGsn%2BTVTLkBvlKBakgZWlgjVT%2Fq2dWqLbO%2Ff9bTdDkLGqGrZLMhEu%2BjJrqfwriKy3XZIY6MJo9rTzoWlNkwa24CeQl0cvc0NGC%2Bpnrmv%2B2SwSEsCaIioppeaK78ZyZnqs%2B00Bs46wdhnL1ONKy1uDr0jvc5VY8SfhB0SdNhqBw3HMwRrn3edU1K76p5LxN1NnV%2FGHXI3xs8WdmmswkWvOJoz1p7QGs9cASlAreueTjb6rEiVBE9eTOTcrh%2FbZaPdx6H9T8jofd%2Bib6q%2Bcc%2BC%2FFke%2BJzVQsqDJVNJs7F%2FCvGC7oXcSlj8t70oj3KuKGMQMpxvolRzqzatkmWxa8LHX2KmjLnucik7SXsx%2ByFs1s7JZzNg7TS1SbExTqOiWL%2F2iFmbXCYMPydisIGOqUBEDzl2iU9cj4dNDzrS3p5ajLuQpPLV4Gi41kNgVeJ9sVPmJFzpLgR1OfdfUcf2ehlI3wMEnNwMz7EIsmop9px4w9O1W9g4P%2BMQ9eXzmM62%2FFdkBfocwMDHpeEw3jbki95ImFG8IiMdHmZ7%2Bn5uOlZiH066xoiaZB5luT78%2FbKcIe72Vr%2Frlo4VsXfMpfxEXTufqBIqzap7jv7W0v5RV4SLcYuqYg9&X-Amz-Signature=71da90d405aa34921a6caeadfbcb8ce9f04b221e1eb3cdbc5c203f2c75399f53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
