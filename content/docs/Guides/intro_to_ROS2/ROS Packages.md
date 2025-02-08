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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUNQ5AF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDKsSn%2BcCs4vftpVkJlqTokUSTU5zZZ%2Fhdi29T1V8aPugIhAKc8%2BM1fsaHpFKAeEKPMUfgyL%2Foa5GoJbrJsiSOvgAbxKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSflEtLz75v9bbu0q3AOEqAnsGswdsunoOm5tc1CINXqVc59V7HeCoS45uHqGbZEpbTjSgb70W64t0y%2F8Qg3JoX2UEcfB4W7w%2FJjvSJcu8KwJnlx5G3EYR0W4KsVtLwSJuQSYri63cXo6yPGy%2F5GCUDc2SqMWp%2BTXcw2wZPfx1BlO%2Ff4UsC74uIFDg5TZn2KQlaD6JYgqQTFOcIjbwBBQ%2FeN%2B8FdkwAny5CUgW8ZCgriADp%2Fjqg4Fm4%2BdWFb81gBR9ZDEKnFX3X%2FLGhxoFhPbTGagvjiQH%2F%2BaFx5g2tY9Jw572mNKWpsCkhhXonqZasVccAa0I2eanUABxJJivCLiuAt9wBVcL9CsKmkYMsrbjTG%2FCod0sausBsxUekrGECWbjRqMq905BH4eC4fh5jAnc47uJp%2F0JHlpN87vJ95VfMN3AyIRWf9nBxP0tc6i20bi4CkCmraK07bB%2FXMBSeugludhj6op9jChd7Rqjfb8mqyCob8t8k4oPMtMIrca0V6SxxlqvIxikeO0YzMkkRxU2usa1vpFSFthhkVR7Cqgz7nb%2BGCB6JjkOC3lEWMGuXz9n5jZEc%2FGyvHUzPqaOkK0QQ9haw4p476va1DzsfyWP%2FjV8pNS1T%2BTf%2FfsyexUPmjDRs3Whi65dKHfZTDHmJ%2B9BjqkAa7b8FE7M87B4z4h9Y8KTFxvt8aaQjMfmMEBt3%2FObqnhCeqWX0MrPZrFfXDJPqn%2B1fQy1x%2BloiHKI56bWwpwEoGxzq0j5cjwDU4jWadS4naahJYdSd5svlGPRo%2Fr5m2aDdAoFw2QmjsuPUAixm2Uk90n3N9%2BmTwLpWqAL%2FkewbOdZUfrWfbrfeuhXMJ1fVcwGNjOM5IjAOORwI7Z7rblQCBKCUgo&X-Amz-Signature=131fbf126d42d685a94f0ce5b161fa2279c32b17a7d76677e733382836823468&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUNQ5AF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDKsSn%2BcCs4vftpVkJlqTokUSTU5zZZ%2Fhdi29T1V8aPugIhAKc8%2BM1fsaHpFKAeEKPMUfgyL%2Foa5GoJbrJsiSOvgAbxKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSflEtLz75v9bbu0q3AOEqAnsGswdsunoOm5tc1CINXqVc59V7HeCoS45uHqGbZEpbTjSgb70W64t0y%2F8Qg3JoX2UEcfB4W7w%2FJjvSJcu8KwJnlx5G3EYR0W4KsVtLwSJuQSYri63cXo6yPGy%2F5GCUDc2SqMWp%2BTXcw2wZPfx1BlO%2Ff4UsC74uIFDg5TZn2KQlaD6JYgqQTFOcIjbwBBQ%2FeN%2B8FdkwAny5CUgW8ZCgriADp%2Fjqg4Fm4%2BdWFb81gBR9ZDEKnFX3X%2FLGhxoFhPbTGagvjiQH%2F%2BaFx5g2tY9Jw572mNKWpsCkhhXonqZasVccAa0I2eanUABxJJivCLiuAt9wBVcL9CsKmkYMsrbjTG%2FCod0sausBsxUekrGECWbjRqMq905BH4eC4fh5jAnc47uJp%2F0JHlpN87vJ95VfMN3AyIRWf9nBxP0tc6i20bi4CkCmraK07bB%2FXMBSeugludhj6op9jChd7Rqjfb8mqyCob8t8k4oPMtMIrca0V6SxxlqvIxikeO0YzMkkRxU2usa1vpFSFthhkVR7Cqgz7nb%2BGCB6JjkOC3lEWMGuXz9n5jZEc%2FGyvHUzPqaOkK0QQ9haw4p476va1DzsfyWP%2FjV8pNS1T%2BTf%2FfsyexUPmjDRs3Whi65dKHfZTDHmJ%2B9BjqkAa7b8FE7M87B4z4h9Y8KTFxvt8aaQjMfmMEBt3%2FObqnhCeqWX0MrPZrFfXDJPqn%2B1fQy1x%2BloiHKI56bWwpwEoGxzq0j5cjwDU4jWadS4naahJYdSd5svlGPRo%2Fr5m2aDdAoFw2QmjsuPUAixm2Uk90n3N9%2BmTwLpWqAL%2FkewbOdZUfrWfbrfeuhXMJ1fVcwGNjOM5IjAOORwI7Z7rblQCBKCUgo&X-Amz-Signature=cee29ed308b5580768c099e5af48cc7b6b4142be4d434988fa70cc5dde953d04&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUNQ5AF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDKsSn%2BcCs4vftpVkJlqTokUSTU5zZZ%2Fhdi29T1V8aPugIhAKc8%2BM1fsaHpFKAeEKPMUfgyL%2Foa5GoJbrJsiSOvgAbxKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSflEtLz75v9bbu0q3AOEqAnsGswdsunoOm5tc1CINXqVc59V7HeCoS45uHqGbZEpbTjSgb70W64t0y%2F8Qg3JoX2UEcfB4W7w%2FJjvSJcu8KwJnlx5G3EYR0W4KsVtLwSJuQSYri63cXo6yPGy%2F5GCUDc2SqMWp%2BTXcw2wZPfx1BlO%2Ff4UsC74uIFDg5TZn2KQlaD6JYgqQTFOcIjbwBBQ%2FeN%2B8FdkwAny5CUgW8ZCgriADp%2Fjqg4Fm4%2BdWFb81gBR9ZDEKnFX3X%2FLGhxoFhPbTGagvjiQH%2F%2BaFx5g2tY9Jw572mNKWpsCkhhXonqZasVccAa0I2eanUABxJJivCLiuAt9wBVcL9CsKmkYMsrbjTG%2FCod0sausBsxUekrGECWbjRqMq905BH4eC4fh5jAnc47uJp%2F0JHlpN87vJ95VfMN3AyIRWf9nBxP0tc6i20bi4CkCmraK07bB%2FXMBSeugludhj6op9jChd7Rqjfb8mqyCob8t8k4oPMtMIrca0V6SxxlqvIxikeO0YzMkkRxU2usa1vpFSFthhkVR7Cqgz7nb%2BGCB6JjkOC3lEWMGuXz9n5jZEc%2FGyvHUzPqaOkK0QQ9haw4p476va1DzsfyWP%2FjV8pNS1T%2BTf%2FfsyexUPmjDRs3Whi65dKHfZTDHmJ%2B9BjqkAa7b8FE7M87B4z4h9Y8KTFxvt8aaQjMfmMEBt3%2FObqnhCeqWX0MrPZrFfXDJPqn%2B1fQy1x%2BloiHKI56bWwpwEoGxzq0j5cjwDU4jWadS4naahJYdSd5svlGPRo%2Fr5m2aDdAoFw2QmjsuPUAixm2Uk90n3N9%2BmTwLpWqAL%2FkewbOdZUfrWfbrfeuhXMJ1fVcwGNjOM5IjAOORwI7Z7rblQCBKCUgo&X-Amz-Signature=f36aca135428ac9943120380b30b2292659e0baaad96d50e68314301d054dfd8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUNQ5AF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDKsSn%2BcCs4vftpVkJlqTokUSTU5zZZ%2Fhdi29T1V8aPugIhAKc8%2BM1fsaHpFKAeEKPMUfgyL%2Foa5GoJbrJsiSOvgAbxKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSflEtLz75v9bbu0q3AOEqAnsGswdsunoOm5tc1CINXqVc59V7HeCoS45uHqGbZEpbTjSgb70W64t0y%2F8Qg3JoX2UEcfB4W7w%2FJjvSJcu8KwJnlx5G3EYR0W4KsVtLwSJuQSYri63cXo6yPGy%2F5GCUDc2SqMWp%2BTXcw2wZPfx1BlO%2Ff4UsC74uIFDg5TZn2KQlaD6JYgqQTFOcIjbwBBQ%2FeN%2B8FdkwAny5CUgW8ZCgriADp%2Fjqg4Fm4%2BdWFb81gBR9ZDEKnFX3X%2FLGhxoFhPbTGagvjiQH%2F%2BaFx5g2tY9Jw572mNKWpsCkhhXonqZasVccAa0I2eanUABxJJivCLiuAt9wBVcL9CsKmkYMsrbjTG%2FCod0sausBsxUekrGECWbjRqMq905BH4eC4fh5jAnc47uJp%2F0JHlpN87vJ95VfMN3AyIRWf9nBxP0tc6i20bi4CkCmraK07bB%2FXMBSeugludhj6op9jChd7Rqjfb8mqyCob8t8k4oPMtMIrca0V6SxxlqvIxikeO0YzMkkRxU2usa1vpFSFthhkVR7Cqgz7nb%2BGCB6JjkOC3lEWMGuXz9n5jZEc%2FGyvHUzPqaOkK0QQ9haw4p476va1DzsfyWP%2FjV8pNS1T%2BTf%2FfsyexUPmjDRs3Whi65dKHfZTDHmJ%2B9BjqkAa7b8FE7M87B4z4h9Y8KTFxvt8aaQjMfmMEBt3%2FObqnhCeqWX0MrPZrFfXDJPqn%2B1fQy1x%2BloiHKI56bWwpwEoGxzq0j5cjwDU4jWadS4naahJYdSd5svlGPRo%2Fr5m2aDdAoFw2QmjsuPUAixm2Uk90n3N9%2BmTwLpWqAL%2FkewbOdZUfrWfbrfeuhXMJ1fVcwGNjOM5IjAOORwI7Z7rblQCBKCUgo&X-Amz-Signature=6189fea0db1feef0150aa5d233cc1729db86b5517773b7c08fa572e911d4e2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUNQ5AF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDKsSn%2BcCs4vftpVkJlqTokUSTU5zZZ%2Fhdi29T1V8aPugIhAKc8%2BM1fsaHpFKAeEKPMUfgyL%2Foa5GoJbrJsiSOvgAbxKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSflEtLz75v9bbu0q3AOEqAnsGswdsunoOm5tc1CINXqVc59V7HeCoS45uHqGbZEpbTjSgb70W64t0y%2F8Qg3JoX2UEcfB4W7w%2FJjvSJcu8KwJnlx5G3EYR0W4KsVtLwSJuQSYri63cXo6yPGy%2F5GCUDc2SqMWp%2BTXcw2wZPfx1BlO%2Ff4UsC74uIFDg5TZn2KQlaD6JYgqQTFOcIjbwBBQ%2FeN%2B8FdkwAny5CUgW8ZCgriADp%2Fjqg4Fm4%2BdWFb81gBR9ZDEKnFX3X%2FLGhxoFhPbTGagvjiQH%2F%2BaFx5g2tY9Jw572mNKWpsCkhhXonqZasVccAa0I2eanUABxJJivCLiuAt9wBVcL9CsKmkYMsrbjTG%2FCod0sausBsxUekrGECWbjRqMq905BH4eC4fh5jAnc47uJp%2F0JHlpN87vJ95VfMN3AyIRWf9nBxP0tc6i20bi4CkCmraK07bB%2FXMBSeugludhj6op9jChd7Rqjfb8mqyCob8t8k4oPMtMIrca0V6SxxlqvIxikeO0YzMkkRxU2usa1vpFSFthhkVR7Cqgz7nb%2BGCB6JjkOC3lEWMGuXz9n5jZEc%2FGyvHUzPqaOkK0QQ9haw4p476va1DzsfyWP%2FjV8pNS1T%2BTf%2FfsyexUPmjDRs3Whi65dKHfZTDHmJ%2B9BjqkAa7b8FE7M87B4z4h9Y8KTFxvt8aaQjMfmMEBt3%2FObqnhCeqWX0MrPZrFfXDJPqn%2B1fQy1x%2BloiHKI56bWwpwEoGxzq0j5cjwDU4jWadS4naahJYdSd5svlGPRo%2Fr5m2aDdAoFw2QmjsuPUAixm2Uk90n3N9%2BmTwLpWqAL%2FkewbOdZUfrWfbrfeuhXMJ1fVcwGNjOM5IjAOORwI7Z7rblQCBKCUgo&X-Amz-Signature=f10813c23fad84c8789dd53600d27405fdd1dcd39cbb22277fc48d86a507c222&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUNQ5AF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDKsSn%2BcCs4vftpVkJlqTokUSTU5zZZ%2Fhdi29T1V8aPugIhAKc8%2BM1fsaHpFKAeEKPMUfgyL%2Foa5GoJbrJsiSOvgAbxKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSflEtLz75v9bbu0q3AOEqAnsGswdsunoOm5tc1CINXqVc59V7HeCoS45uHqGbZEpbTjSgb70W64t0y%2F8Qg3JoX2UEcfB4W7w%2FJjvSJcu8KwJnlx5G3EYR0W4KsVtLwSJuQSYri63cXo6yPGy%2F5GCUDc2SqMWp%2BTXcw2wZPfx1BlO%2Ff4UsC74uIFDg5TZn2KQlaD6JYgqQTFOcIjbwBBQ%2FeN%2B8FdkwAny5CUgW8ZCgriADp%2Fjqg4Fm4%2BdWFb81gBR9ZDEKnFX3X%2FLGhxoFhPbTGagvjiQH%2F%2BaFx5g2tY9Jw572mNKWpsCkhhXonqZasVccAa0I2eanUABxJJivCLiuAt9wBVcL9CsKmkYMsrbjTG%2FCod0sausBsxUekrGECWbjRqMq905BH4eC4fh5jAnc47uJp%2F0JHlpN87vJ95VfMN3AyIRWf9nBxP0tc6i20bi4CkCmraK07bB%2FXMBSeugludhj6op9jChd7Rqjfb8mqyCob8t8k4oPMtMIrca0V6SxxlqvIxikeO0YzMkkRxU2usa1vpFSFthhkVR7Cqgz7nb%2BGCB6JjkOC3lEWMGuXz9n5jZEc%2FGyvHUzPqaOkK0QQ9haw4p476va1DzsfyWP%2FjV8pNS1T%2BTf%2FfsyexUPmjDRs3Whi65dKHfZTDHmJ%2B9BjqkAa7b8FE7M87B4z4h9Y8KTFxvt8aaQjMfmMEBt3%2FObqnhCeqWX0MrPZrFfXDJPqn%2B1fQy1x%2BloiHKI56bWwpwEoGxzq0j5cjwDU4jWadS4naahJYdSd5svlGPRo%2Fr5m2aDdAoFw2QmjsuPUAixm2Uk90n3N9%2BmTwLpWqAL%2FkewbOdZUfrWfbrfeuhXMJ1fVcwGNjOM5IjAOORwI7Z7rblQCBKCUgo&X-Amz-Signature=f1f4c2b371d8cd2369593a209e546624a93d6332842437787ba6e6970ffca23d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DUNQ5AF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDKsSn%2BcCs4vftpVkJlqTokUSTU5zZZ%2Fhdi29T1V8aPugIhAKc8%2BM1fsaHpFKAeEKPMUfgyL%2Foa5GoJbrJsiSOvgAbxKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznSflEtLz75v9bbu0q3AOEqAnsGswdsunoOm5tc1CINXqVc59V7HeCoS45uHqGbZEpbTjSgb70W64t0y%2F8Qg3JoX2UEcfB4W7w%2FJjvSJcu8KwJnlx5G3EYR0W4KsVtLwSJuQSYri63cXo6yPGy%2F5GCUDc2SqMWp%2BTXcw2wZPfx1BlO%2Ff4UsC74uIFDg5TZn2KQlaD6JYgqQTFOcIjbwBBQ%2FeN%2B8FdkwAny5CUgW8ZCgriADp%2Fjqg4Fm4%2BdWFb81gBR9ZDEKnFX3X%2FLGhxoFhPbTGagvjiQH%2F%2BaFx5g2tY9Jw572mNKWpsCkhhXonqZasVccAa0I2eanUABxJJivCLiuAt9wBVcL9CsKmkYMsrbjTG%2FCod0sausBsxUekrGECWbjRqMq905BH4eC4fh5jAnc47uJp%2F0JHlpN87vJ95VfMN3AyIRWf9nBxP0tc6i20bi4CkCmraK07bB%2FXMBSeugludhj6op9jChd7Rqjfb8mqyCob8t8k4oPMtMIrca0V6SxxlqvIxikeO0YzMkkRxU2usa1vpFSFthhkVR7Cqgz7nb%2BGCB6JjkOC3lEWMGuXz9n5jZEc%2FGyvHUzPqaOkK0QQ9haw4p476va1DzsfyWP%2FjV8pNS1T%2BTf%2FfsyexUPmjDRs3Whi65dKHfZTDHmJ%2B9BjqkAa7b8FE7M87B4z4h9Y8KTFxvt8aaQjMfmMEBt3%2FObqnhCeqWX0MrPZrFfXDJPqn%2B1fQy1x%2BloiHKI56bWwpwEoGxzq0j5cjwDU4jWadS4naahJYdSd5svlGPRo%2Fr5m2aDdAoFw2QmjsuPUAixm2Uk90n3N9%2BmTwLpWqAL%2FkewbOdZUfrWfbrfeuhXMJ1fVcwGNjOM5IjAOORwI7Z7rblQCBKCUgo&X-Amz-Signature=9614d8cfe45d5893d733cf57b5d4fadbbb5257735f027358fe245c9c08e50ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
