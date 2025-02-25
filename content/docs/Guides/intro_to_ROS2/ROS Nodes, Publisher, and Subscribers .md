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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZ6WY7E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICshFhH2EOQV0qjZbTPV6M3sJU3%2BZcE%2F8DLFzQ9yDIgKAiEA7JsdRiVtR%2Bt73JHsinzKMGvizUkWB%2BNKVzLiOCu%2F%2Fp0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDIuXNgAeWlhPCjlKjircA3lCdFC6MkdZHhj3myF3bi2%2Bx2yklsoXD3X%2Bx%2FwMC78fH7BTJjtr2LwvbJigSxLvgdhJ8DvfR8TdXjCqYQF9MeiMJKkEE7bskq0cDt77d%2FbCk8SRZ8r4j5z51lAT%2BnpgUMc6KVGM6i%2BB00bImPQPqpREtH8A9PoAq9jX8OrpXM%2BISZy6Kibd%2BM9zQiQJAtuLSSb8y2UK2rFwGNzbJDExa6bFwijG3ITPXCdVTY4Jmc2fSca%2FoopMn4tAN1z4FlTi0KjXyiSJ9ZPCKYGbKb%2FVIPxde%2FcCHg7pdS5jOvCqOd5baqOJ71v3ttXq6EQL56qsfj%2FINW2K028oJc0xGLrhulyxX6URQZT692SrmhrZf0R4haNXsoRUuwkCg7YzK7RsbtlH%2BxriyJOpV2lEbo4vZsimpXTOPYYYs4CUys1YjrmXVqxdVAeKKnUVTPblwcsmPhO%2FHLpopMqwvam9AAsYQDymZyA1Vs8yIoPlIIq0FC5NLW%2FmwGqMSIi9N8goFcxP7OJr%2FCeXev94lArozXHySJ9kWHYyLfcDS3mwg3oDy3kREY%2B%2BW3Kyv9p3I9E3687O4YsKbIwehFy91sdsSfOXof%2F902iPy4SvkBI%2BTui4PF6VbZfAhmpbTE4VdyeDMITI%2BL0GOqUBOaVrGZc%2B0YJgFBjCCqVvnHnGR5%2BksjTzlOHki60DdFDXeW4Tw%2BKgUqAlSnq3PEocAIf1Hoz3rDfmu8eNZsH26%2F5knfyETSyFeBAMfwGmfPdHGRDqjW7mRHyWbL%2BI%2FDFyUy4SBEszkgpE%2FV3S0tb4JelQKuswEM6nGrQ3mUtgoyGqUw4GzyRs0p4tYfaGJym1bxPzb6AA1o2%2FpEfq8rk%2BUTd7HXV9&X-Amz-Signature=778614cfb32ca476865f1f070c0c8d35377b331b19f1e20edbd2cc29bff60a09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZ6WY7E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICshFhH2EOQV0qjZbTPV6M3sJU3%2BZcE%2F8DLFzQ9yDIgKAiEA7JsdRiVtR%2Bt73JHsinzKMGvizUkWB%2BNKVzLiOCu%2F%2Fp0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDIuXNgAeWlhPCjlKjircA3lCdFC6MkdZHhj3myF3bi2%2Bx2yklsoXD3X%2Bx%2FwMC78fH7BTJjtr2LwvbJigSxLvgdhJ8DvfR8TdXjCqYQF9MeiMJKkEE7bskq0cDt77d%2FbCk8SRZ8r4j5z51lAT%2BnpgUMc6KVGM6i%2BB00bImPQPqpREtH8A9PoAq9jX8OrpXM%2BISZy6Kibd%2BM9zQiQJAtuLSSb8y2UK2rFwGNzbJDExa6bFwijG3ITPXCdVTY4Jmc2fSca%2FoopMn4tAN1z4FlTi0KjXyiSJ9ZPCKYGbKb%2FVIPxde%2FcCHg7pdS5jOvCqOd5baqOJ71v3ttXq6EQL56qsfj%2FINW2K028oJc0xGLrhulyxX6URQZT692SrmhrZf0R4haNXsoRUuwkCg7YzK7RsbtlH%2BxriyJOpV2lEbo4vZsimpXTOPYYYs4CUys1YjrmXVqxdVAeKKnUVTPblwcsmPhO%2FHLpopMqwvam9AAsYQDymZyA1Vs8yIoPlIIq0FC5NLW%2FmwGqMSIi9N8goFcxP7OJr%2FCeXev94lArozXHySJ9kWHYyLfcDS3mwg3oDy3kREY%2B%2BW3Kyv9p3I9E3687O4YsKbIwehFy91sdsSfOXof%2F902iPy4SvkBI%2BTui4PF6VbZfAhmpbTE4VdyeDMITI%2BL0GOqUBOaVrGZc%2B0YJgFBjCCqVvnHnGR5%2BksjTzlOHki60DdFDXeW4Tw%2BKgUqAlSnq3PEocAIf1Hoz3rDfmu8eNZsH26%2F5knfyETSyFeBAMfwGmfPdHGRDqjW7mRHyWbL%2BI%2FDFyUy4SBEszkgpE%2FV3S0tb4JelQKuswEM6nGrQ3mUtgoyGqUw4GzyRs0p4tYfaGJym1bxPzb6AA1o2%2FpEfq8rk%2BUTd7HXV9&X-Amz-Signature=4ad33c3f56b66da3f729d17efe873a4a8e25943f420aead5f1090ac9a6be0009&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZ6WY7E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICshFhH2EOQV0qjZbTPV6M3sJU3%2BZcE%2F8DLFzQ9yDIgKAiEA7JsdRiVtR%2Bt73JHsinzKMGvizUkWB%2BNKVzLiOCu%2F%2Fp0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDIuXNgAeWlhPCjlKjircA3lCdFC6MkdZHhj3myF3bi2%2Bx2yklsoXD3X%2Bx%2FwMC78fH7BTJjtr2LwvbJigSxLvgdhJ8DvfR8TdXjCqYQF9MeiMJKkEE7bskq0cDt77d%2FbCk8SRZ8r4j5z51lAT%2BnpgUMc6KVGM6i%2BB00bImPQPqpREtH8A9PoAq9jX8OrpXM%2BISZy6Kibd%2BM9zQiQJAtuLSSb8y2UK2rFwGNzbJDExa6bFwijG3ITPXCdVTY4Jmc2fSca%2FoopMn4tAN1z4FlTi0KjXyiSJ9ZPCKYGbKb%2FVIPxde%2FcCHg7pdS5jOvCqOd5baqOJ71v3ttXq6EQL56qsfj%2FINW2K028oJc0xGLrhulyxX6URQZT692SrmhrZf0R4haNXsoRUuwkCg7YzK7RsbtlH%2BxriyJOpV2lEbo4vZsimpXTOPYYYs4CUys1YjrmXVqxdVAeKKnUVTPblwcsmPhO%2FHLpopMqwvam9AAsYQDymZyA1Vs8yIoPlIIq0FC5NLW%2FmwGqMSIi9N8goFcxP7OJr%2FCeXev94lArozXHySJ9kWHYyLfcDS3mwg3oDy3kREY%2B%2BW3Kyv9p3I9E3687O4YsKbIwehFy91sdsSfOXof%2F902iPy4SvkBI%2BTui4PF6VbZfAhmpbTE4VdyeDMITI%2BL0GOqUBOaVrGZc%2B0YJgFBjCCqVvnHnGR5%2BksjTzlOHki60DdFDXeW4Tw%2BKgUqAlSnq3PEocAIf1Hoz3rDfmu8eNZsH26%2F5knfyETSyFeBAMfwGmfPdHGRDqjW7mRHyWbL%2BI%2FDFyUy4SBEszkgpE%2FV3S0tb4JelQKuswEM6nGrQ3mUtgoyGqUw4GzyRs0p4tYfaGJym1bxPzb6AA1o2%2FpEfq8rk%2BUTd7HXV9&X-Amz-Signature=621cd47b9da238b3f5daad45384cb43e49bd62e71bcfedc5d6633e801c839a74&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZ6WY7E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICshFhH2EOQV0qjZbTPV6M3sJU3%2BZcE%2F8DLFzQ9yDIgKAiEA7JsdRiVtR%2Bt73JHsinzKMGvizUkWB%2BNKVzLiOCu%2F%2Fp0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDIuXNgAeWlhPCjlKjircA3lCdFC6MkdZHhj3myF3bi2%2Bx2yklsoXD3X%2Bx%2FwMC78fH7BTJjtr2LwvbJigSxLvgdhJ8DvfR8TdXjCqYQF9MeiMJKkEE7bskq0cDt77d%2FbCk8SRZ8r4j5z51lAT%2BnpgUMc6KVGM6i%2BB00bImPQPqpREtH8A9PoAq9jX8OrpXM%2BISZy6Kibd%2BM9zQiQJAtuLSSb8y2UK2rFwGNzbJDExa6bFwijG3ITPXCdVTY4Jmc2fSca%2FoopMn4tAN1z4FlTi0KjXyiSJ9ZPCKYGbKb%2FVIPxde%2FcCHg7pdS5jOvCqOd5baqOJ71v3ttXq6EQL56qsfj%2FINW2K028oJc0xGLrhulyxX6URQZT692SrmhrZf0R4haNXsoRUuwkCg7YzK7RsbtlH%2BxriyJOpV2lEbo4vZsimpXTOPYYYs4CUys1YjrmXVqxdVAeKKnUVTPblwcsmPhO%2FHLpopMqwvam9AAsYQDymZyA1Vs8yIoPlIIq0FC5NLW%2FmwGqMSIi9N8goFcxP7OJr%2FCeXev94lArozXHySJ9kWHYyLfcDS3mwg3oDy3kREY%2B%2BW3Kyv9p3I9E3687O4YsKbIwehFy91sdsSfOXof%2F902iPy4SvkBI%2BTui4PF6VbZfAhmpbTE4VdyeDMITI%2BL0GOqUBOaVrGZc%2B0YJgFBjCCqVvnHnGR5%2BksjTzlOHki60DdFDXeW4Tw%2BKgUqAlSnq3PEocAIf1Hoz3rDfmu8eNZsH26%2F5knfyETSyFeBAMfwGmfPdHGRDqjW7mRHyWbL%2BI%2FDFyUy4SBEszkgpE%2FV3S0tb4JelQKuswEM6nGrQ3mUtgoyGqUw4GzyRs0p4tYfaGJym1bxPzb6AA1o2%2FpEfq8rk%2BUTd7HXV9&X-Amz-Signature=640fa289173865fe8d90b571a5ef419185f64ab492c05ba6c8cde440562f4b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZ6WY7E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICshFhH2EOQV0qjZbTPV6M3sJU3%2BZcE%2F8DLFzQ9yDIgKAiEA7JsdRiVtR%2Bt73JHsinzKMGvizUkWB%2BNKVzLiOCu%2F%2Fp0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDIuXNgAeWlhPCjlKjircA3lCdFC6MkdZHhj3myF3bi2%2Bx2yklsoXD3X%2Bx%2FwMC78fH7BTJjtr2LwvbJigSxLvgdhJ8DvfR8TdXjCqYQF9MeiMJKkEE7bskq0cDt77d%2FbCk8SRZ8r4j5z51lAT%2BnpgUMc6KVGM6i%2BB00bImPQPqpREtH8A9PoAq9jX8OrpXM%2BISZy6Kibd%2BM9zQiQJAtuLSSb8y2UK2rFwGNzbJDExa6bFwijG3ITPXCdVTY4Jmc2fSca%2FoopMn4tAN1z4FlTi0KjXyiSJ9ZPCKYGbKb%2FVIPxde%2FcCHg7pdS5jOvCqOd5baqOJ71v3ttXq6EQL56qsfj%2FINW2K028oJc0xGLrhulyxX6URQZT692SrmhrZf0R4haNXsoRUuwkCg7YzK7RsbtlH%2BxriyJOpV2lEbo4vZsimpXTOPYYYs4CUys1YjrmXVqxdVAeKKnUVTPblwcsmPhO%2FHLpopMqwvam9AAsYQDymZyA1Vs8yIoPlIIq0FC5NLW%2FmwGqMSIi9N8goFcxP7OJr%2FCeXev94lArozXHySJ9kWHYyLfcDS3mwg3oDy3kREY%2B%2BW3Kyv9p3I9E3687O4YsKbIwehFy91sdsSfOXof%2F902iPy4SvkBI%2BTui4PF6VbZfAhmpbTE4VdyeDMITI%2BL0GOqUBOaVrGZc%2B0YJgFBjCCqVvnHnGR5%2BksjTzlOHki60DdFDXeW4Tw%2BKgUqAlSnq3PEocAIf1Hoz3rDfmu8eNZsH26%2F5knfyETSyFeBAMfwGmfPdHGRDqjW7mRHyWbL%2BI%2FDFyUy4SBEszkgpE%2FV3S0tb4JelQKuswEM6nGrQ3mUtgoyGqUw4GzyRs0p4tYfaGJym1bxPzb6AA1o2%2FpEfq8rk%2BUTd7HXV9&X-Amz-Signature=773d0ceb5f5c4150a177515715422c711d6f9f8d09eb57dae8e1589ec2be7a49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZ6WY7E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICshFhH2EOQV0qjZbTPV6M3sJU3%2BZcE%2F8DLFzQ9yDIgKAiEA7JsdRiVtR%2Bt73JHsinzKMGvizUkWB%2BNKVzLiOCu%2F%2Fp0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDIuXNgAeWlhPCjlKjircA3lCdFC6MkdZHhj3myF3bi2%2Bx2yklsoXD3X%2Bx%2FwMC78fH7BTJjtr2LwvbJigSxLvgdhJ8DvfR8TdXjCqYQF9MeiMJKkEE7bskq0cDt77d%2FbCk8SRZ8r4j5z51lAT%2BnpgUMc6KVGM6i%2BB00bImPQPqpREtH8A9PoAq9jX8OrpXM%2BISZy6Kibd%2BM9zQiQJAtuLSSb8y2UK2rFwGNzbJDExa6bFwijG3ITPXCdVTY4Jmc2fSca%2FoopMn4tAN1z4FlTi0KjXyiSJ9ZPCKYGbKb%2FVIPxde%2FcCHg7pdS5jOvCqOd5baqOJ71v3ttXq6EQL56qsfj%2FINW2K028oJc0xGLrhulyxX6URQZT692SrmhrZf0R4haNXsoRUuwkCg7YzK7RsbtlH%2BxriyJOpV2lEbo4vZsimpXTOPYYYs4CUys1YjrmXVqxdVAeKKnUVTPblwcsmPhO%2FHLpopMqwvam9AAsYQDymZyA1Vs8yIoPlIIq0FC5NLW%2FmwGqMSIi9N8goFcxP7OJr%2FCeXev94lArozXHySJ9kWHYyLfcDS3mwg3oDy3kREY%2B%2BW3Kyv9p3I9E3687O4YsKbIwehFy91sdsSfOXof%2F902iPy4SvkBI%2BTui4PF6VbZfAhmpbTE4VdyeDMITI%2BL0GOqUBOaVrGZc%2B0YJgFBjCCqVvnHnGR5%2BksjTzlOHki60DdFDXeW4Tw%2BKgUqAlSnq3PEocAIf1Hoz3rDfmu8eNZsH26%2F5knfyETSyFeBAMfwGmfPdHGRDqjW7mRHyWbL%2BI%2FDFyUy4SBEszkgpE%2FV3S0tb4JelQKuswEM6nGrQ3mUtgoyGqUw4GzyRs0p4tYfaGJym1bxPzb6AA1o2%2FpEfq8rk%2BUTd7HXV9&X-Amz-Signature=29cb650d214045befe1b974f419577bfdd4acb90d3e306bd0f343b2979eaf834&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZ6WY7E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICshFhH2EOQV0qjZbTPV6M3sJU3%2BZcE%2F8DLFzQ9yDIgKAiEA7JsdRiVtR%2Bt73JHsinzKMGvizUkWB%2BNKVzLiOCu%2F%2Fp0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDIuXNgAeWlhPCjlKjircA3lCdFC6MkdZHhj3myF3bi2%2Bx2yklsoXD3X%2Bx%2FwMC78fH7BTJjtr2LwvbJigSxLvgdhJ8DvfR8TdXjCqYQF9MeiMJKkEE7bskq0cDt77d%2FbCk8SRZ8r4j5z51lAT%2BnpgUMc6KVGM6i%2BB00bImPQPqpREtH8A9PoAq9jX8OrpXM%2BISZy6Kibd%2BM9zQiQJAtuLSSb8y2UK2rFwGNzbJDExa6bFwijG3ITPXCdVTY4Jmc2fSca%2FoopMn4tAN1z4FlTi0KjXyiSJ9ZPCKYGbKb%2FVIPxde%2FcCHg7pdS5jOvCqOd5baqOJ71v3ttXq6EQL56qsfj%2FINW2K028oJc0xGLrhulyxX6URQZT692SrmhrZf0R4haNXsoRUuwkCg7YzK7RsbtlH%2BxriyJOpV2lEbo4vZsimpXTOPYYYs4CUys1YjrmXVqxdVAeKKnUVTPblwcsmPhO%2FHLpopMqwvam9AAsYQDymZyA1Vs8yIoPlIIq0FC5NLW%2FmwGqMSIi9N8goFcxP7OJr%2FCeXev94lArozXHySJ9kWHYyLfcDS3mwg3oDy3kREY%2B%2BW3Kyv9p3I9E3687O4YsKbIwehFy91sdsSfOXof%2F902iPy4SvkBI%2BTui4PF6VbZfAhmpbTE4VdyeDMITI%2BL0GOqUBOaVrGZc%2B0YJgFBjCCqVvnHnGR5%2BksjTzlOHki60DdFDXeW4Tw%2BKgUqAlSnq3PEocAIf1Hoz3rDfmu8eNZsH26%2F5knfyETSyFeBAMfwGmfPdHGRDqjW7mRHyWbL%2BI%2FDFyUy4SBEszkgpE%2FV3S0tb4JelQKuswEM6nGrQ3mUtgoyGqUw4GzyRs0p4tYfaGJym1bxPzb6AA1o2%2FpEfq8rk%2BUTd7HXV9&X-Amz-Signature=79dd3264d83dff49110c2de40af84d20454e3cafa45158d0a635dcc6d0fd6564&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZ6WY7E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICshFhH2EOQV0qjZbTPV6M3sJU3%2BZcE%2F8DLFzQ9yDIgKAiEA7JsdRiVtR%2Bt73JHsinzKMGvizUkWB%2BNKVzLiOCu%2F%2Fp0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDIuXNgAeWlhPCjlKjircA3lCdFC6MkdZHhj3myF3bi2%2Bx2yklsoXD3X%2Bx%2FwMC78fH7BTJjtr2LwvbJigSxLvgdhJ8DvfR8TdXjCqYQF9MeiMJKkEE7bskq0cDt77d%2FbCk8SRZ8r4j5z51lAT%2BnpgUMc6KVGM6i%2BB00bImPQPqpREtH8A9PoAq9jX8OrpXM%2BISZy6Kibd%2BM9zQiQJAtuLSSb8y2UK2rFwGNzbJDExa6bFwijG3ITPXCdVTY4Jmc2fSca%2FoopMn4tAN1z4FlTi0KjXyiSJ9ZPCKYGbKb%2FVIPxde%2FcCHg7pdS5jOvCqOd5baqOJ71v3ttXq6EQL56qsfj%2FINW2K028oJc0xGLrhulyxX6URQZT692SrmhrZf0R4haNXsoRUuwkCg7YzK7RsbtlH%2BxriyJOpV2lEbo4vZsimpXTOPYYYs4CUys1YjrmXVqxdVAeKKnUVTPblwcsmPhO%2FHLpopMqwvam9AAsYQDymZyA1Vs8yIoPlIIq0FC5NLW%2FmwGqMSIi9N8goFcxP7OJr%2FCeXev94lArozXHySJ9kWHYyLfcDS3mwg3oDy3kREY%2B%2BW3Kyv9p3I9E3687O4YsKbIwehFy91sdsSfOXof%2F902iPy4SvkBI%2BTui4PF6VbZfAhmpbTE4VdyeDMITI%2BL0GOqUBOaVrGZc%2B0YJgFBjCCqVvnHnGR5%2BksjTzlOHki60DdFDXeW4Tw%2BKgUqAlSnq3PEocAIf1Hoz3rDfmu8eNZsH26%2F5knfyETSyFeBAMfwGmfPdHGRDqjW7mRHyWbL%2BI%2FDFyUy4SBEszkgpE%2FV3S0tb4JelQKuswEM6nGrQ3mUtgoyGqUw4GzyRs0p4tYfaGJym1bxPzb6AA1o2%2FpEfq8rk%2BUTd7HXV9&X-Amz-Signature=43f4e04a6e7c9584905072818b3938f12a93f8ba82f650d2d2a1327ca70d358b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
