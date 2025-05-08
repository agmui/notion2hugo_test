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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM7R35M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9zJy%2BFaXF9yNva67GQrNuL3XvNJwwcdZnpZAKiG5miAiBZzxSjYBIFlHfv7IAiBpaOXcdor%2FQbJLAPQaJG2lvIAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMcakN1VAKQOcC%2FxiZKtwDqgC6DPFCSJAQ%2FmK9BjJ5V%2B8EQmo41rc0x9RdGaQw6pMOENnxtWUCNrUIYIMBTd1PAEO6k7PX9i9QIOPZH9oBZKUtGEzSh1OVckdwXRoxf5eFhXSE185SZwdyrA003VZN%2BbCo%2FetaKoPlwwHOI0F49tXBnsOX%2B7a%2BCHieqTB5%2Bp1%2FWE8FbEgxQj1MBu9U3Womn%2FdRIrarf55xO56E2ElvTGXun0X6A8icEGBsM7lVKNbz0B25CNZ%2FBbyAKIzLcByzsRehU3zClx9VXheLPMkwEBJmmIX%2Br08gRuQ7zQ9T6v6y1aKR12pMfLzRrN%2BbF9Vw780a0cS%2B%2BOBJKijGGTgZG60p%2Bz4lZbcUjS729yqyD3naY1nWlR9vpSHdE1LVATlLDJiTrJoD9%2ByreyArlSp9mZAXAaRJl3lkkwHiBLziCARyCeZui%2F%2FBxnDx4JPKFZgmCbjU5RVR6J3x3UG23mXxfsFS%2BARVs%2FZ2wxKp7ro7ms68v7g1ij%2BAHYKuC7MflTvWJ4DBDeAKFMIWueo33BfVIAbh7Q6X%2FhIO3FCdH9mIxA5Bu2%2FQxM0TzIZXivHq%2BDaoECaDqt7LDpfjuy%2FUIIFMLq3KR3lqV3Eo0GZHjgXkphG49nxKod8r2UYtWaMwvZn0wAY6pgFF5bcpzH4tT0ijkF91cklrMnNNHUT6hpaaM74z1C5FmqnWCCEzEYZkmJwiwdd7lVKnJWcNpq2UlZT7WziN0CpnWxOO13KThv8Xhw%2FVx2wc%2Fm08EuVy%2BsFHMvcz2zVKMoe%2BkhjtybEsQZ%2FKdIcT%2Fza5PKA9mX0VCti1EvN8H5b2UOT7WRMbxQkz8Xin6FVRnLu5gpJBVlig4K0%2FhyLrr6jg%2F1IYb%2B2f&X-Amz-Signature=2e2d792fd835be5ece9fc6847c4e8057a42d25e85dc0e25d1d9a13f2fe12a532&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM7R35M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9zJy%2BFaXF9yNva67GQrNuL3XvNJwwcdZnpZAKiG5miAiBZzxSjYBIFlHfv7IAiBpaOXcdor%2FQbJLAPQaJG2lvIAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMcakN1VAKQOcC%2FxiZKtwDqgC6DPFCSJAQ%2FmK9BjJ5V%2B8EQmo41rc0x9RdGaQw6pMOENnxtWUCNrUIYIMBTd1PAEO6k7PX9i9QIOPZH9oBZKUtGEzSh1OVckdwXRoxf5eFhXSE185SZwdyrA003VZN%2BbCo%2FetaKoPlwwHOI0F49tXBnsOX%2B7a%2BCHieqTB5%2Bp1%2FWE8FbEgxQj1MBu9U3Womn%2FdRIrarf55xO56E2ElvTGXun0X6A8icEGBsM7lVKNbz0B25CNZ%2FBbyAKIzLcByzsRehU3zClx9VXheLPMkwEBJmmIX%2Br08gRuQ7zQ9T6v6y1aKR12pMfLzRrN%2BbF9Vw780a0cS%2B%2BOBJKijGGTgZG60p%2Bz4lZbcUjS729yqyD3naY1nWlR9vpSHdE1LVATlLDJiTrJoD9%2ByreyArlSp9mZAXAaRJl3lkkwHiBLziCARyCeZui%2F%2FBxnDx4JPKFZgmCbjU5RVR6J3x3UG23mXxfsFS%2BARVs%2FZ2wxKp7ro7ms68v7g1ij%2BAHYKuC7MflTvWJ4DBDeAKFMIWueo33BfVIAbh7Q6X%2FhIO3FCdH9mIxA5Bu2%2FQxM0TzIZXivHq%2BDaoECaDqt7LDpfjuy%2FUIIFMLq3KR3lqV3Eo0GZHjgXkphG49nxKod8r2UYtWaMwvZn0wAY6pgFF5bcpzH4tT0ijkF91cklrMnNNHUT6hpaaM74z1C5FmqnWCCEzEYZkmJwiwdd7lVKnJWcNpq2UlZT7WziN0CpnWxOO13KThv8Xhw%2FVx2wc%2Fm08EuVy%2BsFHMvcz2zVKMoe%2BkhjtybEsQZ%2FKdIcT%2Fza5PKA9mX0VCti1EvN8H5b2UOT7WRMbxQkz8Xin6FVRnLu5gpJBVlig4K0%2FhyLrr6jg%2F1IYb%2B2f&X-Amz-Signature=6fb42910b07ee6eae024ec24592dc91cc3598abb4ebcc256207a984b690a7f24&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM7R35M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9zJy%2BFaXF9yNva67GQrNuL3XvNJwwcdZnpZAKiG5miAiBZzxSjYBIFlHfv7IAiBpaOXcdor%2FQbJLAPQaJG2lvIAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMcakN1VAKQOcC%2FxiZKtwDqgC6DPFCSJAQ%2FmK9BjJ5V%2B8EQmo41rc0x9RdGaQw6pMOENnxtWUCNrUIYIMBTd1PAEO6k7PX9i9QIOPZH9oBZKUtGEzSh1OVckdwXRoxf5eFhXSE185SZwdyrA003VZN%2BbCo%2FetaKoPlwwHOI0F49tXBnsOX%2B7a%2BCHieqTB5%2Bp1%2FWE8FbEgxQj1MBu9U3Womn%2FdRIrarf55xO56E2ElvTGXun0X6A8icEGBsM7lVKNbz0B25CNZ%2FBbyAKIzLcByzsRehU3zClx9VXheLPMkwEBJmmIX%2Br08gRuQ7zQ9T6v6y1aKR12pMfLzRrN%2BbF9Vw780a0cS%2B%2BOBJKijGGTgZG60p%2Bz4lZbcUjS729yqyD3naY1nWlR9vpSHdE1LVATlLDJiTrJoD9%2ByreyArlSp9mZAXAaRJl3lkkwHiBLziCARyCeZui%2F%2FBxnDx4JPKFZgmCbjU5RVR6J3x3UG23mXxfsFS%2BARVs%2FZ2wxKp7ro7ms68v7g1ij%2BAHYKuC7MflTvWJ4DBDeAKFMIWueo33BfVIAbh7Q6X%2FhIO3FCdH9mIxA5Bu2%2FQxM0TzIZXivHq%2BDaoECaDqt7LDpfjuy%2FUIIFMLq3KR3lqV3Eo0GZHjgXkphG49nxKod8r2UYtWaMwvZn0wAY6pgFF5bcpzH4tT0ijkF91cklrMnNNHUT6hpaaM74z1C5FmqnWCCEzEYZkmJwiwdd7lVKnJWcNpq2UlZT7WziN0CpnWxOO13KThv8Xhw%2FVx2wc%2Fm08EuVy%2BsFHMvcz2zVKMoe%2BkhjtybEsQZ%2FKdIcT%2Fza5PKA9mX0VCti1EvN8H5b2UOT7WRMbxQkz8Xin6FVRnLu5gpJBVlig4K0%2FhyLrr6jg%2F1IYb%2B2f&X-Amz-Signature=6d2e45719202f2cb5e01bcb2d65923e7033af6d6444d419e0e5e08e98ed76ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM7R35M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9zJy%2BFaXF9yNva67GQrNuL3XvNJwwcdZnpZAKiG5miAiBZzxSjYBIFlHfv7IAiBpaOXcdor%2FQbJLAPQaJG2lvIAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMcakN1VAKQOcC%2FxiZKtwDqgC6DPFCSJAQ%2FmK9BjJ5V%2B8EQmo41rc0x9RdGaQw6pMOENnxtWUCNrUIYIMBTd1PAEO6k7PX9i9QIOPZH9oBZKUtGEzSh1OVckdwXRoxf5eFhXSE185SZwdyrA003VZN%2BbCo%2FetaKoPlwwHOI0F49tXBnsOX%2B7a%2BCHieqTB5%2Bp1%2FWE8FbEgxQj1MBu9U3Womn%2FdRIrarf55xO56E2ElvTGXun0X6A8icEGBsM7lVKNbz0B25CNZ%2FBbyAKIzLcByzsRehU3zClx9VXheLPMkwEBJmmIX%2Br08gRuQ7zQ9T6v6y1aKR12pMfLzRrN%2BbF9Vw780a0cS%2B%2BOBJKijGGTgZG60p%2Bz4lZbcUjS729yqyD3naY1nWlR9vpSHdE1LVATlLDJiTrJoD9%2ByreyArlSp9mZAXAaRJl3lkkwHiBLziCARyCeZui%2F%2FBxnDx4JPKFZgmCbjU5RVR6J3x3UG23mXxfsFS%2BARVs%2FZ2wxKp7ro7ms68v7g1ij%2BAHYKuC7MflTvWJ4DBDeAKFMIWueo33BfVIAbh7Q6X%2FhIO3FCdH9mIxA5Bu2%2FQxM0TzIZXivHq%2BDaoECaDqt7LDpfjuy%2FUIIFMLq3KR3lqV3Eo0GZHjgXkphG49nxKod8r2UYtWaMwvZn0wAY6pgFF5bcpzH4tT0ijkF91cklrMnNNHUT6hpaaM74z1C5FmqnWCCEzEYZkmJwiwdd7lVKnJWcNpq2UlZT7WziN0CpnWxOO13KThv8Xhw%2FVx2wc%2Fm08EuVy%2BsFHMvcz2zVKMoe%2BkhjtybEsQZ%2FKdIcT%2Fza5PKA9mX0VCti1EvN8H5b2UOT7WRMbxQkz8Xin6FVRnLu5gpJBVlig4K0%2FhyLrr6jg%2F1IYb%2B2f&X-Amz-Signature=faed2b80fa58e48d03adcc0a06219ed7e7a6fcd18a050e724aea3185ba3b7fde&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM7R35M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9zJy%2BFaXF9yNva67GQrNuL3XvNJwwcdZnpZAKiG5miAiBZzxSjYBIFlHfv7IAiBpaOXcdor%2FQbJLAPQaJG2lvIAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMcakN1VAKQOcC%2FxiZKtwDqgC6DPFCSJAQ%2FmK9BjJ5V%2B8EQmo41rc0x9RdGaQw6pMOENnxtWUCNrUIYIMBTd1PAEO6k7PX9i9QIOPZH9oBZKUtGEzSh1OVckdwXRoxf5eFhXSE185SZwdyrA003VZN%2BbCo%2FetaKoPlwwHOI0F49tXBnsOX%2B7a%2BCHieqTB5%2Bp1%2FWE8FbEgxQj1MBu9U3Womn%2FdRIrarf55xO56E2ElvTGXun0X6A8icEGBsM7lVKNbz0B25CNZ%2FBbyAKIzLcByzsRehU3zClx9VXheLPMkwEBJmmIX%2Br08gRuQ7zQ9T6v6y1aKR12pMfLzRrN%2BbF9Vw780a0cS%2B%2BOBJKijGGTgZG60p%2Bz4lZbcUjS729yqyD3naY1nWlR9vpSHdE1LVATlLDJiTrJoD9%2ByreyArlSp9mZAXAaRJl3lkkwHiBLziCARyCeZui%2F%2FBxnDx4JPKFZgmCbjU5RVR6J3x3UG23mXxfsFS%2BARVs%2FZ2wxKp7ro7ms68v7g1ij%2BAHYKuC7MflTvWJ4DBDeAKFMIWueo33BfVIAbh7Q6X%2FhIO3FCdH9mIxA5Bu2%2FQxM0TzIZXivHq%2BDaoECaDqt7LDpfjuy%2FUIIFMLq3KR3lqV3Eo0GZHjgXkphG49nxKod8r2UYtWaMwvZn0wAY6pgFF5bcpzH4tT0ijkF91cklrMnNNHUT6hpaaM74z1C5FmqnWCCEzEYZkmJwiwdd7lVKnJWcNpq2UlZT7WziN0CpnWxOO13KThv8Xhw%2FVx2wc%2Fm08EuVy%2BsFHMvcz2zVKMoe%2BkhjtybEsQZ%2FKdIcT%2Fza5PKA9mX0VCti1EvN8H5b2UOT7WRMbxQkz8Xin6FVRnLu5gpJBVlig4K0%2FhyLrr6jg%2F1IYb%2B2f&X-Amz-Signature=b185d7f44883f7ff0b588fc2e12ed5bc4d03eb140bf1b7f0e978a41c81cba3de&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM7R35M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9zJy%2BFaXF9yNva67GQrNuL3XvNJwwcdZnpZAKiG5miAiBZzxSjYBIFlHfv7IAiBpaOXcdor%2FQbJLAPQaJG2lvIAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMcakN1VAKQOcC%2FxiZKtwDqgC6DPFCSJAQ%2FmK9BjJ5V%2B8EQmo41rc0x9RdGaQw6pMOENnxtWUCNrUIYIMBTd1PAEO6k7PX9i9QIOPZH9oBZKUtGEzSh1OVckdwXRoxf5eFhXSE185SZwdyrA003VZN%2BbCo%2FetaKoPlwwHOI0F49tXBnsOX%2B7a%2BCHieqTB5%2Bp1%2FWE8FbEgxQj1MBu9U3Womn%2FdRIrarf55xO56E2ElvTGXun0X6A8icEGBsM7lVKNbz0B25CNZ%2FBbyAKIzLcByzsRehU3zClx9VXheLPMkwEBJmmIX%2Br08gRuQ7zQ9T6v6y1aKR12pMfLzRrN%2BbF9Vw780a0cS%2B%2BOBJKijGGTgZG60p%2Bz4lZbcUjS729yqyD3naY1nWlR9vpSHdE1LVATlLDJiTrJoD9%2ByreyArlSp9mZAXAaRJl3lkkwHiBLziCARyCeZui%2F%2FBxnDx4JPKFZgmCbjU5RVR6J3x3UG23mXxfsFS%2BARVs%2FZ2wxKp7ro7ms68v7g1ij%2BAHYKuC7MflTvWJ4DBDeAKFMIWueo33BfVIAbh7Q6X%2FhIO3FCdH9mIxA5Bu2%2FQxM0TzIZXivHq%2BDaoECaDqt7LDpfjuy%2FUIIFMLq3KR3lqV3Eo0GZHjgXkphG49nxKod8r2UYtWaMwvZn0wAY6pgFF5bcpzH4tT0ijkF91cklrMnNNHUT6hpaaM74z1C5FmqnWCCEzEYZkmJwiwdd7lVKnJWcNpq2UlZT7WziN0CpnWxOO13KThv8Xhw%2FVx2wc%2Fm08EuVy%2BsFHMvcz2zVKMoe%2BkhjtybEsQZ%2FKdIcT%2Fza5PKA9mX0VCti1EvN8H5b2UOT7WRMbxQkz8Xin6FVRnLu5gpJBVlig4K0%2FhyLrr6jg%2F1IYb%2B2f&X-Amz-Signature=27376c83d9d76dc5cc3f316cdf0bb5b75fa63ea55a9493840ffb952ea42c7502&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIM7R35M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9zJy%2BFaXF9yNva67GQrNuL3XvNJwwcdZnpZAKiG5miAiBZzxSjYBIFlHfv7IAiBpaOXcdor%2FQbJLAPQaJG2lvIAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMcakN1VAKQOcC%2FxiZKtwDqgC6DPFCSJAQ%2FmK9BjJ5V%2B8EQmo41rc0x9RdGaQw6pMOENnxtWUCNrUIYIMBTd1PAEO6k7PX9i9QIOPZH9oBZKUtGEzSh1OVckdwXRoxf5eFhXSE185SZwdyrA003VZN%2BbCo%2FetaKoPlwwHOI0F49tXBnsOX%2B7a%2BCHieqTB5%2Bp1%2FWE8FbEgxQj1MBu9U3Womn%2FdRIrarf55xO56E2ElvTGXun0X6A8icEGBsM7lVKNbz0B25CNZ%2FBbyAKIzLcByzsRehU3zClx9VXheLPMkwEBJmmIX%2Br08gRuQ7zQ9T6v6y1aKR12pMfLzRrN%2BbF9Vw780a0cS%2B%2BOBJKijGGTgZG60p%2Bz4lZbcUjS729yqyD3naY1nWlR9vpSHdE1LVATlLDJiTrJoD9%2ByreyArlSp9mZAXAaRJl3lkkwHiBLziCARyCeZui%2F%2FBxnDx4JPKFZgmCbjU5RVR6J3x3UG23mXxfsFS%2BARVs%2FZ2wxKp7ro7ms68v7g1ij%2BAHYKuC7MflTvWJ4DBDeAKFMIWueo33BfVIAbh7Q6X%2FhIO3FCdH9mIxA5Bu2%2FQxM0TzIZXivHq%2BDaoECaDqt7LDpfjuy%2FUIIFMLq3KR3lqV3Eo0GZHjgXkphG49nxKod8r2UYtWaMwvZn0wAY6pgFF5bcpzH4tT0ijkF91cklrMnNNHUT6hpaaM74z1C5FmqnWCCEzEYZkmJwiwdd7lVKnJWcNpq2UlZT7WziN0CpnWxOO13KThv8Xhw%2FVx2wc%2Fm08EuVy%2BsFHMvcz2zVKMoe%2BkhjtybEsQZ%2FKdIcT%2Fza5PKA9mX0VCti1EvN8H5b2UOT7WRMbxQkz8Xin6FVRnLu5gpJBVlig4K0%2FhyLrr6jg%2F1IYb%2B2f&X-Amz-Signature=0a7bf6790c1250e760d90775c98d211829f157ae631cb1c478408d43f80a78d3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
