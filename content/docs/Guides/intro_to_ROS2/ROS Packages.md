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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRTZFCQD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZXDP%2FnZ%2F3gw%2Fau%2B%2FozYPoz2vZZnWufpBuylLSd8kM%2BAiBX%2BL%2FKs52dX8sX49m9C0h9OX356upYC89SN%2Bn6Z7pfaCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJwcxbUVXo5TgLozBKtwD6pmzt3Cqx3mcgPxTy9gH00aRDU8wui8RhinaM36dNp0hbPtLMu3fIlq8ANLAvbnYC6d7zyqI1l5Nx09NDfm%2FRbrwitI4DNIrAIHffYqWv7FxivX1iibfOi%2BVfq%2FizdkG2t6TJrJPHRAczpp1OLvBIWbV8yTIDHWlDENfdXRnyqQAXoJ8biH%2F8%2FVdfvf8Ey7f0Hy2apsqjGoU%2BV2ta8S8Q%2FDb7GJ0TyCF9Q7oSBXIMdbcvcNb2dz89I8LCPibpMnnZWZyvEHeFKgpPHBUuKFnwNT3ae6lsb%2F6EXqiDsc3uwS8pOpoA9H%2Bavpt%2BLfTMI7jj4muyVeDXKqoYXHELlc1dEbNSIyH79uvrwiW62E5eSPafyG3qNVNq3HqDoqREbvJxgWIEzHp8xcoqvbT7zVMYyOl7UYCPsDjnkyyo%2FtWIG23YK3uBoQDKAg0xzquxyCFwX%2BrfdonwUo6GKuDZVcYjmLPNv6mQnZ0c8pf8mAZhPD5LnAAu6c%2B7psdUhddgVNC%2Ffhki9g%2Bf88%2Bowuz2y6EDyzgV8mRhElrkCAQpImwRYEX7fqN94VPno%2BJA60IBNrkFC0dHeAVGkieh1Adkxj3An5ytJK1hxdRK7hdb2TfWjfw2TvApSytSntWItwwk4%2BmvQY6pgG%2FYw3kPQOTmhXo6nXmOIC2RtIYtKWt%2BK2zTuKinkeJbU4wR%2BA5WnkK9yVzsccpp1dPSmgvX1p8%2Bko1pI0Y4%2FrklDwL2xLRwuj0apY8k0XHP%2BP2rR81QEVCVW%2BPnLwEubbO6qIvA%2BHWmGUo%2Fz4NZH0z2rJWHi8HAIqqGjhufcHBPY5p5g9yHQ%2Fk%2FglXFbXsAPr6nvCwjWilsOqeBbmGhSNCBW8ojT0E&X-Amz-Signature=80c5dd9c47414a783e21b131bdf7c988e2bbadd1c623bb1eb25189fae0e04126&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRTZFCQD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZXDP%2FnZ%2F3gw%2Fau%2B%2FozYPoz2vZZnWufpBuylLSd8kM%2BAiBX%2BL%2FKs52dX8sX49m9C0h9OX356upYC89SN%2Bn6Z7pfaCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJwcxbUVXo5TgLozBKtwD6pmzt3Cqx3mcgPxTy9gH00aRDU8wui8RhinaM36dNp0hbPtLMu3fIlq8ANLAvbnYC6d7zyqI1l5Nx09NDfm%2FRbrwitI4DNIrAIHffYqWv7FxivX1iibfOi%2BVfq%2FizdkG2t6TJrJPHRAczpp1OLvBIWbV8yTIDHWlDENfdXRnyqQAXoJ8biH%2F8%2FVdfvf8Ey7f0Hy2apsqjGoU%2BV2ta8S8Q%2FDb7GJ0TyCF9Q7oSBXIMdbcvcNb2dz89I8LCPibpMnnZWZyvEHeFKgpPHBUuKFnwNT3ae6lsb%2F6EXqiDsc3uwS8pOpoA9H%2Bavpt%2BLfTMI7jj4muyVeDXKqoYXHELlc1dEbNSIyH79uvrwiW62E5eSPafyG3qNVNq3HqDoqREbvJxgWIEzHp8xcoqvbT7zVMYyOl7UYCPsDjnkyyo%2FtWIG23YK3uBoQDKAg0xzquxyCFwX%2BrfdonwUo6GKuDZVcYjmLPNv6mQnZ0c8pf8mAZhPD5LnAAu6c%2B7psdUhddgVNC%2Ffhki9g%2Bf88%2Bowuz2y6EDyzgV8mRhElrkCAQpImwRYEX7fqN94VPno%2BJA60IBNrkFC0dHeAVGkieh1Adkxj3An5ytJK1hxdRK7hdb2TfWjfw2TvApSytSntWItwwk4%2BmvQY6pgG%2FYw3kPQOTmhXo6nXmOIC2RtIYtKWt%2BK2zTuKinkeJbU4wR%2BA5WnkK9yVzsccpp1dPSmgvX1p8%2Bko1pI0Y4%2FrklDwL2xLRwuj0apY8k0XHP%2BP2rR81QEVCVW%2BPnLwEubbO6qIvA%2BHWmGUo%2Fz4NZH0z2rJWHi8HAIqqGjhufcHBPY5p5g9yHQ%2Fk%2FglXFbXsAPr6nvCwjWilsOqeBbmGhSNCBW8ojT0E&X-Amz-Signature=372b29c7ca4c24676122c9be741398a62abf18a47b9efda1c6928af60f67648b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRTZFCQD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZXDP%2FnZ%2F3gw%2Fau%2B%2FozYPoz2vZZnWufpBuylLSd8kM%2BAiBX%2BL%2FKs52dX8sX49m9C0h9OX356upYC89SN%2Bn6Z7pfaCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJwcxbUVXo5TgLozBKtwD6pmzt3Cqx3mcgPxTy9gH00aRDU8wui8RhinaM36dNp0hbPtLMu3fIlq8ANLAvbnYC6d7zyqI1l5Nx09NDfm%2FRbrwitI4DNIrAIHffYqWv7FxivX1iibfOi%2BVfq%2FizdkG2t6TJrJPHRAczpp1OLvBIWbV8yTIDHWlDENfdXRnyqQAXoJ8biH%2F8%2FVdfvf8Ey7f0Hy2apsqjGoU%2BV2ta8S8Q%2FDb7GJ0TyCF9Q7oSBXIMdbcvcNb2dz89I8LCPibpMnnZWZyvEHeFKgpPHBUuKFnwNT3ae6lsb%2F6EXqiDsc3uwS8pOpoA9H%2Bavpt%2BLfTMI7jj4muyVeDXKqoYXHELlc1dEbNSIyH79uvrwiW62E5eSPafyG3qNVNq3HqDoqREbvJxgWIEzHp8xcoqvbT7zVMYyOl7UYCPsDjnkyyo%2FtWIG23YK3uBoQDKAg0xzquxyCFwX%2BrfdonwUo6GKuDZVcYjmLPNv6mQnZ0c8pf8mAZhPD5LnAAu6c%2B7psdUhddgVNC%2Ffhki9g%2Bf88%2Bowuz2y6EDyzgV8mRhElrkCAQpImwRYEX7fqN94VPno%2BJA60IBNrkFC0dHeAVGkieh1Adkxj3An5ytJK1hxdRK7hdb2TfWjfw2TvApSytSntWItwwk4%2BmvQY6pgG%2FYw3kPQOTmhXo6nXmOIC2RtIYtKWt%2BK2zTuKinkeJbU4wR%2BA5WnkK9yVzsccpp1dPSmgvX1p8%2Bko1pI0Y4%2FrklDwL2xLRwuj0apY8k0XHP%2BP2rR81QEVCVW%2BPnLwEubbO6qIvA%2BHWmGUo%2Fz4NZH0z2rJWHi8HAIqqGjhufcHBPY5p5g9yHQ%2Fk%2FglXFbXsAPr6nvCwjWilsOqeBbmGhSNCBW8ojT0E&X-Amz-Signature=c88ca87be351c9b3c4badd7edf70dcf940e155af15a29ae1829fee5f7ca90274&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRTZFCQD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZXDP%2FnZ%2F3gw%2Fau%2B%2FozYPoz2vZZnWufpBuylLSd8kM%2BAiBX%2BL%2FKs52dX8sX49m9C0h9OX356upYC89SN%2Bn6Z7pfaCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJwcxbUVXo5TgLozBKtwD6pmzt3Cqx3mcgPxTy9gH00aRDU8wui8RhinaM36dNp0hbPtLMu3fIlq8ANLAvbnYC6d7zyqI1l5Nx09NDfm%2FRbrwitI4DNIrAIHffYqWv7FxivX1iibfOi%2BVfq%2FizdkG2t6TJrJPHRAczpp1OLvBIWbV8yTIDHWlDENfdXRnyqQAXoJ8biH%2F8%2FVdfvf8Ey7f0Hy2apsqjGoU%2BV2ta8S8Q%2FDb7GJ0TyCF9Q7oSBXIMdbcvcNb2dz89I8LCPibpMnnZWZyvEHeFKgpPHBUuKFnwNT3ae6lsb%2F6EXqiDsc3uwS8pOpoA9H%2Bavpt%2BLfTMI7jj4muyVeDXKqoYXHELlc1dEbNSIyH79uvrwiW62E5eSPafyG3qNVNq3HqDoqREbvJxgWIEzHp8xcoqvbT7zVMYyOl7UYCPsDjnkyyo%2FtWIG23YK3uBoQDKAg0xzquxyCFwX%2BrfdonwUo6GKuDZVcYjmLPNv6mQnZ0c8pf8mAZhPD5LnAAu6c%2B7psdUhddgVNC%2Ffhki9g%2Bf88%2Bowuz2y6EDyzgV8mRhElrkCAQpImwRYEX7fqN94VPno%2BJA60IBNrkFC0dHeAVGkieh1Adkxj3An5ytJK1hxdRK7hdb2TfWjfw2TvApSytSntWItwwk4%2BmvQY6pgG%2FYw3kPQOTmhXo6nXmOIC2RtIYtKWt%2BK2zTuKinkeJbU4wR%2BA5WnkK9yVzsccpp1dPSmgvX1p8%2Bko1pI0Y4%2FrklDwL2xLRwuj0apY8k0XHP%2BP2rR81QEVCVW%2BPnLwEubbO6qIvA%2BHWmGUo%2Fz4NZH0z2rJWHi8HAIqqGjhufcHBPY5p5g9yHQ%2Fk%2FglXFbXsAPr6nvCwjWilsOqeBbmGhSNCBW8ojT0E&X-Amz-Signature=257fa92baff16c90795ecb6519c46679785afc8973ad736d7ba5144fc4bff1df&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRTZFCQD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZXDP%2FnZ%2F3gw%2Fau%2B%2FozYPoz2vZZnWufpBuylLSd8kM%2BAiBX%2BL%2FKs52dX8sX49m9C0h9OX356upYC89SN%2Bn6Z7pfaCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJwcxbUVXo5TgLozBKtwD6pmzt3Cqx3mcgPxTy9gH00aRDU8wui8RhinaM36dNp0hbPtLMu3fIlq8ANLAvbnYC6d7zyqI1l5Nx09NDfm%2FRbrwitI4DNIrAIHffYqWv7FxivX1iibfOi%2BVfq%2FizdkG2t6TJrJPHRAczpp1OLvBIWbV8yTIDHWlDENfdXRnyqQAXoJ8biH%2F8%2FVdfvf8Ey7f0Hy2apsqjGoU%2BV2ta8S8Q%2FDb7GJ0TyCF9Q7oSBXIMdbcvcNb2dz89I8LCPibpMnnZWZyvEHeFKgpPHBUuKFnwNT3ae6lsb%2F6EXqiDsc3uwS8pOpoA9H%2Bavpt%2BLfTMI7jj4muyVeDXKqoYXHELlc1dEbNSIyH79uvrwiW62E5eSPafyG3qNVNq3HqDoqREbvJxgWIEzHp8xcoqvbT7zVMYyOl7UYCPsDjnkyyo%2FtWIG23YK3uBoQDKAg0xzquxyCFwX%2BrfdonwUo6GKuDZVcYjmLPNv6mQnZ0c8pf8mAZhPD5LnAAu6c%2B7psdUhddgVNC%2Ffhki9g%2Bf88%2Bowuz2y6EDyzgV8mRhElrkCAQpImwRYEX7fqN94VPno%2BJA60IBNrkFC0dHeAVGkieh1Adkxj3An5ytJK1hxdRK7hdb2TfWjfw2TvApSytSntWItwwk4%2BmvQY6pgG%2FYw3kPQOTmhXo6nXmOIC2RtIYtKWt%2BK2zTuKinkeJbU4wR%2BA5WnkK9yVzsccpp1dPSmgvX1p8%2Bko1pI0Y4%2FrklDwL2xLRwuj0apY8k0XHP%2BP2rR81QEVCVW%2BPnLwEubbO6qIvA%2BHWmGUo%2Fz4NZH0z2rJWHi8HAIqqGjhufcHBPY5p5g9yHQ%2Fk%2FglXFbXsAPr6nvCwjWilsOqeBbmGhSNCBW8ojT0E&X-Amz-Signature=668ed019e4bb70f84e7ad6818010740e53a7a026d17043aa4014dd97d6ac0498&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRTZFCQD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZXDP%2FnZ%2F3gw%2Fau%2B%2FozYPoz2vZZnWufpBuylLSd8kM%2BAiBX%2BL%2FKs52dX8sX49m9C0h9OX356upYC89SN%2Bn6Z7pfaCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJwcxbUVXo5TgLozBKtwD6pmzt3Cqx3mcgPxTy9gH00aRDU8wui8RhinaM36dNp0hbPtLMu3fIlq8ANLAvbnYC6d7zyqI1l5Nx09NDfm%2FRbrwitI4DNIrAIHffYqWv7FxivX1iibfOi%2BVfq%2FizdkG2t6TJrJPHRAczpp1OLvBIWbV8yTIDHWlDENfdXRnyqQAXoJ8biH%2F8%2FVdfvf8Ey7f0Hy2apsqjGoU%2BV2ta8S8Q%2FDb7GJ0TyCF9Q7oSBXIMdbcvcNb2dz89I8LCPibpMnnZWZyvEHeFKgpPHBUuKFnwNT3ae6lsb%2F6EXqiDsc3uwS8pOpoA9H%2Bavpt%2BLfTMI7jj4muyVeDXKqoYXHELlc1dEbNSIyH79uvrwiW62E5eSPafyG3qNVNq3HqDoqREbvJxgWIEzHp8xcoqvbT7zVMYyOl7UYCPsDjnkyyo%2FtWIG23YK3uBoQDKAg0xzquxyCFwX%2BrfdonwUo6GKuDZVcYjmLPNv6mQnZ0c8pf8mAZhPD5LnAAu6c%2B7psdUhddgVNC%2Ffhki9g%2Bf88%2Bowuz2y6EDyzgV8mRhElrkCAQpImwRYEX7fqN94VPno%2BJA60IBNrkFC0dHeAVGkieh1Adkxj3An5ytJK1hxdRK7hdb2TfWjfw2TvApSytSntWItwwk4%2BmvQY6pgG%2FYw3kPQOTmhXo6nXmOIC2RtIYtKWt%2BK2zTuKinkeJbU4wR%2BA5WnkK9yVzsccpp1dPSmgvX1p8%2Bko1pI0Y4%2FrklDwL2xLRwuj0apY8k0XHP%2BP2rR81QEVCVW%2BPnLwEubbO6qIvA%2BHWmGUo%2Fz4NZH0z2rJWHi8HAIqqGjhufcHBPY5p5g9yHQ%2Fk%2FglXFbXsAPr6nvCwjWilsOqeBbmGhSNCBW8ojT0E&X-Amz-Signature=d713132c1dd4bd4e5fa8030b449ad01e8aef5b1faa43518ffd51ad8a745f3c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRTZFCQD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZXDP%2FnZ%2F3gw%2Fau%2B%2FozYPoz2vZZnWufpBuylLSd8kM%2BAiBX%2BL%2FKs52dX8sX49m9C0h9OX356upYC89SN%2Bn6Z7pfaCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJwcxbUVXo5TgLozBKtwD6pmzt3Cqx3mcgPxTy9gH00aRDU8wui8RhinaM36dNp0hbPtLMu3fIlq8ANLAvbnYC6d7zyqI1l5Nx09NDfm%2FRbrwitI4DNIrAIHffYqWv7FxivX1iibfOi%2BVfq%2FizdkG2t6TJrJPHRAczpp1OLvBIWbV8yTIDHWlDENfdXRnyqQAXoJ8biH%2F8%2FVdfvf8Ey7f0Hy2apsqjGoU%2BV2ta8S8Q%2FDb7GJ0TyCF9Q7oSBXIMdbcvcNb2dz89I8LCPibpMnnZWZyvEHeFKgpPHBUuKFnwNT3ae6lsb%2F6EXqiDsc3uwS8pOpoA9H%2Bavpt%2BLfTMI7jj4muyVeDXKqoYXHELlc1dEbNSIyH79uvrwiW62E5eSPafyG3qNVNq3HqDoqREbvJxgWIEzHp8xcoqvbT7zVMYyOl7UYCPsDjnkyyo%2FtWIG23YK3uBoQDKAg0xzquxyCFwX%2BrfdonwUo6GKuDZVcYjmLPNv6mQnZ0c8pf8mAZhPD5LnAAu6c%2B7psdUhddgVNC%2Ffhki9g%2Bf88%2Bowuz2y6EDyzgV8mRhElrkCAQpImwRYEX7fqN94VPno%2BJA60IBNrkFC0dHeAVGkieh1Adkxj3An5ytJK1hxdRK7hdb2TfWjfw2TvApSytSntWItwwk4%2BmvQY6pgG%2FYw3kPQOTmhXo6nXmOIC2RtIYtKWt%2BK2zTuKinkeJbU4wR%2BA5WnkK9yVzsccpp1dPSmgvX1p8%2Bko1pI0Y4%2FrklDwL2xLRwuj0apY8k0XHP%2BP2rR81QEVCVW%2BPnLwEubbO6qIvA%2BHWmGUo%2Fz4NZH0z2rJWHi8HAIqqGjhufcHBPY5p5g9yHQ%2Fk%2FglXFbXsAPr6nvCwjWilsOqeBbmGhSNCBW8ojT0E&X-Amz-Signature=584a5e515a21b1cd9e9db1f1a315d83fa1f6c6e25c14c4497fb6d08c1fac2d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
