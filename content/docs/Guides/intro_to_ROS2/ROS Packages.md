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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVFB3B6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3bm4o%2F6bDzVlFmt%2FbbUTTYa71vWMG4611AzGdK%2FIpPAiEAxKuF89VYIA2NalHSnqqG8iVOm0lsqmZNf%2FFAAvfLXQ4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLab%2BBmUW8XvWNRW%2FCrcA5hzczIkc3TjZe5%2FUvS%2FoiQp3KfN6eOCHVc3iVNBcArxskFksN4zuK0Go%2FSCUxlljTcEP36CWzJFjQj8v%2Bw%2BYYf01%2BTlml4b3Vcz6c8a7JirBj4DabArxfWssKkTTY4coB%2BNs3dzWGL3dRHRHxoUEdFuZlu5Awj6w%2FBT%2B%2F1vGYSktQxRwOD9zP7K8t7u9ipfFqTLRcp2UiLiNS5aRg3vHdLnPEzHJ87xmCN7K4qVAvlForR%2F7BuC4VLX8ek5dnc4PHS86HGE90kHlv2OnBDyNmto54bQ5qVROT9dmmh2eUM3dXIFjzAw61pF3WzTmd9CXNYKKzseolwVeNZ68WaZbi8NqPaSvgvaDkJgwgCY66pC6%2B%2FfDeNyRF%2BVQZqdtCX3ZxDGzmoZhNFLPd8j4kBDUXVzq494Fb3zV3FWNrCR3VKuhOMTCKPSyiUU3BdseAzTIe7AsAmXYRhm67Fgz7BKEhJApKAGjMlQUAg6oVf8oyZobTOuzsbqtMdhHuF0Vc%2FhiRjRC%2Fx9cZp5aQPRo%2FfLx2UJ5mTFLo%2BkkFGGMLh1%2FltYT6X7syckBD0sdZQxu0kvxUhsFQY6PxNYjP6gqAKw6q%2BO%2BqrOXeldPKM60YqXN2kEYltus3MawxLdxq8SMIDj174GOqUBB96ikzDP%2FSZeQdXqbDGQ%2FtowCHGfPtANSJIgCw5A%2BgsXYpxo9MCx%2Ba8NhTJxPCIgbCv2kGefF2ivwZOXnsWSa%2FpyQ4BFARorr6MvHS49Mj4o%2Bbg2AgGarfgkM%2BXYubLwETkQXdu8%2B8Sk5lARbMUniweXDyhBo%2BWG88MEpXBpI2Mw7eGlt%2FbGCLXqwc%2B0elBshzVYjzMXqeE%2FACYm7sxPQUiYdCgq&X-Amz-Signature=4247029c1e32e3234f64bc7b84541a1ac6486f1ca7ccd1e559974127798731a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVFB3B6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3bm4o%2F6bDzVlFmt%2FbbUTTYa71vWMG4611AzGdK%2FIpPAiEAxKuF89VYIA2NalHSnqqG8iVOm0lsqmZNf%2FFAAvfLXQ4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLab%2BBmUW8XvWNRW%2FCrcA5hzczIkc3TjZe5%2FUvS%2FoiQp3KfN6eOCHVc3iVNBcArxskFksN4zuK0Go%2FSCUxlljTcEP36CWzJFjQj8v%2Bw%2BYYf01%2BTlml4b3Vcz6c8a7JirBj4DabArxfWssKkTTY4coB%2BNs3dzWGL3dRHRHxoUEdFuZlu5Awj6w%2FBT%2B%2F1vGYSktQxRwOD9zP7K8t7u9ipfFqTLRcp2UiLiNS5aRg3vHdLnPEzHJ87xmCN7K4qVAvlForR%2F7BuC4VLX8ek5dnc4PHS86HGE90kHlv2OnBDyNmto54bQ5qVROT9dmmh2eUM3dXIFjzAw61pF3WzTmd9CXNYKKzseolwVeNZ68WaZbi8NqPaSvgvaDkJgwgCY66pC6%2B%2FfDeNyRF%2BVQZqdtCX3ZxDGzmoZhNFLPd8j4kBDUXVzq494Fb3zV3FWNrCR3VKuhOMTCKPSyiUU3BdseAzTIe7AsAmXYRhm67Fgz7BKEhJApKAGjMlQUAg6oVf8oyZobTOuzsbqtMdhHuF0Vc%2FhiRjRC%2Fx9cZp5aQPRo%2FfLx2UJ5mTFLo%2BkkFGGMLh1%2FltYT6X7syckBD0sdZQxu0kvxUhsFQY6PxNYjP6gqAKw6q%2BO%2BqrOXeldPKM60YqXN2kEYltus3MawxLdxq8SMIDj174GOqUBB96ikzDP%2FSZeQdXqbDGQ%2FtowCHGfPtANSJIgCw5A%2BgsXYpxo9MCx%2Ba8NhTJxPCIgbCv2kGefF2ivwZOXnsWSa%2FpyQ4BFARorr6MvHS49Mj4o%2Bbg2AgGarfgkM%2BXYubLwETkQXdu8%2B8Sk5lARbMUniweXDyhBo%2BWG88MEpXBpI2Mw7eGlt%2FbGCLXqwc%2B0elBshzVYjzMXqeE%2FACYm7sxPQUiYdCgq&X-Amz-Signature=44154b316e951e59881869106bac330ff2f0d9d03b5b4bb6959c2b83a6cf5902&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVFB3B6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3bm4o%2F6bDzVlFmt%2FbbUTTYa71vWMG4611AzGdK%2FIpPAiEAxKuF89VYIA2NalHSnqqG8iVOm0lsqmZNf%2FFAAvfLXQ4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLab%2BBmUW8XvWNRW%2FCrcA5hzczIkc3TjZe5%2FUvS%2FoiQp3KfN6eOCHVc3iVNBcArxskFksN4zuK0Go%2FSCUxlljTcEP36CWzJFjQj8v%2Bw%2BYYf01%2BTlml4b3Vcz6c8a7JirBj4DabArxfWssKkTTY4coB%2BNs3dzWGL3dRHRHxoUEdFuZlu5Awj6w%2FBT%2B%2F1vGYSktQxRwOD9zP7K8t7u9ipfFqTLRcp2UiLiNS5aRg3vHdLnPEzHJ87xmCN7K4qVAvlForR%2F7BuC4VLX8ek5dnc4PHS86HGE90kHlv2OnBDyNmto54bQ5qVROT9dmmh2eUM3dXIFjzAw61pF3WzTmd9CXNYKKzseolwVeNZ68WaZbi8NqPaSvgvaDkJgwgCY66pC6%2B%2FfDeNyRF%2BVQZqdtCX3ZxDGzmoZhNFLPd8j4kBDUXVzq494Fb3zV3FWNrCR3VKuhOMTCKPSyiUU3BdseAzTIe7AsAmXYRhm67Fgz7BKEhJApKAGjMlQUAg6oVf8oyZobTOuzsbqtMdhHuF0Vc%2FhiRjRC%2Fx9cZp5aQPRo%2FfLx2UJ5mTFLo%2BkkFGGMLh1%2FltYT6X7syckBD0sdZQxu0kvxUhsFQY6PxNYjP6gqAKw6q%2BO%2BqrOXeldPKM60YqXN2kEYltus3MawxLdxq8SMIDj174GOqUBB96ikzDP%2FSZeQdXqbDGQ%2FtowCHGfPtANSJIgCw5A%2BgsXYpxo9MCx%2Ba8NhTJxPCIgbCv2kGefF2ivwZOXnsWSa%2FpyQ4BFARorr6MvHS49Mj4o%2Bbg2AgGarfgkM%2BXYubLwETkQXdu8%2B8Sk5lARbMUniweXDyhBo%2BWG88MEpXBpI2Mw7eGlt%2FbGCLXqwc%2B0elBshzVYjzMXqeE%2FACYm7sxPQUiYdCgq&X-Amz-Signature=36f975b34be0a02fa6c514d29a0522c228e93b2a2fcfd88f35e4521ca901524a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVFB3B6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3bm4o%2F6bDzVlFmt%2FbbUTTYa71vWMG4611AzGdK%2FIpPAiEAxKuF89VYIA2NalHSnqqG8iVOm0lsqmZNf%2FFAAvfLXQ4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLab%2BBmUW8XvWNRW%2FCrcA5hzczIkc3TjZe5%2FUvS%2FoiQp3KfN6eOCHVc3iVNBcArxskFksN4zuK0Go%2FSCUxlljTcEP36CWzJFjQj8v%2Bw%2BYYf01%2BTlml4b3Vcz6c8a7JirBj4DabArxfWssKkTTY4coB%2BNs3dzWGL3dRHRHxoUEdFuZlu5Awj6w%2FBT%2B%2F1vGYSktQxRwOD9zP7K8t7u9ipfFqTLRcp2UiLiNS5aRg3vHdLnPEzHJ87xmCN7K4qVAvlForR%2F7BuC4VLX8ek5dnc4PHS86HGE90kHlv2OnBDyNmto54bQ5qVROT9dmmh2eUM3dXIFjzAw61pF3WzTmd9CXNYKKzseolwVeNZ68WaZbi8NqPaSvgvaDkJgwgCY66pC6%2B%2FfDeNyRF%2BVQZqdtCX3ZxDGzmoZhNFLPd8j4kBDUXVzq494Fb3zV3FWNrCR3VKuhOMTCKPSyiUU3BdseAzTIe7AsAmXYRhm67Fgz7BKEhJApKAGjMlQUAg6oVf8oyZobTOuzsbqtMdhHuF0Vc%2FhiRjRC%2Fx9cZp5aQPRo%2FfLx2UJ5mTFLo%2BkkFGGMLh1%2FltYT6X7syckBD0sdZQxu0kvxUhsFQY6PxNYjP6gqAKw6q%2BO%2BqrOXeldPKM60YqXN2kEYltus3MawxLdxq8SMIDj174GOqUBB96ikzDP%2FSZeQdXqbDGQ%2FtowCHGfPtANSJIgCw5A%2BgsXYpxo9MCx%2Ba8NhTJxPCIgbCv2kGefF2ivwZOXnsWSa%2FpyQ4BFARorr6MvHS49Mj4o%2Bbg2AgGarfgkM%2BXYubLwETkQXdu8%2B8Sk5lARbMUniweXDyhBo%2BWG88MEpXBpI2Mw7eGlt%2FbGCLXqwc%2B0elBshzVYjzMXqeE%2FACYm7sxPQUiYdCgq&X-Amz-Signature=c05d398a267b0b2410e775f96aa1dd7b9a28035dd303f608ba90ad7353359e50&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVFB3B6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3bm4o%2F6bDzVlFmt%2FbbUTTYa71vWMG4611AzGdK%2FIpPAiEAxKuF89VYIA2NalHSnqqG8iVOm0lsqmZNf%2FFAAvfLXQ4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLab%2BBmUW8XvWNRW%2FCrcA5hzczIkc3TjZe5%2FUvS%2FoiQp3KfN6eOCHVc3iVNBcArxskFksN4zuK0Go%2FSCUxlljTcEP36CWzJFjQj8v%2Bw%2BYYf01%2BTlml4b3Vcz6c8a7JirBj4DabArxfWssKkTTY4coB%2BNs3dzWGL3dRHRHxoUEdFuZlu5Awj6w%2FBT%2B%2F1vGYSktQxRwOD9zP7K8t7u9ipfFqTLRcp2UiLiNS5aRg3vHdLnPEzHJ87xmCN7K4qVAvlForR%2F7BuC4VLX8ek5dnc4PHS86HGE90kHlv2OnBDyNmto54bQ5qVROT9dmmh2eUM3dXIFjzAw61pF3WzTmd9CXNYKKzseolwVeNZ68WaZbi8NqPaSvgvaDkJgwgCY66pC6%2B%2FfDeNyRF%2BVQZqdtCX3ZxDGzmoZhNFLPd8j4kBDUXVzq494Fb3zV3FWNrCR3VKuhOMTCKPSyiUU3BdseAzTIe7AsAmXYRhm67Fgz7BKEhJApKAGjMlQUAg6oVf8oyZobTOuzsbqtMdhHuF0Vc%2FhiRjRC%2Fx9cZp5aQPRo%2FfLx2UJ5mTFLo%2BkkFGGMLh1%2FltYT6X7syckBD0sdZQxu0kvxUhsFQY6PxNYjP6gqAKw6q%2BO%2BqrOXeldPKM60YqXN2kEYltus3MawxLdxq8SMIDj174GOqUBB96ikzDP%2FSZeQdXqbDGQ%2FtowCHGfPtANSJIgCw5A%2BgsXYpxo9MCx%2Ba8NhTJxPCIgbCv2kGefF2ivwZOXnsWSa%2FpyQ4BFARorr6MvHS49Mj4o%2Bbg2AgGarfgkM%2BXYubLwETkQXdu8%2B8Sk5lARbMUniweXDyhBo%2BWG88MEpXBpI2Mw7eGlt%2FbGCLXqwc%2B0elBshzVYjzMXqeE%2FACYm7sxPQUiYdCgq&X-Amz-Signature=516e6fe0a9dbabb6dcd403251c8a0e3a5e96c3936949a57b619b4a288d604b99&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVFB3B6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3bm4o%2F6bDzVlFmt%2FbbUTTYa71vWMG4611AzGdK%2FIpPAiEAxKuF89VYIA2NalHSnqqG8iVOm0lsqmZNf%2FFAAvfLXQ4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLab%2BBmUW8XvWNRW%2FCrcA5hzczIkc3TjZe5%2FUvS%2FoiQp3KfN6eOCHVc3iVNBcArxskFksN4zuK0Go%2FSCUxlljTcEP36CWzJFjQj8v%2Bw%2BYYf01%2BTlml4b3Vcz6c8a7JirBj4DabArxfWssKkTTY4coB%2BNs3dzWGL3dRHRHxoUEdFuZlu5Awj6w%2FBT%2B%2F1vGYSktQxRwOD9zP7K8t7u9ipfFqTLRcp2UiLiNS5aRg3vHdLnPEzHJ87xmCN7K4qVAvlForR%2F7BuC4VLX8ek5dnc4PHS86HGE90kHlv2OnBDyNmto54bQ5qVROT9dmmh2eUM3dXIFjzAw61pF3WzTmd9CXNYKKzseolwVeNZ68WaZbi8NqPaSvgvaDkJgwgCY66pC6%2B%2FfDeNyRF%2BVQZqdtCX3ZxDGzmoZhNFLPd8j4kBDUXVzq494Fb3zV3FWNrCR3VKuhOMTCKPSyiUU3BdseAzTIe7AsAmXYRhm67Fgz7BKEhJApKAGjMlQUAg6oVf8oyZobTOuzsbqtMdhHuF0Vc%2FhiRjRC%2Fx9cZp5aQPRo%2FfLx2UJ5mTFLo%2BkkFGGMLh1%2FltYT6X7syckBD0sdZQxu0kvxUhsFQY6PxNYjP6gqAKw6q%2BO%2BqrOXeldPKM60YqXN2kEYltus3MawxLdxq8SMIDj174GOqUBB96ikzDP%2FSZeQdXqbDGQ%2FtowCHGfPtANSJIgCw5A%2BgsXYpxo9MCx%2Ba8NhTJxPCIgbCv2kGefF2ivwZOXnsWSa%2FpyQ4BFARorr6MvHS49Mj4o%2Bbg2AgGarfgkM%2BXYubLwETkQXdu8%2B8Sk5lARbMUniweXDyhBo%2BWG88MEpXBpI2Mw7eGlt%2FbGCLXqwc%2B0elBshzVYjzMXqeE%2FACYm7sxPQUiYdCgq&X-Amz-Signature=6eb07cab4775e215002ccec5d29ea8a4d3d7135e2ed1f1e4337687495dbf4a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVFB3B6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3bm4o%2F6bDzVlFmt%2FbbUTTYa71vWMG4611AzGdK%2FIpPAiEAxKuF89VYIA2NalHSnqqG8iVOm0lsqmZNf%2FFAAvfLXQ4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDLab%2BBmUW8XvWNRW%2FCrcA5hzczIkc3TjZe5%2FUvS%2FoiQp3KfN6eOCHVc3iVNBcArxskFksN4zuK0Go%2FSCUxlljTcEP36CWzJFjQj8v%2Bw%2BYYf01%2BTlml4b3Vcz6c8a7JirBj4DabArxfWssKkTTY4coB%2BNs3dzWGL3dRHRHxoUEdFuZlu5Awj6w%2FBT%2B%2F1vGYSktQxRwOD9zP7K8t7u9ipfFqTLRcp2UiLiNS5aRg3vHdLnPEzHJ87xmCN7K4qVAvlForR%2F7BuC4VLX8ek5dnc4PHS86HGE90kHlv2OnBDyNmto54bQ5qVROT9dmmh2eUM3dXIFjzAw61pF3WzTmd9CXNYKKzseolwVeNZ68WaZbi8NqPaSvgvaDkJgwgCY66pC6%2B%2FfDeNyRF%2BVQZqdtCX3ZxDGzmoZhNFLPd8j4kBDUXVzq494Fb3zV3FWNrCR3VKuhOMTCKPSyiUU3BdseAzTIe7AsAmXYRhm67Fgz7BKEhJApKAGjMlQUAg6oVf8oyZobTOuzsbqtMdhHuF0Vc%2FhiRjRC%2Fx9cZp5aQPRo%2FfLx2UJ5mTFLo%2BkkFGGMLh1%2FltYT6X7syckBD0sdZQxu0kvxUhsFQY6PxNYjP6gqAKw6q%2BO%2BqrOXeldPKM60YqXN2kEYltus3MawxLdxq8SMIDj174GOqUBB96ikzDP%2FSZeQdXqbDGQ%2FtowCHGfPtANSJIgCw5A%2BgsXYpxo9MCx%2Ba8NhTJxPCIgbCv2kGefF2ivwZOXnsWSa%2FpyQ4BFARorr6MvHS49Mj4o%2Bbg2AgGarfgkM%2BXYubLwETkQXdu8%2B8Sk5lARbMUniweXDyhBo%2BWG88MEpXBpI2Mw7eGlt%2FbGCLXqwc%2B0elBshzVYjzMXqeE%2FACYm7sxPQUiYdCgq&X-Amz-Signature=2ef89f7169de4cf918ac69afaffe8c8845efec570ae2599023c35f888603a198&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
