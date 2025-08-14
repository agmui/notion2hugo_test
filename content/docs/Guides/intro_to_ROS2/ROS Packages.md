---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F5POKCZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGqPp4LmLvDKahFru%2FFojAy7ZxHOLXEJzzQNVAsqsc6xAiEAuAG9YTXsA57NmIrK7zHS8q1PdHA1U8KINtMfCoykTWEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFQ5RWrVR2YT%2Ff10aircA55FCB%2BUnuS%2FWJV%2BWmNlzFafMu7%2Fmt0IH19s9a8P6BQoRv4BQfaf9lLcnzVwUE7xSYIAuNjahsdTai8BGVLjGGzbEFDB7gZiLlqmWd2ZP6ugeWP21fT26HZiAOcWPvfkDRFaYepxcUmF9hrALlGs8zYxfZyuVuSApDqmiArzvseICQqpGYtflXYjiUmaJx6lFHWYbK7ausioTWbaSd7%2BM7PjDbZOkyiyQjn%2BA2xxW13RyQnatpBMSQMKCQ%2BQ17Ic99eZ3qNAgI4s06RMYE6z5mxAGc1D9hj%2B8fHtEj2tca3eIxDvtS0bBDNE%2BBBlYmMi60GsmoYzIJBMvisxurdxi11GB2OQZ8QH8SF7bnPgCUJN0sO5VjsyKNJPQEcWF%2FYZlGU0%2BANFMZK5LDR%2BiuBV6SxSat6DdBA1glxicMsXyAxneRSVIG7%2FKBR0N1%2Ft05xNhTto3wjWLUi2o5EV%2B0VS5VFYfiOQKQKAKaX3rG5P6kqBuZQOsTVCuq7Hc9esti3vBSrydVHydB5yiBfacRLaXet%2BPcEiA1zlqW721k5AvlxfL0AtVEIb5YMMQjOaFHz30DTMQ85P1svS19hLQusRwyYKLxWKKtIpLLHvGrQBRxBxjFj8FhLEZg4pvFM9MIrC%2BMQGOqUBRkAQXAT9bvnK5A39200PGnxncFU0HI5fztwMz4kRUVERYIBMTlB6XR5nsvh8%2BfQzxq6kz6IgujmFa5y7TyogF%2FqCUXDEbIZ8sCBI96eHt%2FoqSFnPU7vjtJP3jJ9ohKnqt4QBocijqc75YhIGdM3foaKUVP8VHA1phTA%2BdpqK5Gve9z5dnHFqcMWRmxKKcrY2E9KQ2T0tMkH9674fzzCY%2BnMVBB9Q&X-Amz-Signature=a193f742e38924b011db98dd504e76737a8503120bb451fe616f9a1594ecb463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>
      <summary>package types</summary>
      packages can be either `C++` or python.
  </details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F5POKCZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGqPp4LmLvDKahFru%2FFojAy7ZxHOLXEJzzQNVAsqsc6xAiEAuAG9YTXsA57NmIrK7zHS8q1PdHA1U8KINtMfCoykTWEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFQ5RWrVR2YT%2Ff10aircA55FCB%2BUnuS%2FWJV%2BWmNlzFafMu7%2Fmt0IH19s9a8P6BQoRv4BQfaf9lLcnzVwUE7xSYIAuNjahsdTai8BGVLjGGzbEFDB7gZiLlqmWd2ZP6ugeWP21fT26HZiAOcWPvfkDRFaYepxcUmF9hrALlGs8zYxfZyuVuSApDqmiArzvseICQqpGYtflXYjiUmaJx6lFHWYbK7ausioTWbaSd7%2BM7PjDbZOkyiyQjn%2BA2xxW13RyQnatpBMSQMKCQ%2BQ17Ic99eZ3qNAgI4s06RMYE6z5mxAGc1D9hj%2B8fHtEj2tca3eIxDvtS0bBDNE%2BBBlYmMi60GsmoYzIJBMvisxurdxi11GB2OQZ8QH8SF7bnPgCUJN0sO5VjsyKNJPQEcWF%2FYZlGU0%2BANFMZK5LDR%2BiuBV6SxSat6DdBA1glxicMsXyAxneRSVIG7%2FKBR0N1%2Ft05xNhTto3wjWLUi2o5EV%2B0VS5VFYfiOQKQKAKaX3rG5P6kqBuZQOsTVCuq7Hc9esti3vBSrydVHydB5yiBfacRLaXet%2BPcEiA1zlqW721k5AvlxfL0AtVEIb5YMMQjOaFHz30DTMQ85P1svS19hLQusRwyYKLxWKKtIpLLHvGrQBRxBxjFj8FhLEZg4pvFM9MIrC%2BMQGOqUBRkAQXAT9bvnK5A39200PGnxncFU0HI5fztwMz4kRUVERYIBMTlB6XR5nsvh8%2BfQzxq6kz6IgujmFa5y7TyogF%2FqCUXDEbIZ8sCBI96eHt%2FoqSFnPU7vjtJP3jJ9ohKnqt4QBocijqc75YhIGdM3foaKUVP8VHA1phTA%2BdpqK5Gve9z5dnHFqcMWRmxKKcrY2E9KQ2T0tMkH9674fzzCY%2BnMVBB9Q&X-Amz-Signature=2d01c0b287f163293c491bb0918902e0cd843f03d89b42c3694f34b4fe44f450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F5POKCZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGqPp4LmLvDKahFru%2FFojAy7ZxHOLXEJzzQNVAsqsc6xAiEAuAG9YTXsA57NmIrK7zHS8q1PdHA1U8KINtMfCoykTWEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFQ5RWrVR2YT%2Ff10aircA55FCB%2BUnuS%2FWJV%2BWmNlzFafMu7%2Fmt0IH19s9a8P6BQoRv4BQfaf9lLcnzVwUE7xSYIAuNjahsdTai8BGVLjGGzbEFDB7gZiLlqmWd2ZP6ugeWP21fT26HZiAOcWPvfkDRFaYepxcUmF9hrALlGs8zYxfZyuVuSApDqmiArzvseICQqpGYtflXYjiUmaJx6lFHWYbK7ausioTWbaSd7%2BM7PjDbZOkyiyQjn%2BA2xxW13RyQnatpBMSQMKCQ%2BQ17Ic99eZ3qNAgI4s06RMYE6z5mxAGc1D9hj%2B8fHtEj2tca3eIxDvtS0bBDNE%2BBBlYmMi60GsmoYzIJBMvisxurdxi11GB2OQZ8QH8SF7bnPgCUJN0sO5VjsyKNJPQEcWF%2FYZlGU0%2BANFMZK5LDR%2BiuBV6SxSat6DdBA1glxicMsXyAxneRSVIG7%2FKBR0N1%2Ft05xNhTto3wjWLUi2o5EV%2B0VS5VFYfiOQKQKAKaX3rG5P6kqBuZQOsTVCuq7Hc9esti3vBSrydVHydB5yiBfacRLaXet%2BPcEiA1zlqW721k5AvlxfL0AtVEIb5YMMQjOaFHz30DTMQ85P1svS19hLQusRwyYKLxWKKtIpLLHvGrQBRxBxjFj8FhLEZg4pvFM9MIrC%2BMQGOqUBRkAQXAT9bvnK5A39200PGnxncFU0HI5fztwMz4kRUVERYIBMTlB6XR5nsvh8%2BfQzxq6kz6IgujmFa5y7TyogF%2FqCUXDEbIZ8sCBI96eHt%2FoqSFnPU7vjtJP3jJ9ohKnqt4QBocijqc75YhIGdM3foaKUVP8VHA1phTA%2BdpqK5Gve9z5dnHFqcMWRmxKKcrY2E9KQ2T0tMkH9674fzzCY%2BnMVBB9Q&X-Amz-Signature=f11a85b201600f5a08af86a22d113c9b5b80c1922aa22e6d2dcdcb3e7e11fe7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F5POKCZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGqPp4LmLvDKahFru%2FFojAy7ZxHOLXEJzzQNVAsqsc6xAiEAuAG9YTXsA57NmIrK7zHS8q1PdHA1U8KINtMfCoykTWEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFQ5RWrVR2YT%2Ff10aircA55FCB%2BUnuS%2FWJV%2BWmNlzFafMu7%2Fmt0IH19s9a8P6BQoRv4BQfaf9lLcnzVwUE7xSYIAuNjahsdTai8BGVLjGGzbEFDB7gZiLlqmWd2ZP6ugeWP21fT26HZiAOcWPvfkDRFaYepxcUmF9hrALlGs8zYxfZyuVuSApDqmiArzvseICQqpGYtflXYjiUmaJx6lFHWYbK7ausioTWbaSd7%2BM7PjDbZOkyiyQjn%2BA2xxW13RyQnatpBMSQMKCQ%2BQ17Ic99eZ3qNAgI4s06RMYE6z5mxAGc1D9hj%2B8fHtEj2tca3eIxDvtS0bBDNE%2BBBlYmMi60GsmoYzIJBMvisxurdxi11GB2OQZ8QH8SF7bnPgCUJN0sO5VjsyKNJPQEcWF%2FYZlGU0%2BANFMZK5LDR%2BiuBV6SxSat6DdBA1glxicMsXyAxneRSVIG7%2FKBR0N1%2Ft05xNhTto3wjWLUi2o5EV%2B0VS5VFYfiOQKQKAKaX3rG5P6kqBuZQOsTVCuq7Hc9esti3vBSrydVHydB5yiBfacRLaXet%2BPcEiA1zlqW721k5AvlxfL0AtVEIb5YMMQjOaFHz30DTMQ85P1svS19hLQusRwyYKLxWKKtIpLLHvGrQBRxBxjFj8FhLEZg4pvFM9MIrC%2BMQGOqUBRkAQXAT9bvnK5A39200PGnxncFU0HI5fztwMz4kRUVERYIBMTlB6XR5nsvh8%2BfQzxq6kz6IgujmFa5y7TyogF%2FqCUXDEbIZ8sCBI96eHt%2FoqSFnPU7vjtJP3jJ9ohKnqt4QBocijqc75YhIGdM3foaKUVP8VHA1phTA%2BdpqK5Gve9z5dnHFqcMWRmxKKcrY2E9KQ2T0tMkH9674fzzCY%2BnMVBB9Q&X-Amz-Signature=951dc53c1415cb88984995f44dafe7ebf7f7de13ea2cf7482899b1de4b3d2dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F5POKCZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGqPp4LmLvDKahFru%2FFojAy7ZxHOLXEJzzQNVAsqsc6xAiEAuAG9YTXsA57NmIrK7zHS8q1PdHA1U8KINtMfCoykTWEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFQ5RWrVR2YT%2Ff10aircA55FCB%2BUnuS%2FWJV%2BWmNlzFafMu7%2Fmt0IH19s9a8P6BQoRv4BQfaf9lLcnzVwUE7xSYIAuNjahsdTai8BGVLjGGzbEFDB7gZiLlqmWd2ZP6ugeWP21fT26HZiAOcWPvfkDRFaYepxcUmF9hrALlGs8zYxfZyuVuSApDqmiArzvseICQqpGYtflXYjiUmaJx6lFHWYbK7ausioTWbaSd7%2BM7PjDbZOkyiyQjn%2BA2xxW13RyQnatpBMSQMKCQ%2BQ17Ic99eZ3qNAgI4s06RMYE6z5mxAGc1D9hj%2B8fHtEj2tca3eIxDvtS0bBDNE%2BBBlYmMi60GsmoYzIJBMvisxurdxi11GB2OQZ8QH8SF7bnPgCUJN0sO5VjsyKNJPQEcWF%2FYZlGU0%2BANFMZK5LDR%2BiuBV6SxSat6DdBA1glxicMsXyAxneRSVIG7%2FKBR0N1%2Ft05xNhTto3wjWLUi2o5EV%2B0VS5VFYfiOQKQKAKaX3rG5P6kqBuZQOsTVCuq7Hc9esti3vBSrydVHydB5yiBfacRLaXet%2BPcEiA1zlqW721k5AvlxfL0AtVEIb5YMMQjOaFHz30DTMQ85P1svS19hLQusRwyYKLxWKKtIpLLHvGrQBRxBxjFj8FhLEZg4pvFM9MIrC%2BMQGOqUBRkAQXAT9bvnK5A39200PGnxncFU0HI5fztwMz4kRUVERYIBMTlB6XR5nsvh8%2BfQzxq6kz6IgujmFa5y7TyogF%2FqCUXDEbIZ8sCBI96eHt%2FoqSFnPU7vjtJP3jJ9ohKnqt4QBocijqc75YhIGdM3foaKUVP8VHA1phTA%2BdpqK5Gve9z5dnHFqcMWRmxKKcrY2E9KQ2T0tMkH9674fzzCY%2BnMVBB9Q&X-Amz-Signature=30e9ee33c6cd480750e9af3db1bdc026603b5b1fb9bd357461d0373f430ae4b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F5POKCZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGqPp4LmLvDKahFru%2FFojAy7ZxHOLXEJzzQNVAsqsc6xAiEAuAG9YTXsA57NmIrK7zHS8q1PdHA1U8KINtMfCoykTWEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFQ5RWrVR2YT%2Ff10aircA55FCB%2BUnuS%2FWJV%2BWmNlzFafMu7%2Fmt0IH19s9a8P6BQoRv4BQfaf9lLcnzVwUE7xSYIAuNjahsdTai8BGVLjGGzbEFDB7gZiLlqmWd2ZP6ugeWP21fT26HZiAOcWPvfkDRFaYepxcUmF9hrALlGs8zYxfZyuVuSApDqmiArzvseICQqpGYtflXYjiUmaJx6lFHWYbK7ausioTWbaSd7%2BM7PjDbZOkyiyQjn%2BA2xxW13RyQnatpBMSQMKCQ%2BQ17Ic99eZ3qNAgI4s06RMYE6z5mxAGc1D9hj%2B8fHtEj2tca3eIxDvtS0bBDNE%2BBBlYmMi60GsmoYzIJBMvisxurdxi11GB2OQZ8QH8SF7bnPgCUJN0sO5VjsyKNJPQEcWF%2FYZlGU0%2BANFMZK5LDR%2BiuBV6SxSat6DdBA1glxicMsXyAxneRSVIG7%2FKBR0N1%2Ft05xNhTto3wjWLUi2o5EV%2B0VS5VFYfiOQKQKAKaX3rG5P6kqBuZQOsTVCuq7Hc9esti3vBSrydVHydB5yiBfacRLaXet%2BPcEiA1zlqW721k5AvlxfL0AtVEIb5YMMQjOaFHz30DTMQ85P1svS19hLQusRwyYKLxWKKtIpLLHvGrQBRxBxjFj8FhLEZg4pvFM9MIrC%2BMQGOqUBRkAQXAT9bvnK5A39200PGnxncFU0HI5fztwMz4kRUVERYIBMTlB6XR5nsvh8%2BfQzxq6kz6IgujmFa5y7TyogF%2FqCUXDEbIZ8sCBI96eHt%2FoqSFnPU7vjtJP3jJ9ohKnqt4QBocijqc75YhIGdM3foaKUVP8VHA1phTA%2BdpqK5Gve9z5dnHFqcMWRmxKKcrY2E9KQ2T0tMkH9674fzzCY%2BnMVBB9Q&X-Amz-Signature=c49e86b1bb67f970a76afa121df03c0ea92744e78b054ba617c952bdb0ca4ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F5POKCZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGqPp4LmLvDKahFru%2FFojAy7ZxHOLXEJzzQNVAsqsc6xAiEAuAG9YTXsA57NmIrK7zHS8q1PdHA1U8KINtMfCoykTWEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFQ5RWrVR2YT%2Ff10aircA55FCB%2BUnuS%2FWJV%2BWmNlzFafMu7%2Fmt0IH19s9a8P6BQoRv4BQfaf9lLcnzVwUE7xSYIAuNjahsdTai8BGVLjGGzbEFDB7gZiLlqmWd2ZP6ugeWP21fT26HZiAOcWPvfkDRFaYepxcUmF9hrALlGs8zYxfZyuVuSApDqmiArzvseICQqpGYtflXYjiUmaJx6lFHWYbK7ausioTWbaSd7%2BM7PjDbZOkyiyQjn%2BA2xxW13RyQnatpBMSQMKCQ%2BQ17Ic99eZ3qNAgI4s06RMYE6z5mxAGc1D9hj%2B8fHtEj2tca3eIxDvtS0bBDNE%2BBBlYmMi60GsmoYzIJBMvisxurdxi11GB2OQZ8QH8SF7bnPgCUJN0sO5VjsyKNJPQEcWF%2FYZlGU0%2BANFMZK5LDR%2BiuBV6SxSat6DdBA1glxicMsXyAxneRSVIG7%2FKBR0N1%2Ft05xNhTto3wjWLUi2o5EV%2B0VS5VFYfiOQKQKAKaX3rG5P6kqBuZQOsTVCuq7Hc9esti3vBSrydVHydB5yiBfacRLaXet%2BPcEiA1zlqW721k5AvlxfL0AtVEIb5YMMQjOaFHz30DTMQ85P1svS19hLQusRwyYKLxWKKtIpLLHvGrQBRxBxjFj8FhLEZg4pvFM9MIrC%2BMQGOqUBRkAQXAT9bvnK5A39200PGnxncFU0HI5fztwMz4kRUVERYIBMTlB6XR5nsvh8%2BfQzxq6kz6IgujmFa5y7TyogF%2FqCUXDEbIZ8sCBI96eHt%2FoqSFnPU7vjtJP3jJ9ohKnqt4QBocijqc75YhIGdM3foaKUVP8VHA1phTA%2BdpqK5Gve9z5dnHFqcMWRmxKKcrY2E9KQ2T0tMkH9674fzzCY%2BnMVBB9Q&X-Amz-Signature=f4434bcbcbe6df2e874c125c7495497cbda1d71f8d0b469d87fa187518aa6ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
