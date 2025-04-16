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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMK22YYO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgtjjSt2HrYCJVloAjl6KKrf4AsD1vmu0aTZVPjKdNJwIhALx6B%2FfvAR3K6VwEWuuPsHHTq7pL3u1iTpesLmmw9YL3Kv8DCDwQABoMNjM3NDIzMTgzODA1Igy0EDfg9QQF9KxS6agq3ANEc6v%2FvvAMA2ELISjbp9Wcr5jpZ7ZKCY7bvspgdRF4nL79MAf%2FcCWl%2B5ArfNgTRJyJwlVmC%2BkHcQAFvoQjBENXNOKTZvtr5OGq%2B4egVQ55xbB8UmsTrMI4YrnooqQUJJ0%2BrLfdUhPWsAI69YN%2Bj5c5%2BtXazHah2RLb5tRY249HGy4sDWgjSLvzWkb39d6cKKpRDfZOZn2yg6Kl2z0xpN1MGWx9v4ACBlXucgCxgw%2BjhXibPF25S5Zq1dBtMo%2BJGu%2B1KgwrXk3a9kD9yatLzzJnCKl0HDlROG53bmOjcuqqLF0%2FZcneZMahEprou8SR0Wd1mV0xgq%2FALzs45jMTqTJntrqqsLKKjWa7Aq7cGOfsKf7gCtnTE83YHydGjGgaOJJkhny0KbmMEkmHL2i4FTUasqkbCkaR0hVWSnLtWTzZhcaH3xdhJ2YdLWV3MCnipREHUzn1aNh2mgCMEaOmlqth059bhK6jHICZoJgnnw1jo9drcHJvDDvdo6VLl3MOU5GMa1s4s3H0vuPu1UDpgs7WW%2BLdHY5eUhlkvXq%2FnqtDfoz4BPBf8oyAm4yNOudK9zeHYZ%2F%2BuimKSWexNgDu%2Fx4wFgANl9Droy5gMFmh3AL%2BlK%2FWKYOhiKg9w656ijDxvPy%2FBjqkAT31EMbvoOAYkmguDBuEcBtZ6V9%2FxxvSXkLRbjVvxeMlh09MBUglXA3n%2BORCbJfaxfjl4%2FthYt%2FK%2B%2BHxW%2Fp5hRCW%2FnhjTpIScMHahT4tHLdAbW9TVRlIyw8%2FXECfj19OAfNTmjnEOZ5zHG5MukGQzkkjR7QCKfnbzUru%2FN%2BEXYb0kb%2FABhTqw1DeRuibkXdy%2BANiznQOdUym6CM4priIR%2FkUcMkC&X-Amz-Signature=a317e1b691915b9f2e7bfcb01879e9c6ef4abd7a0e41b9d01b896fa5fdae60f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMK22YYO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgtjjSt2HrYCJVloAjl6KKrf4AsD1vmu0aTZVPjKdNJwIhALx6B%2FfvAR3K6VwEWuuPsHHTq7pL3u1iTpesLmmw9YL3Kv8DCDwQABoMNjM3NDIzMTgzODA1Igy0EDfg9QQF9KxS6agq3ANEc6v%2FvvAMA2ELISjbp9Wcr5jpZ7ZKCY7bvspgdRF4nL79MAf%2FcCWl%2B5ArfNgTRJyJwlVmC%2BkHcQAFvoQjBENXNOKTZvtr5OGq%2B4egVQ55xbB8UmsTrMI4YrnooqQUJJ0%2BrLfdUhPWsAI69YN%2Bj5c5%2BtXazHah2RLb5tRY249HGy4sDWgjSLvzWkb39d6cKKpRDfZOZn2yg6Kl2z0xpN1MGWx9v4ACBlXucgCxgw%2BjhXibPF25S5Zq1dBtMo%2BJGu%2B1KgwrXk3a9kD9yatLzzJnCKl0HDlROG53bmOjcuqqLF0%2FZcneZMahEprou8SR0Wd1mV0xgq%2FALzs45jMTqTJntrqqsLKKjWa7Aq7cGOfsKf7gCtnTE83YHydGjGgaOJJkhny0KbmMEkmHL2i4FTUasqkbCkaR0hVWSnLtWTzZhcaH3xdhJ2YdLWV3MCnipREHUzn1aNh2mgCMEaOmlqth059bhK6jHICZoJgnnw1jo9drcHJvDDvdo6VLl3MOU5GMa1s4s3H0vuPu1UDpgs7WW%2BLdHY5eUhlkvXq%2FnqtDfoz4BPBf8oyAm4yNOudK9zeHYZ%2F%2BuimKSWexNgDu%2Fx4wFgANl9Droy5gMFmh3AL%2BlK%2FWKYOhiKg9w656ijDxvPy%2FBjqkAT31EMbvoOAYkmguDBuEcBtZ6V9%2FxxvSXkLRbjVvxeMlh09MBUglXA3n%2BORCbJfaxfjl4%2FthYt%2FK%2B%2BHxW%2Fp5hRCW%2FnhjTpIScMHahT4tHLdAbW9TVRlIyw8%2FXECfj19OAfNTmjnEOZ5zHG5MukGQzkkjR7QCKfnbzUru%2FN%2BEXYb0kb%2FABhTqw1DeRuibkXdy%2BANiznQOdUym6CM4priIR%2FkUcMkC&X-Amz-Signature=1118b276f83d41a6235f593222fe4586c04a48496c2ee1c237da16d8c33c177b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMK22YYO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgtjjSt2HrYCJVloAjl6KKrf4AsD1vmu0aTZVPjKdNJwIhALx6B%2FfvAR3K6VwEWuuPsHHTq7pL3u1iTpesLmmw9YL3Kv8DCDwQABoMNjM3NDIzMTgzODA1Igy0EDfg9QQF9KxS6agq3ANEc6v%2FvvAMA2ELISjbp9Wcr5jpZ7ZKCY7bvspgdRF4nL79MAf%2FcCWl%2B5ArfNgTRJyJwlVmC%2BkHcQAFvoQjBENXNOKTZvtr5OGq%2B4egVQ55xbB8UmsTrMI4YrnooqQUJJ0%2BrLfdUhPWsAI69YN%2Bj5c5%2BtXazHah2RLb5tRY249HGy4sDWgjSLvzWkb39d6cKKpRDfZOZn2yg6Kl2z0xpN1MGWx9v4ACBlXucgCxgw%2BjhXibPF25S5Zq1dBtMo%2BJGu%2B1KgwrXk3a9kD9yatLzzJnCKl0HDlROG53bmOjcuqqLF0%2FZcneZMahEprou8SR0Wd1mV0xgq%2FALzs45jMTqTJntrqqsLKKjWa7Aq7cGOfsKf7gCtnTE83YHydGjGgaOJJkhny0KbmMEkmHL2i4FTUasqkbCkaR0hVWSnLtWTzZhcaH3xdhJ2YdLWV3MCnipREHUzn1aNh2mgCMEaOmlqth059bhK6jHICZoJgnnw1jo9drcHJvDDvdo6VLl3MOU5GMa1s4s3H0vuPu1UDpgs7WW%2BLdHY5eUhlkvXq%2FnqtDfoz4BPBf8oyAm4yNOudK9zeHYZ%2F%2BuimKSWexNgDu%2Fx4wFgANl9Droy5gMFmh3AL%2BlK%2FWKYOhiKg9w656ijDxvPy%2FBjqkAT31EMbvoOAYkmguDBuEcBtZ6V9%2FxxvSXkLRbjVvxeMlh09MBUglXA3n%2BORCbJfaxfjl4%2FthYt%2FK%2B%2BHxW%2Fp5hRCW%2FnhjTpIScMHahT4tHLdAbW9TVRlIyw8%2FXECfj19OAfNTmjnEOZ5zHG5MukGQzkkjR7QCKfnbzUru%2FN%2BEXYb0kb%2FABhTqw1DeRuibkXdy%2BANiznQOdUym6CM4priIR%2FkUcMkC&X-Amz-Signature=a5621f21bc3f7db3e141ba1bdaf43f2675772c4cdc5168b6dc87e904805cd628&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMK22YYO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgtjjSt2HrYCJVloAjl6KKrf4AsD1vmu0aTZVPjKdNJwIhALx6B%2FfvAR3K6VwEWuuPsHHTq7pL3u1iTpesLmmw9YL3Kv8DCDwQABoMNjM3NDIzMTgzODA1Igy0EDfg9QQF9KxS6agq3ANEc6v%2FvvAMA2ELISjbp9Wcr5jpZ7ZKCY7bvspgdRF4nL79MAf%2FcCWl%2B5ArfNgTRJyJwlVmC%2BkHcQAFvoQjBENXNOKTZvtr5OGq%2B4egVQ55xbB8UmsTrMI4YrnooqQUJJ0%2BrLfdUhPWsAI69YN%2Bj5c5%2BtXazHah2RLb5tRY249HGy4sDWgjSLvzWkb39d6cKKpRDfZOZn2yg6Kl2z0xpN1MGWx9v4ACBlXucgCxgw%2BjhXibPF25S5Zq1dBtMo%2BJGu%2B1KgwrXk3a9kD9yatLzzJnCKl0HDlROG53bmOjcuqqLF0%2FZcneZMahEprou8SR0Wd1mV0xgq%2FALzs45jMTqTJntrqqsLKKjWa7Aq7cGOfsKf7gCtnTE83YHydGjGgaOJJkhny0KbmMEkmHL2i4FTUasqkbCkaR0hVWSnLtWTzZhcaH3xdhJ2YdLWV3MCnipREHUzn1aNh2mgCMEaOmlqth059bhK6jHICZoJgnnw1jo9drcHJvDDvdo6VLl3MOU5GMa1s4s3H0vuPu1UDpgs7WW%2BLdHY5eUhlkvXq%2FnqtDfoz4BPBf8oyAm4yNOudK9zeHYZ%2F%2BuimKSWexNgDu%2Fx4wFgANl9Droy5gMFmh3AL%2BlK%2FWKYOhiKg9w656ijDxvPy%2FBjqkAT31EMbvoOAYkmguDBuEcBtZ6V9%2FxxvSXkLRbjVvxeMlh09MBUglXA3n%2BORCbJfaxfjl4%2FthYt%2FK%2B%2BHxW%2Fp5hRCW%2FnhjTpIScMHahT4tHLdAbW9TVRlIyw8%2FXECfj19OAfNTmjnEOZ5zHG5MukGQzkkjR7QCKfnbzUru%2FN%2BEXYb0kb%2FABhTqw1DeRuibkXdy%2BANiznQOdUym6CM4priIR%2FkUcMkC&X-Amz-Signature=8bb2c19c5a2902f96594c2b9785cea4a2393249e42f20c3b6da956d17adb1019&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMK22YYO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgtjjSt2HrYCJVloAjl6KKrf4AsD1vmu0aTZVPjKdNJwIhALx6B%2FfvAR3K6VwEWuuPsHHTq7pL3u1iTpesLmmw9YL3Kv8DCDwQABoMNjM3NDIzMTgzODA1Igy0EDfg9QQF9KxS6agq3ANEc6v%2FvvAMA2ELISjbp9Wcr5jpZ7ZKCY7bvspgdRF4nL79MAf%2FcCWl%2B5ArfNgTRJyJwlVmC%2BkHcQAFvoQjBENXNOKTZvtr5OGq%2B4egVQ55xbB8UmsTrMI4YrnooqQUJJ0%2BrLfdUhPWsAI69YN%2Bj5c5%2BtXazHah2RLb5tRY249HGy4sDWgjSLvzWkb39d6cKKpRDfZOZn2yg6Kl2z0xpN1MGWx9v4ACBlXucgCxgw%2BjhXibPF25S5Zq1dBtMo%2BJGu%2B1KgwrXk3a9kD9yatLzzJnCKl0HDlROG53bmOjcuqqLF0%2FZcneZMahEprou8SR0Wd1mV0xgq%2FALzs45jMTqTJntrqqsLKKjWa7Aq7cGOfsKf7gCtnTE83YHydGjGgaOJJkhny0KbmMEkmHL2i4FTUasqkbCkaR0hVWSnLtWTzZhcaH3xdhJ2YdLWV3MCnipREHUzn1aNh2mgCMEaOmlqth059bhK6jHICZoJgnnw1jo9drcHJvDDvdo6VLl3MOU5GMa1s4s3H0vuPu1UDpgs7WW%2BLdHY5eUhlkvXq%2FnqtDfoz4BPBf8oyAm4yNOudK9zeHYZ%2F%2BuimKSWexNgDu%2Fx4wFgANl9Droy5gMFmh3AL%2BlK%2FWKYOhiKg9w656ijDxvPy%2FBjqkAT31EMbvoOAYkmguDBuEcBtZ6V9%2FxxvSXkLRbjVvxeMlh09MBUglXA3n%2BORCbJfaxfjl4%2FthYt%2FK%2B%2BHxW%2Fp5hRCW%2FnhjTpIScMHahT4tHLdAbW9TVRlIyw8%2FXECfj19OAfNTmjnEOZ5zHG5MukGQzkkjR7QCKfnbzUru%2FN%2BEXYb0kb%2FABhTqw1DeRuibkXdy%2BANiznQOdUym6CM4priIR%2FkUcMkC&X-Amz-Signature=064922d9e4fc99829cb72a528af2b094e4c8d5abf035eaac619829ce83b36f84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMK22YYO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgtjjSt2HrYCJVloAjl6KKrf4AsD1vmu0aTZVPjKdNJwIhALx6B%2FfvAR3K6VwEWuuPsHHTq7pL3u1iTpesLmmw9YL3Kv8DCDwQABoMNjM3NDIzMTgzODA1Igy0EDfg9QQF9KxS6agq3ANEc6v%2FvvAMA2ELISjbp9Wcr5jpZ7ZKCY7bvspgdRF4nL79MAf%2FcCWl%2B5ArfNgTRJyJwlVmC%2BkHcQAFvoQjBENXNOKTZvtr5OGq%2B4egVQ55xbB8UmsTrMI4YrnooqQUJJ0%2BrLfdUhPWsAI69YN%2Bj5c5%2BtXazHah2RLb5tRY249HGy4sDWgjSLvzWkb39d6cKKpRDfZOZn2yg6Kl2z0xpN1MGWx9v4ACBlXucgCxgw%2BjhXibPF25S5Zq1dBtMo%2BJGu%2B1KgwrXk3a9kD9yatLzzJnCKl0HDlROG53bmOjcuqqLF0%2FZcneZMahEprou8SR0Wd1mV0xgq%2FALzs45jMTqTJntrqqsLKKjWa7Aq7cGOfsKf7gCtnTE83YHydGjGgaOJJkhny0KbmMEkmHL2i4FTUasqkbCkaR0hVWSnLtWTzZhcaH3xdhJ2YdLWV3MCnipREHUzn1aNh2mgCMEaOmlqth059bhK6jHICZoJgnnw1jo9drcHJvDDvdo6VLl3MOU5GMa1s4s3H0vuPu1UDpgs7WW%2BLdHY5eUhlkvXq%2FnqtDfoz4BPBf8oyAm4yNOudK9zeHYZ%2F%2BuimKSWexNgDu%2Fx4wFgANl9Droy5gMFmh3AL%2BlK%2FWKYOhiKg9w656ijDxvPy%2FBjqkAT31EMbvoOAYkmguDBuEcBtZ6V9%2FxxvSXkLRbjVvxeMlh09MBUglXA3n%2BORCbJfaxfjl4%2FthYt%2FK%2B%2BHxW%2Fp5hRCW%2FnhjTpIScMHahT4tHLdAbW9TVRlIyw8%2FXECfj19OAfNTmjnEOZ5zHG5MukGQzkkjR7QCKfnbzUru%2FN%2BEXYb0kb%2FABhTqw1DeRuibkXdy%2BANiznQOdUym6CM4priIR%2FkUcMkC&X-Amz-Signature=aec1b740306c81956d1b7db4567a51d49e5ba22f280e116df1e3f0e074d64754&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMK22YYO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgtjjSt2HrYCJVloAjl6KKrf4AsD1vmu0aTZVPjKdNJwIhALx6B%2FfvAR3K6VwEWuuPsHHTq7pL3u1iTpesLmmw9YL3Kv8DCDwQABoMNjM3NDIzMTgzODA1Igy0EDfg9QQF9KxS6agq3ANEc6v%2FvvAMA2ELISjbp9Wcr5jpZ7ZKCY7bvspgdRF4nL79MAf%2FcCWl%2B5ArfNgTRJyJwlVmC%2BkHcQAFvoQjBENXNOKTZvtr5OGq%2B4egVQ55xbB8UmsTrMI4YrnooqQUJJ0%2BrLfdUhPWsAI69YN%2Bj5c5%2BtXazHah2RLb5tRY249HGy4sDWgjSLvzWkb39d6cKKpRDfZOZn2yg6Kl2z0xpN1MGWx9v4ACBlXucgCxgw%2BjhXibPF25S5Zq1dBtMo%2BJGu%2B1KgwrXk3a9kD9yatLzzJnCKl0HDlROG53bmOjcuqqLF0%2FZcneZMahEprou8SR0Wd1mV0xgq%2FALzs45jMTqTJntrqqsLKKjWa7Aq7cGOfsKf7gCtnTE83YHydGjGgaOJJkhny0KbmMEkmHL2i4FTUasqkbCkaR0hVWSnLtWTzZhcaH3xdhJ2YdLWV3MCnipREHUzn1aNh2mgCMEaOmlqth059bhK6jHICZoJgnnw1jo9drcHJvDDvdo6VLl3MOU5GMa1s4s3H0vuPu1UDpgs7WW%2BLdHY5eUhlkvXq%2FnqtDfoz4BPBf8oyAm4yNOudK9zeHYZ%2F%2BuimKSWexNgDu%2Fx4wFgANl9Droy5gMFmh3AL%2BlK%2FWKYOhiKg9w656ijDxvPy%2FBjqkAT31EMbvoOAYkmguDBuEcBtZ6V9%2FxxvSXkLRbjVvxeMlh09MBUglXA3n%2BORCbJfaxfjl4%2FthYt%2FK%2B%2BHxW%2Fp5hRCW%2FnhjTpIScMHahT4tHLdAbW9TVRlIyw8%2FXECfj19OAfNTmjnEOZ5zHG5MukGQzkkjR7QCKfnbzUru%2FN%2BEXYb0kb%2FABhTqw1DeRuibkXdy%2BANiznQOdUym6CM4priIR%2FkUcMkC&X-Amz-Signature=ec0a97e8b36ea16dc0aff7a080c44b7f42eb4edf2d7301a42dc00f0d83da0019&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMK22YYO%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgtjjSt2HrYCJVloAjl6KKrf4AsD1vmu0aTZVPjKdNJwIhALx6B%2FfvAR3K6VwEWuuPsHHTq7pL3u1iTpesLmmw9YL3Kv8DCDwQABoMNjM3NDIzMTgzODA1Igy0EDfg9QQF9KxS6agq3ANEc6v%2FvvAMA2ELISjbp9Wcr5jpZ7ZKCY7bvspgdRF4nL79MAf%2FcCWl%2B5ArfNgTRJyJwlVmC%2BkHcQAFvoQjBENXNOKTZvtr5OGq%2B4egVQ55xbB8UmsTrMI4YrnooqQUJJ0%2BrLfdUhPWsAI69YN%2Bj5c5%2BtXazHah2RLb5tRY249HGy4sDWgjSLvzWkb39d6cKKpRDfZOZn2yg6Kl2z0xpN1MGWx9v4ACBlXucgCxgw%2BjhXibPF25S5Zq1dBtMo%2BJGu%2B1KgwrXk3a9kD9yatLzzJnCKl0HDlROG53bmOjcuqqLF0%2FZcneZMahEprou8SR0Wd1mV0xgq%2FALzs45jMTqTJntrqqsLKKjWa7Aq7cGOfsKf7gCtnTE83YHydGjGgaOJJkhny0KbmMEkmHL2i4FTUasqkbCkaR0hVWSnLtWTzZhcaH3xdhJ2YdLWV3MCnipREHUzn1aNh2mgCMEaOmlqth059bhK6jHICZoJgnnw1jo9drcHJvDDvdo6VLl3MOU5GMa1s4s3H0vuPu1UDpgs7WW%2BLdHY5eUhlkvXq%2FnqtDfoz4BPBf8oyAm4yNOudK9zeHYZ%2F%2BuimKSWexNgDu%2Fx4wFgANl9Droy5gMFmh3AL%2BlK%2FWKYOhiKg9w656ijDxvPy%2FBjqkAT31EMbvoOAYkmguDBuEcBtZ6V9%2FxxvSXkLRbjVvxeMlh09MBUglXA3n%2BORCbJfaxfjl4%2FthYt%2FK%2B%2BHxW%2Fp5hRCW%2FnhjTpIScMHahT4tHLdAbW9TVRlIyw8%2FXECfj19OAfNTmjnEOZ5zHG5MukGQzkkjR7QCKfnbzUru%2FN%2BEXYb0kb%2FABhTqw1DeRuibkXdy%2BANiznQOdUym6CM4priIR%2FkUcMkC&X-Amz-Signature=f4253fec90b6b8755721a7a3fa333d552abda68042982bd38b94137e0a1b9f86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
