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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RUDH77%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVAvdyjMjYNnG5K%2FpmshPWyA9qmTsT1VG%2BdnknDLRLQIgElPgnofmCK3%2FZWk%2Fz3SnBQmAITykh3wsDyx10aGkRQEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEBsaBtd33FCYnUgNCrcA7z6p3xXLik4aAJVkWXe17jUOB%2FKxjJlOWP8lGSTHTJjD6bsfE2qK1BSYW5dkA3j%2B1a7l5mFIsqbe2rJe%2FabrsxlqWb5mwF0cJYyAdWrhqoxPIpUKzb5ZZpLH6s7thC8VSGw4vIi5UlzeY72gdOPrfHRqj4aMqm%2FhSxTQrZrFBl57DihnLVXqbzID3rXyGs75dpfrIzKhMJu3iXfhX0C88T2g6fuWa7nyWYd01mJxqrda1beUhLz3P2X%2BKy4v9pcXvE15Jh7xGIHnRyocAL5hlFo7qjjmWEQwmB1ByvsnvoPu8MD8nusIBxSEB1CqDQN3cpGha%2BwWLD%2Bq0YVgn%2BFf0dTWeU4xhG7lxiGpR9X%2F%2B9kWo%2F5sO%2FTbHmXiLTlGMjCEhVhkbNqeATS1T8mFEnr5hDGVR3PzIpp7K9JdiSczbOsvUIolzruzoK1SRLn8xTFCE6N1KQDcumw%2BJ9JQ3qrMuXCyXxdMN1El8ltzhBha43jelgGFSl%2BjAaafq0Mog7j0l19pYIqMVbCxUPjhYQz6dHhuUDCW0z6kvB76AiBoeB4XcD2IoNv09%2FP3YGB06q5CgKASYkgaMJmPwOwagbcpzYMQq3HSdxAXHyZhwo%2FdwzS%2BRpM8TbocRE4l1LgMKPKhMAGOqUBdcsgcr%2BSexapkPPtghT2CHB9VyG70xUXChYJNhRQ84Ui%2F3FpRHbbUU3Vc7S8Y7wI001lfpL8l8aJkITDGufuxwoOIYZu6T9%2BoZHzcSsPBTxgFsIMkYKfOlfHk%2BCjDH4bYY4JSs%2FWbbHUkfSKSCLsdUoIMLQrr1RBPxR5gwFK5ai7Y6hvHPXkP0nitQDE4KjcXm1X1JL9fua3sR3vf2%2FgE2EV%2Bg9h&X-Amz-Signature=dd24ea0fc924341e221da0d7674512bd13a61fca7f5b9f53e8e6b8a4140206f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RUDH77%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVAvdyjMjYNnG5K%2FpmshPWyA9qmTsT1VG%2BdnknDLRLQIgElPgnofmCK3%2FZWk%2Fz3SnBQmAITykh3wsDyx10aGkRQEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEBsaBtd33FCYnUgNCrcA7z6p3xXLik4aAJVkWXe17jUOB%2FKxjJlOWP8lGSTHTJjD6bsfE2qK1BSYW5dkA3j%2B1a7l5mFIsqbe2rJe%2FabrsxlqWb5mwF0cJYyAdWrhqoxPIpUKzb5ZZpLH6s7thC8VSGw4vIi5UlzeY72gdOPrfHRqj4aMqm%2FhSxTQrZrFBl57DihnLVXqbzID3rXyGs75dpfrIzKhMJu3iXfhX0C88T2g6fuWa7nyWYd01mJxqrda1beUhLz3P2X%2BKy4v9pcXvE15Jh7xGIHnRyocAL5hlFo7qjjmWEQwmB1ByvsnvoPu8MD8nusIBxSEB1CqDQN3cpGha%2BwWLD%2Bq0YVgn%2BFf0dTWeU4xhG7lxiGpR9X%2F%2B9kWo%2F5sO%2FTbHmXiLTlGMjCEhVhkbNqeATS1T8mFEnr5hDGVR3PzIpp7K9JdiSczbOsvUIolzruzoK1SRLn8xTFCE6N1KQDcumw%2BJ9JQ3qrMuXCyXxdMN1El8ltzhBha43jelgGFSl%2BjAaafq0Mog7j0l19pYIqMVbCxUPjhYQz6dHhuUDCW0z6kvB76AiBoeB4XcD2IoNv09%2FP3YGB06q5CgKASYkgaMJmPwOwagbcpzYMQq3HSdxAXHyZhwo%2FdwzS%2BRpM8TbocRE4l1LgMKPKhMAGOqUBdcsgcr%2BSexapkPPtghT2CHB9VyG70xUXChYJNhRQ84Ui%2F3FpRHbbUU3Vc7S8Y7wI001lfpL8l8aJkITDGufuxwoOIYZu6T9%2BoZHzcSsPBTxgFsIMkYKfOlfHk%2BCjDH4bYY4JSs%2FWbbHUkfSKSCLsdUoIMLQrr1RBPxR5gwFK5ai7Y6hvHPXkP0nitQDE4KjcXm1X1JL9fua3sR3vf2%2FgE2EV%2Bg9h&X-Amz-Signature=01051e2bfcbb3b5a44e04ba5f4ad020a8915db02b53ec6406d52fae7a88cd372&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RUDH77%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVAvdyjMjYNnG5K%2FpmshPWyA9qmTsT1VG%2BdnknDLRLQIgElPgnofmCK3%2FZWk%2Fz3SnBQmAITykh3wsDyx10aGkRQEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEBsaBtd33FCYnUgNCrcA7z6p3xXLik4aAJVkWXe17jUOB%2FKxjJlOWP8lGSTHTJjD6bsfE2qK1BSYW5dkA3j%2B1a7l5mFIsqbe2rJe%2FabrsxlqWb5mwF0cJYyAdWrhqoxPIpUKzb5ZZpLH6s7thC8VSGw4vIi5UlzeY72gdOPrfHRqj4aMqm%2FhSxTQrZrFBl57DihnLVXqbzID3rXyGs75dpfrIzKhMJu3iXfhX0C88T2g6fuWa7nyWYd01mJxqrda1beUhLz3P2X%2BKy4v9pcXvE15Jh7xGIHnRyocAL5hlFo7qjjmWEQwmB1ByvsnvoPu8MD8nusIBxSEB1CqDQN3cpGha%2BwWLD%2Bq0YVgn%2BFf0dTWeU4xhG7lxiGpR9X%2F%2B9kWo%2F5sO%2FTbHmXiLTlGMjCEhVhkbNqeATS1T8mFEnr5hDGVR3PzIpp7K9JdiSczbOsvUIolzruzoK1SRLn8xTFCE6N1KQDcumw%2BJ9JQ3qrMuXCyXxdMN1El8ltzhBha43jelgGFSl%2BjAaafq0Mog7j0l19pYIqMVbCxUPjhYQz6dHhuUDCW0z6kvB76AiBoeB4XcD2IoNv09%2FP3YGB06q5CgKASYkgaMJmPwOwagbcpzYMQq3HSdxAXHyZhwo%2FdwzS%2BRpM8TbocRE4l1LgMKPKhMAGOqUBdcsgcr%2BSexapkPPtghT2CHB9VyG70xUXChYJNhRQ84Ui%2F3FpRHbbUU3Vc7S8Y7wI001lfpL8l8aJkITDGufuxwoOIYZu6T9%2BoZHzcSsPBTxgFsIMkYKfOlfHk%2BCjDH4bYY4JSs%2FWbbHUkfSKSCLsdUoIMLQrr1RBPxR5gwFK5ai7Y6hvHPXkP0nitQDE4KjcXm1X1JL9fua3sR3vf2%2FgE2EV%2Bg9h&X-Amz-Signature=8b0258b61e05ef3f4355dd0c5e6ff6a6c730c67fb94764978aae0481502c10f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RUDH77%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVAvdyjMjYNnG5K%2FpmshPWyA9qmTsT1VG%2BdnknDLRLQIgElPgnofmCK3%2FZWk%2Fz3SnBQmAITykh3wsDyx10aGkRQEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEBsaBtd33FCYnUgNCrcA7z6p3xXLik4aAJVkWXe17jUOB%2FKxjJlOWP8lGSTHTJjD6bsfE2qK1BSYW5dkA3j%2B1a7l5mFIsqbe2rJe%2FabrsxlqWb5mwF0cJYyAdWrhqoxPIpUKzb5ZZpLH6s7thC8VSGw4vIi5UlzeY72gdOPrfHRqj4aMqm%2FhSxTQrZrFBl57DihnLVXqbzID3rXyGs75dpfrIzKhMJu3iXfhX0C88T2g6fuWa7nyWYd01mJxqrda1beUhLz3P2X%2BKy4v9pcXvE15Jh7xGIHnRyocAL5hlFo7qjjmWEQwmB1ByvsnvoPu8MD8nusIBxSEB1CqDQN3cpGha%2BwWLD%2Bq0YVgn%2BFf0dTWeU4xhG7lxiGpR9X%2F%2B9kWo%2F5sO%2FTbHmXiLTlGMjCEhVhkbNqeATS1T8mFEnr5hDGVR3PzIpp7K9JdiSczbOsvUIolzruzoK1SRLn8xTFCE6N1KQDcumw%2BJ9JQ3qrMuXCyXxdMN1El8ltzhBha43jelgGFSl%2BjAaafq0Mog7j0l19pYIqMVbCxUPjhYQz6dHhuUDCW0z6kvB76AiBoeB4XcD2IoNv09%2FP3YGB06q5CgKASYkgaMJmPwOwagbcpzYMQq3HSdxAXHyZhwo%2FdwzS%2BRpM8TbocRE4l1LgMKPKhMAGOqUBdcsgcr%2BSexapkPPtghT2CHB9VyG70xUXChYJNhRQ84Ui%2F3FpRHbbUU3Vc7S8Y7wI001lfpL8l8aJkITDGufuxwoOIYZu6T9%2BoZHzcSsPBTxgFsIMkYKfOlfHk%2BCjDH4bYY4JSs%2FWbbHUkfSKSCLsdUoIMLQrr1RBPxR5gwFK5ai7Y6hvHPXkP0nitQDE4KjcXm1X1JL9fua3sR3vf2%2FgE2EV%2Bg9h&X-Amz-Signature=7354d87bb3a10109dbd44982a380efe03495bd65046ba96caa2df5fb47216476&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RUDH77%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVAvdyjMjYNnG5K%2FpmshPWyA9qmTsT1VG%2BdnknDLRLQIgElPgnofmCK3%2FZWk%2Fz3SnBQmAITykh3wsDyx10aGkRQEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEBsaBtd33FCYnUgNCrcA7z6p3xXLik4aAJVkWXe17jUOB%2FKxjJlOWP8lGSTHTJjD6bsfE2qK1BSYW5dkA3j%2B1a7l5mFIsqbe2rJe%2FabrsxlqWb5mwF0cJYyAdWrhqoxPIpUKzb5ZZpLH6s7thC8VSGw4vIi5UlzeY72gdOPrfHRqj4aMqm%2FhSxTQrZrFBl57DihnLVXqbzID3rXyGs75dpfrIzKhMJu3iXfhX0C88T2g6fuWa7nyWYd01mJxqrda1beUhLz3P2X%2BKy4v9pcXvE15Jh7xGIHnRyocAL5hlFo7qjjmWEQwmB1ByvsnvoPu8MD8nusIBxSEB1CqDQN3cpGha%2BwWLD%2Bq0YVgn%2BFf0dTWeU4xhG7lxiGpR9X%2F%2B9kWo%2F5sO%2FTbHmXiLTlGMjCEhVhkbNqeATS1T8mFEnr5hDGVR3PzIpp7K9JdiSczbOsvUIolzruzoK1SRLn8xTFCE6N1KQDcumw%2BJ9JQ3qrMuXCyXxdMN1El8ltzhBha43jelgGFSl%2BjAaafq0Mog7j0l19pYIqMVbCxUPjhYQz6dHhuUDCW0z6kvB76AiBoeB4XcD2IoNv09%2FP3YGB06q5CgKASYkgaMJmPwOwagbcpzYMQq3HSdxAXHyZhwo%2FdwzS%2BRpM8TbocRE4l1LgMKPKhMAGOqUBdcsgcr%2BSexapkPPtghT2CHB9VyG70xUXChYJNhRQ84Ui%2F3FpRHbbUU3Vc7S8Y7wI001lfpL8l8aJkITDGufuxwoOIYZu6T9%2BoZHzcSsPBTxgFsIMkYKfOlfHk%2BCjDH4bYY4JSs%2FWbbHUkfSKSCLsdUoIMLQrr1RBPxR5gwFK5ai7Y6hvHPXkP0nitQDE4KjcXm1X1JL9fua3sR3vf2%2FgE2EV%2Bg9h&X-Amz-Signature=0df3a370305cf438082320a788175f62a5d53156d0b7a29b969e6e3ef929b24f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RUDH77%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVAvdyjMjYNnG5K%2FpmshPWyA9qmTsT1VG%2BdnknDLRLQIgElPgnofmCK3%2FZWk%2Fz3SnBQmAITykh3wsDyx10aGkRQEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEBsaBtd33FCYnUgNCrcA7z6p3xXLik4aAJVkWXe17jUOB%2FKxjJlOWP8lGSTHTJjD6bsfE2qK1BSYW5dkA3j%2B1a7l5mFIsqbe2rJe%2FabrsxlqWb5mwF0cJYyAdWrhqoxPIpUKzb5ZZpLH6s7thC8VSGw4vIi5UlzeY72gdOPrfHRqj4aMqm%2FhSxTQrZrFBl57DihnLVXqbzID3rXyGs75dpfrIzKhMJu3iXfhX0C88T2g6fuWa7nyWYd01mJxqrda1beUhLz3P2X%2BKy4v9pcXvE15Jh7xGIHnRyocAL5hlFo7qjjmWEQwmB1ByvsnvoPu8MD8nusIBxSEB1CqDQN3cpGha%2BwWLD%2Bq0YVgn%2BFf0dTWeU4xhG7lxiGpR9X%2F%2B9kWo%2F5sO%2FTbHmXiLTlGMjCEhVhkbNqeATS1T8mFEnr5hDGVR3PzIpp7K9JdiSczbOsvUIolzruzoK1SRLn8xTFCE6N1KQDcumw%2BJ9JQ3qrMuXCyXxdMN1El8ltzhBha43jelgGFSl%2BjAaafq0Mog7j0l19pYIqMVbCxUPjhYQz6dHhuUDCW0z6kvB76AiBoeB4XcD2IoNv09%2FP3YGB06q5CgKASYkgaMJmPwOwagbcpzYMQq3HSdxAXHyZhwo%2FdwzS%2BRpM8TbocRE4l1LgMKPKhMAGOqUBdcsgcr%2BSexapkPPtghT2CHB9VyG70xUXChYJNhRQ84Ui%2F3FpRHbbUU3Vc7S8Y7wI001lfpL8l8aJkITDGufuxwoOIYZu6T9%2BoZHzcSsPBTxgFsIMkYKfOlfHk%2BCjDH4bYY4JSs%2FWbbHUkfSKSCLsdUoIMLQrr1RBPxR5gwFK5ai7Y6hvHPXkP0nitQDE4KjcXm1X1JL9fua3sR3vf2%2FgE2EV%2Bg9h&X-Amz-Signature=c173055275b4ec7799f82d82984dae665876e6cbddde761d9d74e3635e56a3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652RUDH77%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVAvdyjMjYNnG5K%2FpmshPWyA9qmTsT1VG%2BdnknDLRLQIgElPgnofmCK3%2FZWk%2Fz3SnBQmAITykh3wsDyx10aGkRQEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEBsaBtd33FCYnUgNCrcA7z6p3xXLik4aAJVkWXe17jUOB%2FKxjJlOWP8lGSTHTJjD6bsfE2qK1BSYW5dkA3j%2B1a7l5mFIsqbe2rJe%2FabrsxlqWb5mwF0cJYyAdWrhqoxPIpUKzb5ZZpLH6s7thC8VSGw4vIi5UlzeY72gdOPrfHRqj4aMqm%2FhSxTQrZrFBl57DihnLVXqbzID3rXyGs75dpfrIzKhMJu3iXfhX0C88T2g6fuWa7nyWYd01mJxqrda1beUhLz3P2X%2BKy4v9pcXvE15Jh7xGIHnRyocAL5hlFo7qjjmWEQwmB1ByvsnvoPu8MD8nusIBxSEB1CqDQN3cpGha%2BwWLD%2Bq0YVgn%2BFf0dTWeU4xhG7lxiGpR9X%2F%2B9kWo%2F5sO%2FTbHmXiLTlGMjCEhVhkbNqeATS1T8mFEnr5hDGVR3PzIpp7K9JdiSczbOsvUIolzruzoK1SRLn8xTFCE6N1KQDcumw%2BJ9JQ3qrMuXCyXxdMN1El8ltzhBha43jelgGFSl%2BjAaafq0Mog7j0l19pYIqMVbCxUPjhYQz6dHhuUDCW0z6kvB76AiBoeB4XcD2IoNv09%2FP3YGB06q5CgKASYkgaMJmPwOwagbcpzYMQq3HSdxAXHyZhwo%2FdwzS%2BRpM8TbocRE4l1LgMKPKhMAGOqUBdcsgcr%2BSexapkPPtghT2CHB9VyG70xUXChYJNhRQ84Ui%2F3FpRHbbUU3Vc7S8Y7wI001lfpL8l8aJkITDGufuxwoOIYZu6T9%2BoZHzcSsPBTxgFsIMkYKfOlfHk%2BCjDH4bYY4JSs%2FWbbHUkfSKSCLsdUoIMLQrr1RBPxR5gwFK5ai7Y6hvHPXkP0nitQDE4KjcXm1X1JL9fua3sR3vf2%2FgE2EV%2Bg9h&X-Amz-Signature=ea800152212a46baf203e3ba3b3e11e2e48c4aead7c5ad2c7630d1fa49d1a37b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
