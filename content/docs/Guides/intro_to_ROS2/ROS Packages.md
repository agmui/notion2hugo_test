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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP46VTQQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDJorrp0MRF5nXr7wcywEskkJOJYBcougyEHIWpoPnbCwIhAP9Z7RG2uOfY6%2FQvCFGuVOqLucSQ7yQlihYDSXMpg%2Fe6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzWBOd0NO%2F4uYK6MNUq3AOZUaePjOzevwc%2BMHpcphcWh6NNOZwi4EJY4E16t6Xn1n1CJjhDTmLZ%2Fpafl4ADz2RJFOT2SdNAQcKzGdHGU6aRVVIFQ5uv8rT24vE344skS3EGxb6pX2C6u93DP6ZoQnFzxp3Po0D2%2BiUmREDnzNXk9mT9S6uiJgM%2B77EGZTvzi4ifUb5aWrALJIHF%2BbBfq%2FiJr9pxULAyM2vGICYZHffv1dZdjo584S67aXio%2BEEqjDgsbpbrPQj%2BjUHiAVqSXKIYZzOyKBmbNUu%2FhFZInXf33bB7baQ0vijG%2BWtzXlZYuIXScYzjH8ngdcLbB0iaNZMQc12dr0arIT6MMn0ZP0cbWJOduVBp%2Fe3S%2FuAvJYaivSM%2BCQzNU5Qv72NLyvaMk%2BfTYLC%2Ffi6htQEQi9hpEsuyvvIIqBjWL%2Fhss2WUXKFEuY1rOS2rtBMvs%2FhCVs0xASQ1UofuuG%2FaJ3E%2B7wo5amrpd4gzK0v6NvtSkVNIQIfnz9tOIknPXkXme0yQwvC0Iq1lmLm27UJ7lISXWiISwGrxTl9KwMAscJ5kkU5fN1z3Nyw%2Bt11PD7DvZkqJVR0tCaC4YOypYmxUEg%2BAifOEzwOoBi5TxzcuemY%2Bo0kINWsOeJ7K0ZWwG1SBuJ2lOzCfuZS9BjqkAQYMbvh1XoKaXS0u2m9lBbK80ybNjGUj6BrVGPK4www8sH9FckYkVyXWKacILE2hJgi%2FyxWDLSUWh9JZn%2FADzNzXW%2FVXcM1hhuk%2BFP%2F9dOJPAbZ6BupLBSzEJx0tsKkh6CIc8S5HoMEC7Ht%2BDV6lW7UXsyCDFv73OX1mbwNuPrJFgARDl06GJ3F059jb7W3XmIP5dpdolbjHn%2B3L5EiyX2vHD6UJ&X-Amz-Signature=bddbaf1c353a79141b897f7656f427bf5d80f605f3c9cc6e73a3e261075ca9c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP46VTQQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDJorrp0MRF5nXr7wcywEskkJOJYBcougyEHIWpoPnbCwIhAP9Z7RG2uOfY6%2FQvCFGuVOqLucSQ7yQlihYDSXMpg%2Fe6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzWBOd0NO%2F4uYK6MNUq3AOZUaePjOzevwc%2BMHpcphcWh6NNOZwi4EJY4E16t6Xn1n1CJjhDTmLZ%2Fpafl4ADz2RJFOT2SdNAQcKzGdHGU6aRVVIFQ5uv8rT24vE344skS3EGxb6pX2C6u93DP6ZoQnFzxp3Po0D2%2BiUmREDnzNXk9mT9S6uiJgM%2B77EGZTvzi4ifUb5aWrALJIHF%2BbBfq%2FiJr9pxULAyM2vGICYZHffv1dZdjo584S67aXio%2BEEqjDgsbpbrPQj%2BjUHiAVqSXKIYZzOyKBmbNUu%2FhFZInXf33bB7baQ0vijG%2BWtzXlZYuIXScYzjH8ngdcLbB0iaNZMQc12dr0arIT6MMn0ZP0cbWJOduVBp%2Fe3S%2FuAvJYaivSM%2BCQzNU5Qv72NLyvaMk%2BfTYLC%2Ffi6htQEQi9hpEsuyvvIIqBjWL%2Fhss2WUXKFEuY1rOS2rtBMvs%2FhCVs0xASQ1UofuuG%2FaJ3E%2B7wo5amrpd4gzK0v6NvtSkVNIQIfnz9tOIknPXkXme0yQwvC0Iq1lmLm27UJ7lISXWiISwGrxTl9KwMAscJ5kkU5fN1z3Nyw%2Bt11PD7DvZkqJVR0tCaC4YOypYmxUEg%2BAifOEzwOoBi5TxzcuemY%2Bo0kINWsOeJ7K0ZWwG1SBuJ2lOzCfuZS9BjqkAQYMbvh1XoKaXS0u2m9lBbK80ybNjGUj6BrVGPK4www8sH9FckYkVyXWKacILE2hJgi%2FyxWDLSUWh9JZn%2FADzNzXW%2FVXcM1hhuk%2BFP%2F9dOJPAbZ6BupLBSzEJx0tsKkh6CIc8S5HoMEC7Ht%2BDV6lW7UXsyCDFv73OX1mbwNuPrJFgARDl06GJ3F059jb7W3XmIP5dpdolbjHn%2B3L5EiyX2vHD6UJ&X-Amz-Signature=a02c8122bec89da3094cb50ef98a2b36c2f6d8b49dbe7fe2a2e8c9ee56f6f1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP46VTQQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDJorrp0MRF5nXr7wcywEskkJOJYBcougyEHIWpoPnbCwIhAP9Z7RG2uOfY6%2FQvCFGuVOqLucSQ7yQlihYDSXMpg%2Fe6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzWBOd0NO%2F4uYK6MNUq3AOZUaePjOzevwc%2BMHpcphcWh6NNOZwi4EJY4E16t6Xn1n1CJjhDTmLZ%2Fpafl4ADz2RJFOT2SdNAQcKzGdHGU6aRVVIFQ5uv8rT24vE344skS3EGxb6pX2C6u93DP6ZoQnFzxp3Po0D2%2BiUmREDnzNXk9mT9S6uiJgM%2B77EGZTvzi4ifUb5aWrALJIHF%2BbBfq%2FiJr9pxULAyM2vGICYZHffv1dZdjo584S67aXio%2BEEqjDgsbpbrPQj%2BjUHiAVqSXKIYZzOyKBmbNUu%2FhFZInXf33bB7baQ0vijG%2BWtzXlZYuIXScYzjH8ngdcLbB0iaNZMQc12dr0arIT6MMn0ZP0cbWJOduVBp%2Fe3S%2FuAvJYaivSM%2BCQzNU5Qv72NLyvaMk%2BfTYLC%2Ffi6htQEQi9hpEsuyvvIIqBjWL%2Fhss2WUXKFEuY1rOS2rtBMvs%2FhCVs0xASQ1UofuuG%2FaJ3E%2B7wo5amrpd4gzK0v6NvtSkVNIQIfnz9tOIknPXkXme0yQwvC0Iq1lmLm27UJ7lISXWiISwGrxTl9KwMAscJ5kkU5fN1z3Nyw%2Bt11PD7DvZkqJVR0tCaC4YOypYmxUEg%2BAifOEzwOoBi5TxzcuemY%2Bo0kINWsOeJ7K0ZWwG1SBuJ2lOzCfuZS9BjqkAQYMbvh1XoKaXS0u2m9lBbK80ybNjGUj6BrVGPK4www8sH9FckYkVyXWKacILE2hJgi%2FyxWDLSUWh9JZn%2FADzNzXW%2FVXcM1hhuk%2BFP%2F9dOJPAbZ6BupLBSzEJx0tsKkh6CIc8S5HoMEC7Ht%2BDV6lW7UXsyCDFv73OX1mbwNuPrJFgARDl06GJ3F059jb7W3XmIP5dpdolbjHn%2B3L5EiyX2vHD6UJ&X-Amz-Signature=ac68fb82d975080694fe8eb987f9378b435dd6aa1f3d4804b3f1b3e94c9c727c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP46VTQQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDJorrp0MRF5nXr7wcywEskkJOJYBcougyEHIWpoPnbCwIhAP9Z7RG2uOfY6%2FQvCFGuVOqLucSQ7yQlihYDSXMpg%2Fe6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzWBOd0NO%2F4uYK6MNUq3AOZUaePjOzevwc%2BMHpcphcWh6NNOZwi4EJY4E16t6Xn1n1CJjhDTmLZ%2Fpafl4ADz2RJFOT2SdNAQcKzGdHGU6aRVVIFQ5uv8rT24vE344skS3EGxb6pX2C6u93DP6ZoQnFzxp3Po0D2%2BiUmREDnzNXk9mT9S6uiJgM%2B77EGZTvzi4ifUb5aWrALJIHF%2BbBfq%2FiJr9pxULAyM2vGICYZHffv1dZdjo584S67aXio%2BEEqjDgsbpbrPQj%2BjUHiAVqSXKIYZzOyKBmbNUu%2FhFZInXf33bB7baQ0vijG%2BWtzXlZYuIXScYzjH8ngdcLbB0iaNZMQc12dr0arIT6MMn0ZP0cbWJOduVBp%2Fe3S%2FuAvJYaivSM%2BCQzNU5Qv72NLyvaMk%2BfTYLC%2Ffi6htQEQi9hpEsuyvvIIqBjWL%2Fhss2WUXKFEuY1rOS2rtBMvs%2FhCVs0xASQ1UofuuG%2FaJ3E%2B7wo5amrpd4gzK0v6NvtSkVNIQIfnz9tOIknPXkXme0yQwvC0Iq1lmLm27UJ7lISXWiISwGrxTl9KwMAscJ5kkU5fN1z3Nyw%2Bt11PD7DvZkqJVR0tCaC4YOypYmxUEg%2BAifOEzwOoBi5TxzcuemY%2Bo0kINWsOeJ7K0ZWwG1SBuJ2lOzCfuZS9BjqkAQYMbvh1XoKaXS0u2m9lBbK80ybNjGUj6BrVGPK4www8sH9FckYkVyXWKacILE2hJgi%2FyxWDLSUWh9JZn%2FADzNzXW%2FVXcM1hhuk%2BFP%2F9dOJPAbZ6BupLBSzEJx0tsKkh6CIc8S5HoMEC7Ht%2BDV6lW7UXsyCDFv73OX1mbwNuPrJFgARDl06GJ3F059jb7W3XmIP5dpdolbjHn%2B3L5EiyX2vHD6UJ&X-Amz-Signature=342cd4a8c452b6685bbd2e3d94224227edcce74d396ebd229016cc7b6cf6199d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP46VTQQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDJorrp0MRF5nXr7wcywEskkJOJYBcougyEHIWpoPnbCwIhAP9Z7RG2uOfY6%2FQvCFGuVOqLucSQ7yQlihYDSXMpg%2Fe6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzWBOd0NO%2F4uYK6MNUq3AOZUaePjOzevwc%2BMHpcphcWh6NNOZwi4EJY4E16t6Xn1n1CJjhDTmLZ%2Fpafl4ADz2RJFOT2SdNAQcKzGdHGU6aRVVIFQ5uv8rT24vE344skS3EGxb6pX2C6u93DP6ZoQnFzxp3Po0D2%2BiUmREDnzNXk9mT9S6uiJgM%2B77EGZTvzi4ifUb5aWrALJIHF%2BbBfq%2FiJr9pxULAyM2vGICYZHffv1dZdjo584S67aXio%2BEEqjDgsbpbrPQj%2BjUHiAVqSXKIYZzOyKBmbNUu%2FhFZInXf33bB7baQ0vijG%2BWtzXlZYuIXScYzjH8ngdcLbB0iaNZMQc12dr0arIT6MMn0ZP0cbWJOduVBp%2Fe3S%2FuAvJYaivSM%2BCQzNU5Qv72NLyvaMk%2BfTYLC%2Ffi6htQEQi9hpEsuyvvIIqBjWL%2Fhss2WUXKFEuY1rOS2rtBMvs%2FhCVs0xASQ1UofuuG%2FaJ3E%2B7wo5amrpd4gzK0v6NvtSkVNIQIfnz9tOIknPXkXme0yQwvC0Iq1lmLm27UJ7lISXWiISwGrxTl9KwMAscJ5kkU5fN1z3Nyw%2Bt11PD7DvZkqJVR0tCaC4YOypYmxUEg%2BAifOEzwOoBi5TxzcuemY%2Bo0kINWsOeJ7K0ZWwG1SBuJ2lOzCfuZS9BjqkAQYMbvh1XoKaXS0u2m9lBbK80ybNjGUj6BrVGPK4www8sH9FckYkVyXWKacILE2hJgi%2FyxWDLSUWh9JZn%2FADzNzXW%2FVXcM1hhuk%2BFP%2F9dOJPAbZ6BupLBSzEJx0tsKkh6CIc8S5HoMEC7Ht%2BDV6lW7UXsyCDFv73OX1mbwNuPrJFgARDl06GJ3F059jb7W3XmIP5dpdolbjHn%2B3L5EiyX2vHD6UJ&X-Amz-Signature=79164304f8a372e7065089ec93f1e29b9674f5fb4af2ac6a8670be8334b6c3a1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP46VTQQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDJorrp0MRF5nXr7wcywEskkJOJYBcougyEHIWpoPnbCwIhAP9Z7RG2uOfY6%2FQvCFGuVOqLucSQ7yQlihYDSXMpg%2Fe6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzWBOd0NO%2F4uYK6MNUq3AOZUaePjOzevwc%2BMHpcphcWh6NNOZwi4EJY4E16t6Xn1n1CJjhDTmLZ%2Fpafl4ADz2RJFOT2SdNAQcKzGdHGU6aRVVIFQ5uv8rT24vE344skS3EGxb6pX2C6u93DP6ZoQnFzxp3Po0D2%2BiUmREDnzNXk9mT9S6uiJgM%2B77EGZTvzi4ifUb5aWrALJIHF%2BbBfq%2FiJr9pxULAyM2vGICYZHffv1dZdjo584S67aXio%2BEEqjDgsbpbrPQj%2BjUHiAVqSXKIYZzOyKBmbNUu%2FhFZInXf33bB7baQ0vijG%2BWtzXlZYuIXScYzjH8ngdcLbB0iaNZMQc12dr0arIT6MMn0ZP0cbWJOduVBp%2Fe3S%2FuAvJYaivSM%2BCQzNU5Qv72NLyvaMk%2BfTYLC%2Ffi6htQEQi9hpEsuyvvIIqBjWL%2Fhss2WUXKFEuY1rOS2rtBMvs%2FhCVs0xASQ1UofuuG%2FaJ3E%2B7wo5amrpd4gzK0v6NvtSkVNIQIfnz9tOIknPXkXme0yQwvC0Iq1lmLm27UJ7lISXWiISwGrxTl9KwMAscJ5kkU5fN1z3Nyw%2Bt11PD7DvZkqJVR0tCaC4YOypYmxUEg%2BAifOEzwOoBi5TxzcuemY%2Bo0kINWsOeJ7K0ZWwG1SBuJ2lOzCfuZS9BjqkAQYMbvh1XoKaXS0u2m9lBbK80ybNjGUj6BrVGPK4www8sH9FckYkVyXWKacILE2hJgi%2FyxWDLSUWh9JZn%2FADzNzXW%2FVXcM1hhuk%2BFP%2F9dOJPAbZ6BupLBSzEJx0tsKkh6CIc8S5HoMEC7Ht%2BDV6lW7UXsyCDFv73OX1mbwNuPrJFgARDl06GJ3F059jb7W3XmIP5dpdolbjHn%2B3L5EiyX2vHD6UJ&X-Amz-Signature=6fb9e12a0f1c97f98a74f4f2a944ef4bc165f5bc9dd336b4de606839562b8e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP46VTQQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDJorrp0MRF5nXr7wcywEskkJOJYBcougyEHIWpoPnbCwIhAP9Z7RG2uOfY6%2FQvCFGuVOqLucSQ7yQlihYDSXMpg%2Fe6Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzWBOd0NO%2F4uYK6MNUq3AOZUaePjOzevwc%2BMHpcphcWh6NNOZwi4EJY4E16t6Xn1n1CJjhDTmLZ%2Fpafl4ADz2RJFOT2SdNAQcKzGdHGU6aRVVIFQ5uv8rT24vE344skS3EGxb6pX2C6u93DP6ZoQnFzxp3Po0D2%2BiUmREDnzNXk9mT9S6uiJgM%2B77EGZTvzi4ifUb5aWrALJIHF%2BbBfq%2FiJr9pxULAyM2vGICYZHffv1dZdjo584S67aXio%2BEEqjDgsbpbrPQj%2BjUHiAVqSXKIYZzOyKBmbNUu%2FhFZInXf33bB7baQ0vijG%2BWtzXlZYuIXScYzjH8ngdcLbB0iaNZMQc12dr0arIT6MMn0ZP0cbWJOduVBp%2Fe3S%2FuAvJYaivSM%2BCQzNU5Qv72NLyvaMk%2BfTYLC%2Ffi6htQEQi9hpEsuyvvIIqBjWL%2Fhss2WUXKFEuY1rOS2rtBMvs%2FhCVs0xASQ1UofuuG%2FaJ3E%2B7wo5amrpd4gzK0v6NvtSkVNIQIfnz9tOIknPXkXme0yQwvC0Iq1lmLm27UJ7lISXWiISwGrxTl9KwMAscJ5kkU5fN1z3Nyw%2Bt11PD7DvZkqJVR0tCaC4YOypYmxUEg%2BAifOEzwOoBi5TxzcuemY%2Bo0kINWsOeJ7K0ZWwG1SBuJ2lOzCfuZS9BjqkAQYMbvh1XoKaXS0u2m9lBbK80ybNjGUj6BrVGPK4www8sH9FckYkVyXWKacILE2hJgi%2FyxWDLSUWh9JZn%2FADzNzXW%2FVXcM1hhuk%2BFP%2F9dOJPAbZ6BupLBSzEJx0tsKkh6CIc8S5HoMEC7Ht%2BDV6lW7UXsyCDFv73OX1mbwNuPrJFgARDl06GJ3F059jb7W3XmIP5dpdolbjHn%2B3L5EiyX2vHD6UJ&X-Amz-Signature=1deb9741e6124811440dae2cd982fadd9e814f3f1690558a0f0a8fcf296aa24b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
