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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQHX56Q%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEc7lLU2ytf%2BfnA04%2BbMb3DRvIw%2BtILtAzYaxRYiG5c3AiEAxfG%2FqnDbOicvg5ik7RVRy1%2Frnh6e%2BeTPHaK66aSXxrQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIMGLqoc8B12EXLAmircA4OnWArQ9oC8JYyu5KrAmalT8QS%2FNqwhtUmM%2FLZV4vHjDqzGm0kKaxDZH3EQc6KDhaZv0Z8TU6E5ySPlPVC9P1T7oJQdIXI%2Fl4569vbFqEZ8QXfNwr%2F5mJjR0cz4RekM61ZYik1sdyWZPyUv0dgDPL5ezz0K2UtZm2l7oafNOibYy1pSnBXjSsKlU8mUp%2BvHWdMs1L3azy9tzv8Qj9QENdBZEX3aW%2BHy86m3a%2BfFtaL%2FtNjLm12swUvF0Zvp12EOS7jrdNbLGoeQzvPCqvU%2FG7%2F7FczMGjofQe9IFEEwWzCmdMsA4oZYXGg7VaZ%2BCbxSQrux4Zr0cFX3sGijKsSvoapOJ%2BFIE2XV0%2Fg8perqC306Gy5vDxGDZ0vfmnX63Q3qOkilnyLLR6Vi4651WNFCbpIjAi7AUakgZOa35XMgRVTsjrHepJWa0wDNU6gnIhVxt1z1AZcwH4Lc8XBItBttx1IqtM%2Ba4f8qKLUXK5rxZ8ZMdWU4fcf%2FhaY5Z2a3f0xIivik5hZAmRI5Q3NNY1LJH00A%2BEeBKT23JkoxYSpx%2BskW37ekTTnw%2FGQPlLE26QWg2WdoIGL4hzv7tQn2%2Fmr7r4TPtyLiMNfgKS%2BGOa5FIhnGVHSf5nh9grp4iHfYMNTPm8sGOqUBQPYGcIxjRAWnk8PH98lZHgZbJIsk%2FQX2f%2FDLSSq74E6TRJDg7CTGH%2B6diC5eEn3EKhSG%2FeqzjeFGQswckm1FdHPbhGfIV%2B0gAol9APS8y5iZh1b%2F5nQrkQrt45U5ZKxJdj494Bt4Dpk4jHN187cUuXTmP6p%2BPd7nZVaoQZkxd3IHWx9bCg6uwRU9BsyuU6scOcu8XcEou0z4o3HesJs4fOMpoZ8h&X-Amz-Signature=06733a679a75a4b145cd2cb13847cd5e7e8c021b9657e9f819708c963b7f8bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQHX56Q%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEc7lLU2ytf%2BfnA04%2BbMb3DRvIw%2BtILtAzYaxRYiG5c3AiEAxfG%2FqnDbOicvg5ik7RVRy1%2Frnh6e%2BeTPHaK66aSXxrQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIMGLqoc8B12EXLAmircA4OnWArQ9oC8JYyu5KrAmalT8QS%2FNqwhtUmM%2FLZV4vHjDqzGm0kKaxDZH3EQc6KDhaZv0Z8TU6E5ySPlPVC9P1T7oJQdIXI%2Fl4569vbFqEZ8QXfNwr%2F5mJjR0cz4RekM61ZYik1sdyWZPyUv0dgDPL5ezz0K2UtZm2l7oafNOibYy1pSnBXjSsKlU8mUp%2BvHWdMs1L3azy9tzv8Qj9QENdBZEX3aW%2BHy86m3a%2BfFtaL%2FtNjLm12swUvF0Zvp12EOS7jrdNbLGoeQzvPCqvU%2FG7%2F7FczMGjofQe9IFEEwWzCmdMsA4oZYXGg7VaZ%2BCbxSQrux4Zr0cFX3sGijKsSvoapOJ%2BFIE2XV0%2Fg8perqC306Gy5vDxGDZ0vfmnX63Q3qOkilnyLLR6Vi4651WNFCbpIjAi7AUakgZOa35XMgRVTsjrHepJWa0wDNU6gnIhVxt1z1AZcwH4Lc8XBItBttx1IqtM%2Ba4f8qKLUXK5rxZ8ZMdWU4fcf%2FhaY5Z2a3f0xIivik5hZAmRI5Q3NNY1LJH00A%2BEeBKT23JkoxYSpx%2BskW37ekTTnw%2FGQPlLE26QWg2WdoIGL4hzv7tQn2%2Fmr7r4TPtyLiMNfgKS%2BGOa5FIhnGVHSf5nh9grp4iHfYMNTPm8sGOqUBQPYGcIxjRAWnk8PH98lZHgZbJIsk%2FQX2f%2FDLSSq74E6TRJDg7CTGH%2B6diC5eEn3EKhSG%2FeqzjeFGQswckm1FdHPbhGfIV%2B0gAol9APS8y5iZh1b%2F5nQrkQrt45U5ZKxJdj494Bt4Dpk4jHN187cUuXTmP6p%2BPd7nZVaoQZkxd3IHWx9bCg6uwRU9BsyuU6scOcu8XcEou0z4o3HesJs4fOMpoZ8h&X-Amz-Signature=f58d48b6f88ce03455a6af761193f44b6e3381809b839e03eb1f3e377530a68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQHX56Q%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEc7lLU2ytf%2BfnA04%2BbMb3DRvIw%2BtILtAzYaxRYiG5c3AiEAxfG%2FqnDbOicvg5ik7RVRy1%2Frnh6e%2BeTPHaK66aSXxrQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIMGLqoc8B12EXLAmircA4OnWArQ9oC8JYyu5KrAmalT8QS%2FNqwhtUmM%2FLZV4vHjDqzGm0kKaxDZH3EQc6KDhaZv0Z8TU6E5ySPlPVC9P1T7oJQdIXI%2Fl4569vbFqEZ8QXfNwr%2F5mJjR0cz4RekM61ZYik1sdyWZPyUv0dgDPL5ezz0K2UtZm2l7oafNOibYy1pSnBXjSsKlU8mUp%2BvHWdMs1L3azy9tzv8Qj9QENdBZEX3aW%2BHy86m3a%2BfFtaL%2FtNjLm12swUvF0Zvp12EOS7jrdNbLGoeQzvPCqvU%2FG7%2F7FczMGjofQe9IFEEwWzCmdMsA4oZYXGg7VaZ%2BCbxSQrux4Zr0cFX3sGijKsSvoapOJ%2BFIE2XV0%2Fg8perqC306Gy5vDxGDZ0vfmnX63Q3qOkilnyLLR6Vi4651WNFCbpIjAi7AUakgZOa35XMgRVTsjrHepJWa0wDNU6gnIhVxt1z1AZcwH4Lc8XBItBttx1IqtM%2Ba4f8qKLUXK5rxZ8ZMdWU4fcf%2FhaY5Z2a3f0xIivik5hZAmRI5Q3NNY1LJH00A%2BEeBKT23JkoxYSpx%2BskW37ekTTnw%2FGQPlLE26QWg2WdoIGL4hzv7tQn2%2Fmr7r4TPtyLiMNfgKS%2BGOa5FIhnGVHSf5nh9grp4iHfYMNTPm8sGOqUBQPYGcIxjRAWnk8PH98lZHgZbJIsk%2FQX2f%2FDLSSq74E6TRJDg7CTGH%2B6diC5eEn3EKhSG%2FeqzjeFGQswckm1FdHPbhGfIV%2B0gAol9APS8y5iZh1b%2F5nQrkQrt45U5ZKxJdj494Bt4Dpk4jHN187cUuXTmP6p%2BPd7nZVaoQZkxd3IHWx9bCg6uwRU9BsyuU6scOcu8XcEou0z4o3HesJs4fOMpoZ8h&X-Amz-Signature=59493d6042c983b99a16444f652a43f3a7fbf1c5b5a55eed3fd765e1cb43e889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQHX56Q%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEc7lLU2ytf%2BfnA04%2BbMb3DRvIw%2BtILtAzYaxRYiG5c3AiEAxfG%2FqnDbOicvg5ik7RVRy1%2Frnh6e%2BeTPHaK66aSXxrQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIMGLqoc8B12EXLAmircA4OnWArQ9oC8JYyu5KrAmalT8QS%2FNqwhtUmM%2FLZV4vHjDqzGm0kKaxDZH3EQc6KDhaZv0Z8TU6E5ySPlPVC9P1T7oJQdIXI%2Fl4569vbFqEZ8QXfNwr%2F5mJjR0cz4RekM61ZYik1sdyWZPyUv0dgDPL5ezz0K2UtZm2l7oafNOibYy1pSnBXjSsKlU8mUp%2BvHWdMs1L3azy9tzv8Qj9QENdBZEX3aW%2BHy86m3a%2BfFtaL%2FtNjLm12swUvF0Zvp12EOS7jrdNbLGoeQzvPCqvU%2FG7%2F7FczMGjofQe9IFEEwWzCmdMsA4oZYXGg7VaZ%2BCbxSQrux4Zr0cFX3sGijKsSvoapOJ%2BFIE2XV0%2Fg8perqC306Gy5vDxGDZ0vfmnX63Q3qOkilnyLLR6Vi4651WNFCbpIjAi7AUakgZOa35XMgRVTsjrHepJWa0wDNU6gnIhVxt1z1AZcwH4Lc8XBItBttx1IqtM%2Ba4f8qKLUXK5rxZ8ZMdWU4fcf%2FhaY5Z2a3f0xIivik5hZAmRI5Q3NNY1LJH00A%2BEeBKT23JkoxYSpx%2BskW37ekTTnw%2FGQPlLE26QWg2WdoIGL4hzv7tQn2%2Fmr7r4TPtyLiMNfgKS%2BGOa5FIhnGVHSf5nh9grp4iHfYMNTPm8sGOqUBQPYGcIxjRAWnk8PH98lZHgZbJIsk%2FQX2f%2FDLSSq74E6TRJDg7CTGH%2B6diC5eEn3EKhSG%2FeqzjeFGQswckm1FdHPbhGfIV%2B0gAol9APS8y5iZh1b%2F5nQrkQrt45U5ZKxJdj494Bt4Dpk4jHN187cUuXTmP6p%2BPd7nZVaoQZkxd3IHWx9bCg6uwRU9BsyuU6scOcu8XcEou0z4o3HesJs4fOMpoZ8h&X-Amz-Signature=128350e695b8de59f090e4f8911631b5822decbc9e56d88e13952242e05cbbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQHX56Q%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEc7lLU2ytf%2BfnA04%2BbMb3DRvIw%2BtILtAzYaxRYiG5c3AiEAxfG%2FqnDbOicvg5ik7RVRy1%2Frnh6e%2BeTPHaK66aSXxrQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIMGLqoc8B12EXLAmircA4OnWArQ9oC8JYyu5KrAmalT8QS%2FNqwhtUmM%2FLZV4vHjDqzGm0kKaxDZH3EQc6KDhaZv0Z8TU6E5ySPlPVC9P1T7oJQdIXI%2Fl4569vbFqEZ8QXfNwr%2F5mJjR0cz4RekM61ZYik1sdyWZPyUv0dgDPL5ezz0K2UtZm2l7oafNOibYy1pSnBXjSsKlU8mUp%2BvHWdMs1L3azy9tzv8Qj9QENdBZEX3aW%2BHy86m3a%2BfFtaL%2FtNjLm12swUvF0Zvp12EOS7jrdNbLGoeQzvPCqvU%2FG7%2F7FczMGjofQe9IFEEwWzCmdMsA4oZYXGg7VaZ%2BCbxSQrux4Zr0cFX3sGijKsSvoapOJ%2BFIE2XV0%2Fg8perqC306Gy5vDxGDZ0vfmnX63Q3qOkilnyLLR6Vi4651WNFCbpIjAi7AUakgZOa35XMgRVTsjrHepJWa0wDNU6gnIhVxt1z1AZcwH4Lc8XBItBttx1IqtM%2Ba4f8qKLUXK5rxZ8ZMdWU4fcf%2FhaY5Z2a3f0xIivik5hZAmRI5Q3NNY1LJH00A%2BEeBKT23JkoxYSpx%2BskW37ekTTnw%2FGQPlLE26QWg2WdoIGL4hzv7tQn2%2Fmr7r4TPtyLiMNfgKS%2BGOa5FIhnGVHSf5nh9grp4iHfYMNTPm8sGOqUBQPYGcIxjRAWnk8PH98lZHgZbJIsk%2FQX2f%2FDLSSq74E6TRJDg7CTGH%2B6diC5eEn3EKhSG%2FeqzjeFGQswckm1FdHPbhGfIV%2B0gAol9APS8y5iZh1b%2F5nQrkQrt45U5ZKxJdj494Bt4Dpk4jHN187cUuXTmP6p%2BPd7nZVaoQZkxd3IHWx9bCg6uwRU9BsyuU6scOcu8XcEou0z4o3HesJs4fOMpoZ8h&X-Amz-Signature=dfc085c47cbed90bf7318f126d8ba97378a073fc25a404886c68e54baea1385f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQHX56Q%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEc7lLU2ytf%2BfnA04%2BbMb3DRvIw%2BtILtAzYaxRYiG5c3AiEAxfG%2FqnDbOicvg5ik7RVRy1%2Frnh6e%2BeTPHaK66aSXxrQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIMGLqoc8B12EXLAmircA4OnWArQ9oC8JYyu5KrAmalT8QS%2FNqwhtUmM%2FLZV4vHjDqzGm0kKaxDZH3EQc6KDhaZv0Z8TU6E5ySPlPVC9P1T7oJQdIXI%2Fl4569vbFqEZ8QXfNwr%2F5mJjR0cz4RekM61ZYik1sdyWZPyUv0dgDPL5ezz0K2UtZm2l7oafNOibYy1pSnBXjSsKlU8mUp%2BvHWdMs1L3azy9tzv8Qj9QENdBZEX3aW%2BHy86m3a%2BfFtaL%2FtNjLm12swUvF0Zvp12EOS7jrdNbLGoeQzvPCqvU%2FG7%2F7FczMGjofQe9IFEEwWzCmdMsA4oZYXGg7VaZ%2BCbxSQrux4Zr0cFX3sGijKsSvoapOJ%2BFIE2XV0%2Fg8perqC306Gy5vDxGDZ0vfmnX63Q3qOkilnyLLR6Vi4651WNFCbpIjAi7AUakgZOa35XMgRVTsjrHepJWa0wDNU6gnIhVxt1z1AZcwH4Lc8XBItBttx1IqtM%2Ba4f8qKLUXK5rxZ8ZMdWU4fcf%2FhaY5Z2a3f0xIivik5hZAmRI5Q3NNY1LJH00A%2BEeBKT23JkoxYSpx%2BskW37ekTTnw%2FGQPlLE26QWg2WdoIGL4hzv7tQn2%2Fmr7r4TPtyLiMNfgKS%2BGOa5FIhnGVHSf5nh9grp4iHfYMNTPm8sGOqUBQPYGcIxjRAWnk8PH98lZHgZbJIsk%2FQX2f%2FDLSSq74E6TRJDg7CTGH%2B6diC5eEn3EKhSG%2FeqzjeFGQswckm1FdHPbhGfIV%2B0gAol9APS8y5iZh1b%2F5nQrkQrt45U5ZKxJdj494Bt4Dpk4jHN187cUuXTmP6p%2BPd7nZVaoQZkxd3IHWx9bCg6uwRU9BsyuU6scOcu8XcEou0z4o3HesJs4fOMpoZ8h&X-Amz-Signature=925053f7f73735d8a98c613a0406a4cf3d0470f03359087857bd7bf2fa23410b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQHX56Q%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEc7lLU2ytf%2BfnA04%2BbMb3DRvIw%2BtILtAzYaxRYiG5c3AiEAxfG%2FqnDbOicvg5ik7RVRy1%2Frnh6e%2BeTPHaK66aSXxrQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIMGLqoc8B12EXLAmircA4OnWArQ9oC8JYyu5KrAmalT8QS%2FNqwhtUmM%2FLZV4vHjDqzGm0kKaxDZH3EQc6KDhaZv0Z8TU6E5ySPlPVC9P1T7oJQdIXI%2Fl4569vbFqEZ8QXfNwr%2F5mJjR0cz4RekM61ZYik1sdyWZPyUv0dgDPL5ezz0K2UtZm2l7oafNOibYy1pSnBXjSsKlU8mUp%2BvHWdMs1L3azy9tzv8Qj9QENdBZEX3aW%2BHy86m3a%2BfFtaL%2FtNjLm12swUvF0Zvp12EOS7jrdNbLGoeQzvPCqvU%2FG7%2F7FczMGjofQe9IFEEwWzCmdMsA4oZYXGg7VaZ%2BCbxSQrux4Zr0cFX3sGijKsSvoapOJ%2BFIE2XV0%2Fg8perqC306Gy5vDxGDZ0vfmnX63Q3qOkilnyLLR6Vi4651WNFCbpIjAi7AUakgZOa35XMgRVTsjrHepJWa0wDNU6gnIhVxt1z1AZcwH4Lc8XBItBttx1IqtM%2Ba4f8qKLUXK5rxZ8ZMdWU4fcf%2FhaY5Z2a3f0xIivik5hZAmRI5Q3NNY1LJH00A%2BEeBKT23JkoxYSpx%2BskW37ekTTnw%2FGQPlLE26QWg2WdoIGL4hzv7tQn2%2Fmr7r4TPtyLiMNfgKS%2BGOa5FIhnGVHSf5nh9grp4iHfYMNTPm8sGOqUBQPYGcIxjRAWnk8PH98lZHgZbJIsk%2FQX2f%2FDLSSq74E6TRJDg7CTGH%2B6diC5eEn3EKhSG%2FeqzjeFGQswckm1FdHPbhGfIV%2B0gAol9APS8y5iZh1b%2F5nQrkQrt45U5ZKxJdj494Bt4Dpk4jHN187cUuXTmP6p%2BPd7nZVaoQZkxd3IHWx9bCg6uwRU9BsyuU6scOcu8XcEou0z4o3HesJs4fOMpoZ8h&X-Amz-Signature=9bd00e62e40c799a903baf43e34c27fbcb3c8a7b5356cd9097ace46204f0db6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
