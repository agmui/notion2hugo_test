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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBUIALZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD4xtjGDLGvRtV%2BWzslz6Km1uwaVaxB8kHgeCemLovi8AIhANKvh3Fk7JpW0ykF41%2B6SXQzuh8SVkl%2FTP7TTfcM0vVPKv8DCBoQABoMNjM3NDIzMTgzODA1Igz1Vn%2FeuoemUMB5pYMq3AMw7bAwQpKkQWYwHI%2BTKzORVgtiFogHQLtYZbiK4AUUyOM0ITLSpytgexqmZdETFIr0hKMH35fF4XixEr0IaAr66AqPBOxJ0I98I2th6Ip2Ma8jmLO7KiPqVwyME2nXB6kMAeU%2B%2Fsnw0JoTP%2Fu7t8w%2B7zDMUb%2FIsNHhKANzhs%2BTPztu%2FSO7TE5UWkHV0FurnuIu847NxqRj0rshiOY6EIMyNeHFe8nFRCR8WBcBjXG%2FstYNGv0c5etslxo0%2BOgV%2F8n%2Ft8Kijd%2B7JpAM0Jy0Ud2b9uNl2EokwiNHBBlYdLB4HDJzmCKq7cIPOCpEajuSc0%2BfBl%2BRl2YMByHKoYFU3iWscCRvTMviH7kn08x%2BZR%2FgDt3paNuwS80m8R8wlHh0BYhnx%2FJFtbdRJhWL5joymGIiMNwOKggMTW%2FTzS8zpKt8pT0JeCIMk8m1cjWaDKv3EUbCovLoVeZ8TSayB3bfJB1chtS%2Ft8W8C7dtm%2Fy3uRqbvL6wTFdeBGKScga%2FllsBdy%2BaA3q9IaOlKup9UEUUxp%2FfAE6NGaXuY64MnTpWNIv1jZ9Akuh0MQ6tZYXHpdcKOn6MxJ7zBN1TqYA%2FdMy0XH1b5pwc0j%2FbBVnNrsn%2BeVLyNzdSrlIV3ggFQJ63SjDvut7ABjqkAc8QPFYabFWGODyk%2FLx0D%2FCVddt1FVkxh8SZzbi%2B%2BxHc807ncAuYfX7m2BJFhO7d%2BN6PknNYplaKpfPUnT3i%2F8YJ72ccwRjAc0Og%2Fu50%2BRM5z4gZDHASUnvHGFgdynjysiuX2P4BQ2VbSbaxuihbdEhtFxJFmAAHncRYTYi0hwasXJiznQQ4p3%2FsbaRPTQDuyZeZ9KZWNWl%2FCGt7aac530j8sbc2&X-Amz-Signature=f7b9b20202329892ffd064b3d60e3dbcd3586792b8480ce6dfbfc8c95b605806&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBUIALZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD4xtjGDLGvRtV%2BWzslz6Km1uwaVaxB8kHgeCemLovi8AIhANKvh3Fk7JpW0ykF41%2B6SXQzuh8SVkl%2FTP7TTfcM0vVPKv8DCBoQABoMNjM3NDIzMTgzODA1Igz1Vn%2FeuoemUMB5pYMq3AMw7bAwQpKkQWYwHI%2BTKzORVgtiFogHQLtYZbiK4AUUyOM0ITLSpytgexqmZdETFIr0hKMH35fF4XixEr0IaAr66AqPBOxJ0I98I2th6Ip2Ma8jmLO7KiPqVwyME2nXB6kMAeU%2B%2Fsnw0JoTP%2Fu7t8w%2B7zDMUb%2FIsNHhKANzhs%2BTPztu%2FSO7TE5UWkHV0FurnuIu847NxqRj0rshiOY6EIMyNeHFe8nFRCR8WBcBjXG%2FstYNGv0c5etslxo0%2BOgV%2F8n%2Ft8Kijd%2B7JpAM0Jy0Ud2b9uNl2EokwiNHBBlYdLB4HDJzmCKq7cIPOCpEajuSc0%2BfBl%2BRl2YMByHKoYFU3iWscCRvTMviH7kn08x%2BZR%2FgDt3paNuwS80m8R8wlHh0BYhnx%2FJFtbdRJhWL5joymGIiMNwOKggMTW%2FTzS8zpKt8pT0JeCIMk8m1cjWaDKv3EUbCovLoVeZ8TSayB3bfJB1chtS%2Ft8W8C7dtm%2Fy3uRqbvL6wTFdeBGKScga%2FllsBdy%2BaA3q9IaOlKup9UEUUxp%2FfAE6NGaXuY64MnTpWNIv1jZ9Akuh0MQ6tZYXHpdcKOn6MxJ7zBN1TqYA%2FdMy0XH1b5pwc0j%2FbBVnNrsn%2BeVLyNzdSrlIV3ggFQJ63SjDvut7ABjqkAc8QPFYabFWGODyk%2FLx0D%2FCVddt1FVkxh8SZzbi%2B%2BxHc807ncAuYfX7m2BJFhO7d%2BN6PknNYplaKpfPUnT3i%2F8YJ72ccwRjAc0Og%2Fu50%2BRM5z4gZDHASUnvHGFgdynjysiuX2P4BQ2VbSbaxuihbdEhtFxJFmAAHncRYTYi0hwasXJiznQQ4p3%2FsbaRPTQDuyZeZ9KZWNWl%2FCGt7aac530j8sbc2&X-Amz-Signature=fee90f6573a4a0979c740281899c6141ed64a47c22252ece47a634d515a623d0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBUIALZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD4xtjGDLGvRtV%2BWzslz6Km1uwaVaxB8kHgeCemLovi8AIhANKvh3Fk7JpW0ykF41%2B6SXQzuh8SVkl%2FTP7TTfcM0vVPKv8DCBoQABoMNjM3NDIzMTgzODA1Igz1Vn%2FeuoemUMB5pYMq3AMw7bAwQpKkQWYwHI%2BTKzORVgtiFogHQLtYZbiK4AUUyOM0ITLSpytgexqmZdETFIr0hKMH35fF4XixEr0IaAr66AqPBOxJ0I98I2th6Ip2Ma8jmLO7KiPqVwyME2nXB6kMAeU%2B%2Fsnw0JoTP%2Fu7t8w%2B7zDMUb%2FIsNHhKANzhs%2BTPztu%2FSO7TE5UWkHV0FurnuIu847NxqRj0rshiOY6EIMyNeHFe8nFRCR8WBcBjXG%2FstYNGv0c5etslxo0%2BOgV%2F8n%2Ft8Kijd%2B7JpAM0Jy0Ud2b9uNl2EokwiNHBBlYdLB4HDJzmCKq7cIPOCpEajuSc0%2BfBl%2BRl2YMByHKoYFU3iWscCRvTMviH7kn08x%2BZR%2FgDt3paNuwS80m8R8wlHh0BYhnx%2FJFtbdRJhWL5joymGIiMNwOKggMTW%2FTzS8zpKt8pT0JeCIMk8m1cjWaDKv3EUbCovLoVeZ8TSayB3bfJB1chtS%2Ft8W8C7dtm%2Fy3uRqbvL6wTFdeBGKScga%2FllsBdy%2BaA3q9IaOlKup9UEUUxp%2FfAE6NGaXuY64MnTpWNIv1jZ9Akuh0MQ6tZYXHpdcKOn6MxJ7zBN1TqYA%2FdMy0XH1b5pwc0j%2FbBVnNrsn%2BeVLyNzdSrlIV3ggFQJ63SjDvut7ABjqkAc8QPFYabFWGODyk%2FLx0D%2FCVddt1FVkxh8SZzbi%2B%2BxHc807ncAuYfX7m2BJFhO7d%2BN6PknNYplaKpfPUnT3i%2F8YJ72ccwRjAc0Og%2Fu50%2BRM5z4gZDHASUnvHGFgdynjysiuX2P4BQ2VbSbaxuihbdEhtFxJFmAAHncRYTYi0hwasXJiznQQ4p3%2FsbaRPTQDuyZeZ9KZWNWl%2FCGt7aac530j8sbc2&X-Amz-Signature=d1dcf911cc6521df0220010358dd3491fe0e4cd062608834747db8f948ab6206&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBUIALZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD4xtjGDLGvRtV%2BWzslz6Km1uwaVaxB8kHgeCemLovi8AIhANKvh3Fk7JpW0ykF41%2B6SXQzuh8SVkl%2FTP7TTfcM0vVPKv8DCBoQABoMNjM3NDIzMTgzODA1Igz1Vn%2FeuoemUMB5pYMq3AMw7bAwQpKkQWYwHI%2BTKzORVgtiFogHQLtYZbiK4AUUyOM0ITLSpytgexqmZdETFIr0hKMH35fF4XixEr0IaAr66AqPBOxJ0I98I2th6Ip2Ma8jmLO7KiPqVwyME2nXB6kMAeU%2B%2Fsnw0JoTP%2Fu7t8w%2B7zDMUb%2FIsNHhKANzhs%2BTPztu%2FSO7TE5UWkHV0FurnuIu847NxqRj0rshiOY6EIMyNeHFe8nFRCR8WBcBjXG%2FstYNGv0c5etslxo0%2BOgV%2F8n%2Ft8Kijd%2B7JpAM0Jy0Ud2b9uNl2EokwiNHBBlYdLB4HDJzmCKq7cIPOCpEajuSc0%2BfBl%2BRl2YMByHKoYFU3iWscCRvTMviH7kn08x%2BZR%2FgDt3paNuwS80m8R8wlHh0BYhnx%2FJFtbdRJhWL5joymGIiMNwOKggMTW%2FTzS8zpKt8pT0JeCIMk8m1cjWaDKv3EUbCovLoVeZ8TSayB3bfJB1chtS%2Ft8W8C7dtm%2Fy3uRqbvL6wTFdeBGKScga%2FllsBdy%2BaA3q9IaOlKup9UEUUxp%2FfAE6NGaXuY64MnTpWNIv1jZ9Akuh0MQ6tZYXHpdcKOn6MxJ7zBN1TqYA%2FdMy0XH1b5pwc0j%2FbBVnNrsn%2BeVLyNzdSrlIV3ggFQJ63SjDvut7ABjqkAc8QPFYabFWGODyk%2FLx0D%2FCVddt1FVkxh8SZzbi%2B%2BxHc807ncAuYfX7m2BJFhO7d%2BN6PknNYplaKpfPUnT3i%2F8YJ72ccwRjAc0Og%2Fu50%2BRM5z4gZDHASUnvHGFgdynjysiuX2P4BQ2VbSbaxuihbdEhtFxJFmAAHncRYTYi0hwasXJiznQQ4p3%2FsbaRPTQDuyZeZ9KZWNWl%2FCGt7aac530j8sbc2&X-Amz-Signature=98e9a7c64ea4bdb9e3b085f9d357a3f605462215e1229d9c42c215a2ed9d9992&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBUIALZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD4xtjGDLGvRtV%2BWzslz6Km1uwaVaxB8kHgeCemLovi8AIhANKvh3Fk7JpW0ykF41%2B6SXQzuh8SVkl%2FTP7TTfcM0vVPKv8DCBoQABoMNjM3NDIzMTgzODA1Igz1Vn%2FeuoemUMB5pYMq3AMw7bAwQpKkQWYwHI%2BTKzORVgtiFogHQLtYZbiK4AUUyOM0ITLSpytgexqmZdETFIr0hKMH35fF4XixEr0IaAr66AqPBOxJ0I98I2th6Ip2Ma8jmLO7KiPqVwyME2nXB6kMAeU%2B%2Fsnw0JoTP%2Fu7t8w%2B7zDMUb%2FIsNHhKANzhs%2BTPztu%2FSO7TE5UWkHV0FurnuIu847NxqRj0rshiOY6EIMyNeHFe8nFRCR8WBcBjXG%2FstYNGv0c5etslxo0%2BOgV%2F8n%2Ft8Kijd%2B7JpAM0Jy0Ud2b9uNl2EokwiNHBBlYdLB4HDJzmCKq7cIPOCpEajuSc0%2BfBl%2BRl2YMByHKoYFU3iWscCRvTMviH7kn08x%2BZR%2FgDt3paNuwS80m8R8wlHh0BYhnx%2FJFtbdRJhWL5joymGIiMNwOKggMTW%2FTzS8zpKt8pT0JeCIMk8m1cjWaDKv3EUbCovLoVeZ8TSayB3bfJB1chtS%2Ft8W8C7dtm%2Fy3uRqbvL6wTFdeBGKScga%2FllsBdy%2BaA3q9IaOlKup9UEUUxp%2FfAE6NGaXuY64MnTpWNIv1jZ9Akuh0MQ6tZYXHpdcKOn6MxJ7zBN1TqYA%2FdMy0XH1b5pwc0j%2FbBVnNrsn%2BeVLyNzdSrlIV3ggFQJ63SjDvut7ABjqkAc8QPFYabFWGODyk%2FLx0D%2FCVddt1FVkxh8SZzbi%2B%2BxHc807ncAuYfX7m2BJFhO7d%2BN6PknNYplaKpfPUnT3i%2F8YJ72ccwRjAc0Og%2Fu50%2BRM5z4gZDHASUnvHGFgdynjysiuX2P4BQ2VbSbaxuihbdEhtFxJFmAAHncRYTYi0hwasXJiznQQ4p3%2FsbaRPTQDuyZeZ9KZWNWl%2FCGt7aac530j8sbc2&X-Amz-Signature=2a06a3d3f819e819519f4929b910d2a8d9142059ede98d41baecb2cb48a25558&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBUIALZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD4xtjGDLGvRtV%2BWzslz6Km1uwaVaxB8kHgeCemLovi8AIhANKvh3Fk7JpW0ykF41%2B6SXQzuh8SVkl%2FTP7TTfcM0vVPKv8DCBoQABoMNjM3NDIzMTgzODA1Igz1Vn%2FeuoemUMB5pYMq3AMw7bAwQpKkQWYwHI%2BTKzORVgtiFogHQLtYZbiK4AUUyOM0ITLSpytgexqmZdETFIr0hKMH35fF4XixEr0IaAr66AqPBOxJ0I98I2th6Ip2Ma8jmLO7KiPqVwyME2nXB6kMAeU%2B%2Fsnw0JoTP%2Fu7t8w%2B7zDMUb%2FIsNHhKANzhs%2BTPztu%2FSO7TE5UWkHV0FurnuIu847NxqRj0rshiOY6EIMyNeHFe8nFRCR8WBcBjXG%2FstYNGv0c5etslxo0%2BOgV%2F8n%2Ft8Kijd%2B7JpAM0Jy0Ud2b9uNl2EokwiNHBBlYdLB4HDJzmCKq7cIPOCpEajuSc0%2BfBl%2BRl2YMByHKoYFU3iWscCRvTMviH7kn08x%2BZR%2FgDt3paNuwS80m8R8wlHh0BYhnx%2FJFtbdRJhWL5joymGIiMNwOKggMTW%2FTzS8zpKt8pT0JeCIMk8m1cjWaDKv3EUbCovLoVeZ8TSayB3bfJB1chtS%2Ft8W8C7dtm%2Fy3uRqbvL6wTFdeBGKScga%2FllsBdy%2BaA3q9IaOlKup9UEUUxp%2FfAE6NGaXuY64MnTpWNIv1jZ9Akuh0MQ6tZYXHpdcKOn6MxJ7zBN1TqYA%2FdMy0XH1b5pwc0j%2FbBVnNrsn%2BeVLyNzdSrlIV3ggFQJ63SjDvut7ABjqkAc8QPFYabFWGODyk%2FLx0D%2FCVddt1FVkxh8SZzbi%2B%2BxHc807ncAuYfX7m2BJFhO7d%2BN6PknNYplaKpfPUnT3i%2F8YJ72ccwRjAc0Og%2Fu50%2BRM5z4gZDHASUnvHGFgdynjysiuX2P4BQ2VbSbaxuihbdEhtFxJFmAAHncRYTYi0hwasXJiznQQ4p3%2FsbaRPTQDuyZeZ9KZWNWl%2FCGt7aac530j8sbc2&X-Amz-Signature=696e1bba760ada3c9077a4ef609d4bdf5ece2d39a4473feed975a3538e2b0e09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBUIALZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD4xtjGDLGvRtV%2BWzslz6Km1uwaVaxB8kHgeCemLovi8AIhANKvh3Fk7JpW0ykF41%2B6SXQzuh8SVkl%2FTP7TTfcM0vVPKv8DCBoQABoMNjM3NDIzMTgzODA1Igz1Vn%2FeuoemUMB5pYMq3AMw7bAwQpKkQWYwHI%2BTKzORVgtiFogHQLtYZbiK4AUUyOM0ITLSpytgexqmZdETFIr0hKMH35fF4XixEr0IaAr66AqPBOxJ0I98I2th6Ip2Ma8jmLO7KiPqVwyME2nXB6kMAeU%2B%2Fsnw0JoTP%2Fu7t8w%2B7zDMUb%2FIsNHhKANzhs%2BTPztu%2FSO7TE5UWkHV0FurnuIu847NxqRj0rshiOY6EIMyNeHFe8nFRCR8WBcBjXG%2FstYNGv0c5etslxo0%2BOgV%2F8n%2Ft8Kijd%2B7JpAM0Jy0Ud2b9uNl2EokwiNHBBlYdLB4HDJzmCKq7cIPOCpEajuSc0%2BfBl%2BRl2YMByHKoYFU3iWscCRvTMviH7kn08x%2BZR%2FgDt3paNuwS80m8R8wlHh0BYhnx%2FJFtbdRJhWL5joymGIiMNwOKggMTW%2FTzS8zpKt8pT0JeCIMk8m1cjWaDKv3EUbCovLoVeZ8TSayB3bfJB1chtS%2Ft8W8C7dtm%2Fy3uRqbvL6wTFdeBGKScga%2FllsBdy%2BaA3q9IaOlKup9UEUUxp%2FfAE6NGaXuY64MnTpWNIv1jZ9Akuh0MQ6tZYXHpdcKOn6MxJ7zBN1TqYA%2FdMy0XH1b5pwc0j%2FbBVnNrsn%2BeVLyNzdSrlIV3ggFQJ63SjDvut7ABjqkAc8QPFYabFWGODyk%2FLx0D%2FCVddt1FVkxh8SZzbi%2B%2BxHc807ncAuYfX7m2BJFhO7d%2BN6PknNYplaKpfPUnT3i%2F8YJ72ccwRjAc0Og%2Fu50%2BRM5z4gZDHASUnvHGFgdynjysiuX2P4BQ2VbSbaxuihbdEhtFxJFmAAHncRYTYi0hwasXJiznQQ4p3%2FsbaRPTQDuyZeZ9KZWNWl%2FCGt7aac530j8sbc2&X-Amz-Signature=8ae54f1a72c560f803503f76620ad35647d940058e29f2b2a3422e206bedd3dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPBUIALZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD4xtjGDLGvRtV%2BWzslz6Km1uwaVaxB8kHgeCemLovi8AIhANKvh3Fk7JpW0ykF41%2B6SXQzuh8SVkl%2FTP7TTfcM0vVPKv8DCBoQABoMNjM3NDIzMTgzODA1Igz1Vn%2FeuoemUMB5pYMq3AMw7bAwQpKkQWYwHI%2BTKzORVgtiFogHQLtYZbiK4AUUyOM0ITLSpytgexqmZdETFIr0hKMH35fF4XixEr0IaAr66AqPBOxJ0I98I2th6Ip2Ma8jmLO7KiPqVwyME2nXB6kMAeU%2B%2Fsnw0JoTP%2Fu7t8w%2B7zDMUb%2FIsNHhKANzhs%2BTPztu%2FSO7TE5UWkHV0FurnuIu847NxqRj0rshiOY6EIMyNeHFe8nFRCR8WBcBjXG%2FstYNGv0c5etslxo0%2BOgV%2F8n%2Ft8Kijd%2B7JpAM0Jy0Ud2b9uNl2EokwiNHBBlYdLB4HDJzmCKq7cIPOCpEajuSc0%2BfBl%2BRl2YMByHKoYFU3iWscCRvTMviH7kn08x%2BZR%2FgDt3paNuwS80m8R8wlHh0BYhnx%2FJFtbdRJhWL5joymGIiMNwOKggMTW%2FTzS8zpKt8pT0JeCIMk8m1cjWaDKv3EUbCovLoVeZ8TSayB3bfJB1chtS%2Ft8W8C7dtm%2Fy3uRqbvL6wTFdeBGKScga%2FllsBdy%2BaA3q9IaOlKup9UEUUxp%2FfAE6NGaXuY64MnTpWNIv1jZ9Akuh0MQ6tZYXHpdcKOn6MxJ7zBN1TqYA%2FdMy0XH1b5pwc0j%2FbBVnNrsn%2BeVLyNzdSrlIV3ggFQJ63SjDvut7ABjqkAc8QPFYabFWGODyk%2FLx0D%2FCVddt1FVkxh8SZzbi%2B%2BxHc807ncAuYfX7m2BJFhO7d%2BN6PknNYplaKpfPUnT3i%2F8YJ72ccwRjAc0Og%2Fu50%2BRM5z4gZDHASUnvHGFgdynjysiuX2P4BQ2VbSbaxuihbdEhtFxJFmAAHncRYTYi0hwasXJiznQQ4p3%2FsbaRPTQDuyZeZ9KZWNWl%2FCGt7aac530j8sbc2&X-Amz-Signature=32cdff366daae0b0af8f104556784c4f5a9d5989153b19e142aeb1051344e892&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
