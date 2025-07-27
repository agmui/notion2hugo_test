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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHZHK3N%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDCWhG7IVh27ydKGR%2FremXIiwxnTdQwRO0BJOu16KvB9AIgC%2BUT%2FwEUO%2Bae9M%2B8ClmVXCwlNZPSKvm49x3lm%2FjKynYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGhbOyoK0P2NHVXsVircAz16wIAggveKMeAmVFQOfYLS0pMq9ohHjTqR4t%2FL%2BBV%2Fbiqr%2FHMkWVXqdIUq3RxfqO%2FtBjROJzl6R3wzCaZRS1hie905a3d8TDRR5gKvx2K%2FogjFRqmFVLAMSlOszhgtG%2FzsHC7O%2BGN9aPnebhA5wNVPUPHrNsn3%2Frl3l85ZBKuPMkdybzst6laTTnguvFIawyj67mHLtle8SqAHtlElDYDa%2FLoysRKa5qMfjZGXPD8fgrHwIY%2FUSma6hbJ03pAUxGm9bKUWpoAJ6owL5LSVCMrNKOxvseltnUw68fxk91Lik2rPvlBTRRfn9JGhH7xjmuBF3b1oBIxAwey5TUIyfXmuTV%2Bhjd4t35Dg9fz0tCJVkcUOToy06eZZorMfpAKs%2Fe5fZX4iNQDvVtj9RjtPM8iCogYAQD051BvDaoumVO%2FWZRES5aoEbsZLvocZuFTSWDU%2FLDEvSsp0aJPW8fZeZGZY4PpoCmnblT7EqbTqfFHqUkBPoo1PkZtkuTF2DsJWrm3bvG%2Fco7mr3u8MFnVWdap7eSqQik5knEMudICAZqpmeHXuJKQI33NwPLKcUk1B4JXnEksqsGHAGmLuMb7uHFdLm3Ocd4evt937cIDcFxy3Q%2BRR8xa9NmUVtY5zMJq7lsQGOqUBnfOVWCRBAr2XzvtrTBc1pXySyu1lal1Qtlocy3y4yEugmxE0H03bl9cfE%2FLzsVHh3sTvUXORVGAAaikbpMDkmVsyGuDIjN2BmIT9vtE6vwuVCnpVF%2FwlLf69o6HJ9c2nvZTAiTesP0MwOphlXFbVtWct%2BM%2FMKzdnnss3Z8cnUrJvVW4%2By96Mrvl0zyolIMUItfjQaUKaN7yiJt2hZQriA6msV3Qf&X-Amz-Signature=0cac6a6a9662d5da39eaf2f444d0bd5599992d42d6f6f1adefd2483454469882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHZHK3N%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDCWhG7IVh27ydKGR%2FremXIiwxnTdQwRO0BJOu16KvB9AIgC%2BUT%2FwEUO%2Bae9M%2B8ClmVXCwlNZPSKvm49x3lm%2FjKynYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGhbOyoK0P2NHVXsVircAz16wIAggveKMeAmVFQOfYLS0pMq9ohHjTqR4t%2FL%2BBV%2Fbiqr%2FHMkWVXqdIUq3RxfqO%2FtBjROJzl6R3wzCaZRS1hie905a3d8TDRR5gKvx2K%2FogjFRqmFVLAMSlOszhgtG%2FzsHC7O%2BGN9aPnebhA5wNVPUPHrNsn3%2Frl3l85ZBKuPMkdybzst6laTTnguvFIawyj67mHLtle8SqAHtlElDYDa%2FLoysRKa5qMfjZGXPD8fgrHwIY%2FUSma6hbJ03pAUxGm9bKUWpoAJ6owL5LSVCMrNKOxvseltnUw68fxk91Lik2rPvlBTRRfn9JGhH7xjmuBF3b1oBIxAwey5TUIyfXmuTV%2Bhjd4t35Dg9fz0tCJVkcUOToy06eZZorMfpAKs%2Fe5fZX4iNQDvVtj9RjtPM8iCogYAQD051BvDaoumVO%2FWZRES5aoEbsZLvocZuFTSWDU%2FLDEvSsp0aJPW8fZeZGZY4PpoCmnblT7EqbTqfFHqUkBPoo1PkZtkuTF2DsJWrm3bvG%2Fco7mr3u8MFnVWdap7eSqQik5knEMudICAZqpmeHXuJKQI33NwPLKcUk1B4JXnEksqsGHAGmLuMb7uHFdLm3Ocd4evt937cIDcFxy3Q%2BRR8xa9NmUVtY5zMJq7lsQGOqUBnfOVWCRBAr2XzvtrTBc1pXySyu1lal1Qtlocy3y4yEugmxE0H03bl9cfE%2FLzsVHh3sTvUXORVGAAaikbpMDkmVsyGuDIjN2BmIT9vtE6vwuVCnpVF%2FwlLf69o6HJ9c2nvZTAiTesP0MwOphlXFbVtWct%2BM%2FMKzdnnss3Z8cnUrJvVW4%2By96Mrvl0zyolIMUItfjQaUKaN7yiJt2hZQriA6msV3Qf&X-Amz-Signature=dd8263fca27130fe74d0a6d7e2a916ddad35bfe7ab9c577b6604745e1ec3cfdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHZHK3N%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDCWhG7IVh27ydKGR%2FremXIiwxnTdQwRO0BJOu16KvB9AIgC%2BUT%2FwEUO%2Bae9M%2B8ClmVXCwlNZPSKvm49x3lm%2FjKynYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGhbOyoK0P2NHVXsVircAz16wIAggveKMeAmVFQOfYLS0pMq9ohHjTqR4t%2FL%2BBV%2Fbiqr%2FHMkWVXqdIUq3RxfqO%2FtBjROJzl6R3wzCaZRS1hie905a3d8TDRR5gKvx2K%2FogjFRqmFVLAMSlOszhgtG%2FzsHC7O%2BGN9aPnebhA5wNVPUPHrNsn3%2Frl3l85ZBKuPMkdybzst6laTTnguvFIawyj67mHLtle8SqAHtlElDYDa%2FLoysRKa5qMfjZGXPD8fgrHwIY%2FUSma6hbJ03pAUxGm9bKUWpoAJ6owL5LSVCMrNKOxvseltnUw68fxk91Lik2rPvlBTRRfn9JGhH7xjmuBF3b1oBIxAwey5TUIyfXmuTV%2Bhjd4t35Dg9fz0tCJVkcUOToy06eZZorMfpAKs%2Fe5fZX4iNQDvVtj9RjtPM8iCogYAQD051BvDaoumVO%2FWZRES5aoEbsZLvocZuFTSWDU%2FLDEvSsp0aJPW8fZeZGZY4PpoCmnblT7EqbTqfFHqUkBPoo1PkZtkuTF2DsJWrm3bvG%2Fco7mr3u8MFnVWdap7eSqQik5knEMudICAZqpmeHXuJKQI33NwPLKcUk1B4JXnEksqsGHAGmLuMb7uHFdLm3Ocd4evt937cIDcFxy3Q%2BRR8xa9NmUVtY5zMJq7lsQGOqUBnfOVWCRBAr2XzvtrTBc1pXySyu1lal1Qtlocy3y4yEugmxE0H03bl9cfE%2FLzsVHh3sTvUXORVGAAaikbpMDkmVsyGuDIjN2BmIT9vtE6vwuVCnpVF%2FwlLf69o6HJ9c2nvZTAiTesP0MwOphlXFbVtWct%2BM%2FMKzdnnss3Z8cnUrJvVW4%2By96Mrvl0zyolIMUItfjQaUKaN7yiJt2hZQriA6msV3Qf&X-Amz-Signature=cc2d4eeefc5823f803b7e6b1f1ab28ad6cd00d30b4eda0ad18fa40c5804c7707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHZHK3N%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDCWhG7IVh27ydKGR%2FremXIiwxnTdQwRO0BJOu16KvB9AIgC%2BUT%2FwEUO%2Bae9M%2B8ClmVXCwlNZPSKvm49x3lm%2FjKynYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGhbOyoK0P2NHVXsVircAz16wIAggveKMeAmVFQOfYLS0pMq9ohHjTqR4t%2FL%2BBV%2Fbiqr%2FHMkWVXqdIUq3RxfqO%2FtBjROJzl6R3wzCaZRS1hie905a3d8TDRR5gKvx2K%2FogjFRqmFVLAMSlOszhgtG%2FzsHC7O%2BGN9aPnebhA5wNVPUPHrNsn3%2Frl3l85ZBKuPMkdybzst6laTTnguvFIawyj67mHLtle8SqAHtlElDYDa%2FLoysRKa5qMfjZGXPD8fgrHwIY%2FUSma6hbJ03pAUxGm9bKUWpoAJ6owL5LSVCMrNKOxvseltnUw68fxk91Lik2rPvlBTRRfn9JGhH7xjmuBF3b1oBIxAwey5TUIyfXmuTV%2Bhjd4t35Dg9fz0tCJVkcUOToy06eZZorMfpAKs%2Fe5fZX4iNQDvVtj9RjtPM8iCogYAQD051BvDaoumVO%2FWZRES5aoEbsZLvocZuFTSWDU%2FLDEvSsp0aJPW8fZeZGZY4PpoCmnblT7EqbTqfFHqUkBPoo1PkZtkuTF2DsJWrm3bvG%2Fco7mr3u8MFnVWdap7eSqQik5knEMudICAZqpmeHXuJKQI33NwPLKcUk1B4JXnEksqsGHAGmLuMb7uHFdLm3Ocd4evt937cIDcFxy3Q%2BRR8xa9NmUVtY5zMJq7lsQGOqUBnfOVWCRBAr2XzvtrTBc1pXySyu1lal1Qtlocy3y4yEugmxE0H03bl9cfE%2FLzsVHh3sTvUXORVGAAaikbpMDkmVsyGuDIjN2BmIT9vtE6vwuVCnpVF%2FwlLf69o6HJ9c2nvZTAiTesP0MwOphlXFbVtWct%2BM%2FMKzdnnss3Z8cnUrJvVW4%2By96Mrvl0zyolIMUItfjQaUKaN7yiJt2hZQriA6msV3Qf&X-Amz-Signature=ce78178de84bca17613929bf3926cac71ed45a4fef31691b50127a105977bed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHZHK3N%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDCWhG7IVh27ydKGR%2FremXIiwxnTdQwRO0BJOu16KvB9AIgC%2BUT%2FwEUO%2Bae9M%2B8ClmVXCwlNZPSKvm49x3lm%2FjKynYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGhbOyoK0P2NHVXsVircAz16wIAggveKMeAmVFQOfYLS0pMq9ohHjTqR4t%2FL%2BBV%2Fbiqr%2FHMkWVXqdIUq3RxfqO%2FtBjROJzl6R3wzCaZRS1hie905a3d8TDRR5gKvx2K%2FogjFRqmFVLAMSlOszhgtG%2FzsHC7O%2BGN9aPnebhA5wNVPUPHrNsn3%2Frl3l85ZBKuPMkdybzst6laTTnguvFIawyj67mHLtle8SqAHtlElDYDa%2FLoysRKa5qMfjZGXPD8fgrHwIY%2FUSma6hbJ03pAUxGm9bKUWpoAJ6owL5LSVCMrNKOxvseltnUw68fxk91Lik2rPvlBTRRfn9JGhH7xjmuBF3b1oBIxAwey5TUIyfXmuTV%2Bhjd4t35Dg9fz0tCJVkcUOToy06eZZorMfpAKs%2Fe5fZX4iNQDvVtj9RjtPM8iCogYAQD051BvDaoumVO%2FWZRES5aoEbsZLvocZuFTSWDU%2FLDEvSsp0aJPW8fZeZGZY4PpoCmnblT7EqbTqfFHqUkBPoo1PkZtkuTF2DsJWrm3bvG%2Fco7mr3u8MFnVWdap7eSqQik5knEMudICAZqpmeHXuJKQI33NwPLKcUk1B4JXnEksqsGHAGmLuMb7uHFdLm3Ocd4evt937cIDcFxy3Q%2BRR8xa9NmUVtY5zMJq7lsQGOqUBnfOVWCRBAr2XzvtrTBc1pXySyu1lal1Qtlocy3y4yEugmxE0H03bl9cfE%2FLzsVHh3sTvUXORVGAAaikbpMDkmVsyGuDIjN2BmIT9vtE6vwuVCnpVF%2FwlLf69o6HJ9c2nvZTAiTesP0MwOphlXFbVtWct%2BM%2FMKzdnnss3Z8cnUrJvVW4%2By96Mrvl0zyolIMUItfjQaUKaN7yiJt2hZQriA6msV3Qf&X-Amz-Signature=a5219d2016724b7ca570ea661b54126c14c95403aca6a2073a4a053fd03587d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHZHK3N%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDCWhG7IVh27ydKGR%2FremXIiwxnTdQwRO0BJOu16KvB9AIgC%2BUT%2FwEUO%2Bae9M%2B8ClmVXCwlNZPSKvm49x3lm%2FjKynYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGhbOyoK0P2NHVXsVircAz16wIAggveKMeAmVFQOfYLS0pMq9ohHjTqR4t%2FL%2BBV%2Fbiqr%2FHMkWVXqdIUq3RxfqO%2FtBjROJzl6R3wzCaZRS1hie905a3d8TDRR5gKvx2K%2FogjFRqmFVLAMSlOszhgtG%2FzsHC7O%2BGN9aPnebhA5wNVPUPHrNsn3%2Frl3l85ZBKuPMkdybzst6laTTnguvFIawyj67mHLtle8SqAHtlElDYDa%2FLoysRKa5qMfjZGXPD8fgrHwIY%2FUSma6hbJ03pAUxGm9bKUWpoAJ6owL5LSVCMrNKOxvseltnUw68fxk91Lik2rPvlBTRRfn9JGhH7xjmuBF3b1oBIxAwey5TUIyfXmuTV%2Bhjd4t35Dg9fz0tCJVkcUOToy06eZZorMfpAKs%2Fe5fZX4iNQDvVtj9RjtPM8iCogYAQD051BvDaoumVO%2FWZRES5aoEbsZLvocZuFTSWDU%2FLDEvSsp0aJPW8fZeZGZY4PpoCmnblT7EqbTqfFHqUkBPoo1PkZtkuTF2DsJWrm3bvG%2Fco7mr3u8MFnVWdap7eSqQik5knEMudICAZqpmeHXuJKQI33NwPLKcUk1B4JXnEksqsGHAGmLuMb7uHFdLm3Ocd4evt937cIDcFxy3Q%2BRR8xa9NmUVtY5zMJq7lsQGOqUBnfOVWCRBAr2XzvtrTBc1pXySyu1lal1Qtlocy3y4yEugmxE0H03bl9cfE%2FLzsVHh3sTvUXORVGAAaikbpMDkmVsyGuDIjN2BmIT9vtE6vwuVCnpVF%2FwlLf69o6HJ9c2nvZTAiTesP0MwOphlXFbVtWct%2BM%2FMKzdnnss3Z8cnUrJvVW4%2By96Mrvl0zyolIMUItfjQaUKaN7yiJt2hZQriA6msV3Qf&X-Amz-Signature=e69fc55349a717db136ee0e52021a9c820a1ed8392680f3cb27ef46e6eef35d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHZHK3N%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDCWhG7IVh27ydKGR%2FremXIiwxnTdQwRO0BJOu16KvB9AIgC%2BUT%2FwEUO%2Bae9M%2B8ClmVXCwlNZPSKvm49x3lm%2FjKynYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGhbOyoK0P2NHVXsVircAz16wIAggveKMeAmVFQOfYLS0pMq9ohHjTqR4t%2FL%2BBV%2Fbiqr%2FHMkWVXqdIUq3RxfqO%2FtBjROJzl6R3wzCaZRS1hie905a3d8TDRR5gKvx2K%2FogjFRqmFVLAMSlOszhgtG%2FzsHC7O%2BGN9aPnebhA5wNVPUPHrNsn3%2Frl3l85ZBKuPMkdybzst6laTTnguvFIawyj67mHLtle8SqAHtlElDYDa%2FLoysRKa5qMfjZGXPD8fgrHwIY%2FUSma6hbJ03pAUxGm9bKUWpoAJ6owL5LSVCMrNKOxvseltnUw68fxk91Lik2rPvlBTRRfn9JGhH7xjmuBF3b1oBIxAwey5TUIyfXmuTV%2Bhjd4t35Dg9fz0tCJVkcUOToy06eZZorMfpAKs%2Fe5fZX4iNQDvVtj9RjtPM8iCogYAQD051BvDaoumVO%2FWZRES5aoEbsZLvocZuFTSWDU%2FLDEvSsp0aJPW8fZeZGZY4PpoCmnblT7EqbTqfFHqUkBPoo1PkZtkuTF2DsJWrm3bvG%2Fco7mr3u8MFnVWdap7eSqQik5knEMudICAZqpmeHXuJKQI33NwPLKcUk1B4JXnEksqsGHAGmLuMb7uHFdLm3Ocd4evt937cIDcFxy3Q%2BRR8xa9NmUVtY5zMJq7lsQGOqUBnfOVWCRBAr2XzvtrTBc1pXySyu1lal1Qtlocy3y4yEugmxE0H03bl9cfE%2FLzsVHh3sTvUXORVGAAaikbpMDkmVsyGuDIjN2BmIT9vtE6vwuVCnpVF%2FwlLf69o6HJ9c2nvZTAiTesP0MwOphlXFbVtWct%2BM%2FMKzdnnss3Z8cnUrJvVW4%2By96Mrvl0zyolIMUItfjQaUKaN7yiJt2hZQriA6msV3Qf&X-Amz-Signature=2533a62f6942300bd3e341a496278e23c9d90cb1b33a77252918e037b0b1945b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
