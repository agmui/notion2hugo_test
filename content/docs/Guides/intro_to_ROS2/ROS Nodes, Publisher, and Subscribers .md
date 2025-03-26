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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BBEZPSI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtI6kd%2B2SPeBI3oQHSS%2FdX4k6DpE2J6PvZWqR0VwiAVAiEAshh89e0DOXauhiT4z%2BqzvoMvfE7ro5%2BKwWCR54ecI8wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEjYcMc1VdV1VrBMgCrcA%2BNnYVu9PZ%2BlQNLjbNXeElScpbaXtW4jQ1jgJ581zYkcoOuk4AERlfgiMb0xUvvrghLrzE0I180sV7yAFq5GRK71czr7JBSkN4FNHCdW0WE9asf57weN8hC7IsR4EbF34hmuPj1jHQcxXY86lz4P9mP24fhs%2FhmIGAO0txBGr7ORhcT6YCFvkRowToz7A1VZGAAnzk3fbQZsfWLKST6JJfjgA7GdWUTGOTXZPnWsy5arJqnS0vspjWVG5lZIeSUDCroFC7DO9M6NX4TDTZZZZL7Ao4HLqhfRhiujvE0VM%2Btn6SPHofeRfbBXXeENM0nNTaIOCXjLqXL%2F25%2F8LuHWmBbWTbIGVWrDLO8gvf2ng3%2F03Z%2BrcXrenJYMLpphJWe6DBbBGETFpBeWZelNc3xa7Nh7SjceeFQe0ElnlhM8dh%2BreNOXtQbau6d4hOVc7KcmvuodqV1tczCToP97DC%2F0kP80MYPuP5cZvA6TfJ2M%2FJKiaC9sbN%2FDlJKatU3b22npyAv86DF1r5AreX3POaDbg6Qsq1q5qMPfAnmGcAnXgcfkzi1U%2FPPF5GyTnvJCrL%2BqawRBwkoZGkEgh3jyJvqtMjcK5CsP0dg31MJIY%2BY4oo%2FTwK%2B%2BLxhLGFQ3n8uQMP6mj78GOqUB61YS8lcGI0%2BlyXFEPjQSXUMWE5vLdaLonIKimr27nnnqKrTgidY%2Bm6q99tkjYrMRRp50VGToDype%2FJZfJLtBcwCESlDTbKg3NiiIkOoNZym1Gbq4K8lzN0FH8kmYgMe2FyVnhmIUKueN%2F4ncbgO38B%2BUrOWeSQ7VVoe1%2BNSnGQD5T%2FykmzhhT4TwvC4wYFoCpxG2%2BFUsxi7hkM0Cp4aULe0EoDpz&X-Amz-Signature=a6f2db40d1f3dfb1c6415a9205e167894697ecb6f73d0d65a503018f2417938e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BBEZPSI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtI6kd%2B2SPeBI3oQHSS%2FdX4k6DpE2J6PvZWqR0VwiAVAiEAshh89e0DOXauhiT4z%2BqzvoMvfE7ro5%2BKwWCR54ecI8wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEjYcMc1VdV1VrBMgCrcA%2BNnYVu9PZ%2BlQNLjbNXeElScpbaXtW4jQ1jgJ581zYkcoOuk4AERlfgiMb0xUvvrghLrzE0I180sV7yAFq5GRK71czr7JBSkN4FNHCdW0WE9asf57weN8hC7IsR4EbF34hmuPj1jHQcxXY86lz4P9mP24fhs%2FhmIGAO0txBGr7ORhcT6YCFvkRowToz7A1VZGAAnzk3fbQZsfWLKST6JJfjgA7GdWUTGOTXZPnWsy5arJqnS0vspjWVG5lZIeSUDCroFC7DO9M6NX4TDTZZZZL7Ao4HLqhfRhiujvE0VM%2Btn6SPHofeRfbBXXeENM0nNTaIOCXjLqXL%2F25%2F8LuHWmBbWTbIGVWrDLO8gvf2ng3%2F03Z%2BrcXrenJYMLpphJWe6DBbBGETFpBeWZelNc3xa7Nh7SjceeFQe0ElnlhM8dh%2BreNOXtQbau6d4hOVc7KcmvuodqV1tczCToP97DC%2F0kP80MYPuP5cZvA6TfJ2M%2FJKiaC9sbN%2FDlJKatU3b22npyAv86DF1r5AreX3POaDbg6Qsq1q5qMPfAnmGcAnXgcfkzi1U%2FPPF5GyTnvJCrL%2BqawRBwkoZGkEgh3jyJvqtMjcK5CsP0dg31MJIY%2BY4oo%2FTwK%2B%2BLxhLGFQ3n8uQMP6mj78GOqUB61YS8lcGI0%2BlyXFEPjQSXUMWE5vLdaLonIKimr27nnnqKrTgidY%2Bm6q99tkjYrMRRp50VGToDype%2FJZfJLtBcwCESlDTbKg3NiiIkOoNZym1Gbq4K8lzN0FH8kmYgMe2FyVnhmIUKueN%2F4ncbgO38B%2BUrOWeSQ7VVoe1%2BNSnGQD5T%2FykmzhhT4TwvC4wYFoCpxG2%2BFUsxi7hkM0Cp4aULe0EoDpz&X-Amz-Signature=0adc8883ffd527392de0a4fce5e78fdb85a3367fedcc13d5b5d8e4cb03728c28&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BBEZPSI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtI6kd%2B2SPeBI3oQHSS%2FdX4k6DpE2J6PvZWqR0VwiAVAiEAshh89e0DOXauhiT4z%2BqzvoMvfE7ro5%2BKwWCR54ecI8wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEjYcMc1VdV1VrBMgCrcA%2BNnYVu9PZ%2BlQNLjbNXeElScpbaXtW4jQ1jgJ581zYkcoOuk4AERlfgiMb0xUvvrghLrzE0I180sV7yAFq5GRK71czr7JBSkN4FNHCdW0WE9asf57weN8hC7IsR4EbF34hmuPj1jHQcxXY86lz4P9mP24fhs%2FhmIGAO0txBGr7ORhcT6YCFvkRowToz7A1VZGAAnzk3fbQZsfWLKST6JJfjgA7GdWUTGOTXZPnWsy5arJqnS0vspjWVG5lZIeSUDCroFC7DO9M6NX4TDTZZZZL7Ao4HLqhfRhiujvE0VM%2Btn6SPHofeRfbBXXeENM0nNTaIOCXjLqXL%2F25%2F8LuHWmBbWTbIGVWrDLO8gvf2ng3%2F03Z%2BrcXrenJYMLpphJWe6DBbBGETFpBeWZelNc3xa7Nh7SjceeFQe0ElnlhM8dh%2BreNOXtQbau6d4hOVc7KcmvuodqV1tczCToP97DC%2F0kP80MYPuP5cZvA6TfJ2M%2FJKiaC9sbN%2FDlJKatU3b22npyAv86DF1r5AreX3POaDbg6Qsq1q5qMPfAnmGcAnXgcfkzi1U%2FPPF5GyTnvJCrL%2BqawRBwkoZGkEgh3jyJvqtMjcK5CsP0dg31MJIY%2BY4oo%2FTwK%2B%2BLxhLGFQ3n8uQMP6mj78GOqUB61YS8lcGI0%2BlyXFEPjQSXUMWE5vLdaLonIKimr27nnnqKrTgidY%2Bm6q99tkjYrMRRp50VGToDype%2FJZfJLtBcwCESlDTbKg3NiiIkOoNZym1Gbq4K8lzN0FH8kmYgMe2FyVnhmIUKueN%2F4ncbgO38B%2BUrOWeSQ7VVoe1%2BNSnGQD5T%2FykmzhhT4TwvC4wYFoCpxG2%2BFUsxi7hkM0Cp4aULe0EoDpz&X-Amz-Signature=edcbe3d2f3c9b8945f81ad894dc3ccc39c7b6abaadb7a0c871313ae557227662&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BBEZPSI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtI6kd%2B2SPeBI3oQHSS%2FdX4k6DpE2J6PvZWqR0VwiAVAiEAshh89e0DOXauhiT4z%2BqzvoMvfE7ro5%2BKwWCR54ecI8wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEjYcMc1VdV1VrBMgCrcA%2BNnYVu9PZ%2BlQNLjbNXeElScpbaXtW4jQ1jgJ581zYkcoOuk4AERlfgiMb0xUvvrghLrzE0I180sV7yAFq5GRK71czr7JBSkN4FNHCdW0WE9asf57weN8hC7IsR4EbF34hmuPj1jHQcxXY86lz4P9mP24fhs%2FhmIGAO0txBGr7ORhcT6YCFvkRowToz7A1VZGAAnzk3fbQZsfWLKST6JJfjgA7GdWUTGOTXZPnWsy5arJqnS0vspjWVG5lZIeSUDCroFC7DO9M6NX4TDTZZZZL7Ao4HLqhfRhiujvE0VM%2Btn6SPHofeRfbBXXeENM0nNTaIOCXjLqXL%2F25%2F8LuHWmBbWTbIGVWrDLO8gvf2ng3%2F03Z%2BrcXrenJYMLpphJWe6DBbBGETFpBeWZelNc3xa7Nh7SjceeFQe0ElnlhM8dh%2BreNOXtQbau6d4hOVc7KcmvuodqV1tczCToP97DC%2F0kP80MYPuP5cZvA6TfJ2M%2FJKiaC9sbN%2FDlJKatU3b22npyAv86DF1r5AreX3POaDbg6Qsq1q5qMPfAnmGcAnXgcfkzi1U%2FPPF5GyTnvJCrL%2BqawRBwkoZGkEgh3jyJvqtMjcK5CsP0dg31MJIY%2BY4oo%2FTwK%2B%2BLxhLGFQ3n8uQMP6mj78GOqUB61YS8lcGI0%2BlyXFEPjQSXUMWE5vLdaLonIKimr27nnnqKrTgidY%2Bm6q99tkjYrMRRp50VGToDype%2FJZfJLtBcwCESlDTbKg3NiiIkOoNZym1Gbq4K8lzN0FH8kmYgMe2FyVnhmIUKueN%2F4ncbgO38B%2BUrOWeSQ7VVoe1%2BNSnGQD5T%2FykmzhhT4TwvC4wYFoCpxG2%2BFUsxi7hkM0Cp4aULe0EoDpz&X-Amz-Signature=8cf8eb77923f839dae1b8e1d76fcd06492bf6e7ea62a39816ebce52c40d3f6b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BBEZPSI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtI6kd%2B2SPeBI3oQHSS%2FdX4k6DpE2J6PvZWqR0VwiAVAiEAshh89e0DOXauhiT4z%2BqzvoMvfE7ro5%2BKwWCR54ecI8wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEjYcMc1VdV1VrBMgCrcA%2BNnYVu9PZ%2BlQNLjbNXeElScpbaXtW4jQ1jgJ581zYkcoOuk4AERlfgiMb0xUvvrghLrzE0I180sV7yAFq5GRK71czr7JBSkN4FNHCdW0WE9asf57weN8hC7IsR4EbF34hmuPj1jHQcxXY86lz4P9mP24fhs%2FhmIGAO0txBGr7ORhcT6YCFvkRowToz7A1VZGAAnzk3fbQZsfWLKST6JJfjgA7GdWUTGOTXZPnWsy5arJqnS0vspjWVG5lZIeSUDCroFC7DO9M6NX4TDTZZZZL7Ao4HLqhfRhiujvE0VM%2Btn6SPHofeRfbBXXeENM0nNTaIOCXjLqXL%2F25%2F8LuHWmBbWTbIGVWrDLO8gvf2ng3%2F03Z%2BrcXrenJYMLpphJWe6DBbBGETFpBeWZelNc3xa7Nh7SjceeFQe0ElnlhM8dh%2BreNOXtQbau6d4hOVc7KcmvuodqV1tczCToP97DC%2F0kP80MYPuP5cZvA6TfJ2M%2FJKiaC9sbN%2FDlJKatU3b22npyAv86DF1r5AreX3POaDbg6Qsq1q5qMPfAnmGcAnXgcfkzi1U%2FPPF5GyTnvJCrL%2BqawRBwkoZGkEgh3jyJvqtMjcK5CsP0dg31MJIY%2BY4oo%2FTwK%2B%2BLxhLGFQ3n8uQMP6mj78GOqUB61YS8lcGI0%2BlyXFEPjQSXUMWE5vLdaLonIKimr27nnnqKrTgidY%2Bm6q99tkjYrMRRp50VGToDype%2FJZfJLtBcwCESlDTbKg3NiiIkOoNZym1Gbq4K8lzN0FH8kmYgMe2FyVnhmIUKueN%2F4ncbgO38B%2BUrOWeSQ7VVoe1%2BNSnGQD5T%2FykmzhhT4TwvC4wYFoCpxG2%2BFUsxi7hkM0Cp4aULe0EoDpz&X-Amz-Signature=20f6d988763188d4a4d960ba96a02f77ac8375997c393f7e731f5ab003178957&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BBEZPSI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtI6kd%2B2SPeBI3oQHSS%2FdX4k6DpE2J6PvZWqR0VwiAVAiEAshh89e0DOXauhiT4z%2BqzvoMvfE7ro5%2BKwWCR54ecI8wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEjYcMc1VdV1VrBMgCrcA%2BNnYVu9PZ%2BlQNLjbNXeElScpbaXtW4jQ1jgJ581zYkcoOuk4AERlfgiMb0xUvvrghLrzE0I180sV7yAFq5GRK71czr7JBSkN4FNHCdW0WE9asf57weN8hC7IsR4EbF34hmuPj1jHQcxXY86lz4P9mP24fhs%2FhmIGAO0txBGr7ORhcT6YCFvkRowToz7A1VZGAAnzk3fbQZsfWLKST6JJfjgA7GdWUTGOTXZPnWsy5arJqnS0vspjWVG5lZIeSUDCroFC7DO9M6NX4TDTZZZZL7Ao4HLqhfRhiujvE0VM%2Btn6SPHofeRfbBXXeENM0nNTaIOCXjLqXL%2F25%2F8LuHWmBbWTbIGVWrDLO8gvf2ng3%2F03Z%2BrcXrenJYMLpphJWe6DBbBGETFpBeWZelNc3xa7Nh7SjceeFQe0ElnlhM8dh%2BreNOXtQbau6d4hOVc7KcmvuodqV1tczCToP97DC%2F0kP80MYPuP5cZvA6TfJ2M%2FJKiaC9sbN%2FDlJKatU3b22npyAv86DF1r5AreX3POaDbg6Qsq1q5qMPfAnmGcAnXgcfkzi1U%2FPPF5GyTnvJCrL%2BqawRBwkoZGkEgh3jyJvqtMjcK5CsP0dg31MJIY%2BY4oo%2FTwK%2B%2BLxhLGFQ3n8uQMP6mj78GOqUB61YS8lcGI0%2BlyXFEPjQSXUMWE5vLdaLonIKimr27nnnqKrTgidY%2Bm6q99tkjYrMRRp50VGToDype%2FJZfJLtBcwCESlDTbKg3NiiIkOoNZym1Gbq4K8lzN0FH8kmYgMe2FyVnhmIUKueN%2F4ncbgO38B%2BUrOWeSQ7VVoe1%2BNSnGQD5T%2FykmzhhT4TwvC4wYFoCpxG2%2BFUsxi7hkM0Cp4aULe0EoDpz&X-Amz-Signature=bc2a0f0439f3986f6b24ea8aa3dc4c2a56cb60805266884284969e3bfae8fb4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BBEZPSI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtI6kd%2B2SPeBI3oQHSS%2FdX4k6DpE2J6PvZWqR0VwiAVAiEAshh89e0DOXauhiT4z%2BqzvoMvfE7ro5%2BKwWCR54ecI8wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEjYcMc1VdV1VrBMgCrcA%2BNnYVu9PZ%2BlQNLjbNXeElScpbaXtW4jQ1jgJ581zYkcoOuk4AERlfgiMb0xUvvrghLrzE0I180sV7yAFq5GRK71czr7JBSkN4FNHCdW0WE9asf57weN8hC7IsR4EbF34hmuPj1jHQcxXY86lz4P9mP24fhs%2FhmIGAO0txBGr7ORhcT6YCFvkRowToz7A1VZGAAnzk3fbQZsfWLKST6JJfjgA7GdWUTGOTXZPnWsy5arJqnS0vspjWVG5lZIeSUDCroFC7DO9M6NX4TDTZZZZL7Ao4HLqhfRhiujvE0VM%2Btn6SPHofeRfbBXXeENM0nNTaIOCXjLqXL%2F25%2F8LuHWmBbWTbIGVWrDLO8gvf2ng3%2F03Z%2BrcXrenJYMLpphJWe6DBbBGETFpBeWZelNc3xa7Nh7SjceeFQe0ElnlhM8dh%2BreNOXtQbau6d4hOVc7KcmvuodqV1tczCToP97DC%2F0kP80MYPuP5cZvA6TfJ2M%2FJKiaC9sbN%2FDlJKatU3b22npyAv86DF1r5AreX3POaDbg6Qsq1q5qMPfAnmGcAnXgcfkzi1U%2FPPF5GyTnvJCrL%2BqawRBwkoZGkEgh3jyJvqtMjcK5CsP0dg31MJIY%2BY4oo%2FTwK%2B%2BLxhLGFQ3n8uQMP6mj78GOqUB61YS8lcGI0%2BlyXFEPjQSXUMWE5vLdaLonIKimr27nnnqKrTgidY%2Bm6q99tkjYrMRRp50VGToDype%2FJZfJLtBcwCESlDTbKg3NiiIkOoNZym1Gbq4K8lzN0FH8kmYgMe2FyVnhmIUKueN%2F4ncbgO38B%2BUrOWeSQ7VVoe1%2BNSnGQD5T%2FykmzhhT4TwvC4wYFoCpxG2%2BFUsxi7hkM0Cp4aULe0EoDpz&X-Amz-Signature=699e2d3f73a599d0bdfcf22ed7a4861c529e88719453e67e5447b44cedaa8a52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BBEZPSI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtI6kd%2B2SPeBI3oQHSS%2FdX4k6DpE2J6PvZWqR0VwiAVAiEAshh89e0DOXauhiT4z%2BqzvoMvfE7ro5%2BKwWCR54ecI8wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEjYcMc1VdV1VrBMgCrcA%2BNnYVu9PZ%2BlQNLjbNXeElScpbaXtW4jQ1jgJ581zYkcoOuk4AERlfgiMb0xUvvrghLrzE0I180sV7yAFq5GRK71czr7JBSkN4FNHCdW0WE9asf57weN8hC7IsR4EbF34hmuPj1jHQcxXY86lz4P9mP24fhs%2FhmIGAO0txBGr7ORhcT6YCFvkRowToz7A1VZGAAnzk3fbQZsfWLKST6JJfjgA7GdWUTGOTXZPnWsy5arJqnS0vspjWVG5lZIeSUDCroFC7DO9M6NX4TDTZZZZL7Ao4HLqhfRhiujvE0VM%2Btn6SPHofeRfbBXXeENM0nNTaIOCXjLqXL%2F25%2F8LuHWmBbWTbIGVWrDLO8gvf2ng3%2F03Z%2BrcXrenJYMLpphJWe6DBbBGETFpBeWZelNc3xa7Nh7SjceeFQe0ElnlhM8dh%2BreNOXtQbau6d4hOVc7KcmvuodqV1tczCToP97DC%2F0kP80MYPuP5cZvA6TfJ2M%2FJKiaC9sbN%2FDlJKatU3b22npyAv86DF1r5AreX3POaDbg6Qsq1q5qMPfAnmGcAnXgcfkzi1U%2FPPF5GyTnvJCrL%2BqawRBwkoZGkEgh3jyJvqtMjcK5CsP0dg31MJIY%2BY4oo%2FTwK%2B%2BLxhLGFQ3n8uQMP6mj78GOqUB61YS8lcGI0%2BlyXFEPjQSXUMWE5vLdaLonIKimr27nnnqKrTgidY%2Bm6q99tkjYrMRRp50VGToDype%2FJZfJLtBcwCESlDTbKg3NiiIkOoNZym1Gbq4K8lzN0FH8kmYgMe2FyVnhmIUKueN%2F4ncbgO38B%2BUrOWeSQ7VVoe1%2BNSnGQD5T%2FykmzhhT4TwvC4wYFoCpxG2%2BFUsxi7hkM0Cp4aULe0EoDpz&X-Amz-Signature=5244edbf1138d67e902c4780d29937a1dc5e92b132f87ad7cecf782766359838&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
