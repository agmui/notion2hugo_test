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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GNYAMS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC5pPnV3jX4jDj53O%2BpaipSjjVl7dg9TKc2Wcb5df1aAiEA5Xj1npmfI1Wgo3fCFN8l50K%2F4hgXU%2BXebtLCvAwG9ckq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN2bhshs%2BNUkSDIA8SrcA%2B0IGz%2BpecfojkkPyqKiYnQaIGKvG9c6H6Rc5w0ysaA%2Bjngeu7fAOE5xLhvZE8hJ3xJFz54Fa4%2F%2BsXfvQwvDiJ4Us2nqPM1aiIRXRK6urfbEgKXqkKDx1%2BGqAB44MjV9dCtF4pQYYOne2xdaE%2FHDMBJ1LtnElanfbSqEbHutNnJq%2F5aeVl4J49bTyRTYUU71Zi%2BUjzT9uBBJlqOW1PgtWLHGGi1GtEk6wfPTRIJkZTCsw%2BdZeDwIczH6rvWL7YQqUE%2F6QGcHk3WaSf%2FxVq2E%2BZ5dQ%2Fx%2FEavoSrlUJsWeH6fdlzem9NTEWlAGcHvQG3hbd1eaemfyv7MNnOb%2BvpaSe%2BZoz0Xf7aSkmiQ8hc7VMJ2%2BU6P7%2F1M8ANQZfzPsLTxdhASk76m%2BVlfxyGxZUmbq%2F%2B9os92dPun93dgNmBvkUuvMEL1Z5txCjjHTfH9x%2FNihQZZI15z%2FbDHUXYo%2BzjlNJzFRJKHN1HiUUKvvvrYtSorRfTaKLu0tsyq39XddUgCkjgARb3pnBqB55IOR4LuiLP0oqZf%2Fk%2B6Y9rHjUSJOHJx1fscf1Y7n3MuTGqpZXowsHEJLf06CU9EmmvjAdYtFEtUi47dE6E4Gl6VN9HjxPZHG8823wXjsaL3U3l5BMNWR68AGOqUBBSK2rYVTne9uuAGOn%2FcT5K%2FtQLFAsG%2FuTFMWLOGo5ipKNsqsQjsNmdE%2BZo%2BCOlZwTnR6IkQWLqkldR2Nv9dN4ewdxYLjc1qf3EcCauPd%2BzXOIl4bv1XZc%2FM%2FAKaWvAbN%2Ba%2FzHkeNEIzMI4GnjfKPajDW5BkOQduXnOgGJryoXX1IYJoZYlo9sc71YkmedqeZpVXHpnejTMd7JITL18Ph%2FOvL6%2Fjh&X-Amz-Signature=bceace9608c00a8b3ffa7055ec8f23d076f0f759c8019312e7579d2012e6c27e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GNYAMS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC5pPnV3jX4jDj53O%2BpaipSjjVl7dg9TKc2Wcb5df1aAiEA5Xj1npmfI1Wgo3fCFN8l50K%2F4hgXU%2BXebtLCvAwG9ckq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN2bhshs%2BNUkSDIA8SrcA%2B0IGz%2BpecfojkkPyqKiYnQaIGKvG9c6H6Rc5w0ysaA%2Bjngeu7fAOE5xLhvZE8hJ3xJFz54Fa4%2F%2BsXfvQwvDiJ4Us2nqPM1aiIRXRK6urfbEgKXqkKDx1%2BGqAB44MjV9dCtF4pQYYOne2xdaE%2FHDMBJ1LtnElanfbSqEbHutNnJq%2F5aeVl4J49bTyRTYUU71Zi%2BUjzT9uBBJlqOW1PgtWLHGGi1GtEk6wfPTRIJkZTCsw%2BdZeDwIczH6rvWL7YQqUE%2F6QGcHk3WaSf%2FxVq2E%2BZ5dQ%2Fx%2FEavoSrlUJsWeH6fdlzem9NTEWlAGcHvQG3hbd1eaemfyv7MNnOb%2BvpaSe%2BZoz0Xf7aSkmiQ8hc7VMJ2%2BU6P7%2F1M8ANQZfzPsLTxdhASk76m%2BVlfxyGxZUmbq%2F%2B9os92dPun93dgNmBvkUuvMEL1Z5txCjjHTfH9x%2FNihQZZI15z%2FbDHUXYo%2BzjlNJzFRJKHN1HiUUKvvvrYtSorRfTaKLu0tsyq39XddUgCkjgARb3pnBqB55IOR4LuiLP0oqZf%2Fk%2B6Y9rHjUSJOHJx1fscf1Y7n3MuTGqpZXowsHEJLf06CU9EmmvjAdYtFEtUi47dE6E4Gl6VN9HjxPZHG8823wXjsaL3U3l5BMNWR68AGOqUBBSK2rYVTne9uuAGOn%2FcT5K%2FtQLFAsG%2FuTFMWLOGo5ipKNsqsQjsNmdE%2BZo%2BCOlZwTnR6IkQWLqkldR2Nv9dN4ewdxYLjc1qf3EcCauPd%2BzXOIl4bv1XZc%2FM%2FAKaWvAbN%2Ba%2FzHkeNEIzMI4GnjfKPajDW5BkOQduXnOgGJryoXX1IYJoZYlo9sc71YkmedqeZpVXHpnejTMd7JITL18Ph%2FOvL6%2Fjh&X-Amz-Signature=9bbc207692f8fa3f8e4c9517f391e7b902033f77cbab9cd8944932f7deb1756c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GNYAMS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC5pPnV3jX4jDj53O%2BpaipSjjVl7dg9TKc2Wcb5df1aAiEA5Xj1npmfI1Wgo3fCFN8l50K%2F4hgXU%2BXebtLCvAwG9ckq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN2bhshs%2BNUkSDIA8SrcA%2B0IGz%2BpecfojkkPyqKiYnQaIGKvG9c6H6Rc5w0ysaA%2Bjngeu7fAOE5xLhvZE8hJ3xJFz54Fa4%2F%2BsXfvQwvDiJ4Us2nqPM1aiIRXRK6urfbEgKXqkKDx1%2BGqAB44MjV9dCtF4pQYYOne2xdaE%2FHDMBJ1LtnElanfbSqEbHutNnJq%2F5aeVl4J49bTyRTYUU71Zi%2BUjzT9uBBJlqOW1PgtWLHGGi1GtEk6wfPTRIJkZTCsw%2BdZeDwIczH6rvWL7YQqUE%2F6QGcHk3WaSf%2FxVq2E%2BZ5dQ%2Fx%2FEavoSrlUJsWeH6fdlzem9NTEWlAGcHvQG3hbd1eaemfyv7MNnOb%2BvpaSe%2BZoz0Xf7aSkmiQ8hc7VMJ2%2BU6P7%2F1M8ANQZfzPsLTxdhASk76m%2BVlfxyGxZUmbq%2F%2B9os92dPun93dgNmBvkUuvMEL1Z5txCjjHTfH9x%2FNihQZZI15z%2FbDHUXYo%2BzjlNJzFRJKHN1HiUUKvvvrYtSorRfTaKLu0tsyq39XddUgCkjgARb3pnBqB55IOR4LuiLP0oqZf%2Fk%2B6Y9rHjUSJOHJx1fscf1Y7n3MuTGqpZXowsHEJLf06CU9EmmvjAdYtFEtUi47dE6E4Gl6VN9HjxPZHG8823wXjsaL3U3l5BMNWR68AGOqUBBSK2rYVTne9uuAGOn%2FcT5K%2FtQLFAsG%2FuTFMWLOGo5ipKNsqsQjsNmdE%2BZo%2BCOlZwTnR6IkQWLqkldR2Nv9dN4ewdxYLjc1qf3EcCauPd%2BzXOIl4bv1XZc%2FM%2FAKaWvAbN%2Ba%2FzHkeNEIzMI4GnjfKPajDW5BkOQduXnOgGJryoXX1IYJoZYlo9sc71YkmedqeZpVXHpnejTMd7JITL18Ph%2FOvL6%2Fjh&X-Amz-Signature=48ec770eda4b1131f648d4d9f1ee944445f957be392b379627bc90276cf75cec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GNYAMS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC5pPnV3jX4jDj53O%2BpaipSjjVl7dg9TKc2Wcb5df1aAiEA5Xj1npmfI1Wgo3fCFN8l50K%2F4hgXU%2BXebtLCvAwG9ckq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN2bhshs%2BNUkSDIA8SrcA%2B0IGz%2BpecfojkkPyqKiYnQaIGKvG9c6H6Rc5w0ysaA%2Bjngeu7fAOE5xLhvZE8hJ3xJFz54Fa4%2F%2BsXfvQwvDiJ4Us2nqPM1aiIRXRK6urfbEgKXqkKDx1%2BGqAB44MjV9dCtF4pQYYOne2xdaE%2FHDMBJ1LtnElanfbSqEbHutNnJq%2F5aeVl4J49bTyRTYUU71Zi%2BUjzT9uBBJlqOW1PgtWLHGGi1GtEk6wfPTRIJkZTCsw%2BdZeDwIczH6rvWL7YQqUE%2F6QGcHk3WaSf%2FxVq2E%2BZ5dQ%2Fx%2FEavoSrlUJsWeH6fdlzem9NTEWlAGcHvQG3hbd1eaemfyv7MNnOb%2BvpaSe%2BZoz0Xf7aSkmiQ8hc7VMJ2%2BU6P7%2F1M8ANQZfzPsLTxdhASk76m%2BVlfxyGxZUmbq%2F%2B9os92dPun93dgNmBvkUuvMEL1Z5txCjjHTfH9x%2FNihQZZI15z%2FbDHUXYo%2BzjlNJzFRJKHN1HiUUKvvvrYtSorRfTaKLu0tsyq39XddUgCkjgARb3pnBqB55IOR4LuiLP0oqZf%2Fk%2B6Y9rHjUSJOHJx1fscf1Y7n3MuTGqpZXowsHEJLf06CU9EmmvjAdYtFEtUi47dE6E4Gl6VN9HjxPZHG8823wXjsaL3U3l5BMNWR68AGOqUBBSK2rYVTne9uuAGOn%2FcT5K%2FtQLFAsG%2FuTFMWLOGo5ipKNsqsQjsNmdE%2BZo%2BCOlZwTnR6IkQWLqkldR2Nv9dN4ewdxYLjc1qf3EcCauPd%2BzXOIl4bv1XZc%2FM%2FAKaWvAbN%2Ba%2FzHkeNEIzMI4GnjfKPajDW5BkOQduXnOgGJryoXX1IYJoZYlo9sc71YkmedqeZpVXHpnejTMd7JITL18Ph%2FOvL6%2Fjh&X-Amz-Signature=94df6cf536872c82d73fde8a6522065f435f1caec60400fbf7e45438397625c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GNYAMS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC5pPnV3jX4jDj53O%2BpaipSjjVl7dg9TKc2Wcb5df1aAiEA5Xj1npmfI1Wgo3fCFN8l50K%2F4hgXU%2BXebtLCvAwG9ckq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN2bhshs%2BNUkSDIA8SrcA%2B0IGz%2BpecfojkkPyqKiYnQaIGKvG9c6H6Rc5w0ysaA%2Bjngeu7fAOE5xLhvZE8hJ3xJFz54Fa4%2F%2BsXfvQwvDiJ4Us2nqPM1aiIRXRK6urfbEgKXqkKDx1%2BGqAB44MjV9dCtF4pQYYOne2xdaE%2FHDMBJ1LtnElanfbSqEbHutNnJq%2F5aeVl4J49bTyRTYUU71Zi%2BUjzT9uBBJlqOW1PgtWLHGGi1GtEk6wfPTRIJkZTCsw%2BdZeDwIczH6rvWL7YQqUE%2F6QGcHk3WaSf%2FxVq2E%2BZ5dQ%2Fx%2FEavoSrlUJsWeH6fdlzem9NTEWlAGcHvQG3hbd1eaemfyv7MNnOb%2BvpaSe%2BZoz0Xf7aSkmiQ8hc7VMJ2%2BU6P7%2F1M8ANQZfzPsLTxdhASk76m%2BVlfxyGxZUmbq%2F%2B9os92dPun93dgNmBvkUuvMEL1Z5txCjjHTfH9x%2FNihQZZI15z%2FbDHUXYo%2BzjlNJzFRJKHN1HiUUKvvvrYtSorRfTaKLu0tsyq39XddUgCkjgARb3pnBqB55IOR4LuiLP0oqZf%2Fk%2B6Y9rHjUSJOHJx1fscf1Y7n3MuTGqpZXowsHEJLf06CU9EmmvjAdYtFEtUi47dE6E4Gl6VN9HjxPZHG8823wXjsaL3U3l5BMNWR68AGOqUBBSK2rYVTne9uuAGOn%2FcT5K%2FtQLFAsG%2FuTFMWLOGo5ipKNsqsQjsNmdE%2BZo%2BCOlZwTnR6IkQWLqkldR2Nv9dN4ewdxYLjc1qf3EcCauPd%2BzXOIl4bv1XZc%2FM%2FAKaWvAbN%2Ba%2FzHkeNEIzMI4GnjfKPajDW5BkOQduXnOgGJryoXX1IYJoZYlo9sc71YkmedqeZpVXHpnejTMd7JITL18Ph%2FOvL6%2Fjh&X-Amz-Signature=7dd56b6cb4bdae28f066f758907bae74065d77251702f84d71bc14e85f11024e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GNYAMS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC5pPnV3jX4jDj53O%2BpaipSjjVl7dg9TKc2Wcb5df1aAiEA5Xj1npmfI1Wgo3fCFN8l50K%2F4hgXU%2BXebtLCvAwG9ckq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN2bhshs%2BNUkSDIA8SrcA%2B0IGz%2BpecfojkkPyqKiYnQaIGKvG9c6H6Rc5w0ysaA%2Bjngeu7fAOE5xLhvZE8hJ3xJFz54Fa4%2F%2BsXfvQwvDiJ4Us2nqPM1aiIRXRK6urfbEgKXqkKDx1%2BGqAB44MjV9dCtF4pQYYOne2xdaE%2FHDMBJ1LtnElanfbSqEbHutNnJq%2F5aeVl4J49bTyRTYUU71Zi%2BUjzT9uBBJlqOW1PgtWLHGGi1GtEk6wfPTRIJkZTCsw%2BdZeDwIczH6rvWL7YQqUE%2F6QGcHk3WaSf%2FxVq2E%2BZ5dQ%2Fx%2FEavoSrlUJsWeH6fdlzem9NTEWlAGcHvQG3hbd1eaemfyv7MNnOb%2BvpaSe%2BZoz0Xf7aSkmiQ8hc7VMJ2%2BU6P7%2F1M8ANQZfzPsLTxdhASk76m%2BVlfxyGxZUmbq%2F%2B9os92dPun93dgNmBvkUuvMEL1Z5txCjjHTfH9x%2FNihQZZI15z%2FbDHUXYo%2BzjlNJzFRJKHN1HiUUKvvvrYtSorRfTaKLu0tsyq39XddUgCkjgARb3pnBqB55IOR4LuiLP0oqZf%2Fk%2B6Y9rHjUSJOHJx1fscf1Y7n3MuTGqpZXowsHEJLf06CU9EmmvjAdYtFEtUi47dE6E4Gl6VN9HjxPZHG8823wXjsaL3U3l5BMNWR68AGOqUBBSK2rYVTne9uuAGOn%2FcT5K%2FtQLFAsG%2FuTFMWLOGo5ipKNsqsQjsNmdE%2BZo%2BCOlZwTnR6IkQWLqkldR2Nv9dN4ewdxYLjc1qf3EcCauPd%2BzXOIl4bv1XZc%2FM%2FAKaWvAbN%2Ba%2FzHkeNEIzMI4GnjfKPajDW5BkOQduXnOgGJryoXX1IYJoZYlo9sc71YkmedqeZpVXHpnejTMd7JITL18Ph%2FOvL6%2Fjh&X-Amz-Signature=1ecb208ee69a0cce2411f276bd8d7431108997c7526cdd85b7c0b23341f936e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GNYAMS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC5pPnV3jX4jDj53O%2BpaipSjjVl7dg9TKc2Wcb5df1aAiEA5Xj1npmfI1Wgo3fCFN8l50K%2F4hgXU%2BXebtLCvAwG9ckq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN2bhshs%2BNUkSDIA8SrcA%2B0IGz%2BpecfojkkPyqKiYnQaIGKvG9c6H6Rc5w0ysaA%2Bjngeu7fAOE5xLhvZE8hJ3xJFz54Fa4%2F%2BsXfvQwvDiJ4Us2nqPM1aiIRXRK6urfbEgKXqkKDx1%2BGqAB44MjV9dCtF4pQYYOne2xdaE%2FHDMBJ1LtnElanfbSqEbHutNnJq%2F5aeVl4J49bTyRTYUU71Zi%2BUjzT9uBBJlqOW1PgtWLHGGi1GtEk6wfPTRIJkZTCsw%2BdZeDwIczH6rvWL7YQqUE%2F6QGcHk3WaSf%2FxVq2E%2BZ5dQ%2Fx%2FEavoSrlUJsWeH6fdlzem9NTEWlAGcHvQG3hbd1eaemfyv7MNnOb%2BvpaSe%2BZoz0Xf7aSkmiQ8hc7VMJ2%2BU6P7%2F1M8ANQZfzPsLTxdhASk76m%2BVlfxyGxZUmbq%2F%2B9os92dPun93dgNmBvkUuvMEL1Z5txCjjHTfH9x%2FNihQZZI15z%2FbDHUXYo%2BzjlNJzFRJKHN1HiUUKvvvrYtSorRfTaKLu0tsyq39XddUgCkjgARb3pnBqB55IOR4LuiLP0oqZf%2Fk%2B6Y9rHjUSJOHJx1fscf1Y7n3MuTGqpZXowsHEJLf06CU9EmmvjAdYtFEtUi47dE6E4Gl6VN9HjxPZHG8823wXjsaL3U3l5BMNWR68AGOqUBBSK2rYVTne9uuAGOn%2FcT5K%2FtQLFAsG%2FuTFMWLOGo5ipKNsqsQjsNmdE%2BZo%2BCOlZwTnR6IkQWLqkldR2Nv9dN4ewdxYLjc1qf3EcCauPd%2BzXOIl4bv1XZc%2FM%2FAKaWvAbN%2Ba%2FzHkeNEIzMI4GnjfKPajDW5BkOQduXnOgGJryoXX1IYJoZYlo9sc71YkmedqeZpVXHpnejTMd7JITL18Ph%2FOvL6%2Fjh&X-Amz-Signature=5ba0bd545deab3d1b2aac965d7368c830a7d7b7c547135b66d8a983010fa6d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667GNYAMS%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC5pPnV3jX4jDj53O%2BpaipSjjVl7dg9TKc2Wcb5df1aAiEA5Xj1npmfI1Wgo3fCFN8l50K%2F4hgXU%2BXebtLCvAwG9ckq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN2bhshs%2BNUkSDIA8SrcA%2B0IGz%2BpecfojkkPyqKiYnQaIGKvG9c6H6Rc5w0ysaA%2Bjngeu7fAOE5xLhvZE8hJ3xJFz54Fa4%2F%2BsXfvQwvDiJ4Us2nqPM1aiIRXRK6urfbEgKXqkKDx1%2BGqAB44MjV9dCtF4pQYYOne2xdaE%2FHDMBJ1LtnElanfbSqEbHutNnJq%2F5aeVl4J49bTyRTYUU71Zi%2BUjzT9uBBJlqOW1PgtWLHGGi1GtEk6wfPTRIJkZTCsw%2BdZeDwIczH6rvWL7YQqUE%2F6QGcHk3WaSf%2FxVq2E%2BZ5dQ%2Fx%2FEavoSrlUJsWeH6fdlzem9NTEWlAGcHvQG3hbd1eaemfyv7MNnOb%2BvpaSe%2BZoz0Xf7aSkmiQ8hc7VMJ2%2BU6P7%2F1M8ANQZfzPsLTxdhASk76m%2BVlfxyGxZUmbq%2F%2B9os92dPun93dgNmBvkUuvMEL1Z5txCjjHTfH9x%2FNihQZZI15z%2FbDHUXYo%2BzjlNJzFRJKHN1HiUUKvvvrYtSorRfTaKLu0tsyq39XddUgCkjgARb3pnBqB55IOR4LuiLP0oqZf%2Fk%2B6Y9rHjUSJOHJx1fscf1Y7n3MuTGqpZXowsHEJLf06CU9EmmvjAdYtFEtUi47dE6E4Gl6VN9HjxPZHG8823wXjsaL3U3l5BMNWR68AGOqUBBSK2rYVTne9uuAGOn%2FcT5K%2FtQLFAsG%2FuTFMWLOGo5ipKNsqsQjsNmdE%2BZo%2BCOlZwTnR6IkQWLqkldR2Nv9dN4ewdxYLjc1qf3EcCauPd%2BzXOIl4bv1XZc%2FM%2FAKaWvAbN%2Ba%2FzHkeNEIzMI4GnjfKPajDW5BkOQduXnOgGJryoXX1IYJoZYlo9sc71YkmedqeZpVXHpnejTMd7JITL18Ph%2FOvL6%2Fjh&X-Amz-Signature=544799f3ba0e82bab03d8ba5446910072609d1cd3b45437ac6a47d1f1383359e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
