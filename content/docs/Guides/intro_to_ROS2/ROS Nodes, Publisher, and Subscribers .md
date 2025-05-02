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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6ZFL2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDTHko2QOpSk0Hl63Iwfy8gaZrF3PeSrT9E9YLLRjtzcAiEAqfBsPJ7q49dLI%2BX80GKtlJ%2BvP3l5367tMYFWC71znwsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2U4oTlloy60N2nHircA%2Bnnb7q2p0dLigNRvE1ZwgHPYKqJhGYWfQW6NEo4AIgClE%2BdrBnsmMzPzbQEpR7iom8bTiGrsVwOJBkzUv9H%2BVsfLKR3ORj%2FSplX6pZw9eCsOeXkmlSUGQ6WA19oJzmmNrKjUt%2BLcQzGKxIGzzLcBcJvw%2FjCXLDtm%2FiCzdgJjWa2d0es4OoK3%2BRPp2W5Ga4FS8lDkskMAC%2BvETMQkcxbkmdKFj5kIRs37R7oybGls6vz1Z0kNmJ518k%2Bw%2FBHfRrmAYYtue6RbLUzc9GOT7adeDMduveimHM%2FN7yE%2BmryT%2F5iNntdkYupbv76CwrlX%2FC7CrybOHjQBflH6vcvrc0o70J83Dmnar%2B7d6ouzk41BoktHmt4cVD2iWIMgLHv8b9F%2F%2B5EoO3G7akVIhS8ahHVkkCmmp2BUTOAf0%2FEXHkTkmK7oVIeM%2B6Nr5KGQvtJS%2Fryt5fq3rWkdPV%2FPccQqb0A9ir9Bq9%2FkceWmPGYTF3%2BfdfTbmMLWZRw7O6JgelXOyyfhvbDAIMH7IgbNk47dMKRwWuUyPC5AbuQ%2BztxCp2D3WIfD0g8pzPCTxaZwTxfF%2BY4FpSm29XHEQeSn9NVy5wh2UFHzGexFGBLkryszOqT7DEMUxf20%2BXEDianJ8k6MKPy0sAGOqUBbW0mHT9a4y%2FU8LKMYiLRZBQb1Mncaxh23PLG3n6c6merfAX9Gehj8795FOQ0ZngmUjfncAoQHMO7G7e1zfUhBnN3TQsK6MIFdZ9CpaggQgZfgQfMOWQcl4yOYkkwbJ3BHpe9TvGVMV3q4jTnjInYuVojt0uUf2zI37uZ5ia5TB%2B8fYhWCm6XsvG4JWd4Pe%2FDycNNmOWLsbvZQ2Y%2B581CwcavG9nN&X-Amz-Signature=53cca1416a5311a6dfb7a806a07212930a24a0df79a80a2d89b349ec43b194e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6ZFL2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDTHko2QOpSk0Hl63Iwfy8gaZrF3PeSrT9E9YLLRjtzcAiEAqfBsPJ7q49dLI%2BX80GKtlJ%2BvP3l5367tMYFWC71znwsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2U4oTlloy60N2nHircA%2Bnnb7q2p0dLigNRvE1ZwgHPYKqJhGYWfQW6NEo4AIgClE%2BdrBnsmMzPzbQEpR7iom8bTiGrsVwOJBkzUv9H%2BVsfLKR3ORj%2FSplX6pZw9eCsOeXkmlSUGQ6WA19oJzmmNrKjUt%2BLcQzGKxIGzzLcBcJvw%2FjCXLDtm%2FiCzdgJjWa2d0es4OoK3%2BRPp2W5Ga4FS8lDkskMAC%2BvETMQkcxbkmdKFj5kIRs37R7oybGls6vz1Z0kNmJ518k%2Bw%2FBHfRrmAYYtue6RbLUzc9GOT7adeDMduveimHM%2FN7yE%2BmryT%2F5iNntdkYupbv76CwrlX%2FC7CrybOHjQBflH6vcvrc0o70J83Dmnar%2B7d6ouzk41BoktHmt4cVD2iWIMgLHv8b9F%2F%2B5EoO3G7akVIhS8ahHVkkCmmp2BUTOAf0%2FEXHkTkmK7oVIeM%2B6Nr5KGQvtJS%2Fryt5fq3rWkdPV%2FPccQqb0A9ir9Bq9%2FkceWmPGYTF3%2BfdfTbmMLWZRw7O6JgelXOyyfhvbDAIMH7IgbNk47dMKRwWuUyPC5AbuQ%2BztxCp2D3WIfD0g8pzPCTxaZwTxfF%2BY4FpSm29XHEQeSn9NVy5wh2UFHzGexFGBLkryszOqT7DEMUxf20%2BXEDianJ8k6MKPy0sAGOqUBbW0mHT9a4y%2FU8LKMYiLRZBQb1Mncaxh23PLG3n6c6merfAX9Gehj8795FOQ0ZngmUjfncAoQHMO7G7e1zfUhBnN3TQsK6MIFdZ9CpaggQgZfgQfMOWQcl4yOYkkwbJ3BHpe9TvGVMV3q4jTnjInYuVojt0uUf2zI37uZ5ia5TB%2B8fYhWCm6XsvG4JWd4Pe%2FDycNNmOWLsbvZQ2Y%2B581CwcavG9nN&X-Amz-Signature=8617610be6d2283e92718bd75dac76e905f6c09acaa49df9f879883edd07dda9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6ZFL2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDTHko2QOpSk0Hl63Iwfy8gaZrF3PeSrT9E9YLLRjtzcAiEAqfBsPJ7q49dLI%2BX80GKtlJ%2BvP3l5367tMYFWC71znwsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2U4oTlloy60N2nHircA%2Bnnb7q2p0dLigNRvE1ZwgHPYKqJhGYWfQW6NEo4AIgClE%2BdrBnsmMzPzbQEpR7iom8bTiGrsVwOJBkzUv9H%2BVsfLKR3ORj%2FSplX6pZw9eCsOeXkmlSUGQ6WA19oJzmmNrKjUt%2BLcQzGKxIGzzLcBcJvw%2FjCXLDtm%2FiCzdgJjWa2d0es4OoK3%2BRPp2W5Ga4FS8lDkskMAC%2BvETMQkcxbkmdKFj5kIRs37R7oybGls6vz1Z0kNmJ518k%2Bw%2FBHfRrmAYYtue6RbLUzc9GOT7adeDMduveimHM%2FN7yE%2BmryT%2F5iNntdkYupbv76CwrlX%2FC7CrybOHjQBflH6vcvrc0o70J83Dmnar%2B7d6ouzk41BoktHmt4cVD2iWIMgLHv8b9F%2F%2B5EoO3G7akVIhS8ahHVkkCmmp2BUTOAf0%2FEXHkTkmK7oVIeM%2B6Nr5KGQvtJS%2Fryt5fq3rWkdPV%2FPccQqb0A9ir9Bq9%2FkceWmPGYTF3%2BfdfTbmMLWZRw7O6JgelXOyyfhvbDAIMH7IgbNk47dMKRwWuUyPC5AbuQ%2BztxCp2D3WIfD0g8pzPCTxaZwTxfF%2BY4FpSm29XHEQeSn9NVy5wh2UFHzGexFGBLkryszOqT7DEMUxf20%2BXEDianJ8k6MKPy0sAGOqUBbW0mHT9a4y%2FU8LKMYiLRZBQb1Mncaxh23PLG3n6c6merfAX9Gehj8795FOQ0ZngmUjfncAoQHMO7G7e1zfUhBnN3TQsK6MIFdZ9CpaggQgZfgQfMOWQcl4yOYkkwbJ3BHpe9TvGVMV3q4jTnjInYuVojt0uUf2zI37uZ5ia5TB%2B8fYhWCm6XsvG4JWd4Pe%2FDycNNmOWLsbvZQ2Y%2B581CwcavG9nN&X-Amz-Signature=b01ad1108fae1baa0ed20e08fb09df4d56a5dbea07bcfc4050aafacd7b33a89f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6ZFL2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDTHko2QOpSk0Hl63Iwfy8gaZrF3PeSrT9E9YLLRjtzcAiEAqfBsPJ7q49dLI%2BX80GKtlJ%2BvP3l5367tMYFWC71znwsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2U4oTlloy60N2nHircA%2Bnnb7q2p0dLigNRvE1ZwgHPYKqJhGYWfQW6NEo4AIgClE%2BdrBnsmMzPzbQEpR7iom8bTiGrsVwOJBkzUv9H%2BVsfLKR3ORj%2FSplX6pZw9eCsOeXkmlSUGQ6WA19oJzmmNrKjUt%2BLcQzGKxIGzzLcBcJvw%2FjCXLDtm%2FiCzdgJjWa2d0es4OoK3%2BRPp2W5Ga4FS8lDkskMAC%2BvETMQkcxbkmdKFj5kIRs37R7oybGls6vz1Z0kNmJ518k%2Bw%2FBHfRrmAYYtue6RbLUzc9GOT7adeDMduveimHM%2FN7yE%2BmryT%2F5iNntdkYupbv76CwrlX%2FC7CrybOHjQBflH6vcvrc0o70J83Dmnar%2B7d6ouzk41BoktHmt4cVD2iWIMgLHv8b9F%2F%2B5EoO3G7akVIhS8ahHVkkCmmp2BUTOAf0%2FEXHkTkmK7oVIeM%2B6Nr5KGQvtJS%2Fryt5fq3rWkdPV%2FPccQqb0A9ir9Bq9%2FkceWmPGYTF3%2BfdfTbmMLWZRw7O6JgelXOyyfhvbDAIMH7IgbNk47dMKRwWuUyPC5AbuQ%2BztxCp2D3WIfD0g8pzPCTxaZwTxfF%2BY4FpSm29XHEQeSn9NVy5wh2UFHzGexFGBLkryszOqT7DEMUxf20%2BXEDianJ8k6MKPy0sAGOqUBbW0mHT9a4y%2FU8LKMYiLRZBQb1Mncaxh23PLG3n6c6merfAX9Gehj8795FOQ0ZngmUjfncAoQHMO7G7e1zfUhBnN3TQsK6MIFdZ9CpaggQgZfgQfMOWQcl4yOYkkwbJ3BHpe9TvGVMV3q4jTnjInYuVojt0uUf2zI37uZ5ia5TB%2B8fYhWCm6XsvG4JWd4Pe%2FDycNNmOWLsbvZQ2Y%2B581CwcavG9nN&X-Amz-Signature=aff2b44576ad60a7e559df04a84cbe9c7fe238edfd330d2a59a9a12278c1ed2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6ZFL2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDTHko2QOpSk0Hl63Iwfy8gaZrF3PeSrT9E9YLLRjtzcAiEAqfBsPJ7q49dLI%2BX80GKtlJ%2BvP3l5367tMYFWC71znwsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2U4oTlloy60N2nHircA%2Bnnb7q2p0dLigNRvE1ZwgHPYKqJhGYWfQW6NEo4AIgClE%2BdrBnsmMzPzbQEpR7iom8bTiGrsVwOJBkzUv9H%2BVsfLKR3ORj%2FSplX6pZw9eCsOeXkmlSUGQ6WA19oJzmmNrKjUt%2BLcQzGKxIGzzLcBcJvw%2FjCXLDtm%2FiCzdgJjWa2d0es4OoK3%2BRPp2W5Ga4FS8lDkskMAC%2BvETMQkcxbkmdKFj5kIRs37R7oybGls6vz1Z0kNmJ518k%2Bw%2FBHfRrmAYYtue6RbLUzc9GOT7adeDMduveimHM%2FN7yE%2BmryT%2F5iNntdkYupbv76CwrlX%2FC7CrybOHjQBflH6vcvrc0o70J83Dmnar%2B7d6ouzk41BoktHmt4cVD2iWIMgLHv8b9F%2F%2B5EoO3G7akVIhS8ahHVkkCmmp2BUTOAf0%2FEXHkTkmK7oVIeM%2B6Nr5KGQvtJS%2Fryt5fq3rWkdPV%2FPccQqb0A9ir9Bq9%2FkceWmPGYTF3%2BfdfTbmMLWZRw7O6JgelXOyyfhvbDAIMH7IgbNk47dMKRwWuUyPC5AbuQ%2BztxCp2D3WIfD0g8pzPCTxaZwTxfF%2BY4FpSm29XHEQeSn9NVy5wh2UFHzGexFGBLkryszOqT7DEMUxf20%2BXEDianJ8k6MKPy0sAGOqUBbW0mHT9a4y%2FU8LKMYiLRZBQb1Mncaxh23PLG3n6c6merfAX9Gehj8795FOQ0ZngmUjfncAoQHMO7G7e1zfUhBnN3TQsK6MIFdZ9CpaggQgZfgQfMOWQcl4yOYkkwbJ3BHpe9TvGVMV3q4jTnjInYuVojt0uUf2zI37uZ5ia5TB%2B8fYhWCm6XsvG4JWd4Pe%2FDycNNmOWLsbvZQ2Y%2B581CwcavG9nN&X-Amz-Signature=67ae96fa3945e32f6b01edb21b6e5a6f727716ea0aa036e5f07042a652cb87fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6ZFL2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDTHko2QOpSk0Hl63Iwfy8gaZrF3PeSrT9E9YLLRjtzcAiEAqfBsPJ7q49dLI%2BX80GKtlJ%2BvP3l5367tMYFWC71znwsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2U4oTlloy60N2nHircA%2Bnnb7q2p0dLigNRvE1ZwgHPYKqJhGYWfQW6NEo4AIgClE%2BdrBnsmMzPzbQEpR7iom8bTiGrsVwOJBkzUv9H%2BVsfLKR3ORj%2FSplX6pZw9eCsOeXkmlSUGQ6WA19oJzmmNrKjUt%2BLcQzGKxIGzzLcBcJvw%2FjCXLDtm%2FiCzdgJjWa2d0es4OoK3%2BRPp2W5Ga4FS8lDkskMAC%2BvETMQkcxbkmdKFj5kIRs37R7oybGls6vz1Z0kNmJ518k%2Bw%2FBHfRrmAYYtue6RbLUzc9GOT7adeDMduveimHM%2FN7yE%2BmryT%2F5iNntdkYupbv76CwrlX%2FC7CrybOHjQBflH6vcvrc0o70J83Dmnar%2B7d6ouzk41BoktHmt4cVD2iWIMgLHv8b9F%2F%2B5EoO3G7akVIhS8ahHVkkCmmp2BUTOAf0%2FEXHkTkmK7oVIeM%2B6Nr5KGQvtJS%2Fryt5fq3rWkdPV%2FPccQqb0A9ir9Bq9%2FkceWmPGYTF3%2BfdfTbmMLWZRw7O6JgelXOyyfhvbDAIMH7IgbNk47dMKRwWuUyPC5AbuQ%2BztxCp2D3WIfD0g8pzPCTxaZwTxfF%2BY4FpSm29XHEQeSn9NVy5wh2UFHzGexFGBLkryszOqT7DEMUxf20%2BXEDianJ8k6MKPy0sAGOqUBbW0mHT9a4y%2FU8LKMYiLRZBQb1Mncaxh23PLG3n6c6merfAX9Gehj8795FOQ0ZngmUjfncAoQHMO7G7e1zfUhBnN3TQsK6MIFdZ9CpaggQgZfgQfMOWQcl4yOYkkwbJ3BHpe9TvGVMV3q4jTnjInYuVojt0uUf2zI37uZ5ia5TB%2B8fYhWCm6XsvG4JWd4Pe%2FDycNNmOWLsbvZQ2Y%2B581CwcavG9nN&X-Amz-Signature=2d35f20c5301a8704fa19d704f45dea7eddfa16099f8e0938082c254862d9deb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6ZFL2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDTHko2QOpSk0Hl63Iwfy8gaZrF3PeSrT9E9YLLRjtzcAiEAqfBsPJ7q49dLI%2BX80GKtlJ%2BvP3l5367tMYFWC71znwsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2U4oTlloy60N2nHircA%2Bnnb7q2p0dLigNRvE1ZwgHPYKqJhGYWfQW6NEo4AIgClE%2BdrBnsmMzPzbQEpR7iom8bTiGrsVwOJBkzUv9H%2BVsfLKR3ORj%2FSplX6pZw9eCsOeXkmlSUGQ6WA19oJzmmNrKjUt%2BLcQzGKxIGzzLcBcJvw%2FjCXLDtm%2FiCzdgJjWa2d0es4OoK3%2BRPp2W5Ga4FS8lDkskMAC%2BvETMQkcxbkmdKFj5kIRs37R7oybGls6vz1Z0kNmJ518k%2Bw%2FBHfRrmAYYtue6RbLUzc9GOT7adeDMduveimHM%2FN7yE%2BmryT%2F5iNntdkYupbv76CwrlX%2FC7CrybOHjQBflH6vcvrc0o70J83Dmnar%2B7d6ouzk41BoktHmt4cVD2iWIMgLHv8b9F%2F%2B5EoO3G7akVIhS8ahHVkkCmmp2BUTOAf0%2FEXHkTkmK7oVIeM%2B6Nr5KGQvtJS%2Fryt5fq3rWkdPV%2FPccQqb0A9ir9Bq9%2FkceWmPGYTF3%2BfdfTbmMLWZRw7O6JgelXOyyfhvbDAIMH7IgbNk47dMKRwWuUyPC5AbuQ%2BztxCp2D3WIfD0g8pzPCTxaZwTxfF%2BY4FpSm29XHEQeSn9NVy5wh2UFHzGexFGBLkryszOqT7DEMUxf20%2BXEDianJ8k6MKPy0sAGOqUBbW0mHT9a4y%2FU8LKMYiLRZBQb1Mncaxh23PLG3n6c6merfAX9Gehj8795FOQ0ZngmUjfncAoQHMO7G7e1zfUhBnN3TQsK6MIFdZ9CpaggQgZfgQfMOWQcl4yOYkkwbJ3BHpe9TvGVMV3q4jTnjInYuVojt0uUf2zI37uZ5ia5TB%2B8fYhWCm6XsvG4JWd4Pe%2FDycNNmOWLsbvZQ2Y%2B581CwcavG9nN&X-Amz-Signature=4dc0e4a441db2b1f89fa4883e54dd9bfefaedf71e8abac455f6d6c25d33f2815&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6ZFL2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDTHko2QOpSk0Hl63Iwfy8gaZrF3PeSrT9E9YLLRjtzcAiEAqfBsPJ7q49dLI%2BX80GKtlJ%2BvP3l5367tMYFWC71znwsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2U4oTlloy60N2nHircA%2Bnnb7q2p0dLigNRvE1ZwgHPYKqJhGYWfQW6NEo4AIgClE%2BdrBnsmMzPzbQEpR7iom8bTiGrsVwOJBkzUv9H%2BVsfLKR3ORj%2FSplX6pZw9eCsOeXkmlSUGQ6WA19oJzmmNrKjUt%2BLcQzGKxIGzzLcBcJvw%2FjCXLDtm%2FiCzdgJjWa2d0es4OoK3%2BRPp2W5Ga4FS8lDkskMAC%2BvETMQkcxbkmdKFj5kIRs37R7oybGls6vz1Z0kNmJ518k%2Bw%2FBHfRrmAYYtue6RbLUzc9GOT7adeDMduveimHM%2FN7yE%2BmryT%2F5iNntdkYupbv76CwrlX%2FC7CrybOHjQBflH6vcvrc0o70J83Dmnar%2B7d6ouzk41BoktHmt4cVD2iWIMgLHv8b9F%2F%2B5EoO3G7akVIhS8ahHVkkCmmp2BUTOAf0%2FEXHkTkmK7oVIeM%2B6Nr5KGQvtJS%2Fryt5fq3rWkdPV%2FPccQqb0A9ir9Bq9%2FkceWmPGYTF3%2BfdfTbmMLWZRw7O6JgelXOyyfhvbDAIMH7IgbNk47dMKRwWuUyPC5AbuQ%2BztxCp2D3WIfD0g8pzPCTxaZwTxfF%2BY4FpSm29XHEQeSn9NVy5wh2UFHzGexFGBLkryszOqT7DEMUxf20%2BXEDianJ8k6MKPy0sAGOqUBbW0mHT9a4y%2FU8LKMYiLRZBQb1Mncaxh23PLG3n6c6merfAX9Gehj8795FOQ0ZngmUjfncAoQHMO7G7e1zfUhBnN3TQsK6MIFdZ9CpaggQgZfgQfMOWQcl4yOYkkwbJ3BHpe9TvGVMV3q4jTnjInYuVojt0uUf2zI37uZ5ia5TB%2B8fYhWCm6XsvG4JWd4Pe%2FDycNNmOWLsbvZQ2Y%2B581CwcavG9nN&X-Amz-Signature=f725331e4e28d84a703fe3f3c6e01e9a9b239f9ed4e8aaf4cc5f1c6ebfd197b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
