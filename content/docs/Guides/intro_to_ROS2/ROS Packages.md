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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEGNZS4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIASThPQSWzbwY6JtihLFu%2FeEoO1nWnyHgNkB3p5IOP35AiEA%2Fxsk3cUo7fDjJf8Q5nnASjFsiWE0c52yRFMxC60MPj8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQbimqhqb5955kzIyrcA8KAmBesUCSi4a%2FnJgyISWxwU3iw5DLCy4g7ad13z%2BmgxDZ4mZEfJs8mXovxAaM%2F1dK3dofrvjnfUIh4zbApdbXxhagcal6rntCuilw%2B2kmId%2FN83IZUh4D9Ad8RtWjDkQigqNlDTOJxJpCMrnP68Cnr5LqeDpTWreDnfIsUf%2Br7koWUzHhOrd%2BK9jA%2BeQqVST%2Bmifcpkd%2BY4RWxS2eLPP5lVkRKFQpapfnzmcFw1hFRpJQi8RMMpD%2FiwfevjhqcmDEUOQ9ppjt2aunR9Grbn6AJ%2FqoklB4Pr59Oa9UHfJbjLNFfLnpD85z4yq5dl0yEsObTgHNwu3anPWz4yvzDILeUicrziVI7ss6jKJkhXsDmASPDrU497zvr%2F4IlnfXdriad28sUo%2B%2BoULBPWzcW%2Br0Sown7q6E9b%2BzIbnpfQBp1iGGAfoyPrxGy1Jzw9rACCjAzEyBJfAhH7sKmhn7DlTPX7T3ZuoiWvSEYihEb4YnGxVZ1F%2FA9RIninLR4aHqhU5sAauxMd7OsQXv6MFRllr4lcXCgx%2F4UJDVN1f%2FpswidQKpPj6y4eoIxKhZ6cBP8Hjb4wQNtKkMJgnjfkZBnK1a%2BqRbuOxZj75Sao7f5vKqTaDRPNvWJR6uiIfEDMIHXuMEGOqUB1UGPgcTvtoMnN1Bs25UOUxiQIR6w%2BGixUmvenNsksGe0pwgvFJowhDEC1VVe1H4uf4byZ2wkJnFlBrMhj%2FX8QJ6arovI2yrrFQ5EnyC%2BErpeE9IfnZkZz3y1jJRkHqX6lj%2BZn8c9WJlkQ82L2AajYkFbhLil9%2BwRETl89wTa2Ij3rkSQlRYkN6qggYAY8BAlD1XQMWT4Uv7CuBadZmUSkirSU3Oc&X-Amz-Signature=89c33856b5b71431206c70dc3908c021b5a219088b4a4c08024053183f393940&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEGNZS4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIASThPQSWzbwY6JtihLFu%2FeEoO1nWnyHgNkB3p5IOP35AiEA%2Fxsk3cUo7fDjJf8Q5nnASjFsiWE0c52yRFMxC60MPj8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQbimqhqb5955kzIyrcA8KAmBesUCSi4a%2FnJgyISWxwU3iw5DLCy4g7ad13z%2BmgxDZ4mZEfJs8mXovxAaM%2F1dK3dofrvjnfUIh4zbApdbXxhagcal6rntCuilw%2B2kmId%2FN83IZUh4D9Ad8RtWjDkQigqNlDTOJxJpCMrnP68Cnr5LqeDpTWreDnfIsUf%2Br7koWUzHhOrd%2BK9jA%2BeQqVST%2Bmifcpkd%2BY4RWxS2eLPP5lVkRKFQpapfnzmcFw1hFRpJQi8RMMpD%2FiwfevjhqcmDEUOQ9ppjt2aunR9Grbn6AJ%2FqoklB4Pr59Oa9UHfJbjLNFfLnpD85z4yq5dl0yEsObTgHNwu3anPWz4yvzDILeUicrziVI7ss6jKJkhXsDmASPDrU497zvr%2F4IlnfXdriad28sUo%2B%2BoULBPWzcW%2Br0Sown7q6E9b%2BzIbnpfQBp1iGGAfoyPrxGy1Jzw9rACCjAzEyBJfAhH7sKmhn7DlTPX7T3ZuoiWvSEYihEb4YnGxVZ1F%2FA9RIninLR4aHqhU5sAauxMd7OsQXv6MFRllr4lcXCgx%2F4UJDVN1f%2FpswidQKpPj6y4eoIxKhZ6cBP8Hjb4wQNtKkMJgnjfkZBnK1a%2BqRbuOxZj75Sao7f5vKqTaDRPNvWJR6uiIfEDMIHXuMEGOqUB1UGPgcTvtoMnN1Bs25UOUxiQIR6w%2BGixUmvenNsksGe0pwgvFJowhDEC1VVe1H4uf4byZ2wkJnFlBrMhj%2FX8QJ6arovI2yrrFQ5EnyC%2BErpeE9IfnZkZz3y1jJRkHqX6lj%2BZn8c9WJlkQ82L2AajYkFbhLil9%2BwRETl89wTa2Ij3rkSQlRYkN6qggYAY8BAlD1XQMWT4Uv7CuBadZmUSkirSU3Oc&X-Amz-Signature=d1dd5003b00ff23b3420309d6506c132466a4c559102af8cf53257926dbacfe9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEGNZS4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIASThPQSWzbwY6JtihLFu%2FeEoO1nWnyHgNkB3p5IOP35AiEA%2Fxsk3cUo7fDjJf8Q5nnASjFsiWE0c52yRFMxC60MPj8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQbimqhqb5955kzIyrcA8KAmBesUCSi4a%2FnJgyISWxwU3iw5DLCy4g7ad13z%2BmgxDZ4mZEfJs8mXovxAaM%2F1dK3dofrvjnfUIh4zbApdbXxhagcal6rntCuilw%2B2kmId%2FN83IZUh4D9Ad8RtWjDkQigqNlDTOJxJpCMrnP68Cnr5LqeDpTWreDnfIsUf%2Br7koWUzHhOrd%2BK9jA%2BeQqVST%2Bmifcpkd%2BY4RWxS2eLPP5lVkRKFQpapfnzmcFw1hFRpJQi8RMMpD%2FiwfevjhqcmDEUOQ9ppjt2aunR9Grbn6AJ%2FqoklB4Pr59Oa9UHfJbjLNFfLnpD85z4yq5dl0yEsObTgHNwu3anPWz4yvzDILeUicrziVI7ss6jKJkhXsDmASPDrU497zvr%2F4IlnfXdriad28sUo%2B%2BoULBPWzcW%2Br0Sown7q6E9b%2BzIbnpfQBp1iGGAfoyPrxGy1Jzw9rACCjAzEyBJfAhH7sKmhn7DlTPX7T3ZuoiWvSEYihEb4YnGxVZ1F%2FA9RIninLR4aHqhU5sAauxMd7OsQXv6MFRllr4lcXCgx%2F4UJDVN1f%2FpswidQKpPj6y4eoIxKhZ6cBP8Hjb4wQNtKkMJgnjfkZBnK1a%2BqRbuOxZj75Sao7f5vKqTaDRPNvWJR6uiIfEDMIHXuMEGOqUB1UGPgcTvtoMnN1Bs25UOUxiQIR6w%2BGixUmvenNsksGe0pwgvFJowhDEC1VVe1H4uf4byZ2wkJnFlBrMhj%2FX8QJ6arovI2yrrFQ5EnyC%2BErpeE9IfnZkZz3y1jJRkHqX6lj%2BZn8c9WJlkQ82L2AajYkFbhLil9%2BwRETl89wTa2Ij3rkSQlRYkN6qggYAY8BAlD1XQMWT4Uv7CuBadZmUSkirSU3Oc&X-Amz-Signature=5fcefe97248b7fb10bdef6dc3a0d36b707f85adcd3ef9421e6fa6b30d383224b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEGNZS4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIASThPQSWzbwY6JtihLFu%2FeEoO1nWnyHgNkB3p5IOP35AiEA%2Fxsk3cUo7fDjJf8Q5nnASjFsiWE0c52yRFMxC60MPj8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQbimqhqb5955kzIyrcA8KAmBesUCSi4a%2FnJgyISWxwU3iw5DLCy4g7ad13z%2BmgxDZ4mZEfJs8mXovxAaM%2F1dK3dofrvjnfUIh4zbApdbXxhagcal6rntCuilw%2B2kmId%2FN83IZUh4D9Ad8RtWjDkQigqNlDTOJxJpCMrnP68Cnr5LqeDpTWreDnfIsUf%2Br7koWUzHhOrd%2BK9jA%2BeQqVST%2Bmifcpkd%2BY4RWxS2eLPP5lVkRKFQpapfnzmcFw1hFRpJQi8RMMpD%2FiwfevjhqcmDEUOQ9ppjt2aunR9Grbn6AJ%2FqoklB4Pr59Oa9UHfJbjLNFfLnpD85z4yq5dl0yEsObTgHNwu3anPWz4yvzDILeUicrziVI7ss6jKJkhXsDmASPDrU497zvr%2F4IlnfXdriad28sUo%2B%2BoULBPWzcW%2Br0Sown7q6E9b%2BzIbnpfQBp1iGGAfoyPrxGy1Jzw9rACCjAzEyBJfAhH7sKmhn7DlTPX7T3ZuoiWvSEYihEb4YnGxVZ1F%2FA9RIninLR4aHqhU5sAauxMd7OsQXv6MFRllr4lcXCgx%2F4UJDVN1f%2FpswidQKpPj6y4eoIxKhZ6cBP8Hjb4wQNtKkMJgnjfkZBnK1a%2BqRbuOxZj75Sao7f5vKqTaDRPNvWJR6uiIfEDMIHXuMEGOqUB1UGPgcTvtoMnN1Bs25UOUxiQIR6w%2BGixUmvenNsksGe0pwgvFJowhDEC1VVe1H4uf4byZ2wkJnFlBrMhj%2FX8QJ6arovI2yrrFQ5EnyC%2BErpeE9IfnZkZz3y1jJRkHqX6lj%2BZn8c9WJlkQ82L2AajYkFbhLil9%2BwRETl89wTa2Ij3rkSQlRYkN6qggYAY8BAlD1XQMWT4Uv7CuBadZmUSkirSU3Oc&X-Amz-Signature=c8674b351568aa40c38274833a2847bdca062b11f22c466c5c0ab632effcdca4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEGNZS4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIASThPQSWzbwY6JtihLFu%2FeEoO1nWnyHgNkB3p5IOP35AiEA%2Fxsk3cUo7fDjJf8Q5nnASjFsiWE0c52yRFMxC60MPj8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQbimqhqb5955kzIyrcA8KAmBesUCSi4a%2FnJgyISWxwU3iw5DLCy4g7ad13z%2BmgxDZ4mZEfJs8mXovxAaM%2F1dK3dofrvjnfUIh4zbApdbXxhagcal6rntCuilw%2B2kmId%2FN83IZUh4D9Ad8RtWjDkQigqNlDTOJxJpCMrnP68Cnr5LqeDpTWreDnfIsUf%2Br7koWUzHhOrd%2BK9jA%2BeQqVST%2Bmifcpkd%2BY4RWxS2eLPP5lVkRKFQpapfnzmcFw1hFRpJQi8RMMpD%2FiwfevjhqcmDEUOQ9ppjt2aunR9Grbn6AJ%2FqoklB4Pr59Oa9UHfJbjLNFfLnpD85z4yq5dl0yEsObTgHNwu3anPWz4yvzDILeUicrziVI7ss6jKJkhXsDmASPDrU497zvr%2F4IlnfXdriad28sUo%2B%2BoULBPWzcW%2Br0Sown7q6E9b%2BzIbnpfQBp1iGGAfoyPrxGy1Jzw9rACCjAzEyBJfAhH7sKmhn7DlTPX7T3ZuoiWvSEYihEb4YnGxVZ1F%2FA9RIninLR4aHqhU5sAauxMd7OsQXv6MFRllr4lcXCgx%2F4UJDVN1f%2FpswidQKpPj6y4eoIxKhZ6cBP8Hjb4wQNtKkMJgnjfkZBnK1a%2BqRbuOxZj75Sao7f5vKqTaDRPNvWJR6uiIfEDMIHXuMEGOqUB1UGPgcTvtoMnN1Bs25UOUxiQIR6w%2BGixUmvenNsksGe0pwgvFJowhDEC1VVe1H4uf4byZ2wkJnFlBrMhj%2FX8QJ6arovI2yrrFQ5EnyC%2BErpeE9IfnZkZz3y1jJRkHqX6lj%2BZn8c9WJlkQ82L2AajYkFbhLil9%2BwRETl89wTa2Ij3rkSQlRYkN6qggYAY8BAlD1XQMWT4Uv7CuBadZmUSkirSU3Oc&X-Amz-Signature=c242ca542a8fd3474e53463734722fc8d3987c56a9a19d30f214e384d5ec3204&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEGNZS4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIASThPQSWzbwY6JtihLFu%2FeEoO1nWnyHgNkB3p5IOP35AiEA%2Fxsk3cUo7fDjJf8Q5nnASjFsiWE0c52yRFMxC60MPj8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQbimqhqb5955kzIyrcA8KAmBesUCSi4a%2FnJgyISWxwU3iw5DLCy4g7ad13z%2BmgxDZ4mZEfJs8mXovxAaM%2F1dK3dofrvjnfUIh4zbApdbXxhagcal6rntCuilw%2B2kmId%2FN83IZUh4D9Ad8RtWjDkQigqNlDTOJxJpCMrnP68Cnr5LqeDpTWreDnfIsUf%2Br7koWUzHhOrd%2BK9jA%2BeQqVST%2Bmifcpkd%2BY4RWxS2eLPP5lVkRKFQpapfnzmcFw1hFRpJQi8RMMpD%2FiwfevjhqcmDEUOQ9ppjt2aunR9Grbn6AJ%2FqoklB4Pr59Oa9UHfJbjLNFfLnpD85z4yq5dl0yEsObTgHNwu3anPWz4yvzDILeUicrziVI7ss6jKJkhXsDmASPDrU497zvr%2F4IlnfXdriad28sUo%2B%2BoULBPWzcW%2Br0Sown7q6E9b%2BzIbnpfQBp1iGGAfoyPrxGy1Jzw9rACCjAzEyBJfAhH7sKmhn7DlTPX7T3ZuoiWvSEYihEb4YnGxVZ1F%2FA9RIninLR4aHqhU5sAauxMd7OsQXv6MFRllr4lcXCgx%2F4UJDVN1f%2FpswidQKpPj6y4eoIxKhZ6cBP8Hjb4wQNtKkMJgnjfkZBnK1a%2BqRbuOxZj75Sao7f5vKqTaDRPNvWJR6uiIfEDMIHXuMEGOqUB1UGPgcTvtoMnN1Bs25UOUxiQIR6w%2BGixUmvenNsksGe0pwgvFJowhDEC1VVe1H4uf4byZ2wkJnFlBrMhj%2FX8QJ6arovI2yrrFQ5EnyC%2BErpeE9IfnZkZz3y1jJRkHqX6lj%2BZn8c9WJlkQ82L2AajYkFbhLil9%2BwRETl89wTa2Ij3rkSQlRYkN6qggYAY8BAlD1XQMWT4Uv7CuBadZmUSkirSU3Oc&X-Amz-Signature=cf5b4665405a8904b9a430016f8237ba4c1d7f4907ab6b159dab467af25f85f6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEGNZS4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIASThPQSWzbwY6JtihLFu%2FeEoO1nWnyHgNkB3p5IOP35AiEA%2Fxsk3cUo7fDjJf8Q5nnASjFsiWE0c52yRFMxC60MPj8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQbimqhqb5955kzIyrcA8KAmBesUCSi4a%2FnJgyISWxwU3iw5DLCy4g7ad13z%2BmgxDZ4mZEfJs8mXovxAaM%2F1dK3dofrvjnfUIh4zbApdbXxhagcal6rntCuilw%2B2kmId%2FN83IZUh4D9Ad8RtWjDkQigqNlDTOJxJpCMrnP68Cnr5LqeDpTWreDnfIsUf%2Br7koWUzHhOrd%2BK9jA%2BeQqVST%2Bmifcpkd%2BY4RWxS2eLPP5lVkRKFQpapfnzmcFw1hFRpJQi8RMMpD%2FiwfevjhqcmDEUOQ9ppjt2aunR9Grbn6AJ%2FqoklB4Pr59Oa9UHfJbjLNFfLnpD85z4yq5dl0yEsObTgHNwu3anPWz4yvzDILeUicrziVI7ss6jKJkhXsDmASPDrU497zvr%2F4IlnfXdriad28sUo%2B%2BoULBPWzcW%2Br0Sown7q6E9b%2BzIbnpfQBp1iGGAfoyPrxGy1Jzw9rACCjAzEyBJfAhH7sKmhn7DlTPX7T3ZuoiWvSEYihEb4YnGxVZ1F%2FA9RIninLR4aHqhU5sAauxMd7OsQXv6MFRllr4lcXCgx%2F4UJDVN1f%2FpswidQKpPj6y4eoIxKhZ6cBP8Hjb4wQNtKkMJgnjfkZBnK1a%2BqRbuOxZj75Sao7f5vKqTaDRPNvWJR6uiIfEDMIHXuMEGOqUB1UGPgcTvtoMnN1Bs25UOUxiQIR6w%2BGixUmvenNsksGe0pwgvFJowhDEC1VVe1H4uf4byZ2wkJnFlBrMhj%2FX8QJ6arovI2yrrFQ5EnyC%2BErpeE9IfnZkZz3y1jJRkHqX6lj%2BZn8c9WJlkQ82L2AajYkFbhLil9%2BwRETl89wTa2Ij3rkSQlRYkN6qggYAY8BAlD1XQMWT4Uv7CuBadZmUSkirSU3Oc&X-Amz-Signature=7a26f3f0d7d9c9a8e824651417113d11debfd91ad949c038b922b9d8650836e2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
