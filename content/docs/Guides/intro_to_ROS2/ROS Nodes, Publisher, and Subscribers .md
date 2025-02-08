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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NH6RPJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDkUt5aPfjjgU%2FKuJ5g6Nnuv3FGkU2dk15z0Azvm8vzJAIhAKcvL4TS%2F0QJCvVgAkVrpCEWgfWsbcDQLlwpy4s34%2BCoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDPdVoEOSydN4QPpAq3ANYBvXpmXfyrnEsBo3QDap9EdBehOQSsLyfFwxjFJVRIwZrgAGAqD2%2FremdhYujjHsgAp5rp5xVEG%2Fom5d7xCg4pq8XSZbCF%2BkMRUUPty0ZC5%2BfonN0ANUKNXQXByytgl2%2FtawmtUQs0YtoU5tgXj5BzYfW%2FKiEFRmSH0XqNH2V9e3FzkLETFCrt3zXkPzT3R1HOSe8NBeHoW2SxOC1bZ39gTgItBC%2BV1GjFItuMyoXGQjnAq4Jp4a%2FRN4uHIMakbwLYkRypX9nGdlauX5RgwMMZDbR0hZxF7HEBU2oH1u0N4V6Swhm%2BGjw%2FO14jB3cittZOk6ylCOXGrxudfKo%2B9SbuPpwoOX5erSGORQ5LkvksWb5KltziMQjG8muPwO5rJT%2BOPGpJ7ZMpSLQ%2F2GUo2MAml2Hl%2BNwJ1Bbj1DS3A3PO6v5XULAoEgECY6ssKYifq%2FLeQm7jdN9WdKz63BEOmdF%2Ft1PP5orZ3YAyraSp98kZtGiUP%2FV4Uw1g%2BtjrKNCG1CoStI%2BC%2BclyJdawGx3Fb4fyioUd5HmaZy60CbU%2BgPFqnSsL9zpvMPYC%2BrcGTxztKauI0UGJ6IeWuz%2BHh%2FUCxf4Ps%2B3Xy86o20X9TTbtN0nSbxs1wUfabl7KaZ6azCIh529BjqkAb4xY5JoyRqT8Pc1zrygs8yOnZYtMYtxJxJwvakKL6gB1jDS3%2FHRUjAyJUN%2FlqD94mAxVU%2BEjxByWtfRBVR0cItve%2FrzfqPUJIQptEtl0uqgCdrr8bpwMrloOX%2Fb2ui3Y67JPmjO7M3H6H8FdpGsqi6fZTj4icqYzNs0F3K%2FgUBoyqJCOICEXEUVMSgdCsfAIC8Vhjvkoav6QvukUXS38BqthwZz&X-Amz-Signature=2cf2ceedb18c7941c95287cf538bd2b7fd6a3d2e6e9ff178e4788c2184305a15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NH6RPJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDkUt5aPfjjgU%2FKuJ5g6Nnuv3FGkU2dk15z0Azvm8vzJAIhAKcvL4TS%2F0QJCvVgAkVrpCEWgfWsbcDQLlwpy4s34%2BCoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDPdVoEOSydN4QPpAq3ANYBvXpmXfyrnEsBo3QDap9EdBehOQSsLyfFwxjFJVRIwZrgAGAqD2%2FremdhYujjHsgAp5rp5xVEG%2Fom5d7xCg4pq8XSZbCF%2BkMRUUPty0ZC5%2BfonN0ANUKNXQXByytgl2%2FtawmtUQs0YtoU5tgXj5BzYfW%2FKiEFRmSH0XqNH2V9e3FzkLETFCrt3zXkPzT3R1HOSe8NBeHoW2SxOC1bZ39gTgItBC%2BV1GjFItuMyoXGQjnAq4Jp4a%2FRN4uHIMakbwLYkRypX9nGdlauX5RgwMMZDbR0hZxF7HEBU2oH1u0N4V6Swhm%2BGjw%2FO14jB3cittZOk6ylCOXGrxudfKo%2B9SbuPpwoOX5erSGORQ5LkvksWb5KltziMQjG8muPwO5rJT%2BOPGpJ7ZMpSLQ%2F2GUo2MAml2Hl%2BNwJ1Bbj1DS3A3PO6v5XULAoEgECY6ssKYifq%2FLeQm7jdN9WdKz63BEOmdF%2Ft1PP5orZ3YAyraSp98kZtGiUP%2FV4Uw1g%2BtjrKNCG1CoStI%2BC%2BclyJdawGx3Fb4fyioUd5HmaZy60CbU%2BgPFqnSsL9zpvMPYC%2BrcGTxztKauI0UGJ6IeWuz%2BHh%2FUCxf4Ps%2B3Xy86o20X9TTbtN0nSbxs1wUfabl7KaZ6azCIh529BjqkAb4xY5JoyRqT8Pc1zrygs8yOnZYtMYtxJxJwvakKL6gB1jDS3%2FHRUjAyJUN%2FlqD94mAxVU%2BEjxByWtfRBVR0cItve%2FrzfqPUJIQptEtl0uqgCdrr8bpwMrloOX%2Fb2ui3Y67JPmjO7M3H6H8FdpGsqi6fZTj4icqYzNs0F3K%2FgUBoyqJCOICEXEUVMSgdCsfAIC8Vhjvkoav6QvukUXS38BqthwZz&X-Amz-Signature=3b368dca83af2e37ec988df520dc2ce61ec314ad9c7612339419f767e935d9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NH6RPJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDkUt5aPfjjgU%2FKuJ5g6Nnuv3FGkU2dk15z0Azvm8vzJAIhAKcvL4TS%2F0QJCvVgAkVrpCEWgfWsbcDQLlwpy4s34%2BCoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDPdVoEOSydN4QPpAq3ANYBvXpmXfyrnEsBo3QDap9EdBehOQSsLyfFwxjFJVRIwZrgAGAqD2%2FremdhYujjHsgAp5rp5xVEG%2Fom5d7xCg4pq8XSZbCF%2BkMRUUPty0ZC5%2BfonN0ANUKNXQXByytgl2%2FtawmtUQs0YtoU5tgXj5BzYfW%2FKiEFRmSH0XqNH2V9e3FzkLETFCrt3zXkPzT3R1HOSe8NBeHoW2SxOC1bZ39gTgItBC%2BV1GjFItuMyoXGQjnAq4Jp4a%2FRN4uHIMakbwLYkRypX9nGdlauX5RgwMMZDbR0hZxF7HEBU2oH1u0N4V6Swhm%2BGjw%2FO14jB3cittZOk6ylCOXGrxudfKo%2B9SbuPpwoOX5erSGORQ5LkvksWb5KltziMQjG8muPwO5rJT%2BOPGpJ7ZMpSLQ%2F2GUo2MAml2Hl%2BNwJ1Bbj1DS3A3PO6v5XULAoEgECY6ssKYifq%2FLeQm7jdN9WdKz63BEOmdF%2Ft1PP5orZ3YAyraSp98kZtGiUP%2FV4Uw1g%2BtjrKNCG1CoStI%2BC%2BclyJdawGx3Fb4fyioUd5HmaZy60CbU%2BgPFqnSsL9zpvMPYC%2BrcGTxztKauI0UGJ6IeWuz%2BHh%2FUCxf4Ps%2B3Xy86o20X9TTbtN0nSbxs1wUfabl7KaZ6azCIh529BjqkAb4xY5JoyRqT8Pc1zrygs8yOnZYtMYtxJxJwvakKL6gB1jDS3%2FHRUjAyJUN%2FlqD94mAxVU%2BEjxByWtfRBVR0cItve%2FrzfqPUJIQptEtl0uqgCdrr8bpwMrloOX%2Fb2ui3Y67JPmjO7M3H6H8FdpGsqi6fZTj4icqYzNs0F3K%2FgUBoyqJCOICEXEUVMSgdCsfAIC8Vhjvkoav6QvukUXS38BqthwZz&X-Amz-Signature=8fc1e2be1ddc9a5822e0039e2e5ed7137f0b0f5e4e4a07ca9c68638b109d2492&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NH6RPJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDkUt5aPfjjgU%2FKuJ5g6Nnuv3FGkU2dk15z0Azvm8vzJAIhAKcvL4TS%2F0QJCvVgAkVrpCEWgfWsbcDQLlwpy4s34%2BCoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDPdVoEOSydN4QPpAq3ANYBvXpmXfyrnEsBo3QDap9EdBehOQSsLyfFwxjFJVRIwZrgAGAqD2%2FremdhYujjHsgAp5rp5xVEG%2Fom5d7xCg4pq8XSZbCF%2BkMRUUPty0ZC5%2BfonN0ANUKNXQXByytgl2%2FtawmtUQs0YtoU5tgXj5BzYfW%2FKiEFRmSH0XqNH2V9e3FzkLETFCrt3zXkPzT3R1HOSe8NBeHoW2SxOC1bZ39gTgItBC%2BV1GjFItuMyoXGQjnAq4Jp4a%2FRN4uHIMakbwLYkRypX9nGdlauX5RgwMMZDbR0hZxF7HEBU2oH1u0N4V6Swhm%2BGjw%2FO14jB3cittZOk6ylCOXGrxudfKo%2B9SbuPpwoOX5erSGORQ5LkvksWb5KltziMQjG8muPwO5rJT%2BOPGpJ7ZMpSLQ%2F2GUo2MAml2Hl%2BNwJ1Bbj1DS3A3PO6v5XULAoEgECY6ssKYifq%2FLeQm7jdN9WdKz63BEOmdF%2Ft1PP5orZ3YAyraSp98kZtGiUP%2FV4Uw1g%2BtjrKNCG1CoStI%2BC%2BclyJdawGx3Fb4fyioUd5HmaZy60CbU%2BgPFqnSsL9zpvMPYC%2BrcGTxztKauI0UGJ6IeWuz%2BHh%2FUCxf4Ps%2B3Xy86o20X9TTbtN0nSbxs1wUfabl7KaZ6azCIh529BjqkAb4xY5JoyRqT8Pc1zrygs8yOnZYtMYtxJxJwvakKL6gB1jDS3%2FHRUjAyJUN%2FlqD94mAxVU%2BEjxByWtfRBVR0cItve%2FrzfqPUJIQptEtl0uqgCdrr8bpwMrloOX%2Fb2ui3Y67JPmjO7M3H6H8FdpGsqi6fZTj4icqYzNs0F3K%2FgUBoyqJCOICEXEUVMSgdCsfAIC8Vhjvkoav6QvukUXS38BqthwZz&X-Amz-Signature=31ae4e5b71977ce5bf7cdb1d7032f98898dd35fde5a88a9c5d73e0c02ab4e953&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NH6RPJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDkUt5aPfjjgU%2FKuJ5g6Nnuv3FGkU2dk15z0Azvm8vzJAIhAKcvL4TS%2F0QJCvVgAkVrpCEWgfWsbcDQLlwpy4s34%2BCoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDPdVoEOSydN4QPpAq3ANYBvXpmXfyrnEsBo3QDap9EdBehOQSsLyfFwxjFJVRIwZrgAGAqD2%2FremdhYujjHsgAp5rp5xVEG%2Fom5d7xCg4pq8XSZbCF%2BkMRUUPty0ZC5%2BfonN0ANUKNXQXByytgl2%2FtawmtUQs0YtoU5tgXj5BzYfW%2FKiEFRmSH0XqNH2V9e3FzkLETFCrt3zXkPzT3R1HOSe8NBeHoW2SxOC1bZ39gTgItBC%2BV1GjFItuMyoXGQjnAq4Jp4a%2FRN4uHIMakbwLYkRypX9nGdlauX5RgwMMZDbR0hZxF7HEBU2oH1u0N4V6Swhm%2BGjw%2FO14jB3cittZOk6ylCOXGrxudfKo%2B9SbuPpwoOX5erSGORQ5LkvksWb5KltziMQjG8muPwO5rJT%2BOPGpJ7ZMpSLQ%2F2GUo2MAml2Hl%2BNwJ1Bbj1DS3A3PO6v5XULAoEgECY6ssKYifq%2FLeQm7jdN9WdKz63BEOmdF%2Ft1PP5orZ3YAyraSp98kZtGiUP%2FV4Uw1g%2BtjrKNCG1CoStI%2BC%2BclyJdawGx3Fb4fyioUd5HmaZy60CbU%2BgPFqnSsL9zpvMPYC%2BrcGTxztKauI0UGJ6IeWuz%2BHh%2FUCxf4Ps%2B3Xy86o20X9TTbtN0nSbxs1wUfabl7KaZ6azCIh529BjqkAb4xY5JoyRqT8Pc1zrygs8yOnZYtMYtxJxJwvakKL6gB1jDS3%2FHRUjAyJUN%2FlqD94mAxVU%2BEjxByWtfRBVR0cItve%2FrzfqPUJIQptEtl0uqgCdrr8bpwMrloOX%2Fb2ui3Y67JPmjO7M3H6H8FdpGsqi6fZTj4icqYzNs0F3K%2FgUBoyqJCOICEXEUVMSgdCsfAIC8Vhjvkoav6QvukUXS38BqthwZz&X-Amz-Signature=dfa99f69d5279d4ed656f63930ec7361a40eda537915036ac13705189d8b918f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NH6RPJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDkUt5aPfjjgU%2FKuJ5g6Nnuv3FGkU2dk15z0Azvm8vzJAIhAKcvL4TS%2F0QJCvVgAkVrpCEWgfWsbcDQLlwpy4s34%2BCoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDPdVoEOSydN4QPpAq3ANYBvXpmXfyrnEsBo3QDap9EdBehOQSsLyfFwxjFJVRIwZrgAGAqD2%2FremdhYujjHsgAp5rp5xVEG%2Fom5d7xCg4pq8XSZbCF%2BkMRUUPty0ZC5%2BfonN0ANUKNXQXByytgl2%2FtawmtUQs0YtoU5tgXj5BzYfW%2FKiEFRmSH0XqNH2V9e3FzkLETFCrt3zXkPzT3R1HOSe8NBeHoW2SxOC1bZ39gTgItBC%2BV1GjFItuMyoXGQjnAq4Jp4a%2FRN4uHIMakbwLYkRypX9nGdlauX5RgwMMZDbR0hZxF7HEBU2oH1u0N4V6Swhm%2BGjw%2FO14jB3cittZOk6ylCOXGrxudfKo%2B9SbuPpwoOX5erSGORQ5LkvksWb5KltziMQjG8muPwO5rJT%2BOPGpJ7ZMpSLQ%2F2GUo2MAml2Hl%2BNwJ1Bbj1DS3A3PO6v5XULAoEgECY6ssKYifq%2FLeQm7jdN9WdKz63BEOmdF%2Ft1PP5orZ3YAyraSp98kZtGiUP%2FV4Uw1g%2BtjrKNCG1CoStI%2BC%2BclyJdawGx3Fb4fyioUd5HmaZy60CbU%2BgPFqnSsL9zpvMPYC%2BrcGTxztKauI0UGJ6IeWuz%2BHh%2FUCxf4Ps%2B3Xy86o20X9TTbtN0nSbxs1wUfabl7KaZ6azCIh529BjqkAb4xY5JoyRqT8Pc1zrygs8yOnZYtMYtxJxJwvakKL6gB1jDS3%2FHRUjAyJUN%2FlqD94mAxVU%2BEjxByWtfRBVR0cItve%2FrzfqPUJIQptEtl0uqgCdrr8bpwMrloOX%2Fb2ui3Y67JPmjO7M3H6H8FdpGsqi6fZTj4icqYzNs0F3K%2FgUBoyqJCOICEXEUVMSgdCsfAIC8Vhjvkoav6QvukUXS38BqthwZz&X-Amz-Signature=91584f369b8a7a68f6bd4213c7dd001d1c73556c8c16956339152ac8f0e9e7b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NH6RPJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDkUt5aPfjjgU%2FKuJ5g6Nnuv3FGkU2dk15z0Azvm8vzJAIhAKcvL4TS%2F0QJCvVgAkVrpCEWgfWsbcDQLlwpy4s34%2BCoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDPdVoEOSydN4QPpAq3ANYBvXpmXfyrnEsBo3QDap9EdBehOQSsLyfFwxjFJVRIwZrgAGAqD2%2FremdhYujjHsgAp5rp5xVEG%2Fom5d7xCg4pq8XSZbCF%2BkMRUUPty0ZC5%2BfonN0ANUKNXQXByytgl2%2FtawmtUQs0YtoU5tgXj5BzYfW%2FKiEFRmSH0XqNH2V9e3FzkLETFCrt3zXkPzT3R1HOSe8NBeHoW2SxOC1bZ39gTgItBC%2BV1GjFItuMyoXGQjnAq4Jp4a%2FRN4uHIMakbwLYkRypX9nGdlauX5RgwMMZDbR0hZxF7HEBU2oH1u0N4V6Swhm%2BGjw%2FO14jB3cittZOk6ylCOXGrxudfKo%2B9SbuPpwoOX5erSGORQ5LkvksWb5KltziMQjG8muPwO5rJT%2BOPGpJ7ZMpSLQ%2F2GUo2MAml2Hl%2BNwJ1Bbj1DS3A3PO6v5XULAoEgECY6ssKYifq%2FLeQm7jdN9WdKz63BEOmdF%2Ft1PP5orZ3YAyraSp98kZtGiUP%2FV4Uw1g%2BtjrKNCG1CoStI%2BC%2BclyJdawGx3Fb4fyioUd5HmaZy60CbU%2BgPFqnSsL9zpvMPYC%2BrcGTxztKauI0UGJ6IeWuz%2BHh%2FUCxf4Ps%2B3Xy86o20X9TTbtN0nSbxs1wUfabl7KaZ6azCIh529BjqkAb4xY5JoyRqT8Pc1zrygs8yOnZYtMYtxJxJwvakKL6gB1jDS3%2FHRUjAyJUN%2FlqD94mAxVU%2BEjxByWtfRBVR0cItve%2FrzfqPUJIQptEtl0uqgCdrr8bpwMrloOX%2Fb2ui3Y67JPmjO7M3H6H8FdpGsqi6fZTj4icqYzNs0F3K%2FgUBoyqJCOICEXEUVMSgdCsfAIC8Vhjvkoav6QvukUXS38BqthwZz&X-Amz-Signature=5c97220d5eeba155fa11a7d17b6cbe9b022c145c4500460a0780f12fd75175c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NH6RPJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDkUt5aPfjjgU%2FKuJ5g6Nnuv3FGkU2dk15z0Azvm8vzJAIhAKcvL4TS%2F0QJCvVgAkVrpCEWgfWsbcDQLlwpy4s34%2BCoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDPdVoEOSydN4QPpAq3ANYBvXpmXfyrnEsBo3QDap9EdBehOQSsLyfFwxjFJVRIwZrgAGAqD2%2FremdhYujjHsgAp5rp5xVEG%2Fom5d7xCg4pq8XSZbCF%2BkMRUUPty0ZC5%2BfonN0ANUKNXQXByytgl2%2FtawmtUQs0YtoU5tgXj5BzYfW%2FKiEFRmSH0XqNH2V9e3FzkLETFCrt3zXkPzT3R1HOSe8NBeHoW2SxOC1bZ39gTgItBC%2BV1GjFItuMyoXGQjnAq4Jp4a%2FRN4uHIMakbwLYkRypX9nGdlauX5RgwMMZDbR0hZxF7HEBU2oH1u0N4V6Swhm%2BGjw%2FO14jB3cittZOk6ylCOXGrxudfKo%2B9SbuPpwoOX5erSGORQ5LkvksWb5KltziMQjG8muPwO5rJT%2BOPGpJ7ZMpSLQ%2F2GUo2MAml2Hl%2BNwJ1Bbj1DS3A3PO6v5XULAoEgECY6ssKYifq%2FLeQm7jdN9WdKz63BEOmdF%2Ft1PP5orZ3YAyraSp98kZtGiUP%2FV4Uw1g%2BtjrKNCG1CoStI%2BC%2BclyJdawGx3Fb4fyioUd5HmaZy60CbU%2BgPFqnSsL9zpvMPYC%2BrcGTxztKauI0UGJ6IeWuz%2BHh%2FUCxf4Ps%2B3Xy86o20X9TTbtN0nSbxs1wUfabl7KaZ6azCIh529BjqkAb4xY5JoyRqT8Pc1zrygs8yOnZYtMYtxJxJwvakKL6gB1jDS3%2FHRUjAyJUN%2FlqD94mAxVU%2BEjxByWtfRBVR0cItve%2FrzfqPUJIQptEtl0uqgCdrr8bpwMrloOX%2Fb2ui3Y67JPmjO7M3H6H8FdpGsqi6fZTj4icqYzNs0F3K%2FgUBoyqJCOICEXEUVMSgdCsfAIC8Vhjvkoav6QvukUXS38BqthwZz&X-Amz-Signature=a40136963463444b310a76a2f39275274ca4f2aa1a9a88dc5b3bdb88f132d02d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
