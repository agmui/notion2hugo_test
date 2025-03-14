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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWATT5HM%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGfQiAzkIW7epDo0tQBKFQvIwMaWYNTQYtPdZ%2Bwno9TAiANDuucSF2W8hvearl4sAmhQC4Tth4Ykt8pM8zziRdMZCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg5Nx7DkdOeorxeItKtwDDLYkrOBY3mvhiMbBlADH0dvW9neFLL4YfNHETi2oUhKO1WASMoKw1%2B3eo2SjK4t0ESKHNJujjc2UHRmLQE4NwCosImOeloK24%2BqOxaOkWkoQCqDpPVJUgL5Yvf%2FoYNz5qqXkSxcr8zCwk2KFwxVlOO%2B8DtzTGZXWoGRr3D68KFk31O3BlpQ0grbwR1RSZIDxtOTG0XXCKZz75U7%2BSUnJFya6e5uFlUY6YNoqkeoEzJ19KeFVgJT9Gg%2FQsBa2%2BZGK02TovY2gkE%2Fw0No5h7B5yRX8QRTkjtZnq2oRq5fDA1BUlNh%2FuQov0x2Zt671DiD535UGu6G45P8R8ZrFOxDKMHe6p96e89SkAuQ6TadqHqJtncuxCRqGSnD4kqPUZF%2Bac%2BinTUy4erc8YUwgSuSW8REUzyawo45TdJHQrhb76HULe8H4Cm1YGytNSrLt2DnHcRdJzTyvgxeWkRLz%2F8p%2BXHKI%2FNNSzh3hDu4E2wX3KnM3%2Fvhb3TSczLuWcOudG7J4Np5uNY9kJikYctYgDR%2FEo2FF%2Fn0u7WsuNL1mQUlvLqmnVOhASLOw9ztMLN3BoBcGcq9ywk1abkS0%2BJOMhFJIQJAxWPpRLV9Bivmjrb0EloQwUTqiDvX0F5J%2FboQwkI7OvgY6pgG3UJh3grq3pGvW4N7dmlJkLqPA%2F0YNgCAcL4U76PTCbOl%2F2JACIMWAwFPXMMhCPR0D27AUyWQsw4ibyRM3q2OzzT8Z4OEOwJ7QUgBP%2B1PZS0DrOIYKZTQirGTq0nkZpT3qtRGtFQtoN2iLoy8dSVnsaHS2axBqNT6AD9fZ2pIpo9AMZOe%2FGSnLKXZBEd8MLVHbL5nRE65Mnm3ue%2BJIJ9EY2e50QZlK&X-Amz-Signature=c66b08f542acf37db55795fbdb0a3beadc47ba6b211c595ec7e85f55393df464&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWATT5HM%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGfQiAzkIW7epDo0tQBKFQvIwMaWYNTQYtPdZ%2Bwno9TAiANDuucSF2W8hvearl4sAmhQC4Tth4Ykt8pM8zziRdMZCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg5Nx7DkdOeorxeItKtwDDLYkrOBY3mvhiMbBlADH0dvW9neFLL4YfNHETi2oUhKO1WASMoKw1%2B3eo2SjK4t0ESKHNJujjc2UHRmLQE4NwCosImOeloK24%2BqOxaOkWkoQCqDpPVJUgL5Yvf%2FoYNz5qqXkSxcr8zCwk2KFwxVlOO%2B8DtzTGZXWoGRr3D68KFk31O3BlpQ0grbwR1RSZIDxtOTG0XXCKZz75U7%2BSUnJFya6e5uFlUY6YNoqkeoEzJ19KeFVgJT9Gg%2FQsBa2%2BZGK02TovY2gkE%2Fw0No5h7B5yRX8QRTkjtZnq2oRq5fDA1BUlNh%2FuQov0x2Zt671DiD535UGu6G45P8R8ZrFOxDKMHe6p96e89SkAuQ6TadqHqJtncuxCRqGSnD4kqPUZF%2Bac%2BinTUy4erc8YUwgSuSW8REUzyawo45TdJHQrhb76HULe8H4Cm1YGytNSrLt2DnHcRdJzTyvgxeWkRLz%2F8p%2BXHKI%2FNNSzh3hDu4E2wX3KnM3%2Fvhb3TSczLuWcOudG7J4Np5uNY9kJikYctYgDR%2FEo2FF%2Fn0u7WsuNL1mQUlvLqmnVOhASLOw9ztMLN3BoBcGcq9ywk1abkS0%2BJOMhFJIQJAxWPpRLV9Bivmjrb0EloQwUTqiDvX0F5J%2FboQwkI7OvgY6pgG3UJh3grq3pGvW4N7dmlJkLqPA%2F0YNgCAcL4U76PTCbOl%2F2JACIMWAwFPXMMhCPR0D27AUyWQsw4ibyRM3q2OzzT8Z4OEOwJ7QUgBP%2B1PZS0DrOIYKZTQirGTq0nkZpT3qtRGtFQtoN2iLoy8dSVnsaHS2axBqNT6AD9fZ2pIpo9AMZOe%2FGSnLKXZBEd8MLVHbL5nRE65Mnm3ue%2BJIJ9EY2e50QZlK&X-Amz-Signature=2c8c029a0eb4b992d21802254023f70e7f2af655b63286d777a2bc1f40ef36ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWATT5HM%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGfQiAzkIW7epDo0tQBKFQvIwMaWYNTQYtPdZ%2Bwno9TAiANDuucSF2W8hvearl4sAmhQC4Tth4Ykt8pM8zziRdMZCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg5Nx7DkdOeorxeItKtwDDLYkrOBY3mvhiMbBlADH0dvW9neFLL4YfNHETi2oUhKO1WASMoKw1%2B3eo2SjK4t0ESKHNJujjc2UHRmLQE4NwCosImOeloK24%2BqOxaOkWkoQCqDpPVJUgL5Yvf%2FoYNz5qqXkSxcr8zCwk2KFwxVlOO%2B8DtzTGZXWoGRr3D68KFk31O3BlpQ0grbwR1RSZIDxtOTG0XXCKZz75U7%2BSUnJFya6e5uFlUY6YNoqkeoEzJ19KeFVgJT9Gg%2FQsBa2%2BZGK02TovY2gkE%2Fw0No5h7B5yRX8QRTkjtZnq2oRq5fDA1BUlNh%2FuQov0x2Zt671DiD535UGu6G45P8R8ZrFOxDKMHe6p96e89SkAuQ6TadqHqJtncuxCRqGSnD4kqPUZF%2Bac%2BinTUy4erc8YUwgSuSW8REUzyawo45TdJHQrhb76HULe8H4Cm1YGytNSrLt2DnHcRdJzTyvgxeWkRLz%2F8p%2BXHKI%2FNNSzh3hDu4E2wX3KnM3%2Fvhb3TSczLuWcOudG7J4Np5uNY9kJikYctYgDR%2FEo2FF%2Fn0u7WsuNL1mQUlvLqmnVOhASLOw9ztMLN3BoBcGcq9ywk1abkS0%2BJOMhFJIQJAxWPpRLV9Bivmjrb0EloQwUTqiDvX0F5J%2FboQwkI7OvgY6pgG3UJh3grq3pGvW4N7dmlJkLqPA%2F0YNgCAcL4U76PTCbOl%2F2JACIMWAwFPXMMhCPR0D27AUyWQsw4ibyRM3q2OzzT8Z4OEOwJ7QUgBP%2B1PZS0DrOIYKZTQirGTq0nkZpT3qtRGtFQtoN2iLoy8dSVnsaHS2axBqNT6AD9fZ2pIpo9AMZOe%2FGSnLKXZBEd8MLVHbL5nRE65Mnm3ue%2BJIJ9EY2e50QZlK&X-Amz-Signature=8c8daae2c51f617afb650bdfcd396e3dd51d135decbd9d4ccda23fa00eb8f4db&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWATT5HM%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGfQiAzkIW7epDo0tQBKFQvIwMaWYNTQYtPdZ%2Bwno9TAiANDuucSF2W8hvearl4sAmhQC4Tth4Ykt8pM8zziRdMZCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg5Nx7DkdOeorxeItKtwDDLYkrOBY3mvhiMbBlADH0dvW9neFLL4YfNHETi2oUhKO1WASMoKw1%2B3eo2SjK4t0ESKHNJujjc2UHRmLQE4NwCosImOeloK24%2BqOxaOkWkoQCqDpPVJUgL5Yvf%2FoYNz5qqXkSxcr8zCwk2KFwxVlOO%2B8DtzTGZXWoGRr3D68KFk31O3BlpQ0grbwR1RSZIDxtOTG0XXCKZz75U7%2BSUnJFya6e5uFlUY6YNoqkeoEzJ19KeFVgJT9Gg%2FQsBa2%2BZGK02TovY2gkE%2Fw0No5h7B5yRX8QRTkjtZnq2oRq5fDA1BUlNh%2FuQov0x2Zt671DiD535UGu6G45P8R8ZrFOxDKMHe6p96e89SkAuQ6TadqHqJtncuxCRqGSnD4kqPUZF%2Bac%2BinTUy4erc8YUwgSuSW8REUzyawo45TdJHQrhb76HULe8H4Cm1YGytNSrLt2DnHcRdJzTyvgxeWkRLz%2F8p%2BXHKI%2FNNSzh3hDu4E2wX3KnM3%2Fvhb3TSczLuWcOudG7J4Np5uNY9kJikYctYgDR%2FEo2FF%2Fn0u7WsuNL1mQUlvLqmnVOhASLOw9ztMLN3BoBcGcq9ywk1abkS0%2BJOMhFJIQJAxWPpRLV9Bivmjrb0EloQwUTqiDvX0F5J%2FboQwkI7OvgY6pgG3UJh3grq3pGvW4N7dmlJkLqPA%2F0YNgCAcL4U76PTCbOl%2F2JACIMWAwFPXMMhCPR0D27AUyWQsw4ibyRM3q2OzzT8Z4OEOwJ7QUgBP%2B1PZS0DrOIYKZTQirGTq0nkZpT3qtRGtFQtoN2iLoy8dSVnsaHS2axBqNT6AD9fZ2pIpo9AMZOe%2FGSnLKXZBEd8MLVHbL5nRE65Mnm3ue%2BJIJ9EY2e50QZlK&X-Amz-Signature=d276146c011f6daae3c6271c18d9f8b91462831363fe3cc8511f0a925eadc284&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWATT5HM%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGfQiAzkIW7epDo0tQBKFQvIwMaWYNTQYtPdZ%2Bwno9TAiANDuucSF2W8hvearl4sAmhQC4Tth4Ykt8pM8zziRdMZCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg5Nx7DkdOeorxeItKtwDDLYkrOBY3mvhiMbBlADH0dvW9neFLL4YfNHETi2oUhKO1WASMoKw1%2B3eo2SjK4t0ESKHNJujjc2UHRmLQE4NwCosImOeloK24%2BqOxaOkWkoQCqDpPVJUgL5Yvf%2FoYNz5qqXkSxcr8zCwk2KFwxVlOO%2B8DtzTGZXWoGRr3D68KFk31O3BlpQ0grbwR1RSZIDxtOTG0XXCKZz75U7%2BSUnJFya6e5uFlUY6YNoqkeoEzJ19KeFVgJT9Gg%2FQsBa2%2BZGK02TovY2gkE%2Fw0No5h7B5yRX8QRTkjtZnq2oRq5fDA1BUlNh%2FuQov0x2Zt671DiD535UGu6G45P8R8ZrFOxDKMHe6p96e89SkAuQ6TadqHqJtncuxCRqGSnD4kqPUZF%2Bac%2BinTUy4erc8YUwgSuSW8REUzyawo45TdJHQrhb76HULe8H4Cm1YGytNSrLt2DnHcRdJzTyvgxeWkRLz%2F8p%2BXHKI%2FNNSzh3hDu4E2wX3KnM3%2Fvhb3TSczLuWcOudG7J4Np5uNY9kJikYctYgDR%2FEo2FF%2Fn0u7WsuNL1mQUlvLqmnVOhASLOw9ztMLN3BoBcGcq9ywk1abkS0%2BJOMhFJIQJAxWPpRLV9Bivmjrb0EloQwUTqiDvX0F5J%2FboQwkI7OvgY6pgG3UJh3grq3pGvW4N7dmlJkLqPA%2F0YNgCAcL4U76PTCbOl%2F2JACIMWAwFPXMMhCPR0D27AUyWQsw4ibyRM3q2OzzT8Z4OEOwJ7QUgBP%2B1PZS0DrOIYKZTQirGTq0nkZpT3qtRGtFQtoN2iLoy8dSVnsaHS2axBqNT6AD9fZ2pIpo9AMZOe%2FGSnLKXZBEd8MLVHbL5nRE65Mnm3ue%2BJIJ9EY2e50QZlK&X-Amz-Signature=c1b230ebe749e311c9d5116846934667feaac57fcd3f46d0d7f80d9d57100829&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWATT5HM%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGfQiAzkIW7epDo0tQBKFQvIwMaWYNTQYtPdZ%2Bwno9TAiANDuucSF2W8hvearl4sAmhQC4Tth4Ykt8pM8zziRdMZCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg5Nx7DkdOeorxeItKtwDDLYkrOBY3mvhiMbBlADH0dvW9neFLL4YfNHETi2oUhKO1WASMoKw1%2B3eo2SjK4t0ESKHNJujjc2UHRmLQE4NwCosImOeloK24%2BqOxaOkWkoQCqDpPVJUgL5Yvf%2FoYNz5qqXkSxcr8zCwk2KFwxVlOO%2B8DtzTGZXWoGRr3D68KFk31O3BlpQ0grbwR1RSZIDxtOTG0XXCKZz75U7%2BSUnJFya6e5uFlUY6YNoqkeoEzJ19KeFVgJT9Gg%2FQsBa2%2BZGK02TovY2gkE%2Fw0No5h7B5yRX8QRTkjtZnq2oRq5fDA1BUlNh%2FuQov0x2Zt671DiD535UGu6G45P8R8ZrFOxDKMHe6p96e89SkAuQ6TadqHqJtncuxCRqGSnD4kqPUZF%2Bac%2BinTUy4erc8YUwgSuSW8REUzyawo45TdJHQrhb76HULe8H4Cm1YGytNSrLt2DnHcRdJzTyvgxeWkRLz%2F8p%2BXHKI%2FNNSzh3hDu4E2wX3KnM3%2Fvhb3TSczLuWcOudG7J4Np5uNY9kJikYctYgDR%2FEo2FF%2Fn0u7WsuNL1mQUlvLqmnVOhASLOw9ztMLN3BoBcGcq9ywk1abkS0%2BJOMhFJIQJAxWPpRLV9Bivmjrb0EloQwUTqiDvX0F5J%2FboQwkI7OvgY6pgG3UJh3grq3pGvW4N7dmlJkLqPA%2F0YNgCAcL4U76PTCbOl%2F2JACIMWAwFPXMMhCPR0D27AUyWQsw4ibyRM3q2OzzT8Z4OEOwJ7QUgBP%2B1PZS0DrOIYKZTQirGTq0nkZpT3qtRGtFQtoN2iLoy8dSVnsaHS2axBqNT6AD9fZ2pIpo9AMZOe%2FGSnLKXZBEd8MLVHbL5nRE65Mnm3ue%2BJIJ9EY2e50QZlK&X-Amz-Signature=e72d9e7a9638322b353f0faeaf0f6895a9af0b4d23ba3afe6b7aca9f9eed30d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWATT5HM%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGfQiAzkIW7epDo0tQBKFQvIwMaWYNTQYtPdZ%2Bwno9TAiANDuucSF2W8hvearl4sAmhQC4Tth4Ykt8pM8zziRdMZCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg5Nx7DkdOeorxeItKtwDDLYkrOBY3mvhiMbBlADH0dvW9neFLL4YfNHETi2oUhKO1WASMoKw1%2B3eo2SjK4t0ESKHNJujjc2UHRmLQE4NwCosImOeloK24%2BqOxaOkWkoQCqDpPVJUgL5Yvf%2FoYNz5qqXkSxcr8zCwk2KFwxVlOO%2B8DtzTGZXWoGRr3D68KFk31O3BlpQ0grbwR1RSZIDxtOTG0XXCKZz75U7%2BSUnJFya6e5uFlUY6YNoqkeoEzJ19KeFVgJT9Gg%2FQsBa2%2BZGK02TovY2gkE%2Fw0No5h7B5yRX8QRTkjtZnq2oRq5fDA1BUlNh%2FuQov0x2Zt671DiD535UGu6G45P8R8ZrFOxDKMHe6p96e89SkAuQ6TadqHqJtncuxCRqGSnD4kqPUZF%2Bac%2BinTUy4erc8YUwgSuSW8REUzyawo45TdJHQrhb76HULe8H4Cm1YGytNSrLt2DnHcRdJzTyvgxeWkRLz%2F8p%2BXHKI%2FNNSzh3hDu4E2wX3KnM3%2Fvhb3TSczLuWcOudG7J4Np5uNY9kJikYctYgDR%2FEo2FF%2Fn0u7WsuNL1mQUlvLqmnVOhASLOw9ztMLN3BoBcGcq9ywk1abkS0%2BJOMhFJIQJAxWPpRLV9Bivmjrb0EloQwUTqiDvX0F5J%2FboQwkI7OvgY6pgG3UJh3grq3pGvW4N7dmlJkLqPA%2F0YNgCAcL4U76PTCbOl%2F2JACIMWAwFPXMMhCPR0D27AUyWQsw4ibyRM3q2OzzT8Z4OEOwJ7QUgBP%2B1PZS0DrOIYKZTQirGTq0nkZpT3qtRGtFQtoN2iLoy8dSVnsaHS2axBqNT6AD9fZ2pIpo9AMZOe%2FGSnLKXZBEd8MLVHbL5nRE65Mnm3ue%2BJIJ9EY2e50QZlK&X-Amz-Signature=d802b709f2b51854a05d1c212e2026f0c7d6e4a4ea2438801d41d7f015d5d6b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWATT5HM%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGfQiAzkIW7epDo0tQBKFQvIwMaWYNTQYtPdZ%2Bwno9TAiANDuucSF2W8hvearl4sAmhQC4Tth4Ykt8pM8zziRdMZCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg5Nx7DkdOeorxeItKtwDDLYkrOBY3mvhiMbBlADH0dvW9neFLL4YfNHETi2oUhKO1WASMoKw1%2B3eo2SjK4t0ESKHNJujjc2UHRmLQE4NwCosImOeloK24%2BqOxaOkWkoQCqDpPVJUgL5Yvf%2FoYNz5qqXkSxcr8zCwk2KFwxVlOO%2B8DtzTGZXWoGRr3D68KFk31O3BlpQ0grbwR1RSZIDxtOTG0XXCKZz75U7%2BSUnJFya6e5uFlUY6YNoqkeoEzJ19KeFVgJT9Gg%2FQsBa2%2BZGK02TovY2gkE%2Fw0No5h7B5yRX8QRTkjtZnq2oRq5fDA1BUlNh%2FuQov0x2Zt671DiD535UGu6G45P8R8ZrFOxDKMHe6p96e89SkAuQ6TadqHqJtncuxCRqGSnD4kqPUZF%2Bac%2BinTUy4erc8YUwgSuSW8REUzyawo45TdJHQrhb76HULe8H4Cm1YGytNSrLt2DnHcRdJzTyvgxeWkRLz%2F8p%2BXHKI%2FNNSzh3hDu4E2wX3KnM3%2Fvhb3TSczLuWcOudG7J4Np5uNY9kJikYctYgDR%2FEo2FF%2Fn0u7WsuNL1mQUlvLqmnVOhASLOw9ztMLN3BoBcGcq9ywk1abkS0%2BJOMhFJIQJAxWPpRLV9Bivmjrb0EloQwUTqiDvX0F5J%2FboQwkI7OvgY6pgG3UJh3grq3pGvW4N7dmlJkLqPA%2F0YNgCAcL4U76PTCbOl%2F2JACIMWAwFPXMMhCPR0D27AUyWQsw4ibyRM3q2OzzT8Z4OEOwJ7QUgBP%2B1PZS0DrOIYKZTQirGTq0nkZpT3qtRGtFQtoN2iLoy8dSVnsaHS2axBqNT6AD9fZ2pIpo9AMZOe%2FGSnLKXZBEd8MLVHbL5nRE65Mnm3ue%2BJIJ9EY2e50QZlK&X-Amz-Signature=2fd36ce6e7675c79d51b37ee035ca12b4aee75288d500a910f5ae6ad2aeee845&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
