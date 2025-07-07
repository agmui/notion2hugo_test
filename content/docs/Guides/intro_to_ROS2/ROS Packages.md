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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKKWPOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCXA%2FoxldA%2BGvXZhDRRTgQbMki0p6tEPRAvI9a9BS%2B4HgIhAMM0HXzQRzL88SVXFUeHb1VD%2BmErnxg2STJxO%2FBZnf9GKv8DCHsQABoMNjM3NDIzMTgzODA1IgxIMqr%2BmqirZXE0rEoq3AOI43AgsmFH9gxhM%2B3is1R0G0KOy6icXsC%2FTN6BdjENhgDZqVQV%2BHLPIB8W7tIZb7dz0b1LbOFY5RZuSJuL3FWTquMP8IXouG1cDUka3h3MGknieSFw4vU5yiEXc4p4HnfSvZxZThmKIKXpfCg7dJMylcDgMkOB6SMc9bQ%2FDL%2FZIbKh9qIwJ%2B77yW3b9G6tKHNDtrm23MJRYME0EdIGeRFdRHwOWfFTM%2BRFn5Kp%2BddQ9hO90638daiQOic%2FM2R00kmx5VPqSDSYsjpvut7qOlW2UC5adLzkC7AshY1vrSwQsdcs%2F7HUi8y4JmRa4fMYHZHXIBQAmK%2BCaP8C0AB613QJP%2F0AKoidYqYDAXRZXpHB0TcDc2M9FPX1glvt9cC2eg7ljgP97aUYtSfJX1u09kj86xlPLfhqXDJ6EBchWNgHvuEEGqsjTTD%2FEADzrEOO2bVIW%2Fdr0o2iPqoY59bfl7TPT2CwDJ4xNwXmX1C5lFyBybnWoJTvfPfyfwg4ymICEA0EEsu9Ag648h4ayxaIimqIRDPUoTlIf7siMoYAN5h04j7tED38P1s15%2FlEBwvsaM1UM1OB%2BwMPmD9Yk9pdy8ItOuo5tpLOaSUKa0V0nCjsaZHkqZgp%2FiOKAYnZ6DCtlrDDBjqkAbguvVscX9%2BeVcn4U%2F%2FI5qevYsUrWdUlAr1almE1MippNssrjWj5RBB5H9GV4y52RUfwjNgGew9i%2FS61xcqCYODmlL9tVEgDdVOqCKRor%2B4LCYj%2FyZNkeKyHbDGMSG7teTQgBIDCNNqOsSSJN4IUnT0A9AL8CsvXZMU3GF7nY8cOjoGG3qNxFmrh1K3PJIJ%2FVkbaqikAFBRYptHfg7nSk3UVXNhR&X-Amz-Signature=8cc71d3a4d8411560b7cfc635951a96f7e33c51454fa52caad271faf5edf2222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKKWPOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCXA%2FoxldA%2BGvXZhDRRTgQbMki0p6tEPRAvI9a9BS%2B4HgIhAMM0HXzQRzL88SVXFUeHb1VD%2BmErnxg2STJxO%2FBZnf9GKv8DCHsQABoMNjM3NDIzMTgzODA1IgxIMqr%2BmqirZXE0rEoq3AOI43AgsmFH9gxhM%2B3is1R0G0KOy6icXsC%2FTN6BdjENhgDZqVQV%2BHLPIB8W7tIZb7dz0b1LbOFY5RZuSJuL3FWTquMP8IXouG1cDUka3h3MGknieSFw4vU5yiEXc4p4HnfSvZxZThmKIKXpfCg7dJMylcDgMkOB6SMc9bQ%2FDL%2FZIbKh9qIwJ%2B77yW3b9G6tKHNDtrm23MJRYME0EdIGeRFdRHwOWfFTM%2BRFn5Kp%2BddQ9hO90638daiQOic%2FM2R00kmx5VPqSDSYsjpvut7qOlW2UC5adLzkC7AshY1vrSwQsdcs%2F7HUi8y4JmRa4fMYHZHXIBQAmK%2BCaP8C0AB613QJP%2F0AKoidYqYDAXRZXpHB0TcDc2M9FPX1glvt9cC2eg7ljgP97aUYtSfJX1u09kj86xlPLfhqXDJ6EBchWNgHvuEEGqsjTTD%2FEADzrEOO2bVIW%2Fdr0o2iPqoY59bfl7TPT2CwDJ4xNwXmX1C5lFyBybnWoJTvfPfyfwg4ymICEA0EEsu9Ag648h4ayxaIimqIRDPUoTlIf7siMoYAN5h04j7tED38P1s15%2FlEBwvsaM1UM1OB%2BwMPmD9Yk9pdy8ItOuo5tpLOaSUKa0V0nCjsaZHkqZgp%2FiOKAYnZ6DCtlrDDBjqkAbguvVscX9%2BeVcn4U%2F%2FI5qevYsUrWdUlAr1almE1MippNssrjWj5RBB5H9GV4y52RUfwjNgGew9i%2FS61xcqCYODmlL9tVEgDdVOqCKRor%2B4LCYj%2FyZNkeKyHbDGMSG7teTQgBIDCNNqOsSSJN4IUnT0A9AL8CsvXZMU3GF7nY8cOjoGG3qNxFmrh1K3PJIJ%2FVkbaqikAFBRYptHfg7nSk3UVXNhR&X-Amz-Signature=d75339009bda92a44139713fd58478419ba1c9d5852e63522d3ae87852d6064a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKKWPOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCXA%2FoxldA%2BGvXZhDRRTgQbMki0p6tEPRAvI9a9BS%2B4HgIhAMM0HXzQRzL88SVXFUeHb1VD%2BmErnxg2STJxO%2FBZnf9GKv8DCHsQABoMNjM3NDIzMTgzODA1IgxIMqr%2BmqirZXE0rEoq3AOI43AgsmFH9gxhM%2B3is1R0G0KOy6icXsC%2FTN6BdjENhgDZqVQV%2BHLPIB8W7tIZb7dz0b1LbOFY5RZuSJuL3FWTquMP8IXouG1cDUka3h3MGknieSFw4vU5yiEXc4p4HnfSvZxZThmKIKXpfCg7dJMylcDgMkOB6SMc9bQ%2FDL%2FZIbKh9qIwJ%2B77yW3b9G6tKHNDtrm23MJRYME0EdIGeRFdRHwOWfFTM%2BRFn5Kp%2BddQ9hO90638daiQOic%2FM2R00kmx5VPqSDSYsjpvut7qOlW2UC5adLzkC7AshY1vrSwQsdcs%2F7HUi8y4JmRa4fMYHZHXIBQAmK%2BCaP8C0AB613QJP%2F0AKoidYqYDAXRZXpHB0TcDc2M9FPX1glvt9cC2eg7ljgP97aUYtSfJX1u09kj86xlPLfhqXDJ6EBchWNgHvuEEGqsjTTD%2FEADzrEOO2bVIW%2Fdr0o2iPqoY59bfl7TPT2CwDJ4xNwXmX1C5lFyBybnWoJTvfPfyfwg4ymICEA0EEsu9Ag648h4ayxaIimqIRDPUoTlIf7siMoYAN5h04j7tED38P1s15%2FlEBwvsaM1UM1OB%2BwMPmD9Yk9pdy8ItOuo5tpLOaSUKa0V0nCjsaZHkqZgp%2FiOKAYnZ6DCtlrDDBjqkAbguvVscX9%2BeVcn4U%2F%2FI5qevYsUrWdUlAr1almE1MippNssrjWj5RBB5H9GV4y52RUfwjNgGew9i%2FS61xcqCYODmlL9tVEgDdVOqCKRor%2B4LCYj%2FyZNkeKyHbDGMSG7teTQgBIDCNNqOsSSJN4IUnT0A9AL8CsvXZMU3GF7nY8cOjoGG3qNxFmrh1K3PJIJ%2FVkbaqikAFBRYptHfg7nSk3UVXNhR&X-Amz-Signature=9c86f60eec0c23248e185d160be3266602a2e930d71f2e0307618d93ccba79d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKKWPOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCXA%2FoxldA%2BGvXZhDRRTgQbMki0p6tEPRAvI9a9BS%2B4HgIhAMM0HXzQRzL88SVXFUeHb1VD%2BmErnxg2STJxO%2FBZnf9GKv8DCHsQABoMNjM3NDIzMTgzODA1IgxIMqr%2BmqirZXE0rEoq3AOI43AgsmFH9gxhM%2B3is1R0G0KOy6icXsC%2FTN6BdjENhgDZqVQV%2BHLPIB8W7tIZb7dz0b1LbOFY5RZuSJuL3FWTquMP8IXouG1cDUka3h3MGknieSFw4vU5yiEXc4p4HnfSvZxZThmKIKXpfCg7dJMylcDgMkOB6SMc9bQ%2FDL%2FZIbKh9qIwJ%2B77yW3b9G6tKHNDtrm23MJRYME0EdIGeRFdRHwOWfFTM%2BRFn5Kp%2BddQ9hO90638daiQOic%2FM2R00kmx5VPqSDSYsjpvut7qOlW2UC5adLzkC7AshY1vrSwQsdcs%2F7HUi8y4JmRa4fMYHZHXIBQAmK%2BCaP8C0AB613QJP%2F0AKoidYqYDAXRZXpHB0TcDc2M9FPX1glvt9cC2eg7ljgP97aUYtSfJX1u09kj86xlPLfhqXDJ6EBchWNgHvuEEGqsjTTD%2FEADzrEOO2bVIW%2Fdr0o2iPqoY59bfl7TPT2CwDJ4xNwXmX1C5lFyBybnWoJTvfPfyfwg4ymICEA0EEsu9Ag648h4ayxaIimqIRDPUoTlIf7siMoYAN5h04j7tED38P1s15%2FlEBwvsaM1UM1OB%2BwMPmD9Yk9pdy8ItOuo5tpLOaSUKa0V0nCjsaZHkqZgp%2FiOKAYnZ6DCtlrDDBjqkAbguvVscX9%2BeVcn4U%2F%2FI5qevYsUrWdUlAr1almE1MippNssrjWj5RBB5H9GV4y52RUfwjNgGew9i%2FS61xcqCYODmlL9tVEgDdVOqCKRor%2B4LCYj%2FyZNkeKyHbDGMSG7teTQgBIDCNNqOsSSJN4IUnT0A9AL8CsvXZMU3GF7nY8cOjoGG3qNxFmrh1K3PJIJ%2FVkbaqikAFBRYptHfg7nSk3UVXNhR&X-Amz-Signature=9e6dfdcaa401aafa9bcf4b9111f6bb47e4492383d00549e583f99912c48098bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKKWPOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCXA%2FoxldA%2BGvXZhDRRTgQbMki0p6tEPRAvI9a9BS%2B4HgIhAMM0HXzQRzL88SVXFUeHb1VD%2BmErnxg2STJxO%2FBZnf9GKv8DCHsQABoMNjM3NDIzMTgzODA1IgxIMqr%2BmqirZXE0rEoq3AOI43AgsmFH9gxhM%2B3is1R0G0KOy6icXsC%2FTN6BdjENhgDZqVQV%2BHLPIB8W7tIZb7dz0b1LbOFY5RZuSJuL3FWTquMP8IXouG1cDUka3h3MGknieSFw4vU5yiEXc4p4HnfSvZxZThmKIKXpfCg7dJMylcDgMkOB6SMc9bQ%2FDL%2FZIbKh9qIwJ%2B77yW3b9G6tKHNDtrm23MJRYME0EdIGeRFdRHwOWfFTM%2BRFn5Kp%2BddQ9hO90638daiQOic%2FM2R00kmx5VPqSDSYsjpvut7qOlW2UC5adLzkC7AshY1vrSwQsdcs%2F7HUi8y4JmRa4fMYHZHXIBQAmK%2BCaP8C0AB613QJP%2F0AKoidYqYDAXRZXpHB0TcDc2M9FPX1glvt9cC2eg7ljgP97aUYtSfJX1u09kj86xlPLfhqXDJ6EBchWNgHvuEEGqsjTTD%2FEADzrEOO2bVIW%2Fdr0o2iPqoY59bfl7TPT2CwDJ4xNwXmX1C5lFyBybnWoJTvfPfyfwg4ymICEA0EEsu9Ag648h4ayxaIimqIRDPUoTlIf7siMoYAN5h04j7tED38P1s15%2FlEBwvsaM1UM1OB%2BwMPmD9Yk9pdy8ItOuo5tpLOaSUKa0V0nCjsaZHkqZgp%2FiOKAYnZ6DCtlrDDBjqkAbguvVscX9%2BeVcn4U%2F%2FI5qevYsUrWdUlAr1almE1MippNssrjWj5RBB5H9GV4y52RUfwjNgGew9i%2FS61xcqCYODmlL9tVEgDdVOqCKRor%2B4LCYj%2FyZNkeKyHbDGMSG7teTQgBIDCNNqOsSSJN4IUnT0A9AL8CsvXZMU3GF7nY8cOjoGG3qNxFmrh1K3PJIJ%2FVkbaqikAFBRYptHfg7nSk3UVXNhR&X-Amz-Signature=e405b7de4494a32af2fc1ebb841dcbc13b40c05300eb5db318da6c38fdf3da22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKKWPOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCXA%2FoxldA%2BGvXZhDRRTgQbMki0p6tEPRAvI9a9BS%2B4HgIhAMM0HXzQRzL88SVXFUeHb1VD%2BmErnxg2STJxO%2FBZnf9GKv8DCHsQABoMNjM3NDIzMTgzODA1IgxIMqr%2BmqirZXE0rEoq3AOI43AgsmFH9gxhM%2B3is1R0G0KOy6icXsC%2FTN6BdjENhgDZqVQV%2BHLPIB8W7tIZb7dz0b1LbOFY5RZuSJuL3FWTquMP8IXouG1cDUka3h3MGknieSFw4vU5yiEXc4p4HnfSvZxZThmKIKXpfCg7dJMylcDgMkOB6SMc9bQ%2FDL%2FZIbKh9qIwJ%2B77yW3b9G6tKHNDtrm23MJRYME0EdIGeRFdRHwOWfFTM%2BRFn5Kp%2BddQ9hO90638daiQOic%2FM2R00kmx5VPqSDSYsjpvut7qOlW2UC5adLzkC7AshY1vrSwQsdcs%2F7HUi8y4JmRa4fMYHZHXIBQAmK%2BCaP8C0AB613QJP%2F0AKoidYqYDAXRZXpHB0TcDc2M9FPX1glvt9cC2eg7ljgP97aUYtSfJX1u09kj86xlPLfhqXDJ6EBchWNgHvuEEGqsjTTD%2FEADzrEOO2bVIW%2Fdr0o2iPqoY59bfl7TPT2CwDJ4xNwXmX1C5lFyBybnWoJTvfPfyfwg4ymICEA0EEsu9Ag648h4ayxaIimqIRDPUoTlIf7siMoYAN5h04j7tED38P1s15%2FlEBwvsaM1UM1OB%2BwMPmD9Yk9pdy8ItOuo5tpLOaSUKa0V0nCjsaZHkqZgp%2FiOKAYnZ6DCtlrDDBjqkAbguvVscX9%2BeVcn4U%2F%2FI5qevYsUrWdUlAr1almE1MippNssrjWj5RBB5H9GV4y52RUfwjNgGew9i%2FS61xcqCYODmlL9tVEgDdVOqCKRor%2B4LCYj%2FyZNkeKyHbDGMSG7teTQgBIDCNNqOsSSJN4IUnT0A9AL8CsvXZMU3GF7nY8cOjoGG3qNxFmrh1K3PJIJ%2FVkbaqikAFBRYptHfg7nSk3UVXNhR&X-Amz-Signature=bf6bdf559161abcc3d01c70db6e07fa6948f87cb56d5a4de92028fcdc367fb45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKKWPOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCXA%2FoxldA%2BGvXZhDRRTgQbMki0p6tEPRAvI9a9BS%2B4HgIhAMM0HXzQRzL88SVXFUeHb1VD%2BmErnxg2STJxO%2FBZnf9GKv8DCHsQABoMNjM3NDIzMTgzODA1IgxIMqr%2BmqirZXE0rEoq3AOI43AgsmFH9gxhM%2B3is1R0G0KOy6icXsC%2FTN6BdjENhgDZqVQV%2BHLPIB8W7tIZb7dz0b1LbOFY5RZuSJuL3FWTquMP8IXouG1cDUka3h3MGknieSFw4vU5yiEXc4p4HnfSvZxZThmKIKXpfCg7dJMylcDgMkOB6SMc9bQ%2FDL%2FZIbKh9qIwJ%2B77yW3b9G6tKHNDtrm23MJRYME0EdIGeRFdRHwOWfFTM%2BRFn5Kp%2BddQ9hO90638daiQOic%2FM2R00kmx5VPqSDSYsjpvut7qOlW2UC5adLzkC7AshY1vrSwQsdcs%2F7HUi8y4JmRa4fMYHZHXIBQAmK%2BCaP8C0AB613QJP%2F0AKoidYqYDAXRZXpHB0TcDc2M9FPX1glvt9cC2eg7ljgP97aUYtSfJX1u09kj86xlPLfhqXDJ6EBchWNgHvuEEGqsjTTD%2FEADzrEOO2bVIW%2Fdr0o2iPqoY59bfl7TPT2CwDJ4xNwXmX1C5lFyBybnWoJTvfPfyfwg4ymICEA0EEsu9Ag648h4ayxaIimqIRDPUoTlIf7siMoYAN5h04j7tED38P1s15%2FlEBwvsaM1UM1OB%2BwMPmD9Yk9pdy8ItOuo5tpLOaSUKa0V0nCjsaZHkqZgp%2FiOKAYnZ6DCtlrDDBjqkAbguvVscX9%2BeVcn4U%2F%2FI5qevYsUrWdUlAr1almE1MippNssrjWj5RBB5H9GV4y52RUfwjNgGew9i%2FS61xcqCYODmlL9tVEgDdVOqCKRor%2B4LCYj%2FyZNkeKyHbDGMSG7teTQgBIDCNNqOsSSJN4IUnT0A9AL8CsvXZMU3GF7nY8cOjoGG3qNxFmrh1K3PJIJ%2FVkbaqikAFBRYptHfg7nSk3UVXNhR&X-Amz-Signature=eb300b1fa0103a2b338fb6614a1c2c742b20d98cabc24e5ecb530a19f253ad21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
