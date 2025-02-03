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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7DFGVD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4%2FSzxZ%2BjQL1flXvsGjOQi5sNA9fM1OGFZ64u4%2BsuMjAiBaYkRcBD7WnBtIMkp%2B6hMgbvPCrWQjZdWnf%2FGZ7KrvSSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM7%2FOr9TvT0ZYUrlkNKtwDKo%2B2UNYt0K4G1%2FFvVYRRSx96PJSpgzaOoKJx4rym3%2FqXlRjKNRM0a99PL7JPec136lQVIPCEgYpIv0AjBs3pX%2B%2FX1SgpXruUu1enZc7Wa28%2BLovI7NuMdc%2BCIAREdz7KGpeN%2Bj4HTPKo13i6cSFM%2F5Kf4naRZM1I4eMTnfqMBTlvXt1jN2HCCBuipZCGoEfjAkLG9Om%2BRI2NorEthB6frySZgPMTfz76F%2BtinTw9qtpCvtXnlEJc%2BelCx2q1L4HcEG96T83UJ5buOASPN1XU%2FA2kl8wR%2B%2B2XG6CnXyjkG7ZDA64y2aLCSL8SqA0KqqGI6LZMTIPNTsRafiQXeCazgTusku7WDqtTj7vK65U33rDpwXXqBIrd%2F%2FE4CC5UZDOEW5BDXo35FxlUsX%2FURRT8XPt38alcX5%2FVstdvYsyr7Y%2BbE8XTK7u0v9Cak2zfINrPp%2BjDxbmlWwn3i7YRxoZOKD7llKJN32W2S9%2FCkhu2lPablEHb1t2q8cpsrABdmugHALtO6yoIey7iS8JJPonvC89ZcYIYHIkPOZCGGz%2FBLG1%2FkQlFpT2qHbn%2FEG14bWQugU7ZWSWb28p3Z3ZFPStp0oWrUTjj5g1pELnv2F2PtJml3mLQG%2BOQK5XDJ28wvY%2BDvQY6pgGUpQ3evY%2BGis8eRwe9q1QwQ3h5NvzP9BvuNwYdJdfjEG%2F6j0EGXJXIBwaNnkP1AZ4HYBNuUfIQJzL%2Bdq7SIHrW97uUH6ekkaTpQUq07pB7Vq9SwkciQI9FT0qjX9GF7i5QsaYNndoIA9EOc3BJeZ8M7u8DBbgmn4ejnWQJkVRJxB%2BW08cDEYjbA%2BZBbCUNBYOm%2FJtL7BhRIaQWKgE0vrKfnkTrpBEJ&X-Amz-Signature=586c05e85766643f39be157690269ac1b66697f7a7af5f18ab3a373739911d99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7DFGVD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4%2FSzxZ%2BjQL1flXvsGjOQi5sNA9fM1OGFZ64u4%2BsuMjAiBaYkRcBD7WnBtIMkp%2B6hMgbvPCrWQjZdWnf%2FGZ7KrvSSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM7%2FOr9TvT0ZYUrlkNKtwDKo%2B2UNYt0K4G1%2FFvVYRRSx96PJSpgzaOoKJx4rym3%2FqXlRjKNRM0a99PL7JPec136lQVIPCEgYpIv0AjBs3pX%2B%2FX1SgpXruUu1enZc7Wa28%2BLovI7NuMdc%2BCIAREdz7KGpeN%2Bj4HTPKo13i6cSFM%2F5Kf4naRZM1I4eMTnfqMBTlvXt1jN2HCCBuipZCGoEfjAkLG9Om%2BRI2NorEthB6frySZgPMTfz76F%2BtinTw9qtpCvtXnlEJc%2BelCx2q1L4HcEG96T83UJ5buOASPN1XU%2FA2kl8wR%2B%2B2XG6CnXyjkG7ZDA64y2aLCSL8SqA0KqqGI6LZMTIPNTsRafiQXeCazgTusku7WDqtTj7vK65U33rDpwXXqBIrd%2F%2FE4CC5UZDOEW5BDXo35FxlUsX%2FURRT8XPt38alcX5%2FVstdvYsyr7Y%2BbE8XTK7u0v9Cak2zfINrPp%2BjDxbmlWwn3i7YRxoZOKD7llKJN32W2S9%2FCkhu2lPablEHb1t2q8cpsrABdmugHALtO6yoIey7iS8JJPonvC89ZcYIYHIkPOZCGGz%2FBLG1%2FkQlFpT2qHbn%2FEG14bWQugU7ZWSWb28p3Z3ZFPStp0oWrUTjj5g1pELnv2F2PtJml3mLQG%2BOQK5XDJ28wvY%2BDvQY6pgGUpQ3evY%2BGis8eRwe9q1QwQ3h5NvzP9BvuNwYdJdfjEG%2F6j0EGXJXIBwaNnkP1AZ4HYBNuUfIQJzL%2Bdq7SIHrW97uUH6ekkaTpQUq07pB7Vq9SwkciQI9FT0qjX9GF7i5QsaYNndoIA9EOc3BJeZ8M7u8DBbgmn4ejnWQJkVRJxB%2BW08cDEYjbA%2BZBbCUNBYOm%2FJtL7BhRIaQWKgE0vrKfnkTrpBEJ&X-Amz-Signature=bdc06790ea16a3b68f0cb8b89916bf49a737edb91160ab38329a13a91083a4bd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7DFGVD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4%2FSzxZ%2BjQL1flXvsGjOQi5sNA9fM1OGFZ64u4%2BsuMjAiBaYkRcBD7WnBtIMkp%2B6hMgbvPCrWQjZdWnf%2FGZ7KrvSSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM7%2FOr9TvT0ZYUrlkNKtwDKo%2B2UNYt0K4G1%2FFvVYRRSx96PJSpgzaOoKJx4rym3%2FqXlRjKNRM0a99PL7JPec136lQVIPCEgYpIv0AjBs3pX%2B%2FX1SgpXruUu1enZc7Wa28%2BLovI7NuMdc%2BCIAREdz7KGpeN%2Bj4HTPKo13i6cSFM%2F5Kf4naRZM1I4eMTnfqMBTlvXt1jN2HCCBuipZCGoEfjAkLG9Om%2BRI2NorEthB6frySZgPMTfz76F%2BtinTw9qtpCvtXnlEJc%2BelCx2q1L4HcEG96T83UJ5buOASPN1XU%2FA2kl8wR%2B%2B2XG6CnXyjkG7ZDA64y2aLCSL8SqA0KqqGI6LZMTIPNTsRafiQXeCazgTusku7WDqtTj7vK65U33rDpwXXqBIrd%2F%2FE4CC5UZDOEW5BDXo35FxlUsX%2FURRT8XPt38alcX5%2FVstdvYsyr7Y%2BbE8XTK7u0v9Cak2zfINrPp%2BjDxbmlWwn3i7YRxoZOKD7llKJN32W2S9%2FCkhu2lPablEHb1t2q8cpsrABdmugHALtO6yoIey7iS8JJPonvC89ZcYIYHIkPOZCGGz%2FBLG1%2FkQlFpT2qHbn%2FEG14bWQugU7ZWSWb28p3Z3ZFPStp0oWrUTjj5g1pELnv2F2PtJml3mLQG%2BOQK5XDJ28wvY%2BDvQY6pgGUpQ3evY%2BGis8eRwe9q1QwQ3h5NvzP9BvuNwYdJdfjEG%2F6j0EGXJXIBwaNnkP1AZ4HYBNuUfIQJzL%2Bdq7SIHrW97uUH6ekkaTpQUq07pB7Vq9SwkciQI9FT0qjX9GF7i5QsaYNndoIA9EOc3BJeZ8M7u8DBbgmn4ejnWQJkVRJxB%2BW08cDEYjbA%2BZBbCUNBYOm%2FJtL7BhRIaQWKgE0vrKfnkTrpBEJ&X-Amz-Signature=7aaf8fd319b3af95b28d0a29329d82f996590321c2776b4d5560d516a7345d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7DFGVD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4%2FSzxZ%2BjQL1flXvsGjOQi5sNA9fM1OGFZ64u4%2BsuMjAiBaYkRcBD7WnBtIMkp%2B6hMgbvPCrWQjZdWnf%2FGZ7KrvSSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM7%2FOr9TvT0ZYUrlkNKtwDKo%2B2UNYt0K4G1%2FFvVYRRSx96PJSpgzaOoKJx4rym3%2FqXlRjKNRM0a99PL7JPec136lQVIPCEgYpIv0AjBs3pX%2B%2FX1SgpXruUu1enZc7Wa28%2BLovI7NuMdc%2BCIAREdz7KGpeN%2Bj4HTPKo13i6cSFM%2F5Kf4naRZM1I4eMTnfqMBTlvXt1jN2HCCBuipZCGoEfjAkLG9Om%2BRI2NorEthB6frySZgPMTfz76F%2BtinTw9qtpCvtXnlEJc%2BelCx2q1L4HcEG96T83UJ5buOASPN1XU%2FA2kl8wR%2B%2B2XG6CnXyjkG7ZDA64y2aLCSL8SqA0KqqGI6LZMTIPNTsRafiQXeCazgTusku7WDqtTj7vK65U33rDpwXXqBIrd%2F%2FE4CC5UZDOEW5BDXo35FxlUsX%2FURRT8XPt38alcX5%2FVstdvYsyr7Y%2BbE8XTK7u0v9Cak2zfINrPp%2BjDxbmlWwn3i7YRxoZOKD7llKJN32W2S9%2FCkhu2lPablEHb1t2q8cpsrABdmugHALtO6yoIey7iS8JJPonvC89ZcYIYHIkPOZCGGz%2FBLG1%2FkQlFpT2qHbn%2FEG14bWQugU7ZWSWb28p3Z3ZFPStp0oWrUTjj5g1pELnv2F2PtJml3mLQG%2BOQK5XDJ28wvY%2BDvQY6pgGUpQ3evY%2BGis8eRwe9q1QwQ3h5NvzP9BvuNwYdJdfjEG%2F6j0EGXJXIBwaNnkP1AZ4HYBNuUfIQJzL%2Bdq7SIHrW97uUH6ekkaTpQUq07pB7Vq9SwkciQI9FT0qjX9GF7i5QsaYNndoIA9EOc3BJeZ8M7u8DBbgmn4ejnWQJkVRJxB%2BW08cDEYjbA%2BZBbCUNBYOm%2FJtL7BhRIaQWKgE0vrKfnkTrpBEJ&X-Amz-Signature=e9e18790b969423e7f1af08531a560dd16c3544d25f171c1db0cb8000f9245f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7DFGVD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4%2FSzxZ%2BjQL1flXvsGjOQi5sNA9fM1OGFZ64u4%2BsuMjAiBaYkRcBD7WnBtIMkp%2B6hMgbvPCrWQjZdWnf%2FGZ7KrvSSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM7%2FOr9TvT0ZYUrlkNKtwDKo%2B2UNYt0K4G1%2FFvVYRRSx96PJSpgzaOoKJx4rym3%2FqXlRjKNRM0a99PL7JPec136lQVIPCEgYpIv0AjBs3pX%2B%2FX1SgpXruUu1enZc7Wa28%2BLovI7NuMdc%2BCIAREdz7KGpeN%2Bj4HTPKo13i6cSFM%2F5Kf4naRZM1I4eMTnfqMBTlvXt1jN2HCCBuipZCGoEfjAkLG9Om%2BRI2NorEthB6frySZgPMTfz76F%2BtinTw9qtpCvtXnlEJc%2BelCx2q1L4HcEG96T83UJ5buOASPN1XU%2FA2kl8wR%2B%2B2XG6CnXyjkG7ZDA64y2aLCSL8SqA0KqqGI6LZMTIPNTsRafiQXeCazgTusku7WDqtTj7vK65U33rDpwXXqBIrd%2F%2FE4CC5UZDOEW5BDXo35FxlUsX%2FURRT8XPt38alcX5%2FVstdvYsyr7Y%2BbE8XTK7u0v9Cak2zfINrPp%2BjDxbmlWwn3i7YRxoZOKD7llKJN32W2S9%2FCkhu2lPablEHb1t2q8cpsrABdmugHALtO6yoIey7iS8JJPonvC89ZcYIYHIkPOZCGGz%2FBLG1%2FkQlFpT2qHbn%2FEG14bWQugU7ZWSWb28p3Z3ZFPStp0oWrUTjj5g1pELnv2F2PtJml3mLQG%2BOQK5XDJ28wvY%2BDvQY6pgGUpQ3evY%2BGis8eRwe9q1QwQ3h5NvzP9BvuNwYdJdfjEG%2F6j0EGXJXIBwaNnkP1AZ4HYBNuUfIQJzL%2Bdq7SIHrW97uUH6ekkaTpQUq07pB7Vq9SwkciQI9FT0qjX9GF7i5QsaYNndoIA9EOc3BJeZ8M7u8DBbgmn4ejnWQJkVRJxB%2BW08cDEYjbA%2BZBbCUNBYOm%2FJtL7BhRIaQWKgE0vrKfnkTrpBEJ&X-Amz-Signature=998a43cb87eddc52f500ae3521c78ac8924aaa9add9fdc540962d8a88cfc9a00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7DFGVD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4%2FSzxZ%2BjQL1flXvsGjOQi5sNA9fM1OGFZ64u4%2BsuMjAiBaYkRcBD7WnBtIMkp%2B6hMgbvPCrWQjZdWnf%2FGZ7KrvSSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM7%2FOr9TvT0ZYUrlkNKtwDKo%2B2UNYt0K4G1%2FFvVYRRSx96PJSpgzaOoKJx4rym3%2FqXlRjKNRM0a99PL7JPec136lQVIPCEgYpIv0AjBs3pX%2B%2FX1SgpXruUu1enZc7Wa28%2BLovI7NuMdc%2BCIAREdz7KGpeN%2Bj4HTPKo13i6cSFM%2F5Kf4naRZM1I4eMTnfqMBTlvXt1jN2HCCBuipZCGoEfjAkLG9Om%2BRI2NorEthB6frySZgPMTfz76F%2BtinTw9qtpCvtXnlEJc%2BelCx2q1L4HcEG96T83UJ5buOASPN1XU%2FA2kl8wR%2B%2B2XG6CnXyjkG7ZDA64y2aLCSL8SqA0KqqGI6LZMTIPNTsRafiQXeCazgTusku7WDqtTj7vK65U33rDpwXXqBIrd%2F%2FE4CC5UZDOEW5BDXo35FxlUsX%2FURRT8XPt38alcX5%2FVstdvYsyr7Y%2BbE8XTK7u0v9Cak2zfINrPp%2BjDxbmlWwn3i7YRxoZOKD7llKJN32W2S9%2FCkhu2lPablEHb1t2q8cpsrABdmugHALtO6yoIey7iS8JJPonvC89ZcYIYHIkPOZCGGz%2FBLG1%2FkQlFpT2qHbn%2FEG14bWQugU7ZWSWb28p3Z3ZFPStp0oWrUTjj5g1pELnv2F2PtJml3mLQG%2BOQK5XDJ28wvY%2BDvQY6pgGUpQ3evY%2BGis8eRwe9q1QwQ3h5NvzP9BvuNwYdJdfjEG%2F6j0EGXJXIBwaNnkP1AZ4HYBNuUfIQJzL%2Bdq7SIHrW97uUH6ekkaTpQUq07pB7Vq9SwkciQI9FT0qjX9GF7i5QsaYNndoIA9EOc3BJeZ8M7u8DBbgmn4ejnWQJkVRJxB%2BW08cDEYjbA%2BZBbCUNBYOm%2FJtL7BhRIaQWKgE0vrKfnkTrpBEJ&X-Amz-Signature=419c381ba30503c13be76bb8537bd4d501868ec3d07a0a96bc145e8c560d8253&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7DFGVD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4%2FSzxZ%2BjQL1flXvsGjOQi5sNA9fM1OGFZ64u4%2BsuMjAiBaYkRcBD7WnBtIMkp%2B6hMgbvPCrWQjZdWnf%2FGZ7KrvSSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM7%2FOr9TvT0ZYUrlkNKtwDKo%2B2UNYt0K4G1%2FFvVYRRSx96PJSpgzaOoKJx4rym3%2FqXlRjKNRM0a99PL7JPec136lQVIPCEgYpIv0AjBs3pX%2B%2FX1SgpXruUu1enZc7Wa28%2BLovI7NuMdc%2BCIAREdz7KGpeN%2Bj4HTPKo13i6cSFM%2F5Kf4naRZM1I4eMTnfqMBTlvXt1jN2HCCBuipZCGoEfjAkLG9Om%2BRI2NorEthB6frySZgPMTfz76F%2BtinTw9qtpCvtXnlEJc%2BelCx2q1L4HcEG96T83UJ5buOASPN1XU%2FA2kl8wR%2B%2B2XG6CnXyjkG7ZDA64y2aLCSL8SqA0KqqGI6LZMTIPNTsRafiQXeCazgTusku7WDqtTj7vK65U33rDpwXXqBIrd%2F%2FE4CC5UZDOEW5BDXo35FxlUsX%2FURRT8XPt38alcX5%2FVstdvYsyr7Y%2BbE8XTK7u0v9Cak2zfINrPp%2BjDxbmlWwn3i7YRxoZOKD7llKJN32W2S9%2FCkhu2lPablEHb1t2q8cpsrABdmugHALtO6yoIey7iS8JJPonvC89ZcYIYHIkPOZCGGz%2FBLG1%2FkQlFpT2qHbn%2FEG14bWQugU7ZWSWb28p3Z3ZFPStp0oWrUTjj5g1pELnv2F2PtJml3mLQG%2BOQK5XDJ28wvY%2BDvQY6pgGUpQ3evY%2BGis8eRwe9q1QwQ3h5NvzP9BvuNwYdJdfjEG%2F6j0EGXJXIBwaNnkP1AZ4HYBNuUfIQJzL%2Bdq7SIHrW97uUH6ekkaTpQUq07pB7Vq9SwkciQI9FT0qjX9GF7i5QsaYNndoIA9EOc3BJeZ8M7u8DBbgmn4ejnWQJkVRJxB%2BW08cDEYjbA%2BZBbCUNBYOm%2FJtL7BhRIaQWKgE0vrKfnkTrpBEJ&X-Amz-Signature=f1e313cb3c7a330c15a98b4df85bf524656d609d3e63ec9bc125de28c93f2f50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7DFGVD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4%2FSzxZ%2BjQL1flXvsGjOQi5sNA9fM1OGFZ64u4%2BsuMjAiBaYkRcBD7WnBtIMkp%2B6hMgbvPCrWQjZdWnf%2FGZ7KrvSSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM7%2FOr9TvT0ZYUrlkNKtwDKo%2B2UNYt0K4G1%2FFvVYRRSx96PJSpgzaOoKJx4rym3%2FqXlRjKNRM0a99PL7JPec136lQVIPCEgYpIv0AjBs3pX%2B%2FX1SgpXruUu1enZc7Wa28%2BLovI7NuMdc%2BCIAREdz7KGpeN%2Bj4HTPKo13i6cSFM%2F5Kf4naRZM1I4eMTnfqMBTlvXt1jN2HCCBuipZCGoEfjAkLG9Om%2BRI2NorEthB6frySZgPMTfz76F%2BtinTw9qtpCvtXnlEJc%2BelCx2q1L4HcEG96T83UJ5buOASPN1XU%2FA2kl8wR%2B%2B2XG6CnXyjkG7ZDA64y2aLCSL8SqA0KqqGI6LZMTIPNTsRafiQXeCazgTusku7WDqtTj7vK65U33rDpwXXqBIrd%2F%2FE4CC5UZDOEW5BDXo35FxlUsX%2FURRT8XPt38alcX5%2FVstdvYsyr7Y%2BbE8XTK7u0v9Cak2zfINrPp%2BjDxbmlWwn3i7YRxoZOKD7llKJN32W2S9%2FCkhu2lPablEHb1t2q8cpsrABdmugHALtO6yoIey7iS8JJPonvC89ZcYIYHIkPOZCGGz%2FBLG1%2FkQlFpT2qHbn%2FEG14bWQugU7ZWSWb28p3Z3ZFPStp0oWrUTjj5g1pELnv2F2PtJml3mLQG%2BOQK5XDJ28wvY%2BDvQY6pgGUpQ3evY%2BGis8eRwe9q1QwQ3h5NvzP9BvuNwYdJdfjEG%2F6j0EGXJXIBwaNnkP1AZ4HYBNuUfIQJzL%2Bdq7SIHrW97uUH6ekkaTpQUq07pB7Vq9SwkciQI9FT0qjX9GF7i5QsaYNndoIA9EOc3BJeZ8M7u8DBbgmn4ejnWQJkVRJxB%2BW08cDEYjbA%2BZBbCUNBYOm%2FJtL7BhRIaQWKgE0vrKfnkTrpBEJ&X-Amz-Signature=fa4d3183723b56e93c3376251e147d01fe371a0c6bc9fc9371be3ea29e44c084&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
