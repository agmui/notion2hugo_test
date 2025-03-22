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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653LVOHQK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDfe3njhbqcmWefrnYQdf58JHOVTH51Ozx%2BFojf4KB%2FqAiBtBqWFLPOxNv0smQpf%2FbevEeKxosnTvRu6JTwJqJ6uSiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi0o8c%2Btpg1PaIjNcKtwDP%2Bu5l4%2BWGuQfm9xZL%2B8VSArap6N6Xi4q1T09PQvPVZin8K4QR3cO4e3ZcxFTxZVlDsYh1NNxr5sL5xl7W2bWNoXGAXACbfePNxUUA1%2BU%2BZLlHTpXFDZ2cfl%2BZMWdyH7PVCsk%2FVDkUfr41y5aC1Dce%2FN992a0Qmn39GH7YCC%2BYeQ7yP8SN2XTYBiuLXmMpEUky4BqANZtgY6XKj4MTDM5XC1s84Nln4SXx0111WX6WZSJZoR1%2FgEappBaRErj1TZgqDw3xkkc6Bf7OfUm1SyZTwiZj76ZuvckciruLyUtw94ImdFvbrTtsWBQrfZuc49XAwUEOWHmik%2ForfrEi9NYS0zZdoJlLZKLWTgZM32Ni6%2FyilxfYTC4Veu%2Frkp90wdy%2BD%2BHtDshtQgeoptNMEkhxj7Q90bF96sVVsBtVCMhzWI6G9AoogpiZtf97ySfKGEWoo6OnAT%2B9RLBmOUURYZeEK7M8x4P6gdPIm9cGWgMYNUMdZp0ME8eZSLA70nByUgwIDYQDDtcSAItS7Icveiyp8PtEpgFYUG%2FGxAm4mAIN25ocUvzWool2%2FgBqUhmihz02aeOC8Dh6JDg87K8BfiyRtbjU4oWMpPWswuVJcPDaWJmi9hvfmBqA1ukimUw3Pb6vgY6pgGQSb0ZkEH4OYa0wpr0uHhUhPBUGzOchhbky4JK%2FZsblyKzEHScgI%2BbOr0BreEkg7nJa4mMRuKcE%2FYyLVKZCXZD2F%2B7ger%2BH9vSgVbd5li8V4t4lgav76tOyTkVxfrg2%2BsIrlwQ%2BI4I24mI2lX0E1orKsqr7yXFr4ovZfjbo9Mw0pa%2BTEEMrm%2BVx5Ce53XVhLlq%2BPEaiehl3SM9lLN9030fGAwzTmDz&X-Amz-Signature=2c4edbfb9be3e7cf925a651dd5a49286f51b263a6ea0efc0758b76a42d8c50ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653LVOHQK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDfe3njhbqcmWefrnYQdf58JHOVTH51Ozx%2BFojf4KB%2FqAiBtBqWFLPOxNv0smQpf%2FbevEeKxosnTvRu6JTwJqJ6uSiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi0o8c%2Btpg1PaIjNcKtwDP%2Bu5l4%2BWGuQfm9xZL%2B8VSArap6N6Xi4q1T09PQvPVZin8K4QR3cO4e3ZcxFTxZVlDsYh1NNxr5sL5xl7W2bWNoXGAXACbfePNxUUA1%2BU%2BZLlHTpXFDZ2cfl%2BZMWdyH7PVCsk%2FVDkUfr41y5aC1Dce%2FN992a0Qmn39GH7YCC%2BYeQ7yP8SN2XTYBiuLXmMpEUky4BqANZtgY6XKj4MTDM5XC1s84Nln4SXx0111WX6WZSJZoR1%2FgEappBaRErj1TZgqDw3xkkc6Bf7OfUm1SyZTwiZj76ZuvckciruLyUtw94ImdFvbrTtsWBQrfZuc49XAwUEOWHmik%2ForfrEi9NYS0zZdoJlLZKLWTgZM32Ni6%2FyilxfYTC4Veu%2Frkp90wdy%2BD%2BHtDshtQgeoptNMEkhxj7Q90bF96sVVsBtVCMhzWI6G9AoogpiZtf97ySfKGEWoo6OnAT%2B9RLBmOUURYZeEK7M8x4P6gdPIm9cGWgMYNUMdZp0ME8eZSLA70nByUgwIDYQDDtcSAItS7Icveiyp8PtEpgFYUG%2FGxAm4mAIN25ocUvzWool2%2FgBqUhmihz02aeOC8Dh6JDg87K8BfiyRtbjU4oWMpPWswuVJcPDaWJmi9hvfmBqA1ukimUw3Pb6vgY6pgGQSb0ZkEH4OYa0wpr0uHhUhPBUGzOchhbky4JK%2FZsblyKzEHScgI%2BbOr0BreEkg7nJa4mMRuKcE%2FYyLVKZCXZD2F%2B7ger%2BH9vSgVbd5li8V4t4lgav76tOyTkVxfrg2%2BsIrlwQ%2BI4I24mI2lX0E1orKsqr7yXFr4ovZfjbo9Mw0pa%2BTEEMrm%2BVx5Ce53XVhLlq%2BPEaiehl3SM9lLN9030fGAwzTmDz&X-Amz-Signature=a9e5800fea68ea8972b9be5b499f8a890d4ceece12ebfbab261374f5338ea631&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653LVOHQK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDfe3njhbqcmWefrnYQdf58JHOVTH51Ozx%2BFojf4KB%2FqAiBtBqWFLPOxNv0smQpf%2FbevEeKxosnTvRu6JTwJqJ6uSiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi0o8c%2Btpg1PaIjNcKtwDP%2Bu5l4%2BWGuQfm9xZL%2B8VSArap6N6Xi4q1T09PQvPVZin8K4QR3cO4e3ZcxFTxZVlDsYh1NNxr5sL5xl7W2bWNoXGAXACbfePNxUUA1%2BU%2BZLlHTpXFDZ2cfl%2BZMWdyH7PVCsk%2FVDkUfr41y5aC1Dce%2FN992a0Qmn39GH7YCC%2BYeQ7yP8SN2XTYBiuLXmMpEUky4BqANZtgY6XKj4MTDM5XC1s84Nln4SXx0111WX6WZSJZoR1%2FgEappBaRErj1TZgqDw3xkkc6Bf7OfUm1SyZTwiZj76ZuvckciruLyUtw94ImdFvbrTtsWBQrfZuc49XAwUEOWHmik%2ForfrEi9NYS0zZdoJlLZKLWTgZM32Ni6%2FyilxfYTC4Veu%2Frkp90wdy%2BD%2BHtDshtQgeoptNMEkhxj7Q90bF96sVVsBtVCMhzWI6G9AoogpiZtf97ySfKGEWoo6OnAT%2B9RLBmOUURYZeEK7M8x4P6gdPIm9cGWgMYNUMdZp0ME8eZSLA70nByUgwIDYQDDtcSAItS7Icveiyp8PtEpgFYUG%2FGxAm4mAIN25ocUvzWool2%2FgBqUhmihz02aeOC8Dh6JDg87K8BfiyRtbjU4oWMpPWswuVJcPDaWJmi9hvfmBqA1ukimUw3Pb6vgY6pgGQSb0ZkEH4OYa0wpr0uHhUhPBUGzOchhbky4JK%2FZsblyKzEHScgI%2BbOr0BreEkg7nJa4mMRuKcE%2FYyLVKZCXZD2F%2B7ger%2BH9vSgVbd5li8V4t4lgav76tOyTkVxfrg2%2BsIrlwQ%2BI4I24mI2lX0E1orKsqr7yXFr4ovZfjbo9Mw0pa%2BTEEMrm%2BVx5Ce53XVhLlq%2BPEaiehl3SM9lLN9030fGAwzTmDz&X-Amz-Signature=475fd01a7e080843ab1dec17f2fba3afa4a693e485b0cba614540d908be2d360&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653LVOHQK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDfe3njhbqcmWefrnYQdf58JHOVTH51Ozx%2BFojf4KB%2FqAiBtBqWFLPOxNv0smQpf%2FbevEeKxosnTvRu6JTwJqJ6uSiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi0o8c%2Btpg1PaIjNcKtwDP%2Bu5l4%2BWGuQfm9xZL%2B8VSArap6N6Xi4q1T09PQvPVZin8K4QR3cO4e3ZcxFTxZVlDsYh1NNxr5sL5xl7W2bWNoXGAXACbfePNxUUA1%2BU%2BZLlHTpXFDZ2cfl%2BZMWdyH7PVCsk%2FVDkUfr41y5aC1Dce%2FN992a0Qmn39GH7YCC%2BYeQ7yP8SN2XTYBiuLXmMpEUky4BqANZtgY6XKj4MTDM5XC1s84Nln4SXx0111WX6WZSJZoR1%2FgEappBaRErj1TZgqDw3xkkc6Bf7OfUm1SyZTwiZj76ZuvckciruLyUtw94ImdFvbrTtsWBQrfZuc49XAwUEOWHmik%2ForfrEi9NYS0zZdoJlLZKLWTgZM32Ni6%2FyilxfYTC4Veu%2Frkp90wdy%2BD%2BHtDshtQgeoptNMEkhxj7Q90bF96sVVsBtVCMhzWI6G9AoogpiZtf97ySfKGEWoo6OnAT%2B9RLBmOUURYZeEK7M8x4P6gdPIm9cGWgMYNUMdZp0ME8eZSLA70nByUgwIDYQDDtcSAItS7Icveiyp8PtEpgFYUG%2FGxAm4mAIN25ocUvzWool2%2FgBqUhmihz02aeOC8Dh6JDg87K8BfiyRtbjU4oWMpPWswuVJcPDaWJmi9hvfmBqA1ukimUw3Pb6vgY6pgGQSb0ZkEH4OYa0wpr0uHhUhPBUGzOchhbky4JK%2FZsblyKzEHScgI%2BbOr0BreEkg7nJa4mMRuKcE%2FYyLVKZCXZD2F%2B7ger%2BH9vSgVbd5li8V4t4lgav76tOyTkVxfrg2%2BsIrlwQ%2BI4I24mI2lX0E1orKsqr7yXFr4ovZfjbo9Mw0pa%2BTEEMrm%2BVx5Ce53XVhLlq%2BPEaiehl3SM9lLN9030fGAwzTmDz&X-Amz-Signature=fdcdee304b5aa17fe48b38254a06ee4dfe18165e0a488cffb1d1259eed828fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653LVOHQK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDfe3njhbqcmWefrnYQdf58JHOVTH51Ozx%2BFojf4KB%2FqAiBtBqWFLPOxNv0smQpf%2FbevEeKxosnTvRu6JTwJqJ6uSiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi0o8c%2Btpg1PaIjNcKtwDP%2Bu5l4%2BWGuQfm9xZL%2B8VSArap6N6Xi4q1T09PQvPVZin8K4QR3cO4e3ZcxFTxZVlDsYh1NNxr5sL5xl7W2bWNoXGAXACbfePNxUUA1%2BU%2BZLlHTpXFDZ2cfl%2BZMWdyH7PVCsk%2FVDkUfr41y5aC1Dce%2FN992a0Qmn39GH7YCC%2BYeQ7yP8SN2XTYBiuLXmMpEUky4BqANZtgY6XKj4MTDM5XC1s84Nln4SXx0111WX6WZSJZoR1%2FgEappBaRErj1TZgqDw3xkkc6Bf7OfUm1SyZTwiZj76ZuvckciruLyUtw94ImdFvbrTtsWBQrfZuc49XAwUEOWHmik%2ForfrEi9NYS0zZdoJlLZKLWTgZM32Ni6%2FyilxfYTC4Veu%2Frkp90wdy%2BD%2BHtDshtQgeoptNMEkhxj7Q90bF96sVVsBtVCMhzWI6G9AoogpiZtf97ySfKGEWoo6OnAT%2B9RLBmOUURYZeEK7M8x4P6gdPIm9cGWgMYNUMdZp0ME8eZSLA70nByUgwIDYQDDtcSAItS7Icveiyp8PtEpgFYUG%2FGxAm4mAIN25ocUvzWool2%2FgBqUhmihz02aeOC8Dh6JDg87K8BfiyRtbjU4oWMpPWswuVJcPDaWJmi9hvfmBqA1ukimUw3Pb6vgY6pgGQSb0ZkEH4OYa0wpr0uHhUhPBUGzOchhbky4JK%2FZsblyKzEHScgI%2BbOr0BreEkg7nJa4mMRuKcE%2FYyLVKZCXZD2F%2B7ger%2BH9vSgVbd5li8V4t4lgav76tOyTkVxfrg2%2BsIrlwQ%2BI4I24mI2lX0E1orKsqr7yXFr4ovZfjbo9Mw0pa%2BTEEMrm%2BVx5Ce53XVhLlq%2BPEaiehl3SM9lLN9030fGAwzTmDz&X-Amz-Signature=8aa4c40262bcd15dba13125f830ed6b119fecc3a48b96a494d599ddb1e1ee517&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653LVOHQK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDfe3njhbqcmWefrnYQdf58JHOVTH51Ozx%2BFojf4KB%2FqAiBtBqWFLPOxNv0smQpf%2FbevEeKxosnTvRu6JTwJqJ6uSiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi0o8c%2Btpg1PaIjNcKtwDP%2Bu5l4%2BWGuQfm9xZL%2B8VSArap6N6Xi4q1T09PQvPVZin8K4QR3cO4e3ZcxFTxZVlDsYh1NNxr5sL5xl7W2bWNoXGAXACbfePNxUUA1%2BU%2BZLlHTpXFDZ2cfl%2BZMWdyH7PVCsk%2FVDkUfr41y5aC1Dce%2FN992a0Qmn39GH7YCC%2BYeQ7yP8SN2XTYBiuLXmMpEUky4BqANZtgY6XKj4MTDM5XC1s84Nln4SXx0111WX6WZSJZoR1%2FgEappBaRErj1TZgqDw3xkkc6Bf7OfUm1SyZTwiZj76ZuvckciruLyUtw94ImdFvbrTtsWBQrfZuc49XAwUEOWHmik%2ForfrEi9NYS0zZdoJlLZKLWTgZM32Ni6%2FyilxfYTC4Veu%2Frkp90wdy%2BD%2BHtDshtQgeoptNMEkhxj7Q90bF96sVVsBtVCMhzWI6G9AoogpiZtf97ySfKGEWoo6OnAT%2B9RLBmOUURYZeEK7M8x4P6gdPIm9cGWgMYNUMdZp0ME8eZSLA70nByUgwIDYQDDtcSAItS7Icveiyp8PtEpgFYUG%2FGxAm4mAIN25ocUvzWool2%2FgBqUhmihz02aeOC8Dh6JDg87K8BfiyRtbjU4oWMpPWswuVJcPDaWJmi9hvfmBqA1ukimUw3Pb6vgY6pgGQSb0ZkEH4OYa0wpr0uHhUhPBUGzOchhbky4JK%2FZsblyKzEHScgI%2BbOr0BreEkg7nJa4mMRuKcE%2FYyLVKZCXZD2F%2B7ger%2BH9vSgVbd5li8V4t4lgav76tOyTkVxfrg2%2BsIrlwQ%2BI4I24mI2lX0E1orKsqr7yXFr4ovZfjbo9Mw0pa%2BTEEMrm%2BVx5Ce53XVhLlq%2BPEaiehl3SM9lLN9030fGAwzTmDz&X-Amz-Signature=e3acffb732ec284427099fc71a0963e38bd2603794a5f5b0086cdf19e2b1b235&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653LVOHQK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDfe3njhbqcmWefrnYQdf58JHOVTH51Ozx%2BFojf4KB%2FqAiBtBqWFLPOxNv0smQpf%2FbevEeKxosnTvRu6JTwJqJ6uSiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi0o8c%2Btpg1PaIjNcKtwDP%2Bu5l4%2BWGuQfm9xZL%2B8VSArap6N6Xi4q1T09PQvPVZin8K4QR3cO4e3ZcxFTxZVlDsYh1NNxr5sL5xl7W2bWNoXGAXACbfePNxUUA1%2BU%2BZLlHTpXFDZ2cfl%2BZMWdyH7PVCsk%2FVDkUfr41y5aC1Dce%2FN992a0Qmn39GH7YCC%2BYeQ7yP8SN2XTYBiuLXmMpEUky4BqANZtgY6XKj4MTDM5XC1s84Nln4SXx0111WX6WZSJZoR1%2FgEappBaRErj1TZgqDw3xkkc6Bf7OfUm1SyZTwiZj76ZuvckciruLyUtw94ImdFvbrTtsWBQrfZuc49XAwUEOWHmik%2ForfrEi9NYS0zZdoJlLZKLWTgZM32Ni6%2FyilxfYTC4Veu%2Frkp90wdy%2BD%2BHtDshtQgeoptNMEkhxj7Q90bF96sVVsBtVCMhzWI6G9AoogpiZtf97ySfKGEWoo6OnAT%2B9RLBmOUURYZeEK7M8x4P6gdPIm9cGWgMYNUMdZp0ME8eZSLA70nByUgwIDYQDDtcSAItS7Icveiyp8PtEpgFYUG%2FGxAm4mAIN25ocUvzWool2%2FgBqUhmihz02aeOC8Dh6JDg87K8BfiyRtbjU4oWMpPWswuVJcPDaWJmi9hvfmBqA1ukimUw3Pb6vgY6pgGQSb0ZkEH4OYa0wpr0uHhUhPBUGzOchhbky4JK%2FZsblyKzEHScgI%2BbOr0BreEkg7nJa4mMRuKcE%2FYyLVKZCXZD2F%2B7ger%2BH9vSgVbd5li8V4t4lgav76tOyTkVxfrg2%2BsIrlwQ%2BI4I24mI2lX0E1orKsqr7yXFr4ovZfjbo9Mw0pa%2BTEEMrm%2BVx5Ce53XVhLlq%2BPEaiehl3SM9lLN9030fGAwzTmDz&X-Amz-Signature=767ef9e7f462641b50847a2d3b1fa5cc090e57f0407aabf2ac50dcc900182647&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
