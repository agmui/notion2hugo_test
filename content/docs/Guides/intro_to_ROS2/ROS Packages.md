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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD35PCBO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCKa%2FVl7cIrekac6tDzjPZmothWTN8xqC6cb9Rlm5%2BgjgIgRJfyRfGhNf9Bi%2FUbQ6HdEs1wWktoIN5RiV%2BQEp4LGmoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdiA10%2FJKmQt76x7yrcA%2Fkl%2Bz6EuF5C1xnp%2BRIqYUHsU2M%2BkqoL3oSU%2Fy5dNsTaC6qN8HwAalwgObv1kLroNHQeARUy1%2BCX%2F9QgvLPtD6mQjfDKyrMdpOsbG92NeDQk8aKZToH8g1%2FXJTJFtwBXr16v7%2BfFcToWzyW4kisRvjE7YfkOFnrvn%2FFQ%2BRxnsrCIUp%2B1%2Bv1iY3LCTFTkNST58k9aXlQkJdrBcr9OiFdlVh6tbz7IOzbnZsAf4pjEVU7IEv%2Bt%2BvHXv%2FD5gM3u7mWnaWjY9F9Vx5fmT7lHrvJ2q4bUFiTTSAQ5tcQZcBywwtOz3jdHbwhtKOCTPECYIjVLJXlWR5RLWZZrxoaMpv413tLycIiC7B8bNnETnbkxoi8zSqlAd0qCRkgEZvEmvXtzUWfN1LeuetEk2dQNxAHTxdpXUoStBywLiSKghdeI6a%2BqIVUFHPVuVLGMfr9gSydIMLReUY47I9MxSS5VqFzXm%2BtQi51iB24kkFwuKt2h%2F5%2BuAHXSQuIjTM5lAacx4NieuCRIFW8AfjFKuEQzSTYyPJKwFDRlbqJSy%2FB9dPvaMVWtBtjQUVdkfv3qPpa70jWACsmkJhttuHJbG7bvIKxXjWo5sk54Ri0Ql0MQiAWnjn%2F7m1zxWP3Ck8JWdMVsMJXqor8GOqUBfUtmTKiH5T7GuCVewtE5l2TADIjFWp%2FffmkxxtssBpfQ9%2Fb8e3p68OGC71eYD79pg%2FueZOPdJsfhylyGbPfOKro91eJjcZwLYjzDg2UQdVaYBdWLY6YLXQ08%2BA26Jj8zr5xVhVC3Pu03n2PNAhiMt8wauBwIMA9CeBY92jWMDPnPTsoK7jktPHFSLouWx2LCSjnH0axINDOns4n3Af7x%2BjKQqBnO&X-Amz-Signature=dfb4af87892acaaa82c957c05ab304bc1c86a6172a550a22c9764941331b368a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD35PCBO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCKa%2FVl7cIrekac6tDzjPZmothWTN8xqC6cb9Rlm5%2BgjgIgRJfyRfGhNf9Bi%2FUbQ6HdEs1wWktoIN5RiV%2BQEp4LGmoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdiA10%2FJKmQt76x7yrcA%2Fkl%2Bz6EuF5C1xnp%2BRIqYUHsU2M%2BkqoL3oSU%2Fy5dNsTaC6qN8HwAalwgObv1kLroNHQeARUy1%2BCX%2F9QgvLPtD6mQjfDKyrMdpOsbG92NeDQk8aKZToH8g1%2FXJTJFtwBXr16v7%2BfFcToWzyW4kisRvjE7YfkOFnrvn%2FFQ%2BRxnsrCIUp%2B1%2Bv1iY3LCTFTkNST58k9aXlQkJdrBcr9OiFdlVh6tbz7IOzbnZsAf4pjEVU7IEv%2Bt%2BvHXv%2FD5gM3u7mWnaWjY9F9Vx5fmT7lHrvJ2q4bUFiTTSAQ5tcQZcBywwtOz3jdHbwhtKOCTPECYIjVLJXlWR5RLWZZrxoaMpv413tLycIiC7B8bNnETnbkxoi8zSqlAd0qCRkgEZvEmvXtzUWfN1LeuetEk2dQNxAHTxdpXUoStBywLiSKghdeI6a%2BqIVUFHPVuVLGMfr9gSydIMLReUY47I9MxSS5VqFzXm%2BtQi51iB24kkFwuKt2h%2F5%2BuAHXSQuIjTM5lAacx4NieuCRIFW8AfjFKuEQzSTYyPJKwFDRlbqJSy%2FB9dPvaMVWtBtjQUVdkfv3qPpa70jWACsmkJhttuHJbG7bvIKxXjWo5sk54Ri0Ql0MQiAWnjn%2F7m1zxWP3Ck8JWdMVsMJXqor8GOqUBfUtmTKiH5T7GuCVewtE5l2TADIjFWp%2FffmkxxtssBpfQ9%2Fb8e3p68OGC71eYD79pg%2FueZOPdJsfhylyGbPfOKro91eJjcZwLYjzDg2UQdVaYBdWLY6YLXQ08%2BA26Jj8zr5xVhVC3Pu03n2PNAhiMt8wauBwIMA9CeBY92jWMDPnPTsoK7jktPHFSLouWx2LCSjnH0axINDOns4n3Af7x%2BjKQqBnO&X-Amz-Signature=df9f699fc1c3a24f63807a4d83e21a76d50ee77eb76bcdf12bf4af6e3d4a41ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD35PCBO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCKa%2FVl7cIrekac6tDzjPZmothWTN8xqC6cb9Rlm5%2BgjgIgRJfyRfGhNf9Bi%2FUbQ6HdEs1wWktoIN5RiV%2BQEp4LGmoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdiA10%2FJKmQt76x7yrcA%2Fkl%2Bz6EuF5C1xnp%2BRIqYUHsU2M%2BkqoL3oSU%2Fy5dNsTaC6qN8HwAalwgObv1kLroNHQeARUy1%2BCX%2F9QgvLPtD6mQjfDKyrMdpOsbG92NeDQk8aKZToH8g1%2FXJTJFtwBXr16v7%2BfFcToWzyW4kisRvjE7YfkOFnrvn%2FFQ%2BRxnsrCIUp%2B1%2Bv1iY3LCTFTkNST58k9aXlQkJdrBcr9OiFdlVh6tbz7IOzbnZsAf4pjEVU7IEv%2Bt%2BvHXv%2FD5gM3u7mWnaWjY9F9Vx5fmT7lHrvJ2q4bUFiTTSAQ5tcQZcBywwtOz3jdHbwhtKOCTPECYIjVLJXlWR5RLWZZrxoaMpv413tLycIiC7B8bNnETnbkxoi8zSqlAd0qCRkgEZvEmvXtzUWfN1LeuetEk2dQNxAHTxdpXUoStBywLiSKghdeI6a%2BqIVUFHPVuVLGMfr9gSydIMLReUY47I9MxSS5VqFzXm%2BtQi51iB24kkFwuKt2h%2F5%2BuAHXSQuIjTM5lAacx4NieuCRIFW8AfjFKuEQzSTYyPJKwFDRlbqJSy%2FB9dPvaMVWtBtjQUVdkfv3qPpa70jWACsmkJhttuHJbG7bvIKxXjWo5sk54Ri0Ql0MQiAWnjn%2F7m1zxWP3Ck8JWdMVsMJXqor8GOqUBfUtmTKiH5T7GuCVewtE5l2TADIjFWp%2FffmkxxtssBpfQ9%2Fb8e3p68OGC71eYD79pg%2FueZOPdJsfhylyGbPfOKro91eJjcZwLYjzDg2UQdVaYBdWLY6YLXQ08%2BA26Jj8zr5xVhVC3Pu03n2PNAhiMt8wauBwIMA9CeBY92jWMDPnPTsoK7jktPHFSLouWx2LCSjnH0axINDOns4n3Af7x%2BjKQqBnO&X-Amz-Signature=1ce875ca27464dd3d54713e219ee62d3f008e288b0be9eafff8afecabfd46a13&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD35PCBO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCKa%2FVl7cIrekac6tDzjPZmothWTN8xqC6cb9Rlm5%2BgjgIgRJfyRfGhNf9Bi%2FUbQ6HdEs1wWktoIN5RiV%2BQEp4LGmoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdiA10%2FJKmQt76x7yrcA%2Fkl%2Bz6EuF5C1xnp%2BRIqYUHsU2M%2BkqoL3oSU%2Fy5dNsTaC6qN8HwAalwgObv1kLroNHQeARUy1%2BCX%2F9QgvLPtD6mQjfDKyrMdpOsbG92NeDQk8aKZToH8g1%2FXJTJFtwBXr16v7%2BfFcToWzyW4kisRvjE7YfkOFnrvn%2FFQ%2BRxnsrCIUp%2B1%2Bv1iY3LCTFTkNST58k9aXlQkJdrBcr9OiFdlVh6tbz7IOzbnZsAf4pjEVU7IEv%2Bt%2BvHXv%2FD5gM3u7mWnaWjY9F9Vx5fmT7lHrvJ2q4bUFiTTSAQ5tcQZcBywwtOz3jdHbwhtKOCTPECYIjVLJXlWR5RLWZZrxoaMpv413tLycIiC7B8bNnETnbkxoi8zSqlAd0qCRkgEZvEmvXtzUWfN1LeuetEk2dQNxAHTxdpXUoStBywLiSKghdeI6a%2BqIVUFHPVuVLGMfr9gSydIMLReUY47I9MxSS5VqFzXm%2BtQi51iB24kkFwuKt2h%2F5%2BuAHXSQuIjTM5lAacx4NieuCRIFW8AfjFKuEQzSTYyPJKwFDRlbqJSy%2FB9dPvaMVWtBtjQUVdkfv3qPpa70jWACsmkJhttuHJbG7bvIKxXjWo5sk54Ri0Ql0MQiAWnjn%2F7m1zxWP3Ck8JWdMVsMJXqor8GOqUBfUtmTKiH5T7GuCVewtE5l2TADIjFWp%2FffmkxxtssBpfQ9%2Fb8e3p68OGC71eYD79pg%2FueZOPdJsfhylyGbPfOKro91eJjcZwLYjzDg2UQdVaYBdWLY6YLXQ08%2BA26Jj8zr5xVhVC3Pu03n2PNAhiMt8wauBwIMA9CeBY92jWMDPnPTsoK7jktPHFSLouWx2LCSjnH0axINDOns4n3Af7x%2BjKQqBnO&X-Amz-Signature=6d51637000e59d7faeaefc361d97d92adfa76895e340b0175be0f6d48e7bce58&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD35PCBO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCKa%2FVl7cIrekac6tDzjPZmothWTN8xqC6cb9Rlm5%2BgjgIgRJfyRfGhNf9Bi%2FUbQ6HdEs1wWktoIN5RiV%2BQEp4LGmoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdiA10%2FJKmQt76x7yrcA%2Fkl%2Bz6EuF5C1xnp%2BRIqYUHsU2M%2BkqoL3oSU%2Fy5dNsTaC6qN8HwAalwgObv1kLroNHQeARUy1%2BCX%2F9QgvLPtD6mQjfDKyrMdpOsbG92NeDQk8aKZToH8g1%2FXJTJFtwBXr16v7%2BfFcToWzyW4kisRvjE7YfkOFnrvn%2FFQ%2BRxnsrCIUp%2B1%2Bv1iY3LCTFTkNST58k9aXlQkJdrBcr9OiFdlVh6tbz7IOzbnZsAf4pjEVU7IEv%2Bt%2BvHXv%2FD5gM3u7mWnaWjY9F9Vx5fmT7lHrvJ2q4bUFiTTSAQ5tcQZcBywwtOz3jdHbwhtKOCTPECYIjVLJXlWR5RLWZZrxoaMpv413tLycIiC7B8bNnETnbkxoi8zSqlAd0qCRkgEZvEmvXtzUWfN1LeuetEk2dQNxAHTxdpXUoStBywLiSKghdeI6a%2BqIVUFHPVuVLGMfr9gSydIMLReUY47I9MxSS5VqFzXm%2BtQi51iB24kkFwuKt2h%2F5%2BuAHXSQuIjTM5lAacx4NieuCRIFW8AfjFKuEQzSTYyPJKwFDRlbqJSy%2FB9dPvaMVWtBtjQUVdkfv3qPpa70jWACsmkJhttuHJbG7bvIKxXjWo5sk54Ri0Ql0MQiAWnjn%2F7m1zxWP3Ck8JWdMVsMJXqor8GOqUBfUtmTKiH5T7GuCVewtE5l2TADIjFWp%2FffmkxxtssBpfQ9%2Fb8e3p68OGC71eYD79pg%2FueZOPdJsfhylyGbPfOKro91eJjcZwLYjzDg2UQdVaYBdWLY6YLXQ08%2BA26Jj8zr5xVhVC3Pu03n2PNAhiMt8wauBwIMA9CeBY92jWMDPnPTsoK7jktPHFSLouWx2LCSjnH0axINDOns4n3Af7x%2BjKQqBnO&X-Amz-Signature=5a0cdbb7e96eb2b0093fb19417d42af98a1af20cedc35c2ef63a483c2c857baa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD35PCBO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCKa%2FVl7cIrekac6tDzjPZmothWTN8xqC6cb9Rlm5%2BgjgIgRJfyRfGhNf9Bi%2FUbQ6HdEs1wWktoIN5RiV%2BQEp4LGmoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdiA10%2FJKmQt76x7yrcA%2Fkl%2Bz6EuF5C1xnp%2BRIqYUHsU2M%2BkqoL3oSU%2Fy5dNsTaC6qN8HwAalwgObv1kLroNHQeARUy1%2BCX%2F9QgvLPtD6mQjfDKyrMdpOsbG92NeDQk8aKZToH8g1%2FXJTJFtwBXr16v7%2BfFcToWzyW4kisRvjE7YfkOFnrvn%2FFQ%2BRxnsrCIUp%2B1%2Bv1iY3LCTFTkNST58k9aXlQkJdrBcr9OiFdlVh6tbz7IOzbnZsAf4pjEVU7IEv%2Bt%2BvHXv%2FD5gM3u7mWnaWjY9F9Vx5fmT7lHrvJ2q4bUFiTTSAQ5tcQZcBywwtOz3jdHbwhtKOCTPECYIjVLJXlWR5RLWZZrxoaMpv413tLycIiC7B8bNnETnbkxoi8zSqlAd0qCRkgEZvEmvXtzUWfN1LeuetEk2dQNxAHTxdpXUoStBywLiSKghdeI6a%2BqIVUFHPVuVLGMfr9gSydIMLReUY47I9MxSS5VqFzXm%2BtQi51iB24kkFwuKt2h%2F5%2BuAHXSQuIjTM5lAacx4NieuCRIFW8AfjFKuEQzSTYyPJKwFDRlbqJSy%2FB9dPvaMVWtBtjQUVdkfv3qPpa70jWACsmkJhttuHJbG7bvIKxXjWo5sk54Ri0Ql0MQiAWnjn%2F7m1zxWP3Ck8JWdMVsMJXqor8GOqUBfUtmTKiH5T7GuCVewtE5l2TADIjFWp%2FffmkxxtssBpfQ9%2Fb8e3p68OGC71eYD79pg%2FueZOPdJsfhylyGbPfOKro91eJjcZwLYjzDg2UQdVaYBdWLY6YLXQ08%2BA26Jj8zr5xVhVC3Pu03n2PNAhiMt8wauBwIMA9CeBY92jWMDPnPTsoK7jktPHFSLouWx2LCSjnH0axINDOns4n3Af7x%2BjKQqBnO&X-Amz-Signature=0a305f329114a8aafc0429180f412b2b1748b8a6d02e0e487050f9bc72953dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD35PCBO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCKa%2FVl7cIrekac6tDzjPZmothWTN8xqC6cb9Rlm5%2BgjgIgRJfyRfGhNf9Bi%2FUbQ6HdEs1wWktoIN5RiV%2BQEp4LGmoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdiA10%2FJKmQt76x7yrcA%2Fkl%2Bz6EuF5C1xnp%2BRIqYUHsU2M%2BkqoL3oSU%2Fy5dNsTaC6qN8HwAalwgObv1kLroNHQeARUy1%2BCX%2F9QgvLPtD6mQjfDKyrMdpOsbG92NeDQk8aKZToH8g1%2FXJTJFtwBXr16v7%2BfFcToWzyW4kisRvjE7YfkOFnrvn%2FFQ%2BRxnsrCIUp%2B1%2Bv1iY3LCTFTkNST58k9aXlQkJdrBcr9OiFdlVh6tbz7IOzbnZsAf4pjEVU7IEv%2Bt%2BvHXv%2FD5gM3u7mWnaWjY9F9Vx5fmT7lHrvJ2q4bUFiTTSAQ5tcQZcBywwtOz3jdHbwhtKOCTPECYIjVLJXlWR5RLWZZrxoaMpv413tLycIiC7B8bNnETnbkxoi8zSqlAd0qCRkgEZvEmvXtzUWfN1LeuetEk2dQNxAHTxdpXUoStBywLiSKghdeI6a%2BqIVUFHPVuVLGMfr9gSydIMLReUY47I9MxSS5VqFzXm%2BtQi51iB24kkFwuKt2h%2F5%2BuAHXSQuIjTM5lAacx4NieuCRIFW8AfjFKuEQzSTYyPJKwFDRlbqJSy%2FB9dPvaMVWtBtjQUVdkfv3qPpa70jWACsmkJhttuHJbG7bvIKxXjWo5sk54Ri0Ql0MQiAWnjn%2F7m1zxWP3Ck8JWdMVsMJXqor8GOqUBfUtmTKiH5T7GuCVewtE5l2TADIjFWp%2FffmkxxtssBpfQ9%2Fb8e3p68OGC71eYD79pg%2FueZOPdJsfhylyGbPfOKro91eJjcZwLYjzDg2UQdVaYBdWLY6YLXQ08%2BA26Jj8zr5xVhVC3Pu03n2PNAhiMt8wauBwIMA9CeBY92jWMDPnPTsoK7jktPHFSLouWx2LCSjnH0axINDOns4n3Af7x%2BjKQqBnO&X-Amz-Signature=76082cb07cc5efd77e3d1757a8ae4d3e044c6d75e3cfbe3aed5834003eb61cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
