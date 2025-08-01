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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGQH2SF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcW1qfszqmWsMkoZiQbKiUdifk4Y4C9k5bbOhXR13ZaAiAdurRhUAqYXiqe4dKqyzjTFWm%2BNWPPgE4pO4NcxoC7dSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmrCvT%2F79EJakxbrHKtwDVTrBNoLx%2Fo4vFb9IqUoMSe97On95GwE0qhmKfJ0GF9JfpLM6pQp4nAp%2FuKtEJ7l2oKdaJwdISdFxOUmEy0fh3DWKa2VC2I%2B3Fy7F4oQJbsVNokcPuYhgi3ysaHy0uIjUAVoLA%2Fw5H4mBkNM5nq3Glvt8B%2Br0V3ADnGZab%2FkQqNeLxwC1ZJIlv5H7%2FQW2leP19vI48dOFXeIAqMNssbRjdrYQjPwZhWE4%2Fk2B2BsYenhUwqa%2BXs27VUnQ1LZPLOU5rDP2Ck7azteE%2BFFZsbgDXExjQTDy9Q44LaGvzTNqAaP%2FSHw0es9kJnNQYjS9QBVOzS60rwJXlG4NJkmrr8FkBIn0dxLsKKt86FGRYJM3odn3kc5xHjLrDdlA3AjQQlh5hXEvDK114jla5t2l7iJ3ORCWMPJ5JLxNVWjOMBZNmH3jh80bObaKmx1WWoWFegOmKOAfJLQqx2w96n%2BbgAXixDDWTtF%2BzsYegMPCyR7wdrBORKW1lUCnkOcpJ6QyMvp3isvMTGI%2BzkTRXEUSmLwYXACQ12YToNDA133jIM49J8nzttnqHRYqtW%2BbVUmmiPJ4VfZJoHt9n3CCxmqmbS4jtF4cEzW61BL%2FzUVtJdNEN3a73JFR3XptcMAOth8wy%2BOyxAY6pgEMX6h7oXvjJkT%2FcJtM1Vm9VKlM2KZdn4wkzPJWy2RRoi66nDBDf%2FltXL9X7HklUCELJoc1yV2tly7POzIeDKSsBpRYxKf8tnGbZukMavkcMyp%2B1gYIzMGFH1kMCbk%2FqoyR1DmpKJ79eHtJVgSxJjs0D34F5MUzwlLxM58H%2B%2FQm%2FxlgStedAeZQjz%2FYRSm5VxAMDqEM2ZELYpcE36q1tU50Ho8xwxgM&X-Amz-Signature=e5209d82ec51362cf97e79eca15c73ae0259dd5c4a8bac2718b67c5445e068f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGQH2SF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcW1qfszqmWsMkoZiQbKiUdifk4Y4C9k5bbOhXR13ZaAiAdurRhUAqYXiqe4dKqyzjTFWm%2BNWPPgE4pO4NcxoC7dSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmrCvT%2F79EJakxbrHKtwDVTrBNoLx%2Fo4vFb9IqUoMSe97On95GwE0qhmKfJ0GF9JfpLM6pQp4nAp%2FuKtEJ7l2oKdaJwdISdFxOUmEy0fh3DWKa2VC2I%2B3Fy7F4oQJbsVNokcPuYhgi3ysaHy0uIjUAVoLA%2Fw5H4mBkNM5nq3Glvt8B%2Br0V3ADnGZab%2FkQqNeLxwC1ZJIlv5H7%2FQW2leP19vI48dOFXeIAqMNssbRjdrYQjPwZhWE4%2Fk2B2BsYenhUwqa%2BXs27VUnQ1LZPLOU5rDP2Ck7azteE%2BFFZsbgDXExjQTDy9Q44LaGvzTNqAaP%2FSHw0es9kJnNQYjS9QBVOzS60rwJXlG4NJkmrr8FkBIn0dxLsKKt86FGRYJM3odn3kc5xHjLrDdlA3AjQQlh5hXEvDK114jla5t2l7iJ3ORCWMPJ5JLxNVWjOMBZNmH3jh80bObaKmx1WWoWFegOmKOAfJLQqx2w96n%2BbgAXixDDWTtF%2BzsYegMPCyR7wdrBORKW1lUCnkOcpJ6QyMvp3isvMTGI%2BzkTRXEUSmLwYXACQ12YToNDA133jIM49J8nzttnqHRYqtW%2BbVUmmiPJ4VfZJoHt9n3CCxmqmbS4jtF4cEzW61BL%2FzUVtJdNEN3a73JFR3XptcMAOth8wy%2BOyxAY6pgEMX6h7oXvjJkT%2FcJtM1Vm9VKlM2KZdn4wkzPJWy2RRoi66nDBDf%2FltXL9X7HklUCELJoc1yV2tly7POzIeDKSsBpRYxKf8tnGbZukMavkcMyp%2B1gYIzMGFH1kMCbk%2FqoyR1DmpKJ79eHtJVgSxJjs0D34F5MUzwlLxM58H%2B%2FQm%2FxlgStedAeZQjz%2FYRSm5VxAMDqEM2ZELYpcE36q1tU50Ho8xwxgM&X-Amz-Signature=e2875924b5b4bdc563f8c7dd2b8c04e6a5c5429b64634b9cb707591097c3abec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGQH2SF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcW1qfszqmWsMkoZiQbKiUdifk4Y4C9k5bbOhXR13ZaAiAdurRhUAqYXiqe4dKqyzjTFWm%2BNWPPgE4pO4NcxoC7dSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmrCvT%2F79EJakxbrHKtwDVTrBNoLx%2Fo4vFb9IqUoMSe97On95GwE0qhmKfJ0GF9JfpLM6pQp4nAp%2FuKtEJ7l2oKdaJwdISdFxOUmEy0fh3DWKa2VC2I%2B3Fy7F4oQJbsVNokcPuYhgi3ysaHy0uIjUAVoLA%2Fw5H4mBkNM5nq3Glvt8B%2Br0V3ADnGZab%2FkQqNeLxwC1ZJIlv5H7%2FQW2leP19vI48dOFXeIAqMNssbRjdrYQjPwZhWE4%2Fk2B2BsYenhUwqa%2BXs27VUnQ1LZPLOU5rDP2Ck7azteE%2BFFZsbgDXExjQTDy9Q44LaGvzTNqAaP%2FSHw0es9kJnNQYjS9QBVOzS60rwJXlG4NJkmrr8FkBIn0dxLsKKt86FGRYJM3odn3kc5xHjLrDdlA3AjQQlh5hXEvDK114jla5t2l7iJ3ORCWMPJ5JLxNVWjOMBZNmH3jh80bObaKmx1WWoWFegOmKOAfJLQqx2w96n%2BbgAXixDDWTtF%2BzsYegMPCyR7wdrBORKW1lUCnkOcpJ6QyMvp3isvMTGI%2BzkTRXEUSmLwYXACQ12YToNDA133jIM49J8nzttnqHRYqtW%2BbVUmmiPJ4VfZJoHt9n3CCxmqmbS4jtF4cEzW61BL%2FzUVtJdNEN3a73JFR3XptcMAOth8wy%2BOyxAY6pgEMX6h7oXvjJkT%2FcJtM1Vm9VKlM2KZdn4wkzPJWy2RRoi66nDBDf%2FltXL9X7HklUCELJoc1yV2tly7POzIeDKSsBpRYxKf8tnGbZukMavkcMyp%2B1gYIzMGFH1kMCbk%2FqoyR1DmpKJ79eHtJVgSxJjs0D34F5MUzwlLxM58H%2B%2FQm%2FxlgStedAeZQjz%2FYRSm5VxAMDqEM2ZELYpcE36q1tU50Ho8xwxgM&X-Amz-Signature=8dfe8bc739d0eec0e7480d3f51f6f1fad607d40fc90b7c6cd304df0b728678ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGQH2SF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcW1qfszqmWsMkoZiQbKiUdifk4Y4C9k5bbOhXR13ZaAiAdurRhUAqYXiqe4dKqyzjTFWm%2BNWPPgE4pO4NcxoC7dSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmrCvT%2F79EJakxbrHKtwDVTrBNoLx%2Fo4vFb9IqUoMSe97On95GwE0qhmKfJ0GF9JfpLM6pQp4nAp%2FuKtEJ7l2oKdaJwdISdFxOUmEy0fh3DWKa2VC2I%2B3Fy7F4oQJbsVNokcPuYhgi3ysaHy0uIjUAVoLA%2Fw5H4mBkNM5nq3Glvt8B%2Br0V3ADnGZab%2FkQqNeLxwC1ZJIlv5H7%2FQW2leP19vI48dOFXeIAqMNssbRjdrYQjPwZhWE4%2Fk2B2BsYenhUwqa%2BXs27VUnQ1LZPLOU5rDP2Ck7azteE%2BFFZsbgDXExjQTDy9Q44LaGvzTNqAaP%2FSHw0es9kJnNQYjS9QBVOzS60rwJXlG4NJkmrr8FkBIn0dxLsKKt86FGRYJM3odn3kc5xHjLrDdlA3AjQQlh5hXEvDK114jla5t2l7iJ3ORCWMPJ5JLxNVWjOMBZNmH3jh80bObaKmx1WWoWFegOmKOAfJLQqx2w96n%2BbgAXixDDWTtF%2BzsYegMPCyR7wdrBORKW1lUCnkOcpJ6QyMvp3isvMTGI%2BzkTRXEUSmLwYXACQ12YToNDA133jIM49J8nzttnqHRYqtW%2BbVUmmiPJ4VfZJoHt9n3CCxmqmbS4jtF4cEzW61BL%2FzUVtJdNEN3a73JFR3XptcMAOth8wy%2BOyxAY6pgEMX6h7oXvjJkT%2FcJtM1Vm9VKlM2KZdn4wkzPJWy2RRoi66nDBDf%2FltXL9X7HklUCELJoc1yV2tly7POzIeDKSsBpRYxKf8tnGbZukMavkcMyp%2B1gYIzMGFH1kMCbk%2FqoyR1DmpKJ79eHtJVgSxJjs0D34F5MUzwlLxM58H%2B%2FQm%2FxlgStedAeZQjz%2FYRSm5VxAMDqEM2ZELYpcE36q1tU50Ho8xwxgM&X-Amz-Signature=c685d1e69e559a5b618d958feb0bfebcaa9be1670b8493b29f68c4a032108a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGQH2SF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcW1qfszqmWsMkoZiQbKiUdifk4Y4C9k5bbOhXR13ZaAiAdurRhUAqYXiqe4dKqyzjTFWm%2BNWPPgE4pO4NcxoC7dSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmrCvT%2F79EJakxbrHKtwDVTrBNoLx%2Fo4vFb9IqUoMSe97On95GwE0qhmKfJ0GF9JfpLM6pQp4nAp%2FuKtEJ7l2oKdaJwdISdFxOUmEy0fh3DWKa2VC2I%2B3Fy7F4oQJbsVNokcPuYhgi3ysaHy0uIjUAVoLA%2Fw5H4mBkNM5nq3Glvt8B%2Br0V3ADnGZab%2FkQqNeLxwC1ZJIlv5H7%2FQW2leP19vI48dOFXeIAqMNssbRjdrYQjPwZhWE4%2Fk2B2BsYenhUwqa%2BXs27VUnQ1LZPLOU5rDP2Ck7azteE%2BFFZsbgDXExjQTDy9Q44LaGvzTNqAaP%2FSHw0es9kJnNQYjS9QBVOzS60rwJXlG4NJkmrr8FkBIn0dxLsKKt86FGRYJM3odn3kc5xHjLrDdlA3AjQQlh5hXEvDK114jla5t2l7iJ3ORCWMPJ5JLxNVWjOMBZNmH3jh80bObaKmx1WWoWFegOmKOAfJLQqx2w96n%2BbgAXixDDWTtF%2BzsYegMPCyR7wdrBORKW1lUCnkOcpJ6QyMvp3isvMTGI%2BzkTRXEUSmLwYXACQ12YToNDA133jIM49J8nzttnqHRYqtW%2BbVUmmiPJ4VfZJoHt9n3CCxmqmbS4jtF4cEzW61BL%2FzUVtJdNEN3a73JFR3XptcMAOth8wy%2BOyxAY6pgEMX6h7oXvjJkT%2FcJtM1Vm9VKlM2KZdn4wkzPJWy2RRoi66nDBDf%2FltXL9X7HklUCELJoc1yV2tly7POzIeDKSsBpRYxKf8tnGbZukMavkcMyp%2B1gYIzMGFH1kMCbk%2FqoyR1DmpKJ79eHtJVgSxJjs0D34F5MUzwlLxM58H%2B%2FQm%2FxlgStedAeZQjz%2FYRSm5VxAMDqEM2ZELYpcE36q1tU50Ho8xwxgM&X-Amz-Signature=7b6bf368f603126a82d6b3400a6bb8294b8e42e6b051043a67e14894a1be671e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGQH2SF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcW1qfszqmWsMkoZiQbKiUdifk4Y4C9k5bbOhXR13ZaAiAdurRhUAqYXiqe4dKqyzjTFWm%2BNWPPgE4pO4NcxoC7dSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmrCvT%2F79EJakxbrHKtwDVTrBNoLx%2Fo4vFb9IqUoMSe97On95GwE0qhmKfJ0GF9JfpLM6pQp4nAp%2FuKtEJ7l2oKdaJwdISdFxOUmEy0fh3DWKa2VC2I%2B3Fy7F4oQJbsVNokcPuYhgi3ysaHy0uIjUAVoLA%2Fw5H4mBkNM5nq3Glvt8B%2Br0V3ADnGZab%2FkQqNeLxwC1ZJIlv5H7%2FQW2leP19vI48dOFXeIAqMNssbRjdrYQjPwZhWE4%2Fk2B2BsYenhUwqa%2BXs27VUnQ1LZPLOU5rDP2Ck7azteE%2BFFZsbgDXExjQTDy9Q44LaGvzTNqAaP%2FSHw0es9kJnNQYjS9QBVOzS60rwJXlG4NJkmrr8FkBIn0dxLsKKt86FGRYJM3odn3kc5xHjLrDdlA3AjQQlh5hXEvDK114jla5t2l7iJ3ORCWMPJ5JLxNVWjOMBZNmH3jh80bObaKmx1WWoWFegOmKOAfJLQqx2w96n%2BbgAXixDDWTtF%2BzsYegMPCyR7wdrBORKW1lUCnkOcpJ6QyMvp3isvMTGI%2BzkTRXEUSmLwYXACQ12YToNDA133jIM49J8nzttnqHRYqtW%2BbVUmmiPJ4VfZJoHt9n3CCxmqmbS4jtF4cEzW61BL%2FzUVtJdNEN3a73JFR3XptcMAOth8wy%2BOyxAY6pgEMX6h7oXvjJkT%2FcJtM1Vm9VKlM2KZdn4wkzPJWy2RRoi66nDBDf%2FltXL9X7HklUCELJoc1yV2tly7POzIeDKSsBpRYxKf8tnGbZukMavkcMyp%2B1gYIzMGFH1kMCbk%2FqoyR1DmpKJ79eHtJVgSxJjs0D34F5MUzwlLxM58H%2B%2FQm%2FxlgStedAeZQjz%2FYRSm5VxAMDqEM2ZELYpcE36q1tU50Ho8xwxgM&X-Amz-Signature=71e2c54743e9ab12b7157a84097f7497c83498d112eafaf88a025eb3b4cf29fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGQH2SF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcW1qfszqmWsMkoZiQbKiUdifk4Y4C9k5bbOhXR13ZaAiAdurRhUAqYXiqe4dKqyzjTFWm%2BNWPPgE4pO4NcxoC7dSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmrCvT%2F79EJakxbrHKtwDVTrBNoLx%2Fo4vFb9IqUoMSe97On95GwE0qhmKfJ0GF9JfpLM6pQp4nAp%2FuKtEJ7l2oKdaJwdISdFxOUmEy0fh3DWKa2VC2I%2B3Fy7F4oQJbsVNokcPuYhgi3ysaHy0uIjUAVoLA%2Fw5H4mBkNM5nq3Glvt8B%2Br0V3ADnGZab%2FkQqNeLxwC1ZJIlv5H7%2FQW2leP19vI48dOFXeIAqMNssbRjdrYQjPwZhWE4%2Fk2B2BsYenhUwqa%2BXs27VUnQ1LZPLOU5rDP2Ck7azteE%2BFFZsbgDXExjQTDy9Q44LaGvzTNqAaP%2FSHw0es9kJnNQYjS9QBVOzS60rwJXlG4NJkmrr8FkBIn0dxLsKKt86FGRYJM3odn3kc5xHjLrDdlA3AjQQlh5hXEvDK114jla5t2l7iJ3ORCWMPJ5JLxNVWjOMBZNmH3jh80bObaKmx1WWoWFegOmKOAfJLQqx2w96n%2BbgAXixDDWTtF%2BzsYegMPCyR7wdrBORKW1lUCnkOcpJ6QyMvp3isvMTGI%2BzkTRXEUSmLwYXACQ12YToNDA133jIM49J8nzttnqHRYqtW%2BbVUmmiPJ4VfZJoHt9n3CCxmqmbS4jtF4cEzW61BL%2FzUVtJdNEN3a73JFR3XptcMAOth8wy%2BOyxAY6pgEMX6h7oXvjJkT%2FcJtM1Vm9VKlM2KZdn4wkzPJWy2RRoi66nDBDf%2FltXL9X7HklUCELJoc1yV2tly7POzIeDKSsBpRYxKf8tnGbZukMavkcMyp%2B1gYIzMGFH1kMCbk%2FqoyR1DmpKJ79eHtJVgSxJjs0D34F5MUzwlLxM58H%2B%2FQm%2FxlgStedAeZQjz%2FYRSm5VxAMDqEM2ZELYpcE36q1tU50Ho8xwxgM&X-Amz-Signature=edf661cdce18db48815ac84a2eab89c6b28c8756a019427c4741184515954fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
