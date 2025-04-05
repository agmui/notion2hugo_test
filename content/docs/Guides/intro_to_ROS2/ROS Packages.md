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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL6APMI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqmyiLN2Z0nWxq7yKZO%2FY8wkfLhHTn%2BkpFvFn1bCFMAIhAL6t6HjvOlmyACsg1yuwRTblQ%2BaUfgiz3VgZEmyfsOkZKv8DCCoQABoMNjM3NDIzMTgzODA1IgxxanV1W2Pa%2B%2Bs6ITsq3AMt3bCljhs0GmaCY%2FKWxdfA4hSOOIyrTC5aSeDk4DRauzayzGOgOANqVokq8KtPKDCNclKiD2Q1%2BhyfZO%2B3wo9QZ6r%2BHtuMXKDmo4PG%2Bor%2B8ITghg4%2BZmuLE3KV%2FiQsxgyoSJqOH7qipp9rmMpsUpu3CrMOdiXTL5YOTYy5yveLuiptO3S65UH9O4NGTBHcBZDnGpossbaHZR66mBhpz5VMbXD2YYcAAn6soCdn0JSt0Q%2B1K7cBgBseKEh3eb0P%2FjXsAjNTJNFgmUdC%2FdRbEC2Zyhlo21KSL62rlK6wfpWUXkScbbqjuVjDmNFTuxdlJ6eViiF3YP59uoR68YzcQs4DaPhSxJ6flcGRVx4KdvKPYw%2Fav2%2Flkfh53YRjlaxUuZ7%2FCvtXPGFODrqEDI5kPL3Gi1fe97UdMvGCUbmh7F07ByuTWDWE2ZEhGFeshseAMzt2gwoQDVT2kF7YW6YX22aP5A%2BRqcvcPJ%2FnfMgRsCcS0IXA0iqsaz4EGj7LHXhZ7Azmjwxtne5%2BWqK6eRv50MS6okO9%2B4iWLRrzxLt9oShDivaAoA29IbrRKG%2FihZdWGg%2F9K7e%2FxCDp1a0Q129jJYEtKdzei1sZxxhsAJPjEGycuei5z9bCWzyAfPSk1TDU5MO%2FBjqkAV9PHxb80s5F57L96CjergP8zhiOu74IaPXoOTXN8vIhCiFWVrlYIIyYD8vfuITr75gGClas1ObzP77vFI%2FIkp9cgd8p4EnrNwl9KYYhm89yXYVqU1tirlHY4mMbxy9cFVjOV6CiiVVb%2BlLqZL9ZO3nqjHlWTavzevpAhLXZR5NqUyX3XYp8ZlHsGH3jJSe4u0VPtPVCp2zrZ75E8WD%2B9MEehLeR&X-Amz-Signature=36bae5137d36e87d75a54fa3dfbb8a4bbe3ebe3732c99d05868af61e58f2a2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL6APMI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqmyiLN2Z0nWxq7yKZO%2FY8wkfLhHTn%2BkpFvFn1bCFMAIhAL6t6HjvOlmyACsg1yuwRTblQ%2BaUfgiz3VgZEmyfsOkZKv8DCCoQABoMNjM3NDIzMTgzODA1IgxxanV1W2Pa%2B%2Bs6ITsq3AMt3bCljhs0GmaCY%2FKWxdfA4hSOOIyrTC5aSeDk4DRauzayzGOgOANqVokq8KtPKDCNclKiD2Q1%2BhyfZO%2B3wo9QZ6r%2BHtuMXKDmo4PG%2Bor%2B8ITghg4%2BZmuLE3KV%2FiQsxgyoSJqOH7qipp9rmMpsUpu3CrMOdiXTL5YOTYy5yveLuiptO3S65UH9O4NGTBHcBZDnGpossbaHZR66mBhpz5VMbXD2YYcAAn6soCdn0JSt0Q%2B1K7cBgBseKEh3eb0P%2FjXsAjNTJNFgmUdC%2FdRbEC2Zyhlo21KSL62rlK6wfpWUXkScbbqjuVjDmNFTuxdlJ6eViiF3YP59uoR68YzcQs4DaPhSxJ6flcGRVx4KdvKPYw%2Fav2%2Flkfh53YRjlaxUuZ7%2FCvtXPGFODrqEDI5kPL3Gi1fe97UdMvGCUbmh7F07ByuTWDWE2ZEhGFeshseAMzt2gwoQDVT2kF7YW6YX22aP5A%2BRqcvcPJ%2FnfMgRsCcS0IXA0iqsaz4EGj7LHXhZ7Azmjwxtne5%2BWqK6eRv50MS6okO9%2B4iWLRrzxLt9oShDivaAoA29IbrRKG%2FihZdWGg%2F9K7e%2FxCDp1a0Q129jJYEtKdzei1sZxxhsAJPjEGycuei5z9bCWzyAfPSk1TDU5MO%2FBjqkAV9PHxb80s5F57L96CjergP8zhiOu74IaPXoOTXN8vIhCiFWVrlYIIyYD8vfuITr75gGClas1ObzP77vFI%2FIkp9cgd8p4EnrNwl9KYYhm89yXYVqU1tirlHY4mMbxy9cFVjOV6CiiVVb%2BlLqZL9ZO3nqjHlWTavzevpAhLXZR5NqUyX3XYp8ZlHsGH3jJSe4u0VPtPVCp2zrZ75E8WD%2B9MEehLeR&X-Amz-Signature=b8f284ea01f9918eb0cdfd938a93f000541227b4f94e76aba0df38c9f07e0587&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL6APMI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqmyiLN2Z0nWxq7yKZO%2FY8wkfLhHTn%2BkpFvFn1bCFMAIhAL6t6HjvOlmyACsg1yuwRTblQ%2BaUfgiz3VgZEmyfsOkZKv8DCCoQABoMNjM3NDIzMTgzODA1IgxxanV1W2Pa%2B%2Bs6ITsq3AMt3bCljhs0GmaCY%2FKWxdfA4hSOOIyrTC5aSeDk4DRauzayzGOgOANqVokq8KtPKDCNclKiD2Q1%2BhyfZO%2B3wo9QZ6r%2BHtuMXKDmo4PG%2Bor%2B8ITghg4%2BZmuLE3KV%2FiQsxgyoSJqOH7qipp9rmMpsUpu3CrMOdiXTL5YOTYy5yveLuiptO3S65UH9O4NGTBHcBZDnGpossbaHZR66mBhpz5VMbXD2YYcAAn6soCdn0JSt0Q%2B1K7cBgBseKEh3eb0P%2FjXsAjNTJNFgmUdC%2FdRbEC2Zyhlo21KSL62rlK6wfpWUXkScbbqjuVjDmNFTuxdlJ6eViiF3YP59uoR68YzcQs4DaPhSxJ6flcGRVx4KdvKPYw%2Fav2%2Flkfh53YRjlaxUuZ7%2FCvtXPGFODrqEDI5kPL3Gi1fe97UdMvGCUbmh7F07ByuTWDWE2ZEhGFeshseAMzt2gwoQDVT2kF7YW6YX22aP5A%2BRqcvcPJ%2FnfMgRsCcS0IXA0iqsaz4EGj7LHXhZ7Azmjwxtne5%2BWqK6eRv50MS6okO9%2B4iWLRrzxLt9oShDivaAoA29IbrRKG%2FihZdWGg%2F9K7e%2FxCDp1a0Q129jJYEtKdzei1sZxxhsAJPjEGycuei5z9bCWzyAfPSk1TDU5MO%2FBjqkAV9PHxb80s5F57L96CjergP8zhiOu74IaPXoOTXN8vIhCiFWVrlYIIyYD8vfuITr75gGClas1ObzP77vFI%2FIkp9cgd8p4EnrNwl9KYYhm89yXYVqU1tirlHY4mMbxy9cFVjOV6CiiVVb%2BlLqZL9ZO3nqjHlWTavzevpAhLXZR5NqUyX3XYp8ZlHsGH3jJSe4u0VPtPVCp2zrZ75E8WD%2B9MEehLeR&X-Amz-Signature=0fecea54a7c1a31c0970b28540e3e6ca8750994dad2d92708224a9479e8e1a50&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL6APMI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqmyiLN2Z0nWxq7yKZO%2FY8wkfLhHTn%2BkpFvFn1bCFMAIhAL6t6HjvOlmyACsg1yuwRTblQ%2BaUfgiz3VgZEmyfsOkZKv8DCCoQABoMNjM3NDIzMTgzODA1IgxxanV1W2Pa%2B%2Bs6ITsq3AMt3bCljhs0GmaCY%2FKWxdfA4hSOOIyrTC5aSeDk4DRauzayzGOgOANqVokq8KtPKDCNclKiD2Q1%2BhyfZO%2B3wo9QZ6r%2BHtuMXKDmo4PG%2Bor%2B8ITghg4%2BZmuLE3KV%2FiQsxgyoSJqOH7qipp9rmMpsUpu3CrMOdiXTL5YOTYy5yveLuiptO3S65UH9O4NGTBHcBZDnGpossbaHZR66mBhpz5VMbXD2YYcAAn6soCdn0JSt0Q%2B1K7cBgBseKEh3eb0P%2FjXsAjNTJNFgmUdC%2FdRbEC2Zyhlo21KSL62rlK6wfpWUXkScbbqjuVjDmNFTuxdlJ6eViiF3YP59uoR68YzcQs4DaPhSxJ6flcGRVx4KdvKPYw%2Fav2%2Flkfh53YRjlaxUuZ7%2FCvtXPGFODrqEDI5kPL3Gi1fe97UdMvGCUbmh7F07ByuTWDWE2ZEhGFeshseAMzt2gwoQDVT2kF7YW6YX22aP5A%2BRqcvcPJ%2FnfMgRsCcS0IXA0iqsaz4EGj7LHXhZ7Azmjwxtne5%2BWqK6eRv50MS6okO9%2B4iWLRrzxLt9oShDivaAoA29IbrRKG%2FihZdWGg%2F9K7e%2FxCDp1a0Q129jJYEtKdzei1sZxxhsAJPjEGycuei5z9bCWzyAfPSk1TDU5MO%2FBjqkAV9PHxb80s5F57L96CjergP8zhiOu74IaPXoOTXN8vIhCiFWVrlYIIyYD8vfuITr75gGClas1ObzP77vFI%2FIkp9cgd8p4EnrNwl9KYYhm89yXYVqU1tirlHY4mMbxy9cFVjOV6CiiVVb%2BlLqZL9ZO3nqjHlWTavzevpAhLXZR5NqUyX3XYp8ZlHsGH3jJSe4u0VPtPVCp2zrZ75E8WD%2B9MEehLeR&X-Amz-Signature=967201b9b7e5a60f9d86dfac75e07d019ba5587e12ce5cb6510801d2eccb857e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL6APMI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqmyiLN2Z0nWxq7yKZO%2FY8wkfLhHTn%2BkpFvFn1bCFMAIhAL6t6HjvOlmyACsg1yuwRTblQ%2BaUfgiz3VgZEmyfsOkZKv8DCCoQABoMNjM3NDIzMTgzODA1IgxxanV1W2Pa%2B%2Bs6ITsq3AMt3bCljhs0GmaCY%2FKWxdfA4hSOOIyrTC5aSeDk4DRauzayzGOgOANqVokq8KtPKDCNclKiD2Q1%2BhyfZO%2B3wo9QZ6r%2BHtuMXKDmo4PG%2Bor%2B8ITghg4%2BZmuLE3KV%2FiQsxgyoSJqOH7qipp9rmMpsUpu3CrMOdiXTL5YOTYy5yveLuiptO3S65UH9O4NGTBHcBZDnGpossbaHZR66mBhpz5VMbXD2YYcAAn6soCdn0JSt0Q%2B1K7cBgBseKEh3eb0P%2FjXsAjNTJNFgmUdC%2FdRbEC2Zyhlo21KSL62rlK6wfpWUXkScbbqjuVjDmNFTuxdlJ6eViiF3YP59uoR68YzcQs4DaPhSxJ6flcGRVx4KdvKPYw%2Fav2%2Flkfh53YRjlaxUuZ7%2FCvtXPGFODrqEDI5kPL3Gi1fe97UdMvGCUbmh7F07ByuTWDWE2ZEhGFeshseAMzt2gwoQDVT2kF7YW6YX22aP5A%2BRqcvcPJ%2FnfMgRsCcS0IXA0iqsaz4EGj7LHXhZ7Azmjwxtne5%2BWqK6eRv50MS6okO9%2B4iWLRrzxLt9oShDivaAoA29IbrRKG%2FihZdWGg%2F9K7e%2FxCDp1a0Q129jJYEtKdzei1sZxxhsAJPjEGycuei5z9bCWzyAfPSk1TDU5MO%2FBjqkAV9PHxb80s5F57L96CjergP8zhiOu74IaPXoOTXN8vIhCiFWVrlYIIyYD8vfuITr75gGClas1ObzP77vFI%2FIkp9cgd8p4EnrNwl9KYYhm89yXYVqU1tirlHY4mMbxy9cFVjOV6CiiVVb%2BlLqZL9ZO3nqjHlWTavzevpAhLXZR5NqUyX3XYp8ZlHsGH3jJSe4u0VPtPVCp2zrZ75E8WD%2B9MEehLeR&X-Amz-Signature=fee2a379b489b3f37c9fdf1d7586144efba30bd9daeeff23921469136a54ad43&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL6APMI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqmyiLN2Z0nWxq7yKZO%2FY8wkfLhHTn%2BkpFvFn1bCFMAIhAL6t6HjvOlmyACsg1yuwRTblQ%2BaUfgiz3VgZEmyfsOkZKv8DCCoQABoMNjM3NDIzMTgzODA1IgxxanV1W2Pa%2B%2Bs6ITsq3AMt3bCljhs0GmaCY%2FKWxdfA4hSOOIyrTC5aSeDk4DRauzayzGOgOANqVokq8KtPKDCNclKiD2Q1%2BhyfZO%2B3wo9QZ6r%2BHtuMXKDmo4PG%2Bor%2B8ITghg4%2BZmuLE3KV%2FiQsxgyoSJqOH7qipp9rmMpsUpu3CrMOdiXTL5YOTYy5yveLuiptO3S65UH9O4NGTBHcBZDnGpossbaHZR66mBhpz5VMbXD2YYcAAn6soCdn0JSt0Q%2B1K7cBgBseKEh3eb0P%2FjXsAjNTJNFgmUdC%2FdRbEC2Zyhlo21KSL62rlK6wfpWUXkScbbqjuVjDmNFTuxdlJ6eViiF3YP59uoR68YzcQs4DaPhSxJ6flcGRVx4KdvKPYw%2Fav2%2Flkfh53YRjlaxUuZ7%2FCvtXPGFODrqEDI5kPL3Gi1fe97UdMvGCUbmh7F07ByuTWDWE2ZEhGFeshseAMzt2gwoQDVT2kF7YW6YX22aP5A%2BRqcvcPJ%2FnfMgRsCcS0IXA0iqsaz4EGj7LHXhZ7Azmjwxtne5%2BWqK6eRv50MS6okO9%2B4iWLRrzxLt9oShDivaAoA29IbrRKG%2FihZdWGg%2F9K7e%2FxCDp1a0Q129jJYEtKdzei1sZxxhsAJPjEGycuei5z9bCWzyAfPSk1TDU5MO%2FBjqkAV9PHxb80s5F57L96CjergP8zhiOu74IaPXoOTXN8vIhCiFWVrlYIIyYD8vfuITr75gGClas1ObzP77vFI%2FIkp9cgd8p4EnrNwl9KYYhm89yXYVqU1tirlHY4mMbxy9cFVjOV6CiiVVb%2BlLqZL9ZO3nqjHlWTavzevpAhLXZR5NqUyX3XYp8ZlHsGH3jJSe4u0VPtPVCp2zrZ75E8WD%2B9MEehLeR&X-Amz-Signature=d96a22e9776d041d0cd038c135fa2092843d86070827f23f11f1870a5e5a5835&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL6APMI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqmyiLN2Z0nWxq7yKZO%2FY8wkfLhHTn%2BkpFvFn1bCFMAIhAL6t6HjvOlmyACsg1yuwRTblQ%2BaUfgiz3VgZEmyfsOkZKv8DCCoQABoMNjM3NDIzMTgzODA1IgxxanV1W2Pa%2B%2Bs6ITsq3AMt3bCljhs0GmaCY%2FKWxdfA4hSOOIyrTC5aSeDk4DRauzayzGOgOANqVokq8KtPKDCNclKiD2Q1%2BhyfZO%2B3wo9QZ6r%2BHtuMXKDmo4PG%2Bor%2B8ITghg4%2BZmuLE3KV%2FiQsxgyoSJqOH7qipp9rmMpsUpu3CrMOdiXTL5YOTYy5yveLuiptO3S65UH9O4NGTBHcBZDnGpossbaHZR66mBhpz5VMbXD2YYcAAn6soCdn0JSt0Q%2B1K7cBgBseKEh3eb0P%2FjXsAjNTJNFgmUdC%2FdRbEC2Zyhlo21KSL62rlK6wfpWUXkScbbqjuVjDmNFTuxdlJ6eViiF3YP59uoR68YzcQs4DaPhSxJ6flcGRVx4KdvKPYw%2Fav2%2Flkfh53YRjlaxUuZ7%2FCvtXPGFODrqEDI5kPL3Gi1fe97UdMvGCUbmh7F07ByuTWDWE2ZEhGFeshseAMzt2gwoQDVT2kF7YW6YX22aP5A%2BRqcvcPJ%2FnfMgRsCcS0IXA0iqsaz4EGj7LHXhZ7Azmjwxtne5%2BWqK6eRv50MS6okO9%2B4iWLRrzxLt9oShDivaAoA29IbrRKG%2FihZdWGg%2F9K7e%2FxCDp1a0Q129jJYEtKdzei1sZxxhsAJPjEGycuei5z9bCWzyAfPSk1TDU5MO%2FBjqkAV9PHxb80s5F57L96CjergP8zhiOu74IaPXoOTXN8vIhCiFWVrlYIIyYD8vfuITr75gGClas1ObzP77vFI%2FIkp9cgd8p4EnrNwl9KYYhm89yXYVqU1tirlHY4mMbxy9cFVjOV6CiiVVb%2BlLqZL9ZO3nqjHlWTavzevpAhLXZR5NqUyX3XYp8ZlHsGH3jJSe4u0VPtPVCp2zrZ75E8WD%2B9MEehLeR&X-Amz-Signature=e872525efd47d12e0ffe39695ff0ab39eaa9d5bf2c2c74ddd3d58d6aebbcf48c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
