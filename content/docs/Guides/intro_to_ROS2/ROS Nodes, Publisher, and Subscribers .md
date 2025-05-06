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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRON4LBA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3MTCoEKL9MSQqwkE0uSA0baMzXmkg1Z8s0Un5ZRGtWAiEAh6BEsyOTbc%2FMbAOHDe1c3frxaTGGFRqLZsyXTMwUnFEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAwwtZ5qDWhe1xByVSrcA5gSmubsfQ2GxSEg3yLWiAQPhJ%2BZdKW3aleEO3mvRNthMSj%2Fn0HKxy5b8s4%2Bs1CzH6ZEl720o8Glw4bo5SgFotbo%2BGDqMqjJd5NFl4ZyuldtYsje6AtMgpVCGucT%2By9yJCukxAY7g4zv5myh%2FGJpIpKCjsjc46IUh414YwQiwnP9mq0QHno6%2B9Mtqu9%2F%2FhlXt0kjqLGwqYxBMHzeUS5DKjJ6O02Wo7nhLMfl%2BFt4tF86V%2B4lrp9mmF4Uafp5ca3isQ81MURHyoMr2es6PZESRihV53ExYeKyL0TNYH7xCvPHpe3g5RrIX5BtRuMm6OK48NgBPZP%2F6uswnXQIk1kYgTTIXB6uywjShRbrcN1nAy4nflvIwh2jC2PUYR7u%2FoWtiiGlBcVOVV2X9IUtjs497%2FhgyW7e6VKN%2FGmY6XPJodSlpL6IA5%2F4dGRPfK7ttC42TrEN7MVq%2BZQcrAnXLDlqeXMuymlK87M5HQ5KNiw6Q6FrnJO7FIjDE8kjoSMgG%2Be20KeicIMZxotEhDgx2oMzdK%2BGW2OZ5zNXWpcMbAmt3RY0yx%2Bf50qGVAQdY%2BlsuRY6WgBZO1y7Zx7McPEsGY5FMOq0ocY2WbJkWah2Aol4%2BA1%2B7d%2Fmg1WH6MGEdodPMMvB58AGOqUBlCjH7gaC3W%2BuSuVbqaqPo5yVlJGW0z6n6lP9gyqxbO2z7Y8%2FeyC0xmQEPQOxw0ld%2FUyFmAQWTkJhFiA5dUVSeOwrC1SKQ3sEeY9QFjYgV7Ap8JpBRp3Vx4T21r36n6kbnLXWqkXZLThRKzaVayvq7E%2FpuncOWaIzAvvO%2B%2FX9CC%2FwnR%2B%2FAdXPuT4hpS7C9HXayF1RqBQmrKbz1BsQjrdfkDwpCpl%2B&X-Amz-Signature=b7703bdc401af662e0c1a497a615974624af9d7db4da3ac8246d59ca2f8d5e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRON4LBA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3MTCoEKL9MSQqwkE0uSA0baMzXmkg1Z8s0Un5ZRGtWAiEAh6BEsyOTbc%2FMbAOHDe1c3frxaTGGFRqLZsyXTMwUnFEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAwwtZ5qDWhe1xByVSrcA5gSmubsfQ2GxSEg3yLWiAQPhJ%2BZdKW3aleEO3mvRNthMSj%2Fn0HKxy5b8s4%2Bs1CzH6ZEl720o8Glw4bo5SgFotbo%2BGDqMqjJd5NFl4ZyuldtYsje6AtMgpVCGucT%2By9yJCukxAY7g4zv5myh%2FGJpIpKCjsjc46IUh414YwQiwnP9mq0QHno6%2B9Mtqu9%2F%2FhlXt0kjqLGwqYxBMHzeUS5DKjJ6O02Wo7nhLMfl%2BFt4tF86V%2B4lrp9mmF4Uafp5ca3isQ81MURHyoMr2es6PZESRihV53ExYeKyL0TNYH7xCvPHpe3g5RrIX5BtRuMm6OK48NgBPZP%2F6uswnXQIk1kYgTTIXB6uywjShRbrcN1nAy4nflvIwh2jC2PUYR7u%2FoWtiiGlBcVOVV2X9IUtjs497%2FhgyW7e6VKN%2FGmY6XPJodSlpL6IA5%2F4dGRPfK7ttC42TrEN7MVq%2BZQcrAnXLDlqeXMuymlK87M5HQ5KNiw6Q6FrnJO7FIjDE8kjoSMgG%2Be20KeicIMZxotEhDgx2oMzdK%2BGW2OZ5zNXWpcMbAmt3RY0yx%2Bf50qGVAQdY%2BlsuRY6WgBZO1y7Zx7McPEsGY5FMOq0ocY2WbJkWah2Aol4%2BA1%2B7d%2Fmg1WH6MGEdodPMMvB58AGOqUBlCjH7gaC3W%2BuSuVbqaqPo5yVlJGW0z6n6lP9gyqxbO2z7Y8%2FeyC0xmQEPQOxw0ld%2FUyFmAQWTkJhFiA5dUVSeOwrC1SKQ3sEeY9QFjYgV7Ap8JpBRp3Vx4T21r36n6kbnLXWqkXZLThRKzaVayvq7E%2FpuncOWaIzAvvO%2B%2FX9CC%2FwnR%2B%2FAdXPuT4hpS7C9HXayF1RqBQmrKbz1BsQjrdfkDwpCpl%2B&X-Amz-Signature=ea92d9c204b7f7d095eed34ac132406989d6358c6d1b5a6e42958a696a91cb34&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRON4LBA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3MTCoEKL9MSQqwkE0uSA0baMzXmkg1Z8s0Un5ZRGtWAiEAh6BEsyOTbc%2FMbAOHDe1c3frxaTGGFRqLZsyXTMwUnFEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAwwtZ5qDWhe1xByVSrcA5gSmubsfQ2GxSEg3yLWiAQPhJ%2BZdKW3aleEO3mvRNthMSj%2Fn0HKxy5b8s4%2Bs1CzH6ZEl720o8Glw4bo5SgFotbo%2BGDqMqjJd5NFl4ZyuldtYsje6AtMgpVCGucT%2By9yJCukxAY7g4zv5myh%2FGJpIpKCjsjc46IUh414YwQiwnP9mq0QHno6%2B9Mtqu9%2F%2FhlXt0kjqLGwqYxBMHzeUS5DKjJ6O02Wo7nhLMfl%2BFt4tF86V%2B4lrp9mmF4Uafp5ca3isQ81MURHyoMr2es6PZESRihV53ExYeKyL0TNYH7xCvPHpe3g5RrIX5BtRuMm6OK48NgBPZP%2F6uswnXQIk1kYgTTIXB6uywjShRbrcN1nAy4nflvIwh2jC2PUYR7u%2FoWtiiGlBcVOVV2X9IUtjs497%2FhgyW7e6VKN%2FGmY6XPJodSlpL6IA5%2F4dGRPfK7ttC42TrEN7MVq%2BZQcrAnXLDlqeXMuymlK87M5HQ5KNiw6Q6FrnJO7FIjDE8kjoSMgG%2Be20KeicIMZxotEhDgx2oMzdK%2BGW2OZ5zNXWpcMbAmt3RY0yx%2Bf50qGVAQdY%2BlsuRY6WgBZO1y7Zx7McPEsGY5FMOq0ocY2WbJkWah2Aol4%2BA1%2B7d%2Fmg1WH6MGEdodPMMvB58AGOqUBlCjH7gaC3W%2BuSuVbqaqPo5yVlJGW0z6n6lP9gyqxbO2z7Y8%2FeyC0xmQEPQOxw0ld%2FUyFmAQWTkJhFiA5dUVSeOwrC1SKQ3sEeY9QFjYgV7Ap8JpBRp3Vx4T21r36n6kbnLXWqkXZLThRKzaVayvq7E%2FpuncOWaIzAvvO%2B%2FX9CC%2FwnR%2B%2FAdXPuT4hpS7C9HXayF1RqBQmrKbz1BsQjrdfkDwpCpl%2B&X-Amz-Signature=1cf11d0d5225c72f340a315996038b4af5302250987bbef4c91f1dfcdce07498&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRON4LBA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3MTCoEKL9MSQqwkE0uSA0baMzXmkg1Z8s0Un5ZRGtWAiEAh6BEsyOTbc%2FMbAOHDe1c3frxaTGGFRqLZsyXTMwUnFEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAwwtZ5qDWhe1xByVSrcA5gSmubsfQ2GxSEg3yLWiAQPhJ%2BZdKW3aleEO3mvRNthMSj%2Fn0HKxy5b8s4%2Bs1CzH6ZEl720o8Glw4bo5SgFotbo%2BGDqMqjJd5NFl4ZyuldtYsje6AtMgpVCGucT%2By9yJCukxAY7g4zv5myh%2FGJpIpKCjsjc46IUh414YwQiwnP9mq0QHno6%2B9Mtqu9%2F%2FhlXt0kjqLGwqYxBMHzeUS5DKjJ6O02Wo7nhLMfl%2BFt4tF86V%2B4lrp9mmF4Uafp5ca3isQ81MURHyoMr2es6PZESRihV53ExYeKyL0TNYH7xCvPHpe3g5RrIX5BtRuMm6OK48NgBPZP%2F6uswnXQIk1kYgTTIXB6uywjShRbrcN1nAy4nflvIwh2jC2PUYR7u%2FoWtiiGlBcVOVV2X9IUtjs497%2FhgyW7e6VKN%2FGmY6XPJodSlpL6IA5%2F4dGRPfK7ttC42TrEN7MVq%2BZQcrAnXLDlqeXMuymlK87M5HQ5KNiw6Q6FrnJO7FIjDE8kjoSMgG%2Be20KeicIMZxotEhDgx2oMzdK%2BGW2OZ5zNXWpcMbAmt3RY0yx%2Bf50qGVAQdY%2BlsuRY6WgBZO1y7Zx7McPEsGY5FMOq0ocY2WbJkWah2Aol4%2BA1%2B7d%2Fmg1WH6MGEdodPMMvB58AGOqUBlCjH7gaC3W%2BuSuVbqaqPo5yVlJGW0z6n6lP9gyqxbO2z7Y8%2FeyC0xmQEPQOxw0ld%2FUyFmAQWTkJhFiA5dUVSeOwrC1SKQ3sEeY9QFjYgV7Ap8JpBRp3Vx4T21r36n6kbnLXWqkXZLThRKzaVayvq7E%2FpuncOWaIzAvvO%2B%2FX9CC%2FwnR%2B%2FAdXPuT4hpS7C9HXayF1RqBQmrKbz1BsQjrdfkDwpCpl%2B&X-Amz-Signature=b13d27de9e40edb364ea691136d96397f32872ea8a8cc2997b2d12c057bc4c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRON4LBA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3MTCoEKL9MSQqwkE0uSA0baMzXmkg1Z8s0Un5ZRGtWAiEAh6BEsyOTbc%2FMbAOHDe1c3frxaTGGFRqLZsyXTMwUnFEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAwwtZ5qDWhe1xByVSrcA5gSmubsfQ2GxSEg3yLWiAQPhJ%2BZdKW3aleEO3mvRNthMSj%2Fn0HKxy5b8s4%2Bs1CzH6ZEl720o8Glw4bo5SgFotbo%2BGDqMqjJd5NFl4ZyuldtYsje6AtMgpVCGucT%2By9yJCukxAY7g4zv5myh%2FGJpIpKCjsjc46IUh414YwQiwnP9mq0QHno6%2B9Mtqu9%2F%2FhlXt0kjqLGwqYxBMHzeUS5DKjJ6O02Wo7nhLMfl%2BFt4tF86V%2B4lrp9mmF4Uafp5ca3isQ81MURHyoMr2es6PZESRihV53ExYeKyL0TNYH7xCvPHpe3g5RrIX5BtRuMm6OK48NgBPZP%2F6uswnXQIk1kYgTTIXB6uywjShRbrcN1nAy4nflvIwh2jC2PUYR7u%2FoWtiiGlBcVOVV2X9IUtjs497%2FhgyW7e6VKN%2FGmY6XPJodSlpL6IA5%2F4dGRPfK7ttC42TrEN7MVq%2BZQcrAnXLDlqeXMuymlK87M5HQ5KNiw6Q6FrnJO7FIjDE8kjoSMgG%2Be20KeicIMZxotEhDgx2oMzdK%2BGW2OZ5zNXWpcMbAmt3RY0yx%2Bf50qGVAQdY%2BlsuRY6WgBZO1y7Zx7McPEsGY5FMOq0ocY2WbJkWah2Aol4%2BA1%2B7d%2Fmg1WH6MGEdodPMMvB58AGOqUBlCjH7gaC3W%2BuSuVbqaqPo5yVlJGW0z6n6lP9gyqxbO2z7Y8%2FeyC0xmQEPQOxw0ld%2FUyFmAQWTkJhFiA5dUVSeOwrC1SKQ3sEeY9QFjYgV7Ap8JpBRp3Vx4T21r36n6kbnLXWqkXZLThRKzaVayvq7E%2FpuncOWaIzAvvO%2B%2FX9CC%2FwnR%2B%2FAdXPuT4hpS7C9HXayF1RqBQmrKbz1BsQjrdfkDwpCpl%2B&X-Amz-Signature=b1b78d679e32292b59094845f7b145378319e0314b1eac2f4d03b717caf78c83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRON4LBA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3MTCoEKL9MSQqwkE0uSA0baMzXmkg1Z8s0Un5ZRGtWAiEAh6BEsyOTbc%2FMbAOHDe1c3frxaTGGFRqLZsyXTMwUnFEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAwwtZ5qDWhe1xByVSrcA5gSmubsfQ2GxSEg3yLWiAQPhJ%2BZdKW3aleEO3mvRNthMSj%2Fn0HKxy5b8s4%2Bs1CzH6ZEl720o8Glw4bo5SgFotbo%2BGDqMqjJd5NFl4ZyuldtYsje6AtMgpVCGucT%2By9yJCukxAY7g4zv5myh%2FGJpIpKCjsjc46IUh414YwQiwnP9mq0QHno6%2B9Mtqu9%2F%2FhlXt0kjqLGwqYxBMHzeUS5DKjJ6O02Wo7nhLMfl%2BFt4tF86V%2B4lrp9mmF4Uafp5ca3isQ81MURHyoMr2es6PZESRihV53ExYeKyL0TNYH7xCvPHpe3g5RrIX5BtRuMm6OK48NgBPZP%2F6uswnXQIk1kYgTTIXB6uywjShRbrcN1nAy4nflvIwh2jC2PUYR7u%2FoWtiiGlBcVOVV2X9IUtjs497%2FhgyW7e6VKN%2FGmY6XPJodSlpL6IA5%2F4dGRPfK7ttC42TrEN7MVq%2BZQcrAnXLDlqeXMuymlK87M5HQ5KNiw6Q6FrnJO7FIjDE8kjoSMgG%2Be20KeicIMZxotEhDgx2oMzdK%2BGW2OZ5zNXWpcMbAmt3RY0yx%2Bf50qGVAQdY%2BlsuRY6WgBZO1y7Zx7McPEsGY5FMOq0ocY2WbJkWah2Aol4%2BA1%2B7d%2Fmg1WH6MGEdodPMMvB58AGOqUBlCjH7gaC3W%2BuSuVbqaqPo5yVlJGW0z6n6lP9gyqxbO2z7Y8%2FeyC0xmQEPQOxw0ld%2FUyFmAQWTkJhFiA5dUVSeOwrC1SKQ3sEeY9QFjYgV7Ap8JpBRp3Vx4T21r36n6kbnLXWqkXZLThRKzaVayvq7E%2FpuncOWaIzAvvO%2B%2FX9CC%2FwnR%2B%2FAdXPuT4hpS7C9HXayF1RqBQmrKbz1BsQjrdfkDwpCpl%2B&X-Amz-Signature=406a7ff10f76218701830c580ffccc390e66c0bf25e5a7ee1efea5dc7b75b8d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRON4LBA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3MTCoEKL9MSQqwkE0uSA0baMzXmkg1Z8s0Un5ZRGtWAiEAh6BEsyOTbc%2FMbAOHDe1c3frxaTGGFRqLZsyXTMwUnFEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAwwtZ5qDWhe1xByVSrcA5gSmubsfQ2GxSEg3yLWiAQPhJ%2BZdKW3aleEO3mvRNthMSj%2Fn0HKxy5b8s4%2Bs1CzH6ZEl720o8Glw4bo5SgFotbo%2BGDqMqjJd5NFl4ZyuldtYsje6AtMgpVCGucT%2By9yJCukxAY7g4zv5myh%2FGJpIpKCjsjc46IUh414YwQiwnP9mq0QHno6%2B9Mtqu9%2F%2FhlXt0kjqLGwqYxBMHzeUS5DKjJ6O02Wo7nhLMfl%2BFt4tF86V%2B4lrp9mmF4Uafp5ca3isQ81MURHyoMr2es6PZESRihV53ExYeKyL0TNYH7xCvPHpe3g5RrIX5BtRuMm6OK48NgBPZP%2F6uswnXQIk1kYgTTIXB6uywjShRbrcN1nAy4nflvIwh2jC2PUYR7u%2FoWtiiGlBcVOVV2X9IUtjs497%2FhgyW7e6VKN%2FGmY6XPJodSlpL6IA5%2F4dGRPfK7ttC42TrEN7MVq%2BZQcrAnXLDlqeXMuymlK87M5HQ5KNiw6Q6FrnJO7FIjDE8kjoSMgG%2Be20KeicIMZxotEhDgx2oMzdK%2BGW2OZ5zNXWpcMbAmt3RY0yx%2Bf50qGVAQdY%2BlsuRY6WgBZO1y7Zx7McPEsGY5FMOq0ocY2WbJkWah2Aol4%2BA1%2B7d%2Fmg1WH6MGEdodPMMvB58AGOqUBlCjH7gaC3W%2BuSuVbqaqPo5yVlJGW0z6n6lP9gyqxbO2z7Y8%2FeyC0xmQEPQOxw0ld%2FUyFmAQWTkJhFiA5dUVSeOwrC1SKQ3sEeY9QFjYgV7Ap8JpBRp3Vx4T21r36n6kbnLXWqkXZLThRKzaVayvq7E%2FpuncOWaIzAvvO%2B%2FX9CC%2FwnR%2B%2FAdXPuT4hpS7C9HXayF1RqBQmrKbz1BsQjrdfkDwpCpl%2B&X-Amz-Signature=473c26d2a35ac77b547566a51411e0a24d165b2257503e921babc6c1456dc72b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRON4LBA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3MTCoEKL9MSQqwkE0uSA0baMzXmkg1Z8s0Un5ZRGtWAiEAh6BEsyOTbc%2FMbAOHDe1c3frxaTGGFRqLZsyXTMwUnFEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAwwtZ5qDWhe1xByVSrcA5gSmubsfQ2GxSEg3yLWiAQPhJ%2BZdKW3aleEO3mvRNthMSj%2Fn0HKxy5b8s4%2Bs1CzH6ZEl720o8Glw4bo5SgFotbo%2BGDqMqjJd5NFl4ZyuldtYsje6AtMgpVCGucT%2By9yJCukxAY7g4zv5myh%2FGJpIpKCjsjc46IUh414YwQiwnP9mq0QHno6%2B9Mtqu9%2F%2FhlXt0kjqLGwqYxBMHzeUS5DKjJ6O02Wo7nhLMfl%2BFt4tF86V%2B4lrp9mmF4Uafp5ca3isQ81MURHyoMr2es6PZESRihV53ExYeKyL0TNYH7xCvPHpe3g5RrIX5BtRuMm6OK48NgBPZP%2F6uswnXQIk1kYgTTIXB6uywjShRbrcN1nAy4nflvIwh2jC2PUYR7u%2FoWtiiGlBcVOVV2X9IUtjs497%2FhgyW7e6VKN%2FGmY6XPJodSlpL6IA5%2F4dGRPfK7ttC42TrEN7MVq%2BZQcrAnXLDlqeXMuymlK87M5HQ5KNiw6Q6FrnJO7FIjDE8kjoSMgG%2Be20KeicIMZxotEhDgx2oMzdK%2BGW2OZ5zNXWpcMbAmt3RY0yx%2Bf50qGVAQdY%2BlsuRY6WgBZO1y7Zx7McPEsGY5FMOq0ocY2WbJkWah2Aol4%2BA1%2B7d%2Fmg1WH6MGEdodPMMvB58AGOqUBlCjH7gaC3W%2BuSuVbqaqPo5yVlJGW0z6n6lP9gyqxbO2z7Y8%2FeyC0xmQEPQOxw0ld%2FUyFmAQWTkJhFiA5dUVSeOwrC1SKQ3sEeY9QFjYgV7Ap8JpBRp3Vx4T21r36n6kbnLXWqkXZLThRKzaVayvq7E%2FpuncOWaIzAvvO%2B%2FX9CC%2FwnR%2B%2FAdXPuT4hpS7C9HXayF1RqBQmrKbz1BsQjrdfkDwpCpl%2B&X-Amz-Signature=18b7f15e780db087924865eebe7dd0e8f289de3f522fbbaaa1adc837a95a7061&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
