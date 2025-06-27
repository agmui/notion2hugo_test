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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKHO5FQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj9t%2BOSDOnNKM7EM9wERFK6sZCI6FMaAiYJeJNmOntYgIhAOj8OTmPhQ48QVnd%2FSBtLZ7I267EzgSWgxUHFliHynXZKv8DCHwQABoMNjM3NDIzMTgzODA1IgxxvIDxYSpmJ8D2yj4q3AM%2Fn8don89S2gRAwUR6rklJVzEdTvRF3QvuXWxUYFYLeTLzJMayTBc%2FPZwo7hLKeap7phZmrT%2BQDOCddo89J7%2FGFMZslsjbVVdsuuTpv2nr0cpQKRmJjeQEx4Z8usB8hVmBvbrFwvcIzTZZCkSDaHbvBf7VPasHQV1RM90TJO05RHcq8CwxCneqJASsRPrHCOJsAHsBKpFxA5JZ9fXR9vC9ZiVxY0neDtE3p3GdklvIAzEWPO45%2FT0FGUChbQEEve97KG4R6Qhs%2F6Sj52DlE4OuShTE6Hk2sVwYySI4lfEbWxhvKW1LHP11Fg6Wx3N3dYxpOmeSswu1UjCAJcK3lyB%2BAT7ENaSjh4iGZPU4zCl7izJKx6vEjVz5YA2%2F1NEAQnrMvQeyxmOGcUQiQ5g0q1Zo%2BNnGkrsx9onoN1kK26nngOaKOSG142Hfw%2FoSgVxNsBhUcJFAf%2F0wG0mqtkN2gN1vv%2FzIGLenKrIf2%2BKi1A5PlBhaxoh70t4WjrgDMhbh7GMAUypgMmu%2Behn%2FDCOqn7kMHmOapBN7Ob3Yqazx5zenaTbgfPHYXwrz2QjTaeISuOfkJq8YSpd%2B3D5AW5lXEsdkdeKdL32hYdTdqUlGaCchaICMNyBf8ouN4liROTCZyvvCBjqkAeApZa8rCiZfF8YZ%2Bclz5Y9iaU4IKcaXjrtt1Dwa7%2FPHDqMi5DSVYmM8gOk3iqFUjmtoEAemUICPvM0KQzyDPWQ33So%2BMgClPhzSV7r1joGtF7iS6vUOXWwnv6KQb%2FVEvBjcs3a2YCQw0nEbwrlWA%2FDrsxyzypNuSXizLi5CuQJ%2FN7PV%2BlTO4wgDvPbcQ0ltwKrlXefFPBZ6Qut5cGeXDt7nFqVc&X-Amz-Signature=4d62feb3eedcbe9fece788553e0d3c3ab925d5fc8c3e9af4d28d11ff6b0cc592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKHO5FQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj9t%2BOSDOnNKM7EM9wERFK6sZCI6FMaAiYJeJNmOntYgIhAOj8OTmPhQ48QVnd%2FSBtLZ7I267EzgSWgxUHFliHynXZKv8DCHwQABoMNjM3NDIzMTgzODA1IgxxvIDxYSpmJ8D2yj4q3AM%2Fn8don89S2gRAwUR6rklJVzEdTvRF3QvuXWxUYFYLeTLzJMayTBc%2FPZwo7hLKeap7phZmrT%2BQDOCddo89J7%2FGFMZslsjbVVdsuuTpv2nr0cpQKRmJjeQEx4Z8usB8hVmBvbrFwvcIzTZZCkSDaHbvBf7VPasHQV1RM90TJO05RHcq8CwxCneqJASsRPrHCOJsAHsBKpFxA5JZ9fXR9vC9ZiVxY0neDtE3p3GdklvIAzEWPO45%2FT0FGUChbQEEve97KG4R6Qhs%2F6Sj52DlE4OuShTE6Hk2sVwYySI4lfEbWxhvKW1LHP11Fg6Wx3N3dYxpOmeSswu1UjCAJcK3lyB%2BAT7ENaSjh4iGZPU4zCl7izJKx6vEjVz5YA2%2F1NEAQnrMvQeyxmOGcUQiQ5g0q1Zo%2BNnGkrsx9onoN1kK26nngOaKOSG142Hfw%2FoSgVxNsBhUcJFAf%2F0wG0mqtkN2gN1vv%2FzIGLenKrIf2%2BKi1A5PlBhaxoh70t4WjrgDMhbh7GMAUypgMmu%2Behn%2FDCOqn7kMHmOapBN7Ob3Yqazx5zenaTbgfPHYXwrz2QjTaeISuOfkJq8YSpd%2B3D5AW5lXEsdkdeKdL32hYdTdqUlGaCchaICMNyBf8ouN4liROTCZyvvCBjqkAeApZa8rCiZfF8YZ%2Bclz5Y9iaU4IKcaXjrtt1Dwa7%2FPHDqMi5DSVYmM8gOk3iqFUjmtoEAemUICPvM0KQzyDPWQ33So%2BMgClPhzSV7r1joGtF7iS6vUOXWwnv6KQb%2FVEvBjcs3a2YCQw0nEbwrlWA%2FDrsxyzypNuSXizLi5CuQJ%2FN7PV%2BlTO4wgDvPbcQ0ltwKrlXefFPBZ6Qut5cGeXDt7nFqVc&X-Amz-Signature=5e0c19db22dc101549d5c91bf29385ec9b246607d458318095277a161cd3a42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKHO5FQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj9t%2BOSDOnNKM7EM9wERFK6sZCI6FMaAiYJeJNmOntYgIhAOj8OTmPhQ48QVnd%2FSBtLZ7I267EzgSWgxUHFliHynXZKv8DCHwQABoMNjM3NDIzMTgzODA1IgxxvIDxYSpmJ8D2yj4q3AM%2Fn8don89S2gRAwUR6rklJVzEdTvRF3QvuXWxUYFYLeTLzJMayTBc%2FPZwo7hLKeap7phZmrT%2BQDOCddo89J7%2FGFMZslsjbVVdsuuTpv2nr0cpQKRmJjeQEx4Z8usB8hVmBvbrFwvcIzTZZCkSDaHbvBf7VPasHQV1RM90TJO05RHcq8CwxCneqJASsRPrHCOJsAHsBKpFxA5JZ9fXR9vC9ZiVxY0neDtE3p3GdklvIAzEWPO45%2FT0FGUChbQEEve97KG4R6Qhs%2F6Sj52DlE4OuShTE6Hk2sVwYySI4lfEbWxhvKW1LHP11Fg6Wx3N3dYxpOmeSswu1UjCAJcK3lyB%2BAT7ENaSjh4iGZPU4zCl7izJKx6vEjVz5YA2%2F1NEAQnrMvQeyxmOGcUQiQ5g0q1Zo%2BNnGkrsx9onoN1kK26nngOaKOSG142Hfw%2FoSgVxNsBhUcJFAf%2F0wG0mqtkN2gN1vv%2FzIGLenKrIf2%2BKi1A5PlBhaxoh70t4WjrgDMhbh7GMAUypgMmu%2Behn%2FDCOqn7kMHmOapBN7Ob3Yqazx5zenaTbgfPHYXwrz2QjTaeISuOfkJq8YSpd%2B3D5AW5lXEsdkdeKdL32hYdTdqUlGaCchaICMNyBf8ouN4liROTCZyvvCBjqkAeApZa8rCiZfF8YZ%2Bclz5Y9iaU4IKcaXjrtt1Dwa7%2FPHDqMi5DSVYmM8gOk3iqFUjmtoEAemUICPvM0KQzyDPWQ33So%2BMgClPhzSV7r1joGtF7iS6vUOXWwnv6KQb%2FVEvBjcs3a2YCQw0nEbwrlWA%2FDrsxyzypNuSXizLi5CuQJ%2FN7PV%2BlTO4wgDvPbcQ0ltwKrlXefFPBZ6Qut5cGeXDt7nFqVc&X-Amz-Signature=26d2be803299cdb17f8a85cec4998b41f0e1c3b6050cf170987b04577e4407e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKHO5FQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj9t%2BOSDOnNKM7EM9wERFK6sZCI6FMaAiYJeJNmOntYgIhAOj8OTmPhQ48QVnd%2FSBtLZ7I267EzgSWgxUHFliHynXZKv8DCHwQABoMNjM3NDIzMTgzODA1IgxxvIDxYSpmJ8D2yj4q3AM%2Fn8don89S2gRAwUR6rklJVzEdTvRF3QvuXWxUYFYLeTLzJMayTBc%2FPZwo7hLKeap7phZmrT%2BQDOCddo89J7%2FGFMZslsjbVVdsuuTpv2nr0cpQKRmJjeQEx4Z8usB8hVmBvbrFwvcIzTZZCkSDaHbvBf7VPasHQV1RM90TJO05RHcq8CwxCneqJASsRPrHCOJsAHsBKpFxA5JZ9fXR9vC9ZiVxY0neDtE3p3GdklvIAzEWPO45%2FT0FGUChbQEEve97KG4R6Qhs%2F6Sj52DlE4OuShTE6Hk2sVwYySI4lfEbWxhvKW1LHP11Fg6Wx3N3dYxpOmeSswu1UjCAJcK3lyB%2BAT7ENaSjh4iGZPU4zCl7izJKx6vEjVz5YA2%2F1NEAQnrMvQeyxmOGcUQiQ5g0q1Zo%2BNnGkrsx9onoN1kK26nngOaKOSG142Hfw%2FoSgVxNsBhUcJFAf%2F0wG0mqtkN2gN1vv%2FzIGLenKrIf2%2BKi1A5PlBhaxoh70t4WjrgDMhbh7GMAUypgMmu%2Behn%2FDCOqn7kMHmOapBN7Ob3Yqazx5zenaTbgfPHYXwrz2QjTaeISuOfkJq8YSpd%2B3D5AW5lXEsdkdeKdL32hYdTdqUlGaCchaICMNyBf8ouN4liROTCZyvvCBjqkAeApZa8rCiZfF8YZ%2Bclz5Y9iaU4IKcaXjrtt1Dwa7%2FPHDqMi5DSVYmM8gOk3iqFUjmtoEAemUICPvM0KQzyDPWQ33So%2BMgClPhzSV7r1joGtF7iS6vUOXWwnv6KQb%2FVEvBjcs3a2YCQw0nEbwrlWA%2FDrsxyzypNuSXizLi5CuQJ%2FN7PV%2BlTO4wgDvPbcQ0ltwKrlXefFPBZ6Qut5cGeXDt7nFqVc&X-Amz-Signature=f3b76771d5fae9f1205785455f914054ca062f185dca64d0a83389f1895efd6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKHO5FQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj9t%2BOSDOnNKM7EM9wERFK6sZCI6FMaAiYJeJNmOntYgIhAOj8OTmPhQ48QVnd%2FSBtLZ7I267EzgSWgxUHFliHynXZKv8DCHwQABoMNjM3NDIzMTgzODA1IgxxvIDxYSpmJ8D2yj4q3AM%2Fn8don89S2gRAwUR6rklJVzEdTvRF3QvuXWxUYFYLeTLzJMayTBc%2FPZwo7hLKeap7phZmrT%2BQDOCddo89J7%2FGFMZslsjbVVdsuuTpv2nr0cpQKRmJjeQEx4Z8usB8hVmBvbrFwvcIzTZZCkSDaHbvBf7VPasHQV1RM90TJO05RHcq8CwxCneqJASsRPrHCOJsAHsBKpFxA5JZ9fXR9vC9ZiVxY0neDtE3p3GdklvIAzEWPO45%2FT0FGUChbQEEve97KG4R6Qhs%2F6Sj52DlE4OuShTE6Hk2sVwYySI4lfEbWxhvKW1LHP11Fg6Wx3N3dYxpOmeSswu1UjCAJcK3lyB%2BAT7ENaSjh4iGZPU4zCl7izJKx6vEjVz5YA2%2F1NEAQnrMvQeyxmOGcUQiQ5g0q1Zo%2BNnGkrsx9onoN1kK26nngOaKOSG142Hfw%2FoSgVxNsBhUcJFAf%2F0wG0mqtkN2gN1vv%2FzIGLenKrIf2%2BKi1A5PlBhaxoh70t4WjrgDMhbh7GMAUypgMmu%2Behn%2FDCOqn7kMHmOapBN7Ob3Yqazx5zenaTbgfPHYXwrz2QjTaeISuOfkJq8YSpd%2B3D5AW5lXEsdkdeKdL32hYdTdqUlGaCchaICMNyBf8ouN4liROTCZyvvCBjqkAeApZa8rCiZfF8YZ%2Bclz5Y9iaU4IKcaXjrtt1Dwa7%2FPHDqMi5DSVYmM8gOk3iqFUjmtoEAemUICPvM0KQzyDPWQ33So%2BMgClPhzSV7r1joGtF7iS6vUOXWwnv6KQb%2FVEvBjcs3a2YCQw0nEbwrlWA%2FDrsxyzypNuSXizLi5CuQJ%2FN7PV%2BlTO4wgDvPbcQ0ltwKrlXefFPBZ6Qut5cGeXDt7nFqVc&X-Amz-Signature=734e99dc9739918617ca4732fb06dc195786ae13853fb67c43f2c0fec3097420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKHO5FQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj9t%2BOSDOnNKM7EM9wERFK6sZCI6FMaAiYJeJNmOntYgIhAOj8OTmPhQ48QVnd%2FSBtLZ7I267EzgSWgxUHFliHynXZKv8DCHwQABoMNjM3NDIzMTgzODA1IgxxvIDxYSpmJ8D2yj4q3AM%2Fn8don89S2gRAwUR6rklJVzEdTvRF3QvuXWxUYFYLeTLzJMayTBc%2FPZwo7hLKeap7phZmrT%2BQDOCddo89J7%2FGFMZslsjbVVdsuuTpv2nr0cpQKRmJjeQEx4Z8usB8hVmBvbrFwvcIzTZZCkSDaHbvBf7VPasHQV1RM90TJO05RHcq8CwxCneqJASsRPrHCOJsAHsBKpFxA5JZ9fXR9vC9ZiVxY0neDtE3p3GdklvIAzEWPO45%2FT0FGUChbQEEve97KG4R6Qhs%2F6Sj52DlE4OuShTE6Hk2sVwYySI4lfEbWxhvKW1LHP11Fg6Wx3N3dYxpOmeSswu1UjCAJcK3lyB%2BAT7ENaSjh4iGZPU4zCl7izJKx6vEjVz5YA2%2F1NEAQnrMvQeyxmOGcUQiQ5g0q1Zo%2BNnGkrsx9onoN1kK26nngOaKOSG142Hfw%2FoSgVxNsBhUcJFAf%2F0wG0mqtkN2gN1vv%2FzIGLenKrIf2%2BKi1A5PlBhaxoh70t4WjrgDMhbh7GMAUypgMmu%2Behn%2FDCOqn7kMHmOapBN7Ob3Yqazx5zenaTbgfPHYXwrz2QjTaeISuOfkJq8YSpd%2B3D5AW5lXEsdkdeKdL32hYdTdqUlGaCchaICMNyBf8ouN4liROTCZyvvCBjqkAeApZa8rCiZfF8YZ%2Bclz5Y9iaU4IKcaXjrtt1Dwa7%2FPHDqMi5DSVYmM8gOk3iqFUjmtoEAemUICPvM0KQzyDPWQ33So%2BMgClPhzSV7r1joGtF7iS6vUOXWwnv6KQb%2FVEvBjcs3a2YCQw0nEbwrlWA%2FDrsxyzypNuSXizLi5CuQJ%2FN7PV%2BlTO4wgDvPbcQ0ltwKrlXefFPBZ6Qut5cGeXDt7nFqVc&X-Amz-Signature=3924eee4cc8fc354fbe9d06cc1a623fd61fe04408199d723cfd34b506935124f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKHO5FQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj9t%2BOSDOnNKM7EM9wERFK6sZCI6FMaAiYJeJNmOntYgIhAOj8OTmPhQ48QVnd%2FSBtLZ7I267EzgSWgxUHFliHynXZKv8DCHwQABoMNjM3NDIzMTgzODA1IgxxvIDxYSpmJ8D2yj4q3AM%2Fn8don89S2gRAwUR6rklJVzEdTvRF3QvuXWxUYFYLeTLzJMayTBc%2FPZwo7hLKeap7phZmrT%2BQDOCddo89J7%2FGFMZslsjbVVdsuuTpv2nr0cpQKRmJjeQEx4Z8usB8hVmBvbrFwvcIzTZZCkSDaHbvBf7VPasHQV1RM90TJO05RHcq8CwxCneqJASsRPrHCOJsAHsBKpFxA5JZ9fXR9vC9ZiVxY0neDtE3p3GdklvIAzEWPO45%2FT0FGUChbQEEve97KG4R6Qhs%2F6Sj52DlE4OuShTE6Hk2sVwYySI4lfEbWxhvKW1LHP11Fg6Wx3N3dYxpOmeSswu1UjCAJcK3lyB%2BAT7ENaSjh4iGZPU4zCl7izJKx6vEjVz5YA2%2F1NEAQnrMvQeyxmOGcUQiQ5g0q1Zo%2BNnGkrsx9onoN1kK26nngOaKOSG142Hfw%2FoSgVxNsBhUcJFAf%2F0wG0mqtkN2gN1vv%2FzIGLenKrIf2%2BKi1A5PlBhaxoh70t4WjrgDMhbh7GMAUypgMmu%2Behn%2FDCOqn7kMHmOapBN7Ob3Yqazx5zenaTbgfPHYXwrz2QjTaeISuOfkJq8YSpd%2B3D5AW5lXEsdkdeKdL32hYdTdqUlGaCchaICMNyBf8ouN4liROTCZyvvCBjqkAeApZa8rCiZfF8YZ%2Bclz5Y9iaU4IKcaXjrtt1Dwa7%2FPHDqMi5DSVYmM8gOk3iqFUjmtoEAemUICPvM0KQzyDPWQ33So%2BMgClPhzSV7r1joGtF7iS6vUOXWwnv6KQb%2FVEvBjcs3a2YCQw0nEbwrlWA%2FDrsxyzypNuSXizLi5CuQJ%2FN7PV%2BlTO4wgDvPbcQ0ltwKrlXefFPBZ6Qut5cGeXDt7nFqVc&X-Amz-Signature=8dfeb0db56a93df213f7daba720e7e5e22b033f760c41c72149dacf73a7b2028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
