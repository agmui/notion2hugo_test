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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETX274O%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCTasZsF21G0lsUmIPf4gNLxs1u%2B8Y2CrL5GUhnXqq18wIgAhhshZW366VLLqnJzmWg%2B8y3zP8p9HvcZprd1U2ofrgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPmmhkfWwTn2aE4tircAz7CTUvX15jZZZ35EkkdgeQk7oF5gIWBXthX%2BQgcfaqC5A0DoVLxGd0mJ4rYpejuFZKIMAhClGre%2F6Iry699skY241I6x%2B8JLMh%2BB52dr1oWTPv9MPbndS1gaxgfTbCRPuG5m7jjw3AkXc7iYelADusaVzln0%2BNGiYs7ADaLJcwGO%2BeCWbwNZqwOUgpaL6jZ21UNDIjNbbiKQ0bcEe%2Bf8eiVZRhZ%2BlKxb2lfzYg8kummnUUi3OlgwiAkBcUH8G0BsLfIaKezDzZE%2FvuMUWF51AaD3aOiuv89EW0kpxzQTH8PBI3It6C22MZwjfvad1eXZ5ykbRzlWVuQpYxo2v64Cxo5Cohf0st1aa0zTR%2BtTSTmf4sXEjVtiRicHmEczogLRbmwVGDp4OHGwxTP6QebcLLuwGgx99AV46lWfIOSE4vVKq7DQ6Lsh%2BX0Fvofx32l0pT7RoXTC0r6zrgVQjanVm2uAwlLnAzeTfIzhAHe%2Fy6FcbN8ZMXDwT06Oo6KIOi5WhW%2F6ieDBQ8fsnpewAliN9U0pf3s7QY%2FVC%2BD0LxTdz2cKFzkWx5rcMhqRPDyHfLYvWKyn7FHbK4FfFd68u2uOT%2FBfoLU%2FA3dUks4zWPJGR84axhma6Bfj4rpNb2SMJa97r8GOqUBTV6%2BqqYvOu%2FyoSw5qSJ%2BYpDe2vB07F721qx3RXtf20sR0NaLeKYeOfr2I0zkVgiL1I4TbWhxrwXUtnNM1oA20WgHlcCiawyl6dVfGMT31%2BE35gqpjqwBxvnPC%2FMZCS9IBfU8dbViQ1vQMByx8GyvvZKk6IvalDT17gN%2F5jLTGSd7xPPM09BHll9%2Feo4BAATfYIsd%2F1G1ZgCX87BUl4zpXpCkgkY4&X-Amz-Signature=d5c89a2439007c08b8b800ead24ae61b9f787f014380197459acc4dad0c9cbb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETX274O%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCTasZsF21G0lsUmIPf4gNLxs1u%2B8Y2CrL5GUhnXqq18wIgAhhshZW366VLLqnJzmWg%2B8y3zP8p9HvcZprd1U2ofrgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPmmhkfWwTn2aE4tircAz7CTUvX15jZZZ35EkkdgeQk7oF5gIWBXthX%2BQgcfaqC5A0DoVLxGd0mJ4rYpejuFZKIMAhClGre%2F6Iry699skY241I6x%2B8JLMh%2BB52dr1oWTPv9MPbndS1gaxgfTbCRPuG5m7jjw3AkXc7iYelADusaVzln0%2BNGiYs7ADaLJcwGO%2BeCWbwNZqwOUgpaL6jZ21UNDIjNbbiKQ0bcEe%2Bf8eiVZRhZ%2BlKxb2lfzYg8kummnUUi3OlgwiAkBcUH8G0BsLfIaKezDzZE%2FvuMUWF51AaD3aOiuv89EW0kpxzQTH8PBI3It6C22MZwjfvad1eXZ5ykbRzlWVuQpYxo2v64Cxo5Cohf0st1aa0zTR%2BtTSTmf4sXEjVtiRicHmEczogLRbmwVGDp4OHGwxTP6QebcLLuwGgx99AV46lWfIOSE4vVKq7DQ6Lsh%2BX0Fvofx32l0pT7RoXTC0r6zrgVQjanVm2uAwlLnAzeTfIzhAHe%2Fy6FcbN8ZMXDwT06Oo6KIOi5WhW%2F6ieDBQ8fsnpewAliN9U0pf3s7QY%2FVC%2BD0LxTdz2cKFzkWx5rcMhqRPDyHfLYvWKyn7FHbK4FfFd68u2uOT%2FBfoLU%2FA3dUks4zWPJGR84axhma6Bfj4rpNb2SMJa97r8GOqUBTV6%2BqqYvOu%2FyoSw5qSJ%2BYpDe2vB07F721qx3RXtf20sR0NaLeKYeOfr2I0zkVgiL1I4TbWhxrwXUtnNM1oA20WgHlcCiawyl6dVfGMT31%2BE35gqpjqwBxvnPC%2FMZCS9IBfU8dbViQ1vQMByx8GyvvZKk6IvalDT17gN%2F5jLTGSd7xPPM09BHll9%2Feo4BAATfYIsd%2F1G1ZgCX87BUl4zpXpCkgkY4&X-Amz-Signature=dabf633ee7515f837dfef30778b0bc39c67a5ef921d74fac77a07f3aab60a628&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETX274O%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCTasZsF21G0lsUmIPf4gNLxs1u%2B8Y2CrL5GUhnXqq18wIgAhhshZW366VLLqnJzmWg%2B8y3zP8p9HvcZprd1U2ofrgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPmmhkfWwTn2aE4tircAz7CTUvX15jZZZ35EkkdgeQk7oF5gIWBXthX%2BQgcfaqC5A0DoVLxGd0mJ4rYpejuFZKIMAhClGre%2F6Iry699skY241I6x%2B8JLMh%2BB52dr1oWTPv9MPbndS1gaxgfTbCRPuG5m7jjw3AkXc7iYelADusaVzln0%2BNGiYs7ADaLJcwGO%2BeCWbwNZqwOUgpaL6jZ21UNDIjNbbiKQ0bcEe%2Bf8eiVZRhZ%2BlKxb2lfzYg8kummnUUi3OlgwiAkBcUH8G0BsLfIaKezDzZE%2FvuMUWF51AaD3aOiuv89EW0kpxzQTH8PBI3It6C22MZwjfvad1eXZ5ykbRzlWVuQpYxo2v64Cxo5Cohf0st1aa0zTR%2BtTSTmf4sXEjVtiRicHmEczogLRbmwVGDp4OHGwxTP6QebcLLuwGgx99AV46lWfIOSE4vVKq7DQ6Lsh%2BX0Fvofx32l0pT7RoXTC0r6zrgVQjanVm2uAwlLnAzeTfIzhAHe%2Fy6FcbN8ZMXDwT06Oo6KIOi5WhW%2F6ieDBQ8fsnpewAliN9U0pf3s7QY%2FVC%2BD0LxTdz2cKFzkWx5rcMhqRPDyHfLYvWKyn7FHbK4FfFd68u2uOT%2FBfoLU%2FA3dUks4zWPJGR84axhma6Bfj4rpNb2SMJa97r8GOqUBTV6%2BqqYvOu%2FyoSw5qSJ%2BYpDe2vB07F721qx3RXtf20sR0NaLeKYeOfr2I0zkVgiL1I4TbWhxrwXUtnNM1oA20WgHlcCiawyl6dVfGMT31%2BE35gqpjqwBxvnPC%2FMZCS9IBfU8dbViQ1vQMByx8GyvvZKk6IvalDT17gN%2F5jLTGSd7xPPM09BHll9%2Feo4BAATfYIsd%2F1G1ZgCX87BUl4zpXpCkgkY4&X-Amz-Signature=abfb92a8e65098ab4998b18300695f6c579ec899b3020e1fdc1fbeb2ea86e68f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETX274O%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCTasZsF21G0lsUmIPf4gNLxs1u%2B8Y2CrL5GUhnXqq18wIgAhhshZW366VLLqnJzmWg%2B8y3zP8p9HvcZprd1U2ofrgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPmmhkfWwTn2aE4tircAz7CTUvX15jZZZ35EkkdgeQk7oF5gIWBXthX%2BQgcfaqC5A0DoVLxGd0mJ4rYpejuFZKIMAhClGre%2F6Iry699skY241I6x%2B8JLMh%2BB52dr1oWTPv9MPbndS1gaxgfTbCRPuG5m7jjw3AkXc7iYelADusaVzln0%2BNGiYs7ADaLJcwGO%2BeCWbwNZqwOUgpaL6jZ21UNDIjNbbiKQ0bcEe%2Bf8eiVZRhZ%2BlKxb2lfzYg8kummnUUi3OlgwiAkBcUH8G0BsLfIaKezDzZE%2FvuMUWF51AaD3aOiuv89EW0kpxzQTH8PBI3It6C22MZwjfvad1eXZ5ykbRzlWVuQpYxo2v64Cxo5Cohf0st1aa0zTR%2BtTSTmf4sXEjVtiRicHmEczogLRbmwVGDp4OHGwxTP6QebcLLuwGgx99AV46lWfIOSE4vVKq7DQ6Lsh%2BX0Fvofx32l0pT7RoXTC0r6zrgVQjanVm2uAwlLnAzeTfIzhAHe%2Fy6FcbN8ZMXDwT06Oo6KIOi5WhW%2F6ieDBQ8fsnpewAliN9U0pf3s7QY%2FVC%2BD0LxTdz2cKFzkWx5rcMhqRPDyHfLYvWKyn7FHbK4FfFd68u2uOT%2FBfoLU%2FA3dUks4zWPJGR84axhma6Bfj4rpNb2SMJa97r8GOqUBTV6%2BqqYvOu%2FyoSw5qSJ%2BYpDe2vB07F721qx3RXtf20sR0NaLeKYeOfr2I0zkVgiL1I4TbWhxrwXUtnNM1oA20WgHlcCiawyl6dVfGMT31%2BE35gqpjqwBxvnPC%2FMZCS9IBfU8dbViQ1vQMByx8GyvvZKk6IvalDT17gN%2F5jLTGSd7xPPM09BHll9%2Feo4BAATfYIsd%2F1G1ZgCX87BUl4zpXpCkgkY4&X-Amz-Signature=940ee42beb15a7cd8e77380b5390d2b4627ccc012c00ad9281e348c59a940684&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETX274O%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCTasZsF21G0lsUmIPf4gNLxs1u%2B8Y2CrL5GUhnXqq18wIgAhhshZW366VLLqnJzmWg%2B8y3zP8p9HvcZprd1U2ofrgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPmmhkfWwTn2aE4tircAz7CTUvX15jZZZ35EkkdgeQk7oF5gIWBXthX%2BQgcfaqC5A0DoVLxGd0mJ4rYpejuFZKIMAhClGre%2F6Iry699skY241I6x%2B8JLMh%2BB52dr1oWTPv9MPbndS1gaxgfTbCRPuG5m7jjw3AkXc7iYelADusaVzln0%2BNGiYs7ADaLJcwGO%2BeCWbwNZqwOUgpaL6jZ21UNDIjNbbiKQ0bcEe%2Bf8eiVZRhZ%2BlKxb2lfzYg8kummnUUi3OlgwiAkBcUH8G0BsLfIaKezDzZE%2FvuMUWF51AaD3aOiuv89EW0kpxzQTH8PBI3It6C22MZwjfvad1eXZ5ykbRzlWVuQpYxo2v64Cxo5Cohf0st1aa0zTR%2BtTSTmf4sXEjVtiRicHmEczogLRbmwVGDp4OHGwxTP6QebcLLuwGgx99AV46lWfIOSE4vVKq7DQ6Lsh%2BX0Fvofx32l0pT7RoXTC0r6zrgVQjanVm2uAwlLnAzeTfIzhAHe%2Fy6FcbN8ZMXDwT06Oo6KIOi5WhW%2F6ieDBQ8fsnpewAliN9U0pf3s7QY%2FVC%2BD0LxTdz2cKFzkWx5rcMhqRPDyHfLYvWKyn7FHbK4FfFd68u2uOT%2FBfoLU%2FA3dUks4zWPJGR84axhma6Bfj4rpNb2SMJa97r8GOqUBTV6%2BqqYvOu%2FyoSw5qSJ%2BYpDe2vB07F721qx3RXtf20sR0NaLeKYeOfr2I0zkVgiL1I4TbWhxrwXUtnNM1oA20WgHlcCiawyl6dVfGMT31%2BE35gqpjqwBxvnPC%2FMZCS9IBfU8dbViQ1vQMByx8GyvvZKk6IvalDT17gN%2F5jLTGSd7xPPM09BHll9%2Feo4BAATfYIsd%2F1G1ZgCX87BUl4zpXpCkgkY4&X-Amz-Signature=6f89933023efe49881601a34284c983ad19a67abf73310f1bf805e5746143192&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETX274O%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCTasZsF21G0lsUmIPf4gNLxs1u%2B8Y2CrL5GUhnXqq18wIgAhhshZW366VLLqnJzmWg%2B8y3zP8p9HvcZprd1U2ofrgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPmmhkfWwTn2aE4tircAz7CTUvX15jZZZ35EkkdgeQk7oF5gIWBXthX%2BQgcfaqC5A0DoVLxGd0mJ4rYpejuFZKIMAhClGre%2F6Iry699skY241I6x%2B8JLMh%2BB52dr1oWTPv9MPbndS1gaxgfTbCRPuG5m7jjw3AkXc7iYelADusaVzln0%2BNGiYs7ADaLJcwGO%2BeCWbwNZqwOUgpaL6jZ21UNDIjNbbiKQ0bcEe%2Bf8eiVZRhZ%2BlKxb2lfzYg8kummnUUi3OlgwiAkBcUH8G0BsLfIaKezDzZE%2FvuMUWF51AaD3aOiuv89EW0kpxzQTH8PBI3It6C22MZwjfvad1eXZ5ykbRzlWVuQpYxo2v64Cxo5Cohf0st1aa0zTR%2BtTSTmf4sXEjVtiRicHmEczogLRbmwVGDp4OHGwxTP6QebcLLuwGgx99AV46lWfIOSE4vVKq7DQ6Lsh%2BX0Fvofx32l0pT7RoXTC0r6zrgVQjanVm2uAwlLnAzeTfIzhAHe%2Fy6FcbN8ZMXDwT06Oo6KIOi5WhW%2F6ieDBQ8fsnpewAliN9U0pf3s7QY%2FVC%2BD0LxTdz2cKFzkWx5rcMhqRPDyHfLYvWKyn7FHbK4FfFd68u2uOT%2FBfoLU%2FA3dUks4zWPJGR84axhma6Bfj4rpNb2SMJa97r8GOqUBTV6%2BqqYvOu%2FyoSw5qSJ%2BYpDe2vB07F721qx3RXtf20sR0NaLeKYeOfr2I0zkVgiL1I4TbWhxrwXUtnNM1oA20WgHlcCiawyl6dVfGMT31%2BE35gqpjqwBxvnPC%2FMZCS9IBfU8dbViQ1vQMByx8GyvvZKk6IvalDT17gN%2F5jLTGSd7xPPM09BHll9%2Feo4BAATfYIsd%2F1G1ZgCX87BUl4zpXpCkgkY4&X-Amz-Signature=a0e518045b0ba81fa3ef02a2daf8c3dfe6ad05f56d8859564d8a65d7c8a4550d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETX274O%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCTasZsF21G0lsUmIPf4gNLxs1u%2B8Y2CrL5GUhnXqq18wIgAhhshZW366VLLqnJzmWg%2B8y3zP8p9HvcZprd1U2ofrgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPmmhkfWwTn2aE4tircAz7CTUvX15jZZZ35EkkdgeQk7oF5gIWBXthX%2BQgcfaqC5A0DoVLxGd0mJ4rYpejuFZKIMAhClGre%2F6Iry699skY241I6x%2B8JLMh%2BB52dr1oWTPv9MPbndS1gaxgfTbCRPuG5m7jjw3AkXc7iYelADusaVzln0%2BNGiYs7ADaLJcwGO%2BeCWbwNZqwOUgpaL6jZ21UNDIjNbbiKQ0bcEe%2Bf8eiVZRhZ%2BlKxb2lfzYg8kummnUUi3OlgwiAkBcUH8G0BsLfIaKezDzZE%2FvuMUWF51AaD3aOiuv89EW0kpxzQTH8PBI3It6C22MZwjfvad1eXZ5ykbRzlWVuQpYxo2v64Cxo5Cohf0st1aa0zTR%2BtTSTmf4sXEjVtiRicHmEczogLRbmwVGDp4OHGwxTP6QebcLLuwGgx99AV46lWfIOSE4vVKq7DQ6Lsh%2BX0Fvofx32l0pT7RoXTC0r6zrgVQjanVm2uAwlLnAzeTfIzhAHe%2Fy6FcbN8ZMXDwT06Oo6KIOi5WhW%2F6ieDBQ8fsnpewAliN9U0pf3s7QY%2FVC%2BD0LxTdz2cKFzkWx5rcMhqRPDyHfLYvWKyn7FHbK4FfFd68u2uOT%2FBfoLU%2FA3dUks4zWPJGR84axhma6Bfj4rpNb2SMJa97r8GOqUBTV6%2BqqYvOu%2FyoSw5qSJ%2BYpDe2vB07F721qx3RXtf20sR0NaLeKYeOfr2I0zkVgiL1I4TbWhxrwXUtnNM1oA20WgHlcCiawyl6dVfGMT31%2BE35gqpjqwBxvnPC%2FMZCS9IBfU8dbViQ1vQMByx8GyvvZKk6IvalDT17gN%2F5jLTGSd7xPPM09BHll9%2Feo4BAATfYIsd%2F1G1ZgCX87BUl4zpXpCkgkY4&X-Amz-Signature=ecd037cbdbb33e02712ef9368da8f1c3c72c6bec23976b8d9f2a6468ae54c62f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETX274O%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCTasZsF21G0lsUmIPf4gNLxs1u%2B8Y2CrL5GUhnXqq18wIgAhhshZW366VLLqnJzmWg%2B8y3zP8p9HvcZprd1U2ofrgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPmmhkfWwTn2aE4tircAz7CTUvX15jZZZ35EkkdgeQk7oF5gIWBXthX%2BQgcfaqC5A0DoVLxGd0mJ4rYpejuFZKIMAhClGre%2F6Iry699skY241I6x%2B8JLMh%2BB52dr1oWTPv9MPbndS1gaxgfTbCRPuG5m7jjw3AkXc7iYelADusaVzln0%2BNGiYs7ADaLJcwGO%2BeCWbwNZqwOUgpaL6jZ21UNDIjNbbiKQ0bcEe%2Bf8eiVZRhZ%2BlKxb2lfzYg8kummnUUi3OlgwiAkBcUH8G0BsLfIaKezDzZE%2FvuMUWF51AaD3aOiuv89EW0kpxzQTH8PBI3It6C22MZwjfvad1eXZ5ykbRzlWVuQpYxo2v64Cxo5Cohf0st1aa0zTR%2BtTSTmf4sXEjVtiRicHmEczogLRbmwVGDp4OHGwxTP6QebcLLuwGgx99AV46lWfIOSE4vVKq7DQ6Lsh%2BX0Fvofx32l0pT7RoXTC0r6zrgVQjanVm2uAwlLnAzeTfIzhAHe%2Fy6FcbN8ZMXDwT06Oo6KIOi5WhW%2F6ieDBQ8fsnpewAliN9U0pf3s7QY%2FVC%2BD0LxTdz2cKFzkWx5rcMhqRPDyHfLYvWKyn7FHbK4FfFd68u2uOT%2FBfoLU%2FA3dUks4zWPJGR84axhma6Bfj4rpNb2SMJa97r8GOqUBTV6%2BqqYvOu%2FyoSw5qSJ%2BYpDe2vB07F721qx3RXtf20sR0NaLeKYeOfr2I0zkVgiL1I4TbWhxrwXUtnNM1oA20WgHlcCiawyl6dVfGMT31%2BE35gqpjqwBxvnPC%2FMZCS9IBfU8dbViQ1vQMByx8GyvvZKk6IvalDT17gN%2F5jLTGSd7xPPM09BHll9%2Feo4BAATfYIsd%2F1G1ZgCX87BUl4zpXpCkgkY4&X-Amz-Signature=a461d6d897fbce8aeacd3120afb56d770303a013e1042dd84caaec3c0ee3f106&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
