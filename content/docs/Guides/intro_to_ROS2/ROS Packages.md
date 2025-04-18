---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
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

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3QYQFV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ4ZgCIHXdVY09tcHowbGuPDxKIo%2BsHc7auTktbjLYRAiAFDG7AqXuxpd3wr7bs1WT4NJpgKGPbgs%2BVXMoCQMsNrir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMs65op8y2REL4ieGFKtwDGPQnZ6KkTd87YpCsm8Dg029%2BJrxNqONFSlNgSb2TGHVJTg5R2soqRVvRoD3YZHzMnDx6ceo7sRswOXZVxhh8jJi0u2wULRz1Vr1o8EV0%2BDWHNVgL7ERomSVtZGh3HHmd6AJTCML6UJz8WrovgNUeSKxRgUhqoUMtQI5%2F1ba7gNs%2FRRhc1W5jGhSju1PWZUscltNPvGAXJIusrv%2FVVZC5oZhaxz9pwUUc4AU0xWbvfTZzAOqm0IsiwbxgBDidLzv3qHsxTZL%2F8GMjKyd00NL4wDQnjl%2BR2IPAX%2B4%2FBA6CyxQsMDdtzGedAF%2Bod%2Bi%2BQBW4Njr1A1WLbP7TGhbUfvJssOdDwrnLqlgln4LM%2F09dw81ncSLODjrI%2BAOgJYkxuf%2FGj9YR3OpKiF%2FDygSltxkx0kS8CK8SnQ6DVTuZblggR86qJ8tiKo28EE6AlRW2VeTZ7qcmfgxVXoEP8oO%2FuvATZDHGdnyRrUxRExXndQNd20DBdVKGfFDYJBbJOLqn6qjBbvuqvk9GGh9MdLZ%2FdClr0HukYkiKWSt7IYOSZZAYTc4QKHf3FCIlylRhay1zc2iRfuQeAbj7fbS%2FHC%2BUSjUUkIS9ZmVn44tV9XRqKHVdENapA3SP6tTlxLQdOtcww6CGwAY6pgGjrSIjmKJ6sW%2FBtQhQv5h1wo2Lzu%2BEf9CktNjkvlFH9UdqmH0sGsdml9Y5HKEEhcGzauT%2BIED%2B5Zc3cxgKWF4qIylP9rl%2BERcUNL3jZpszPvg952eDdcr8tAg3BvZ9VHnIeZJ6z44ggpB8Zwlky5cHW1XNm3PPY4HNF%2BpjdWci1kyk%2FuiyfdoGwGtdj%2BLAd%2BeKTtWZwwJeSMZfSpCbCh1uo6OaDeXU&X-Amz-Signature=3f71d3464ddaca5ad9c506b0ff67c3b07e7f81f2e7f1a7ea274791f47aed6fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

