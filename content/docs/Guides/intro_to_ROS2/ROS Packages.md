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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QMATHX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDHUp21I8BwdKFaweGRqkBqZtj5mmiKttGs2OnncNCGLgIhAI2OGDFmltguzjnO0quQT0ILRfqXlBEg5R4lSC6zEKxoKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlLcCS9gE21KjF5w8q3APsZYU97yjddF0%2BKZbUVL4vDSjLieA8bCqlfNDW%2B9dWDpIkYf70twww43lSqC9TVXoam522KtzRT2QLDoAO6G%2BnSmP%2FkQlmsrVBJGuqZZZ8dpUTCWXKjCri4Ge3g2T%2FPSh5StLMdagwwE1FdtWvxN%2BMT6OWOuRuugq4iuzXyqqrmdjV45%2BtOp5lnoTbv1lXfRxpvnp4yemI%2BAvIZADAAsJ6hzhg216lAhNaQV%2FAF72GHGU19Y1VwDtm4NEVg06VggdruP80iVXiBRPFCpAvUW4Ha%2BeACtIV7U7agT5r%2BwH1BepMG5HQMtAXYf5m6vTF5Qpt22642YyXkfnM3%2Fbp%2BM61hRyziCwAoYPUd2Z9drO3LWs15fa3jNLiLH6rE4BmRpENzMpw3yNXilo6y6VXneJwrlx%2F40XT6YBP8KwLHUUBPAS56YF3BHTC%2FTgdkCgV7g0ViQ8XecKR2wbKsMDlV2Hnw8U7U5tsDbVvvf9V33oA6fCnylU2pMi1JK4dpmg8k3%2BH3bjo7Ebhj1OCTuo3UDU5tSMFLhPqPmF3jA7wAQxrGgWFpzqspMwMn3Qnb53OkMnjJIezPSS2wBvZjAA2RKYaEI9RQevjIyC%2FY0kzY%2BPn2pShjhi2JjkYjV2FHzDJlYy%2BBjqkAX8Ws%2Frqis6t5KMAJJ8BZFG9tpnW9rMIkKwluH0QGy3qZQrKKAE4nPAj5wkXLDaXTKj6OfW3KPj2IWI2ugL7YziTvubU1DrWc%2Bs7DNvFoL8o1A0cIHo78vdXtLK600PJ4mfdJRe3X8uEzURtNO06AoUnssTRsCbD4qW8gErbnDkZZKKFS5LqII%2Bpun7%2BNQNTvneCwwf1AQHYgjDyqL9WWyIVWqlJ&X-Amz-Signature=07352d835c1d7003a6a6fa589b77563ef21255ad744ab6b4881763bb1f685c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QMATHX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDHUp21I8BwdKFaweGRqkBqZtj5mmiKttGs2OnncNCGLgIhAI2OGDFmltguzjnO0quQT0ILRfqXlBEg5R4lSC6zEKxoKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlLcCS9gE21KjF5w8q3APsZYU97yjddF0%2BKZbUVL4vDSjLieA8bCqlfNDW%2B9dWDpIkYf70twww43lSqC9TVXoam522KtzRT2QLDoAO6G%2BnSmP%2FkQlmsrVBJGuqZZZ8dpUTCWXKjCri4Ge3g2T%2FPSh5StLMdagwwE1FdtWvxN%2BMT6OWOuRuugq4iuzXyqqrmdjV45%2BtOp5lnoTbv1lXfRxpvnp4yemI%2BAvIZADAAsJ6hzhg216lAhNaQV%2FAF72GHGU19Y1VwDtm4NEVg06VggdruP80iVXiBRPFCpAvUW4Ha%2BeACtIV7U7agT5r%2BwH1BepMG5HQMtAXYf5m6vTF5Qpt22642YyXkfnM3%2Fbp%2BM61hRyziCwAoYPUd2Z9drO3LWs15fa3jNLiLH6rE4BmRpENzMpw3yNXilo6y6VXneJwrlx%2F40XT6YBP8KwLHUUBPAS56YF3BHTC%2FTgdkCgV7g0ViQ8XecKR2wbKsMDlV2Hnw8U7U5tsDbVvvf9V33oA6fCnylU2pMi1JK4dpmg8k3%2BH3bjo7Ebhj1OCTuo3UDU5tSMFLhPqPmF3jA7wAQxrGgWFpzqspMwMn3Qnb53OkMnjJIezPSS2wBvZjAA2RKYaEI9RQevjIyC%2FY0kzY%2BPn2pShjhi2JjkYjV2FHzDJlYy%2BBjqkAX8Ws%2Frqis6t5KMAJJ8BZFG9tpnW9rMIkKwluH0QGy3qZQrKKAE4nPAj5wkXLDaXTKj6OfW3KPj2IWI2ugL7YziTvubU1DrWc%2Bs7DNvFoL8o1A0cIHo78vdXtLK600PJ4mfdJRe3X8uEzURtNO06AoUnssTRsCbD4qW8gErbnDkZZKKFS5LqII%2Bpun7%2BNQNTvneCwwf1AQHYgjDyqL9WWyIVWqlJ&X-Amz-Signature=73638c3fd35506f0186cf0bca0e92935deb311c7880719e165e2d6cf361ee218&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QMATHX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDHUp21I8BwdKFaweGRqkBqZtj5mmiKttGs2OnncNCGLgIhAI2OGDFmltguzjnO0quQT0ILRfqXlBEg5R4lSC6zEKxoKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlLcCS9gE21KjF5w8q3APsZYU97yjddF0%2BKZbUVL4vDSjLieA8bCqlfNDW%2B9dWDpIkYf70twww43lSqC9TVXoam522KtzRT2QLDoAO6G%2BnSmP%2FkQlmsrVBJGuqZZZ8dpUTCWXKjCri4Ge3g2T%2FPSh5StLMdagwwE1FdtWvxN%2BMT6OWOuRuugq4iuzXyqqrmdjV45%2BtOp5lnoTbv1lXfRxpvnp4yemI%2BAvIZADAAsJ6hzhg216lAhNaQV%2FAF72GHGU19Y1VwDtm4NEVg06VggdruP80iVXiBRPFCpAvUW4Ha%2BeACtIV7U7agT5r%2BwH1BepMG5HQMtAXYf5m6vTF5Qpt22642YyXkfnM3%2Fbp%2BM61hRyziCwAoYPUd2Z9drO3LWs15fa3jNLiLH6rE4BmRpENzMpw3yNXilo6y6VXneJwrlx%2F40XT6YBP8KwLHUUBPAS56YF3BHTC%2FTgdkCgV7g0ViQ8XecKR2wbKsMDlV2Hnw8U7U5tsDbVvvf9V33oA6fCnylU2pMi1JK4dpmg8k3%2BH3bjo7Ebhj1OCTuo3UDU5tSMFLhPqPmF3jA7wAQxrGgWFpzqspMwMn3Qnb53OkMnjJIezPSS2wBvZjAA2RKYaEI9RQevjIyC%2FY0kzY%2BPn2pShjhi2JjkYjV2FHzDJlYy%2BBjqkAX8Ws%2Frqis6t5KMAJJ8BZFG9tpnW9rMIkKwluH0QGy3qZQrKKAE4nPAj5wkXLDaXTKj6OfW3KPj2IWI2ugL7YziTvubU1DrWc%2Bs7DNvFoL8o1A0cIHo78vdXtLK600PJ4mfdJRe3X8uEzURtNO06AoUnssTRsCbD4qW8gErbnDkZZKKFS5LqII%2Bpun7%2BNQNTvneCwwf1AQHYgjDyqL9WWyIVWqlJ&X-Amz-Signature=b2037fbec22abff1df706a011f36aa26f6f9abe716daffd0dfe02874c6e68c91&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QMATHX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDHUp21I8BwdKFaweGRqkBqZtj5mmiKttGs2OnncNCGLgIhAI2OGDFmltguzjnO0quQT0ILRfqXlBEg5R4lSC6zEKxoKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlLcCS9gE21KjF5w8q3APsZYU97yjddF0%2BKZbUVL4vDSjLieA8bCqlfNDW%2B9dWDpIkYf70twww43lSqC9TVXoam522KtzRT2QLDoAO6G%2BnSmP%2FkQlmsrVBJGuqZZZ8dpUTCWXKjCri4Ge3g2T%2FPSh5StLMdagwwE1FdtWvxN%2BMT6OWOuRuugq4iuzXyqqrmdjV45%2BtOp5lnoTbv1lXfRxpvnp4yemI%2BAvIZADAAsJ6hzhg216lAhNaQV%2FAF72GHGU19Y1VwDtm4NEVg06VggdruP80iVXiBRPFCpAvUW4Ha%2BeACtIV7U7agT5r%2BwH1BepMG5HQMtAXYf5m6vTF5Qpt22642YyXkfnM3%2Fbp%2BM61hRyziCwAoYPUd2Z9drO3LWs15fa3jNLiLH6rE4BmRpENzMpw3yNXilo6y6VXneJwrlx%2F40XT6YBP8KwLHUUBPAS56YF3BHTC%2FTgdkCgV7g0ViQ8XecKR2wbKsMDlV2Hnw8U7U5tsDbVvvf9V33oA6fCnylU2pMi1JK4dpmg8k3%2BH3bjo7Ebhj1OCTuo3UDU5tSMFLhPqPmF3jA7wAQxrGgWFpzqspMwMn3Qnb53OkMnjJIezPSS2wBvZjAA2RKYaEI9RQevjIyC%2FY0kzY%2BPn2pShjhi2JjkYjV2FHzDJlYy%2BBjqkAX8Ws%2Frqis6t5KMAJJ8BZFG9tpnW9rMIkKwluH0QGy3qZQrKKAE4nPAj5wkXLDaXTKj6OfW3KPj2IWI2ugL7YziTvubU1DrWc%2Bs7DNvFoL8o1A0cIHo78vdXtLK600PJ4mfdJRe3X8uEzURtNO06AoUnssTRsCbD4qW8gErbnDkZZKKFS5LqII%2Bpun7%2BNQNTvneCwwf1AQHYgjDyqL9WWyIVWqlJ&X-Amz-Signature=79f2ccf17f3f51b2e31672e455ec68a94ed2dc4e8855b083de6eb693c92f66f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QMATHX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDHUp21I8BwdKFaweGRqkBqZtj5mmiKttGs2OnncNCGLgIhAI2OGDFmltguzjnO0quQT0ILRfqXlBEg5R4lSC6zEKxoKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlLcCS9gE21KjF5w8q3APsZYU97yjddF0%2BKZbUVL4vDSjLieA8bCqlfNDW%2B9dWDpIkYf70twww43lSqC9TVXoam522KtzRT2QLDoAO6G%2BnSmP%2FkQlmsrVBJGuqZZZ8dpUTCWXKjCri4Ge3g2T%2FPSh5StLMdagwwE1FdtWvxN%2BMT6OWOuRuugq4iuzXyqqrmdjV45%2BtOp5lnoTbv1lXfRxpvnp4yemI%2BAvIZADAAsJ6hzhg216lAhNaQV%2FAF72GHGU19Y1VwDtm4NEVg06VggdruP80iVXiBRPFCpAvUW4Ha%2BeACtIV7U7agT5r%2BwH1BepMG5HQMtAXYf5m6vTF5Qpt22642YyXkfnM3%2Fbp%2BM61hRyziCwAoYPUd2Z9drO3LWs15fa3jNLiLH6rE4BmRpENzMpw3yNXilo6y6VXneJwrlx%2F40XT6YBP8KwLHUUBPAS56YF3BHTC%2FTgdkCgV7g0ViQ8XecKR2wbKsMDlV2Hnw8U7U5tsDbVvvf9V33oA6fCnylU2pMi1JK4dpmg8k3%2BH3bjo7Ebhj1OCTuo3UDU5tSMFLhPqPmF3jA7wAQxrGgWFpzqspMwMn3Qnb53OkMnjJIezPSS2wBvZjAA2RKYaEI9RQevjIyC%2FY0kzY%2BPn2pShjhi2JjkYjV2FHzDJlYy%2BBjqkAX8Ws%2Frqis6t5KMAJJ8BZFG9tpnW9rMIkKwluH0QGy3qZQrKKAE4nPAj5wkXLDaXTKj6OfW3KPj2IWI2ugL7YziTvubU1DrWc%2Bs7DNvFoL8o1A0cIHo78vdXtLK600PJ4mfdJRe3X8uEzURtNO06AoUnssTRsCbD4qW8gErbnDkZZKKFS5LqII%2Bpun7%2BNQNTvneCwwf1AQHYgjDyqL9WWyIVWqlJ&X-Amz-Signature=b547153b4a7ce7cb8916d9bca6fce4707dfb682f8a052d6a9ac47330b7679d16&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QMATHX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDHUp21I8BwdKFaweGRqkBqZtj5mmiKttGs2OnncNCGLgIhAI2OGDFmltguzjnO0quQT0ILRfqXlBEg5R4lSC6zEKxoKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlLcCS9gE21KjF5w8q3APsZYU97yjddF0%2BKZbUVL4vDSjLieA8bCqlfNDW%2B9dWDpIkYf70twww43lSqC9TVXoam522KtzRT2QLDoAO6G%2BnSmP%2FkQlmsrVBJGuqZZZ8dpUTCWXKjCri4Ge3g2T%2FPSh5StLMdagwwE1FdtWvxN%2BMT6OWOuRuugq4iuzXyqqrmdjV45%2BtOp5lnoTbv1lXfRxpvnp4yemI%2BAvIZADAAsJ6hzhg216lAhNaQV%2FAF72GHGU19Y1VwDtm4NEVg06VggdruP80iVXiBRPFCpAvUW4Ha%2BeACtIV7U7agT5r%2BwH1BepMG5HQMtAXYf5m6vTF5Qpt22642YyXkfnM3%2Fbp%2BM61hRyziCwAoYPUd2Z9drO3LWs15fa3jNLiLH6rE4BmRpENzMpw3yNXilo6y6VXneJwrlx%2F40XT6YBP8KwLHUUBPAS56YF3BHTC%2FTgdkCgV7g0ViQ8XecKR2wbKsMDlV2Hnw8U7U5tsDbVvvf9V33oA6fCnylU2pMi1JK4dpmg8k3%2BH3bjo7Ebhj1OCTuo3UDU5tSMFLhPqPmF3jA7wAQxrGgWFpzqspMwMn3Qnb53OkMnjJIezPSS2wBvZjAA2RKYaEI9RQevjIyC%2FY0kzY%2BPn2pShjhi2JjkYjV2FHzDJlYy%2BBjqkAX8Ws%2Frqis6t5KMAJJ8BZFG9tpnW9rMIkKwluH0QGy3qZQrKKAE4nPAj5wkXLDaXTKj6OfW3KPj2IWI2ugL7YziTvubU1DrWc%2Bs7DNvFoL8o1A0cIHo78vdXtLK600PJ4mfdJRe3X8uEzURtNO06AoUnssTRsCbD4qW8gErbnDkZZKKFS5LqII%2Bpun7%2BNQNTvneCwwf1AQHYgjDyqL9WWyIVWqlJ&X-Amz-Signature=319c7b4e345959425f9c5c4d08e10477ccaec7b9345b43508a2e5563854f8299&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7QMATHX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDHUp21I8BwdKFaweGRqkBqZtj5mmiKttGs2OnncNCGLgIhAI2OGDFmltguzjnO0quQT0ILRfqXlBEg5R4lSC6zEKxoKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlLcCS9gE21KjF5w8q3APsZYU97yjddF0%2BKZbUVL4vDSjLieA8bCqlfNDW%2B9dWDpIkYf70twww43lSqC9TVXoam522KtzRT2QLDoAO6G%2BnSmP%2FkQlmsrVBJGuqZZZ8dpUTCWXKjCri4Ge3g2T%2FPSh5StLMdagwwE1FdtWvxN%2BMT6OWOuRuugq4iuzXyqqrmdjV45%2BtOp5lnoTbv1lXfRxpvnp4yemI%2BAvIZADAAsJ6hzhg216lAhNaQV%2FAF72GHGU19Y1VwDtm4NEVg06VggdruP80iVXiBRPFCpAvUW4Ha%2BeACtIV7U7agT5r%2BwH1BepMG5HQMtAXYf5m6vTF5Qpt22642YyXkfnM3%2Fbp%2BM61hRyziCwAoYPUd2Z9drO3LWs15fa3jNLiLH6rE4BmRpENzMpw3yNXilo6y6VXneJwrlx%2F40XT6YBP8KwLHUUBPAS56YF3BHTC%2FTgdkCgV7g0ViQ8XecKR2wbKsMDlV2Hnw8U7U5tsDbVvvf9V33oA6fCnylU2pMi1JK4dpmg8k3%2BH3bjo7Ebhj1OCTuo3UDU5tSMFLhPqPmF3jA7wAQxrGgWFpzqspMwMn3Qnb53OkMnjJIezPSS2wBvZjAA2RKYaEI9RQevjIyC%2FY0kzY%2BPn2pShjhi2JjkYjV2FHzDJlYy%2BBjqkAX8Ws%2Frqis6t5KMAJJ8BZFG9tpnW9rMIkKwluH0QGy3qZQrKKAE4nPAj5wkXLDaXTKj6OfW3KPj2IWI2ugL7YziTvubU1DrWc%2Bs7DNvFoL8o1A0cIHo78vdXtLK600PJ4mfdJRe3X8uEzURtNO06AoUnssTRsCbD4qW8gErbnDkZZKKFS5LqII%2Bpun7%2BNQNTvneCwwf1AQHYgjDyqL9WWyIVWqlJ&X-Amz-Signature=8675521f6238d2ee944e5f874b056eae0b8704d1c8fdb26c32fae383164c98e4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
