---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=d35232a54727427e87c35a4c770272ab4af8ce4414a3c8045d08499011375487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=88d9f78b29abd9adcd1328afa7522dd78506de4ea8b92f247b37f361ca571f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=cb38125b040bf0a5cae321db856c24434063eab6b4c05b66a62f512385170d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=a68c28fa76643deb2d3d81eb7a3018c2053479231cc8ffc0bf04da33121c1549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=e232c86d98a01d8c68b1bfd8d015dbb80ddbf9869ff95b4184d27902eaa9227c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=cecdae67374ff40b0a6bfd537188f4cebba844ecc442dd5b57fe9cd30c165bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHZYXC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDMeNe%2FcbsOMe7GzxxDS9bFwXlPMGtDAdbB6cNqUw3dgQIgSsc5JDQfMK1DUjfNeL57W0vE0VPrMCyPZf6611mV8%2F8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIH0eeDBLX5gaKnpKSrcAxUL36qgEZmYjXZDuk%2B4WEGpdSclel69v80UeNYW37tdQJfV0xHuJCoYcTHsMlcXRbUtNCIZCD4x0bznZdOU8hrXs%2BUS%2FkFzJOzRU94mwrwf8ugkQl3zRIXeUlBd7Us2LYq5s1aARhi5IkDXbhUzrVqtMGeC27Ar%2Bthl23%2BueViE0gxXOcihQfVVb6frdKYW9ZQrQSxQEUEZdbNyG%2BFJZhQ6xvS2NnkrNgxV4PQ9WWFYKcBImI1098BrIpLQIJQT3gCf6%2BwjiH93SBQYeZ0z0NmQCf0o6GQSD%2BoH%2FU9pYq%2BglZzIGZosyDZKN8OGctBeUi7YEZMo9eCM1x7mWCx%2FVbCKsMT2JGf6d8fZADrb%2B4Y5XPOemJ8ExxSn%2FOD2wBqfHmCPYh5jSe4Z9xDYBj2FCYSG35BD7WExIOUfmzxmeWAZUCKQN25XWfqRm2BHGw8zH6If3BQUvMnhmIwyz6RXGYKJc97bxIb1wIizIyyot46t9RRSrObHXkMCuoUfTMwqFekw%2FDLjjdbkMAygTqqfKg7e%2BWF%2BK7ET0S0S7uDEeKpU1aeOvk1NOwt7PeB%2BS%2BAGq4dKDxL48yQJ71dapQKP93hsODSGuDDDShSyM2JPQp9rhDqnzElSF%2BY6HNTyMNmmwsQGOqUBE6Daf9j7mRLF67JyQ7jYsotJGyErinHI2wV6J2%2FUaYegubvjnsPV4nXGLdt5gVqclhVjnlYAmHH2Xraz3BuGNuEsTfHJ%2BjuWQMPOg30yNdITYVA5wJmpia%2B6ZmQoFCC82Xv6C8WX1G5sRVyyYLJTfsORa0bBUSYDrolm3UI8bEBwoG0TXwgoTR0P3d%2FDySEk%2BIfdEQGNmfODsU9GlJ%2FFuXhmB1Hn&X-Amz-Signature=2d9d3bafc22eddec9dcd6a1ce5502394788c5017bd1ba5412bb5a6d975462c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
