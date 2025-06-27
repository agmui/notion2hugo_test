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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6P754GT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCc3WId5gNj%2BSM12qE%2Bn7CthF52Wb5no4iX0aPnTX3ZFQIhAIozGpZDc75nNAgbm5jmbDJcKfnBLs%2Fy2g9iaPjnwAegKv8DCHMQABoMNjM3NDIzMTgzODA1IgyUHMJvTalDmQufw4Aq3AM%2FLpcX7apr2YDKpzJiD%2BRXaGhhCXHLlIQFzh0R3SH9FNb90igCbFJ9jcrsYuFvzRnds%2B%2BOc1CjS5e16TtzcszndlxxWhbhHsxFIsH3p8EBlw7uEYGgeQpVB0FCW9VZsJnPCNDxqRmzDZABNvQEZJWqpTzAC3gUreEmFoxHtJ8v2WW%2BmL20atTu4jpOAyz9zsf5hXTFttiiJetqJkiC5L4y%2FmDhrJ2AA%2FGbJTeid6C7GmGAwp1pnCBg2ZmbJnPWv2JKPK%2BNYKskSRGYEbsWteeuHxCOYuIdctAC1pD7bx%2B%2BzNFXA%2FH21QkaxvjT0nCHtwXfkKsZ1n3imxG5QM1FuRRUFmh8VufD1RYiVHlsnXjkBdXlQtaTnaB9psOQSjwqNsHY0jlwoEZzvc96Ptg0jFHnehrkcbytPwOn9B1mlBJrOtWft%2FBWHmmCE17sLp4D8wpdYFGyqmmYELn9UJLC2KaVrstEDn1BWGo9itjpaJeod5WdhPYr%2BcavMVRSJoP3NSjeHb3jIYSq5Nc3HHt9lxkHxn3m2L3tgiY8ze6ANNk83iHNZMnGfGzbCOpUNWxrdBTdhYcBs4DEqjKrCwX34INOEwG5HlUwdhq%2Fl3f%2FNjhrO%2Fgay6RyRZe1tgU2nTD50%2FnCBjqkAfSnZ7qnWsEfddJ1nPaVg%2Fx4L4syWh9yFPw13fj1kEb568zlQOeAhZnhsEyKCIrHmiRR%2FY7QaDTvG1BDxUVA%2FN4InmL1YR3g4FqP5vHzwa6IKXpCKrZzsANQ49Q64LW8tkdMR%2BpqgqRn5lCePqXz%2BsWZpp3V9kUirPMNoPZnJEMPAxdD3d5Q8l3WmsYIuru3FBIGbvL68B37Ii0bEl7luT01tPbJ&X-Amz-Signature=80ba38d5bbd526f1af84862976ffe9888582c9aeaf6a0c4160b41f9a95740d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6P754GT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCc3WId5gNj%2BSM12qE%2Bn7CthF52Wb5no4iX0aPnTX3ZFQIhAIozGpZDc75nNAgbm5jmbDJcKfnBLs%2Fy2g9iaPjnwAegKv8DCHMQABoMNjM3NDIzMTgzODA1IgyUHMJvTalDmQufw4Aq3AM%2FLpcX7apr2YDKpzJiD%2BRXaGhhCXHLlIQFzh0R3SH9FNb90igCbFJ9jcrsYuFvzRnds%2B%2BOc1CjS5e16TtzcszndlxxWhbhHsxFIsH3p8EBlw7uEYGgeQpVB0FCW9VZsJnPCNDxqRmzDZABNvQEZJWqpTzAC3gUreEmFoxHtJ8v2WW%2BmL20atTu4jpOAyz9zsf5hXTFttiiJetqJkiC5L4y%2FmDhrJ2AA%2FGbJTeid6C7GmGAwp1pnCBg2ZmbJnPWv2JKPK%2BNYKskSRGYEbsWteeuHxCOYuIdctAC1pD7bx%2B%2BzNFXA%2FH21QkaxvjT0nCHtwXfkKsZ1n3imxG5QM1FuRRUFmh8VufD1RYiVHlsnXjkBdXlQtaTnaB9psOQSjwqNsHY0jlwoEZzvc96Ptg0jFHnehrkcbytPwOn9B1mlBJrOtWft%2FBWHmmCE17sLp4D8wpdYFGyqmmYELn9UJLC2KaVrstEDn1BWGo9itjpaJeod5WdhPYr%2BcavMVRSJoP3NSjeHb3jIYSq5Nc3HHt9lxkHxn3m2L3tgiY8ze6ANNk83iHNZMnGfGzbCOpUNWxrdBTdhYcBs4DEqjKrCwX34INOEwG5HlUwdhq%2Fl3f%2FNjhrO%2Fgay6RyRZe1tgU2nTD50%2FnCBjqkAfSnZ7qnWsEfddJ1nPaVg%2Fx4L4syWh9yFPw13fj1kEb568zlQOeAhZnhsEyKCIrHmiRR%2FY7QaDTvG1BDxUVA%2FN4InmL1YR3g4FqP5vHzwa6IKXpCKrZzsANQ49Q64LW8tkdMR%2BpqgqRn5lCePqXz%2BsWZpp3V9kUirPMNoPZnJEMPAxdD3d5Q8l3WmsYIuru3FBIGbvL68B37Ii0bEl7luT01tPbJ&X-Amz-Signature=a7682b6f54ffb094a72337a3273a489c3d733ec7fbbf022eda16ac8887c26de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6P754GT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCc3WId5gNj%2BSM12qE%2Bn7CthF52Wb5no4iX0aPnTX3ZFQIhAIozGpZDc75nNAgbm5jmbDJcKfnBLs%2Fy2g9iaPjnwAegKv8DCHMQABoMNjM3NDIzMTgzODA1IgyUHMJvTalDmQufw4Aq3AM%2FLpcX7apr2YDKpzJiD%2BRXaGhhCXHLlIQFzh0R3SH9FNb90igCbFJ9jcrsYuFvzRnds%2B%2BOc1CjS5e16TtzcszndlxxWhbhHsxFIsH3p8EBlw7uEYGgeQpVB0FCW9VZsJnPCNDxqRmzDZABNvQEZJWqpTzAC3gUreEmFoxHtJ8v2WW%2BmL20atTu4jpOAyz9zsf5hXTFttiiJetqJkiC5L4y%2FmDhrJ2AA%2FGbJTeid6C7GmGAwp1pnCBg2ZmbJnPWv2JKPK%2BNYKskSRGYEbsWteeuHxCOYuIdctAC1pD7bx%2B%2BzNFXA%2FH21QkaxvjT0nCHtwXfkKsZ1n3imxG5QM1FuRRUFmh8VufD1RYiVHlsnXjkBdXlQtaTnaB9psOQSjwqNsHY0jlwoEZzvc96Ptg0jFHnehrkcbytPwOn9B1mlBJrOtWft%2FBWHmmCE17sLp4D8wpdYFGyqmmYELn9UJLC2KaVrstEDn1BWGo9itjpaJeod5WdhPYr%2BcavMVRSJoP3NSjeHb3jIYSq5Nc3HHt9lxkHxn3m2L3tgiY8ze6ANNk83iHNZMnGfGzbCOpUNWxrdBTdhYcBs4DEqjKrCwX34INOEwG5HlUwdhq%2Fl3f%2FNjhrO%2Fgay6RyRZe1tgU2nTD50%2FnCBjqkAfSnZ7qnWsEfddJ1nPaVg%2Fx4L4syWh9yFPw13fj1kEb568zlQOeAhZnhsEyKCIrHmiRR%2FY7QaDTvG1BDxUVA%2FN4InmL1YR3g4FqP5vHzwa6IKXpCKrZzsANQ49Q64LW8tkdMR%2BpqgqRn5lCePqXz%2BsWZpp3V9kUirPMNoPZnJEMPAxdD3d5Q8l3WmsYIuru3FBIGbvL68B37Ii0bEl7luT01tPbJ&X-Amz-Signature=16ee09f0ce1952f2626d8712bae33006ee700b0f6ef261906d2c20ce1bc85d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6P754GT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCc3WId5gNj%2BSM12qE%2Bn7CthF52Wb5no4iX0aPnTX3ZFQIhAIozGpZDc75nNAgbm5jmbDJcKfnBLs%2Fy2g9iaPjnwAegKv8DCHMQABoMNjM3NDIzMTgzODA1IgyUHMJvTalDmQufw4Aq3AM%2FLpcX7apr2YDKpzJiD%2BRXaGhhCXHLlIQFzh0R3SH9FNb90igCbFJ9jcrsYuFvzRnds%2B%2BOc1CjS5e16TtzcszndlxxWhbhHsxFIsH3p8EBlw7uEYGgeQpVB0FCW9VZsJnPCNDxqRmzDZABNvQEZJWqpTzAC3gUreEmFoxHtJ8v2WW%2BmL20atTu4jpOAyz9zsf5hXTFttiiJetqJkiC5L4y%2FmDhrJ2AA%2FGbJTeid6C7GmGAwp1pnCBg2ZmbJnPWv2JKPK%2BNYKskSRGYEbsWteeuHxCOYuIdctAC1pD7bx%2B%2BzNFXA%2FH21QkaxvjT0nCHtwXfkKsZ1n3imxG5QM1FuRRUFmh8VufD1RYiVHlsnXjkBdXlQtaTnaB9psOQSjwqNsHY0jlwoEZzvc96Ptg0jFHnehrkcbytPwOn9B1mlBJrOtWft%2FBWHmmCE17sLp4D8wpdYFGyqmmYELn9UJLC2KaVrstEDn1BWGo9itjpaJeod5WdhPYr%2BcavMVRSJoP3NSjeHb3jIYSq5Nc3HHt9lxkHxn3m2L3tgiY8ze6ANNk83iHNZMnGfGzbCOpUNWxrdBTdhYcBs4DEqjKrCwX34INOEwG5HlUwdhq%2Fl3f%2FNjhrO%2Fgay6RyRZe1tgU2nTD50%2FnCBjqkAfSnZ7qnWsEfddJ1nPaVg%2Fx4L4syWh9yFPw13fj1kEb568zlQOeAhZnhsEyKCIrHmiRR%2FY7QaDTvG1BDxUVA%2FN4InmL1YR3g4FqP5vHzwa6IKXpCKrZzsANQ49Q64LW8tkdMR%2BpqgqRn5lCePqXz%2BsWZpp3V9kUirPMNoPZnJEMPAxdD3d5Q8l3WmsYIuru3FBIGbvL68B37Ii0bEl7luT01tPbJ&X-Amz-Signature=361b47c0251484071fd62f3228dc6ee3045913584485e93100d5222304f26350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6P754GT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCc3WId5gNj%2BSM12qE%2Bn7CthF52Wb5no4iX0aPnTX3ZFQIhAIozGpZDc75nNAgbm5jmbDJcKfnBLs%2Fy2g9iaPjnwAegKv8DCHMQABoMNjM3NDIzMTgzODA1IgyUHMJvTalDmQufw4Aq3AM%2FLpcX7apr2YDKpzJiD%2BRXaGhhCXHLlIQFzh0R3SH9FNb90igCbFJ9jcrsYuFvzRnds%2B%2BOc1CjS5e16TtzcszndlxxWhbhHsxFIsH3p8EBlw7uEYGgeQpVB0FCW9VZsJnPCNDxqRmzDZABNvQEZJWqpTzAC3gUreEmFoxHtJ8v2WW%2BmL20atTu4jpOAyz9zsf5hXTFttiiJetqJkiC5L4y%2FmDhrJ2AA%2FGbJTeid6C7GmGAwp1pnCBg2ZmbJnPWv2JKPK%2BNYKskSRGYEbsWteeuHxCOYuIdctAC1pD7bx%2B%2BzNFXA%2FH21QkaxvjT0nCHtwXfkKsZ1n3imxG5QM1FuRRUFmh8VufD1RYiVHlsnXjkBdXlQtaTnaB9psOQSjwqNsHY0jlwoEZzvc96Ptg0jFHnehrkcbytPwOn9B1mlBJrOtWft%2FBWHmmCE17sLp4D8wpdYFGyqmmYELn9UJLC2KaVrstEDn1BWGo9itjpaJeod5WdhPYr%2BcavMVRSJoP3NSjeHb3jIYSq5Nc3HHt9lxkHxn3m2L3tgiY8ze6ANNk83iHNZMnGfGzbCOpUNWxrdBTdhYcBs4DEqjKrCwX34INOEwG5HlUwdhq%2Fl3f%2FNjhrO%2Fgay6RyRZe1tgU2nTD50%2FnCBjqkAfSnZ7qnWsEfddJ1nPaVg%2Fx4L4syWh9yFPw13fj1kEb568zlQOeAhZnhsEyKCIrHmiRR%2FY7QaDTvG1BDxUVA%2FN4InmL1YR3g4FqP5vHzwa6IKXpCKrZzsANQ49Q64LW8tkdMR%2BpqgqRn5lCePqXz%2BsWZpp3V9kUirPMNoPZnJEMPAxdD3d5Q8l3WmsYIuru3FBIGbvL68B37Ii0bEl7luT01tPbJ&X-Amz-Signature=aebf21173ae7879ec8e4defb65cf03fa1e78406f36e98b5f8e3b42310ed6e5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6P754GT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCc3WId5gNj%2BSM12qE%2Bn7CthF52Wb5no4iX0aPnTX3ZFQIhAIozGpZDc75nNAgbm5jmbDJcKfnBLs%2Fy2g9iaPjnwAegKv8DCHMQABoMNjM3NDIzMTgzODA1IgyUHMJvTalDmQufw4Aq3AM%2FLpcX7apr2YDKpzJiD%2BRXaGhhCXHLlIQFzh0R3SH9FNb90igCbFJ9jcrsYuFvzRnds%2B%2BOc1CjS5e16TtzcszndlxxWhbhHsxFIsH3p8EBlw7uEYGgeQpVB0FCW9VZsJnPCNDxqRmzDZABNvQEZJWqpTzAC3gUreEmFoxHtJ8v2WW%2BmL20atTu4jpOAyz9zsf5hXTFttiiJetqJkiC5L4y%2FmDhrJ2AA%2FGbJTeid6C7GmGAwp1pnCBg2ZmbJnPWv2JKPK%2BNYKskSRGYEbsWteeuHxCOYuIdctAC1pD7bx%2B%2BzNFXA%2FH21QkaxvjT0nCHtwXfkKsZ1n3imxG5QM1FuRRUFmh8VufD1RYiVHlsnXjkBdXlQtaTnaB9psOQSjwqNsHY0jlwoEZzvc96Ptg0jFHnehrkcbytPwOn9B1mlBJrOtWft%2FBWHmmCE17sLp4D8wpdYFGyqmmYELn9UJLC2KaVrstEDn1BWGo9itjpaJeod5WdhPYr%2BcavMVRSJoP3NSjeHb3jIYSq5Nc3HHt9lxkHxn3m2L3tgiY8ze6ANNk83iHNZMnGfGzbCOpUNWxrdBTdhYcBs4DEqjKrCwX34INOEwG5HlUwdhq%2Fl3f%2FNjhrO%2Fgay6RyRZe1tgU2nTD50%2FnCBjqkAfSnZ7qnWsEfddJ1nPaVg%2Fx4L4syWh9yFPw13fj1kEb568zlQOeAhZnhsEyKCIrHmiRR%2FY7QaDTvG1BDxUVA%2FN4InmL1YR3g4FqP5vHzwa6IKXpCKrZzsANQ49Q64LW8tkdMR%2BpqgqRn5lCePqXz%2BsWZpp3V9kUirPMNoPZnJEMPAxdD3d5Q8l3WmsYIuru3FBIGbvL68B37Ii0bEl7luT01tPbJ&X-Amz-Signature=6312e3450354fa15f314bd463ab95e1790b0d652a9522e6fbbfc8cdd3ba68ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6P754GT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCc3WId5gNj%2BSM12qE%2Bn7CthF52Wb5no4iX0aPnTX3ZFQIhAIozGpZDc75nNAgbm5jmbDJcKfnBLs%2Fy2g9iaPjnwAegKv8DCHMQABoMNjM3NDIzMTgzODA1IgyUHMJvTalDmQufw4Aq3AM%2FLpcX7apr2YDKpzJiD%2BRXaGhhCXHLlIQFzh0R3SH9FNb90igCbFJ9jcrsYuFvzRnds%2B%2BOc1CjS5e16TtzcszndlxxWhbhHsxFIsH3p8EBlw7uEYGgeQpVB0FCW9VZsJnPCNDxqRmzDZABNvQEZJWqpTzAC3gUreEmFoxHtJ8v2WW%2BmL20atTu4jpOAyz9zsf5hXTFttiiJetqJkiC5L4y%2FmDhrJ2AA%2FGbJTeid6C7GmGAwp1pnCBg2ZmbJnPWv2JKPK%2BNYKskSRGYEbsWteeuHxCOYuIdctAC1pD7bx%2B%2BzNFXA%2FH21QkaxvjT0nCHtwXfkKsZ1n3imxG5QM1FuRRUFmh8VufD1RYiVHlsnXjkBdXlQtaTnaB9psOQSjwqNsHY0jlwoEZzvc96Ptg0jFHnehrkcbytPwOn9B1mlBJrOtWft%2FBWHmmCE17sLp4D8wpdYFGyqmmYELn9UJLC2KaVrstEDn1BWGo9itjpaJeod5WdhPYr%2BcavMVRSJoP3NSjeHb3jIYSq5Nc3HHt9lxkHxn3m2L3tgiY8ze6ANNk83iHNZMnGfGzbCOpUNWxrdBTdhYcBs4DEqjKrCwX34INOEwG5HlUwdhq%2Fl3f%2FNjhrO%2Fgay6RyRZe1tgU2nTD50%2FnCBjqkAfSnZ7qnWsEfddJ1nPaVg%2Fx4L4syWh9yFPw13fj1kEb568zlQOeAhZnhsEyKCIrHmiRR%2FY7QaDTvG1BDxUVA%2FN4InmL1YR3g4FqP5vHzwa6IKXpCKrZzsANQ49Q64LW8tkdMR%2BpqgqRn5lCePqXz%2BsWZpp3V9kUirPMNoPZnJEMPAxdD3d5Q8l3WmsYIuru3FBIGbvL68B37Ii0bEl7luT01tPbJ&X-Amz-Signature=a9a06b2ff231ffc0aa1292b2900a1fd64ca3d0257ca5d474699a5d292e7a9d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
