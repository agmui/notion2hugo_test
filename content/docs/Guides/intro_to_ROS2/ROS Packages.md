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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWHCVL3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5qSeSVWWZvBY3nmke0lWF0urQ5FioUeM8ps47oaA%2BVgIhAOrYYYxzxCzehTRKs7%2BAJ5MXxugMQM4JwOzKIavQUnrtKv8DCG4QABoMNjM3NDIzMTgzODA1IgyEM4XoUJE4ibTKihAq3ANU2bjWQz6lzbrzUwhtfQUAt2xl%2F0Lg%2BDDRhoFy3z9S%2B9iIXEqyj3JSAe7W6w0l1GWp5vCuwbXqWg3oONA8L8T2PfLh5V30OFi%2Fx%2BnwtYce8zX6s3js8apfv4R9AM1SEEHKcxCNoET6U7VsJFnAg74tq0wSIwg948G%2Fw2Cc4q5q5WGaMJudjGn1w8vXBnPPOz4m6Qauf9KqU7Tysy8PyRfRtAHMdnMgUQcqcf0XOJz%2BaBUeZHH7lU5YNqIE5UVPUULtTTCEuX%2FVPug44EuDcVs9TUkkgy0rjcjoYBidk6KdyKZxNtvyXOGIFccHpSKmj969uMHUu8tJK0MG9kXIrafLXXXADkQzQrDVkaVEOeDtsXIxTfF7%2BJBvo6abVh1AxGwxslKNmQwmeQtriWT55iZKDt3EIO55HOswkNat1C7TgJH21uy9ipuQqA5sox2307%2FkSvOhxRFaXfEVIcaxN4Vnjm%2FzLqQsfTbJfzXx3JqxJQtLHaUKm0NstaIlZNno3YHASnHXxJfd9IQ6o12zpAxCVXLs6MpMsN8V3kP5r8a8kjwzanUaxh6Wo3%2FYhZSkk5Mq7gxKRJFCg7rT9B22upE2Dnc9rjDDqg5kBWPkbhomPMkMFD9M%2BNf%2F6wu2VTCeyLS%2BBjqkAYCJwRcP8D0Je3n3U8EEs338ebmmRa6NMFPGj%2FebiZJsGPndFOvz5ICgZsCUeDl4v5Fvf30pomJ3tRtbI%2BDsUx1Jcet5zoV6Pn%2F7iwlH27Z60CTVJQOmw3sTpDEUYIWxirwQQq1psgPXMhODZTUREaQOA69GqZOlfxaSELJqGUWem1bhookYQBm8Q4ihk8h67LQJy%2B9%2F7Rs%2B1QIcuI71dbAQRwDq&X-Amz-Signature=4edc6100f5a23127f86a3d7f72c66163d629cdf9796d70c1b5dff2d683877a68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWHCVL3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5qSeSVWWZvBY3nmke0lWF0urQ5FioUeM8ps47oaA%2BVgIhAOrYYYxzxCzehTRKs7%2BAJ5MXxugMQM4JwOzKIavQUnrtKv8DCG4QABoMNjM3NDIzMTgzODA1IgyEM4XoUJE4ibTKihAq3ANU2bjWQz6lzbrzUwhtfQUAt2xl%2F0Lg%2BDDRhoFy3z9S%2B9iIXEqyj3JSAe7W6w0l1GWp5vCuwbXqWg3oONA8L8T2PfLh5V30OFi%2Fx%2BnwtYce8zX6s3js8apfv4R9AM1SEEHKcxCNoET6U7VsJFnAg74tq0wSIwg948G%2Fw2Cc4q5q5WGaMJudjGn1w8vXBnPPOz4m6Qauf9KqU7Tysy8PyRfRtAHMdnMgUQcqcf0XOJz%2BaBUeZHH7lU5YNqIE5UVPUULtTTCEuX%2FVPug44EuDcVs9TUkkgy0rjcjoYBidk6KdyKZxNtvyXOGIFccHpSKmj969uMHUu8tJK0MG9kXIrafLXXXADkQzQrDVkaVEOeDtsXIxTfF7%2BJBvo6abVh1AxGwxslKNmQwmeQtriWT55iZKDt3EIO55HOswkNat1C7TgJH21uy9ipuQqA5sox2307%2FkSvOhxRFaXfEVIcaxN4Vnjm%2FzLqQsfTbJfzXx3JqxJQtLHaUKm0NstaIlZNno3YHASnHXxJfd9IQ6o12zpAxCVXLs6MpMsN8V3kP5r8a8kjwzanUaxh6Wo3%2FYhZSkk5Mq7gxKRJFCg7rT9B22upE2Dnc9rjDDqg5kBWPkbhomPMkMFD9M%2BNf%2F6wu2VTCeyLS%2BBjqkAYCJwRcP8D0Je3n3U8EEs338ebmmRa6NMFPGj%2FebiZJsGPndFOvz5ICgZsCUeDl4v5Fvf30pomJ3tRtbI%2BDsUx1Jcet5zoV6Pn%2F7iwlH27Z60CTVJQOmw3sTpDEUYIWxirwQQq1psgPXMhODZTUREaQOA69GqZOlfxaSELJqGUWem1bhookYQBm8Q4ihk8h67LQJy%2B9%2F7Rs%2B1QIcuI71dbAQRwDq&X-Amz-Signature=e544167d26d55bca0b465576fdfbf0d50b9f8f29ef5f19b9b85cab76427d5ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWHCVL3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5qSeSVWWZvBY3nmke0lWF0urQ5FioUeM8ps47oaA%2BVgIhAOrYYYxzxCzehTRKs7%2BAJ5MXxugMQM4JwOzKIavQUnrtKv8DCG4QABoMNjM3NDIzMTgzODA1IgyEM4XoUJE4ibTKihAq3ANU2bjWQz6lzbrzUwhtfQUAt2xl%2F0Lg%2BDDRhoFy3z9S%2B9iIXEqyj3JSAe7W6w0l1GWp5vCuwbXqWg3oONA8L8T2PfLh5V30OFi%2Fx%2BnwtYce8zX6s3js8apfv4R9AM1SEEHKcxCNoET6U7VsJFnAg74tq0wSIwg948G%2Fw2Cc4q5q5WGaMJudjGn1w8vXBnPPOz4m6Qauf9KqU7Tysy8PyRfRtAHMdnMgUQcqcf0XOJz%2BaBUeZHH7lU5YNqIE5UVPUULtTTCEuX%2FVPug44EuDcVs9TUkkgy0rjcjoYBidk6KdyKZxNtvyXOGIFccHpSKmj969uMHUu8tJK0MG9kXIrafLXXXADkQzQrDVkaVEOeDtsXIxTfF7%2BJBvo6abVh1AxGwxslKNmQwmeQtriWT55iZKDt3EIO55HOswkNat1C7TgJH21uy9ipuQqA5sox2307%2FkSvOhxRFaXfEVIcaxN4Vnjm%2FzLqQsfTbJfzXx3JqxJQtLHaUKm0NstaIlZNno3YHASnHXxJfd9IQ6o12zpAxCVXLs6MpMsN8V3kP5r8a8kjwzanUaxh6Wo3%2FYhZSkk5Mq7gxKRJFCg7rT9B22upE2Dnc9rjDDqg5kBWPkbhomPMkMFD9M%2BNf%2F6wu2VTCeyLS%2BBjqkAYCJwRcP8D0Je3n3U8EEs338ebmmRa6NMFPGj%2FebiZJsGPndFOvz5ICgZsCUeDl4v5Fvf30pomJ3tRtbI%2BDsUx1Jcet5zoV6Pn%2F7iwlH27Z60CTVJQOmw3sTpDEUYIWxirwQQq1psgPXMhODZTUREaQOA69GqZOlfxaSELJqGUWem1bhookYQBm8Q4ihk8h67LQJy%2B9%2F7Rs%2B1QIcuI71dbAQRwDq&X-Amz-Signature=12a91cd2454a5a6de61a36757e034dc295aacafbecfd3b23f99b3faaf1829abe&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWHCVL3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5qSeSVWWZvBY3nmke0lWF0urQ5FioUeM8ps47oaA%2BVgIhAOrYYYxzxCzehTRKs7%2BAJ5MXxugMQM4JwOzKIavQUnrtKv8DCG4QABoMNjM3NDIzMTgzODA1IgyEM4XoUJE4ibTKihAq3ANU2bjWQz6lzbrzUwhtfQUAt2xl%2F0Lg%2BDDRhoFy3z9S%2B9iIXEqyj3JSAe7W6w0l1GWp5vCuwbXqWg3oONA8L8T2PfLh5V30OFi%2Fx%2BnwtYce8zX6s3js8apfv4R9AM1SEEHKcxCNoET6U7VsJFnAg74tq0wSIwg948G%2Fw2Cc4q5q5WGaMJudjGn1w8vXBnPPOz4m6Qauf9KqU7Tysy8PyRfRtAHMdnMgUQcqcf0XOJz%2BaBUeZHH7lU5YNqIE5UVPUULtTTCEuX%2FVPug44EuDcVs9TUkkgy0rjcjoYBidk6KdyKZxNtvyXOGIFccHpSKmj969uMHUu8tJK0MG9kXIrafLXXXADkQzQrDVkaVEOeDtsXIxTfF7%2BJBvo6abVh1AxGwxslKNmQwmeQtriWT55iZKDt3EIO55HOswkNat1C7TgJH21uy9ipuQqA5sox2307%2FkSvOhxRFaXfEVIcaxN4Vnjm%2FzLqQsfTbJfzXx3JqxJQtLHaUKm0NstaIlZNno3YHASnHXxJfd9IQ6o12zpAxCVXLs6MpMsN8V3kP5r8a8kjwzanUaxh6Wo3%2FYhZSkk5Mq7gxKRJFCg7rT9B22upE2Dnc9rjDDqg5kBWPkbhomPMkMFD9M%2BNf%2F6wu2VTCeyLS%2BBjqkAYCJwRcP8D0Je3n3U8EEs338ebmmRa6NMFPGj%2FebiZJsGPndFOvz5ICgZsCUeDl4v5Fvf30pomJ3tRtbI%2BDsUx1Jcet5zoV6Pn%2F7iwlH27Z60CTVJQOmw3sTpDEUYIWxirwQQq1psgPXMhODZTUREaQOA69GqZOlfxaSELJqGUWem1bhookYQBm8Q4ihk8h67LQJy%2B9%2F7Rs%2B1QIcuI71dbAQRwDq&X-Amz-Signature=7519c92325b0737618e386e29a4d5acc81fed5eaeaaa44d18938fbc4c0b2dab3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWHCVL3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5qSeSVWWZvBY3nmke0lWF0urQ5FioUeM8ps47oaA%2BVgIhAOrYYYxzxCzehTRKs7%2BAJ5MXxugMQM4JwOzKIavQUnrtKv8DCG4QABoMNjM3NDIzMTgzODA1IgyEM4XoUJE4ibTKihAq3ANU2bjWQz6lzbrzUwhtfQUAt2xl%2F0Lg%2BDDRhoFy3z9S%2B9iIXEqyj3JSAe7W6w0l1GWp5vCuwbXqWg3oONA8L8T2PfLh5V30OFi%2Fx%2BnwtYce8zX6s3js8apfv4R9AM1SEEHKcxCNoET6U7VsJFnAg74tq0wSIwg948G%2Fw2Cc4q5q5WGaMJudjGn1w8vXBnPPOz4m6Qauf9KqU7Tysy8PyRfRtAHMdnMgUQcqcf0XOJz%2BaBUeZHH7lU5YNqIE5UVPUULtTTCEuX%2FVPug44EuDcVs9TUkkgy0rjcjoYBidk6KdyKZxNtvyXOGIFccHpSKmj969uMHUu8tJK0MG9kXIrafLXXXADkQzQrDVkaVEOeDtsXIxTfF7%2BJBvo6abVh1AxGwxslKNmQwmeQtriWT55iZKDt3EIO55HOswkNat1C7TgJH21uy9ipuQqA5sox2307%2FkSvOhxRFaXfEVIcaxN4Vnjm%2FzLqQsfTbJfzXx3JqxJQtLHaUKm0NstaIlZNno3YHASnHXxJfd9IQ6o12zpAxCVXLs6MpMsN8V3kP5r8a8kjwzanUaxh6Wo3%2FYhZSkk5Mq7gxKRJFCg7rT9B22upE2Dnc9rjDDqg5kBWPkbhomPMkMFD9M%2BNf%2F6wu2VTCeyLS%2BBjqkAYCJwRcP8D0Je3n3U8EEs338ebmmRa6NMFPGj%2FebiZJsGPndFOvz5ICgZsCUeDl4v5Fvf30pomJ3tRtbI%2BDsUx1Jcet5zoV6Pn%2F7iwlH27Z60CTVJQOmw3sTpDEUYIWxirwQQq1psgPXMhODZTUREaQOA69GqZOlfxaSELJqGUWem1bhookYQBm8Q4ihk8h67LQJy%2B9%2F7Rs%2B1QIcuI71dbAQRwDq&X-Amz-Signature=a589714139960ae5bf763cbd6f4dd96b0d816bfac065096929ce45ac54c87bad&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWHCVL3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5qSeSVWWZvBY3nmke0lWF0urQ5FioUeM8ps47oaA%2BVgIhAOrYYYxzxCzehTRKs7%2BAJ5MXxugMQM4JwOzKIavQUnrtKv8DCG4QABoMNjM3NDIzMTgzODA1IgyEM4XoUJE4ibTKihAq3ANU2bjWQz6lzbrzUwhtfQUAt2xl%2F0Lg%2BDDRhoFy3z9S%2B9iIXEqyj3JSAe7W6w0l1GWp5vCuwbXqWg3oONA8L8T2PfLh5V30OFi%2Fx%2BnwtYce8zX6s3js8apfv4R9AM1SEEHKcxCNoET6U7VsJFnAg74tq0wSIwg948G%2Fw2Cc4q5q5WGaMJudjGn1w8vXBnPPOz4m6Qauf9KqU7Tysy8PyRfRtAHMdnMgUQcqcf0XOJz%2BaBUeZHH7lU5YNqIE5UVPUULtTTCEuX%2FVPug44EuDcVs9TUkkgy0rjcjoYBidk6KdyKZxNtvyXOGIFccHpSKmj969uMHUu8tJK0MG9kXIrafLXXXADkQzQrDVkaVEOeDtsXIxTfF7%2BJBvo6abVh1AxGwxslKNmQwmeQtriWT55iZKDt3EIO55HOswkNat1C7TgJH21uy9ipuQqA5sox2307%2FkSvOhxRFaXfEVIcaxN4Vnjm%2FzLqQsfTbJfzXx3JqxJQtLHaUKm0NstaIlZNno3YHASnHXxJfd9IQ6o12zpAxCVXLs6MpMsN8V3kP5r8a8kjwzanUaxh6Wo3%2FYhZSkk5Mq7gxKRJFCg7rT9B22upE2Dnc9rjDDqg5kBWPkbhomPMkMFD9M%2BNf%2F6wu2VTCeyLS%2BBjqkAYCJwRcP8D0Je3n3U8EEs338ebmmRa6NMFPGj%2FebiZJsGPndFOvz5ICgZsCUeDl4v5Fvf30pomJ3tRtbI%2BDsUx1Jcet5zoV6Pn%2F7iwlH27Z60CTVJQOmw3sTpDEUYIWxirwQQq1psgPXMhODZTUREaQOA69GqZOlfxaSELJqGUWem1bhookYQBm8Q4ihk8h67LQJy%2B9%2F7Rs%2B1QIcuI71dbAQRwDq&X-Amz-Signature=5f1750a28b6281d81095443830e308ee6b58b8110094ff9cd632b9d252bbf4ef&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWHCVL3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5qSeSVWWZvBY3nmke0lWF0urQ5FioUeM8ps47oaA%2BVgIhAOrYYYxzxCzehTRKs7%2BAJ5MXxugMQM4JwOzKIavQUnrtKv8DCG4QABoMNjM3NDIzMTgzODA1IgyEM4XoUJE4ibTKihAq3ANU2bjWQz6lzbrzUwhtfQUAt2xl%2F0Lg%2BDDRhoFy3z9S%2B9iIXEqyj3JSAe7W6w0l1GWp5vCuwbXqWg3oONA8L8T2PfLh5V30OFi%2Fx%2BnwtYce8zX6s3js8apfv4R9AM1SEEHKcxCNoET6U7VsJFnAg74tq0wSIwg948G%2Fw2Cc4q5q5WGaMJudjGn1w8vXBnPPOz4m6Qauf9KqU7Tysy8PyRfRtAHMdnMgUQcqcf0XOJz%2BaBUeZHH7lU5YNqIE5UVPUULtTTCEuX%2FVPug44EuDcVs9TUkkgy0rjcjoYBidk6KdyKZxNtvyXOGIFccHpSKmj969uMHUu8tJK0MG9kXIrafLXXXADkQzQrDVkaVEOeDtsXIxTfF7%2BJBvo6abVh1AxGwxslKNmQwmeQtriWT55iZKDt3EIO55HOswkNat1C7TgJH21uy9ipuQqA5sox2307%2FkSvOhxRFaXfEVIcaxN4Vnjm%2FzLqQsfTbJfzXx3JqxJQtLHaUKm0NstaIlZNno3YHASnHXxJfd9IQ6o12zpAxCVXLs6MpMsN8V3kP5r8a8kjwzanUaxh6Wo3%2FYhZSkk5Mq7gxKRJFCg7rT9B22upE2Dnc9rjDDqg5kBWPkbhomPMkMFD9M%2BNf%2F6wu2VTCeyLS%2BBjqkAYCJwRcP8D0Je3n3U8EEs338ebmmRa6NMFPGj%2FebiZJsGPndFOvz5ICgZsCUeDl4v5Fvf30pomJ3tRtbI%2BDsUx1Jcet5zoV6Pn%2F7iwlH27Z60CTVJQOmw3sTpDEUYIWxirwQQq1psgPXMhODZTUREaQOA69GqZOlfxaSELJqGUWem1bhookYQBm8Q4ihk8h67LQJy%2B9%2F7Rs%2B1QIcuI71dbAQRwDq&X-Amz-Signature=d92f1ef25bb7ca4ef8cc3c1bff2f030c213703dc7bb229bd6ba058795f36062b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
