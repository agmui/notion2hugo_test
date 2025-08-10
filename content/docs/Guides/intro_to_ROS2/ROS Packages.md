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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLWIFLU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJwyGjW50XmHdypan8q3Vg%2FgnbTHl2Tn5yUm716esWCAiAfg3ucQ187Zfc6bhqph1eiuoZpJodkmXDv5cZrarAEliqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtq6L0rZoYthFDZFKtwDn9MyE7PdCSqsQ1E59cKeBfiGRl%2BTygVWFTD5cpx3PpsGegrXGMWNe3IsWPwypZzx3i7D2ae2tG1OHpoacI9ZSSEjE93exHqaEM%2BbQZnyqwufV1Svnclm6uD5mA3QbIiLzh8vjbAjKQawQ1a7G4klml0wHX61GX1JDPqFevFB2CHnY7ohbC%2B%2FH002lScMu0WmS7oADZhr0g4mnp4xbvUAw8M1yauyUutnD5w6zpXJHaoksKGeFWYdyewB6Zzs%2FfDgyjzdLOPWph4NIeCIYrUbffqjsQ6DLVxZTk7sffnqerMeSVHz9wdux2S2Mq9kKp2X%2BYJbTDebF28xtFO%2Boxhg%2FadaGeJBeOI%2F%2FyqAlHfU7K%2BFqsRToSnWMVvrEU2g8odhMV8pEEhlsInvzfSGypYSFXuDuqd3BU5ygZGGnQIMjrLmanJ4k5jE%2FeLRMRT2j%2BIrnH6Hh8P9GHQOigI%2FcGqehD9gUij4vHqL5R%2BPg4fnrIiYSM9YXSa30n068pZwoDbfuVaArAU0jshT5Wx7MtLumvaF621USM82BsJpER3%2FOOOMO8k2BXLgVjA0dccxmhXsuoJIZnxT6V9ygZCB4Xfs%2FVMDMAlK%2Bjqt%2BYBZyBUFh%2FpbQwLPc4c4PBgNkqow6rLfxAY6pgF6fRSzri%2FiGeaJYpQHhPztUIImRK%2FDz6t0xZfJlwuoejFT7gkFZYHmgFKmFbJBhtdAfI%2BzavSY3rFbLI4SkIA0aOyLB21GQzJjkiBj6fyvaVfRlyjOOFGiIsKqootfYXjbDbUBOg0ZxzFBOj9I6dqx63EpG%2FA8fX9MoPa4pwgdY%2BeP0dWXREtvbuqw%2BvKxnO8xlkJ5f6Mt3xvNpznfYuHWrxSYPYGE&X-Amz-Signature=7d1571a6868973fa3b0b8ea4b5b4a9d3962facd190c47bacbb12022cf3cf2b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLWIFLU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJwyGjW50XmHdypan8q3Vg%2FgnbTHl2Tn5yUm716esWCAiAfg3ucQ187Zfc6bhqph1eiuoZpJodkmXDv5cZrarAEliqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtq6L0rZoYthFDZFKtwDn9MyE7PdCSqsQ1E59cKeBfiGRl%2BTygVWFTD5cpx3PpsGegrXGMWNe3IsWPwypZzx3i7D2ae2tG1OHpoacI9ZSSEjE93exHqaEM%2BbQZnyqwufV1Svnclm6uD5mA3QbIiLzh8vjbAjKQawQ1a7G4klml0wHX61GX1JDPqFevFB2CHnY7ohbC%2B%2FH002lScMu0WmS7oADZhr0g4mnp4xbvUAw8M1yauyUutnD5w6zpXJHaoksKGeFWYdyewB6Zzs%2FfDgyjzdLOPWph4NIeCIYrUbffqjsQ6DLVxZTk7sffnqerMeSVHz9wdux2S2Mq9kKp2X%2BYJbTDebF28xtFO%2Boxhg%2FadaGeJBeOI%2F%2FyqAlHfU7K%2BFqsRToSnWMVvrEU2g8odhMV8pEEhlsInvzfSGypYSFXuDuqd3BU5ygZGGnQIMjrLmanJ4k5jE%2FeLRMRT2j%2BIrnH6Hh8P9GHQOigI%2FcGqehD9gUij4vHqL5R%2BPg4fnrIiYSM9YXSa30n068pZwoDbfuVaArAU0jshT5Wx7MtLumvaF621USM82BsJpER3%2FOOOMO8k2BXLgVjA0dccxmhXsuoJIZnxT6V9ygZCB4Xfs%2FVMDMAlK%2Bjqt%2BYBZyBUFh%2FpbQwLPc4c4PBgNkqow6rLfxAY6pgF6fRSzri%2FiGeaJYpQHhPztUIImRK%2FDz6t0xZfJlwuoejFT7gkFZYHmgFKmFbJBhtdAfI%2BzavSY3rFbLI4SkIA0aOyLB21GQzJjkiBj6fyvaVfRlyjOOFGiIsKqootfYXjbDbUBOg0ZxzFBOj9I6dqx63EpG%2FA8fX9MoPa4pwgdY%2BeP0dWXREtvbuqw%2BvKxnO8xlkJ5f6Mt3xvNpznfYuHWrxSYPYGE&X-Amz-Signature=b0b32ecd2f5401fccdc556718da923b4fb26f296c2c22bc80d23f4509802e2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLWIFLU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJwyGjW50XmHdypan8q3Vg%2FgnbTHl2Tn5yUm716esWCAiAfg3ucQ187Zfc6bhqph1eiuoZpJodkmXDv5cZrarAEliqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtq6L0rZoYthFDZFKtwDn9MyE7PdCSqsQ1E59cKeBfiGRl%2BTygVWFTD5cpx3PpsGegrXGMWNe3IsWPwypZzx3i7D2ae2tG1OHpoacI9ZSSEjE93exHqaEM%2BbQZnyqwufV1Svnclm6uD5mA3QbIiLzh8vjbAjKQawQ1a7G4klml0wHX61GX1JDPqFevFB2CHnY7ohbC%2B%2FH002lScMu0WmS7oADZhr0g4mnp4xbvUAw8M1yauyUutnD5w6zpXJHaoksKGeFWYdyewB6Zzs%2FfDgyjzdLOPWph4NIeCIYrUbffqjsQ6DLVxZTk7sffnqerMeSVHz9wdux2S2Mq9kKp2X%2BYJbTDebF28xtFO%2Boxhg%2FadaGeJBeOI%2F%2FyqAlHfU7K%2BFqsRToSnWMVvrEU2g8odhMV8pEEhlsInvzfSGypYSFXuDuqd3BU5ygZGGnQIMjrLmanJ4k5jE%2FeLRMRT2j%2BIrnH6Hh8P9GHQOigI%2FcGqehD9gUij4vHqL5R%2BPg4fnrIiYSM9YXSa30n068pZwoDbfuVaArAU0jshT5Wx7MtLumvaF621USM82BsJpER3%2FOOOMO8k2BXLgVjA0dccxmhXsuoJIZnxT6V9ygZCB4Xfs%2FVMDMAlK%2Bjqt%2BYBZyBUFh%2FpbQwLPc4c4PBgNkqow6rLfxAY6pgF6fRSzri%2FiGeaJYpQHhPztUIImRK%2FDz6t0xZfJlwuoejFT7gkFZYHmgFKmFbJBhtdAfI%2BzavSY3rFbLI4SkIA0aOyLB21GQzJjkiBj6fyvaVfRlyjOOFGiIsKqootfYXjbDbUBOg0ZxzFBOj9I6dqx63EpG%2FA8fX9MoPa4pwgdY%2BeP0dWXREtvbuqw%2BvKxnO8xlkJ5f6Mt3xvNpznfYuHWrxSYPYGE&X-Amz-Signature=8b95fd43fdf6e9d0b19320482a88412af82db34c50b8976663c21f67a23ebeb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLWIFLU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJwyGjW50XmHdypan8q3Vg%2FgnbTHl2Tn5yUm716esWCAiAfg3ucQ187Zfc6bhqph1eiuoZpJodkmXDv5cZrarAEliqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtq6L0rZoYthFDZFKtwDn9MyE7PdCSqsQ1E59cKeBfiGRl%2BTygVWFTD5cpx3PpsGegrXGMWNe3IsWPwypZzx3i7D2ae2tG1OHpoacI9ZSSEjE93exHqaEM%2BbQZnyqwufV1Svnclm6uD5mA3QbIiLzh8vjbAjKQawQ1a7G4klml0wHX61GX1JDPqFevFB2CHnY7ohbC%2B%2FH002lScMu0WmS7oADZhr0g4mnp4xbvUAw8M1yauyUutnD5w6zpXJHaoksKGeFWYdyewB6Zzs%2FfDgyjzdLOPWph4NIeCIYrUbffqjsQ6DLVxZTk7sffnqerMeSVHz9wdux2S2Mq9kKp2X%2BYJbTDebF28xtFO%2Boxhg%2FadaGeJBeOI%2F%2FyqAlHfU7K%2BFqsRToSnWMVvrEU2g8odhMV8pEEhlsInvzfSGypYSFXuDuqd3BU5ygZGGnQIMjrLmanJ4k5jE%2FeLRMRT2j%2BIrnH6Hh8P9GHQOigI%2FcGqehD9gUij4vHqL5R%2BPg4fnrIiYSM9YXSa30n068pZwoDbfuVaArAU0jshT5Wx7MtLumvaF621USM82BsJpER3%2FOOOMO8k2BXLgVjA0dccxmhXsuoJIZnxT6V9ygZCB4Xfs%2FVMDMAlK%2Bjqt%2BYBZyBUFh%2FpbQwLPc4c4PBgNkqow6rLfxAY6pgF6fRSzri%2FiGeaJYpQHhPztUIImRK%2FDz6t0xZfJlwuoejFT7gkFZYHmgFKmFbJBhtdAfI%2BzavSY3rFbLI4SkIA0aOyLB21GQzJjkiBj6fyvaVfRlyjOOFGiIsKqootfYXjbDbUBOg0ZxzFBOj9I6dqx63EpG%2FA8fX9MoPa4pwgdY%2BeP0dWXREtvbuqw%2BvKxnO8xlkJ5f6Mt3xvNpznfYuHWrxSYPYGE&X-Amz-Signature=555c229ced56116c4006f3bd76c34fa6e0c33711a944c3ca712f3b3eaa68948a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLWIFLU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJwyGjW50XmHdypan8q3Vg%2FgnbTHl2Tn5yUm716esWCAiAfg3ucQ187Zfc6bhqph1eiuoZpJodkmXDv5cZrarAEliqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtq6L0rZoYthFDZFKtwDn9MyE7PdCSqsQ1E59cKeBfiGRl%2BTygVWFTD5cpx3PpsGegrXGMWNe3IsWPwypZzx3i7D2ae2tG1OHpoacI9ZSSEjE93exHqaEM%2BbQZnyqwufV1Svnclm6uD5mA3QbIiLzh8vjbAjKQawQ1a7G4klml0wHX61GX1JDPqFevFB2CHnY7ohbC%2B%2FH002lScMu0WmS7oADZhr0g4mnp4xbvUAw8M1yauyUutnD5w6zpXJHaoksKGeFWYdyewB6Zzs%2FfDgyjzdLOPWph4NIeCIYrUbffqjsQ6DLVxZTk7sffnqerMeSVHz9wdux2S2Mq9kKp2X%2BYJbTDebF28xtFO%2Boxhg%2FadaGeJBeOI%2F%2FyqAlHfU7K%2BFqsRToSnWMVvrEU2g8odhMV8pEEhlsInvzfSGypYSFXuDuqd3BU5ygZGGnQIMjrLmanJ4k5jE%2FeLRMRT2j%2BIrnH6Hh8P9GHQOigI%2FcGqehD9gUij4vHqL5R%2BPg4fnrIiYSM9YXSa30n068pZwoDbfuVaArAU0jshT5Wx7MtLumvaF621USM82BsJpER3%2FOOOMO8k2BXLgVjA0dccxmhXsuoJIZnxT6V9ygZCB4Xfs%2FVMDMAlK%2Bjqt%2BYBZyBUFh%2FpbQwLPc4c4PBgNkqow6rLfxAY6pgF6fRSzri%2FiGeaJYpQHhPztUIImRK%2FDz6t0xZfJlwuoejFT7gkFZYHmgFKmFbJBhtdAfI%2BzavSY3rFbLI4SkIA0aOyLB21GQzJjkiBj6fyvaVfRlyjOOFGiIsKqootfYXjbDbUBOg0ZxzFBOj9I6dqx63EpG%2FA8fX9MoPa4pwgdY%2BeP0dWXREtvbuqw%2BvKxnO8xlkJ5f6Mt3xvNpznfYuHWrxSYPYGE&X-Amz-Signature=30dffa21948d2062ccc3087102f420295fd6dba83e898eb0974571f5369e571f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLWIFLU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJwyGjW50XmHdypan8q3Vg%2FgnbTHl2Tn5yUm716esWCAiAfg3ucQ187Zfc6bhqph1eiuoZpJodkmXDv5cZrarAEliqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtq6L0rZoYthFDZFKtwDn9MyE7PdCSqsQ1E59cKeBfiGRl%2BTygVWFTD5cpx3PpsGegrXGMWNe3IsWPwypZzx3i7D2ae2tG1OHpoacI9ZSSEjE93exHqaEM%2BbQZnyqwufV1Svnclm6uD5mA3QbIiLzh8vjbAjKQawQ1a7G4klml0wHX61GX1JDPqFevFB2CHnY7ohbC%2B%2FH002lScMu0WmS7oADZhr0g4mnp4xbvUAw8M1yauyUutnD5w6zpXJHaoksKGeFWYdyewB6Zzs%2FfDgyjzdLOPWph4NIeCIYrUbffqjsQ6DLVxZTk7sffnqerMeSVHz9wdux2S2Mq9kKp2X%2BYJbTDebF28xtFO%2Boxhg%2FadaGeJBeOI%2F%2FyqAlHfU7K%2BFqsRToSnWMVvrEU2g8odhMV8pEEhlsInvzfSGypYSFXuDuqd3BU5ygZGGnQIMjrLmanJ4k5jE%2FeLRMRT2j%2BIrnH6Hh8P9GHQOigI%2FcGqehD9gUij4vHqL5R%2BPg4fnrIiYSM9YXSa30n068pZwoDbfuVaArAU0jshT5Wx7MtLumvaF621USM82BsJpER3%2FOOOMO8k2BXLgVjA0dccxmhXsuoJIZnxT6V9ygZCB4Xfs%2FVMDMAlK%2Bjqt%2BYBZyBUFh%2FpbQwLPc4c4PBgNkqow6rLfxAY6pgF6fRSzri%2FiGeaJYpQHhPztUIImRK%2FDz6t0xZfJlwuoejFT7gkFZYHmgFKmFbJBhtdAfI%2BzavSY3rFbLI4SkIA0aOyLB21GQzJjkiBj6fyvaVfRlyjOOFGiIsKqootfYXjbDbUBOg0ZxzFBOj9I6dqx63EpG%2FA8fX9MoPa4pwgdY%2BeP0dWXREtvbuqw%2BvKxnO8xlkJ5f6Mt3xvNpznfYuHWrxSYPYGE&X-Amz-Signature=d7310be8beca28d719e2bee76c1e858d06cd3eeab164307dfa099396468bbb76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLWIFLU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJwyGjW50XmHdypan8q3Vg%2FgnbTHl2Tn5yUm716esWCAiAfg3ucQ187Zfc6bhqph1eiuoZpJodkmXDv5cZrarAEliqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxtq6L0rZoYthFDZFKtwDn9MyE7PdCSqsQ1E59cKeBfiGRl%2BTygVWFTD5cpx3PpsGegrXGMWNe3IsWPwypZzx3i7D2ae2tG1OHpoacI9ZSSEjE93exHqaEM%2BbQZnyqwufV1Svnclm6uD5mA3QbIiLzh8vjbAjKQawQ1a7G4klml0wHX61GX1JDPqFevFB2CHnY7ohbC%2B%2FH002lScMu0WmS7oADZhr0g4mnp4xbvUAw8M1yauyUutnD5w6zpXJHaoksKGeFWYdyewB6Zzs%2FfDgyjzdLOPWph4NIeCIYrUbffqjsQ6DLVxZTk7sffnqerMeSVHz9wdux2S2Mq9kKp2X%2BYJbTDebF28xtFO%2Boxhg%2FadaGeJBeOI%2F%2FyqAlHfU7K%2BFqsRToSnWMVvrEU2g8odhMV8pEEhlsInvzfSGypYSFXuDuqd3BU5ygZGGnQIMjrLmanJ4k5jE%2FeLRMRT2j%2BIrnH6Hh8P9GHQOigI%2FcGqehD9gUij4vHqL5R%2BPg4fnrIiYSM9YXSa30n068pZwoDbfuVaArAU0jshT5Wx7MtLumvaF621USM82BsJpER3%2FOOOMO8k2BXLgVjA0dccxmhXsuoJIZnxT6V9ygZCB4Xfs%2FVMDMAlK%2Bjqt%2BYBZyBUFh%2FpbQwLPc4c4PBgNkqow6rLfxAY6pgF6fRSzri%2FiGeaJYpQHhPztUIImRK%2FDz6t0xZfJlwuoejFT7gkFZYHmgFKmFbJBhtdAfI%2BzavSY3rFbLI4SkIA0aOyLB21GQzJjkiBj6fyvaVfRlyjOOFGiIsKqootfYXjbDbUBOg0ZxzFBOj9I6dqx63EpG%2FA8fX9MoPa4pwgdY%2BeP0dWXREtvbuqw%2BvKxnO8xlkJ5f6Mt3xvNpznfYuHWrxSYPYGE&X-Amz-Signature=366b7520730e453eb5bf48a67e0e891d047c8f6038a3e98c392b5118402ff132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
