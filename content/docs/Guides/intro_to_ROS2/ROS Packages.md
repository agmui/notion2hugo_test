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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C47E7C5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD37%2F2zQFnbSR5glXO%2BHaMV%2Fvbg4FjsBevjNGTQJqV%2FaAIgbqbJtzzlsxruso%2B8jSOi5ESLnYvL7ibQnl278WqeEf8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN9NYTl6Gx7%2FhxXlyrcAxrjaHD99csMJCRMo%2FYbZVvKn3aRHPE34g9rZYL4Upka3jNJjrFjF0emY9c%2FbrDUbVp65pYceVPvzoiUIoL2n%2FTAdf5FEnHP%2FbwamTUX6FvdAqOsnvbcIJffRl7EUv%2BTudlnJD33gS42kE6i6xtjuxLxbkcXAGp8VI3f5JsOJhxawSK5SyAbavhhWIVIXGuDCccSJYUGsUDC7PKjtwX2BnvP0%2FrU6ObyUYmsJeyCWg0Uu8TWdStNBu4P%2FPuQeujpXsCShVUVeXS9yScuJBji77EWlu1FfhAPPSKD5QnBPu0iRXeaAGHRrrXlPdO36RDGq6B9zb8jVHdSL7R%2FrLKzGk%2B3r0mEDRQq3ewZ0tiMCpw2Pe5lVqg8M9GGsKIm2ZIFG5nZhczvgG3SkHf4L1WxsOHvDNPfa8oLM4P%2F2lMxM5EcO%2BDC2Ow8FQ8Ycd5WZgeUS%2FCG7RePo61HAvpgPd8oSEeqoJWUaf7hEOBCxeiISpGYtc97gDs7RWYxb4QJE%2F0jY4HxdLkeroqQ3OmN73J5w9WPPu5JQHaezr5Xko9Hk%2FyuHMYOqc%2B0ZVNJg65qTyMi%2Frs%2FdM9kxjhTkPAmFDhvDLPdvWb%2BQVoUHzgls4ZUv6SgQr87T4NkO0kjWEzfMOyWlb4GOqUBXZUKbrML%2BU6EPIcRCAzvqYC9X1%2FYTpqEoZHEBjiuxCkN8CqngnHh01uRHLWOrOWseuh6Ufc8TvBkRbcq3pcAGONpDQFY42yHsogE2chHhTCfQw5oxzDXRsYNhFqSnYg8%2BEtpkLzuBt9n6WJig90PwNzXXF4WHNFBstBR3e868K67mjnWmp%2FBPDHGdfdC0qax6D%2FbKX7436WdVwW9M10suTXtsD3i&X-Amz-Signature=532820cd35b1e055bd8ca56b5b0b5462a9b5dfbe49b6ce7b1c689820d71d6f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C47E7C5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD37%2F2zQFnbSR5glXO%2BHaMV%2Fvbg4FjsBevjNGTQJqV%2FaAIgbqbJtzzlsxruso%2B8jSOi5ESLnYvL7ibQnl278WqeEf8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN9NYTl6Gx7%2FhxXlyrcAxrjaHD99csMJCRMo%2FYbZVvKn3aRHPE34g9rZYL4Upka3jNJjrFjF0emY9c%2FbrDUbVp65pYceVPvzoiUIoL2n%2FTAdf5FEnHP%2FbwamTUX6FvdAqOsnvbcIJffRl7EUv%2BTudlnJD33gS42kE6i6xtjuxLxbkcXAGp8VI3f5JsOJhxawSK5SyAbavhhWIVIXGuDCccSJYUGsUDC7PKjtwX2BnvP0%2FrU6ObyUYmsJeyCWg0Uu8TWdStNBu4P%2FPuQeujpXsCShVUVeXS9yScuJBji77EWlu1FfhAPPSKD5QnBPu0iRXeaAGHRrrXlPdO36RDGq6B9zb8jVHdSL7R%2FrLKzGk%2B3r0mEDRQq3ewZ0tiMCpw2Pe5lVqg8M9GGsKIm2ZIFG5nZhczvgG3SkHf4L1WxsOHvDNPfa8oLM4P%2F2lMxM5EcO%2BDC2Ow8FQ8Ycd5WZgeUS%2FCG7RePo61HAvpgPd8oSEeqoJWUaf7hEOBCxeiISpGYtc97gDs7RWYxb4QJE%2F0jY4HxdLkeroqQ3OmN73J5w9WPPu5JQHaezr5Xko9Hk%2FyuHMYOqc%2B0ZVNJg65qTyMi%2Frs%2FdM9kxjhTkPAmFDhvDLPdvWb%2BQVoUHzgls4ZUv6SgQr87T4NkO0kjWEzfMOyWlb4GOqUBXZUKbrML%2BU6EPIcRCAzvqYC9X1%2FYTpqEoZHEBjiuxCkN8CqngnHh01uRHLWOrOWseuh6Ufc8TvBkRbcq3pcAGONpDQFY42yHsogE2chHhTCfQw5oxzDXRsYNhFqSnYg8%2BEtpkLzuBt9n6WJig90PwNzXXF4WHNFBstBR3e868K67mjnWmp%2FBPDHGdfdC0qax6D%2FbKX7436WdVwW9M10suTXtsD3i&X-Amz-Signature=fce666051105bf2cbc8e9cd2a167d4e1343018443b47c2972a001cbca7cc983b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C47E7C5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD37%2F2zQFnbSR5glXO%2BHaMV%2Fvbg4FjsBevjNGTQJqV%2FaAIgbqbJtzzlsxruso%2B8jSOi5ESLnYvL7ibQnl278WqeEf8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN9NYTl6Gx7%2FhxXlyrcAxrjaHD99csMJCRMo%2FYbZVvKn3aRHPE34g9rZYL4Upka3jNJjrFjF0emY9c%2FbrDUbVp65pYceVPvzoiUIoL2n%2FTAdf5FEnHP%2FbwamTUX6FvdAqOsnvbcIJffRl7EUv%2BTudlnJD33gS42kE6i6xtjuxLxbkcXAGp8VI3f5JsOJhxawSK5SyAbavhhWIVIXGuDCccSJYUGsUDC7PKjtwX2BnvP0%2FrU6ObyUYmsJeyCWg0Uu8TWdStNBu4P%2FPuQeujpXsCShVUVeXS9yScuJBji77EWlu1FfhAPPSKD5QnBPu0iRXeaAGHRrrXlPdO36RDGq6B9zb8jVHdSL7R%2FrLKzGk%2B3r0mEDRQq3ewZ0tiMCpw2Pe5lVqg8M9GGsKIm2ZIFG5nZhczvgG3SkHf4L1WxsOHvDNPfa8oLM4P%2F2lMxM5EcO%2BDC2Ow8FQ8Ycd5WZgeUS%2FCG7RePo61HAvpgPd8oSEeqoJWUaf7hEOBCxeiISpGYtc97gDs7RWYxb4QJE%2F0jY4HxdLkeroqQ3OmN73J5w9WPPu5JQHaezr5Xko9Hk%2FyuHMYOqc%2B0ZVNJg65qTyMi%2Frs%2FdM9kxjhTkPAmFDhvDLPdvWb%2BQVoUHzgls4ZUv6SgQr87T4NkO0kjWEzfMOyWlb4GOqUBXZUKbrML%2BU6EPIcRCAzvqYC9X1%2FYTpqEoZHEBjiuxCkN8CqngnHh01uRHLWOrOWseuh6Ufc8TvBkRbcq3pcAGONpDQFY42yHsogE2chHhTCfQw5oxzDXRsYNhFqSnYg8%2BEtpkLzuBt9n6WJig90PwNzXXF4WHNFBstBR3e868K67mjnWmp%2FBPDHGdfdC0qax6D%2FbKX7436WdVwW9M10suTXtsD3i&X-Amz-Signature=ab5b85d81245edf0043a4481e0fa4b8b10df7240848759cda92b177372bf08bc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C47E7C5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD37%2F2zQFnbSR5glXO%2BHaMV%2Fvbg4FjsBevjNGTQJqV%2FaAIgbqbJtzzlsxruso%2B8jSOi5ESLnYvL7ibQnl278WqeEf8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN9NYTl6Gx7%2FhxXlyrcAxrjaHD99csMJCRMo%2FYbZVvKn3aRHPE34g9rZYL4Upka3jNJjrFjF0emY9c%2FbrDUbVp65pYceVPvzoiUIoL2n%2FTAdf5FEnHP%2FbwamTUX6FvdAqOsnvbcIJffRl7EUv%2BTudlnJD33gS42kE6i6xtjuxLxbkcXAGp8VI3f5JsOJhxawSK5SyAbavhhWIVIXGuDCccSJYUGsUDC7PKjtwX2BnvP0%2FrU6ObyUYmsJeyCWg0Uu8TWdStNBu4P%2FPuQeujpXsCShVUVeXS9yScuJBji77EWlu1FfhAPPSKD5QnBPu0iRXeaAGHRrrXlPdO36RDGq6B9zb8jVHdSL7R%2FrLKzGk%2B3r0mEDRQq3ewZ0tiMCpw2Pe5lVqg8M9GGsKIm2ZIFG5nZhczvgG3SkHf4L1WxsOHvDNPfa8oLM4P%2F2lMxM5EcO%2BDC2Ow8FQ8Ycd5WZgeUS%2FCG7RePo61HAvpgPd8oSEeqoJWUaf7hEOBCxeiISpGYtc97gDs7RWYxb4QJE%2F0jY4HxdLkeroqQ3OmN73J5w9WPPu5JQHaezr5Xko9Hk%2FyuHMYOqc%2B0ZVNJg65qTyMi%2Frs%2FdM9kxjhTkPAmFDhvDLPdvWb%2BQVoUHzgls4ZUv6SgQr87T4NkO0kjWEzfMOyWlb4GOqUBXZUKbrML%2BU6EPIcRCAzvqYC9X1%2FYTpqEoZHEBjiuxCkN8CqngnHh01uRHLWOrOWseuh6Ufc8TvBkRbcq3pcAGONpDQFY42yHsogE2chHhTCfQw5oxzDXRsYNhFqSnYg8%2BEtpkLzuBt9n6WJig90PwNzXXF4WHNFBstBR3e868K67mjnWmp%2FBPDHGdfdC0qax6D%2FbKX7436WdVwW9M10suTXtsD3i&X-Amz-Signature=4226a93efaf9d82be78d79d7fd7d0b7de474bda78141bae371fd121b5ac42daa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C47E7C5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD37%2F2zQFnbSR5glXO%2BHaMV%2Fvbg4FjsBevjNGTQJqV%2FaAIgbqbJtzzlsxruso%2B8jSOi5ESLnYvL7ibQnl278WqeEf8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN9NYTl6Gx7%2FhxXlyrcAxrjaHD99csMJCRMo%2FYbZVvKn3aRHPE34g9rZYL4Upka3jNJjrFjF0emY9c%2FbrDUbVp65pYceVPvzoiUIoL2n%2FTAdf5FEnHP%2FbwamTUX6FvdAqOsnvbcIJffRl7EUv%2BTudlnJD33gS42kE6i6xtjuxLxbkcXAGp8VI3f5JsOJhxawSK5SyAbavhhWIVIXGuDCccSJYUGsUDC7PKjtwX2BnvP0%2FrU6ObyUYmsJeyCWg0Uu8TWdStNBu4P%2FPuQeujpXsCShVUVeXS9yScuJBji77EWlu1FfhAPPSKD5QnBPu0iRXeaAGHRrrXlPdO36RDGq6B9zb8jVHdSL7R%2FrLKzGk%2B3r0mEDRQq3ewZ0tiMCpw2Pe5lVqg8M9GGsKIm2ZIFG5nZhczvgG3SkHf4L1WxsOHvDNPfa8oLM4P%2F2lMxM5EcO%2BDC2Ow8FQ8Ycd5WZgeUS%2FCG7RePo61HAvpgPd8oSEeqoJWUaf7hEOBCxeiISpGYtc97gDs7RWYxb4QJE%2F0jY4HxdLkeroqQ3OmN73J5w9WPPu5JQHaezr5Xko9Hk%2FyuHMYOqc%2B0ZVNJg65qTyMi%2Frs%2FdM9kxjhTkPAmFDhvDLPdvWb%2BQVoUHzgls4ZUv6SgQr87T4NkO0kjWEzfMOyWlb4GOqUBXZUKbrML%2BU6EPIcRCAzvqYC9X1%2FYTpqEoZHEBjiuxCkN8CqngnHh01uRHLWOrOWseuh6Ufc8TvBkRbcq3pcAGONpDQFY42yHsogE2chHhTCfQw5oxzDXRsYNhFqSnYg8%2BEtpkLzuBt9n6WJig90PwNzXXF4WHNFBstBR3e868K67mjnWmp%2FBPDHGdfdC0qax6D%2FbKX7436WdVwW9M10suTXtsD3i&X-Amz-Signature=1201f4d7b9407bcc914420ccc42bd9673250c1ebe00119f4b19e9ec7bb8fb015&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C47E7C5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD37%2F2zQFnbSR5glXO%2BHaMV%2Fvbg4FjsBevjNGTQJqV%2FaAIgbqbJtzzlsxruso%2B8jSOi5ESLnYvL7ibQnl278WqeEf8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN9NYTl6Gx7%2FhxXlyrcAxrjaHD99csMJCRMo%2FYbZVvKn3aRHPE34g9rZYL4Upka3jNJjrFjF0emY9c%2FbrDUbVp65pYceVPvzoiUIoL2n%2FTAdf5FEnHP%2FbwamTUX6FvdAqOsnvbcIJffRl7EUv%2BTudlnJD33gS42kE6i6xtjuxLxbkcXAGp8VI3f5JsOJhxawSK5SyAbavhhWIVIXGuDCccSJYUGsUDC7PKjtwX2BnvP0%2FrU6ObyUYmsJeyCWg0Uu8TWdStNBu4P%2FPuQeujpXsCShVUVeXS9yScuJBji77EWlu1FfhAPPSKD5QnBPu0iRXeaAGHRrrXlPdO36RDGq6B9zb8jVHdSL7R%2FrLKzGk%2B3r0mEDRQq3ewZ0tiMCpw2Pe5lVqg8M9GGsKIm2ZIFG5nZhczvgG3SkHf4L1WxsOHvDNPfa8oLM4P%2F2lMxM5EcO%2BDC2Ow8FQ8Ycd5WZgeUS%2FCG7RePo61HAvpgPd8oSEeqoJWUaf7hEOBCxeiISpGYtc97gDs7RWYxb4QJE%2F0jY4HxdLkeroqQ3OmN73J5w9WPPu5JQHaezr5Xko9Hk%2FyuHMYOqc%2B0ZVNJg65qTyMi%2Frs%2FdM9kxjhTkPAmFDhvDLPdvWb%2BQVoUHzgls4ZUv6SgQr87T4NkO0kjWEzfMOyWlb4GOqUBXZUKbrML%2BU6EPIcRCAzvqYC9X1%2FYTpqEoZHEBjiuxCkN8CqngnHh01uRHLWOrOWseuh6Ufc8TvBkRbcq3pcAGONpDQFY42yHsogE2chHhTCfQw5oxzDXRsYNhFqSnYg8%2BEtpkLzuBt9n6WJig90PwNzXXF4WHNFBstBR3e868K67mjnWmp%2FBPDHGdfdC0qax6D%2FbKX7436WdVwW9M10suTXtsD3i&X-Amz-Signature=27e70692b73405abff6df273bc758125f50b0f183f7a7aa2c3b68da2ca5577eb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C47E7C5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD37%2F2zQFnbSR5glXO%2BHaMV%2Fvbg4FjsBevjNGTQJqV%2FaAIgbqbJtzzlsxruso%2B8jSOi5ESLnYvL7ibQnl278WqeEf8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN9NYTl6Gx7%2FhxXlyrcAxrjaHD99csMJCRMo%2FYbZVvKn3aRHPE34g9rZYL4Upka3jNJjrFjF0emY9c%2FbrDUbVp65pYceVPvzoiUIoL2n%2FTAdf5FEnHP%2FbwamTUX6FvdAqOsnvbcIJffRl7EUv%2BTudlnJD33gS42kE6i6xtjuxLxbkcXAGp8VI3f5JsOJhxawSK5SyAbavhhWIVIXGuDCccSJYUGsUDC7PKjtwX2BnvP0%2FrU6ObyUYmsJeyCWg0Uu8TWdStNBu4P%2FPuQeujpXsCShVUVeXS9yScuJBji77EWlu1FfhAPPSKD5QnBPu0iRXeaAGHRrrXlPdO36RDGq6B9zb8jVHdSL7R%2FrLKzGk%2B3r0mEDRQq3ewZ0tiMCpw2Pe5lVqg8M9GGsKIm2ZIFG5nZhczvgG3SkHf4L1WxsOHvDNPfa8oLM4P%2F2lMxM5EcO%2BDC2Ow8FQ8Ycd5WZgeUS%2FCG7RePo61HAvpgPd8oSEeqoJWUaf7hEOBCxeiISpGYtc97gDs7RWYxb4QJE%2F0jY4HxdLkeroqQ3OmN73J5w9WPPu5JQHaezr5Xko9Hk%2FyuHMYOqc%2B0ZVNJg65qTyMi%2Frs%2FdM9kxjhTkPAmFDhvDLPdvWb%2BQVoUHzgls4ZUv6SgQr87T4NkO0kjWEzfMOyWlb4GOqUBXZUKbrML%2BU6EPIcRCAzvqYC9X1%2FYTpqEoZHEBjiuxCkN8CqngnHh01uRHLWOrOWseuh6Ufc8TvBkRbcq3pcAGONpDQFY42yHsogE2chHhTCfQw5oxzDXRsYNhFqSnYg8%2BEtpkLzuBt9n6WJig90PwNzXXF4WHNFBstBR3e868K67mjnWmp%2FBPDHGdfdC0qax6D%2FbKX7436WdVwW9M10suTXtsD3i&X-Amz-Signature=92cb8d5da15db5671ef970053b9768372f34065aa5233bb1ce4490f76ef6944a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
