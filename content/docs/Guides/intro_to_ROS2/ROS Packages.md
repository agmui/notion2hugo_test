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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NVZOUG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8hDibmr6WGfM93E8%2Bpi4EXMrrwtNGVkbkZwyON12vWgIgRsvYzH%2Fmi6rzPREJQIfHwqLgcSHiPoupL3l%2BP1c2%2FtAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfkbdjx3f%2FX8lz7MSrcA1gcizPvXjYFccAhPftmdeDhGQVUZOQD70QvqwXq1ip0vQXYXxkdiz4z5wGnfnyPscPXD3vdylh4Vaih3Bg%2Fyf8VdaDY8GB1Iuc42r5wiS0JgapLyM43hdyBgjaSgVMx35OMiWse53IXO8z%2FcfFyPSkvWnxrmF7hLZHmZFpItTzOsfh8GbuOUO9IfaQ6BBuXASeV0fPMjLba8de7ST8lkNdCEp%2FlpdR2mnfVaod8qfKH4QXNYkFqPoAWO%2FkjDNgF5d4FZ8FW5xXpq4muAMovHzxNFTlMdCypPoYwYuQtpM0NQDFfQsA%2FcNgczSe%2FQB%2F0BqMlNF%2FwrqLIx25Efu6S2rPML%2BT%2F3Z3%2B7GTY%2F7wwJ85R%2F3oJgTnG4UTMM3hqrC0II7XFLbPRIE95pC2maYvEmk%2FMQsIrY54E0t0cCEbpBvxdm1JdpHNL6wvb%2FbzA4gt8j743i3mzDvT4gdvQSZZph2dD7Of2MWDCMnG2L7lS88w68i4R4mqmG5NbwiFIdhU3X4XVuc5tyvySd5cp8DEN5ivWreNFU60zl94LBJO5FrbWwQwPV%2BCadu1z6HyySkz7ZvfjFk5lK%2B21jN1CUEX1ZF35ybekHSsBO8PloEVbopquZqxmsLJvPiwYdl9pMK60gMEGOqUBFdwF1Nxif68v5pllAgKHoGduplcZAiIme%2Fhi%2FEndrSTkCDOqMG7GwiqjB%2FZWlJ9NimqK8VdAN5eJ0pfHAJIyYBstAiQx1c%2BRyJnzUGMNRBVW1v7onaXHTAwAd9IJp%2FgIM%2BO0vH0RhvVMBvLaBlRJb8246twn05a%2BD75ddJLTiypWVa0R7fIkAOdIs%2B5LLbFreMSCUTDppwulvbECxq%2FXmbHej5XB&X-Amz-Signature=fe3eca669b806ea98e2c9e9cea2b99df07b2bf4e311ed16572638db0be43d233&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NVZOUG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8hDibmr6WGfM93E8%2Bpi4EXMrrwtNGVkbkZwyON12vWgIgRsvYzH%2Fmi6rzPREJQIfHwqLgcSHiPoupL3l%2BP1c2%2FtAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfkbdjx3f%2FX8lz7MSrcA1gcizPvXjYFccAhPftmdeDhGQVUZOQD70QvqwXq1ip0vQXYXxkdiz4z5wGnfnyPscPXD3vdylh4Vaih3Bg%2Fyf8VdaDY8GB1Iuc42r5wiS0JgapLyM43hdyBgjaSgVMx35OMiWse53IXO8z%2FcfFyPSkvWnxrmF7hLZHmZFpItTzOsfh8GbuOUO9IfaQ6BBuXASeV0fPMjLba8de7ST8lkNdCEp%2FlpdR2mnfVaod8qfKH4QXNYkFqPoAWO%2FkjDNgF5d4FZ8FW5xXpq4muAMovHzxNFTlMdCypPoYwYuQtpM0NQDFfQsA%2FcNgczSe%2FQB%2F0BqMlNF%2FwrqLIx25Efu6S2rPML%2BT%2F3Z3%2B7GTY%2F7wwJ85R%2F3oJgTnG4UTMM3hqrC0II7XFLbPRIE95pC2maYvEmk%2FMQsIrY54E0t0cCEbpBvxdm1JdpHNL6wvb%2FbzA4gt8j743i3mzDvT4gdvQSZZph2dD7Of2MWDCMnG2L7lS88w68i4R4mqmG5NbwiFIdhU3X4XVuc5tyvySd5cp8DEN5ivWreNFU60zl94LBJO5FrbWwQwPV%2BCadu1z6HyySkz7ZvfjFk5lK%2B21jN1CUEX1ZF35ybekHSsBO8PloEVbopquZqxmsLJvPiwYdl9pMK60gMEGOqUBFdwF1Nxif68v5pllAgKHoGduplcZAiIme%2Fhi%2FEndrSTkCDOqMG7GwiqjB%2FZWlJ9NimqK8VdAN5eJ0pfHAJIyYBstAiQx1c%2BRyJnzUGMNRBVW1v7onaXHTAwAd9IJp%2FgIM%2BO0vH0RhvVMBvLaBlRJb8246twn05a%2BD75ddJLTiypWVa0R7fIkAOdIs%2B5LLbFreMSCUTDppwulvbECxq%2FXmbHej5XB&X-Amz-Signature=d48835eeb1249a946b5096bfd3ca7ee1901ef9fe830a33877d4411ab8c80d79e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NVZOUG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8hDibmr6WGfM93E8%2Bpi4EXMrrwtNGVkbkZwyON12vWgIgRsvYzH%2Fmi6rzPREJQIfHwqLgcSHiPoupL3l%2BP1c2%2FtAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfkbdjx3f%2FX8lz7MSrcA1gcizPvXjYFccAhPftmdeDhGQVUZOQD70QvqwXq1ip0vQXYXxkdiz4z5wGnfnyPscPXD3vdylh4Vaih3Bg%2Fyf8VdaDY8GB1Iuc42r5wiS0JgapLyM43hdyBgjaSgVMx35OMiWse53IXO8z%2FcfFyPSkvWnxrmF7hLZHmZFpItTzOsfh8GbuOUO9IfaQ6BBuXASeV0fPMjLba8de7ST8lkNdCEp%2FlpdR2mnfVaod8qfKH4QXNYkFqPoAWO%2FkjDNgF5d4FZ8FW5xXpq4muAMovHzxNFTlMdCypPoYwYuQtpM0NQDFfQsA%2FcNgczSe%2FQB%2F0BqMlNF%2FwrqLIx25Efu6S2rPML%2BT%2F3Z3%2B7GTY%2F7wwJ85R%2F3oJgTnG4UTMM3hqrC0II7XFLbPRIE95pC2maYvEmk%2FMQsIrY54E0t0cCEbpBvxdm1JdpHNL6wvb%2FbzA4gt8j743i3mzDvT4gdvQSZZph2dD7Of2MWDCMnG2L7lS88w68i4R4mqmG5NbwiFIdhU3X4XVuc5tyvySd5cp8DEN5ivWreNFU60zl94LBJO5FrbWwQwPV%2BCadu1z6HyySkz7ZvfjFk5lK%2B21jN1CUEX1ZF35ybekHSsBO8PloEVbopquZqxmsLJvPiwYdl9pMK60gMEGOqUBFdwF1Nxif68v5pllAgKHoGduplcZAiIme%2Fhi%2FEndrSTkCDOqMG7GwiqjB%2FZWlJ9NimqK8VdAN5eJ0pfHAJIyYBstAiQx1c%2BRyJnzUGMNRBVW1v7onaXHTAwAd9IJp%2FgIM%2BO0vH0RhvVMBvLaBlRJb8246twn05a%2BD75ddJLTiypWVa0R7fIkAOdIs%2B5LLbFreMSCUTDppwulvbECxq%2FXmbHej5XB&X-Amz-Signature=c4e27388c50d7861206b533099caaebbd51de350b372d3cf8871f99a1ceaa8c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NVZOUG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8hDibmr6WGfM93E8%2Bpi4EXMrrwtNGVkbkZwyON12vWgIgRsvYzH%2Fmi6rzPREJQIfHwqLgcSHiPoupL3l%2BP1c2%2FtAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfkbdjx3f%2FX8lz7MSrcA1gcizPvXjYFccAhPftmdeDhGQVUZOQD70QvqwXq1ip0vQXYXxkdiz4z5wGnfnyPscPXD3vdylh4Vaih3Bg%2Fyf8VdaDY8GB1Iuc42r5wiS0JgapLyM43hdyBgjaSgVMx35OMiWse53IXO8z%2FcfFyPSkvWnxrmF7hLZHmZFpItTzOsfh8GbuOUO9IfaQ6BBuXASeV0fPMjLba8de7ST8lkNdCEp%2FlpdR2mnfVaod8qfKH4QXNYkFqPoAWO%2FkjDNgF5d4FZ8FW5xXpq4muAMovHzxNFTlMdCypPoYwYuQtpM0NQDFfQsA%2FcNgczSe%2FQB%2F0BqMlNF%2FwrqLIx25Efu6S2rPML%2BT%2F3Z3%2B7GTY%2F7wwJ85R%2F3oJgTnG4UTMM3hqrC0II7XFLbPRIE95pC2maYvEmk%2FMQsIrY54E0t0cCEbpBvxdm1JdpHNL6wvb%2FbzA4gt8j743i3mzDvT4gdvQSZZph2dD7Of2MWDCMnG2L7lS88w68i4R4mqmG5NbwiFIdhU3X4XVuc5tyvySd5cp8DEN5ivWreNFU60zl94LBJO5FrbWwQwPV%2BCadu1z6HyySkz7ZvfjFk5lK%2B21jN1CUEX1ZF35ybekHSsBO8PloEVbopquZqxmsLJvPiwYdl9pMK60gMEGOqUBFdwF1Nxif68v5pllAgKHoGduplcZAiIme%2Fhi%2FEndrSTkCDOqMG7GwiqjB%2FZWlJ9NimqK8VdAN5eJ0pfHAJIyYBstAiQx1c%2BRyJnzUGMNRBVW1v7onaXHTAwAd9IJp%2FgIM%2BO0vH0RhvVMBvLaBlRJb8246twn05a%2BD75ddJLTiypWVa0R7fIkAOdIs%2B5LLbFreMSCUTDppwulvbECxq%2FXmbHej5XB&X-Amz-Signature=b2d20b4b28f19ae6cfe60096b01cbe308072a47fb7468bbac209243c9bb4b6eb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NVZOUG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8hDibmr6WGfM93E8%2Bpi4EXMrrwtNGVkbkZwyON12vWgIgRsvYzH%2Fmi6rzPREJQIfHwqLgcSHiPoupL3l%2BP1c2%2FtAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfkbdjx3f%2FX8lz7MSrcA1gcizPvXjYFccAhPftmdeDhGQVUZOQD70QvqwXq1ip0vQXYXxkdiz4z5wGnfnyPscPXD3vdylh4Vaih3Bg%2Fyf8VdaDY8GB1Iuc42r5wiS0JgapLyM43hdyBgjaSgVMx35OMiWse53IXO8z%2FcfFyPSkvWnxrmF7hLZHmZFpItTzOsfh8GbuOUO9IfaQ6BBuXASeV0fPMjLba8de7ST8lkNdCEp%2FlpdR2mnfVaod8qfKH4QXNYkFqPoAWO%2FkjDNgF5d4FZ8FW5xXpq4muAMovHzxNFTlMdCypPoYwYuQtpM0NQDFfQsA%2FcNgczSe%2FQB%2F0BqMlNF%2FwrqLIx25Efu6S2rPML%2BT%2F3Z3%2B7GTY%2F7wwJ85R%2F3oJgTnG4UTMM3hqrC0II7XFLbPRIE95pC2maYvEmk%2FMQsIrY54E0t0cCEbpBvxdm1JdpHNL6wvb%2FbzA4gt8j743i3mzDvT4gdvQSZZph2dD7Of2MWDCMnG2L7lS88w68i4R4mqmG5NbwiFIdhU3X4XVuc5tyvySd5cp8DEN5ivWreNFU60zl94LBJO5FrbWwQwPV%2BCadu1z6HyySkz7ZvfjFk5lK%2B21jN1CUEX1ZF35ybekHSsBO8PloEVbopquZqxmsLJvPiwYdl9pMK60gMEGOqUBFdwF1Nxif68v5pllAgKHoGduplcZAiIme%2Fhi%2FEndrSTkCDOqMG7GwiqjB%2FZWlJ9NimqK8VdAN5eJ0pfHAJIyYBstAiQx1c%2BRyJnzUGMNRBVW1v7onaXHTAwAd9IJp%2FgIM%2BO0vH0RhvVMBvLaBlRJb8246twn05a%2BD75ddJLTiypWVa0R7fIkAOdIs%2B5LLbFreMSCUTDppwulvbECxq%2FXmbHej5XB&X-Amz-Signature=e1db6d19251d98220de40a00da09aa07e23d8486b660ac96a093976e03324e91&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NVZOUG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8hDibmr6WGfM93E8%2Bpi4EXMrrwtNGVkbkZwyON12vWgIgRsvYzH%2Fmi6rzPREJQIfHwqLgcSHiPoupL3l%2BP1c2%2FtAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfkbdjx3f%2FX8lz7MSrcA1gcizPvXjYFccAhPftmdeDhGQVUZOQD70QvqwXq1ip0vQXYXxkdiz4z5wGnfnyPscPXD3vdylh4Vaih3Bg%2Fyf8VdaDY8GB1Iuc42r5wiS0JgapLyM43hdyBgjaSgVMx35OMiWse53IXO8z%2FcfFyPSkvWnxrmF7hLZHmZFpItTzOsfh8GbuOUO9IfaQ6BBuXASeV0fPMjLba8de7ST8lkNdCEp%2FlpdR2mnfVaod8qfKH4QXNYkFqPoAWO%2FkjDNgF5d4FZ8FW5xXpq4muAMovHzxNFTlMdCypPoYwYuQtpM0NQDFfQsA%2FcNgczSe%2FQB%2F0BqMlNF%2FwrqLIx25Efu6S2rPML%2BT%2F3Z3%2B7GTY%2F7wwJ85R%2F3oJgTnG4UTMM3hqrC0II7XFLbPRIE95pC2maYvEmk%2FMQsIrY54E0t0cCEbpBvxdm1JdpHNL6wvb%2FbzA4gt8j743i3mzDvT4gdvQSZZph2dD7Of2MWDCMnG2L7lS88w68i4R4mqmG5NbwiFIdhU3X4XVuc5tyvySd5cp8DEN5ivWreNFU60zl94LBJO5FrbWwQwPV%2BCadu1z6HyySkz7ZvfjFk5lK%2B21jN1CUEX1ZF35ybekHSsBO8PloEVbopquZqxmsLJvPiwYdl9pMK60gMEGOqUBFdwF1Nxif68v5pllAgKHoGduplcZAiIme%2Fhi%2FEndrSTkCDOqMG7GwiqjB%2FZWlJ9NimqK8VdAN5eJ0pfHAJIyYBstAiQx1c%2BRyJnzUGMNRBVW1v7onaXHTAwAd9IJp%2FgIM%2BO0vH0RhvVMBvLaBlRJb8246twn05a%2BD75ddJLTiypWVa0R7fIkAOdIs%2B5LLbFreMSCUTDppwulvbECxq%2FXmbHej5XB&X-Amz-Signature=c207c2fd6bcf15122f7c06cc58556c018915718e8755399edb130393c167152a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NVZOUG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD8hDibmr6WGfM93E8%2Bpi4EXMrrwtNGVkbkZwyON12vWgIgRsvYzH%2Fmi6rzPREJQIfHwqLgcSHiPoupL3l%2BP1c2%2FtAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfkbdjx3f%2FX8lz7MSrcA1gcizPvXjYFccAhPftmdeDhGQVUZOQD70QvqwXq1ip0vQXYXxkdiz4z5wGnfnyPscPXD3vdylh4Vaih3Bg%2Fyf8VdaDY8GB1Iuc42r5wiS0JgapLyM43hdyBgjaSgVMx35OMiWse53IXO8z%2FcfFyPSkvWnxrmF7hLZHmZFpItTzOsfh8GbuOUO9IfaQ6BBuXASeV0fPMjLba8de7ST8lkNdCEp%2FlpdR2mnfVaod8qfKH4QXNYkFqPoAWO%2FkjDNgF5d4FZ8FW5xXpq4muAMovHzxNFTlMdCypPoYwYuQtpM0NQDFfQsA%2FcNgczSe%2FQB%2F0BqMlNF%2FwrqLIx25Efu6S2rPML%2BT%2F3Z3%2B7GTY%2F7wwJ85R%2F3oJgTnG4UTMM3hqrC0II7XFLbPRIE95pC2maYvEmk%2FMQsIrY54E0t0cCEbpBvxdm1JdpHNL6wvb%2FbzA4gt8j743i3mzDvT4gdvQSZZph2dD7Of2MWDCMnG2L7lS88w68i4R4mqmG5NbwiFIdhU3X4XVuc5tyvySd5cp8DEN5ivWreNFU60zl94LBJO5FrbWwQwPV%2BCadu1z6HyySkz7ZvfjFk5lK%2B21jN1CUEX1ZF35ybekHSsBO8PloEVbopquZqxmsLJvPiwYdl9pMK60gMEGOqUBFdwF1Nxif68v5pllAgKHoGduplcZAiIme%2Fhi%2FEndrSTkCDOqMG7GwiqjB%2FZWlJ9NimqK8VdAN5eJ0pfHAJIyYBstAiQx1c%2BRyJnzUGMNRBVW1v7onaXHTAwAd9IJp%2FgIM%2BO0vH0RhvVMBvLaBlRJb8246twn05a%2BD75ddJLTiypWVa0R7fIkAOdIs%2B5LLbFreMSCUTDppwulvbECxq%2FXmbHej5XB&X-Amz-Signature=92f9e109927d32910ebae05f0db5a9460b9d30829825b8bf42ef3c5dba284e94&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
