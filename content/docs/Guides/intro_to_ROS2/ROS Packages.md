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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFKHYN7O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVmh2vBKerUloADJ7RnnYADZKm9e7zujZkkJ0Sk%2FreAiEAzC0zPoIeENrt%2F5d6kQyULn1rruIhUTmov95hrTpc7Fkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLMKiRbvlinzfTSVpCrcA3ghlHtIoycD9%2BCB9v8sQITYfHHcXVej4%2BGJa%2F8mMLoeaOSH79rbXVBwqwPBkMR2NlScfE1T5l5T5iSU569i21bd1Uvap5d3b5ox7pVd7AwS%2FVf26aT%2FjYqwOHBOf545JNhFjBhdJlNrKS9sb8ZS9lkLD3rMYv5DT8I%2BmiYps5dY22cpgiK9aQWHWwyMo6PMEXuTTupvhshv5i1KiJptNmBCkdt8qk3z3n%2BhZtnnAbkh4hK2yAs5j%2FIqDgIcZWs3Y8oqR%2FPc%2FOE0uc04QytFrN2f8I98d%2Ff6%2Fe2rdXSc4sUU2USCJ%2FA8t1PrlKlb86uE67MlPzH9uB82Sfyl8Rr2mtf8on2j9OzWImn8NwOhO6yZXqjJgwAlxS9dduSpOYzZcl34qGP6hTHMIRyKxfolkmmb37r0tEylsyyUeNP6e7kvXWzuwWzchRGnmhpaEHPeS6J%2FgIhKYiE24wbl41juexMRTaiTcApcO56m6%2BzXQFq8ZtooIQ48Z0D%2BQ7AOL2fXw5vVXrvcmPfKhKbjHEReP96uJDH9A5vRt%2FYOA6RwS411rofhUQYt8opB1P0cMgqoOUry1bkYqGXj4phtPId8ZlD5kfOiwK9APbCNrwHGXQccDPJGbrGwPFF39JKNMPPJqL4GOqUB0hri%2FWNATyyoA6lNnqBnA0iNZ0ZvoL2kA0zOTe4u7l1UXg9GY0BnnoTFUjBxnGTaNEqQYmmFQn7u%2F6Xz7TJL6Z6NgGcIj3CLyDgc2X%2FMqsbrxoy74hhY64zCtHMbBJmksVQ7GWhEDAb9pGFPoepzF1RDR%2BRG7AYcAf9Wka3w%2Bc7mkQE0ipgyObZqfF7R%2F5Ey%2BdoXnAtcxb6K3Bz4zdDOh4c8xk3f&X-Amz-Signature=43ce19d82fb3e3d3077c3d68a7a1c7d6ae9b4cea65cf384eba78a6da91c9c095&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFKHYN7O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVmh2vBKerUloADJ7RnnYADZKm9e7zujZkkJ0Sk%2FreAiEAzC0zPoIeENrt%2F5d6kQyULn1rruIhUTmov95hrTpc7Fkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLMKiRbvlinzfTSVpCrcA3ghlHtIoycD9%2BCB9v8sQITYfHHcXVej4%2BGJa%2F8mMLoeaOSH79rbXVBwqwPBkMR2NlScfE1T5l5T5iSU569i21bd1Uvap5d3b5ox7pVd7AwS%2FVf26aT%2FjYqwOHBOf545JNhFjBhdJlNrKS9sb8ZS9lkLD3rMYv5DT8I%2BmiYps5dY22cpgiK9aQWHWwyMo6PMEXuTTupvhshv5i1KiJptNmBCkdt8qk3z3n%2BhZtnnAbkh4hK2yAs5j%2FIqDgIcZWs3Y8oqR%2FPc%2FOE0uc04QytFrN2f8I98d%2Ff6%2Fe2rdXSc4sUU2USCJ%2FA8t1PrlKlb86uE67MlPzH9uB82Sfyl8Rr2mtf8on2j9OzWImn8NwOhO6yZXqjJgwAlxS9dduSpOYzZcl34qGP6hTHMIRyKxfolkmmb37r0tEylsyyUeNP6e7kvXWzuwWzchRGnmhpaEHPeS6J%2FgIhKYiE24wbl41juexMRTaiTcApcO56m6%2BzXQFq8ZtooIQ48Z0D%2BQ7AOL2fXw5vVXrvcmPfKhKbjHEReP96uJDH9A5vRt%2FYOA6RwS411rofhUQYt8opB1P0cMgqoOUry1bkYqGXj4phtPId8ZlD5kfOiwK9APbCNrwHGXQccDPJGbrGwPFF39JKNMPPJqL4GOqUB0hri%2FWNATyyoA6lNnqBnA0iNZ0ZvoL2kA0zOTe4u7l1UXg9GY0BnnoTFUjBxnGTaNEqQYmmFQn7u%2F6Xz7TJL6Z6NgGcIj3CLyDgc2X%2FMqsbrxoy74hhY64zCtHMbBJmksVQ7GWhEDAb9pGFPoepzF1RDR%2BRG7AYcAf9Wka3w%2Bc7mkQE0ipgyObZqfF7R%2F5Ey%2BdoXnAtcxb6K3Bz4zdDOh4c8xk3f&X-Amz-Signature=96c1e4745561b178290b6c6bcd7e837bb697d215af4e6b3f4e53a78b8ce1a87c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFKHYN7O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVmh2vBKerUloADJ7RnnYADZKm9e7zujZkkJ0Sk%2FreAiEAzC0zPoIeENrt%2F5d6kQyULn1rruIhUTmov95hrTpc7Fkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLMKiRbvlinzfTSVpCrcA3ghlHtIoycD9%2BCB9v8sQITYfHHcXVej4%2BGJa%2F8mMLoeaOSH79rbXVBwqwPBkMR2NlScfE1T5l5T5iSU569i21bd1Uvap5d3b5ox7pVd7AwS%2FVf26aT%2FjYqwOHBOf545JNhFjBhdJlNrKS9sb8ZS9lkLD3rMYv5DT8I%2BmiYps5dY22cpgiK9aQWHWwyMo6PMEXuTTupvhshv5i1KiJptNmBCkdt8qk3z3n%2BhZtnnAbkh4hK2yAs5j%2FIqDgIcZWs3Y8oqR%2FPc%2FOE0uc04QytFrN2f8I98d%2Ff6%2Fe2rdXSc4sUU2USCJ%2FA8t1PrlKlb86uE67MlPzH9uB82Sfyl8Rr2mtf8on2j9OzWImn8NwOhO6yZXqjJgwAlxS9dduSpOYzZcl34qGP6hTHMIRyKxfolkmmb37r0tEylsyyUeNP6e7kvXWzuwWzchRGnmhpaEHPeS6J%2FgIhKYiE24wbl41juexMRTaiTcApcO56m6%2BzXQFq8ZtooIQ48Z0D%2BQ7AOL2fXw5vVXrvcmPfKhKbjHEReP96uJDH9A5vRt%2FYOA6RwS411rofhUQYt8opB1P0cMgqoOUry1bkYqGXj4phtPId8ZlD5kfOiwK9APbCNrwHGXQccDPJGbrGwPFF39JKNMPPJqL4GOqUB0hri%2FWNATyyoA6lNnqBnA0iNZ0ZvoL2kA0zOTe4u7l1UXg9GY0BnnoTFUjBxnGTaNEqQYmmFQn7u%2F6Xz7TJL6Z6NgGcIj3CLyDgc2X%2FMqsbrxoy74hhY64zCtHMbBJmksVQ7GWhEDAb9pGFPoepzF1RDR%2BRG7AYcAf9Wka3w%2Bc7mkQE0ipgyObZqfF7R%2F5Ey%2BdoXnAtcxb6K3Bz4zdDOh4c8xk3f&X-Amz-Signature=1dafa66e540edb1a7ef664d2dc3a4389d612ba21ab99ad9b792577586039266a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFKHYN7O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVmh2vBKerUloADJ7RnnYADZKm9e7zujZkkJ0Sk%2FreAiEAzC0zPoIeENrt%2F5d6kQyULn1rruIhUTmov95hrTpc7Fkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLMKiRbvlinzfTSVpCrcA3ghlHtIoycD9%2BCB9v8sQITYfHHcXVej4%2BGJa%2F8mMLoeaOSH79rbXVBwqwPBkMR2NlScfE1T5l5T5iSU569i21bd1Uvap5d3b5ox7pVd7AwS%2FVf26aT%2FjYqwOHBOf545JNhFjBhdJlNrKS9sb8ZS9lkLD3rMYv5DT8I%2BmiYps5dY22cpgiK9aQWHWwyMo6PMEXuTTupvhshv5i1KiJptNmBCkdt8qk3z3n%2BhZtnnAbkh4hK2yAs5j%2FIqDgIcZWs3Y8oqR%2FPc%2FOE0uc04QytFrN2f8I98d%2Ff6%2Fe2rdXSc4sUU2USCJ%2FA8t1PrlKlb86uE67MlPzH9uB82Sfyl8Rr2mtf8on2j9OzWImn8NwOhO6yZXqjJgwAlxS9dduSpOYzZcl34qGP6hTHMIRyKxfolkmmb37r0tEylsyyUeNP6e7kvXWzuwWzchRGnmhpaEHPeS6J%2FgIhKYiE24wbl41juexMRTaiTcApcO56m6%2BzXQFq8ZtooIQ48Z0D%2BQ7AOL2fXw5vVXrvcmPfKhKbjHEReP96uJDH9A5vRt%2FYOA6RwS411rofhUQYt8opB1P0cMgqoOUry1bkYqGXj4phtPId8ZlD5kfOiwK9APbCNrwHGXQccDPJGbrGwPFF39JKNMPPJqL4GOqUB0hri%2FWNATyyoA6lNnqBnA0iNZ0ZvoL2kA0zOTe4u7l1UXg9GY0BnnoTFUjBxnGTaNEqQYmmFQn7u%2F6Xz7TJL6Z6NgGcIj3CLyDgc2X%2FMqsbrxoy74hhY64zCtHMbBJmksVQ7GWhEDAb9pGFPoepzF1RDR%2BRG7AYcAf9Wka3w%2Bc7mkQE0ipgyObZqfF7R%2F5Ey%2BdoXnAtcxb6K3Bz4zdDOh4c8xk3f&X-Amz-Signature=5d6ce195517d3689f2354053613f59690ad75637344a53b0d5a5a800e6956bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFKHYN7O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVmh2vBKerUloADJ7RnnYADZKm9e7zujZkkJ0Sk%2FreAiEAzC0zPoIeENrt%2F5d6kQyULn1rruIhUTmov95hrTpc7Fkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLMKiRbvlinzfTSVpCrcA3ghlHtIoycD9%2BCB9v8sQITYfHHcXVej4%2BGJa%2F8mMLoeaOSH79rbXVBwqwPBkMR2NlScfE1T5l5T5iSU569i21bd1Uvap5d3b5ox7pVd7AwS%2FVf26aT%2FjYqwOHBOf545JNhFjBhdJlNrKS9sb8ZS9lkLD3rMYv5DT8I%2BmiYps5dY22cpgiK9aQWHWwyMo6PMEXuTTupvhshv5i1KiJptNmBCkdt8qk3z3n%2BhZtnnAbkh4hK2yAs5j%2FIqDgIcZWs3Y8oqR%2FPc%2FOE0uc04QytFrN2f8I98d%2Ff6%2Fe2rdXSc4sUU2USCJ%2FA8t1PrlKlb86uE67MlPzH9uB82Sfyl8Rr2mtf8on2j9OzWImn8NwOhO6yZXqjJgwAlxS9dduSpOYzZcl34qGP6hTHMIRyKxfolkmmb37r0tEylsyyUeNP6e7kvXWzuwWzchRGnmhpaEHPeS6J%2FgIhKYiE24wbl41juexMRTaiTcApcO56m6%2BzXQFq8ZtooIQ48Z0D%2BQ7AOL2fXw5vVXrvcmPfKhKbjHEReP96uJDH9A5vRt%2FYOA6RwS411rofhUQYt8opB1P0cMgqoOUry1bkYqGXj4phtPId8ZlD5kfOiwK9APbCNrwHGXQccDPJGbrGwPFF39JKNMPPJqL4GOqUB0hri%2FWNATyyoA6lNnqBnA0iNZ0ZvoL2kA0zOTe4u7l1UXg9GY0BnnoTFUjBxnGTaNEqQYmmFQn7u%2F6Xz7TJL6Z6NgGcIj3CLyDgc2X%2FMqsbrxoy74hhY64zCtHMbBJmksVQ7GWhEDAb9pGFPoepzF1RDR%2BRG7AYcAf9Wka3w%2Bc7mkQE0ipgyObZqfF7R%2F5Ey%2BdoXnAtcxb6K3Bz4zdDOh4c8xk3f&X-Amz-Signature=bd35b8bbb23245442001f4e822ddf78256e1271b1be4025b22b9fc273c4d21b2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFKHYN7O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVmh2vBKerUloADJ7RnnYADZKm9e7zujZkkJ0Sk%2FreAiEAzC0zPoIeENrt%2F5d6kQyULn1rruIhUTmov95hrTpc7Fkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLMKiRbvlinzfTSVpCrcA3ghlHtIoycD9%2BCB9v8sQITYfHHcXVej4%2BGJa%2F8mMLoeaOSH79rbXVBwqwPBkMR2NlScfE1T5l5T5iSU569i21bd1Uvap5d3b5ox7pVd7AwS%2FVf26aT%2FjYqwOHBOf545JNhFjBhdJlNrKS9sb8ZS9lkLD3rMYv5DT8I%2BmiYps5dY22cpgiK9aQWHWwyMo6PMEXuTTupvhshv5i1KiJptNmBCkdt8qk3z3n%2BhZtnnAbkh4hK2yAs5j%2FIqDgIcZWs3Y8oqR%2FPc%2FOE0uc04QytFrN2f8I98d%2Ff6%2Fe2rdXSc4sUU2USCJ%2FA8t1PrlKlb86uE67MlPzH9uB82Sfyl8Rr2mtf8on2j9OzWImn8NwOhO6yZXqjJgwAlxS9dduSpOYzZcl34qGP6hTHMIRyKxfolkmmb37r0tEylsyyUeNP6e7kvXWzuwWzchRGnmhpaEHPeS6J%2FgIhKYiE24wbl41juexMRTaiTcApcO56m6%2BzXQFq8ZtooIQ48Z0D%2BQ7AOL2fXw5vVXrvcmPfKhKbjHEReP96uJDH9A5vRt%2FYOA6RwS411rofhUQYt8opB1P0cMgqoOUry1bkYqGXj4phtPId8ZlD5kfOiwK9APbCNrwHGXQccDPJGbrGwPFF39JKNMPPJqL4GOqUB0hri%2FWNATyyoA6lNnqBnA0iNZ0ZvoL2kA0zOTe4u7l1UXg9GY0BnnoTFUjBxnGTaNEqQYmmFQn7u%2F6Xz7TJL6Z6NgGcIj3CLyDgc2X%2FMqsbrxoy74hhY64zCtHMbBJmksVQ7GWhEDAb9pGFPoepzF1RDR%2BRG7AYcAf9Wka3w%2Bc7mkQE0ipgyObZqfF7R%2F5Ey%2BdoXnAtcxb6K3Bz4zdDOh4c8xk3f&X-Amz-Signature=95dfb3d3579c2f222d81fec45f3123d9a346e5b91cf05e09c012002d6d3f18da&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFKHYN7O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVmh2vBKerUloADJ7RnnYADZKm9e7zujZkkJ0Sk%2FreAiEAzC0zPoIeENrt%2F5d6kQyULn1rruIhUTmov95hrTpc7Fkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLMKiRbvlinzfTSVpCrcA3ghlHtIoycD9%2BCB9v8sQITYfHHcXVej4%2BGJa%2F8mMLoeaOSH79rbXVBwqwPBkMR2NlScfE1T5l5T5iSU569i21bd1Uvap5d3b5ox7pVd7AwS%2FVf26aT%2FjYqwOHBOf545JNhFjBhdJlNrKS9sb8ZS9lkLD3rMYv5DT8I%2BmiYps5dY22cpgiK9aQWHWwyMo6PMEXuTTupvhshv5i1KiJptNmBCkdt8qk3z3n%2BhZtnnAbkh4hK2yAs5j%2FIqDgIcZWs3Y8oqR%2FPc%2FOE0uc04QytFrN2f8I98d%2Ff6%2Fe2rdXSc4sUU2USCJ%2FA8t1PrlKlb86uE67MlPzH9uB82Sfyl8Rr2mtf8on2j9OzWImn8NwOhO6yZXqjJgwAlxS9dduSpOYzZcl34qGP6hTHMIRyKxfolkmmb37r0tEylsyyUeNP6e7kvXWzuwWzchRGnmhpaEHPeS6J%2FgIhKYiE24wbl41juexMRTaiTcApcO56m6%2BzXQFq8ZtooIQ48Z0D%2BQ7AOL2fXw5vVXrvcmPfKhKbjHEReP96uJDH9A5vRt%2FYOA6RwS411rofhUQYt8opB1P0cMgqoOUry1bkYqGXj4phtPId8ZlD5kfOiwK9APbCNrwHGXQccDPJGbrGwPFF39JKNMPPJqL4GOqUB0hri%2FWNATyyoA6lNnqBnA0iNZ0ZvoL2kA0zOTe4u7l1UXg9GY0BnnoTFUjBxnGTaNEqQYmmFQn7u%2F6Xz7TJL6Z6NgGcIj3CLyDgc2X%2FMqsbrxoy74hhY64zCtHMbBJmksVQ7GWhEDAb9pGFPoepzF1RDR%2BRG7AYcAf9Wka3w%2Bc7mkQE0ipgyObZqfF7R%2F5Ey%2BdoXnAtcxb6K3Bz4zdDOh4c8xk3f&X-Amz-Signature=59d2f4f2a6a4bf5bb45c2e466ae181f91f88f21e5a1454e034626efe5366c37f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
