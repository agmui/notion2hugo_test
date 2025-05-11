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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMNVPGN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCH2SPY4aiexEY2Mq1lIO7E7VagDKMBVjNgchHAubb5vgIgHAUle8dN3n0ahqU4FieengW2yH3mAkN5TVVsB8adHQ4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpkWLrME1JAXNVZSSrcA7DYC%2Bw3y7%2BwayVKjofjwvENAWT09I0PBTJ1gfP5RoHYRuT8JBKKcPPIA3%2B%2BIl2UCJMYJiJlKuawIwqgGqggCoECwGkLYKj%2BtlAaTp0Y9opQRbspJA5%2FLbXOsdzXOFhAueDAdU5uWWZfsim%2Bfr%2BCMSmz%2BH5VIi34AkX7ahE8CxE05ex7%2BGtpx0KDxLiQq55KyIm5UPU4idTIikr9pc0aEXeGhXrXjbXVZPohQ8i314JLdfoD6qeIC0CGr5wQ%2BceLQy7MY4ff55zo1h6ILWgGYiSfFVEp9z00mLLyrFGoGLAjz7VrcPx%2FjrVr4JFh9vD9xgNhRqEoQU305YwIQGdqW8Nkb%2FrlauSoN4B1zQ0gzJRrQlCEIZQhnoTpSsK0QOvAvvgXpM5mmIFJ9aoDzmVvLvIQFw9O%2BnZt%2BKuzxRXvUGooJiKI%2BmTcXYn%2F4B1dXxUrmy14g2tyjApJsVanbsSRJ0E0N8OUM7DOggbgz7cEeIUdX9w7%2BIywP5ah2OGMOgj5qN71gzVkr89%2BSJiKq7nbUHbfGaotrwxbQ%2Fs5vGsY29%2BMh57yKBPnYWW5RGL0pOURb%2B9SdyjL%2FrQJ8zsO3lUUfBdYJr%2FG4Ti5fl2cY8B%2Bk%2FYeGe6%2BuBXaHT6vX5ACMLHWgsEGOqUBzv9%2FQO%2Bjkt9%2B8vfW4Lt%2FoUeCsEiHO%2FmZPOlWqfOWZXA%2FvTCnyWxg5YlaPMTM%2FzaJOqZptFZJs%2BjJukChCuNUYyJGnS2IMCQIASXZdnj0a5GAB1wdO6QZmoCEtqzr3CK7zUtZKl36DPT0PVzNVAPlX7gTy7OEZkxCqS0gx9iV3IHO1YQQCPEN4A5r%2F9BeHnVkuvv5m2nW2ZqIosgBeMAFXl9mQXZ2&X-Amz-Signature=cff4f601e8a8967231ca88fc5a824f85093fc4f64729d736c0de73f1606dcfa8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMNVPGN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCH2SPY4aiexEY2Mq1lIO7E7VagDKMBVjNgchHAubb5vgIgHAUle8dN3n0ahqU4FieengW2yH3mAkN5TVVsB8adHQ4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpkWLrME1JAXNVZSSrcA7DYC%2Bw3y7%2BwayVKjofjwvENAWT09I0PBTJ1gfP5RoHYRuT8JBKKcPPIA3%2B%2BIl2UCJMYJiJlKuawIwqgGqggCoECwGkLYKj%2BtlAaTp0Y9opQRbspJA5%2FLbXOsdzXOFhAueDAdU5uWWZfsim%2Bfr%2BCMSmz%2BH5VIi34AkX7ahE8CxE05ex7%2BGtpx0KDxLiQq55KyIm5UPU4idTIikr9pc0aEXeGhXrXjbXVZPohQ8i314JLdfoD6qeIC0CGr5wQ%2BceLQy7MY4ff55zo1h6ILWgGYiSfFVEp9z00mLLyrFGoGLAjz7VrcPx%2FjrVr4JFh9vD9xgNhRqEoQU305YwIQGdqW8Nkb%2FrlauSoN4B1zQ0gzJRrQlCEIZQhnoTpSsK0QOvAvvgXpM5mmIFJ9aoDzmVvLvIQFw9O%2BnZt%2BKuzxRXvUGooJiKI%2BmTcXYn%2F4B1dXxUrmy14g2tyjApJsVanbsSRJ0E0N8OUM7DOggbgz7cEeIUdX9w7%2BIywP5ah2OGMOgj5qN71gzVkr89%2BSJiKq7nbUHbfGaotrwxbQ%2Fs5vGsY29%2BMh57yKBPnYWW5RGL0pOURb%2B9SdyjL%2FrQJ8zsO3lUUfBdYJr%2FG4Ti5fl2cY8B%2Bk%2FYeGe6%2BuBXaHT6vX5ACMLHWgsEGOqUBzv9%2FQO%2Bjkt9%2B8vfW4Lt%2FoUeCsEiHO%2FmZPOlWqfOWZXA%2FvTCnyWxg5YlaPMTM%2FzaJOqZptFZJs%2BjJukChCuNUYyJGnS2IMCQIASXZdnj0a5GAB1wdO6QZmoCEtqzr3CK7zUtZKl36DPT0PVzNVAPlX7gTy7OEZkxCqS0gx9iV3IHO1YQQCPEN4A5r%2F9BeHnVkuvv5m2nW2ZqIosgBeMAFXl9mQXZ2&X-Amz-Signature=5d16a8be6864eb0ac31300bd5af24f327b4a6668361f36a312aea370f30f6b26&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMNVPGN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCH2SPY4aiexEY2Mq1lIO7E7VagDKMBVjNgchHAubb5vgIgHAUle8dN3n0ahqU4FieengW2yH3mAkN5TVVsB8adHQ4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpkWLrME1JAXNVZSSrcA7DYC%2Bw3y7%2BwayVKjofjwvENAWT09I0PBTJ1gfP5RoHYRuT8JBKKcPPIA3%2B%2BIl2UCJMYJiJlKuawIwqgGqggCoECwGkLYKj%2BtlAaTp0Y9opQRbspJA5%2FLbXOsdzXOFhAueDAdU5uWWZfsim%2Bfr%2BCMSmz%2BH5VIi34AkX7ahE8CxE05ex7%2BGtpx0KDxLiQq55KyIm5UPU4idTIikr9pc0aEXeGhXrXjbXVZPohQ8i314JLdfoD6qeIC0CGr5wQ%2BceLQy7MY4ff55zo1h6ILWgGYiSfFVEp9z00mLLyrFGoGLAjz7VrcPx%2FjrVr4JFh9vD9xgNhRqEoQU305YwIQGdqW8Nkb%2FrlauSoN4B1zQ0gzJRrQlCEIZQhnoTpSsK0QOvAvvgXpM5mmIFJ9aoDzmVvLvIQFw9O%2BnZt%2BKuzxRXvUGooJiKI%2BmTcXYn%2F4B1dXxUrmy14g2tyjApJsVanbsSRJ0E0N8OUM7DOggbgz7cEeIUdX9w7%2BIywP5ah2OGMOgj5qN71gzVkr89%2BSJiKq7nbUHbfGaotrwxbQ%2Fs5vGsY29%2BMh57yKBPnYWW5RGL0pOURb%2B9SdyjL%2FrQJ8zsO3lUUfBdYJr%2FG4Ti5fl2cY8B%2Bk%2FYeGe6%2BuBXaHT6vX5ACMLHWgsEGOqUBzv9%2FQO%2Bjkt9%2B8vfW4Lt%2FoUeCsEiHO%2FmZPOlWqfOWZXA%2FvTCnyWxg5YlaPMTM%2FzaJOqZptFZJs%2BjJukChCuNUYyJGnS2IMCQIASXZdnj0a5GAB1wdO6QZmoCEtqzr3CK7zUtZKl36DPT0PVzNVAPlX7gTy7OEZkxCqS0gx9iV3IHO1YQQCPEN4A5r%2F9BeHnVkuvv5m2nW2ZqIosgBeMAFXl9mQXZ2&X-Amz-Signature=9eef4d267212a0f5778a8c71550847a0f535b9d512673672b34970962dd8581a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMNVPGN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCH2SPY4aiexEY2Mq1lIO7E7VagDKMBVjNgchHAubb5vgIgHAUle8dN3n0ahqU4FieengW2yH3mAkN5TVVsB8adHQ4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpkWLrME1JAXNVZSSrcA7DYC%2Bw3y7%2BwayVKjofjwvENAWT09I0PBTJ1gfP5RoHYRuT8JBKKcPPIA3%2B%2BIl2UCJMYJiJlKuawIwqgGqggCoECwGkLYKj%2BtlAaTp0Y9opQRbspJA5%2FLbXOsdzXOFhAueDAdU5uWWZfsim%2Bfr%2BCMSmz%2BH5VIi34AkX7ahE8CxE05ex7%2BGtpx0KDxLiQq55KyIm5UPU4idTIikr9pc0aEXeGhXrXjbXVZPohQ8i314JLdfoD6qeIC0CGr5wQ%2BceLQy7MY4ff55zo1h6ILWgGYiSfFVEp9z00mLLyrFGoGLAjz7VrcPx%2FjrVr4JFh9vD9xgNhRqEoQU305YwIQGdqW8Nkb%2FrlauSoN4B1zQ0gzJRrQlCEIZQhnoTpSsK0QOvAvvgXpM5mmIFJ9aoDzmVvLvIQFw9O%2BnZt%2BKuzxRXvUGooJiKI%2BmTcXYn%2F4B1dXxUrmy14g2tyjApJsVanbsSRJ0E0N8OUM7DOggbgz7cEeIUdX9w7%2BIywP5ah2OGMOgj5qN71gzVkr89%2BSJiKq7nbUHbfGaotrwxbQ%2Fs5vGsY29%2BMh57yKBPnYWW5RGL0pOURb%2B9SdyjL%2FrQJ8zsO3lUUfBdYJr%2FG4Ti5fl2cY8B%2Bk%2FYeGe6%2BuBXaHT6vX5ACMLHWgsEGOqUBzv9%2FQO%2Bjkt9%2B8vfW4Lt%2FoUeCsEiHO%2FmZPOlWqfOWZXA%2FvTCnyWxg5YlaPMTM%2FzaJOqZptFZJs%2BjJukChCuNUYyJGnS2IMCQIASXZdnj0a5GAB1wdO6QZmoCEtqzr3CK7zUtZKl36DPT0PVzNVAPlX7gTy7OEZkxCqS0gx9iV3IHO1YQQCPEN4A5r%2F9BeHnVkuvv5m2nW2ZqIosgBeMAFXl9mQXZ2&X-Amz-Signature=465ecb599997892b9eb1a6d1a94a2075062efada8cd2c25437493c5aefef2840&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMNVPGN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCH2SPY4aiexEY2Mq1lIO7E7VagDKMBVjNgchHAubb5vgIgHAUle8dN3n0ahqU4FieengW2yH3mAkN5TVVsB8adHQ4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpkWLrME1JAXNVZSSrcA7DYC%2Bw3y7%2BwayVKjofjwvENAWT09I0PBTJ1gfP5RoHYRuT8JBKKcPPIA3%2B%2BIl2UCJMYJiJlKuawIwqgGqggCoECwGkLYKj%2BtlAaTp0Y9opQRbspJA5%2FLbXOsdzXOFhAueDAdU5uWWZfsim%2Bfr%2BCMSmz%2BH5VIi34AkX7ahE8CxE05ex7%2BGtpx0KDxLiQq55KyIm5UPU4idTIikr9pc0aEXeGhXrXjbXVZPohQ8i314JLdfoD6qeIC0CGr5wQ%2BceLQy7MY4ff55zo1h6ILWgGYiSfFVEp9z00mLLyrFGoGLAjz7VrcPx%2FjrVr4JFh9vD9xgNhRqEoQU305YwIQGdqW8Nkb%2FrlauSoN4B1zQ0gzJRrQlCEIZQhnoTpSsK0QOvAvvgXpM5mmIFJ9aoDzmVvLvIQFw9O%2BnZt%2BKuzxRXvUGooJiKI%2BmTcXYn%2F4B1dXxUrmy14g2tyjApJsVanbsSRJ0E0N8OUM7DOggbgz7cEeIUdX9w7%2BIywP5ah2OGMOgj5qN71gzVkr89%2BSJiKq7nbUHbfGaotrwxbQ%2Fs5vGsY29%2BMh57yKBPnYWW5RGL0pOURb%2B9SdyjL%2FrQJ8zsO3lUUfBdYJr%2FG4Ti5fl2cY8B%2Bk%2FYeGe6%2BuBXaHT6vX5ACMLHWgsEGOqUBzv9%2FQO%2Bjkt9%2B8vfW4Lt%2FoUeCsEiHO%2FmZPOlWqfOWZXA%2FvTCnyWxg5YlaPMTM%2FzaJOqZptFZJs%2BjJukChCuNUYyJGnS2IMCQIASXZdnj0a5GAB1wdO6QZmoCEtqzr3CK7zUtZKl36DPT0PVzNVAPlX7gTy7OEZkxCqS0gx9iV3IHO1YQQCPEN4A5r%2F9BeHnVkuvv5m2nW2ZqIosgBeMAFXl9mQXZ2&X-Amz-Signature=7e8067936ca63bd02aefc0b09973b86094f98f1f659525d12819b3417a92498a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMNVPGN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCH2SPY4aiexEY2Mq1lIO7E7VagDKMBVjNgchHAubb5vgIgHAUle8dN3n0ahqU4FieengW2yH3mAkN5TVVsB8adHQ4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpkWLrME1JAXNVZSSrcA7DYC%2Bw3y7%2BwayVKjofjwvENAWT09I0PBTJ1gfP5RoHYRuT8JBKKcPPIA3%2B%2BIl2UCJMYJiJlKuawIwqgGqggCoECwGkLYKj%2BtlAaTp0Y9opQRbspJA5%2FLbXOsdzXOFhAueDAdU5uWWZfsim%2Bfr%2BCMSmz%2BH5VIi34AkX7ahE8CxE05ex7%2BGtpx0KDxLiQq55KyIm5UPU4idTIikr9pc0aEXeGhXrXjbXVZPohQ8i314JLdfoD6qeIC0CGr5wQ%2BceLQy7MY4ff55zo1h6ILWgGYiSfFVEp9z00mLLyrFGoGLAjz7VrcPx%2FjrVr4JFh9vD9xgNhRqEoQU305YwIQGdqW8Nkb%2FrlauSoN4B1zQ0gzJRrQlCEIZQhnoTpSsK0QOvAvvgXpM5mmIFJ9aoDzmVvLvIQFw9O%2BnZt%2BKuzxRXvUGooJiKI%2BmTcXYn%2F4B1dXxUrmy14g2tyjApJsVanbsSRJ0E0N8OUM7DOggbgz7cEeIUdX9w7%2BIywP5ah2OGMOgj5qN71gzVkr89%2BSJiKq7nbUHbfGaotrwxbQ%2Fs5vGsY29%2BMh57yKBPnYWW5RGL0pOURb%2B9SdyjL%2FrQJ8zsO3lUUfBdYJr%2FG4Ti5fl2cY8B%2Bk%2FYeGe6%2BuBXaHT6vX5ACMLHWgsEGOqUBzv9%2FQO%2Bjkt9%2B8vfW4Lt%2FoUeCsEiHO%2FmZPOlWqfOWZXA%2FvTCnyWxg5YlaPMTM%2FzaJOqZptFZJs%2BjJukChCuNUYyJGnS2IMCQIASXZdnj0a5GAB1wdO6QZmoCEtqzr3CK7zUtZKl36DPT0PVzNVAPlX7gTy7OEZkxCqS0gx9iV3IHO1YQQCPEN4A5r%2F9BeHnVkuvv5m2nW2ZqIosgBeMAFXl9mQXZ2&X-Amz-Signature=8593615797214c9a8840d230a84b34a1038827a6fd8b59adb2d11b6b77aeb5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMNVPGN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCH2SPY4aiexEY2Mq1lIO7E7VagDKMBVjNgchHAubb5vgIgHAUle8dN3n0ahqU4FieengW2yH3mAkN5TVVsB8adHQ4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpkWLrME1JAXNVZSSrcA7DYC%2Bw3y7%2BwayVKjofjwvENAWT09I0PBTJ1gfP5RoHYRuT8JBKKcPPIA3%2B%2BIl2UCJMYJiJlKuawIwqgGqggCoECwGkLYKj%2BtlAaTp0Y9opQRbspJA5%2FLbXOsdzXOFhAueDAdU5uWWZfsim%2Bfr%2BCMSmz%2BH5VIi34AkX7ahE8CxE05ex7%2BGtpx0KDxLiQq55KyIm5UPU4idTIikr9pc0aEXeGhXrXjbXVZPohQ8i314JLdfoD6qeIC0CGr5wQ%2BceLQy7MY4ff55zo1h6ILWgGYiSfFVEp9z00mLLyrFGoGLAjz7VrcPx%2FjrVr4JFh9vD9xgNhRqEoQU305YwIQGdqW8Nkb%2FrlauSoN4B1zQ0gzJRrQlCEIZQhnoTpSsK0QOvAvvgXpM5mmIFJ9aoDzmVvLvIQFw9O%2BnZt%2BKuzxRXvUGooJiKI%2BmTcXYn%2F4B1dXxUrmy14g2tyjApJsVanbsSRJ0E0N8OUM7DOggbgz7cEeIUdX9w7%2BIywP5ah2OGMOgj5qN71gzVkr89%2BSJiKq7nbUHbfGaotrwxbQ%2Fs5vGsY29%2BMh57yKBPnYWW5RGL0pOURb%2B9SdyjL%2FrQJ8zsO3lUUfBdYJr%2FG4Ti5fl2cY8B%2Bk%2FYeGe6%2BuBXaHT6vX5ACMLHWgsEGOqUBzv9%2FQO%2Bjkt9%2B8vfW4Lt%2FoUeCsEiHO%2FmZPOlWqfOWZXA%2FvTCnyWxg5YlaPMTM%2FzaJOqZptFZJs%2BjJukChCuNUYyJGnS2IMCQIASXZdnj0a5GAB1wdO6QZmoCEtqzr3CK7zUtZKl36DPT0PVzNVAPlX7gTy7OEZkxCqS0gx9iV3IHO1YQQCPEN4A5r%2F9BeHnVkuvv5m2nW2ZqIosgBeMAFXl9mQXZ2&X-Amz-Signature=06a31dbbc987eb4497d8b5666435326df209d2642304b33c7b1046ef30dd16cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMNVPGN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCH2SPY4aiexEY2Mq1lIO7E7VagDKMBVjNgchHAubb5vgIgHAUle8dN3n0ahqU4FieengW2yH3mAkN5TVVsB8adHQ4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpkWLrME1JAXNVZSSrcA7DYC%2Bw3y7%2BwayVKjofjwvENAWT09I0PBTJ1gfP5RoHYRuT8JBKKcPPIA3%2B%2BIl2UCJMYJiJlKuawIwqgGqggCoECwGkLYKj%2BtlAaTp0Y9opQRbspJA5%2FLbXOsdzXOFhAueDAdU5uWWZfsim%2Bfr%2BCMSmz%2BH5VIi34AkX7ahE8CxE05ex7%2BGtpx0KDxLiQq55KyIm5UPU4idTIikr9pc0aEXeGhXrXjbXVZPohQ8i314JLdfoD6qeIC0CGr5wQ%2BceLQy7MY4ff55zo1h6ILWgGYiSfFVEp9z00mLLyrFGoGLAjz7VrcPx%2FjrVr4JFh9vD9xgNhRqEoQU305YwIQGdqW8Nkb%2FrlauSoN4B1zQ0gzJRrQlCEIZQhnoTpSsK0QOvAvvgXpM5mmIFJ9aoDzmVvLvIQFw9O%2BnZt%2BKuzxRXvUGooJiKI%2BmTcXYn%2F4B1dXxUrmy14g2tyjApJsVanbsSRJ0E0N8OUM7DOggbgz7cEeIUdX9w7%2BIywP5ah2OGMOgj5qN71gzVkr89%2BSJiKq7nbUHbfGaotrwxbQ%2Fs5vGsY29%2BMh57yKBPnYWW5RGL0pOURb%2B9SdyjL%2FrQJ8zsO3lUUfBdYJr%2FG4Ti5fl2cY8B%2Bk%2FYeGe6%2BuBXaHT6vX5ACMLHWgsEGOqUBzv9%2FQO%2Bjkt9%2B8vfW4Lt%2FoUeCsEiHO%2FmZPOlWqfOWZXA%2FvTCnyWxg5YlaPMTM%2FzaJOqZptFZJs%2BjJukChCuNUYyJGnS2IMCQIASXZdnj0a5GAB1wdO6QZmoCEtqzr3CK7zUtZKl36DPT0PVzNVAPlX7gTy7OEZkxCqS0gx9iV3IHO1YQQCPEN4A5r%2F9BeHnVkuvv5m2nW2ZqIosgBeMAFXl9mQXZ2&X-Amz-Signature=93752841dcec05405ab647539d9a17a432fcef79e20cb6f87b9ebd834a8d7b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
