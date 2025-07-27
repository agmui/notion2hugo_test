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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUA3VAKI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEnrHEpKchaHgFxzLNifV26exTEx8qwCW2V3k4IrwF7FAiANclm44xG28zBcxMymiqD40UHfp4HOuWAWakOWDGelVSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMKMhcJ8jSpBmy4EJiKtwDlBbv%2BvitkvHeq7iaSyD6CnhH9GL43shE%2BNcPQVf9tbnR3n4KLny1dGVWinN%2FE58cGNxsAYxcC%2FTFGvuEO%2FNToXhDINrIfAxHTbORLTqevI%2BKsE19%2Fnup%2BL301WxMUqgkxJRX82IjaIY%2FKp6lj%2BFA2s5KuElKCXvXW3Qf%2FOiuzALbn%2BMKRF7oPk0%2BySEUTn0DEYflWy09DjLgiCWPZA%2BzkwJditIxXrVw5nECfBPRlfZrohfB52Q31il8rfwjgapF8lZf8s5rgveIXTO7hee8sLB%2FymYjteBTUOxVoofnZR%2B%2Fmjerui2wn%2FP6YO1GaDIKz4tW7sSqlOYCS6gwovKweQKDKUiqyHr7ia8qP8T821LtCOTFAcOslDxmTRLBRnpetm61PfQ6AMyEPom8ESfjLV4Vh6ZpndX4L%2F0bLTdY1trNzM00CN%2B3ASEWN9Jrc1xs5%2FDGsygj808ISNJashLmuw8im5Le5z2Xnfe1fwO9zKKb4%2F2sT0VMigBIo01pIgm6eHXgd785hEf8zz9abZxYoYMaqYkQ%2FQp%2F7YpUQeOisoTETzM0MJiPkkBmgjjIFA9%2Bz1o%2By1Zl3tizHJxqT8fhRnmH%2Bbg7ufxLxlYQfFPiqqFm426AtmN1oadLWPkwmcKVxAY6pgG8xqczd7SBYnYnYbaVVr2EhbvF0lhsJm%2F16KsNvpi7MXNGkhkYg5wFOj85nBgPhpNkEedlY3SLruviC70u44DZdYH0KbTmDUPRy4IcRxds4phsiJ0TwERXS0A2Mk0rjLfcbJHVXYwxa4ngd8ncda28Pnm4PgS%2BQ6WG8%2FLa6S5Mw%2BDZPffUzmMpaFjdnfI%2BOJek8nKMWESVoeJwPKbWOYfiOvli2QKU&X-Amz-Signature=3f6d9cff6642c7bf1f8e1ce1e55552e7ed4291c8e46d169cd31fd9452dc0f4f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUA3VAKI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEnrHEpKchaHgFxzLNifV26exTEx8qwCW2V3k4IrwF7FAiANclm44xG28zBcxMymiqD40UHfp4HOuWAWakOWDGelVSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMKMhcJ8jSpBmy4EJiKtwDlBbv%2BvitkvHeq7iaSyD6CnhH9GL43shE%2BNcPQVf9tbnR3n4KLny1dGVWinN%2FE58cGNxsAYxcC%2FTFGvuEO%2FNToXhDINrIfAxHTbORLTqevI%2BKsE19%2Fnup%2BL301WxMUqgkxJRX82IjaIY%2FKp6lj%2BFA2s5KuElKCXvXW3Qf%2FOiuzALbn%2BMKRF7oPk0%2BySEUTn0DEYflWy09DjLgiCWPZA%2BzkwJditIxXrVw5nECfBPRlfZrohfB52Q31il8rfwjgapF8lZf8s5rgveIXTO7hee8sLB%2FymYjteBTUOxVoofnZR%2B%2Fmjerui2wn%2FP6YO1GaDIKz4tW7sSqlOYCS6gwovKweQKDKUiqyHr7ia8qP8T821LtCOTFAcOslDxmTRLBRnpetm61PfQ6AMyEPom8ESfjLV4Vh6ZpndX4L%2F0bLTdY1trNzM00CN%2B3ASEWN9Jrc1xs5%2FDGsygj808ISNJashLmuw8im5Le5z2Xnfe1fwO9zKKb4%2F2sT0VMigBIo01pIgm6eHXgd785hEf8zz9abZxYoYMaqYkQ%2FQp%2F7YpUQeOisoTETzM0MJiPkkBmgjjIFA9%2Bz1o%2By1Zl3tizHJxqT8fhRnmH%2Bbg7ufxLxlYQfFPiqqFm426AtmN1oadLWPkwmcKVxAY6pgG8xqczd7SBYnYnYbaVVr2EhbvF0lhsJm%2F16KsNvpi7MXNGkhkYg5wFOj85nBgPhpNkEedlY3SLruviC70u44DZdYH0KbTmDUPRy4IcRxds4phsiJ0TwERXS0A2Mk0rjLfcbJHVXYwxa4ngd8ncda28Pnm4PgS%2BQ6WG8%2FLa6S5Mw%2BDZPffUzmMpaFjdnfI%2BOJek8nKMWESVoeJwPKbWOYfiOvli2QKU&X-Amz-Signature=66179efd41231bf9113e4e383160e8376a6880bbab9e00884a085b37d014b676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUA3VAKI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEnrHEpKchaHgFxzLNifV26exTEx8qwCW2V3k4IrwF7FAiANclm44xG28zBcxMymiqD40UHfp4HOuWAWakOWDGelVSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMKMhcJ8jSpBmy4EJiKtwDlBbv%2BvitkvHeq7iaSyD6CnhH9GL43shE%2BNcPQVf9tbnR3n4KLny1dGVWinN%2FE58cGNxsAYxcC%2FTFGvuEO%2FNToXhDINrIfAxHTbORLTqevI%2BKsE19%2Fnup%2BL301WxMUqgkxJRX82IjaIY%2FKp6lj%2BFA2s5KuElKCXvXW3Qf%2FOiuzALbn%2BMKRF7oPk0%2BySEUTn0DEYflWy09DjLgiCWPZA%2BzkwJditIxXrVw5nECfBPRlfZrohfB52Q31il8rfwjgapF8lZf8s5rgveIXTO7hee8sLB%2FymYjteBTUOxVoofnZR%2B%2Fmjerui2wn%2FP6YO1GaDIKz4tW7sSqlOYCS6gwovKweQKDKUiqyHr7ia8qP8T821LtCOTFAcOslDxmTRLBRnpetm61PfQ6AMyEPom8ESfjLV4Vh6ZpndX4L%2F0bLTdY1trNzM00CN%2B3ASEWN9Jrc1xs5%2FDGsygj808ISNJashLmuw8im5Le5z2Xnfe1fwO9zKKb4%2F2sT0VMigBIo01pIgm6eHXgd785hEf8zz9abZxYoYMaqYkQ%2FQp%2F7YpUQeOisoTETzM0MJiPkkBmgjjIFA9%2Bz1o%2By1Zl3tizHJxqT8fhRnmH%2Bbg7ufxLxlYQfFPiqqFm426AtmN1oadLWPkwmcKVxAY6pgG8xqczd7SBYnYnYbaVVr2EhbvF0lhsJm%2F16KsNvpi7MXNGkhkYg5wFOj85nBgPhpNkEedlY3SLruviC70u44DZdYH0KbTmDUPRy4IcRxds4phsiJ0TwERXS0A2Mk0rjLfcbJHVXYwxa4ngd8ncda28Pnm4PgS%2BQ6WG8%2FLa6S5Mw%2BDZPffUzmMpaFjdnfI%2BOJek8nKMWESVoeJwPKbWOYfiOvli2QKU&X-Amz-Signature=1b260a831a6b6b5274658bda6e36a6e04c118aa6260238bbf02daaf86ba13baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUA3VAKI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEnrHEpKchaHgFxzLNifV26exTEx8qwCW2V3k4IrwF7FAiANclm44xG28zBcxMymiqD40UHfp4HOuWAWakOWDGelVSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMKMhcJ8jSpBmy4EJiKtwDlBbv%2BvitkvHeq7iaSyD6CnhH9GL43shE%2BNcPQVf9tbnR3n4KLny1dGVWinN%2FE58cGNxsAYxcC%2FTFGvuEO%2FNToXhDINrIfAxHTbORLTqevI%2BKsE19%2Fnup%2BL301WxMUqgkxJRX82IjaIY%2FKp6lj%2BFA2s5KuElKCXvXW3Qf%2FOiuzALbn%2BMKRF7oPk0%2BySEUTn0DEYflWy09DjLgiCWPZA%2BzkwJditIxXrVw5nECfBPRlfZrohfB52Q31il8rfwjgapF8lZf8s5rgveIXTO7hee8sLB%2FymYjteBTUOxVoofnZR%2B%2Fmjerui2wn%2FP6YO1GaDIKz4tW7sSqlOYCS6gwovKweQKDKUiqyHr7ia8qP8T821LtCOTFAcOslDxmTRLBRnpetm61PfQ6AMyEPom8ESfjLV4Vh6ZpndX4L%2F0bLTdY1trNzM00CN%2B3ASEWN9Jrc1xs5%2FDGsygj808ISNJashLmuw8im5Le5z2Xnfe1fwO9zKKb4%2F2sT0VMigBIo01pIgm6eHXgd785hEf8zz9abZxYoYMaqYkQ%2FQp%2F7YpUQeOisoTETzM0MJiPkkBmgjjIFA9%2Bz1o%2By1Zl3tizHJxqT8fhRnmH%2Bbg7ufxLxlYQfFPiqqFm426AtmN1oadLWPkwmcKVxAY6pgG8xqczd7SBYnYnYbaVVr2EhbvF0lhsJm%2F16KsNvpi7MXNGkhkYg5wFOj85nBgPhpNkEedlY3SLruviC70u44DZdYH0KbTmDUPRy4IcRxds4phsiJ0TwERXS0A2Mk0rjLfcbJHVXYwxa4ngd8ncda28Pnm4PgS%2BQ6WG8%2FLa6S5Mw%2BDZPffUzmMpaFjdnfI%2BOJek8nKMWESVoeJwPKbWOYfiOvli2QKU&X-Amz-Signature=4cf3a1396c99fbf4f19c38d3f125935880bb5fb46a691dd35190df15a62e2969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUA3VAKI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEnrHEpKchaHgFxzLNifV26exTEx8qwCW2V3k4IrwF7FAiANclm44xG28zBcxMymiqD40UHfp4HOuWAWakOWDGelVSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMKMhcJ8jSpBmy4EJiKtwDlBbv%2BvitkvHeq7iaSyD6CnhH9GL43shE%2BNcPQVf9tbnR3n4KLny1dGVWinN%2FE58cGNxsAYxcC%2FTFGvuEO%2FNToXhDINrIfAxHTbORLTqevI%2BKsE19%2Fnup%2BL301WxMUqgkxJRX82IjaIY%2FKp6lj%2BFA2s5KuElKCXvXW3Qf%2FOiuzALbn%2BMKRF7oPk0%2BySEUTn0DEYflWy09DjLgiCWPZA%2BzkwJditIxXrVw5nECfBPRlfZrohfB52Q31il8rfwjgapF8lZf8s5rgveIXTO7hee8sLB%2FymYjteBTUOxVoofnZR%2B%2Fmjerui2wn%2FP6YO1GaDIKz4tW7sSqlOYCS6gwovKweQKDKUiqyHr7ia8qP8T821LtCOTFAcOslDxmTRLBRnpetm61PfQ6AMyEPom8ESfjLV4Vh6ZpndX4L%2F0bLTdY1trNzM00CN%2B3ASEWN9Jrc1xs5%2FDGsygj808ISNJashLmuw8im5Le5z2Xnfe1fwO9zKKb4%2F2sT0VMigBIo01pIgm6eHXgd785hEf8zz9abZxYoYMaqYkQ%2FQp%2F7YpUQeOisoTETzM0MJiPkkBmgjjIFA9%2Bz1o%2By1Zl3tizHJxqT8fhRnmH%2Bbg7ufxLxlYQfFPiqqFm426AtmN1oadLWPkwmcKVxAY6pgG8xqczd7SBYnYnYbaVVr2EhbvF0lhsJm%2F16KsNvpi7MXNGkhkYg5wFOj85nBgPhpNkEedlY3SLruviC70u44DZdYH0KbTmDUPRy4IcRxds4phsiJ0TwERXS0A2Mk0rjLfcbJHVXYwxa4ngd8ncda28Pnm4PgS%2BQ6WG8%2FLa6S5Mw%2BDZPffUzmMpaFjdnfI%2BOJek8nKMWESVoeJwPKbWOYfiOvli2QKU&X-Amz-Signature=11a5e08874843a2038534702d7e7c80029830530f7a35d58ef7c83eaf08e4743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUA3VAKI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEnrHEpKchaHgFxzLNifV26exTEx8qwCW2V3k4IrwF7FAiANclm44xG28zBcxMymiqD40UHfp4HOuWAWakOWDGelVSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMKMhcJ8jSpBmy4EJiKtwDlBbv%2BvitkvHeq7iaSyD6CnhH9GL43shE%2BNcPQVf9tbnR3n4KLny1dGVWinN%2FE58cGNxsAYxcC%2FTFGvuEO%2FNToXhDINrIfAxHTbORLTqevI%2BKsE19%2Fnup%2BL301WxMUqgkxJRX82IjaIY%2FKp6lj%2BFA2s5KuElKCXvXW3Qf%2FOiuzALbn%2BMKRF7oPk0%2BySEUTn0DEYflWy09DjLgiCWPZA%2BzkwJditIxXrVw5nECfBPRlfZrohfB52Q31il8rfwjgapF8lZf8s5rgveIXTO7hee8sLB%2FymYjteBTUOxVoofnZR%2B%2Fmjerui2wn%2FP6YO1GaDIKz4tW7sSqlOYCS6gwovKweQKDKUiqyHr7ia8qP8T821LtCOTFAcOslDxmTRLBRnpetm61PfQ6AMyEPom8ESfjLV4Vh6ZpndX4L%2F0bLTdY1trNzM00CN%2B3ASEWN9Jrc1xs5%2FDGsygj808ISNJashLmuw8im5Le5z2Xnfe1fwO9zKKb4%2F2sT0VMigBIo01pIgm6eHXgd785hEf8zz9abZxYoYMaqYkQ%2FQp%2F7YpUQeOisoTETzM0MJiPkkBmgjjIFA9%2Bz1o%2By1Zl3tizHJxqT8fhRnmH%2Bbg7ufxLxlYQfFPiqqFm426AtmN1oadLWPkwmcKVxAY6pgG8xqczd7SBYnYnYbaVVr2EhbvF0lhsJm%2F16KsNvpi7MXNGkhkYg5wFOj85nBgPhpNkEedlY3SLruviC70u44DZdYH0KbTmDUPRy4IcRxds4phsiJ0TwERXS0A2Mk0rjLfcbJHVXYwxa4ngd8ncda28Pnm4PgS%2BQ6WG8%2FLa6S5Mw%2BDZPffUzmMpaFjdnfI%2BOJek8nKMWESVoeJwPKbWOYfiOvli2QKU&X-Amz-Signature=1d592e945ab14c02039c485ee92a27594fa8fcc08c1278bb8ea2be3791defbc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUA3VAKI%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEnrHEpKchaHgFxzLNifV26exTEx8qwCW2V3k4IrwF7FAiANclm44xG28zBcxMymiqD40UHfp4HOuWAWakOWDGelVSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMKMhcJ8jSpBmy4EJiKtwDlBbv%2BvitkvHeq7iaSyD6CnhH9GL43shE%2BNcPQVf9tbnR3n4KLny1dGVWinN%2FE58cGNxsAYxcC%2FTFGvuEO%2FNToXhDINrIfAxHTbORLTqevI%2BKsE19%2Fnup%2BL301WxMUqgkxJRX82IjaIY%2FKp6lj%2BFA2s5KuElKCXvXW3Qf%2FOiuzALbn%2BMKRF7oPk0%2BySEUTn0DEYflWy09DjLgiCWPZA%2BzkwJditIxXrVw5nECfBPRlfZrohfB52Q31il8rfwjgapF8lZf8s5rgveIXTO7hee8sLB%2FymYjteBTUOxVoofnZR%2B%2Fmjerui2wn%2FP6YO1GaDIKz4tW7sSqlOYCS6gwovKweQKDKUiqyHr7ia8qP8T821LtCOTFAcOslDxmTRLBRnpetm61PfQ6AMyEPom8ESfjLV4Vh6ZpndX4L%2F0bLTdY1trNzM00CN%2B3ASEWN9Jrc1xs5%2FDGsygj808ISNJashLmuw8im5Le5z2Xnfe1fwO9zKKb4%2F2sT0VMigBIo01pIgm6eHXgd785hEf8zz9abZxYoYMaqYkQ%2FQp%2F7YpUQeOisoTETzM0MJiPkkBmgjjIFA9%2Bz1o%2By1Zl3tizHJxqT8fhRnmH%2Bbg7ufxLxlYQfFPiqqFm426AtmN1oadLWPkwmcKVxAY6pgG8xqczd7SBYnYnYbaVVr2EhbvF0lhsJm%2F16KsNvpi7MXNGkhkYg5wFOj85nBgPhpNkEedlY3SLruviC70u44DZdYH0KbTmDUPRy4IcRxds4phsiJ0TwERXS0A2Mk0rjLfcbJHVXYwxa4ngd8ncda28Pnm4PgS%2BQ6WG8%2FLa6S5Mw%2BDZPffUzmMpaFjdnfI%2BOJek8nKMWESVoeJwPKbWOYfiOvli2QKU&X-Amz-Signature=80c5dedb2a26a8da710f652522527a5b4e69b6c51264915736b273c0f25f383e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
