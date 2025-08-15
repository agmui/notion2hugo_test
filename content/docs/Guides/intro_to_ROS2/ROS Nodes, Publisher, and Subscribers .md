---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXI3MJM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFjK93Dkp9GENp8kTVCflGsVviC9xHwq9REhQrx82%2FqOAiEAso3tFPPcckjLVIsdqAPmIAmrVPJs4M6aCDgtlxS2YZMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMQhMTcTy3KnFPbGtCrcA7TilLD%2B3lHwZQogfNP8wn%2F8E%2BJvgm1Rjp9v7hIuZG8VdazAAKi8C8J04ouoi2%2FVaF3JCInAQHswa7KyZEl4DGO6%2Ft1vy%2BqNW61mXrQ5nTuXkHkl1uCVQXLpEGrlOrUu4ski8bDq59urJYhnJEeq6hyIKePL47S87tzUd7YVxuN1iGtB7GHn7Bng%2F%2BCk7g2wPoVrEqQdxuVAdUakj3mkawLiprIOyF%2BstqzqHf01cJSvq%2BdDr6WUl4xgd%2B3Bz4dPM%2Bb4pP7AsH61RxTsWBcY1YljW9Y%2FVdKXaEehw9Cx04t5ljVIeFhz5O950Qp3lfuWjldtmJ5tY5BCjNlyhjRr%2BvziORJ9DbR9xBeqgaFkS9mirHVe6fj%2FJE6bqida0wrykAgdS45zKAC%2Bk%2BrLA%2FbsObrQfVHfAMtAMQ%2FiZD%2BIyuQufp14SD6aMBL5MCmSwEA7uOYT80s5SegvGLZyeloe3yXXJlRe7MLPpZ9arGt%2BW9QzZ7qn58ewtNNuoDqn4d1nV4FGgtAJ9hiDun1Ko8wwnm%2B9h9a%2Bh2LCul0%2FMa78tf0xU%2FCrPSvHWYGH%2BYobZM%2F3X5WwYHUNgSh3ueVSLPS%2B0gGoQjmN0mEMLkLeNQuWJqpM3GEoOk6KktFl90f1MM20%2FcQGOqUBII73SS51042Ht2HwwEhnujszgH0srVFuIjT%2Fp4E5WzeZnmBmGfEMGRzkz3KTWXSm0HC%2Fl3diZYJYGn%2Bs%2FRW7c6af1J%2FRvPJ6oRajkxDmMFtVu7MaWIjRmXQB%2Bx7xCpJOzJ%2FPmAm7txP0noOlMj62VMS%2BlFALIzfBJ7O99JneMAtS8rRbJKG3YP1yL5cy3QoFj%2BMZDiZM5iI6mfZxTWYSOiEZUUVA&X-Amz-Signature=9be2afced95292989f023fbc9f4f08ef017a362e14afeb4d3948e1561cd20599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXI3MJM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFjK93Dkp9GENp8kTVCflGsVviC9xHwq9REhQrx82%2FqOAiEAso3tFPPcckjLVIsdqAPmIAmrVPJs4M6aCDgtlxS2YZMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMQhMTcTy3KnFPbGtCrcA7TilLD%2B3lHwZQogfNP8wn%2F8E%2BJvgm1Rjp9v7hIuZG8VdazAAKi8C8J04ouoi2%2FVaF3JCInAQHswa7KyZEl4DGO6%2Ft1vy%2BqNW61mXrQ5nTuXkHkl1uCVQXLpEGrlOrUu4ski8bDq59urJYhnJEeq6hyIKePL47S87tzUd7YVxuN1iGtB7GHn7Bng%2F%2BCk7g2wPoVrEqQdxuVAdUakj3mkawLiprIOyF%2BstqzqHf01cJSvq%2BdDr6WUl4xgd%2B3Bz4dPM%2Bb4pP7AsH61RxTsWBcY1YljW9Y%2FVdKXaEehw9Cx04t5ljVIeFhz5O950Qp3lfuWjldtmJ5tY5BCjNlyhjRr%2BvziORJ9DbR9xBeqgaFkS9mirHVe6fj%2FJE6bqida0wrykAgdS45zKAC%2Bk%2BrLA%2FbsObrQfVHfAMtAMQ%2FiZD%2BIyuQufp14SD6aMBL5MCmSwEA7uOYT80s5SegvGLZyeloe3yXXJlRe7MLPpZ9arGt%2BW9QzZ7qn58ewtNNuoDqn4d1nV4FGgtAJ9hiDun1Ko8wwnm%2B9h9a%2Bh2LCul0%2FMa78tf0xU%2FCrPSvHWYGH%2BYobZM%2F3X5WwYHUNgSh3ueVSLPS%2B0gGoQjmN0mEMLkLeNQuWJqpM3GEoOk6KktFl90f1MM20%2FcQGOqUBII73SS51042Ht2HwwEhnujszgH0srVFuIjT%2Fp4E5WzeZnmBmGfEMGRzkz3KTWXSm0HC%2Fl3diZYJYGn%2Bs%2FRW7c6af1J%2FRvPJ6oRajkxDmMFtVu7MaWIjRmXQB%2Bx7xCpJOzJ%2FPmAm7txP0noOlMj62VMS%2BlFALIzfBJ7O99JneMAtS8rRbJKG3YP1yL5cy3QoFj%2BMZDiZM5iI6mfZxTWYSOiEZUUVA&X-Amz-Signature=8c27fbe7a74a8eafa2c9674f16290c266485f91902f475e47df02eb79407c809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXI3MJM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFjK93Dkp9GENp8kTVCflGsVviC9xHwq9REhQrx82%2FqOAiEAso3tFPPcckjLVIsdqAPmIAmrVPJs4M6aCDgtlxS2YZMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMQhMTcTy3KnFPbGtCrcA7TilLD%2B3lHwZQogfNP8wn%2F8E%2BJvgm1Rjp9v7hIuZG8VdazAAKi8C8J04ouoi2%2FVaF3JCInAQHswa7KyZEl4DGO6%2Ft1vy%2BqNW61mXrQ5nTuXkHkl1uCVQXLpEGrlOrUu4ski8bDq59urJYhnJEeq6hyIKePL47S87tzUd7YVxuN1iGtB7GHn7Bng%2F%2BCk7g2wPoVrEqQdxuVAdUakj3mkawLiprIOyF%2BstqzqHf01cJSvq%2BdDr6WUl4xgd%2B3Bz4dPM%2Bb4pP7AsH61RxTsWBcY1YljW9Y%2FVdKXaEehw9Cx04t5ljVIeFhz5O950Qp3lfuWjldtmJ5tY5BCjNlyhjRr%2BvziORJ9DbR9xBeqgaFkS9mirHVe6fj%2FJE6bqida0wrykAgdS45zKAC%2Bk%2BrLA%2FbsObrQfVHfAMtAMQ%2FiZD%2BIyuQufp14SD6aMBL5MCmSwEA7uOYT80s5SegvGLZyeloe3yXXJlRe7MLPpZ9arGt%2BW9QzZ7qn58ewtNNuoDqn4d1nV4FGgtAJ9hiDun1Ko8wwnm%2B9h9a%2Bh2LCul0%2FMa78tf0xU%2FCrPSvHWYGH%2BYobZM%2F3X5WwYHUNgSh3ueVSLPS%2B0gGoQjmN0mEMLkLeNQuWJqpM3GEoOk6KktFl90f1MM20%2FcQGOqUBII73SS51042Ht2HwwEhnujszgH0srVFuIjT%2Fp4E5WzeZnmBmGfEMGRzkz3KTWXSm0HC%2Fl3diZYJYGn%2Bs%2FRW7c6af1J%2FRvPJ6oRajkxDmMFtVu7MaWIjRmXQB%2Bx7xCpJOzJ%2FPmAm7txP0noOlMj62VMS%2BlFALIzfBJ7O99JneMAtS8rRbJKG3YP1yL5cy3QoFj%2BMZDiZM5iI6mfZxTWYSOiEZUUVA&X-Amz-Signature=d69109b58618a96454dd58e65e8922ac49977ccb5e51fbb94697d3b8181f417f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXI3MJM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFjK93Dkp9GENp8kTVCflGsVviC9xHwq9REhQrx82%2FqOAiEAso3tFPPcckjLVIsdqAPmIAmrVPJs4M6aCDgtlxS2YZMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMQhMTcTy3KnFPbGtCrcA7TilLD%2B3lHwZQogfNP8wn%2F8E%2BJvgm1Rjp9v7hIuZG8VdazAAKi8C8J04ouoi2%2FVaF3JCInAQHswa7KyZEl4DGO6%2Ft1vy%2BqNW61mXrQ5nTuXkHkl1uCVQXLpEGrlOrUu4ski8bDq59urJYhnJEeq6hyIKePL47S87tzUd7YVxuN1iGtB7GHn7Bng%2F%2BCk7g2wPoVrEqQdxuVAdUakj3mkawLiprIOyF%2BstqzqHf01cJSvq%2BdDr6WUl4xgd%2B3Bz4dPM%2Bb4pP7AsH61RxTsWBcY1YljW9Y%2FVdKXaEehw9Cx04t5ljVIeFhz5O950Qp3lfuWjldtmJ5tY5BCjNlyhjRr%2BvziORJ9DbR9xBeqgaFkS9mirHVe6fj%2FJE6bqida0wrykAgdS45zKAC%2Bk%2BrLA%2FbsObrQfVHfAMtAMQ%2FiZD%2BIyuQufp14SD6aMBL5MCmSwEA7uOYT80s5SegvGLZyeloe3yXXJlRe7MLPpZ9arGt%2BW9QzZ7qn58ewtNNuoDqn4d1nV4FGgtAJ9hiDun1Ko8wwnm%2B9h9a%2Bh2LCul0%2FMa78tf0xU%2FCrPSvHWYGH%2BYobZM%2F3X5WwYHUNgSh3ueVSLPS%2B0gGoQjmN0mEMLkLeNQuWJqpM3GEoOk6KktFl90f1MM20%2FcQGOqUBII73SS51042Ht2HwwEhnujszgH0srVFuIjT%2Fp4E5WzeZnmBmGfEMGRzkz3KTWXSm0HC%2Fl3diZYJYGn%2Bs%2FRW7c6af1J%2FRvPJ6oRajkxDmMFtVu7MaWIjRmXQB%2Bx7xCpJOzJ%2FPmAm7txP0noOlMj62VMS%2BlFALIzfBJ7O99JneMAtS8rRbJKG3YP1yL5cy3QoFj%2BMZDiZM5iI6mfZxTWYSOiEZUUVA&X-Amz-Signature=fba908f8bdb8486d6554fab4c134bf689de9c4b80f08c218357367e23754aaf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXI3MJM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFjK93Dkp9GENp8kTVCflGsVviC9xHwq9REhQrx82%2FqOAiEAso3tFPPcckjLVIsdqAPmIAmrVPJs4M6aCDgtlxS2YZMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMQhMTcTy3KnFPbGtCrcA7TilLD%2B3lHwZQogfNP8wn%2F8E%2BJvgm1Rjp9v7hIuZG8VdazAAKi8C8J04ouoi2%2FVaF3JCInAQHswa7KyZEl4DGO6%2Ft1vy%2BqNW61mXrQ5nTuXkHkl1uCVQXLpEGrlOrUu4ski8bDq59urJYhnJEeq6hyIKePL47S87tzUd7YVxuN1iGtB7GHn7Bng%2F%2BCk7g2wPoVrEqQdxuVAdUakj3mkawLiprIOyF%2BstqzqHf01cJSvq%2BdDr6WUl4xgd%2B3Bz4dPM%2Bb4pP7AsH61RxTsWBcY1YljW9Y%2FVdKXaEehw9Cx04t5ljVIeFhz5O950Qp3lfuWjldtmJ5tY5BCjNlyhjRr%2BvziORJ9DbR9xBeqgaFkS9mirHVe6fj%2FJE6bqida0wrykAgdS45zKAC%2Bk%2BrLA%2FbsObrQfVHfAMtAMQ%2FiZD%2BIyuQufp14SD6aMBL5MCmSwEA7uOYT80s5SegvGLZyeloe3yXXJlRe7MLPpZ9arGt%2BW9QzZ7qn58ewtNNuoDqn4d1nV4FGgtAJ9hiDun1Ko8wwnm%2B9h9a%2Bh2LCul0%2FMa78tf0xU%2FCrPSvHWYGH%2BYobZM%2F3X5WwYHUNgSh3ueVSLPS%2B0gGoQjmN0mEMLkLeNQuWJqpM3GEoOk6KktFl90f1MM20%2FcQGOqUBII73SS51042Ht2HwwEhnujszgH0srVFuIjT%2Fp4E5WzeZnmBmGfEMGRzkz3KTWXSm0HC%2Fl3diZYJYGn%2Bs%2FRW7c6af1J%2FRvPJ6oRajkxDmMFtVu7MaWIjRmXQB%2Bx7xCpJOzJ%2FPmAm7txP0noOlMj62VMS%2BlFALIzfBJ7O99JneMAtS8rRbJKG3YP1yL5cy3QoFj%2BMZDiZM5iI6mfZxTWYSOiEZUUVA&X-Amz-Signature=c04eb4da956ccfcbe8e8fc56a4f18968de02e87a6807d7c7264a90a6797094f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXI3MJM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFjK93Dkp9GENp8kTVCflGsVviC9xHwq9REhQrx82%2FqOAiEAso3tFPPcckjLVIsdqAPmIAmrVPJs4M6aCDgtlxS2YZMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMQhMTcTy3KnFPbGtCrcA7TilLD%2B3lHwZQogfNP8wn%2F8E%2BJvgm1Rjp9v7hIuZG8VdazAAKi8C8J04ouoi2%2FVaF3JCInAQHswa7KyZEl4DGO6%2Ft1vy%2BqNW61mXrQ5nTuXkHkl1uCVQXLpEGrlOrUu4ski8bDq59urJYhnJEeq6hyIKePL47S87tzUd7YVxuN1iGtB7GHn7Bng%2F%2BCk7g2wPoVrEqQdxuVAdUakj3mkawLiprIOyF%2BstqzqHf01cJSvq%2BdDr6WUl4xgd%2B3Bz4dPM%2Bb4pP7AsH61RxTsWBcY1YljW9Y%2FVdKXaEehw9Cx04t5ljVIeFhz5O950Qp3lfuWjldtmJ5tY5BCjNlyhjRr%2BvziORJ9DbR9xBeqgaFkS9mirHVe6fj%2FJE6bqida0wrykAgdS45zKAC%2Bk%2BrLA%2FbsObrQfVHfAMtAMQ%2FiZD%2BIyuQufp14SD6aMBL5MCmSwEA7uOYT80s5SegvGLZyeloe3yXXJlRe7MLPpZ9arGt%2BW9QzZ7qn58ewtNNuoDqn4d1nV4FGgtAJ9hiDun1Ko8wwnm%2B9h9a%2Bh2LCul0%2FMa78tf0xU%2FCrPSvHWYGH%2BYobZM%2F3X5WwYHUNgSh3ueVSLPS%2B0gGoQjmN0mEMLkLeNQuWJqpM3GEoOk6KktFl90f1MM20%2FcQGOqUBII73SS51042Ht2HwwEhnujszgH0srVFuIjT%2Fp4E5WzeZnmBmGfEMGRzkz3KTWXSm0HC%2Fl3diZYJYGn%2Bs%2FRW7c6af1J%2FRvPJ6oRajkxDmMFtVu7MaWIjRmXQB%2Bx7xCpJOzJ%2FPmAm7txP0noOlMj62VMS%2BlFALIzfBJ7O99JneMAtS8rRbJKG3YP1yL5cy3QoFj%2BMZDiZM5iI6mfZxTWYSOiEZUUVA&X-Amz-Signature=b9974ea50bb749b07756dc77d7275f62695e337c5ce04efced62e40e91862e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXI3MJM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFjK93Dkp9GENp8kTVCflGsVviC9xHwq9REhQrx82%2FqOAiEAso3tFPPcckjLVIsdqAPmIAmrVPJs4M6aCDgtlxS2YZMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMQhMTcTy3KnFPbGtCrcA7TilLD%2B3lHwZQogfNP8wn%2F8E%2BJvgm1Rjp9v7hIuZG8VdazAAKi8C8J04ouoi2%2FVaF3JCInAQHswa7KyZEl4DGO6%2Ft1vy%2BqNW61mXrQ5nTuXkHkl1uCVQXLpEGrlOrUu4ski8bDq59urJYhnJEeq6hyIKePL47S87tzUd7YVxuN1iGtB7GHn7Bng%2F%2BCk7g2wPoVrEqQdxuVAdUakj3mkawLiprIOyF%2BstqzqHf01cJSvq%2BdDr6WUl4xgd%2B3Bz4dPM%2Bb4pP7AsH61RxTsWBcY1YljW9Y%2FVdKXaEehw9Cx04t5ljVIeFhz5O950Qp3lfuWjldtmJ5tY5BCjNlyhjRr%2BvziORJ9DbR9xBeqgaFkS9mirHVe6fj%2FJE6bqida0wrykAgdS45zKAC%2Bk%2BrLA%2FbsObrQfVHfAMtAMQ%2FiZD%2BIyuQufp14SD6aMBL5MCmSwEA7uOYT80s5SegvGLZyeloe3yXXJlRe7MLPpZ9arGt%2BW9QzZ7qn58ewtNNuoDqn4d1nV4FGgtAJ9hiDun1Ko8wwnm%2B9h9a%2Bh2LCul0%2FMa78tf0xU%2FCrPSvHWYGH%2BYobZM%2F3X5WwYHUNgSh3ueVSLPS%2B0gGoQjmN0mEMLkLeNQuWJqpM3GEoOk6KktFl90f1MM20%2FcQGOqUBII73SS51042Ht2HwwEhnujszgH0srVFuIjT%2Fp4E5WzeZnmBmGfEMGRzkz3KTWXSm0HC%2Fl3diZYJYGn%2Bs%2FRW7c6af1J%2FRvPJ6oRajkxDmMFtVu7MaWIjRmXQB%2Bx7xCpJOzJ%2FPmAm7txP0noOlMj62VMS%2BlFALIzfBJ7O99JneMAtS8rRbJKG3YP1yL5cy3QoFj%2BMZDiZM5iI6mfZxTWYSOiEZUUVA&X-Amz-Signature=3985427d3f2e57ccd64f482e18a43c67a353e10e2edda93bc5f2a21e4ff4c0ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXI3MJM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFjK93Dkp9GENp8kTVCflGsVviC9xHwq9REhQrx82%2FqOAiEAso3tFPPcckjLVIsdqAPmIAmrVPJs4M6aCDgtlxS2YZMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMQhMTcTy3KnFPbGtCrcA7TilLD%2B3lHwZQogfNP8wn%2F8E%2BJvgm1Rjp9v7hIuZG8VdazAAKi8C8J04ouoi2%2FVaF3JCInAQHswa7KyZEl4DGO6%2Ft1vy%2BqNW61mXrQ5nTuXkHkl1uCVQXLpEGrlOrUu4ski8bDq59urJYhnJEeq6hyIKePL47S87tzUd7YVxuN1iGtB7GHn7Bng%2F%2BCk7g2wPoVrEqQdxuVAdUakj3mkawLiprIOyF%2BstqzqHf01cJSvq%2BdDr6WUl4xgd%2B3Bz4dPM%2Bb4pP7AsH61RxTsWBcY1YljW9Y%2FVdKXaEehw9Cx04t5ljVIeFhz5O950Qp3lfuWjldtmJ5tY5BCjNlyhjRr%2BvziORJ9DbR9xBeqgaFkS9mirHVe6fj%2FJE6bqida0wrykAgdS45zKAC%2Bk%2BrLA%2FbsObrQfVHfAMtAMQ%2FiZD%2BIyuQufp14SD6aMBL5MCmSwEA7uOYT80s5SegvGLZyeloe3yXXJlRe7MLPpZ9arGt%2BW9QzZ7qn58ewtNNuoDqn4d1nV4FGgtAJ9hiDun1Ko8wwnm%2B9h9a%2Bh2LCul0%2FMa78tf0xU%2FCrPSvHWYGH%2BYobZM%2F3X5WwYHUNgSh3ueVSLPS%2B0gGoQjmN0mEMLkLeNQuWJqpM3GEoOk6KktFl90f1MM20%2FcQGOqUBII73SS51042Ht2HwwEhnujszgH0srVFuIjT%2Fp4E5WzeZnmBmGfEMGRzkz3KTWXSm0HC%2Fl3diZYJYGn%2Bs%2FRW7c6af1J%2FRvPJ6oRajkxDmMFtVu7MaWIjRmXQB%2Bx7xCpJOzJ%2FPmAm7txP0noOlMj62VMS%2BlFALIzfBJ7O99JneMAtS8rRbJKG3YP1yL5cy3QoFj%2BMZDiZM5iI6mfZxTWYSOiEZUUVA&X-Amz-Signature=fca5a66772b3a18706565c6fc44affcc3e853d8dc8854a00fa3eb25aa425bbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
