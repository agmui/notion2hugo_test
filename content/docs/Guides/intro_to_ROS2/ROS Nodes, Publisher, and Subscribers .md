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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GRKGAA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29AjpmA4pmgwL53jMASlXeTqY4fj25VXgkaymh0WuMAIhAI1msTbl97lgLBzEnJyqzQapzgB6rS2QaYee14MANpB9Kv8DCFYQABoMNjM3NDIzMTgzODA1Igx8ynqCQaEAypsVRyMq3AOv9sGUmTOx%2FH1NuzVb3iARcaQkdDg9bT9wxnOYR6fVPPCs2mCE4AH%2BNecps7dv0XZGcV%2BtKHIRslrf22eX26DtU9p3BHhE51c2mtV3tUEFP4VSdVFVXSJplSusojr%2FMxLaCEsJ%2BBQr%2BjbILOXA%2FbaRn6jlQ4PZ%2B8Fbiv9zd97%2Bkpn208tjqngJ75UoHzVtLb5UxmVzZFO2dbMd8VMCSYO%2B0UH%2FnRTK%2BXD6MZpkcnl%2BE0LUeQBtEpz5JPG2narN0GU2fKICKKC1%2FL%2B3HgER777CDYN9PeXpGD8j4Xf6MQ7f%2FrhfXjzJhtplGvPah%2BUHVpQB210oD2iLL%2B%2Fm6pI5vPhW7viIsBLSJh2fvhQhxBDuWZQRRGiQYP8U51hXXNDjVKbg8hvdxJCxHGvq8gaQ2r8jUYFFEZE1H4x9A%2Ff7zrLTt%2FhhrAik%2BrUv6KEx7GgjQnBIdC1KBgK5nE9DiIyt9xyNpZqAmSgY0r3LLWprdQESLrvM2nLGzD1AQWaX%2Beoi3dJJmRtNfd5dmZr04CpoS6KIv%2F2xe%2BXlGH3%2BC3D%2BYhQXt80AFf8T6rbz%2FxzVDF2TtbizZBYENMQaOXGhZUCnDjHu2KEUJqRVCvU6SgDiucacCAP3%2FXuLM6Q8gyao2DCE7bbABjqkAQi1NCeOl3z9Ph3FyJN0tMhI5SayoTdI0k0ra3AmsLqG4FjavIDwjK%2BnsyFNheovf6FpgKh89mVtxn11mqszCdF1sd%2Bul2T2B%2B%2F5480KnO7s8filekqZ2odv3PU7j%2FtbJLyDd%2B1hk%2BYox0aAjI27t8g5XBbLscHgxViO1DT9tjhbXY4GibXSAMHG%2FOi4naXiAfnuharI3UxHQs%2F%2BlqumHnzVqaFx&X-Amz-Signature=73cb085ef9ecf61739498995d1e01f1f09d5bd23786bf082cd67092b85df99a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GRKGAA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29AjpmA4pmgwL53jMASlXeTqY4fj25VXgkaymh0WuMAIhAI1msTbl97lgLBzEnJyqzQapzgB6rS2QaYee14MANpB9Kv8DCFYQABoMNjM3NDIzMTgzODA1Igx8ynqCQaEAypsVRyMq3AOv9sGUmTOx%2FH1NuzVb3iARcaQkdDg9bT9wxnOYR6fVPPCs2mCE4AH%2BNecps7dv0XZGcV%2BtKHIRslrf22eX26DtU9p3BHhE51c2mtV3tUEFP4VSdVFVXSJplSusojr%2FMxLaCEsJ%2BBQr%2BjbILOXA%2FbaRn6jlQ4PZ%2B8Fbiv9zd97%2Bkpn208tjqngJ75UoHzVtLb5UxmVzZFO2dbMd8VMCSYO%2B0UH%2FnRTK%2BXD6MZpkcnl%2BE0LUeQBtEpz5JPG2narN0GU2fKICKKC1%2FL%2B3HgER777CDYN9PeXpGD8j4Xf6MQ7f%2FrhfXjzJhtplGvPah%2BUHVpQB210oD2iLL%2B%2Fm6pI5vPhW7viIsBLSJh2fvhQhxBDuWZQRRGiQYP8U51hXXNDjVKbg8hvdxJCxHGvq8gaQ2r8jUYFFEZE1H4x9A%2Ff7zrLTt%2FhhrAik%2BrUv6KEx7GgjQnBIdC1KBgK5nE9DiIyt9xyNpZqAmSgY0r3LLWprdQESLrvM2nLGzD1AQWaX%2Beoi3dJJmRtNfd5dmZr04CpoS6KIv%2F2xe%2BXlGH3%2BC3D%2BYhQXt80AFf8T6rbz%2FxzVDF2TtbizZBYENMQaOXGhZUCnDjHu2KEUJqRVCvU6SgDiucacCAP3%2FXuLM6Q8gyao2DCE7bbABjqkAQi1NCeOl3z9Ph3FyJN0tMhI5SayoTdI0k0ra3AmsLqG4FjavIDwjK%2BnsyFNheovf6FpgKh89mVtxn11mqszCdF1sd%2Bul2T2B%2B%2F5480KnO7s8filekqZ2odv3PU7j%2FtbJLyDd%2B1hk%2BYox0aAjI27t8g5XBbLscHgxViO1DT9tjhbXY4GibXSAMHG%2FOi4naXiAfnuharI3UxHQs%2F%2BlqumHnzVqaFx&X-Amz-Signature=69bc51006c5c3c0abbcc36b68f605499d5f4690e39835955a54322f8ac3f6353&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GRKGAA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29AjpmA4pmgwL53jMASlXeTqY4fj25VXgkaymh0WuMAIhAI1msTbl97lgLBzEnJyqzQapzgB6rS2QaYee14MANpB9Kv8DCFYQABoMNjM3NDIzMTgzODA1Igx8ynqCQaEAypsVRyMq3AOv9sGUmTOx%2FH1NuzVb3iARcaQkdDg9bT9wxnOYR6fVPPCs2mCE4AH%2BNecps7dv0XZGcV%2BtKHIRslrf22eX26DtU9p3BHhE51c2mtV3tUEFP4VSdVFVXSJplSusojr%2FMxLaCEsJ%2BBQr%2BjbILOXA%2FbaRn6jlQ4PZ%2B8Fbiv9zd97%2Bkpn208tjqngJ75UoHzVtLb5UxmVzZFO2dbMd8VMCSYO%2B0UH%2FnRTK%2BXD6MZpkcnl%2BE0LUeQBtEpz5JPG2narN0GU2fKICKKC1%2FL%2B3HgER777CDYN9PeXpGD8j4Xf6MQ7f%2FrhfXjzJhtplGvPah%2BUHVpQB210oD2iLL%2B%2Fm6pI5vPhW7viIsBLSJh2fvhQhxBDuWZQRRGiQYP8U51hXXNDjVKbg8hvdxJCxHGvq8gaQ2r8jUYFFEZE1H4x9A%2Ff7zrLTt%2FhhrAik%2BrUv6KEx7GgjQnBIdC1KBgK5nE9DiIyt9xyNpZqAmSgY0r3LLWprdQESLrvM2nLGzD1AQWaX%2Beoi3dJJmRtNfd5dmZr04CpoS6KIv%2F2xe%2BXlGH3%2BC3D%2BYhQXt80AFf8T6rbz%2FxzVDF2TtbizZBYENMQaOXGhZUCnDjHu2KEUJqRVCvU6SgDiucacCAP3%2FXuLM6Q8gyao2DCE7bbABjqkAQi1NCeOl3z9Ph3FyJN0tMhI5SayoTdI0k0ra3AmsLqG4FjavIDwjK%2BnsyFNheovf6FpgKh89mVtxn11mqszCdF1sd%2Bul2T2B%2B%2F5480KnO7s8filekqZ2odv3PU7j%2FtbJLyDd%2B1hk%2BYox0aAjI27t8g5XBbLscHgxViO1DT9tjhbXY4GibXSAMHG%2FOi4naXiAfnuharI3UxHQs%2F%2BlqumHnzVqaFx&X-Amz-Signature=4ac724059fd2432660feba1dc182302c9194e690f7d33f726afc9563da2440d7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GRKGAA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29AjpmA4pmgwL53jMASlXeTqY4fj25VXgkaymh0WuMAIhAI1msTbl97lgLBzEnJyqzQapzgB6rS2QaYee14MANpB9Kv8DCFYQABoMNjM3NDIzMTgzODA1Igx8ynqCQaEAypsVRyMq3AOv9sGUmTOx%2FH1NuzVb3iARcaQkdDg9bT9wxnOYR6fVPPCs2mCE4AH%2BNecps7dv0XZGcV%2BtKHIRslrf22eX26DtU9p3BHhE51c2mtV3tUEFP4VSdVFVXSJplSusojr%2FMxLaCEsJ%2BBQr%2BjbILOXA%2FbaRn6jlQ4PZ%2B8Fbiv9zd97%2Bkpn208tjqngJ75UoHzVtLb5UxmVzZFO2dbMd8VMCSYO%2B0UH%2FnRTK%2BXD6MZpkcnl%2BE0LUeQBtEpz5JPG2narN0GU2fKICKKC1%2FL%2B3HgER777CDYN9PeXpGD8j4Xf6MQ7f%2FrhfXjzJhtplGvPah%2BUHVpQB210oD2iLL%2B%2Fm6pI5vPhW7viIsBLSJh2fvhQhxBDuWZQRRGiQYP8U51hXXNDjVKbg8hvdxJCxHGvq8gaQ2r8jUYFFEZE1H4x9A%2Ff7zrLTt%2FhhrAik%2BrUv6KEx7GgjQnBIdC1KBgK5nE9DiIyt9xyNpZqAmSgY0r3LLWprdQESLrvM2nLGzD1AQWaX%2Beoi3dJJmRtNfd5dmZr04CpoS6KIv%2F2xe%2BXlGH3%2BC3D%2BYhQXt80AFf8T6rbz%2FxzVDF2TtbizZBYENMQaOXGhZUCnDjHu2KEUJqRVCvU6SgDiucacCAP3%2FXuLM6Q8gyao2DCE7bbABjqkAQi1NCeOl3z9Ph3FyJN0tMhI5SayoTdI0k0ra3AmsLqG4FjavIDwjK%2BnsyFNheovf6FpgKh89mVtxn11mqszCdF1sd%2Bul2T2B%2B%2F5480KnO7s8filekqZ2odv3PU7j%2FtbJLyDd%2B1hk%2BYox0aAjI27t8g5XBbLscHgxViO1DT9tjhbXY4GibXSAMHG%2FOi4naXiAfnuharI3UxHQs%2F%2BlqumHnzVqaFx&X-Amz-Signature=f9b999196ec4c018e783b2ff83fb9526cddef5c9121072e32b07412255653454&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GRKGAA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29AjpmA4pmgwL53jMASlXeTqY4fj25VXgkaymh0WuMAIhAI1msTbl97lgLBzEnJyqzQapzgB6rS2QaYee14MANpB9Kv8DCFYQABoMNjM3NDIzMTgzODA1Igx8ynqCQaEAypsVRyMq3AOv9sGUmTOx%2FH1NuzVb3iARcaQkdDg9bT9wxnOYR6fVPPCs2mCE4AH%2BNecps7dv0XZGcV%2BtKHIRslrf22eX26DtU9p3BHhE51c2mtV3tUEFP4VSdVFVXSJplSusojr%2FMxLaCEsJ%2BBQr%2BjbILOXA%2FbaRn6jlQ4PZ%2B8Fbiv9zd97%2Bkpn208tjqngJ75UoHzVtLb5UxmVzZFO2dbMd8VMCSYO%2B0UH%2FnRTK%2BXD6MZpkcnl%2BE0LUeQBtEpz5JPG2narN0GU2fKICKKC1%2FL%2B3HgER777CDYN9PeXpGD8j4Xf6MQ7f%2FrhfXjzJhtplGvPah%2BUHVpQB210oD2iLL%2B%2Fm6pI5vPhW7viIsBLSJh2fvhQhxBDuWZQRRGiQYP8U51hXXNDjVKbg8hvdxJCxHGvq8gaQ2r8jUYFFEZE1H4x9A%2Ff7zrLTt%2FhhrAik%2BrUv6KEx7GgjQnBIdC1KBgK5nE9DiIyt9xyNpZqAmSgY0r3LLWprdQESLrvM2nLGzD1AQWaX%2Beoi3dJJmRtNfd5dmZr04CpoS6KIv%2F2xe%2BXlGH3%2BC3D%2BYhQXt80AFf8T6rbz%2FxzVDF2TtbizZBYENMQaOXGhZUCnDjHu2KEUJqRVCvU6SgDiucacCAP3%2FXuLM6Q8gyao2DCE7bbABjqkAQi1NCeOl3z9Ph3FyJN0tMhI5SayoTdI0k0ra3AmsLqG4FjavIDwjK%2BnsyFNheovf6FpgKh89mVtxn11mqszCdF1sd%2Bul2T2B%2B%2F5480KnO7s8filekqZ2odv3PU7j%2FtbJLyDd%2B1hk%2BYox0aAjI27t8g5XBbLscHgxViO1DT9tjhbXY4GibXSAMHG%2FOi4naXiAfnuharI3UxHQs%2F%2BlqumHnzVqaFx&X-Amz-Signature=1c4aca117b2bee32be559bae06def08bd454615e20fa8b031c17352b7d4f06fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GRKGAA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29AjpmA4pmgwL53jMASlXeTqY4fj25VXgkaymh0WuMAIhAI1msTbl97lgLBzEnJyqzQapzgB6rS2QaYee14MANpB9Kv8DCFYQABoMNjM3NDIzMTgzODA1Igx8ynqCQaEAypsVRyMq3AOv9sGUmTOx%2FH1NuzVb3iARcaQkdDg9bT9wxnOYR6fVPPCs2mCE4AH%2BNecps7dv0XZGcV%2BtKHIRslrf22eX26DtU9p3BHhE51c2mtV3tUEFP4VSdVFVXSJplSusojr%2FMxLaCEsJ%2BBQr%2BjbILOXA%2FbaRn6jlQ4PZ%2B8Fbiv9zd97%2Bkpn208tjqngJ75UoHzVtLb5UxmVzZFO2dbMd8VMCSYO%2B0UH%2FnRTK%2BXD6MZpkcnl%2BE0LUeQBtEpz5JPG2narN0GU2fKICKKC1%2FL%2B3HgER777CDYN9PeXpGD8j4Xf6MQ7f%2FrhfXjzJhtplGvPah%2BUHVpQB210oD2iLL%2B%2Fm6pI5vPhW7viIsBLSJh2fvhQhxBDuWZQRRGiQYP8U51hXXNDjVKbg8hvdxJCxHGvq8gaQ2r8jUYFFEZE1H4x9A%2Ff7zrLTt%2FhhrAik%2BrUv6KEx7GgjQnBIdC1KBgK5nE9DiIyt9xyNpZqAmSgY0r3LLWprdQESLrvM2nLGzD1AQWaX%2Beoi3dJJmRtNfd5dmZr04CpoS6KIv%2F2xe%2BXlGH3%2BC3D%2BYhQXt80AFf8T6rbz%2FxzVDF2TtbizZBYENMQaOXGhZUCnDjHu2KEUJqRVCvU6SgDiucacCAP3%2FXuLM6Q8gyao2DCE7bbABjqkAQi1NCeOl3z9Ph3FyJN0tMhI5SayoTdI0k0ra3AmsLqG4FjavIDwjK%2BnsyFNheovf6FpgKh89mVtxn11mqszCdF1sd%2Bul2T2B%2B%2F5480KnO7s8filekqZ2odv3PU7j%2FtbJLyDd%2B1hk%2BYox0aAjI27t8g5XBbLscHgxViO1DT9tjhbXY4GibXSAMHG%2FOi4naXiAfnuharI3UxHQs%2F%2BlqumHnzVqaFx&X-Amz-Signature=28a7827037d5d300c9d597795eab7e95591ea85d7b4b5241417d46e4c2602552&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GRKGAA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29AjpmA4pmgwL53jMASlXeTqY4fj25VXgkaymh0WuMAIhAI1msTbl97lgLBzEnJyqzQapzgB6rS2QaYee14MANpB9Kv8DCFYQABoMNjM3NDIzMTgzODA1Igx8ynqCQaEAypsVRyMq3AOv9sGUmTOx%2FH1NuzVb3iARcaQkdDg9bT9wxnOYR6fVPPCs2mCE4AH%2BNecps7dv0XZGcV%2BtKHIRslrf22eX26DtU9p3BHhE51c2mtV3tUEFP4VSdVFVXSJplSusojr%2FMxLaCEsJ%2BBQr%2BjbILOXA%2FbaRn6jlQ4PZ%2B8Fbiv9zd97%2Bkpn208tjqngJ75UoHzVtLb5UxmVzZFO2dbMd8VMCSYO%2B0UH%2FnRTK%2BXD6MZpkcnl%2BE0LUeQBtEpz5JPG2narN0GU2fKICKKC1%2FL%2B3HgER777CDYN9PeXpGD8j4Xf6MQ7f%2FrhfXjzJhtplGvPah%2BUHVpQB210oD2iLL%2B%2Fm6pI5vPhW7viIsBLSJh2fvhQhxBDuWZQRRGiQYP8U51hXXNDjVKbg8hvdxJCxHGvq8gaQ2r8jUYFFEZE1H4x9A%2Ff7zrLTt%2FhhrAik%2BrUv6KEx7GgjQnBIdC1KBgK5nE9DiIyt9xyNpZqAmSgY0r3LLWprdQESLrvM2nLGzD1AQWaX%2Beoi3dJJmRtNfd5dmZr04CpoS6KIv%2F2xe%2BXlGH3%2BC3D%2BYhQXt80AFf8T6rbz%2FxzVDF2TtbizZBYENMQaOXGhZUCnDjHu2KEUJqRVCvU6SgDiucacCAP3%2FXuLM6Q8gyao2DCE7bbABjqkAQi1NCeOl3z9Ph3FyJN0tMhI5SayoTdI0k0ra3AmsLqG4FjavIDwjK%2BnsyFNheovf6FpgKh89mVtxn11mqszCdF1sd%2Bul2T2B%2B%2F5480KnO7s8filekqZ2odv3PU7j%2FtbJLyDd%2B1hk%2BYox0aAjI27t8g5XBbLscHgxViO1DT9tjhbXY4GibXSAMHG%2FOi4naXiAfnuharI3UxHQs%2F%2BlqumHnzVqaFx&X-Amz-Signature=040ddeee74a06e9a11ecee6d3902d714b214dc88a4defdd820c3980fb05cd071&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6GRKGAA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29AjpmA4pmgwL53jMASlXeTqY4fj25VXgkaymh0WuMAIhAI1msTbl97lgLBzEnJyqzQapzgB6rS2QaYee14MANpB9Kv8DCFYQABoMNjM3NDIzMTgzODA1Igx8ynqCQaEAypsVRyMq3AOv9sGUmTOx%2FH1NuzVb3iARcaQkdDg9bT9wxnOYR6fVPPCs2mCE4AH%2BNecps7dv0XZGcV%2BtKHIRslrf22eX26DtU9p3BHhE51c2mtV3tUEFP4VSdVFVXSJplSusojr%2FMxLaCEsJ%2BBQr%2BjbILOXA%2FbaRn6jlQ4PZ%2B8Fbiv9zd97%2Bkpn208tjqngJ75UoHzVtLb5UxmVzZFO2dbMd8VMCSYO%2B0UH%2FnRTK%2BXD6MZpkcnl%2BE0LUeQBtEpz5JPG2narN0GU2fKICKKC1%2FL%2B3HgER777CDYN9PeXpGD8j4Xf6MQ7f%2FrhfXjzJhtplGvPah%2BUHVpQB210oD2iLL%2B%2Fm6pI5vPhW7viIsBLSJh2fvhQhxBDuWZQRRGiQYP8U51hXXNDjVKbg8hvdxJCxHGvq8gaQ2r8jUYFFEZE1H4x9A%2Ff7zrLTt%2FhhrAik%2BrUv6KEx7GgjQnBIdC1KBgK5nE9DiIyt9xyNpZqAmSgY0r3LLWprdQESLrvM2nLGzD1AQWaX%2Beoi3dJJmRtNfd5dmZr04CpoS6KIv%2F2xe%2BXlGH3%2BC3D%2BYhQXt80AFf8T6rbz%2FxzVDF2TtbizZBYENMQaOXGhZUCnDjHu2KEUJqRVCvU6SgDiucacCAP3%2FXuLM6Q8gyao2DCE7bbABjqkAQi1NCeOl3z9Ph3FyJN0tMhI5SayoTdI0k0ra3AmsLqG4FjavIDwjK%2BnsyFNheovf6FpgKh89mVtxn11mqszCdF1sd%2Bul2T2B%2B%2F5480KnO7s8filekqZ2odv3PU7j%2FtbJLyDd%2B1hk%2BYox0aAjI27t8g5XBbLscHgxViO1DT9tjhbXY4GibXSAMHG%2FOi4naXiAfnuharI3UxHQs%2F%2BlqumHnzVqaFx&X-Amz-Signature=4417479e26127c55f06a7714f3f2531b4a194e9a84d291f1d12f9f7eb1a511dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
