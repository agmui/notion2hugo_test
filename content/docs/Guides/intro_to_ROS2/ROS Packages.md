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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JOBGZRO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCTM2BV5eGh2fQuUWybfZlrhbJjtgI1LOS%2BhEU0OGLs2wIhAK9Ar7lLou%2FW0lHI3J4LMZ9%2F0BPiL4EoSQ0naZq85WYxKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDD0mDd%2BU%2BLJRXvHEq3ANpUNpLYmdNyprkyNiZvaR0GnZxSFyWK4cqmvFnYenQT9XGTr7hfLKX07gIP8V%2FH2Dq%2BPDphHqoFKFzD8%2Fk45uqe8DhNdM0JYBu7iSfDNZ4%2FmOWky7iY7kPZSpS%2BNCvJWWZdIKD2ERuyEBs1%2Fyg%2Fj9AnTPb%2Fljsdwr5Jx9wOvfUTfLwy%2FLokuUvQYnZlUMjzkBIaEujgzgVYspqaLXIHCGr90z5JN%2FMQLS2PnOXFZe2jsJw2g4KI296QQMlhVNxp3zWsY5BqUhaF%2BV3EbNyAy3MEW5%2FdDn79Fr2KkrXIvSaoACxRqsVSs3ZAe9IdVhwCp4vuXgT8u%2FSnjT%2Fuelq6A3Qj5aeklKaM778LHhdhKWxleekM%2FNMfhPuAHAU4A4ErDsgw8Xp9ZbObXF%2B5v5UzY1Yd1z4ScUbfWqly7gsDZ7d6WKrUmtzJps1DgCs1IiFrqhTl1ghu1Tx3%2BxI1BN1vLh09YgShk9hVSSj4x1%2BSZETd%2Bq5fxoc%2Fo7MdsWmT2Ka4DTR0EfD6RFeH3UQGP5XMGllrIrKpG%2FEGABj0neHARa0RE46JNVJCnTNk%2F59oRLhQYMNthNq66QPTzOHUw7oaBqjfNesWR6eLt4TZWwCFEJBM3zTcIS5RBCFzkFIbDC23O%2FBBjqkAeWJ3OOx3skut26oy9jItaKtOcENkylAAUwYE6im5sW%2Fdi3L5TQdGNU1l714iRT7jeo%2FdwLfITeYwOT%2BlIOyhvh7aaCYLDyvAsE8CNk6UeAoYizy5G%2FtVlYuBx2JoH7CW3JHiVJcBO5%2B6nf1jyU9KocH%2FkVqGgXDOAzgY5iPulHPHqNevg4O10kPb3Rhqt1pZK7UNTuM52S%2FoY306w1Hg%2B7yOp6m&X-Amz-Signature=33b29d796ceb31f22b7880a7e6f911df53e9883578977a9e0d54c11185f27c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JOBGZRO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCTM2BV5eGh2fQuUWybfZlrhbJjtgI1LOS%2BhEU0OGLs2wIhAK9Ar7lLou%2FW0lHI3J4LMZ9%2F0BPiL4EoSQ0naZq85WYxKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDD0mDd%2BU%2BLJRXvHEq3ANpUNpLYmdNyprkyNiZvaR0GnZxSFyWK4cqmvFnYenQT9XGTr7hfLKX07gIP8V%2FH2Dq%2BPDphHqoFKFzD8%2Fk45uqe8DhNdM0JYBu7iSfDNZ4%2FmOWky7iY7kPZSpS%2BNCvJWWZdIKD2ERuyEBs1%2Fyg%2Fj9AnTPb%2Fljsdwr5Jx9wOvfUTfLwy%2FLokuUvQYnZlUMjzkBIaEujgzgVYspqaLXIHCGr90z5JN%2FMQLS2PnOXFZe2jsJw2g4KI296QQMlhVNxp3zWsY5BqUhaF%2BV3EbNyAy3MEW5%2FdDn79Fr2KkrXIvSaoACxRqsVSs3ZAe9IdVhwCp4vuXgT8u%2FSnjT%2Fuelq6A3Qj5aeklKaM778LHhdhKWxleekM%2FNMfhPuAHAU4A4ErDsgw8Xp9ZbObXF%2B5v5UzY1Yd1z4ScUbfWqly7gsDZ7d6WKrUmtzJps1DgCs1IiFrqhTl1ghu1Tx3%2BxI1BN1vLh09YgShk9hVSSj4x1%2BSZETd%2Bq5fxoc%2Fo7MdsWmT2Ka4DTR0EfD6RFeH3UQGP5XMGllrIrKpG%2FEGABj0neHARa0RE46JNVJCnTNk%2F59oRLhQYMNthNq66QPTzOHUw7oaBqjfNesWR6eLt4TZWwCFEJBM3zTcIS5RBCFzkFIbDC23O%2FBBjqkAeWJ3OOx3skut26oy9jItaKtOcENkylAAUwYE6im5sW%2Fdi3L5TQdGNU1l714iRT7jeo%2FdwLfITeYwOT%2BlIOyhvh7aaCYLDyvAsE8CNk6UeAoYizy5G%2FtVlYuBx2JoH7CW3JHiVJcBO5%2B6nf1jyU9KocH%2FkVqGgXDOAzgY5iPulHPHqNevg4O10kPb3Rhqt1pZK7UNTuM52S%2FoY306w1Hg%2B7yOp6m&X-Amz-Signature=0ba04c47b20a4e16df7d08bd9da6ea787e71006ea75604c8fbc330164c3010ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JOBGZRO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCTM2BV5eGh2fQuUWybfZlrhbJjtgI1LOS%2BhEU0OGLs2wIhAK9Ar7lLou%2FW0lHI3J4LMZ9%2F0BPiL4EoSQ0naZq85WYxKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDD0mDd%2BU%2BLJRXvHEq3ANpUNpLYmdNyprkyNiZvaR0GnZxSFyWK4cqmvFnYenQT9XGTr7hfLKX07gIP8V%2FH2Dq%2BPDphHqoFKFzD8%2Fk45uqe8DhNdM0JYBu7iSfDNZ4%2FmOWky7iY7kPZSpS%2BNCvJWWZdIKD2ERuyEBs1%2Fyg%2Fj9AnTPb%2Fljsdwr5Jx9wOvfUTfLwy%2FLokuUvQYnZlUMjzkBIaEujgzgVYspqaLXIHCGr90z5JN%2FMQLS2PnOXFZe2jsJw2g4KI296QQMlhVNxp3zWsY5BqUhaF%2BV3EbNyAy3MEW5%2FdDn79Fr2KkrXIvSaoACxRqsVSs3ZAe9IdVhwCp4vuXgT8u%2FSnjT%2Fuelq6A3Qj5aeklKaM778LHhdhKWxleekM%2FNMfhPuAHAU4A4ErDsgw8Xp9ZbObXF%2B5v5UzY1Yd1z4ScUbfWqly7gsDZ7d6WKrUmtzJps1DgCs1IiFrqhTl1ghu1Tx3%2BxI1BN1vLh09YgShk9hVSSj4x1%2BSZETd%2Bq5fxoc%2Fo7MdsWmT2Ka4DTR0EfD6RFeH3UQGP5XMGllrIrKpG%2FEGABj0neHARa0RE46JNVJCnTNk%2F59oRLhQYMNthNq66QPTzOHUw7oaBqjfNesWR6eLt4TZWwCFEJBM3zTcIS5RBCFzkFIbDC23O%2FBBjqkAeWJ3OOx3skut26oy9jItaKtOcENkylAAUwYE6im5sW%2Fdi3L5TQdGNU1l714iRT7jeo%2FdwLfITeYwOT%2BlIOyhvh7aaCYLDyvAsE8CNk6UeAoYizy5G%2FtVlYuBx2JoH7CW3JHiVJcBO5%2B6nf1jyU9KocH%2FkVqGgXDOAzgY5iPulHPHqNevg4O10kPb3Rhqt1pZK7UNTuM52S%2FoY306w1Hg%2B7yOp6m&X-Amz-Signature=5f76421304954b6d3c289c5ec6fb509446eac2338c34bf57033e9c9ac8572e07&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JOBGZRO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCTM2BV5eGh2fQuUWybfZlrhbJjtgI1LOS%2BhEU0OGLs2wIhAK9Ar7lLou%2FW0lHI3J4LMZ9%2F0BPiL4EoSQ0naZq85WYxKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDD0mDd%2BU%2BLJRXvHEq3ANpUNpLYmdNyprkyNiZvaR0GnZxSFyWK4cqmvFnYenQT9XGTr7hfLKX07gIP8V%2FH2Dq%2BPDphHqoFKFzD8%2Fk45uqe8DhNdM0JYBu7iSfDNZ4%2FmOWky7iY7kPZSpS%2BNCvJWWZdIKD2ERuyEBs1%2Fyg%2Fj9AnTPb%2Fljsdwr5Jx9wOvfUTfLwy%2FLokuUvQYnZlUMjzkBIaEujgzgVYspqaLXIHCGr90z5JN%2FMQLS2PnOXFZe2jsJw2g4KI296QQMlhVNxp3zWsY5BqUhaF%2BV3EbNyAy3MEW5%2FdDn79Fr2KkrXIvSaoACxRqsVSs3ZAe9IdVhwCp4vuXgT8u%2FSnjT%2Fuelq6A3Qj5aeklKaM778LHhdhKWxleekM%2FNMfhPuAHAU4A4ErDsgw8Xp9ZbObXF%2B5v5UzY1Yd1z4ScUbfWqly7gsDZ7d6WKrUmtzJps1DgCs1IiFrqhTl1ghu1Tx3%2BxI1BN1vLh09YgShk9hVSSj4x1%2BSZETd%2Bq5fxoc%2Fo7MdsWmT2Ka4DTR0EfD6RFeH3UQGP5XMGllrIrKpG%2FEGABj0neHARa0RE46JNVJCnTNk%2F59oRLhQYMNthNq66QPTzOHUw7oaBqjfNesWR6eLt4TZWwCFEJBM3zTcIS5RBCFzkFIbDC23O%2FBBjqkAeWJ3OOx3skut26oy9jItaKtOcENkylAAUwYE6im5sW%2Fdi3L5TQdGNU1l714iRT7jeo%2FdwLfITeYwOT%2BlIOyhvh7aaCYLDyvAsE8CNk6UeAoYizy5G%2FtVlYuBx2JoH7CW3JHiVJcBO5%2B6nf1jyU9KocH%2FkVqGgXDOAzgY5iPulHPHqNevg4O10kPb3Rhqt1pZK7UNTuM52S%2FoY306w1Hg%2B7yOp6m&X-Amz-Signature=803c171e251951e97eb4273a48e2e87a9b2df3a153619b195aef061d513085ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JOBGZRO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCTM2BV5eGh2fQuUWybfZlrhbJjtgI1LOS%2BhEU0OGLs2wIhAK9Ar7lLou%2FW0lHI3J4LMZ9%2F0BPiL4EoSQ0naZq85WYxKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDD0mDd%2BU%2BLJRXvHEq3ANpUNpLYmdNyprkyNiZvaR0GnZxSFyWK4cqmvFnYenQT9XGTr7hfLKX07gIP8V%2FH2Dq%2BPDphHqoFKFzD8%2Fk45uqe8DhNdM0JYBu7iSfDNZ4%2FmOWky7iY7kPZSpS%2BNCvJWWZdIKD2ERuyEBs1%2Fyg%2Fj9AnTPb%2Fljsdwr5Jx9wOvfUTfLwy%2FLokuUvQYnZlUMjzkBIaEujgzgVYspqaLXIHCGr90z5JN%2FMQLS2PnOXFZe2jsJw2g4KI296QQMlhVNxp3zWsY5BqUhaF%2BV3EbNyAy3MEW5%2FdDn79Fr2KkrXIvSaoACxRqsVSs3ZAe9IdVhwCp4vuXgT8u%2FSnjT%2Fuelq6A3Qj5aeklKaM778LHhdhKWxleekM%2FNMfhPuAHAU4A4ErDsgw8Xp9ZbObXF%2B5v5UzY1Yd1z4ScUbfWqly7gsDZ7d6WKrUmtzJps1DgCs1IiFrqhTl1ghu1Tx3%2BxI1BN1vLh09YgShk9hVSSj4x1%2BSZETd%2Bq5fxoc%2Fo7MdsWmT2Ka4DTR0EfD6RFeH3UQGP5XMGllrIrKpG%2FEGABj0neHARa0RE46JNVJCnTNk%2F59oRLhQYMNthNq66QPTzOHUw7oaBqjfNesWR6eLt4TZWwCFEJBM3zTcIS5RBCFzkFIbDC23O%2FBBjqkAeWJ3OOx3skut26oy9jItaKtOcENkylAAUwYE6im5sW%2Fdi3L5TQdGNU1l714iRT7jeo%2FdwLfITeYwOT%2BlIOyhvh7aaCYLDyvAsE8CNk6UeAoYizy5G%2FtVlYuBx2JoH7CW3JHiVJcBO5%2B6nf1jyU9KocH%2FkVqGgXDOAzgY5iPulHPHqNevg4O10kPb3Rhqt1pZK7UNTuM52S%2FoY306w1Hg%2B7yOp6m&X-Amz-Signature=2ca1fc71608b1cd9c5a5bfad49e424a1d25d3cf13cc0b06fe8db680360fd82ff&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JOBGZRO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCTM2BV5eGh2fQuUWybfZlrhbJjtgI1LOS%2BhEU0OGLs2wIhAK9Ar7lLou%2FW0lHI3J4LMZ9%2F0BPiL4EoSQ0naZq85WYxKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDD0mDd%2BU%2BLJRXvHEq3ANpUNpLYmdNyprkyNiZvaR0GnZxSFyWK4cqmvFnYenQT9XGTr7hfLKX07gIP8V%2FH2Dq%2BPDphHqoFKFzD8%2Fk45uqe8DhNdM0JYBu7iSfDNZ4%2FmOWky7iY7kPZSpS%2BNCvJWWZdIKD2ERuyEBs1%2Fyg%2Fj9AnTPb%2Fljsdwr5Jx9wOvfUTfLwy%2FLokuUvQYnZlUMjzkBIaEujgzgVYspqaLXIHCGr90z5JN%2FMQLS2PnOXFZe2jsJw2g4KI296QQMlhVNxp3zWsY5BqUhaF%2BV3EbNyAy3MEW5%2FdDn79Fr2KkrXIvSaoACxRqsVSs3ZAe9IdVhwCp4vuXgT8u%2FSnjT%2Fuelq6A3Qj5aeklKaM778LHhdhKWxleekM%2FNMfhPuAHAU4A4ErDsgw8Xp9ZbObXF%2B5v5UzY1Yd1z4ScUbfWqly7gsDZ7d6WKrUmtzJps1DgCs1IiFrqhTl1ghu1Tx3%2BxI1BN1vLh09YgShk9hVSSj4x1%2BSZETd%2Bq5fxoc%2Fo7MdsWmT2Ka4DTR0EfD6RFeH3UQGP5XMGllrIrKpG%2FEGABj0neHARa0RE46JNVJCnTNk%2F59oRLhQYMNthNq66QPTzOHUw7oaBqjfNesWR6eLt4TZWwCFEJBM3zTcIS5RBCFzkFIbDC23O%2FBBjqkAeWJ3OOx3skut26oy9jItaKtOcENkylAAUwYE6im5sW%2Fdi3L5TQdGNU1l714iRT7jeo%2FdwLfITeYwOT%2BlIOyhvh7aaCYLDyvAsE8CNk6UeAoYizy5G%2FtVlYuBx2JoH7CW3JHiVJcBO5%2B6nf1jyU9KocH%2FkVqGgXDOAzgY5iPulHPHqNevg4O10kPb3Rhqt1pZK7UNTuM52S%2FoY306w1Hg%2B7yOp6m&X-Amz-Signature=84ff8233bbda5fb6bbd9c6ab268343022635300ba05022761eb96d5b13bd6f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JOBGZRO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCTM2BV5eGh2fQuUWybfZlrhbJjtgI1LOS%2BhEU0OGLs2wIhAK9Ar7lLou%2FW0lHI3J4LMZ9%2F0BPiL4EoSQ0naZq85WYxKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDD0mDd%2BU%2BLJRXvHEq3ANpUNpLYmdNyprkyNiZvaR0GnZxSFyWK4cqmvFnYenQT9XGTr7hfLKX07gIP8V%2FH2Dq%2BPDphHqoFKFzD8%2Fk45uqe8DhNdM0JYBu7iSfDNZ4%2FmOWky7iY7kPZSpS%2BNCvJWWZdIKD2ERuyEBs1%2Fyg%2Fj9AnTPb%2Fljsdwr5Jx9wOvfUTfLwy%2FLokuUvQYnZlUMjzkBIaEujgzgVYspqaLXIHCGr90z5JN%2FMQLS2PnOXFZe2jsJw2g4KI296QQMlhVNxp3zWsY5BqUhaF%2BV3EbNyAy3MEW5%2FdDn79Fr2KkrXIvSaoACxRqsVSs3ZAe9IdVhwCp4vuXgT8u%2FSnjT%2Fuelq6A3Qj5aeklKaM778LHhdhKWxleekM%2FNMfhPuAHAU4A4ErDsgw8Xp9ZbObXF%2B5v5UzY1Yd1z4ScUbfWqly7gsDZ7d6WKrUmtzJps1DgCs1IiFrqhTl1ghu1Tx3%2BxI1BN1vLh09YgShk9hVSSj4x1%2BSZETd%2Bq5fxoc%2Fo7MdsWmT2Ka4DTR0EfD6RFeH3UQGP5XMGllrIrKpG%2FEGABj0neHARa0RE46JNVJCnTNk%2F59oRLhQYMNthNq66QPTzOHUw7oaBqjfNesWR6eLt4TZWwCFEJBM3zTcIS5RBCFzkFIbDC23O%2FBBjqkAeWJ3OOx3skut26oy9jItaKtOcENkylAAUwYE6im5sW%2Fdi3L5TQdGNU1l714iRT7jeo%2FdwLfITeYwOT%2BlIOyhvh7aaCYLDyvAsE8CNk6UeAoYizy5G%2FtVlYuBx2JoH7CW3JHiVJcBO5%2B6nf1jyU9KocH%2FkVqGgXDOAzgY5iPulHPHqNevg4O10kPb3Rhqt1pZK7UNTuM52S%2FoY306w1Hg%2B7yOp6m&X-Amz-Signature=0d9f0152de87842c48a1c86bed26726923cc88eb15cde7e971c34f5b43f305d0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
