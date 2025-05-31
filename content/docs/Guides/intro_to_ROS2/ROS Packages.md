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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYEROYB3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoeY9q8F8uNt%2BB2rXyAwF17r2YG9DCROVZnm3T9YqIKwIgcXe9HN9mfKaqGoWOzh09QMbj6qr9NdEQa3QlQGNPL7MqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIiYSHc%2FQu%2FgqunfSrcAxV7vb6rZyw1CEdGEBwHHWe8Bx1Ti6Hq3jHng7%2BZ7%2BRDdAWwaqgII%2BkbAdCe313JLMtvTn%2FuL0bj6O4UHJAKlhNZWgQJvu1OMNo05ZBdbhJhl%2FP%2FBon2%2F6WlVHXr4t7q%2FA4%2BrpnlkSY4sYt9%2FdP4nBid8bg%2BvttpZWP73SV1MPEcnwH6obu9rqAQxcFn8OVJIiuqMRvDkZcygecYstTufxFT3rcHXFPoWsP9DKnSKvuxWWm%2BKyM181ruKfbS33QIbQKKi5Q%2BCDq%2B0SZM%2FJvtod2NQ85GRlDK63EO%2BqBwE2wzWhoMyYJHXVW0ecAxlgEUZzjh01SgqvP49GjgqU%2F%2BTePcNtWf8hfvDqaN9LgCd5H9rWJrH45vIXRKuRvuiUIzT2eRZaQ91XGrjNu8KSLUqhw0XaFglR93lSyCaL0tqigMwgPPK4wyHTey0YclLe%2FIBEPZ7zq2kyS6OsGRfk6dnLRvZd6Aa6C41vAg%2FxADB4QyB%2BkcY0XHtBmEBefYG%2BTgjtis4Xa2IQ3ePB3GgFrNOOWsAbMH%2FaVWC4vosMUduwYSnGkCBrZ3fmxyqpdaV9gqUDxDzVcSdHcXKqrtUwutuF%2Flk0CpFtp8B5GnZjBu08arpMB4qQm1F2yxHv%2FaMIq%2B7cEGOqUBuvxYn%2BSFCUnbVH3a%2BaGvsbbjy76Psc3N%2FgJUaDk5VfJ%2Fkw%2BlVrpwfIaGrlirThAj3y1cdGqnbzuivLQzKQQHb%2F%2BtGEKq4g2vad34%2B0%2BbH%2FIo%2FbPL9raqPW4USR0bdYd%2F00lYHwHWo5PVFTP2YrnTXJms3vI4qqjKG1R%2Fyu65Xd87DelxXiLk3n7fYQj1cw60iL1K9JVEiDkaZwbDyoXAylf1QDAZ&X-Amz-Signature=8802cd13497b4f3c9d9998012c4a79354d219ec9537f7ca223fe665ecad4441b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYEROYB3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoeY9q8F8uNt%2BB2rXyAwF17r2YG9DCROVZnm3T9YqIKwIgcXe9HN9mfKaqGoWOzh09QMbj6qr9NdEQa3QlQGNPL7MqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIiYSHc%2FQu%2FgqunfSrcAxV7vb6rZyw1CEdGEBwHHWe8Bx1Ti6Hq3jHng7%2BZ7%2BRDdAWwaqgII%2BkbAdCe313JLMtvTn%2FuL0bj6O4UHJAKlhNZWgQJvu1OMNo05ZBdbhJhl%2FP%2FBon2%2F6WlVHXr4t7q%2FA4%2BrpnlkSY4sYt9%2FdP4nBid8bg%2BvttpZWP73SV1MPEcnwH6obu9rqAQxcFn8OVJIiuqMRvDkZcygecYstTufxFT3rcHXFPoWsP9DKnSKvuxWWm%2BKyM181ruKfbS33QIbQKKi5Q%2BCDq%2B0SZM%2FJvtod2NQ85GRlDK63EO%2BqBwE2wzWhoMyYJHXVW0ecAxlgEUZzjh01SgqvP49GjgqU%2F%2BTePcNtWf8hfvDqaN9LgCd5H9rWJrH45vIXRKuRvuiUIzT2eRZaQ91XGrjNu8KSLUqhw0XaFglR93lSyCaL0tqigMwgPPK4wyHTey0YclLe%2FIBEPZ7zq2kyS6OsGRfk6dnLRvZd6Aa6C41vAg%2FxADB4QyB%2BkcY0XHtBmEBefYG%2BTgjtis4Xa2IQ3ePB3GgFrNOOWsAbMH%2FaVWC4vosMUduwYSnGkCBrZ3fmxyqpdaV9gqUDxDzVcSdHcXKqrtUwutuF%2Flk0CpFtp8B5GnZjBu08arpMB4qQm1F2yxHv%2FaMIq%2B7cEGOqUBuvxYn%2BSFCUnbVH3a%2BaGvsbbjy76Psc3N%2FgJUaDk5VfJ%2Fkw%2BlVrpwfIaGrlirThAj3y1cdGqnbzuivLQzKQQHb%2F%2BtGEKq4g2vad34%2B0%2BbH%2FIo%2FbPL9raqPW4USR0bdYd%2F00lYHwHWo5PVFTP2YrnTXJms3vI4qqjKG1R%2Fyu65Xd87DelxXiLk3n7fYQj1cw60iL1K9JVEiDkaZwbDyoXAylf1QDAZ&X-Amz-Signature=99af0eaed632c0f033a56c04d7c2ca5ccfc2af0889f8a8b6ebda05108ece5d67&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYEROYB3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoeY9q8F8uNt%2BB2rXyAwF17r2YG9DCROVZnm3T9YqIKwIgcXe9HN9mfKaqGoWOzh09QMbj6qr9NdEQa3QlQGNPL7MqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIiYSHc%2FQu%2FgqunfSrcAxV7vb6rZyw1CEdGEBwHHWe8Bx1Ti6Hq3jHng7%2BZ7%2BRDdAWwaqgII%2BkbAdCe313JLMtvTn%2FuL0bj6O4UHJAKlhNZWgQJvu1OMNo05ZBdbhJhl%2FP%2FBon2%2F6WlVHXr4t7q%2FA4%2BrpnlkSY4sYt9%2FdP4nBid8bg%2BvttpZWP73SV1MPEcnwH6obu9rqAQxcFn8OVJIiuqMRvDkZcygecYstTufxFT3rcHXFPoWsP9DKnSKvuxWWm%2BKyM181ruKfbS33QIbQKKi5Q%2BCDq%2B0SZM%2FJvtod2NQ85GRlDK63EO%2BqBwE2wzWhoMyYJHXVW0ecAxlgEUZzjh01SgqvP49GjgqU%2F%2BTePcNtWf8hfvDqaN9LgCd5H9rWJrH45vIXRKuRvuiUIzT2eRZaQ91XGrjNu8KSLUqhw0XaFglR93lSyCaL0tqigMwgPPK4wyHTey0YclLe%2FIBEPZ7zq2kyS6OsGRfk6dnLRvZd6Aa6C41vAg%2FxADB4QyB%2BkcY0XHtBmEBefYG%2BTgjtis4Xa2IQ3ePB3GgFrNOOWsAbMH%2FaVWC4vosMUduwYSnGkCBrZ3fmxyqpdaV9gqUDxDzVcSdHcXKqrtUwutuF%2Flk0CpFtp8B5GnZjBu08arpMB4qQm1F2yxHv%2FaMIq%2B7cEGOqUBuvxYn%2BSFCUnbVH3a%2BaGvsbbjy76Psc3N%2FgJUaDk5VfJ%2Fkw%2BlVrpwfIaGrlirThAj3y1cdGqnbzuivLQzKQQHb%2F%2BtGEKq4g2vad34%2B0%2BbH%2FIo%2FbPL9raqPW4USR0bdYd%2F00lYHwHWo5PVFTP2YrnTXJms3vI4qqjKG1R%2Fyu65Xd87DelxXiLk3n7fYQj1cw60iL1K9JVEiDkaZwbDyoXAylf1QDAZ&X-Amz-Signature=20befbdc586038c8f1233db59730d7294cee54062fbad2c2c8ddbb4ec501f452&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYEROYB3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoeY9q8F8uNt%2BB2rXyAwF17r2YG9DCROVZnm3T9YqIKwIgcXe9HN9mfKaqGoWOzh09QMbj6qr9NdEQa3QlQGNPL7MqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIiYSHc%2FQu%2FgqunfSrcAxV7vb6rZyw1CEdGEBwHHWe8Bx1Ti6Hq3jHng7%2BZ7%2BRDdAWwaqgII%2BkbAdCe313JLMtvTn%2FuL0bj6O4UHJAKlhNZWgQJvu1OMNo05ZBdbhJhl%2FP%2FBon2%2F6WlVHXr4t7q%2FA4%2BrpnlkSY4sYt9%2FdP4nBid8bg%2BvttpZWP73SV1MPEcnwH6obu9rqAQxcFn8OVJIiuqMRvDkZcygecYstTufxFT3rcHXFPoWsP9DKnSKvuxWWm%2BKyM181ruKfbS33QIbQKKi5Q%2BCDq%2B0SZM%2FJvtod2NQ85GRlDK63EO%2BqBwE2wzWhoMyYJHXVW0ecAxlgEUZzjh01SgqvP49GjgqU%2F%2BTePcNtWf8hfvDqaN9LgCd5H9rWJrH45vIXRKuRvuiUIzT2eRZaQ91XGrjNu8KSLUqhw0XaFglR93lSyCaL0tqigMwgPPK4wyHTey0YclLe%2FIBEPZ7zq2kyS6OsGRfk6dnLRvZd6Aa6C41vAg%2FxADB4QyB%2BkcY0XHtBmEBefYG%2BTgjtis4Xa2IQ3ePB3GgFrNOOWsAbMH%2FaVWC4vosMUduwYSnGkCBrZ3fmxyqpdaV9gqUDxDzVcSdHcXKqrtUwutuF%2Flk0CpFtp8B5GnZjBu08arpMB4qQm1F2yxHv%2FaMIq%2B7cEGOqUBuvxYn%2BSFCUnbVH3a%2BaGvsbbjy76Psc3N%2FgJUaDk5VfJ%2Fkw%2BlVrpwfIaGrlirThAj3y1cdGqnbzuivLQzKQQHb%2F%2BtGEKq4g2vad34%2B0%2BbH%2FIo%2FbPL9raqPW4USR0bdYd%2F00lYHwHWo5PVFTP2YrnTXJms3vI4qqjKG1R%2Fyu65Xd87DelxXiLk3n7fYQj1cw60iL1K9JVEiDkaZwbDyoXAylf1QDAZ&X-Amz-Signature=7064cf77c8e793fb83388268fb2086542ec57864559edc807eb839a5058398aa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYEROYB3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoeY9q8F8uNt%2BB2rXyAwF17r2YG9DCROVZnm3T9YqIKwIgcXe9HN9mfKaqGoWOzh09QMbj6qr9NdEQa3QlQGNPL7MqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIiYSHc%2FQu%2FgqunfSrcAxV7vb6rZyw1CEdGEBwHHWe8Bx1Ti6Hq3jHng7%2BZ7%2BRDdAWwaqgII%2BkbAdCe313JLMtvTn%2FuL0bj6O4UHJAKlhNZWgQJvu1OMNo05ZBdbhJhl%2FP%2FBon2%2F6WlVHXr4t7q%2FA4%2BrpnlkSY4sYt9%2FdP4nBid8bg%2BvttpZWP73SV1MPEcnwH6obu9rqAQxcFn8OVJIiuqMRvDkZcygecYstTufxFT3rcHXFPoWsP9DKnSKvuxWWm%2BKyM181ruKfbS33QIbQKKi5Q%2BCDq%2B0SZM%2FJvtod2NQ85GRlDK63EO%2BqBwE2wzWhoMyYJHXVW0ecAxlgEUZzjh01SgqvP49GjgqU%2F%2BTePcNtWf8hfvDqaN9LgCd5H9rWJrH45vIXRKuRvuiUIzT2eRZaQ91XGrjNu8KSLUqhw0XaFglR93lSyCaL0tqigMwgPPK4wyHTey0YclLe%2FIBEPZ7zq2kyS6OsGRfk6dnLRvZd6Aa6C41vAg%2FxADB4QyB%2BkcY0XHtBmEBefYG%2BTgjtis4Xa2IQ3ePB3GgFrNOOWsAbMH%2FaVWC4vosMUduwYSnGkCBrZ3fmxyqpdaV9gqUDxDzVcSdHcXKqrtUwutuF%2Flk0CpFtp8B5GnZjBu08arpMB4qQm1F2yxHv%2FaMIq%2B7cEGOqUBuvxYn%2BSFCUnbVH3a%2BaGvsbbjy76Psc3N%2FgJUaDk5VfJ%2Fkw%2BlVrpwfIaGrlirThAj3y1cdGqnbzuivLQzKQQHb%2F%2BtGEKq4g2vad34%2B0%2BbH%2FIo%2FbPL9raqPW4USR0bdYd%2F00lYHwHWo5PVFTP2YrnTXJms3vI4qqjKG1R%2Fyu65Xd87DelxXiLk3n7fYQj1cw60iL1K9JVEiDkaZwbDyoXAylf1QDAZ&X-Amz-Signature=1379bd8f2d49100ce80db2bae7f5e1abe62353c22e9dc98b8d7ce2271931b84b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYEROYB3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoeY9q8F8uNt%2BB2rXyAwF17r2YG9DCROVZnm3T9YqIKwIgcXe9HN9mfKaqGoWOzh09QMbj6qr9NdEQa3QlQGNPL7MqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIiYSHc%2FQu%2FgqunfSrcAxV7vb6rZyw1CEdGEBwHHWe8Bx1Ti6Hq3jHng7%2BZ7%2BRDdAWwaqgII%2BkbAdCe313JLMtvTn%2FuL0bj6O4UHJAKlhNZWgQJvu1OMNo05ZBdbhJhl%2FP%2FBon2%2F6WlVHXr4t7q%2FA4%2BrpnlkSY4sYt9%2FdP4nBid8bg%2BvttpZWP73SV1MPEcnwH6obu9rqAQxcFn8OVJIiuqMRvDkZcygecYstTufxFT3rcHXFPoWsP9DKnSKvuxWWm%2BKyM181ruKfbS33QIbQKKi5Q%2BCDq%2B0SZM%2FJvtod2NQ85GRlDK63EO%2BqBwE2wzWhoMyYJHXVW0ecAxlgEUZzjh01SgqvP49GjgqU%2F%2BTePcNtWf8hfvDqaN9LgCd5H9rWJrH45vIXRKuRvuiUIzT2eRZaQ91XGrjNu8KSLUqhw0XaFglR93lSyCaL0tqigMwgPPK4wyHTey0YclLe%2FIBEPZ7zq2kyS6OsGRfk6dnLRvZd6Aa6C41vAg%2FxADB4QyB%2BkcY0XHtBmEBefYG%2BTgjtis4Xa2IQ3ePB3GgFrNOOWsAbMH%2FaVWC4vosMUduwYSnGkCBrZ3fmxyqpdaV9gqUDxDzVcSdHcXKqrtUwutuF%2Flk0CpFtp8B5GnZjBu08arpMB4qQm1F2yxHv%2FaMIq%2B7cEGOqUBuvxYn%2BSFCUnbVH3a%2BaGvsbbjy76Psc3N%2FgJUaDk5VfJ%2Fkw%2BlVrpwfIaGrlirThAj3y1cdGqnbzuivLQzKQQHb%2F%2BtGEKq4g2vad34%2B0%2BbH%2FIo%2FbPL9raqPW4USR0bdYd%2F00lYHwHWo5PVFTP2YrnTXJms3vI4qqjKG1R%2Fyu65Xd87DelxXiLk3n7fYQj1cw60iL1K9JVEiDkaZwbDyoXAylf1QDAZ&X-Amz-Signature=a9cfc0fa394ef0757ba523f65ee416f165a70ac3c427008c6b9de487e7f5872e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYEROYB3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoeY9q8F8uNt%2BB2rXyAwF17r2YG9DCROVZnm3T9YqIKwIgcXe9HN9mfKaqGoWOzh09QMbj6qr9NdEQa3QlQGNPL7MqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIiYSHc%2FQu%2FgqunfSrcAxV7vb6rZyw1CEdGEBwHHWe8Bx1Ti6Hq3jHng7%2BZ7%2BRDdAWwaqgII%2BkbAdCe313JLMtvTn%2FuL0bj6O4UHJAKlhNZWgQJvu1OMNo05ZBdbhJhl%2FP%2FBon2%2F6WlVHXr4t7q%2FA4%2BrpnlkSY4sYt9%2FdP4nBid8bg%2BvttpZWP73SV1MPEcnwH6obu9rqAQxcFn8OVJIiuqMRvDkZcygecYstTufxFT3rcHXFPoWsP9DKnSKvuxWWm%2BKyM181ruKfbS33QIbQKKi5Q%2BCDq%2B0SZM%2FJvtod2NQ85GRlDK63EO%2BqBwE2wzWhoMyYJHXVW0ecAxlgEUZzjh01SgqvP49GjgqU%2F%2BTePcNtWf8hfvDqaN9LgCd5H9rWJrH45vIXRKuRvuiUIzT2eRZaQ91XGrjNu8KSLUqhw0XaFglR93lSyCaL0tqigMwgPPK4wyHTey0YclLe%2FIBEPZ7zq2kyS6OsGRfk6dnLRvZd6Aa6C41vAg%2FxADB4QyB%2BkcY0XHtBmEBefYG%2BTgjtis4Xa2IQ3ePB3GgFrNOOWsAbMH%2FaVWC4vosMUduwYSnGkCBrZ3fmxyqpdaV9gqUDxDzVcSdHcXKqrtUwutuF%2Flk0CpFtp8B5GnZjBu08arpMB4qQm1F2yxHv%2FaMIq%2B7cEGOqUBuvxYn%2BSFCUnbVH3a%2BaGvsbbjy76Psc3N%2FgJUaDk5VfJ%2Fkw%2BlVrpwfIaGrlirThAj3y1cdGqnbzuivLQzKQQHb%2F%2BtGEKq4g2vad34%2B0%2BbH%2FIo%2FbPL9raqPW4USR0bdYd%2F00lYHwHWo5PVFTP2YrnTXJms3vI4qqjKG1R%2Fyu65Xd87DelxXiLk3n7fYQj1cw60iL1K9JVEiDkaZwbDyoXAylf1QDAZ&X-Amz-Signature=6e273a7b7d7444a630df8dc66935e027ef4f3b584f75bcfff8855670856d62b4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