the intern file structure is different for each but for this guide we will stick to creating python packages

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3QYQFV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ4ZgCIHXdVY09tcHowbGuPDxKIo%2BsHc7auTktbjLYRAiAFDG7AqXuxpd3wr7bs1WT4NJpgKGPbgs%2BVXMoCQMsNrir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMs65op8y2REL4ieGFKtwDGPQnZ6KkTd87YpCsm8Dg029%2BJrxNqONFSlNgSb2TGHVJTg5R2soqRVvRoD3YZHzMnDx6ceo7sRswOXZVxhh8jJi0u2wULRz1Vr1o8EV0%2BDWHNVgL7ERomSVtZGh3HHmd6AJTCML6UJz8WrovgNUeSKxRgUhqoUMtQI5%2F1ba7gNs%2FRRhc1W5jGhSju1PWZUscltNPvGAXJIusrv%2FVVZC5oZhaxz9pwUUc4AU0xWbvfTZzAOqm0IsiwbxgBDidLzv3qHsxTZL%2F8GMjKyd00NL4wDQnjl%2BR2IPAX%2B4%2FBA6CyxQsMDdtzGedAF%2Bod%2Bi%2BQBW4Njr1A1WLbP7TGhbUfvJssOdDwrnLqlgln4LM%2F09dw81ncSLODjrI%2BAOgJYkxuf%2FGj9YR3OpKiF%2FDygSltxkx0kS8CK8SnQ6DVTuZblggR86qJ8tiKo28EE6AlRW2VeTZ7qcmfgxVXoEP8oO%2FuvATZDHGdnyRrUxRExXndQNd20DBdVKGfFDYJBbJOLqn6qjBbvuqvk9GGh9MdLZ%2FdClr0HukYkiKWSt7IYOSZZAYTc4QKHf3FCIlylRhay1zc2iRfuQeAbj7fbS%2FHC%2BUSjUUkIS9ZmVn44tV9XRqKHVdENapA3SP6tTlxLQdOtcww6CGwAY6pgGjrSIjmKJ6sW%2FBtQhQv5h1wo2Lzu%2BEf9CktNjkvlFH9UdqmH0sGsdml9Y5HKEEhcGzauT%2BIED%2B5Zc3cxgKWF4qIylP9rl%2BERcUNL3jZpszPvg952eDdcr8tAg3BvZ9VHnIeZJ6z44ggpB8Zwlky5cHW1XNm3PPY4HNF%2BpjdWci1kyk%2FuiyfdoGwGtdj%2BLAd%2BeKTtWZwwJeSMZfSpCbCh1uo6OaDeXU&X-Amz-Signature=41b02613228587f1042ab24a6e1c5f8f50097c2be86d0e7870bcab3cf8d5edb0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3QYQFV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ4ZgCIHXdVY09tcHowbGuPDxKIo%2BsHc7auTktbjLYRAiAFDG7AqXuxpd3wr7bs1WT4NJpgKGPbgs%2BVXMoCQMsNrir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMs65op8y2REL4ieGFKtwDGPQnZ6KkTd87YpCsm8Dg029%2BJrxNqONFSlNgSb2TGHVJTg5R2soqRVvRoD3YZHzMnDx6ceo7sRswOXZVxhh8jJi0u2wULRz1Vr1o8EV0%2BDWHNVgL7ERomSVtZGh3HHmd6AJTCML6UJz8WrovgNUeSKxRgUhqoUMtQI5%2F1ba7gNs%2FRRhc1W5jGhSju1PWZUscltNPvGAXJIusrv%2FVVZC5oZhaxz9pwUUc4AU0xWbvfTZzAOqm0IsiwbxgBDidLzv3qHsxTZL%2F8GMjKyd00NL4wDQnjl%2BR2IPAX%2B4%2FBA6CyxQsMDdtzGedAF%2Bod%2Bi%2BQBW4Njr1A1WLbP7TGhbUfvJssOdDwrnLqlgln4LM%2F09dw81ncSLODjrI%2BAOgJYkxuf%2FGj9YR3OpKiF%2FDygSltxkx0kS8CK8SnQ6DVTuZblggR86qJ8tiKo28EE6AlRW2VeTZ7qcmfgxVXoEP8oO%2FuvATZDHGdnyRrUxRExXndQNd20DBdVKGfFDYJBbJOLqn6qjBbvuqvk9GGh9MdLZ%2FdClr0HukYkiKWSt7IYOSZZAYTc4QKHf3FCIlylRhay1zc2iRfuQeAbj7fbS%2FHC%2BUSjUUkIS9ZmVn44tV9XRqKHVdENapA3SP6tTlxLQdOtcww6CGwAY6pgGjrSIjmKJ6sW%2FBtQhQv5h1wo2Lzu%2BEf9CktNjkvlFH9UdqmH0sGsdml9Y5HKEEhcGzauT%2BIED%2B5Zc3cxgKWF4qIylP9rl%2BERcUNL3jZpszPvg952eDdcr8tAg3BvZ9VHnIeZJ6z44ggpB8Zwlky5cHW1XNm3PPY4HNF%2BpjdWci1kyk%2FuiyfdoGwGtdj%2BLAd%2BeKTtWZwwJeSMZfSpCbCh1uo6OaDeXU&X-Amz-Signature=1be7ffc67f62c26af2b29d1798980f0ef3e3f379d5555cf1a027815d992b14d3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3QYQFV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ4ZgCIHXdVY09tcHowbGuPDxKIo%2BsHc7auTktbjLYRAiAFDG7AqXuxpd3wr7bs1WT4NJpgKGPbgs%2BVXMoCQMsNrir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMs65op8y2REL4ieGFKtwDGPQnZ6KkTd87YpCsm8Dg029%2BJrxNqONFSlNgSb2TGHVJTg5R2soqRVvRoD3YZHzMnDx6ceo7sRswOXZVxhh8jJi0u2wULRz1Vr1o8EV0%2BDWHNVgL7ERomSVtZGh3HHmd6AJTCML6UJz8WrovgNUeSKxRgUhqoUMtQI5%2F1ba7gNs%2FRRhc1W5jGhSju1PWZUscltNPvGAXJIusrv%2FVVZC5oZhaxz9pwUUc4AU0xWbvfTZzAOqm0IsiwbxgBDidLzv3qHsxTZL%2F8GMjKyd00NL4wDQnjl%2BR2IPAX%2B4%2FBA6CyxQsMDdtzGedAF%2Bod%2Bi%2BQBW4Njr1A1WLbP7TGhbUfvJssOdDwrnLqlgln4LM%2F09dw81ncSLODjrI%2BAOgJYkxuf%2FGj9YR3OpKiF%2FDygSltxkx0kS8CK8SnQ6DVTuZblggR86qJ8tiKo28EE6AlRW2VeTZ7qcmfgxVXoEP8oO%2FuvATZDHGdnyRrUxRExXndQNd20DBdVKGfFDYJBbJOLqn6qjBbvuqvk9GGh9MdLZ%2FdClr0HukYkiKWSt7IYOSZZAYTc4QKHf3FCIlylRhay1zc2iRfuQeAbj7fbS%2FHC%2BUSjUUkIS9ZmVn44tV9XRqKHVdENapA3SP6tTlxLQdOtcww6CGwAY6pgGjrSIjmKJ6sW%2FBtQhQv5h1wo2Lzu%2BEf9CktNjkvlFH9UdqmH0sGsdml9Y5HKEEhcGzauT%2BIED%2B5Zc3cxgKWF4qIylP9rl%2BERcUNL3jZpszPvg952eDdcr8tAg3BvZ9VHnIeZJ6z44ggpB8Zwlky5cHW1XNm3PPY4HNF%2BpjdWci1kyk%2FuiyfdoGwGtdj%2BLAd%2BeKTtWZwwJeSMZfSpCbCh1uo6OaDeXU&X-Amz-Signature=fb759be11449e4a027679d6b2577011e165ebfa6055d68518bdd5efeefd0b186&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3QYQFV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ4ZgCIHXdVY09tcHowbGuPDxKIo%2BsHc7auTktbjLYRAiAFDG7AqXuxpd3wr7bs1WT4NJpgKGPbgs%2BVXMoCQMsNrir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMs65op8y2REL4ieGFKtwDGPQnZ6KkTd87YpCsm8Dg029%2BJrxNqONFSlNgSb2TGHVJTg5R2soqRVvRoD3YZHzMnDx6ceo7sRswOXZVxhh8jJi0u2wULRz1Vr1o8EV0%2BDWHNVgL7ERomSVtZGh3HHmd6AJTCML6UJz8WrovgNUeSKxRgUhqoUMtQI5%2F1ba7gNs%2FRRhc1W5jGhSju1PWZUscltNPvGAXJIusrv%2FVVZC5oZhaxz9pwUUc4AU0xWbvfTZzAOqm0IsiwbxgBDidLzv3qHsxTZL%2F8GMjKyd00NL4wDQnjl%2BR2IPAX%2B4%2FBA6CyxQsMDdtzGedAF%2Bod%2Bi%2BQBW4Njr1A1WLbP7TGhbUfvJssOdDwrnLqlgln4LM%2F09dw81ncSLODjrI%2BAOgJYkxuf%2FGj9YR3OpKiF%2FDygSltxkx0kS8CK8SnQ6DVTuZblggR86qJ8tiKo28EE6AlRW2VeTZ7qcmfgxVXoEP8oO%2FuvATZDHGdnyRrUxRExXndQNd20DBdVKGfFDYJBbJOLqn6qjBbvuqvk9GGh9MdLZ%2FdClr0HukYkiKWSt7IYOSZZAYTc4QKHf3FCIlylRhay1zc2iRfuQeAbj7fbS%2FHC%2BUSjUUkIS9ZmVn44tV9XRqKHVdENapA3SP6tTlxLQdOtcww6CGwAY6pgGjrSIjmKJ6sW%2FBtQhQv5h1wo2Lzu%2BEf9CktNjkvlFH9UdqmH0sGsdml9Y5HKEEhcGzauT%2BIED%2B5Zc3cxgKWF4qIylP9rl%2BERcUNL3jZpszPvg952eDdcr8tAg3BvZ9VHnIeZJ6z44ggpB8Zwlky5cHW1XNm3PPY4HNF%2BpjdWci1kyk%2FuiyfdoGwGtdj%2BLAd%2BeKTtWZwwJeSMZfSpCbCh1uo6OaDeXU&X-Amz-Signature=c0973733a98046e5ee7461225e6d9e9fe51f0d46a7e354171e74abe1389fd2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3QYQFV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ4ZgCIHXdVY09tcHowbGuPDxKIo%2BsHc7auTktbjLYRAiAFDG7AqXuxpd3wr7bs1WT4NJpgKGPbgs%2BVXMoCQMsNrir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMs65op8y2REL4ieGFKtwDGPQnZ6KkTd87YpCsm8Dg029%2BJrxNqONFSlNgSb2TGHVJTg5R2soqRVvRoD3YZHzMnDx6ceo7sRswOXZVxhh8jJi0u2wULRz1Vr1o8EV0%2BDWHNVgL7ERomSVtZGh3HHmd6AJTCML6UJz8WrovgNUeSKxRgUhqoUMtQI5%2F1ba7gNs%2FRRhc1W5jGhSju1PWZUscltNPvGAXJIusrv%2FVVZC5oZhaxz9pwUUc4AU0xWbvfTZzAOqm0IsiwbxgBDidLzv3qHsxTZL%2F8GMjKyd00NL4wDQnjl%2BR2IPAX%2B4%2FBA6CyxQsMDdtzGedAF%2Bod%2Bi%2BQBW4Njr1A1WLbP7TGhbUfvJssOdDwrnLqlgln4LM%2F09dw81ncSLODjrI%2BAOgJYkxuf%2FGj9YR3OpKiF%2FDygSltxkx0kS8CK8SnQ6DVTuZblggR86qJ8tiKo28EE6AlRW2VeTZ7qcmfgxVXoEP8oO%2FuvATZDHGdnyRrUxRExXndQNd20DBdVKGfFDYJBbJOLqn6qjBbvuqvk9GGh9MdLZ%2FdClr0HukYkiKWSt7IYOSZZAYTc4QKHf3FCIlylRhay1zc2iRfuQeAbj7fbS%2FHC%2BUSjUUkIS9ZmVn44tV9XRqKHVdENapA3SP6tTlxLQdOtcww6CGwAY6pgGjrSIjmKJ6sW%2FBtQhQv5h1wo2Lzu%2BEf9CktNjkvlFH9UdqmH0sGsdml9Y5HKEEhcGzauT%2BIED%2B5Zc3cxgKWF4qIylP9rl%2BERcUNL3jZpszPvg952eDdcr8tAg3BvZ9VHnIeZJ6z44ggpB8Zwlky5cHW1XNm3PPY4HNF%2BpjdWci1kyk%2FuiyfdoGwGtdj%2BLAd%2BeKTtWZwwJeSMZfSpCbCh1uo6OaDeXU&X-Amz-Signature=d1286ab9371ede137b1f3d614023f16203487ca903b8564f2fa8e06cec7c7dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3QYQFV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ4ZgCIHXdVY09tcHowbGuPDxKIo%2BsHc7auTktbjLYRAiAFDG7AqXuxpd3wr7bs1WT4NJpgKGPbgs%2BVXMoCQMsNrir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMs65op8y2REL4ieGFKtwDGPQnZ6KkTd87YpCsm8Dg029%2BJrxNqONFSlNgSb2TGHVJTg5R2soqRVvRoD3YZHzMnDx6ceo7sRswOXZVxhh8jJi0u2wULRz1Vr1o8EV0%2BDWHNVgL7ERomSVtZGh3HHmd6AJTCML6UJz8WrovgNUeSKxRgUhqoUMtQI5%2F1ba7gNs%2FRRhc1W5jGhSju1PWZUscltNPvGAXJIusrv%2FVVZC5oZhaxz9pwUUc4AU0xWbvfTZzAOqm0IsiwbxgBDidLzv3qHsxTZL%2F8GMjKyd00NL4wDQnjl%2BR2IPAX%2B4%2FBA6CyxQsMDdtzGedAF%2Bod%2Bi%2BQBW4Njr1A1WLbP7TGhbUfvJssOdDwrnLqlgln4LM%2F09dw81ncSLODjrI%2BAOgJYkxuf%2FGj9YR3OpKiF%2FDygSltxkx0kS8CK8SnQ6DVTuZblggR86qJ8tiKo28EE6AlRW2VeTZ7qcmfgxVXoEP8oO%2FuvATZDHGdnyRrUxRExXndQNd20DBdVKGfFDYJBbJOLqn6qjBbvuqvk9GGh9MdLZ%2FdClr0HukYkiKWSt7IYOSZZAYTc4QKHf3FCIlylRhay1zc2iRfuQeAbj7fbS%2FHC%2BUSjUUkIS9ZmVn44tV9XRqKHVdENapA3SP6tTlxLQdOtcww6CGwAY6pgGjrSIjmKJ6sW%2FBtQhQv5h1wo2Lzu%2BEf9CktNjkvlFH9UdqmH0sGsdml9Y5HKEEhcGzauT%2BIED%2B5Zc3cxgKWF4qIylP9rl%2BERcUNL3jZpszPvg952eDdcr8tAg3BvZ9VHnIeZJ6z44ggpB8Zwlky5cHW1XNm3PPY4HNF%2BpjdWci1kyk%2FuiyfdoGwGtdj%2BLAd%2BeKTtWZwwJeSMZfSpCbCh1uo6OaDeXU&X-Amz-Signature=d9006c86fe44dcbfbd5dac457fc74c83b8bb74e9614a2f3d4f10f166cf4aec02&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
