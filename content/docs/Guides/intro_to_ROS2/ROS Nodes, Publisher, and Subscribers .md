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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNRAVDU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDY61huR9grbwoyZIzi6jLNQmNMxy8KMfCD3x7GA6dSmwIhALA36Ur%2FaArPN3C1oRlxE5uyYNzNwrBjDtHpwoGgs6BlKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcJoagNC97w8onCOcq3APomNvW9ItegPDC9HsuExmeZ0%2FcRg5eVlDTQqcra%2FZ4lX55OF6EpopNyN5mzDFXrHRe6IWsueEEnMrL%2FsPwNa%2BjsPWuxoNGiG%2BhteW2qFJy%2FXC3RhMH5Qi%2Bc2k74YXHbEFpkrNk6R6uizVPXtHhU0cq6rWZuWX2Uyhb%2B8Dx5KOdzB3RJtREJn0gIF4Zw92ra6yZtrra%2FdL13gLpFehoP13V1Zgc1sPdWfRpsycygCH3k9AaJH3QNU0d5toHiiGQtRezz1Hj8dfeWPQphwWdgM51jKvLRoimhBML1j6UV8a2QkCg0E%2BJchAO88w31nhkzKn9OsAZSsRMTZQnBml4pKfBCa%2BvqZCZTmlRJfcJXQubhm3iHSq7ir6d4ynLtt%2BAdUKzNRBPwGIcMkxyYM8MGTRJNU0VCTLbEisow%2F5994ZkpPNyHIyAYaCVje1KNgZbGWYKMOKpFW25SLMV4139ITg2UdMBdyGrcyFP5t1Vc5BVXsI1yfcUkfSoDS%2B8BKJ%2F4%2F8h3ERgHkUA333G7RAOokGPJSeOoVJwM7196py32IIOXL3cfz8WjVfZQv%2F%2B5D8T%2FpBFgCYGykfIki%2BBb7x4Ipqd%2FNsGLBP2XfNQuT92aAjmnH9whD9p3JIbPQ3ARjDy%2B6rDBjqkAc8I3tGIgWm8Gfyno0o%2BH3A%2BYnsjYlry3PqWqTB%2BzhOG3Llc6hJxbrDW47IG3nKhptfo9wbU8ZhQT5qsPtKWk7jHC%2Bv%2FW2nrYY4OEyWQuGs%2F9vkot%2BtUhlBIIy2Qv1Apaxd7QBs6LLS4C4wh92m56NQHlpxvyU7yMXG0p0ovLKEQ%2F4ivV0mD0dCytyVC4xyzRz%2BQYWOTZG2uOY2SZaGcIzHpUvq1&X-Amz-Signature=eadde53404fdd49ffaa509fb48ebdc98762ec4edcf7f3fdf1db47d720b5b5574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNRAVDU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDY61huR9grbwoyZIzi6jLNQmNMxy8KMfCD3x7GA6dSmwIhALA36Ur%2FaArPN3C1oRlxE5uyYNzNwrBjDtHpwoGgs6BlKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcJoagNC97w8onCOcq3APomNvW9ItegPDC9HsuExmeZ0%2FcRg5eVlDTQqcra%2FZ4lX55OF6EpopNyN5mzDFXrHRe6IWsueEEnMrL%2FsPwNa%2BjsPWuxoNGiG%2BhteW2qFJy%2FXC3RhMH5Qi%2Bc2k74YXHbEFpkrNk6R6uizVPXtHhU0cq6rWZuWX2Uyhb%2B8Dx5KOdzB3RJtREJn0gIF4Zw92ra6yZtrra%2FdL13gLpFehoP13V1Zgc1sPdWfRpsycygCH3k9AaJH3QNU0d5toHiiGQtRezz1Hj8dfeWPQphwWdgM51jKvLRoimhBML1j6UV8a2QkCg0E%2BJchAO88w31nhkzKn9OsAZSsRMTZQnBml4pKfBCa%2BvqZCZTmlRJfcJXQubhm3iHSq7ir6d4ynLtt%2BAdUKzNRBPwGIcMkxyYM8MGTRJNU0VCTLbEisow%2F5994ZkpPNyHIyAYaCVje1KNgZbGWYKMOKpFW25SLMV4139ITg2UdMBdyGrcyFP5t1Vc5BVXsI1yfcUkfSoDS%2B8BKJ%2F4%2F8h3ERgHkUA333G7RAOokGPJSeOoVJwM7196py32IIOXL3cfz8WjVfZQv%2F%2B5D8T%2FpBFgCYGykfIki%2BBb7x4Ipqd%2FNsGLBP2XfNQuT92aAjmnH9whD9p3JIbPQ3ARjDy%2B6rDBjqkAc8I3tGIgWm8Gfyno0o%2BH3A%2BYnsjYlry3PqWqTB%2BzhOG3Llc6hJxbrDW47IG3nKhptfo9wbU8ZhQT5qsPtKWk7jHC%2Bv%2FW2nrYY4OEyWQuGs%2F9vkot%2BtUhlBIIy2Qv1Apaxd7QBs6LLS4C4wh92m56NQHlpxvyU7yMXG0p0ovLKEQ%2F4ivV0mD0dCytyVC4xyzRz%2BQYWOTZG2uOY2SZaGcIzHpUvq1&X-Amz-Signature=cea2f6bc17480c35c7c9b690b59cea27f9df077a9a4825405eaabd71c6572e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNRAVDU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDY61huR9grbwoyZIzi6jLNQmNMxy8KMfCD3x7GA6dSmwIhALA36Ur%2FaArPN3C1oRlxE5uyYNzNwrBjDtHpwoGgs6BlKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcJoagNC97w8onCOcq3APomNvW9ItegPDC9HsuExmeZ0%2FcRg5eVlDTQqcra%2FZ4lX55OF6EpopNyN5mzDFXrHRe6IWsueEEnMrL%2FsPwNa%2BjsPWuxoNGiG%2BhteW2qFJy%2FXC3RhMH5Qi%2Bc2k74YXHbEFpkrNk6R6uizVPXtHhU0cq6rWZuWX2Uyhb%2B8Dx5KOdzB3RJtREJn0gIF4Zw92ra6yZtrra%2FdL13gLpFehoP13V1Zgc1sPdWfRpsycygCH3k9AaJH3QNU0d5toHiiGQtRezz1Hj8dfeWPQphwWdgM51jKvLRoimhBML1j6UV8a2QkCg0E%2BJchAO88w31nhkzKn9OsAZSsRMTZQnBml4pKfBCa%2BvqZCZTmlRJfcJXQubhm3iHSq7ir6d4ynLtt%2BAdUKzNRBPwGIcMkxyYM8MGTRJNU0VCTLbEisow%2F5994ZkpPNyHIyAYaCVje1KNgZbGWYKMOKpFW25SLMV4139ITg2UdMBdyGrcyFP5t1Vc5BVXsI1yfcUkfSoDS%2B8BKJ%2F4%2F8h3ERgHkUA333G7RAOokGPJSeOoVJwM7196py32IIOXL3cfz8WjVfZQv%2F%2B5D8T%2FpBFgCYGykfIki%2BBb7x4Ipqd%2FNsGLBP2XfNQuT92aAjmnH9whD9p3JIbPQ3ARjDy%2B6rDBjqkAc8I3tGIgWm8Gfyno0o%2BH3A%2BYnsjYlry3PqWqTB%2BzhOG3Llc6hJxbrDW47IG3nKhptfo9wbU8ZhQT5qsPtKWk7jHC%2Bv%2FW2nrYY4OEyWQuGs%2F9vkot%2BtUhlBIIy2Qv1Apaxd7QBs6LLS4C4wh92m56NQHlpxvyU7yMXG0p0ovLKEQ%2F4ivV0mD0dCytyVC4xyzRz%2BQYWOTZG2uOY2SZaGcIzHpUvq1&X-Amz-Signature=3263adf34088fcfe5ee6dc8aaef3ea8669fe1fc1af342674dd849ca29ff8c12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNRAVDU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDY61huR9grbwoyZIzi6jLNQmNMxy8KMfCD3x7GA6dSmwIhALA36Ur%2FaArPN3C1oRlxE5uyYNzNwrBjDtHpwoGgs6BlKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcJoagNC97w8onCOcq3APomNvW9ItegPDC9HsuExmeZ0%2FcRg5eVlDTQqcra%2FZ4lX55OF6EpopNyN5mzDFXrHRe6IWsueEEnMrL%2FsPwNa%2BjsPWuxoNGiG%2BhteW2qFJy%2FXC3RhMH5Qi%2Bc2k74YXHbEFpkrNk6R6uizVPXtHhU0cq6rWZuWX2Uyhb%2B8Dx5KOdzB3RJtREJn0gIF4Zw92ra6yZtrra%2FdL13gLpFehoP13V1Zgc1sPdWfRpsycygCH3k9AaJH3QNU0d5toHiiGQtRezz1Hj8dfeWPQphwWdgM51jKvLRoimhBML1j6UV8a2QkCg0E%2BJchAO88w31nhkzKn9OsAZSsRMTZQnBml4pKfBCa%2BvqZCZTmlRJfcJXQubhm3iHSq7ir6d4ynLtt%2BAdUKzNRBPwGIcMkxyYM8MGTRJNU0VCTLbEisow%2F5994ZkpPNyHIyAYaCVje1KNgZbGWYKMOKpFW25SLMV4139ITg2UdMBdyGrcyFP5t1Vc5BVXsI1yfcUkfSoDS%2B8BKJ%2F4%2F8h3ERgHkUA333G7RAOokGPJSeOoVJwM7196py32IIOXL3cfz8WjVfZQv%2F%2B5D8T%2FpBFgCYGykfIki%2BBb7x4Ipqd%2FNsGLBP2XfNQuT92aAjmnH9whD9p3JIbPQ3ARjDy%2B6rDBjqkAc8I3tGIgWm8Gfyno0o%2BH3A%2BYnsjYlry3PqWqTB%2BzhOG3Llc6hJxbrDW47IG3nKhptfo9wbU8ZhQT5qsPtKWk7jHC%2Bv%2FW2nrYY4OEyWQuGs%2F9vkot%2BtUhlBIIy2Qv1Apaxd7QBs6LLS4C4wh92m56NQHlpxvyU7yMXG0p0ovLKEQ%2F4ivV0mD0dCytyVC4xyzRz%2BQYWOTZG2uOY2SZaGcIzHpUvq1&X-Amz-Signature=c40f46869eae423ae86428cd0159fedfa76f86c3149bda94290a7ca91f329b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNRAVDU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDY61huR9grbwoyZIzi6jLNQmNMxy8KMfCD3x7GA6dSmwIhALA36Ur%2FaArPN3C1oRlxE5uyYNzNwrBjDtHpwoGgs6BlKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcJoagNC97w8onCOcq3APomNvW9ItegPDC9HsuExmeZ0%2FcRg5eVlDTQqcra%2FZ4lX55OF6EpopNyN5mzDFXrHRe6IWsueEEnMrL%2FsPwNa%2BjsPWuxoNGiG%2BhteW2qFJy%2FXC3RhMH5Qi%2Bc2k74YXHbEFpkrNk6R6uizVPXtHhU0cq6rWZuWX2Uyhb%2B8Dx5KOdzB3RJtREJn0gIF4Zw92ra6yZtrra%2FdL13gLpFehoP13V1Zgc1sPdWfRpsycygCH3k9AaJH3QNU0d5toHiiGQtRezz1Hj8dfeWPQphwWdgM51jKvLRoimhBML1j6UV8a2QkCg0E%2BJchAO88w31nhkzKn9OsAZSsRMTZQnBml4pKfBCa%2BvqZCZTmlRJfcJXQubhm3iHSq7ir6d4ynLtt%2BAdUKzNRBPwGIcMkxyYM8MGTRJNU0VCTLbEisow%2F5994ZkpPNyHIyAYaCVje1KNgZbGWYKMOKpFW25SLMV4139ITg2UdMBdyGrcyFP5t1Vc5BVXsI1yfcUkfSoDS%2B8BKJ%2F4%2F8h3ERgHkUA333G7RAOokGPJSeOoVJwM7196py32IIOXL3cfz8WjVfZQv%2F%2B5D8T%2FpBFgCYGykfIki%2BBb7x4Ipqd%2FNsGLBP2XfNQuT92aAjmnH9whD9p3JIbPQ3ARjDy%2B6rDBjqkAc8I3tGIgWm8Gfyno0o%2BH3A%2BYnsjYlry3PqWqTB%2BzhOG3Llc6hJxbrDW47IG3nKhptfo9wbU8ZhQT5qsPtKWk7jHC%2Bv%2FW2nrYY4OEyWQuGs%2F9vkot%2BtUhlBIIy2Qv1Apaxd7QBs6LLS4C4wh92m56NQHlpxvyU7yMXG0p0ovLKEQ%2F4ivV0mD0dCytyVC4xyzRz%2BQYWOTZG2uOY2SZaGcIzHpUvq1&X-Amz-Signature=e5bee1415433c76e9d580f895a5298c01da552b2bbd3c594a67061c291b9b35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNRAVDU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDY61huR9grbwoyZIzi6jLNQmNMxy8KMfCD3x7GA6dSmwIhALA36Ur%2FaArPN3C1oRlxE5uyYNzNwrBjDtHpwoGgs6BlKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcJoagNC97w8onCOcq3APomNvW9ItegPDC9HsuExmeZ0%2FcRg5eVlDTQqcra%2FZ4lX55OF6EpopNyN5mzDFXrHRe6IWsueEEnMrL%2FsPwNa%2BjsPWuxoNGiG%2BhteW2qFJy%2FXC3RhMH5Qi%2Bc2k74YXHbEFpkrNk6R6uizVPXtHhU0cq6rWZuWX2Uyhb%2B8Dx5KOdzB3RJtREJn0gIF4Zw92ra6yZtrra%2FdL13gLpFehoP13V1Zgc1sPdWfRpsycygCH3k9AaJH3QNU0d5toHiiGQtRezz1Hj8dfeWPQphwWdgM51jKvLRoimhBML1j6UV8a2QkCg0E%2BJchAO88w31nhkzKn9OsAZSsRMTZQnBml4pKfBCa%2BvqZCZTmlRJfcJXQubhm3iHSq7ir6d4ynLtt%2BAdUKzNRBPwGIcMkxyYM8MGTRJNU0VCTLbEisow%2F5994ZkpPNyHIyAYaCVje1KNgZbGWYKMOKpFW25SLMV4139ITg2UdMBdyGrcyFP5t1Vc5BVXsI1yfcUkfSoDS%2B8BKJ%2F4%2F8h3ERgHkUA333G7RAOokGPJSeOoVJwM7196py32IIOXL3cfz8WjVfZQv%2F%2B5D8T%2FpBFgCYGykfIki%2BBb7x4Ipqd%2FNsGLBP2XfNQuT92aAjmnH9whD9p3JIbPQ3ARjDy%2B6rDBjqkAc8I3tGIgWm8Gfyno0o%2BH3A%2BYnsjYlry3PqWqTB%2BzhOG3Llc6hJxbrDW47IG3nKhptfo9wbU8ZhQT5qsPtKWk7jHC%2Bv%2FW2nrYY4OEyWQuGs%2F9vkot%2BtUhlBIIy2Qv1Apaxd7QBs6LLS4C4wh92m56NQHlpxvyU7yMXG0p0ovLKEQ%2F4ivV0mD0dCytyVC4xyzRz%2BQYWOTZG2uOY2SZaGcIzHpUvq1&X-Amz-Signature=55071b948691bb227830b8a7c279886e34ee1432cfbc248ca3f403f734dc2a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNRAVDU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDY61huR9grbwoyZIzi6jLNQmNMxy8KMfCD3x7GA6dSmwIhALA36Ur%2FaArPN3C1oRlxE5uyYNzNwrBjDtHpwoGgs6BlKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcJoagNC97w8onCOcq3APomNvW9ItegPDC9HsuExmeZ0%2FcRg5eVlDTQqcra%2FZ4lX55OF6EpopNyN5mzDFXrHRe6IWsueEEnMrL%2FsPwNa%2BjsPWuxoNGiG%2BhteW2qFJy%2FXC3RhMH5Qi%2Bc2k74YXHbEFpkrNk6R6uizVPXtHhU0cq6rWZuWX2Uyhb%2B8Dx5KOdzB3RJtREJn0gIF4Zw92ra6yZtrra%2FdL13gLpFehoP13V1Zgc1sPdWfRpsycygCH3k9AaJH3QNU0d5toHiiGQtRezz1Hj8dfeWPQphwWdgM51jKvLRoimhBML1j6UV8a2QkCg0E%2BJchAO88w31nhkzKn9OsAZSsRMTZQnBml4pKfBCa%2BvqZCZTmlRJfcJXQubhm3iHSq7ir6d4ynLtt%2BAdUKzNRBPwGIcMkxyYM8MGTRJNU0VCTLbEisow%2F5994ZkpPNyHIyAYaCVje1KNgZbGWYKMOKpFW25SLMV4139ITg2UdMBdyGrcyFP5t1Vc5BVXsI1yfcUkfSoDS%2B8BKJ%2F4%2F8h3ERgHkUA333G7RAOokGPJSeOoVJwM7196py32IIOXL3cfz8WjVfZQv%2F%2B5D8T%2FpBFgCYGykfIki%2BBb7x4Ipqd%2FNsGLBP2XfNQuT92aAjmnH9whD9p3JIbPQ3ARjDy%2B6rDBjqkAc8I3tGIgWm8Gfyno0o%2BH3A%2BYnsjYlry3PqWqTB%2BzhOG3Llc6hJxbrDW47IG3nKhptfo9wbU8ZhQT5qsPtKWk7jHC%2Bv%2FW2nrYY4OEyWQuGs%2F9vkot%2BtUhlBIIy2Qv1Apaxd7QBs6LLS4C4wh92m56NQHlpxvyU7yMXG0p0ovLKEQ%2F4ivV0mD0dCytyVC4xyzRz%2BQYWOTZG2uOY2SZaGcIzHpUvq1&X-Amz-Signature=c7280636b2abcde7379a4d74558276294168dabd31f1f1e0aaa24efd80a0738b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNRAVDU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDY61huR9grbwoyZIzi6jLNQmNMxy8KMfCD3x7GA6dSmwIhALA36Ur%2FaArPN3C1oRlxE5uyYNzNwrBjDtHpwoGgs6BlKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcJoagNC97w8onCOcq3APomNvW9ItegPDC9HsuExmeZ0%2FcRg5eVlDTQqcra%2FZ4lX55OF6EpopNyN5mzDFXrHRe6IWsueEEnMrL%2FsPwNa%2BjsPWuxoNGiG%2BhteW2qFJy%2FXC3RhMH5Qi%2Bc2k74YXHbEFpkrNk6R6uizVPXtHhU0cq6rWZuWX2Uyhb%2B8Dx5KOdzB3RJtREJn0gIF4Zw92ra6yZtrra%2FdL13gLpFehoP13V1Zgc1sPdWfRpsycygCH3k9AaJH3QNU0d5toHiiGQtRezz1Hj8dfeWPQphwWdgM51jKvLRoimhBML1j6UV8a2QkCg0E%2BJchAO88w31nhkzKn9OsAZSsRMTZQnBml4pKfBCa%2BvqZCZTmlRJfcJXQubhm3iHSq7ir6d4ynLtt%2BAdUKzNRBPwGIcMkxyYM8MGTRJNU0VCTLbEisow%2F5994ZkpPNyHIyAYaCVje1KNgZbGWYKMOKpFW25SLMV4139ITg2UdMBdyGrcyFP5t1Vc5BVXsI1yfcUkfSoDS%2B8BKJ%2F4%2F8h3ERgHkUA333G7RAOokGPJSeOoVJwM7196py32IIOXL3cfz8WjVfZQv%2F%2B5D8T%2FpBFgCYGykfIki%2BBb7x4Ipqd%2FNsGLBP2XfNQuT92aAjmnH9whD9p3JIbPQ3ARjDy%2B6rDBjqkAc8I3tGIgWm8Gfyno0o%2BH3A%2BYnsjYlry3PqWqTB%2BzhOG3Llc6hJxbrDW47IG3nKhptfo9wbU8ZhQT5qsPtKWk7jHC%2Bv%2FW2nrYY4OEyWQuGs%2F9vkot%2BtUhlBIIy2Qv1Apaxd7QBs6LLS4C4wh92m56NQHlpxvyU7yMXG0p0ovLKEQ%2F4ivV0mD0dCytyVC4xyzRz%2BQYWOTZG2uOY2SZaGcIzHpUvq1&X-Amz-Signature=dcfb0d255b2c01d062de243eb666bb8c64d4659ad215c6317077b4438946517e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
