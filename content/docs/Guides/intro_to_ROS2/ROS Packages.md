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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOOT4EP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLj5Z6%2Ft%2B1%2BkjBnHkPPGFl8njha0tiqmti2b8i6M7%2FngIhANiGJLndNbvuW8KUV%2FlSeNfGRo79T%2FMuoqQIeNG85QD%2FKv8DCGEQABoMNjM3NDIzMTgzODA1IgyYIZuObYc3mSCiFbgq3ANBXTBe5x59Li%2BNOtVZGdQHstzWdZetpINswbKlVPFlwadQE2oHY6aj2VtHxd3yaU%2FnwvY4n0Cxd4K7v0KCpgFLye8iQ9qcKBb5Bn01WI8mnW6kP%2FBSubKYTMvNzQMsEfNc3lHVpW6FPpIycq1YOaHaCRhS8kGJ25fNV9UJjcyZuwYUykP%2BuhMTOoEeIokxmWnGldjK6QWmJu364RwKFyayu6pKM9qG9fE2jXLK%2BCt7GHu%2F54qJa%2ByDgIHnYpjWUU556sLUcwGCbCidSo6Th6N0ghI7NxQlPoDFsFsz%2FbPvu5TjLESmKFuJKiXdWbxWDLDxdR0h27zpWlKJZMs8RHQfUWgBOvABLBUyFojEeCVlw6aPNHS00MFyxJ3VnzQyp1dXArYPFtE3sE%2BV0VhTbX23oTep9t9KQdHq9ik0ddm4ssQBN5e4C5tpI3T%2FgqUT%2FQux84%2BgBh8ZQjWr4BZLWWGzslN%2FsI6DAWvIf4M5n7XDaGfnlRzFLOKyMOLI4SwG0o0ycPVmb5tOeoxudfYjCcrm0PzuS20Vfy8i1ioDP5B%2B2eLj8rSaHB%2Bio7sE73viq23nQ9T1b8J%2BJQjKIgCWQ7S7jScrrwKdcNy8%2BXGRe1CLj8QU%2BW%2F%2FT5dhqUSP2DCksLnABjqkAf2VwzZF3VZNWI6pf0CEUtNHgfKx95jPBsvWBAncVyEYvgM%2FyUaPJFiCozrMghLkvLXAvMthNza%2BQj%2BgPhOFcpJdIyM9mIG%2BTLC2O9ALUDE9RMEKWwQ3yTMo9glAlwywZoPmypRoZDnvnHz1y30kOX7Jvxz01sGMJov6%2Fl5hwax%2F3EvfEK%2BsLxVkq336Q4f8RbCpt7cvkecBkGFhnU17mz4eypkK&X-Amz-Signature=e09e35a0ec44644693a47d673b869a5547e33567006f2ad89d277a69882e9f97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOOT4EP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLj5Z6%2Ft%2B1%2BkjBnHkPPGFl8njha0tiqmti2b8i6M7%2FngIhANiGJLndNbvuW8KUV%2FlSeNfGRo79T%2FMuoqQIeNG85QD%2FKv8DCGEQABoMNjM3NDIzMTgzODA1IgyYIZuObYc3mSCiFbgq3ANBXTBe5x59Li%2BNOtVZGdQHstzWdZetpINswbKlVPFlwadQE2oHY6aj2VtHxd3yaU%2FnwvY4n0Cxd4K7v0KCpgFLye8iQ9qcKBb5Bn01WI8mnW6kP%2FBSubKYTMvNzQMsEfNc3lHVpW6FPpIycq1YOaHaCRhS8kGJ25fNV9UJjcyZuwYUykP%2BuhMTOoEeIokxmWnGldjK6QWmJu364RwKFyayu6pKM9qG9fE2jXLK%2BCt7GHu%2F54qJa%2ByDgIHnYpjWUU556sLUcwGCbCidSo6Th6N0ghI7NxQlPoDFsFsz%2FbPvu5TjLESmKFuJKiXdWbxWDLDxdR0h27zpWlKJZMs8RHQfUWgBOvABLBUyFojEeCVlw6aPNHS00MFyxJ3VnzQyp1dXArYPFtE3sE%2BV0VhTbX23oTep9t9KQdHq9ik0ddm4ssQBN5e4C5tpI3T%2FgqUT%2FQux84%2BgBh8ZQjWr4BZLWWGzslN%2FsI6DAWvIf4M5n7XDaGfnlRzFLOKyMOLI4SwG0o0ycPVmb5tOeoxudfYjCcrm0PzuS20Vfy8i1ioDP5B%2B2eLj8rSaHB%2Bio7sE73viq23nQ9T1b8J%2BJQjKIgCWQ7S7jScrrwKdcNy8%2BXGRe1CLj8QU%2BW%2F%2FT5dhqUSP2DCksLnABjqkAf2VwzZF3VZNWI6pf0CEUtNHgfKx95jPBsvWBAncVyEYvgM%2FyUaPJFiCozrMghLkvLXAvMthNza%2BQj%2BgPhOFcpJdIyM9mIG%2BTLC2O9ALUDE9RMEKWwQ3yTMo9glAlwywZoPmypRoZDnvnHz1y30kOX7Jvxz01sGMJov6%2Fl5hwax%2F3EvfEK%2BsLxVkq336Q4f8RbCpt7cvkecBkGFhnU17mz4eypkK&X-Amz-Signature=1ebcda9623f40b1051b0f6f6b0726218ca0fb51096f47349ec1d7f76ef4af2c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOOT4EP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLj5Z6%2Ft%2B1%2BkjBnHkPPGFl8njha0tiqmti2b8i6M7%2FngIhANiGJLndNbvuW8KUV%2FlSeNfGRo79T%2FMuoqQIeNG85QD%2FKv8DCGEQABoMNjM3NDIzMTgzODA1IgyYIZuObYc3mSCiFbgq3ANBXTBe5x59Li%2BNOtVZGdQHstzWdZetpINswbKlVPFlwadQE2oHY6aj2VtHxd3yaU%2FnwvY4n0Cxd4K7v0KCpgFLye8iQ9qcKBb5Bn01WI8mnW6kP%2FBSubKYTMvNzQMsEfNc3lHVpW6FPpIycq1YOaHaCRhS8kGJ25fNV9UJjcyZuwYUykP%2BuhMTOoEeIokxmWnGldjK6QWmJu364RwKFyayu6pKM9qG9fE2jXLK%2BCt7GHu%2F54qJa%2ByDgIHnYpjWUU556sLUcwGCbCidSo6Th6N0ghI7NxQlPoDFsFsz%2FbPvu5TjLESmKFuJKiXdWbxWDLDxdR0h27zpWlKJZMs8RHQfUWgBOvABLBUyFojEeCVlw6aPNHS00MFyxJ3VnzQyp1dXArYPFtE3sE%2BV0VhTbX23oTep9t9KQdHq9ik0ddm4ssQBN5e4C5tpI3T%2FgqUT%2FQux84%2BgBh8ZQjWr4BZLWWGzslN%2FsI6DAWvIf4M5n7XDaGfnlRzFLOKyMOLI4SwG0o0ycPVmb5tOeoxudfYjCcrm0PzuS20Vfy8i1ioDP5B%2B2eLj8rSaHB%2Bio7sE73viq23nQ9T1b8J%2BJQjKIgCWQ7S7jScrrwKdcNy8%2BXGRe1CLj8QU%2BW%2F%2FT5dhqUSP2DCksLnABjqkAf2VwzZF3VZNWI6pf0CEUtNHgfKx95jPBsvWBAncVyEYvgM%2FyUaPJFiCozrMghLkvLXAvMthNza%2BQj%2BgPhOFcpJdIyM9mIG%2BTLC2O9ALUDE9RMEKWwQ3yTMo9glAlwywZoPmypRoZDnvnHz1y30kOX7Jvxz01sGMJov6%2Fl5hwax%2F3EvfEK%2BsLxVkq336Q4f8RbCpt7cvkecBkGFhnU17mz4eypkK&X-Amz-Signature=21d1d9ee1671b7fc7b5547a5dd4c843111bc31c4e60d9274129acd192358107a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOOT4EP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLj5Z6%2Ft%2B1%2BkjBnHkPPGFl8njha0tiqmti2b8i6M7%2FngIhANiGJLndNbvuW8KUV%2FlSeNfGRo79T%2FMuoqQIeNG85QD%2FKv8DCGEQABoMNjM3NDIzMTgzODA1IgyYIZuObYc3mSCiFbgq3ANBXTBe5x59Li%2BNOtVZGdQHstzWdZetpINswbKlVPFlwadQE2oHY6aj2VtHxd3yaU%2FnwvY4n0Cxd4K7v0KCpgFLye8iQ9qcKBb5Bn01WI8mnW6kP%2FBSubKYTMvNzQMsEfNc3lHVpW6FPpIycq1YOaHaCRhS8kGJ25fNV9UJjcyZuwYUykP%2BuhMTOoEeIokxmWnGldjK6QWmJu364RwKFyayu6pKM9qG9fE2jXLK%2BCt7GHu%2F54qJa%2ByDgIHnYpjWUU556sLUcwGCbCidSo6Th6N0ghI7NxQlPoDFsFsz%2FbPvu5TjLESmKFuJKiXdWbxWDLDxdR0h27zpWlKJZMs8RHQfUWgBOvABLBUyFojEeCVlw6aPNHS00MFyxJ3VnzQyp1dXArYPFtE3sE%2BV0VhTbX23oTep9t9KQdHq9ik0ddm4ssQBN5e4C5tpI3T%2FgqUT%2FQux84%2BgBh8ZQjWr4BZLWWGzslN%2FsI6DAWvIf4M5n7XDaGfnlRzFLOKyMOLI4SwG0o0ycPVmb5tOeoxudfYjCcrm0PzuS20Vfy8i1ioDP5B%2B2eLj8rSaHB%2Bio7sE73viq23nQ9T1b8J%2BJQjKIgCWQ7S7jScrrwKdcNy8%2BXGRe1CLj8QU%2BW%2F%2FT5dhqUSP2DCksLnABjqkAf2VwzZF3VZNWI6pf0CEUtNHgfKx95jPBsvWBAncVyEYvgM%2FyUaPJFiCozrMghLkvLXAvMthNza%2BQj%2BgPhOFcpJdIyM9mIG%2BTLC2O9ALUDE9RMEKWwQ3yTMo9glAlwywZoPmypRoZDnvnHz1y30kOX7Jvxz01sGMJov6%2Fl5hwax%2F3EvfEK%2BsLxVkq336Q4f8RbCpt7cvkecBkGFhnU17mz4eypkK&X-Amz-Signature=a2381ed4c11a46818b82757c024a0c6735699fdd964eb38776b888cc06db96a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOOT4EP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLj5Z6%2Ft%2B1%2BkjBnHkPPGFl8njha0tiqmti2b8i6M7%2FngIhANiGJLndNbvuW8KUV%2FlSeNfGRo79T%2FMuoqQIeNG85QD%2FKv8DCGEQABoMNjM3NDIzMTgzODA1IgyYIZuObYc3mSCiFbgq3ANBXTBe5x59Li%2BNOtVZGdQHstzWdZetpINswbKlVPFlwadQE2oHY6aj2VtHxd3yaU%2FnwvY4n0Cxd4K7v0KCpgFLye8iQ9qcKBb5Bn01WI8mnW6kP%2FBSubKYTMvNzQMsEfNc3lHVpW6FPpIycq1YOaHaCRhS8kGJ25fNV9UJjcyZuwYUykP%2BuhMTOoEeIokxmWnGldjK6QWmJu364RwKFyayu6pKM9qG9fE2jXLK%2BCt7GHu%2F54qJa%2ByDgIHnYpjWUU556sLUcwGCbCidSo6Th6N0ghI7NxQlPoDFsFsz%2FbPvu5TjLESmKFuJKiXdWbxWDLDxdR0h27zpWlKJZMs8RHQfUWgBOvABLBUyFojEeCVlw6aPNHS00MFyxJ3VnzQyp1dXArYPFtE3sE%2BV0VhTbX23oTep9t9KQdHq9ik0ddm4ssQBN5e4C5tpI3T%2FgqUT%2FQux84%2BgBh8ZQjWr4BZLWWGzslN%2FsI6DAWvIf4M5n7XDaGfnlRzFLOKyMOLI4SwG0o0ycPVmb5tOeoxudfYjCcrm0PzuS20Vfy8i1ioDP5B%2B2eLj8rSaHB%2Bio7sE73viq23nQ9T1b8J%2BJQjKIgCWQ7S7jScrrwKdcNy8%2BXGRe1CLj8QU%2BW%2F%2FT5dhqUSP2DCksLnABjqkAf2VwzZF3VZNWI6pf0CEUtNHgfKx95jPBsvWBAncVyEYvgM%2FyUaPJFiCozrMghLkvLXAvMthNza%2BQj%2BgPhOFcpJdIyM9mIG%2BTLC2O9ALUDE9RMEKWwQ3yTMo9glAlwywZoPmypRoZDnvnHz1y30kOX7Jvxz01sGMJov6%2Fl5hwax%2F3EvfEK%2BsLxVkq336Q4f8RbCpt7cvkecBkGFhnU17mz4eypkK&X-Amz-Signature=792bcb19a2ca2c2b2a6e39141db4e3167fb3199efd85b08ee50960a80bcc844d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOOT4EP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLj5Z6%2Ft%2B1%2BkjBnHkPPGFl8njha0tiqmti2b8i6M7%2FngIhANiGJLndNbvuW8KUV%2FlSeNfGRo79T%2FMuoqQIeNG85QD%2FKv8DCGEQABoMNjM3NDIzMTgzODA1IgyYIZuObYc3mSCiFbgq3ANBXTBe5x59Li%2BNOtVZGdQHstzWdZetpINswbKlVPFlwadQE2oHY6aj2VtHxd3yaU%2FnwvY4n0Cxd4K7v0KCpgFLye8iQ9qcKBb5Bn01WI8mnW6kP%2FBSubKYTMvNzQMsEfNc3lHVpW6FPpIycq1YOaHaCRhS8kGJ25fNV9UJjcyZuwYUykP%2BuhMTOoEeIokxmWnGldjK6QWmJu364RwKFyayu6pKM9qG9fE2jXLK%2BCt7GHu%2F54qJa%2ByDgIHnYpjWUU556sLUcwGCbCidSo6Th6N0ghI7NxQlPoDFsFsz%2FbPvu5TjLESmKFuJKiXdWbxWDLDxdR0h27zpWlKJZMs8RHQfUWgBOvABLBUyFojEeCVlw6aPNHS00MFyxJ3VnzQyp1dXArYPFtE3sE%2BV0VhTbX23oTep9t9KQdHq9ik0ddm4ssQBN5e4C5tpI3T%2FgqUT%2FQux84%2BgBh8ZQjWr4BZLWWGzslN%2FsI6DAWvIf4M5n7XDaGfnlRzFLOKyMOLI4SwG0o0ycPVmb5tOeoxudfYjCcrm0PzuS20Vfy8i1ioDP5B%2B2eLj8rSaHB%2Bio7sE73viq23nQ9T1b8J%2BJQjKIgCWQ7S7jScrrwKdcNy8%2BXGRe1CLj8QU%2BW%2F%2FT5dhqUSP2DCksLnABjqkAf2VwzZF3VZNWI6pf0CEUtNHgfKx95jPBsvWBAncVyEYvgM%2FyUaPJFiCozrMghLkvLXAvMthNza%2BQj%2BgPhOFcpJdIyM9mIG%2BTLC2O9ALUDE9RMEKWwQ3yTMo9glAlwywZoPmypRoZDnvnHz1y30kOX7Jvxz01sGMJov6%2Fl5hwax%2F3EvfEK%2BsLxVkq336Q4f8RbCpt7cvkecBkGFhnU17mz4eypkK&X-Amz-Signature=97b74fd5232bfb23fc94d18ade6977bd5c319871bb750934118c3235c017e06e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOOT4EP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLj5Z6%2Ft%2B1%2BkjBnHkPPGFl8njha0tiqmti2b8i6M7%2FngIhANiGJLndNbvuW8KUV%2FlSeNfGRo79T%2FMuoqQIeNG85QD%2FKv8DCGEQABoMNjM3NDIzMTgzODA1IgyYIZuObYc3mSCiFbgq3ANBXTBe5x59Li%2BNOtVZGdQHstzWdZetpINswbKlVPFlwadQE2oHY6aj2VtHxd3yaU%2FnwvY4n0Cxd4K7v0KCpgFLye8iQ9qcKBb5Bn01WI8mnW6kP%2FBSubKYTMvNzQMsEfNc3lHVpW6FPpIycq1YOaHaCRhS8kGJ25fNV9UJjcyZuwYUykP%2BuhMTOoEeIokxmWnGldjK6QWmJu364RwKFyayu6pKM9qG9fE2jXLK%2BCt7GHu%2F54qJa%2ByDgIHnYpjWUU556sLUcwGCbCidSo6Th6N0ghI7NxQlPoDFsFsz%2FbPvu5TjLESmKFuJKiXdWbxWDLDxdR0h27zpWlKJZMs8RHQfUWgBOvABLBUyFojEeCVlw6aPNHS00MFyxJ3VnzQyp1dXArYPFtE3sE%2BV0VhTbX23oTep9t9KQdHq9ik0ddm4ssQBN5e4C5tpI3T%2FgqUT%2FQux84%2BgBh8ZQjWr4BZLWWGzslN%2FsI6DAWvIf4M5n7XDaGfnlRzFLOKyMOLI4SwG0o0ycPVmb5tOeoxudfYjCcrm0PzuS20Vfy8i1ioDP5B%2B2eLj8rSaHB%2Bio7sE73viq23nQ9T1b8J%2BJQjKIgCWQ7S7jScrrwKdcNy8%2BXGRe1CLj8QU%2BW%2F%2FT5dhqUSP2DCksLnABjqkAf2VwzZF3VZNWI6pf0CEUtNHgfKx95jPBsvWBAncVyEYvgM%2FyUaPJFiCozrMghLkvLXAvMthNza%2BQj%2BgPhOFcpJdIyM9mIG%2BTLC2O9ALUDE9RMEKWwQ3yTMo9glAlwywZoPmypRoZDnvnHz1y30kOX7Jvxz01sGMJov6%2Fl5hwax%2F3EvfEK%2BsLxVkq336Q4f8RbCpt7cvkecBkGFhnU17mz4eypkK&X-Amz-Signature=a618f006fb56e3630c7940e309818cb207a41abbee02ee4a65f6099ffdf7dbc9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
