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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DISBJ7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEp9Phc2VeSRQwp83NBCrpznQnA6Wb6UVTediR2a1brqAiAR%2BRjKeM6AwI8nB7X7%2B%2F%2F63Ls3OLMRpQK6B7qsHT9L7iqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJ1gwETwsZkYXgsYKtwDFRHO6NmaFs08l0pp%2FdVE05ekk1z9IlBQB05hy%2BblGfzDvLjF%2FhALjnbP6dwtJ4zE8NpbQJFgdvDEtmGB7nRECHNxTzDVNBYYEIztSOEErQEuEC5x1Q9EAdIf3yhQ3G5gLcpZ4nT1if%2B8dh3PCfnqiW9oEf3PbgVNTaDTE%2BZlI0XrEK7MRQRUy3l64NsHp6V%2BVPY1Vm5VnjQ0bYeEUZrbLe1SvC8EYvbAM3tId5ieMIXYJ7vkJqhzpjo7wn8bF%2BzIhxMHNZKckF70L0W4Xnj1ipWUHeUuhUkInADto2pP1ZoLumJWF01w1ARHVoAInHhEfX7bpW4YH0aPbBiYHs5anAtC7jdWgLuGPDRW98PiMgM4QAVGO2LBdNel%2BDoAVTw9SlmB0NzsdlD%2FftUibgSNjaQuXCVSfFZmVnOf5SO0bWFPIdhpQ3WvseRG%2FWb4kGH8qwuPJHm1aADe1bMF0H26dP%2BWM8QmxQjPcvyjDHJS%2BNItoPo0d6L%2Fk19ImrYZ2EYFeMvz%2BHGfD%2BHTgiekm7Hut5osUMg2yQyLeea6GNqd8Wptg1dD5JFx%2F%2FDUkg%2FXbfL2%2BLnurskotKRahODHiQL1Qn%2BKxNxlSfJUBXvGnKeZwzyVpMWqvmx%2BRlHS8FcwvPK0vQY6pgE4ULzOy6UHyPd6DjYg6yxI0RZjPRKJqzV3xALUVD%2BI%2Fwm3ZmIsJglnWMFiVZivu%2BMdqvUo6FpokzrI6pNxACCxenbc5xT8KZ3oUFQv7JPjVL94WvDMeHkIIqBIu7PeZzkdPhj%2FMfPw10tPeHcLuXTub6e%2BkjX4bJU2K%2F6E%2FmjBK9XllO%2BQN775EE31a7scp0Ifuktd6sZAebw%2FZAeS1uREvrjr249x&X-Amz-Signature=3a1324fa447cf3a60c7a4d48b6956eb7993f3c469daacd22e0ea65e08ce1bca4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DISBJ7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEp9Phc2VeSRQwp83NBCrpznQnA6Wb6UVTediR2a1brqAiAR%2BRjKeM6AwI8nB7X7%2B%2F%2F63Ls3OLMRpQK6B7qsHT9L7iqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJ1gwETwsZkYXgsYKtwDFRHO6NmaFs08l0pp%2FdVE05ekk1z9IlBQB05hy%2BblGfzDvLjF%2FhALjnbP6dwtJ4zE8NpbQJFgdvDEtmGB7nRECHNxTzDVNBYYEIztSOEErQEuEC5x1Q9EAdIf3yhQ3G5gLcpZ4nT1if%2B8dh3PCfnqiW9oEf3PbgVNTaDTE%2BZlI0XrEK7MRQRUy3l64NsHp6V%2BVPY1Vm5VnjQ0bYeEUZrbLe1SvC8EYvbAM3tId5ieMIXYJ7vkJqhzpjo7wn8bF%2BzIhxMHNZKckF70L0W4Xnj1ipWUHeUuhUkInADto2pP1ZoLumJWF01w1ARHVoAInHhEfX7bpW4YH0aPbBiYHs5anAtC7jdWgLuGPDRW98PiMgM4QAVGO2LBdNel%2BDoAVTw9SlmB0NzsdlD%2FftUibgSNjaQuXCVSfFZmVnOf5SO0bWFPIdhpQ3WvseRG%2FWb4kGH8qwuPJHm1aADe1bMF0H26dP%2BWM8QmxQjPcvyjDHJS%2BNItoPo0d6L%2Fk19ImrYZ2EYFeMvz%2BHGfD%2BHTgiekm7Hut5osUMg2yQyLeea6GNqd8Wptg1dD5JFx%2F%2FDUkg%2FXbfL2%2BLnurskotKRahODHiQL1Qn%2BKxNxlSfJUBXvGnKeZwzyVpMWqvmx%2BRlHS8FcwvPK0vQY6pgE4ULzOy6UHyPd6DjYg6yxI0RZjPRKJqzV3xALUVD%2BI%2Fwm3ZmIsJglnWMFiVZivu%2BMdqvUo6FpokzrI6pNxACCxenbc5xT8KZ3oUFQv7JPjVL94WvDMeHkIIqBIu7PeZzkdPhj%2FMfPw10tPeHcLuXTub6e%2BkjX4bJU2K%2F6E%2FmjBK9XllO%2BQN775EE31a7scp0Ifuktd6sZAebw%2FZAeS1uREvrjr249x&X-Amz-Signature=f224083bd53176036d43f6f74013adabd1543072fd6e7e34ae3ea7275341b6ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DISBJ7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEp9Phc2VeSRQwp83NBCrpznQnA6Wb6UVTediR2a1brqAiAR%2BRjKeM6AwI8nB7X7%2B%2F%2F63Ls3OLMRpQK6B7qsHT9L7iqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJ1gwETwsZkYXgsYKtwDFRHO6NmaFs08l0pp%2FdVE05ekk1z9IlBQB05hy%2BblGfzDvLjF%2FhALjnbP6dwtJ4zE8NpbQJFgdvDEtmGB7nRECHNxTzDVNBYYEIztSOEErQEuEC5x1Q9EAdIf3yhQ3G5gLcpZ4nT1if%2B8dh3PCfnqiW9oEf3PbgVNTaDTE%2BZlI0XrEK7MRQRUy3l64NsHp6V%2BVPY1Vm5VnjQ0bYeEUZrbLe1SvC8EYvbAM3tId5ieMIXYJ7vkJqhzpjo7wn8bF%2BzIhxMHNZKckF70L0W4Xnj1ipWUHeUuhUkInADto2pP1ZoLumJWF01w1ARHVoAInHhEfX7bpW4YH0aPbBiYHs5anAtC7jdWgLuGPDRW98PiMgM4QAVGO2LBdNel%2BDoAVTw9SlmB0NzsdlD%2FftUibgSNjaQuXCVSfFZmVnOf5SO0bWFPIdhpQ3WvseRG%2FWb4kGH8qwuPJHm1aADe1bMF0H26dP%2BWM8QmxQjPcvyjDHJS%2BNItoPo0d6L%2Fk19ImrYZ2EYFeMvz%2BHGfD%2BHTgiekm7Hut5osUMg2yQyLeea6GNqd8Wptg1dD5JFx%2F%2FDUkg%2FXbfL2%2BLnurskotKRahODHiQL1Qn%2BKxNxlSfJUBXvGnKeZwzyVpMWqvmx%2BRlHS8FcwvPK0vQY6pgE4ULzOy6UHyPd6DjYg6yxI0RZjPRKJqzV3xALUVD%2BI%2Fwm3ZmIsJglnWMFiVZivu%2BMdqvUo6FpokzrI6pNxACCxenbc5xT8KZ3oUFQv7JPjVL94WvDMeHkIIqBIu7PeZzkdPhj%2FMfPw10tPeHcLuXTub6e%2BkjX4bJU2K%2F6E%2FmjBK9XllO%2BQN775EE31a7scp0Ifuktd6sZAebw%2FZAeS1uREvrjr249x&X-Amz-Signature=e6caa69eae1251463574a90669f36e572d69083107c8b8a83313e016110e1812&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DISBJ7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEp9Phc2VeSRQwp83NBCrpznQnA6Wb6UVTediR2a1brqAiAR%2BRjKeM6AwI8nB7X7%2B%2F%2F63Ls3OLMRpQK6B7qsHT9L7iqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJ1gwETwsZkYXgsYKtwDFRHO6NmaFs08l0pp%2FdVE05ekk1z9IlBQB05hy%2BblGfzDvLjF%2FhALjnbP6dwtJ4zE8NpbQJFgdvDEtmGB7nRECHNxTzDVNBYYEIztSOEErQEuEC5x1Q9EAdIf3yhQ3G5gLcpZ4nT1if%2B8dh3PCfnqiW9oEf3PbgVNTaDTE%2BZlI0XrEK7MRQRUy3l64NsHp6V%2BVPY1Vm5VnjQ0bYeEUZrbLe1SvC8EYvbAM3tId5ieMIXYJ7vkJqhzpjo7wn8bF%2BzIhxMHNZKckF70L0W4Xnj1ipWUHeUuhUkInADto2pP1ZoLumJWF01w1ARHVoAInHhEfX7bpW4YH0aPbBiYHs5anAtC7jdWgLuGPDRW98PiMgM4QAVGO2LBdNel%2BDoAVTw9SlmB0NzsdlD%2FftUibgSNjaQuXCVSfFZmVnOf5SO0bWFPIdhpQ3WvseRG%2FWb4kGH8qwuPJHm1aADe1bMF0H26dP%2BWM8QmxQjPcvyjDHJS%2BNItoPo0d6L%2Fk19ImrYZ2EYFeMvz%2BHGfD%2BHTgiekm7Hut5osUMg2yQyLeea6GNqd8Wptg1dD5JFx%2F%2FDUkg%2FXbfL2%2BLnurskotKRahODHiQL1Qn%2BKxNxlSfJUBXvGnKeZwzyVpMWqvmx%2BRlHS8FcwvPK0vQY6pgE4ULzOy6UHyPd6DjYg6yxI0RZjPRKJqzV3xALUVD%2BI%2Fwm3ZmIsJglnWMFiVZivu%2BMdqvUo6FpokzrI6pNxACCxenbc5xT8KZ3oUFQv7JPjVL94WvDMeHkIIqBIu7PeZzkdPhj%2FMfPw10tPeHcLuXTub6e%2BkjX4bJU2K%2F6E%2FmjBK9XllO%2BQN775EE31a7scp0Ifuktd6sZAebw%2FZAeS1uREvrjr249x&X-Amz-Signature=6c2949d0fd81140c67164add8a02d83363bc7832ff05cbe8844d9094a7b149a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DISBJ7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEp9Phc2VeSRQwp83NBCrpznQnA6Wb6UVTediR2a1brqAiAR%2BRjKeM6AwI8nB7X7%2B%2F%2F63Ls3OLMRpQK6B7qsHT9L7iqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJ1gwETwsZkYXgsYKtwDFRHO6NmaFs08l0pp%2FdVE05ekk1z9IlBQB05hy%2BblGfzDvLjF%2FhALjnbP6dwtJ4zE8NpbQJFgdvDEtmGB7nRECHNxTzDVNBYYEIztSOEErQEuEC5x1Q9EAdIf3yhQ3G5gLcpZ4nT1if%2B8dh3PCfnqiW9oEf3PbgVNTaDTE%2BZlI0XrEK7MRQRUy3l64NsHp6V%2BVPY1Vm5VnjQ0bYeEUZrbLe1SvC8EYvbAM3tId5ieMIXYJ7vkJqhzpjo7wn8bF%2BzIhxMHNZKckF70L0W4Xnj1ipWUHeUuhUkInADto2pP1ZoLumJWF01w1ARHVoAInHhEfX7bpW4YH0aPbBiYHs5anAtC7jdWgLuGPDRW98PiMgM4QAVGO2LBdNel%2BDoAVTw9SlmB0NzsdlD%2FftUibgSNjaQuXCVSfFZmVnOf5SO0bWFPIdhpQ3WvseRG%2FWb4kGH8qwuPJHm1aADe1bMF0H26dP%2BWM8QmxQjPcvyjDHJS%2BNItoPo0d6L%2Fk19ImrYZ2EYFeMvz%2BHGfD%2BHTgiekm7Hut5osUMg2yQyLeea6GNqd8Wptg1dD5JFx%2F%2FDUkg%2FXbfL2%2BLnurskotKRahODHiQL1Qn%2BKxNxlSfJUBXvGnKeZwzyVpMWqvmx%2BRlHS8FcwvPK0vQY6pgE4ULzOy6UHyPd6DjYg6yxI0RZjPRKJqzV3xALUVD%2BI%2Fwm3ZmIsJglnWMFiVZivu%2BMdqvUo6FpokzrI6pNxACCxenbc5xT8KZ3oUFQv7JPjVL94WvDMeHkIIqBIu7PeZzkdPhj%2FMfPw10tPeHcLuXTub6e%2BkjX4bJU2K%2F6E%2FmjBK9XllO%2BQN775EE31a7scp0Ifuktd6sZAebw%2FZAeS1uREvrjr249x&X-Amz-Signature=f244b9d266b7b6c795d30cc3b2aa9537402b47dfd58b41cad713d8cda2a4eb27&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DISBJ7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEp9Phc2VeSRQwp83NBCrpznQnA6Wb6UVTediR2a1brqAiAR%2BRjKeM6AwI8nB7X7%2B%2F%2F63Ls3OLMRpQK6B7qsHT9L7iqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJ1gwETwsZkYXgsYKtwDFRHO6NmaFs08l0pp%2FdVE05ekk1z9IlBQB05hy%2BblGfzDvLjF%2FhALjnbP6dwtJ4zE8NpbQJFgdvDEtmGB7nRECHNxTzDVNBYYEIztSOEErQEuEC5x1Q9EAdIf3yhQ3G5gLcpZ4nT1if%2B8dh3PCfnqiW9oEf3PbgVNTaDTE%2BZlI0XrEK7MRQRUy3l64NsHp6V%2BVPY1Vm5VnjQ0bYeEUZrbLe1SvC8EYvbAM3tId5ieMIXYJ7vkJqhzpjo7wn8bF%2BzIhxMHNZKckF70L0W4Xnj1ipWUHeUuhUkInADto2pP1ZoLumJWF01w1ARHVoAInHhEfX7bpW4YH0aPbBiYHs5anAtC7jdWgLuGPDRW98PiMgM4QAVGO2LBdNel%2BDoAVTw9SlmB0NzsdlD%2FftUibgSNjaQuXCVSfFZmVnOf5SO0bWFPIdhpQ3WvseRG%2FWb4kGH8qwuPJHm1aADe1bMF0H26dP%2BWM8QmxQjPcvyjDHJS%2BNItoPo0d6L%2Fk19ImrYZ2EYFeMvz%2BHGfD%2BHTgiekm7Hut5osUMg2yQyLeea6GNqd8Wptg1dD5JFx%2F%2FDUkg%2FXbfL2%2BLnurskotKRahODHiQL1Qn%2BKxNxlSfJUBXvGnKeZwzyVpMWqvmx%2BRlHS8FcwvPK0vQY6pgE4ULzOy6UHyPd6DjYg6yxI0RZjPRKJqzV3xALUVD%2BI%2Fwm3ZmIsJglnWMFiVZivu%2BMdqvUo6FpokzrI6pNxACCxenbc5xT8KZ3oUFQv7JPjVL94WvDMeHkIIqBIu7PeZzkdPhj%2FMfPw10tPeHcLuXTub6e%2BkjX4bJU2K%2F6E%2FmjBK9XllO%2BQN775EE31a7scp0Ifuktd6sZAebw%2FZAeS1uREvrjr249x&X-Amz-Signature=e89f71422fb0afb3093719b7ec2d142efd6143d577945d03a82a020bbc5e51a6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DISBJ7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEp9Phc2VeSRQwp83NBCrpznQnA6Wb6UVTediR2a1brqAiAR%2BRjKeM6AwI8nB7X7%2B%2F%2F63Ls3OLMRpQK6B7qsHT9L7iqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJ1gwETwsZkYXgsYKtwDFRHO6NmaFs08l0pp%2FdVE05ekk1z9IlBQB05hy%2BblGfzDvLjF%2FhALjnbP6dwtJ4zE8NpbQJFgdvDEtmGB7nRECHNxTzDVNBYYEIztSOEErQEuEC5x1Q9EAdIf3yhQ3G5gLcpZ4nT1if%2B8dh3PCfnqiW9oEf3PbgVNTaDTE%2BZlI0XrEK7MRQRUy3l64NsHp6V%2BVPY1Vm5VnjQ0bYeEUZrbLe1SvC8EYvbAM3tId5ieMIXYJ7vkJqhzpjo7wn8bF%2BzIhxMHNZKckF70L0W4Xnj1ipWUHeUuhUkInADto2pP1ZoLumJWF01w1ARHVoAInHhEfX7bpW4YH0aPbBiYHs5anAtC7jdWgLuGPDRW98PiMgM4QAVGO2LBdNel%2BDoAVTw9SlmB0NzsdlD%2FftUibgSNjaQuXCVSfFZmVnOf5SO0bWFPIdhpQ3WvseRG%2FWb4kGH8qwuPJHm1aADe1bMF0H26dP%2BWM8QmxQjPcvyjDHJS%2BNItoPo0d6L%2Fk19ImrYZ2EYFeMvz%2BHGfD%2BHTgiekm7Hut5osUMg2yQyLeea6GNqd8Wptg1dD5JFx%2F%2FDUkg%2FXbfL2%2BLnurskotKRahODHiQL1Qn%2BKxNxlSfJUBXvGnKeZwzyVpMWqvmx%2BRlHS8FcwvPK0vQY6pgE4ULzOy6UHyPd6DjYg6yxI0RZjPRKJqzV3xALUVD%2BI%2Fwm3ZmIsJglnWMFiVZivu%2BMdqvUo6FpokzrI6pNxACCxenbc5xT8KZ3oUFQv7JPjVL94WvDMeHkIIqBIu7PeZzkdPhj%2FMfPw10tPeHcLuXTub6e%2BkjX4bJU2K%2F6E%2FmjBK9XllO%2BQN775EE31a7scp0Ifuktd6sZAebw%2FZAeS1uREvrjr249x&X-Amz-Signature=0e13f68f25b374fb18e7b931d0a99cbde681bc06d174317df520a9ebd0f5b4d2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
