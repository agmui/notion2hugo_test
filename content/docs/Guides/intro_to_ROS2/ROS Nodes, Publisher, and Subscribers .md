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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QVYC3QK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BHdE9MUNKGNiXJSpbOvgwNXhzPpHoBFG6PdkzmcDAgIgbpEvPbZ6x3ZpEIXFK8E9JyLHsrdZo2e8f0Lgx2Pasyoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNdHqX%2B7yPJalVrLNCrcA1ngkbCdI9fhOkYI6seCwq3B4hUP9rArxWkCeZB5PMuEhhEl7yoUGYVwSZ9JoHrOH3gUCcfipBM09dCe04Ezgyh%2FZkWTijnD%2Fyl27YtIGZLItD6NpD4hLyhwKwu8Q81SV7%2FvWHz2g%2BwC0bgmx%2FMXxcC%2FVXppDBtpAw5L39aQkdfDrZaHeGP70uOcpD7idmYBZrctuPdvcr8UVGGof5wyimHmqLa3vGl8bNnmSzxqi%2FPMVW07%2Bt0nsPemANfEAd0A7ZM9v7H%2FAulc%2BMOHfhECbgat0f6zPI93sQUpueYrxurUUZxmUCXWojN7JGF7RgzyLuwVY%2FQbrJl5xAg1eEc9BW5pQue6%2BaZ9IiEnvU1Egra7m8S3qU6XUcGV4jxeWJb9cwEaEX%2FSk8%2BmKE7lXxxyTnn5aZx3TbSNndstglp%2FvdG0RgNqecJbDK52pWn3LjUyne%2FlXmZozG1wVJ9Judcm2TkEpmakBzgBB5MMhclTXmcIh8%2FoLe2Gqk0NnVaZCY3GoFIyojPl5zeh2%2FQGZTPt8prpiG0x9lf3rvd04%2BMIv3HiHAM8TwaKxgtqH1oTrbFvpkj6D2OsrI4qo4siWtZKcVq103HYHu4vZA4WPhFqDeI6c5JEBN7HPRcyRYGyMJ6f0b8GOqUBpdodEHqUtGZIAgxNPE9zLHwXgAftWyLIbSHG6CtqzOU4ox1hqNm2CSdzkfVRu4UpzyZK6KZWk08kyI0ecYUXkrpgJBVbpJXsfRB20tNZFcY6uKQ5TflOoHcO%2BraQ6u0UY%2BATUZM7P5ef%2Bm1B4lOdEbQMgoe6jnGyaMKCaH6a3%2F08keQspFcPeZRUjH0DT6%2B%2Fp4cXqZEoFSbWdHiSIlKEteF%2B0al2&X-Amz-Signature=a7c0644ab5c384d720cf461c4fe3cb4b59b84ecaea74413fb5dffc0da7db57e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QVYC3QK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BHdE9MUNKGNiXJSpbOvgwNXhzPpHoBFG6PdkzmcDAgIgbpEvPbZ6x3ZpEIXFK8E9JyLHsrdZo2e8f0Lgx2Pasyoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNdHqX%2B7yPJalVrLNCrcA1ngkbCdI9fhOkYI6seCwq3B4hUP9rArxWkCeZB5PMuEhhEl7yoUGYVwSZ9JoHrOH3gUCcfipBM09dCe04Ezgyh%2FZkWTijnD%2Fyl27YtIGZLItD6NpD4hLyhwKwu8Q81SV7%2FvWHz2g%2BwC0bgmx%2FMXxcC%2FVXppDBtpAw5L39aQkdfDrZaHeGP70uOcpD7idmYBZrctuPdvcr8UVGGof5wyimHmqLa3vGl8bNnmSzxqi%2FPMVW07%2Bt0nsPemANfEAd0A7ZM9v7H%2FAulc%2BMOHfhECbgat0f6zPI93sQUpueYrxurUUZxmUCXWojN7JGF7RgzyLuwVY%2FQbrJl5xAg1eEc9BW5pQue6%2BaZ9IiEnvU1Egra7m8S3qU6XUcGV4jxeWJb9cwEaEX%2FSk8%2BmKE7lXxxyTnn5aZx3TbSNndstglp%2FvdG0RgNqecJbDK52pWn3LjUyne%2FlXmZozG1wVJ9Judcm2TkEpmakBzgBB5MMhclTXmcIh8%2FoLe2Gqk0NnVaZCY3GoFIyojPl5zeh2%2FQGZTPt8prpiG0x9lf3rvd04%2BMIv3HiHAM8TwaKxgtqH1oTrbFvpkj6D2OsrI4qo4siWtZKcVq103HYHu4vZA4WPhFqDeI6c5JEBN7HPRcyRYGyMJ6f0b8GOqUBpdodEHqUtGZIAgxNPE9zLHwXgAftWyLIbSHG6CtqzOU4ox1hqNm2CSdzkfVRu4UpzyZK6KZWk08kyI0ecYUXkrpgJBVbpJXsfRB20tNZFcY6uKQ5TflOoHcO%2BraQ6u0UY%2BATUZM7P5ef%2Bm1B4lOdEbQMgoe6jnGyaMKCaH6a3%2F08keQspFcPeZRUjH0DT6%2B%2Fp4cXqZEoFSbWdHiSIlKEteF%2B0al2&X-Amz-Signature=dc316a2d6e209307352bc61002a7e2b451d5c6c5525bfc11afb0c28f020c4962&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QVYC3QK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BHdE9MUNKGNiXJSpbOvgwNXhzPpHoBFG6PdkzmcDAgIgbpEvPbZ6x3ZpEIXFK8E9JyLHsrdZo2e8f0Lgx2Pasyoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNdHqX%2B7yPJalVrLNCrcA1ngkbCdI9fhOkYI6seCwq3B4hUP9rArxWkCeZB5PMuEhhEl7yoUGYVwSZ9JoHrOH3gUCcfipBM09dCe04Ezgyh%2FZkWTijnD%2Fyl27YtIGZLItD6NpD4hLyhwKwu8Q81SV7%2FvWHz2g%2BwC0bgmx%2FMXxcC%2FVXppDBtpAw5L39aQkdfDrZaHeGP70uOcpD7idmYBZrctuPdvcr8UVGGof5wyimHmqLa3vGl8bNnmSzxqi%2FPMVW07%2Bt0nsPemANfEAd0A7ZM9v7H%2FAulc%2BMOHfhECbgat0f6zPI93sQUpueYrxurUUZxmUCXWojN7JGF7RgzyLuwVY%2FQbrJl5xAg1eEc9BW5pQue6%2BaZ9IiEnvU1Egra7m8S3qU6XUcGV4jxeWJb9cwEaEX%2FSk8%2BmKE7lXxxyTnn5aZx3TbSNndstglp%2FvdG0RgNqecJbDK52pWn3LjUyne%2FlXmZozG1wVJ9Judcm2TkEpmakBzgBB5MMhclTXmcIh8%2FoLe2Gqk0NnVaZCY3GoFIyojPl5zeh2%2FQGZTPt8prpiG0x9lf3rvd04%2BMIv3HiHAM8TwaKxgtqH1oTrbFvpkj6D2OsrI4qo4siWtZKcVq103HYHu4vZA4WPhFqDeI6c5JEBN7HPRcyRYGyMJ6f0b8GOqUBpdodEHqUtGZIAgxNPE9zLHwXgAftWyLIbSHG6CtqzOU4ox1hqNm2CSdzkfVRu4UpzyZK6KZWk08kyI0ecYUXkrpgJBVbpJXsfRB20tNZFcY6uKQ5TflOoHcO%2BraQ6u0UY%2BATUZM7P5ef%2Bm1B4lOdEbQMgoe6jnGyaMKCaH6a3%2F08keQspFcPeZRUjH0DT6%2B%2Fp4cXqZEoFSbWdHiSIlKEteF%2B0al2&X-Amz-Signature=93f87d2359686454069359b9f98f45f8926959f25dcb7b233a8a5487d186e731&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QVYC3QK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BHdE9MUNKGNiXJSpbOvgwNXhzPpHoBFG6PdkzmcDAgIgbpEvPbZ6x3ZpEIXFK8E9JyLHsrdZo2e8f0Lgx2Pasyoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNdHqX%2B7yPJalVrLNCrcA1ngkbCdI9fhOkYI6seCwq3B4hUP9rArxWkCeZB5PMuEhhEl7yoUGYVwSZ9JoHrOH3gUCcfipBM09dCe04Ezgyh%2FZkWTijnD%2Fyl27YtIGZLItD6NpD4hLyhwKwu8Q81SV7%2FvWHz2g%2BwC0bgmx%2FMXxcC%2FVXppDBtpAw5L39aQkdfDrZaHeGP70uOcpD7idmYBZrctuPdvcr8UVGGof5wyimHmqLa3vGl8bNnmSzxqi%2FPMVW07%2Bt0nsPemANfEAd0A7ZM9v7H%2FAulc%2BMOHfhECbgat0f6zPI93sQUpueYrxurUUZxmUCXWojN7JGF7RgzyLuwVY%2FQbrJl5xAg1eEc9BW5pQue6%2BaZ9IiEnvU1Egra7m8S3qU6XUcGV4jxeWJb9cwEaEX%2FSk8%2BmKE7lXxxyTnn5aZx3TbSNndstglp%2FvdG0RgNqecJbDK52pWn3LjUyne%2FlXmZozG1wVJ9Judcm2TkEpmakBzgBB5MMhclTXmcIh8%2FoLe2Gqk0NnVaZCY3GoFIyojPl5zeh2%2FQGZTPt8prpiG0x9lf3rvd04%2BMIv3HiHAM8TwaKxgtqH1oTrbFvpkj6D2OsrI4qo4siWtZKcVq103HYHu4vZA4WPhFqDeI6c5JEBN7HPRcyRYGyMJ6f0b8GOqUBpdodEHqUtGZIAgxNPE9zLHwXgAftWyLIbSHG6CtqzOU4ox1hqNm2CSdzkfVRu4UpzyZK6KZWk08kyI0ecYUXkrpgJBVbpJXsfRB20tNZFcY6uKQ5TflOoHcO%2BraQ6u0UY%2BATUZM7P5ef%2Bm1B4lOdEbQMgoe6jnGyaMKCaH6a3%2F08keQspFcPeZRUjH0DT6%2B%2Fp4cXqZEoFSbWdHiSIlKEteF%2B0al2&X-Amz-Signature=2ef0edd2d23b92ebfd63c6eabe37e1f5323a730f9c42fa1236d74104a1d365f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QVYC3QK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BHdE9MUNKGNiXJSpbOvgwNXhzPpHoBFG6PdkzmcDAgIgbpEvPbZ6x3ZpEIXFK8E9JyLHsrdZo2e8f0Lgx2Pasyoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNdHqX%2B7yPJalVrLNCrcA1ngkbCdI9fhOkYI6seCwq3B4hUP9rArxWkCeZB5PMuEhhEl7yoUGYVwSZ9JoHrOH3gUCcfipBM09dCe04Ezgyh%2FZkWTijnD%2Fyl27YtIGZLItD6NpD4hLyhwKwu8Q81SV7%2FvWHz2g%2BwC0bgmx%2FMXxcC%2FVXppDBtpAw5L39aQkdfDrZaHeGP70uOcpD7idmYBZrctuPdvcr8UVGGof5wyimHmqLa3vGl8bNnmSzxqi%2FPMVW07%2Bt0nsPemANfEAd0A7ZM9v7H%2FAulc%2BMOHfhECbgat0f6zPI93sQUpueYrxurUUZxmUCXWojN7JGF7RgzyLuwVY%2FQbrJl5xAg1eEc9BW5pQue6%2BaZ9IiEnvU1Egra7m8S3qU6XUcGV4jxeWJb9cwEaEX%2FSk8%2BmKE7lXxxyTnn5aZx3TbSNndstglp%2FvdG0RgNqecJbDK52pWn3LjUyne%2FlXmZozG1wVJ9Judcm2TkEpmakBzgBB5MMhclTXmcIh8%2FoLe2Gqk0NnVaZCY3GoFIyojPl5zeh2%2FQGZTPt8prpiG0x9lf3rvd04%2BMIv3HiHAM8TwaKxgtqH1oTrbFvpkj6D2OsrI4qo4siWtZKcVq103HYHu4vZA4WPhFqDeI6c5JEBN7HPRcyRYGyMJ6f0b8GOqUBpdodEHqUtGZIAgxNPE9zLHwXgAftWyLIbSHG6CtqzOU4ox1hqNm2CSdzkfVRu4UpzyZK6KZWk08kyI0ecYUXkrpgJBVbpJXsfRB20tNZFcY6uKQ5TflOoHcO%2BraQ6u0UY%2BATUZM7P5ef%2Bm1B4lOdEbQMgoe6jnGyaMKCaH6a3%2F08keQspFcPeZRUjH0DT6%2B%2Fp4cXqZEoFSbWdHiSIlKEteF%2B0al2&X-Amz-Signature=731ff73b12abe13eae0901e3bed8eaf25c599216c39a83e527d7b3633bc69dea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QVYC3QK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BHdE9MUNKGNiXJSpbOvgwNXhzPpHoBFG6PdkzmcDAgIgbpEvPbZ6x3ZpEIXFK8E9JyLHsrdZo2e8f0Lgx2Pasyoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNdHqX%2B7yPJalVrLNCrcA1ngkbCdI9fhOkYI6seCwq3B4hUP9rArxWkCeZB5PMuEhhEl7yoUGYVwSZ9JoHrOH3gUCcfipBM09dCe04Ezgyh%2FZkWTijnD%2Fyl27YtIGZLItD6NpD4hLyhwKwu8Q81SV7%2FvWHz2g%2BwC0bgmx%2FMXxcC%2FVXppDBtpAw5L39aQkdfDrZaHeGP70uOcpD7idmYBZrctuPdvcr8UVGGof5wyimHmqLa3vGl8bNnmSzxqi%2FPMVW07%2Bt0nsPemANfEAd0A7ZM9v7H%2FAulc%2BMOHfhECbgat0f6zPI93sQUpueYrxurUUZxmUCXWojN7JGF7RgzyLuwVY%2FQbrJl5xAg1eEc9BW5pQue6%2BaZ9IiEnvU1Egra7m8S3qU6XUcGV4jxeWJb9cwEaEX%2FSk8%2BmKE7lXxxyTnn5aZx3TbSNndstglp%2FvdG0RgNqecJbDK52pWn3LjUyne%2FlXmZozG1wVJ9Judcm2TkEpmakBzgBB5MMhclTXmcIh8%2FoLe2Gqk0NnVaZCY3GoFIyojPl5zeh2%2FQGZTPt8prpiG0x9lf3rvd04%2BMIv3HiHAM8TwaKxgtqH1oTrbFvpkj6D2OsrI4qo4siWtZKcVq103HYHu4vZA4WPhFqDeI6c5JEBN7HPRcyRYGyMJ6f0b8GOqUBpdodEHqUtGZIAgxNPE9zLHwXgAftWyLIbSHG6CtqzOU4ox1hqNm2CSdzkfVRu4UpzyZK6KZWk08kyI0ecYUXkrpgJBVbpJXsfRB20tNZFcY6uKQ5TflOoHcO%2BraQ6u0UY%2BATUZM7P5ef%2Bm1B4lOdEbQMgoe6jnGyaMKCaH6a3%2F08keQspFcPeZRUjH0DT6%2B%2Fp4cXqZEoFSbWdHiSIlKEteF%2B0al2&X-Amz-Signature=c79953176a1af63ecb17b47dcd685bd233aa267f7cbbc0f45fd4b3acc4ba6500&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QVYC3QK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BHdE9MUNKGNiXJSpbOvgwNXhzPpHoBFG6PdkzmcDAgIgbpEvPbZ6x3ZpEIXFK8E9JyLHsrdZo2e8f0Lgx2Pasyoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNdHqX%2B7yPJalVrLNCrcA1ngkbCdI9fhOkYI6seCwq3B4hUP9rArxWkCeZB5PMuEhhEl7yoUGYVwSZ9JoHrOH3gUCcfipBM09dCe04Ezgyh%2FZkWTijnD%2Fyl27YtIGZLItD6NpD4hLyhwKwu8Q81SV7%2FvWHz2g%2BwC0bgmx%2FMXxcC%2FVXppDBtpAw5L39aQkdfDrZaHeGP70uOcpD7idmYBZrctuPdvcr8UVGGof5wyimHmqLa3vGl8bNnmSzxqi%2FPMVW07%2Bt0nsPemANfEAd0A7ZM9v7H%2FAulc%2BMOHfhECbgat0f6zPI93sQUpueYrxurUUZxmUCXWojN7JGF7RgzyLuwVY%2FQbrJl5xAg1eEc9BW5pQue6%2BaZ9IiEnvU1Egra7m8S3qU6XUcGV4jxeWJb9cwEaEX%2FSk8%2BmKE7lXxxyTnn5aZx3TbSNndstglp%2FvdG0RgNqecJbDK52pWn3LjUyne%2FlXmZozG1wVJ9Judcm2TkEpmakBzgBB5MMhclTXmcIh8%2FoLe2Gqk0NnVaZCY3GoFIyojPl5zeh2%2FQGZTPt8prpiG0x9lf3rvd04%2BMIv3HiHAM8TwaKxgtqH1oTrbFvpkj6D2OsrI4qo4siWtZKcVq103HYHu4vZA4WPhFqDeI6c5JEBN7HPRcyRYGyMJ6f0b8GOqUBpdodEHqUtGZIAgxNPE9zLHwXgAftWyLIbSHG6CtqzOU4ox1hqNm2CSdzkfVRu4UpzyZK6KZWk08kyI0ecYUXkrpgJBVbpJXsfRB20tNZFcY6uKQ5TflOoHcO%2BraQ6u0UY%2BATUZM7P5ef%2Bm1B4lOdEbQMgoe6jnGyaMKCaH6a3%2F08keQspFcPeZRUjH0DT6%2B%2Fp4cXqZEoFSbWdHiSIlKEteF%2B0al2&X-Amz-Signature=1db3b965b615de3eac8472f4804d5cc2cad392ff6375d0201f8753c7482a00aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QVYC3QK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1%2BHdE9MUNKGNiXJSpbOvgwNXhzPpHoBFG6PdkzmcDAgIgbpEvPbZ6x3ZpEIXFK8E9JyLHsrdZo2e8f0Lgx2Pasyoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNdHqX%2B7yPJalVrLNCrcA1ngkbCdI9fhOkYI6seCwq3B4hUP9rArxWkCeZB5PMuEhhEl7yoUGYVwSZ9JoHrOH3gUCcfipBM09dCe04Ezgyh%2FZkWTijnD%2Fyl27YtIGZLItD6NpD4hLyhwKwu8Q81SV7%2FvWHz2g%2BwC0bgmx%2FMXxcC%2FVXppDBtpAw5L39aQkdfDrZaHeGP70uOcpD7idmYBZrctuPdvcr8UVGGof5wyimHmqLa3vGl8bNnmSzxqi%2FPMVW07%2Bt0nsPemANfEAd0A7ZM9v7H%2FAulc%2BMOHfhECbgat0f6zPI93sQUpueYrxurUUZxmUCXWojN7JGF7RgzyLuwVY%2FQbrJl5xAg1eEc9BW5pQue6%2BaZ9IiEnvU1Egra7m8S3qU6XUcGV4jxeWJb9cwEaEX%2FSk8%2BmKE7lXxxyTnn5aZx3TbSNndstglp%2FvdG0RgNqecJbDK52pWn3LjUyne%2FlXmZozG1wVJ9Judcm2TkEpmakBzgBB5MMhclTXmcIh8%2FoLe2Gqk0NnVaZCY3GoFIyojPl5zeh2%2FQGZTPt8prpiG0x9lf3rvd04%2BMIv3HiHAM8TwaKxgtqH1oTrbFvpkj6D2OsrI4qo4siWtZKcVq103HYHu4vZA4WPhFqDeI6c5JEBN7HPRcyRYGyMJ6f0b8GOqUBpdodEHqUtGZIAgxNPE9zLHwXgAftWyLIbSHG6CtqzOU4ox1hqNm2CSdzkfVRu4UpzyZK6KZWk08kyI0ecYUXkrpgJBVbpJXsfRB20tNZFcY6uKQ5TflOoHcO%2BraQ6u0UY%2BATUZM7P5ef%2Bm1B4lOdEbQMgoe6jnGyaMKCaH6a3%2F08keQspFcPeZRUjH0DT6%2B%2Fp4cXqZEoFSbWdHiSIlKEteF%2B0al2&X-Amz-Signature=2c21bd3bdfa9bec583f22f1f9b29428b1f1ae79d7d7f90cb12bf8aacff6ae433&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
