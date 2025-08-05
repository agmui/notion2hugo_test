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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGAFIC6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCzMRzaI6xfFmgn5Y7nCnyFMv8Av9oie%2B9cmqYdb%2Ff1mAIhAPVOK5Q6gAH91vbnob6ll8oGJHhI0aqN1tJM%2BGjzryG3Kv8DCGUQABoMNjM3NDIzMTgzODA1IgxzWSlkQNcN4WSjch0q3ANw2rpkARznShnr8dVZ1Xrr%2BojjRKBxrKdFlITfFzfwpOS5qei4BwuBlXWqC54Az2J%2BgtYFISpJI0nH40k4vnm0p%2Bpj21O%2FFHyvaqExuCe1vSoQvp%2F%2F4K0P2sKCWH7rYMUWOUb6MhlRfEO7uXRi3oPvNUbxSiqyKVAaVz1PRgOA2hNqM0gyGQwFS3hXG2XDRLeR%2Bu7FXuoX2%2FFwV62sbQ4xzNWJnDLbePA%2FuLNXQi4rxZWl2nGaai2mDngflGuj0kw04VtuDeBbf2ZJDj2HynUoJ%2Fjf%2BU7EZDDnvlWTifGV%2FMmsEkVisoHRUle7meKJ5O3KnKqQvzOf5Ppu9ENlVupWFEfTWl57Ah7sdu38ljd1ydmwRPFnjURe%2Fzgnbt5UODd19eBiqwZtN9Og7HUolmgcO5qhTZbM5Rsy9xHTT22aMHNI1eUiO2y3HfbWwoN71qDS5qgBnjo%2BFbHKJ%2BpIWI0yI%2FV6xu077%2BXTA%2FAKsHlGZIkNEkw3Hn8twoAHDLomZGLFu7m8W6Yy1W%2BtBeU%2FUfYS9z1OD0kyTotm107L4l8VchexumubOHn4RfCzwgHQEE62PwOLLahv6KwAxisu8p8el1Ua%2BAVQ9FIIiPOcMRIiA6YslZacoNa2z803kDCCvMnEBjqkATyXaBRQt%2BjG%2FctdLsHewucQhCg%2B55KQ0LVXJp41dGEEh%2B1TeP0ck5nAQnOeGdAj3H7fLtJLJqGSc555afYzZzJ6gu3czIZs3rNy4xAiaPiB%2FINKxJ%2BI9iGPzvIlGRCh6TUg0%2FH9pypFNou7TAZeVGbk5RJU6TlH6l3jdIATDpbrz6Xjxk9NXsf5M7XikzSM2HvESnx6W4%2BDCoo6kl7dmSv%2BuIHP&X-Amz-Signature=94dec88b89cda0c6d934c852e0f7619cd963867a71e4d447b0f4125cf76c104c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGAFIC6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCzMRzaI6xfFmgn5Y7nCnyFMv8Av9oie%2B9cmqYdb%2Ff1mAIhAPVOK5Q6gAH91vbnob6ll8oGJHhI0aqN1tJM%2BGjzryG3Kv8DCGUQABoMNjM3NDIzMTgzODA1IgxzWSlkQNcN4WSjch0q3ANw2rpkARznShnr8dVZ1Xrr%2BojjRKBxrKdFlITfFzfwpOS5qei4BwuBlXWqC54Az2J%2BgtYFISpJI0nH40k4vnm0p%2Bpj21O%2FFHyvaqExuCe1vSoQvp%2F%2F4K0P2sKCWH7rYMUWOUb6MhlRfEO7uXRi3oPvNUbxSiqyKVAaVz1PRgOA2hNqM0gyGQwFS3hXG2XDRLeR%2Bu7FXuoX2%2FFwV62sbQ4xzNWJnDLbePA%2FuLNXQi4rxZWl2nGaai2mDngflGuj0kw04VtuDeBbf2ZJDj2HynUoJ%2Fjf%2BU7EZDDnvlWTifGV%2FMmsEkVisoHRUle7meKJ5O3KnKqQvzOf5Ppu9ENlVupWFEfTWl57Ah7sdu38ljd1ydmwRPFnjURe%2Fzgnbt5UODd19eBiqwZtN9Og7HUolmgcO5qhTZbM5Rsy9xHTT22aMHNI1eUiO2y3HfbWwoN71qDS5qgBnjo%2BFbHKJ%2BpIWI0yI%2FV6xu077%2BXTA%2FAKsHlGZIkNEkw3Hn8twoAHDLomZGLFu7m8W6Yy1W%2BtBeU%2FUfYS9z1OD0kyTotm107L4l8VchexumubOHn4RfCzwgHQEE62PwOLLahv6KwAxisu8p8el1Ua%2BAVQ9FIIiPOcMRIiA6YslZacoNa2z803kDCCvMnEBjqkATyXaBRQt%2BjG%2FctdLsHewucQhCg%2B55KQ0LVXJp41dGEEh%2B1TeP0ck5nAQnOeGdAj3H7fLtJLJqGSc555afYzZzJ6gu3czIZs3rNy4xAiaPiB%2FINKxJ%2BI9iGPzvIlGRCh6TUg0%2FH9pypFNou7TAZeVGbk5RJU6TlH6l3jdIATDpbrz6Xjxk9NXsf5M7XikzSM2HvESnx6W4%2BDCoo6kl7dmSv%2BuIHP&X-Amz-Signature=b53864cd6bed7ccbb865e0851197ee2d14b52b29c0ad751960cf28c467cb4dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGAFIC6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCzMRzaI6xfFmgn5Y7nCnyFMv8Av9oie%2B9cmqYdb%2Ff1mAIhAPVOK5Q6gAH91vbnob6ll8oGJHhI0aqN1tJM%2BGjzryG3Kv8DCGUQABoMNjM3NDIzMTgzODA1IgxzWSlkQNcN4WSjch0q3ANw2rpkARznShnr8dVZ1Xrr%2BojjRKBxrKdFlITfFzfwpOS5qei4BwuBlXWqC54Az2J%2BgtYFISpJI0nH40k4vnm0p%2Bpj21O%2FFHyvaqExuCe1vSoQvp%2F%2F4K0P2sKCWH7rYMUWOUb6MhlRfEO7uXRi3oPvNUbxSiqyKVAaVz1PRgOA2hNqM0gyGQwFS3hXG2XDRLeR%2Bu7FXuoX2%2FFwV62sbQ4xzNWJnDLbePA%2FuLNXQi4rxZWl2nGaai2mDngflGuj0kw04VtuDeBbf2ZJDj2HynUoJ%2Fjf%2BU7EZDDnvlWTifGV%2FMmsEkVisoHRUle7meKJ5O3KnKqQvzOf5Ppu9ENlVupWFEfTWl57Ah7sdu38ljd1ydmwRPFnjURe%2Fzgnbt5UODd19eBiqwZtN9Og7HUolmgcO5qhTZbM5Rsy9xHTT22aMHNI1eUiO2y3HfbWwoN71qDS5qgBnjo%2BFbHKJ%2BpIWI0yI%2FV6xu077%2BXTA%2FAKsHlGZIkNEkw3Hn8twoAHDLomZGLFu7m8W6Yy1W%2BtBeU%2FUfYS9z1OD0kyTotm107L4l8VchexumubOHn4RfCzwgHQEE62PwOLLahv6KwAxisu8p8el1Ua%2BAVQ9FIIiPOcMRIiA6YslZacoNa2z803kDCCvMnEBjqkATyXaBRQt%2BjG%2FctdLsHewucQhCg%2B55KQ0LVXJp41dGEEh%2B1TeP0ck5nAQnOeGdAj3H7fLtJLJqGSc555afYzZzJ6gu3czIZs3rNy4xAiaPiB%2FINKxJ%2BI9iGPzvIlGRCh6TUg0%2FH9pypFNou7TAZeVGbk5RJU6TlH6l3jdIATDpbrz6Xjxk9NXsf5M7XikzSM2HvESnx6W4%2BDCoo6kl7dmSv%2BuIHP&X-Amz-Signature=5772cfc916678ddcf34f33bd50e8a43cbd1929e15714353fc933da4e4d63e6fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGAFIC6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCzMRzaI6xfFmgn5Y7nCnyFMv8Av9oie%2B9cmqYdb%2Ff1mAIhAPVOK5Q6gAH91vbnob6ll8oGJHhI0aqN1tJM%2BGjzryG3Kv8DCGUQABoMNjM3NDIzMTgzODA1IgxzWSlkQNcN4WSjch0q3ANw2rpkARznShnr8dVZ1Xrr%2BojjRKBxrKdFlITfFzfwpOS5qei4BwuBlXWqC54Az2J%2BgtYFISpJI0nH40k4vnm0p%2Bpj21O%2FFHyvaqExuCe1vSoQvp%2F%2F4K0P2sKCWH7rYMUWOUb6MhlRfEO7uXRi3oPvNUbxSiqyKVAaVz1PRgOA2hNqM0gyGQwFS3hXG2XDRLeR%2Bu7FXuoX2%2FFwV62sbQ4xzNWJnDLbePA%2FuLNXQi4rxZWl2nGaai2mDngflGuj0kw04VtuDeBbf2ZJDj2HynUoJ%2Fjf%2BU7EZDDnvlWTifGV%2FMmsEkVisoHRUle7meKJ5O3KnKqQvzOf5Ppu9ENlVupWFEfTWl57Ah7sdu38ljd1ydmwRPFnjURe%2Fzgnbt5UODd19eBiqwZtN9Og7HUolmgcO5qhTZbM5Rsy9xHTT22aMHNI1eUiO2y3HfbWwoN71qDS5qgBnjo%2BFbHKJ%2BpIWI0yI%2FV6xu077%2BXTA%2FAKsHlGZIkNEkw3Hn8twoAHDLomZGLFu7m8W6Yy1W%2BtBeU%2FUfYS9z1OD0kyTotm107L4l8VchexumubOHn4RfCzwgHQEE62PwOLLahv6KwAxisu8p8el1Ua%2BAVQ9FIIiPOcMRIiA6YslZacoNa2z803kDCCvMnEBjqkATyXaBRQt%2BjG%2FctdLsHewucQhCg%2B55KQ0LVXJp41dGEEh%2B1TeP0ck5nAQnOeGdAj3H7fLtJLJqGSc555afYzZzJ6gu3czIZs3rNy4xAiaPiB%2FINKxJ%2BI9iGPzvIlGRCh6TUg0%2FH9pypFNou7TAZeVGbk5RJU6TlH6l3jdIATDpbrz6Xjxk9NXsf5M7XikzSM2HvESnx6W4%2BDCoo6kl7dmSv%2BuIHP&X-Amz-Signature=b9a7071825871f6bd006b160fe2e73e30b0c1383e14454a959caf37d027a216d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGAFIC6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCzMRzaI6xfFmgn5Y7nCnyFMv8Av9oie%2B9cmqYdb%2Ff1mAIhAPVOK5Q6gAH91vbnob6ll8oGJHhI0aqN1tJM%2BGjzryG3Kv8DCGUQABoMNjM3NDIzMTgzODA1IgxzWSlkQNcN4WSjch0q3ANw2rpkARznShnr8dVZ1Xrr%2BojjRKBxrKdFlITfFzfwpOS5qei4BwuBlXWqC54Az2J%2BgtYFISpJI0nH40k4vnm0p%2Bpj21O%2FFHyvaqExuCe1vSoQvp%2F%2F4K0P2sKCWH7rYMUWOUb6MhlRfEO7uXRi3oPvNUbxSiqyKVAaVz1PRgOA2hNqM0gyGQwFS3hXG2XDRLeR%2Bu7FXuoX2%2FFwV62sbQ4xzNWJnDLbePA%2FuLNXQi4rxZWl2nGaai2mDngflGuj0kw04VtuDeBbf2ZJDj2HynUoJ%2Fjf%2BU7EZDDnvlWTifGV%2FMmsEkVisoHRUle7meKJ5O3KnKqQvzOf5Ppu9ENlVupWFEfTWl57Ah7sdu38ljd1ydmwRPFnjURe%2Fzgnbt5UODd19eBiqwZtN9Og7HUolmgcO5qhTZbM5Rsy9xHTT22aMHNI1eUiO2y3HfbWwoN71qDS5qgBnjo%2BFbHKJ%2BpIWI0yI%2FV6xu077%2BXTA%2FAKsHlGZIkNEkw3Hn8twoAHDLomZGLFu7m8W6Yy1W%2BtBeU%2FUfYS9z1OD0kyTotm107L4l8VchexumubOHn4RfCzwgHQEE62PwOLLahv6KwAxisu8p8el1Ua%2BAVQ9FIIiPOcMRIiA6YslZacoNa2z803kDCCvMnEBjqkATyXaBRQt%2BjG%2FctdLsHewucQhCg%2B55KQ0LVXJp41dGEEh%2B1TeP0ck5nAQnOeGdAj3H7fLtJLJqGSc555afYzZzJ6gu3czIZs3rNy4xAiaPiB%2FINKxJ%2BI9iGPzvIlGRCh6TUg0%2FH9pypFNou7TAZeVGbk5RJU6TlH6l3jdIATDpbrz6Xjxk9NXsf5M7XikzSM2HvESnx6W4%2BDCoo6kl7dmSv%2BuIHP&X-Amz-Signature=7364718ed7892e885ccb30be9aacdb7109595f8f41b2f18d60441e517ea96e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGAFIC6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCzMRzaI6xfFmgn5Y7nCnyFMv8Av9oie%2B9cmqYdb%2Ff1mAIhAPVOK5Q6gAH91vbnob6ll8oGJHhI0aqN1tJM%2BGjzryG3Kv8DCGUQABoMNjM3NDIzMTgzODA1IgxzWSlkQNcN4WSjch0q3ANw2rpkARznShnr8dVZ1Xrr%2BojjRKBxrKdFlITfFzfwpOS5qei4BwuBlXWqC54Az2J%2BgtYFISpJI0nH40k4vnm0p%2Bpj21O%2FFHyvaqExuCe1vSoQvp%2F%2F4K0P2sKCWH7rYMUWOUb6MhlRfEO7uXRi3oPvNUbxSiqyKVAaVz1PRgOA2hNqM0gyGQwFS3hXG2XDRLeR%2Bu7FXuoX2%2FFwV62sbQ4xzNWJnDLbePA%2FuLNXQi4rxZWl2nGaai2mDngflGuj0kw04VtuDeBbf2ZJDj2HynUoJ%2Fjf%2BU7EZDDnvlWTifGV%2FMmsEkVisoHRUle7meKJ5O3KnKqQvzOf5Ppu9ENlVupWFEfTWl57Ah7sdu38ljd1ydmwRPFnjURe%2Fzgnbt5UODd19eBiqwZtN9Og7HUolmgcO5qhTZbM5Rsy9xHTT22aMHNI1eUiO2y3HfbWwoN71qDS5qgBnjo%2BFbHKJ%2BpIWI0yI%2FV6xu077%2BXTA%2FAKsHlGZIkNEkw3Hn8twoAHDLomZGLFu7m8W6Yy1W%2BtBeU%2FUfYS9z1OD0kyTotm107L4l8VchexumubOHn4RfCzwgHQEE62PwOLLahv6KwAxisu8p8el1Ua%2BAVQ9FIIiPOcMRIiA6YslZacoNa2z803kDCCvMnEBjqkATyXaBRQt%2BjG%2FctdLsHewucQhCg%2B55KQ0LVXJp41dGEEh%2B1TeP0ck5nAQnOeGdAj3H7fLtJLJqGSc555afYzZzJ6gu3czIZs3rNy4xAiaPiB%2FINKxJ%2BI9iGPzvIlGRCh6TUg0%2FH9pypFNou7TAZeVGbk5RJU6TlH6l3jdIATDpbrz6Xjxk9NXsf5M7XikzSM2HvESnx6W4%2BDCoo6kl7dmSv%2BuIHP&X-Amz-Signature=dbe5e7e7262096c242063d614d8f7946813be3fb3368192379579bba09a5c879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGAFIC6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCzMRzaI6xfFmgn5Y7nCnyFMv8Av9oie%2B9cmqYdb%2Ff1mAIhAPVOK5Q6gAH91vbnob6ll8oGJHhI0aqN1tJM%2BGjzryG3Kv8DCGUQABoMNjM3NDIzMTgzODA1IgxzWSlkQNcN4WSjch0q3ANw2rpkARznShnr8dVZ1Xrr%2BojjRKBxrKdFlITfFzfwpOS5qei4BwuBlXWqC54Az2J%2BgtYFISpJI0nH40k4vnm0p%2Bpj21O%2FFHyvaqExuCe1vSoQvp%2F%2F4K0P2sKCWH7rYMUWOUb6MhlRfEO7uXRi3oPvNUbxSiqyKVAaVz1PRgOA2hNqM0gyGQwFS3hXG2XDRLeR%2Bu7FXuoX2%2FFwV62sbQ4xzNWJnDLbePA%2FuLNXQi4rxZWl2nGaai2mDngflGuj0kw04VtuDeBbf2ZJDj2HynUoJ%2Fjf%2BU7EZDDnvlWTifGV%2FMmsEkVisoHRUle7meKJ5O3KnKqQvzOf5Ppu9ENlVupWFEfTWl57Ah7sdu38ljd1ydmwRPFnjURe%2Fzgnbt5UODd19eBiqwZtN9Og7HUolmgcO5qhTZbM5Rsy9xHTT22aMHNI1eUiO2y3HfbWwoN71qDS5qgBnjo%2BFbHKJ%2BpIWI0yI%2FV6xu077%2BXTA%2FAKsHlGZIkNEkw3Hn8twoAHDLomZGLFu7m8W6Yy1W%2BtBeU%2FUfYS9z1OD0kyTotm107L4l8VchexumubOHn4RfCzwgHQEE62PwOLLahv6KwAxisu8p8el1Ua%2BAVQ9FIIiPOcMRIiA6YslZacoNa2z803kDCCvMnEBjqkATyXaBRQt%2BjG%2FctdLsHewucQhCg%2B55KQ0LVXJp41dGEEh%2B1TeP0ck5nAQnOeGdAj3H7fLtJLJqGSc555afYzZzJ6gu3czIZs3rNy4xAiaPiB%2FINKxJ%2BI9iGPzvIlGRCh6TUg0%2FH9pypFNou7TAZeVGbk5RJU6TlH6l3jdIATDpbrz6Xjxk9NXsf5M7XikzSM2HvESnx6W4%2BDCoo6kl7dmSv%2BuIHP&X-Amz-Signature=e0316e665a5b90708f574a6499cc1471515557bcd8b39a3a99ba9bdd0e2b0927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGAFIC6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCzMRzaI6xfFmgn5Y7nCnyFMv8Av9oie%2B9cmqYdb%2Ff1mAIhAPVOK5Q6gAH91vbnob6ll8oGJHhI0aqN1tJM%2BGjzryG3Kv8DCGUQABoMNjM3NDIzMTgzODA1IgxzWSlkQNcN4WSjch0q3ANw2rpkARznShnr8dVZ1Xrr%2BojjRKBxrKdFlITfFzfwpOS5qei4BwuBlXWqC54Az2J%2BgtYFISpJI0nH40k4vnm0p%2Bpj21O%2FFHyvaqExuCe1vSoQvp%2F%2F4K0P2sKCWH7rYMUWOUb6MhlRfEO7uXRi3oPvNUbxSiqyKVAaVz1PRgOA2hNqM0gyGQwFS3hXG2XDRLeR%2Bu7FXuoX2%2FFwV62sbQ4xzNWJnDLbePA%2FuLNXQi4rxZWl2nGaai2mDngflGuj0kw04VtuDeBbf2ZJDj2HynUoJ%2Fjf%2BU7EZDDnvlWTifGV%2FMmsEkVisoHRUle7meKJ5O3KnKqQvzOf5Ppu9ENlVupWFEfTWl57Ah7sdu38ljd1ydmwRPFnjURe%2Fzgnbt5UODd19eBiqwZtN9Og7HUolmgcO5qhTZbM5Rsy9xHTT22aMHNI1eUiO2y3HfbWwoN71qDS5qgBnjo%2BFbHKJ%2BpIWI0yI%2FV6xu077%2BXTA%2FAKsHlGZIkNEkw3Hn8twoAHDLomZGLFu7m8W6Yy1W%2BtBeU%2FUfYS9z1OD0kyTotm107L4l8VchexumubOHn4RfCzwgHQEE62PwOLLahv6KwAxisu8p8el1Ua%2BAVQ9FIIiPOcMRIiA6YslZacoNa2z803kDCCvMnEBjqkATyXaBRQt%2BjG%2FctdLsHewucQhCg%2B55KQ0LVXJp41dGEEh%2B1TeP0ck5nAQnOeGdAj3H7fLtJLJqGSc555afYzZzJ6gu3czIZs3rNy4xAiaPiB%2FINKxJ%2BI9iGPzvIlGRCh6TUg0%2FH9pypFNou7TAZeVGbk5RJU6TlH6l3jdIATDpbrz6Xjxk9NXsf5M7XikzSM2HvESnx6W4%2BDCoo6kl7dmSv%2BuIHP&X-Amz-Signature=ec641220c54601ec66c9cec1e7f31fd734a872c49be2cc5e6adfbebd2ca4e92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
