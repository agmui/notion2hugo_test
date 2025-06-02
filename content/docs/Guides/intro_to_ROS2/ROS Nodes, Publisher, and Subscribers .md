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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USZTJ5H%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBZSUwuMMwXmUXDfkCoFXe5qD5LkkuAdTzXIALQVdNe%2BAiEAqaoEzCr%2BgaE4Pbp%2Bitm7qCkJDg25GwSn9%2F7w%2Bxj9za4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHzMjo9YnimcJiQ0CrcA%2B3TMSzzNkpUlavX6lRp31kcUMF5aV7U9eW4PBFB9XriZvHUVdgEGm%2B%2FETdX%2F0FR9yOvJxoh1cUm5ldwnawwgpgfTRs7EgcG9htK4kCyDYSzKU3lXqDk0dwADzxOUGqFjox3X1ZNdj580b4BslDfbVgSJ8qPjR%2BYgzRd9t%2FD%2Bx6vRQZ7XWWtY4VafFSBiYOhXa5DRbwAFJT3GMMcqE9srOaVDQAMZ9dhP2%2BBDK93pdMy3EE3g%2FWnwAQuiuyrRSNJ5eWIFy8AD7tht%2BmHTVxXh2X%2F%2B%2BaTS9GC4DXvaNiiw5XN9Dn%2BbO8jDlcNJMucdoZr47tXrlxO7lPQ4X12EUSgUKt5%2BrZtG491ys%2BwVvmcjNcAwPDP2Ezirhnldb2cJwTOz07RrXoYqaNFDHnrbZTCHfjC%2BP6805iAY7PxScshxoQ2zl2KgBeBRXs%2BDoxFto4p7xwHBHGVAw%2BFgHnJ%2F61R7PYNtv1OcFxXsrcOTJP4zPbgr8ZAn6bYYbt8fhS1eYeigocGDj7FElKz4o6roodEH%2B6dwqQz%2BE4MCF%2FrfXlOVmq04h0Bg9ognj%2Bg%2BIAi4cWr2AvtUxOoEKwpiaYyaWcCbAw%2BXTFveCIGrzAfTpw2206u3CoJq9lSSL%2Fb5oZIMI6v9MEGOqUB%2B82aAzMov6%2Fb%2FjNtvq2Iu%2B6kNguvUrgIgIGj4EaAZmZbxIMzLGTbkqUsdaako%2BCiYrL7YAjC4z8wNg5yX947hOBexZirkKNgXoGZl2vPTCFMsu%2FkyB0A2nGaZzaxolKVnL7mPlu5%2FOxBwDh%2BSHzogx5wBmDyi5cemxvmUKS6pNVBJfLakNnVNsYB4ZpvYzAbknDGYuF1Tt%2BrhmQGvX5gxABTzWI%2B&X-Amz-Signature=b78df1d77590664b2008075fc588ceb8262fb00eb69c4a768ecdc5314972cd93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USZTJ5H%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBZSUwuMMwXmUXDfkCoFXe5qD5LkkuAdTzXIALQVdNe%2BAiEAqaoEzCr%2BgaE4Pbp%2Bitm7qCkJDg25GwSn9%2F7w%2Bxj9za4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHzMjo9YnimcJiQ0CrcA%2B3TMSzzNkpUlavX6lRp31kcUMF5aV7U9eW4PBFB9XriZvHUVdgEGm%2B%2FETdX%2F0FR9yOvJxoh1cUm5ldwnawwgpgfTRs7EgcG9htK4kCyDYSzKU3lXqDk0dwADzxOUGqFjox3X1ZNdj580b4BslDfbVgSJ8qPjR%2BYgzRd9t%2FD%2Bx6vRQZ7XWWtY4VafFSBiYOhXa5DRbwAFJT3GMMcqE9srOaVDQAMZ9dhP2%2BBDK93pdMy3EE3g%2FWnwAQuiuyrRSNJ5eWIFy8AD7tht%2BmHTVxXh2X%2F%2B%2BaTS9GC4DXvaNiiw5XN9Dn%2BbO8jDlcNJMucdoZr47tXrlxO7lPQ4X12EUSgUKt5%2BrZtG491ys%2BwVvmcjNcAwPDP2Ezirhnldb2cJwTOz07RrXoYqaNFDHnrbZTCHfjC%2BP6805iAY7PxScshxoQ2zl2KgBeBRXs%2BDoxFto4p7xwHBHGVAw%2BFgHnJ%2F61R7PYNtv1OcFxXsrcOTJP4zPbgr8ZAn6bYYbt8fhS1eYeigocGDj7FElKz4o6roodEH%2B6dwqQz%2BE4MCF%2FrfXlOVmq04h0Bg9ognj%2Bg%2BIAi4cWr2AvtUxOoEKwpiaYyaWcCbAw%2BXTFveCIGrzAfTpw2206u3CoJq9lSSL%2Fb5oZIMI6v9MEGOqUB%2B82aAzMov6%2Fb%2FjNtvq2Iu%2B6kNguvUrgIgIGj4EaAZmZbxIMzLGTbkqUsdaako%2BCiYrL7YAjC4z8wNg5yX947hOBexZirkKNgXoGZl2vPTCFMsu%2FkyB0A2nGaZzaxolKVnL7mPlu5%2FOxBwDh%2BSHzogx5wBmDyi5cemxvmUKS6pNVBJfLakNnVNsYB4ZpvYzAbknDGYuF1Tt%2BrhmQGvX5gxABTzWI%2B&X-Amz-Signature=6154cea35f21db33f114f5b90abb63a844cd8174ae333b2cd006b37f636b49f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USZTJ5H%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBZSUwuMMwXmUXDfkCoFXe5qD5LkkuAdTzXIALQVdNe%2BAiEAqaoEzCr%2BgaE4Pbp%2Bitm7qCkJDg25GwSn9%2F7w%2Bxj9za4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHzMjo9YnimcJiQ0CrcA%2B3TMSzzNkpUlavX6lRp31kcUMF5aV7U9eW4PBFB9XriZvHUVdgEGm%2B%2FETdX%2F0FR9yOvJxoh1cUm5ldwnawwgpgfTRs7EgcG9htK4kCyDYSzKU3lXqDk0dwADzxOUGqFjox3X1ZNdj580b4BslDfbVgSJ8qPjR%2BYgzRd9t%2FD%2Bx6vRQZ7XWWtY4VafFSBiYOhXa5DRbwAFJT3GMMcqE9srOaVDQAMZ9dhP2%2BBDK93pdMy3EE3g%2FWnwAQuiuyrRSNJ5eWIFy8AD7tht%2BmHTVxXh2X%2F%2B%2BaTS9GC4DXvaNiiw5XN9Dn%2BbO8jDlcNJMucdoZr47tXrlxO7lPQ4X12EUSgUKt5%2BrZtG491ys%2BwVvmcjNcAwPDP2Ezirhnldb2cJwTOz07RrXoYqaNFDHnrbZTCHfjC%2BP6805iAY7PxScshxoQ2zl2KgBeBRXs%2BDoxFto4p7xwHBHGVAw%2BFgHnJ%2F61R7PYNtv1OcFxXsrcOTJP4zPbgr8ZAn6bYYbt8fhS1eYeigocGDj7FElKz4o6roodEH%2B6dwqQz%2BE4MCF%2FrfXlOVmq04h0Bg9ognj%2Bg%2BIAi4cWr2AvtUxOoEKwpiaYyaWcCbAw%2BXTFveCIGrzAfTpw2206u3CoJq9lSSL%2Fb5oZIMI6v9MEGOqUB%2B82aAzMov6%2Fb%2FjNtvq2Iu%2B6kNguvUrgIgIGj4EaAZmZbxIMzLGTbkqUsdaako%2BCiYrL7YAjC4z8wNg5yX947hOBexZirkKNgXoGZl2vPTCFMsu%2FkyB0A2nGaZzaxolKVnL7mPlu5%2FOxBwDh%2BSHzogx5wBmDyi5cemxvmUKS6pNVBJfLakNnVNsYB4ZpvYzAbknDGYuF1Tt%2BrhmQGvX5gxABTzWI%2B&X-Amz-Signature=4667261a67cfa294639d5877efa18ff88fe4e71d1afc3d409a31d6a442f3d557&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USZTJ5H%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBZSUwuMMwXmUXDfkCoFXe5qD5LkkuAdTzXIALQVdNe%2BAiEAqaoEzCr%2BgaE4Pbp%2Bitm7qCkJDg25GwSn9%2F7w%2Bxj9za4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHzMjo9YnimcJiQ0CrcA%2B3TMSzzNkpUlavX6lRp31kcUMF5aV7U9eW4PBFB9XriZvHUVdgEGm%2B%2FETdX%2F0FR9yOvJxoh1cUm5ldwnawwgpgfTRs7EgcG9htK4kCyDYSzKU3lXqDk0dwADzxOUGqFjox3X1ZNdj580b4BslDfbVgSJ8qPjR%2BYgzRd9t%2FD%2Bx6vRQZ7XWWtY4VafFSBiYOhXa5DRbwAFJT3GMMcqE9srOaVDQAMZ9dhP2%2BBDK93pdMy3EE3g%2FWnwAQuiuyrRSNJ5eWIFy8AD7tht%2BmHTVxXh2X%2F%2B%2BaTS9GC4DXvaNiiw5XN9Dn%2BbO8jDlcNJMucdoZr47tXrlxO7lPQ4X12EUSgUKt5%2BrZtG491ys%2BwVvmcjNcAwPDP2Ezirhnldb2cJwTOz07RrXoYqaNFDHnrbZTCHfjC%2BP6805iAY7PxScshxoQ2zl2KgBeBRXs%2BDoxFto4p7xwHBHGVAw%2BFgHnJ%2F61R7PYNtv1OcFxXsrcOTJP4zPbgr8ZAn6bYYbt8fhS1eYeigocGDj7FElKz4o6roodEH%2B6dwqQz%2BE4MCF%2FrfXlOVmq04h0Bg9ognj%2Bg%2BIAi4cWr2AvtUxOoEKwpiaYyaWcCbAw%2BXTFveCIGrzAfTpw2206u3CoJq9lSSL%2Fb5oZIMI6v9MEGOqUB%2B82aAzMov6%2Fb%2FjNtvq2Iu%2B6kNguvUrgIgIGj4EaAZmZbxIMzLGTbkqUsdaako%2BCiYrL7YAjC4z8wNg5yX947hOBexZirkKNgXoGZl2vPTCFMsu%2FkyB0A2nGaZzaxolKVnL7mPlu5%2FOxBwDh%2BSHzogx5wBmDyi5cemxvmUKS6pNVBJfLakNnVNsYB4ZpvYzAbknDGYuF1Tt%2BrhmQGvX5gxABTzWI%2B&X-Amz-Signature=2781509907c0b6f54d95d46a9d5ecb9094e863e988396a5010c7cb739fa95c85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USZTJ5H%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBZSUwuMMwXmUXDfkCoFXe5qD5LkkuAdTzXIALQVdNe%2BAiEAqaoEzCr%2BgaE4Pbp%2Bitm7qCkJDg25GwSn9%2F7w%2Bxj9za4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHzMjo9YnimcJiQ0CrcA%2B3TMSzzNkpUlavX6lRp31kcUMF5aV7U9eW4PBFB9XriZvHUVdgEGm%2B%2FETdX%2F0FR9yOvJxoh1cUm5ldwnawwgpgfTRs7EgcG9htK4kCyDYSzKU3lXqDk0dwADzxOUGqFjox3X1ZNdj580b4BslDfbVgSJ8qPjR%2BYgzRd9t%2FD%2Bx6vRQZ7XWWtY4VafFSBiYOhXa5DRbwAFJT3GMMcqE9srOaVDQAMZ9dhP2%2BBDK93pdMy3EE3g%2FWnwAQuiuyrRSNJ5eWIFy8AD7tht%2BmHTVxXh2X%2F%2B%2BaTS9GC4DXvaNiiw5XN9Dn%2BbO8jDlcNJMucdoZr47tXrlxO7lPQ4X12EUSgUKt5%2BrZtG491ys%2BwVvmcjNcAwPDP2Ezirhnldb2cJwTOz07RrXoYqaNFDHnrbZTCHfjC%2BP6805iAY7PxScshxoQ2zl2KgBeBRXs%2BDoxFto4p7xwHBHGVAw%2BFgHnJ%2F61R7PYNtv1OcFxXsrcOTJP4zPbgr8ZAn6bYYbt8fhS1eYeigocGDj7FElKz4o6roodEH%2B6dwqQz%2BE4MCF%2FrfXlOVmq04h0Bg9ognj%2Bg%2BIAi4cWr2AvtUxOoEKwpiaYyaWcCbAw%2BXTFveCIGrzAfTpw2206u3CoJq9lSSL%2Fb5oZIMI6v9MEGOqUB%2B82aAzMov6%2Fb%2FjNtvq2Iu%2B6kNguvUrgIgIGj4EaAZmZbxIMzLGTbkqUsdaako%2BCiYrL7YAjC4z8wNg5yX947hOBexZirkKNgXoGZl2vPTCFMsu%2FkyB0A2nGaZzaxolKVnL7mPlu5%2FOxBwDh%2BSHzogx5wBmDyi5cemxvmUKS6pNVBJfLakNnVNsYB4ZpvYzAbknDGYuF1Tt%2BrhmQGvX5gxABTzWI%2B&X-Amz-Signature=efb338753c089583d99766f26154100c2351839266463350c24aa2446b613cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USZTJ5H%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBZSUwuMMwXmUXDfkCoFXe5qD5LkkuAdTzXIALQVdNe%2BAiEAqaoEzCr%2BgaE4Pbp%2Bitm7qCkJDg25GwSn9%2F7w%2Bxj9za4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHzMjo9YnimcJiQ0CrcA%2B3TMSzzNkpUlavX6lRp31kcUMF5aV7U9eW4PBFB9XriZvHUVdgEGm%2B%2FETdX%2F0FR9yOvJxoh1cUm5ldwnawwgpgfTRs7EgcG9htK4kCyDYSzKU3lXqDk0dwADzxOUGqFjox3X1ZNdj580b4BslDfbVgSJ8qPjR%2BYgzRd9t%2FD%2Bx6vRQZ7XWWtY4VafFSBiYOhXa5DRbwAFJT3GMMcqE9srOaVDQAMZ9dhP2%2BBDK93pdMy3EE3g%2FWnwAQuiuyrRSNJ5eWIFy8AD7tht%2BmHTVxXh2X%2F%2B%2BaTS9GC4DXvaNiiw5XN9Dn%2BbO8jDlcNJMucdoZr47tXrlxO7lPQ4X12EUSgUKt5%2BrZtG491ys%2BwVvmcjNcAwPDP2Ezirhnldb2cJwTOz07RrXoYqaNFDHnrbZTCHfjC%2BP6805iAY7PxScshxoQ2zl2KgBeBRXs%2BDoxFto4p7xwHBHGVAw%2BFgHnJ%2F61R7PYNtv1OcFxXsrcOTJP4zPbgr8ZAn6bYYbt8fhS1eYeigocGDj7FElKz4o6roodEH%2B6dwqQz%2BE4MCF%2FrfXlOVmq04h0Bg9ognj%2Bg%2BIAi4cWr2AvtUxOoEKwpiaYyaWcCbAw%2BXTFveCIGrzAfTpw2206u3CoJq9lSSL%2Fb5oZIMI6v9MEGOqUB%2B82aAzMov6%2Fb%2FjNtvq2Iu%2B6kNguvUrgIgIGj4EaAZmZbxIMzLGTbkqUsdaako%2BCiYrL7YAjC4z8wNg5yX947hOBexZirkKNgXoGZl2vPTCFMsu%2FkyB0A2nGaZzaxolKVnL7mPlu5%2FOxBwDh%2BSHzogx5wBmDyi5cemxvmUKS6pNVBJfLakNnVNsYB4ZpvYzAbknDGYuF1Tt%2BrhmQGvX5gxABTzWI%2B&X-Amz-Signature=40f8b672cc1e187bca8b81d3ab1dfdd4bbc3e7954089e046c4738984f5d7e873&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USZTJ5H%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBZSUwuMMwXmUXDfkCoFXe5qD5LkkuAdTzXIALQVdNe%2BAiEAqaoEzCr%2BgaE4Pbp%2Bitm7qCkJDg25GwSn9%2F7w%2Bxj9za4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHzMjo9YnimcJiQ0CrcA%2B3TMSzzNkpUlavX6lRp31kcUMF5aV7U9eW4PBFB9XriZvHUVdgEGm%2B%2FETdX%2F0FR9yOvJxoh1cUm5ldwnawwgpgfTRs7EgcG9htK4kCyDYSzKU3lXqDk0dwADzxOUGqFjox3X1ZNdj580b4BslDfbVgSJ8qPjR%2BYgzRd9t%2FD%2Bx6vRQZ7XWWtY4VafFSBiYOhXa5DRbwAFJT3GMMcqE9srOaVDQAMZ9dhP2%2BBDK93pdMy3EE3g%2FWnwAQuiuyrRSNJ5eWIFy8AD7tht%2BmHTVxXh2X%2F%2B%2BaTS9GC4DXvaNiiw5XN9Dn%2BbO8jDlcNJMucdoZr47tXrlxO7lPQ4X12EUSgUKt5%2BrZtG491ys%2BwVvmcjNcAwPDP2Ezirhnldb2cJwTOz07RrXoYqaNFDHnrbZTCHfjC%2BP6805iAY7PxScshxoQ2zl2KgBeBRXs%2BDoxFto4p7xwHBHGVAw%2BFgHnJ%2F61R7PYNtv1OcFxXsrcOTJP4zPbgr8ZAn6bYYbt8fhS1eYeigocGDj7FElKz4o6roodEH%2B6dwqQz%2BE4MCF%2FrfXlOVmq04h0Bg9ognj%2Bg%2BIAi4cWr2AvtUxOoEKwpiaYyaWcCbAw%2BXTFveCIGrzAfTpw2206u3CoJq9lSSL%2Fb5oZIMI6v9MEGOqUB%2B82aAzMov6%2Fb%2FjNtvq2Iu%2B6kNguvUrgIgIGj4EaAZmZbxIMzLGTbkqUsdaako%2BCiYrL7YAjC4z8wNg5yX947hOBexZirkKNgXoGZl2vPTCFMsu%2FkyB0A2nGaZzaxolKVnL7mPlu5%2FOxBwDh%2BSHzogx5wBmDyi5cemxvmUKS6pNVBJfLakNnVNsYB4ZpvYzAbknDGYuF1Tt%2BrhmQGvX5gxABTzWI%2B&X-Amz-Signature=96592d010d58b5909b2002b22a03ccfed8710bbd02998d723677954c328fe047&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USZTJ5H%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBZSUwuMMwXmUXDfkCoFXe5qD5LkkuAdTzXIALQVdNe%2BAiEAqaoEzCr%2BgaE4Pbp%2Bitm7qCkJDg25GwSn9%2F7w%2Bxj9za4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHzMjo9YnimcJiQ0CrcA%2B3TMSzzNkpUlavX6lRp31kcUMF5aV7U9eW4PBFB9XriZvHUVdgEGm%2B%2FETdX%2F0FR9yOvJxoh1cUm5ldwnawwgpgfTRs7EgcG9htK4kCyDYSzKU3lXqDk0dwADzxOUGqFjox3X1ZNdj580b4BslDfbVgSJ8qPjR%2BYgzRd9t%2FD%2Bx6vRQZ7XWWtY4VafFSBiYOhXa5DRbwAFJT3GMMcqE9srOaVDQAMZ9dhP2%2BBDK93pdMy3EE3g%2FWnwAQuiuyrRSNJ5eWIFy8AD7tht%2BmHTVxXh2X%2F%2B%2BaTS9GC4DXvaNiiw5XN9Dn%2BbO8jDlcNJMucdoZr47tXrlxO7lPQ4X12EUSgUKt5%2BrZtG491ys%2BwVvmcjNcAwPDP2Ezirhnldb2cJwTOz07RrXoYqaNFDHnrbZTCHfjC%2BP6805iAY7PxScshxoQ2zl2KgBeBRXs%2BDoxFto4p7xwHBHGVAw%2BFgHnJ%2F61R7PYNtv1OcFxXsrcOTJP4zPbgr8ZAn6bYYbt8fhS1eYeigocGDj7FElKz4o6roodEH%2B6dwqQz%2BE4MCF%2FrfXlOVmq04h0Bg9ognj%2Bg%2BIAi4cWr2AvtUxOoEKwpiaYyaWcCbAw%2BXTFveCIGrzAfTpw2206u3CoJq9lSSL%2Fb5oZIMI6v9MEGOqUB%2B82aAzMov6%2Fb%2FjNtvq2Iu%2B6kNguvUrgIgIGj4EaAZmZbxIMzLGTbkqUsdaako%2BCiYrL7YAjC4z8wNg5yX947hOBexZirkKNgXoGZl2vPTCFMsu%2FkyB0A2nGaZzaxolKVnL7mPlu5%2FOxBwDh%2BSHzogx5wBmDyi5cemxvmUKS6pNVBJfLakNnVNsYB4ZpvYzAbknDGYuF1Tt%2BrhmQGvX5gxABTzWI%2B&X-Amz-Signature=f30ad1f621cba750420fd3e5838461b7d8d71a4ff75572a012afaeed8a26cc55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
