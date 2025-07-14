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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JIEXLS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDm4Xr3KNGS9lz939T5fPIiaimXEW4VsSFCzGPrra8b7gIgVUlWW6nZncRZQDRZ5F0Beg4BYKcj5Q7Mlr%2FUP%2FrtApsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLuMhGTQt5FWldWcaSrcA6aRQlfytaVhro0wWNccwTy2NcOFRAzUfSyCkBBat1AwMSKfROvhgL8y698ZmntSmdQEC4mcf7IFjxtbQIFQjOEGIm2w6bRCpzRsDYG7pNh8Sw2f7jfUhY7BgStbXVuQBScv7B%2BgcYJSrVVl8xvn4MWtlu0XaykEQE6FOd4WM9kDQ6HgE1XIf45zjZrAb4oxIU5ehApPF48rdI6z6RvZh9IMpKMzz6RHSmbffZsGUjj4UDKPtQExxjJiKISXc0WDJRDHbT1bZ9ihfENQgcOvRq551yIDrDE2Uk%2Bw9iAWYXdNUvxS6rR3Wvy2LjS80xIdjn3d47nVVyU2nVF8geK27y9W1MJuThklLFe2n0UFAI2UlEN%2Bc11VUo2lHrfcw7vLFstzhP9MAK3r%2FRSgA%2FKCgKS0HLxukhk2leVJ2niDoRuHhY4nbZ%2BS1MYovGHFa1qS3LlJ0s51mUlqB05BFlcVyWf85qpbhi56FcJpFdH%2FyCQARaSBsHJu0sL0vWK9BKxAlVYkVuLNyX4NZNYE6k8ebHdSyu81lRQB3HrgFgv5%2BM1rhFfgY6rHIzvzh4xFJbxcLOSXrs3xTLJwmeyLtz4ZjSmj9rmzQ2bHxD2p6kkCKP0zCRMYC4ud27CYblLCMMeF1MMGOqUB3BbM4TkBnMMU3qEqbscaVBYsK%2F8rsb2XnJouuD4ejCY5nKHp1iofy69WMB2BVb8hOD9oF03ZXQ3uFJ%2BaB%2BiDuvNoFtaWCStUeMa3ZmyrF9ND8GUKL2x24%2FIrNVL0ntkM0lU9rvtX0717HIggzYaI5YPjYFVUYivfnKzHp4zVIQ4jD72oJ7muT2yWUE9YpCvWBlhG2tzcXNTUjQdCBmqYu9CSr2up&X-Amz-Signature=c595cdb957e9b5eb80c30287fe298877a55f3f969af88d1c0148d7b4b2ae1174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JIEXLS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDm4Xr3KNGS9lz939T5fPIiaimXEW4VsSFCzGPrra8b7gIgVUlWW6nZncRZQDRZ5F0Beg4BYKcj5Q7Mlr%2FUP%2FrtApsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLuMhGTQt5FWldWcaSrcA6aRQlfytaVhro0wWNccwTy2NcOFRAzUfSyCkBBat1AwMSKfROvhgL8y698ZmntSmdQEC4mcf7IFjxtbQIFQjOEGIm2w6bRCpzRsDYG7pNh8Sw2f7jfUhY7BgStbXVuQBScv7B%2BgcYJSrVVl8xvn4MWtlu0XaykEQE6FOd4WM9kDQ6HgE1XIf45zjZrAb4oxIU5ehApPF48rdI6z6RvZh9IMpKMzz6RHSmbffZsGUjj4UDKPtQExxjJiKISXc0WDJRDHbT1bZ9ihfENQgcOvRq551yIDrDE2Uk%2Bw9iAWYXdNUvxS6rR3Wvy2LjS80xIdjn3d47nVVyU2nVF8geK27y9W1MJuThklLFe2n0UFAI2UlEN%2Bc11VUo2lHrfcw7vLFstzhP9MAK3r%2FRSgA%2FKCgKS0HLxukhk2leVJ2niDoRuHhY4nbZ%2BS1MYovGHFa1qS3LlJ0s51mUlqB05BFlcVyWf85qpbhi56FcJpFdH%2FyCQARaSBsHJu0sL0vWK9BKxAlVYkVuLNyX4NZNYE6k8ebHdSyu81lRQB3HrgFgv5%2BM1rhFfgY6rHIzvzh4xFJbxcLOSXrs3xTLJwmeyLtz4ZjSmj9rmzQ2bHxD2p6kkCKP0zCRMYC4ud27CYblLCMMeF1MMGOqUB3BbM4TkBnMMU3qEqbscaVBYsK%2F8rsb2XnJouuD4ejCY5nKHp1iofy69WMB2BVb8hOD9oF03ZXQ3uFJ%2BaB%2BiDuvNoFtaWCStUeMa3ZmyrF9ND8GUKL2x24%2FIrNVL0ntkM0lU9rvtX0717HIggzYaI5YPjYFVUYivfnKzHp4zVIQ4jD72oJ7muT2yWUE9YpCvWBlhG2tzcXNTUjQdCBmqYu9CSr2up&X-Amz-Signature=9069a6b8cbe2a8b799c63fefcbf3588ce0d93e2b431b1c009362dba58b6eda80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JIEXLS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDm4Xr3KNGS9lz939T5fPIiaimXEW4VsSFCzGPrra8b7gIgVUlWW6nZncRZQDRZ5F0Beg4BYKcj5Q7Mlr%2FUP%2FrtApsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLuMhGTQt5FWldWcaSrcA6aRQlfytaVhro0wWNccwTy2NcOFRAzUfSyCkBBat1AwMSKfROvhgL8y698ZmntSmdQEC4mcf7IFjxtbQIFQjOEGIm2w6bRCpzRsDYG7pNh8Sw2f7jfUhY7BgStbXVuQBScv7B%2BgcYJSrVVl8xvn4MWtlu0XaykEQE6FOd4WM9kDQ6HgE1XIf45zjZrAb4oxIU5ehApPF48rdI6z6RvZh9IMpKMzz6RHSmbffZsGUjj4UDKPtQExxjJiKISXc0WDJRDHbT1bZ9ihfENQgcOvRq551yIDrDE2Uk%2Bw9iAWYXdNUvxS6rR3Wvy2LjS80xIdjn3d47nVVyU2nVF8geK27y9W1MJuThklLFe2n0UFAI2UlEN%2Bc11VUo2lHrfcw7vLFstzhP9MAK3r%2FRSgA%2FKCgKS0HLxukhk2leVJ2niDoRuHhY4nbZ%2BS1MYovGHFa1qS3LlJ0s51mUlqB05BFlcVyWf85qpbhi56FcJpFdH%2FyCQARaSBsHJu0sL0vWK9BKxAlVYkVuLNyX4NZNYE6k8ebHdSyu81lRQB3HrgFgv5%2BM1rhFfgY6rHIzvzh4xFJbxcLOSXrs3xTLJwmeyLtz4ZjSmj9rmzQ2bHxD2p6kkCKP0zCRMYC4ud27CYblLCMMeF1MMGOqUB3BbM4TkBnMMU3qEqbscaVBYsK%2F8rsb2XnJouuD4ejCY5nKHp1iofy69WMB2BVb8hOD9oF03ZXQ3uFJ%2BaB%2BiDuvNoFtaWCStUeMa3ZmyrF9ND8GUKL2x24%2FIrNVL0ntkM0lU9rvtX0717HIggzYaI5YPjYFVUYivfnKzHp4zVIQ4jD72oJ7muT2yWUE9YpCvWBlhG2tzcXNTUjQdCBmqYu9CSr2up&X-Amz-Signature=ce069893d0fd3d7723b5856154a7b66ea6dbff26f7085695d062ed0505c2f902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JIEXLS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDm4Xr3KNGS9lz939T5fPIiaimXEW4VsSFCzGPrra8b7gIgVUlWW6nZncRZQDRZ5F0Beg4BYKcj5Q7Mlr%2FUP%2FrtApsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLuMhGTQt5FWldWcaSrcA6aRQlfytaVhro0wWNccwTy2NcOFRAzUfSyCkBBat1AwMSKfROvhgL8y698ZmntSmdQEC4mcf7IFjxtbQIFQjOEGIm2w6bRCpzRsDYG7pNh8Sw2f7jfUhY7BgStbXVuQBScv7B%2BgcYJSrVVl8xvn4MWtlu0XaykEQE6FOd4WM9kDQ6HgE1XIf45zjZrAb4oxIU5ehApPF48rdI6z6RvZh9IMpKMzz6RHSmbffZsGUjj4UDKPtQExxjJiKISXc0WDJRDHbT1bZ9ihfENQgcOvRq551yIDrDE2Uk%2Bw9iAWYXdNUvxS6rR3Wvy2LjS80xIdjn3d47nVVyU2nVF8geK27y9W1MJuThklLFe2n0UFAI2UlEN%2Bc11VUo2lHrfcw7vLFstzhP9MAK3r%2FRSgA%2FKCgKS0HLxukhk2leVJ2niDoRuHhY4nbZ%2BS1MYovGHFa1qS3LlJ0s51mUlqB05BFlcVyWf85qpbhi56FcJpFdH%2FyCQARaSBsHJu0sL0vWK9BKxAlVYkVuLNyX4NZNYE6k8ebHdSyu81lRQB3HrgFgv5%2BM1rhFfgY6rHIzvzh4xFJbxcLOSXrs3xTLJwmeyLtz4ZjSmj9rmzQ2bHxD2p6kkCKP0zCRMYC4ud27CYblLCMMeF1MMGOqUB3BbM4TkBnMMU3qEqbscaVBYsK%2F8rsb2XnJouuD4ejCY5nKHp1iofy69WMB2BVb8hOD9oF03ZXQ3uFJ%2BaB%2BiDuvNoFtaWCStUeMa3ZmyrF9ND8GUKL2x24%2FIrNVL0ntkM0lU9rvtX0717HIggzYaI5YPjYFVUYivfnKzHp4zVIQ4jD72oJ7muT2yWUE9YpCvWBlhG2tzcXNTUjQdCBmqYu9CSr2up&X-Amz-Signature=69f5405bab3260b5b8f2720c6dc34dc6fe9d8d1c20cf45b846915accadfdc4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JIEXLS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDm4Xr3KNGS9lz939T5fPIiaimXEW4VsSFCzGPrra8b7gIgVUlWW6nZncRZQDRZ5F0Beg4BYKcj5Q7Mlr%2FUP%2FrtApsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLuMhGTQt5FWldWcaSrcA6aRQlfytaVhro0wWNccwTy2NcOFRAzUfSyCkBBat1AwMSKfROvhgL8y698ZmntSmdQEC4mcf7IFjxtbQIFQjOEGIm2w6bRCpzRsDYG7pNh8Sw2f7jfUhY7BgStbXVuQBScv7B%2BgcYJSrVVl8xvn4MWtlu0XaykEQE6FOd4WM9kDQ6HgE1XIf45zjZrAb4oxIU5ehApPF48rdI6z6RvZh9IMpKMzz6RHSmbffZsGUjj4UDKPtQExxjJiKISXc0WDJRDHbT1bZ9ihfENQgcOvRq551yIDrDE2Uk%2Bw9iAWYXdNUvxS6rR3Wvy2LjS80xIdjn3d47nVVyU2nVF8geK27y9W1MJuThklLFe2n0UFAI2UlEN%2Bc11VUo2lHrfcw7vLFstzhP9MAK3r%2FRSgA%2FKCgKS0HLxukhk2leVJ2niDoRuHhY4nbZ%2BS1MYovGHFa1qS3LlJ0s51mUlqB05BFlcVyWf85qpbhi56FcJpFdH%2FyCQARaSBsHJu0sL0vWK9BKxAlVYkVuLNyX4NZNYE6k8ebHdSyu81lRQB3HrgFgv5%2BM1rhFfgY6rHIzvzh4xFJbxcLOSXrs3xTLJwmeyLtz4ZjSmj9rmzQ2bHxD2p6kkCKP0zCRMYC4ud27CYblLCMMeF1MMGOqUB3BbM4TkBnMMU3qEqbscaVBYsK%2F8rsb2XnJouuD4ejCY5nKHp1iofy69WMB2BVb8hOD9oF03ZXQ3uFJ%2BaB%2BiDuvNoFtaWCStUeMa3ZmyrF9ND8GUKL2x24%2FIrNVL0ntkM0lU9rvtX0717HIggzYaI5YPjYFVUYivfnKzHp4zVIQ4jD72oJ7muT2yWUE9YpCvWBlhG2tzcXNTUjQdCBmqYu9CSr2up&X-Amz-Signature=9fec5250f7a76b3a04ba57a3a4f5271f350f90107aa1336ff3b2146f8b0d443e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JIEXLS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDm4Xr3KNGS9lz939T5fPIiaimXEW4VsSFCzGPrra8b7gIgVUlWW6nZncRZQDRZ5F0Beg4BYKcj5Q7Mlr%2FUP%2FrtApsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLuMhGTQt5FWldWcaSrcA6aRQlfytaVhro0wWNccwTy2NcOFRAzUfSyCkBBat1AwMSKfROvhgL8y698ZmntSmdQEC4mcf7IFjxtbQIFQjOEGIm2w6bRCpzRsDYG7pNh8Sw2f7jfUhY7BgStbXVuQBScv7B%2BgcYJSrVVl8xvn4MWtlu0XaykEQE6FOd4WM9kDQ6HgE1XIf45zjZrAb4oxIU5ehApPF48rdI6z6RvZh9IMpKMzz6RHSmbffZsGUjj4UDKPtQExxjJiKISXc0WDJRDHbT1bZ9ihfENQgcOvRq551yIDrDE2Uk%2Bw9iAWYXdNUvxS6rR3Wvy2LjS80xIdjn3d47nVVyU2nVF8geK27y9W1MJuThklLFe2n0UFAI2UlEN%2Bc11VUo2lHrfcw7vLFstzhP9MAK3r%2FRSgA%2FKCgKS0HLxukhk2leVJ2niDoRuHhY4nbZ%2BS1MYovGHFa1qS3LlJ0s51mUlqB05BFlcVyWf85qpbhi56FcJpFdH%2FyCQARaSBsHJu0sL0vWK9BKxAlVYkVuLNyX4NZNYE6k8ebHdSyu81lRQB3HrgFgv5%2BM1rhFfgY6rHIzvzh4xFJbxcLOSXrs3xTLJwmeyLtz4ZjSmj9rmzQ2bHxD2p6kkCKP0zCRMYC4ud27CYblLCMMeF1MMGOqUB3BbM4TkBnMMU3qEqbscaVBYsK%2F8rsb2XnJouuD4ejCY5nKHp1iofy69WMB2BVb8hOD9oF03ZXQ3uFJ%2BaB%2BiDuvNoFtaWCStUeMa3ZmyrF9ND8GUKL2x24%2FIrNVL0ntkM0lU9rvtX0717HIggzYaI5YPjYFVUYivfnKzHp4zVIQ4jD72oJ7muT2yWUE9YpCvWBlhG2tzcXNTUjQdCBmqYu9CSr2up&X-Amz-Signature=15809e2d2b9169a1ddf8522dc034263518a06886ea82e15aef571265c656d066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JIEXLS%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDm4Xr3KNGS9lz939T5fPIiaimXEW4VsSFCzGPrra8b7gIgVUlWW6nZncRZQDRZ5F0Beg4BYKcj5Q7Mlr%2FUP%2FrtApsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLuMhGTQt5FWldWcaSrcA6aRQlfytaVhro0wWNccwTy2NcOFRAzUfSyCkBBat1AwMSKfROvhgL8y698ZmntSmdQEC4mcf7IFjxtbQIFQjOEGIm2w6bRCpzRsDYG7pNh8Sw2f7jfUhY7BgStbXVuQBScv7B%2BgcYJSrVVl8xvn4MWtlu0XaykEQE6FOd4WM9kDQ6HgE1XIf45zjZrAb4oxIU5ehApPF48rdI6z6RvZh9IMpKMzz6RHSmbffZsGUjj4UDKPtQExxjJiKISXc0WDJRDHbT1bZ9ihfENQgcOvRq551yIDrDE2Uk%2Bw9iAWYXdNUvxS6rR3Wvy2LjS80xIdjn3d47nVVyU2nVF8geK27y9W1MJuThklLFe2n0UFAI2UlEN%2Bc11VUo2lHrfcw7vLFstzhP9MAK3r%2FRSgA%2FKCgKS0HLxukhk2leVJ2niDoRuHhY4nbZ%2BS1MYovGHFa1qS3LlJ0s51mUlqB05BFlcVyWf85qpbhi56FcJpFdH%2FyCQARaSBsHJu0sL0vWK9BKxAlVYkVuLNyX4NZNYE6k8ebHdSyu81lRQB3HrgFgv5%2BM1rhFfgY6rHIzvzh4xFJbxcLOSXrs3xTLJwmeyLtz4ZjSmj9rmzQ2bHxD2p6kkCKP0zCRMYC4ud27CYblLCMMeF1MMGOqUB3BbM4TkBnMMU3qEqbscaVBYsK%2F8rsb2XnJouuD4ejCY5nKHp1iofy69WMB2BVb8hOD9oF03ZXQ3uFJ%2BaB%2BiDuvNoFtaWCStUeMa3ZmyrF9ND8GUKL2x24%2FIrNVL0ntkM0lU9rvtX0717HIggzYaI5YPjYFVUYivfnKzHp4zVIQ4jD72oJ7muT2yWUE9YpCvWBlhG2tzcXNTUjQdCBmqYu9CSr2up&X-Amz-Signature=3d64597d227e8c60cd8682e685277aebe41975c57ab265b0343d653de9e1269f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
