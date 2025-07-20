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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF47DUJ2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzxW4PgdpPQCVORJOjmMp7q26gg8DErgetyI9%2FmbUXmQIhAJWHWJSbt7%2BJ3bFFFly12MlrPUYj1iAtT6r4vj5AsCtRKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcJR%2F6mcR6PTAvuc0q3AOL9N74YwcbvgJkE5SuWSuh5xksnv59T%2FTDCCpczteBAV8obgETTX7OoXAvV4WA68tEaudASgigc7P7lJgQK0WNwCStgVGRbnezOwZkOUxN%2FOCOHMLh8PVXjxpT4N%2FWeLzh1XmP4jTBLRRW1ABESxj%2F9iwOcOLRnDEEaYxKyac%2BraJHCBVdrXCx2WaokwVuDGnw7cqbequPAgdyWaJFpaLfXxUVIMFqnGujsnNURq%2B8ENvo4ODAPMrNnSKmk9G%2FsdsGtAXgMPQw0zKLKmyLv%2FbHisvwY%2FQMFdcdyzGdIhLtbck9SYxe3qknPPO3Yor6xv%2B7aHJ7u42O1O2QMvmqsGzjwiQqkRq2lJGiUhq%2FFxtjgcmWM0HEFiSedL9%2F9MUkRmeIlvwnc4ak9RGZN2h8WcpoYLhhGZFHz8kj%2BbG6xDQ%2Bp0VEtUBifJwEaLiGNheXrVLxqmw9arWWk6VA6zcQ4Vp2OYbLRmZ4q3pqK1o4okHVtVYkemhFuwwcX9pb8%2FSr1h53C%2FUnYCvopYA5GfNXIbtuh1GjW7C%2BvbsrmLFpNg2ya21JrC9PyyLqJ4o%2BW14nsN3v9jGPSW3qoVnoMPv4HF0p7WPP03q%2FKtLFXH0cAYXacb54BQYvTtjfTWGI1jDe8%2FTDBjqkAZwuqbuXuibQevhRX%2BINU0EQ8klD7EHpk4wMBV2z3EsDsxc%2B142xLq1TICEAdU8ZncVfBnFn6UqvEe40hL5raU7r2BZwh5Bsdg5gG2crJfLU2H3XTTFoOEoxAqwmcXjt3DfS9ETkknY77rQO4qCHghV3Fpr1QQZ6cwqhozH9reCkRjRmuPJSManTEwgtRujX35DcFyGf6nEXWUP7DkYqWsqCp%2FHM&X-Amz-Signature=ff30c10077b1fda457a0a8611926dc162ffc1fd42b3a7ec730e02ae6c2a9b7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF47DUJ2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzxW4PgdpPQCVORJOjmMp7q26gg8DErgetyI9%2FmbUXmQIhAJWHWJSbt7%2BJ3bFFFly12MlrPUYj1iAtT6r4vj5AsCtRKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcJR%2F6mcR6PTAvuc0q3AOL9N74YwcbvgJkE5SuWSuh5xksnv59T%2FTDCCpczteBAV8obgETTX7OoXAvV4WA68tEaudASgigc7P7lJgQK0WNwCStgVGRbnezOwZkOUxN%2FOCOHMLh8PVXjxpT4N%2FWeLzh1XmP4jTBLRRW1ABESxj%2F9iwOcOLRnDEEaYxKyac%2BraJHCBVdrXCx2WaokwVuDGnw7cqbequPAgdyWaJFpaLfXxUVIMFqnGujsnNURq%2B8ENvo4ODAPMrNnSKmk9G%2FsdsGtAXgMPQw0zKLKmyLv%2FbHisvwY%2FQMFdcdyzGdIhLtbck9SYxe3qknPPO3Yor6xv%2B7aHJ7u42O1O2QMvmqsGzjwiQqkRq2lJGiUhq%2FFxtjgcmWM0HEFiSedL9%2F9MUkRmeIlvwnc4ak9RGZN2h8WcpoYLhhGZFHz8kj%2BbG6xDQ%2Bp0VEtUBifJwEaLiGNheXrVLxqmw9arWWk6VA6zcQ4Vp2OYbLRmZ4q3pqK1o4okHVtVYkemhFuwwcX9pb8%2FSr1h53C%2FUnYCvopYA5GfNXIbtuh1GjW7C%2BvbsrmLFpNg2ya21JrC9PyyLqJ4o%2BW14nsN3v9jGPSW3qoVnoMPv4HF0p7WPP03q%2FKtLFXH0cAYXacb54BQYvTtjfTWGI1jDe8%2FTDBjqkAZwuqbuXuibQevhRX%2BINU0EQ8klD7EHpk4wMBV2z3EsDsxc%2B142xLq1TICEAdU8ZncVfBnFn6UqvEe40hL5raU7r2BZwh5Bsdg5gG2crJfLU2H3XTTFoOEoxAqwmcXjt3DfS9ETkknY77rQO4qCHghV3Fpr1QQZ6cwqhozH9reCkRjRmuPJSManTEwgtRujX35DcFyGf6nEXWUP7DkYqWsqCp%2FHM&X-Amz-Signature=0af358870deb5cbfb167b0d6836cdea74f03e0b635e1609ec13e973bc9ad9fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF47DUJ2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzxW4PgdpPQCVORJOjmMp7q26gg8DErgetyI9%2FmbUXmQIhAJWHWJSbt7%2BJ3bFFFly12MlrPUYj1iAtT6r4vj5AsCtRKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcJR%2F6mcR6PTAvuc0q3AOL9N74YwcbvgJkE5SuWSuh5xksnv59T%2FTDCCpczteBAV8obgETTX7OoXAvV4WA68tEaudASgigc7P7lJgQK0WNwCStgVGRbnezOwZkOUxN%2FOCOHMLh8PVXjxpT4N%2FWeLzh1XmP4jTBLRRW1ABESxj%2F9iwOcOLRnDEEaYxKyac%2BraJHCBVdrXCx2WaokwVuDGnw7cqbequPAgdyWaJFpaLfXxUVIMFqnGujsnNURq%2B8ENvo4ODAPMrNnSKmk9G%2FsdsGtAXgMPQw0zKLKmyLv%2FbHisvwY%2FQMFdcdyzGdIhLtbck9SYxe3qknPPO3Yor6xv%2B7aHJ7u42O1O2QMvmqsGzjwiQqkRq2lJGiUhq%2FFxtjgcmWM0HEFiSedL9%2F9MUkRmeIlvwnc4ak9RGZN2h8WcpoYLhhGZFHz8kj%2BbG6xDQ%2Bp0VEtUBifJwEaLiGNheXrVLxqmw9arWWk6VA6zcQ4Vp2OYbLRmZ4q3pqK1o4okHVtVYkemhFuwwcX9pb8%2FSr1h53C%2FUnYCvopYA5GfNXIbtuh1GjW7C%2BvbsrmLFpNg2ya21JrC9PyyLqJ4o%2BW14nsN3v9jGPSW3qoVnoMPv4HF0p7WPP03q%2FKtLFXH0cAYXacb54BQYvTtjfTWGI1jDe8%2FTDBjqkAZwuqbuXuibQevhRX%2BINU0EQ8klD7EHpk4wMBV2z3EsDsxc%2B142xLq1TICEAdU8ZncVfBnFn6UqvEe40hL5raU7r2BZwh5Bsdg5gG2crJfLU2H3XTTFoOEoxAqwmcXjt3DfS9ETkknY77rQO4qCHghV3Fpr1QQZ6cwqhozH9reCkRjRmuPJSManTEwgtRujX35DcFyGf6nEXWUP7DkYqWsqCp%2FHM&X-Amz-Signature=8d0165921289cd3838e287a8cd324fa01e96f7bdccd75c12c35c6cdad7147e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF47DUJ2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzxW4PgdpPQCVORJOjmMp7q26gg8DErgetyI9%2FmbUXmQIhAJWHWJSbt7%2BJ3bFFFly12MlrPUYj1iAtT6r4vj5AsCtRKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcJR%2F6mcR6PTAvuc0q3AOL9N74YwcbvgJkE5SuWSuh5xksnv59T%2FTDCCpczteBAV8obgETTX7OoXAvV4WA68tEaudASgigc7P7lJgQK0WNwCStgVGRbnezOwZkOUxN%2FOCOHMLh8PVXjxpT4N%2FWeLzh1XmP4jTBLRRW1ABESxj%2F9iwOcOLRnDEEaYxKyac%2BraJHCBVdrXCx2WaokwVuDGnw7cqbequPAgdyWaJFpaLfXxUVIMFqnGujsnNURq%2B8ENvo4ODAPMrNnSKmk9G%2FsdsGtAXgMPQw0zKLKmyLv%2FbHisvwY%2FQMFdcdyzGdIhLtbck9SYxe3qknPPO3Yor6xv%2B7aHJ7u42O1O2QMvmqsGzjwiQqkRq2lJGiUhq%2FFxtjgcmWM0HEFiSedL9%2F9MUkRmeIlvwnc4ak9RGZN2h8WcpoYLhhGZFHz8kj%2BbG6xDQ%2Bp0VEtUBifJwEaLiGNheXrVLxqmw9arWWk6VA6zcQ4Vp2OYbLRmZ4q3pqK1o4okHVtVYkemhFuwwcX9pb8%2FSr1h53C%2FUnYCvopYA5GfNXIbtuh1GjW7C%2BvbsrmLFpNg2ya21JrC9PyyLqJ4o%2BW14nsN3v9jGPSW3qoVnoMPv4HF0p7WPP03q%2FKtLFXH0cAYXacb54BQYvTtjfTWGI1jDe8%2FTDBjqkAZwuqbuXuibQevhRX%2BINU0EQ8klD7EHpk4wMBV2z3EsDsxc%2B142xLq1TICEAdU8ZncVfBnFn6UqvEe40hL5raU7r2BZwh5Bsdg5gG2crJfLU2H3XTTFoOEoxAqwmcXjt3DfS9ETkknY77rQO4qCHghV3Fpr1QQZ6cwqhozH9reCkRjRmuPJSManTEwgtRujX35DcFyGf6nEXWUP7DkYqWsqCp%2FHM&X-Amz-Signature=e764e771e4ed46c30ec04d35426f9803be550df1a5b1b9b0be3be638028ac522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF47DUJ2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzxW4PgdpPQCVORJOjmMp7q26gg8DErgetyI9%2FmbUXmQIhAJWHWJSbt7%2BJ3bFFFly12MlrPUYj1iAtT6r4vj5AsCtRKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcJR%2F6mcR6PTAvuc0q3AOL9N74YwcbvgJkE5SuWSuh5xksnv59T%2FTDCCpczteBAV8obgETTX7OoXAvV4WA68tEaudASgigc7P7lJgQK0WNwCStgVGRbnezOwZkOUxN%2FOCOHMLh8PVXjxpT4N%2FWeLzh1XmP4jTBLRRW1ABESxj%2F9iwOcOLRnDEEaYxKyac%2BraJHCBVdrXCx2WaokwVuDGnw7cqbequPAgdyWaJFpaLfXxUVIMFqnGujsnNURq%2B8ENvo4ODAPMrNnSKmk9G%2FsdsGtAXgMPQw0zKLKmyLv%2FbHisvwY%2FQMFdcdyzGdIhLtbck9SYxe3qknPPO3Yor6xv%2B7aHJ7u42O1O2QMvmqsGzjwiQqkRq2lJGiUhq%2FFxtjgcmWM0HEFiSedL9%2F9MUkRmeIlvwnc4ak9RGZN2h8WcpoYLhhGZFHz8kj%2BbG6xDQ%2Bp0VEtUBifJwEaLiGNheXrVLxqmw9arWWk6VA6zcQ4Vp2OYbLRmZ4q3pqK1o4okHVtVYkemhFuwwcX9pb8%2FSr1h53C%2FUnYCvopYA5GfNXIbtuh1GjW7C%2BvbsrmLFpNg2ya21JrC9PyyLqJ4o%2BW14nsN3v9jGPSW3qoVnoMPv4HF0p7WPP03q%2FKtLFXH0cAYXacb54BQYvTtjfTWGI1jDe8%2FTDBjqkAZwuqbuXuibQevhRX%2BINU0EQ8klD7EHpk4wMBV2z3EsDsxc%2B142xLq1TICEAdU8ZncVfBnFn6UqvEe40hL5raU7r2BZwh5Bsdg5gG2crJfLU2H3XTTFoOEoxAqwmcXjt3DfS9ETkknY77rQO4qCHghV3Fpr1QQZ6cwqhozH9reCkRjRmuPJSManTEwgtRujX35DcFyGf6nEXWUP7DkYqWsqCp%2FHM&X-Amz-Signature=f5702831cd5e3b0848a1d7f7dbe5c43a69a5355d471caeb94811bfbee13ed75f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF47DUJ2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzxW4PgdpPQCVORJOjmMp7q26gg8DErgetyI9%2FmbUXmQIhAJWHWJSbt7%2BJ3bFFFly12MlrPUYj1iAtT6r4vj5AsCtRKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcJR%2F6mcR6PTAvuc0q3AOL9N74YwcbvgJkE5SuWSuh5xksnv59T%2FTDCCpczteBAV8obgETTX7OoXAvV4WA68tEaudASgigc7P7lJgQK0WNwCStgVGRbnezOwZkOUxN%2FOCOHMLh8PVXjxpT4N%2FWeLzh1XmP4jTBLRRW1ABESxj%2F9iwOcOLRnDEEaYxKyac%2BraJHCBVdrXCx2WaokwVuDGnw7cqbequPAgdyWaJFpaLfXxUVIMFqnGujsnNURq%2B8ENvo4ODAPMrNnSKmk9G%2FsdsGtAXgMPQw0zKLKmyLv%2FbHisvwY%2FQMFdcdyzGdIhLtbck9SYxe3qknPPO3Yor6xv%2B7aHJ7u42O1O2QMvmqsGzjwiQqkRq2lJGiUhq%2FFxtjgcmWM0HEFiSedL9%2F9MUkRmeIlvwnc4ak9RGZN2h8WcpoYLhhGZFHz8kj%2BbG6xDQ%2Bp0VEtUBifJwEaLiGNheXrVLxqmw9arWWk6VA6zcQ4Vp2OYbLRmZ4q3pqK1o4okHVtVYkemhFuwwcX9pb8%2FSr1h53C%2FUnYCvopYA5GfNXIbtuh1GjW7C%2BvbsrmLFpNg2ya21JrC9PyyLqJ4o%2BW14nsN3v9jGPSW3qoVnoMPv4HF0p7WPP03q%2FKtLFXH0cAYXacb54BQYvTtjfTWGI1jDe8%2FTDBjqkAZwuqbuXuibQevhRX%2BINU0EQ8klD7EHpk4wMBV2z3EsDsxc%2B142xLq1TICEAdU8ZncVfBnFn6UqvEe40hL5raU7r2BZwh5Bsdg5gG2crJfLU2H3XTTFoOEoxAqwmcXjt3DfS9ETkknY77rQO4qCHghV3Fpr1QQZ6cwqhozH9reCkRjRmuPJSManTEwgtRujX35DcFyGf6nEXWUP7DkYqWsqCp%2FHM&X-Amz-Signature=dc39a83d2ac2adb036d93f22e2108d888cb07fadc92838028a54ebf9154a8ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF47DUJ2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzxW4PgdpPQCVORJOjmMp7q26gg8DErgetyI9%2FmbUXmQIhAJWHWJSbt7%2BJ3bFFFly12MlrPUYj1iAtT6r4vj5AsCtRKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcJR%2F6mcR6PTAvuc0q3AOL9N74YwcbvgJkE5SuWSuh5xksnv59T%2FTDCCpczteBAV8obgETTX7OoXAvV4WA68tEaudASgigc7P7lJgQK0WNwCStgVGRbnezOwZkOUxN%2FOCOHMLh8PVXjxpT4N%2FWeLzh1XmP4jTBLRRW1ABESxj%2F9iwOcOLRnDEEaYxKyac%2BraJHCBVdrXCx2WaokwVuDGnw7cqbequPAgdyWaJFpaLfXxUVIMFqnGujsnNURq%2B8ENvo4ODAPMrNnSKmk9G%2FsdsGtAXgMPQw0zKLKmyLv%2FbHisvwY%2FQMFdcdyzGdIhLtbck9SYxe3qknPPO3Yor6xv%2B7aHJ7u42O1O2QMvmqsGzjwiQqkRq2lJGiUhq%2FFxtjgcmWM0HEFiSedL9%2F9MUkRmeIlvwnc4ak9RGZN2h8WcpoYLhhGZFHz8kj%2BbG6xDQ%2Bp0VEtUBifJwEaLiGNheXrVLxqmw9arWWk6VA6zcQ4Vp2OYbLRmZ4q3pqK1o4okHVtVYkemhFuwwcX9pb8%2FSr1h53C%2FUnYCvopYA5GfNXIbtuh1GjW7C%2BvbsrmLFpNg2ya21JrC9PyyLqJ4o%2BW14nsN3v9jGPSW3qoVnoMPv4HF0p7WPP03q%2FKtLFXH0cAYXacb54BQYvTtjfTWGI1jDe8%2FTDBjqkAZwuqbuXuibQevhRX%2BINU0EQ8klD7EHpk4wMBV2z3EsDsxc%2B142xLq1TICEAdU8ZncVfBnFn6UqvEe40hL5raU7r2BZwh5Bsdg5gG2crJfLU2H3XTTFoOEoxAqwmcXjt3DfS9ETkknY77rQO4qCHghV3Fpr1QQZ6cwqhozH9reCkRjRmuPJSManTEwgtRujX35DcFyGf6nEXWUP7DkYqWsqCp%2FHM&X-Amz-Signature=b97660edb7853679cb6f31a10e90baa12df26441e1e1cc2a2ccf41d434aa277d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF47DUJ2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzxW4PgdpPQCVORJOjmMp7q26gg8DErgetyI9%2FmbUXmQIhAJWHWJSbt7%2BJ3bFFFly12MlrPUYj1iAtT6r4vj5AsCtRKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcJR%2F6mcR6PTAvuc0q3AOL9N74YwcbvgJkE5SuWSuh5xksnv59T%2FTDCCpczteBAV8obgETTX7OoXAvV4WA68tEaudASgigc7P7lJgQK0WNwCStgVGRbnezOwZkOUxN%2FOCOHMLh8PVXjxpT4N%2FWeLzh1XmP4jTBLRRW1ABESxj%2F9iwOcOLRnDEEaYxKyac%2BraJHCBVdrXCx2WaokwVuDGnw7cqbequPAgdyWaJFpaLfXxUVIMFqnGujsnNURq%2B8ENvo4ODAPMrNnSKmk9G%2FsdsGtAXgMPQw0zKLKmyLv%2FbHisvwY%2FQMFdcdyzGdIhLtbck9SYxe3qknPPO3Yor6xv%2B7aHJ7u42O1O2QMvmqsGzjwiQqkRq2lJGiUhq%2FFxtjgcmWM0HEFiSedL9%2F9MUkRmeIlvwnc4ak9RGZN2h8WcpoYLhhGZFHz8kj%2BbG6xDQ%2Bp0VEtUBifJwEaLiGNheXrVLxqmw9arWWk6VA6zcQ4Vp2OYbLRmZ4q3pqK1o4okHVtVYkemhFuwwcX9pb8%2FSr1h53C%2FUnYCvopYA5GfNXIbtuh1GjW7C%2BvbsrmLFpNg2ya21JrC9PyyLqJ4o%2BW14nsN3v9jGPSW3qoVnoMPv4HF0p7WPP03q%2FKtLFXH0cAYXacb54BQYvTtjfTWGI1jDe8%2FTDBjqkAZwuqbuXuibQevhRX%2BINU0EQ8klD7EHpk4wMBV2z3EsDsxc%2B142xLq1TICEAdU8ZncVfBnFn6UqvEe40hL5raU7r2BZwh5Bsdg5gG2crJfLU2H3XTTFoOEoxAqwmcXjt3DfS9ETkknY77rQO4qCHghV3Fpr1QQZ6cwqhozH9reCkRjRmuPJSManTEwgtRujX35DcFyGf6nEXWUP7DkYqWsqCp%2FHM&X-Amz-Signature=0a8d58ba4f1d28349e9886decbbce3a00c347ef4f46b6b6e2b3382d87f7083ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
