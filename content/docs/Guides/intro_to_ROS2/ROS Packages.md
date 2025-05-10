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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25JG3TZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDk40MKqMO7jwysWXmlmx2z6j0fWDkxFFPuTjMkt1fJDAIhALNQsGQhwwZHZbrKd5S0M3wBYW8X4GQqD69y2wfWtqBXKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRr19S33Frqy42pv0q3APazgxZUdiSa3imzx56WZXViTSA1RaZfWXKtiqMb4ATDde2jcYnFZLIE5Zi7AIzW5v9A%2BVKJEDORT9qpdiOOl3SRY%2Fo8FWVDwZDM6MDDZBmr4qNtCk2E47dXyhKr1gMtsVnutgvBCmYwbRf6ce3JptRJYDuZ6YQjxHvdZnkwnOQEkF90D03DLXleWu1Yk1xPShhnPYkYXMSBLkwj0wl5%2BaBgVQLyFKEwby8BAmarWoEaIdWft8FjfDGBkL7j8Aub2MGvf%2BF%2BsO8SSaVBajg2EcskiF2KV2RUk%2BHx6JC7NfxygWWfoSCgSlIA5eCkL4%2BJlfpFRHoIs9vVJZlqPGp6oSzZ8oEQNd%2FtAnGG2ZPRBSvUn8dRuLhCQJoSSuWOCXy31EufPi8%2B%2FRnU8OUeg%2FbncNvr%2F6NHwoc8E1kpDPBm%2BlKvU4kaq9UoelZFHfoYOUaNPdwEW7KzB5Bzuw5OycYvwhiTHMSTTw1R4ommYiC27gltbzngvFO9deEM%2B%2BcAvyp7NQrzSbR6mlQ2gnZZDANu97NAyTnFZ0JeKGBHrMMXZwemErprCZ%2BUOs1UwZSvy%2FvEvV5VGddlWY8q%2B0JnTzJM0Eeq4XVzXMFj8s1blmegOn8T7lNEl2yGVFvAxb%2FhzDOiv%2FABjqkAdgzFUI0Fti1TjDzWDdRVA8V5WBDTqeTHJdeE78wV8jwkGsFK963ffYL7Gb1Y3d4C1mpKLp051v1Z8Hyvdrka7JK1Tqt96aW4kXkaboOn%2FDz69DBMyptxx00acE3Jx8oIPqzH%2Bl8QXyjSAdrQZgZsX87V54pfDll3zHl1wozyIrBlajmjryhl4%2BBzAjD%2BioA7MGHbtFWpMj9vm02BK8TllHgv8on&X-Amz-Signature=a3b07a725645730ed2f46c00b224685421606560c2ac4258dfe9cc3fc2ed0e35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25JG3TZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDk40MKqMO7jwysWXmlmx2z6j0fWDkxFFPuTjMkt1fJDAIhALNQsGQhwwZHZbrKd5S0M3wBYW8X4GQqD69y2wfWtqBXKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRr19S33Frqy42pv0q3APazgxZUdiSa3imzx56WZXViTSA1RaZfWXKtiqMb4ATDde2jcYnFZLIE5Zi7AIzW5v9A%2BVKJEDORT9qpdiOOl3SRY%2Fo8FWVDwZDM6MDDZBmr4qNtCk2E47dXyhKr1gMtsVnutgvBCmYwbRf6ce3JptRJYDuZ6YQjxHvdZnkwnOQEkF90D03DLXleWu1Yk1xPShhnPYkYXMSBLkwj0wl5%2BaBgVQLyFKEwby8BAmarWoEaIdWft8FjfDGBkL7j8Aub2MGvf%2BF%2BsO8SSaVBajg2EcskiF2KV2RUk%2BHx6JC7NfxygWWfoSCgSlIA5eCkL4%2BJlfpFRHoIs9vVJZlqPGp6oSzZ8oEQNd%2FtAnGG2ZPRBSvUn8dRuLhCQJoSSuWOCXy31EufPi8%2B%2FRnU8OUeg%2FbncNvr%2F6NHwoc8E1kpDPBm%2BlKvU4kaq9UoelZFHfoYOUaNPdwEW7KzB5Bzuw5OycYvwhiTHMSTTw1R4ommYiC27gltbzngvFO9deEM%2B%2BcAvyp7NQrzSbR6mlQ2gnZZDANu97NAyTnFZ0JeKGBHrMMXZwemErprCZ%2BUOs1UwZSvy%2FvEvV5VGddlWY8q%2B0JnTzJM0Eeq4XVzXMFj8s1blmegOn8T7lNEl2yGVFvAxb%2FhzDOiv%2FABjqkAdgzFUI0Fti1TjDzWDdRVA8V5WBDTqeTHJdeE78wV8jwkGsFK963ffYL7Gb1Y3d4C1mpKLp051v1Z8Hyvdrka7JK1Tqt96aW4kXkaboOn%2FDz69DBMyptxx00acE3Jx8oIPqzH%2Bl8QXyjSAdrQZgZsX87V54pfDll3zHl1wozyIrBlajmjryhl4%2BBzAjD%2BioA7MGHbtFWpMj9vm02BK8TllHgv8on&X-Amz-Signature=a706906ef13b5713162e40ac6960eb4bfacf0903190e0c028558f34aa23d845e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25JG3TZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDk40MKqMO7jwysWXmlmx2z6j0fWDkxFFPuTjMkt1fJDAIhALNQsGQhwwZHZbrKd5S0M3wBYW8X4GQqD69y2wfWtqBXKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRr19S33Frqy42pv0q3APazgxZUdiSa3imzx56WZXViTSA1RaZfWXKtiqMb4ATDde2jcYnFZLIE5Zi7AIzW5v9A%2BVKJEDORT9qpdiOOl3SRY%2Fo8FWVDwZDM6MDDZBmr4qNtCk2E47dXyhKr1gMtsVnutgvBCmYwbRf6ce3JptRJYDuZ6YQjxHvdZnkwnOQEkF90D03DLXleWu1Yk1xPShhnPYkYXMSBLkwj0wl5%2BaBgVQLyFKEwby8BAmarWoEaIdWft8FjfDGBkL7j8Aub2MGvf%2BF%2BsO8SSaVBajg2EcskiF2KV2RUk%2BHx6JC7NfxygWWfoSCgSlIA5eCkL4%2BJlfpFRHoIs9vVJZlqPGp6oSzZ8oEQNd%2FtAnGG2ZPRBSvUn8dRuLhCQJoSSuWOCXy31EufPi8%2B%2FRnU8OUeg%2FbncNvr%2F6NHwoc8E1kpDPBm%2BlKvU4kaq9UoelZFHfoYOUaNPdwEW7KzB5Bzuw5OycYvwhiTHMSTTw1R4ommYiC27gltbzngvFO9deEM%2B%2BcAvyp7NQrzSbR6mlQ2gnZZDANu97NAyTnFZ0JeKGBHrMMXZwemErprCZ%2BUOs1UwZSvy%2FvEvV5VGddlWY8q%2B0JnTzJM0Eeq4XVzXMFj8s1blmegOn8T7lNEl2yGVFvAxb%2FhzDOiv%2FABjqkAdgzFUI0Fti1TjDzWDdRVA8V5WBDTqeTHJdeE78wV8jwkGsFK963ffYL7Gb1Y3d4C1mpKLp051v1Z8Hyvdrka7JK1Tqt96aW4kXkaboOn%2FDz69DBMyptxx00acE3Jx8oIPqzH%2Bl8QXyjSAdrQZgZsX87V54pfDll3zHl1wozyIrBlajmjryhl4%2BBzAjD%2BioA7MGHbtFWpMj9vm02BK8TllHgv8on&X-Amz-Signature=74dc6995e23519d023ad004a3092421201aa07fdda9388cfe1d860303c9635da&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25JG3TZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDk40MKqMO7jwysWXmlmx2z6j0fWDkxFFPuTjMkt1fJDAIhALNQsGQhwwZHZbrKd5S0M3wBYW8X4GQqD69y2wfWtqBXKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRr19S33Frqy42pv0q3APazgxZUdiSa3imzx56WZXViTSA1RaZfWXKtiqMb4ATDde2jcYnFZLIE5Zi7AIzW5v9A%2BVKJEDORT9qpdiOOl3SRY%2Fo8FWVDwZDM6MDDZBmr4qNtCk2E47dXyhKr1gMtsVnutgvBCmYwbRf6ce3JptRJYDuZ6YQjxHvdZnkwnOQEkF90D03DLXleWu1Yk1xPShhnPYkYXMSBLkwj0wl5%2BaBgVQLyFKEwby8BAmarWoEaIdWft8FjfDGBkL7j8Aub2MGvf%2BF%2BsO8SSaVBajg2EcskiF2KV2RUk%2BHx6JC7NfxygWWfoSCgSlIA5eCkL4%2BJlfpFRHoIs9vVJZlqPGp6oSzZ8oEQNd%2FtAnGG2ZPRBSvUn8dRuLhCQJoSSuWOCXy31EufPi8%2B%2FRnU8OUeg%2FbncNvr%2F6NHwoc8E1kpDPBm%2BlKvU4kaq9UoelZFHfoYOUaNPdwEW7KzB5Bzuw5OycYvwhiTHMSTTw1R4ommYiC27gltbzngvFO9deEM%2B%2BcAvyp7NQrzSbR6mlQ2gnZZDANu97NAyTnFZ0JeKGBHrMMXZwemErprCZ%2BUOs1UwZSvy%2FvEvV5VGddlWY8q%2B0JnTzJM0Eeq4XVzXMFj8s1blmegOn8T7lNEl2yGVFvAxb%2FhzDOiv%2FABjqkAdgzFUI0Fti1TjDzWDdRVA8V5WBDTqeTHJdeE78wV8jwkGsFK963ffYL7Gb1Y3d4C1mpKLp051v1Z8Hyvdrka7JK1Tqt96aW4kXkaboOn%2FDz69DBMyptxx00acE3Jx8oIPqzH%2Bl8QXyjSAdrQZgZsX87V54pfDll3zHl1wozyIrBlajmjryhl4%2BBzAjD%2BioA7MGHbtFWpMj9vm02BK8TllHgv8on&X-Amz-Signature=6dfbb36091cd710c23229387481840bc55daa87e09bd73a495a2483b2e26afaf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25JG3TZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDk40MKqMO7jwysWXmlmx2z6j0fWDkxFFPuTjMkt1fJDAIhALNQsGQhwwZHZbrKd5S0M3wBYW8X4GQqD69y2wfWtqBXKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRr19S33Frqy42pv0q3APazgxZUdiSa3imzx56WZXViTSA1RaZfWXKtiqMb4ATDde2jcYnFZLIE5Zi7AIzW5v9A%2BVKJEDORT9qpdiOOl3SRY%2Fo8FWVDwZDM6MDDZBmr4qNtCk2E47dXyhKr1gMtsVnutgvBCmYwbRf6ce3JptRJYDuZ6YQjxHvdZnkwnOQEkF90D03DLXleWu1Yk1xPShhnPYkYXMSBLkwj0wl5%2BaBgVQLyFKEwby8BAmarWoEaIdWft8FjfDGBkL7j8Aub2MGvf%2BF%2BsO8SSaVBajg2EcskiF2KV2RUk%2BHx6JC7NfxygWWfoSCgSlIA5eCkL4%2BJlfpFRHoIs9vVJZlqPGp6oSzZ8oEQNd%2FtAnGG2ZPRBSvUn8dRuLhCQJoSSuWOCXy31EufPi8%2B%2FRnU8OUeg%2FbncNvr%2F6NHwoc8E1kpDPBm%2BlKvU4kaq9UoelZFHfoYOUaNPdwEW7KzB5Bzuw5OycYvwhiTHMSTTw1R4ommYiC27gltbzngvFO9deEM%2B%2BcAvyp7NQrzSbR6mlQ2gnZZDANu97NAyTnFZ0JeKGBHrMMXZwemErprCZ%2BUOs1UwZSvy%2FvEvV5VGddlWY8q%2B0JnTzJM0Eeq4XVzXMFj8s1blmegOn8T7lNEl2yGVFvAxb%2FhzDOiv%2FABjqkAdgzFUI0Fti1TjDzWDdRVA8V5WBDTqeTHJdeE78wV8jwkGsFK963ffYL7Gb1Y3d4C1mpKLp051v1Z8Hyvdrka7JK1Tqt96aW4kXkaboOn%2FDz69DBMyptxx00acE3Jx8oIPqzH%2Bl8QXyjSAdrQZgZsX87V54pfDll3zHl1wozyIrBlajmjryhl4%2BBzAjD%2BioA7MGHbtFWpMj9vm02BK8TllHgv8on&X-Amz-Signature=b8669949a13fa428feca4835ab98dc0da5a0e13993497c687582cbc120134fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25JG3TZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDk40MKqMO7jwysWXmlmx2z6j0fWDkxFFPuTjMkt1fJDAIhALNQsGQhwwZHZbrKd5S0M3wBYW8X4GQqD69y2wfWtqBXKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRr19S33Frqy42pv0q3APazgxZUdiSa3imzx56WZXViTSA1RaZfWXKtiqMb4ATDde2jcYnFZLIE5Zi7AIzW5v9A%2BVKJEDORT9qpdiOOl3SRY%2Fo8FWVDwZDM6MDDZBmr4qNtCk2E47dXyhKr1gMtsVnutgvBCmYwbRf6ce3JptRJYDuZ6YQjxHvdZnkwnOQEkF90D03DLXleWu1Yk1xPShhnPYkYXMSBLkwj0wl5%2BaBgVQLyFKEwby8BAmarWoEaIdWft8FjfDGBkL7j8Aub2MGvf%2BF%2BsO8SSaVBajg2EcskiF2KV2RUk%2BHx6JC7NfxygWWfoSCgSlIA5eCkL4%2BJlfpFRHoIs9vVJZlqPGp6oSzZ8oEQNd%2FtAnGG2ZPRBSvUn8dRuLhCQJoSSuWOCXy31EufPi8%2B%2FRnU8OUeg%2FbncNvr%2F6NHwoc8E1kpDPBm%2BlKvU4kaq9UoelZFHfoYOUaNPdwEW7KzB5Bzuw5OycYvwhiTHMSTTw1R4ommYiC27gltbzngvFO9deEM%2B%2BcAvyp7NQrzSbR6mlQ2gnZZDANu97NAyTnFZ0JeKGBHrMMXZwemErprCZ%2BUOs1UwZSvy%2FvEvV5VGddlWY8q%2B0JnTzJM0Eeq4XVzXMFj8s1blmegOn8T7lNEl2yGVFvAxb%2FhzDOiv%2FABjqkAdgzFUI0Fti1TjDzWDdRVA8V5WBDTqeTHJdeE78wV8jwkGsFK963ffYL7Gb1Y3d4C1mpKLp051v1Z8Hyvdrka7JK1Tqt96aW4kXkaboOn%2FDz69DBMyptxx00acE3Jx8oIPqzH%2Bl8QXyjSAdrQZgZsX87V54pfDll3zHl1wozyIrBlajmjryhl4%2BBzAjD%2BioA7MGHbtFWpMj9vm02BK8TllHgv8on&X-Amz-Signature=440682b3316488e6b2a364d880f579eb3dc66b33ed0b2500464c0c809788d4f7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25JG3TZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDk40MKqMO7jwysWXmlmx2z6j0fWDkxFFPuTjMkt1fJDAIhALNQsGQhwwZHZbrKd5S0M3wBYW8X4GQqD69y2wfWtqBXKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRr19S33Frqy42pv0q3APazgxZUdiSa3imzx56WZXViTSA1RaZfWXKtiqMb4ATDde2jcYnFZLIE5Zi7AIzW5v9A%2BVKJEDORT9qpdiOOl3SRY%2Fo8FWVDwZDM6MDDZBmr4qNtCk2E47dXyhKr1gMtsVnutgvBCmYwbRf6ce3JptRJYDuZ6YQjxHvdZnkwnOQEkF90D03DLXleWu1Yk1xPShhnPYkYXMSBLkwj0wl5%2BaBgVQLyFKEwby8BAmarWoEaIdWft8FjfDGBkL7j8Aub2MGvf%2BF%2BsO8SSaVBajg2EcskiF2KV2RUk%2BHx6JC7NfxygWWfoSCgSlIA5eCkL4%2BJlfpFRHoIs9vVJZlqPGp6oSzZ8oEQNd%2FtAnGG2ZPRBSvUn8dRuLhCQJoSSuWOCXy31EufPi8%2B%2FRnU8OUeg%2FbncNvr%2F6NHwoc8E1kpDPBm%2BlKvU4kaq9UoelZFHfoYOUaNPdwEW7KzB5Bzuw5OycYvwhiTHMSTTw1R4ommYiC27gltbzngvFO9deEM%2B%2BcAvyp7NQrzSbR6mlQ2gnZZDANu97NAyTnFZ0JeKGBHrMMXZwemErprCZ%2BUOs1UwZSvy%2FvEvV5VGddlWY8q%2B0JnTzJM0Eeq4XVzXMFj8s1blmegOn8T7lNEl2yGVFvAxb%2FhzDOiv%2FABjqkAdgzFUI0Fti1TjDzWDdRVA8V5WBDTqeTHJdeE78wV8jwkGsFK963ffYL7Gb1Y3d4C1mpKLp051v1Z8Hyvdrka7JK1Tqt96aW4kXkaboOn%2FDz69DBMyptxx00acE3Jx8oIPqzH%2Bl8QXyjSAdrQZgZsX87V54pfDll3zHl1wozyIrBlajmjryhl4%2BBzAjD%2BioA7MGHbtFWpMj9vm02BK8TllHgv8on&X-Amz-Signature=c378bd5e58bcb65a0cede0a623c7836665ece366a5917ede544a623de86bd8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
