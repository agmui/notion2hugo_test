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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLD6A3GY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGsG%2F6pX%2BlaVZ1yltDFjS4VmRu9uN3ipuDJp%2FjP4Mh%2BOAiA5BZnkL2Ep18jDJzUceJ1ddSGBWvZdXqxTXJ%2FfYYu7Mir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMpz3sWJhLZ0V3PIvbKtwDIqBefZZbuTXDmgWPCg0uB33HpYBVrP3eAswZ5HFQTHBMUY8Ak1f6FOsXSCW1g1baqzCDJuwSP75DB6qZ1AvRQztfL9NSlMCs8t0ORNKdwfxcJxUdxgfPOXfPpucXH0nIfjbTb91xbq2KbZazeCeVblDDGm7%2FpqVq58TE%2BKrIKwA6pTMqo4Bn6CL74OO5QZfTfKzoh3mJpmoTNzTItxpyjvbd28YSUtNHx38%2F3SG3qtxRVXHbb7eb1bckuFLYCLkkUEtE%2Bysdeb1LYSq0l580X5NK7Tpqpt%2BURNp0v8hhU89tOEmNJuqDzM%2BcHjnVrc3JvzB4ZIKWXdHEIjXNe3%2FGk1j%2FazOPzFpdZEkjuVbbvHvjOB%2FhMpgXAI6thtYwTIf81%2FWmtesEjGzQl5hyiasM%2F%2B769Xbpkrwjf0mIX11oQ0CYohakSbN0pjTnszN9aniM5itLSScl7cLY10hzgcyfGSzotgyl3mScOC%2Byzgns7loeM2WXwW%2BKmJcQzHvHitSxnnM24%2FU7ywSFTJ85ZrbN8RCIzc4bFCv9EExRdo3ce1%2B%2BY7O9N16zdU4m83dY1PiSwloQFkWB3%2BC%2FJPLQMBLrbXG3DOBhMHUDbF9QEUeBaorUyyC7EWIs7bgpkQowz4P0vQY6pgFjgi71cA6a97vI2cdneBgpG5ncz2k22yoM0QBmFstpiSOCcRs9zzFmZaILraLK5Lfsq98V%2Fk1EwQkQdzmKagxmSw4lerArcCNYium2gGRJXuZBjmzhs9seUv8yyCegrlt1hMAmbgwAZ9LBF1NinR2V2kqUh5Z%2Fna%2BHwiXV0JDexncen7K0XF80VXcFf1SVmWuia5j%2B6wcaXP23Jw9ugQHR7dnDk83K&X-Amz-Signature=753c38af40c1d35dfe812fad5a45f4cc0ba692e2dea3f284842643fe73530310&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLD6A3GY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGsG%2F6pX%2BlaVZ1yltDFjS4VmRu9uN3ipuDJp%2FjP4Mh%2BOAiA5BZnkL2Ep18jDJzUceJ1ddSGBWvZdXqxTXJ%2FfYYu7Mir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMpz3sWJhLZ0V3PIvbKtwDIqBefZZbuTXDmgWPCg0uB33HpYBVrP3eAswZ5HFQTHBMUY8Ak1f6FOsXSCW1g1baqzCDJuwSP75DB6qZ1AvRQztfL9NSlMCs8t0ORNKdwfxcJxUdxgfPOXfPpucXH0nIfjbTb91xbq2KbZazeCeVblDDGm7%2FpqVq58TE%2BKrIKwA6pTMqo4Bn6CL74OO5QZfTfKzoh3mJpmoTNzTItxpyjvbd28YSUtNHx38%2F3SG3qtxRVXHbb7eb1bckuFLYCLkkUEtE%2Bysdeb1LYSq0l580X5NK7Tpqpt%2BURNp0v8hhU89tOEmNJuqDzM%2BcHjnVrc3JvzB4ZIKWXdHEIjXNe3%2FGk1j%2FazOPzFpdZEkjuVbbvHvjOB%2FhMpgXAI6thtYwTIf81%2FWmtesEjGzQl5hyiasM%2F%2B769Xbpkrwjf0mIX11oQ0CYohakSbN0pjTnszN9aniM5itLSScl7cLY10hzgcyfGSzotgyl3mScOC%2Byzgns7loeM2WXwW%2BKmJcQzHvHitSxnnM24%2FU7ywSFTJ85ZrbN8RCIzc4bFCv9EExRdo3ce1%2B%2BY7O9N16zdU4m83dY1PiSwloQFkWB3%2BC%2FJPLQMBLrbXG3DOBhMHUDbF9QEUeBaorUyyC7EWIs7bgpkQowz4P0vQY6pgFjgi71cA6a97vI2cdneBgpG5ncz2k22yoM0QBmFstpiSOCcRs9zzFmZaILraLK5Lfsq98V%2Fk1EwQkQdzmKagxmSw4lerArcCNYium2gGRJXuZBjmzhs9seUv8yyCegrlt1hMAmbgwAZ9LBF1NinR2V2kqUh5Z%2Fna%2BHwiXV0JDexncen7K0XF80VXcFf1SVmWuia5j%2B6wcaXP23Jw9ugQHR7dnDk83K&X-Amz-Signature=8762ced08e48d7c71a0edd2caf59746e3fdcff0dd8f5e7669a7c1be08d93d335&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLD6A3GY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGsG%2F6pX%2BlaVZ1yltDFjS4VmRu9uN3ipuDJp%2FjP4Mh%2BOAiA5BZnkL2Ep18jDJzUceJ1ddSGBWvZdXqxTXJ%2FfYYu7Mir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMpz3sWJhLZ0V3PIvbKtwDIqBefZZbuTXDmgWPCg0uB33HpYBVrP3eAswZ5HFQTHBMUY8Ak1f6FOsXSCW1g1baqzCDJuwSP75DB6qZ1AvRQztfL9NSlMCs8t0ORNKdwfxcJxUdxgfPOXfPpucXH0nIfjbTb91xbq2KbZazeCeVblDDGm7%2FpqVq58TE%2BKrIKwA6pTMqo4Bn6CL74OO5QZfTfKzoh3mJpmoTNzTItxpyjvbd28YSUtNHx38%2F3SG3qtxRVXHbb7eb1bckuFLYCLkkUEtE%2Bysdeb1LYSq0l580X5NK7Tpqpt%2BURNp0v8hhU89tOEmNJuqDzM%2BcHjnVrc3JvzB4ZIKWXdHEIjXNe3%2FGk1j%2FazOPzFpdZEkjuVbbvHvjOB%2FhMpgXAI6thtYwTIf81%2FWmtesEjGzQl5hyiasM%2F%2B769Xbpkrwjf0mIX11oQ0CYohakSbN0pjTnszN9aniM5itLSScl7cLY10hzgcyfGSzotgyl3mScOC%2Byzgns7loeM2WXwW%2BKmJcQzHvHitSxnnM24%2FU7ywSFTJ85ZrbN8RCIzc4bFCv9EExRdo3ce1%2B%2BY7O9N16zdU4m83dY1PiSwloQFkWB3%2BC%2FJPLQMBLrbXG3DOBhMHUDbF9QEUeBaorUyyC7EWIs7bgpkQowz4P0vQY6pgFjgi71cA6a97vI2cdneBgpG5ncz2k22yoM0QBmFstpiSOCcRs9zzFmZaILraLK5Lfsq98V%2Fk1EwQkQdzmKagxmSw4lerArcCNYium2gGRJXuZBjmzhs9seUv8yyCegrlt1hMAmbgwAZ9LBF1NinR2V2kqUh5Z%2Fna%2BHwiXV0JDexncen7K0XF80VXcFf1SVmWuia5j%2B6wcaXP23Jw9ugQHR7dnDk83K&X-Amz-Signature=f4bc20d2824a29e6499d0e95869e663f928bae81c7f99d2bdba898a2582a8957&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLD6A3GY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGsG%2F6pX%2BlaVZ1yltDFjS4VmRu9uN3ipuDJp%2FjP4Mh%2BOAiA5BZnkL2Ep18jDJzUceJ1ddSGBWvZdXqxTXJ%2FfYYu7Mir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMpz3sWJhLZ0V3PIvbKtwDIqBefZZbuTXDmgWPCg0uB33HpYBVrP3eAswZ5HFQTHBMUY8Ak1f6FOsXSCW1g1baqzCDJuwSP75DB6qZ1AvRQztfL9NSlMCs8t0ORNKdwfxcJxUdxgfPOXfPpucXH0nIfjbTb91xbq2KbZazeCeVblDDGm7%2FpqVq58TE%2BKrIKwA6pTMqo4Bn6CL74OO5QZfTfKzoh3mJpmoTNzTItxpyjvbd28YSUtNHx38%2F3SG3qtxRVXHbb7eb1bckuFLYCLkkUEtE%2Bysdeb1LYSq0l580X5NK7Tpqpt%2BURNp0v8hhU89tOEmNJuqDzM%2BcHjnVrc3JvzB4ZIKWXdHEIjXNe3%2FGk1j%2FazOPzFpdZEkjuVbbvHvjOB%2FhMpgXAI6thtYwTIf81%2FWmtesEjGzQl5hyiasM%2F%2B769Xbpkrwjf0mIX11oQ0CYohakSbN0pjTnszN9aniM5itLSScl7cLY10hzgcyfGSzotgyl3mScOC%2Byzgns7loeM2WXwW%2BKmJcQzHvHitSxnnM24%2FU7ywSFTJ85ZrbN8RCIzc4bFCv9EExRdo3ce1%2B%2BY7O9N16zdU4m83dY1PiSwloQFkWB3%2BC%2FJPLQMBLrbXG3DOBhMHUDbF9QEUeBaorUyyC7EWIs7bgpkQowz4P0vQY6pgFjgi71cA6a97vI2cdneBgpG5ncz2k22yoM0QBmFstpiSOCcRs9zzFmZaILraLK5Lfsq98V%2Fk1EwQkQdzmKagxmSw4lerArcCNYium2gGRJXuZBjmzhs9seUv8yyCegrlt1hMAmbgwAZ9LBF1NinR2V2kqUh5Z%2Fna%2BHwiXV0JDexncen7K0XF80VXcFf1SVmWuia5j%2B6wcaXP23Jw9ugQHR7dnDk83K&X-Amz-Signature=05d7d9ebbd60e8350105ee9fcbd8bf6c655e0e261bd90c508cb19b63f8a96466&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLD6A3GY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGsG%2F6pX%2BlaVZ1yltDFjS4VmRu9uN3ipuDJp%2FjP4Mh%2BOAiA5BZnkL2Ep18jDJzUceJ1ddSGBWvZdXqxTXJ%2FfYYu7Mir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMpz3sWJhLZ0V3PIvbKtwDIqBefZZbuTXDmgWPCg0uB33HpYBVrP3eAswZ5HFQTHBMUY8Ak1f6FOsXSCW1g1baqzCDJuwSP75DB6qZ1AvRQztfL9NSlMCs8t0ORNKdwfxcJxUdxgfPOXfPpucXH0nIfjbTb91xbq2KbZazeCeVblDDGm7%2FpqVq58TE%2BKrIKwA6pTMqo4Bn6CL74OO5QZfTfKzoh3mJpmoTNzTItxpyjvbd28YSUtNHx38%2F3SG3qtxRVXHbb7eb1bckuFLYCLkkUEtE%2Bysdeb1LYSq0l580X5NK7Tpqpt%2BURNp0v8hhU89tOEmNJuqDzM%2BcHjnVrc3JvzB4ZIKWXdHEIjXNe3%2FGk1j%2FazOPzFpdZEkjuVbbvHvjOB%2FhMpgXAI6thtYwTIf81%2FWmtesEjGzQl5hyiasM%2F%2B769Xbpkrwjf0mIX11oQ0CYohakSbN0pjTnszN9aniM5itLSScl7cLY10hzgcyfGSzotgyl3mScOC%2Byzgns7loeM2WXwW%2BKmJcQzHvHitSxnnM24%2FU7ywSFTJ85ZrbN8RCIzc4bFCv9EExRdo3ce1%2B%2BY7O9N16zdU4m83dY1PiSwloQFkWB3%2BC%2FJPLQMBLrbXG3DOBhMHUDbF9QEUeBaorUyyC7EWIs7bgpkQowz4P0vQY6pgFjgi71cA6a97vI2cdneBgpG5ncz2k22yoM0QBmFstpiSOCcRs9zzFmZaILraLK5Lfsq98V%2Fk1EwQkQdzmKagxmSw4lerArcCNYium2gGRJXuZBjmzhs9seUv8yyCegrlt1hMAmbgwAZ9LBF1NinR2V2kqUh5Z%2Fna%2BHwiXV0JDexncen7K0XF80VXcFf1SVmWuia5j%2B6wcaXP23Jw9ugQHR7dnDk83K&X-Amz-Signature=7916504869342d5004bdbe4cba00c9b015d60b640c0b583dde9fd704af8d7568&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLD6A3GY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGsG%2F6pX%2BlaVZ1yltDFjS4VmRu9uN3ipuDJp%2FjP4Mh%2BOAiA5BZnkL2Ep18jDJzUceJ1ddSGBWvZdXqxTXJ%2FfYYu7Mir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMpz3sWJhLZ0V3PIvbKtwDIqBefZZbuTXDmgWPCg0uB33HpYBVrP3eAswZ5HFQTHBMUY8Ak1f6FOsXSCW1g1baqzCDJuwSP75DB6qZ1AvRQztfL9NSlMCs8t0ORNKdwfxcJxUdxgfPOXfPpucXH0nIfjbTb91xbq2KbZazeCeVblDDGm7%2FpqVq58TE%2BKrIKwA6pTMqo4Bn6CL74OO5QZfTfKzoh3mJpmoTNzTItxpyjvbd28YSUtNHx38%2F3SG3qtxRVXHbb7eb1bckuFLYCLkkUEtE%2Bysdeb1LYSq0l580X5NK7Tpqpt%2BURNp0v8hhU89tOEmNJuqDzM%2BcHjnVrc3JvzB4ZIKWXdHEIjXNe3%2FGk1j%2FazOPzFpdZEkjuVbbvHvjOB%2FhMpgXAI6thtYwTIf81%2FWmtesEjGzQl5hyiasM%2F%2B769Xbpkrwjf0mIX11oQ0CYohakSbN0pjTnszN9aniM5itLSScl7cLY10hzgcyfGSzotgyl3mScOC%2Byzgns7loeM2WXwW%2BKmJcQzHvHitSxnnM24%2FU7ywSFTJ85ZrbN8RCIzc4bFCv9EExRdo3ce1%2B%2BY7O9N16zdU4m83dY1PiSwloQFkWB3%2BC%2FJPLQMBLrbXG3DOBhMHUDbF9QEUeBaorUyyC7EWIs7bgpkQowz4P0vQY6pgFjgi71cA6a97vI2cdneBgpG5ncz2k22yoM0QBmFstpiSOCcRs9zzFmZaILraLK5Lfsq98V%2Fk1EwQkQdzmKagxmSw4lerArcCNYium2gGRJXuZBjmzhs9seUv8yyCegrlt1hMAmbgwAZ9LBF1NinR2V2kqUh5Z%2Fna%2BHwiXV0JDexncen7K0XF80VXcFf1SVmWuia5j%2B6wcaXP23Jw9ugQHR7dnDk83K&X-Amz-Signature=4422d477ca6cea7c8da2e276811eadba21b4cef845e6507df93d0c98e0df36eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLD6A3GY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGsG%2F6pX%2BlaVZ1yltDFjS4VmRu9uN3ipuDJp%2FjP4Mh%2BOAiA5BZnkL2Ep18jDJzUceJ1ddSGBWvZdXqxTXJ%2FfYYu7Mir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMpz3sWJhLZ0V3PIvbKtwDIqBefZZbuTXDmgWPCg0uB33HpYBVrP3eAswZ5HFQTHBMUY8Ak1f6FOsXSCW1g1baqzCDJuwSP75DB6qZ1AvRQztfL9NSlMCs8t0ORNKdwfxcJxUdxgfPOXfPpucXH0nIfjbTb91xbq2KbZazeCeVblDDGm7%2FpqVq58TE%2BKrIKwA6pTMqo4Bn6CL74OO5QZfTfKzoh3mJpmoTNzTItxpyjvbd28YSUtNHx38%2F3SG3qtxRVXHbb7eb1bckuFLYCLkkUEtE%2Bysdeb1LYSq0l580X5NK7Tpqpt%2BURNp0v8hhU89tOEmNJuqDzM%2BcHjnVrc3JvzB4ZIKWXdHEIjXNe3%2FGk1j%2FazOPzFpdZEkjuVbbvHvjOB%2FhMpgXAI6thtYwTIf81%2FWmtesEjGzQl5hyiasM%2F%2B769Xbpkrwjf0mIX11oQ0CYohakSbN0pjTnszN9aniM5itLSScl7cLY10hzgcyfGSzotgyl3mScOC%2Byzgns7loeM2WXwW%2BKmJcQzHvHitSxnnM24%2FU7ywSFTJ85ZrbN8RCIzc4bFCv9EExRdo3ce1%2B%2BY7O9N16zdU4m83dY1PiSwloQFkWB3%2BC%2FJPLQMBLrbXG3DOBhMHUDbF9QEUeBaorUyyC7EWIs7bgpkQowz4P0vQY6pgFjgi71cA6a97vI2cdneBgpG5ncz2k22yoM0QBmFstpiSOCcRs9zzFmZaILraLK5Lfsq98V%2Fk1EwQkQdzmKagxmSw4lerArcCNYium2gGRJXuZBjmzhs9seUv8yyCegrlt1hMAmbgwAZ9LBF1NinR2V2kqUh5Z%2Fna%2BHwiXV0JDexncen7K0XF80VXcFf1SVmWuia5j%2B6wcaXP23Jw9ugQHR7dnDk83K&X-Amz-Signature=d8bf98b3a065b2fa10b2cc3db9bd96e1c48a909701ef752cb44f953a1973fe38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLD6A3GY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGsG%2F6pX%2BlaVZ1yltDFjS4VmRu9uN3ipuDJp%2FjP4Mh%2BOAiA5BZnkL2Ep18jDJzUceJ1ddSGBWvZdXqxTXJ%2FfYYu7Mir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMpz3sWJhLZ0V3PIvbKtwDIqBefZZbuTXDmgWPCg0uB33HpYBVrP3eAswZ5HFQTHBMUY8Ak1f6FOsXSCW1g1baqzCDJuwSP75DB6qZ1AvRQztfL9NSlMCs8t0ORNKdwfxcJxUdxgfPOXfPpucXH0nIfjbTb91xbq2KbZazeCeVblDDGm7%2FpqVq58TE%2BKrIKwA6pTMqo4Bn6CL74OO5QZfTfKzoh3mJpmoTNzTItxpyjvbd28YSUtNHx38%2F3SG3qtxRVXHbb7eb1bckuFLYCLkkUEtE%2Bysdeb1LYSq0l580X5NK7Tpqpt%2BURNp0v8hhU89tOEmNJuqDzM%2BcHjnVrc3JvzB4ZIKWXdHEIjXNe3%2FGk1j%2FazOPzFpdZEkjuVbbvHvjOB%2FhMpgXAI6thtYwTIf81%2FWmtesEjGzQl5hyiasM%2F%2B769Xbpkrwjf0mIX11oQ0CYohakSbN0pjTnszN9aniM5itLSScl7cLY10hzgcyfGSzotgyl3mScOC%2Byzgns7loeM2WXwW%2BKmJcQzHvHitSxnnM24%2FU7ywSFTJ85ZrbN8RCIzc4bFCv9EExRdo3ce1%2B%2BY7O9N16zdU4m83dY1PiSwloQFkWB3%2BC%2FJPLQMBLrbXG3DOBhMHUDbF9QEUeBaorUyyC7EWIs7bgpkQowz4P0vQY6pgFjgi71cA6a97vI2cdneBgpG5ncz2k22yoM0QBmFstpiSOCcRs9zzFmZaILraLK5Lfsq98V%2Fk1EwQkQdzmKagxmSw4lerArcCNYium2gGRJXuZBjmzhs9seUv8yyCegrlt1hMAmbgwAZ9LBF1NinR2V2kqUh5Z%2Fna%2BHwiXV0JDexncen7K0XF80VXcFf1SVmWuia5j%2B6wcaXP23Jw9ugQHR7dnDk83K&X-Amz-Signature=09ab410dce2ae3fe7bad9d163ce9ebace2d431b904d7803fbc283e0a14a3b63e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
