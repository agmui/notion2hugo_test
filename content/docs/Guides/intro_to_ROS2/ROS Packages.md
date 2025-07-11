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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJBNRRV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeNLNb5Dr77zDxiDYFgGQe59SZuKUlTT44EerlNkRXFwIhAKf1CBNej5CE%2BRRmEgD8arnWwzIiyuTpxYFduhyddiROKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu3NxOozO67d5vOEIq3AN6UqsSJUEkhH8tiD%2FretfmwK4Ufz9A78nuODbTVZD%2B1ebUxvJnGvxIwsZWZGamv3XeM0I1cTKa4qL8cVyjX99rf1NNdgSGiT5yVyQ9lShONQvOOKBIcW7sExublYFSVBiREpCZc53dnIW3eNJ8NGHs6HZ2yB117EAEkh%2FEYqHQK1igtd2QZ%2FVFctRsy2oPth5MxcrfaLVW30GZ%2FShbyMLDnhOcVArHkBtenwQzFUYhnV3DNnG4mqZtcReAxyd8KMdpxCKUOMwodjTJ1QVIwpBWLgjkFUL6O6LhVuofhKco7bpbliZ5kGiudLtXzVfeijW6xn2WWmCXlISLcvLF2jMgCavWc42mn7BKPWWArY38XsNpNNWX4iYEtyyuoIzpOD7gwvwNYejBHB%2FtfXLhXKy3ysbab08jsdbizMwWg34dIHMZgCbXZ1s5cTRSUd2uzQhHw3EiKDNP7DPH1IjnWMSenF6N2NzFl3I6Cppd%2Fc2bsl%2FcDRX9K0ypYnRg5RUmzq6MC7Qg5dgS60pcfVQn3YbNzzFua1aIQ487YAa3319ml71K%2BI6nqyxyh%2BUpPViGzgvOkj4gacklLHNRMvjBVb8xeXhWN6D0S%2FGoycKzaG5%2F1wJ0z1EbyRYn1osj9DD02MrDBjqkAWV45Z6VubDfTYT0ypR7MevhOi2pWrZJ7Xqy%2BZGylMRYCg6%2FqT4KC%2FUPUIQX5PKRke%2F445j7%2BjUJt4mjZCw7Eb07nBbz1rgV9ZO%2Fuo4nXp3jWIRA0g2IUJXAtDa4c6NTr7Ey0vJeMNKYghGDFn3TYHtnNSC0%2B1T8yGuLC2B3ZoA%2BXDsHWJN7us58TCHn639TqE0f2E9xzEYlhNQKeAk9q1GxRqR%2F&X-Amz-Signature=73ed249551d90f2ecee0ac1d11ec7fde58bca8137b1ee7f9e8cd88b1030642c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJBNRRV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeNLNb5Dr77zDxiDYFgGQe59SZuKUlTT44EerlNkRXFwIhAKf1CBNej5CE%2BRRmEgD8arnWwzIiyuTpxYFduhyddiROKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu3NxOozO67d5vOEIq3AN6UqsSJUEkhH8tiD%2FretfmwK4Ufz9A78nuODbTVZD%2B1ebUxvJnGvxIwsZWZGamv3XeM0I1cTKa4qL8cVyjX99rf1NNdgSGiT5yVyQ9lShONQvOOKBIcW7sExublYFSVBiREpCZc53dnIW3eNJ8NGHs6HZ2yB117EAEkh%2FEYqHQK1igtd2QZ%2FVFctRsy2oPth5MxcrfaLVW30GZ%2FShbyMLDnhOcVArHkBtenwQzFUYhnV3DNnG4mqZtcReAxyd8KMdpxCKUOMwodjTJ1QVIwpBWLgjkFUL6O6LhVuofhKco7bpbliZ5kGiudLtXzVfeijW6xn2WWmCXlISLcvLF2jMgCavWc42mn7BKPWWArY38XsNpNNWX4iYEtyyuoIzpOD7gwvwNYejBHB%2FtfXLhXKy3ysbab08jsdbizMwWg34dIHMZgCbXZ1s5cTRSUd2uzQhHw3EiKDNP7DPH1IjnWMSenF6N2NzFl3I6Cppd%2Fc2bsl%2FcDRX9K0ypYnRg5RUmzq6MC7Qg5dgS60pcfVQn3YbNzzFua1aIQ487YAa3319ml71K%2BI6nqyxyh%2BUpPViGzgvOkj4gacklLHNRMvjBVb8xeXhWN6D0S%2FGoycKzaG5%2F1wJ0z1EbyRYn1osj9DD02MrDBjqkAWV45Z6VubDfTYT0ypR7MevhOi2pWrZJ7Xqy%2BZGylMRYCg6%2FqT4KC%2FUPUIQX5PKRke%2F445j7%2BjUJt4mjZCw7Eb07nBbz1rgV9ZO%2Fuo4nXp3jWIRA0g2IUJXAtDa4c6NTr7Ey0vJeMNKYghGDFn3TYHtnNSC0%2B1T8yGuLC2B3ZoA%2BXDsHWJN7us58TCHn639TqE0f2E9xzEYlhNQKeAk9q1GxRqR%2F&X-Amz-Signature=2fb3c3d354388cf7551252fa4d49fa043baa0f5964563f0e6a07d1aa2fe19168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJBNRRV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeNLNb5Dr77zDxiDYFgGQe59SZuKUlTT44EerlNkRXFwIhAKf1CBNej5CE%2BRRmEgD8arnWwzIiyuTpxYFduhyddiROKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu3NxOozO67d5vOEIq3AN6UqsSJUEkhH8tiD%2FretfmwK4Ufz9A78nuODbTVZD%2B1ebUxvJnGvxIwsZWZGamv3XeM0I1cTKa4qL8cVyjX99rf1NNdgSGiT5yVyQ9lShONQvOOKBIcW7sExublYFSVBiREpCZc53dnIW3eNJ8NGHs6HZ2yB117EAEkh%2FEYqHQK1igtd2QZ%2FVFctRsy2oPth5MxcrfaLVW30GZ%2FShbyMLDnhOcVArHkBtenwQzFUYhnV3DNnG4mqZtcReAxyd8KMdpxCKUOMwodjTJ1QVIwpBWLgjkFUL6O6LhVuofhKco7bpbliZ5kGiudLtXzVfeijW6xn2WWmCXlISLcvLF2jMgCavWc42mn7BKPWWArY38XsNpNNWX4iYEtyyuoIzpOD7gwvwNYejBHB%2FtfXLhXKy3ysbab08jsdbizMwWg34dIHMZgCbXZ1s5cTRSUd2uzQhHw3EiKDNP7DPH1IjnWMSenF6N2NzFl3I6Cppd%2Fc2bsl%2FcDRX9K0ypYnRg5RUmzq6MC7Qg5dgS60pcfVQn3YbNzzFua1aIQ487YAa3319ml71K%2BI6nqyxyh%2BUpPViGzgvOkj4gacklLHNRMvjBVb8xeXhWN6D0S%2FGoycKzaG5%2F1wJ0z1EbyRYn1osj9DD02MrDBjqkAWV45Z6VubDfTYT0ypR7MevhOi2pWrZJ7Xqy%2BZGylMRYCg6%2FqT4KC%2FUPUIQX5PKRke%2F445j7%2BjUJt4mjZCw7Eb07nBbz1rgV9ZO%2Fuo4nXp3jWIRA0g2IUJXAtDa4c6NTr7Ey0vJeMNKYghGDFn3TYHtnNSC0%2B1T8yGuLC2B3ZoA%2BXDsHWJN7us58TCHn639TqE0f2E9xzEYlhNQKeAk9q1GxRqR%2F&X-Amz-Signature=f2addae0d572740fdf27d91a6dd69683dc4344c9ff262f2e8373c17939ac7846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJBNRRV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeNLNb5Dr77zDxiDYFgGQe59SZuKUlTT44EerlNkRXFwIhAKf1CBNej5CE%2BRRmEgD8arnWwzIiyuTpxYFduhyddiROKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu3NxOozO67d5vOEIq3AN6UqsSJUEkhH8tiD%2FretfmwK4Ufz9A78nuODbTVZD%2B1ebUxvJnGvxIwsZWZGamv3XeM0I1cTKa4qL8cVyjX99rf1NNdgSGiT5yVyQ9lShONQvOOKBIcW7sExublYFSVBiREpCZc53dnIW3eNJ8NGHs6HZ2yB117EAEkh%2FEYqHQK1igtd2QZ%2FVFctRsy2oPth5MxcrfaLVW30GZ%2FShbyMLDnhOcVArHkBtenwQzFUYhnV3DNnG4mqZtcReAxyd8KMdpxCKUOMwodjTJ1QVIwpBWLgjkFUL6O6LhVuofhKco7bpbliZ5kGiudLtXzVfeijW6xn2WWmCXlISLcvLF2jMgCavWc42mn7BKPWWArY38XsNpNNWX4iYEtyyuoIzpOD7gwvwNYejBHB%2FtfXLhXKy3ysbab08jsdbizMwWg34dIHMZgCbXZ1s5cTRSUd2uzQhHw3EiKDNP7DPH1IjnWMSenF6N2NzFl3I6Cppd%2Fc2bsl%2FcDRX9K0ypYnRg5RUmzq6MC7Qg5dgS60pcfVQn3YbNzzFua1aIQ487YAa3319ml71K%2BI6nqyxyh%2BUpPViGzgvOkj4gacklLHNRMvjBVb8xeXhWN6D0S%2FGoycKzaG5%2F1wJ0z1EbyRYn1osj9DD02MrDBjqkAWV45Z6VubDfTYT0ypR7MevhOi2pWrZJ7Xqy%2BZGylMRYCg6%2FqT4KC%2FUPUIQX5PKRke%2F445j7%2BjUJt4mjZCw7Eb07nBbz1rgV9ZO%2Fuo4nXp3jWIRA0g2IUJXAtDa4c6NTr7Ey0vJeMNKYghGDFn3TYHtnNSC0%2B1T8yGuLC2B3ZoA%2BXDsHWJN7us58TCHn639TqE0f2E9xzEYlhNQKeAk9q1GxRqR%2F&X-Amz-Signature=167c7738fec6a4f25c1ddfcbc0e36d857484ddc9a9f243b70892b3cbd7c795c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJBNRRV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeNLNb5Dr77zDxiDYFgGQe59SZuKUlTT44EerlNkRXFwIhAKf1CBNej5CE%2BRRmEgD8arnWwzIiyuTpxYFduhyddiROKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu3NxOozO67d5vOEIq3AN6UqsSJUEkhH8tiD%2FretfmwK4Ufz9A78nuODbTVZD%2B1ebUxvJnGvxIwsZWZGamv3XeM0I1cTKa4qL8cVyjX99rf1NNdgSGiT5yVyQ9lShONQvOOKBIcW7sExublYFSVBiREpCZc53dnIW3eNJ8NGHs6HZ2yB117EAEkh%2FEYqHQK1igtd2QZ%2FVFctRsy2oPth5MxcrfaLVW30GZ%2FShbyMLDnhOcVArHkBtenwQzFUYhnV3DNnG4mqZtcReAxyd8KMdpxCKUOMwodjTJ1QVIwpBWLgjkFUL6O6LhVuofhKco7bpbliZ5kGiudLtXzVfeijW6xn2WWmCXlISLcvLF2jMgCavWc42mn7BKPWWArY38XsNpNNWX4iYEtyyuoIzpOD7gwvwNYejBHB%2FtfXLhXKy3ysbab08jsdbizMwWg34dIHMZgCbXZ1s5cTRSUd2uzQhHw3EiKDNP7DPH1IjnWMSenF6N2NzFl3I6Cppd%2Fc2bsl%2FcDRX9K0ypYnRg5RUmzq6MC7Qg5dgS60pcfVQn3YbNzzFua1aIQ487YAa3319ml71K%2BI6nqyxyh%2BUpPViGzgvOkj4gacklLHNRMvjBVb8xeXhWN6D0S%2FGoycKzaG5%2F1wJ0z1EbyRYn1osj9DD02MrDBjqkAWV45Z6VubDfTYT0ypR7MevhOi2pWrZJ7Xqy%2BZGylMRYCg6%2FqT4KC%2FUPUIQX5PKRke%2F445j7%2BjUJt4mjZCw7Eb07nBbz1rgV9ZO%2Fuo4nXp3jWIRA0g2IUJXAtDa4c6NTr7Ey0vJeMNKYghGDFn3TYHtnNSC0%2B1T8yGuLC2B3ZoA%2BXDsHWJN7us58TCHn639TqE0f2E9xzEYlhNQKeAk9q1GxRqR%2F&X-Amz-Signature=f75c71f07810950e4217b9caa54a3acf6254db6d856db2c627667216f2edd451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJBNRRV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeNLNb5Dr77zDxiDYFgGQe59SZuKUlTT44EerlNkRXFwIhAKf1CBNej5CE%2BRRmEgD8arnWwzIiyuTpxYFduhyddiROKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu3NxOozO67d5vOEIq3AN6UqsSJUEkhH8tiD%2FretfmwK4Ufz9A78nuODbTVZD%2B1ebUxvJnGvxIwsZWZGamv3XeM0I1cTKa4qL8cVyjX99rf1NNdgSGiT5yVyQ9lShONQvOOKBIcW7sExublYFSVBiREpCZc53dnIW3eNJ8NGHs6HZ2yB117EAEkh%2FEYqHQK1igtd2QZ%2FVFctRsy2oPth5MxcrfaLVW30GZ%2FShbyMLDnhOcVArHkBtenwQzFUYhnV3DNnG4mqZtcReAxyd8KMdpxCKUOMwodjTJ1QVIwpBWLgjkFUL6O6LhVuofhKco7bpbliZ5kGiudLtXzVfeijW6xn2WWmCXlISLcvLF2jMgCavWc42mn7BKPWWArY38XsNpNNWX4iYEtyyuoIzpOD7gwvwNYejBHB%2FtfXLhXKy3ysbab08jsdbizMwWg34dIHMZgCbXZ1s5cTRSUd2uzQhHw3EiKDNP7DPH1IjnWMSenF6N2NzFl3I6Cppd%2Fc2bsl%2FcDRX9K0ypYnRg5RUmzq6MC7Qg5dgS60pcfVQn3YbNzzFua1aIQ487YAa3319ml71K%2BI6nqyxyh%2BUpPViGzgvOkj4gacklLHNRMvjBVb8xeXhWN6D0S%2FGoycKzaG5%2F1wJ0z1EbyRYn1osj9DD02MrDBjqkAWV45Z6VubDfTYT0ypR7MevhOi2pWrZJ7Xqy%2BZGylMRYCg6%2FqT4KC%2FUPUIQX5PKRke%2F445j7%2BjUJt4mjZCw7Eb07nBbz1rgV9ZO%2Fuo4nXp3jWIRA0g2IUJXAtDa4c6NTr7Ey0vJeMNKYghGDFn3TYHtnNSC0%2B1T8yGuLC2B3ZoA%2BXDsHWJN7us58TCHn639TqE0f2E9xzEYlhNQKeAk9q1GxRqR%2F&X-Amz-Signature=a4f6411019dd9a04ed7cb6bdab2a5f3aa6ec0d89d846ae7717222a806b72257e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJBNRRV%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeNLNb5Dr77zDxiDYFgGQe59SZuKUlTT44EerlNkRXFwIhAKf1CBNej5CE%2BRRmEgD8arnWwzIiyuTpxYFduhyddiROKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu3NxOozO67d5vOEIq3AN6UqsSJUEkhH8tiD%2FretfmwK4Ufz9A78nuODbTVZD%2B1ebUxvJnGvxIwsZWZGamv3XeM0I1cTKa4qL8cVyjX99rf1NNdgSGiT5yVyQ9lShONQvOOKBIcW7sExublYFSVBiREpCZc53dnIW3eNJ8NGHs6HZ2yB117EAEkh%2FEYqHQK1igtd2QZ%2FVFctRsy2oPth5MxcrfaLVW30GZ%2FShbyMLDnhOcVArHkBtenwQzFUYhnV3DNnG4mqZtcReAxyd8KMdpxCKUOMwodjTJ1QVIwpBWLgjkFUL6O6LhVuofhKco7bpbliZ5kGiudLtXzVfeijW6xn2WWmCXlISLcvLF2jMgCavWc42mn7BKPWWArY38XsNpNNWX4iYEtyyuoIzpOD7gwvwNYejBHB%2FtfXLhXKy3ysbab08jsdbizMwWg34dIHMZgCbXZ1s5cTRSUd2uzQhHw3EiKDNP7DPH1IjnWMSenF6N2NzFl3I6Cppd%2Fc2bsl%2FcDRX9K0ypYnRg5RUmzq6MC7Qg5dgS60pcfVQn3YbNzzFua1aIQ487YAa3319ml71K%2BI6nqyxyh%2BUpPViGzgvOkj4gacklLHNRMvjBVb8xeXhWN6D0S%2FGoycKzaG5%2F1wJ0z1EbyRYn1osj9DD02MrDBjqkAWV45Z6VubDfTYT0ypR7MevhOi2pWrZJ7Xqy%2BZGylMRYCg6%2FqT4KC%2FUPUIQX5PKRke%2F445j7%2BjUJt4mjZCw7Eb07nBbz1rgV9ZO%2Fuo4nXp3jWIRA0g2IUJXAtDa4c6NTr7Ey0vJeMNKYghGDFn3TYHtnNSC0%2B1T8yGuLC2B3ZoA%2BXDsHWJN7us58TCHn639TqE0f2E9xzEYlhNQKeAk9q1GxRqR%2F&X-Amz-Signature=5cfdc306390cba547a57ed8a1746767c7aca7bbb74f20afc0e091c4f910bcfc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
