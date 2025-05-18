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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OSPA7M%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BdFkonXh1EkoVJpaUCktuhontZDz0LhqHPQFtxXxJ9QIgDuFN4ZCWEE2yWnm%2Bn8yxIQcXAluTQ8kEWb6RlExuuKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzyhe%2BOJz9xgEqjGCrcAxoGPmvrUkv%2B3osBx4fn4O6CbPssgHPJ2YGsEclaAdyEKyhRM6MPdwaSnQqFbYM%2FGXMEUIVgjz0hXo8z1tizMbv1k5Rd%2B2%2BWrsRB6Jr0AATWDarJGf2fGhNCWzyb0hVtSqvXWBekoPoTT%2FDY6g5CH5nxOZB1CB9xPGxeYjIZs5rv8ZgcxPCHFCT9xsn6BrK%2BSQXuMO0ZPqYLL%2FczUNwrtLKb3uSzrUa81Mgsp1B6WyihcwAWiUIPrVE2wHYVf6VVxaCsAXLgf4IyPbE1C15vx4t5Cf4U3lqalUwV5XI2Nxzn4AccqSkKEKJVhhlVdRePmJPDwBea3Udi2enMSW6KuvRL%2FG0LY%2BfEipnOavimmH%2BLGf9hvH5CGFLWuoSMhf6pMxI7peUOOVlWSDBf5TlzFNVgAxU4mhbBu4ZtkWLwQytOE0PRePkYDTq35r7mkWGWKxHB7FmzCmSni%2BiXRj2vcpP0ggkjpgbssBd2FJbgpbDrXQxyHdx2B85tECbswNssVznJ2j6kgvI6Wm4c9bLUtOkNoUIkPrzt%2BmH59Zp1kltrmqUpdHOLVmdF7Xpqcc5Whd7V8yf9%2B0BGdzSrjC3mbN14BaSqPYssJ63q2wXT3NAFeHG3jX7tPffRkOi3MIibp8EGOqUBbzusW2pP9BP9U7%2BENkmn1Xnr2gGljZLIjgSM2JFdeWZf3BYeFSh9FDVb7HB1lfZamxj%2BwYyUA5sBKzZr42roYNVXt%2FyzEf6T0Bk38Wv5qiXXNi6iRc1WotJucev83PP23T8goYwdjcJC8%2BZZ7%2BH3fOdMJk91YKOTRHcHraOk7acdVcTQL8qG5N2C9CqrbEiAODVbVldhb1FE4oma%2BQH%2BiE9y3LBf&X-Amz-Signature=badab73c44e2b49432abf3cb853563dd57cc543183b619bd492a6481053e4efb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OSPA7M%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BdFkonXh1EkoVJpaUCktuhontZDz0LhqHPQFtxXxJ9QIgDuFN4ZCWEE2yWnm%2Bn8yxIQcXAluTQ8kEWb6RlExuuKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzyhe%2BOJz9xgEqjGCrcAxoGPmvrUkv%2B3osBx4fn4O6CbPssgHPJ2YGsEclaAdyEKyhRM6MPdwaSnQqFbYM%2FGXMEUIVgjz0hXo8z1tizMbv1k5Rd%2B2%2BWrsRB6Jr0AATWDarJGf2fGhNCWzyb0hVtSqvXWBekoPoTT%2FDY6g5CH5nxOZB1CB9xPGxeYjIZs5rv8ZgcxPCHFCT9xsn6BrK%2BSQXuMO0ZPqYLL%2FczUNwrtLKb3uSzrUa81Mgsp1B6WyihcwAWiUIPrVE2wHYVf6VVxaCsAXLgf4IyPbE1C15vx4t5Cf4U3lqalUwV5XI2Nxzn4AccqSkKEKJVhhlVdRePmJPDwBea3Udi2enMSW6KuvRL%2FG0LY%2BfEipnOavimmH%2BLGf9hvH5CGFLWuoSMhf6pMxI7peUOOVlWSDBf5TlzFNVgAxU4mhbBu4ZtkWLwQytOE0PRePkYDTq35r7mkWGWKxHB7FmzCmSni%2BiXRj2vcpP0ggkjpgbssBd2FJbgpbDrXQxyHdx2B85tECbswNssVznJ2j6kgvI6Wm4c9bLUtOkNoUIkPrzt%2BmH59Zp1kltrmqUpdHOLVmdF7Xpqcc5Whd7V8yf9%2B0BGdzSrjC3mbN14BaSqPYssJ63q2wXT3NAFeHG3jX7tPffRkOi3MIibp8EGOqUBbzusW2pP9BP9U7%2BENkmn1Xnr2gGljZLIjgSM2JFdeWZf3BYeFSh9FDVb7HB1lfZamxj%2BwYyUA5sBKzZr42roYNVXt%2FyzEf6T0Bk38Wv5qiXXNi6iRc1WotJucev83PP23T8goYwdjcJC8%2BZZ7%2BH3fOdMJk91YKOTRHcHraOk7acdVcTQL8qG5N2C9CqrbEiAODVbVldhb1FE4oma%2BQH%2BiE9y3LBf&X-Amz-Signature=348cb1828dd1d07d95ac6f4c09da1abc52f29177b144b1247c719e34ee42b1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OSPA7M%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BdFkonXh1EkoVJpaUCktuhontZDz0LhqHPQFtxXxJ9QIgDuFN4ZCWEE2yWnm%2Bn8yxIQcXAluTQ8kEWb6RlExuuKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzyhe%2BOJz9xgEqjGCrcAxoGPmvrUkv%2B3osBx4fn4O6CbPssgHPJ2YGsEclaAdyEKyhRM6MPdwaSnQqFbYM%2FGXMEUIVgjz0hXo8z1tizMbv1k5Rd%2B2%2BWrsRB6Jr0AATWDarJGf2fGhNCWzyb0hVtSqvXWBekoPoTT%2FDY6g5CH5nxOZB1CB9xPGxeYjIZs5rv8ZgcxPCHFCT9xsn6BrK%2BSQXuMO0ZPqYLL%2FczUNwrtLKb3uSzrUa81Mgsp1B6WyihcwAWiUIPrVE2wHYVf6VVxaCsAXLgf4IyPbE1C15vx4t5Cf4U3lqalUwV5XI2Nxzn4AccqSkKEKJVhhlVdRePmJPDwBea3Udi2enMSW6KuvRL%2FG0LY%2BfEipnOavimmH%2BLGf9hvH5CGFLWuoSMhf6pMxI7peUOOVlWSDBf5TlzFNVgAxU4mhbBu4ZtkWLwQytOE0PRePkYDTq35r7mkWGWKxHB7FmzCmSni%2BiXRj2vcpP0ggkjpgbssBd2FJbgpbDrXQxyHdx2B85tECbswNssVznJ2j6kgvI6Wm4c9bLUtOkNoUIkPrzt%2BmH59Zp1kltrmqUpdHOLVmdF7Xpqcc5Whd7V8yf9%2B0BGdzSrjC3mbN14BaSqPYssJ63q2wXT3NAFeHG3jX7tPffRkOi3MIibp8EGOqUBbzusW2pP9BP9U7%2BENkmn1Xnr2gGljZLIjgSM2JFdeWZf3BYeFSh9FDVb7HB1lfZamxj%2BwYyUA5sBKzZr42roYNVXt%2FyzEf6T0Bk38Wv5qiXXNi6iRc1WotJucev83PP23T8goYwdjcJC8%2BZZ7%2BH3fOdMJk91YKOTRHcHraOk7acdVcTQL8qG5N2C9CqrbEiAODVbVldhb1FE4oma%2BQH%2BiE9y3LBf&X-Amz-Signature=d4d715719f8974ff42f8f8e3d0277bc78dfc2c3f6be02be3751ba47bcf0f570a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OSPA7M%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BdFkonXh1EkoVJpaUCktuhontZDz0LhqHPQFtxXxJ9QIgDuFN4ZCWEE2yWnm%2Bn8yxIQcXAluTQ8kEWb6RlExuuKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzyhe%2BOJz9xgEqjGCrcAxoGPmvrUkv%2B3osBx4fn4O6CbPssgHPJ2YGsEclaAdyEKyhRM6MPdwaSnQqFbYM%2FGXMEUIVgjz0hXo8z1tizMbv1k5Rd%2B2%2BWrsRB6Jr0AATWDarJGf2fGhNCWzyb0hVtSqvXWBekoPoTT%2FDY6g5CH5nxOZB1CB9xPGxeYjIZs5rv8ZgcxPCHFCT9xsn6BrK%2BSQXuMO0ZPqYLL%2FczUNwrtLKb3uSzrUa81Mgsp1B6WyihcwAWiUIPrVE2wHYVf6VVxaCsAXLgf4IyPbE1C15vx4t5Cf4U3lqalUwV5XI2Nxzn4AccqSkKEKJVhhlVdRePmJPDwBea3Udi2enMSW6KuvRL%2FG0LY%2BfEipnOavimmH%2BLGf9hvH5CGFLWuoSMhf6pMxI7peUOOVlWSDBf5TlzFNVgAxU4mhbBu4ZtkWLwQytOE0PRePkYDTq35r7mkWGWKxHB7FmzCmSni%2BiXRj2vcpP0ggkjpgbssBd2FJbgpbDrXQxyHdx2B85tECbswNssVznJ2j6kgvI6Wm4c9bLUtOkNoUIkPrzt%2BmH59Zp1kltrmqUpdHOLVmdF7Xpqcc5Whd7V8yf9%2B0BGdzSrjC3mbN14BaSqPYssJ63q2wXT3NAFeHG3jX7tPffRkOi3MIibp8EGOqUBbzusW2pP9BP9U7%2BENkmn1Xnr2gGljZLIjgSM2JFdeWZf3BYeFSh9FDVb7HB1lfZamxj%2BwYyUA5sBKzZr42roYNVXt%2FyzEf6T0Bk38Wv5qiXXNi6iRc1WotJucev83PP23T8goYwdjcJC8%2BZZ7%2BH3fOdMJk91YKOTRHcHraOk7acdVcTQL8qG5N2C9CqrbEiAODVbVldhb1FE4oma%2BQH%2BiE9y3LBf&X-Amz-Signature=f63a061be9b7199b765ed1a377c62758f29ce08f26726869c9db616a4cbe2c01&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OSPA7M%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BdFkonXh1EkoVJpaUCktuhontZDz0LhqHPQFtxXxJ9QIgDuFN4ZCWEE2yWnm%2Bn8yxIQcXAluTQ8kEWb6RlExuuKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzyhe%2BOJz9xgEqjGCrcAxoGPmvrUkv%2B3osBx4fn4O6CbPssgHPJ2YGsEclaAdyEKyhRM6MPdwaSnQqFbYM%2FGXMEUIVgjz0hXo8z1tizMbv1k5Rd%2B2%2BWrsRB6Jr0AATWDarJGf2fGhNCWzyb0hVtSqvXWBekoPoTT%2FDY6g5CH5nxOZB1CB9xPGxeYjIZs5rv8ZgcxPCHFCT9xsn6BrK%2BSQXuMO0ZPqYLL%2FczUNwrtLKb3uSzrUa81Mgsp1B6WyihcwAWiUIPrVE2wHYVf6VVxaCsAXLgf4IyPbE1C15vx4t5Cf4U3lqalUwV5XI2Nxzn4AccqSkKEKJVhhlVdRePmJPDwBea3Udi2enMSW6KuvRL%2FG0LY%2BfEipnOavimmH%2BLGf9hvH5CGFLWuoSMhf6pMxI7peUOOVlWSDBf5TlzFNVgAxU4mhbBu4ZtkWLwQytOE0PRePkYDTq35r7mkWGWKxHB7FmzCmSni%2BiXRj2vcpP0ggkjpgbssBd2FJbgpbDrXQxyHdx2B85tECbswNssVznJ2j6kgvI6Wm4c9bLUtOkNoUIkPrzt%2BmH59Zp1kltrmqUpdHOLVmdF7Xpqcc5Whd7V8yf9%2B0BGdzSrjC3mbN14BaSqPYssJ63q2wXT3NAFeHG3jX7tPffRkOi3MIibp8EGOqUBbzusW2pP9BP9U7%2BENkmn1Xnr2gGljZLIjgSM2JFdeWZf3BYeFSh9FDVb7HB1lfZamxj%2BwYyUA5sBKzZr42roYNVXt%2FyzEf6T0Bk38Wv5qiXXNi6iRc1WotJucev83PP23T8goYwdjcJC8%2BZZ7%2BH3fOdMJk91YKOTRHcHraOk7acdVcTQL8qG5N2C9CqrbEiAODVbVldhb1FE4oma%2BQH%2BiE9y3LBf&X-Amz-Signature=49b12f5c7e93f759e31b18f938b013c40369ad6831bab8911ee22e424dd45e05&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OSPA7M%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BdFkonXh1EkoVJpaUCktuhontZDz0LhqHPQFtxXxJ9QIgDuFN4ZCWEE2yWnm%2Bn8yxIQcXAluTQ8kEWb6RlExuuKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzyhe%2BOJz9xgEqjGCrcAxoGPmvrUkv%2B3osBx4fn4O6CbPssgHPJ2YGsEclaAdyEKyhRM6MPdwaSnQqFbYM%2FGXMEUIVgjz0hXo8z1tizMbv1k5Rd%2B2%2BWrsRB6Jr0AATWDarJGf2fGhNCWzyb0hVtSqvXWBekoPoTT%2FDY6g5CH5nxOZB1CB9xPGxeYjIZs5rv8ZgcxPCHFCT9xsn6BrK%2BSQXuMO0ZPqYLL%2FczUNwrtLKb3uSzrUa81Mgsp1B6WyihcwAWiUIPrVE2wHYVf6VVxaCsAXLgf4IyPbE1C15vx4t5Cf4U3lqalUwV5XI2Nxzn4AccqSkKEKJVhhlVdRePmJPDwBea3Udi2enMSW6KuvRL%2FG0LY%2BfEipnOavimmH%2BLGf9hvH5CGFLWuoSMhf6pMxI7peUOOVlWSDBf5TlzFNVgAxU4mhbBu4ZtkWLwQytOE0PRePkYDTq35r7mkWGWKxHB7FmzCmSni%2BiXRj2vcpP0ggkjpgbssBd2FJbgpbDrXQxyHdx2B85tECbswNssVznJ2j6kgvI6Wm4c9bLUtOkNoUIkPrzt%2BmH59Zp1kltrmqUpdHOLVmdF7Xpqcc5Whd7V8yf9%2B0BGdzSrjC3mbN14BaSqPYssJ63q2wXT3NAFeHG3jX7tPffRkOi3MIibp8EGOqUBbzusW2pP9BP9U7%2BENkmn1Xnr2gGljZLIjgSM2JFdeWZf3BYeFSh9FDVb7HB1lfZamxj%2BwYyUA5sBKzZr42roYNVXt%2FyzEf6T0Bk38Wv5qiXXNi6iRc1WotJucev83PP23T8goYwdjcJC8%2BZZ7%2BH3fOdMJk91YKOTRHcHraOk7acdVcTQL8qG5N2C9CqrbEiAODVbVldhb1FE4oma%2BQH%2BiE9y3LBf&X-Amz-Signature=b0eb22122e78de8d277d2d7b639c638f21d83c1a27d912b7e62b6ff114cd0570&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OSPA7M%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BdFkonXh1EkoVJpaUCktuhontZDz0LhqHPQFtxXxJ9QIgDuFN4ZCWEE2yWnm%2Bn8yxIQcXAluTQ8kEWb6RlExuuKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzyhe%2BOJz9xgEqjGCrcAxoGPmvrUkv%2B3osBx4fn4O6CbPssgHPJ2YGsEclaAdyEKyhRM6MPdwaSnQqFbYM%2FGXMEUIVgjz0hXo8z1tizMbv1k5Rd%2B2%2BWrsRB6Jr0AATWDarJGf2fGhNCWzyb0hVtSqvXWBekoPoTT%2FDY6g5CH5nxOZB1CB9xPGxeYjIZs5rv8ZgcxPCHFCT9xsn6BrK%2BSQXuMO0ZPqYLL%2FczUNwrtLKb3uSzrUa81Mgsp1B6WyihcwAWiUIPrVE2wHYVf6VVxaCsAXLgf4IyPbE1C15vx4t5Cf4U3lqalUwV5XI2Nxzn4AccqSkKEKJVhhlVdRePmJPDwBea3Udi2enMSW6KuvRL%2FG0LY%2BfEipnOavimmH%2BLGf9hvH5CGFLWuoSMhf6pMxI7peUOOVlWSDBf5TlzFNVgAxU4mhbBu4ZtkWLwQytOE0PRePkYDTq35r7mkWGWKxHB7FmzCmSni%2BiXRj2vcpP0ggkjpgbssBd2FJbgpbDrXQxyHdx2B85tECbswNssVznJ2j6kgvI6Wm4c9bLUtOkNoUIkPrzt%2BmH59Zp1kltrmqUpdHOLVmdF7Xpqcc5Whd7V8yf9%2B0BGdzSrjC3mbN14BaSqPYssJ63q2wXT3NAFeHG3jX7tPffRkOi3MIibp8EGOqUBbzusW2pP9BP9U7%2BENkmn1Xnr2gGljZLIjgSM2JFdeWZf3BYeFSh9FDVb7HB1lfZamxj%2BwYyUA5sBKzZr42roYNVXt%2FyzEf6T0Bk38Wv5qiXXNi6iRc1WotJucev83PP23T8goYwdjcJC8%2BZZ7%2BH3fOdMJk91YKOTRHcHraOk7acdVcTQL8qG5N2C9CqrbEiAODVbVldhb1FE4oma%2BQH%2BiE9y3LBf&X-Amz-Signature=035912cf80405522092a2b815a92d0a8f40d1d4022151fa64e2caf8d65031139&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
