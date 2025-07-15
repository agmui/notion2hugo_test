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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQXZRQ6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzflExfFuLpmHTBzniEzq6dhHo5L2Dw9TrfG9JneV5ggIgfoAKc%2FNmTIcZBHOE3hhsfl8b0CdAIg74hayLWMIlyKwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJveTL2H9TTD%2FVyooircA8x2gPTkdzJ09zmfVrEmNQ6VTI8lVC9%2F14oxOKKt7oJMTt%2B0tsk5pcEQs0VUQhvZu8EwuPpdOype60kfUGs%2FI8237d6aLjwojCXAeAVZ3AEwJPhQTag12eW5e85suHk8TKrkV7LW5Qkwif4THfK2uZ5x1NB3PhrgUt%2Blm9O26m1hbVrNEs8YdOif8W%2B7K2t4F5qGjzKerZA13SjkX4jUQZpuurmBClvbIjFBKV9IsDyR8V1MouHQYa40ld%2FFO6exolVPSUwV10hp5iWT85X2XvGqHkncq83NJvzYktj0x2B2fPi66ytmMZ%2FAnfWY%2BeLTPxazAQdQq8Y5o9zZzxS5adiMB6gfe8Vxe4xloYunMZE%2F%2FpNLm%2BTi03nhTy2VaqWsmeZ6EAJJHjy9TGUl75gqlOuqK9BnDY1gt8rgVxOuHio1SWyYb9KmewPeqb5j7IdKXYRgygAk3T%2B5WtTHVZo%2BYCwK%2Byrw7mi3jW%2BkegOLbR9YMlTZcddiXul4pnLEDxuZ3iNEp681fiPmASmRs3KHzW8DRy6z0xcWwwKF690HOIVs8GjGamiFwStQX2FrD3pX1wgu3%2FcM7DMHABVexV66%2Bj%2FCG0yFrPWechriMZnYoonX1SrCxOiOAsOEF4FYMP%2BF2sMGOqUBga4lehBezTCUJibJpZyg9lym4qkalwwWONIYq79BvbNxIPG6F1C3UtbB%2BCKY2%2FrvmIjhXlnITm5JNjOoDs00ZJAR4neFvwmAh84sklGgXlp2n6gTLWbKTMzt%2FausGShaI9dYVhBQ52huzygGHhARucew2z%2Bqa3Y6P7chFKiEEpzALcJEO3ghFYTBvqfMhs8m9gBkY%2B031uLD8HQOAIkJb057cGGh&X-Amz-Signature=7796a6432587e0e08b6f4c3d5d0a8b805107bcff3bd88c0df7979be7c10187f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQXZRQ6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzflExfFuLpmHTBzniEzq6dhHo5L2Dw9TrfG9JneV5ggIgfoAKc%2FNmTIcZBHOE3hhsfl8b0CdAIg74hayLWMIlyKwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJveTL2H9TTD%2FVyooircA8x2gPTkdzJ09zmfVrEmNQ6VTI8lVC9%2F14oxOKKt7oJMTt%2B0tsk5pcEQs0VUQhvZu8EwuPpdOype60kfUGs%2FI8237d6aLjwojCXAeAVZ3AEwJPhQTag12eW5e85suHk8TKrkV7LW5Qkwif4THfK2uZ5x1NB3PhrgUt%2Blm9O26m1hbVrNEs8YdOif8W%2B7K2t4F5qGjzKerZA13SjkX4jUQZpuurmBClvbIjFBKV9IsDyR8V1MouHQYa40ld%2FFO6exolVPSUwV10hp5iWT85X2XvGqHkncq83NJvzYktj0x2B2fPi66ytmMZ%2FAnfWY%2BeLTPxazAQdQq8Y5o9zZzxS5adiMB6gfe8Vxe4xloYunMZE%2F%2FpNLm%2BTi03nhTy2VaqWsmeZ6EAJJHjy9TGUl75gqlOuqK9BnDY1gt8rgVxOuHio1SWyYb9KmewPeqb5j7IdKXYRgygAk3T%2B5WtTHVZo%2BYCwK%2Byrw7mi3jW%2BkegOLbR9YMlTZcddiXul4pnLEDxuZ3iNEp681fiPmASmRs3KHzW8DRy6z0xcWwwKF690HOIVs8GjGamiFwStQX2FrD3pX1wgu3%2FcM7DMHABVexV66%2Bj%2FCG0yFrPWechriMZnYoonX1SrCxOiOAsOEF4FYMP%2BF2sMGOqUBga4lehBezTCUJibJpZyg9lym4qkalwwWONIYq79BvbNxIPG6F1C3UtbB%2BCKY2%2FrvmIjhXlnITm5JNjOoDs00ZJAR4neFvwmAh84sklGgXlp2n6gTLWbKTMzt%2FausGShaI9dYVhBQ52huzygGHhARucew2z%2Bqa3Y6P7chFKiEEpzALcJEO3ghFYTBvqfMhs8m9gBkY%2B031uLD8HQOAIkJb057cGGh&X-Amz-Signature=55efd24f4f79017d6361ba049bf628f794d261624ebd8735b7fa27b1cac56cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQXZRQ6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzflExfFuLpmHTBzniEzq6dhHo5L2Dw9TrfG9JneV5ggIgfoAKc%2FNmTIcZBHOE3hhsfl8b0CdAIg74hayLWMIlyKwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJveTL2H9TTD%2FVyooircA8x2gPTkdzJ09zmfVrEmNQ6VTI8lVC9%2F14oxOKKt7oJMTt%2B0tsk5pcEQs0VUQhvZu8EwuPpdOype60kfUGs%2FI8237d6aLjwojCXAeAVZ3AEwJPhQTag12eW5e85suHk8TKrkV7LW5Qkwif4THfK2uZ5x1NB3PhrgUt%2Blm9O26m1hbVrNEs8YdOif8W%2B7K2t4F5qGjzKerZA13SjkX4jUQZpuurmBClvbIjFBKV9IsDyR8V1MouHQYa40ld%2FFO6exolVPSUwV10hp5iWT85X2XvGqHkncq83NJvzYktj0x2B2fPi66ytmMZ%2FAnfWY%2BeLTPxazAQdQq8Y5o9zZzxS5adiMB6gfe8Vxe4xloYunMZE%2F%2FpNLm%2BTi03nhTy2VaqWsmeZ6EAJJHjy9TGUl75gqlOuqK9BnDY1gt8rgVxOuHio1SWyYb9KmewPeqb5j7IdKXYRgygAk3T%2B5WtTHVZo%2BYCwK%2Byrw7mi3jW%2BkegOLbR9YMlTZcddiXul4pnLEDxuZ3iNEp681fiPmASmRs3KHzW8DRy6z0xcWwwKF690HOIVs8GjGamiFwStQX2FrD3pX1wgu3%2FcM7DMHABVexV66%2Bj%2FCG0yFrPWechriMZnYoonX1SrCxOiOAsOEF4FYMP%2BF2sMGOqUBga4lehBezTCUJibJpZyg9lym4qkalwwWONIYq79BvbNxIPG6F1C3UtbB%2BCKY2%2FrvmIjhXlnITm5JNjOoDs00ZJAR4neFvwmAh84sklGgXlp2n6gTLWbKTMzt%2FausGShaI9dYVhBQ52huzygGHhARucew2z%2Bqa3Y6P7chFKiEEpzALcJEO3ghFYTBvqfMhs8m9gBkY%2B031uLD8HQOAIkJb057cGGh&X-Amz-Signature=41e8b1338997584946e926ef8659fc59a6599d8be0de778471f23c4f9afd5228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQXZRQ6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzflExfFuLpmHTBzniEzq6dhHo5L2Dw9TrfG9JneV5ggIgfoAKc%2FNmTIcZBHOE3hhsfl8b0CdAIg74hayLWMIlyKwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJveTL2H9TTD%2FVyooircA8x2gPTkdzJ09zmfVrEmNQ6VTI8lVC9%2F14oxOKKt7oJMTt%2B0tsk5pcEQs0VUQhvZu8EwuPpdOype60kfUGs%2FI8237d6aLjwojCXAeAVZ3AEwJPhQTag12eW5e85suHk8TKrkV7LW5Qkwif4THfK2uZ5x1NB3PhrgUt%2Blm9O26m1hbVrNEs8YdOif8W%2B7K2t4F5qGjzKerZA13SjkX4jUQZpuurmBClvbIjFBKV9IsDyR8V1MouHQYa40ld%2FFO6exolVPSUwV10hp5iWT85X2XvGqHkncq83NJvzYktj0x2B2fPi66ytmMZ%2FAnfWY%2BeLTPxazAQdQq8Y5o9zZzxS5adiMB6gfe8Vxe4xloYunMZE%2F%2FpNLm%2BTi03nhTy2VaqWsmeZ6EAJJHjy9TGUl75gqlOuqK9BnDY1gt8rgVxOuHio1SWyYb9KmewPeqb5j7IdKXYRgygAk3T%2B5WtTHVZo%2BYCwK%2Byrw7mi3jW%2BkegOLbR9YMlTZcddiXul4pnLEDxuZ3iNEp681fiPmASmRs3KHzW8DRy6z0xcWwwKF690HOIVs8GjGamiFwStQX2FrD3pX1wgu3%2FcM7DMHABVexV66%2Bj%2FCG0yFrPWechriMZnYoonX1SrCxOiOAsOEF4FYMP%2BF2sMGOqUBga4lehBezTCUJibJpZyg9lym4qkalwwWONIYq79BvbNxIPG6F1C3UtbB%2BCKY2%2FrvmIjhXlnITm5JNjOoDs00ZJAR4neFvwmAh84sklGgXlp2n6gTLWbKTMzt%2FausGShaI9dYVhBQ52huzygGHhARucew2z%2Bqa3Y6P7chFKiEEpzALcJEO3ghFYTBvqfMhs8m9gBkY%2B031uLD8HQOAIkJb057cGGh&X-Amz-Signature=10ae67151184ecb8e8e8331b681acbdff27980d519645f5619bdb7cab3882261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQXZRQ6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzflExfFuLpmHTBzniEzq6dhHo5L2Dw9TrfG9JneV5ggIgfoAKc%2FNmTIcZBHOE3hhsfl8b0CdAIg74hayLWMIlyKwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJveTL2H9TTD%2FVyooircA8x2gPTkdzJ09zmfVrEmNQ6VTI8lVC9%2F14oxOKKt7oJMTt%2B0tsk5pcEQs0VUQhvZu8EwuPpdOype60kfUGs%2FI8237d6aLjwojCXAeAVZ3AEwJPhQTag12eW5e85suHk8TKrkV7LW5Qkwif4THfK2uZ5x1NB3PhrgUt%2Blm9O26m1hbVrNEs8YdOif8W%2B7K2t4F5qGjzKerZA13SjkX4jUQZpuurmBClvbIjFBKV9IsDyR8V1MouHQYa40ld%2FFO6exolVPSUwV10hp5iWT85X2XvGqHkncq83NJvzYktj0x2B2fPi66ytmMZ%2FAnfWY%2BeLTPxazAQdQq8Y5o9zZzxS5adiMB6gfe8Vxe4xloYunMZE%2F%2FpNLm%2BTi03nhTy2VaqWsmeZ6EAJJHjy9TGUl75gqlOuqK9BnDY1gt8rgVxOuHio1SWyYb9KmewPeqb5j7IdKXYRgygAk3T%2B5WtTHVZo%2BYCwK%2Byrw7mi3jW%2BkegOLbR9YMlTZcddiXul4pnLEDxuZ3iNEp681fiPmASmRs3KHzW8DRy6z0xcWwwKF690HOIVs8GjGamiFwStQX2FrD3pX1wgu3%2FcM7DMHABVexV66%2Bj%2FCG0yFrPWechriMZnYoonX1SrCxOiOAsOEF4FYMP%2BF2sMGOqUBga4lehBezTCUJibJpZyg9lym4qkalwwWONIYq79BvbNxIPG6F1C3UtbB%2BCKY2%2FrvmIjhXlnITm5JNjOoDs00ZJAR4neFvwmAh84sklGgXlp2n6gTLWbKTMzt%2FausGShaI9dYVhBQ52huzygGHhARucew2z%2Bqa3Y6P7chFKiEEpzALcJEO3ghFYTBvqfMhs8m9gBkY%2B031uLD8HQOAIkJb057cGGh&X-Amz-Signature=ccc32c791eb6e412671cd89fba38277fb2e24ed129898cd78b3e891ca4ebbec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQXZRQ6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzflExfFuLpmHTBzniEzq6dhHo5L2Dw9TrfG9JneV5ggIgfoAKc%2FNmTIcZBHOE3hhsfl8b0CdAIg74hayLWMIlyKwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJveTL2H9TTD%2FVyooircA8x2gPTkdzJ09zmfVrEmNQ6VTI8lVC9%2F14oxOKKt7oJMTt%2B0tsk5pcEQs0VUQhvZu8EwuPpdOype60kfUGs%2FI8237d6aLjwojCXAeAVZ3AEwJPhQTag12eW5e85suHk8TKrkV7LW5Qkwif4THfK2uZ5x1NB3PhrgUt%2Blm9O26m1hbVrNEs8YdOif8W%2B7K2t4F5qGjzKerZA13SjkX4jUQZpuurmBClvbIjFBKV9IsDyR8V1MouHQYa40ld%2FFO6exolVPSUwV10hp5iWT85X2XvGqHkncq83NJvzYktj0x2B2fPi66ytmMZ%2FAnfWY%2BeLTPxazAQdQq8Y5o9zZzxS5adiMB6gfe8Vxe4xloYunMZE%2F%2FpNLm%2BTi03nhTy2VaqWsmeZ6EAJJHjy9TGUl75gqlOuqK9BnDY1gt8rgVxOuHio1SWyYb9KmewPeqb5j7IdKXYRgygAk3T%2B5WtTHVZo%2BYCwK%2Byrw7mi3jW%2BkegOLbR9YMlTZcddiXul4pnLEDxuZ3iNEp681fiPmASmRs3KHzW8DRy6z0xcWwwKF690HOIVs8GjGamiFwStQX2FrD3pX1wgu3%2FcM7DMHABVexV66%2Bj%2FCG0yFrPWechriMZnYoonX1SrCxOiOAsOEF4FYMP%2BF2sMGOqUBga4lehBezTCUJibJpZyg9lym4qkalwwWONIYq79BvbNxIPG6F1C3UtbB%2BCKY2%2FrvmIjhXlnITm5JNjOoDs00ZJAR4neFvwmAh84sklGgXlp2n6gTLWbKTMzt%2FausGShaI9dYVhBQ52huzygGHhARucew2z%2Bqa3Y6P7chFKiEEpzALcJEO3ghFYTBvqfMhs8m9gBkY%2B031uLD8HQOAIkJb057cGGh&X-Amz-Signature=8544d5c4577917810210fcc13a8ae2335e9a615e42092100291ad8a4dc48e4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQXZRQ6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzflExfFuLpmHTBzniEzq6dhHo5L2Dw9TrfG9JneV5ggIgfoAKc%2FNmTIcZBHOE3hhsfl8b0CdAIg74hayLWMIlyKwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJveTL2H9TTD%2FVyooircA8x2gPTkdzJ09zmfVrEmNQ6VTI8lVC9%2F14oxOKKt7oJMTt%2B0tsk5pcEQs0VUQhvZu8EwuPpdOype60kfUGs%2FI8237d6aLjwojCXAeAVZ3AEwJPhQTag12eW5e85suHk8TKrkV7LW5Qkwif4THfK2uZ5x1NB3PhrgUt%2Blm9O26m1hbVrNEs8YdOif8W%2B7K2t4F5qGjzKerZA13SjkX4jUQZpuurmBClvbIjFBKV9IsDyR8V1MouHQYa40ld%2FFO6exolVPSUwV10hp5iWT85X2XvGqHkncq83NJvzYktj0x2B2fPi66ytmMZ%2FAnfWY%2BeLTPxazAQdQq8Y5o9zZzxS5adiMB6gfe8Vxe4xloYunMZE%2F%2FpNLm%2BTi03nhTy2VaqWsmeZ6EAJJHjy9TGUl75gqlOuqK9BnDY1gt8rgVxOuHio1SWyYb9KmewPeqb5j7IdKXYRgygAk3T%2B5WtTHVZo%2BYCwK%2Byrw7mi3jW%2BkegOLbR9YMlTZcddiXul4pnLEDxuZ3iNEp681fiPmASmRs3KHzW8DRy6z0xcWwwKF690HOIVs8GjGamiFwStQX2FrD3pX1wgu3%2FcM7DMHABVexV66%2Bj%2FCG0yFrPWechriMZnYoonX1SrCxOiOAsOEF4FYMP%2BF2sMGOqUBga4lehBezTCUJibJpZyg9lym4qkalwwWONIYq79BvbNxIPG6F1C3UtbB%2BCKY2%2FrvmIjhXlnITm5JNjOoDs00ZJAR4neFvwmAh84sklGgXlp2n6gTLWbKTMzt%2FausGShaI9dYVhBQ52huzygGHhARucew2z%2Bqa3Y6P7chFKiEEpzALcJEO3ghFYTBvqfMhs8m9gBkY%2B031uLD8HQOAIkJb057cGGh&X-Amz-Signature=7243eb3ad738e21bb8e559702632544d9c501d851e9afb1cf8fd618630225f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQXZRQ6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCzflExfFuLpmHTBzniEzq6dhHo5L2Dw9TrfG9JneV5ggIgfoAKc%2FNmTIcZBHOE3hhsfl8b0CdAIg74hayLWMIlyKwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJveTL2H9TTD%2FVyooircA8x2gPTkdzJ09zmfVrEmNQ6VTI8lVC9%2F14oxOKKt7oJMTt%2B0tsk5pcEQs0VUQhvZu8EwuPpdOype60kfUGs%2FI8237d6aLjwojCXAeAVZ3AEwJPhQTag12eW5e85suHk8TKrkV7LW5Qkwif4THfK2uZ5x1NB3PhrgUt%2Blm9O26m1hbVrNEs8YdOif8W%2B7K2t4F5qGjzKerZA13SjkX4jUQZpuurmBClvbIjFBKV9IsDyR8V1MouHQYa40ld%2FFO6exolVPSUwV10hp5iWT85X2XvGqHkncq83NJvzYktj0x2B2fPi66ytmMZ%2FAnfWY%2BeLTPxazAQdQq8Y5o9zZzxS5adiMB6gfe8Vxe4xloYunMZE%2F%2FpNLm%2BTi03nhTy2VaqWsmeZ6EAJJHjy9TGUl75gqlOuqK9BnDY1gt8rgVxOuHio1SWyYb9KmewPeqb5j7IdKXYRgygAk3T%2B5WtTHVZo%2BYCwK%2Byrw7mi3jW%2BkegOLbR9YMlTZcddiXul4pnLEDxuZ3iNEp681fiPmASmRs3KHzW8DRy6z0xcWwwKF690HOIVs8GjGamiFwStQX2FrD3pX1wgu3%2FcM7DMHABVexV66%2Bj%2FCG0yFrPWechriMZnYoonX1SrCxOiOAsOEF4FYMP%2BF2sMGOqUBga4lehBezTCUJibJpZyg9lym4qkalwwWONIYq79BvbNxIPG6F1C3UtbB%2BCKY2%2FrvmIjhXlnITm5JNjOoDs00ZJAR4neFvwmAh84sklGgXlp2n6gTLWbKTMzt%2FausGShaI9dYVhBQ52huzygGHhARucew2z%2Bqa3Y6P7chFKiEEpzALcJEO3ghFYTBvqfMhs8m9gBkY%2B031uLD8HQOAIkJb057cGGh&X-Amz-Signature=eda7c91e2db244e7c5c2806d6cdf84045ebb9230f6e1e1b4d48a7e1725a609a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
