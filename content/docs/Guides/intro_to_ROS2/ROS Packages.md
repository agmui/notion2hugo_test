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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GOFI2XL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBfJVPKlAk%2B9R3za%2BvASWUDRD7IuiaDnr8X7zmBaKefQIhAL0DfCh7Cc4rhQQJNLpMH1pmS4hETrdKQSYCuzGAXZLqKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcADhVqWO2etk4o6wq3ANu6h%2BEjSKF93B2gYpTbWOY7xmuo8BTGXLdpSRgJ0bxNfokl7UF1JkiLb05UxHqsTyL8SWzfSDy0CMxUAKuqtSRwsBMm%2Fe6AbY5xqRDYhi310pnskPQlAFe4RlRE7qL09RIT%2FupyhuPksVSr8IQvmLLxazCfmf7kgA5DcZxtGPaptDgmnk3XYDKqajNZX7t5AlfiyAqLljMv4CBplR%2BQbRR2P6zsDkx%2BHtY%2FhI1ovJvqv693OQGyFGBZw54EnvmSUpUejBwR5nXByFF2%2BdAXuHTMpwoUaw5aODmwo4kgVe6sGufQDDrB5ZmMOm5LHefC4ecDJUwEd2sUj3nPv743kqQEbjDSWIeWgTe0gPzaIuXUQPdasSMmP005GArK9GoyqI%2BozM325pyMTAgJhzhJe7uRZ3iBjsEynN3TmsBo5tlBa6eclDJ52M4P6w%2BTnQdHBAmeKYAE0MK78BavJN%2FjxdANhSIQ5jSC%2B19cXu24Bws71OMcmPzLzrn4zMHhL6jVKSdQJXmrQlNvikyyTuIB8zHlsVYjfoQBXlTEYExfOsCyB0XlTKyEhpiVZ%2BFSvcVA0iKJYm8tAFs%2BeGhFO7JSHffJ4b76ToYMlOhAGcfr6RH2AVeftlicVbsSs28qDDijd69BjqkAbduR41TOSbjmSWhTGMdYi4gVkMY%2BzXcbZmrVkEv7qLXxEtUlfBJRw%2BjUNpInN6TnTi49%2BBXzkh4KRK%2BvjSXJGVwZAob5EmnHAXFDmCgJH0n23V8nTaurOSffBG7Zbhesp85H0%2B87%2B3cAcsYzaVUhnX2mJBMHu8tJEKQ8PbkiCK7jcA0nHsOTkR8XjTGeTB0PbpVL5MBi3Zgj0f8n0%2BqvRjfeiya&X-Amz-Signature=9a03c0f45694e7e2074625590975cf870792713c1403bbbf1d5ce70e4b864742&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GOFI2XL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBfJVPKlAk%2B9R3za%2BvASWUDRD7IuiaDnr8X7zmBaKefQIhAL0DfCh7Cc4rhQQJNLpMH1pmS4hETrdKQSYCuzGAXZLqKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcADhVqWO2etk4o6wq3ANu6h%2BEjSKF93B2gYpTbWOY7xmuo8BTGXLdpSRgJ0bxNfokl7UF1JkiLb05UxHqsTyL8SWzfSDy0CMxUAKuqtSRwsBMm%2Fe6AbY5xqRDYhi310pnskPQlAFe4RlRE7qL09RIT%2FupyhuPksVSr8IQvmLLxazCfmf7kgA5DcZxtGPaptDgmnk3XYDKqajNZX7t5AlfiyAqLljMv4CBplR%2BQbRR2P6zsDkx%2BHtY%2FhI1ovJvqv693OQGyFGBZw54EnvmSUpUejBwR5nXByFF2%2BdAXuHTMpwoUaw5aODmwo4kgVe6sGufQDDrB5ZmMOm5LHefC4ecDJUwEd2sUj3nPv743kqQEbjDSWIeWgTe0gPzaIuXUQPdasSMmP005GArK9GoyqI%2BozM325pyMTAgJhzhJe7uRZ3iBjsEynN3TmsBo5tlBa6eclDJ52M4P6w%2BTnQdHBAmeKYAE0MK78BavJN%2FjxdANhSIQ5jSC%2B19cXu24Bws71OMcmPzLzrn4zMHhL6jVKSdQJXmrQlNvikyyTuIB8zHlsVYjfoQBXlTEYExfOsCyB0XlTKyEhpiVZ%2BFSvcVA0iKJYm8tAFs%2BeGhFO7JSHffJ4b76ToYMlOhAGcfr6RH2AVeftlicVbsSs28qDDijd69BjqkAbduR41TOSbjmSWhTGMdYi4gVkMY%2BzXcbZmrVkEv7qLXxEtUlfBJRw%2BjUNpInN6TnTi49%2BBXzkh4KRK%2BvjSXJGVwZAob5EmnHAXFDmCgJH0n23V8nTaurOSffBG7Zbhesp85H0%2B87%2B3cAcsYzaVUhnX2mJBMHu8tJEKQ8PbkiCK7jcA0nHsOTkR8XjTGeTB0PbpVL5MBi3Zgj0f8n0%2BqvRjfeiya&X-Amz-Signature=c8bcadea936b5718deb66f4a5f5cb56206978f65eb179501d6bf8907220c8df6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GOFI2XL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBfJVPKlAk%2B9R3za%2BvASWUDRD7IuiaDnr8X7zmBaKefQIhAL0DfCh7Cc4rhQQJNLpMH1pmS4hETrdKQSYCuzGAXZLqKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcADhVqWO2etk4o6wq3ANu6h%2BEjSKF93B2gYpTbWOY7xmuo8BTGXLdpSRgJ0bxNfokl7UF1JkiLb05UxHqsTyL8SWzfSDy0CMxUAKuqtSRwsBMm%2Fe6AbY5xqRDYhi310pnskPQlAFe4RlRE7qL09RIT%2FupyhuPksVSr8IQvmLLxazCfmf7kgA5DcZxtGPaptDgmnk3XYDKqajNZX7t5AlfiyAqLljMv4CBplR%2BQbRR2P6zsDkx%2BHtY%2FhI1ovJvqv693OQGyFGBZw54EnvmSUpUejBwR5nXByFF2%2BdAXuHTMpwoUaw5aODmwo4kgVe6sGufQDDrB5ZmMOm5LHefC4ecDJUwEd2sUj3nPv743kqQEbjDSWIeWgTe0gPzaIuXUQPdasSMmP005GArK9GoyqI%2BozM325pyMTAgJhzhJe7uRZ3iBjsEynN3TmsBo5tlBa6eclDJ52M4P6w%2BTnQdHBAmeKYAE0MK78BavJN%2FjxdANhSIQ5jSC%2B19cXu24Bws71OMcmPzLzrn4zMHhL6jVKSdQJXmrQlNvikyyTuIB8zHlsVYjfoQBXlTEYExfOsCyB0XlTKyEhpiVZ%2BFSvcVA0iKJYm8tAFs%2BeGhFO7JSHffJ4b76ToYMlOhAGcfr6RH2AVeftlicVbsSs28qDDijd69BjqkAbduR41TOSbjmSWhTGMdYi4gVkMY%2BzXcbZmrVkEv7qLXxEtUlfBJRw%2BjUNpInN6TnTi49%2BBXzkh4KRK%2BvjSXJGVwZAob5EmnHAXFDmCgJH0n23V8nTaurOSffBG7Zbhesp85H0%2B87%2B3cAcsYzaVUhnX2mJBMHu8tJEKQ8PbkiCK7jcA0nHsOTkR8XjTGeTB0PbpVL5MBi3Zgj0f8n0%2BqvRjfeiya&X-Amz-Signature=4a3effadbbba98df5a7204dd00656c37a34343b2931c1574b903a2cb6d95c96a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GOFI2XL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBfJVPKlAk%2B9R3za%2BvASWUDRD7IuiaDnr8X7zmBaKefQIhAL0DfCh7Cc4rhQQJNLpMH1pmS4hETrdKQSYCuzGAXZLqKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcADhVqWO2etk4o6wq3ANu6h%2BEjSKF93B2gYpTbWOY7xmuo8BTGXLdpSRgJ0bxNfokl7UF1JkiLb05UxHqsTyL8SWzfSDy0CMxUAKuqtSRwsBMm%2Fe6AbY5xqRDYhi310pnskPQlAFe4RlRE7qL09RIT%2FupyhuPksVSr8IQvmLLxazCfmf7kgA5DcZxtGPaptDgmnk3XYDKqajNZX7t5AlfiyAqLljMv4CBplR%2BQbRR2P6zsDkx%2BHtY%2FhI1ovJvqv693OQGyFGBZw54EnvmSUpUejBwR5nXByFF2%2BdAXuHTMpwoUaw5aODmwo4kgVe6sGufQDDrB5ZmMOm5LHefC4ecDJUwEd2sUj3nPv743kqQEbjDSWIeWgTe0gPzaIuXUQPdasSMmP005GArK9GoyqI%2BozM325pyMTAgJhzhJe7uRZ3iBjsEynN3TmsBo5tlBa6eclDJ52M4P6w%2BTnQdHBAmeKYAE0MK78BavJN%2FjxdANhSIQ5jSC%2B19cXu24Bws71OMcmPzLzrn4zMHhL6jVKSdQJXmrQlNvikyyTuIB8zHlsVYjfoQBXlTEYExfOsCyB0XlTKyEhpiVZ%2BFSvcVA0iKJYm8tAFs%2BeGhFO7JSHffJ4b76ToYMlOhAGcfr6RH2AVeftlicVbsSs28qDDijd69BjqkAbduR41TOSbjmSWhTGMdYi4gVkMY%2BzXcbZmrVkEv7qLXxEtUlfBJRw%2BjUNpInN6TnTi49%2BBXzkh4KRK%2BvjSXJGVwZAob5EmnHAXFDmCgJH0n23V8nTaurOSffBG7Zbhesp85H0%2B87%2B3cAcsYzaVUhnX2mJBMHu8tJEKQ8PbkiCK7jcA0nHsOTkR8XjTGeTB0PbpVL5MBi3Zgj0f8n0%2BqvRjfeiya&X-Amz-Signature=2236d4f6d84763b7503c32090e3167f148b9b4cec2d265635cebf7f22417b3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GOFI2XL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBfJVPKlAk%2B9R3za%2BvASWUDRD7IuiaDnr8X7zmBaKefQIhAL0DfCh7Cc4rhQQJNLpMH1pmS4hETrdKQSYCuzGAXZLqKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcADhVqWO2etk4o6wq3ANu6h%2BEjSKF93B2gYpTbWOY7xmuo8BTGXLdpSRgJ0bxNfokl7UF1JkiLb05UxHqsTyL8SWzfSDy0CMxUAKuqtSRwsBMm%2Fe6AbY5xqRDYhi310pnskPQlAFe4RlRE7qL09RIT%2FupyhuPksVSr8IQvmLLxazCfmf7kgA5DcZxtGPaptDgmnk3XYDKqajNZX7t5AlfiyAqLljMv4CBplR%2BQbRR2P6zsDkx%2BHtY%2FhI1ovJvqv693OQGyFGBZw54EnvmSUpUejBwR5nXByFF2%2BdAXuHTMpwoUaw5aODmwo4kgVe6sGufQDDrB5ZmMOm5LHefC4ecDJUwEd2sUj3nPv743kqQEbjDSWIeWgTe0gPzaIuXUQPdasSMmP005GArK9GoyqI%2BozM325pyMTAgJhzhJe7uRZ3iBjsEynN3TmsBo5tlBa6eclDJ52M4P6w%2BTnQdHBAmeKYAE0MK78BavJN%2FjxdANhSIQ5jSC%2B19cXu24Bws71OMcmPzLzrn4zMHhL6jVKSdQJXmrQlNvikyyTuIB8zHlsVYjfoQBXlTEYExfOsCyB0XlTKyEhpiVZ%2BFSvcVA0iKJYm8tAFs%2BeGhFO7JSHffJ4b76ToYMlOhAGcfr6RH2AVeftlicVbsSs28qDDijd69BjqkAbduR41TOSbjmSWhTGMdYi4gVkMY%2BzXcbZmrVkEv7qLXxEtUlfBJRw%2BjUNpInN6TnTi49%2BBXzkh4KRK%2BvjSXJGVwZAob5EmnHAXFDmCgJH0n23V8nTaurOSffBG7Zbhesp85H0%2B87%2B3cAcsYzaVUhnX2mJBMHu8tJEKQ8PbkiCK7jcA0nHsOTkR8XjTGeTB0PbpVL5MBi3Zgj0f8n0%2BqvRjfeiya&X-Amz-Signature=abac291ef13ce158064016ba0bc0c53d907d14c3c403deb4d3557d1bd50670fd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GOFI2XL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBfJVPKlAk%2B9R3za%2BvASWUDRD7IuiaDnr8X7zmBaKefQIhAL0DfCh7Cc4rhQQJNLpMH1pmS4hETrdKQSYCuzGAXZLqKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcADhVqWO2etk4o6wq3ANu6h%2BEjSKF93B2gYpTbWOY7xmuo8BTGXLdpSRgJ0bxNfokl7UF1JkiLb05UxHqsTyL8SWzfSDy0CMxUAKuqtSRwsBMm%2Fe6AbY5xqRDYhi310pnskPQlAFe4RlRE7qL09RIT%2FupyhuPksVSr8IQvmLLxazCfmf7kgA5DcZxtGPaptDgmnk3XYDKqajNZX7t5AlfiyAqLljMv4CBplR%2BQbRR2P6zsDkx%2BHtY%2FhI1ovJvqv693OQGyFGBZw54EnvmSUpUejBwR5nXByFF2%2BdAXuHTMpwoUaw5aODmwo4kgVe6sGufQDDrB5ZmMOm5LHefC4ecDJUwEd2sUj3nPv743kqQEbjDSWIeWgTe0gPzaIuXUQPdasSMmP005GArK9GoyqI%2BozM325pyMTAgJhzhJe7uRZ3iBjsEynN3TmsBo5tlBa6eclDJ52M4P6w%2BTnQdHBAmeKYAE0MK78BavJN%2FjxdANhSIQ5jSC%2B19cXu24Bws71OMcmPzLzrn4zMHhL6jVKSdQJXmrQlNvikyyTuIB8zHlsVYjfoQBXlTEYExfOsCyB0XlTKyEhpiVZ%2BFSvcVA0iKJYm8tAFs%2BeGhFO7JSHffJ4b76ToYMlOhAGcfr6RH2AVeftlicVbsSs28qDDijd69BjqkAbduR41TOSbjmSWhTGMdYi4gVkMY%2BzXcbZmrVkEv7qLXxEtUlfBJRw%2BjUNpInN6TnTi49%2BBXzkh4KRK%2BvjSXJGVwZAob5EmnHAXFDmCgJH0n23V8nTaurOSffBG7Zbhesp85H0%2B87%2B3cAcsYzaVUhnX2mJBMHu8tJEKQ8PbkiCK7jcA0nHsOTkR8XjTGeTB0PbpVL5MBi3Zgj0f8n0%2BqvRjfeiya&X-Amz-Signature=07ce29e6dadf79839e0ab205b141807d986c93cdfb058e5b9c9d87f5fdcb7c08&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GOFI2XL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBfJVPKlAk%2B9R3za%2BvASWUDRD7IuiaDnr8X7zmBaKefQIhAL0DfCh7Cc4rhQQJNLpMH1pmS4hETrdKQSYCuzGAXZLqKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcADhVqWO2etk4o6wq3ANu6h%2BEjSKF93B2gYpTbWOY7xmuo8BTGXLdpSRgJ0bxNfokl7UF1JkiLb05UxHqsTyL8SWzfSDy0CMxUAKuqtSRwsBMm%2Fe6AbY5xqRDYhi310pnskPQlAFe4RlRE7qL09RIT%2FupyhuPksVSr8IQvmLLxazCfmf7kgA5DcZxtGPaptDgmnk3XYDKqajNZX7t5AlfiyAqLljMv4CBplR%2BQbRR2P6zsDkx%2BHtY%2FhI1ovJvqv693OQGyFGBZw54EnvmSUpUejBwR5nXByFF2%2BdAXuHTMpwoUaw5aODmwo4kgVe6sGufQDDrB5ZmMOm5LHefC4ecDJUwEd2sUj3nPv743kqQEbjDSWIeWgTe0gPzaIuXUQPdasSMmP005GArK9GoyqI%2BozM325pyMTAgJhzhJe7uRZ3iBjsEynN3TmsBo5tlBa6eclDJ52M4P6w%2BTnQdHBAmeKYAE0MK78BavJN%2FjxdANhSIQ5jSC%2B19cXu24Bws71OMcmPzLzrn4zMHhL6jVKSdQJXmrQlNvikyyTuIB8zHlsVYjfoQBXlTEYExfOsCyB0XlTKyEhpiVZ%2BFSvcVA0iKJYm8tAFs%2BeGhFO7JSHffJ4b76ToYMlOhAGcfr6RH2AVeftlicVbsSs28qDDijd69BjqkAbduR41TOSbjmSWhTGMdYi4gVkMY%2BzXcbZmrVkEv7qLXxEtUlfBJRw%2BjUNpInN6TnTi49%2BBXzkh4KRK%2BvjSXJGVwZAob5EmnHAXFDmCgJH0n23V8nTaurOSffBG7Zbhesp85H0%2B87%2B3cAcsYzaVUhnX2mJBMHu8tJEKQ8PbkiCK7jcA0nHsOTkR8XjTGeTB0PbpVL5MBi3Zgj0f8n0%2BqvRjfeiya&X-Amz-Signature=84443a6f1eeb489417d650c3b6e1575a9f6f105027e530ca3d89287b1cc76aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
