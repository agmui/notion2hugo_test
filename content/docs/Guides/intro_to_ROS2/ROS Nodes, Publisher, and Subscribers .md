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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5GU3TM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCo3XBdTUeMIRDty6tE0He2%2BBDtquxuIItWOZz5yJWyhAIhAKhh1ly3GHmO93hqCjv5ovZoijKTEiaJe9ZAEP%2B8dHnrKv8DCE8QABoMNjM3NDIzMTgzODA1IgzD41owTR4vBcrt2eMq3AOEpNCdkiRrZaBn%2BQNGKuldQzfOba%2BBVsycnVUr%2B2amnze1xfTE8qEAMHedKhnw1b8qwmmSkfgbDhgl9qMZ1LPMLegNs5apDWXiBeE7iNSOkpzWG7o0wwsTMPH8piaXsFGQnURlmVPbZw0gppFHIGM1zTNctj2HnPmNN740QaAJZkDaPsxpJXca0fb4qj9fVCaH4PtWzf7lYNGvskSGaDI6mP9TgOcB53Y%2BHv2xQxXtpFclQvjfLJwpBymUUVU6BqT44dLmn%2FsO0u04KZ4%2Fw7RP8CY%2BHdR6gETdD%2B69qQAuDSme0KOFZbQjOZVWbtkWzxOj2yHQch48R2IzlXltI923rvFPv7Nb5lPAJE9Z4OkmS3IWkD4Fya%2BjhknOELIoS%2FIqbHYQpnnXi3Yz7LQt31TLw4OXQHq99i83hQNTz3dEjS5TUZ%2FHg0DDwKkycHX418zdGW8uXpQDwcW8L6EQSoYHdAYtTxMRxv%2B0wMiofBAyklGZ9qqB6ZDXCTvFWt2JGegIdkiRBnihhyjoY0koYMXNJGER%2FM0B2WkVal6xKq36xRxErkWgek5FwzatQVpBBM3NSjvUQQXzjU9Ig8R9gPy%2FT4etSzEkqvPz1J%2FcfPVVJsSOKRJtMZC8QPEoWTDNl4jCBjqkAYy%2FT8FCXoIVDcA7oKxSQ0gpriTGlXm9nlFBKeso9LcO4hoXU8D3Csbu6zrvQB28TToC%2B39EOw%2BLiIWphFWyc76jd%2BLrs3%2BaMNLrqebNkObcwdeCSUh0LdSPxRWjm%2FsNngsU%2BOkWqNxDoUB%2Bx79F5%2BFdnMQeOaDN2Rai3c1uEGR7lbDGYE0lEso1L4Ei%2Feke%2BXCmHwbZLNfl6I0KZ%2FQseWfrkOBI&X-Amz-Signature=232b548c7203c635091dbf5bf2fc5da465cfa6e7feac583cfb0fdfd3219cbb21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5GU3TM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCo3XBdTUeMIRDty6tE0He2%2BBDtquxuIItWOZz5yJWyhAIhAKhh1ly3GHmO93hqCjv5ovZoijKTEiaJe9ZAEP%2B8dHnrKv8DCE8QABoMNjM3NDIzMTgzODA1IgzD41owTR4vBcrt2eMq3AOEpNCdkiRrZaBn%2BQNGKuldQzfOba%2BBVsycnVUr%2B2amnze1xfTE8qEAMHedKhnw1b8qwmmSkfgbDhgl9qMZ1LPMLegNs5apDWXiBeE7iNSOkpzWG7o0wwsTMPH8piaXsFGQnURlmVPbZw0gppFHIGM1zTNctj2HnPmNN740QaAJZkDaPsxpJXca0fb4qj9fVCaH4PtWzf7lYNGvskSGaDI6mP9TgOcB53Y%2BHv2xQxXtpFclQvjfLJwpBymUUVU6BqT44dLmn%2FsO0u04KZ4%2Fw7RP8CY%2BHdR6gETdD%2B69qQAuDSme0KOFZbQjOZVWbtkWzxOj2yHQch48R2IzlXltI923rvFPv7Nb5lPAJE9Z4OkmS3IWkD4Fya%2BjhknOELIoS%2FIqbHYQpnnXi3Yz7LQt31TLw4OXQHq99i83hQNTz3dEjS5TUZ%2FHg0DDwKkycHX418zdGW8uXpQDwcW8L6EQSoYHdAYtTxMRxv%2B0wMiofBAyklGZ9qqB6ZDXCTvFWt2JGegIdkiRBnihhyjoY0koYMXNJGER%2FM0B2WkVal6xKq36xRxErkWgek5FwzatQVpBBM3NSjvUQQXzjU9Ig8R9gPy%2FT4etSzEkqvPz1J%2FcfPVVJsSOKRJtMZC8QPEoWTDNl4jCBjqkAYy%2FT8FCXoIVDcA7oKxSQ0gpriTGlXm9nlFBKeso9LcO4hoXU8D3Csbu6zrvQB28TToC%2B39EOw%2BLiIWphFWyc76jd%2BLrs3%2BaMNLrqebNkObcwdeCSUh0LdSPxRWjm%2FsNngsU%2BOkWqNxDoUB%2Bx79F5%2BFdnMQeOaDN2Rai3c1uEGR7lbDGYE0lEso1L4Ei%2Feke%2BXCmHwbZLNfl6I0KZ%2FQseWfrkOBI&X-Amz-Signature=fe18640b86e381a30e3b0d9ee332ce89022126c236fe7f7920233b1442e9980a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5GU3TM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCo3XBdTUeMIRDty6tE0He2%2BBDtquxuIItWOZz5yJWyhAIhAKhh1ly3GHmO93hqCjv5ovZoijKTEiaJe9ZAEP%2B8dHnrKv8DCE8QABoMNjM3NDIzMTgzODA1IgzD41owTR4vBcrt2eMq3AOEpNCdkiRrZaBn%2BQNGKuldQzfOba%2BBVsycnVUr%2B2amnze1xfTE8qEAMHedKhnw1b8qwmmSkfgbDhgl9qMZ1LPMLegNs5apDWXiBeE7iNSOkpzWG7o0wwsTMPH8piaXsFGQnURlmVPbZw0gppFHIGM1zTNctj2HnPmNN740QaAJZkDaPsxpJXca0fb4qj9fVCaH4PtWzf7lYNGvskSGaDI6mP9TgOcB53Y%2BHv2xQxXtpFclQvjfLJwpBymUUVU6BqT44dLmn%2FsO0u04KZ4%2Fw7RP8CY%2BHdR6gETdD%2B69qQAuDSme0KOFZbQjOZVWbtkWzxOj2yHQch48R2IzlXltI923rvFPv7Nb5lPAJE9Z4OkmS3IWkD4Fya%2BjhknOELIoS%2FIqbHYQpnnXi3Yz7LQt31TLw4OXQHq99i83hQNTz3dEjS5TUZ%2FHg0DDwKkycHX418zdGW8uXpQDwcW8L6EQSoYHdAYtTxMRxv%2B0wMiofBAyklGZ9qqB6ZDXCTvFWt2JGegIdkiRBnihhyjoY0koYMXNJGER%2FM0B2WkVal6xKq36xRxErkWgek5FwzatQVpBBM3NSjvUQQXzjU9Ig8R9gPy%2FT4etSzEkqvPz1J%2FcfPVVJsSOKRJtMZC8QPEoWTDNl4jCBjqkAYy%2FT8FCXoIVDcA7oKxSQ0gpriTGlXm9nlFBKeso9LcO4hoXU8D3Csbu6zrvQB28TToC%2B39EOw%2BLiIWphFWyc76jd%2BLrs3%2BaMNLrqebNkObcwdeCSUh0LdSPxRWjm%2FsNngsU%2BOkWqNxDoUB%2Bx79F5%2BFdnMQeOaDN2Rai3c1uEGR7lbDGYE0lEso1L4Ei%2Feke%2BXCmHwbZLNfl6I0KZ%2FQseWfrkOBI&X-Amz-Signature=66a5f8a89323ae54b5163532cb21f8a6c14b3af9d58e79a0a9a47fc8a474e8f2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5GU3TM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCo3XBdTUeMIRDty6tE0He2%2BBDtquxuIItWOZz5yJWyhAIhAKhh1ly3GHmO93hqCjv5ovZoijKTEiaJe9ZAEP%2B8dHnrKv8DCE8QABoMNjM3NDIzMTgzODA1IgzD41owTR4vBcrt2eMq3AOEpNCdkiRrZaBn%2BQNGKuldQzfOba%2BBVsycnVUr%2B2amnze1xfTE8qEAMHedKhnw1b8qwmmSkfgbDhgl9qMZ1LPMLegNs5apDWXiBeE7iNSOkpzWG7o0wwsTMPH8piaXsFGQnURlmVPbZw0gppFHIGM1zTNctj2HnPmNN740QaAJZkDaPsxpJXca0fb4qj9fVCaH4PtWzf7lYNGvskSGaDI6mP9TgOcB53Y%2BHv2xQxXtpFclQvjfLJwpBymUUVU6BqT44dLmn%2FsO0u04KZ4%2Fw7RP8CY%2BHdR6gETdD%2B69qQAuDSme0KOFZbQjOZVWbtkWzxOj2yHQch48R2IzlXltI923rvFPv7Nb5lPAJE9Z4OkmS3IWkD4Fya%2BjhknOELIoS%2FIqbHYQpnnXi3Yz7LQt31TLw4OXQHq99i83hQNTz3dEjS5TUZ%2FHg0DDwKkycHX418zdGW8uXpQDwcW8L6EQSoYHdAYtTxMRxv%2B0wMiofBAyklGZ9qqB6ZDXCTvFWt2JGegIdkiRBnihhyjoY0koYMXNJGER%2FM0B2WkVal6xKq36xRxErkWgek5FwzatQVpBBM3NSjvUQQXzjU9Ig8R9gPy%2FT4etSzEkqvPz1J%2FcfPVVJsSOKRJtMZC8QPEoWTDNl4jCBjqkAYy%2FT8FCXoIVDcA7oKxSQ0gpriTGlXm9nlFBKeso9LcO4hoXU8D3Csbu6zrvQB28TToC%2B39EOw%2BLiIWphFWyc76jd%2BLrs3%2BaMNLrqebNkObcwdeCSUh0LdSPxRWjm%2FsNngsU%2BOkWqNxDoUB%2Bx79F5%2BFdnMQeOaDN2Rai3c1uEGR7lbDGYE0lEso1L4Ei%2Feke%2BXCmHwbZLNfl6I0KZ%2FQseWfrkOBI&X-Amz-Signature=50f407b698f9c0641f17b7e71d881353baaa61bef72470e5d540d25a89540b75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5GU3TM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCo3XBdTUeMIRDty6tE0He2%2BBDtquxuIItWOZz5yJWyhAIhAKhh1ly3GHmO93hqCjv5ovZoijKTEiaJe9ZAEP%2B8dHnrKv8DCE8QABoMNjM3NDIzMTgzODA1IgzD41owTR4vBcrt2eMq3AOEpNCdkiRrZaBn%2BQNGKuldQzfOba%2BBVsycnVUr%2B2amnze1xfTE8qEAMHedKhnw1b8qwmmSkfgbDhgl9qMZ1LPMLegNs5apDWXiBeE7iNSOkpzWG7o0wwsTMPH8piaXsFGQnURlmVPbZw0gppFHIGM1zTNctj2HnPmNN740QaAJZkDaPsxpJXca0fb4qj9fVCaH4PtWzf7lYNGvskSGaDI6mP9TgOcB53Y%2BHv2xQxXtpFclQvjfLJwpBymUUVU6BqT44dLmn%2FsO0u04KZ4%2Fw7RP8CY%2BHdR6gETdD%2B69qQAuDSme0KOFZbQjOZVWbtkWzxOj2yHQch48R2IzlXltI923rvFPv7Nb5lPAJE9Z4OkmS3IWkD4Fya%2BjhknOELIoS%2FIqbHYQpnnXi3Yz7LQt31TLw4OXQHq99i83hQNTz3dEjS5TUZ%2FHg0DDwKkycHX418zdGW8uXpQDwcW8L6EQSoYHdAYtTxMRxv%2B0wMiofBAyklGZ9qqB6ZDXCTvFWt2JGegIdkiRBnihhyjoY0koYMXNJGER%2FM0B2WkVal6xKq36xRxErkWgek5FwzatQVpBBM3NSjvUQQXzjU9Ig8R9gPy%2FT4etSzEkqvPz1J%2FcfPVVJsSOKRJtMZC8QPEoWTDNl4jCBjqkAYy%2FT8FCXoIVDcA7oKxSQ0gpriTGlXm9nlFBKeso9LcO4hoXU8D3Csbu6zrvQB28TToC%2B39EOw%2BLiIWphFWyc76jd%2BLrs3%2BaMNLrqebNkObcwdeCSUh0LdSPxRWjm%2FsNngsU%2BOkWqNxDoUB%2Bx79F5%2BFdnMQeOaDN2Rai3c1uEGR7lbDGYE0lEso1L4Ei%2Feke%2BXCmHwbZLNfl6I0KZ%2FQseWfrkOBI&X-Amz-Signature=91ba4671f1fb2554942bef1b2185b889aa719a071e659b1924843e9652eaff79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5GU3TM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCo3XBdTUeMIRDty6tE0He2%2BBDtquxuIItWOZz5yJWyhAIhAKhh1ly3GHmO93hqCjv5ovZoijKTEiaJe9ZAEP%2B8dHnrKv8DCE8QABoMNjM3NDIzMTgzODA1IgzD41owTR4vBcrt2eMq3AOEpNCdkiRrZaBn%2BQNGKuldQzfOba%2BBVsycnVUr%2B2amnze1xfTE8qEAMHedKhnw1b8qwmmSkfgbDhgl9qMZ1LPMLegNs5apDWXiBeE7iNSOkpzWG7o0wwsTMPH8piaXsFGQnURlmVPbZw0gppFHIGM1zTNctj2HnPmNN740QaAJZkDaPsxpJXca0fb4qj9fVCaH4PtWzf7lYNGvskSGaDI6mP9TgOcB53Y%2BHv2xQxXtpFclQvjfLJwpBymUUVU6BqT44dLmn%2FsO0u04KZ4%2Fw7RP8CY%2BHdR6gETdD%2B69qQAuDSme0KOFZbQjOZVWbtkWzxOj2yHQch48R2IzlXltI923rvFPv7Nb5lPAJE9Z4OkmS3IWkD4Fya%2BjhknOELIoS%2FIqbHYQpnnXi3Yz7LQt31TLw4OXQHq99i83hQNTz3dEjS5TUZ%2FHg0DDwKkycHX418zdGW8uXpQDwcW8L6EQSoYHdAYtTxMRxv%2B0wMiofBAyklGZ9qqB6ZDXCTvFWt2JGegIdkiRBnihhyjoY0koYMXNJGER%2FM0B2WkVal6xKq36xRxErkWgek5FwzatQVpBBM3NSjvUQQXzjU9Ig8R9gPy%2FT4etSzEkqvPz1J%2FcfPVVJsSOKRJtMZC8QPEoWTDNl4jCBjqkAYy%2FT8FCXoIVDcA7oKxSQ0gpriTGlXm9nlFBKeso9LcO4hoXU8D3Csbu6zrvQB28TToC%2B39EOw%2BLiIWphFWyc76jd%2BLrs3%2BaMNLrqebNkObcwdeCSUh0LdSPxRWjm%2FsNngsU%2BOkWqNxDoUB%2Bx79F5%2BFdnMQeOaDN2Rai3c1uEGR7lbDGYE0lEso1L4Ei%2Feke%2BXCmHwbZLNfl6I0KZ%2FQseWfrkOBI&X-Amz-Signature=6e3da8c2232988dc090ed981ad9e228d2020e43cfd3cd9dcc835b3d5725d57ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5GU3TM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCo3XBdTUeMIRDty6tE0He2%2BBDtquxuIItWOZz5yJWyhAIhAKhh1ly3GHmO93hqCjv5ovZoijKTEiaJe9ZAEP%2B8dHnrKv8DCE8QABoMNjM3NDIzMTgzODA1IgzD41owTR4vBcrt2eMq3AOEpNCdkiRrZaBn%2BQNGKuldQzfOba%2BBVsycnVUr%2B2amnze1xfTE8qEAMHedKhnw1b8qwmmSkfgbDhgl9qMZ1LPMLegNs5apDWXiBeE7iNSOkpzWG7o0wwsTMPH8piaXsFGQnURlmVPbZw0gppFHIGM1zTNctj2HnPmNN740QaAJZkDaPsxpJXca0fb4qj9fVCaH4PtWzf7lYNGvskSGaDI6mP9TgOcB53Y%2BHv2xQxXtpFclQvjfLJwpBymUUVU6BqT44dLmn%2FsO0u04KZ4%2Fw7RP8CY%2BHdR6gETdD%2B69qQAuDSme0KOFZbQjOZVWbtkWzxOj2yHQch48R2IzlXltI923rvFPv7Nb5lPAJE9Z4OkmS3IWkD4Fya%2BjhknOELIoS%2FIqbHYQpnnXi3Yz7LQt31TLw4OXQHq99i83hQNTz3dEjS5TUZ%2FHg0DDwKkycHX418zdGW8uXpQDwcW8L6EQSoYHdAYtTxMRxv%2B0wMiofBAyklGZ9qqB6ZDXCTvFWt2JGegIdkiRBnihhyjoY0koYMXNJGER%2FM0B2WkVal6xKq36xRxErkWgek5FwzatQVpBBM3NSjvUQQXzjU9Ig8R9gPy%2FT4etSzEkqvPz1J%2FcfPVVJsSOKRJtMZC8QPEoWTDNl4jCBjqkAYy%2FT8FCXoIVDcA7oKxSQ0gpriTGlXm9nlFBKeso9LcO4hoXU8D3Csbu6zrvQB28TToC%2B39EOw%2BLiIWphFWyc76jd%2BLrs3%2BaMNLrqebNkObcwdeCSUh0LdSPxRWjm%2FsNngsU%2BOkWqNxDoUB%2Bx79F5%2BFdnMQeOaDN2Rai3c1uEGR7lbDGYE0lEso1L4Ei%2Feke%2BXCmHwbZLNfl6I0KZ%2FQseWfrkOBI&X-Amz-Signature=a8aa70db2f4bb657b3d5a5efc7a95900ebf0b5eb32de26db04a11757a508a322&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5GU3TM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCo3XBdTUeMIRDty6tE0He2%2BBDtquxuIItWOZz5yJWyhAIhAKhh1ly3GHmO93hqCjv5ovZoijKTEiaJe9ZAEP%2B8dHnrKv8DCE8QABoMNjM3NDIzMTgzODA1IgzD41owTR4vBcrt2eMq3AOEpNCdkiRrZaBn%2BQNGKuldQzfOba%2BBVsycnVUr%2B2amnze1xfTE8qEAMHedKhnw1b8qwmmSkfgbDhgl9qMZ1LPMLegNs5apDWXiBeE7iNSOkpzWG7o0wwsTMPH8piaXsFGQnURlmVPbZw0gppFHIGM1zTNctj2HnPmNN740QaAJZkDaPsxpJXca0fb4qj9fVCaH4PtWzf7lYNGvskSGaDI6mP9TgOcB53Y%2BHv2xQxXtpFclQvjfLJwpBymUUVU6BqT44dLmn%2FsO0u04KZ4%2Fw7RP8CY%2BHdR6gETdD%2B69qQAuDSme0KOFZbQjOZVWbtkWzxOj2yHQch48R2IzlXltI923rvFPv7Nb5lPAJE9Z4OkmS3IWkD4Fya%2BjhknOELIoS%2FIqbHYQpnnXi3Yz7LQt31TLw4OXQHq99i83hQNTz3dEjS5TUZ%2FHg0DDwKkycHX418zdGW8uXpQDwcW8L6EQSoYHdAYtTxMRxv%2B0wMiofBAyklGZ9qqB6ZDXCTvFWt2JGegIdkiRBnihhyjoY0koYMXNJGER%2FM0B2WkVal6xKq36xRxErkWgek5FwzatQVpBBM3NSjvUQQXzjU9Ig8R9gPy%2FT4etSzEkqvPz1J%2FcfPVVJsSOKRJtMZC8QPEoWTDNl4jCBjqkAYy%2FT8FCXoIVDcA7oKxSQ0gpriTGlXm9nlFBKeso9LcO4hoXU8D3Csbu6zrvQB28TToC%2B39EOw%2BLiIWphFWyc76jd%2BLrs3%2BaMNLrqebNkObcwdeCSUh0LdSPxRWjm%2FsNngsU%2BOkWqNxDoUB%2Bx79F5%2BFdnMQeOaDN2Rai3c1uEGR7lbDGYE0lEso1L4Ei%2Feke%2BXCmHwbZLNfl6I0KZ%2FQseWfrkOBI&X-Amz-Signature=ad8d11adc4ee4c8cde9330b3f030a5e185863460bc505832451fd73ede436dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
