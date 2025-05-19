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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTNWY5D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC76KiZeTYiMa4i9koj3DZ5gg0j8767dFzLhM4cbCWTJAiEA4B6613l6qh%2Fdzh3F0C7XzwiuxvbeeVJ0Q5LHyqh44a4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Ptyy3VdFIi6GwRircAwdIPye8jLcX6L8GKgVEjGdr6im8AoPT%2BRyirpBLIhpBE0XHTg8L4gCLICuCHzuPz3HPl9U9EUAysMxuzgxcUZ76jSMObL2QeFDLVkLi2shqyev%2BZ%2F44kTNy8KD4%2BNGcsbtLIFL2GuoqdGITWndJXcP%2BV2zHepLX7OHOw2iN4OuMsYsCE7kMXKYyc8yOk4ycSSGUyLf3KONU65xZ0qkkB%2FS7FStYk8j31rDtEw4qO5r9xLdLwPE7D282okroU9YP%2BZ3soAW%2B7JHxv3CgxnNO6K3sJCnawQYdGjsN31UgsnXCycm6XtrL5JN9pfle5%2BrvAa83qzIHaOIXnlTMyPCc1obn0BAO%2Fbcxj6pSeTbqIUMRQNVQUSRu1RpjDo48%2BLxAQ5sRn9w%2Beo8dEjCUIOjucCCNtWgmUrqSEaAC%2BnWipvhc7NFHQhkVGjXC7dDzbEYjrFItrbLQLjkdDwPDj6oTnb9YvaKNnW%2FuRMUbTe05b50TTPtWeWWoI%2Bbk8PA8xizMiBBGB%2B2shOEyFICYqdisNewv150jbqozZasjL3dbTw8AgHimi%2Bt1e1NA8BenrNMEENU%2Fx8q2ELoAXlqoyagSYr%2F8Xy6JK%2FZHAdc%2FE7cTeac1UXjetghhLV2r9mDXMLzIrcEGOqUB7fc8O%2BFang0dcIDVrUkhDCSdKN55pRVe8aCchMfOJa1QZOxB84Zx0Ba693lyLzLwaqfLzY1nSotk1Eqe3XXx5TxwKg7Vg7IRFc%2ByNNO5WID4Y1T6i6ybiP%2FxaQrjO61WWLhLp5c4xfp5jiRkzA3bz7fx1X2e9xPomr9ZGfU%2FHGXTRoqbzD9D3KrxTk%2FIvfbpwFCwvDPRZze0yX%2BFSD5GQh4MSetz&X-Amz-Signature=305c026b66a259be3f2345046ebb2e873e59d0f7c710410bb7364b26e7a1f0c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTNWY5D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC76KiZeTYiMa4i9koj3DZ5gg0j8767dFzLhM4cbCWTJAiEA4B6613l6qh%2Fdzh3F0C7XzwiuxvbeeVJ0Q5LHyqh44a4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Ptyy3VdFIi6GwRircAwdIPye8jLcX6L8GKgVEjGdr6im8AoPT%2BRyirpBLIhpBE0XHTg8L4gCLICuCHzuPz3HPl9U9EUAysMxuzgxcUZ76jSMObL2QeFDLVkLi2shqyev%2BZ%2F44kTNy8KD4%2BNGcsbtLIFL2GuoqdGITWndJXcP%2BV2zHepLX7OHOw2iN4OuMsYsCE7kMXKYyc8yOk4ycSSGUyLf3KONU65xZ0qkkB%2FS7FStYk8j31rDtEw4qO5r9xLdLwPE7D282okroU9YP%2BZ3soAW%2B7JHxv3CgxnNO6K3sJCnawQYdGjsN31UgsnXCycm6XtrL5JN9pfle5%2BrvAa83qzIHaOIXnlTMyPCc1obn0BAO%2Fbcxj6pSeTbqIUMRQNVQUSRu1RpjDo48%2BLxAQ5sRn9w%2Beo8dEjCUIOjucCCNtWgmUrqSEaAC%2BnWipvhc7NFHQhkVGjXC7dDzbEYjrFItrbLQLjkdDwPDj6oTnb9YvaKNnW%2FuRMUbTe05b50TTPtWeWWoI%2Bbk8PA8xizMiBBGB%2B2shOEyFICYqdisNewv150jbqozZasjL3dbTw8AgHimi%2Bt1e1NA8BenrNMEENU%2Fx8q2ELoAXlqoyagSYr%2F8Xy6JK%2FZHAdc%2FE7cTeac1UXjetghhLV2r9mDXMLzIrcEGOqUB7fc8O%2BFang0dcIDVrUkhDCSdKN55pRVe8aCchMfOJa1QZOxB84Zx0Ba693lyLzLwaqfLzY1nSotk1Eqe3XXx5TxwKg7Vg7IRFc%2ByNNO5WID4Y1T6i6ybiP%2FxaQrjO61WWLhLp5c4xfp5jiRkzA3bz7fx1X2e9xPomr9ZGfU%2FHGXTRoqbzD9D3KrxTk%2FIvfbpwFCwvDPRZze0yX%2BFSD5GQh4MSetz&X-Amz-Signature=a8ca7a4230bab50ffd660712761a57517a275328985234531879291b155a14c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTNWY5D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC76KiZeTYiMa4i9koj3DZ5gg0j8767dFzLhM4cbCWTJAiEA4B6613l6qh%2Fdzh3F0C7XzwiuxvbeeVJ0Q5LHyqh44a4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Ptyy3VdFIi6GwRircAwdIPye8jLcX6L8GKgVEjGdr6im8AoPT%2BRyirpBLIhpBE0XHTg8L4gCLICuCHzuPz3HPl9U9EUAysMxuzgxcUZ76jSMObL2QeFDLVkLi2shqyev%2BZ%2F44kTNy8KD4%2BNGcsbtLIFL2GuoqdGITWndJXcP%2BV2zHepLX7OHOw2iN4OuMsYsCE7kMXKYyc8yOk4ycSSGUyLf3KONU65xZ0qkkB%2FS7FStYk8j31rDtEw4qO5r9xLdLwPE7D282okroU9YP%2BZ3soAW%2B7JHxv3CgxnNO6K3sJCnawQYdGjsN31UgsnXCycm6XtrL5JN9pfle5%2BrvAa83qzIHaOIXnlTMyPCc1obn0BAO%2Fbcxj6pSeTbqIUMRQNVQUSRu1RpjDo48%2BLxAQ5sRn9w%2Beo8dEjCUIOjucCCNtWgmUrqSEaAC%2BnWipvhc7NFHQhkVGjXC7dDzbEYjrFItrbLQLjkdDwPDj6oTnb9YvaKNnW%2FuRMUbTe05b50TTPtWeWWoI%2Bbk8PA8xizMiBBGB%2B2shOEyFICYqdisNewv150jbqozZasjL3dbTw8AgHimi%2Bt1e1NA8BenrNMEENU%2Fx8q2ELoAXlqoyagSYr%2F8Xy6JK%2FZHAdc%2FE7cTeac1UXjetghhLV2r9mDXMLzIrcEGOqUB7fc8O%2BFang0dcIDVrUkhDCSdKN55pRVe8aCchMfOJa1QZOxB84Zx0Ba693lyLzLwaqfLzY1nSotk1Eqe3XXx5TxwKg7Vg7IRFc%2ByNNO5WID4Y1T6i6ybiP%2FxaQrjO61WWLhLp5c4xfp5jiRkzA3bz7fx1X2e9xPomr9ZGfU%2FHGXTRoqbzD9D3KrxTk%2FIvfbpwFCwvDPRZze0yX%2BFSD5GQh4MSetz&X-Amz-Signature=495846a1484d2f45f5f6ed723e2dcdc5dc904a4293ef4ff247a89c054478598c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTNWY5D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC76KiZeTYiMa4i9koj3DZ5gg0j8767dFzLhM4cbCWTJAiEA4B6613l6qh%2Fdzh3F0C7XzwiuxvbeeVJ0Q5LHyqh44a4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Ptyy3VdFIi6GwRircAwdIPye8jLcX6L8GKgVEjGdr6im8AoPT%2BRyirpBLIhpBE0XHTg8L4gCLICuCHzuPz3HPl9U9EUAysMxuzgxcUZ76jSMObL2QeFDLVkLi2shqyev%2BZ%2F44kTNy8KD4%2BNGcsbtLIFL2GuoqdGITWndJXcP%2BV2zHepLX7OHOw2iN4OuMsYsCE7kMXKYyc8yOk4ycSSGUyLf3KONU65xZ0qkkB%2FS7FStYk8j31rDtEw4qO5r9xLdLwPE7D282okroU9YP%2BZ3soAW%2B7JHxv3CgxnNO6K3sJCnawQYdGjsN31UgsnXCycm6XtrL5JN9pfle5%2BrvAa83qzIHaOIXnlTMyPCc1obn0BAO%2Fbcxj6pSeTbqIUMRQNVQUSRu1RpjDo48%2BLxAQ5sRn9w%2Beo8dEjCUIOjucCCNtWgmUrqSEaAC%2BnWipvhc7NFHQhkVGjXC7dDzbEYjrFItrbLQLjkdDwPDj6oTnb9YvaKNnW%2FuRMUbTe05b50TTPtWeWWoI%2Bbk8PA8xizMiBBGB%2B2shOEyFICYqdisNewv150jbqozZasjL3dbTw8AgHimi%2Bt1e1NA8BenrNMEENU%2Fx8q2ELoAXlqoyagSYr%2F8Xy6JK%2FZHAdc%2FE7cTeac1UXjetghhLV2r9mDXMLzIrcEGOqUB7fc8O%2BFang0dcIDVrUkhDCSdKN55pRVe8aCchMfOJa1QZOxB84Zx0Ba693lyLzLwaqfLzY1nSotk1Eqe3XXx5TxwKg7Vg7IRFc%2ByNNO5WID4Y1T6i6ybiP%2FxaQrjO61WWLhLp5c4xfp5jiRkzA3bz7fx1X2e9xPomr9ZGfU%2FHGXTRoqbzD9D3KrxTk%2FIvfbpwFCwvDPRZze0yX%2BFSD5GQh4MSetz&X-Amz-Signature=aa77d13ed75be9db1988f75591f00001174c0d3340dc3b6cbb467dbd775337ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTNWY5D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC76KiZeTYiMa4i9koj3DZ5gg0j8767dFzLhM4cbCWTJAiEA4B6613l6qh%2Fdzh3F0C7XzwiuxvbeeVJ0Q5LHyqh44a4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Ptyy3VdFIi6GwRircAwdIPye8jLcX6L8GKgVEjGdr6im8AoPT%2BRyirpBLIhpBE0XHTg8L4gCLICuCHzuPz3HPl9U9EUAysMxuzgxcUZ76jSMObL2QeFDLVkLi2shqyev%2BZ%2F44kTNy8KD4%2BNGcsbtLIFL2GuoqdGITWndJXcP%2BV2zHepLX7OHOw2iN4OuMsYsCE7kMXKYyc8yOk4ycSSGUyLf3KONU65xZ0qkkB%2FS7FStYk8j31rDtEw4qO5r9xLdLwPE7D282okroU9YP%2BZ3soAW%2B7JHxv3CgxnNO6K3sJCnawQYdGjsN31UgsnXCycm6XtrL5JN9pfle5%2BrvAa83qzIHaOIXnlTMyPCc1obn0BAO%2Fbcxj6pSeTbqIUMRQNVQUSRu1RpjDo48%2BLxAQ5sRn9w%2Beo8dEjCUIOjucCCNtWgmUrqSEaAC%2BnWipvhc7NFHQhkVGjXC7dDzbEYjrFItrbLQLjkdDwPDj6oTnb9YvaKNnW%2FuRMUbTe05b50TTPtWeWWoI%2Bbk8PA8xizMiBBGB%2B2shOEyFICYqdisNewv150jbqozZasjL3dbTw8AgHimi%2Bt1e1NA8BenrNMEENU%2Fx8q2ELoAXlqoyagSYr%2F8Xy6JK%2FZHAdc%2FE7cTeac1UXjetghhLV2r9mDXMLzIrcEGOqUB7fc8O%2BFang0dcIDVrUkhDCSdKN55pRVe8aCchMfOJa1QZOxB84Zx0Ba693lyLzLwaqfLzY1nSotk1Eqe3XXx5TxwKg7Vg7IRFc%2ByNNO5WID4Y1T6i6ybiP%2FxaQrjO61WWLhLp5c4xfp5jiRkzA3bz7fx1X2e9xPomr9ZGfU%2FHGXTRoqbzD9D3KrxTk%2FIvfbpwFCwvDPRZze0yX%2BFSD5GQh4MSetz&X-Amz-Signature=ccd164fdba518e4ce8de878cd0e375b150da65a9256d8db251ed8432b0bc2d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTNWY5D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC76KiZeTYiMa4i9koj3DZ5gg0j8767dFzLhM4cbCWTJAiEA4B6613l6qh%2Fdzh3F0C7XzwiuxvbeeVJ0Q5LHyqh44a4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Ptyy3VdFIi6GwRircAwdIPye8jLcX6L8GKgVEjGdr6im8AoPT%2BRyirpBLIhpBE0XHTg8L4gCLICuCHzuPz3HPl9U9EUAysMxuzgxcUZ76jSMObL2QeFDLVkLi2shqyev%2BZ%2F44kTNy8KD4%2BNGcsbtLIFL2GuoqdGITWndJXcP%2BV2zHepLX7OHOw2iN4OuMsYsCE7kMXKYyc8yOk4ycSSGUyLf3KONU65xZ0qkkB%2FS7FStYk8j31rDtEw4qO5r9xLdLwPE7D282okroU9YP%2BZ3soAW%2B7JHxv3CgxnNO6K3sJCnawQYdGjsN31UgsnXCycm6XtrL5JN9pfle5%2BrvAa83qzIHaOIXnlTMyPCc1obn0BAO%2Fbcxj6pSeTbqIUMRQNVQUSRu1RpjDo48%2BLxAQ5sRn9w%2Beo8dEjCUIOjucCCNtWgmUrqSEaAC%2BnWipvhc7NFHQhkVGjXC7dDzbEYjrFItrbLQLjkdDwPDj6oTnb9YvaKNnW%2FuRMUbTe05b50TTPtWeWWoI%2Bbk8PA8xizMiBBGB%2B2shOEyFICYqdisNewv150jbqozZasjL3dbTw8AgHimi%2Bt1e1NA8BenrNMEENU%2Fx8q2ELoAXlqoyagSYr%2F8Xy6JK%2FZHAdc%2FE7cTeac1UXjetghhLV2r9mDXMLzIrcEGOqUB7fc8O%2BFang0dcIDVrUkhDCSdKN55pRVe8aCchMfOJa1QZOxB84Zx0Ba693lyLzLwaqfLzY1nSotk1Eqe3XXx5TxwKg7Vg7IRFc%2ByNNO5WID4Y1T6i6ybiP%2FxaQrjO61WWLhLp5c4xfp5jiRkzA3bz7fx1X2e9xPomr9ZGfU%2FHGXTRoqbzD9D3KrxTk%2FIvfbpwFCwvDPRZze0yX%2BFSD5GQh4MSetz&X-Amz-Signature=3f312000c81b2c8d3f025434c72885de1b4cefe74e28ecc014aa343fa9721f40&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTNWY5D%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC76KiZeTYiMa4i9koj3DZ5gg0j8767dFzLhM4cbCWTJAiEA4B6613l6qh%2Fdzh3F0C7XzwiuxvbeeVJ0Q5LHyqh44a4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Ptyy3VdFIi6GwRircAwdIPye8jLcX6L8GKgVEjGdr6im8AoPT%2BRyirpBLIhpBE0XHTg8L4gCLICuCHzuPz3HPl9U9EUAysMxuzgxcUZ76jSMObL2QeFDLVkLi2shqyev%2BZ%2F44kTNy8KD4%2BNGcsbtLIFL2GuoqdGITWndJXcP%2BV2zHepLX7OHOw2iN4OuMsYsCE7kMXKYyc8yOk4ycSSGUyLf3KONU65xZ0qkkB%2FS7FStYk8j31rDtEw4qO5r9xLdLwPE7D282okroU9YP%2BZ3soAW%2B7JHxv3CgxnNO6K3sJCnawQYdGjsN31UgsnXCycm6XtrL5JN9pfle5%2BrvAa83qzIHaOIXnlTMyPCc1obn0BAO%2Fbcxj6pSeTbqIUMRQNVQUSRu1RpjDo48%2BLxAQ5sRn9w%2Beo8dEjCUIOjucCCNtWgmUrqSEaAC%2BnWipvhc7NFHQhkVGjXC7dDzbEYjrFItrbLQLjkdDwPDj6oTnb9YvaKNnW%2FuRMUbTe05b50TTPtWeWWoI%2Bbk8PA8xizMiBBGB%2B2shOEyFICYqdisNewv150jbqozZasjL3dbTw8AgHimi%2Bt1e1NA8BenrNMEENU%2Fx8q2ELoAXlqoyagSYr%2F8Xy6JK%2FZHAdc%2FE7cTeac1UXjetghhLV2r9mDXMLzIrcEGOqUB7fc8O%2BFang0dcIDVrUkhDCSdKN55pRVe8aCchMfOJa1QZOxB84Zx0Ba693lyLzLwaqfLzY1nSotk1Eqe3XXx5TxwKg7Vg7IRFc%2ByNNO5WID4Y1T6i6ybiP%2FxaQrjO61WWLhLp5c4xfp5jiRkzA3bz7fx1X2e9xPomr9ZGfU%2FHGXTRoqbzD9D3KrxTk%2FIvfbpwFCwvDPRZze0yX%2BFSD5GQh4MSetz&X-Amz-Signature=3f68eb529b61dbdef0c82eeca214aeebf630fc64c8cb40ce0455122588c37577&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
