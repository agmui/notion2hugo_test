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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466356JI67O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCf%2BTJh3xWnN%2BW8CApVE47hEXDCbifHrOetQL78dEB5WQIhAM6hihpKQ4Uw12A2TF18%2FA1EJQAelI%2BoqyXZGbEgfx21Kv8DCG0QABoMNjM3NDIzMTgzODA1IgwxjPc78wWzjw9QGngq3APnUwsZO8dDDX7%2BCXV14yujfVjtb8mobNxiB1n%2BwLqEgcV5c2%2BsHjRRid8ibnpq0EtoSlgVdTVXyUm%2Bzzo6ExO9MYEoJD%2Bkgf73T7np45CE%2F6yfxghVUSVVQz00h%2F13xtNJq8iTDiONl8fkhdQ4cpFeozctB5Nsfe2XwNjeCSI%2B3kkgscQhnMXr8%2F4uLzfHWi5mroC8XMJqHTJjFwmvw4JNYjm2rfHJDk%2FKpXTSnb3dyAZRZl92xOrjgkR2PEywddlnL3VfKowTbxzlWu5utIIqcC9DdlguhNxwJSh2TG5iz58R3Cc%2FxtI10K%2BQTmCyg2IlnvKNE7y1EOdqg0J%2F%2FPz%2FvLSsOhwTV0wRQt%2Boe2OVjHXn%2FfCBOehIVZLHsoDn1utCaf%2FXJS%2F57nwN60z8kTT%2FLtqRro6nNu9%2BVp6bfsHE3Gxa1b0iorCXBY%2BfK0YAQh011fQew0Ka2%2FmW7wiBh4goW%2B8f1Wnrfqiz%2FxrvSyEVy54zhe%2B1%2FarzkPqtEbPCUfvaaxhiywEr05ZvkaqKpSTDx2M%2BxDIrwDaUL%2BA7tTKsHel5v7oQG28h2NjHnhdBHlE49Ht4T5EZRHx6WXHKPHU8odts3BofoPN2NOjlLSQFrHPwiLmsW4JIWODU%2BzDwqLS%2BBjqkAZ4AdzWXqLj5CVppqdTI4WI%2F8IN8RBswlA%2BLMabKigF%2FPU0v%2Bs6Nx7e4OFBQE4heSXwbBPPEaOraBbwrsthSaZD61InDTBpZGMiS46fkqyjtqGOs3OtHpk3GCrjQAJy2HPYkuYzASx3FMQxGy%2FXsCykZLflAfFfvR1fmbberojK41kVSNPI6%2B6EpOb8cbEdncXM%2Fb14rg6uyNBVfBZQZUTQhbTvj&X-Amz-Signature=3f5ef5dbf01efe66aac4b9a156336da21e7479cb0ab8e873268bf27399c6037f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466356JI67O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCf%2BTJh3xWnN%2BW8CApVE47hEXDCbifHrOetQL78dEB5WQIhAM6hihpKQ4Uw12A2TF18%2FA1EJQAelI%2BoqyXZGbEgfx21Kv8DCG0QABoMNjM3NDIzMTgzODA1IgwxjPc78wWzjw9QGngq3APnUwsZO8dDDX7%2BCXV14yujfVjtb8mobNxiB1n%2BwLqEgcV5c2%2BsHjRRid8ibnpq0EtoSlgVdTVXyUm%2Bzzo6ExO9MYEoJD%2Bkgf73T7np45CE%2F6yfxghVUSVVQz00h%2F13xtNJq8iTDiONl8fkhdQ4cpFeozctB5Nsfe2XwNjeCSI%2B3kkgscQhnMXr8%2F4uLzfHWi5mroC8XMJqHTJjFwmvw4JNYjm2rfHJDk%2FKpXTSnb3dyAZRZl92xOrjgkR2PEywddlnL3VfKowTbxzlWu5utIIqcC9DdlguhNxwJSh2TG5iz58R3Cc%2FxtI10K%2BQTmCyg2IlnvKNE7y1EOdqg0J%2F%2FPz%2FvLSsOhwTV0wRQt%2Boe2OVjHXn%2FfCBOehIVZLHsoDn1utCaf%2FXJS%2F57nwN60z8kTT%2FLtqRro6nNu9%2BVp6bfsHE3Gxa1b0iorCXBY%2BfK0YAQh011fQew0Ka2%2FmW7wiBh4goW%2B8f1Wnrfqiz%2FxrvSyEVy54zhe%2B1%2FarzkPqtEbPCUfvaaxhiywEr05ZvkaqKpSTDx2M%2BxDIrwDaUL%2BA7tTKsHel5v7oQG28h2NjHnhdBHlE49Ht4T5EZRHx6WXHKPHU8odts3BofoPN2NOjlLSQFrHPwiLmsW4JIWODU%2BzDwqLS%2BBjqkAZ4AdzWXqLj5CVppqdTI4WI%2F8IN8RBswlA%2BLMabKigF%2FPU0v%2Bs6Nx7e4OFBQE4heSXwbBPPEaOraBbwrsthSaZD61InDTBpZGMiS46fkqyjtqGOs3OtHpk3GCrjQAJy2HPYkuYzASx3FMQxGy%2FXsCykZLflAfFfvR1fmbberojK41kVSNPI6%2B6EpOb8cbEdncXM%2Fb14rg6uyNBVfBZQZUTQhbTvj&X-Amz-Signature=85d935cb6732b8deb09619ece1c4ba3c9cdfccd779b60067ddffb44a3899455c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466356JI67O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCf%2BTJh3xWnN%2BW8CApVE47hEXDCbifHrOetQL78dEB5WQIhAM6hihpKQ4Uw12A2TF18%2FA1EJQAelI%2BoqyXZGbEgfx21Kv8DCG0QABoMNjM3NDIzMTgzODA1IgwxjPc78wWzjw9QGngq3APnUwsZO8dDDX7%2BCXV14yujfVjtb8mobNxiB1n%2BwLqEgcV5c2%2BsHjRRid8ibnpq0EtoSlgVdTVXyUm%2Bzzo6ExO9MYEoJD%2Bkgf73T7np45CE%2F6yfxghVUSVVQz00h%2F13xtNJq8iTDiONl8fkhdQ4cpFeozctB5Nsfe2XwNjeCSI%2B3kkgscQhnMXr8%2F4uLzfHWi5mroC8XMJqHTJjFwmvw4JNYjm2rfHJDk%2FKpXTSnb3dyAZRZl92xOrjgkR2PEywddlnL3VfKowTbxzlWu5utIIqcC9DdlguhNxwJSh2TG5iz58R3Cc%2FxtI10K%2BQTmCyg2IlnvKNE7y1EOdqg0J%2F%2FPz%2FvLSsOhwTV0wRQt%2Boe2OVjHXn%2FfCBOehIVZLHsoDn1utCaf%2FXJS%2F57nwN60z8kTT%2FLtqRro6nNu9%2BVp6bfsHE3Gxa1b0iorCXBY%2BfK0YAQh011fQew0Ka2%2FmW7wiBh4goW%2B8f1Wnrfqiz%2FxrvSyEVy54zhe%2B1%2FarzkPqtEbPCUfvaaxhiywEr05ZvkaqKpSTDx2M%2BxDIrwDaUL%2BA7tTKsHel5v7oQG28h2NjHnhdBHlE49Ht4T5EZRHx6WXHKPHU8odts3BofoPN2NOjlLSQFrHPwiLmsW4JIWODU%2BzDwqLS%2BBjqkAZ4AdzWXqLj5CVppqdTI4WI%2F8IN8RBswlA%2BLMabKigF%2FPU0v%2Bs6Nx7e4OFBQE4heSXwbBPPEaOraBbwrsthSaZD61InDTBpZGMiS46fkqyjtqGOs3OtHpk3GCrjQAJy2HPYkuYzASx3FMQxGy%2FXsCykZLflAfFfvR1fmbberojK41kVSNPI6%2B6EpOb8cbEdncXM%2Fb14rg6uyNBVfBZQZUTQhbTvj&X-Amz-Signature=cf7bd413f42ff9dab58ef457ba712bc1fa2d7ca2d6d818fe96beab66082ef87a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466356JI67O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCf%2BTJh3xWnN%2BW8CApVE47hEXDCbifHrOetQL78dEB5WQIhAM6hihpKQ4Uw12A2TF18%2FA1EJQAelI%2BoqyXZGbEgfx21Kv8DCG0QABoMNjM3NDIzMTgzODA1IgwxjPc78wWzjw9QGngq3APnUwsZO8dDDX7%2BCXV14yujfVjtb8mobNxiB1n%2BwLqEgcV5c2%2BsHjRRid8ibnpq0EtoSlgVdTVXyUm%2Bzzo6ExO9MYEoJD%2Bkgf73T7np45CE%2F6yfxghVUSVVQz00h%2F13xtNJq8iTDiONl8fkhdQ4cpFeozctB5Nsfe2XwNjeCSI%2B3kkgscQhnMXr8%2F4uLzfHWi5mroC8XMJqHTJjFwmvw4JNYjm2rfHJDk%2FKpXTSnb3dyAZRZl92xOrjgkR2PEywddlnL3VfKowTbxzlWu5utIIqcC9DdlguhNxwJSh2TG5iz58R3Cc%2FxtI10K%2BQTmCyg2IlnvKNE7y1EOdqg0J%2F%2FPz%2FvLSsOhwTV0wRQt%2Boe2OVjHXn%2FfCBOehIVZLHsoDn1utCaf%2FXJS%2F57nwN60z8kTT%2FLtqRro6nNu9%2BVp6bfsHE3Gxa1b0iorCXBY%2BfK0YAQh011fQew0Ka2%2FmW7wiBh4goW%2B8f1Wnrfqiz%2FxrvSyEVy54zhe%2B1%2FarzkPqtEbPCUfvaaxhiywEr05ZvkaqKpSTDx2M%2BxDIrwDaUL%2BA7tTKsHel5v7oQG28h2NjHnhdBHlE49Ht4T5EZRHx6WXHKPHU8odts3BofoPN2NOjlLSQFrHPwiLmsW4JIWODU%2BzDwqLS%2BBjqkAZ4AdzWXqLj5CVppqdTI4WI%2F8IN8RBswlA%2BLMabKigF%2FPU0v%2Bs6Nx7e4OFBQE4heSXwbBPPEaOraBbwrsthSaZD61InDTBpZGMiS46fkqyjtqGOs3OtHpk3GCrjQAJy2HPYkuYzASx3FMQxGy%2FXsCykZLflAfFfvR1fmbberojK41kVSNPI6%2B6EpOb8cbEdncXM%2Fb14rg6uyNBVfBZQZUTQhbTvj&X-Amz-Signature=a72cdb2f4b699d2e0289768f77b6e47702a05451d2adfc2ac19f3feb3f2b3ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466356JI67O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCf%2BTJh3xWnN%2BW8CApVE47hEXDCbifHrOetQL78dEB5WQIhAM6hihpKQ4Uw12A2TF18%2FA1EJQAelI%2BoqyXZGbEgfx21Kv8DCG0QABoMNjM3NDIzMTgzODA1IgwxjPc78wWzjw9QGngq3APnUwsZO8dDDX7%2BCXV14yujfVjtb8mobNxiB1n%2BwLqEgcV5c2%2BsHjRRid8ibnpq0EtoSlgVdTVXyUm%2Bzzo6ExO9MYEoJD%2Bkgf73T7np45CE%2F6yfxghVUSVVQz00h%2F13xtNJq8iTDiONl8fkhdQ4cpFeozctB5Nsfe2XwNjeCSI%2B3kkgscQhnMXr8%2F4uLzfHWi5mroC8XMJqHTJjFwmvw4JNYjm2rfHJDk%2FKpXTSnb3dyAZRZl92xOrjgkR2PEywddlnL3VfKowTbxzlWu5utIIqcC9DdlguhNxwJSh2TG5iz58R3Cc%2FxtI10K%2BQTmCyg2IlnvKNE7y1EOdqg0J%2F%2FPz%2FvLSsOhwTV0wRQt%2Boe2OVjHXn%2FfCBOehIVZLHsoDn1utCaf%2FXJS%2F57nwN60z8kTT%2FLtqRro6nNu9%2BVp6bfsHE3Gxa1b0iorCXBY%2BfK0YAQh011fQew0Ka2%2FmW7wiBh4goW%2B8f1Wnrfqiz%2FxrvSyEVy54zhe%2B1%2FarzkPqtEbPCUfvaaxhiywEr05ZvkaqKpSTDx2M%2BxDIrwDaUL%2BA7tTKsHel5v7oQG28h2NjHnhdBHlE49Ht4T5EZRHx6WXHKPHU8odts3BofoPN2NOjlLSQFrHPwiLmsW4JIWODU%2BzDwqLS%2BBjqkAZ4AdzWXqLj5CVppqdTI4WI%2F8IN8RBswlA%2BLMabKigF%2FPU0v%2Bs6Nx7e4OFBQE4heSXwbBPPEaOraBbwrsthSaZD61InDTBpZGMiS46fkqyjtqGOs3OtHpk3GCrjQAJy2HPYkuYzASx3FMQxGy%2FXsCykZLflAfFfvR1fmbberojK41kVSNPI6%2B6EpOb8cbEdncXM%2Fb14rg6uyNBVfBZQZUTQhbTvj&X-Amz-Signature=25626515e83848452f159f9cf47f8ca54884c8d6b59e1277d545eeddca9ceb5c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466356JI67O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCf%2BTJh3xWnN%2BW8CApVE47hEXDCbifHrOetQL78dEB5WQIhAM6hihpKQ4Uw12A2TF18%2FA1EJQAelI%2BoqyXZGbEgfx21Kv8DCG0QABoMNjM3NDIzMTgzODA1IgwxjPc78wWzjw9QGngq3APnUwsZO8dDDX7%2BCXV14yujfVjtb8mobNxiB1n%2BwLqEgcV5c2%2BsHjRRid8ibnpq0EtoSlgVdTVXyUm%2Bzzo6ExO9MYEoJD%2Bkgf73T7np45CE%2F6yfxghVUSVVQz00h%2F13xtNJq8iTDiONl8fkhdQ4cpFeozctB5Nsfe2XwNjeCSI%2B3kkgscQhnMXr8%2F4uLzfHWi5mroC8XMJqHTJjFwmvw4JNYjm2rfHJDk%2FKpXTSnb3dyAZRZl92xOrjgkR2PEywddlnL3VfKowTbxzlWu5utIIqcC9DdlguhNxwJSh2TG5iz58R3Cc%2FxtI10K%2BQTmCyg2IlnvKNE7y1EOdqg0J%2F%2FPz%2FvLSsOhwTV0wRQt%2Boe2OVjHXn%2FfCBOehIVZLHsoDn1utCaf%2FXJS%2F57nwN60z8kTT%2FLtqRro6nNu9%2BVp6bfsHE3Gxa1b0iorCXBY%2BfK0YAQh011fQew0Ka2%2FmW7wiBh4goW%2B8f1Wnrfqiz%2FxrvSyEVy54zhe%2B1%2FarzkPqtEbPCUfvaaxhiywEr05ZvkaqKpSTDx2M%2BxDIrwDaUL%2BA7tTKsHel5v7oQG28h2NjHnhdBHlE49Ht4T5EZRHx6WXHKPHU8odts3BofoPN2NOjlLSQFrHPwiLmsW4JIWODU%2BzDwqLS%2BBjqkAZ4AdzWXqLj5CVppqdTI4WI%2F8IN8RBswlA%2BLMabKigF%2FPU0v%2Bs6Nx7e4OFBQE4heSXwbBPPEaOraBbwrsthSaZD61InDTBpZGMiS46fkqyjtqGOs3OtHpk3GCrjQAJy2HPYkuYzASx3FMQxGy%2FXsCykZLflAfFfvR1fmbberojK41kVSNPI6%2B6EpOb8cbEdncXM%2Fb14rg6uyNBVfBZQZUTQhbTvj&X-Amz-Signature=49f40745c38315ec09ada65f600ea48a92ec8ee847ff5e2b1d3150293ade6e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466356JI67O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCf%2BTJh3xWnN%2BW8CApVE47hEXDCbifHrOetQL78dEB5WQIhAM6hihpKQ4Uw12A2TF18%2FA1EJQAelI%2BoqyXZGbEgfx21Kv8DCG0QABoMNjM3NDIzMTgzODA1IgwxjPc78wWzjw9QGngq3APnUwsZO8dDDX7%2BCXV14yujfVjtb8mobNxiB1n%2BwLqEgcV5c2%2BsHjRRid8ibnpq0EtoSlgVdTVXyUm%2Bzzo6ExO9MYEoJD%2Bkgf73T7np45CE%2F6yfxghVUSVVQz00h%2F13xtNJq8iTDiONl8fkhdQ4cpFeozctB5Nsfe2XwNjeCSI%2B3kkgscQhnMXr8%2F4uLzfHWi5mroC8XMJqHTJjFwmvw4JNYjm2rfHJDk%2FKpXTSnb3dyAZRZl92xOrjgkR2PEywddlnL3VfKowTbxzlWu5utIIqcC9DdlguhNxwJSh2TG5iz58R3Cc%2FxtI10K%2BQTmCyg2IlnvKNE7y1EOdqg0J%2F%2FPz%2FvLSsOhwTV0wRQt%2Boe2OVjHXn%2FfCBOehIVZLHsoDn1utCaf%2FXJS%2F57nwN60z8kTT%2FLtqRro6nNu9%2BVp6bfsHE3Gxa1b0iorCXBY%2BfK0YAQh011fQew0Ka2%2FmW7wiBh4goW%2B8f1Wnrfqiz%2FxrvSyEVy54zhe%2B1%2FarzkPqtEbPCUfvaaxhiywEr05ZvkaqKpSTDx2M%2BxDIrwDaUL%2BA7tTKsHel5v7oQG28h2NjHnhdBHlE49Ht4T5EZRHx6WXHKPHU8odts3BofoPN2NOjlLSQFrHPwiLmsW4JIWODU%2BzDwqLS%2BBjqkAZ4AdzWXqLj5CVppqdTI4WI%2F8IN8RBswlA%2BLMabKigF%2FPU0v%2Bs6Nx7e4OFBQE4heSXwbBPPEaOraBbwrsthSaZD61InDTBpZGMiS46fkqyjtqGOs3OtHpk3GCrjQAJy2HPYkuYzASx3FMQxGy%2FXsCykZLflAfFfvR1fmbberojK41kVSNPI6%2B6EpOb8cbEdncXM%2Fb14rg6uyNBVfBZQZUTQhbTvj&X-Amz-Signature=0f3d4c7546da039dfd4e29bbf42a3d129b97a42c1460f0dae98d8ff5a5bc11fb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
