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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JOZT7M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC3rp9LnkJ7uv2N9ZJ3jcpxUwKLkMH5GlDLTNbuwrJAIhAJk0i68VKfJp1hfBcq8p8UPEE%2B8tVQnt13SIJcBTXmJOKv8DCCoQABoMNjM3NDIzMTgzODA1Igw77%2F15yIIGnwsMqG0q3APhEHMLQGiH%2F6hkQV2sQR2XmZqH42uHLNyrF%2B9PWnGaijwJ%2FdNuUUe0L6tnifQknM1XbuS7KOS%2BqZMk838thvYxs9vicOgGmTseitcWs9xJvP4iencbJtSobXhA0CZbhoK8K9U414xHog4YHzEEtZGOvhBcgF9aaFCMwNlfzNV9RpqBSgUKJnq2Z5hE42TF11FQtstYszVWXgYLxA8%2BjP2MLlrmCUOkWhDswPOoD6cXxLJrxXinEv0hYmpuCYHxJyP%2F3SnHlKlYfR%2FebA3Au2j0%2FbvMwbqrNmnREDi3o8zYgbR46wD5MjIQUdILRIAUnRttHFk7l461h3py%2FSCjbD7%2B5sHQTqSElYg3GMG5Jpm6UHRhAHG91Z5O7%2Fv5CJYDL5oZJBbiF8Cb2BBQiVW2I6uBAY118WoYIwjcbey7VdGlSJ44hMgV3gWIBTYppS28Vdy2mo6Bgn7R%2FSH7wgObvOGv4%2BCErR5ZqiCVXiTNhWy1SaPp2jbDhKEiNarboKBSTjWTaOvm5o7mGEi%2FMB%2BktSt%2BnawA9LxHKefvTIMOWg0L%2FIg3lxP9MrEB5VsrcLve6E4kBz9YgADfH0tTa2k0SvbCJG0J38a0wTx9v%2F%2B2jTQtfP4So%2FK09gwaM75CQDC2xbzEBjqkASA2btwZqKS4cPsKwaMyVWwkATcgqR2UtIxHNCR0aHrPwjEhnFTzMBEJzifyzEJS8NtN%2BgEE5xqDsrNxQ2oYAUh%2F3n%2BqPmbs6LDfEBMqBKz5OQ87js%2B4TARpcMHzdkfQetVveAduzSUVFTJ%2BOmuGF5wVdQjij56F%2BAF%2B9orEmSUMr2%2FKu8vj2XaLLYx98b4DW6Su3eq4r%2Bi5jm49iQT1juxKHjAH&X-Amz-Signature=fdd63ce807ac26f2f75b8ae4912a369bdb02c2822ad31ca115b0a464ebfb8967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JOZT7M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC3rp9LnkJ7uv2N9ZJ3jcpxUwKLkMH5GlDLTNbuwrJAIhAJk0i68VKfJp1hfBcq8p8UPEE%2B8tVQnt13SIJcBTXmJOKv8DCCoQABoMNjM3NDIzMTgzODA1Igw77%2F15yIIGnwsMqG0q3APhEHMLQGiH%2F6hkQV2sQR2XmZqH42uHLNyrF%2B9PWnGaijwJ%2FdNuUUe0L6tnifQknM1XbuS7KOS%2BqZMk838thvYxs9vicOgGmTseitcWs9xJvP4iencbJtSobXhA0CZbhoK8K9U414xHog4YHzEEtZGOvhBcgF9aaFCMwNlfzNV9RpqBSgUKJnq2Z5hE42TF11FQtstYszVWXgYLxA8%2BjP2MLlrmCUOkWhDswPOoD6cXxLJrxXinEv0hYmpuCYHxJyP%2F3SnHlKlYfR%2FebA3Au2j0%2FbvMwbqrNmnREDi3o8zYgbR46wD5MjIQUdILRIAUnRttHFk7l461h3py%2FSCjbD7%2B5sHQTqSElYg3GMG5Jpm6UHRhAHG91Z5O7%2Fv5CJYDL5oZJBbiF8Cb2BBQiVW2I6uBAY118WoYIwjcbey7VdGlSJ44hMgV3gWIBTYppS28Vdy2mo6Bgn7R%2FSH7wgObvOGv4%2BCErR5ZqiCVXiTNhWy1SaPp2jbDhKEiNarboKBSTjWTaOvm5o7mGEi%2FMB%2BktSt%2BnawA9LxHKefvTIMOWg0L%2FIg3lxP9MrEB5VsrcLve6E4kBz9YgADfH0tTa2k0SvbCJG0J38a0wTx9v%2F%2B2jTQtfP4So%2FK09gwaM75CQDC2xbzEBjqkASA2btwZqKS4cPsKwaMyVWwkATcgqR2UtIxHNCR0aHrPwjEhnFTzMBEJzifyzEJS8NtN%2BgEE5xqDsrNxQ2oYAUh%2F3n%2BqPmbs6LDfEBMqBKz5OQ87js%2B4TARpcMHzdkfQetVveAduzSUVFTJ%2BOmuGF5wVdQjij56F%2BAF%2B9orEmSUMr2%2FKu8vj2XaLLYx98b4DW6Su3eq4r%2Bi5jm49iQT1juxKHjAH&X-Amz-Signature=915a5f87741a8ce4403773242ec05cbc1fb4b50e47b1861a71410a1d2fe70f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JOZT7M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC3rp9LnkJ7uv2N9ZJ3jcpxUwKLkMH5GlDLTNbuwrJAIhAJk0i68VKfJp1hfBcq8p8UPEE%2B8tVQnt13SIJcBTXmJOKv8DCCoQABoMNjM3NDIzMTgzODA1Igw77%2F15yIIGnwsMqG0q3APhEHMLQGiH%2F6hkQV2sQR2XmZqH42uHLNyrF%2B9PWnGaijwJ%2FdNuUUe0L6tnifQknM1XbuS7KOS%2BqZMk838thvYxs9vicOgGmTseitcWs9xJvP4iencbJtSobXhA0CZbhoK8K9U414xHog4YHzEEtZGOvhBcgF9aaFCMwNlfzNV9RpqBSgUKJnq2Z5hE42TF11FQtstYszVWXgYLxA8%2BjP2MLlrmCUOkWhDswPOoD6cXxLJrxXinEv0hYmpuCYHxJyP%2F3SnHlKlYfR%2FebA3Au2j0%2FbvMwbqrNmnREDi3o8zYgbR46wD5MjIQUdILRIAUnRttHFk7l461h3py%2FSCjbD7%2B5sHQTqSElYg3GMG5Jpm6UHRhAHG91Z5O7%2Fv5CJYDL5oZJBbiF8Cb2BBQiVW2I6uBAY118WoYIwjcbey7VdGlSJ44hMgV3gWIBTYppS28Vdy2mo6Bgn7R%2FSH7wgObvOGv4%2BCErR5ZqiCVXiTNhWy1SaPp2jbDhKEiNarboKBSTjWTaOvm5o7mGEi%2FMB%2BktSt%2BnawA9LxHKefvTIMOWg0L%2FIg3lxP9MrEB5VsrcLve6E4kBz9YgADfH0tTa2k0SvbCJG0J38a0wTx9v%2F%2B2jTQtfP4So%2FK09gwaM75CQDC2xbzEBjqkASA2btwZqKS4cPsKwaMyVWwkATcgqR2UtIxHNCR0aHrPwjEhnFTzMBEJzifyzEJS8NtN%2BgEE5xqDsrNxQ2oYAUh%2F3n%2BqPmbs6LDfEBMqBKz5OQ87js%2B4TARpcMHzdkfQetVveAduzSUVFTJ%2BOmuGF5wVdQjij56F%2BAF%2B9orEmSUMr2%2FKu8vj2XaLLYx98b4DW6Su3eq4r%2Bi5jm49iQT1juxKHjAH&X-Amz-Signature=2eac876b0565bac68f64513283ac9c871fd644b5e7b65f53ad9f9fdef77c105b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JOZT7M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC3rp9LnkJ7uv2N9ZJ3jcpxUwKLkMH5GlDLTNbuwrJAIhAJk0i68VKfJp1hfBcq8p8UPEE%2B8tVQnt13SIJcBTXmJOKv8DCCoQABoMNjM3NDIzMTgzODA1Igw77%2F15yIIGnwsMqG0q3APhEHMLQGiH%2F6hkQV2sQR2XmZqH42uHLNyrF%2B9PWnGaijwJ%2FdNuUUe0L6tnifQknM1XbuS7KOS%2BqZMk838thvYxs9vicOgGmTseitcWs9xJvP4iencbJtSobXhA0CZbhoK8K9U414xHog4YHzEEtZGOvhBcgF9aaFCMwNlfzNV9RpqBSgUKJnq2Z5hE42TF11FQtstYszVWXgYLxA8%2BjP2MLlrmCUOkWhDswPOoD6cXxLJrxXinEv0hYmpuCYHxJyP%2F3SnHlKlYfR%2FebA3Au2j0%2FbvMwbqrNmnREDi3o8zYgbR46wD5MjIQUdILRIAUnRttHFk7l461h3py%2FSCjbD7%2B5sHQTqSElYg3GMG5Jpm6UHRhAHG91Z5O7%2Fv5CJYDL5oZJBbiF8Cb2BBQiVW2I6uBAY118WoYIwjcbey7VdGlSJ44hMgV3gWIBTYppS28Vdy2mo6Bgn7R%2FSH7wgObvOGv4%2BCErR5ZqiCVXiTNhWy1SaPp2jbDhKEiNarboKBSTjWTaOvm5o7mGEi%2FMB%2BktSt%2BnawA9LxHKefvTIMOWg0L%2FIg3lxP9MrEB5VsrcLve6E4kBz9YgADfH0tTa2k0SvbCJG0J38a0wTx9v%2F%2B2jTQtfP4So%2FK09gwaM75CQDC2xbzEBjqkASA2btwZqKS4cPsKwaMyVWwkATcgqR2UtIxHNCR0aHrPwjEhnFTzMBEJzifyzEJS8NtN%2BgEE5xqDsrNxQ2oYAUh%2F3n%2BqPmbs6LDfEBMqBKz5OQ87js%2B4TARpcMHzdkfQetVveAduzSUVFTJ%2BOmuGF5wVdQjij56F%2BAF%2B9orEmSUMr2%2FKu8vj2XaLLYx98b4DW6Su3eq4r%2Bi5jm49iQT1juxKHjAH&X-Amz-Signature=dcda1b7fa3bbd249d2204060ea28172db8ec041d2d3092d101cf102360e3bb42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JOZT7M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC3rp9LnkJ7uv2N9ZJ3jcpxUwKLkMH5GlDLTNbuwrJAIhAJk0i68VKfJp1hfBcq8p8UPEE%2B8tVQnt13SIJcBTXmJOKv8DCCoQABoMNjM3NDIzMTgzODA1Igw77%2F15yIIGnwsMqG0q3APhEHMLQGiH%2F6hkQV2sQR2XmZqH42uHLNyrF%2B9PWnGaijwJ%2FdNuUUe0L6tnifQknM1XbuS7KOS%2BqZMk838thvYxs9vicOgGmTseitcWs9xJvP4iencbJtSobXhA0CZbhoK8K9U414xHog4YHzEEtZGOvhBcgF9aaFCMwNlfzNV9RpqBSgUKJnq2Z5hE42TF11FQtstYszVWXgYLxA8%2BjP2MLlrmCUOkWhDswPOoD6cXxLJrxXinEv0hYmpuCYHxJyP%2F3SnHlKlYfR%2FebA3Au2j0%2FbvMwbqrNmnREDi3o8zYgbR46wD5MjIQUdILRIAUnRttHFk7l461h3py%2FSCjbD7%2B5sHQTqSElYg3GMG5Jpm6UHRhAHG91Z5O7%2Fv5CJYDL5oZJBbiF8Cb2BBQiVW2I6uBAY118WoYIwjcbey7VdGlSJ44hMgV3gWIBTYppS28Vdy2mo6Bgn7R%2FSH7wgObvOGv4%2BCErR5ZqiCVXiTNhWy1SaPp2jbDhKEiNarboKBSTjWTaOvm5o7mGEi%2FMB%2BktSt%2BnawA9LxHKefvTIMOWg0L%2FIg3lxP9MrEB5VsrcLve6E4kBz9YgADfH0tTa2k0SvbCJG0J38a0wTx9v%2F%2B2jTQtfP4So%2FK09gwaM75CQDC2xbzEBjqkASA2btwZqKS4cPsKwaMyVWwkATcgqR2UtIxHNCR0aHrPwjEhnFTzMBEJzifyzEJS8NtN%2BgEE5xqDsrNxQ2oYAUh%2F3n%2BqPmbs6LDfEBMqBKz5OQ87js%2B4TARpcMHzdkfQetVveAduzSUVFTJ%2BOmuGF5wVdQjij56F%2BAF%2B9orEmSUMr2%2FKu8vj2XaLLYx98b4DW6Su3eq4r%2Bi5jm49iQT1juxKHjAH&X-Amz-Signature=c7eff0fde27e3696b7389c07c32b98b90c29e5e6323c9a9cb504b61a5a52dfee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JOZT7M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC3rp9LnkJ7uv2N9ZJ3jcpxUwKLkMH5GlDLTNbuwrJAIhAJk0i68VKfJp1hfBcq8p8UPEE%2B8tVQnt13SIJcBTXmJOKv8DCCoQABoMNjM3NDIzMTgzODA1Igw77%2F15yIIGnwsMqG0q3APhEHMLQGiH%2F6hkQV2sQR2XmZqH42uHLNyrF%2B9PWnGaijwJ%2FdNuUUe0L6tnifQknM1XbuS7KOS%2BqZMk838thvYxs9vicOgGmTseitcWs9xJvP4iencbJtSobXhA0CZbhoK8K9U414xHog4YHzEEtZGOvhBcgF9aaFCMwNlfzNV9RpqBSgUKJnq2Z5hE42TF11FQtstYszVWXgYLxA8%2BjP2MLlrmCUOkWhDswPOoD6cXxLJrxXinEv0hYmpuCYHxJyP%2F3SnHlKlYfR%2FebA3Au2j0%2FbvMwbqrNmnREDi3o8zYgbR46wD5MjIQUdILRIAUnRttHFk7l461h3py%2FSCjbD7%2B5sHQTqSElYg3GMG5Jpm6UHRhAHG91Z5O7%2Fv5CJYDL5oZJBbiF8Cb2BBQiVW2I6uBAY118WoYIwjcbey7VdGlSJ44hMgV3gWIBTYppS28Vdy2mo6Bgn7R%2FSH7wgObvOGv4%2BCErR5ZqiCVXiTNhWy1SaPp2jbDhKEiNarboKBSTjWTaOvm5o7mGEi%2FMB%2BktSt%2BnawA9LxHKefvTIMOWg0L%2FIg3lxP9MrEB5VsrcLve6E4kBz9YgADfH0tTa2k0SvbCJG0J38a0wTx9v%2F%2B2jTQtfP4So%2FK09gwaM75CQDC2xbzEBjqkASA2btwZqKS4cPsKwaMyVWwkATcgqR2UtIxHNCR0aHrPwjEhnFTzMBEJzifyzEJS8NtN%2BgEE5xqDsrNxQ2oYAUh%2F3n%2BqPmbs6LDfEBMqBKz5OQ87js%2B4TARpcMHzdkfQetVveAduzSUVFTJ%2BOmuGF5wVdQjij56F%2BAF%2B9orEmSUMr2%2FKu8vj2XaLLYx98b4DW6Su3eq4r%2Bi5jm49iQT1juxKHjAH&X-Amz-Signature=581fc88bf82d831f277c963c10151a3064c854b274d84ae6044d14656484345c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JOZT7M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC3rp9LnkJ7uv2N9ZJ3jcpxUwKLkMH5GlDLTNbuwrJAIhAJk0i68VKfJp1hfBcq8p8UPEE%2B8tVQnt13SIJcBTXmJOKv8DCCoQABoMNjM3NDIzMTgzODA1Igw77%2F15yIIGnwsMqG0q3APhEHMLQGiH%2F6hkQV2sQR2XmZqH42uHLNyrF%2B9PWnGaijwJ%2FdNuUUe0L6tnifQknM1XbuS7KOS%2BqZMk838thvYxs9vicOgGmTseitcWs9xJvP4iencbJtSobXhA0CZbhoK8K9U414xHog4YHzEEtZGOvhBcgF9aaFCMwNlfzNV9RpqBSgUKJnq2Z5hE42TF11FQtstYszVWXgYLxA8%2BjP2MLlrmCUOkWhDswPOoD6cXxLJrxXinEv0hYmpuCYHxJyP%2F3SnHlKlYfR%2FebA3Au2j0%2FbvMwbqrNmnREDi3o8zYgbR46wD5MjIQUdILRIAUnRttHFk7l461h3py%2FSCjbD7%2B5sHQTqSElYg3GMG5Jpm6UHRhAHG91Z5O7%2Fv5CJYDL5oZJBbiF8Cb2BBQiVW2I6uBAY118WoYIwjcbey7VdGlSJ44hMgV3gWIBTYppS28Vdy2mo6Bgn7R%2FSH7wgObvOGv4%2BCErR5ZqiCVXiTNhWy1SaPp2jbDhKEiNarboKBSTjWTaOvm5o7mGEi%2FMB%2BktSt%2BnawA9LxHKefvTIMOWg0L%2FIg3lxP9MrEB5VsrcLve6E4kBz9YgADfH0tTa2k0SvbCJG0J38a0wTx9v%2F%2B2jTQtfP4So%2FK09gwaM75CQDC2xbzEBjqkASA2btwZqKS4cPsKwaMyVWwkATcgqR2UtIxHNCR0aHrPwjEhnFTzMBEJzifyzEJS8NtN%2BgEE5xqDsrNxQ2oYAUh%2F3n%2BqPmbs6LDfEBMqBKz5OQ87js%2B4TARpcMHzdkfQetVveAduzSUVFTJ%2BOmuGF5wVdQjij56F%2BAF%2B9orEmSUMr2%2FKu8vj2XaLLYx98b4DW6Su3eq4r%2Bi5jm49iQT1juxKHjAH&X-Amz-Signature=faf7fda086a845eb20f2585fd698e59cb6c0883782cf1546870c8e0d81bbf6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
