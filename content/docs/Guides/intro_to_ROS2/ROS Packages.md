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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRYZIA6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIG1g37kiFQfu%2FyT%2BtI5otxmk9UGnYDzkiCvJdoekgo5AAiEA0xjiYefEPLa%2B0PTSXr0xMQTVFyG6xQnVbQoRg80CCikq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDED9KcsZkpi5PULSTircA1puh6GIxYUkOUvUqnPAiHEOXBnJ7Lu1Q0%2BPLSC%2F0nKsXHApBfhrjlhcDHrH%2F5aTEZwcjDyEGJd5Wk4LgYBmEcUTH6xSuAEnJukT3jXZWVRlTjblqdQMXnj3RgDZ%2BD5S6aQwedKQHYQXtknWn02MDp6xJqesJxigo3K%2BstHBQiWXL24facwhA6fK2HUyibSRmHkk3hpgPdC%2FebmjHra3YZ9tIuTmjaQqksctx8D8qwMkFl%2FQEX0Uf6e2tmpyBrWyKFwYd0FE%2FoQlNRLMGxspZHcAxT0w7PwPrTjnIWUB0xCdSoXfAn4PtEppLXNszzctHQZ01zCjJg65HhfZ10Z5vJe%2BmzMvxes8KyW1U908QZ9dquhjoe3ze4ie%2Fm0QFd0XGfcyzsBYk320sOtMbJ1sU2ELlEE%2BMGv6PRPv4wl%2BNRvnHqfxG5kJ5fxbmt1AJB9MoFsNYwjFKzb639FiOKexxTj%2Fswg1lvU6TfGZo7%2Feh2fUDh8Ju2XOJNQPug3JHzQXg2GLFOFHIlzm7SeStp5qLdCpD%2FyzQXTqao0Nh1nCyfQuExHzwj5E3k8aH1hLm4DclBL1QdoYx3DBeBFxKHeoyxS6iHD3Tia4mgo7i92m8sVDlTY7WHyaCheSWCISMJvPw8QGOqUBQV%2FRPczUSbY1vQOINKtgHOUi5B97Vj16SHNf9%2FABDcp4mI0aSe3N3W59NNETJUq6lfx%2FPIyFqwHxsfmI6LMCggErc9%2FGV3xDszHWj5vNVP6uw1U09RDtAkFEvmXOav7mm80g4RExOi9EozRXOL%2B5rxNL63Jfb0FLT1C3wUBw5FWy%2BysRZQ9RiqMwdsi%2BWMq33N3ypFmOQf3FfsocZYNMbffcRQck&X-Amz-Signature=61a2d10a730395b1ba8e83cdea1910852b3da9af9ad7b6c0907b6b79e1faa28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRYZIA6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIG1g37kiFQfu%2FyT%2BtI5otxmk9UGnYDzkiCvJdoekgo5AAiEA0xjiYefEPLa%2B0PTSXr0xMQTVFyG6xQnVbQoRg80CCikq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDED9KcsZkpi5PULSTircA1puh6GIxYUkOUvUqnPAiHEOXBnJ7Lu1Q0%2BPLSC%2F0nKsXHApBfhrjlhcDHrH%2F5aTEZwcjDyEGJd5Wk4LgYBmEcUTH6xSuAEnJukT3jXZWVRlTjblqdQMXnj3RgDZ%2BD5S6aQwedKQHYQXtknWn02MDp6xJqesJxigo3K%2BstHBQiWXL24facwhA6fK2HUyibSRmHkk3hpgPdC%2FebmjHra3YZ9tIuTmjaQqksctx8D8qwMkFl%2FQEX0Uf6e2tmpyBrWyKFwYd0FE%2FoQlNRLMGxspZHcAxT0w7PwPrTjnIWUB0xCdSoXfAn4PtEppLXNszzctHQZ01zCjJg65HhfZ10Z5vJe%2BmzMvxes8KyW1U908QZ9dquhjoe3ze4ie%2Fm0QFd0XGfcyzsBYk320sOtMbJ1sU2ELlEE%2BMGv6PRPv4wl%2BNRvnHqfxG5kJ5fxbmt1AJB9MoFsNYwjFKzb639FiOKexxTj%2Fswg1lvU6TfGZo7%2Feh2fUDh8Ju2XOJNQPug3JHzQXg2GLFOFHIlzm7SeStp5qLdCpD%2FyzQXTqao0Nh1nCyfQuExHzwj5E3k8aH1hLm4DclBL1QdoYx3DBeBFxKHeoyxS6iHD3Tia4mgo7i92m8sVDlTY7WHyaCheSWCISMJvPw8QGOqUBQV%2FRPczUSbY1vQOINKtgHOUi5B97Vj16SHNf9%2FABDcp4mI0aSe3N3W59NNETJUq6lfx%2FPIyFqwHxsfmI6LMCggErc9%2FGV3xDszHWj5vNVP6uw1U09RDtAkFEvmXOav7mm80g4RExOi9EozRXOL%2B5rxNL63Jfb0FLT1C3wUBw5FWy%2BysRZQ9RiqMwdsi%2BWMq33N3ypFmOQf3FfsocZYNMbffcRQck&X-Amz-Signature=ec42e73b9edc0ef3a4d26b333d0c93aac5d341c18d113c73adb9e67182189248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRYZIA6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIG1g37kiFQfu%2FyT%2BtI5otxmk9UGnYDzkiCvJdoekgo5AAiEA0xjiYefEPLa%2B0PTSXr0xMQTVFyG6xQnVbQoRg80CCikq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDED9KcsZkpi5PULSTircA1puh6GIxYUkOUvUqnPAiHEOXBnJ7Lu1Q0%2BPLSC%2F0nKsXHApBfhrjlhcDHrH%2F5aTEZwcjDyEGJd5Wk4LgYBmEcUTH6xSuAEnJukT3jXZWVRlTjblqdQMXnj3RgDZ%2BD5S6aQwedKQHYQXtknWn02MDp6xJqesJxigo3K%2BstHBQiWXL24facwhA6fK2HUyibSRmHkk3hpgPdC%2FebmjHra3YZ9tIuTmjaQqksctx8D8qwMkFl%2FQEX0Uf6e2tmpyBrWyKFwYd0FE%2FoQlNRLMGxspZHcAxT0w7PwPrTjnIWUB0xCdSoXfAn4PtEppLXNszzctHQZ01zCjJg65HhfZ10Z5vJe%2BmzMvxes8KyW1U908QZ9dquhjoe3ze4ie%2Fm0QFd0XGfcyzsBYk320sOtMbJ1sU2ELlEE%2BMGv6PRPv4wl%2BNRvnHqfxG5kJ5fxbmt1AJB9MoFsNYwjFKzb639FiOKexxTj%2Fswg1lvU6TfGZo7%2Feh2fUDh8Ju2XOJNQPug3JHzQXg2GLFOFHIlzm7SeStp5qLdCpD%2FyzQXTqao0Nh1nCyfQuExHzwj5E3k8aH1hLm4DclBL1QdoYx3DBeBFxKHeoyxS6iHD3Tia4mgo7i92m8sVDlTY7WHyaCheSWCISMJvPw8QGOqUBQV%2FRPczUSbY1vQOINKtgHOUi5B97Vj16SHNf9%2FABDcp4mI0aSe3N3W59NNETJUq6lfx%2FPIyFqwHxsfmI6LMCggErc9%2FGV3xDszHWj5vNVP6uw1U09RDtAkFEvmXOav7mm80g4RExOi9EozRXOL%2B5rxNL63Jfb0FLT1C3wUBw5FWy%2BysRZQ9RiqMwdsi%2BWMq33N3ypFmOQf3FfsocZYNMbffcRQck&X-Amz-Signature=9d2cd9482b3c5b7e0f2eb1b7f8f2265deea09c9fce031d6fde4cd7d57bb8e775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRYZIA6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIG1g37kiFQfu%2FyT%2BtI5otxmk9UGnYDzkiCvJdoekgo5AAiEA0xjiYefEPLa%2B0PTSXr0xMQTVFyG6xQnVbQoRg80CCikq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDED9KcsZkpi5PULSTircA1puh6GIxYUkOUvUqnPAiHEOXBnJ7Lu1Q0%2BPLSC%2F0nKsXHApBfhrjlhcDHrH%2F5aTEZwcjDyEGJd5Wk4LgYBmEcUTH6xSuAEnJukT3jXZWVRlTjblqdQMXnj3RgDZ%2BD5S6aQwedKQHYQXtknWn02MDp6xJqesJxigo3K%2BstHBQiWXL24facwhA6fK2HUyibSRmHkk3hpgPdC%2FebmjHra3YZ9tIuTmjaQqksctx8D8qwMkFl%2FQEX0Uf6e2tmpyBrWyKFwYd0FE%2FoQlNRLMGxspZHcAxT0w7PwPrTjnIWUB0xCdSoXfAn4PtEppLXNszzctHQZ01zCjJg65HhfZ10Z5vJe%2BmzMvxes8KyW1U908QZ9dquhjoe3ze4ie%2Fm0QFd0XGfcyzsBYk320sOtMbJ1sU2ELlEE%2BMGv6PRPv4wl%2BNRvnHqfxG5kJ5fxbmt1AJB9MoFsNYwjFKzb639FiOKexxTj%2Fswg1lvU6TfGZo7%2Feh2fUDh8Ju2XOJNQPug3JHzQXg2GLFOFHIlzm7SeStp5qLdCpD%2FyzQXTqao0Nh1nCyfQuExHzwj5E3k8aH1hLm4DclBL1QdoYx3DBeBFxKHeoyxS6iHD3Tia4mgo7i92m8sVDlTY7WHyaCheSWCISMJvPw8QGOqUBQV%2FRPczUSbY1vQOINKtgHOUi5B97Vj16SHNf9%2FABDcp4mI0aSe3N3W59NNETJUq6lfx%2FPIyFqwHxsfmI6LMCggErc9%2FGV3xDszHWj5vNVP6uw1U09RDtAkFEvmXOav7mm80g4RExOi9EozRXOL%2B5rxNL63Jfb0FLT1C3wUBw5FWy%2BysRZQ9RiqMwdsi%2BWMq33N3ypFmOQf3FfsocZYNMbffcRQck&X-Amz-Signature=42b5f3490cbd05b385f91ef6751899f10181749ed9c21e8e073b386d943482e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRYZIA6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIG1g37kiFQfu%2FyT%2BtI5otxmk9UGnYDzkiCvJdoekgo5AAiEA0xjiYefEPLa%2B0PTSXr0xMQTVFyG6xQnVbQoRg80CCikq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDED9KcsZkpi5PULSTircA1puh6GIxYUkOUvUqnPAiHEOXBnJ7Lu1Q0%2BPLSC%2F0nKsXHApBfhrjlhcDHrH%2F5aTEZwcjDyEGJd5Wk4LgYBmEcUTH6xSuAEnJukT3jXZWVRlTjblqdQMXnj3RgDZ%2BD5S6aQwedKQHYQXtknWn02MDp6xJqesJxigo3K%2BstHBQiWXL24facwhA6fK2HUyibSRmHkk3hpgPdC%2FebmjHra3YZ9tIuTmjaQqksctx8D8qwMkFl%2FQEX0Uf6e2tmpyBrWyKFwYd0FE%2FoQlNRLMGxspZHcAxT0w7PwPrTjnIWUB0xCdSoXfAn4PtEppLXNszzctHQZ01zCjJg65HhfZ10Z5vJe%2BmzMvxes8KyW1U908QZ9dquhjoe3ze4ie%2Fm0QFd0XGfcyzsBYk320sOtMbJ1sU2ELlEE%2BMGv6PRPv4wl%2BNRvnHqfxG5kJ5fxbmt1AJB9MoFsNYwjFKzb639FiOKexxTj%2Fswg1lvU6TfGZo7%2Feh2fUDh8Ju2XOJNQPug3JHzQXg2GLFOFHIlzm7SeStp5qLdCpD%2FyzQXTqao0Nh1nCyfQuExHzwj5E3k8aH1hLm4DclBL1QdoYx3DBeBFxKHeoyxS6iHD3Tia4mgo7i92m8sVDlTY7WHyaCheSWCISMJvPw8QGOqUBQV%2FRPczUSbY1vQOINKtgHOUi5B97Vj16SHNf9%2FABDcp4mI0aSe3N3W59NNETJUq6lfx%2FPIyFqwHxsfmI6LMCggErc9%2FGV3xDszHWj5vNVP6uw1U09RDtAkFEvmXOav7mm80g4RExOi9EozRXOL%2B5rxNL63Jfb0FLT1C3wUBw5FWy%2BysRZQ9RiqMwdsi%2BWMq33N3ypFmOQf3FfsocZYNMbffcRQck&X-Amz-Signature=9d59f320fe037e2cc24893d52812a622cae1424d0a5d52222a9c25c0642c6781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRYZIA6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIG1g37kiFQfu%2FyT%2BtI5otxmk9UGnYDzkiCvJdoekgo5AAiEA0xjiYefEPLa%2B0PTSXr0xMQTVFyG6xQnVbQoRg80CCikq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDED9KcsZkpi5PULSTircA1puh6GIxYUkOUvUqnPAiHEOXBnJ7Lu1Q0%2BPLSC%2F0nKsXHApBfhrjlhcDHrH%2F5aTEZwcjDyEGJd5Wk4LgYBmEcUTH6xSuAEnJukT3jXZWVRlTjblqdQMXnj3RgDZ%2BD5S6aQwedKQHYQXtknWn02MDp6xJqesJxigo3K%2BstHBQiWXL24facwhA6fK2HUyibSRmHkk3hpgPdC%2FebmjHra3YZ9tIuTmjaQqksctx8D8qwMkFl%2FQEX0Uf6e2tmpyBrWyKFwYd0FE%2FoQlNRLMGxspZHcAxT0w7PwPrTjnIWUB0xCdSoXfAn4PtEppLXNszzctHQZ01zCjJg65HhfZ10Z5vJe%2BmzMvxes8KyW1U908QZ9dquhjoe3ze4ie%2Fm0QFd0XGfcyzsBYk320sOtMbJ1sU2ELlEE%2BMGv6PRPv4wl%2BNRvnHqfxG5kJ5fxbmt1AJB9MoFsNYwjFKzb639FiOKexxTj%2Fswg1lvU6TfGZo7%2Feh2fUDh8Ju2XOJNQPug3JHzQXg2GLFOFHIlzm7SeStp5qLdCpD%2FyzQXTqao0Nh1nCyfQuExHzwj5E3k8aH1hLm4DclBL1QdoYx3DBeBFxKHeoyxS6iHD3Tia4mgo7i92m8sVDlTY7WHyaCheSWCISMJvPw8QGOqUBQV%2FRPczUSbY1vQOINKtgHOUi5B97Vj16SHNf9%2FABDcp4mI0aSe3N3W59NNETJUq6lfx%2FPIyFqwHxsfmI6LMCggErc9%2FGV3xDszHWj5vNVP6uw1U09RDtAkFEvmXOav7mm80g4RExOi9EozRXOL%2B5rxNL63Jfb0FLT1C3wUBw5FWy%2BysRZQ9RiqMwdsi%2BWMq33N3ypFmOQf3FfsocZYNMbffcRQck&X-Amz-Signature=4bfec8ee385e38423df24d4327cee59dad8e95d68871d698d1abe4c526b92873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRYZIA6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIG1g37kiFQfu%2FyT%2BtI5otxmk9UGnYDzkiCvJdoekgo5AAiEA0xjiYefEPLa%2B0PTSXr0xMQTVFyG6xQnVbQoRg80CCikq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDED9KcsZkpi5PULSTircA1puh6GIxYUkOUvUqnPAiHEOXBnJ7Lu1Q0%2BPLSC%2F0nKsXHApBfhrjlhcDHrH%2F5aTEZwcjDyEGJd5Wk4LgYBmEcUTH6xSuAEnJukT3jXZWVRlTjblqdQMXnj3RgDZ%2BD5S6aQwedKQHYQXtknWn02MDp6xJqesJxigo3K%2BstHBQiWXL24facwhA6fK2HUyibSRmHkk3hpgPdC%2FebmjHra3YZ9tIuTmjaQqksctx8D8qwMkFl%2FQEX0Uf6e2tmpyBrWyKFwYd0FE%2FoQlNRLMGxspZHcAxT0w7PwPrTjnIWUB0xCdSoXfAn4PtEppLXNszzctHQZ01zCjJg65HhfZ10Z5vJe%2BmzMvxes8KyW1U908QZ9dquhjoe3ze4ie%2Fm0QFd0XGfcyzsBYk320sOtMbJ1sU2ELlEE%2BMGv6PRPv4wl%2BNRvnHqfxG5kJ5fxbmt1AJB9MoFsNYwjFKzb639FiOKexxTj%2Fswg1lvU6TfGZo7%2Feh2fUDh8Ju2XOJNQPug3JHzQXg2GLFOFHIlzm7SeStp5qLdCpD%2FyzQXTqao0Nh1nCyfQuExHzwj5E3k8aH1hLm4DclBL1QdoYx3DBeBFxKHeoyxS6iHD3Tia4mgo7i92m8sVDlTY7WHyaCheSWCISMJvPw8QGOqUBQV%2FRPczUSbY1vQOINKtgHOUi5B97Vj16SHNf9%2FABDcp4mI0aSe3N3W59NNETJUq6lfx%2FPIyFqwHxsfmI6LMCggErc9%2FGV3xDszHWj5vNVP6uw1U09RDtAkFEvmXOav7mm80g4RExOi9EozRXOL%2B5rxNL63Jfb0FLT1C3wUBw5FWy%2BysRZQ9RiqMwdsi%2BWMq33N3ypFmOQf3FfsocZYNMbffcRQck&X-Amz-Signature=19a7660d2c4a41836f15b08183cb694bac13a2a3bf65a12bb91ec6dbbdd572a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
