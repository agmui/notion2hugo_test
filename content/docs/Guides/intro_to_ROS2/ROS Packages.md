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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJLEYHU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDzqyJAVUYItpj16jqHc7mO9PSp%2BwUlejjupU8qBFdCeAiEA11VJ6MxrFLJauB5hXKCUFuSa%2BNnkb0zguwcVtPrxLdoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJD1KrD9MnRIqUQrSrcA1mwISntYjGhDsCVokDPHqHDTEYGy%2B5WQeXL9f38GASbzQrsFNla%2FymsoyGfREAxEaqFxkl1pHvwRoK2QWLQxMDk2%2FWelztmNGtE3VNAFgFPofNK%2B%2BXre4avhQaoV2C4Rn0bCQaW0YyS5FyjgXShsHU3jg0vOgt5h094OIyAGjoxvaUIUxESq7BJrppw8Nu3rLt4dq5vcn%2BpwIRg180Yk4oqm4Y%2Bnt4LhJSk4PM4vkOvVKObn9DUcwYbD5kL0O%2BSTQezylUuBUGHN8YNY1k3QLyxYLFRlogHxlMUjaKXst02x0NIcYqKsA6UBQkT3B275qZ1%2Fae8goqf2vyG%2BxCTO96bfAInDb5UcHzzs6%2BHe2t2Yxc8UGWJ8o0plgjHuOKxvNWJAv6abWToIDob3iYKThPptKSuU4jHVSfK3QqU4hyk6OJG54QNwI86qoZudnBEx13pW0ufFe6Rwenoz%2BvGrFkPcTReT%2FwpdYPpmpGZVzBVS7Laq56gXMrD20H9%2B%2FSETXPXwtyx8c7RLk9LOk0mgrwM6BYebdGh251vrpHcDnZYR6RTWQkyxjO%2FAQ38hNl94q4dGOgzIToKYS%2B5vavJK5vDNDqYELQMIAIBd%2BwiO7gJWOcksHDzCoG%2FKQPBMOGg18AGOqUBH%2FnoS393v4KxkCymnsvVIn2ECzczLQFbju%2FDe1%2Bilek%2FjqgV%2FL8oIom3Fmn8L%2Fqg7wNZJe%2B2OuzJL0oFvizi3H%2FO3NRclXeuF80%2BVQToekeuW1H%2BNlcX8eTxI46hyBRDLGcf9vFJWyJvAOPUtOUe%2FmxwkagcIOJ29NE0poHk%2FrwEdoWhA2eXIxM3qbEOvuqiTNHhftIK38pj9q8amXSeVkHR%2FqAf&X-Amz-Signature=e1bb08eb63e649467a8f2e2aa4dc7604e6c0bacbaa76f33782620c61a2e4a8bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJLEYHU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDzqyJAVUYItpj16jqHc7mO9PSp%2BwUlejjupU8qBFdCeAiEA11VJ6MxrFLJauB5hXKCUFuSa%2BNnkb0zguwcVtPrxLdoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJD1KrD9MnRIqUQrSrcA1mwISntYjGhDsCVokDPHqHDTEYGy%2B5WQeXL9f38GASbzQrsFNla%2FymsoyGfREAxEaqFxkl1pHvwRoK2QWLQxMDk2%2FWelztmNGtE3VNAFgFPofNK%2B%2BXre4avhQaoV2C4Rn0bCQaW0YyS5FyjgXShsHU3jg0vOgt5h094OIyAGjoxvaUIUxESq7BJrppw8Nu3rLt4dq5vcn%2BpwIRg180Yk4oqm4Y%2Bnt4LhJSk4PM4vkOvVKObn9DUcwYbD5kL0O%2BSTQezylUuBUGHN8YNY1k3QLyxYLFRlogHxlMUjaKXst02x0NIcYqKsA6UBQkT3B275qZ1%2Fae8goqf2vyG%2BxCTO96bfAInDb5UcHzzs6%2BHe2t2Yxc8UGWJ8o0plgjHuOKxvNWJAv6abWToIDob3iYKThPptKSuU4jHVSfK3QqU4hyk6OJG54QNwI86qoZudnBEx13pW0ufFe6Rwenoz%2BvGrFkPcTReT%2FwpdYPpmpGZVzBVS7Laq56gXMrD20H9%2B%2FSETXPXwtyx8c7RLk9LOk0mgrwM6BYebdGh251vrpHcDnZYR6RTWQkyxjO%2FAQ38hNl94q4dGOgzIToKYS%2B5vavJK5vDNDqYELQMIAIBd%2BwiO7gJWOcksHDzCoG%2FKQPBMOGg18AGOqUBH%2FnoS393v4KxkCymnsvVIn2ECzczLQFbju%2FDe1%2Bilek%2FjqgV%2FL8oIom3Fmn8L%2Fqg7wNZJe%2B2OuzJL0oFvizi3H%2FO3NRclXeuF80%2BVQToekeuW1H%2BNlcX8eTxI46hyBRDLGcf9vFJWyJvAOPUtOUe%2FmxwkagcIOJ29NE0poHk%2FrwEdoWhA2eXIxM3qbEOvuqiTNHhftIK38pj9q8amXSeVkHR%2FqAf&X-Amz-Signature=8d1ddbb4266bbe5aa2ec7a47c85421878d9e8c790af4aefffae27924285688fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJLEYHU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDzqyJAVUYItpj16jqHc7mO9PSp%2BwUlejjupU8qBFdCeAiEA11VJ6MxrFLJauB5hXKCUFuSa%2BNnkb0zguwcVtPrxLdoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJD1KrD9MnRIqUQrSrcA1mwISntYjGhDsCVokDPHqHDTEYGy%2B5WQeXL9f38GASbzQrsFNla%2FymsoyGfREAxEaqFxkl1pHvwRoK2QWLQxMDk2%2FWelztmNGtE3VNAFgFPofNK%2B%2BXre4avhQaoV2C4Rn0bCQaW0YyS5FyjgXShsHU3jg0vOgt5h094OIyAGjoxvaUIUxESq7BJrppw8Nu3rLt4dq5vcn%2BpwIRg180Yk4oqm4Y%2Bnt4LhJSk4PM4vkOvVKObn9DUcwYbD5kL0O%2BSTQezylUuBUGHN8YNY1k3QLyxYLFRlogHxlMUjaKXst02x0NIcYqKsA6UBQkT3B275qZ1%2Fae8goqf2vyG%2BxCTO96bfAInDb5UcHzzs6%2BHe2t2Yxc8UGWJ8o0plgjHuOKxvNWJAv6abWToIDob3iYKThPptKSuU4jHVSfK3QqU4hyk6OJG54QNwI86qoZudnBEx13pW0ufFe6Rwenoz%2BvGrFkPcTReT%2FwpdYPpmpGZVzBVS7Laq56gXMrD20H9%2B%2FSETXPXwtyx8c7RLk9LOk0mgrwM6BYebdGh251vrpHcDnZYR6RTWQkyxjO%2FAQ38hNl94q4dGOgzIToKYS%2B5vavJK5vDNDqYELQMIAIBd%2BwiO7gJWOcksHDzCoG%2FKQPBMOGg18AGOqUBH%2FnoS393v4KxkCymnsvVIn2ECzczLQFbju%2FDe1%2Bilek%2FjqgV%2FL8oIom3Fmn8L%2Fqg7wNZJe%2B2OuzJL0oFvizi3H%2FO3NRclXeuF80%2BVQToekeuW1H%2BNlcX8eTxI46hyBRDLGcf9vFJWyJvAOPUtOUe%2FmxwkagcIOJ29NE0poHk%2FrwEdoWhA2eXIxM3qbEOvuqiTNHhftIK38pj9q8amXSeVkHR%2FqAf&X-Amz-Signature=0f312b1f747e73116c6f6d803bb798289e6e894e5e786e7830ba85089783b02d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJLEYHU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDzqyJAVUYItpj16jqHc7mO9PSp%2BwUlejjupU8qBFdCeAiEA11VJ6MxrFLJauB5hXKCUFuSa%2BNnkb0zguwcVtPrxLdoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJD1KrD9MnRIqUQrSrcA1mwISntYjGhDsCVokDPHqHDTEYGy%2B5WQeXL9f38GASbzQrsFNla%2FymsoyGfREAxEaqFxkl1pHvwRoK2QWLQxMDk2%2FWelztmNGtE3VNAFgFPofNK%2B%2BXre4avhQaoV2C4Rn0bCQaW0YyS5FyjgXShsHU3jg0vOgt5h094OIyAGjoxvaUIUxESq7BJrppw8Nu3rLt4dq5vcn%2BpwIRg180Yk4oqm4Y%2Bnt4LhJSk4PM4vkOvVKObn9DUcwYbD5kL0O%2BSTQezylUuBUGHN8YNY1k3QLyxYLFRlogHxlMUjaKXst02x0NIcYqKsA6UBQkT3B275qZ1%2Fae8goqf2vyG%2BxCTO96bfAInDb5UcHzzs6%2BHe2t2Yxc8UGWJ8o0plgjHuOKxvNWJAv6abWToIDob3iYKThPptKSuU4jHVSfK3QqU4hyk6OJG54QNwI86qoZudnBEx13pW0ufFe6Rwenoz%2BvGrFkPcTReT%2FwpdYPpmpGZVzBVS7Laq56gXMrD20H9%2B%2FSETXPXwtyx8c7RLk9LOk0mgrwM6BYebdGh251vrpHcDnZYR6RTWQkyxjO%2FAQ38hNl94q4dGOgzIToKYS%2B5vavJK5vDNDqYELQMIAIBd%2BwiO7gJWOcksHDzCoG%2FKQPBMOGg18AGOqUBH%2FnoS393v4KxkCymnsvVIn2ECzczLQFbju%2FDe1%2Bilek%2FjqgV%2FL8oIom3Fmn8L%2Fqg7wNZJe%2B2OuzJL0oFvizi3H%2FO3NRclXeuF80%2BVQToekeuW1H%2BNlcX8eTxI46hyBRDLGcf9vFJWyJvAOPUtOUe%2FmxwkagcIOJ29NE0poHk%2FrwEdoWhA2eXIxM3qbEOvuqiTNHhftIK38pj9q8amXSeVkHR%2FqAf&X-Amz-Signature=1265bf99b0e945d6de4e6cc8b2de58521f1da2ac883fa4f0bf553aa9749e82ef&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJLEYHU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDzqyJAVUYItpj16jqHc7mO9PSp%2BwUlejjupU8qBFdCeAiEA11VJ6MxrFLJauB5hXKCUFuSa%2BNnkb0zguwcVtPrxLdoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJD1KrD9MnRIqUQrSrcA1mwISntYjGhDsCVokDPHqHDTEYGy%2B5WQeXL9f38GASbzQrsFNla%2FymsoyGfREAxEaqFxkl1pHvwRoK2QWLQxMDk2%2FWelztmNGtE3VNAFgFPofNK%2B%2BXre4avhQaoV2C4Rn0bCQaW0YyS5FyjgXShsHU3jg0vOgt5h094OIyAGjoxvaUIUxESq7BJrppw8Nu3rLt4dq5vcn%2BpwIRg180Yk4oqm4Y%2Bnt4LhJSk4PM4vkOvVKObn9DUcwYbD5kL0O%2BSTQezylUuBUGHN8YNY1k3QLyxYLFRlogHxlMUjaKXst02x0NIcYqKsA6UBQkT3B275qZ1%2Fae8goqf2vyG%2BxCTO96bfAInDb5UcHzzs6%2BHe2t2Yxc8UGWJ8o0plgjHuOKxvNWJAv6abWToIDob3iYKThPptKSuU4jHVSfK3QqU4hyk6OJG54QNwI86qoZudnBEx13pW0ufFe6Rwenoz%2BvGrFkPcTReT%2FwpdYPpmpGZVzBVS7Laq56gXMrD20H9%2B%2FSETXPXwtyx8c7RLk9LOk0mgrwM6BYebdGh251vrpHcDnZYR6RTWQkyxjO%2FAQ38hNl94q4dGOgzIToKYS%2B5vavJK5vDNDqYELQMIAIBd%2BwiO7gJWOcksHDzCoG%2FKQPBMOGg18AGOqUBH%2FnoS393v4KxkCymnsvVIn2ECzczLQFbju%2FDe1%2Bilek%2FjqgV%2FL8oIom3Fmn8L%2Fqg7wNZJe%2B2OuzJL0oFvizi3H%2FO3NRclXeuF80%2BVQToekeuW1H%2BNlcX8eTxI46hyBRDLGcf9vFJWyJvAOPUtOUe%2FmxwkagcIOJ29NE0poHk%2FrwEdoWhA2eXIxM3qbEOvuqiTNHhftIK38pj9q8amXSeVkHR%2FqAf&X-Amz-Signature=e115a3ab5d421031e68360b255bc589c27ec610ae1c63d90d614d701e67d2300&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJLEYHU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDzqyJAVUYItpj16jqHc7mO9PSp%2BwUlejjupU8qBFdCeAiEA11VJ6MxrFLJauB5hXKCUFuSa%2BNnkb0zguwcVtPrxLdoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJD1KrD9MnRIqUQrSrcA1mwISntYjGhDsCVokDPHqHDTEYGy%2B5WQeXL9f38GASbzQrsFNla%2FymsoyGfREAxEaqFxkl1pHvwRoK2QWLQxMDk2%2FWelztmNGtE3VNAFgFPofNK%2B%2BXre4avhQaoV2C4Rn0bCQaW0YyS5FyjgXShsHU3jg0vOgt5h094OIyAGjoxvaUIUxESq7BJrppw8Nu3rLt4dq5vcn%2BpwIRg180Yk4oqm4Y%2Bnt4LhJSk4PM4vkOvVKObn9DUcwYbD5kL0O%2BSTQezylUuBUGHN8YNY1k3QLyxYLFRlogHxlMUjaKXst02x0NIcYqKsA6UBQkT3B275qZ1%2Fae8goqf2vyG%2BxCTO96bfAInDb5UcHzzs6%2BHe2t2Yxc8UGWJ8o0plgjHuOKxvNWJAv6abWToIDob3iYKThPptKSuU4jHVSfK3QqU4hyk6OJG54QNwI86qoZudnBEx13pW0ufFe6Rwenoz%2BvGrFkPcTReT%2FwpdYPpmpGZVzBVS7Laq56gXMrD20H9%2B%2FSETXPXwtyx8c7RLk9LOk0mgrwM6BYebdGh251vrpHcDnZYR6RTWQkyxjO%2FAQ38hNl94q4dGOgzIToKYS%2B5vavJK5vDNDqYELQMIAIBd%2BwiO7gJWOcksHDzCoG%2FKQPBMOGg18AGOqUBH%2FnoS393v4KxkCymnsvVIn2ECzczLQFbju%2FDe1%2Bilek%2FjqgV%2FL8oIom3Fmn8L%2Fqg7wNZJe%2B2OuzJL0oFvizi3H%2FO3NRclXeuF80%2BVQToekeuW1H%2BNlcX8eTxI46hyBRDLGcf9vFJWyJvAOPUtOUe%2FmxwkagcIOJ29NE0poHk%2FrwEdoWhA2eXIxM3qbEOvuqiTNHhftIK38pj9q8amXSeVkHR%2FqAf&X-Amz-Signature=07d110b5811e1ea1be20b04e2d9b687d9912fa5df247fa203faa461c3b9d2c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJLEYHU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDzqyJAVUYItpj16jqHc7mO9PSp%2BwUlejjupU8qBFdCeAiEA11VJ6MxrFLJauB5hXKCUFuSa%2BNnkb0zguwcVtPrxLdoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJD1KrD9MnRIqUQrSrcA1mwISntYjGhDsCVokDPHqHDTEYGy%2B5WQeXL9f38GASbzQrsFNla%2FymsoyGfREAxEaqFxkl1pHvwRoK2QWLQxMDk2%2FWelztmNGtE3VNAFgFPofNK%2B%2BXre4avhQaoV2C4Rn0bCQaW0YyS5FyjgXShsHU3jg0vOgt5h094OIyAGjoxvaUIUxESq7BJrppw8Nu3rLt4dq5vcn%2BpwIRg180Yk4oqm4Y%2Bnt4LhJSk4PM4vkOvVKObn9DUcwYbD5kL0O%2BSTQezylUuBUGHN8YNY1k3QLyxYLFRlogHxlMUjaKXst02x0NIcYqKsA6UBQkT3B275qZ1%2Fae8goqf2vyG%2BxCTO96bfAInDb5UcHzzs6%2BHe2t2Yxc8UGWJ8o0plgjHuOKxvNWJAv6abWToIDob3iYKThPptKSuU4jHVSfK3QqU4hyk6OJG54QNwI86qoZudnBEx13pW0ufFe6Rwenoz%2BvGrFkPcTReT%2FwpdYPpmpGZVzBVS7Laq56gXMrD20H9%2B%2FSETXPXwtyx8c7RLk9LOk0mgrwM6BYebdGh251vrpHcDnZYR6RTWQkyxjO%2FAQ38hNl94q4dGOgzIToKYS%2B5vavJK5vDNDqYELQMIAIBd%2BwiO7gJWOcksHDzCoG%2FKQPBMOGg18AGOqUBH%2FnoS393v4KxkCymnsvVIn2ECzczLQFbju%2FDe1%2Bilek%2FjqgV%2FL8oIom3Fmn8L%2Fqg7wNZJe%2B2OuzJL0oFvizi3H%2FO3NRclXeuF80%2BVQToekeuW1H%2BNlcX8eTxI46hyBRDLGcf9vFJWyJvAOPUtOUe%2FmxwkagcIOJ29NE0poHk%2FrwEdoWhA2eXIxM3qbEOvuqiTNHhftIK38pj9q8amXSeVkHR%2FqAf&X-Amz-Signature=a618c4ed7395bb786e0eccf2a43d8dedaca36aa157f704b5a4536e1e4b69cb4c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
