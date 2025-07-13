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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4HS4P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuDIu%2FxSUNgpMetMNjbaagNLn9T9cwVitMQgOzueVJRwIhAIk8rQtIlHePhVVVoq4qDZCGOaDF84ZPu%2BsVrCC%2Fr0tNKv8DCBAQABoMNjM3NDIzMTgzODA1IgzkpMEQPgpoSR5%2FHNsq3AN5zw9dLaeYbd8sG1OeDp3gHpmeqSwLt0fApiTAFt6ajQrBzcmiIyQntIvrjvInav3r9OoiXnvqXj0%2F2vue7cyJYr7fFq22smPM1Hch9DzToXgw8TyxWjkxEBHJ8Xs%2Ft%2F65iITaoZPyehli6tNq8WsLNPxsXaXuup3jJUrbxtIQ4dbDAomUwl783fpWxWsq5Frokr70LBtdq80J%2FEINej4JJbS%2Fa7D%2FDLXrF1tHrX6SXkZB2ozoAcQVgdrbh9G%2BsWer6sKUy8qun3Lkwu5WeN%2BklXhFX%2Bno1mT6pJ2IvzhfJrj0PUwLaXVrccs%2BEa6%2BCZaJWIPaBjnHRNrB37SAw1eKsPaZZPeJPOhzVKPc7DrGvmUluwh3htpuDAHiZuEC64cd9Xkd6lHuA0KlI9VHlGfOJazfs0ObhzC0phHfOlzty8JYyRmCwhj1QACaBRvroaAaVkvXnlmE3o9tOQ8a1AQRBuR4rjgD1%2Fo%2BqCFfxAUib5fjd4Y%2BuFYRLof3xN9btGfTGph527xiZKGKxpHsfO108RB3VjgSVUl0Alma1JjLeLyEo%2BJX9nclGDgA5IgK%2FDtKC68NhW21wxs03yv17Z4RKxuGfdQMIf8BB78yFGquocCDqOD79DX08p1RojDxpM3DBjqkATfZ6NGD5aJl4vlAKLVaZkP5GkI%2BiKN4LPnirSRONm9dLqWuryvt0wc1aBOA0b%2Bc6kpG8JIyHJ9eRwKnjNi%2FqqnF99%2Br%2FsKIXbRr4iwo7pTq88K1bAElr0Y53ys0lfTg2QbzxNQbmWhDaTMJ6WDzy%2BtpZ13VN2TC%2Btg%2FreyLecn0ozJLK%2BmLOEnWedzzYCh7le19awbr%2Fr0kMc%2BERrmvr6ZUyhKN&X-Amz-Signature=cf1f4809ff30cf4011c535cc34762c49918513521736697a2146f85e89b02ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4HS4P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuDIu%2FxSUNgpMetMNjbaagNLn9T9cwVitMQgOzueVJRwIhAIk8rQtIlHePhVVVoq4qDZCGOaDF84ZPu%2BsVrCC%2Fr0tNKv8DCBAQABoMNjM3NDIzMTgzODA1IgzkpMEQPgpoSR5%2FHNsq3AN5zw9dLaeYbd8sG1OeDp3gHpmeqSwLt0fApiTAFt6ajQrBzcmiIyQntIvrjvInav3r9OoiXnvqXj0%2F2vue7cyJYr7fFq22smPM1Hch9DzToXgw8TyxWjkxEBHJ8Xs%2Ft%2F65iITaoZPyehli6tNq8WsLNPxsXaXuup3jJUrbxtIQ4dbDAomUwl783fpWxWsq5Frokr70LBtdq80J%2FEINej4JJbS%2Fa7D%2FDLXrF1tHrX6SXkZB2ozoAcQVgdrbh9G%2BsWer6sKUy8qun3Lkwu5WeN%2BklXhFX%2Bno1mT6pJ2IvzhfJrj0PUwLaXVrccs%2BEa6%2BCZaJWIPaBjnHRNrB37SAw1eKsPaZZPeJPOhzVKPc7DrGvmUluwh3htpuDAHiZuEC64cd9Xkd6lHuA0KlI9VHlGfOJazfs0ObhzC0phHfOlzty8JYyRmCwhj1QACaBRvroaAaVkvXnlmE3o9tOQ8a1AQRBuR4rjgD1%2Fo%2BqCFfxAUib5fjd4Y%2BuFYRLof3xN9btGfTGph527xiZKGKxpHsfO108RB3VjgSVUl0Alma1JjLeLyEo%2BJX9nclGDgA5IgK%2FDtKC68NhW21wxs03yv17Z4RKxuGfdQMIf8BB78yFGquocCDqOD79DX08p1RojDxpM3DBjqkATfZ6NGD5aJl4vlAKLVaZkP5GkI%2BiKN4LPnirSRONm9dLqWuryvt0wc1aBOA0b%2Bc6kpG8JIyHJ9eRwKnjNi%2FqqnF99%2Br%2FsKIXbRr4iwo7pTq88K1bAElr0Y53ys0lfTg2QbzxNQbmWhDaTMJ6WDzy%2BtpZ13VN2TC%2Btg%2FreyLecn0ozJLK%2BmLOEnWedzzYCh7le19awbr%2Fr0kMc%2BERrmvr6ZUyhKN&X-Amz-Signature=583a0aef36ab6df44a945010694065bfbfc36fb17c5741ea1fa6ff51f4b3a2d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4HS4P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuDIu%2FxSUNgpMetMNjbaagNLn9T9cwVitMQgOzueVJRwIhAIk8rQtIlHePhVVVoq4qDZCGOaDF84ZPu%2BsVrCC%2Fr0tNKv8DCBAQABoMNjM3NDIzMTgzODA1IgzkpMEQPgpoSR5%2FHNsq3AN5zw9dLaeYbd8sG1OeDp3gHpmeqSwLt0fApiTAFt6ajQrBzcmiIyQntIvrjvInav3r9OoiXnvqXj0%2F2vue7cyJYr7fFq22smPM1Hch9DzToXgw8TyxWjkxEBHJ8Xs%2Ft%2F65iITaoZPyehli6tNq8WsLNPxsXaXuup3jJUrbxtIQ4dbDAomUwl783fpWxWsq5Frokr70LBtdq80J%2FEINej4JJbS%2Fa7D%2FDLXrF1tHrX6SXkZB2ozoAcQVgdrbh9G%2BsWer6sKUy8qun3Lkwu5WeN%2BklXhFX%2Bno1mT6pJ2IvzhfJrj0PUwLaXVrccs%2BEa6%2BCZaJWIPaBjnHRNrB37SAw1eKsPaZZPeJPOhzVKPc7DrGvmUluwh3htpuDAHiZuEC64cd9Xkd6lHuA0KlI9VHlGfOJazfs0ObhzC0phHfOlzty8JYyRmCwhj1QACaBRvroaAaVkvXnlmE3o9tOQ8a1AQRBuR4rjgD1%2Fo%2BqCFfxAUib5fjd4Y%2BuFYRLof3xN9btGfTGph527xiZKGKxpHsfO108RB3VjgSVUl0Alma1JjLeLyEo%2BJX9nclGDgA5IgK%2FDtKC68NhW21wxs03yv17Z4RKxuGfdQMIf8BB78yFGquocCDqOD79DX08p1RojDxpM3DBjqkATfZ6NGD5aJl4vlAKLVaZkP5GkI%2BiKN4LPnirSRONm9dLqWuryvt0wc1aBOA0b%2Bc6kpG8JIyHJ9eRwKnjNi%2FqqnF99%2Br%2FsKIXbRr4iwo7pTq88K1bAElr0Y53ys0lfTg2QbzxNQbmWhDaTMJ6WDzy%2BtpZ13VN2TC%2Btg%2FreyLecn0ozJLK%2BmLOEnWedzzYCh7le19awbr%2Fr0kMc%2BERrmvr6ZUyhKN&X-Amz-Signature=87196710897e65492a593f318a80bcb8e4e9feff397f045385b14e92e9252978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4HS4P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuDIu%2FxSUNgpMetMNjbaagNLn9T9cwVitMQgOzueVJRwIhAIk8rQtIlHePhVVVoq4qDZCGOaDF84ZPu%2BsVrCC%2Fr0tNKv8DCBAQABoMNjM3NDIzMTgzODA1IgzkpMEQPgpoSR5%2FHNsq3AN5zw9dLaeYbd8sG1OeDp3gHpmeqSwLt0fApiTAFt6ajQrBzcmiIyQntIvrjvInav3r9OoiXnvqXj0%2F2vue7cyJYr7fFq22smPM1Hch9DzToXgw8TyxWjkxEBHJ8Xs%2Ft%2F65iITaoZPyehli6tNq8WsLNPxsXaXuup3jJUrbxtIQ4dbDAomUwl783fpWxWsq5Frokr70LBtdq80J%2FEINej4JJbS%2Fa7D%2FDLXrF1tHrX6SXkZB2ozoAcQVgdrbh9G%2BsWer6sKUy8qun3Lkwu5WeN%2BklXhFX%2Bno1mT6pJ2IvzhfJrj0PUwLaXVrccs%2BEa6%2BCZaJWIPaBjnHRNrB37SAw1eKsPaZZPeJPOhzVKPc7DrGvmUluwh3htpuDAHiZuEC64cd9Xkd6lHuA0KlI9VHlGfOJazfs0ObhzC0phHfOlzty8JYyRmCwhj1QACaBRvroaAaVkvXnlmE3o9tOQ8a1AQRBuR4rjgD1%2Fo%2BqCFfxAUib5fjd4Y%2BuFYRLof3xN9btGfTGph527xiZKGKxpHsfO108RB3VjgSVUl0Alma1JjLeLyEo%2BJX9nclGDgA5IgK%2FDtKC68NhW21wxs03yv17Z4RKxuGfdQMIf8BB78yFGquocCDqOD79DX08p1RojDxpM3DBjqkATfZ6NGD5aJl4vlAKLVaZkP5GkI%2BiKN4LPnirSRONm9dLqWuryvt0wc1aBOA0b%2Bc6kpG8JIyHJ9eRwKnjNi%2FqqnF99%2Br%2FsKIXbRr4iwo7pTq88K1bAElr0Y53ys0lfTg2QbzxNQbmWhDaTMJ6WDzy%2BtpZ13VN2TC%2Btg%2FreyLecn0ozJLK%2BmLOEnWedzzYCh7le19awbr%2Fr0kMc%2BERrmvr6ZUyhKN&X-Amz-Signature=e40ea1c06acc676795ed685fdd8f203579fcb9ecd19d4a03fd2d88c9e23a18b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4HS4P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuDIu%2FxSUNgpMetMNjbaagNLn9T9cwVitMQgOzueVJRwIhAIk8rQtIlHePhVVVoq4qDZCGOaDF84ZPu%2BsVrCC%2Fr0tNKv8DCBAQABoMNjM3NDIzMTgzODA1IgzkpMEQPgpoSR5%2FHNsq3AN5zw9dLaeYbd8sG1OeDp3gHpmeqSwLt0fApiTAFt6ajQrBzcmiIyQntIvrjvInav3r9OoiXnvqXj0%2F2vue7cyJYr7fFq22smPM1Hch9DzToXgw8TyxWjkxEBHJ8Xs%2Ft%2F65iITaoZPyehli6tNq8WsLNPxsXaXuup3jJUrbxtIQ4dbDAomUwl783fpWxWsq5Frokr70LBtdq80J%2FEINej4JJbS%2Fa7D%2FDLXrF1tHrX6SXkZB2ozoAcQVgdrbh9G%2BsWer6sKUy8qun3Lkwu5WeN%2BklXhFX%2Bno1mT6pJ2IvzhfJrj0PUwLaXVrccs%2BEa6%2BCZaJWIPaBjnHRNrB37SAw1eKsPaZZPeJPOhzVKPc7DrGvmUluwh3htpuDAHiZuEC64cd9Xkd6lHuA0KlI9VHlGfOJazfs0ObhzC0phHfOlzty8JYyRmCwhj1QACaBRvroaAaVkvXnlmE3o9tOQ8a1AQRBuR4rjgD1%2Fo%2BqCFfxAUib5fjd4Y%2BuFYRLof3xN9btGfTGph527xiZKGKxpHsfO108RB3VjgSVUl0Alma1JjLeLyEo%2BJX9nclGDgA5IgK%2FDtKC68NhW21wxs03yv17Z4RKxuGfdQMIf8BB78yFGquocCDqOD79DX08p1RojDxpM3DBjqkATfZ6NGD5aJl4vlAKLVaZkP5GkI%2BiKN4LPnirSRONm9dLqWuryvt0wc1aBOA0b%2Bc6kpG8JIyHJ9eRwKnjNi%2FqqnF99%2Br%2FsKIXbRr4iwo7pTq88K1bAElr0Y53ys0lfTg2QbzxNQbmWhDaTMJ6WDzy%2BtpZ13VN2TC%2Btg%2FreyLecn0ozJLK%2BmLOEnWedzzYCh7le19awbr%2Fr0kMc%2BERrmvr6ZUyhKN&X-Amz-Signature=eab939da7cd95d987897a19210654d4e2e286d88247d81a8cb7d6ee910228d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4HS4P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuDIu%2FxSUNgpMetMNjbaagNLn9T9cwVitMQgOzueVJRwIhAIk8rQtIlHePhVVVoq4qDZCGOaDF84ZPu%2BsVrCC%2Fr0tNKv8DCBAQABoMNjM3NDIzMTgzODA1IgzkpMEQPgpoSR5%2FHNsq3AN5zw9dLaeYbd8sG1OeDp3gHpmeqSwLt0fApiTAFt6ajQrBzcmiIyQntIvrjvInav3r9OoiXnvqXj0%2F2vue7cyJYr7fFq22smPM1Hch9DzToXgw8TyxWjkxEBHJ8Xs%2Ft%2F65iITaoZPyehli6tNq8WsLNPxsXaXuup3jJUrbxtIQ4dbDAomUwl783fpWxWsq5Frokr70LBtdq80J%2FEINej4JJbS%2Fa7D%2FDLXrF1tHrX6SXkZB2ozoAcQVgdrbh9G%2BsWer6sKUy8qun3Lkwu5WeN%2BklXhFX%2Bno1mT6pJ2IvzhfJrj0PUwLaXVrccs%2BEa6%2BCZaJWIPaBjnHRNrB37SAw1eKsPaZZPeJPOhzVKPc7DrGvmUluwh3htpuDAHiZuEC64cd9Xkd6lHuA0KlI9VHlGfOJazfs0ObhzC0phHfOlzty8JYyRmCwhj1QACaBRvroaAaVkvXnlmE3o9tOQ8a1AQRBuR4rjgD1%2Fo%2BqCFfxAUib5fjd4Y%2BuFYRLof3xN9btGfTGph527xiZKGKxpHsfO108RB3VjgSVUl0Alma1JjLeLyEo%2BJX9nclGDgA5IgK%2FDtKC68NhW21wxs03yv17Z4RKxuGfdQMIf8BB78yFGquocCDqOD79DX08p1RojDxpM3DBjqkATfZ6NGD5aJl4vlAKLVaZkP5GkI%2BiKN4LPnirSRONm9dLqWuryvt0wc1aBOA0b%2Bc6kpG8JIyHJ9eRwKnjNi%2FqqnF99%2Br%2FsKIXbRr4iwo7pTq88K1bAElr0Y53ys0lfTg2QbzxNQbmWhDaTMJ6WDzy%2BtpZ13VN2TC%2Btg%2FreyLecn0ozJLK%2BmLOEnWedzzYCh7le19awbr%2Fr0kMc%2BERrmvr6ZUyhKN&X-Amz-Signature=15f67a7e354b81d7f712a53b474b4a25e599f3dc16c5baa55cc6072eeeb757e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4HS4P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuDIu%2FxSUNgpMetMNjbaagNLn9T9cwVitMQgOzueVJRwIhAIk8rQtIlHePhVVVoq4qDZCGOaDF84ZPu%2BsVrCC%2Fr0tNKv8DCBAQABoMNjM3NDIzMTgzODA1IgzkpMEQPgpoSR5%2FHNsq3AN5zw9dLaeYbd8sG1OeDp3gHpmeqSwLt0fApiTAFt6ajQrBzcmiIyQntIvrjvInav3r9OoiXnvqXj0%2F2vue7cyJYr7fFq22smPM1Hch9DzToXgw8TyxWjkxEBHJ8Xs%2Ft%2F65iITaoZPyehli6tNq8WsLNPxsXaXuup3jJUrbxtIQ4dbDAomUwl783fpWxWsq5Frokr70LBtdq80J%2FEINej4JJbS%2Fa7D%2FDLXrF1tHrX6SXkZB2ozoAcQVgdrbh9G%2BsWer6sKUy8qun3Lkwu5WeN%2BklXhFX%2Bno1mT6pJ2IvzhfJrj0PUwLaXVrccs%2BEa6%2BCZaJWIPaBjnHRNrB37SAw1eKsPaZZPeJPOhzVKPc7DrGvmUluwh3htpuDAHiZuEC64cd9Xkd6lHuA0KlI9VHlGfOJazfs0ObhzC0phHfOlzty8JYyRmCwhj1QACaBRvroaAaVkvXnlmE3o9tOQ8a1AQRBuR4rjgD1%2Fo%2BqCFfxAUib5fjd4Y%2BuFYRLof3xN9btGfTGph527xiZKGKxpHsfO108RB3VjgSVUl0Alma1JjLeLyEo%2BJX9nclGDgA5IgK%2FDtKC68NhW21wxs03yv17Z4RKxuGfdQMIf8BB78yFGquocCDqOD79DX08p1RojDxpM3DBjqkATfZ6NGD5aJl4vlAKLVaZkP5GkI%2BiKN4LPnirSRONm9dLqWuryvt0wc1aBOA0b%2Bc6kpG8JIyHJ9eRwKnjNi%2FqqnF99%2Br%2FsKIXbRr4iwo7pTq88K1bAElr0Y53ys0lfTg2QbzxNQbmWhDaTMJ6WDzy%2BtpZ13VN2TC%2Btg%2FreyLecn0ozJLK%2BmLOEnWedzzYCh7le19awbr%2Fr0kMc%2BERrmvr6ZUyhKN&X-Amz-Signature=997f713e1d0c3bf0e4e310fe6af8e7bbd2a9ad089e9f36c8efecccaee66bbbe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4S4HS4P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuDIu%2FxSUNgpMetMNjbaagNLn9T9cwVitMQgOzueVJRwIhAIk8rQtIlHePhVVVoq4qDZCGOaDF84ZPu%2BsVrCC%2Fr0tNKv8DCBAQABoMNjM3NDIzMTgzODA1IgzkpMEQPgpoSR5%2FHNsq3AN5zw9dLaeYbd8sG1OeDp3gHpmeqSwLt0fApiTAFt6ajQrBzcmiIyQntIvrjvInav3r9OoiXnvqXj0%2F2vue7cyJYr7fFq22smPM1Hch9DzToXgw8TyxWjkxEBHJ8Xs%2Ft%2F65iITaoZPyehli6tNq8WsLNPxsXaXuup3jJUrbxtIQ4dbDAomUwl783fpWxWsq5Frokr70LBtdq80J%2FEINej4JJbS%2Fa7D%2FDLXrF1tHrX6SXkZB2ozoAcQVgdrbh9G%2BsWer6sKUy8qun3Lkwu5WeN%2BklXhFX%2Bno1mT6pJ2IvzhfJrj0PUwLaXVrccs%2BEa6%2BCZaJWIPaBjnHRNrB37SAw1eKsPaZZPeJPOhzVKPc7DrGvmUluwh3htpuDAHiZuEC64cd9Xkd6lHuA0KlI9VHlGfOJazfs0ObhzC0phHfOlzty8JYyRmCwhj1QACaBRvroaAaVkvXnlmE3o9tOQ8a1AQRBuR4rjgD1%2Fo%2BqCFfxAUib5fjd4Y%2BuFYRLof3xN9btGfTGph527xiZKGKxpHsfO108RB3VjgSVUl0Alma1JjLeLyEo%2BJX9nclGDgA5IgK%2FDtKC68NhW21wxs03yv17Z4RKxuGfdQMIf8BB78yFGquocCDqOD79DX08p1RojDxpM3DBjqkATfZ6NGD5aJl4vlAKLVaZkP5GkI%2BiKN4LPnirSRONm9dLqWuryvt0wc1aBOA0b%2Bc6kpG8JIyHJ9eRwKnjNi%2FqqnF99%2Br%2FsKIXbRr4iwo7pTq88K1bAElr0Y53ys0lfTg2QbzxNQbmWhDaTMJ6WDzy%2BtpZ13VN2TC%2Btg%2FreyLecn0ozJLK%2BmLOEnWedzzYCh7le19awbr%2Fr0kMc%2BERrmvr6ZUyhKN&X-Amz-Signature=971106117c80fbcccb60b03316fb0c969721dbf14b29544895e0c2130813dc76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
