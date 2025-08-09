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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642IF3PF7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDBjvSMQljAVa2GJ6Z1E63wYwTFGqCL4XoUjSZuFDY5YAiEAi8PMGNMgM4ePeg9NkSl5dutPk1WbtOuN5rWsfOzSBF8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN2GSVJphNgyTezySrcA2wI9v3E6d8V%2FEQboSQTsPfKF6iHs2uQ2VLJprZfZcxNB7dSLsy%2FKPI1fQK6tywg7G93vsW9x3J84HJwnY1GsmKDW5p4Jgvf9Rw6UD8HEMKCmcIdFj0BjE4hdwuHMRaFBBPgJkmMnrFZQX%2FfR35nfRydm7gAkv%2B9%2F74D%2Fo2Nl1%2BpOycpW3Bm8mDR5ILUR%2FWV6taokaMAhWo5qE1Np14z%2F6d01BTBRuOxp82DS0Tauy6IhEfU2p1p9eCyx4P3IeN%2FXntvkZmnc6ID%2B8nHXiwJIK%2FK%2FsBeLXJwbqYTr6zwasZTV4LmquWx9fHjdsaWlG2Kda05lg0PU%2Fwn1h8Nc2nRsuwnYk1%2BTD%2BJSh8TIYnJTYx7%2FeJqEtpp28WyBp0BcWnxq%2FdGixC%2FpI%2FbLKXxrjZ5dnLiPSkjmB03rrljDQBm%2F0hNmCyoNXjLH9QtPwAW%2BBOvF6xdc9RIiUaYStRE8ubYtK60wc4dck1KS40pTcVyt3Z8iFAJNJUPx8OA13GbKPVIkcyqH0faI4BOcqqAHErF3JKXigcP91lgYk9eTki02k1GorKiiq95%2BC5ucP2jbKwk%2BdFsT9Uj7MD30NLTlazF5ZHM7YiPj7IXf9A33RSW%2BrbRKZw7IpMvKCW85ehaMKfF28QGOqUBTlphATiKwBvJAiOYFltyFZg4jCZkartRfqrmVoT8t1Fknt%2F1ROO8LxAYVXI5mVXEqU7iJrbFfX7zsoZH9IMmlHv1LoTDA39RlNleenafunkAwNKGV30YIxI%2BXtZo6z1Hp%2BNBejyYZGCVzWStYzVg26tXFa8jpSoZmTF0zhzcH%2Be%2BeuZaQU0avaELRO9dyx7v3ATr7MkUzDu9vC27tZhCBrlbJAxS&X-Amz-Signature=499a0b7a031db0c4d07ac39e08f760769d1eaa764a43a40ec4c16bf69aa4c343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642IF3PF7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDBjvSMQljAVa2GJ6Z1E63wYwTFGqCL4XoUjSZuFDY5YAiEAi8PMGNMgM4ePeg9NkSl5dutPk1WbtOuN5rWsfOzSBF8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN2GSVJphNgyTezySrcA2wI9v3E6d8V%2FEQboSQTsPfKF6iHs2uQ2VLJprZfZcxNB7dSLsy%2FKPI1fQK6tywg7G93vsW9x3J84HJwnY1GsmKDW5p4Jgvf9Rw6UD8HEMKCmcIdFj0BjE4hdwuHMRaFBBPgJkmMnrFZQX%2FfR35nfRydm7gAkv%2B9%2F74D%2Fo2Nl1%2BpOycpW3Bm8mDR5ILUR%2FWV6taokaMAhWo5qE1Np14z%2F6d01BTBRuOxp82DS0Tauy6IhEfU2p1p9eCyx4P3IeN%2FXntvkZmnc6ID%2B8nHXiwJIK%2FK%2FsBeLXJwbqYTr6zwasZTV4LmquWx9fHjdsaWlG2Kda05lg0PU%2Fwn1h8Nc2nRsuwnYk1%2BTD%2BJSh8TIYnJTYx7%2FeJqEtpp28WyBp0BcWnxq%2FdGixC%2FpI%2FbLKXxrjZ5dnLiPSkjmB03rrljDQBm%2F0hNmCyoNXjLH9QtPwAW%2BBOvF6xdc9RIiUaYStRE8ubYtK60wc4dck1KS40pTcVyt3Z8iFAJNJUPx8OA13GbKPVIkcyqH0faI4BOcqqAHErF3JKXigcP91lgYk9eTki02k1GorKiiq95%2BC5ucP2jbKwk%2BdFsT9Uj7MD30NLTlazF5ZHM7YiPj7IXf9A33RSW%2BrbRKZw7IpMvKCW85ehaMKfF28QGOqUBTlphATiKwBvJAiOYFltyFZg4jCZkartRfqrmVoT8t1Fknt%2F1ROO8LxAYVXI5mVXEqU7iJrbFfX7zsoZH9IMmlHv1LoTDA39RlNleenafunkAwNKGV30YIxI%2BXtZo6z1Hp%2BNBejyYZGCVzWStYzVg26tXFa8jpSoZmTF0zhzcH%2Be%2BeuZaQU0avaELRO9dyx7v3ATr7MkUzDu9vC27tZhCBrlbJAxS&X-Amz-Signature=407b25878a8f4e83e58c64ab96dfdf9f2566ec94062278bf295ef6bf7eb3fe21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642IF3PF7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDBjvSMQljAVa2GJ6Z1E63wYwTFGqCL4XoUjSZuFDY5YAiEAi8PMGNMgM4ePeg9NkSl5dutPk1WbtOuN5rWsfOzSBF8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN2GSVJphNgyTezySrcA2wI9v3E6d8V%2FEQboSQTsPfKF6iHs2uQ2VLJprZfZcxNB7dSLsy%2FKPI1fQK6tywg7G93vsW9x3J84HJwnY1GsmKDW5p4Jgvf9Rw6UD8HEMKCmcIdFj0BjE4hdwuHMRaFBBPgJkmMnrFZQX%2FfR35nfRydm7gAkv%2B9%2F74D%2Fo2Nl1%2BpOycpW3Bm8mDR5ILUR%2FWV6taokaMAhWo5qE1Np14z%2F6d01BTBRuOxp82DS0Tauy6IhEfU2p1p9eCyx4P3IeN%2FXntvkZmnc6ID%2B8nHXiwJIK%2FK%2FsBeLXJwbqYTr6zwasZTV4LmquWx9fHjdsaWlG2Kda05lg0PU%2Fwn1h8Nc2nRsuwnYk1%2BTD%2BJSh8TIYnJTYx7%2FeJqEtpp28WyBp0BcWnxq%2FdGixC%2FpI%2FbLKXxrjZ5dnLiPSkjmB03rrljDQBm%2F0hNmCyoNXjLH9QtPwAW%2BBOvF6xdc9RIiUaYStRE8ubYtK60wc4dck1KS40pTcVyt3Z8iFAJNJUPx8OA13GbKPVIkcyqH0faI4BOcqqAHErF3JKXigcP91lgYk9eTki02k1GorKiiq95%2BC5ucP2jbKwk%2BdFsT9Uj7MD30NLTlazF5ZHM7YiPj7IXf9A33RSW%2BrbRKZw7IpMvKCW85ehaMKfF28QGOqUBTlphATiKwBvJAiOYFltyFZg4jCZkartRfqrmVoT8t1Fknt%2F1ROO8LxAYVXI5mVXEqU7iJrbFfX7zsoZH9IMmlHv1LoTDA39RlNleenafunkAwNKGV30YIxI%2BXtZo6z1Hp%2BNBejyYZGCVzWStYzVg26tXFa8jpSoZmTF0zhzcH%2Be%2BeuZaQU0avaELRO9dyx7v3ATr7MkUzDu9vC27tZhCBrlbJAxS&X-Amz-Signature=d6241cb227d7f4cd9128a571ced2a4eec1dee7e36b90dce770b95e8517adfb27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642IF3PF7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDBjvSMQljAVa2GJ6Z1E63wYwTFGqCL4XoUjSZuFDY5YAiEAi8PMGNMgM4ePeg9NkSl5dutPk1WbtOuN5rWsfOzSBF8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN2GSVJphNgyTezySrcA2wI9v3E6d8V%2FEQboSQTsPfKF6iHs2uQ2VLJprZfZcxNB7dSLsy%2FKPI1fQK6tywg7G93vsW9x3J84HJwnY1GsmKDW5p4Jgvf9Rw6UD8HEMKCmcIdFj0BjE4hdwuHMRaFBBPgJkmMnrFZQX%2FfR35nfRydm7gAkv%2B9%2F74D%2Fo2Nl1%2BpOycpW3Bm8mDR5ILUR%2FWV6taokaMAhWo5qE1Np14z%2F6d01BTBRuOxp82DS0Tauy6IhEfU2p1p9eCyx4P3IeN%2FXntvkZmnc6ID%2B8nHXiwJIK%2FK%2FsBeLXJwbqYTr6zwasZTV4LmquWx9fHjdsaWlG2Kda05lg0PU%2Fwn1h8Nc2nRsuwnYk1%2BTD%2BJSh8TIYnJTYx7%2FeJqEtpp28WyBp0BcWnxq%2FdGixC%2FpI%2FbLKXxrjZ5dnLiPSkjmB03rrljDQBm%2F0hNmCyoNXjLH9QtPwAW%2BBOvF6xdc9RIiUaYStRE8ubYtK60wc4dck1KS40pTcVyt3Z8iFAJNJUPx8OA13GbKPVIkcyqH0faI4BOcqqAHErF3JKXigcP91lgYk9eTki02k1GorKiiq95%2BC5ucP2jbKwk%2BdFsT9Uj7MD30NLTlazF5ZHM7YiPj7IXf9A33RSW%2BrbRKZw7IpMvKCW85ehaMKfF28QGOqUBTlphATiKwBvJAiOYFltyFZg4jCZkartRfqrmVoT8t1Fknt%2F1ROO8LxAYVXI5mVXEqU7iJrbFfX7zsoZH9IMmlHv1LoTDA39RlNleenafunkAwNKGV30YIxI%2BXtZo6z1Hp%2BNBejyYZGCVzWStYzVg26tXFa8jpSoZmTF0zhzcH%2Be%2BeuZaQU0avaELRO9dyx7v3ATr7MkUzDu9vC27tZhCBrlbJAxS&X-Amz-Signature=e79e2e754e4578e5490c720f1e94069973baf672912270ae5eb234570746848d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642IF3PF7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDBjvSMQljAVa2GJ6Z1E63wYwTFGqCL4XoUjSZuFDY5YAiEAi8PMGNMgM4ePeg9NkSl5dutPk1WbtOuN5rWsfOzSBF8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN2GSVJphNgyTezySrcA2wI9v3E6d8V%2FEQboSQTsPfKF6iHs2uQ2VLJprZfZcxNB7dSLsy%2FKPI1fQK6tywg7G93vsW9x3J84HJwnY1GsmKDW5p4Jgvf9Rw6UD8HEMKCmcIdFj0BjE4hdwuHMRaFBBPgJkmMnrFZQX%2FfR35nfRydm7gAkv%2B9%2F74D%2Fo2Nl1%2BpOycpW3Bm8mDR5ILUR%2FWV6taokaMAhWo5qE1Np14z%2F6d01BTBRuOxp82DS0Tauy6IhEfU2p1p9eCyx4P3IeN%2FXntvkZmnc6ID%2B8nHXiwJIK%2FK%2FsBeLXJwbqYTr6zwasZTV4LmquWx9fHjdsaWlG2Kda05lg0PU%2Fwn1h8Nc2nRsuwnYk1%2BTD%2BJSh8TIYnJTYx7%2FeJqEtpp28WyBp0BcWnxq%2FdGixC%2FpI%2FbLKXxrjZ5dnLiPSkjmB03rrljDQBm%2F0hNmCyoNXjLH9QtPwAW%2BBOvF6xdc9RIiUaYStRE8ubYtK60wc4dck1KS40pTcVyt3Z8iFAJNJUPx8OA13GbKPVIkcyqH0faI4BOcqqAHErF3JKXigcP91lgYk9eTki02k1GorKiiq95%2BC5ucP2jbKwk%2BdFsT9Uj7MD30NLTlazF5ZHM7YiPj7IXf9A33RSW%2BrbRKZw7IpMvKCW85ehaMKfF28QGOqUBTlphATiKwBvJAiOYFltyFZg4jCZkartRfqrmVoT8t1Fknt%2F1ROO8LxAYVXI5mVXEqU7iJrbFfX7zsoZH9IMmlHv1LoTDA39RlNleenafunkAwNKGV30YIxI%2BXtZo6z1Hp%2BNBejyYZGCVzWStYzVg26tXFa8jpSoZmTF0zhzcH%2Be%2BeuZaQU0avaELRO9dyx7v3ATr7MkUzDu9vC27tZhCBrlbJAxS&X-Amz-Signature=8e70d004f77ca8eaf625c0e02c052d506acab0a172269b6257898efbf428c36c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642IF3PF7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDBjvSMQljAVa2GJ6Z1E63wYwTFGqCL4XoUjSZuFDY5YAiEAi8PMGNMgM4ePeg9NkSl5dutPk1WbtOuN5rWsfOzSBF8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN2GSVJphNgyTezySrcA2wI9v3E6d8V%2FEQboSQTsPfKF6iHs2uQ2VLJprZfZcxNB7dSLsy%2FKPI1fQK6tywg7G93vsW9x3J84HJwnY1GsmKDW5p4Jgvf9Rw6UD8HEMKCmcIdFj0BjE4hdwuHMRaFBBPgJkmMnrFZQX%2FfR35nfRydm7gAkv%2B9%2F74D%2Fo2Nl1%2BpOycpW3Bm8mDR5ILUR%2FWV6taokaMAhWo5qE1Np14z%2F6d01BTBRuOxp82DS0Tauy6IhEfU2p1p9eCyx4P3IeN%2FXntvkZmnc6ID%2B8nHXiwJIK%2FK%2FsBeLXJwbqYTr6zwasZTV4LmquWx9fHjdsaWlG2Kda05lg0PU%2Fwn1h8Nc2nRsuwnYk1%2BTD%2BJSh8TIYnJTYx7%2FeJqEtpp28WyBp0BcWnxq%2FdGixC%2FpI%2FbLKXxrjZ5dnLiPSkjmB03rrljDQBm%2F0hNmCyoNXjLH9QtPwAW%2BBOvF6xdc9RIiUaYStRE8ubYtK60wc4dck1KS40pTcVyt3Z8iFAJNJUPx8OA13GbKPVIkcyqH0faI4BOcqqAHErF3JKXigcP91lgYk9eTki02k1GorKiiq95%2BC5ucP2jbKwk%2BdFsT9Uj7MD30NLTlazF5ZHM7YiPj7IXf9A33RSW%2BrbRKZw7IpMvKCW85ehaMKfF28QGOqUBTlphATiKwBvJAiOYFltyFZg4jCZkartRfqrmVoT8t1Fknt%2F1ROO8LxAYVXI5mVXEqU7iJrbFfX7zsoZH9IMmlHv1LoTDA39RlNleenafunkAwNKGV30YIxI%2BXtZo6z1Hp%2BNBejyYZGCVzWStYzVg26tXFa8jpSoZmTF0zhzcH%2Be%2BeuZaQU0avaELRO9dyx7v3ATr7MkUzDu9vC27tZhCBrlbJAxS&X-Amz-Signature=a696709c38421bdb95ccb07369a0499151eefeac3884b25e560a6c27b1403081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642IF3PF7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDBjvSMQljAVa2GJ6Z1E63wYwTFGqCL4XoUjSZuFDY5YAiEAi8PMGNMgM4ePeg9NkSl5dutPk1WbtOuN5rWsfOzSBF8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCN2GSVJphNgyTezySrcA2wI9v3E6d8V%2FEQboSQTsPfKF6iHs2uQ2VLJprZfZcxNB7dSLsy%2FKPI1fQK6tywg7G93vsW9x3J84HJwnY1GsmKDW5p4Jgvf9Rw6UD8HEMKCmcIdFj0BjE4hdwuHMRaFBBPgJkmMnrFZQX%2FfR35nfRydm7gAkv%2B9%2F74D%2Fo2Nl1%2BpOycpW3Bm8mDR5ILUR%2FWV6taokaMAhWo5qE1Np14z%2F6d01BTBRuOxp82DS0Tauy6IhEfU2p1p9eCyx4P3IeN%2FXntvkZmnc6ID%2B8nHXiwJIK%2FK%2FsBeLXJwbqYTr6zwasZTV4LmquWx9fHjdsaWlG2Kda05lg0PU%2Fwn1h8Nc2nRsuwnYk1%2BTD%2BJSh8TIYnJTYx7%2FeJqEtpp28WyBp0BcWnxq%2FdGixC%2FpI%2FbLKXxrjZ5dnLiPSkjmB03rrljDQBm%2F0hNmCyoNXjLH9QtPwAW%2BBOvF6xdc9RIiUaYStRE8ubYtK60wc4dck1KS40pTcVyt3Z8iFAJNJUPx8OA13GbKPVIkcyqH0faI4BOcqqAHErF3JKXigcP91lgYk9eTki02k1GorKiiq95%2BC5ucP2jbKwk%2BdFsT9Uj7MD30NLTlazF5ZHM7YiPj7IXf9A33RSW%2BrbRKZw7IpMvKCW85ehaMKfF28QGOqUBTlphATiKwBvJAiOYFltyFZg4jCZkartRfqrmVoT8t1Fknt%2F1ROO8LxAYVXI5mVXEqU7iJrbFfX7zsoZH9IMmlHv1LoTDA39RlNleenafunkAwNKGV30YIxI%2BXtZo6z1Hp%2BNBejyYZGCVzWStYzVg26tXFa8jpSoZmTF0zhzcH%2Be%2BeuZaQU0avaELRO9dyx7v3ATr7MkUzDu9vC27tZhCBrlbJAxS&X-Amz-Signature=9a1451ac0719985a29e19e2a9e7cd4af2dee4f2c7e7cb895cfba4be13c99878d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
