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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275DPMO7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd1k0v9ybdzdFnh7nj6EL5LM7z9G8jruQ52qARsAo2SQIhALtsVPOt7yuSc7w5LLQvN1R4sNlU8GptE0tMeUMA6mdGKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwHwdIBrS62MGZ3M0q3AMtWmXrx535KlVjQqRSyXsS0%2Fw9Va2BUfdHfj39%2BHesWS0GeN4ASslFcw2zoT4yAAKujbFocqnyOZ6rITsfgxpOiJMif1Qu5MO9D5A1glm1RhOUdD0xCwXdx%2BkMc4TAWhuGliUEi0mDBk0hftTnWNkVpNAixTgD5mM95d2z7Fp3pggwsXSkm0jZGjqNulJeMiYJl7eBD5RGnBJacSGeKxA9sxYNqtE20%2Bgq4YU03xCvJsf7T%2BFqrbKQ6HP4HzoBFI7Ak4PGOXXcWwhV6focRwnPoVbXRIsAC3ONTvDSEZm1IUkbwc3o28Jiubgw1jMPyGid95Nj%2Ba1sMghErTcXmGR8950cJGxAtFm2814MwnW8dZmWogIhOiFVszPhrVhabdVhfmjW3aB4aHceVwouww7%2BeRKP6vJH3cGHjTmtezOYC25ClW09Ye6RMS2J8kL6YCeev8F5IFNWUwnluQry3eEkt%2FsDYdVUGfjGUI0AC37p611MZAiyxKORrjIypHJSDY8RlteMecJYtM6fcIyLnyh%2B1ZM9rED3PQwdN9NqkO6Y8KDFLKRkYoChE9yyB8WdDitz6yLF5LMlPCQfMJwb5gKbgNY9Zux3Ly%2B%2FEtXi9e9OeGYo%2F83p2ayEXMNNNTCQquzBBjqkAW%2BfOSHNNEWVCgnIFj8sQuVEbhMAfdzYz8LsFzfwvRP6L7UW%2BvKlyhkFeMIu7LugQv5bdxHObc7rwKl92kpzL0H%2BWdq1NhAlfW1YpPulWU1ZF1j3XF1rzGaTYjRk5DC%2BjW%2BALvglzI7Gszg7B4ExJp2qmjfiPGpHIhJ3oyMd%2BuIuWFz%2FhNjiNAAaOycUdGlQo2Bp7ApM5HE68yvGVM7LmVFi32QM&X-Amz-Signature=da602963a7edf296b9dbdef3109615c56713fc2c5da179dcfa8260beaacbdc34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275DPMO7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd1k0v9ybdzdFnh7nj6EL5LM7z9G8jruQ52qARsAo2SQIhALtsVPOt7yuSc7w5LLQvN1R4sNlU8GptE0tMeUMA6mdGKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwHwdIBrS62MGZ3M0q3AMtWmXrx535KlVjQqRSyXsS0%2Fw9Va2BUfdHfj39%2BHesWS0GeN4ASslFcw2zoT4yAAKujbFocqnyOZ6rITsfgxpOiJMif1Qu5MO9D5A1glm1RhOUdD0xCwXdx%2BkMc4TAWhuGliUEi0mDBk0hftTnWNkVpNAixTgD5mM95d2z7Fp3pggwsXSkm0jZGjqNulJeMiYJl7eBD5RGnBJacSGeKxA9sxYNqtE20%2Bgq4YU03xCvJsf7T%2BFqrbKQ6HP4HzoBFI7Ak4PGOXXcWwhV6focRwnPoVbXRIsAC3ONTvDSEZm1IUkbwc3o28Jiubgw1jMPyGid95Nj%2Ba1sMghErTcXmGR8950cJGxAtFm2814MwnW8dZmWogIhOiFVszPhrVhabdVhfmjW3aB4aHceVwouww7%2BeRKP6vJH3cGHjTmtezOYC25ClW09Ye6RMS2J8kL6YCeev8F5IFNWUwnluQry3eEkt%2FsDYdVUGfjGUI0AC37p611MZAiyxKORrjIypHJSDY8RlteMecJYtM6fcIyLnyh%2B1ZM9rED3PQwdN9NqkO6Y8KDFLKRkYoChE9yyB8WdDitz6yLF5LMlPCQfMJwb5gKbgNY9Zux3Ly%2B%2FEtXi9e9OeGYo%2F83p2ayEXMNNNTCQquzBBjqkAW%2BfOSHNNEWVCgnIFj8sQuVEbhMAfdzYz8LsFzfwvRP6L7UW%2BvKlyhkFeMIu7LugQv5bdxHObc7rwKl92kpzL0H%2BWdq1NhAlfW1YpPulWU1ZF1j3XF1rzGaTYjRk5DC%2BjW%2BALvglzI7Gszg7B4ExJp2qmjfiPGpHIhJ3oyMd%2BuIuWFz%2FhNjiNAAaOycUdGlQo2Bp7ApM5HE68yvGVM7LmVFi32QM&X-Amz-Signature=9d712aac2ce9f7653b15b0f5e14bb3460338318eb57af1646c35d1ebcef945e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275DPMO7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd1k0v9ybdzdFnh7nj6EL5LM7z9G8jruQ52qARsAo2SQIhALtsVPOt7yuSc7w5LLQvN1R4sNlU8GptE0tMeUMA6mdGKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwHwdIBrS62MGZ3M0q3AMtWmXrx535KlVjQqRSyXsS0%2Fw9Va2BUfdHfj39%2BHesWS0GeN4ASslFcw2zoT4yAAKujbFocqnyOZ6rITsfgxpOiJMif1Qu5MO9D5A1glm1RhOUdD0xCwXdx%2BkMc4TAWhuGliUEi0mDBk0hftTnWNkVpNAixTgD5mM95d2z7Fp3pggwsXSkm0jZGjqNulJeMiYJl7eBD5RGnBJacSGeKxA9sxYNqtE20%2Bgq4YU03xCvJsf7T%2BFqrbKQ6HP4HzoBFI7Ak4PGOXXcWwhV6focRwnPoVbXRIsAC3ONTvDSEZm1IUkbwc3o28Jiubgw1jMPyGid95Nj%2Ba1sMghErTcXmGR8950cJGxAtFm2814MwnW8dZmWogIhOiFVszPhrVhabdVhfmjW3aB4aHceVwouww7%2BeRKP6vJH3cGHjTmtezOYC25ClW09Ye6RMS2J8kL6YCeev8F5IFNWUwnluQry3eEkt%2FsDYdVUGfjGUI0AC37p611MZAiyxKORrjIypHJSDY8RlteMecJYtM6fcIyLnyh%2B1ZM9rED3PQwdN9NqkO6Y8KDFLKRkYoChE9yyB8WdDitz6yLF5LMlPCQfMJwb5gKbgNY9Zux3Ly%2B%2FEtXi9e9OeGYo%2F83p2ayEXMNNNTCQquzBBjqkAW%2BfOSHNNEWVCgnIFj8sQuVEbhMAfdzYz8LsFzfwvRP6L7UW%2BvKlyhkFeMIu7LugQv5bdxHObc7rwKl92kpzL0H%2BWdq1NhAlfW1YpPulWU1ZF1j3XF1rzGaTYjRk5DC%2BjW%2BALvglzI7Gszg7B4ExJp2qmjfiPGpHIhJ3oyMd%2BuIuWFz%2FhNjiNAAaOycUdGlQo2Bp7ApM5HE68yvGVM7LmVFi32QM&X-Amz-Signature=f0ed3921c71062a8832cc3cb2df17b2c8d9a750f272a6b13fe02d75cbc519548&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275DPMO7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd1k0v9ybdzdFnh7nj6EL5LM7z9G8jruQ52qARsAo2SQIhALtsVPOt7yuSc7w5LLQvN1R4sNlU8GptE0tMeUMA6mdGKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwHwdIBrS62MGZ3M0q3AMtWmXrx535KlVjQqRSyXsS0%2Fw9Va2BUfdHfj39%2BHesWS0GeN4ASslFcw2zoT4yAAKujbFocqnyOZ6rITsfgxpOiJMif1Qu5MO9D5A1glm1RhOUdD0xCwXdx%2BkMc4TAWhuGliUEi0mDBk0hftTnWNkVpNAixTgD5mM95d2z7Fp3pggwsXSkm0jZGjqNulJeMiYJl7eBD5RGnBJacSGeKxA9sxYNqtE20%2Bgq4YU03xCvJsf7T%2BFqrbKQ6HP4HzoBFI7Ak4PGOXXcWwhV6focRwnPoVbXRIsAC3ONTvDSEZm1IUkbwc3o28Jiubgw1jMPyGid95Nj%2Ba1sMghErTcXmGR8950cJGxAtFm2814MwnW8dZmWogIhOiFVszPhrVhabdVhfmjW3aB4aHceVwouww7%2BeRKP6vJH3cGHjTmtezOYC25ClW09Ye6RMS2J8kL6YCeev8F5IFNWUwnluQry3eEkt%2FsDYdVUGfjGUI0AC37p611MZAiyxKORrjIypHJSDY8RlteMecJYtM6fcIyLnyh%2B1ZM9rED3PQwdN9NqkO6Y8KDFLKRkYoChE9yyB8WdDitz6yLF5LMlPCQfMJwb5gKbgNY9Zux3Ly%2B%2FEtXi9e9OeGYo%2F83p2ayEXMNNNTCQquzBBjqkAW%2BfOSHNNEWVCgnIFj8sQuVEbhMAfdzYz8LsFzfwvRP6L7UW%2BvKlyhkFeMIu7LugQv5bdxHObc7rwKl92kpzL0H%2BWdq1NhAlfW1YpPulWU1ZF1j3XF1rzGaTYjRk5DC%2BjW%2BALvglzI7Gszg7B4ExJp2qmjfiPGpHIhJ3oyMd%2BuIuWFz%2FhNjiNAAaOycUdGlQo2Bp7ApM5HE68yvGVM7LmVFi32QM&X-Amz-Signature=eb73fe3b1e78de54d537b0ef812e3aee6ea97b611284bcc0a00c4462390b539f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275DPMO7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd1k0v9ybdzdFnh7nj6EL5LM7z9G8jruQ52qARsAo2SQIhALtsVPOt7yuSc7w5LLQvN1R4sNlU8GptE0tMeUMA6mdGKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwHwdIBrS62MGZ3M0q3AMtWmXrx535KlVjQqRSyXsS0%2Fw9Va2BUfdHfj39%2BHesWS0GeN4ASslFcw2zoT4yAAKujbFocqnyOZ6rITsfgxpOiJMif1Qu5MO9D5A1glm1RhOUdD0xCwXdx%2BkMc4TAWhuGliUEi0mDBk0hftTnWNkVpNAixTgD5mM95d2z7Fp3pggwsXSkm0jZGjqNulJeMiYJl7eBD5RGnBJacSGeKxA9sxYNqtE20%2Bgq4YU03xCvJsf7T%2BFqrbKQ6HP4HzoBFI7Ak4PGOXXcWwhV6focRwnPoVbXRIsAC3ONTvDSEZm1IUkbwc3o28Jiubgw1jMPyGid95Nj%2Ba1sMghErTcXmGR8950cJGxAtFm2814MwnW8dZmWogIhOiFVszPhrVhabdVhfmjW3aB4aHceVwouww7%2BeRKP6vJH3cGHjTmtezOYC25ClW09Ye6RMS2J8kL6YCeev8F5IFNWUwnluQry3eEkt%2FsDYdVUGfjGUI0AC37p611MZAiyxKORrjIypHJSDY8RlteMecJYtM6fcIyLnyh%2B1ZM9rED3PQwdN9NqkO6Y8KDFLKRkYoChE9yyB8WdDitz6yLF5LMlPCQfMJwb5gKbgNY9Zux3Ly%2B%2FEtXi9e9OeGYo%2F83p2ayEXMNNNTCQquzBBjqkAW%2BfOSHNNEWVCgnIFj8sQuVEbhMAfdzYz8LsFzfwvRP6L7UW%2BvKlyhkFeMIu7LugQv5bdxHObc7rwKl92kpzL0H%2BWdq1NhAlfW1YpPulWU1ZF1j3XF1rzGaTYjRk5DC%2BjW%2BALvglzI7Gszg7B4ExJp2qmjfiPGpHIhJ3oyMd%2BuIuWFz%2FhNjiNAAaOycUdGlQo2Bp7ApM5HE68yvGVM7LmVFi32QM&X-Amz-Signature=c54387228c4db7efeff950ba6c37b9ab4c59bb0fa6332ed5bca0957e71a2745c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275DPMO7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd1k0v9ybdzdFnh7nj6EL5LM7z9G8jruQ52qARsAo2SQIhALtsVPOt7yuSc7w5LLQvN1R4sNlU8GptE0tMeUMA6mdGKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwHwdIBrS62MGZ3M0q3AMtWmXrx535KlVjQqRSyXsS0%2Fw9Va2BUfdHfj39%2BHesWS0GeN4ASslFcw2zoT4yAAKujbFocqnyOZ6rITsfgxpOiJMif1Qu5MO9D5A1glm1RhOUdD0xCwXdx%2BkMc4TAWhuGliUEi0mDBk0hftTnWNkVpNAixTgD5mM95d2z7Fp3pggwsXSkm0jZGjqNulJeMiYJl7eBD5RGnBJacSGeKxA9sxYNqtE20%2Bgq4YU03xCvJsf7T%2BFqrbKQ6HP4HzoBFI7Ak4PGOXXcWwhV6focRwnPoVbXRIsAC3ONTvDSEZm1IUkbwc3o28Jiubgw1jMPyGid95Nj%2Ba1sMghErTcXmGR8950cJGxAtFm2814MwnW8dZmWogIhOiFVszPhrVhabdVhfmjW3aB4aHceVwouww7%2BeRKP6vJH3cGHjTmtezOYC25ClW09Ye6RMS2J8kL6YCeev8F5IFNWUwnluQry3eEkt%2FsDYdVUGfjGUI0AC37p611MZAiyxKORrjIypHJSDY8RlteMecJYtM6fcIyLnyh%2B1ZM9rED3PQwdN9NqkO6Y8KDFLKRkYoChE9yyB8WdDitz6yLF5LMlPCQfMJwb5gKbgNY9Zux3Ly%2B%2FEtXi9e9OeGYo%2F83p2ayEXMNNNTCQquzBBjqkAW%2BfOSHNNEWVCgnIFj8sQuVEbhMAfdzYz8LsFzfwvRP6L7UW%2BvKlyhkFeMIu7LugQv5bdxHObc7rwKl92kpzL0H%2BWdq1NhAlfW1YpPulWU1ZF1j3XF1rzGaTYjRk5DC%2BjW%2BALvglzI7Gszg7B4ExJp2qmjfiPGpHIhJ3oyMd%2BuIuWFz%2FhNjiNAAaOycUdGlQo2Bp7ApM5HE68yvGVM7LmVFi32QM&X-Amz-Signature=9d3424fcbf1cac360f93de16b5b38557ebf55edbb6551eb37654af2f7ffff559&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275DPMO7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd1k0v9ybdzdFnh7nj6EL5LM7z9G8jruQ52qARsAo2SQIhALtsVPOt7yuSc7w5LLQvN1R4sNlU8GptE0tMeUMA6mdGKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwHwdIBrS62MGZ3M0q3AMtWmXrx535KlVjQqRSyXsS0%2Fw9Va2BUfdHfj39%2BHesWS0GeN4ASslFcw2zoT4yAAKujbFocqnyOZ6rITsfgxpOiJMif1Qu5MO9D5A1glm1RhOUdD0xCwXdx%2BkMc4TAWhuGliUEi0mDBk0hftTnWNkVpNAixTgD5mM95d2z7Fp3pggwsXSkm0jZGjqNulJeMiYJl7eBD5RGnBJacSGeKxA9sxYNqtE20%2Bgq4YU03xCvJsf7T%2BFqrbKQ6HP4HzoBFI7Ak4PGOXXcWwhV6focRwnPoVbXRIsAC3ONTvDSEZm1IUkbwc3o28Jiubgw1jMPyGid95Nj%2Ba1sMghErTcXmGR8950cJGxAtFm2814MwnW8dZmWogIhOiFVszPhrVhabdVhfmjW3aB4aHceVwouww7%2BeRKP6vJH3cGHjTmtezOYC25ClW09Ye6RMS2J8kL6YCeev8F5IFNWUwnluQry3eEkt%2FsDYdVUGfjGUI0AC37p611MZAiyxKORrjIypHJSDY8RlteMecJYtM6fcIyLnyh%2B1ZM9rED3PQwdN9NqkO6Y8KDFLKRkYoChE9yyB8WdDitz6yLF5LMlPCQfMJwb5gKbgNY9Zux3Ly%2B%2FEtXi9e9OeGYo%2F83p2ayEXMNNNTCQquzBBjqkAW%2BfOSHNNEWVCgnIFj8sQuVEbhMAfdzYz8LsFzfwvRP6L7UW%2BvKlyhkFeMIu7LugQv5bdxHObc7rwKl92kpzL0H%2BWdq1NhAlfW1YpPulWU1ZF1j3XF1rzGaTYjRk5DC%2BjW%2BALvglzI7Gszg7B4ExJp2qmjfiPGpHIhJ3oyMd%2BuIuWFz%2FhNjiNAAaOycUdGlQo2Bp7ApM5HE68yvGVM7LmVFi32QM&X-Amz-Signature=ea2876ad78103d266f04e05464bb8221f11997f2cd7b02195d297ab5f3c7ba54&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
