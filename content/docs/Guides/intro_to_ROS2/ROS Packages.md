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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3NEZC4Y%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEiIjaArdpbicC3bhM3vBBCmeSmJLmAbysiMrlfNKk6TAiEAo652lWwZEpj6GVgs7ISWHbUpkRKEOT%2BMUPR2jhauAr8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMzeOan%2BC2ORmlbv0CrcA6cgnxT4Z4TxZNkaujCwGYMG6l%2F09oU2MyY8m1qTk%2Fa9sU6KV%2BDYRBnXAJ4RCt5Al%2FKsKU2dgyQ74H%2FF%2B5dgUwyXr7uuYf%2FR4NJ6Lz%2BzImZuyy51W%2BWXYSWCHKmmPFQ%2BvLdCs1XkUtoU8QiVaoS6QYhZMmcfDOq4jgAqcYPqZs1BZm%2FQ3LRthbI%2FxO7nnyG7e9FS8yGgk%2FmIIkjJxU2QKXRZwdMMx9xM25mNKkp%2FE0V9Kvwm7m6kaSQF0b0Qyq0AQBMGQNmLIgX0zayit6HNmSzfHKMdRH%2FB4Yevu2EiHajsXz8eCLeHWzDAfa1fYuF5ILumw1zl4TwHkUi0Zq5ktlMYLFOPI70MQIzR%2B%2BRs0AJDH0Fl8CtpvpToDGmu%2B67e1sHVChhXvnyVSPNGNT%2BpwISvR6BVqoD5%2BeGV9HAn4W4ytJRHW9C1FRvR0QhJHCA4GBnAJIt9L6H4VSlEJwX7%2BJHTDwbpKPmPd9k271cPff1xVGr2Pu37yr5kVHcFom3w2mEJLjXxAu182idKRgcQiymznz7mXp8b%2BNXkpn8Q7YzvqWUodUGkBdueYFqYH8pZzXKp8DEPUsHugdHuA%2FRbi5cCIJTK6a2cP%2Bt6%2BDvNcBTVYfXaRIo5dZfvEWDAMNfBrcMGOqUBP2%2Buyga7O3OqwyvyAzZ5nJODTNYt%2FCP1vWbJO7ASw3fjS21oyM%2FhP5Jq2fc1jqLRk2M86f4m38%2FN1rzBOHgh3OLiL%2F59CVdBUfigK90ugIYBxqOPiyLFK367hdxfANTy4BWvMC862XPEppaViHveDKGX35heeBj1LfAxk6Wq3I8DDr1HDccqUdX3O92JfqL%2BvclHh0a4jq6wNi7rftdYKHdIi%2Be6&X-Amz-Signature=84742bc58247dedbb6eab05593bdbe3790c12e2a403f509b42de4d1aa4e9a09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3NEZC4Y%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEiIjaArdpbicC3bhM3vBBCmeSmJLmAbysiMrlfNKk6TAiEAo652lWwZEpj6GVgs7ISWHbUpkRKEOT%2BMUPR2jhauAr8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMzeOan%2BC2ORmlbv0CrcA6cgnxT4Z4TxZNkaujCwGYMG6l%2F09oU2MyY8m1qTk%2Fa9sU6KV%2BDYRBnXAJ4RCt5Al%2FKsKU2dgyQ74H%2FF%2B5dgUwyXr7uuYf%2FR4NJ6Lz%2BzImZuyy51W%2BWXYSWCHKmmPFQ%2BvLdCs1XkUtoU8QiVaoS6QYhZMmcfDOq4jgAqcYPqZs1BZm%2FQ3LRthbI%2FxO7nnyG7e9FS8yGgk%2FmIIkjJxU2QKXRZwdMMx9xM25mNKkp%2FE0V9Kvwm7m6kaSQF0b0Qyq0AQBMGQNmLIgX0zayit6HNmSzfHKMdRH%2FB4Yevu2EiHajsXz8eCLeHWzDAfa1fYuF5ILumw1zl4TwHkUi0Zq5ktlMYLFOPI70MQIzR%2B%2BRs0AJDH0Fl8CtpvpToDGmu%2B67e1sHVChhXvnyVSPNGNT%2BpwISvR6BVqoD5%2BeGV9HAn4W4ytJRHW9C1FRvR0QhJHCA4GBnAJIt9L6H4VSlEJwX7%2BJHTDwbpKPmPd9k271cPff1xVGr2Pu37yr5kVHcFom3w2mEJLjXxAu182idKRgcQiymznz7mXp8b%2BNXkpn8Q7YzvqWUodUGkBdueYFqYH8pZzXKp8DEPUsHugdHuA%2FRbi5cCIJTK6a2cP%2Bt6%2BDvNcBTVYfXaRIo5dZfvEWDAMNfBrcMGOqUBP2%2Buyga7O3OqwyvyAzZ5nJODTNYt%2FCP1vWbJO7ASw3fjS21oyM%2FhP5Jq2fc1jqLRk2M86f4m38%2FN1rzBOHgh3OLiL%2F59CVdBUfigK90ugIYBxqOPiyLFK367hdxfANTy4BWvMC862XPEppaViHveDKGX35heeBj1LfAxk6Wq3I8DDr1HDccqUdX3O92JfqL%2BvclHh0a4jq6wNi7rftdYKHdIi%2Be6&X-Amz-Signature=b507d80a4e901777a150119160ac06b01ad2300ed227d9b71cd867ada967e7a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3NEZC4Y%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEiIjaArdpbicC3bhM3vBBCmeSmJLmAbysiMrlfNKk6TAiEAo652lWwZEpj6GVgs7ISWHbUpkRKEOT%2BMUPR2jhauAr8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMzeOan%2BC2ORmlbv0CrcA6cgnxT4Z4TxZNkaujCwGYMG6l%2F09oU2MyY8m1qTk%2Fa9sU6KV%2BDYRBnXAJ4RCt5Al%2FKsKU2dgyQ74H%2FF%2B5dgUwyXr7uuYf%2FR4NJ6Lz%2BzImZuyy51W%2BWXYSWCHKmmPFQ%2BvLdCs1XkUtoU8QiVaoS6QYhZMmcfDOq4jgAqcYPqZs1BZm%2FQ3LRthbI%2FxO7nnyG7e9FS8yGgk%2FmIIkjJxU2QKXRZwdMMx9xM25mNKkp%2FE0V9Kvwm7m6kaSQF0b0Qyq0AQBMGQNmLIgX0zayit6HNmSzfHKMdRH%2FB4Yevu2EiHajsXz8eCLeHWzDAfa1fYuF5ILumw1zl4TwHkUi0Zq5ktlMYLFOPI70MQIzR%2B%2BRs0AJDH0Fl8CtpvpToDGmu%2B67e1sHVChhXvnyVSPNGNT%2BpwISvR6BVqoD5%2BeGV9HAn4W4ytJRHW9C1FRvR0QhJHCA4GBnAJIt9L6H4VSlEJwX7%2BJHTDwbpKPmPd9k271cPff1xVGr2Pu37yr5kVHcFom3w2mEJLjXxAu182idKRgcQiymznz7mXp8b%2BNXkpn8Q7YzvqWUodUGkBdueYFqYH8pZzXKp8DEPUsHugdHuA%2FRbi5cCIJTK6a2cP%2Bt6%2BDvNcBTVYfXaRIo5dZfvEWDAMNfBrcMGOqUBP2%2Buyga7O3OqwyvyAzZ5nJODTNYt%2FCP1vWbJO7ASw3fjS21oyM%2FhP5Jq2fc1jqLRk2M86f4m38%2FN1rzBOHgh3OLiL%2F59CVdBUfigK90ugIYBxqOPiyLFK367hdxfANTy4BWvMC862XPEppaViHveDKGX35heeBj1LfAxk6Wq3I8DDr1HDccqUdX3O92JfqL%2BvclHh0a4jq6wNi7rftdYKHdIi%2Be6&X-Amz-Signature=7c9c3d1071101f50c11713dd787ebb5f3452c1810eb8c672ed5b44c6b2adab34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3NEZC4Y%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEiIjaArdpbicC3bhM3vBBCmeSmJLmAbysiMrlfNKk6TAiEAo652lWwZEpj6GVgs7ISWHbUpkRKEOT%2BMUPR2jhauAr8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMzeOan%2BC2ORmlbv0CrcA6cgnxT4Z4TxZNkaujCwGYMG6l%2F09oU2MyY8m1qTk%2Fa9sU6KV%2BDYRBnXAJ4RCt5Al%2FKsKU2dgyQ74H%2FF%2B5dgUwyXr7uuYf%2FR4NJ6Lz%2BzImZuyy51W%2BWXYSWCHKmmPFQ%2BvLdCs1XkUtoU8QiVaoS6QYhZMmcfDOq4jgAqcYPqZs1BZm%2FQ3LRthbI%2FxO7nnyG7e9FS8yGgk%2FmIIkjJxU2QKXRZwdMMx9xM25mNKkp%2FE0V9Kvwm7m6kaSQF0b0Qyq0AQBMGQNmLIgX0zayit6HNmSzfHKMdRH%2FB4Yevu2EiHajsXz8eCLeHWzDAfa1fYuF5ILumw1zl4TwHkUi0Zq5ktlMYLFOPI70MQIzR%2B%2BRs0AJDH0Fl8CtpvpToDGmu%2B67e1sHVChhXvnyVSPNGNT%2BpwISvR6BVqoD5%2BeGV9HAn4W4ytJRHW9C1FRvR0QhJHCA4GBnAJIt9L6H4VSlEJwX7%2BJHTDwbpKPmPd9k271cPff1xVGr2Pu37yr5kVHcFom3w2mEJLjXxAu182idKRgcQiymznz7mXp8b%2BNXkpn8Q7YzvqWUodUGkBdueYFqYH8pZzXKp8DEPUsHugdHuA%2FRbi5cCIJTK6a2cP%2Bt6%2BDvNcBTVYfXaRIo5dZfvEWDAMNfBrcMGOqUBP2%2Buyga7O3OqwyvyAzZ5nJODTNYt%2FCP1vWbJO7ASw3fjS21oyM%2FhP5Jq2fc1jqLRk2M86f4m38%2FN1rzBOHgh3OLiL%2F59CVdBUfigK90ugIYBxqOPiyLFK367hdxfANTy4BWvMC862XPEppaViHveDKGX35heeBj1LfAxk6Wq3I8DDr1HDccqUdX3O92JfqL%2BvclHh0a4jq6wNi7rftdYKHdIi%2Be6&X-Amz-Signature=29d6b230a9c30888db1cfd673001958faf8d8c12aace5b9d81d37be79e55b59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3NEZC4Y%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEiIjaArdpbicC3bhM3vBBCmeSmJLmAbysiMrlfNKk6TAiEAo652lWwZEpj6GVgs7ISWHbUpkRKEOT%2BMUPR2jhauAr8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMzeOan%2BC2ORmlbv0CrcA6cgnxT4Z4TxZNkaujCwGYMG6l%2F09oU2MyY8m1qTk%2Fa9sU6KV%2BDYRBnXAJ4RCt5Al%2FKsKU2dgyQ74H%2FF%2B5dgUwyXr7uuYf%2FR4NJ6Lz%2BzImZuyy51W%2BWXYSWCHKmmPFQ%2BvLdCs1XkUtoU8QiVaoS6QYhZMmcfDOq4jgAqcYPqZs1BZm%2FQ3LRthbI%2FxO7nnyG7e9FS8yGgk%2FmIIkjJxU2QKXRZwdMMx9xM25mNKkp%2FE0V9Kvwm7m6kaSQF0b0Qyq0AQBMGQNmLIgX0zayit6HNmSzfHKMdRH%2FB4Yevu2EiHajsXz8eCLeHWzDAfa1fYuF5ILumw1zl4TwHkUi0Zq5ktlMYLFOPI70MQIzR%2B%2BRs0AJDH0Fl8CtpvpToDGmu%2B67e1sHVChhXvnyVSPNGNT%2BpwISvR6BVqoD5%2BeGV9HAn4W4ytJRHW9C1FRvR0QhJHCA4GBnAJIt9L6H4VSlEJwX7%2BJHTDwbpKPmPd9k271cPff1xVGr2Pu37yr5kVHcFom3w2mEJLjXxAu182idKRgcQiymznz7mXp8b%2BNXkpn8Q7YzvqWUodUGkBdueYFqYH8pZzXKp8DEPUsHugdHuA%2FRbi5cCIJTK6a2cP%2Bt6%2BDvNcBTVYfXaRIo5dZfvEWDAMNfBrcMGOqUBP2%2Buyga7O3OqwyvyAzZ5nJODTNYt%2FCP1vWbJO7ASw3fjS21oyM%2FhP5Jq2fc1jqLRk2M86f4m38%2FN1rzBOHgh3OLiL%2F59CVdBUfigK90ugIYBxqOPiyLFK367hdxfANTy4BWvMC862XPEppaViHveDKGX35heeBj1LfAxk6Wq3I8DDr1HDccqUdX3O92JfqL%2BvclHh0a4jq6wNi7rftdYKHdIi%2Be6&X-Amz-Signature=7ce13beecccc8e25023de6b0c04d234a292af898722618b0ef9427f2e007db2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3NEZC4Y%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEiIjaArdpbicC3bhM3vBBCmeSmJLmAbysiMrlfNKk6TAiEAo652lWwZEpj6GVgs7ISWHbUpkRKEOT%2BMUPR2jhauAr8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMzeOan%2BC2ORmlbv0CrcA6cgnxT4Z4TxZNkaujCwGYMG6l%2F09oU2MyY8m1qTk%2Fa9sU6KV%2BDYRBnXAJ4RCt5Al%2FKsKU2dgyQ74H%2FF%2B5dgUwyXr7uuYf%2FR4NJ6Lz%2BzImZuyy51W%2BWXYSWCHKmmPFQ%2BvLdCs1XkUtoU8QiVaoS6QYhZMmcfDOq4jgAqcYPqZs1BZm%2FQ3LRthbI%2FxO7nnyG7e9FS8yGgk%2FmIIkjJxU2QKXRZwdMMx9xM25mNKkp%2FE0V9Kvwm7m6kaSQF0b0Qyq0AQBMGQNmLIgX0zayit6HNmSzfHKMdRH%2FB4Yevu2EiHajsXz8eCLeHWzDAfa1fYuF5ILumw1zl4TwHkUi0Zq5ktlMYLFOPI70MQIzR%2B%2BRs0AJDH0Fl8CtpvpToDGmu%2B67e1sHVChhXvnyVSPNGNT%2BpwISvR6BVqoD5%2BeGV9HAn4W4ytJRHW9C1FRvR0QhJHCA4GBnAJIt9L6H4VSlEJwX7%2BJHTDwbpKPmPd9k271cPff1xVGr2Pu37yr5kVHcFom3w2mEJLjXxAu182idKRgcQiymznz7mXp8b%2BNXkpn8Q7YzvqWUodUGkBdueYFqYH8pZzXKp8DEPUsHugdHuA%2FRbi5cCIJTK6a2cP%2Bt6%2BDvNcBTVYfXaRIo5dZfvEWDAMNfBrcMGOqUBP2%2Buyga7O3OqwyvyAzZ5nJODTNYt%2FCP1vWbJO7ASw3fjS21oyM%2FhP5Jq2fc1jqLRk2M86f4m38%2FN1rzBOHgh3OLiL%2F59CVdBUfigK90ugIYBxqOPiyLFK367hdxfANTy4BWvMC862XPEppaViHveDKGX35heeBj1LfAxk6Wq3I8DDr1HDccqUdX3O92JfqL%2BvclHh0a4jq6wNi7rftdYKHdIi%2Be6&X-Amz-Signature=125ceadcd3f55120c37b641af4894a35e562544d9dc8ceadbc4513fa11444d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3NEZC4Y%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEiIjaArdpbicC3bhM3vBBCmeSmJLmAbysiMrlfNKk6TAiEAo652lWwZEpj6GVgs7ISWHbUpkRKEOT%2BMUPR2jhauAr8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDMzeOan%2BC2ORmlbv0CrcA6cgnxT4Z4TxZNkaujCwGYMG6l%2F09oU2MyY8m1qTk%2Fa9sU6KV%2BDYRBnXAJ4RCt5Al%2FKsKU2dgyQ74H%2FF%2B5dgUwyXr7uuYf%2FR4NJ6Lz%2BzImZuyy51W%2BWXYSWCHKmmPFQ%2BvLdCs1XkUtoU8QiVaoS6QYhZMmcfDOq4jgAqcYPqZs1BZm%2FQ3LRthbI%2FxO7nnyG7e9FS8yGgk%2FmIIkjJxU2QKXRZwdMMx9xM25mNKkp%2FE0V9Kvwm7m6kaSQF0b0Qyq0AQBMGQNmLIgX0zayit6HNmSzfHKMdRH%2FB4Yevu2EiHajsXz8eCLeHWzDAfa1fYuF5ILumw1zl4TwHkUi0Zq5ktlMYLFOPI70MQIzR%2B%2BRs0AJDH0Fl8CtpvpToDGmu%2B67e1sHVChhXvnyVSPNGNT%2BpwISvR6BVqoD5%2BeGV9HAn4W4ytJRHW9C1FRvR0QhJHCA4GBnAJIt9L6H4VSlEJwX7%2BJHTDwbpKPmPd9k271cPff1xVGr2Pu37yr5kVHcFom3w2mEJLjXxAu182idKRgcQiymznz7mXp8b%2BNXkpn8Q7YzvqWUodUGkBdueYFqYH8pZzXKp8DEPUsHugdHuA%2FRbi5cCIJTK6a2cP%2Bt6%2BDvNcBTVYfXaRIo5dZfvEWDAMNfBrcMGOqUBP2%2Buyga7O3OqwyvyAzZ5nJODTNYt%2FCP1vWbJO7ASw3fjS21oyM%2FhP5Jq2fc1jqLRk2M86f4m38%2FN1rzBOHgh3OLiL%2F59CVdBUfigK90ugIYBxqOPiyLFK367hdxfANTy4BWvMC862XPEppaViHveDKGX35heeBj1LfAxk6Wq3I8DDr1HDccqUdX3O92JfqL%2BvclHh0a4jq6wNi7rftdYKHdIi%2Be6&X-Amz-Signature=79a6443a9070f98dc62afabae9d34541b15283aefb5a23da575b1dcfa0b47ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
