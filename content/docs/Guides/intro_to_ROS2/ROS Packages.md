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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST5QOQQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMhcp%2FO5vXNkeWMdXUfOQdG%2F4CACtd%2BFjtCYNkPa5eIgIhAJUbjx8SOhwrTH0MPoFgG6jZjiSj1PfAwIwxlT4gZKS9KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycyGd2VM0UBKK8q0sq3ANpVH5ZC%2FEa3zkJKRNYjoIx50Ga1cyzUIgSl5Sr5hHD0wF984C7DobIQIkbEvCt6IH3rZ94tY6q7nd0ofGo%2BMZq12h4nR45Ww0tjM6yMSmYEKnx2m98Hf7Wi5Lo8rnQTpiNwuxCLLpu3x3qRc1NV0y%2Fi5P8uvJB71%2F7YkE34nY7zAdhhmvYGmFWivnaV513QBXaVOFfCFxzKUDlkKm18HgbW5s8W6kKtKL9mUUd0O%2B%2BygPDyUMOGAWTL5CYqWch81jx%2BbDyoyLqX50B%2F6nR1V6%2FPfEWQMoBK4Qyox9q5UwTbfwtOCHQlV8Ig9qKjZi%2F6FJO%2BfgczLfPOoGL7pzOMQgONKyUr%2FzmUenVr3fLIKn4RYgA9kOAw37nXgdIBUnnZ3nSfvjPc0GVouah846yMnTSU1giW1jALxU7oN7cVpsdBTGMaApPgtvGfDRU8oZgkaMFDxQg8WwSDwx8NlGAPb%2BeNyKXp8vbIlgirJ4%2BVn3SVMMecXjsp8YiamljgmD3EHiKyyBCATp0rybN891tdBuqbmBaSXqRIMBKzo90uAAEops9Uzd07zZkBUFIRO%2F5%2FWXTT8SMQPN7XsnsGBn8yIOQaFt9E4Dtt6i8Quo8%2BzoJtL%2FG9TzNrzmSh0FzXTDot9fEBjqkAZnT91roSQfW6EAemEXhVR%2Bah6VhLGvOlIi0hRZWctQWr%2BkssNoD349T4I%2Bdv2iKMYokcfDaNU2wlXcFLsrulracvqisOHh%2FuQjtTRhhUKL2WblqgOfZB67nnyaaVbZfnVEjejwV%2F400rRDDUBdWUYmNKW1JK2ETp2P4vp0iMiHvJ4bXJ%2BGl2yypE4Jw0I2ldJaTaB9yGtuhlP0gtfmR4SMHBhcU&X-Amz-Signature=273ef476d350fd8569bb963fbc7ea985205284c1e3161e5799bc233316b5c4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST5QOQQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMhcp%2FO5vXNkeWMdXUfOQdG%2F4CACtd%2BFjtCYNkPa5eIgIhAJUbjx8SOhwrTH0MPoFgG6jZjiSj1PfAwIwxlT4gZKS9KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycyGd2VM0UBKK8q0sq3ANpVH5ZC%2FEa3zkJKRNYjoIx50Ga1cyzUIgSl5Sr5hHD0wF984C7DobIQIkbEvCt6IH3rZ94tY6q7nd0ofGo%2BMZq12h4nR45Ww0tjM6yMSmYEKnx2m98Hf7Wi5Lo8rnQTpiNwuxCLLpu3x3qRc1NV0y%2Fi5P8uvJB71%2F7YkE34nY7zAdhhmvYGmFWivnaV513QBXaVOFfCFxzKUDlkKm18HgbW5s8W6kKtKL9mUUd0O%2B%2BygPDyUMOGAWTL5CYqWch81jx%2BbDyoyLqX50B%2F6nR1V6%2FPfEWQMoBK4Qyox9q5UwTbfwtOCHQlV8Ig9qKjZi%2F6FJO%2BfgczLfPOoGL7pzOMQgONKyUr%2FzmUenVr3fLIKn4RYgA9kOAw37nXgdIBUnnZ3nSfvjPc0GVouah846yMnTSU1giW1jALxU7oN7cVpsdBTGMaApPgtvGfDRU8oZgkaMFDxQg8WwSDwx8NlGAPb%2BeNyKXp8vbIlgirJ4%2BVn3SVMMecXjsp8YiamljgmD3EHiKyyBCATp0rybN891tdBuqbmBaSXqRIMBKzo90uAAEops9Uzd07zZkBUFIRO%2F5%2FWXTT8SMQPN7XsnsGBn8yIOQaFt9E4Dtt6i8Quo8%2BzoJtL%2FG9TzNrzmSh0FzXTDot9fEBjqkAZnT91roSQfW6EAemEXhVR%2Bah6VhLGvOlIi0hRZWctQWr%2BkssNoD349T4I%2Bdv2iKMYokcfDaNU2wlXcFLsrulracvqisOHh%2FuQjtTRhhUKL2WblqgOfZB67nnyaaVbZfnVEjejwV%2F400rRDDUBdWUYmNKW1JK2ETp2P4vp0iMiHvJ4bXJ%2BGl2yypE4Jw0I2ldJaTaB9yGtuhlP0gtfmR4SMHBhcU&X-Amz-Signature=ec158ab881da8f049e51619336bde13a111e72de4539b0835e342827508c530e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST5QOQQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMhcp%2FO5vXNkeWMdXUfOQdG%2F4CACtd%2BFjtCYNkPa5eIgIhAJUbjx8SOhwrTH0MPoFgG6jZjiSj1PfAwIwxlT4gZKS9KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycyGd2VM0UBKK8q0sq3ANpVH5ZC%2FEa3zkJKRNYjoIx50Ga1cyzUIgSl5Sr5hHD0wF984C7DobIQIkbEvCt6IH3rZ94tY6q7nd0ofGo%2BMZq12h4nR45Ww0tjM6yMSmYEKnx2m98Hf7Wi5Lo8rnQTpiNwuxCLLpu3x3qRc1NV0y%2Fi5P8uvJB71%2F7YkE34nY7zAdhhmvYGmFWivnaV513QBXaVOFfCFxzKUDlkKm18HgbW5s8W6kKtKL9mUUd0O%2B%2BygPDyUMOGAWTL5CYqWch81jx%2BbDyoyLqX50B%2F6nR1V6%2FPfEWQMoBK4Qyox9q5UwTbfwtOCHQlV8Ig9qKjZi%2F6FJO%2BfgczLfPOoGL7pzOMQgONKyUr%2FzmUenVr3fLIKn4RYgA9kOAw37nXgdIBUnnZ3nSfvjPc0GVouah846yMnTSU1giW1jALxU7oN7cVpsdBTGMaApPgtvGfDRU8oZgkaMFDxQg8WwSDwx8NlGAPb%2BeNyKXp8vbIlgirJ4%2BVn3SVMMecXjsp8YiamljgmD3EHiKyyBCATp0rybN891tdBuqbmBaSXqRIMBKzo90uAAEops9Uzd07zZkBUFIRO%2F5%2FWXTT8SMQPN7XsnsGBn8yIOQaFt9E4Dtt6i8Quo8%2BzoJtL%2FG9TzNrzmSh0FzXTDot9fEBjqkAZnT91roSQfW6EAemEXhVR%2Bah6VhLGvOlIi0hRZWctQWr%2BkssNoD349T4I%2Bdv2iKMYokcfDaNU2wlXcFLsrulracvqisOHh%2FuQjtTRhhUKL2WblqgOfZB67nnyaaVbZfnVEjejwV%2F400rRDDUBdWUYmNKW1JK2ETp2P4vp0iMiHvJ4bXJ%2BGl2yypE4Jw0I2ldJaTaB9yGtuhlP0gtfmR4SMHBhcU&X-Amz-Signature=9bd1d9d58a6dbdaaaa602618e6c8d247df368ef243b04adaa46a2c54780937ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST5QOQQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMhcp%2FO5vXNkeWMdXUfOQdG%2F4CACtd%2BFjtCYNkPa5eIgIhAJUbjx8SOhwrTH0MPoFgG6jZjiSj1PfAwIwxlT4gZKS9KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycyGd2VM0UBKK8q0sq3ANpVH5ZC%2FEa3zkJKRNYjoIx50Ga1cyzUIgSl5Sr5hHD0wF984C7DobIQIkbEvCt6IH3rZ94tY6q7nd0ofGo%2BMZq12h4nR45Ww0tjM6yMSmYEKnx2m98Hf7Wi5Lo8rnQTpiNwuxCLLpu3x3qRc1NV0y%2Fi5P8uvJB71%2F7YkE34nY7zAdhhmvYGmFWivnaV513QBXaVOFfCFxzKUDlkKm18HgbW5s8W6kKtKL9mUUd0O%2B%2BygPDyUMOGAWTL5CYqWch81jx%2BbDyoyLqX50B%2F6nR1V6%2FPfEWQMoBK4Qyox9q5UwTbfwtOCHQlV8Ig9qKjZi%2F6FJO%2BfgczLfPOoGL7pzOMQgONKyUr%2FzmUenVr3fLIKn4RYgA9kOAw37nXgdIBUnnZ3nSfvjPc0GVouah846yMnTSU1giW1jALxU7oN7cVpsdBTGMaApPgtvGfDRU8oZgkaMFDxQg8WwSDwx8NlGAPb%2BeNyKXp8vbIlgirJ4%2BVn3SVMMecXjsp8YiamljgmD3EHiKyyBCATp0rybN891tdBuqbmBaSXqRIMBKzo90uAAEops9Uzd07zZkBUFIRO%2F5%2FWXTT8SMQPN7XsnsGBn8yIOQaFt9E4Dtt6i8Quo8%2BzoJtL%2FG9TzNrzmSh0FzXTDot9fEBjqkAZnT91roSQfW6EAemEXhVR%2Bah6VhLGvOlIi0hRZWctQWr%2BkssNoD349T4I%2Bdv2iKMYokcfDaNU2wlXcFLsrulracvqisOHh%2FuQjtTRhhUKL2WblqgOfZB67nnyaaVbZfnVEjejwV%2F400rRDDUBdWUYmNKW1JK2ETp2P4vp0iMiHvJ4bXJ%2BGl2yypE4Jw0I2ldJaTaB9yGtuhlP0gtfmR4SMHBhcU&X-Amz-Signature=74111d66e803b8fa7c991bc3a703066c181f2d5cff2b7be0814dee8689c50a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST5QOQQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMhcp%2FO5vXNkeWMdXUfOQdG%2F4CACtd%2BFjtCYNkPa5eIgIhAJUbjx8SOhwrTH0MPoFgG6jZjiSj1PfAwIwxlT4gZKS9KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycyGd2VM0UBKK8q0sq3ANpVH5ZC%2FEa3zkJKRNYjoIx50Ga1cyzUIgSl5Sr5hHD0wF984C7DobIQIkbEvCt6IH3rZ94tY6q7nd0ofGo%2BMZq12h4nR45Ww0tjM6yMSmYEKnx2m98Hf7Wi5Lo8rnQTpiNwuxCLLpu3x3qRc1NV0y%2Fi5P8uvJB71%2F7YkE34nY7zAdhhmvYGmFWivnaV513QBXaVOFfCFxzKUDlkKm18HgbW5s8W6kKtKL9mUUd0O%2B%2BygPDyUMOGAWTL5CYqWch81jx%2BbDyoyLqX50B%2F6nR1V6%2FPfEWQMoBK4Qyox9q5UwTbfwtOCHQlV8Ig9qKjZi%2F6FJO%2BfgczLfPOoGL7pzOMQgONKyUr%2FzmUenVr3fLIKn4RYgA9kOAw37nXgdIBUnnZ3nSfvjPc0GVouah846yMnTSU1giW1jALxU7oN7cVpsdBTGMaApPgtvGfDRU8oZgkaMFDxQg8WwSDwx8NlGAPb%2BeNyKXp8vbIlgirJ4%2BVn3SVMMecXjsp8YiamljgmD3EHiKyyBCATp0rybN891tdBuqbmBaSXqRIMBKzo90uAAEops9Uzd07zZkBUFIRO%2F5%2FWXTT8SMQPN7XsnsGBn8yIOQaFt9E4Dtt6i8Quo8%2BzoJtL%2FG9TzNrzmSh0FzXTDot9fEBjqkAZnT91roSQfW6EAemEXhVR%2Bah6VhLGvOlIi0hRZWctQWr%2BkssNoD349T4I%2Bdv2iKMYokcfDaNU2wlXcFLsrulracvqisOHh%2FuQjtTRhhUKL2WblqgOfZB67nnyaaVbZfnVEjejwV%2F400rRDDUBdWUYmNKW1JK2ETp2P4vp0iMiHvJ4bXJ%2BGl2yypE4Jw0I2ldJaTaB9yGtuhlP0gtfmR4SMHBhcU&X-Amz-Signature=ff92cb23bf4d610f4200315613b690f2f7fe9b21536760ab7f09ec5d864c1917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST5QOQQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMhcp%2FO5vXNkeWMdXUfOQdG%2F4CACtd%2BFjtCYNkPa5eIgIhAJUbjx8SOhwrTH0MPoFgG6jZjiSj1PfAwIwxlT4gZKS9KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycyGd2VM0UBKK8q0sq3ANpVH5ZC%2FEa3zkJKRNYjoIx50Ga1cyzUIgSl5Sr5hHD0wF984C7DobIQIkbEvCt6IH3rZ94tY6q7nd0ofGo%2BMZq12h4nR45Ww0tjM6yMSmYEKnx2m98Hf7Wi5Lo8rnQTpiNwuxCLLpu3x3qRc1NV0y%2Fi5P8uvJB71%2F7YkE34nY7zAdhhmvYGmFWivnaV513QBXaVOFfCFxzKUDlkKm18HgbW5s8W6kKtKL9mUUd0O%2B%2BygPDyUMOGAWTL5CYqWch81jx%2BbDyoyLqX50B%2F6nR1V6%2FPfEWQMoBK4Qyox9q5UwTbfwtOCHQlV8Ig9qKjZi%2F6FJO%2BfgczLfPOoGL7pzOMQgONKyUr%2FzmUenVr3fLIKn4RYgA9kOAw37nXgdIBUnnZ3nSfvjPc0GVouah846yMnTSU1giW1jALxU7oN7cVpsdBTGMaApPgtvGfDRU8oZgkaMFDxQg8WwSDwx8NlGAPb%2BeNyKXp8vbIlgirJ4%2BVn3SVMMecXjsp8YiamljgmD3EHiKyyBCATp0rybN891tdBuqbmBaSXqRIMBKzo90uAAEops9Uzd07zZkBUFIRO%2F5%2FWXTT8SMQPN7XsnsGBn8yIOQaFt9E4Dtt6i8Quo8%2BzoJtL%2FG9TzNrzmSh0FzXTDot9fEBjqkAZnT91roSQfW6EAemEXhVR%2Bah6VhLGvOlIi0hRZWctQWr%2BkssNoD349T4I%2Bdv2iKMYokcfDaNU2wlXcFLsrulracvqisOHh%2FuQjtTRhhUKL2WblqgOfZB67nnyaaVbZfnVEjejwV%2F400rRDDUBdWUYmNKW1JK2ETp2P4vp0iMiHvJ4bXJ%2BGl2yypE4Jw0I2ldJaTaB9yGtuhlP0gtfmR4SMHBhcU&X-Amz-Signature=936f3dbde37611a8f50a763e199f464a1f28c0068217287ef682a9569a0a6cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST5QOQQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMhcp%2FO5vXNkeWMdXUfOQdG%2F4CACtd%2BFjtCYNkPa5eIgIhAJUbjx8SOhwrTH0MPoFgG6jZjiSj1PfAwIwxlT4gZKS9KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycyGd2VM0UBKK8q0sq3ANpVH5ZC%2FEa3zkJKRNYjoIx50Ga1cyzUIgSl5Sr5hHD0wF984C7DobIQIkbEvCt6IH3rZ94tY6q7nd0ofGo%2BMZq12h4nR45Ww0tjM6yMSmYEKnx2m98Hf7Wi5Lo8rnQTpiNwuxCLLpu3x3qRc1NV0y%2Fi5P8uvJB71%2F7YkE34nY7zAdhhmvYGmFWivnaV513QBXaVOFfCFxzKUDlkKm18HgbW5s8W6kKtKL9mUUd0O%2B%2BygPDyUMOGAWTL5CYqWch81jx%2BbDyoyLqX50B%2F6nR1V6%2FPfEWQMoBK4Qyox9q5UwTbfwtOCHQlV8Ig9qKjZi%2F6FJO%2BfgczLfPOoGL7pzOMQgONKyUr%2FzmUenVr3fLIKn4RYgA9kOAw37nXgdIBUnnZ3nSfvjPc0GVouah846yMnTSU1giW1jALxU7oN7cVpsdBTGMaApPgtvGfDRU8oZgkaMFDxQg8WwSDwx8NlGAPb%2BeNyKXp8vbIlgirJ4%2BVn3SVMMecXjsp8YiamljgmD3EHiKyyBCATp0rybN891tdBuqbmBaSXqRIMBKzo90uAAEops9Uzd07zZkBUFIRO%2F5%2FWXTT8SMQPN7XsnsGBn8yIOQaFt9E4Dtt6i8Quo8%2BzoJtL%2FG9TzNrzmSh0FzXTDot9fEBjqkAZnT91roSQfW6EAemEXhVR%2Bah6VhLGvOlIi0hRZWctQWr%2BkssNoD349T4I%2Bdv2iKMYokcfDaNU2wlXcFLsrulracvqisOHh%2FuQjtTRhhUKL2WblqgOfZB67nnyaaVbZfnVEjejwV%2F400rRDDUBdWUYmNKW1JK2ETp2P4vp0iMiHvJ4bXJ%2BGl2yypE4Jw0I2ldJaTaB9yGtuhlP0gtfmR4SMHBhcU&X-Amz-Signature=2d67d8f2986a38f6094d40cee36375d93421686b15c291a262a2605fc811ee3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
