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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORIAPLE%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCfGRl%2ByzrnFlQxqfy5y8NubYA8yHH186Zp%2BifSbCNpuQIhANMN3I0C0avn7DK3kPHOIFqtBbS0uQ9sSzd70KHp5V1FKv8DCH4QABoMNjM3NDIzMTgzODA1Igw5%2FKQNAOHabTauKl0q3ANemokCxJF4JizO1SZXO7zWwacjzC46GMN5PW8d26o9aDxguPK87%2BoRxyPXoJ%2F3mHZTb4EPx5xOGt7tbcfg3mIc1r4sczhkRJULvkAt3KRVDeM0VTXKQ%2FRwfslAjpi9C%2BPTDsbyfgh0iQzoPM0NiHbUYd3qmwSF5PzhdHYbjR63PHlk739RW7hQEb40CO%2FOgmwzmyVWp28Ii4vN37Fi6Y4wGndlX2Vhqav0EBj3Eej0bNzeHacDfEnvq070s1SsliXU0VAxZhwcUCJbkxJ8lHPp%2B1EtxrgP9Ckq2ANyN98MjNjQISON5OwNIPJEJfuEMer2f%2By5xLUswlU552pyLxkljEwhx5QVPEyODXbMHSZ14yJ3CzsHbtubLs4NB9izckaGOSB%2BO%2BEP36zQAzGWQFnuuuagPNwKWNKZvJbwRUWay3piv3pxSLyOcXW05Tiv3Rr3nMQW0py8uVe6BFFsMBggzudVKSL2NUI8pkdyKufYTjEUQhZjJCYrw7okcgM95dh%2FWHR0LRobt%2BfI0cR%2B%2BbotWZrrI8w5iEJfQVwX2acVurmG98ZG6wmZteTfGIqGrH4%2Fn1D%2FWJExAhnk1a%2B6hoOr1lFX5QsvethzU4pAQF8zrtXuer1fKse0QELyuDCR2ey%2BBjqkATChx8chDMTXu%2FxT%2B4LpvDB%2FuwPACHVGYvBwOsN1b4566isOP2HeRk3oOV3dBi8CzVVrp0SIVUKVEnpmt01CgaOzm9tdfWEmfimQcVbL4OmpkCIt3tEuVvIX%2Fk%2B5CxrZ%2FYilq3UJ1CR%2F6PheaGcbRx0Qesmh%2FJaBLz8FrPanXzlUhVGLt20bPFHvm8cy2D4t%2FnijlK3WSUYXXsx7JjMO6eCrbmUg&X-Amz-Signature=4f5c4ac99daf2070a1bbb38d33372530e8930b0a2598cfb6a5db8cc020e22ed1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORIAPLE%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCfGRl%2ByzrnFlQxqfy5y8NubYA8yHH186Zp%2BifSbCNpuQIhANMN3I0C0avn7DK3kPHOIFqtBbS0uQ9sSzd70KHp5V1FKv8DCH4QABoMNjM3NDIzMTgzODA1Igw5%2FKQNAOHabTauKl0q3ANemokCxJF4JizO1SZXO7zWwacjzC46GMN5PW8d26o9aDxguPK87%2BoRxyPXoJ%2F3mHZTb4EPx5xOGt7tbcfg3mIc1r4sczhkRJULvkAt3KRVDeM0VTXKQ%2FRwfslAjpi9C%2BPTDsbyfgh0iQzoPM0NiHbUYd3qmwSF5PzhdHYbjR63PHlk739RW7hQEb40CO%2FOgmwzmyVWp28Ii4vN37Fi6Y4wGndlX2Vhqav0EBj3Eej0bNzeHacDfEnvq070s1SsliXU0VAxZhwcUCJbkxJ8lHPp%2B1EtxrgP9Ckq2ANyN98MjNjQISON5OwNIPJEJfuEMer2f%2By5xLUswlU552pyLxkljEwhx5QVPEyODXbMHSZ14yJ3CzsHbtubLs4NB9izckaGOSB%2BO%2BEP36zQAzGWQFnuuuagPNwKWNKZvJbwRUWay3piv3pxSLyOcXW05Tiv3Rr3nMQW0py8uVe6BFFsMBggzudVKSL2NUI8pkdyKufYTjEUQhZjJCYrw7okcgM95dh%2FWHR0LRobt%2BfI0cR%2B%2BbotWZrrI8w5iEJfQVwX2acVurmG98ZG6wmZteTfGIqGrH4%2Fn1D%2FWJExAhnk1a%2B6hoOr1lFX5QsvethzU4pAQF8zrtXuer1fKse0QELyuDCR2ey%2BBjqkATChx8chDMTXu%2FxT%2B4LpvDB%2FuwPACHVGYvBwOsN1b4566isOP2HeRk3oOV3dBi8CzVVrp0SIVUKVEnpmt01CgaOzm9tdfWEmfimQcVbL4OmpkCIt3tEuVvIX%2Fk%2B5CxrZ%2FYilq3UJ1CR%2F6PheaGcbRx0Qesmh%2FJaBLz8FrPanXzlUhVGLt20bPFHvm8cy2D4t%2FnijlK3WSUYXXsx7JjMO6eCrbmUg&X-Amz-Signature=d09b0da1fb1c7993a740fb9faae8974db3302de64b436e18752a95ed397bab46&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORIAPLE%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCfGRl%2ByzrnFlQxqfy5y8NubYA8yHH186Zp%2BifSbCNpuQIhANMN3I0C0avn7DK3kPHOIFqtBbS0uQ9sSzd70KHp5V1FKv8DCH4QABoMNjM3NDIzMTgzODA1Igw5%2FKQNAOHabTauKl0q3ANemokCxJF4JizO1SZXO7zWwacjzC46GMN5PW8d26o9aDxguPK87%2BoRxyPXoJ%2F3mHZTb4EPx5xOGt7tbcfg3mIc1r4sczhkRJULvkAt3KRVDeM0VTXKQ%2FRwfslAjpi9C%2BPTDsbyfgh0iQzoPM0NiHbUYd3qmwSF5PzhdHYbjR63PHlk739RW7hQEb40CO%2FOgmwzmyVWp28Ii4vN37Fi6Y4wGndlX2Vhqav0EBj3Eej0bNzeHacDfEnvq070s1SsliXU0VAxZhwcUCJbkxJ8lHPp%2B1EtxrgP9Ckq2ANyN98MjNjQISON5OwNIPJEJfuEMer2f%2By5xLUswlU552pyLxkljEwhx5QVPEyODXbMHSZ14yJ3CzsHbtubLs4NB9izckaGOSB%2BO%2BEP36zQAzGWQFnuuuagPNwKWNKZvJbwRUWay3piv3pxSLyOcXW05Tiv3Rr3nMQW0py8uVe6BFFsMBggzudVKSL2NUI8pkdyKufYTjEUQhZjJCYrw7okcgM95dh%2FWHR0LRobt%2BfI0cR%2B%2BbotWZrrI8w5iEJfQVwX2acVurmG98ZG6wmZteTfGIqGrH4%2Fn1D%2FWJExAhnk1a%2B6hoOr1lFX5QsvethzU4pAQF8zrtXuer1fKse0QELyuDCR2ey%2BBjqkATChx8chDMTXu%2FxT%2B4LpvDB%2FuwPACHVGYvBwOsN1b4566isOP2HeRk3oOV3dBi8CzVVrp0SIVUKVEnpmt01CgaOzm9tdfWEmfimQcVbL4OmpkCIt3tEuVvIX%2Fk%2B5CxrZ%2FYilq3UJ1CR%2F6PheaGcbRx0Qesmh%2FJaBLz8FrPanXzlUhVGLt20bPFHvm8cy2D4t%2FnijlK3WSUYXXsx7JjMO6eCrbmUg&X-Amz-Signature=c13c5881cc91e805c72e35a608441b6e1ad2e347e608bfd9b0ef26be8534cbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORIAPLE%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCfGRl%2ByzrnFlQxqfy5y8NubYA8yHH186Zp%2BifSbCNpuQIhANMN3I0C0avn7DK3kPHOIFqtBbS0uQ9sSzd70KHp5V1FKv8DCH4QABoMNjM3NDIzMTgzODA1Igw5%2FKQNAOHabTauKl0q3ANemokCxJF4JizO1SZXO7zWwacjzC46GMN5PW8d26o9aDxguPK87%2BoRxyPXoJ%2F3mHZTb4EPx5xOGt7tbcfg3mIc1r4sczhkRJULvkAt3KRVDeM0VTXKQ%2FRwfslAjpi9C%2BPTDsbyfgh0iQzoPM0NiHbUYd3qmwSF5PzhdHYbjR63PHlk739RW7hQEb40CO%2FOgmwzmyVWp28Ii4vN37Fi6Y4wGndlX2Vhqav0EBj3Eej0bNzeHacDfEnvq070s1SsliXU0VAxZhwcUCJbkxJ8lHPp%2B1EtxrgP9Ckq2ANyN98MjNjQISON5OwNIPJEJfuEMer2f%2By5xLUswlU552pyLxkljEwhx5QVPEyODXbMHSZ14yJ3CzsHbtubLs4NB9izckaGOSB%2BO%2BEP36zQAzGWQFnuuuagPNwKWNKZvJbwRUWay3piv3pxSLyOcXW05Tiv3Rr3nMQW0py8uVe6BFFsMBggzudVKSL2NUI8pkdyKufYTjEUQhZjJCYrw7okcgM95dh%2FWHR0LRobt%2BfI0cR%2B%2BbotWZrrI8w5iEJfQVwX2acVurmG98ZG6wmZteTfGIqGrH4%2Fn1D%2FWJExAhnk1a%2B6hoOr1lFX5QsvethzU4pAQF8zrtXuer1fKse0QELyuDCR2ey%2BBjqkATChx8chDMTXu%2FxT%2B4LpvDB%2FuwPACHVGYvBwOsN1b4566isOP2HeRk3oOV3dBi8CzVVrp0SIVUKVEnpmt01CgaOzm9tdfWEmfimQcVbL4OmpkCIt3tEuVvIX%2Fk%2B5CxrZ%2FYilq3UJ1CR%2F6PheaGcbRx0Qesmh%2FJaBLz8FrPanXzlUhVGLt20bPFHvm8cy2D4t%2FnijlK3WSUYXXsx7JjMO6eCrbmUg&X-Amz-Signature=b3038e638b973a19dda3018b76a45a8b2a4b46a67b2c9f98b384248326284577&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORIAPLE%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCfGRl%2ByzrnFlQxqfy5y8NubYA8yHH186Zp%2BifSbCNpuQIhANMN3I0C0avn7DK3kPHOIFqtBbS0uQ9sSzd70KHp5V1FKv8DCH4QABoMNjM3NDIzMTgzODA1Igw5%2FKQNAOHabTauKl0q3ANemokCxJF4JizO1SZXO7zWwacjzC46GMN5PW8d26o9aDxguPK87%2BoRxyPXoJ%2F3mHZTb4EPx5xOGt7tbcfg3mIc1r4sczhkRJULvkAt3KRVDeM0VTXKQ%2FRwfslAjpi9C%2BPTDsbyfgh0iQzoPM0NiHbUYd3qmwSF5PzhdHYbjR63PHlk739RW7hQEb40CO%2FOgmwzmyVWp28Ii4vN37Fi6Y4wGndlX2Vhqav0EBj3Eej0bNzeHacDfEnvq070s1SsliXU0VAxZhwcUCJbkxJ8lHPp%2B1EtxrgP9Ckq2ANyN98MjNjQISON5OwNIPJEJfuEMer2f%2By5xLUswlU552pyLxkljEwhx5QVPEyODXbMHSZ14yJ3CzsHbtubLs4NB9izckaGOSB%2BO%2BEP36zQAzGWQFnuuuagPNwKWNKZvJbwRUWay3piv3pxSLyOcXW05Tiv3Rr3nMQW0py8uVe6BFFsMBggzudVKSL2NUI8pkdyKufYTjEUQhZjJCYrw7okcgM95dh%2FWHR0LRobt%2BfI0cR%2B%2BbotWZrrI8w5iEJfQVwX2acVurmG98ZG6wmZteTfGIqGrH4%2Fn1D%2FWJExAhnk1a%2B6hoOr1lFX5QsvethzU4pAQF8zrtXuer1fKse0QELyuDCR2ey%2BBjqkATChx8chDMTXu%2FxT%2B4LpvDB%2FuwPACHVGYvBwOsN1b4566isOP2HeRk3oOV3dBi8CzVVrp0SIVUKVEnpmt01CgaOzm9tdfWEmfimQcVbL4OmpkCIt3tEuVvIX%2Fk%2B5CxrZ%2FYilq3UJ1CR%2F6PheaGcbRx0Qesmh%2FJaBLz8FrPanXzlUhVGLt20bPFHvm8cy2D4t%2FnijlK3WSUYXXsx7JjMO6eCrbmUg&X-Amz-Signature=9f6a1ad68786e05bf198730cde0892d36072197874b2b6ef8b08c068b2f3e9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORIAPLE%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCfGRl%2ByzrnFlQxqfy5y8NubYA8yHH186Zp%2BifSbCNpuQIhANMN3I0C0avn7DK3kPHOIFqtBbS0uQ9sSzd70KHp5V1FKv8DCH4QABoMNjM3NDIzMTgzODA1Igw5%2FKQNAOHabTauKl0q3ANemokCxJF4JizO1SZXO7zWwacjzC46GMN5PW8d26o9aDxguPK87%2BoRxyPXoJ%2F3mHZTb4EPx5xOGt7tbcfg3mIc1r4sczhkRJULvkAt3KRVDeM0VTXKQ%2FRwfslAjpi9C%2BPTDsbyfgh0iQzoPM0NiHbUYd3qmwSF5PzhdHYbjR63PHlk739RW7hQEb40CO%2FOgmwzmyVWp28Ii4vN37Fi6Y4wGndlX2Vhqav0EBj3Eej0bNzeHacDfEnvq070s1SsliXU0VAxZhwcUCJbkxJ8lHPp%2B1EtxrgP9Ckq2ANyN98MjNjQISON5OwNIPJEJfuEMer2f%2By5xLUswlU552pyLxkljEwhx5QVPEyODXbMHSZ14yJ3CzsHbtubLs4NB9izckaGOSB%2BO%2BEP36zQAzGWQFnuuuagPNwKWNKZvJbwRUWay3piv3pxSLyOcXW05Tiv3Rr3nMQW0py8uVe6BFFsMBggzudVKSL2NUI8pkdyKufYTjEUQhZjJCYrw7okcgM95dh%2FWHR0LRobt%2BfI0cR%2B%2BbotWZrrI8w5iEJfQVwX2acVurmG98ZG6wmZteTfGIqGrH4%2Fn1D%2FWJExAhnk1a%2B6hoOr1lFX5QsvethzU4pAQF8zrtXuer1fKse0QELyuDCR2ey%2BBjqkATChx8chDMTXu%2FxT%2B4LpvDB%2FuwPACHVGYvBwOsN1b4566isOP2HeRk3oOV3dBi8CzVVrp0SIVUKVEnpmt01CgaOzm9tdfWEmfimQcVbL4OmpkCIt3tEuVvIX%2Fk%2B5CxrZ%2FYilq3UJ1CR%2F6PheaGcbRx0Qesmh%2FJaBLz8FrPanXzlUhVGLt20bPFHvm8cy2D4t%2FnijlK3WSUYXXsx7JjMO6eCrbmUg&X-Amz-Signature=f61b7a0af34a9fa90f0e3956c711af57cfddeee1201e28f9d57e5aa469e84cac&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UORIAPLE%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCfGRl%2ByzrnFlQxqfy5y8NubYA8yHH186Zp%2BifSbCNpuQIhANMN3I0C0avn7DK3kPHOIFqtBbS0uQ9sSzd70KHp5V1FKv8DCH4QABoMNjM3NDIzMTgzODA1Igw5%2FKQNAOHabTauKl0q3ANemokCxJF4JizO1SZXO7zWwacjzC46GMN5PW8d26o9aDxguPK87%2BoRxyPXoJ%2F3mHZTb4EPx5xOGt7tbcfg3mIc1r4sczhkRJULvkAt3KRVDeM0VTXKQ%2FRwfslAjpi9C%2BPTDsbyfgh0iQzoPM0NiHbUYd3qmwSF5PzhdHYbjR63PHlk739RW7hQEb40CO%2FOgmwzmyVWp28Ii4vN37Fi6Y4wGndlX2Vhqav0EBj3Eej0bNzeHacDfEnvq070s1SsliXU0VAxZhwcUCJbkxJ8lHPp%2B1EtxrgP9Ckq2ANyN98MjNjQISON5OwNIPJEJfuEMer2f%2By5xLUswlU552pyLxkljEwhx5QVPEyODXbMHSZ14yJ3CzsHbtubLs4NB9izckaGOSB%2BO%2BEP36zQAzGWQFnuuuagPNwKWNKZvJbwRUWay3piv3pxSLyOcXW05Tiv3Rr3nMQW0py8uVe6BFFsMBggzudVKSL2NUI8pkdyKufYTjEUQhZjJCYrw7okcgM95dh%2FWHR0LRobt%2BfI0cR%2B%2BbotWZrrI8w5iEJfQVwX2acVurmG98ZG6wmZteTfGIqGrH4%2Fn1D%2FWJExAhnk1a%2B6hoOr1lFX5QsvethzU4pAQF8zrtXuer1fKse0QELyuDCR2ey%2BBjqkATChx8chDMTXu%2FxT%2B4LpvDB%2FuwPACHVGYvBwOsN1b4566isOP2HeRk3oOV3dBi8CzVVrp0SIVUKVEnpmt01CgaOzm9tdfWEmfimQcVbL4OmpkCIt3tEuVvIX%2Fk%2B5CxrZ%2FYilq3UJ1CR%2F6PheaGcbRx0Qesmh%2FJaBLz8FrPanXzlUhVGLt20bPFHvm8cy2D4t%2FnijlK3WSUYXXsx7JjMO6eCrbmUg&X-Amz-Signature=9f30d8a5f49d86b71c4a9c4cfb524fb2fea6fa12ef0b7128bf4249d9b6a9b5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
