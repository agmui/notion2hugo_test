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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Z4Q2FX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD6XaSm0I1ERpr4YPRA0uBxoGoIblImuSUMmTvTaf0i7gIgVbINNmW1BuUlX1EGzwYFnd1MeeZeph0tgYU2r1nE4dUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFSOknLgmJTcG7J7byrcA%2F7uVEUCBbrtxth3LGZueJovjU2s0WA35FxSewvTivqNpNOmpp9pV%2BZsuqfPkOBdTlw2up%2FQN9iklLm%2BVqqyIEyk5oe0DWjwOfKI%2FXHhpUylM9L1x0HP%2Bga6cgu4y3Eqe0HeR2oEX7zizXHR2f7GYIETMBnab8QBtaA9X7FFAj05fTV9oFGt2FIYlftEo1SzI4xCs2V%2BRrRlgJ1Uqwrez0StMSe%2F8MLK6emAE%2FvzMMnabsdGLfcL2DNu%2BVcw%2ByMFKJp1u%2BkxYlu2D8l0APwSWJbKFKlMWlMAJ42hGui43qiy7U6kVSz31g278dgdBO5u%2BcsAM6kG%2BEthrgCn78620A8vKm1Rx7zCZo4aLVyUtAVXnxXNu1ttvsm7NDS5S8EyykEpW4UzD20wJgR3LarP0r5vRPK%2BIrSU2GTc8RbWDpHJU5MfHqffEhIh%2F%2BNAHQQszoZj%2BlJiG4BRfjMW0eaX%2FiutN%2B%2BtpTDcZPoGFHn1l9okGdeNlOQ2%2BnHVTiyg5mzERFpxeqAfv6OmnbfjzPDV8OiZ1wE7Or%2BccMXP9jOR4UJ9rKVblL1TvFPNFOfro%2Bg7fBJQTWBgUmOiucbl2h218fF9lpJ88qeQYY8hS12xvWjmbQuWq4BUeM2BYjwAMO7Y7L4GOqUBe5Fk6M8pH2OqPZEm1TkXLYpkPh%2BHKdY0HKgDwDu715g1K2QEU5WHyNe4nPCC5jnljiTRrW7Aqm5YN5lx8bxIs5A%2BKDzFalJ7kNyrbyI2PMwglIw%2F28k1OPelDYK2z9KlqReJV%2FQ%2FuNTaEzN4hhSEnwGAAaQICzqMmcQHaolNZoPQYjCYFhZI4h%2FDF%2B0ewckauOcxd0eUn%2FKOyeEjDZjefv9bxJhV&X-Amz-Signature=69e6b40ad40e2ee87c3fc782d1e379aa6b3e7ee61b3de8bad14d59bf915f743f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Z4Q2FX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD6XaSm0I1ERpr4YPRA0uBxoGoIblImuSUMmTvTaf0i7gIgVbINNmW1BuUlX1EGzwYFnd1MeeZeph0tgYU2r1nE4dUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFSOknLgmJTcG7J7byrcA%2F7uVEUCBbrtxth3LGZueJovjU2s0WA35FxSewvTivqNpNOmpp9pV%2BZsuqfPkOBdTlw2up%2FQN9iklLm%2BVqqyIEyk5oe0DWjwOfKI%2FXHhpUylM9L1x0HP%2Bga6cgu4y3Eqe0HeR2oEX7zizXHR2f7GYIETMBnab8QBtaA9X7FFAj05fTV9oFGt2FIYlftEo1SzI4xCs2V%2BRrRlgJ1Uqwrez0StMSe%2F8MLK6emAE%2FvzMMnabsdGLfcL2DNu%2BVcw%2ByMFKJp1u%2BkxYlu2D8l0APwSWJbKFKlMWlMAJ42hGui43qiy7U6kVSz31g278dgdBO5u%2BcsAM6kG%2BEthrgCn78620A8vKm1Rx7zCZo4aLVyUtAVXnxXNu1ttvsm7NDS5S8EyykEpW4UzD20wJgR3LarP0r5vRPK%2BIrSU2GTc8RbWDpHJU5MfHqffEhIh%2F%2BNAHQQszoZj%2BlJiG4BRfjMW0eaX%2FiutN%2B%2BtpTDcZPoGFHn1l9okGdeNlOQ2%2BnHVTiyg5mzERFpxeqAfv6OmnbfjzPDV8OiZ1wE7Or%2BccMXP9jOR4UJ9rKVblL1TvFPNFOfro%2Bg7fBJQTWBgUmOiucbl2h218fF9lpJ88qeQYY8hS12xvWjmbQuWq4BUeM2BYjwAMO7Y7L4GOqUBe5Fk6M8pH2OqPZEm1TkXLYpkPh%2BHKdY0HKgDwDu715g1K2QEU5WHyNe4nPCC5jnljiTRrW7Aqm5YN5lx8bxIs5A%2BKDzFalJ7kNyrbyI2PMwglIw%2F28k1OPelDYK2z9KlqReJV%2FQ%2FuNTaEzN4hhSEnwGAAaQICzqMmcQHaolNZoPQYjCYFhZI4h%2FDF%2B0ewckauOcxd0eUn%2FKOyeEjDZjefv9bxJhV&X-Amz-Signature=2bdbf341e31e4b1cb0f9a66f03b9eef21da26fee621dff42152a07dc2a71dacf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Z4Q2FX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD6XaSm0I1ERpr4YPRA0uBxoGoIblImuSUMmTvTaf0i7gIgVbINNmW1BuUlX1EGzwYFnd1MeeZeph0tgYU2r1nE4dUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFSOknLgmJTcG7J7byrcA%2F7uVEUCBbrtxth3LGZueJovjU2s0WA35FxSewvTivqNpNOmpp9pV%2BZsuqfPkOBdTlw2up%2FQN9iklLm%2BVqqyIEyk5oe0DWjwOfKI%2FXHhpUylM9L1x0HP%2Bga6cgu4y3Eqe0HeR2oEX7zizXHR2f7GYIETMBnab8QBtaA9X7FFAj05fTV9oFGt2FIYlftEo1SzI4xCs2V%2BRrRlgJ1Uqwrez0StMSe%2F8MLK6emAE%2FvzMMnabsdGLfcL2DNu%2BVcw%2ByMFKJp1u%2BkxYlu2D8l0APwSWJbKFKlMWlMAJ42hGui43qiy7U6kVSz31g278dgdBO5u%2BcsAM6kG%2BEthrgCn78620A8vKm1Rx7zCZo4aLVyUtAVXnxXNu1ttvsm7NDS5S8EyykEpW4UzD20wJgR3LarP0r5vRPK%2BIrSU2GTc8RbWDpHJU5MfHqffEhIh%2F%2BNAHQQszoZj%2BlJiG4BRfjMW0eaX%2FiutN%2B%2BtpTDcZPoGFHn1l9okGdeNlOQ2%2BnHVTiyg5mzERFpxeqAfv6OmnbfjzPDV8OiZ1wE7Or%2BccMXP9jOR4UJ9rKVblL1TvFPNFOfro%2Bg7fBJQTWBgUmOiucbl2h218fF9lpJ88qeQYY8hS12xvWjmbQuWq4BUeM2BYjwAMO7Y7L4GOqUBe5Fk6M8pH2OqPZEm1TkXLYpkPh%2BHKdY0HKgDwDu715g1K2QEU5WHyNe4nPCC5jnljiTRrW7Aqm5YN5lx8bxIs5A%2BKDzFalJ7kNyrbyI2PMwglIw%2F28k1OPelDYK2z9KlqReJV%2FQ%2FuNTaEzN4hhSEnwGAAaQICzqMmcQHaolNZoPQYjCYFhZI4h%2FDF%2B0ewckauOcxd0eUn%2FKOyeEjDZjefv9bxJhV&X-Amz-Signature=6230a230c8b01db71388d7f22319c94db744d4567bcd4d0f8e4341410cf76c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Z4Q2FX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD6XaSm0I1ERpr4YPRA0uBxoGoIblImuSUMmTvTaf0i7gIgVbINNmW1BuUlX1EGzwYFnd1MeeZeph0tgYU2r1nE4dUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFSOknLgmJTcG7J7byrcA%2F7uVEUCBbrtxth3LGZueJovjU2s0WA35FxSewvTivqNpNOmpp9pV%2BZsuqfPkOBdTlw2up%2FQN9iklLm%2BVqqyIEyk5oe0DWjwOfKI%2FXHhpUylM9L1x0HP%2Bga6cgu4y3Eqe0HeR2oEX7zizXHR2f7GYIETMBnab8QBtaA9X7FFAj05fTV9oFGt2FIYlftEo1SzI4xCs2V%2BRrRlgJ1Uqwrez0StMSe%2F8MLK6emAE%2FvzMMnabsdGLfcL2DNu%2BVcw%2ByMFKJp1u%2BkxYlu2D8l0APwSWJbKFKlMWlMAJ42hGui43qiy7U6kVSz31g278dgdBO5u%2BcsAM6kG%2BEthrgCn78620A8vKm1Rx7zCZo4aLVyUtAVXnxXNu1ttvsm7NDS5S8EyykEpW4UzD20wJgR3LarP0r5vRPK%2BIrSU2GTc8RbWDpHJU5MfHqffEhIh%2F%2BNAHQQszoZj%2BlJiG4BRfjMW0eaX%2FiutN%2B%2BtpTDcZPoGFHn1l9okGdeNlOQ2%2BnHVTiyg5mzERFpxeqAfv6OmnbfjzPDV8OiZ1wE7Or%2BccMXP9jOR4UJ9rKVblL1TvFPNFOfro%2Bg7fBJQTWBgUmOiucbl2h218fF9lpJ88qeQYY8hS12xvWjmbQuWq4BUeM2BYjwAMO7Y7L4GOqUBe5Fk6M8pH2OqPZEm1TkXLYpkPh%2BHKdY0HKgDwDu715g1K2QEU5WHyNe4nPCC5jnljiTRrW7Aqm5YN5lx8bxIs5A%2BKDzFalJ7kNyrbyI2PMwglIw%2F28k1OPelDYK2z9KlqReJV%2FQ%2FuNTaEzN4hhSEnwGAAaQICzqMmcQHaolNZoPQYjCYFhZI4h%2FDF%2B0ewckauOcxd0eUn%2FKOyeEjDZjefv9bxJhV&X-Amz-Signature=a579adb24af2d86c1e9a1454b4f7b735a886ac4194e9edcfa505433005620ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Z4Q2FX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD6XaSm0I1ERpr4YPRA0uBxoGoIblImuSUMmTvTaf0i7gIgVbINNmW1BuUlX1EGzwYFnd1MeeZeph0tgYU2r1nE4dUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFSOknLgmJTcG7J7byrcA%2F7uVEUCBbrtxth3LGZueJovjU2s0WA35FxSewvTivqNpNOmpp9pV%2BZsuqfPkOBdTlw2up%2FQN9iklLm%2BVqqyIEyk5oe0DWjwOfKI%2FXHhpUylM9L1x0HP%2Bga6cgu4y3Eqe0HeR2oEX7zizXHR2f7GYIETMBnab8QBtaA9X7FFAj05fTV9oFGt2FIYlftEo1SzI4xCs2V%2BRrRlgJ1Uqwrez0StMSe%2F8MLK6emAE%2FvzMMnabsdGLfcL2DNu%2BVcw%2ByMFKJp1u%2BkxYlu2D8l0APwSWJbKFKlMWlMAJ42hGui43qiy7U6kVSz31g278dgdBO5u%2BcsAM6kG%2BEthrgCn78620A8vKm1Rx7zCZo4aLVyUtAVXnxXNu1ttvsm7NDS5S8EyykEpW4UzD20wJgR3LarP0r5vRPK%2BIrSU2GTc8RbWDpHJU5MfHqffEhIh%2F%2BNAHQQszoZj%2BlJiG4BRfjMW0eaX%2FiutN%2B%2BtpTDcZPoGFHn1l9okGdeNlOQ2%2BnHVTiyg5mzERFpxeqAfv6OmnbfjzPDV8OiZ1wE7Or%2BccMXP9jOR4UJ9rKVblL1TvFPNFOfro%2Bg7fBJQTWBgUmOiucbl2h218fF9lpJ88qeQYY8hS12xvWjmbQuWq4BUeM2BYjwAMO7Y7L4GOqUBe5Fk6M8pH2OqPZEm1TkXLYpkPh%2BHKdY0HKgDwDu715g1K2QEU5WHyNe4nPCC5jnljiTRrW7Aqm5YN5lx8bxIs5A%2BKDzFalJ7kNyrbyI2PMwglIw%2F28k1OPelDYK2z9KlqReJV%2FQ%2FuNTaEzN4hhSEnwGAAaQICzqMmcQHaolNZoPQYjCYFhZI4h%2FDF%2B0ewckauOcxd0eUn%2FKOyeEjDZjefv9bxJhV&X-Amz-Signature=1469556394dbacea12802e17d48a9009245daa3ae34f080789797460216ee902&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Z4Q2FX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD6XaSm0I1ERpr4YPRA0uBxoGoIblImuSUMmTvTaf0i7gIgVbINNmW1BuUlX1EGzwYFnd1MeeZeph0tgYU2r1nE4dUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFSOknLgmJTcG7J7byrcA%2F7uVEUCBbrtxth3LGZueJovjU2s0WA35FxSewvTivqNpNOmpp9pV%2BZsuqfPkOBdTlw2up%2FQN9iklLm%2BVqqyIEyk5oe0DWjwOfKI%2FXHhpUylM9L1x0HP%2Bga6cgu4y3Eqe0HeR2oEX7zizXHR2f7GYIETMBnab8QBtaA9X7FFAj05fTV9oFGt2FIYlftEo1SzI4xCs2V%2BRrRlgJ1Uqwrez0StMSe%2F8MLK6emAE%2FvzMMnabsdGLfcL2DNu%2BVcw%2ByMFKJp1u%2BkxYlu2D8l0APwSWJbKFKlMWlMAJ42hGui43qiy7U6kVSz31g278dgdBO5u%2BcsAM6kG%2BEthrgCn78620A8vKm1Rx7zCZo4aLVyUtAVXnxXNu1ttvsm7NDS5S8EyykEpW4UzD20wJgR3LarP0r5vRPK%2BIrSU2GTc8RbWDpHJU5MfHqffEhIh%2F%2BNAHQQszoZj%2BlJiG4BRfjMW0eaX%2FiutN%2B%2BtpTDcZPoGFHn1l9okGdeNlOQ2%2BnHVTiyg5mzERFpxeqAfv6OmnbfjzPDV8OiZ1wE7Or%2BccMXP9jOR4UJ9rKVblL1TvFPNFOfro%2Bg7fBJQTWBgUmOiucbl2h218fF9lpJ88qeQYY8hS12xvWjmbQuWq4BUeM2BYjwAMO7Y7L4GOqUBe5Fk6M8pH2OqPZEm1TkXLYpkPh%2BHKdY0HKgDwDu715g1K2QEU5WHyNe4nPCC5jnljiTRrW7Aqm5YN5lx8bxIs5A%2BKDzFalJ7kNyrbyI2PMwglIw%2F28k1OPelDYK2z9KlqReJV%2FQ%2FuNTaEzN4hhSEnwGAAaQICzqMmcQHaolNZoPQYjCYFhZI4h%2FDF%2B0ewckauOcxd0eUn%2FKOyeEjDZjefv9bxJhV&X-Amz-Signature=1e02f43b1e44427441b65ddfcf908b76574f7e19ce15bd29f30ae38d3f150876&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Z4Q2FX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD6XaSm0I1ERpr4YPRA0uBxoGoIblImuSUMmTvTaf0i7gIgVbINNmW1BuUlX1EGzwYFnd1MeeZeph0tgYU2r1nE4dUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFSOknLgmJTcG7J7byrcA%2F7uVEUCBbrtxth3LGZueJovjU2s0WA35FxSewvTivqNpNOmpp9pV%2BZsuqfPkOBdTlw2up%2FQN9iklLm%2BVqqyIEyk5oe0DWjwOfKI%2FXHhpUylM9L1x0HP%2Bga6cgu4y3Eqe0HeR2oEX7zizXHR2f7GYIETMBnab8QBtaA9X7FFAj05fTV9oFGt2FIYlftEo1SzI4xCs2V%2BRrRlgJ1Uqwrez0StMSe%2F8MLK6emAE%2FvzMMnabsdGLfcL2DNu%2BVcw%2ByMFKJp1u%2BkxYlu2D8l0APwSWJbKFKlMWlMAJ42hGui43qiy7U6kVSz31g278dgdBO5u%2BcsAM6kG%2BEthrgCn78620A8vKm1Rx7zCZo4aLVyUtAVXnxXNu1ttvsm7NDS5S8EyykEpW4UzD20wJgR3LarP0r5vRPK%2BIrSU2GTc8RbWDpHJU5MfHqffEhIh%2F%2BNAHQQszoZj%2BlJiG4BRfjMW0eaX%2FiutN%2B%2BtpTDcZPoGFHn1l9okGdeNlOQ2%2BnHVTiyg5mzERFpxeqAfv6OmnbfjzPDV8OiZ1wE7Or%2BccMXP9jOR4UJ9rKVblL1TvFPNFOfro%2Bg7fBJQTWBgUmOiucbl2h218fF9lpJ88qeQYY8hS12xvWjmbQuWq4BUeM2BYjwAMO7Y7L4GOqUBe5Fk6M8pH2OqPZEm1TkXLYpkPh%2BHKdY0HKgDwDu715g1K2QEU5WHyNe4nPCC5jnljiTRrW7Aqm5YN5lx8bxIs5A%2BKDzFalJ7kNyrbyI2PMwglIw%2F28k1OPelDYK2z9KlqReJV%2FQ%2FuNTaEzN4hhSEnwGAAaQICzqMmcQHaolNZoPQYjCYFhZI4h%2FDF%2B0ewckauOcxd0eUn%2FKOyeEjDZjefv9bxJhV&X-Amz-Signature=18069992e684d9349c494655cbfaf0e757cb74a673ed60ffe8782568e30e3cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Z4Q2FX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD6XaSm0I1ERpr4YPRA0uBxoGoIblImuSUMmTvTaf0i7gIgVbINNmW1BuUlX1EGzwYFnd1MeeZeph0tgYU2r1nE4dUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFSOknLgmJTcG7J7byrcA%2F7uVEUCBbrtxth3LGZueJovjU2s0WA35FxSewvTivqNpNOmpp9pV%2BZsuqfPkOBdTlw2up%2FQN9iklLm%2BVqqyIEyk5oe0DWjwOfKI%2FXHhpUylM9L1x0HP%2Bga6cgu4y3Eqe0HeR2oEX7zizXHR2f7GYIETMBnab8QBtaA9X7FFAj05fTV9oFGt2FIYlftEo1SzI4xCs2V%2BRrRlgJ1Uqwrez0StMSe%2F8MLK6emAE%2FvzMMnabsdGLfcL2DNu%2BVcw%2ByMFKJp1u%2BkxYlu2D8l0APwSWJbKFKlMWlMAJ42hGui43qiy7U6kVSz31g278dgdBO5u%2BcsAM6kG%2BEthrgCn78620A8vKm1Rx7zCZo4aLVyUtAVXnxXNu1ttvsm7NDS5S8EyykEpW4UzD20wJgR3LarP0r5vRPK%2BIrSU2GTc8RbWDpHJU5MfHqffEhIh%2F%2BNAHQQszoZj%2BlJiG4BRfjMW0eaX%2FiutN%2B%2BtpTDcZPoGFHn1l9okGdeNlOQ2%2BnHVTiyg5mzERFpxeqAfv6OmnbfjzPDV8OiZ1wE7Or%2BccMXP9jOR4UJ9rKVblL1TvFPNFOfro%2Bg7fBJQTWBgUmOiucbl2h218fF9lpJ88qeQYY8hS12xvWjmbQuWq4BUeM2BYjwAMO7Y7L4GOqUBe5Fk6M8pH2OqPZEm1TkXLYpkPh%2BHKdY0HKgDwDu715g1K2QEU5WHyNe4nPCC5jnljiTRrW7Aqm5YN5lx8bxIs5A%2BKDzFalJ7kNyrbyI2PMwglIw%2F28k1OPelDYK2z9KlqReJV%2FQ%2FuNTaEzN4hhSEnwGAAaQICzqMmcQHaolNZoPQYjCYFhZI4h%2FDF%2B0ewckauOcxd0eUn%2FKOyeEjDZjefv9bxJhV&X-Amz-Signature=63861236a7200b98d8697ec4ec785f34b8b4c53b4b26a4b7021398616eeb862e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
