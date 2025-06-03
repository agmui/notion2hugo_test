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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYFVS3W%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIEmWimuB2bBgqDKDbkV4dxSfCMWkxE8vKatNAE7czh8CAiEAvX62lNRD8S4j0v5ku4LcofYDV3k5H3C52MG%2FtSuDercq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIrtr1J1F0FOqzAYsircA1AOa673BCdbI3L1W5jZaJYV1kEhYTiPxyxoBNRx5rS6K61HzMAjQsdebA4zTdYd9OOyZweAPi2M%2BcA7L5hWl8NrwhQkAmMAx2HNNyvv6P9fkc8MSoCYiTz5yclZUEAXTQbDqpfN%2FihFfhIt45bOKMoHjv5HqnhxTQO6vpMpFWb%2BX6x6zWnWZl0EKmRFepVBhFNUkWMckiPWhLQXfLjEB0Dt%2BeGHNwwDRGPxrjlijE4obl%2FFLP%2BRqsR1SYMcjUs2NSwyoSUPC%2BReQtYSfW%2BNzlEIMDASeF3Ull7XrMzrAkgJP%2B%2FhsJ9ceBlWCUWSGQ5KdzhGYqwcE5xyZR2nYzxgq2MuUpM37ycq3M1z5JvSlrdiN1bXqc9mK9ofHzoEBZuSR1VaTT0A2FGmeEPrvvkGVWiiAEh94xS2xo2if3R6h2NfIF7HAigqKQcNb2XumawSKp%2F%2BiOgoRVv7C1y6GEXM2ONbn4duk2EW38E04EtMN%2FOPo82UI6iwN%2FC8AxfWBGBDCC9p9Rn79STuc9oln2lXHeOHP%2FvQQ0JcGciV5jDa2sJFNdxkjsRnQogccn%2FqoR7Ziofadv81OM3uMb8KY8uLjKOd5vj4qKJNiNdoeaqW84X6nHGBTqX3ViTU8bO9MMj3%2FcEGOqUBzjz9nK0WIGfjUAbmJBv5%2F56KM7H%2FGWEZytZZuqfxZLb2AGRoFV8au8P2ZgXAIcCKBwEVxiMpNmk9KLwXfz24ygFEm64f79%2FGtD0oj4tHHDK9XGao5SBnywM%2FCLKZsIE0ISb3IYBWXrk5KDWcMnpJXhIK9Sj23sETkWderZ7W2davTh9Hxi7zHnk3Q2pcEtMJ%2Bb12x2UWreAatDb%2BjuVI2EA3TBdE&X-Amz-Signature=5405c1a99fc63c25f022c323f901dbb180763162591c7e4fdeb7d294cc597440&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYFVS3W%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIEmWimuB2bBgqDKDbkV4dxSfCMWkxE8vKatNAE7czh8CAiEAvX62lNRD8S4j0v5ku4LcofYDV3k5H3C52MG%2FtSuDercq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIrtr1J1F0FOqzAYsircA1AOa673BCdbI3L1W5jZaJYV1kEhYTiPxyxoBNRx5rS6K61HzMAjQsdebA4zTdYd9OOyZweAPi2M%2BcA7L5hWl8NrwhQkAmMAx2HNNyvv6P9fkc8MSoCYiTz5yclZUEAXTQbDqpfN%2FihFfhIt45bOKMoHjv5HqnhxTQO6vpMpFWb%2BX6x6zWnWZl0EKmRFepVBhFNUkWMckiPWhLQXfLjEB0Dt%2BeGHNwwDRGPxrjlijE4obl%2FFLP%2BRqsR1SYMcjUs2NSwyoSUPC%2BReQtYSfW%2BNzlEIMDASeF3Ull7XrMzrAkgJP%2B%2FhsJ9ceBlWCUWSGQ5KdzhGYqwcE5xyZR2nYzxgq2MuUpM37ycq3M1z5JvSlrdiN1bXqc9mK9ofHzoEBZuSR1VaTT0A2FGmeEPrvvkGVWiiAEh94xS2xo2if3R6h2NfIF7HAigqKQcNb2XumawSKp%2F%2BiOgoRVv7C1y6GEXM2ONbn4duk2EW38E04EtMN%2FOPo82UI6iwN%2FC8AxfWBGBDCC9p9Rn79STuc9oln2lXHeOHP%2FvQQ0JcGciV5jDa2sJFNdxkjsRnQogccn%2FqoR7Ziofadv81OM3uMb8KY8uLjKOd5vj4qKJNiNdoeaqW84X6nHGBTqX3ViTU8bO9MMj3%2FcEGOqUBzjz9nK0WIGfjUAbmJBv5%2F56KM7H%2FGWEZytZZuqfxZLb2AGRoFV8au8P2ZgXAIcCKBwEVxiMpNmk9KLwXfz24ygFEm64f79%2FGtD0oj4tHHDK9XGao5SBnywM%2FCLKZsIE0ISb3IYBWXrk5KDWcMnpJXhIK9Sj23sETkWderZ7W2davTh9Hxi7zHnk3Q2pcEtMJ%2Bb12x2UWreAatDb%2BjuVI2EA3TBdE&X-Amz-Signature=9c504134b62a3a9d153131ef4c5a9a13cb16153cf47cf3b823fc89d39284c6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYFVS3W%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIEmWimuB2bBgqDKDbkV4dxSfCMWkxE8vKatNAE7czh8CAiEAvX62lNRD8S4j0v5ku4LcofYDV3k5H3C52MG%2FtSuDercq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIrtr1J1F0FOqzAYsircA1AOa673BCdbI3L1W5jZaJYV1kEhYTiPxyxoBNRx5rS6K61HzMAjQsdebA4zTdYd9OOyZweAPi2M%2BcA7L5hWl8NrwhQkAmMAx2HNNyvv6P9fkc8MSoCYiTz5yclZUEAXTQbDqpfN%2FihFfhIt45bOKMoHjv5HqnhxTQO6vpMpFWb%2BX6x6zWnWZl0EKmRFepVBhFNUkWMckiPWhLQXfLjEB0Dt%2BeGHNwwDRGPxrjlijE4obl%2FFLP%2BRqsR1SYMcjUs2NSwyoSUPC%2BReQtYSfW%2BNzlEIMDASeF3Ull7XrMzrAkgJP%2B%2FhsJ9ceBlWCUWSGQ5KdzhGYqwcE5xyZR2nYzxgq2MuUpM37ycq3M1z5JvSlrdiN1bXqc9mK9ofHzoEBZuSR1VaTT0A2FGmeEPrvvkGVWiiAEh94xS2xo2if3R6h2NfIF7HAigqKQcNb2XumawSKp%2F%2BiOgoRVv7C1y6GEXM2ONbn4duk2EW38E04EtMN%2FOPo82UI6iwN%2FC8AxfWBGBDCC9p9Rn79STuc9oln2lXHeOHP%2FvQQ0JcGciV5jDa2sJFNdxkjsRnQogccn%2FqoR7Ziofadv81OM3uMb8KY8uLjKOd5vj4qKJNiNdoeaqW84X6nHGBTqX3ViTU8bO9MMj3%2FcEGOqUBzjz9nK0WIGfjUAbmJBv5%2F56KM7H%2FGWEZytZZuqfxZLb2AGRoFV8au8P2ZgXAIcCKBwEVxiMpNmk9KLwXfz24ygFEm64f79%2FGtD0oj4tHHDK9XGao5SBnywM%2FCLKZsIE0ISb3IYBWXrk5KDWcMnpJXhIK9Sj23sETkWderZ7W2davTh9Hxi7zHnk3Q2pcEtMJ%2Bb12x2UWreAatDb%2BjuVI2EA3TBdE&X-Amz-Signature=e4b9e81ac77ce02bf1ddedc9fa751e31894e03b26bb000f358d4a3177231e10c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYFVS3W%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIEmWimuB2bBgqDKDbkV4dxSfCMWkxE8vKatNAE7czh8CAiEAvX62lNRD8S4j0v5ku4LcofYDV3k5H3C52MG%2FtSuDercq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIrtr1J1F0FOqzAYsircA1AOa673BCdbI3L1W5jZaJYV1kEhYTiPxyxoBNRx5rS6K61HzMAjQsdebA4zTdYd9OOyZweAPi2M%2BcA7L5hWl8NrwhQkAmMAx2HNNyvv6P9fkc8MSoCYiTz5yclZUEAXTQbDqpfN%2FihFfhIt45bOKMoHjv5HqnhxTQO6vpMpFWb%2BX6x6zWnWZl0EKmRFepVBhFNUkWMckiPWhLQXfLjEB0Dt%2BeGHNwwDRGPxrjlijE4obl%2FFLP%2BRqsR1SYMcjUs2NSwyoSUPC%2BReQtYSfW%2BNzlEIMDASeF3Ull7XrMzrAkgJP%2B%2FhsJ9ceBlWCUWSGQ5KdzhGYqwcE5xyZR2nYzxgq2MuUpM37ycq3M1z5JvSlrdiN1bXqc9mK9ofHzoEBZuSR1VaTT0A2FGmeEPrvvkGVWiiAEh94xS2xo2if3R6h2NfIF7HAigqKQcNb2XumawSKp%2F%2BiOgoRVv7C1y6GEXM2ONbn4duk2EW38E04EtMN%2FOPo82UI6iwN%2FC8AxfWBGBDCC9p9Rn79STuc9oln2lXHeOHP%2FvQQ0JcGciV5jDa2sJFNdxkjsRnQogccn%2FqoR7Ziofadv81OM3uMb8KY8uLjKOd5vj4qKJNiNdoeaqW84X6nHGBTqX3ViTU8bO9MMj3%2FcEGOqUBzjz9nK0WIGfjUAbmJBv5%2F56KM7H%2FGWEZytZZuqfxZLb2AGRoFV8au8P2ZgXAIcCKBwEVxiMpNmk9KLwXfz24ygFEm64f79%2FGtD0oj4tHHDK9XGao5SBnywM%2FCLKZsIE0ISb3IYBWXrk5KDWcMnpJXhIK9Sj23sETkWderZ7W2davTh9Hxi7zHnk3Q2pcEtMJ%2Bb12x2UWreAatDb%2BjuVI2EA3TBdE&X-Amz-Signature=1f23cfb481884de4fbc3c96f6f03dbc99595d0d9f9f71aaf246d4b1b91bc0883&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYFVS3W%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIEmWimuB2bBgqDKDbkV4dxSfCMWkxE8vKatNAE7czh8CAiEAvX62lNRD8S4j0v5ku4LcofYDV3k5H3C52MG%2FtSuDercq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIrtr1J1F0FOqzAYsircA1AOa673BCdbI3L1W5jZaJYV1kEhYTiPxyxoBNRx5rS6K61HzMAjQsdebA4zTdYd9OOyZweAPi2M%2BcA7L5hWl8NrwhQkAmMAx2HNNyvv6P9fkc8MSoCYiTz5yclZUEAXTQbDqpfN%2FihFfhIt45bOKMoHjv5HqnhxTQO6vpMpFWb%2BX6x6zWnWZl0EKmRFepVBhFNUkWMckiPWhLQXfLjEB0Dt%2BeGHNwwDRGPxrjlijE4obl%2FFLP%2BRqsR1SYMcjUs2NSwyoSUPC%2BReQtYSfW%2BNzlEIMDASeF3Ull7XrMzrAkgJP%2B%2FhsJ9ceBlWCUWSGQ5KdzhGYqwcE5xyZR2nYzxgq2MuUpM37ycq3M1z5JvSlrdiN1bXqc9mK9ofHzoEBZuSR1VaTT0A2FGmeEPrvvkGVWiiAEh94xS2xo2if3R6h2NfIF7HAigqKQcNb2XumawSKp%2F%2BiOgoRVv7C1y6GEXM2ONbn4duk2EW38E04EtMN%2FOPo82UI6iwN%2FC8AxfWBGBDCC9p9Rn79STuc9oln2lXHeOHP%2FvQQ0JcGciV5jDa2sJFNdxkjsRnQogccn%2FqoR7Ziofadv81OM3uMb8KY8uLjKOd5vj4qKJNiNdoeaqW84X6nHGBTqX3ViTU8bO9MMj3%2FcEGOqUBzjz9nK0WIGfjUAbmJBv5%2F56KM7H%2FGWEZytZZuqfxZLb2AGRoFV8au8P2ZgXAIcCKBwEVxiMpNmk9KLwXfz24ygFEm64f79%2FGtD0oj4tHHDK9XGao5SBnywM%2FCLKZsIE0ISb3IYBWXrk5KDWcMnpJXhIK9Sj23sETkWderZ7W2davTh9Hxi7zHnk3Q2pcEtMJ%2Bb12x2UWreAatDb%2BjuVI2EA3TBdE&X-Amz-Signature=c0d1ca1ad803a6d5eabb12684430725199f4300bab0905ce5d08cd5723215af5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYFVS3W%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIEmWimuB2bBgqDKDbkV4dxSfCMWkxE8vKatNAE7czh8CAiEAvX62lNRD8S4j0v5ku4LcofYDV3k5H3C52MG%2FtSuDercq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIrtr1J1F0FOqzAYsircA1AOa673BCdbI3L1W5jZaJYV1kEhYTiPxyxoBNRx5rS6K61HzMAjQsdebA4zTdYd9OOyZweAPi2M%2BcA7L5hWl8NrwhQkAmMAx2HNNyvv6P9fkc8MSoCYiTz5yclZUEAXTQbDqpfN%2FihFfhIt45bOKMoHjv5HqnhxTQO6vpMpFWb%2BX6x6zWnWZl0EKmRFepVBhFNUkWMckiPWhLQXfLjEB0Dt%2BeGHNwwDRGPxrjlijE4obl%2FFLP%2BRqsR1SYMcjUs2NSwyoSUPC%2BReQtYSfW%2BNzlEIMDASeF3Ull7XrMzrAkgJP%2B%2FhsJ9ceBlWCUWSGQ5KdzhGYqwcE5xyZR2nYzxgq2MuUpM37ycq3M1z5JvSlrdiN1bXqc9mK9ofHzoEBZuSR1VaTT0A2FGmeEPrvvkGVWiiAEh94xS2xo2if3R6h2NfIF7HAigqKQcNb2XumawSKp%2F%2BiOgoRVv7C1y6GEXM2ONbn4duk2EW38E04EtMN%2FOPo82UI6iwN%2FC8AxfWBGBDCC9p9Rn79STuc9oln2lXHeOHP%2FvQQ0JcGciV5jDa2sJFNdxkjsRnQogccn%2FqoR7Ziofadv81OM3uMb8KY8uLjKOd5vj4qKJNiNdoeaqW84X6nHGBTqX3ViTU8bO9MMj3%2FcEGOqUBzjz9nK0WIGfjUAbmJBv5%2F56KM7H%2FGWEZytZZuqfxZLb2AGRoFV8au8P2ZgXAIcCKBwEVxiMpNmk9KLwXfz24ygFEm64f79%2FGtD0oj4tHHDK9XGao5SBnywM%2FCLKZsIE0ISb3IYBWXrk5KDWcMnpJXhIK9Sj23sETkWderZ7W2davTh9Hxi7zHnk3Q2pcEtMJ%2Bb12x2UWreAatDb%2BjuVI2EA3TBdE&X-Amz-Signature=fceec93a490cc676a8292cd08fe5c3107f442b3d9469bfa9ee58f04aeb15b472&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNYFVS3W%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIEmWimuB2bBgqDKDbkV4dxSfCMWkxE8vKatNAE7czh8CAiEAvX62lNRD8S4j0v5ku4LcofYDV3k5H3C52MG%2FtSuDercq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIrtr1J1F0FOqzAYsircA1AOa673BCdbI3L1W5jZaJYV1kEhYTiPxyxoBNRx5rS6K61HzMAjQsdebA4zTdYd9OOyZweAPi2M%2BcA7L5hWl8NrwhQkAmMAx2HNNyvv6P9fkc8MSoCYiTz5yclZUEAXTQbDqpfN%2FihFfhIt45bOKMoHjv5HqnhxTQO6vpMpFWb%2BX6x6zWnWZl0EKmRFepVBhFNUkWMckiPWhLQXfLjEB0Dt%2BeGHNwwDRGPxrjlijE4obl%2FFLP%2BRqsR1SYMcjUs2NSwyoSUPC%2BReQtYSfW%2BNzlEIMDASeF3Ull7XrMzrAkgJP%2B%2FhsJ9ceBlWCUWSGQ5KdzhGYqwcE5xyZR2nYzxgq2MuUpM37ycq3M1z5JvSlrdiN1bXqc9mK9ofHzoEBZuSR1VaTT0A2FGmeEPrvvkGVWiiAEh94xS2xo2if3R6h2NfIF7HAigqKQcNb2XumawSKp%2F%2BiOgoRVv7C1y6GEXM2ONbn4duk2EW38E04EtMN%2FOPo82UI6iwN%2FC8AxfWBGBDCC9p9Rn79STuc9oln2lXHeOHP%2FvQQ0JcGciV5jDa2sJFNdxkjsRnQogccn%2FqoR7Ziofadv81OM3uMb8KY8uLjKOd5vj4qKJNiNdoeaqW84X6nHGBTqX3ViTU8bO9MMj3%2FcEGOqUBzjz9nK0WIGfjUAbmJBv5%2F56KM7H%2FGWEZytZZuqfxZLb2AGRoFV8au8P2ZgXAIcCKBwEVxiMpNmk9KLwXfz24ygFEm64f79%2FGtD0oj4tHHDK9XGao5SBnywM%2FCLKZsIE0ISb3IYBWXrk5KDWcMnpJXhIK9Sj23sETkWderZ7W2davTh9Hxi7zHnk3Q2pcEtMJ%2Bb12x2UWreAatDb%2BjuVI2EA3TBdE&X-Amz-Signature=a04edf491c280a8afc4c0b4af3d2adc0af9059e75369e639b2ca73edfc9344f2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
