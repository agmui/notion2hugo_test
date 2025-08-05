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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AWXUIX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5DV9o7F%2Bx%2Fc14OsGTep8vNS6ZSQJvn%2BHbv3sVlvyAMAiEA9zSBDokm6Q%2BNhh53i7V22pkvgt1iTBoZhIdpQTpgorcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJ8G88rImuk%2Fg8B%2FtyrcA7XTY6TpQ6C6LX2K%2FFyBanpCMP4gNCon9akWKpFtXC6%2F%2BHTuwlNycHxqtVbFKMWlJzMDOQtB6kWp3bE7cYI%2Bs24vbLEzyWK%2FIo1RBKGQIGLX4H2h%2FaXw3Vaai1Cj3HwCyuJ52hbxWGS5iHDx1d1LKnWsFxOaPBTLSlFNhC4go0%2FjQSULrdINMepxFWMnnPKzzIp5HTLlMwv3zEGVc7pefiOaaMmbO5IDmdgjnAeOM%2FTjn6vjl8OCJ215QSsqOzM2KkIOzJaw51e3Cr68EE9mjJ12OEuuL1a7iWXR39BsPPiMlI8SB815vlOg%2BvH6CEoHJKRvwIKm%2FKftT%2BSAAvi0d1a4iAkcoCSTi%2FMsvv3b%2BNFNXp5eeHSHxkOAQnzK9AEKm49NeaEaiREFXfteBlmjRb2wKYgr0XVwVPhDrCiZ0V7Cm1c%2B%2Fx0s1lIQQw4TJDyxT8%2B9Wd%2FiXBz7N6H%2Bu5MJoHx%2F4i8c6J%2FA%2FSxsogZAGkIEVsgwn21Ty2dWG71tmIzNOiQDKahlgnFD%2Fs987CXoJGK6gf5sEgeFRfuJIrmtZtpcq%2BRunHqvib0WpmRx9w9nJI7dal7qMvqEHp%2BhDXENRgmLWJqEKYMQITVdvVrT4eTBdi3ys%2F6c1r6vxPVsMK%2BEyMQGOqUBXTtNAaeloFTOAXXFuUyigdAsTWXf5HceoKE2fogIJZWvkLokL%2BS1RGb7JNPRJ3oqR5e3HIYV4lYO7HtfzHvgCYe8QgPv%2BU2yLR%2BYaMvJBL%2FoL7fyTHN%2Bz0PZ41eMOrWEBHnJMdzuxH2j1aT61aHSRpCtCx3i%2FQa5dhx55rEBGIyRWOzmt7LPQLkmOtKEdcqWA30%2BynuKD2OWIJpuANO1G7SeC%2B%2F6&X-Amz-Signature=b031916c495138ce685a297cbf37ef8fd15563e64101b62b38fa77e3ef6ce55d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AWXUIX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5DV9o7F%2Bx%2Fc14OsGTep8vNS6ZSQJvn%2BHbv3sVlvyAMAiEA9zSBDokm6Q%2BNhh53i7V22pkvgt1iTBoZhIdpQTpgorcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJ8G88rImuk%2Fg8B%2FtyrcA7XTY6TpQ6C6LX2K%2FFyBanpCMP4gNCon9akWKpFtXC6%2F%2BHTuwlNycHxqtVbFKMWlJzMDOQtB6kWp3bE7cYI%2Bs24vbLEzyWK%2FIo1RBKGQIGLX4H2h%2FaXw3Vaai1Cj3HwCyuJ52hbxWGS5iHDx1d1LKnWsFxOaPBTLSlFNhC4go0%2FjQSULrdINMepxFWMnnPKzzIp5HTLlMwv3zEGVc7pefiOaaMmbO5IDmdgjnAeOM%2FTjn6vjl8OCJ215QSsqOzM2KkIOzJaw51e3Cr68EE9mjJ12OEuuL1a7iWXR39BsPPiMlI8SB815vlOg%2BvH6CEoHJKRvwIKm%2FKftT%2BSAAvi0d1a4iAkcoCSTi%2FMsvv3b%2BNFNXp5eeHSHxkOAQnzK9AEKm49NeaEaiREFXfteBlmjRb2wKYgr0XVwVPhDrCiZ0V7Cm1c%2B%2Fx0s1lIQQw4TJDyxT8%2B9Wd%2FiXBz7N6H%2Bu5MJoHx%2F4i8c6J%2FA%2FSxsogZAGkIEVsgwn21Ty2dWG71tmIzNOiQDKahlgnFD%2Fs987CXoJGK6gf5sEgeFRfuJIrmtZtpcq%2BRunHqvib0WpmRx9w9nJI7dal7qMvqEHp%2BhDXENRgmLWJqEKYMQITVdvVrT4eTBdi3ys%2F6c1r6vxPVsMK%2BEyMQGOqUBXTtNAaeloFTOAXXFuUyigdAsTWXf5HceoKE2fogIJZWvkLokL%2BS1RGb7JNPRJ3oqR5e3HIYV4lYO7HtfzHvgCYe8QgPv%2BU2yLR%2BYaMvJBL%2FoL7fyTHN%2Bz0PZ41eMOrWEBHnJMdzuxH2j1aT61aHSRpCtCx3i%2FQa5dhx55rEBGIyRWOzmt7LPQLkmOtKEdcqWA30%2BynuKD2OWIJpuANO1G7SeC%2B%2F6&X-Amz-Signature=94e78111248a7a3bb7aa03b35d01b83779e20b47c68c43a880d3dd4c3373296e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AWXUIX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5DV9o7F%2Bx%2Fc14OsGTep8vNS6ZSQJvn%2BHbv3sVlvyAMAiEA9zSBDokm6Q%2BNhh53i7V22pkvgt1iTBoZhIdpQTpgorcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJ8G88rImuk%2Fg8B%2FtyrcA7XTY6TpQ6C6LX2K%2FFyBanpCMP4gNCon9akWKpFtXC6%2F%2BHTuwlNycHxqtVbFKMWlJzMDOQtB6kWp3bE7cYI%2Bs24vbLEzyWK%2FIo1RBKGQIGLX4H2h%2FaXw3Vaai1Cj3HwCyuJ52hbxWGS5iHDx1d1LKnWsFxOaPBTLSlFNhC4go0%2FjQSULrdINMepxFWMnnPKzzIp5HTLlMwv3zEGVc7pefiOaaMmbO5IDmdgjnAeOM%2FTjn6vjl8OCJ215QSsqOzM2KkIOzJaw51e3Cr68EE9mjJ12OEuuL1a7iWXR39BsPPiMlI8SB815vlOg%2BvH6CEoHJKRvwIKm%2FKftT%2BSAAvi0d1a4iAkcoCSTi%2FMsvv3b%2BNFNXp5eeHSHxkOAQnzK9AEKm49NeaEaiREFXfteBlmjRb2wKYgr0XVwVPhDrCiZ0V7Cm1c%2B%2Fx0s1lIQQw4TJDyxT8%2B9Wd%2FiXBz7N6H%2Bu5MJoHx%2F4i8c6J%2FA%2FSxsogZAGkIEVsgwn21Ty2dWG71tmIzNOiQDKahlgnFD%2Fs987CXoJGK6gf5sEgeFRfuJIrmtZtpcq%2BRunHqvib0WpmRx9w9nJI7dal7qMvqEHp%2BhDXENRgmLWJqEKYMQITVdvVrT4eTBdi3ys%2F6c1r6vxPVsMK%2BEyMQGOqUBXTtNAaeloFTOAXXFuUyigdAsTWXf5HceoKE2fogIJZWvkLokL%2BS1RGb7JNPRJ3oqR5e3HIYV4lYO7HtfzHvgCYe8QgPv%2BU2yLR%2BYaMvJBL%2FoL7fyTHN%2Bz0PZ41eMOrWEBHnJMdzuxH2j1aT61aHSRpCtCx3i%2FQa5dhx55rEBGIyRWOzmt7LPQLkmOtKEdcqWA30%2BynuKD2OWIJpuANO1G7SeC%2B%2F6&X-Amz-Signature=ac4f980d863e3b7ea8d89507a4eb59c3ee25a369cec0aa053968635c079fddeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AWXUIX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5DV9o7F%2Bx%2Fc14OsGTep8vNS6ZSQJvn%2BHbv3sVlvyAMAiEA9zSBDokm6Q%2BNhh53i7V22pkvgt1iTBoZhIdpQTpgorcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJ8G88rImuk%2Fg8B%2FtyrcA7XTY6TpQ6C6LX2K%2FFyBanpCMP4gNCon9akWKpFtXC6%2F%2BHTuwlNycHxqtVbFKMWlJzMDOQtB6kWp3bE7cYI%2Bs24vbLEzyWK%2FIo1RBKGQIGLX4H2h%2FaXw3Vaai1Cj3HwCyuJ52hbxWGS5iHDx1d1LKnWsFxOaPBTLSlFNhC4go0%2FjQSULrdINMepxFWMnnPKzzIp5HTLlMwv3zEGVc7pefiOaaMmbO5IDmdgjnAeOM%2FTjn6vjl8OCJ215QSsqOzM2KkIOzJaw51e3Cr68EE9mjJ12OEuuL1a7iWXR39BsPPiMlI8SB815vlOg%2BvH6CEoHJKRvwIKm%2FKftT%2BSAAvi0d1a4iAkcoCSTi%2FMsvv3b%2BNFNXp5eeHSHxkOAQnzK9AEKm49NeaEaiREFXfteBlmjRb2wKYgr0XVwVPhDrCiZ0V7Cm1c%2B%2Fx0s1lIQQw4TJDyxT8%2B9Wd%2FiXBz7N6H%2Bu5MJoHx%2F4i8c6J%2FA%2FSxsogZAGkIEVsgwn21Ty2dWG71tmIzNOiQDKahlgnFD%2Fs987CXoJGK6gf5sEgeFRfuJIrmtZtpcq%2BRunHqvib0WpmRx9w9nJI7dal7qMvqEHp%2BhDXENRgmLWJqEKYMQITVdvVrT4eTBdi3ys%2F6c1r6vxPVsMK%2BEyMQGOqUBXTtNAaeloFTOAXXFuUyigdAsTWXf5HceoKE2fogIJZWvkLokL%2BS1RGb7JNPRJ3oqR5e3HIYV4lYO7HtfzHvgCYe8QgPv%2BU2yLR%2BYaMvJBL%2FoL7fyTHN%2Bz0PZ41eMOrWEBHnJMdzuxH2j1aT61aHSRpCtCx3i%2FQa5dhx55rEBGIyRWOzmt7LPQLkmOtKEdcqWA30%2BynuKD2OWIJpuANO1G7SeC%2B%2F6&X-Amz-Signature=33ccdf9fb7f2370ad7d1f2470f513ed33cc98c99de7d4b1cf05b22db5d8a8e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AWXUIX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5DV9o7F%2Bx%2Fc14OsGTep8vNS6ZSQJvn%2BHbv3sVlvyAMAiEA9zSBDokm6Q%2BNhh53i7V22pkvgt1iTBoZhIdpQTpgorcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJ8G88rImuk%2Fg8B%2FtyrcA7XTY6TpQ6C6LX2K%2FFyBanpCMP4gNCon9akWKpFtXC6%2F%2BHTuwlNycHxqtVbFKMWlJzMDOQtB6kWp3bE7cYI%2Bs24vbLEzyWK%2FIo1RBKGQIGLX4H2h%2FaXw3Vaai1Cj3HwCyuJ52hbxWGS5iHDx1d1LKnWsFxOaPBTLSlFNhC4go0%2FjQSULrdINMepxFWMnnPKzzIp5HTLlMwv3zEGVc7pefiOaaMmbO5IDmdgjnAeOM%2FTjn6vjl8OCJ215QSsqOzM2KkIOzJaw51e3Cr68EE9mjJ12OEuuL1a7iWXR39BsPPiMlI8SB815vlOg%2BvH6CEoHJKRvwIKm%2FKftT%2BSAAvi0d1a4iAkcoCSTi%2FMsvv3b%2BNFNXp5eeHSHxkOAQnzK9AEKm49NeaEaiREFXfteBlmjRb2wKYgr0XVwVPhDrCiZ0V7Cm1c%2B%2Fx0s1lIQQw4TJDyxT8%2B9Wd%2FiXBz7N6H%2Bu5MJoHx%2F4i8c6J%2FA%2FSxsogZAGkIEVsgwn21Ty2dWG71tmIzNOiQDKahlgnFD%2Fs987CXoJGK6gf5sEgeFRfuJIrmtZtpcq%2BRunHqvib0WpmRx9w9nJI7dal7qMvqEHp%2BhDXENRgmLWJqEKYMQITVdvVrT4eTBdi3ys%2F6c1r6vxPVsMK%2BEyMQGOqUBXTtNAaeloFTOAXXFuUyigdAsTWXf5HceoKE2fogIJZWvkLokL%2BS1RGb7JNPRJ3oqR5e3HIYV4lYO7HtfzHvgCYe8QgPv%2BU2yLR%2BYaMvJBL%2FoL7fyTHN%2Bz0PZ41eMOrWEBHnJMdzuxH2j1aT61aHSRpCtCx3i%2FQa5dhx55rEBGIyRWOzmt7LPQLkmOtKEdcqWA30%2BynuKD2OWIJpuANO1G7SeC%2B%2F6&X-Amz-Signature=c8eb7d1cf7a193fbc775bf23b18cf188e0e24c5be8dd15c92f33830f0351879f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AWXUIX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5DV9o7F%2Bx%2Fc14OsGTep8vNS6ZSQJvn%2BHbv3sVlvyAMAiEA9zSBDokm6Q%2BNhh53i7V22pkvgt1iTBoZhIdpQTpgorcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJ8G88rImuk%2Fg8B%2FtyrcA7XTY6TpQ6C6LX2K%2FFyBanpCMP4gNCon9akWKpFtXC6%2F%2BHTuwlNycHxqtVbFKMWlJzMDOQtB6kWp3bE7cYI%2Bs24vbLEzyWK%2FIo1RBKGQIGLX4H2h%2FaXw3Vaai1Cj3HwCyuJ52hbxWGS5iHDx1d1LKnWsFxOaPBTLSlFNhC4go0%2FjQSULrdINMepxFWMnnPKzzIp5HTLlMwv3zEGVc7pefiOaaMmbO5IDmdgjnAeOM%2FTjn6vjl8OCJ215QSsqOzM2KkIOzJaw51e3Cr68EE9mjJ12OEuuL1a7iWXR39BsPPiMlI8SB815vlOg%2BvH6CEoHJKRvwIKm%2FKftT%2BSAAvi0d1a4iAkcoCSTi%2FMsvv3b%2BNFNXp5eeHSHxkOAQnzK9AEKm49NeaEaiREFXfteBlmjRb2wKYgr0XVwVPhDrCiZ0V7Cm1c%2B%2Fx0s1lIQQw4TJDyxT8%2B9Wd%2FiXBz7N6H%2Bu5MJoHx%2F4i8c6J%2FA%2FSxsogZAGkIEVsgwn21Ty2dWG71tmIzNOiQDKahlgnFD%2Fs987CXoJGK6gf5sEgeFRfuJIrmtZtpcq%2BRunHqvib0WpmRx9w9nJI7dal7qMvqEHp%2BhDXENRgmLWJqEKYMQITVdvVrT4eTBdi3ys%2F6c1r6vxPVsMK%2BEyMQGOqUBXTtNAaeloFTOAXXFuUyigdAsTWXf5HceoKE2fogIJZWvkLokL%2BS1RGb7JNPRJ3oqR5e3HIYV4lYO7HtfzHvgCYe8QgPv%2BU2yLR%2BYaMvJBL%2FoL7fyTHN%2Bz0PZ41eMOrWEBHnJMdzuxH2j1aT61aHSRpCtCx3i%2FQa5dhx55rEBGIyRWOzmt7LPQLkmOtKEdcqWA30%2BynuKD2OWIJpuANO1G7SeC%2B%2F6&X-Amz-Signature=581761ec2b9c9a5aebcdf1a4402744ab42e62c8255d6f1c7c95c9842ca108c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AWXUIX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5DV9o7F%2Bx%2Fc14OsGTep8vNS6ZSQJvn%2BHbv3sVlvyAMAiEA9zSBDokm6Q%2BNhh53i7V22pkvgt1iTBoZhIdpQTpgorcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJ8G88rImuk%2Fg8B%2FtyrcA7XTY6TpQ6C6LX2K%2FFyBanpCMP4gNCon9akWKpFtXC6%2F%2BHTuwlNycHxqtVbFKMWlJzMDOQtB6kWp3bE7cYI%2Bs24vbLEzyWK%2FIo1RBKGQIGLX4H2h%2FaXw3Vaai1Cj3HwCyuJ52hbxWGS5iHDx1d1LKnWsFxOaPBTLSlFNhC4go0%2FjQSULrdINMepxFWMnnPKzzIp5HTLlMwv3zEGVc7pefiOaaMmbO5IDmdgjnAeOM%2FTjn6vjl8OCJ215QSsqOzM2KkIOzJaw51e3Cr68EE9mjJ12OEuuL1a7iWXR39BsPPiMlI8SB815vlOg%2BvH6CEoHJKRvwIKm%2FKftT%2BSAAvi0d1a4iAkcoCSTi%2FMsvv3b%2BNFNXp5eeHSHxkOAQnzK9AEKm49NeaEaiREFXfteBlmjRb2wKYgr0XVwVPhDrCiZ0V7Cm1c%2B%2Fx0s1lIQQw4TJDyxT8%2B9Wd%2FiXBz7N6H%2Bu5MJoHx%2F4i8c6J%2FA%2FSxsogZAGkIEVsgwn21Ty2dWG71tmIzNOiQDKahlgnFD%2Fs987CXoJGK6gf5sEgeFRfuJIrmtZtpcq%2BRunHqvib0WpmRx9w9nJI7dal7qMvqEHp%2BhDXENRgmLWJqEKYMQITVdvVrT4eTBdi3ys%2F6c1r6vxPVsMK%2BEyMQGOqUBXTtNAaeloFTOAXXFuUyigdAsTWXf5HceoKE2fogIJZWvkLokL%2BS1RGb7JNPRJ3oqR5e3HIYV4lYO7HtfzHvgCYe8QgPv%2BU2yLR%2BYaMvJBL%2FoL7fyTHN%2Bz0PZ41eMOrWEBHnJMdzuxH2j1aT61aHSRpCtCx3i%2FQa5dhx55rEBGIyRWOzmt7LPQLkmOtKEdcqWA30%2BynuKD2OWIJpuANO1G7SeC%2B%2F6&X-Amz-Signature=2a2ceca8f514c7aec19bea374792e6465b043b0d516278001144e376b0a1c4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
