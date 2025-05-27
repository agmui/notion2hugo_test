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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UZDBEE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjRzXpj9wBxFTiVGVP338rBt8s%2FFSnWk66%2Fpl8cGBzfAiEAxtg566bSrUU5ok5WhIFJY2No9baBhPCQUQVi4pxp3jgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDC5z1KRkAYqABFwkCrcA28%2B8jDwRgnh65EZ63aFEW%2BTjL6caNOALqMgE0wrBdW8fu2AS2k7I%2FlG4TIAF0dA2jcZxLIw3Co0hDRf1SbCRg0QzOskK%2FsmMu9mlbsAaiAT30h23%2BDd2zThtF69VO6VESmRIQH7j3zSyiAq0Z6Y34ra3ko9XiCcHjbI%2BDxnoMKM5qIR62E8ga6K21LVhxif%2FJYMCaEg8toPJQlNev%2BNJpRYX94LJO6McwS3B1RUBtaWCQPHWJOakzmTtwYjNE2x1%2FWkQZ3m%2Fkvf4J%2F%2BgQZT4UDqI3JdI7FTntTAm1O5Y1UeGp%2F6pGaXO1hL%2B72SzSFx%2F5DzlXdMTWFr%2F%2F5piUIxR79JnAxPtegsDI7%2B1oOoKLMIVK7NwWDvNcG2nOFQaBzQSsKoIvVdvH4Cyk2CnRoWtf%2BL7PGYJBN9vJhL2TlT5Ho0Ol0jW88IQEk2dCH2dUNo6MhRXV2WqQ5h10cMJz2kzHjqCJm8x6N6W7RPalrwysCYQpHUDp0Am5CH4ULOf6uYF9f4qsz9xY05g3yKarh30kisRScuC%2BIvPDdI0uB7kQ2C4RoHmy23LOm%2FUZPvsTlA0ZWU0762j3KeglMZwNXfmG86agiF%2FA6KJpiGU5mmg9m2hzcNzsjDl5UaNxUfMIn42MEGOqUB5PX2VuQRdbR42rTfTabPdpZtxXElbX%2FjQ7KlZpLZwMKT93DFPgESx4EFVdS8J2TunlfXWk0pcwfsvpoYVwinSJVwtQNXD70x8vV%2BUe9dAOalSVUkTcg50bMLx6tcEKyP4lM9%2B7KdJgk0WS0aU5nYnbMyljN7bCLSLYI2Cg8QkXXDWIhzfzPnBvZf4dDl7Y0WNgrUgUxz5S3jPXkQ8dlt6FZ7%2B0Po&X-Amz-Signature=021627aba223ac06f3c36bf789b3102a9e4c8ac99ba3c1ee64a09205c3b9cfa8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UZDBEE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjRzXpj9wBxFTiVGVP338rBt8s%2FFSnWk66%2Fpl8cGBzfAiEAxtg566bSrUU5ok5WhIFJY2No9baBhPCQUQVi4pxp3jgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDC5z1KRkAYqABFwkCrcA28%2B8jDwRgnh65EZ63aFEW%2BTjL6caNOALqMgE0wrBdW8fu2AS2k7I%2FlG4TIAF0dA2jcZxLIw3Co0hDRf1SbCRg0QzOskK%2FsmMu9mlbsAaiAT30h23%2BDd2zThtF69VO6VESmRIQH7j3zSyiAq0Z6Y34ra3ko9XiCcHjbI%2BDxnoMKM5qIR62E8ga6K21LVhxif%2FJYMCaEg8toPJQlNev%2BNJpRYX94LJO6McwS3B1RUBtaWCQPHWJOakzmTtwYjNE2x1%2FWkQZ3m%2Fkvf4J%2F%2BgQZT4UDqI3JdI7FTntTAm1O5Y1UeGp%2F6pGaXO1hL%2B72SzSFx%2F5DzlXdMTWFr%2F%2F5piUIxR79JnAxPtegsDI7%2B1oOoKLMIVK7NwWDvNcG2nOFQaBzQSsKoIvVdvH4Cyk2CnRoWtf%2BL7PGYJBN9vJhL2TlT5Ho0Ol0jW88IQEk2dCH2dUNo6MhRXV2WqQ5h10cMJz2kzHjqCJm8x6N6W7RPalrwysCYQpHUDp0Am5CH4ULOf6uYF9f4qsz9xY05g3yKarh30kisRScuC%2BIvPDdI0uB7kQ2C4RoHmy23LOm%2FUZPvsTlA0ZWU0762j3KeglMZwNXfmG86agiF%2FA6KJpiGU5mmg9m2hzcNzsjDl5UaNxUfMIn42MEGOqUB5PX2VuQRdbR42rTfTabPdpZtxXElbX%2FjQ7KlZpLZwMKT93DFPgESx4EFVdS8J2TunlfXWk0pcwfsvpoYVwinSJVwtQNXD70x8vV%2BUe9dAOalSVUkTcg50bMLx6tcEKyP4lM9%2B7KdJgk0WS0aU5nYnbMyljN7bCLSLYI2Cg8QkXXDWIhzfzPnBvZf4dDl7Y0WNgrUgUxz5S3jPXkQ8dlt6FZ7%2B0Po&X-Amz-Signature=464548b3cefab21ed710e23ea59e78f88609a77316cf42db116e3e493ceba973&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UZDBEE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjRzXpj9wBxFTiVGVP338rBt8s%2FFSnWk66%2Fpl8cGBzfAiEAxtg566bSrUU5ok5WhIFJY2No9baBhPCQUQVi4pxp3jgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDC5z1KRkAYqABFwkCrcA28%2B8jDwRgnh65EZ63aFEW%2BTjL6caNOALqMgE0wrBdW8fu2AS2k7I%2FlG4TIAF0dA2jcZxLIw3Co0hDRf1SbCRg0QzOskK%2FsmMu9mlbsAaiAT30h23%2BDd2zThtF69VO6VESmRIQH7j3zSyiAq0Z6Y34ra3ko9XiCcHjbI%2BDxnoMKM5qIR62E8ga6K21LVhxif%2FJYMCaEg8toPJQlNev%2BNJpRYX94LJO6McwS3B1RUBtaWCQPHWJOakzmTtwYjNE2x1%2FWkQZ3m%2Fkvf4J%2F%2BgQZT4UDqI3JdI7FTntTAm1O5Y1UeGp%2F6pGaXO1hL%2B72SzSFx%2F5DzlXdMTWFr%2F%2F5piUIxR79JnAxPtegsDI7%2B1oOoKLMIVK7NwWDvNcG2nOFQaBzQSsKoIvVdvH4Cyk2CnRoWtf%2BL7PGYJBN9vJhL2TlT5Ho0Ol0jW88IQEk2dCH2dUNo6MhRXV2WqQ5h10cMJz2kzHjqCJm8x6N6W7RPalrwysCYQpHUDp0Am5CH4ULOf6uYF9f4qsz9xY05g3yKarh30kisRScuC%2BIvPDdI0uB7kQ2C4RoHmy23LOm%2FUZPvsTlA0ZWU0762j3KeglMZwNXfmG86agiF%2FA6KJpiGU5mmg9m2hzcNzsjDl5UaNxUfMIn42MEGOqUB5PX2VuQRdbR42rTfTabPdpZtxXElbX%2FjQ7KlZpLZwMKT93DFPgESx4EFVdS8J2TunlfXWk0pcwfsvpoYVwinSJVwtQNXD70x8vV%2BUe9dAOalSVUkTcg50bMLx6tcEKyP4lM9%2B7KdJgk0WS0aU5nYnbMyljN7bCLSLYI2Cg8QkXXDWIhzfzPnBvZf4dDl7Y0WNgrUgUxz5S3jPXkQ8dlt6FZ7%2B0Po&X-Amz-Signature=997228cd7f31166b33f67ec77b20cb81f9114e2c11942b372f781881519c02cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UZDBEE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjRzXpj9wBxFTiVGVP338rBt8s%2FFSnWk66%2Fpl8cGBzfAiEAxtg566bSrUU5ok5WhIFJY2No9baBhPCQUQVi4pxp3jgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDC5z1KRkAYqABFwkCrcA28%2B8jDwRgnh65EZ63aFEW%2BTjL6caNOALqMgE0wrBdW8fu2AS2k7I%2FlG4TIAF0dA2jcZxLIw3Co0hDRf1SbCRg0QzOskK%2FsmMu9mlbsAaiAT30h23%2BDd2zThtF69VO6VESmRIQH7j3zSyiAq0Z6Y34ra3ko9XiCcHjbI%2BDxnoMKM5qIR62E8ga6K21LVhxif%2FJYMCaEg8toPJQlNev%2BNJpRYX94LJO6McwS3B1RUBtaWCQPHWJOakzmTtwYjNE2x1%2FWkQZ3m%2Fkvf4J%2F%2BgQZT4UDqI3JdI7FTntTAm1O5Y1UeGp%2F6pGaXO1hL%2B72SzSFx%2F5DzlXdMTWFr%2F%2F5piUIxR79JnAxPtegsDI7%2B1oOoKLMIVK7NwWDvNcG2nOFQaBzQSsKoIvVdvH4Cyk2CnRoWtf%2BL7PGYJBN9vJhL2TlT5Ho0Ol0jW88IQEk2dCH2dUNo6MhRXV2WqQ5h10cMJz2kzHjqCJm8x6N6W7RPalrwysCYQpHUDp0Am5CH4ULOf6uYF9f4qsz9xY05g3yKarh30kisRScuC%2BIvPDdI0uB7kQ2C4RoHmy23LOm%2FUZPvsTlA0ZWU0762j3KeglMZwNXfmG86agiF%2FA6KJpiGU5mmg9m2hzcNzsjDl5UaNxUfMIn42MEGOqUB5PX2VuQRdbR42rTfTabPdpZtxXElbX%2FjQ7KlZpLZwMKT93DFPgESx4EFVdS8J2TunlfXWk0pcwfsvpoYVwinSJVwtQNXD70x8vV%2BUe9dAOalSVUkTcg50bMLx6tcEKyP4lM9%2B7KdJgk0WS0aU5nYnbMyljN7bCLSLYI2Cg8QkXXDWIhzfzPnBvZf4dDl7Y0WNgrUgUxz5S3jPXkQ8dlt6FZ7%2B0Po&X-Amz-Signature=fd1218d95799d523178d842ddcdd5730a5a762ab6bde9f47aad694658af336f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UZDBEE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjRzXpj9wBxFTiVGVP338rBt8s%2FFSnWk66%2Fpl8cGBzfAiEAxtg566bSrUU5ok5WhIFJY2No9baBhPCQUQVi4pxp3jgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDC5z1KRkAYqABFwkCrcA28%2B8jDwRgnh65EZ63aFEW%2BTjL6caNOALqMgE0wrBdW8fu2AS2k7I%2FlG4TIAF0dA2jcZxLIw3Co0hDRf1SbCRg0QzOskK%2FsmMu9mlbsAaiAT30h23%2BDd2zThtF69VO6VESmRIQH7j3zSyiAq0Z6Y34ra3ko9XiCcHjbI%2BDxnoMKM5qIR62E8ga6K21LVhxif%2FJYMCaEg8toPJQlNev%2BNJpRYX94LJO6McwS3B1RUBtaWCQPHWJOakzmTtwYjNE2x1%2FWkQZ3m%2Fkvf4J%2F%2BgQZT4UDqI3JdI7FTntTAm1O5Y1UeGp%2F6pGaXO1hL%2B72SzSFx%2F5DzlXdMTWFr%2F%2F5piUIxR79JnAxPtegsDI7%2B1oOoKLMIVK7NwWDvNcG2nOFQaBzQSsKoIvVdvH4Cyk2CnRoWtf%2BL7PGYJBN9vJhL2TlT5Ho0Ol0jW88IQEk2dCH2dUNo6MhRXV2WqQ5h10cMJz2kzHjqCJm8x6N6W7RPalrwysCYQpHUDp0Am5CH4ULOf6uYF9f4qsz9xY05g3yKarh30kisRScuC%2BIvPDdI0uB7kQ2C4RoHmy23LOm%2FUZPvsTlA0ZWU0762j3KeglMZwNXfmG86agiF%2FA6KJpiGU5mmg9m2hzcNzsjDl5UaNxUfMIn42MEGOqUB5PX2VuQRdbR42rTfTabPdpZtxXElbX%2FjQ7KlZpLZwMKT93DFPgESx4EFVdS8J2TunlfXWk0pcwfsvpoYVwinSJVwtQNXD70x8vV%2BUe9dAOalSVUkTcg50bMLx6tcEKyP4lM9%2B7KdJgk0WS0aU5nYnbMyljN7bCLSLYI2Cg8QkXXDWIhzfzPnBvZf4dDl7Y0WNgrUgUxz5S3jPXkQ8dlt6FZ7%2B0Po&X-Amz-Signature=cc3cd126d0f4eac8a6e65231fe9e6bd5da8aa830e62f093860d4e2d1f90b23f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UZDBEE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjRzXpj9wBxFTiVGVP338rBt8s%2FFSnWk66%2Fpl8cGBzfAiEAxtg566bSrUU5ok5WhIFJY2No9baBhPCQUQVi4pxp3jgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDC5z1KRkAYqABFwkCrcA28%2B8jDwRgnh65EZ63aFEW%2BTjL6caNOALqMgE0wrBdW8fu2AS2k7I%2FlG4TIAF0dA2jcZxLIw3Co0hDRf1SbCRg0QzOskK%2FsmMu9mlbsAaiAT30h23%2BDd2zThtF69VO6VESmRIQH7j3zSyiAq0Z6Y34ra3ko9XiCcHjbI%2BDxnoMKM5qIR62E8ga6K21LVhxif%2FJYMCaEg8toPJQlNev%2BNJpRYX94LJO6McwS3B1RUBtaWCQPHWJOakzmTtwYjNE2x1%2FWkQZ3m%2Fkvf4J%2F%2BgQZT4UDqI3JdI7FTntTAm1O5Y1UeGp%2F6pGaXO1hL%2B72SzSFx%2F5DzlXdMTWFr%2F%2F5piUIxR79JnAxPtegsDI7%2B1oOoKLMIVK7NwWDvNcG2nOFQaBzQSsKoIvVdvH4Cyk2CnRoWtf%2BL7PGYJBN9vJhL2TlT5Ho0Ol0jW88IQEk2dCH2dUNo6MhRXV2WqQ5h10cMJz2kzHjqCJm8x6N6W7RPalrwysCYQpHUDp0Am5CH4ULOf6uYF9f4qsz9xY05g3yKarh30kisRScuC%2BIvPDdI0uB7kQ2C4RoHmy23LOm%2FUZPvsTlA0ZWU0762j3KeglMZwNXfmG86agiF%2FA6KJpiGU5mmg9m2hzcNzsjDl5UaNxUfMIn42MEGOqUB5PX2VuQRdbR42rTfTabPdpZtxXElbX%2FjQ7KlZpLZwMKT93DFPgESx4EFVdS8J2TunlfXWk0pcwfsvpoYVwinSJVwtQNXD70x8vV%2BUe9dAOalSVUkTcg50bMLx6tcEKyP4lM9%2B7KdJgk0WS0aU5nYnbMyljN7bCLSLYI2Cg8QkXXDWIhzfzPnBvZf4dDl7Y0WNgrUgUxz5S3jPXkQ8dlt6FZ7%2B0Po&X-Amz-Signature=bcbc5f6623f59d9fd988bd57f9f0872bd865d18ba91a4e7827ccd5f6918acc7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UZDBEE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjRzXpj9wBxFTiVGVP338rBt8s%2FFSnWk66%2Fpl8cGBzfAiEAxtg566bSrUU5ok5WhIFJY2No9baBhPCQUQVi4pxp3jgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDC5z1KRkAYqABFwkCrcA28%2B8jDwRgnh65EZ63aFEW%2BTjL6caNOALqMgE0wrBdW8fu2AS2k7I%2FlG4TIAF0dA2jcZxLIw3Co0hDRf1SbCRg0QzOskK%2FsmMu9mlbsAaiAT30h23%2BDd2zThtF69VO6VESmRIQH7j3zSyiAq0Z6Y34ra3ko9XiCcHjbI%2BDxnoMKM5qIR62E8ga6K21LVhxif%2FJYMCaEg8toPJQlNev%2BNJpRYX94LJO6McwS3B1RUBtaWCQPHWJOakzmTtwYjNE2x1%2FWkQZ3m%2Fkvf4J%2F%2BgQZT4UDqI3JdI7FTntTAm1O5Y1UeGp%2F6pGaXO1hL%2B72SzSFx%2F5DzlXdMTWFr%2F%2F5piUIxR79JnAxPtegsDI7%2B1oOoKLMIVK7NwWDvNcG2nOFQaBzQSsKoIvVdvH4Cyk2CnRoWtf%2BL7PGYJBN9vJhL2TlT5Ho0Ol0jW88IQEk2dCH2dUNo6MhRXV2WqQ5h10cMJz2kzHjqCJm8x6N6W7RPalrwysCYQpHUDp0Am5CH4ULOf6uYF9f4qsz9xY05g3yKarh30kisRScuC%2BIvPDdI0uB7kQ2C4RoHmy23LOm%2FUZPvsTlA0ZWU0762j3KeglMZwNXfmG86agiF%2FA6KJpiGU5mmg9m2hzcNzsjDl5UaNxUfMIn42MEGOqUB5PX2VuQRdbR42rTfTabPdpZtxXElbX%2FjQ7KlZpLZwMKT93DFPgESx4EFVdS8J2TunlfXWk0pcwfsvpoYVwinSJVwtQNXD70x8vV%2BUe9dAOalSVUkTcg50bMLx6tcEKyP4lM9%2B7KdJgk0WS0aU5nYnbMyljN7bCLSLYI2Cg8QkXXDWIhzfzPnBvZf4dDl7Y0WNgrUgUxz5S3jPXkQ8dlt6FZ7%2B0Po&X-Amz-Signature=818e4de16ce062b10e82a54af8d7ee8f0cd9207db097bcd4953695082b9fb204&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653UZDBEE%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjRzXpj9wBxFTiVGVP338rBt8s%2FFSnWk66%2Fpl8cGBzfAiEAxtg566bSrUU5ok5WhIFJY2No9baBhPCQUQVi4pxp3jgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDC5z1KRkAYqABFwkCrcA28%2B8jDwRgnh65EZ63aFEW%2BTjL6caNOALqMgE0wrBdW8fu2AS2k7I%2FlG4TIAF0dA2jcZxLIw3Co0hDRf1SbCRg0QzOskK%2FsmMu9mlbsAaiAT30h23%2BDd2zThtF69VO6VESmRIQH7j3zSyiAq0Z6Y34ra3ko9XiCcHjbI%2BDxnoMKM5qIR62E8ga6K21LVhxif%2FJYMCaEg8toPJQlNev%2BNJpRYX94LJO6McwS3B1RUBtaWCQPHWJOakzmTtwYjNE2x1%2FWkQZ3m%2Fkvf4J%2F%2BgQZT4UDqI3JdI7FTntTAm1O5Y1UeGp%2F6pGaXO1hL%2B72SzSFx%2F5DzlXdMTWFr%2F%2F5piUIxR79JnAxPtegsDI7%2B1oOoKLMIVK7NwWDvNcG2nOFQaBzQSsKoIvVdvH4Cyk2CnRoWtf%2BL7PGYJBN9vJhL2TlT5Ho0Ol0jW88IQEk2dCH2dUNo6MhRXV2WqQ5h10cMJz2kzHjqCJm8x6N6W7RPalrwysCYQpHUDp0Am5CH4ULOf6uYF9f4qsz9xY05g3yKarh30kisRScuC%2BIvPDdI0uB7kQ2C4RoHmy23LOm%2FUZPvsTlA0ZWU0762j3KeglMZwNXfmG86agiF%2FA6KJpiGU5mmg9m2hzcNzsjDl5UaNxUfMIn42MEGOqUB5PX2VuQRdbR42rTfTabPdpZtxXElbX%2FjQ7KlZpLZwMKT93DFPgESx4EFVdS8J2TunlfXWk0pcwfsvpoYVwinSJVwtQNXD70x8vV%2BUe9dAOalSVUkTcg50bMLx6tcEKyP4lM9%2B7KdJgk0WS0aU5nYnbMyljN7bCLSLYI2Cg8QkXXDWIhzfzPnBvZf4dDl7Y0WNgrUgUxz5S3jPXkQ8dlt6FZ7%2B0Po&X-Amz-Signature=9792aa474a0bab88489eadc668dd81fd037308340727c1efb60b39a6522c087c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
