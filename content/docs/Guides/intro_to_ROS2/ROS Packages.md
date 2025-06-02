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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FT6UC3S%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsxj98Y3ExhHplBW59mK0jk55BZEVJPbpn4cRgSLwU5gIhANV9eLHnOhdjWVuZj7loa%2Fbl5LHaI1p8rwPFt7IebDNFKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeBesDewp0Lxn8ei8q3APpG8pwiyVQtdKNQif%2FPfvv0d9XoE9EbhghKdOoMDUV8G3ku2%2FGUrLV9eO%2BQ2eQlkVURjzQ34%2BQH3sImOaL9zSPqi676c9i%2B3Q7nxvp9raUYWBMyxa23yWpQOAEwpXL%2BEmF6jJiuSIhM%2B%2F7pyxsi52iDKT%2FPvSsAWOxyJZ71JSt6gDsFCSKSpAieXHQXGopU655we8j0qfb2KZ6qYPPkh%2BFH65pwvP0giua6UA5NsLotrnf9BsAb%2BKsgzvRSFe15%2FLJa6OHV%2BS4KurpECtUab%2Fc4fk0S3OaMpF0G%2FSBOrQ7pS5EBx0OEbL6MATgE4%2FyaHtaVt%2FKyLXTGw326oiabndQg813jBfIPTWlfPm2qQ09IKj4hzaI3iGjAUQmGvHWqsju17kfGHVkgXR%2FiQZ7RtQVug6qg2OdUZXF7dr7R9fgefqZD1JmZtulbxmRnWk3WFYtq9d8eLF4oJTPtx1keBDRa8FGhnW0tCf4MInkXfVdLRG2JdFSs85uilC2suGvvcLHY3mzden8SJpoQZXYlDG2eHmvHX7nZrlvVw2xnRKNQ7MvyOI10mkfFAFA5N%2BbEXLniyf1KL8M5btDfQyYiBMriWz30WfZc3KGhIE06WGd6NiEMF%2FWQz5KyEP8mzCiwfjBBjqkAVFgwtidypQpN7csXDMcnR%2F17ZWdVMZOY4HmF%2B9iNMTnzrBMnmY3R1WqC39RZxyXd1dYtsxfJ2CaBWmt8oUQEM9loSHngMmDRAl8wZkNQcJ%2B%2F3l6fRMCJPRg6ueMSoyVvj6GW8LfcTBySezDRY8UN0KGhd49stStgW8RIqdassHTMD65KVcYmL%2B2X8DKPrOg0RCdzRR9pzPYhpaUUHEfOYDP8lwQ&X-Amz-Signature=d67356ba6d6a25282aa2a26e928e36c85c79ac126f242031758fff68ec5640ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FT6UC3S%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsxj98Y3ExhHplBW59mK0jk55BZEVJPbpn4cRgSLwU5gIhANV9eLHnOhdjWVuZj7loa%2Fbl5LHaI1p8rwPFt7IebDNFKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeBesDewp0Lxn8ei8q3APpG8pwiyVQtdKNQif%2FPfvv0d9XoE9EbhghKdOoMDUV8G3ku2%2FGUrLV9eO%2BQ2eQlkVURjzQ34%2BQH3sImOaL9zSPqi676c9i%2B3Q7nxvp9raUYWBMyxa23yWpQOAEwpXL%2BEmF6jJiuSIhM%2B%2F7pyxsi52iDKT%2FPvSsAWOxyJZ71JSt6gDsFCSKSpAieXHQXGopU655we8j0qfb2KZ6qYPPkh%2BFH65pwvP0giua6UA5NsLotrnf9BsAb%2BKsgzvRSFe15%2FLJa6OHV%2BS4KurpECtUab%2Fc4fk0S3OaMpF0G%2FSBOrQ7pS5EBx0OEbL6MATgE4%2FyaHtaVt%2FKyLXTGw326oiabndQg813jBfIPTWlfPm2qQ09IKj4hzaI3iGjAUQmGvHWqsju17kfGHVkgXR%2FiQZ7RtQVug6qg2OdUZXF7dr7R9fgefqZD1JmZtulbxmRnWk3WFYtq9d8eLF4oJTPtx1keBDRa8FGhnW0tCf4MInkXfVdLRG2JdFSs85uilC2suGvvcLHY3mzden8SJpoQZXYlDG2eHmvHX7nZrlvVw2xnRKNQ7MvyOI10mkfFAFA5N%2BbEXLniyf1KL8M5btDfQyYiBMriWz30WfZc3KGhIE06WGd6NiEMF%2FWQz5KyEP8mzCiwfjBBjqkAVFgwtidypQpN7csXDMcnR%2F17ZWdVMZOY4HmF%2B9iNMTnzrBMnmY3R1WqC39RZxyXd1dYtsxfJ2CaBWmt8oUQEM9loSHngMmDRAl8wZkNQcJ%2B%2F3l6fRMCJPRg6ueMSoyVvj6GW8LfcTBySezDRY8UN0KGhd49stStgW8RIqdassHTMD65KVcYmL%2B2X8DKPrOg0RCdzRR9pzPYhpaUUHEfOYDP8lwQ&X-Amz-Signature=c32886dcb0e0f70193d71c5f7a80cfee6fd39bd419de4588803278b182b7a3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FT6UC3S%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsxj98Y3ExhHplBW59mK0jk55BZEVJPbpn4cRgSLwU5gIhANV9eLHnOhdjWVuZj7loa%2Fbl5LHaI1p8rwPFt7IebDNFKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeBesDewp0Lxn8ei8q3APpG8pwiyVQtdKNQif%2FPfvv0d9XoE9EbhghKdOoMDUV8G3ku2%2FGUrLV9eO%2BQ2eQlkVURjzQ34%2BQH3sImOaL9zSPqi676c9i%2B3Q7nxvp9raUYWBMyxa23yWpQOAEwpXL%2BEmF6jJiuSIhM%2B%2F7pyxsi52iDKT%2FPvSsAWOxyJZ71JSt6gDsFCSKSpAieXHQXGopU655we8j0qfb2KZ6qYPPkh%2BFH65pwvP0giua6UA5NsLotrnf9BsAb%2BKsgzvRSFe15%2FLJa6OHV%2BS4KurpECtUab%2Fc4fk0S3OaMpF0G%2FSBOrQ7pS5EBx0OEbL6MATgE4%2FyaHtaVt%2FKyLXTGw326oiabndQg813jBfIPTWlfPm2qQ09IKj4hzaI3iGjAUQmGvHWqsju17kfGHVkgXR%2FiQZ7RtQVug6qg2OdUZXF7dr7R9fgefqZD1JmZtulbxmRnWk3WFYtq9d8eLF4oJTPtx1keBDRa8FGhnW0tCf4MInkXfVdLRG2JdFSs85uilC2suGvvcLHY3mzden8SJpoQZXYlDG2eHmvHX7nZrlvVw2xnRKNQ7MvyOI10mkfFAFA5N%2BbEXLniyf1KL8M5btDfQyYiBMriWz30WfZc3KGhIE06WGd6NiEMF%2FWQz5KyEP8mzCiwfjBBjqkAVFgwtidypQpN7csXDMcnR%2F17ZWdVMZOY4HmF%2B9iNMTnzrBMnmY3R1WqC39RZxyXd1dYtsxfJ2CaBWmt8oUQEM9loSHngMmDRAl8wZkNQcJ%2B%2F3l6fRMCJPRg6ueMSoyVvj6GW8LfcTBySezDRY8UN0KGhd49stStgW8RIqdassHTMD65KVcYmL%2B2X8DKPrOg0RCdzRR9pzPYhpaUUHEfOYDP8lwQ&X-Amz-Signature=5b5c6b0f8f4fdd778c973494dc6512bd9546ef16fe7a8a9672b351b2c7bd4d56&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FT6UC3S%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsxj98Y3ExhHplBW59mK0jk55BZEVJPbpn4cRgSLwU5gIhANV9eLHnOhdjWVuZj7loa%2Fbl5LHaI1p8rwPFt7IebDNFKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeBesDewp0Lxn8ei8q3APpG8pwiyVQtdKNQif%2FPfvv0d9XoE9EbhghKdOoMDUV8G3ku2%2FGUrLV9eO%2BQ2eQlkVURjzQ34%2BQH3sImOaL9zSPqi676c9i%2B3Q7nxvp9raUYWBMyxa23yWpQOAEwpXL%2BEmF6jJiuSIhM%2B%2F7pyxsi52iDKT%2FPvSsAWOxyJZ71JSt6gDsFCSKSpAieXHQXGopU655we8j0qfb2KZ6qYPPkh%2BFH65pwvP0giua6UA5NsLotrnf9BsAb%2BKsgzvRSFe15%2FLJa6OHV%2BS4KurpECtUab%2Fc4fk0S3OaMpF0G%2FSBOrQ7pS5EBx0OEbL6MATgE4%2FyaHtaVt%2FKyLXTGw326oiabndQg813jBfIPTWlfPm2qQ09IKj4hzaI3iGjAUQmGvHWqsju17kfGHVkgXR%2FiQZ7RtQVug6qg2OdUZXF7dr7R9fgefqZD1JmZtulbxmRnWk3WFYtq9d8eLF4oJTPtx1keBDRa8FGhnW0tCf4MInkXfVdLRG2JdFSs85uilC2suGvvcLHY3mzden8SJpoQZXYlDG2eHmvHX7nZrlvVw2xnRKNQ7MvyOI10mkfFAFA5N%2BbEXLniyf1KL8M5btDfQyYiBMriWz30WfZc3KGhIE06WGd6NiEMF%2FWQz5KyEP8mzCiwfjBBjqkAVFgwtidypQpN7csXDMcnR%2F17ZWdVMZOY4HmF%2B9iNMTnzrBMnmY3R1WqC39RZxyXd1dYtsxfJ2CaBWmt8oUQEM9loSHngMmDRAl8wZkNQcJ%2B%2F3l6fRMCJPRg6ueMSoyVvj6GW8LfcTBySezDRY8UN0KGhd49stStgW8RIqdassHTMD65KVcYmL%2B2X8DKPrOg0RCdzRR9pzPYhpaUUHEfOYDP8lwQ&X-Amz-Signature=f110f3224847ed17540e866e330fe13d1b870bebbcc0d3bfdf231002e1ef115e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FT6UC3S%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsxj98Y3ExhHplBW59mK0jk55BZEVJPbpn4cRgSLwU5gIhANV9eLHnOhdjWVuZj7loa%2Fbl5LHaI1p8rwPFt7IebDNFKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeBesDewp0Lxn8ei8q3APpG8pwiyVQtdKNQif%2FPfvv0d9XoE9EbhghKdOoMDUV8G3ku2%2FGUrLV9eO%2BQ2eQlkVURjzQ34%2BQH3sImOaL9zSPqi676c9i%2B3Q7nxvp9raUYWBMyxa23yWpQOAEwpXL%2BEmF6jJiuSIhM%2B%2F7pyxsi52iDKT%2FPvSsAWOxyJZ71JSt6gDsFCSKSpAieXHQXGopU655we8j0qfb2KZ6qYPPkh%2BFH65pwvP0giua6UA5NsLotrnf9BsAb%2BKsgzvRSFe15%2FLJa6OHV%2BS4KurpECtUab%2Fc4fk0S3OaMpF0G%2FSBOrQ7pS5EBx0OEbL6MATgE4%2FyaHtaVt%2FKyLXTGw326oiabndQg813jBfIPTWlfPm2qQ09IKj4hzaI3iGjAUQmGvHWqsju17kfGHVkgXR%2FiQZ7RtQVug6qg2OdUZXF7dr7R9fgefqZD1JmZtulbxmRnWk3WFYtq9d8eLF4oJTPtx1keBDRa8FGhnW0tCf4MInkXfVdLRG2JdFSs85uilC2suGvvcLHY3mzden8SJpoQZXYlDG2eHmvHX7nZrlvVw2xnRKNQ7MvyOI10mkfFAFA5N%2BbEXLniyf1KL8M5btDfQyYiBMriWz30WfZc3KGhIE06WGd6NiEMF%2FWQz5KyEP8mzCiwfjBBjqkAVFgwtidypQpN7csXDMcnR%2F17ZWdVMZOY4HmF%2B9iNMTnzrBMnmY3R1WqC39RZxyXd1dYtsxfJ2CaBWmt8oUQEM9loSHngMmDRAl8wZkNQcJ%2B%2F3l6fRMCJPRg6ueMSoyVvj6GW8LfcTBySezDRY8UN0KGhd49stStgW8RIqdassHTMD65KVcYmL%2B2X8DKPrOg0RCdzRR9pzPYhpaUUHEfOYDP8lwQ&X-Amz-Signature=0cbece52bbe12ac03cf61b30220147415db1f63545f659682c23da3304452af5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FT6UC3S%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsxj98Y3ExhHplBW59mK0jk55BZEVJPbpn4cRgSLwU5gIhANV9eLHnOhdjWVuZj7loa%2Fbl5LHaI1p8rwPFt7IebDNFKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeBesDewp0Lxn8ei8q3APpG8pwiyVQtdKNQif%2FPfvv0d9XoE9EbhghKdOoMDUV8G3ku2%2FGUrLV9eO%2BQ2eQlkVURjzQ34%2BQH3sImOaL9zSPqi676c9i%2B3Q7nxvp9raUYWBMyxa23yWpQOAEwpXL%2BEmF6jJiuSIhM%2B%2F7pyxsi52iDKT%2FPvSsAWOxyJZ71JSt6gDsFCSKSpAieXHQXGopU655we8j0qfb2KZ6qYPPkh%2BFH65pwvP0giua6UA5NsLotrnf9BsAb%2BKsgzvRSFe15%2FLJa6OHV%2BS4KurpECtUab%2Fc4fk0S3OaMpF0G%2FSBOrQ7pS5EBx0OEbL6MATgE4%2FyaHtaVt%2FKyLXTGw326oiabndQg813jBfIPTWlfPm2qQ09IKj4hzaI3iGjAUQmGvHWqsju17kfGHVkgXR%2FiQZ7RtQVug6qg2OdUZXF7dr7R9fgefqZD1JmZtulbxmRnWk3WFYtq9d8eLF4oJTPtx1keBDRa8FGhnW0tCf4MInkXfVdLRG2JdFSs85uilC2suGvvcLHY3mzden8SJpoQZXYlDG2eHmvHX7nZrlvVw2xnRKNQ7MvyOI10mkfFAFA5N%2BbEXLniyf1KL8M5btDfQyYiBMriWz30WfZc3KGhIE06WGd6NiEMF%2FWQz5KyEP8mzCiwfjBBjqkAVFgwtidypQpN7csXDMcnR%2F17ZWdVMZOY4HmF%2B9iNMTnzrBMnmY3R1WqC39RZxyXd1dYtsxfJ2CaBWmt8oUQEM9loSHngMmDRAl8wZkNQcJ%2B%2F3l6fRMCJPRg6ueMSoyVvj6GW8LfcTBySezDRY8UN0KGhd49stStgW8RIqdassHTMD65KVcYmL%2B2X8DKPrOg0RCdzRR9pzPYhpaUUHEfOYDP8lwQ&X-Amz-Signature=4f4c33385d656a26e078e6777700446c11525c6cc26bb7f63f70543d3df36854&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FT6UC3S%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCsxj98Y3ExhHplBW59mK0jk55BZEVJPbpn4cRgSLwU5gIhANV9eLHnOhdjWVuZj7loa%2Fbl5LHaI1p8rwPFt7IebDNFKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeBesDewp0Lxn8ei8q3APpG8pwiyVQtdKNQif%2FPfvv0d9XoE9EbhghKdOoMDUV8G3ku2%2FGUrLV9eO%2BQ2eQlkVURjzQ34%2BQH3sImOaL9zSPqi676c9i%2B3Q7nxvp9raUYWBMyxa23yWpQOAEwpXL%2BEmF6jJiuSIhM%2B%2F7pyxsi52iDKT%2FPvSsAWOxyJZ71JSt6gDsFCSKSpAieXHQXGopU655we8j0qfb2KZ6qYPPkh%2BFH65pwvP0giua6UA5NsLotrnf9BsAb%2BKsgzvRSFe15%2FLJa6OHV%2BS4KurpECtUab%2Fc4fk0S3OaMpF0G%2FSBOrQ7pS5EBx0OEbL6MATgE4%2FyaHtaVt%2FKyLXTGw326oiabndQg813jBfIPTWlfPm2qQ09IKj4hzaI3iGjAUQmGvHWqsju17kfGHVkgXR%2FiQZ7RtQVug6qg2OdUZXF7dr7R9fgefqZD1JmZtulbxmRnWk3WFYtq9d8eLF4oJTPtx1keBDRa8FGhnW0tCf4MInkXfVdLRG2JdFSs85uilC2suGvvcLHY3mzden8SJpoQZXYlDG2eHmvHX7nZrlvVw2xnRKNQ7MvyOI10mkfFAFA5N%2BbEXLniyf1KL8M5btDfQyYiBMriWz30WfZc3KGhIE06WGd6NiEMF%2FWQz5KyEP8mzCiwfjBBjqkAVFgwtidypQpN7csXDMcnR%2F17ZWdVMZOY4HmF%2B9iNMTnzrBMnmY3R1WqC39RZxyXd1dYtsxfJ2CaBWmt8oUQEM9loSHngMmDRAl8wZkNQcJ%2B%2F3l6fRMCJPRg6ueMSoyVvj6GW8LfcTBySezDRY8UN0KGhd49stStgW8RIqdassHTMD65KVcYmL%2B2X8DKPrOg0RCdzRR9pzPYhpaUUHEfOYDP8lwQ&X-Amz-Signature=62ca65c0f5f86b5e271603e88670a25e7f172fe6f4bd1ec0a62ad813d7539d19&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
