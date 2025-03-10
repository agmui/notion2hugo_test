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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYRW3MK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICk%2BaLXC%2F8koqQG1%2FvTH0ZijhauqzIdywed02J9uGoJzAiAUx87%2BF3XQCrgUMc3DjD%2BK%2BVAJGMhOKNB%2Fpke14X1JRCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoSLRsq6CcfV8AHKtwDCpKSVtqawGwaBLDHki5nEzdDpPq3sBi%2FUYe2suo%2Bj6tkITsfpyaKpCCTH76WOtjpfiN1jSjrkJC8YSf89H14TE8UApjsV70%2Fsnti9nkA86Z4DegxifY3oZ4Q%2BzT6huFdYwY7vo1LxmlxZ0B%2Fgy3l6oSDbsyelAnZ2mERrbF5%2BraxTde5ku8FBE3fxJgwsVIqDbA0fKJJhCRUj1Y4tOgO1gk5Nt1MlWHZwt%2F2exPvp8THHuZLHUDFm6KGpZeco6qhhuaYZOXtQueaWoaXDAPpO5xHoH3XMLEm0K92yjB9j4ZYR%2FN3PFYju33%2B65Cscwe7MnTGDuG%2BtEiDpjoWpFrMxcMPnKersvDijfv76zAgWTmD%2F%2BDkZ2uuHwLpSrGBAwIJy5s%2B2orNziGjFyoOMM0M69VOJAI2Gese26oO7qqj1%2FagjBzC%2F7tatVSZ5zbxu3wWeHe4nK1kKmOC0G5FCLdFm9s6VgCwci%2B6M%2BPuee%2B6m4SUn1yTw%2FoWK8eJR4fuP3NcAc3VoGmCNv2Yyb7916jM%2FsJFTCPySXD3SlMKXO%2BakNpAOBZr8sQrm7XdkDzBpfi5c75J9%2F1sEM3AMjqvbc8BypgwDxWaQNdIxftoBKqN1pA%2Bzy5JRF5mnEkBDNgw%2F4u9vgY6pgFt4XxQLhuH%2F4jvoWawtduBsqHryNh3dvmwuaCT9Xo2DEHXyqVb6ZLg3LYh78ZPq5WKKNOAxHkWzMeLn9Cm7Pg2TyXexo%2BPNDHMUAlDWTCpQ8G7eCNRH806%2BqZxJ9L9iOwURsZPbTErWnSZTQeEzTDIeaIb7Q1Fgsdnj7bn7500Jb1ltcQ8NbFAaH%2BWHxDKrh9QPavWkDUkE%2F2ZTAh43MqRY8yZkXCd&X-Amz-Signature=c3ebc08381f2af5beaca7b44e19cf905b45968d43516afc6d95b7d15535e60c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYRW3MK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICk%2BaLXC%2F8koqQG1%2FvTH0ZijhauqzIdywed02J9uGoJzAiAUx87%2BF3XQCrgUMc3DjD%2BK%2BVAJGMhOKNB%2Fpke14X1JRCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoSLRsq6CcfV8AHKtwDCpKSVtqawGwaBLDHki5nEzdDpPq3sBi%2FUYe2suo%2Bj6tkITsfpyaKpCCTH76WOtjpfiN1jSjrkJC8YSf89H14TE8UApjsV70%2Fsnti9nkA86Z4DegxifY3oZ4Q%2BzT6huFdYwY7vo1LxmlxZ0B%2Fgy3l6oSDbsyelAnZ2mERrbF5%2BraxTde5ku8FBE3fxJgwsVIqDbA0fKJJhCRUj1Y4tOgO1gk5Nt1MlWHZwt%2F2exPvp8THHuZLHUDFm6KGpZeco6qhhuaYZOXtQueaWoaXDAPpO5xHoH3XMLEm0K92yjB9j4ZYR%2FN3PFYju33%2B65Cscwe7MnTGDuG%2BtEiDpjoWpFrMxcMPnKersvDijfv76zAgWTmD%2F%2BDkZ2uuHwLpSrGBAwIJy5s%2B2orNziGjFyoOMM0M69VOJAI2Gese26oO7qqj1%2FagjBzC%2F7tatVSZ5zbxu3wWeHe4nK1kKmOC0G5FCLdFm9s6VgCwci%2B6M%2BPuee%2B6m4SUn1yTw%2FoWK8eJR4fuP3NcAc3VoGmCNv2Yyb7916jM%2FsJFTCPySXD3SlMKXO%2BakNpAOBZr8sQrm7XdkDzBpfi5c75J9%2F1sEM3AMjqvbc8BypgwDxWaQNdIxftoBKqN1pA%2Bzy5JRF5mnEkBDNgw%2F4u9vgY6pgFt4XxQLhuH%2F4jvoWawtduBsqHryNh3dvmwuaCT9Xo2DEHXyqVb6ZLg3LYh78ZPq5WKKNOAxHkWzMeLn9Cm7Pg2TyXexo%2BPNDHMUAlDWTCpQ8G7eCNRH806%2BqZxJ9L9iOwURsZPbTErWnSZTQeEzTDIeaIb7Q1Fgsdnj7bn7500Jb1ltcQ8NbFAaH%2BWHxDKrh9QPavWkDUkE%2F2ZTAh43MqRY8yZkXCd&X-Amz-Signature=acc88017b98faa8c3141780f42dc1b2c1479745be58e40cc7f8c596171fc49e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYRW3MK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICk%2BaLXC%2F8koqQG1%2FvTH0ZijhauqzIdywed02J9uGoJzAiAUx87%2BF3XQCrgUMc3DjD%2BK%2BVAJGMhOKNB%2Fpke14X1JRCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoSLRsq6CcfV8AHKtwDCpKSVtqawGwaBLDHki5nEzdDpPq3sBi%2FUYe2suo%2Bj6tkITsfpyaKpCCTH76WOtjpfiN1jSjrkJC8YSf89H14TE8UApjsV70%2Fsnti9nkA86Z4DegxifY3oZ4Q%2BzT6huFdYwY7vo1LxmlxZ0B%2Fgy3l6oSDbsyelAnZ2mERrbF5%2BraxTde5ku8FBE3fxJgwsVIqDbA0fKJJhCRUj1Y4tOgO1gk5Nt1MlWHZwt%2F2exPvp8THHuZLHUDFm6KGpZeco6qhhuaYZOXtQueaWoaXDAPpO5xHoH3XMLEm0K92yjB9j4ZYR%2FN3PFYju33%2B65Cscwe7MnTGDuG%2BtEiDpjoWpFrMxcMPnKersvDijfv76zAgWTmD%2F%2BDkZ2uuHwLpSrGBAwIJy5s%2B2orNziGjFyoOMM0M69VOJAI2Gese26oO7qqj1%2FagjBzC%2F7tatVSZ5zbxu3wWeHe4nK1kKmOC0G5FCLdFm9s6VgCwci%2B6M%2BPuee%2B6m4SUn1yTw%2FoWK8eJR4fuP3NcAc3VoGmCNv2Yyb7916jM%2FsJFTCPySXD3SlMKXO%2BakNpAOBZr8sQrm7XdkDzBpfi5c75J9%2F1sEM3AMjqvbc8BypgwDxWaQNdIxftoBKqN1pA%2Bzy5JRF5mnEkBDNgw%2F4u9vgY6pgFt4XxQLhuH%2F4jvoWawtduBsqHryNh3dvmwuaCT9Xo2DEHXyqVb6ZLg3LYh78ZPq5WKKNOAxHkWzMeLn9Cm7Pg2TyXexo%2BPNDHMUAlDWTCpQ8G7eCNRH806%2BqZxJ9L9iOwURsZPbTErWnSZTQeEzTDIeaIb7Q1Fgsdnj7bn7500Jb1ltcQ8NbFAaH%2BWHxDKrh9QPavWkDUkE%2F2ZTAh43MqRY8yZkXCd&X-Amz-Signature=362ce43ae34235ec901483d4ed3ed9226eff94921385478160d4d9ae3e0cb625&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYRW3MK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICk%2BaLXC%2F8koqQG1%2FvTH0ZijhauqzIdywed02J9uGoJzAiAUx87%2BF3XQCrgUMc3DjD%2BK%2BVAJGMhOKNB%2Fpke14X1JRCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoSLRsq6CcfV8AHKtwDCpKSVtqawGwaBLDHki5nEzdDpPq3sBi%2FUYe2suo%2Bj6tkITsfpyaKpCCTH76WOtjpfiN1jSjrkJC8YSf89H14TE8UApjsV70%2Fsnti9nkA86Z4DegxifY3oZ4Q%2BzT6huFdYwY7vo1LxmlxZ0B%2Fgy3l6oSDbsyelAnZ2mERrbF5%2BraxTde5ku8FBE3fxJgwsVIqDbA0fKJJhCRUj1Y4tOgO1gk5Nt1MlWHZwt%2F2exPvp8THHuZLHUDFm6KGpZeco6qhhuaYZOXtQueaWoaXDAPpO5xHoH3XMLEm0K92yjB9j4ZYR%2FN3PFYju33%2B65Cscwe7MnTGDuG%2BtEiDpjoWpFrMxcMPnKersvDijfv76zAgWTmD%2F%2BDkZ2uuHwLpSrGBAwIJy5s%2B2orNziGjFyoOMM0M69VOJAI2Gese26oO7qqj1%2FagjBzC%2F7tatVSZ5zbxu3wWeHe4nK1kKmOC0G5FCLdFm9s6VgCwci%2B6M%2BPuee%2B6m4SUn1yTw%2FoWK8eJR4fuP3NcAc3VoGmCNv2Yyb7916jM%2FsJFTCPySXD3SlMKXO%2BakNpAOBZr8sQrm7XdkDzBpfi5c75J9%2F1sEM3AMjqvbc8BypgwDxWaQNdIxftoBKqN1pA%2Bzy5JRF5mnEkBDNgw%2F4u9vgY6pgFt4XxQLhuH%2F4jvoWawtduBsqHryNh3dvmwuaCT9Xo2DEHXyqVb6ZLg3LYh78ZPq5WKKNOAxHkWzMeLn9Cm7Pg2TyXexo%2BPNDHMUAlDWTCpQ8G7eCNRH806%2BqZxJ9L9iOwURsZPbTErWnSZTQeEzTDIeaIb7Q1Fgsdnj7bn7500Jb1ltcQ8NbFAaH%2BWHxDKrh9QPavWkDUkE%2F2ZTAh43MqRY8yZkXCd&X-Amz-Signature=0b781526449c327eff1ae84cf0715c3f0b9ff783f338607d11184c382a4573c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYRW3MK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICk%2BaLXC%2F8koqQG1%2FvTH0ZijhauqzIdywed02J9uGoJzAiAUx87%2BF3XQCrgUMc3DjD%2BK%2BVAJGMhOKNB%2Fpke14X1JRCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoSLRsq6CcfV8AHKtwDCpKSVtqawGwaBLDHki5nEzdDpPq3sBi%2FUYe2suo%2Bj6tkITsfpyaKpCCTH76WOtjpfiN1jSjrkJC8YSf89H14TE8UApjsV70%2Fsnti9nkA86Z4DegxifY3oZ4Q%2BzT6huFdYwY7vo1LxmlxZ0B%2Fgy3l6oSDbsyelAnZ2mERrbF5%2BraxTde5ku8FBE3fxJgwsVIqDbA0fKJJhCRUj1Y4tOgO1gk5Nt1MlWHZwt%2F2exPvp8THHuZLHUDFm6KGpZeco6qhhuaYZOXtQueaWoaXDAPpO5xHoH3XMLEm0K92yjB9j4ZYR%2FN3PFYju33%2B65Cscwe7MnTGDuG%2BtEiDpjoWpFrMxcMPnKersvDijfv76zAgWTmD%2F%2BDkZ2uuHwLpSrGBAwIJy5s%2B2orNziGjFyoOMM0M69VOJAI2Gese26oO7qqj1%2FagjBzC%2F7tatVSZ5zbxu3wWeHe4nK1kKmOC0G5FCLdFm9s6VgCwci%2B6M%2BPuee%2B6m4SUn1yTw%2FoWK8eJR4fuP3NcAc3VoGmCNv2Yyb7916jM%2FsJFTCPySXD3SlMKXO%2BakNpAOBZr8sQrm7XdkDzBpfi5c75J9%2F1sEM3AMjqvbc8BypgwDxWaQNdIxftoBKqN1pA%2Bzy5JRF5mnEkBDNgw%2F4u9vgY6pgFt4XxQLhuH%2F4jvoWawtduBsqHryNh3dvmwuaCT9Xo2DEHXyqVb6ZLg3LYh78ZPq5WKKNOAxHkWzMeLn9Cm7Pg2TyXexo%2BPNDHMUAlDWTCpQ8G7eCNRH806%2BqZxJ9L9iOwURsZPbTErWnSZTQeEzTDIeaIb7Q1Fgsdnj7bn7500Jb1ltcQ8NbFAaH%2BWHxDKrh9QPavWkDUkE%2F2ZTAh43MqRY8yZkXCd&X-Amz-Signature=35533fa6d7b3569acb3412c112dfa89acd3832c20c973dd8e37e4c5ee70f54a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYRW3MK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICk%2BaLXC%2F8koqQG1%2FvTH0ZijhauqzIdywed02J9uGoJzAiAUx87%2BF3XQCrgUMc3DjD%2BK%2BVAJGMhOKNB%2Fpke14X1JRCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoSLRsq6CcfV8AHKtwDCpKSVtqawGwaBLDHki5nEzdDpPq3sBi%2FUYe2suo%2Bj6tkITsfpyaKpCCTH76WOtjpfiN1jSjrkJC8YSf89H14TE8UApjsV70%2Fsnti9nkA86Z4DegxifY3oZ4Q%2BzT6huFdYwY7vo1LxmlxZ0B%2Fgy3l6oSDbsyelAnZ2mERrbF5%2BraxTde5ku8FBE3fxJgwsVIqDbA0fKJJhCRUj1Y4tOgO1gk5Nt1MlWHZwt%2F2exPvp8THHuZLHUDFm6KGpZeco6qhhuaYZOXtQueaWoaXDAPpO5xHoH3XMLEm0K92yjB9j4ZYR%2FN3PFYju33%2B65Cscwe7MnTGDuG%2BtEiDpjoWpFrMxcMPnKersvDijfv76zAgWTmD%2F%2BDkZ2uuHwLpSrGBAwIJy5s%2B2orNziGjFyoOMM0M69VOJAI2Gese26oO7qqj1%2FagjBzC%2F7tatVSZ5zbxu3wWeHe4nK1kKmOC0G5FCLdFm9s6VgCwci%2B6M%2BPuee%2B6m4SUn1yTw%2FoWK8eJR4fuP3NcAc3VoGmCNv2Yyb7916jM%2FsJFTCPySXD3SlMKXO%2BakNpAOBZr8sQrm7XdkDzBpfi5c75J9%2F1sEM3AMjqvbc8BypgwDxWaQNdIxftoBKqN1pA%2Bzy5JRF5mnEkBDNgw%2F4u9vgY6pgFt4XxQLhuH%2F4jvoWawtduBsqHryNh3dvmwuaCT9Xo2DEHXyqVb6ZLg3LYh78ZPq5WKKNOAxHkWzMeLn9Cm7Pg2TyXexo%2BPNDHMUAlDWTCpQ8G7eCNRH806%2BqZxJ9L9iOwURsZPbTErWnSZTQeEzTDIeaIb7Q1Fgsdnj7bn7500Jb1ltcQ8NbFAaH%2BWHxDKrh9QPavWkDUkE%2F2ZTAh43MqRY8yZkXCd&X-Amz-Signature=10fecf8556a095327d12a8854513c25c0fbd18b133eaf650ae606c98dd5cd95f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYRW3MK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICk%2BaLXC%2F8koqQG1%2FvTH0ZijhauqzIdywed02J9uGoJzAiAUx87%2BF3XQCrgUMc3DjD%2BK%2BVAJGMhOKNB%2Fpke14X1JRCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYPoSLRsq6CcfV8AHKtwDCpKSVtqawGwaBLDHki5nEzdDpPq3sBi%2FUYe2suo%2Bj6tkITsfpyaKpCCTH76WOtjpfiN1jSjrkJC8YSf89H14TE8UApjsV70%2Fsnti9nkA86Z4DegxifY3oZ4Q%2BzT6huFdYwY7vo1LxmlxZ0B%2Fgy3l6oSDbsyelAnZ2mERrbF5%2BraxTde5ku8FBE3fxJgwsVIqDbA0fKJJhCRUj1Y4tOgO1gk5Nt1MlWHZwt%2F2exPvp8THHuZLHUDFm6KGpZeco6qhhuaYZOXtQueaWoaXDAPpO5xHoH3XMLEm0K92yjB9j4ZYR%2FN3PFYju33%2B65Cscwe7MnTGDuG%2BtEiDpjoWpFrMxcMPnKersvDijfv76zAgWTmD%2F%2BDkZ2uuHwLpSrGBAwIJy5s%2B2orNziGjFyoOMM0M69VOJAI2Gese26oO7qqj1%2FagjBzC%2F7tatVSZ5zbxu3wWeHe4nK1kKmOC0G5FCLdFm9s6VgCwci%2B6M%2BPuee%2B6m4SUn1yTw%2FoWK8eJR4fuP3NcAc3VoGmCNv2Yyb7916jM%2FsJFTCPySXD3SlMKXO%2BakNpAOBZr8sQrm7XdkDzBpfi5c75J9%2F1sEM3AMjqvbc8BypgwDxWaQNdIxftoBKqN1pA%2Bzy5JRF5mnEkBDNgw%2F4u9vgY6pgFt4XxQLhuH%2F4jvoWawtduBsqHryNh3dvmwuaCT9Xo2DEHXyqVb6ZLg3LYh78ZPq5WKKNOAxHkWzMeLn9Cm7Pg2TyXexo%2BPNDHMUAlDWTCpQ8G7eCNRH806%2BqZxJ9L9iOwURsZPbTErWnSZTQeEzTDIeaIb7Q1Fgsdnj7bn7500Jb1ltcQ8NbFAaH%2BWHxDKrh9QPavWkDUkE%2F2ZTAh43MqRY8yZkXCd&X-Amz-Signature=6411875304e33f6624ff75e1fdd38feb6ad817f147d70e332afd77b156a2f128&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
