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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQY776S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgdsmh1w054HTMgQ%2BYOBi1%2B1UH0tS9etyFlY%2F5DrkC3QIhAMw2SGADXOY5vDBBi5IENGbDbKwn6RtbGCzcwvodMKZpKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXtk0Efd4QTJmxYj0q3APxQi35usyC59ArAQA6ExtlSsygC1cXNHWTBO6ABW1u%2By3VbVmThfOR8LEW5zSaoyuffsOrzDZWB0R5FRzGO3dntqoMXMh9FBUxu%2BrpqVoc1BvSBX5DCp%2B29L76VqYreeW7Y%2F1gdJuY6dcYK1smgC6NKAdzbcqWgKJomEOWgEkx1nqX5XbQ0eCnvonjShN6Ff5sVpKkQ6d8OATDmdW770UukV%2BSxhyQKsfHdYQ71oS1dROaVpimNJv%2FPmyXkliwv3jtT74I9uG0y%2Bvt%2BjoN7f1K1ppJgsMAlerZi4bv9Z27j%2F7ARrgDwhQ0%2BrqPsyIzvdA1gJVy1FhsD%2B7IRZZhk5gfqr%2FUQMzFmrY1bFjfmg7Itashl4bo%2FGQfDpSsATCPlqqGUOsC01mP6yBJei2MHMLeLdIGoYWzaaRqefydJMvoqWHka%2FThEO8Moj1NB%2F%2FRXcPIckAneCloNr4jeP1VIzu9xnEq%2BfIR8nkCQa9tObva%2BbsWwJ71jEp6kIZmt3v1xq1goZeIy4NL%2FvLP4hO4OC2ZWl%2F5dlFZJBkftQ%2BvRjfuwXEMCT2I5%2BeRExpKL%2FHTkPMgt3yMcBy81b2Kb3Qx9UQh3oZNtu3bIR5nfwG99ClFOXlq46PXE5y%2Fq52injCTk67BBjqkAZRo9pGusHLC4GIah6B6cpiHExUHUJPjx6k5iUT%2Fs7ipKXFEuksuQ69PG3dhuC6sBXo9MdDvK20%2Bvd8u17dGjDhNk6%2BcOfbk%2FFcci%2BVHugxL8mBh6XeecVZvQhxZev7f2wxhn%2BXRSb%2BQA71VNWY5U3ljHWzCqz10Qwx5yhPQM3vp2SfgSGS1Hm8AW5vwoItQYxopYnFywzkWx%2Byh6sVPP6aFO%2BWr&X-Amz-Signature=aad6c49d641b72ca33e8a0c87ea754efe8b0b9a0012cd1f1677beae81c9b7129&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQY776S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgdsmh1w054HTMgQ%2BYOBi1%2B1UH0tS9etyFlY%2F5DrkC3QIhAMw2SGADXOY5vDBBi5IENGbDbKwn6RtbGCzcwvodMKZpKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXtk0Efd4QTJmxYj0q3APxQi35usyC59ArAQA6ExtlSsygC1cXNHWTBO6ABW1u%2By3VbVmThfOR8LEW5zSaoyuffsOrzDZWB0R5FRzGO3dntqoMXMh9FBUxu%2BrpqVoc1BvSBX5DCp%2B29L76VqYreeW7Y%2F1gdJuY6dcYK1smgC6NKAdzbcqWgKJomEOWgEkx1nqX5XbQ0eCnvonjShN6Ff5sVpKkQ6d8OATDmdW770UukV%2BSxhyQKsfHdYQ71oS1dROaVpimNJv%2FPmyXkliwv3jtT74I9uG0y%2Bvt%2BjoN7f1K1ppJgsMAlerZi4bv9Z27j%2F7ARrgDwhQ0%2BrqPsyIzvdA1gJVy1FhsD%2B7IRZZhk5gfqr%2FUQMzFmrY1bFjfmg7Itashl4bo%2FGQfDpSsATCPlqqGUOsC01mP6yBJei2MHMLeLdIGoYWzaaRqefydJMvoqWHka%2FThEO8Moj1NB%2F%2FRXcPIckAneCloNr4jeP1VIzu9xnEq%2BfIR8nkCQa9tObva%2BbsWwJ71jEp6kIZmt3v1xq1goZeIy4NL%2FvLP4hO4OC2ZWl%2F5dlFZJBkftQ%2BvRjfuwXEMCT2I5%2BeRExpKL%2FHTkPMgt3yMcBy81b2Kb3Qx9UQh3oZNtu3bIR5nfwG99ClFOXlq46PXE5y%2Fq52injCTk67BBjqkAZRo9pGusHLC4GIah6B6cpiHExUHUJPjx6k5iUT%2Fs7ipKXFEuksuQ69PG3dhuC6sBXo9MdDvK20%2Bvd8u17dGjDhNk6%2BcOfbk%2FFcci%2BVHugxL8mBh6XeecVZvQhxZev7f2wxhn%2BXRSb%2BQA71VNWY5U3ljHWzCqz10Qwx5yhPQM3vp2SfgSGS1Hm8AW5vwoItQYxopYnFywzkWx%2Byh6sVPP6aFO%2BWr&X-Amz-Signature=992dfde129b645fd2fa993920ad485ba3ac9128cb0befbc9593533b298e31eea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQY776S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgdsmh1w054HTMgQ%2BYOBi1%2B1UH0tS9etyFlY%2F5DrkC3QIhAMw2SGADXOY5vDBBi5IENGbDbKwn6RtbGCzcwvodMKZpKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXtk0Efd4QTJmxYj0q3APxQi35usyC59ArAQA6ExtlSsygC1cXNHWTBO6ABW1u%2By3VbVmThfOR8LEW5zSaoyuffsOrzDZWB0R5FRzGO3dntqoMXMh9FBUxu%2BrpqVoc1BvSBX5DCp%2B29L76VqYreeW7Y%2F1gdJuY6dcYK1smgC6NKAdzbcqWgKJomEOWgEkx1nqX5XbQ0eCnvonjShN6Ff5sVpKkQ6d8OATDmdW770UukV%2BSxhyQKsfHdYQ71oS1dROaVpimNJv%2FPmyXkliwv3jtT74I9uG0y%2Bvt%2BjoN7f1K1ppJgsMAlerZi4bv9Z27j%2F7ARrgDwhQ0%2BrqPsyIzvdA1gJVy1FhsD%2B7IRZZhk5gfqr%2FUQMzFmrY1bFjfmg7Itashl4bo%2FGQfDpSsATCPlqqGUOsC01mP6yBJei2MHMLeLdIGoYWzaaRqefydJMvoqWHka%2FThEO8Moj1NB%2F%2FRXcPIckAneCloNr4jeP1VIzu9xnEq%2BfIR8nkCQa9tObva%2BbsWwJ71jEp6kIZmt3v1xq1goZeIy4NL%2FvLP4hO4OC2ZWl%2F5dlFZJBkftQ%2BvRjfuwXEMCT2I5%2BeRExpKL%2FHTkPMgt3yMcBy81b2Kb3Qx9UQh3oZNtu3bIR5nfwG99ClFOXlq46PXE5y%2Fq52injCTk67BBjqkAZRo9pGusHLC4GIah6B6cpiHExUHUJPjx6k5iUT%2Fs7ipKXFEuksuQ69PG3dhuC6sBXo9MdDvK20%2Bvd8u17dGjDhNk6%2BcOfbk%2FFcci%2BVHugxL8mBh6XeecVZvQhxZev7f2wxhn%2BXRSb%2BQA71VNWY5U3ljHWzCqz10Qwx5yhPQM3vp2SfgSGS1Hm8AW5vwoItQYxopYnFywzkWx%2Byh6sVPP6aFO%2BWr&X-Amz-Signature=12d6dcd8aa38613ad022f7dbf23744a5204e375d20bcc6e81a8e1d023026082a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQY776S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgdsmh1w054HTMgQ%2BYOBi1%2B1UH0tS9etyFlY%2F5DrkC3QIhAMw2SGADXOY5vDBBi5IENGbDbKwn6RtbGCzcwvodMKZpKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXtk0Efd4QTJmxYj0q3APxQi35usyC59ArAQA6ExtlSsygC1cXNHWTBO6ABW1u%2By3VbVmThfOR8LEW5zSaoyuffsOrzDZWB0R5FRzGO3dntqoMXMh9FBUxu%2BrpqVoc1BvSBX5DCp%2B29L76VqYreeW7Y%2F1gdJuY6dcYK1smgC6NKAdzbcqWgKJomEOWgEkx1nqX5XbQ0eCnvonjShN6Ff5sVpKkQ6d8OATDmdW770UukV%2BSxhyQKsfHdYQ71oS1dROaVpimNJv%2FPmyXkliwv3jtT74I9uG0y%2Bvt%2BjoN7f1K1ppJgsMAlerZi4bv9Z27j%2F7ARrgDwhQ0%2BrqPsyIzvdA1gJVy1FhsD%2B7IRZZhk5gfqr%2FUQMzFmrY1bFjfmg7Itashl4bo%2FGQfDpSsATCPlqqGUOsC01mP6yBJei2MHMLeLdIGoYWzaaRqefydJMvoqWHka%2FThEO8Moj1NB%2F%2FRXcPIckAneCloNr4jeP1VIzu9xnEq%2BfIR8nkCQa9tObva%2BbsWwJ71jEp6kIZmt3v1xq1goZeIy4NL%2FvLP4hO4OC2ZWl%2F5dlFZJBkftQ%2BvRjfuwXEMCT2I5%2BeRExpKL%2FHTkPMgt3yMcBy81b2Kb3Qx9UQh3oZNtu3bIR5nfwG99ClFOXlq46PXE5y%2Fq52injCTk67BBjqkAZRo9pGusHLC4GIah6B6cpiHExUHUJPjx6k5iUT%2Fs7ipKXFEuksuQ69PG3dhuC6sBXo9MdDvK20%2Bvd8u17dGjDhNk6%2BcOfbk%2FFcci%2BVHugxL8mBh6XeecVZvQhxZev7f2wxhn%2BXRSb%2BQA71VNWY5U3ljHWzCqz10Qwx5yhPQM3vp2SfgSGS1Hm8AW5vwoItQYxopYnFywzkWx%2Byh6sVPP6aFO%2BWr&X-Amz-Signature=6e0cde8d6a2b6687caabcd42d9822c7d0ad8200979a88fd4db905a932ef25e97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQY776S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgdsmh1w054HTMgQ%2BYOBi1%2B1UH0tS9etyFlY%2F5DrkC3QIhAMw2SGADXOY5vDBBi5IENGbDbKwn6RtbGCzcwvodMKZpKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXtk0Efd4QTJmxYj0q3APxQi35usyC59ArAQA6ExtlSsygC1cXNHWTBO6ABW1u%2By3VbVmThfOR8LEW5zSaoyuffsOrzDZWB0R5FRzGO3dntqoMXMh9FBUxu%2BrpqVoc1BvSBX5DCp%2B29L76VqYreeW7Y%2F1gdJuY6dcYK1smgC6NKAdzbcqWgKJomEOWgEkx1nqX5XbQ0eCnvonjShN6Ff5sVpKkQ6d8OATDmdW770UukV%2BSxhyQKsfHdYQ71oS1dROaVpimNJv%2FPmyXkliwv3jtT74I9uG0y%2Bvt%2BjoN7f1K1ppJgsMAlerZi4bv9Z27j%2F7ARrgDwhQ0%2BrqPsyIzvdA1gJVy1FhsD%2B7IRZZhk5gfqr%2FUQMzFmrY1bFjfmg7Itashl4bo%2FGQfDpSsATCPlqqGUOsC01mP6yBJei2MHMLeLdIGoYWzaaRqefydJMvoqWHka%2FThEO8Moj1NB%2F%2FRXcPIckAneCloNr4jeP1VIzu9xnEq%2BfIR8nkCQa9tObva%2BbsWwJ71jEp6kIZmt3v1xq1goZeIy4NL%2FvLP4hO4OC2ZWl%2F5dlFZJBkftQ%2BvRjfuwXEMCT2I5%2BeRExpKL%2FHTkPMgt3yMcBy81b2Kb3Qx9UQh3oZNtu3bIR5nfwG99ClFOXlq46PXE5y%2Fq52injCTk67BBjqkAZRo9pGusHLC4GIah6B6cpiHExUHUJPjx6k5iUT%2Fs7ipKXFEuksuQ69PG3dhuC6sBXo9MdDvK20%2Bvd8u17dGjDhNk6%2BcOfbk%2FFcci%2BVHugxL8mBh6XeecVZvQhxZev7f2wxhn%2BXRSb%2BQA71VNWY5U3ljHWzCqz10Qwx5yhPQM3vp2SfgSGS1Hm8AW5vwoItQYxopYnFywzkWx%2Byh6sVPP6aFO%2BWr&X-Amz-Signature=0ab7ee389a8bd7865cc566ca107dfde631a886a6d75e1b4ffdc7d905c9d260ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQY776S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgdsmh1w054HTMgQ%2BYOBi1%2B1UH0tS9etyFlY%2F5DrkC3QIhAMw2SGADXOY5vDBBi5IENGbDbKwn6RtbGCzcwvodMKZpKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXtk0Efd4QTJmxYj0q3APxQi35usyC59ArAQA6ExtlSsygC1cXNHWTBO6ABW1u%2By3VbVmThfOR8LEW5zSaoyuffsOrzDZWB0R5FRzGO3dntqoMXMh9FBUxu%2BrpqVoc1BvSBX5DCp%2B29L76VqYreeW7Y%2F1gdJuY6dcYK1smgC6NKAdzbcqWgKJomEOWgEkx1nqX5XbQ0eCnvonjShN6Ff5sVpKkQ6d8OATDmdW770UukV%2BSxhyQKsfHdYQ71oS1dROaVpimNJv%2FPmyXkliwv3jtT74I9uG0y%2Bvt%2BjoN7f1K1ppJgsMAlerZi4bv9Z27j%2F7ARrgDwhQ0%2BrqPsyIzvdA1gJVy1FhsD%2B7IRZZhk5gfqr%2FUQMzFmrY1bFjfmg7Itashl4bo%2FGQfDpSsATCPlqqGUOsC01mP6yBJei2MHMLeLdIGoYWzaaRqefydJMvoqWHka%2FThEO8Moj1NB%2F%2FRXcPIckAneCloNr4jeP1VIzu9xnEq%2BfIR8nkCQa9tObva%2BbsWwJ71jEp6kIZmt3v1xq1goZeIy4NL%2FvLP4hO4OC2ZWl%2F5dlFZJBkftQ%2BvRjfuwXEMCT2I5%2BeRExpKL%2FHTkPMgt3yMcBy81b2Kb3Qx9UQh3oZNtu3bIR5nfwG99ClFOXlq46PXE5y%2Fq52injCTk67BBjqkAZRo9pGusHLC4GIah6B6cpiHExUHUJPjx6k5iUT%2Fs7ipKXFEuksuQ69PG3dhuC6sBXo9MdDvK20%2Bvd8u17dGjDhNk6%2BcOfbk%2FFcci%2BVHugxL8mBh6XeecVZvQhxZev7f2wxhn%2BXRSb%2BQA71VNWY5U3ljHWzCqz10Qwx5yhPQM3vp2SfgSGS1Hm8AW5vwoItQYxopYnFywzkWx%2Byh6sVPP6aFO%2BWr&X-Amz-Signature=b8ed9654c04c63323115a93b06c109b097da52cdbe06dacf035af0fe31e7d114&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQY776S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgdsmh1w054HTMgQ%2BYOBi1%2B1UH0tS9etyFlY%2F5DrkC3QIhAMw2SGADXOY5vDBBi5IENGbDbKwn6RtbGCzcwvodMKZpKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXtk0Efd4QTJmxYj0q3APxQi35usyC59ArAQA6ExtlSsygC1cXNHWTBO6ABW1u%2By3VbVmThfOR8LEW5zSaoyuffsOrzDZWB0R5FRzGO3dntqoMXMh9FBUxu%2BrpqVoc1BvSBX5DCp%2B29L76VqYreeW7Y%2F1gdJuY6dcYK1smgC6NKAdzbcqWgKJomEOWgEkx1nqX5XbQ0eCnvonjShN6Ff5sVpKkQ6d8OATDmdW770UukV%2BSxhyQKsfHdYQ71oS1dROaVpimNJv%2FPmyXkliwv3jtT74I9uG0y%2Bvt%2BjoN7f1K1ppJgsMAlerZi4bv9Z27j%2F7ARrgDwhQ0%2BrqPsyIzvdA1gJVy1FhsD%2B7IRZZhk5gfqr%2FUQMzFmrY1bFjfmg7Itashl4bo%2FGQfDpSsATCPlqqGUOsC01mP6yBJei2MHMLeLdIGoYWzaaRqefydJMvoqWHka%2FThEO8Moj1NB%2F%2FRXcPIckAneCloNr4jeP1VIzu9xnEq%2BfIR8nkCQa9tObva%2BbsWwJ71jEp6kIZmt3v1xq1goZeIy4NL%2FvLP4hO4OC2ZWl%2F5dlFZJBkftQ%2BvRjfuwXEMCT2I5%2BeRExpKL%2FHTkPMgt3yMcBy81b2Kb3Qx9UQh3oZNtu3bIR5nfwG99ClFOXlq46PXE5y%2Fq52injCTk67BBjqkAZRo9pGusHLC4GIah6B6cpiHExUHUJPjx6k5iUT%2Fs7ipKXFEuksuQ69PG3dhuC6sBXo9MdDvK20%2Bvd8u17dGjDhNk6%2BcOfbk%2FFcci%2BVHugxL8mBh6XeecVZvQhxZev7f2wxhn%2BXRSb%2BQA71VNWY5U3ljHWzCqz10Qwx5yhPQM3vp2SfgSGS1Hm8AW5vwoItQYxopYnFywzkWx%2Byh6sVPP6aFO%2BWr&X-Amz-Signature=c25b9341090ed8b2d996c260a89eef79b152eeab916da804c3b16a3e0b2f1a93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQY776S%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgdsmh1w054HTMgQ%2BYOBi1%2B1UH0tS9etyFlY%2F5DrkC3QIhAMw2SGADXOY5vDBBi5IENGbDbKwn6RtbGCzcwvodMKZpKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXtk0Efd4QTJmxYj0q3APxQi35usyC59ArAQA6ExtlSsygC1cXNHWTBO6ABW1u%2By3VbVmThfOR8LEW5zSaoyuffsOrzDZWB0R5FRzGO3dntqoMXMh9FBUxu%2BrpqVoc1BvSBX5DCp%2B29L76VqYreeW7Y%2F1gdJuY6dcYK1smgC6NKAdzbcqWgKJomEOWgEkx1nqX5XbQ0eCnvonjShN6Ff5sVpKkQ6d8OATDmdW770UukV%2BSxhyQKsfHdYQ71oS1dROaVpimNJv%2FPmyXkliwv3jtT74I9uG0y%2Bvt%2BjoN7f1K1ppJgsMAlerZi4bv9Z27j%2F7ARrgDwhQ0%2BrqPsyIzvdA1gJVy1FhsD%2B7IRZZhk5gfqr%2FUQMzFmrY1bFjfmg7Itashl4bo%2FGQfDpSsATCPlqqGUOsC01mP6yBJei2MHMLeLdIGoYWzaaRqefydJMvoqWHka%2FThEO8Moj1NB%2F%2FRXcPIckAneCloNr4jeP1VIzu9xnEq%2BfIR8nkCQa9tObva%2BbsWwJ71jEp6kIZmt3v1xq1goZeIy4NL%2FvLP4hO4OC2ZWl%2F5dlFZJBkftQ%2BvRjfuwXEMCT2I5%2BeRExpKL%2FHTkPMgt3yMcBy81b2Kb3Qx9UQh3oZNtu3bIR5nfwG99ClFOXlq46PXE5y%2Fq52injCTk67BBjqkAZRo9pGusHLC4GIah6B6cpiHExUHUJPjx6k5iUT%2Fs7ipKXFEuksuQ69PG3dhuC6sBXo9MdDvK20%2Bvd8u17dGjDhNk6%2BcOfbk%2FFcci%2BVHugxL8mBh6XeecVZvQhxZev7f2wxhn%2BXRSb%2BQA71VNWY5U3ljHWzCqz10Qwx5yhPQM3vp2SfgSGS1Hm8AW5vwoItQYxopYnFywzkWx%2Byh6sVPP6aFO%2BWr&X-Amz-Signature=f5bccd84a83aca7a8aeaab043e615a2f0748b7927fea56f376b679dc1f82deff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
