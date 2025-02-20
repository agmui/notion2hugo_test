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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREQWKBC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5PW4fH%2FU1WvzONF7EXt5QsOQD6WmxPRDRwC97erYMRAiBNofNMOUgR3WPskzUF9QvzpmX%2Fai9BdvpTvfYQHCfsmCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2Fdn%2BbYjVb8DyXYpKtwDS4tuz1DmqGfsqOn9jwEOovNPIPvJXNXjwA8WF49LgUDzh9GYN9IoV%2Bm40w9VpZiLJMnhXewcQJ%2BT7epcBrTYvxxf%2BPu5a8b1VnhQz11lfN54LK4p%2B3OeNTWoaJaa5Hui8UjrRLBVtED7BQfGDLu8Jf5g1f%2BQEL1aycDKJYXwXNyQDM%2BFpJbxdfllvxvSe2QF7qKaCbBwSKNtBloS2PNQVRumRncDrsYjWgEPyJrr0tcM%2BYPwibBfNy9lJNRuy8jE7%2BB%2Fr0WFeV4CKRR5LnqhgecOUkiZE%2FsDXsvulpqKng%2FFtT7lPnjRP0d%2B5sZ2n9PKKeAJJRBv%2BMYC9hSZcEdbLpS7s9HamTi7NQBYHvrLR4pNCXXZUs2uMlww9nSkpKjziyLeJPBR%2B6LSeQuod%2FrjQ4h5gsb%2BT99ZJMwAIs7LCJb%2FnqPQubZVCEd7F%2BzDjcVAr1kcunrZdGeWblvtW0DZjnrVvO78UG%2BNvDnjC5ChcYbqlciaruDWeaHbdzWaWPAeUtapWJl3U%2Fr7mFkyA3zYZCeVpoU7twcRFqDtgozA0xi1Zxn7dixXFeWprHcE1JoDBL%2FIBiGEeiKjpJMD%2BHIydw4plmzKlkDTNPj%2Bi5Z3VbwTUa69qC2OrrWJ1YgwzP3avQY6pgGx%2Biz0Ra4NCNmcmWq48wuyt%2B0ewQTYwy4H4omlD7JKNvizgvvg1EtvHccVnBtb%2BIFDxZD8GyOQbu2wuIm4mJnpb8jVEnzvbVDfYcqJ%2BjbJF68gQsZV95BXgZKiPcTQBRXuLs8XNg1oNV5TR%2B73i%2BXN2ecRvciky1dsSaN1lEVpU5hzfbIKXiRlNONpygurdvKMYyA%2Fj9psqohUTFNKab9U5Nvm9v8O&X-Amz-Signature=6d17ff8cd26f2ebc7e8ea2e385cd8ca74855e07d19cd1642ffeffb5295fd925c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREQWKBC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5PW4fH%2FU1WvzONF7EXt5QsOQD6WmxPRDRwC97erYMRAiBNofNMOUgR3WPskzUF9QvzpmX%2Fai9BdvpTvfYQHCfsmCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2Fdn%2BbYjVb8DyXYpKtwDS4tuz1DmqGfsqOn9jwEOovNPIPvJXNXjwA8WF49LgUDzh9GYN9IoV%2Bm40w9VpZiLJMnhXewcQJ%2BT7epcBrTYvxxf%2BPu5a8b1VnhQz11lfN54LK4p%2B3OeNTWoaJaa5Hui8UjrRLBVtED7BQfGDLu8Jf5g1f%2BQEL1aycDKJYXwXNyQDM%2BFpJbxdfllvxvSe2QF7qKaCbBwSKNtBloS2PNQVRumRncDrsYjWgEPyJrr0tcM%2BYPwibBfNy9lJNRuy8jE7%2BB%2Fr0WFeV4CKRR5LnqhgecOUkiZE%2FsDXsvulpqKng%2FFtT7lPnjRP0d%2B5sZ2n9PKKeAJJRBv%2BMYC9hSZcEdbLpS7s9HamTi7NQBYHvrLR4pNCXXZUs2uMlww9nSkpKjziyLeJPBR%2B6LSeQuod%2FrjQ4h5gsb%2BT99ZJMwAIs7LCJb%2FnqPQubZVCEd7F%2BzDjcVAr1kcunrZdGeWblvtW0DZjnrVvO78UG%2BNvDnjC5ChcYbqlciaruDWeaHbdzWaWPAeUtapWJl3U%2Fr7mFkyA3zYZCeVpoU7twcRFqDtgozA0xi1Zxn7dixXFeWprHcE1JoDBL%2FIBiGEeiKjpJMD%2BHIydw4plmzKlkDTNPj%2Bi5Z3VbwTUa69qC2OrrWJ1YgwzP3avQY6pgGx%2Biz0Ra4NCNmcmWq48wuyt%2B0ewQTYwy4H4omlD7JKNvizgvvg1EtvHccVnBtb%2BIFDxZD8GyOQbu2wuIm4mJnpb8jVEnzvbVDfYcqJ%2BjbJF68gQsZV95BXgZKiPcTQBRXuLs8XNg1oNV5TR%2B73i%2BXN2ecRvciky1dsSaN1lEVpU5hzfbIKXiRlNONpygurdvKMYyA%2Fj9psqohUTFNKab9U5Nvm9v8O&X-Amz-Signature=437c2d5eb2d0b32c402c149593b89559f1fb821422f700d8b0e2c93f57717b3d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREQWKBC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5PW4fH%2FU1WvzONF7EXt5QsOQD6WmxPRDRwC97erYMRAiBNofNMOUgR3WPskzUF9QvzpmX%2Fai9BdvpTvfYQHCfsmCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2Fdn%2BbYjVb8DyXYpKtwDS4tuz1DmqGfsqOn9jwEOovNPIPvJXNXjwA8WF49LgUDzh9GYN9IoV%2Bm40w9VpZiLJMnhXewcQJ%2BT7epcBrTYvxxf%2BPu5a8b1VnhQz11lfN54LK4p%2B3OeNTWoaJaa5Hui8UjrRLBVtED7BQfGDLu8Jf5g1f%2BQEL1aycDKJYXwXNyQDM%2BFpJbxdfllvxvSe2QF7qKaCbBwSKNtBloS2PNQVRumRncDrsYjWgEPyJrr0tcM%2BYPwibBfNy9lJNRuy8jE7%2BB%2Fr0WFeV4CKRR5LnqhgecOUkiZE%2FsDXsvulpqKng%2FFtT7lPnjRP0d%2B5sZ2n9PKKeAJJRBv%2BMYC9hSZcEdbLpS7s9HamTi7NQBYHvrLR4pNCXXZUs2uMlww9nSkpKjziyLeJPBR%2B6LSeQuod%2FrjQ4h5gsb%2BT99ZJMwAIs7LCJb%2FnqPQubZVCEd7F%2BzDjcVAr1kcunrZdGeWblvtW0DZjnrVvO78UG%2BNvDnjC5ChcYbqlciaruDWeaHbdzWaWPAeUtapWJl3U%2Fr7mFkyA3zYZCeVpoU7twcRFqDtgozA0xi1Zxn7dixXFeWprHcE1JoDBL%2FIBiGEeiKjpJMD%2BHIydw4plmzKlkDTNPj%2Bi5Z3VbwTUa69qC2OrrWJ1YgwzP3avQY6pgGx%2Biz0Ra4NCNmcmWq48wuyt%2B0ewQTYwy4H4omlD7JKNvizgvvg1EtvHccVnBtb%2BIFDxZD8GyOQbu2wuIm4mJnpb8jVEnzvbVDfYcqJ%2BjbJF68gQsZV95BXgZKiPcTQBRXuLs8XNg1oNV5TR%2B73i%2BXN2ecRvciky1dsSaN1lEVpU5hzfbIKXiRlNONpygurdvKMYyA%2Fj9psqohUTFNKab9U5Nvm9v8O&X-Amz-Signature=7d48c9d3e996b552a3708633f87c106ae0c31d9ece0200dc7683c39dea68af47&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREQWKBC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5PW4fH%2FU1WvzONF7EXt5QsOQD6WmxPRDRwC97erYMRAiBNofNMOUgR3WPskzUF9QvzpmX%2Fai9BdvpTvfYQHCfsmCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2Fdn%2BbYjVb8DyXYpKtwDS4tuz1DmqGfsqOn9jwEOovNPIPvJXNXjwA8WF49LgUDzh9GYN9IoV%2Bm40w9VpZiLJMnhXewcQJ%2BT7epcBrTYvxxf%2BPu5a8b1VnhQz11lfN54LK4p%2B3OeNTWoaJaa5Hui8UjrRLBVtED7BQfGDLu8Jf5g1f%2BQEL1aycDKJYXwXNyQDM%2BFpJbxdfllvxvSe2QF7qKaCbBwSKNtBloS2PNQVRumRncDrsYjWgEPyJrr0tcM%2BYPwibBfNy9lJNRuy8jE7%2BB%2Fr0WFeV4CKRR5LnqhgecOUkiZE%2FsDXsvulpqKng%2FFtT7lPnjRP0d%2B5sZ2n9PKKeAJJRBv%2BMYC9hSZcEdbLpS7s9HamTi7NQBYHvrLR4pNCXXZUs2uMlww9nSkpKjziyLeJPBR%2B6LSeQuod%2FrjQ4h5gsb%2BT99ZJMwAIs7LCJb%2FnqPQubZVCEd7F%2BzDjcVAr1kcunrZdGeWblvtW0DZjnrVvO78UG%2BNvDnjC5ChcYbqlciaruDWeaHbdzWaWPAeUtapWJl3U%2Fr7mFkyA3zYZCeVpoU7twcRFqDtgozA0xi1Zxn7dixXFeWprHcE1JoDBL%2FIBiGEeiKjpJMD%2BHIydw4plmzKlkDTNPj%2Bi5Z3VbwTUa69qC2OrrWJ1YgwzP3avQY6pgGx%2Biz0Ra4NCNmcmWq48wuyt%2B0ewQTYwy4H4omlD7JKNvizgvvg1EtvHccVnBtb%2BIFDxZD8GyOQbu2wuIm4mJnpb8jVEnzvbVDfYcqJ%2BjbJF68gQsZV95BXgZKiPcTQBRXuLs8XNg1oNV5TR%2B73i%2BXN2ecRvciky1dsSaN1lEVpU5hzfbIKXiRlNONpygurdvKMYyA%2Fj9psqohUTFNKab9U5Nvm9v8O&X-Amz-Signature=7db04efd43f64e0bb7b69b1ea8e0ee82817a09e7b758ef2eff1451c0ef963244&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREQWKBC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5PW4fH%2FU1WvzONF7EXt5QsOQD6WmxPRDRwC97erYMRAiBNofNMOUgR3WPskzUF9QvzpmX%2Fai9BdvpTvfYQHCfsmCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2Fdn%2BbYjVb8DyXYpKtwDS4tuz1DmqGfsqOn9jwEOovNPIPvJXNXjwA8WF49LgUDzh9GYN9IoV%2Bm40w9VpZiLJMnhXewcQJ%2BT7epcBrTYvxxf%2BPu5a8b1VnhQz11lfN54LK4p%2B3OeNTWoaJaa5Hui8UjrRLBVtED7BQfGDLu8Jf5g1f%2BQEL1aycDKJYXwXNyQDM%2BFpJbxdfllvxvSe2QF7qKaCbBwSKNtBloS2PNQVRumRncDrsYjWgEPyJrr0tcM%2BYPwibBfNy9lJNRuy8jE7%2BB%2Fr0WFeV4CKRR5LnqhgecOUkiZE%2FsDXsvulpqKng%2FFtT7lPnjRP0d%2B5sZ2n9PKKeAJJRBv%2BMYC9hSZcEdbLpS7s9HamTi7NQBYHvrLR4pNCXXZUs2uMlww9nSkpKjziyLeJPBR%2B6LSeQuod%2FrjQ4h5gsb%2BT99ZJMwAIs7LCJb%2FnqPQubZVCEd7F%2BzDjcVAr1kcunrZdGeWblvtW0DZjnrVvO78UG%2BNvDnjC5ChcYbqlciaruDWeaHbdzWaWPAeUtapWJl3U%2Fr7mFkyA3zYZCeVpoU7twcRFqDtgozA0xi1Zxn7dixXFeWprHcE1JoDBL%2FIBiGEeiKjpJMD%2BHIydw4plmzKlkDTNPj%2Bi5Z3VbwTUa69qC2OrrWJ1YgwzP3avQY6pgGx%2Biz0Ra4NCNmcmWq48wuyt%2B0ewQTYwy4H4omlD7JKNvizgvvg1EtvHccVnBtb%2BIFDxZD8GyOQbu2wuIm4mJnpb8jVEnzvbVDfYcqJ%2BjbJF68gQsZV95BXgZKiPcTQBRXuLs8XNg1oNV5TR%2B73i%2BXN2ecRvciky1dsSaN1lEVpU5hzfbIKXiRlNONpygurdvKMYyA%2Fj9psqohUTFNKab9U5Nvm9v8O&X-Amz-Signature=70750dd37745edae4a7f97c97478646ca19ddb7529cc9e18a60960e50a4b8acf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREQWKBC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5PW4fH%2FU1WvzONF7EXt5QsOQD6WmxPRDRwC97erYMRAiBNofNMOUgR3WPskzUF9QvzpmX%2Fai9BdvpTvfYQHCfsmCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2Fdn%2BbYjVb8DyXYpKtwDS4tuz1DmqGfsqOn9jwEOovNPIPvJXNXjwA8WF49LgUDzh9GYN9IoV%2Bm40w9VpZiLJMnhXewcQJ%2BT7epcBrTYvxxf%2BPu5a8b1VnhQz11lfN54LK4p%2B3OeNTWoaJaa5Hui8UjrRLBVtED7BQfGDLu8Jf5g1f%2BQEL1aycDKJYXwXNyQDM%2BFpJbxdfllvxvSe2QF7qKaCbBwSKNtBloS2PNQVRumRncDrsYjWgEPyJrr0tcM%2BYPwibBfNy9lJNRuy8jE7%2BB%2Fr0WFeV4CKRR5LnqhgecOUkiZE%2FsDXsvulpqKng%2FFtT7lPnjRP0d%2B5sZ2n9PKKeAJJRBv%2BMYC9hSZcEdbLpS7s9HamTi7NQBYHvrLR4pNCXXZUs2uMlww9nSkpKjziyLeJPBR%2B6LSeQuod%2FrjQ4h5gsb%2BT99ZJMwAIs7LCJb%2FnqPQubZVCEd7F%2BzDjcVAr1kcunrZdGeWblvtW0DZjnrVvO78UG%2BNvDnjC5ChcYbqlciaruDWeaHbdzWaWPAeUtapWJl3U%2Fr7mFkyA3zYZCeVpoU7twcRFqDtgozA0xi1Zxn7dixXFeWprHcE1JoDBL%2FIBiGEeiKjpJMD%2BHIydw4plmzKlkDTNPj%2Bi5Z3VbwTUa69qC2OrrWJ1YgwzP3avQY6pgGx%2Biz0Ra4NCNmcmWq48wuyt%2B0ewQTYwy4H4omlD7JKNvizgvvg1EtvHccVnBtb%2BIFDxZD8GyOQbu2wuIm4mJnpb8jVEnzvbVDfYcqJ%2BjbJF68gQsZV95BXgZKiPcTQBRXuLs8XNg1oNV5TR%2B73i%2BXN2ecRvciky1dsSaN1lEVpU5hzfbIKXiRlNONpygurdvKMYyA%2Fj9psqohUTFNKab9U5Nvm9v8O&X-Amz-Signature=821f7a970a2c09abad4557f304a7e98ad48d8143124deb5d73d2dd2413a63cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREQWKBC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5PW4fH%2FU1WvzONF7EXt5QsOQD6WmxPRDRwC97erYMRAiBNofNMOUgR3WPskzUF9QvzpmX%2Fai9BdvpTvfYQHCfsmCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2Fdn%2BbYjVb8DyXYpKtwDS4tuz1DmqGfsqOn9jwEOovNPIPvJXNXjwA8WF49LgUDzh9GYN9IoV%2Bm40w9VpZiLJMnhXewcQJ%2BT7epcBrTYvxxf%2BPu5a8b1VnhQz11lfN54LK4p%2B3OeNTWoaJaa5Hui8UjrRLBVtED7BQfGDLu8Jf5g1f%2BQEL1aycDKJYXwXNyQDM%2BFpJbxdfllvxvSe2QF7qKaCbBwSKNtBloS2PNQVRumRncDrsYjWgEPyJrr0tcM%2BYPwibBfNy9lJNRuy8jE7%2BB%2Fr0WFeV4CKRR5LnqhgecOUkiZE%2FsDXsvulpqKng%2FFtT7lPnjRP0d%2B5sZ2n9PKKeAJJRBv%2BMYC9hSZcEdbLpS7s9HamTi7NQBYHvrLR4pNCXXZUs2uMlww9nSkpKjziyLeJPBR%2B6LSeQuod%2FrjQ4h5gsb%2BT99ZJMwAIs7LCJb%2FnqPQubZVCEd7F%2BzDjcVAr1kcunrZdGeWblvtW0DZjnrVvO78UG%2BNvDnjC5ChcYbqlciaruDWeaHbdzWaWPAeUtapWJl3U%2Fr7mFkyA3zYZCeVpoU7twcRFqDtgozA0xi1Zxn7dixXFeWprHcE1JoDBL%2FIBiGEeiKjpJMD%2BHIydw4plmzKlkDTNPj%2Bi5Z3VbwTUa69qC2OrrWJ1YgwzP3avQY6pgGx%2Biz0Ra4NCNmcmWq48wuyt%2B0ewQTYwy4H4omlD7JKNvizgvvg1EtvHccVnBtb%2BIFDxZD8GyOQbu2wuIm4mJnpb8jVEnzvbVDfYcqJ%2BjbJF68gQsZV95BXgZKiPcTQBRXuLs8XNg1oNV5TR%2B73i%2BXN2ecRvciky1dsSaN1lEVpU5hzfbIKXiRlNONpygurdvKMYyA%2Fj9psqohUTFNKab9U5Nvm9v8O&X-Amz-Signature=92d3ada9f86407118fe2a7ba40f4d66a9c9f5c2c805ac51a835a7a98a2d9c666&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
