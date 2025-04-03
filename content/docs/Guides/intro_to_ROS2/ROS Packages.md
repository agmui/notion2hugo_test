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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNK4YFXL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH9hQhnbsYxtWhFBWhLAlzCIDq33PTZm%2FNKs%2FWVwp9iAiAukcKcuIN%2Fiy6IMpAHxkd7vglg0F%2FK3hOdVgONjTBkOiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZA9l1GYRge%2Ff2EVVKtwDnNGiNWmV2IukLul%2BwTX%2FIN4qlrmmP3etY8ARe2gR%2F8lLccgddocyNnlVwa6WdajNhBPwFKpfTmqdBhCht4b7l%2BJ1NIOFMhvTQtf%2FnxVn1TsNFGJ%2BD88D2b1Z5hEsxd2OeR5N6kvjIqMztN1sZVHzDMFxQZRy10qgxHMclIrMoCoeDV9d4uuRG5%2F5dhuLxY5QuSwgy82E6JL8xdRGLYDsWOs7hh%2FfLIC6GSVA%2FseLny0LBB%2Fy8i%2BE1fSBOfMbwIG5fcK1IQwGJ9Rglj44FR2H9tTCYy95FRVfo%2FE%2FDknwIsOqijms99KB36WuNtSzlKxDSJdqXdavE3IYHr%2FGhx7%2BQ7xZvcfOYd%2F6Mu%2BEy1lbQ7T08Jtw3XQe3%2BBl8EB31O4jaszJu2dHIcN50RDvkBH7KhmkjkDC%2FzJ5R2szJEY40ESVHaR92lL49la7XPDmeI9rgFlXZ68%2BowpKuQhF5oHV4GyWiKLWvyekEGYG21EC2BMsvnPPiDaElo0hYA3PiNRi3lHEITp2TspsQ7Rzcv%2BQViwnmpQalYFGnOkL1TTnyIi6opJ4Rit75cz%2Fn6hvRV3ej3cwYP4QepAI6Uwx6%2Few3WjryRzCRtlJBvl46xN9a450BDV09sqUtaFTIdQwrNG7vwY6pgEWrnrKFnlKJ4DsRa6Fe5cfSDfCEENE2Dpg%2F%2Bft%2F4Lnk3Ka6XVrExFKAe8w2yzP%2FhnP7XfMEHfcwpJokKoLI2u16yKaOXQCt4MnWrM7fTP4aRAbSseAZ2Chsu7SqYMRGQwqIG9rStC10rvlVt%2BjmZnHN36WfL8n5vGjD5bvADQ491PJefpIdKLrGOGJ2CaBlG0P3zrZ4Hnnx60kEnNzK0MVOUTt0NbC&X-Amz-Signature=3f1e988d413ec0bb8e023c1daccc58688e591b0708ba9348ec523d68bab8f0be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNK4YFXL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH9hQhnbsYxtWhFBWhLAlzCIDq33PTZm%2FNKs%2FWVwp9iAiAukcKcuIN%2Fiy6IMpAHxkd7vglg0F%2FK3hOdVgONjTBkOiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZA9l1GYRge%2Ff2EVVKtwDnNGiNWmV2IukLul%2BwTX%2FIN4qlrmmP3etY8ARe2gR%2F8lLccgddocyNnlVwa6WdajNhBPwFKpfTmqdBhCht4b7l%2BJ1NIOFMhvTQtf%2FnxVn1TsNFGJ%2BD88D2b1Z5hEsxd2OeR5N6kvjIqMztN1sZVHzDMFxQZRy10qgxHMclIrMoCoeDV9d4uuRG5%2F5dhuLxY5QuSwgy82E6JL8xdRGLYDsWOs7hh%2FfLIC6GSVA%2FseLny0LBB%2Fy8i%2BE1fSBOfMbwIG5fcK1IQwGJ9Rglj44FR2H9tTCYy95FRVfo%2FE%2FDknwIsOqijms99KB36WuNtSzlKxDSJdqXdavE3IYHr%2FGhx7%2BQ7xZvcfOYd%2F6Mu%2BEy1lbQ7T08Jtw3XQe3%2BBl8EB31O4jaszJu2dHIcN50RDvkBH7KhmkjkDC%2FzJ5R2szJEY40ESVHaR92lL49la7XPDmeI9rgFlXZ68%2BowpKuQhF5oHV4GyWiKLWvyekEGYG21EC2BMsvnPPiDaElo0hYA3PiNRi3lHEITp2TspsQ7Rzcv%2BQViwnmpQalYFGnOkL1TTnyIi6opJ4Rit75cz%2Fn6hvRV3ej3cwYP4QepAI6Uwx6%2Few3WjryRzCRtlJBvl46xN9a450BDV09sqUtaFTIdQwrNG7vwY6pgEWrnrKFnlKJ4DsRa6Fe5cfSDfCEENE2Dpg%2F%2Bft%2F4Lnk3Ka6XVrExFKAe8w2yzP%2FhnP7XfMEHfcwpJokKoLI2u16yKaOXQCt4MnWrM7fTP4aRAbSseAZ2Chsu7SqYMRGQwqIG9rStC10rvlVt%2BjmZnHN36WfL8n5vGjD5bvADQ491PJefpIdKLrGOGJ2CaBlG0P3zrZ4Hnnx60kEnNzK0MVOUTt0NbC&X-Amz-Signature=6fce5edcfe734c00317616457cdc519fd9d76fa3e0d1b25f176cbfd60bd4c536&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNK4YFXL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH9hQhnbsYxtWhFBWhLAlzCIDq33PTZm%2FNKs%2FWVwp9iAiAukcKcuIN%2Fiy6IMpAHxkd7vglg0F%2FK3hOdVgONjTBkOiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZA9l1GYRge%2Ff2EVVKtwDnNGiNWmV2IukLul%2BwTX%2FIN4qlrmmP3etY8ARe2gR%2F8lLccgddocyNnlVwa6WdajNhBPwFKpfTmqdBhCht4b7l%2BJ1NIOFMhvTQtf%2FnxVn1TsNFGJ%2BD88D2b1Z5hEsxd2OeR5N6kvjIqMztN1sZVHzDMFxQZRy10qgxHMclIrMoCoeDV9d4uuRG5%2F5dhuLxY5QuSwgy82E6JL8xdRGLYDsWOs7hh%2FfLIC6GSVA%2FseLny0LBB%2Fy8i%2BE1fSBOfMbwIG5fcK1IQwGJ9Rglj44FR2H9tTCYy95FRVfo%2FE%2FDknwIsOqijms99KB36WuNtSzlKxDSJdqXdavE3IYHr%2FGhx7%2BQ7xZvcfOYd%2F6Mu%2BEy1lbQ7T08Jtw3XQe3%2BBl8EB31O4jaszJu2dHIcN50RDvkBH7KhmkjkDC%2FzJ5R2szJEY40ESVHaR92lL49la7XPDmeI9rgFlXZ68%2BowpKuQhF5oHV4GyWiKLWvyekEGYG21EC2BMsvnPPiDaElo0hYA3PiNRi3lHEITp2TspsQ7Rzcv%2BQViwnmpQalYFGnOkL1TTnyIi6opJ4Rit75cz%2Fn6hvRV3ej3cwYP4QepAI6Uwx6%2Few3WjryRzCRtlJBvl46xN9a450BDV09sqUtaFTIdQwrNG7vwY6pgEWrnrKFnlKJ4DsRa6Fe5cfSDfCEENE2Dpg%2F%2Bft%2F4Lnk3Ka6XVrExFKAe8w2yzP%2FhnP7XfMEHfcwpJokKoLI2u16yKaOXQCt4MnWrM7fTP4aRAbSseAZ2Chsu7SqYMRGQwqIG9rStC10rvlVt%2BjmZnHN36WfL8n5vGjD5bvADQ491PJefpIdKLrGOGJ2CaBlG0P3zrZ4Hnnx60kEnNzK0MVOUTt0NbC&X-Amz-Signature=30e360797eabf4a5ad3d85c3b1c4de85acd966354f09fd7ebe708337e7e6662a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNK4YFXL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH9hQhnbsYxtWhFBWhLAlzCIDq33PTZm%2FNKs%2FWVwp9iAiAukcKcuIN%2Fiy6IMpAHxkd7vglg0F%2FK3hOdVgONjTBkOiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZA9l1GYRge%2Ff2EVVKtwDnNGiNWmV2IukLul%2BwTX%2FIN4qlrmmP3etY8ARe2gR%2F8lLccgddocyNnlVwa6WdajNhBPwFKpfTmqdBhCht4b7l%2BJ1NIOFMhvTQtf%2FnxVn1TsNFGJ%2BD88D2b1Z5hEsxd2OeR5N6kvjIqMztN1sZVHzDMFxQZRy10qgxHMclIrMoCoeDV9d4uuRG5%2F5dhuLxY5QuSwgy82E6JL8xdRGLYDsWOs7hh%2FfLIC6GSVA%2FseLny0LBB%2Fy8i%2BE1fSBOfMbwIG5fcK1IQwGJ9Rglj44FR2H9tTCYy95FRVfo%2FE%2FDknwIsOqijms99KB36WuNtSzlKxDSJdqXdavE3IYHr%2FGhx7%2BQ7xZvcfOYd%2F6Mu%2BEy1lbQ7T08Jtw3XQe3%2BBl8EB31O4jaszJu2dHIcN50RDvkBH7KhmkjkDC%2FzJ5R2szJEY40ESVHaR92lL49la7XPDmeI9rgFlXZ68%2BowpKuQhF5oHV4GyWiKLWvyekEGYG21EC2BMsvnPPiDaElo0hYA3PiNRi3lHEITp2TspsQ7Rzcv%2BQViwnmpQalYFGnOkL1TTnyIi6opJ4Rit75cz%2Fn6hvRV3ej3cwYP4QepAI6Uwx6%2Few3WjryRzCRtlJBvl46xN9a450BDV09sqUtaFTIdQwrNG7vwY6pgEWrnrKFnlKJ4DsRa6Fe5cfSDfCEENE2Dpg%2F%2Bft%2F4Lnk3Ka6XVrExFKAe8w2yzP%2FhnP7XfMEHfcwpJokKoLI2u16yKaOXQCt4MnWrM7fTP4aRAbSseAZ2Chsu7SqYMRGQwqIG9rStC10rvlVt%2BjmZnHN36WfL8n5vGjD5bvADQ491PJefpIdKLrGOGJ2CaBlG0P3zrZ4Hnnx60kEnNzK0MVOUTt0NbC&X-Amz-Signature=ce16f1958fbb9a074db357a6c56fc48375fa58ce48db0292135e7a18483349a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNK4YFXL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH9hQhnbsYxtWhFBWhLAlzCIDq33PTZm%2FNKs%2FWVwp9iAiAukcKcuIN%2Fiy6IMpAHxkd7vglg0F%2FK3hOdVgONjTBkOiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZA9l1GYRge%2Ff2EVVKtwDnNGiNWmV2IukLul%2BwTX%2FIN4qlrmmP3etY8ARe2gR%2F8lLccgddocyNnlVwa6WdajNhBPwFKpfTmqdBhCht4b7l%2BJ1NIOFMhvTQtf%2FnxVn1TsNFGJ%2BD88D2b1Z5hEsxd2OeR5N6kvjIqMztN1sZVHzDMFxQZRy10qgxHMclIrMoCoeDV9d4uuRG5%2F5dhuLxY5QuSwgy82E6JL8xdRGLYDsWOs7hh%2FfLIC6GSVA%2FseLny0LBB%2Fy8i%2BE1fSBOfMbwIG5fcK1IQwGJ9Rglj44FR2H9tTCYy95FRVfo%2FE%2FDknwIsOqijms99KB36WuNtSzlKxDSJdqXdavE3IYHr%2FGhx7%2BQ7xZvcfOYd%2F6Mu%2BEy1lbQ7T08Jtw3XQe3%2BBl8EB31O4jaszJu2dHIcN50RDvkBH7KhmkjkDC%2FzJ5R2szJEY40ESVHaR92lL49la7XPDmeI9rgFlXZ68%2BowpKuQhF5oHV4GyWiKLWvyekEGYG21EC2BMsvnPPiDaElo0hYA3PiNRi3lHEITp2TspsQ7Rzcv%2BQViwnmpQalYFGnOkL1TTnyIi6opJ4Rit75cz%2Fn6hvRV3ej3cwYP4QepAI6Uwx6%2Few3WjryRzCRtlJBvl46xN9a450BDV09sqUtaFTIdQwrNG7vwY6pgEWrnrKFnlKJ4DsRa6Fe5cfSDfCEENE2Dpg%2F%2Bft%2F4Lnk3Ka6XVrExFKAe8w2yzP%2FhnP7XfMEHfcwpJokKoLI2u16yKaOXQCt4MnWrM7fTP4aRAbSseAZ2Chsu7SqYMRGQwqIG9rStC10rvlVt%2BjmZnHN36WfL8n5vGjD5bvADQ491PJefpIdKLrGOGJ2CaBlG0P3zrZ4Hnnx60kEnNzK0MVOUTt0NbC&X-Amz-Signature=d604de129f1e5665b6ca419c401dde601bf954c5e59941579f5a0c12476561c8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNK4YFXL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH9hQhnbsYxtWhFBWhLAlzCIDq33PTZm%2FNKs%2FWVwp9iAiAukcKcuIN%2Fiy6IMpAHxkd7vglg0F%2FK3hOdVgONjTBkOiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZA9l1GYRge%2Ff2EVVKtwDnNGiNWmV2IukLul%2BwTX%2FIN4qlrmmP3etY8ARe2gR%2F8lLccgddocyNnlVwa6WdajNhBPwFKpfTmqdBhCht4b7l%2BJ1NIOFMhvTQtf%2FnxVn1TsNFGJ%2BD88D2b1Z5hEsxd2OeR5N6kvjIqMztN1sZVHzDMFxQZRy10qgxHMclIrMoCoeDV9d4uuRG5%2F5dhuLxY5QuSwgy82E6JL8xdRGLYDsWOs7hh%2FfLIC6GSVA%2FseLny0LBB%2Fy8i%2BE1fSBOfMbwIG5fcK1IQwGJ9Rglj44FR2H9tTCYy95FRVfo%2FE%2FDknwIsOqijms99KB36WuNtSzlKxDSJdqXdavE3IYHr%2FGhx7%2BQ7xZvcfOYd%2F6Mu%2BEy1lbQ7T08Jtw3XQe3%2BBl8EB31O4jaszJu2dHIcN50RDvkBH7KhmkjkDC%2FzJ5R2szJEY40ESVHaR92lL49la7XPDmeI9rgFlXZ68%2BowpKuQhF5oHV4GyWiKLWvyekEGYG21EC2BMsvnPPiDaElo0hYA3PiNRi3lHEITp2TspsQ7Rzcv%2BQViwnmpQalYFGnOkL1TTnyIi6opJ4Rit75cz%2Fn6hvRV3ej3cwYP4QepAI6Uwx6%2Few3WjryRzCRtlJBvl46xN9a450BDV09sqUtaFTIdQwrNG7vwY6pgEWrnrKFnlKJ4DsRa6Fe5cfSDfCEENE2Dpg%2F%2Bft%2F4Lnk3Ka6XVrExFKAe8w2yzP%2FhnP7XfMEHfcwpJokKoLI2u16yKaOXQCt4MnWrM7fTP4aRAbSseAZ2Chsu7SqYMRGQwqIG9rStC10rvlVt%2BjmZnHN36WfL8n5vGjD5bvADQ491PJefpIdKLrGOGJ2CaBlG0P3zrZ4Hnnx60kEnNzK0MVOUTt0NbC&X-Amz-Signature=13365db624911d37e00d8ffe95c8142434b4bd5e43c26fefb9b39c1c2e9599f1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNK4YFXL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAH9hQhnbsYxtWhFBWhLAlzCIDq33PTZm%2FNKs%2FWVwp9iAiAukcKcuIN%2Fiy6IMpAHxkd7vglg0F%2FK3hOdVgONjTBkOiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZA9l1GYRge%2Ff2EVVKtwDnNGiNWmV2IukLul%2BwTX%2FIN4qlrmmP3etY8ARe2gR%2F8lLccgddocyNnlVwa6WdajNhBPwFKpfTmqdBhCht4b7l%2BJ1NIOFMhvTQtf%2FnxVn1TsNFGJ%2BD88D2b1Z5hEsxd2OeR5N6kvjIqMztN1sZVHzDMFxQZRy10qgxHMclIrMoCoeDV9d4uuRG5%2F5dhuLxY5QuSwgy82E6JL8xdRGLYDsWOs7hh%2FfLIC6GSVA%2FseLny0LBB%2Fy8i%2BE1fSBOfMbwIG5fcK1IQwGJ9Rglj44FR2H9tTCYy95FRVfo%2FE%2FDknwIsOqijms99KB36WuNtSzlKxDSJdqXdavE3IYHr%2FGhx7%2BQ7xZvcfOYd%2F6Mu%2BEy1lbQ7T08Jtw3XQe3%2BBl8EB31O4jaszJu2dHIcN50RDvkBH7KhmkjkDC%2FzJ5R2szJEY40ESVHaR92lL49la7XPDmeI9rgFlXZ68%2BowpKuQhF5oHV4GyWiKLWvyekEGYG21EC2BMsvnPPiDaElo0hYA3PiNRi3lHEITp2TspsQ7Rzcv%2BQViwnmpQalYFGnOkL1TTnyIi6opJ4Rit75cz%2Fn6hvRV3ej3cwYP4QepAI6Uwx6%2Few3WjryRzCRtlJBvl46xN9a450BDV09sqUtaFTIdQwrNG7vwY6pgEWrnrKFnlKJ4DsRa6Fe5cfSDfCEENE2Dpg%2F%2Bft%2F4Lnk3Ka6XVrExFKAe8w2yzP%2FhnP7XfMEHfcwpJokKoLI2u16yKaOXQCt4MnWrM7fTP4aRAbSseAZ2Chsu7SqYMRGQwqIG9rStC10rvlVt%2BjmZnHN36WfL8n5vGjD5bvADQ491PJefpIdKLrGOGJ2CaBlG0P3zrZ4Hnnx60kEnNzK0MVOUTt0NbC&X-Amz-Signature=65ce1d33fc270966616e0e819a2e071d54f33bd10e5d4b5f02b5450efb2b5ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
