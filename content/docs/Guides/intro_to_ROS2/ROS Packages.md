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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6C5DBG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2RDDZDUAO3sFfxjjMzd5g3cqztwLwNxzO43cr3tK8AIhAMJftCtdOzaAMM2dQZzdXnWgMcjwvuWeGQSAVxxGAO9EKv8DCGAQABoMNjM3NDIzMTgzODA1Igwpl3U8zy1Iw4Jvb3cq3ANbREVy8jv%2BxqeLZkdn9EGymPDQFKLQ6NMA3wiEfvMIf1xb%2FFVmh4jmi15eWvfRwMCoIoDztpCZh%2BKSW0o6PFZBlfEMGXh%2FiNRWdQ9luNsNq9FPqCpSBw%2FydlXo96gY%2Bke6xtbZmY7pweUVgAtP8ut3w9HiNTYJ9Fvmhn7HL28oPxwO33nTjo9c1%2FvicBtdeqz01a14dkQoZz3%2Ft%2FIELuHtqe8%2BwNTBjNFlbQipICDhsv%2F9Gx6E8IcMPQ5C0DshGLac2zYcrcLcs%2FX4vS2MteCKamTv8Rvf2eahOncj%2BC2Bo3jwsB8ou3TaZqQSAQTe%2FKYlv8BgAO11CFR5jwvfyLwDAN7rbOe0au50MOj7Bfo5625QvtzSGHc7pWIzkJnXFQv6g668e5PzT6AewYkLK%2Bd%2BwNQIL4EjKbRXZXuxcFbNc8gf5Cz%2FzlZhVHAFeg10FOD7M2YuvAgQB%2BDz1l%2BHFs9mxeF%2BLOZHqJGKj8f6pd2vrYsZbDzGlBdBBiETpucVTQxdPTpHp7tvr14684RKjad5x2bBhTGP4KKrzVV%2FcT4Xqu50sa3%2BksRdsq8X4UAEdi4ALrtqjlefRpiiDigTPhIbjqRKQ0I0xVGpd0UyceV5ne%2FWmOH%2BaDAkECTwNjD20c%2B%2FBjqkAecZKxE4J4ZUIHzHQB43eGAxPMxVCRa0sYm7qW%2B8jG5mSuqusKrZ1u1ZkmC%2FPrGw1eTZ%2B60ekrysqVB5hgIIU6HYvyL%2FT1BsDC8BH%2FMStZv7t2aMUMg3gWf2eqYmaahE6R1FmIWVUQsdGoUjHLBs58pcCt9kOMF%2B1Pig1PukMfXtVV8ks%2BUJCdTbJVh2mSqxxqJR5JEhYsbTJNVO5%2BgqbaU73IaG&X-Amz-Signature=cc94f73c929f371302504e15b40906c91959a274fdcfa7cb2b826074e86fa484&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6C5DBG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2RDDZDUAO3sFfxjjMzd5g3cqztwLwNxzO43cr3tK8AIhAMJftCtdOzaAMM2dQZzdXnWgMcjwvuWeGQSAVxxGAO9EKv8DCGAQABoMNjM3NDIzMTgzODA1Igwpl3U8zy1Iw4Jvb3cq3ANbREVy8jv%2BxqeLZkdn9EGymPDQFKLQ6NMA3wiEfvMIf1xb%2FFVmh4jmi15eWvfRwMCoIoDztpCZh%2BKSW0o6PFZBlfEMGXh%2FiNRWdQ9luNsNq9FPqCpSBw%2FydlXo96gY%2Bke6xtbZmY7pweUVgAtP8ut3w9HiNTYJ9Fvmhn7HL28oPxwO33nTjo9c1%2FvicBtdeqz01a14dkQoZz3%2Ft%2FIELuHtqe8%2BwNTBjNFlbQipICDhsv%2F9Gx6E8IcMPQ5C0DshGLac2zYcrcLcs%2FX4vS2MteCKamTv8Rvf2eahOncj%2BC2Bo3jwsB8ou3TaZqQSAQTe%2FKYlv8BgAO11CFR5jwvfyLwDAN7rbOe0au50MOj7Bfo5625QvtzSGHc7pWIzkJnXFQv6g668e5PzT6AewYkLK%2Bd%2BwNQIL4EjKbRXZXuxcFbNc8gf5Cz%2FzlZhVHAFeg10FOD7M2YuvAgQB%2BDz1l%2BHFs9mxeF%2BLOZHqJGKj8f6pd2vrYsZbDzGlBdBBiETpucVTQxdPTpHp7tvr14684RKjad5x2bBhTGP4KKrzVV%2FcT4Xqu50sa3%2BksRdsq8X4UAEdi4ALrtqjlefRpiiDigTPhIbjqRKQ0I0xVGpd0UyceV5ne%2FWmOH%2BaDAkECTwNjD20c%2B%2FBjqkAecZKxE4J4ZUIHzHQB43eGAxPMxVCRa0sYm7qW%2B8jG5mSuqusKrZ1u1ZkmC%2FPrGw1eTZ%2B60ekrysqVB5hgIIU6HYvyL%2FT1BsDC8BH%2FMStZv7t2aMUMg3gWf2eqYmaahE6R1FmIWVUQsdGoUjHLBs58pcCt9kOMF%2B1Pig1PukMfXtVV8ks%2BUJCdTbJVh2mSqxxqJR5JEhYsbTJNVO5%2BgqbaU73IaG&X-Amz-Signature=fdc9f6cc7ef05b067eb2dab51cee0005f42decf3d1880fa70edb9a5f7a1bdc3f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6C5DBG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2RDDZDUAO3sFfxjjMzd5g3cqztwLwNxzO43cr3tK8AIhAMJftCtdOzaAMM2dQZzdXnWgMcjwvuWeGQSAVxxGAO9EKv8DCGAQABoMNjM3NDIzMTgzODA1Igwpl3U8zy1Iw4Jvb3cq3ANbREVy8jv%2BxqeLZkdn9EGymPDQFKLQ6NMA3wiEfvMIf1xb%2FFVmh4jmi15eWvfRwMCoIoDztpCZh%2BKSW0o6PFZBlfEMGXh%2FiNRWdQ9luNsNq9FPqCpSBw%2FydlXo96gY%2Bke6xtbZmY7pweUVgAtP8ut3w9HiNTYJ9Fvmhn7HL28oPxwO33nTjo9c1%2FvicBtdeqz01a14dkQoZz3%2Ft%2FIELuHtqe8%2BwNTBjNFlbQipICDhsv%2F9Gx6E8IcMPQ5C0DshGLac2zYcrcLcs%2FX4vS2MteCKamTv8Rvf2eahOncj%2BC2Bo3jwsB8ou3TaZqQSAQTe%2FKYlv8BgAO11CFR5jwvfyLwDAN7rbOe0au50MOj7Bfo5625QvtzSGHc7pWIzkJnXFQv6g668e5PzT6AewYkLK%2Bd%2BwNQIL4EjKbRXZXuxcFbNc8gf5Cz%2FzlZhVHAFeg10FOD7M2YuvAgQB%2BDz1l%2BHFs9mxeF%2BLOZHqJGKj8f6pd2vrYsZbDzGlBdBBiETpucVTQxdPTpHp7tvr14684RKjad5x2bBhTGP4KKrzVV%2FcT4Xqu50sa3%2BksRdsq8X4UAEdi4ALrtqjlefRpiiDigTPhIbjqRKQ0I0xVGpd0UyceV5ne%2FWmOH%2BaDAkECTwNjD20c%2B%2FBjqkAecZKxE4J4ZUIHzHQB43eGAxPMxVCRa0sYm7qW%2B8jG5mSuqusKrZ1u1ZkmC%2FPrGw1eTZ%2B60ekrysqVB5hgIIU6HYvyL%2FT1BsDC8BH%2FMStZv7t2aMUMg3gWf2eqYmaahE6R1FmIWVUQsdGoUjHLBs58pcCt9kOMF%2B1Pig1PukMfXtVV8ks%2BUJCdTbJVh2mSqxxqJR5JEhYsbTJNVO5%2BgqbaU73IaG&X-Amz-Signature=36ebf46feacd2ea41d49eee83ea2d7273429d4d95ba4af76f35f7ae2369a4685&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6C5DBG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2RDDZDUAO3sFfxjjMzd5g3cqztwLwNxzO43cr3tK8AIhAMJftCtdOzaAMM2dQZzdXnWgMcjwvuWeGQSAVxxGAO9EKv8DCGAQABoMNjM3NDIzMTgzODA1Igwpl3U8zy1Iw4Jvb3cq3ANbREVy8jv%2BxqeLZkdn9EGymPDQFKLQ6NMA3wiEfvMIf1xb%2FFVmh4jmi15eWvfRwMCoIoDztpCZh%2BKSW0o6PFZBlfEMGXh%2FiNRWdQ9luNsNq9FPqCpSBw%2FydlXo96gY%2Bke6xtbZmY7pweUVgAtP8ut3w9HiNTYJ9Fvmhn7HL28oPxwO33nTjo9c1%2FvicBtdeqz01a14dkQoZz3%2Ft%2FIELuHtqe8%2BwNTBjNFlbQipICDhsv%2F9Gx6E8IcMPQ5C0DshGLac2zYcrcLcs%2FX4vS2MteCKamTv8Rvf2eahOncj%2BC2Bo3jwsB8ou3TaZqQSAQTe%2FKYlv8BgAO11CFR5jwvfyLwDAN7rbOe0au50MOj7Bfo5625QvtzSGHc7pWIzkJnXFQv6g668e5PzT6AewYkLK%2Bd%2BwNQIL4EjKbRXZXuxcFbNc8gf5Cz%2FzlZhVHAFeg10FOD7M2YuvAgQB%2BDz1l%2BHFs9mxeF%2BLOZHqJGKj8f6pd2vrYsZbDzGlBdBBiETpucVTQxdPTpHp7tvr14684RKjad5x2bBhTGP4KKrzVV%2FcT4Xqu50sa3%2BksRdsq8X4UAEdi4ALrtqjlefRpiiDigTPhIbjqRKQ0I0xVGpd0UyceV5ne%2FWmOH%2BaDAkECTwNjD20c%2B%2FBjqkAecZKxE4J4ZUIHzHQB43eGAxPMxVCRa0sYm7qW%2B8jG5mSuqusKrZ1u1ZkmC%2FPrGw1eTZ%2B60ekrysqVB5hgIIU6HYvyL%2FT1BsDC8BH%2FMStZv7t2aMUMg3gWf2eqYmaahE6R1FmIWVUQsdGoUjHLBs58pcCt9kOMF%2B1Pig1PukMfXtVV8ks%2BUJCdTbJVh2mSqxxqJR5JEhYsbTJNVO5%2BgqbaU73IaG&X-Amz-Signature=dbd734b350514cdc546369983982d5ce81c25d00e7fec0efdf6b9be07fe9106e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6C5DBG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2RDDZDUAO3sFfxjjMzd5g3cqztwLwNxzO43cr3tK8AIhAMJftCtdOzaAMM2dQZzdXnWgMcjwvuWeGQSAVxxGAO9EKv8DCGAQABoMNjM3NDIzMTgzODA1Igwpl3U8zy1Iw4Jvb3cq3ANbREVy8jv%2BxqeLZkdn9EGymPDQFKLQ6NMA3wiEfvMIf1xb%2FFVmh4jmi15eWvfRwMCoIoDztpCZh%2BKSW0o6PFZBlfEMGXh%2FiNRWdQ9luNsNq9FPqCpSBw%2FydlXo96gY%2Bke6xtbZmY7pweUVgAtP8ut3w9HiNTYJ9Fvmhn7HL28oPxwO33nTjo9c1%2FvicBtdeqz01a14dkQoZz3%2Ft%2FIELuHtqe8%2BwNTBjNFlbQipICDhsv%2F9Gx6E8IcMPQ5C0DshGLac2zYcrcLcs%2FX4vS2MteCKamTv8Rvf2eahOncj%2BC2Bo3jwsB8ou3TaZqQSAQTe%2FKYlv8BgAO11CFR5jwvfyLwDAN7rbOe0au50MOj7Bfo5625QvtzSGHc7pWIzkJnXFQv6g668e5PzT6AewYkLK%2Bd%2BwNQIL4EjKbRXZXuxcFbNc8gf5Cz%2FzlZhVHAFeg10FOD7M2YuvAgQB%2BDz1l%2BHFs9mxeF%2BLOZHqJGKj8f6pd2vrYsZbDzGlBdBBiETpucVTQxdPTpHp7tvr14684RKjad5x2bBhTGP4KKrzVV%2FcT4Xqu50sa3%2BksRdsq8X4UAEdi4ALrtqjlefRpiiDigTPhIbjqRKQ0I0xVGpd0UyceV5ne%2FWmOH%2BaDAkECTwNjD20c%2B%2FBjqkAecZKxE4J4ZUIHzHQB43eGAxPMxVCRa0sYm7qW%2B8jG5mSuqusKrZ1u1ZkmC%2FPrGw1eTZ%2B60ekrysqVB5hgIIU6HYvyL%2FT1BsDC8BH%2FMStZv7t2aMUMg3gWf2eqYmaahE6R1FmIWVUQsdGoUjHLBs58pcCt9kOMF%2B1Pig1PukMfXtVV8ks%2BUJCdTbJVh2mSqxxqJR5JEhYsbTJNVO5%2BgqbaU73IaG&X-Amz-Signature=bad8571445f16a65cee7f100c7e492cdd450a35f04f926aae2eb98e213c3e0c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6C5DBG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2RDDZDUAO3sFfxjjMzd5g3cqztwLwNxzO43cr3tK8AIhAMJftCtdOzaAMM2dQZzdXnWgMcjwvuWeGQSAVxxGAO9EKv8DCGAQABoMNjM3NDIzMTgzODA1Igwpl3U8zy1Iw4Jvb3cq3ANbREVy8jv%2BxqeLZkdn9EGymPDQFKLQ6NMA3wiEfvMIf1xb%2FFVmh4jmi15eWvfRwMCoIoDztpCZh%2BKSW0o6PFZBlfEMGXh%2FiNRWdQ9luNsNq9FPqCpSBw%2FydlXo96gY%2Bke6xtbZmY7pweUVgAtP8ut3w9HiNTYJ9Fvmhn7HL28oPxwO33nTjo9c1%2FvicBtdeqz01a14dkQoZz3%2Ft%2FIELuHtqe8%2BwNTBjNFlbQipICDhsv%2F9Gx6E8IcMPQ5C0DshGLac2zYcrcLcs%2FX4vS2MteCKamTv8Rvf2eahOncj%2BC2Bo3jwsB8ou3TaZqQSAQTe%2FKYlv8BgAO11CFR5jwvfyLwDAN7rbOe0au50MOj7Bfo5625QvtzSGHc7pWIzkJnXFQv6g668e5PzT6AewYkLK%2Bd%2BwNQIL4EjKbRXZXuxcFbNc8gf5Cz%2FzlZhVHAFeg10FOD7M2YuvAgQB%2BDz1l%2BHFs9mxeF%2BLOZHqJGKj8f6pd2vrYsZbDzGlBdBBiETpucVTQxdPTpHp7tvr14684RKjad5x2bBhTGP4KKrzVV%2FcT4Xqu50sa3%2BksRdsq8X4UAEdi4ALrtqjlefRpiiDigTPhIbjqRKQ0I0xVGpd0UyceV5ne%2FWmOH%2BaDAkECTwNjD20c%2B%2FBjqkAecZKxE4J4ZUIHzHQB43eGAxPMxVCRa0sYm7qW%2B8jG5mSuqusKrZ1u1ZkmC%2FPrGw1eTZ%2B60ekrysqVB5hgIIU6HYvyL%2FT1BsDC8BH%2FMStZv7t2aMUMg3gWf2eqYmaahE6R1FmIWVUQsdGoUjHLBs58pcCt9kOMF%2B1Pig1PukMfXtVV8ks%2BUJCdTbJVh2mSqxxqJR5JEhYsbTJNVO5%2BgqbaU73IaG&X-Amz-Signature=40fe6ae5c49d0075cf31b71f63bdef78284f2b9d1b774179f57bf4309b36ad53&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6C5DBG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg2RDDZDUAO3sFfxjjMzd5g3cqztwLwNxzO43cr3tK8AIhAMJftCtdOzaAMM2dQZzdXnWgMcjwvuWeGQSAVxxGAO9EKv8DCGAQABoMNjM3NDIzMTgzODA1Igwpl3U8zy1Iw4Jvb3cq3ANbREVy8jv%2BxqeLZkdn9EGymPDQFKLQ6NMA3wiEfvMIf1xb%2FFVmh4jmi15eWvfRwMCoIoDztpCZh%2BKSW0o6PFZBlfEMGXh%2FiNRWdQ9luNsNq9FPqCpSBw%2FydlXo96gY%2Bke6xtbZmY7pweUVgAtP8ut3w9HiNTYJ9Fvmhn7HL28oPxwO33nTjo9c1%2FvicBtdeqz01a14dkQoZz3%2Ft%2FIELuHtqe8%2BwNTBjNFlbQipICDhsv%2F9Gx6E8IcMPQ5C0DshGLac2zYcrcLcs%2FX4vS2MteCKamTv8Rvf2eahOncj%2BC2Bo3jwsB8ou3TaZqQSAQTe%2FKYlv8BgAO11CFR5jwvfyLwDAN7rbOe0au50MOj7Bfo5625QvtzSGHc7pWIzkJnXFQv6g668e5PzT6AewYkLK%2Bd%2BwNQIL4EjKbRXZXuxcFbNc8gf5Cz%2FzlZhVHAFeg10FOD7M2YuvAgQB%2BDz1l%2BHFs9mxeF%2BLOZHqJGKj8f6pd2vrYsZbDzGlBdBBiETpucVTQxdPTpHp7tvr14684RKjad5x2bBhTGP4KKrzVV%2FcT4Xqu50sa3%2BksRdsq8X4UAEdi4ALrtqjlefRpiiDigTPhIbjqRKQ0I0xVGpd0UyceV5ne%2FWmOH%2BaDAkECTwNjD20c%2B%2FBjqkAecZKxE4J4ZUIHzHQB43eGAxPMxVCRa0sYm7qW%2B8jG5mSuqusKrZ1u1ZkmC%2FPrGw1eTZ%2B60ekrysqVB5hgIIU6HYvyL%2FT1BsDC8BH%2FMStZv7t2aMUMg3gWf2eqYmaahE6R1FmIWVUQsdGoUjHLBs58pcCt9kOMF%2B1Pig1PukMfXtVV8ks%2BUJCdTbJVh2mSqxxqJR5JEhYsbTJNVO5%2BgqbaU73IaG&X-Amz-Signature=8852939bc05ae2219e6c146782b744acafd884fb2c1c60b910dd8850488236b2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
