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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNLFYQV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC29EvtJFgmYGWNLWTS2oupvFl87pDhkNApTVLuA7lE4AiEAi0UZbPsztZMJ9kDuBccmFCeuNga2Y8RkzcDJoHtSfjMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDK%2Bscs17yHBNKL8BDyrcAzKscEHpzl4CeIcKYoZS8uqIZ17nuwbASNE6ADbVIJHGUDYdXcgW5j3HmvCY6ACvM%2FcUfyyDhWdENHxorS8R6Hi2NR5D%2F1wG3nJkoLFFYPCoLH80lGazHOURR5whMecWXG5B2jDPTClghcuQdkkkCWmjRA8mw7QLuyXGwQSHgwCKNSBBD3PeQaiQ2EK8Cp1HaIluU1C%2FPVedWUSsHZWl0llZWuXJ%2Bdc4%2BHH4OR5CpYxVss89PKGQIbOO2W8cWSME5t1y60Nftfe%2BmM%2FSkmc2pQ96W39l8Mo3RZmv7Uur4hHU2SEk0xYf6%2B73fo80gD5QE5ud3AxXQEbHnp1vdf8wde2kX%2BEVA%2FzslCQIrrij%2FY2pOQu10mfraCOZRW07X1KK84AcimGvyfjIlrmWQUVM67a2TMW%2BvUzhfSGLE2kjfaFtLsrgMitxxjgSrGJ1P5wZt0zsqNH2VHWjmBQPlEPV81z03f4rAtlVQ6%2BkNbN%2Fc8Vf%2Bw2gfl7uAfYQcI8QqVMe3pThVdKCwjk7IIXn6p3T5B4WQ1ZtnJseNCd%2FkKi8U%2FPoqsfLzNxfa94KfIlabGKclWS4YaItj%2BJQnqktVfzNyeXe1W1xIHVTWGslIa8Us7BjKrEhSABfDfJZvNynMLyX4sAGOqUBMhw6mr3ETNEK%2B5SGkY8iU2iJx0dYHQSb3ygkl9W772DDl5gHE9sShGDoLAEuVRSrQYI71VyzJbpgqNXDYaVZbFHNVh6NGeuDOOtF3O0mEi2PtIWV%2BeKziRGrpmENRlocd3zxpUmdjpNrLNVl%2FxevAgSIp1LFDSxkXrCMM4PvnOEyy7kfD21tlGBR3MDBESkdK9JoekdX3HvOAObytAE7xY8Ma8kU&X-Amz-Signature=7720fdecd1eaee781b00372bf2c21cadc6c57413aed79eedd70a4a9c2b0f9834&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNLFYQV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC29EvtJFgmYGWNLWTS2oupvFl87pDhkNApTVLuA7lE4AiEAi0UZbPsztZMJ9kDuBccmFCeuNga2Y8RkzcDJoHtSfjMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDK%2Bscs17yHBNKL8BDyrcAzKscEHpzl4CeIcKYoZS8uqIZ17nuwbASNE6ADbVIJHGUDYdXcgW5j3HmvCY6ACvM%2FcUfyyDhWdENHxorS8R6Hi2NR5D%2F1wG3nJkoLFFYPCoLH80lGazHOURR5whMecWXG5B2jDPTClghcuQdkkkCWmjRA8mw7QLuyXGwQSHgwCKNSBBD3PeQaiQ2EK8Cp1HaIluU1C%2FPVedWUSsHZWl0llZWuXJ%2Bdc4%2BHH4OR5CpYxVss89PKGQIbOO2W8cWSME5t1y60Nftfe%2BmM%2FSkmc2pQ96W39l8Mo3RZmv7Uur4hHU2SEk0xYf6%2B73fo80gD5QE5ud3AxXQEbHnp1vdf8wde2kX%2BEVA%2FzslCQIrrij%2FY2pOQu10mfraCOZRW07X1KK84AcimGvyfjIlrmWQUVM67a2TMW%2BvUzhfSGLE2kjfaFtLsrgMitxxjgSrGJ1P5wZt0zsqNH2VHWjmBQPlEPV81z03f4rAtlVQ6%2BkNbN%2Fc8Vf%2Bw2gfl7uAfYQcI8QqVMe3pThVdKCwjk7IIXn6p3T5B4WQ1ZtnJseNCd%2FkKi8U%2FPoqsfLzNxfa94KfIlabGKclWS4YaItj%2BJQnqktVfzNyeXe1W1xIHVTWGslIa8Us7BjKrEhSABfDfJZvNynMLyX4sAGOqUBMhw6mr3ETNEK%2B5SGkY8iU2iJx0dYHQSb3ygkl9W772DDl5gHE9sShGDoLAEuVRSrQYI71VyzJbpgqNXDYaVZbFHNVh6NGeuDOOtF3O0mEi2PtIWV%2BeKziRGrpmENRlocd3zxpUmdjpNrLNVl%2FxevAgSIp1LFDSxkXrCMM4PvnOEyy7kfD21tlGBR3MDBESkdK9JoekdX3HvOAObytAE7xY8Ma8kU&X-Amz-Signature=cd8df72aefb13896368435b73e26417ef251f8bc8a7367dc87e82a95fd3a1539&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNLFYQV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC29EvtJFgmYGWNLWTS2oupvFl87pDhkNApTVLuA7lE4AiEAi0UZbPsztZMJ9kDuBccmFCeuNga2Y8RkzcDJoHtSfjMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDK%2Bscs17yHBNKL8BDyrcAzKscEHpzl4CeIcKYoZS8uqIZ17nuwbASNE6ADbVIJHGUDYdXcgW5j3HmvCY6ACvM%2FcUfyyDhWdENHxorS8R6Hi2NR5D%2F1wG3nJkoLFFYPCoLH80lGazHOURR5whMecWXG5B2jDPTClghcuQdkkkCWmjRA8mw7QLuyXGwQSHgwCKNSBBD3PeQaiQ2EK8Cp1HaIluU1C%2FPVedWUSsHZWl0llZWuXJ%2Bdc4%2BHH4OR5CpYxVss89PKGQIbOO2W8cWSME5t1y60Nftfe%2BmM%2FSkmc2pQ96W39l8Mo3RZmv7Uur4hHU2SEk0xYf6%2B73fo80gD5QE5ud3AxXQEbHnp1vdf8wde2kX%2BEVA%2FzslCQIrrij%2FY2pOQu10mfraCOZRW07X1KK84AcimGvyfjIlrmWQUVM67a2TMW%2BvUzhfSGLE2kjfaFtLsrgMitxxjgSrGJ1P5wZt0zsqNH2VHWjmBQPlEPV81z03f4rAtlVQ6%2BkNbN%2Fc8Vf%2Bw2gfl7uAfYQcI8QqVMe3pThVdKCwjk7IIXn6p3T5B4WQ1ZtnJseNCd%2FkKi8U%2FPoqsfLzNxfa94KfIlabGKclWS4YaItj%2BJQnqktVfzNyeXe1W1xIHVTWGslIa8Us7BjKrEhSABfDfJZvNynMLyX4sAGOqUBMhw6mr3ETNEK%2B5SGkY8iU2iJx0dYHQSb3ygkl9W772DDl5gHE9sShGDoLAEuVRSrQYI71VyzJbpgqNXDYaVZbFHNVh6NGeuDOOtF3O0mEi2PtIWV%2BeKziRGrpmENRlocd3zxpUmdjpNrLNVl%2FxevAgSIp1LFDSxkXrCMM4PvnOEyy7kfD21tlGBR3MDBESkdK9JoekdX3HvOAObytAE7xY8Ma8kU&X-Amz-Signature=43e9f13e69f1c56a0d23ac2d86ee5f0b4953edd070ec5d4bbffdc626ba3717e4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNLFYQV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC29EvtJFgmYGWNLWTS2oupvFl87pDhkNApTVLuA7lE4AiEAi0UZbPsztZMJ9kDuBccmFCeuNga2Y8RkzcDJoHtSfjMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDK%2Bscs17yHBNKL8BDyrcAzKscEHpzl4CeIcKYoZS8uqIZ17nuwbASNE6ADbVIJHGUDYdXcgW5j3HmvCY6ACvM%2FcUfyyDhWdENHxorS8R6Hi2NR5D%2F1wG3nJkoLFFYPCoLH80lGazHOURR5whMecWXG5B2jDPTClghcuQdkkkCWmjRA8mw7QLuyXGwQSHgwCKNSBBD3PeQaiQ2EK8Cp1HaIluU1C%2FPVedWUSsHZWl0llZWuXJ%2Bdc4%2BHH4OR5CpYxVss89PKGQIbOO2W8cWSME5t1y60Nftfe%2BmM%2FSkmc2pQ96W39l8Mo3RZmv7Uur4hHU2SEk0xYf6%2B73fo80gD5QE5ud3AxXQEbHnp1vdf8wde2kX%2BEVA%2FzslCQIrrij%2FY2pOQu10mfraCOZRW07X1KK84AcimGvyfjIlrmWQUVM67a2TMW%2BvUzhfSGLE2kjfaFtLsrgMitxxjgSrGJ1P5wZt0zsqNH2VHWjmBQPlEPV81z03f4rAtlVQ6%2BkNbN%2Fc8Vf%2Bw2gfl7uAfYQcI8QqVMe3pThVdKCwjk7IIXn6p3T5B4WQ1ZtnJseNCd%2FkKi8U%2FPoqsfLzNxfa94KfIlabGKclWS4YaItj%2BJQnqktVfzNyeXe1W1xIHVTWGslIa8Us7BjKrEhSABfDfJZvNynMLyX4sAGOqUBMhw6mr3ETNEK%2B5SGkY8iU2iJx0dYHQSb3ygkl9W772DDl5gHE9sShGDoLAEuVRSrQYI71VyzJbpgqNXDYaVZbFHNVh6NGeuDOOtF3O0mEi2PtIWV%2BeKziRGrpmENRlocd3zxpUmdjpNrLNVl%2FxevAgSIp1LFDSxkXrCMM4PvnOEyy7kfD21tlGBR3MDBESkdK9JoekdX3HvOAObytAE7xY8Ma8kU&X-Amz-Signature=b866a9ed4c4456b8723602a952f2adc509f0372d62adf068fe7b17365aeeaf23&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNLFYQV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC29EvtJFgmYGWNLWTS2oupvFl87pDhkNApTVLuA7lE4AiEAi0UZbPsztZMJ9kDuBccmFCeuNga2Y8RkzcDJoHtSfjMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDK%2Bscs17yHBNKL8BDyrcAzKscEHpzl4CeIcKYoZS8uqIZ17nuwbASNE6ADbVIJHGUDYdXcgW5j3HmvCY6ACvM%2FcUfyyDhWdENHxorS8R6Hi2NR5D%2F1wG3nJkoLFFYPCoLH80lGazHOURR5whMecWXG5B2jDPTClghcuQdkkkCWmjRA8mw7QLuyXGwQSHgwCKNSBBD3PeQaiQ2EK8Cp1HaIluU1C%2FPVedWUSsHZWl0llZWuXJ%2Bdc4%2BHH4OR5CpYxVss89PKGQIbOO2W8cWSME5t1y60Nftfe%2BmM%2FSkmc2pQ96W39l8Mo3RZmv7Uur4hHU2SEk0xYf6%2B73fo80gD5QE5ud3AxXQEbHnp1vdf8wde2kX%2BEVA%2FzslCQIrrij%2FY2pOQu10mfraCOZRW07X1KK84AcimGvyfjIlrmWQUVM67a2TMW%2BvUzhfSGLE2kjfaFtLsrgMitxxjgSrGJ1P5wZt0zsqNH2VHWjmBQPlEPV81z03f4rAtlVQ6%2BkNbN%2Fc8Vf%2Bw2gfl7uAfYQcI8QqVMe3pThVdKCwjk7IIXn6p3T5B4WQ1ZtnJseNCd%2FkKi8U%2FPoqsfLzNxfa94KfIlabGKclWS4YaItj%2BJQnqktVfzNyeXe1W1xIHVTWGslIa8Us7BjKrEhSABfDfJZvNynMLyX4sAGOqUBMhw6mr3ETNEK%2B5SGkY8iU2iJx0dYHQSb3ygkl9W772DDl5gHE9sShGDoLAEuVRSrQYI71VyzJbpgqNXDYaVZbFHNVh6NGeuDOOtF3O0mEi2PtIWV%2BeKziRGrpmENRlocd3zxpUmdjpNrLNVl%2FxevAgSIp1LFDSxkXrCMM4PvnOEyy7kfD21tlGBR3MDBESkdK9JoekdX3HvOAObytAE7xY8Ma8kU&X-Amz-Signature=1c261fe0a86d171d711dc63a6b2d3d2f70e919cb5bbcd561d8eedc7e276e0a17&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNLFYQV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC29EvtJFgmYGWNLWTS2oupvFl87pDhkNApTVLuA7lE4AiEAi0UZbPsztZMJ9kDuBccmFCeuNga2Y8RkzcDJoHtSfjMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDK%2Bscs17yHBNKL8BDyrcAzKscEHpzl4CeIcKYoZS8uqIZ17nuwbASNE6ADbVIJHGUDYdXcgW5j3HmvCY6ACvM%2FcUfyyDhWdENHxorS8R6Hi2NR5D%2F1wG3nJkoLFFYPCoLH80lGazHOURR5whMecWXG5B2jDPTClghcuQdkkkCWmjRA8mw7QLuyXGwQSHgwCKNSBBD3PeQaiQ2EK8Cp1HaIluU1C%2FPVedWUSsHZWl0llZWuXJ%2Bdc4%2BHH4OR5CpYxVss89PKGQIbOO2W8cWSME5t1y60Nftfe%2BmM%2FSkmc2pQ96W39l8Mo3RZmv7Uur4hHU2SEk0xYf6%2B73fo80gD5QE5ud3AxXQEbHnp1vdf8wde2kX%2BEVA%2FzslCQIrrij%2FY2pOQu10mfraCOZRW07X1KK84AcimGvyfjIlrmWQUVM67a2TMW%2BvUzhfSGLE2kjfaFtLsrgMitxxjgSrGJ1P5wZt0zsqNH2VHWjmBQPlEPV81z03f4rAtlVQ6%2BkNbN%2Fc8Vf%2Bw2gfl7uAfYQcI8QqVMe3pThVdKCwjk7IIXn6p3T5B4WQ1ZtnJseNCd%2FkKi8U%2FPoqsfLzNxfa94KfIlabGKclWS4YaItj%2BJQnqktVfzNyeXe1W1xIHVTWGslIa8Us7BjKrEhSABfDfJZvNynMLyX4sAGOqUBMhw6mr3ETNEK%2B5SGkY8iU2iJx0dYHQSb3ygkl9W772DDl5gHE9sShGDoLAEuVRSrQYI71VyzJbpgqNXDYaVZbFHNVh6NGeuDOOtF3O0mEi2PtIWV%2BeKziRGrpmENRlocd3zxpUmdjpNrLNVl%2FxevAgSIp1LFDSxkXrCMM4PvnOEyy7kfD21tlGBR3MDBESkdK9JoekdX3HvOAObytAE7xY8Ma8kU&X-Amz-Signature=ff80b3a06278114688c3ae5b81a5577324f5111b1687fd31d9b11317aa762a34&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNLFYQV%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC29EvtJFgmYGWNLWTS2oupvFl87pDhkNApTVLuA7lE4AiEAi0UZbPsztZMJ9kDuBccmFCeuNga2Y8RkzcDJoHtSfjMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDK%2Bscs17yHBNKL8BDyrcAzKscEHpzl4CeIcKYoZS8uqIZ17nuwbASNE6ADbVIJHGUDYdXcgW5j3HmvCY6ACvM%2FcUfyyDhWdENHxorS8R6Hi2NR5D%2F1wG3nJkoLFFYPCoLH80lGazHOURR5whMecWXG5B2jDPTClghcuQdkkkCWmjRA8mw7QLuyXGwQSHgwCKNSBBD3PeQaiQ2EK8Cp1HaIluU1C%2FPVedWUSsHZWl0llZWuXJ%2Bdc4%2BHH4OR5CpYxVss89PKGQIbOO2W8cWSME5t1y60Nftfe%2BmM%2FSkmc2pQ96W39l8Mo3RZmv7Uur4hHU2SEk0xYf6%2B73fo80gD5QE5ud3AxXQEbHnp1vdf8wde2kX%2BEVA%2FzslCQIrrij%2FY2pOQu10mfraCOZRW07X1KK84AcimGvyfjIlrmWQUVM67a2TMW%2BvUzhfSGLE2kjfaFtLsrgMitxxjgSrGJ1P5wZt0zsqNH2VHWjmBQPlEPV81z03f4rAtlVQ6%2BkNbN%2Fc8Vf%2Bw2gfl7uAfYQcI8QqVMe3pThVdKCwjk7IIXn6p3T5B4WQ1ZtnJseNCd%2FkKi8U%2FPoqsfLzNxfa94KfIlabGKclWS4YaItj%2BJQnqktVfzNyeXe1W1xIHVTWGslIa8Us7BjKrEhSABfDfJZvNynMLyX4sAGOqUBMhw6mr3ETNEK%2B5SGkY8iU2iJx0dYHQSb3ygkl9W772DDl5gHE9sShGDoLAEuVRSrQYI71VyzJbpgqNXDYaVZbFHNVh6NGeuDOOtF3O0mEi2PtIWV%2BeKziRGrpmENRlocd3zxpUmdjpNrLNVl%2FxevAgSIp1LFDSxkXrCMM4PvnOEyy7kfD21tlGBR3MDBESkdK9JoekdX3HvOAObytAE7xY8Ma8kU&X-Amz-Signature=97ea072666bae2476182316fc9bbf99aea069099a7315f5c5e2b29f74eb6c56f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
